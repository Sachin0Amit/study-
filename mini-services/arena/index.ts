/**
 * StudyVerse Arena — real-time multiplayer quiz-battle service.
 *
 * Independent bun service on port 3031 (fronted by the sandbox gateway via
 * `?XTransformPort=3031`). Handles matchmaking, per-player option shuffling
 * (anti-cheat: the correct index never leaves this process before an answer
 * is locked in), live scoring, ELO persistence and a tiny battle chat.
 *
 * Question sourcing: the Next.js app on 127.0.0.1:3000 /api/arena/pool
 * (server-to-server). Falls back to an embedded neutral seed set.
 */

import express from 'express'
import { createServer } from 'node:http'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Server, type Socket } from 'socket.io'

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

const PORT = 3031
const NEXT_API = 'http://127.0.0.1:3000'
const QUESTION_COUNT = 10
const QUESTION_SECONDS = 25 // per-question timeout (auto-wrong when silent)
const COUNTDOWN_SECONDS = 5
const NEXT_GAP_MS = 1200 // pause between questions
const K_FACTOR = 32
const START_ELO = 1200
const POOL_TIMEOUT_MS = 6000
const CHAT_MAX = 200
const NAME_MAX = 24
const LADDER_SIZE = 20
const SEED_SECTION_ID = 'x-arena-seed'

const ELO_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'data')
const ELO_FILE = path.join(ELO_DIR, 'elo.json')

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

/** A question as served by the pool API (canonical, includes the answer). */
interface PoolQuestion {
  q: string
  options: string[]
  answer: number
  explanation: string
  sectionId: string
  sectionTitle: string
  chapterTitle: string
  subjectName: string
}

/** What one player is allowed to see for a question — no answer, own shuffle. */
interface PlayerQuestionView {
  index: number
  q: string
  options: string[]
  sectionTitle: string
  subjectName: string
}

interface PlayerSlot {
  socketId: string
  deviceId: string
  name: string
  points: number
  correctCount: number
  answered: boolean // current question
  times: number[] // seconds per answered question
  results: boolean[] // correctness per question, index-aligned (post-match analysis)
  connected: boolean
  isBot?: boolean // server-side bot opponent (synthetic id, no real socket)
}

interface Room {
  id: string
  subject: string | null
  p1: PlayerSlot
  p2: PlayerSlot
  questions: PoolQuestion[] // canonical — NEVER sent to clients
  /** per-player, per-question shuffled options + correct index (server-side only) */
  views: { p1: ShuffledView[]; p2: ShuffledView[] }
  qIndex: number
  phase: 'countdown' | 'question' | 'between' | 'ended'
  tStart: number
  countdownTimer?: ReturnType<typeof setInterval>
  questionTimer?: ReturnType<typeof setTimeout>
  advanceTimer?: ReturnType<typeof setTimeout>
  /** non-null → practice room vs a server-side bot (never matchmade) */
  bot: BotState | null
}

interface ShuffledView {
  options: string[]
  correct: number
}

interface PlayerRecord {
  name: string
  elo: number
  wins: number
  losses: number
  draws: number
  streak: number // + win streak, − loss streak
  updatedAt: string
}

interface QueueEntry {
  socketId: string
  deviceId: string
  name: string
  subject: string | null
  joinedAt: number
}

/* ------------------------------------------------------------------ */
/*  Bot opponents                                                      */
/* ------------------------------------------------------------------ */

type BotDifficulty = 'rookie' | 'skilled' | 'master' | 'adaptive'

interface BotProfile {
  name: string
  seedElo: number
  /** answer delay range, seconds */
  latency: [number, number]
  /** probability a sampled answer is correct */
  accuracy: [number, number]
  quips: string[]
}

const BOT_PROFILES: Record<BotDifficulty, BotProfile> = {
  rookie: {
    name: 'Pixel (Rookie Bot)',
    seedElo: 1000,
    latency: [4, 8],
    accuracy: [0.35, 0.45],
    quips: ['gl hf! still learning this one', 'ooh, tricky', 'wait, i know this… maybe', 'practise makes better'],
  },
  skilled: {
    name: 'Vector (Skilled Bot)',
    seedElo: 1400,
    latency: [2.5, 5],
    accuracy: [0.6, 0.75],
    quips: ['ready when you are', 'speed is part of the game', 'nice pace', 'locking in'],
  },
  master: {
    name: 'Sovereign (Master Bot)',
    seedElo: 1800,
    latency: [1.2, 3],
    accuracy: [0.85, 0.95],
    quips: ['observe', 'the clock is a weapon too', 'efficient', 'you will get there'],
  },
  adaptive: {
    name: 'Mirror (Adaptive Bot)',
    seedElo: 1200,
    latency: [2, 4],
    accuracy: [0.7, 0.9],
    quips: ['i am your pace', 'mirroring…', 'let us see who blinks', 'interesting tempo'],
  },
}

/** Live bot bookkeeping inside a room (timers cleared with the room). */
interface BotState {
  difficulty: BotDifficulty
  role: 'p1' | 'p2'
  timers: ReturnType<typeof setTimeout>[]
}

/* ------------------------------------------------------------------ */
/*  Small helpers                                                      */
/* ------------------------------------------------------------------ */

function ts(): string {
  return new Date().toISOString()
}

function log(...args: unknown[]): void {
  console.log(`[arena ${ts()}]`, ...args)
}

/** FNV-1a string hash → uint32 */
function hashStr(s: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h >>> 0
}

/** mulberry32 seeded PRNG */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Deterministic 4-option shuffle for one player + one question. */
function shuffledView(seedKey: string, q: PoolQuestion): ShuffledView {
  const rand = mulberry32(hashStr(seedKey))
  const perm = [0, 1, 2, 3]
  for (let i = perm.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[perm[i], perm[j]] = [perm[j], perm[i]]
  }
  if (perm.every((v, i) => v === i)) {
    ;[perm[0], perm[1]] = [perm[1], perm[0]]
  }
  return { options: perm.map((i) => q.options[i]), correct: perm.indexOf(q.answer) }
}

/** Escape HTML-significant characters (chat + names are echoed to peers). */
function escapeHtml(s: string): string {
  return s
    .replace(/[&<>"']/g, (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string
    )
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '')
}

function cleanName(raw: unknown): string {
  const s = typeof raw === 'string' ? raw : ''
  return escapeHtml(s.trim().slice(0, NAME_MAX)) || 'Player'
}

/* ------------------------------------------------------------------ */
/*  Embedded fallback seed (neutral logic/math, no exam references)    */
/* ------------------------------------------------------------------ */

const SEED_QUESTIONS: PoolQuestion[] = [
  {
    q: 'A jacket costs $40 after a 20% discount. What was its original price?',
    options: ['$48', '$50', '$52', '$45'],
    answer: 1,
    explanation: 'After a 20% discount you pay 80%: 0.8 × price = $40, so price = $40 / 0.8 = $50.',
    sectionId: SEED_SECTION_ID,
    sectionTitle: 'Mixed logic & math',
    chapterTitle: 'Arena warm-up set',
    subjectName: 'Mixed',
  },
  {
    q: 'What is the next number in the sequence 2, 6, 12, 20, 30, …?',
    options: ['36', '40', '42', '46'],
    answer: 2,
    explanation: 'The pattern is n² + n: 1·2, 2·3, 3·4, 4·5, 5·6, so the next term is 6·7 = 42.',
    sectionId: SEED_SECTION_ID,
    sectionTitle: 'Mixed logic & math',
    chapterTitle: 'Arena warm-up set',
    subjectName: 'Mixed',
  },
  {
    q: 'A bat and a ball cost $1.10 together. The bat costs $1.00 more than the ball. How much does the ball cost?',
    options: ['$0.10', '$0.05', '$0.15', '$0.01'],
    answer: 1,
    explanation: 'If the ball costs b, the bat costs b + 1.00. Then 2b + 1.00 = 1.10, so b = $0.05.',
    sectionId: SEED_SECTION_ID,
    sectionTitle: 'Mixed logic & math',
    chapterTitle: 'Arena warm-up set',
    subjectName: 'Mixed',
  },
  {
    q: 'All bloops are razzies. All razzies are lazzies. Are all bloops definitely lazzies?',
    options: ['Yes', 'No', 'Only some', 'Cannot be determined'],
    answer: 0,
    explanation: 'This is a valid syllogism (transitivity of ⊆): bloops ⊆ razzies ⊆ lazzies, so every bloop is a lazzie.',
    sectionId: SEED_SECTION_ID,
    sectionTitle: 'Mixed logic & math',
    chapterTitle: 'Arena warm-up set',
    subjectName: 'Mixed',
  },
  {
    q: 'Which of these numbers is prime?',
    options: ['91', '87', '97', '119'],
    answer: 2,
    explanation: '91 = 7 × 13, 87 = 3 × 29, 119 = 7 × 17, while 97 has no divisor other than 1 and itself.',
    sectionId: SEED_SECTION_ID,
    sectionTitle: 'Mixed logic & math',
    chapterTitle: 'Arena warm-up set',
    subjectName: 'Mixed',
  },
  {
    q: 'What is log₂(32)?',
    options: ['4', '5', '6', '8'],
    answer: 1,
    explanation: '2⁵ = 32, so log₂(32) = 5.',
    sectionId: SEED_SECTION_ID,
    sectionTitle: 'Mixed logic & math',
    chapterTitle: 'Arena warm-up set',
    subjectName: 'Mixed',
  },
  {
    q: 'Simplify the Boolean expression A ∧ (A ∨ B).',
    options: ['A', 'B', 'A ∧ B', 'A ∨ B'],
    answer: 0,
    explanation: 'By the absorption law, A ∧ (A ∨ B) = A.',
    sectionId: SEED_SECTION_ID,
    sectionTitle: 'Mixed logic & math',
    chapterTitle: 'Arena warm-up set',
    subjectName: 'Mixed',
  },
  {
    q: 'Today is Wednesday. What day of the week will it be 100 days from now?',
    options: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    answer: 1,
    explanation: '100 mod 7 = 2, so the weekday advances by 2: Wednesday → Friday.',
    sectionId: SEED_SECTION_ID,
    sectionTitle: 'Mixed logic & math',
    chapterTitle: 'Arena warm-up set',
    subjectName: 'Mixed',
  },
  {
    q: 'A train covers 60 km in 45 minutes. What is its average speed?',
    options: ['70 km/h', '75 km/h', '80 km/h', '90 km/h'],
    answer: 2,
    explanation: '45 minutes is 0.75 h, so speed = 60 / 0.75 = 80 km/h.',
    sectionId: SEED_SECTION_ID,
    sectionTitle: 'Mixed logic & math',
    chapterTitle: 'Arena warm-up set',
    subjectName: 'Mixed',
  },
  {
    q: 'What is the median of the list 3, 7, 9, 12, 15?',
    options: ['7', '9', '9.2', '12'],
    answer: 1,
    explanation: 'Sorted, the middle (third of five) value is 9.',
    sectionId: SEED_SECTION_ID,
    sectionTitle: 'Mixed logic & math',
    chapterTitle: 'Arena warm-up set',
    subjectName: 'Mixed',
  },
]

/* ------------------------------------------------------------------ */
/*  ELO book — persisted JSON, debounce-saved                          */
/* ------------------------------------------------------------------ */

let eloBook: Record<string, PlayerRecord> = {}
let eloSaveTimer: ReturnType<typeof setTimeout> | null = null

async function loadElo(): Promise<void> {
  try {
    const raw = await readFile(ELO_FILE, 'utf8')
    const parsed = JSON.parse(raw) as Record<string, PlayerRecord>
    if (parsed && typeof parsed === 'object') eloBook = parsed
    log(`elo book loaded (${Object.keys(eloBook).length} players)`)
  } catch {
    eloBook = {}
    log('elo book absent — starting fresh')
  }
}

function queueEloSave(): void {
  if (eloSaveTimer) return
  eloSaveTimer = setTimeout(() => {
    eloSaveTimer = null
    mkdir(ELO_DIR, { recursive: true })
      .then(() => writeFile(ELO_FILE, JSON.stringify(eloBook, null, 2)))
      .then(() => log(`elo book saved (${Object.keys(eloBook).length} players)`))
      .catch((err) => console.error(`[arena ${ts()}] elo save failed:`, err))
  }, 800)
}

/** Fetch-or-create a player record; keeps the latest used name. Bots pass a seed ELO. */
function record(deviceId: string, name?: string, seedElo?: number): PlayerRecord {
  let r = eloBook[deviceId]
  if (!r) {
    r = {
      name: name || 'Player',
      elo: typeof seedElo === 'number' && seedElo > 0 ? Math.round(seedElo) : START_ELO,
      wins: 0,
      losses: 0,
      draws: 0,
      streak: 0,
      updatedAt: new Date().toISOString(),
    }
    eloBook[deviceId] = r
  }
  if (name && r.name !== name) r.name = name
  r.updatedAt = new Date().toISOString()
  queueEloSave()
  return r
}

/* ------------------------------------------------------------------ */
/*  Twin evidence — fire-and-forget POSTs to the Next app              */
/* ------------------------------------------------------------------ */

function postTwin(deviceId: string, skillKey: string, correct: boolean): void {
  if (!skillKey || skillKey === SEED_SECTION_ID) return
  fetch(`${NEXT_API}/api/twin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ deviceId, skillKey, kind: 'arena', correct, weight: 1 }),
  }).catch(() => {})
}

/* ------------------------------------------------------------------ */
/*  Question sourcing                                                  */
/* ------------------------------------------------------------------ */

async function fetchQuestions(subject: string | null): Promise<PoolQuestion[]> {
  const url = `${NEXT_API}/api/arena/pool?count=${QUESTION_COUNT}&subject=${encodeURIComponent(subject ?? '')}`
  // Retry a couple of times: the dev server can briefly drop keep-alive
  // sockets or restart under memory pressure — transient, not fatal.
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const ctrl = new AbortController()
      const to = setTimeout(() => ctrl.abort(), POOL_TIMEOUT_MS)
      const res = await fetch(url, { signal: ctrl.signal })
      clearTimeout(to)
      if (!res.ok) throw new Error(`pool responded ${res.status}`)
      const data = (await res.json()) as { questions?: PoolQuestion[] }
      const qs = Array.isArray(data.questions)
        ? data.questions.filter(
            (q) =>
              q &&
              typeof q.q === 'string' &&
              Array.isArray(q.options) &&
              q.options.length === 4 &&
              Number.isInteger(q.answer) &&
              q.answer >= 0 &&
              q.answer <= 3
          )
        : []
      if (qs.length >= 4) return qs.slice(0, QUESTION_COUNT)
      throw new Error(`pool returned only ${qs.length} usable questions`)
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      if (attempt < 3) {
        log(`pool fetch attempt ${attempt} failed (${msg}) — retrying`)
        await new Promise((r) => setTimeout(r, 400))
      } else {
        log(`pool fetch failed after ${attempt} attempts (${msg}) — using embedded seed`)
        return SEED_QUESTIONS.slice(0, QUESTION_COUNT)
      }
    }
  }
  return SEED_QUESTIONS.slice(0, QUESTION_COUNT)
}

/* ------------------------------------------------------------------ */
/*  Rooms + matchmaking                                                */
/* ------------------------------------------------------------------ */

/** A pair removed from the queue while its questions are being fetched. */
interface PendingPair {
  a: QueueEntry
  b: QueueEntry
}

const rooms = new Map<string, Room>()
const pendingPairs = new Map<string, PendingPair>() // keyed by both socketIds
let queue: QueueEntry[] = []

function removeFromQueue(socketId: string): void {
  const before = queue.length
  queue = queue.filter((e) => e.socketId !== socketId)
  if (queue.length !== before) announceQueuePositions()
}

/**
 * Abort a pair that is still fetching questions. The surviving partner goes
 * back to the FRONT of the queue so they keep their place.
 */
function abortPendingPair(socketId: string): void {
  const pair = pendingPairs.get(socketId)
  if (!pair) return
  pendingPairs.delete(pair.a.socketId)
  pendingPairs.delete(pair.b.socketId)
  const survivor = pair.a.socketId === socketId ? pair.b : pair.a
  if (!io.sockets.sockets.has(survivor.socketId)) return
  if (!queue.some((e) => e.socketId === survivor.socketId)) {
    queue.unshift(survivor)
    announceQueuePositions()
  }
}

function roleOf(room: Room, socketId: string): 'p1' | 'p2' | null {
  if (room.p1.socketId === socketId) return 'p1'
  if (room.p2.socketId === socketId) return 'p2'
  return null
}

function otherRole(role: 'p1' | 'p2'): 'p1' | 'p2' {
  return role === 'p1' ? 'p2' : 'p1'
}

/** Re-emit waiting positions to everyone still in queue. */
function announceQueuePositions(): void {
  queue.forEach((entry, i) => {
    io.to(entry.socketId).emit('queue:waiting', { position: i + 1 })
  })
}

function clearRoomTimers(room: Room): void {
  if (room.countdownTimer) clearInterval(room.countdownTimer)
  if (room.questionTimer) clearTimeout(room.questionTimer)
  if (room.advanceTimer) clearTimeout(room.advanceTimer)
  if (room.bot) {
    for (const t of room.bot.timers) clearTimeout(t)
    room.bot.timers = []
  }
  room.countdownTimer = undefined
  room.questionTimer = undefined
  room.advanceTimer = undefined
}

function destroyRoom(room: Room): void {
  clearRoomTimers(room)
  room.phase = 'ended'
  rooms.delete(room.id)
  for (const slot of [room.p1, room.p2]) {
    const sock = io.sockets.sockets.get(slot.socketId)
    if (sock) sock.data.roomInfo = undefined
  }
}

async function tryPair(entry: QueueEntry): Promise<void> {
  const idx = queue.findIndex((e) => e.socketId === entry.socketId)
  if (idx < 0) return
  // Subject-specific joiners only pair with the same subject; mixed joiners
  // pair with anyone (and honor the partner's subject choice).
  const partnerIdx = queue.findIndex(
    (e) =>
      e.socketId !== entry.socketId &&
      (entry.subject === null ? true : e.subject === entry.subject)
  )
  if (partnerIdx < 0) return

  const partner = queue[partnerIdx]
  const s1 = io.sockets.sockets.get(partner.socketId) // joined first → p1
  const s2 = io.sockets.sockets.get(entry.socketId)
  if (!s1 || !s2) {
    // One side vanished between queueing and pairing — drop the ghost, keep waiting.
    queue = queue.filter((e) => e.socketId !== partner.socketId && e.socketId !== entry.socketId)
    announceQueuePositions()
    return
  }

  queue = queue.filter((e) => e.socketId !== entry.socketId && e.socketId !== partner.socketId)
  const subject = entry.subject ?? partner.subject
  const pair: PendingPair = { a: partner, b: entry }
  pendingPairs.set(partner.socketId, pair)
  pendingPairs.set(entry.socketId, pair)
  announceQueuePositions()

  log(`match: "${partner.name}" vs "${entry.name}" (subject=${subject ?? 'mixed'}) — sourcing questions`)
  const questions = await fetchQuestions(subject)

  // Did anyone leave while we were fetching?
  if (pendingPairs.get(entry.socketId) !== pair) {
    log(`match aborted — someone left while sourcing questions`)
    return
  }
  pendingPairs.delete(partner.socketId)
  pendingPairs.delete(entry.socketId)
  if (!io.sockets.sockets.has(partner.socketId) || !io.sockets.sockets.has(entry.socketId)) {
    // Sockets dropped without a disconnect event reaching us yet — recover.
    const survivor = io.sockets.sockets.has(partner.socketId) ? partner : entry
    queue.unshift(survivor)
    announceQueuePositions()
    return
  }

  const roomId = 'r-' + Math.random().toString(36).slice(2, 10)
  const room: Room = {
    id: roomId,
    subject,
    p1: {
      socketId: partner.socketId,
      deviceId: partner.deviceId,
      name: partner.name,
      points: 0,
      correctCount: 0,
      answered: false,
      times: [],
      results: [],
      connected: true,
    },
    p2: {
      socketId: entry.socketId,
      deviceId: entry.deviceId,
      name: entry.name,
      points: 0,
      correctCount: 0,
      answered: false,
      times: [],
      results: [],
      connected: true,
    },
    questions,
    views: {
      p1: questions.map((q, i) => shuffledView(`${roomId}:${partner.deviceId}:${i}`, q)),
      p2: questions.map((q, i) => shuffledView(`${roomId}:${entry.deviceId}:${i}`, q)),
    },
    qIndex: -1,
    phase: 'countdown',
    tStart: 0,
    bot: null,
  }
  rooms.set(roomId, room)
  s1.data.roomInfo = { roomId, role: 'p1' as const }
  s2.data.roomInfo = { roomId, role: 'p2' as const }
  s1.join(roomId)
  s2.join(roomId)
  announceQueuePositions()

  // Personal, pre-shuffled question views — answers stay server-side.
  const viewFor = (role: 'p1' | 'p2'): PlayerQuestionView[] =>
    questions.map((q, i) => ({
      index: i,
      q: q.q,
      options: room.views[role][i].options,
      sectionTitle: q.sectionTitle,
      subjectName: q.subjectName,
    }))
  const elo1 = record(partner.deviceId, partner.name).elo
  const elo2 = record(entry.deviceId, entry.name).elo

  s1.emit('match', {
    roomId,
    opponent: { name: entry.name, elo: elo2 },
    questions: viewFor('p1'),
    youAre: 'p1',
  })
  s2.emit('match', {
    roomId,
    opponent: { name: partner.name, elo: elo1 },
    questions: viewFor('p2'),
    youAre: 'p2',
  })

  startCountdown(room)
}

function startCountdown(room: Room): void {
  room.phase = 'countdown'
  let remaining = COUNTDOWN_SECONDS
  io.to(room.id).emit('battle:countdown', { seconds: remaining })
  room.countdownTimer = setInterval(() => {
    remaining -= 1
    if (remaining > 0) {
      io.to(room.id).emit('battle:countdown', { seconds: remaining })
    } else {
      if (room.countdownTimer) clearInterval(room.countdownTimer)
      room.countdownTimer = undefined
      sendQuestion(room, 0)
    }
  }, 1000)
}

function sendQuestion(room: Room, index: number): void {
  if (room.phase === 'ended' || index >= room.questions.length) return
  room.qIndex = index
  room.phase = 'question'
  room.tStart = Date.now()
  room.p1.answered = false
  room.p2.answered = false
  const q = room.questions[index]
  log(`room ${room.id}: question ${index + 1}/${room.questions.length} (${q.subjectName})`)
  for (const role of ['p1', 'p2'] as const) {
    const sock = io.sockets.sockets.get(room[role].socketId)
    if (!sock || !room[role].connected) continue
    sock.emit('battle:question', {
      index,
      q: q.q,
      options: room.views[role][index].options,
      tStart: room.tStart,
    })
  }
  room.questionTimer = setTimeout(() => onQuestionTimeout(room), QUESTION_SECONDS * 1000)
  if (room.bot) scheduleBotAnswer(room, index)
}

function onQuestionTimeout(room: Room): void {
  if (room.phase !== 'question') return
  for (const role of ['p1', 'p2'] as const) {
    const slot = room[role]
    if (slot.answered || !slot.connected) continue
    slot.answered = true
    slot.times.push(QUESTION_SECONDS)
    slot.results.push(false)
    const sock = io.sockets.sockets.get(slot.socketId)
    if (sock) {
      sock.emit('battle:feedback', {
        index: room.qIndex,
        correct: false,
        answer: room.views[role][room.qIndex].correct,
        explanation: room.questions[room.qIndex].explanation,
        points: 0,
        tMs: QUESTION_SECONDS * 1000,
      })
    }
    io.to(room.id).emit('battle:opponent', {
      index: room.qIndex,
      answered: false,
      correct: false,
      tMs: QUESTION_SECONDS * 1000,
    })
    postTwin(slot.deviceId, room.questions[room.qIndex].sectionId, false)
  }
  advanceWhenReady(room)
}

/** Shared scoring path — used by human sockets AND bot timers alike. */
function applyAnswer(room: Room, role: 'p1' | 'p2', choice: number): void {
  const slot = room[role]
  if (slot.answered || !slot.connected) return

  // Anti-cheat: score on server-side elapsed time, not the client's tMs.
  const elapsedMs = Math.min(QUESTION_SECONDS * 1000, Math.max(0, Date.now() - room.tStart))
  const secondsTaken = elapsedMs / 1000
  const correct = choice === room.views[role][room.qIndex].correct
  const points = correct ? 10 + Math.max(0, 10 - Math.floor(secondsTaken)) : 0

  slot.answered = true
  slot.points += points
  if (correct) slot.correctCount += 1
  slot.times.push(secondsTaken)
  slot.results.push(correct)

  const question = room.questions[room.qIndex]
  const sock = io.sockets.sockets.get(slot.socketId)
  if (sock) {
    sock.emit('battle:feedback', {
      index: room.qIndex,
      correct,
      answer: room.views[role][room.qIndex].correct,
      explanation: question.explanation,
      points,
      tMs: elapsedMs,
    })
  }
  io.to(room.id).emit('battle:opponent', {
    index: room.qIndex,
    answered: true,
    correct,
    tMs: elapsedMs,
  })
  if (!slot.isBot) postTwin(slot.deviceId, question.sectionId, correct)
  advanceWhenReady(room)
}

function handleAnswer(socket: Socket, payload: unknown): void {
  const info = socket.data.roomInfo as { roomId: string; role: 'p1' | 'p2' } | undefined
  if (!info) return
  const room = rooms.get(info.roomId)
  if (!room || room.phase !== 'question') return
  if (typeof payload !== 'object' || payload === null) return
  const { index, choice } = payload as { index?: unknown; choice?: unknown }
  if (index !== room.qIndex) return
  const slot = room[info.role]
  if (slot.answered || !slot.connected) return
  if (!Number.isInteger(choice) || (choice as number) < 0 || (choice as number) > 3) return

  applyAnswer(room, info.role, choice as number)
}

function advanceWhenReady(room: Room): void {
  if (room.phase !== 'question') return
  if (!room.p1.answered || !room.p2.answered) return

  room.phase = 'between'
  if (room.questionTimer) clearTimeout(room.questionTimer)
  room.questionTimer = undefined
  emitScore(room)

  room.advanceTimer = setTimeout(() => {
    if (room.phase !== 'between') return
    if (room.qIndex + 1 < room.questions.length) {
      sendQuestion(room, room.qIndex + 1)
    } else {
      endBattle(room, null)
    }
  }, NEXT_GAP_MS)
}

function emitScore(room: Room): void {
  io.to(room.id).emit('battle:score', {
    p1: {
      points: room.p1.points,
      correct: room.p1.correctCount,
      elo: record(room.p1.deviceId).elo,
    },
    p2: {
      points: room.p2.points,
      correct: room.p2.correctCount,
      elo: record(room.p2.deviceId).elo,
    },
    questionIndex: room.qIndex,
  })
}

function avgTimes(slot: PlayerSlot): number {
  if (slot.times.length === 0) return 0
  return Math.round((slot.times.reduce((a, b) => a + b, 0) / slot.times.length) * 10) / 10
}

/**
 * End a battle. `walkoverRole` = the role that gets the win because the
 * opponent left mid-battle (null for a completed battle).
 */
function endBattle(room: Room, walkoverRole: 'p1' | 'p2' | null): void {
  if (room.phase === 'ended') return
  const winner: 'p1' | 'p2' | 'draw' =
    walkoverRole !== null
      ? walkoverRole
      : room.p1.points > room.p2.points
        ? 'p1'
        : room.p2.points > room.p1.points
          ? 'p2'
          : 'draw'

  // Standard ELO, K=32
  const r1 = record(room.p1.deviceId, room.p1.name)
  const r2 = record(room.p2.deviceId, room.p2.name)
  const expected1 = 1 / (1 + Math.pow(10, (r2.elo - r1.elo) / 400))
  const score1 = winner === 'p1' ? 1 : winner === 'draw' ? 0.5 : 0
  const delta1 = Math.round(K_FACTOR * (score1 - expected1))
  const delta2 = -delta1
  r1.elo = Math.max(100, r1.elo + delta1)
  r2.elo = Math.max(100, r2.elo + delta2)
  if (winner === 'p1') {
    r1.wins += 1
    r1.streak = r1.streak >= 0 ? r1.streak + 1 : 1
    r2.losses += 1
    r2.streak = r2.streak <= 0 ? r2.streak - 1 : -1
  } else if (winner === 'p2') {
    r2.wins += 1
    r2.streak = r2.streak >= 0 ? r2.streak + 1 : 1
    r1.losses += 1
    r1.streak = r1.streak <= 0 ? r1.streak - 1 : -1
  } else {
    r1.draws += 1
    r2.draws += 1
  }
  queueEloSave()

  log(
    `room ${room.id} ended: ${winner}` +
      (walkoverRole ? ' (walkover)' : '') +
      ` — "${room.p1.name}" ${room.p1.points} : ${room.p2.points} "${room.p2.name}"`
  )

  for (const role of ['p1', 'p2'] as const) {
    const me = room[role]
    const opp = room[otherRole(role)]
    const sock = io.sockets.sockets.get(me.socketId)
    if (!sock) continue
    sock.emit('battle:end', {
      winner,
      yourPoints: me.points,
      oppPoints: opp.points,
      eloDelta: role === 'p1' ? delta1 : delta2,
      newElo: role === 'p1' ? r1.elo : r2.elo,
      walkover: walkoverRole !== null && walkoverRole === role,
      summary: {
        yourCorrect: me.correctCount,
        oppCorrect: opp.correctCount,
        avgTimeSec: avgTimes(me),
      },
      // Per-question log (receiver's perspective) for post-match analysis.
      questions: room.questions.map((q, i) => ({
        index: i,
        topic: q.sectionTitle,
        subject: q.subjectName,
        correct: me.results[i] ?? null,
        tMs: me.times[i] !== undefined ? Math.round(me.times[i] * 1000) : null,
        oppCorrect: opp.results[i] ?? null,
        oppTms: opp.times[i] !== undefined ? Math.round(opp.times[i] * 1000) : null,
      })),
    })
  }
  destroyRoom(room)
}

/* ------------------------------------------------------------------ */
/*  Bot opponents — server-side practice players                       */
/*                                                                     */
/*  A bot room is an ordinary Room whose p2 slot holds a synthetic id   */
/*  (`bot:<difficulty>:<rand>`, never a live socket). Bots answer via   */
/*  setTimeout through the same applyAnswer() scoring path a human      */
/*  socket uses, so every battle:* event reaches the real player with  */
/*  zero protocol changes. Bot rooms are created directly (never via   */
/*  the matchmaking queue) and queue:join refuses sockets already      */
/*  locked in a live room, so bots can never be paired with humans.    */
/* ------------------------------------------------------------------ */

function clampNum(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n))
}

function randRange(lo: number, hi: number): number {
  return lo + Math.random() * (hi - lo)
}

/**
 * Schedule the bot's answer for question `index`. The delay is fixed when
 * the question is served; the correct/wrong outcome is sampled at fire
 * time so the adaptive bot can react to the human's freshest state.
 */
function scheduleBotAnswer(room: Room, index: number): void {
  const bot = room.bot
  if (!bot) return
  const profile = BOT_PROFILES[bot.difficulty]
  const human = room[otherRole(bot.role)]

  let delaySec: number
  if (bot.difficulty === 'adaptive') {
    const humanAvg =
      human.times.length > 0
        ? human.times.reduce((a, b) => a + b, 0) / human.times.length
        : 3.2
    const remaining = room.questions.length - index - 1
    // Endgame push: if the human is slow, answer noticeably faster.
    const endgamePush = remaining < 2 && humanAvg >= 3.5
    delaySec = clampNum(humanAvg * (endgamePush ? 0.75 : 0.9), 1.0, 20)
  } else {
    delaySec = randRange(profile.latency[0], profile.latency[1])
  }
  delaySec = clampNum(delaySec, 0.8, QUESTION_SECONDS - 0.8)

  const timer = setTimeout(() => {
    if (!rooms.has(room.id) || room.phase !== 'question' || room.qIndex !== index) return
    const slot = room[bot.role]
    if (slot.answered) return

    let accuracy: number
    if (bot.difficulty === 'adaptive') {
      accuracy = randRange(profile.accuracy[0], profile.accuracy[1])
      const remaining = room.questions.length - index - 1
      if (remaining >= 2) {
        // Mirror phase — hover about one correct answer behind the human.
        const target = human.correctCount - 1
        if (slot.correctCount <= target - 1) accuracy = 0.85
        else if (slot.correctCount >= target + 1) accuracy = 0.15
      } else if (human.times.length > 0) {
        const humanAvg = human.times.reduce((a, b) => a + b, 0) / human.times.length
        if (humanAvg >= 3.5) accuracy = randRange(0.85, 0.95)
      }
    } else {
      accuracy = randRange(profile.accuracy[0], profile.accuracy[1])
    }

    // Wrong answers pick a random wrong option from the BOT's own view.
    const view = room.views[bot.role][index]
    let choice: number
    if (Math.random() < accuracy) {
      choice = view.correct
    } else {
      const wrong = [0, 1, 2, 3].filter((i) => i !== view.correct)
      choice = wrong[Math.floor(Math.random() * wrong.length)]
    }
    log(
      `room ${room.id}: bot ${bot.difficulty} answers q${index + 1} ` +
        `(${choice === view.correct ? 'correct' : 'wrong'}, ${delaySec.toFixed(1)}s)`
    )
    applyAnswer(room, bot.role, choice)

    // Occasional persona quip in the room chat.
    if (Math.random() < 0.18) {
      io.to(room.id).emit('room:chat', {
        from: slot.name,
        text: profile.quips[Math.floor(Math.random() * profile.quips.length)],
        t: Date.now(),
      })
    }
  }, Math.round(delaySec * 1000))
  bot.timers.push(timer)
}

/** Human forfeits their bot battle → bot wins by walkover (mirrors disconnect). */
function forfeitBotRoom(socket: Socket): boolean {
  const info = socket.data.roomInfo as { roomId: string; role: 'p1' | 'p2' } | undefined
  if (!info) return false
  const room = rooms.get(info.roomId)
  if (!room || room.phase === 'ended' || !room.bot) return false
  log(`room ${room.id}: human forfeits the bot battle`)
  endBattle(room, room.bot.role)
  return true
}

/** Handle `bot:challenge` — instant practice room: human (p1) vs bot (p2). */
async function startBotBattle(socket: Socket, payload: unknown): Promise<void> {
  if (typeof payload !== 'object' || payload === null) return
  const { deviceId, name, skillKey, difficulty } = payload as {
    deviceId?: unknown
    name?: unknown
    skillKey?: unknown
    difficulty?: unknown
  }
  if (typeof deviceId !== 'string' || deviceId.trim().length === 0) return
  if (typeof difficulty !== 'string' || !(difficulty in BOT_PROFILES)) return

  // Never stack a bot battle on top of a live battle (also keeps the human
  // out of matchmaking while the bot room exists).
  const locked = socket.data.roomInfo as { roomId: string } | undefined
  if (locked) {
    const liveRoom = rooms.get(locked.roomId)
    if (liveRoom && liveRoom.phase !== 'ended') return
  }
  removeFromQueue(socket.id)
  abortPendingPair(socket.id)

  const humanDeviceId = deviceId.trim().slice(0, 64)
  const humanName = cleanName(name)
  const botDifficulty = difficulty as BotDifficulty
  const profile = BOT_PROFILES[botDifficulty]
  const subject =
    typeof skillKey === 'string' && skillKey.trim().length > 0 && skillKey.trim() !== 'mixed'
      ? skillKey.trim()
      : null

  socket.data.deviceId = humanDeviceId
  record(humanDeviceId, humanName)

  // Token guard: bot:leave / a newer challenge / disconnect during the pool
  // fetch aborts this one cleanly.
  const challengeToken = Math.random().toString(36).slice(2)
  socket.data.botChallenge = challengeToken

  log(`bot:challenge "${humanName}" vs ${profile.name} (subject=${subject ?? 'mixed'})`)
  const questions = await fetchQuestions(subject)

  if (socket.data.botChallenge !== challengeToken) return
  if (!io.sockets.sockets.has(socket.id)) return
  const again = socket.data.roomInfo as { roomId: string } | undefined
  if (again) {
    const other = rooms.get(again.roomId)
    if (other && other.phase !== 'ended') return
  }

  const roomId = 'r-' + Math.random().toString(36).slice(2, 10)
  const botDeviceId = `bot:${botDifficulty}` // stable per difficulty → persistent ELO
  const botSlotId = `bot:${botDifficulty}:${Math.random().toString(36).slice(2, 8)}`
  const botRecord = record(botDeviceId, profile.name, profile.seedElo)

  const room: Room = {
    id: roomId,
    subject,
    p1: {
      socketId: socket.id,
      deviceId: humanDeviceId,
      name: humanName,
      points: 0,
      correctCount: 0,
      answered: false,
      times: [],
      results: [],
      connected: true,
    },
    p2: {
      socketId: botSlotId,
      deviceId: botDeviceId,
      name: profile.name,
      points: 0,
      correctCount: 0,
      answered: false,
      times: [],
      results: [],
      connected: true,
      isBot: true,
    },
    questions,
    views: {
      p1: questions.map((q, i) => shuffledView(`${roomId}:${humanDeviceId}:${i}`, q)),
      p2: questions.map((q, i) => shuffledView(`${roomId}:${botDeviceId}:${i}`, q)),
    },
    qIndex: -1,
    phase: 'countdown',
    tStart: 0,
    bot: { difficulty: botDifficulty, role: 'p2', timers: [] },
  }
  rooms.set(roomId, room)
  socket.data.roomInfo = { roomId, role: 'p1' }
  socket.join(roomId)

  socket.emit('match', {
    roomId,
    opponent: { name: profile.name, elo: botRecord.elo, bot: true, difficulty: botDifficulty },
    questions: questions.map((q, i) => ({
      index: i,
      q: q.q,
      options: room.views.p1[i].options,
      sectionTitle: q.sectionTitle,
      subjectName: q.subjectName,
    })),
    youAre: 'p1',
  })

  // A little persona flavor before the countdown.
  io.to(roomId).emit('room:chat', {
    from: profile.name,
    text: profile.quips[Math.floor(Math.random() * profile.quips.length)],
    t: Date.now(),
  })

  startCountdown(room)
}

/* ------------------------------------------------------------------ */
/*  Ladder                                                             */
/* ------------------------------------------------------------------ */

function rankedPlayers(): [string, PlayerRecord][] {
  return Object.entries(eloBook)
    .filter(([, r]) => r.wins + r.losses + r.draws > 0)
    .sort((a, b) => b[1].elo - a[1].elo)
}

function sendLadder(socket: Socket, deviceId: string | undefined): void {
  const ranked = rankedPlayers()
  const entries = ranked.slice(0, LADDER_SIZE).map(([, r]) => ({
    name: r.name,
    elo: r.elo,
    wins: r.wins,
    losses: r.losses,
    streak: r.streak,
  }))
  let you: { rank: number | null; elo: number } = { rank: null, elo: START_ELO }
  if (deviceId) {
    const rec = eloBook[deviceId]
    const idx = ranked.findIndex(([id]) => id === deviceId)
    you = { rank: idx >= 0 ? idx + 1 : null, elo: rec ? rec.elo : START_ELO }
  }
  socket.emit('ladder:data', { entries, you })
}

/* ------------------------------------------------------------------ */
/*  HTTP + socket.io wiring                                            */
/* ------------------------------------------------------------------ */

const app = express()
app.get('/', (_req, res) => {
  res.json({ ok: true, service: 'studyverse-arena', port: PORT })
})
app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    players: Object.keys(eloBook).length,
    activeRooms: rooms.size,
    queue: queue.length,
  })
})

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
})

io.on('connection', (socket) => {
  log(`connect ${socket.id}`)
  socket.data.deviceId = undefined
  socket.data.roomInfo = undefined

  socket.on('queue:join', (payload: unknown) => {
    try {
      if (typeof payload !== 'object' || payload === null) return
      const { deviceId, name, subject } = payload as {
        deviceId?: unknown
        name?: unknown
        subject?: unknown
      }
      if (typeof deviceId !== 'string' || deviceId.trim().length === 0) return
      // A socket already locked into a live battle cannot double-queue —
      // this also hard-guards bot practice rooms away from human matchmaking.
      const locked = socket.data.roomInfo as { roomId: string } | undefined
      if (locked) {
        const liveRoom = rooms.get(locked.roomId)
        if (liveRoom && liveRoom.phase !== 'ended') return
      }
      removeFromQueue(socket.id)
      abortPendingPair(socket.id)
      const cleanSubject =
        typeof subject === 'string' && subject.trim().length > 0 && subject !== 'mixed'
          ? subject.trim()
          : null
      const entry: QueueEntry = {
        socketId: socket.id,
        deviceId: deviceId.trim().slice(0, 64),
        name: cleanName(name),
        subject: cleanSubject,
        joinedAt: Date.now(),
      }
      socket.data.deviceId = entry.deviceId
      record(entry.deviceId, entry.name) // registers latest name + default ELO
      queue.push(entry)
      log(`queue:join "${entry.name}" (subject=${entry.subject ?? 'mixed'}) — queue depth ${queue.length}`)
      announceQueuePositions()
      tryPair(entry).catch((err) => console.error(`[arena ${ts()}] pairing failed:`, err))
    } catch (err) {
      console.error(`[arena ${ts()}] queue:join error:`, err)
    }
  })

  socket.on('queue:leave', () => {
    log(`queue:leave ${socket.id}`)
    removeFromQueue(socket.id)
    abortPendingPair(socket.id)
  })

  socket.on('bot:challenge', (payload: unknown) => {
    try {
      void startBotBattle(socket, payload).catch((err) =>
        console.error(`[arena ${ts()}] bot:challenge error:`, err)
      )
    } catch (err) {
      console.error(`[arena ${ts()}] bot:challenge error:`, err)
    }
  })

  socket.on('bot:leave', () => {
    log(`bot:leave ${socket.id}`)
    socket.data.botChallenge = undefined // abort a challenge still sourcing questions
    forfeitBotRoom(socket) // forfeit a live bot battle, if any
  })

  socket.on('battle:answer', (payload: unknown) => {
    try {
      handleAnswer(socket, payload)
    } catch (err) {
      console.error(`[arena ${ts()}] battle:answer error:`, err)
    }
  })

  socket.on('room:chat', (payload: unknown) => {
    const info = socket.data.roomInfo as { roomId: string; role: 'p1' | 'p2' } | undefined
    if (!info) return
    const room = rooms.get(info.roomId)
    if (!room || room.phase === 'ended') return
    if (typeof payload !== 'object' || payload === null) return
    const raw = (payload as { text?: unknown }).text
    if (typeof raw !== 'string') return
    const text = escapeHtml(raw.trim().slice(0, CHAT_MAX))
    if (!text) return
    io.to(room.id).emit('room:chat', {
      from: room[info.role].name,
      text,
      t: Date.now(),
    })
  })

  socket.on('ladder:get', (payload: unknown) => {
    const fromPayload =
      typeof payload === 'object' && payload !== null
        ? (payload as { deviceId?: unknown }).deviceId
        : undefined
    const deviceId =
      typeof fromPayload === 'string' && fromPayload.trim().length > 0
        ? fromPayload.trim().slice(0, 64)
        : (socket.data.deviceId as string | undefined)
    sendLadder(socket, deviceId)
  })

  socket.on('disconnect', () => {
    log(`disconnect ${socket.id}`)
    removeFromQueue(socket.id)
    abortPendingPair(socket.id)
    const info = socket.data.roomInfo as { roomId: string; role: 'p1' | 'p2' } | undefined
    if (!info) return
    const room = rooms.get(info.roomId)
    if (!room || room.phase === 'ended') return
    const role = roleOf(room, socket.id)
    if (!role) return
    room[role].connected = false
    // Opponent wins by walkover (only if the battle was already underway).
    endBattle(room, otherRole(role))
  })
})

/* ------------------------------------------------------------------ */
/*  Boot                                                               */
/* ------------------------------------------------------------------ */

loadElo().finally(() => {
  httpServer.listen(PORT, () => {
    log(`studyverse-arena listening on :${PORT} (socket.io path /socket.io)`)
  })
})

'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { io, type Socket } from 'socket.io-client'
import {
  MessageSquare,
  RotateCcw,
  Send,
  Swords,
  Timer,
  Trophy,
  Users,
  X,
  Zap,
} from 'lucide-react'
import { LIBRARY_SUBJECTS } from '@/data/library'
import { useStudy } from '@/store/useStudy'
import { RichText } from '../rich-text'

/* ------------------------------------------------------------------ */
/*  Wire types (payloads of the arena mini-service on :3031)           */
/* ------------------------------------------------------------------ */

interface QuestionView {
  index: number
  q: string
  options: string[]
  sectionTitle: string
  subjectName: string
}

interface MatchPayload {
  roomId: string
  opponent: { name: string; elo: number }
  questions: QuestionView[]
  youAre: 'p1' | 'p2'
}

interface FeedbackPayload {
  index: number
  correct: boolean
  answer: number
  explanation: string
  points: number
  tMs: number
}

interface OpponentPayload {
  index: number
  answered: boolean
  correct: boolean
  tMs: number
}

interface ScoreSide {
  points: number
  correct: number
  elo: number
}

interface ScorePayload {
  p1: ScoreSide
  p2: ScoreSide
  questionIndex: number
}

interface EndPayload {
  winner: 'p1' | 'p2' | 'draw'
  yourPoints: number
  oppPoints: number
  eloDelta: number
  newElo: number
  walkover?: boolean
  summary: { yourCorrect: number; oppCorrect: number; avgTimeSec: number }
}

interface LadderEntry {
  name: string
  elo: number
  wins: number
  losses: number
  streak: number
}

interface LadderPayload {
  entries: LadderEntry[]
  you: { rank: number | null; elo: number }
}

interface ChatMsg {
  from: string
  text: string
  t: number
}

type Phase = 'lobby' | 'searching' | 'countdown' | 'battle' | 'result'

const QUESTION_SECONDS = 25
const NAME_KEY = 'sv-arena-name'
const FOCUS_RING = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60'

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */

/** Per-question timer ring (25s, emerald → amber → red as it drains). */
function TimerRing({ remaining, frozen }: { remaining: number; frozen: boolean }) {
  const r = 18
  const c = 2 * Math.PI * r
  const frac = Math.max(0, Math.min(1, remaining / QUESTION_SECONDS))
  const danger = remaining <= 5
  const warn = remaining <= 10 && !danger
  const stroke = danger ? '#f87171' : warn ? '#fbbf24' : '#34d399'
  return (
    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center" aria-label={`${Math.ceil(remaining)} seconds left`}>
      <svg viewBox="0 0 48 48" className="h-12 w-12 -rotate-90">
        <circle cx="24" cy="24" r={r} fill="none" stroke="currentColor" strokeWidth="3.5" className="text-border" />
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - frac)}
          style={{ transition: frozen ? undefined : 'stroke-dashoffset 0.15s linear' }}
        />
      </svg>
      <span className={`absolute font-mono text-[12px] font-bold tabular-nums ${danger ? 'text-red-400' : warn ? 'text-amber-300' : 'text-emerald-300'}`}>
        {Math.ceil(remaining)}
      </span>
    </div>
  )
}

/** One side of the dual score bar. */
function ScoreBar({
  label,
  points,
  correct,
  max,
  mine,
}: {
  label: string
  points: number
  correct: number
  max: number
  mine: boolean
}) {
  const frac = max > 0 ? Math.min(1, points / max) : 0
  return (
    <div className="min-w-0 flex-1">
      <div className="flex items-baseline justify-between gap-2">
        <span className={`truncate text-[12px] font-semibold ${mine ? 'text-emerald-300' : 'text-amber-300'}`}>
          {mine ? 'You' : 'Opp'} · {label}
        </span>
        <span className={`shrink-0 font-mono text-[13px] font-bold tabular-nums ${mine ? 'text-emerald-300' : 'text-amber-300'}`}>
          {points}
          <span className="ml-1 text-[10px] font-medium opacity-70">{correct}✓</span>
        </span>
      </div>
      <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted/60">
        <div
          className={`h-full rounded-full ${mine ? 'bg-emerald-400/80' : 'bg-amber-400/80'}`}
          style={{ width: `${frac * 100}%`, transition: 'width 0.5s cubic-bezier(0.22,1,0.36,1)' }}
        />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Arena view                                                         */
/* ------------------------------------------------------------------ */

export function ArenaView() {
  const deviceId = useStudy((s) => s.deviceId)
  const ensureDevice = useStudy((s) => s.ensureDevice)

  const [phase, setPhase] = useState<Phase>('lobby')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [queuePosition, setQueuePosition] = useState(1)
  const [notice, setNotice] = useState<string | null>(null)

  const [match, setMatch] = useState<MatchPayload | null>(null)
  const [countdown, setCountdown] = useState(0)
  const [question, setQuestion] = useState<QuestionView | null>(null)
  const [selected, setSelected] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<FeedbackPayload | null>(null)
  const [oppAnswered, setOppAnswered] = useState(false)
  const [oppJustCorrect, setOppJustCorrect] = useState<boolean | null>(null)
  const [scores, setScores] = useState({ you: 0, youCorrect: 0, opp: 0, oppCorrect: 0 })
  const [end, setEnd] = useState<EndPayload | null>(null)
  const [remaining, setRemaining] = useState(QUESTION_SECONDS)

  const [ladder, setLadder] = useState<LadderEntry[]>([])
  const [you, setYou] = useState<{ rank: number | null; elo: number } | null>(null)

  const [chatOpen, setChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [chat, setChat] = useState<ChatMsg[]>([])

  const socketRef = useRef<Socket | null>(null)
  const deviceIdRef = useRef<string>('')
  const phaseRef = useRef<Phase>('lobby')
  const matchRef = useRef<MatchPayload | null>(null)
  const myAnsweredRef = useRef(false)
  const questionStartRef = useRef<number>(Date.now())
  const chatListRef = useRef<HTMLDivElement | null>(null)
  const chatOpenRef = useRef(false)

  phaseRef.current = phase
  matchRef.current = match
  chatOpenRef.current = chatOpen

  const questionTotal = match?.questions.length ?? 10

  /** Reset every battle-local bit and go back to the lobby. */
  const resetToLobby = useCallback((msg?: string) => {
    setPhase('lobby')
    setMatch(null)
    setQuestion(null)
    setSelected(null)
    setFeedback(null)
    setOppAnswered(false)
    setOppJustCorrect(null)
    setScores({ you: 0, youCorrect: 0, opp: 0, oppCorrect: 0 })
    setEnd(null)
    setCountdown(0)
    setChat([])
    setChatOpen(false)
    setChatInput('')
    if (msg) {
      setNotice(msg)
      setTimeout(() => setNotice(null), 6000)
    }
  }, [])

  /* ---------------- socket lifecycle ---------------- */

  useEffect(() => {
    deviceIdRef.current = ensureDevice()
    try {
      const stored = localStorage.getItem(NAME_KEY)
      if (stored) setName(stored)
    } catch {
      /* storage unavailable */
    }

    const socket = io('/?XTransformPort=3031', { transports: ['websocket', 'polling'] })
    socketRef.current = socket

    socket.on('connect', () => {
      // If we dropped mid-battle the server already forfeited the room.
      if (phaseRef.current === 'battle' || phaseRef.current === 'countdown') {
        resetToLobby('Connection lost — the battle was forfeited.')
      }
      socket.emit('ladder:get', { deviceId: deviceIdRef.current })
    })

    socket.on('disconnect', () => {
      if (phaseRef.current === 'battle' || phaseRef.current === 'countdown') {
        resetToLobby('Connection lost — the battle was forfeited.')
      }
    })

    socket.on('ladder:data', (l: LadderPayload) => {
      setLadder(l.entries ?? [])
      setYou(l.you ?? null)
    })

    socket.on('queue:waiting', (p: { position: number }) => {
      setQueuePosition(typeof p?.position === 'number' ? p.position : 1)
    })

    socket.on('match', (m: MatchPayload) => {
      if (!m || !Array.isArray(m.questions)) return
      setMatch(m)
      setQuestion(null)
      setSelected(null)
      setFeedback(null)
      setOppAnswered(false)
      setOppJustCorrect(null)
      setScores({ you: 0, youCorrect: 0, opp: 0, oppCorrect: 0 })
      setChat([])
      setPhase('countdown')
    })

    socket.on('battle:countdown', (d: { seconds: number }) => {
      setCountdown(typeof d?.seconds === 'number' ? d.seconds : 0)
    })

    socket.on('battle:question', (q: QuestionView) => {
      if (typeof q?.index !== 'number' || !Array.isArray(q.options)) return
      myAnsweredRef.current = false
      questionStartRef.current = Date.now()
      setQuestion(q)
      setSelected(null)
      setFeedback(null)
      setOppAnswered(false)
      setOppJustCorrect(null)
      setRemaining(QUESTION_SECONDS)
      setPhase('battle')
    })

    socket.on('battle:feedback', (f: FeedbackPayload) => {
      myAnsweredRef.current = true
      setFeedback(f)
    })

    socket.on('battle:opponent', (o: OpponentPayload) => {
      // Echoes of our own answer arrive here too — ignore those.
      if (myAnsweredRef.current) return
      setOppAnswered(true)
      setOppJustCorrect(o?.correct === true)
    })

    socket.on('battle:score', (s: ScorePayload) => {
      const m = matchRef.current
      if (!s || !m) return
      const mine = m.youAre === 'p1' ? s.p1 : s.p2
      const theirs = m.youAre === 'p1' ? s.p2 : s.p1
      setScores({
        you: mine?.points ?? 0,
        youCorrect: mine?.correct ?? 0,
        opp: theirs?.points ?? 0,
        oppCorrect: theirs?.correct ?? 0,
      })
    })

    socket.on('battle:end', (e: EndPayload) => {
      if (!e) return
      setEnd(e)
      setPhase('result')
    })

    socket.on('room:chat', (c: ChatMsg) => {
      if (!c || typeof c.text !== 'string') return
      setChat((prev) => [...prev.slice(-49), c])
    })

    return () => {
      socket.removeAllListeners()
      socket.disconnect()
      socketRef.current = null
    }
  }, [])

  /* ---------------- question timer ---------------- */

  useEffect(() => {
    if (phase !== 'battle' || !question || feedback) return
    const startedAt = questionStartRef.current
    const iv = setInterval(() => {
      const left = QUESTION_SECONDS - (Date.now() - startedAt) / 1000
      setRemaining(Math.max(0, left))
    }, 100)
    return () => clearInterval(iv)
  }, [phase, question, feedback])

  /* ---------------- chat autoscroll ---------------- */

  useEffect(() => {
    const el = chatListRef.current
    if (el && chatOpenRef.current) el.scrollTop = el.scrollHeight
  }, [chat, chatOpen])

  /* ---------------- actions ---------------- */

  const findOpponent = () => {
    const socket = socketRef.current
    if (!socket) return
    const clean = name.trim().slice(0, 24) || 'Player'
    setName(clean)
    try {
      localStorage.setItem(NAME_KEY, clean)
    } catch {
      /* storage unavailable */
    }
    setQueuePosition(1)
    setPhase('searching')
    socket.emit('queue:join', {
      deviceId: deviceIdRef.current || ensureDevice(),
      name: clean,
      subject: subject || null,
    })
  }

  const cancelSearch = () => {
    socketRef.current?.emit('queue:leave')
    setPhase('lobby')
  }

  const answer = (choice: number) => {
    const socket = socketRef.current
    if (!socket || phase !== 'battle' || !question || selected !== null || feedback) return
    setSelected(choice)
    socket.emit('battle:answer', {
      index: question.index,
      choice,
      tMs: Date.now() - questionStartRef.current,
    })
  }

  const sendChat = () => {
    const text = chatInput.trim().slice(0, 200)
    if (!text) return
    socketRef.current?.emit('room:chat', { text })
    setChatInput('')
  }

  const rematch = () => {
    setEnd(null)
    setMatch(null)
    setPhase('searching')
    setQueuePosition(1)
    socketRef.current?.emit('queue:join', {
      deviceId: deviceIdRef.current || ensureDevice(),
      name: name.trim().slice(0, 24) || 'Player',
      subject: subject || null,
    })
  }

  const backToLobby = () => {
    resetToLobby()
    socketRef.current?.emit('ladder:get', { deviceId: deviceIdRef.current })
  }

  const maxPoints = Math.max(scores.you, scores.opp, 1)
  const myElo = you?.elo ?? 1200

  const subjects = useMemo(() => LIBRARY_SUBJECTS, [])

  /* ------------------------------------------------------------------ */
  /*  Render                                                             */
  /* ------------------------------------------------------------------ */

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pb-24 pt-6 sm:pt-8">
      <AnimatePresence>
        {notice && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mb-4 rounded-xl border border-amber-400/40 bg-amber-400/10 px-4 py-2.5 text-[13px] font-medium text-amber-300"
            role="status"
          >
            {notice}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {/* ------------------------- LOBBY ------------------------- */}
        {phase === 'lobby' && (
          <motion.div key="lobby" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h1 className="flex items-center gap-2.5 text-xl font-bold tracking-tight sm:text-2xl">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                      <Swords className="h-5 w-5" />
                    </span>
                    Battle Arena
                  </h1>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    Live 1-v-1 quiz battles. Ten questions, speed bonuses, real ELO. Answers are
                    shuffled per player — no copying allowed.
                  </p>
                </div>
                <div className="shrink-0 rounded-xl border border-border/80 bg-muted/30 px-3 py-2 text-center">
                  <div className="font-mono text-lg font-bold tabular-nums text-emerald-300">{myElo}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    ELO{you?.rank ? ` · #${you.rank}` : ''}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[12px] font-semibold text-foreground/80">Display name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value.slice(0, 24))}
                    onKeyDown={(e) => e.key === 'Enter' && findOpponent()}
                    placeholder="Your battle name"
                    maxLength={24}
                    className={`w-full rounded-xl border border-border/80 bg-background/60 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-emerald-400/50 ${FOCUS_RING}`}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[12px] font-semibold text-foreground/80">Battle subject</span>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`w-full appearance-none rounded-xl border border-border/80 bg-background/60 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-emerald-400/50 ${FOCUS_RING}`}
                  >
                    <option value="">Mixed — all subjects</option>
                    {subjects.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                onClick={findOpponent}
                className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-[15px] font-bold text-emerald-300 transition-all hover:bg-emerald-400/20 active:scale-[0.99] ${FOCUS_RING}`}
              >
                <Swords className="h-4.5 w-4.5" />
                Find opponent
              </button>
              <p className="mt-2 text-center text-[11px] text-muted-foreground">
                {deviceId ? `Playing as ${deviceId.slice(0, 12)}…` : 'Preparing device…'}
              </p>
            </div>

            {/* ladder */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-border/80 bg-card">
              <div className="flex items-center gap-2 border-b border-border/70 px-5 py-3.5">
                <Trophy className="h-4 w-4 text-emerald-300" />
                <h2 className="text-[14px] font-bold">Ladder</h2>
                <span className="ml-auto font-mono text-[11px] text-muted-foreground">top {Math.max(ladder.length, 20)}</span>
              </div>
              {ladder.length === 0 ? (
                <p className="px-5 py-6 text-center text-[13px] text-muted-foreground">
                  No battles yet — be the first on the board.
                </p>
              ) : (
                <div className="divide-y divide-border/60">
                  {ladder.map((e, i) => (
                    <div
                      key={`${e.name}-${i}`}
                      className={`flex items-center gap-3 px-5 py-2.5 ${i < 3 ? 'bg-emerald-400/[0.04]' : ''}`}
                    >
                      <span className="w-7 shrink-0 font-mono text-[12px] font-bold tabular-nums text-muted-foreground">
                        {i + 1}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-[13.5px] font-semibold">{e.name}</span>
                      <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                        <span className="text-emerald-300">{e.wins}</span>W · <span className="text-red-400">{e.losses}</span>L
                        {e.streak !== 0 && (
                          <span className={`ml-1.5 ${e.streak > 0 ? 'text-emerald-300' : 'text-red-400'}`}>
                            {e.streak > 0 ? `${e.streak}🔥` : e.streak}
                          </span>
                        )}
                      </span>
                      <span className="w-12 shrink-0 text-right font-mono text-[13px] font-bold tabular-nums">{e.elo}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* ----------------------- SEARCHING ----------------------- */}
        {phase === 'searching' && (
          <motion.div
            key="searching"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="flex flex-col items-center rounded-2xl border border-border/80 bg-card px-6 py-14 text-center"
          >
            <div className="relative flex h-24 w-24 items-center justify-center">
              <motion.span
                className="absolute inset-0 rounded-full border border-emerald-400/30"
                animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border border-emerald-400/20"
                animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
              />
              <motion.span
                className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <Swords className="h-6 w-6" />
              </motion.span>
            </div>
            <h2 className="mt-6 text-lg font-bold">Searching for an opponent…</h2>
            <p className="mt-1.5 text-[13px] text-muted-foreground">
              {subject ? subjects.find((s) => s.id === subject)?.name ?? 'Selected subject' : 'Mixed subjects'} · queue
              position <span className="font-mono font-bold text-emerald-300">{queuePosition}</span>
            </p>
            <button
              onClick={cancelSearch}
              className={`mt-6 rounded-xl border border-border/80 bg-muted/30 px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground ${FOCUS_RING}`}
            >
              Cancel search
            </button>
          </motion.div>
        )}

        {/* ----------------------- COUNTDOWN ----------------------- */}
        {phase === 'countdown' && match && (
          <motion.div
            key="countdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center rounded-2xl border border-border/80 bg-card px-6 py-12 text-center"
          >
            <div className="flex items-center gap-2.5 text-[13px] font-semibold text-muted-foreground">
              <Users className="h-4 w-4" />
              Matched with <span className="text-amber-300">{match.opponent.name}</span>
              <span className="rounded-md border border-border/70 bg-muted/40 px-1.5 py-0.5 font-mono text-[11px] font-bold text-amber-300">
                {match.opponent.elo}
              </span>
            </div>
            <div className="mt-8 flex h-28 w-28 items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={countdown}
                  initial={{ scale: 1.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="font-mono text-6xl font-black tabular-nums text-emerald-300"
                >
                  {countdown}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="mt-6 flex items-center gap-1.5 text-[13px] text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-emerald-300" />
              {questionTotal} questions · answer fast for bonus points
            </p>
          </motion.div>
        )}

        {/* ------------------------- BATTLE ------------------------- */}
        {phase === 'battle' && match && question && (
          <motion.div key="battle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* header: opponent + timer + chat */}
            <div className="flex items-center gap-3">
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-amber-400/25 bg-amber-400/[0.07] px-3 py-2">
                <Users className="h-4 w-4 shrink-0 text-amber-300" />
                <span className="truncate text-[13px] font-semibold text-amber-300">{match.opponent.name}</span>
                <span
                  className={`ml-auto flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full transition-all ${
                    oppAnswered ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-muted-foreground/25'
                  }`}
                  title={oppAnswered ? 'Opponent answered' : 'Opponent thinking'}
                />
                {oppAnswered && oppJustCorrect !== null && (
                  <span className={`shrink-0 text-[11px] font-bold ${oppJustCorrect ? 'text-emerald-300' : 'text-red-400'}`}>
                    {oppJustCorrect ? '✓' : '✗'}
                  </span>
                )}
              </div>
              <TimerRing remaining={remaining} frozen={!!feedback} />
            </div>

            {/* dual score bars */}
            <div className="mt-3 flex items-start gap-4 rounded-2xl border border-border/80 bg-card px-4 py-3">
              <ScoreBar label={name.trim() || 'You'} points={scores.you} correct={scores.youCorrect} max={maxPoints} mine />
              <div className="mt-0.5 h-8 w-px shrink-0 bg-border/70" aria-hidden="true" />
              <ScoreBar label={match.opponent.name} points={scores.opp} correct={scores.oppCorrect} max={maxPoints} mine={false} />
            </div>

            {/* question card */}
            <div className="mt-3 rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono font-bold text-emerald-300">
                  Q{question.index + 1}/{questionTotal}
                </span>
                {question.subjectName && (
                  <span className="rounded-md border border-border/70 bg-muted/40 px-2 py-0.5 font-medium text-muted-foreground">
                    {question.subjectName}
                    {question.sectionTitle ? ` · ${question.sectionTitle}` : ''}
                  </span>
                )}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={question.index}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.22 }}
                >
                  <h2 className="mt-3 text-[16px] font-semibold leading-relaxed sm:text-[17px]">
                    <RichText text={question.q} />
                  </h2>

                  <div className="mt-4 grid gap-2.5">
                    {question.options.map((opt, i) => {
                      const isPicked = selected === i
                      const revealCorrect = feedback && feedback.answer === i
                      const revealWrong = feedback && isPicked && !feedback.correct
                      const dimmed = feedback && !revealCorrect && !isPicked
                      return (
                        <button
                          key={i}
                          onClick={() => answer(i)}
                          disabled={selected !== null}
                          aria-pressed={isPicked}
                          className={`flex items-start gap-3 rounded-xl border px-3.5 py-3 text-left transition-all ${
                            revealCorrect
                              ? 'border-emerald-400/60 bg-emerald-400/10 shadow-[inset_0_0_0_1px_rgba(52,211,153,0.25)]'
                              : revealWrong
                                ? 'border-red-400/60 bg-red-400/10'
                                : isPicked
                                  ? 'border-emerald-400/40 bg-emerald-400/5'
                                  : dimmed
                                    ? 'border-border/50 bg-muted/10 opacity-50'
                                    : 'border-border/70 bg-muted/20 hover:border-emerald-400/30 hover:bg-muted/40'
                          } ${selected === null ? `cursor-pointer ${FOCUS_RING}` : 'cursor-default'}`}
                        >
                          <span
                            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] font-bold ${
                              revealCorrect
                                ? 'border-emerald-400 bg-emerald-400 text-emerald-950'
                                : revealWrong
                                  ? 'border-red-400 bg-red-400 text-red-950'
                                  : isPicked
                                    ? 'border-emerald-400/70 text-emerald-300'
                                    : 'border-border text-muted-foreground'
                            }`}
                          >
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span className="text-[13.5px] leading-relaxed">
                            <RichText text={opt} />
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* feedback */}
              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-4 rounded-xl border px-4 py-3 ${
                      feedback.correct ? 'border-emerald-400/40 bg-emerald-400/10' : 'border-red-400/40 bg-red-400/10'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className={`text-[14px] font-bold ${feedback.correct ? 'text-emerald-300' : 'text-red-400'}`}>
                        {feedback.correct ? 'Correct!' : 'Not quite'}
                      </span>
                      <motion.span
                        initial={{ scale: 1.4, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`rounded-md px-2 py-0.5 font-mono text-[13px] font-bold ${
                          feedback.correct ? 'bg-emerald-400/15 text-emerald-300' : 'bg-red-400/15 text-red-400'
                        }`}
                      >
                        +{feedback.points} pts
                      </motion.span>
                    </div>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-foreground/85">
                      <RichText text={feedback.explanation} />
                    </p>
                    <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <Timer className="h-3 w-3" />
                      answered in <span className="font-mono font-semibold">{(feedback.tMs / 1000).toFixed(1)}s</span>
                      {oppAnswered ? ' · opponent has answered' : ' · waiting for opponent…'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* ------------------------- RESULT ------------------------- */}
        {phase === 'result' && end && match && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl border border-border/80 bg-card p-6 text-center sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border ${
                end.winner === match.youAre
                  ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
                  : end.winner === 'draw'
                    ? 'border-amber-400/40 bg-amber-400/10 text-amber-300'
                    : 'border-red-400/40 bg-red-400/10 text-red-400'
              }`}
            >
              {end.winner === match.youAre ? (
                <Trophy className="h-8 w-8" />
              ) : end.winner === 'draw' ? (
                <Swords className="h-8 w-8" />
              ) : (
                <X className="h-8 w-8" />
              )}
            </motion.div>

            <h2 className="mt-4 text-2xl font-black tracking-tight">
              {end.winner === match.youAre ? 'Victory!' : end.winner === 'draw' ? 'Draw' : 'Defeat'}
            </h2>
            <p className="mt-1 text-[13px] text-muted-foreground">
              {end.walkover
                ? 'Opponent left the battle — win by walkover.'
                : end.winner === match.youAre
                  ? `You beat ${match.opponent.name}.`
                  : end.winner === 'draw'
                    ? 'Evenly matched — rematch?'
                    : `${match.opponent.name} takes this one.`}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/[0.07] px-4 py-3">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300/80">You</div>
                <div className="font-mono text-2xl font-black tabular-nums text-emerald-300">{end.yourPoints}</div>
                <div className="font-mono text-[11px] text-muted-foreground">{end.summary.yourCorrect} correct</div>
              </div>
              <div className="rounded-xl border border-amber-400/30 bg-amber-400/[0.07] px-4 py-3">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-300/80">{match.opponent.name}</div>
                <div className="font-mono text-2xl font-black tabular-nums text-amber-300">{end.oppPoints}</div>
                <div className="font-mono text-[11px] text-muted-foreground">{end.summary.oppCorrect} correct</div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-[13px] text-muted-foreground">
              <span>New ELO</span>
              <span className="font-mono text-lg font-bold tabular-nums text-foreground">{end.newElo}</span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, type: 'spring', stiffness: 300, damping: 16 }}
                className={`font-mono text-[14px] font-bold ${end.eloDelta >= 0 ? 'text-emerald-300' : 'text-red-400'}`}
              >
                {end.eloDelta >= 0 ? `+${end.eloDelta}` : end.eloDelta}
              </motion.span>
            </div>
            <p className="mt-1 flex items-center justify-center gap-1.5 font-mono text-[11px] text-muted-foreground">
              <Timer className="h-3 w-3" />
              avg {end.summary.avgTimeSec}s per answer
            </p>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              <button
                onClick={rematch}
                className={`flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-bold text-emerald-300 transition-all hover:bg-emerald-400/20 active:scale-[0.99] ${FOCUS_RING}`}
              >
                <RotateCcw className="h-4 w-4" />
                Rematch
              </button>
              <button
                onClick={backToLobby}
                className={`flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-muted/30 px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground ${FOCUS_RING}`}
              >
                <Swords className="h-4 w-4" />
                Back to lobby
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --------------------- CHAT DRAWER --------------------- */}
      {(phase === 'battle' || phase === 'countdown') && (
        <>
          <button
            onClick={() => setChatOpen((v) => !v)}
            aria-label={chatOpen ? 'Close chat' : 'Open chat'}
            className={`fixed bottom-5 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-card text-emerald-300 shadow-lg transition-all hover:bg-emerald-400/10 active:scale-95 sm:right-6 ${FOCUS_RING}`}
          >
            <MessageSquare className="h-5 w-5" />
            {chat.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-400 px-1 font-mono text-[9px] font-bold text-emerald-950">
                {chat.length > 9 ? '9+' : chat.length}
              </span>
            )}
          </button>

          <AnimatePresence>
            {chatOpen && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-x-3 bottom-20 z-40 flex max-h-[55vh] flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl sm:inset-x-auto sm:right-6 sm:w-80"
              >
                <div className="flex items-center gap-2 border-b border-border/70 px-4 py-2.5">
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-300" />
                  <span className="text-[12.5px] font-bold">Room chat</span>
                  <button
                    onClick={() => setChatOpen(false)}
                    aria-label="Close chat"
                    className={`ml-auto rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground ${FOCUS_RING}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div ref={chatListRef} className="min-h-[80px] flex-1 space-y-2 overflow-y-auto px-4 py-3">
                  {chat.length === 0 ? (
                    <p className="py-4 text-center text-[12px] text-muted-foreground">
                      Say hello — be kind, battles are friendly here.
                    </p>
                  ) : (
                    chat.map((c, i) => {
                      const mine = c.from === (name.trim() || 'Player')
                      return (
                        <div key={`${c.t}-${i}`} className={`flex flex-col ${mine ? 'items-end' : 'items-start'}`}>
                          <span className="text-[10px] font-semibold text-muted-foreground">{mine ? 'You' : c.from}</span>
                          <span
                            className={`mt-0.5 max-w-[85%] rounded-xl px-2.5 py-1.5 text-[12.5px] leading-relaxed ${
                              mine ? 'bg-emerald-400/15 text-emerald-100' : 'bg-muted/50 text-foreground/90'
                            }`}
                          >
                            {c.text}
                          </span>
                        </div>
                      )
                    })
                  )}
                </div>
                <div className="flex items-center gap-2 border-t border-border/70 p-2.5">
                  <input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value.slice(0, 200))}
                    onKeyDown={(e) => e.key === 'Enter' && sendChat()}
                    placeholder="Message…"
                    maxLength={200}
                    className={`min-w-0 flex-1 rounded-lg border border-border/80 bg-background/60 px-3 py-2 text-[13px] outline-none placeholder:text-muted-foreground/60 focus:border-emerald-400/50 ${FOCUS_RING}`}
                  />
                  <button
                    onClick={sendChat}
                    aria-label="Send message"
                    disabled={!chatInput.trim()}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 transition-all hover:bg-emerald-400/20 disabled:opacity-40 ${FOCUS_RING}`}
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  )
}

export default ArenaView

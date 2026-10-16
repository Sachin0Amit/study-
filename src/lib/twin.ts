import { db } from '@/lib/db'
import {
  LIBRARY_BOOKS,
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
  LIBRARY_SUBJECTS,
} from '@/data/library'
import type { SectionMeta } from '@/data/library'

// ============================================================================
// X1 — COGNITIVE DIGITAL TWIN
// A Deep Knowledge Tracing engine (BKT + cohort smoothing, DKT-flavoured)
// maintaining a live probabilistic model of what the learner knows.
//
// Skill universe: every one of the library's sections is a skill node.
// Evidence mined from FIVE surfaces:
//   1. QuizAttempt      (per-lesson self-check scores)
//   2. FlashcardState   (SRS recall history, aggregated per section)
//   3. SectionProgress  (reading exposure)
//   4. ExamAttempt      (missed questions carry section provenance)
//   5. TwinEvent        (new surfaces: studio, arena, judge, labs, palaces)
//
// Pipeline per skill: chronological BKT updates → learning transition →
// forgetting decay toward the subject cohort baseline → DKT-style ability
// smoothing for unevidenced skills (they inherit a shrunk subject estimate).
// ============================================================================

export interface TwinSkill {
  key: string
  number: number
  title: string
  chapterId: string
  chapterTitle: string
  subjectId: string
  subjectName: string
  p: number // mastery probability AFTER decay — the live estimate
  raw: number // mastery probability BEFORE decay
  evidenced: boolean
  evidenceCount: number
  lastEvidenceAt: string | null
  decayDays: number // days of "half-life" stability this skill has earned
  urgency: number // 0-1 — how much this skill needs attention NOW
  trend: number // -1..1 — recent evidence momentum
}

export interface SubjectRollup {
  subjectId: string
  subjectName: string
  accent: string
  avgMastery: number // mean p over evidenced skills
  coverage: number // evidenced skills / total skills
  inferredMastery: number // cohort-smoothed mean over ALL skills
  skills: number
  evidencedSkills: number
  weakest: TwinSkill[]
  strongest: TwinSkill[]
  decaying: TwinSkill[]
}

export interface TwinForecast {
  velocityPerDay: number // evidence events per day (28-day window)
  projectedCoverage7d: number
  projectedCoverage30d: number
  daysToFullCoverage: number | null
}

export interface TwinSnapshot {
  deviceId: string
  computedAt: string
  skills: TwinSkill[] // only skills with evidence OR top weakness relevance
  subjects: SubjectRollup[]
  forecast: TwinForecast
  totals: {
    evidenceEvents: number
    evidencedSkills: number
    universe: number
    strongSkills: number // p >= 0.8
    fragileSkills: number // evidence but p < 0.4
    decayingSkills: number // p high but last evidence > 2 half-lives ago
  }
}

// ------------------------------ BKT parameters ------------------------------

type EvidenceKind = 'quiz' | 'cards' | 'read' | 'exam' | 'studio' | 'arena' | 'judge' | 'lab' | 'palace'

const BKT: Record<EvidenceKind, { guess: number; slip: number; learn: number }> = {
  quiz: { guess: 0.25, slip: 0.15, learn: 0.18 },
  cards: { guess: 0.2, slip: 0.1, learn: 0.12 },
  exam: { guess: 0.25, slip: 0.2, learn: 0.2 },
  read: { guess: 0.1, slip: 0.05, learn: 0.08 }, // passive exposure
  studio: { guess: 0.3, slip: 0.15, learn: 0.15 },
  arena: { guess: 0.25, slip: 0.2, learn: 0.18 },
  judge: { guess: 0.15, slip: 0.1, learn: 0.22 },
  lab: { guess: 0.15, slip: 0.1, learn: 0.2 },
  palace: { guess: 0.1, slip: 0.1, learn: 0.1 },
}

const PRIOR = 0.15
const MIN_TAU = 6 // days — fresh knowledge forgets fast
const TAU_GROWTH = 5 // each evidence event slows decay

/** one BKT observation */
function bktUpdate(p: number, correct: boolean, kind: EvidenceKind): number {
  const { guess, slip, learn } = BKT[kind]
  let next: number
  if (correct) {
    const num = p * (1 - slip)
    next = num / (num + (1 - p) * guess)
  } else {
    const num = p * slip
    next = num / (num + (1 - p) * (1 - guess))
  }
  // post-observation learning transition
  return Math.min(0.99, next + (1 - next) * learn)
}

/** exponential decay toward a baseline */
function decay(p: number, baseline: number, days: number, tau: number): number {
  if (days <= 0) return p
  return baseline + (p - baseline) * Math.exp(-days / Math.max(1, tau))
}

// ------------------------------ index helpers -------------------------------

interface SkillIndexEntry {
  meta: SectionMeta
  chapterTitle: string
  subjectId: string
  subjectName: string
  bookId: string
}

/** module-level static index over the skill universe (built once per process) */
const SKILL_INDEX: Map<string, SkillIndexEntry> = (() => {
  const chapterById = new Map(LIBRARY_CHAPTERS.map((c) => [c.id, c]))
  const bookById = new Map(LIBRARY_BOOKS.map((b) => [b.id, b]))
  const subjectById = new Map(LIBRARY_SUBJECTS.map((s) => [s.id, s]))
  const map = new Map<string, SkillIndexEntry>()
  for (const s of LIBRARY_SECTIONS) {
    const ch = chapterById.get(s.chapterId)
    if (!ch) continue
    const book = bookById.get(ch.bookId)
    const subj = book ? subjectById.get(book.subjectId) : undefined
    map.set(s.id, {
      meta: s,
      chapterTitle: ch.shortTitle || ch.title,
      subjectId: subj?.id ?? 'unknown',
      subjectName: subj?.name ?? 'Unknown',
      bookId: ch.bookId,
    })
  }
  return map
})()

export function getSkillMeta(key: string): SkillIndexEntry | undefined {
  return SKILL_INDEX.get(key)
}

/** prerequisite predecessor of a section: previous section in the chapter,
 *  or the last section of the previous chapter in the same book. */
export function skillPredecessor(key: string): string | null {
  const entry = SKILL_INDEX.get(key)
  if (!entry) return null
  const { meta } = entry
  const idx = LIBRARY_SECTIONS.findIndex((s) => s.id === key)
  if (idx > 0) {
    const prev = LIBRARY_SECTIONS[idx - 1]
    if (prev.chapterId === meta.chapterId) return prev.id
  }
  // fall back: last section of the previous chapter of the same book
  const chIdx = LIBRARY_CHAPTERS.findIndex((c) => c.id === meta.chapterId)
  if (chIdx > 0) {
    const prevCh = LIBRARY_CHAPTERS[chIdx - 1]
    if (prevCh.bookId === entry.bookId) {
      const prevSecs = LIBRARY_SECTIONS.filter((s) => s.chapterId === prevCh.id)
      if (prevSecs.length) return prevSecs[prevSecs.length - 1].id
    }
  }
  return null
}

// ------------------------------ evidence model ------------------------------

interface EvidenceItem {
  kind: EvidenceKind
  correct: boolean | null
  weight: number
  at: Date
}

interface RawSkillState {
  p: number
  raw: number
  evidenceCount: number
  lastEvidenceAt: Date | null
  recentWindow: EvidenceItem[] // last ~14 days for trend
}

function emptyState(): RawSkillState {
  return { p: 0, raw: 0, evidenceCount: 0, lastEvidenceAt: null, recentWindow: [] }
}

function applyEvidence(state: RawSkillState, item: EvidenceItem) {
  if (item.correct === null) {
    // non-gradeable exposure (reading, palace walk) — small learn bump only
    state.raw = Math.min(0.9, state.raw + (0.9 - state.raw) * BKT[item.kind].learn * 0.5)
    state.evidenceCount += item.weight
  } else {
    for (let i = 0; i < item.weight; i++) {
      state.raw = bktUpdate(state.raw || PRIOR * 0.5, item.correct, item.kind)
    }
    state.evidenceCount += item.weight
  }
  if (!state.lastEvidenceAt || item.at > state.lastEvidenceAt) {
    state.lastEvidenceAt = item.at
  }
  state.recentWindow.push(item)
  if (state.recentWindow.length > 12) state.recentWindow.shift()
}

// ------------------------------ cache ---------------------------------------

const CACHE_TTL_MS = 60_000
const cache = new Map<string, { at: number; snap: TwinSnapshot }>()

export function invalidateTwin(deviceId: string) {
  cache.delete(deviceId)
}

// ------------------------------ the engine ----------------------------------

export async function buildTwin(deviceId: string): Promise<TwinSnapshot> {
  const cached = cache.get(deviceId)
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.snap

  const now = new Date()

  // ---- gather evidence from all five surfaces (parallel) ----
  const [quizRows, cardRows, progressRows, examRows, eventRows, activityRows] =
    await Promise.all([
      db.quizAttempt.findMany({ where: { deviceId } }),
      db.flashcardState.findMany({ where: { deviceId } }),
      db.sectionProgress.findMany({ where: { deviceId } }),
      db.examAttempt.findMany({ where: { deviceId }, orderBy: { createdAt: 'asc' } }),
      db.twinEvent.findMany({ where: { deviceId }, orderBy: { createdAt: 'asc' } }),
      db.studyActivity.findMany({ where: { deviceId } }),
    ])

  const evidence = new Map<string, EvidenceItem[]>()
  const push = (key: string, item: EvidenceItem) => {
    if (!SKILL_INDEX.has(key)) return
    const list = evidence.get(key)
    if (list) list.push(item)
    else evidence.set(key, [item])
  }

  // 1) per-lesson quizzes — each attempt becomes weighted correct/incorrect mix
  for (const q of quizRows) {
    const total = Math.max(1, q.total)
    const correctN = Math.min(q.score, total)
    const at = q.createdAt
    push(q.sectionKey, { kind: 'quiz', correct: true, weight: Math.max(1, Math.round(correctN / 2)), at })
    if (correctN < total) {
      push(q.sectionKey, { kind: 'quiz', correct: false, weight: Math.max(1, total - correctN), at })
    }
  }

  // 2) flashcards — cardKey is "<sectionId>::<term>"
  const cardsBySection = new Map<string, { seen: number; correct: number; updatedAt: Date }>()
  for (const c of cardRows) {
    const secId = c.cardKey.split('::')[0]
    if (!secId || !SKILL_INDEX.has(secId)) continue
    const agg = cardsBySection.get(secId) ?? { seen: 0, correct: 0, updatedAt: c.updatedAt }
    agg.seen += c.seen
    agg.correct += c.correct
    if (c.updatedAt > agg.updatedAt) agg.updatedAt = c.updatedAt
    cardsBySection.set(secId, agg)
  }
  for (const [secId, agg] of cardsBySection) {
    const wrong = Math.max(0, agg.seen - agg.correct)
    if (agg.correct > 0) {
      push(secId, { kind: 'cards', correct: true, weight: Math.min(4, Math.round(agg.correct / 3)), at: agg.updatedAt })
    }
    if (wrong > 0) {
      push(secId, { kind: 'cards', correct: false, weight: Math.min(4, Math.round(wrong / 3)), at: agg.updatedAt })
    }
  }

  // 3) reading exposure
  for (const p of progressRows) {
    const weight = p.status === 'completed' ? 3 : 1
    push(p.sectionKey, { kind: 'read', correct: null, weight, at: p.lastViewedAt ?? p.updatedAt })
  }

  // 4) exam misses — missed[] JSON carries sectionId provenance
  for (const e of examRows) {
    let missed: { sectionId?: string }[] = []
    try {
      missed = JSON.parse(e.missed || '[]')
    } catch {
      missed = []
    }
    for (const m of missed) {
      if (m?.sectionId) push(m.sectionId, { kind: 'exam', correct: false, weight: 1, at: e.createdAt })
    }
    // a completed exam also credits every chapter it sampled (light exposure)
    let chapters: string[] = []
    try {
      chapters = JSON.parse(e.chapters || '[]')
    } catch {
      chapters = []
    }
    // correctness ratio gives positive evidence to the whole set, lightly
    const ratio = e.total > 0 ? e.score / e.total : 0
    if (ratio >= 0.7) {
      for (const chId of chapters.slice(0, 12)) {
        const secs = LIBRARY_SECTIONS.filter((s) => s.chapterId === chId).slice(0, 2)
        for (const s of secs) push(s.id, { kind: 'exam', correct: true, weight: 1, at: e.createdAt })
      }
    }
  }

  // 5) new-surface events
  for (const ev of eventRows) {
    push(ev.skillKey, {
      kind: (ev.kind as EvidenceKind) || 'studio',
      correct: ev.correct,
      weight: Math.max(1, Math.min(6, ev.weight)),
      at: ev.createdAt,
    })
  }

  // ---- run the BKT pipeline per evidenced skill ----
  const states = new Map<string, RawSkillState>()
  for (const [key, items] of evidence) {
    items.sort((a, b) => a.at.getTime() - b.at.getTime())
    const state = emptyState()
    state.raw = PRIOR * 0.5
    for (const item of items) applyEvidence(state, item)
    state.p = state.raw
    states.set(key, state)
  }

  // ---- DKT-style cohort smoothing: subject baselines ----
  const subjectAgg = new Map<string, { sum: number; n: number }>()
  for (const [key, st] of states) {
    const entry = SKILL_INDEX.get(key)
    if (!entry) continue
    const agg = subjectAgg.get(entry.subjectId) ?? { sum: 0, n: 0 }
    agg.sum += st.raw
    agg.n += 1
    subjectAgg.set(entry.subjectId, agg)
  }
  const subjectBaseline = new Map<string, number>()
  for (const [subj, agg] of subjectAgg) {
    // shrunk toward the global prior (fewer skills → more shrink)
    const shrink = agg.n / (agg.n + 12)
    const mean = agg.sum / agg.n
    subjectBaseline.set(subj, PRIOR + (mean - PRIOR) * shrink)
  }

  // ---- decay toward baselines + build TwinSkill rows ----
  const skills: TwinSkill[] = []
  for (const [key, st] of states) {
    const entry = SKILL_INDEX.get(key)!
    const baseline = subjectBaseline.get(entry.subjectId) ?? PRIOR
    const days = st.lastEvidenceAt
      ? Math.max(0, (now.getTime() - st.lastEvidenceAt.getTime()) / 86_400_000)
      : 999
    const tau = MIN_TAU + TAU_GROWTH * Math.log(1 + st.evidenceCount)
    const p = Math.min(0.99, Math.max(0.01, decay(st.raw, baseline * 0.7, days, tau)))

    // trend: momentum of the recent window (correct minus incorrect, recency weighted)
    let trend = 0
    for (const item of st.recentWindow) {
      if (item.correct === null) continue
      const ageDays = Math.max(0, (now.getTime() - item.at.getTime()) / 86_400_000)
      const w = Math.exp(-ageDays / 14) * item.weight
      trend += (item.correct ? 1 : -1) * w
    }
    trend = Math.max(-1, Math.min(1, trend / 8))

    // urgency = weakness now + decay risk - recent positive momentum
    const decayedFraction = st.raw > 0 ? (st.raw - p) / st.raw : 0
    const urgency = Math.min(
      1,
      Math.max(0, 0.5 * (1 - p) + 0.3 * Math.min(1, decayedFraction * 2.5) + 0.2 * (1 - trend) * 0.5)
    )

    skills.push({
      key,
      number: entry.meta.number,
      title: entry.meta.title,
      chapterId: entry.meta.chapterId,
      chapterTitle: entry.chapterTitle,
      subjectId: entry.subjectId,
      subjectName: entry.subjectName,
      p,
      raw: st.raw,
      evidenced: true,
      evidenceCount: st.evidenceCount,
      lastEvidenceAt: st.lastEvidenceAt ? st.lastEvidenceAt.toISOString() : null,
      decayDays: Math.round(tau),
      urgency,
      trend,
    })
  }

  // ---- subject rollups ----
  const subjects: SubjectRollup[] = []
  for (const subj of LIBRARY_SUBJECTS) {
    const subjSkills = skills.filter((s) => s.subjectId === subj.id)
    if (subjSkills.length === 0 && !subjectBaseline.has(subj.id)) continue
    const universe = LIBRARY_SECTIONS.filter((s) => {
      const e = SKILL_INDEX.get(s.id)
      return e?.subjectId === subj.id
    }).length
    const avgMastery = subjSkills.length
      ? subjSkills.reduce((a, s) => a + s.p, 0) / subjSkills.length
      : 0
    const baseline = subjectBaseline.get(subj.id) ?? PRIOR
    subjects.push({
      subjectId: subj.id,
      subjectName: subj.name,
      accent: subj.accent,
      avgMastery,
      coverage: universe ? subjSkills.length / universe : 0,
      inferredMastery: subjSkills.length
        ? (avgMastery * subjSkills.length + baseline * (universe - subjSkills.length)) / Math.max(1, universe)
        : baseline,
      skills: universe,
      evidencedSkills: subjSkills.length,
      weakest: [...subjSkills].sort((a, b) => b.urgency - a.urgency).slice(0, 5),
      strongest: [...subjSkills].sort((a, b) => b.p - a.p).slice(0, 5),
      decaying: [...subjSkills]
        .filter((s) => s.raw - s.p > 0.08)
        .sort((a, b) => b.raw - b.p - (a.raw - a.p))
        .slice(0, 5),
    })
  }
  subjects.sort((a, b) => b.inferredMastery - a.inferredMastery)

  // ---- forecast from activity velocity ----
  const activityByDay = new Map<string, number>()
  for (const row of activityRows) {
    activityByDay.set(row.day, (activityByDay.get(row.day) ?? 0) + row.count)
  }
  const days28: number[] = []
  for (let i = 0; i < 28; i++) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    const key = d.toISOString().slice(0, 10)
    days28.push(activityByDay.get(key) ?? 0)
  }
  const activeDays = days28.filter((v) => v > 0).length || 1
  const velocityPerDay = days28.reduce((a, b) => a + b, 0) / 28
  const evidenceEvents =
    quizRows.length + cardRows.length + progressRows.length + examRows.length + eventRows.length
  const evidencedSkills = skills.length
  const universe = LIBRARY_SECTIONS.length

  // coverage grows ~ velocity-scaled new-skill touch rate (conservative: 25%
  // of daily events touch a NEW skill)
  const newSkillsPerDay = Math.max(0.2, (velocityPerDay * 0.25) / 3)
  const remaining = Math.max(0, universe - evidencedSkills)
  const forecast: TwinForecast = {
    velocityPerDay: Math.round(velocityPerDay * 10) / 10,
    projectedCoverage7d: Math.min(1, (evidencedSkills + newSkillsPerDay * 7) / universe),
    projectedCoverage30d: Math.min(1, (evidencedSkills + newSkillsPerDay * 30) / universe),
    daysToFullCoverage: newSkillsPerDay > 0 && remaining > 0 ? Math.round(remaining / newSkillsPerDay) : 0,
  }

  const snap: TwinSnapshot = {
    deviceId,
    computedAt: now.toISOString(),
    skills,
    subjects,
    forecast,
    totals: {
      evidenceEvents,
      evidencedSkills,
      universe,
      strongSkills: skills.filter((s) => s.p >= 0.8).length,
      fragileSkills: skills.filter((s) => s.p < 0.4).length,
      decayingSkills: skills.filter((s) => s.raw - s.p > 0.08).length,
    },
  }
  cache.set(deviceId, { at: Date.now(), snap })
  return snap
}

/** Record a new-surface evidence event and invalidate the cache. */
export async function recordTwinEvent(input: {
  deviceId: string
  skillKey: string
  kind: string
  correct?: boolean | null
  weight?: number
  meta?: unknown
}) {
  if (!SKILL_INDEX.has(input.skillKey)) {
    throw new Error('Unknown skill key')
  }
  const kind = input.kind as EvidenceKind
  if (!(kind in BKT)) throw new Error('Unknown evidence kind')
  await db.twinEvent.create({
    data: {
      deviceId: input.deviceId,
      skillKey: input.skillKey,
      kind,
      correct: input.correct ?? null,
      weight: Math.max(1, Math.min(6, Math.floor(input.weight ?? 1))),
      meta: input.meta ? JSON.stringify(input.meta).slice(0, 4000) : null,
    },
  })
  invalidateTwin(input.deviceId)
}

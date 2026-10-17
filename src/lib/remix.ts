import { db } from '@/lib/db'
import {
  LIBRARY_BOOKS,
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
  LIBRARY_SUBJECTS,
} from '@/data/library'
import { buildTwin, skillPredecessor, type TwinSkill } from './twin'

// ============================================================================
// X4 — CURRICULUM REMIX ENGINE
// The library reorders itself per learner. A prerequisite-aware traversal
// over the skill graph, weighted by the Cognitive Digital Twin, produces a
// personalized study sequence; detected gaps get LLM-authored bridge lessons.
// ============================================================================

export interface RemixStep {
  skillKey: string
  number: number
  title: string
  chapterId: string
  chapterTitle: string
  subjectId: string
  subjectName: string
  day: number // 1-based slot in the horizon
  priority: number // 0-1
  reason: string
  pKnown: number | null
  bridge: boolean // needs a generated bridge lesson before starting
  done?: boolean // P4: learner marked this step complete (progress tracking)
  completedAt?: string | null // P4: ISO timestamp when the step was checked off
}

export interface RemixResult {
  planId: string
  goal: string
  horizonDays: number
  subjects: { subjectId: string; subjectName: string }[]
  steps: RemixStep[]
  stats: {
    skills: number
    bridges: number
    weakSkills: number
    freshSkills: number
    avgMastery: number | null
  }
}

// ------------------------------ subject resolution ---------------------------

const SUBJECT_SYNONYMS: Record<string, string[]> = {
  mathematics: ['math', 'maths', 'calculus', 'algebra', 'probability', 'statistics', 'discrete'],
  physics: ['mechanics', 'optics', 'thermodynamics', 'electromagnetism', 'modern physics'],
  chemistry: ['organic', 'inorganic', 'physical chemistry'],
  'programming-c-cpp': ['c', 'c++', 'cpp', 'programming', 'coding'],
  'programming-java': ['java', 'jdk'],
  'web-development': ['web', 'html', 'css', 'javascript', 'js', 'frontend'],
  'ai-data-science': ['ai', 'ml', 'machine learning', 'data science', 'deep learning'],
  dsa: ['data structures', 'algorithms', 'dsa'],
  toc: ['theory of computation', 'automata', 'turing'],
  coa: ['computer organization', 'computer architecture', 'coa'],
  'compiler-design': ['compilers', 'parsing'],
  'operating-systems': ['os', 'operating system'],
  dbms: ['database', 'sql', 'databases'],
  'computer-networks': ['networks', 'networking', 'tcp', 'osi'],
  cybersecurity: ['security', 'crypto', 'cryptography', 'hacking'],
}

/** resolve a free-text goal to subject ids (best-effort token match) */
export function resolveSubjects(goal: string): string[] {
  const g = goal.toLowerCase()
  const hits: string[] = []
  for (const subj of LIBRARY_SUBJECTS) {
    const name = subj.name.toLowerCase()
    const nameWords = name.split(/[,&/]+/).map((w) => w.trim()).filter((w) => w.length > 2)
    if (nameWords.some((w) => g.includes(w))) {
      hits.push(subj.id)
      continue
    }
    const syns = SUBJECT_SYNONYMS[subj.id] ?? []
    if (syns.some((s) => g.includes(s))) hits.push(subj.id)
  }
  return [...new Set(hits)].slice(0, 4)
}

// ------------------------------ sequence engine ------------------------------

interface SkillRow {
  key: string
  number: number
  title: string
  chapterId: string
  chapterTitle: string
  subjectId: string
  subjectName: string
  p: number | null
  urgency: number
  weaknessBoost: number
}

function chapterSections(): Map<string, typeof LIBRARY_SECTIONS> {
  const map = new Map<string, typeof LIBRARY_SECTIONS>()
  for (const s of LIBRARY_SECTIONS) {
    const list = map.get(s.chapterId)
    if (list) list.push(s)
    else map.set(s.chapterId, [s])
  }
  return map
}

export async function buildRemix(input: {
  deviceId: string
  goal: string
  horizonDays: number
  subjectId?: string | null
}): Promise<Omit<RemixResult, 'planId'>> {
  const twin = await buildTwin(input.deviceId)
  const skillByKey = new Map<string, TwinSkill>(twin.skills.map((s) => [s.key, s]))

  // 1) resolve target subjects
  let subjectIds = input.subjectId
    ? [input.subjectId]
    : resolveSubjects(input.goal)

  // no explicit subject → twin's weakest evidenced subjects (or the goal text stays generic)
  if (subjectIds.length === 0) {
    const weakSubjects = [...twin.subjects]
      .sort((a, b) => a.inferredMastery - b.inferredMastery)
      .slice(0, 2)
      .map((s) => s.subjectId)
    subjectIds = weakSubjects.length ? weakSubjects : [LIBRARY_SUBJECTS[0].id]
  }

  const subjectById = new Map(LIBRARY_SUBJECTS.map((s) => [s.id, s]))
  const bookById = new Map(LIBRARY_BOOKS.map((b) => [b.id, b]))
  const chapterById = new Map(LIBRARY_CHAPTERS.map((c) => [c.id, c]))
  const byChapter = chapterSections()

  // 2) target skill rows
  const rows: SkillRow[] = []
  for (const subjId of subjectIds) {
    const subj = subjectById.get(subjId)
    if (!subj) continue
    for (const book of LIBRARY_BOOKS.filter((b) => b.subjectId === subjId)) {
      for (const ch of LIBRARY_CHAPTERS.filter((c) => c.bookId === book.id)) {
        for (const sec of byChapter.get(ch.id) ?? []) {
          const twinSkill = skillByKey.get(sec.id)
          rows.push({
            key: sec.id,
            number: sec.number,
            title: sec.title,
            chapterId: ch.id,
            chapterTitle: ch.shortTitle || ch.title,
            subjectId: subjId,
            subjectName: subj.name,
            p: twinSkill ? twinSkill.p : null,
            urgency: twinSkill ? twinSkill.urgency : 0.45, // unexplored = moderately urgent
            weaknessBoost: 0,
          })
        }
      }
    }
  }
  if (rows.length === 0) throw new Error('No skills found for this goal')

  // 3) subject weakness boost (twin rollups)
  const rollupByKey = new Map(twin.subjects.map((s) => [s.subjectId, s]))
  for (const r of rows) {
    const rollup = rollupByKey.get(r.subjectId)
    r.weaknessBoost = rollup ? 1 - rollup.inferredMastery : 0.5
  }

  // 4) restrict to a workable horizon: prioritize, keep ~5 skills/day
  const capacity = Math.max(10, input.horizonDays * 5)
  const priorityOf = (r: SkillRow) =>
    Math.min(
      1,
      0.45 * (r.p === null ? 0.55 : 1 - r.p) + 0.25 * r.urgency + 0.2 * r.weaknessBoost + 0.1 * (r.p === null ? 0.5 : 0.2)
    )
  const preselected = [...rows].sort((a, b) => priorityOf(b) - priorityOf(a)).slice(0, capacity * 2)
  const selectedKeys = new Set(preselected.map((r) => r.key))

  // 5) prerequisite closure within selection (pull predecessors in, they must come first)
  const include = new Set(selectedKeys)
  for (const key of selectedKeys) {
    let cur = skillPredecessor(key)
    let hops = 0
    while (cur && !include.has(cur) && hops < 3) {
      include.add(cur)
      cur = skillPredecessor(cur)
      hops++
    }
  }
  const rowByKey = new Map(rows.map((r) => [r.key, r]))
  const finalRows = [...include]
    .map((k) => rowByKey.get(k))
    .filter((r): r is SkillRow => !!r)

  // 6) topological order with priority tie-breaking (greedy Kahn)
  const inDeg = new Map<string, number>()
  const dependents = new Map<string, string[]>()
  for (const r of finalRows) {
    inDeg.set(r.key, 0)
  }
  for (const r of finalRows) {
    const pred = skillPredecessor(r.key)
    if (pred && inDeg.has(pred)) {
      inDeg.set(r.key, (inDeg.get(r.key) ?? 0) + 1)
      const list = dependents.get(pred)
      if (list) list.push(r.key)
      else dependents.set(pred, [r.key])
    }
  }
  const ready = finalRows
    .filter((r) => (inDeg.get(r.key) ?? 0) === 0)
    .sort((a, b) => priorityOf(b) - priorityOf(a))
  const ordered: SkillRow[] = []
  const seen = new Set<string>()
  while (ready.length && ordered.length < capacity) {
    const r = ready.shift()!
    if (seen.has(r.key)) continue
    seen.add(r.key)
    ordered.push(r)
    for (const dep of dependents.get(r.key) ?? []) {
      const d = (inDeg.get(dep) ?? 0) - 1
      inDeg.set(dep, d)
      if (d === 0) {
        const row = rowByKey.get(dep)
        if (row) {
          // insert into `ready` keeping priority order (binary insert for scale)
          let lo = 0
          const p = priorityOf(row)
          while (lo < ready.length && priorityOf(ready[lo]) >= p) lo++
          ready.splice(lo, 0, row)
        }
      }
    }
  }

  // 7) day slotting + bridge detection + human reasons
  const perDay = Math.max(3, Math.ceil(ordered.length / Math.max(1, input.horizonDays)))
  const steps: RemixStep[] = ordered.map((r, i) => {
    const pred = skillPredecessor(r.key)
    const predSkill = pred ? skillByKey.get(pred) : undefined
    const bridge = !!pred && (!predSkill || predSkill.p < 0.4)
    let reason: string
    if (r.p === null) reason = 'Unexplored territory — first contact'
    else if (r.urgency > 0.6) reason = `High urgency — mastery only ${Math.round((r.p ?? 0) * 100)}% and fading`
    else if (r.p < 0.4) reason = `Weak skill (${Math.round(r.p * 100)}%) — needs the most reps`
    else if (predSkill && predSkill.p < 0.4) reason = 'Scheduled after a shaky prerequisite — bridge available'
    else if (r.p > 0.75) reason = `Maintenance pass (${Math.round(r.p * 100)}%) — keep it warm`
    else reason = 'Consolidation — mid-strength skill'
    return {
      skillKey: r.key,
      number: r.number,
      title: r.title,
      chapterId: r.chapterId,
      chapterTitle: r.chapterTitle,
      subjectId: r.subjectId,
      subjectName: r.subjectName,
      day: Math.floor(i / perDay) + 1,
      priority: Math.round(priorityOf(r) * 100) / 100,
      reason,
      pKnown: r.p,
      bridge,
    }
  })

  const evid = steps.filter((s) => s.pKnown !== null)
  return {
    goal: input.goal,
    horizonDays: input.horizonDays,
    subjects: subjectIds
      .map((id) => ({ subjectId: id, subjectName: subjectById.get(id)?.name ?? id }))
      .filter((s, i, arr) => arr.findIndex((x) => x.subjectId === s.subjectId) === i),
    steps,
    stats: {
      skills: steps.length,
      bridges: steps.filter((s) => s.bridge).length,
      weakSkills: steps.filter((s) => s.pKnown !== null && s.pKnown < 0.4).length,
      freshSkills: steps.filter((s) => s.pKnown === null).length,
      avgMastery: evid.length ? evid.reduce((a, s) => a + (s.pKnown ?? 0), 0) / evid.length : null,
    },
  }
}

// ------------------------------ bridge lesson gen ----------------------------

export interface BridgeContent {
  intro: string
  objectives: string[]
  concepts: { term: string; statement: string }[]
  takeaways: string[]
}

export function parseBridgeContent(raw: string): BridgeContent | null {
  try {
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null
    const o = parsed as Record<string, unknown>
    const intro = typeof o.intro === 'string' ? o.intro : ''
    const objectives = Array.isArray(o.objectives)
      ? o.objectives.filter((x): x is string => typeof x === 'string').slice(0, 6)
      : []
    const concepts = Array.isArray(o.concepts)
      ? o.concepts
          .filter(
            (c): c is { term: string; statement: string } =>
              !!c && typeof c === 'object' && typeof (c as { term?: unknown }).term === 'string' && typeof (c as { statement?: unknown }).statement === 'string'
          )
          .slice(0, 6)
      : []
    const takeaways = Array.isArray(o.takeaways)
      ? o.takeaways.filter((x): x is string => typeof x === 'string').slice(0, 6)
      : []
    if (!intro || concepts.length === 0) return null
    return { intro, objectives, concepts, takeaways }
  } catch {
    return null
  }
}

export function bridgeGapContext(skillKey: string): { gaps: string[]; target: string } {
  const gaps: string[] = []
  let cur = skillPredecessor(skillKey)
  let hops = 0
  while (cur && hops < 3) {
    const sec = LIBRARY_SECTIONS.find((s) => s.id === cur)
    if (sec) {
      const ch = LIBRARY_CHAPTERS.find((c) => c.id === sec.chapterId)
      gaps.push(`§${sec.number} ${sec.title}${ch ? ` (${ch.shortTitle || ch.title})` : ''}`)
    }
    cur = skillPredecessor(cur)
    hops++
  }
  const target = LIBRARY_SECTIONS.find((s) => s.id === skillKey)
  const tch = target ? LIBRARY_CHAPTERS.find((c) => c.id === target.chapterId) : undefined
  return {
    gaps,
    target: target ? `§${target.number} ${target.title}${tch ? ` (${tch.shortTitle || tch.title})` : ''}` : skillKey,
  }
}

// ------------------------------ persistence helpers --------------------------

export function parseSteps(raw: string): RemixStep[] {
  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (s): s is RemixStep =>
        !!s && typeof s === 'object' && typeof (s as { skillKey?: unknown }).skillKey === 'string'
    )
  } catch {
    return []
  }
}

// ------------------------------ plan progress (P4) ---------------------------

export interface PlanProgress {
  totalSteps: number
  doneSteps: number
  openSteps: number
  percent: number
  currentDay: number // 1-based day index of "now" relative to the plan start
  overdueDays: number[] // day slots whose date has passed with steps still open
  velocity: number | null // completed steps/day since the plan started
  lastCompletedAt: string | null
}

function startOfDay(d: Date): number {
  return Math.floor(
    Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86_400_000
  )
}

/** day index (1-based) of `at` relative to a plan that started on `startDate` */
export function planDayIndex(startDate: Date, at: Date): number {
  return startOfDay(at) - startOfDay(startDate) + 1
}

/**
 * Progress + slip metrics for a saved plan: completion counts, which day slots
 * are overdue, and the learner's completion velocity (from completedAt stamps
 * when present, else a done-count/time-elapsed estimate).
 */
export function planProgress(
  steps: RemixStep[],
  startDate: Date,
  horizonDays: number,
  now: Date = new Date()
): PlanProgress {
  const totalSteps = steps.length
  const done = steps.filter((s) => s.done)
  const doneSteps = done.length
  const percent = totalSteps ? Math.round((doneSteps / totalSteps) * 100) : 0

  const currentDay = Math.max(1, planDayIndex(startDate, now))
  const byDay = new Map<number, RemixStep[]>()
  for (const s of steps) {
    const list = byDay.get(s.day)
    if (list) list.push(s)
    else byDay.set(s.day, [s])
  }
  const overdueDays: number[] = []
  for (const [day, list] of byDay) {
    if (day < currentDay && list.some((s) => !s.done)) overdueDays.push(day)
  }
  overdueDays.sort((a, b) => a - b)

  // velocity — completions per day since the plan started (≥ 1 day window)
  const stamps = done
    .map((s) => (typeof s.completedAt === 'string' ? Date.parse(s.completedAt) : NaN))
    .filter((t) => Number.isFinite(t))
    .sort((a, b) => a - b)
  const elapsed = Math.max(1, currentDay - 1)
  const velocity = doneSteps > 0 ? Math.round((doneSteps / elapsed) * 10) / 10 : 0

  return {
    totalSteps,
    doneSteps,
    openSteps: totalSteps - doneSteps,
    percent,
    currentDay,
    overdueDays,
    velocity,
    lastCompletedAt: stamps.length ? new Date(stamps[stamps.length - 1]).toISOString() : null,
  }
}

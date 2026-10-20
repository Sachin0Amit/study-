/**
 * X11H — Smart Study Planner: pure generation algorithm.
 *
 * Shared by the API route (server: persists blocks) and the generator
 * dialog (client: live preview of the same math). No React, no fetch —
 * so both sides import it safely.
 */

export interface PlanSubjectInput {
  subject: string
  subjectId: string | null
  weight: number // 1..5
}

export interface GeneratedBlock {
  day: string // "YYYY-MM-DD"
  subject: string
  subjectId: string | null
  minutes: number
  note: string | null
  position: number
}

export interface PlanPreview {
  blocks: GeneratedBlock[]
  totalMinutes: number
  dayCount: number // days that actually carry blocks (rest days excluded)
  restDays: number
  perSubject: { subject: string; minutes: number; share: number }[]
}

/* ------------------------------------------------------------------ */
/*  date helpers (local keys, matching localDateKey in focus.ts)       */
/* ------------------------------------------------------------------ */

export function planDateKey(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function planKeyToDate(key: string): Date {
  const [y, m, d] = key.split('-').map(Number)
  return new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1)
}

/** all local date keys from startKey to endKey inclusive (cap 400) */
export function planDayRange(startKey: string, endKey: string): string[] {
  const out: string[] = []
  const start = planKeyToDate(startKey)
  const end = planKeyToDate(endKey)
  for (let d = new Date(start); d <= end && out.length < 400; d.setDate(d.getDate() + 1)) {
    out.push(planDateKey(d))
  }
  return out
}

/* ------------------------------------------------------------------ */
/*  generator                                                          */
/* ------------------------------------------------------------------ */

const MIN_BLOCK = 20
const MAX_BLOCKS_PER_DAY = 6

export interface GenerateOptions {
  /** local "YYYY-MM-DD" keys, inclusive — already resolved horizon */
  days: string[]
  subjects: PlanSubjectInput[]
  /** daily planning budget in minutes (20..600) */
  dailyMinutes: number
  /** skip every 7th day (a rest day) */
  restWeekly: boolean
  /** the day BEFORE an exam gets a lighter load + a "light revision" note */
  lightLastDay: boolean
}

/** round to the nearest multiple of 5, min `lo` */
function round5(n: number, lo: number): number {
  return Math.max(lo, Math.round(n / 5) * 5)
}

/**
 * Weighted round-robin allocation:
 * 1. each day gets `nBlocks` blocks of `blockLen` minutes
 *     (nBlocks ≈ dailyMinutes / 50, capped 1..6; blockLen = the remainder)
 * 2. subjects spread Bresenham-style — each subject's slots land at evenly
 *     spaced days across the WHOLE runway (Math every other day till the
 *     end, not front-loaded then gone), never twice in one day unless it
 *     must (fewer subjects than blocks)
 * 3. restWeekly → every 7th day of the horizon carries zero blocks
 * 4. lightLastDay → the final day runs at ~50% + gets a "light revision" note
 */
export function generateStudyPlan(opts: GenerateOptions): PlanPreview {
  const subjects = opts.subjects.filter((s) => s.subject.trim().length > 0)
  if (subjects.length === 0 || opts.days.length === 0) {
    return { blocks: [], totalMinutes: 0, dayCount: 0, restDays: 0, perSubject: [] }
  }

  const daily = Math.max(20, Math.min(600, Math.round(opts.dailyMinutes)))
  const nBlocks = Math.max(1, Math.min(MAX_BLOCKS_PER_DAY, Math.round(daily / 50)))
  const blockLen = round5(daily / nBlocks, MIN_BLOCK)

  // total slots per subject — largest remainder over the whole horizon
  const workDays = opts.days.filter((_, i) => !(opts.restWeekly && i > 0 && (i + 1) % 7 === 0))
  const restDays = opts.days.length - workDays.length
  const lastDay = workDays[workDays.length - 1]
  const totalSlots = workDays.reduce((n, day) => {
    if (opts.lightLastDay && day === lastDay) return n + Math.max(1, Math.ceil(nBlocks / 2))
    return n + nBlocks
  }, 0)

  const weightSum = subjects.reduce((n, s) => n + Math.max(1, Math.min(5, s.weight)), 0)
  const rawSlots = subjects.map((s) => (totalSlots * Math.max(1, Math.min(5, s.weight))) / weightSum)
  const slots = rawSlots.map((r) => Math.max(1, Math.floor(r)))
  // distribute the leftover slots to the largest remainders
  let leftover = totalSlots - slots.reduce((a, b) => a + b, 0)
  const byRemainder = rawSlots
    .map((r, i) => ({ i, frac: r - Math.floor(r) }))
    .sort((a, b) => b.frac - a.frac)
  for (const { i } of byRemainder) {
    if (leftover <= 0) break
    slots[i] += 1
    leftover -= 1
  }

  /* Two-phase even spread:
   *  Phase 1 — every subject first claims ONE slot per day, Bresenham-spaced
   *  across the runway (a 2:1 Physics:Math ratio reads as "Math every other
   *  day till the end", never front-loaded then gone).
   *  Phase 2 — leftover repeat slots fill remaining day capacity in order. */
  const workDayIdx: number[] = []
  for (let dayIdx = 0; dayIdx < opts.days.length; dayIdx++) {
    if (opts.restWeekly && dayIdx > 0 && (dayIdx + 1) % 7 === 0) continue // rest day
    workDayIdx.push(dayIdx)
  }
  const D = workDayIdx.length
  const lastWorkSlot = D - 1
  const capAt = (slot: number) =>
    opts.lightLastDay && slot === lastWorkSlot ? Math.max(1, Math.ceil(nBlocks / 2)) : nBlocks
  const room = workDayIdx.map((_, slot) => capAt(slot))
  /** per work-slot: subject indices assigned there */
  const assign: number[][] = workDayIdx.map(() => [])
  const placed = subjects.map(() => 0)

  /** two-pass search from a target day: fresh day (no such subject) → any room */
  function place(target: number, i: number, allowRepeat: boolean): boolean {
    for (let step = 0; step < D; step++) {
      const j = (target + step) % D
      if (room[j] > 0 && !assign[j].includes(i)) {
        assign[j].push(i)
        room[j] -= 1
        return true
      }
    }
    if (!allowRepeat) return false
    for (let step = 0; step < D; step++) {
      const j = (target + step) % D
      if (room[j] > 0) {
        assign[j].push(i)
        room[j] -= 1
        return true
      }
    }
    return false
  }

  // Phase 1 — unique-day events, processed in day order (stable by subject)
  const events: { target: number; i: number }[] = []
  for (let i = 0; i < subjects.length; i++) {
    const uniq = Math.min(slots[i], D)
    for (let k = 0; k < uniq; k++) {
      events.push({ target: Math.min(D - 1, Math.floor((k * D) / slots[i])), i })
    }
  }
  events.sort((a, b) => a.target - b.target || a.i - b.i)
  for (const ev of events) {
    if (place(ev.target, ev.i, true)) placed[ev.i] += 1
  }

  // Phase 2 — repeats fill the remaining capacity in day order
  let guard = 0
  let filling = true
  while (filling && guard++ < 1000) {
    filling = false
    for (let i = 0; i < subjects.length; i++) {
      if (placed[i] < slots[i]) {
        if (place(0, i, true)) {
          placed[i] += 1
          filling = true
        }
      }
    }
  }

  const blocks: GeneratedBlock[] = []
  let position = 0
  for (let slot = 0; slot < D; slot++) {
    const day = opts.days[workDayIdx[slot]]
    const isLight = opts.lightLastDay && slot === lastWorkSlot
    for (const i of assign[slot]) {
      blocks.push({
        day,
        subject: subjects[i].subject,
        subjectId: subjects[i].subjectId,
        minutes: blockLen,
        note: isLight ? 'light revision' : null,
        position: position++,
      })
    }
  }

  // per-subject summary
  const perSubject = subjects
    .map((s, i) => {
      const minutes = slots[i] * blockLen
      return { subject: s.subject, minutes, share: slots[i] / Math.max(1, slots.reduce((a, b) => a + b, 0)) }
    })
    .sort((a, b) => b.minutes - a.minutes)

  return {
    blocks,
    totalMinutes: blocks.reduce((n, b) => n + b.minutes, 0),
    dayCount: new Set(blocks.map((b) => b.day)).size,
    restDays,
    perSubject,
  }
}

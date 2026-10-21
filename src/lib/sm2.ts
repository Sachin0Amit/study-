/**
 * SM-2 spaced-repetition scheduler — the algorithm Piotr Wozniak published in
 * 1987 (and the one SuperMemo/Anki descend from). This is the method the
 * Foundation-Learning forgetting-curve lesson teaches, now actually running
 * inside StudyVerse's Review Mode.
 *
 * A card carries four numbers:
 *   reps     — how many times it has been answered (any grade)
 *   lapses   — how many times the answer was a blank "Again"
 *   interval — current gap to the next review, in days (floats allowed)
 *   ease     — the ease factor EF, ~1.3–2.8, "how easily you learn this card"
 *
 * Grading (four buttons, like Anki):
 *   0 Again — total blackout   1 Hard — serious effort, recalled
 *   2 Good  — normal recall    3 Easy — instant, perfect recall
 */

/** Minimum viable ease factor — below this the schedule degenerates. */
export const EASE_FLOOR = 1.3

/** "Again" shows the card again almost immediately: ~10 minutes. */
export const AGAIN_INTERVAL_DAYS = 10 / (60 * 24) // ≈ 0.007 days

/** The four grades the UI offers. */
export type Grade = 0 | 1 | 2 | 3

/** The scheduling state a card carries (mirrors the Prisma ReviewCard row). */
export interface Sm2Card {
  reps: number
  lapses: number
  /** days */
  interval: number
  ease: number
}

/** What `schedule` hands back — everything needed to persist + preview. */
export interface Sm2Result {
  reps: number
  lapses: number
  /** days */
  interval: number
  ease: number
  dueAt: Date
}

/** Round to 3 decimals so stored intervals stay tidy (0.007, 1.2, 4.86…). */
function round3(n: number): number {
  return Math.round(n * 1000) / 1000
}

/**
 * Apply one answer to a card and get its next state.
 *
 *   Again → lapse: ease −0.20, back to a 10-minute relearn step
 *   Hard  → ease −0.15, interval × 1.2 (at least 1 day)
 *   Good  → the backbone: 1d, 6d, then previous × ease
 *   Easy  → ease +0.15, 3d first, then previous × ease × 1.3
 */
export function schedule(card: Sm2Card, grade: Grade, now: Date = new Date()): Sm2Result {
  let { reps, lapses, interval, ease } = card

  if (grade === 0) {
    // Again — a lapse: the card is essentially re-learned from scratch.
    reps = 0
    lapses += 1
    ease = Math.max(EASE_FLOOR, ease - 0.2)
    interval = AGAIN_INTERVAL_DAYS
  } else if (grade === 1) {
    // Hard — small growth, slight ease penalty.
    ease = Math.max(EASE_FLOOR, ease - 0.15)
    interval = Math.max(1, interval * 1.2)
    reps += 1
  } else if (grade === 2) {
    // Good — the classic SM-2 ladder.
    reps += 1
    if (reps === 1) interval = 1
    else if (reps === 2) interval = 6
    else interval = Math.max(1, interval * ease)
  } else {
    // Easy — accelerated ladder with an ease reward.
    reps += 1
    ease = ease + 0.15
    if (reps === 1) interval = 3
    else interval = Math.max(1, interval * ease * 1.3)
  }

  interval = round3(interval)
  const dueAt = new Date(now.getTime() + interval * 24 * 60 * 60 * 1000)
  return { reps, lapses, interval, ease, dueAt }
}

/**
 * Human preview of the next interval, shown on the grade buttons:
 * "5m", "10m", "1d", "3d", "12d", "2.4mo"…
 */
export function formatInterval(days: number): string {
  if (days < 1 / 24) {
    const mins = Math.max(1, Math.round(days * 24 * 60))
    return `${mins}m`
  }
  if (days < 1) {
    const hours = Math.max(1, Math.round(days * 24))
    return `${hours}h`
  }
  if (days < 30) {
    const d = Math.round(days)
    return `${d}d`
  }
  if (days < 365) {
    const mo = days / 30
    return `${mo >= 10 ? Math.round(mo) : Math.round(mo * 10) / 10}mo`
  }
  const yr = Math.round((days / 365) * 10) / 10
  return `${yr}y`
}

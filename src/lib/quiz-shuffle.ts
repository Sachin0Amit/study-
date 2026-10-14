import type { QuizQuestion } from '@/data/library'

/**
 * Presentation-time answer-position balancer.
 *
 * The authored banks skew heavily toward answer index 1 (~59% of all
 * questions), which teaches "just pick B". This helper applies a
 * deterministic, seeded permutation of each question's options so correct
 * answers spread uniformly across A–D, while the persisted/graded answer
 * always travels with its option text.
 *
 * Deterministic (FNV-1a of the question stem → mulberry32) so the order is
 * stable across renders, sessions and retakes — the review screen, the
 * persisted exam-misses deck and grading all see the same letters.
 *
 * Safety: questions are returned UNCHANGED when shuffling would break them:
 * - the explanation names option letters/positions ("option B", "the last
 *   option", "all of the above")
 * - any option references positions ("Both A and B", "All of the above")
 * - option count is not exactly 4
 */
function hashStr(s: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h >>> 0
}

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

const EXPLANATION_POS_REF =
  /option\s+[A-D]\b|choices?\s+[A-D]\b|(first|second|third|fourth|last)\s+option|all\s+of\s+the\s+(above|these)|none\s+of\s+the\s+above/i

const OPTIONS_POS_REF =
  /\bboth\s+[A-D]\b|\b[ABCD]\s+and\s+[ABCD]\b|options?\s+[A-D]\b|all\s+of\s+the\s+(above|these)|none\s+of\s+the\s+above/i

export function shuffleQuizOptions(q: QuizQuestion): { options: string[]; answer: number } {
  const { options, answer } = q
  if (!Array.isArray(options) || options.length !== 4) return { options, answer }
  if (!Number.isInteger(answer) || answer < 0 || answer > 3) return { options, answer }
  if (options.some((o) => typeof o !== 'string' || o.trim().length === 0)) return { options, answer }
  if (EXPLANATION_POS_REF.test(q.explanation)) return { options, answer }
  if (OPTIONS_POS_REF.test(options.join(' | '))) return { options, answer }

  const rand = mulberry32(hashStr(q.q))
  const perm = [0, 1, 2, 3]
  for (let i = perm.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[perm[i], perm[j]] = [perm[j], perm[i]]
  }
  // Identity permutation → nudge once so the order visibly changes.
  if (perm.every((v, i) => v === i)) {
    ;[perm[0], perm[1]] = [perm[1], perm[0]]
  }
  return {
    options: perm.map((i) => options[i]),
    answer: perm.indexOf(answer),
  }
}

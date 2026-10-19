/**
 * Review Mode seeding — turn a lesson into SM-2 review cards.
 *
 * One POST per lesson ("Save to Review" at the foot of the lesson): every
 * quiz question, key term and takeaway becomes a two-sided ReviewCard. Cards
 * that already exist for that (sectionId, front) are left untouched, so
 * re-saving a lesson never resets your schedule.
 *
 * Server-only (touches Prisma + the library registry).
 */
import { db } from '@/lib/db'
import { getSection, type SectionContent } from '@/data/library'

/** What POST /api/review/seed answers with. */
export interface SeedResult {
  created: number
  skipped: number
}

/** Statement backs can get long — cap them so the flip side stays scannable. */
const TERM_BACK_LIMIT = 240

function trimTo(text: string, max: number): string {
  const t = text.replace(/\s+/g, ' ').trim()
  return t.length > max ? `${t.slice(0, max - 1).trimEnd()}…` : t
}

/** "the logistic map diverges past r = 3.57" → "the logistic map…" (8 words). */
function firstWords(text: string, words: number): string {
  return text.replace(/\s+/g, ' ').trim().split(' ').slice(0, words).join(' ')
}

/** One card waiting to be written. */
interface NewCard {
  sectionId: string
  sectionTitle: string
  front: string
  back: string
  kind: 'quiz' | 'term' | 'takeaway'
}

/**
 * Build the card set from a lesson's content:
 *   quiz      → front = question, back = correct option + explanation
 *   term      → front = term,     back = statement (trimmed)
 *   takeaway  → front = "Remember: <first 8 words>…", back = full takeaway
 */
export function buildCardsForSection(
  sectionId: string,
  sectionTitle: string,
  content: SectionContent
): NewCard[] {
  const cards: NewCard[] = []
  const seen = new Set<string>()

  const push = (front: string, back: string, kind: NewCard['kind']) => {
    const key = front.replace(/\s+/g, ' ').trim()
    if (!key || seen.has(key)) return // dup inside the same lesson
    seen.add(key)
    cards.push({ sectionId, sectionTitle, front: key, back: back.trim(), kind })
  }

  // 1. quiz questions — the correct option is the answer side
  for (const q of content.quiz ?? []) {
    if (!q || typeof q.q !== 'string') continue
    const letter = String.fromCharCode(65 + (q.answer ?? 0))
    const correct = q.options?.[q.answer ?? 0] ?? ''
    const back = q.explanation
      ? `**${letter}. ${correct}** — ${q.explanation}`
      : `**${letter}. ${correct}**`
    push(q.q, back, 'quiz')
  }

  // 2. concepts — term fronts, statement backs
  for (const c of content.concepts ?? []) {
    if (!c?.term || !c?.statement) continue
    push(c.term, trimTo(c.statement, TERM_BACK_LIMIT), 'term')
  }

  // 3. key takeaways — cued-recall fronts ("Remember: …")
  for (const t of content.keyTakeaways ?? []) {
    if (!t || typeof t !== 'string') continue
    const lead = firstWords(t, 8)
    const cue = lead.length < t.replace(/\s+/g, ' ').trim().length ? `${lead}…` : lead
    push(`Remember: ${cue}`, t, 'takeaway')
  }

  return cards
}

/**
 * Persist the cards for a lesson, skipping fronts that already exist for
 * this section (createMany-style with an explicit pre-check so we can count
 * the skips). Never mutates existing scheduling state.
 */
export async function seedCards(sectionId: string, content: SectionContent): Promise<SeedResult> {
  const sectionTitle = getSection(sectionId)?.title ?? sectionId
  const wanted = buildCardsForSection(sectionId, sectionTitle, content)
  if (wanted.length === 0) return { created: 0, skipped: 0 }

  const existing = await db.reviewCard.findMany({
    where: { sectionId },
    select: { front: true },
  })
  const existingFronts = new Set(existing.map((c) => c.front))

  const fresh = wanted.filter((c) => !existingFronts.has(c.front))
  if (fresh.length > 0) {
    await db.reviewCard.createMany({ data: fresh })
  }

  return { created: fresh.length, skipped: wanted.length - fresh.length }
}

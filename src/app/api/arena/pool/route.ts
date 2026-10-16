import { NextRequest, NextResponse } from 'next/server'
import { allContent } from '@/data/content'
import { LIBRARY_BOOKS, LIBRARY_CHAPTERS, LIBRARY_SECTIONS, LIBRARY_SUBJECTS } from '@/data/library'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * GET /api/arena/pool?count=10&subject=<subjectId|''|mixed>
 *
 * Question pool for the real-time battle arena (called server-to-server by
 * the socket.io mini-service on 127.0.0.1:3031). Returns a random sample of
 * questions with full provenance (section → chapter → subject) so battle
 * answers can feed the cognitive twin as evidence events.
 *
 * Note: the correct `answer` index is included — this route is server-side
 * only; the mini-service strips it and hands each player an independently
 * shuffled option set.
 */

export interface ArenaPoolQuestion {
  q: string
  options: string[]
  answer: number
  explanation: string
  sectionId: string
  sectionTitle: string
  chapterTitle: string
  subjectName: string
  subjectId: string
}

/**
 * Questions whose text would break under option shuffling ("option B",
 * "All of the above", …) are excluded — the arena re-shuffles options
 * per player, so only position-independent questions are eligible.
 */
const POSITION_REF =
  /option\s+[A-D]\b|choices?\s+[A-D]\b|\bboth\s+[A-D]\b|\b[ABCD]\s+and\s+[ABCD]\b|(first|second|third|fourth|last)\s+option|all\s+of\s+the\s+(above|these)|none\s+of\s+the\s+above/i

/** Build the full pool once (module level — static data, mirrors exam-view). */
const POOL: ArenaPoolQuestion[] = (() => {
  const sectionById = new Map(LIBRARY_SECTIONS.map((s) => [s.id, s]))
  const chapterById = new Map(LIBRARY_CHAPTERS.map((c) => [c.id, c]))
  const bookById = new Map(LIBRARY_BOOKS.map((b) => [b.id, b]))
  const subjectById = new Map(LIBRARY_SUBJECTS.map((s) => [s.id, s]))
  const pool: ArenaPoolQuestion[] = []
  for (const content of allContent) {
    const sec = sectionById.get(content.sectionId)
    const ch = sec ? chapterById.get(sec.chapterId) : undefined
    const book = ch ? bookById.get(ch.bookId) : undefined
    const subj = book ? subjectById.get(book.subjectId) : undefined
    if (!sec || !ch || !book || !subj) continue
    for (const q of content.quiz) {
      if (!q) continue
      if (!Array.isArray(q.options) || q.options.length !== 4) continue
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) continue
      if (q.options.some((o) => typeof o !== 'string' || o.trim().length === 0)) continue
      if (typeof q.explanation !== 'string' || q.explanation.trim().length === 0) continue
      if (POSITION_REF.test(q.q) || POSITION_REF.test(q.explanation)) continue
      if (POSITION_REF.test(q.options.join(' | '))) continue
      pool.push({
        q: q.q,
        options: q.options,
        answer: q.answer,
        explanation: q.explanation,
        sectionId: content.sectionId,
        sectionTitle: sec.title,
        chapterTitle: ch.title,
        subjectName: subj.name,
        subjectId: subj.id,
      })
    }
  }
  return pool
})()

/** Fisher–Yates sample: shuffle a copy, take the first n. */
function sample<T>(arr: T[], n: number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a.slice(0, Math.min(n, a.length))
}

export async function GET(req: NextRequest) {
  try {
    const params = req.nextUrl.searchParams
    let count = Number(params.get('count') ?? 10)
    if (!Number.isFinite(count)) count = 10
    count = Math.min(30, Math.max(5, Math.floor(count)))

    const subjectRaw = (params.get('subject') ?? '').trim()
    const subjectId = subjectRaw && subjectRaw !== 'mixed' ? subjectRaw : ''
    const knownSubject = subjectId !== '' && LIBRARY_SUBJECTS.some((s) => s.id === subjectId)

    const source = knownSubject ? POOL.filter((q) => q.subjectId === subjectId) : POOL
    const questions = sample(source, count)

    return NextResponse.json({ questions, total: source.length })
  } catch (err) {
    console.error('[api/arena/pool]', err)
    return NextResponse.json({ error: 'Could not build the arena pool.' }, { status: 500 })
  }
}

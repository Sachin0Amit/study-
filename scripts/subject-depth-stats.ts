/* ------------------------------------------------------------------ */
/*  Subject-depth parity stats — the measuring stick of the           */
/*  SUBJECT-DEPTH physics-parity loop (created 2026-10-29 with the    */
/*  loop itself).                                                     */
/*                                                                    */
/*  Prints one line per knowledge book: chapters, lessons, total      */
/*  words, average words per lesson, quiz questions and average       */
/*  questions per lesson — grouped through the SAME exported          */
/*  registries the Library renders (KNOWLEDGE_CHAPTERS /              */
/*  KNOWLEDGE_SECTIONS / KNOWLEDGE_CONTENT), so the numbers always    */
/*  match what the site shows. Books print in knowledge-meta.json     */
/*  order (the loop's deterministic processing order); books outside  */
/*  that list (field tracks such as phys-master — the physics         */
/*  REFERENCE STANDARD) print after, marked [track].                  */
/*                                                                    */
/*  The PHYSICS BASELINE line at the end is what the loop measures    */
/*  every subject against, recomputed fresh on every run. Chapter     */
/*  word totals come from the same countTopicWords pipeline the       */
/*  serializer uses (kept honest by scripts/count-topic-words-exact   */
/*  enforcing declared == actual).                                    */
/*                                                                    */
/*  Usage: bun scripts/subject-depth-stats.ts [bookIdFilter]         */
/* ------------------------------------------------------------------ */
import { readFileSync } from 'node:fs'
import {
  KNOWLEDGE_BOOKS,
  KNOWLEDGE_CHAPTERS,
  KNOWLEDGE_CONTENT,
  KNOWLEDGE_SECTIONS,
} from '../src/data/library-parts/knowledge-universe'

interface Row {
  bookId: string
  title: string
  chapters: number
  lessons: number
  words: number
  quizItems: number
}

const wordsOf = (chapter: (typeof KNOWLEDGE_CHAPTERS)[number]): number => {
  const m = /([\d,]+) words/.exec(chapter.pages)
  return m ? Number(m[1].replace(/,/g, '')) : 0
}

const lessonsOf = (chapter: (typeof KNOWLEDGE_CHAPTERS)[number]): number => {
  const m = /(\d+) complete lesson/.exec(chapter.description)
  return m ? Number(m[1]) : 0
}

/* chapterId -> bookId */
const chapterBook = new Map(KNOWLEDGE_CHAPTERS.map((c) => [c.id, c.bookId]))
/* sectionId -> bookId */
const sectionBook = new Map(
  KNOWLEDGE_SECTIONS.map((s) => [s.id, chapterBook.get(s.chapterId) ?? '']),
)
/* bookId -> title */
const bookTitle = new Map(KNOWLEDGE_BOOKS.map((b) => [b.id, b.title]))

const rows = new Map<string, Row>()
const rowFor = (bookId: string): Row => {
  let r = rows.get(bookId)
  if (!r) {
    r = {
      bookId,
      title: bookTitle.get(bookId) ?? bookId,
      chapters: 0,
      lessons: 0,
      words: 0,
      quizItems: 0,
    }
    rows.set(bookId, r)
  }
  return r
}

for (const chapter of KNOWLEDGE_CHAPTERS) {
  const r = rowFor(chapter.bookId)
  r.chapters += 1
  r.lessons += lessonsOf(chapter)
  r.words += wordsOf(chapter)
}

for (const section of KNOWLEDGE_CONTENT) {
  const bookId = sectionBook.get(section.sectionId)
  if (!bookId) continue
  rowFor(bookId).quizItems += section.quiz?.length ?? 0
}

/* knowledge-meta.json order = the loop's deterministic processing order */
type MetaBook = { id: string }
const rawMeta: unknown = JSON.parse(
  readFileSync('src/data/library-parts/knowledge-meta.json', 'utf8'),
)
const metaList: MetaBook[] = Array.isArray(rawMeta)
  ? (rawMeta as MetaBook[])
  : ((rawMeta as { books: MetaBook[] }).books ?? [])
const metaOrder = new Map(metaList.map((b, i) => [b.id, i + 1]))

const filter = process.argv[2]
const sorted = [...rows.values()]
  .filter((r) => !filter || r.bookId.includes(filter))
  .sort((a, b) => {
    const ra = metaOrder.get(a.bookId) ?? 9999
    const rb = metaOrder.get(b.bookId) ?? 9999
    return ra !== rb ? ra - rb : a.bookId.localeCompare(b.bookId)
  })

const header =
  '#   bookId                          title                                           ch   ls      words   avg-w   quiz   avg-q'
console.log(header)
for (const r of sorted) {
  const order = metaOrder.has(r.bookId) ? String(metaOrder.get(r.bookId)).padStart(3) : ' tr'
  const track = metaOrder.has(r.bookId) ? '' : ' [track]'
  const avgW = r.lessons > 0 ? Math.round(r.words / r.lessons) : 0
  const avgQ = r.lessons > 0 ? (r.quizItems / r.lessons).toFixed(1) : '0.0'
  console.log(
    `${order}  ${r.bookId.padEnd(31)} ${r.title.slice(0, 45).padEnd(46)} ${String(r.chapters).padStart(2)}  ${String(
      r.lessons,
    ).padStart(4)}  ${r.words.toLocaleString('en-US').padStart(9)}  ${String(avgW).padStart(5)}  ${String(
      r.quizItems,
    ).padStart(5)}  ${avgQ.padStart(5)}${track}`,
  )
}

const physics = rows.get('phys-master')
if (physics && physics.lessons > 0) {
  const avgW = Math.round(physics.words / physics.lessons)
  const avgQ = (physics.quizItems / physics.lessons).toFixed(1)
  console.log('')
  console.log(
    `PHYSICS BASELINE (phys-master — the reference standard): lessons=${physics.lessons}, chapters=${physics.chapters}, total words=${physics.words.toLocaleString(
      'en-US',
    )}, avg words/lesson=${avgW}, quiz questions=${physics.quizItems}, avg questions/lesson=${avgQ}`,
  )
  console.log(
    `PARITY BAR for the SUBJECT-DEPTH loop: every subject reaches avg words/lesson >= ${avgW} and avg questions/lesson >= ${avgQ} (recomputed fresh each run).`,
  )
}

/**
 * SUBJECTDEPTH helper: dump one book's chapter/section structure using the
 * SAME registries the Library renders (knowledge-universe) + per-section
 * word/quiz counts, so gap analysis always matches the live site.
 * Usage: bun scripts/subjectdepth-dump-book.ts ku-study-skills
 */
import {
  KNOWLEDGE_BOOKS,
  KNOWLEDGE_CHAPTERS,
  KNOWLEDGE_CONTENT,
  KNOWLEDGE_SECTIONS,
} from '../src/data/library-parts/knowledge-universe'

const bookId = process.argv[2] ?? 'ku-study-skills'
const book = KNOWLEDGE_BOOKS.find((b) => b.id === bookId)
if (!book) {
  console.error('book not found:', bookId)
  process.exit(1)
}
const chapters = KNOWLEDGE_CHAPTERS.filter((c) => c.bookId === bookId)
const wordsOf = (c: (typeof KNOWLEDGE_CHAPTERS)[number]): number => {
  const m = /([\d,]+) words/.exec(c.pages)
  return m ? Number(m[1].replace(/,/g, '')) : 0
}
const contentOf = (sid: string) => KNOWLEDGE_CONTENT.find((s) => s.sectionId === sid)

console.log('BOOK', bookId, '—', book.title)
let tWords = 0
let tQuiz = 0
let tLessons = 0
for (const ch of chapters) {
  const secs = KNOWLEDGE_SECTIONS.filter((s) => s.chapterId === ch.id)
  console.log(`\nCH ${ch.id} | ${ch.title} | ${secs.length} sections | ${wordsOf(ch)} words`)
  for (const s of secs) {
    const c = contentOf(s.id)
    const w = c?.words ?? 0
    const q = c?.quiz?.length ?? 0
    tWords += w
    tQuiz += q
    tLessons += 1
    console.log(`   § ${s.id} | ${s.title} | words=${w} quiz=${q} readMins=${c?.readingTime ?? '?'}`)
  }
}
console.log(`\nTOTAL lessons=${tLessons} words=${tWords} quiz=${tQuiz} avg-w=${tLessons ? Math.round(tWords / tLessons) : 0} avg-q=${tLessons ? (tQuiz / tLessons).toFixed(2) : 0}`)

/**
 * SUBJECTDEPTH helper: dump one book's chapter/section structure from knowledge-meta.json
 * plus per-section word/quiz counts from public/data/content.json.
 * Usage: bun scripts/subjectdepth-dump-book.ts ku-study-skills
 */
import * as fs from 'fs'

const bookId = process.argv[2] ?? 'ku-study-skills'
const m = JSON.parse(fs.readFileSync('src/data/library-parts/knowledge-meta.json', 'utf8'))
const books = m.books ?? m
const b = books.find((x: any) => x.id === bookId)
if (!b) {
  console.error('book not found:', bookId, '| available sample:', books.slice(0, 3).map((x: any) => x.id))
  process.exit(1)
}

const c = JSON.parse(fs.readFileSync('public/data/content.json', 'utf8'))
const sectionsArr: any[] = c.sections ?? c.liveSections ?? []
const byId = new Map<string, any>()
for (const s of sectionsArr) {
  const sid = s.sectionId ?? s.id
  if (sid) byId.set(String(sid), s)
}

console.log('BOOK', b.id, '—', b.title)
console.log('chapters:', (b.chapters ?? []).length)
for (const ch of b.chapters ?? []) {
  const secs = ch.sections ?? ch.lessons ?? []
  console.log(`\nCH ${ch.id ?? ''} | ${ch.title ?? ch.name ?? ''} | ${secs.length} sections`)
  for (const s of secs) {
    const sid = String(s.id ?? s.sectionId ?? '')
    const live = byId.get('ku-' + sid) ?? byId.get(sid)
    const words = live?.words ?? live?.readingTimeWords ?? '?'
    const quizN = live?.quiz ? live.quiz.length : live?.quizQuestions ?? '?'
    console.log(`   § ${sid} | ${s.title ?? s.name ?? ''} | words=${words} quiz=${quizN}`)
  }
}

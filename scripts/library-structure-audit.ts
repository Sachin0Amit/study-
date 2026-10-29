/**
 * LIBRARY-ORG structure audit.
 * Parses src/data/library-parts/knowledge-meta.json and reports:
 *  1. Backlog books (chapters + sections, titles)
 *  2. All books violating the minimum rule (<2 chapters or <3 lessons)
 * Run: bun run scripts/library-structure-audit.ts
 */
import { readFileSync } from 'fs'
import { join } from 'path'

const ROOT = '/home/z/my-project'
const meta = JSON.parse(
  readFileSync(join(ROOT, 'src/data/library-parts/knowledge-meta.json'), 'utf8'),
) as {
  books: { id: string; subjectId: string; title: string; pages: number | string }[]
  chapters: { id: string; bookId: string; number: number; title: string }[]
  sections: { id: string; chapterId: string; number: number; title: string }[]
}

const chaptersByBook = new Map<string, typeof meta.chapters>()
for (const ch of meta.chapters) {
  if (!chaptersByBook.has(ch.bookId)) chaptersByBook.set(ch.bookId, [])
  chaptersByBook.get(ch.bookId)!.push(ch)
}
const sectionsByChapter = new Map<string, typeof meta.sections>()
for (const s of meta.sections) {
  if (!sectionsByChapter.has(s.chapterId)) sectionsByChapter.set(s.chapterId, [])
  sectionsByChapter.get(s.chapterId)!.push(s)
}

const BACKLOG = [
  'naval', 'nanotech', 'quantum-information', 'quantum-info',
  'german', 'mandarin', 'computational-science',
]

const violating: { id: string; title: string; chs: number; lessons: number }[] = []

for (const book of meta.books) {
  const chs = (chaptersByBook.get(book.id) || []).sort((a, b) => a.number - b.number)
  const lessons = chs.flatMap((ch) => sectionsByChapter.get(ch.id) || [])
  if (chs.length < 2 || lessons.length < 3) {
    violating.push({ id: book.id, title: book.title, chs: chs.length, lessons: lessons.length })
  }
  if (BACKLOG.some((k) => book.id.includes(k))) {
    console.log(`\n=== BACKLOG BOOK: ${book.title} (id=${book.id}) — ${chs.length} ch / ${lessons.length} lessons ===`)
    for (const ch of chs) {
      const secs = (sectionsByChapter.get(ch.id) || []).sort((a, b) => a.number - b.number)
      console.log(`  Ch${ch.number}: ${ch.title}`)
      for (const s of secs) console.log(`    §${s.number}: [${s.id}] ${s.title}`)
    }
  }
}

console.log(`\n\n########## MINIMUM VIOLATIONS (<2 ch or <3 lessons): ${violating.length} ##########`)
for (const v of violating.sort((a, b) => a.lessons - b.lessons)) {
  console.log(`  ${v.lessons} lessons / ${v.chs} ch — ${v.id} — ${v.title}`)
}

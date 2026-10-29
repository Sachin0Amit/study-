/**
 * LIBRARY-ORG discipline-spread audit: for each book, list chapters so a human/
 * agent pass can judge whether chapters span multiple disciplines (split rule 2a)
 * or are single-discipline sub-areas (stay whole).
 */
import { readFileSync } from 'fs'
import { join } from 'path'

const ROOT = '/home/z/my-project'
const meta = JSON.parse(
  readFileSync(join(ROOT, 'src/data/library-parts/knowledge-meta.json'), 'utf8'),
) as {
  books: { id: string; subjectId: string; title: string }[]
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

for (const book of meta.books) {
  const chs = (chaptersByBook.get(book.id) || []).sort((a, b) => a.number - b.number)
  const lessons = chs.flatMap((ch) => sectionsByChapter.get(ch.id) || [])
  console.log(`\n## ${book.title}  [${book.id}]  ${chs.length}ch/${lessons.length}ls`)
  for (const ch of chs) {
    const secs = sectionsByChapter.get(ch.id) || []
    console.log(`   - ${ch.title} (${secs.length})`)
  }
}
console.log(`\nTOTAL: ${meta.books.length} books`)

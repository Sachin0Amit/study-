// Inventory dump: subjects -> books -> chapters (id, number, title, #sections)
import { LIBRARY_SUBJECTS, LIBRARY_BOOKS, LIBRARY_CHAPTERS, LIBRARY_SECTIONS } from '../src/data/library';

const main = () => {
  const booksBySubject = new Map<string, any[]>();
  for (const b of LIBRARY_BOOKS) {
    if (!booksBySubject.has(b.subjectId)) booksBySubject.set(b.subjectId, []);
    booksBySubject.get(b.subjectId)!.push(b);
  }
  const chaptersByBook = new Map<string, any[]>();
  for (const c of LIBRARY_CHAPTERS) {
    if (!chaptersByBook.has(c.bookId)) chaptersByBook.set(c.bookId, []);
    chaptersByBook.get(c.bookId)!.push(c);
  }
  const sectionsByChapter = new Map<string, number>();
  for (const s of LIBRARY_SECTIONS) sectionsByChapter.set(s.chapterId, (sectionsByChapter.get(s.chapterId) || 0) + 1);

  for (const sub of LIBRARY_SUBJECTS) {
    console.log(`\n=== SUBJECT ${sub.id} | ${sub.name} ===`);
    for (const b of booksBySubject.get(sub.id) || []) {
      const chs = (chaptersByBook.get(b.id) || []).sort((a: any, c: any) => a.number - c.number);
      console.log(`  BOOK ${b.id} (${chs.length} ch):`);
      for (const c of chs) {
        console.log(`    ${String(c.number).padStart(3)} ${c.id} :: ${c.shortTitle || c.title} [${sectionsByChapter.get(c.id) || 0} sections]`);
      }
    }
  }
  console.log(`\nTOTALS: subjects=${LIBRARY_SUBJECTS.length} books=${LIBRARY_BOOKS.length} chapters=${LIBRARY_CHAPTERS.length} sections=${LIBRARY_SECTIONS.length}`);
};
main();

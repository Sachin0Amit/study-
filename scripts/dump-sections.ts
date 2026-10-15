// Dump all sections grouped by chapter for merge analysis
import { LIBRARY_CHAPTERS, LIBRARY_SECTIONS } from '../src/data/library';

const main = () => {
  const byChapter = new Map<string, any[]>();
  for (const s of LIBRARY_SECTIONS) {
    if (!byChapter.has(s.chapterId)) byChapter.set(s.chapterId, []);
    byChapter.get(s.chapterId)!.push(s);
  }
  const chById = new Map(LIBRARY_CHAPTERS.map((c: any) => [c.id, c]));
  // Only dump the chapters relevant to merge analysis: branch-subject common chapters, g/d chapters, math m/a/advmath, chem m/a
  const wanted = (cid: string) =>
    /^(cse-|ece-|ee-|me-|math-[masq]|advmath-|engmath-|chem-[ma])/.test(cid);
  for (const [cid, secs] of byChapter) {
    if (!wanted(cid)) continue;
    const c = chById.get(cid);
    console.log(`## ${cid} | ${c ? (c.shortTitle || c.title) : '?'} | book=${c?.bookId}`);
    for (const s of secs.sort((a: any, b: any) => a.number - b.number)) {
      console.log(`   ${s.number}. ${s.title}`);
    }
  }
};
main();

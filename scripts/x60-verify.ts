import meta from "../src/data/library-parts/knowledge-meta.json";
type M = any;
for (const b of (meta.books as M[]).filter((x) => ["ku-developmental-biology","ku-synthetic-biology","ku-economic-history","ku-urban-studies","ku-anthropology","ku-media-communication"].includes(x.id))) {
  const bkChaps = (meta.chapters as M[]).filter((c) => c.bookId === b.id);
  const n = bkChaps.reduce((a: number, c: M) => a + ((meta.sections as M[]).filter((s: M) => s.chapterId === c.id).length), 0);
  console.log(`${b.id}: ${bkChaps.length}ch/${n}ls — ${bkChaps.map((c) => c.title).join(" | ")}`);
}

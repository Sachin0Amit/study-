import meta from "../src/data/library-parts/knowledge-meta.json";
type M = any;
const byId = (arr: M[]) => Object.fromEntries(arr.map((x) => [x.id, x]));
const chaps = byId(meta.chapters as M[]), secs = byId(meta.sections as M[]);
const keys = ["ku-developmental-biology","ku-synthetic-biology","ku-economic-history","ku-urban-studies","ku-anthropology","ku-media-communication","ku-transportation-engineering","ku-career-communication"];
for (const b of (meta.books as M[]).filter((x) => keys.includes(x.id))) {
  console.log(`\n### ${b.id} [${b.group}] ${b.description}`);
  const bkChaps = (meta.chapters as M[]).filter((c) => c.bookId === b.id);
  for (const ch of bkChaps) {
    console.log(`  CH ${ch.id}: ${ch.title}`);
    for (const s of (ch.sections ?? (meta.sections as M[]).filter((x) => x.chapterId === ch.id))) console.log(`    - ${s.title} (${s.topicId})`);
  }
}

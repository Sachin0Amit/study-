/** LIBRARY-ORG helper: list section ids+titles for given book ids from knowledge-meta.json */
import * as fs from 'fs'
const meta = JSON.parse(fs.readFileSync('src/data/library-parts/knowledge-meta.json', 'utf-8'))
const ids = process.argv.slice(2)
for (const id of ids) {
  const chs = meta.chapters.filter((c: any) => c.bookId === id).sort((a: any, b: any) => a.number - b.number)
  console.log(`\n### ${id} — ${chs.length} chapters`)
  for (const c of chs) {
    const secs = meta.sections.filter((s: any) => s.chapterId === c.id).sort((a: any, b: any) => a.number - b.number)
    console.log(`  Ch${c.number}: ${c.title}`)
    for (const s of secs) console.log(`    ${s.number}: ${s.id} — ${s.title}`)
  }
}

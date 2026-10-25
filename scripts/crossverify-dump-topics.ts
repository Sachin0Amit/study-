/**
 * CROSSVERIFY helper: dump the full text content of given topic ids
 * so the downloaded book's claims can be cross-verified line by line.
 * Usage: bun scripts/crossverify-dump-topics.ts <id1> <id2> ...
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { execSync } from 'child_process'

const ids = process.argv.slice(2)
if (ids.length === 0) {
  console.error('no topic ids given')
  process.exit(1)
}

// Pull the TS text and eval-safe parse: we use regex to slice each topic object.
// Simpler: reuse the built pipeline — the serialized content.json already contains
// every topic with sections. Read public content via the serializer output.
const raw = readFileSync('public/data/content.json', 'utf8')
const data = JSON.parse(raw) as any[]
const topics: any[] = data.filter((x: any) => typeof x?.sectionId === 'string' && x.sectionId.startsWith('ku-'))

let out = ''
for (const id of ids) {
  const t = topics.find((x: any) => x.sectionId === 'ku-' + id)
  if (!t) {
    out += `\n##### ${id}: NOT FOUND\n`
    continue
  }
  out += `\n\n##### TOPIC ku-${id}\n`
  out += `[intro] ${t.intro ?? ''}\n`
  for (const o of t.objectives ?? []) out += `  [obj] ${o}\n`
  for (const c of t.concepts ?? []) out += `  [concept:${c.term}] ${c.statement}\n`
  for (const e of t.examples ?? []) {
    out += `  [example:${e.title}] ${e.problem}\n`
    for (const s of e.steps ?? []) out += `    - ${s.label}: ${s.text}\n`
    if (e.result) out += `    => ${e.result}\n`
  }
  for (const k of t.keyTakeaways ?? []) out += `  [takeaway] ${k}\n`
  const quiz = t.quiz ?? t.knowledgeCheck
  if (quiz) out += `\n[QUIZ] ${JSON.stringify(quiz).slice(0, 2500)}\n`
}

mkdirSync('tmp-books', { recursive: true })
writeFileSync('tmp-books/our-content-dump.txt', out)
console.log('wrote tmp-books/our-content-dump.txt (' + out.length + ' chars)')

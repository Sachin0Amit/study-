/**
 * LIBRARY-ORG structure audit — joins knowledge-meta.json books -> chapters -> sections.
 * Checks:
 *  a. multi-discipline books (chapters spanning 2+ distinct disciplines)
 *  b. minimum violations: <2 chapters or <3 lessons per book
 *  c. thinnest books ranking (deepening queue)
 *  d. duplicate lesson titles across the library (zero-repetition smoke check)
 */
import * as fs from 'fs'

const meta = JSON.parse(fs.readFileSync('src/data/library-parts/knowledge-meta.json', 'utf-8'))
const books: { id: string; title: string; group?: string }[] = meta.books
const chapters: { id: string; bookId: string; title: string; number: number }[] = meta.chapters
const sections: { id: string; chapterId: string; title: string; number: number }[] = meta.sections

// meta.books may not carry group — pull from subjects
const subjGroup = new Map<string, string>()
for (const s of meta.subjects) subjGroup.set(s.id, s.group)
const bookGroup = (id: string) => subjGroup.get(id) ?? '(unknown)'

const chByBook = new Map<string, typeof chapters>()
for (const c of chapters) {
  const list = chByBook.get(c.bookId) ?? []
  list.push(c)
  chByBook.set(c.bookId, list)
}
const secByCh = new Map<string, typeof sections>()
for (const s of sections) {
  const list = secByCh.get(s.chapterId) ?? []
  list.push(s)
  secByCh.set(s.chapterId, list)
}

console.log(`Library: ${books.length} books / ${chapters.length} chapters / ${sections.length} sections`)
console.log('')

// ---- b. MINIMUM VIOLATIONS ----
console.log('== MINIMUM AUDIT (>=2 chapters, >=3 lessons per book) ==')
let viol = 0
const thin: { id: string; title: string; group: string; nCh: number; nSec: number; chTitles: string[] }[] = []
for (const b of books) {
  const chs = (chByBook.get(b.id) ?? []).sort((x, y) => x.number - y.number)
  const nSec = chs.reduce((a, c) => a + (secByCh.get(c.id)?.length ?? 0), 0)
  if (chs.length < 2 || nSec < 3) {
    viol++
    thin.push({ id: b.id, title: b.title, group: bookGroup(b.id), nCh: chs.length, nSec, chTitles: chs.map((c) => c.title) })
  }
}
if (!viol) console.log('CLEAN: every book has >=2 chapters and >=3 lessons')
else for (const t of thin) {
  console.log(`VIOLATION: ${t.id} — ${t.nCh}ch/${t.nSec}ls [${t.group}] "${t.title}"`)
  console.log(`   chapters: ${t.chTitles.join(' | ')}`)
}
console.log('')

// ---- c. THINNEST BOOKS (deepening queue, top 15) ----
console.log('== THINNEST BOOKS (by section count, top 15) ==')
const ranked = books
  .map((b) => {
    const chs = chByBook.get(b.id) ?? []
    const nSec = chs.reduce((a, c) => a + (secByCh.get(c.id)?.length ?? 0), 0)
    return { id: b.id, nCh: chs.length, nSec, group: bookGroup(b.id) }
  })
  .sort((a, b) => a.nSec - b.nSec || a.nCh - b.nCh)
  .slice(0, 15)
for (const r of ranked) console.log(`${r.nCh}ch/${r.nSec}ls  ${r.id}  [${r.group}]`)
console.log('')

// ---- a. MULTI-DISCIPLINE HEURISTIC ----
const DISC: Record<string, string[]> = {
  'physical-science': ['chem', 'physics', 'astronom', 'geolog', 'atom', 'quantum', 'thermo'],
  'life-science': ['biolog', 'cell', 'genet', 'ecolog', 'evolution', 'anatomy', 'physiolog', 'microb', 'zool', 'botan', 'medicine', 'health', 'biochem'],
  'earth-space': ['earth', 'climate', 'ocean', 'weather', 'geograph', 'atmospher', 'space'],
  'computing': ['comput', 'program', 'algorithm', 'software', 'data struct', 'database', 'network', 'machine learn', 'cyber', 'ai '],
  'math': ['math', 'algebra', 'calculus', 'geometry', 'statistic', 'probabilit', 'number theor'],
  'engineering': ['engineer', 'mechanic', 'machine', 'structural', 'circuit', 'electron', 'thermodynamic', 'manufactur', 'propuls'],
  'business': ['business', 'management', 'market', 'finance', 'accounting', 'entrepreneur', 'econom'],
  'social-science': ['psycholog', 'sociolog', 'anthropolog', 'political', 'law', 'crimin', 'govern'],
  'language-art': ['literature', 'language', 'linguist', 'grammar', 'writing', 'composition'],
  'arts': ['art', 'music', 'film', 'theater', 'dance', 'design', 'architecture'],
  'history': ['history', 'historical', 'civilization', 'ancient', 'medieval', 'modern world'],
  'medicine': ['clinic', 'disease', 'patient', 'pharmac', 'surgery', 'diagnos'],
}
const DISC_NAMES = Object.keys(DISC)

console.log('== MULTI-DISCIPLINE HEURISTIC (>=3 distinct discipline buckets in chapter names) ==')
let multi = 0
for (const b of books) {
  const chs = chByBook.get(b.id) ?? []
  if (chs.length < 2) continue
  const buckets = new Set<string>()
  for (const c of chs) {
    const nm = c.title.toLowerCase()
    for (const d of DISC_NAMES) if (DISC[d].some((k) => nm.includes(k))) buckets.add(d)
  }
  if (buckets.size >= 3) {
    multi++
    console.log(`MULTI?: ${b.id} [${bookGroup(b.id)}] — buckets: ${[...buckets].join(', ')}`)
    console.log(`   chapters: ${chs.map((c) => c.title).join(' | ')}`)
  }
}
if (!multi) console.log('CLEAN: no candidate multi-discipline books by heuristic')
console.log('')

// ---- d. duplicate section titles across books ----
console.log('== DUPLICATE SECTION TITLES (cross-book) ==')
const titleMap = new Map<string, string[]>()
for (const s of sections) {
  const k = s.title.toLowerCase().replace(/[^a-z0-9 ]/g, '')
  const list = titleMap.get(k) ?? []
  list.push(s.id)
  titleMap.set(k, list)
}
let dups = 0
for (const [k, ids] of titleMap) {
  if (ids.length > 1) {
    dups++
    console.log(`DUP: "${k}" x${ids.length}: ${ids.join(', ')}`)
  }
}
if (!dups) console.log('CLEAN: no duplicate section titles')

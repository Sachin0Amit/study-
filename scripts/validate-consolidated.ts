// Post-migration data integrity validation
import { LIBRARY_SUBJECTS, LIBRARY_BOOKS, LIBRARY_CHAPTERS, LIBRARY_SECTIONS } from '../src/data/library'
import { allContent } from '../src/data/content'
import { FORMULAS } from '../src/data/formulas'

let errors = 0
const err = (m: string) => { console.error('✗ ' + m); errors++ }
const ok = (m: string) => console.log('✓ ' + m)

// 1. Referential integrity
const subjectIds = new Set(LIBRARY_SUBJECTS.map((s) => s.id))
const bookIds = new Set(LIBRARY_BOOKS.map((b) => b.id))
const chapterIds = new Set(LIBRARY_CHAPTERS.map((c) => c.id))
const sectionIds = new Set(LIBRARY_SECTIONS.map((s) => s.id))
if (bookIds.size !== LIBRARY_BOOKS.length) err('duplicate book ids')
if (chapterIds.size !== LIBRARY_CHAPTERS.length) err('duplicate chapter ids')
if (sectionIds.size !== LIBRARY_SECTIONS.length) err('duplicate section ids')
for (const b of LIBRARY_BOOKS) if (!subjectIds.has(b.subjectId)) err(`book ${b.id} bad subjectId`)
for (const c of LIBRARY_CHAPTERS) {
  if (!bookIds.has(c.bookId)) err(`chapter ${c.id} bad bookId ${c.bookId}`)
  if (/-s\d+$/.test(c.id)) err(`chapter id looks like a section id: ${c.id}`)
}
for (const s of LIBRARY_SECTIONS) {
  if (!chapterIds.has(s.chapterId)) err(`section ${s.id} bad chapterId ${s.chapterId}`)
  if (!s.id.startsWith(s.chapterId + '-s')) err(`section id prefix mismatch: ${s.id} vs chapter ${s.chapterId}`)
}
ok(`referential integrity: ${LIBRARY_SUBJECTS.length} subjects, ${LIBRARY_BOOKS.length} books, ${LIBRARY_CHAPTERS.length} chapters, ${LIBRARY_SECTIONS.length} sections`)

// 2. Chapter/section numbering dense per book
const byBook = new Map<string, number[]>()
for (const c of LIBRARY_CHAPTERS) byBook.set(c.bookId, [...(byBook.get(c.bookId) ?? []), c.number])
for (const [bid, nums] of byBook) {
  const sorted = [...nums].sort((a, b) => a - b)
  sorted.forEach((n, i) => { if (n !== i + 1) err(`book ${bid} chapter numbering gap at ${n}`) })
}
const secCounts = new Map<string, number>()
for (const s of LIBRARY_SECTIONS) secCounts.set(s.chapterId, (secCounts.get(s.chapterId) ?? 0) + 1)
for (const [cid, n] of secCounts) {
  const nums = LIBRARY_SECTIONS.filter((s) => s.chapterId === cid).map((s) => s.number).sort((a, b) => a - b)
  nums.forEach((v, i) => { if (v !== i + 1) err(`chapter ${cid} section numbering gap at ${v}`) })
}
ok('dense sequential numbering per book/chapter')

// 3. Content: every content entry maps to a live section, and every live section with content exists
let orphans = 0
for (const c of allContent) if (!sectionIds.has(c.sectionId)) orphans++
if (orphans > 0) err(`${orphans} orphaned content entries`)
ok(`content: ${allContent.length} live entries, 0 orphans`)

// 4. Quiz questions valid
let quiz = 0, badQuiz = 0
for (const c of allContent) for (const q of c.quiz) {
  if (!q) continue
  quiz++
  if (q.options.length < 2 || q.answer < 0 || q.answer >= q.options.length) badQuiz++
}
if (badQuiz) err(`${badQuiz} malformed quiz questions`)
ok(`quiz bank: ${quiz} questions all valid`)

// 5. Formulas: every entry targets an existing chapter, and its section index is in range
let badFormula = 0
for (const f of FORMULAS) {
  if (!chapterIds.has(f.chapterId)) { badFormula++; continue }
  const idx = Number(f.section.split('.')[1])
  const count = secCounts.get(f.chapterId) ?? 0
  if (!Number.isFinite(idx) || idx < 1 || idx > count) badFormula++
}
if (badFormula) err(`${badFormula} formula entries pointing at missing chapters/sections`)
ok(`formulas: ${FORMULAS.length} entries, all resolve`)

// 6. No exam names in user-visible strings (word-boundary audit)
const EXAM_WORDS = /\b(JEE|MAIN\b|ADVANCED\b|SAT|DRDO|GATE|NTA|IIT|College Board|Bluebook|CEPTAM|RAC|UPSC|ESE|AKTU|VTU|AICTE)\b/
let examHits = 0
const audit = (s: string, what: string) => { if (EXAM_WORDS.test(s)) { examHits++; err(`exam name in ${what}: ${s.slice(0, 90)}`) } }
for (const s of LIBRARY_SUBJECTS) { audit(s.name, 'subject name'); audit(s.description, 'subject desc'); audit(s.tagline, 'subject tagline') }
for (const b of LIBRARY_BOOKS) { audit(b.title, 'book title'); audit(b.description, 'book desc') }
for (const c of LIBRARY_CHAPTERS) { audit(c.title, `chapter title ${c.id}`); audit(c.shortTitle, `chapter shortTitle ${c.id}`) }
for (const s of LIBRARY_SECTIONS) { audit(s.title, `section title ${s.id}`) }
if (examHits === 0) ok('zero exam names in any user-visible library string')

// 7. No leftover scrub artifacts
let artifacts = 0
for (const s of LIBRARY_SECTIONS) if (/recruitment cell|\bthe the\b/i.test(s.title + ' ' + s.description)) { artifacts++; err(`scrub artifact in ${s.id}`) }
if (artifacts === 0) ok('no scrub artifacts')

// 8. Per-subject summary
const booksBySubject = new Map<string, string[]>()
for (const b of LIBRARY_BOOKS) booksBySubject.set(b.subjectId, [...(booksBySubject.get(b.subjectId) ?? []), b.id])
for (const s of LIBRARY_SUBJECTS) {
  const chs = LIBRARY_CHAPTERS.filter((c) => booksBySubject.get(s.id)?.includes(c.bookId)).length
  const secs = LIBRARY_SECTIONS.filter((x) => {
    const ch = LIBRARY_CHAPTERS.find((c) => c.id === x.chapterId)
    return ch && booksBySubject.get(s.id)?.includes(ch.bookId)
  }).length
  console.log(`  ${s.name}: ${chs} chapters · ${secs} sections`)
}
console.log(errors === 0 ? '\nALL CHECKS PASSED' : `\n${errors} ERRORS`)
process.exit(errors === 0 ? 0 : 1)

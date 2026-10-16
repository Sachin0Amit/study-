// Library integrity validator — run: bun run scripts/validate-library.ts
// Checks: unique IDs, chapterId references, sequential chapter/section numbers,
// required fields non-empty, and NO exam-brand strings in user-visible text.
import { LIBRARY_BOOKS, LIBRARY_CHAPTERS, LIBRARY_SECTIONS, LIBRARY_SUBJECTS } from '../src/data/library'

const BRANDS = /\b(JEE|GATE|ISRO|DRDO|IIT|CEPTAM|ICRB|NTA|UPSC|AKTU|VTU|AICTE)\b/
let errors = 0, warnings = 0
const err = (m: string) => { console.error(`✗ ${m}`); errors++ }
const warn = (m: string) => { console.warn(`⚠ ${m}`); warnings++ }

// 1. Unique chapter ids + numbers per book
const chIds = new Set<string>()
const numsPerBook: Record<string, number[]> = {}
for (const c of LIBRARY_CHAPTERS) {
  if (chIds.has(c.id)) err(`duplicate chapter id ${c.id}`)
  chIds.add(c.id)
  if (!c.title?.trim() || !c.description?.trim()) err(`chapter ${c.id} missing title/description`)
  if (!LIBRARY_BOOKS.some(b => b.id === c.bookId)) err(`chapter ${c.id} references unknown book ${c.bookId}`)
  ;(numsPerBook[c.bookId] ??= []).push(c.number)
  if (BRANDS.test(c.title) || BRANDS.test(c.shortTitle) || BRANDS.test(c.description))
    err(`chapter ${c.id} contains exam-brand string`)
}
for (const [bookId, nums] of Object.entries(numsPerBook)) {
  const sorted = [...nums].sort((a, b) => a - b)
  sorted.forEach((n, i) => { if (n !== i + 1) { warn(`book ${bookId}: chapter numbers not sequential (got ${n} at position ${i + 1})`); return } })
}

// 2. Sections: unique ids, valid chapter refs, sequential numbers per chapter
const secIds = new Set<string>()
const numsPerChapter: Record<string, number[]> = {}
for (const s of LIBRARY_SECTIONS) {
  if (secIds.has(s.id)) err(`duplicate section id ${s.id}`)
  secIds.add(s.id)
  if (!LIBRARY_CHAPTERS.some(c => c.id === s.chapterId)) err(`section ${s.id} references unknown chapter ${s.chapterId}`)
  if (!s.title?.trim() || !s.description?.trim()) err(`section ${s.id} missing title/description`)
  ;(numsPerChapter[s.chapterId] ??= []).push(s.number)
  if (BRANDS.test(s.title) || BRANDS.test(s.description)) err(`section ${s.id} contains exam-brand string`)
}
for (const [chapterId, nums] of Object.entries(numsPerChapter)) {
  const sorted = [...nums].sort((a, b) => a - b)
  sorted.forEach((n, i) => { if (n !== i + 1) warn(`chapter ${chapterId}: section numbers not sequential (got ${n} at position ${i + 1})`); return })
}

// 3. Icon sanity (must exist in chapter-icon map — warn only, flask fallback exists)
const VALID_ICONS = new Set(['brain','circles','cpu','lock','infinity','hash','dices','trending','network','share','git-branch','toggle-right','bot','sigma','terminal','layers','activity','shuffle','timer','handshake','utensils','siren','memory-stick','database','hard-drive','plug','folder-open','folder-cog','server','boxes','anchor','pen-tool','gauge','shapes','wrench','orbit','waves','radar','box','route','mountain','layout-grid','wind','repeat','code','type','tag','calculator','list','package','list-ordered','users','folder-tree','library','clock','sliders-horizontal','globe','hexagon','hammer','binary','circuit-board','filter','arrow-left-right','component','archive','gamepad-2','computer','smartphone','zap','git-fork','magnet','spline','audio-waveform','rotate-cw','signal','triangle','fan','battery-charging','atom','move','aperture','rocket','thermometer','vector-square','radio','sparkles','chart-line','cog'])
for (const c of LIBRARY_CHAPTERS) if (!VALID_ICONS.has(c.icon)) warn(`chapter ${c.id} icon "${c.icon}" not in map`)

// 4. Stats
const chapters = LIBRARY_CHAPTERS.length
const sections = LIBRARY_SECTIONS.length
const subjects = LIBRARY_SUBJECTS.length
const books = LIBRARY_BOOKS.length
console.log(`\n📊 Library: ${subjects} subjects · ${books} books · ${chapters} chapters · ${sections} sections`)

if (errors > 0) { console.error(`\nFAILED: ${errors} errors, ${warnings} warnings`); process.exit(1) }
console.log(`\n✓ ALL CHECKS PASSED (${warnings} warnings)`)

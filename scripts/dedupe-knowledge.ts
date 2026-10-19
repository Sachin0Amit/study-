// ============ KU Dedup Cross-Verification ==================================
//
// The user's rule: "no repetition of topics — before including a topic, deep
// dive into whether it is already explained elsewhere. If it is explained,
// do not include it."
//
// This script compares EVERY Knowledge-Universe topic against the EXISTING
// library coverage (every non-KU subject's chapters + sections, titles and
// descriptions) and emits coverage/dedupe-report.json with a match score and
// suggested verdict for each topic. The verdict powers the exclusion
// registry consumed by the library bridge.
//
// Run: bun run scripts/dedupe-knowledge.ts

import {
  LIBRARY_SUBJECTS,
  LIBRARY_BOOKS,
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
} from '../src/data/library'
import { KNOWLEDGE_DOMAIN_FILES, KNOWLEDGE_TOPICS, type KnowledgeTopic } from '../src/data/knowledge'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

/* ---------------- text normalization ---------------- */

const STOP = new Set(
  `the a an and or of for to in on at by with from into over under how why what when where which who whom is are was were be been being it its this that these those actually really very more most less least other another some any each every all both few many much such no not only own same so than too can will just should now does do did doing done their there here they them then also about between among through during before after above below up down out off again further once your you we our i me my he she his her him us intro introduction basics basic overview fundamentals fundamental complete guide part chapter lesson topic topics study learn learning science sciences theory application applications work works working actually deep dive essentials essential`.split(
    /\s+/,
  ),
)

const SYNONYMS: Record<string, string> = {
  calculus: 'calculus',
  derivative: 'derivative',
  derivatives: 'derivative',
  differentiation: 'derivative',
  integral: 'integral',
  integrals: 'integral',
  integration: 'integral',
  limit: 'limits',
  limits: 'limits',
  probability: 'probability',
  statistics: 'statistics',
  statistical: 'statistics',
  bayes: 'bayes',
  bayesian: 'bayes',
  eigenvalue: 'eigenvalue',
  eigenvalues: 'eigenvalue',
  eigenvector: 'eigenvalue',
  matrix: 'matrix',
  matrices: 'matrix',
  algebra: 'algebra',
  graph: 'graphs',
  graphs: 'graphs',
  network: 'networks',
  networks: 'networks',
  networking: 'networks',
  prime: 'prime',
  primes: 'prime',
  primality: 'prime',
  number: 'numbers',
  numbers: 'numbers',
  set: 'sets',
  sets: 'sets',
  logic: 'logic',
  logical: 'logic',
  infinity: 'infinity',
  infinite: 'infinity',
  countable: 'countability',
  countability: 'countability',
  angular: 'angular',
  momentum: 'momentum',
  rotation: 'rotational',
  rotational: 'rotational',
  rotating: 'rotational',
  torque: 'torque',
  entropy: 'entropy',
  thermodynamics: 'thermodynamics',
  thermodynamic: 'thermodynamics',
  equilibrium: 'equilibrium',
  relativity: 'relativity',
  periodic: 'periodicity',
  periodicity: 'periodicity',
  periodic: 'periodic',
  table: 'table',
  stellar: 'stellar',
  star: 'stars',
  stars: 'stars',
  astronomy: 'astronomy',
  astrophysics: 'astrophysics',
  hash: 'hashing',
  hashing: 'hashing',
  hashtable: 'hashing',
  neural: 'neural',
  network: 'networks',
  backpropagation: 'backpropagation',
  encryption: 'cryptography',
  cryptography: 'cryptography',
  crypto: 'cryptography',
  cipher: 'cryptography',
  security: 'security',
  secure: 'security',
  pid: 'pid',
  control: 'control',
  controller: 'control',
  feedback: 'feedback',
  fatigue: 'fatigue',
  fracture: 'fracture',
  stress: 'stress',
  strain: 'strain',
  materials: 'materials',
  material: 'materials',
  battery: 'batteries',
  batteries: 'batteries',
  lithium: 'lithium',
  gps: 'gps',
  semiconductor: 'semiconductor',
  semiconductors: 'semiconductor',
  lithography: 'lithography',
  vlsi: 'vlsi',
  fabrication: 'fabrication',
  nuclear: 'nuclear',
  reactor: 'reactor',
  fission: 'fission',
  mri: 'mri',
  fiber: 'fibre',
  fibre: 'fibre',
  optical: 'optics',
  optics: 'optics',
  photonics: 'photonics',
  telecommunication: 'telecommunications',
  telecommunications: 'telecommunications',
  communication: 'communications',
  communications: 'communications',
}

function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[\u2019\u2018'’`]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function tokens(s: string): string[] {
  return norm(s)
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOP.has(t))
    .map((t) => SYNONYMS[t] ?? t)
}

/** overlap score in [0,1]: |A∩B| / min(|A|,|B|), weighted towards rare hits */
function overlap(a: string[], b: string[]): number {
  if (a.length === 0 || b.length === 0) return 0
  const setB = new Set(b)
  const hits = new Set(a.filter((t) => setB.has(t)))
  if (hits.size === 0) return 0
  return hits.size / Math.min(a.length, b.length)
}

/* ---------------- existing-coverage corpus ---------------- */

interface CorpusEntry {
  subject: string
  subjectId: string
  chapter: string
  section: string
  sectionId: string
  toks: string[]
}

const chaptersById = new Map(LIBRARY_CHAPTERS.map((c) => [c.id, c]))
const booksById = new Map(LIBRARY_BOOKS.map((b) => [b.id, b]))
const subjectsById = new Map(LIBRARY_SUBJECTS.map((s) => [s.id, s]))

const corpus: CorpusEntry[] = []
for (const sec of LIBRARY_SECTIONS) {
  if (sec.id.startsWith('ku-')) continue // KU itself is not "existing coverage"
  const ch = chaptersById.get(sec.chapterId)
  if (!ch) continue
  const book = booksById.get(ch.bookId)
  const subj = book ? subjectsById.get(book.subjectId) : undefined
  corpus.push({
    subject: subj?.name ?? '',
    subjectId: subj?.id ?? '',
    chapter: ch.title,
    section: sec.title,
    sectionId: sec.id,
    toks: tokens(`${subj?.name ?? ''} ${ch.title} ${ch.shortTitle} ${sec.title} ${sec.description}`),
  })
}
// chapters as standalone entries too (topic ≈ whole chapter)
for (const ch of LIBRARY_CHAPTERS) {
  if (ch.id.startsWith('ku-')) continue
  const book = booksById.get(ch.bookId)
  const subj = book ? subjectsById.get(book.subjectId) : undefined
  corpus.push({
    subject: subj?.name ?? '',
    subjectId: subj?.id ?? '',
    chapter: ch.title,
    section: '',
    sectionId: ch.id,
    toks: tokens(`${subj?.name ?? ''} ${ch.title} ${ch.shortTitle} ${ch.description}`),
  })
}

/* ---------------- score every KU topic ---------------- */

interface ReportItem {
  id: string
  title: string
  domain: string
  field: string
  score: number
  verdict: 'duplicate' | 'review' | 'unique'
  bestMatch: { subject: string; chapter: string; section: string; sectionId: string; score: number }
  topMatches: { subject: string; chapter: string; section: string; sectionId: string; score: number }[]
}

const report: ReportItem[] = []

for (const t of KNOWLEDGE_TOPICS) {
  const tToks = tokens(`${t.title} ${t.field} ${t.concepts.join(' ')}`)
  const scored = corpus
    .map((c) => ({ c, score: overlap(tToks, c.toks) }))
    .sort((a, b) => b.score - a.score)
  const best = scored[0]
  const topMatches = scored.slice(0, 3).map(({ c, score }) => ({
    subject: c.subject,
    chapter: c.chapter,
    section: c.section,
    sectionId: c.sectionId,
    score: Math.round(score * 100) / 100,
  }))
  const score = best ? Math.round(best.score * 100) / 100 : 0
  report.push({
    id: t.id,
    title: t.title,
    domain: t.domain,
    field: t.field,
    score,
    verdict: score >= 0.45 ? 'duplicate' : score >= 0.3 ? 'review' : 'unique',
    bestMatch: topMatches[0] ?? { subject: '', chapter: '', section: '', sectionId: '', score: 0 },
    topMatches,
  })
}

report.sort((a, b) => b.score - a.score)

/* ---------------- write the report ---------------- */

const ROOT = join(__dirname, '..')
mkdirSync(join(ROOT, 'coverage'), { recursive: true })
writeFileSync(join(ROOT, 'coverage/dedupe-report.json'), JSON.stringify(report, null, 2))

const dup = report.filter((r) => r.verdict === 'duplicate')
const rev = report.filter((r) => r.verdict === 'review')
const uni = report.filter((r) => r.verdict === 'unique')
console.log(`[dedupe] ${report.length} topics scored`)
console.log(`  duplicates (score ≥ 0.45): ${dup.length}`)
for (const d of dup) console.log(`    ✗ ${d.id} — "${d.title}" → ${d.bestMatch.subject} / ${d.bestMatch.chapter} / ${d.bestMatch.section} (${d.score})`)
console.log(`  needs review (0.30–0.44): ${rev.length}`)
for (const d of rev) console.log(`    ? ${d.id} — "${d.title}" → ${d.bestMatch.subject} / ${d.bestMatch.chapter} / ${d.bestMatch.section} (${d.score})`)
console.log(`  unique (< 0.30): ${uni.length}`)

/* domain rollup */
const byDomain = new Map<string, { total: number; dup: number; rev: number; uni: number }>()
for (const r of report) {
  const d = byDomain.get(r.domain) ?? { total: 0, dup: 0, rev: 0, uni: 0 }
  d.total += 1
  if (r.verdict === 'duplicate') d.dup += 1
  else if (r.verdict === 'review') d.rev += 1
  else d.uni += 1
  byDomain.set(r.domain, d)
}
console.log('\n[domain rollup]')
for (const [dom, d] of byDomain) console.log(`  ${dom}: ${d.dup} dup / ${d.rev} review / ${d.uni} unique of ${d.total}`)

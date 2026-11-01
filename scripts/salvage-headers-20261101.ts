/**
 * SALVAGE-20261101 follow-up — refresh chapter-file headers for the files
 * that gained salvaged lessons: rewrite the "N lessons · ~X words" line,
 * append the new lessons to the snapshot list, and fix the import-name /
 * export-name nothing (headers only, no code).
 * Run: bun scripts/salvage-headers-20261101.ts
 */
import { readFileSync, writeFileSync } from 'fs'

const BASE = 'src/data/knowledge/subjects'

type Add = { id: string; title: string; words: number }
type Job = { file: string; adds: Add[] }

const JOBS: Job[] = [
  { file: 'marine-biology/01-the-blue-realm.ts', adds: [
    { id: 'marine-fish-design-locomotion', title: 'Fish in Motion: Body Plans, Fins and the Physics of Swimming', words: 1729 },
    { id: 'marine-mammals-diving', title: 'Warm Bodies in Cold Water: Marine Mammals and the Diving Breath', words: 1558 },
  ] },
  { file: 'bioinformatics-genomics/01-reading-genomes-with-code.ts', adds: [
    { id: 'bioinfo-single-cell-spatial', title: 'Single-Cell and Spatial Genomics: Profiling One Cell at a Time', words: 1465 },
  ] },
  { file: 'bioinformatics-genomics/02-sequencing-and-assembly.ts', adds: [
    { id: 'bioinfo-genome-assembly', title: 'Genome Assembly: Turning Billions of Reads into Chromosomes', words: 1589 },
  ] },
  { file: 'synthetic-biology/02-genetic-circuits-and-toolkits.ts', adds: [
    { id: 'synbio-crispr-regulation-toolkit', title: 'Beyond Cutting: CRISPRi, CRISPRa and the Regulation Toolbox', words: 1419 },
  ] },
  { file: 'synthetic-biology/03-applications-and-responsible-innovation.ts', adds: [
    { id: 'synbio-metabolic-engineering', title: 'Metabolic Engineering: Rewiring Cells into Factories', words: 1309 },
  ] },
  { file: 'developmental-biology/03-mechanisms-and-model-organisms.ts', adds: [
    { id: 'devbio-turing-reaction-diffusion', title: 'Turing Patterns: How Chemistry Paints Stripes and Spots', words: 1434 },
  ] },
  { file: 'developmental-biology/05-evo-devo-how-development-evolves.ts', adds: [
    { id: 'devbio-evo-devo-toolkit', title: 'Evo-Devo: Same Toolkit, Different Animals', words: 1430 },
  ] },
  { file: 'botany/01-the-plant-body.ts', adds: [
    { id: 'bio-plant-vascular-ultrastructure', title: 'Xylem and Phloem Under the Microscope: The Cells That Carry', words: 1758 },
  ] },
  { file: 'botany/02-plant-physiology.ts', adds: [
    { id: 'bio-plant-water-ledger', title: 'The Water Ledger: Water-Potential Arithmetic from Soil to Air', words: 1774 },
  ] },
  { file: 'philosophy/01-epistemology-and-philosophy-of-science.ts', adds: [
    { id: 'phil-pramana-means-of-knowledge', title: 'Pramanas: The Means of Knowledge in Indian Logic', words: 1634 },
  ] },
]

for (const job of JOBS) {
  const path = `${BASE}/${job.file}`
  let src = readFileSync(path, 'utf8')
  // 1. count line: "N lessons · ~X words"
  const countLine = src.match(/\* (\d+) lessons? · ~([\d,]+) words/)
  if (!countLine) throw new Error(`no count line in ${path}`)
  const oldN = parseInt(countLine[1])
  const oldW = parseInt(countLine[2].replace(/,/g, ''))
  const newN = oldN + job.adds.length
  const newW = oldW + job.adds.reduce((s, a) => s + a.words, 0)
  src = src.replace(
    countLine[0],
    `* ${newN} lessons · ~${newW.toLocaleString('en-US')} words (includes the 2026-11-01 salvage increment)`,
  )
  // 2. snapshot list: find last "NN.N " lesson line in the header, append after
  const lessonLines = [...src.matchAll(/^ \*   (\d+)\.(\d+) .+$/gm)]
  if (lessonLines.length === 0) throw new Error(`no lesson list in ${path}`)
  const last = lessonLines[lessonLines.length - 1]
  const chap = last[1]
  let idx = (last.index ?? 0) + last[0].length
  let extra = ''
  job.adds.forEach((a, i) => {
    extra += `\n *   ${chap}.${parseInt(last[2]) + 1 + i} ${a.id} — ${a.title} (~${a.words.toLocaleString('en-US')}w, salvaged)`
  })
  src = src.slice(0, idx) + extra + src.slice(idx)
  writeFileSync(path, src)
  console.log(`${path}: ${oldN}→${newN} lessons, ~${oldW}→~${newW} words`)
}

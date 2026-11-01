/**
 * SALVAGE-20261101 — port the 17 orphaned lessons from the diverged local
 * line (X60/X61/X62 passes, preserved on branch backup-loop-20261101) into
 * the canonical subjects/ tree. Text moves VERBATIM; only `branch` values
 * are re-pointed where the new chapter layout differs from the old one.
 *
 * Sources live in /tmp/salvage/*.ts (extracted from the backup branch).
 * Run: bun scripts/salvage-port-20261101.ts
 */
import { readFileSync, writeFileSync } from 'fs'

type Move = {
  id: string
  from: string
  to: string // target chapter file path (relative to src/data/knowledge/subjects)
  branchFix?: [string, string]
  note: string
}

const MOVES: Move[] = [
  // --- Marine Biology (Ch1 The Blue Realm gains 2 lessons) ---
  { id: 'marine-fish-design-locomotion', from: 'x60-lifescience-deepening-pass', to: 'marine-biology/01-the-blue-realm.ts', note: 'fish body designs & locomotion' },
  { id: 'marine-mammals-diving', from: 'x60-lifescience-deepening-pass', to: 'marine-biology/01-the-blue-realm.ts', note: 'marine mammal diving physiology' },
  // --- Bioinformatics & Genomics ---
  { id: 'bioinfo-genome-assembly', from: 'x60-lifescience-deepening-pass', to: 'bioinformatics-genomics/02-sequencing-and-assembly.ts', branchFix: ['Computational Biology', 'Sequencing & Assembly'], note: 'assembly → Ch2 where sequencing lives' },
  { id: 'bioinfo-single-cell-spatial', from: 'x60-lifescience-deepening-pass', to: 'bioinformatics-genomics/01-reading-genomes-with-code.ts', note: 'single-cell & spatial omics → Ch1 code chapter' },
  // --- Synthetic Biology ---
  { id: 'synbio-crispr-regulation-toolkit', from: 'x60-lifescience-deepening-pass', to: 'synthetic-biology/02-genetic-circuits-and-toolkits.ts', branchFix: ['Bioengineering', 'Genetic Circuits & Toolkits'], note: 'CRISPRi/a toolkit → Ch2 toolkits chapter' },
  { id: 'synbio-metabolic-engineering', from: 'x60-lifescience-deepening-pass', to: 'synthetic-biology/03-applications-and-responsible-innovation.ts', note: 'metabolic engineering → Ch3 applications' },
  // --- Developmental Biology ---
  { id: 'devbio-turing-reaction-diffusion', from: 'x60-lifescience-deepening-pass', to: 'developmental-biology/03-mechanisms-and-model-organisms.ts', note: 'Turing mechanisms → Ch3 mechanisms' },
  { id: 'devbio-evo-devo-toolkit', from: 'x60-lifescience-deepening-pass', to: 'developmental-biology/05-evo-devo-how-development-evolves.ts', branchFix: ['Developmental Mechanisms', 'Evo-Devo'], note: 'evo-devo toolkit → Ch5' },
  // --- Botany ---
  { id: 'bio-plant-vascular-ultrastructure', from: 'x61-botany-pass', to: 'botany/01-the-plant-body.ts', note: 'vascular ultrastructure → Ch1 plant body (syllabus slot 1.2)' },
  { id: 'bio-plant-water-ledger', from: 'x61-botany-pass', to: 'botany/02-plant-physiology.ts', note: 'water ledger → Ch2 physiology' },
  // --- Philosophy ---
  { id: 'phil-pramana-means-of-knowledge', from: 'x62-pramana-pass', to: 'philosophy/01-epistemology-and-philosophy-of-science.ts', note: 'pramana/Indian logic → Ch1 epistemology' },
  // --- Zoology (3 NEW chapters per MASTER-SYLLABUS §6.6 + program tree) ---
  { id: 'bio-zoology-gas-exchange-designs', from: 'x62-zoology-pass', to: 'zoology/03-comparative-physiology.ts', branchFix: ['Respiratory Design', 'Comparative Physiology'], note: 'NEW Ch3 per §6.6 tree slot 3.1' },
  { id: 'bio-zoology-circulatory-designs', from: 'x62-zoology-pass', to: 'zoology/03-comparative-physiology.ts', branchFix: ['Circulatory Design', 'Comparative Physiology'], note: 'NEW Ch3 per §6.6 tree slot 3.2' },
  { id: 'bio-zoology-digestive-strategies', from: 'x62-zoology-pass', to: 'zoology/04-comparative-digestion-and-metabolism.ts', note: 'NEW Ch4' },
  { id: 'bio-zoology-metabolic-scaling', from: 'x62-zoology-pass', to: 'zoology/04-comparative-digestion-and-metabolism.ts', note: 'NEW Ch4' },
  { id: 'bio-zoology-reproduction-modes', from: 'x62-zoology-pass', to: 'zoology/05-animal-reproduction-and-life-cycles.ts', note: 'NEW Ch5' },
  { id: 'bio-zoology-life-cycles', from: 'x62-zoology-pass', to: 'zoology/05-animal-reproduction-and-life-cycles.ts', note: 'NEW Ch5' },
]

const SRC = '/tmp/salvage'
const BASE = 'src/data/knowledge/subjects'
const PROVENANCE = (from: string) =>
  `  // Salvaged 2026-11-01 from the diverged local line (pass ${from}, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.`

function parseTopics(file: string): Map<string, string> {
  const src = readFileSync(`${SRC}/${file}.ts`, 'utf8')
  const lines = src.split('\n')
  const out = new Map<string, string>()
  let buf: string[] | null = null
  for (const line of lines) {
    if (line.trimEnd() === '  {') buf = [line]
    else if (buf && line.trimEnd() === '  },') {
      buf.push(line)
      const text = buf.join('\n')
      const m = text.match(/id: '([a-z0-9-]+)'/)
      if (!m) throw new Error(`no id in block of ${file}`)
      out.set(m[1], text)
      buf = null
    } else if (buf) buf.push(line)
  }
  return out
}

const pool = new Map<string, string>()
const files = [...new Set(MOVES.map((m) => m.from))]
for (const f of files) for (const [id, text] of parseTopics(f)) pool.set(id, text)

const byTarget = new Map<string, Move[]>()
for (const m of MOVES) {
  if (!pool.has(m.id)) throw new Error(`missing source topic ${m.id}`)
  if (!byTarget.has(m.to)) byTarget.set(m.to, [])
  byTarget.get(m.to)!.push(m)
}

const report: string[] = []
for (const [target, moves] of byTarget) {
  const path = `${BASE}/${target}`
  let src = readFileSync(path, 'utf8')
  const closeIdx = src.lastIndexOf('\n]')
  if (closeIdx < 0) throw new Error(`no array close in ${path}`)
  let insertion = ''
  for (const m of moves) {
    if (src.includes(`id: '${m.id}'`)) {
      report.push(`${target} ← ${m.id} SKIP (already present)`)
      continue
    }
    let text = pool.get(m.id)!
    if (m.branchFix) {
      const [from, to] = m.branchFix
      const needle = `branch: '${from}'`
      if (!text.includes(needle)) throw new Error(`branch '${from}' not found in ${m.id}`)
      text = text.replace(needle, `branch: '${to}'`)
    }
    const title = text.match(/title: '([^']+)'/)?.[1] ?? '?'
    const words = text.match(/words: (\d+)/)?.[1] ?? '?'
    report.push(`${target} ← ${m.id} (${words}w) "${title}" — ${m.note}`)
    const clean = text.trimEnd().replace(/,$/, '') // block already ends with `},` — never double the comma (sparse-array hole)
    insertion += `\n${PROVENANCE(m.from)}\n${clean},\n`
  }
  if (insertion) {
    src = src.slice(0, closeIdx) + insertion + src.slice(closeIdx)
    writeFileSync(path, src)
  }
}
console.log(report.join('\n'))
console.log(`\nMoved ${MOVES.length} lessons into ${byTarget.size} target files.`)

/**
 * Authoring-time word-count verifier — declared `words` must match the
 * actual block word count (tolerance ±25) for the ids in IDS.
 *
 * REORGANIZED (2026-11-02): the source tree is now field-wise →
 * subject-wise → chapter-wise (src/data/knowledge/subjects/<subject>/
 * <nn>-<chapter>.ts). This checker walks that tree dynamically, so new
 * chapters are picked up automatically — no import list to maintain.
 *
 * Usage:
 *   bun scripts/count-topic-words-exact.ts           (check IDS below)
 *   bun scripts/count-topic-words-exact.ts <id>...    (check given ids)
 */
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

const IDS = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      'fnd-spaced-repetition',
      'rel-scripture-canon-interpretation',
      'edu-curriculum-backward-design',
      'res-survey-instrument-design',
      'bio-pedigree-mode-inference',
      'bio-sex-determination-systems',
      'bio-gene-mapping-three-point',
      'bio-inbreeding-mutation-balance',
      'bio-cancer-genetics-oncogenes',
      'bio-beyond-mendel-extensions',
      'bio-crispr-gene-editing',
      'bio-biotechnology-rdna-processes',
      'bio-markers-qtl-mapping',
      'bio-sexual-selection-darwin',
      'bio-darwin-difficulties',
      'bio-biogeography-darwin',
      'bio-classification-common-descent',
      'bio-dev-stem-cells-regeneration',
      'emer-synbio-genetic-circuits',
      'hum-eco-money-bretton-woods',
      'urb-urban-mobility-transit',
      'anth-fieldwork-ethnography',
      'media-algorithmic-feed',
      'bio-chromosome-number-structure',
      'bio-alleles-mullers-morphs',
      'bio-penetrance-expressivity',
      'bio-chromatin-nucleosome-packaging',
      'hist-french-revolution-napoleonic-era',
      'hist-brazil-colonial-slavery-empire',
      'hist-brazil-republic-vargas-dictatorship',
      'lit-brazilian-literature-modernism',
      'env-brazil-biomes-geography',
      'bio-cytoskeleton-cell-motility',
      'bio-cell-cycle-mitosis-checkpoints',
      'dl-bits-koans-digital-world',
      'dl-privacy-footprints-fingerprints',
      'dl-document-metadata-ghosts',
      'dl-web-search-bits-bazaar',
      'dl-copyright-balance-toppled',
      'dl-internet-packets-hourglass',
      'civ-concrete-structures',
      'civ-hydrology-irrigation',
      'civ-water-wastewater-municipal',
      'civ-highway-geometric-design',
      'civ-surveying-geomatics',
      'hist-nomads-indigenous-modernisation',
      'econ-india-development-challenges',
      'emer-phylogenetics-tree-of-life',
      'env-climate-feedbacks-sensitivity',
      'aid-cardiac-cpr-chain-of-survival',
      'health-sleep-stages-memory',
      'bio-plant-reproduction-flowers-seeds',
      'bio-classification-five-kingdoms',
      'bio-plant-kingdom-groups',
      'bio-flowering-plant-body',
      'bio-cell-biomolecules',
      'bio-cellular-respiration-pathways',
      'bio-human-reproduction-system',
      'hist-ancient-india',
      'hist-medieval-india',
      'hist-modern-india-freedom-struggle',
      'soc-indian-constitution-polity',
      'econ-macro-ad-as-indian-economy',
      'law-indian-contract-act',
      'eng-critical-reasoning-arguments',
      'bio-plant-seed-structure-germination',
      'bio-photosynthesis',
      'hum-money-credit-financial-revolutions',
      'urb-informal-settlements-self-built-cities',
      'bio-dev-evo-devo',
      'bio-marine-coastal-habitats',
      'emer-bioinformatics-sequencing-assembly',
      'env-nuclear-fission-fusion',
      'law-states-statehood-territory',
      'law-jurisdiction-immunity',
      'bio-animal-behavior-rhythms',
      'ecol-metapopulations-dispersal',
      'ecol-species-richness-gradients',
      'bio-animal-senses-superpowers',
      'bio-animal-behavior-ethology',
      'bio-virus-replication-cycle',
      'bio-pathogen-virulence-toxins',
      'bio-innate-defenses-complement',
      'bio-immune-system',
      // MASTER-SYLLABUS (2026-11-01) — Quantitative Aptitude Ch1
      'qa-number-families-place-value',
      'qa-divisibility-digit-sums',
      'qa-factors-hcf-lcm',
      'qa-remainders-cyclicity',
      'qa-fractions-decimals-comparison',
      // MASTER-SYLLABUS RETIREMENT GAP-FILL (2026-11-01)
      'qa-tables-caselets',
      'qa-quantity-comparison',
      'lr-analogies-classification',
      'lr-ordering-ranking',
      'lr-seating-arrangements',
      'lr-clock-calendar',
      'lr-paper-folding-figure-matrix',
      'ga-history-landmark-events',
      'ga-art-culture-heritage',
      'ga-awards-sports-persons',
      'ga-current-affairs-engine',
    ]

const wc = (s: string) => s.split(/\s+/).filter(Boolean).length

function blockWords(b: any): number {
  let n = 0
  if (typeof b.text === 'string') n += wc(b.text)
  if (typeof b.title === 'string' && b.kind === 'callout') n += wc(b.title)
  if (typeof b.name === 'string') n += wc(b.name)
  if (typeof b.meaning === 'string') n += wc(b.meaning)
  if (b.kind === 'equation' && typeof b.note === 'string') n += wc(b.note)
  if (typeof b.title === 'string' && b.kind === 'example') n += wc(b.title)
  if (b.kind === 'figure') {
    if (typeof b.caption === 'string') n += wc(b.caption)
    if (typeof b.sketchCaption === 'string') n += wc(b.sketchCaption)
  }
  if (b.kind === 'derivation') {
    if (typeof b.title === 'string') n += wc(b.title)
    if (typeof b.statement === 'string') n += wc(b.statement)
    for (const p of b.prerequisites || []) n += wc(p)
    for (const s of b.steps || []) n += wc(s.label || '') + wc(s.formula || '') + wc(s.explanation || '')
    if (typeof b.result === 'string') n += wc(b.result)
  } else {
    for (const s of b.steps || []) n += wc(s)
  }
  for (const it of b.items || []) {
    if (typeof it === 'string') n += wc(it)
    else n += wc(it.term || '') + wc(it.def || '') + wc(it.q || '') + wc(it.explain || '') + (it.options || []).reduce((a: number, o: string) => a + wc(o), 0)
  }
  return n
}

/* ---- walk the subject-wise tree: subjects/<key>/<nn>-<chapter>.ts ---- */

const SUBJ_DIR = 'src/data/knowledge/subjects'
const chapterFiles: string[] = []
for (const subject of readdirSync(SUBJ_DIR).sort()) {
  const dir = join(SUBJ_DIR, subject)
  for (const f of readdirSync(dir).sort()) {
    if (/^\d{2}-.*\.ts$/.test(f)) chapterFiles.push(join(dir, f))
  }
}

/** topic id → { file, lines } for locating a lesson's source */
const found = new Map<string, { file: string; topic: any }>()

for (const file of chapterFiles) {
  const mod: Record<string, unknown> = await import(`../${file.replace(/\.ts$/, '')}`)
  for (const exported of Object.values(mod)) {
    if (!Array.isArray(exported)) continue
    for (const t of exported as any[]) {
      if (t && typeof t.id === 'string' && IDS.includes(t.id)) found.set(t.id, { file, topic: t })
    }
  }
}

let bad = 0
for (const id of IDS) {
  const hit = found.get(id)
  if (!hit) {
    console.log(`${id}: NOT FOUND in the subjects tree`)
    bad++
    continue
  }
  const t = hit.topic
  const actual = (t.blocks || []).reduce((a: number, b: any) => a + blockWords(b), 0)
  const ok = Math.abs(actual - t.words) <= 25
  if (!ok) bad++
  console.log(`${t.id}: actual=${actual} declared=${t.words} readMins=${t.readMins} [${hit.file}] ${ok ? 'OK' : '*** FIX ***'}`)
}
console.log(`\n${IDS.length} ids checked · ${bad} flagged`)
if (bad > 0) process.exit(1)

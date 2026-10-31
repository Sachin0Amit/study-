/**
 * Post-migration verification for the 2026-11-02 knowledge reorganization.
 * Run in a FRESH bun process after scripts/reorganize-knowledge-fields.ts:
 *
 *   bun scripts/verify-knowledge-reorg.ts
 *
 * Compares the NEW src/data/knowledge tree (imported live) against the
 * pre-migration snapshot (/tmp/knowledge-snapshot-before-reorg.json):
 *   1. same domains, same order, same blurbs, same per-field topic id sets;
 *   2. every topic object deep-equal (source text moved verbatim);
 *   3. bridge-exact subject/chapter buckets identical (⇒ knowledge-meta.json
 *      regenerates byte-identically);
 *   4. global stats identical.
 */
import { KNOWLEDGE_DOMAIN_FILES, KNOWLEDGE_STATS } from '../src/data/knowledge'
import { SUBJECT_TAXONOMY, type TaxonomySubject } from '../src/data/knowledge/subject-taxonomy'
import { EXCLUDED_TOPICS } from '../src/data/knowledge/dedup'
import { readFileSync } from 'fs'

const snap = JSON.parse(readFileSync('/tmp/knowledge-snapshot-before-reorg.json', 'utf8')) as {
  stats: typeof KNOWLEDGE_STATS
  domains: { domain: string; blurb: string; topicIds: string[] }[]
  topics: Record<string, unknown>
  buckets: { key: string; chapters: { name: string; topicIds: string[] }[] }[]
}

let failures = 0
const fail = (msg: string) => {
  failures++
  console.error('FAIL — ' + msg)
}

/* ---- 1. domains ---- */
if (KNOWLEDGE_DOMAIN_FILES.length !== snap.domains.length) {
  fail(`domain count: ${KNOWLEDGE_DOMAIN_FILES.length} vs ${snap.domains.length}`)
}
KNOWLEDGE_DOMAIN_FILES.forEach((d, i) => {
  const s = snap.domains[i]
  if (!s) return
  if (d.domain !== s.domain) fail(`domain[${i}] name: "${d.domain}" vs "${s.domain}"`)
  if (d.blurb !== s.blurb) fail(`domain[${i}] blurb mismatch: "${d.domain}"`)
  const a = [...d.topics.map((t) => t.id)].sort()
  const b = [...s.topicIds].sort()
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    const lost = b.filter((x) => !a.includes(x))
    const gained = a.filter((x) => !b.includes(x))
    fail(`domain "${d.domain}" topic set differs (lost: ${lost.join(',') || '—'}; gained: ${gained.join(',') || '—'})`)
  }
})

/* ---- 2. topics deep-equal ---- */
const newById = new Map(KNOWLEDGE_DOMAIN_FILES.flatMap((d) => d.topics).map((t) => [t.id, t]))
let checked = 0
for (const [id, old] of Object.entries(snap.topics)) {
  const now = newById.get(id)
  if (!now) {
    fail(`topic ${id} missing after migration`)
    continue
  }
  if (JSON.stringify(now) !== JSON.stringify(old)) {
    fail(`topic ${id} differs (source text corrupted during migration)`)
  }
  checked++
}
if (newById.size !== Object.keys(snap.topics).length) fail(`topic count: ${newById.size} vs ${Object.keys(snap.topics).length}`)
console.log(`topics deep-compared: ${checked}`)

/* ---- 3. bridge-exact buckets ---- */
const TAXONOMY_BY_FIELD = new Map<string, TaxonomySubject>()
const TAXONOMY_BY_BRANCH = new Map<string, TaxonomySubject>()
for (const tax of SUBJECT_TAXONOMY) {
  for (const f of tax.ownFields ?? []) if (!TAXONOMY_BY_FIELD.has(f)) TAXONOMY_BY_FIELD.set(f, tax)
  for (const ch of tax.chapters)
    for (const b of ch.branches ?? []) if (!TAXONOMY_BY_BRANCH.has(b)) TAXONOMY_BY_BRANCH.set(b, tax)
}
const taxonomyFor = (t: { field: string; branch: string }): TaxonomySubject | null =>
  TAXONOMY_BY_FIELD.get(t.field) ?? TAXONOMY_BY_BRANCH.get(t.branch) ?? null
const chapterNameFor = (tax: TaxonomySubject, t: { field: string; branch: string }): string => {
  const ch = tax.chapters.find(
    (c) => (c.fields ? c.fields.includes(t.field) : false) || (c.branches ? c.branches.includes(t.branch) : false),
  )
  return ch ? ch.name : t.branch
}

const live = KNOWLEDGE_DOMAIN_FILES.flatMap((d) => d.topics).filter((t) => !EXCLUDED_TOPICS[t.id])
const buckets = new Map<string, Map<string, string[]>>()
const liveOrder = new Map<string, string[]>()
for (const t of live) {
  const tax = taxonomyFor(t)
  if (!tax) {
    fail(`topic ${t.id} no longer maps to a taxonomy subject`)
    continue
  }
  if (!liveOrder.has(tax.key)) liveOrder.set(tax.key, [])
  const ord = liveOrder.get(tax.key)!
  const ch = chapterNameFor(tax, t)
  if (!ord.includes(ch)) ord.push(ch)
  if (!buckets.has(tax.key)) buckets.set(tax.key, new Map())
  const m = buckets.get(tax.key)!
  if (!m.has(ch)) m.set(ch, [])
  m.get(ch)!.push(t.id)
}
const newBuckets = SUBJECT_TAXONOMY.filter((tax) => buckets.has(tax.key)).map((tax) => ({
  key: tax.key,
  chapters: [
    ...tax.chapters.map((c) => c.name).filter((n) => buckets.get(tax.key)!.has(n)),
    ...(liveOrder.get(tax.key) ?? []).filter(
      (n) => !tax.chapters.some((c) => c.name === n && buckets.get(tax.key)!.has(n)),
    ),
  ]
    .map((name) => ({ name, topicIds: buckets.get(tax.key)!.get(name) ?? [] }))
    .filter((c) => c.topicIds.length > 0),
}))

if (newBuckets.length !== snap.buckets.length) fail(`subject bucket count: ${newBuckets.length} vs ${snap.buckets.length}`)
newBuckets.forEach((nb, i) => {
  const ob = snap.buckets[i]
  if (!ob) return
  if (nb.key !== ob.key) {
    fail(`bucket[${i}] key: ${nb.key} vs ${ob.key}`)
    return
  }
  if (JSON.stringify(nb) !== JSON.stringify(ob)) {
    const oldChs = ob.chapters.map((c) => `${c.name}(${c.topicIds.length})`).join(', ')
    const newChs = nb.chapters.map((c) => `${c.name}(${c.topicIds.length})`).join(', ')
    fail(`bucket ${nb.key} differs\n    old: ${oldChs}\n    new: ${newChs}`)
  }
})
console.log(`subject buckets compared: ${newBuckets.length}`)

/* ---- 4. stats ---- */
if (JSON.stringify(KNOWLEDGE_STATS) !== JSON.stringify(snap.stats)) {
  fail(`KNOWGE_STATS differ:\n    old ${JSON.stringify(snap.stats)}\n    new ${JSON.stringify(KNOWLEDGE_STATS)}`)
} else {
  console.log(`stats identical: ${KNOWLEDGE_STATS.topics} topics · ${KNOWLEDGE_STATS.domains} domains`)
}

if (failures > 0) {
  console.error(`\n${failures} check(s) FAILED`)
  process.exit(1)
}
console.log('\nALL CHECKS PASSED — the migrated tree is provably equivalent.')

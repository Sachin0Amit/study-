/**
 * Structural analysis of src/data/knowledge/fields — answers the questions
 * the reorganization needs before it can be designed:
 *
 *   1. Which taxonomy subjects appear in each domain (topic counts)?
 *   2. Do subjects span multiple domains?
 *   3. How many topics have NO taxonomy match (legacy fallback)?
 *   4. How do chapters distribute per (domain, subject)?
 *   5. Total topic count + physical file count.
 */
import { KNOWLEDGE_DOMAIN_FILES } from '../src/data/knowledge'
import { SUBJECT_TAXONOMY, type TaxonomySubject } from '../src/data/knowledge/subject-taxonomy'
import { readdirSync } from 'fs'

const TAXONOMY_BY_FIELD = new Map<string, TaxonomySubject>()
const TAXONOMY_BY_BRANCH = new Map<string, TaxonomySubject>()
for (const tax of SUBJECT_TAXONOMY) {
  for (const f of tax.ownFields ?? []) if (!TAXONOMY_BY_FIELD.has(f)) TAXONOMY_BY_FIELD.set(f, tax)
  for (const ch of tax.chapters) {
    if (!ch.branches) continue
    for (const b of ch.branches) if (!TAXONOMY_BY_BRANCH.has(b)) TAXONOMY_BY_BRANCH.set(b, tax)
  }
}
function taxonomyFor(t: { field: string; branch: string }): TaxonomySubject | null {
  return TAXONOMY_BY_FIELD.get(t.field) ?? TAXONOMY_BY_BRANCH.get(t.branch) ?? null
}
function chapterNameFor(tax: TaxonomySubject, t: { field: string; branch: string }): string {
  const ch = tax.chapters.find(
    (c) => (c.fields ? c.fields.includes(t.field) : false) || (c.branches ? c.branches.includes(t.branch) : false),
  )
  return ch ? ch.name : t.branch
}

const files = readdirSync('src/data/knowledge/fields').filter((f) => f.endsWith('.ts'))
let total = 0
const subjectDomains = new Map<string, Set<string>>() // subject key -> domains
const unassigned: { domain: string; field: string; id: string }[] = []
const domainReport: string[] = []

for (const df of KNOWLEDGE_DOMAIN_FILES) {
  const perSubject = new Map<string, number>()
  const perChapter = new Map<string, number>() // `${subject} › ${chapter}` -> n
  const fieldsInDomain = new Set<string>()
  for (const t of df.topics) {
    total++
    fieldsInDomain.add(t.field)
    const tax = taxonomyFor(t)
    if (!tax) {
      unassigned.push({ domain: df.domain, field: t.field, id: t.id })
      perSubject.set('(unassigned)', (perSubject.get('(unassigned)') ?? 0) + 1)
      continue
    }
    if (!subjectDomains.has(tax.key)) subjectDomains.set(tax.key, new Set())
    subjectDomains.get(tax.key)!.add(df.domain)
    perSubject.set(tax.key, (perSubject.get(tax.key) ?? 0) + 1)
    perChapter.set(`${tax.key} › ${chapterNameFor(tax, t)}`, (perChapter.get(`${tax.key} › ${chapterNameFor(tax, t)}`) ?? 0) + 1)
  }
  domainReport.push(
    `\n=== ${df.domain} — ${df.topics.length} topics, ${fieldsInDomain.size} fields ===\n` +
      [...perSubject.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([k, n]) => `   ${k}: ${n}`)
        .join('\n'),
  )
  const chapterLines = [...perChapter.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6)
  domainReport.push(`   (top chapters: ${chapterLines.map(([k, n]) => `${k}=${n}`).join(' | ')})`)
}

console.log(`field files on disk: ${files.length}`)
console.log(`domains: ${KNOWLEDGE_DOMAIN_FILES.length}`)
console.log(`total topics in KNOWLEDGE_DOMAIN_FILES: ${total}`)
console.log(`\nSUBJECTS SPANNING MULTIPLE DOMAINS:`)
for (const [key, doms] of [...subjectDomains.entries()].sort()) {
  if (doms.size > 1) console.log(`   ${key}: ${[...doms].join(' + ')}`)
}
console.log(`\nUNASSIGNED (no taxonomy match): ${unassigned.length}`)
const byField = new Map<string, number>()
for (const u of unassigned) byField.set(`${u.domain} > ${u.field}`, (byField.get(`${u.domain} > ${u.field}`) ?? 0) + 1)
for (const [k, n] of [...byField.entries()].sort((a, b) => b[1] - a[1])) console.log(`   ${k}: ${n}`)
console.log(domainReport.join('\n'))

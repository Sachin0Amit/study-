/**
 * ONE-SHOT migration (2026-11-02) — reorganize the flat knowledge pass files
 * (src/data/knowledge/fields/*.ts — 87 cryptically-named x-pass files) into
 * the subject-wise / chapter-wise tree that mirrors the Library exactly:
 *
 *   src/data/knowledge/
 *     subjects/<subject-key>/            one folder per canonical subject book
 *       index.ts                         subject TOC (concat of chapter files)
 *       <nn>-<chapter-slug>.ts           one file per canonical chapter
 *     domains/<nn>-<field-slug>.ts       18 field (domain) assembly files
 *     index.ts                           public exports — unchanged surface
 *
 * Guarantees (verified afterwards by scripts/verify-knowledge-reorg.ts and a
 * byte-diff of knowledge-meta.json):
 *   - every topic's source text is moved VERBATIM (only re-indented);
 *   - within each (subject, chapter) the relative topic order is preserved —
 *     a stable partition — so the Library bridge regenerates the exact same
 *     subjects/books/chapters/sections registries;
 *   - content.json keeps the same section set (array order may change; it is
 *     consumed by sectionId lookup only).
 *
 * Usage:
 *   bun scripts/reorganize-knowledge-fields.ts --dry    (parse + report only)
 *   bun scripts/reorganize-knowledge-fields.ts          (write the new tree)
 *
 * After verification passes, the legacy fields/ directory is deleted and this
 * script becomes a historical artifact (it refuses to run again).
 */
import { KNOWLEDGE_DOMAIN_FILES, KNOWLEDGE_STATS, countTopicWords } from '../src/data/knowledge'
import { SUBJECT_TAXONOMY, type TaxonomySubject } from '../src/data/knowledge/subject-taxonomy'
import { EXCLUDED_TOPICS } from '../src/data/knowledge/dedup'
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'fs'
import { join } from 'path'

const DRY = process.argv.includes('--dry')
const KROOT = 'src/data/knowledge'
const FIELDS_DIR = join(KROOT, 'fields')
const SNAPSHOT = '/tmp/knowledge-snapshot-before-reorg.json'

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function camel(kebab: string): string {
  return kebab
    .split('-')
    .map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join('')
}

function q(s: string): string {
  return `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
}

function assertNoCommentClose(s: string, where: string) {
  if (s.includes('*/')) throw new Error(`"*/" inside ${where}: ${s.slice(0, 80)}`)
}

/** Nice folder slugs + export var names for the 18 knowledge domains. */
const DOMAIN_NICE: Record<string, { slug: string; varName: string }> = {
  'Foundation Learning': { slug: 'foundation-learning', varName: 'foundationLearning' },
  'Aptitude & Test Preparation': { slug: 'aptitude-test-prep', varName: 'aptitudeTestPrep' },
  'Physical Sciences': { slug: 'physical-sciences', varName: 'physicalSciences' },
  'Life Sciences': { slug: 'life-sciences', varName: 'lifeSciences' },
  Mathematics: { slug: 'mathematics', varName: 'mathematicsDomain' },
  'Environment & Sustainability': { slug: 'environment', varName: 'environmentDomain' },
  'Computing & AI': { slug: 'computing-ai', varName: 'computingAi' },
  Engineering: { slug: 'engineering', varName: 'engineeringDomain' },
  'Technology & Applied Science': { slug: 'technology-applied', varName: 'technologyApplied' },
  'Social Sciences': { slug: 'social-sciences', varName: 'socialSciences' },
  Humanities: { slug: 'humanities', varName: 'humanitiesDomain' },
  'Languages & World Literature': { slug: 'languages-literature', varName: 'languagesLiterature' },
  'Law & Governance': { slug: 'law-governance', varName: 'lawGovernance' },
  'Business & Economics': { slug: 'business-economics', varName: 'businessEconomics' },
  'Health & Wellness': { slug: 'health-wellness', varName: 'healthWellness' },
  'Arts & Culture': { slug: 'arts-culture', varName: 'artsCulture' },
  'Everyday Knowledge': { slug: 'everyday-practical', varName: 'everydayPractical' },
  'Emerging & Interdisciplinary': { slug: 'emerging-interdisciplinary', varName: 'emergingInterdisciplinary' },
}

/* ------------------------------------------------------------------ */
/*  1. Parse the legacy fields/ files — extract every physical topic   */
/*     object verbatim (line-based, indent-matched).                   */
/* ------------------------------------------------------------------ */

interface Phys {
  file: string
  lines: string[] // exact source lines, dedented to column 0
  comment: string[] // contiguous // lines directly above, trimmed
}

if (!existsSync(FIELDS_DIR)) {
  console.error('src/data/knowledge/fields/ not found — the tree looks already migrated. Aborting.')
  process.exit(1)
}

const physical = new Map<string, Phys>()
const files = readdirSync(FIELDS_DIR)
  .filter((x) => x.endsWith('.ts'))
  .sort()

for (const f of files) {
  const lines = readFileSync(join(FIELDS_DIR, f), 'utf8').split('\n')
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const mSame = line.match(/^(\s*)\{\s*id:\s*['"]/)
    const mOpen = line.match(/^(\s*)\{\s*$/)
    let indent = ''
    let start = -1
    if (mSame) {
      start = i
      indent = mSame[1]
    } else if (mOpen && /^\s*id:\s*['"]/.test(lines[i + 1] ?? '')) {
      start = i
      indent = mOpen[1]
    }
    if (start < 0) {
      i++
      continue
    }
    const closeRe = new RegExp('^' + indent + '\\},?$')
    let end = -1
    for (let j = start + 1; j < lines.length; j++) {
      if (closeRe.test(lines[j])) {
        end = j
        break
      }
    }
    if (end < 0) throw new Error(`Unclosed topic object at ${f}:${start + 1}`)
    const idLine = mSame ? line : lines[start + 1]
    const id = (idLine.match(/id:\s*['"]([^'"]+)['"]/) || [])[1]
    if (!id) throw new Error(`No id parsed at ${f}:${start + 1}`)
    if (physical.has(id)) throw new Error(`Duplicate physical topic id "${id}" in ${f} (already in ${physical.get(id)!.file})`)
    let c = start - 1
    const comment: string[] = []
    while (c >= 0 && /^\s*\/\//.test(lines[c])) {
      comment.unshift(lines[c].trimStart())
      c--
    }
    const n = indent.length
    const body = lines.slice(start, end + 1).map((l) => (l.trim() === '' ? '' : l.slice(n)))
    physical.set(id, { file: f, lines: body, comment })
    i = end + 1
  }
}

/* ------------------------------------------------------------------ */
/*  2. Cross-check physical topics vs the wired KNOWLEDGE_DOMAIN_FILES */
/* ------------------------------------------------------------------ */

const allTopics = KNOWLEDGE_DOMAIN_FILES.flatMap((d) => d.topics)
const wiredIds = new Set(allTopics.map((t) => t.id))
const missing = allTopics.filter((t) => !physical.has(t.id)).map((t) => `${t.id} (domain ${t.domain})`)
const orphans = [...physical.keys()].filter((id) => !wiredIds.has(id))

console.log(`parsed ${files.length} legacy files → ${physical.size} physical topics`)
console.log(`wired topics in KNOWLEDGE_DOMAIN_FILES: ${allTopics.length}`)
if (missing.length) {
  console.error(`FAIL — wired topics with no physical source:\n  ${missing.join('\n  ')}`)
  process.exit(1)
}
if (orphans.length) {
  console.error(`FAIL — physical topics NOT wired into any domain (would be lost):\n  ${orphans.join('\n  ')}`)
  process.exit(1)
}

/* ------------------------------------------------------------------ */
/*  3. Bucket every topic — bridge-exact subject/chapter assignment    */
/* ------------------------------------------------------------------ */

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

const liveTopics = allTopics.filter((t) => !EXCLUDED_TOPICS[t.id])

/** subject key → chapter name → topic ids (ALL topics, original order) */
const subjectChapters = new Map<string, Map<string, string[]>>()
/** subject key → chapter first-occurrence order among LIVE topics (bridge `rest` order) */
const liveChapterOrder = new Map<string, string[]>()
/** subject key → taxonomy */
const taxByKey = new Map<string, TaxonomySubject>()
/** domain name → subject keys in first-occurrence order */
const domainSubjects = new Map<string, string[]>()

for (const t of liveTopics) {
  const tax = taxonomyFor(t)
  if (!tax) throw new Error(`Topic ${t.id} has no taxonomy subject (legacy fallback) — handle manually`)
  if (!liveChapterOrder.has(tax.key)) liveChapterOrder.set(tax.key, [])
  const order = liveChapterOrder.get(tax.key)!
  const chName = chapterNameFor(tax, t)
  if (!order.includes(chName)) order.push(chName)
}
for (const df of KNOWLEDGE_DOMAIN_FILES) {
  for (const t of df.topics) {
    const tax = taxonomyFor(t)
    if (!tax) throw new Error(`Topic ${t.id} has no taxonomy subject (legacy fallback) — handle manually`)
    taxByKey.set(tax.key, tax)
    if (!subjectChapters.has(tax.key)) subjectChapters.set(tax.key, new Map())
    const chapters = subjectChapters.get(tax.key)!
    const chName = chapterNameFor(tax, t)
    if (!chapters.has(chName)) chapters.set(chName, [])
    chapters.get(chName)!.push(t.id)
    if (!domainSubjects.has(df.domain)) domainSubjects.set(df.domain, [])
    const subs = domainSubjects.get(df.domain)!
    if (!subs.includes(tax.key)) subs.push(tax.key)
  }
}

/** Bridge-exact chapter order: declared (with ≥1 live topic) then live-first-occurrence,
 *  then chapters visible only through excluded topics (invisible to the bridge). */
function chapterOrder(key: string): string[] {
  const tax = taxByKey.get(key)!
  const all = [...subjectChapters.get(key)!.keys()]
  const liveSet = new Set(liveChapterOrder.get(key) ?? [])
  const declared = tax.chapters.map((c) => c.name).filter((n) => liveSet.has(n))
  const rest = (liveChapterOrder.get(key) ?? []).filter((n) => !declared.includes(n))
  const dead = all.filter((n) => !declared.includes(n) && !rest.includes(n))
  return [...declared, ...rest, ...dead]
}

/* ------------------------------------------------------------------ */
/*  4. Snapshot the pre-migration state for the verifier               */
/* ------------------------------------------------------------------ */

const byId = new Map(allTopics.map((t) => [t.id, t]))
const snapshot = {
  generatedAt: new Date().toISOString(),
  stats: KNOWLEDGE_STATS,
  domains: KNOWLEDGE_DOMAIN_FILES.map((d) => ({
    domain: d.domain,
    blurb: d.blurb,
    topicIds: d.topics.map((t) => t.id),
  })),
  topics: Object.fromEntries(allTopics.map((t) => [t.id, t])),
  /** bridge-exact buckets (LIVE topics only, in order) */
  buckets: SUBJECT_TAXONOMY.filter((tax) => subjectChapters.has(tax.key)).map((tax) => ({
    key: tax.key,
    chapters: chapterOrder(tax.key)
      .map((name) => ({
        name,
        topicIds: (subjectChapters.get(tax.key)!.get(name) ?? []).filter((id) => !EXCLUDED_TOPICS[id]),
      }))
      .filter((c) => c.topicIds.length > 0),
  })),
}
writeFileSync(SNAPSHOT, JSON.stringify(snapshot))
console.log(`snapshot written → ${SNAPSHOT}`)

/* ------------------------------------------------------------------ */
/*  5. Report (dry run stops here)                                     */
/* ------------------------------------------------------------------ */

const subjectCount = subjectChapters.size
let chapterCount = 0
for (const [, chapters] of subjectChapters) chapterCount += chapters.size
console.log(`\n${KNOWLEDGE_DOMAIN_FILES.length} domains · ${subjectCount} subjects · ${chapterCount} chapters · ${allTopics.length} lessons`)

const biggest = [...subjectChapters.entries()]
  .map(([k, chs]) => ({ k, n: [...chs.values()].reduce((a, b) => a + b.length, 0) }))
  .sort((a, b) => b.n - a.n)
  .slice(0, 12)
console.log('\nbiggest subjects: ' + biggest.map((s) => `${s.k}=${s.n}`).join(' · '))

if (DRY) {
  console.log('\nDRY RUN — no files written. Planned layout:')
  for (const df of KNOWLEDGE_DOMAIN_FILES) {
    const subs = domainSubjects.get(df.domain) ?? []
    console.log(`  domains/${slugify(df.domain)}/ (${subs.length} subjects, ${df.topics.length} topics)`)
  }
  console.log(`  subjects/<key>/<nn>-<chapter>.ts (${subjectCount} subject folders, ${chapterCount} chapter files)`)
  process.exit(0)
}

/* ------------------------------------------------------------------ */
/*  6. Emit the new tree                                               */
/* ------------------------------------------------------------------ */

for (const dom of KNOWLEDGE_DOMAIN_FILES) {
  const nice = DOMAIN_NICE[dom.domain]
  if (!nice) throw new Error(`No DOMAIN_NICE entry for domain "${dom.domain}" — add one`)
}

const SUBJ_DIR = join(KROOT, 'subjects')
const DOM_DIR = join(KROOT, 'domains')
if (existsSync(SUBJ_DIR)) rmSync(SUBJ_DIR, { recursive: true, force: true })
if (existsSync(DOM_DIR)) rmSync(DOM_DIR, { recursive: true, force: true })
mkdirSync(SUBJ_DIR, { recursive: true })
mkdirSync(DOM_DIR, { recursive: true })

/* ---- 6a. subject folders ---- */

const pad = (n: number) => String(n).padStart(2, '0')
const emittedSubjects: { key: string; varName: string; chapterFiles: { file: string; varName: string; chapter: string }[] }[] = []

for (const tax of SUBJECT_TAXONOMY) {
  const chapters = subjectChapters.get(tax.key)
  if (!chapters) continue
  const order = chapterOrder(tax.key)
  const varName = camel(tax.key)
  const dir = join(SUBJ_DIR, tax.key)
  mkdirSync(dir, { recursive: true })

  const chapterFiles: { file: string; varName: string; chapter: string }[] = []
  const tocLines: string[] = []
  const importLines: string[] = []
  const spreadLines: string[] = []

  order.forEach((chapterName, idx) => {
    const nn = pad(idx + 1)
    const chVar = `${varName}Ch${nn}`
    const file = `${nn}-${slugify(chapterName)}.ts`
    const ids = chapters.get(chapterName)!
    const topics = ids.map((id) => byId.get(id)!)
    const words = topics.reduce((n, t) => n + countTopicWords(t), 0)
    const sourceFiles = [...new Set(topics.map((t) => physical.get(t.id)!.file))].sort()
    const fields = [...new Set(topics.map((t) => t.field))].sort()
    const taxCh = tax.chapters.find((c) => c.name === chapterName)

    assertNoCommentClose(tax.name, 'subject name')
    assertNoCommentClose(chapterName, 'chapter name')

    const header = [
      '/**',
      ` * Knowledge Universe — ${tax.name} — Chapter ${nn}: ${chapterName}`,
      ` * ${topics.length} lesson${topics.length !== 1 ? 's' : ''} · ~${words.toLocaleString('en-US')} words`,
      ` * field${fields.length !== 1 ? 's' : ''}: ${fields.join(', ')}`,
      ` * legacy sources: ${sourceFiles.join(', ')}`,
      ' *',
      ' * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);',
      ' * edit freely — append new lessons to this array, then run:',
      ' *   bun run scripts/serialize-content.ts',
    ]
    if (taxCh && (taxCh.fields || taxCh.branches)) {
      header.push(
        ' *',
        ` * Taxonomy match: ${taxCh.fields ? `fields [${taxCh.fields.join(', ')}]` : ''}${
          taxCh.fields && taxCh.branches ? ' or ' : ''
        }${taxCh.branches ? `branches [${taxCh.branches.join(', ')}]` : ''}`,
      )
    }
    header.push(
      ' *',
      ' * Lessons (snapshot at reorganization):',
      ...topics.map((t, i) => ` *   ${nn}.${i + 1} ${t.id} — ${t.title}`),
      ' */',
    )

    const body = topics
      .map((t) => {
        const p = physical.get(t.id)!
        const cmt = p.comment.length ? p.comment.map((l) => '  ' + l).join('\n') + '\n' : ''
        return cmt + p.lines.map((l) => (l === '' ? '' : '  ' + l)).join('\n')
      })
      .join(',\n')

    writeFileSync(
      join(dir, file),
      header.join('\n') +
        '\n' +
        "import type { KnowledgeTopic } from '../../types'\n\n" +
        `export const ${chVar}: KnowledgeTopic[] = [\n${body},\n]\n`,
    )

    chapterFiles.push({ file, varName: chVar, chapter: chapterName })
    tocLines.push(` *   ${nn} ${chapterName} — ${topics.length} lesson${topics.length !== 1 ? 's' : ''}`)
    importLines.push(`import { ${chVar} } from './${file.replace(/\.ts$/, '')}'`)
    spreadLines.push(`  ...${chVar},`)
  })

  const totalTopics = [...chapters.values()].reduce((a, b) => a + b.length, 0)
  const subjHeader = [
    '/**',
    ` * Knowledge Universe — subject book: ${tax.name} (${tax.key})`,
    ` * group: ${tax.group} · ${order.length} chapters · ${totalTopics} lessons`,
    ' *',
    ' * One folder per canonical subject (mirrors the Library book); one file',
    ' * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the',
    ' * array below, and (for a new field/branch) declare it in',
    ' * ../subject-taxonomy.ts so the bridge groups it correctly.',
    ' *',
    ' * Table of contents:',
    ...tocLines,
  ]
  if (tax.mergeInto) {
    subjHeader.push(
      ' *',
      ` * NOTE: merged subject — its chapters are appended to the curated master`,
      ` * book ${tax.mergeInto.bookId} (subject ${tax.mergeInto.subjectId}) in the Library.`,
    )
  }
  subjHeader.push(' */')

  writeFileSync(
    join(dir, 'index.ts'),
    subjHeader.join('\n') +
      '\n' +
      "import type { KnowledgeTopic } from '../../types'\n" +
      importLines.join('\n') +
      '\n\n' +
      `export const ${varName}Topics: KnowledgeTopic[] = [\n${spreadLines.join('\n')}\n]\n`,
  )

  emittedSubjects.push({ key: tax.key, varName, chapterFiles })
}

/* ---- 6b. domain (field) assembly files ---- */

const domainImports: string[] = []
const domainEntries: string[] = []

KNOWLEDGE_DOMAIN_FILES.forEach((df, di) => {
  const nice = DOMAIN_NICE[df.domain]
  const subs = domainSubjects.get(df.domain) ?? []
  const imports: string[] = []
  const spreads: string[] = []
  const roster: string[] = []

  for (const key of subs) {
    const tax = taxByKey.get(key)!
    const varName = camel(key)
    const n = df.topics.filter((t) => taxonomyFor(t)!.key === key).length
    imports.push(`import { ${varName}Topics } from '../subjects/${key}'`)
    spreads.push(`  // ${tax.name} — ${n} topic${n !== 1 ? 's' : ''} in this field`)
    spreads.push(`  ...${varName}Topics.filter((t) => t.domain === ${q(df.domain)}),`)
    roster.push(`${tax.name} (${n})`)
  }

  assertNoCommentClose(df.domain, 'domain name')
  assertNoCommentClose(df.blurb, 'domain blurb')

  const header = [
    '/**',
    ` * Knowledge Universe — field file ${pad(di + 1)}: ${df.domain}`,
    ` *`,
    ` * ${df.blurb}`,
    ` *`,
    ` * Field-wise routing: this field assembles its topics from the subject`,
    ` * books (../subjects/*) — every topic lives in exactly one subject file,`,
    ` * and the domain filter below routes it to its field. Subjects feeding`,
    ` * this field: ${roster.join(', ')}`,
    ' */',
  ]

  writeFileSync(
    join(DOM_DIR, `${pad(di + 1)}-${nice.slug}.ts`),
    header.join('\n') +
      '\n' +
      "import type { KnowledgeDomainFile } from '../types'\n" +
      imports.join('\n') +
      '\n\n' +
      `export const ${nice.varName}: KnowledgeDomainFile = {\n` +
      `  domain: ${q(df.domain)},\n` +
      `  blurb: ${q(df.blurb)},\n` +
      `  topics: [\n${spreads.join('\n')}\n  ],\n}\n`,
  )

  domainImports.push(`import { ${nice.varName} } from './domains/${pad(di + 1)}-${nice.slug}'`)
  domainEntries.push(`  ${nice.varName},`)
})

/* ---- 6c. top-level index.ts (public surface unchanged) ---- */

const derived = `/* ------------------------------------------------------------------ */
/* Derived data (recomputed so it can never drift from the content)   */
/* ------------------------------------------------------------------ */

export function countTopicWords(t: KnowledgeTopic): number {
  let n = 0
  for (const b of t.blocks) {
    if (b.kind === 'para' || b.kind === 'heading') n += b.text.split(/\\s+/).filter(Boolean).length
    else if (b.kind === 'callout') n += (b.title + ' ' + b.text).split(/\\s+/).filter(Boolean).length
    else if (b.kind === 'formula') n += (b.name + ' ' + b.meaning).split(/\\s+/).filter(Boolean).length
    else if (b.kind === 'example') n += (b.title + ' ' + b.steps.join(' ')).split(/\\s+/).filter(Boolean).length
    else if (b.kind === 'terms') n += b.items.map((i) => i.term + ' ' + i.def).join(' ').split(/\\s+/).filter(Boolean).length
    else if (b.kind === 'list') n += b.items.join(' ').split(/\\s+/).filter(Boolean).length
    else if (b.kind === 'quiz')
      n += b.items.map((i) => i.q + ' ' + i.options.join(' ') + ' ' + i.explain).join(' ').split(/\\s+/).filter(Boolean).length
    else if (b.kind === 'figure')
      n += (b.caption + ' ' + (b.sketchCaption ?? '')).split(/\\s+/).filter(Boolean).length
    else if (b.kind === 'derivation')
      n +=
        (
          b.title +
          ' ' +
          b.statement +
          ' ' +
          (b.prerequisites ?? []).join(' ') +
          ' ' +
          b.steps.map((s) => s.label + ' ' + (s.formula ?? '') + ' ' + s.explanation).join(' ') +
          ' ' +
          b.result
        )
          .split(/\\s+/)
          .filter(Boolean).length
  }
  return n
}

/** Authoritative topic list with recomputed words/readMins. */
export const KNOWLEDGE_TOPICS: KnowledgeTopic[] = KNOWLEDGE_DOMAIN_FILES.flatMap((d) =>
  d.topics.map((t) => {
    const words = countTopicWords(t)
    return { ...t, words, readMins: Math.max(2, Math.round(words / 200)) }
  }),
)

export const KNOWLEDGE_TOPIC_BY_ID: Map<string, KnowledgeTopic> = new Map(
  KNOWLEDGE_TOPICS.map((t) => [t.id, t]),
)

export interface KnowledgeDomainStats {
  domain: string
  blurb: string
  fields: string[]
  topicCount: number
  words: number
  core: number
  intermediate: number
  advanced: number
  lastAddedOn: string
}

export const KNOWLEDGE_DOMAIN_STATS: KnowledgeDomainStats[] = KNOWLEDGE_DOMAIN_FILES.map((d) => {
  const topics = d.topics
  return {
    domain: d.domain,
    blurb: d.blurb,
    fields: [...new Set(topics.map((t) => t.field))],
    topicCount: topics.length,
    words: topics.reduce((n, t) => n + countTopicWords(t), 0),
    core: topics.filter((t) => t.tier === 'core').length,
    intermediate: topics.filter((t) => t.tier === 'intermediate').length,
    advanced: topics.filter((t) => t.tier === 'advanced').length,
    lastAddedOn: topics.reduce((latest, t) => (t.addedOn > latest ? t.addedOn : latest), '1970-01-01'),
  }
})

export interface KnowledgeStats {
  domains: number
  fields: number
  topics: number
  words: number
  readMins: number
  quizItems: number
  formulas: number
  lastExpanded: string
  /** dates on which topics were added (sorted ascending) */
  expansionDates: string[]
}

export const KNOWLEDGE_STATS: KnowledgeStats = (() => {
  const dates = new Set<string>()
  let quizItems = 0
  let formulas = 0
  for (const t of KNOWLEDGE_TOPICS) {
    dates.add(t.addedOn)
    for (const b of t.blocks) {
      if (b.kind === 'quiz') quizItems += b.items.length
      if (b.kind === 'formula') formulas += 1
    }
  }
  const lastExpanded = KNOWLEDGE_TOPICS.reduce(
    (latest, t) => (t.addedOn > latest ? t.addedOn : latest),
    '1970-01-01',
  )
  return {
    domains: KNOWLEDGE_DOMAIN_FILES.length,
    fields: new Set(KNOWLEDGE_TOPICS.map((t) => t.field)).size,
    topics: KNOWLEDGE_TOPICS.length,
    words: KNOWLEDGE_TOPICS.reduce((n, t) => n + t.words, 0),
    readMins: KNOWLEDGE_TOPICS.reduce((n, t) => n + t.readMins, 0),
    quizItems,
    formulas,
    lastExpanded,
    expansionDates: [...dates].sort(),
  }
})()

export type { KnowledgeTopic, KnowledgeDomainFile, KnowledgeBlock, Tier } from './types'`

const indexHeader = `/**
 * Knowledge Universe — subject-wise, chapter-wise source tree (2026-11-02).
 *
 * Layout (see ./README.md):
 *   subjects/<subject-key>/<nn>-<chapter-slug>.ts   lesson files, one per
 *                                                   canonical book chapter
 *   subjects/<subject-key>/index.ts                 subject book TOC
 *   domains/<nn>-<field-slug>.ts                    18 field assembly files
 *                                                   (route each subject's
 *                                                   topics to its field)
 *
 * This index recomputes stats at load time so counts and word totals always
 * reflect the actual content on disk. The Library bridge in
 * ../library-parts/knowledge-universe maps every field to ONE canonical
 * SUBJECT via subject-taxonomy.ts (all mathematics — from any source —
 * lands in the single Mathematics book, and so on for every subject);
 * chapters inside each book are canonical topic areas.
 *
 * DEDUP: ./dedup.ts lists topics already explained elsewhere — they are
 * filtered out by the bridge (zero repetition across the app).
 *
 * NOTE: this module is consumed ONLY by scripts/serialize-content.ts (which
 * regenerates knowledge-meta.json + content.json). The app imports those JSON
 * assets — see src/data/library.ts and src/data/content/index.ts.
 */

import type { KnowledgeTopic, KnowledgeDomainFile } from './types'
${domainImports.join('\n')}

/** Domain files in display order (field-wise shelf order). */
export const KNOWLEDGE_DOMAIN_FILES: KnowledgeDomainFile[] = [
${domainEntries.join('\n')}
]

${derived}
`

writeFileSync(join(KROOT, 'index.ts'), indexHeader)

/* ---- 6d. README ---- */

writeFileSync(
  join(KROOT, 'README.md'),
  `# Knowledge Universe — source tree

Every lesson in the Knowledge Universe lives here, arranged **field-wise →
subject-wise → chapter-wise**, mirroring exactly what the Library renders.

\`\`\`
src/data/knowledge/
  index.ts                     public exports (consumed by serialize-content.ts)
  types.ts                     the KnowledgeTopic / block contracts
  subject-taxonomy.ts          canonical subjects + chapter match rules
  dedup.ts                     topics already explained elsewhere (filtered)
  subjects/
    <subject-key>/             ONE folder per canonical subject book
      index.ts                 the subject's topics (book TOC order)
      <nn>-<chapter>.ts        one file per chapter — the lessons themselves
  domains/
    <nn>-<field>.ts            18 field files — assemble each field's topics
                               from the subject books via domain routing
\`\`\`

## How the pieces fit

- A **lesson** is a \`KnowledgeTopic\` object (id, title, field, branch, blocks…).
- Its **subject** is decided by \`subject-taxonomy.ts\`: the subject whose
  \`ownFields\` contains the topic's \`field\` (fallback: whose chapter
  \`branches\` contain the topic's \`branch\`).
- Its **chapter** is the subject's chapter whose \`fields\`/\`branches\` match.
- Its **field** (domain) is the topic's \`domain\` string — the domain files
  in \`domains/\` pull each subject's topics into the right field shelf.

## Adding a lesson (checklist)

1. Pick the subject book folder in \`subjects/\`; pick (or create) the chapter
   file \`<nn>-<chapter-slug>.ts\`. New chapter? Register it in
   \`subject-taxonomy.ts\` (with \`fields\`/\`branches\` match rules) and add the
   file to the subject's \`index.ts\`.
2. Author the lesson in the house format (see any chapter file). Ids are
   kebab-case, globally unique, stable forever.
3. Check \`dedup.ts\` + \`coverage/COVERAGE.md\` first — never duplicate a topic
   that another Library book already teaches.
4. Run the pipeline:
   \`\`\`bash
   bun run scripts/serialize-content.ts
   bun run coverage
   bun run scripts/build-knowledge-index.ts
   bun run scripts/exam-coverage-audit.ts   # must stay 2967/2967 = 100%
   \`\`\`

## Provenance

This tree was generated on 2026-11-02 by \`scripts/reorganize-knowledge-fields.ts\`
from the legacy flat pass files (\`fields/x…-pass.ts\`, 87 files) with a
verified guarantee: every lesson's source text moved verbatim, and the
serialized registries (\`knowledge-meta.json\`) came out byte-identical.
`,
)

console.log(`\nemitted:`)
console.log(`  subjects/: ${emittedSubjects.length} subject folders, ${chapterCount} chapter files`)
console.log(`  domains/:  ${KNOWLEDGE_DOMAIN_FILES.length} field files`)
console.log(`  index.ts + README.md rewritten`)
console.log(`\nNEXT:`)
console.log(`  1. bun scripts/verify-knowledge-reorg.ts          (deep verification)`)
console.log(`  2. bun run scripts/serialize-content.ts           (regenerate JSON)`)
console.log(`  3. diff meta/content against /tmp/*-before.json`)
console.log(`  4. rm -rf src/data/knowledge/fields               (only after all green)`)

/**
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
import { foundationLearning } from './domains/01-foundation-learning'
import { aptitudeTestPrep } from './domains/02-aptitude-test-prep'
import { physicalSciences } from './domains/03-physical-sciences'
import { lifeSciences } from './domains/04-life-sciences'
import { mathematicsDomain } from './domains/05-mathematics'
import { environmentDomain } from './domains/06-environment'
import { computingAi } from './domains/07-computing-ai'
import { engineeringDomain } from './domains/08-engineering'
import { technologyApplied } from './domains/09-technology-applied'
import { socialSciences } from './domains/10-social-sciences'
import { humanitiesDomain } from './domains/11-humanities'
import { languagesLiterature } from './domains/12-languages-literature'
import { lawGovernance } from './domains/13-law-governance'
import { businessEconomics } from './domains/14-business-economics'
import { healthWellness } from './domains/15-health-wellness'
import { artsCulture } from './domains/16-arts-culture'
import { everydayPractical } from './domains/17-everyday-practical'
import { emergingInterdisciplinary } from './domains/18-emerging-interdisciplinary'

/** Domain files in display order (field-wise shelf order). */
export const KNOWLEDGE_DOMAIN_FILES: KnowledgeDomainFile[] = [
  foundationLearning,
  aptitudeTestPrep,
  physicalSciences,
  lifeSciences,
  mathematicsDomain,
  environmentDomain,
  computingAi,
  engineeringDomain,
  technologyApplied,
  socialSciences,
  humanitiesDomain,
  languagesLiterature,
  lawGovernance,
  businessEconomics,
  healthWellness,
  artsCulture,
  everydayPractical,
  emergingInterdisciplinary,
]

/* ------------------------------------------------------------------ */
/* Derived data (recomputed so it can never drift from the content)   */
/* ------------------------------------------------------------------ */

export function countTopicWords(t: KnowledgeTopic): number {
  let n = 0
  for (const b of t.blocks) {
    if (b.kind === 'para' || b.kind === 'heading') n += b.text.split(/\s+/).filter(Boolean).length
    else if (b.kind === 'callout') n += (b.title + ' ' + b.text).split(/\s+/).filter(Boolean).length
    else if (b.kind === 'formula') n += (b.name + ' ' + b.meaning).split(/\s+/).filter(Boolean).length
    else if (b.kind === 'equation') n += (b.note ?? '').split(/\s+/).filter(Boolean).length
    else if (b.kind === 'example') n += (b.title + ' ' + b.steps.join(' ')).split(/\s+/).filter(Boolean).length
    else if (b.kind === 'terms') n += b.items.map((i) => i.term + ' ' + i.def).join(' ').split(/\s+/).filter(Boolean).length
    else if (b.kind === 'list') n += b.items.join(' ').split(/\s+/).filter(Boolean).length
    else if (b.kind === 'quiz')
      n += b.items.map((i) => i.q + ' ' + i.options.join(' ') + ' ' + i.explain).join(' ').split(/\s+/).filter(Boolean).length
    else if (b.kind === 'figure')
      n += (b.caption + ' ' + (b.sketchCaption ?? '')).split(/\s+/).filter(Boolean).length
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
          .split(/\s+/)
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

export type { KnowledgeTopic, KnowledgeDomainFile, KnowledgeBlock, Tier } from './types'

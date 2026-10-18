/**
 * Knowledge domains — aggregated index.
 *
 * Domains live in ./fields/*.ts. Every expansion pass appends topics; this
 * index recomputes stats at load time so counts and word totals always
 * reflect the actual content on disk. The Library bridge in
 * ../library-parts/knowledge-universe turns every domain into a Library
 * SECTION (Foundation Learning, Life Sciences, Social Sciences, …) and every
 * field into a SUBJECT — no wrapper group, presented exactly like Foundations
 * or Electronics & Communication.
 *
 * DEDUP: ../dedup.ts lists topics already explained elsewhere — they are
 * filtered out by the bridge (zero repetition across the app).
 *
 * NOTE: this module is consumed ONLY by scripts/serialize-content.ts (which
 * regenerates knowledge-meta.json + content.json). The app imports those JSON
 * assets — see src/data/library.ts and src/data/content/index.ts.
 */

import type { KnowledgeTopic, KnowledgeDomainFile } from './types'
import { foundationLearning } from './fields/foundation-learning'
import { physicalSciences } from './fields/physical-sciences'
import { lifeSciences } from './fields/life-sciences'
import { mathematics } from './fields/mathematics'
import { environment } from './fields/environment'
import { computingAI } from './fields/computing-ai'
import { engineering } from './fields/engineering'
import { technologyApplied } from './fields/technology-applied'
import { socialSciences } from './fields/social-sciences'
import { humanities } from './fields/humanities'
import { languagesLiterature } from './fields/languages-literature'
import { lawGovernance } from './fields/law-governance'
import { businessEconomics } from './fields/business-economics'
import { healthWellness } from './fields/health-wellness'
import { artsCulture } from './fields/arts-culture'
import { everydayPractical } from './fields/everyday-practical'
import { emergingInterdisciplinary } from './fields/emerging-interdisciplinary'

/** Domain files in display order. Expansion passes may append new files here. */
export const KNOWLEDGE_DOMAIN_FILES: KnowledgeDomainFile[] = [
  foundationLearning,
  physicalSciences,
  lifeSciences,
  mathematics,
  environment,
  computingAI,
  engineering,
  technologyApplied,
  socialSciences,
  humanities,
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
    else if (b.kind === 'example') n += (b.title + ' ' + b.steps.join(' ')).split(/\s+/).filter(Boolean).length
    else if (b.kind === 'terms') n += b.items.map((i) => i.term + ' ' + i.def).join(' ').split(/\s+/).filter(Boolean).length
    else if (b.kind === 'list') n += b.items.join(' ').split(/\s+/).filter(Boolean).length
    else if (b.kind === 'quiz')
      n += b.items.map((i) => i.q + ' ' + i.options.join(' ') + ' ' + i.explain).join(' ').split(/\s+/).filter(Boolean).length
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

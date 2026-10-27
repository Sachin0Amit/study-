/**
 * The Knowledge Universe — aggregated index.
 *
 * Domains live in ./domains/*.ts. Every expansion pass appends topics;
 * this index recomputes stats at load time so counts and word totals
 * always reflect the actual content on disk. The Universe is not a
 * separate section — it renders inside the Library as its deepest layer.
 */

import type { UniverseTopic, UniverseDomainFile } from './types'
import { foundationLearning } from './domains/foundation-learning'
import { physicalSciences } from './domains/physical-sciences'
import { lifeSciences } from './domains/life-sciences'
import { mathematics } from './domains/mathematics'
import { environment } from './domains/environment'
import { computingAI } from './domains/computing-ai'
import { engineering } from './domains/engineering'
import { technologyApplied } from './domains/technology-applied'
import { socialSciences } from './domains/social-sciences'
import { humanities } from './domains/humanities'
import { languagesLiterature } from './domains/languages-literature'
import { lawGovernance } from './domains/law-governance'
import { businessEconomics } from './domains/business-economics'
import { healthWellness } from './domains/health-wellness'
import { artsCulture } from './domains/arts-culture'
import { everydayPractical } from './domains/everyday-practical'
import { emergingInterdisciplinary } from './domains/emerging-interdisciplinary'

/** Domain files in display order. Expansion passes may append new files here. */
export const UNIVERSE_DOMAIN_FILES: UniverseDomainFile[] = [
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

function countTopicWords(t: UniverseTopic): number {
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
export const UNIVERSE_TOPICS: UniverseTopic[] = UNIVERSE_DOMAIN_FILES.flatMap((d) =>
  d.topics.map((t) => {
    const words = countTopicWords(t)
    return { ...t, words, readMins: Math.max(2, Math.round(words / 200)) }
  }),
)

export const UNIVERSE_TOPIC_BY_ID: Map<string, UniverseTopic> = new Map(
  UNIVERSE_TOPICS.map((t) => [t.id, t]),
)

export interface UniverseDomainStats {
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

export const UNIVERSE_DOMAIN_STATS: UniverseDomainStats[] = UNIVERSE_DOMAIN_FILES.map((d) => {
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

export interface UniverseStats {
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

export const UNIVERSE_STATS: UniverseStats = (() => {
  const dates = new Set<string>()
  let quizItems = 0
  let formulas = 0
  for (const t of UNIVERSE_TOPICS) {
    dates.add(t.addedOn)
    for (const b of t.blocks) {
      if (b.kind === 'quiz') quizItems += b.items.length
      if (b.kind === 'formula') formulas += 1
    }
  }
  const lastExpanded = UNIVERSE_TOPICS.reduce(
    (latest, t) => (t.addedOn > latest ? t.addedOn : latest),
    '1970-01-01',
  )
  return {
    domains: UNIVERSE_DOMAIN_FILES.length,
    fields: new Set(UNIVERSE_TOPICS.map((t) => t.field)).size,
    topics: UNIVERSE_TOPICS.length,
    words: UNIVERSE_TOPICS.reduce((n, t) => n + t.words, 0),
    readMins: UNIVERSE_TOPICS.reduce((n, t) => n + t.readMins, 0),
    quizItems,
    formulas,
    lastExpanded,
    expansionDates: [...dates].sort(),
  }
})()

/** Lightweight full-text search across titles, concepts, fields and branches. */
export function searchUniverseTopics(query: string, limit = 30): UniverseTopic[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const terms = q.split(/\s+/)
  return UNIVERSE_TOPICS.filter((t) => {
    const hay = (t.title + ' ' + t.domain + ' ' + t.field + ' ' + t.branch + ' ' + t.concepts.join(' ')).toLowerCase()
    return terms.every((term) => hay.includes(term))
  })
    .sort((a, b) => b.words - a.words)
    .slice(0, limit)
}

export type { UniverseTopic, UniverseDomainFile, UniverseBlock, Tier } from './types'

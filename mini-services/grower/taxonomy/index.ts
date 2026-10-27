/**
 * Aggregates every hand-written taxonomy domain into one knowledge base.
 * Domain files are authored independently; this index is the single entry
 * point consumed by the grower engine.
 */

import type { DomainSeeds } from '../types'
import { physicalSciences } from './physical-sciences'
import { lifeSciences } from './life-sciences'
import { mathematics } from './mathematics'
import { environment } from './environment'
import { computingAI } from './computing-ai'
import { engineering } from './engineering'
import { technologyApplied } from './technology-applied'
import { socialSciences } from './social-sciences'
import { humanities } from './humanities'
import { lawGovernance } from './law-governance'
import { businessEconomics } from './business-economics'
import { healthWellness } from './health-wellness'
import { artsCulture } from './arts-culture'
import { everydayPractical } from './everyday-practical'
import { foundationLearning } from './foundation-learning'
import { languagesLiterature } from './languages-literature'

export const TAXONOMY: DomainSeeds[] = [
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
]

/** flattened (domain, field, seed) triples in taxonomy order */
export interface FlatSeed {
  domain: string
  field: string
  seed: TopicSeed
}

import type { TopicSeed } from '../types'

export function flattenTaxonomy(taxonomy: DomainSeeds[] = TAXONOMY): FlatSeed[] {
  const out: FlatSeed[] = []
  for (const d of taxonomy) {
    for (const f of d.fields) {
      for (const t of f.topics) out.push({ domain: d.domain, field: f.field, seed: t })
    }
  }
  return out
}

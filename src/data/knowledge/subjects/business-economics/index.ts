/**
 * Knowledge Universe — subject book: Business Economics (business-economics)
 * group: Commerce, Economics & Business · 3 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Costs & Production — 1 lesson
 *   02 Business Cycles — 1 lesson
 *   03 Public Finance — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { businessEconomicsCh01 } from './01-costs-and-production'
import { businessEconomicsCh02 } from './02-business-cycles'
import { businessEconomicsCh03 } from './03-public-finance'

export const businessEconomicsTopics: KnowledgeTopic[] = [
  ...businessEconomicsCh01,
  ...businessEconomicsCh02,
  ...businessEconomicsCh03,
]

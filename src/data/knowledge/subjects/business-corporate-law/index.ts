/**
 * Knowledge Universe — subject book: Business & Corporate Law (business-corporate-law)
 * group: Law & Justice · 3 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Sale of Goods & Commercial Transactions — 1 lesson
 *   02 Partnership & LLP — 2 lessons
 *   03 Company Law — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { businessCorporateLawCh01 } from './01-sale-of-goods-and-commercial-transactions'
import { businessCorporateLawCh02 } from './02-partnership-and-llp'
import { businessCorporateLawCh03 } from './03-company-law'

export const businessCorporateLawTopics: KnowledgeTopic[] = [
  ...businessCorporateLawCh01,
  ...businessCorporateLawCh02,
  ...businessCorporateLawCh03,
]

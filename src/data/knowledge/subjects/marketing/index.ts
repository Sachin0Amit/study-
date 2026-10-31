/**
 * Knowledge Universe — subject book: Marketing (marketing)
 * group: Commerce, Economics & Business · 3 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Marketing Foundations — 2 lessons
 *   02 Pricing, Channels & Promotion — 1 lesson
 *   03 Brands & Growth — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { marketingCh01 } from './01-marketing-foundations'
import { marketingCh02 } from './02-pricing-channels-and-promotion'
import { marketingCh03 } from './03-brands-and-growth'

export const marketingTopics: KnowledgeTopic[] = [
  ...marketingCh01,
  ...marketingCh02,
  ...marketingCh03,
]

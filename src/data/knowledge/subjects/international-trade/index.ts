/**
 * Knowledge Universe — subject book: International Trade (international-trade)
 * group: Commerce, Economics & Business · 3 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Trade Theory — 1 lesson
 *   02 Trade Policy — 1 lesson
 *   03 Regional Integration & FDI — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { internationalTradeCh01 } from './01-trade-theory'
import { internationalTradeCh02 } from './02-trade-policy'
import { internationalTradeCh03 } from './03-regional-integration-and-fdi'

export const internationalTradeTopics: KnowledgeTopic[] = [
  ...internationalTradeCh01,
  ...internationalTradeCh02,
  ...internationalTradeCh03,
]

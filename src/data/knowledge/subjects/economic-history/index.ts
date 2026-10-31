/**
 * Knowledge Universe — subject book: Economic History (economic-history)
 * group: Humanities & Social Sciences · 3 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Trade, Exchange & Industrialization — 3 lessons
 *   02 The Great Divergence — 1 lesson
 *   03 Money, Crises & the Modern Order — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { economicHistoryCh01 } from './01-trade-exchange-and-industrialization'
import { economicHistoryCh02 } from './02-the-great-divergence'
import { economicHistoryCh03 } from './03-money-crises-and-the-modern-order'

export const economicHistoryTopics: KnowledgeTopic[] = [
  ...economicHistoryCh01,
  ...economicHistoryCh02,
  ...economicHistoryCh03,
]

/**
 * Knowledge Universe — subject book: Finance & Banking (finance-banking)
 * group: Commerce, Economics & Business · 5 chapters · 9 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Money, Banking, Risk & Insurance — 3 lessons
 *   02 Markets & Instruments — 1 lesson
 *   03 Valuation Basics — 1 lesson
 *   04 Corporate Finance — 1 lesson
 *   05 Personal Finance — 3 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { financeBankingCh01 } from './01-money-banking-risk-and-insurance'
import { financeBankingCh02 } from './02-markets-and-instruments'
import { financeBankingCh03 } from './03-valuation-basics'
import { financeBankingCh04 } from './04-corporate-finance'
import { financeBankingCh05 } from './05-personal-finance'

export const financeBankingTopics: KnowledgeTopic[] = [
  ...financeBankingCh01,
  ...financeBankingCh02,
  ...financeBankingCh03,
  ...financeBankingCh04,
  ...financeBankingCh05,
]

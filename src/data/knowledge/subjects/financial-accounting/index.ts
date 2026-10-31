/**
 * Knowledge Universe — subject book: Financial Accounting (financial-accounting)
 * group: Commerce, Economics & Business · 3 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 The Accounting Cycle & the Ledger — 2 lessons
 *   02 Cash, Assets & Controls — 2 lessons
 *   03 Special Transactions & Computerized Systems — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { financialAccountingCh01 } from './01-the-accounting-cycle-and-the-ledger'
import { financialAccountingCh02 } from './02-cash-assets-and-controls'
import { financialAccountingCh03 } from './03-special-transactions-and-computerized-systems'

export const financialAccountingTopics: KnowledgeTopic[] = [
  ...financialAccountingCh01,
  ...financialAccountingCh02,
  ...financialAccountingCh03,
]

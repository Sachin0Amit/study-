/**
 * Knowledge Universe — subject book: Advanced Accounting & Auditing (advanced-accounting-auditing)
 * group: Commerce, Economics & Business · 3 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Partnership Accounts — 2 lessons
 *   02 Company Accounts & Financial Statements — 3 lessons
 *   03 Auditing & Assurance — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { advancedAccountingAuditingCh01 } from './01-partnership-accounts'
import { advancedAccountingAuditingCh02 } from './02-company-accounts-and-financial-statements'
import { advancedAccountingAuditingCh03 } from './03-auditing-and-assurance'

export const advancedAccountingAuditingTopics: KnowledgeTopic[] = [
  ...advancedAccountingAuditingCh01,
  ...advancedAccountingAuditingCh02,
  ...advancedAccountingAuditingCh03,
]

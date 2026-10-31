/**
 * Knowledge Universe — subject book: Public Policy & Administration (public-policy-administration)
 * group: Humanities & Social Sciences · 3 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Governance & Public Administration — 1 lesson
 *   02 The Policy Cycle — 1 lesson
 *   03 Rational Choice & Institutional Design — 3 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { publicPolicyAdministrationCh01 } from './01-governance-and-public-administration'
import { publicPolicyAdministrationCh02 } from './02-the-policy-cycle'
import { publicPolicyAdministrationCh03 } from './03-rational-choice-and-institutional-design'

export const publicPolicyAdministrationTopics: KnowledgeTopic[] = [
  ...publicPolicyAdministrationCh01,
  ...publicPolicyAdministrationCh02,
  ...publicPolicyAdministrationCh03,
]

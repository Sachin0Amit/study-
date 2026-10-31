/**
 * Knowledge Universe — subject book: Practical Skills & Readiness (practical-skills-readiness)
 * group: Everyday Life Skills · 2 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Cloth, Mending & Household Chemistry — 2 lessons
 *   02 Animals, Safety & Readiness — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { practicalSkillsReadinessCh01 } from './01-cloth-mending-and-household-chemistry'
import { practicalSkillsReadinessCh02 } from './02-animals-safety-and-readiness'

export const practicalSkillsReadinessTopics: KnowledgeTopic[] = [
  ...practicalSkillsReadinessCh01,
  ...practicalSkillsReadinessCh02,
]

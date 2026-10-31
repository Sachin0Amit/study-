/**
 * Knowledge Universe — subject book: Research Methods (research-methods)
 * group: Humanities & Social Sciences · 2 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Research Methodology — 3 lessons
 *   02 Experimental Design — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { researchMethodsCh01 } from './01-research-methodology'
import { researchMethodsCh02 } from './02-experimental-design'

export const researchMethodsTopics: KnowledgeTopic[] = [
  ...researchMethodsCh01,
  ...researchMethodsCh02,
]

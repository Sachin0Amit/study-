/**
 * Knowledge Universe — subject book: Arabic (arabic)
 * group: Languages & Literature · 3 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Arabic Foundations — 1 lesson
 *   02 Arabic Grammar — 1 lesson
 *   03 Arabic Literature & Culture — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { arabicCh01 } from './01-arabic-foundations'
import { arabicCh02 } from './02-arabic-grammar'
import { arabicCh03 } from './03-arabic-literature-and-culture'

export const arabicTopics: KnowledgeTopic[] = [
  ...arabicCh01,
  ...arabicCh02,
  ...arabicCh03,
]

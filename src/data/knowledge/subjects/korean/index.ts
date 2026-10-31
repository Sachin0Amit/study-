/**
 * Knowledge Universe — subject book: Korean (korean)
 * group: Languages & Literature · 3 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Korean Foundations — 1 lesson
 *   02 Korean Grammar — 1 lesson
 *   03 Korean Literature & Culture — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { koreanCh01 } from './01-korean-foundations'
import { koreanCh02 } from './02-korean-grammar'
import { koreanCh03 } from './03-korean-literature-and-culture'

export const koreanTopics: KnowledgeTopic[] = [
  ...koreanCh01,
  ...koreanCh02,
  ...koreanCh03,
]

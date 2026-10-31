/**
 * Knowledge Universe — subject book: Mandarin Chinese (mandarin)
 * group: Languages & Literature · 3 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Mandarin Foundations — 3 lessons
 *   02 Mandarin Grammar — 1 lesson
 *   03 Classical Canon & Recitation — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { mandarinCh01 } from './01-mandarin-foundations'
import { mandarinCh02 } from './02-mandarin-grammar'
import { mandarinCh03 } from './03-classical-canon-and-recitation'

export const mandarinTopics: KnowledgeTopic[] = [
  ...mandarinCh01,
  ...mandarinCh02,
  ...mandarinCh03,
]

/**
 * Knowledge Universe — subject book: Spanish (spanish)
 * group: Languages & Literature · 3 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Verb Semantics — 1 lesson
 *   02 Practical Spanish — 1 lesson
 *   03 Verb Morphology — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { spanishCh01 } from './01-verb-semantics'
import { spanishCh02 } from './02-practical-spanish'
import { spanishCh03 } from './03-verb-morphology'

export const spanishTopics: KnowledgeTopic[] = [
  ...spanishCh01,
  ...spanishCh02,
  ...spanishCh03,
]

/**
 * Knowledge Universe — subject book: Russian (russian)
 * group: Languages & Literature · 3 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Russian Foundations — 1 lesson
 *   02 Russian Grammar — 1 lesson
 *   03 Russian Literature — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { russianCh01 } from './01-russian-foundations'
import { russianCh02 } from './02-russian-grammar'
import { russianCh03 } from './03-russian-literature'

export const russianTopics: KnowledgeTopic[] = [
  ...russianCh01,
  ...russianCh02,
  ...russianCh03,
]

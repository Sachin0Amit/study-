/**
 * Knowledge Universe — subject book: Linguistics (linguistics)
 * group: Languages & Literature · 4 chapters · 11 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 The Science of Language — 6 lessons
 *   02 Phonetics & Phonology — 3 lessons
 *   03 Language in Society — 1 lesson
 *   04 Language Acquisition — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { linguisticsCh01 } from './01-the-science-of-language'
import { linguisticsCh02 } from './02-phonetics-and-phonology'
import { linguisticsCh03 } from './03-language-in-society'
import { linguisticsCh04 } from './04-language-acquisition'

export const linguisticsTopics: KnowledgeTopic[] = [
  ...linguisticsCh01,
  ...linguisticsCh02,
  ...linguisticsCh03,
  ...linguisticsCh04,
]

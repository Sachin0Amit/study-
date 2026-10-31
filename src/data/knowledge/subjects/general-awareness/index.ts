/**
 * Knowledge Universe — subject book: General Awareness (general-awareness)
 * group: Aptitude & Test Preparation · 3 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Indian History Essentials — 1 lesson
 *   02 Static GK: Awards, Sports, Culture, Books & Organizations — 2 lessons
 *   03 The Current-Affairs Engine — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { generalAwarenessCh01 } from './01-indian-history-essentials'
import { generalAwarenessCh02 } from './02-static-gk-awards-sports-culture-books-and-organizations'
import { generalAwarenessCh03 } from './03-the-current-affairs-engine'

export const generalAwarenessTopics: KnowledgeTopic[] = [
  ...generalAwarenessCh01,
  ...generalAwarenessCh02,
  ...generalAwarenessCh03,
]

/**
 * Knowledge Universe — subject book: French (french)
 * group: Languages & Literature · 3 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 French Foundations — 1 lesson
 *   02 French Verbs — 1 lesson
 *   03 French Reading & Culture — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { frenchCh01 } from './01-french-foundations'
import { frenchCh02 } from './02-french-verbs'
import { frenchCh03 } from './03-french-reading-and-culture'

export const frenchTopics: KnowledgeTopic[] = [
  ...frenchCh01,
  ...frenchCh02,
  ...frenchCh03,
]

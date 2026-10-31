/**
 * Knowledge Universe — subject book: German (german)
 * group: Languages & Literature · 3 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 German Foundations — 3 lessons
 *   02 German Verbs — 1 lesson
 *   03 German Literature — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { germanCh01 } from './01-german-foundations'
import { germanCh02 } from './02-german-verbs'
import { germanCh03 } from './03-german-literature'

export const germanTopics: KnowledgeTopic[] = [
  ...germanCh01,
  ...germanCh02,
  ...germanCh03,
]

/**
 * Knowledge Universe — subject book: Anthropology (anthropology)
 * group: Humanities & Social Sciences · 2 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Cultural Anthropology — 3 lessons
 *   02 Archaeology — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { anthropologyCh01 } from './01-cultural-anthropology'
import { anthropologyCh02 } from './02-archaeology'

export const anthropologyTopics: KnowledgeTopic[] = [
  ...anthropologyCh01,
  ...anthropologyCh02,
]

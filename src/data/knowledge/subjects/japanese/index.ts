/**
 * Knowledge Universe — subject book: Japanese (japanese)
 * group: Languages & Literature · 3 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Sentence Structure — 1 lesson
 *   02 The Writing System — 1 lesson
 *   03 Verbs & Politeness — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { japaneseCh01 } from './01-sentence-structure'
import { japaneseCh02 } from './02-the-writing-system'
import { japaneseCh03 } from './03-verbs-and-politeness'

export const japaneseTopics: KnowledgeTopic[] = [
  ...japaneseCh01,
  ...japaneseCh02,
  ...japaneseCh03,
]

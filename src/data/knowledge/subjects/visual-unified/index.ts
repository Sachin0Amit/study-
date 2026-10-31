/**
 * Knowledge Universe — subject book: Visual Computing (visual-unified)
 * group: Computing Systems · 1 chapters · 1 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Extended Reality — 1 lesson
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book visual-complete (subject visual-computing) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { visualUnifiedCh01 } from './01-extended-reality'

export const visualUnifiedTopics: KnowledgeTopic[] = [
  ...visualUnifiedCh01,
]

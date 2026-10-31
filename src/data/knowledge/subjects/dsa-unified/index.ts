/**
 * Knowledge Universe — subject book: Data Structures & Algorithms (dsa-unified)
 * group: Computing Systems · 1 chapters · 1 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Hashing & Data Structures — 1 lesson
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book dsa-complete (subject dsa) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { dsaUnifiedCh01 } from './01-hashing-and-data-structures'

export const dsaUnifiedTopics: KnowledgeTopic[] = [
  ...dsaUnifiedCh01,
]

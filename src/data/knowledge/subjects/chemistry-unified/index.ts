/**
 * Knowledge Universe — subject book: Chemistry (chemistry-unified)
 * group: Foundations · 1 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Applied & Analytical Chemistry — 6 lessons
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book chem-complete (subject chemistry) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { chemistryUnifiedCh01 } from './01-applied-and-analytical-chemistry'

export const chemistryUnifiedTopics: KnowledgeTopic[] = [
  ...chemistryUnifiedCh01,
]

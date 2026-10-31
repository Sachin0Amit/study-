/**
 * Knowledge Universe — subject book: Manufacturing & Industrial Systems (manufacturing-unified)
 * group: Mechanical & Energy · 1 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Digital Manufacturing & Metrology — 3 lessons
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book manufacturing-complete (subject manufacturing-industrial) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { manufacturingUnifiedCh01 } from './01-digital-manufacturing-and-metrology'

export const manufacturingUnifiedTopics: KnowledgeTopic[] = [
  ...manufacturingUnifiedCh01,
]

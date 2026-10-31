/**
 * Knowledge Universe — subject book: Power Systems (power-unified)
 * group: Electrical & Power · 1 chapters · 1 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Power Systems — 1 lesson
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book power-complete (subject power-systems) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { powerUnifiedCh01 } from './01-power-systems'

export const powerUnifiedTopics: KnowledgeTopic[] = [
  ...powerUnifiedCh01,
]

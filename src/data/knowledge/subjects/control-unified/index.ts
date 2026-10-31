/**
 * Knowledge Universe — subject book: Control & Instrumentation (control-unified)
 * group: Electrical & Power · 1 chapters · 1 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Feedback Control Systems — 1 lesson
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book control-complete (subject control-instrumentation) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { controlUnifiedCh01 } from './01-feedback-control-systems'

export const controlUnifiedTopics: KnowledgeTopic[] = [
  ...controlUnifiedCh01,
]

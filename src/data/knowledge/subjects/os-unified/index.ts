/**
 * Knowledge Universe — subject book: Operating Systems (os-unified)
 * group: Computing Systems · 1 chapters · 1 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Operating Systems in Practice — 1 lesson
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book os-complete (subject operating-systems) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { osUnifiedCh01 } from './01-operating-systems-in-practice'

export const osUnifiedTopics: KnowledgeTopic[] = [
  ...osUnifiedCh01,
]

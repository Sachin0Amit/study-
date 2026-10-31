/**
 * Knowledge Universe — subject book: Java Programming (java-unified)
 * group: Programming & Software · 1 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Java in Practice — 4 lessons
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book java-complete (subject programming-java) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { javaUnifiedCh01 } from './01-java-in-practice'

export const javaUnifiedTopics: KnowledgeTopic[] = [
  ...javaUnifiedCh01,
]

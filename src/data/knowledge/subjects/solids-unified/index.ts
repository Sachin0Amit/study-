/**
 * Knowledge Universe — subject book: Mechanics of Solids & Materials (solids-unified)
 * group: Mechanical & Energy · 1 chapters · 1 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Materials Science — 1 lesson
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book solids-complete (subject solids-materials) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { solidsUnifiedCh01 } from './01-materials-science'

export const solidsUnifiedTopics: KnowledgeTopic[] = [
  ...solidsUnifiedCh01,
]

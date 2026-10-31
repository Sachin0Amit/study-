/**
 * Knowledge Universe — subject book: Hindi (hindi)
 * group: Languages & Literature · 3 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Hindi Foundations — 1 lesson
 *   02 Hindi Grammar — 1 lesson
 *   03 Hindi Literature — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { hindiCh01 } from './01-hindi-foundations'
import { hindiCh02 } from './02-hindi-grammar'
import { hindiCh03 } from './03-hindi-literature'

export const hindiTopics: KnowledgeTopic[] = [
  ...hindiCh01,
  ...hindiCh02,
  ...hindiCh03,
]

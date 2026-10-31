/**
 * Knowledge Universe — subject book: Literature (literature)
 * group: Languages & Literature · 4 chapters · 7 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 The Great Tradition — 1 lesson
 *   02 Reading the World — 2 lessons
 *   03 Literary Awards & the Canon — 1 lesson
 *   04 Literary Craft & Criticism — 3 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { literatureCh01 } from './01-the-great-tradition'
import { literatureCh02 } from './02-reading-the-world'
import { literatureCh03 } from './03-literary-awards-and-the-canon'
import { literatureCh04 } from './04-literary-craft-and-criticism'

export const literatureTopics: KnowledgeTopic[] = [
  ...literatureCh01,
  ...literatureCh02,
  ...literatureCh03,
  ...literatureCh04,
]

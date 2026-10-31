/**
 * Knowledge Universe — subject book: Religious Studies & Mythology (religion-mythology)
 * group: Humanities & Social Sciences · 4 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Eastern Traditions — 1 lesson
 *   02 Western Traditions — 1 lesson
 *   03 Sacred Texts & Canon — 1 lesson
 *   04 Comparative Mythology — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { religionMythologyCh01 } from './01-eastern-traditions'
import { religionMythologyCh02 } from './02-western-traditions'
import { religionMythologyCh03 } from './03-sacred-texts-and-canon'
import { religionMythologyCh04 } from './04-comparative-mythology'

export const religionMythologyTopics: KnowledgeTopic[] = [
  ...religionMythologyCh01,
  ...religionMythologyCh02,
  ...religionMythologyCh03,
  ...religionMythologyCh04,
]

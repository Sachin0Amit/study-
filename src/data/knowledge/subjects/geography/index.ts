/**
 * Knowledge Universe — subject book: Geography (geography)
 * group: Humanities & Social Sciences · 2 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Physical Geography — 1 lesson
 *   02 Human Geography — 4 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { geographyCh01 } from './01-physical-geography'
import { geographyCh02 } from './02-human-geography'

export const geographyTopics: KnowledgeTopic[] = [
  ...geographyCh01,
  ...geographyCh02,
]

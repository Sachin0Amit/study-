/**
 * Knowledge Universe — subject book: Botany (botany)
 * group: Life Sciences · 3 chapters · 8 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 The Plant Body — 1 lesson
 *   02 Plant Physiology — 5 lessons
 *   03 Reproduction & Life Cycles — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { botanyCh01 } from './01-the-plant-body'
import { botanyCh02 } from './02-plant-physiology'
import { botanyCh03 } from './03-reproduction-and-life-cycles'

export const botanyTopics: KnowledgeTopic[] = [
  ...botanyCh01,
  ...botanyCh02,
  ...botanyCh03,
]

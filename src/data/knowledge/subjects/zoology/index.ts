/**
 * Knowledge Universe — subject book: Zoology (zoology)
 * group: Life Sciences · 2 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Animal Diversity & Form — 2 lessons
 *   02 Senses & Behavior — 3 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { zoologyCh01 } from './01-animal-diversity-and-form'
import { zoologyCh02 } from './02-senses-and-behavior'

export const zoologyTopics: KnowledgeTopic[] = [
  ...zoologyCh01,
  ...zoologyCh02,
]

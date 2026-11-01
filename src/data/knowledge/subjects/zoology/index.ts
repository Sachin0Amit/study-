/**
 * Knowledge Universe — subject book: Zoology (zoology)
 * group: Life Sciences · 5 chapters · 11 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Animal Diversity & Form — 2 lessons
 *   02 Senses & Behavior — 3 lessons
 *   03 Comparative Physiology — 2 lessons (salvaged X62 increment, 2026-11-01)
 *   04 Comparative Digestion & Metabolism — 2 lessons (salvaged X62 increment)
 *   05 Animal Reproduction & Life Cycles — 2 lessons (salvaged X62 increment)
 */
import type { KnowledgeTopic } from '../../types'
import { zoologyCh01 } from './01-animal-diversity-and-form'
import { zoologyCh02 } from './02-senses-and-behavior'
import { zoologyCh03 } from './03-comparative-physiology'
import { zoologyCh04 } from './04-comparative-digestion-and-metabolism'
import { zoologyCh05 } from './05-animal-reproduction-and-life-cycles'

export const zoologyTopics: KnowledgeTopic[] = [
  ...zoologyCh01,
  ...zoologyCh02,
  ...zoologyCh03,
  ...zoologyCh04,
  ...zoologyCh05,
]

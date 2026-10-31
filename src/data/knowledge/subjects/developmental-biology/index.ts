/**
 * Knowledge Universe — subject book: Developmental Biology (developmental-biology)
 * group: Life Sciences · 5 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Building the Body — 1 lesson
 *   02 Cell Fate & Determination — 1 lesson
 *   03 Mechanisms & Model Organisms — 2 lessons
 *   04 Growth, Renewal & Regeneration — 1 lesson
 *   05 Evo-Devo: How Development Evolves — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { developmentalBiologyCh01 } from './01-building-the-body'
import { developmentalBiologyCh02 } from './02-cell-fate-and-determination'
import { developmentalBiologyCh03 } from './03-mechanisms-and-model-organisms'
import { developmentalBiologyCh04 } from './04-growth-renewal-and-regeneration'
import { developmentalBiologyCh05 } from './05-evo-devo-how-development-evolves'

export const developmentalBiologyTopics: KnowledgeTopic[] = [
  ...developmentalBiologyCh01,
  ...developmentalBiologyCh02,
  ...developmentalBiologyCh03,
  ...developmentalBiologyCh04,
  ...developmentalBiologyCh05,
]

/**
 * Knowledge Universe — subject book: Marine Biology (marine-biology)
 * group: Life Sciences · 4 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 The Blue Realm — 1 lesson
 *   02 Coastal Habitats & Communities — 1 lesson
 *   03 Plankton, Larvae & Recruitment — 1 lesson
 *   04 Fisheries & Ocean Conservation — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { marineBiologyCh01 } from './01-the-blue-realm'
import { marineBiologyCh02 } from './02-coastal-habitats-and-communities'
import { marineBiologyCh03 } from './03-plankton-larvae-and-recruitment'
import { marineBiologyCh04 } from './04-fisheries-and-ocean-conservation'

export const marineBiologyTopics: KnowledgeTopic[] = [
  ...marineBiologyCh01,
  ...marineBiologyCh02,
  ...marineBiologyCh03,
  ...marineBiologyCh04,
]

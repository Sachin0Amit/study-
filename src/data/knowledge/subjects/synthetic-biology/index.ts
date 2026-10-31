/**
 * Knowledge Universe — subject book: Synthetic Biology (synthetic-biology)
 * group: Life Sciences · 3 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Programming Living Cells — 2 lessons
 *   02 Genetic Circuits & Toolkits — 1 lesson
 *   03 Applications & Responsible Innovation — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { syntheticBiologyCh01 } from './01-programming-living-cells'
import { syntheticBiologyCh02 } from './02-genetic-circuits-and-toolkits'
import { syntheticBiologyCh03 } from './03-applications-and-responsible-innovation'

export const syntheticBiologyTopics: KnowledgeTopic[] = [
  ...syntheticBiologyCh01,
  ...syntheticBiologyCh02,
  ...syntheticBiologyCh03,
]

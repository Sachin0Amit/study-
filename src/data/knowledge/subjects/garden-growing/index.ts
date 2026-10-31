/**
 * Knowledge Universe — subject book: Garden & Growing (garden-growing)
 * group: Everyday Life Skills · 3 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Growing Things — 2 lessons
 *   02 Propagation: Making More Plants — 1 lesson
 *   03 Plant Health — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { gardenGrowingCh01 } from './01-growing-things'
import { gardenGrowingCh02 } from './02-propagation-making-more-plants'
import { gardenGrowingCh03 } from './03-plant-health'

export const gardenGrowingTopics: KnowledgeTopic[] = [
  ...gardenGrowingCh01,
  ...gardenGrowingCh02,
  ...gardenGrowingCh03,
]

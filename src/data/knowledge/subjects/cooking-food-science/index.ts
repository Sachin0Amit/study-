/**
 * Knowledge Universe — subject book: Cooking & Food Science (cooking-food-science)
 * group: Everyday Life Skills · 2 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Kitchen Chemistry & Flavor — 3 lessons
 *   02 Food Safety — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { cookingFoodScienceCh01 } from './01-kitchen-chemistry-and-flavor'
import { cookingFoodScienceCh02 } from './02-food-safety'

export const cookingFoodScienceTopics: KnowledgeTopic[] = [
  ...cookingFoodScienceCh01,
  ...cookingFoodScienceCh02,
]

/**
 * Knowledge Universe — subject book: Health, Nutrition & Fitness (health-nutrition-fitness)
 * group: Medicine & Health · 3 chapters · 7 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Nutrition Science — 2 lessons
 *   02 Exercise & Fitness — 2 lessons
 *   03 Sleep, Aging & Longevity — 3 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { healthNutritionFitnessCh01 } from './01-nutrition-science'
import { healthNutritionFitnessCh02 } from './02-exercise-and-fitness'
import { healthNutritionFitnessCh03 } from './03-sleep-aging-and-longevity'

export const healthNutritionFitnessTopics: KnowledgeTopic[] = [
  ...healthNutritionFitnessCh01,
  ...healthNutritionFitnessCh02,
  ...healthNutritionFitnessCh03,
]

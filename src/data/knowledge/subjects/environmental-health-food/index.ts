/**
 * Knowledge Universe — subject book: Environmental Health & Food Systems (environmental-health-food)
 * group: Natural Sciences · 2 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Pollution & Environmental Health — 2 lessons
 *   02 Agriculture & Food Systems — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { environmentalHealthFoodCh01 } from './01-pollution-and-environmental-health'
import { environmentalHealthFoodCh02 } from './02-agriculture-and-food-systems'

export const environmentalHealthFoodTopics: KnowledgeTopic[] = [
  ...environmentalHealthFoodCh01,
  ...environmentalHealthFoodCh02,
]

/**
 * Knowledge Universe — subject book: Water & Environmental Engineering (water-environmental-engineering)
 * group: Applied Engineering & Technology · 3 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Water Resources & Dams — 2 lessons
 *   02 Water & Wastewater Treatment — 2 lessons
 *   03 Environmental Engineering — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { waterEnvironmentalEngineeringCh01 } from './01-water-resources-and-dams'
import { waterEnvironmentalEngineeringCh02 } from './02-water-and-wastewater-treatment'
import { waterEnvironmentalEngineeringCh03 } from './03-environmental-engineering'

export const waterEnvironmentalEngineeringTopics: KnowledgeTopic[] = [
  ...waterEnvironmentalEngineeringCh01,
  ...waterEnvironmentalEngineeringCh02,
  ...waterEnvironmentalEngineeringCh03,
]

/**
 * Knowledge Universe — subject book: Chemical Engineering (chemical-engineering)
 * group: Applied Engineering & Technology · 3 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Process Engineering — 2 lessons
 *   02 Pipeline Transport — 1 lesson
 *   03 Process Safety — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { chemicalEngineeringCh01 } from './01-process-engineering'
import { chemicalEngineeringCh02 } from './02-pipeline-transport'
import { chemicalEngineeringCh03 } from './03-process-safety'

export const chemicalEngineeringTopics: KnowledgeTopic[] = [
  ...chemicalEngineeringCh01,
  ...chemicalEngineeringCh02,
  ...chemicalEngineeringCh03,
]

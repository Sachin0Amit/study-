/**
 * Knowledge Universe — subject book: Aerospace & Aviation (aerospace-aviation)
 * group: Applied Engineering & Technology · 3 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Aerodynamics — 1 lesson
 *   02 Rotorcraft & VTOL — 1 lesson
 *   03 Aviation & Flight — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { aerospaceAviationCh01 } from './01-aerodynamics'
import { aerospaceAviationCh02 } from './02-rotorcraft-and-vtol'
import { aerospaceAviationCh03 } from './03-aviation-and-flight'

export const aerospaceAviationTopics: KnowledgeTopic[] = [
  ...aerospaceAviationCh01,
  ...aerospaceAviationCh02,
  ...aerospaceAviationCh03,
]

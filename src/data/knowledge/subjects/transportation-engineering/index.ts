/**
 * Knowledge Universe — subject book: Transportation Engineering (transportation-engineering)
 * group: Applied Engineering & Technology · 2 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Highways, Traffic & Geometric Design — 2 lessons
 *   02 Railways & Transport Infrastructure — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { transportationEngineeringCh01 } from './01-highways-traffic-and-geometric-design'
import { transportationEngineeringCh02 } from './02-railways-and-transport-infrastructure'

export const transportationEngineeringTopics: KnowledgeTopic[] = [
  ...transportationEngineeringCh01,
  ...transportationEngineeringCh02,
]

/**
 * Knowledge Universe — subject book: Public Health (public-health)
 * group: Medicine & Health · 3 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Epidemiology — 2 lessons
 *   02 Immunization & Health Behavior — 2 lessons
 *   03 Health Equity & Systems — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { publicHealthCh01 } from './01-epidemiology'
import { publicHealthCh02 } from './02-immunization-and-health-behavior'
import { publicHealthCh03 } from './03-health-equity-and-systems'

export const publicHealthTopics: KnowledgeTopic[] = [
  ...publicHealthCh01,
  ...publicHealthCh02,
  ...publicHealthCh03,
]

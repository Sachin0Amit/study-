/**
 * Knowledge Universe — subject book: Computational Science & Simulation (computational-science)
 * group: Applied Engineering & Technology · 3 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Numerical Methods — 3 lessons
 *   02 Simulating Reality — 1 lesson
 *   03 Earth System Modeling — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { computationalScienceCh01 } from './01-numerical-methods'
import { computationalScienceCh02 } from './02-simulating-reality'
import { computationalScienceCh03 } from './03-earth-system-modeling'

export const computationalScienceTopics: KnowledgeTopic[] = [
  ...computationalScienceCh01,
  ...computationalScienceCh02,
  ...computationalScienceCh03,
]

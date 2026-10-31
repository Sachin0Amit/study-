/**
 * Knowledge Universe — subject book: Constitutional Law (constitutional-law)
 * group: Law & Justice · 2 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Structural Principles — 3 lessons
 *   02 Constitutional Law in Practice — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { constitutionalLawCh01 } from './01-structural-principles'
import { constitutionalLawCh02 } from './02-constitutional-law-in-practice'

export const constitutionalLawTopics: KnowledgeTopic[] = [
  ...constitutionalLawCh01,
  ...constitutionalLawCh02,
]

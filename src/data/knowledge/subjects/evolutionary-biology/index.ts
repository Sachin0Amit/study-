/**
 * Knowledge Universe — subject book: Evolutionary Biology (evolutionary-biology)
 * group: Life Sciences · 3 chapters · 9 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Evolution & Speciation — 5 lessons
 *   02 Human Evolution — 1 lesson
 *   03 Diversity & Systematics — 3 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { evolutionaryBiologyCh01 } from './01-evolution-and-speciation'
import { evolutionaryBiologyCh02 } from './02-human-evolution'
import { evolutionaryBiologyCh03 } from './03-diversity-and-systematics'

export const evolutionaryBiologyTopics: KnowledgeTopic[] = [
  ...evolutionaryBiologyCh01,
  ...evolutionaryBiologyCh02,
  ...evolutionaryBiologyCh03,
]

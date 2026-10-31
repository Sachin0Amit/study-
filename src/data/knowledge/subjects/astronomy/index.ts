/**
 * Knowledge Universe — subject book: Astronomy & Space Science (astronomy)
 * group: Natural Sciences · 3 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Astrophysics — 1 lesson
 *   02 Exploring the Cosmos — 4 lessons
 *   03 Beyond the Milky Way — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { astronomyCh01 } from './01-astrophysics'
import { astronomyCh02 } from './02-exploring-the-cosmos'
import { astronomyCh03 } from './03-beyond-the-milky-way'

export const astronomyTopics: KnowledgeTopic[] = [
  ...astronomyCh01,
  ...astronomyCh02,
  ...astronomyCh03,
]

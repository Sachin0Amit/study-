/**
 * Knowledge Universe — subject book: Architecture (architecture)
 * group: Arts & Culture · 3 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 History of Architecture — 4 lessons
 *   02 Structures & Materials — 1 lesson
 *   03 Design & Practice — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { architectureCh01 } from './01-history-of-architecture'
import { architectureCh02 } from './02-structures-and-materials'
import { architectureCh03 } from './03-design-and-practice'

export const architectureTopics: KnowledgeTopic[] = [
  ...architectureCh01,
  ...architectureCh02,
  ...architectureCh03,
]

/**
 * Knowledge Universe — subject book: Indian History (indian-history)
 * group: Humanities & Social Sciences · 2 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Ancient & Medieval India — 4 lessons
 *   02 Colonial India & the Freedom Struggle — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { indianHistoryCh01 } from './01-ancient-and-medieval-india'
import { indianHistoryCh02 } from './02-colonial-india-and-the-freedom-struggle'

export const indianHistoryTopics: KnowledgeTopic[] = [
  ...indianHistoryCh01,
  ...indianHistoryCh02,
]

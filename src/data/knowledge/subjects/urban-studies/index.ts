/**
 * Knowledge Universe — subject book: Urban Studies (urban-studies)
 * group: Humanities & Social Sciences · 2 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 The Built Environment — 3 lessons
 *   02 Urban Society & Change — 3 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { urbanStudiesCh01 } from './01-the-built-environment'
import { urbanStudiesCh02 } from './02-urban-society-and-change'

export const urbanStudiesTopics: KnowledgeTopic[] = [
  ...urbanStudiesCh01,
  ...urbanStudiesCh02,
]

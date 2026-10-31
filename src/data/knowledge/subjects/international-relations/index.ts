/**
 * Knowledge Universe — subject book: International Relations & Security (international-relations)
 * group: Humanities & Social Sciences · 3 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 International Relations — 2 lessons
 *   02 Foreign Policy & Security — 1 lesson
 *   03 Defence & the Armed Forces — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { internationalRelationsCh01 } from './01-international-relations'
import { internationalRelationsCh02 } from './02-foreign-policy-and-security'
import { internationalRelationsCh03 } from './03-defence-and-the-armed-forces'

export const internationalRelationsTopics: KnowledgeTopic[] = [
  ...internationalRelationsCh01,
  ...internationalRelationsCh02,
  ...internationalRelationsCh03,
]

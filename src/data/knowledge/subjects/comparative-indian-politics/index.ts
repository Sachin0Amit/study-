/**
 * Knowledge Universe — subject book: Comparative Politics & Indian Polity (comparative-indian-politics)
 * group: Humanities & Social Sciences · 2 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Comparative Politics — 2 lessons
 *   02 Indian Polity — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { comparativeIndianPoliticsCh01 } from './01-comparative-politics'
import { comparativeIndianPoliticsCh02 } from './02-indian-polity'

export const comparativeIndianPoliticsTopics: KnowledgeTopic[] = [
  ...comparativeIndianPoliticsCh01,
  ...comparativeIndianPoliticsCh02,
]

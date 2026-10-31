/**
 * Knowledge Universe — subject book: Construction, Geomatics & Underground Engineering (construction-geomatics)
 * group: Applied Engineering & Technology · 3 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Geomatics & Surveying — 1 lesson
 *   02 Tunnels & Underground Engineering — 1 lesson
 *   03 How Buildings Work — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { constructionGeomaticsCh01 } from './01-geomatics-and-surveying'
import { constructionGeomaticsCh02 } from './02-tunnels-and-underground-engineering'
import { constructionGeomaticsCh03 } from './03-how-buildings-work'

export const constructionGeomaticsTopics: KnowledgeTopic[] = [
  ...constructionGeomaticsCh01,
  ...constructionGeomaticsCh02,
  ...constructionGeomaticsCh03,
]

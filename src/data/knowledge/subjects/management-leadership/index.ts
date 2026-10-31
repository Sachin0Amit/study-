/**
 * Knowledge Universe — subject book: Management & Leadership (management-leadership)
 * group: Commerce, Economics & Business · 2 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Organisations & People — 2 lessons
 *   02 Leadership, Deals & Decisions — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { managementLeadershipCh01 } from './01-organisations-and-people'
import { managementLeadershipCh02 } from './02-leadership-deals-and-decisions'

export const managementLeadershipTopics: KnowledgeTopic[] = [
  ...managementLeadershipCh01,
  ...managementLeadershipCh02,
]

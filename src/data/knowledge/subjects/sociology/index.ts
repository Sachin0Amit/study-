/**
 * Knowledge Universe — subject book: Sociology (sociology)
 * group: Humanities & Social Sciences · 5 chapters · 10 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Classical Theory — 1 lesson
 *   02 Social Structure & Institutions — 5 lessons
 *   03 Culture — 1 lesson
 *   04 Collective Dynamics & Networks — 2 lessons
 *   05 Social Control — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { sociologyCh01 } from './01-classical-theory'
import { sociologyCh02 } from './02-social-structure-and-institutions'
import { sociologyCh03 } from './03-culture'
import { sociologyCh04 } from './04-collective-dynamics-and-networks'
import { sociologyCh05 } from './05-social-control'

export const sociologyTopics: KnowledgeTopic[] = [
  ...sociologyCh01,
  ...sociologyCh02,
  ...sociologyCh03,
  ...sociologyCh04,
  ...sociologyCh05,
]

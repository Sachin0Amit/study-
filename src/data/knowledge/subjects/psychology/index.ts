/**
 * Knowledge Universe — subject book: Psychology (psychology)
 * group: Humanities & Social Sciences · 6 chapters · 12 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Cognitive & Behavioral Psychology — 3 lessons
 *   02 Developmental Psychology — 1 lesson
 *   03 Social & Interpersonal Psychology — 3 lessons
 *   04 Personality & Individual Differences — 2 lessons
 *   05 Stress & Clinical Psychology — 2 lessons
 *   06 Learning and Behaviour — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { psychologyCh01 } from './01-cognitive-and-behavioral-psychology'
import { psychologyCh02 } from './02-developmental-psychology'
import { psychologyCh03 } from './03-social-and-interpersonal-psychology'
import { psychologyCh04 } from './04-personality-and-individual-differences'
import { psychologyCh05 } from './05-stress-and-clinical-psychology'
import { psychologyCh06 } from './06-learning-and-behaviour'

export const psychologyTopics: KnowledgeTopic[] = [
  ...psychologyCh01,
  ...psychologyCh02,
  ...psychologyCh03,
  ...psychologyCh04,
  ...psychologyCh05,
  ...psychologyCh06,
]

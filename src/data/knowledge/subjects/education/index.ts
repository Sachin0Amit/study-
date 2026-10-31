/**
 * Knowledge Universe — subject book: Education (education)
 * group: Humanities & Social Sciences · 3 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Teaching & Pedagogy — 2 lessons
 *   02 Higher Education — 1 lesson
 *   03 Learning Systems — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { educationCh01 } from './01-teaching-and-pedagogy'
import { educationCh02 } from './02-higher-education'
import { educationCh03 } from './03-learning-systems'

export const educationTopics: KnowledgeTopic[] = [
  ...educationCh01,
  ...educationCh02,
  ...educationCh03,
]

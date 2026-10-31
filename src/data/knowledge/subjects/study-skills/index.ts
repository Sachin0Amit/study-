/**
 * Knowledge Universe — subject book: Study Skills & Learning Science (study-skills)
 * group: Foundations · 3 chapters · 16 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 The Science of Learning — 9 lessons
 *   02 Study Systems — 5 lessons
 *   03 Practice, Performance & Expertise — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { studySkillsCh01 } from './01-the-science-of-learning'
import { studySkillsCh02 } from './02-study-systems'
import { studySkillsCh03 } from './03-practice-performance-and-expertise'

export const studySkillsTopics: KnowledgeTopic[] = [
  ...studySkillsCh01,
  ...studySkillsCh02,
  ...studySkillsCh03,
]

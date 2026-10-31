/**
 * Knowledge Universe — subject book: Political Theory (political-theory)
 * group: Humanities & Social Sciences · 2 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Political Ideologies — 3 lessons
 *   02 History of Political Thought — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { politicalTheoryCh01 } from './01-political-ideologies'
import { politicalTheoryCh02 } from './02-history-of-political-thought'

export const politicalTheoryTopics: KnowledgeTopic[] = [
  ...politicalTheoryCh01,
  ...politicalTheoryCh02,
]

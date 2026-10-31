/**
 * Knowledge Universe — subject book: Philosophy (philosophy)
 * group: Humanities & Social Sciences · 5 chapters · 10 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Epistemology & Philosophy of Science — 2 lessons
 *   02 Ethics & Value Theory — 3 lessons
 *   03 Philosophy of Mind — 3 lessons
 *   04 Political Philosophy & Legitimacy — 1 lesson
 *   05 Intellectual History — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { philosophyCh01 } from './01-epistemology-and-philosophy-of-science'
import { philosophyCh02 } from './02-ethics-and-value-theory'
import { philosophyCh03 } from './03-philosophy-of-mind'
import { philosophyCh04 } from './04-political-philosophy-and-legitimacy'
import { philosophyCh05 } from './05-intellectual-history'

export const philosophyTopics: KnowledgeTopic[] = [
  ...philosophyCh01,
  ...philosophyCh02,
  ...philosophyCh03,
  ...philosophyCh04,
  ...philosophyCh05,
]

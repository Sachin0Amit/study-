/**
 * Knowledge Universe — subject book: Logical Reasoning (logical-reasoning)
 * group: Aptitude & Test Preparation · 9 chapters · 13 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Foundations of Logical Thinking — 1 lesson
 *   02 Deduction: Syllogisms & Coded Logic — 1 lesson
 *   03 Series, Analogies & Classification — 1 lesson
 *   04 Relations, Directions & Ordering — 1 lesson
 *   05 Arrangements & Puzzles — 1 lesson
 *   06 Clocks, Calendars & Mathematical Logic — 1 lesson
 *   07 Non-Verbal & Abstract Reasoning — 2 lessons
 *   08 Critical Reasoning — 3 lessons
 *   09 Decision Making & Judgement — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { logicalReasoningCh01 } from './01-foundations-of-logical-thinking'
import { logicalReasoningCh02 } from './02-deduction-syllogisms-and-coded-logic'
import { logicalReasoningCh03 } from './03-series-analogies-and-classification'
import { logicalReasoningCh04 } from './04-relations-directions-and-ordering'
import { logicalReasoningCh05 } from './05-arrangements-and-puzzles'
import { logicalReasoningCh06 } from './06-clocks-calendars-and-mathematical-logic'
import { logicalReasoningCh07 } from './07-non-verbal-and-abstract-reasoning'
import { logicalReasoningCh08 } from './08-critical-reasoning'
import { logicalReasoningCh09 } from './09-decision-making-and-judgement'

export const logicalReasoningTopics: KnowledgeTopic[] = [
  ...logicalReasoningCh01,
  ...logicalReasoningCh02,
  ...logicalReasoningCh03,
  ...logicalReasoningCh04,
  ...logicalReasoningCh05,
  ...logicalReasoningCh06,
  ...logicalReasoningCh07,
  ...logicalReasoningCh08,
  ...logicalReasoningCh09,
]

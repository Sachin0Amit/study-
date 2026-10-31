/**
 * Knowledge Universe — subject book: Microeconomics (microeconomics)
 * group: Commerce, Economics & Business · 5 chapters · 7 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 The Economic Way of Thinking — 1 lesson
 *   02 How Markets Work — 2 lessons
 *   03 Consumers, Producers & Welfare — 2 lessons
 *   04 When Markets Fail — 1 lesson
 *   05 Behavioral Economics — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { microeconomicsCh01 } from './01-the-economic-way-of-thinking'
import { microeconomicsCh02 } from './02-how-markets-work'
import { microeconomicsCh03 } from './03-consumers-producers-and-welfare'
import { microeconomicsCh04 } from './04-when-markets-fail'
import { microeconomicsCh05 } from './05-behavioral-economics'

export const microeconomicsTopics: KnowledgeTopic[] = [
  ...microeconomicsCh01,
  ...microeconomicsCh02,
  ...microeconomicsCh03,
  ...microeconomicsCh04,
  ...microeconomicsCh05,
]

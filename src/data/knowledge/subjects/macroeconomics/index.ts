/**
 * Knowledge Universe — subject book: Macroeconomics (macroeconomics)
 * group: Commerce, Economics & Business · 4 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 National Income & the Vital Signs — 2 lessons
 *   02 Money & Monetary Policy — 2 lessons
 *   03 Fiscal Policy — 1 lesson
 *   04 The Open Economy — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { macroeconomicsCh01 } from './01-national-income-and-the-vital-signs'
import { macroeconomicsCh02 } from './02-money-and-monetary-policy'
import { macroeconomicsCh03 } from './03-fiscal-policy'
import { macroeconomicsCh04 } from './04-the-open-economy'

export const macroeconomicsTopics: KnowledgeTopic[] = [
  ...macroeconomicsCh01,
  ...macroeconomicsCh02,
  ...macroeconomicsCh03,
  ...macroeconomicsCh04,
]

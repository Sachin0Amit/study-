/**
 * Knowledge Universe — subject book: Quantitative Aptitude (quantitative-aptitude)
 * group: Aptitude & Test Preparation · 3 chapters · 7 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Number System Foundations — 5 lessons
 *   02 Statistics & Data Interpretation — 1 lesson
 *   03 Data Sufficiency & Quantity Comparison — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { quantitativeAptitudeCh01 } from './01-number-system-foundations'
import { quantitativeAptitudeCh02 } from './02-statistics-and-data-interpretation'
import { quantitativeAptitudeCh03 } from './03-data-sufficiency-and-quantity-comparison'

export const quantitativeAptitudeTopics: KnowledgeTopic[] = [
  ...quantitativeAptitudeCh01,
  ...quantitativeAptitudeCh02,
  ...quantitativeAptitudeCh03,
]

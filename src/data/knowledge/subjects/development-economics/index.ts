/**
 * Knowledge Universe — subject book: Development & Political Economy (development-economics)
 * group: Commerce, Economics & Business · 3 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Poverty, Labour & Development — 1 lesson
 *   02 India & Comparative Development — 1 lesson
 *   03 Political Economy — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { developmentEconomicsCh01 } from './01-poverty-labour-and-development'
import { developmentEconomicsCh02 } from './02-india-and-comparative-development'
import { developmentEconomicsCh03 } from './03-political-economy'

export const developmentEconomicsTopics: KnowledgeTopic[] = [
  ...developmentEconomicsCh01,
  ...developmentEconomicsCh02,
  ...developmentEconomicsCh03,
]

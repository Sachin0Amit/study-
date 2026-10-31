/**
 * Knowledge Universe — subject book: Regulatory & Workplace Law (regulatory-workplace-law)
 * group: Law & Justice · 3 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Tax & Administrative Law — 1 lesson
 *   02 Employment Law & the Workplace — 1 lesson
 *   03 IP & Media Law — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { regulatoryWorkplaceLawCh01 } from './01-tax-and-administrative-law'
import { regulatoryWorkplaceLawCh02 } from './02-employment-law-and-the-workplace'
import { regulatoryWorkplaceLawCh03 } from './03-ip-and-media-law'

export const regulatoryWorkplaceLawTopics: KnowledgeTopic[] = [
  ...regulatoryWorkplaceLawCh01,
  ...regulatoryWorkplaceLawCh02,
  ...regulatoryWorkplaceLawCh03,
]

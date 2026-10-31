/**
 * Knowledge Universe — subject book: Clinical Medicine (clinical-medicine)
 * group: Medicine & Health · 4 chapters · 9 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Chronic & Metabolic Disease — 2 lessons
 *   02 Cancer — 1 lesson
 *   03 Senses & Organs — 4 lessons
 *   04 Pain, Bones & Joints — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { clinicalMedicineCh01 } from './01-chronic-and-metabolic-disease'
import { clinicalMedicineCh02 } from './02-cancer'
import { clinicalMedicineCh03 } from './03-senses-and-organs'
import { clinicalMedicineCh04 } from './04-pain-bones-and-joints'

export const clinicalMedicineTopics: KnowledgeTopic[] = [
  ...clinicalMedicineCh01,
  ...clinicalMedicineCh02,
  ...clinicalMedicineCh03,
  ...clinicalMedicineCh04,
]

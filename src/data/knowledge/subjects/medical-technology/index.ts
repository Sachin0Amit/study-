/**
 * Knowledge Universe — subject book: Medical Technology (medical-technology)
 * group: Medicine & Health · 3 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Biomedical Imaging — 2 lessons
 *   02 Laboratory Medicine — 1 lesson
 *   03 Prosthetics & Human–Machine Interfaces — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { medicalTechnologyCh01 } from './01-biomedical-imaging'
import { medicalTechnologyCh02 } from './02-laboratory-medicine'
import { medicalTechnologyCh03 } from './03-prosthetics-and-human-machine-interfaces'

export const medicalTechnologyTopics: KnowledgeTopic[] = [
  ...medicalTechnologyCh01,
  ...medicalTechnologyCh02,
  ...medicalTechnologyCh03,
]

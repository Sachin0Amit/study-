/**
 * Knowledge Universe — subject book: Medicines, First Aid & Reproductive Health (medicines-emergency-care)
 * group: Medicine & Health · 3 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Pharmacology & Clinical Reasoning — 2 lessons
 *   02 First Aid & Resuscitation — 2 lessons
 *   03 Sexual & Reproductive Health — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { medicinesEmergencyCareCh01 } from './01-pharmacology-and-clinical-reasoning'
import { medicinesEmergencyCareCh02 } from './02-first-aid-and-resuscitation'
import { medicinesEmergencyCareCh03 } from './03-sexual-and-reproductive-health'

export const medicinesEmergencyCareTopics: KnowledgeTopic[] = [
  ...medicinesEmergencyCareCh01,
  ...medicinesEmergencyCareCh02,
  ...medicinesEmergencyCareCh03,
]

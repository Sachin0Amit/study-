/**
 * Knowledge Universe — field file 15: Health & Wellness
 *
 * Evidence-based foundations for sleep, strength, and public health — the science behind feeling and functioning better.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Mental Health (7), Public Health (6), Health, Nutrition & Fitness (7), Medicines, First Aid & Reproductive Health (6), Clinical Medicine (9)
 */
import type { KnowledgeDomainFile } from '../types'
import { mentalHealthTopics } from '../subjects/mental-health'
import { publicHealthTopics } from '../subjects/public-health'
import { healthNutritionFitnessTopics } from '../subjects/health-nutrition-fitness'
import { medicinesEmergencyCareTopics } from '../subjects/medicines-emergency-care'
import { clinicalMedicineTopics } from '../subjects/clinical-medicine'

export const healthWellness: KnowledgeDomainFile = {
  domain: 'Health & Wellness',
  blurb: 'Evidence-based foundations for sleep, strength, and public health — the science behind feeling and functioning better.',
  topics: [
  // Mental Health — 7 topics in this field
  ...mentalHealthTopics.filter((t) => t.domain === 'Health & Wellness'),
  // Public Health — 6 topics in this field
  ...publicHealthTopics.filter((t) => t.domain === 'Health & Wellness'),
  // Health, Nutrition & Fitness — 7 topics in this field
  ...healthNutritionFitnessTopics.filter((t) => t.domain === 'Health & Wellness'),
  // Medicines, First Aid & Reproductive Health — 6 topics in this field
  ...medicinesEmergencyCareTopics.filter((t) => t.domain === 'Health & Wellness'),
  // Clinical Medicine — 9 topics in this field
  ...clinicalMedicineTopics.filter((t) => t.domain === 'Health & Wellness'),
  ],
}

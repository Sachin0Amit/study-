/**
 * Knowledge Universe — field file 03: Physical Sciences
 *
 * Physics and chemistry from rotating bodies to reacting molecules — the quantitative rules of matter and energy.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Physics (7), Chemistry (6), Astronomy & Space Science (6), Earth & Atmospheric Sciences (7)
 */
import type { KnowledgeDomainFile } from '../types'
import { physicsUnifiedTopics } from '../subjects/physics-unified'
import { chemistryUnifiedTopics } from '../subjects/chemistry-unified'
import { astronomyTopics } from '../subjects/astronomy'
import { earthSciencesTopics } from '../subjects/earth-sciences'

export const physicalSciences: KnowledgeDomainFile = {
  domain: 'Physical Sciences',
  blurb: 'Physics and chemistry from rotating bodies to reacting molecules — the quantitative rules of matter and energy.',
  topics: [
  // Physics — 7 topics in this field
  ...physicsUnifiedTopics.filter((t) => t.domain === 'Physical Sciences'),
  // Chemistry — 6 topics in this field
  ...chemistryUnifiedTopics.filter((t) => t.domain === 'Physical Sciences'),
  // Astronomy & Space Science — 6 topics in this field
  ...astronomyTopics.filter((t) => t.domain === 'Physical Sciences'),
  // Earth & Atmospheric Sciences — 7 topics in this field
  ...earthSciencesTopics.filter((t) => t.domain === 'Physical Sciences'),
  ],
}

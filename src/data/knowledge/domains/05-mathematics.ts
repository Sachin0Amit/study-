/**
 * Knowledge Universe — field file 05: Mathematics
 *
 * Calculus, probability, and linear algebra — the language of change, evidence, and structure.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Mathematics (27)
 */
import type { KnowledgeDomainFile } from '../types'
import { mathematicsUnifiedTopics } from '../subjects/mathematics-unified'

export const mathematicsDomain: KnowledgeDomainFile = {
  domain: 'Mathematics',
  blurb: 'Calculus, probability, and linear algebra — the language of change, evidence, and structure.',
  topics: [
  // Mathematics — 27 topics in this field
  ...mathematicsUnifiedTopics.filter((t) => t.domain === 'Mathematics'),
  ],
}

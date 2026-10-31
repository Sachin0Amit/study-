/**
 * Knowledge Universe — field file 01: Foundation Learning
 *
 * Study skills, reading strategy, and practical numeracy — the bedrock abilities that make every other domain easier to learn.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Research Methods (1), Logical Reasoning (3), Study Skills & Learning Science (16), English & Comprehension (2), Mathematics (1)
 */
import type { KnowledgeDomainFile } from '../types'
import { researchMethodsTopics } from '../subjects/research-methods'
import { logicalReasoningTopics } from '../subjects/logical-reasoning'
import { studySkillsTopics } from '../subjects/study-skills'
import { englishUnifiedTopics } from '../subjects/english-unified'
import { mathematicsUnifiedTopics } from '../subjects/mathematics-unified'

export const foundationLearning: KnowledgeDomainFile = {
  domain: 'Foundation Learning',
  blurb: 'Study skills, reading strategy, and practical numeracy — the bedrock abilities that make every other domain easier to learn.',
  topics: [
  // Research Methods — 1 topic in this field
  ...researchMethodsTopics.filter((t) => t.domain === 'Foundation Learning'),
  // Logical Reasoning — 3 topics in this field
  ...logicalReasoningTopics.filter((t) => t.domain === 'Foundation Learning'),
  // Study Skills & Learning Science — 16 topics in this field
  ...studySkillsTopics.filter((t) => t.domain === 'Foundation Learning'),
  // English & Comprehension — 2 topics in this field
  ...englishUnifiedTopics.filter((t) => t.domain === 'Foundation Learning'),
  // Mathematics — 1 topic in this field
  ...mathematicsUnifiedTopics.filter((t) => t.domain === 'Foundation Learning'),
  ],
}

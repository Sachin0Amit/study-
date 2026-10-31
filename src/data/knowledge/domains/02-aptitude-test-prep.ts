/**
 * Knowledge Universe — field file 02: Aptitude & Test Preparation
 *
 * Quantitative aptitude, logical reasoning and general awareness — the speed-and-pattern layer every aptitude test examines, from absolute basics to mastery.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Quantitative Aptitude (7), Logical Reasoning (5), General Awareness (4)
 */
import type { KnowledgeDomainFile } from '../types'
import { quantitativeAptitudeTopics } from '../subjects/quantitative-aptitude'
import { logicalReasoningTopics } from '../subjects/logical-reasoning'
import { generalAwarenessTopics } from '../subjects/general-awareness'

export const aptitudeTestPrep: KnowledgeDomainFile = {
  domain: 'Aptitude & Test Preparation',
  blurb: 'Quantitative aptitude, logical reasoning and general awareness — the speed-and-pattern layer every aptitude test examines, from absolute basics to mastery.',
  topics: [
  // Quantitative Aptitude — 7 topics in this field
  ...quantitativeAptitudeTopics.filter((t) => t.domain === 'Aptitude & Test Preparation'),
  // Logical Reasoning — 5 topics in this field
  ...logicalReasoningTopics.filter((t) => t.domain === 'Aptitude & Test Preparation'),
  // General Awareness — 4 topics in this field
  ...generalAwarenessTopics.filter((t) => t.domain === 'Aptitude & Test Preparation'),
  ],
}

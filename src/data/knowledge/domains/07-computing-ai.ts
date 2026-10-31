/**
 * Knowledge Universe — field file 07: Computing & AI
 *
 * The algorithms, models and mathematics behind modern software — from hash tables to deep learning and cryptography.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Computer & Digital Literacy (8), Java Programming (4), Data Structures & Algorithms (1), AI, Machine Learning & Data Science (2), Cybersecurity (2), Operating Systems (1)
 */
import type { KnowledgeDomainFile } from '../types'
import { computerLiteracyTopics } from '../subjects/computer-literacy'
import { javaUnifiedTopics } from '../subjects/java-unified'
import { dsaUnifiedTopics } from '../subjects/dsa-unified'
import { aiUnifiedTopics } from '../subjects/ai-unified'
import { cybersecurityUnifiedTopics } from '../subjects/cybersecurity-unified'
import { osUnifiedTopics } from '../subjects/os-unified'

export const computingAi: KnowledgeDomainFile = {
  domain: 'Computing & AI',
  blurb: 'The algorithms, models and mathematics behind modern software — from hash tables to deep learning and cryptography.',
  topics: [
  // Computer & Digital Literacy — 8 topics in this field
  ...computerLiteracyTopics.filter((t) => t.domain === 'Computing & AI'),
  // Java Programming — 4 topics in this field
  ...javaUnifiedTopics.filter((t) => t.domain === 'Computing & AI'),
  // Data Structures & Algorithms — 1 topic in this field
  ...dsaUnifiedTopics.filter((t) => t.domain === 'Computing & AI'),
  // AI, Machine Learning & Data Science — 2 topics in this field
  ...aiUnifiedTopics.filter((t) => t.domain === 'Computing & AI'),
  // Cybersecurity — 2 topics in this field
  ...cybersecurityUnifiedTopics.filter((t) => t.domain === 'Computing & AI'),
  // Operating Systems — 1 topic in this field
  ...osUnifiedTopics.filter((t) => t.domain === 'Computing & AI'),
  ],
}

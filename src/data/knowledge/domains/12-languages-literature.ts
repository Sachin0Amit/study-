/**
 * Knowledge Universe — field file 12: Languages & World Literature
 *
 * The science of learning languages and the literatures they carry — from grammar glue to great texts.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: German (5), Mandarin Chinese (5), Arabic (3), Korean (3), Russian (3), Hindi (3), French (3), Literature (7), English & Comprehension (13), Logical Reasoning (3), Linguistics (11), Spanish (3), Japanese (3)
 */
import type { KnowledgeDomainFile } from '../types'
import { germanTopics } from '../subjects/german'
import { mandarinTopics } from '../subjects/mandarin'
import { arabicTopics } from '../subjects/arabic'
import { koreanTopics } from '../subjects/korean'
import { russianTopics } from '../subjects/russian'
import { hindiTopics } from '../subjects/hindi'
import { frenchTopics } from '../subjects/french'
import { literatureTopics } from '../subjects/literature'
import { englishUnifiedTopics } from '../subjects/english-unified'
import { logicalReasoningTopics } from '../subjects/logical-reasoning'
import { linguisticsTopics } from '../subjects/linguistics'
import { spanishTopics } from '../subjects/spanish'
import { japaneseTopics } from '../subjects/japanese'

export const languagesLiterature: KnowledgeDomainFile = {
  domain: 'Languages & World Literature',
  blurb: 'The science of learning languages and the literatures they carry — from grammar glue to great texts.',
  topics: [
  // German — 5 topics in this field
  ...germanTopics.filter((t) => t.domain === 'Languages & World Literature'),
  // Mandarin Chinese — 5 topics in this field
  ...mandarinTopics.filter((t) => t.domain === 'Languages & World Literature'),
  // Arabic — 3 topics in this field
  ...arabicTopics.filter((t) => t.domain === 'Languages & World Literature'),
  // Korean — 3 topics in this field
  ...koreanTopics.filter((t) => t.domain === 'Languages & World Literature'),
  // Russian — 3 topics in this field
  ...russianTopics.filter((t) => t.domain === 'Languages & World Literature'),
  // Hindi — 3 topics in this field
  ...hindiTopics.filter((t) => t.domain === 'Languages & World Literature'),
  // French — 3 topics in this field
  ...frenchTopics.filter((t) => t.domain === 'Languages & World Literature'),
  // Literature — 7 topics in this field
  ...literatureTopics.filter((t) => t.domain === 'Languages & World Literature'),
  // English & Comprehension — 13 topics in this field
  ...englishUnifiedTopics.filter((t) => t.domain === 'Languages & World Literature'),
  // Logical Reasoning — 3 topics in this field
  ...logicalReasoningTopics.filter((t) => t.domain === 'Languages & World Literature'),
  // Linguistics — 11 topics in this field
  ...linguisticsTopics.filter((t) => t.domain === 'Languages & World Literature'),
  // Spanish — 3 topics in this field
  ...spanishTopics.filter((t) => t.domain === 'Languages & World Literature'),
  // Japanese — 3 topics in this field
  ...japaneseTopics.filter((t) => t.domain === 'Languages & World Literature'),
  ],
}

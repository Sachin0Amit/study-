/**
 * Knowledge Universe — field file 11: Humanities
 *
 * History, philosophy and the recorded human past — how people made meaning before and beyond the modern world.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Religious Studies & Mythology (4), East Asian History (4), Economic History (5), Anthropology (1), Ancient & Early Modern History (4), Modern World History (9), Indian History (6), Philosophy (10), Art History (2)
 */
import type { KnowledgeDomainFile } from '../types'
import { religionMythologyTopics } from '../subjects/religion-mythology'
import { eastAsianHistoryTopics } from '../subjects/east-asian-history'
import { economicHistoryTopics } from '../subjects/economic-history'
import { anthropologyTopics } from '../subjects/anthropology'
import { ancientEarlyModernHistoryTopics } from '../subjects/ancient-early-modern-history'
import { modernWorldHistoryTopics } from '../subjects/modern-world-history'
import { indianHistoryTopics } from '../subjects/indian-history'
import { philosophyTopics } from '../subjects/philosophy'
import { artHistoryTopics } from '../subjects/art-history'

export const humanitiesDomain: KnowledgeDomainFile = {
  domain: 'Humanities',
  blurb: 'History, philosophy and the recorded human past — how people made meaning before and beyond the modern world.',
  topics: [
  // Religious Studies & Mythology — 4 topics in this field
  ...religionMythologyTopics.filter((t) => t.domain === 'Humanities'),
  // East Asian History — 4 topics in this field
  ...eastAsianHistoryTopics.filter((t) => t.domain === 'Humanities'),
  // Economic History — 5 topics in this field
  ...economicHistoryTopics.filter((t) => t.domain === 'Humanities'),
  // Anthropology — 1 topic in this field
  ...anthropologyTopics.filter((t) => t.domain === 'Humanities'),
  // Ancient & Early Modern History — 4 topics in this field
  ...ancientEarlyModernHistoryTopics.filter((t) => t.domain === 'Humanities'),
  // Modern World History — 9 topics in this field
  ...modernWorldHistoryTopics.filter((t) => t.domain === 'Humanities'),
  // Indian History — 6 topics in this field
  ...indianHistoryTopics.filter((t) => t.domain === 'Humanities'),
  // Philosophy — 10 topics in this field
  ...philosophyTopics.filter((t) => t.domain === 'Humanities'),
  // Art History — 2 topics in this field
  ...artHistoryTopics.filter((t) => t.domain === 'Humanities'),
  ],
}

/**
 * Knowledge Universe — field file 16: Arts & Culture
 *
 * Composition, harmony, and montage — the working craft knowledge behind images, chords, and cuts.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Art History (3), Visual Arts (8), Music (9), Film & Cinema (5), Animation (7), Design (8), Performing Arts (8), Architecture (6), English & Comprehension (1)
 */
import type { KnowledgeDomainFile } from '../types'
import { artHistoryTopics } from '../subjects/art-history'
import { visualArtsTopics } from '../subjects/visual-arts'
import { musicTopics } from '../subjects/music'
import { filmCinemaTopics } from '../subjects/film-cinema'
import { animationTopics } from '../subjects/animation'
import { designTopics } from '../subjects/design'
import { performingArtsTopics } from '../subjects/performing-arts'
import { architectureTopics } from '../subjects/architecture'
import { englishUnifiedTopics } from '../subjects/english-unified'

export const artsCulture: KnowledgeDomainFile = {
  domain: 'Arts & Culture',
  blurb: 'Composition, harmony, and montage — the working craft knowledge behind images, chords, and cuts.',
  topics: [
  // Art History — 3 topics in this field
  ...artHistoryTopics.filter((t) => t.domain === 'Arts & Culture'),
  // Visual Arts — 8 topics in this field
  ...visualArtsTopics.filter((t) => t.domain === 'Arts & Culture'),
  // Music — 9 topics in this field
  ...musicTopics.filter((t) => t.domain === 'Arts & Culture'),
  // Film & Cinema — 5 topics in this field
  ...filmCinemaTopics.filter((t) => t.domain === 'Arts & Culture'),
  // Animation — 7 topics in this field
  ...animationTopics.filter((t) => t.domain === 'Arts & Culture'),
  // Design — 8 topics in this field
  ...designTopics.filter((t) => t.domain === 'Arts & Culture'),
  // Performing Arts — 8 topics in this field
  ...performingArtsTopics.filter((t) => t.domain === 'Arts & Culture'),
  // Architecture — 6 topics in this field
  ...architectureTopics.filter((t) => t.domain === 'Arts & Culture'),
  // English & Comprehension — 1 topic in this field
  ...englishUnifiedTopics.filter((t) => t.domain === 'Arts & Culture'),
  ],
}

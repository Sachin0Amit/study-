/**
 * Knowledge Universe — subject book: Media & Communication (media-communication)
 * group: Humanities & Social Sciences · 3 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Media & Society — 2 lessons
 *   02 The Attention Economy — 3 lessons
 *   03 Persuasion & Misinformation — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { mediaCommunicationCh01 } from './01-media-and-society'
import { mediaCommunicationCh02 } from './02-the-attention-economy'
import { mediaCommunicationCh03 } from './03-persuasion-and-misinformation'

export const mediaCommunicationTopics: KnowledgeTopic[] = [
  ...mediaCommunicationCh01,
  ...mediaCommunicationCh02,
  ...mediaCommunicationCh03,
]

/**
 * Knowledge Universe — subject book: Performing Arts (performing-arts)
 * group: Arts & Culture · 5 chapters · 8 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Acting & Performance — 2 lessons
 *   02 Stagecraft & Production — 2 lessons
 *   03 Dance Forms & History — 2 lessons
 *   04 Choreography & Composition — 1 lesson
 *   05 Opera & Musical Theater — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { performingArtsCh01 } from './01-acting-and-performance'
import { performingArtsCh02 } from './02-stagecraft-and-production'
import { performingArtsCh03 } from './03-dance-forms-and-history'
import { performingArtsCh04 } from './04-choreography-and-composition'
import { performingArtsCh05 } from './05-opera-and-musical-theater'

export const performingArtsTopics: KnowledgeTopic[] = [
  ...performingArtsCh01,
  ...performingArtsCh02,
  ...performingArtsCh03,
  ...performingArtsCh04,
  ...performingArtsCh05,
]

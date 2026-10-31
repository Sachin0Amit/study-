/**
 * Knowledge Universe — subject book: Earth & Atmospheric Sciences (earth-sciences)
 * group: Natural Sciences · 2 chapters · 7 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Dynamic Earth — 5 lessons
 *   02 Weather & Atmosphere — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { earthSciencesCh01 } from './01-dynamic-earth'
import { earthSciencesCh02 } from './02-weather-and-atmosphere'

export const earthSciencesTopics: KnowledgeTopic[] = [
  ...earthSciencesCh01,
  ...earthSciencesCh02,
]

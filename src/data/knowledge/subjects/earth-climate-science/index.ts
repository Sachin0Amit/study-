/**
 * Knowledge Universe — subject book: Earth & Climate Science (earth-climate-science)
 * group: Natural Sciences · 2 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Earth Systems: Oceans, Water & Rock — 2 lessons
 *   02 Climate Science & Change — 3 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { earthClimateScienceCh01 } from './01-earth-systems-oceans-water-and-rock'
import { earthClimateScienceCh02 } from './02-climate-science-and-change'

export const earthClimateScienceTopics: KnowledgeTopic[] = [
  ...earthClimateScienceCh01,
  ...earthClimateScienceCh02,
]

/**
 * Knowledge Universe — subject book: Art History (art-history)
 * group: Arts & Culture · 5 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Foundations & the Ancient World — 1 lesson
 *   02 Renaissance to Modernism — 1 lesson
 *   03 World Art Traditions — 1 lesson
 *   04 The Historian's Craft — 1 lesson
 *   05 The Contemporary Scene — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { artHistoryCh01 } from './01-foundations-and-the-ancient-world'
import { artHistoryCh02 } from './02-renaissance-to-modernism'
import { artHistoryCh03 } from './03-world-art-traditions'
import { artHistoryCh04 } from './04-the-historian-s-craft'
import { artHistoryCh05 } from './05-the-contemporary-scene'

export const artHistoryTopics: KnowledgeTopic[] = [
  ...artHistoryCh01,
  ...artHistoryCh02,
  ...artHistoryCh03,
  ...artHistoryCh04,
  ...artHistoryCh05,
]

/**
 * Knowledge Universe — subject book: Visual Arts (visual-arts)
 * group: Arts & Culture · 3 chapters · 8 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Drawing & Painting — 3 lessons
 *   02 Photography — 2 lessons
 *   03 Sculpture & Craft — 3 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { visualArtsCh01 } from './01-drawing-and-painting'
import { visualArtsCh02 } from './02-photography'
import { visualArtsCh03 } from './03-sculpture-and-craft'

export const visualArtsTopics: KnowledgeTopic[] = [
  ...visualArtsCh01,
  ...visualArtsCh02,
  ...visualArtsCh03,
]

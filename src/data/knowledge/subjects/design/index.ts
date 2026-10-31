/**
 * Knowledge Universe — subject book: Design (design)
 * group: Arts & Culture · 4 chapters · 8 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Design Foundations — 2 lessons
 *   02 Typography & Layout — 3 lessons
 *   03 Interaction & UX — 1 lesson
 *   04 Fashion & Identity — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { designCh01 } from './01-design-foundations'
import { designCh02 } from './02-typography-and-layout'
import { designCh03 } from './03-interaction-and-ux'
import { designCh04 } from './04-fashion-and-identity'

export const designTopics: KnowledgeTopic[] = [
  ...designCh01,
  ...designCh02,
  ...designCh03,
  ...designCh04,
]

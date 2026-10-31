/**
 * Knowledge Universe — subject book: Communication Systems (communication-unified)
 * group: Electronics & Communication · 1 chapters · 1 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Satellite Positioning & Telecommunications — 1 lesson
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book communication-complete (subject communication-systems) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { communicationUnifiedCh01 } from './01-satellite-positioning-and-telecommunications'

export const communicationUnifiedTopics: KnowledgeTopic[] = [
  ...communicationUnifiedCh01,
]

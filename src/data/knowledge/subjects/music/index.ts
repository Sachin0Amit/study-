/**
 * Knowledge Universe — subject book: Music (music)
 * group: Arts & Culture · 3 chapters · 9 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Theory & Musicianship — 6 lessons
 *   02 History & Appreciation — 2 lessons
 *   03 Music Production — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { musicCh01 } from './01-theory-and-musicianship'
import { musicCh02 } from './02-history-and-appreciation'
import { musicCh03 } from './03-music-production'

export const musicTopics: KnowledgeTopic[] = [
  ...musicCh01,
  ...musicCh02,
  ...musicCh03,
]

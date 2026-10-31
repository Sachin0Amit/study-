/**
 * Knowledge Universe — subject book: Mental Health (mental-health)
 * group: Medicine & Health · 3 chapters · 7 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Mood & Anxiety — 3 lessons
 *   02 Mind & Therapy — 2 lessons
 *   03 Mind–Body Science — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { mentalHealthCh01 } from './01-mood-and-anxiety'
import { mentalHealthCh02 } from './02-mind-and-therapy'
import { mentalHealthCh03 } from './03-mind-body-science'

export const mentalHealthTopics: KnowledgeTopic[] = [
  ...mentalHealthCh01,
  ...mentalHealthCh02,
  ...mentalHealthCh03,
]

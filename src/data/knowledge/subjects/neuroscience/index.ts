/**
 * Knowledge Universe — subject book: Neuroscience (neuroscience)
 * group: Natural Sciences · 4 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Cellular Neurophysiology — 2 lessons
 *   02 Systems Neuroscience — 1 lesson
 *   03 Neuroanatomy — 1 lesson
 *   04 Plasticity — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { neuroscienceCh01 } from './01-cellular-neurophysiology'
import { neuroscienceCh02 } from './02-systems-neuroscience'
import { neuroscienceCh03 } from './03-neuroanatomy'
import { neuroscienceCh04 } from './04-plasticity'

export const neuroscienceTopics: KnowledgeTopic[] = [
  ...neuroscienceCh01,
  ...neuroscienceCh02,
  ...neuroscienceCh03,
  ...neuroscienceCh04,
]

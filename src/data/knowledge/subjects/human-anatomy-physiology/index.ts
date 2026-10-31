/**
 * Knowledge Universe — subject book: Human Anatomy & Physiology (human-anatomy-physiology)
 * group: Life Sciences · 3 chapters · 11 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Body Systems — 9 lessons
 *   02 Reproduction & Development — 1 lesson
 *   03 When Systems Fail — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { humanAnatomyPhysiologyCh01 } from './01-body-systems'
import { humanAnatomyPhysiologyCh02 } from './02-reproduction-and-development'
import { humanAnatomyPhysiologyCh03 } from './03-when-systems-fail'

export const humanAnatomyPhysiologyTopics: KnowledgeTopic[] = [
  ...humanAnatomyPhysiologyCh01,
  ...humanAnatomyPhysiologyCh02,
  ...humanAnatomyPhysiologyCh03,
]

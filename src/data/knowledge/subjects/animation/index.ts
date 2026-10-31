/**
 * Knowledge Universe — subject book: Animation (animation)
 * group: Arts & Culture · 5 chapters · 7 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Principles of Animation — 2 lessons
 *   02 Storyboarding & Pre-Production — 1 lesson
 *   03 Stop-Motion & Hybrid Techniques — 1 lesson
 *   04 Digital & 3D Production — 1 lesson
 *   05 Comics & Sequential Art — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { animationCh01 } from './01-principles-of-animation'
import { animationCh02 } from './02-storyboarding-and-pre-production'
import { animationCh03 } from './03-stop-motion-and-hybrid-techniques'
import { animationCh04 } from './04-digital-and-3d-production'
import { animationCh05 } from './05-comics-and-sequential-art'

export const animationTopics: KnowledgeTopic[] = [
  ...animationCh01,
  ...animationCh02,
  ...animationCh03,
  ...animationCh04,
  ...animationCh05,
]

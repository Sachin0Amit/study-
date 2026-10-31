/**
 * Knowledge Universe — subject book: Physics (physics-unified)
 * group: Foundations · 4 chapters · 9 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Physics — Extension Topics — 4 lessons
 *   02 Nonlinear Science & Complexity — 3 lessons
 *   03 Physics of Everyday Phenomena — 1 lesson
 *   04 Photonics — 1 lesson
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book phys-master (subject physics) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { physicsUnifiedCh01 } from './01-physics-extension-topics'
import { physicsUnifiedCh02 } from './02-nonlinear-science-and-complexity'
import { physicsUnifiedCh03 } from './03-physics-of-everyday-phenomena'
import { physicsUnifiedCh04 } from './04-photonics'

export const physicsUnifiedTopics: KnowledgeTopic[] = [
  ...physicsUnifiedCh01,
  ...physicsUnifiedCh02,
  ...physicsUnifiedCh03,
  ...physicsUnifiedCh04,
]

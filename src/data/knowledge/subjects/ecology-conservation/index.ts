/**
 * Knowledge Universe — subject book: Ecology & Conservation (ecology-conservation)
 * group: Life Sciences · 4 chapters · 12 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Organisms & the Environment — 1 lesson
 *   02 Populations & Communities — 3 lessons
 *   03 Ecosystems, Energy & Biomes — 4 lessons
 *   04 Conservation & Restoration — 4 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { ecologyConservationCh01 } from './01-organisms-and-the-environment'
import { ecologyConservationCh02 } from './02-populations-and-communities'
import { ecologyConservationCh03 } from './03-ecosystems-energy-and-biomes'
import { ecologyConservationCh04 } from './04-conservation-and-restoration'

export const ecologyConservationTopics: KnowledgeTopic[] = [
  ...ecologyConservationCh01,
  ...ecologyConservationCh02,
  ...ecologyConservationCh03,
  ...ecologyConservationCh04,
]

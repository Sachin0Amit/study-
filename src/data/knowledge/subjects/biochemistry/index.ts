/**
 * Knowledge Universe — subject book: Biochemistry (biochemistry)
 * group: Life Sciences · 3 chapters · 13 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Molecules of Life — 8 lessons
 *   02 Laboratory Methods — 3 lessons
 *   03 Metabolic Pathways in Depth — 3 lessons (§3.1 glycolysis · §3.2 citric-acid cycle · §3.3 oxidative phosphorylation; §3.4–§3.5 per §6.2)
 */
import type { KnowledgeTopic } from '../../types'
import { biochemistryCh01 } from './01-molecules-of-life'
import { biochemistryCh02 } from './02-laboratory-methods'
import { biochemistryCh03 } from './03-metabolism'

export const biochemistryTopics: KnowledgeTopic[] = [
  ...biochemistryCh01,
  ...biochemistryCh02,
  ...biochemistryCh03,
]

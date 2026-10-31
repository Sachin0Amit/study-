/**
 * Knowledge Universe — subject book: Cell & Molecular Biology (cell-molecular-biology)
 * group: Life Sciences · 3 chapters · 11 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 The Cell: Structure & Signaling — 4 lessons
 *   02 Molecular Biology of the Gene — 6 lessons
 *   03 Bioenergetics — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { cellMolecularBiologyCh01 } from './01-the-cell-structure-and-signaling'
import { cellMolecularBiologyCh02 } from './02-molecular-biology-of-the-gene'
import { cellMolecularBiologyCh03 } from './03-bioenergetics'

export const cellMolecularBiologyTopics: KnowledgeTopic[] = [
  ...cellMolecularBiologyCh01,
  ...cellMolecularBiologyCh02,
  ...cellMolecularBiologyCh03,
]

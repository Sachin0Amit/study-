/**
 * Knowledge Universe — subject book: Cell & Molecular Biology (cell-molecular-biology)
 * group: Life Sciences · 4 chapters · 18 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Foundations: Life, Microscopy & the Cell — 3 lessons (the ladder head: absolute basics)
 *   02 The Cell: Structure & Signaling — 5 lessons (biomolecules → organelle atlas → cytoskeleton → signaling → cycle)
 *   03 Molecular Biology of the Gene — 7 lessons
 *   04 Bioenergetics — 3 lessons (respiration → fermentation & integration → photosynthesis)
 */
import type { KnowledgeTopic } from '../../types'
import { cellMolecularBiologyCh01 } from './01-foundations-of-life-and-cells'
import { cellMolecularBiologyCh02 } from './02-the-cell-structure-and-signaling'
import { cellMolecularBiologyCh03 } from './03-molecular-biology-of-the-gene'
import { cellMolecularBiologyCh04 } from './04-bioenergetics'

export const cellMolecularBiologyTopics: KnowledgeTopic[] = [
  ...cellMolecularBiologyCh01,
  ...cellMolecularBiologyCh02,
  ...cellMolecularBiologyCh03,
  ...cellMolecularBiologyCh04,
]

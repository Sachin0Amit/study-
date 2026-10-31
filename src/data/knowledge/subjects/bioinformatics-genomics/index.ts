/**
 * Knowledge Universe — subject book: Bioinformatics & Genomics (bioinformatics-genomics)
 * group: Life Sciences · 4 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Reading Genomes with Code — 1 lesson
 *   02 Sequencing & Assembly — 1 lesson
 *   03 Phylogenetics — 1 lesson
 *   04 Databases & Structure Prediction — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { bioinformaticsGenomicsCh01 } from './01-reading-genomes-with-code'
import { bioinformaticsGenomicsCh02 } from './02-sequencing-and-assembly'
import { bioinformaticsGenomicsCh03 } from './03-phylogenetics'
import { bioinformaticsGenomicsCh04 } from './04-databases-and-structure-prediction'

export const bioinformaticsGenomicsTopics: KnowledgeTopic[] = [
  ...bioinformaticsGenomicsCh01,
  ...bioinformaticsGenomicsCh02,
  ...bioinformaticsGenomicsCh03,
  ...bioinformaticsGenomicsCh04,
]

/**
 * Knowledge Universe — subject book: Genetics & Heredity (genetics-heredity)
 * group: Life Sciences · 5 chapters · 18 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Classical & Transmission Genetics — 7 lessons
 *   02 Cytogenetics & Allelic Analysis — 2 lessons
 *   03 Molecular Genetics & Genomics — 4 lessons
 *   04 Genes in Populations — 3 lessons
 *   05 Biotechnology — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { geneticsHeredityCh01 } from './01-classical-and-transmission-genetics'
import { geneticsHeredityCh02 } from './02-cytogenetics-and-allelic-analysis'
import { geneticsHeredityCh03 } from './03-molecular-genetics-and-genomics'
import { geneticsHeredityCh04 } from './04-genes-in-populations'
import { geneticsHeredityCh05 } from './05-biotechnology'

export const geneticsHeredityTopics: KnowledgeTopic[] = [
  ...geneticsHeredityCh01,
  ...geneticsHeredityCh02,
  ...geneticsHeredityCh03,
  ...geneticsHeredityCh04,
  ...geneticsHeredityCh05,
]

/**
 * Knowledge Universe — subject book: Microbiology & Immunology (microbiology-immunology)
 * group: Life Sciences · 2 chapters · 8 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 The Microbial World — 5 lessons
 *   02 Immunology — 3 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { microbiologyImmunologyCh01 } from './01-the-microbial-world'
import { microbiologyImmunologyCh02 } from './02-immunology'

export const microbiologyImmunologyTopics: KnowledgeTopic[] = [
  ...microbiologyImmunologyCh01,
  ...microbiologyImmunologyCh02,
]

/**
 * Knowledge Universe — subject book: Private Law: Contracts, Torts & Family (private-law)
 * group: Law & Justice · 3 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Contract Law — 3 lessons
 *   02 Tort Law — 1 lesson
 *   03 Family Law — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { privateLawCh01 } from './01-contract-law'
import { privateLawCh02 } from './02-tort-law'
import { privateLawCh03 } from './03-family-law'

export const privateLawTopics: KnowledgeTopic[] = [
  ...privateLawCh01,
  ...privateLawCh02,
  ...privateLawCh03,
]

/**
 * Knowledge Universe — subject book: Legal Systems & Method (legal-systems-method)
 * group: Law & Justice · 3 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Legal Reasoning — 1 lesson
 *   02 Courts, Precedent & the Legal Machine — 1 lesson
 *   03 Comparative Legal Systems & Legal History — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { legalSystemsMethodCh01 } from './01-legal-reasoning'
import { legalSystemsMethodCh02 } from './02-courts-precedent-and-the-legal-machine'
import { legalSystemsMethodCh03 } from './03-comparative-legal-systems-and-legal-history'

export const legalSystemsMethodTopics: KnowledgeTopic[] = [
  ...legalSystemsMethodCh01,
  ...legalSystemsMethodCh02,
  ...legalSystemsMethodCh03,
]

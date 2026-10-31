/**
 * Knowledge Universe — subject book: Criminal Law & Justice (criminal-justice)
 * group: Law & Justice · 3 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Criminology — 1 lesson
 *   02 The Legal Machine — 1 lesson
 *   03 Criminal Litigation — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { criminalJusticeCh01 } from './01-criminology'
import { criminalJusticeCh02 } from './02-the-legal-machine'
import { criminalJusticeCh03 } from './03-criminal-litigation'

export const criminalJusticeTopics: KnowledgeTopic[] = [
  ...criminalJusticeCh01,
  ...criminalJusticeCh02,
  ...criminalJusticeCh03,
]

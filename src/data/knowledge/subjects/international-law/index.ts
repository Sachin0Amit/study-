/**
 * Knowledge Universe — subject book: International Law (international-law)
 * group: Law & Justice · 4 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Treaty Law — 1 lesson
 *   02 States, Territory & Jurisdiction — 2 lessons
 *   03 Human Rights Law — 1 lesson
 *   04 Courts, Organizations & the Law of the Sea — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { internationalLawCh01 } from './01-treaty-law'
import { internationalLawCh02 } from './02-states-territory-and-jurisdiction'
import { internationalLawCh03 } from './03-human-rights-law'
import { internationalLawCh04 } from './04-courts-organizations-and-the-law-of-the-sea'

export const internationalLawTopics: KnowledgeTopic[] = [
  ...internationalLawCh01,
  ...internationalLawCh02,
  ...internationalLawCh03,
  ...internationalLawCh04,
]

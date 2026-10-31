/**
 * Knowledge Universe — subject book: English & Comprehension (english-unified)
 * group: Foundations · 5 chapters · 16 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Reading Skills & Strategies — 8 lessons
 *   02 Academic English Skills — 2 lessons
 *   03 Writing, Grammar & Composition — 4 lessons
 *   04 Speaking & Listening — 1 lesson
 *   05 Creative Writing — 1 lesson
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book english-complete (subject english) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { englishUnifiedCh01 } from './01-reading-skills-and-strategies'
import { englishUnifiedCh02 } from './02-academic-english-skills'
import { englishUnifiedCh03 } from './03-writing-grammar-and-composition'
import { englishUnifiedCh04 } from './04-speaking-and-listening'
import { englishUnifiedCh05 } from './05-creative-writing'

export const englishUnifiedTopics: KnowledgeTopic[] = [
  ...englishUnifiedCh01,
  ...englishUnifiedCh02,
  ...englishUnifiedCh03,
  ...englishUnifiedCh04,
  ...englishUnifiedCh05,
]

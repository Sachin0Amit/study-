/**
 * Knowledge Universe — subject book: AI, Machine Learning & Data Science (ai-unified)
 * group: Programming & Software · 1 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Deep Learning & Neural AI — 4 lessons
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book ai-complete (subject ai-data-science) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { aiUnifiedCh01 } from './01-deep-learning-and-neural-ai'

export const aiUnifiedTopics: KnowledgeTopic[] = [
  ...aiUnifiedCh01,
]

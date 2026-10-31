/**
 * Knowledge Universe — subject book: Ancient & Early Modern History (ancient-early-modern-history)
 * group: Humanities & Social Sciences · 2 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 The Ancient World — 2 lessons
 *   02 Themes in Early Modern World History — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { ancientEarlyModernHistoryCh01 } from './01-the-ancient-world'
import { ancientEarlyModernHistoryCh02 } from './02-themes-in-early-modern-world-history'

export const ancientEarlyModernHistoryTopics: KnowledgeTopic[] = [
  ...ancientEarlyModernHistoryCh01,
  ...ancientEarlyModernHistoryCh02,
]

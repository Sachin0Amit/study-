/**
 * Knowledge Universe — subject book: Modern World History (modern-world-history)
 * group: Humanities & Social Sciences · 3 chapters · 9 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Democracy, Rights & Revolution — 4 lessons
 *   02 War, Decolonization & the Twentieth Century — 3 lessons
 *   03 Brazil: Colony to Redemocratization — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { modernWorldHistoryCh01 } from './01-democracy-rights-and-revolution'
import { modernWorldHistoryCh02 } from './02-war-decolonization-and-the-twentieth-century'
import { modernWorldHistoryCh03 } from './03-brazil-colony-to-redemocratization'

export const modernWorldHistoryTopics: KnowledgeTopic[] = [
  ...modernWorldHistoryCh01,
  ...modernWorldHistoryCh02,
  ...modernWorldHistoryCh03,
]

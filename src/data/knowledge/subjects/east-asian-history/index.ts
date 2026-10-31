/**
 * Knowledge Universe — subject book: East Asian History (east-asian-history)
 * group: Humanities & Social Sciences · 3 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 China: Aggression, Salvation & Revolution — 2 lessons
 *   02 Japan’s Modern Industrialization — 1 lesson
 *   03 The Two Koreas — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { eastAsianHistoryCh01 } from './01-china-aggression-salvation-and-revolution'
import { eastAsianHistoryCh02 } from './02-japan-s-modern-industrialization'
import { eastAsianHistoryCh03 } from './03-the-two-koreas'

export const eastAsianHistoryTopics: KnowledgeTopic[] = [
  ...eastAsianHistoryCh01,
  ...eastAsianHistoryCh02,
  ...eastAsianHistoryCh03,
]

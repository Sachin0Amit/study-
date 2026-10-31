/**
 * Knowledge Universe — subject book: Entrepreneurship & the Business Environment (entrepreneurship-business-environment)
 * group: Commerce, Economics & Business · 2 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Building & Financing Ventures — 2 lessons
 *   02 Business Environment & Regulation — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { entrepreneurshipBusinessEnvironmentCh01 } from './01-building-and-financing-ventures'
import { entrepreneurshipBusinessEnvironmentCh02 } from './02-business-environment-and-regulation'

export const entrepreneurshipBusinessEnvironmentTopics: KnowledgeTopic[] = [
  ...entrepreneurshipBusinessEnvironmentCh01,
  ...entrepreneurshipBusinessEnvironmentCh02,
]

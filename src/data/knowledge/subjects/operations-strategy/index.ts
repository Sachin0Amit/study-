/**
 * Knowledge Universe — subject book: Operations, Strategy & Supply Chain (operations-strategy)
 * group: Commerce, Economics & Business · 2 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Operations & Supply Chain — 2 lessons
 *   02 Strategy & Strategic Interaction — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { operationsStrategyCh01 } from './01-operations-and-supply-chain'
import { operationsStrategyCh02 } from './02-strategy-and-strategic-interaction'

export const operationsStrategyTopics: KnowledgeTopic[] = [
  ...operationsStrategyCh01,
  ...operationsStrategyCh02,
]

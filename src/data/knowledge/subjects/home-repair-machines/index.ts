/**
 * Knowledge Universe — subject book: Home Repair & Everyday Machines (home-repair-machines)
 * group: Everyday Life Skills · 2 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Around the House — 4 lessons
 *   02 Machines of Daily Life — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { homeRepairMachinesCh01 } from './01-around-the-house'
import { homeRepairMachinesCh02 } from './02-machines-of-daily-life'

export const homeRepairMachinesTopics: KnowledgeTopic[] = [
  ...homeRepairMachinesCh01,
  ...homeRepairMachinesCh02,
]

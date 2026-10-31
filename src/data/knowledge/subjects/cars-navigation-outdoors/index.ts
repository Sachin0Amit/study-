/**
 * Knowledge Universe — subject book: Cars, Navigation & the Outdoors (cars-navigation-outdoors)
 * group: Everyday Life Skills · 2 chapters · 3 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Wheels & Ownership — 2 lessons
 *   02 Navigation & the Outdoors — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { carsNavigationOutdoorsCh01 } from './01-wheels-and-ownership'
import { carsNavigationOutdoorsCh02 } from './02-navigation-and-the-outdoors'

export const carsNavigationOutdoorsTopics: KnowledgeTopic[] = [
  ...carsNavigationOutdoorsCh01,
  ...carsNavigationOutdoorsCh02,
]

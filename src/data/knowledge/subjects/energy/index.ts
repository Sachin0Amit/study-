/**
 * Knowledge Universe — subject book: Energy & Sustainability (energy)
 * group: Natural Sciences · 5 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 The Energy Transition — 1 lesson
 *   02 Solar Power — 1 lesson
 *   03 Wind Power — 1 lesson
 *   04 Nuclear Energy — 2 lessons
 *   05 Energy Systems & Grids — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { energyCh01 } from './01-the-energy-transition'
import { energyCh02 } from './02-solar-power'
import { energyCh03 } from './03-wind-power'
import { energyCh04 } from './04-nuclear-energy'
import { energyCh05 } from './05-energy-systems-and-grids'

export const energyTopics: KnowledgeTopic[] = [
  ...energyCh01,
  ...energyCh02,
  ...energyCh03,
  ...energyCh04,
  ...energyCh05,
]

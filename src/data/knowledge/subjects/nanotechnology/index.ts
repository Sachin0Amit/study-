/**
 * Knowledge Universe — subject book: Nanotechnology (nanotechnology)
 * group: Applied Engineering & Technology · 6 chapters · 8 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 The Small Frontier — 1 lesson
 *   02 Confinement & Controlled Growth — 2 lessons
 *   03 Carbon Nanomaterials & Nanoelectronics — 2 lessons
 *   04 Making & Seeing the Nanoworld — 1 lesson
 *   05 Nanomedicine & Clean Tech — 1 lesson
 *   06 Chip Fabrication — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { nanotechnologyCh01 } from './01-the-small-frontier'
import { nanotechnologyCh02 } from './02-confinement-and-controlled-growth'
import { nanotechnologyCh03 } from './03-carbon-nanomaterials-and-nanoelectronics'
import { nanotechnologyCh04 } from './04-making-and-seeing-the-nanoworld'
import { nanotechnologyCh05 } from './05-nanomedicine-and-clean-tech'
import { nanotechnologyCh06 } from './06-chip-fabrication'

export const nanotechnologyTopics: KnowledgeTopic[] = [
  ...nanotechnologyCh01,
  ...nanotechnologyCh02,
  ...nanotechnologyCh03,
  ...nanotechnologyCh04,
  ...nanotechnologyCh05,
  ...nanotechnologyCh06,
]

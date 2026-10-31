/**
 * Knowledge Universe — subject book: Naval Architecture & Marine Engineering (naval-architecture)
 * group: Applied Engineering & Technology · 5 chapters · 7 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Marine Engineering — 1 lesson
 *   02 Stability & Safety — 2 lessons
 *   03 Ship Structures — 1 lesson
 *   04 Ship Design & Propulsion — 1 lesson
 *   05 Seakeeping & Manoeuvring — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { navalArchitectureCh01 } from './01-marine-engineering'
import { navalArchitectureCh02 } from './02-stability-and-safety'
import { navalArchitectureCh03 } from './03-ship-structures'
import { navalArchitectureCh04 } from './04-ship-design-and-propulsion'
import { navalArchitectureCh05 } from './05-seakeeping-and-manoeuvring'

export const navalArchitectureTopics: KnowledgeTopic[] = [
  ...navalArchitectureCh01,
  ...navalArchitectureCh02,
  ...navalArchitectureCh03,
  ...navalArchitectureCh04,
  ...navalArchitectureCh05,
]

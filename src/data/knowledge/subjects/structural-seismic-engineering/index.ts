/**
 * Knowledge Universe — subject book: Structural & Seismic Engineering (structural-seismic-engineering)
 * group: Applied Engineering & Technology · 4 chapters · 6 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Structural Analysis & Design — 3 lessons
 *   02 Ground & Foundations — 1 lesson
 *   03 Seismic Design — 1 lesson
 *   04 Bridges & Long-Span Structures — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { structuralSeismicEngineeringCh01 } from './01-structural-analysis-and-design'
import { structuralSeismicEngineeringCh02 } from './02-ground-and-foundations'
import { structuralSeismicEngineeringCh03 } from './03-seismic-design'
import { structuralSeismicEngineeringCh04 } from './04-bridges-and-long-span-structures'

export const structuralSeismicEngineeringTopics: KnowledgeTopic[] = [
  ...structuralSeismicEngineeringCh01,
  ...structuralSeismicEngineeringCh02,
  ...structuralSeismicEngineeringCh03,
  ...structuralSeismicEngineeringCh04,
]

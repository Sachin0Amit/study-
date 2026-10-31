/**
 * Knowledge Universe — subject book: Mathematics (mathematics-unified)
 * group: Foundations · 9 chapters · 28 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Sets, Logic & Mathematical Foundations — 2 lessons
 *   02 Algebra — 3 lessons
 *   03 Calculus — 5 lessons
 *   04 Geometry & Measurement — 3 lessons
 *   05 Discrete Mathematics — 2 lessons
 *   06 Probability & Statistics — 8 lessons
 *   07 Applied Mathematics & Numeracy — 3 lessons
 *   08 Linear Algebra — 1 lesson
 *   09 Number Theory — 1 lesson
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book math-master (subject mathematics) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { mathematicsUnifiedCh01 } from './01-sets-logic-and-mathematical-foundations'
import { mathematicsUnifiedCh02 } from './02-algebra'
import { mathematicsUnifiedCh03 } from './03-calculus'
import { mathematicsUnifiedCh04 } from './04-geometry-and-measurement'
import { mathematicsUnifiedCh05 } from './05-discrete-mathematics'
import { mathematicsUnifiedCh06 } from './06-probability-and-statistics'
import { mathematicsUnifiedCh07 } from './07-applied-mathematics-and-numeracy'
import { mathematicsUnifiedCh08 } from './08-linear-algebra'
import { mathematicsUnifiedCh09 } from './09-number-theory'

export const mathematicsUnifiedTopics: KnowledgeTopic[] = [
  ...mathematicsUnifiedCh01,
  ...mathematicsUnifiedCh02,
  ...mathematicsUnifiedCh03,
  ...mathematicsUnifiedCh04,
  ...mathematicsUnifiedCh05,
  ...mathematicsUnifiedCh06,
  ...mathematicsUnifiedCh07,
  ...mathematicsUnifiedCh08,
  ...mathematicsUnifiedCh09,
]

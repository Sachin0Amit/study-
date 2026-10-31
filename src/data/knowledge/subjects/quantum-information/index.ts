/**
 * Knowledge Universe — subject book: Quantum Information (quantum-information)
 * group: Applied Engineering & Technology · 5 chapters · 8 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Quantum Computation — 2 lessons
 *   02 Algorithms & Hardware — 1 lesson
 *   03 Quantum Communication & Networks — 2 lessons
 *   04 Quantum Sensing & Metrology — 1 lesson
 *   05 Error Correction & Fault Tolerance — 2 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { quantumInformationCh01 } from './01-quantum-computation'
import { quantumInformationCh02 } from './02-algorithms-and-hardware'
import { quantumInformationCh03 } from './03-quantum-communication-and-networks'
import { quantumInformationCh04 } from './04-quantum-sensing-and-metrology'
import { quantumInformationCh05 } from './05-error-correction-and-fault-tolerance'

export const quantumInformationTopics: KnowledgeTopic[] = [
  ...quantumInformationCh01,
  ...quantumInformationCh02,
  ...quantumInformationCh03,
  ...quantumInformationCh04,
  ...quantumInformationCh05,
]

/**
 * Knowledge Universe — subject book: Computer & Digital Literacy (computer-literacy)
 * group: Foundations · 2 chapters · 9 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Computing Fundamentals — 2 lessons
 *   02 ICT & Digital Literacy — 7 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { computerLiteracyCh01 } from './01-computing-fundamentals'
import { computerLiteracyCh02 } from './02-ict-and-digital-literacy'

export const computerLiteracyTopics: KnowledgeTopic[] = [
  ...computerLiteracyCh01,
  ...computerLiteracyCh02,
]

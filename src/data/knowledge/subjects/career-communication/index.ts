/**
 * Knowledge Universe — subject book: Career & Communication (career-communication)
 * group: Everyday Life Skills · 2 chapters · 4 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Speaking & Presence — 1 lesson
 *   02 Getting Hired & Working Smarter — 3 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { careerCommunicationCh01 } from './01-speaking-and-presence'
import { careerCommunicationCh02 } from './02-getting-hired-and-working-smarter'

export const careerCommunicationTopics: KnowledgeTopic[] = [
  ...careerCommunicationCh01,
  ...careerCommunicationCh02,
]

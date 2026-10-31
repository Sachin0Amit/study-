/**
 * Knowledge Universe — subject book: Cybersecurity (cybersecurity-unified)
 * group: Computing Systems · 1 chapters · 2 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Cryptography & Distributed Trust — 2 lessons
 *
 * NOTE: merged subject — its chapters are appended to the curated master
 * book cybersecurity-complete (subject cybersecurity) in the Library.
 */
import type { KnowledgeTopic } from '../../types'
import { cybersecurityUnifiedCh01 } from './01-cryptography-and-distributed-trust'

export const cybersecurityUnifiedTopics: KnowledgeTopic[] = [
  ...cybersecurityUnifiedCh01,
]

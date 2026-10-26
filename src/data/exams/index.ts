import type { CuratedExam } from './types'
import { USA_STANDARDIZED_EXAMS } from './usa-standardized'
import { INDIA_ENGINEERING_EXAMS } from './india-engineering'
import { INDIA_MEDICAL_EXAMS } from './india-medical'
import { INDIA_PG_COMPETITIVE_EXAMS } from './india-pg-competitive'
import { INDIA_GOVT_EXAMS } from './india-govt'
import { INDIA_PROFESSIONAL_EXAMS } from './india-professional'
import { INDIA_STATE_CET_EXAMS } from './india-state-cets'
import { USA_SUBJECT_EXAMS } from './usa-subject'
import { UK_EXAMS } from './uk'
import { IB_EXAMS } from './ib'
import { SINGAPORE_EXAMS } from './singapore'
import { JAPAN_EXAMS } from './japan'
import { CHINA_EXAMS } from './china'
import { AUSTRALIA_EXAMS } from './australia'
import { VICTORIA_EXAMS } from './victoria'
import { QUEENSLAND_EXAMS } from './queensland'
import { CANADA_EXAMS } from './canada'

/**
 * The curated official-syllabus registry. Every exam here has a COMPLETE
 * subject → unit → topic (→ subtopic) syllabus verified against its official
 * page, so searching it needs zero live research and misses nothing.
 */
export const CURATED_EXAMS: CuratedExam[] = [
  ...USA_STANDARDIZED_EXAMS,
  ...INDIA_ENGINEERING_EXAMS,
  ...INDIA_MEDICAL_EXAMS,
  ...INDIA_PG_COMPETITIVE_EXAMS,
  ...INDIA_GOVT_EXAMS,
  ...INDIA_PROFESSIONAL_EXAMS,
  ...INDIA_STATE_CET_EXAMS,
  ...USA_SUBJECT_EXAMS,
  ...UK_EXAMS,
  ...IB_EXAMS,
  ...SINGAPORE_EXAMS,
  ...JAPAN_EXAMS,
  ...CHINA_EXAMS,
  ...AUSTRALIA_EXAMS,
  ...VICTORIA_EXAMS,
  ...QUEENSLAND_EXAMS,
  ...CANADA_EXAMS,
].sort((a, b) => b.popularity - a.popularity)

export const CURATED_EXAM_BY_ID: Map<string, CuratedExam> = new Map(
  CURATED_EXAMS.map((e) => [e.id, e])
)

export function getCuratedExam(id: string): CuratedExam | undefined {
  return CURATED_EXAM_BY_ID.get(id)
}

// ------------------------------------------------------------- search ------

import { stem } from '@/lib/syllabus'

function examHaystack(exam: CuratedExam): string {
  return (
    exam.name +
    ' ' +
    exam.fullName +
    ' ' +
    (exam.aliases ?? []).join(' ') +
    ' ' +
    exam.region +
    ' ' +
    exam.category +
    ' ' +
    exam.subjects.map((s) => s.name).join(' ')
  ).toLowerCase()
}

function examSearchScore(query: string, exam: CuratedExam): number {
  let q = query.trim().toLowerCase()
  if (!q) return 0
  // strip trailing year qualifiers people append ("jee main 2026")
  q = q.replace(/\b(19|20)\d{2}\b/g, ' ').replace(/\s+/g, ' ').trim()
  if (!q) return 0
  const name = exam.name.toLowerCase()
  const full = exam.fullName.toLowerCase()
  const aliases = (exam.aliases ?? []).map((a) => a.toLowerCase())
  if (name === q) return 100
  if (name.startsWith(q)) return 80
  const singleToken = !q.includes(' ')
  if (name.includes(q)) return singleToken ? 40 : 60
  if (full.includes(q)) return singleToken ? 40 : 50
  for (const a of aliases) {
    if (a === q) return 90
    if (a.startsWith(q) || a.includes(q)) return 55 + (q.length >= 5 ? 10 : 0)
  }
  // token-level containment (order-free, both directions)
  const qTokens = q.split(/\s+/).filter((w) => w.length > 1)
  if (qTokens.length) {
    const hay = examHaystack(exam)
    const hits = qTokens.filter((w) => hay.includes(w)).length
    if (hits === qTokens.length) return qTokens.length >= 2 ? 55 + Math.min(hits, 4) : 45
    // reverse containment: every token of the exam name/alias appears in the query
    // ("bank po exam" ⊃ "bank po" → ibps-po)
    const nameTokens = [...new Set([...name.split(/\s+/), ...aliases.flatMap((a) => a.split(/\s+/))])]
      .filter((w) => w.length > 1)
    if (nameTokens.length && nameTokens.every((w) => q.includes(w))) return 72
    if (hits >= Math.max(2, Math.ceil(qTokens.length * 0.6))) return 20 + hits * 5
    // stemmed fallback ("gravitations" → "gravitation")
    const stemmed = qTokens.map(stem)
    const stemmedHits = stemmed.filter((w) => hay.includes(w)).length
    if (stemmedHits === stemmed.length && stemmedHits > 0) return 25
  }
  return 0
}

export interface CuratedExamMatch {
  exam: CuratedExam
  score: number
}

/** Search curated exams by free text (name, aliases, region, category). */
export function searchCuratedExams(query: string, limit = 8): CuratedExamMatch[] {
  const scored: CuratedExamMatch[] = []
  for (const exam of CURATED_EXAMS) {
    const s = examSearchScore(query, exam)
    if (s > 0) scored.push({ exam, score: s })
  }
  scored.sort((a, b) => b.score - a.score || b.exam.popularity - a.exam.popularity)
  return scored.slice(0, limit)
}

/** Best curated exam for a user-typed name, if any is confident. */
export function matchCuratedExam(name: string): CuratedExam | null {
  const top = searchCuratedExams(name, 1)[0]
  return top && top.score >= 50 ? top.exam : null
}

/** Most popular curated exams (for the suggestion chips). */
export function popularCuratedExams(limit = 10): CuratedExam[] {
  return CURATED_EXAMS.slice(0, limit)
}

// ------------------------------------------------------- reverse index -----

export interface ExamForSubject {
  examId: string
  examName: string
  region: string
  category: string
  subjectName: string
  weightage?: number
}

/**
 * Which curated exams ask a given library subject? Uses the authored
 * mappedSubjectId hints first, then falls back to subject-name matching so
 * even un-hinted subjects surface.
 */
export function curatedExamsForSubject(
  subjectId: string,
  subjectName: string
): ExamForSubject[] {
  const out: ExamForSubject[] = []
  const nameTokens = new Set(
    subjectName.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2)
  )
  for (const exam of CURATED_EXAMS) {
    for (const s of exam.subjects) {
      let hit = s.mappedSubjectId === subjectId
      if (!hit && s.mappedSubjectId) continue // hinted to another subject
      if (!hit) {
        const sTokens = s.name.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2)
        const overlap = sTokens.filter((w) => nameTokens.has(w)).length
        hit = overlap > 0 && overlap >= Math.min(2, sTokens.length)
      }
      if (hit) {
        out.push({
          examId: exam.id,
          examName: exam.name,
          region: exam.region,
          category: exam.category,
          subjectName: s.name,
          weightage: s.weightage,
        })
        break
      }
    }
  }
  return out
}

// ----------------------------------------------------------- quick stats ----

export function curatedExamStats(exam: CuratedExam): {
  subjectCount: number
  unitCount: number
  topicCount: number
  subtopicCount: number
} {
  let unitCount = 0
  let topicCount = 0
  let subtopicCount = 0
  for (const s of exam.subjects) {
    unitCount += s.units.length
    for (const u of s.units) {
      topicCount += u.topics.length
      for (const t of u.topics) subtopicCount += t.subtopics?.length ?? 0
    }
  }
  return { subjectCount: exam.subjects.length, unitCount, topicCount, subtopicCount }
}

export type { CuratedExam, CuratedSubject, CuratedUnit, CuratedTopic, ExamRegion } from './types'

/**
 * Curated official exam syllabi — shared types.
 *
 * These are hand-curated from the exams' official syllabus pages so a search
 * like "JEE Main" or "SAT" instantly produces a COMPLETE, up-to-date map:
 * every subject → every unit → every topic (with subtopics) — no live
 * research, nothing missing. Topics are then auto-mapped to library
 * chapters/sections by the same engine the live path uses.
 */

export type ExamRegion =
  | 'India'
  | 'United States'
  | 'United Kingdom'
  | 'Global'
  | 'Europe'
  | 'Australia'
  | 'Canada'
  | 'Singapore'
  | 'Japan'
  | 'China'
  | 'South America'

/** One topic inside a unit — the smallest syllabus line item. */
export interface CuratedTopic {
  /** exact official syllabus phrasing, e.g. "Laws of Motion" */
  name: string
  /** finer subtopic detail from the official syllabus (the deep-dive layer) */
  subtopics?: string[]
  /** official weightage share within the subject, 0-100, when published */
  weightage?: number
}

export interface CuratedUnit {
  name: string
  /** officially published share within the subject, 0-100, when available */
  weightage?: number
  topics: CuratedTopic[]
}

export interface CuratedSubject {
  name: string
  /** library subject id hint for scoped chapter matching (e.g. "physics") */
  mappedSubjectId?: string
  weightage?: number
  units: CuratedUnit[]
}

export interface CuratedExam {
  /** kebab-case stable id, e.g. "jee-main" */
  id: string
  /** the short name people actually type */
  name: string
  /** full official name */
  fullName: string
  /** alternate spellings / expansions users might type */
  aliases?: string[]
  region: ExamRegion
  /** e.g. "Engineering entrance", "Medical entrance", "Aptitude" */
  category: string
  /** 1-100 — drives the popular-exams chips ordering */
  popularity: number
  /** YYYY-MM-DD the syllabus data was last verified against the official page */
  syllabusVerified: string
  /** official exam website */
  website: string
  overview: {
    conductor?: string
    level?: string
    stages?: string[]
    papers?: string[]
    duration?: string
    marking?: string
    negativeMarking?: string
    questionTypes?: string[]
    notes?: string
  }
  /** official syllabus / curriculum pages used as sources */
  sources: { title: string; url: string; host: string }[]
  subjects: CuratedSubject[]
}

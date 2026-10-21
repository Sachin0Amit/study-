// ============ Exam Subject Book — shared types ============
//
// A "subject book" is the curated, exam-scoped study volume the Exam Command
// Center builds for ONE subject of a researched exam map:
//   chapters   = only the library chapters this subject's syllabus topics
//                mapped onto (in syllabus order),
//   subtopics  = the syllabus topics themselves (each linked to the sections
//                that teach it),
//   contents   = the specific library sections inside each chapter that the
//                topics actually need (never the whole book),
//   extras     = the remaining sections of a matched chapter (collapsed),
//   extraKnowledge = topically-related sections from the subject's OTHER
//                library chapters — the "beyond the syllabus" shelf.
//
// Pure TypeScript interfaces — no imports, safe on the client. Built server-
// side by /api/exam-maps/[id]/book.

import type { ExamTopic } from './exam-map-types'

/** one syllabus topic reference inside the book (name + its unit + weightage) */
export interface BookTopicRef {
  name: string
  unit: string
  weightage?: number
  questionTypes?: string[]
  /** finer official-syllabus detail under this topic (curated exams) */
  subtopics?: string[]
}

/** one library section selected into the book */
export interface BookSection {
  id: string
  number: number
  title: string
  description?: string
  readMins?: number
  /** syllabus topic names this section teaches */
  serves: string[]
  /** 0–1 relevance to the strongest matched topic */
  score: number
  /** true when included via the whole-chapter fallback (no section hit the topic) */
  all?: boolean
}

/** extra-knowledge section living in a chapter outside the book */
export interface ExtraSection extends BookSection {
  chapterId: string
  chapterNumber: number
  chapterTitle: string
  chapterShortTitle: string
}

/** one curated chapter of the subject book */
export interface BookChapter {
  chapterId: string
  number: number
  title: string
  shortTitle: string
  description?: string
  /** library book title this chapter comes from (provenance) */
  bookTitle: string
  accent: string
  /** syllabus unit names whose topics land in this chapter */
  units: string[]
  /** the syllabus topics mapped onto this chapter */
  topics: BookTopicRef[]
  /** the sections the syllabus actually needs */
  sections: BookSection[]
  /** remaining sections of the chapter, de-emphasized (capped) */
  extras: BookSection[]
  /** whole-chapter fallback was used (topic had no precise section) */
  includedWhole: boolean
}

/** aggregate numbers for the book header */
export interface BookTotals {
  topics: number
  mapped: number
  units: number
  chapters: number
  sections: number
  readMins: number
  extraCount: number
}

/** the full curated subject book returned by the API */
export interface SubjectBook {
  examId: string
  examName: string
  subjectIndex: number
  subjectName: string
  subjectWeightage?: number
  mappedSubjectId?: string | null
  mappedSubjectName?: string | null
  mappedSubjectIcon?: string | null
  accent: string
  units: { name: string; topicCount: number }[]
  chapters: BookChapter[]
  /** syllabus topics with no library chapter (honest gaps) */
  unmapped: BookTopicRef[]
  /** related sections from the subject's other library chapters */
  extraKnowledge: ExtraSection[]
  totals: BookTotals
}

/** lightweight topic shape used while building (server-side only helper) */
export type BuildTopic = Pick<
  ExamTopic,
  'name' | 'weightage' | 'questionTypes' | 'chapterId' | 'chapterTitle'
>

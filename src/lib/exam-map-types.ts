// ============ Exam Command Center — shared types ============
// Pure TypeScript interfaces for a deep-researched exam syllabus map
// (overview → subjects → units → topics, each topic auto-mapped onto library
// chapters). No server imports — safe for the client to import. The exam name
// is always dynamic user input; nothing here hardcodes any specific exam.

export interface ExamOverview {
  fullName?: string
  conductor?: string
  level?: string
  stages?: string[]
  papers?: string[]
  duration?: string
  marking?: string
  negativeMarking?: string
  questionTypes?: string[]
  website?: string
  notes?: string
}

export interface ExamTopic {
  name: string
  questionTypes?: string[]
  weightage?: number
  /** auto-mapped library chapter (best-effort, may be absent) */
  chapterId?: string | null
  chapterTitle?: string | null
  subjectId?: string | null
  subjectName?: string | null
  confidence?: number
}

export interface ExamUnit {
  name: string
  topics: ExamTopic[]
}

export interface ExamSubject {
  name: string
  weightage?: number
  /** best-effort link to the closest library subject */
  mappedSubjectId?: string | null
  mappedSubjectName?: string | null
  units: ExamUnit[]
}

export interface ExamMapSource {
  title: string
  url: string
  host: string
  date?: string
}

export interface ExamMapStats {
  subjectCount: number
  unitCount: number
  topicCount: number
  mappedCount: number
}

export interface ExamMapFull {
  id: string
  name: string
  overview: ExamOverview
  subjects: ExamSubject[]
  sources: ExamMapSource[]
  stats: ExamMapStats
  createdAt: string
  updatedAt: string
}

export interface ExamMapSummary {
  id: string
  name: string
  subjectCount: number
  unitCount: number
  topicCount: number
  mappedCount: number
  createdAt: string
  updatedAt: string
}

import { NextRequest, NextResponse } from 'next/server'
import {
  CURATED_EXAMS,
  popularCuratedExams,
  searchCuratedExams,
  curatedExamsForSubject,
  curatedExamStats,
} from '@/data/exams'
import type { CuratedExam } from '@/data/exams/types'

export const runtime = 'nodejs'

/**
 * GET /api/exams                     → popular curated exams + total count
 * GET /api/exams?q=<query>           → search curated exams by name/alias/subject
 * GET /api/exams?subject=<id>&subjectName=<name> → exams that ask this subject
 */

interface ExamCard {
  id: string
  name: string
  fullName: string
  region: string
  category: string
  popularity: number
  verified: string
  website: string
  subjectNames: string[]
  stats: ReturnType<typeof curatedExamStats>
}

function toCard(exam: CuratedExam): ExamCard {
  return {
    id: exam.id,
    name: exam.name,
    fullName: exam.fullName,
    region: exam.region,
    category: exam.category,
    popularity: exam.popularity,
    verified: exam.syllabusVerified,
    website: exam.website,
    subjectNames: exam.subjects.map((s) => s.name),
    stats: curatedExamStats(exam),
  }
}

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q')?.trim() ?? ''
  const subject = req.nextUrl.searchParams.get('subject')?.trim() ?? ''
  const subjectName = req.nextUrl.searchParams.get('subjectName')?.trim() ?? ''

  // reverse index: which curated exams ask this library subject?
  if (subject) {
    const exams = curatedExamsForSubject(subject, subjectName || subject)
    return NextResponse.json({ subject, exams })
  }

  // search
  if (q) {
    const matches = searchCuratedExams(q, 8).map((m) => toCard(m.exam))
    return NextResponse.json({ total: CURATED_EXAMS.length, matches })
  }

  // default: popular chips + totals
  return NextResponse.json({
    total: CURATED_EXAMS.length,
    popular: popularCuratedExams(12).map(toCard),
  })
}

import { NextResponse } from 'next/server'
import {
  LIBRARY_SUBJECTS,
  LIBRARY_BOOKS,
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
} from '@/data/library'
import { TOTAL_CONTENT_SECTIONS } from '@/data/content/server'

export async function GET() {
  return NextResponse.json({
    subjects: LIBRARY_SUBJECTS,
    books: LIBRARY_BOOKS,
    chapters: LIBRARY_CHAPTERS,
    sections: LIBRARY_SECTIONS,
    contentCoverage: TOTAL_CONTENT_SECTIONS(),
  })
}

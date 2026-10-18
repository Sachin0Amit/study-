import { NextRequest, NextResponse } from 'next/server'
import { getSectionContent } from '@/data/content/server'
import { getSection, getChapter, getSections } from '@/data/library'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ key: string }> }
) {
  const { key } = await params
  const section = getSection(key)
  if (!section) {
    return NextResponse.json({ error: 'Section not found' }, { status: 404 })
  }
  const chapter = getChapter(section.chapterId)
  const siblings = getSections(section.chapterId)
  const content = getSectionContent(key)
  return NextResponse.json({
    section,
    chapter,
    siblings,
    content: content ?? null,
  })
}

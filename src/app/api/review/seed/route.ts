import { NextRequest, NextResponse } from 'next/server'
import { getSectionContent } from '@/data/content/server'
import { seedCards } from '@/lib/review'

/**
 * POST /api/review/seed  { sectionId }
 * Turn one lesson into SM-2 review cards (quiz + terms + takeaways).
 * Re-seeding a lesson is idempotent: existing (sectionId, front) cards keep
 * their schedule untouched.
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const sectionId = typeof body?.sectionId === 'string' ? body.sectionId.trim() : ''
  if (!sectionId) {
    return NextResponse.json({ error: 'sectionId required' }, { status: 400 })
  }

  const content = getSectionContent(sectionId)
  if (!content) {
    return NextResponse.json({ error: 'Unknown section' }, { status: 404 })
  }

  try {
    const result = await seedCards(sectionId, content)
    return NextResponse.json(result)
  } catch (err) {
    console.error('[review/seed]', err)
    return NextResponse.json({ error: 'Seed failed' }, { status: 500 })
  }
}

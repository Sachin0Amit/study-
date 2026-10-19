import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { db } from '@/lib/db'

export const runtime = 'nodejs'
export const maxDuration = 120

/**
 * POST /api/illustrate — generate (or fetch cached) an AI illustration for a
 * lesson. Body: { sectionId, title, concepts?: string[], variant?: number }
 * Response: { imageBase64, prompt, style, cached }
 */
const STYLE_ROTATION: { key: string; look: string }[] = [
  { key: 'vintage-textbook', look: 'vintage science textbook plate, warm amber and sepia palette, fine ink linework, subtle paper grain' },
  { key: 'blueprint', look: 'technical schematic aesthetic, fine teal linework on warm cream paper, engineering-drawing precision, measured geometry' },
  { key: 'botanical-print', look: 'antique botanical-print engraving style, muted sage and ochre, delicate cross-hatching, archival composition' },
  { key: 'woodcut', look: 'bold woodcut print style, high contrast ink and paper, dramatic carved textures, expressive shapes' },
  { key: 'field-notes', look: 'naturalist field-journal watercolor sketch, soft washes of moss green and dusty rose, pencil underdrawing' },
  { key: 'geometric-poster', look: 'mid-century geometric science poster, flat shapes, warm coral mustard and teal palette, balanced grid' },
]

function buildPrompt(title: string, concepts: string[], look: string): string {
  const themes = concepts.slice(0, 4).join(', ') || title
  return (
    `An educational illustration for a lesson titled "${title}". ` +
    `Depict the core ideas visually: ${themes}. ` +
    `${look}. Composition centers the subject with generous margins. ` +
    `Absolutely no words, letters, numbers or labels in the image — purely visual. Elegant, museum-quality, detailed.`
  )
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      sectionId?: string
      title?: string
      concepts?: string[]
      variant?: number
    }
    const sectionId = (body.sectionId ?? '').trim()
    const title = (body.title ?? '').trim()
    if (!sectionId || !title) {
      return NextResponse.json({ error: 'sectionId and title are required' }, { status: 400 })
    }

    /* cached illustration for this lesson? */
    const existing = await db.lessonIllustration.findUnique({ where: { sectionKey: sectionId } })
    const variant = Number.isFinite(body.variant) ? Math.abs(Math.trunc(body.variant ?? 0)) : 0
    if (existing && !variant) {
      return NextResponse.json({
        imageBase64: existing.imageBase64,
        prompt: existing.prompt,
        style: existing.style,
        cached: true,
      })
    }

    /* pick a style (rotate on regenerate) */
    const style = STYLE_ROTATION[variant % STYLE_ROTATION.length]
    const prompt = buildPrompt(title, body.concepts ?? [], style.look)

    const zai = await ZAI.create()
    const response = await zai.images.generations.create({ prompt, size: '1344x768' })
    const imageBase64 = response.data?.[0]?.base64
    if (!imageBase64) {
      return NextResponse.json({ error: 'image generation returned no image' }, { status: 502 })
    }

    /* upsert the cache (regenerate replaces) */
    await db.lessonIllustration.upsert({
      where: { sectionKey: sectionId },
      create: { sectionKey: sectionId, prompt, style: style.key, imageBase64 },
      update: { prompt, style: style.key, imageBase64 },
    })

    return NextResponse.json({ imageBase64, prompt, style: style.key, cached: false })
  } catch (err) {
    console.error('[illustrate]', err instanceof Error ? err.message : err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'illustration failed' },
      { status: 500 },
    )
  }
}

/** GET /api/illustrate?sectionId=… — fetch a cached illustration if present. */
export async function GET(req: NextRequest) {
  const sectionId = req.nextUrl.searchParams.get('sectionId')
  if (!sectionId) return NextResponse.json({ error: 'sectionId required' }, { status: 400 })
  const existing = await db.lessonIllustration.findUnique({ where: { sectionKey: sectionId } })
  if (!existing) return NextResponse.json({ found: false })
  return NextResponse.json({
    found: true,
    imageBase64: existing.imageBase64,
    prompt: existing.prompt,
    style: existing.style,
    cached: true,
  })
}

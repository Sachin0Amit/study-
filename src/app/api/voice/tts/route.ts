import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export const runtime = 'nodejs'
export const maxDuration = 60

/**
 * POST /api/voice/tts — text → spoken audio (wav binary).
 *
 * Body: { text: string, voice?: string, speed?: number }
 * The TTS engine accepts at most 1024 characters per request, so the client
 * chunks lesson blocks before calling; the server clamps defensively anyway.
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { text?: string; voice?: string; speed?: number }
    const raw = (body.text ?? '').replace(/\s+/g, ' ').trim()
    if (!raw) {
      return NextResponse.json({ error: 'text is required' }, { status: 400 })
    }
    const text = raw.length > 1000 ? raw.slice(0, 1000).trim() : raw
    const voice = typeof body.voice === 'string' && body.voice ? body.voice : 'tongtong'
    const speed = Math.min(2, Math.max(0.5, Number(body.speed) || 1))

    const zai = await ZAI.create()
    const response = await zai.audio.tts.create({
      input: text,
      voice,
      speed,
      response_format: 'wav',
      stream: false,
    })
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(new Uint8Array(arrayBuffer))
    if (buffer.length === 0) {
      return NextResponse.json({ error: 'tts returned empty audio' }, { status: 502 })
    }
    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'audio/wav',
        'Content-Length': String(buffer.length),
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('[voice/tts]', err instanceof Error ? err.message : err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'speech synthesis failed' },
      { status: 500 },
    )
  }
}

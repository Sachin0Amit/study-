import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import ZAI from 'z-ai-web-dev-sdk'
import { askLlm, extractMarker } from '@/lib/studio'
import { bridgeGapContext, parseBridgeContent } from '@/lib/remix'
import { getSkillMeta } from '@/lib/twin'

export const runtime = 'nodejs'
export const maxDuration = 60

const BRIDGE_SYSTEM = `You author short "bridge lessons" that repair prerequisite gaps before a learner starts a new section.
You get: the TARGET section they are heading into, and the GAP topics (prerequisites they are weak in).
Write a compact bridge lesson that rebuilds ONLY what's missing, in the learner's own vocabulary, then connects it to the target.
Rules:
- JSON ONLY, shape: {"intro": string (2-3 sentences), "objectives": [string, ...] (3-4), "concepts": [{"term": string, "statement": string}] (3-5, statements may use **bold** and $...$ math), "takeaways": [string, ...] (3)}
- No exam names, no meta commentary. Neutral university language.`

/**
 * POST /api/remix/bridge — generate (and cache) a bridge lesson for a skill.
 * Body: { deviceId, skillKey }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body?.deviceId || !body?.skillKey) {
      return NextResponse.json(
        { error: 'deviceId and skillKey are required' },
        { status: 400 }
      )
    }
    const deviceId = String(body.deviceId)
    const skillKey = String(body.skillKey)
    if (!getSkillMeta(skillKey)) {
      return NextResponse.json({ error: 'Unknown skill' }, { status: 400 })
    }

    // cached?
    const existing = await db.bridgeLesson.findUnique({
      where: { deviceId_skillKey: { deviceId, skillKey } },
    })
    if (existing) {
      return NextResponse.json({
        cached: true,
        skillKey,
        title: existing.title,
        gapKeys: safeJson(existing.gapKeys),
        content: safeJson(existing.content),
      })
    }

    const { gaps, target } = bridgeGapContext(skillKey)
    const zai = await ZAI.create()
    const raw = await askLlm(
      zai,
      BRIDGE_SYSTEM,
      `TARGET SECTION (where the learner is heading): ${target}\n\nGAP TOPICS (weak prerequisites to rebuild): ${
        gaps.length ? gaps.join(' ; ') : 'general foundations of the same chapter'
      }`
    )
    const content = parseBridgeContent(extractMarker(raw).clean)
    if (!content) {
      return NextResponse.json(
        { error: 'The authoring pass failed — please try again.' },
        { status: 502 }
      )
    }

    const title = `Bridge: ${target}`
    const saved = await db.bridgeLesson.create({
      data: {
        deviceId,
        skillKey,
        gapKeys: JSON.stringify(gaps),
        title,
        content: JSON.stringify(content),
      },
    })
    return NextResponse.json({
      cached: false,
      skillKey: saved.skillKey,
      title: saved.title,
      gapKeys: gaps,
      content,
    })
  } catch (err) {
    console.error('[api/remix/bridge]', err)
    return NextResponse.json({ error: 'Could not author the bridge.' }, { status: 500 })
  }
}

function safeJson(raw: string): unknown {
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

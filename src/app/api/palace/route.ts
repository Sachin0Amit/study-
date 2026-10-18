import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import type { MemoryPalace } from '@prisma/client'
import ZAI from 'z-ai-web-dev-sdk'
import { db } from '@/lib/db'
import { getSectionContent } from '@/data/content/server'
import { getSection, LIBRARY_CHAPTERS, LIBRARY_BOOKS, LIBRARY_SUBJECTS } from '@/data/library'
import { askLlm } from '@/lib/studio'
import { SSE_HEADERS, sseStream, withTimeout } from '@/lib/syllabus'

// ============================================================================
// X8 — MEMORY PALACE GENERATOR
// POST (SSE): designs a vivid spatial journey for a study section, then
//             generates one painterly image + one narration audio per room.
// GET:        existing palace (?deviceId&sectionKey) or recent list (?deviceId)
// ============================================================================

export const runtime = 'nodejs'
export const maxDuration = 300

// ------------------------------ types ---------------------------------------

interface DesignedRoom {
  name: string
  scene: string
  facts: string[]
  imagePrompt: string
  narration: string
  image: string | null
  audio: string | null
}

interface PalaceDesign {
  place: string
  rooms: DesignedRoom[]
}

type Zai = Awaited<ReturnType<typeof ZAI.create>>

// --------------------------- per-device rate limit ---------------------------

const BUSY_TTL_MS = 6 * 60_000
const busyDevices = new Map<string, number>()

function isBusy(deviceId: string): boolean {
  const at = busyDevices.get(deviceId)
  if (!at) return false
  if (Date.now() - at > BUSY_TTL_MS) {
    busyDevices.delete(deviceId)
    return false
  }
  return true
}

// ------------------------------ design parsing ------------------------------

const DESIGN_SYSTEM = `You are a memory-palace architect. Given a study section's concepts and takeaways, design a vivid spatial journey through an imaginary place. Return ONLY JSON: {"place": string (e.g. 'an old observatory'), "rooms": [{"name": string, "scene": string (2-3 sentences, vivid, spatially connected to the previous room), "facts": [string,...] (1-3 facts embedded naturally in the scene description), "imagePrompt": string (detailed art prompt for this room, consistent style: 'warm painterly illustration, soft golden light, detailed, storybook style — no text in image'), "narration": string (45-80 words, second-person walkthrough naming the facts)}] } with 5-7 rooms covering ALL concepts+takeaways.`

function str(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

/** strict shape validation — rooms 3-8, every room needs name/scene/facts/narration */
function parseDesign(raw: string): PalaceDesign | null {
  const text = raw.replace(/```(?:json)?/gi, '').trim()
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start === -1 || end <= start) return null
  let parsed: unknown
  try {
    parsed = JSON.parse(text.slice(start, end + 1))
  } catch {
    return null
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null
  const obj = parsed as Record<string, unknown>
  const place = str(obj.place, 120)
  if (!place || !Array.isArray(obj.rooms)) return null
  const rooms: DesignedRoom[] = []
  for (const r of obj.rooms) {
    if (!r || typeof r !== 'object' || Array.isArray(r)) return null
    const room = r as Record<string, unknown>
    const name = str(room.name, 80)
    const scene = str(room.scene, 900)
    const narration = str(room.narration, 800)
    if (!name || !scene || !narration) return null
    const facts = Array.isArray(room.facts)
      ? room.facts
          .filter((f): f is string => typeof f === 'string' && f.trim().length > 0)
          .map((f) => f.trim().slice(0, 240))
          .slice(0, 3)
      : []
    if (facts.length === 0) return null
    const imagePrompt =
      str(room.imagePrompt, 900) ||
      `${place} — ${name}: ${scene.slice(0, 300)} — warm painterly illustration, soft golden light, detailed, storybook style, no text`
    rooms.push({ name, scene, facts, imagePrompt, narration, image: null, audio: null })
  }
  if (rooms.length < 3 || rooms.length > 8) return null
  return { place, rooms }
}

function designUserPrompt(sectionKey: string, content: NonNullable<ReturnType<typeof getSectionContent>>): string {
  const sec = getSection(sectionKey)
  const chapter = sec ? LIBRARY_CHAPTERS.find((c) => c.id === sec.chapterId) : undefined
  const book = chapter ? LIBRARY_BOOKS.find((b) => b.id === chapter.bookId) : undefined
  const subject = book ? LIBRARY_SUBJECTS.find((s) => s.id === book.subjectId) : undefined
  const concepts = content.concepts
    .slice(0, 14)
    .map((c) => `- ${c.term}: ${c.statement.replace(/\*\*/g, '')}`)
    .join('\n')
  const takeaways = content.keyTakeaways
    .slice(0, 8)
    .map((t) => `- ${t.replace(/\*\*/g, '')}`)
    .join('\n')
  return [
    `Study section: §${sec?.number ?? ''} ${sec?.title ?? sectionKey}`,
    chapter ? `Chapter: ${chapter.number}. ${chapter.title}` : '',
    subject ? `Subject: ${subject.name}` : '',
    '',
    'CONCEPTS:',
    concepts,
    '',
    'KEY TAKEAWAYS:',
    takeaways,
    '',
    'Design the memory palace now. Every concept and takeaway must appear in some room. Return ONLY the JSON object.',
  ]
    .filter(Boolean)
    .join('\n')
}

// ------------------------------ asset generation ----------------------------

async function generateRoomImage(
  zai: Zai,
  prompt: string,
  dir: string,
  palaceId: string,
  index: number
): Promise<string | null> {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await withTimeout(
        zai.images.generations.create({
          prompt: `${prompt}. no text, no words, no letters in the image`,
          size: '1024x1024',
        }),
        110_000,
        'image-timeout'
      )
      const b64 = response.data?.[0]?.base64
      if (!b64) throw new Error('empty image payload')
      await fs.writeFile(path.join(dir, `room-${index}.png`), Buffer.from(b64, 'base64'))
      return `/palace/${palaceId}/room-${index}.png`
    } catch (err) {
      if (attempt === 1) {
        console.error(`[api/palace] image room ${index} failed:`, err instanceof Error ? err.message : err)
        return null
      }
      await new Promise((r) => setTimeout(r, 2500))
    }
  }
  return null
}

async function generateRoomAudio(
  zai: Zai,
  text: string,
  dir: string,
  palaceId: string,
  index: number
): Promise<string | null> {
  // wav is the reliably supported format here; retry with backoff on 429
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await withTimeout(
        zai.audio.tts.create({
          input: text,
          voice: 'tongtong',
          speed: 1.0,
          response_format: 'wav',
          stream: false,
        }),
        60_000,
        'tts-timeout'
      )
      const buffer = Buffer.from(new Uint8Array(await response.arrayBuffer()))
      if (buffer.length < 512) throw new Error('empty audio payload')
      await fs.writeFile(path.join(dir, `room-${index}.wav`), buffer)
      return `/palace/${palaceId}/room-${index}.wav`
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error(`[api/palace] tts room ${index} (wav, try ${attempt + 1}) failed:`, msg)
      if (!/429|too many/i.test(msg)) break
      await new Promise((r) => setTimeout(r, 3500 * (attempt + 1)))
    }
  }
  return null
}

// ------------------------------ serialization -------------------------------

export interface PalaceRoomOut {
  name: string
  scene: string
  facts: string[]
  image: string | null
  narration: string
  audio: string | null
}

/** rooms column holds {"place", "rooms":[...]} (no dedicated place column) */
function parseRoomsJson(raw: string): { place: string; rooms: PalaceRoomOut[] } {
  try {
    const parsed: unknown = JSON.parse(raw)
    if (Array.isArray(parsed)) return { place: '', rooms: parsed as PalaceRoomOut[] }
    if (parsed && typeof parsed === 'object') {
      const obj = parsed as { place?: unknown; rooms?: unknown }
      return {
        place: typeof obj.place === 'string' ? obj.place : '',
        rooms: Array.isArray(obj.rooms) ? (obj.rooms as PalaceRoomOut[]) : [],
      }
    }
  } catch {
    /* corrupted row — treat as empty */
  }
  return { place: '', rooms: [] }
}

function serializePalace(row: MemoryPalace) {
  const { place, rooms } = parseRoomsJson(row.rooms)
  return {
    id: row.id,
    sectionKey: row.sectionKey,
    status: row.status,
    place,
    rooms,
    walks: row.walks,
    dueAt: row.dueAt ? row.dueAt.toISOString() : null,
    createdAt: row.createdAt.toISOString(),
  }
}

// ------------------------------ GET -----------------------------------------

/**
 * GET /api/palace?deviceId=&sectionKey= → { palace } (null if none)
 * GET /api/palace?deviceId=             → { palaces: [...] } (latest 20)
 */
export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId') ?? ''
  const sectionKey = req.nextUrl.searchParams.get('sectionKey')
  if (!deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }
  try {
    if (sectionKey) {
      const row = await db.memoryPalace.findUnique({
        where: { deviceId_sectionKey: { deviceId, sectionKey } },
      })
      return NextResponse.json({ palace: row ? serializePalace(row) : null })
    }
    const rows = await db.memoryPalace.findMany({
      where: { deviceId },
      orderBy: { createdAt: 'desc' },
      take: 20,
    })
    return NextResponse.json({
      palaces: rows.map((row) => {
        const { rooms } = parseRoomsJson(row.rooms)
        return {
          id: row.id,
          sectionKey: row.sectionKey,
          status: row.status,
          dueAt: row.dueAt ? row.dueAt.toISOString() : null,
          walks: row.walks,
          roomCount: rooms.length,
          createdAt: row.createdAt.toISOString(),
        }
      }),
    })
  } catch (err) {
    console.error('[api/palace GET]', err)
    return NextResponse.json({ error: 'Could not load palaces.' }, { status: 500 })
  }
}

// ------------------------------ POST (SSE) ----------------------------------

/**
 * POST /api/palace — { deviceId, sectionKey }
 * SSE events:
 *   stage {stage:'design', place, total}
 *   stage {stage:'room', index, total, name}      — room started
 *   stage {stage:'room-done', index, total, name} — image + narration saved
 *   done  {id, place, rooms, sectionKey, ...}
 *   error {error}
 * Non-SSE JSON replies: 400 / 404 / 429 (busy) / 502 (design) / {cached:true}
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown> | null = null
  try {
    body = await req.json().catch(() => null)
  } catch {
    /* handled below */
  }
  const deviceId = typeof body?.deviceId === 'string' ? body.deviceId.trim() : ''
  const sectionKey = typeof body?.sectionKey === 'string' ? body.sectionKey.trim() : ''
  if (!deviceId || !sectionKey) {
    return NextResponse.json({ error: 'deviceId and sectionKey required' }, { status: 400 })
  }
  if (isBusy(deviceId)) {
    return NextResponse.json(
      { error: 'A palace is already being built for this device — hang on, it finishes in a minute or two.' },
      { status: 429 }
    )
  }
  busyDevices.set(deviceId, Date.now())
  const release = () => busyDevices.delete(deviceId)

  const content = getSectionContent(sectionKey)
  if (!content) {
    release()
    return NextResponse.json({ error: 'No study content found for that section.' }, { status: 404 })
  }

  try {
    const existing = await db.memoryPalace.findUnique({
      where: { deviceId_sectionKey: { deviceId, sectionKey } },
    })
    if (existing && existing.status === 'ready') {
      release()
      return NextResponse.json({ cached: true, palace: serializePalace(existing) })
    }

    // ---- design phase (before the stream opens, so failures get real codes)
    const zai = await ZAI.create()
    let design: PalaceDesign | null = null
    try {
      const raw = await askLlm(zai, DESIGN_SYSTEM, designUserPrompt(sectionKey, content))
      design = parseDesign(raw)
    } catch (err) {
      console.error('[api/palace] design call failed:', err instanceof Error ? err.message : err)
    }
    if (!design) {
      release()
      return NextResponse.json(
        { error: 'The palace architect could not design this section — please try again.' },
        { status: 502 }
      )
    }

    // ---- generation phase (SSE)
    const palaceId = `pc${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`
    const dir = path.join(process.cwd(), 'public', 'palace', palaceId)
    const total = design.rooms.length
    const sse = sseStream()

    void (async () => {
      try {
        await fs.mkdir(dir, { recursive: true })
        sse.send('stage', { stage: 'design', place: design.place, total })

        for (let i = 0; i < design.rooms.length; i++) {
          const room = design.rooms[i]
          const index = i + 1
          sse.send('stage', { stage: 'room', index, total, name: room.name })
          const [image, audio] = await Promise.all([
            generateRoomImage(zai, room.imagePrompt, dir, palaceId, index),
            generateRoomAudio(zai, room.narration, dir, palaceId, index),
          ])
          room.image = image
          room.audio = audio
          sse.send('stage', { stage: 'room-done', index, total, name: room.name })
        }

        const storedRooms: PalaceRoomOut[] = design.rooms.map((room) => ({
          name: room.name,
          scene: room.scene,
          facts: room.facts,
          image: room.image,
          narration: room.narration,
          audio: room.audio,
        }))
        const roomsJson = JSON.stringify({ place: design.place, rooms: storedRooms })
        const dueAt = new Date(Date.now() + 3 * 86_400_000)
        // upsert — id forced to palaceId so the row id always matches /public/palace/<id>
        const row = await db.memoryPalace.upsert({
          where: { deviceId_sectionKey: { deviceId, sectionKey } },
          update: { id: palaceId, rooms: roomsJson, status: 'ready', dueAt, error: null },
          create: { id: palaceId, deviceId, sectionKey, rooms: roomsJson, status: 'ready', dueAt },
        })

        sse.send('done', {
          id: row.id,
          place: design.place,
          rooms: storedRooms,
          sectionKey,
          walks: row.walks,
          dueAt: row.dueAt ? row.dueAt.toISOString() : null,
          createdAt: row.createdAt.toISOString(),
        })
      } catch (err) {
        console.error('[api/palace] generation failed:', err)
        await fs.rm(dir, { recursive: true, force: true }).catch(() => {})
        sse.send('error', { error: 'Palace generation failed — please try again.' })
      } finally {
        release()
        sse.close()
      }
    })()

    return new Response(sse.stream, { headers: SSE_HEADERS })
  } catch (err) {
    release()
    console.error('[api/palace POST]', err)
    return NextResponse.json({ error: 'Palace generation failed.' }, { status: 500 })
  }
}

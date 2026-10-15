import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import {
  extractDocxText,
  extractLegacyDocText,
  extractJsonArray,
  llmContent,
  parseTopics,
} from '@/lib/syllabus'

export const runtime = 'nodejs'

const MAX_BYTES = 10 * 1024 * 1024 // 10 MB

const SYSTEM_PROMPT = `You extract syllabus topics from a document. Return ONLY a JSON array of distinct topic strings, each a concrete syllabus topic (e.g. "Numerical Methods", "Theory of Machines", "Database Normalization"). No numbering, no commentary. 5-80 topics.`

/** POST /api/syllabus/extract — multipart { file, deviceId } → { topics } */
export async function POST(req: NextRequest) {
  try {
    const form = await req.formData().catch(() => null)
    const file = form?.get('file')
    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'file is required' }, { status: 400 })
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json(
        { error: 'File is larger than 10 MB — please upload a smaller document.' },
        { status: 413 }
      )
    }

    const name = file.name || 'syllabus'
    const ext = name.slice(name.lastIndexOf('.')).toLowerCase()

    const zai = await ZAI.create()
    let topics: string[] = []

    if (ext === '.txt' || ext === '.md') {
      // plain text — read directly and run the topic-cleaning pass
      const text = await file.text()
      if (!text.trim()) {
        return NextResponse.json(
          { error: 'That file appears to be empty.' },
          { status: 400 }
        )
      }
      topics = await topicsFromText(zai, text)
    } else if (ext === '.pdf') {
      // PDF — the vision model reads the document itself (also handles scans)
      const bytes = Buffer.from(await file.arrayBuffer())
      const completion = await zai.chat.completions.createVision({
        model: 'glm-4.5v',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Extract all syllabus topics/units/subjects from this document. Return ONLY a JSON array of distinct topic strings.',
              },
              {
                type: 'file_url',
                file_url: {
                  url: `data:application/pdf;base64,${bytes.toString('base64')}`,
                },
              },
            ],
          },
        ],
        thinking: { type: 'disabled' },
      })
      topics = parseTopics(extractJsonArray(llmContent(completion)))

      // vision output can be messy — one text-model cleaning pass as backup
      if (!topics.length) {
        const raw = llmContent(completion).slice(0, 24000)
        if (raw.trim()) topics = await topicsFromText(zai, raw)
      }
    } else if (ext === '.docx') {
      // Office XML — extract text locally, then the cleaning pass
      const bytes = new Uint8Array(await file.arrayBuffer())
      const text = await extractDocxText(bytes)
      if (!text) {
        return NextResponse.json(
          { error: 'Could not read that document — try saving it as PDF.' },
          { status: 422 }
        )
      }
      topics = await topicsFromText(zai, text)
    } else if (ext === '.doc') {
      // legacy binary Word — heuristic text scrape, then the cleaning pass
      const bytes = new Uint8Array(await file.arrayBuffer())
      const text = extractLegacyDocText(bytes)
      if (!text) {
        return NextResponse.json(
          { error: 'Could not read that document — try saving it as PDF or DOCX.' },
          { status: 422 }
        )
      }
      topics = await topicsFromText(zai, text)
    } else {
      return NextResponse.json(
        { error: 'Unsupported file type — use PDF, TXT, MD, DOC or DOCX.' },
        { status: 400 }
      )
    }

    if (!topics.length) {
      return NextResponse.json(
        { error: 'Could not extract topics from that document — is it a syllabus?' },
        { status: 502 }
      )
    }

    return NextResponse.json({ topics })
  } catch (err) {
    console.error('[api/syllabus/extract]', err)
    return NextResponse.json(
      { error: 'Document extraction failed — please try again.' },
      { status: 500 }
    )
  }
}

/** run raw document text through the topic-cleaning LLM pass */
async function topicsFromText(
  zai: Awaited<ReturnType<typeof ZAI.create>>,
  text: string
): Promise<string[]> {
  const completion = await zai.chat.completions.create({
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: text.slice(0, 24000) },
    ],
    thinking: { type: 'disabled' },
  })
  return parseTopics(extractJsonArray(llmContent(completion)))
}

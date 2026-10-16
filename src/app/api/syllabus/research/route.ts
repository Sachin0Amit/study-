import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import {
  SSE_HEADERS,
  extractJsonArray,
  llmContent,
  parseTopics,
  sseStream,
  withTimeout,
} from '@/lib/syllabus'

export const runtime = 'nodejs'

/**
 * POST /api/syllabus/research — { deviceId, name, details? }
 * Live web research streamed over SSE:
 *   event:stage  {stage:'search'|'sources'|'read'|'synthesize'|'done', ...}
 *   event:done   { topics: string[], sources: {title,url,host,date?}[], cached }
 * Falls back to a 400/500 JSON error when the request itself is invalid.
 */

const SEARCH_TIMEOUT_MS = 15_000
const READ_TIMEOUT_MS = 20_000
const LLM_TIMEOUT_MS = 90_000
const CACHE_TTL_MS = 30 * 60 * 1000
const MAX_SOURCES = 8

interface ResearchSource {
  title: string
  url: string
  host: string
  date?: string
}

interface CachedResearch {
  topics: string[]
  sources: ResearchSource[]
  at: number
}

const researchCache = new Map<string, CachedResearch>()
const rateWindow = new Map<string, number[]>() // deviceId → recent timestamps

function rateLimited(deviceId: string): boolean {
  const now = Date.now()
  const recent = (rateWindow.get(deviceId) ?? []).filter((t) => now - t < 5 * 60_000)
  recent.push(now)
  rateWindow.set(deviceId, recent)
  return recent.length > 12
}

interface SearchItem {
  url?: string
  name?: string
  snippet?: string
  host_name?: string
  date?: string
}

const SYNTHESIZE_SYSTEM = `You build a clean study-syllabus topic list from live web research about a test, course or program the user names. Return ONLY a JSON array of distinct topic strings (aim for 15-60 topics) — each a concrete syllabus topic such as "Numerical Methods", "Theory of Machines", "Database Normalization". No numbering, no commentary, no duplicate meanings. Use the exact topic phrasing found in the sources when possible.`

/** pick the most promising pages to actually read */
function pickReadCandidates(results: SearchItem[]): SearchItem[] {
  const seenHost = new Set<string>()
  const scored: { item: SearchItem; score: number }[] = []
  for (const r of results) {
    if (!r.url || !r.url.startsWith('http')) continue
    const host = r.host_name ?? ''
    if (seenHost.has(host)) continue
    seenHost.add(host)
    let score = 0
    const url = r.url.toLowerCase()
    const text = `${r.name ?? ''} ${r.snippet ?? ''}`.toLowerCase()
    if (/syllabus|curriculum|course structure|scheme/.test(url)) score += 3
    if (/syllabus|curriculum|topics|units|subjects/.test(text)) score += 2
    if (/gov|edu|ac\.in|nic\.in|edu\.in|university|institute/.test(host)) score += 2
    if ((r.snippet ?? '').length > 160) score += 1
    scored.push({ item: r, score })
  }
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.item)
}

export async function POST(req: NextRequest) {
  let deviceId = ''
  let name = ''
  let details = ''
  try {
    const body = await req.json().catch(() => null)
    deviceId = typeof body?.deviceId === 'string' ? body.deviceId : ''
    name = typeof body?.name === 'string' ? body.name.trim().slice(0, 200) : ''
    details = typeof body?.details === 'string' ? body.details.trim().slice(0, 300) : ''
  } catch {
    /* handled below */
  }
  if (!deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }
  if (!name) {
    return NextResponse.json({ error: 'name required' }, { status: 400 })
  }
  if (rateLimited(deviceId)) {
    return NextResponse.json(
      { error: 'Too many research requests — please wait a minute and try again.' },
      { status: 429 }
    )
  }

  const cacheKey = `${name.toLowerCase().replace(/\s+/g, ' ').trim()}|${details.toLowerCase().trim()}`
  const cached = researchCache.get(cacheKey)
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) {
    const sse = sseStream()
    setTimeout(() => {
      sse.send('stage', { stage: 'done', cached: true })
      sse.send('done', {
        topics: cached.topics,
        sources: cached.sources,
        cached: true,
      })
      sse.close()
    }, 120)
    return new Response(sse.stream, { headers: SSE_HEADERS })
  }

  const sse = sseStream()
  void (async () => {
    let settled = false
    const finish = (payload: Record<string, unknown>) => {
      if (settled) return
      settled = true
      sse.send('done', payload)
      sse.close()
    }
    const fail = (message: string) => {
      if (settled) return
      settled = true
      sse.send('error', { error: message })
      sse.close()
    }

    try {
      const zai = await ZAI.create()

      // ---- 1. parallel web searches with complementary phrasings ----
      sse.send('stage', { stage: 'search', queries: 3 })
      const queries = [
        `${name} syllabus topics`,
        `${name} syllabus subjects units ${details}`.trim(),
        `${name} course curriculum detailed syllabus`,
      ]
      const searchOnce = (q: string) =>
        withTimeout(
          zai.functions.invoke('web_search', { query: q, num: 8 }) as Promise<SearchItem[]>,
          SEARCH_TIMEOUT_MS,
          'search-timeout'
        )
      const searchWithRetry = async (q: string): Promise<SearchItem[]> => {
        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            return await searchOnce(q)
          } catch (err) {
            const msg = err instanceof Error ? err.message : String(err)
            if (!/429|too many/i.test(msg) || attempt === 2) throw err
            await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)))
          }
        }
        return []
      }
      const searchResults = await Promise.allSettled(queries.map(searchWithRetry))
      const all: SearchItem[] = []
      for (const r of searchResults) {
        if (r.status === 'fulfilled' && Array.isArray(r.value)) all.push(...r.value)
      }
      if (!all.length) {
        fail(
          'The live search service is rate-limited right now — wait a minute and try again.'
        )
        return
      }

      // dedupe by url
      const byUrl = new Map<string, SearchItem>()
      for (const r of all) if (r.url && !byUrl.has(r.url)) byUrl.set(r.url, r)
      const results = [...byUrl.values()]
      const sources: ResearchSource[] = results.slice(0, MAX_SOURCES).map((r) => ({
        title: (r.name ?? 'Source').slice(0, 140),
        url: r.url!,
        host: r.host_name ?? '',
        date: r.date && r.date !== 'N/A' ? r.date : undefined,
      }))
      sse.send('stage', { stage: 'sources', count: results.length, kept: sources.length })

      // ---- 2. read the most promising pages for real syllabus text ----
      const readCandidates = pickReadCandidates(results)
      const pageTexts: string[] = []
      for (const cand of readCandidates) {
        if (!cand.url) continue
        sse.send('stage', {
          stage: 'read',
          host: cand.host_name ?? '',
          title: (cand.name ?? '').slice(0, 80),
        })
        try {
          const page = ((await withTimeout(
            zai.functions.invoke('page_reader', { url: cand.url }),
            READ_TIMEOUT_MS,
            'read-timeout'
          )) ?? {}) as {
            title?: string
            text?: string
            html?: string
          }
          const text =
            page.text && page.text.trim().length > 200
              ? page.text
              : (page.html ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
          if (text.trim().length > 200) pageTexts.push(text.slice(0, 9000))
        } catch {
          /* skip unreadable pages */
        }
      }

      // ---- 3. synthesize the topic list ----
      sse.send('stage', { stage: 'synthesize', pages: pageTexts.length, snippets: results.length })
      const snippetBlock = results
        .slice(0, 14)
        .map((r, i) => `${i + 1}. ${r.name ?? ''} (${r.host_name ?? ''})\n${r.snippet ?? ''}`)
        .join('\n\n')
      const pageBlock = pageTexts.map((t, i) => `--- PAGE ${i + 1} ---\n${t}`).join('\n\n')

      const SYNTHESIZE_ATTEMPTS = 3
      let completion: Awaited<ReturnType<typeof zai.chat.completions.create>> | null = null
      let lastSynthError: unknown = null
      for (let attempt = 0; attempt < SYNTHESIZE_ATTEMPTS; attempt++) {
        try {
          completion = await withTimeout(
            zai.chat.completions.create({
              messages: [
                { role: 'system', content: SYNTHESIZE_SYSTEM },
                {
                  role: 'user',
                  content: `The user is studying for: "${name}"${
                    details ? ` (context: ${details})` : ''
                  }\n\nLive search results:\n${snippetBlock}\n\n${
                    pageBlock ? `Full page extracts:\n${pageBlock}` : ''
                  }\n\nBuild the definitive topic list for this syllabus.`,
                },
              ],
              thinking: { type: 'disabled' },
            }),
            LLM_TIMEOUT_MS,
            'llm-timeout'
          )
          break
        } catch (err) {
          lastSynthError = err
          const msg = err instanceof Error ? err.message : String(err)
          if (!/429|too many/i.test(msg) || attempt === SYNTHESIZE_ATTEMPTS - 1) throw err
          await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)))
        }
      }
      if (!completion) throw lastSynthError ?? new Error('llm-failed')
      const topics = parseTopics(extractJsonArray(llmContent(completion)))
      if (!topics.length) {
        fail('Could not build a topic list from the research — try adding more context.')
        return
      }

      researchCache.set(cacheKey, { topics, sources, at: Date.now() })
      if (researchCache.size > 60) {
        const oldest = [...researchCache.entries()].sort((a, b) => a[1].at - b[1].at)
        for (const [k] of oldest.slice(0, 20)) researchCache.delete(k)
      }
      finish({ topics, sources, cached: false })
    } catch (err) {
      console.error('[api/syllabus/research]', err)
      fail('Live research failed — please try again.')
    }
  })()

  return new Response(sse.stream, { headers: SSE_HEADERS })
}

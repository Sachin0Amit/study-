import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getChapter, getSections, type QuizQuestion } from '@/data/library'
import { getSectionContent } from '@/data/content/server'
import { shuffleQuizOptions } from '@/lib/quiz-shuffle'

// ============ X7 Pro — Paper-DNA Mock Paper Forge ============
//
// POST /api/paper-dna/mock  { deviceId, analysisId?, spec? }
//
// Deterministic (NO LLM) assembly of a mock paper from the question bank:
//   - analysisId → blueprint = that PaperAnalysis' mapped chapters, weight =
//     how many extracted questions landed on each chapter.
//   - spec { chapters: [{chapterId, weight}], totalQuestions, minutes } →
//     manual blueprint (weight is any positive relative number).
//
// Question counts per chapter are split proportional to weights (largest
// remainder), clamped to each chapter's live pool with redistribution to
// chapters that still have capacity. Sampling is a seeded mulberry32 RNG so a
// given seed reproduces the exact same paper; the seed defaults to Date.now()
// so simply re-POSTing gives a fresh draw.
//
// The bank's QuizQuestion shape carries no difficulty signal, so difficulty
// is uniform by design (noted in meta.difficulty). Options are balanced at
// assembly time with the same safe presentation-time shuffler the exam runner
// uses (@/lib/quiz-shuffle — deterministic per question stem).
//
// Stateless: nothing is persisted; the client owns the returned paper.

export const runtime = 'nodejs'

// ------------------------------------------------------------- constants --

const MIN_QUESTIONS = 10
const MAX_QUESTIONS = 100
const MIN_MINUTES = 10
const MAX_MINUTES = 240
const MAX_CHAPTERS = 24
const MAX_WEIGHT = 50

// ------------------------------------------------------------------ types --

interface Spec {
  chapters?: unknown
  totalQuestions?: unknown
  minutes?: unknown
}

interface SectionBucket {
  sectionId: string
  sectionTitle: string
  questions: QuizQuestion[]
}

interface OutQuestion {
  q: string
  options: string[]
  answer: number
  explanation: string
  sectionId: string
  sectionTitle: string
  chapterId: string
  chapterTitle: string
}

interface BlueprintRow {
  chapterId: string
  chapterTitle: string
  weight: number
  requested: number
  served: number
  available: number
}

interface AnalysisQuestion {
  chapterId?: string | null
  chapterTitle?: string | null
}

// ------------------------------------------------------------- seeded RNG --

function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function seededShuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// -------------------------------------------------------------- allocation --

/** split `total` across weights proportionally (largest-remainder rounding) */
function allocateByWeight(weights: number[], total: number): number[] {
  const n = weights.length
  if (!n || total <= 0) return weights.map(() => 0)
  const sum = weights.reduce((a, b) => a + b, 0)
  if (sum <= 0) return weights.map(() => 0)
  const exact = weights.map((w) => (w / sum) * total)
  const base = exact.map(Math.floor)
  let rem = total - base.reduce((a, b) => a + b, 0)
  const order = exact
    .map((e, i) => ({ i, frac: e - Math.floor(e) }))
    .sort((a, b) => b.frac - a.frac)
  for (let k = 0; k < order.length && rem > 0; k++, rem--) base[order[k].i]++
  return base
}

/**
 * clamp an allocation to per-chapter availability, then hand the shortfall to
 * chapters that still have pool capacity (heavier chapters first) until the
 * requested total is served or the whole pool is exhausted.
 */
function capAllocation(alloc: number[], available: number[], weights: number[]): number[] {
  const out = alloc.map((a, i) => Math.max(0, Math.min(a, available[i])))
  let deficit = alloc.reduce((a, b) => a + b, 0) - out.reduce((a, b) => a + b, 0)
  while (deficit > 0) {
    const room = out
      .map((v, i) => i)
      .filter((i) => out[i] < available[i])
      .sort((a, b) => weights[b] - weights[a] || available[b] - available[a])
    if (!room.length) break
    let servedThisPass = 0
    for (const i of room) {
      if (deficit <= 0) break
      out[i]++
      deficit--
      servedThisPass++
    }
    if (!servedThisPass) break
  }
  return out
}

// ------------------------------------------------------------- pool access --

/** every usable bank question of a chapter, grouped by its library section */
function chapterPool(chapterId: string): SectionBucket[] {
  const buckets: SectionBucket[] = []
  for (const meta of getSections(chapterId)) {
    const content = getSectionContent(meta.id)
    if (!content) continue
    const questions = content.quiz.filter(
      (q): q is QuizQuestion =>
        !!q &&
        typeof q.q === 'string' &&
        q.q.trim().length > 0 &&
        Array.isArray(q.options) &&
        q.options.length >= 2 &&
        q.options.every((o) => typeof o === 'string' && o.trim().length > 0) &&
        Number.isInteger(q.answer) &&
        q.answer >= 0 &&
        q.answer < q.options.length
    )
    if (questions.length) {
      buckets.push({ sectionId: meta.id, sectionTitle: meta.title, questions })
    }
  }
  return buckets
}

/**
 * pick `n` questions from a chapter's buckets: buckets and their questions are
 * seeded-shuffled, then drawn round-robin so the sample spreads across the
 * chapter's sections instead of clustering in the first few.
 */
function sampleChapter(
  buckets: SectionBucket[],
  n: number,
  rand: () => number,
  chapterId: string,
  chapterTitle: string
): OutQuestion[] {
  if (n <= 0 || !buckets.length) return []
  const ordered = seededShuffle(buckets, rand).map((b) => ({
    ...b,
    questions: seededShuffle(b.questions, rand),
  }))
  const cursors = ordered.map(() => 0)
  const picked: OutQuestion[] = []
  let progress = true
  while (picked.length < n && progress) {
    progress = false
    for (let bi = 0; bi < ordered.length && picked.length < n; bi++) {
      const bucket = ordered[bi]
      if (cursors[bi] < bucket.questions.length) {
        const raw = bucket.questions[cursors[bi]++]
        const balanced = shuffleQuizOptions(raw)
        picked.push({
          q: raw.q,
          options: balanced.options,
          answer: balanced.answer,
          explanation: typeof raw.explanation === 'string' ? raw.explanation : '',
          sectionId: bucket.sectionId,
          sectionTitle: bucket.sectionTitle,
          chapterId,
          chapterTitle,
        })
        progress = true
      }
    }
  }
  return picked
}

// ---------------------------------------------------------------- helpers --

function intIn(v: unknown, min: number, max: number): number | null {
  const n = Number(v)
  if (!Number.isFinite(n)) return null
  const t = Math.trunc(n)
  return t >= min && t <= max ? t : null
}

function safeParseArray(raw: string | null): unknown[] {
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

// -------------------------------------------------------------------- POST --

/** POST /api/paper-dna/mock — assemble a mock paper (stateless, no LLM) */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as {
      deviceId?: unknown
      analysisId?: unknown
      spec?: unknown
      seed?: unknown
    } | null

    const deviceId = typeof body?.deviceId === 'string' ? body.deviceId.trim() : ''
    if (!deviceId) {
      return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
    }

    const spec: Spec =
      body?.spec && typeof body.spec === 'object' ? (body.spec as Spec) : {}

    // ---- resolve the blueprint (chapters + relative weights) --------------

    let chapters: { chapterId: string; chapterTitle: string; weight: number }[] = []
    let totalRequested: number
    let minutes: number

    const analysisId = typeof body?.analysisId === 'string' ? body.analysisId.trim() : ''

    if (analysisId) {
      const row = await db.paperAnalysis.findUnique({ where: { id: analysisId } })
      if (!row || row.deviceId !== deviceId) {
        return NextResponse.json({ error: 'Analysis not found.' }, { status: 404 })
      }
      const counts = new Map<string, { n: number; title: string }>()
      for (const item of safeParseArray(row.questions)) {
        if (!item || typeof item !== 'object') continue
        const q = item as AnalysisQuestion
        if (typeof q.chapterId !== 'string' || !q.chapterId || q.chapterId === 'unmapped') continue
        const entry = counts.get(q.chapterId)
        if (entry) entry.n++
        else
          counts.set(q.chapterId, {
            n: 1,
            title:
              (typeof q.chapterTitle === 'string' && q.chapterTitle) ||
              getChapter(q.chapterId)?.title ||
              q.chapterId,
          })
      }
      if (!counts.size) {
        return NextResponse.json(
          { error: 'That analysis has no mapped chapters to forge from.' },
          { status: 400 }
        )
      }
      chapters = [...counts.entries()]
        .sort((a, b) => b[1].n - a[1].n)
        .slice(0, MAX_CHAPTERS)
        .map(([chapterId, { n, title }]) => ({ chapterId, chapterTitle: title, weight: n }))

      const mappedCount = [...counts.values()].reduce((a, c) => a + c.n, 0)
      totalRequested =
        intIn(spec.totalQuestions, MIN_QUESTIONS, MAX_QUESTIONS) ??
        Math.min(60, Math.max(MIN_QUESTIONS, Math.round(mappedCount * 0.75)))
      minutes =
        intIn(spec.minutes, MIN_MINUTES, MAX_MINUTES) ??
        Math.min(MAX_MINUTES, Math.max(MIN_MINUTES, Math.round(totalRequested * 1.2)))
    } else {
      if (!Array.isArray(spec.chapters) || spec.chapters.length === 0) {
        return NextResponse.json(
          { error: 'Provide either an analysisId or spec.chapters.' },
          { status: 400 }
        )
      }
      if (spec.chapters.length > MAX_CHAPTERS) {
        return NextResponse.json(
          { error: `At most ${MAX_CHAPTERS} chapters per blueprint.` },
          { status: 400 }
        )
      }
      const seen = new Set<string>()
      for (const raw of spec.chapters) {
        if (!raw || typeof raw !== 'object') {
          return NextResponse.json({ error: 'Invalid chapter entry in spec.' }, { status: 400 })
        }
        const c = raw as Record<string, unknown>
        if (typeof c.chapterId !== 'string' || !c.chapterId.trim()) {
          return NextResponse.json({ error: 'chapterId must be a string.' }, { status: 400 })
        }
        const chapterId = c.chapterId.trim()
        if (seen.has(chapterId)) continue
        const weight = Number(c.weight)
        if (!Number.isFinite(weight) || weight <= 0 || weight > MAX_WEIGHT) {
          return NextResponse.json(
            { error: `Weight for ${chapterId} must be above 0 and at most ${MAX_WEIGHT}.` },
            { status: 400 }
          )
        }
        const chapter = getChapter(chapterId)
        if (!chapter) {
          return NextResponse.json(
            { error: `Unknown chapter id: "${chapterId}".` },
            { status: 400 }
          )
        }
        seen.add(chapterId)
        chapters.push({ chapterId, chapterTitle: chapter.title, weight })
      }
      if (!chapters.length) {
        return NextResponse.json({ error: 'No usable chapters in the spec.' }, { status: 400 })
      }

      const requested = intIn(spec.totalQuestions, MIN_QUESTIONS, MAX_QUESTIONS)
      if (requested === null) {
        return NextResponse.json(
          {
            error: `totalQuestions must be an integer between ${MIN_QUESTIONS} and ${MAX_QUESTIONS}.`,
          },
          { status: 400 }
        )
      }
      const mins = intIn(spec.minutes, MIN_MINUTES, MAX_MINUTES)
      if (mins === null) {
        return NextResponse.json(
          { error: `minutes must be an integer between ${MIN_MINUTES} and ${MAX_MINUTES}.` },
          { status: 400 }
        )
      }
      totalRequested = requested
      minutes = mins
    }

    // ---- pools --------------------------------------------------------------

    const pools = chapters.map((c) => chapterPool(c.chapterId))
    const available = pools.map((p) => p.reduce((a, b) => a + b.questions.length, 0))
    const totalAvailable = available.reduce((a, b) => a + b, 0)
    if (totalAvailable === 0) {
      return NextResponse.json(
        { error: 'No quiz questions exist for those chapters yet.' },
        { status: 400 }
      )
    }

    // ---- allocation (proportional to weights, availability-aware) -----------

    const weights = chapters.map((c) => c.weight)
    const raw = allocateByWeight(weights, totalRequested)
    const alloc = capAllocation(raw, available, weights)

    // ---- seeded sampling ----------------------------------------------------

    const seedNum = Number(body?.seed)
    const seed =
      Number.isFinite(seedNum) && seedNum >= 0 && seedNum <= 0xffffffff
        ? Math.trunc(seedNum)
        : Date.now() >>> 0
    const rand = mulberry32(seed)

    const sections: {
      sectionId: string
      chapterId: string
      chapterTitle: string
      questions: OutQuestion[]
    }[] = []
    const blueprint: BlueprintRow[] = chapters.map((c, i) => ({
      chapterId: c.chapterId,
      chapterTitle: c.chapterTitle,
      weight: c.weight,
      requested: raw[i],
      served: 0,
      available: available[i],
    }))

    chapters.forEach((c, i) => {
      const picked = sampleChapter(pools[i], alloc[i], rand, c.chapterId, c.chapterTitle)
      blueprint[i].served = picked.length
      if (picked.length) {
        sections.push({
          sectionId: c.chapterId, // the mock section's key IS its blueprint chapter
          chapterId: c.chapterId,
          chapterTitle: c.chapterTitle,
          questions: picked,
        })
      }
    })

    const servedTotal = blueprint.reduce((a, b) => a + b.served, 0)
    if (servedTotal < MIN_QUESTIONS && servedTotal < totalAvailable) {
      // defensive: allocation math should prevent this, never serve a stub paper
      return NextResponse.json(
        { error: 'Could not assemble enough questions for that blueprint.' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      mockId: `mock-${seed.toString(36)}-${servedTotal.toString(36)}`,
      sections,
      meta: {
        totalQuestions: servedTotal,
        requested: totalRequested,
        minutes,
        seed,
        blueprint,
        sampling: 'seeded (mulberry32) · proportional to weights · spread across sections',
        difficulty: 'uniform — the bank carries no per-question difficulty signal',
      },
    })
  } catch (err) {
    console.error('[api/paper-dna/mock POST]', err)
    return NextResponse.json(
      { error: 'Could not forge the mock paper — please try again.' },
      { status: 500 }
    )
  }
}

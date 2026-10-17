'use client'

// ============================================================================
// X1 — COGNITIVE DIGITAL TWIN · the "Brain Scan" view
// A live neural visualisation of the BKT mastery model served by /api/twin.
// Evidenced skills become neurons on mastery rings — urgency drives the pulse
// rate, forgetting draws dashed halos, chapter chains become synapses.
// Every node, chip and row clicks through to the underlying lesson.
// ============================================================================

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Markdown from 'react-markdown'
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Brain,
  ChevronDown,
  ChevronRight,
  Loader2,
  Minus,
  RefreshCw,
  Share2,
  Sparkles,
  Stethoscope,
  Timer,
  TrendingDown,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { useStudy } from '@/store/useStudy'
import type { SubjectRollup, TwinForecast, TwinSkill, TwinSnapshot } from '@/lib/twin'
import { TwinGraph } from '@/components/app/twin-graph'

// ------------------------------ shared visuals ------------------------------

const RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const STAGGER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}
const RISE: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

type Tone = 'rose' | 'emerald' | 'amber'
const TONES: Record<Tone, { label: string; bar: string; tabOn: string }> = {
  rose: {
    label: 'text-rose-300/90',
    bar: 'bg-gradient-to-r from-rose-500 to-rose-400',
    tabOn: 'bg-rose-400/15 text-rose-200',
  },
  emerald: {
    label: 'text-emerald-300/90',
    bar: 'bg-gradient-to-r from-emerald-500 to-teal-300',
    tabOn: 'bg-emerald-400/15 text-emerald-200',
  },
  amber: {
    label: 'text-amber-300/90',
    bar: 'bg-gradient-to-r from-amber-500 to-amber-300',
    tabOn: 'bg-amber-400/15 text-amber-200',
  },
}

// ------------------------------ API payload types ----------------------------

interface TwinData {
  computedAt: string
  totals: {
    evidenceEvents: number
    evidencedSkills: number
    universe: number
    strongSkills: number
    fragileSkills: number
    decayingSkills: number
  }
  forecast: TwinForecast
  subjects: SubjectRollup[]
  weak: TwinSkill[]
  strong: TwinSkill[]
  decaying: TwinSkill[]
  skillCount: number
}

// ------------------------------ X1 Pro · AI diagnosis payload -----------------

interface InsightSkill {
  key: string
  number: number
  title: string
  chapterTitle: string
  subjectName: string
  mastery: number
  urgency: number
  evidence: number
  lastSeen: string | null
  trend: number
  lost: number
}

interface InsightChainLink {
  key: string
  number: number
  title: string
  mastery: number | null // null → untouched prerequisite
}

interface InsightPath {
  subject: string
  target: { key: string; number: number; title: string; mastery: number }
  chain: InsightChainLink[] // root-first
  summary: string
}

interface InsightData {
  diagnosis: string
  criticalPaths: InsightPath[]
  weakestSkills: InsightSkill[]
  llm: boolean
  stats: {
    computedAt: string
    evidenceEvents: number
    evidencedSkills: number
    universe: number
    strongSkills: number
    fragileSkills: number
    decayingSkills: number
    velocityPerDay: number
    projectedCoverage7d: number
    projectedCoverage30d: number
    daysToFullCoverage: number | null
    subjectsLit: number
    weakestSubjects: {
      subjectId: string
      subjectName: string
      inferredMastery: number
      evidencedSkills: number
      skills: number
    }[]
  }
}

// ------------------------------ colour + format helpers ----------------------

type RGB = [number, number, number]
const ROSE: RGB = [251, 113, 133] // #fb7185 — shaky
const AMBER: RGB = [251, 191, 36] // #fbbf24 — building
const EMERALD: RGB = [52, 211, 153] // #34d399 — stable
const GHOST_RGB: RGB = [138, 148, 142] // neutral, theme-safe placeholder grey

function mixRGB(a: RGB, b: RGB, t: number): RGB {
  const k = Math.min(1, Math.max(0, t))
  return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k]
}
function rgba(c: RGB, alpha = 1): string {
  return `rgba(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])}, ${alpha})`
}
/** mastery → pulse colour: rose below 0.3 → amber at 0.5 → emerald from 0.75 */
function masteryRGB(p: number): RGB {
  if (p < 0.3) return ROSE
  if (p < 0.5) return mixRGB(ROSE, AMBER, (p - 0.3) / 0.2)
  if (p < 0.75) return mixRGB(AMBER, EMERALD, (p - 0.5) / 0.25)
  return EMERALD
}
function masteryText(p: number): string {
  if (p >= 0.75) return 'text-emerald-300'
  if (p >= 0.4) return 'text-amber-300'
  return 'text-rose-300'
}
function hexToRGB(hex: string): RGB {
  const h = hex.replace('#', '')
  const v = h.length === 3 ? h.split('').map((c) => c + c).join('') : h.slice(0, 6)
  const n = Number.parseInt(v, 16)
  if (Number.isNaN(n)) return EMERALD
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}
/** deterministic 0..1 hash — stable node phases across renders */
function hash01(str: string): number {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return ((h >>> 0) % 10007) / 10007
}
function timeAgo(iso: string | null): string {
  if (!iso) return 'never'
  const ms = Date.now() - new Date(iso).getTime()
  if (Number.isNaN(ms)) return '—'
  const min = ms / 60_000
  if (min < 1) return 'just now'
  if (min < 60) return `${Math.round(min)}m ago`
  const hrs = min / 60
  if (hrs < 24) return `${Math.round(hrs)}h ago`
  const days = hrs / 24
  if (days < 45) return `${Math.round(days)}d ago`
  return new Date(iso).toLocaleDateString()
}
const fmtInt = (n: number): string => n.toLocaleString()
/** coverage percentages are tiny — keep a decimal until they matter */
const covPct = (x: number): string => {
  const v = x * 100
  return v >= 10 ? `${Math.round(v)}%` : `${v.toFixed(1)}%`
}
function fmtHorizon(d: number | null): string {
  if (d === null) return '—'
  if (d <= 0) return 'complete'
  if (d < 1000) return `${fmtInt(d)}d`
  return `~${Math.round(d / 365)}y`
}

// ------------------------------ brain layout ---------------------------------

/** mastery annuli (fractions of the scan radius): core = stable, edge = shaky */
const BANDS: { lo: number; hi: number }[] = [
  { lo: 0.14, hi: 0.38 },
  { lo: 0.46, hi: 0.70 },
  { lo: 0.76, hi: 0.97 },
]
const GOLDEN = Math.PI * (3 - Math.sqrt(5))
const MAX_NODES = 180

interface BrainNode {
  key: string
  tx: number // -1..1 position on the unit disc
  ty: number
  baseR: number
  freq: number // pulse speed in Hz — urgency-driven
  phase: number
  urgency: number
  rgb: RGB // mastery pulse colour
  accent: RGB // subject accent fill
  decaying: boolean
  ghost: boolean
  skill?: TwinSkill
}

function bandOf(p: number): number {
  return p >= 0.75 ? 0 : p >= 0.4 ? 1 : 2
}

function buildGhostNodes(): BrainNode[] {
  return Array.from({ length: 40 }, (_, i) => {
    const r = 0.15 + 0.8 * (i / 39)
    const a = i * GOLDEN + 0.9
    return {
      key: `ghost-${i}`,
      tx: Math.cos(a) * r,
      ty: Math.sin(a) * r,
      baseR: 2.6 + hash01(`g${i}`) * 2.6,
      freq: 0.3,
      phase: hash01(`p${i}`),
      urgency: 0,
      rgb: GHOST_RGB,
      accent: GHOST_RGB,
      decaying: false,
      ghost: true,
    }
  })
}

function buildBrain(skills: TwinSkill[], accents: Map<string, string>): { nodes: BrainNode[]; edges: [number, number][] } {
  if (skills.length === 0) return { nodes: buildGhostNodes(), edges: [] }

  // cap the scan at the most relevant nodes (urgency + mastery + decay risk)
  const ranked = [...skills]
    .sort((a, b) => b.urgency + b.p + (b.raw - b.p) - (a.urgency + a.p + (a.raw - a.p)))
    .slice(0, MAX_NODES)

  const buckets: TwinSkill[][] = [[], [], []]
  for (const s of ranked) buckets[bandOf(s.p)].push(s)

  const nodes: BrainNode[] = []
  const bandPhase = [0.7, 2.1, 3.9]
  buckets.forEach((bucket, bi) => {
    const band = BANDS[bi]
    const n = bucket.length
    bucket.sort((a, b) => a.key.localeCompare(b.key))
    bucket.forEach((s, i) => {
      // golden-angle spiral inside the annulus — organic, never clumps
      const frac = n > 1 ? i / (n - 1) : 0.5
      const r = band.lo + (band.hi - band.lo) * frac
      const a = i * GOLDEN + bandPhase[bi]
      nodes.push({
        key: s.key,
        tx: Math.cos(a) * r,
        ty: Math.sin(a) * r,
        baseR: 3.2 + Math.min(5.5, Math.sqrt(Math.max(1, s.evidenceCount)) * 1.7),
        freq: 0.45 + s.urgency * 2.2,
        phase: hash01(s.key),
        urgency: s.urgency,
        rgb: masteryRGB(s.p),
        accent: hexToRGB(accents.get(s.subjectId) ?? '#34d399'),
        decaying: s.raw - s.p > 0.08,
        ghost: false,
        skill: s,
      })
    })
  })

  // synapses: chain sequential skills inside the same chapter
  const byChapter = new Map<string, BrainNode[]>()
  for (const nd of nodes) {
    if (!nd.skill) continue
    const arr = byChapter.get(nd.skill.chapterId)
    if (arr) arr.push(nd)
    else byChapter.set(nd.skill.chapterId, [nd])
  }
  const index = new Map(nodes.map((nd, i) => [nd.key, i]))
  const edges: [number, number][] = []
  for (const arr of byChapter.values()) {
    arr.sort((a, b) => (a.skill?.number ?? 0) - (b.skill?.number ?? 0))
    for (let i = 1; i < arr.length; i++) {
      const a = index.get(arr[i - 1].key)
      const b = index.get(arr[i].key)
      if (a !== undefined && b !== undefined) edges.push([a, b])
    }
  }
  return { nodes, edges }
}

function geometry(w: number, h: number): { cx: number; cy: number; R: number } {
  return { cx: w / 2, cy: h / 2, R: (Math.min(w, h) / 2) * 0.94 }
}

function nodeAt(nodes: BrainNode[], mx: number, my: number, w: number, h: number): BrainNode | null {
  const { cx, cy, R } = geometry(w, h)
  let best: BrainNode | null = null
  let bestD = Infinity
  for (const nd of nodes) {
    if (nd.ghost) continue
    const d = Math.hypot(mx - (cx + nd.tx * R), my - (cy + nd.ty * R))
    if (d <= nd.baseR + 9 && d < bestD) {
      best = nd
      bestD = d
    }
  }
  return best
}

// ------------------------------ canvas renderer ------------------------------

function drawFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
  nodes: BrainNode[],
  edges: [number, number][],
  hoverKey: string | null,
  edgeColor: string,
  ghost: boolean
) {
  ctx.clearRect(0, 0, w, h)
  const { cx, cy, R } = geometry(w, h)

  // nucleus glow — the twin's core
  const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.55)
  core.addColorStop(0, ghost ? 'rgba(140,148,142,0.08)' : 'rgba(52,211,153,0.10)')
  core.addColorStop(1, 'rgba(52,211,153,0)')
  ctx.fillStyle = core
  ctx.fillRect(0, 0, w, h)

  // mastery band guides
  ctx.save()
  ctx.setLineDash([2, 7])
  ctx.lineWidth = 1
  ctx.strokeStyle = edgeColor
  ctx.globalAlpha = 0.35
  for (const band of BANDS) {
    ctx.beginPath()
    ctx.arc(cx, cy, ((band.lo + band.hi) / 2) * R, 0, Math.PI * 2)
    ctx.stroke()
  }
  ctx.restore()

  // chapter-chain synapses
  if (edges.length) {
    ctx.save()
    ctx.strokeStyle = edgeColor
    ctx.globalAlpha = 0.22
    ctx.lineWidth = 1
    ctx.beginPath()
    for (const [a, b] of edges) {
      const na = nodes[a]
      const nb = nodes[b]
      if (!na || !nb) continue
      ctx.moveTo(cx + na.tx * R, cy + na.ty * R)
      ctx.lineTo(cx + nb.tx * R, cy + nb.ty * R)
    }
    ctx.stroke()
    ctx.restore()
  }

  // neurons
  for (const nd of nodes) {
    const x = cx + nd.tx * R
    const y = cy + nd.ty * R
    const hovered = hoverKey !== null && !nd.ghost && nd.key === hoverKey
    const osc = 0.5 + 0.5 * Math.sin(2 * Math.PI * nd.freq * t + nd.phase * Math.PI * 2)
    const r = nd.baseR * (1 + 0.17 * osc)

    // breathing halo — mastery-coloured, urgency-scaled reach
    const glowR = r + 5 + (nd.ghost ? 4 : 10 * (0.35 + 0.65 * nd.urgency)) * (0.6 + 0.4 * osc)
    const halo = ctx.createRadialGradient(x, y, r * 0.4, x, y, glowR)
    halo.addColorStop(0, rgba(nd.rgb, nd.ghost ? 0.12 : 0.2 + 0.22 * osc))
    halo.addColorStop(1, rgba(nd.rgb, 0))
    ctx.fillStyle = halo
    ctx.beginPath()
    ctx.arc(x, y, glowR, 0, Math.PI * 2)
    ctx.fill()

    // decaying memory — rotating dashed halo
    if (nd.decaying) {
      ctx.save()
      ctx.setLineDash([3, 4])
      ctx.lineDashOffset = -t * 14
      ctx.strokeStyle = 'rgba(251,191,36,0.55)'
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.arc(x, y, r + 4.5, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }

    // body — subject accent
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = rgba(nd.accent, nd.ghost ? 0.26 : 0.92)
    ctx.fill()

    // mastery rim
    ctx.lineWidth = hovered ? 2.6 : 1.5
    ctx.strokeStyle = rgba(nd.rgb, hovered ? 1 : 0.85)
    ctx.stroke()

    // specular highlight for depth
    if (!nd.ghost && r > 4) {
      ctx.beginPath()
      ctx.arc(x - r * 0.28, y - r * 0.28, r * 0.3, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.3)'
      ctx.fill()
    }

    // hover focus ring
    if (hovered) {
      ctx.beginPath()
      ctx.arc(x, y, r + 7, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(52,211,153,0.9)'
      ctx.lineWidth = 1.6
      ctx.stroke()
    }
  }
}

// ------------------------------ the brain scan -------------------------------

function BrainScan({
  skills,
  accents,
  onOpen,
}: {
  skills: TwinSkill[]
  accents: Map<string, string>
  onOpen: (sectionId: string) => void
}) {
  const reduced = useReducedMotion() ?? false
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const hoverRef = useRef<string | null>(null)
  const [w, setW] = useState(0)
  const [hover, setHover] = useState<{ key: string; x: number; y: number } | null>(null)

  const h = w < 520 ? 300 : 380
  const empty = skills.length === 0
  const { nodes, edges } = useMemo(() => buildBrain(skills, accents), [skills, accents])
  const skillByKey = useMemo(() => new Map(skills.map((s) => [s.key, s])), [skills])

  // responsive width
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0
      setW(Math.round(width))
    })
    ro.observe(el)
    setW(el.clientWidth)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    hoverRef.current = hover?.key ?? null
  }, [hover])

  // animation loop — DPR-aware, theme-aware edge colour, reduced-motion safe
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || w < 10) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    let edgeColor = 'rgba(140,148,142,0.5)'
    let lastColorRead = 0
    let raf = 0
    const start = performance.now()
    const frame = (now: number) => {
      if (now - lastColorRead > 1500) {
        edgeColor = getComputedStyle(canvas).color || edgeColor
        lastColorRead = now
      }
      const t = reduced ? 0 : (now - start) / 1000
      drawFrame(ctx, w, h, t, nodes, edges, hoverRef.current, edgeColor, empty)
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [nodes, edges, w, h, reduced, empty])

  const handleMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas || empty) return
    const rect = canvas.getBoundingClientRect()
    const nd = nodeAt(nodes, e.clientX - rect.left, e.clientY - rect.top, w, h)
    if (!nd) {
      if (hover) setHover(null)
      return
    }
    const { cx, cy, R } = geometry(w, h)
    const x = cx + nd.tx * R
    const y = cy + nd.ty * R
    if (!hover || hover.key !== nd.key) setHover({ key: nd.key, x, y })
  }

  const handleClick = () => {
    if (hover) onOpen(hover.key)
  }

  const hoveredSkill = hover ? skillByKey.get(hover.key) : undefined
  const flip = hover ? hover.y < 120 : false
  const tipX = hover ? Math.min(Math.max(hover.x, 112), Math.max(112, w - 112)) : 0

  return (
    <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          <Activity className="h-3.5 w-3.5" aria-hidden /> The brain scan
          <span className="ml-1 inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[9.5px] font-bold tracking-normal text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden /> live
          </span>
        </h2>
        <span className="font-mono text-[11px] text-muted-foreground">
          {empty ? 'awaiting first evidence' : `${skills.length} neurons · ${edges.length} synapses`}
        </span>
      </div>

      <div ref={wrapRef} className="relative w-full">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={empty ? 'Empty brain scan — placeholder neurons' : `Neural map of ${skills.length} evidenced skills`}
          className="block w-full text-muted-foreground"
          style={{ height: h, cursor: hover ? 'pointer' : 'default' }}
          onMouseMove={handleMove}
          onMouseLeave={() => setHover(null)}
          onClick={handleClick}
        />

        {/* hover tooltip — anchored to the neuron, clamped to the card */}
        {hover && hoveredSkill && (
          <div
            className="pointer-events-none absolute z-10 w-52 rounded-xl border border-border/80 bg-card/95 p-3 text-card-foreground shadow-xl backdrop-blur-sm"
            style={{ left: tipX, top: flip ? hover.y + 14 : hover.y - 14, transform: flip ? 'translate(-50%, 0)' : 'translate(-50%, -100%)' }}
          >
            <p className="text-[12px] font-bold leading-tight">
              §{hoveredSkill.number} {hoveredSkill.title}
            </p>
            <p className="mt-0.5 truncate text-[10.5px] text-muted-foreground">
              {hoveredSkill.chapterTitle} · {hoveredSkill.subjectName}
            </p>
            <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 font-mono text-[10.5px]">
              <span className="text-muted-foreground">mastery</span>
              <span className={`text-right font-bold ${masteryText(hoveredSkill.p)}`}>
                {Math.round(hoveredSkill.p * 100)}%
              </span>
              <span className="text-muted-foreground">urgency</span>
              <span className="text-right text-rose-300">{Math.round(hoveredSkill.urgency * 100)}%</span>
              <span className="text-muted-foreground">evidence</span>
              <span className="text-right text-muted-foreground">{fmtInt(hoveredSkill.evidenceCount)}</span>
              <span className="text-muted-foreground">last seen</span>
              <span className="text-right text-muted-foreground">{timeAgo(hoveredSkill.lastEvidenceAt)}</span>
            </div>
            <p className="mt-2 text-[10px] text-emerald-300/80">click to open the lesson →</p>
          </div>
        )}

        {/* no evidence yet — ghost cortex + invitation */}
        {empty && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
            <div className="max-w-[280px] rounded-2xl border border-border/70 bg-card/90 p-5 text-center shadow-lg backdrop-blur-sm">
              <Brain className="mx-auto h-5 w-5 text-emerald-300/70" aria-hidden />
              <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">
                Open lessons, quiz, or visit the studio — your twin lights up with every answer.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* legend */}
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 px-1 text-[10.5px] text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span
            className="h-1.5 w-20 rounded-full"
            style={{ background: 'linear-gradient(90deg, #fb7185, #fbbf24, #34d399)' }}
            aria-hidden
          />
          mastery · shaky → stable
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-rose-400" aria-hidden /> fast pulse = urgent
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 [animation-duration:2600ms]" aria-hidden /> slow
          breath = stable
        </span>
        <span className="inline-flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
            <circle cx="7" cy="7" r="5" fill="none" stroke="#fbbf24" strokeWidth="1.4" strokeDasharray="2.5 2.5" />
          </svg>
          dashed halo = fading
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-px w-5 bg-muted-foreground/50" aria-hidden /> chapter chains
        </span>
        <span className="inline-flex items-center gap-1.5">rings · core stable, edge shaky</span>
      </div>
    </div>
  )
}

// ------------------------------ small atoms ----------------------------------

function TrendIcon({ trend }: { trend: number }) {
  if (trend > 0.08) return <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" aria-label="improving" />
  if (trend < -0.08) return <ArrowDownRight className="h-3.5 w-3.5 text-rose-400" aria-label="declining" />
  return <Minus className="h-3.5 w-3.5 text-muted-foreground/60" aria-label="flat" />
}

type BarKind = 'urgency' | 'mastery' | 'decay'
function SkillBar({ skill, kind }: { skill: TwinSkill; kind: BarKind }) {
  if (kind === 'decay') {
    const now = Math.min(100, skill.p * 100)
    const lost = Math.max(0, Math.min(100 - now, (skill.raw - skill.p) * 100))
    return (
      <div className="mt-1.5 flex h-1.5 overflow-hidden rounded-full bg-muted">
        <div className="h-full bg-emerald-400/70" style={{ width: `${now}%` }} />
        <div className="h-full bg-amber-400/60" style={{ width: `${lost}%` }} />
      </div>
    )
  }
  const pct = kind === 'urgency' ? skill.urgency * 100 : skill.p * 100
  return (
    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
      <div
        className={`h-full rounded-full ${kind === 'urgency' ? TONES.rose.bar : TONES.emerald.bar}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

function SkillRow({ skill, kind, onOpen }: { skill: TwinSkill; kind: BarKind; onOpen: (key: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(skill.key)}
      className={`group w-full rounded-xl px-2.5 py-2 text-left transition-colors hover:bg-muted/40 ${RING}`}
    >
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 shrink-0">
          <TrendIcon trend={skill.trend} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <span className="truncate text-[12.5px] font-semibold leading-snug">
              §{skill.number} {skill.title}
            </span>
            <span className={`shrink-0 font-mono text-[11px] ${masteryText(skill.p)}`}>{Math.round(skill.p * 100)}%</span>
          </div>
          <p className="mt-0.5 truncate text-[10.5px] text-muted-foreground">
            {skill.chapterTitle} · {skill.subjectName}
          </p>
          <SkillBar skill={skill} kind={kind} />
          {kind === 'decay' && (
            <p className="mt-1 font-mono text-[10px] text-amber-300/80">
              was {Math.round(skill.raw * 100)}% · lost {Math.round((skill.raw - skill.p) * 100)}pts
            </p>
          )}
          {kind === 'urgency' && (
            <p className="mt-1 font-mono text-[10px] text-muted-foreground">
              urgency {Math.round(skill.urgency * 100)}% · {timeAgo(skill.lastEvidenceAt)}
            </p>
          )}
        </div>
        <ChevronRight
          className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-300"
          aria-hidden
        />
      </div>
    </button>
  )
}

function SkillColumn({
  icon: Icon,
  title,
  hint,
  tone,
  skills,
  kind,
  empty,
  onOpen,
}: {
  icon: typeof TrendingUp
  title: string
  hint: string
  tone: Tone
  skills: TwinSkill[]
  kind: BarKind
  empty: string
  onOpen: (key: string) => void
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-border/80 bg-card p-4">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${TONES[tone].label}`}>
          <Icon className="h-3.5 w-3.5" aria-hidden /> {title}
        </h3>
        <span className="rounded-full border border-border/70 bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          {skills.length}
        </span>
      </div>
      <p className="mb-2 text-[11px] text-muted-foreground">{hint}</p>
      <div className="max-h-96 space-y-1 overflow-y-auto pr-1">
        {skills.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border/70 bg-muted/20 p-4 text-center text-[12px] text-muted-foreground">
            {empty}
          </p>
        ) : (
          skills.map((s) => <SkillRow key={s.key} skill={s} kind={kind} onOpen={onOpen} />)
        )}
      </div>
    </div>
  )
}

function StatChip({ icon: Icon, label, tone }: { icon: typeof Brain; label: string; tone: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
      <Icon className={`h-3 w-3 ${tone}`} aria-hidden />
      {label}
    </span>
  )
}

// ------------------------------ subject mastery ------------------------------

function SubjectBars({
  subjects,
  onOpen,
}: {
  subjects: SubjectRollup[]
  onOpen: (key: string) => void
}) {
  const weakestFirst = useMemo(
    () => [...subjects].sort((a, b) => a.inferredMastery - b.inferredMastery),
    [subjects]
  )
  return (
    <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          <TrendingDown className="h-3.5 w-3.5" aria-hidden /> Subject mastery — weakest first
        </h2>
        <span className="font-mono text-[11px] text-muted-foreground">{subjects.length} subjects lit</span>
      </div>
      {weakestFirst.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border/70 bg-muted/20 p-6 text-center text-[13px] text-muted-foreground">
          No subjects lit yet — answer anything and your weakest subjects surface here first.
        </p>
      ) : (
        <div className="max-h-96 divide-y divide-border/50 overflow-y-auto pr-1">
          {weakestFirst.map((sub, i) => {
            const pct = Math.round(sub.inferredMastery * 100)
            const weak = sub.weakest[0]
            return (
              <div key={sub.subjectId} className="py-2.5 first:pt-0.5 last:pb-0.5">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ background: sub.accent }}
                      aria-hidden
                    />
                    <span className="truncate text-[13px] font-semibold">{sub.subjectName}</span>
                  </span>
                  <span className="shrink-0 font-mono text-xs font-bold text-emerald-300">{pct}%</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: sub.accent, opacity: 0.85 }}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 + i * 0.035 }}
                  />
                </div>
                <div className="mt-1.5 flex flex-wrap items-center justify-between gap-1.5">
                  <span className="font-mono text-[10.5px] text-muted-foreground">
                    {fmtInt(sub.evidencedSkills)}/{fmtInt(sub.skills)} skills touched · {covPct(sub.coverage)} coverage
                  </span>
                  {weak && (
                    <button
                      type="button"
                      onClick={() => onOpen(weak.key)}
                      title={`Open lesson §${weak.number} ${weak.title}`}
                      className={`inline-flex max-w-full items-center gap-1 rounded-full border border-rose-400/25 bg-rose-400/10 px-2 py-0.5 text-[10.5px] font-medium text-rose-200 transition-colors hover:border-rose-400/50 hover:bg-rose-400/20 ${RING}`}
                    >
                      <span className="truncate">
                        weakest · §{weak.number} {weak.title}
                      </span>
                      <ChevronRight className="h-3 w-3 shrink-0" aria-hidden />
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ------------------------------ forecast strip -------------------------------

function ForecastSpark({ now, d7, d30 }: { now: number; d7: number; d30: number }) {
  const W = 320
  const H = 84
  const pts = useMemo(() => {
    const arr: { t: number; v: number }[] = []
    for (let i = 0; i <= 24; i++) {
      const t = (i / 24) * 30
      const v = t <= 7 ? now + ((d7 - now) * t) / 7 : d7 + ((d30 - d7) * (t - 7)) / 23
      arr.push({ t, v })
    }
    return arr
  }, [now, d7, d30])

  const vs = pts.map((p) => p.v)
  const lo = Math.min(...vs)
  const hi = Math.max(...vs)
  const span = Math.max(hi - lo, hi * 0.08, 0.0005)
  const min = lo - span * 0.1
  const max = hi + span * 0.18
  const x = (t: number) => 6 + (t / 30) * (W - 12)
  const y = (v: number) => H - 13 - ((v - min) / (max - min)) * (H - 26)
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(p.t).toFixed(1)},${y(p.v).toFixed(1)}`).join(' ')
  const area = `${path} L${x(30).toFixed(1)},${H - 4} L${x(0).toFixed(1)},${H - 4} Z`

  const dots = [
    { t: 0, v: now, label: 'now', anchor: 'start' as const, fill: '#fbbf24' },
    { t: 7, v: d7, label: '+7d', anchor: 'middle' as const, fill: '#34d399' },
    { t: 30, v: d30, label: '+30d', anchor: 'end' as const, fill: '#2dd4bf' },
  ]

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Projected coverage growth over the next 30 days"
    >
      <defs>
        <linearGradient id="twin-spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#twin-spark-fill)" />
      <path d={path} fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
      {dots.map((d) => (
        <g key={d.label}>
          <circle cx={x(d.t)} cy={y(d.v)} r="3" fill={d.fill} stroke="rgba(0,0,0,0.25)" strokeWidth="0.8" />
          <text
            x={d.t === 0 ? x(d.t) + 2 : d.t === 30 ? x(d.t) - 2 : x(d.t)}
            y={y(d.v) - 6}
            textAnchor={d.anchor}
            fontSize="9"
            className="fill-muted-foreground font-mono"
          >
            {covPct(d.v)}
          </text>
          <text
            x={d.t === 0 ? x(d.t) + 2 : d.t === 30 ? x(d.t) - 2 : x(d.t)}
            y={H - 2}
            textAnchor={d.anchor}
            fontSize="8.5"
            className="fill-muted-foreground/80 font-mono"
          >
            {d.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

function ForecastStrip({ forecast, totals }: { forecast: TwinForecast; totals: TwinData['totals'] }) {
  const covNow = totals.universe ? totals.evidencedSkills / totals.universe : 0
  const stats = [
    { icon: Zap, label: 'velocity', value: forecast.velocityPerDay.toFixed(1), unit: 'answers / day', tone: 'text-emerald-300' },
    { icon: Sparkles, label: 'projected +7d', value: covPct(forecast.projectedCoverage7d), unit: `from ${covPct(covNow)} now`, tone: 'text-teal-300' },
    { icon: Timer, label: 'projected +30d', value: covPct(forecast.projectedCoverage30d), unit: 'of the universe lit', tone: 'text-amber-300' },
    { icon: Activity, label: 'full coverage', value: fmtHorizon(forecast.daysToFullCoverage), unit: 'at this pace', tone: 'text-emerald-300' },
  ]
  return (
    <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
      <h2 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
        <Activity className="h-3.5 w-3.5" aria-hidden /> Forecast — where this pace takes you
      </h2>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border/60 bg-muted/20 p-3">
            <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              <s.icon className={`h-3 w-3 ${s.tone}`} aria-hidden /> {s.label}
            </p>
            <p className={`mt-1.5 font-mono text-xl font-bold ${s.tone}`}>{s.value}</p>
            <p className="mt-0.5 text-[10.5px] text-muted-foreground">{s.unit}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-border/60 bg-muted/20 p-3">
        <ForecastSpark now={covNow} d7={forecast.projectedCoverage7d} d30={forecast.projectedCoverage30d} />
      </div>
    </div>
  )
}

// ------------------------------ how it works ---------------------------------

const HOW_LINES = [
  'Every answer streams in as Bayesian evidence — lesson quizzes, flashcard recalls, reading progress, exam misses, plus reps from the studio, arena, labs and palaces.',
  'Each skill carries a mastery probability that climbs with correct evidence and quietly decays toward your subject baseline whenever it sits idle.',
  'Urgency blends weakness, decay risk and recent momentum — the scan pulses fastest on whatever needs you most right now.',
  'The forecast extrapolates your 28-day answer velocity into projected coverage of the whole skill universe.',
]

function HowItWorks() {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-border/80 bg-card">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between gap-3 px-5 py-4 text-left ${RING}`}
      >
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          <Sparkles className="h-3.5 w-3.5" aria-hidden /> How the twin thinks
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="how-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="grid gap-2.5 px-5 pb-5 sm:grid-cols-2">
              {HOW_LINES.map((line, i) => (
                <p key={i} className="flex gap-2 text-[12.5px] leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" aria-hidden />
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ------------------------------ X1 Pro · AI diagnosis panel -------------------

const DIAGNOSE_STAGES = [
  'weighing every skill’s evidence',
  'walking prerequisite chains',
  'checking decay and momentum',
  'writing the verdict',
]

function InsightStatTile({ icon: Icon, label, value, tone }: { icon: typeof Zap; label: string; value: string; tone: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-muted/20 p-3">
      <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
        <Icon className={`h-3 w-3 ${tone}`} aria-hidden /> {label}
      </p>
      <p className={`mt-1.5 font-mono text-lg font-bold ${tone}`}>{value}</p>
    </div>
  )
}

function TwinDiagnosis({ deviceId, onOpen }: { deviceId: string; onOpen: (key: string) => void }) {
  const [result, setResult] = useState<InsightData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [stage, setStage] = useState(0)

  const run = useCallback(async () => {
    setLoading(true)
    setError(false)
    setStage(0)
    try {
      const res = await fetch('/api/twin/insight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deviceId }),
      })
      if (!res.ok) throw new Error(`insight fetch failed: ${res.status}`)
      const json = (await res.json()) as InsightData
      setResult(json)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [deviceId])

  // rotate the "thinking" stage label while the LLM works
  useEffect(() => {
    if (!loading) return
    const t = setInterval(() => setStage((s) => (s + 1) % DIAGNOSE_STAGES.length), 3500)
    return () => clearInterval(t)
  }, [loading])

  const s = result?.stats

  return (
    <div className="rounded-2xl border border-border/80 bg-card/60 p-4 backdrop-blur-sm sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          <Stethoscope className="h-3.5 w-3.5" aria-hidden /> AI diagnosis — the coach reads your twin
        </h2>
        {result && (
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10.5px] ${
                result.llm
                  ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                  : 'border-amber-400/30 bg-amber-400/10 text-amber-300'
              }`}
            >
              {result.llm ? 'AI coach' : 'local fallback'}
            </span>
            <button
              type="button"
              onClick={() => void run()}
              disabled={loading}
              className={`inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-card px-3 py-1.5 text-[12px] font-semibold text-muted-foreground transition-colors hover:border-emerald-400/40 hover:text-emerald-200 disabled:opacity-60 ${RING}`}
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} aria-hidden />
              Re-run
            </button>
          </div>
        )}
      </div>

      {/* ---------------- idle ---------------- */}
      {!result && !loading && !error && (
        <div className="rounded-xl border border-dashed border-emerald-400/30 bg-emerald-400/5 p-6 text-center sm:p-8">
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10">
            <Stethoscope className="h-5 w-5 text-emerald-300" aria-hidden />
          </span>
          <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-muted-foreground">
            One deep pass over your whole twin — mastery rollups, decay risks and blocking prerequisite
            chains — distilled by a blunt-but-supportive cognitive coach into four sections: what your
            brain shows, what blocks it, three moves this week, and where your pace is heading.
          </p>
          <button
            type="button"
            onClick={() => void run()}
            className={`mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-400/15 px-5 py-2.5 text-sm font-semibold text-emerald-200 transition-colors hover:bg-emerald-400/25 ${RING}`}
          >
            <Sparkles className="h-4 w-4" aria-hidden /> Run Diagnosis
          </button>
          <p className="mt-2.5 font-mono text-[10.5px] text-muted-foreground/70">one LLM pass · ~10–20s</p>
        </div>
      )}

      {/* ---------------- loading ---------------- */}
      {loading && (
        <div className="rounded-xl border border-border/70 bg-muted/20 p-6 sm:p-8" aria-busy="true">
          <div className="flex items-center gap-3">
            <Loader2 className="h-5 w-5 animate-spin text-emerald-300" aria-hidden />
            <div>
              <p className="text-[13.5px] font-semibold">Reading your twin…</p>
              <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{DIAGNOSE_STAGES[stage]}</p>
            </div>
          </div>
          <div className="mt-5 space-y-2.5">
            {[92, 74, 58].map((w, i) => (
              <div
                key={i}
                className="h-2.5 animate-pulse rounded-full bg-muted"
                style={{ width: `${w}%`, animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* ---------------- error ---------------- */}
      {error && !loading && (
        <div className="rounded-xl border border-rose-400/30 bg-rose-400/5 p-6 text-center">
          <p className="text-[13.5px] font-semibold text-rose-200">The diagnosis didn&apos;t land</p>
          <p className="mx-auto mt-1 max-w-sm text-[12.5px] text-muted-foreground">
            The coach line dropped mid-session — your twin is fine. Try again.
          </p>
          <button
            type="button"
            onClick={() => void run()}
            className={`mt-4 inline-flex items-center gap-2 rounded-xl bg-rose-400/15 px-4 py-2 text-sm font-semibold text-rose-200 transition-colors hover:bg-rose-400/25 ${RING}`}
          >
            <RefreshCw className="h-4 w-4" aria-hidden /> Try again
          </button>
        </div>
      )}

      {/* ---------------- result ---------------- */}
      {result && !loading && s && (
        <div className="space-y-5">
          {/* stats row */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <InsightStatTile icon={Zap} label="velocity" value={s.velocityPerDay.toFixed(1)} tone="text-emerald-300" />
            <InsightStatTile icon={Timer} label="projected +30d" value={covPct(s.projectedCoverage30d)} tone="text-amber-300" />
            <InsightStatTile icon={TrendingDown} label="fragile" value={fmtInt(s.fragileSkills)} tone="text-rose-300" />
            <InsightStatTile icon={Activity} label="skills lit" value={`${fmtInt(s.evidencedSkills)}/${fmtInt(s.universe)}`} tone="text-emerald-300" />
          </div>

          {/* critical path chips */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-300/80">
              <ArrowRight className="h-3.5 w-3.5" aria-hidden /> Critical prerequisite paths
            </h3>
            {result.criticalPaths.length === 0 ? (
              <p className="mt-2 rounded-xl border border-dashed border-border/70 bg-muted/20 p-4 text-[12.5px] text-muted-foreground">
                No blocking prerequisite chains detected — weakness is spread, not stacked.
              </p>
            ) : (
              <div className="mt-2 space-y-2">
                {result.criticalPaths.map((path, i) => (
                  <div
                    key={`${path.target.key}-${i}`}
                    className="rounded-xl border border-border/70 bg-muted/20 p-3"
                  >
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {path.subject} · unblock this first
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {path.chain.map((link, j) => (
                        <span key={link.key} className="flex items-center gap-1.5">
                          {j > 0 && <ChevronRight className="h-3 w-3 text-muted-foreground/50" aria-hidden />}
                          <button
                            type="button"
                            onClick={() => onOpen(link.key)}
                            title={`Open §${link.number} ${link.title}`}
                            className={`inline-flex max-w-[240px] items-center gap-1.5 rounded-lg border border-border/70 bg-card px-2 py-1 text-[11px] font-medium transition-colors hover:border-emerald-400/40 hover:text-emerald-200 ${RING}`}
                          >
                            <span className="truncate">
                              §{link.number} {link.title}
                            </span>
                            <span
                              className={`shrink-0 font-mono text-[9.5px] font-bold ${
                                link.mastery === null ? 'text-muted-foreground' : masteryText(link.mastery)
                              }`}
                            >
                              {link.mastery === null ? '—' : `${Math.round(link.mastery * 100)}%`}
                            </span>
                          </button>
                        </span>
                      ))}
                      <ChevronRight className="h-3 w-3 text-muted-foreground/50" aria-hidden />
                      <button
                        type="button"
                        onClick={() => onOpen(path.target.key)}
                        title={`Open §${path.target.number} ${path.target.title}`}
                        className={`inline-flex max-w-[240px] items-center gap-1.5 rounded-lg border border-rose-400/30 bg-rose-400/10 px-2 py-1 text-[11px] font-semibold text-rose-200 transition-colors hover:border-rose-400/50 hover:bg-rose-400/20 ${RING}`}
                      >
                        <span className="truncate">
                          §{path.target.number} {path.target.title}
                        </span>
                        <span className="shrink-0 font-mono text-[9.5px] font-bold">
                          {Math.round(path.target.mastery * 100)}%
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* weakest skill pills */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/80">
              <TrendingDown className="h-3.5 w-3.5" aria-hidden /> Weakest skills right now
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {result.weakestSkills.map((skill) => (
                <button
                  key={skill.key}
                  type="button"
                  onClick={() => onOpen(skill.key)}
                  title={`Open §${skill.number} ${skill.title} — ${skill.chapterTitle}`}
                  className={`inline-flex max-w-[300px] items-center gap-1.5 rounded-full border border-border/70 bg-card px-2.5 py-1 text-[11px] font-medium transition-colors hover:border-amber-400/40 hover:text-amber-200 ${RING}`}
                >
                  <span className="truncate">
                    §{skill.number} {skill.title}
                  </span>
                  <span className={`shrink-0 font-mono text-[9.5px] font-bold ${masteryText(skill.mastery)}`}>
                    {Math.round(skill.mastery * 100)}%
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* markdown diagnosis */}
          <div className="rounded-xl border border-border/70 bg-card/70 p-4 sm:p-5">
            <div className="twin-diagnosis-markdown space-y-1 text-[13.5px] leading-relaxed text-foreground/90 [&_li]:ml-4 [&_li]:list-disc [&_ol>li]:list-decimal [&_p]:leading-relaxed [&_strong]:font-bold [&_strong]:text-emerald-300 [&_ul]:space-y-1 [&_ul]:pl-1">
              <Markdown
                components={{
                  p: ({ children }) => <p className="mt-3 first:mt-0">{children}</p>,
                  strong: ({ children }) => <strong>{children}</strong>,
                  ul: ({ children }) => <ul className="mt-2 list-disc space-y-1 pl-5">{children}</ul>,
                  ol: ({ children }) => <ol className="mt-2 list-decimal space-y-1 pl-5">{children}</ol>,
                }}
              >
                {result.diagnosis}
              </Markdown>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ------------------------------ loading + error ------------------------------

function TwinSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6" aria-busy="true" aria-label="Loading the brain scan">
      <div className="animate-pulse space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 shrink-0 rounded-2xl bg-muted/60" />
          <div className="space-y-2">
            <div className="h-6 w-64 max-w-full rounded-lg bg-muted/60" />
            <div className="h-3.5 w-80 max-w-full rounded bg-muted/40" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-7 w-36 rounded-full bg-muted/40" />
          ))}
        </div>
        <div className="h-[440px] rounded-2xl border border-border/60 bg-muted/30" />
        <div className="grid gap-4 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-72 rounded-2xl border border-border/60 bg-muted/30"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TwinError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md rounded-2xl border border-rose-400/30 bg-card p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-400/30 bg-rose-400/10">
          <Brain className="h-6 w-6 text-rose-300" aria-hidden />
        </span>
        <h1 className="mt-4 text-lg font-bold">The scan couldn&apos;t load</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Your twin is resting — the connection dropped mid-scan. Give it another try.
        </p>
        <button
          type="button"
          onClick={onRetry}
          className={`mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-200 transition-colors hover:bg-emerald-400/25 ${RING}`}
        >
          <RefreshCw className="h-4 w-4" aria-hidden /> Try again
        </button>
      </div>
    </div>
  )
}

// ------------------------------ the view -------------------------------------

export function TwinView() {
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const navigate = useStudy((s) => s.navigate)
  const deviceId = ensureDevice()

  const [data, setData] = useState<TwinData | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [refreshing, setRefreshing] = useState(false)
  const [refreshFailed, setRefreshFailed] = useState(false)
  const [colTab, setColTab] = useState<'weak' | 'strong' | 'decay'>('weak')
  const [mode, setMode] = useState<'scan' | 'graph' | 'diagnosis'>('scan')

  const load = useCallback(
    async (bust: boolean) => {
      setRefreshing(true)
      try {
        const res = await fetch(
          `/api/twin?deviceId=${encodeURIComponent(deviceId)}&weak=20${bust ? `&t=${Date.now()}` : ''}`
        )
        if (!res.ok) throw new Error(`twin fetch failed: ${res.status}`)
        const json = (await res.json()) as TwinData
        setData(json)
        setStatus('ready')
        setRefreshFailed(false)
      } catch {
        if (data) setRefreshFailed(true)
        else setStatus('error')
      } finally {
        setRefreshing(false)
      }
    },
    [deviceId, data]
  )

  useEffect(() => {
    void load(false)
  }, [deviceId])

  const openLesson = useCallback(
    (sectionId: string) => navigate({ name: 'lesson', sectionId }),
    [navigate]
  )

  const accents = useMemo(
    () => new Map((data?.subjects ?? []).map((s) => [s.subjectId, s.accent])),
    [data]
  )
  // every evidenced skill the API surfaces — top lists + per-subject rollups
  const brainSkills = useMemo(() => {
    if (!data) return []
    const map = new Map<string, TwinSkill>()
    for (const s of [...data.weak, ...data.strong, ...data.decaying]) map.set(s.key, s)
    for (const sub of data.subjects) {
      for (const s of [...sub.weakest, ...sub.strongest, ...sub.decaying]) map.set(s.key, s)
    }
    return [...map.values()]
  }, [data])

  // X1 Pro — a TwinSnapshot-shaped view of the API payload for the graph
  const snapshot = useMemo<TwinSnapshot | null>(
    () =>
      data
        ? {
            deviceId,
            computedAt: data.computedAt,
            skills: brainSkills,
            subjects: data.subjects,
            forecast: data.forecast,
            totals: data.totals,
          }
        : null,
    [data, deviceId, brainSkills]
  )

  if (!data) {
    if (status === 'error') {
      return <TwinError onRetry={() => void load(true)} />
    }
    return <TwinSkeleton />
  }

  const computedAt = new Date(data.computedAt)
  const computedLabel = Number.isNaN(computedAt.getTime())
    ? 'just now'
    : computedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const t = data.totals

  const columns = [
    {
      id: 'weak' as const,
      title: 'Weakest',
      hint: 'needs you now',
      icon: TrendingDown,
      tone: 'rose' as const,
      skills: data.weak,
      kind: 'urgency' as const,
      empty: 'Nothing flagged weak — keep the streak going.',
    },
    {
      id: 'strong' as const,
      title: 'Strongest',
      hint: 'banked mastery',
      icon: TrendingUp,
      tone: 'emerald' as const,
      skills: data.strong,
      kind: 'mastery' as const,
      empty: 'No banked mastery yet — strong skills land here.',
    },
    {
      id: 'decay' as const,
      title: 'Decaying',
      hint: 'fading — revisit soon',
      icon: Timer,
      tone: 'amber' as const,
      skills: data.decaying,
      kind: 'decay' as const,
      empty: 'No fading memories — everything you lit is fresh.',
    },
  ]
  const activeColumn = columns.find((c) => c.id === colTab) ?? columns[0]

  const viewTabs = [
    { id: 'scan' as const, label: 'Brain Scan', icon: Activity, hint: 'neural rings, mastery + decay' },
    { id: 'graph' as const, label: 'Knowledge Graph', icon: Share2, hint: 'prerequisite constellation' },
    { id: 'diagnosis' as const, label: 'AI Diagnosis', icon: Stethoscope, hint: 'the coach reads your twin' },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <motion.div variants={STAGGER} initial="hidden" animate="show" className="space-y-6">
        {/* ---------------- header ---------------- */}
        <motion.header variants={RISE}>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10">
                <Brain className="h-6 w-6 text-emerald-300" aria-hidden />
              </span>
              <div className="min-w-0">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Cognitive <span className="text-emerald-300">Digital Twin</span>
                </h1>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground sm:text-[15px]">
                  A live probabilistic model of what you know — pulsing between fading and stable.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden />
                computed {computedLabel}
              </span>
              {refreshFailed && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/30 bg-rose-400/10 px-2.5 py-1 text-[11px] font-medium text-rose-200">
                  last refresh failed — showing previous scan
                </span>
              )}
              <button
                type="button"
                onClick={() => void load(true)}
                disabled={refreshing}
                className={`inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card px-3.5 py-2 text-[12.5px] font-semibold text-muted-foreground transition-colors hover:border-emerald-400/40 hover:text-emerald-200 disabled:opacity-60 ${RING}`}
              >
                <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? 'animate-spin' : ''}`} aria-hidden />
                {refreshing ? 'Scanning…' : 'Refresh'}
              </button>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <StatChip
              icon={Brain}
              label={`${fmtInt(t.evidencedSkills)} / ${fmtInt(t.universe)} skills lit`}
              tone="text-emerald-300"
            />
            <StatChip icon={TrendingUp} label={`${fmtInt(t.strongSkills)} strong`} tone="text-emerald-300" />
            <StatChip icon={TrendingDown} label={`${fmtInt(t.fragileSkills)} fragile`} tone="text-rose-300" />
            <StatChip icon={Timer} label={`${fmtInt(t.decayingSkills)} decaying`} tone="text-amber-300" />
          </div>
        </motion.header>

        {/* ---------------- X1 Pro · view switch ---------------- */}
        <motion.nav variants={RISE} aria-label="Twin views">
          <div
            className="grid grid-cols-3 gap-1 rounded-xl border border-border/70 bg-card/60 p-1 backdrop-blur-sm"
            role="tablist"
            aria-label="Choose a twin view"
          >
            {viewTabs.map((tab) => {
              const active = mode === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setMode(tab.id)}
                  title={tab.hint}
                  className={`flex items-center justify-center gap-2 rounded-lg px-2 py-2 text-[12px] font-semibold transition-colors sm:text-[12.5px] ${RING} ${
                    active
                      ? 'bg-emerald-400/15 text-emerald-200'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <tab.icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  <span className="truncate">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </motion.nav>

        {mode === 'scan' && (
          <>
            {/* ---------------- the brain scan ---------------- */}
            <motion.section variants={RISE} aria-label="Brain scan">
              <BrainScan skills={brainSkills} accents={accents} onOpen={openLesson} />
            </motion.section>

            {/* ---------------- subject mastery ---------------- */}
            <motion.section variants={RISE} aria-label="Subject mastery">
              <SubjectBars subjects={data.subjects} onOpen={openLesson} />
            </motion.section>

            {/* ---------------- forecast ---------------- */}
            <motion.section variants={RISE} aria-label="Forecast">
              <ForecastStrip forecast={data.forecast} totals={t} />
            </motion.section>

            {/* ---------------- three columns ---------------- */}
            <motion.section variants={RISE} aria-label="Weakest, strongest and decaying skills">
              <div className="mb-3 grid grid-cols-3 gap-1 rounded-xl border border-border/70 bg-card/60 p-1 lg:hidden" role="tablist">
                {columns.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    aria-selected={colTab === c.id}
                    onClick={() => setColTab(c.id)}
                    className={`rounded-lg px-2 py-2 text-[12px] font-semibold transition-colors ${RING} ${
                      colTab === c.id ? TONES[c.tone].tabOn : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {c.title}{' '}
                    <span className="font-mono text-[10px] opacity-70">{c.skills.length}</span>
                  </button>
                ))}
              </div>
              <div className="lg:hidden">
                <SkillColumn {...activeColumn} onOpen={openLesson} />
              </div>
              <div className="hidden gap-4 lg:grid lg:grid-cols-3">
                {columns.map((c) => (
                  <SkillColumn key={c.id} {...c} onOpen={openLesson} />
                ))}
              </div>
            </motion.section>

            {/* ---------------- how it works ---------------- */}
            <motion.footer variants={RISE}>
              <HowItWorks />
            </motion.footer>
          </>
        )}

        {mode === 'graph' && snapshot && (
          <motion.section variants={RISE} aria-label="Knowledge graph">
            <TwinGraph snapshot={snapshot} onSelectSkill={openLesson} />
          </motion.section>
        )}

        {mode === 'diagnosis' && (
          <motion.section variants={RISE} aria-label="AI diagnosis">
            <TwinDiagnosis deviceId={deviceId} onOpen={openLesson} />
          </motion.section>
        )}
      </motion.div>
    </div>
  )
}

export default TwinView

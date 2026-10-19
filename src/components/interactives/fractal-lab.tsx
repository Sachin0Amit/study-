'use client'

import React, { useState, useRef, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Snowflake,
  Aperture,
  TreePine,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Info,
  RefreshCw,
  MousePointerClick
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

/* ================= shared scaffolding ================= */

// Fixed warm-charcoal stage for every canvas — reads identically in light & dark mode
const CANVAS_BG = '#0d0b09'

function Explainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mt-4 flex gap-2.5 rounded-xl border border-border/60 bg-muted/20 p-3.5"
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-500/80" />
      <p className="text-xs leading-relaxed text-muted-foreground font-serif italic">
        <span className="mr-1.5 font-sans not-italic font-semibold text-foreground/80">
          What to notice —
        </span>
        {children}
      </p>
    </motion.div>
  )
}

/* ---- smooth escape-time coloring: charcoal → umber → amber → cream ---- */

const PAL_STOPS: [number, number, number][] = [
  [28, 25, 23], // deep charcoal
  [120, 53, 15], // warm umber
  [245, 158, 11], // amber
  [254, 243, 199], // cream
]

function palette(t: number): [number, number, number] {
  const u = Math.max(0, Math.min(1, t)) * (PAL_STOPS.length - 1)
  const i = Math.min(PAL_STOPS.length - 2, Math.floor(u))
  const f = u - i
  const a = PAL_STOPS[i]
  const b = PAL_STOPS[i + 1]
  return [
    Math.round(a[0] + (b[0] - a[0]) * f),
    Math.round(a[1] + (b[1] - a[1]) * f),
    Math.round(a[2] + (b[2] - a[2]) * f),
  ]
}

/*
 * Progressive row-chunked escape-time renderer, shared by the Mandelbrot and
 * Julia canvases. Iterates z → z² + c in device pixels, colors with the
 * smoothed iteration count nu = n + 1 − log₂(log|z|), and yields to the
 * compositor every ~10 ms. Returns a cancel() that the effect cleanup calls,
 * so starting a new render abandons the old one mid-row.
 */
function startEscapeRender(
  canvas: HTMLCanvasElement,
  size: number,
  maxIter: number,
  view: { centerRe: number; centerIm: number; span: number },
  mode: 'mandelbrot' | 'julia',
  cFixed: { re: number; im: number },
  onProgress: (pct: number) => void
): () => void {
  const ctx = canvas.getContext('2d')
  if (!ctx) return () => {}
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const W = Math.max(1, Math.round(size * dpr))
  canvas.width = W
  canvas.height = W
  const img = ctx.createImageData(W, W)
  const data = img.data
  const upp = view.span / W // complex units per pixel
  const re0 = view.centerRe - view.span / 2
  const im1 = view.centerIm + view.span / 2
  const isMandel = mode === 'mandelbrot'

  onProgress(0) // a fresh job takes over — reset the bar immediately

  let row = 0
  let raf = 0
  let lastProg = 0
  let cancelled = false

  const step = () => {
    if (cancelled) return
    const t0 = performance.now()
    while (row < W && !cancelled && performance.now() - t0 < 10) {
      const im = im1 - row * upp
      for (let col = 0; col < W; col++) {
        const re = re0 + col * upp
        const o = (row * W + col) * 4
        if (isMandel) {
          // main cardioid + period-2 bulb early-out (classic interior test)
          const q = (re - 0.25) * (re - 0.25) + im * im
          if (q * (q + (re - 0.25)) < 0.25 * im * im || (re + 1) * (re + 1) + im * im < 0.0625) {
            data[o] = 18
            data[o + 1] = 14
            data[o + 2] = 12
            data[o + 3] = 255
            continue
          }
        }
        const cre = isMandel ? re : cFixed.re
        const cim = isMandel ? im : cFixed.im
        let x = isMandel ? 0 : re
        let y = isMandel ? 0 : im
        let x2 = x * x
        let y2 = y * y
        let n = 0
        while (x2 + y2 <= 16 && n < maxIter) {
          y = 2 * x * y + cim
          x = x2 - y2 + cre
          x2 = x * x
          y2 = y * y
          n++
        }
        if (n >= maxIter) {
          data[o] = 18
          data[o + 1] = 14
          data[o + 2] = 12 // interior: deepest charcoal
        } else {
          const nu = n + 1 - Math.log2(Math.log(Math.sqrt(x2 + y2)))
          const [rr, gg, bb] = palette(Math.pow(nu / maxIter, 0.42))
          data[o] = rr
          data[o + 1] = gg
          data[o + 2] = bb
        }
        data[o + 3] = 255
      }
      row++
    }
    ctx.putImageData(img, 0, 0)
    const now = performance.now()
    if (now - lastProg > 100 || row >= W) {
      lastProg = now
      onProgress(Math.round((row / W) * 100))
    }
    if (row < W) raf = requestAnimationFrame(step)
  }
  raf = requestAnimationFrame(step)
  return () => {
    cancelled = true
    cancelAnimationFrame(raf)
  }
}

/* probe one point of the Mandelbrot set for the divergence-speed readout */
function probeEscape(re: number, im: number, maxIter: number): string {
  let x = 0
  let y = 0
  let x2 = 0
  let y2 = 0
  let n = 0
  while (x2 + y2 <= 16 && n < maxIter) {
    y = 2 * x * y + im
    x = x2 - y2 + re
    x2 = x * x
    y2 = y * y
    n++
  }
  if (n >= maxIter) return 'interior — never escapes'
  const nu = n + 1 - Math.log2(Math.log(Math.sqrt(x2 + y2)))
  return `escapes after ${n} steps (smoothed ${nu.toFixed(1)})`
}

/* magnification label: ×250, ×10⁴, ×3.2·10⁷ … */
const SUPS: Record<string, string> = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' }
const supDigits = (n: number) =>
  String(n)
    .split('')
    .map((d) => SUPS[d] ?? d)
    .join('')

function fmtZoom(z: number): string {
  if (z < 1000) return `×${Math.round(z)}`
  const exp = Math.floor(Math.log10(z))
  const mant = z / Math.pow(10, exp)
  if (mant >= 9.95) return `×10${supDigits(exp + 1)}`
  if (Math.abs(mant - 1) < 0.05) return `×10${supDigits(exp)}`
  return `×${mant.toFixed(1)}·10${supDigits(exp)}`
}

/* ================= main export ================= */

export default function FractalLab() {
  const [tab, setTab] = useState('mandelbrot')
  // the Julia parameter — set from the Mandelbrot tab or tuned by sliders
  const [juliaC, setJuliaC] = useState<{ re: number; im: number }>({ re: -0.7269, im: 0.1889 })

  const juliaFromHere = (c: { re: number; im: number }) => {
    setJuliaC(c)
    setTab('julia')
  }

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-gradient-to-b from-card/95 via-card/80 to-background/95 p-4 md:p-6 shadow-xl backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-border/60 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Snowflake className="h-5 w-5" />
          </span>
          <div>
            <h3 className="flex flex-wrap items-center gap-2 text-xl font-bold tracking-tight text-foreground">
              Fractal Explorer Lab
              <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-xs text-amber-500">
                Fractals & Self-Similarity
              </Badge>
            </h3>
            <p className="text-xs text-muted-foreground">
              Dive into the Mandelbrot set, grow Julia sets and L-system trees, and watch a snowflake&apos;s
              perimeter run away to infinity.
            </p>
          </div>
        </div>
      </div>

      <Tabs value={tab} onValueChange={setTab} className="mt-5">
        <TabsList className="grid h-auto w-full grid-cols-2 p-1">
          <TabsTrigger value="mandelbrot" className="gap-1.5 py-1.5 text-xs sm:text-sm">
            <Aperture className="h-4 w-4" /> Mandelbrot
          </TabsTrigger>
          <TabsTrigger value="julia" className="gap-1.5 py-1.5 text-xs sm:text-sm">
            <TreePine className="h-4 w-4" /> Julia & Self-Similarity
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mandelbrot" className="mt-4">
          <MandelbrotTab onPickJulia={juliaFromHere} />
        </TabsContent>
        <TabsContent value="julia" className="mt-4">
          <JuliaTab c={juliaC} onCChange={setJuliaC} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

/* ================= tab 1 · mandelbrot ================= */

const MANDEL_SPAN = 3.5 // real-axis span at zoom 1: re ∈ [−2.5, 1]
const ZOOM_MAX = 1e12

function MandelbrotTab({ onPickJulia }: { onPickJulia: (c: { re: number; im: number }) => void }) {
  const [view, setView] = useState({ re: -0.75, im: 0, zoom: 1 })
  const [lastClick, setLastClick] = useState<{ re: number; im: number; escape: string } | null>(null)
  const [progress, setProgress] = useState(0)
  const [size, setSize] = useState(0) // square canvas edge, CSS px

  const wrapRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // adaptive iteration budget: 256 base, +128 per 10× zoom, capped at 2048
  const maxIter = useMemo(
    () => Math.min(2048, 256 + Math.round(128 * Math.log10(Math.max(1, view.zoom)))),
    [view.zoom]
  )

  /* responsive square: min(available width, 560px) */
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const w = Math.floor(entries[0].contentRect.width)
      if (w > 0) setSize((prev) => (prev === w ? prev : w))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  /* progressive render — a new view cancels any pending rows */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || size < 20) return
    return startEscapeRender(
      canvas,
      size,
      maxIter,
      { centerRe: view.re, centerIm: view.im, span: MANDEL_SPAN / view.zoom },
      'mandelbrot',
      { re: 0, im: 0 },
      setProgress
    )
  }, [size, view, maxIter])

  /* click to zoom in on the point · shift+click to zoom out */
  const onCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (size < 20) return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top
    const span = MANDEL_SPAN / view.zoom
    const re = view.re + (px - size / 2) * (span / size)
    const im = view.im - (py - size / 2) * (span / size) // canvas y grows downward
    setLastClick({ re, im, escape: probeEscape(re, im, maxIter) })
    setView((v) => ({
      re,
      im,
      zoom: e.shiftKey ? Math.max(1, v.zoom / 2) : Math.min(ZOOM_MAX, v.zoom * 2),
    }))
  }

  const juliaSeed = lastClick ?? { re: view.re, im: view.im }

  return (
    <div>
      {/* controls */}
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border/60 bg-muted/20 p-4">
        <Button
          size="sm"
          variant="outline"
          className="h-8 text-xs"
          onClick={() => setView((v) => ({ ...v, zoom: Math.max(1, v.zoom / 2) }))}
        >
          <ZoomOut className="h-3.5 w-3.5" /> Zoom out
        </Button>
        <Button size="sm" variant="outline" className="h-8 text-xs" onClick={() => setView({ re: -0.75, im: 0, zoom: 1 })}>
          <RotateCcw className="h-3.5 w-3.5" /> Reset
        </Button>
        <Button size="sm" className="h-8 text-xs" onClick={() => onPickJulia({ re: juliaSeed.re, im: juliaSeed.im })}>
          <Sparkles className="h-3.5 w-3.5" /> Julia from here
        </Button>
        <span className="ml-auto flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <MousePointerClick className="h-3.5 w-3.5" />
          click: zoom in · shift+click: zoom out
        </span>
      </div>

      {/* canvas */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mx-auto mt-4 w-full max-w-[560px]"
      >
        <div className="overflow-hidden rounded-lg border border-amber-900/40 shadow-inner">
          <div ref={wrapRef} className="relative aspect-square w-full bg-[#0d0b09]">
            <canvas ref={canvasRef} className="h-full w-full cursor-crosshair" onClick={onCanvasClick} />
          </div>
          <Progress value={progress} className="h-1 rounded-none" />
        </div>
      </motion.div>

      {/* readouts */}
      <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border/60 bg-muted/20 p-2.5">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">center (re, im)</div>
          <div className="font-mono text-xs font-bold text-foreground">
            ({view.re.toFixed(5)}, {view.im.toFixed(5)})
          </div>
        </div>
        <div className="rounded-lg border border-border/60 bg-muted/20 p-2.5">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">magnification</div>
          <div className="font-mono text-xs font-bold text-amber-500">{fmtZoom(view.zoom)}</div>
        </div>
        <div className="rounded-lg border border-border/60 bg-muted/20 p-2.5">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">max iterations</div>
          <div className="font-mono text-xs font-bold text-teal-400">{maxIter}</div>
        </div>
        <div className="col-span-2 rounded-lg border border-border/60 bg-muted/20 p-2.5 lg:col-span-1">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">last clicked point</div>
          {lastClick ? (
            <div className="font-mono text-xs font-bold text-rose-400">
              ({lastClick.re.toFixed(5)}, {lastClick.im.toFixed(5)}) — {lastClick.escape}
            </div>
          ) : (
            <div className="font-mono text-xs text-muted-foreground">click to probe divergence speed…</div>
          )}
        </div>
      </div>

      <Explainer>
        The black heart of the picture is the set of c values for which z → z² + c never escapes; the colors grade
        how fast everything else flees to infinity, and zooming anywhere along the boundary reveals new detail
        forever. Every point you click is also a recipe for a whole Julia set — press “Julia from here” to see the
        shape that point encodes. The iteration budget grows with magnification because deeper detail needs more
        patience to resolve.
      </Explainer>
    </div>
  )
}

/* ================= tab 2 · julia + self-similarity ================= */

const JULIA_PRESETS: { label: string; re: number; im: number }[] = [
  { label: 'Dendrite (0, 1)', re: 0, im: 1 },
  { label: 'Rabbit (−0.123 + 0.745i)', re: -0.123, im: 0.745 },
  { label: 'San Marco (−0.75 + 0i)', re: -0.75, im: 0 },
]

const fmtC = (c: { re: number; im: number }) =>
  `${c.re.toFixed(3)} ${c.im < 0 ? '−' : '+'} ${Math.abs(c.im).toFixed(3)}i`

function JuliaTab({ c, onCChange }: { c: { re: number; im: number }; onCChange: (c: { re: number; im: number }) => void }) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <JuliaCanvas c={c} onCChange={onCChange} />
        <FractalTree />
      </div>
      <KochSnowflake />
      <Explainer>
        A Julia set&apos;s entire personality lives in the single number c — seeds from the Mandelbrot boundary give
        the most intricate filaments, while the presets show its range from dendrite to rabbit to San Marco
        basilica. The tree and snowflake make self-similarity mechanical: one rule, applied at every scale. The
        snowflake&apos;s punchline is that each stage multiplies its perimeter by 4/3 — heading to infinity — while
        the area it encloses never exceeds 8/5 of the starting triangle.
      </Explainer>
    </div>
  )
}

/* ---- julia canvas (same coloring engine as the mandelbrot) ---- */

function JuliaCanvas({ c, onCChange }: { c: { re: number; im: number }; onCChange: (c: { re: number; im: number }) => void }) {
  const [progress, setProgress] = useState(0)
  const [size, setSize] = useState(0)

  const wrapRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const w = Math.floor(entries[0].contentRect.width)
      if (w > 0) setSize((prev) => (prev === w ? prev : w))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || size < 20) return
    return startEscapeRender(
      canvas,
      size,
      256,
      { centerRe: 0, centerIm: 0, span: 3.6 }, // re, im ∈ [−1.8, 1.8]
      'julia',
      c,
      setProgress
    )
  }, [size, c])

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-xl border border-border/60 bg-muted/10 p-4"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-semibold text-foreground">Julia set — zₙ₊₁ = zₙ² + c</span>
        <span className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-xs text-amber-500">
          c = {fmtC(c)}
        </span>
      </div>

      <div className="overflow-hidden rounded-lg border border-amber-900/40 shadow-inner">
        <div ref={wrapRef} className="relative aspect-square w-full bg-[#0d0b09]">
          <canvas ref={canvasRef} className="h-full w-full" />
        </div>
        <Progress value={progress} className="h-1 rounded-none" />
      </div>

      {/* preset chips */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {JULIA_PRESETS.map((p) => (
          <Button
            key={p.label}
            size="sm"
            variant={c.re === p.re && c.im === p.im ? 'default' : 'outline'}
            className="h-7 text-[11px]"
            onClick={() => onCChange({ re: p.re, im: p.im })}
          >
            {p.label}
          </Button>
        ))}
      </div>

      {/* c sliders */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between text-muted-foreground">
            <span>c.re:</span>
            <span className="font-mono font-bold text-foreground">{c.re.toFixed(3)}</span>
          </div>
          <Slider value={[c.re]} min={-2} max={2} step={0.001} onValueChange={([val]) => onCChange({ re: val, im: c.im })} />
        </div>
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between text-muted-foreground">
            <span>c.im:</span>
            <span className="font-mono font-bold text-foreground">{c.im.toFixed(3)}</span>
          </div>
          <Slider value={[c.im]} min={-2} max={2} step={0.001} onValueChange={([val]) => onCChange({ re: c.re, im: val })} />
        </div>
      </div>
    </motion.div>
  )
}

/* ---- animated L-system fractal tree ---- */

const TREE_SCALE = 0.72 // child branch length ÷ parent length

function FractalTree() {
  const [depth, setDepth] = useState(8)
  const [angle, setAngle] = useState(22)
  const [replayNonce, setReplayNonce] = useState(0)
  const [size, setSize] = useState({ w: 0, h: 300 })

  const wrapRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const w = Math.floor(entries[0].contentRect.width)
      if (w > 0) setSize((prev) => (prev.w === w ? prev : { ...prev, w }))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  /* growth animation: one depth level appears after another */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || size.w < 20) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = size.w * dpr
    canvas.height = size.h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const w = size.w
    const h = size.h
    const trunkLen = h * 0.23
    const baseX = w / 2
    const baseY = h - 12
    const branchAngle = (angle * Math.PI) / 180

    const draw = (progress: number) => {
      ctx.fillStyle = CANVAS_BG
      ctx.fillRect(0, 0, w, h)
      const visibleLevels = progress * depth
      // stack-based traversal: {x, y, ang, len, lvl}
      const stack: { x: number; y: number; ang: number; len: number; lvl: number }[] = [
        { x: baseX, y: baseY, ang: -Math.PI / 2, len: trunkLen, lvl: 0 },
      ]
      while (stack.length > 0) {
        const b = stack.pop()
        if (!b) continue
        const vis = Math.max(0, Math.min(1, visibleLevels - b.lvl))
        if (vis <= 0) continue
        // children always sprout from the FULL-grown tip
        const tipX = b.x + Math.cos(b.ang) * b.len
        const tipY = b.y + Math.sin(b.ang) * b.len
        // the branch itself grows to its current visible fraction
        const endX = b.x + Math.cos(b.ang) * b.len * vis
        const endY = b.y + Math.sin(b.ang) * b.len * vis
        const t = depth > 1 ? b.lvl / (depth - 1) : 1
        const isTip = b.lvl === depth - 1
        if (isTip) ctx.strokeStyle = 'rgba(94, 234, 212, 0.95)' // teal foliage
        else ctx.strokeStyle = `rgb(${Math.round(168 + (251 - 168) * t)}, ${Math.round(162 + (191 - 162) * t)}, ${Math.round(142 + (36 - 142) * t)})`
        ctx.lineWidth = Math.max(0.7, 5 - b.lvl * 0.42)
        ctx.beginPath()
        ctx.moveTo(b.x, b.y)
        ctx.lineTo(endX, endY)
        ctx.stroke()
        if (b.lvl + 1 < depth) {
          const childLen = b.len * TREE_SCALE
          stack.push({ x: tipX, y: tipY, ang: b.ang - branchAngle, len: childLen, lvl: b.lvl + 1 })
          stack.push({ x: tipX, y: tipY, ang: b.ang + branchAngle, len: childLen, lvl: b.lvl + 1 })
        }
      }
    }

    let progress = 0
    let raf = 0
    let cancelled = false
    const perFrame = 1 / Math.max(12, depth * 14) // ≈ 0.25 s of growth per level
    const loop = () => {
      if (cancelled) return
      progress = Math.min(1, progress + perFrame)
      draw(progress)
      if (progress < 1) raf = requestAnimationFrame(loop)
    }
    draw(0)
    raf = requestAnimationFrame(loop)
    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
    }
  }, [size.w, size.h, depth, angle, replayNonce])

  // exact readouts: total branches, and total path length ÷ trunk length
  const branchCount = Math.pow(2, depth) - 1
  const lengthMultiplier = (Math.pow(2 * TREE_SCALE, depth) - 1) / (2 * TREE_SCALE - 1)

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.08 }}
      className="rounded-xl border border-border/60 bg-muted/10 p-4"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-semibold text-foreground">L-system fractal tree</span>
        <Button size="sm" variant="outline" className="h-7 text-[11px]" onClick={() => setReplayNonce((n) => n + 1)}>
          <RefreshCw className="h-3 w-3" /> Replay growth
        </Button>
      </div>

      <div className="overflow-hidden rounded-lg border border-amber-900/40 shadow-inner">
        <div ref={wrapRef} className="relative w-full" style={{ height: 300 }}>
          <canvas ref={canvasRef} className="h-full w-full" />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between text-muted-foreground">
            <span>Recursion depth:</span>
            <span className="font-mono font-bold text-foreground">{depth}</span>
          </div>
          <Slider value={[depth]} min={1} max={11} step={1} onValueChange={([val]) => setDepth(val)} />
        </div>
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between text-muted-foreground">
            <span>Branch angle:</span>
            <span className="font-mono font-bold text-foreground">{angle}°</span>
          </div>
          <Slider value={[angle]} min={5} max={45} step={1} onValueChange={([val]) => setAngle(val)} />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="rounded-lg border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 font-mono text-xs text-teal-400">
          branches: 2^{depth} − 1 = {branchCount.toLocaleString()}
        </span>
        <span className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-xs text-amber-500">
          path length ×{lengthMultiplier.toFixed(1)} the trunk
        </span>
      </div>
    </motion.div>
  )
}

/* ---- koch snowflake: exact geometry on SVG ---- */

type Pt = { x: number; y: number }

/* start from an equilateral triangle, replace each edge with 4 edges ∩-shaped */
function kochSnowflake(stage: number): Pt[] {
  const s = 240
  let pts: Pt[] = [
    { x: 0, y: 0 },
    { x: s, y: 0 },
    { x: s / 2, y: -(s * Math.sqrt(3)) / 2 },
  ]
  for (let it = 0; it < stage; it++) {
    const next: Pt[] = []
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i]
      const b = pts[(i + 1) % pts.length]
      const dx = (b.x - a.x) / 3
      const dy = (b.y - a.y) / 3
      const p1 = { x: a.x + dx, y: a.y + dy }
      const p2 = { x: a.x + 2 * dx, y: a.y + 2 * dy }
      // equilateral bump, rotated outward for this winding
      const peak = {
        x: p1.x + dx * Math.cos(Math.PI / 3) - dy * Math.sin(Math.PI / 3),
        y: p1.y + dx * Math.sin(Math.PI / 3) + dy * Math.cos(Math.PI / 3),
      }
      next.push(a, p1, peak, p2)
    }
    pts = next
  }
  return pts
}

/* scale + centre any point cloud into a V×V box with padding */
function fitToBox(pts: Pt[], V: number, pad: number): Pt[] {
  const xs = pts.map((p) => p.x)
  const ys = pts.map((p) => p.y)
  const minX = Math.min(...xs)
  const maxX = Math.max(...xs)
  const minY = Math.min(...ys)
  const maxY = Math.max(...ys)
  const s = Math.min((V - 2 * pad) / (maxX - minX), (V - 2 * pad) / (maxY - minY))
  const ox = (V - (maxX - minX) * s) / 2 - minX * s
  const oy = (V - (maxY - minY) * s) / 2 - minY * s
  return pts.map((p) => ({ x: p.x * s + ox, y: p.y * s + oy }))
}

function KochSnowflake() {
  const [stage, setStage] = useState(2)

  const points = useMemo(() => fitToBox(kochSnowflake(stage), 300, 18), [stage])
  const poly = points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')

  // exact perimeter & area (unit side length): Pₙ = 3(4/3)ⁿ, Aₙ → 8/5·A₀
  const perim = 3 * Math.pow(4 / 3, stage)
  const area0 = Math.sqrt(3) / 4
  const area = area0 * (1 + (3 / 5) * (1 - Math.pow(4 / 9, stage)))
  const areaLimit = (8 / 5) * area0

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.12 }}
      className="mt-4 rounded-xl border border-border/60 bg-muted/10 p-4"
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
        {/* SVG flake */}
        <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-lg border border-amber-900/40 shadow-inner">
          <svg viewBox="0 0 300 300" className="h-auto w-full">
            <rect x="0" y="0" width="300" height="300" fill={CANVAS_BG} />
            <polygon
              points={poly}
              fill="rgba(245, 158, 11, 0.08)"
              stroke="#f59e0b"
              strokeWidth={stage >= 3 ? 0.8 : 1.3}
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* stage selector + exact readouts */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-xs font-semibold text-foreground">Stage:</span>
            {[0, 1, 2, 3, 4].map((s) => (
              <Button
                key={s}
                size="sm"
                variant={stage === s ? 'default' : 'outline'}
                className="h-7 w-8 text-xs"
                onClick={() => setStage(s)}
              >
                {s}
              </Button>
            ))}
            <span className="ml-auto font-mono text-[11px] text-muted-foreground">
              {Math.pow(4, stage) * 3} edges
            </span>
          </div>

          <div className="space-y-2 rounded-lg border border-border/50 bg-muted/20 p-3 text-xs">
            <div className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground">perimeter Pₙ = 3·(4/3)ⁿ</span>
              <span className="font-mono font-bold text-rose-400">
                {perim.toFixed(3)} units {stage >= 3 ? '→ ∞' : ''}
              </span>
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground">area Aₙ (of A₀ = √3/4)</span>
              <span className="font-mono font-bold text-teal-400">{area.toFixed(4)}</span>
            </div>
            <Progress value={(area / areaLimit) * 100} className="h-1.5" />
            <div className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground">limit A∞ = 8/5 · A₀</span>
              <span className="font-mono font-bold text-foreground">{areaLimit.toFixed(4)}</span>
            </div>
          </div>

          <p className="text-[11px] leading-relaxed text-muted-foreground">
            Each stage replaces every edge with four edges &frac13; as long: the perimeter multiplies by 4/3
            forever, yet the added triangles shrink fast enough that the area converges to exactly 8/5 of the
            original triangle.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

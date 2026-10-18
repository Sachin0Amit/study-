'use client'

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  Activity,
  Play,
  Pause,
  StepForward,
  RotateCcw,
  FastForward,
  Biohazard,
  Eye,
  Users,
  Shield,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'

// ============================================================
// Epidemiology Lab: Flatten the Curve — agent-based SIR model.
// Dots wander a city; a susceptible dot within radius ρ of
// infectious dots converts with probability 1 − e^(−β·h·Δt),
// where h is the distance-weighted number of infectious dots
// inside ρ (a contact involving one distanced dot carries half
// the risk; when both keep distance, a quarter). Because the
// hazard integrates exposure over time, the contact rate is
// the time-averaged disc occupancy c = πρ²·(N−1)/A, and β is
// calibrated so R₀ = β·c/γ exactly at reference crowding (450
// dots, 8 px). Density, contact radius and distancing then
// change the real contact rate, exactly as they do in a real
// outbreak. All per-frame mutation lives inside the engine
// effect below; React state is synced only once per simulated
// day (≤1 Hz).
// ============================================================

type DotState = 'S' | 'I' | 'R'

interface Dot {
  x: number
  y: number
  heading: number
  speed: number
  state: DotState
  recLeft: number // days of infectiousness remaining
  vacc: boolean // vaccinated at start → shield ring
  rank: number // fixed U(0,1): this dot distances when rank < distancing fraction
  phase: number // pulse phase for infectious dots
}

interface DayPoint {
  d: number
  s: number // susceptible fraction
  i: number // infectious fraction
  r: number // recovered fraction
}

interface Preset {
  id: string
  label: string
  r0: number
  recDays: number
  density: number
  rho: number
  dist: number // %
  vacc: number // %
}

interface SimParams {
  r0: number
  recDays: number
  rho: number
  dist: number
  density: number
  vacc: number
}

const FRAMES_PER_DAY = 60
const CANVAS_H = 360
const BG = '#0a1120'
const S_COL = '#94a3b8'
const I_COL = '#fb7185'
const R_COL = '#34d399'
const REF_POP = 450 // calibration (and default) crowding for the R₀ slider
const REF_RHO = 8 // calibration (and default) contact radius (px)
// Risk carried by one contact (a susceptible–infectious pair within ρ) when distancing:
const DIST_ONE = 0.5 // exactly one of the pair keeps distance
const DIST_BOTH = 0.25 // both keep distance

const PRESETS: Preset[] = [
  { id: 'p1918', label: '1918-like (R₀ 2.8, fast)', r0: 2.8, recDays: 4, density: 450, rho: 8, dist: 0, vacc: 0 },
  { id: 'measles', label: 'Measles-like (R₀ 5, dense)', r0: 5, recDays: 7, density: 600, rho: 7, dist: 0, vacc: 0 },
  { id: 'flat', label: 'Flattened (R₀ 2.8 + 60% distancing)', r0: 2.8, recDays: 4, density: 450, rho: 8, dist: 60, vacc: 0 },
  { id: 'herd', label: 'Herd immunity (R₀ 3 + 67% vaccinated)', r0: 3, recDays: 6, density: 450, rho: 8, dist: 0, vacc: 67 },
]

function clampNum(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v))
}

function randRange(a: number, b: number): number {
  return a + Math.random() * (b - a)
}

export default function EpidemicLab() {
  // ---- controls ----
  const [r0, setR0] = useState(2.8)
  const [recDays, setRecDays] = useState(6)
  const [density, setDensity] = useState(450)
  const [rho, setRho] = useState(8)
  const [distPct, setDistPct] = useState(0)
  const [vaccPct, setVaccPct] = useState(0)
  const [running, setRunning] = useState(false)
  const [showGhost, setShowGhost] = useState(true)

  // ---- live readouts (synced once per sim-day ≈ 1 Hz) ----
  const [day, setDay] = useState(0)
  const [counts, setCounts] = useState({ s: 447, i: 3, r: 0 })
  const [hist, setHist] = useState<DayPoint[]>([{ d: 0, s: 447 / 450, i: 3 / 450, r: 0 }])
  const [peak, setPeak] = useState<{ day: number; frac: number; count: number } | null>({ day: 0, frac: 3 / 450, count: 3 })
  const [ghost, setGhost] = useState<number[] | null>(null)
  const [everInfected, setEverInfected] = useState(3)

  // ---- refs drive the simulation ----
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const sizeRef = useRef({ w: 600, h: CANVAS_H, dpr: 1 })
  const dotsRef = useRef<Dot[]>([])
  const dayRef = useRef(0)
  const frameRef = useRef(0)
  const histRef = useRef<DayPoint[]>([{ d: 0, s: 447 / 450, i: 3 / 450, r: 0 }])
  const peakRef = useRef<{ day: number; frac: number; count: number } | null>({ day: 0, frac: 3 / 450, count: 3 })
  const everRef = useRef(3)
  const runningRef = useRef(false)
  const paramsRef = useRef<SimParams>({ r0: 2.8, recDays: 6, rho: 8, dist: 0, density: 450, vacc: 0 })
  const advanceRef = useRef<(frames: number) => void>(() => {})

  // sync engine-visible values after render (never during render)
  useEffect(() => {
    runningRef.current = running
  }, [running])
  useEffect(() => {
    paramsRef.current = { r0, recDays, rho, dist: distPct / 100, density, vacc: vaccPct / 100 }
  }, [r0, recDays, rho, distPct, density, vaccPct])

  const buildPopulation = useCallback(
    (n: number, vaccFrac: number, recDaysVal: number, seed: 'center' | 'corner'): { dots: Dot[]; seedCount: number } => {
      const { w, h } = sizeRef.current
      const dots: Dot[] = []
      for (let i = 0; i < n; i++) {
        const isVacc = Math.random() < vaccFrac
        dots.push({
          x: randRange(6, Math.max(7, w - 6)),
          y: randRange(6, Math.max(7, h - 6)),
          heading: Math.random() * Math.PI * 2,
          speed: randRange(0.9, 1.6),
          state: isVacc ? 'R' : 'S', // vaccinated folks start immune
          recLeft: 0,
          vacc: isVacc,
          rank: Math.random(),
          phase: Math.random() * Math.PI * 2,
        })
      }
      // seed the outbreak: 3 dots mid-city, or a 5-dot cluster in one corner
      const seedCount = seed === 'corner' ? 5 : 3
      let seeded = 0
      for (const d of dots) {
        if (seeded >= seedCount) break
        if (d.vacc) continue
        if (seed === 'corner') {
          d.x = randRange(16, 72)
          d.y = randRange(16, 72)
        } else {
          d.x = clampNum(w / 2 + randRange(-40, 40), 8, Math.max(9, w - 8))
          d.y = clampNum(h / 2 + randRange(-40, 40), 8, Math.max(9, h - 8))
        }
        d.state = 'I'
        d.recLeft = recDaysVal
        seeded++
      }
      return { dots, seedCount }
    },
    [],
  )

  const resetRun = useCallback(
    (seed: 'center' | 'corner', opts?: { density?: number; vacc?: number; recDays?: number }) => {
      const p = paramsRef.current
      const n = opts?.density ?? p.density
      const vf = opts?.vacc ?? p.vacc
      const rd = opts?.recDays ?? p.recDays
      // keep the previous run's infected curve as a ghost to compare against
      if (histRef.current.length >= 3) setGhost(histRef.current.map((pt) => pt.i))
      const { dots, seedCount } = buildPopulation(n, vf, rd, seed)
      dotsRef.current = dots
      dayRef.current = 0
      frameRef.current = 0
      everRef.current = seedCount
      const nn = Math.max(dots.length, 1)
      let sc = 0
      let ic = 0
      let rc = 0
      for (const d of dots) {
        if (d.state === 'S') sc++
        else if (d.state === 'I') ic++
        else rc++
      }
      const first: DayPoint = { d: 0, s: sc / nn, i: ic / nn, r: rc / nn }
      histRef.current = [first]
      peakRef.current = { day: 0, frac: ic / nn, count: ic }
      setDay(0)
      setCounts({ s: sc, i: ic, r: rc })
      setHist([first])
      setPeak({ day: 0, frac: ic / nn, count: ic })
      setEverInfected(seedCount)
      setRunning(false)
    },
    [buildPopulation],
  )

  // density slider: grow/shrink the city live without restarting
  const adjustDensity = useCallback((newN: number) => {
    const dots = dotsRef.current
    if (newN < dots.length) {
      dotsRef.current = dots.slice(0, newN)
    } else {
      const { w, h } = sizeRef.current
      const extra: Dot[] = []
      while (extra.length < newN - dots.length) {
        extra.push({
          x: randRange(6, Math.max(7, w - 6)),
          y: randRange(6, Math.max(7, h - 6)),
          heading: Math.random() * Math.PI * 2,
          speed: randRange(0.9, 1.6),
          state: 'S',
          recLeft: 0,
          vacc: false,
          rank: Math.random(),
          phase: Math.random() * Math.PI * 2,
        })
      }
      dotsRef.current = [...dots, ...extra]
    }
    let s = 0
    let i = 0
    let r = 0
    for (const d of dotsRef.current) {
      if (d.state === 'S') s++
      else if (d.state === 'I') i++
      else r++
    }
    setCounts({ s, i, r })
  }, [])

  // responsive canvas via ResizeObserver (with cleanup)
  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    const ro = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 600
      const w = Math.max(280, Math.floor(width))
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(CANVAS_H * dpr)
      canvas.style.width = '100%'
      canvas.style.height = `${CANVAS_H}px`
      sizeRef.current = { w, h: CANVAS_H, dpr }
    })
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [])

  // ---- engine + render loop: ALL per-frame mutation lives in this effect ----
  useEffect(() => {
    // once per sim-day: record history, sync UI state (≤1 Hz, well under the 10 Hz cap)
    const pushDayRecord = () => {
      const dots = dotsRef.current
      const n = Math.max(dots.length, 1)
      let s = 0
      let i = 0
      let r = 0
      for (const d of dots) {
        if (d.state === 'S') s++
        else if (d.state === 'I') i++
        else r++
      }
      const pt: DayPoint = { d: dayRef.current, s: s / n, i: i / n, r: r / n }
      histRef.current.push(pt)
      if (histRef.current.length > 400) histRef.current.shift()
      if (!peakRef.current || pt.i > peakRef.current.frac) peakRef.current = { day: dayRef.current, frac: pt.i, count: i }
      setDay(dayRef.current)
      setCounts({ s, i, r })
      setHist(histRef.current.slice())
      setPeak(peakRef.current ? { ...peakRef.current } : null)
      setEverInfected(everRef.current)
      // outbreak over: nobody is infectious anymore → stop the clock
      if (i === 0 && dayRef.current > 0) setRunning(false)
    }

    const advance = (frames: number) => {
      const dots = dotsRef.current
      const { w, h } = sizeRef.current
      if (dots.length === 0 || w <= 0) return
      const { r0: r0v, recDays: rd, rho, dist } = paramsRef.current
      const gamma = 1 / Math.max(rd, 1)

      // Calibrate per-contact transmissibility so R₀ = β·c₀/γ at reference
      // crowding (450 dots, 8 px radius). c₀ is the time-averaged number of
      // other dots inside one contact disc, πρ²·(N−1)/A — the per-frame
      // hazard 1−e^(−β·h·Δt) already integrates exposure over time, so no
      // extra contact-turnover factor is needed. Real crowding/ρ/distancing
      // then move the true contact rate off the reference, as in a real city.
      const area = Math.max(w * h, 1)
      const c0 = Math.max(0.05, ((REF_POP - 1) * Math.PI * REF_RHO * REF_RHO) / area)
      const betaC = (r0v * gamma) / c0
      const dtDay = 1 / FRAMES_PER_DAY

      const cell = Math.max(rho, 6)
      const cols = Math.max(1, Math.ceil(w / cell))

      for (let f = 0; f < frames; f++) {
        // pass 1 — movement (distanced dots barely move)
        for (const d of dots) {
          const distanced = d.rank < dist
          const sp = d.speed * (distanced ? 0.12 : 1)
          d.heading += randRange(-0.14, 0.14)
          d.x += Math.cos(d.heading) * sp
          d.y += Math.sin(d.heading) * sp
          if (d.x < 4) {
            d.x = 4
            d.heading = Math.PI - d.heading
          } else if (d.x > w - 4) {
            d.x = w - 4
            d.heading = Math.PI - d.heading
          }
          if (d.y < 4) {
            d.y = 4
            d.heading = -d.heading
          } else if (d.y > h - 4) {
            d.y = h - 4
            d.heading = -d.heading
          }
        }

        // pass 2 — spatial hash of infectious dots AFTER movement, so bucket
        // cells always match the positions the proximity test uses
        const buckets = new Map<number, number[]>()
        for (let i = 0; i < dots.length; i++) {
          if (dots[i].state !== 'I') continue
          const key = Math.floor(dots[i].y / cell) * cols + Math.floor(dots[i].x / cell)
          const arr = buckets.get(key)
          if (arr) arr.push(i)
          else buckets.set(key, [i])
        }

        // pass 3 — transmission + recovery
        for (const d of dots) {
          if (d.state === 'S') {
            // weighted exposure to infectious dots within ρ (3×3 bucket
            // neighbourhood): contacts involving a distanced dot are briefer
            // and lower-risk, so they count as a fraction of a full contact
            const cx = Math.floor(d.x / cell)
            const cy = Math.floor(d.y / cell)
            const selfDistanced = d.rank < dist
            let haz = 0
            for (let oy = -1; oy <= 1; oy++) {
              const yy = cy + oy
              if (yy < 0) continue
              for (let ox = -1; ox <= 1; ox++) {
                const xx = cx + ox
                if (xx < 0 || xx >= cols) continue
                const arr = buckets.get(yy * cols + xx)
                if (!arr) continue
                for (const idx of arr) {
                  const o = dots[idx]
                  const dx = o.x - d.x
                  const dy = o.y - d.y
                  if (dx * dx + dy * dy <= rho * rho) {
                    const otherDistanced = o.rank < dist
                    const factor =
                      selfDistanced && otherDistanced ? DIST_BOTH : selfDistanced || otherDistanced ? DIST_ONE : 1
                    haz += factor
                  }
                }
              }
            }
            // per-frame conversion probability consistent with R₀ = β/γ
            if (haz > 0 && Math.random() < 1 - Math.exp(-betaC * haz * dtDay)) {
              d.state = 'I'
              d.recLeft = 1 / gamma
              everRef.current++
            }
          } else if (d.state === 'I') {
            d.recLeft -= dtDay
            if (d.recLeft <= 0) {
              d.state = 'R'
              d.recLeft = 0
            }
          }
        }

        frameRef.current++
        if (frameRef.current >= FRAMES_PER_DAY) {
          frameRef.current = 0
          dayRef.current++
          pushDayRecord()
        }
      }
    }

    advanceRef.current = advance

    // seed the first city from the first animation frame — the default state
    // values above are exactly this build's deterministic outcome (vacc = 0 →
    // 447 S, 3 I), and the sync keeps readouts truthful if defaults change
    const seedIfNeeded = () => {
      if (dotsRef.current.length > 0) return
      const { recDays: rd, density: n, vacc: vf } = paramsRef.current
      const { dots, seedCount } = buildPopulation(n, vf, rd, 'center')
      dotsRef.current = dots
      everRef.current = seedCount
      const nn = Math.max(dots.length, 1)
      let sc = 0
      let ic = 0
      let rc = 0
      for (const d of dots) {
        if (d.state === 'S') sc++
        else if (d.state === 'I') ic++
        else rc++
      }
      const first: DayPoint = { d: 0, s: sc / nn, i: ic / nn, r: rc / nn }
      histRef.current = [first]
      peakRef.current = { day: 0, frac: ic / nn, count: ic }
      setCounts({ s: sc, i: ic, r: rc })
      setHist([first])
      setPeak({ day: 0, frac: ic / nn, count: ic })
      setEverInfected(seedCount)
    }

    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas?.getContext('2d')
      const { w, h, dpr } = sizeRef.current
      if (!canvas || !ctx || w <= 0) return
      const now = performance.now()
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = BG
      ctx.fillRect(0, 0, w, h)
      const dist = paramsRef.current.dist
      for (const d of dotsRef.current) {
        const distanced = d.rank < dist
        if (d.state === 'I') {
          const pr = 3.4 + Math.sin(now * 0.008 + d.phase) * 1.3 // pulsing infectious dot
          ctx.globalAlpha = 0.2
          ctx.fillStyle = I_COL
          ctx.beginPath()
          ctx.arc(d.x, d.y, pr * 2.1, 0, Math.PI * 2)
          ctx.fill()
          ctx.globalAlpha = distanced ? 0.6 : 1
          ctx.beginPath()
          ctx.arc(d.x, d.y, pr, 0, Math.PI * 2)
          ctx.fill()
        } else if (d.state === 'S') {
          ctx.globalAlpha = distanced ? 0.4 : 0.9
          ctx.fillStyle = S_COL
          ctx.beginPath()
          ctx.arc(d.x, d.y, 2.6, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.globalAlpha = distanced ? 0.45 : 0.95
          ctx.fillStyle = R_COL
          ctx.beginPath()
          ctx.arc(d.x, d.y, 2.6, 0, Math.PI * 2)
          ctx.fill()
          if (d.vacc) {
            // shield ring for the vaccinated-at-start
            ctx.globalAlpha = 0.65
            ctx.strokeStyle = R_COL
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.arc(d.x, d.y, 4.6, 0, Math.PI * 2)
            ctx.stroke()
          }
        }
        ctx.globalAlpha = 1
      }
      // subtle vignette so the city recedes at the edges
      const grad = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.35, w / 2, h / 2, Math.max(w, h) * 0.72)
      grad.addColorStop(0, 'rgba(0,0,0,0)')
      grad.addColorStop(1, 'rgba(0,0,0,0.4)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)
    }

    // fixed 60 Hz stepping so the outbreak advances at the same speed on
    // 60/120/144 Hz displays; the accumulator clamps stalls (tab switches)
    const FRAME_MS = 1000 / 60
    let raf = 0
    let lastT = performance.now()
    let acc = 0
    const loop = (now: number) => {
      seedIfNeeded() // no-op after the first frame
      const dt = Math.min(now - lastT, 100)
      lastT = now
      acc += dt
      let steps = 0
      while (acc >= FRAME_MS && steps < 6) {
        if (runningRef.current) advance(1)
        acc -= FRAME_MS
        steps++
      }
      if (steps === 6) acc = 0 // shed any leftover backlog
      render()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      advanceRef.current = () => {}
    }
  }, [])

  const applyPreset = (preset: Preset) => {
    setR0(preset.r0)
    setRecDays(preset.recDays)
    setDensity(preset.density)
    setRho(preset.rho)
    setDistPct(preset.dist)
    setVaccPct(preset.vacc)
    // pass values explicitly — paramsRef hasn't re-rendered yet
    resetRun('center', { density: preset.density, vacc: preset.vacc / 100, recDays: preset.recDays })
  }

  // ---- derived epidemiology ----
  const N = counts.s + counts.i + counts.r
  const gamma = 1 / Math.max(recDays, 1)
  const susFrac = N > 0 ? counts.s / N : 1
  const rEff = r0 * susFrac
  const hit = r0 > 1.01 ? 1 - 1 / r0 : null
  const totalInfectedPct = N > 0 ? (everInfected / N) * 100 : 0
  const outbreakOver = counts.i === 0 && day > 0

  // ---- SVG chart geometry ----
  // Day-aligned axis: the live curves and the previous run's ghost are both
  // plotted against the same day numbers, so flatten-the-curve comparisons
  // (peak height, peak timing, area) are always honest.
  const chart = useMemo(() => {
    const W = 460
    const H = 250
    const padL = 34
    const padR = 12
    const padT = 14
    const padB = 24
    const pts = hist
    const plotW = W - padL - padR
    const plotH = H - padT - padB
    const dayStart = pts.length > 0 ? pts[0].d : 0
    const lastDay = pts.length > 0 ? pts[pts.length - 1].d : 0
    const ghostDays = ghost && ghost.length > 1 ? ghost.length - 1 : 0
    // never narrower than a 30-day axis so the early chart doesn't twitch
    const xMax = Math.max(lastDay, ghostDays, dayStart + 30) - dayStart
    const xAt = (dayNum: number) => padL + (clampNum(dayNum, 0, xMax) / xMax) * plotW
    const yAt = (f: number) => padT + (1 - clampNum(f, 0, 1)) * plotH

    const mkPath = (key: 's' | 'i' | 'r') =>
      pts
        .map((pt, i) => `${i === 0 ? 'M' : 'L'} ${xAt(pt.d - dayStart).toFixed(1)} ${yAt(pt[key]).toFixed(1)}`)
        .join(' ')

    // area under the infected curve for emphasis
    let iArea = ''
    if (pts.length > 1) {
      iArea =
        mkPath('i') +
        ` L ${xAt(pts[pts.length - 1].d - dayStart).toFixed(1)} ${yAt(0).toFixed(1)} L ${xAt(
          pts[0].d - dayStart,
        ).toFixed(1)} ${yAt(0).toFixed(1)} Z`
    }

    // ghost = previous run's I-curve, aligned by day number
    let ghostPath = ''
    if (ghost && ghost.length > 1) {
      const segs: string[] = []
      ghost.forEach((v, j) => {
        if (j < dayStart) return // portion older than the visible window
        segs.push(`${segs.length === 0 ? 'M' : 'L'} ${xAt(j - dayStart).toFixed(1)} ${yAt(v).toFixed(1)}`)
      })
      ghostPath = segs.length > 1 ? segs.join(' ') : ''
    }

    // peak marker (plotted at the peak's absolute day)
    let peakX = -1
    if (peak && peak.day >= dayStart) peakX = xAt(peak.day - dayStart)

    return { W, H, padL, xAt, yAt, sPath: mkPath('s'), iPath: mkPath('i'), rPath: mkPath('r'), iArea, ghostPath, peakX, dayStart, xMax }
  }, [hist, ghost, peak])

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-gradient-to-b from-card/95 via-card/80 to-background/95 p-4 shadow-xl backdrop-blur-md md:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-border/60 pb-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-500/30 bg-rose-500/20 text-rose-400">
            <Activity className="h-5 w-5 animate-pulse" />
          </span>
          <div>
            <h3 className="flex flex-wrap items-center gap-2 text-xl font-bold tracking-tight text-foreground">
              Epidemiology Lab: Flatten the Curve
              <Badge variant="outline" className="border-rose-500/30 bg-rose-500/10 text-xs text-rose-400">
                Agent-based SIR · R₀ = β/γ
              </Badge>
            </h3>
            <p className="text-xs text-muted-foreground">
              Hundreds of citizens wander a city — tweak transmissibility, recovery, crowding, distancing and vaccination
              to break the chain of transmission.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            onClick={() => {
              // nobody is infectious anymore — Reset or Outbreak seed to run again
              if (outbreakOver) return
              setRunning((r) => !r)
            }}
            className="h-8 text-xs"
          >
            {running ? <Pause className="mr-1 h-3.5 w-3.5" /> : <Play className="mr-1 h-3.5 w-3.5" />}
            {running ? 'Pause' : 'Play'}
          </Button>
          <Button size="sm" variant="outline" onClick={() => advanceRef.current(FRAMES_PER_DAY)} className="h-8 text-xs">
            <StepForward className="mr-1 h-3.5 w-3.5" /> Step-day
          </Button>
          <Button size="sm" variant="outline" onClick={() => advanceRef.current(30 * FRAMES_PER_DAY)} className="h-8 text-xs">
            <FastForward className="mr-1 h-3.5 w-3.5" /> 30 days
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => resetRun('corner')}
            className="h-8 border-rose-500/30 text-xs text-rose-400 hover:text-rose-300"
          >
            <Biohazard className="mr-1 h-3.5 w-3.5" /> Outbreak seed ×5
          </Button>
          <Button size="sm" variant="outline" onClick={() => resetRun('center')} className="h-8 text-xs">
            <RotateCcw className="mr-1 h-3.5 w-3.5" /> Reset
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* ============ LEFT: city + chips + controls ============ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          {/* City canvas */}
          <div className="rounded-xl border border-border/60 bg-muted/20 p-3">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                <Users className="h-3.5 w-3.5 text-rose-400" /> The City — day {day}
              </span>
              {outbreakOver ? (
                <Badge variant="outline" className="border-emerald-500/40 bg-emerald-500/10 text-[10px] text-emerald-400">
                  outbreak over (day {day})
                </Badge>
              ) : (
                <span className="font-mono text-muted-foreground">
                  S {counts.s} · I {counts.i} · R {counts.r}
                </span>
              )}
            </div>
            <div ref={wrapRef} className="relative w-full overflow-hidden rounded-lg border border-border/50">
              <canvas
                ref={canvasRef}
                role="img"
                aria-label="City map of moving dots: gray susceptible, rose pulsing infectious, green recovered with shield rings for the vaccinated"
                className="block w-full"
                style={{ height: CANVAS_H }}
              />
              <div className="pointer-events-none absolute left-2 top-2 flex flex-wrap gap-x-3 gap-y-1 rounded-md bg-background/50 px-2 py-1 font-mono text-[10px] text-muted-foreground backdrop-blur-sm">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full" style={{ background: S_COL }} /> susceptible
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: I_COL }} /> infectious
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full" style={{ background: R_COL }} /> recovered/immune
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full" style={{ background: S_COL, opacity: 0.4 }} /> distancing
                </span>
              </div>
            </div>
          </div>

          {/* Derived readout chips */}
          <div className="flex flex-wrap gap-2">
            <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-2.5 py-1.5 font-mono text-[11px] text-rose-400">
              R₀ = {r0.toFixed(1)}
            </div>
            <div
              className={`rounded-lg border px-2.5 py-1.5 font-mono text-[11px] ${
                rEff < 1 ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-amber-500/30 bg-amber-500/10 text-amber-400'
              }`}
            >
              R_eff = {rEff.toFixed(2)} {rEff < 1 ? '(shrinking)' : '(growing)'}
            </div>
            <div className="rounded-lg border border-border/60 bg-muted/40 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground">
              {hit !== null ? `herd immunity ≈ ${(hit * 100).toFixed(0)}%` : 'R₀ < 1 → no epidemic'}
            </div>
            <div className="rounded-lg border border-border/60 bg-muted/40 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground">
              γ = 1/{recDays} d⁻¹
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4 rounded-xl border border-border/60 bg-muted/20 p-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Pathogen &amp; Population
            </span>

            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Basic reproduction number R₀:</span>
                <span className="font-mono font-bold text-foreground">{r0.toFixed(1)}</span>
              </div>
              <Slider value={[r0]} min={0.5} max={6} step={0.1} onValueChange={([v]) => setR0(v)} />
              <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>0.5 (fizzles out)</span>
                <span>6 (measles-like)</span>
              </div>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Recovery time (infectious days):</span>
                <span className="font-mono font-bold text-foreground">{recDays} days</span>
              </div>
              <Slider value={[recDays]} min={3} max={21} step={1} onValueChange={([v]) => setRecDays(v)} />
            </div>

            <Separator />

            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Population density:</span>
                <span className="font-mono font-bold text-foreground">{density} dots</span>
              </div>
              <Slider
                value={[density]}
                min={150}
                max={600}
                step={10}
                onValueChange={([v]) => {
                  setDensity(v)
                  adjustDensity(v)
                }}
              />
              <p className="text-[10px] leading-relaxed text-muted-foreground">
                Crowding changes the real contact rate — the R₀ slider is exact at the reference 450 dots, starved at 150,
                hot at 600.
              </p>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Infection radius ρ:</span>
                <span className="font-mono font-bold text-foreground">{rho} px</span>
              </div>
              <Slider value={[rho]} min={4} max={16} step={1} onValueChange={([v]) => setRho(v)} />
              <p className="text-[10px] leading-relaxed text-muted-foreground">
                Contacts scale with area (πρ²) — a 16 px radius reaches ~4× the people of an 8 px one.
              </p>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Social distancing:</span>
                <span className="font-mono font-bold text-foreground">{distPct}%</span>
              </div>
              <Slider value={[distPct]} min={0} max={80} step={5} onValueChange={([v]) => setDistPct(v)} />
              <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>0% (business as usual)</span>
                <span>80% (nearly frozen)</span>
              </div>
              <p className="text-[10px] leading-relaxed text-muted-foreground">
                Distanced dots move less and keep their distance — each contact involving one carries half the risk (a
                quarter when both do), so R_eff falls even before S runs out.
              </p>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-emerald-400" /> Vaccinated at start:
                </span>
                <span className="font-mono font-bold text-foreground">{vaccPct}%</span>
              </div>
              <Slider
                value={[vaccPct]}
                min={0}
                max={90}
                step={5}
                onValueChange={([v]) => setVaccPct(v)}
                onValueCommit={([v]) => resetRun('center', { vacc: v / 100 })}
              />
              <p className="text-[10px] text-muted-foreground">Changing vaccination restarts the outbreak (release the slider to apply).</p>
            </div>
          </div>

          {/* Presets */}
          <div className="rounded-xl border border-border/60 bg-muted/10 p-3">
            <span className="mb-2 block text-xs font-semibold text-foreground">Scenario presets</span>
            <div className="flex flex-wrap gap-1.5">
              {PRESETS.map((preset) => (
                <Button
                  key={preset.id}
                  size="sm"
                  variant="secondary"
                  className="h-7 rounded-full px-3 text-[11px]"
                  onClick={() => applyPreset(preset)}
                >
                  {preset.label}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ============ RIGHT: chart + counters + explainer ============ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-4"
        >
          {/* SIR chart */}
          <div className="rounded-xl border border-border/60 bg-muted/10 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Activity className="h-4 w-4 text-rose-400" /> S · I · R over time (fractions)
              </span>
              <label className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                last-run ghost
                <Switch checked={showGhost} onCheckedChange={setShowGhost} className="scale-75" />
              </label>
            </div>
            <div className="rounded-lg border border-border/50 bg-background/80 p-2">
              <svg viewBox={`0 0 ${chart.W} ${chart.H}`} className="h-auto w-full">
                {/* y grid */}
                {[0, 0.25, 0.5, 0.75, 1].map((v) => (
                  <g key={v}>
                    <line
                      x1={chart.padL}
                      y1={chart.yAt(v)}
                      x2={chart.W - 12}
                      y2={chart.yAt(v)}
                      stroke="currentColor"
                      strokeOpacity="0.1"
                    />
                    <text
                      x={chart.padL - 5}
                      y={chart.yAt(v) + 3}
                      fill="currentColor"
                      opacity="0.55"
                      fontSize="9"
                      textAnchor="end"
                      fontFamily="monospace"
                    >
                      {v.toFixed(2)}
                    </text>
                  </g>
                ))}
                {/* herd-immunity threshold marker */}
                {hit !== null && (
                  <g>
                    <line
                      x1={chart.padL}
                      y1={chart.yAt(hit)}
                      x2={chart.W - 12}
                      y2={chart.yAt(hit)}
                      stroke="#fbbf24"
                      strokeOpacity="0.65"
                      strokeDasharray="5 4"
                    />
                    <text
                      x={chart.W - 14}
                      y={chart.yAt(hit) - 4}
                      fill="#fbbf24"
                      fontSize="9"
                      textAnchor="end"
                      fontFamily="monospace"
                    >
                      herd immunity {(hit * 100).toFixed(0)}%
                    </text>
                  </g>
                )}
                {/* ghost of the previous run's infected curve */}
                {showGhost && chart.ghostPath && (
                  <path d={chart.ghostPath} fill="none" stroke={I_COL} strokeOpacity="0.35" strokeWidth="1.4" strokeDasharray="4 3" />
                )}
                {/* recovered, susceptible, then infected on top */}
                <path d={chart.rPath} fill="none" stroke={R_COL} strokeWidth="1.8" strokeLinecap="round" />
                <path d={chart.sPath} fill="none" stroke={S_COL} strokeWidth="1.8" strokeLinecap="round" />
                {chart.iArea && <path d={chart.iArea} fill={I_COL} fillOpacity="0.12" stroke="none" />}
                <path d={chart.iPath} fill="none" stroke={I_COL} strokeWidth="2.6" strokeLinecap="round" />
                {/* peak-infected marker */}
                {chart.peakX >= 0 && peak && (
                  <g>
                    <circle
                      cx={chart.peakX}
                      cy={chart.yAt(peak.frac)}
                      r="4"
                      fill={I_COL}
                      stroke="#ffffff"
                      strokeWidth="1.4"
                    />
                    <text
                      x={chart.peakX}
                      y={chart.yAt(peak.frac) - 8}
                      fill={I_COL}
                      fontSize="9"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      peak {peak.count} dots · day {peak.day}
                    </text>
                  </g>
                )}
                {/* x labels */}
                {[0, 0.5, 1].map((frac) => (
                  <text
                    key={frac}
                    x={chart.padL + frac * (chart.W - chart.padL - 12)}
                    y={chart.H - 8}
                    fill="currentColor"
                    opacity="0.55"
                    fontSize="9"
                    textAnchor={frac === 0 ? 'start' : frac === 1 ? 'end' : 'middle'}
                    fontFamily="monospace"
                  >
                    day {Math.round(chart.dayStart + frac * chart.xMax)}
                  </text>
                ))}
              </svg>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[10px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1" style={{ color: S_COL }}>
                <span className="h-2 w-2 rounded-full" style={{ background: S_COL }} /> susceptible
              </span>
              <span className="flex items-center gap-1" style={{ color: I_COL }}>
                <span className="h-2 w-2 rounded-full" style={{ background: I_COL }} /> infected
              </span>
              <span className="flex items-center gap-1" style={{ color: R_COL }}>
                <span className="h-2 w-2 rounded-full" style={{ background: R_COL }} /> recovered
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-0.5 w-4" style={{ background: I_COL, opacity: 0.35 }} /> last run
              </span>
            </div>
          </div>

          {/* Cumulative impact */}
          <div className="space-y-2 rounded-xl border border-border/60 bg-muted/10 p-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-foreground">Total infected so far (cumulative)</span>
              <span className="font-mono font-bold text-rose-400">{totalInfectedPct.toFixed(1)}% of the city</span>
            </div>
            <Progress value={totalInfectedPct} className="h-2.5 [&>div]:bg-rose-500" />
            <p className="text-[10px] leading-relaxed text-muted-foreground">
              Peak infected: {peak ? `${(peak.frac * 100).toFixed(1)}% (${peak.count} dots) on day ${peak.day}` : '—'} · the
              lower and later the peak, the more headroom hospitals keep.
            </p>
          </div>

          {/* What to notice */}
          <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-4">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <Eye className="h-3.5 w-3.5" /> What to notice
            </span>
            <p className="mt-1.5 font-serif text-xs italic leading-relaxed text-muted-foreground">
              Distancing doesn&apos;t need to stop every infection to help — it only needs to push R_eff below 1, and
              the infected curve bends over on its own. Notice the amber herd-immunity line: once enough citizens are
              immune (recovered or vaccinated), susceptibles drop below 1/R₀ and the outbreak starves even though most
              people were never infected. Run it twice — once plain, once flattened — and compare the ghost curve: same
              eventual area, very different peak.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

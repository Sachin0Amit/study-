'use client'

import { useEffect, useMemo, useRef, useState, type ReactElement, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Atom,
  Lightbulb,
  Orbit,
  Pause,
  Play,
  Plus,
  RotateCcw,
  Timer,
  Users,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                     */
/* ------------------------------------------------------------------ */

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v))
}

function fmt(v: number, d = 2): string {
  if (!Number.isFinite(v)) return '—'
  const av = Math.abs(v)
  if (av >= 1e5 || (av > 0 && av < 1e-3)) return v.toExponential(2)
  return v.toFixed(d)
}

function gammaOf(b: number): number {
  return 1 / Math.sqrt(Math.max(1e-9, 1 - b * b))
}

function useClock(playing: boolean): [number, (v: number) => void] {
  const [t, setT] = useState(0)
  useEffect(() => {
    if (!playing) return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.06)
      last = now
      setT((v) => v + dt)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing])
  return [t, setT]
}

const TONES = {
  emerald: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200',
  teal: 'border-teal-500/40 bg-teal-500/10 text-teal-200',
  amber: 'border-amber-500/40 bg-amber-500/10 text-amber-200',
  rose: 'border-rose-500/40 bg-rose-500/10 text-rose-200',
  plain: 'border-border bg-muted/30 text-muted-foreground',
} as const
type Tone = keyof typeof TONES

function Chip({ tex, tone = 'plain' }: { tex: string; tone?: Tone }) {
  return (
    <span className={`rounded-lg border px-2.5 py-1 text-xs ${TONES[tone]}`}>
      <TeX tex={tex} />
    </span>
  )
}

function Badge({ children, tone = 'plain' }: { children: ReactNode; tone?: Tone }) {
  return <span className={`rounded-lg border px-2.5 py-1 text-xs ${TONES[tone]}`}>{children}</span>
}

function Ctl({
  label,
  value,
  min,
  max,
  step,
  onChange,
  aria,
  display,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  aria: string
  display?: string
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">{label}</span>
      <Slider
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={(v) => onChange(v[0] ?? value)}
        className="w-24 sm:w-36"
        aria-label={aria}
      />
      <span className="w-14 text-right font-mono text-xs tabular-nums text-foreground">
        {display ?? fmt(value, 3)}
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Light-clock pane: time dilation from the Pythagorean zigzag       */
/* ------------------------------------------------------------------ */

const LCW = 290
const LCH = 280
const TOP = 84
const BOT = 184
const HGAP = BOT - TOP
const CPX = 60 // photon speed, px per second
const MIRW = 72
const TRAVEL = 170

function mirrorBar(cx: number, y: number): ReactElement {
  return <rect x={cx - MIRW / 2} y={y - 4} width={MIRW} height={8} rx={3} className="fill-zinc-500 stroke-zinc-300/60" strokeWidth={1} />
}

function triY(prog: number): number {
  const p = ((prog % (2 * HGAP)) + 2 * HGAP) % (2 * HGAP)
  return p < HGAP ? TOP + p : BOT - (p - HGAP)
}

function LightClockPane(props: { t: number; b: number; setB: (v: number) => void }) {
  const { t, b } = props
  const gam = gammaOf(b)
  const vPx = b * CPX

  /* stationary clock: photon bounces straight up and down at c */
  const yS = triY(t * CPX)
  const n0 = Math.floor((t * CPX) / (2 * HGAP))

  /* moving clock: photon vertical speed is c/γ in the lab frame */
  const sv = CPX / gam
  const yM = triY(t * sv)
  const nM = Math.floor((t * sv) / (2 * HGAP))
  const xC = 60 + (((vPx * t + TRAVEL / 2) % TRAVEL) + TRAVEL) % TRAVEL

  /* zigzag trail of the moving photon (cut at wrap-arounds) */
  const trail: string[] = []
  let pen = false
  let prevX = 0
  for (let i = 0; i <= 60; i++) {
    const tau = t - 4.5 + (i * 4.5) / 60
    if (tau < 0) continue
    const tx = 60 + (((vPx * tau + TRAVEL / 2) % TRAVEL) + TRAVEL) % TRAVEL
    const ty = triY(sv * tau)
    if (pen && tx < prevX - 40) pen = false
    trail.push(`${pen ? 'L' : 'M'}${tx.toFixed(1)},${ty.toFixed(1)}`)
    prevX = tx
    pen = true
  }
  const trailD = trail.join('')

  /* Pythagorean derivation triangle: hypotenuse cΔt fixed, legs vΔt and cΔt′ */
  const HL = 160
  const CX0 = 90
  const CY0 = 204
  const legH = HL * b
  const legV = HL / gam
  const Vx = CX0
  const Vy = CY0 - legV
  const Hx = CX0 + legH
  const Hy = CY0
  const sping = (t * 0.45) % 2
  const frac = sping < 1 ? sping : 2 - sping
  const dotX = Vx + (Hx - Vx) * frac
  const dotY = Vy + (Hy - Vy) * frac

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Ctl label="v/c" value={b} min={0} max={0.95} step={0.005} onChange={props.setB} aria="Speed of the moving clock as a fraction of c" />
        <Chip tex={`\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}} = ${fmt(gam, 3)}`} tone="amber" />
        <Badge tone="plain">
          stationary round trips: <span className="font-mono tabular-nums">{n0}</span> · moving:{' '}
          <span className="font-mono tabular-nums">{nM}</span>
        </Badge>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
          <svg viewBox={`0 0 ${LCW} ${LCH}`} className="w-full select-none" role="img" aria-label="Stationary light clock: a photon bouncing vertically between two mirrors.">
            <line x1={145} y1={TOP} x2={145} y2={BOT} className="stroke-zinc-500/30" strokeWidth={1} strokeDasharray="3 4" />
            {mirrorBar(145, TOP)}
            {mirrorBar(145, BOT)}
            <line x1={145} y1={TOP} x2={145} y2={yS} className="stroke-amber-300/70" strokeWidth={1.6} />
            <circle cx={145} cy={yS} r={8} className="fill-amber-300/20" />
            <circle cx={145} cy={yS} r={4} className="fill-amber-300" />
            <text x={145} y={LCH - 24} textAnchor="middle" fontSize={11} className="fill-zinc-400">
              stationary clock
            </text>
            <text x={145} y={LCH - 10} textAnchor="middle" fontSize={10} className="fill-zinc-500 font-mono tabular-nums">
              {n0} round trips
            </text>
          </svg>
        </div>
        <div className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
          <svg viewBox={`0 0 ${LCW} ${LCH}`} className="w-full select-none" role="img" aria-label="Moving light clock: the photon traces a diagonal zigzag between the sliding mirrors.">
            <path d={trailD} fill="none" className="stroke-amber-300/70" strokeWidth={1.4} />
            {mirrorBar(xC, TOP)}
            {mirrorBar(xC, BOT)}
            <circle cx={xC} cy={yM} r={8} className="fill-amber-300/20" />
            <circle cx={xC} cy={yM} r={4} className="fill-amber-300" />
            <text x={LCW / 2} y={LCH - 24} textAnchor="middle" fontSize={11} className="fill-zinc-400">
              moving clock, v = {fmt(b, 2)}c
            </text>
            <text x={LCW / 2} y={LCH - 10} textAnchor="middle" fontSize={10} className="fill-zinc-500 font-mono tabular-nums">
              {nM} round trips
            </text>
          </svg>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
        <svg viewBox="0 0 620 232" className="w-full select-none" role="img" aria-label="Right triangle of the time dilation derivation with hypotenuse c delta t, horizontal leg v delta t and vertical leg c delta t prime.">
          {legV > 12 && (
            <rect x={CX0} y={CY0 - 10} width={10} height={10} fill="none" className="stroke-zinc-500/60" strokeWidth={1} />
          )}
          {/* horizontal leg: vΔt */}
          <line x1={CX0} y1={CY0} x2={Hx} y2={Hy} className="stroke-amber-400" strokeWidth={2.5} strokeLinecap="round" />
          {/* vertical leg: cΔt′ */}
          <line x1={CX0} y1={CY0} x2={Vx} y2={Vy} className="stroke-teal-400" strokeWidth={2.5} strokeLinecap="round" />
          {/* hypotenuse: cΔt */}
          <line x1={Vx} y1={Vy} x2={Hx} y2={Hy} className="stroke-emerald-400" strokeWidth={2.5} strokeLinecap="round" />
          <circle cx={dotX} cy={dotY} r={5} className="fill-emerald-300" />
          <text x={CX0 + legH / 2} y={CY0 + 18} textAnchor="middle" fontSize={11} className="fill-amber-300 font-mono">
            vΔt
          </text>
          <text x={CX0 - 10} y={Vy + legV / 2} textAnchor="end" fontSize={11} className="fill-teal-300 font-mono">
            cΔt′
          </text>
          <text x={(Vx + Hx) / 2 + 14} y={(Vy + Hy) / 2 - 10} fontSize={11} className="fill-emerald-300 font-mono">
            cΔt
          </text>
          <text x={CX0 - 14} y={CY0 + 4} textAnchor="end" fontSize={10} className="fill-zinc-500">
            photon
          </text>
          <text x={560} y={28} textAnchor="middle" fontSize={10} className="fill-zinc-400">
            one half-bounce, seen from the lab
          </text>
          <text x={560} y={44} textAnchor="middle" fontSize={10} className="fill-zinc-500">
            legs {fmt(legH, 0)} : {fmt(legV, 0)} : {fmt(HL, 0)} px
          </text>
          <text x={560} y={214} textAnchor="middle" fontSize={10} className="fill-zinc-400">
            exact for every v — that is the whole derivation
          </text>
        </svg>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <Chip tex={`c^2\\Delta t^2 = c^2\\Delta t'^{\\,2} + v^2\\Delta t^2`} tone="emerald" />
        <Chip tex={`\\Delta t = \\gamma\\,\\Delta t' = ${fmt(gam, 3)}\\,\\Delta t'`} tone="amber" />
        <Badge tone="plain">moving ticks land every γ half-bounces of the stationary one</Badge>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Spacetime-diagram pane: light cone, worldlines, tilted "now"       */
/* ------------------------------------------------------------------ */

const SDW = 560
const SDH = 540
const SDL = 46
const SDR = 14
const SDT = 14
const SDB = 40
const SDPW = SDW - SDL - SDR
const SDPH = SDH - SDT - SDB
const TRX = 3.2

const WLCOLORS = ['#34d399', '#2dd4bf', '#fb7185', '#fbbf24']

interface Worldline {
  id: number
  v: number
}

function SpacetimePane(props: {
  betaF: number
  setBetaF: (v: number) => void
  worldlines: Worldline[]
  addWorldline: (v: number) => void
  removeWorldline: (id: number) => void
}) {
  const { betaF, worldlines } = props
  const svgRef = useRef<SVGSVGElement | null>(null)
  const [hv, setHv] = useState<{ x: number; t: number } | null>(null)

  const sx = (x: number) => SDL + ((x + TRX) / (2 * TRX)) * SDPW
  const sy = (tt: number) => SDT + ((TRX - tt) / (2 * TRX)) * SDPH

  const gam = gammaOf(betaF)

  const toWorld = (clientX: number, clientY: number) => {
    const el = svgRef.current
    if (!el) return null
    const r = el.getBoundingClientRect()
    const px = ((clientX - r.left) / r.width) * SDW
    const py = ((clientY - r.top) / r.height) * SDH
    const x = ((px - SDL) / SDPW) * (2 * TRX) - TRX
    const t = TRX - ((py - SDT) / SDPH) * (2 * TRX)
    if (x < -TRX || x > TRX || t < -TRX || t > TRX) return null
    return { x, t }
  }

  /* simultaneity slices of the primed frame: t = βx + k/γ */
  const slices = [-2, -1, 0, 1, 2]
  const sliceLabel = (k: number): { lx: number; lt: number } => {
    const kg = k / gam
    if (Math.abs(betaF) > 0.02) {
      const cands = [(-3.05 - kg) / betaF, (3.05 - kg) / betaF].filter((c) => Math.abs(c) <= 3.05)
      if (cands.length > 0) {
        const cx = cands[0]
        return { lx: clamp(cx, -2.95, 2.95), lt: clamp(betaF * cx + kg, -2.95, 2.95) }
      }
    }
    return { lx: 2.45, lt: clamp(kg, -2.95, 2.95) }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Ctl
          label="frame v/c"
          value={betaF}
          min={-0.95}
          max={0.95}
          step={0.005}
          onChange={props.setBetaF}
          aria="Speed of the primed reference frame as a fraction of c"
        />
        <Button
          size="sm"
          variant="outline"
          className="h-8 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10"
          onClick={() => props.addWorldline(betaF)}
        >
          <Plus className="h-3.5 w-3.5" />
          Add worldline at {fmt(betaF, 2)}c
        </Button>
        <Chip tex={`t' = \\gamma(t - \\tfrac{v}{c^2}x),\\ x' = \\gamma(x - vt)`} tone="teal" />
      </div>

      <div className="mt-3 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${SDW} ${SDH}`}
          className="w-full cursor-crosshair select-none"
          role="img"
          aria-label="Spacetime diagram with light cone, worldlines, primed axes and simultaneity slices; hover any event to classify its interval."
          onPointerMove={(e) => setHv(toWorld(e.clientX, e.clientY))}
          onPointerLeave={() => setHv(null)}
        >
          {/* future light cone shading */}
          <polygon
            points={`${sx(0)},${sy(0)} ${sx(TRX)},${sy(TRX)} ${sx(-TRX)},${sy(TRX)}`}
            className="fill-amber-500/5"
          />
          {/* grid */}
          {[-2, -1, 0, 1, 2].map((g) => (
            <g key={`gx${g}`}>
              <line x1={sx(g)} y1={sy(-TRX)} x2={sx(g)} y2={sy(TRX)} className="stroke-zinc-500/15" strokeWidth={1} />
              <line x1={sx(-TRX)} y1={sy(g)} x2={sx(TRX)} y2={sy(g)} className="stroke-zinc-500/15" strokeWidth={1} />
              <text x={sx(g)} y={SDH - SDB + 16} textAnchor="middle" fontSize={10} className="fill-zinc-500 font-mono">
                {g}
              </text>
              <text x={SDL - 8} y={sy(g) + 3.5} textAnchor="end" fontSize={10} className="fill-zinc-500 font-mono">
                {g}
              </text>
            </g>
          ))}
          {/* axes */}
          <line x1={sx(-TRX)} y1={sy(0)} x2={sx(TRX)} y2={sy(0)} className="stroke-zinc-500/50" strokeWidth={1.2} />
          <line x1={sx(0)} y1={sy(-TRX)} x2={sx(0)} y2={sy(TRX)} className="stroke-zinc-500/50" strokeWidth={1.2} />
          <text x={sx(TRX) - 6} y={sy(0) - 8} textAnchor="end" fontSize={11} className="fill-zinc-300">x</text>
          <text x={sx(0) + 8} y={sy(TRX) + 4} fontSize={11} className="fill-zinc-300">t</text>

          {/* light cone */}
          <line x1={sx(-TRX)} y1={sy(-TRX)} x2={sx(TRX)} y2={sy(TRX)} className="stroke-amber-400" strokeWidth={1.8} />
          <line x1={sx(-TRX)} y1={sy(TRX)} x2={sx(TRX)} y2={sy(-TRX)} className="stroke-amber-400" strokeWidth={1.8} />
          <text x={sx(0)} y={sy(TRX) - 10} textAnchor="middle" fontSize={10} className="fill-amber-400/80">future light cone</text>
          <text x={sx(0)} y={sy(-TRX) + 18} textAnchor="middle" fontSize={10} className="fill-amber-400/80">past</text>

          {/* simultaneity slices of the primed frame */}
          {slices.map((k) => {
            const kg = k / gam
            return (
              <line
                key={`sl${k}`}
                x1={sx(-TRX)}
                y1={sy(betaF * -TRX + kg)}
                x2={sx(TRX)}
                y2={sy(betaF * TRX + kg)}
                className="stroke-emerald-400/50"
                strokeWidth={1}
                strokeDasharray="5 4"
              />
            )
          })}
          {slices.map((k) => {
            const { lx, lt } = sliceLabel(k)
            return (
              <text key={`sll${k}`} x={sx(lx)} y={sy(lt) - 5} textAnchor="middle" fontSize={9} className="fill-emerald-400/80 font-mono">
                {`t′=${k > 0 ? '+' : ''}${k}`}
              </text>
            )
          })}

          {/* primed axes */}
          <line x1={sx(-TRX * betaF)} y1={sy(-TRX)} x2={sx(TRX * betaF)} y2={sy(TRX)} className="stroke-teal-400" strokeWidth={2.4} />
          <line x1={sx(-TRX)} y1={sy(-TRX * betaF)} x2={sx(TRX)} y2={sy(TRX * betaF)} className="stroke-teal-400/80" strokeWidth={2} strokeDasharray="7 4" />
          <text x={sx(clamp(TRX * betaF, -2.9, 2.9)) - 6} y={sy(TRX) + 14} textAnchor="end" fontSize={12} className="fill-teal-300 font-mono">t′</text>
          <text x={sx(TRX) - 4} y={sy(TRX * betaF) - 8} textAnchor="end" fontSize={12} className="fill-teal-300 font-mono">x′</text>

          {/* worldlines through the origin */}
          {worldlines.map((wl, i) => (
            <g key={wl.id}>
              <line
                x1={sx(-TRX * wl.v)}
                y1={sy(-TRX)}
                x2={sx(TRX * wl.v)}
                y2={sy(TRX)}
                stroke={WLCOLORS[i % WLCOLORS.length]}
                strokeWidth={1.8}
                opacity={0.95}
              />
              <text
                x={sx(clamp(TRX * wl.v, -2.85, 2.85))}
                y={sy(TRX) + 30}
                textAnchor="middle"
                fontSize={9}
                fill={WLCOLORS[i % WLCOLORS.length]}
                className="font-mono"
              >
                {`v=${fmt(wl.v, 2)}c`}
              </text>
            </g>
          ))}

          {/* hover event marker */}
          {hv && (
            <g pointerEvents="none">
              <line x1={sx(hv.x)} y1={sy(hv.t)} x2={sx(hv.x)} y2={sy(0)} className="stroke-zinc-400/50" strokeWidth={1} strokeDasharray="2 3" />
              <line x1={sx(hv.x)} y1={sy(hv.t)} x2={sx(0)} y2={sy(hv.t)} className="stroke-zinc-400/50" strokeWidth={1} strokeDasharray="2 3" />
              <circle cx={sx(hv.x)} cy={sy(hv.t)} r={5} className="fill-rose-300" />
              <circle cx={sx(hv.x)} cy={sy(hv.t)} r={10} fill="none" className="stroke-rose-300/50" strokeWidth={1} />
            </g>
          )}
        </svg>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        {hv ? (
          (() => {
            const s2 = hv.t * hv.t - hv.x * hv.x
            const tp = gam * (hv.t - betaF * hv.x)
            const xp = gam * (hv.x - betaF * hv.t)
            const kind: 'timelike' | 'spacelike' | 'lightlike' =
              s2 > 0.004 ? 'timelike' : s2 < -0.004 ? 'spacelike' : 'lightlike'
            return (
              <>
                <Badge tone={kind === 'timelike' ? 'emerald' : kind === 'spacelike' ? 'rose' : 'amber'}>
                  {kind} {kind === 'timelike' ? `— Δτ = ${fmt(Math.sqrt(s2), 2)}` : kind === 'spacelike' ? `— Δσ = ${fmt(Math.sqrt(-s2), 2)}` : '— on the cone'}
                </Badge>
                <Chip tex={`s^2 = t^2 - x^2 = ${fmt(s2, 2)}`} />
                <Chip tex={`t' = ${fmt(tp, 2)},\\ x' = ${fmt(xp, 2)}`} tone="teal" />
                <Chip tex={`t'^2 - x'^2 = ${fmt(tp * tp - xp * xp, 2)}`} tone="teal" />
              </>
            )
          })()
        ) : (
          <Badge tone="plain">hover the diagram to classify an event — the interval is frame-proof</Badge>
        )}
        {worldlines.length > 0 && (
          <span className="ml-auto flex flex-wrap items-center gap-1.5">
            {worldlines.map((wl, i) => (
              <span
                key={wl.id}
                className={`flex items-center gap-1.5 rounded-lg border px-2 py-1 font-mono text-[11px] ${
                  i % WLCOLORS.length === 0
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                    : i % WLCOLORS.length === 1
                      ? 'border-teal-500/40 bg-teal-500/10 text-teal-200'
                      : i % WLCOLORS.length === 2
                        ? 'border-rose-500/40 bg-rose-500/10 text-rose-200'
                        : 'border-amber-500/40 bg-amber-500/10 text-amber-200'
                }`}
              >
                {`v = ${fmt(wl.v, 2)}c`}
                <button
                  type="button"
                  onClick={() => props.removeWorldline(wl.id)}
                  aria-label={`Remove worldline at ${fmt(wl.v, 2)}c`}
                  className="rounded p-0.5 transition-colors hover:bg-foreground/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </span>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Energy–momentum pane: the relativistic right triangle              */
/* ------------------------------------------------------------------ */

function EnergyPane(props: { b: number; setB: (v: number) => void; photon: boolean; setPhoton: (v: boolean) => void }) {
  const { b, photon } = props
  const gam = gammaOf(b)
  const m = photon ? 0 : 1
  const E = photon ? 1 : gam
  const KE = photon ? 1 : gam - 1
  const p = photon ? 1 : gam * b

  const HL = 170
  const CX0 = 84
  const CY0 = 206
  const legH = HL * (photon ? 1 : b)
  const legV = photon ? 0 : HL / gam
  const Vx = CX0
  const Vy = CY0 - legV
  const Hx = CX0 + legH
  const Hy = CY0

  const restPct = photon ? 0 : (1 / gam) * 100
  const kePct = 100 - restPct

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Ctl label="v/c" value={b} min={0} max={0.999} step={0.001} onChange={props.setB} aria="Speed as a fraction of c" />
        <button
          type="button"
          onClick={() => props.setPhoton(!photon)}
          aria-pressed={photon}
          className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 ${
            photon
              ? 'border-amber-500/60 bg-amber-500/15 text-amber-200 ring-1 ring-amber-500/40'
              : 'border-border bg-muted/30 text-muted-foreground hover:border-amber-500/40 hover:text-foreground'
          }`}
        >
          Photon (m = 0)
        </button>
        {photon ? (
          <>
            <Chip tex={`E = pc`} tone="amber" />
            <Badge tone="plain">no rest frame — the triangle collapses onto the pc leg</Badge>
          </>
        ) : (
          <>
            <Chip tex={`\\gamma = ${fmt(gam, 3)}`} tone="amber" />
            <Chip tex={`E = \\gamma mc^2 = ${fmt(E, 3)}\\,mc^2`} tone="emerald" />
            <Chip tex={`KE = (\\gamma - 1)mc^2 = ${fmt(KE, 3)}\\,mc^2`} tone="amber" />
            <Chip tex={`p = \\gamma m v = ${fmt(p, 3)}\\,mc`} tone="teal" />
          </>
        )}
      </div>

      <div className="mt-3 flex flex-col gap-3 lg:flex-row">
        <div className="min-w-0 flex-1 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
          <svg viewBox="0 0 620 240" className="w-full select-none" role="img" aria-label="Right triangle with hypotenuse E and legs pc and m c squared; in photon mode it collapses to a line.">
            {legV > 12 && (
              <rect x={CX0} y={CY0 - 10} width={10} height={10} fill="none" className="stroke-zinc-500/60" strokeWidth={1} />
            )}
            <line x1={CX0} y1={CY0} x2={Hx} y2={Hy} className="stroke-amber-400" strokeWidth={2.5} strokeLinecap="round" />
            {legV > 0.5 ? (
              <line x1={CX0} y1={CY0} x2={Vx} y2={Vy} className="stroke-teal-400" strokeWidth={2.5} strokeLinecap="round" />
            ) : (
              <circle cx={CX0} cy={CY0 - 8} r={2.5} className="fill-teal-400/50" />
            )}
            <line x1={Vx} y1={Vy} x2={Hx} y2={Hy} className="stroke-emerald-400" strokeWidth={2.5} strokeLinecap="round" />
            {photon && <circle cx={Hx} cy={Hy} r={6} className="fill-amber-300" />}
            <text x={CX0 + legH / 2} y={CY0 + 20} textAnchor="middle" fontSize={11} className="fill-amber-300 font-mono">pc</text>
            <text x={CX0 - 10} y={Vy + legV / 2} textAnchor="end" fontSize={11} className="fill-teal-300 font-mono">
              {photon ? 'mc² = 0' : 'mc²'}
            </text>
            <text x={(Vx + Hx) / 2 + 12} y={(Vy + Hy) / 2 - 10} fontSize={11} className="fill-emerald-300 font-mono">E</text>
            <text x={560} y={30} textAnchor="middle" fontSize={10} className="fill-zinc-400">
              {photon ? 'photon: E = pc exactly' : 'legs are exact: β² + 1/γ² = 1'}
            </text>
            <text x={560} y={46} textAnchor="middle" fontSize={10} className="fill-zinc-500 font-mono tabular-nums">
              {photon ? 'pc : mc² : E = 1 : 0 : 1' : `pc : mc² : E = ${fmt(b, 3)} : ${fmt(1 / gam, 3)} : 1`}
            </text>
            <text x={560} y={222} textAnchor="middle" fontSize={10} className="fill-zinc-400">
              push v toward c and the teal leg never grows
            </text>
          </svg>
        </div>

        <div className="shrink-0 rounded-xl border border-border bg-background/50 p-3 lg:w-[280px]">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Where the energy sits</p>
          <div className="mt-2 flex h-7 w-full overflow-hidden rounded-lg border border-border">
            <div className="bg-teal-500/70" style={{ width: `${restPct}%` }} />
            <div className="bg-amber-500/70" style={{ width: `${kePct}%`}} />
          </div>
          <div className="mt-2 flex flex-col gap-1.5 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-teal-500/80" />
              rest energy mc² · {fmt(restPct, 1)}%
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-amber-500/80" />
              kinetic (γ−1)mc² · {fmt(kePct, 1)}%
            </span>
          </div>
          <div className="mt-3">
            <Chip tex={`E^2 = (pc)^2 + (mc^2)^2`} tone="emerald" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Twin-paradox pane: proper-time counters on each leg                */
/* ------------------------------------------------------------------ */

function TwinPane(props: {
  t: number
  b: number
  D: number
  setB: (v: number) => void
  setD: (v: number) => void
  resetClock: () => void
}) {
  const { t, b, D } = props
  const T = D / b
  const gam = gammaOf(b)
  const te = Math.min(t * ((2 * T) / 9), 2 * T)
  const done = te >= 2 * T - 1e-9

  const TW = 560
  const TH = 430
  const TL = 50
  const TR = 16
  const TT = 16
  const TB = 36
  const X0 = -0.7
  const X1 = D + 0.9
  const T0 = -0.55
  const T1 = 2 * T + 0.65
  const sxT = (x: number) => TL + ((x - X0) / (X1 - X0)) * (TW - TL - TR)
  const syT = (tt: number) => TT + ((T1 - tt) / (T1 - T0)) * (TH - TT - TB)

  const travX = te <= T ? b * te : D - b * (te - T)
  const tauE = te
  const tauTr = te / gam

  /* proper-time tick marks */
  const earthTicks: number[] = []
  for (let k = 1; k <= Math.floor(2 * T + 1e-9); k++) earthTicks.push(k)
  const travTicks: { x: number; t: number }[] = []
  for (let k = 1; k * gam <= T + 1e-9; k++) travTicks.push({ x: b * k * gam, t: k * gam })
  for (let k = 1; T + k * gam <= 2 * T + 1e-9; k++)
    travTicks.push({ x: D - b * k * gam, t: T + k * gam })

  /* simultaneity slices through the turnaround event */
  const t1 = T * (1 - b * b)
  const t2 = T * (1 + b * b)

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Ctl
          label="v/c"
          value={b}
          min={0.1}
          max={0.95}
          step={0.005}
          onChange={(v) => {
            props.setB(v)
            props.resetClock()
          }}
          aria="Traveler speed as a fraction of c"
        />
        <Ctl
          label="turnaround"
          value={D}
          min={1}
          max={4}
          step={0.25}
          onChange={(v) => {
            props.setD(v)
            props.resetClock()
          }}
          aria="Turnaround distance in light-years"
          display={`${fmt(D, 2)} ly`}
        />
        <Chip tex={`\\gamma = ${fmt(gam, 3)}`} tone="amber" />
        <Chip tex={`\\tau_{\\oplus} = 2T = ${fmt(2 * T, 2)}\\ \\text{yr},\\ \\tau_{\\text{trav}} = 2T/\\gamma = ${fmt((2 * T) / gam, 2)}\\ \\text{yr}`} tone="teal" />
      </div>

      <div className="mt-3 flex flex-col gap-3 lg:flex-row">
        <div className="min-w-0 flex-1 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
          <svg viewBox={`0 0 ${TW} ${TH}`} className="w-full select-none" role="img" aria-label="Spacetime diagram of the twin paradox with Earth worldline and the traveler's outbound and return worldlines.">
            {/* axes */}
            <line x1={sxT(0)} y1={syT(T0)} x2={sxT(0)} y2={syT(T1)} className="stroke-zinc-500/40" strokeWidth={1.2} />
            <line x1={sxT(X0)} y1={syT(0)} x2={sxT(X1)} y2={syT(0)} className="stroke-zinc-500/40" strokeWidth={1.2} />
            <text x={sxT(0) - 8} y={syT(T1) + 2} textAnchor="end" fontSize={10} className="fill-zinc-300">t (yr)</text>
            <text x={sxT(X1) - 4} y={syT(0) + 14} textAnchor="end" fontSize={10} className="fill-zinc-300">x (ly)</text>

            {/* simultaneity jump lines at the turnaround */}
            <line x1={sxT(0)} y1={syT(t1)} x2={sxT(D)} y2={syT(T)} className="stroke-teal-400/70" strokeWidth={1.2} strokeDasharray="5 4" />
            <line x1={sxT(0)} y1={syT(t2)} x2={sxT(D)} y2={syT(T)} className="stroke-amber-400/70" strokeWidth={1.2} strokeDasharray="5 4" />
            <text x={sxT(D) - 8} y={syT(T) - 8} textAnchor="end" fontSize={9} className="fill-zinc-400">
              traveler&apos;s Earth-now jumps
            </text>

            {/* worldlines */}
            <line x1={sxT(0)} y1={syT(0)} x2={sxT(0)} y2={syT(2 * T)} className="stroke-teal-400" strokeWidth={2.4} />
            <path
              d={`M${sxT(0)},${syT(0)}L${sxT(D)},${syT(T)}L${sxT(0)},${syT(2 * T)}`}
              fill="none"
              className="stroke-emerald-400"
              strokeWidth={2.4}
              strokeLinejoin="round"
            />
            <text x={sxT(D / 2)} y={syT(T / 2) + 16} textAnchor="middle" fontSize={10} className="fill-emerald-300">outbound</text>
            <text x={sxT(D / 2)} y={syT(1.5 * T) + 16} textAnchor="middle" fontSize={10} className="fill-emerald-300">return</text>

            {/* turnaround */}
            <circle cx={sxT(D)} cy={syT(T)} r={5.5} className="fill-amber-400" />

            {/* proper-time ticks */}
            {earthTicks.map((k) => (
              <circle key={`et${k}`} cx={sxT(0)} cy={syT(k)} r={2.2} className="fill-teal-400/70" />
            ))}
            {travTicks.map((p, k) => (
              <circle key={`tt${k}`} cx={sxT(p.x)} cy={syT(p.t)} r={2.2} className="fill-emerald-400/70" />
            ))}

            {/* travelers in flight */}
            <circle cx={sxT(0)} cy={syT(tauE)} r={5.5} className="fill-teal-300" />
            <circle cx={sxT(travX)} cy={syT(te)} r={5.5} className="fill-amber-300" />
            <text x={sxT(0) - 10} y={syT(tauE) + 4} textAnchor="end" fontSize={10} className="fill-teal-300 font-mono tabular-nums">
              {fmt(tauE, 1)}
            </text>
            <text x={sxT(travX) + 10} y={syT(te) + 4} fontSize={10} className="fill-amber-300 font-mono tabular-nums">
              {fmt(tauTr, 1)}
            </text>
          </svg>
        </div>

        <div className="shrink-0 lg:w-[240px]">
          <div className="grid grid-cols-1 gap-3">
            <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 px-3 py-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-300">Earth twin</p>
              <p className="font-mono text-2xl tabular-nums text-foreground">
                {fmt(tauE, 2)} <span className="text-sm text-muted-foreground">yr</span>
              </p>
            </div>
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 px-3 py-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-300">Traveler</p>
              <p className="font-mono text-2xl tabular-nums text-foreground">
                {fmt(tauTr, 2)} <span className="text-sm text-muted-foreground">yr</span>
              </p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {done && (
              <Badge tone="rose">reunited — the traveler is {fmt(2 * T - (2 * T) / gam, 2)} yr younger</Badge>
            )}
            <Chip tex={`\\Delta t_{\\text{jump}} = 2\\beta^2 T = ${fmt(2 * b * b * T, 2)}\\ \\text{yr}`} tone="amber" />
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
            Teal ticks mark Earth years; emerald ticks mark the traveler&apos;s proper years — same
            events, slower clock. The dashed slices are the traveler&apos;s definition of{' '}
            <span className="text-foreground">now on Earth</span>: before the turnaround it reads
            t = {fmt(t1, 2)} yr, just after it reads t = {fmt(t2, 2)} yr. That leap, not any mid-flight
            sloth, is how the ages end up different.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Modes + presets                                                    */
/* ------------------------------------------------------------------ */

type RMode = 'lightclock' | 'spacetime' | 'energy' | 'twin'

const RMODES: { key: RMode; label: string; Icon: LucideIcon; blurb: string }[] = [
  { key: 'lightclock', label: 'Light clock', Icon: Timer, blurb: 'A photon bouncing between sliding mirrors: the diagonal zigzag that forces time dilation.' },
  { key: 'spacetime', label: 'Spacetime', Icon: Orbit, blurb: 'Worldlines, the light cone, and simultaneity slices that tilt when you switch frames.' },
  { key: 'energy', label: 'Energy–momentum', Icon: Zap, blurb: 'The relativistic right triangle E² = (pc)² + (mc²)², with the photon as its degenerate case.' },
  { key: 'twin', label: 'Twin paradox', Icon: Users, blurb: 'Out and back at constant speed: two proper-time counters ticking at different rates.' },
]

interface RPreset {
  key: string
  label: string
  note: string
  chip: string
}

const RPRESETS: RPreset[] = [
  {
    key: 'v06',
    label: 'v = 0.6c (γ = 1.25)',
    note: 'β = 0.6 turns the light-clock triangle into a perfect 3-4-5: the photon\u2019s diagonal (cΔt) is 5 units while the clock slides 3 and light crosses 4 — so γ = 5/4 = 1.25 exactly. The moving clock completes one round trip for every 1.25 of the stationary one; watch the counters drift apart.',
    chip: '\\gamma = \\frac{1}{\\sqrt{1 - 0.6^2}} = 1.25',
  },
  {
    key: 'muon',
    label: 'Muon\u2019s flight',
    note: 'A muon born 10 km up at 0.998c should decay in 2.2 μs — barely a third of the way down. But γ = 15.8 stretches its clock in the lab frame to 35 μs, and the 33 μs descent makes it to the ground. In the muon\u2019s own frame the atmosphere is contracted to 10 km/γ ≈ 630 m. Hover just inside the muon worldline: its events stay timelike — the ground is inside its future cone.',
    chip: '\\gamma = 15.8',
  },
  {
    key: 'twin',
    label: 'Twin paradox',
    note: 'The classic: out to 3 ly at 0.6c and straight back. Earth accumulates 2T = 10 years; the traveler\u2019s proper clock only 2T/γ = 8. The resolution hides in the dashed simultaneity slices: at the turnaround the traveler\u2019s definition of \u201cnow on Earth\u201d leaps from t = 3.2 yr to t = 6.8 yr — a 3.6-year jump that no coasting observer ever makes.',
    chip: '\\tau_{\\text{trav}} = 2T/\\gamma = 8\\ \\text{yr}',
  },
  {
    key: 'race',
    label: '99% c energy race',
    note: 'The last percent is the expensive one. At 0.99c, γ = 7.09: the cargo\u2019s total energy is 7.09 mc², of which 6.09 mc² — 86% — is kinetic. Reaching 0.999c would demand γ = 22.4. The triangle shows why this never bottoms out: E grows without limit while the mc² leg stays pinned at rest energy.',
    chip: 'E = 7.09\\,mc^2,\\ KE = 6.09\\,mc^2',
  },
]

/* ------------------------------------------------------------------ */
/*  Lab shell                                                          */
/* ------------------------------------------------------------------ */

export default function RelativityLab() {
  const reduce = useReducedMotion()
  const [mode, setMode] = useState<RMode>('lightclock')
  const [playing, setPlaying] = useState(false)
  const [t, setT] = useClock(playing)
  const [presetKey, setPresetKey] = useState('')

  /* light clock params */
  const [betaLC, setBetaLC] = useState(0.6)

  /* spacetime params */
  const [betaF, setBetaF] = useState(0.5)
  const [worldlines, setWorldlines] = useState<Worldline[]>([{ id: 1, v: 0.6 }])
  const wlSeq = useRef(2)

  const addWorldline = (v: number) => {
    wlSeq.current += 1
    setWorldlines((prev) => [...prev.slice(-5), { id: wlSeq.current, v }])
  }
  const removeWorldline = (id: number) => setWorldlines((prev) => prev.filter((w) => w.id !== id))

  /* energy–momentum params */
  const [betaE, setBetaE] = useState(0.8)
  const [photon, setPhoton] = useState(false)

  /* twin params */
  const [betaTw, setBetaTw] = useState(0.6)
  const [Dtw, setDtw] = useState(3)

  const applyPreset = (key: string) => {
    setPresetKey(key)
    setT(0)
    switch (key) {
      case 'v06':
        setMode('lightclock')
        setBetaLC(0.6)
        break
      case 'muon':
        setMode('spacetime')
        setBetaF(0.998)
        setWorldlines([
          { id: 101, v: 0.998 },
          { id: 102, v: 0 },
        ])
        break
      case 'twin':
        setMode('twin')
        setBetaTw(0.6)
        setDtw(3)
        break
      case 'race':
        setMode('energy')
        setBetaE(0.99)
        setPhoton(false)
        break
    }
  }

  const activePreset = RPRESETS.find((p) => p.key === presetKey) ?? null
  const activeMode = RMODES.find((m) => m.key === mode) ?? RMODES[0]

  return (
    <div className="rounded-2xl border border-border/80 bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Atom className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Special Relativity Explorer</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Physics Ch 9: light clocks, tilted simultaneity, the energy triangle and the twins — every
            number comes from γ = 1/√(1 − v²/c²).
          </p>
        </div>
      </div>

      {/* presets */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Presets
        </span>
        {RPRESETS.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => applyPreset(p.key)}
            aria-pressed={presetKey === p.key}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
              presetKey === p.key
                ? 'border-emerald-500/60 bg-emerald-500/15 text-foreground ring-1 ring-emerald-500/40'
                : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      {activePreset && (
        <motion.div
          key={presetKey}
          initial={reduce ? false : { opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.25 }}
          className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-3 py-2"
        >
          <p className="min-w-0 flex-1 text-[11px] leading-relaxed text-muted-foreground">{activePreset.note}</p>
          <span className="shrink-0 rounded-lg border border-border bg-card px-2.5 py-1 text-xs text-emerald-200">
            <TeX tex={activePreset.chip} />
          </span>
        </motion.div>
      )}

      {/* mode tabs */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Mode
        </span>
        {RMODES.map((m) => {
          const Icon = m.Icon
          return (
            <button
              key={m.key}
              type="button"
              onClick={() => {
                setMode(m.key)
                setPresetKey('')
                setT(0)
              }}
              aria-pressed={mode === m.key}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                mode === m.key
                  ? 'border-emerald-500/60 bg-emerald-500/15 text-foreground ring-1 ring-emerald-500/40'
                  : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {m.label}
            </button>
          )
        })}
      </div>

      {/* transport */}
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500" onClick={() => setPlaying(!playing)}>
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {playing ? 'Pause' : 'Play'}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 px-2"
          onClick={() => setT(0)}
          aria-label="Reset the animation clock"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </Button>
        {!playing && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">time</span>
            <Slider
              min={0}
              max={40}
              step={0.05}
              value={[Math.min(t, 40)]}
              onValueChange={(v) => setT(v[0] ?? 0)}
              className="w-28 sm:w-44"
              aria-label="Scrub time while paused"
            />
            <span className="w-10 font-mono text-xs tabular-nums text-foreground">{fmt(Math.min(t, 40), 1)}</span>
          </div>
        )}
        <p className="min-w-0 flex-1 text-[11px] leading-relaxed text-muted-foreground">{activeMode.blurb}</p>
      </div>

      {/* active mode */}
      <motion.div
        key={mode}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.25 }}
        className="mt-3"
      >
        {mode === 'lightclock' && <LightClockPane t={t} b={betaLC} setB={setBetaLC} />}
        {mode === 'spacetime' && (
          <SpacetimePane
            betaF={betaF}
            setBetaF={setBetaF}
            worldlines={worldlines}
            addWorldline={addWorldline}
            removeWorldline={removeWorldline}
          />
        )}
        {mode === 'energy' && (
          <EnergyPane b={betaE} setB={setBetaE} photon={photon} setPhoton={setPhoton} />
        )}
        {mode === 'twin' && (
          <TwinPane t={t} b={betaTw} D={Dtw} setB={setBetaTw} setD={setDtw} resetClock={() => setT(0)} />
        )}
      </motion.div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          in <span className="font-medium text-foreground">Light clock</span> sweep v/c toward 0.95 —
          the zigzag flattens and γ climbs from 1.00 to 3.20 while the moving counter falls behind.
          In <span className="font-medium text-foreground">Spacetime</span> add a 0.8c worldline, then
          drag the frame slider past 0.8c and watch its events flip from timelike to spacelike as the
          t′ axis sweeps by. Then set the twins to v = 0.9c, D = 2.7 ly: Earth ages 6.0 years, the
          traveler 2.6 — and the jump line explains the difference.
        </span>
      </div>
    </div>
  )
}

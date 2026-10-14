'use client'

import { useEffect, useMemo, useRef, useState, type ReactElement, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  AudioLines,
  AudioWaveform,
  Crosshair,
  Gauge,
  Lightbulb,
  MoveVertical,
  Pause,
  Play,
  Radio,
  RotateCcw,
  Waves,
  type LucideIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Scope geometry + shared helpers                                   */
/* ------------------------------------------------------------------ */

const W = 620
const H = 300
const PL = 46
const PR = 14
const PT = 16
const PB = 28
const PW = W - PL - PR
const PH = H - PT - PB

const TAU = Math.PI * 2

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v))
}

function fmt(v: number, d = 2): string {
  if (!Number.isFinite(v)) return '—'
  const av = Math.abs(v)
  if (av >= 1e4 || (av > 0 && av < 1e-3)) return v.toExponential(2)
  return v.toFixed(d)
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

function buildPath(
  fn: (x: number) => number,
  x0: number,
  x1: number,
  n: number,
  xToPx: (x: number) => number,
  yToPx: (y: number) => number
): string {
  const parts: string[] = []
  let pen = false
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n
    const y = fn(x)
    if (!Number.isFinite(y)) {
      pen = false
      continue
    }
    parts.push(`${pen ? 'L' : 'M'}${xToPx(x).toFixed(2)},${yToPx(y).toFixed(2)}`)
    pen = true
  }
  return parts.join('')
}

function springPath(x0: number, x1: number, y: number, n = 7, amp = 7): string {
  const parts = [`M${x0.toFixed(2)},${y.toFixed(2)}`]
  const seg = (x1 - x0) / n
  for (let i = 0; i < n; i++) {
    const cx = x0 + seg * (i + 0.5)
    parts.push(`L${cx.toFixed(2)},${(y + (i % 2 === 0 ? -amp : amp)).toFixed(2)}`)
  }
  parts.push(`L${x1.toFixed(2)},${y.toFixed(2)}`)
  return parts.join('')
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
        className="w-20 sm:w-32"
        aria-label={aria}
      />
      <span className="w-11 text-right font-mono text-xs tabular-nums text-foreground">
        {display ?? fmt(value)}
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Superposition pane (Ch 6–7: interference of traveling waves)       */
/* ------------------------------------------------------------------ */

function SuperPane(props: {
  t: number
  a1: number
  a2: number
  f1: number
  f2: number
  phDeg: number
  dir2: 'same' | 'opposite'
  beatsFit: boolean
  setA1: (v: number) => void
  setA2: (v: number) => void
  setF1: (v: number) => void
  setF2: (v: number) => void
  setPhDeg: (v: number) => void
  setDir2: (v: 'same' | 'opposite') => void
  setBeatsFit: (v: boolean) => void
}) {
  const { t, a1, a2, f1, f2, phDeg, dir2, beatsFit } = props
  /* wave speed v = 1 unit/s, so k = 2πf and ω = 2πf */
  const om1 = TAU * f1
  const om2 = TAU * f2
  const k1 = TAU * f1
  const k2 = TAU * f2
  const ph = (phDeg * Math.PI) / 180
  const sgn = dir2 === 'same' ? -1 : 1

  const y1 = (x: number) => a1 * Math.sin(k1 * x - om1 * t)
  const y2 = (x: number) => a2 * Math.sin(k2 * x + sgn * om2 * t + ph)
  const ys = (x: number) => y1(x) + y2(x)

  const df = Math.abs(f1 - f2)
  const beats = dir2 === 'same' && df > 1e-4 && df <= 0.3 * Math.min(f1, f2)
  const xWin = beatsFit && beats ? clamp(2 / df, 8, 140) : 8
  const yMax = a1 + a2 + 0.3
  const nS = xWin > 9 ? 1400 : 480
  const xToPx = (x: number) => PL + (x / xWin) * PW
  const yToPx = (y: number) => PT + ((yMax - y) / (2 * yMax)) * PH

  const d1 = buildPath(y1, 0, xWin, nS, xToPx, yToPx)
  const d2 = buildPath(y2, 0, xWin, nS, xToPx, yToPx)
  const ds = buildPath(ys, 0, xWin, nS, xToPx, yToPx)
  const envAmp = (x: number) =>
    Math.sqrt(Math.max(0, a1 * a1 + a2 * a2 + 2 * a1 * a2 * Math.cos((k1 - k2) * x - (om1 - om2) * t)))
  const envUp = beats ? buildPath(envAmp, 0, xWin, nS, xToPx, yToPx) : ''
  const envDn = beats ? buildPath((x) => -envAmp(x), 0, xWin, nS, xToPx, yToPx) : ''

  const xTicks = [0, xWin / 4, xWin / 2, (3 * xWin) / 4, xWin]

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Ctl label="A₁" value={a1} min={0.1} max={1.2} step={0.05} onChange={props.setA1} aria="Amplitude of wave one" />
        <Ctl label="A₂" value={a2} min={0.1} max={1.2} step={0.05} onChange={props.setA2} aria="Amplitude of wave two" />
        <Ctl label="f₁" value={f1} min={0.5} max={10} step={0.01} onChange={props.setF1} aria="Frequency of wave one" />
        <Ctl label="f₂" value={f2} min={0.5} max={10} step={0.01} onChange={props.setF2} aria="Frequency of wave two" />
        <Ctl
          label="φ₂"
          value={phDeg}
          min={0}
          max={360}
          step={5}
          onChange={props.setPhDeg}
          aria="Phase offset of wave two in degrees"
          display={`${fmt(phDeg, 0)}°`}
        />
        <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/30 p-0.5" role="group" aria-label="Wave two direction">
          {(['same', 'opposite'] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => props.setDir2(d)}
              aria-pressed={dir2 === d}
              className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                dir2 === d
                  ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {d === 'same' ? 'Same way' : 'Opposite'}
            </button>
          ))}
        </div>
        {beats && (
          <button
            type="button"
            onClick={() => props.setBeatsFit(!beatsFit)}
            aria-pressed={beatsFit}
            className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 ${
              beatsFit
                ? 'border-amber-500/60 bg-amber-500/15 text-amber-200 ring-1 ring-amber-500/40'
                : 'border-border bg-muted/30 text-muted-foreground hover:border-amber-500/40 hover:text-foreground'
            }`}
          >
            Fit one beat pair
          </button>
        )}
      </div>

      <div className="mt-3 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full select-none"
          role="img"
          aria-label="Oscilloscope trace of two traveling waves and their superposed sum."
        >
          <rect x={PL} y={PT} width={PW} height={PH} rx={6} className="fill-zinc-950/40" />
          {xTicks.map((gx) => (
            <g key={`gx${gx}`}>
              <line x1={xToPx(gx)} y1={PT} x2={xToPx(gx)} y2={PT + PH} className="stroke-zinc-500/15" strokeWidth={1} />
              <text x={xToPx(gx)} y={H - PB + 16} textAnchor="middle" fontSize={11} className="fill-zinc-500 font-mono">
                {fmt(gx, xWin > 20 ? 0 : 1)}
              </text>
            </g>
          ))}
          {[-2, -1, 0, 1, 2].map((gy) =>
            Math.abs(gy) < yMax - 0.05 ? (
              <line
                key={`gy${gy}`}
                x1={PL}
                y1={yToPx(gy)}
                x2={PL + PW}
                y2={yToPx(gy)}
                className={gy === 0 ? 'stroke-zinc-500/40' : 'stroke-zinc-500/15'}
                strokeWidth={1}
              />
            ) : null
          )}
          {[-1, 1].map((gy) =>
            Math.abs(gy) < yMax - 0.05 ? (
              <text key={`gyl${gy}`} x={PL - 8} y={yToPx(gy) + 3.5} textAnchor="end" fontSize={11} className="fill-zinc-500 font-mono">
                {gy}
              </text>
            ) : null
          )}

          {beats && (
            <>
              <path d={envUp} fill="none" className="stroke-amber-400/80" strokeWidth={1.3} strokeDasharray="2 4" />
              <path d={envDn} fill="none" className="stroke-amber-400/80" strokeWidth={1.3} strokeDasharray="2 4" />
            </>
          )}
          <path d={d1} fill="none" className="stroke-teal-400" strokeWidth={1.5} strokeDasharray="5 4" opacity={0.85} />
          <path d={d2} fill="none" className="stroke-amber-400" strokeWidth={1.5} strokeDasharray="5 4" opacity={0.85} />
          <path
            d={ds}
            fill="none"
            className="stroke-emerald-400"
            strokeWidth={2.4}
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          <g transform={`translate(${PL + 10},${PT + 4})`} fontSize={10}>
            <line x1={0} y1={0} x2={16} y2={0} className="stroke-teal-400" strokeWidth={2} strokeDasharray="4 3" />
            <text x={20} y={3} className="fill-teal-300">y₁</text>
            <line x1={44} y1={0} x2={60} y2={0} className="stroke-amber-400" strokeWidth={2} strokeDasharray="4 3" />
            <text x={64} y={3} className="fill-amber-300">y₂</text>
            <line x1={92} y1={0} x2={108} y2={0} className="stroke-emerald-400" strokeWidth={2.5} />
            <text x={112} y={3} className="fill-emerald-300">sum</text>
            {beats && (
              <>
                <line x1={150} y1={0} x2={166} y2={0} className="stroke-amber-400/70" strokeWidth={1.5} strokeDasharray="2 3" />
                <text x={170} y={3} className="fill-amber-300/80">envelope</text>
              </>
            )}
          </g>
          <text x={PL + PW} y={H - 6} textAnchor="end" fontSize={10} className="fill-zinc-400">
            x (wave speed v = 1 unit/s)
          </text>
        </svg>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <Chip
          tex={`y = A_1\\sin(k_1 x - \\omega_1 t) + A_2\\sin(k_2 x ${dir2 === 'same' ? '-' : '+'} \\omega_2 t + \\varphi)`}
        />
        {beats && (
          <>
            <Chip tex={`f_{\\text{beat}} = |f_1 - f_2| = ${fmt(df, 3)}`} tone="amber" />
            <Chip tex={`\\text{carrier} = \\tfrac{f_1 + f_2}{2} = ${fmt((f1 + f2) / 2, 3)}`} tone="teal" />
          </>
        )}
        {dir2 === 'opposite' && df < 0.02 && (
          <Badge tone="rose">equal counter-propagating waves — a standing wave (next mode)</Badge>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Standing-wave pane (Ch 7: reflections, harmonics, Fourier modes)    */
/* ------------------------------------------------------------------ */

function StandingPane(props: {
  t: number
  sub: 'harmonic' | 'plucked'
  harm: number
  pluckP: number
  setSub: (v: 'harmonic' | 'plucked') => void
  setHarm: (v: number) => void
  setPluckP: (v: number) => void
}) {
  const { t, sub, harm, pluckP } = props
  const L = 8
  const A = 0.75
  const yMax = 2.1
  const xToPx = (x: number) => PL + (x / L) * PW
  const yToPx = (y: number) => PT + ((yMax - y) / (2 * yMax)) * PH

  const sumPath =
    sub === 'harmonic'
      ? buildPath(
          (x) => 2 * A * Math.sin((harm * Math.PI * x) / L) * Math.cos((harm * Math.PI * t) / 8),
          0,
          L,
          480,
          xToPx,
          yToPx
        )
      : buildPath((x) => {
          const p = clamp(pluckP, 0.4, L - 0.4)
          let s = 0
          for (let n = 1; n <= 8; n++) {
            const b =
              ((2 * L * L) / (Math.PI * Math.PI * n * n * p * (L - p))) *
              Math.sin((n * Math.PI * p) / L)
            s += b * Math.sin((n * Math.PI * x) / L) * Math.cos((n * Math.PI * t) / 8)
          }
          return s
        }, 0, L, 520, xToPx, yToPx)

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/30 p-0.5" role="group" aria-label="Standing wave sub-mode">
          {(['harmonic', 'plucked'] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => props.setSub(s)}
              aria-pressed={sub === s}
              className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                sub === s
                  ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {s === 'harmonic' ? 'Harmonics' : 'Plucked string'}
            </button>
          ))}
        </div>
        {sub === 'harmonic' ? (
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-xs text-muted-foreground">harmonic n</span>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => props.setHarm(n)}
                aria-pressed={harm === n}
                aria-label={`Harmonic number ${n}`}
                className={`h-7 w-7 rounded-lg border font-mono text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                  harm === n
                    ? 'border-emerald-500/60 bg-emerald-500/15 text-foreground ring-1 ring-emerald-500/40'
                    : 'border-border bg-muted/30 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        ) : (
          <Ctl
            label="pluck at"
            value={pluckP}
            min={0.4}
            max={7.6}
            step={0.1}
            onChange={props.setPluckP}
            aria="Pluck position along the string"
          />
        )}
      </div>

      <div className="mt-3 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full select-none"
          role="img"
          aria-label={
            sub === 'harmonic'
              ? `Standing wave pattern for harmonic ${harm}, with its two traveling components and node markers.`
              : 'Plucked triangular string decomposing into its first eight Fourier modes.'
          }
        >
          <rect x={PL} y={PT} width={PW} height={PH} rx={6} className="fill-zinc-950/40" />
          {[-2, -1, 0, 1, 2].map((gy) => (
            <line
              key={`gy${gy}`}
              x1={PL}
              y1={yToPx(gy)}
              x2={PL + PW}
              y2={yToPx(gy)}
              className={gy === 0 ? 'stroke-zinc-500/40' : 'stroke-zinc-500/15'}
              strokeWidth={1}
            />
          ))}
          {[-1, 1].map((gy) => (
            <text key={`gyl${gy}`} x={PL - 8} y={yToPx(gy) + 3.5} textAnchor="end" fontSize={11} className="fill-zinc-500 font-mono">
              {gy}
            </text>
          ))}

          {sub === 'harmonic' && (
            <>
              {/* envelope of the standing pattern */}
              <path
                d={buildPath((x) => 2 * A * Math.abs(Math.sin((harm * Math.PI * x) / L)), 0, L, 480, xToPx, yToPx)}
                fill="none"
                className="stroke-emerald-400/30"
                strokeWidth={1.2}
              />
              <path
                d={buildPath((x) => -2 * A * Math.abs(Math.sin((harm * Math.PI * x) / L)), 0, L, 480, xToPx, yToPx)}
                fill="none"
                className="stroke-emerald-400/30"
                strokeWidth={1.2}
              />
              {/* the two counter-propagating waves (reflections) */}
              <path
                d={buildPath((x) => A * Math.sin((harm * Math.PI * x) / L - (harm * Math.PI * t) / 8), 0, L, 480, xToPx, yToPx)}
                fill="none"
                className="stroke-teal-400"
                strokeWidth={1.3}
                strokeDasharray="5 4"
                opacity={0.8}
              />
              <path
                d={buildPath((x) => A * Math.sin((harm * Math.PI * x) / L + (harm * Math.PI * t) / 8), 0, L, 480, xToPx, yToPx)}
                fill="none"
                className="stroke-amber-400"
                strokeWidth={1.3}
                strokeDasharray="5 4"
                opacity={0.8}
              />
              {/* nodes and antinodes */}
              {Array.from({ length: harm + 1 }, (_, k) => (k * L) / harm).map((xn, k) => (
                <circle
                  key={`nd${k}`}
                  cx={xToPx(xn)}
                  cy={yToPx(0)}
                  r={4.5}
                  className="fill-zinc-950 stroke-rose-400"
                  strokeWidth={2}
                >
                  <title>{`node ${k + 1} of ${harm + 1}`}</title>
                </circle>
              ))}
              {Array.from({ length: harm }, (_, k) => ((k + 0.5) * L) / harm).map((xa, k) => (
                <circle key={`an${k}`} cx={xToPx(xa)} cy={yToPx(0)} r={3.2} className="fill-emerald-400">
                  <title>{`antinode ${k + 1} of ${harm}`}</title>
                </circle>
              ))}
            </>
          )}

          {sub === 'plucked' && (() => {
            const p = clamp(pluckP, 0.4, L - 0.4)
            const modeColors = ['stroke-teal-400', 'stroke-amber-400', 'stroke-rose-400']
            const ghost = (n: number) => {
              const b =
                ((2 * L * L) / (Math.PI * Math.PI * n * n * p * (L - p))) * Math.sin((n * Math.PI * p) / L)
              return buildPath((x) => b * Math.sin((n * Math.PI * x) / L), 0, L, 300, xToPx, yToPx)
            }
            return (
              <>
                {[1, 2, 3].map((n) => (
                  <path
                    key={`m${n}`}
                    d={ghost(n)}
                    fill="none"
                    className={`${modeColors[n - 1]} opacity-50`}
                    strokeWidth={1.2}
                    strokeDasharray="4 4"
                  />
                ))}
                <path
                  d={`M${xToPx(0)},${yToPx(0)}L${xToPx(p)},${yToPx(1)}L${xToPx(L)},${yToPx(0)}`}
                  fill="none"
                  className="stroke-amber-300/70"
                  strokeWidth={1.4}
                  strokeDasharray="6 4"
                />
                <text x={xToPx(p)} y={yToPx(1) - 8} textAnchor="middle" fontSize={10} className="fill-amber-300/80">
                  t = 0 shape
                </text>
              </>
            )
          })()}

          <path d={sumPath} fill="none" className="stroke-emerald-400" strokeWidth={2.4} strokeLinejoin="round" strokeLinecap="round" />

          {/* fixed ends */}
          {[0, L].map((xe) => (
            <line key={`end${xe}`} x1={xToPx(xe)} y1={PT + 6} x2={xToPx(xe)} y2={PT + PH - 6} className="stroke-zinc-600" strokeWidth={3.5} strokeLinecap="round" />
          ))}
          <text x={PL + PW} y={H - 6} textAnchor="end" fontSize={10} className="fill-zinc-400">
            string of length L = 8, fixed at both ends · v = 1 unit/s
          </text>
        </svg>

        {sub === 'plucked' && (() => {
          const p = clamp(pluckP, 0.4, L - 0.4)
          const b: number[] = []
          for (let n = 1; n <= 8; n++) {
            b.push(((2 * L * L) / (Math.PI * Math.PI * n * n * p * (L - p))) * Math.sin((n * Math.PI * p) / L))
          }
          const maxAbs = Math.max(...b.map(Math.abs), 1e-9)
          return (
            <div className="mt-3 flex items-end gap-1 sm:gap-1.5" role="img" aria-label="Fourier mode amplitudes b1 through b8 of the plucked string">
              {b.map((v, i) => (
                <div key={i} className="flex min-w-0 flex-1 flex-col items-center gap-1">
                  <span className="font-mono text-[9px] tabular-nums text-muted-foreground">{fmt(v, 2)}</span>
                  <div
                    className={`w-full rounded-sm ${v >= 0 ? 'bg-emerald-500/70' : 'bg-rose-500/70'}`}
                    style={{ height: `${Math.max(2, (Math.abs(v) / maxAbs) * 52)}px` }}
                  />
                  <span className="font-mono text-[10px] text-zinc-400">n={i + 1}</span>
                </div>
              ))}
            </div>
          )
        })()}
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        {sub === 'harmonic' ? (
          <>
            <Chip tex={`\\lambda_n = \\frac{2L}{n} = ${fmt((2 * L) / harm, 3)}`} tone="teal" />
            <Chip tex={`f_n = n f_1 = ${fmt(harm / 16, 4)}\\ \\text{Hz}`} tone="plain" />
            <Badge tone="rose">{harm + 1} nodes · {harm} antinodes</Badge>
            <Chip tex={`y = 2A\\sin(k x)\\cos(\\omega t)`} />
          </>
        ) : (
          <>
            <Chip tex={`b_n = \\frac{2hL^2}{\\pi^2 n^2 p(L-p)}\\sin\\!\\Big(\\frac{n\\pi p}{L}\\Big)`} tone="emerald" />
            <Chip tex={`T_1 = \\frac{2L}{v} = 16\\ \\text{s}`} tone="amber" />
            <Badge tone="plain">the triangle re-forms every T₁ — all modes re-phase</Badge>
          </>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Two-source interference pane (Ch 7: path difference)              */
/* ------------------------------------------------------------------ */

const IW = 620
const IH = 380
const FX0 = -4.4
const FX1 = 4.4
const FY0 = -2.7
const FY1 = 2.7
const PXU = IW / (FX1 - FX0)

function fxToPx(x: number): number {
  return ((x - FX0) / (FX1 - FX0)) * IW
}
function fyToPx(y: number): number {
  return ((FY1 - y) / (FY1 - FY0)) * IH
}

function InterferencePane(props: {
  t: number
  s1: { x: number; y: number }
  s2: { x: number; y: number }
  lam: number
  probe: { x: number; y: number } | null
  setS1: (s: { x: number; y: number }) => void
  setS2: (s: { x: number; y: number }) => void
  setLam: (v: number) => void
  setProbe: (p: { x: number; y: number } | null) => void
}) {
  const { t, s1, s2, lam, probe } = props
  const svgRef = useRef<SVGSVGElement | null>(null)
  const dragIdx = useRef<number | null>(null)

  const toWorld = (clientX: number, clientY: number) => {
    const el = svgRef.current
    if (!el) return null
    const r = el.getBoundingClientRect()
    const sx = ((clientX - r.left) / r.width) * IW
    const sy = ((clientY - r.top) / r.height) * IH
    return { x: FX0 + (sx / IW) * (FX1 - FX0), y: FY1 - (sy / IH) * (FY1 - FY0) }
  }

  const moveSrc = (i: number, x: number, y: number) => {
    const nx = clamp(Math.round(x * 20) / 20, FX0 + 0.2, 3.2)
    const ny = clamp(Math.round(y * 20) / 20, FY0 + 0.2, FY1 - 0.2)
    if (i === 0) props.setS1({ x: nx, y: ny })
    else props.setS2({ x: nx, y: ny })
  }

  /* time-independent intensity field + screen strip (recomputed on drag only) */
  const field = useMemo(() => {
    const cols = 60
    const rows = 36
    const cw = IW / cols
    const ch = IH / rows
    const cells: ReactElement[] = []
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const u = FX0 + ((i + 0.5) / cols) * (FX1 - FX0)
        const w = FY0 + ((j + 0.5) / rows) * (FY1 - FY0)
        const dd = Math.hypot(u - s1.x, w - s1.y) - Math.hypot(u - s2.x, w - s2.y)
        const I = Math.cos((Math.PI * dd) / lam) ** 2
        cells.push(
          <rect
            key={`c${i}-${j}`}
            x={i * cw}
            y={j * ch}
            width={cw + 0.5}
            height={ch + 0.5}
            fill="#34d399"
            opacity={0.04 + 0.62 * I}
          />
        )
      }
    }
    const nStrip = 76
    const strip: ReactElement[] = []
    for (let j = 0; j < nStrip; j++) {
      const yy = FY0 + ((j + 0.5) / nStrip) * (FY1 - FY0)
      const dd = Math.hypot(3.5 - s1.x, yy - s1.y) - Math.hypot(3.5 - s2.x, yy - s2.y)
      const I = Math.cos((Math.PI * dd) / lam) ** 2
      strip.push(
        <rect
          key={`s${j}`}
          x={fxToPx(3.5)}
          y={(j / nStrip) * IH}
          width={fxToPx(3.82) - fxToPx(3.5)}
          height={IH / nStrip + 0.6}
          fill="#34d399"
          opacity={0.05 + 0.9 * I}
        />
      )
    }
    return { cells: <g shapeRendering="crispEdges">{cells}</g>, strip: <g shapeRendering="crispEdges">{strip}</g> }
  }, [s1.x, s1.y, s2.x, s2.y, lam])

  /* animated expanding wavefront rings */
  const rings: ReactElement[] = []
  const srcs = [
    { p: s1, c: '#2dd4bf', name: 'S₁' },
    { p: s2, c: '#fbbf24', name: 'S₂' },
  ]
  srcs.forEach((s, si) => {
    for (let k = 0; k < 9; k++) {
      const r = (t % lam) + k * lam
      if (r > 6.8) break
      rings.push(
        <circle
          key={`r${si}-${k}`}
          cx={fxToPx(s.p.x)}
          cy={fyToPx(s.p.y)}
          r={r * PXU}
          fill="none"
          stroke={s.c}
          strokeWidth={1.4}
          strokeOpacity={0.55 * (1 - k / 9)}
        />
      )
    }
  })

  const probeInfo = useMemo(() => {
    if (!probe) return null
    const d1 = Math.hypot(probe.x - s1.x, probe.y - s1.y)
    const d2 = Math.hypot(probe.x - s2.x, probe.y - s2.y)
    const dd = Math.abs(d1 - d2)
    const m = Math.round(dd / lam)
    let frac = dd / lam - m
    if (frac > 0.5) frac -= 1
    if (frac < -0.5) frac += 1
    const kind: 'max' | 'min' | 'mid' =
      Math.abs(frac) <= 0.08 ? 'max' : Math.abs(Math.abs(frac) - 0.5) <= 0.08 ? 'min' : 'mid'
    return { d1, d2, dd, m, frac, kind }
  }, [probe, s1.x, s1.y, s2.x, s2.y, lam])

  const sep = Math.hypot(s2.x - s1.x, s2.y - s1.y)

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Ctl label="λ" value={lam} min={0.4} max={2.4} step={0.05} onChange={props.setLam} aria="Wavelength of the ripples" />
        <Badge tone="plain">drag S₁ / S₂ · click the field to measure Δd</Badge>
        {probe && (
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2"
            onClick={() => props.setProbe(null)}
            aria-label="Clear the path-difference probe"
          >
            <Crosshair className="h-3.5 w-3.5" />
          </Button>
        )}
      </div>

      <div className="mt-3 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${IW} ${IH}`}
          className="w-full cursor-crosshair select-none"
          role="img"
          aria-label="Two-dimensional ripple field from two draggable sources with an intensity screen strip on the right."
        >
          <rect
            x={0}
            y={0}
            width={IW}
            height={IH}
            className="fill-zinc-950/40"
            onClick={(e) => {
              const w = toWorld(e.clientX, e.clientY)
              if (w) props.setProbe(w)
            }}
          />
          <g pointerEvents="none">
            {field.cells}
            {field.strip}
            {rings}
          </g>
          <rect
            x={fxToPx(3.5)}
            y={2}
            width={fxToPx(3.82) - fxToPx(3.5)}
            height={IH - 4}
            fill="none"
            className="stroke-zinc-600"
            strokeWidth={1}
          />
          <text x={fxToPx(3.66)} y={14} textAnchor="middle" fontSize={9} className="fill-zinc-400">
            screen
          </text>

          {probe && probeInfo && (
            <g pointerEvents="none">
              <line x1={fxToPx(probe.x)} y1={fyToPx(probe.y)} x2={fxToPx(s1.x)} y2={fyToPx(s1.y)} className="stroke-teal-300/80" strokeWidth={1} strokeDasharray="3 3" />
              <line x1={fxToPx(probe.x)} y1={fyToPx(probe.y)} x2={fxToPx(s2.x)} y2={fyToPx(s2.y)} className="stroke-amber-300/80" strokeWidth={1} strokeDasharray="3 3" />
              <text
                x={(fxToPx(probe.x) + fxToPx(s1.x)) / 2}
                y={(fyToPx(probe.y) + fyToPx(s1.y)) / 2 - 5}
                fontSize={10}
                className="fill-teal-300 font-mono"
              >
                r₁
              </text>
              <text
                x={(fxToPx(probe.x) + fxToPx(s2.x)) / 2}
                y={(fyToPx(probe.y) + fyToPx(s2.y)) / 2 - 5}
                fontSize={10}
                className="fill-amber-300 font-mono"
              >
                r₂
              </text>
              <circle cx={fxToPx(probe.x)} cy={fyToPx(probe.y)} r={4} className="fill-rose-300" />
              <circle cx={fxToPx(probe.x)} cy={fyToPx(probe.y)} r={9} fill="none" className="stroke-rose-300/60" strokeWidth={1} />
            </g>
          )}

          {srcs.map((s, i) => (
            <g
              key={`src${i}`}
              transform={`translate(${fxToPx(s.p.x)},${fyToPx(s.p.y)})`}
              tabIndex={0}
              role="group"
              aria-label={`Emitter ${i + 1}: drag or use arrow keys to move`}
              className="cursor-grab focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
              onClick={(e) => e.stopPropagation()}
              onPointerDown={(e) => {
                dragIdx.current = i
                e.currentTarget.setPointerCapture(e.pointerId)
              }}
              onPointerMove={(e) => {
                if (dragIdx.current !== i) return
                const w = toWorld(e.clientX, e.clientY)
                if (w) moveSrc(i, w.x, w.y)
              }}
              onPointerUp={() => {
                dragIdx.current = null
              }}
              onKeyDown={(e) => {
                const step = e.shiftKey ? 0.3 : 0.1
                let dx = 0
                let dy = 0
                if (e.key === 'ArrowLeft') dx = -step
                else if (e.key === 'ArrowRight') dx = step
                else if (e.key === 'ArrowUp') dy = step
                else if (e.key === 'ArrowDown') dy = -step
                else return
                e.preventDefault()
                moveSrc(i, (i === 0 ? s1 : s2).x + dx, (i === 0 ? s1 : s2).y + dy)
              }}
            >
              <circle r={17} fill="transparent" />
              <circle r={7} className="fill-zinc-950 stroke-emerald-400" strokeWidth={2.5} />
              <circle r={2.6} className="fill-emerald-400" />
              <text y={-13} textAnchor="middle" fontSize={11} className="fill-zinc-300 font-mono">
                {s.name}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <Chip tex={`d_{\\text{sep}} = ${fmt(sep)} = ${fmt(sep / lam)}\\,\\lambda`} />
        {probeInfo ? (
          <>
            <Chip tex={`\\Delta d = |r_1 - r_2| = ${fmt(probeInfo.dd)} = ${fmt(probeInfo.dd / lam)}\\,\\lambda`} tone="amber" />
            {probeInfo.kind === 'max' && <Chip tex={`\\Delta d = m\\lambda,\\ m = ${probeInfo.m}`} tone="emerald" />}
            {probeInfo.kind === 'min' && <Chip tex={`\\Delta d = (m + \\tfrac{1}{2})\\lambda`} tone="rose" />}
            {probeInfo.kind === 'max' && <Badge tone="emerald">constructive — loud</Badge>}
            {probeInfo.kind === 'min' && <Badge tone="rose">destructive — quiet</Badge>}
            {probeInfo.kind === 'mid' && (
              <Badge tone="amber">off a fringe by {fmt(Math.abs(probeInfo.frac), 2)} λ</Badge>
            )}
          </>
        ) : (
          <Badge tone="plain">click anywhere in the field to read the path difference</Badge>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Double-slit pane (Ch 8: Young's fringes, intensity vs angle)      */
/* ------------------------------------------------------------------ */

function SlitPane(props: { sd: number; slam: number; setSd: (v: number) => void; setSlam: (v: number) => void }) {
  const { sd, slam } = props
  const r = sd / slam
  const thMax = 80
  const xToPx = (deg: number) => PL + ((deg + thMax) / (2 * thMax)) * PW
  const yToPx = (v: number) => PT + (1 - v / 1.08) * PH
  const I = (deg: number) => Math.cos(Math.PI * r * Math.sin((deg * Math.PI) / 180)) ** 2
  const curve = buildPath(I, -thMax, thMax, 700, xToPx, yToPx)

  const orders: number[] = []
  for (let m = 1; m <= Math.floor(r + 1e-9); m++) {
    const s = m / r
    if (s > Math.sin((thMax * Math.PI) / 180)) break
    orders.push((Math.asin(s) * 180) / Math.PI)
  }

  const SW = W
  const SH = 52
  const Ls = 2.2
  const uMax = 3.3
  const strip = useMemo(() => {
    const cols = 150
    const rects: ReactElement[] = []
    for (let j = 0; j <= cols; j++) {
      const u = -uMax + ((2 * uMax) * j) / cols
      const s = u / Math.hypot(u, Ls)
      const Iv = Math.cos(Math.PI * r * s) ** 2
      rects.push(
        <rect
          key={`sc${j}`}
          x={(j / cols) * SW}
          y={0}
          width={SW / cols + 0.7}
          height={SH - 16}
          fill="#34d399"
          opacity={0.05 + 0.92 * Iv}
        />
      )
    }
    return <g shapeRendering="crispEdges">{rects}</g>
  }, [r])

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Ctl label="d" value={sd} min={1} max={10} step={0.1} onChange={props.setSd} aria="Slit separation d" />
        <Ctl label="λ" value={slam} min={0.3} max={2} step={0.05} onChange={props.setSlam} aria="Wavelength" />
        <Badge tone="plain">d is in length units; only the ratio d/λ shapes the fringes</Badge>
      </div>

      <div className="mt-3 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full select-none"
          role="img"
          aria-label="Double-slit intensity versus angle curve with bright-order markers."
        >
          <rect x={PL} y={PT} width={PW} height={PH} rx={6} className="fill-zinc-950/40" />
          {[-80, -40, 0, 40, 80].map((deg) => (
            <g key={`gx${deg}`}>
              <line x1={xToPx(deg)} y1={PT} x2={xToPx(deg)} y2={PT + PH} className="stroke-zinc-500/15" strokeWidth={1} />
              <text x={xToPx(deg)} y={H - PB + 16} textAnchor="middle" fontSize={11} className="fill-zinc-500 font-mono">
                {deg}°
              </text>
            </g>
          ))}
          {[0, 0.5, 1].map((v) => (
            <g key={`gy${v}`}>
              <line x1={PL} y1={yToPx(v)} x2={PL + PW} y2={yToPx(v)} className="stroke-zinc-500/15" strokeWidth={1} />
              <text x={PL - 8} y={yToPx(v) + 3.5} textAnchor="end" fontSize={11} className="fill-zinc-500 font-mono">
                {fmt(v, 1)}
              </text>
            </g>
          ))}

          {orders.map((deg) => (
            <g key={`o${deg}`}>
              <line x1={xToPx(deg)} y1={PT + 4} x2={xToPx(deg)} y2={PT + PH} className="stroke-teal-400/40" strokeWidth={1} strokeDasharray="4 4" />
              <line x1={xToPx(-deg)} y1={PT + 4} x2={xToPx(-deg)} y2={PT + PH} className="stroke-teal-400/40" strokeWidth={1} strokeDasharray="4 4" />
            </g>
          ))}
          {orders[0] !== undefined && orders[0] > 14 && (
            <>
              <text x={xToPx(orders[0])} y={PT + 14} textAnchor="middle" fontSize={10} className="fill-teal-300">m=1</text>
              <text x={xToPx(-orders[0])} y={PT + 14} textAnchor="middle" fontSize={10} className="fill-teal-300">m=−1</text>
            </>
          )}

          <path d={curve} fill="none" className="stroke-emerald-400" strokeWidth={2.4} strokeLinejoin="round" />
          <text x={xToPx(0)} y={yToPx(1) + 14} textAnchor="middle" fontSize={10} className="fill-emerald-300">m=0</text>
          <text x={PL + PW} y={PT + 12} textAnchor="end" fontSize={10} className="fill-zinc-400">I / I₀</text>
          <text x={PL + PW} y={H - 6} textAnchor="end" fontSize={10} className="fill-zinc-400">
            angle θ from the slit normal
          </text>
        </svg>

        <svg viewBox={`0 0 ${SW} ${SH}`} className="mt-1 w-full select-none" role="img" aria-label="Screen preview of the double-slit fringe pattern.">
          {strip}
          <rect x={0} y={0} width={SW} height={SH - 16} fill="none" className="stroke-zinc-600" strokeWidth={1} />
          <text x={SW / 2} y={SH - 4} textAnchor="middle" fontSize={10} className="fill-zinc-400">
            screen at L = 2.2 · position ±3.3 (top view)
          </text>
        </svg>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <Chip tex={`I(\\theta) = I_0\\cos^2\\!\\Big(\\frac{\\pi d\\sin\\theta}{\\lambda}\\Big)`} tone="amber" />
        <Chip tex={`d/\\lambda = ${fmt(r)}`} />
        {r >= 1 ? (
          <Chip tex={`\\theta_1 = ${fmt((Math.asin(Math.min(1, 1 / r)) * 180) / Math.PI, 1)}^{\\circ},\\ m_{\\max} = ${Math.floor(r)}`} tone="teal" />
        ) : (
          <Badge tone="rose">λ ≥ d — no side fringes survive</Badge>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Resonance pane (Ch 8: driven oscillator, Q, phase flip)            */
/* ------------------------------------------------------------------ */

function ResonancePane(props: {
  t: number
  qRes: number
  fdrv: number
  setQRes: (v: number) => void
  setFdrv: (v: number) => void
}) {
  const { t, qRes, fdrv } = props
  const rMin = 0.2
  const rMax = 2
  const amp = (rr: number) => 1 / Math.sqrt((1 - rr * rr) ** 2 + (rr / qRes) ** 2)
  const phi = (rr: number) => Math.atan2(rr / qRes, 1 - rr * rr)
  const yTop = Math.max(qRes * 1.04, 1.5)
  const xToPx = (rr: number) => PL + ((rr - rMin) / (rMax - rMin)) * PW
  const yToPx = (v: number) => PT + (1 - v / yTop) * PH

  const curveA = buildPath(amp, rMin, rMax, 700, xToPx, yToPx)
  const curveP = buildPath((rr) => (phi(rr) / Math.PI) * yTop, rMin, rMax, 700, xToPx, yToPx)

  const aStep = [0.5, 1, 2, 5, 10, 20, 50].find((s) => yTop / s <= 4) ?? 50
  const aTicks: number[] = []
  for (let v = aStep; v <= yTop - 1e-9; v += aStep) aTicks.push(Math.round(v * 100) / 100)

  /* live oscillator: steady state at the drive frequency */
  const OW = 210
  const OH = 150
  const midY = 74
  const wallX = 18
  const massX0 = 122
  const ampFrac = clamp(amp(fdrv) / Math.max(qRes, 1e-9), 0, 1)
  const disp = ampFrac * 42 * Math.sin(TAU * fdrv * 0.9 * t - phi(fdrv))
  const massX = massX0 + disp
  const atRes = Math.abs(fdrv - 1) <= 0.03

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Ctl label="Q" value={qRes} min={0.5} max={30} step={0.5} onChange={props.setQRes} aria="Quality factor Q" />
        <Ctl label="f / f₀" value={fdrv} min={0.2} max={2} step={0.01} onChange={props.setFdrv} aria="Drive frequency relative to the natural frequency" />
        {atRes && <Badge tone="amber">at resonance — amplitude ≈ Q, phase flips here</Badge>}
      </div>

      <div className="mt-3 flex flex-col gap-3 lg:flex-row">
        <div className="min-w-0 flex-1 rounded-xl border border-border bg-background/50 p-2 sm:p-3">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full select-none" role="img" aria-label="Amplitude and phase response of a driven oscillator versus drive frequency.">
            <rect x={PL} y={PT} width={PW} height={PH} rx={6} className="fill-zinc-950/40" />
            {[0.5, 1, 1.5, 2].map((rr) => (
              <g key={`gx${rr}`}>
                <line x1={xToPx(rr)} y1={PT} x2={xToPx(rr)} y2={PT + PH} className="stroke-zinc-500/15" strokeWidth={1} />
                <text x={xToPx(rr)} y={H - PB + 16} textAnchor="middle" fontSize={11} className="fill-zinc-500 font-mono">
                  {fmt(rr, 1)}
                </text>
              </g>
            ))}
            {aTicks.map((v) => (
              <g key={`gy${v}`}>
                <line x1={PL} y1={yToPx(v)} x2={PL + PW} y2={yToPx(v)} className="stroke-zinc-500/15" strokeWidth={1} />
                <text x={PL - 8} y={yToPx(v) + 3.5} textAnchor="end" fontSize={11} className="fill-zinc-500 font-mono">
                  {fmt(v, 1)}
                </text>
              </g>
            ))}
            {/* natural frequency marker */}
            <line x1={xToPx(1)} y1={PT + 4} x2={xToPx(1)} y2={PT + PH} className="stroke-zinc-400/40" strokeWidth={1} strokeDasharray="2 4" />
            <text x={xToPx(1)} y={PT + 12} textAnchor="middle" fontSize={10} className="fill-zinc-400">f₀</text>

            {/* phase right-axis guides */}
            {[0, Math.PI / 2, Math.PI].map((pv) => {
              const yy = yToPx((pv / Math.PI) * yTop)
              return (
                <text key={`ph${pv}`} x={PL + PW + 4} y={yy + 3.5} fontSize={9} className="fill-teal-400">
                  {pv === 0 ? '0°' : pv === Math.PI / 2 ? '90°' : '180°'}
                </text>
              )
            })}

            <path d={curveP} fill="none" className="stroke-teal-400" strokeWidth={1.8} strokeDasharray="6 4" opacity={0.9} />
            <path d={curveA} fill="none" className="stroke-emerald-400" strokeWidth={2.4} strokeLinejoin="round" />

            {/* current drive marker */}
            <line x1={xToPx(fdrv)} y1={PT} x2={xToPx(fdrv)} y2={PT + PH} className="stroke-amber-400/70" strokeWidth={1.4} />
            <circle cx={xToPx(fdrv)} cy={yToPx(amp(fdrv))} r={4.5} className="fill-amber-300" />
            <circle cx={xToPx(fdrv)} cy={yToPx((phi(fdrv) / Math.PI) * yTop)} r={4} className="fill-teal-300" />
            <text x={PL + PW} y={H - 6} textAnchor="end" fontSize={10} className="fill-zinc-400">
              emerald: amplitude · teal dashed: phase lag
            </text>
          </svg>
        </div>

        <div className="shrink-0 rounded-xl border border-border bg-background/50 p-2 sm:p-3 lg:w-[250px]">
          <svg viewBox={`0 0 ${OW} ${OH}`} className="w-full select-none" role="img" aria-label="Driven mass on a spring oscillating at the current drive frequency.">
            <line x1={wallX} y1={midY - 36} x2={wallX} y2={midY + 36} className="stroke-zinc-500" strokeWidth={4} strokeLinecap="round" />
            {[0, 1, 2, 3, 4].map((k) => (
              <line
                key={`h${k}`}
                x1={wallX - 7}
                y1={midY - 30 + k * 15}
                x2={wallX}
                y2={midY - 22 + k * 15}
                className="stroke-zinc-500"
                strokeWidth={1.5}
              />
            ))}
            <line x1={massX0} y1={18} x2={massX0} y2={OH - 18} className="stroke-zinc-500/40" strokeWidth={1} strokeDasharray="3 4" />
            <path d={springPath(wallX + 2, massX - 15, midY)} fill="none" className="stroke-zinc-400" strokeWidth={1.6} />
            <rect
              x={massX - 15}
              y={midY - 15}
              width={30}
              height={30}
              rx={6}
              className={atRes ? 'fill-amber-500/80 stroke-amber-300' : 'fill-emerald-500/70 stroke-emerald-300'}
              strokeWidth={1.5}
            />
            <text x={OW / 2} y={12} textAnchor="middle" fontSize={9} className="fill-zinc-400">
              drive · {fmt(fdrv, 2)} f₀
            </text>
            <text x={OW / 2} y={OH - 6} textAnchor="middle" fontSize={9} className="fill-zinc-400 font-mono tabular-nums">
              lag {fmt((phi(fdrv) * 180) / Math.PI, 0)}°
            </text>
          </svg>
          <div className="mt-1 flex flex-wrap gap-1.5">
            <Chip tex={`A = ${fmt(amp(fdrv), 2)}\\,A_0`} tone="emerald" />
            <Chip tex={`\\phi = ${fmt((phi(fdrv) * 180) / Math.PI, 0)}^{\\circ}`} tone="teal" />
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <Chip tex={`\\frac{A}{A_0} = \\frac{1}{\\sqrt{\\big(1-(f/f_0)^2\\big)^2 + \\big(f/(Q f_0)\\big)^2}}}\\,,\\quad \\tan\\phi = \\frac{f/(Qf_0)}{1-(f/f_0)^2}`} />
        <Badge tone={fdrv < 1 ? 'teal' : fdrv > 1 ? 'rose' : 'amber'}>
          {fdrv < 0.97 ? 'below f₀: mass moves with the force' : fdrv > 1.03 ? 'above f₀: mass moves against it' : 'resonance: 90° behind'}
        </Badge>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Modes + presets                                                    */
/* ------------------------------------------------------------------ */

type WMode = 'super' | 'standing' | 'interference' | 'slit' | 'resonance'

const WMODES: { key: WMode; label: string; Icon: LucideIcon; blurb: string }[] = [
  { key: 'super', label: 'Superposition', Icon: AudioWaveform, blurb: 'Two traveling waves and their sum, traced live on a scope — with automatic beats detection.' },
  { key: 'standing', label: 'Standing wave', Icon: MoveVertical, blurb: 'Reflections on a string: harmonics with node markers, plus the plucked-string Fourier story.' },
  { key: 'interference', label: 'Two sources', Icon: Radio, blurb: 'A 2D ripple field from two draggable emitters; click anywhere to read the path difference.' },
  { key: 'slit', label: 'Double slit', Icon: AudioLines, blurb: 'Young\u2019s fringes: intensity vs angle with a screen preview strip.' },
  { key: 'resonance', label: 'Resonance', Icon: Gauge, blurb: 'A driven oscillator near resonance: the amplitude peak, the phase flip, and the price of Q.' },
]

interface WPreset {
  key: string
  label: string
  note: string
  chip: string
}

const WPRESETS: WPreset[] = [
  {
    key: 'beats440',
    label: 'Beats 440+443',
    note: 'Two tuning forks — A4 at 440 Hz and one three cycles sharp — with the clock slowed 100× so the scope dial reads 4.40 and 4.43. The window is stretched across two full beat cells: the sum swells and fades as the waves slide in and out of step, exactly the three-pulses-per-second throb you hear from two nearly identical strings.',
    chip: 'f_{\\text{beat}} = |f_1 - f_2| = 3\\ \\text{Hz}',
  },
  {
    key: 'stand3',
    label: 'Standing wave n=3',
    note: 'The third harmonic: the string stores three half-wavelengths, so four nodes (counting the clamped ends) pin the motion while three antinodes swing. The teal and amber ghosts are the two traveling waves reflecting endlessly off the fixed ends — their superposition is the frozen standing pattern.',
    chip: '\\lambda_3 = \\frac{2L}{3}',
  },
  {
    key: 'pluck',
    label: 'Plucked string',
    note: 'A guitar string pulled into a triangle at x = 2 and released. Fourier\u2019s claim: the kink is secretly a chord of normal modes (bars below), each swinging at its own harmonic frequency — yet they all re-synchronize every T = 2L/v and the triangle re-forms.',
    chip: 'b_n = \\frac{2hL^2}{\\pi^2 n^2 p(L-p)}\\sin\\frac{n\\pi p}{L}',
  },
  {
    key: 'twoSrc',
    label: 'Two sources d=2λ',
    note: 'Two in-phase emitters separated by two wavelengths. Where crests meet crests the field burns emerald (constructive); where crest meets trough it goes dark. Drag the emitters and the hyperbolic fringes rearrange; click anywhere to measure the path difference that decides it.',
    chip: '\\Delta d = m\\lambda\\ \\text{(bright)},\\quad (m+\\tfrac{1}{2})\\lambda\\ \\text{(dark)}',
  },
  {
    key: 'slit',
    label: 'Double slit',
    note: 'Young\u2019s geometry with d = 4λ: the curve is intensity vs angle, the strip below is what a screen at L = 2.2 would record — the central fringe twice as wide and four times brighter than its neighbors. Count the orders that survive: m ≤ d/λ.',
    chip: 'I = I_0\\cos^2(\\pi d\\sin\\theta/\\lambda)',
  },
]

/* ------------------------------------------------------------------ */
/*  Lab shell                                                          */
/* ------------------------------------------------------------------ */

export default function WaveLab() {
  const reduce = useReducedMotion()
  const [mode, setMode] = useState<WMode>('super')
  const [playing, setPlaying] = useState(false)
  const [t, setT] = useClock(playing)
  const [presetKey, setPresetKey] = useState('')

  /* superposition params */
  const [a1, setA1] = useState(1)
  const [a2, setA2] = useState(1)
  const [f1, setF1] = useState(4.4)
  const [f2, setF2] = useState(5.4)
  const [phDeg, setPhDeg] = useState(0)
  const [dir2, setDir2] = useState<'same' | 'opposite'>('same')
  const [beatsFit, setBeatsFit] = useState(false)

  /* standing wave params */
  const [sub, setSub] = useState<'harmonic' | 'plucked'>('harmonic')
  const [harm, setHarm] = useState(3)
  const [pluckP, setPluckP] = useState(2)

  /* two-source params */
  const [s1, setS1] = useState({ x: -1, y: 0 })
  const [s2, setS2] = useState({ x: 1, y: 0 })
  const [lam, setLam] = useState(1)
  const [probe, setProbe] = useState<{ x: number; y: number } | null>(null)

  /* double slit params */
  const [sd, setSd] = useState(4)
  const [slam, setSlam] = useState(1)

  /* resonance params */
  const [qRes, setQRes] = useState(6)
  const [fdrv, setFdrv] = useState(1)

  const applyPreset = (key: string) => {
    setPresetKey(key)
    setT(0)
    switch (key) {
      case 'beats440':
        setMode('super')
        setA1(1)
        setA2(1)
        setF1(4.4)
        setF2(4.43)
        setPhDeg(0)
        setDir2('same')
        setBeatsFit(true)
        break
      case 'stand3':
        setMode('standing')
        setSub('harmonic')
        setHarm(3)
        break
      case 'pluck':
        setMode('standing')
        setSub('plucked')
        setPluckP(2)
        break
      case 'twoSrc':
        setMode('interference')
        setS1({ x: -1, y: 0 })
        setS2({ x: 1, y: 0 })
        setLam(1)
        setProbe(null)
        break
      case 'slit':
        setMode('slit')
        setSd(4)
        setSlam(1)
        break
    }
  }

  const activePreset = WPRESETS.find((p) => p.key === presetKey) ?? null
  const activeMode = WMODES.find((m) => m.key === mode) ?? WMODES[0]

  return (
    <div className="rounded-2xl border border-border/80 bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Waves className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Waves &amp; Interference Studio</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Physics Ch 6–8: superpose traveling waves, freeze standing harmonics, probe two-source
            interference, and chase Young&apos;s fringes — every readout is the real formula.
          </p>
        </div>
      </div>

      {/* presets */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Presets
        </span>
        {WPRESETS.map((p) => (
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
        {WMODES.map((m) => {
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
        {mode === 'super' && (
          <SuperPane
            t={t}
            a1={a1}
            a2={a2}
            f1={f1}
            f2={f2}
            phDeg={phDeg}
            dir2={dir2}
            beatsFit={beatsFit}
            setA1={setA1}
            setA2={setA2}
            setF1={setF1}
            setF2={setF2}
            setPhDeg={setPhDeg}
            setDir2={setDir2}
            setBeatsFit={setBeatsFit}
          />
        )}
        {mode === 'standing' && (
          <StandingPane t={t} sub={sub} harm={harm} pluckP={pluckP} setSub={setSub} setHarm={setHarm} setPluckP={setPluckP} />
        )}
        {mode === 'interference' && (
          <InterferencePane
            t={t}
            s1={s1}
            s2={s2}
            lam={lam}
            probe={probe}
            setS1={setS1}
            setS2={setS2}
            setLam={setLam}
            setProbe={setProbe}
          />
        )}
        {mode === 'slit' && <SlitPane sd={sd} slam={slam} setSd={setSd} setSlam={setSlam} />}
        {mode === 'resonance' && <ResonancePane t={t} qRes={qRes} fdrv={fdrv} setQRes={setQRes} setFdrv={setFdrv} />}
      </motion.div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          in <span className="font-medium text-foreground">Superposition</span> set f₂ = 5 against f₁ = 4
          for one fat beat per second, then match f₂ = f₁ and flip wave 2&apos;s{' '}
          <span className="font-medium text-foreground">Opposite</span> — the traveling pair freezes
          into a standing wave. In <span className="font-medium text-foreground">Two sources</span>,
          drag S₂ in a slow circle around S₁ and watch the fringes breathe, clicking on the bright
          ridges to catch Δd = mλ. Then in{' '}
          <span className="font-medium text-foreground">Resonance</span> crank Q to 25 and sweep the
          drive through f₀: the response spikes and the mass visibly reverses phase.
        </span>
      </div>
    </div>
  )
}

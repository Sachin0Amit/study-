'use client'

/**
 * Signals Workbench — real DSP, entirely client-side.
 * Generators (3 channels) → mix (add/multiply) → optional direct convolution →
 * optional windowed-sinc FIR → radix-2 Cooley-Tukey FFT (N = 256).
 * Time domain + magnitude spectrum render on devicePixelRatio-aware canvases.
 */

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, AudioWaveform, Sigma, SlidersHorizontal } from 'lucide-react'
import { RING, fmt, mulberry32 } from './types'

/* ------------------------------------------------------------------ */
/*  DSP primitives                                                     */
/* ------------------------------------------------------------------ */

const N = 256 // samples (power of two — required by the radix-2 FFT)
const FS = 1000 // sample rate, Hz

type WaveType = 'sine' | 'square' | 'triangle' | 'saw' | 'noise' | 'chirp'

interface Channel {
  on: boolean
  type: WaveType
  freq: number
  amp: number
  offset: number
}

const CH_COLORS = ['#34d399', '#fbbf24', '#2dd4bf']

function generate(ch: Channel, idx: number): Float64Array {
  const out = new Float64Array(N)
  const rng = mulberry32(1234 + idx * 977)
  const T = N / FS
  for (let i = 0; i < N; i++) {
    const t = i / FS
    let v = 0
    switch (ch.type) {
      case 'sine':
        v = Math.sin(2 * Math.PI * ch.freq * t)
        break
      case 'square':
        v = Math.sin(2 * Math.PI * ch.freq * t) >= 0 ? 1 : -1
        break
      case 'triangle':
        v = (2 / Math.PI) * Math.asin(Math.sin(2 * Math.PI * ch.freq * t))
        break
      case 'saw':
        v = 2 * ((ch.freq * t) % 1) - 1
        break
      case 'noise':
        v = rng() * 2 - 1
        break
      case 'chirp': {
        const f1 = Math.min(ch.freq * 4, 450)
        const k = (f1 - ch.freq) / T
        v = Math.sin(2 * Math.PI * (ch.freq * t + (k * t * t) / 2))
        break
      }
    }
    out[i] = ch.amp * v + ch.offset
  }
  return out
}

/** Direct O(n·k) convolution, 'same' mode via the full result. */
function convolveSame(x: Float64Array<ArrayBuffer>, kernel: number[]): Float64Array<ArrayBuffer> {
  const n = x.length
  const k = kernel.length
  const full = n + k - 1
  const acc = new Float64Array(full)
  for (let i = 0; i < n; i++) {
    if (x[i] === 0) continue
    for (let j = 0; j < k; j++) acc[i + j] += x[i] * kernel[j]
  }
  const start = Math.floor((k - 1) / 2)
  return acc.slice(start, start + n)
}

function sinc(x: number): number {
  return x === 0 ? 1 : Math.sin(Math.PI * x) / (Math.PI * x)
}

function hamming(i: number, m: number): number {
  return 0.54 - 0.46 * Math.cos((2 * Math.PI * i) / m)
}

/** Windowed-sinc low-pass kernel, fc normalized to (0, 0.5]. */
function lowpassKernel(taps: number, fc: number): number[] {
  const M = taps - 1
  const h: number[] = []
  for (let i = 0; i < taps; i++) {
    h.push(2 * fc * sinc(2 * fc * (i - M / 2)) * hamming(i, M))
  }
  const sum = h.reduce((a, b) => a + b, 0)
  return h.map((v) => v / sum)
}

/** High-pass via spectral inversion of the low-pass. */
function highpassKernel(taps: number, fc: number): number[] {
  const lp = lowpassKernel(taps, fc)
  const hp = lp.map((v) => -v)
  hp[MID(taps)] += 1
  return hp
}

function MID(taps: number): number {
  return (taps - 1) >> 1
}

/** Band-pass = high-pass(f1) convolved with low-pass(f2). */
function bandpassKernel(taps: number, f1: number, f2: number): number[] {
  const hp = highpassKernel(taps, f1)
  const lp = lowpassKernel(taps, f2)
  const out = new Array<number>(2 * taps - 1).fill(0)
  for (let i = 0; i < taps; i++) {
    for (let j = 0; j < taps; j++) out[i + j] += hp[i] * lp[j]
  }
  return out
}

/** In-place iterative radix-2 Cooley-Tukey FFT (decimation in time). */
function fft(re: Float64Array, im: Float64Array): void {
  const n = re.length
  if (n < 2 || (n & (n - 1)) !== 0) {
    throw new Error('FFT size must be a power of two')
  }
  // bit-reversal permutation
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1
    for (; j & bit; bit >>= 1) j ^= bit
    j ^= bit
    if (i < j) {
      const tr = re[i]
      re[i] = re[j]
      re[j] = tr
      const ti = im[i]
      im[i] = im[j]
      im[j] = ti
    }
  }
  // butterflies
  for (let len = 2; len <= n; len <<= 1) {
    const ang = (-2 * Math.PI) / len
    const wr = Math.cos(ang)
    const wi = Math.sin(ang)
    for (let i = 0; i < n; i += len) {
      let cr = 1
      let ci = 0
      for (let k = 0; k < len / 2; k++) {
        const ar = re[i + k]
        const ai = im[i + k]
        const br = re[i + k + len / 2] * cr - im[i + k + len / 2] * ci
        const bi = re[i + k + len / 2] * ci + im[i + k + len / 2] * cr
        re[i + k] = ar + br
        im[i + k] = ai + bi
        re[i + k + len / 2] = ar - br
        im[i + k + len / 2] = ai - bi
        const ncr = cr * wr - ci * wi
        ci = cr * wi + ci * wr
        cr = ncr
      }
    }
  }
}

/* ------------------------------------------------------------------ */
/*  State presets                                                      */
/* ------------------------------------------------------------------ */

const DEFAULT_CHANNELS: Channel[] = [
  { on: true, type: 'sine', freq: 50, amp: 1, offset: 0 },
  { on: true, type: 'sine', freq: 120, amp: 0.5, offset: 0 },
  { on: false, type: 'noise', freq: 100, amp: 0.5, offset: 0 },
]

interface ChainState {
  channels: Channel[]
  mixOp: 'add' | 'mul'
  conv: { on: boolean; csv: string }
  fir: { on: boolean; type: 'low' | 'high' | 'band'; lo: number; hi: number; taps: number }
}

const DEFAULT_CHAIN: ChainState = {
  channels: DEFAULT_CHANNELS.map((c) => ({ ...c })),
  mixOp: 'add',
  conv: { on: false, csv: '0.2, 0.2, 0.2, 0.2, 0.2' },
  fir: { on: false, type: 'low', lo: 150, hi: 300, taps: 63 },
}

const PRESETS: { key: string; label: string; hint: string; state: ChainState }[] = [
  {
    key: 'am',
    label: 'AM modulation',
    hint: 'Carrier 200 Hz × envelope (1 + 0.5·sin 2π·20t) — the spectrum grows sidebands at 180 & 220 Hz.',
    state: {
      channels: [
        { on: true, type: 'sine', freq: 200, amp: 1, offset: 0 },
        { on: true, type: 'sine', freq: 20, amp: 0.5, offset: 1 },
        { on: false, type: 'noise', freq: 100, amp: 0.5, offset: 0 },
      ],
      mixOp: 'mul',
      conv: { on: false, csv: '0.2, 0.2, 0.2, 0.2, 0.2' },
      fir: { on: false, type: 'low', lo: 150, hi: 300, taps: 63 },
    },
  },
  {
    key: 'alias',
    label: 'Aliasing demo',
    hint: 'A 600 Hz tone sampled at 1 kHz folds back to 400 Hz — the dominant bin reads 400, not 600. Nyquist is fs/2 = 500 Hz.',
    state: {
      channels: [
        { on: true, type: 'sine', freq: 600, amp: 1, offset: 0 },
        { on: false, type: 'sine', freq: 120, amp: 0.5, offset: 0 },
        { on: false, type: 'noise', freq: 100, amp: 0.5, offset: 0 },
      ],
      mixOp: 'add',
      conv: { on: false, csv: '0.2, 0.2, 0.2, 0.2, 0.2' },
      fir: { on: false, type: 'low', lo: 150, hi: 300, taps: 63 },
    },
  },
  {
    key: 'filter',
    label: 'Filter a noisy sine',
    hint: '50 Hz sine + broadband noise, then a 63-tap windowed-sinc low-pass at 150 Hz scrubs the hiss.',
    state: {
      channels: [
        { on: true, type: 'sine', freq: 50, amp: 1, offset: 0 },
        { on: true, type: 'noise', freq: 100, amp: 0.6, offset: 0 },
        { on: false, type: 'sine', freq: 120, amp: 0.5, offset: 0 },
      ],
      mixOp: 'add',
      conv: { on: false, csv: '0.2, 0.2, 0.2, 0.2, 0.2' },
      fir: { on: true, type: 'low', lo: 150, hi: 300, taps: 63 },
    },
  },
]

/* ------------------------------------------------------------------ */
/*  Canvas helpers                                                     */
/* ------------------------------------------------------------------ */

function useThemeKey(): number {
  const [key, setKey] = useState(0)
  useEffect(() => {
    const obs = new MutationObserver(() => setKey((k) => k + 1))
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style'],
    })
    return () => obs.disconnect()
  }, [])
  return key
}

function SeriesCanvas({
  series,
  spectrum,
  dominantBin,
  height = 176,
}: {
  series?: { data: Float64Array; color: string; width: number; dash?: boolean }[]
  spectrum?: Float64Array
  dominantBin?: number
  height?: number
}) {
  const ref = useRef<HTMLCanvasElement>(null)
  const themeKey = useThemeKey()

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    const w = Math.max(1, rect.width)
    const h = Math.max(1, rect.height)
    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, w, h)

    const cs = getComputedStyle(canvas)
    const grid = cs.borderTopColor || 'rgba(128,128,128,0.25)'
    const zero = cs.color || '#d4d4d8'

    // grid
    ctx.strokeStyle = grid
    ctx.globalAlpha = 0.35
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let g = 1; g < 4; g++) {
      const y = (h * g) / 4
      ctx.moveTo(0, y)
      ctx.lineTo(w, y)
    }
    for (let g = 1; g < 8; g++) {
      const x = (w * g) / 8
      ctx.moveTo(x, 0)
      ctx.lineTo(x, h)
    }
    ctx.stroke()
    ctx.globalAlpha = 1

    if (spectrum) {
      // magnitude spectrum — emerald area + line
      const bins = spectrum.length
      let max = 0
      for (let i = 0; i < bins; i++) max = Math.max(max, spectrum[i])
      if (max <= 0) max = 1
      const bw = w / bins
      ctx.beginPath()
      ctx.moveTo(0, h)
      for (let i = 0; i < bins; i++) {
        const y = h - (spectrum[i] / max) * (h - 14)
        ctx.lineTo(i * bw + bw / 2, y)
      }
      ctx.lineTo(w, h)
      ctx.closePath()
      ctx.fillStyle = 'rgba(52, 211, 153, 0.16)'
      ctx.fill()
      ctx.beginPath()
      for (let i = 0; i < bins; i++) {
        const y = h - (spectrum[i] / max) * (h - 14)
        if (i === 0) ctx.moveTo(i * bw + bw / 2, y)
        else ctx.lineTo(i * bw + bw / 2, y)
      }
      ctx.strokeStyle = '#34d399'
      ctx.lineWidth = 1.6
      ctx.stroke()
      if (dominantBin !== undefined && dominantBin > 0) {
        const x = dominantBin * bw + bw / 2
        ctx.strokeStyle = '#fbbf24'
        ctx.setLineDash([3, 3])
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.stroke()
        ctx.setLineDash([])
        ctx.fillStyle = '#fbbf24'
        ctx.font = '10px var(--font-mono), monospace'
        ctx.textAlign = x > w - 56 ? 'right' : 'left'
        ctx.fillText(`${dominantBin} · bin`, x + (x > w - 56 ? -4 : 4), 11)
      }
      return
    }

    // time domain
    let lo = Infinity
    let hi = -Infinity
    for (const s of series ?? []) {
      for (let i = 0; i < s.data.length; i++) {
        lo = Math.min(lo, s.data[i])
        hi = Math.max(hi, s.data[i])
      }
    }
    if (!Number.isFinite(lo) || !Number.isFinite(hi)) return
    const pad = Math.max((hi - lo) * 0.12, 0.05)
    lo -= pad
    hi += pad
    const yOf = (v: number) => h - ((v - lo) / (hi - lo)) * h

    // zero line
    if (lo < 0 && hi > 0) {
      ctx.strokeStyle = zero
      ctx.globalAlpha = 0.4
      ctx.beginPath()
      ctx.moveTo(0, yOf(0))
      ctx.lineTo(w, yOf(0))
      ctx.stroke()
      ctx.globalAlpha = 1
    }

    for (const s of series ?? []) {
      ctx.beginPath()
      for (let i = 0; i < s.data.length; i++) {
        const x = (i / (s.data.length - 1)) * w
        const y = yOf(s.data[i])
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.strokeStyle = s.color
      ctx.lineWidth = s.width
      if (s.dash) ctx.setLineDash([4, 3])
      ctx.stroke()
      ctx.setLineDash([])
    }
  })

  return (
    <canvas
      ref={ref}
      style={{ height }}
      className="w-full rounded-xl border border-border/70 bg-background/40 text-foreground/70"
      aria-label={spectrum ? 'Magnitude spectrum' : 'Time domain waveform'}
      role="img"
    />
  )
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const WAVE_TYPES: WaveType[] = ['sine', 'square', 'triangle', 'saw', 'noise', 'chirp']

export function SignalsLab() {
  const [chain, setChain] = useState<ChainState>(DEFAULT_CHAIN)
  const [presetHint, setPresetHint] = useState<string | null>(null)

  const analysis = useMemo(() => {
    // 1. generate enabled channels
    const active = chain.channels
      .map((c, i) => ({ c, i }))
      .filter(({ c }) => c.on)
    if (active.length === 0) {
      return null
    }
    const gens = active.map(({ c, i }) => ({ data: generate(c, i), idx: i }))

    // 2. mix
    const mixed = new Float64Array(N)
    if (chain.mixOp === 'add') {
      for (const g of gens) for (let i = 0; i < N; i++) mixed[i] += g.data[i]
    } else {
      mixed.fill(1)
      for (const g of gens) for (let i = 0; i < N; i++) mixed[i] *= g.data[i]
    }

    // 3. convolution stage
    let stage = mixed
    let convKernel: number[] | null = null
    if (chain.conv.on) {
      const k = chain.conv.csv
        .split(/[,\s]+/)
        .map((s) => Number(s))
        .filter((v) => Number.isFinite(v))
        .slice(0, 33)
      if (k.length > 0) {
        convKernel = k
        stage = convolveSame(stage, k)
      }
    }

    // 4. FIR stage
    if (chain.fir.on) {
      const taps = chain.fir.taps
      const norm = (hz: number) => hz / (FS / 2)
      let kernel: number[] | null = null
      if (chain.fir.type === 'low') kernel = lowpassKernel(taps, norm(chain.fir.lo))
      else if (chain.fir.type === 'high') kernel = highpassKernel(taps, norm(chain.fir.lo))
      else if (chain.fir.lo < chain.fir.hi) {
        kernel = bandpassKernel(taps, norm(chain.fir.lo), norm(chain.fir.hi))
      }
      if (kernel) stage = convolveSame(stage, kernel)
    }

    // 5. readouts
    let peak = 0
    let sumSq = 0
    for (let i = 0; i < N; i++) {
      peak = Math.max(peak, Math.abs(stage[i]))
      sumSq += stage[i] * stage[i]
    }
    const rms = Math.sqrt(sumSq / N)

    // 6. FFT (radix-2, N = 256 → always a power of two)
    const re = Float64Array.from(stage)
    const im = new Float64Array(N)
    fft(re, im)
    const bins = N / 2 + 1
    const mag = new Float64Array(bins)
    for (let i = 0; i < bins; i++) mag[i] = Math.hypot(re[i], im[i]) / N
    let domBin = 1
    for (let i = 1; i < bins - 1; i++) {
      if (mag[i] > mag[domBin]) domBin = i
    }

    return { gens, mixed, output: stage, convKernel, peak, rms, mag, domBin, domFreq: (domBin * FS) / N }
  }, [chain])

  const setChannel = (i: number, patch: Partial<Channel>) =>
    setChain((c) => ({
      ...c,
      channels: c.channels.map((ch, j) => (j === i ? { ...ch, ...patch } : ch)),
    }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-5"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-400/25 bg-teal-400/10">
          <AudioWaveform className="h-5 w-5 text-teal-300" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-bold leading-tight">Signals Workbench — real DSP</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            Three generators feed a processing chain: mix, direct convolution, a windowed-sinc FIR,
            then a hand-written radix-2 FFT (N = {N}, fs = {FS} Hz). Everything below is computed
            live from your controls — read the spectrum, not the animation.
          </p>
        </div>
      </div>

      {/* presets */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Presets
        </span>
        {PRESETS.map((p) => (
          <button
            key={p.key}
            onClick={() => {
              setChain({ channels: p.state.channels.map((c) => ({ ...c })), mixOp: p.state.mixOp, conv: { ...p.state.conv }, fir: { ...p.state.fir } })
              setPresetHint(p.hint)
            }}
            className={`rounded-lg border border-border/80 bg-background/60 px-3 py-1.5 text-xs font-semibold text-foreground/90 transition-all hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-200 ${RING}`}
          >
            {p.label}
          </button>
        ))}
      </div>
      {presetHint && (
        <p className="rounded-lg border border-teal-400/25 bg-teal-400/[0.07] px-3.5 py-2.5 text-xs leading-relaxed text-teal-200/90">
          {presetHint}
        </p>
      )}

      {/* channels */}
      <div className="grid gap-3 sm:grid-cols-3">
        {chain.channels.map((ch, i) => (
          <div
            key={i}
            className={`rounded-2xl border p-3.5 transition-colors ${
              ch.on ? 'border-border/80 bg-card' : 'border-border/50 bg-card/50 opacity-60'
            }`}
          >
            <div className="mb-2.5 flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-bold">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: CH_COLORS[i] }} />
                CH{i + 1}
              </span>
              <button
                onClick={() => setChannel(i, { on: !ch.on })}
                aria-pressed={ch.on}
                aria-label={`${ch.on ? 'Mute' : 'Enable'} channel ${i + 1}`}
                className={`rounded-md border px-2 py-1 text-[10px] font-bold uppercase tracking-wider transition-all ${RING} ${
                  ch.on
                    ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200'
                    : 'border-border/70 bg-background/60 text-muted-foreground hover:text-foreground'
                }`}
              >
                {ch.on ? 'on' : 'off'}
              </button>
            </div>
            <div className="space-y-2.5">
              <label className="block">
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Waveform
                </span>
                <select
                  value={ch.type}
                  onChange={(e) => setChannel(i, { type: e.target.value as WaveType })}
                  aria-label={`Channel ${i + 1} waveform`}
                  className="w-full rounded-lg border border-border bg-background px-2 py-1.5 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                >
                  {WAVE_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <div>
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <span>Frequency</span>
                  <span className="font-mono tabular-nums text-foreground/80">{ch.freq} Hz</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={450}
                  value={ch.freq}
                  onChange={(e) => setChannel(i, { freq: Number(e.target.value) })}
                  aria-label={`Channel ${i + 1} frequency in hertz`}
                  className="mt-1 w-full accent-emerald-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <label className="block">
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Amp
                  </span>
                  <input
                    type="number"
                    step={0.1}
                    min={0}
                    max={3}
                    value={ch.amp}
                    onChange={(e) => setChannel(i, { amp: Number(e.target.value) || 0 })}
                    aria-label={`Channel ${i + 1} amplitude`}
                    className="w-full rounded-lg border border-border bg-background px-2 py-1 font-mono text-xs tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Offset
                  </span>
                  <input
                    type="number"
                    step={0.1}
                    min={-3}
                    max={3}
                    value={ch.offset}
                    onChange={(e) => setChannel(i, { offset: Number(e.target.value) || 0 })}
                    aria-label={`Channel ${i + 1} DC offset`}
                    className="w-full rounded-lg border border-border bg-background px-2 py-1 font-mono text-xs tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* mix + stages */}
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="rounded-2xl border border-border/80 bg-card p-3.5">
          <div className="mb-2 flex items-center gap-2 text-sm font-bold">
            <SlidersHorizontal className="h-4 w-4 text-amber-300" aria-hidden="true" /> Mix
          </div>
          <div className="grid grid-cols-2 gap-1.5" role="group" aria-label="Mix operation">
            {(['add', 'mul'] as const).map((op) => (
              <button
                key={op}
                onClick={() => setChain((c) => ({ ...c, mixOp: op }))}
                aria-pressed={chain.mixOp === op}
                className={`rounded-lg border px-2 py-1.5 text-xs font-semibold transition-all ${RING} ${
                  chain.mixOp === op
                    ? 'border-amber-400/50 bg-amber-400/15 text-amber-200'
                    : 'border-border/80 bg-background/60 text-muted-foreground hover:border-amber-400/30 hover:text-foreground'
                }`}
              >
                {op === 'add' ? 'c₁ + c₂ …' : 'c₁ × c₂ …'}
              </button>
            ))}
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
            {chain.mixOp === 'add'
              ? 'Superposition — enabled channels sum sample-by-sample.'
              : 'Ring modulation / AM — enabled channels multiply sample-by-sample.'}
          </p>
        </div>

        <div className="rounded-2xl border border-border/80 bg-card p-3.5">
          <div className="mb-2 flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-bold">
              <Sigma className="h-4 w-4 text-emerald-300" aria-hidden="true" /> Convolve
            </span>
            <button
              onClick={() => setChain((c) => ({ ...c, conv: { ...c.conv, on: !c.conv.on } }))}
              aria-pressed={chain.conv.on}
              aria-label="Toggle convolution stage"
              className={`rounded-md border px-2 py-1 text-[10px] font-bold uppercase tracking-wider transition-all ${RING} ${
                chain.conv.on
                  ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200'
                  : 'border-border/70 bg-background/60 text-muted-foreground hover:text-foreground'
              }`}
            >
              {chain.conv.on ? 'on' : 'off'}
            </button>
          </div>
          <input
            value={chain.conv.csv}
            onChange={(e) => setChain((c) => ({ ...c, conv: { ...c.conv, csv: e.target.value } }))}
            disabled={!chain.conv.on}
            aria-label="Convolution kernel, comma separated"
            placeholder="0.2, 0.2, 0.2, 0.2, 0.2"
            className="w-full rounded-lg border border-border bg-background px-2 py-1.5 font-mono text-xs tabular-nums placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 disabled:cursor-not-allowed disabled:opacity-40"
          />
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
            Direct O(n·k) kernel (max 33 taps). Try{' '}
            <span className="font-mono">1, -1</span> for an edge detector or five 0.2s for smoothing.
            {analysis?.convKernel && (
              <span className="ml-1 font-mono text-emerald-300/80">
                active: k = {analysis.convKernel.length}
              </span>
            )}
          </p>
        </div>

        <div className="rounded-2xl border border-border/80 bg-card p-3.5">
          <div className="mb-2 flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-bold">
              <Activity className="h-4 w-4 text-teal-300" aria-hidden="true" /> FIR filter
            </span>
            <button
              onClick={() => setChain((c) => ({ ...c, fir: { ...c.fir, on: !c.fir.on } }))}
              aria-pressed={chain.fir.on}
              aria-label="Toggle FIR stage"
              className={`rounded-md border px-2 py-1 text-[10px] font-bold uppercase tracking-wider transition-all ${RING} ${
                chain.fir.on
                  ? 'border-teal-400/40 bg-teal-400/10 text-teal-200'
                  : 'border-border/70 bg-background/60 text-muted-foreground hover:text-foreground'
              }`}
            >
              {chain.fir.on ? 'on' : 'off'}
            </button>
          </div>
          <div className={chain.fir.on ? 'space-y-2' : 'space-y-2 opacity-40'}>
            <div className="grid grid-cols-3 gap-1.5" role="group" aria-label="FIR filter type">
              {(['low', 'high', 'band'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setChain((c) => ({ ...c, fir: { ...c.fir, type: t } }))}
                  disabled={!chain.fir.on}
                  aria-pressed={chain.fir.type === t}
                  className={`rounded-lg border px-1 py-1 text-[11px] font-semibold transition-all ${RING} ${
                    chain.fir.type === t
                      ? 'border-teal-400/50 bg-teal-400/15 text-teal-200'
                      : 'border-border/80 bg-background/60 text-muted-foreground hover:border-teal-400/30 hover:text-foreground'
                  }`}
                >
                  {t === 'low' ? 'LP' : t === 'high' ? 'HP' : 'BP'}
                </button>
              ))}
            </div>
            <div>
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                <span>{chain.fir.type === 'band' ? 'Low cut' : 'Cutoff'}</span>
                <span className="font-mono tabular-nums text-foreground/80">{chain.fir.lo} Hz</span>
              </div>
              <input
                type="range"
                min={10}
                max={chain.fir.type === 'band' ? 240 : 490}
                value={chain.fir.lo}
                disabled={!chain.fir.on}
                onChange={(e) =>
                  setChain((c) => ({
                    ...c,
                    fir: { ...c.fir, lo: Math.min(Number(e.target.value), c.fir.hi - 10) },
                  }))
                }
                aria-label="Low cutoff in hertz"
                className="mt-1 w-full accent-teal-400 disabled:cursor-not-allowed"
              />
            </div>
            {chain.fir.type === 'band' && (
              <div>
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <span>High cut</span>
                  <span className="font-mono tabular-nums text-foreground/80">{chain.fir.hi} Hz</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={490}
                  value={chain.fir.hi}
                  disabled={!chain.fir.on}
                  onChange={(e) =>
                    setChain((c) => ({
                      ...c,
                      fir: { ...c.fir, hi: Math.max(Number(e.target.value), c.fir.lo + 10) },
                    }))
                  }
                  aria-label="High cutoff in hertz"
                  className="mt-1 w-full accent-teal-400 disabled:cursor-not-allowed"
                />
              </div>
            )}
            <div>
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Taps (windowed sinc)</span>
                <span className="font-mono tabular-nums text-foreground/80">{chain.fir.taps}</span>
              </div>
              <input
                type="range"
                min={11}
                max={121}
                step={2}
                value={chain.fir.taps}
                disabled={!chain.fir.on}
                onChange={(e) => setChain((c) => ({ ...c, fir: { ...c.fir, taps: Number(e.target.value) } }))}
                aria-label="FIR tap count"
                className="mt-1 w-full accent-teal-400 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </div>

      {/* scopes */}
      {analysis ? (
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/80 bg-card p-4">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-sm font-bold">Time domain</span>
              <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                0 … {(N / FS) * 1000} ms
              </span>
            </div>
            <SeriesCanvas
              series={[
                ...analysis.gens.map((g) => ({
                  data: g.data,
                  color: CH_COLORS[g.idx],
                  width: 1,
                  dash: true,
                })),
                { data: analysis.output, color: '#34d399', width: 2 },
              ]}
            />
            <p className="mt-2 text-[10px] text-muted-foreground">
              Dashed = raw channels, solid emerald = signal after the full chain.
            </p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-card p-4">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-sm font-bold">Magnitude spectrum (FFT, {N} pt)</span>
              <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                Δf = {fmt(FS / N, 1)} Hz/bin
              </span>
            </div>
            <SeriesCanvas spectrum={analysis.mag} dominantBin={analysis.domBin} />
            <p className="mt-2 text-[10px] text-muted-foreground">
              Bins 0 … {N / 2} cover DC … {FS / 2} Hz (Nyquist).
            </p>
          </div>
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-border/70 bg-background/40 px-4 py-6 text-center text-sm text-muted-foreground">
          All channels are muted — enable at least one CH above to see the scopes.
        </p>
      )}

      {/* readouts */}
      {analysis && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Peak', value: fmt(analysis.peak), unit: '' },
            { label: 'RMS', value: fmt(analysis.rms), unit: '' },
            { label: 'Dominant bin', value: String(analysis.domBin), unit: '' },
            { label: 'Dominant freq', value: fmt(analysis.domFreq, 0), unit: 'Hz' },
          ].map((r) => (
            <div
              key={r.label}
              className="rounded-xl border border-border/80 bg-card px-3.5 py-2.5"
            >
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {r.label}
              </div>
              <div className="mt-0.5 font-mono text-lg font-bold tabular-nums text-emerald-300">
                {r.value}
                {r.unit && <span className="ml-1 text-xs text-muted-foreground">{r.unit}</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default SignalsLab

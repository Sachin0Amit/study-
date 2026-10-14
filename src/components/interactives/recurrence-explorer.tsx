'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { LineChart, Lightbulb, TrendingUp, Sigma, Zap, Table2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ------------------------------------------------------------------ */
/* types + helpers                                                     */
/* ------------------------------------------------------------------ */

interface Coeffs {
  c1: number
  c2: number
  a0: number
  a1: number
}

const N_TERMS = 24
const CHART_TERMS = 20

function computeTerms(c: Coeffs, n: number): number[] {
  const out: number[] = [c.a0, c.a1]
  for (let i = 2; i < n; i++) out.push(c.c1 * out[i - 1] + c.c2 * out[i - 2])
  return out
}

/** pretty-print a number for the table / labels */
function fmt(x: number): string {
  if (!isFinite(x)) return '∞'
  if (x === 0) return '0'
  const ax = Math.abs(x)
  if (ax >= 1e12) return x.toExponential(4).replace('e+', '×10^')
  if (ax < 1e-6) return x.toExponential(2)
  if (Number.isInteger(x)) return x.toLocaleString('en-US')
  return String(Math.round(x * 1e6) / 1e6)
}

function fmtRatio(x: number): string {
  if (!isFinite(x)) return '—'
  if (Math.abs(x) >= 1e6) return x.toExponential(2)
  return x.toFixed(4).replace(/\.?0+$/, '')
}

const PRESETS: { name: string; desc: string; coeffs: Coeffs }[] = [
  { name: 'Fibonacci', desc: 'aₙ = aₙ₋₁ + aₙ₋₂ · 0, 1, 1, 2, 3, 5…', coeffs: { c1: 1, c2: 1, a0: 0, a1: 1 } },
  { name: 'Powers of 2', desc: 'aₙ = 2aₙ₋₁ · 1, 2, 4, 8, 16…', coeffs: { c1: 2, c2: 0, a0: 1, a1: 2 } },
  { name: 'Jacobsthal', desc: 'Tribonacci-flavoured · 0, 1, 1, 3, 5, 11…', coeffs: { c1: 1, c2: 2, a0: 0, a1: 1 } },
  { name: 'Arithmetic', desc: 'aₙ = 2aₙ₋₁ − aₙ₋₂ · 0, 1, 2, 3, 4…', coeffs: { c1: 2, c2: -1, a0: 0, a1: 1 } },
]

/* ------------------------------------------------------------------ */
/* closed-form analysis                                                */
/* ------------------------------------------------------------------ */

interface ClosedForm {
  title: string
  lines: string[]
  note?: string
}

function closedForm(c: Coeffs): ClosedForm {
  const isFib = c.c1 === 1 && c.c2 === 1 && c.a0 === 0 && c.a1 === 1
  if (isFib) {
    return {
      title: "Binet's formula",
      lines: [
        'r² − r − 1 = 0  →  r₁ = φ = (1+√5)/2 ≈ 1.6180',
        'r₂ = ψ = (1−√5)/2 ≈ −0.6180',
        'aₙ = (φⁿ − ψⁿ) / √5',
      ],
      note: 'The most famous closed form in discrete math — derived by solving the characteristic equation and matching a₀ = 0, a₁ = 1.',
    }
  }
  if (c.c2 === 0) {
    const lines = ['aₙ = a₁ · ' + fmt(c.c1) + 'ⁿ⁻¹    (n ≥ 1)']
    if (c.a1 === c.c1 * c.a0 && c.a0 !== 0) lines.push('since a₁ = c₁a₀:  aₙ = a₀ · ' + fmt(c.c1) + 'ⁿ')
    if (c.c1 === 0) lines.push('c₁ = 0 → every term from a₁ onward collapses to 0.')
    if (c.c1 === 1) lines.push('c₁ = 1 → constant sequence from a₁ on.')
    if (c.c1 === -1) lines.push('c₁ = −1 → alternates: a₁, −a₁, a₁, …')
    return {
      title: 'Geometric closed form (c₂ = 0)',
      lines,
      note: 'Degree drops to 1: the recurrence only looks back one step, so the sequence is purely geometric with ratio c₁ = ' + fmt(c.c1) + '.',
    }
  }
  const disc = c.c1 * c.c1 + 4 * c.c2
  if (disc > 0) {
    const s = Math.sqrt(disc)
    const r1 = (c.c1 + s) / 2
    const r2 = (c.c1 - s) / 2
    const alpha = (c.a1 - c.a0 * r2) / (r1 - r2)
    const beta = c.a0 - alpha
    return {
      title: 'Distinct real roots',
      lines: [
        'r² − ' + fmt(c.c1) + 'r − ' + fmt(c.c2) + ' = 0',
        'r₁ = ' + fmt(Math.round(r1 * 1e6) / 1e6) + '   r₂ = ' + fmt(Math.round(r2 * 1e6) / 1e6),
        'aₙ = α·r₁ⁿ + β·r₂ⁿ  with',
        'α = ' + fmt(Math.round(alpha * 1e6) / 1e6) + '   β = ' + fmt(Math.round(beta * 1e6) / 1e6),
      ],
      note: 'Solve α + β = a₀ and αr₁ + βr₂ = a₁, then aₙ = αr₁ⁿ + βr₂ⁿ holds for every n. Growth is driven by the dominant root |r| = ' + fmt(Math.round(Math.max(Math.abs(r1), Math.abs(r2)) * 1e6) / 1e6) + '.',
    }
  }
  if (disc === 0) {
    const r = c.c1 / 2
    if (r === 0) {
      return { title: 'Degenerate case', lines: ['r = 0 repeated — the sequence is forced to 0 from a₂ onward.'], note: 'With c₁ = c₂ = 0, aₙ = 0 for all n ≥ 2.' }
    }
    const beta = c.a1 / r - c.a0
    return {
      title: 'Repeated root',
      lines: ['r = c₁/2 = ' + fmt(r) + ' (double root)', 'aₙ = (α + βn)·rⁿ', 'α = ' + fmt(c.a0) + '   β = ' + fmt(Math.round(beta * 1e6) / 1e6)],
      note: 'When the characteristic equation has a double root, the general solution gains the extra n factor.',
    }
  }
  return {
    title: 'Complex conjugate roots',
    lines: [
      'r² − ' + fmt(c.c1) + 'r − ' + fmt(c.c2) + ' = 0 has discriminant ' + fmt(disc) + ' < 0',
      'r = ' + fmt(c.c1 / 2) + ' ± i·' + fmt(Math.round(Math.sqrt(-disc) / 2 * 1e6) / 1e6),
      'aₙ oscillates — write roots in polar form R·(cos nθ + i sin nθ)',
    ],
    note: 'Negative discriminant means the two roots are complex conjugates: the sequence combines oscillation (from the angle) with growth/decay (from the modulus).',
  }
}

/* ------------------------------------------------------------------ */
/* growth classification                                               */
/* ------------------------------------------------------------------ */

interface Growth {
  label: string
  tone: 'emerald' | 'amber' | 'rose' | 'zinc'
  detail: string
}

function classify(terms: number[], c: Coeffs): Growth {
  const n = terms.length
  const last = terms[n - 1]
  const allZero = terms.every((t) => t === 0)
  if (allZero) return { label: 'Zero sequence', tone: 'zinc', detail: 'Every term is 0 — try changing the initial values.' }

  // ratio of late terms
  let ratio = NaN
  for (let i = n - 1; i >= 2; i--) {
    if (terms[i - 1] !== 0 && isFinite(terms[i] / terms[i - 1])) {
      ratio = terms[i] / terms[i - 1]
      break
    }
  }
  const big = Math.abs(last) > 1e9
  const alternating = terms.slice(1).every((t, i) => Math.sign(t) !== Math.sign(terms[i]) && t !== 0 && terms[i] !== 0)

  if (isFinite(ratio) && Math.abs(ratio) > 1.02) {
    if (alternating)
      return { label: 'Exponential · alternating', tone: 'rose', detail: 'Magnitude grows geometrically (ratio → ' + fmtRatio(Math.abs(ratio)) + ') while the sign flips every step.' }
    return { label: 'Exponential', tone: 'emerald', detail: 'Ratios aₙ/aₙ₋₁ converge to ' + fmtRatio(ratio) + ' — like Θ(' + fmt(Math.round(Math.abs(ratio) * 100) / 100) + 'ⁿ).' }
  }
  if (isFinite(ratio) && Math.abs(ratio) < 0.98) {
    return { label: 'Decays to 0', tone: 'zinc', detail: 'Ratios converge to ' + fmtRatio(ratio) + ', so terms shrink geometrically toward 0.' }
  }
  if (big) return { label: 'Exponential', tone: 'emerald', detail: 'Terms explode past a billion — classic exponential growth.' }

  // near-constant ratio ≈ 1 → check finite differences
  const d: number[] = []
  for (let i = 1; i < n; i++) d.push(terms[i] - terms[i - 1])
  const dConst = d.length > 2 && d.every((x) => Math.abs(x - d[0]) < 1e-9)
  if (dConst && d[0] === 0) return { label: 'Constant', tone: 'zinc', detail: 'All terms are equal.' }
  if (dConst)
    return {
      label: 'Linear',
      tone: 'amber',
      detail: 'First differences are constant (' + fmt(d[0]) + ') — an arithmetic sequence, aₙ = Θ(n). This is what aₙ = 2aₙ₋₁ − aₙ₋₂ produces.',
    }
  const d2: number[] = []
  for (let i = 1; i < d.length; i++) d2.push(d[i] - d[i - 1])
  const d2Const = d2.length > 2 && d2.every((x) => Math.abs(x - d2[0]) < 1e-9)
  if (d2Const && d2[0] !== 0) return { label: 'Quadratic', tone: 'amber', detail: 'Second differences are constant (' + fmt(d2[0]) + ') — polynomial growth, aₙ = Θ(n²).' }
  if (d2.every((x) => Math.abs(x) < 1e-9)) return { label: 'Linear', tone: 'amber', detail: 'First differences settle to a constant — Θ(n).' }
  if (c.c2 !== 0) {
    const disc = c.c1 * c.c1 + 4 * c.c2
    if (disc < 0) return { label: 'Oscillating', tone: 'rose', detail: 'Complex roots make the terms swing while settling — bounded oscillation.' }
  }
  if (Math.abs(last - terms[n - 2]) < 1e-9) return { label: 'Converging', tone: 'zinc', detail: 'Successive terms become equal — the sequence converges.' }
  return { label: 'Sub-exponential', tone: 'amber', detail: 'Grows, but ratios approach 1 — polynomial or bounded growth.' }
}

const TONES: Record<Growth['tone'], string> = {
  emerald: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
  amber: 'border-amber-500/40 bg-amber-500/10 text-amber-400',
  rose: 'border-rose-500/40 bg-rose-500/10 text-rose-400',
  zinc: 'border-zinc-500/40 bg-zinc-500/10 text-zinc-400',
}

/* ------------------------------------------------------------------ */
/* number field                                                        */
/* ------------------------------------------------------------------ */

function NumField({ label, value, onChange, accent }: { label: string; value: number; onChange: (v: number) => void; accent?: boolean }) {
  return (
    <label className="flex flex-col gap-1">
      <span className={'font-mono text-[11px] ' + (accent ? 'text-amber-400' : 'text-muted-foreground')}>{label}</span>
      <input
        type="number"
        value={value}
        step={1}
        onChange={(e) => {
          const v = parseInt(e.target.value, 10)
          onChange(isNaN(v) ? 0 : Math.max(-99, Math.min(99, v)))
        }}
        className="h-9 w-16 rounded-md border border-border bg-muted/40 px-2 text-center font-mono text-sm text-foreground outline-none transition focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
      />
    </label>
  )
}

/* ------------------------------------------------------------------ */
/* main component                                                      */
/* ------------------------------------------------------------------ */

export default function RecurrenceExplorer() {
  const [c1, setC1] = useState(1)
  const [c2, setC2] = useState(1)
  const [a0, setA0] = useState(0)
  const [a1, setA1] = useState(1)
  const [scale, setScale] = useState<'linear' | 'log'>('linear')
  const [activePreset, setActivePreset] = useState('Fibonacci')

  const coeffs: Coeffs = useMemo(() => ({ c1, c2, a0, a1 }), [c1, c2, a0, a1])
  const terms = useMemo(() => computeTerms(coeffs, N_TERMS), [coeffs])
  const chartTerms = terms.slice(0, CHART_TERMS)
  const form = useMemo(() => closedForm(coeffs), [coeffs])
  const growth = useMemo(() => classify(terms, coeffs), [terms, coeffs])

  const setAll = (name: string) => {
    const p = PRESETS.find((x) => x.name === name)
    if (!p) return
    setActivePreset(name)
    setC1(p.coeffs.c1)
    setC2(p.coeffs.c2)
    setA0(p.coeffs.a0)
    setA1(p.coeffs.a1)
  }

  /* ---- chart geometry ---- */
  const W = 640
  const H = 280
  const PL = 58
  const PR = 18
  const PT = 18
  const PB = 36

  const { path, points, yTicks } = useMemo(() => {
    const n = chartTerms.length
    const plotW = W - PL - PR
    const plotH = H - PT - PB
    const logAbs = chartTerms.map((v) => Math.log10(Math.abs(v) + 1))
    const vals = scale === 'log' ? logAbs : chartTerms
    let lo = Math.min(...vals, 0)
    let hi = Math.max(...vals, 1)
    if (lo === hi) {
      hi = lo + 1
    }
    const pad = (hi - lo) * 0.08
    lo -= pad
    hi += pad
    const xAt = (i: number) => PL + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW)
    const yAt = (v: number) => PT + plotH - ((v - lo) / (hi - lo)) * plotH
    const pts = vals.map((v, i) => ({ x: xAt(i), y: yAt(v), raw: chartTerms[i], neg: chartTerms[i] < 0 }))
    const d = pts.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(' ')
    const ticks: { y: number; label: string }[] = []
    for (let k = 0; k <= 4; k++) {
      const v = lo + ((hi - lo) * k) / 4
      ticks.push({ y: yAt(v), label: scale === 'log' ? '1e' + Math.round(v) : v >= 1e6 || v <= -1e6 ? v.toExponential(0) : String(Math.round(v * 100) / 100) })
    }
    return { path: d, points: pts, yTicks: ticks }
  }, [chartTerms, scale])

  return (
    <div className="flex flex-col gap-4">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <LineChart className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Recurrence Explorer</h3>
            <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
              Define a second-order linear recurrence and watch its growth, closed form and ratios unfold in real time.
            </p>
          </div>
        </div>
        <div className={'shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ' + TONES[growth.tone]}>
          <TrendingUp className="mr-1 inline h-3.5 w-3.5" />
          {growth.label}
        </div>
      </div>

      {/* presets */}
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <Button
            key={p.name}
            size="sm"
            variant={activePreset === p.name ? 'default' : 'outline'}
            className={activePreset === p.name ? 'bg-emerald-600 hover:bg-emerald-500' : ''}
            onClick={() => setAll(p.name)}
          >
            {p.name}
          </Button>
        ))}
        <span className="hidden items-center text-xs text-muted-foreground sm:flex">{PRESETS.find((p) => p.name === activePreset)?.desc}</span>
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        {/* left: equation + chart + table */}
        <div className="flex flex-col gap-4 lg:col-span-3">
          {/* equation editor */}
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recurrence</span>
              <div className="flex overflow-hidden rounded-md border border-border">
                {(['linear', 'log'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setScale(s)}
                    className={'px-3 py-1 font-mono text-[11px] transition ' + (scale === s ? 'bg-emerald-600 text-white' : 'bg-muted/40 text-muted-foreground hover:text-foreground')}
                  >
                    {s === 'log' ? 'log |aₙ|' : 'linear'}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-end gap-3">
              <span className="pb-2 font-mono text-lg text-foreground">aₙ =</span>
              <NumField label="c₁" value={c1} onChange={(v) => { setC1(v); setActivePreset('') }} accent />
              <span className="pb-2 font-mono text-lg text-foreground">· aₙ₋₁ +</span>
              <NumField label="c₂" value={c2} onChange={(v) => { setC2(v); setActivePreset('') }} accent />
              <span className="pb-2 font-mono text-lg text-foreground">· aₙ₋₂</span>
              <span className="mx-1 hidden h-9 w-px bg-border sm:block" />
              <NumField label="a₀" value={a0} onChange={(v) => { setA0(v); setActivePreset('') }} />
              <NumField label="a₁" value={a1} onChange={(v) => { setA1(v); setActivePreset('') }} />
            </div>
          </div>

          {/* chart */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <Zap className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">First {CHART_TERMS} terms</span>
            </div>
            <div className="p-2">
              <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="sequence chart">
                {yTicks.map((t, i) => (
                  <g key={i}>
                    <line x1={PL} x2={W - PR} y1={t.y} y2={t.y} stroke="currentColor" className="text-zinc-800" strokeWidth={1} strokeDasharray={i === 0 ? '' : '3 4'} />
                    <text x={PL - 8} y={t.y + 3.5} textAnchor="end" className="fill-zinc-500 font-mono" fontSize={10}>
                      {t.label}
                    </text>
                  </g>
                ))}
                {[0, 5, 10, 15, 19].map((i) => (
                  <text key={i} x={points[Math.min(i, points.length - 1)].x} y={H - 12} textAnchor="middle" className="fill-zinc-500 font-mono" fontSize={10}>
                    {Math.min(i, points.length - 1)}
                  </text>
                ))}
                <text x={PL - 40} y={H - 12} className="fill-zinc-600 font-mono" fontSize={10}>
                  n
                </text>
                <motion.path
                  d={path}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0.4 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                />
                {points.map((p, i) => (
                  <g key={i}>
                    <motion.circle
                      cx={p.x}
                      cy={p.y}
                      r={i === points.length - 1 ? 5 : 3}
                      fill={p.neg ? '#09090b' : '#10b981'}
                      stroke={p.neg ? '#f43f5e' : '#10b981'}
                      strokeWidth={1.5}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.02 * i, type: 'spring', stiffness: 400, damping: 20 }}
                    />
                    {i === points.length - 1 && (
                      <text x={Math.min(p.x, W - 90)} y={p.y - 10} textAnchor="end" className="fill-amber-400 font-mono" fontSize={11}>
                        {fmt(p.raw)}
                      </text>
                    )}
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* table */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <Table2 className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Term table</span>
            </div>
            <div className="max-h-64 overflow-auto">
              <table className="w-full font-mono text-xs">
                <thead className="sticky top-0 bg-muted/80 backdrop-blur">
                  <tr className="text-left text-muted-foreground">
                    <th className="px-4 py-2 font-medium">n</th>
                    <th className="px-4 py-2 font-medium">aₙ</th>
                    <th className="px-4 py-2 font-medium">aₙ / aₙ₋₁</th>
                  </tr>
                </thead>
                <tbody>
                  {terms.map((t, i) => (
                    <tr key={i} className={'border-t border-border/50 ' + (i === terms.length - 1 ? 'bg-emerald-500/5' : '')}>
                      <td className="px-4 py-1.5 text-muted-foreground">{i}</td>
                      <td className="px-4 py-1.5 text-foreground">{fmt(t)}</td>
                      <td className="px-4 py-1.5 text-emerald-400/90">{i === 0 || terms[i - 1] === 0 ? '—' : fmtRatio(t / terms[i - 1])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* right: analysis */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="rounded-xl border border-emerald-500/20 bg-card p-4">
            <div className="mb-3 flex items-center gap-2">
              <Sigma className="h-4 w-4 text-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{form.title}</span>
            </div>
            <div className="space-y-2">
              {form.lines.map((l, i) => (
                <div key={i} className="rounded-md bg-muted/50 px-3 py-2 font-mono text-sm text-foreground">
                  {l}
                </div>
              ))}
            </div>
            {form.note && <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{form.note}</p>}
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Growth analysis</span>
            <div className="mt-3">
              <Badge variant="outline" className={'border px-3 py-1 text-sm font-semibold ' + TONES[growth.tone]}>
                {growth.label}
              </Badge>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{growth.detail}</p>
            <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-xs">
              <div className="rounded-md bg-muted/50 p-2">
                <div className="text-[10px] uppercase text-muted-foreground">a₂₃</div>
                <div className="mt-0.5 truncate text-foreground" title={String(terms[terms.length - 1])}>
                  {fmt(terms[terms.length - 1])}
                </div>
              </div>
              <div className="rounded-md bg-muted/50 p-2">
                <div className="text-[10px] uppercase text-muted-foreground">Δ (last step)</div>
                <div className="mt-0.5 truncate text-foreground">{fmt(terms[terms.length - 1] - terms[terms.length - 2])}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* try this */}
      <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> switch to <span className="font-mono">log |aₙ|</span> scale with Fibonacci — the curve becomes a straight
          line whose slope is log₁₀(φ). Then set c₂ = 0 and watch the closed form collapse to a single geometric formula.
        </p>
      </div>
    </div>
  )
}

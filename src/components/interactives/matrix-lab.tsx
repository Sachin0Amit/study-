'use client'

/**
 * MatrixLab — determinant, inverse, rank, eigenvalues, matrix product and
 * (for 2×2) the linear-transformation picture: watch the plane deform from
 * the identity to M. Built for the linear-algebra shelf: Matrices &
 * Determinants, Schaum Labs I–IV (vectors, linear systems, eigenvalues,
 * canonical forms).
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Grid3x3, Infinity as InfinityIcon, Layers, Play, RotateCcw, Sigma } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Linear algebra kernel                                              */
/* ------------------------------------------------------------------ */

type M2 = number[][]
type Size = 2 | 3

const TOL = 1e-9

function det(m: M2): number {
  const n = m.length
  const a = m.map((r) => [...r])
  let d = 1
  for (let col = 0; col < n; col++) {
    let piv = col
    for (let r = col + 1; r < n; r++) if (Math.abs(a[r][col]) > Math.abs(a[piv][col])) piv = r
    if (Math.abs(a[piv][col]) < TOL) return 0
    if (piv !== col) {
      ;[a[piv], a[col]] = [a[col], a[piv]]
      d = -d
    }
    d *= a[col][col]
    for (let r = col + 1; r < n; r++) {
      const f = a[r][col] / a[col][col]
      for (let c = col; c < n; c++) a[r][c] -= f * a[col][c]
    }
  }
  return d
}

function trace(m: M2): number {
  return m.reduce((s, r, i) => s + r[i], 0)
}

function transpose(m: M2): M2 {
  return m[0].map((_, j) => m.map((r) => r[j]))
}

function multiply(a: M2, b: M2): M2 {
  return a.map((row) => b[0].map((_, j) => row.reduce((s, v, k) => s + v * b[k][j], 0)))
}

function rref(m: M2): { m: M2; rank: number } {
  const a = m.map((r) => [...r])
  const rows = a.length
  const cols = a[0].length
  let rank = 0
  for (let col = 0; col < cols && rank < rows; col++) {
    let piv = rank
    for (let r = rank + 1; r < rows; r++) if (Math.abs(a[r][col]) > Math.abs(a[piv][col])) piv = r
    if (Math.abs(a[piv][col]) < TOL) continue
    ;[a[piv], a[rank]] = [a[rank], a[piv]]
    const head = a[rank][col]
    for (let c = 0; c < cols; c++) a[rank][c] /= head
    for (let r = 0; r < rows; r++) {
      if (r === rank) continue
      const f = a[r][col]
      if (Math.abs(f) < TOL) continue
      for (let c = 0; c < cols; c++) a[r][c] -= f * a[rank][c]
    }
    rank++
  }
  return { m: a, rank }
}

function inverse(m: M2): M2 | null {
  const n = m.length
  const d = det(m)
  if (Math.abs(d) < TOL) return null
  const aug = m.map((r, i) => [...r, ...Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))])
  const { m: r } = rref(aug)
  return r.map((row) => row.slice(n))
}

/** Real+complex eigenvalues of a 2×2 or 3×3 matrix. */
function eigenvalues(m: M2): { re: number; im: number }[] {
  const n = m.length
  if (n === 2) {
    const [a, b] = [m[0][0], m[0][1]]
    const [c, d] = [m[1][0], m[1][1]]
    const tr = a + d
    const disc = tr * tr - 4 * (a * d - b * c)
    if (disc >= 0) {
      const s = Math.sqrt(disc)
      return [
        { re: (tr + s) / 2, im: 0 },
        { re: (tr - s) / 2, im: 0 },
      ]
    }
    const s = Math.sqrt(-disc) / 2
    return [
      { re: tr / 2, im: s },
      { re: tr / 2, im: -s },
    ]
  }
  // 3×3 — characteristic polynomial  λ³ − aλ² + bλ − c = 0
  const a = trace(m)
  const b =
    m[0][0] * m[1][1] - m[0][1] * m[1][0] +
    m[0][0] * m[2][2] - m[0][2] * m[2][0] +
    m[1][1] * m[2][2] - m[1][2] * m[2][1]
  const c = det(m)
  // depressed cubic  x³ + px + q = 0  with λ = x + a/3
  const shift = a / 3
  const p = b - (a * a) / 3
  const q = (2 * a * a * a) / 27 - (a * b) / 3 + c
  const disc = -4 * p * p * p - 27 * q * q
  const shiftUp = (x: number) => x + shift
  if (Math.abs(p) < TOL && Math.abs(q) < TOL) {
    return [0, 1, 2].map(() => ({ re: shiftUp(0), im: 0 }))
  }
  if (disc <= 0) {
    // three real roots — trigonometric method
    const mp = p < 0 ? Math.sqrt(-p / 3) : 0
    const arg = mp > 0 ? Math.max(-1, Math.min(1, (3 * q) / (p * mp))) : 0
    const phi = Math.acos(arg)
    const roots = [0, 1, 2].map((k) => shiftUp(2 * mp * Math.cos((phi + 2 * Math.PI * k) / 3)))
    return roots.map((re) => ({ re, im: 0 }))
  }
  // one real root (Cardano) + complex pair via deflation
  const big = Math.sqrt(disc / 27)
  const s = Math.cbrt(-q / 2 + big)
  const t = Math.cbrt(-q / 2 - big)
  const real = shiftUp(s + t)
  // deflate: λ² − (a − real)λ + (−c/real)... use polynomial division on
  // λ³ − aλ² + bλ − c ÷ (λ − real)  →  λ² + (real − a)λ + (b − a·real + real²)
  const q2a = real - a
  const q2b = b - a * real + real * real
  const disc2 = q2a * q2a - 4 * q2b
  if (disc2 >= 0) {
    const s2 = Math.sqrt(disc2)
    return [
      { re: real, im: 0 },
      { re: (-q2a + s2) / 2, im: 0 },
      { re: (-q2a - s2) / 2, im: 0 },
    ]
  }
  const s2 = Math.sqrt(-disc2) / 2
  return [
    { re: real, im: 0 },
    { re: -q2a / 2, im: s2 },
    { re: -q2a / 2, im: -s2 },
  ]
}

const fmt = (x: number): string => {
  if (Math.abs(x) < TOL) return '0'
  const r = Math.round(x * 1000) / 1000
  return Number.isInteger(r) ? String(r) : String(r)
}

const fmtLambda = (l: { re: number; im: number }): string => {
  const re = fmt(l.re)
  if (Math.abs(l.im) < TOL) return re
  const sign = l.im > 0 ? '+' : '−'
  return `${re} ${sign} ${fmt(Math.abs(l.im))}i`
}

/* ------------------------------------------------------------------ */
/*  Defaults                                                           */
/* ------------------------------------------------------------------ */

const DEFAULT_A: Record<Size, M2> = {
  2: [
    [1, 2],
    [3, 4],
  ],
  3: [
    [2, 1, 0],
    [1, 3, 1],
    [0, 1, 2],
  ],
}

const DEFAULT_B: Record<Size, M2> = {
  2: [
    [0, 1],
    [1, 0],
  ],
  3: [
    [1, 0, 2],
    [0, 1, 0],
    [2, 0, 1],
  ],
}

/* ------------------------------------------------------------------ */
/*  Matrix editor                                                      */
/* ------------------------------------------------------------------ */

function MatrixEditor({
  m,
  onChange,
  label,
  accent,
}: {
  m: M2
  onChange: (r: number, c: number, v: number) => void
  label: string
  accent: string
}) {
  return (
    <div className="inline-flex flex-col items-center gap-1.5">
      <span className={cn('font-mono text-[11px] font-semibold', accent)}>{label}</span>
      <div
        className="grid gap-1.5 rounded-xl border border-border bg-background/70 p-2 font-mono"
        style={{ gridTemplateColumns: `repeat(${m.length}, minmax(0, 1fr))` }}
        role="group"
        aria-label={`${label} cells`}
      >
        {m.map((row, i) =>
          row.map((v, j) => (
            <input
              key={`${i}-${j}`}
              type="number"
              step="any"
              value={Number.isFinite(v) ? v : 0}
              onChange={(e) => onChange(i, j, parseFloat(e.target.value) || 0)}
              aria-label={`${label} row ${i + 1} column ${j + 1}`}
              className="h-10 w-[4.5rem] rounded-lg border border-border bg-muted/30 px-2 text-center text-[13px] text-foreground outline-none transition focus:border-emerald-500/60 focus:bg-muted/60"
            />
          )),
        )}
      </div>
    </div>
  )
}

function MatrixReadout({ m, label, muted }: { m: M2; label: string; muted?: boolean }) {
  return (
    <div className="inline-flex flex-col items-center gap-1.5">
      <span className="font-mono text-[11px] font-semibold text-muted-foreground">{label}</span>
      <div
        className={cn(
          'grid gap-x-2 gap-y-0.5 rounded-xl border border-dashed border-border/70 p-2 font-mono text-[12px] leading-5',
          muted ? 'text-muted-foreground' : 'text-foreground/90',
        )}
        style={{ gridTemplateColumns: `repeat(${m.length}, auto)` }}
      >
        {m.map((row, i) =>
          row.map((v, j) => (
            <span key={`${i}-${j}`} className="text-right">
              {fmt(v)}
            </span>
          )),
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  2×2 transformation canvas                                          */
/* ------------------------------------------------------------------ */

function TransformCanvas({ m }: { m: M2 }) {
  const reduced = useReducedMotion()
  const [t, setT] = useState(1)
  const rafRef = useRef<number | null>(null)

  // current interpolated matrix  M(t) = (1−t)·I + t·M
  const cur = useMemo(
    () => m.map((row, i) => row.map((v, j) => (1 - t) * (i === j ? 1 : 0) + t * v)),
    [m, t],
  )

  const animate = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const t0 = performance.now()
    const tick = (now: number) => {
      const k = Math.min(1, (now - t0) / 1200)
      const eased = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2
      setT(eased)
      if (k < 1) rafRef.current = requestAnimationFrame(tick)
    }
    setT(0)
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }, [])

  const S = 44 // px per unit
  const C = 180 // centre
  const px = (x: number) => C + x * S
  const py = (y: number) => C - y * S

  const T = (x: number, y: number): [number, number] => {
    const [a, b] = [cur[0][0], cur[0][1]]
    const [c, d] = [cur[1][0], cur[1][1]]
    return [a * x + b * y, c * x + d * y]
  }

  const gridLines = Array.from({ length: 9 }, (_, i) => i - 4)
  const detNow = cur[0][0] * cur[1][1] - cur[0][1] * cur[1][0]

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <svg
          viewBox="0 0 360 360"
          width="360"
          height="360"
          className="max-w-full rounded-xl border border-border bg-background/80"
          role="img"
          aria-label={`Linear transformation preview: determinant ${fmt(detNow)}`}
        >
          {/* static grid */}
          {gridLines.map((g) => (
            <g key={`s${g}`} stroke="currentColor" className="text-muted-foreground/15" strokeWidth="1">
              <line x1={px(g)} y1={0} x2={px(g)} y2={360} />
              <line x1={0} y1={py(g)} x2={360} y2={py(g)} />
            </g>
          ))}
          {/* transformed grid */}
          {gridLines.map((g) => (
            <g key={`t${g}`} stroke="currentColor" className="text-emerald-400/40" strokeWidth="1">
              <line x1={px(T(g, -4)[0])} y1={py(T(g, -4)[1])} x2={px(T(g, 4)[0])} y2={py(T(g, 4)[1])} />
              <line x1={px(T(-4, g)[0])} y1={py(T(-4, g)[1])} x2={px(T(4, g)[0])} y2={py(T(4, g)[1])} />
            </g>
          ))}
          {/* axes */}
          <line x1={px(T(-4, 0)[0])} y1={py(T(-4, 0)[1])} x2={px(T(4, 0)[0])} y2={py(T(4, 0)[1])} stroke="currentColor" className="text-muted-foreground/50" strokeWidth="1.5" />
          <line x1={px(T(0, -4)[0])} y1={py(T(0, -4)[1])} x2={px(T(0, 4)[0])} y2={py(T(0, 4)[1])} stroke="currentColor" className="text-muted-foreground/50" strokeWidth="1.5" />

          {/* unit square → parallelogram */}
          <motion.polygon
            points={[
              [0, 0],
              [1, 0],
              [1, 1],
              [0, 1],
            ]
              .map(([x, y]) => `${px(T(x, y)[0])},${py(T(x, y)[1])}`)
              .join(' ')}
            fill="rgba(16,185,129,0.14)"
            stroke="rgba(16,185,129,0.5)"
            strokeWidth="1.5"
          />

          {/* basis vectors */}
          {(
            [
              [[1, 0], '#f59e0b', 'î'],
              [[0, 1], '#8b5cf6', 'ĵ'],
            ] as const
          ).map(([base, color, name]) => {
            const [x, y] = T(base[0], base[1])
            return (
              <g key={name}>
                <defs>
                  <marker id={`arrow-${name}`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill={color} />
                  </marker>
                </defs>
                <line
                  x1={px(0)}
                  y1={py(0)}
                  x2={px(x)}
                  y2={py(y)}
                  stroke={color}
                  strokeWidth="3"
                  markerEnd={`url(#arrow-${name})`}
                />
                <text x={px(x) + (x >= 0 ? 8 : -14)} y={py(y) - 6} fill={color} fontSize="13" fontFamily="monospace">
                  {name}→({fmt(x)},{fmt(y)})
                </text>
              </g>
            )
          })}
        </svg>
        <span className="absolute right-2 top-2 rounded-md bg-muted/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          det = {fmt(detNow)}
          {detNow < 0 ? ' · orientation flipped' : Math.abs(detNow) < TOL ? ' · plane collapsed' : ''}
        </span>
      </div>

      <div className="flex w-full max-w-[360px] items-center gap-3">
        <Button size="sm" variant="outline" onClick={animate} className="gap-1.5" aria-label="Animate from identity to M">
          <Play className="h-3 w-3" /> animate
        </Button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={t}
          onChange={(e) => setT(parseFloat(e.target.value))}
          aria-label="Interpolation between identity and the matrix"
          className="h-1.5 flex-1 accent-emerald-500"
        />
        <span className="w-10 text-right font-mono text-[11px] text-muted-foreground">t={t.toFixed(2)}</span>
      </div>
      {!reduced && (
        <p className="max-w-[360px] text-center text-[11px] leading-relaxed text-muted-foreground/70">
          The green grid is where the standard grid goes; the shaded square is the unit square. Area scale = |det M| —
          watch it vanish when the columns become parallel.
        </p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main lab                                                           */
/* ------------------------------------------------------------------ */

export default function MatrixLab() {
  const [size, setSize] = useState<Size>(2)

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      {/* header */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Grid3x3 className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Matrix Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Determinant, rank, inverse and eigenvalues as you type — and for 2×2, watch the plane deform.
          </p>
        </div>
        <span className="ml-auto flex overflow-hidden rounded-lg border border-border" role="group" aria-label="Matrix size">
          {[2, 3].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setSize(n as Size)}
              aria-pressed={size === n}
              className={cn(
                'px-3 py-1.5 text-xs font-semibold transition',
                size === n ? 'bg-emerald-600 text-white' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {n}×{n}
            </button>
          ))}
        </span>
      </div>

      {/* keyed body: switching size remounts with fresh defaults */}
      <MatrixLabBody key={size} size={size} />
    </div>
  )
}

function MatrixLabBody({ size }: { size: Size }) {
  const [a, setA] = useState<M2>(() => DEFAULT_A[size].map((r) => [...r]))
  const [b, setB] = useState<M2>(() => DEFAULT_B[size].map((r) => [...r]))

  const setCell = (setter: React.Dispatch<React.SetStateAction<M2>>) => (r: number, c: number, v: number) =>
    setter((prev) => prev.map((row, i) => (i === r ? row.map((x, j) => (j === c ? v : x)) : row)))

  const d = useMemo(() => det(a), [a])
  const tr = useMemo(() => trace(a), [a])
  const rank = useMemo(() => rref(a).rank, [a])
  const inv = useMemo(() => inverse(a), [a])
  const trans = useMemo(() => transpose(a), [a])
  const eigs = useMemo(() => eigenvalues(a), [a])
  const ab = useMemo(() => multiply(a, b), [a, b])

  return (
    <>
      {/* editors + facts */}
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div className="flex flex-wrap items-start justify-center gap-4 md:justify-start">
          <MatrixEditor m={a} onChange={setCell(setA)} label="matrix A" accent="text-emerald-500" />
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              {[
                { k: 'det A', v: fmt(d), hint: 'zero ⇒ singular' },
                { k: 'tr A', v: fmt(tr), hint: 'sum of eigenvalues' },
                { k: 'rank A', v: `${rank} / ${a.length}`, hint: 'pivot count in RREF' },
                { k: 'A⁻¹', v: inv ? 'exists' : 'none', hint: 'needs det ≠ 0' },
              ].map((f) => (
                <div key={f.k} className="rounded-xl border border-border bg-background/60 px-3 py-2">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{f.k}</div>
                  <div className="font-mono text-base font-semibold text-foreground">{f.v}</div>
                  <div className="text-[9px] text-muted-foreground/70">{f.hint}</div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-border bg-background/60 px-3 py-2">
              <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <Sigma className="h-3 w-3" /> eigenvalues
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {eigs.map((l, i) => (
                  <span
                    key={i}
                    className={cn(
                      'rounded-lg px-2 py-1 font-mono text-xs',
                      Math.abs(l.im) < TOL
                        ? 'bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/25 dark:text-emerald-300'
                        : 'bg-violet-500/10 text-violet-600 ring-1 ring-violet-500/25 dark:text-violet-300',
                    )}
                  >
                    λ{i + 1} = {fmtLambda(l)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-start">
          {inv ? (
            <MatrixReadout m={inv} label="A⁻¹ (Gauss–Jordan)" />
          ) : (
            <div className="flex items-center gap-2 rounded-xl border border-dashed border-rose-500/40 bg-rose-500/[0.06] px-4 py-3 text-xs text-rose-600 dark:text-rose-300">
              <InfinityIcon className="h-4 w-4" aria-hidden="true" />
              A is singular (det = 0) — no inverse exists.
            </div>
          )}
          <MatrixReadout m={trans} label="Aᵀ (transpose)" muted />
        </div>
      </div>

      {/* multiply */}
      <div className="mt-6 rounded-xl border border-border bg-background/50 p-4">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          <Layers className="h-3.5 w-3.5" /> matrix product
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <MatrixEditor m={b} onChange={setCell(setB)} label="matrix B" accent="text-amber-500" />
          <span className="font-mono text-lg text-muted-foreground">·</span>
          <span className="font-mono text-xs text-muted-foreground">A · B =</span>
          <MatrixReadout m={ab} label="result" />
        </div>
      </div>

      {/* transform (2×2) */}
      {size === 2 && (
        <div className="mt-6 rounded-xl border border-border bg-background/50 p-4">
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              <Play className="h-3.5 w-3.5" /> the transformation A performs
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setA(DEFAULT_A[2].map((r) => [...r]))}
              className="h-6 gap-1 px-2 text-[10px]"
            >
              <RotateCcw className="h-3 w-3" /> reset A
            </Button>
          </div>
          <div className="flex justify-center">
            <TransformCanvas m={a} />
          </div>
        </div>
      )}
    </>
  )
}

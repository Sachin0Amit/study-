'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Spline, Orbit, Mountain, Play, Pause, RotateCcw, Lightbulb, Gauge,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/* safe mini math parser (no eval): tokenizer + recursive descent      */
/* supports + - * / ^ ( ) sin cos tan sqrt abs exp ln, e, pi, tau      */
/* and implicit multiplication such as 2t or 3sin(t)                   */
/* ------------------------------------------------------------------ */

type Tok = { k: 'num'; v: number } | { k: 'id'; v: string } | { k: 'op'; v: string }

type ExprNode =
  | { t: 'num'; v: number }
  | { t: 'var' }
  | { t: 'call'; name: string; arg: ExprNode }
  | { t: 'bin'; op: '+' | '-' | '*' | '/' | '^'; a: ExprNode; b: ExprNode }
  | { t: 'neg'; a: ExprNode }

const FUNCS: Record<string, (u: number) => number> = {
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  sqrt: (u) => (u < 0 ? NaN : Math.sqrt(u)),
  abs: Math.abs,
  exp: Math.exp,
  ln: (u) => (u <= 0 ? NaN : Math.log(u)),
}

const CONSTS: Record<string, number> = { pi: Math.PI, e: Math.E, tau: Math.PI * 2 }

function tokenize(src: string): Tok[] {
  const raw: Tok[] = []
  let i = 0
  while (i < src.length) {
    const ch = src[i]
    if (ch === ' ' || ch === '\t') {
      i++
      continue
    }
    if ((ch >= '0' && ch <= '9') || ch === '.') {
      let j = i
      while (j < src.length && ((src[j] >= '0' && src[j] <= '9') || src[j] === '.')) j++
      const slice = src.slice(i, j)
      if (slice.split('.').length > 2) throw new Error(`bad number near “${slice}”`)
      const v = parseFloat(slice)
      if (!Number.isFinite(v)) throw new Error(`bad number near “${slice}”`)
      raw.push({ k: 'num', v })
      i = j
      continue
    }
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
      let j = i
      while (j < src.length && ((src[j] >= 'a' && src[j] <= 'z') || (src[j] >= 'A' && src[j] <= 'Z'))) j++
      raw.push({ k: 'id', v: src.slice(i, j).toLowerCase() })
      i = j
      continue
    }
    if ('+-*/^()'.includes(ch)) {
      raw.push({ k: 'op', v: ch })
      i++
      continue
    }
    throw new Error(`unexpected character “${ch}”`)
  }
  // implicit multiplication: 2t -> 2*t, 3sin(t) -> 3*sin(t), (t)(t) -> (t)*(t)
  const toks: Tok[] = []
  for (const t of raw) {
    const prev = toks[toks.length - 1]
    const startsValue = t.k !== 'op' || t.v === '('
    const prevEnds =
      prev !== undefined &&
      (prev.k === 'num' ||
        (prev.k === 'id' && !(t.k === 'op' && t.v === '(' && FUNCS[prev.v] !== undefined)) ||
        (prev.k === 'op' && prev.v === ')'))
    if (prev !== undefined && startsValue && prevEnds) toks.push({ k: 'op', v: '*' })
    toks.push(t)
  }
  return toks
}

function parseExpr(toks: Tok[], varName: string): ExprNode {
  let pos = 0
  const peek = (): Tok | undefined => toks[pos]
  const eat = (v: string): boolean => {
    const t = peek()
    if (t !== undefined && t.k === 'op' && t.v === v) {
      pos++
      return true
    }
    return false
  }
  const expect = (v: string): void => {
    if (!eat(v)) throw new Error(`expected “${v}”`)
  }
  const atom = (): ExprNode => {
    const t = peek()
    if (t === undefined) throw new Error('unexpected end of expression')
    if (t.k === 'num') {
      pos++
      return { t: 'num', v: t.v }
    }
    if (t.k === 'op' && t.v === '(') {
      pos++
      const inner = expr()
      expect(')')
      return inner
    }
    if (t.k === 'id') {
      if (FUNCS[t.v] !== undefined) {
        const next = toks[pos + 1]
        if (next === undefined || !(next.k === 'op' && next.v === '(')) {
          throw new Error(`write ${t.v}(...) with parentheses`)
        }
        pos += 2
        const arg = expr()
        expect(')')
        return { t: 'call', name: t.v, arg }
      }
      pos++
      if (t.v === varName) return { t: 'var' }
      if (CONSTS[t.v] !== undefined) return { t: 'num', v: CONSTS[t.v] }
      throw new Error(`unknown symbol “${t.v}” — use ${varName}, pi, e or a function`)
    }
    throw new Error(`unexpected “${t.v}”`)
  }
  const pow = (): ExprNode => {
    const base = atom()
    if (eat('^')) return { t: 'bin', op: '^', a: base, b: unary() }
    return base
  }
  const unary = (): ExprNode => {
    if (eat('-')) return { t: 'neg', a: unary() }
    return pow()
  }
  const term = (): ExprNode => {
    let a = unary()
    for (;;) {
      if (eat('*')) a = { t: 'bin', op: '*', a, b: unary() }
      else if (eat('/')) a = { t: 'bin', op: '/', a, b: unary() }
      else return a
    }
  }
  const expr = (): ExprNode => {
    let a = term()
    for (;;) {
      if (eat('+')) a = { t: 'bin', op: '+', a, b: term() }
      else if (eat('-')) a = { t: 'bin', op: '-', a, b: term() }
      else return a
    }
  }
  const root = expr()
  if (pos < toks.length) {
    const t = toks[pos]
    throw new Error(`unexpected “${t.v}”`)
  }
  return root
}

function evalNode(n: ExprNode, v: number): number {
  switch (n.t) {
    case 'num':
      return n.v
    case 'var':
      return v
    case 'neg':
      return -evalNode(n.a, v)
    case 'call':
      return FUNCS[n.name](evalNode(n.arg, v))
    case 'bin': {
      const x = evalNode(n.a, v)
      const y = evalNode(n.b, v)
      if (n.op === '+') return x + y
      if (n.op === '-') return x - y
      if (n.op === '*') return x * y
      if (n.op === '/') return x / y
      return x ** y
    }
  }
}

function compileExpr(src: string, varName: string): { ok: true; fn: (u: number) => number } | { ok: false; error: string } {
  try {
    const node = parseExpr(tokenize(src), varName)
    return { ok: true, fn: (u: number) => evalNode(node, u) }
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'invalid expression' }
  }
}

/* turn a source expression into display TeX (single pass, no re-matching) */
function srcToTex(src: string): string {
  return src.replace(/\s+/g, '').replace(
    /sqrt\(([^()]*)\)|abs\(([^()]*)\)|theta|pi|tau|sin|cos|tan|exp|ln|\*/g,
    (m, sq: string | undefined, ab: string | undefined): string => {
      if (m === 'theta') return '\\theta'
      if (m === 'pi') return '\\pi'
      if (m === 'tau') return '2\\pi'
      if (m === '*') return '\\cdot'
      if (sq !== undefined) return `\\sqrt{${sq}}`
      if (ab !== undefined) return `\\lvert ${ab}\\rvert`
      return `\\${m}`
    }
  )
}

/* ------------------------------------------------------------------ */
/* numeric helpers                                                     */
/* ------------------------------------------------------------------ */

const W = 900
const H = 520
const PL = 46
const PR = 16
const PT = 16
const PB = 30

function fixed(v: number, d = 2): string {
  let s = v.toFixed(d)
  if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '')
  return s === '-0' ? '0' : s
}

function fmt(v: number, d = 2): string {
  if (Number.isNaN(v)) return '—'
  if (!Number.isFinite(v)) return '∞'
  const a = Math.abs(v)
  if (a !== 0 && (a >= 1e4 || a < 1e-3)) {
    const e = Math.floor(Math.log10(a))
    return `${(v / 10 ** e).toFixed(2)}e${e}`
  }
  return fixed(v, d)
}

function fmtTex(v: number, d = 3): string {
  if (Number.isNaN(v)) return '\\text{—}'
  if (!Number.isFinite(v)) return '\\infty'
  const a = Math.abs(v)
  if (a !== 0 && (a >= 1e4 || a < 1e-3)) {
    const e = Math.floor(Math.log10(a))
    return `${(v / 10 ** e).toFixed(2)}\\times 10^{${e}}`
  }
  return fixed(v, d)
}

function piTex(v: number): string {
  const k = v / Math.PI
  if (Math.abs(k) >= 0.5 && Math.abs(k - Math.round(k)) < 0.015) {
    const r = Math.round(k)
    return r === 1 ? '\\pi' : `${r}\\pi`
  }
  return fixed(v)
}

/** composite Simpson's rule; returns NaN if the integrand is undefined anywhere */
function integrate(f: (u: number) => number, a: number, b: number, n = 512): number {
  if (!(b > a)) return 0
  const m = n % 2 === 0 ? n : n + 1
  const h = (b - a) / m
  let s = f(a) + f(b)
  for (let i = 1; i < m; i++) {
    const v = f(a + i * h)
    if (!Number.isFinite(v)) return NaN
    s += v * (i % 2 === 0 ? 2 : 4)
  }
  return (s * h) / 3
}

interface View {
  s: number
  cx: number
  cy: number
  pw: number
  ph: number
  x0: number
  x1: number
  y0: number
  y1: number
}

function fitView(pts: { x: number; y: number }[]): View {
  let minX = Infinity
  let maxX = -Infinity
  let minY = Infinity
  let maxY = -Infinity
  let seen = false
  for (const p of pts) {
    if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) continue
    seen = true
    if (p.x < minX) minX = p.x
    if (p.x > maxX) maxX = p.x
    if (p.y < minY) minY = p.y
    if (p.y > maxY) maxY = p.y
  }
  if (!seen) {
    minX = -1
    maxX = 1
    minY = -1
    maxY = 1
  }
  const bw = Math.max(maxX - minX, 0.3)
  const bh = Math.max(maxY - minY, 0.3)
  const padX = bw * 0.14 + 0.15
  const padY = bh * 0.14 + 0.15
  const x0 = minX - padX
  const x1 = maxX + padX
  const y0 = minY - padY
  const y1 = maxY + padY
  const pw = W - PL - PR
  const ph = H - PT - PB
  const s = Math.min(pw / (x1 - x0), ph / (y1 - y0))
  return { s, cx: (x0 + x1) / 2, cy: (y0 + y1) / 2, pw, ph, x0, x1, y0, y1 }
}

function ErrorBox({ xErr, yErr }: { xErr?: string; yErr?: string }) {
  const msg = yErr ?? xErr ?? 'invalid expression'
  return (
    <div className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-xs leading-relaxed text-rose-300">
      <span className="font-semibold">Cannot plot:</span> {msg}
      <div className="mt-1 text-rose-300/70">
        Write expressions using t (or theta), numbers, + − * / ^ ( ), sin, cos, tan, sqrt, abs, exp, ln, pi, e — for
        example <span className="font-mono">3*sin(2*t)</span>.
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* parametric tab                                                      */
/* ------------------------------------------------------------------ */

interface ParamPreset {
  id: string
  label: string
  xSrc: string
  ySrc: string
  tMin: number
  tMax: number
  closed: boolean
  note: string
}

const PARAM_PRESETS: ParamPreset[] = [
  {
    id: 'circle',
    label: 'Circle',
    xSrc: '3*cos(t)',
    ySrc: '3*sin(t)',
    tMin: 0,
    tMax: 2 * Math.PI,
    closed: true,
    note: 'The staple curve: x = 3cos t, y = 3sin t sweeps a circle counter-clockwise once.',
  },
  {
    id: 'cycloid',
    label: 'Cycloid',
    xSrc: '2*(t - sin(t))',
    ySrc: '2*(1 - cos(t))',
    tMin: 0,
    tMax: 4 * Math.PI,
    closed: false,
    note: 'A point on a rolling wheel of radius 2 (Stewart §10.1) — cusps where the point touches the road.',
  },
  {
    id: 'lissajous',
    label: 'Lissajous 3 : 4',
    xSrc: '3*sin(3*t)',
    ySrc: '3*sin(4*t)',
    tMin: 0,
    tMax: 2 * Math.PI,
    closed: true,
    note: 'Frequency ratio 3:4 — a Lissajous figure closes only when the frequencies are commensurable.',
  },
  {
    id: 'astroid',
    label: 'Astroid',
    xSrc: '3*cos(t)^3',
    ySrc: '3*sin(t)^3',
    tMin: 0,
    tMax: 2 * Math.PI,
    closed: true,
    note: 'x^{2/3} + y^{2/3} = a^{2/3} — the hypocycloid with four sharp cusps.',
  },
  {
    id: 'helix',
    label: 'Helix (side view)',
    xSrc: 't/2',
    ySrc: '2*cos(t)',
    tMin: 0,
    tMax: 6 * Math.PI,
    closed: false,
    note: 'The shadow of the space helix (cos t, sin t, t/2): project out the sin t term and a cosine wave remains.',
  },
]

function ParametricTab() {
  const [presetId, setPresetId] = useState('circle')
  const [xSrc, setXSrc] = useState(PARAM_PRESETS[0].xSrc)
  const [ySrc, setYSrc] = useState(PARAM_PRESETS[0].ySrc)
  const [tMin, setTMin] = useState(0)
  const [tMax, setTMax] = useState(2 * Math.PI)
  const [closed, setClosed] = useState(true)
  const [tCur, setTCur] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)

  const preset = PARAM_PRESETS.find((p) => p.id === presetId) ?? PARAM_PRESETS[0]

  const loadPreset = (id: string) => {
    const p = PARAM_PRESETS.find((q) => q.id === id) ?? PARAM_PRESETS[0]
    setPresetId(p.id)
    setXSrc(p.xSrc)
    setYSrc(p.ySrc)
    setTMin(p.tMin)
    setTMax(p.tMax)
    setClosed(p.closed)
    setTCur(p.tMin)
    setPlaying(false)
  }

  const xComp = useMemo(() => compileExpr(xSrc, 't'), [xSrc])
  const yComp = useMemo(() => compileExpr(ySrc, 't'), [ySrc])
  const xf = xComp.ok ? xComp.fn : null
  const yf = yComp.ok ? yComp.fn : null

  const SAMPLES = 720
  const pts = useMemo(() => {
    if (!xf || !yf) return null
    const arr: { x: number; y: number }[] = []
    for (let i = 0; i <= SAMPLES; i++) {
      const t = tMin + ((tMax - tMin) * i) / SAMPLES
      arr.push({ x: xf(t), y: yf(t) })
    }
    return arr
  }, [xf, yf, tMin, tMax])

  const view = useMemo(() => (pts ? fitView(pts) : null), [pts])

  const tCurS = Math.min(tMax, Math.max(tMin, tCur))

  /* animation loop */
  useEffect(() => {
    if (!playing) return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      const span = tMax - tMin
      setTCur((t) => {
        let nt = t + (dt * speed * span) / 9
        if (nt >= tMax) nt = tMin + ((nt - tMin) % span)
        return nt
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing, speed, tMin, tMax])

  /* metrics: speed at t, arc length, signed area */
  const h = 1e-4
  const dxFun = (t: number): number => (xf ? (xf(t + h) - xf(t - h)) / (2 * h) : 0)
  const dyFun = (t: number): number => (yf ? (yf(t + h) - yf(t - h)) / (2 * h) : 0)

  const metrics = useMemo(() => {
    if (!xf || !yf) return null
    const dx = (t: number) => (xf(t + h) - xf(t - h)) / (2 * h)
    const dy = (t: number) => (yf(t + h) - yf(t - h)) / (2 * h)
    const L = integrate((t) => Math.hypot(dx(t), dy(t)), tMin, tMax, 800)
    const A = integrate((t) => 0.5 * (xf(t) * dy(t) - yf(t) * dx(t)), tMin, tMax, 800)
    return { L, A }
  }, [xf, yf, tMin, tMax])

  const ready = xf !== null && yf !== null && view !== null && pts !== null

  let curveD = ''
  let trailD = ''
  let ptx = 0
  let pty = 0
  let vx = 0
  let vy = 0
  let speedNow = 0
  let idx = 0
  if (ready && view && pts) {
    const SX = (x: number): number => PL + view.pw / 2 + (x - view.cx) * view.s
    const SY = (y: number): number => PT + view.ph / 2 - (y - view.cy) * view.s
    let pen = false
    for (const p of pts) {
      if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) {
        pen = false
        continue
      }
      curveD += `${pen ? 'L' : 'M'}${SX(p.x).toFixed(1)} ${SY(p.y).toFixed(1)} `
      pen = true
    }
    idx = Math.floor(((tCurS - tMin) / (tMax - tMin)) * SAMPLES)
    idx = Math.max(0, Math.min(SAMPLES, idx))
    let startedTrail = false
    for (let i = Math.max(0, idx - 34); i <= idx; i++) {
      const p = pts[i]
      if (Number.isFinite(p.x) && Number.isFinite(p.y)) {
        trailD += `${startedTrail ? 'L' : 'M'}${SX(p.x).toFixed(1)} ${SY(p.y).toFixed(1)} `
        startedTrail = true
      }
    }
    ptx = xf(tCurS)
    pty = yf(tCurS)
    vx = dxFun(tCurS)
    vy = dyFun(tCurS)
    speedNow = Math.hypot(vx, vy)
  }

  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {/* canvas */}
      <div className="overflow-hidden rounded-xl border border-border bg-card xl:col-span-2">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <TeX tex="x = x(t),\; y = y(t)" />
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">
            {ready ? `t = ${fmt(tCurS)} / [${fmt(tMin)}, ${fmt(tMax)}]` : 'expression error'}
          </span>
        </div>
        <div className="p-2">
          {ready && view ? (
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full touch-none"
              role="img"
              aria-label={`Parametric curve with a moving point at t = ${fmt(tCurS)}, its velocity vector and tangent line`}
            >
              <defs>
                <clipPath id="pm-plot">
                  <rect x={PL} y={PT} width={W - PL - PR} height={H - PT - PB} />
                </clipPath>
              </defs>
              {/* axes */}
              {view.x0 <= 0 && 0 <= view.x1 && (
                <line x1={PL + view.pw / 2 - view.cx * view.s} y1={PT} x2={PL + view.pw / 2 - view.cx * view.s} y2={H - PB} stroke="#52525b" strokeWidth={1.5} />
              )}
              {view.y0 <= 0 && 0 <= view.y1 && (
                <line x1={PL} y1={PT + view.ph / 2 + view.cy * view.s} x2={W - PR} y2={PT + view.ph / 2 + view.cy * view.s} stroke="#52525b" strokeWidth={1.5} />
              )}
              <g clipPath="url(#pm-plot)">
                <path d={curveD} fill="none" stroke="#10b981" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                {trailD && <path d={trailD} fill="none" stroke="#2dd4bf" strokeWidth={4} strokeLinecap="round" opacity={0.45} />}
                {/* tangent + velocity arrow */}
                {speedNow > 1e-9 && (
                  <g>
                    <line
                      x1={PX(ptx, pty, view).x - (vx / speedNow) * 700}
                      y1={PX(ptx, pty, view).y + (vy / speedNow) * 700}
                      x2={PX(ptx, pty, view).x + (vx / speedNow) * 700}
                      y2={PX(ptx, pty, view).y - (vy / speedNow) * 700}
                      stroke="#fbbf24"
                      strokeWidth={1.5}
                      strokeDasharray="7 6"
                      opacity={0.7}
                    />
                    {(() => {
                      const p0 = PX(ptx, pty, view)
                      const dirx = vx * view.s
                      const diry = -vy * view.s
                      const dmag = Math.hypot(dirx, diry) || 1
                      const ux = dirx / dmag
                      const uy = diry / dmag
                      const len = Math.min(120, Math.max(28, dmag * 0.55))
                      const tipx = p0.x + ux * len
                      const tipy = p0.y + uy * len
                      const ang = Math.atan2(uy, ux)
                      const a1 = ang - 0.46
                      const a2 = ang + 0.46
                      return (
                        <g>
                          <line x1={p0.x} y1={p0.y} x2={tipx} y2={tipy} stroke="#fbbf24" strokeWidth={3.5} strokeLinecap="round" />
                          <line x1={tipx} y1={tipy} x2={tipx - Math.cos(a1) * 11} y2={tipy - Math.sin(a1) * 11} stroke="#fbbf24" strokeWidth={3} strokeLinecap="round" />
                          <line x1={tipx} y1={tipy} x2={tipx - Math.cos(a2) * 11} y2={tipy - Math.sin(a2) * 11} stroke="#fbbf24" strokeWidth={3} strokeLinecap="round" />
                        </g>
                      )
                    })()}
                  </g>
                )}
                <circle cx={PX(ptx, pty, view).x} cy={PX(ptx, pty, view).y} r={6.5} fill="#fbbf24" stroke="#451a03" strokeWidth={2} />
              </g>
            </svg>
          ) : (
            <div className="p-4">
              <ErrorBox xErr={xComp.ok ? undefined : xComp.error} yErr={yComp.ok ? undefined : yComp.error} />
            </div>
          )}
        </div>
        <div className="border-t border-border px-4 py-2 font-mono text-[11px] text-muted-foreground">
          emerald: the curve · teal: recent trail · amber: velocity vector and tangent line
        </div>
      </div>

      {/* controls + readouts */}
      <div className="flex flex-col gap-4">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-3 flex items-center gap-2">
            <Spline className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Curve</span>
          </div>
          <Select value={presetId} onValueChange={loadPreset}>
            <SelectTrigger size="sm" className="h-9 w-full bg-card text-xs" aria-label="parametric preset">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PARAM_PRESETS.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-12 shrink-0 font-mono text-xs text-amber-300">x(t) =</span>
              <Input value={xSrc} onChange={(e) => setXSrc(e.target.value)} className="bg-card font-mono text-xs" aria-label="x of t expression" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 shrink-0 font-mono text-xs text-amber-300">y(t) =</span>
              <Input value={ySrc} onChange={(e) => setYSrc(e.target.value)} className="bg-card font-mono text-xs" aria-label="y of t expression" />
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">t start</span>
                <span className="font-mono text-[11px] text-foreground">{piTex(tMin)}</span>
              </div>
              <Slider
                value={[tMin]}
                min={-12.57}
                max={0}
                step={0.01}
                onValueChange={(v) => setTMin(Math.min(v[0] ?? 0, tMax - 0.5))}
                aria-label="t start"
              />
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">t end</span>
                <span className="font-mono text-[11px] text-foreground">{piTex(tMax)}</span>
              </div>
              <Slider
                value={[tMax]}
                min={0.5}
                max={25.2}
                step={0.01}
                onValueChange={(v) => setTMax(Math.max(v[0] ?? 1, tMin + 0.5))}
                aria-label="t end"
              />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500" onClick={() => setPlaying(!playing)}>
              {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              {playing ? 'Pause' : 'Play'}
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => {
                setPlaying(false)
                setTCur(tMin)
              }}
              aria-label="reset animation"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </Button>
            <div className="flex min-w-[110px] flex-1 items-center gap-2">
              <Gauge className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              <Slider value={[speed]} min={0.25} max={3} step={0.25} onValueChange={(v) => setSpeed(v[0] ?? 1)} aria-label="animation speed" />
            </div>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">{preset.note}</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Calculus readouts
            </span>
          </div>
          <div className="mb-3 flex flex-wrap gap-2 font-mono text-xs">
            <span className="rounded-md border border-border bg-muted/40 px-2 py-1 text-foreground">t = {fmt(tCurS, 3)}</span>
            <span className="rounded-md border border-amber-500/40 bg-amber-500/10 px-2 py-1 text-amber-300">
              |v| = {fmt(speedNow, 3)}
            </span>
          </div>
          {metrics ? (
            <div className="space-y-3">
              <div>
                <TeX
                  display
                  tex={`L \\;=\\; \\int_{${piTex(tMin)}}^{${piTex(tMax)}} \\sqrt{\\bigl(\\tfrac{dx}{dt}\\bigr)^{2} + \\bigl(\\tfrac{dy}{dt}\\bigr)^{2}}\\; dt \\;\\approx\\; ${fmtTex(metrics.L)}`}
                  className="text-xs"
                />
                <p className="text-[10px] text-muted-foreground">arc length — Simpson integration of the speed</p>
              </div>
              <div className="border-t border-border pt-2">
                <TeX
                  display
                  tex={`A \\;=\\; \\tfrac{1}{2}\\int_{${piTex(tMin)}}^{${piTex(tMax)}} \\bigl(x\\,\\tfrac{dy}{dt} - y\\,\\tfrac{dx}{dt}\\bigr)\\, dt \\;\\approx\\; ${fmtTex(metrics.A)}`}
                  className="text-xs"
                />
                <p className="text-[10px] text-muted-foreground">
                  {closed
                    ? 'the curve is closed — Green’s theorem gives the enclosed area'
                    : 'signed swept area — meaningful only when the curve closes up'}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">Fix the expressions to see arc length and area.</p>
          )}
        </div>
      </div>
    </div>
  )
}

/* screen position helper for the moving point */
function PX(x: number, y: number, view: View): { x: number; y: number } {
  return { x: PL + view.pw / 2 + (x - view.cx) * view.s, y: PT + view.ph / 2 - (y - view.cy) * view.s }
}

/* ------------------------------------------------------------------ */
/* polar tab                                                           */
/* ------------------------------------------------------------------ */

interface PolarPreset {
  id: string
  label: string
  src: string
  thMin: number
  thMax: number
  note: string
}

const POLAR_PRESETS: PolarPreset[] = [
  {
    id: 'cardioid',
    label: 'Cardioid r = 1 + cos θ',
    src: '1 + cos(theta)',
    thMin: 0,
    thMax: 2 * Math.PI,
    note: 'A limaçon with the inner loop just degenerated to a cusp at the pole.',
  },
  {
    id: 'rose',
    label: 'Rose r = cos 2θ',
    src: 'cos(2*theta)',
    thMin: 0,
    thMax: 2 * Math.PI,
    note: 'Four petals; the negative-r values trace the petals on the opposite ray (Stewart §10.3).',
  },
  {
    id: 'limacon',
    label: 'Limaçon r = 1 + 2 cos θ',
    src: '1 + 2*cos(theta)',
    thMin: 0,
    thMax: 2 * Math.PI,
    note: 'With 1 < |a/b| < 2 the limaçon grows an inner loop where r turns negative.',
  },
  {
    id: 'spiral',
    label: 'Spiral r = θ/4',
    src: 'theta/4',
    thMin: 0,
    thMax: 8 * Math.PI,
    note: 'Archimedes’ spiral — equal sweeps in θ push r out by equal amounts.',
  },
  {
    id: 'circle',
    label: 'Circle r = 2',
    src: '2',
    thMin: 0,
    thMax: 2 * Math.PI,
    note: 'Constant r: the simplest polar graph, one clean loop around the pole.',
  },
]

function PolarTab() {
  const reduced = useReducedMotion() ?? false
  const [presetId, setPresetId] = useState('cardioid')
  const [rSrc, setRSrc] = useState(POLAR_PRESETS[0].src)
  const [thMin, setThMin] = useState(0)
  const [thMax, setThMax] = useState(2 * Math.PI)
  const [thCur, setThCur] = useState(2 * Math.PI)
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)

  const preset = POLAR_PRESETS.find((p) => p.id === presetId) ?? POLAR_PRESETS[0]

  const loadPreset = (id: string) => {
    const p = POLAR_PRESETS.find((q) => q.id === id) ?? POLAR_PRESETS[0]
    setPresetId(p.id)
    setRSrc(p.src)
    setThMin(p.thMin)
    setThMax(p.thMax)
    setThCur(p.thMax)
    setPlaying(false)
  }

  const rComp = useMemo(() => compileExpr(rSrc, 'theta'), [rSrc])
  const rf = rComp.ok ? rComp.fn : null

  const SAMPLES = 720
  const pts = useMemo(() => {
    if (!rf) return null
    const arr: { x: number; y: number }[] = []
    for (let i = 0; i <= SAMPLES; i++) {
      const th = thMin + ((thMax - thMin) * i) / SAMPLES
      const r = rf(th)
      arr.push({ x: r * Math.cos(th), y: r * Math.sin(th) })
    }
    return arr
  }, [rf, thMin, thMax])

  const view = useMemo(() => (pts ? fitView(pts) : null), [pts])
  const thCurS = Math.min(thMax, Math.max(thMin, thCur))

  /* sweep animation */
  useEffect(() => {
    if (!playing) return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      const span = thMax - thMin
      setThCur((t) => {
        let nt = t + (dt * speed * span) / 8
        if (nt >= thMax) nt = thMin + ((nt - thMin) % span)
        return nt
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing, speed, thMin, thMax])

  const onPlayToggle = () => {
    if (!playing && thCur >= thMax - 1e-9) setThCur(thMin)
    setPlaying(!playing)
  }

  const rTex = srcToTex(rSrc)
  const areaTotal = useMemo(
    () => (rf ? integrate((th) => 0.5 * rf(th) ** 2, thMin, thMax, 720) : NaN),
    [rf, thMin, thMax]
  )
  const areaSoFar = useMemo(
    () => (rf ? integrate((th) => 0.5 * rf(th) ** 2, thMin, thCurS, 720) : NaN),
    [rf, thMin, thCurS]
  )

  const ready = rf !== null && view !== null && pts !== null
  const C = view ? { x: PL + view.pw / 2 + (0 - view.cx) * view.s, y: PT + view.ph / 2 + view.cy * view.s } : { x: W / 2, y: H / 2 }
  const idx = ready ? Math.max(0, Math.min(SAMPLES, Math.floor(((thCurS - thMin) / (thMax - thMin)) * SAMPLES))) : 0
  const rNow = rf ? rf(thCurS) : NaN
  const ptNow = { x: rNow * Math.cos(thCurS), y: rNow * Math.sin(thCurS) }
  const PNow = view ? PX(ptNow.x, ptNow.y, view) : { x: W / 2, y: H / 2 }

  const maxR = useMemo(() => {
    if (!pts) return 1
    let m = 0
    for (const p of pts) m = Math.max(m, Math.abs(p.x), Math.abs(p.y))
    return m > 1e-9 ? m : 1
  }, [pts])
  const ringStep = [0.25, 0.5, 1, 2, 5, 10].find((s) => maxR / s <= 5.5) ?? 10
  const rings: number[] = []
  for (let r = ringStep; r <= maxR + 1e-9; r += ringStep) rings.push(r)

  let sweepD = ''
  let fillD = ''
  if (ready && pts) {
    let started = false
    for (let i = 0; i <= idx; i++) {
      const p = pts[i]
      if (Number.isFinite(p.x) && Number.isFinite(p.y)) {
        const q = PX(p.x, p.y, view)
        sweepD += `${started ? 'L' : 'M'}${q.x.toFixed(1)} ${q.y.toFixed(1)} `
        started = true
      }
    }
    fillD = sweepD ? `M${C.x.toFixed(1)} ${C.y.toFixed(1)} ` + sweepD + 'Z' : ''
  }

  const deg = (thCurS * 180) / Math.PI

  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {/* canvas */}
      <div className="overflow-hidden rounded-xl border border-border bg-card xl:col-span-2">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <TeX tex={`r(\\theta) = ${rTex.length > 0 ? rTex : '\\,\\dots'}`} />
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">
            θ = {fmt(thCurS, 3)} rad · {fmt(deg, 1)}°
          </span>
        </div>
        <div className="p-2">
          {ready && view ? (
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full touch-none"
              role="img"
              aria-label={`Polar curve swept up to theta = ${fmt(thCurS)} radians with the enclosed area shaded`}
            >
              <defs>
                <clipPath id="po-plot">
                  <rect x={PL} y={PT} width={W - PL - PR} height={H - PT - PB} />
                </clipPath>
              </defs>
              <g clipPath="url(#po-plot)">
                {/* polar grid */}
                {rings.map((r) => (
                  <circle key={`ring${r}`} cx={C.x} cy={C.y} r={r * view.s} fill="none" stroke="#27272a" strokeWidth={1} />
                ))}
                {Array.from({ length: 12 }, (_, k) => {
                  const a = (k * Math.PI) / 6
                  const rr = Math.max(view.pw, view.ph)
                  return (
                    <line
                      key={`ray${k}`}
                      x1={C.x}
                      y1={C.y}
                      x2={C.x + rr * Math.cos(a)}
                      y2={C.y - rr * Math.sin(a)}
                      stroke="#27272a"
                      strokeWidth={1}
                    />
                  )
                })}
                {rings.map((r) => (
                  <text key={`rl${r}`} x={C.x + r * view.s + 4} y={C.y - 4} fontSize={10} className="fill-zinc-600 font-mono">
                    {fixed(r)}
                  </text>
                ))}
                {/* swept area fill */}
                {fillD && <path d={fillD} fill="#10b981" fillOpacity={0.15} stroke="none" />}
                {/* curve */}
                {sweepD && (
                  <motion.path
                    d={sweepD}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth={3}
                    strokeLinecap="round"
                    initial={reduced ? false : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                )}
                {/* radius line + angle arc + current point */}
                {Number.isFinite(rNow) && (
                  <g>
                    <line x1={C.x} y1={C.y} x2={PNow.x} y2={PNow.y} stroke="#2dd4bf" strokeWidth={2} />
                    {thCurS > 0.03 && thCurS <= 3 * Math.PI && (() => {
                      const a = Math.min(thCurS, 2 * Math.PI)
                      const arcR = 30
                      const ex = C.x + arcR * Math.cos(a)
                      const ey = C.y - arcR * Math.sin(a)
                      return (
                        <path
                          d={`M${C.x + arcR} ${C.y} A${arcR} ${arcR} 0 ${a > Math.PI ? 1 : 0} 0 ${ex.toFixed(1)} ${ey.toFixed(1)}`}
                          fill="none"
                          stroke="#2dd4bf"
                          strokeWidth={1.5}
                          opacity={0.8}
                        />
                      )
                    })()}
                    <circle cx={PNow.x} cy={PNow.y} r={6} fill="#fbbf24" stroke="#451a03" strokeWidth={2} />
                    <circle cx={C.x} cy={C.y} r={3} fill="#71717a" />
                  </g>
                )}
              </g>
            </svg>
          ) : (
            <div className="p-4">
              <ErrorBox xErr={rComp.ok ? undefined : rComp.error} />
            </div>
          )}
        </div>
        <div className="border-t border-border px-4 py-2 font-mono text-[11px] text-muted-foreground">
          emerald: curve + swept area (15% fill) · teal: current radius r(θ) and angle arc
        </div>
      </div>

      {/* controls + readouts */}
      <div className="flex flex-col gap-4">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-3 flex items-center gap-2">
            <Orbit className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Polar curve</span>
          </div>
          <Select value={presetId} onValueChange={loadPreset}>
            <SelectTrigger size="sm" className="h-9 w-full bg-card text-xs" aria-label="polar preset">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {POLAR_PRESETS.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="mt-3 flex items-center gap-2">
            <span className="w-14 shrink-0 font-mono text-xs text-amber-300">r(θ) =</span>
            <Input value={rSrc} onChange={(e) => setRSrc(e.target.value)} className="bg-card font-mono text-xs" aria-label="r of theta expression" />
          </div>
          <div className="mt-3 space-y-2">
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">θ start</span>
                <span className="font-mono text-[11px] text-foreground">{piTex(thMin)}</span>
              </div>
              <Slider
                value={[thMin]}
                min={-12.57}
                max={0}
                step={0.01}
                onValueChange={(v) => setThMin(Math.min(v[0] ?? 0, thMax - 0.5))}
                aria-label="theta start"
              />
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">θ end</span>
                <span className="font-mono text-[11px] text-foreground">{piTex(thMax)}</span>
              </div>
              <Slider
                value={[thMax]}
                min={0.5}
                max={25.2}
                step={0.01}
                onValueChange={(v) => setThMax(Math.max(v[0] ?? 1, thMin + 0.5))}
                aria-label="theta end"
              />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500" onClick={onPlayToggle}>
              {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              {playing ? 'Pause' : 'Sweep θ'}
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => {
                setPlaying(false)
                setThCur(thMax)
              }}
              aria-label="show full curve"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </Button>
            <div className="flex min-w-[110px] flex-1 items-center gap-2">
              <Gauge className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              <Slider value={[speed]} min={0.25} max={3} step={0.25} onValueChange={(v) => setSpeed(v[0] ?? 1)} aria-label="sweep speed" />
            </div>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">{preset.note}</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Area in polar coordinates
            </span>
          </div>
          {ready ? (
            <>
              <TeX
                display
                tex={`A \\;=\\; \\tfrac{1}{2}\\int_{${piTex(thMin)}}^{${piTex(thMax)}} \\bigl(${rTex}\\bigr)^{2}\\, d\\theta \\;\\approx\\; ${fmtTex(areaTotal)}`}
                className="text-xs"
              />
              <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs">
                <span className="rounded-md border border-border bg-muted/40 px-2 py-1 text-foreground">
                  swept so far: {fmt(areaSoFar, 3)}
                </span>
                <span className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-emerald-400">
                  total: {fmt(areaTotal, 3)}
                </span>
                <span className="rounded-md border border-teal-500/40 bg-teal-500/10 px-2 py-1 text-teal-300">
                  r(θ) = {fmt(rNow, 3)}
                </span>
              </div>
              <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">
                The area formula <TeX tex="A = \tfrac{1}{2}\int r^{2}\,d\theta" /> comes from summing thin circular
                sectors of area <TeX tex="\tfrac{1}{2}r^{2}\,d\theta" /> (Stewart §10.4).
              </p>
            </>
          ) : (
            <p className="text-xs text-muted-foreground">Fix the expression for r(θ) to compute its area.</p>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* surfaces tab (orthographic 3D-lite)                                  */
/* ------------------------------------------------------------------ */

interface SurfacePreset {
  id: string
  label: string
  tex: string
  half: number
  fn: (x: number, y: number) => number
}

const SURF_PRESETS: SurfacePreset[] = [
  {
    id: 'paraboloid',
    label: 'Paraboloid z = x² + y²',
    tex: 'z = x^{2} + y^{2}',
    half: 1.5,
    fn: (x, y) => x * x + y * y,
  },
  {
    id: 'ripple',
    label: 'Ripple z = sin √(x² + y²)',
    tex: 'z = \\sin\\sqrt{x^{2} + y^{2}}',
    half: 4.5,
    fn: (x, y) => Math.sin(Math.hypot(x, y)),
  },
  {
    id: 'saddle',
    label: 'Saddle z = x² − y²',
    tex: 'z = x^{2} - y^{2}',
    half: 1.5,
    fn: (x, y) => x * x - y * y,
  },
  {
    id: 'hemisphere',
    label: 'Hemisphere z = √(4 − x² − y²)',
    tex: 'z = \\sqrt{4 - x^{2} - y^{2}}',
    half: 2.05,
    fn: (x, y) => {
      const q = 4 - x * x - y * y
      return q < 0 ? NaN : Math.sqrt(q)
    },
  },
]

const G = 22
const C_EM = [16, 185, 129]
const C_AM = [251, 191, 36]

function surfColor(t: number): string {
  const r = Math.round(C_EM[0] + (C_AM[0] - C_EM[0]) * t)
  const g = Math.round(C_EM[1] + (C_AM[1] - C_EM[1]) * t)
  const b = Math.round(C_EM[2] + (C_AM[2] - C_EM[2]) * t)
  return `rgb(${r},${g},${b})`
}

function SurfacesTab() {
  const reduced = useReducedMotion() ?? false
  const [presetId, setPresetId] = useState('paraboloid')
  const [yaw, setYaw] = useState(-0.65)
  const [pitch, setPitch] = useState(-0.95)
  const [autoRotate, setAutoRotate] = useState(!reduced)
  const [showLevels, setShowLevels] = useState(true)
  const dragRef = useRef<{ on: boolean; x: number; y: number }>({ on: false, x: 0, y: 0 })

  const preset = SURF_PRESETS.find((p) => p.id === presetId) ?? SURF_PRESETS[0]

  const { half, zmin, zmax, quads } = useMemo(() => {
    const hf = preset.half
    const z: number[][] = []
    let zlo = Infinity
    let zhi = -Infinity
    for (let i = 0; i <= G; i++) {
      const row: number[] = []
      const x = -hf + (2 * hf * i) / G
      for (let j = 0; j <= G; j++) {
        const y = -hf + (2 * hf * j) / G
        const v = preset.fn(x, y)
        row.push(v)
        if (Number.isFinite(v)) {
          zlo = Math.min(zlo, v)
          zhi = Math.max(zhi, v)
        }
      }
      z.push(row)
    }
    if (!Number.isFinite(zlo)) {
      zlo = 0
      zhi = 1
    }
    if (zhi - zlo < 1e-9) zhi = zlo + 1
    const qs: { p: [number, number, number][]; t: number }[] = []
    for (let i = 0; i < G; i++) {
      for (let j = 0; j < G; j++) {
        const z00 = z[i][j]
        const z10 = z[i + 1][j]
        const z11 = z[i + 1][j + 1]
        const z01 = z[i][j + 1]
        if (![z00, z10, z11, z01].every((v) => Number.isFinite(v))) continue
        const x0 = -hf + (2 * hf * i) / G
        const x1 = -hf + (2 * hf * (i + 1)) / G
        const y0 = -hf + (2 * hf * j) / G
        const y1 = -hf + (2 * hf * (j + 1)) / G
        qs.push({
          p: [
            [x0, y0, z00],
            [x1, y0, z10],
            [x1, y1, z11],
            [x0, y1, z01],
          ],
          t: (z00 + z10 + z11 + z01) / 4 / (zhi - zlo),
        })
      }
    }
    return { half: hf, zmin: zlo, zmax: zhi, quads: qs }
  }, [preset])

  /* level curves via marching squares on the grid */
  const levelSegs = useMemo(() => {
    if (!showLevels) return []
    const segs: { x1: number; y1: number; x2: number; y2: number; t: number }[] = []
    const NL = 7
    for (let l = 1; l <= NL; l++) {
      const L = zmin + ((zmax - zmin) * l) / (NL + 1)
      const t = (L - zmin) / (zmax - zmin)
      for (let i = 0; i < G; i++) {
        for (let j = 0; j < G; j++) {
          const x0 = -half + (2 * half * i) / G
          const x1 = -half + (2 * half * (i + 1)) / G
          const y0 = -half + (2 * half * j) / G
          const y1 = -half + (2 * half * (j + 1)) / G
          const corners: [number, number, number][] = [
            [x0, y0, preset.fn(x0, y0)],
            [x1, y0, preset.fn(x1, y0)],
            [x1, y1, preset.fn(x1, y1)],
            [x0, y1, preset.fn(x0, y1)],
          ]
          if (!corners.every((c) => Number.isFinite(c[2]))) continue
          const crossings: [number, number][] = []
          for (let e = 0; e < 4; e++) {
            const a = corners[e]
            const b = corners[(e + 1) % 4]
            if ((a[2] - L) * (b[2] - L) < 0) {
              const u = (L - a[2]) / (b[2] - a[2])
              crossings.push([a[0] + u * (b[0] - a[0]), a[1] + u * (b[1] - a[1])])
            }
          }
          if (crossings.length === 2) segs.push({ x1: crossings[0][0], y1: crossings[0][1], x2: crossings[1][0], y2: crossings[1][1], t })
          else if (crossings.length === 4) {
            segs.push({ x1: crossings[0][0], y1: crossings[0][1], x2: crossings[1][0], y2: crossings[1][1], t })
            segs.push({ x1: crossings[2][0], y1: crossings[2][1], x2: crossings[3][0], y2: crossings[3][1], t })
          }
        }
      }
    }
    return segs
  }, [showLevels, zmin, zmax, half, preset])

  /* slow auto-rotation */
  useEffect(() => {
    if (!autoRotate) return
    let raf = 0
    let last = performance.now()
    let acc = 0
    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      acc += dt
      if (acc >= 0.033) {
        if (!dragRef.current.on) setYaw((y) => y + acc * 0.4)
        acc = 0
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [autoRotate])

  const zspan = zmax - zmin
  const floorZ = zmin - 0.175 * zspan

  const project = (x: number, y: number, z: number): { x: number; y: number; d: number } => {
    const X = x / half
    const Y = y / half
    const Z = ((z - zmin) / zspan) * 2 - 1
    const cyw = Math.cos(yaw)
    const syw = Math.sin(yaw)
    const x1 = X * cyw - Y * syw
    const y1 = X * syw + Y * cyw
    const cp = Math.cos(pitch)
    const sp = Math.sin(pitch)
    const y2 = y1 * cp - Z * sp
    const z2 = y1 * sp + Z * cp
    return { x: x1, y: -y2, d: z2 }
  }

  const projQuads = quads
    .map((q) => {
      const pr = q.p.map((p) => project(p[0], p[1], p[2]))
      const d = (pr[0].d + pr[1].d + pr[2].d + pr[3].d) / 4
      return { pr, d, t: q.t }
    })
    .sort((A, B) => A.d - B.d)

  const floorCorners = [
    project(-half, -half, floorZ),
    project(half, -half, floorZ),
    project(half, half, floorZ),
    project(-half, half, floorZ),
  ]

  /* fit everything into the canvas */
  let bx0 = Infinity
  let bx1 = -Infinity
  let by0 = Infinity
  let by1 = -Infinity
  const grow = (p: { x: number; y: number; d: number }): void => {
    if (p.x < bx0) bx0 = p.x
    if (p.x > bx1) bx1 = p.x
    if (p.y < by0) by0 = p.y
    if (p.y > by1) by1 = p.y
  }
  for (const q of projQuads) for (const p of q.pr) grow(p)
  for (const p of floorCorners) grow(p)
  if (bx1 < bx0) {
    bx0 = -1
    bx1 = 1
  }
  if (by1 < by0) {
    by0 = -1
    by1 = 1
  }
  const M = 56
  const fs = Math.min((W - 2 * M) / (bx1 - bx0), (H - 2 * M) / (by1 - by0))
  const fx = (p: { x: number; y: number }): number => W / 2 + (p.x - (bx0 + bx1) / 2) * fs
  const fy = (p: { x: number; y: number }): number => H / 2 + (p.y - (by0 + by1) / 2) * fs

  const originP = project(0, 0, floorZ)
  const ox = fx(originP)
  const oy = fy(originP)
  const axisX = project(1.25 * half, 0, floorZ)
  const axisY = project(0, 1.25 * half, floorZ)
  const axisZ = project(0, 0, zmax + 0.18 * zspan)
  const axisXL = project(1.34 * half, 0, floorZ)
  const axisYL = project(0, 1.34 * half, floorZ)
  const axisZL = project(0, 0, zmax + 0.26 * zspan)

  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {/* canvas */}
      <div className="overflow-hidden rounded-xl border border-border bg-card xl:col-span-2">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Orthographic surface plot
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-muted-foreground">Auto-rotate</span>
              <Switch checked={autoRotate} onCheckedChange={setAutoRotate} aria-label="toggle auto rotation" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-muted-foreground">Level curves</span>
              <Switch checked={showLevels} onCheckedChange={setShowLevels} aria-label="toggle level curves" />
            </div>
          </div>
        </div>
        <div className="p-2">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full touch-none"
            role="img"
            aria-label={`Rotatable three-dimensional plot of the surface ${preset.label} with height colored from emerald to amber`}
            style={{ cursor: 'grab' }}
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId)
              dragRef.current = { on: true, x: e.clientX, y: e.clientY }
            }}
            onPointerMove={(e) => {
              if (!dragRef.current.on) return
              const dx = e.clientX - dragRef.current.x
              const dy = e.clientY - dragRef.current.y
              dragRef.current = { on: true, x: e.clientX, y: e.clientY }
              setYaw((y) => y + dx * 0.008)
              setPitch((p) => Math.max(-1.5, Math.min(-0.15, p + dy * 0.006)))
            }}
            onPointerUp={() => {
              dragRef.current = { on: false, x: 0, y: 0 }
            }}
            onPointerLeave={() => {
              dragRef.current = { on: false, x: 0, y: 0 }
            }}
          >
            {/* floor + level curves + axes */}
            <polygon
              points={floorCorners.map((p) => `${fx(p).toFixed(1)},${fy(p).toFixed(1)}`).join(' ')}
              fill="rgba(16,185,129,0.05)"
              stroke="#3f3f46"
              strokeWidth={1}
            />
            {levelSegs.map((s, i) => {
              const a = project(s.x1, s.y1, floorZ)
              const b = project(s.x2, s.y2, floorZ)
              return (
                <line
                  key={`lv${i}`}
                  x1={fx(a)}
                  y1={fy(a)}
                  x2={fx(b)}
                  y2={fy(b)}
                  stroke="#10b981"
                  strokeWidth={1.3}
                  opacity={0.25 + 0.5 * s.t}
                />
              )
            })}
            <line x1={ox} y1={oy} x2={fx(axisX)} y2={fy(axisX)} stroke="#71717a" strokeWidth={1.5} />
            <line x1={ox} y1={oy} x2={fx(axisY)} y2={fy(axisY)} stroke="#71717a" strokeWidth={1.5} />
            <line x1={ox} y1={oy} x2={fx(axisZ)} y2={fy(axisZ)} stroke="#fbbf24" strokeWidth={1.5} />
            <circle cx={ox} cy={oy} r={2.5} fill="#71717a" />
            <text x={fx(axisXL)} y={fy(axisXL)} fontSize={12} className="fill-zinc-400 font-mono">x</text>
            <text x={fx(axisYL)} y={fy(axisYL)} fontSize={12} className="fill-zinc-400 font-mono">y</text>
            <text x={fx(axisZL)} y={fy(axisZL)} fontSize={12} className="fill-amber-400 font-mono">z</text>

            {/* surface, painter's algorithm */}
            {projQuads.map((q, i) => (
              <polygon
                key={`q${i}`}
                points={q.pr.map((p) => `${fx(p).toFixed(1)},${fy(p).toFixed(1)}`).join(' ')}
                fill={surfColor(q.t)}
                stroke="rgba(9,9,11,0.5)"
                strokeWidth={0.6}
              />
            ))}
          </svg>
        </div>
        <div className="border-t border-border px-4 py-2 font-mono text-[11px] text-muted-foreground">
          drag to rotate · height colored emerald (low) to amber (high) · level curves projected on the floor plane
        </div>
      </div>

      {/* controls + readouts */}
      <div className="flex flex-col gap-4">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-3 flex items-center gap-2">
            <Mountain className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Surface</span>
          </div>
          <Select value={presetId} onValueChange={setPresetId}>
            <SelectTrigger size="sm" className="h-9 w-full bg-card text-xs" aria-label="surface preset">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {SURF_PRESETS.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="mt-3 rounded-lg bg-muted/30 p-3">
            <TeX display tex={preset.tex} className="text-sm" />
          </div>
          <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs">
            <span className="rounded-md border border-border bg-muted/40 px-2 py-1 text-foreground">
              z ∈ [{fmt(zmin, 2)}, {fmt(zmax, 2)}]
            </span>
            <span className="rounded-md border border-border bg-muted/40 px-2 py-1 text-foreground">
              grid {G}×{G}
            </span>
            <span className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-emerald-400">
              {quads.length} faces
            </span>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
            The wireframe uses an orthographic camera and painter’s algorithm (faces sorted far-to-near). Level curves
            are z-slices traced by marching squares and projected onto the floor — the same contours you would draw in a
            topographic map of the surface (Stewart §14.1).
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Trace points
          </div>
          <div className="space-y-1.5 font-mono text-[11px] leading-relaxed text-muted-foreground">
            <p>
              <span className="text-emerald-400">z(0, 0) = {fmt(preset.fn(0, 0), 3)}</span> — the vertex at the origin
            </p>
            <p>
              <span className="text-amber-300">z({fixed(preset.half)}, 0) = {fmt(preset.fn(preset.half, 0), 3)}</span>{' '}
              — edge midpoint on the x side
            </p>
            <p>
              <span className="text-teal-300">
                z({fixed(preset.half)}, {fixed(preset.half)}) = {fmt(preset.fn(preset.half, preset.half), 3)}
              </span>{' '}
              — domain corner
            </p>
          </div>
          <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
            For the hemisphere, corners outside the disk <TeX tex="x^{2} + y^{2} = 4" /> are undefined and their faces
            are skipped — the clipped edge you see is the equator.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* main component                                                      */
/* ------------------------------------------------------------------ */

export default function CurveLab() {
  return (
    <div className="flex flex-col gap-4">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <Spline className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Curve Lab — Parametric · Polar · Surfaces</h3>
            <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
              Ride a point along parametric curves with its velocity vector, sweep polar areas{' '}
              <TeX tex="\tfrac{1}{2}\int r^{2}\,d\theta" />, and rotate quadric surfaces by hand.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5">ch 10 · polar + parametric</span>
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5">ch 12 · quadric surfaces</span>
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5">ch 13 · space curves</span>
        </div>
      </div>

      <Tabs defaultValue="parametric" className="w-full">
        <TabsList className="h-auto w-full flex-wrap">
          <TabsTrigger value="parametric" className="gap-1.5 py-1.5 text-xs">
            <Spline className="h-3.5 w-3.5" />
            Parametric
          </TabsTrigger>
          <TabsTrigger value="polar" className="gap-1.5 py-1.5 text-xs">
            <Orbit className="h-3.5 w-3.5" />
            Polar
          </TabsTrigger>
          <TabsTrigger value="surfaces" className="gap-1.5 py-1.5 text-xs">
            <Mountain className="h-3.5 w-3.5" />
            Surfaces
          </TabsTrigger>
        </TabsList>
        <TabsContent value="parametric" className="mt-4">
          <ParametricTab />
        </TabsContent>
        <TabsContent value="polar" className="mt-4">
          <PolarTab />
        </TabsContent>
        <TabsContent value="surfaces" className="mt-4">
          <SurfacesTab />
        </TabsContent>
      </Tabs>

      {/* try this */}
      <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> on the Parametric tab, edit{' '}
          <span className="font-mono">y(t)</span> to <span className="font-mono">3*sin(2*t)</span> and watch the
          Lissajous figure knot itself — the arc-length integral updates as you type. Switch to Polar and sweep the
          limaçon <TeX tex="r = 1 + 2\cos\theta" />: the inner loop traces backwards through negative r, yet the
          total area still lands on <TeX tex="3\pi \approx 9.42" /> — check it against the swept-so-far counter.
          Then on Surfaces, drag the saddle <TeX tex="z = x^{2} - y^{2}" /> until you look straight down the
          z-axis — the level curves reveal two families of hyperbolas crossing at the saddle point.
        </p>
      </div>
    </div>
  )
}

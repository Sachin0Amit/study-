'use client'

import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Lightbulb, Split, Zap } from 'lucide-react'
import { Slider } from '@/components/ui/slider'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Formatting                                                         */
/* ------------------------------------------------------------------ */

function trim(v: number): string {
  if (!Number.isFinite(v)) return '—'
  const a = Math.abs(v)
  if (a === 0) return '0'
  if (a >= 100) return v.toFixed(0)
  if (a >= 10) return String(Number(v.toFixed(1)))
  if (a >= 1) return String(Number(v.toFixed(2)))
  return String(Number(v.toPrecision(3)))
}
function fmtV(v: number): string {
  return `${trim(v)} V`
}
function fmtA(i: number): string {
  const a = Math.abs(i)
  if (a >= 1) return `${trim(i)} A`
  if (a >= 1e-3) return `${trim(i * 1e3)} mA`
  return `${trim(i * 1e6)} µA`
}
function fmtW(p: number): string {
  const a = Math.abs(p)
  if (a >= 1) return `${trim(p)} W`
  if (a >= 1e-3) return `${trim(p * 1e3)} mW`
  return `${trim(p * 1e6)} µW`
}
function fmtOhm(r: number): string {
  if (r >= 1e6) return `${trim(r / 1e6)} MΩ`
  if (r >= 1000) return `${trim(r / 1000)} kΩ`
  return `${trim(r)} Ω`
}
function fmtT(v: number): string {
  if (!Number.isFinite(v)) return '\\mathrm{n/a}'
  return String(Number(v.toPrecision(3)))
}

/* ------------------------------------------------------------------ */
/*  The fixed network: node M is fed by V1+R1 and V2+R2;               */
/*  R3 leads from M to the port terminal A; terminal B is the rail.    */
/* ------------------------------------------------------------------ */

interface NetValues {
  v1: number
  v2: number
  r1: number
  r2: number
  r3: number
}

interface NetSolution {
  voc: number
  isc: number
  rth: number
  vmShort: number
}

function solveNet(n: NetValues): NetSolution {
  const num = n.v1 / n.r1 + n.v2 / n.r2
  const g12 = 1 / n.r1 + 1 / n.r2
  const voc = num / g12
  const vmShort = num / (g12 + 1 / n.r3)
  const isc = vmShort / n.r3
  const rth = n.r3 + 1 / g12
  return { voc, isc, rth, vmShort }
}

/** load voltage delivered by the FULL network */
function netLoadV(n: NetValues, rl: number): number {
  const num = n.v1 / n.r1 + n.v2 / n.r2
  const g12 = 1 / n.r1 + 1 / n.r2
  const vm = num / (g12 + 1 / (n.r3 + rl))
  return (vm * rl) / (rl + n.r3)
}

/* ------------------------------------------------------------------ */
/*  Presets — book-grounded networks                                   */
/* ------------------------------------------------------------------ */

interface Preset {
  key: string
  label: string
  net: NetValues
  note: string
  chip: string
}

const PRESETS: Preset[] = [
  {
    key: 'nilsson414',
    label: 'Nilsson 4.14',
    net: { v1: 40, v2: 24, r1: 6, r2: 6, r3: 5 },
    note: 'The assessment-problem target: V_th = 32 V, R_th = 8 Ω (I_sc = 4 A). Verify R_th the shortcut way — zero both sources and the network collapses to R₃ + R₁∥R₂ = 5 + 3 = 8 Ω — then set R_L = 8 Ω for P_max = V_th²/4R_th = 32 W at exactly 50 % efficiency.',
    chip: 'V_{th}=32\\;\\mathrm{V},\\quad R_{th}=8\\;\\Omega',
  },
  {
    key: 'superposition',
    label: 'Superposition pair',
    net: { v1: 12, v2: -4, r1: 4, r2: 4, r3: 2 },
    note: 'One source fights the other: with the port open, V₁ alone puts 6 V on node M, V₂ alone puts −2 V, and the sum is V_th = 4 V (Ch 3.2 superposition). R_th = 2 + 4∥4 = 4 Ω, I_sc = 1 A.',
    chip: 'V_{oc}=\\frac{V_1+V_2}{2}=4\\;\\mathrm{V},\\quad R_{th}=4\\;\\Omega',
  },
  {
    key: 'maxpower',
    label: 'Max-power match',
    net: { v1: 20, v2: 20, r1: 10, r2: 10, r3: 5 },
    note: 'Two identical 20 V sources in parallel pin node M at 20 V no matter the branch resistances — but the port still sees R_th = R₃ + R₁∥R₂ = 10 Ω. Flip on the max-power view and watch the load peak sit exactly at R_L = 10 Ω, P_max = 10 W.',
    chip: 'V_{th}=20\\;\\mathrm{V},\\quad R_{th}=R_3+R_1\\!\\parallel\\!R_2=10\\;\\Omega',
  },
]

/* ------------------------------------------------------------------ */
/*  SVG glyphs                                                         */
/* ------------------------------------------------------------------ */

const wire = 'stroke-zinc-500'

function ResV({
  x,
  cy,
  name,
  value,
  selected,
  onSelect,
}: {
  x: number
  cy: number
  name: string
  value: string
  selected: boolean
  onSelect: () => void
}) {
  const top = cy - 22
  const bot = cy + 22
  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`Edit ${name}, currently ${value}. Activate to select it for editing.`}
      aria-pressed={selected}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
      className="cursor-pointer focus-visible:outline-none"
    >
      <line x1={x} y1={top - 20} x2={x} y2={top} className={wire} strokeWidth={1.6} />
      <line x1={x} y1={bot} x2={x} y2={bot + 20} className={wire} strokeWidth={1.6} />
      {selected && (
        <rect x={x - 20} y={cy - 27} width={40} height={54} rx={7} className="fill-emerald-500/10 stroke-emerald-400" strokeWidth={1.2} strokeDasharray="4 3" />
      )}
      <rect x={x - 11} y={top} width={22} height={44} rx={3.5} className="fill-zinc-800 stroke-zinc-500" strokeWidth={1.6} />
      <text x={x + 17} y={cy - 4} fontSize={11} className="fill-zinc-200 font-mono">
        {name}
      </text>
      <text x={x + 17} y={cy + 8} fontSize={10} className="fill-emerald-300 font-mono">
        {value}
      </text>
    </g>
  )
}

function SrcV({
  x,
  cy,
  name,
  value,
  selected,
  onSelect,
}: {
  x: number
  cy: number
  name: string
  value: string
  selected: boolean
  onSelect: () => void
}) {
  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`Edit source ${name}, currently ${value}. Activate to select it for editing.`}
      aria-pressed={selected}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
      className="cursor-pointer focus-visible:outline-none"
    >
      {selected && (
        <rect x={x - 22} y={cy - 16} width={44} height={44} rx={7} className="fill-emerald-500/10 stroke-emerald-400" strokeWidth={1.2} strokeDasharray="4 3" />
      )}
      <line x1={x - 14} y1={cy - 7} x2={x + 14} y2={cy - 7} className="stroke-emerald-400" strokeWidth={2.4} />
      <line x1={x - 7} y1={cy + 5} x2={x + 7} y2={cy + 5} className="stroke-emerald-400" strokeWidth={4.5} />
      <text x={x - 26} y={cy - 6} fontSize={10.5} textAnchor="end" className="fill-zinc-200 font-mono">
        {name}
      </text>
      <text x={x - 26} y={cy + 7} fontSize={10} textAnchor="end" className="fill-amber-300 font-mono">
        {value}
      </text>
    </g>
  )
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

type SelKey = 'v1' | 'v2' | 'r1' | 'r2' | 'r3' | null

const RL_MIN = 1
const RL_MAX = 100
const rlToT = (rl: number): number => (Math.log10(rl / RL_MIN) / Math.log10(RL_MAX / RL_MIN)) * 100
const tToRl = (t: number): number => RL_MIN * Math.pow(RL_MAX / RL_MIN, t / 100)

export default function TheveninLab() {
  const reduce = useReducedMotion()
  const [net, setNet] = useState<NetValues>(PRESETS[0].net)
  const [rl, setRl] = useState(8)
  const [sel, setSel] = useState<SelKey>(null)
  const [maxPower, setMaxPower] = useState(false)
  const [stepsOpen, setStepsOpen] = useState(false)
  const [presetKey, setPresetKey] = useState('nilsson414')

  const sol = useMemo(() => solveNet(net), [net])
  const vth = sol.voc
  const rth = sol.rth
  const isc = sol.isc
  const pmax = (vth * vth) / (4 * rth)

  const vLnet = netLoadV(net, rl)
  const vLeq = (vth * rl) / (rl + rth)
  const iL = vth / (rl + rth)
  const pL = iL * iL * rl
  const eta = (rl / (rl + rth)) * 100
  const identical = Math.abs(vLnet - vLeq) < 1e-9

  const applyPreset = (key: string) => {
    const p = PRESETS.find((x) => x.key === key)
    if (!p) return
    setNet(p.net)
    setPresetKey(p.key)
  }
  const activePreset = PRESETS.find((p) => p.key === presetKey) ?? null

  const setVal = (k: keyof NetValues, v: number) => {
    setNet((prev) => ({ ...prev, [k]: v }))
    setPresetKey('')
  }

  /* ---------------- chart geometry ---------------- */
  const W = 640
  const H = 260
  const PL = 52
  const PR = 54
  const PT = 18
  const PB = 32
  const PW = W - PL - PR
  const PH = H - PT - PB
  const xOf = (r: number): number => PL + (Math.log10(r / RL_MIN) / 2) * PW

  const N_PTS = 140
  const curvePts = useMemo(() => {
    const pts: { rl: number; v: number; p: number; eta: number }[] = []
    for (let i = 0; i <= N_PTS; i++) {
      const r = RL_MIN * Math.pow(RL_MAX / RL_MIN, i / N_PTS)
      const v = netLoadV(net, r)
      const ii = vth / (r + rth)
      pts.push({ rl: r, v, p: ii * ii * r, eta: (r / (r + rth)) * 100 })
    }
    return pts
  }, [net, rth, vth])

  const vMax = Math.max(vth, 0) * 1.06
  const vMin = Math.min(vth, 0) * 1.06
  const pMaxAxis = Math.max(pmax * 1.14, pL * 1.14, 1e-12)

  const yV = (v: number): number => PT + ((vMax - v) / (vMax - vMin || 1)) * PH
  const yP = (p: number): number => PT + (1 - Math.min(p / pMaxAxis, 1.04)) * PH
  const yEta = (e: number): number => PT + (1 - e / 108) * PH

  const pathOf = (f: (p: { rl: number; v: number; p: number; eta: number }) => number): string =>
    curvePts
      .map((p, i) => `${i === 0 ? 'M' : 'L'}${xOf(p.rl).toFixed(1)},${f(p).toFixed(1)}`)
      .join('')

  const netPath = pathOf((p) => yV(p.v))
  const eqPath = pathOf((p) => yV((vth * p.rl) / (p.rl + rth)))
  const pNetPath = pathOf((p) => yP(p.p))
  const etaPath = pathOf((p) => yEta(p.eta))

  /* ---------------- editor panel data ---------------- */
  const editor =
    sel === 'v1' || sel === 'v2'
      ? { key: sel, label: sel === 'v1' ? 'source V₁' : 'source V₂', min: -24, max: 48, step: 1, val: sel === 'v1' ? net.v1 : net.v2, unit: 'V', isV: true }
      : sel
        ? { key: sel, label: `resistor ${sel.toUpperCase()}`, min: 1, max: 50, step: 1, val: net[sel], unit: 'Ω', isV: false }
        : null

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay, ease: 'easeOut' as const },
        }

  const steps: { title: string; tex: string }[] = [
    {
      title: '1 · Open the port — no current flows in R₃, so V_oc = V_M. KCL at node M:',
      tex: `V_{oc}\\left(\\tfrac{1}{R_1}+\\tfrac{1}{R_2}\\right)=\\frac{V_1}{R_1}+\\frac{V_2}{R_2}\\;\\Rightarrow\\;V_{oc}=\\frac{V_1R_2+V_2R_1}{R_1+R_2}=\\frac{${fmtT(net.v1)}\\cdot${fmtT(net.r2)}+${fmtT(net.v2)}\\cdot${fmtT(net.r1)}}{${fmtT(net.r1 + net.r2)}}=${fmtT(vth)}\\;\\mathrm{V}`,
    },
    {
      title: '2 · Short the port — V_A = 0, so all of R₃’s current exits through the short:',
      tex: `V_M^{sc}=\\frac{V_1/R_1+V_2/R_2}{\\frac{1}{R_1}+\\frac{1}{R_2}+\\frac{1}{R_3}}=${fmtT(sol.vmShort)}\\;\\mathrm{V},\\qquad I_{sc}=\\frac{V_M^{sc}}{R_3}=${fmtT(isc)}\\;\\mathrm{A}`,
    },
    {
      title: '3 · Thévenin resistance — divide, or simply zero the sources (each becomes a short):',
      tex: `R_{th}=\\frac{V_{oc}}{I_{sc}}=R_3+R_1\\!\\parallel\\!R_2=${fmtT(net.r3)}+${fmtT((net.r1 * net.r2) / (net.r1 + net.r2))}=${fmtT(rth)}\\;\\Omega`,
    },
    {
      title: '4 · Norton form — the current-source dual (Ch 3.3):',
      tex: `I_N=I_{sc}=${fmtT(isc)}\\;\\mathrm{A},\\qquad R_N=R_{th}=${fmtT(rth)}\\;\\Omega`,
    },
    {
      title: '5 · Load line — what any R_L sees, from either network:',
      tex: `V_L=V_{th}\\cdot\\frac{R_L}{R_L+R_{th}}=${fmtT(vth)}\\cdot\\frac{${fmtT(rl)}}{${fmtT(rl + rth)}}=${fmtT(vLeq)}\\;\\mathrm{V}`,
    },
    {
      title: '6 · Maximum power transfer (Ch 3.5) — peak at R_L = R_th:',
      tex: `P_{max}=\\frac{V_{th}^{2}}{4R_{th}}=\\frac{${fmtT(vth)}^{2}}{4\\cdot${fmtT(rth)}}=${fmtT(pmax)}\\;\\mathrm{W},\\qquad \\eta=\\frac{R_L}{R_L+R_{th}}=50\\%`,
    },
  ]

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Split className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Thévenin &amp; Norton Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Electronics Ch 3: collapse a two-source, three-resistor linear network into one battery and
            one resistor (or one current source and one resistor), then prove the equivalence on a load
            curve. Hughes 82–116 · Nilsson 118–175.
          </p>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {`Open-circuit voltage ${fmtV(vth)}. Short-circuit current ${fmtA(isc)}. Thévenin resistance ${fmtOhm(rth)}.`}
      </p>

      {/* presets */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Presets
        </span>
        {PRESETS.map((p) => (
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
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
          <p className="min-w-0 flex-1 text-[11px] leading-relaxed text-muted-foreground">
            {activePreset.note}
          </p>
          <span className="shrink-0 rounded-lg border border-border bg-card px-2.5 py-1 text-xs text-emerald-200">
            <TeX tex={activePreset.chip} />
          </span>
        </div>
      )}

      {/* network + equivalents */}
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <motion.div {...fade(0.05)} className="rounded-xl border border-border bg-background/50 p-2 sm:p-3">
          <div className="flex flex-wrap items-center gap-2 px-1">
            <h4 className="text-sm font-semibold text-foreground">The full network</h4>
            <span className="text-[11px] text-muted-foreground">— click any component to edit it</span>
          </div>
          <svg
            viewBox="0 0 640 280"
            className="mt-1 w-full select-none"
            role="img"
            aria-label={`Linear network: sources V1 ${fmtV(net.v1)} and V2 ${fmtV(net.v2)} with resistors R1 ${fmtOhm(net.r1)}, R2 ${fmtOhm(net.r2)}, R3 ${fmtOhm(net.r3)}, feeding port A B. Open-circuit voltage ${fmtV(vth)}, short-circuit current ${fmtA(isc)}, Thévenin resistance ${fmtOhm(rth)}.`}
          >
            {/* node M top rail */}
            <path d="M 170,70 H 410" className={wire} strokeWidth={1.8} fill="none" />
            <text x={280} y={58} fontSize={10} textAnchor="middle" className="fill-zinc-500 font-mono">
              node M
            </text>
            {/* ground rail */}
            <path d="M 170,235 H 500" className={wire} strokeWidth={1.8} fill="none" />
            {/* branch wires: rail to R, R to battery plates, battery to ground */}
            <path d="M 170,70 V 184 M 170,196 V 235" className={wire} strokeWidth={1.6} fill="none" />
            <path d="M 280,70 V 184 M 280,196 V 235" className={wire} strokeWidth={1.6} fill="none" />
            <path d="M 400,70 V 190" className={wire} strokeWidth={1.6} fill="none" />
            {/* branch 1: R1 over V1 */}
            <ResV x={170} cy={128} name="R₁" value={fmtOhm(net.r1)} selected={sel === 'r1'} onSelect={() => setSel('r1')} />
            <SrcV x={170} cy={190} name="V₁" value={fmtV(net.v1)} selected={sel === 'v1'} onSelect={() => setSel('v1')} />
            {/* branch 2: R2 over V2 */}
            <ResV x={280} cy={128} name="R₂" value={fmtOhm(net.r2)} selected={sel === 'r2'} onSelect={() => setSel('r2')} />
            <SrcV x={280} cy={190} name="V₂" value={fmtV(net.v2)} selected={sel === 'v2'} onSelect={() => setSel('v2')} />
            {/* branch 3: R3 out to the port */}
            <ResV x={400} cy={128} name="R₃" value={fmtOhm(net.r3)} selected={sel === 'r3'} onSelect={() => setSel('r3')} />
            <circle cx={400} cy={190} r={4.5} className="fill-amber-400" stroke="#18181b" strokeWidth={1.2} />
            <text x={414} y={194} fontSize={11} className="fill-amber-300 font-mono">
              A
            </text>
            <circle cx={470} cy={235} r={4.5} className="fill-amber-400" stroke="#18181b" strokeWidth={1.2} />
            <text x={470} y={258} fontSize={11} textAnchor="middle" className="fill-amber-300 font-mono">
              B
            </text>
            <path
              d="M 400,190 C 430,190 440,214 462,231"
              className="stroke-amber-400/50"
              strokeWidth={1.2}
              strokeDasharray="4 4"
              fill="none"
            />
            <text x={510} y={150} fontSize={10} className="fill-zinc-500 font-mono">
              port A–B
            </text>
            <text x={510} y={164} fontSize={9.5} className="fill-zinc-600 font-mono">
              (R_L hangs here)
            </text>
          </svg>

          {/* inline editor */}
          {editor ? (
            <div className="mt-1 rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-3 py-2.5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-xs font-semibold text-emerald-300">Editing {editor.label}</span>
                <span className="font-mono text-xs tabular-nums text-foreground">
                  {editor.isV ? fmtV(editor.val) : fmtOhm(editor.val)}
                </span>
                <button
                  type="button"
                  onClick={() => setSel(null)}
                  aria-label="Close the component editor"
                  className="ml-auto rounded-md border border-border bg-card px-2 py-0.5 text-[10px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
                >
                  done
                </button>
              </div>
              <Slider
                min={editor.min}
                max={editor.max}
                step={editor.step}
                value={[editor.val]}
                onValueChange={(v) => setVal(editor.key as keyof NetValues, v[0] ?? editor.val)}
                className="mt-2"
                aria-label={`${editor.label} value`}
              />
              <div className="mt-1 flex justify-between font-mono text-[10px] tabular-nums text-muted-foreground">
                <span>
                  {editor.min} {editor.unit}
                </span>
                <span>
                  {editor.max} {editor.unit}
                </span>
              </div>
            </div>
          ) : (
            <p className="mt-1 px-1 text-[11px] text-muted-foreground">
              Keyboard: Tab to a component glyph, Enter to select, then use the slider that appears.
              Sources accept negative values — try flipping V₂ to fight V₁.
            </p>
          )}
        </motion.div>

        <motion.div {...fade(0.1)} className="flex flex-col gap-3">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-2 sm:p-3">
            <div className="flex flex-wrap items-center gap-2 px-1">
              <h4 className="text-sm font-semibold text-foreground">Thévenin equivalent</h4>
              <span className="rounded-lg border border-border bg-card px-2 py-0.5 text-xs text-emerald-200">
                <TeX tex={`V_{th}=${fmtT(vth)}\\;\\mathrm{V},\\;R_{th}=${fmtT(rth)}\\;\\Omega`} />
              </span>
            </div>
            <svg viewBox="0 0 320 200" className="mt-1 w-full select-none" role="img" aria-label="Thévenin equivalent circuit: a voltage source V th in series with resistor R th, feeding terminals a and b.">
              <path d="M 60,60 H 270 M 270,60 V 150 M 270,150 H 60 M 60,60 V 88 M 60,112 V 150" className={wire} strokeWidth={1.7} fill="none" />
              <line x1={46} y1={88} x2={74} y2={88} className="stroke-emerald-400" strokeWidth={2.4} />
              <line x1={53} y1={100} x2={67} y2={100} className="stroke-emerald-400" strokeWidth={4.5} />
              <text x={40} y={72} fontSize={10} className="fill-zinc-400 font-mono">
                +
              </text>
              <text x={40} y={112} fontSize={10} className="fill-zinc-500 font-mono">
                −
              </text>
              <text x={22} y={95} fontSize={10.5} textAnchor="end" className="fill-amber-300 font-mono">
                {fmtV(vth)}
              </text>
              <rect x={128} y={49} width={46} height={22} rx={3.5} className="fill-zinc-800 stroke-zinc-500" strokeWidth={1.6} />
              <text x={151} y={42} fontSize={10.5} textAnchor="middle" className="fill-zinc-300 font-mono">
                R_th
              </text>
              <text x={151} y={84} fontSize={10} textAnchor="middle" className="fill-emerald-300 font-mono">
                {fmtOhm(rth)}
              </text>
              <circle cx={270} cy={60} r={4} className="fill-amber-400" stroke="#18181b" strokeWidth={1.2} />
              <circle cx={270} cy={150} r={4} className="fill-amber-400" stroke="#18181b" strokeWidth={1.2} />
              <text x={282} y={64} fontSize={11} className="fill-amber-300 font-mono">
                a
              </text>
              <text x={282} y={154} fontSize={11} className="fill-amber-300 font-mono">
                b
              </text>
            </svg>
          </div>

          <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-2 sm:p-3">
            <div className="flex flex-wrap items-center gap-2 px-1">
              <h4 className="text-sm font-semibold text-foreground">Norton equivalent</h4>
              <span className="rounded-lg border border-border bg-card px-2 py-0.5 text-xs text-teal-200">
                <TeX tex={`I_N=${fmtT(isc)}\\;\\mathrm{A},\\;R_N=${fmtT(rth)}\\;\\Omega`} />
              </span>
            </div>
            <svg viewBox="0 0 320 200" className="mt-1 w-full select-none" role="img" aria-label="Norton equivalent circuit: a current source I N in parallel with resistor R N, feeding terminals a and b.">
              <path d="M 70,60 H 230 M 230,60 V 150 M 230,150 H 70 M 70,60 V 89 M 70,121 V 150" className={wire} strokeWidth={1.7} fill="none" />
              <circle cx={70} cy={105} r={16} className="fill-zinc-900 stroke-zinc-500" strokeWidth={1.7} />
              <line x1={70} y1={114} x2={70} y2={96} className="stroke-emerald-400" strokeWidth={2.2} />
              <path d="M 70,96 l -4,7 l 8,0 z" className="fill-emerald-400" />
              <text x={40} y={95} fontSize={10.5} textAnchor="end" className="fill-amber-300 font-mono">
                {fmtA(isc)}
              </text>
              <rect x={59} y={82} width={22} height={46} rx={3.5} className="fill-zinc-800 stroke-zinc-500" strokeWidth={1.6} />
              <text x={96} y={100} fontSize={10.5} className="fill-zinc-300 font-mono">
                R_N
              </text>
              <text x={96} y={113} fontSize={10} className="fill-emerald-300 font-mono">
                {fmtOhm(rth)}
              </text>
              <circle cx={230} cy={60} r={4} className="fill-amber-400" stroke="#18181b" strokeWidth={1.2} />
              <circle cx={230} cy={150} r={4} className="fill-amber-400" stroke="#18181b" strokeWidth={1.2} />
              <text x={242} y={64} fontSize={11} className="fill-amber-300 font-mono">
                a
              </text>
              <text x={242} y={154} fontSize={11} className="fill-amber-300 font-mono">
                b
              </text>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* readouts */}
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <StatChip label="V_oc (Thévenin source)" value={fmtV(vth)} tone="border-emerald-500/40 bg-emerald-500/5 text-emerald-200" />
        <StatChip label="I_sc (Norton source)" value={fmtA(isc)} tone="border-teal-500/40 bg-teal-500/5 text-teal-200" />
        <StatChip label="R_th = R_N" value={fmtOhm(rth)} tone="border-amber-500/40 bg-amber-500/5 text-amber-200" />
        <StatChip label="P max at R_L = R_th" value={`${fmtW(pmax)} · η 50%`} tone="border-rose-500/40 bg-rose-500/5 text-rose-200" />
      </div>

      {/* load panel */}
      <motion.div {...fade(0.15)} className="mt-4 rounded-xl border border-border bg-background/50 p-3 sm:p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-sm font-semibold text-foreground">Load comparison — full network vs equivalent</h4>
          <button
            type="button"
            onClick={() => setMaxPower((m) => !m)}
            aria-pressed={maxPower}
            className={`ml-auto flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 ${
              maxPower
                ? 'border-amber-500/60 bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/40'
                : 'border-border bg-muted/30 text-muted-foreground hover:border-amber-500/40 hover:text-foreground'
            }`}
          >
            <Zap className="h-3.5 w-3.5" />
            Max power transfer mode
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex min-w-[220px] flex-1 items-center gap-2.5">
            <span className="text-xs text-muted-foreground">
              <TeX tex="R_L" />
            </span>
            <Slider
              min={0}
              max={100}
              step={0.5}
              value={[rlToT(rl)]}
              onValueChange={(v) => setRl(tToRl(v[0] ?? 0))}
              className="w-44"
              aria-label="Load resistance from 1 to 100 ohms, logarithmic"
            />
            <span className="w-16 font-mono text-xs tabular-nums text-emerald-300">{fmtOhm(rl)}</span>
          </div>
          <span className="rounded-lg border border-border bg-muted/30 px-2.5 py-1 font-mono text-[11px] tabular-nums text-muted-foreground">
            1–100 Ω · log scale
          </span>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="mt-2 w-full select-none"
          role="img"
          aria-label={
            maxPower
              ? `Chart of load power against load resistance: power peaks at ${fmtOhm(rth)} with ${fmtW(pmax)}, efficiency curve rising through 50 percent at the same point. Current load ${fmtOhm(rl)} draws ${fmtW(pL)}.`
              : `Chart of load voltage against load resistance from 1 to 100 ohms: the full network curve and the Thévenin equivalent curve lie exactly on top of each other. Current load ${fmtOhm(rl)} sees ${fmtV(vLeq)}.`
          }
        >
          {/* grid: x at 1,2,5,10,20,50,100 */}
          {[1, 2, 5, 10, 20, 50, 100].map((gx) => (
            <g key={`gx-${gx}`}>
              <line x1={xOf(gx)} y1={PT} x2={xOf(gx)} y2={PT + PH} className="stroke-zinc-500/15" strokeWidth={1} />
              <text x={xOf(gx)} y={H - PB + 16} textAnchor="middle" fontSize={10} className="fill-zinc-500 font-mono">
                {gx}
              </text>
            </g>
          ))}
          <text x={PL + PW / 2} y={H - 4} textAnchor="middle" fontSize={10} className="fill-zinc-400">
            R_L (Ω, log)
          </text>

          {!maxPower ? (
            <>
              {/* y grid for voltage: fractions of V_oc */}
              {[0, 0.25, 0.5, 0.75, 1].map((f) => (
                <g key={`gv-${f}`}>
                  <line x1={PL} y1={yV(vth * f)} x2={PL + PW} y2={yV(vth * f)} className="stroke-zinc-500/15" strokeWidth={1} />
                  <text x={PL - 7} y={yV(vth * f) + 3.5} textAnchor="end" fontSize={10} className="fill-zinc-500 font-mono">
                    {Math.round(f * 100)}%
                  </text>
                </g>
              ))}
              <text x={PL - 7} y={PT + 4} textAnchor="end" fontSize={10} className="fill-zinc-500 font-mono">
                {trim(vth)} V
              </text>
              <text x={PL - 34} y={PT + 16} fontSize={10} className="fill-zinc-400">
                V_L
              </text>

              <path d={netPath} className="stroke-emerald-400" strokeWidth={2.5} fill="none" strokeLinecap="round" />
              <path d={eqPath} className="stroke-amber-400" strokeWidth={1.8} fill="none" strokeDasharray="6 4" />

              {/* marker */}
              <line x1={xOf(rl)} y1={PT} x2={xOf(rl)} y2={PT + PH} className="stroke-zinc-400/40" strokeWidth={1} strokeDasharray="3 3" />
              <circle cx={xOf(rl)} cy={yV(vLnet)} r={5} className="fill-emerald-300" stroke="#18181b" strokeWidth={1.2} />
              <circle cx={xOf(rl)} cy={yV(vLeq)} r={3.2} className="fill-amber-400" />
            </>
          ) : (
            <>
              {/* right axis: efficiency */}
              {[0, 50, 100].map((e) => (
                <g key={`ge-${e}`}>
                  <line x1={PL} y1={yEta(e)} x2={PL + PW} y2={yEta(e)} className="stroke-zinc-500/15" strokeWidth={1} />
                  <text x={PL + PW + 8} y={yEta(e) + 3.5} fontSize={10} className="fill-teal-400 font-mono">
                    {e}%
                  </text>
                </g>
              ))}
              <text x={PL + PW + 8} y={PT + 4} fontSize={10} className="fill-zinc-400">
                η
              </text>
              {/* power axis labels */}
              {[0, 0.5, 1].map((f) => (
                <text key={`gp-${f}`} x={PL - 7} y={yP(f * pMaxAxis) + 3.5} textAnchor="end" fontSize={10} className="fill-zinc-500 font-mono">
                  {trim(f * pMaxAxis)} W
                </text>
              ))}
              <text x={PL - 34} y={PT + 16} fontSize={10} className="fill-zinc-400">
                P_L
              </text>

              <path d={pNetPath} className="stroke-emerald-400" strokeWidth={2.5} fill="none" strokeLinecap="round" />
              <path d={etaPath} className="stroke-teal-400" strokeWidth={1.6} fill="none" strokeDasharray="6 4" />

              {/* peak marker at R_th */}
              {rth >= RL_MIN && rth <= RL_MAX && (
                <>
                  <line x1={xOf(rth)} y1={PT} x2={xOf(rth)} y2={PT + PH} className="stroke-amber-400/70" strokeWidth={1.2} strokeDasharray="5 4" />
                  <circle cx={xOf(rth)} cy={yP(pmax)} r={4.5} className="fill-amber-400" stroke="#18181b" strokeWidth={1.2} />
                  <text x={xOf(rth) + 8} y={yP(pmax) - 6} fontSize={10} className="fill-amber-300 font-mono">
                    P_max = {fmtW(pmax)}
                  </text>
                  <text x={xOf(rth) + 8} y={yEta(50) + 4} fontSize={10} className="fill-teal-300 font-mono">
                    η = 50%
                  </text>
                </>
              )}

              {/* marker */}
              <line x1={xOf(rl)} y1={PT} x2={xOf(rl)} y2={PT + PH} className="stroke-zinc-400/40" strokeWidth={1} strokeDasharray="3 3" />
              <circle cx={xOf(rl)} cy={yP(pL)} r={5} className="fill-emerald-300" stroke="#18181b" strokeWidth={1.2} />
              <circle cx={xOf(rl)} cy={yEta(eta)} r={3.2} className="fill-teal-400" />
            </>
          )}
        </svg>

        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          <span className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] tabular-nums text-emerald-300">
            network V_L = {fmtV(vLnet)}
          </span>
          <span className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] tabular-nums text-amber-300">
            equivalent V_L = {fmtV(vLeq)}
          </span>
          <span
            className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] tabular-nums ${
              identical
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                : 'border-rose-500/40 bg-rose-500/10 text-rose-300'
            }`}
          >
            {identical ? 'identical — that is the theorem' : 'mismatch?!'}
          </span>
          <span className="rounded-lg border border-border bg-muted/30 px-2.5 py-1 font-mono text-[11px] tabular-nums text-muted-foreground">
            I_L = {fmtA(iL)}
          </span>
          <span className="rounded-lg border border-border bg-muted/30 px-2.5 py-1 font-mono text-[11px] tabular-nums text-muted-foreground">
            P_L = {fmtW(pL)}
          </span>
          <span className="rounded-lg border border-border bg-muted/30 px-2.5 py-1 font-mono text-[11px] tabular-nums text-muted-foreground">
            η = {trim(eta)}%
          </span>
        </div>
        <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
          Emerald solid: the full two-source network. Amber dashed: the Thévenin equivalent. The two
          curves lie exactly on top of one another — from outside the port, no measurement can tell the
          networks apart. That is the entire content of Thévenin’s theorem (Ch 3.3).
        </p>
      </motion.div>

      {/* computation steps */}
      <div className="mt-4 rounded-xl border border-border bg-background/50">
        <button
          type="button"
          onClick={() => setStepsOpen((o) => !o)}
          aria-expanded={stepsOpen}
          className="flex w-full items-center gap-2 px-3 py-2.5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 sm:px-4"
        >
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${stepsOpen ? 'rotate-180' : ''}`}
          />
          <h4 className="text-sm font-semibold text-foreground">
            How the numbers are computed — KCL/KVL solution, step by step
          </h4>
          <span className="ml-auto font-mono text-[10px] text-muted-foreground">
            {stepsOpen ? 'collapse' : 'expand'}
          </span>
        </button>
        {stepsOpen && (
          <motion.div
            {...fade(0)}
            className="space-y-3 border-t border-border px-3 pb-3 pt-3 sm:px-4"
          >
            {steps.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-muted/20 px-3 py-2">
                <p className="text-[11px] font-medium text-muted-foreground">{s.title}</p>
                <div className="mt-1 overflow-x-auto text-sm text-foreground">
                  <TeX display tex={s.tex} />
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          load <span className="font-medium text-foreground">Nilsson 4.14</span> and set R_L to 8 Ω —
          exactly R_th. The max-power view shows the peak sitting there with P = 32 W and η = 50 %; now
          halve R_L (more current, less voltage — P falls) and double it (η climbs toward 100 % but P
          falls again). Then click <span className="font-medium text-foreground">V₂</span> in the network
          and drag it to 0 V: a zeroed source is just a short, so its branch becomes a plain 6 Ω resistor
          and V_th drops to 20 V — superposition in one gesture. Finally, edit R₃ and watch the amber
          P_max marker slide — the peak always sits at R_L = R_th, whatever the network behind the port.
        </span>
      </div>
    </div>
  )
}

function StatChip({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className={`rounded-xl border px-3 py-2 ${tone}`}>
      <p className="text-[10px] font-semibold uppercase tracking-wider opacity-80">{label}</p>
      <p className="mt-0.5 font-mono text-sm tabular-nums">{value}</p>
    </div>
  )
}

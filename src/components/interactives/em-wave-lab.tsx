'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Waves, Aperture, Gauge, RadioTower, Play, Pause, Lightbulb,
  CheckCircle2, Ruler,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/* constants                                                            */
/* ------------------------------------------------------------------ */

const C_LIGHT = 2.99792458e8 // m/s (exact in the SI)
const MU0 = 4 * Math.PI * 1e-7
const EPS0 = 8.8541878128e-12
const W = 900
const H = 430
const YMID = 208

const C_PX = 108 // doppler wavefront speed, px/s
const F0 = 1.1 // doppler source frequency, Hz (lab units)
const T_EM = 1 / F0

const DOP_Y = 218
const ANT = { x: 450, y: 205 }

let idc = 0
const nid = () => `w${++idc}`

function fmtRatio(v: number): string {
  return v.toFixed(3)
}

/* segmented unit ring: arcs where the dipole radiates, sin^2 from vertical */
function buildUnitRing(): string {
  const segs: string[] = []
  const N = 36
  for (let i = 0; i < N; i++) {
    const a0 = (i / N) * 2 * Math.PI
    const a1 = ((i + 1) / N) * 2 * Math.PI
    // intensity at polar angle a is cos^2(a) (max horizontal, zero vertical)
    const strength = Math.cos(((a0 + a1) / 2)) ** 2
    if (strength < 0.07) continue
    const x0 = Math.cos(a0)
    const y0 = Math.sin(a0)
    const x1 = Math.cos(a1)
    const y1 = Math.sin(a1)
    segs.push(`M${x0.toFixed(4)} ${y0.toFixed(4)}A1 1 0 0 1 ${x1.toFixed(4)} ${y1.toFixed(4)}`)
  }
  return segs.join('')
}
const UNIT_RING = buildUnitRing()

interface Wavefront {
  id: string
  x: number
  y: number
  r: number
}

interface DopplerState {
  srcX: number
  obsX: number
  waves: Wavefront[]
  lastEmit: number
}

interface RadRing {
  id: string
  r: number
}

type Mode = 'plane' | 'polarize' | 'doppler' | 'radiate'

/* ------------------------------------------------------------------ */
/* component                                                            */
/* ------------------------------------------------------------------ */

export default function EmWaveLab() {
  const reduced = useReducedMotion() ?? false
  const [mode, setMode] = useState<Mode>('plane')
  const [playing, setPlaying] = useState(!reduced)
  const [speed, setSpeed] = useState(1)
  const [t, setT] = useState(0)
  const [scrub, setScrub] = useState(0.25)

  /* plane wave controls */
  const [waves, setWaves] = useState(3)
  const [amp, setAmp] = useState(1)

  /* polarization controls */
  const [thetaIn, setThetaIn] = useState(0)
  const [thetaPol, setThetaPol] = useState(30)
  const [analyzerOn, setAnalyzerOn] = useState(false)
  const [thetaAn, setThetaAn] = useState(75)

  /* doppler controls */
  const [dop, setDop] = useState<DopplerState>(() => seedDoppler(0.5, 300))
  const [betaS, setBetaS] = useState(0.5)
  const [obsMoving, setObsMoving] = useState(false)
  const [betaO, setBetaO] = useState(0)
  const [relativistic, setRelativistic] = useState(true)

  /* radiation controls */
  const [radRings, setRadRings] = useState<RadRing[]>([
    { id: nid(), r: 60 },
    { id: nid(), r: 190 },
    { id: nid(), r: 320 },
  ])
  const [radF, setRadF] = useState(0.5)
  const [showLobes, setShowLobes] = useState(true)

  const [presetKey, setPresetKey] = useState('plane')
  const [presetTick, setPresetTick] = useState(0)

  /* ---------- master animation loop ---------- */

  useEffect(() => {
    if (!playing) return
    let raf = 0
    let last = performance.now()
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000) * speed
      last = now
      if (mode === 'doppler') {
        setDop((d) => {
          let srcX = d.srcX + betaS * C_PX * dt
          if (srcX > 830) srcX = 70
          if (srcX < 70) srcX = 830
          let obsX = d.obsX + (obsMoving ? betaO * C_PX * dt : 0)
          if (obsX > 830) obsX = 70
          if (obsX < 70) obsX = 830
          const ws = d.waves.map((w) => ({ ...w, r: w.r + C_PX * dt })).filter((w) => w.r < 1100)
          let lastEmit = d.lastEmit + dt
          if (lastEmit >= T_EM) {
            lastEmit -= T_EM
            ws.push({ id: nid(), x: srcX, y: DOP_Y, r: 2 })
          }
          return { srcX, obsX, waves: ws, lastEmit }
        })
      } else if (mode === 'radiate') {
        setRadRings((rs) => {
          const grown = rs.map((r) => ({ ...r, r: r.r + 118 * dt })).filter((r) => r.r < 470)
          emitAcc.current += dt
          const half = 1 / (2 * radF)
          if (emitAcc.current >= half) {
            emitAcc.current -= half
            grown.push({ id: nid(), r: 6 })
          }
          return grown
        })
        setT((v) => v + dt)
      } else {
        setT((v) => v + dt)
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [playing, mode, speed, betaS, betaO, obsMoving, radF])

  const emitAcc = useRef(0)

  /* ---------- presets ---------- */

  const applyPreset = (key: string) => {
    setPresetKey(key)
    setPresetTick((n) => n + 1)
    if (key === 'plane') {
      setMode('plane')
      setWaves(3)
      setAmp(1)
      setT(0)
    } else if (key === 'pol45') {
      setMode('polarize')
      setThetaIn(0)
      setThetaPol(45)
      setAnalyzerOn(true)
      setThetaAn(90)
    } else if (key === 'doppler') {
      setMode('doppler')
      setBetaS(0.5)
      setObsMoving(false)
      setBetaO(0)
      setRelativistic(true)
      setDop(seedDoppler(0.5, 300))
    } else if (key === 'antenna') {
      setMode('radiate')
      setRadF(0.5)
      setShowLobes(true)
      setRadRings([{ id: nid(), r: 80 }, { id: nid(), r: 210 }, { id: nid(), r: 340 }])
      setT(0)
    }
  }

  const PRESETS: { key: string; label: string; note: string }[] = [
    {
      key: 'plane',
      label: 'Plane wave',
      note: 'A snapshot of light in flight: E (emerald) vertical, B (amber) horizontal, both surfing the teal z-arrow at c. Scrub the phase when paused to see the mutual regeneration freeze-frame.',
    },
    {
      key: 'pol45',
      label: 'Polarizers at 45°',
      note: 'Crossed polarizers at 0° and 90° would black out the wave — slide a 45° polarizer between them and light reappears: 50% then 50% of that. Malus in action.',
    },
    {
      key: 'doppler',
      label: 'Doppler 0.5c',
      note: 'A source racing at half the wave speed: wavefronts pile up ahead and stretch behind. Compare the classical and relativistic frequency predictions as you push v toward c.',
    },
    {
      key: 'antenna',
      label: 'Dipole antenna',
      note: 'Every acceleration radiates. A charge wiggling along the rod broadcasts strongest sideways and not at all along its motion — the sin² lobes.',
    },
  ]
  const activePreset = PRESETS.find((p) => p.key === presetKey) ?? null

  /* ---------- plane-wave geometry ---------- */

  const phase = playing ? t * 0.62 : scrub * 2 * Math.PI * waves
  const cyclesNow = phase / (2 * Math.PI)
  const lamUm = 1.2 / waves // µm
  const fReal = C_LIGHT / (lamUm * 1e-6)
  const e0 = 480 * amp
  const b0 = e0 / C_LIGHT

  const eCurve = useMemo(() => sampleCurve(waves, cyclesNow, 84, 0), [waves, cyclesNow])
  const bCurve = useMemo(() => sampleCurve(waves, cyclesNow, 84, 1), [waves, cyclesNow])

  /* ---------- polarization numbers ---------- */

  const d1 = (thetaIn - thetaPol) * (Math.PI / 180)
  const a1 = Math.abs(Math.cos(d1))
  const i1 = a1 * a1
  const d2 = (thetaPol - thetaAn) * (Math.PI / 180)
  const a2 = analyzerOn ? a1 * Math.abs(Math.cos(d2)) : 0
  const i2 = analyzerOn ? i1 * Math.cos(d2) ** 2 : 0

  /* ---------- doppler numbers ---------- */

  const dopplerRead = useMemo(() => {
    const { srcX, obsX } = dop
    const dir = obsX >= srcX ? 1 : -1
    const vs = betaS * C_LIGHT * dir // source velocity along the source->observer line
    const vo = (obsMoving ? betaO : 0) * C_LIGHT * dir
    const fClass = (F0 * (C_LIGHT - vo)) / (C_LIGHT - vs)
    const u = (vs - vo) / (1 - (vs * vo) / (C_LIGHT * C_LIGHT)) // source velocity in observer frame
    const betaApp = (u * dir) / C_LIGHT // positive = approaching
    const fRel = F0 * Math.sqrt((1 + betaApp) / (1 - betaApp))
    return { fClass, fRel, ratioClass: fClass / F0, ratioRel: fRel / F0, dir }
  }, [dop, betaS, betaO, obsMoving])

  /* ---------- render helpers ---------- */

  const MODES: { id: Mode; label: string; icon: typeof Waves }[] = [
    { id: 'plane', label: 'Plane wave', icon: Waves },
    { id: 'polarize', label: 'Polarization', icon: Aperture },
    { id: 'doppler', label: 'Doppler', icon: Gauge },
    { id: 'radiate', label: 'Radiation', icon: RadioTower },
  ]

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-xl bg-teal-500/10 p-2.5 ring-1 ring-teal-500/20">
            <Waves className="h-5 w-5 text-teal-400" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-foreground">Electromagnetic Wave Lab</h3>
            <p className="mt-0.5 max-w-xl text-sm text-muted-foreground">
              Physics Ch 13–14: ride a plane wave, rotate polarizers, chase Doppler shifts and watch an accelerating
              charge radiate.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            variant={playing ? 'outline' : 'default'}
            className={playing ? '' : 'bg-emerald-600 hover:bg-emerald-500'}
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'pause animation' : 'play animation'}
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {playing ? 'Pause' : 'Play'}
          </Button>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-1.5">
            <Gauge className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">speed</span>
            <Slider
              value={[speed]}
              onValueChange={(v) => setSpeed(v[0] ?? 1)}
              min={0.25}
              max={2}
              step={0.05}
              className="w-24"
              aria-label="animation speed"
            />
            <span className="w-8 font-mono text-xs tabular-nums text-foreground">{speed.toFixed(2)}×</span>
          </div>
        </div>
      </div>

      {/* mode tabs */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => {
              setMode(m.id)
              setPresetKey('')
            }}
            aria-pressed={mode === m.id}
            className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-500 ${
              mode === m.id
                ? 'border-teal-500/60 bg-teal-500/15 text-foreground ring-1 ring-teal-500/40'
                : 'border-border bg-muted/30 text-muted-foreground hover:border-teal-500/40 hover:text-foreground'
            }`}
          >
            <m.icon className="h-3.5 w-3.5" />
            {m.label}
          </button>
        ))}
      </div>

      {/* presets */}
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Presets</span>
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
        <motion.div
          key={presetTick}
          initial={reduced ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 rounded-xl border border-teal-500/30 bg-teal-500/5 px-3 py-2"
        >
          <p className="text-[11px] leading-relaxed text-muted-foreground">{activePreset.note}</p>
        </motion.div>
      )}

      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        {/* stage */}
        <div className="overflow-hidden rounded-xl border border-border bg-card xl:col-span-2">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stage</span>
            <span className="font-mono text-[11px] text-muted-foreground">
              {mode === 'plane' && 'E emerald · B amber · propagation z teal'}
              {mode === 'polarize' && 'Malus: the transmitted amplitude is the projection'}
              {mode === 'doppler' && 'wavefronts move at c — the source cannot outrun them'}
              {mode === 'radiate' && 'rings carry the sin²θ dipole pattern outward at c'}
            </span>
          </div>
          <div
            className="select-none p-2"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(82,82,91,0.2) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          >
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full touch-none"
              role="img"
              aria-label={
                mode === 'plane'
                  ? 'traveling electromagnetic wave: vertical E field and horizontal B field along z'
                  : mode === 'polarize'
                    ? 'wave passing through rotatable polarizer sheets'
                    : mode === 'doppler'
                      ? 'moving source emitting circular wavefronts with an observer'
                      : 'wiggling charge on an antenna radiating dipole-pattern rings'
              }
            >
              <AnimatePresence mode="wait">
                <motion.g
                  key={mode}
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduced ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {mode === 'plane' && <PlaneWaveView eCurve={eCurve} bCurve={bCurve} waves={waves} cycles={cyclesNow} />}
                  {mode === 'polarize' && (
                    <PolarizeView thetaIn={thetaIn} thetaPol={thetaPol} analyzerOn={analyzerOn} thetaAn={thetaAn} a1={a1} a2={a2} cycles={playing ? t * 0.5 : scrub * 3} />
                  )}
                  {mode === 'doppler' && (
                    <DopplerView dop={dop} betaS={betaS} obsMoving={obsMoving} betaO={betaO} />
                  )}
                  {mode === 'radiate' && <RadiateView rings={radRings} t={playing ? t : scrub * 6} f={radF} showLobes={showLobes} />}
                </motion.g>
              </AnimatePresence>
            </svg>
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col gap-4">
          {mode === 'plane' && (
            <>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-teal-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Wave controls</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-24 shrink-0 text-xs text-muted-foreground">wavelength</span>
                    <Slider value={[waves]} onValueChange={(v) => setWaves(v[0] ?? 3)} min={1.5} max={4.5} step={0.25} className="flex-1" aria-label="wavelength in wavelengths across window" />
                    <span className="w-16 shrink-0 rounded-md bg-muted/50 px-1.5 py-1 text-right font-mono text-xs tabular-nums text-foreground">{lamUm.toFixed(2)} µm</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-24 shrink-0 text-xs text-muted-foreground">E₀ amplitude</span>
                    <Slider value={[amp]} onValueChange={(v) => setAmp(v[0] ?? 1)} min={0.35} max={1} step={0.05} className="flex-1" aria-label="electric field amplitude" />
                    <span className="w-16 shrink-0 rounded-md bg-muted/50 px-1.5 py-1 text-right font-mono text-xs tabular-nums text-foreground">{(100 * amp).toFixed(0)}%</span>
                  </div>
                  {!playing && (
                    <div className="flex items-center gap-3">
                      <span className="w-24 shrink-0 text-xs text-muted-foreground">phase scrub</span>
                      <Slider value={[scrub]} onValueChange={(v) => setScrub(v[0] ?? 0)} min={0} max={1} step={0.01} className="flex-1" aria-label="frozen phase scrub" />
                    </div>
                  )}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-1.5 font-mono text-xs tabular-nums">
                  <div className="rounded-lg bg-muted/50 px-2.5 py-2">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">frequency</div>
                    <div className="text-teal-300">{(fReal / 1e12).toFixed(1)} THz</div>
                  </div>
                  <div className="rounded-lg bg-muted/50 px-2.5 py-2">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">E₀</div>
                    <div className="text-emerald-400">{e0.toFixed(0)} V/m</div>
                  </div>
                  <div className="rounded-lg bg-muted/50 px-2.5 py-2">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">B₀ = E₀/c</div>
                    <div className="text-amber-300">{(b0 * 1e6).toFixed(2)} µT</div>
                  </div>
                  <div className="rounded-lg bg-muted/50 px-2.5 py-2">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">E₀/B₀</div>
                    <div className="text-emerald-400">= c ✓</div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">Maxwell&apos;s speed check</span>
                </div>
                <div className="rounded-lg bg-muted/50 px-3 py-2.5 text-center">
                  <TeX display tex="c=\frac{1}{\sqrt{\mu_0\varepsilon_0}}=\frac{1}{\sqrt{(4\pi\times10^{-7})(8.854\times10^{-12})}}=2.998\times10^{8}\ \mathrm{m/s}" />
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                  Constants from electrostatics and magnetostatics alone predict the wave speed — and it matches the
                  measured speed of light. <TeX tex="\ E_0=cB_0" /> holds at every point of the picture: equal amplitudes
                  in 3-D, with B only looking shorter because its plane is turned from view.
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                  The mutual regeneration: a changing <TeX tex="E" /> curls a <TeX tex="B" /> (Ampère–Maxwell), and that
                  changing <TeX tex="B" /> curls the next <TeX tex="E" /> (Faraday) — the wave tows its own machinery
                  through empty space at <TeX tex="c" />.
                </p>
              </div>
            </>
          )}

          {mode === 'polarize' && (
            <>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Aperture className="h-4 w-4 text-teal-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Angles</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-28 shrink-0 text-xs text-muted-foreground">input polarization</span>
                    <Slider value={[thetaIn]} onValueChange={(v) => setThetaIn(v[0] ?? 0)} min={0} max={90} step={1} className="flex-1" aria-label="input polarization angle from vertical" />
                    <span className="w-12 shrink-0 rounded-md bg-muted/50 px-1.5 py-1 text-right font-mono text-xs tabular-nums text-foreground">{thetaIn}°</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-28 shrink-0 text-xs text-muted-foreground">polarizer axis</span>
                    <Slider value={[thetaPol]} onValueChange={(v) => setThetaPol(v[0] ?? 30)} min={0} max={90} step={1} className="flex-1" aria-label="polarizer transmission axis angle" />
                    <span className="w-12 shrink-0 rounded-md bg-muted/50 px-1.5 py-1 text-right font-mono text-xs tabular-nums text-foreground">{thetaPol}°</span>
                  </div>
                  <label className="flex cursor-pointer items-center justify-between gap-2 text-xs text-muted-foreground">
                    <span>analyzer (second sheet)</span>
                    <Switch checked={analyzerOn} onCheckedChange={setAnalyzerOn} aria-label="toggle analyzer polarizer" />
                  </label>
                  {analyzerOn && (
                    <div className="flex items-center gap-3">
                      <span className="w-28 shrink-0 text-xs text-muted-foreground">analyzer axis</span>
                      <Slider value={[thetaAn]} onValueChange={(v) => setThetaAn(v[0] ?? 75)} min={0} max={90} step={1} className="flex-1" aria-label="analyzer transmission axis angle" />
                      <span className="w-12 shrink-0 rounded-md bg-muted/50 px-1.5 py-1 text-right font-mono text-xs tabular-nums text-foreground">{thetaAn}°</span>
                    </div>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  {[
                    { label: 'incident I₀', val: 1, col: 'bg-emerald-500' },
                    { label: 'after polarizer', val: i1, col: 'bg-teal-500' },
                    ...(analyzerOn ? [{ label: 'after analyzer', val: i2, col: 'bg-amber-500' }] : []),
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-2">
                      <span className="w-28 shrink-0 text-[11px] text-muted-foreground">{row.label}</span>
                      <div className="h-3.5 flex-1 overflow-hidden rounded-full bg-muted/50">
                        <motion.div
                          className={`h-full rounded-full ${row.col}`}
                          animate={{ width: `${Math.max(0, row.val) * 100}%` }}
                          transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 160, damping: 24 }}
                        />
                      </div>
                      <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-foreground">
                        {(row.val * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-lg bg-muted/50 px-3 py-2 text-center">
                  <TeX
                    display
                    tex={`I=I_0\\cos^2\\theta=I_0\\cos^2(${Math.abs(thetaIn - thetaPol)}^\\circ)=${(i1 * 100).toFixed(1)}\\%\\ \\text{of } I_0${analyzerOn ? `\\ ;\\ I_2=${(i2 * 100).toFixed(1)}\\%` : ''}`}
                  />
                </div>
              </div>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-[11px] leading-relaxed text-muted-foreground">
                <span className="font-semibold text-amber-300">Malus&apos;s law:</span> only the component of{' '}
                <TeX tex="\mathbf{E}" /> along the sheet&apos;s transmission axis survives — amplitude projects as{' '}
                <TeX tex="\cos\theta" />, so intensity projects as <TeX tex="\cos^2\theta" />. Cross the analyzer at
                90° to extinguish the wave; then insert a 45° sheet in between and watch light sneak through twice.
              </div>
            </>
          )}

          {mode === 'doppler' && (
            <>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-teal-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Motion</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-28 shrink-0 text-xs text-muted-foreground">source speed</span>
                    <Slider value={[betaS]} onValueChange={(v) => setBetaS(v[0] ?? 0.5)} min={-0.8} max={0.8} step={0.05} className="flex-1" aria-label="source speed as fraction of wave speed" />
                    <span className="w-14 shrink-0 rounded-md bg-muted/50 px-1.5 py-1 text-right font-mono text-xs tabular-nums text-foreground">{betaS.toFixed(2)}c</span>
                  </div>
                  <label className="flex cursor-pointer items-center justify-between gap-2 text-xs text-muted-foreground">
                    <span>moving observer</span>
                    <Switch checked={obsMoving} onCheckedChange={setObsMoving} aria-label="toggle moving observer" />
                  </label>
                  {obsMoving && (
                    <div className="flex items-center gap-3">
                      <span className="w-28 shrink-0 text-xs text-muted-foreground">observer speed</span>
                      <Slider value={[betaO]} onValueChange={(v) => setBetaO(v[0] ?? 0)} min={-0.5} max={0.5} step={0.05} className="flex-1" aria-label="observer speed as fraction of wave speed" />
                      <span className="w-14 shrink-0 rounded-md bg-muted/50 px-1.5 py-1 text-right font-mono text-xs tabular-nums text-foreground">{betaO.toFixed(2)}c</span>
                    </div>
                  )}
                  <label className="flex cursor-pointer items-center justify-between gap-2 text-xs text-muted-foreground">
                    <span>relativistic Doppler</span>
                    <Switch checked={relativistic} onCheckedChange={setRelativistic} aria-label="toggle relativistic doppler formula" />
                  </label>
                </div>
                <div className="mt-3 space-y-1.5 font-mono text-xs tabular-nums">
                  <div className="flex items-center justify-between rounded-lg bg-muted/50 px-2.5 py-2">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">classical f_obs / f₀</span>
                    <span className="text-teal-300">{fmtRatio(dopplerRead.ratioClass)}×</span>
                  </div>
                  {relativistic && (
                    <div className="flex items-center justify-between rounded-lg bg-muted/50 px-2.5 py-2">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">relativistic f_obs / f₀</span>
                      <span className={dopplerRead.ratioRel > dopplerRead.ratioClass ? 'text-amber-300' : 'text-emerald-400'}>
                        {fmtRatio(dopplerRead.ratioRel)}×
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-3 space-y-1.5 rounded-lg bg-muted/50 px-3 py-2.5 text-center">
                  <TeX display tex="f_{\text{obs}}=f_0\,\frac{c-v_o}{c-v_s}" />
                  {relativistic && <TeX display tex="f_{\text{obs}}=f_0\sqrt{\frac{1+\beta}{1-\beta}}\quad(\beta\ \text{closing})" />}
                </div>
              </div>
              <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-4 text-[11px] leading-relaxed text-muted-foreground">
                The circles never break the wave speed <TeX tex="c" /> — the source only changes where they are born,
                bunching them ahead and thinning them behind. Near <TeX tex="v\to c" /> the classical guess diverges
                while relativity stays finite: no source outruns its own light. Watch the observer&apos;s counter flip
                from sharp to flat as the source sweeps past.
              </div>
            </>
          )}

          {mode === 'radiate' && (
            <>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="mb-3 flex items-center gap-2">
                  <RadioTower className="h-4 w-4 text-teal-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Antenna</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-28 shrink-0 text-xs text-muted-foreground">wiggle frequency</span>
                  <Slider value={[radF]} onValueChange={(v) => setRadF(v[0] ?? 0.5)} min={0.25} max={0.9} step={0.05} className="flex-1" aria-label="charge oscillation frequency" />
                  <span className="w-12 shrink-0 rounded-md bg-muted/50 px-1.5 py-1 text-right font-mono text-xs tabular-nums text-foreground">{radF.toFixed(2)} Hz</span>
                </div>
                <label className="mt-3 flex cursor-pointer items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span>intensity lobes overlay</span>
                  <Switch checked={showLobes} onCheckedChange={setShowLobes} aria-label="toggle intensity lobe overlay" />
                </label>
                <div className="mt-3 space-y-1.5 rounded-lg bg-muted/50 px-3 py-2.5 text-center">
                  <TeX display tex="\ I(\theta)\propto\sin^2\theta" />
                  <TeX display tex="\ E_{\text{rad}}\propto\frac{q\,a\sin\theta}{4\pi\varepsilon_0 c^2 r}" />
                </div>
              </div>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-[11px] leading-relaxed text-muted-foreground">
                <span className="font-semibold text-amber-300">Why rings?</span> Only accelerated charges radiate — a
                coasting charge drags its static field along silently. Here the wiggle kinks the field lines every half
                cycle, and each kink peels off as a ring traveling at <TeX tex="c" />. Nothing leaves along the axis of
                motion (<TeX tex="\theta=0" />); the broadcast is strongest broadside.
              </div>
            </>
          )}
        </div>
      </div>

      {/* try this */}
      <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> pause the plane wave and scrub the phase — note
          how <TeX tex="E" /> and <TeX tex="B" /> peak together (in phase, unlike an LC oscillator). Then open{' '}
          <span className="font-medium">Polarization</span>, cross the analyzer at 90° until the wave dies, and slide a
          sheet to 45° to resurrect it. In <span className="font-medium">Doppler</span>, push the source to 0.8c and
          compare the two frequency counters. Finally watch the antenna: try to find any radiation straight above the
          rod — the lobes say there is none.
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* plane wave view                                                      */
/* ------------------------------------------------------------------ */

function sampleCurve(waves: number, cycles: number, ampPx: number, which: 0 | 1): string {
  const x0 = 150
  const x1 = 860
  const beta = (24 * Math.PI) / 180
  const pts: string[] = []
  const N = 150
  for (let i = 0; i <= N; i++) {
    const u = i / N
    const s = Math.sin(2 * Math.PI * (waves * u - cycles))
    const x = x0 + u * (x1 - x0)
    if (which === 0) pts.push(`${x.toFixed(1)} ${(YMID - ampPx * s).toFixed(1)}`)
    else pts.push(`${(x + ampPx * s * Math.cos(beta)).toFixed(1)} ${(YMID + ampPx * s * Math.sin(beta)).toFixed(1)}`)
  }
  return 'M' + pts.join('L')
}

function PlaneWaveView({ eCurve, bCurve, waves, cycles }: { eCurve: string; bCurve: string; waves: number; cycles: number }) {
  const beta = (24 * Math.PI) / 180
  const arrowPts: { u: number; s: number }[] = []
  for (let i = 0; i <= 12; i++) {
    const u = i / 12
    const s = Math.sin(2 * Math.PI * (waves * u - cycles))
    if (Math.abs(s) > 0.22) arrowPts.push({ u, s })
  }
  const x0 = 150
  const x1 = 860
  const xAt = (u: number) => x0 + u * (x1 - x0)
  const AE = 84
  // crest marker: first u where phase = pi/2, riding forward
  const uc = ((0.25 + cycles) / waves) % 1
  const ucWrap = uc < 0 ? uc + 1 : uc
  const crestS = Math.sin(2 * Math.PI * (waves * ucWrap - cycles))
  return (
    <g>
      {/* propagation axis */}
      <line x1={110} y1={YMID} x2={884} y2={YMID} stroke="#52525b" strokeWidth={1.2} strokeDasharray="4 4" />
      <polygon points="884,208 872,203 872,213" fill="#2dd4bf" />
      <text x={874} y={190} fontSize={13} fontWeight={700} fill="#2dd4bf" textAnchor="end" className="font-mono">
        z — propagation at c
      </text>

      {/* axes triad */}
      <g transform="translate(105, 208)">
        <line x1={0} y1={0} x2={0} y2={-56} stroke="#10b981" strokeWidth={2} />
        <polygon points="0,-62 -4,-52 4,-52" fill="#10b981" />
        <text x={8} y={-48} fontSize={13} fontWeight={700} fill="#10b981" className="font-mono">E</text>
        <line x1={0} y1={0} x2={34} y2={16} stroke="#fbbf24" strokeWidth={2} />
        <polygon points="37,17.5 27,15 30.5,23" fill="#fbbf24" />
        <text x={40} y={26} fontSize={13} fontWeight={700} fill="#fbbf24" className="font-mono">B</text>
      </g>

      {/* B curve (behind) */}
      <path d={bCurve} fill="none" stroke="#fbbf24" strokeWidth={2.6} opacity={0.85} />
      {/* E curve (front) */}
      <path d={eCurve} fill="none" stroke="#10b981" strokeWidth={3} />

      {/* instantaneous vectors */}
      {arrowPts.map((p, i) => {
        const x = xAt(p.u)
        const ex = x
        const ey = YMID - AE * p.s
        const bx = x + AE * p.s * Math.cos(beta)
        const by = YMID + AE * p.s * Math.sin(beta)
        return (
          <g key={i} opacity={0.9}>
            <line x1={x} y1={YMID} x2={ex} y2={ey} stroke="#34d399" strokeWidth={1.6} />
            <circle cx={ex} cy={ey} r={3} fill="#34d399" />
            <line x1={x} y1={YMID} x2={bx} y2={by} stroke="#fbbf24" strokeWidth={1.6} />
            <circle cx={bx} cy={by} r={3} fill="#fbbf24" />
          </g>
        )
      })}

      {/* crest riding at c */}
      <g>
        <circle cx={xAt(ucWrap)} cy={YMID - AE * crestS} r={5.5} fill="#2dd4bf" opacity={0.95} />
        <text x={xAt(ucWrap)} y={YMID - AE * crestS - 12} fontSize={11} fontWeight={700} fill="#2dd4bf" textAnchor="middle" className="font-mono">
          crest → c
        </text>
      </g>

      <text x={150} y={70} fontSize={12} className="font-mono" fill="#a1a1aa">
        E × B points along z everywhere — energy flows forward at c (Poynting S = ε₀c²E×B)
      </text>
      <text x={150} y={396} fontSize={12} className="font-mono" fill="#a1a1aa">
        in phase · perpendicular · equal amplitude (E₀ = cB₀)
      </text>
    </g>
  )
}

/* ------------------------------------------------------------------ */
/* polarization view                                                    */
/* ------------------------------------------------------------------ */

function PolarizeView({
  thetaIn,
  thetaPol,
  analyzerOn,
  thetaAn,
  a1,
  a2,
  cycles,
}: {
  thetaIn: number
  thetaPol: number
  analyzerOn: boolean
  thetaAn: number
  a1: number
  a2: number
  cycles: number
}) {
  const A0 = 62
  const y = 215
  const rad = (d: number) => (d * Math.PI) / 180
  const waveLine = (x0: number, x1: number, amp: number, theta: number, waves: number, cyc: number): string => {
    const dir = { x: Math.sin(rad(theta)), y: -Math.cos(rad(theta)) }
    const pts: string[] = []
    const N = 80
    for (let i = 0; i <= N; i++) {
      const u = i / N
      const s = Math.sin(2 * Math.PI * (waves * u - cyc))
      const x = x0 + u * (x1 - x0)
      pts.push(`${(x + amp * s * dir.x).toFixed(1)} ${(y + amp * s * dir.y).toFixed(1)}`)
    }
    return 'M' + pts.join('L')
  }
  const panel = (cx: number, theta: number, label: string) => (
    <g transform={`rotate(${theta} ${cx} ${y})`}>
      <rect x={cx - 13} y={y - 165} width={26} height={330} rx={4} fill="rgba(63,63,70,0.5)" stroke="#a1a1aa" strokeWidth={1.5} />
      {Array.from({ length: 11 }, (_, i) => (
        <line key={i} x1={cx - 13} y1={y - 150 + i * 30} x2={cx + 13} y2={y - 150 + i * 30} stroke="#71717a" strokeWidth={2} />
      ))}
      <text
        x={cx}
        y={y - 178}
        fontSize={12}
        fontWeight={700}
        fill="#e4e4e7"
        textAnchor="middle"
        className="font-mono"
        transform={`rotate(${-theta} ${cx} ${y - 178})`}
      >
        {label} {theta}°
      </text>
    </g>
  )
  return (
    <g>
      <line x1={60} y1={y} x2={870} y2={y} stroke="#52525b" strokeWidth={1.2} strokeDasharray="4 4" />
      <text x={870} y={y - 10} fontSize={12} fill="#2dd4bf" fontWeight={700} textAnchor="end" className="font-mono">
        propagation →
      </text>

      {/* incident */}
      <path d={waveLine(70, 340, A0, thetaIn, 2.2, cycles)} fill="none" stroke="#10b981" strokeWidth={3} />
      <text x={70} y={72} fontSize={12} fill="#34d399" className="font-mono">
        incident · polarization {thetaIn}° from vertical
      </text>

      {panel(400, thetaPol, 'polarizer')}

      {/* transmitted by polarizer */}
      {a1 > 0.02 ? (
        <path d={waveLine(428, 620, A0 * a1, thetaPol, 2.2, cycles)} fill="none" stroke="#2dd4bf" strokeWidth={3} />
      ) : (
        <>
          <line x1={428} y1={y} x2={620} y2={y} stroke="#71717a" strokeWidth={3} />
          <text x={524} y={y - 14} fontSize={12} fill="#f43f5e" textAnchor="middle" className="font-mono">
            extinguished
          </text>
        </>
      )}

      {analyzerOn && (
        <>
          {panel(680, thetaAn, 'analyzer')}
          {a2 > 0.02 ? (
            <path d={waveLine(708, 866, A0 * a2, thetaAn, 2.2, cycles)} fill="none" stroke="#fbbf24" strokeWidth={3} />
          ) : (
            <>
              <line x1={708} y1={y} x2={866} y2={y} stroke="#71717a" strokeWidth={3} />
              <text x={786} y={y - 14} fontSize={12} fill="#f43f5e" textAnchor="middle" className="font-mono">
                extinguished
              </text>
            </>
          )}
        </>
      )}
      {!analyzerOn && (
        <text x={700} y={y + 90} fontSize={12} fill="#a1a1aa" className="font-mono">
          add the analyzer to test what survives
        </text>
      )}
      <text x={428} y={392} fontSize={12} fill="#a1a1aa" textAnchor="middle" className="font-mono">
        transmitted amplitude = E₀ cos θ · intensity = E₀² cos²θ
      </text>
    </g>
  )
}

/* ------------------------------------------------------------------ */
/* doppler view                                                          */
/* ------------------------------------------------------------------ */

function DopplerView({ dop, betaS, obsMoving, betaO }: { dop: DopplerState; betaS: number; obsMoving: boolean; betaO: number }) {
  return (
    <g>
      {/* wavefronts */}
      {dop.waves.map((w) => (
        <circle
          key={w.id}
          cx={w.x}
          cy={w.y}
          r={w.r}
          fill="none"
          stroke="#2dd4bf"
          strokeWidth={1.8}
          opacity={Math.max(0.08, 0.85 - (w.r / 1100) * 0.8)}
        />
      ))}

      {/* source */}
      <g transform={`translate(${dop.srcX},${DOP_Y})`}>
        <circle r={11} fill="rgba(16,185,129,0.25)" stroke="#10b981" strokeWidth={2.5} />
        <circle r={3.5} fill="#34d399" />
        <line
          x1={betaS > 0 ? 14 : -14}
          y1={0}
          x2={betaS > 0 ? 14 + 34 * Math.abs(betaS) : -14 - 34 * Math.abs(betaS)}
          y2={0}
          stroke="#fbbf24"
          strokeWidth={3}
          opacity={betaS !== 0 ? 1 : 0}
        />
        <polygon
          points={betaS > 0 ? `${14 + 34 * Math.abs(betaS) + 8},0 ${14 + 34 * Math.abs(betaS)},-5 ${14 + 34 * Math.abs(betaS)},5` : `${-14 - 34 * Math.abs(betaS) - 8},0 ${-14 - 34 * Math.abs(betaS)},-5 ${-14 - 34 * Math.abs(betaS)},5`}
          fill="#fbbf24"
          opacity={betaS !== 0 ? 1 : 0}
        />
        <text y={-24} fontSize={13} fontWeight={700} fill="#34d399" textAnchor="middle" className="font-mono">
          source {betaS.toFixed(2)}c
        </text>
        <text y={38} fontSize={11} fill="#a1a1aa" textAnchor="middle" className="font-mono">
          {betaS > 0.02 ? 'compressed ahead →' : betaS < -0.02 ? '← compressed behind' : 'stationary: even rings'}
        </text>
      </g>

      {/* observer */}
      <g transform={`translate(${dop.obsX},${DOP_Y})`}>
        <circle r={13} fill="rgba(45,212,191,0.15)" stroke="#2dd4bf" strokeWidth={2.5} />
        <circle r={4.5} fill="none" stroke="#2dd4bf" strokeWidth={2} />
        <text y={-24} fontSize={13} fontWeight={700} fill="#2dd4bf" textAnchor="middle" className="font-mono">
          observer {obsMoving ? `${betaO.toFixed(2)}c` : '(at rest)'}
        </text>
      </g>

      <text x={70} y={60} fontSize={12} fill="#a1a1aa" className="font-mono">
        each ring was born where the source was when it was emitted — read the spacing to see the shift
      </text>
      <text x={70} y={392} fontSize={12} fill="#a1a1aa" className="font-mono">
        rings expand at exactly c ({F0.toFixed(1)} Hz emission)
      </text>
    </g>
  )
}

/* ------------------------------------------------------------------ */
/* radiation view                                                        */
/* ------------------------------------------------------------------ */

function RadiateView({ rings, t, f, showLobes }: { rings: RadRing[]; t: number; f: number; showLobes: boolean }) {
  const wig = 44 * Math.sin(2 * Math.PI * f * 1.6 * t)
  const lobePath = useMemo(() => {
    const R = 225
    const pts: string[] = []
    for (let i = 0; i <= 72; i++) {
      const a = (i / 72) * 2 * Math.PI
      const r = R * Math.cos(a) ** 2
      pts.push(`${(ANT.x + r * Math.cos(a)).toFixed(1)} ${(ANT.y - r * Math.sin(a)).toFixed(1)}`)
    }
    return 'M' + pts.join('L') + 'Z'
  }, [])

  return (
    <g>
      {showLobes && (
        <>
          <path d={lobePath} fill="rgba(45,212,191,0.05)" stroke="#2dd4bf" strokeWidth={1.5} strokeDasharray="6 5" />
          <text x={ANT.x + 168} y={ANT.y - 8} fontSize={12} fontWeight={700} fill="#2dd4bf" className="font-mono">
            I ∝ sin²θ
          </text>
          <text x={ANT.x - 60} y={ANT.y - 178} fontSize={11} fill="#71717a" className="font-mono">
            zero along the axis
          </text>
        </>
      )}

      {/* radiation rings, segmented by the dipole pattern */}
      {rings.map((ring) => (
        <g key={ring.id} transform={`translate(${ANT.x},${ANT.y}) scale(${ring.r})`} opacity={Math.max(0.06, 1 - ring.r / 470)}>
          <path d={UNIT_RING} fill="none" stroke="#fbbf24" strokeWidth={1.8} vectorEffect="non-scaling-stroke" />
        </g>
      ))}

      {/* antenna rod + wiggling charge */}
      <line x1={ANT.x} y1={ANT.y - 62} x2={ANT.x} y2={ANT.y + 62} stroke="#a1a1aa" strokeWidth={4} strokeLinecap="round" />
      <g transform={`translate(${ANT.x},${ANT.y})`}>
        <circle cy={wig} r={9} fill="rgba(251,191,36,0.25)" stroke="#fbbf24" strokeWidth={2.5} />
        <text x={14} y={wig + 4} fontSize={13} fontWeight={800} fill="#fbbf24" className="font-mono">
          +q
        </text>
        <text x={0} y={-84} fontSize={12} fill="#a1a1aa" textAnchor="middle" className="font-mono">
          accelerating charge — the radiator
        </text>
        <text x={0} y={96} fontSize={11} fill="#a1a1aa" textAnchor="middle" className="font-mono">
          each half-cycle of the wiggle launches a ring
        </text>
      </g>
    </g>
  )
}

/* ------------------------------------------------------------------ */
/* doppler seeding                                                       */
/* ------------------------------------------------------------------ */

function seedDoppler(beta: number, srcX: number): DopplerState {
  const waves: Wavefront[] = []
  for (let k = 1; k <= 7; k++) {
    const r = k * (C_PX / F0)
    waves.push({ id: nid(), x: Math.max(70, Math.min(830, srcX - beta * r)), y: DOP_Y, r })
  }
  return { srcX, obsX: 720, waves, lastEmit: 0 }
}

'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Grid3x3, Lightbulb, RotateCcw, Star } from 'lucide-react'
import { TeX } from '@/components/math'
import { Button } from '@/components/ui/button'

/* ------------------------------------------------------------------ */
/*  K-map engine — prime implicants + exact minimum cover              */
/* ------------------------------------------------------------------ */

type CellState = 0 | 1 | 2 // 0 · 1 · X (don't care)
type VarCount = 2 | 3 | 4

interface Geom {
  vars: VarCount
  rows: number
  cols: number
  rowBits: number
  colBits: number
  rowGray: number[]
  colGray: number[]
  names: string[]
}

function geomFor(vars: VarCount): Geom {
  const rowBits = vars === 4 ? 2 : 1
  const colBits = vars === 2 ? 1 : 2
  return {
    vars,
    rows: 1 << rowBits,
    cols: 1 << colBits,
    rowBits,
    colBits,
    rowGray: rowBits === 2 ? [0, 1, 3, 2] : [0, 1],
    colGray: colBits === 2 ? [0, 1, 3, 2] : [0, 1],
    names: ['A', 'B', 'C', 'D'].slice(0, vars),
  }
}

const bitOf = (m: number, vars: number, v: number): number => (m >> (vars - 1 - v)) & 1
const bin = (m: number, width: number): string => m.toString(2).padStart(width, '0')

interface Group {
  key: string
  cells: number[]
  size: number
  lits: number
  tex: string
  rect: { r0: number; sr: number; c0: number; sc: number }
}

interface SolveResult {
  ones: number[]
  dcs: number[]
  primes: Group[]
  selected: Group[]
  essentials: Set<string>
}

/** Enumerate every valid prime rectangle (wrap-around allowed) and cover the 1s exactly. */
function solveMap(cells: CellState[], g: Geom): SolveResult {
  const n = g.rows * g.cols
  const idx = (r: number, c: number): number =>
    g.rowGray[((r % g.rows) + g.rows) % g.rows] * g.cols + g.colGray[((c % g.cols) + g.cols) % g.cols]
  const rectCells = (r0: number, sr: number, c0: number, sc: number): number[] => {
    const out: number[] = []
    for (let i = 0; i < sr; i++) for (let j = 0; j < sc; j++) out.push(idx(r0 + i, c0 + j))
    return out
  }
  const valid = (cs: number[]): boolean => cs.every((m) => cells[m] !== 0) && cs.some((m) => cells[m] === 1)

  const ones: number[] = []
  const dcs: number[] = []
  for (let m = 0; m < n; m++) {
    if (cells[m] === 1) ones.push(m)
    else if (cells[m] === 2) dcs.push(m)
  }

  const primes: Group[] = []
  const seen = new Set<string>()
  const spans = (dim: number): number[] => [1, 2, 4].filter((s) => s <= dim)

  for (const sr of spans(g.rows)) {
    for (const sc of spans(g.cols)) {
      for (let r0 = 0; r0 < g.rows; r0++) {
        if (sr === g.rows && r0 > 0) continue // identical full-span rectangles
        for (let c0 = 0; c0 < g.cols; c0++) {
          if (sc === g.cols && c0 > 0) continue
          const cs = rectCells(r0, sr, c0, sc)
          if (!valid(cs)) continue
          // prime check: a strictly larger valid rectangle must contain one of the two
          // doubled intervals in each dimension (minimal containing intervals on a cycle)
          let prime = true
          if (sr * 2 <= g.rows) {
            if (valid(rectCells(r0, sr * 2, c0, sc))) prime = false
            if (prime && valid(rectCells(r0 - sr, sr * 2, c0, sc))) prime = false
          }
          if (prime && sc * 2 <= g.cols) {
            if (valid(rectCells(r0, sr, c0, sc * 2))) prime = false
            if (valid(rectCells(r0, sr, c0 - sc, sc * 2))) prime = false
          }
          if (!prime) continue
          const key = [...cs].sort((a, b) => a - b).join(',')
          if (seen.has(key)) continue
          seen.add(key)
          const lits: { name: string; neg: boolean }[] = []
          for (let v = 0; v < g.vars; v++) {
            const b0 = bitOf(cs[0], g.vars, v)
            if (cs.every((m) => bitOf(m, g.vars, v) === b0)) lits.push({ name: g.names[v], neg: b0 === 0 })
          }
          primes.push({
            key,
            cells: cs,
            size: cs.length,
            lits: lits.length,
            tex: lits.length === 0 ? '1' : lits.map((l) => l.name + (l.neg ? "'" : '')).join(''),
            rect: { r0, sr, c0, sc },
          })
        }
      }
    }
  }

  // ---- cover: essentials first, then exact branch & bound ----
  const byMinterm = new Map<number, Group[]>()
  for (const m of ones) byMinterm.set(m, primes.filter((p) => p.cells.includes(m)))

  const essentials = new Set<string>()
  const selected: Group[] = []
  const covered = new Set<number>()
  for (const [, ps] of byMinterm) {
    if (ps.length === 1) {
      const p = ps[0]
      if (!essentials.has(p.key)) {
        essentials.add(p.key)
        selected.push(p)
        p.cells.forEach((m2) => covered.add(m2))
      }
    }
  }

  const litTotal = (arr: Group[]): number => arr.reduce((s, p) => s + p.lits, 0)
  const remaining = ones.filter((m) => !covered.has(m))
  let best: Group[] | null = null
  const rec = (unc: number[], acc: Group[]): void => {
    if (best !== null) {
      if (acc.length > best.length || (acc.length === best.length && litTotal(acc) >= litTotal(best))) return
    }
    if (unc.length === 0) {
      best = acc
      return
    }
    let target = unc[0]
    let fewest = Infinity
    for (const m of unc) {
      const k = (byMinterm.get(m) ?? []).length
      if (k < fewest) {
        fewest = k
        target = m
      }
    }
    for (const p of byMinterm.get(target) ?? []) {
      rec(
        unc.filter((m) => !p.cells.includes(m)),
        [...acc, p]
      )
    }
  }
  rec(remaining, selected)
  const chosen = best ?? selected
  chosen.sort((a, b) => b.size - a.size || a.tex.localeCompare(b.tex))

  return { ones, dcs, primes, selected: chosen, essentials }
}

/* ------------------------------------------------------------------ */
/*  presets + display constants                                        */
/* ------------------------------------------------------------------ */

interface Preset {
  label: string
  vars: VarCount
  ones: number[]
  dcs: number[]
  note: string
}

const PRESETS: Preset[] = [
  {
    label: 'Σm(0,1,2,4,5,6,8,9,12,13,14)',
    vars: 4,
    ones: [0, 1, 2, 4, 5, 6, 8, 9, 12, 13, 14],
    dcs: [],
    note: 'The classic 4-variable exercise: three essential primes — an octet plus two quads that wrap the map edges.',
  },
  {
    label: 'BCD invalid codes',
    vars: 4,
    ones: [1, 3, 5, 7, 9],
    dcs: [10, 11, 12, 13, 14, 15],
    note: 'Odd-digit detector for BCD input. Codes 1010–1111 never occur, so they are marked X — and eight groups merge into the single literal D.',
  },
  {
    label: 'Full adder cout',
    vars: 3,
    ones: [3, 5, 6, 7],
    dcs: [],
    note: 'Carry-out of A + B + carry-in C (3-variable map): the majority function AB + AC + BC.',
  },
  {
    label: 'XOR pattern',
    vars: 4,
    ones: [1, 2, 4, 7, 8, 11, 13, 14],
    dcs: [],
    note: 'Odd parity, A ⊕ B ⊕ C ⊕ D — a checkerboard. Every neighbour differs, so nothing groups and the map stays at eight single cells.',
  },
]

const GROUP_COLORS = ['#10b981', '#14b8a6', '#f59e0b', '#f43f5e', '#84cc16'] as const

const SIZE_NAME: Record<number, string> = { 1: 'single', 2: 'pair', 4: 'quad', 8: 'octet', 16: 'full map' }

function presetCells(p: Preset): CellState[] {
  const out: CellState[] = new Array(16).fill(0) as CellState[]
  p.ones.forEach((m) => {
    out[m] = 1
  })
  p.dcs.forEach((m) => {
    out[m] = 2
  })
  return out
}

/* ------------------------------------------------------------------ */
/*  main component                                                     */
/* ------------------------------------------------------------------ */

export default function KmapMinimizer() {
  const [vars, setVars] = useState<VarCount>(4)
  const [cells, setCells] = useState<CellState[]>(() => presetCells(PRESETS[0]))
  const [note, setNote] = useState<string | null>(PRESETS[0].note)
  const [hoverMinterm, setHoverMinterm] = useState<number | null>(null)
  const [hoverGroup, setHoverGroup] = useState<string | null>(null)
  const reduced = useReducedMotion() ?? false

  const geom = useMemo(() => geomFor(vars), [vars])
  const solve = useMemo(() => solveMap(cells, geom), [cells, geom])

  const cycleCell = (m: number): void => {
    setNote(null)
    setCells((cs) => cs.map((v, i) => (i === m ? ((v + 1) % 3) as CellState : v)))
  }

  const applyPreset = (p: Preset): void => {
    setVars(p.vars)
    setCells(presetCells(p))
    setNote(p.note)
    setHoverGroup(null)
    setHoverMinterm(null)
  }

  const resetMap = (): void => {
    setCells(new Array(16).fill(0) as CellState[])
    setNote(null)
    setHoverGroup(null)
  }

  const switchVars = (v: VarCount): void => {
    setVars(v)
    setCells(new Array(16).fill(0) as CellState[])
    setNote(null)
    setHoverGroup(null)
  }

  const litTotal = solve.selected.reduce((s, p) => s + p.lits, 0)

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      {/* header */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Grid3x3 className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Karnaugh Map Minimizer</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Click cells to cycle <span className="font-mono text-foreground">0 → 1 → X</span> — the solver finds every
            prime implicant, picks a minimum cover and paints each group in its own color.
          </p>
        </div>
      </div>

      {/* toolbar: size toggle + reset */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex overflow-hidden rounded-lg border border-border" role="group" aria-label="map size">
          {([2, 3, 4] as VarCount[]).map((v) => (
            <button
              key={v}
              onClick={() => switchVars(v)}
              aria-pressed={vars === v}
              className={`px-3 py-1.5 font-mono text-xs font-semibold transition-colors ${
                vars === v ? 'bg-emerald-600 text-white' : 'bg-card text-muted-foreground hover:text-foreground'
              }`}
            >
              {v}-var
            </button>
          ))}
        </div>
        <Button variant="outline" size="sm" onClick={resetMap} title="clear back to all zeros">
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </Button>
        <span className="ml-auto font-mono text-[11px] text-muted-foreground">
          {vars} variables · {geom.rows}×{geom.cols} grid
        </span>
      </div>

      {/* presets */}
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-xs font-medium text-muted-foreground">Presets:</span>
        {PRESETS.map((p) => (
          <button
            key={p.label}
            onClick={() => applyPreset(p)}
            className="rounded-full border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-foreground/90 transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300"
          >
            {p.label}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {note && (
          <motion.p
            key={note}
            initial={reduced ? false : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-lg border border-emerald-500/25 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-emerald-200/80"
          >
            {note}
          </motion.p>
        )}
      </AnimatePresence>

      {/* map + readouts */}
      <div className="grid items-start gap-4 lg:grid-cols-[auto_minmax(0,1fr)]">
        <div className="mx-auto w-full max-w-[420px] lg:mx-0">
          <KmapSVG
            cells={cells}
            geom={geom}
            solve={solve}
            reduced={reduced}
            hover={hoverMinterm}
            setHover={setHoverMinterm}
            hoverGroup={hoverGroup}
            onCycle={cycleCell}
          />
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] text-muted-foreground">
            <span>
              <span className="font-mono font-bold text-emerald-400">1</span> minterm
            </span>
            <span>
              <span className="font-mono font-bold text-amber-400">X</span> don’t care
            </span>
            <span>
              <span className="font-mono font-bold text-zinc-500">0</span> zero
            </span>
            <span className="text-muted-foreground/70">· rectangles may wrap the edges</span>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          {/* minimal expression */}
          <div className="rounded-xl border border-border bg-background/40 p-3.5">
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Minimal SOP</span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {solve.ones.length} minterm{solve.ones.length === 1 ? '' : 's'} · {solve.dcs.length} X ·{' '}
                {solve.selected.length} term{solve.selected.length === 1 ? '' : 's'} · {litTotal} literals
              </span>
            </div>

            {solve.selected.length === 0 ? (
              <p className="py-2 font-mono text-sm text-muted-foreground">
                No 1s on the map — <TeX tex="F = 0" />.
              </p>
            ) : (
              <div className="flex flex-wrap items-start gap-x-2 gap-y-3">
                <span className="py-1 font-mono text-lg text-foreground">F =</span>
                {solve.selected.map((grp, i) => {
                  const c = GROUP_COLORS[i % GROUP_COLORS.length]
                  return (
                    <span key={grp.key} className="flex flex-wrap items-start gap-2">
                      {i > 0 && <span className="py-1 font-mono text-lg text-muted-foreground">+</span>}
                      <motion.span
                        layout={!reduced}
                        initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex flex-col items-center gap-1"
                        onMouseEnter={() => setHoverGroup(grp.key)}
                        onMouseLeave={() => setHoverGroup(null)}
                      >
                        <span
                          className="inline-flex items-center rounded-lg border px-2.5 py-1"
                          style={{ borderColor: `${c}90`, backgroundColor: `${c}1f`, color: c }}
                        >
                          <TeX tex={grp.tex} />
                        </span>
                        <span className="text-[9px] tracking-wider text-muted-foreground uppercase">
                          {SIZE_NAME[grp.size]} · {grp.size} cell{grp.size > 1 ? 's' : ''}
                        </span>
                      </motion.span>
                    </span>
                  )
                })}
              </div>
            )}
          </div>

          {/* prime implicant list */}
          <div className="rounded-xl border border-border bg-background/40 p-3.5">
            <div className="mb-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
              Prime implicants ({solve.primes.length})
            </div>
            {solve.primes.length === 0 ? (
              <p className="py-1 text-xs text-muted-foreground">
                Nothing to cover — the map holds only 0s and don’t cares.
              </p>
            ) : (
              <ul className="flex flex-col divide-y divide-border/50">
                {[...solve.selected, ...solve.primes.filter((p) => !solve.selected.some((s) => s.key === p.key))].map(
                  (p) => {
                    const selIdx = solve.selected.findIndex((s) => s.key === p.key)
                    const c = selIdx >= 0 ? GROUP_COLORS[selIdx % GROUP_COLORS.length] : null
                    const essential = solve.essentials.has(p.key)
                    return (
                      <li
                        key={p.key}
                        onMouseEnter={() => setHoverGroup(p.key)}
                        onMouseLeave={() => setHoverGroup(null)}
                        className={`flex flex-wrap items-center gap-2 py-1.5 ${c ? '' : 'opacity-60'}`}
                      >
                        <span
                          className="h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{ backgroundColor: c ?? '#3f3f46' }}
                          aria-hidden
                        />
                        <TeX tex={p.tex} className="min-w-[58px] font-mono text-sm" />
                        <span className="rounded border border-border/70 bg-muted/30 px-1.5 py-0.5 font-mono text-[9px] tracking-wide text-muted-foreground uppercase">
                          {SIZE_NAME[p.size]}
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground">m({p.cells.join(',')})</span>
                        {essential ? (
                          <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                            <Star className="h-3 w-3" aria-hidden />
                            essential
                          </span>
                        ) : selIdx >= 0 ? (
                          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                            in cover
                          </span>
                        ) : (
                          <span className="rounded-full border border-border/70 px-2 py-0.5 text-[10px] text-muted-foreground">
                            unused
                          </span>
                        )}
                      </li>
                    )
                  }
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* truth table editor */}
      <div className="rounded-xl border border-border bg-background/40 p-3.5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
            Truth table — click F to cycle
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">edits stay in sync with the map</span>
        </div>
        <TruthTableEditor
          cells={cells}
          vars={vars}
          hover={hoverMinterm}
          setHover={setHoverMinterm}
          onCycle={cycleCell}
        />
      </div>

      {/* explainer */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-3">
          <div className="mb-1 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">Groups</div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Rectangles of <TeX tex="2^{k}" /> cells holding only 1s and Xs. The left/right and top/bottom edges are
            neighbours — a group may wrap around them.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-3">
          <div className="mb-1 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">Primes</div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            A group that cannot double in either direction. Essential primes are the only cover of at least one
            minterm — they always belong to the answer.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-3">
          <div className="mb-1 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">Don’t cares</div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            X cells may be included in a group but never need covering — the BCD preset turns eight groups into one
            literal by exploiting them.
          </p>
        </div>
      </div>

      {/* try this */}
      <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs leading-relaxed text-amber-200/80">
          <span className="font-semibold text-amber-300">Try this:</span> load the BCD preset and read{' '}
          <TeX tex="F = D" /> — one literal for eight minterms. Then click one of the X cells back to 0 and watch the
          expression explode back into three terms. Finally switch to the XOR pattern and see why parity functions
          defeat the map entirely.
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  SVG map                                                            */
/* ------------------------------------------------------------------ */

function KmapSVG({
  cells,
  geom,
  solve,
  reduced,
  hover,
  setHover,
  hoverGroup,
  onCycle,
}: {
  cells: CellState[]
  geom: Geom
  solve: SolveResult
  reduced: boolean
  hover: number | null
  setHover: (m: number | null) => void
  hoverGroup: string | null
  onCycle: (m: number) => void
}) {
  const CELL = geom.vars === 4 ? 64 : 84
  const GUT = 54
  const TOP = 42
  const PAD = 6
  const GAP = 3
  const W = GUT + geom.cols * CELL + PAD
  const H = TOP + geom.rows * CELL + PAD

  const mOf = (r: number, c: number): number => geom.rowGray[r] * geom.cols + geom.colGray[c]
  const colName = geom.vars === 4 ? 'CD' : geom.vars === 3 ? 'BC' : 'B'
  const rowName = geom.vars === 4 ? 'AB' : 'A'

  const cellStyle = (v: CellState, hovered: boolean): { fill: string; stroke: string; sw: number } => {
    if (v === 1)
      return {
        fill: 'rgba(16,185,129,0.13)',
        stroke: hovered ? '#34d399' : 'rgba(16,185,129,0.45)',
        sw: hovered ? 2.6 : 1.6,
      }
    if (v === 2)
      return {
        fill: 'rgba(245,158,11,0.10)',
        stroke: hovered ? '#fbbf24' : 'rgba(245,158,11,0.40)',
        sw: hovered ? 2.6 : 1.6,
      }
    return { fill: '#17171a', stroke: hovered ? '#a1a1aa' : 'rgba(63,63,70,0.70)', sw: hovered ? 2.2 : 1.4 }
  }

  const piecesFor = (grp: Group): Array<{ x: number; y: number; w: number; h: number }> => {
    const { r0, sr, c0, sc } = grp.rect
    const rowSegs: Array<[number, number]> = []
    const colSegs: Array<[number, number]> = []
    if (r0 + sr <= geom.rows) rowSegs.push([r0, sr])
    else {
      rowSegs.push([r0, geom.rows - r0])
      rowSegs.push([0, r0 + sr - geom.rows])
    }
    if (c0 + sc <= geom.cols) colSegs.push([c0, sc])
    else {
      colSegs.push([c0, geom.cols - c0])
      colSegs.push([0, c0 + sc - geom.cols])
    }
    return rowSegs.flatMap(([rs, rl]) =>
      colSegs.map(([cs, cl]) => ({
        x: GUT + cs * CELL,
        y: TOP + rs * CELL,
        w: cl * CELL,
        h: rl * CELL,
      }))
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background/60">
      <div className="p-2">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full select-none"
          role="img"
          aria-label={`Karnaugh map with ${geom.vars} variables, ${solve.selected.length} highlighted groups`}
        >
          <style>{`.km-cell:focus-visible .km-bg { stroke: #fbbf24; stroke-width: 3px; }`}</style>

          {/* variable names */}
          <text
            x={GUT + (geom.cols * CELL) / 2}
            y={12}
            textAnchor="middle"
            fontSize={11}
            fontWeight={700}
            letterSpacing={2}
            className="fill-zinc-500 font-mono"
          >
            {colName}
          </text>
          <text
            x={11}
            y={TOP + (geom.rows * CELL) / 2}
            textAnchor="middle"
            fontSize={11}
            fontWeight={700}
            letterSpacing={2}
            className="fill-zinc-500 font-mono"
            transform={`rotate(-90 11 ${TOP + (geom.rows * CELL) / 2})}`}
          >
            {rowName}
          </text>

          {/* gray-code labels */}
          {geom.colGray.map((gv, c) => (
            <text
              key={`col-${gv}`}
              x={GUT + c * CELL + CELL / 2}
              y={TOP - 8}
              textAnchor="middle"
              fontSize={12}
              className="fill-zinc-400 font-mono"
            >
              {bin(gv, geom.colBits)}
            </text>
          ))}
          {geom.rowGray.map((gv, r) => (
            <text
              key={`row-${gv}`}
              x={GUT - 12}
              y={TOP + r * CELL + CELL / 2 + 4}
              textAnchor="end"
              fontSize={12}
              className="fill-zinc-400 font-mono"
            >
              {bin(gv, geom.rowBits)}
            </text>
          ))}

          {/* cells */}
          {Array.from({ length: geom.rows }, (_, r) =>
            Array.from({ length: geom.cols }, (_, c) => {
              const m = mOf(r, c)
              const v = cells[m]
              const st = cellStyle(v, hover === m)
              return (
                <g
                  key={m}
                  role="button"
                  tabIndex={0}
                  className="km-cell cursor-pointer focus:outline-none"
                  aria-label={`cell m${m}, value ${v === 2 ? 'X, don’t care' : v}, activate to cycle 0, 1, X`}
                  onClick={() => onCycle(m)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      onCycle(m)
                    }
                  }}
                  onMouseEnter={() => setHover(m)}
                  onMouseLeave={() => setHover(null)}
                >
                  <rect
                    className="km-bg"
                    x={GUT + c * CELL + GAP}
                    y={TOP + r * CELL + GAP}
                    width={CELL - 2 * GAP}
                    height={CELL - 2 * GAP}
                    rx={10}
                    fill={st.fill}
                    stroke={st.stroke}
                    strokeWidth={st.sw}
                  />
                  <text
                    x={GUT + c * CELL + 10}
                    y={TOP + r * CELL + 15}
                    fontSize={9.5}
                    className="fill-zinc-600 font-mono"
                  >
                    {m}
                  </text>
                  <text
                    x={GUT + c * CELL + CELL / 2}
                    y={TOP + r * CELL + CELL / 2 + CELL * 0.13}
                    textAnchor="middle"
                    fontSize={CELL * 0.34}
                    fontWeight={700}
                    className={
                      v === 1 ? 'fill-emerald-400 font-mono' : v === 2 ? 'fill-amber-400 font-mono' : 'fill-zinc-600 font-mono'
                    }
                  >
                    {v === 2 ? 'X' : v}
                  </text>
                </g>
              )
            })
          )}

          {/* group overlays */}
          {solve.selected.map((grp, gi) => {
            const color = GROUP_COLORS[gi % GROUP_COLORS.length]
            const dashed = solve.selected
              .slice(0, gi)
              .some((e) => e.cells.some((m) => grp.cells.includes(m)))
            const inset = 2.5 + Math.min(gi, 5) * 1.8
            const hovered = hoverGroup === grp.key
            const rects = piecesFor(grp)
            return (
              <motion.g
                key={grp.key}
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.32, delay: reduced ? 0 : gi * 0.05 }}
                style={{ pointerEvents: 'none' }}
              >
                {rects.map((p, pi) => (
                  <rect
                    key={pi}
                    x={p.x + inset}
                    y={p.y + inset}
                    width={Math.max(6, p.w - 2 * inset)}
                    height={Math.max(6, p.h - 2 * inset)}
                    rx={9}
                    fill={color}
                    fillOpacity={hovered ? 0.2 : 0.12}
                    stroke={color}
                    strokeWidth={hovered ? 3.6 : 2.2}
                    strokeDasharray={dashed ? '7 5' : undefined}
                  />
                ))}
              </motion.g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  truth table editor                                                 */
/* ------------------------------------------------------------------ */

function TruthTableEditor({
  cells,
  vars,
  hover,
  setHover,
  onCycle,
}: {
  cells: CellState[]
  vars: VarCount
  hover: number | null
  setHover: (m: number | null) => void
  onCycle: (m: number) => void
}) {
  const names = ['A', 'B', 'C', 'D'].slice(0, vars)
  const total = 1 << vars
  const half = Math.ceil(total / 2)
  const halves: number[][] =
    vars === 2
      ? [Array.from({ length: total }, (_, i) => i)]
      : [Array.from({ length: half }, (_, i) => i), Array.from({ length: total - half }, (_, i) => i + half)]

  return (
    <div className={halves.length === 2 ? 'grid gap-x-6 gap-y-1 sm:grid-cols-2' : ''}>
      {halves.map((idxs, hi) => (
        <table key={hi} className="w-full border-collapse text-center font-mono text-xs">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="px-2 py-1.5 font-medium">m</th>
              {names.map((n) => (
                <th key={n} className="px-2 py-1.5 font-medium">
                  {n}
                </th>
              ))}
              <th className="px-2 py-1.5 font-medium text-emerald-300">F</th>
            </tr>
          </thead>
          <tbody>
            {idxs.map((m) => {
              const v = cells[m]
              return (
                <tr
                  key={m}
                  className={`border-b border-border/40 transition-colors last:border-0 ${
                    hover === m
                      ? 'bg-amber-500/10'
                      : v === 1
                        ? 'bg-emerald-500/[0.06]'
                        : v === 2
                          ? 'bg-amber-500/[0.06]'
                          : ''
                  }`}
                  onMouseEnter={() => setHover(m)}
                  onMouseLeave={() => setHover(null)}
                >
                  <td className="px-2 py-1 text-zinc-600">{m}</td>
                  {names.map((_, i) => (
                    <td key={i} className="px-2 py-1 text-muted-foreground">
                      {bitOf(m, vars, i)}
                    </td>
                  ))}
                  <td className="px-2 py-0.5">
                    <button
                      onClick={() => onCycle(m)}
                      aria-label={`F for minterm ${m}, currently ${v === 2 ? 'don’t care' : v}, activate to cycle`}
                      className={`my-0.5 w-8 rounded-md border px-1.5 py-0.5 text-sm font-bold transition-colors ${
                        v === 1
                          ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25'
                          : v === 2
                            ? 'border-amber-500/50 bg-amber-500/15 text-amber-300 hover:bg-amber-500/25'
                            : 'border-border bg-muted/30 text-zinc-500 hover:border-zinc-500/60'
                      }`}
                    >
                      {v === 2 ? 'X' : v}
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ))}
    </div>
  )
}

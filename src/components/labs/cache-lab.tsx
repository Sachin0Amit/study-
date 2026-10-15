'use client'

/**
 * Cache Lab — a real LRU set-associative cache simulator.
 * Generates address traces (sequential / looping / strided / random, seeded)
 * or accepts a manual CSV trace; classifies misses as compulsory /
 * capacity / conflict by replaying the trace on a fully-associative cache.
 */

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Database, Gauge, Layers, Wand2 } from 'lucide-react'
import { RING, mulberry32 } from './types'

/* ------------------------------------------------------------------ */
/*  Engine                                                             */
/* ------------------------------------------------------------------ */

type Pattern = 'sequential' | 'looping' | 'strided' | 'random'
type Assoc = 1 | 2 | 4 | 8 | 'full'
type WritePolicy = 'wb' | 'wt'

interface CacheConfig {
  blocks: number // distinct blocks in the address space
  pattern: Pattern
  stride: number
  seed: number
  length: number
  size: number // cache bytes
  blockSize: number // bytes
  assoc: Assoc
  policy: WritePolicy
}

interface Access {
  addr: number
  block: number
  tag: number
  set: number
  offset: number
  write: boolean
  hit: boolean
  allocated: boolean
}

interface SimResult {
  accesses: Access[]
  hits: number
  misses: number
  hitRate: number
  compulsory: number
  capacity: number
  conflict: number
  writebacks: number
  sets: number
  ways: number
  offsetBits: number
  indexBits: number
  tagBits: number
  setHits: number[]
  setMisses: number[]
}

function bits(n: number): number {
  return Math.round(Math.log2(Math.max(1, n)))
}

function buildTrace(cfg: CacheConfig): number[] {
  const { blocks, pattern, stride, seed, length } = cfg
  const addrs: number[] = []
  const rng = mulberry32(seed)
  const workSet = Math.min(Math.max(4, Math.round(blocks / 4)), 32)
  for (let i = 0; i < length; i++) {
    let block: number
    switch (pattern) {
      case 'sequential':
        block = i % blocks
        break
      case 'looping':
        block = i % workSet
        break
      case 'strided':
        block = (i * stride) % blocks
        break
      default:
        block = Math.floor(rng() * blocks)
    }
    // vary the block offset so addresses are realistic byte addresses
    const offset = (i * 7 + 3) % cfg.blockSize
    addrs.push(block * cfg.blockSize + offset)
  }
  return addrs
}

function runCache(trace: number[], cfg: CacheConfig, forceFullAssoc = false): {
  accesses: Access[]
  hits: number
  misses: number
  writebacks: number
} {
  const numBlocks = cfg.size / cfg.blockSize
  const assoc = forceFullAssoc ? numBlocks : cfg.assoc === 'full' ? numBlocks : cfg.assoc
  const sets = Math.max(1, Math.round(numBlocks / assoc))
  const offsetBits = bits(cfg.blockSize)
  const indexBits = bits(sets)
  const accesses: Access[] = []
  const setLines: number[][] = Array.from({ length: sets }, () => []) // tags, MRU last
  const dirty = new Set<string>() // `${set}:${tag}`
  const seen = new Set<number>()
  let hits = 0
  let misses = 0
  let writebacks = 0

  for (let i = 0; i < trace.length; i++) {
    const addr = trace[i]
    const block = Math.floor(addr / cfg.blockSize)
    const set = block % sets
    const tag = Math.floor(block / sets)
    const offset = addr % cfg.blockSize
    const write = i % 4 === 3 // every 4th access is a store
    const lines = setLines[set]
    const hitIdx = lines.indexOf(tag)
    if (hitIdx >= 0) {
      hits++
      lines.splice(hitIdx, 1)
      lines.push(tag)
      if (write && cfg.policy === 'wb') dirty.add(`${set}:${tag}`)
      accesses.push({ addr, block, tag, set, offset, write, hit: true, allocated: false })
      continue
    }
    // miss
    const allocate = !(write && cfg.policy === 'wt') // write-through = no write-allocate
    let evicted = false
    if (allocate) {
      if (lines.length >= assoc) {
        const victim = lines.shift() as number
        if (dirty.has(`${set}:${victim}`)) {
          writebacks++
          dirty.delete(`${set}:${victim}`)
        }
        evicted = true
      }
      lines.push(tag)
      if (cfg.policy === 'wb') dirty.add(`${set}:${tag}`)
    }
    misses++
    accesses.push({ addr, block, tag, set, offset, write, hit: false, allocated: allocate })
  }
  return { accesses, hits, misses, writebacks }
}

function simulate(trace: number[], cfg: CacheConfig): SimResult | null {
  if (trace.length === 0) return null
  const numBlocks = cfg.size / cfg.blockSize
  if (!Number.isInteger(numBlocks) || numBlocks < 1) return null
  if (cfg.assoc !== 'full' && numBlocks < (cfg.assoc as number)) return null

  const main = runCache(trace, cfg)
  const fa = runCache(trace, cfg, true)

  // compulsory = first touch of each distinct block
  const firstTouch = new Set<number>()
  let compulsory = 0
  for (const a of main.accesses) {
    if (!a.hit && !firstTouch.has(a.block)) {
      firstTouch.add(a.block)
      compulsory++
    }
  }
  const conflict = Math.max(0, main.misses - fa.misses)
  const capacity = Math.max(0, fa.misses - compulsory)

  const sets = Math.max(1, Math.round(numBlocks / (cfg.assoc === 'full' ? numBlocks : cfg.assoc)))
  const setHits = new Array<number>(sets).fill(0)
  const setMisses = new Array<number>(sets).fill(0)
  for (const a of main.accesses) {
    if (a.hit) setHits[a.set]++
    else setMisses[a.set]++
  }

  const ways = cfg.assoc === 'full' ? numBlocks : (cfg.assoc as number)
  return {
    accesses: main.accesses,
    hits: main.hits,
    misses: main.misses,
    hitRate: main.hits / Math.max(1, main.accesses.length),
    compulsory,
    capacity,
    conflict,
    writebacks: main.writebacks,
    sets,
    ways,
    offsetBits: bits(cfg.blockSize),
    indexBits: bits(sets),
    tagBits: Math.max(0, 32 - bits(cfg.blockSize) - bits(sets)),
    setHits,
    setMisses,
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const PATTERN_META: Record<Pattern, string> = {
  sequential: 'Strides through every block once — nearly pure compulsory misses.',
  looping: 'Circles a small working set — should fit and hit heavily.',
  strided: 'Jumps by a fixed stride — conflict misses appear when stride ≡ set count.',
  random: 'Seeded uniform blocks — capacity-limited behaviour.',
}

export function CacheLab() {
  const [cfg, setCfg] = useState<CacheConfig>({
    blocks: 64,
    pattern: 'looping',
    stride: 4,
    seed: 42,
    length: 256,
    size: 2048,
    blockSize: 32,
    assoc: 2,
    policy: 'wb',
  })
  const [manual, setManual] = useState('')
  const [useManual, setUseManual] = useState(false)

  const trace = useMemo(() => {
    if (useManual) {
      return manual
        .split(/[\s,]+/)
        .map((s) => Number(s))
        .filter((n) => Number.isInteger(n) && n >= 0)
        .slice(0, 512)
    }
    return buildTrace(cfg)
  }, [useManual, manual, cfg])

  const configError = useMemo(() => {
    const numBlocks = cfg.size / cfg.blockSize
    if (!Number.isInteger(numBlocks) || numBlocks < 1) return 'Cache size must be a multiple of the block size.'
    if (cfg.assoc !== 'full' && numBlocks < (cfg.assoc as number)) {
      return `Only ${numBlocks} block(s) fit in this cache — associativity ${cfg.assoc} exceeds capacity.`
    }
    return null
  }, [cfg])

  const sim = useMemo(
    () => (configError ? null : simulate(trace, cfg)),
    [configError, trace, cfg],
  )

  const set = <K extends keyof CacheConfig>(k: K, v: CacheConfig[K]) =>
    setCfg((c) => ({ ...c, [k]: v }))

  const maxSetHits = sim ? Math.max(1, ...sim.setHits) : 1
  const hitPct = sim ? Math.round(sim.hitRate * 100) : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-5"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10">
          <Database className="h-5 w-5 text-emerald-300" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-bold leading-tight">Cache Lab — set-associative simulator</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            Every access below is decoded into tag / set / offset bits and looked up in a real LRU
            cache model. Hover the timeline cells for the full address breakdown; misses are split
            into compulsory / capacity / conflict by replaying the trace fully-associative.
          </p>
        </div>
      </div>

      {/* configuration */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-bold">
            <Wand2 className="h-4 w-4 text-amber-300" aria-hidden="true" /> Address trace
          </div>
          <div className="grid grid-cols-2 gap-1.5" role="group" aria-label="Trace pattern">
            {(['sequential', 'looping', 'strided', 'random'] as Pattern[]).map((p) => (
              <button
                key={p}
                onClick={() => {
                  setUseManual(false)
                  set('pattern', p)
                }}
                aria-pressed={!useManual && cfg.pattern === p}
                className={`rounded-lg border px-2 py-1.5 text-xs font-semibold capitalize transition-all ${RING} ${
                  !useManual && cfg.pattern === p
                    ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-200'
                    : 'border-border/80 bg-background/60 text-muted-foreground hover:border-emerald-400/30 hover:text-foreground'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <p className="mt-2 min-h-[28px] text-[11px] leading-relaxed text-muted-foreground">
            {PATTERN_META[cfg.pattern]}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <div>
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Length</span>
                <span className="font-mono tabular-nums text-foreground/80">{cfg.length}</span>
              </div>
              <input
                type="range"
                min={64}
                max={512}
                step={32}
                value={cfg.length}
                disabled={useManual}
                onChange={(e) => set('length', Number(e.target.value))}
                aria-label="Trace length"
                className="mt-1 w-full accent-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
              />
            </div>
            <div>
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Distinct blocks</span>
                <span className="font-mono tabular-nums text-foreground/80">{cfg.blocks}</span>
              </div>
              <input
                type="range"
                min={16}
                max={128}
                step={16}
                value={cfg.blocks}
                disabled={useManual}
                onChange={(e) => set('blocks', Number(e.target.value))}
                aria-label="Distinct block count"
                className="mt-1 w-full accent-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
              />
            </div>
            {cfg.pattern === 'strided' && (
              <div>
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <span>Stride</span>
                  <span className="font-mono tabular-nums text-foreground/80">{cfg.stride}</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={16}
                  value={cfg.stride}
                  disabled={useManual}
                  onChange={(e) => set('stride', Number(e.target.value))}
                  aria-label="Stride"
                  className="mt-1 w-full accent-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
                />
              </div>
            )}
            {cfg.pattern === 'random' && (
              <label className="block">
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Seed
                </span>
                <input
                  type="number"
                  min={1}
                  max={999}
                  value={cfg.seed}
                  disabled={useManual}
                  onChange={(e) => set('seed', Math.max(1, Number(e.target.value) || 1))}
                  aria-label="Random seed"
                  className="w-full rounded-lg border border-border bg-background px-2 py-1 font-mono text-xs tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 disabled:cursor-not-allowed disabled:opacity-40"
                />
              </label>
            )}
          </div>
          <label className="mt-3 block">
            <span className="mb-1 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              <span>Manual trace (CSV of byte addresses, overrides generator)</span>
              <button
                onClick={() => setUseManual((m) => !m)}
                aria-pressed={useManual}
                className={`rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-all ${RING} ${
                  useManual
                    ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200'
                    : 'border-border/70 bg-background/60 text-muted-foreground hover:text-foreground'
                }`}
              >
                {useManual ? 'on' : 'off'}
              </button>
            </span>
            <input
              value={manual}
              onChange={(e) => setManual(e.target.value)}
              disabled={!useManual}
              placeholder="0, 32, 160, 64, 32, 128 …"
              aria-label="Manual address trace"
              className="w-full rounded-lg border border-border bg-background px-2.5 py-1.5 font-mono text-xs tabular-nums placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 disabled:cursor-not-allowed disabled:opacity-40"
            />
          </label>
        </div>

        <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-bold">
            <Layers className="h-4 w-4 text-teal-300" aria-hidden="true" /> Cache configuration
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Total size
                </span>
                <select
                  value={cfg.size}
                  onChange={(e) => set('size', Number(e.target.value))}
                  aria-label="Cache size"
                  className="w-full rounded-lg border border-border bg-background px-2 py-1.5 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                >
                  {[512, 1024, 2048, 4096, 8192].map((s) => (
                    <option key={s} value={s}>
                      {s >= 1024 ? `${s / 1024} KB` : `${s} B`}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Block size
                </span>
                <select
                  value={cfg.blockSize}
                  onChange={(e) => set('blockSize', Number(e.target.value))}
                  aria-label="Block size"
                  className="w-full rounded-lg border border-border bg-background px-2 py-1.5 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                >
                  {[16, 32, 64, 128].map((s) => (
                    <option key={s} value={s}>
                      {s} B
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Associativity
              </span>
              <div className="grid grid-cols-5 gap-1.5" role="group" aria-label="Associativity">
                {([1, 2, 4, 8, 'full'] as Assoc[]).map((a) => (
                  <button
                    key={String(a)}
                    onClick={() => set('assoc', a)}
                    aria-pressed={cfg.assoc === a}
                    className={`rounded-lg border px-1 py-1.5 text-[11px] font-semibold transition-all ${RING} ${
                      cfg.assoc === a
                        ? 'border-teal-400/50 bg-teal-400/15 text-teal-200'
                        : 'border-border/80 bg-background/60 text-muted-foreground hover:border-teal-400/30 hover:text-foreground'
                    }`}
                  >
                    {a === 'full' ? 'full' : `${a}-way`}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Write policy (every 4th access is a store)
              </span>
              <div className="grid grid-cols-2 gap-1.5" role="group" aria-label="Write policy">
                {(
                  [
                    { id: 'wb', label: 'Write-back + allocate' },
                    { id: 'wt', label: 'Write-through + no-allocate' },
                  ] as const
                ).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => set('policy', p.id)}
                    aria-pressed={cfg.policy === p.id}
                    className={`rounded-lg border px-2 py-1.5 text-[11px] font-semibold transition-all ${RING} ${
                      cfg.policy === p.id
                        ? 'border-amber-400/50 bg-amber-400/15 text-amber-200'
                        : 'border-border/80 bg-background/60 text-muted-foreground hover:border-amber-400/30 hover:text-foreground'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
            {sim && (
              <p className="rounded-lg border border-border/70 bg-background/50 px-3 py-2 font-mono text-[11px] leading-relaxed text-muted-foreground">
                layout: {sim.sets} set{sim.sets === 1 ? '' : 's'} × {sim.ways} way
                {sim.ways === 1 ? '' : 's'} · addr = tag {sim.tagBits}b | index {sim.indexBits}b | offset{' '}
                {sim.offsetBits}b
              </p>
            )}
          </div>
        </div>
      </div>

      {configError ? (
        <p
          role="alert"
          className="rounded-2xl border border-amber-400/30 bg-amber-400/[0.07] px-4 py-3 text-sm text-amber-200"
        >
          {configError}
        </p>
      ) : sim ? (
        <>
          {/* hit rate meter */}
          <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-sm font-bold">
                <Gauge className="h-4 w-4 text-emerald-300" aria-hidden="true" /> Hit rate
              </span>
              <span className="font-mono text-sm tabular-nums">
                <span className="text-lg font-bold text-emerald-300">{hitPct}%</span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {sim.hits} hits · {sim.misses} misses
                </span>
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={hitPct} aria-valuemin={0} aria-valuemax={100} aria-label="Cache hit rate">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-500"
                style={{ width: `${hitPct}%` }}
              />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { label: 'Compulsory', value: sim.compulsory, cls: 'text-teal-300' },
                { label: 'Capacity', value: sim.capacity, cls: 'text-emerald-300' },
                { label: 'Conflict', value: sim.conflict, cls: 'text-amber-300' },
                { label: 'Writebacks', value: sim.writebacks, cls: 'text-rose-300' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border/70 bg-background/50 px-3 py-2">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                  <div className={`mt-0.5 font-mono text-lg font-bold tabular-nums ${s.cls}`}>
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
              Miss split is an estimate: conflict = misses that vanish on a fully-associative replay,
              capacity = what still misses fully-associative beyond first touches.
            </p>
          </div>

          {/* timeline */}
          <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
            <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-bold">Access timeline</span>
              <span className="flex items-center gap-3 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-[3px] bg-emerald-500" /> hit
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-[3px] bg-amber-400" /> miss
                </span>
                <span className="hidden sm:inline">hover a cell for the address breakdown</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-[3px]">
              {sim.accesses.map((a, i) => (
                <span
                  key={i}
                  title={`#${i + 1} addr ${a.addr} · ${a.write ? 'write' : 'read'} · block ${a.block} · tag ${a.tag} · set ${a.set} · offset ${a.offset} · ${a.hit ? 'HIT' : 'MISS'}${!a.hit && !a.allocated ? ' (no-allocate)' : ''}`}
                  className={`h-[11px] w-[11px] rounded-[3px] transition-transform hover:scale-125 ${
                    a.hit ? 'bg-emerald-500/90' : 'bg-amber-400/90'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* per-set heatmap */}
          <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
            <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-bold">Per-set hit heatmap</span>
              <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                deeper emerald = more hits in that set · hover for counts
              </span>
            </div>
            <div
              className="grid gap-[3px]"
              style={{
                gridTemplateColumns: `repeat(${Math.min(sim.sets, 16)}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: sim.sets }, (_, s) => {
                const h = sim.setHits[s]
                const alpha = 0.1 + 0.9 * (h / maxSetHits)
                return (
                  <div
                    key={s}
                    title={`set ${s} · ${h} hits · ${sim.setMisses[s]} misses`}
                    className="aspect-square w-full rounded-[4px] border border-border/40"
                    style={{ background: `rgba(16, 185, 129, ${alpha.toFixed(3)})` }}
                  />
                )
              })}
            </div>
          </div>
        </>
      ) : (
        <p className="rounded-2xl border border-dashed border-border/70 bg-background/40 px-4 py-6 text-center text-sm text-muted-foreground">
          Enter a manual trace or pick a generator pattern to simulate.
        </p>
      )}
    </motion.div>
  )
}

export default CacheLab

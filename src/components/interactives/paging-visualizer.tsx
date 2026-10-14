'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Database,
  Dices,
  Lightbulb,
  MemoryStick,
  Pause,
  Play,
  RotateCcw,
  Table2,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { TeX } from '@/components/math'

/* ------------------------------------------------------------------ */
/*  Types + helpers                                                    */
/* ------------------------------------------------------------------ */

const PAGE_SIZES: { bytes: number; label: string }[] = [
  { bytes: 256, label: '256 B' },
  { bytes: 512, label: '512 B' },
  { bytes: 1024, label: '1 KB' },
  { bytes: 2048, label: '2 KB' },
  { bytes: 4096, label: '4 KB' },
]

const TABLE_SIZE = 8 // demo page-table entries (pages 0-7)
const FRAMES = 8 // physical memory: 8 frames
const STEP_LABELS = ['Split', 'Lookup', 'Frame', 'Assemble', 'Done']

interface TlbEntry {
  page: number
  frame: number
}

interface BatchEntry {
  page: number
  addr: number
  hit: boolean
}

interface BatchResult {
  entries: BatchEntry[]
  hits: number
}

function parseAddr(text: string, base: 'dec' | 'hex'): number | null {
  const s = text.trim().toLowerCase().replace(/^0x/, '')
  if (s === '' || !/^[0-9a-f]+$/.test(s)) return null
  const v = parseInt(s, base === 'hex' ? 16 : 10)
  if (Number.isNaN(v) || v < 0 || v > 0xffff) return null
  return v
}

const hex4 = (v: number): string => '0x' + v.toString(16).toUpperCase().padStart(4, '0')

function bitsOf(value: number, count: number, shift: number): number[] {
  const out: number[] = []
  for (let i = count - 1; i >= 0; i--) out.push((value >> (shift + i)) & 1)
  return out
}

/* ------------------------------------------------------------------ */
/*  Bit row                                                            */
/* ------------------------------------------------------------------ */

function BitRow({ bits, tone, active }: { bits: number[]; tone: 'page' | 'frame' | 'offset'; active: boolean }) {
  const on =
    tone === 'offset'
      ? 'border-amber-500/60 bg-amber-400/80 text-zinc-950'
      : 'border-emerald-500/60 bg-emerald-500/70 text-zinc-950'
  const off =
    tone === 'offset' ? 'border-amber-500/30 bg-amber-500/5 text-amber-400/80' : 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400/80'
  return (
    <div className="flex gap-0.5">
      {bits.map((b, i) => (
        <div
          key={i}
          className={
            'flex h-9 w-[18px] items-center justify-center rounded border font-mono text-sm font-bold transition-colors duration-500 sm:w-7 ' +
            (active ? (b ? on : off) : 'border-border bg-muted/30 text-muted-foreground/60')
          }
        >
          {b}
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function PagingVisualizer() {
  const [pageSize, setPageSize] = useState(1024)
  const [base, setBase] = useState<'dec' | 'hex'>('hex')
  const [addrText, setAddrText] = useState('1A2F')
  const [table, setTable] = useState<number[]>([2, 4, 1, 6, 0, 5, 3, 7])
  const [tlbEnabled, setTlbEnabled] = useState(true)
  const [tlb, setTlb] = useState<TlbEntry[]>([])
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [batch, setBatch] = useState<BatchResult | null>(null)
  const [tNs, setTNs] = useState(100)

  const d = Math.round(Math.log2(pageSize)) // offset bits
  const p = 16 - d // page-number bits
  const addr = parseAddr(addrText, base)
  const page = addr !== null ? addr >>> d : null
  const offset = addr !== null ? addr & (pageSize - 1) : null
  const mapped = page !== null && page < TABLE_SIZE
  const frame = mapped ? table[page] : null
  const phys = frame !== null && offset !== null ? frame * pageSize + offset : null
  const frameBits = Math.log2(FRAMES) // 3
  const tlbIdx = page !== null ? tlb.findIndex((e) => e.page === page) : -1
  const tlbHit = tlbEnabled && mapped && tlbIdx >= 0

  const applyTlb = () => {
    if (!tlbEnabled || page === null || !mapped) return
    setTlb((prev) => {
      const i = prev.findIndex((e) => e.page === page)
      if (i >= 0) return [prev[i], ...prev.filter((_, k) => k !== i)]
      return [{ page, frame: table[page] }, ...prev].slice(0, 4)
    })
  }

  const goTo = (target: number, keepPlaying = false) => {
    if (addr === null) return
    const t = Math.max(0, Math.min(5, target))
    if (step < 2 && t >= 2) applyTlb()
    setStep(t)
    if (!keepPlaying) setPlaying(false)
  }

  // auto-run the 5 steps
  useEffect(() => {
    if (!playing) return
    if (step >= 5) return
    const t = setTimeout(() => {
      goTo(step + 1, true)
      if (step + 1 >= 5) setPlaying(false)
    }, 900)
    return () => clearTimeout(t)
  }, [playing, step])

  // editing the scenario restarts the walkthrough and clears batch results
  const changeScenario = (apply: () => void) => {
    apply()
    setStep(0)
    setPlaying(false)
    setBatch(null)
  }

  const setFrame = (pageRow: number, raw: string) => {
    const v = parseInt(raw, 10)
    setTable((prev) => prev.map((f, i) => (i === pageRow ? (Number.isNaN(v) ? 0 : Math.max(0, Math.min(FRAMES - 1, v))) : f)))
  }

  const runBatch = () => {
    const entries: BatchEntry[] = []
    let last = Math.floor(Math.random() * TABLE_SIZE)
    const localTlb: number[] = []
    let hits = 0
    for (let i = 0; i < 20; i++) {
      // temporal locality: 55% of the time we touch the page we just used
      const pg = i > 0 && Math.random() < 0.55 ? last : Math.floor(Math.random() * TABLE_SIZE)
      const a = pg * pageSize + Math.floor(Math.random() * pageSize)
      let hit = false
      if (tlbEnabled) {
        const idx = localTlb.indexOf(pg)
        if (idx >= 0) {
          hits++
          hit = true
          localTlb.splice(idx, 1)
        }
        localTlb.unshift(pg)
        if (localTlb.length > 4) localTlb.pop()
      }
      entries.push({ page: pg, addr: a, hit })
      last = pg
    }
    setBatch({ entries, hits })
  }

  const h = batch ? batch.hits / 20 : 0
  const eat = h * tNs + (1 - h) * 2 * tNs

  const pageBits = page !== null ? bitsOf(page, p, 0) : Array<number>(p).fill(0)
  const offsetBits = offset !== null ? bitsOf(offset, d, 0) : Array<number>(d).fill(0)
  const frameBitArr = frame !== null ? bitsOf(frame, frameBits, 0) : Array<number>(frameBits).fill(0)

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <MemoryStick className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Paging Visualizer</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Split a virtual address into page number and offset, walk the page table (or hit the TLB) and reassemble the
            physical address — bit by bit.
          </p>
        </div>
      </div>

      {/* config */}
      <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-3">
        <label className="flex flex-col gap-1 text-xs text-muted-foreground">
          page size
          <div className="flex overflow-hidden rounded-lg border border-border" role="group" aria-label="Page size">
            {PAGE_SIZES.map((ps) => (
              <button
                key={ps.bytes}
                onClick={() => changeScenario(() => setPageSize(ps.bytes))}
                className={
                  'h-8 px-2.5 font-mono text-[11px] transition ' +
                  (pageSize === ps.bytes
                    ? 'bg-emerald-600 text-white'
                    : 'bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground')
                }
              >
                {ps.label}
              </button>
            ))}
          </div>
        </label>

        <label className="flex flex-col gap-1 text-xs text-muted-foreground">
          address input
          <div className="flex overflow-hidden rounded-lg border border-border" role="group" aria-label="Address base">
            {(['hex', 'dec'] as const).map((b) => (
              <button
                key={b}
                onClick={() =>
                  changeScenario(() => {
                    setBase(b)
                    setAddrText(addr !== null ? (b === 'hex' ? addr.toString(16).toUpperCase() : String(addr)) : '')
                  })
                }
                className={
                  'h-8 w-12 text-[11px] font-medium transition ' +
                  (base === b ? 'bg-emerald-600 text-white' : 'bg-muted/30 text-muted-foreground hover:bg-muted/60')
                }
              >
                {b === 'hex' ? 'hex' : 'dec'}
              </button>
            ))}
          </div>
        </label>

        <label className="flex flex-col gap-1 text-xs text-muted-foreground">
          virtual address (16-bit)
          <Input
            value={addrText}
            onChange={(e) => changeScenario(() => setAddrText(e.target.value))}
            placeholder={base === 'hex' ? 'e.g. 1A2F' : 'e.g. 6695'}
            className={
              'h-10 w-40 border-border bg-background font-mono ' + (addr === null ? 'focus-visible:ring-rose-500/40' : '')
            }
            aria-label="Virtual address"
          />
        </label>

        <label className="flex items-center gap-2 pb-2 text-xs text-muted-foreground">
          <Switch
            checked={tlbEnabled}
            onCheckedChange={(v) => changeScenario(() => setTlbEnabled(v))}
            aria-label="Toggle TLB"
          />
          TLB (4 entries)
        </label>
      </div>
      {addr === null && (
        <p className="mt-2 font-mono text-xs text-rose-400">
          Enter a valid address (0 – {base === 'hex' ? '0xFFFF' : '65,535'}).
        </p>
      )}

      {/* step chips */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        {STEP_LABELS.map((label, i) => (
          <button
            key={label}
            onClick={() => goTo(i + 1)}
            className={
              'rounded-full border px-3 py-1 text-xs font-medium transition ' +
              (step === i + 1
                ? 'border-amber-500/60 bg-amber-500/15 text-amber-300'
                : step > i + 1
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                  : 'border-border bg-muted/30 text-muted-foreground hover:text-foreground')
            }
          >
            {i + 1}. {label}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-1.5">
          <Button size="sm" variant="ghost" onClick={() => goTo(0)} aria-label="Reset walkthrough">
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            onClick={() => setPlaying((v) => !v)}
            disabled={addr === null || step >= 5}
            className="min-w-[84px]"
          >
            {playing ? (
              <>
                <Pause className="mr-1 h-4 w-4" /> Pause
              </>
            ) : (
              <>
                <Play className="mr-1 h-4 w-4" /> Auto
              </>
            )}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => goTo(step + 1)}
            disabled={addr === null || step >= 5}
            aria-label="Next step"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* address split */}
      <div className="mt-3 rounded-xl border border-border bg-background/50 p-4">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          <Cpu className="h-3.5 w-3.5 text-emerald-400" />
          virtual address bits — {addr !== null ? hex4(addr) : '—'} ({addr !== null ? addr.toLocaleString('en-US') : '—'})
        </div>
        <div className="mt-3 flex items-start justify-center gap-3 overflow-x-auto pb-1">
          <div className="shrink-0">
            <div className="mb-1 text-center text-[10px] font-semibold text-emerald-400">
              page number p = {p} bits
            </div>
            <BitRow bits={pageBits} tone="page" active={step >= 1} />
            <div className="mt-1 text-center font-mono text-xs text-emerald-300">p = {page ?? '—'}</div>
          </div>
          <div className="pt-6 font-mono text-lg text-muted-foreground/50">|</div>
          <div className="shrink-0">
            <div className="mb-1 text-center text-[10px] font-semibold text-amber-400">
              offset d = {d} bits
            </div>
            <BitRow bits={offsetBits} tone="offset" active={step >= 1} />
            <div className="mt-1 text-center font-mono text-xs text-amber-300">d = {offset ?? '—'}</div>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
          <span>
            <TeX tex={`d = \\log_2(\\text{page size}) = ${d}`} />
          </span>
          <span>
            <TeX tex={`p = 16 - d = ${p}`} />
          </span>
          <span>
            <TeX tex={`2^{${p}} = ${1 << p}\\ \\text{virtual pages}`} />
          </span>
        </div>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        {/* page table */}
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Table2 className="h-3.5 w-3.5 text-emerald-400" /> page table (8-entry demo)
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">frames 0–{FRAMES - 1}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-4">
            {table.map((f, i) => {
              const active = step >= 2 && page === i
              return (
                <div
                  key={i}
                  className={
                    'flex flex-col items-center gap-1 rounded-lg border px-2 py-2 transition-all duration-300 ' +
                    (active
                      ? 'border-amber-500/70 bg-amber-500/10 ring-2 ring-amber-400/40'
                      : mapped === false && step >= 2
                        ? 'border-border bg-muted/20 opacity-60'
                        : 'border-border bg-muted/20')
                  }
                >
                  <span className="font-mono text-[10px] text-muted-foreground">page {i}</span>
                  <span className="font-mono text-[10px] text-muted-foreground/60">↓</span>
                  <input
                    value={f}
                    onChange={(e) => setFrame(i, e.target.value)}
                    inputMode="numeric"
                    aria-label={`Frame for page ${i}`}
                    className="h-8 w-12 rounded-md border border-border bg-background text-center font-mono text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40"
                  />
                  <span className="font-mono text-[10px] text-muted-foreground/70">frame</span>
                </div>
              )
            })}
          </div>
          <p className="border-t border-border px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
            Pages ≥ {TABLE_SIZE} have no entry in this demo table — they raise a{' '}
            <span className="font-semibold text-rose-400">page fault</span> (valid bit 0).
          </p>
        </div>

        {/* TLB */}
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-emerald-400" /> TLB — 4 entries, LRU
            </span>
            {tlbEnabled ? (
              <span className="font-mono text-[10px] text-muted-foreground">{tlb.length}/4</span>
            ) : (
              <span className="font-mono text-[10px] text-rose-400">off</span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 p-3">
            {!tlbEnabled && (
              <p className="w-full py-4 text-center text-xs text-muted-foreground">
                TLB disabled — every access walks the page table (2 memory accesses).
              </p>
            )}
            {tlbEnabled &&
              (tlb.length === 0 ? (
                <p className="w-full py-4 text-center text-xs text-muted-foreground">
                  Empty — the first lookup misses and loads the entry.
                </p>
              ) : (
                tlb.map((e, i) => {
                  const hit = step >= 2 && tlbIdx === i
                  return (
                    <motion.div
                      key={`${e.page}-${i}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={
                        'rounded-lg border px-3 py-2 font-mono text-xs transition-colors ' +
                        (hit
                          ? 'border-emerald-500/70 bg-emerald-500/15 text-emerald-300 ring-2 ring-emerald-400/50'
                          : 'border-border bg-muted/20 text-foreground')
                      }
                    >
                      <span className="text-muted-foreground">page {e.page} → </span>
                      <span className="font-semibold">frame {e.frame}</span>
                      {i === 0 && <span className="ml-1.5 text-[9px] uppercase text-emerald-400/70">MRU</span>}
                      {i === tlb.length - 1 && tlb.length > 1 && (
                        <span className="ml-1.5 text-[9px] uppercase text-muted-foreground/60">LRU</span>
                      )}
                    </motion.div>
                  )
                })
              ))}
          </div>
          <AnimatePresence>
            {step >= 2 && tlbEnabled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border-t border-border px-4 py-2.5"
              >
                {mapped ? (
                  tlbHit ? (
                    <p className="text-xs font-semibold text-emerald-400">
                      TLB hit — frame {frame} delivered without touching the page table.
                    </p>
                  ) : (
                    <p className="text-xs font-semibold text-amber-400">
                      TLB miss — walk the page table, then cache the entry.
                    </p>
                  )
                ) : (
                  <p className="text-xs font-semibold text-rose-400">TLB miss and page fault — no mapping exists.</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* frame + assemble */}
      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <div
          className={
            'rounded-xl border p-4 transition-all duration-300 ' +
            (step >= 3 ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-border bg-background/50 opacity-60')
          }
        >
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            <Database className="h-3.5 w-3.5 text-emerald-400" /> frame number
          </div>
          <div className="mt-3 flex items-center justify-center gap-3 overflow-x-auto">
            <div className="shrink-0">
              <div className="mb-1 text-center text-[10px] font-semibold text-emerald-400">f = {frameBits} bits</div>
              <BitRow bits={frameBitArr} tone="page" active={step >= 3} />
            </div>
            <div className="font-mono text-2xl text-muted-foreground/40">→</div>
            <div className="font-mono text-4xl font-bold tabular-nums text-emerald-300">
              {step >= 3 ? (frame !== null ? frame : '—') : '?'}
            </div>
          </div>
          <p className="mt-2 text-center text-[11px] text-muted-foreground">
            {step >= 3
              ? mapped
                ? `page ${page} lives in frame ${frame}`
                : 'no frame — the page is not mapped'
              : 'advance to reveal the frame'}
          </p>
        </div>

        <div
          className={
            'rounded-xl border p-4 transition-all duration-300 ' +
            (step >= 4 ? 'border-amber-500/40 bg-amber-500/5' : 'border-border bg-background/50 opacity-60')
          }
        >
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            <ChevronLeft className="h-3.5 w-3.5 rotate-180 text-amber-400" /> assemble physical address
          </div>
          <div className="mt-3 flex items-center justify-center gap-3 overflow-x-auto">
            <div className="shrink-0">
              <div className="mb-1 text-center text-[10px] text-emerald-400/80">frame</div>
              <BitRow bits={frameBitArr} tone="page" active={step >= 4} />
            </div>
            <div className="shrink-0">
              <div className="mb-1 text-center text-[10px] text-amber-400/80">offset</div>
              <BitRow bits={offsetBits} tone="offset" active={step >= 4} />
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-lg font-bold text-amber-300">
            PA = {step >= 4 ? (phys !== null ? `${phys.toLocaleString('en-US')} (${hex4(phys)})` : '— page fault') : '?'}
          </p>
          <p className="mt-1 text-center text-[11px] text-muted-foreground">
            frame × page size + offset = {frame !== null && step >= 4 ? `${frame} × ${pageSize} + ${offset}` : '…'}
          </p>
        </div>
      </div>

      {/* done summary */}
      <AnimatePresence>
        {step >= 5 && addr !== null && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className={
              'mt-3 rounded-xl border p-4 ' +
              (mapped ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-rose-500/40 bg-rose-500/10')
            }
          >
            {mapped ? (
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-sm">
                <span className="text-muted-foreground">VA</span>
                <span className="font-semibold text-foreground">{hex4(addr)}</span>
                <span className="text-emerald-400">→</span>
                <span className="text-muted-foreground">PA</span>
                <span className="font-semibold text-emerald-300">
                  {phys !== null ? hex4(phys) : '—'} ({phys !== null ? phys.toLocaleString('en-US') : '—'})
                </span>
                <span className="rounded-lg border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground">
                  {tlbEnabled ? (tlbHit ? 'TLB hit · 1 memory access' : 'TLB miss · 2 memory accesses') : 'no TLB · 2 memory accesses'}
                </span>
              </div>
            ) : (
              <p className="text-center font-mono text-sm font-semibold text-rose-300">
                page fault — page {page} is not mapped (valid bit 0), no physical address.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* batch mode */}
      <div className="mt-4 rounded-xl border border-border bg-background/50 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            <Dices className="h-3.5 w-3.5 text-emerald-400" /> batch run — 20 random addresses
          </span>
          <Button size="sm" onClick={runBatch}>
            <Play className="mr-1 h-4 w-4" /> Run 20 addresses
          </Button>
        </div>
        {batch && (
          <div className="mt-3">
            <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-5">
              {batch.entries.map((e, i) => (
                <div
                  key={i}
                  className={
                    'rounded-md border px-1.5 py-1 text-center font-mono text-[10px] ' +
                    (e.hit
                      ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                      : 'border-amber-500/50 bg-amber-500/10 text-amber-300')
                  }
                  title={`address ${hex4(e.addr)} → page ${e.page}`}
                >
                  <div className="text-muted-foreground">#{i + 1}</div>
                  <div className="font-semibold">{e.hit ? 'HIT' : 'MISS'}</div>
                  <div className="text-muted-foreground">p{e.page}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <div className="text-sm">
                <span className="text-muted-foreground">hit ratio </span>
                <span className="font-mono font-bold text-emerald-300">
                  h = {batch.hits}/20 = {h.toFixed(2)}
                </span>
              </div>
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                memory access time t
                <Input
                  type="number"
                  min={10}
                  max={1000}
                  value={tNs}
                  onChange={(e) => {
                    const v = parseInt(e.target.value, 10)
                    setTNs(Number.isNaN(v) ? 100 : Math.max(10, Math.min(1000, v)))
                  }}
                  className="h-8 w-20 border-border bg-background font-mono"
                  aria-label="Memory access time in nanoseconds"
                />
                ns
              </label>
            </div>
            <div className="mt-2 text-sm text-foreground">
              <TeX
                display
                tex={`\\text{EAT} = h \\cdot t + (1 - h) \\cdot 2t = ${h.toFixed(2)} \\times ${tNs} + ${(1 - h).toFixed(2)} \\times ${2 * tNs} = ${eat.toFixed(1)}\\ \\text{ns}`}
              />
            </div>
            <p className="mt-1 text-center text-[11px] text-muted-foreground">
              {tlbEnabled
                ? 'A hit costs one memory access; a miss also walks the page table. Locality (55% of runs touch the last page) keeps the TLB warm.'
                : 'TLB off — h = 0, so every access pays the full two-memory-access price.'}
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          with page size <span className="font-mono text-foreground">1 KB</span> and address{' '}
          <span className="font-mono text-foreground">0x1A2F</span>, the low 10 bits form the offset and the top 6 bits are
          page 6. Look up frame 3, and the physical address is frame 3 × 1024 + 559. Change the page size and watch the split
          line slide — then try <span className="font-mono text-foreground">0x0F00</span> at 256 B to land on page 15: a
          page fault, because the demo table only maps pages 0–7.
        </span>
      </div>
    </div>
  )
}

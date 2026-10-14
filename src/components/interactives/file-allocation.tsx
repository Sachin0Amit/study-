'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  HardDrive,
  Layers,
  Lightbulb,
  Link,
  ListTree,
  Plus,
  Trash2,
  XCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

/* ------------------------------------------------------------------ */
/*  Types + helpers                                                    */
/* ------------------------------------------------------------------ */

const NBLOCKS = 32
const PTRS = 6 // data pointers per index block
const MAX_DATA = 12

type Method = 'contiguous' | 'linked' | 'indexed'

interface StoredFile {
  id: number
  name: string
  kind: Method
  blocks: number[] // data blocks in traversal order
  indexBlocks: number[] // indexed only, chain order
}

interface ReadOutcome {
  data: number
  total: number
  seek: number
}

interface Banner {
  tone: 'amber' | 'rose' | 'emerald'
  title: string
  detail?: string
}

type AllocResult =
  | { ok: true; blocks: number[]; indexBlocks: number[] }
  | { ok: false; reason: 'full' | 'fragmentation'; free: number; largestRun: number; needed: number }

const METHODS: { id: Method; label: string; icon: LucideIcon; hint: string }[] = [
  { id: 'contiguous', label: 'Contiguous', icon: Layers, hint: 'One first-fit run — fast reads, but fragments' },
  { id: 'linked', label: 'Linked (FAT)', icon: Link, hint: 'Scattered blocks chained through a FAT' },
  { id: 'indexed', label: 'Indexed (i-node)', icon: ListTree, hint: 'Index blocks of 6 pointers, chained' },
]

function largestFreeRun(blocks: (number | null)[]): number {
  let best = 0
  let cur = 0
  for (const b of blocks) {
    if (b === null) {
      cur++
      if (cur > best) best = cur
    } else {
      cur = 0
    }
  }
  return best
}

function firstFitRun(blocks: (number | null)[], size: number): number[] | null {
  let run: number[] = []
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === null) {
      run = run.length > 0 && i === run[run.length - 1] + 1 ? [...run, i] : [i]
      if (run.length === size) return run
    } else {
      run = []
    }
  }
  return null
}

function shuffled(freeList: number[]): number[] {
  const a = [...freeList]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function allocate(method: Method, size: number, blocks: (number | null)[]): AllocResult {
  const freeList = blocks.map((b, i) => (b === null ? i : -1)).filter((i) => i >= 0)
  if (method === 'contiguous') {
    if (freeList.length < size) {
      return { ok: false, reason: 'full', free: freeList.length, largestRun: largestFreeRun(blocks), needed: size }
    }
    const run = firstFitRun(blocks, size)
    if (!run) {
      return { ok: false, reason: 'fragmentation', free: freeList.length, largestRun: largestFreeRun(blocks), needed: size }
    }
    return { ok: true, blocks: run, indexBlocks: [] }
  }
  if (method === 'linked') {
    if (freeList.length < size) {
      return { ok: false, reason: 'full', free: freeList.length, largestRun: largestFreeRun(blocks), needed: size }
    }
    return { ok: true, blocks: shuffled(freeList).slice(0, size), indexBlocks: [] }
  }
  const idxCount = Math.ceil(size / PTRS)
  const needed = size + idxCount
  if (freeList.length < needed) {
    return { ok: false, reason: 'full', free: freeList.length, largestRun: largestFreeRun(blocks), needed }
  }
  const pick = shuffled(freeList).slice(0, needed)
  return { ok: true, indexBlocks: pick.slice(0, idxCount), blocks: pick.slice(idxCount) }
}

/** Read order: contiguous/linked walk the data blocks; indexed reads its index blocks first. */
function traversalOf(f: StoredFile): number[] {
  return f.kind === 'indexed' ? [...f.indexBlocks, ...f.blocks] : f.blocks
}

/** Total seek (in blocks) to read a sequence, starting with the head at block 0. */
function seekOf(order: number[]): number {
  let seek = 0
  let cur = 0
  for (const b of order) {
    seek += Math.abs(b - cur)
    cur = b
  }
  return seek
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function FileAllocation() {
  const [method, setMethod] = useState<Method>('contiguous')
  const [files, setFiles] = useState<StoredFile[]>([])
  const [blocks, setBlocks] = useState<(number | null)[]>(Array<number | null>(NBLOCKS).fill(null))
  const [nextId, setNextId] = useState(1)
  const [name, setName] = useState('')
  const [size, setSize] = useState(4)
  const [banner, setBanner] = useState<Banner | null>(null)
  const [reveal, setReveal] = useState<{ fileId: number; shown: number } | null>(null)
  const [readState, setReadState] = useState<{ fileId: number; pos: number } | null>(null)
  const [readResults, setReadResults] = useState<Record<number, ReadOutcome>>({})
  const [totals, setTotals] = useState<{ reads: number; blocks: number; seek: number }>({ reads: 0, blocks: 0, seek: 0 })

  const busy = reveal !== null || readState !== null
  const freeCount = blocks.filter((b) => b === null).length
  const activeMethod = METHODS.find((m) => m.id === method)

  // reveal animation for a freshly allocated file
  const revealFile = reveal ? files.find((f) => f.id === reveal.fileId) : undefined
  const revealTotal = revealFile ? revealFile.blocks.length + revealFile.indexBlocks.length : 0
  useEffect(() => {
    if (!reveal || !revealFile) return
    const t = setTimeout(() => {
      setReveal((r) => {
        if (!r) return r
        const nx = r.shown + 1
        return nx >= revealTotal ? null : { ...r, shown: nx }
      })
    }, 170)
    return () => clearTimeout(t)
  }, [reveal, revealFile, revealTotal])

  const revealRank = useMemo(() => {
    if (!reveal || !revealFile) return null
    const order = traversalOf(revealFile)
    const m = new Map<number, number>()
    order.forEach((b, i) => m.set(b, i))
    return m
  }, [reveal, revealFile])

  // read animation driver
  useEffect(() => {
    if (!readState) return
    const f = files.find((x) => x.id === readState.fileId)
    if (!f) return // files cannot be deleted mid-read (ops are locked)
    const order = traversalOf(f)
    const speed = f.kind === 'contiguous' ? 150 : f.kind === 'indexed' ? 300 : 420
    const t = setTimeout(() => {
      const nx = readState.pos + 1
      if (nx >= order.length) {
        const seek = seekOf(order)
        setReadResults((r) => ({ ...r, [f.id]: { data: f.blocks.length, total: order.length, seek } }))
        setTotals((tt) => ({ reads: tt.reads + 1, blocks: tt.blocks + order.length, seek: tt.seek + seek }))
        setReadState(null)
      } else {
        setReadState((s) => (s ? { ...s, pos: nx } : s))
      }
    }, speed)
    return () => clearTimeout(t)
  }, [readState, files])

  // auto-dismiss banners
  useEffect(() => {
    if (!banner) return
    const t = setTimeout(() => setBanner(null), 5000)
    return () => clearTimeout(t)
  }, [banner])

  const readFile = files.find((f) => readState?.fileId === f.id)
  const readOrder = readFile ? traversalOf(readFile) : null
  const readCur = readOrder && readState && readState.pos < readOrder.length ? readOrder[readState.pos] : null
  const readPartial = readOrder ? seekOf(readOrder.slice(0, Math.min((readState?.pos ?? 0) + 1, readOrder.length)) ) : 0

  const addFile = () => {
    if (busy) return
    const res = allocate(method, size, blocks)
    if (!res.ok) {
      if (res.reason === 'full') {
        setBanner({
          tone: 'rose',
          title: 'Disk full',
          detail: `${res.needed} block${res.needed === 1 ? '' : 's'} needed but only ${res.free} free.`,
        })
      } else {
        setBanner({
          tone: 'amber',
          title: 'Allocation failed — external fragmentation',
          detail: `${res.free} blocks are free, but the longest contiguous run is only ${res.largestRun}. A ${size}-block file does not fit anywhere.`,
        })
      }
      return
    }
    const id = nextId
    const trimmed = name.trim() || `file${id}`
    setFiles((fs) => [...fs, { id, name: trimmed, kind: method, blocks: res.blocks, indexBlocks: res.indexBlocks }])
    setBlocks((bs) =>
      bs.map((b, i) => (res.blocks.includes(i) || res.indexBlocks.includes(i) ? id : b)),
    )
    setReveal({ fileId: id, shown: 0 })
    setNextId((i) => i + 1)
    setName('')
  }

  const startRead = (id: number) => {
    if (busy) return
    setReadState({ fileId: id, pos: 0 })
  }

  const grow = (f: StoredFile) => {
    if (busy) return
    if (f.kind === 'contiguous') {
      const end = f.blocks[f.blocks.length - 1]
      const nb = end + 1
      if (nb >= NBLOCKS || blocks[nb] !== null) {
        setBanner({
          tone: 'amber',
          title: `Cannot grow ${f.name}`,
          detail:
            nb >= NBLOCKS
              ? 'The file ends at the last block of the disk — nowhere left to extend.'
              : `Block ${nb} is already taken. ${freeCount} blocks are free elsewhere, but a contiguous file can only extend into its immediate neighbour — external fragmentation.`,
        })
        return
      }
      setFiles((fs) => fs.map((x) => (x.id === f.id ? { ...x, blocks: [...x.blocks, nb] } : x)))
      setBlocks((bs) => bs.map((b, i) => (i === nb ? f.id : b)))
      return
    }
    if (f.kind === 'linked') {
      const nb = blocks.findIndex((b) => b === null)
      if (nb === -1) {
        setBanner({ tone: 'rose', title: 'Disk full', detail: 'No free block to append to the chain.' })
        return
      }
      setFiles((fs) => fs.map((x) => (x.id === f.id ? { ...x, blocks: [...x.blocks, nb] } : x)))
      setBlocks((bs) => bs.map((b, i) => (i === nb ? f.id : b)))
      return
    }
    // indexed
    if (f.blocks.length >= MAX_DATA) {
      setBanner({
        tone: 'amber',
        title: `Cannot grow ${f.name}`,
        detail: `Demo i-node chains cap at ${MAX_DATA} data blocks (${PTRS} pointers per index block).`,
      })
      return
    }
    const needIndex = f.blocks.length % PTRS === 0
    const freeList = blocks.map((b, i) => (b === null ? i : -1)).filter((i) => i >= 0)
    if (freeList.length < (needIndex ? 2 : 1)) {
      setBanner({
        tone: 'rose',
        title: 'Cannot grow',
        detail: needIndex ? 'A new index block and a data block are needed.' : 'No free data block.',
      })
      return
    }
    const pick = shuffled(freeList).slice(0, needIndex ? 2 : 1)
    setFiles((fs) =>
      fs.map((x) =>
        x.id === f.id
          ? { ...x, indexBlocks: needIndex ? [...x.indexBlocks, pick[0]] : x.indexBlocks, blocks: [...x.blocks, pick[needIndex ? 1 : 0]] }
          : x,
      ),
    )
    setBlocks((bs) => bs.map((b, i) => (pick.includes(i) ? f.id : b)))
  }

  const removeFile = (id: number) => {
    if (busy) return
    const f = files.find((x) => x.id === id)
    setBlocks((bs) => bs.map((b) => (b === id ? null : b)))
    setFiles((fs) => fs.filter((x) => x.id !== id))
    setReadResults((rr) => {
      const nx = { ...rr }
      delete nx[id]
      return nx
    })
    if (f) {
      setBanner({
        tone: 'emerald',
        title: `Deleted ${f.name}`,
        detail: `${f.blocks.length + f.indexBlocks.length} blocks freed — FAT entries cleared.`,
      })
    }
  }

  const loadPreset = () => {
    const preset: StoredFile[] = [
      { id: 1, name: 'report.dat', kind: 'contiguous', blocks: [2, 3, 4, 5], indexBlocks: [] },
      { id: 2, name: 'media.bin', kind: 'linked', blocks: [8, 21, 14, 27, 11, 30], indexBlocks: [] },
      { id: 3, name: 'notes.txt', kind: 'indexed', blocks: [16, 23, 19, 28, 12, 25, 17], indexBlocks: [15, 20] },
    ]
    const bs: (number | null)[] = Array<number | null>(NBLOCKS).fill(null)
    for (const f of preset) {
      for (const b of [...f.blocks, ...f.indexBlocks]) bs[b] = f.id
    }
    setFiles(preset)
    setBlocks(bs)
    setNextId(4)
    setReadResults({})
    setTotals({ reads: 0, blocks: 0, seek: 0 })
    setReadState(null)
    setReveal(null)
    setBanner(null)
  }

  // FAT state per block
  const fat = useMemo(() => {
    return Array.from({ length: NBLOCKS }, (_, b) => {
      const id = blocks[b]
      if (id === null) return { state: 'free' as const, label: '' }
      const f = files.find((x) => x.id === id)
      if (!f) return { state: 'free' as const, label: '' }
      if (f.kind === 'linked') {
        const i = f.blocks.indexOf(b)
        return { state: 'linked' as const, label: i === f.blocks.length - 1 ? 'EOF' : `${f.blocks[i + 1]}` }
      }
      if (f.indexBlocks.includes(b)) return { state: 'index' as const, label: 'IDX' }
      return { state: 'data' as const, label: '—' }
    })
  }, [blocks, files])

  const methodIcon = (m: Method): LucideIcon => METHODS.find((x) => x.id === m)?.icon ?? Layers

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <HardDrive className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">File Allocation Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Allocate files on a 32-block disk — contiguous runs, a linked chain through a FAT, or indexed i-nodes — then
            read, grow and delete them to feel the trade-offs.
          </p>
        </div>
      </div>

      {/* method + add form */}
      <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-3">
        <label className="flex flex-col gap-1 text-xs text-muted-foreground">
          allocation method
          <div className="flex overflow-hidden rounded-lg border border-border" role="group" aria-label="Allocation method">
            {METHODS.map((m) => {
              const Icon = m.icon
              return (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  title={m.hint}
                  className={
                    'flex h-9 items-center gap-1.5 px-3 text-[11px] font-medium transition ' +
                    (method === m.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground')
                  }
                >
                  <Icon className="h-3.5 w-3.5" />
                  {m.label}
                </button>
              )
            })}
          </div>
        </label>

        <label className="flex flex-col gap-1 text-xs text-muted-foreground">
          name
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. essay.txt"
            className="h-10 w-40 border-border bg-background font-mono"
            aria-label="File name"
          />
        </label>

        <div className="flex flex-col gap-1 text-xs text-muted-foreground">
          size (blocks)
          <div className="flex items-center gap-1 rounded-lg border border-border px-1 py-1" aria-label="File size in blocks">
            <button
              onClick={() => setSize((v) => Math.max(1, v - 1))}
              className="h-7 w-7 rounded-md text-sm text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
              aria-label="Fewer blocks"
            >
              −
            </button>
            <span className="w-8 text-center font-mono text-sm text-foreground">{size}</span>
            <button
              onClick={() => setSize((v) => Math.min(MAX_DATA, v + 1))}
              className="h-7 w-7 rounded-md text-sm text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
              aria-label="More blocks"
            >
              +
            </button>
          </div>
        </div>

        <Button size="sm" onClick={addFile} disabled={busy}>
          <Plus className="mr-1 h-4 w-4" /> Allocate file
        </Button>
        <Button size="sm" variant="outline" onClick={loadPreset} disabled={busy}>
          Load 3-file preset
        </Button>
        <span className="font-mono text-[11px] text-muted-foreground">{freeCount}/32 free</span>
      </div>
      <p className="mt-2 text-[11px] text-muted-foreground">
        {activeMethod?.hint}
        {method === 'indexed' ? ` — files above ${PTRS} blocks chain a second index block via a next-pointer.` : ''}
      </p>

      {/* banner */}
      <AnimatePresence>
        {banner && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            role="status"
            className={
              'mt-3 flex items-start gap-2.5 rounded-xl border px-3.5 py-2.5 ' +
              (banner.tone === 'amber'
                ? 'border-amber-500/40 bg-amber-500/10 text-amber-200'
                : banner.tone === 'rose'
                  ? 'border-rose-500/40 bg-rose-500/10 text-rose-200'
                  : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200')
            }
          >
            {banner.tone === 'amber' ? (
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            ) : banner.tone === 'rose' ? (
              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
            ) : (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            )}
            <div className="text-xs leading-relaxed">
              <span className="font-semibold">{banner.title}</span>
              {banner.detail ? <span className="text-current/80"> — {banner.detail}</span> : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* disk grid */}
      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-background/50">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Disk — 32 blocks</span>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded border border-border bg-muted/30" /> free
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded border border-emerald-500/50 bg-emerald-500/30" /> data
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded border border-amber-500/50 bg-amber-500/30" /> index block
            </span>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-1.5 p-3">
          {blocks.map((owner, b) => {
            const f = owner !== null ? files.find((x) => x.id === owner) : undefined
            const isIndex = f?.indexBlocks.includes(b) ?? false
            const rank = revealRank?.get(b)
            const hidden = rank !== undefined && reveal !== null && rank >= reveal.shown
            const reading = readCur === b
            const base = hidden
              ? 'border-dashed border-emerald-500/40 bg-emerald-500/5 text-emerald-400/40'
              : f
                ? isIndex
                  ? 'border-amber-500/50 bg-amber-500/15 text-amber-200'
                  : 'border-emerald-500/50 bg-emerald-500/15 text-emerald-200'
                : 'border-border bg-muted/20 text-muted-foreground/60'
            return (
              <div
                key={b}
                className={
                  'flex aspect-square flex-col items-center justify-center rounded-md border transition-all duration-200 ' +
                  base +
                  (reading ? ' scale-110 ring-2 ring-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.45)]' : '')
                }
                title={f ? `${f.name}${isIndex ? ' (index block)' : ''}` : 'free block'}
              >
                <span className="font-mono text-[10px] leading-none">{b}</span>
                {hidden ? (
                  <span className="mt-0.5 text-[8px] leading-none">…</span>
                ) : f ? (
                  <span className="mt-0.5 max-w-full truncate px-0.5 text-[8px] leading-none">
                    {isIndex ? 'idx' : f.name.slice(0, 4)}
                  </span>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>

      {/* FAT */}
      <div className="mt-3 overflow-hidden rounded-xl border border-border bg-background/50">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            File allocation table (FAT)
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">block → next</span>
        </div>
        <div className="grid grid-cols-8 gap-1.5 p-3">
          {fat.map((e, b) => {
            const reading = readCur === b
            const cls =
              e.state === 'linked'
                ? 'border-teal-500/50 bg-teal-500/10 text-teal-300'
                : e.state === 'index'
                  ? 'border-amber-500/40 bg-amber-500/10 text-amber-300'
                  : e.state === 'data'
                    ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-300/80'
                    : 'border-border bg-muted/20 text-muted-foreground/50'
            return (
              <div
                key={b}
                className={
                  'flex aspect-square flex-col items-center justify-center rounded-md border font-mono text-[10px] transition-all duration-200 ' +
                  cls +
                  (reading ? ' scale-110 ring-2 ring-amber-300' : '')
                }
                title={`FAT[${b}]`}
              >
                <span className="leading-none opacity-70">{b}</span>
                <span className="mt-1 leading-none font-semibold">
                  {e.state === 'free' ? '·' : e.label === '' ? '—' : `→${e.label}`}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* session stats */}
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-border bg-background/50 px-4 py-3 font-mono text-xs">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">session</span>
        <span className="text-muted-foreground">
          reads <span className="font-bold text-foreground">{totals.reads}</span>
        </span>
        <span className="text-muted-foreground">
          blocks read <span className="font-bold text-foreground">{totals.blocks}</span>
        </span>
        <span className="text-muted-foreground">
          total seek <span className="font-bold text-amber-300">{totals.seek}</span> blocks
        </span>
        <span className="ml-auto max-w-xs font-sans text-[10px] text-muted-foreground">
          seek starts at block 0 and sums the walk between reads — contiguous files drift smoothly, scattered chains pay
          for every jump.
        </span>
      </div>

      {/* file list */}
      <div className="mt-3 flex flex-col gap-2.5">
        {files.length === 0 && (
          <div className="rounded-xl border border-dashed border-border px-4 py-6 text-center text-sm text-muted-foreground">
            No files yet — allocate one above or load the preset.
          </div>
        )}
        {files.map((f) => {
          const Icon = methodIcon(f.kind)
          const result = readResults[f.id]
          const isReading = readState?.fileId === f.id
          const order = traversalOf(f)
          const livePos = isReading ? Math.min(readState?.pos ?? 0, order.length) : 0
          const liveSeek = isReading ? seekOf(order.slice(0, livePos + 1)) : 0
          return (
            <motion.div
              key={f.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-border bg-card p-3.5"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={
                    'flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[11px] font-medium ' +
                    (f.kind === 'contiguous'
                      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                      : f.kind === 'linked'
                        ? 'border-teal-500/40 bg-teal-500/10 text-teal-300'
                        : 'border-amber-500/40 bg-amber-500/10 text-amber-300')
                  }
                >
                  <Icon className="h-3 w-3" />
                  {f.kind}
                </span>
                <span className="font-mono text-sm font-semibold text-foreground">{f.name}</span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {f.blocks.length} data block{f.blocks.length === 1 ? '' : 's'}
                  {f.indexBlocks.length > 0 ? ` + ${f.indexBlocks.length} index` : ''}
                </span>
                <span className="ml-auto flex items-center gap-1.5">
                  <Button size="sm" variant="outline" onClick={() => startRead(f.id)} disabled={busy}>
                    <BookOpen className="mr-1 h-3.5 w-3.5" /> Read
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => grow(f)} disabled={busy}>
                    <Plus className="mr-1 h-3.5 w-3.5" /> Grow
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => removeFile(f.id)} disabled={busy} aria-label={`Delete ${f.name}`}>
                    <Trash2 className="h-3.5 w-3.5 text-rose-400/80" />
                  </Button>
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-1 font-mono text-[11px] text-muted-foreground">
                <span className="mr-1 text-muted-foreground/60">{f.kind === 'linked' ? 'chain:' : 'blocks:'}</span>
                {order.map((b, i) => {
                  const past = isReading && i < livePos
                  return (
                    <span
                      key={`${b}-${i}`}
                      className={
                        'rounded border px-1.5 py-0.5 ' +
                        (past ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300' : 'border-border bg-muted/20 text-foreground/80')
                      }
                    >
                      {b}
                    </span>
                  )
                })}
              </div>

              {isReading && (
                <div className="mt-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 font-mono text-[11px] text-amber-300">
                  reading… {livePos}/{order.length} blocks · seek so far {liveSeek}
                </div>
              )}
              {!isReading && result && (
                <div className="mt-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-1.5 font-mono text-[11px] text-emerald-300">
                  read {result.total} block{result.total === 1 ? '' : 's'}
                  {f.indexBlocks.length > 0 ? ` (${f.indexBlocks.length} index + ${result.data} data)` : ''} · seek{' '}
                  {result.seek} blocks
                </div>
              )}

              {f.kind === 'indexed' && (
                <div className="mt-2.5 flex flex-col gap-1.5 rounded-lg border border-border bg-background/50 p-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">i-node</span>
                  {f.indexBlocks.map((ib, k) => {
                    const slice = f.blocks.slice(k * PTRS, (k + 1) * PTRS)
                    const next = k < f.indexBlocks.length - 1 ? f.indexBlocks[k + 1] : null
                    return (
                      <div key={ib} className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                        <span className="rounded border border-amber-500/50 bg-amber-500/15 px-1.5 py-0.5 text-amber-300">
                          index @{ib}
                        </span>
                        {Array.from({ length: PTRS }, (_, s) => (
                          <span
                            key={s}
                            className={
                              'min-w-7 rounded border px-1 py-0.5 text-center ' +
                              (slice[s] !== undefined
                                ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300'
                                : 'border-border bg-muted/20 text-muted-foreground/50')
                            }
                          >
                            {slice[s] ?? '·'}
                          </span>
                        ))}
                        <span className="text-muted-foreground">next →</span>
                        <span
                          className={
                            'rounded border px-1.5 py-0.5 ' +
                            (next !== null
                              ? 'border-amber-500/50 bg-amber-500/15 text-amber-300'
                              : 'border-border bg-muted/20 text-muted-foreground/50')
                          }
                        >
                          {next !== null ? next : '∅'}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          load the preset and read each file — <span className="font-mono text-foreground">report.dat</span> reads 4
          blocks with a seek of only 5, while the scattered linked chain pays ~76 for its 6. Then allocate a contiguous
          file, delete it leaving holes, and watch a new contiguous request fail with external fragmentation while the
          disk still shows free blocks.
        </span>
      </div>
    </div>
  )
}

'use client'

/**
 * X12 — Keyboard Dojo: the advanced typing trainer.
 *
 * A full typing laboratory inside StudyVerse:
 *  · 6 test modes — Time (15/30/60/120s), Words (10-100), Quotes (S/M/L),
 *    real Code snippets (TS/JS/Py/C), a 12-step Drill curriculum, Custom text
 *  · live engine — per-character feedback, smooth caret, live WPM/accuracy HUD,
 *    per-second raw/net series, ghost race against your PB pace
 *  · difficulty modifiers — punctuation, numbers, Iron (strict), Blind (no
 *    feedback), Peek (text blurs ahead)
 *  · forensics — per-key accuracy heatmap, confusion pairs, WPM-over-time chart,
 *    run history, per-mode personal bests, streaks, optional key sounds
 *  · a server leaderboard (Prisma TypingResult via /api/typing/results)
 *
 * Everything persists to localStorage; runs sync to the server anonymously
 * (device-scoped, like every other StudyVerse surface).
 */

import {
  type ComponentType,
  type FormEvent,
  type RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AtSign,
  BarChart3,
  CornerDownLeft,
  EyeOff,
  Flame,
  Gauge,
  Ghost,
  Hash,
  Keyboard,
  Medal,
  Play,
  RotateCcw,
  Sparkles,
  Target,
  Timer,
  Trophy,
  Volume2,
  VolumeX,
  Zap,
} from 'lucide-react'
import { toast } from 'sonner'
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip as RTooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { burstConfetti } from '@/lib/celebrate'
import { cn } from '@/lib/utils'
import { useStudy } from '@/store/useStudy'
import { type CodeLang, DRILLS, drillById, pickCode, pickQuote } from '@/lib/typing/content'
import {
  type KeyStat,
  type Modifiers,
  type PbEntry,
  type StoredRun,
  type TestConfig,
  type TestMode,
  type TestResult,
  type TypingTotals,
  type TypingWord,
  DEFAULT_MODIFIERS,
  appendWords,
  computeConsistency,
  configLabel,
  countFinalChars,
  effectiveMods,
  generateTest,
  loadConfusions,
  loadDays,
  loadHistory,
  loadKeyStats,
  loadName,
  loadPbs,
  loadSettings,
  loadTotals,
  makeCodeWords,
  makeWords,
  pbKey,
  saveConfusions,
  saveDays,
  saveHistory,
  saveKeyStats,
  saveName,
  savePbs,
  saveSettings,
  saveTotals,
  streakFromDays,
  todayKey,
} from '@/lib/typing/engine'

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

interface RunResult extends TestResult {
  pb: boolean
  prevPbWpm?: number
  rank?: number | null
}

interface LbEntry {
  id: string
  name: string
  mode: string
  modifiers: string
  wpm: number
  accuracy: number
  consistency: number | null
  durationSec: number
  createdAt: string
  mine?: boolean
}

function pct(n: number): string {
  return `${Math.max(0, Math.min(100, n))}%`
}

function fmtDur(sec: number): string {
  if (sec < 60) return `${Math.round(sec)}s`
  const m = Math.floor(sec / 60)
  const s = Math.round(sec % 60)
  return `${m}m ${String(s).padStart(2, '0')}s`
}

function fmtPractice(sec: number): string {
  if (sec < 60) return `${Math.round(sec)}s`
  if (sec < 3600) return `${Math.round(sec / 60)}m`
  return `${(sec / 3600).toFixed(1)}h`
}

function relTime(iso: string): string {
  const t = Date.now() - new Date(iso).getTime()
  const m = Math.floor(t / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  if (d < 14) return `${d}d ago`
  return new Date(iso).toLocaleDateString()
}

/* --- tiny synthesized key sounds (WebAudio, no assets) --- */
let audioCtx: AudioContext | null = null
function blip(freq: number, dur: number, gain: number, type: OscillatorType): void {
  try {
    if (!audioCtx) {
      const Ctor =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!Ctor) return
      audioCtx = new Ctor()
    }
    const c = audioCtx
    const o = c.createOscillator()
    const g = c.createGain()
    o.type = type
    o.frequency.value = freq
    g.gain.setValueAtTime(gain, c.currentTime)
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur)
    o.connect(g)
    g.connect(c.destination)
    o.start()
    o.stop(c.currentTime + dur)
  } catch {
    /* sound is best-effort */
  }
}

/* ------------------------------------------------------------------ */
/* Keyboard heatmap (doubles as the live drill keyboard)               */
/* ------------------------------------------------------------------ */

const KB_ROWS: string[][] = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
]

function keyTone(stat?: KeyStat): string {
  if (!stat || stat.c + stat.w === 0) {
    return 'border-border/60 bg-muted/40 text-muted-foreground/70'
  }
  const acc = stat.c / (stat.c + stat.w)
  if (acc >= 0.98) return 'border-emerald-500/40 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
  if (acc >= 0.94) return 'border-emerald-500/25 bg-emerald-500/10 text-emerald-700/90 dark:text-emerald-300/80'
  if (acc >= 0.88) return 'border-amber-400/40 bg-amber-400/15 text-amber-700 dark:text-amber-300'
  return 'border-rose-500/40 bg-rose-500/15 text-rose-600 dark:text-rose-300'
}

function KeyboardHeatmap({
  stats,
  nextKey,
  focusKeys,
  legend = false,
}: {
  stats: Record<string, KeyStat>
  nextKey?: string
  focusKeys?: string
  legend?: boolean
}) {
  const focus = useMemo(() => new Set((focusKeys ?? '').toLowerCase().split('')), [focusKeys])
  const renderKey = (k: string, wide = false) => {
    const stat = stats[k]
    const isNext = nextKey === k
    const isFocus = focus.has(k)
    const total = stat ? stat.c + stat.w : 0
    const acc = total ? stat!.c / total : null
    return (
      <span
        key={k}
        title={total ? `${k} — ${(acc! * 100).toFixed(1)}% over ${total} presses` : k}
        className={cn(
          'flex h-7 items-center justify-center rounded-md border font-mono text-[10px] font-semibold transition-all sm:h-8 sm:text-[11px]',
          wide ? 'w-28 sm:w-36' : 'w-[7.2vw] max-w-8 sm:w-8',
          keyTone(stat),
          isNext && 'scale-110 border-emerald-400 bg-emerald-400/25 text-emerald-700 shadow-[0_0_0_2px_rgba(52,211,153,0.35)] dark:text-emerald-200',
          !isNext && isFocus && 'border-emerald-400/50 ring-1 ring-emerald-400/30',
          total > 40 && 'shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]'
        )}
      >
        {k === ' ' ? 'space' : k.toUpperCase()}
      </span>
    )
  }
  return (
    <div className="space-y-1.5">
      <div className="flex flex-col items-center gap-1.5">
        {KB_ROWS.map((row, i) => (
          <div key={i} className="flex justify-center gap-1.5">
            {row.map((k) => renderKey(k))}
          </div>
        ))}
        <div className="flex justify-center gap-1.5">{renderKey(' ', true)}</div>
      </div>
      {legend && (
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-1 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-sm border border-emerald-500/40 bg-emerald-500/25" /> ≥98%</span>
          <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-sm border border-emerald-500/25 bg-emerald-500/10" /> 94-97%</span>
          <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-sm border border-amber-400/40 bg-amber-400/20" /> 88-93%</span>
          <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-sm border border-rose-500/40 bg-rose-500/20" /> &lt;88% — drill these</span>
          <span>press count = key volume</span>
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Leaderboard                                                         */
/* ------------------------------------------------------------------ */

const LB_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'time-15', label: '15s' },
  { id: 'time-30', label: '30s' },
  { id: 'time-60', label: '60s' },
  { id: 'time-120', label: '120s' },
  { id: 'words-25', label: '25 words' },
  { id: 'quote', label: 'Quotes' },
  { id: 'code', label: 'Code' },
]

function LeaderboardPanel({
  name,
  onName,
  tick,
  deviceId,
}: {
  name: string
  onName: (n: string) => void
  tick: number
  deviceId: string
}) {
  const [entries, setEntries] = useState<LbEntry[] | null>(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    let alive = true
    const params = new URLSearchParams()
    if (filter !== 'all') params.set('mode', filter)
    if (deviceId) params.set('deviceId', deviceId)
    fetch(`/api/typing/results${params.toString() ? `?${params.toString()}` : ''}`)
      .then((r) => r.json())
      .then((d: { entries?: LbEntry[] }) => {
        if (alive) setEntries(d.entries ?? [])
      })
      .catch(() => {
        /* offline-tolerant */
      })
    return () => {
      alive = false
    }
  }, [filter, tick, deviceId])

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-1.5">
          {LB_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                'rounded-full border px-3 py-1 text-[12px] font-medium transition-all',
                filter === f.id
                  ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                  : 'border-border/70 bg-card/60 text-muted-foreground hover:text-foreground'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Medal className="h-4 w-4 shrink-0 text-amber-500" />
          <Input
            value={name}
            onChange={(e) => onName(e.target.value.slice(0, 24))}
            placeholder="your dojo name"
            aria-label="Leaderboard name"
            className="h-8 w-44 bg-card/60 text-[13px]"
          />
        </div>
      </div>

      {loadingPlaceholder(entries) ? (
        <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
          Loading the wall of speed…
        </div>
      ) : !entries || entries.length === 0 ? (
        <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border/70 text-sm text-muted-foreground">
          <Trophy className="h-6 w-6 text-muted-foreground/50" />
          No runs on the board yet — finish a test to claim rank #1.
        </div>
      ) : (
        <div className="max-h-96 overflow-y-auto rounded-xl border border-border/60">
          <table className="w-full text-left text-[13px]">
            <thead className="sticky top-0 z-10 bg-muted/80 backdrop-blur">
              <tr className="text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-3 py-2 font-semibold">#</th>
                <th className="px-3 py-2 font-semibold">Typist</th>
                <th className="px-3 py-2 font-semibold">Mode</th>
                <th className="px-3 py-2 text-right font-semibold">WPM</th>
                <th className="hidden px-3 py-2 text-right font-semibold sm:table-cell">Acc</th>
                <th className="hidden px-3 py-2 text-right font-semibold sm:table-cell">Cons</th>
                <th className="hidden px-3 py-2 text-right font-semibold md:table-cell">When</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e, i) => (
                <tr
                  key={e.id}
                  className={cn(
                    'border-t border-border/50',
                    e.mine && 'bg-emerald-500/[0.07]'
                  )}
                >
                  <td className="px-3 py-2 font-mono text-muted-foreground">
                    {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}
                  </td>
                  <td className={cn('px-3 py-2 font-medium', e.mine && 'text-emerald-700 dark:text-emerald-300')}>
                    {e.name}
                    {e.mine ? ' (you)' : ''}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    {e.mode}
                    {e.modifiers ? <span className="ml-1 text-[11px] opacity-70">+{e.modifiers}</span> : null}
                  </td>
                  <td className="px-3 py-2 text-right font-mono font-bold">{e.wpm}</td>
                  <td className="hidden px-3 py-2 text-right font-mono text-muted-foreground sm:table-cell">
                    {e.accuracy}%
                  </td>
                  <td className="hidden px-3 py-2 text-right font-mono text-muted-foreground sm:table-cell">
                    {e.consistency ?? '—'}
                  </td>
                  <td className="hidden px-3 py-2 text-right text-muted-foreground md:table-cell">
                    {relTime(e.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="text-[11px] text-muted-foreground/70">
        Runs sync anonymously (device-scoped, no account). Submissions under 70% accuracy stay
        off the board — speed without control is just noise.
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* The Dojo                                                            */
/* ------------------------------------------------------------------ */

const MODES: { id: TestMode; label: string }[] = [
  { id: 'time', label: 'Time' },
  { id: 'words', label: 'Words' },
  { id: 'quote', label: 'Quote' },
  { id: 'code', label: 'Code' },
  { id: 'drill', label: 'Drills' },
  { id: 'custom', label: 'Custom' },
]

const TIME_PARAMS = [15, 30, 60, 120]
const WORD_PARAMS = [10, 25, 50, 100]
const QUOTE_PARAMS: { id: 's' | 'm' | 'l'; label: string }[] = [
  { id: 's', label: 'short' },
  { id: 'm', label: 'medium' },
  { id: 'l', label: 'long' },
]

type ParamMem = { time: number; words: number; quote: 's' | 'm' | 'l'; code: CodeLang | 'all'; drill: string }

export function TypingView() {
  const ensureDevice = useStudy((s) => s.ensureDevice)

  /* ---- configuration state ---- */
  const [cfg, setCfg] = useState<TestConfig>({ mode: 'time', param: 60, mods: { ...DEFAULT_MODIFIERS } })
  const [customText, setCustomText] = useState('')
  const [sound, setSound] = useState(false)
  const [name, setName] = useState('')

  /* ---- run state ---- */
  const [words, setWords] = useState<TypingWord[]>([])
  const [pos, setPos] = useState({ w: 0, c: 0 })
  const [phase, setPhase] = useState<'idle' | 'running' | 'done'>('idle')
  const [focused, setFocused] = useState(false)
  const [source, setSource] = useState('')
  const [testId, setTestId] = useState(0)
  const [result, setResult] = useState<RunResult | null>(null)
  const [hud, setHud] = useState<{ secs: number; wpm: number; acc: number; progress: number; youRace: number; ghostRace: number } | null>(null)

  /* ---- persisted state (mirrors) ---- */
  const [history, setHistory] = useState<StoredRun[]>([])
  const [pbs, setPbs] = useState<Record<string, PbEntry>>({})
  const [totals, setTotals] = useState<TypingTotals>({ tests: 0, seconds: 0, chars: 0 })
  const [streak, setStreak] = useState(0)
  const [keyStats, setKeyStats] = useState<Record<string, KeyStat>>({})
  const [confusions, setConfusions] = useState<Record<string, number>>({})
  const [boardTick, setBoardTick] = useState(0)
  const [tab, setTab] = useState('analytics')
  const [deviceId, setDeviceId] = useState('')

  /* ---- engine refs (source of truth between renders) ---- */
  const cfgRef = useRef(cfg)
  const phaseRef = useRef(phase)
  const wordsRef = useRef<TypingWord[]>([])
  const posRef = useRef({ w: 0, c: 0 })
  const keystrokesRef = useRef({ correct: 0, wrong: 0 })
  const correctFinalRef = useRef(0)
  const spacesRef = useRef(0)
  const startedAtRef = useRef(0)
  const lastSecRef = useRef(0)
  const secCharsRef = useRef(0)
  const secErrsRef = useRef(0)
  const rawSeriesRef = useRef<number[]>([])
  const netSeriesRef = useRef<number[]>([])
  const errSeriesRef = useRef<number[]>([])
  const keyStatsRef = useRef<Record<string, KeyStat>>({})
  const confusionsRef = useRef<Record<string, number>>({})
  const inputRef = useRef<HTMLInputElement>(null)
  const caretRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const activeCharRef = useRef<HTMLSpanElement | null>(null)
  const paramMemRef = useRef<ParamMem>({ time: 60, words: 25, quote: 'm', code: 'all', drill: 'home-row-anchor' })
  const customTextRef = useRef('')
  const soundRef = useRef(false)
  const nameRef = useRef('')
  const pbRef = useRef<PbEntry | undefined>(undefined)
  const desktopRef = useRef(true)

  /* ---------------------------------------------------------------- */
  /* Configuration + persistence                                      */
  /* ---------------------------------------------------------------- */

  const persistSettings = useCallback((c: TestConfig) => {
    saveSettings({
      mode: c.mode,
      timeParam: c.mode === 'time' ? Number(c.param) : paramMemRef.current.time,
      wordsParam: c.mode === 'words' ? Number(c.param) : paramMemRef.current.words,
      quoteSize: c.mode === 'quote' ? (c.param as 's' | 'm' | 'l') : paramMemRef.current.quote,
      codeLang: c.mode === 'code' ? (c.param as CodeLang | 'all') : paramMemRef.current.code,
      drillId: c.mode === 'drill' ? String(c.param) : paramMemRef.current.drill,
      mods: c.mods,
      sound: soundRef.current,
      name: nameRef.current,
    })
  }, [])

  const resetRunCounters = useCallback(() => {
    posRef.current = { w: 0, c: 0 }
    keystrokesRef.current = { correct: 0, wrong: 0 }
    correctFinalRef.current = 0
    spacesRef.current = 0
    startedAtRef.current = 0
    lastSecRef.current = 0
    secCharsRef.current = 0
    secErrsRef.current = 0
    rawSeriesRef.current = []
    netSeriesRef.current = []
    errSeriesRef.current = []
    setPos({ w: 0, c: 0 })
    setHud(null)
    setResult(null)
  }, [])

  const setPhaseSafe = useCallback((p: 'idle' | 'running' | 'done') => {
    phaseRef.current = p
    setPhase(p)
  }, [])

  /** build word list + source label for a config */
  const buildWords = useCallback((c: TestConfig): { words: TypingWord[]; source: string } => {
    if (c.mode === 'quote') {
      const q = pickQuote((c.param as 's' | 'm' | 'l') || 'm')
      return { words: makeWords(q.text), source: `— ${q.author}` }
    }
    if (c.mode === 'code') {
      const s = pickCode((c.param as CodeLang | 'all') || 'all')
      return { words: makeCodeWords(s.code), source: `${s.title} · ${s.lang}` }
    }
    if (c.mode === 'drill') {
      const d = drillById(String(c.param))
      return { words: generateTest(c), source: d ? d.desc : '' }
    }
    if (c.mode === 'custom') {
      const text = (customTextRef.current || c.customText || '').trim().slice(0, 900)
      if (text.length < 3) {
        return { words: makeWords('type your own text above, then press start'), source: 'custom' }
      }
      return { words: makeWords(text), source: 'your text' }
    }
    return { words: generateTest(c), source: '' }
  }, [])

  const applyCfg = useCallback(
    (next: TestConfig) => {
      cfgRef.current = next
      setCfg(next)
      if (next.mode === 'time') paramMemRef.current.time = Number(next.param)
      if (next.mode === 'words') paramMemRef.current.words = Number(next.param)
      if (next.mode === 'quote') paramMemRef.current.quote = next.param as 's' | 'm' | 'l'
      if (next.mode === 'code') paramMemRef.current.code = next.param as CodeLang | 'all'
      if (next.mode === 'drill') paramMemRef.current.drill = String(next.param)
      persistSettings(next)
      const built = buildWords(next)
      wordsRef.current = built.words
      setWords(built.words)
      setSource(built.source)
      resetRunCounters()
      setPhaseSafe('idle')
      setTestId((t) => t + 1)
    },
    [buildWords, persistSettings, resetRunCounters, setPhaseSafe]
  )

  const repeatTest = useCallback(() => {
    // same text, fresh states
    wordsRef.current = wordsRef.current.map((w) => ({
      text: w.text,
      freeForm: w.freeForm,
      chars: w.text.split('').map((ch) => ({ char: ch, state: 'pending' as const })),
    }))
    setWords(wordsRef.current)
    resetRunCounters()
    setPhaseSafe('idle')
    setTestId((t) => t + 1)
  }, [resetRunCounters, setPhaseSafe])

  /* ---- mount: hydrate settings + stats ---- */
  useEffect(() => {
    desktopRef.current =
      typeof window !== 'undefined' && window.matchMedia
        ? window.matchMedia('(pointer: fine)').matches
        : true
    const s = loadSettings()
    paramMemRef.current = {
      time: s.timeParam,
      words: s.wordsParam,
      quote: s.quoteSize,
      code: s.codeLang,
      drill: s.drillId,
    }
    soundRef.current = s.sound
    setSound(s.sound)
    const loadedName = loadName() || s.name || ''
    nameRef.current = loadedName
    setName(loadedName)
    setHistory(loadHistory())
    setPbs(loadPbs())
    setTotals(loadTotals())
    const ks = loadKeyStats()
    keyStatsRef.current = ks
    setKeyStats(ks)
    const cf = loadConfusions()
    confusionsRef.current = cf
    setConfusions(cf)
    setStreak(streakFromDays(loadDays()))
    applyCfg({
      mode: s.mode,
      param:
        s.mode === 'time'
          ? s.timeParam
          : s.mode === 'words'
            ? s.wordsParam
            : s.mode === 'quote'
              ? s.quoteSize
              : s.mode === 'code'
                ? s.codeLang
                : s.mode === 'drill'
                  ? s.drillId
                  : '',
      mods: s.mods,
    })
  }, [])

  /* ---- keep PB ref fresh (ghost race) ---- */
  useEffect(() => {
    pbRef.current = cfg.mode === 'time' ? pbs[pbKey(cfg)] : undefined
  }, [pbs, cfg])

  /* ---- device id for leaderboard `mine` highlighting ---- */
  useEffect(() => {
    setDeviceId(ensureDevice())
  }, [ensureDevice])

  /* ---- autofocus the hidden input on new tests (desktop) ---- */
  useEffect(() => {
    if (desktopRef.current && phaseRef.current !== 'done') {
      inputRef.current?.focus()
    }
  }, [testId])

  /* ---------------------------------------------------------------- */
  /* Engine                                                           */
  /* ---------------------------------------------------------------- */

  const recordStroke = useCallback((expected: string, typed: string, ok: boolean) => {
    if (ok) keystrokesRef.current.correct += 1
    else keystrokesRef.current.wrong += 1
    secCharsRef.current += 1
    if (!ok) secErrsRef.current += 1
    const key = expected.toLowerCase()
    if (key.length === 1) {
      const s = (keyStatsRef.current[key] ??= { c: 0, w: 0 })
      if (ok) s.c += 1
      else s.w += 1
    }
    if (!ok && typed.length === 1 && expected !== typed) {
      const ck = `${expected}>${typed}`
      confusionsRef.current[ck] = (confusionsRef.current[ck] ?? 0) + 1
    }
  }, [])

  const finishTest = useCallback(() => {
    if (phaseRef.current !== 'running') return
    const c = cfgRef.current
    const elapsed = Math.max(0.5, (performance.now() - startedAtRef.current) / 1000)
    const dur = c.mode === 'time' ? Math.min(elapsed, Number(c.param)) : elapsed

    // flush the partial second
    lastSecRef.current += 1
    rawSeriesRef.current.push(secCharsRef.current * 12)
    errSeriesRef.current.push(secErrsRef.current)
    const netChars = correctFinalRef.current + spacesRef.current
    netSeriesRef.current.push(Math.round((netChars * 12) / Math.max(1, lastSecRef.current)))

    const mins = Math.max(dur, 0.5) / 60
    const strokes = keystrokesRef.current.correct + keystrokesRef.current.wrong
    const rawWpm = Math.round(strokes / 5 / mins)
    const wpm = Math.round(netChars / 5 / mins)
    const accuracy = strokes ? Math.round((keystrokesRef.current.correct / strokes) * 100) : 100
    const consistency = computeConsistency(rawSeriesRef.current)
    const { incorrect } = countFinalChars(wordsRef.current)

    const res: RunResult = {
      wpm,
      rawWpm,
      accuracy,
      consistency,
      durationSec: Math.round(dur),
      correctChars: netChars,
      incorrectChars: incorrect,
      rawSeries: rawSeriesRef.current.slice(),
      netSeries: netSeriesRef.current.slice(),
      errSeries: errSeriesRef.current.slice(),
      config: c,
      label: configLabel(c),
      at: new Date().toISOString(),
      pb: false,
      rank: null,
    }

    /* ---- persistence ---- */
    const key = pbKey(c)
    const prevPb = pbs[key]
    const isPb = wpm > (prevPb?.wpm ?? 0) && wpm >= 8
    if (isPb) {
      res.pb = true
      res.prevPbWpm = prevPb?.wpm
      const nextPbs = { ...pbs, [key]: { wpm, acc: accuracy, cons: consistency, at: res.at } }
      setPbs(nextPbs)
      savePbs(nextPbs)
    }
    const run: StoredRun = {
      at: res.at,
      mode: key,
      label: res.label,
      mods: effectiveMods(c).join(','),
      wpm,
      raw: rawWpm,
      acc: accuracy,
      cons: consistency,
      dur: res.durationSec,
      chars: netChars,
      errors: keystrokesRef.current.wrong,
      pb: isPb,
    }
    const nextHistory = [run, ...history].slice(0, 80)
    setHistory(nextHistory)
    saveHistory(nextHistory)
    const nextTotals = {
      tests: totals.tests + 1,
      seconds: totals.seconds + res.durationSec,
      chars: totals.chars + netChars,
    }
    setTotals(nextTotals)
    saveTotals(nextTotals)
    setKeyStats(keyStatsRef.current)
    saveKeyStats(keyStatsRef.current)
    setConfusions(confusionsRef.current)
    saveConfusions(confusionsRef.current)
    const days = loadDays()
    if (!days.includes(todayKey())) saveDays([...days, todayKey()])
    setStreak(streakFromDays(loadDays()))

    setResult(res)
    setPhaseSafe('done')

    if (isPb) {
      burstConfetti({ count: 80, power: 1.1 })
      toast.success(`New personal best — ${wpm} WPM`, {
        description: `${configLabel(c)} · ${accuracy}% accuracy`,
      })
    }

    /* ---- server leaderboard (anonymous, device-scoped) ---- */
    if (wpm >= 8 && res.durationSec >= 8 && accuracy >= 60) {
      const deviceId = ensureDevice()
      fetch('/api/typing/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deviceId,
          name: (nameRef.current || 'Anonymous').slice(0, 24),
          mode:
            c.mode === 'time'
              ? `time-${c.param}`
              : c.mode === 'words'
                ? `words-${c.param}`
                : c.mode,
          modifiers: effectiveMods(c).join(','),
          wpm,
          rawWpm,
          accuracy,
          consistency,
          durationSec: res.durationSec,
          chars: netChars,
          errors: keystrokesRef.current.wrong,
        }),
      })
        .then((r) => r.json())
        .then((d: { rank?: number }) => {
          if (typeof d.rank === 'number') {
            setResult((prev) => (prev ? { ...prev, rank: d.rank } : prev))
            if (tab === 'leaderboard') setBoardTick((t) => t + 1)
          }
        })
        .catch(() => {
          /* offline-tolerant */
        })
    }
  }, [ensureDevice, history, pbs, setPhaseSafe, tab, totals])

  const checkFinishOrAppend = useCallback(() => {
    const c = cfgRef.current
    const { w } = posRef.current
    const last = wordsRef.current.length - 1
    if (c.mode === 'time') {
      if (w > last - 35) {
        wordsRef.current = appendWords(wordsRef.current, c, 35)
        setWords(wordsRef.current)
      }
      return
    }
    const word = wordsRef.current[w]
    if (w === last && word && posRef.current.c >= word.text.length) {
      finishTest()
    }
  }, [finishTest])

  const typeChar = useCallback(
    (ch: string) => {
      if (phaseRef.current === 'done') return
      if (phaseRef.current === 'idle') {
        startedAtRef.current = performance.now()
        setPhaseSafe('running')
      }
      const { w, c } = posRef.current
      const word = wordsRef.current[w]
      if (!word) return
      const chars = word.chars
      if (c < word.text.length) {
        const expected = word.text[c]
        const ok = ch === expected
        chars[c] = { char: expected, typed: ch, state: ok ? 'correct' : 'incorrect' }
        recordStroke(expected, ch, ok)
        if (ok) {
          correctFinalRef.current += 1
          posRef.current = { w, c: c + 1 }
          if (soundRef.current) blip(520 + Math.random() * 60, 0.02, 0.012, 'triangle')
        } else if (!cfgRef.current.mods.iron) {
          posRef.current = { w, c: c + 1 }
          if (soundRef.current) blip(150, 0.05, 0.03, 'square')
        } else {
          if (soundRef.current) blip(150, 0.05, 0.03, 'square')
        }
        setPos(posRef.current)
        setWords(wordsRef.current.slice())
        checkFinishOrAppend()
      } else {
        // extra characters beyond the word
        if (chars.length < word.text.length + 8) {
          chars.push({ char: ch, typed: ch, state: 'extra' })
          posRef.current = { w, c: c + 1 }
        }
        recordStroke(ch, ch, false)
        if (soundRef.current) blip(150, 0.05, 0.03, 'square')
        setPos(posRef.current)
        setWords(wordsRef.current.slice())
      }
    },
    [checkFinishOrAppend, recordStroke, setPhaseSafe]
  )

  const advanceWord = useCallback(() => {
    if (phaseRef.current === 'done') return
    if (phaseRef.current === 'idle') {
      startedAtRef.current = performance.now()
      setPhaseSafe('running')
    }
    const { w, c } = posRef.current
    const word = wordsRef.current[w]
    if (!word) return
    if (c === 0 && word.chars.every((ch) => ch.state === 'pending')) return // leading space on untouched word
    const complete = c >= word.text.length
    if (cfgRef.current.mods.iron && !complete) {
      // strict mode: no skipping words
      recordStroke(' ', ' ', false)
      if (soundRef.current) blip(150, 0.05, 0.03, 'square')
      return
    }
    if (!complete) {
      for (let i = c; i < word.text.length; i++) {
        word.chars[i] = { char: word.text[i], state: 'incorrect' }
      }
    }
    recordStroke(' ', ' ', complete)
    if (complete) spacesRef.current += 1
    posRef.current = { w: w + 1, c: 0 }
    setPos(posRef.current)
    setWords(wordsRef.current.slice())
    const c2 = cfgRef.current
    if (w + 1 >= wordsRef.current.length && c2.mode !== 'time') {
      finishTest()
    } else {
      checkFinishOrAppend()
    }
  }, [checkFinishOrAppend, finishTest, recordStroke, setPhaseSafe])

  const handleBackspace = useCallback(() => {
    if (phaseRef.current === 'done') return
    const { w, c } = posRef.current
    if (c === 0) return
    const word = wordsRef.current[w]
    if (!word) return
    const idx = c - 1
    const prev = word.chars[idx]
    if (prev.state === 'extra') {
      word.chars.splice(idx, 1)
    } else {
      if (prev.state === 'correct') correctFinalRef.current = Math.max(0, correctFinalRef.current - 1)
      word.chars[idx] = { char: word.text[idx], state: 'pending' }
    }
    posRef.current = { w, c: idx }
    setPos(posRef.current)
    setWords(wordsRef.current.slice())
  }, [])

  const handleEnterKey = useCallback(() => {
    if (phaseRef.current === 'done') {
      applyCfg(cfgRef.current)
      return
    }
    const { w, c } = posRef.current
    const word = wordsRef.current[w]
    if (word?.freeForm && word.text[c] === '\n') {
      typeChar('\n')
    }
  }, [applyCfg, typeChar])

  /* ---- keyboard routing ---- */
  const onKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLInputElement>) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      if (e.key === 'Tab') {
        e.preventDefault()
        applyCfg(cfgRef.current)
        return
      }
      if (e.key === 'Escape') {
        e.preventDefault()
        applyCfg(cfgRef.current)
        return
      }
      if (phaseRef.current === 'done') {
        if (e.key === 'Enter') {
          e.preventDefault()
          applyCfg(cfgRef.current)
        } else if (e.key.toLowerCase() === 'r') {
          e.preventDefault()
          repeatTest()
        }
        return
      }
      if (e.key === 'Backspace') {
        e.preventDefault()
        handleBackspace()
        return
      }
      if (e.key === 'Enter') {
        e.preventDefault()
        handleEnterKey()
        return
      }
      if (e.key.length === 1) {
        e.preventDefault()
        if (e.key === ' ') {
          const word = wordsRef.current[posRef.current.w]
          if (word?.freeForm) typeChar(' ')
          else advanceWord()
        } else {
          typeChar(e.key)
        }
      }
    },
    [advanceWord, applyCfg, handleBackspace, handleEnterKey, repeatTest, typeChar]
  )

  /* ---- mobile IME fallback ---- */
  const onInputEvt = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const input = e.currentTarget
      const native = e.nativeEvent as InputEvent
      if (native && typeof native.inputType === 'string' && native.inputType.startsWith('delete')) {
        handleBackspace()
        input.value = ''
        return
      }
      const v = input.value
      input.value = ''
      if (!v) return
      for (const ch of v) {
        if (ch === '\n') handleEnterKey()
        else if (ch === ' ') {
          const word = wordsRef.current[posRef.current.w]
          if (word?.freeForm) typeChar(' ')
          else advanceWord()
        } else {
          typeChar(ch)
        }
      }
    },
    [advanceWord, handleBackspace, handleEnterKey, typeChar]
  )

  /* ---- timer tick ---- */
  useEffect(() => {
    if (phase !== 'running') return
    const iv = setInterval(() => {
      const c = cfgRef.current
      const elapsed = (performance.now() - startedAtRef.current) / 1000
      const wholeSec = Math.floor(elapsed)
      while (lastSecRef.current < wholeSec) {
        lastSecRef.current += 1
        rawSeriesRef.current.push(secCharsRef.current * 12)
        errSeriesRef.current.push(secErrsRef.current)
        netSeriesRef.current.push(
          Math.round(((correctFinalRef.current + spacesRef.current) * 12) / Math.max(1, lastSecRef.current))
        )
        secCharsRef.current = 0
        secErrsRef.current = 0
      }
      const mins = Math.max(elapsed, 0.5) / 60
      const netChars = correctFinalRef.current + spacesRef.current
      const strokes = keystrokesRef.current.correct + keystrokesRef.current.wrong
      const pb = pbRef.current
      const limit = c.mode === 'time' ? Number(c.param) : 0
      setHud({
        secs: elapsed,
        wpm: Math.round(netChars / 5 / mins),
        acc: strokes ? Math.round((keystrokesRef.current.correct / strokes) * 100) : 100,
        progress:
          c.mode === 'time'
            ? wordsRef.current.length
              ? (posRef.current.w + 1) / wordsRef.current.length
              : 0
            : wordsRef.current.length
              ? (posRef.current.w + 1) / wordsRef.current.length
              : 0,
        youRace: pb ? Math.min(1, netChars / Math.max(1, (pb.wpm * 5 * limit) / 60)) : 0,
        ghostRace: pb ? Math.min(1, elapsed / Math.max(1, limit)) : 0,
      })
      if (c.mode === 'time' && elapsed >= Number(c.param)) {
        finishTest()
      }
    }, 200)
    return () => clearInterval(iv)
  }, [phase, finishTest])

  /* ---- caret position + line window scroll live in <CaretSync> below —
     it mounts with the surface subtree, so it also fires after AnimatePresence
     swaps views (the parent's own layout effect would run too early, while the
     exiting clone still owns the refs). ---- */

  /* ---------------------------------------------------------------- */
  /* Derived                                                           */
  /* ---------------------------------------------------------------- */

  const ghostPb = cfg.mode === 'time' ? pbs[pbKey(cfg)] : undefined
  const drillDef = cfg.mode === 'drill' ? drillById(String(cfg.param)) : undefined
  const drillPb = drillDef ? pbs[`drill-${drillDef.id}`] : undefined

  const nextKey = useMemo(() => {
    if (cfg.mode !== 'drill' || phase === 'done') return undefined
    const word = words[pos.w]
    if (!word) return undefined
    if (pos.c >= word.chars.length) return ' '
    const ch = word.chars[pos.c].char
    return ch === ' ' ? ' ' : ch.toLowerCase()
  }, [cfg.mode, phase, words, pos])

  const bestWpm = useMemo(() => Math.max(0, ...history.map((h) => h.wpm)), [history])
  const avg10 = useMemo(() => {
    const last = history.slice(0, 10)
    if (!last.length) return 0
    return Math.round(last.reduce((a, b) => a + b.wpm, 0) / last.length)
  }, [history])

  const topConfusions = useMemo(
    () =>
      Object.entries(confusions)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8),
    [confusions]
  )

  const currentPb = pbs[pbKey(cfg)]
  const paramRow = useMemo(() => {
    if (cfg.mode === 'time') return TIME_PARAMS.map((t) => ({ id: t as number, label: `${t}` }))
    if (cfg.mode === 'words') return WORD_PARAMS.map((t) => ({ id: t as number, label: `${t}` }))
    if (cfg.mode === 'quote') return QUOTE_PARAMS.map((q) => ({ id: q.id, label: q.label }))
    return []
  }, [cfg.mode])

  /* ---------------------------------------------------------------- */
  /* Render helpers                                                    */
  /* ---------------------------------------------------------------- */

  const charClass = (ch: { char: string; state: string }) => {
    if (ch.char === '\n') {
      if (ch.state === 'correct') return 'text-emerald-500/70'
      if (ch.state === 'incorrect') return 'text-rose-500 underline decoration-rose-500/60'
      return 'text-muted-foreground/40'
    }
    if (cfg.mods.blind) return 'text-foreground/60'
    switch (ch.state) {
      case 'correct':
        return 'text-foreground'
      case 'incorrect':
        return 'text-rose-500 underline decoration-rose-500/60 decoration-2 underline-offset-[5px]'
      case 'extra':
        return 'rounded-[2px] bg-rose-500/15 text-rose-500/90'
      default:
        return 'text-foreground/45'
    }
  }

  const wordClass = (wi: number) =>
    cn(
      'rounded-[4px] px-[0.24em] transition-opacity',
      words[wi]?.freeForm ? 'block whitespace-pre' : 'inline-block',
      wi === pos.w && 'bg-muted/50',
      cfg.mods.peek && wi < pos.w && 'opacity-25 blur-[2px]',
      cfg.mods.peek && wi > pos.w + 1 && 'opacity-20 blur-[3px]'
    )

  const modsActive = (key: keyof Modifiers) => cfg.mods[key]
  const setMod = (key: keyof Modifiers, value: boolean) => {
    const next: TestConfig = { ...cfgRef.current, mods: { ...cfgRef.current.mods, [key]: value } }
    if (key === 'punc' || key === 'nums') {
      applyCfg(next) // text changes → fresh test
    } else {
      cfgRef.current = next
      setCfg(next)
      persistSettings(next)
    }
  }

  const statChip = (icon: ComponentType<{ className?: string }>, label: string, value: string) => (
    <div className="flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1.5">
      <span className="flex h-6 w-6 items-center justify-center rounded-md border border-emerald-400/25 bg-emerald-400/10">
        <ChipIcon icon={icon} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className="font-mono text-[12px] font-bold">{value}</span>
      </span>
    </div>
  )

  /* ---------------------------------------------------------------- */
  /* Render                                                            */
  /* ---------------------------------------------------------------- */

  const showConfig = phase !== 'running'
  const timeLeft = hud && cfg.mode === 'time' ? Math.max(0, Number(cfg.param) - hud.secs) : null

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">
      {/* ---------- header ---------- */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/20 to-amber-300/10">
            <Keyboard className="h-5 w-5 text-emerald-300" />
            <span className="absolute inset-0 rounded-xl bg-emerald-400/10 blur-md sv-pulse-glow" />
          </span>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              Keyboard <span className="text-emerald-500 dark:text-emerald-300">Dojo</span>
            </h1>
            <p className="text-xs text-muted-foreground sm:text-[13px]">
              The typing laboratory — timed sprints, quotes, real code, a 12-step drill
              curriculum and per-key forensics.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {statChip(Trophy, 'PB here', currentPb ? `${currentPb.wpm} wpm` : '—')}
          {statChip(Gauge, 'avg ·10', avg10 ? `${avg10} wpm` : '—')}
          {statChip(Flame, 'streak', `${streak}d`)}
          {statChip(BarChart3, 'runs', `${totals.tests}`)}
          {statChip(Timer, 'practice', fmtPractice(totals.seconds))}
        </div>
      </div>

      {/* ---------- trainer card ---------- */}
      <Card className="mt-6 border-border/70 bg-card/70 shadow-none">
        <CardContent className="p-4 sm:p-6">
          <AnimatePresence mode="wait" initial={false}>
            {showConfig ? (
              <motion.div
                key="config"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                {/* mode row */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {MODES.map((m) => {
                    const param =
                      m.id === 'time'
                        ? paramMemRef.current.time
                        : m.id === 'words'
                          ? paramMemRef.current.words
                          : m.id === 'quote'
                            ? paramMemRef.current.quote
                            : m.id === 'code'
                              ? paramMemRef.current.code
                              : m.id === 'drill'
                                ? paramMemRef.current.drill
                                : ''
                    return (
                      <button
                        key={m.id}
                        onClick={() => applyCfg({ ...cfgRef.current, mode: m.id, param })}
                        className={cn(
                          'rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-all',
                          cfg.mode === m.id
                            ? 'bg-emerald-500/15 text-emerald-700 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.3)] dark:text-emerald-300'
                            : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                        )}
                      >
                        {m.label}
                      </button>
                    )
                  })}
                  <div className="ml-auto flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        const next = !sound
                        setSound(next)
                        soundRef.current = next
                        persistSettings(cfgRef.current)
                      }}
                      aria-pressed={sound}
                      title={sound ? 'Key sounds on' : 'Key sounds off'}
                      aria-label="Toggle key sounds"
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full border transition-all',
                        sound
                          ? 'border-emerald-400/40 bg-emerald-400/15 text-emerald-600 dark:text-emerald-300'
                          : 'border-border/70 bg-card/60 text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {sound ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
                    </button>
                    <button
                      onClick={() => applyCfg(cfgRef.current)}
                      title="Restart (Tab)"
                      aria-label="Restart test"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-card/60 text-muted-foreground transition-all hover:text-foreground"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* param row */}
                {paramRow.length > 0 && (
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    {paramRow.map((p) => (
                      <button
                        key={String(p.id)}
                        onClick={() => applyCfg({ ...cfgRef.current, param: p.id })}
                        className={cn(
                          'rounded-full border px-3 py-1 font-mono text-[12px] transition-all',
                          String(cfg.param) === String(p.id)
                            ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                            : 'border-transparent text-muted-foreground hover:border-border/70 hover:text-foreground'
                        )}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* code language row */}
                {cfg.mode === 'code' && (
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    {(['all', 'ts', 'js', 'py', 'c'] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => applyCfg({ ...cfgRef.current, param: l })}
                        className={cn(
                          'rounded-full border px-3 py-1 font-mono text-[12px] uppercase transition-all',
                          cfg.param === l
                            ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                            : 'border-transparent text-muted-foreground hover:border-border/70 hover:text-foreground'
                        )}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                )}

                {/* drill picker */}
                {cfg.mode === 'drill' && (
                  <div className="mt-3 space-y-2">
                    <div className="flex max-h-28 flex-wrap gap-1.5 overflow-y-auto pr-1">
                      {DRILLS.map((d) => (
                        <button
                          key={d.id}
                          onClick={() => applyCfg({ ...cfgRef.current, param: d.id })}
                          title={d.desc}
                          className={cn(
                            'flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] transition-all',
                            cfg.param === d.id
                              ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                              : 'border-border/70 bg-card/60 text-muted-foreground hover:text-foreground'
                          )}
                        >
                          {d.title}
                          <span
                            className={cn(
                              'rounded-full px-1.5 text-[9px] font-bold uppercase',
                              d.level === 'foundation'
                                ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300'
                                : d.level === 'core'
                                  ? 'bg-amber-400/15 text-amber-600 dark:text-amber-300'
                                  : 'bg-rose-500/15 text-rose-600 dark:text-rose-300'
                            )}
                          >
                            {d.level[0]}
                          </span>
                        </button>
                      ))}
                    </div>
                    {drillDef && (
                      <p className="text-[12px] text-muted-foreground">
                        <span className="font-semibold text-foreground/80">{drillDef.title}:</span>{' '}
                        {drillDef.desc}
                        {drillPb ? (
                          <span className="ml-2 rounded-full bg-amber-400/15 px-2 py-0.5 font-mono text-[11px] text-amber-600 dark:text-amber-300">
                            best {drillPb.wpm} wpm
                          </span>
                        ) : null}
                      </p>
                    )}
                  </div>
                )}

                {/* custom text */}
                {cfg.mode === 'custom' && (
                  <div className="mt-3 space-y-2">
                    <Textarea
                      value={customText}
                      onChange={(e) => {
                        setCustomText(e.target.value.slice(0, 900))
                        customTextRef.current = e.target.value.slice(0, 900)
                      }}
                      placeholder="Paste any text — a paragraph you're memorizing, code, a passage from today's lesson… (up to 900 characters)"
                      aria-label="Custom practice text"
                      className="min-h-[72px] bg-background/60 text-[13px]"
                    />
                    <Button
                      size="sm"
                      onClick={() => applyCfg({ ...cfgRef.current, mode: 'custom', param: '', customText: customTextRef.current })}
                      className="h-8 gap-1.5 bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:text-emerald-950 dark:hover:bg-emerald-400"
                    >
                      <Play className="h-3.5 w-3.5" /> Start custom test
                    </Button>
                  </div>
                )}

                {/* modifiers */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-border/60 pt-3">
                  <span className="mr-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    modifiers
                  </span>
                  {(
                    [
                      { key: 'punc' as const, icon: AtSign, label: 'punctuation', title: 'Sprinkle commas, quotes, capitals' },
                      { key: 'nums' as const, icon: Hash, label: 'numbers', title: 'Inject number tokens' },
                      { key: 'iron' as const, icon: Zap, label: 'iron', title: 'Strict: fix errors before advancing' },
                      { key: 'blind' as const, icon: EyeOff, label: 'blind', title: 'No per-character feedback' },
                      { key: 'peek' as const, icon: Ghost, label: 'peek', title: 'Text blurs ahead — memory mode' },
                    ]
                  ).map(({ key, icon: Icon, label, title }) => {
                    const dimmed = (key === 'punc' || key === 'nums') && !(cfg.mode === 'time' || cfg.mode === 'words')
                    return (
                      <button
                        key={key}
                        onClick={() => setMod(key, !modsActive(key))}
                        disabled={dimmed}
                        aria-pressed={modsActive(key)}
                        title={dimmed ? 'Applies to Time and Words modes' : title}
                        className={cn(
                          'flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] font-medium transition-all',
                          modsActive(key)
                            ? 'border-amber-400/50 bg-amber-400/15 text-amber-700 dark:text-amber-200'
                            : 'border-border/70 bg-card/60 text-muted-foreground hover:text-foreground',
                          dimmed && 'cursor-not-allowed opacity-40'
                        )}
                      >
                        <Icon className="h-3 w-3" /> {label}
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* ---------- surface / results ---------- */}
          <AnimatePresence mode="wait">
            {phase !== 'done' ? (
              <motion.div
                key={`surface-${testId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="mt-4"
              >
                {/* HUD */}
                <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[12px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Timer className="h-3.5 w-3.5 text-emerald-400" />
                    {timeLeft !== null
                      ? `${Math.ceil(timeLeft)}s`
                      : hud
                        ? `${Math.ceil(hud.secs)}s`
                        : cfg.mode === 'time'
                          ? `${cfg.param}s`
                          : '—'}
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5" aria-live="off">
                      <Gauge className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="font-bold text-foreground">{hud ? hud.wpm : 0}</span> wpm
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Target className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="font-bold text-foreground">{hud ? hud.acc : 100}%</span>
                    </span>
                    {cfg.mode !== 'time' && words.length > 0 && (
                      <span className="hidden sm:inline">
                        {Math.min(pos.w + 1, words.length)}/{words.length}
                      </span>
                    )}
                  </span>
                </div>

                {/* ghost race */}
                {ghostPb && (
                  <div className="mb-3 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-9 text-[9px] font-bold uppercase tracking-widest text-emerald-500">you</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-emerald-500 transition-[width] duration-200"
                          style={{ width: pct((hud?.youRace ?? 0) * 100) }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex w-9 items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                        <Ghost className="h-2.5 w-2.5" /> pb
                      </span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-zinc-400/70 transition-[width] duration-200"
                          style={{ width: pct((hud?.ghostRace ?? 0) * 100) }}
                        />
                      </div>
                    </div>
                    <p className="text-right font-mono text-[10px] text-muted-foreground">
                      ghost pace: {ghostPb.wpm} wpm
                    </p>
                  </div>
                )}

                {/* words window */}
                <div className="relative select-none">
                  <div className="relative h-[10.5rem] overflow-hidden sm:h-[11.5rem]">
                    <div
                      ref={innerRef}
                      className="relative font-mono text-[19px] leading-[1.9] transition-transform duration-150 sm:text-[23px]"
                      aria-label="Typing test text"
                    >
                      {words.length === 0 ? (
                        <span className="text-foreground/35">preparing the dojo…</span>
                      ) : (
                        words.map((word, wi) => (
                          <span key={wi} className={wordClass(wi)}>
                            {word.chars.map((ch, ci) => {
                              const isActive = wi === pos.w && ci === pos.c
                              return (
                                <span
                                  key={ci}
                                  ref={isActive ? activeCharRef : undefined}
                                  className={cn('inline-block', charClass(ch))}
                                >
                                  {ch.char === '\n'
                                    ? '↵'
                                    : ch.state === 'extra'
                                      ? ch.typed
                                      : ch.char}
                                </span>
                              )
                            })}
                            <span
                              aria-hidden
                              ref={
                                wi === pos.w && pos.c >= word.chars.length
                                  ? activeCharRef
                                  : undefined
                              }
                              className="inline-block h-[1em] w-[1px]"
                            />
                          </span>
                        ))
                      )}
                      {/* caret */}
                      <div
                        ref={caretRef}
                        aria-hidden
                        className={cn(
                          'absolute left-0 top-0 z-10 w-[2px] rounded-full bg-emerald-400 transition-[left,top] duration-100',
                          phase === 'idle' && !focused && 'animate-pulse'
                        )}
                      />
                    </div>
                    {/* focus veil */}
                    {!focused && (
                      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-background/55 backdrop-blur-[2px]">
                        <span className="rounded-full border border-border/70 bg-card/90 px-4 py-1.5 text-[13px] font-medium text-muted-foreground shadow-sm">
                          click here or press any key to focus
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-card to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-card to-transparent" />

                  {/* hidden capture input */}
                  <input
                    ref={inputRef}
                    onKeyDown={onKeyDown}
                    onInput={onInputEvt}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="absolute inset-0 z-30 h-full w-full cursor-text bg-transparent text-base opacity-0"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    aria-label="Typing input — type the text shown above"
                  />
                  {/* caret sync — MUST be the LAST child of the surface: its
                      layout effect positions the caret from live refs, so every
                      ref (active char, caret, inner, input) must already be
                      attached when it runs — including on AnimatePresence
                      surface swaps. */}
                  <CaretSync
                    activeCharRef={activeCharRef}
                    caretRef={caretRef}
                    innerRef={innerRef}
                    inputRef={inputRef}
                    words={words}
                    pos={pos}
                    phase={phase}
                  />
                </div>

                {/* source + shortcuts */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted-foreground">
                  <span className="truncate italic">{source}</span>
                  <span className="flex items-center gap-2 font-mono">
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5">tab</kbd> restart
                    <kbd className="rounded border border-border bg-muted px-1.5 py-0.5">esc</kbd> reset
                    {cfg.mode === 'drill' && <span className="text-emerald-500">· follow the highlighted key</span>}
                  </span>
                </div>

                {/* live drill keyboard */}
                {cfg.mode === 'drill' && drillDef && (
                  <div className="mt-4 overflow-x-auto pb-1">
                    <KeyboardHeatmap
                      stats={keyStats}
                      nextKey={nextKey}
                      focusKeys={drillDef.keys}
                    />
                  </div>
                )}
              </motion.div>
            ) : (
              /* ---------- results ---------- */
              result && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4"
                  role="status"
                  aria-live="polite"
                >
                  {result.pb && (
                    <div className="mb-4 flex items-center gap-2 rounded-xl border border-amber-400/40 bg-amber-400/10 px-4 py-2.5 text-[13px] font-semibold text-amber-700 dark:text-amber-200">
                      <Sparkles className="h-4 w-4" />
                      New personal best for {result.label}
                      {result.prevPbWpm !== undefined ? ` — up from ${result.prevPbWpm} wpm` : ''}
                      {typeof result.rank === 'number' ? ` · leaderboard #${result.rank}` : ''}
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    <div className="col-span-2 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.07] p-4 sm:col-span-1 lg:col-span-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">
                        <Gauge className="h-3 w-3" /> wpm
                      </div>
                      <div className="font-mono text-5xl font-bold leading-none tracking-tight">
                        {result.wpm}
                      </div>
                      {result.prevPbWpm !== undefined && !result.pb && (
                        <div className="mt-1 font-mono text-[11px] text-muted-foreground">
                          pb {currentPb?.wpm ?? '—'} · {result.wpm - result.prevPbWpm >= 0 ? '+' : ''}
                          {result.wpm - result.prevPbWpm} vs pb
                        </div>
                      )}
                    </div>
                    {[
                      { label: 'accuracy', value: `${result.accuracy}%` },
                      { label: 'raw', value: `${result.rawWpm}` },
                      {
                        label: 'consistency',
                        value: result.consistency === null ? '—' : `${result.consistency}%`,
                      },
                      { label: 'time', value: fmtDur(result.durationSec) },
                      {
                        label: 'characters',
                        value: `${result.correctChars}`,
                        sub: `${keystrokesErr(result)} errors`,
                      },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-border/70 bg-card/60 p-4">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          {s.label}
                        </div>
                        <div className="mt-1 font-mono text-2xl font-bold leading-none">{s.value}</div>
                        {s.sub ? <div className="mt-1 text-[11px] text-rose-500/90">{s.sub}</div> : null}
                      </div>
                    ))}
                  </div>

                  {/* chart */}
                  <div className="mt-4 rounded-xl border border-border/70 bg-card/60 p-3">
                    <div className="mb-1 flex items-center justify-between px-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        wpm over time
                      </span>
                      <span className="flex items-center gap-3 font-mono text-[10px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <i className="inline-block h-[3px] w-4 rounded-full bg-emerald-500" /> net
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="inline-block h-[3px] w-4 rounded-full bg-zinc-400" /> raw
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="inline-block h-2 w-2 rounded-sm bg-rose-500/50" /> errors
                        </span>
                      </span>
                    </div>
                    <WpmChart result={result} />
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Button
                      onClick={() => applyCfg(cfgRef.current)}
                      className="gap-1.5 bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:text-emerald-950 dark:hover:bg-emerald-400"
                    >
                      Next test <CornerDownLeft className="h-3.5 w-3.5" />
                    </Button>
                    <Button variant="outline" onClick={repeatTest} className="gap-1.5">
                      <RotateCcw className="h-3.5 w-3.5" /> Repeat text
                      <kbd className="ml-1 rounded border border-border bg-muted px-1 font-mono text-[10px]">R</kbd>
                    </Button>
                    {typeof result.rank === 'number' && result.rank > 0 && (
                      <span className="flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 text-[12px] font-semibold text-amber-700 dark:text-amber-200">
                        <Medal className="h-3.5 w-3.5" /> leaderboard #{result.rank}
                      </span>
                    )}
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* ---------- analytics + leaderboard ---------- */}
      <Tabs value={tab} onValueChange={setTab} className="mt-6">
        <TabsList className="bg-card/60">
          <TabsTrigger value="analytics" className="gap-1.5">
            <BarChart3 className="h-3.5 w-3.5" /> Analytics
          </TabsTrigger>
          <TabsTrigger value="leaderboard" className="gap-1.5">
            <Medal className="h-3.5 w-3.5" /> Leaderboard
          </TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="mt-4 space-y-4">
          {/* summary */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {[
              { label: 'best wpm', value: bestWpm ? `${bestWpm}` : '—' },
              { label: 'avg · last 10', value: avg10 ? `${avg10}` : '—' },
              { label: 'runs', value: `${totals.tests}` },
              { label: 'streak', value: `${streak}d` },
              { label: 'practice', value: fmtPractice(totals.seconds) },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border/70 bg-card/60 p-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{s.label}</div>
                <div className="mt-1 font-mono text-2xl font-bold leading-none">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {/* heatmap */}
            <div className="rounded-xl border border-border/70 bg-card/60 p-4">
              <h3 className="mb-1 text-[13px] font-bold">Key accuracy heatmap</h3>
              <p className="mb-3 text-[11px] text-muted-foreground">
                Every keystroke is logged per key. Red keys are where your fingers betray you.
              </p>
              <KeyboardHeatmap stats={keyStats} legend />
              {topConfusions.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    most confused keys
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {topConfusions.map(([pair, n]) => {
                      const [want, got] = pair.split('>')
                      return (
                        <span
                          key={pair}
                          className="rounded-full border border-rose-500/30 bg-rose-500/10 px-2.5 py-1 font-mono text-[11px] text-rose-600 dark:text-rose-300"
                        >
                          {want} → {got} <span className="opacity-60">×{n}</span>
                        </span>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* history */}
            <div className="rounded-xl border border-border/70 bg-card/60 p-4">
              <h3 className="mb-1 text-[13px] font-bold">Run history</h3>
              <p className="mb-3 text-[11px] text-muted-foreground">
                Last {Math.min(history.length, 15)} runs — newest first.
              </p>
              {history.length === 0 ? (
                <div className="flex h-32 items-center justify-center text-[13px] text-muted-foreground">
                  No runs yet — the first black belt starts with a single keystroke.
                </div>
              ) : (
                <div className="max-h-96 space-y-1.5 overflow-y-auto pr-1">
                  {history.slice(0, 15).map((h, i) => (
                    <div
                      key={`${h.at}-${i}`}
                      className="flex items-center justify-between gap-2 rounded-lg border border-border/50 bg-background/40 px-3 py-2 text-[12px]"
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        {h.pb && <Trophy className="h-3 w-3 shrink-0 text-amber-500" />}
                        <span className="truncate font-medium">{h.label}</span>
                        {h.mods && (
                          <span className="hidden shrink-0 rounded-full bg-muted px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground sm:inline">
                            {h.mods}
                          </span>
                        )}
                      </span>
                      <span className="flex shrink-0 items-center gap-2 font-mono">
                        <span className="font-bold">{h.wpm}</span>
                        <span className="text-muted-foreground">{h.acc}%</span>
                        <span className="hidden text-muted-foreground sm:inline">{fmtDur(h.dur)}</span>
                        <span className="hidden text-muted-foreground/60 md:inline">{relTime(h.at)}</span>
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="leaderboard" className="mt-4">
          <LeaderboardPanel
            name={name}
            tick={boardTick}
            deviceId={deviceId}
            onName={(n) => {
              setName(n)
              nameRef.current = n
              saveName(n)
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function keystrokesErr(result: RunResult): number {
  return result.errSeries.reduce((a, b) => a + b, 0)
}

function loadingPlaceholder(entries: LbEntry[] | null): boolean {
  return entries === null
}

/**
 * Mounts with the typing surface (inside AnimatePresence) and keeps the caret
 * glued to the active char. Being a child of the surface subtree is the whole
 * point: its layout effect fires when the REAL surface mounts — after the
 * exit animation releases the refs — which the parent's effect would miss.
 * Also grabs focus for the hidden capture input on each fresh surface.
 */
function CaretSync({
  activeCharRef,
  caretRef,
  innerRef,
  inputRef,
  words,
  pos,
  phase,
}: {
  activeCharRef: RefObject<HTMLSpanElement | null>
  caretRef: RefObject<HTMLDivElement | null>
  innerRef: RefObject<HTMLDivElement | null>
  inputRef: RefObject<HTMLInputElement | null>
  words: TypingWord[]
  pos: { w: number; c: number }
  phase: 'idle' | 'running' | 'done'
}) {
  useLayoutEffect(() => {
    const el = activeCharRef.current
    const caret = caretRef.current
    const inner = innerRef.current
    if (!el || !caret || !inner) return
    caret.style.left = `${el.offsetLeft}px`
    caret.style.top = `${el.offsetTop}px`
    caret.style.height = `${el.offsetHeight}px`
    const lineH = el.offsetHeight || 40
    const line = Math.round(el.offsetTop / lineH)
    inner.style.transform = line >= 2 ? `translateY(${-(line - 1) * lineH}px)` : 'translateY(0px)'
  }, [activeCharRef, caretRef, innerRef, words, pos, phase])

  // surface (re)mount → claim focus for the capture input (desktop pointers)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      inputRef.current?.focus()
    }
    // mount-scoped: runs exactly when a fresh surface subtree appears
  }, [inputRef])

  return null
}

function ChipIcon({ icon: Icon }: { icon: ComponentType<{ className?: string }> }) {
  return <Icon className="h-3 w-3 text-emerald-300" />
}

/* ------------------------------------------------------------------ */
/* WPM-over-time chart                                                 */
/* ------------------------------------------------------------------ */

function WpmChart({ result }: { result: RunResult }) {
  const data = result.rawSeries.map((raw, i) => ({
    s: i + 1,
    raw,
    net: result.netSeries[i] ?? 0,
    err: result.errSeries[i] ?? 0,
  }))
  if (data.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center text-[12px] text-muted-foreground">
        Too short for a chart — try a longer sprint.
      </div>
    )
  }
  return (
    <ResponsiveContainer width="100%" height={190}>
      <ComposedChart data={data} margin={{ top: 8, right: 4, bottom: 0, left: -14 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} opacity={0.6} />
        <XAxis
          dataKey="s"
          tick={{ fontSize: 10, fill: 'var(--muted-foreground)' }}
          stroke="var(--border)"
          tickLine={false}
          label={{ value: 's', position: 'insideRight', fontSize: 9, fill: 'var(--muted-foreground)', dy: 4 }}
        />
        <YAxis
          yAxisId="wpm"
          tick={{ fontSize: 10, fill: 'var(--muted-foreground)' }}
          stroke="var(--border)"
          tickLine={false}
          width={42}
        />
        <YAxis
          yAxisId="err"
          orientation="right"
          tick={{ fontSize: 10, fill: 'var(--muted-foreground)' }}
          stroke="var(--border)"
          tickLine={false}
          width={24}
          allowDecimals={false}
        />
        <RTooltip
          contentStyle={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            fontSize: 12,
            color: 'var(--foreground)',
          }}
          labelFormatter={(l) => `second ${l}`}
          formatter={(v) => [String(v), '']}
        />
        <Bar yAxisId="err" dataKey="err" fill="var(--color-rose-400, #fb7185)" opacity={0.35} radius={[2, 2, 0, 0]} name="errors" />
        <Line
          yAxisId="wpm"
          type="monotone"
          dataKey="raw"
          stroke="var(--color-zinc-400, #a1a1aa)"
          strokeWidth={1.4}
          strokeDasharray="4 3"
          dot={false}
          name="raw wpm"
        />
        <Line
          yAxisId="wpm"
          type="monotone"
          dataKey="net"
          stroke="var(--color-emerald-500, #10b981)"
          strokeWidth={2.2}
          dot={false}
          name="net wpm"
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

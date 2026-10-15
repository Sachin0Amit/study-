'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { formatDistanceToNow } from 'date-fns'
import {
  AlertTriangle,
  Check,
  Dna,
  FileText,
  History,
  Loader2,
  Minus,
  RotateCcw,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Upload,
  X,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { useStudy } from '@/store/useStudy'

// ============ X7 — Paper-DNA Forensic Analyzer (client view) ============
//
// Three stages: upload past papers → live SSE progress → forensic report
// (hot-topic heatmap, trend arrows, predictions, mixes, drift table).
// Past reports live in the sidebar and reload via /api/paper-dna/[id].

// ------------------------------------------------------------------ types --

interface Totals {
  questions: number
  files: number
  chaptersTouched: number
  yearsSpan: number
}

interface HotTopic {
  chapterId: string
  chapterTitle: string
  subjectName: string
  count: number
  share: number
  avgConfidence: number | null
  recentShare: number
}

interface DriftRow {
  chapterId: string
  chapterTitle: string
  subjectName: string
  trend: 'rising' | 'falling' | 'stable'
  slope: number
  series: Record<string, number>
}

interface Prediction {
  chapterId: string
  chapterTitle: string
  subjectName: string
  score: number
  reasons: string[]
}

interface Stats {
  hotTopics: HotTopic[]
  drift: DriftRow[]
  typeMix: Record<string, number>
  difficultyMix: Record<string, number>
  predictions: Prediction[]
  totals: Totals
}

interface FileMeta {
  name: string
  year: number | null
  questionCount: number
}

interface Report {
  id: string
  title: string
  createdAt: string
  files: FileMeta[]
  stats: Stats
}

interface PastItem {
  id: string
  title: string
  fileCount: number
  totals: Totals | null
  createdAt: string
}

type Stage = 'input' | 'running' | 'report'
type RunFile = { name: string; state: 'pending' | 'active' | 'done'; questions: number }

// ----------------------------------------------------------------- config --

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const ACCEPT_ATTR = '.pdf,.png,.jpg,.jpeg,.webp,.txt'
const ACCEPTED_EXT = new Set(['.pdf', '.png', '.jpg', '.jpeg', '.webp', '.txt'])
const MAX_FILES = 8
const MAX_BYTES = 10 * 1024 * 1024

const TYPE_COLORS: Record<string, string> = {
  mcq: 'bg-emerald-400',
  numerical: 'bg-teal-400',
  short: 'bg-amber-400',
  long: 'bg-rose-400',
  assertion: 'bg-emerald-300',
}
const DIFFICULTY_COLORS: Record<string, string> = {
  easy: 'bg-emerald-400',
  medium: 'bg-amber-400',
  hard: 'bg-rose-400',
}

// ------------------------------------------------------------ sse client --

/** POST + parse a text/event-stream body, invoking onEvent per event */
async function streamSSE(
  url: string,
  init: RequestInit,
  onEvent: (event: string, data: Record<string, unknown>) => void
): Promise<void> {
  const res = await fetch(url, init)
  if (!res.ok || !res.body) {
    let message = `Request failed (${res.status})`
    try {
      const data = (await res.json()) as { error?: string }
      if (data?.error) message = data.error
    } catch {
      /* non-json error */
    }
    throw new Error(message)
  }
  const reader = res.body.getReader()
  const dec = new TextDecoder()
  let buf = ''
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    buf += dec.decode(value, { stream: true })
    let i: number
    while ((i = buf.indexOf('\n\n')) !== -1) {
      const raw = buf.slice(0, i)
      buf = buf.slice(i + 2)
      let event = 'message'
      const dataLines: string[] = []
      for (const line of raw.split('\n')) {
        if (line.startsWith('event:')) event = line.slice(6).trim()
        else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim())
      }
      if (dataLines.length) {
        try {
          onEvent(event, JSON.parse(dataLines.join('\n')) as Record<string, unknown>)
        } catch {
          /* skip malformed frame */
        }
      }
    }
  }
}

// ---------------------------------------------------------------- helpers --

/** defensive Stats coercion for data coming back from the API */
function coerceStats(raw: unknown): Stats {
  const s = (raw ?? {}) as Partial<Stats>
  return {
    hotTopics: Array.isArray(s.hotTopics) ? s.hotTopics : [],
    drift: Array.isArray(s.drift) ? s.drift : [],
    typeMix: s.typeMix && typeof s.typeMix === 'object' ? s.typeMix : {},
    difficultyMix:
      s.difficultyMix && typeof s.difficultyMix === 'object' ? s.difficultyMix : {},
    predictions: Array.isArray(s.predictions) ? s.predictions : [],
    totals: {
      questions: s.totals?.questions ?? 0,
      files: s.totals?.files ?? 0,
      chaptersTouched: s.totals?.chaptersTouched ?? 0,
      yearsSpan: s.totals?.yearsSpan ?? 0,
    },
  }
}

function fmtSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  return `${Math.max(1, Math.round(bytes / 1024))} KB`
}

/** sort period keys: printed years first (ascending), then "File N" */
function sortPeriodKeys(keys: string[]): string[] {
  const years = keys
    .filter((k) => /^\d{4}$/.test(k))
    .map(Number)
    .sort((a, b) => a - b)
    .map(String)
  const fileKeys = keys
    .filter((k) => /^File \d+$/.test(k))
    .sort((a, b) => Number(a.slice(5)) - Number(b.slice(5)))
  const rest = keys.filter((k) => !/^\d{4}$/.test(k) && !/^File \d+$/.test(k))
  return [...years, ...fileKeys, ...rest]
}

function TrendIcon({ trend, className = 'h-4 w-4' }: { trend: string; className?: string }) {
  if (trend === 'rising')
    return <TrendingUp className={`${className} text-emerald-400`} aria-label="rising trend" />
  if (trend === 'falling')
    return <TrendingDown className={`${className} text-rose-400`} aria-label="falling trend" />
  return <Minus className={`${className} text-muted-foreground`} aria-label="stable trend" />
}

/** label + bar + count row for the type/difficulty mixes */
function MixBar({
  label,
  count,
  max,
  color,
}: {
  label: string
  count: number
  max: number
  color: string
}) {
  const pct = max > 0 ? Math.round((count / max) * 100) : 0
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 shrink-0 text-xs font-medium capitalize text-muted-foreground">
        {label}
      </span>
      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="w-8 shrink-0 text-right font-mono text-xs text-foreground">{count}</span>
    </div>
  )
}

// ------------------------------------------------------------- main view --

export function PaperDnaView() {
  const { toast } = useToast()
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const navigate = useStudy((s) => s.navigate)

  const [stage, setStage] = useState<Stage>('input')
  const [title, setTitle] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [dragOver, setDragOver] = useState(false)

  const [runFiles, setRunFiles] = useState<RunFile[]>([])
  const [stageLine, setStageLine] = useState('')
  const [warnings, setWarnings] = useState<string[]>([])
  const [runError, setRunError] = useState<string | null>(null)

  const [report, setReport] = useState<Report | null>(null)
  const [past, setPast] = useState<PastItem[]>([])
  const [pastLoading, setPastLoading] = useState(true)
  const [openingId, setOpeningId] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const deviceIdRef = useRef('')

  // device + past analyses on mount
  useEffect(() => {
    deviceIdRef.current = ensureDevice()
    const id = deviceIdRef.current
    if (!id) return
    let alive = true
    ;(async () => {
      try {
        const res = await fetch(`/api/paper-dna?deviceId=${encodeURIComponent(id)}`)
        const data = (await res.json()) as { analyses?: PastItem[] }
        if (alive) setPast(Array.isArray(data?.analyses) ? data.analyses : [])
      } catch {
        /* sidebar just stays empty */
      } finally {
        if (alive) setPastLoading(false)
      }
    })()
    return () => {
      alive = false
    }
  }, [ensureDevice])

  const refreshPast = useCallback(async () => {
    const id = deviceIdRef.current || ensureDevice()
    if (!id) return
    try {
      const res = await fetch(`/api/paper-dna?deviceId=${encodeURIComponent(id)}`)
      const data = (await res.json()) as { analyses?: PastItem[] }
      setPast(Array.isArray(data?.analyses) ? data.analyses : [])
    } catch {
      /* keep the previous list */
    }
  }, [ensureDevice])

  // ---------------------------------------------------------- file intake --

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      const next = [...files]
      const problems: string[] = []
      for (const f of Array.from(incoming)) {
        const ext = f.name.slice(f.name.lastIndexOf('.')).toLowerCase()
        if (!ACCEPTED_EXT.has(ext)) {
          problems.push(`"${f.name}" is not a PDF, image or text file`)
          continue
        }
        if (f.size > MAX_BYTES) {
          problems.push(`"${f.name}" is larger than 10 MB`)
          continue
        }
        if (next.some((x) => x.name === f.name && x.size === f.size)) continue
        if (next.length >= MAX_FILES) {
          problems.push(`at most ${MAX_FILES} files per analysis`)
          break
        }
        next.push(f)
      }
      setFiles(next)
      if (problems.length) {
        toast({
          title: 'Some files were skipped',
          description: problems.slice(0, 3).join(' · '),
          variant: 'destructive',
        })
      }
    },
    [files, toast]
  )

  const removeFile = (idx: number) => setFiles(files.filter((_, i) => i !== idx))

  // ------------------------------------------------------------ run (SSE) --

  const runAnalysis = useCallback(async () => {
    if (!files.length) return
    const deviceId = deviceIdRef.current || ensureDevice()
    if (!deviceId) {
      toast({ title: 'Device not ready', description: 'Please retry in a moment.' })
      return
    }
    const form = new FormData()
    form.set('deviceId', deviceId)
    if (title.trim()) form.set('title', title.trim())
    for (const f of files) form.append('files', f)

    setRunFiles(files.map((f) => ({ name: f.name, state: 'pending', questions: 0 })))
    setStageLine('Uploading the papers…')
    setWarnings([])
    setRunError(null)
    setStage('running')

    try {
      await streamSSE('/api/paper-dna', { method: 'POST', body: form }, (event, data) => {
        if (event === 'stage') {
          const label = typeof data.label === 'string' ? data.label : ''
          setStageLine(label)
          const fi = typeof data.fileIndex === 'number' ? data.fileIndex : null
          if (fi !== null) {
            setRunFiles((prev) =>
              prev.map((r, i) =>
                i === fi && r.state !== 'done' ? { ...r, state: 'active' } : r
              )
            )
          }
        } else if (event === 'file') {
          const idx = typeof data.index === 'number' ? data.index : -1
          const n = typeof data.questions === 'number' ? data.questions : 0
          setRunFiles((prev) =>
            prev.map((r, i) => (i === idx ? { ...r, state: 'done', questions: n } : r))
          )
        } else if (event === 'warn') {
          const message = typeof data.message === 'string' ? data.message : 'A file was skipped'
          setWarnings((prev) => [...prev, message])
        } else if (event === 'done') {
          const stats = coerceStats(data.stats)
          const fileMetas = Array.isArray(data.files) ? (data.files as FileMeta[]) : []
          setReport({
            id: typeof data.id === 'string' ? data.id : '',
            title: typeof data.title === 'string' ? data.title : 'Paper analysis',
            createdAt: typeof data.createdAt === 'string' ? data.createdAt : new Date().toISOString(),
            files: fileMetas,
            stats,
          })
          setStage('report')
          void refreshPast()
        } else if (event === 'error') {
          setRunError(
            typeof data.error === 'string' ? data.error : 'The forensic analysis failed.'
          )
        }
      })
    } catch (err) {
      setRunError(err instanceof Error ? err.message : 'The upload failed — please retry.')
    }
  }, [files, title, ensureDevice, refreshPast, toast])

  // ------------------------------------------------- load a past analysis --

  const openAnalysis = useCallback(
    async (id: string) => {
      const deviceId = deviceIdRef.current || ensureDevice()
      if (!deviceId) return
      setOpeningId(id)
      try {
        const res = await fetch(
          `/api/paper-dna/${encodeURIComponent(id)}?deviceId=${encodeURIComponent(deviceId)}`
        )
        const data = (await res.json()) as {
          analysis?: {
            id: string
            title: string
            createdAt: string
            files: FileMeta[]
            stats: unknown
          }
          error?: string
        }
        if (!res.ok || !data?.analysis) {
          throw new Error(data?.error ?? 'Could not open that analysis.')
        }
        setReport({
          id: data.analysis.id,
          title: data.analysis.title,
          createdAt: data.analysis.createdAt,
          files: Array.isArray(data.analysis.files) ? data.analysis.files : [],
          stats: coerceStats(data.analysis.stats),
        })
        setStage('report')
      } catch (err) {
        toast({
          title: 'Paper-DNA',
          description: err instanceof Error ? err.message : 'Could not open that analysis.',
          variant: 'destructive',
        })
      } finally {
        setOpeningId(null)
      }
    },
    [ensureDevice, toast]
  )

  const resetAll = () => {
    setStage('input')
    setFiles([])
    setTitle('')
    setReport(null)
    setRunFiles([])
    setWarnings([])
    setRunError(null)
    setStageLine('')
  }

  // ------------------------------------------------------ report subviews --

  const trendByChapter = useMemo(() => {
    const m = new Map<string, string>()
    for (const d of report?.stats.drift ?? []) m.set(d.chapterId, d.trend)
    return m
  }, [report])

  const maxShare = useMemo(
    () => Math.max(0.001, ...(report?.stats.hotTopics ?? []).map((t) => t.share)),
    [report]
  )

  const unmapped = report?.stats.hotTopics.find((t) => t.chapterId === 'unmapped') ?? null

  const driftColumns = useMemo(() => {
    const keys = new Set<string>()
    for (const d of report?.stats.drift ?? []) {
      for (const k of Object.keys(d.series)) keys.add(k)
    }
    return sortPeriodKeys([...keys])
  }, [report])

  const maxCell = useMemo(() => {
    let m = 0
    for (const d of report?.stats.drift ?? []) {
      for (const v of Object.values(d.series)) m = Math.max(m, v)
    }
    return m
  }, [report])

  // -------------------------------------------------------------- render --

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6">
      {/* ---------------------------------------------------------- header */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
          <Dna className="h-6 w-6" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Paper-DNA Forensic Analyzer</h1>
          <p className="text-sm text-muted-foreground">
            Upload past question papers — get the hot-topic heatmap, trends and probable topics.
          </p>
        </div>
        {stage === 'report' && (
          <button
            type="button"
            onClick={resetAll}
            className={`inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted ${FOCUS_RING}`}
          >
            <RotateCcw className="h-4 w-4" aria-hidden /> New analysis
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        {/* ======================================================= main col */}
        <div className="min-w-0">
          <AnimatePresence mode="wait">
            {/* ------------------------------------------------ input stage */}
            {stage === 'input' && (
              <motion.div
                key="input"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Optional title — e.g. “Mechanics papers, last 5 years”"
                  maxLength={200}
                  className={`${FOCUS_RING} bg-background`}
                  aria-label="Analysis title (optional)"
                />

                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Upload question papers"
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click()
                  }}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setDragOver(true)
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault()
                    setDragOver(false)
                    if (e.dataTransfer?.files?.length) addFiles(e.dataTransfer.files)
                  }}
                  className={`flex min-h-44 cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-8 text-center transition-colors ${FOCUS_RING} ${
                    dragOver
                      ? 'border-emerald-400/70 bg-emerald-500/10'
                      : 'border-border bg-muted/30 hover:border-emerald-400/50 hover:bg-emerald-500/5'
                  }`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                    <Upload className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Drop question papers here</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      PDF, PNG, JPG, WEBP or TXT · up to {MAX_FILES} files · 10 MB each
                    </p>
                  </div>
                  <span className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium">
                    or browse files
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={ACCEPT_ATTR}
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.length) addFiles(e.target.files)
                      e.target.value = ''
                    }}
                  />
                </div>

                {files.length > 0 && (
                  <ul className="flex flex-wrap gap-2" aria-label="Selected files">
                    {files.map((f, i) => (
                      <motion.li
                        key={`${f.name}-${f.size}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex max-w-full items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 py-1.5 pl-2.5 pr-1.5 text-xs"
                      >
                        <FileText className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden />
                        <span className="max-w-48 truncate font-medium text-foreground" title={f.name}>
                          {f.name}
                        </span>
                        <span className="shrink-0 text-muted-foreground">{fmtSize(f.size)}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          aria-label={`Remove ${f.name}`}
                          className={`rounded-md p-1 text-muted-foreground transition-colors hover:bg-rose-500/15 hover:text-rose-400 ${FOCUS_RING}`}
                        >
                          <X className="h-3.5 w-3.5" aria-hidden />
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                )}

                <button
                  type="button"
                  onClick={runAnalysis}
                  disabled={!files.length}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40 ${FOCUS_RING}`}
                >
                  <Sparkles className="h-4 w-4" aria-hidden />
                  Run forensic analysis
                  {files.length > 0 && (
                    <span className="rounded-md bg-emerald-950/15 px-1.5 py-0.5 text-xs">
                      {files.length}
                    </span>
                  )}
                </button>
              </motion.div>
            )}

            {/* ---------------------------------------------- running stage */}
            {stage === 'running' && (
              <motion.div
                key="running"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border bg-card p-5 sm:p-6"
              >
                <h2 className="flex items-center gap-2 text-base font-semibold">
                  <Loader2 className="h-4 w-4 animate-spin text-emerald-400" aria-hidden />
                  Forensic analysis in progress
                </h2>

                <ol className="mt-4 flex flex-col gap-2" aria-live="polite">
                  {runFiles.map((f, i) => (
                    <li
                      key={`${f.name}-${i}`}
                      className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition-colors ${
                        f.state === 'active'
                          ? 'border-emerald-500/40 bg-emerald-500/10'
                          : f.state === 'done'
                            ? 'border-emerald-500/20 bg-emerald-500/5'
                            : 'border-border bg-muted/30'
                      }`}
                    >
                      {f.state === 'done' ? (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-emerald-950">
                          <Check className="h-3 w-3" aria-hidden />
                        </span>
                      ) : f.state === 'active' ? (
                        <Loader2
                          className="h-5 w-5 shrink-0 animate-spin text-emerald-400"
                          aria-hidden
                        />
                      ) : (
                        <span className="h-5 w-5 shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      )}
                      <span className="min-w-0 flex-1 truncate font-medium">{f.name}</span>
                      {f.state === 'done' && (
                        <span className="shrink-0 rounded-md bg-emerald-500/15 px-2 py-0.5 font-mono text-xs text-emerald-300">
                          {f.questions} question{f.questions === 1 ? '' : 's'}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>

                {stageLine && (
                  <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground" role="status">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-300" aria-hidden />
                    {stageLine}
                  </p>
                )}

                {warnings.length > 0 && (
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {warnings.map((w, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-300"
                      >
                        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                        {w}
                      </li>
                    ))}
                  </ul>
                )}

                {runError && (
                  <div className="mt-4 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4">
                    <p className="flex items-start gap-2 text-sm text-rose-300">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                      {runError}
                    </p>
                    <button
                      type="button"
                      onClick={resetAll}
                      className={`mt-3 rounded-lg border border-rose-500/40 px-3 py-1.5 text-xs font-medium text-rose-300 transition-colors hover:bg-rose-500/15 ${FOCUS_RING}`}
                    >
                      Back to upload
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* ---------------------------------------------- report stage */}
            {stage === 'report' && report && (
              <motion.div
                key={`report-${report.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-6"
              >
                {/* forensic header */}
                <section className="rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-card to-card p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Dna className="h-4 w-4 text-emerald-400" aria-hidden />
                    <h2 className="min-w-0 flex-1 truncate text-base font-semibold" title={report.title}>
                      {report.title}
                    </h2>
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(report.createdAt), { addSuffix: true })}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { label: 'questions', value: report.stats.totals.questions },
                      { label: 'files', value: report.stats.totals.files },
                      { label: 'chapters', value: report.stats.totals.chaptersTouched },
                      { label: report.stats.totals.yearsSpan > 1 ? 'years' : 'year', value: report.stats.totals.yearsSpan },
                    ].map((c) => (
                      <span
                        key={c.label}
                        className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 font-mono text-sm text-emerald-300"
                      >
                        <strong className="font-bold text-emerald-200">{c.value}</strong> {c.label}
                      </span>
                    ))}
                    {unmapped && (
                      <span
                        className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 font-mono text-sm text-amber-300"
                        title="Questions that could not be matched to a library chapter"
                      >
                        <strong className="font-bold text-amber-200">{unmapped.count}</strong>{' '}
                        unmapped
                      </span>
                    )}
                  </div>
                  {report.files.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                      {report.files.map((f, i) => (
                        <li key={`${f.name}-${i}`} className="flex max-w-full items-center gap-1">
                          <FileText className="h-3 w-3 shrink-0" aria-hidden />
                          <span className="truncate" title={f.name}>
                            {f.name}
                            {f.questionCount > 0 && ` · ${f.questionCount}q`}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>

                {/* hot-topic heatmap */}
                <section aria-labelledby="pdna-hot">
                  <h3 id="pdna-hot" className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Hot-topic heatmap
                  </h3>
                  {report.stats.hotTopics.length === 0 ? (
                    <p className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                      No topic matches found in these papers.
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-4">
                      {report.stats.hotTopics.map((t) => {
                        const isUnmapped = t.chapterId === 'unmapped'
                        const trend = trendByChapter.get(t.chapterId) ?? 'stable'
                        const alpha = 0.05 + 0.42 * (t.share / maxShare)
                        const body = (
                          <>
                            <div className="flex w-full items-start justify-between gap-2">
                              <span className="line-clamp-2 min-w-0 flex-1 text-left text-[13px] font-semibold leading-snug">
                                {t.chapterTitle}
                              </span>
                              {!isUnmapped && <TrendIcon trend={trend} className="mt-0.5 h-4 w-4 shrink-0" />}
                            </div>
                            <div className="mt-2 flex items-baseline gap-1.5">
                              <span className="font-mono text-lg font-bold">{t.count}</span>
                              <span className="text-xs text-muted-foreground">questions</span>
                            </div>
                            <div className="mt-1 flex flex-wrap items-center gap-1.5">
                              <span className="rounded-md bg-black/20 px-1.5 py-0.5 font-mono text-[11px]">
                                {t.share}%
                              </span>
                              <span className="max-w-full truncate rounded-md bg-black/20 px-1.5 py-0.5 text-[11px] text-muted-foreground">
                                {t.subjectName}
                              </span>
                            </div>
                          </>
                        )
                        return isUnmapped ? (
                          <div
                            key={t.chapterId}
                            className="flex flex-col rounded-xl border border-amber-500/25 bg-amber-500/5 p-3"
                          >
                            {body}
                          </div>
                        ) : (
                          <button
                            key={t.chapterId}
                            type="button"
                            onClick={() => navigate({ name: 'chapter', chapterId: t.chapterId })}
                            title={`Open ${t.chapterTitle}`}
                            style={{ backgroundColor: `rgba(16, 185, 129, ${alpha.toFixed(3)})` }}
                            className={`flex flex-col rounded-xl border border-emerald-500/25 p-3 text-left text-foreground transition-transform hover:-translate-y-0.5 hover:border-emerald-400/60 ${FOCUS_RING}`}
                          >
                            {body}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </section>

                {/* predictions */}
                <section aria-labelledby="pdna-pred">
                  <h3 id="pdna-pred" className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-emerald-400" aria-hidden />
                    Most probable topics
                  </h3>
                  {report.stats.predictions.length === 0 ? (
                    <p className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                      Not enough mapped questions for predictions yet — add more papers.
                    </p>
                  ) : (
                    <ol className="flex flex-col gap-2.5">
                      {report.stats.predictions.map((p, i) => (
                        <li
                          key={p.chapterId}
                          className="rounded-xl border border-border bg-card p-3.5"
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 font-mono text-xs font-bold text-emerald-300">
                              {i + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => navigate({ name: 'chapter', chapterId: p.chapterId })}
                              className={`min-w-0 flex-1 truncate text-left text-sm font-semibold hover:text-emerald-300 ${FOCUS_RING}`}
                              title={`Open ${p.chapterTitle}`}
                            >
                              {p.chapterTitle}
                            </button>
                            <span className="shrink-0 font-mono text-xs text-muted-foreground">
                              {(p.score * 100).toFixed(0)}%
                            </span>
                          </div>
                          <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.round(p.score * 100)}%` }}
                              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                            />
                          </div>
                          {p.reasons.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {p.reasons.map((r, j) => (
                                <span
                                  key={j}
                                  className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 text-[11px] text-emerald-300"
                                >
                                  {r}
                                </span>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ol>
                  )}
                </section>

                {/* type & difficulty mixes */}
                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Question types
                    </h3>
                    <div className="flex flex-col gap-2.5">
                      {Object.entries(report.stats.typeMix).map(([k, v]) => (
                        <MixBar
                          key={k}
                          label={k}
                          count={v}
                          max={Math.max(1, ...Object.values(report.stats.typeMix))}
                          color={TYPE_COLORS[k] ?? 'bg-emerald-400'}
                        />
                      ))}
                      {Object.keys(report.stats.typeMix).length === 0 && (
                        <p className="text-sm text-muted-foreground">No data</p>
                      )}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Difficulty mix
                    </h3>
                    <div className="flex flex-col gap-2.5">
                      {Object.entries(report.stats.difficultyMix).map(([k, v]) => (
                        <MixBar
                          key={k}
                          label={k}
                          count={v}
                          max={Math.max(1, ...Object.values(report.stats.difficultyMix))}
                          color={DIFFICULTY_COLORS[k] ?? 'bg-amber-400'}
                        />
                      ))}
                      {Object.keys(report.stats.difficultyMix).length === 0 && (
                        <p className="text-sm text-muted-foreground">No data</p>
                      )}
                    </div>
                  </div>
                </section>

                {/* year-by-year drift table */}
                <section aria-labelledby="pdna-drift">
                  <h3 id="pdna-drift" className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Year-by-year drift
                  </h3>
                  {driftColumns.length === 0 ? (
                    <p className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                      Not enough papers to chart drift yet.
                    </p>
                  ) : (
                    <div className="overflow-auto max-h-96 rounded-2xl border border-border bg-card">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr className="sticky top-0 z-10 bg-muted/95 backdrop-blur">
                            <th className="sticky left-0 z-20 min-w-44 max-w-64 bg-muted/95 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              Chapter
                            </th>
                            {driftColumns.map((c) => (
                              <th
                                key={c}
                                className="whitespace-nowrap px-3 py-2.5 text-right text-xs font-semibold text-muted-foreground"
                              >
                                {c}
                              </th>
                            ))}
                            <th className="px-3 py-2.5 text-center text-xs font-semibold text-muted-foreground">
                              Trend
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {report.stats.drift.map((d) => (
                            <tr key={d.chapterId} className="border-t border-border">
                              <td className="sticky left-0 z-10 max-w-64 truncate bg-card px-3 py-2 font-medium" title={d.chapterTitle}>
                                {d.chapterTitle}
                              </td>
                              {driftColumns.map((c) => {
                                const v = d.series[c] ?? 0
                                const alpha = v > 0 ? 0.1 + 0.55 * (v / Math.max(1, maxCell)) : 0
                                return (
                                  <td
                                    key={c}
                                    className="px-3 py-2 text-right font-mono"
                                    style={{
                                      backgroundColor: v > 0 ? `rgba(16, 185, 129, ${alpha.toFixed(3)})` : undefined,
                                    }}
                                  >
                                    {v > 0 ? v : <span className="text-muted-foreground/40">·</span>}
                                  </td>
                                )
                              })}
                              <td className="px-3 py-2 text-center">
                                <TrendIcon trend={d.trend} className="mx-auto h-4 w-4" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              </motion.div>
            )}
          </AnimatePresence>

          {/* skeleton while opening a past analysis */}
          {openingId && stage !== 'report' && (
            <div className="mt-4 flex flex-col gap-3" role="status" aria-label="Loading analysis">
              <div className="h-24 animate-pulse rounded-2xl bg-muted" />
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="h-20 animate-pulse rounded-xl bg-muted" />
                ))}
              </div>
              <div className="h-40 animate-pulse rounded-2xl bg-muted" />
            </div>
          )}
        </div>

        {/* ==================================================== sidebar col */}
        <aside className="min-w-0">
          <div className="rounded-2xl border border-border bg-card p-4">
            <h2 className="flex items-center gap-2 text-sm font-semibold">
              <History className="h-4 w-4 text-emerald-400" aria-hidden />
              Past analyses
            </h2>
            {pastLoading ? (
              <div className="mt-3 flex flex-col gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-12 animate-pulse rounded-xl bg-muted" />
                ))}
              </div>
            ) : past.length === 0 ? (
              <p className="mt-3 text-xs text-muted-foreground">
                No past analyses yet — your first run will appear here.
              </p>
            ) : (
              <ul className="mt-3 flex max-h-96 flex-col gap-1.5 overflow-y-auto pr-1">
                {past.map((p) => {
                  const active = report?.id === p.id
                  return (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => openAnalysis(p.id)}
                        disabled={openingId !== null}
                        className={`w-full rounded-xl border px-3 py-2 text-left transition-colors disabled:opacity-50 ${FOCUS_RING} ${
                          active
                            ? 'border-emerald-500/50 bg-emerald-500/10'
                            : 'border-transparent bg-muted/40 hover:border-emerald-500/30 hover:bg-emerald-500/5'
                        }`}
                      >
                        <span className="block truncate text-xs font-semibold" title={p.title}>
                          {p.title}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-muted-foreground">
                          {p.totals ? `${p.totals.questions} questions · ` : ''}
                          {formatDistanceToNow(new Date(p.createdAt), { addSuffix: true })}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}

export default PaperDnaView

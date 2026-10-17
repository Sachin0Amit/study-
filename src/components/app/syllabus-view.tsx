'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { formatDistanceToNow } from 'date-fns'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  ClipboardList,
  ExternalLink,
  FileText,
  Globe,
  Keyboard,
  Layers,
  Loader2,
  Pin,
  Plus,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  Trash2,
  Upload,
  Wand2,
  X,
  Zap,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/hooks/use-toast'
import { useStudy } from '@/store/useStudy'
import { getChapter, LIBRARY_BOOKS, LIBRARY_SUBJECTS } from '@/data/library'
import { ExamCommandCenter } from './exam-command-center'

// ---------------------------------------------------------------- types --

interface MappingEntry {
  topic: string
  subjectId?: string | null
  subjectName?: string | null
  chapterId?: string | null
  chapterTitle?: string | null
  confidence: number
  via?: 'pin' | 'llm' | 'agree' | 'local' | 'subject' | null
  closest?: {
    chapterId: string
    chapterTitle: string
    subjectId: string
    subjectName: string
    confidence: number
  } | null
}

interface SourceRef {
  title: string
  url: string
  host: string
  date?: string
}

interface PlanFull {
  id: string
  title: string
  sourceType: string
  sourceName: string
  matched: number
  total: number
  engineVersion?: number
  research?: SourceRef[] | null
  pins?: Record<string, string>
  refreshedAt?: string | null
  refreshCount?: number
  createdAt: string
  mapping: MappingEntry[]
  llmUsed?: boolean
}

interface PlanSummary {
  id: string
  title: string
  sourceType: string
  sourceName: string
  matched: number
  total: number
  engineVersion?: number
  refreshedAt?: string | null
  refreshCount?: number
  createdAt: string
}

type Stage = 'input' | 'review' | 'result'
type Busy = null | 'research' | 'extract' | 'map' | 'open' | 'refresh'

type StepState = 'pending' | 'active' | 'done'

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const ACCEPTED_EXT = ['.pdf', '.txt', '.md', '.doc', '.docx']
const MAX_BYTES = 10 * 1024 * 1024

const subjectAccentById = new Map(LIBRARY_SUBJECTS.map((s) => [s.id, s.accent]))

// ------------------------------------------------------------ sse client --

/** POST/GET + parse a text/event-stream body, invoking onEvent per event */
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

// ----------------------------------------------------------- small parts --

function ConfidenceDot({ c }: { c: number }) {
  const cls =
    c >= 0.75 ? 'bg-emerald-400' : c >= 0.4 ? 'bg-amber-300' : 'bg-muted-foreground/40'
  const label = c >= 0.75 ? 'strong match' : c >= 0.4 ? 'partial match' : 'no match'
  return (
    <span
      className={`h-2 w-2 shrink-0 rounded-full ${cls}`}
      title={`Match confidence ${Math.round(c * 100)}% — ${label}`}
      aria-label={`Match confidence ${Math.round(c * 100)}%, ${label}`}
    />
  )
}

/** circular coverage indicator (0-100) */
function CoverageRing({ pct, size = 76 }: { pct: number; size?: number }) {
  const r = 34
  const c = 2 * Math.PI * r
  const tone = pct >= 75 ? 'text-emerald-400' : pct >= 40 ? 'text-amber-300' : 'text-rose-400'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      role="img"
      aria-label={`${pct}% library coverage`}
      className="shrink-0"
    >
      <circle cx="40" cy="40" r={r} fill="none" strokeWidth="7" className="stroke-border" />
      <circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${(pct / 100) * c} ${c}`}
        transform="rotate(-90 40 40)"
        className={tone}
        stroke="currentColor"
        style={{ transition: 'stroke-dasharray 0.8s cubic-bezier(0.22,1,0.36,1)' }}
      />
      <text
        x="40"
        y="45"
        textAnchor="middle"
        className={`fill-current font-mono text-[17px] font-bold ${tone}`}
      >
        {pct}%
      </text>
    </svg>
  )
}

function SpinnerLine({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5 text-sm text-muted-foreground" role="status">
      <Loader2 className="h-4 w-4 animate-spin text-emerald-300" aria-hidden />
      {text}
    </div>
  )
}

// ------------------------------------------------------------ live steps --

interface StepDef {
  id: string
  label: string
}

const RESEARCH_STEPS: StepDef[] = [
  { id: 'search', label: 'Searching the live web' },
  { id: 'sources', label: 'Ranking the best sources' },
  { id: 'read', label: 'Reading syllabus pages' },
  { id: 'synthesize', label: 'Building your topic list' },
]

const MAP_STEPS: StepDef[] = [
  { id: 'clean', label: 'Preparing your topics' },
  { id: 'route', label: 'Routing topics to subjects' },
  { id: 'chapter', label: 'Matching library chapters' },
  { id: 'score', label: 'Cross-checking every match' },
  { id: 'save', label: 'Saving your plan' },
]

/** animated vertical checklist fed by SSE stage events */
function LiveSteps({
  steps,
  states,
  note,
  compact = false,
}: {
  steps: StepDef[]
  states: Record<string, StepState>
  note?: string | null
  compact?: boolean
}) {
  return (
    <ol className={`flex flex-col ${compact ? 'gap-1.5' : 'gap-2'} py-1`} aria-live="polite">
      {steps.map((s, i) => {
        const state = states[s.id] ?? 'pending'
        return (
          <li key={s.id} className="flex items-center gap-2.5">
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                state === 'done'
                  ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-300'
                  : state === 'active'
                    ? 'border-emerald-400/60 bg-emerald-400/10 text-emerald-300'
                    : 'border-border bg-muted/40 text-muted-foreground/40'
              }`}
              aria-hidden
            >
              {state === 'done' ? (
                <Check className="h-3 w-3" />
              ) : state === 'active' ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                <span className="h-1 w-1 rounded-full bg-current" />
              )}
            </span>
            <span
              className={`${
                compact ? 'text-[12.5px]' : 'text-[13px]'
              } ${state === 'pending' ? 'text-muted-foreground/60' : 'text-foreground/85'}`}
            >
              {s.label}
              {state === 'active' && note ? (
                <span className="ml-2 text-muted-foreground">· {note}</span>
              ) : null}
            </span>
            {i < steps.length - 1 && (
              <span className="sr-only">, </span>
            )}
          </li>
        )
      })}
    </ol>
  )
}

// ----------------------------------------------------------- sources list --

function SourcesPanel({
  sources,
  defaultOpen = false,
}: {
  sources: SourceRef[]
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  if (!sources.length) return null
  return (
    <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={`flex w-full items-center gap-2.5 rounded-lg text-left ${FOCUS_RING}`}
      >
        <Globe className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden />
        <span className="text-sm font-bold">
          Live research sources
          <span className="ml-2 rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] font-normal text-muted-foreground">
            {sources.length}
          </span>
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-[11px] text-muted-foreground">
          {open ? 'hide' : 'show'}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-3 flex max-h-72 flex-col gap-1.5 overflow-y-auto pr-1">
              {sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-2.5 rounded-xl border border-border/50 bg-background/40 px-3 py-2 transition-colors hover:border-emerald-400/35 hover:bg-emerald-400/[0.05] ${FOCUS_RING}`}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border/60 bg-card text-[9px] font-bold uppercase text-muted-foreground">
                      {(s.host || 'web').replace(/^www\./, '').slice(0, 2)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[12.5px] font-medium text-foreground/85">
                        {s.title}
                      </span>
                      <span className="block truncate text-[11px] text-muted-foreground">
                        {s.host}
                        {s.date && s.date !== 'N/A' ? ` · ${s.date}` : ''}
                      </span>
                    </span>
                    <ExternalLink
                      className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-emerald-300"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

// ------------------------------------------------------------- plan rows --

/** one saved-plan row — click opens it, trash uses a two-step confirm */
function PlanRow({
  p,
  confirming,
  opening,
  onOpen,
  onRequestDelete,
}: {
  p: PlanSummary
  confirming: boolean
  opening: boolean
  onOpen: (id: string) => void
  onRequestDelete: (id: string) => void
}) {
  const pct = p.total > 0 ? Math.round((p.matched / p.total) * 100) : 0
  return (
    <li className="rounded-xl border border-border/60 bg-card/40 transition-colors hover:border-emerald-400/30">
      <div className="flex items-center gap-1 p-2 pr-1.5">
        <button
          onClick={() => onOpen(p.id)}
          disabled={opening}
          className={`min-w-0 flex-1 rounded-lg px-2 py-1.5 text-left disabled:opacity-60 ${FOCUS_RING}`}
          aria-label={`Open plan ${p.title}`}
        >
          <span className="flex items-center gap-1.5 text-[13px] font-semibold">
            {opening && <Loader2 className="h-3 w-3 shrink-0 animate-spin text-emerald-300" aria-hidden />}
            <span className="min-w-0 truncate">{p.title}</span>
            {(p.engineVersion ?? 1) >= 2 && (
              <span
                className="shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-1.5 py-px font-mono text-[9px] font-bold text-emerald-300"
                title="Mapped with the v2 smart engine"
              >
                v2
              </span>
            )}
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="truncate">
              {formatDistanceToNow(new Date(p.createdAt), { addSuffix: true })}
            </span>
            <span aria-hidden>·</span>
            <span
              className={`font-mono ${
                pct >= 75
                  ? 'text-emerald-400'
                  : pct >= 40
                    ? 'text-amber-300'
                    : 'text-muted-foreground'
              }`}
            >
              {p.matched}/{p.total}
            </span>
            {!!p.refreshCount && p.refreshCount > 0 && (
              <>
                <span aria-hidden>·</span>
                <span className="flex shrink-0 items-center gap-0.5" title={`Re-mapped ${p.refreshCount}×`}>
                  <RefreshCw className="h-2.5 w-2.5" aria-hidden />
                  {p.refreshCount}
                </span>
              </>
            )}
          </span>
        </button>
        <button
          onClick={() => onRequestDelete(p.id)}
          aria-label={confirming ? `Confirm deleting ${p.title}` : `Delete plan ${p.title}`}
          title={confirming ? 'Click again to confirm' : 'Delete plan'}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${FOCUS_RING} ${
            confirming
              ? 'bg-rose-500/15 text-rose-400'
              : 'text-muted-foreground/60 hover:bg-rose-500/10 hover:text-rose-400'
          }`}
        >
          {confirming ? (
            <span className="text-[10px] font-bold">SURE?</span>
          ) : (
            <Trash2 className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </li>
  )
}

/** saved-plans panel shared by the input and result stages */
function SavedPlansPanel({
  plans,
  loading,
  confirmDeleteId,
  openingId,
  onOpen,
  onRequestDelete,
}: {
  plans: PlanSummary[]
  loading: boolean
  confirmDeleteId: string | null
  openingId: string | null
  onOpen: (id: string) => void
  onRequestDelete: (id: string) => void
}) {
  return (
    <div className="rounded-2xl border border-border/80 bg-card p-4">
      <div className="mb-3 flex items-center gap-2">
        <ClipboardList className="h-4 w-4 text-emerald-300" aria-hidden />
        <h3 className="text-sm font-bold">Saved plans</h3>
        <span className="ml-auto rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          {plans.length}
        </span>
      </div>
      {loading ? (
        <SpinnerLine text="Loading plans…" />
      ) : plans.length === 0 ? (
        <p className="text-xs leading-relaxed text-muted-foreground">
          Plans you build appear here — reopen any of them anytime.
        </p>
      ) : (
        <ul className="flex max-h-96 flex-col gap-2 overflow-y-auto pr-1">
          {plans.map((p) => (
            <PlanRow
              key={p.id}
              p={p}
              confirming={confirmDeleteId === p.id}
              opening={openingId === p.id}
              onOpen={onOpen}
              onRequestDelete={onRequestDelete}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

// ------------------------------------------------------------ main view --

const VIA_LABEL: Record<string, { label: string; title: string }> = {
  pin: { label: 'Pinned', title: 'You confirmed this match — it is locked' },
  agree: { label: 'Verified', title: 'AI and the library index agree on this match' },
  local: { label: 'Indexed', title: 'Matched by the library keyword index' },
  llm: { label: 'AI', title: 'Matched by the AI reading your syllabus' },
  subject: { label: 'Subject', title: 'Matched to a subject — no specific chapter yet' },
}

export function SyllabusView() {
  const { toast } = useToast()
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const navigate = useStudy((s) => s.navigate)

  // top-level mode: the Exam Command Center (default) or the classic topic plans
  const [topMode, setTopMode] = useState<'exams' | 'plans'>(() => {
    try {
      return localStorage.getItem('sv-syllabus-mode') === 'plans' ? 'plans' : 'exams'
    } catch {
      return 'exams'
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem('sv-syllabus-mode', topMode)
    } catch {
      /* storage unavailable */
    }
  }, [topMode])

  const [stage, setStage] = useState<Stage>('input')
  const [tab, setTab] = useState<'name' | 'file'>('name')

  // input state
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // shared flow state
  const [busy, setBusy] = useState<Busy>(null)
  const [topics, setTopics] = useState<string[]>([])
  const [addTopicInput, setAddTopicInput] = useState('')
  const [source, setSource] = useState<{
    title: string
    sourceType: 'typed' | 'uploaded'
    sourceName: string
  }>({ title: '', sourceType: 'typed', sourceName: '' })
  const [researchSources, setResearchSources] = useState<SourceRef[]>([])

  // live step state
  const [researchStepStates, setResearchStepStates] = useState<Record<string, StepState>>({})
  const [researchNote, setResearchNote] = useState<string | null>(null)
  const [mapStepStates, setMapStepStates] = useState<Record<string, StepState>>({})
  const [mapNote, setMapNote] = useState<string | null>(null)

  // result state
  const [plan, setPlan] = useState<PlanFull | null>(null)
  const [subjectFilter, setSubjectFilter] = useState<string | 'all'>('all')
  const [pinningTopic, setPinningTopic] = useState<string | null>(null)
  const [showUnmatched, setShowUnmatched] = useState(true)

  // saved plans sidebar
  const [plans, setPlans] = useState<PlanSummary[]>([])
  const [loadingPlans, setLoadingPlans] = useState(false)
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)
  const [openingId, setOpeningId] = useState<string | null>(null)

  const loadPlans = useCallback(() => {
    const id = ensureDevice()
    setLoadingPlans(true)
    fetch(`/api/syllabus/plans?deviceId=${encodeURIComponent(id)}`)
      .then(async (res) => {
        if (!res.ok) return
        const data = (await res.json()) as { plans: PlanSummary[] }
        setPlans(data.plans ?? [])
      })
      .catch(() => {
        /* offline-tolerant */
      })
      .finally(() => setLoadingPlans(false))
  }, [ensureDevice])

  useEffect(() => {
    loadPlans()
  }, [loadPlans])

  // reset confirm state after a beat so a stray click can't delete instantly
  useEffect(() => {
    if (!confirmDeleteId) return
    const t = setTimeout(() => setConfirmDeleteId(null), 3500)
    return () => clearTimeout(t)
  }, [confirmDeleteId])

  const fail = (message: string) => {
    toast({ title: 'Syllabus Mapper', description: message, variant: 'destructive' })
  }

  /** advance the research step machine from SSE stage events */
  const applyResearchStage = (data: Record<string, unknown>) => {
    const s = typeof data.stage === 'string' ? data.stage : ''
    setResearchStepStates((prev) => {
      const next = { ...prev }
      const order = RESEARCH_STEPS.map((x) => x.id)
      const idx = order.indexOf(s)
      if (idx === -1) return next
      for (let i = 0; i < idx; i++) next[order[i]] = 'done'
      next[s] = 'active'
      return next
    })
    if (s === 'search') setResearchNote('3 parallel queries')
    else if (s === 'sources')
      setResearchNote(`${data.count ?? '?'} results · keeping ${data.kept ?? '?'}`)
    else if (s === 'read')
      setResearchNote(
        data.host ? `reading ${String(data.host).replace(/^www\./, '')}` : 'reading pages'
      )
    else if (s === 'synthesize') setResearchNote(`${data.pages ?? 0} pages + ${data.snippets ?? 0} snippets`)
    else if (s === 'done') setResearchNote(null)
  }

  /** advance the map step machine from SSE stage events */
  const applyMapStage = (data: Record<string, unknown>) => {
    const s = typeof data.stage === 'string' ? data.stage : ''
    setMapStepStates((prev) => {
      const next = { ...prev }
      const order = MAP_STEPS.map((x) => x.id)
      const idx = order.indexOf(s)
      if (idx === -1) return next
      for (let i = 0; i < idx; i++) next[order[i]] = 'done'
      next[s] = 'active'
      return next
    })
    if (s === 'clean') setMapNote(`${data.count ?? '?'} topics${data.pinned ? ` · ${data.pinned} pinned` : ''}`)
    else if (s === 'route') setMapNote('reading the subject catalog')
    else if (s === 'route-done')
      setMapNote(data.llm ? `${data.subjects ?? '?'} subjects identified` : 'using the local index')
    else if (s === 'chapter')
      setMapNote(`${data.done ?? '?'}/${data.total ?? '?'} · ${data.subject ?? ''}`)
    else if (s === 'score') setMapNote('LLM × keyword index')
    else if (s === 'save') setMapNote('writing to your library')
    else setMapNote(null)
  }

  // ------------------------------------------------------- input: typed --

  const doResearch = async () => {
    const clean = name.trim()
    if (!clean) {
      fail('Type the name of your test, course or program first.')
      return
    }
    setBusy('research')
    setResearchStepStates({ search: 'active' })
    setResearchNote('3 parallel queries')
    try {
      let done = false
      await streamSSE(
        '/api/syllabus/research',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ deviceId: ensureDevice(), name: clean, details: details.trim() }),
        },
        (event, data) => {
          if (event === 'stage') {
            applyResearchStage(data)
          } else if (event === 'done') {
            done = true
            const topics = (data.topics as string[]) ?? []
            const sources = (data.sources as SourceRef[]) ?? []
            if (!topics.length) return
            setTopics(topics)
            setResearchSources(sources)
            setSource({ title: clean, sourceType: 'typed', sourceName: clean })
            setResearchStepStates(
              Object.fromEntries(RESEARCH_STEPS.map((s) => [s.id, 'done' as StepState]))
            )
            setStage('review')
            if (data.cached) {
              toast({
                title: 'Served from the live cache',
                description: 'This exact research was reused from 30 minutes ago — instant.',
              })
            } else {
              toast({
                title: `Researched ${topics.length} topics`,
                description: `${sources.length} live web sources used.`,
              })
            }
          } else if (event === 'error') {
            done = true
            fail(String(data.error ?? 'Could not research that name — please try again.'))
          }
        }
      )
      if (!done && !topics.length) {
        fail('Research stream ended early — please try again.')
      }
    } catch (err) {
      fail(err instanceof Error ? err.message : 'Network error — please try again.')
    } finally {
      setBusy(null)
      setResearchNote(null)
    }
  }

  // ----------------------------------------------------- input: uploaded --

  const pickFile = (f: File | undefined | null) => {
    if (!f) return
    const ext = f.name.slice(f.name.lastIndexOf('.')).toLowerCase()
    if (!ACCEPTED_EXT.includes(ext)) {
      fail('Unsupported file type — use PDF, TXT, MD, DOC or DOCX.')
      return
    }
    if (f.size > MAX_BYTES) {
      fail('That file is larger than 10 MB — please upload a smaller document.')
      return
    }
    setFile(f)
  }

  const doExtract = async () => {
    if (!file) {
      fail('Choose a syllabus document first.')
      return
    }
    setBusy('extract')
    try {
      const form = new FormData()
      form.append('file', file)
      form.append('deviceId', ensureDevice())
      const res = await fetch('/api/syllabus/extract', { method: 'POST', body: form })
      const data = (await res.json().catch(() => ({}))) as { topics?: string[]; error?: string }
      if (!res.ok || !data.topics?.length) {
        fail(data.error || 'Could not extract topics from that document.')
        return
      }
      const base = file.name.replace(/\.[^.]+$/, '').trim() || 'Uploaded syllabus'
      setTopics(data.topics)
      setResearchSources([])
      setSource({ title: base, sourceType: 'uploaded', sourceName: file.name })
      setStage('review')
    } catch {
      fail('Network error — please try again.')
    } finally {
      setBusy(null)
    }
  }

  // ------------------------------------------------------------ review --

  const removeTopic = (t: string) => setTopics((prev) => prev.filter((x) => x !== t))

  const addTopic = () => {
    const t = addTopicInput.replace(/\s+/g, ' ').trim().slice(0, 160)
    if (t.length < 2) return
    if (topics.some((x) => x.toLowerCase() === t.toLowerCase())) {
      setAddTopicInput('')
      return
    }
    setTopics((prev) => [...prev, t])
    setAddTopicInput('')
  }

  const doMap = async () => {
    if (!topics.length) {
      fail('Add at least one topic to map.')
      return
    }
    setBusy('map')
    setMapStepStates({ clean: 'active' })
    setMapNote(`${topics.length} topics`)
    try {
      let done = false
      await streamSSE(
        '/api/syllabus/map',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            deviceId: ensureDevice(),
            title: source.title || 'Syllabus plan',
            sourceType: source.sourceType,
            sourceName: source.sourceName,
            topics,
            sources: researchSources,
          }),
        },
        (event, data) => {
          if (event === 'stage') {
            applyMapStage(data)
          } else if (event === 'done') {
            done = true
            const p = data as unknown as PlanFull
            if (!p?.id) return
            setPlan(p)
            setSubjectFilter('all')
            setShowUnmatched(true)
            setMapStepStates(Object.fromEntries(MAP_STEPS.map((s) => [s.id, 'done' as StepState])))
            setStage('result')
            loadPlans()
          } else if (event === 'error') {
            done = true
            fail(String(data.error ?? 'Could not map those topics — please try again.'))
          }
        }
      )
      if (!done && !plan) {
        fail('Mapping stream ended early — please try again.')
      }
    } catch (err) {
      fail(err instanceof Error ? err.message : 'Network error — please try again.')
    } finally {
      setBusy(null)
      setMapNote(null)
    }
  }

  // ------------------------------------------------------------- result --

  const openPlan = async (id: string) => {
    setBusy('open')
    setOpeningId(id)
    try {
      const res = await fetch(
        `/api/syllabus/plans/${encodeURIComponent(id)}?deviceId=${encodeURIComponent(ensureDevice())}`
      )
      const data = (await res.json().catch(() => ({}))) as PlanFull & { error?: string }
      if (!res.ok || !data?.id) {
        fail(data?.error || 'Could not open that plan.')
        return
      }
      setPlan(data)
      setSubjectFilter('all')
      setStage('result')
    } catch {
      fail('Network error — please try again.')
    } finally {
      setOpeningId(null)
      setBusy(null)
    }
  }

  const deletePlan = async (id: string) => {
    try {
      const res = await fetch(
        `/api/syllabus/plans/${encodeURIComponent(id)}?deviceId=${encodeURIComponent(ensureDevice())}`,
        { method: 'DELETE' }
      )
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string }
        fail(data.error || 'Could not delete that plan.')
        return
      }
      setConfirmDeleteId(null)
      if (plan?.id === id) {
        setPlan(null)
        setStage('input')
        setName('')
        setDetails('')
        setFile(null)
        setTopics([])
      }
      loadPlans()
    } catch {
      fail('Network error — please try again.')
    }
  }

  /** PATCH remap — no pin = full refresh, pin = confirm one topic then refresh */
  const remap = async (pin?: { topic: string; chapterId: string }) => {
    if (!plan) return
    const wasPin = !!pin
    if (wasPin) setPinningTopic(pin.topic)
    else setBusy('refresh')
    setMapStepStates({ clean: 'active' })
    try {
      let done = false
      await streamSSE(
        `/api/syllabus/plans/${encodeURIComponent(plan.id)}?deviceId=${encodeURIComponent(ensureDevice())}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(pin ? { pin } : {}),
        },
        (event, data) => {
          if (event === 'stage') {
            applyMapStage(data)
          } else if (event === 'done') {
            done = true
            const p = data as unknown as PlanFull
            if (!p?.id) return
            setPlan(p)
            setMapStepStates(Object.fromEntries(MAP_STEPS.map((s) => [s.id, 'done' as StepState])))
            loadPlans()
          } else if (event === 'error') {
            done = true
            fail(String(data.error ?? 'Could not update the plan.'))
          }
        }
      )
      if (done) {
        toast({
          title: wasPin ? 'Match confirmed' : 'Plan re-mapped',
          description: wasPin
            ? 'That topic is now pinned — future refreshes keep it.'
            : 'Every topic re-checked with the current smart engine.',
        })
      }
    } catch (err) {
      fail(err instanceof Error ? err.message : 'Network error — please try again.')
    } finally {
      setPinningTopic(null)
      setBusy(null)
      setMapNote(null)
    }
  }

  const startOver = () => {
    setStage('input')
    setTopics([])
    setFile(null)
    setAddTopicInput('')
    setPlan(null)
    setResearchSources([])
    setResearchStepStates({})
    setMapStepStates({})
    setSubjectFilter('all')
  }

  // group matched entries by subject, biggest groups first
  const groups = useMemo(() => {
    if (!plan) return []
    const bySubject = new Map<
      string,
      { subjectId: string; subjectName: string; entries: MappingEntry[] }
    >()
    for (const m of plan.mapping) {
      if (!m.subjectId) continue
      let g = bySubject.get(m.subjectId)
      if (!g) {
        g = { subjectId: m.subjectId, subjectName: m.subjectName ?? m.subjectId, entries: [] }
        bySubject.set(m.subjectId, g)
      }
      g.entries.push(m)
    }
    return [...bySubject.values()].sort((a, b) => b.entries.length - a.entries.length)
  }, [plan])

  const unmatched = useMemo(
    () => (plan ? plan.mapping.filter((m) => !m.subjectId || !m.chapterId) : []),
    [plan]
  )
  const trueUnmatched = useMemo(
    () => (plan ? plan.mapping.filter((m) => !m.subjectId && !m.chapterId) : []),
    [plan]
  )

  const stats = useMemo(() => {
    if (!plan) return { subjects: 0, chapters: 0, strong: 0, avg: 0, subjectOnly: 0 }
    const withChapter = plan.mapping.filter((m) => m.chapterId)
    const chapters = new Set(withChapter.map((m) => m.chapterId)).size
    const strong = withChapter.filter((m) => m.confidence >= 0.75).length
    const avg = withChapter.length
      ? withChapter.reduce((a, m) => a + m.confidence, 0) / withChapter.length
      : 0
    const subjectOnly = plan.mapping.filter((m) => m.subjectId && !m.chapterId).length
    return { subjects: groups.length, chapters, strong, avg, subjectOnly }
  }, [plan, groups])

  const coveragePct = plan && plan.total > 0 ? Math.round((plan.matched / plan.total) * 100) : 0
  const coverageTone =
    coveragePct >= 75 ? 'text-emerald-300' : coveragePct >= 40 ? 'text-amber-200' : 'text-rose-300'

  const openChapter = (chapterId: string) => {
    navigate({ name: 'chapter', chapterId })
  }
  const openSubjectBook = (chapterId: string) => {
    const bookId = getChapter(chapterId)?.bookId
    if (bookId) navigate({ name: 'book', bookId })
  }
  const openSubjectBookById = (subjectId: string) => {
    const book = LIBRARY_BOOKS.find((b) => b.subjectId === subjectId)
    if (book) navigate({ name: 'book', bookId: book.id })
  }

  const requestDelete = (id: string) =>
    confirmDeleteId === id ? deletePlan(id) : setConfirmDeleteId(id)

  const visibleGroups = subjectFilter === 'all' ? groups : groups.filter((g) => g.subjectId === subjectFilter)

  // ============================================================== render =

  const modeSwitch = (
    <div
      role="tablist"
      aria-label="Syllabus tools"
      className="mb-8 inline-flex h-auto w-full max-w-md gap-1 rounded-xl border border-border/70 bg-card/60 p-1 sm:w-auto"
    >
      {(
        [
          { id: 'exams', label: 'Exam Command Center', icon: Target },
          { id: 'plans', label: 'Topic Plans', icon: ClipboardList },
        ] as const
      ).map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          role="tab"
          aria-selected={topMode === id}
          onClick={() => setTopMode(id)}
          className={`inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-[13px] font-semibold transition-colors ${FOCUS_RING} ${
            topMode === id
              ? 'bg-emerald-400/15 text-emerald-600 dark:text-emerald-200'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Icon className="h-3.5 w-3.5" aria-hidden />
          {label}
        </button>
      ))}
    </div>
  )

  if (topMode === 'exams') {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        {modeSwitch}
        <ExamCommandCenter />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      {/* ---------------- mode switch ---------------- */}
      {modeSwitch}

      {/* ---------------- hero ---------------- */}
      <div className="mb-8 sm:mb-10">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10">
            <ClipboardList className="h-6 w-6 text-emerald-300" aria-hidden />
          </span>
          <div className="min-w-0">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Syllabus <span className="text-emerald-300">Mapper</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground sm:text-[15px]">
              Bring any syllabus — live web research maps it to your library.
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { icon: Globe, label: 'Live web research' },
            { icon: Zap, label: 'Smart matching engine v2' },
            { icon: RefreshCw, label: 'Always refreshable' },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              <Icon className="h-3 w-3 text-emerald-300" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* ================================ STAGE: INPUT ================================ */}
        {stage === 'input' && (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <Tabs value={tab} onValueChange={(v) => setTab(v as 'name' | 'file')}>
              <TabsList className="mb-5 h-auto w-full max-w-md gap-1 rounded-xl border border-border/70 bg-card/60 p-1 sm:w-auto">
                <TabsTrigger
                  value="name"
                  className="gap-2 rounded-lg px-4 py-2 text-[13px] data-[state=active]:bg-emerald-400/15 data-[state=active]:text-emerald-200"
                >
                  <Keyboard className="h-3.5 w-3.5" aria-hidden />
                  Type a name
                </TabsTrigger>
                <TabsTrigger
                  value="file"
                  className="gap-2 rounded-lg px-4 py-2 text-[13px] data-[state=active]:bg-emerald-400/15 data-[state=active]:text-emerald-200"
                >
                  <Upload className="h-3.5 w-3.5" aria-hidden />
                  Upload a document
                </TabsTrigger>
              </TabsList>

              <TabsContent value="name" className="mt-0">
                <div className="max-w-2xl rounded-2xl border border-border/80 bg-card p-5 sm:p-6">
                  <label
                    htmlFor="syllabus-name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    What are you studying for?
                  </label>
                  <Input
                    id="syllabus-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && busy !== 'research' && doResearch()}
                    placeholder="e.g. a university entrance test, a recruitment exam, a semester course"
                    className="h-11 rounded-xl border-border/80 bg-background/60 text-[14px] placeholder:text-muted-foreground/60 focus-visible:ring-emerald-400/50"
                    disabled={busy === 'research'}
                    maxLength={200}
                  />
                  <label
                    htmlFor="syllabus-details"
                    className="mb-2 mt-4 block text-sm font-semibold"
                  >
                    Any extra context?{' '}
                    <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <Input
                    id="syllabus-details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="e.g. subject stream, level, or year"
                    className="h-11 rounded-xl border-border/80 bg-background/60 text-[14px] placeholder:text-muted-foreground/60 focus-visible:ring-emerald-400/50"
                    disabled={busy === 'research'}
                    maxLength={300}
                  />
                  <div className="mt-5 flex min-h-11 flex-wrap items-center gap-4">
                    <button
                      onClick={doResearch}
                      disabled={busy === 'research'}
                      className={`inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_rgba(52,211,153,0.35)] transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS_RING}`}
                    >
                      {busy === 'research' ? (
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      ) : (
                        <Sparkles className="h-4 w-4" aria-hidden />
                      )}
                      Research topics
                    </button>
                  </div>
                  {busy === 'research' && (
                    <div className="mt-4 rounded-xl border border-border/60 bg-background/40 p-4">
                      <LiveSteps
                        steps={RESEARCH_STEPS}
                        states={researchStepStates}
                        note={researchNote}
                        compact
                      />
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="file" className="mt-0">
                <div className="max-w-2xl rounded-2xl border border-border/80 bg-card p-5 sm:p-6">
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label="Upload a syllabus document"
                    onClick={() => fileInputRef.current?.click()}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        fileInputRef.current?.click()
                      }
                    }}
                    onDragOver={(e) => {
                      e.preventDefault()
                      setDragOver(true)
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault()
                      setDragOver(false)
                      pickFile(e.dataTransfer.files?.[0])
                    }}
                    className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 text-center transition-all ${FOCUS_RING} ${
                      dragOver
                        ? 'border-emerald-400/60 bg-emerald-400/[0.07]'
                        : 'border-border bg-background/40 hover:border-emerald-400/40 hover:bg-emerald-400/[0.04]'
                    }`}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-card">
                      <Upload className="h-5 w-5 text-emerald-300" aria-hidden />
                    </span>
                    <span className="mt-3 text-sm font-semibold">
                      Drop your syllabus here
                    </span>
                    <span className="mt-1 text-xs text-muted-foreground">
                      or click to browse · PDF, TXT, MD, DOC, DOCX · up to 10 MB
                    </span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.txt,.md,.doc,.docx"
                      className="sr-only"
                      onChange={(e) => {
                        pickFile(e.target.files?.[0])
                        e.target.value = ''
                      }}
                    />
                  </div>

                  {file && (
                    <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.06] px-3.5 py-2.5">
                      <FileText className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden />
                      <span className="min-w-0 flex-1 truncate text-[13px] font-medium">
                        {file.name}
                      </span>
                      <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(1)} MB
                      </span>
                      <button
                        onClick={() => setFile(null)}
                        aria-label={`Remove ${file.name}`}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-rose-500/10 hover:text-rose-400 ${FOCUS_RING}`}
                      >
                        <X className="h-3.5 w-3.5" aria-hidden />
                      </button>
                    </div>
                  )}

                  <div className="mt-5 flex min-h-11 flex-wrap items-center gap-4">
                    <button
                      onClick={doExtract}
                      disabled={busy === 'extract' || !file}
                      className={`inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_rgba(52,211,153,0.35)] transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS_RING}`}
                    >
                      {busy === 'extract' ? (
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      ) : (
                        <FileText className="h-4 w-4" aria-hidden />
                      )}
                      Extract topics
                    </button>
                    {busy === 'extract' && <SpinnerLine text="Reading your document…" />}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {plans.length > 0 && (
              <div className="mt-10 max-w-2xl">
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
                  Continue where you left off
                </h2>
                <ul className="flex flex-col gap-2">
                  {plans.slice(0, 4).map((p) => (
                    <PlanRow
                      key={p.id}
                      p={p}
                      confirming={confirmDeleteId === p.id}
                      opening={openingId === p.id}
                      onOpen={openPlan}
                      onRequestDelete={requestDelete}
                    />
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}

        {/* ================================ STAGE: REVIEW ================================ */}
        {stage === 'review' && (
          <motion.div
            key="review"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-bold">Review your topics</h2>
                <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-300">
                  {topics.length} topic{topics.length !== 1 ? 's' : ''}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                  {source.sourceType === 'uploaded' ? (
                    <>
                      <FileText className="h-3 w-3" aria-hidden />
                      From your document
                    </>
                  ) : (
                    <>
                      <Globe className="h-3 w-3" aria-hidden />
                      Live web research
                      {researchSources.length > 0 && ` · ${researchSources.length} sources`}
                    </>
                  )}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Remove anything that doesn&apos;t belong, or add what&apos;s missing — then
                we&apos;ll map the list onto your library.
              </p>

              <div className="mt-5 max-h-96 overflow-y-auto pr-1">
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <span
                      key={t}
                      className="group inline-flex max-w-full items-center gap-1.5 rounded-full border border-border/80 bg-background/50 py-1.5 pl-3 pr-1.5 text-[13px]"
                    >
                      <span className="min-w-0 truncate">{t}</span>
                      <button
                        onClick={() => removeTopic(t)}
                        aria-label={`Remove topic ${t}`}
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-muted-foreground/70 transition-colors hover:bg-rose-500/15 hover:text-rose-400 ${FOCUS_RING}`}
                      >
                        <X className="h-3 w-3" aria-hidden />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <div className="relative flex-1">
                  <Input
                    value={addTopicInput}
                    onChange={(e) => setAddTopicInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addTopic()}
                    placeholder="Add your own topic…"
                    aria-label="Add a custom topic"
                    className="h-11 rounded-xl border-border/80 bg-background/60 pr-12 text-[14px] placeholder:text-muted-foreground/60 focus-visible:ring-emerald-400/50"
                    maxLength={160}
                  />
                  <button
                    onClick={addTopic}
                    aria-label="Add topic"
                    className={`absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-emerald-300 transition-colors hover:bg-emerald-400/10 ${FOCUS_RING}`}
                  >
                    <Plus className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              </div>

              <div className="mt-6 flex min-h-11 flex-wrap items-center gap-3">
                <button
                  onClick={doMap}
                  disabled={busy === 'map' || topics.length === 0}
                  className={`inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_rgba(52,211,153,0.35)] transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS_RING}`}
                >
                  {busy === 'map' ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  ) : (
                    <BookOpen className="h-4 w-4" aria-hidden />
                  )}
                  Map to library
                </button>
                <button
                  onClick={startOver}
                  disabled={busy === 'map'}
                  className={`inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-emerald-400/40 hover:bg-card disabled:opacity-60 ${FOCUS_RING}`}
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  Start over
                </button>
              </div>

              {busy === 'map' && (
                <div className="mt-4 rounded-xl border border-border/60 bg-background/40 p-4">
                  <LiveSteps steps={MAP_STEPS} states={mapStepStates} note={mapNote} compact />
                </div>
              )}
            </div>

            {researchSources.length > 0 && (
              <div className="mt-5">
                <SourcesPanel sources={researchSources} />
              </div>
            )}
          </motion.div>
        )}

        {/* ================================ STAGE: RESULT ================================ */}
        {stage === 'result' && plan && (
          <motion.div
            key={`result-${plan.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {/* -------- main column -------- */}
            <div className="min-w-0 lg:col-span-2">
              {/* header card */}
              <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <CoverageRing pct={coveragePct} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="truncate text-xl font-bold tracking-tight sm:text-2xl">
                        {plan.title}
                      </h2>
                      {(plan.engineVersion ?? 1) >= 2 && (
                        <span
                          className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300"
                          title="Two-stage AI routing + keyword-index cross-checking"
                        >
                          <Zap className="h-3 w-3" aria-hidden />
                          ENGINE v2
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                        {plan.sourceType === 'uploaded' ? (
                          <FileText className="h-3 w-3" aria-hidden />
                        ) : (
                          <Globe className="h-3 w-3" aria-hidden />
                        )}
                        {plan.sourceType === 'uploaded' ? 'Uploaded document' : 'Live research'}
                      </span>
                      <span className="text-[11px] text-muted-foreground">
                        {plan.refreshedAt
                          ? `updated ${formatDistanceToNow(new Date(plan.refreshedAt), { addSuffix: true })}`
                          : formatDistanceToNow(new Date(plan.createdAt), { addSuffix: true })}
                      </span>
                      {plan.refreshCount ? (
                        <span className="rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                          ↻ {plan.refreshCount}
                        </span>
                      ) : null}
                    </div>
                    <p className={`mt-3 text-sm font-semibold ${coverageTone}`}>
                      {plan.matched} of {plan.total} topics matched — {coveragePct}% coverage
                    </p>
                    <div className="mt-2 h-1.5 w-full max-w-sm overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full rounded-full ${
                          coveragePct >= 75
                            ? 'bg-emerald-400'
                            : coveragePct >= 40
                              ? 'bg-amber-300'
                              : 'bg-rose-400'
                        }`}
                        style={{ width: `${coveragePct}%` }}
                      />
                    </div>

                    {/* stats chips */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/40 px-2.5 py-1 text-[11.5px] font-medium text-muted-foreground">
                        <Layers className="h-3.5 w-3.5 text-emerald-300/80" aria-hidden />
                        {stats.subjects} subject{stats.subjects !== 1 ? 's' : ''}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/40 px-2.5 py-1 text-[11.5px] font-medium text-muted-foreground">
                        <BookOpen className="h-3.5 w-3.5 text-emerald-300/80" aria-hidden />
                        {stats.chapters} chapter{stats.chapters !== 1 ? 's' : ''}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/40 px-2.5 py-1 text-[11.5px] font-medium text-muted-foreground">
                        <Target className="h-3.5 w-3.5 text-emerald-300/80" aria-hidden />
                        {stats.strong} strong match{stats.strong !== 1 ? 'es' : ''}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/40 px-2.5 py-1 text-[11.5px] font-medium text-muted-foreground">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-300/80" aria-hidden />
                        {Math.round(stats.avg * 100)}% avg confidence
                      </span>
                      {stats.subjectOnly > 0 && (
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/30 bg-amber-400/[0.07] px-2.5 py-1 text-[11.5px] font-medium text-amber-600 dark:text-amber-300">
                          <Layers className="h-3.5 w-3.5" aria-hidden />
                          {stats.subjectOnly} subject-only
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-row gap-2 sm:flex-col">
                    <button
                      onClick={() => remap()}
                      disabled={busy === 'refresh'}
                      title="Re-run the smart engine on these topics — pins are kept"
                      className={`inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2.5 text-sm font-semibold text-emerald-600 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/15 disabled:cursor-not-allowed disabled:opacity-60 dark:text-emerald-300 ${FOCUS_RING}`}
                    >
                      {busy === 'refresh' ? (
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      ) : (
                        <RefreshCw className="h-4 w-4" aria-hidden />
                      )}
                      Refresh
                    </button>
                    <button
                      onClick={startOver}
                      className={`inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-emerald-400/40 hover:bg-card ${FOCUS_RING}`}
                    >
                      <Plus className="h-4 w-4" aria-hidden />
                      New plan
                    </button>
                  </div>
                </div>

                {busy === 'refresh' && (
                  <div className="mt-4 rounded-xl border border-border/60 bg-background/40 p-4">
                    <LiveSteps steps={MAP_STEPS} states={mapStepStates} note={mapNote} compact />
                  </div>
                )}
              </div>

              {/* subject filter chips */}
              {groups.length > 1 && (
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setSubjectFilter('all')}
                    aria-pressed={subjectFilter === 'all'}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-colors ${FOCUS_RING} ${
                      subjectFilter === 'all'
                        ? 'border-emerald-400/40 bg-emerald-400/15 text-emerald-600 dark:text-emerald-300'
                        : 'border-border/70 bg-card/50 text-muted-foreground hover:border-emerald-400/30'
                    }`}
                  >
                    All subjects
                    <span className="font-mono text-[10px] opacity-70">{plan.mapping.length}</span>
                  </button>
                  {groups.map((g) => {
                    const active = subjectFilter === g.subjectId
                    return (
                      <button
                        key={g.subjectId}
                        onClick={() => setSubjectFilter(active ? 'all' : g.subjectId)}
                        aria-pressed={active}
                        className={`inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-colors ${FOCUS_RING} ${
                          active
                            ? 'border-emerald-400/40 bg-emerald-400/15 text-emerald-600 dark:text-emerald-300'
                            : 'border-border/70 bg-card/50 text-muted-foreground hover:border-emerald-400/30'
                        }`}
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: subjectAccentById.get(g.subjectId) ?? '#34d399' }}
                          aria-hidden
                        />
                        <span className="max-w-40 truncate">{g.subjectName}</span>
                        <span className="font-mono text-[10px] opacity-70">{g.entries.length}</span>
                      </button>
                    )
                  })}
                  {trueUnmatched.length > 0 && (
                    <button
                      onClick={() => setShowUnmatched((v) => !v)}
                      aria-pressed={showUnmatched}
                      className={`ml-auto inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-colors ${FOCUS_RING} ${
                        showUnmatched
                          ? 'border-border/70 bg-card/50 text-muted-foreground'
                          : 'border-border/70 bg-card/30 text-muted-foreground/60'
                      }`}
                    >
                      {trueUnmatched.length} unmatched
                    </button>
                  )}
                </div>
              )}

              {/* matched groups */}
              {visibleGroups.length > 0 ? (
                <div className="mt-6 flex flex-col gap-5">
                  {visibleGroups.map((g) => {
                    const accent = subjectAccentById.get(g.subjectId) ?? '#34d399'
                    return (
                      <section
                        key={g.subjectId}
                        aria-labelledby={`syllabus-subject-${g.subjectId}`}
                        className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5"
                      >
                        <div className="mb-3 flex items-center gap-2.5">
                          <span
                            className="h-2.5 w-2.5 shrink-0 rounded-full"
                            style={{ background: accent }}
                            aria-hidden
                          />
                          <button
                            id={`syllabus-subject-${g.subjectId}`}
                            onClick={() => openSubjectBookById(g.subjectId)}
                            className={`truncate text-left text-sm font-bold transition-opacity hover:opacity-80 ${FOCUS_RING}`}
                            style={{ color: accent }}
                            title={`Open the ${g.subjectName} book`}
                          >
                            {g.subjectName}
                          </button>
                          <span className="shrink-0 text-[11px] text-muted-foreground">
                            {g.entries.length} topic{g.entries.length !== 1 ? 's' : ''}
                          </span>
                          <span className="h-px min-w-4 flex-1 bg-border/60" aria-hidden />
                        </div>
                        <ul className="flex flex-col gap-2">
                          {g.entries.map((m) => {
                            const via = m.via && VIA_LABEL[m.via]
                            return (
                              <li
                                key={`${m.topic}-${m.chapterId ?? 'subject'}`}
                                className="flex flex-col gap-2 rounded-xl border border-border/50 bg-background/40 p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3"
                              >
                                <div className="flex min-w-0 items-center gap-2.5">
                                  <ConfidenceDot c={m.confidence} />
                                  <span className="min-w-0 truncate text-[13.5px] text-foreground/85">
                                    {m.topic}
                                  </span>
                                  <span className="shrink-0 font-mono text-[10.5px] text-muted-foreground/70">
                                    {Math.round(m.confidence * 100)}%
                                  </span>
                                  {via && (m.via === 'pin' || m.via === 'agree') && (
                                    <span
                                      className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-1.5 py-px text-[9.5px] font-bold uppercase tracking-wide ${
                                        m.via === 'pin'
                                          ? 'border-amber-400/30 bg-amber-400/10 text-amber-600 dark:text-amber-300'
                                          : 'border-emerald-400/30 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300'
                                      }`}
                                      title={via.title}
                                    >
                                      {m.via === 'pin' ? (
                                        <Pin className="h-2.5 w-2.5" aria-hidden />
                                      ) : (
                                        <ShieldCheck className="h-2.5 w-2.5" aria-hidden />
                                      )}
                                      {via.label}
                                    </span>
                                  )}
                                </div>
                                {m.chapterId ? (
                                  <button
                                    onClick={() => openChapter(m.chapterId!)}
                                    title={`Open ${m.chapterTitle}`}
                                    className={`group inline-flex min-w-0 shrink-0 items-center gap-1.5 self-start rounded-lg border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1.5 text-left text-[12.5px] font-semibold text-emerald-600 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/15 dark:text-emerald-300 sm:self-auto ${FOCUS_RING}`}
                                  >
                                    <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden />
                                    <span className="min-w-0 truncate">{m.chapterTitle}</span>
                                    <ArrowUpRight
                                      className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                                      aria-hidden
                                    />
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => openSubjectBookById(g.subjectId)}
                                    title={`Browse the ${g.subjectName} book`}
                                    className={`group inline-flex min-w-0 shrink-0 items-center gap-1.5 self-start rounded-lg border border-amber-400/25 bg-amber-400/[0.08] px-2.5 py-1.5 text-left text-[12.5px] font-semibold text-amber-600 transition-colors hover:border-amber-400/50 hover:bg-amber-400/15 dark:text-amber-300 sm:self-auto ${FOCUS_RING}`}
                                  >
                                    <Layers className="h-3.5 w-3.5 shrink-0" aria-hidden />
                                    <span className="min-w-0 truncate">Browse {g.subjectName}</span>
                                    <ArrowUpRight
                                      className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                                      aria-hidden
                                    />
                                  </button>
                                )}
                              </li>
                            )
                          })}
                        </ul>
                      </section>
                    )
                  })}
                </div>
              ) : subjectFilter !== 'all' ? (
                <div className="mt-6 rounded-2xl border border-border/80 bg-card p-6 text-center">
                  <p className="text-sm font-semibold">No topics in this subject</p>
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-border/80 bg-card p-6 text-center">
                  <p className="text-sm font-semibold">No library matches yet</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    None of these topics lined up with a chapter — try renaming them to be more
                    specific, or browse the library directly.
                  </p>
                </div>
              )}

              {/* unmatched with "use closest" fix-up */}
              {showUnmatched && unmatched.length > 0 && (
                <section
                  aria-labelledby="syllabus-unmatched"
                  className="mt-6 rounded-2xl border border-dashed border-border/80 bg-card/40 p-4 sm:p-5"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <h3 id="syllabus-unmatched" className="text-sm font-bold text-muted-foreground">
                      Needs your input
                    </h3>
                    <span className="rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {unmatched.length}
                    </span>
                  </div>
                  <div className="flex max-h-64 flex-col gap-2 overflow-y-auto pr-1">
                    {unmatched.map((m) => (
                      <div
                        key={m.topic}
                        className="flex flex-col gap-2 rounded-xl border border-border/50 bg-background/40 p-2.5 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <span
                          className="min-w-0 truncate text-[12.5px] text-muted-foreground"
                          title="No confident chapter was found for this topic"
                        >
                          {m.topic}
                        </span>
                        {m.closest ? (
                          <button
                            onClick={() => remap({ topic: m.topic, chapterId: m.closest!.chapterId })}
                            disabled={pinningTopic === m.topic}
                            title={`Pin to "${m.closest.chapterTitle}" (${Math.round(
                              m.closest.confidence * 100
                            )}% keyword overlap) — pins survive refreshes`}
                            className={`group inline-flex min-w-0 shrink-0 items-center gap-1.5 self-start rounded-lg border border-dashed border-emerald-400/30 bg-emerald-400/[0.06] px-2.5 py-1.5 text-left text-[12px] font-semibold text-emerald-600 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/15 disabled:opacity-60 dark:text-emerald-300 sm:self-auto ${FOCUS_RING}`}
                          >
                            {pinningTopic === m.topic ? (
                              <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin" aria-hidden />
                            ) : (
                              <Wand2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
                            )}
                            <span className="min-w-0 truncate">
                              Use closest · {m.closest.chapterTitle}
                            </span>
                          </button>
                        ) : (
                          <span className="shrink-0 text-[11px] text-muted-foreground/50">
                            no similar chapter found
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* -------- sidebar -------- */}
            <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start" aria-label="Saved plans">
              {plan.research && plan.research.length > 0 && (
                <div className="mb-4">
                  <SourcesPanel sources={plan.research} />
                </div>
              )}
              <SavedPlansPanel
                plans={plans}
                loading={loadingPlans}
                confirmDeleteId={confirmDeleteId}
                openingId={openingId}
                onOpen={openPlan}
                onRequestDelete={requestDelete}
              />
              <button
                onClick={startOver}
                className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card/70 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-emerald-400/40 hover:bg-card ${FOCUS_RING}`}
              >
                <ArrowRight className="h-4 w-4 text-emerald-300" aria-hidden />
                Map another syllabus
              </button>
            </aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

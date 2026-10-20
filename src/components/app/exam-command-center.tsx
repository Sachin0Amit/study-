'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { formatDistanceToNow } from 'date-fns'
import {
  ArrowLeft,
  ArrowUpRight,
  Atom,
  BookMarked,
  BookOpen,
  Calculator,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Cpu,
  ExternalLink,
  FileText,
  FlaskConical,
  Globe,
  GraduationCap,
  Landmark,
  Layers,
  Library,
  ListChecks,
  Loader2,
  Minus,
  Pencil,
  Play,
  Radar,
  RefreshCw,
  Route,
  Search,
  Sigma,
  Sparkles,
  Target,
  Timer,
  Trash2,
  TrendingUp,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useToast } from '@/hooks/use-toast'
import { useStudy } from '@/store/useStudy'
import {
  LIBRARY_BOOKS,
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
  LIBRARY_SUBJECTS,
  type SectionMeta,
} from '@/data/library'
import { ChapterIcon } from './chapter-icon'
import type {
  ExamMapFull,
  ExamMapSource,
  ExamMapSummary,
  ExamSubject,
  ExamTopic,
} from '@/lib/exam-map-types'

// ====================================================================== ==
// Exam Command Center — type any exam, deep-research its full syllabus
// till the last topic, map it onto the library, and build target sessions.
// The exam name is always dynamic user input; suggestions below stay
// category-neutral on purpose.
// ====================================================================== ==

type Mode = 'home' | 'researching' | 'workspace'
type WorkspaceTab = 'map' | 'library' | 'session' | 'tests'
type StepState = 'pending' | 'active' | 'done'

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const CURRENT_MAP_KEY = 'ecc-current-map'

/** neutral category suggestions — never a specific exam brand */
const SUGGESTIONS = [
  'Engineering entrance',
  'Medical entrance',
  'Civil services',
  'Campus placement',
  'Banking & finance',
  'Certification',
  'Olympiad',
  'University course',
]

/** fallback icons for exam subjects with no mapped library subject */
const FALLBACK_ICONS: LucideIcon[] = [
  Sigma,
  Atom,
  FlaskConical,
  Calculator,
  Cpu,
  BookOpen,
  Globe,
  Layers,
]

interface StepDef {
  id: string
  label: string
}

const RESEARCH_STAGES: StepDef[] = [
  { id: 'search', label: 'Searching the live web' },
  { id: 'sources', label: 'Ranking official sources' },
  { id: 'read', label: 'Reading syllabus pages' },
  { id: 'synthesize', label: 'Extracting pattern, subjects & every topic' },
  { id: 'map', label: 'Mapping topics onto your library' },
  { id: 'save', label: 'Saving your exam map' },
]

// ---------------------------------------------------------- library data --

const subjectById = new Map(LIBRARY_SUBJECTS.map((s) => [s.id, s]))
const bookBySubjectId = new Map(LIBRARY_BOOKS.map((b) => [b.subjectId, b]))
const chapterById = new Map(LIBRARY_CHAPTERS.map((c) => [c.id, c]))

/** chapterId → sections (sorted by number) — lightweight metadata only */
const sectionsByChapterId = (() => {
  const map = new Map<string, SectionMeta[]>()
  for (const s of LIBRARY_SECTIONS) {
    const arr = map.get(s.chapterId)
    if (arr) arr.push(s)
    else map.set(s.chapterId, [s])
  }
  for (const arr of map.values()) arr.sort((a, b) => a.number - b.number)
  return map
})()

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

// ----------------------------------------------------------- small parts --

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

/** animated vertical checklist fed by SSE stage events */
function LiveSteps({
  steps,
  states,
  note,
}: {
  steps: StepDef[]
  states: Record<string, StepState>
  note?: string | null
}) {
  return (
    <ol className="flex flex-col gap-2 py-1 text-left" aria-live="polite">
      {steps.map((s) => {
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
              className={`text-[13px] ${
                state === 'pending' ? 'text-muted-foreground/60' : 'text-foreground/85'
              }`}
            >
              {s.label}
              {state === 'active' && note ? (
                <span className="ml-2 text-muted-foreground">· {note}</span>
              ) : null}
            </span>
          </li>
        )
      })}
    </ol>
  )
}

/** radar sweep + pulse rings for the research screen */
function RadarPulse() {
  return (
    <div className="relative mx-auto h-24 w-24" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={`pulse-${i}`}
          className="absolute inset-0 rounded-full border border-emerald-400/40"
          initial={{ scale: 0.35, opacity: 0.9 }}
          animate={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: 'easeOut' }}
        />
      ))}
      <motion.span
        className="absolute inset-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.04]"
        animate={{ rotate: 360 }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'conic-gradient(from 0deg, rgba(52,211,153,0.35), transparent 70deg)',
        }}
      />
      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
    </div>
  )
}

/** collapsible live-research sources panel */
function SourcesPanel({
  sources,
  defaultOpen = false,
}: {
  sources: ExamMapSource[]
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
          Research sources
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

/** tiny amber-outline chip for a question type */
function QTypeChip({ label }: { label: string }) {
  return (
    <span
      className="inline-flex shrink-0 items-center rounded-full border border-amber-400/30 bg-amber-400/[0.07] px-1.5 py-px text-[9.5px] font-semibold text-amber-600 dark:text-amber-300"
      title={`Question type: ${label}`}
    >
      {label}
    </span>
  )
}

// ------------------------------------------------------- derived helpers --

function subjectTopicCount(s: ExamSubject): number {
  return s.units.reduce((a, u) => a + u.topics.length, 0)
}
function subjectMappedCount(s: ExamSubject): number {
  return s.units.reduce((a, u) => a + u.topics.filter((t) => t.chapterId).length, 0)
}
/** unique mapped chapter ids inside one exam subject (in syllabus order) */
function subjectChapterIds(s: ExamSubject): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const u of s.units)
    for (const t of u.topics)
      if (t.chapterId && !seen.has(t.chapterId)) {
        seen.add(t.chapterId)
        out.push(t.chapterId)
      }
  return out
}

// --------------------------------------------------------------- main view --

export function ExamCommandCenter() {
  const { toast } = useToast()
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const navigate = useStudy((s) => s.navigate)
  const progress = useStudy((s) => s.progress)

  // ------------------------------------------------------------- state --
  const [mode, setMode] = useState<Mode>('home')
  const [maps, setMaps] = useState<ExamMapSummary[]>([])
  const [loadingMaps, setLoadingMaps] = useState(true)
  const [current, setCurrent] = useState<ExamMapFull | null>(null)
  const [loadingMapId, setLoadingMapId] = useState<string | null>(null)
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)

  // research form
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [activeName, setActiveName] = useState('')
  const [stepStates, setStepStates] = useState<Record<string, StepState>>({})
  const [stepNote, setStepNote] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  // workspace
  const [tab, setTab] = useState<WorkspaceTab>('map')
  const [query, setQuery] = useState('')
  const [openSubjects, setOpenSubjects] = useState<Set<number>>(new Set([0]))
  const [renaming, setRenaming] = useState(false)
  const [renameValue, setRenameValue] = useState('')
  const [savingName, setSavingName] = useState(false)

  // test papers
  const [attempts, setAttempts] = useState<
    { label: string; score: number; total: number; durationSec: number; createdAt: string }[]
  >([])
  const [poolByChapter, setPoolByChapter] = useState<Map<string, number> | null>(null)

  const fail = (message: string) => {
    toast({ title: 'Exam Command Center', description: message, variant: 'destructive' })
  }

  // -------------------------------------------------------- list loading --

  const loadMaps = useCallback(() => {
    const id = ensureDevice()
    setLoadingMaps(true)
    fetch(`/api/exam-maps?deviceId=${encodeURIComponent(id)}`)
      .then(async (res) => {
        if (!res.ok) return
        const data = (await res.json()) as { maps?: ExamMapSummary[] }
        setMaps(data.maps ?? [])
      })
      .catch(() => {
        /* offline-tolerant */
      })
      .finally(() => setLoadingMaps(false))
  }, [ensureDevice])

  useEffect(() => {
    loadMaps()
  }, [loadMaps])

  // reset the two-step delete confirm after a beat
  useEffect(() => {
    if (!confirmDeleteId) return
    const t = setTimeout(() => setConfirmDeleteId(null), 3500)
    return () => clearTimeout(t)
  }, [confirmDeleteId])

  /** open one exam map by id → workspace (landTab = which tab to land on) */
  const openMap = useCallback(
    async (id: string, landTab: WorkspaceTab = 'map'): Promise<boolean> => {
      setLoadingMapId(id)
      try {
        const res = await fetch(
          `/api/exam-maps/${encodeURIComponent(id)}?deviceId=${encodeURIComponent(ensureDevice())}`
        )
        const data = (await res.json().catch(() => ({}))) as { map?: ExamMapFull; error?: string }
        if (!res.ok || !data.map?.id) {
          fail(data.error || 'Could not open that exam map.')
          return false
        }
        setCurrent(data.map)
        setTab(landTab)
        setQuery('')
        setOpenSubjects(new Set(data.map.subjects.length ? [0] : []))
        setRenaming(false)
        try {
          localStorage.setItem(CURRENT_MAP_KEY, data.map.id)
        } catch {
          /* storage unavailable */
        }
        setMode('workspace')
        return true
      } catch {
        fail('Network error — could not open that exam map.')
        return false
      } finally {
        setLoadingMapId(null)
      }
    },
    [ensureDevice]
  )

  /** restore the last-open exam after the list loads (returning from a test) */
  const restoredRef = useRef(false)
  useEffect(() => {
    if (restoredRef.current || mode !== 'home' || loadingMaps) return
    restoredRef.current = true
    let saved: string | null = null
    try {
      saved = localStorage.getItem(CURRENT_MAP_KEY)
    } catch {
      /* storage unavailable */
    }
    if (saved && maps.some((m) => m.id === saved)) void openMap(saved)
  }, [mode, loadingMaps, maps, openMap])

  // ------------------------------------------------------------ research --

  const applyStage = (data: Record<string, unknown>) => {
    const s = typeof data.stage === 'string' ? data.stage : ''
    setStepStates((prev) => {
      const next = { ...prev }
      const order = RESEARCH_STAGES.map((x) => x.id)
      const idx = order.indexOf(s)
      if (idx === -1) return next
      for (let i = 0; i < idx; i++) next[order[i]] = 'done'
      next[s] = 'active'
      return next
    })
    if (s === 'search') setStepNote('live web queries')
    else if (s === 'sources')
      setStepNote(data.count != null ? `${String(data.count)} results` : 'ranking sources')
    else if (s === 'read')
      setStepNote(
        data.host
          ? `reading ${String(data.host).replace(/^www\./, '')}`
          : data.title
            ? `reading “${String(data.title).slice(0, 42)}”`
            : 'reading pages'
      )
    else if (s === 'synthesize') {
      if (data.note === 'recovering capacity' && data.retry != null) {
        setStepNote(`deep-diving ${String(data.retry)} more subject${Number(data.retry) === 1 ? '' : 's'} — recovering capacity`)
      } else if (typeof data.subject === 'string' && data.total != null) {
        setStepNote(`${data.subject} · ${String(data.done ?? '?')}/${String(data.total)}`)
      } else if (typeof data.subject === 'string' && typeof data.note === 'string') {
        setStepNote(`${data.subject} · ${data.note}`)
      } else if (data.subjects != null) {
        setStepNote(`${String(data.subjects)} subjects`)
      } else {
        setStepNote('extracting every topic')
      }
    } else if (s === 'map')
      setStepNote(data.topics != null ? `${String(data.topics)} topics` : 'matching chapters')
    else if (s === 'save') setStepNote('writing to your library')
    else setStepNote(null)
  }

  const startResearch = async () => {
    const clean = name.trim().slice(0, 200)
    if (clean.length < 2) {
      fail('Type the name of your exam first (at least 2 characters).')
      return
    }
    setMode('researching')
    setActiveName(clean)
    setStepStates({ search: 'active' })
    setStepNote('live web queries')
    const abort = new AbortController()
    abortRef.current = abort
    try {
      let done = false
      await streamSSE(
        '/api/exam-maps',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            deviceId: ensureDevice(),
            name: clean,
            details: details.trim().slice(0, 300) || undefined,
          }),
          signal: abort.signal,
        },
        (event, data) => {
          if (event === 'stage') {
            applyStage(data)
          } else if (event === 'done') {
            done = true
            const id = typeof data.id === 'string' ? data.id : ''
            if (!id) return
            setStepStates(Object.fromEntries(RESEARCH_STAGES.map((s) => [s.id, 'done' as StepState])))
            void (async () => {
              const ok = await openMap(id, 'library')
              loadMaps()
              if (ok) {
                toast({
                  title: 'Study library ready',
                  description: `${clean} — every subject now has its own syllabus book.`,
                })
              }
            })()
          } else if (event === 'error') {
            done = true
            fail(String(data.error ?? 'Could not research that exam — please try again.'))
            setMode('home')
          }
        }
      )
      if (!done) {
        fail('Research stream ended early — please try again.')
        setMode('home')
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        toast({ title: 'Research cancelled' })
      } else {
        fail(err instanceof Error ? err.message : 'Network error — please try again.')
      }
      setMode('home')
    } finally {
      abortRef.current = null
      setStepNote(null)
    }
  }

  const cancelResearch = () => abortRef.current?.abort()

  // ----------------------------------------------------- rename / delete --

  const commitRename = async () => {
    if (!current) return
    const clean = renameValue.replace(/\s+/g, ' ').trim().slice(0, 120)
    if (!clean || clean === current.name) {
      setRenaming(false)
      return
    }
    setSavingName(true)
    try {
      const res = await fetch(`/api/exam-maps/${encodeURIComponent(current.id)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deviceId: ensureDevice(), name: clean }),
      })
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string }
        fail(data.error || 'Could not rename that exam.')
        return
      }
      setCurrent((c) => (c && c.id === current.id ? { ...c, name: clean } : c))
      loadMaps()
      toast({ title: 'Exam renamed', description: clean })
    } catch {
      fail('Network error — could not rename.')
    } finally {
      setSavingName(false)
      setRenaming(false)
    }
  }

  const deleteMap = async (id: string) => {
    try {
      const res = await fetch(
        `/api/exam-maps/${encodeURIComponent(id)}?deviceId=${encodeURIComponent(ensureDevice())}`,
        { method: 'DELETE' }
      )
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string }
        fail(data.error || 'Could not delete that exam.')
        return
      }
      setConfirmDeleteId(null)
      if (current?.id === id) {
        setCurrent(null)
        setMode('home')
        try {
          localStorage.removeItem(CURRENT_MAP_KEY)
        } catch {
          /* storage unavailable */
        }
      }
      loadMaps()
      toast({ title: 'Exam map deleted' })
    } catch {
      fail('Network error — could not delete.')
    }
  }

  const requestDelete = (id: string) =>
    confirmDeleteId === id ? void deleteMap(id) : setConfirmDeleteId(id)

  // -------------------------------------------------------- navigation --

  const openChapter = (chapterId: string) => navigate({ name: 'chapter', chapterId })
  const openBookBySubject = (subjectId: string) => {
    const book = bookBySubjectId.get(subjectId)
    if (book) navigate({ name: 'book', bookId: book.id })
  }
  const openLesson = (sectionId: string) => navigate({ name: 'lesson', sectionId })

  /** open the curated, syllabus-scoped book for exam subject #subjectIndex */
  const openSubjectBook = (subjectIndex: number) => {
    if (!current) return
    navigate({ name: 'exam-book', examMapId: current.id, subjectIndex })
  }

  // ---------------------------------------------------- workspace data --

  const coveragePct = useMemo(() => {
    if (!current) return 0
    const { topicCount, mappedCount } = current.stats
    return topicCount > 0 ? Math.round((mappedCount / topicCount) * 100) : 0
  }, [current])

  /** mapped chapters across the whole exam, ordered for the target session:
   *  exam-subject weightage (desc, missing last), then chapter number */
  const sequence = useMemo(() => {
    if (!current) return []
    const pairs: { chapterId: string; weight: number }[] = []
    for (const s of current.subjects) {
      const w = typeof s.weightage === 'number' ? s.weightage : -1
      for (const u of s.units)
        for (const t of u.topics) if (t.chapterId) pairs.push({ chapterId: t.chapterId, weight: w })
    }
    const seen = new Set<string>()
    const uniq = pairs.filter((p) => {
      if (seen.has(p.chapterId)) return false
      seen.add(p.chapterId)
      return true
    })
    uniq.sort((a, b) => {
      if (b.weight !== a.weight) return b.weight - a.weight
      return (
        (chapterById.get(a.chapterId)?.number ?? 0) - (chapterById.get(b.chapterId)?.number ?? 0)
      )
    })
    return uniq
      .map((p) => {
        const chapter = chapterById.get(p.chapterId)
        const book = chapter ? LIBRARY_BOOKS.find((b) => b.id === chapter.bookId) : undefined
        const subject = book ? subjectById.get(book.subjectId) : undefined
        const sections = sectionsByChapterId.get(p.chapterId) ?? []
        const completed = sections.filter((sec) => progress[sec.id]?.status === 'completed').length
        return { chapter, subject, sections, completed }
      })
      .filter((e) => e.chapter)
  }, [current, progress])

  /** first section of the first chapter that still has unfinished sections */
  const nextUp = useMemo(() => {
    for (const entry of sequence) {
      if (entry.completed >= entry.sections.length) continue
      const next = entry.sections.find((sec) => progress[sec.id]?.status !== 'completed')
      if (next) return { entry, sectionId: next.id }
    }
    return null
  }, [sequence, progress])

  const mappedChapterIds = useMemo(() => sequence.map((e) => e.chapter!.id), [sequence])

  // attempts for this exam (label scheme: EXAM|<mapId>|<mapName>)
  const currentId = current?.id
  useEffect(() => {
    if (!currentId) return
    let cancelled = false
    fetch(`/api/exam?deviceId=${encodeURIComponent(ensureDevice())}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled && Array.isArray(d?.attempts)) setAttempts(d.attempts)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [currentId, ensureDevice, tab])

  const examAttempts = useMemo(() => {
    if (!current) return []
    const prefix = `EXAM|${current.id}|`
    return attempts.filter((a) => typeof a.label === 'string' && a.label.startsWith(prefix))
  }, [attempts, current])

  /** question pool per chapter — loaded lazily (runtime-fetched content asset) */
  useEffect(() => {
    if (tab !== 'tests' || !current || poolByChapter) return
    let cancelled = false
    import('@/data/content/client')
      .then(({ loadAllContent }) => loadAllContent())
      .then((allContent) => {
        if (cancelled) return
        const counts = new Map<string, number>()
        for (const c of allContent) {
          const n = c.quiz.filter(Boolean).length
          if (!n) continue
          const chId = c.sectionId.replace(/-s\d+$/, '')
          counts.set(chId, (counts.get(chId) ?? 0) + n)
        }
        setPoolByChapter(counts)
      })
      .catch(() => {
        /* offline-tolerant — presets stay disabled */
      })
    return () => {
      cancelled = true
    }
  }, [tab, current, poolByChapter])

  const poolTotal = useMemo(() => {
    if (!poolByChapter) return null
    return mappedChapterIds.reduce((a, id) => a + (poolByChapter.get(id) ?? 0), 0)
  }, [poolByChapter, mappedChapterIds])

  const startTest = (chapterIds: string[], questionCount?: number) => {
    if (!current || !chapterIds.length) return
    navigate({
      name: 'exam',
      chapterIds,
      label: `EXAM|${current.id}|${current.name}`,
      questionCount,
    })
  }

  /** per-exam-subject pool sizes for the subject test rows */
  const subjectTests = useMemo(() => {
    if (!current) return []
    return current.subjects
      .map((s) => {
        const ids = subjectChapterIds(s)
        const pool = poolByChapter
          ? ids.reduce((a, id) => a + (poolByChapter.get(id) ?? 0), 0)
          : null
        return { subject: s, ids, pool }
      })
      .filter((r) => r.ids.length > 0)
  }, [current, poolByChapter])

  // ---------------------------------------------------- syllabus search --

  const filteredSubjects = useMemo(() => {
    if (!current) return []
    const q = query.trim().toLowerCase()
    const withMeta = current.subjects.map((s, si) => ({
      subject: s,
      si,
      units: s.units.map((u, ui) => ({ unit: u, ui, topics: u.topics })),
    }))
    if (!q) return withMeta
    return withMeta
      .map((s) => {
        const sMatch = s.subject.name.toLowerCase().includes(q)
        const units = s.units
          .map((u) => {
            const uMatch = u.unit.name.toLowerCase().includes(q)
            const topics =
              sMatch || uMatch ? u.unit.topics : u.unit.topics.filter((t) => t.name.toLowerCase().includes(q))
            return { ...u, topics }
          })
          .filter((u) => u.topics.length > 0)
        return { ...s, units }
      })
      .filter((s) => s.units.length > 0)
  }, [current, query])

  const searching = query.trim().length > 0

  const focusSubject = (si: number) => {
    setOpenSubjects((prev) => {
      const next = new Set(prev)
      next.add(si)
      return next
    })
    requestAnimationFrame(() => {
      document.getElementById(`ecc-subject-${si}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  const maxWeightage = useMemo(() => {
    if (!current) return 0
    return current.subjects.reduce((m, s) => Math.max(m, s.weightage ?? 0), 0)
  }, [current])

  // ============================================================== render =

  // ---------------------------------------------------------- HOME ------
  if (mode === 'home') {
    return (
      <div>
        {/* hero */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10">
              <Target className="h-6 w-6 text-emerald-300" aria-hidden />
            </span>
            <div className="min-w-0">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Exam <span className="text-emerald-300">Command Center</span>
              </h1>
              <p className="mt-1 text-sm text-muted-foreground sm:text-[15px]">
                Type any exam — we deep-research its full syllabus till the last topic, map it onto
                your library, and build your target session.
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { icon: Radar, label: 'Deep web research' },
              { icon: Layers, label: 'Every subject, unit & topic' },
              { icon: ListChecks, label: 'Question types & weightage' },
              { icon: Target, label: 'Curated study sessions' },
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

        {/* research input */}
        <div className="max-w-2xl rounded-2xl border border-border/80 bg-card p-5 sm:p-6">
          <label htmlFor="ecc-name" className="mb-2 block text-sm font-semibold">
            Which exam are you preparing for?
          </label>
          <Input
            id="ecc-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && startResearch()}
            placeholder="Type any exam, test or course name"
            className="h-11 rounded-xl border-border/80 bg-background/60 text-[14px] placeholder:text-muted-foreground/60 focus-visible:ring-emerald-400/50"
            maxLength={200}
          />
          <label
            htmlFor="ecc-details"
            className="mb-2 mt-4 block text-sm font-semibold"
          >
            Any extra context?{' '}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <Input
            id="ecc-details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="e.g. level, year, region, paper or stage"
            className="h-11 rounded-xl border-border/80 bg-background/60 text-[14px] placeholder:text-muted-foreground/60 focus-visible:ring-emerald-400/50"
            maxLength={300}
          />
          <div className="mt-5 flex min-h-11 flex-wrap items-center gap-4">
            <button
              onClick={startResearch}
              className={`inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_rgba(52,211,153,0.35)] transition-all hover:bg-primary/90 ${FOCUS_RING}`}
            >
              <Radar className="h-4 w-4" aria-hidden />
              Deep-dive research
            </button>
            <span className="text-[11px] text-muted-foreground">
              Live web research → full syllabus tree → library mapping
            </span>
          </div>
        </div>

        {/* suggestion chips */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            Try a category
          </span>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => {
                setName(s)
                document.getElementById('ecc-name')?.focus()
              }}
              className={`inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border/70 bg-card/50 px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-colors hover:border-emerald-400/40 hover:text-foreground ${FOCUS_RING}`}
            >
              <Sparkles className="h-3 w-3 text-emerald-300" aria-hidden />
              {s}
            </button>
          ))}
        </div>

        {/* saved exams */}
        {loadingMaps ? (
          <div className="mt-10">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
              Your saved exams
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[0, 1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-[104px] rounded-2xl" />
              ))}
            </div>
          </div>
        ) : maps.length > 0 ? (
          <div className="mt-10">
            <div className="mb-3 flex items-center gap-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
                Your saved exams
              </h2>
              <span className="rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                {maps.length}
              </span>
              <button
                onClick={loadMaps}
                aria-label="Refresh saved exams"
                className={`ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-emerald-400/10 hover:text-emerald-300 ${FOCUS_RING}`}
              >
                <RefreshCw className="h-3.5 w-3.5" aria-hidden />
              </button>
            </div>
            <div className="flex snap-x gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible xl:grid-cols-4">
              {maps.map((m) => {
                const pct = m.topicCount > 0 ? Math.round((m.mappedCount / m.topicCount) * 100) : 0
                const deleting = confirmDeleteId === m.id
                return (
                  <div
                    key={m.id}
                    className={`group relative min-w-[240px] snap-start rounded-2xl border bg-card p-4 transition-colors lg:min-w-0 ${
                      deleting
                        ? 'border-rose-400/50'
                        : 'border-border/70 hover:border-emerald-400/40'
                    }`}
                  >
                    <button
                      onClick={() => openMap(m.id)}
                      disabled={loadingMapId === m.id}
                      className={`min-h-11 w-full rounded-lg text-left disabled:opacity-60 ${FOCUS_RING}`}
                      aria-label={`Open exam map ${m.name}`}
                    >
                      <span className="flex items-center gap-2">
                        {loadingMapId === m.id ? (
                          <Loader2 className="h-4 w-4 shrink-0 animate-spin text-emerald-300" aria-hidden />
                        ) : (
                          <BookOpen className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden />
                        )}
                        <span className="min-w-0 truncate text-[14px] font-bold">{m.name}</span>
                      </span>
                      <span className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground">
                        <span className="truncate">
                          {m.subjectCount} subject{m.subjectCount !== 1 ? 's' : ''} ·{' '}
                          {m.topicCount} topic{m.topicCount !== 1 ? 's' : ''}
                        </span>
                      </span>
                      <span className="mt-2.5 flex items-center gap-2">
                        <span
                          className={`rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold ${
                            pct >= 75
                              ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                              : pct >= 40
                                ? 'border-amber-400/30 bg-amber-400/10 text-amber-300'
                                : 'border-border bg-muted/50 text-muted-foreground'
                          }`}
                        >
                          {pct}% mapped
                        </span>
                        <span className="min-w-0 flex-1 truncate text-[10.5px] text-muted-foreground/70">
                          {formatDistanceToNow(new Date(m.updatedAt), { addSuffix: true })}
                        </span>
                      </span>
                    </button>
                    <button
                      onClick={() => requestDelete(m.id)}
                      aria-label={deleting ? `Confirm deleting ${m.name}` : `Delete exam ${m.name}`}
                      title={deleting ? 'Click again to confirm' : 'Delete exam'}
                      className={`absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${FOCUS_RING} ${
                        deleting
                          ? 'bg-rose-500/15 text-rose-400'
                          : 'text-muted-foreground/50 opacity-0 hover:bg-rose-500/10 hover:text-rose-400 focus-visible:opacity-100 group-hover:opacity-100'
                      }`}
                    >
                      {deleting ? (
                        <span className="text-[10px] font-bold">SURE?</span>
                      ) : (
                        <Trash2 className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-border/80 bg-card/30 p-6 sm:p-8">
            <div className="flex items-center gap-2.5">
              <TelescopeIcon />
              <h2 className="text-sm font-bold">What you&apos;ll get with every exam</h2>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Layers,
                  title: 'Syllabus Map',
                  text: 'The full tree — every subject, unit and last topic, with weightage and question types.',
                },
                {
                  icon: BookOpen,
                  title: 'Study Library',
                  text: 'Subjects arranged like your library, each topic linked to the matching lesson.',
                },
                {
                  icon: Target,
                  title: 'Target Session',
                  text: 'A curated, ordered study lab across every mapped chapter — continue where you left off.',
                },
                {
                  icon: FileText,
                  title: 'Test Papers',
                  text: 'Quick drills, half and full mocks scoped to this exam — with attempt history.',
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/60 bg-background/40 p-3.5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10">
                    <Icon className="h-4 w-4 text-emerald-300" aria-hidden />
                  </span>
                  <h3 className="mt-2.5 text-[13px] font-bold">{title}</h3>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // ---------------------------------------------------- RESEARCHING ----
  if (mode === 'researching') {
    return (
      <div className="mx-auto max-w-xl pt-4 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8"
        >
          <RadarPulse />
          <div className="mt-4 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
              <Radar className="h-3 w-3" aria-hidden />
              Deep-dive research in progress
            </span>
            <h2 className="mt-3 break-words text-xl font-bold tracking-tight sm:text-2xl">
              {activeName}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Reading the live web for the official pattern, every subject and the last topic —
              then matching it all onto your library. This can take a minute.
            </p>
          </div>
          <div className="mt-6 rounded-xl border border-border/60 bg-background/40 p-4">
            <LiveSteps steps={RESEARCH_STAGES} states={stepStates} note={stepNote} />
          </div>
          <div className="mt-5 flex justify-center">
            <button
              onClick={cancelResearch}
              className={`inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-card/70 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-rose-400/40 hover:text-rose-400 ${FOCUS_RING}`}
            >
              <X className="h-4 w-4" aria-hidden />
              Cancel research
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  // ------------------------------------------------------ WORKSPACE ----
  if (!current) {
    return (
      <div className="mx-auto max-w-xl pt-10 text-center">
        <Loader2 className="mx-auto h-6 w-6 animate-spin text-emerald-300" aria-hidden />
        <p className="mt-3 text-sm text-muted-foreground">Loading your exam map…</p>
      </div>
    )
  }

  const ov = current.overview
  const overviewChips: { icon: LucideIcon; label: string }[] = []
  if (ov.level) overviewChips.push({ icon: GraduationCap, label: ov.level })
  if (ov.conductor) overviewChips.push({ icon: Landmark, label: ov.conductor })
  if (ov.duration) overviewChips.push({ icon: Clock, label: ov.duration })
  if (ov.marking) overviewChips.push({ icon: TrendingUp, label: ov.marking })
  if (ov.negativeMarking) overviewChips.push({ icon: Minus, label: ov.negativeMarking })

  return (
    <div>
      {/* workspace header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <button
            onClick={() => {
              setMode('home')
              try {
                localStorage.removeItem(CURRENT_MAP_KEY)
              } catch {
                /* storage unavailable */
              }
            }}
            className={`mb-3 inline-flex min-h-9 items-center gap-1.5 rounded-lg text-[12.5px] font-semibold text-muted-foreground transition-colors hover:text-emerald-300 ${FOCUS_RING}`}
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            All exams
          </button>
          <div className="flex flex-wrap items-center gap-2.5">
            {renaming ? (
              <div className="flex min-w-0 flex-1 items-center gap-2">
                <Input
                  value={renameValue}
                  onChange={(e) => setRenameValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') commitRename()
                    if (e.key === 'Escape') setRenaming(false)
                  }}
                  autoFocus
                  maxLength={120}
                  className="h-10 max-w-md rounded-xl border-border/80 bg-background/60 text-[15px] font-bold focus-visible:ring-emerald-400/50"
                  aria-label="Rename this exam"
                />
                <button
                  onClick={commitRename}
                  disabled={savingName}
                  aria-label="Save name"
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 transition-colors hover:bg-emerald-400/20 disabled:opacity-60 ${FOCUS_RING}`}
                >
                  {savingName ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  ) : (
                    <Check className="h-4 w-4" aria-hidden />
                  )}
                </button>
                <button
                  onClick={() => setRenaming(false)}
                  aria-label="Cancel rename"
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground ${FOCUS_RING}`}
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>
            ) : (
              <>
                <h1 className="min-w-0 break-words text-2xl font-bold tracking-tight sm:text-3xl">
                  {current.name}
                </h1>
                <button
                  onClick={() => {
                    setRenameValue(current.name)
                    setRenaming(true)
                  }}
                  aria-label={`Rename ${current.name}`}
                  title="Rename this exam"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground/70 transition-colors hover:bg-emerald-400/10 hover:text-emerald-300 ${FOCUS_RING}`}
                >
                  <Pencil className="h-4 w-4" aria-hidden />
                </button>
                <button
                  onClick={() => requestDelete(current.id)}
                  aria-label={
                    confirmDeleteId === current.id
                      ? `Confirm deleting ${current.name}`
                      : `Delete ${current.name}`
                  }
                  title={confirmDeleteId === current.id ? 'Click again to confirm' : 'Delete exam'}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${FOCUS_RING} ${
                    confirmDeleteId === current.id
                      ? 'bg-rose-500/15 text-rose-400'
                      : 'text-muted-foreground/70 hover:bg-rose-500/10 hover:text-rose-400'
                  }`}
                >
                  {confirmDeleteId === current.id ? (
                    <span className="text-[10px] font-bold">SURE?</span>
                  ) : (
                    <Trash2 className="h-4 w-4" aria-hidden />
                  )}
                </button>
              </>
            )}
          </div>
          {overviewChips.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {overviewChips.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-border/70 bg-card/50 px-2.5 py-1 text-[11.5px] font-medium text-muted-foreground"
                >
                  <Icon className="h-3 w-3 shrink-0 text-emerald-300" aria-hidden />
                  <span className="truncate">{label}</span>
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-border/80 bg-card px-4 py-3">
          <CoverageRing pct={coveragePct} />
          <div className="flex flex-col gap-1.5 text-[11.5px] text-muted-foreground">
            <span className="font-mono">
              <span className="text-foreground/85">{current.stats.mappedCount}</span>/
              {current.stats.topicCount} topics mapped
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe className="h-3 w-3 text-emerald-300" aria-hidden />
              {current.sources.length} source{current.sources.length !== 1 ? 's' : ''}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Layers className="h-3 w-3 text-emerald-300" aria-hidden />
              {current.stats.subjectCount} subject{current.stats.subjectCount !== 1 ? 's' : ''} ·{' '}
              {current.stats.unitCount} unit{current.stats.unitCount !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* quick exam switcher */}
      {maps.length > 1 && (
        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
          <span className="shrink-0 text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            Switch
          </span>
          {maps.map((m) => {
            const active = m.id === current.id
            return (
              <button
                key={m.id}
                onClick={() => !active && openMap(m.id)}
                disabled={active || loadingMapId === m.id}
                aria-pressed={active}
                className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-colors ${FOCUS_RING} ${
                  active
                    ? 'border-emerald-400/40 bg-emerald-400/15 text-emerald-600 dark:text-emerald-300'
                    : 'border-border/70 bg-card/50 text-muted-foreground hover:border-emerald-400/30'
                }`}
              >
                {loadingMapId === m.id && (
                  <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
                )}
                <span className="max-w-44 truncate">{m.name}</span>
              </button>
            )
          })}
        </div>
      )}

      {/* overview panel */}
      <Collapsible defaultOpen className="mt-5">
        <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
          <CollapsibleTrigger
            className={`flex w-full items-center gap-2.5 rounded-lg text-left ${FOCUS_RING}`}
            aria-label="Toggle exam overview"
          >
            <Sparkles className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden />
            <span className="text-sm font-bold">
              Exam overview
              {ov.fullName && ov.fullName !== current.name ? (
                <span className="ml-2 font-normal text-muted-foreground">{ov.fullName}</span>
              ) : null}
            </span>
            <ChevronDown
              className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ov.papers && ov.papers.length > 0 && (
                <OverviewCard icon={FileText} title="Papers">
                  <div className="flex flex-wrap gap-1.5">
                    {ov.papers.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-border/70 bg-muted/40 px-2 py-0.5 text-[11px] font-medium"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </OverviewCard>
              )}
              {ov.questionTypes && ov.questionTypes.length > 0 && (
                <OverviewCard icon={ListChecks} title="Question types">
                  <div className="flex flex-wrap gap-1.5">
                    {ov.questionTypes.map((q) => (
                      <QTypeChip key={q} label={q} />
                    ))}
                  </div>
                </OverviewCard>
              )}
              {ov.stages && ov.stages.length > 0 && (
                <OverviewCard icon={Route} title="Stages">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {ov.stages.map((st, i) => (
                      <span key={st} className="inline-flex items-center gap-1.5">
                        {i > 0 && (
                          <ChevronRight
                            className="h-3 w-3 text-muted-foreground/50"
                            aria-hidden
                          />
                        )}
                        <span className="rounded-full border border-border/70 bg-muted/40 px-2 py-0.5 text-[11px] font-medium">
                          {st}
                        </span>
                      </span>
                    ))}
                  </div>
                </OverviewCard>
              )}
              {(ov.marking || ov.negativeMarking) && (
                <OverviewCard icon={TrendingUp} title="Marking">
                  <div className="flex flex-col gap-1">
                    {ov.marking && (
                      <span className="text-[11.5px] text-muted-foreground">{ov.marking}</span>
                    )}
                    {ov.negativeMarking && (
                      <span className="inline-flex items-center gap-1.5 text-[11.5px] text-rose-400/90">
                        <Minus className="h-3 w-3" aria-hidden />
                        {ov.negativeMarking}
                      </span>
                    )}
                  </div>
                </OverviewCard>
              )}
              {ov.notes && (
                <OverviewCard icon={FileText} title="Notes">
                  <p className="max-h-24 overflow-y-auto text-[11.5px] leading-relaxed text-muted-foreground">
                    {ov.notes}
                  </p>
                </OverviewCard>
              )}
              {ov.website && (
                <OverviewCard icon={Globe} title="Official site">
                  <a
                    href={ov.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex min-w-0 items-center gap-1.5 rounded-lg border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1.5 text-[12px] font-semibold text-emerald-600 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/15 dark:text-emerald-300 ${FOCUS_RING}`}
                  >
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    <span className="truncate">
                      {ov.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                    </span>
                  </a>
                </OverviewCard>
              )}
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>

      {/* workspace tabs */}
      <Tabs value={tab} onValueChange={(v) => setTab(v as WorkspaceTab)} className="mt-6">
        <TabsList className="h-auto w-full gap-1 rounded-xl border border-border/70 bg-card/60 p-1 sm:w-auto">
          <TabsTrigger
            value="map"
            className="min-h-10 gap-2 rounded-lg px-4 text-[13px] data-[state=active]:bg-emerald-400/15 data-[state=active]:text-emerald-200"
          >
            <Layers className="h-3.5 w-3.5" aria-hidden />
            Syllabus Map
          </TabsTrigger>
          <TabsTrigger
            value="library"
            className="min-h-10 gap-2 rounded-lg px-4 text-[13px] data-[state=active]:bg-emerald-400/15 data-[state=active]:text-emerald-200"
          >
            <BookOpen className="h-3.5 w-3.5" aria-hidden />
            Study Library
          </TabsTrigger>
          <TabsTrigger
            value="session"
            className="min-h-10 gap-2 rounded-lg px-4 text-[13px] data-[state=active]:bg-emerald-400/15 data-[state=active]:text-emerald-200"
          >
            <Target className="h-3.5 w-3.5" aria-hidden />
            Target Session
          </TabsTrigger>
          <TabsTrigger
            value="tests"
            className="min-h-10 gap-2 rounded-lg px-4 text-[13px] data-[state=active]:bg-emerald-400/15 data-[state=active]:text-emerald-200"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden />
            Test Papers
          </TabsTrigger>
        </TabsList>

        {/* ============================ TAB 1 · SYLLABUS MAP ============================ */}
        <TabsContent value="map" className="mt-4">
          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[230px_1fr]">
            {/* subject rail (desktop) */}
            <aside className="hidden lg:block" aria-label="Exam subjects">
              <div className="sticky top-24 rounded-2xl border border-border/80 bg-card p-3">
                <div className="mb-2 flex items-center gap-2 px-1">
                  <Layers className="h-3.5 w-3.5 text-emerald-300" aria-hidden />
                  <span className="text-[12px] font-bold">Subjects</span>
                  <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                    {current.subjects.length}
                  </span>
                </div>
                <ul className="flex max-h-[68vh] flex-col gap-1 overflow-y-auto pr-1">
                  {current.subjects.map((s, i) => {
                    const w = s.weightage ?? 0
                    const pctOfMax = maxWeightage > 0 ? (w / maxWeightage) * 100 : 0
                    return (
                      <li key={`${s.name}-${i}`}>
                        <button
                          onClick={() => focusSubject(i)}
                          className={`w-full rounded-xl px-2.5 py-2 text-left transition-colors hover:bg-emerald-400/[0.07] ${FOCUS_RING}`}
                          aria-label={`Jump to ${s.name}`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="min-w-0 flex-1 truncate text-[12.5px] font-semibold text-foreground/85">
                              {s.name}
                            </span>
                            {w > 0 && (
                              <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                                ~{Math.round(w)}%
                              </span>
                            )}
                          </span>
                          {w > 0 && (
                            <span className="mt-1.5 block h-1 overflow-hidden rounded-full bg-muted">
                              <span
                                className="block h-full rounded-full bg-emerald-400/70"
                                style={{ width: `${Math.max(4, pctOfMax)}%` }}
                              />
                            </span>
                          )}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </aside>

            {/* main tree */}
            <div className="min-w-0">
              {/* search */}
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60"
                  aria-hidden
                />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search subjects, units or topics…"
                  aria-label="Search the syllabus"
                  className="h-11 rounded-xl border-border/80 bg-card pl-10 text-[13.5px] placeholder:text-muted-foreground/60 focus-visible:ring-emerald-400/50"
                />
                {searching && (
                  <button
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                    className={`absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground ${FOCUS_RING}`}
                  >
                    <X className="h-3.5 w-3.5" aria-hidden />
                  </button>
                )}
              </div>

              {/* mobile subject chips */}
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
                {current.subjects.map((s, i) => (
                  <button
                    key={`${s.name}-chip-${i}`}
                    onClick={() => focusSubject(i)}
                    className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full border border-border/70 bg-card/50 px-3 py-1.5 text-[12px] font-semibold text-muted-foreground transition-colors hover:border-emerald-400/30 ${FOCUS_RING}`}
                  >
                    <span className="max-w-36 truncate">{s.name}</span>
                    {s.weightage != null && s.weightage > 0 && (
                      <span className="font-mono text-[10px] opacity-70">~{Math.round(s.weightage)}%</span>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-3.5">
                {filteredSubjects.length === 0 ? (
                  <div className="rounded-2xl border border-border/80 bg-card p-6 text-center">
                    <Search className="mx-auto h-5 w-5 text-muted-foreground/50" aria-hidden />
                    <p className="mt-2 text-sm font-semibold">No matches</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nothing in this syllabus matches “{query.trim()}”.
                    </p>
                  </div>
                ) : (
                  filteredSubjects.map(({ subject: s, si, units }) => {
                    const topics = subjectTopicCount(s)
                    const mapped = subjectMappedCount(s)
                    const mapPct = topics > 0 ? Math.round((mapped / topics) * 100) : 0
                    const lib = s.mappedSubjectId ? subjectById.get(s.mappedSubjectId) : undefined
                    const expanded = searching || openSubjects.has(si)
                    return (
                      <section
                        key={`ecc-subject-${si}`}
                        id={`ecc-subject-${si}`}
                        aria-labelledby={`ecc-subject-h-${si}`}
                        className="scroll-mt-24 rounded-2xl border border-border/80 bg-card"
                      >
                        <Collapsible
                          open={expanded}
                          onOpenChange={(o) =>
                            setOpenSubjects((prev) => {
                              const next = new Set(prev)
                              if (o) next.add(si)
                              else next.delete(si)
                              return next
                            })
                          }
                        >
                          {/* header row: the collapsible trigger must stay a lone
                              button (no nested <button>) — the Subject book
                              affordance sits beside it, outside the trigger */}
                          <div className="flex items-center gap-2 rounded-t-2xl pr-3 sm:pr-4">
                            <CollapsibleTrigger
                              className={`group flex min-w-0 flex-1 items-center gap-2.5 rounded-t-2xl p-4 text-left transition-colors hover:bg-emerald-400/[0.04] ${FOCUS_RING}`}
                              aria-label={`${expanded ? 'Collapse' : 'Expand'} ${s.name}`}
                            >
                              <ChevronDown
                                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-data-[state=closed]:-rotate-90"
                                aria-hidden
                              />
                              <span
                                className="h-2.5 w-2.5 shrink-0 rounded-full"
                                style={{ background: lib?.accent ?? '#34d399' }}
                                aria-hidden
                              />
                              <h3
                                id={`ecc-subject-h-${si}`}
                                className="min-w-0 truncate text-[14.5px] font-bold"
                              >
                                {s.name}
                              </h3>
                              {s.weightage != null && s.weightage > 0 && (
                                <span className="shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                                  ~{Math.round(s.weightage)}%
                                </span>
                              )}
                              <span className="ml-auto hidden shrink-0 text-[11px] text-muted-foreground sm:block">
                                {topics} topic{topics !== 1 ? 's' : ''}
                              </span>
                              <span className="flex shrink-0 items-center gap-1.5">
                                <span className="h-1.5 w-14 overflow-hidden rounded-full bg-muted">
                                  <span
                                    className={`block h-full rounded-full ${
                                      mapPct >= 75
                                        ? 'bg-emerald-400'
                                        : mapPct >= 40
                                          ? 'bg-amber-300'
                                          : 'bg-muted-foreground/40'
                                    }`}
                                    style={{ width: `${mapPct}%` }}
                                  />
                                </span>
                                <span className="font-mono text-[10px] text-muted-foreground">
                                  {mapped}/{topics}
                                </span>
                              </span>
                            </CollapsibleTrigger>
                            {lib && (
                              <button
                                onClick={() => openSubjectBook(si)}
                                title={`Open the ${s.name} syllabus book — only the chapters, topics and lessons this exam needs`}
                                className={`hidden min-h-9 shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-[10.5px] font-semibold transition-colors hover:bg-emerald-400/10 sm:inline-flex ${FOCUS_RING}`}
                                style={{
                                  borderColor: (lib.accent ?? '#34d399') + '55',
                                  color: lib.accent ?? '#34d399',
                                  background: (lib.accent ?? '#34d399') + '12',
                                }}
                              >
                                <BookMarked className="h-3 w-3" aria-hidden />
                                <span className="max-w-32 truncate">Subject book</span>
                              </button>
                            )}
                          </div>
                          <CollapsibleContent>
                            <div className="flex flex-col gap-3 border-t border-border/60 p-3.5 sm:p-4">
                              {units.map(({ unit: u, topics: unitTopics }) => (
                                <Collapsible key={`${si}-${u.name}`} defaultOpen>
                                  <div className="rounded-xl border border-border/50 bg-background/30">
                                    <CollapsibleTrigger
                                      className={`group flex w-full items-center gap-2 rounded-xl px-3.5 py-2.5 text-left transition-colors hover:bg-emerald-400/[0.04] ${FOCUS_RING}`}
                                      aria-label={`Toggle unit ${u.name}`}
                                    >
                                      <ChevronDown
                                        className="h-3.5 w-3.5 shrink-0 text-muted-foreground/70 transition-transform group-data-[state=closed]:-rotate-90"
                                        aria-hidden
                                      />
                                      <span className="min-w-0 truncate text-[12.5px] font-bold text-foreground/80">
                                        {u.name}
                                      </span>
                                      <span className="ml-auto shrink-0 font-mono text-[10px] text-muted-foreground">
                                        {unitTopics.length}
                                      </span>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                      <ul className="flex flex-col gap-1.5 px-2.5 pb-2.5 sm:px-3">
                                        {unitTopics.map((t) => (
                                          <TopicRow
                                            key={`${si}-${u.name}-${t.name}`}
                                            topic={t}
                                            onOpenChapter={openChapter}
                                          />
                                        ))}
                                      </ul>
                                    </CollapsibleContent>
                                  </div>
                                </Collapsible>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </section>
                    )
                  })
                )}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* ============================ TAB 2 · STUDY LIBRARY ============================ */}
        <TabsContent value="library" className="mt-4">
          {/* intro strip */}
          <div className="mb-4 flex items-start gap-3 rounded-2xl border border-emerald-400/25 bg-gradient-to-r from-emerald-400/[0.08] via-card to-card p-4 sm:p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10">
              <Library className="h-5 w-5 text-emerald-300" aria-hidden />
            </span>
            <div className="min-w-0">
              <h3 className="text-[14px] font-bold tracking-tight">
                Your exam study library
              </h3>
              <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">
                One curated book per subject — only the syllabus chapters, subtopics and lessons
                your exam needs, pulled from the main library. Click a subject to open its book.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {current.subjects.map((s, i) => {
              const lib = s.mappedSubjectId ? subjectById.get(s.mappedSubjectId) : undefined
              const accent = lib?.accent ?? '#34d399'
              const FallbackIcon = FALLBACK_ICONS[i % FALLBACK_ICONS.length]
              const topics = subjectTopicCount(s)
              const mapped = subjectMappedCount(s)
              const chapterIds = subjectChapterIds(s)
              const book = lib ? bookBySubjectId.get(lib.id) : undefined
              const libSections = chapterIds.flatMap((cid) => sectionsByChapterId.get(cid) ?? [])
              const doneSections = libSections.filter(
                (sec) => progress[sec.id]?.status === 'completed'
              ).length
              const readPct =
                libSections.length > 0
                  ? Math.round((doneSections / libSections.length) * 100)
                  : 0
              return (
                <article
                  key={`${s.name}-lib-${i}`}
                  className="sv-card-glow group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card p-5"
                >
                  <div
                    className="absolute -right-14 -top-14 h-40 w-40 rounded-full opacity-15 blur-2xl transition-opacity group-hover:opacity-30"
                    style={{ background: accent }}
                    aria-hidden
                  />
                  <div className="relative flex min-w-0 flex-1 flex-col">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                        style={{ borderColor: accent + '55', background: accent + '18' }}
                      >
                        <span style={{ color: accent }}>
                          {lib ? (
                            <ChapterIcon icon={lib.icon} className="h-5 w-5" />
                          ) : (
                            <FallbackIcon className="h-5 w-5" aria-hidden />
                          )}
                        </span>
                      </div>
                      <span
                        className="shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold"
                        style={{
                          color: accent,
                          background: accent + '14',
                          border: `1px solid ${accent}33`,
                        }}
                      >
                        {mapped}/{topics} mapped
                      </span>
                    </div>
                    <h3 className="min-w-0 break-words text-[16px] font-bold leading-snug">
                      {s.name}
                    </h3>
                    {lib ? (
                      <span
                        className="mt-1 inline-flex min-w-0 items-center gap-1.5 text-[11px] font-semibold"
                        style={{ color: accent }}
                      >
                        <BookOpen className="h-3 w-3 shrink-0" aria-hidden />
                        <span className="truncate">in your library: {lib.name}</span>
                      </span>
                    ) : (
                      <span className="mt-1 text-[11px] text-muted-foreground">
                        no library subject linked
                      </span>
                    )}
                    <p className="mt-2 text-[11.5px] text-muted-foreground">
                      {s.units.length} unit{s.units.length !== 1 ? 's' : ''} · {topics} topic
                      {topics !== 1 ? 's' : ''} · {chapterIds.length} chapter
                      {chapterIds.length !== 1 ? 's' : ''} matched
                    </p>

                    {libSections.length > 0 && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Reading progress
                          </span>
                          <span className="font-mono text-[10px] text-muted-foreground">
                            {doneSections}/{libSections.length} lessons
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                          <span
                            className={`block h-full rounded-full transition-[width] duration-500 ${
                              readPct >= 75
                                ? 'bg-emerald-400'
                                : readPct >= 40
                                  ? 'bg-amber-300'
                                  : 'bg-muted-foreground/40'
                            }`}
                            style={{ width: `${Math.max(readPct, 3)}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {chapterIds.length > 0 ? (
                      <>
                        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                          {chapterIds.slice(0, 6).map((cid) => {
                            const ch = chapterById.get(cid)
                            return (
                              <button
                                key={cid}
                                onClick={() => openChapter(cid)}
                                title={ch?.title ?? cid}
                                className={`inline-flex min-h-8 max-w-full items-center gap-1 rounded-md border border-border/80 bg-background/80 px-2 py-1 text-[10.5px] font-medium transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-emerald-300 ${FOCUS_RING}`}
                              >
                                <BookOpen className="h-3 w-3 shrink-0 text-emerald-400" aria-hidden />
                                <span className="min-w-0 truncate">
                                  {ch ? `Ch ${ch.number} · ${ch.shortTitle}` : cid}
                                </span>
                              </button>
                            )
                          })}
                          {chapterIds.length > 6 && (
                            <span className="inline-flex items-center rounded-md border border-dashed border-border/70 px-2 py-1 text-[10.5px] text-muted-foreground">
                              +{chapterIds.length - 6} more
                            </span>
                          )}
                        </div>
                        <div className="mt-auto flex flex-col gap-2 pt-4">
                          <button
                            onClick={() => openSubjectBook(i)}
                            className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-[13px] font-semibold transition-colors ${FOCUS_RING}`}
                            style={{
                              borderColor: accent + '44',
                              background: accent + '14',
                              color: accent,
                            }}
                          >
                            <BookMarked className="h-4 w-4" aria-hidden />
                            Open subject book
                            <ChevronRight className="h-4 w-4" aria-hidden />
                          </button>
                          {book && (
                            <button
                              onClick={() => openBookBySubject(book.subjectId)}
                              title={`Browse the full ${lib?.name ?? 'library'} book — every chapter, beyond the syllabus`}
                              className={`inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-xl px-3 py-1.5 text-[11.5px] font-semibold text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground ${FOCUS_RING}`}
                            >
                              <BookOpen className="h-3.5 w-3.5" aria-hidden />
                              Full library book
                              <ArrowUpRight className="h-3 w-3" aria-hidden />
                            </button>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="mt-auto pt-4">
                        <div className="rounded-xl border border-dashed border-border/70 bg-background/30 p-3 text-center">
                          <Search className="mx-auto h-4 w-4 text-muted-foreground/50" aria-hidden />
                          <p className="mt-1.5 text-[11.5px] leading-relaxed text-muted-foreground">
                            No library match yet — topics remain in the syllabus map.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </TabsContent>

        {/* ============================ TAB 3 · TARGET SESSION ============================ */}
        <TabsContent value="session" className="mt-4">
          {sequence.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border/80 bg-card/40 p-8 text-center">
              <Target className="mx-auto h-6 w-6 text-muted-foreground/50" aria-hidden />
              <p className="mt-3 text-sm font-semibold">No mapped chapters yet</p>
              <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
                Once this exam&apos;s topics match library chapters, your ordered target session
                appears here — one continuous study lab.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {/* session summary */}
              <div className="rounded-2xl border border-emerald-400/25 bg-gradient-to-r from-emerald-400/[0.08] via-card to-card p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="flex items-center gap-2 text-base font-bold tracking-tight">
                      <Target className="h-4 w-4 text-emerald-300" aria-hidden />
                      Your curated study lab
                    </h3>
                    <p className="mt-1 text-[12.5px] text-muted-foreground">
                      {sequence.length} chapter{sequence.length !== 1 ? 's' : ''} ordered by exam
                      weightage · {nextUp
                        ? `next up “${nextUp.entry.chapter?.shortTitle ?? nextUp.entry.chapter?.title ?? ''}”`
                        : 'everything complete — review mode'}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      nextUp
                        ? openLesson(nextUp.sectionId)
                        : sequence[0] && openChapter(sequence[0].chapter!.id)
                    }
                    className={`inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_rgba(52,211,153,0.35)] transition-all hover:bg-primary/90 ${FOCUS_RING}`}
                  >
                    <Play className="h-4 w-4" aria-hidden />
                    {nextUp ? "Start today's session" : 'Review from the start'}
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { label: 'Chapters', value: sequence.length },
                    {
                      label: 'Sections',
                      value: sequence.reduce((a, e) => a + e.sections.length, 0),
                    },
                    {
                      label: 'Completed',
                      value: sequence.reduce((a, e) => a + e.completed, 0),
                    },
                    {
                      label: 'Overall',
                      value: `${
                        sequence.reduce((a, e) => a + e.sections.length, 0) > 0
                          ? Math.round(
                              (sequence.reduce((a, e) => a + e.completed, 0) /
                                sequence.reduce((a, e) => a + e.sections.length, 0)) *
                                100
                            )
                          : 0
                      }%`,
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-border/60 bg-background/40 px-3 py-2.5"
                    >
                      <div className="font-mono text-lg font-bold text-foreground/90">{s.value}</div>
                      <div className="text-[10.5px] uppercase tracking-wider text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Progress
                    value={
                      sequence.reduce((a, e) => a + e.sections.length, 0) > 0
                        ? Math.round(
                            (sequence.reduce((a, e) => a + e.completed, 0) /
                              sequence.reduce((a, e) => a + e.sections.length, 0)) *
                              100
                          )
                        : 0
                    }
                    aria-label="Session completion"
                  />
                </div>
              </div>

              {/* ordered sequence */}
              <ol className="flex flex-col gap-2.5">
                {sequence.map((entry, idx) => {
                  const ch = entry.chapter!
                  const total = entry.sections.length
                  const pct = total > 0 ? Math.round((entry.completed / total) * 100) : 0
                  const allDone = total > 0 && entry.completed >= total
                  const next =
                    entry.sections.find((sec) => progress[sec.id]?.status !== 'completed') ?? null
                  return (
                    <li
                      key={ch.id}
                      className="rounded-xl border border-border/70 bg-card p-3.5 transition-colors hover:border-emerald-400/30"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="flex min-w-0 flex-1 items-center gap-3">
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border font-mono text-[12px] font-bold ${
                              allDone
                                ? 'border-emerald-400/40 bg-emerald-400/15 text-emerald-300'
                                : 'border-border bg-muted/40 text-muted-foreground'
                            }`}
                            aria-label={`Chapter ${idx + 1} in the sequence`}
                          >
                            {allDone ? <Check className="h-4 w-4" aria-hidden /> : idx + 1}
                          </span>
                          <div className="min-w-0">
                            <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-0.5">
                              <span className="min-w-0 truncate text-[13.5px] font-bold">
                                {ch.shortTitle || ch.title}
                              </span>
                              {entry.subject && (
                                <span className="inline-flex shrink-0 items-center gap-1 text-[10.5px] font-semibold text-muted-foreground">
                                  <span
                                    className="h-1.5 w-1.5 rounded-full"
                                    style={{ background: entry.subject.accent }}
                                    aria-hidden
                                  />
                                  <span className="max-w-36 truncate">{entry.subject.name}</span>
                                </span>
                              )}
                            </div>
                            <div className="mt-1 flex flex-wrap items-center gap-2">
                              <span className="font-mono text-[10.5px] text-muted-foreground">
                                {total} section{total !== 1 ? 's' : ''} · {entry.completed}/{total}{' '}
                                done
                              </span>
                              <span className="h-1 w-16 overflow-hidden rounded-full bg-muted">
                                <span
                                  className={`block h-full rounded-full ${
                                    pct >= 100
                                      ? 'bg-emerald-400'
                                      : pct > 0
                                        ? 'bg-amber-300'
                                        : 'bg-muted-foreground/30'
                                  }`}
                                  style={{ width: `${pct}%` }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            next ? openLesson(next.id) : openChapter(ch.id)
                          }
                          className={`inline-flex min-h-11 shrink-0 items-center justify-center gap-1.5 rounded-xl border px-4 py-2 text-[12.5px] font-semibold transition-colors sm:self-auto ${FOCUS_RING} ${
                            allDone
                              ? 'border-border bg-card/60 text-muted-foreground hover:border-emerald-400/40 hover:text-emerald-300'
                              : 'border-emerald-400/30 bg-emerald-400/10 text-emerald-600 hover:border-emerald-400/50 hover:bg-emerald-400/15 dark:text-emerald-300'
                          }`}
                        >
                          {allDone ? (
                            <>
                              <RefreshCw className="h-3.5 w-3.5" aria-hidden />
                              Review
                            </>
                          ) : (
                            <>
                              <Play className="h-3.5 w-3.5" aria-hidden />
                              Continue
                            </>
                          )}
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          )}
        </TabsContent>

        {/* ============================ TAB 4 · TEST PAPERS ============================ */}
        <TabsContent value="tests" className="mt-4">
          <div className="flex flex-col gap-5">
            {/* generate panel */}
            <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="flex items-center gap-2 text-base font-bold tracking-tight">
                    <FileText className="h-4 w-4 text-emerald-300" aria-hidden />
                    Generate a test paper
                  </h3>
                  <p className="mt-1 text-[12.5px] text-muted-foreground">
                    Scoped to this exam&apos;s mapped chapters — timed like the real thing.
                  </p>
                </div>
                <span className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                  {poolByChapter === null ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
                      counting pool…
                    </span>
                  ) : (
                    `${poolTotal ?? 0} Q pool · ${mappedChapterIds.length} chapter${
                      mappedChapterIds.length !== 1 ? 's' : ''
                    }`
                  )}
                </span>
              </div>

              {/* presets */}
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {[
                  { label: 'Quick drill', count: 10, icon: Zap },
                  { label: 'Half mock', count: 25, icon: Timer },
                  { label: 'Full mock', count: 50, icon: Clock },
                ].map(({ label, count, icon: Icon }) => {
                  const effective =
                    poolTotal != null ? Math.min(count, poolTotal) : null
                  const disabled = effective == null || effective < 1
                  return (
                    <button
                      key={label}
                      onClick={() => !disabled && startTest(mappedChapterIds, effective ?? count)}
                      disabled={disabled}
                      className={`group flex min-h-11 items-center justify-between gap-3 rounded-xl border p-3.5 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
                        disabled
                          ? 'border-border/60 bg-muted/20'
                          : 'border-border/70 bg-muted/20 hover:border-emerald-400/40 hover:bg-emerald-400/[0.06]'
                      } ${FOCUS_RING}`}
                      aria-label={`Start ${label} — ${effective ?? count} questions`}
                    >
                      <span className="flex min-w-0 items-center gap-2.5">
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                            disabled
                              ? 'border-border/60 bg-muted/30 text-muted-foreground/50'
                              : 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                          }`}
                        >
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <span>
                          <span className="block text-[13px] font-bold">{label}</span>
                          <span className="block font-mono text-[10.5px] text-muted-foreground">
                            {effective == null ? '…' : `${effective} Q · timed`}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight
                        className={`h-4 w-4 shrink-0 text-muted-foreground/50 transition-colors ${
                          disabled ? '' : 'group-hover:text-emerald-300'
                        }`}
                        aria-hidden
                      />
                    </button>
                  )
                })}
              </div>

              {/* per-subsubject rows */}
              {subjectTests.length > 0 && (
                <div className="mt-4 border-t border-border/60 pt-4">
                  <h4 className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Subject tests · 15 questions each
                  </h4>
                  <div className="flex max-h-64 flex-col gap-2 overflow-y-auto pr-1">
                    {subjectTests.map(({ subject: s, ids, pool }) => {
                      const effective = pool != null ? Math.min(15, pool) : null
                      const disabled = effective == null || effective < 1
                      const lib = s.mappedSubjectId ? subjectById.get(s.mappedSubjectId) : undefined
                      const accent = lib?.accent ?? '#34d399'
                      return (
                        <div
                          key={`${s.name}-test`}
                          className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/40 p-2.5"
                        >
                          <span
                            className="h-2 w-2 shrink-0 rounded-full"
                            style={{ background: accent }}
                            aria-hidden
                          />
                          <span className="min-w-0 flex-1 truncate text-[12.5px] font-semibold text-foreground/85">
                            {s.name}
                          </span>
                          <span className="shrink-0 font-mono text-[10.5px] text-muted-foreground">
                            {pool == null ? '…' : `${pool} Q pool`}
                          </span>
                          <button
                            onClick={() => !disabled && startTest(ids, effective ?? 15)}
                            disabled={disabled}
                            className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-lg border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-[11.5px] font-semibold text-emerald-600 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/15 disabled:cursor-not-allowed disabled:opacity-50 dark:text-emerald-300 ${FOCUS_RING}`}
                            aria-label={`Start a subject test for ${s.name}`}
                          >
                            <Play className="h-3 w-3" aria-hidden />
                            Subject test ({effective ?? 15} Q)
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* recent attempts */}
            <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6">
              <div className="mb-1 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-300" aria-hidden />
                <h3 className="text-base font-bold tracking-tight">Recent attempts</h3>
                <span className="ml-auto rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {examAttempts.length}
                </span>
              </div>
              <p className="mb-4 text-[12px] text-muted-foreground">
                Every test you sit for this exam lands here.
              </p>
              {examAttempts.length === 0 ? (
                <div className="rounded-xl border border-dashed border-border/70 bg-background/30 p-5 text-center">
                  <FileText className="mx-auto h-5 w-5 text-muted-foreground/50" aria-hidden />
                  <p className="mt-2 text-[13px] font-semibold">No attempts yet</p>
                  <p className="mt-1 text-[12px] text-muted-foreground">
                    Sit your first quick drill above — score, timing and accuracy history build up
                    here.
                  </p>
                </div>
              ) : (
                <ul className="flex max-h-80 flex-col gap-2 overflow-y-auto pr-1">
                  {examAttempts.map((a, i) => {
                    const pct = a.total > 0 ? Math.round((a.score / a.total) * 100) : 0
                    const mins = Math.floor(a.durationSec / 60)
                    const secs = a.durationSec % 60
                    return (
                      <li
                        key={`${a.createdAt}-${i}`}
                        className="flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-xl border border-border/60 bg-background/40 px-3.5 py-2.5"
                      >
                        <span className="inline-flex min-w-0 items-center gap-2">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-card font-mono text-[10px] font-bold">
                            {a.total}
                          </span>
                          <span className="min-w-0 truncate text-[12.5px] font-semibold">
                            {current.name} · {a.total} Q
                          </span>
                        </span>
                        <span className="ml-auto flex shrink-0 items-center gap-2.5">
                          <span className="font-mono text-[11.5px] text-muted-foreground">
                            {mins}:{String(secs).padStart(2, '0')}
                          </span>
                          <span className="font-mono text-[11.5px] text-foreground/80">
                            {a.score}/{a.total}
                          </span>
                          <span
                            className={`rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold ${
                              pct >= 75
                                ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                                : pct >= 40
                                  ? 'border-amber-400/30 bg-amber-400/10 text-amber-300'
                                  : 'border-rose-400/30 bg-rose-400/10 text-rose-400'
                            }`}
                          >
                            {pct}%
                          </span>
                          <span className="hidden text-[10.5px] text-muted-foreground/70 sm:inline">
                            {formatDistanceToNow(new Date(a.createdAt), { addSuffix: true })}
                          </span>
                        </span>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* sources */}
      {current.sources.length > 0 && (
        <div className="mt-6">
          <SourcesPanel sources={current.sources} />
        </div>
      )}
    </div>
  )
}

// ------------------------------------------------------------- pieces --

function TelescopeIcon() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10">
      <Radar className="h-4 w-4 text-emerald-300" aria-hidden />
    </span>
  )
}

/** one small overview card for the workspace panel */
function OverviewCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-background/40 p-3.5">
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 shrink-0 text-emerald-300" aria-hidden />
        <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
          {title}
        </h4>
      </div>
      {children}
    </div>
  )
}

/** one topic row inside a unit */
function TopicRow({
  topic: t,
  onOpenChapter,
}: {
  topic: ExamTopic
  onOpenChapter: (chapterId: string) => void
}) {
  return (
    <li className="flex flex-col gap-2 rounded-lg border border-border/50 bg-background/40 px-3 py-2 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0">
        <div className="flex min-w-0 items-center gap-2">
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
              t.chapterId ? 'bg-emerald-400' : 'bg-muted-foreground/40'
            }`}
            title={t.chapterId ? 'Mapped to a library chapter' : 'Not mapped to the library yet'}
            aria-hidden
          />
          <span className="min-w-0 break-words text-[12.5px] leading-snug text-foreground/85">
            {t.name}
          </span>
          {typeof t.weightage === 'number' && t.weightage > 0 && (
            <span
              className="inline-flex shrink-0 items-center gap-1 font-mono text-[9.5px] text-muted-foreground"
              title={`Topic weightage ~${Math.round(t.weightage)}%`}
            >
              <span className="h-1 w-6 overflow-hidden rounded-full bg-muted">
                <span
                  className="block h-full rounded-full bg-amber-300/80"
                  style={{ width: `${Math.min(100, Math.max(8, t.weightage))}%` }}
                />
              </span>
              {Math.round(t.weightage)}%
            </span>
          )}
        </div>
        {t.questionTypes && t.questionTypes.length > 0 && (
          <div className="mt-1.5 flex flex-wrap gap-1.5 pl-3.5">
            {t.questionTypes.slice(0, 4).map((q) => (
              <QTypeChip key={q} label={q} />
            ))}
            {t.questionTypes.length > 4 && (
              <span className="text-[9.5px] text-muted-foreground">
                +{t.questionTypes.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
      {t.chapterId ? (
        <div className="flex shrink-0 items-center gap-1.5 sm:self-center">
          <span
            className="hidden h-7 w-7 items-center justify-center rounded-lg border border-border/60 bg-card text-muted-foreground/70 sm:flex"
            title={t.chapterTitle ?? 'Mapped library chapter'}
            aria-label={`Mapped to ${t.chapterTitle ?? 'a library chapter'}`}
          >
            <BookOpen className="h-3.5 w-3.5" aria-hidden />
          </span>
          <button
            onClick={() => onOpenChapter(t.chapterId!)}
            title={`Open lesson — ${t.chapterTitle ?? 'library chapter'}`}
            className={`group inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1.5 text-[12px] font-semibold text-emerald-600 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/15 dark:text-emerald-300 ${FOCUS_RING}`}
          >
            Open lesson
            <ArrowUpRight
              className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </button>
        </div>
      ) : null}
    </li>
  )
}

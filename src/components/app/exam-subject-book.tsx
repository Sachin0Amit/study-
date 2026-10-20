'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowLeft,
  BookMarked,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Compass,
  GraduationCap,
  Layers,
  Library,
  ListChecks,
  Loader2,
  Play,
  RotateCcw,
  Search,
  Sparkles,
} from 'lucide-react'
import { useStudy } from '@/store/useStudy'
import { ChapterIcon } from '@/components/app/chapter-icon'
import type { BookChapter, BookSection, ExtraSection, SubjectBook } from '@/lib/exam-book'
import type { ExamMapFull } from '@/lib/exam-map-types'

// ============================================================================
// Exam Subject Book — the curated, exam-scoped volume for ONE subject.
//
// Opened from the Exam Command Center's Study Library tab. Everything the
// reader sees is syllabus-driven: only the chapters this subject's topics
// mapped onto, only the sections those topics need, the syllabus topics as
// subtopic chips, a collapsed "more in this chapter" list, and a
// "beyond the syllabus" shelf of related library sections.
// ============================================================================

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

/** sibling-subject chip (horizontal switcher under the header) */
interface Sibling {
  index: number
  name: string
  mapped: boolean
}

function formatMinutes(total: number): string {
  if (total <= 0) return '—'
  if (total < 60) return `${total} min`
  const h = Math.floor(total / 60)
  const m = total % 60
  return m ? `${h}h ${m}m` : `${h}h`
}

/** first unread syllabus section, in book order (plain derivation — compiler memoizes) */
function findFirstUnread(
  book: SubjectBook | null,
  progress: Record<string, { status?: string }>
): { section: BookSection; chapter: BookChapter } | null {
  for (const c of book?.chapters ?? []) {
    for (const s of c.sections) {
      if (progress[s.id]?.status !== 'completed') return { section: s, chapter: c }
    }
  }
  return null
}

/** circular progress ring (0–100) */
function BookProgressRing({ pct, size = 84 }: { pct: number; size?: number }) {
  const r = 34
  const c = 2 * Math.PI * r
  const tone = pct >= 75 ? 'text-emerald-400' : pct >= 40 ? 'text-amber-300' : 'text-rose-400'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      role="img"
      aria-label={`${pct}% of this book read`}
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

/** one syllabus-topic chip */
function TopicChip({ name, accent }: { name: string; accent: string }) {
  return (
    <span
      className="inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold"
      style={{ borderColor: accent + '40', background: accent + '10', color: accent }}
      title={`Syllabus topic: ${name}`}
    >
      <span className="h-1 w-1 shrink-0 rounded-full" style={{ background: accent }} aria-hidden />
      <span className="truncate">{name}</span>
    </span>
  )
}

/** one syllabus topic + its official subtopics (the deep-dive layer) */
function TopicGroup({
  name,
  subtopics,
  accent,
}: {
  name: string
  subtopics?: string[]
  accent: string
}) {
  if (!subtopics || subtopics.length === 0) return <TopicChip name={name} accent={accent} />
  return (
    <span className="inline-flex max-w-full flex-col items-start gap-1">
      <TopicChip name={name} accent={accent} />
      <span className="ml-2 flex max-w-full flex-wrap gap-1">
        {subtopics.map((s, j) => (
          <span
            key={`${s}-${j}`}
            className="inline-flex max-w-[220px] items-center rounded-md border border-border/60 bg-muted/40 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
            title={`Subtopic of ${name}: ${s}`}
          >
            <span className="truncate">{s}</span>
          </span>
        ))}
      </span>
    </span>
  )
}

/** completion state of a section row */
function SectionState({ status }: { status?: 'completed' | 'in_progress' }) {
  if (status === 'completed') {
    return (
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/15 text-emerald-300"
        title="Completed"
        aria-label="Completed"
      >
        <Check className="h-3.5 w-3.5" aria-hidden />
      </span>
    )
  }
  if (status === 'in_progress') {
    return (
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10"
        title="In progress"
        aria-label="In progress"
      >
        <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
      </span>
    )
  }
  return (
    <span
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border/70 bg-muted/30 text-muted-foreground/50"
      title="Not read yet"
      aria-label="Not read yet"
    >
      <BookOpen className="h-3 w-3" aria-hidden />
    </span>
  )
}

/** one clickable section row (shared by chapters + extra knowledge) */
function SectionRow({
  section,
  accent,
  onOpen,
  prefix,
  compact = false,
}: {
  section: BookSection | ExtraSection
  accent: string
  onOpen: (id: string) => void
  prefix?: string
  compact?: boolean
}) {
  return (
    <button
      onClick={() => onOpen(section.id)}
      className={`group flex w-full items-center gap-3 rounded-xl border border-border/50 bg-background/40 px-3 py-2.5 text-left transition-all hover:border-emerald-400/40 hover:bg-emerald-400/[0.05] ${FOCUS_RING}`}
      aria-label={`Read ${prefix ? `${prefix} · ` : ''}${section.title}`}
    >
      <span
        className="shrink-0 rounded-md border px-1.5 py-0.5 font-mono text-[10.5px] font-bold"
        style={{ borderColor: accent + '40', color: accent, background: accent + '0d' }}
      >
        {section.number}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] font-semibold text-foreground/90 group-hover:text-foreground">
          {section.title}
        </span>
        {!compact && section.serves.length > 0 && (
          <span className="mt-0.5 block truncate text-[10.5px] text-muted-foreground">
            teaches: {section.serves.join(' · ')}
          </span>
        )}
      </span>
      {typeof section.readMins === 'number' && section.readMins > 0 && (
        <span className="hidden shrink-0 items-center gap-1 font-mono text-[10px] text-muted-foreground sm:inline-flex">
          <Clock className="h-3 w-3" aria-hidden />
          {section.readMins}m
        </span>
      )}
      <ChevronRight
        className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-emerald-300"
        aria-hidden
      />
    </button>
  )
}

// ---------------------------------------------------------------- main view --

export function ExamSubjectBook({
  examMapId,
  subjectIndex,
}: {
  examMapId: string
  subjectIndex: number
}) {
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const navigate = useStudy((s) => s.navigate)
  const goBack = useStudy((s) => s.goBack)
  const progress = useStudy((s) => s.progress)

  const [book, setBook] = useState<SubjectBook | null>(null)
  const [siblings, setSiblings] = useState<Sibling[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [openChapters, setOpenChapters] = useState<Set<string>>(new Set())
  const [openExtras, setOpenExtras] = useState<Set<string>>(new Set())

  // ------------------------------------------------------------- loading --

  /** kick off the fetches — no synchronous setState, safe to call from effects */
  const fetchBook = useCallback(() => {
    const deviceId = ensureDevice()
    fetch(
      `/api/exam-maps/${encodeURIComponent(examMapId)}/book?deviceId=${encodeURIComponent(
        deviceId
      )}&subject=${subjectIndex}`
    )
      .then(async (res) => {
        const data = (await res.json().catch(() => ({}))) as { book?: SubjectBook; error?: string }
        if (!res.ok || !data.book) {
          throw new Error(data.error || 'Could not open this subject book.')
        }
        setBook(data.book)
        setOpenChapters(new Set(data.book.chapters.slice(0, 1).map((c) => c.chapterId)))
        setOpenExtras(new Set())
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Network error — please try again.')
      })
      .finally(() => setLoading(false))
    // sibling subjects for the switcher strip (cheap: reuses the map GET)
    fetch(
      `/api/exam-maps/${encodeURIComponent(examMapId)}?deviceId=${encodeURIComponent(deviceId)}`
    )
      .then(async (res) => {
        if (!res.ok) return
        const data = (await res.json()) as { map?: ExamMapFull }
        if (!data.map?.subjects) return
        setSiblings(
          data.map.subjects.map((s, i) => ({
            index: i,
            name: s.name,
            mapped: s.units.some((u) => u.topics.some((t) => t.chapterId)),
          }))
        )
      })
      .catch(() => {
        /* switcher is optional chrome */
      })
  }, [ensureDevice, examMapId, subjectIndex])

  useEffect(() => {
    fetchBook()
  }, [fetchBook])

  /** user-triggered retry (event handler → synchronous setState is fine) */
  const retry = () => {
    setLoading(true)
    setError(null)
    setBook(null)
    fetchBook()
  }

  // ------------------------------------------------------------ derived --

  const flatSections = book?.chapters.flatMap((c) => c.sections) ?? []

  const completedCount = flatSections.filter(
    (s) => progress[s.id]?.status === 'completed'
  ).length

  const pct =
    flatSections.length > 0 ? Math.round((completedCount / flatSections.length) * 100) : 0

  const nextSection = findFirstUnread(book, progress)

  const openLesson = (sectionId: string) => navigate({ name: 'lesson', sectionId })

  /** back to the exam workspace — via history when there is one, else the
   *  Syllabus section (the ECC restores the last-open exam from storage) */
  const backToWorkspace = () => {
    if (useStudy.getState().viewStack.length > 0) goBack()
    else navigate({ name: 'syllabus' })
  }

  const toggleChapter = (id: string) =>
    setOpenChapters((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const toggleExtras = (id: string) =>
    setOpenExtras((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const provenance = useMemo(() => {
    if (!book) return []
    const seen = new Set<string>()
    const out: string[] = []
    for (const c of book.chapters) {
      if (c.bookTitle && !seen.has(c.bookTitle)) {
        seen.add(c.bookTitle)
        out.push(c.bookTitle)
      }
    }
    return out
  }, [book])

  // -------------------------------------------------------- loading state --

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14" role="status" aria-label="Opening your subject book">
        <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin text-emerald-300" aria-hidden />
          Assembling your subject book from the library…
        </div>
        <div className="mt-6 h-36 animate-pulse rounded-2xl border border-border/60 bg-card/60" />
        <div className="mt-4 flex flex-col gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-24 animate-pulse rounded-2xl border border-border/60 bg-card/40"
              style={{ animationDelay: `${i * 120}ms` }}
            />
          ))}
        </div>
      </div>
    )
  }

  // ---------------------------------------------------------- error state --

  if (error || !book) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-border/80 bg-card p-8 text-center" role="alert">
          <AlertTriangle className="mx-auto h-6 w-6 text-amber-300" aria-hidden />
          <h1 className="mt-3 text-lg font-bold">Subject book unavailable</h1>
          <p className="mx-auto mt-1.5 max-w-md text-sm text-muted-foreground">
            {error || 'This book could not be opened.'} The exam may have been re-researched or
            deleted — head back to the workspace and open it again.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button
              onClick={retry}
              className={`inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 ${FOCUS_RING}`}
            >
              <RotateCcw className="h-4 w-4" aria-hidden />
              Try again
            </button>
            <button
              onClick={backToWorkspace}
              className={`inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted/50 ${FOCUS_RING}`}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to the exam
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ================================================================ render =

  const accent = book.accent
  const hasContent = book.chapters.length > 0

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      {/* ---------------- top bar ---------------- */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={backToWorkspace}
          className={`inline-flex min-h-10 items-center gap-2 rounded-xl border border-border/80 bg-card/60 px-3.5 py-2 text-[13px] font-semibold text-muted-foreground transition-colors hover:border-emerald-400/40 hover:text-foreground ${FOCUS_RING}`}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Exam workspace
        </button>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/50 px-3 py-1.5 text-[11.5px] font-semibold text-muted-foreground">
          <GraduationCap className="h-3.5 w-3.5 text-emerald-300" aria-hidden />
          <span className="max-w-56 truncate">{book.examName}</span>
        </span>
      </div>

      {/* ---------------- book header ---------------- */}
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="sv-card-glow relative mt-5 overflow-hidden rounded-2xl border border-border/80 bg-card p-5 sm:p-7"
      >
        <div
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-[0.13] blur-3xl"
          style={{ background: accent }}
          aria-hidden
        />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border"
                style={{ borderColor: accent + '55', background: accent + '18' }}
              >
                <span style={{ color: accent }}>
                  {book.mappedSubjectIcon ? (
                    <ChapterIcon icon={book.mappedSubjectIcon} className="h-6 w-6" />
                  ) : (
                    <BookMarked className="h-6 w-6" aria-hidden />
                  )}
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-300/80">
                  Subject book
                </p>
                <h1 className="break-words text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                  {book.subjectName}
                </h1>
              </div>
              {typeof book.subjectWeightage === 'number' && book.subjectWeightage > 0 && (
                <span className="shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[11px] font-bold text-emerald-300">
                  ~{Math.round(book.subjectWeightage)}% of the paper
                </span>
              )}
            </div>

            {book.mappedSubjectName && (
              <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold" style={{ color: accent }}>
                <Library className="h-3.5 w-3.5 shrink-0" aria-hidden />
                built from your library: {book.mappedSubjectName}
              </p>
            )}

            <dl className="mt-4 flex flex-wrap gap-2">
              {[
                { label: 'units', value: book.totals.units },
                { label: 'topics', value: `${book.totals.mapped}/${book.totals.topics}` },
                { label: 'chapters', value: book.totals.chapters },
                { label: 'lessons', value: book.totals.sections },
                { label: 'reading', value: formatMinutes(book.totals.readMins) },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border/60 bg-background/40 px-3 py-2"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-mono text-[15px] font-bold text-foreground/90">{s.value}</dd>
                  <dd className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* progress + continue */}
          <div className="flex shrink-0 items-center gap-5 rounded-2xl border border-border/60 bg-background/40 p-4">
            <BookProgressRing pct={pct} />
            <div className="min-w-0 max-w-56">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Your progress
              </p>
              <p className="mt-0.5 text-[13px] font-semibold">
                {completedCount} of {flatSections.length} lessons read
              </p>
              {nextSection ? (
                <button
                  onClick={() => openLesson(nextSection.section.id)}
                  className={`mt-2.5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-[13px] font-semibold text-white transition-all hover:brightness-110 ${FOCUS_RING}`}
                  style={{ background: accent }}
                >
                  <Play className="h-4 w-4" aria-hidden />
                  Continue reading
                </button>
              ) : hasContent ? (
                <button
                  onClick={() => book.chapters[0]?.sections[0] && openLesson(book.chapters[0].sections[0].id)}
                  className={`mt-2.5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border px-4 py-2 text-[13px] font-semibold transition-colors hover:bg-muted/50 ${FOCUS_RING}`}
                  style={{ borderColor: accent + '55', color: accent }}
                >
                  <RotateCcw className="h-4 w-4" aria-hidden />
                  Review from the start
                </button>
              ) : null}
              {nextSection && (
                <p className="mt-1.5 truncate text-[10.5px] text-muted-foreground" title={nextSection.section.title}>
                  next: {nextSection.section.title}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* sibling subject switcher */}
        {siblings && siblings.length > 1 && (
          <div className="relative mt-5 border-t border-border/50 pt-4">
            <p className="mb-2 text-[10.5px] font-bold uppercase tracking-wider text-muted-foreground">
              Switch subject
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {siblings.map((s) => {
                const active = s.index === subjectIndex
                return (
                  <button
                    key={`${s.index}-${s.name}`}
                    onClick={() =>
                      navigate({ name: 'exam-book', examMapId, subjectIndex: s.index })
                    }
                    disabled={active}
                    aria-current={active ? 'page' : undefined}
                    className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-colors ${FOCUS_RING} ${
                      active
                        ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-700 dark:text-emerald-200'
                        : 'border-border/70 bg-card/50 text-muted-foreground hover:border-emerald-400/30 hover:text-foreground'
                    }`}
                  >
                    <span className="max-w-40 truncate">{s.name}</span>
                    {s.mapped && !active && (
                      <BookOpen className="h-3 w-3 shrink-0 opacity-60" aria-hidden />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </motion.header>

      {/* ---------------- syllabus topics map (units) ---------------- */}
      {book.units.length > 0 && (
        <section aria-label="Syllabus units" className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
            <Layers className="h-3.5 w-3.5" aria-hidden />
            The syllabus at a glance
          </h2>
          <div className="flex flex-wrap gap-2">
            {book.units.map((u, i) => (
              <span
                key={`${u.name}-${i}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/50 px-3 py-1.5 text-[12px]"
              >
                <span className="font-mono text-[10px] font-bold text-muted-foreground">
                  U{i + 1}
                </span>
                <span className="max-w-64 truncate font-semibold text-foreground/85">{u.name}</span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {u.topicCount} topics
                </span>
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ---------------- chapters (the book itself) ---------------- */}
      <section aria-label="Book contents" className="mt-8">
        <h2 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
          <BookOpen className="h-3.5 w-3.5" aria-hidden />
          Contents — only what this syllabus needs
        </h2>

        {!hasContent ? (
          <div className="rounded-2xl border border-dashed border-border/80 bg-card/40 p-8 text-center">
            <Search className="mx-auto h-6 w-6 text-muted-foreground/50" aria-hidden />
            <p className="mt-3 text-sm font-semibold">No library chapters matched yet</p>
            <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
              None of {book.subjectName}&apos;s syllabus topics matched a library chapter. Check the
              syllabus map tab — or refresh the exam research once more topics are mapped.
            </p>
            <button
              onClick={backToWorkspace}
              className={`mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted/50 ${FOCUS_RING}`}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to the exam map
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3.5">
            {book.chapters.map((c, ci) => (
              <ChapterCard
                key={c.chapterId}
                chapter={c}
                index={ci}
                open={openChapters.has(c.chapterId)}
                extrasOpen={openExtras.has(c.chapterId)}
                onToggle={() => toggleChapter(c.chapterId)}
                onToggleExtras={() => toggleExtras(c.chapterId)}
                onOpenLesson={openLesson}
                progress={progress}
              />
            ))}
          </div>
        )}
      </section>

      {/* ---------------- unmapped topics ---------------- */}
      {book.unmapped.length > 0 && (
        <section aria-label="Topics not in the library yet" className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/80">
            <ListChecks className="h-3.5 w-3.5" aria-hidden />
            On the syllabus, not in your library yet
          </h2>
          <div className="rounded-2xl border border-amber-300/25 bg-amber-300/[0.05] p-4 sm:p-5">
            <p className="text-[12px] leading-relaxed text-muted-foreground">
              These {book.unmapped.length} topic{book.unmapped.length !== 1 ? 's' : ''} appear in the
              official syllabus but did not match a library chapter — keep them on your radar from
              other sources.
            </p>
            <ul className="mt-3 flex flex-col gap-1.5">
              {book.unmapped.map((t, i) => (
                <li
                  key={`${t.name}-${i}`}
                  className="flex items-center gap-2.5 rounded-lg border border-border/50 bg-background/40 px-3 py-2"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300/80" aria-hidden />
                  <span className="min-w-0 flex-1 truncate text-[12.5px] text-foreground/85">
                    {t.name}
                  </span>
                  <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                    {t.unit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------------- beyond the syllabus ---------------- */}
      {book.extraKnowledge.length > 0 && (
        <section aria-label="Beyond the syllabus" className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
            <Compass className="h-3.5 w-3.5" aria-hidden />
            Beyond the syllabus — extra knowledge from your library
          </h2>
          <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
            <p className="text-[12px] leading-relaxed text-muted-foreground">
              Related lessons from {book.mappedSubjectName ?? 'your library'}&apos;s other chapters —
              not required by the syllabus, but they deepen the topics that are.
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {book.extraKnowledge.map((s) => (
                <SectionRow
                  key={s.id}
                  section={s}
                  accent={accent}
                  onOpen={openLesson}
                  prefix={`Ch ${s.chapterNumber} · ${s.chapterShortTitle}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- provenance footer ---------------- */}
      {provenance.length > 0 && (
        <section aria-label="Sources" className="mt-8">
          <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-emerald-300" aria-hidden />
              Assembled from your main library
            </p>
            <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">
              {provenance.join(' · ')}
            </p>
          </div>
        </section>
      )}
    </div>
  )
}

// ------------------------------------------------------------ chapter card --

function ChapterCard({
  chapter,
  index,
  open,
  extrasOpen,
  onToggle,
  onToggleExtras,
  onOpenLesson,
  progress,
}: {
  chapter: BookChapter
  index: number
  open: boolean
  extrasOpen: boolean
  onToggle: () => void
  onToggleExtras: () => void
  onOpenLesson: (id: string) => void
  progress: Record<string, { status?: string }>
}) {
  const accent = chapter.accent
  const total = chapter.sections.length
  const completed = chapter.sections.filter(
    (s) => progress[s.id]?.status === 'completed'
  ).length
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0
  const next = chapter.sections.find((s) => progress[s.id]?.status !== 'completed')

  return (
    <article className="overflow-hidden rounded-2xl border border-border/80 bg-card">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={open}
          className={`group flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-emerald-400/[0.04] sm:p-5 ${FOCUS_RING}`}
        >
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border font-mono text-[13px] font-bold"
            style={{ borderColor: accent + '55', background: accent + '14', color: accent }}
            aria-hidden
          >
            {completed >= total && total > 0 ? <Check className="h-5 w-5" /> : index + 1}
          </span>
          <span className="min-w-0 flex-1">
            <span className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-0.5">
              <span className="truncate text-[14.5px] font-bold">{chapter.shortTitle}</span>
              {chapter.includedWhole && (
                <span
                  className="shrink-0 rounded-full border border-border/70 bg-muted/40 px-2 py-0.5 text-[9.5px] font-semibold text-muted-foreground"
                  title="No single section covered the topic — the whole chapter is included"
                >
                  full chapter
                </span>
              )}
            </span>
            <span className="mt-0.5 block truncate text-[11px] text-muted-foreground">
              from {chapter.bookTitle}
              {chapter.units.length > 0 && ` · ${chapter.units.join(' · ')}`}
            </span>
            <span className="mt-1.5 flex items-center gap-2">
              <span className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                <span
                  className={`block h-full rounded-full ${
                    pct >= 75
                      ? 'bg-emerald-400'
                      : pct >= 40
                        ? 'bg-amber-300'
                        : 'bg-muted-foreground/40'
                  }`}
                  style={{ width: `${Math.max(pct, total > 0 ? 3 : 0)}%` }}
                />
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {completed}/{total} read
              </span>
            </span>
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? '' : '-rotate-90'}`}
            aria-hidden
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-border/60 p-3.5 sm:p-5">
              {/* syllabus subtopic chips */}
              {chapter.topics.length > 0 && (
                <div className="mb-3.5">
                  <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-wider text-muted-foreground">
                    Syllabus subtopics in this chapter
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {chapter.topics.map((t, i) => (
                      <TopicGroup
                        key={`${t.name}-${i}`}
                        name={t.name}
                        subtopics={t.subtopics}
                        accent={accent}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* sections */}
              <div className="flex flex-col gap-1.5">
                {chapter.sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onOpenLesson(s.id)}
                    className={`group flex w-full items-center gap-3 rounded-xl border border-border/50 bg-background/40 px-3 py-2.5 text-left transition-all hover:border-emerald-400/40 hover:bg-emerald-400/[0.05] ${FOCUS_RING}`}
                    aria-label={`Read section ${s.number} — ${s.title}`}
                  >
                    <SectionState status={progress[s.id]?.status as 'completed' | 'in_progress' | undefined} />
                    <span
                      className="shrink-0 rounded-md border px-1.5 py-0.5 font-mono text-[10.5px] font-bold"
                      style={{ borderColor: accent + '40', color: accent, background: accent + '0d' }}
                    >
                      {s.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[13px] font-semibold text-foreground/90 group-hover:text-foreground">
                        {s.title}
                      </span>
                      {s.serves.length > 0 && (
                        <span className="mt-0.5 block truncate text-[10.5px] text-muted-foreground">
                          teaches: {s.serves.join(' · ')}
                        </span>
                      )}
                    </span>
                    {typeof s.readMins === 'number' && s.readMins > 0 && (
                      <span className="hidden shrink-0 items-center gap-1 font-mono text-[10px] text-muted-foreground sm:inline-flex">
                        <Clock className="h-3 w-3" aria-hidden />
                        {s.readMins}m
                      </span>
                    )}
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-emerald-300"
                      aria-hidden
                    />
                  </button>
                ))}
              </div>

              {/* resume hint */}
              {next && (
                <button
                  onClick={() => onOpenLesson(next.id)}
                  className={`mt-3 inline-flex min-h-10 items-center gap-2 rounded-xl border px-4 py-2 text-[12.5px] font-semibold transition-colors hover:brightness-110 ${FOCUS_RING}`}
                  style={{ borderColor: accent + '55', background: accent + '10', color: accent }}
                >
                  <Play className="h-3.5 w-3.5" aria-hidden />
                  Resume this chapter
                </button>
              )}

              {/* collapsed chapter extras */}
              {chapter.extras.length > 0 && (
                <div className="mt-3.5 border-t border-border/40 pt-3.5">
                  <button
                    onClick={onToggleExtras}
                    aria-expanded={extrasOpen}
                    className={`inline-flex min-h-9 items-center gap-1.5 rounded-lg text-[11.5px] font-semibold text-muted-foreground transition-colors hover:text-foreground ${FOCUS_RING}`}
                  >
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${extrasOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                    {extrasOpen
                      ? 'Hide extra sections'
                      : `+${chapter.extras.length} more section${chapter.extras.length !== 1 ? 's' : ''} in this chapter`}
                  </button>
                  <AnimatePresence initial={false}>
                    {extrasOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="mt-2 text-[10.5px] text-muted-foreground">
                          Not required by the syllabus — the rest of the chapter, for when you want
                          the full picture.
                        </p>
                        <div className="mt-2 flex flex-col gap-1.5">
                          {chapter.extras.map((s) => (
                            <SectionRow
                              key={s.id}
                              section={s}
                              accent={accent}
                              onOpen={onOpenLesson}
                              compact
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ChevronRight, CircleDashed, ClipboardCheck, Clock, FileText, Layers, Play, Printer, Sigma, X } from 'lucide-react'
import { getChapter, getSections, getBook } from '@/data/library'
import { INTERACTIVE_META, InteractiveTool } from '@/components/interactives/registry'
import { FORMULA_COUNTS } from '@/data/formulas'
import { easyChapterLine, easyLabLine } from '@/data/easy-library'
import { EasyBox, EasyLine } from './easy-box'
import { ChapterIcon } from './chapter-icon'
import { ChapterSummary } from './chapter-summary'
import { useStudy } from '@/store/useStudy'

export function ChapterView({ chapterId }: { chapterId: string }) {
  const navigate = useStudy((s) => s.navigate)
  const progress = useStudy((s) => s.progress)
  const easyMode = useStudy((s) => s.easyMode)
  const [summaryOpen, setSummaryOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const chapter = getChapter(chapterId)

  // modal open: focus the close button, Escape closes, Tab stays inside, body scroll locks
  useEffect(() => {
    if (!summaryOpen || !chapter) return
    closeRef.current?.focus()
    document.body.classList.add('sv-summary-open')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSummaryOpen(false)
        return
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        )
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('sv-summary-open')
      triggerRef.current?.focus()
    }
  }, [summaryOpen, chapter])

  if (!chapter) return null
  const book = getBook(chapter.bookId)
  const sections = getSections(chapterId)
  const tool = INTERACTIVE_META[chapter.interactiveKey]

  const done = sections.filter((s) => progress[s.id]?.status === 'completed').length
  const pct = sections.length ? Math.round((done / sections.length) * 100) : 0

  return (
    <>
    <div
      className={`mx-auto max-w-7xl px-4 py-8 sm:px-6 ${summaryOpen ? 'print:hidden' : ''}`}
    >
      <button
        onClick={() => navigate({ name: 'book', bookId: chapter.bookId })}
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> {book?.title ?? 'Book'}
      </button>

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8 overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8"
      >
        <div className="absolute inset-0 sv-hero-glow opacity-50" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10">
              <ChapterIcon icon={chapter.icon} className="h-7 w-7 text-emerald-300" />
            </div>
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-300/80">
                Chapter {chapter.number} · pages {chapter.pages}
              </div>
              <h1 className="mt-1 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                {chapter.title}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {chapter.description}
              </p>
              {easyMode && (
                <div className="mt-3 max-w-2xl">
                  <EasyBox variant="text" text={easyChapterLine(chapter)} defaultOpen={true} />
                </div>
              )}
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3 sm:flex-col sm:items-end">
            <div className="font-mono text-2xl font-bold text-emerald-300">{pct}%</div>
            <div className="text-xs text-muted-foreground">
              {done}/{sections.length} sections done
            </div>
            <button
              onClick={() => navigate({ name: 'flashcards', chapterId: chapter.id })}
              className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-amber-300/30 bg-amber-300/10 px-3.5 py-2 text-xs font-semibold text-amber-200 transition-colors hover:bg-amber-300/20"
            >
              <Layers className="h-3.5 w-3.5" /> Drill flashcards
            </button>
            {FORMULA_COUNTS[chapter.id] > 0 && (
              <button
                onClick={() => navigate({ name: 'formulas', chapterId: chapter.id })}
                className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3.5 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-emerald-400/40 hover:text-foreground"
              >
                <Sigma className="h-3.5 w-3.5" /> {FORMULA_COUNTS[chapter.id]} formulas
              </button>
            )}
            <button
              onClick={() => navigate({ name: 'exam', chapterId: chapter.id })}
              className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-rose-400/30 bg-rose-400/10 px-3.5 py-2 text-xs font-semibold text-rose-300 transition-colors hover:bg-rose-400/20"
            >
              <ClipboardCheck className="h-3.5 w-3.5" /> Chapter exam
            </button>
            <button
              ref={triggerRef}
              onClick={() => setSummaryOpen(true)}
              className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-teal-300/30 bg-teal-300/10 px-3.5 py-2 text-xs font-semibold text-teal-200 transition-colors hover:bg-teal-300/20 print:hidden"
            >
              <FileText className="h-3.5 w-3.5" /> Summary sheet
            </button>
          </div>
        </div>
      </motion.div>

      {/* Interactive lab showcase */}
      {tool && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-300/25 bg-amber-300/10">
                <Play className="h-4 w-4 text-amber-300" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/80">
                  Chapter lab
                </div>
                <h2 className="text-lg font-bold leading-tight">{tool.title}</h2>
              </div>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground">{tool.description}</p>
          </div>
          {easyMode && (
            <div className="mb-3">
              <EasyBox
                variant="text"
                text={easyLabLine(chapter.interactiveKey, tool.title, tool.description)}
                defaultOpen={false}
              />
            </div>
          )}
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/70">
            <InteractiveTool toolKey={chapter.interactiveKey} />
          </div>
        </motion.section>
      )}

      {/* Sections */}
      <div>
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          <Clock className="h-3.5 w-3.5" /> Study path — {sections.length} lessons
        </div>
        {easyMode && (
          <div className="mb-4">
            <EasyBox
              variant="text"
              text={`Easy path: do §${sections[0]?.number ?? 1} first, then go down in order. Each lesson needs the one above. Green tick = done, dotted = started. Open lesson 1 now, read yellow boxes only.`}
              defaultOpen={false}
            />
          </div>
        )}
        <div className="grid gap-3">
          {sections.map((sec, i) => {
            const p = progress[sec.id]
            const isDone = p?.status === 'completed'
            const isStarted = p?.status === 'in_progress'
            return (
              <motion.button
                key={sec.id}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.35) }}
                onClick={() => navigate({ name: 'lesson', sectionId: sec.id })}
                className={`group flex min-w-0 items-center gap-4 rounded-xl border p-4 text-left transition-all hover:translate-x-1 ${
                  isDone
                    ? 'border-emerald-400/30 bg-emerald-400/[0.06] hover:border-emerald-400/50'
                    : isStarted
                      ? 'border-amber-300/25 bg-amber-300/[0.04] hover:border-amber-300/45'
                      : 'border-border/80 bg-card hover:border-emerald-400/35'
                }`}
              >
                <span className="shrink-0">
                  {isDone ? (
                    <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                  ) : isStarted ? (
                    <CircleDashed className="h-6 w-6 text-amber-300 sv-pulse-glow" />
                  ) : (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border font-mono text-[10px] font-bold text-muted-foreground">
                      {i + 1}
                    </span>
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-mono text-xs font-bold text-emerald-300/80">
                      §{sec.number}
                    </span>
                    <span className="text-[15px] font-semibold leading-snug">{sec.title}</span>
                  </span>
                  <span className="mt-1 block truncate text-[13px] text-muted-foreground">
                    {sec.description}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  {p?.quizScore && (
                    <span className="hidden rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] font-semibold text-emerald-300 sm:block">
                      quiz {p.quizScore.score}/{p.quizScore.total}
                    </span>
                  )}
                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-emerald-300" />
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>

    {/* ---------- chapter summary modal (the ONLY thing visible in print) ---------- */}
    <AnimatePresence>
      {summaryOpen && (
        <motion.div
          key="chapter-summary-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="sv-summary-overlay fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Chapter ${chapter.number} summary sheet`}
        >
          {/* backdrop (click to close) */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm print:hidden"
            onClick={() => setSummaryOpen(false)}
            aria-hidden
          />

          {/* sheet card */}
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="sv-summary-card relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl"
          >
            {/* top bar (screen chrome only) */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border/80 px-4 py-3 sm:px-5 print:hidden">
              <div className="min-w-0">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300/80">
                  Chapter {chapter.number} summary · {sections.length} sections
                </div>
                <div className="truncate text-sm font-semibold">{chapter.shortTitle}</div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-[11px] font-semibold text-emerald-200 transition-colors hover:bg-emerald-400/20"
                >
                  <Printer className="h-3.5 w-3.5" /> Print
                </button>
                <button
                  ref={closeRef}
                  onClick={() => setSummaryOpen(false)}
                  aria-label="Close chapter summary"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-muted/40 text-muted-foreground transition-colors hover:border-rose-400/40 hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* printable sheet content */}
            <div className="sv-summary-scroll sv-print-sheet min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6 print:px-0 print:py-0">
              <ChapterSummary chapterId={chapterId} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

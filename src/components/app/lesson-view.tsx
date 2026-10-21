'use client'

import { Fragment, useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  ListTree,
  Maximize2,
  Minimize2,
  Printer,
  Timer,
  X,
  XCircle,
  Zap,
  Atom,
  Pencil,
  FileImage,
  CloudDownload,
} from 'lucide-react'
import { toast } from 'sonner'
import { getBook, getChapter, getSection, getSections, LIBRARY_SUBJECTS } from '@/data/library'
import { startFocusSession } from '@/lib/focus'
import { useAllContent } from '@/hooks/use-content'
import { getOfflineSection } from '@/lib/offline-cache'
import type { ChapterMeta, DepthBlock, DepthTier, DetailedDerivation, LessonFigure, QuizQuestion, SectionContent, SectionMeta } from '@/data/library'
import { RichText, plainText } from '../rich-text'
import { shuffleQuizOptions } from '@/lib/quiz-shuffle'
import { InteractiveTool } from '@/components/interactives/registry'
import { pairedSimForSection } from '@/components/interactives/lesson-sims'
import { buildVoiceBlocks, VoiceTutor } from './voice-tutor'
import { LessonIllustrator } from './lesson-illustrator'
import { VisualDiagramSolver, detectDiagramTopic } from '@/components/visual/visual-diagram-solver'
import { useStudy } from '@/store/useStudy'
import { logActivity } from '@/lib/activity'
import { NotesPanel } from './notes-panel'
import { ResumePill, useLessonScrollRestore } from './reading-progress'
import { EasyBox, EasyStart } from './easy-box'

/* ------------------------------------------------------------------ */
/*  Book page vocabulary                                               */
/*  The lesson reads like a page of a real textbook: one paper          */
/*  surface, a running head, serif prose at a reading measure,          */
/*  run-in small-cap labels (Definition 1. / Theorem 2. / Solution.),  */
/*  hairline rules, an asterism between parts, and a folio at the      */
/*  foot. No card soup — content flows.                                */
/* ------------------------------------------------------------------ */

/** Attribution line for the chapter opening, e.g. "Discrete Mathematics and Its Applications — Rosen, 8th Ed" */
function bookTitle(bookId: string): string {
  const book = getBook(bookId)
  if (!book) return ''
  const surname = bookAuthorShort(bookId)
  const edition = book.edition ? `, ${book.edition.replace(' Edition', ' Ed')}` : ''
  return surname ? `${book.title} — ${surname}${edition}` : book.title
}

/** Split a syllabus-section description (comma/semicolon prose that lists every tested
 *  subtopic) into scannable bullets for the Syllabus Topic Brief checklist. */
function splitSyllabusSubtopics(description: string): string[] {
  const cleaned = description.replace(/\s+/g, ' ').trim().replace(/[.;]\s*$/, '')
  // "A, B, C, and D" / "A; B; C" — split on commas, semicolons, and the Oxford "and"
  const parts = cleaned
    .split(/,|;|\band\b|\bplus\b/gi)
    .map((p) => p.trim().replace(/^[a-z]/, (c) => c.toUpperCase()))
    // keep meaningful fragments: at least 3 words or a hyphenated compound
    .filter((p) => p.length > 8 && p.split(' ').length >= 2 && !/^(The|This|These|Those)$/i.test(p))
  // dedupe (case-insensitive) and cap at 8 bullets
  const seen = new Set<string>()
  const unique = parts.filter((p) => {
    const key = p.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
  return unique.slice(0, 8)
}

/* ------------------------------------------------------------------ */
/*  Syllabus Topic Brief                                               */
/*  Rendered for sections that have syllabus metadata but no authored  */
/*  lesson yet: every official subtopic (split out of the section      */
/*  description), chapter context chips, sibling-lesson coverage and   */
/*  prev/next topic navigation. Kept as its own component so the       */
/*  description-splitting helper never runs in the parent scope        */
/*  (React Compiler memoization preservation).                         */
/* ------------------------------------------------------------------ */
function SyllabusBrief({
  section,
  chapter,
  prev,
  next,
  totalSiblings,
}: {
  section: SectionMeta
  chapter: ChapterMeta
  prev?: SectionMeta
  next?: SectionMeta
  totalSiblings: number
}) {
  const navigate = useStudy((s) => s.navigate)
  /* lesson corpus arrives by runtime fetch (kept out of the bundle) */
  const allContent = useAllContent()
  const subtopics = splitSyllabusSubtopics(section.description)
  const lessonCount = useMemo(
    () =>
      allContent
        ? getSections(chapter.id).filter((s) =>
            allContent.some((c) => c.sectionId === s.id)
          ).length
        : 0,
    [allContent, chapter.id]
  )

  return (
    <section aria-label="Syllabus topic brief" className="mt-6 mb-4">
      <div className="relative overflow-hidden rounded-xl border border-book-rule bg-muted/20">
        {/* subtle decorative wash */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-emerald-400/[0.07] via-emerald-400/[0.03] to-transparent"
        />
        <div className="relative px-5 py-5 sm:px-7 sm:py-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10">
              <ListTree className="h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
            </span>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                Syllabus Topic Brief
              </div>
              <div className="font-mono text-[10.5px] text-book-soft">
                Section {section.number} · official syllabus map
              </div>
            </div>
          </div>
          <p className="mt-4 font-serif text-[16.5px] leading-[1.75]">{section.description}</p>

          {/* subtopic checklist — official bullets split out of the syllabus description */}
          {subtopics.length > 1 && (
            <div className="mt-5">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-book-soft">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500/80 dark:text-emerald-300/80" aria-hidden />
                Every tested subtopic in this section
              </div>
              <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2">
                {subtopics.map((t, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 rounded-md border border-border/60 bg-card/60 px-3 py-2 text-[12.5px] leading-snug"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.2rem] flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border border-emerald-400/40 bg-emerald-400/10 font-mono text-[9px] font-bold text-emerald-600 dark:text-emerald-300"
                    >
                      {i + 1}
                    </span>
                    <span className="min-w-0">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-book-soft">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/50 px-2.5 py-1">
              <BookOpenCheck className="h-3 w-3 text-emerald-500/80" aria-hidden />
              {bookTitle(chapter.bookId)}
            </span>
            {chapter.pages && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/50 px-2.5 py-1">
                <GraduationCap className="h-3 w-3 text-emerald-500/80" aria-hidden />
                {chapter.pages}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/50 px-2.5 py-1">
              <ListTree className="h-3 w-3 text-emerald-500/80" aria-hidden />
              Chapter {chapter.number} · {chapter.shortTitle}
            </span>
            {lessonCount > 0 && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-emerald-700 dark:text-emerald-300">
                <Zap className="h-3 w-3" aria-hidden />
                {lessonCount} of {totalSiblings} chapter topics have full lessons
              </span>
            )}
          </div>
          <div className="sv-book-rule mt-5" />
          <p className="mt-5 text-[13.5px] leading-relaxed text-book-soft">
            This section of the syllabus map is catalogued with every tested subtopic above. A
            full lesson — concepts, worked examples and a self-check quiz — follows the same
            pattern as the authored lessons across the library. Browse the chapter outline for
            sibling topics, or jump to any completed lesson from the contents list.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate({ name: 'chapter', chapterId: chapter.id })}
              className="inline-flex items-center gap-1.5 rounded-full border border-book-rule bg-primary/[0.06] px-4 py-1.5 text-[12px] font-semibold text-book-ink transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            >
              <ListTree className="h-3.5 w-3.5" aria-hidden />
              All Chapter {chapter.number} topics
            </button>
            {(prev || next) && (
              <span className="flex items-center gap-2">
                {prev && (
                  <button
                    onClick={() => navigate({ name: 'lesson', sectionId: prev.id })}
                    aria-label={`Go to previous topic: ${prev.title}`}
                    className="inline-flex items-center gap-1 rounded-full border border-border/70 px-3 py-1.5 text-[11.5px] font-medium text-book-soft transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                  >
                    <ArrowLeft className="h-3 w-3" aria-hidden />
                    <span className="max-w-[140px] truncate">§{prev.number}</span>
                  </button>
                )}
                {next && (
                  <button
                    onClick={() => navigate({ name: 'lesson', sectionId: next.id })}
                    aria-label={`Go to next topic: ${next.title}`}
                    className="inline-flex items-center gap-1 rounded-full border border-border/70 px-3 py-1.5 text-[11.5px] font-medium text-book-soft transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                  >
                    <span className="max-w-[140px] truncate">§{next.number} next</span>
                    <ArrowRight className="h-3 w-3" aria-hidden />
                  </button>
                )}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Author surname(s) for the running head, e.g. "Rosen" or "Hughes · Nilsson · AoE" */
function bookAuthorShort(bookId: string): string {
  const book = getBook(bookId)
  if (!book) return ''
  return book.author
    .split(/,| and /)
    .map((a) => a.trim().split(' ').filter(Boolean).pop())
    .filter(Boolean)
    .slice(0, 3)
    .join(' · ')
}

/** How each concept kind is set on the page: run-in label + optional block treatment */
const KIND: Record<string, { label: string; color: string; block?: 'def' | 'thm' | 'note' }> = {
  definition: { label: 'Definition', color: 'text-primary', block: 'def' },
  theorem: { label: 'Theorem', color: 'text-amber-600 dark:text-amber-300', block: 'thm' },
  law: { label: 'Law', color: 'text-amber-600 dark:text-amber-300', block: 'thm' },
  method: { label: 'Method', color: 'text-teal-600 dark:text-teal-300' },
  notation: { label: 'Notation', color: 'text-book-soft' },
  insight: { label: 'Insight', color: 'text-rose-500 dark:text-rose-300', block: 'note' },
}

/* Live network flag for the offline-copy fallback (X9 Pro download manager). */
function useOnlineFlag() {
  return useSyncExternalStore(
    (cb) => {
      window.addEventListener('online', cb)
      window.addEventListener('offline', cb)
      return () => {
        window.removeEventListener('online', cb)
        window.removeEventListener('offline', cb)
      }
    },
    () => navigator.onLine,
    () => true
  )
}

/* ------------------------------------------------------------------ */
/*  Save to Review — X10                                               */
/*  Seeds this lesson into the SM-2 Review deck: every quiz question,  */
/*  key term and takeaway becomes a two-sided card. Re-saving never    */
/*  resets an existing schedule.                                       */
/* ------------------------------------------------------------------ */
function SaveToReview({ sectionId }: { sectionId: string }) {
  const navigate = useStudy((s) => s.navigate)
  const [state, setState] = useState<'idle' | 'saving' | 'saved'>('idle')
  const [created, setCreated] = useState(0)

  const save = async () => {
    if (state === 'saving') return
    setState('saving')
    try {
      const res = await fetch('/api/review/seed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sectionId }),
      })
      if (!res.ok) throw new Error('seed failed')
      const data = (await res.json()) as { created?: number; skipped?: number }
      const made = Number(data.created ?? 0)
      setCreated(made)
      setState('saved')
      toast.success(
        made > 0
          ? `${made} review card${made !== 1 ? 's' : ''} added to your Review deck`
          : 'Already in your Review deck — schedules untouched',
        {
          icon: <Brain className="h-4 w-4 text-amber-300" />,
          action: {
            label: 'Open Review',
            onClick: () => navigate({ name: 'review' }),
          },
        }
      )
    } catch {
      setState('idle')
      toast.error('Could not save this lesson to Review — try again.')
    }
  }

  if (state === 'saved') {
    return (
      <div className="mt-12 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-dashed border-amber-400/40 bg-amber-400/[0.05] px-4 py-3.5 sm:px-5">
        <p className="flex min-w-0 items-center gap-2.5 font-serif text-[15px] italic text-book-soft">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-300" aria-hidden />
          <span className="min-w-0">
            In your Review deck — scheduled by SM-2
            {created > 0 && (
              <span className="ml-1.5 font-sans font-mono text-[11px] not-italic text-muted-foreground">
                {created} card{created !== 1 ? 's' : ''} · each returns as it ripens
              </span>
            )}
          </span>
        </p>
        <button
          onClick={() => navigate({ name: 'review' })}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-[12px] font-semibold text-amber-700 transition-colors hover:bg-amber-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 dark:text-amber-300"
        >
          <Brain className="h-3.5 w-3.5" aria-hidden /> Open Review
        </button>
      </div>
    )
  }

  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-dashed border-amber-400/40 bg-amber-400/[0.05] px-4 py-3.5 sm:px-5">
      <div className="flex min-w-0 items-start gap-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-amber-400/30 bg-amber-400/10">
          <Brain className="h-4.5 w-4.5 text-amber-600 dark:text-amber-300" aria-hidden />
        </span>
        <div className="min-w-0">
          <h3 className="text-[14px] font-bold tracking-tight">Keep this lesson forever</h3>
          <p className="mt-0.5 max-w-lg text-[12.5px] leading-relaxed text-book-soft">
            Save it to Review — its quiz questions, key terms and takeaways become SM-2 flashcards
            that resurface exactly when you&apos;re about to forget them.
          </p>
        </div>
      </div>
      <button
        onClick={() => void save()}
        disabled={state === 'saving'}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-[12px] font-semibold text-amber-700 transition-colors hover:bg-amber-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 disabled:opacity-50 dark:text-amber-300"
      >
        <Zap className="h-3.5 w-3.5" aria-hidden />
        {state === 'saving' ? 'Saving…' : 'Save to Review'}
      </button>
    </div>
  )
}

export function LessonView({ sectionId }: { sectionId: string }) {
  const navigate = useStudy((s) => s.navigate)
  const markViewed = useStudy((s) => s.markViewed)
  const markCompleted = useStudy((s) => s.markCompleted)
  const unmarkCompleted = useStudy((s) => s.unmarkCompleted)
  const progress = useStudy((s) => s.progress)
  const readerFocus = useStudy((s) => s.readerFocus)
  const setReaderFocus = useStudy((s) => s.setReaderFocus)
  const readerScale = useStudy((s) => s.readerScale)
  const setReaderScale = useStudy((s) => s.setReaderScale)
  const easyMode = useStudy((s) => s.easyMode)
  const setEasyMode = useStudy((s) => s.setEasyMode)

  const section = getSection(sectionId)
  const chapter = section ? getChapter(section.chapterId) : undefined
  const siblings = section ? getSections(section.chapterId) : []

  /* Offline pin fallback (X9 Pro): the bundled content graph stays the primary
   * source, but when there is no connection and this section was pinned through
   * the Download Manager, the IndexedDB copy takes over — the lesson keeps
   * reading even if the content bundle is not on this device. */
  const online = useOnlineFlag()
  /* lesson corpus arrives by runtime fetch (kept out of the bundle) */
  const allContent = useAllContent()
  const bundleContent = useMemo(
    () => allContent?.find((c) => c.sectionId === sectionId),
    [allContent, sectionId]
  )
  const [offlineCopy, setOfflineCopy] = useState<{ sectionId: string; content: SectionContent } | null>(null)
  useEffect(() => {
    if (online) return
    let alive = true
    void getOfflineSection(sectionId)
      .then((payload) => {
        if (alive && payload && payload.content) setOfflineCopy({ sectionId, content: payload.content })
      })
      .catch(() => {
        /* offline cache unavailable — bundled content still renders */
      })
    return () => {
      alive = false
    }
  }, [sectionId, online])
  const readingOfflineCopy = !online && offlineCopy !== null && offlineCopy.sectionId === sectionId
  const content: SectionContent | undefined = readingOfflineCopy ? offlineCopy.content : bundleContent

  /* Voice Tutor reading queue — the speakable spine of the lesson */
  const voiceBlocks = useMemo(
    () =>
      content
        ? buildVoiceBlocks({
            intro: content.intro,
            objectives: content.objectives,
            concepts: content.concepts,
            examples: content.examples?.map((ex) => ({
              title: ex.title,
              problem: typeof ex.problem === 'string' ? ex.problem : undefined,
              result: typeof ex.result === 'string' ? ex.result : undefined,
            })),
            keyTakeaways: content.keyTakeaways,
          })
        : [],
    [content],
  )

  /* Simverse pairing: knowledge-topic lessons resolve their lab here */
  const lessonSimKey = pairedSimForSection(sectionId) ?? chapter?.interactiveKey ?? ''

  const idx = siblings.findIndex((s) => s.id === sectionId)

  /** academic prerequisites: either explicit from content or intelligent curriculum fallback */
  const prerequisitesList = useMemo(() => {
    if (content?.prerequisites && content.prerequisites.length > 0) {
      return content.prerequisites
    }
    if (idx > 0 && siblings[idx - 1]) {
      return [`Foundations from §${siblings[idx - 1].number} (${siblings[idx - 1].title})`]
    }
    if (chapter && chapter.number > 1) {
      return [`Core principles established in Chapter ${chapter.number - 1}`]
    }
    return ['Foundational high-school algebra & analytical reasoning']
  }, [content, idx, siblings, chapter])

  /** mini-TOC outline: prerequisites → objectives → concepts → deeper results → derivations → examples → takeaways → quiz.
   *  The deeper theory is not a separate compartment — its subsections list right
   *  under the concepts they continue, numbered the same way. */
  const tocEntries = useMemo<TocEntry[]>(() => {
    if (!content) return []
    const list: TocEntry[] = []
    if (prerequisitesList.length > 0) list.push({ id: 'prerequisites', label: 'Prerequisites', item: false })
    if (content.objectives.length > 0) list.push({ id: 'objectives', label: 'Objectives', item: false })
    content.concepts.forEach((c, i) => list.push({ id: `concept-${i}`, label: c.term, item: true }))
    content.depth?.forEach((t, i) => list.push({ id: `depth-${i}`, label: t.title, item: true }))
    if (content.derivations?.length) {
      content.derivations.forEach((d, i) => list.push({ id: `derivation-${i}`, label: d.title, item: true }))
    }
    content.examples.forEach((ex, i) => list.push({ id: `example-${i}`, label: ex.title, item: true }))
    if (content.keyTakeaways.length > 0) list.push({ id: 'takeaways', label: 'In summary', item: false })
    if (content.quiz.length > 0) list.push({ id: 'quiz', label: 'Check yourself', item: false })
    return list
  }, [content, prerequisitesList])

  /** how many extra minutes the deeper results add, at a 200 wpm read */
  const depthMin = useMemo(() => {
    if (!content?.depth) return 0
    let words = 0
    for (const t of content.depth)
      for (const b of t.blocks) words += plainText(b.body).trim().split(/\s+/).length
    return Math.max(1, Math.round(words / 200))
  }, [content])

  /** the book's figure plates, placed next to the ideas they illustrate.
   *  `afterConcept` is 1-based; figures without it follow the whole run. */
  const figures = content?.figures ?? []

  /** book-style numbering: Definitions / Theorems / Laws count separately, like chapters do */
  const conceptLabels = useMemo(() => {
    const counters: Record<string, number> = {}
    return (content?.concepts ?? []).map((c) => {
      const kind = KIND[c.kind] ?? KIND.definition
      if (kind.block === 'def' || kind.block === 'thm') {
        counters[kind.label] = (counters[kind.label] ?? 0) + 1
        return `${kind.label} ${counters[kind.label]}.`
      }
      return `${kind.label}.`
    })
  }, [content])

  /** a drop cap only reads well when the lede opens with a plain letter */
  const canDropcap = useMemo(() => !!content?.intro && /^[A-Za-z]/.test(content.intro), [content])

  const activeId = useScrollSpy(tocEntries.map((e) => e.id))
  const restore = useLessonScrollRestore(sectionId)
  const [tocOpen, setTocOpen] = useState(false)

  /** jump to an outline anchor (sticky-header offset via scroll-mt targets) */
  const scrollToAnchor = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }, [])

  useEffect(() => {
    if (sectionId) {
      markViewed(sectionId)
      logActivity('lesson')
    }
  }, [sectionId])

  /** hydrate the saved reading scale once on mount (SSR-safe: post-hydration state change) */
  useEffect(() => {
    try {
      const saved = parseFloat(localStorage.getItem('sv-reader-scale') ?? '')
      if (Number.isFinite(saved) && saved >= 0.9 && saved <= 1.25 && Math.abs(saved - 1) > 0.001) {
        useStudy.setState({ readerScale: saved })
      }
    } catch {
      /* no storage */
    }
  }, [])

  /** leaving the lesson view always ends focus reading (chrome comes back) */
  useEffect(() => () => setReaderFocus(false), [setReaderFocus])

  /** Esc exits focus reading mode */
  useEffect(() => {
    if (!readerFocus) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setReaderFocus(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [readerFocus, setReaderFocus])

  if (!section || !chapter) return null

  const prev = idx > 0 ? siblings[idx - 1] : undefined
  const next = idx < siblings.length - 1 ? siblings[idx + 1] : undefined

  const p = progress[sectionId]

  return (
    <div
      className={`sv-print-sheet mx-auto px-3 py-8 sm:px-6 lg:px-8 print:max-w-none print:px-0 print:py-0 ${
        readerFocus
          ? 'max-w-5xl xl:max-w-6xl'
          : 'max-w-7xl 2xl:max-w-[1540px] lg:grid lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[264px_minmax(0,1fr)] lg:gap-8 xl:gap-10'
      } print:block!`}
    >
      {/* desktop (lg+): sticky "Contents" sidebar — hidden in focus mode, on mobile and on paper */}
      {!readerFocus && tocEntries.length > 0 && (
        <aside className="hidden print:hidden! lg:block" aria-label="Lesson contents">
          <nav className="sticky top-20 rounded-2xl border border-border bg-card p-3 shadow-sm">
            <p className="flex items-center gap-1.5 px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              <ListTree className="h-3.5 w-3.5 text-emerald-500/70 dark:text-emerald-300/70" aria-hidden />
              Contents
            </p>
            <TocList
              entries={tocEntries}
              active={activeId}
              onJump={scrollToAnchor}
              listClassName="max-h-[calc(100vh-7.5rem)] pr-1"
            />
          </nav>
        </aside>
      )}

      {/* ============ the page ============ */}
      <article
        className="sv-book min-w-0"
        style={{ '--sv-book-scale': readerScale } as React.CSSProperties}
      >
        {/* running head — chapter on the left, author on the right, one shared hairline below */}
        <div className="sv-book-runhead px-5 pt-6 sm:px-10 lg:px-14">
          <button
            onClick={() => navigate({ name: 'chapter', chapterId: chapter.id })}
            className="min-w-0 truncate text-left transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 print:pointer-events-none"
            aria-label={`Back to Chapter ${chapter.number}, ${chapter.shortTitle}`}
          >
            <span aria-hidden className="mr-2">
              ←
            </span>
            Ch {chapter.number} · {chapter.shortTitle}
          </button>
          <span className="hidden shrink-0 sm:block">{bookAuthorShort(chapter.bookId)}</span>
        </div>

        {/* chapter opening: section number, title, meta, double rule */}
        <header className="px-5 pb-2 pt-8 sm:px-10 sm:pt-10 lg:px-14">
          <p className="font-serif text-[12px] font-medium tracking-[0.16em] text-book-soft uppercase">
            Section {section.number}
          </p>
          <h1 className="mt-1.5 font-serif text-[2.05rem] font-semibold leading-[1.15] tracking-[-0.012em] sm:text-[2.5rem]">
            {section.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-[12px] text-book-soft">
            <span>~{content?.readingTime ?? 10} min read</span>
            {readingOfflineCopy && (
              <span
                className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-300"
                title="No connection — reading the copy pinned on this device"
              >
                <CloudDownload className="h-3.5 w-3.5" aria-hidden /> Offline copy
              </span>
            )}
            {content?.depth?.length ? (
              <span
                className="inline-flex items-center gap-1.5"
                title="This section continues into deeper theory, through to the research frontier"
              >
                <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500/80" />
                +{depthMin} min of deeper material
              </span>
            ) : null}
            {p?.status === 'completed' && (
              <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> completed
              </span>
            )}
            <span className="ml-auto print:hidden">
              <button
                onClick={() => {
                  const wasDone = p?.status === 'completed'
                  if (wasDone) {
                    unmarkCompleted(sectionId)
                    toast.success('Marked as not completed', {
                      description: `§${section.number} ${section.title} moved out of your completed collection`,
                    })
                  } else {
                    markCompleted(sectionId)
                    toast.success('Section completed — nice work!', {
                      description: `§${section.number} ${section.title} added to your Tracker collection`,
                    })
                  }
                }}
                aria-pressed={p?.status === 'completed'}
                title={
                  p?.status === 'completed'
                    ? 'Completed — click to unmark'
                    : 'Mark this section as completed (it lands in your Tracker collection)'
                }
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 ${
                  p?.status === 'completed'
                    ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-300'
                    : 'border-book-rule text-book-soft hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-300'
                }`}
              >
                {p?.status === 'completed' ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> Completed · undo?
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> Mark complete
                  </>
                )}
              </button>
              <button
                onClick={() => setReaderFocus(true)}
                className="inline-flex items-center gap-1.5 rounded-full border border-book-rule px-3 py-1 text-[11px] font-semibold text-book-soft transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
              >
                <BookOpenCheck className="h-3.5 w-3.5" aria-hidden /> Focus mode
              </button>
              <button
                onClick={() => {
                  const book = getBook(chapter.bookId)
                  const subject =
                    LIBRARY_SUBJECTS.find((s) => s.id === book?.subjectId)?.name ??
                    bookTitle(chapter.bookId)
                  startFocusSession(undefined, {
                    chapterId: chapter.id,
                    chapterTitle: chapter.title,
                    subject,
                    taskTitle: `Read §${section.number} ${section.title}`,
                  })
                  toast.success('Pomodoro started — this lesson is being timed', {
                    description: `${subject} · the session banks into your Focus HQ analytics`,
                  })
                }}
                title="Start a Pomodoro timed on this lesson — it shows up in Focus HQ as study time for this subject"
                className="ml-1.5 inline-flex items-center gap-1.5 rounded-full border border-book-rule px-3 py-1 text-[11px] font-semibold text-book-soft transition-colors hover:border-emerald-500/50 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 dark:hover:text-emerald-300"
              >
                <Timer className="h-3.5 w-3.5" aria-hidden /> Pomodoro
              </button>
              <button
                onClick={() => window.print()}
                className="ml-1.5 inline-flex items-center gap-1.5 rounded-full border border-book-rule px-3 py-1 text-[11px] font-semibold text-book-soft transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
              >
                <Printer className="h-3.5 w-3.5" aria-hidden /> Print
              </button>
            </span>
          </div>
          <p className="mt-3 font-serif text-[14px] italic text-book-soft">
            From {bookTitle(chapter.bookId)}
          </p>
          <div aria-hidden className="sv-book-rule-double mt-5" />
          {/* AI illustrator — commission a plate for this very lesson */}
          <div className="mt-4">
            <LessonIllustrator
              sectionId={sectionId}
              title={`${section.number} ${section.title}`}
              concepts={(content?.concepts ?? []).slice(0, 6).map((c) => c.term)}
            />
          </div>
        </header>

        {/* mobile (<lg): collapsible "Contents" outline, right under the opening */}
        {tocEntries.length > 0 && (
          <div className="px-5 pt-6 sm:px-10 lg:hidden print:hidden!">
            <button
              type="button"
              onClick={() => setTocOpen((v) => !v)}
              aria-expanded={tocOpen}
              aria-controls="sv-lesson-toc-mobile"
              className="flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-muted/40 px-4 py-2.5 text-left font-sans text-[13px] font-semibold text-book-ink transition-colors duration-200 hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            >
              <span className="flex min-w-0 items-center gap-2">
                <ListTree className="h-4 w-4 shrink-0 text-emerald-500/70 dark:text-emerald-300/70" aria-hidden />
                <span className="truncate">Contents</span>
                <span className="shrink-0 font-mono text-[10px] font-normal tracking-wider text-book-soft">
                  {tocEntries.length} parts
                </span>
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-book-soft transition-transform duration-200 ${
                  tocOpen ? 'rotate-180' : ''
                }`
              }
                aria-hidden
              />
            </button>
            {tocOpen && (
              <motion.div
                id="sv-lesson-toc-mobile"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
                className="mt-2 rounded-xl border border-border bg-card p-2 font-sans"
              >
                <TocList entries={tocEntries} active={activeId} onJump={scrollToAnchor} listClassName="max-h-72" />
              </motion.div>
            )}
          </div>
        )}

        {/* ============ the reading body ============ */}
        <div className="sv-book-body px-5 pb-10 pt-7 sm:px-10 lg:px-14">
          {/* easy-mode switch — one tap, simple words everywhere */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <p className="font-sans text-[12px] text-book-soft">
              Hard words? Turn ON easy help — every idea gets a yellow simple box.
            </p>
            <button
              onClick={() => setEasyMode(!easyMode)}
              aria-pressed={easyMode}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 ${
                easyMode
                  ? 'border-amber-400/50 bg-amber-400/15 text-amber-700 dark:text-amber-200'
                  : 'border-border bg-muted/40 text-muted-foreground hover:text-foreground'
              }`}
            >
              <span aria-hidden>{easyMode ? '💡' : '📖'}</span>
              {easyMode ? 'Easy help: ON' : 'Easy help: OFF'}
            </button>
          </div>
          {easyMode && section && <EasyStart title={`§${section.number} ${section.title}`} />}
          {/* syllabus brief — rendered when this section has no authored lesson content yet,
              so exam-syllabus topics still read as a useful study page instead of an empty one.
              Extracted into its own component: the subtopic-splitting helper receives the
              description inside the child, which keeps the React Compiler's memoization
              analysis of this (parent) component untouched. */}
          {allContent === null && (
            <div className="mt-6 space-y-3" aria-hidden>
              <div className="h-4 w-2/5 animate-pulse rounded bg-muted/50" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-muted/40" />
              <div className="h-4 w-3/5 animate-pulse rounded bg-muted/30" />
            </div>
          )}
          {!content && allContent !== null && section && chapter && (
            <SyllabusBrief
              section={section}
              chapter={chapter}
              prev={prev}
              next={next}
              totalSiblings={siblings.length}
            />
          )}
          {/* lede — the opening paragraph, with a three-line drop cap when it opens on a letter */}
          {content?.intro && (
            <>
              <p className={`sv-book-lede ${canDropcap ? 'sv-book-dropcap' : ''}`}>
                <RichText text={content.intro} />
              </p>
              {easyMode && (
                <EasyBox variant="text" text={`This lesson is about ${section?.title ?? 'this topic'}. Big idea in one breath: ${content.intro.split('.')[0]}. Don't worry about hard symbols yet — yellow boxes will make each part easy.`} />
              )}
            </>
          )}

          {/* prerequisites — academic groundwork & prior competencies */}
          {prerequisitesList?.length ? (
            <section id="prerequisites" className="scroll-mt-24 mt-7 mb-9">
              <div className="rounded-xl border border-book-rule bg-muted/20 px-4 py-3 sm:px-5 sm:py-3.5">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                  <GraduationCap className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden />
                  <span>Prerequisites &amp; Prior Knowledge</span>
                </div>
                <ul className="mt-2.5 flex flex-wrap gap-2">
                  {prerequisitesList.map((req, i) => (
                    <li
                      key={i}
                      className="inline-flex items-center gap-2 rounded-md border border-book-rule/80 bg-background/80 px-2.5 py-1 text-[13px] font-serif text-book-ink shadow-xs"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/80" aria-hidden />
                      <RichText text={req} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          {/* objectives — classic textbook lead-in list */}
          {content?.objectives?.length ? (
            <section id="objectives" className="scroll-mt-24">
              <PartHeading>Objectives</PartHeading>
              <p className="font-serif text-[15px] italic text-book-soft">
                After studying this section, you should be able to:
              </p>
              <ol className="mt-3.5 space-y-2">
                {content.objectives.map((o, i) => (
                  <li key={i} className="flex gap-3.5">
                    <span
                      aria-hidden
                      className="w-6 shrink-0 pt-[0.1rem] text-right font-serif text-[15px] font-semibold text-primary"
                    >
                      {i + 1}.
                    </span>
                    <RichText
                      text={o}
                      className="block text-[0.94em] leading-[1.7] text-book-soft"
                    />
                  </li>
                ))}
              </ol>
              {easyMode && (
                <EasyBox
                  variant="text"
                  text={`Easy goal: by the end you can explain "${section?.title ?? 'this topic'}" to a friend in 2 minutes with simple words. The yellow boxes below are the must-know points.`}
                />
              )}
            </section>
          ) : null}

          {/* asterism — the section break between the opening matter and the body proper */}
          {content?.concepts?.length ? (
            <div aria-hidden className="sv-book-orn select-none text-[15px]">
              ⁂
            </div>
          ) : null}

          {/* the reading proper — concepts flow as numbered subsections, no boxes.
              Each figure plate sits right after the concept it illustrates. */}
          {content?.concepts?.map((c, i) => {
            const kind = KIND[c.kind] ?? KIND.definition
            const label = conceptLabels[i]
            return (
              <Fragment key={i}>
                <motion.section
                  id={`concept-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4 }}
                  className="scroll-mt-24 mt-11 first:mt-0 print:mt-7"
                >
                <h3 className="font-serif text-[1.32rem] font-semibold leading-snug tracking-[-0.008em]">
                  <span className="mr-2.5 font-semibold text-primary">{i + 1}.</span>
                  {c.term}
                </h3>

                {kind.block === 'def' && (
                  <div className="sv-book-def mt-3">
                    <p className="text-[1.01rem]">
                      <span className={`sv-book-label ${kind.color}`}>{label}</span>
                      <RichText text={c.statement} />
                    </p>
                    {c.detail && (
                      <p className="mt-2.5 text-[0.95em] leading-[1.72] text-book-soft">
                        <RichText text={c.detail} />
                      </p>
                    )}
                  </div>
                )}

                {kind.block === 'thm' && (
                  <div className="sv-book-thm">
                    <p className="text-[1.01rem]">
                      <span className={`sv-book-label ${kind.color}`}>{label}</span>
                      <RichText text={c.statement} />
                    </p>
                    {c.detail && (
                      <p className="mt-2.5 text-[0.95em] leading-[1.72] text-book-soft">
                        <RichText text={c.detail} />
                      </p>
                    )}
                  </div>
                )}

                {kind.block === 'note' && (
                  <aside className="sv-book-note">
                    <p>
                      <span aria-hidden className="mr-2 align-middle text-[1.05em] text-rose-500 dark:text-rose-300">
                        ☞
                      </span>
                      <span className={`sv-book-label ${kind.color}`}>{label}</span>
                      <RichText text={c.statement} />
                    </p>
                    {c.detail && (
                      <p className="mt-2.5 text-[0.95em] leading-[1.72]">
                        <RichText text={c.detail} />
                      </p>
                    )}
                  </aside>
                )}

                {!kind.block && (
                  <>
                    <p className="mt-3 text-[1.01rem]">
                      <span className={`sv-book-label ${kind.color}`}>{label}</span>
                      <RichText text={c.statement} />
                    </p>
                    {c.detail && (
                      <p className="mt-2.5 text-[0.95em] leading-[1.72] text-book-soft">
                        <RichText text={c.detail} />
                      </p>
                    )}
                  </>
                )}
                {easyMode && (
                  <div className="font-sans text-[14px] leading-normal">
                    <EasyBox variant="concept" term={c.term} statement={c.statement} detail={c.detail} />
                  </div>
                )}
                </motion.section>

                {/* figure plates tied to this concept */}
                {figures
                  .filter((fig) => fig.afterConcept === i + 1)
                  .map((fig) => (
                    <BookFigure
                      key={`fig-${figures.indexOf(fig)}`}
                      figure={fig}
                      number={figures.indexOf(fig) + 1}
                      chapterId={section?.chapterId}
                    />
                  ))}
              </Fragment>
            )
          })}

          {/* figure plates that follow the whole concept run */}
          {figures
            .filter((fig) => fig.afterConcept === undefined)
            .map((fig) => (
              <BookFigure
                key={`fig-${figures.indexOf(fig)}`}
                figure={fig}
                number={figures.indexOf(fig) + 1}
                chapterId={section?.chapterId}
              />
            ))}

          {/* the deeper results — not a separate compartment but the section's
              own theory, continued: each tier is another numbered subsection,
              with a quiet tag naming what it is. The strongest problems and the
              subject itself are built on what follows here. */}
          {content?.depth?.length ? (
            <div className="mt-4">
              <div aria-hidden className="sv-book-orn select-none text-[15px]">
                ⁂
              </div>
              <p className="font-serif text-[15px] italic text-book-soft">
                The section continues: the results below take the same theory further — the
                theorems with their proofs, the derivations, and where the frontier lies.
              </p>
              {content.depth.map((tier, i) => (
                <DepthTierView key={tier.tier + i} tier={tier} number={(content.concepts?.length ?? 0) + i + 1} index={i} />
              ))}
            </div>
          ) : null}

          {/* detailed mathematical & theoretical derivations */}
          {content?.derivations?.length ? (
            <section className="mt-14 print:mt-8">
              <PartHeading>Detailed derivations</PartHeading>
              <p className="font-serif text-[15px] italic text-book-soft mb-6">
                Step-by-step mathematical and conceptual proofs leading to the governing principles:
              </p>
              <div className="space-y-12 print:space-y-7">
                {content.derivations.map((d, i) => (
                  <BookDerivation key={i} index={i} derivation={d} anchorId={`derivation-${i}`} />
                ))}
              </div>
            </section>
          ) : null}

          {/* worked examples — hairline rules, run-in Problem./Result., progressive reveal */}
          {content?.examples?.length ? (
            <section className="mt-14 print:mt-8">
              <PartHeading>Worked examples</PartHeading>
              <div className="space-y-12 print:space-y-7">
                {content.examples.map((ex, i) => (
                  <BookExample key={i} index={i} example={ex} anchorId={`example-${i}`} chapterId={chapter.id} />
                ))}
              </div>
            </section>
          ) : null}

          {/* flashcards invitation — a quiet marginal line, not a banner */}
          {content?.concepts?.length ? (
            <div className="my-10 flex flex-wrap items-center justify-between gap-3 print:hidden">
              <p className="font-serif text-[15px] italic text-book-soft">
                Drill the {content.concepts.length} concepts of this section as flashcards?
              </p>
              <button
                onClick={() => navigate({ name: 'flashcards', chapterId: chapter.id })}
                className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-[12px] font-semibold text-amber-700 transition-colors hover:bg-amber-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 dark:text-amber-300"
              >
                <Zap className="h-3.5 w-3.5" aria-hidden /> Open drill deck
              </button>
            </div>
          ) : null}

          {/* the interactive figure — the one place a modern book goes beyond paper */}
          {lessonSimKey ? (
            <section className="mt-4 print:hidden">
              <PartHeading>Try it — interactive figure</PartHeading>
              <div className="overflow-hidden rounded-xl border border-book-rule font-sans text-[14px] leading-normal text-foreground">
                <InteractiveTool toolKey={lessonSimKey} />
              </div>
            </section>
          ) : null}

          {/* in summary — the closing enumeration, like an end-of-section recap */}
          {content?.keyTakeaways?.length ? (
            <section id="takeaways" className="scroll-mt-24">
              <div aria-hidden className="sv-book-orn select-none text-[15px]">
                ⁂
              </div>
              <PartHeading>In summary</PartHeading>
              <ol className="space-y-2.5">
                {content.keyTakeaways.map((t, i) => (
                  <li key={i} className="flex gap-3.5">
                    <span
                      aria-hidden
                      className="w-6 shrink-0 pt-[0.15rem] text-right font-serif text-[15px] font-semibold text-primary"
                    >
                      {i + 1}.
                    </span>
                    <span className="flex-1">
                      <RichText text={t} className="block text-[0.96em] leading-[1.72]" />
                      {easyMode && <EasyBox variant="text" text={t} />}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {/* personal notes — a margin to write in */}
          <section className="mt-14">
            <PartHeading>Your notes</PartHeading>
            <div className="font-sans text-[14px] leading-normal">
              <NotesPanel sectionId={sectionId} />
            </div>
          </section>

          {/* check yourself — the end-of-section self test */}
          {content?.quiz?.length ? (
            <section className="mt-14">
              <PartHeading>Check yourself</PartHeading>
              <div id="quiz" className="scroll-mt-24 print:hidden">
                <QuizSection sectionId={sectionId} quiz={content.quiz} />
              </div>
            </section>
          ) : null}

          {/* save to review — X10: seed this lesson into the SM-2 deck */}
          {content ? (
            <div className="print:hidden">
              <SaveToReview sectionId={sectionId} />
            </div>
          ) : null}

          {/* colophon / folio — how a book closes a page */}
          <div className="mt-14 text-center">
            <div aria-hidden className="sv-book-orn select-none text-[15px]">
              ⁂
            </div>
            <p className="sv-book-folio">
              End of §{section.number} · {bookTitle(chapter.bookId)}
            </p>
          </div>

          {/* verso / recto navigation */}
          <nav
            className="mt-10 grid gap-5 border-t border-book-rule pt-6 font-serif sm:grid-cols-2 print:hidden"
            aria-label="Section navigation"
          >
            {prev ? (
              <button
                onClick={() => navigate({ name: 'lesson', sectionId: prev.id })}
                aria-label={`Go to previous section: §${prev.number} ${prev.title}`}
                className="group w-full text-left focus-visible:outline-none"
              >
                <span className="sv-book-label block text-book-soft">
                  <ArrowLeft
                    className="mr-1 inline h-3.5 w-3.5 align-[-2px] transition-transform group-hover:-translate-x-1"
                    aria-hidden
                  />
                  Previous · §{prev.number}
                </span>
                <span className="mt-0.5 block text-[1.02rem] font-medium leading-snug decoration-book-rule underline-offset-4 transition-colors group-hover:text-primary group-hover:underline">
                  {prev.title}
                </span>
              </button>
            ) : (
              <span />
            )}
            {next ? (
              <button
                onClick={() => navigate({ name: 'lesson', sectionId: next.id })}
                aria-label={`Go to next section: §${next.number} ${next.title}`}
                className="group w-full text-left sm:text-right focus-visible:outline-none"
              >
                <span className="sv-book-label block text-book-soft">
                  Next · §{next.number}
                  <ArrowRight
                    className="ml-1 inline h-3.5 w-3.5 align-[-2px] transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
                <span className="mt-0.5 block text-[1.02rem] font-medium leading-snug decoration-book-rule underline-offset-4 transition-colors group-hover:text-primary group-hover:underline">
                  {next.title}
                </span>
              </button>
            ) : (
              <button
                onClick={() => navigate({ name: 'chapter', chapterId: chapter.id })}
                aria-label={`Back to chapter ${chapter.number} overview — ${chapter.shortTitle}`}
                className="group w-full text-left sm:text-right focus-visible:outline-none"
              >
                <span className="sv-book-label block text-book-soft">End of chapter</span>
                <span className="mt-0.5 block text-[1.02rem] font-medium leading-snug decoration-book-rule underline-offset-4 transition-colors group-hover:text-primary group-hover:underline">
                  Back to {chapter.shortTitle}
                </span>
              </button>
            )}
          </nav>

          {/* print-only running foot */}
          <p className="mt-8 hidden text-center font-sans text-[10px] text-zinc-500 print:block">
            StudyVerse · {bookTitle(chapter.bookId)} · §{section.number} {section.title}
          </p>
        </div>

        {/* "was here" — jump back to the last reading position */}
        <ResumePill target={restore.target} visible={restore.visible} below={restore.below} onJump={restore.jump} />
      </article>

      {/* the lesson that talks back — Listen + voice Q&A */}
      <VoiceTutor sectionId={sectionId} lessonTitle={`§${section.number} ${section.title}`} blocks={voiceBlocks} />
    </div>
  )
}

/* ------------------------ mini-TOC (outline + scroll-spy) ------------------------ */

/** one entry of the lesson outline, anchored to an element id in the article */
type TocEntry = { id: string; label: string; item: boolean }

/** Highlight the outline entry whose anchor sits at the reading line.
 *  IntersectionObserver over the anchors (band = just below the sticky header
 *  down to ~45% of the viewport), with a geometry fallback for the very
 *  top/bottom of the page. Pure color swap — no motion. */
function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState('')
  const key = ids.join('|')
  useEffect(() => {
    if (!key) return
    const els = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (els.length === 0) return

    const visible = new Set<string>()
    const apply = (id: string) => setActive((prev) => (prev === id ? prev : id))
    const pickByGeometry = () => {
      let current = ''
      for (const el of els) {
        if (el.getBoundingClientRect().top <= 132) current = el.id
      }
      return current || (els[0]?.id ?? '')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        const inOrder = els.filter((el) => visible.has(el.id))
        apply(inOrder.length > 0 ? inOrder[inOrder.length - 1].id : pickByGeometry())
      },
      // active band: a touch below the sticky header down to ~45% of the viewport
      { rootMargin: '-96px 0px -55% 0px' }
    )
    els.forEach((el) => observer.observe(el))

    const onScroll = () => {
      if (visible.size > 0) return // the observer owns the common case
      apply(pickByGeometry())
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [key])
  return active
}

/** shared outline list — mono numbered chips, emerald active marker, truncation */
function TocList({
  entries,
  active,
  onJump,
  listClassName,
}: {
  entries: TocEntry[]
  active: string
  onJump: (id: string) => void
  listClassName?: string
}) {
  return (
    <ul className={`grid gap-0.5 overflow-y-auto ${listClassName ?? ''}`}>
      {entries.map((e, i) => {
        const isActive = active === e.id
        return (
          <li key={e.id}>
            <button
              type="button"
              onClick={() => onJump(e.id)}
              aria-current={isActive ? 'location' : undefined}
              title={e.label}
              className={`flex w-full items-center gap-2 border-l-2 py-1.5 pr-2 text-left text-[12.5px] leading-snug transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 ${
                e.item ? 'pl-5' : 'pl-3'
              } ${
                isActive
                  ? 'border-emerald-400 bg-emerald-400/10 font-medium text-emerald-700 dark:text-emerald-300'
                  : 'border-transparent text-muted-foreground hover:bg-muted/40 hover:text-foreground'
              }`}
            >
              <span
                aria-hidden
                className={`w-5 shrink-0 font-mono text-[10px] tracking-wider ${
                  isActive ? 'text-emerald-600/90 dark:text-emerald-300/90' : 'text-muted-foreground/60'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="truncate" title={e.label}>{e.label}</span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

/** a book part heading — small caps over a hairline that runs to the margin */
function PartHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <h2 className="font-serif text-[13px] font-semibold uppercase tracking-[0.2em] text-book-ink">
        {children}
      </h2>
      <span aria-hidden className="h-px flex-1 bg-book-rule" />
    </div>
  )
}

/* --------- the deeper results — the theory, continued inline --------- */

/** how each run of deeper results names itself — a quiet tag after the
 *  subsection title, not a level system. It tells the reader what this
 *  material is and why it earns its place on the page. */
const TIER_TAG: Record<DepthTier['tier'], { text: string; frontier: boolean }> = {
  masters: { text: 'deeper theory · worth mastering', frontier: false },
  phd: { text: 'the research frontier', frontier: true },
}

/** one run of deeper results — a numbered subsection like any other in the
 *  section, its blocks flowing in the book's own vocabulary (theorems with
 *  proofs, derivations, remarks, open problems). */
function DepthTierView({ tier, number, index }: { tier: DepthTier; number: number; index: number }) {
  const tag = TIER_TAG[tier.tier] ?? TIER_TAG.masters
  const easyMode = useStudy((s) => s.easyMode)
  return (
    <motion.section
      id={`depth-${index}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4 }}
      className="scroll-mt-24 mt-11 print:mt-7"
    >
      <h3 className="font-serif text-[1.32rem] font-semibold leading-snug tracking-[-0.008em]">
        <span className="mr-2.5 font-semibold text-primary">{number}.</span>
        {tier.title}
        <span className={`sv-depth-tag ${tag.frontier ? 'sv-depth-tag--frontier' : ''}`}>
          <span aria-hidden className="mr-1">✦</span>
          {tag.text}
        </span>
      </h3>
      {easyMode && (
        <div className="font-sans text-[14px] leading-normal">
          <EasyBox
            variant="text"
            text={`Easy idea of "${tier.title}": same topic you just read, but one level deeper. Skip now if hard — come back after quiz. Main point first, details later.`}
          />
        </div>
      )}
      {tier.blocks.map((b, i) => (
        <DepthBlockView key={i} block={b} />
      ))}
    </motion.section>
  )
}

/** one block of graduate material, set in the book's own vocabulary */
function DepthBlockView({ block }: { block: DepthBlock }) {
  switch (block.kind) {
    case 'theorem':
      return (
        <div className="sv-book-thm mt-3.5">
          <p className="text-[1.01rem]">
            <span className="sv-book-label text-amber-600 dark:text-amber-300">
              {block.heading ? `Theorem (${block.heading}).` : 'Theorem.'}
            </span>
            <RichText text={block.body} />
          </p>
        </div>
      )
    case 'proof':
      return (
        <div className="sv-book-proof">
          <p className="text-[0.99em] leading-[1.78]">
            <span className="sv-book-label-proof">Proof.</span>
            <RichText text={block.body} />
            <span aria-hidden className="sv-book-qed" />
          </p>
        </div>
      )
    case 'derivation':
      return (
        <div className="sv-book-deriv">
          {block.heading && <p className="sv-book-label text-primary">{block.heading}</p>}
          <RichText text={block.body} className="block text-[0.99em] leading-[1.78]" />
        </div>
      )
    case 'remark':
      return (
        <aside className="sv-book-note">
          <p>
            <span
              aria-hidden
              className="mr-2 align-middle text-[1.05em] text-rose-500 dark:text-rose-300"
            >
              ☞
            </span>
            <span className="sv-book-label text-rose-500 dark:text-rose-300">Remark.</span>
            <RichText text={block.body} />
          </p>
        </aside>
      )
    case 'example':
      return (
        <div className="sv-book-dexample">
          <p className="sv-book-dex-head">Example — {block.heading}</p>
          <RichText text={block.body} className="block text-[0.99em] leading-[1.78]" />
        </div>
      )
    case 'application':
      return (
        <p className="mt-3.5 text-[1.01rem]">
          <span className="sv-book-label text-teal-600 dark:text-teal-300">
            {block.heading ? `Application — ${block.heading}.` : 'Application.'}
          </span>
          <RichText text={block.body} />
        </p>
      )
    case 'open':
      return (
        <div className="sv-book-open">
          <p>
            <span className="sv-book-label text-amber-600 dark:text-amber-300">
              {block.heading ? `Open — ${block.heading}.` : 'Open problem.'}
            </span>
            <RichText text={block.body} />
          </p>
        </div>
      )
    default:
      return (
        <p className="mt-3.5 text-[1.01rem]">
          <RichText text={block.body} />
        </p>
      )
  }
}

/* -------------------- the figure plate, set like a textbook -------------------- */

/** Helper to infer authentic hand-drawn laboratory sketchbook image and notes */
function getFigureSketch(figure: LessonFigure, chapterId?: string): { image: string; caption: string } | null {
  if (figure.sketchImage) {
    return { image: figure.sketchImage, caption: figure.sketchCaption || figure.caption }
  }
  const cid = chapterId || ''
  const cap = figure.caption.toLowerCase()
  if (cid.includes('ch29') || cap.includes('bohr') || cap.includes('balmer') || cap.includes('hydrogen')) {
    return {
      image: '/diagrams/bohr_atom_sketch.jpg',
      caption: 'Field Laboratory Notebook: Bohr quantized atomic energy levels (n=1..4), Balmer line transitions, and Rydberg formula derivation.'
    }
  }
  if (cid.includes('ch3') || cap.includes('projectile') || cap.includes('trajectory') || cap.includes('parabola')) {
    return {
      image: '/diagrams/projectile_trajectory_sketch.jpg',
      caption: 'Engineering Study Sketch: 2D parabolic trajectory, kinematic decomposition (v_x, v_y), apex height, and range formula.'
    }
  }
  if (cid.includes('ch27') || cid.includes('ch24') || cap.includes('interference') || cap.includes('double slit') || cap.includes('slit')) {
    return {
      image: '/diagrams/double_slit_sketch.jpg',
      caption: 'Laboratory Notebook: Young\'s double-slit experiment, path difference d sin θ, interference pattern, and intensity distribution graph.'
    }
  }
  if (cid.includes('ch4') || cid.includes('ch5') || cap.includes('incline') || cap.includes('friction') || cap.includes('free body')) {
    return {
      image: '/diagrams/incline_freebody_sketch.jpg',
      caption: 'Mechanics Notebook: Inclined plane free-body force diagram, normal/friction vectors, coordinate tilt, and Newton\'s second law.'
    }
  }
  if (cid.includes('ch14') || cid.includes('ch15') || cid.includes('ch16') || cap.includes('doppler') || cap.includes('sound') || cap.includes('wavefront')) {
    return {
      image: '/diagrams/doppler_sound_sketch.jpg',
      caption: 'Acoustics Notebook: Moving sound source, wavefront compression ahead, rarefaction behind, and frequency vs time drop.'
    }
  }
  if (cid.includes('ch18') || cid.includes('ch19') || cap.includes('circuit') || cap.includes('resistor') || cap.includes('ohm') || cap.includes('kirchhoff')) {
    return {
      image: '/diagrams/electric_circuit_sketch.jpg',
      caption: 'Circuit Theory Notebook: DC series-parallel network, Kirchhoff\'s voltage loop rule, and linear resistor I-V characteristic curve.'
    }
  }
  if (cid.includes('ch23') || cid.includes('ch25') || cap.includes('snell') || cap.includes('refraction') || cap.includes('internal reflection')) {
    return {
      image: '/diagrams/optics_refraction_sketch.jpg',
      caption: 'Optics Laboratory Notebook: Snell\'s law of refraction, normal angle deflection, θ₂ vs θ₁ graph, and total internal reflection.'
    }
  }
  return null
}

function BookFigure({
  figure,
  number,
  chapterId
}: {
  figure: LessonFigure
  number: number
  chapterId?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [plateMode, setPlateMode] = useState<'textbook' | 'sketch'>('textbook')

  const sketch = useMemo(() => getFigureSketch(figure, chapterId), [figure, chapterId])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  return (
    <>
      <figure className="my-9 print:break-inside-avoid group">
        {/* Optional Plate View Mode Switcher */}
        {sketch && (
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
              Illustration Plate {number}
            </span>
            <div className="flex items-center rounded-lg border border-border/80 bg-background/90 p-0.5 text-[11px] font-medium shadow-xs">
              <button
                type="button"
                onClick={() => setPlateMode('textbook')}
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded-md transition-all ${
                  plateMode === 'textbook'
                    ? 'bg-primary/15 text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span>Textbook SVG</span>
              </button>
              <button
                type="button"
                onClick={() => setPlateMode('sketch')}
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded-md transition-all ${
                  plateMode === 'sketch'
                    ? 'bg-amber-500/20 text-amber-500 dark:text-amber-400 font-semibold shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                title="View authentic hand-drawn scientific notebook sketch & notes"
              >
                <Pencil className="h-3 w-3" />
                <span>Field Study Sketch</span>
              </button>
            </div>
          </div>
        )}

        <div className="relative border-y border-book-rule py-4 text-zinc-700 dark:text-zinc-300 transition-colors group-hover:border-primary/40">
          {plateMode === 'sketch' && sketch ? (
            /* Authentic Hand-drawn Notebook Sketch View */
            <div
              className="relative mx-auto w-full max-w-[860px] overflow-hidden rounded-lg border border-amber-600/30 bg-zinc-950 p-2 shadow-inner cursor-zoom-in group/img"
              onClick={() => setIsOpen(true)}
              title="Click to view full-resolution sketchbook plate"
            >
              <img
                src={sketch.image}
                alt={sketch.caption}
                className="w-full h-auto max-h-[460px] object-contain rounded mx-auto"
              />
              <div className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2.5 py-1 text-[11px] font-mono text-amber-300 border border-amber-400/30 shadow-md">
                ✏️ Student Laboratory Notebook
              </div>
            </div>
          ) : (
            /* Authored Textbook SVG Plate */
            <div
              className="mx-auto w-full max-w-[860px] cursor-zoom-in [&_svg]:block [&_svg]:h-auto [&_svg]:w-full"
              onClick={() => setIsOpen(true)}
              title="Click to enlarge diagram"
              dangerouslySetInnerHTML={{ __html: figure.svg }}
            />
          )}

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 text-[11px] font-sans font-medium rounded bg-background/80 hover:bg-background border border-book-rule shadow-sm opacity-0 group-hover:opacity-100 transition-opacity print:hidden text-book-soft hover:text-foreground"
            aria-label="Enlarge figure"
          >
            <Maximize2 className="h-3 w-3" />
            <span>Enlarge</span>
          </button>
        </div>

        <figcaption className="mx-auto mt-2.5 max-w-[880px] text-center">
          <span className="sv-book-label text-primary">Figure {number}.</span>{' '}
          <span className="font-serif text-[13.5px] italic leading-relaxed text-book-soft">
            <RichText text={plateMode === 'sketch' && sketch ? sketch.caption : figure.caption} />
          </span>
        </figcaption>
      </figure>

      {/* Lightbox Enlarged View Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-[95vw] sm:max-w-5xl w-full flex flex-col rounded-xl bg-card border border-book-rule shadow-2xl overflow-hidden p-6 text-foreground"
            >
              <div className="flex items-center justify-between pb-3 border-b border-book-rule">
                <div className="flex items-center gap-3">
                  <div className="text-sm font-semibold tracking-wide text-primary">
                    Figure {number} · Expanded View
                  </div>
                  {sketch && (
                    <div className="flex items-center rounded-lg border border-border/80 bg-background/90 p-0.5 text-[11px] font-medium">
                      <button
                        type="button"
                        onClick={() => setPlateMode('textbook')}
                        className={`px-2 py-0.5 rounded transition-all ${
                          plateMode === 'textbook'
                            ? 'bg-primary/20 text-primary font-semibold'
                            : 'text-muted-foreground'
                        }`}
                      >
                        Textbook
                      </button>
                      <button
                        type="button"
                        onClick={() => setPlateMode('sketch')}
                        className={`px-2 py-0.5 rounded transition-all ${
                          plateMode === 'sketch'
                            ? 'bg-amber-500/20 text-amber-400 font-semibold'
                            : 'text-muted-foreground'
                        }`}
                      >
                        Field Sketch
                      </button>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  aria-label="Close enlarged figure"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="my-auto py-6 overflow-auto max-h-[68vh] flex items-center justify-center">
                {plateMode === 'sketch' && sketch ? (
                  <img
                    src={sketch.image}
                    alt={sketch.caption}
                    className="max-h-[62vh] w-auto max-w-full rounded shadow-xl"
                  />
                ) : (
                  <div
                    className="[&_svg]:max-h-[60vh] [&_svg]:w-auto [&_svg]:max-w-full [&_svg]:mx-auto"
                    dangerouslySetInnerHTML={{ __html: figure.svg }}
                  />
                )}
              </div>

              <div className="pt-3 border-t border-book-rule text-center font-serif text-[14px] italic text-book-soft">
                <RichText text={plateMode === 'sketch' && sketch ? sketch.caption : figure.caption} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ---------------- detailed derivation, set like a textbook ---------------- */

function BookDerivation({
  index,
  derivation,
  anchorId,
}: {
  index: number
  derivation: DetailedDerivation
  anchorId?: string
}) {
  const [openSteps, setOpenSteps] = useState(derivation.steps.length + 1)
  const [expandAll, setExpandAll] = useState(true)
  const total = derivation.steps.length + 1 // steps + result
  const finished = openSteps >= total

  return (
    <motion.article
      id={anchorId}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4 }}
      className="scroll-mt-24 border-t border-book-rule pt-5 print:break-inside-avoid"
    >
      {/* derivation header — small-cap label, hairline, running title */}
      <header className="flex flex-wrap items-baseline gap-3.5">
        <span className="sv-book-label shrink-0 text-primary">Derivation {index + 1}</span>
        <span aria-hidden className="h-px flex-1 min-w-8 bg-book-rule" />
        <span className="font-serif text-[1.15rem] font-semibold leading-snug">{derivation.title}</span>
        <div className="shrink-0 flex items-center gap-2 font-sans text-[11px] font-medium text-book-soft print:hidden">
          <span>{expandAll ? `${total}/${total}` : `${Math.min(openSteps, total)}/${total}`}</span>
          <button
            type="button"
            onClick={() => {
              if (expandAll) {
                setExpandAll(false)
                setOpenSteps(1)
              } else {
                setExpandAll(true)
                setOpenSteps(total)
              }
            }}
            className="rounded px-2 py-0.5 text-[11px] font-medium text-primary hover:bg-primary/10 transition-colors"
          >
            {expandAll ? 'Step-by-step view' : 'Show all'}
          </button>
        </div>
      </header>

      {/* statement / theorem to derive */}
      <div className="mt-3.5 rounded-lg border border-primary/20 bg-primary/5 p-3.5 text-[1.01rem]">
        <p className="font-serif">
          <span className="sv-book-label text-primary">Target Result ·</span>
          <RichText text={derivation.statement} />
        </p>
        {derivation.prerequisites && derivation.prerequisites.length > 0 && (
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5 pt-2 border-t border-primary/15 text-[12px] font-sans text-book-soft">
            <span className="font-semibold text-primary/80">Assumes:</span>
            {derivation.prerequisites.map((p, pi) => (
              <span key={pi} className="rounded bg-background/80 px-2 py-0.5 border border-book-rule">
                <RichText text={p} />
              </span>
            ))}
          </div>
        )}
      </div>

      {/* steps rendering */}
      <div className="mt-4 space-y-4">
        {(expandAll ? derivation.steps : derivation.steps.slice(0, openSteps)).map((s, i) => (
          <div key={i} className="sv-book-deriv print:block">
            <div className="flex items-center gap-2">
              <span className="sv-book-label text-teal-600 dark:text-teal-300">
                {s.label}
              </span>
            </div>
            {s.formula && (
              <div className="my-2 py-1 text-center font-serif text-[1.05rem]">
                <RichText text={s.formula} />
              </div>
            )}
            <div className="text-[0.98em] leading-[1.74] text-book-soft">
              <RichText text={s.explanation} />
            </div>
          </div>
        ))}
      </div>

      {/* final result */}
      {(expandAll || openSteps >= derivation.steps.length) && (
        <div className="mt-5 rounded-lg border-2 border-emerald-500/30 bg-emerald-500/5 p-4 text-[1.01rem] dark:bg-emerald-950/20">
          <p className="font-serif">
            <span className="sv-book-label text-emerald-600 dark:text-emerald-400">Conclusion ·</span>
            <RichText text={derivation.result} />
            <span className="sv-book-qed ml-2" role="img" aria-label="Q.E.D." />
          </p>
        </div>
      )}

      {/* progressive reveal button if not in expandAll mode */}
      {!expandAll && (
        <div className="mt-4 print:hidden">
          <button
            onClick={() => setOpenSteps((v) => Math.min(v + 1, total))}
            disabled={finished}
            className={`inline-flex items-center gap-1.5 text-[12.5px] font-semibold underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 ${
              finished
                ? 'cursor-default text-book-soft no-underline'
                : 'text-primary decoration-primary/35 hover:decoration-primary'
            }`}
          >
            {finished ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden /> Derivation complete
              </>
            ) : (
              <>
                <ChevronDown className="h-3.5 w-3.5 text-primary" aria-hidden /> Reveal next step ({openSteps} of {total})
              </>
            )}
          </button>
        </div>
      )}
    </motion.article>
  )
}

/* -------------------- worked example, set like a textbook -------------------- */

/** Easy wrapper: only shows when easyMode is ON. Keeps hooks safe. */
function EasyModeExample({ problem }: { problem: string }) {
  const easyMode = useStudy((s) => s.easyMode)
  if (!easyMode) return null
  return (
    <div className="font-sans text-[14px] leading-normal">
      <EasyBox variant="example" problem={problem} />
    </div>
  )
}

function EasyModeQuiz({ explanation }: { explanation: string }) {
  const easyMode = useStudy((s) => s.easyMode)
  if (!easyMode) return null
  return <EasyBox variant="quiz" explanation={explanation} />
}

function BookExample({
  index,
  example,
  anchorId,
  chapterId,
}: {
  index: number
  example: { title: string; problem: string; steps: { label: string; text: string }[]; result?: string; diagram?: string }
  anchorId?: string
  chapterId?: string
}) {
  const [openSteps, setOpenSteps] = useState(0)
  const [showDiagram, setShowDiagram] = useState(false)
  const total = example.steps.length + (example.result ? 1 : 0)
  const finished = openSteps >= total
  // Only offer the visual-diagram toggle when a genuine diagram exists
  const hasDiagram =
    Boolean(example.diagram) ||
    detectDiagramTopic(
      example.problem,
      example.result || example.steps.map((s) => s.text).join(' '),
      chapterId
    ) !== null

  return (
    <motion.article
      id={anchorId}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4 }}
      className="scroll-mt-24 border-t border-book-rule pt-5 print:break-inside-avoid"
    >
      {/* example heading — small-cap label, hairline, running title */}
      <header className="flex items-baseline gap-3.5">
        <span className="sv-book-label shrink-0 text-primary">Example {index + 1}</span>
        <span aria-hidden className="h-px flex-1 bg-book-rule" />
        <span className="font-serif text-[1.1rem] font-semibold leading-snug">{example.title}</span>
        <span className="shrink-0 font-sans text-[11px] font-medium text-book-soft print:hidden">
          {Math.min(openSteps, total)}/{total}
        </span>
      </header>

      <p className="mt-3.5 text-[1.01rem]">
        <em className="font-semibold">Problem.</em>{' '}
        <RichText text={example.problem} />
      </p>
      <EasyModeExample problem={example.problem} />

      {/* progressive reveal on screen — active recall, one step at a time */}
      <div className="print:hidden">
        <AnimatePresence initial={false}>
          {example.steps.slice(0, openSteps).map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-2.5 flex gap-3.5"
            >
              <span className="sv-book-label shrink-0 pt-[0.3rem] text-teal-600 dark:text-teal-300">
                {s.label}
              </span>
              <RichText text={s.text} className="block leading-[1.75]" />
            </motion.div>
          ))}
        </AnimatePresence>

        {example.result && openSteps >= example.steps.length && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-[1.01rem]"
          >
            <em className="font-semibold">Result.</em> <RichText text={example.result} />
            <span className="sv-book-qed" role="img" aria-label="conclusion" />
          </motion.p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setOpenSteps((v) => Math.min(v + 1, total))}
            disabled={finished}
            className={`inline-flex items-center gap-1.5 text-[12.5px] font-semibold underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 ${
              finished
                ? 'cursor-default text-book-soft no-underline'
                : 'text-primary decoration-primary/35 hover:decoration-primary'
            }`}
          >
            {finished ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> Example complete
              </>
            ) : (
              <>
                <ChevronDown className="h-3.5 w-3.5" aria-hidden /> Reveal step {openSteps + 1} of {total}
              </>
            )}
          </button>
          <span className="text-muted-foreground/30 print:hidden">·</span>
          {hasDiagram && (
            <button
              type="button"
              onClick={() => setShowDiagram((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/40 px-3 py-1 text-[11.5px] font-medium text-muted-foreground hover:border-emerald-500/50 hover:text-foreground transition-all"
            >
              <Atom className="h-3.5 w-3.5 text-emerald-400" />
              <span>{showDiagram ? 'Hide visual diagram' : 'Visual diagram solution'}</span>
            </button>
          )}
        </div>

        {showDiagram && hasDiagram && (
          <div className="mt-3">
            <VisualDiagramSolver
              questionText={example.problem}
              explanation={example.result || example.steps.map((s) => s.text).join(' ')}
              customDiagram={example.diagram}
              chapterId={chapterId}
              initiallyOpen={true}
            />
          </div>
        )}
      </div>

      {/* print-only: full worked solution, every step + result, no clicks needed */}
      <div className="hidden print:block">
        {example.steps.map((s, i) => (
          <p key={`p-${i}`} className="mt-2 flex gap-3.5">
            <span className="sv-book-label shrink-0 text-zinc-700">{s.label}</span>
            <RichText text={s.text} className="block leading-[1.7]" />
          </p>
        ))}
        {example.result && (
          <p className="mt-2.5 font-medium">
            <em className="font-semibold">Result.</em> <RichText text={example.result} />
            <span className="sv-book-qed" aria-label="conclusion" />
          </p>
        )}
      </div>
    </motion.article>
  )
}

/* ------------------------- end-of-section self test ------------------------- */

function QuizSection({
  sectionId,
  quiz: rawQuiz,
}: {
  sectionId: string
  quiz: (QuizQuestion | undefined)[]
}) {
  const quiz = useMemo(
    () =>
      rawQuiz
        .filter((q): q is QuizQuestion => Boolean(q && q.q))
        // Balance answer positions (A–D); the graded answer travels with its
        // option text (see @/lib/quiz-shuffle). Deterministic per question.
        .map((q) => ({ ...q, ...shuffleQuizOptions(q) })),
    [rawQuiz]
  )
  const recordQuiz = useStudy((s) => s.recordQuiz)
  const markCompleted = useStudy((s) => s.markCompleted)
  const navigate = useStudy((s) => s.navigate)

  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<number[]>([])
  const [finished, setFinished] = useState(false)
  const [showDiagram, setShowDiagram] = useState(false)

  const question = quiz[current]
  const score = answers.reduce((acc, a, i) => acc + (a === quiz[i].answer ? 1 : 0), 0)
  // Only offer the visual-diagram toggle when a genuine diagram exists for this question
  const hasDiagram =
    question &&
    (Boolean(question.diagram) ||
      detectDiagramTopic(question.q, question.explanation, sectionId) !== null)

  const submit = (idx: number) => {
    if (selected !== null) return
    setSelected(idx)
  }

  const nextQ = () => {
    const newAnswers = [...answers, selected ?? -1]
    setAnswers(newAnswers)
    setSelected(null)
    setShowDiagram(false)
    if (current + 1 < quiz.length) {
      setCurrent(current + 1)
    } else {
      setFinished(true)
      const finalScore = newAnswers.reduce((acc, a, i) => acc + (a === quiz[i].answer ? 1 : 0), 0)
      recordQuiz(sectionId, finalScore, quiz.length)
      logActivity('quiz')
      if (finalScore >= Math.ceil(quiz.length * 0.6)) markCompleted(sectionId)
    }
  }

  const retry = () => {
    setCurrent(0)
    setSelected(null)
    setAnswers([])
    setFinished(false)
    setShowDiagram(false)
  }

  if (finished) {
    const pct = Math.round((score / quiz.length) * 100)
    const good = pct >= 60
    // circular score ring (r=52 → circumference ≈ 326.7)
    const CIRC = 2 * Math.PI * 52
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-md border p-7 text-center ${
          good ? 'border-emerald-500/40 bg-emerald-500/[0.06]' : 'border-amber-500/40 bg-amber-400/[0.05]'
        }`}
      >
        <div className="relative mx-auto h-32 w-32" role="img" aria-label={`Score ${score} of ${quiz.length}, ${pct} percent`}>
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle cx="60" cy="60" r="52" fill="none" strokeWidth="8" className="stroke-book-rule" />
            <motion.circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              initial={{ strokeDashoffset: CIRC }}
              animate={{ strokeDashoffset: CIRC * (1 - pct / 100) }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className={good ? 'stroke-emerald-500' : 'stroke-amber-400'}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-serif text-[1.9rem] font-semibold leading-none text-primary">
              {score}
              <span className="text-[1.05rem] text-book-soft"> / {quiz.length}</span>
            </span>
            <span className="mt-1 font-sans text-[11px] font-medium text-book-soft">{pct}% correct</span>
          </div>
        </div>
        <p className="mt-4 font-serif text-[15px] italic text-book-soft">
          {good ? 'Section mastered — nice work.' : 'Almost there — review the notes and retry.'}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 font-sans">
          <button
            onClick={retry}
            className="rounded-md border border-book-rule px-4 py-2 text-xs font-semibold text-book-ink transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
          >
            Retry quiz
          </button>
          <button
            onClick={() => {
              markCompleted(sectionId)
              navigate({ name: 'chapter', chapterId: sectionId.split('-').slice(0, 2).join('-') })
            }}
            className="rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
          >
            Mark section complete
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="rounded-md border border-book-rule">
      {/* examiner's line — question counter + thin progress ticks (ticks flex to fit narrow screens) */}
      <div className="flex items-center justify-between gap-3 border-b border-book-rule px-5 py-3">
        <span className="shrink-0 sv-book-label text-book-soft">Question {current + 1} of {quiz.length}</span>
        <span className="flex min-w-0 flex-1 justify-end gap-1.5" aria-hidden>
          {quiz.map((_, i) => (
            <span
              key={i}
              className={`h-[3px] min-w-0 max-w-5 flex-1 rounded-[1px] transition-colors ${
                i < answers.length
                  ? answers[i] === quiz[i].answer
                    ? 'bg-emerald-500'
                    : 'bg-rose-400'
                  : i === current
                    ? 'bg-amber-400'
                    : 'bg-book-rule'
              }`}
            />
          ))}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -14 }}
          transition={{ duration: 0.2 }}
          className="p-5 sm:p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <p className="font-serif text-[1.08rem] font-medium leading-[1.6] flex-1 min-w-[240px]">
              <RichText text={question.q} />
            </p>
            {hasDiagram && (
              <button
                type="button"
                onClick={() => setShowDiagram((v) => !v)}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/80 bg-muted/40 px-3 py-1 text-[11.5px] font-medium text-muted-foreground hover:border-emerald-500/50 hover:text-foreground transition-all"
                title="Toggle animated diagram solution"
              >
                <Atom className="h-3.5 w-3.5 text-emerald-400" />
                <span>{showDiagram ? 'Hide diagram' : 'Visual diagram'}</span>
              </button>
            )}
          </div>

          {showDiagram && hasDiagram && (
            <div className="mt-3">
              <VisualDiagramSolver
                questionText={question.q}
                options={question.options}
                answer={question.answer}
                explanation={question.explanation}
                customDiagram={question.diagram}
                chapterId={sectionId}
                initiallyOpen={true}
              />
            </div>
          )}

          <div className="mt-5 grid gap-2.5">
            {question.options.map((opt, i) => {
              const isSel = selected === i
              const isAns = question.answer === i
              const showState = selected !== null
              let cls = 'border-book-rule hover:border-primary/50 hover:bg-primary/[0.03]'
              if (showState && isAns) cls = 'border-emerald-500/60 bg-emerald-500/[0.07]'
              else if (showState && isSel && !isAns) cls = 'border-rose-400/60 bg-rose-400/[0.06]'
              else if (showState) cls = 'border-book-rule opacity-55'
              return (
                <button
                  key={i}
                  onClick={() => submit(i)}
                  disabled={selected !== null}
                  className={`flex items-start gap-3.5 rounded-[4px] border px-4 py-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 ${cls}`}
                >
                  <span
                    aria-hidden
                    className={`mt-[0.15rem] flex h-[1.45rem] w-[1.45rem] shrink-0 items-center justify-center border font-serif text-[13px] font-semibold ${
                      showState && isAns
                        ? 'border-emerald-500/70 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                        : showState && isSel
                          ? 'border-rose-400/70 bg-rose-400/10 text-rose-500 dark:text-rose-300'
                          : 'border-book-rule text-book-soft'
                    }`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="font-serif text-[0.96rem] leading-[1.65]">
                    <RichText text={opt} />
                  </span>
                  {selected !== null && isAns && (
                    <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                  )}
                  {selected === i && !isAns && (
                    <XCircle className="ml-auto h-4 w-4 shrink-0 text-rose-400" aria-hidden />
                  )}
                </button>
              )
            })}
          </div>
          <AnimatePresence>
            {selected !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="overflow-hidden"
              >
                <div
                  className={`mt-4 border-l-2 py-2.5 pl-4 font-serif text-[0.95rem] leading-[1.7] ${
                    selected === question.answer
                      ? 'border-emerald-500/60 text-emerald-800 dark:text-emerald-200'
                      : 'border-amber-400/70 text-amber-800 dark:text-amber-200'
                  }`}
                >
                  <span className="font-semibold">
                    {selected === question.answer ? 'Correct. ' : 'Not quite. '}
                  </span>
                  <RichText text={question.explanation} />
                </div>
                <div className="mt-3 font-sans">
                  <EasyModeQuiz explanation={question.explanation} />
                </div>

                {!showDiagram && hasDiagram && (
                  <div className="mt-4">
                    <VisualDiagramSolver
                      questionText={question.q}
                      options={question.options}
                      answer={question.answer}
                      explanation={question.explanation}
                      customDiagram={question.diagram}
                      chapterId={sectionId}
                      initiallyOpen={true}
                    />
                  </div>
                )}

                <div className="mt-4 flex justify-end font-sans">
                  <button
                    onClick={nextQ}
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                  >
                    {current + 1 < quiz.length ? 'Next question' : 'See results'}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles, BookOpen, FlaskConical, Sigma, Layers, ClipboardCheck } from 'lucide-react'
import { useStudy } from '@/store/useStudy'
import { LIBRARY_BOOKS } from '@/data/library'
import { Header } from '@/components/app/header'
import { LibraryView } from '@/components/app/library-view'
import { BookView } from '@/components/app/book-view'
import { ChapterView } from '@/components/app/chapter-view'
import { LessonView } from '@/components/app/lesson-view'
import { PlaygroundView } from '@/components/app/playground-view'
import { ProgressView } from '@/components/app/progress-view'
import { FlashcardsView } from '@/components/app/flashcards-view'
import { FormulaView } from '@/components/app/formula-view'
import { ExamView } from '@/components/app/exam-view'
import { SearchView } from '@/components/app/search-view'
import { SyllabusView } from '@/components/app/syllabus-view'
import { StudioView } from '@/components/app/studio-view'
import { TwinView } from '@/components/app/twin-view'
import { RemixView } from '@/components/app/remix-view'
import { ArenaView } from '@/components/app/arena-view'
import { PaperDnaView } from '@/components/app/paper-dna-view'
import { PalaceView } from '@/components/app/palace-view'
import { ReadingProgress, ScrollTopButton } from '@/components/app/reading-progress'
import { ThemeColorMeta } from '@/components/app/theme-color-meta'

export default function Home() {
  const view = useStudy((s) => s.view)
  const loadProgress = useStudy((s) => s.loadProgress)
  const readerFocus = useStudy((s) => s.readerFocus)

  useEffect(() => {
    loadProgress()
    if (typeof window !== 'undefined') {
      try {
        const savedScale = localStorage.getItem('sv-reader-scale')
        if (savedScale) useStudy.getState().setReaderScale(parseFloat(savedScale))
        const savedEasy = localStorage.getItem('sv-easy-mode')
        if (savedEasy === '0') useStudy.getState().setEasyMode(false)
        if (savedEasy === '1') useStudy.getState().setEasyMode(true)
      } catch {
        /* storage unavailable */
      }
      const params = new URLSearchParams(window.location.search)
      const lesson = params.get('lesson')
      const chapter = params.get('chapter')
      const book = params.get('book')
      const v = params.get('view')
      if (lesson) {
        useStudy.setState({ view: { name: 'lesson', sectionId: lesson } })
      } else if (chapter) {
        useStudy.setState({ view: { name: 'chapter', chapterId: chapter } })
      } else if (book) {
        useStudy.setState({ view: { name: 'book', bookId: book } })
      } else if (v === 'playground' || v === 'labs') {
        useStudy.setState({ view: { name: 'playground' } })
      } else if (v === 'formulas') {
        useStudy.setState({ view: { name: 'formulas' } })
      } else if (v === 'flashcards') {
        useStudy.setState({ view: { name: 'flashcards' } })
      } else if (v === 'progress') {
        useStudy.setState({ view: { name: 'progress' } })
      } else if (v === 'syllabus') {
        useStudy.setState({ view: { name: 'syllabus' } })
      } else if (v === 'studio') {
        useStudy.setState({ view: { name: 'studio' } })
      } else if (v === 'twin') {
        useStudy.setState({ view: { name: 'twin' } })
      } else if (v === 'remix') {
        useStudy.setState({ view: { name: 'remix' } })
      } else if (v === 'arena') {
        useStudy.setState({ view: { name: 'arena' } })
      } else if (v === 'paper-dna') {
        useStudy.setState({ view: { name: 'paper-dna' } })
      } else if (v === 'palace') {
        useStudy.setState({ view: { name: 'palace' } })
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams()
    if (view.name === 'lesson') params.set('lesson', view.sectionId)
    else if (view.name === 'chapter') params.set('chapter', view.chapterId)
    else if (view.name === 'book') params.set('book', view.bookId)
    else if (view.name !== 'library') params.set('view', view.name)
    const newSearch = params.toString() ? `?${params.toString()}` : window.location.pathname
    window.history.replaceState(null, '', newSearch)
  }, [view])

  /** focus reading mode is only honoured while actually reading a lesson */
  const focusReading = readerFocus && view.name === 'lesson'

  const viewKey =
    view.name === 'lesson'
      ? `lesson-${view.sectionId}`
      : view.name === 'chapter'
        ? `chapter-${view.chapterId}`
        : view.name === 'book'
          ? `book-${view.bookId}`
          : view.name === 'flashcards'
            ? `flashcards-${view.chapterId ?? 'all'}-${view.examMisses ? 'misses' : 'deck'}`
            : view.name === 'formulas'
              ? `formulas-${view.chapterId ?? 'sheet'}`
              : view.name === 'exam'
                ? `exam-${view.chapterId ?? 'all'}`
                : view.name === 'search'
                  ? `search-${view.query ?? 'new'}`
                  : view.name === 'studio'
                    ? `studio-${view.targetSkill ?? 'free'}`
                    : view.name === 'palace'
                      ? `palace-${view.sectionKey ?? 'pick'}`
                      : view.name

  return (
    <div
      className={`flex min-h-screen flex-col overflow-x-clip ${focusReading ? 'sv-reader-focus' : ''}`}
    >
      <ThemeColorMeta />
      <ReadingProgress />
      {!focusReading && <Header />}

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={viewKey}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {view.name === 'library' && <LibraryView />}
            {view.name === 'book' && <BookView bookId={view.bookId} />}
            {view.name === 'chapter' && <ChapterView chapterId={view.chapterId} />}
            {view.name === 'lesson' && <LessonView sectionId={view.sectionId} />}
            {view.name === 'playground' && <PlaygroundView />}
            {view.name === 'flashcards' && (
              <FlashcardsView chapterId={view.chapterId} examMisses={view.examMisses} />
            )}
            {view.name === 'formulas' && <FormulaView chapterId={view.chapterId} />}
            {view.name === 'exam' && <ExamView chapterId={view.chapterId} />}
            {view.name === 'progress' && <ProgressView />}
            {view.name === 'search' && <SearchView initialQuery={view.query} />}
            {view.name === 'syllabus' && <SyllabusView />}
            {view.name === 'studio' && (
              <StudioView targetSkill={view.targetSkill} subjectHint={view.subjectHint} />
            )}
            {view.name === 'twin' && <TwinView />}
            {view.name === 'remix' && <RemixView />}
            {view.name === 'arena' && <ArenaView />}
            {view.name === 'paper-dna' && <PaperDnaView />}
            {view.name === 'palace' && <PalaceView sectionKey={view.sectionKey} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer
        className={`mt-auto border-t border-border/60 bg-card/30 print:hidden ${
          focusReading ? 'hidden' : ''
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                </span>
                <span className="text-sm font-bold">
                  Study<span className="text-emerald-300">Verse</span>
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                The master-content study platform. Every book analyzed, classified by subject and
                rebuilt as interactive lessons, labs and quizzes — nothing skipped.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-14 gap-y-2 text-xs sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <span className="mb-0.5 font-semibold uppercase tracking-wider text-foreground/80">
                  Study
                </span>
                <button
                  onClick={() => useStudy.getState().navigate({ name: 'library' })}
                  className="text-left text-muted-foreground transition-colors hover:text-emerald-300"
                >
                  Library
                </button>
                <button
                  onClick={() => useStudy.getState().navigate({ name: 'syllabus' })}
                  className="text-left text-muted-foreground transition-colors hover:text-emerald-300"
                >
                  Syllabus mapper
                </button>
                {LIBRARY_BOOKS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => useStudy.getState().navigate({ name: 'book', bookId: b.id })}
                    className="text-left text-muted-foreground transition-colors hover:text-emerald-300"
                  >
                    {`${b.author.split(',')[0]} · ${b.title.split(':')[0]}`}
                  </button>
                ))}
                <button
                  onClick={() => useStudy.getState().navigate({ name: 'flashcards' })}
                  className="text-left text-muted-foreground transition-colors hover:text-emerald-300"
                >
                  Flashcard decks
                </button>
                <button
                  onClick={() => useStudy.getState().navigate({ name: 'formulas' })}
                  className="text-left text-muted-foreground transition-colors hover:text-emerald-300"
                >
                  Formula sheet
                </button>
                <button
                  onClick={() => useStudy.getState().navigate({ name: 'exam' })}
                  className="text-left text-muted-foreground transition-colors hover:text-emerald-300"
                >
                  Test simulator
                </button>
                <button
                  onClick={() => useStudy.getState().navigate({ name: 'progress' })}
                  className="text-left text-muted-foreground transition-colors hover:text-emerald-300"
                >
                  My progress
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <span className="mb-0.5 font-semibold uppercase tracking-wider text-foreground/80">
                  Labs
                </span>
                <button
                  onClick={() => useStudy.getState().navigate({ name: 'playground' })}
                  className="flex items-center gap-1.5 text-left text-muted-foreground transition-colors hover:text-emerald-300"
                >
                  <FlaskConical className="h-3 w-3" /> Lab floor
                </button>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <BookOpen className="h-3 w-3" /> 60 labs · 2,100 lessons
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Layers className="h-3 w-3" /> SRS flashcards · 11,700+ cards
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Sigma className="h-3 w-3" /> 1,974 printable formulas
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <ClipboardCheck className="h-3 w-3" /> 8,862-question test bank
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="mb-0.5 font-semibold uppercase tracking-wider text-foreground/80">
                  Featured Library
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Sigma className="h-3 w-3 text-emerald-400" /> 37 subject-wise course tracks
                </span>
                <span className="text-muted-foreground/60">Mathematics · Physics · Chemistry · English · Aptitude · C & C++ · Java · Web · AI · DSA · TOC · COA · Compiler · OS · DBMS · Networks · and 22 more — every course holds all branches' chapters and every assessment scope</span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-border/60 pt-5 text-[11px] text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between">
            <span>StudyVerse — master every book, interactively.</span>
            <span className="font-mono">
              4,036 lessons · 60 labs · 8,862 quiz questions · 540 chapters · 37 books · 37 subjects
            </span>
          </div>
        </div>
      </footer>
      <ScrollTopButton />
    </div>
  )
}
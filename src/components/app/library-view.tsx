'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BookOpen,
  Layers,
  FlaskConical,
  ClipboardCheck,
  ArrowRight,
  Check,
  Sigma,
  Sparkles,
  ChevronRight,
  Library as LibraryIcon,
} from 'lucide-react'
import Hero3D from './hero3d'
import {
  LIBRARY_SUBJECTS,
  LIBRARY_BOOKS,
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
} from '@/data/library'
import { TOTAL_FORMULAS } from '@/data/formulas'
import { allContent } from '@/data/content'
import { easySubjectLine } from '@/data/easy-library'
import { EasyLine } from './easy-box'
import { ChapterIcon } from './chapter-icon'
import { useStudy } from '@/store/useStudy'

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const MATH_SYMBOLS = ['∀', '∃', '∈', '∑', '√', 'π', '∞', '≠', '⊆', '¬', '∧', '→', '⊕', '↔', '∅', 'Γ']

const THEOREM_TICKER = [
  'Σ deg(v) = 2|E|',
  'R(3,3) = 6',
  'r = e − v + 2',
  'Dₙ = n! Σ (−1)ᵏ/k!',
  'gcd(a,b)·lcm(a,b) = a·b',
  'Σₖ C(n,k) = 2ⁿ',
  'P(A|B)·P(B) = P(B|A)·P(A)',
  '√2 ∉ ℚ',
  'R(3,3) = 6',
  'nⁿ⁻² spanning trees',
  'C(n,k) = C(n,n−k)',
  '2^|A| > |A|',
]

/**
 * Counts 0 → target (ease-out cubic, ~900ms) once `start` flips true.
 * Renders the final value until the animation begins, so SSR/no-JS always
 * shows the true number and hydration never sees a flash of zero.
 * Skips straight to the final value when prefers-reduced-motion is set.
 */
function useCountUp(target: number, start: boolean, decimals = 0, duration = 900) {
  const [display, setDisplay] = useState(target)
  const [prevTarget, setPrevTarget] = useState(target)
  const startedRef = useRef(false)
  const rafRef = useRef(0)

  // Until the count-up begins (and after it settles), the shown value mirrors
  // the latest target — the React derived-state pattern, so data arriving late
  // never leaves a stale number on screen and SSR always shows the final value.
  if (prevTarget !== target) {
    setPrevTarget(target)
    setDisplay(target)
  }

  useEffect(() => {
    if (!start || startedRef.current) return
    startedRef.current = true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(p < 1 ? Number((target * eased).toFixed(decimals)) : target)
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [start, target, decimals, duration])

  return display
}

/** Hero stat tile with a one-shot count-up, gated on first viewport entry. */
function HeroStat({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const n = useCountUp(value, inView)
  return (
    <div
      ref={ref}
      className="rounded-xl border border-border/70 bg-card/50 px-3.5 py-3 backdrop-blur-sm"
    >
      <div className="font-mono text-xl font-bold text-emerald-300">{n}</div>
      <div className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{label}</div>
    </div>
  )
}

export function LibraryView() {
  const navigate = useStudy((s) => s.navigate)
  const totalSections = LIBRARY_SECTIONS.length
  const totalChapters = LIBRARY_CHAPTERS.length
  const totalTools = new Set(LIBRARY_CHAPTERS.map((c) => c.interactiveKey).filter(Boolean)).size
  const totalQuestions = allContent.reduce((n, c) => n + c.quiz.length, 0)
  /** the most recently added book — hero CTA + chapter-map preview target */
  const latestBook = LIBRARY_BOOKS[LIBRARY_BOOKS.length - 1]
  const latestShortTitle = latestBook.title.split(':')[0]

  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 sv-hero-glow" />
        <div className="absolute inset-0 sv-grid-bg opacity-40 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
        <Hero3D className="absolute inset-0 h-full w-full" />
        {/* floating symbols */}
        <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
          {MATH_SYMBOLS.map((s, i) => (
            <span
              key={s + i}
              className="absolute select-none font-mono text-emerald-200/20"
              style={{
                left: `${(i * 61) % 95}%`,
                top: `${(i * 37) % 88}%`,
                fontSize: `${18 + ((i * 13) % 26)}px`,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              <span className="sv-float inline-block">{s}</span>
            </span>
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/8 px-3.5 py-1.5 text-xs font-medium text-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Master content engine · online
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Don&apos;t just read your books.
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
                Master them interactively.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              StudyVerse turns your textbooks into a living curriculum — every section distilled into
              master notes, animated diagrams, hands-on labs and quizzes that actually check your
              understanding.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate({ name: 'book', bookId: latestBook.id })}
                className={`group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_rgba(52,211,153,0.35)] transition-all hover:bg-primary/90 hover:shadow-[0_10px_36px_-8px_rgba(52,211,153,0.5)] ${FOCUS_RING}`}
              >
                <BookOpen className="h-4 w-4" />
                Start studying {latestShortTitle}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => navigate({ name: 'playground' })}
                className={`inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-emerald-400/40 hover:bg-card ${FOCUS_RING}`}
              >
                <FlaskConical className="h-4 w-4 text-emerald-300" />
                Explore the {totalTools} labs
              </button>
              <button
                onClick={() => navigate({ name: 'flashcards' })}
                className={`inline-flex items-center gap-2 rounded-xl border border-amber-300/30 bg-amber-300/[0.07] px-5 py-2.5 text-sm font-semibold text-amber-200 transition-colors hover:border-amber-300/50 hover:bg-amber-300/[0.12] ${FOCUS_RING}`}
              >
                <Layers className="h-4 w-4 text-amber-300" />
                Flashcard decks
              </button>
              <button
                onClick={() => navigate({ name: 'exam' })}
                className={`inline-flex items-center gap-2 rounded-xl border border-rose-400/30 bg-rose-400/[0.07] px-5 py-2.5 text-sm font-semibold text-rose-300 transition-colors hover:border-rose-400/50 hover:bg-rose-400/[0.12] ${FOCUS_RING}`}
              >
                <ClipboardCheck className="h-4 w-4 text-rose-300" />
                Take a test
              </button>
              <button
                onClick={() => navigate({ name: 'formulas' })}
                className={`inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-emerald-400/40 hover:bg-card ${FOCUS_RING}`}
              >
                <Sigma className="h-4 w-4 text-emerald-300" />
                Formula sheet · {TOTAL_FORMULAS}
              </button>
            </div>

            {/* trust row */}
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3 w-3 text-emerald-400" aria-hidden />
                {totalSections} sections of master content
                <span aria-hidden className="text-muted-foreground/50">·</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3 w-3 text-emerald-400" aria-hidden />
                {TOTAL_FORMULAS} formulas
                <span aria-hidden className="text-muted-foreground/50">·</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3 w-3 text-emerald-400" aria-hidden />
                {totalQuestions}-question test bank
              </span>
            </div>

            {/* stats row */}
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              <HeroStat value={totalSections} label="sections of master content" />
              <HeroStat value={totalChapters} label="chapters covered" />
              <HeroStat value={totalTools} label="interactive labs" />
              <HeroStat value={TOTAL_FORMULAS} label="printable formulas" />
            </div>
          </motion.div>
        </div>

        {/* theorem marquee */}
        <div className="relative border-t border-border/60 bg-card/40 py-2.5 backdrop-blur-sm">
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="sv-marquee flex w-max items-center gap-8 px-4">
              {[...THEOREM_TICKER, ...THEOREM_TICKER].map((t, i) => (
                <span key={i} className="flex items-center gap-8 font-mono text-xs text-muted-foreground">
                  <span className="text-emerald-300/50">◆</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SUBJECTS ============ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              <Layers className="h-3.5 w-3.5" /> Subjects
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Your library, classified by subject
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Every book is analyzed, categorized and merged into a subject master track. Upload more
              books and they join their subject automatically.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {LIBRARY_SUBJECTS.map((subject, idx) => {
            const books = LIBRARY_BOOKS.filter((b) => b.subjectId === subject.id)
            const chapters = books.flatMap((b) => LIBRARY_CHAPTERS.filter((c) => c.bookId === b.id))
            const sections = LIBRARY_SECTIONS.filter((s) => chapters.some((c) => c.id === s.chapterId))
            return (
              <motion.button
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => books[0] && navigate({ name: 'book', bookId: books[0].id })}
                className={`sv-card-glow group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 text-left ${FOCUS_RING}`}
              >
                <div
                  className="absolute -right-14 -top-14 h-40 w-40 rounded-full opacity-15 blur-2xl transition-opacity group-hover:opacity-30"
                  style={{ background: subject.accent }}
                />
                <div className="relative">
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105"
                    style={{
                      borderColor: subject.accent + '55',
                      background: subject.accent + '18',
                    }}
                  >
                    <span style={{ color: subject.accent }}>
                      <ChapterIcon icon={subject.icon} className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {subject.tagline}
                  </div>
                  <h3 className="mt-1 text-xl font-bold">{subject.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {subject.description}
                  </p>
                  <EasyLine text={easySubjectLine(subject)} />
                  <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] font-medium">
                    <span className="rounded-full border border-border bg-muted/50 px-2.5 py-1">
                      {books.length} book{books.length !== 1 ? 's' : ''}
                    </span>
                    <span className="rounded-full border border-border bg-muted/50 px-2.5 py-1">
                      {chapters.length} chapters
                    </span>
                    <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-emerald-200">
                      {sections.length} lessons
                    </span>
                  </div>
                  {books.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                      {books.map((b) => (
                        <span
                          key={b.id}
                          role="button"
                          tabIndex={0}
                          onClick={(e) => {
                            e.stopPropagation()
                            navigate({ name: 'book', bookId: b.id })
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.stopPropagation()
                              e.preventDefault()
                              navigate({ name: 'book', bookId: b.id })
                            }
                          }}
                          className="inline-flex items-center gap-1 rounded-md border border-border/80 bg-background/80 px-2 py-1 text-[11px] font-medium text-foreground transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-emerald-300"
                        >
                          <BookOpen className="h-3 w-3 text-emerald-400" />
                          {b.title.split('—')[0].split(':')[0].trim()}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300">
                    Open track
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.button>
            )
          })}

          {/* More coming card */}
          <div className="relative flex min-h-[220px] flex-col justify-center rounded-2xl border border-dashed border-border/80 bg-card/30 p-6 text-center">
            <Sparkles className="mx-auto h-6 w-6 text-amber-300/80" />
            <h3 className="mt-3 text-base font-semibold">More books = richer subjects</h3>
            <p className="mx-auto mt-1.5 max-w-[240px] text-xs leading-relaxed text-muted-foreground">
              Send your next textbook and StudyVerse will classify it into its subject and merge its
              master content with what you already have.
            </p>
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INSIDE ============ */}
      <section className="border-t border-border/60 bg-card/25">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/80">
              <ClipboardCheck className="h-3.5 w-3.5" /> The StudyVerse method
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Every section, engineered for mastery
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BookOpen,
                title: 'Master notes',
                desc: 'Definitions, theorems and laws distilled with nothing skipped — the complete skeleton of each section.',
              },
              {
                icon: FlaskConical,
                title: 'Interactive labs',
                desc: 'Build truth tables, drag graph nodes, wire logic gates — learn by manipulating, not memorizing.',
              },
              {
                icon: ClipboardCheck,
                title: 'Check-yourself quizzes',
                desc: 'Every lesson ends with questions that test real understanding, with instant explanations.',
              },
              {
                icon: LibraryIcon,
                title: 'Progress tracking',
                desc: 'Your reading and quiz history per section, chapter and book — always resumable.',
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="sv-card-glow group relative rounded-2xl border border-border/80 bg-card p-5 motion-safe:transition-all! motion-safe:hover:-translate-y-0.5"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
                />
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10 transition-colors group-hover:border-emerald-400/40 group-hover:bg-emerald-400/15">
                  <f.icon className="h-5 w-5 text-emerald-300 transition-transform motion-safe:group-hover:-translate-y-0.5 group-hover:text-emerald-300" />
                </div>
                <h3 className="text-[15px] font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CHAPTER MAP PREVIEW ============ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              <BookOpen className="h-3.5 w-3.5" /> {latestBook.title} · {latestBook.edition}
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">The full chapter map</h2>
            <p className="mt-1 text-[13px] text-muted-foreground">
              Plus the complete Rosen Discrete Mathematics map — open a subject below to switch books.
            </p>
          </div>
          <button
            onClick={() => navigate({ name: 'book', bookId: latestBook.id })}
            className={`hidden items-center gap-1.5 rounded text-sm font-semibold text-emerald-300 hover:text-emerald-200 sm:inline-flex ${FOCUS_RING}`}
          >
            Open book <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {LIBRARY_CHAPTERS.filter((ch) => ch.bookId === latestBook.id).map((ch, i) => (
            <motion.button
              key={ch.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3) }}
              onClick={() => navigate({ name: 'chapter', chapterId: ch.id })}
              className={`sv-card-glow group rounded-xl border border-border/80 bg-card p-4 text-left motion-safe:transition-all! motion-safe:hover:-translate-y-0.5 hover:border-emerald-400/40 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.15),0_8px_24px_-12px_rgba(16,185,129,0.25)] ${FOCUS_RING}`}
            >
              <div className="font-mono text-[11px] font-bold text-emerald-300/80 transition-colors group-hover:text-emerald-200">
                Chapter {ch.number}
              </div>
              <div className="mt-1 line-clamp-2 text-[13px] font-semibold leading-snug group-hover:text-emerald-100">
                {ch.shortTitle}
              </div>
              <div className="mt-2 font-mono text-[10px] text-muted-foreground">
                {LIBRARY_SECTIONS.filter((s) => s.chapterId === ch.id).length} sections · p. {ch.pages}
              </div>
            </motion.button>
          ))}
        </div>
      </section>
    </div>
  )
}

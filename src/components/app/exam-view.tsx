'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlarmClock,
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  ChevronLeft,
  ClipboardCheck,
  Eye,
  BookOpen,
  Flag,
  Gauge,
  GraduationCap,
  RotateCcw,
  Timer,
  X,
  Zap,
  Atom,
} from 'lucide-react'
import { LIBRARY_BOOKS, LIBRARY_CHAPTERS, LIBRARY_SECTIONS, LIBRARY_SUBJECTS, type QuizQuestion, type SectionContent } from '@/data/library'
import { useAllContent } from '@/hooks/use-content'
import { RichText } from '../rich-text'
import { shuffleQuizOptions } from '@/lib/quiz-shuffle'
import { VisualDiagramSolver, detectDiagramTopic } from '@/components/visual/visual-diagram-solver'
import { useStudy } from '@/store/useStudy'
import { logActivity } from '@/lib/activity'
import { ChapterIcon } from './chapter-icon'

/** One exam question with provenance for the review screen */
interface ExamQuestion {
  q: QuizQuestion
  sectionId: string
  sectionNumber: number
  sectionTitle: string
  chapterNumber: number
}

type Phase = 'setup' | 'run' | 'results'

const QUESTION_PRESETS = [10, 20, 30] as const

/** Build the full question pool from the lesson corpus (runtime) */
function buildPool(corpus: SectionContent[]): ExamQuestion[] {
  const sectionById = new Map(LIBRARY_SECTIONS.map((s) => [s.id, s]))
  const chapterById = new Map(LIBRARY_CHAPTERS.map((c) => [c.id, c]))
  const pool: ExamQuestion[] = []
  for (const content of corpus) {
    const sec = sectionById.get(content.sectionId)
    const ch = sec ? chapterById.get(sec.chapterId) : undefined
    if (!sec || !ch) continue
    for (const q of content.quiz) {
      if (!q) continue
      // Balance answer positions (A–D) at presentation time; the graded
      // answer travels with its option text (see @/lib/quiz-shuffle).
      pool.push({
        q: { ...q, ...shuffleQuizOptions(q) },
        sectionId: content.sectionId,
        sectionNumber: sec.number,
        sectionTitle: sec.title,
        chapterNumber: ch.number,
      })
    }
  }
  return pool
}

/** Fisher–Yates shuffle (pure — returns new array) */
function shuffled<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/* ------------------------------------------------------------------ */
/*  Quick practice sets — one-tap subject drills for the setup screen  */
/* ------------------------------------------------------------------ */

interface PracticeSet {
  subjectId: string
  title: string
  blurb: string
  /** recommended question count (clamped to the available pool) */
  count: number
  timed: boolean
  chapterIds: string[]
  /** questions in this subject's pool (module-level constant) */
  poolCount: number
}

/** Curated flavour per subject — every subject gets a card. */
const SET_META: Record<string, { title: string; blurb: string; count: number; timed: boolean }> = {
  mathematics: { title: 'Mathematics sprint', blurb: 'Logic to calculus to engineering maths — one mixed sweep', count: 20, timed: true },
  physics: { title: 'Physics concept check', blurb: 'Mechanics, fields and quanta across the canonical chapters', count: 20, timed: true },
  chemistry: { title: 'Chemistry rapid recall', blurb: 'Physical, organic, inorganic and applied essentials', count: 15, timed: false },
  english: { title: 'Reading & writing drill', blurb: 'Comprehension, grammar and expression', count: 10, timed: false },
  aptitude: { title: 'Aptitude booster', blurb: 'Reasoning, quantitative aptitude, awareness and science', count: 10, timed: false },
  'programming-c-cpp': { title: 'C & C++ drill', blurb: 'Pointers, classes, templates and the standard library', count: 15, timed: true },
  'programming-java': { title: 'Java core sprint', blurb: 'Objects, generics, collections and streams', count: 12, timed: true },
  'web-development': { title: 'Full-stack web check', blurb: 'HTML to React to Node, end to end', count: 15, timed: true },
  'ai-data-science': { title: 'AI & ML gauntlet', blurb: 'Python, search, learning and neural nets', count: 15, timed: true },
  dsa: { title: 'Algorithms gauntlet', blurb: 'The full canon — sorting to NP-completeness', count: 20, timed: true },
  toc: { title: 'Automata check', blurb: 'Languages, grammars and computability', count: 8, timed: false },
  coa: { title: 'Machine architecture check', blurb: 'Datapaths, pipelines, memory and I/O', count: 12, timed: true },
  'compiler-design': { title: 'Compiler pipeline drill', blurb: 'Lexing, parsing, translation and optimization', count: 10, timed: false },
  'operating-systems': { title: 'OS internals check', blurb: 'Processes, memory, files and I/O', count: 15, timed: true },
  dbms: { title: 'Databases drill', blurb: 'ER to SQL to normalization to transactions', count: 12, timed: true },
  'computer-networks': { title: 'Networking layers check', blurb: 'Framing to routing to TCP and applications', count: 12, timed: true },
  'microprocessors-embedded': { title: 'Micro & embedded check', blurb: 'Processors, peripherals, buses and RTOS', count: 10, timed: false },
  'software-emerging': { title: 'Software practice check', blurb: 'Process, cloud, IoT and blockchain', count: 10, timed: false },
  cybersecurity: { title: 'Security drill', blurb: 'Ciphers, protocols, attacks and defenses', count: 10, timed: false },
  'visual-computing': { title: 'Graphics & vision check', blurb: 'Raster graphics and image processing', count: 8, timed: false },
  'digital-electronics': { title: 'Digital logic drill', blurb: 'Boolean algebra to sequential design', count: 12, timed: true },
  'electronic-devices-circuits': { title: 'Devices & circuits check', blurb: 'Diodes to transistors to op-amps', count: 15, timed: true },
  'signals-systems': { title: 'Signals & DSP check', blurb: 'Transforms, filters and applications', count: 12, timed: true },
  'communication-systems': { title: 'Communication sweep', blurb: 'Modulation, coding, wireless and optics', count: 12, timed: true },
  electromagnetics: { title: 'Fields & waves check', blurb: 'Maxwell to transmission lines to radar', count: 12, timed: true },
  'vlsi-design': { title: 'VLSI check', blurb: 'Fabrication, CMOS design and testing', count: 8, timed: false },
  'electric-circuits': { title: 'Circuits essentials', blurb: 'Theorems, transients, resonance and two-ports', count: 15, timed: true },
  'electrical-machines': { title: 'Machines & drives check', blurb: 'Motors, transformers, converters and EV', count: 15, timed: true },
  'power-systems': { title: 'Power systems check', blurb: 'Generation, transmission and protection', count: 12, timed: true },
  'control-instrumentation': { title: 'Control & measurement check', blurb: 'Stability, design, bridges and transducers', count: 12, timed: true },
  'energy-automotive': { title: 'Energy & engines check', blurb: 'Power plants, engines, vehicles, rockets and renewables', count: 12, timed: true },
  'mechanics-graphics': { title: 'Mechanics & drawing check', blurb: 'Statics, dynamics and engineering graphics', count: 10, timed: false },
  'solids-materials': { title: 'Solids & materials check', blurb: 'Stress, strain and metallurgy', count: 10, timed: false },
  'machines-design': { title: 'Machines & design check', blurb: 'Kinematics, dynamics and machine design', count: 10, timed: false },
  'thermal-fluids': { title: 'Thermal & fluids check', blurb: 'Thermodynamics, heat, flow and HVAC', count: 12, timed: true },
  'manufacturing-industrial': { title: 'Manufacturing check', blurb: 'Processes, metrology, CAD/CAM and OR', count: 10, timed: false },
  'mechatronics-robotics': { title: 'Mechatronics check', blurb: 'Sensors, actuators and robot control', count: 8, timed: false },
}

/** Practice sets with live per-chapter pool counts */
function buildPracticeSets(pool: ExamQuestion[]): PracticeSet[] {
  // chapters grouped by subject (subject → book → chapters, in library order)
  const chaptersBySubject = new Map<string, string[]>()
  for (const ch of LIBRARY_CHAPTERS) {
    const book = LIBRARY_BOOKS.find((b) => b.id === ch.bookId)
    if (!book) continue
    const arr = chaptersBySubject.get(book.subjectId) ?? []
    arr.push(ch.id)
    chaptersBySubject.set(book.subjectId, arr)
  }
  // question pool counted per chapter (one pass over POOL)
  const poolByChapter = new Map<string, number>()
  for (const q of pool) {
    const chId = q.sectionId.replace(/-s\d+$/, '')
    poolByChapter.set(chId, (poolByChapter.get(chId) ?? 0) + 1)
  }
  return LIBRARY_SUBJECTS.map((subject) => {
    const chapterIds = chaptersBySubject.get(subject.id) ?? []
    const poolCount = chapterIds.reduce((a, id) => a + (poolByChapter.get(id) ?? 0), 0)
    const meta = SET_META[subject.id] ?? {
      title: `${subject.name} practice set`,
      blurb: subject.tagline,
      count: 10,
      timed: false,
    }
    return { subjectId: subject.id, ...meta, chapterIds, poolCount }
  }).filter((s) => s.chapterIds.length > 0)
}

function fmtTime(sec: number): string {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

/** localStorage-safe answer state: index per question + flagged set */
interface RunState {
  questions: ExamQuestion[]
  answers: (number | null)[]
  flagged: boolean[]
  /** seconds spent viewing each question (accumulated across revisits) */
  secPerQ: number[]
  startedAt: number
  timeLimitSec: number | null
  /** true when this run was rebuilt from a previous attempt's misses */
  isRetake: boolean
}

export function ExamView({
  chapterId,
  chapterIds,
  label: labelProp,
  questionCount,
}: {
  chapterId?: string
  chapterIds?: string[]
  label?: string
  questionCount?: number
}) {
  /* lesson corpus arrives by runtime fetch (kept out of the bundle) */
  const allContent = useAllContent()
  const POOL = useMemo(() => buildPool(allContent ?? []), [allContent])
  const PRACTICE_SETS = useMemo(() => buildPracticeSets(POOL), [POOL])
  const navigate = useStudy((s) => s.navigate)
  const deviceId = useStudy((s) => s.deviceId)
  const ensureDevice = useStudy((s) => s.ensureDevice)

  const [phase, setPhase] = useState<Phase>('setup')
  // default = the whole book, explicitly selected so the chips always tell the truth
  // (an exam-scoped run passes its own chapter list instead)
  const [selected, setSelected] = useState<Set<string>>(
    () =>
      new Set(
        chapterIds?.length
          ? chapterIds
          : chapterId
            ? [chapterId]
            : LIBRARY_CHAPTERS.map((c) => c.id)
      )
  )
  const [count, setCount] = useState<number>(
    questionCount && questionCount >= 1 ? Math.min(120, Math.round(questionCount)) : 20
  )
  const [timed, setTimed] = useState(true)
  const [run, setRun] = useState<RunState | null>(null)
  const [cursor, setCursor] = useState(0)
  const [now, setNow] = useState(() => Date.now())
  const [saved, setSaved] = useState(false)
  const [showActiveDiagram, setShowActiveDiagram] = useState(false)

  // ---- per-question pacing: which question is on screen and since when ----
  const enterRef = useRef<{ idx: number; at: number } | null>(null)
  const cursorRef = useRef(0)

  /** charge the elapsed time to the question the user is leaving (ref-only — safe to call anywhere) */
  const flushTime = useCallback(() => {
    const e = enterRef.current
    enterRef.current = null
    if (!e) return
    const spent = (Date.now() - e.at) / 1000
    if (spent <= 0) return
    setRun((r) => {
      if (!r || e.idx < 0 || e.idx >= r.questions.length) return r
      const secPerQ = [...r.secPerQ]
      secPerQ[e.idx] += spent
      return { ...r, secPerQ }
    })
  }, [])

  /** move to another question — flushes the outgoing question's time first */
  function goTo(i: number) {
    if (!run) return
    const next = Math.max(0, Math.min(i, run.questions.length - 1))
    if (next === cursorRef.current) return // same question: keep the clock running
    flushTime()
    cursorRef.current = next
    enterRef.current = { idx: next, at: Date.now() }
    setCursor(next)
    setShowActiveDiagram(false)
  }

  // exam history for the setup screen
  const [history, setHistory] = useState<
    { label: string; score: number; total: number; durationSec: number; createdAt: string }[]
  >([])
  useEffect(() => {
    if (phase !== 'setup') return
    const id = deviceId ?? ensureDevice()
    let cancelled = false
    fetch(`/api/exam?deviceId=${encodeURIComponent(id)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled) setHistory(d?.attempts ?? [])
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [phase, deviceId, ensureDevice])

  // ticker + auto-submit when time runs out (setState inside the interval
  // callback, never synchronously in the effect body)
  const startedAt = run?.startedAt ?? null
  const timeLimit = run?.timeLimitSec ?? null
  useEffect(() => {
    if (phase !== 'run' || startedAt === null || !timeLimit) return
    const t = setInterval(() => {
      setNow(Date.now())
      if (timeLimit - Math.floor((Date.now() - startedAt) / 1000) <= 0) {
        flushTime() // charge the final question before auto-submitting
        setPhase('results')
      }
    }, 500)
    return () => clearInterval(t)
  }, [phase, startedAt, timeLimit, flushTime])

  const poolForSelection = useMemo(
    () => POOL.filter((q) => selected.has(q.sectionId.replace(/-s\d+$/, ''))),
    [selected, POOL]
  )

  const allSelected = selected.size === LIBRARY_CHAPTERS.length

  const effectiveCount = Math.min(count, poolForSelection.length)

  /** shared run initializer — fresh exams and miss retakes both go through here */
  function beginRun(questions: ExamQuestion[], timedExam: boolean, retake: boolean) {
    setRun({
      questions,
      answers: questions.map(() => null),
      flagged: questions.map(() => false),
      secPerQ: questions.map(() => 0),
      startedAt: Date.now(),
      timeLimitSec: timedExam ? Math.round(questions.length * 90) : null, // 1.5 min / question
      isRetake: retake,
    })
    setCursor(0)
    cursorRef.current = 0
    enterRef.current = { idx: 0, at: Date.now() }
    setSaved(false)
    setPhase('run')
  }

  function startExam() {
    beginRun(shuffled(poolForSelection).slice(0, effectiveCount), timed, false)
  }

  /** load a quick practice set's chapters + recommended format into the picker */
  function applyPreset(set: PracticeSet) {
    setSelected(new Set(set.chapterIds))
    setCount(set.count)
    setTimed(set.timed)
  }

  /** load AND immediately start a quick practice set */
  function startPreset(set: PracticeSet) {
    const ids = new Set(set.chapterIds)
    const pool = POOL.filter((q) => ids.has(q.sectionId.replace(/-s\d+$/, '')))
    beginRun(shuffled(pool).slice(0, Math.min(set.count, pool.length)), set.timed, false)
  }

  /** true when the current selection is exactly this set's chapter list */
  const setChapterSets = useMemo(
    () => PRACTICE_SETS.map((s) => ({ set: s, ids: new Set(s.chapterIds) })),
    [PRACTICE_SETS]
  )
  const activeSetId = useMemo(() => {
    for (const { set, ids } of setChapterSets) {
      if (selected.size === ids.size && [...ids].every((id) => selected.has(id))) return set.subjectId
    }
    return null
  }, [selected, setChapterSets])

  /** rebuild a new run from exactly this attempt's wrong + unanswered questions */
  function retakeMisses() {
    if (!run) return
    const missed = run.questions.filter((q, i) => run.answers[i] !== q.q.answer)
    if (missed.length === 0) return
    beginRun(shuffled(missed), run.timeLimitSec !== null, true)
  }

  const elapsedSec = run ? Math.floor((now - run.startedAt) / 1000) : 0
  const remainingSec = run?.timeLimitSec ? run.timeLimitSec - elapsedSec : null

  function answer(i: number, at = cursor) {
    if (!run) return
    setRun((r) => {
      if (!r) return r
      const answers = [...r.answers]
      answers[at] = answers[at] === i ? null : i // click again to unanswer
      return { ...r, answers }
    })
  }

  function toggleFlag(at = cursor) {
    if (!run) return
    setRun((r) => {
      if (!r) return r
      const flagged = [...r.flagged]
      flagged[at] = !flagged[at]
      return { ...r, flagged }
    })
  }

  const score = useMemo(
    () =>
      run
        ? run.questions.reduce((a, q, i) => a + (run.answers[i] === q.q.answer ? 1 : 0), 0)
        : 0,
    [run]
  )

  // save each attempt exactly once when its results open — keyed on the run's
  // startedAt so retakes and fresh exams save too (missed questions ride along
  // for the SRS deck)
  const saveRef = useRef<number | null>(null)
  useEffect(() => {
    if (phase !== 'results' || !run || saveRef.current === run.startedAt) return
    saveRef.current = run.startedAt
    const id = deviceId ?? ensureDevice()
    const chapters = [...new Set(run.questions.map((q) => { const i = q.sectionId.indexOf('-s'); return i > 0 ? q.sectionId.slice(0, i) : q.sectionId }))]
    const label =
      labelProp ??
      (allSelected
        ? 'Full book'
        : selected.size === 1
          ? `Chapter ${LIBRARY_CHAPTERS.find((c) => c.id === [...selected][0])?.number ?? '?'} · ${
              LIBRARY_CHAPTERS.find((c) => c.id === [...selected][0])?.shortTitle ?? ''
            }`
          : `${chapters.length} chapters`) + (run.isRetake ? ' · retake' : '')
    // every wrong OR unanswered question becomes a flashcard in the misses deck
    const missed = run.questions
      .map((q, i) => ({ q, i }))
      .filter(({ q, i }) => run.answers[i] !== q.q.answer)
      .map(({ q, i }) => ({
        q: q.q.q,
        options: q.q.options,
        answer: q.q.answer,
        explanation: q.q.explanation,
        sectionId: q.sectionId,
        sectionNumber: q.sectionNumber,
        sectionTitle: q.sectionTitle,
        chapterNumber: q.chapterNumber,
        picked: run.answers[i],
      }))
    fetch('/api/exam', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        deviceId: id,
        label,
        chapters,
        questionCount: run.questions.length,
        score,
        total: run.questions.length,
        durationSec: Math.floor((Date.now() - run.startedAt) / 1000),
        missed,
      }),
    })
      .then((r) => (r.ok ? r.json() : null))
      .then(() => setSaved(true))
      .catch(() => {})
    logActivity('quiz')
  }, [phase, run, score, selected, deviceId, ensureDevice, labelProp])

  // run-phase keyboard shortcuts: 1–4 pick an answer, ←/→ navigate, F flags.
  // Ignored outside the run phase, with modifier keys held, or while a dialog
  // (command palette) / text field has focus.
  useEffect(() => {
    if (phase !== 'run' || !run) return
    const questions = run.questions
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (document.querySelector('[role="dialog"], dialog[open]')) return
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return
      const i = cursorRef.current
      if (i < 0 || i >= questions.length) return
      if (e.key >= '1' && e.key <= '9') {
        const idx = Number(e.key) - 1
        if (idx < questions[i].q.options.length) {
          e.preventDefault()
          answer(idx, i)
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goTo(Math.max(0, i - 1))
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goTo(i + 1)
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        toggleFlag(i)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, run])

  // ======================== SETUP ========================
  if (phase === 'setup') {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative mb-8 overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8"
        >
          <div className="absolute inset-0 sv-hero-glow opacity-40" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/25 bg-rose-400/10 px-3.5 py-1.5 text-xs font-semibold text-rose-300">
                <ClipboardCheck className="h-3.5 w-3.5" /> Test simulator · {POOL.length} question bank
              </div>
              {labelProp && (
                <div
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300"
                  title="This run is scoped to a saved exam's mapped chapters"
                >
                  <GraduationCap className="h-3.5 w-3.5" aria-hidden />
                  Exam-scoped test · {labelProp.split('|').pop() || 'saved exam'}
                </div>
              )}
            </div>
            <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">Test yourself like it&apos;s the real thing</h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Pick chapters, set the clock and sit a mixed exam — no instant feedback, just you
              against the timer. Full answer review with explanations when you submit.
            </p>
          </div>
        </motion.div>

        {/* quick practice sets — one-tap subject drills */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mb-6 rounded-2xl border border-border/80 bg-card p-5 sm:p-6"
        >
          <div className="mb-1 flex items-center gap-2">
            <Zap className="h-4 w-4 text-amber-300" aria-hidden />
            <h2 className="text-base font-bold tracking-tight">Quick practice sets</h2>
          </div>
          <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
            One tap loads a whole subject with a recommended format — or press play to start immediately.
          </p>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
            {PRACTICE_SETS.map((set) => {
              const subject = LIBRARY_SUBJECTS.find((s) => s.id === set.subjectId)
              const active = activeSetId === set.subjectId
              const tooSmall = set.poolCount < 4
              const effective = Math.min(set.count, set.poolCount)
              return (
                <div
                  key={set.subjectId}
                  className={`group relative flex items-center gap-3 rounded-xl border p-3 transition-all ${
                    active
                      ? 'border-primary/60 bg-primary/[0.08] shadow-[inset_0_0_0_1px_rgba(16,185,129,0.18)]'
                      : 'border-border/70 bg-muted/20 hover:border-border hover:bg-muted/40'
                  } ${tooSmall ? 'opacity-60' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => applyPreset(set)}
                    disabled={tooSmall}
                    className="flex min-w-0 flex-1 items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 disabled:cursor-not-allowed"
                    aria-pressed={active}
                    title={tooSmall ? 'Not enough questions in this subject yet' : `Load ${set.title}`}
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
                      style={{
                        borderColor: (subject?.accent ?? '#10b981') + '55',
                        background: (subject?.accent ?? '#10b981') + '18',
                        color: subject?.accent ?? '#10b981',
                      }}
                    >
                      <ChapterIcon icon={subject?.icon ?? 'sparkles'} className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-1.5">
                        <span className="truncate text-[13px] font-bold">{set.title}</span>
                        {active && <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] text-muted-foreground">{set.blurb}</span>
                      <span className="mt-1 flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                        <span className="rounded border border-border/60 bg-background/60 px-1.5 py-px">
                          {set.poolCount} Q pool
                        </span>
                        <span className="rounded border border-border/60 bg-background/60 px-1.5 py-px">
                          {effective} Q set
                        </span>
                        <span
                          className={`rounded border px-1.5 py-px ${
                            set.timed
                              ? 'border-amber-300/40 bg-amber-300/10 text-amber-300'
                              : 'border-border/60 bg-background/60'
                          }`}
                        >
                          {set.timed ? 'timed' : 'untimed'}
                        </span>
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => startPreset(set)}
                    disabled={tooSmall}
                    aria-label={`Start ${set.title} now`}
                    title={`Start ${set.title} now · ${effective} Qs${set.timed ? ' · timed' : ''}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 transition-all hover:border-emerald-400/60 hover:bg-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                      <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.9l11-6.86a1.05 1.05 0 0 0 0-1.8l-11-6.86A1.05 1.05 0 0 0 8 5.14z" />
                    </svg>
                  </button>
                </div>
              )
            })}
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* chapter picker */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-base font-bold tracking-tight">Chapters</h2>
              <div className="flex items-center gap-2 text-[11px]">
                <button
                  onClick={() => setSelected(new Set(LIBRARY_CHAPTERS.map((c) => c.id)))}
                  aria-pressed={allSelected}
                  className={`rounded-full border px-3 py-1 font-semibold transition-colors hover:border-emerald-400/40 hover:text-foreground ${
                    allSelected
                      ? 'border-primary/50 bg-primary/10 text-primary'
                      : 'border-border/80 text-muted-foreground'
                  }`}
                >
                  All {LIBRARY_CHAPTERS.length}
                </button>
                <button
                  onClick={() => setSelected(new Set())}
                  disabled={selected.size === 0}
                  className="rounded-full border border-border/80 px-3 py-1 font-semibold text-muted-foreground transition-colors hover:border-rose-400/40 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Clear
                </button>
              </div>
            </div>
            <div className="grid gap-4">
              {LIBRARY_BOOKS.map((book) => {
                const chapters = LIBRARY_CHAPTERS.filter((c) => c.bookId === book.id)
                return (
                  <div key={book.id}>
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        <BookOpen className="h-3 w-3 text-emerald-400/80" aria-hidden />
                        {book.title}{book.edition ? ` · ${book.edition}` : ''}
                      </p>
                      <button
                        onClick={() =>
                          setSelected((s) => {
                            const n = new Set(s)
                            const allOn = chapters.every((c) => n.has(c.id))
                            chapters.forEach((c) => (allOn ? n.delete(c.id) : n.add(c.id)))
                            return n
                          })
                        }
                        className="rounded px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {chapters.every((c) => selected.has(c.id)) ? 'none' : 'all'}
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {chapters.map((ch) => {
                        const on = selected.has(ch.id)
                        return (
                          <button
                            key={ch.id}
                            onClick={() =>
                              setSelected((s) => {
                                const n = new Set(s)
                                if (n.has(ch.id)) n.delete(ch.id)
                                else n.add(ch.id)
                                return n
                              })
                            }
                            aria-pressed={on}
                            className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left transition-all ${
                              on
                                ? 'border-primary/60 bg-primary/10 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)]'
                                : 'border-border/70 bg-muted/20 hover:border-border'
                            }`}
                          >
                            <span
                              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border ${
                                on ? 'border-primary/50 bg-primary/15 text-primary' : 'border-border text-muted-foreground'
                              }`}
                            >
                              {on ? <Check className="h-3.5 w-3.5" /> : <span className="font-mono text-[10px]">{ch.number}</span>}
                            </span>
                            <span className="min-w-0">
                              <span className={`block truncate text-[12px] font-semibold ${on ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {ch.shortTitle}
                              </span>
                              <span className="block font-mono text-[10px] text-muted-foreground">
                                {POOL.filter((q) => q.sectionId.startsWith(`${ch.id}-s`)).length} Qs
                              </span>
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              {selected.size === 0
                ? 'Nothing selected — pick at least one chapter to start.'
                : `${selected.size} chapter${selected.size !== 1 ? 's' : ''} selected · ${poolForSelection.length} questions available.`}
            </p>
          </motion.div>

          {/* settings + history */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6"
            >
              <h2 className="mb-4 text-base font-bold tracking-tight">Format</h2>

              <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Questions
              </span>
              <div className="mb-4 flex gap-2">
                {QUESTION_PRESETS.map((n) => (
                  <button
                    key={n}
                    onClick={() => setCount(n)}
                    className={`flex-1 rounded-xl border py-2 font-mono text-sm font-bold transition-all ${
                      count === n
                        ? 'border-primary/60 bg-primary/10 text-foreground'
                        : 'border-border/70 bg-muted/20 text-muted-foreground hover:border-border'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setTimed((t) => !t)}
                aria-pressed={timed}
                className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 transition-all ${
                  timed ? 'border-amber-300/40 bg-amber-300/[0.07]' : 'border-border/70 bg-muted/20'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Timer className={`h-4 w-4 ${timed ? 'text-amber-300' : 'text-muted-foreground'}`} />
                  <span className="text-left">
                    <span className="block text-[13px] font-semibold">Timed test</span>
                    <span className="block text-[11px] text-muted-foreground">90 s per question, auto-submit</span>
                  </span>
                </span>
                <span
                  className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
                    timed ? 'bg-amber-400' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
                      timed ? 'left-[18px]' : 'left-0.5'
                    }`}
                  />
                </span>
              </button>

              <button
                onClick={startExam}
                disabled={poolForSelection.length < 4}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_rgba(52,211,153,0.35)] transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <GraduationCap className="h-4 w-4" />
                {poolForSelection.length === 0
                  ? 'Select at least one chapter'
                  : `Start exam · ${effectiveCount} Qs${timed ? ` · ${fmtTime(effectiveCount * 90)}` : ''}`}
              </button>
            </motion.div>

            {/* history */}
            {history.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24 }}
                className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Award className="h-4 w-4 text-amber-300" />
                  <h2 className="text-sm font-bold tracking-tight">Past attempts</h2>
                </div>
                <div className="max-h-60 space-y-2 overflow-y-auto pr-1">
                  {history.slice(0, 8).map((h, i) => {
                    const pct = h.total ? Math.round((h.score / h.total) * 100) : 0
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-muted/20 px-3.5 py-2.5"
                      >
                        <div className="min-w-0">
                          <div className="truncate text-[12px] font-semibold">{h.label}</div>
                          <div className="font-mono text-[10px] text-muted-foreground">
                            {new Date(h.createdAt).toLocaleDateString()} · {fmtTime(h.durationSec)}
                          </div>
                        </div>
                        <span
                          className={`shrink-0 rounded-lg px-2.5 py-1 font-mono text-[12px] font-bold ${
                            pct >= 60 ? 'text-emerald-300' : 'text-amber-300'
                          }`}
                        >
                          {h.score}/{h.total}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={() => navigate(chapterId ? { name: 'chapter', chapterId } : { name: 'library' })}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {chapterId ? 'Back to chapter' : 'Back to library'}
          </button>
        </div>
      </div>
    )
  }

  // ======================== RUN ========================
  if (phase === 'run' && run) {
    const q = run.questions[cursor]
    // Only offer the visual-diagram toggle when a genuine diagram exists
    const hasDiagram = detectDiagramTopic(q.q.q, q.q.explanation, q.sectionId) !== null
    const answered = run.answers.filter((a) => a !== null).length
    const danger = remainingSec !== null && remainingSec <= 60
    const low = remainingSec !== null && remainingSec <= Math.max(60, (run.timeLimitSec ?? 0) * 0.2)

    return (
      <div className="mx-auto max-w-4xl xl:max-w-5xl px-4 py-8 sm:px-6">
        {/* top bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <ClipboardCheck className="h-4 w-4 text-rose-300" /> Test · Q {cursor + 1}/{run.questions.length}
            {run.isRetake && (
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/40 bg-amber-300/10 px-2.5 py-1 text-[10px] font-bold tracking-wider text-amber-300">
                <RotateCcw className="h-3 w-3" /> Miss retake
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {remainingSec !== null && (
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-mono text-sm font-bold tabular-nums transition-colors ${
                  danger
                    ? 'border-rose-400/50 bg-rose-400/10 text-rose-300'
                    : low
                      ? 'border-amber-300/50 bg-amber-300/10 text-amber-300'
                      : 'border-border/80 bg-card text-foreground'
                }`}
              >
                {danger ? <AlarmClock className="h-3.5 w-3.5" /> : <Timer className="h-3.5 w-3.5" />}
                {fmtTime(Math.max(0, remainingSec))}
              </span>
            )}
            <button
              onClick={() => {
                if (confirm('Abandon this test? Your progress will not be saved.')) {
                  enterRef.current = null
                  setRun(null)
                  setPhase('setup')
                }
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-rose-400/40 hover:text-rose-300"
            >
              <X className="h-3.5 w-3.5" /> Quit
            </button>
          </div>
        </div>

        {/* progress strip */}
        <div className="mb-6 flex gap-1">
          {run.questions.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to question ${i + 1}`}
              className={`h-1.5 flex-1 rounded-full transition-all ${
                i === cursor
                  ? 'bg-primary'
                  : run.answers[i] !== null
                    ? 'bg-emerald-400/60'
                    : run.flagged[i]
                      ? 'bg-amber-400/70'
                      : 'bg-muted'
              }`}
            />
          ))}
        </div>

        {/* question card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cursor}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/40 px-3 py-1 font-mono text-[10px] text-muted-foreground">
                §{q.sectionNumber} · {q.sectionTitle}
              </span>
              <div className="flex items-center gap-2">
                {hasDiagram && (
                  <button
                    type="button"
                    onClick={() => setShowActiveDiagram((prev) => !prev)}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-all ${
                      showActiveDiagram
                        ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                        : 'border-border/70 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground'
                    }`}
                    title="Toggle animated visual diagram setup"
                  >
                    <Atom className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{showActiveDiagram ? 'Hide diagram' : 'Visual diagram'}</span>
                  </button>
                )}
                <button
                  onClick={() => toggleFlag()}
                  aria-pressed={run.flagged[cursor]}
                  aria-label={run.flagged[cursor] ? 'Unflag question' : 'Flag question'}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-all ${
                    run.flagged[cursor]
                      ? 'border-amber-300/50 bg-amber-300/10 text-amber-300'
                      : 'border-border/70 text-muted-foreground hover:border-amber-300/40 hover:text-amber-300'
                  }`}
                >
                  <Flag className="h-4 w-4" />
                </button>
              </div>
            </div>

            <h2 className="text-[17px] font-semibold leading-relaxed sm:text-lg"><RichText text={q.q.q} /></h2>

            {showActiveDiagram && hasDiagram && (
              <div className="mt-4">
                <VisualDiagramSolver
                  questionText={q.q.q}
                  options={q.q.options}
                  chapterId={q.sectionId}
                  initiallyOpen={true}
                />
              </div>
            )}

            <div className="mt-6 grid gap-2.5">
              {q.q.options.map((opt, i) => {
                const picked = run.answers[cursor] === i
                return (
                  <button
                    key={i}
                    onClick={() => answer(i)}
                    aria-pressed={picked}
                    className={`flex items-start gap-3 rounded-xl border px-4 py-3.5 text-left transition-all ${
                      picked
                        ? 'border-primary/60 bg-primary/10 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.25)]'
                        : 'border-border/70 bg-muted/20 hover:border-border hover:bg-muted/40'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] font-bold ${
                        picked ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground'
                      }`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-[14px] leading-relaxed"><RichText text={opt} /></span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* keyboard hints */}
        <p className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground print:hidden">
          <span className="inline-flex items-center gap-1">
            <kbd className="rounded border border-border bg-muted px-1 font-mono text-[10px]">1</kbd>–
            <kbd className="rounded border border-border bg-muted px-1 font-mono text-[10px]">4</kbd> answer
          </span>
          <span aria-hidden="true" className="text-muted-foreground/50">·</span>
          <span className="inline-flex items-center gap-1">
            <kbd className="rounded border border-border bg-muted px-1 font-mono text-[10px]">←</kbd>
            <kbd className="rounded border border-border bg-muted px-1 font-mono text-[10px]">→</kbd> move
          </span>
          <span aria-hidden="true" className="text-muted-foreground/50">·</span>
          <span className="inline-flex items-center gap-1">
            <kbd className="rounded border border-border bg-muted px-1 font-mono text-[10px]">F</kbd> flag
          </span>
        </p>

        {/* bottom bar */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            onClick={() => goTo(cursor - 1)}
            disabled={cursor === 0}
            className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-card px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" /> Prev
          </button>
          <span className="font-mono text-xs text-muted-foreground">
            {answered}/{run.questions.length} answered
          </span>
          {cursor < run.questions.length - 1 ? (
            <button
              onClick={() => goTo(cursor + 1)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Next <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                flushTime() // charge the final question before scoring
                setPhase('results')
              }}
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-500/85 dark:bg-amber-300 dark:text-amber-950 dark:hover:bg-amber-200"
            >
              <ClipboardCheck className="h-4 w-4" /> Submit
            </button>
          )}
        </div>

        {cursor === run.questions.length - 1 && answered < run.questions.length && (
          <p className="mt-3 text-center text-xs text-amber-300/90">
            {run.questions.length - answered} question{run.questions.length - answered !== 1 ? 's' : ''} still unanswered.
          </p>
        )}
      </div>
    )
  }

  // ======================== RESULTS ========================
  if (phase === 'results' && run) {
    const pct = Math.round((score / run.questions.length) * 100)
    const durationSec = Math.floor((now - run.startedAt) / 1000)
    const grade = pct >= 90 ? 'Outstanding' : pct >= 75 ? 'Strong pass' : pct >= 60 ? 'Pass' : pct >= 40 ? 'Borderline' : 'Needs work'
    const missedCount = run.questions.length - score

    // pacing analytics from the per-question time tracking (real elapsed times,
    // even for untimed exams)
    const totalSec = run.secPerQ.reduce((a, b) => a + b, 0)
    const avgSec = run.questions.length > 0 ? totalSec / run.questions.length : 0
    const fastestSec = run.secPerQ.length > 0 ? Math.min(...run.secPerQ) : 0
    const slowestSec = run.secPerQ.length > 0 ? Math.max(...run.secPerQ) : 0
    const slowestIdx = run.questions
      .map((_, i) => i)
      .sort((a, b) => run.secPerQ[b] - run.secPerQ[a])
      .slice(0, 3)
    const slowestMax = slowestIdx.length > 0 ? run.secPerQ[slowestIdx[0]] : 0

    return (
      <div className="mx-auto max-w-4xl xl:max-w-5xl px-4 py-8 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative mb-8 overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8"
        >
          <div className="absolute inset-0 sv-hero-glow opacity-40" />
          <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold ${
                  pct >= 60
                    ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                    : 'border-amber-300/30 bg-amber-300/10 text-amber-300'
                }`}
              >
                <Award className="h-3.5 w-3.5" /> {grade}
              </div>
              <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                {score} / {run.questions.length} correct
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                {run.questions.length} questions · {fmtTime(durationSec)} used
                {run.timeLimitSec ? ` of ${fmtTime(run.timeLimitSec)}` : ''} ·{' '}
                {saved ? 'attempt saved' : 'saving…'}
              </p>
              {missedCount > 0 ? (
                <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-rose-400/25 bg-rose-400/[0.07] px-3 py-1.5 text-[11.5px] font-medium text-rose-200">
                  <Zap className="h-3 w-3" /> Misses are saved to your flashcard deck for spaced
                  review.
                </p>
              ) : (
                <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-3 py-1.5 text-[11.5px] font-medium text-emerald-200">
                  <Check className="h-3 w-3" /> Perfect — nothing to drill.
                </p>
              )}
            </div>
            {/* score ring */}
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center">
              <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90">
                <circle cx="60" cy="60" r="50" fill="none" strokeWidth="10" className="stroke-muted/30" />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  strokeWidth="10"
                  strokeLinecap="round"
                  className={pct >= 60 ? 'stroke-emerald-400' : 'stroke-amber-400'}
                  strokeDasharray={`${(pct / 100) * 314.2} 314.2`}
                  initial={false}
                  animate={{ strokeDashoffset: 0 }}
                  style={{ transition: 'stroke-dasharray 1s ease' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-mono text-2xl font-bold">{pct}%</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">score</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* per-chapter breakdown */}
        <div className="mb-8 rounded-2xl border border-border/80 bg-card p-5 sm:p-6">
          <h2 className="mb-4 text-sm font-bold tracking-tight">Chapter breakdown</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {Object.entries(
              run.questions.reduce<Record<string, { right: number; total: number }>>((acc, q, i) => {
                // group by the REAL chapter id (derived from the section id) —
                // chapter numbers alone collide across books
                const key = q.sectionId.replace(/-s\d+$/, '')
                acc[key] = acc[key] ?? { right: 0, total: 0 }
                acc[key].total++
                if (run.answers[i] === q.q.answer) acc[key].right++
                return acc
              }, {})
            )
              .sort((a, b) => a[0].localeCompare(b[0]))
              .map(([chId, { right, total }]) => {
                const ch = LIBRARY_CHAPTERS.find((c) => c.id === chId)
                return (
                  <div
                    key={chId}
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/20 px-3.5 py-2.5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10">
                      {ch && <ChapterIcon icon={ch.icon} className="h-4 w-4 text-emerald-300" />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[12.5px] font-semibold">
                        Ch {ch?.number ?? '?'} · {ch?.shortTitle ?? chId}
                      </span>
                      <span className="mt-1 block h-1 overflow-hidden rounded-full bg-muted">
                        <span
                          className={`block h-full rounded-full ${right === total ? 'bg-emerald-400' : 'bg-amber-400'}`}
                          style={{ width: `${(right / total) * 100}%` }}
                        />
                      </span>
                    </span>
                    <span className="shrink-0 font-mono text-[12px] font-bold text-muted-foreground">
                      {right}/{total}
                    </span>
                  </div>
                )
              })}
          </div>
        </div>

        {/* pacing analysis */}
        <div className="mb-8 rounded-2xl border border-border/80 bg-card p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-sm font-bold tracking-tight">
              <Gauge className="h-4 w-4 text-amber-300" /> Pacing analysis
            </h2>
            <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
              {run.timeLimitSec ? 'budget 90 s / question' : 'untimed'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              {
                icon: Gauge,
                label: 'Avg / question',
                value: `${Math.round(avgSec)} s`,
                cls: avgSec > 90 ? 'text-amber-300' : 'text-emerald-300',
              },
              {
                icon: Timer,
                label: 'Total time',
                value: fmtTime(Math.round(totalSec)),
                cls: 'text-emerald-300',
              },
              {
                icon: Zap,
                label: 'Fastest question',
                value: `${Math.round(fastestSec)} s`,
                cls: 'text-emerald-300',
              },
              {
                icon: AlarmClock,
                label: 'Slowest question',
                value: `${Math.round(slowestSec)} s`,
                cls: 'text-amber-300',
              },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border/70 bg-muted/20 px-3.5 py-3">
                <s.icon className={`h-4 w-4 ${s.cls}`} />
                <div className="mt-2 font-mono text-lg font-bold leading-none">{s.value}</div>
                <div className="mt-1.5 text-[11px] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Slowest {slowestIdx.length > 1 ? `${slowestIdx.length} questions` : 'question'}
            </span>
            <div className="space-y-2">
              {slowestIdx.map((i) => {
                const sq = run.questions[i]
                const t = run.secPerQ[i]
                const correct = run.answers[i] === sq.q.answer
                const width = slowestMax > 0 ? Math.max(4, Math.round((t / slowestMax) * 100)) : 0
                return (
                  <div key={i} className="rounded-xl border border-border/60 bg-muted/20 px-3.5 py-2.5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-2">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            correct ? 'bg-emerald-400/15 text-emerald-300' : 'bg-rose-400/15 text-rose-300'
                          }`}
                        >
                          {correct ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        </span>
                        <span className="shrink-0 font-mono text-[10px] text-muted-foreground">§{sq.sectionNumber}</span>
                        <span className="truncate text-[12.5px] font-semibold">{sq.q.q}</span>
                      </div>
                      <span
                        className={`shrink-0 font-mono text-[12px] font-bold ${t > 90 ? 'text-amber-300' : 'text-foreground'}`}
                      >
                        {Math.round(t)} s
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${width}%` }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-amber-300/80 to-rose-400/80"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* review list */}
        <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300/80">
          <Eye className="h-4 w-4" /> Answer review
        </h2>
        <div className="grid gap-3">
          {run.questions.map((q, i) => {
            const picked = run.answers[i]
            const correct = picked === q.q.answer
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.25 }}
                className={`rounded-xl border p-4 sm:p-5 ${
                  correct ? 'border-emerald-400/25 bg-emerald-400/[0.04]' : 'border-rose-400/30 bg-rose-400/[0.04]'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Q{i + 1} · §{q.sectionNumber}
                  </span>
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      correct ? 'bg-emerald-400/15 text-emerald-300' : 'bg-rose-400/15 text-rose-300'
                    }`}
                  >
                    {correct ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                  </span>
                </div>
                <p className="mt-2 text-[14px] font-semibold leading-relaxed">{q.q.q}</p>
                <div className="mt-3 space-y-1.5 text-[13px]">
                  {picked !== null && !correct && (
                    <p className="text-rose-300">
                      <span className="font-semibold">Your answer:</span> {String.fromCharCode(65 + picked)}. {q.q.options[picked]}
                    </p>
                  )}
                  {picked === null && <p className="text-amber-300"><span className="font-semibold">Unanswered</span></p>}
                  <p className="text-emerald-300">
                    <span className="font-semibold">Correct:</span> {String.fromCharCode(65 + q.q.answer)}. {q.q.options[q.q.answer]}
                  </p>
                  <p className="border-t border-dashed border-border/60 pt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                    {q.q.explanation}
                  </p>
                  <div className="pt-2">
                    <VisualDiagramSolver
                      questionText={q.q.q}
                      options={q.q.options}
                      answer={q.q.answer}
                      explanation={q.q.explanation}
                      chapterId={q.sectionId}
                      initiallyOpen={false}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* actions */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {missedCount > 0 && (
            <button
              onClick={() => navigate({ name: 'flashcards', examMisses: true })}
              className="inline-flex items-center gap-2 rounded-xl border border-rose-400/30 bg-rose-400/10 px-5 py-3 text-sm font-semibold text-rose-200 shadow-[0_8px_30px_-10px_rgba(251,113,133,0.45)] transition-all hover:bg-rose-400/20"
            >
              <Zap className="h-4 w-4" /> Drill {missedCount} miss{missedCount !== 1 ? 'es' : ''} as flashcards
            </button>
          )}
          {missedCount > 0 && (
            <button
              onClick={retakeMisses}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300/40 bg-amber-300/10 px-5 py-3 text-sm font-semibold text-amber-200 shadow-[0_8px_30px_-10px_rgba(252,211,77,0.4)] transition-all hover:bg-amber-300/20"
            >
              <RotateCcw className="h-4 w-4" /> Retake the {missedCount} you missed
            </button>
          )}
          <button
            onClick={() => {
              setRun(null)
              setPhase('setup')
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <RotateCcw className="h-4 w-4" /> New exam
          </button>
          <button
            onClick={() => navigate({ name: 'progress' })}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-emerald-400/40"
          >
            <Award className="h-4 w-4 text-emerald-300" /> Progress dashboard
          </button>
          <button
            onClick={() => navigate({ name: 'library' })}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Library
          </button>
        </div>
      </div>
    )
  }

  return null
}

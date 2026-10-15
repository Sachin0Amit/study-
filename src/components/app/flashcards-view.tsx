'use client'

import { Fragment, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlarmClock,
  ArrowLeft,
  BookOpen,
  Brain,
  Check,
  ChevronsLeftRight,
  History,
  Layers,
  RotateCcw,
  Sparkles,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react'
import { LIBRARY_BOOKS, LIBRARY_CHAPTERS, type Concept } from '@/data/library'
import { RichText } from '../rich-text'
import { EasyBox } from './easy-box'
import { allContent } from '@/data/content'
import { ChapterIcon } from './chapter-icon'
import { useStudy } from '@/store/useStudy'
import { logActivity } from '@/lib/activity'

interface Flashcard {
  key: string
  term: string
  statement: string
  detail?: string
  kind: Concept['kind'] | 'exam'
  sectionId: string
  sectionNumber: number
  chapterNumber: number
  chapterShort: string
}

/** One missed exam question as stored on ExamAttempt.missed (see /api/exam) */
interface MissedQuestion {
  q: string
  options: string[]
  answer: number
  explanation: string
  sectionId: string
  sectionNumber: number
  sectionTitle: string
  chapterNumber: number
  picked: number | null
}

/** SRS state for one card, from /api/flashcards */
interface CardSrs {
  box: number
  dueAt: string
  seen: number
  correct: number
}

type DeckMode = 'due' | 'all'

/** "rosen-ch10-s6" → "rosen-ch10" (matches the trailing -sN, never a mid-id hyphen) */
function chapterIdOf(sectionId: string): string {
  return sectionId.replace(/-s\d+$/, '')
}

function buildDeck(chapterId?: string): Flashcard[] {
  const cards: Flashcard[] = []
  for (const content of allContent) {
    const chapter = LIBRARY_CHAPTERS.find((c) => c.id === chapterIdOf(content.sectionId))
    if (!chapter) continue
    if (chapterId && chapter.id !== chapterId) continue
    const sectionNum = Number(/-s(\d+)$/.exec(content.sectionId)?.[1] ?? 0)
    for (const c of content.concepts) {
      cards.push({
        key: `${content.sectionId}::${c.term}`,
        term: c.term,
        statement: c.statement,
        detail: c.detail,
        kind: c.kind,
        sectionId: content.sectionId,
        sectionNumber: sectionNum,
        chapterNumber: chapter.number,
        chapterShort: chapter.shortTitle,
      })
    }
  }
  return cards
}

/** Fisher–Yates (in-place on a copy) */
function shuffled<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** FNV-1a 32-bit hash of the question text → base36 (6 chars, stable across sessions) */
function hashText(text: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h.toString(36).slice(0, 6).padStart(6, '0')
}

/** Flatten every attempt's missed questions into a deduped Flashcard deck
 *  (attempts come newest-first → first occurrence wins). Card keys are
 *  `exammiss::<sectionId>::<hash>` — never the concept-card key format. */
function buildMissesDeck(attempts: { missed?: MissedQuestion[] }[]): Flashcard[] {
  const byKey = new Map<string, Flashcard>()
  for (const attempt of attempts) {
    for (const m of attempt.missed ?? []) {
      if (!m || typeof m.q !== 'string' || !Array.isArray(m.options)) continue
      const key = `exammiss::${m.sectionId}::${hashText(m.q)}`
      if (byKey.has(key)) continue
      const chapter = LIBRARY_CHAPTERS.find((c) => c.id === chapterIdOf(m.sectionId))
      byKey.set(key, {
        key,
        term: m.q,
        statement: `**${String.fromCharCode(65 + m.answer)}. ${m.options[m.answer] ?? ''}**`,
        detail: m.explanation,
        kind: 'exam',
        sectionId: m.sectionId,
        sectionNumber: m.sectionNumber,
        chapterNumber: m.chapterNumber,
        chapterShort: chapter?.shortTitle ?? `Ch ${m.chapterNumber}`,
      })
    }
  }
  return [...byKey.values()]
}

const KIND_LABEL: Record<string, string> = {
  definition: 'Definition',
  theorem: 'Theorem',
  law: 'Law',
  method: 'Method',
  notation: 'Notation',
  insight: 'Insight',
  exam: 'Missed question',
}

/** badge tint per card kind — exam misses carry the rose exam accent */
const KIND_STYLE: Record<string, string> = {
  exam: 'border-rose-400/30 bg-rose-400/10 text-rose-200',
}

const kindBadgeClass = (kind: string): string =>
  KIND_STYLE[kind] ?? 'border-emerald-400/25 bg-emerald-400/10 text-emerald-200'

/** Leitner intervals shown after answering (matches API) */
const BOX_DAYS = [0, 1, 2, 4, 8, 16]

/** grade-button labels — rendered on the buttons AND in the keyboard hint row */
const AGAIN_LABEL = 'Again'
const KNEW_LABEL = 'I knew it'
/** keyboard shortcuts mapped onto the two grade buttons */
const AGAIN_KEY = '1'
const KNEW_KEY = '2'

/** collapse whitespace + truncate so aria-live announcements stay short */
function shortText(text: string, max = 90): string {
  const t = text.replace(/\s+/g, ' ').trim()
  return t.length > max ? `${t.slice(0, max - 1)}…` : t
}

/** tiny keyboard-hint chip (echoes the ⌘K kbd style in the header palette) */
function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="rounded border border-border/70 bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
      {children}
    </kbd>
  )
}

/** Easy help under every flashcard answer — respects global Easy toggle. */
function EasyCardHelp({ term, statement, detail }: { term: string; statement: string; detail?: string }) {
  const easyMode = useStudy((s) => s.easyMode)
  if (!easyMode) return null
  return (
    <div className="pb-2 text-left">
      <EasyBox variant="concept" term={term} statement={statement} detail={detail} defaultOpen={false} />
    </div>
  )
}

export function FlashcardsView({
  chapterId,
  examMisses,
}: {
  chapterId?: string
  examMisses?: boolean
}) {
  const navigate = useStudy((s) => s.navigate)
  const deviceId = useStudy((s) => s.deviceId)
  const ensureDevice = useStudy((s) => s.ensureDevice)

  const [srs, setSrs] = useState<Record<string, CardSrs> | null>(null)
  const [srsLoaded, setSrsLoaded] = useState(false)
  // exam-misses deck from /api/exam attempts (null = not loaded yet)
  const [misses, setMisses] = useState<Flashcard[] | null>(null)
  const [missesLoaded, setMissesLoaded] = useState(false)

  const [picking, setPicking] = useState(!chapterId && !examMisses)
  const [mode, setMode] = useState<DeckMode>('all')
  const [deck, setDeck] = useState<Flashcard[]>(() =>
    chapterId ? shuffled(buildDeck(chapterId)) : []
  )
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState<Set<string>>(new Set())
  const [again, setAgain] = useState<Flashcard[]>([])
  const [sessionDone, setSessionDone] = useState(false)
  // screen-reader announcement text for the runner's aria-live region
  const [announcement, setAnnouncement] = useState('')
  // accumulated answers for this study session: cardKey → remembered (last answer wins)
  const resultsRef = useRef<Map<string, boolean>>(new Map())
  const did = useRef(deviceId ?? ensureDevice())
  // last grade outcome ("Correct — box 3, next in 4 days"), reused by the completion announcement
  const lastGradeRef = useRef('')
  // pending auto-advance timer after grading (cancelled on manual navigation / exit)
  const advanceTimerRef = useRef<number | undefined>(undefined)
  // focus the freshly mounted card after a grade / deck start (focus follows content)
  const shouldFocusCardRef = useRef(false)
  const cardBtnRef = useRef<HTMLButtonElement | null>(null)

  // load SRS states once
  useEffect(() => {
    let cancelled = false
    fetch(`/api/flashcards?deviceId=${encodeURIComponent(did.current)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled) return
        setSrs(data?.cards ?? {})
        setSrsLoaded(true)
      })
      .catch(() => {
        if (!cancelled) setSrsLoaded(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const isDue = (card: Flashcard): boolean => {
    if (!srs) return true // before load treat nothing as due (picker shows skeleton)
    const st = srs[card.key]
    if (!st) return true // never seen
    return new Date(st.dueAt).getTime() <= Date.now()
  }

  /** stable ref callback: remembers the card <button> and focuses it when a
   *  grade / deck start just advanced the deck, so keyboard users land on the new card */
  const setCardBtnRef = useCallback((el: HTMLButtonElement | null) => {
    cardBtnRef.current = el
    if (el && shouldFocusCardRef.current) {
      shouldFocusCardRef.current = false
      el.focus()
    }
  }, [])

  /** start a session from a pre-built pool (stable identity for effects) */
  const beginDeck = useCallback((pool: Flashcard[], m: DeckMode) => {
    const d = shuffled(pool)
    setMode(m)
    setDeck(d)
    setIdx(0)
    setFlipped(false)
    setKnown(new Set())
    setAgain([])
    resultsRef.current = new Map()
    setSessionDone(false)
    setPicking(false)
    shouldFocusCardRef.current = true
    setAnnouncement(d.length > 0 ? `Card 1 of ${d.length}. ${shortText(d[0].term)}` : '')
  }, [])

  const startDeck = (cid: string | undefined, m: DeckMode) => {
    const full = buildDeck(cid)
    const pool = m === 'due' ? full.filter(isDue) : full
    beginDeck(pool.length ? pool : full, m) // fallback: empty due → all
  }

  // auto-start the misses deck when navigated here from exam results
  // (guard fires at resolve time so a cancelled in-flight fetch can re-run)
  const missesStartedRef = useRef(false)
  useEffect(() => {
    if (!examMisses) return
    let cancelled = false
    fetch(`/api/exam?deviceId=${encodeURIComponent(did.current)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (cancelled || missesStartedRef.current) return
        const cards = buildMissesDeck(d?.attempts ?? [])
        setMisses(cards)
        setMissesLoaded(true)
        if (cards.length > 0) {
          missesStartedRef.current = true
          beginDeck(cards, 'all')
        } else {
          setPicking(true) // nothing to drill → land on the normal picker
        }
      })
      .catch(() => {
        if (!cancelled) {
          setMissesLoaded(true)
          setPicking(true)
        }
      })
    return () => {
      cancelled = true
    }
  }, [examMisses, beginDeck])

  // refresh the misses deck whenever the picker is shown (keeps due counts fresh)
  useEffect(() => {
    if (!picking) return
    let cancelled = false
    fetch(`/api/exam?deviceId=${encodeURIComponent(did.current)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (cancelled) return
        setMisses(buildMissesDeck(d?.attempts ?? []))
        setMissesLoaded(true)
      })
      .catch(() => {
        if (!cancelled) setMissesLoaded(true)
      })
    return () => {
      cancelled = true
    }
  }, [picking])

  const current = deck[idx]
  const total = deck.length
  const progressPct = total ? Math.round(((idx + (flipped ? 0.5 : 0)) / total) * 100) : 0

  /** push accumulated answers to the SRS API */
  const flushResults = async () => {
    const results = [...resultsRef.current.entries()].map(([key, remembered]) => ({
      key,
      remembered,
    }))
    if (results.length === 0) return
    resultsRef.current = new Map()
    try {
      const res = await fetch('/api/flashcards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deviceId: did.current, results }),
      })
      if (res.ok) {
        logActivity('cards')
        // refresh local state so due counts update on the picker
        const fresh = await fetch(`/api/flashcards?deviceId=${encodeURIComponent(did.current)}`)
        if (fresh.ok) {
          const data = await fresh.json()
          setSrs(data?.cards ?? {})
        }
      }
    } catch {
      // offline-tolerant: results simply not persisted
    }
  }

  const answer = (didKnow: boolean) => {
    if (!current) return
    resultsRef.current.set(current.key, didKnow)
    if (didKnow) {
      setKnown((k) => new Set(k).add(current.key))
    } else {
      setAgain((a) => [...a, current])
    }
    setFlipped(false)
    // aria-live: grade outcome + the upcoming card (round completion is announced
    // by the sessionDone effect once the results screen mounts its live region)
    const box = srs?.[current.key]?.box ?? 0
    const nb = didKnow ? Math.min(box + 1, 5) : 1
    const days = BOX_DAYS[nb]
    lastGradeRef.current = didKnow
      ? `Correct — box ${nb}, next in ${days} day${days === 1 ? '' : 's'}`
      : 'Again — back in the deck'
    // incremental flush every 5 answers so progress survives tab closes
    if (resultsRef.current.size > 0 && resultsRef.current.size % 5 === 0) {
      void flushResults()
    }
    if (idx + 1 >= total) {
      setSessionDone(true)
      void flushResults()
    } else {
      const next = deck[idx + 1]
      setAnnouncement(
        next
          ? `${lastGradeRef.current}. Card ${idx + 2} of ${total}. ${shortText(next.term)}`
          : lastGradeRef.current
      )
      shouldFocusCardRef.current = true
      advanceTimerRef.current = window.setTimeout(() => setIdx((i) => i + 1), 120)
    }
  }

  /** manual prev/next (←/→ or J/K) — moves without grading */
  const goToCard = (next: number) => {
    if (next < 0 || next >= total || !deck[next]) return
    window.clearTimeout(advanceTimerRef.current)
    if (next === idx) return
    setIdx(next)
    setFlipped(false)
    setAnnouncement(`Card ${next + 1} of ${total}. ${shortText(deck[next].term)}`)
  }

  /** flip via card click or Space/Enter — announced so screen readers track the state */
  const flipCard = () => {
    const next = !flipped
    setFlipped(next)
    setAnnouncement(next ? 'Answer revealed.' : '')
  }

  const restartWithMissed = () => {
    if (again.length === 0) return
    const d = shuffled(again)
    setDeck(d)
    setAgain([])
    setIdx(0)
    setFlipped(false)
    setKnown(new Set())
    setSessionDone(false)
    shouldFocusCardRef.current = true
    setAnnouncement(d.length > 0 ? `Card 1 of ${d.length}. ${shortText(d[0].term)}` : '')
  }

  // box level of the current card (0 = new)
  const currentBox = current && srs ? (srs[current.key]?.box ?? 0) : 0
  // predicted next interval for the current card
  const nextInterval = (remembered: boolean) => {
    const box = currentBox
    const nb = remembered ? Math.min(box + 1, 5) : 1
    return BOX_DAYS[nb]
  }

  // announce round completion once the results screen (with its live region) is mounted
  useEffect(() => {
    if (!sessionDone) return
    setAnnouncement(
      `${lastGradeRef.current} Round complete — ${known.size} of ${total} cards known.`.trim()
    )
  }, [sessionDone, known, total])

  // cancel any pending auto-advance when the runner unmounts
  useEffect(() => () => window.clearTimeout(advanceTimerRef.current), [])

  /* -------- keyboard-first controls (active only while the runner is shown) --------
     Space/Enter flip · 1/2 grade (once revealed) · ←/→ or J/K move · Esc exits.
     Ignored while typing in form controls or while a dialog (⌘K palette) is open;
     focused buttons keep their native Space/Enter activation (no double flip). */
  useEffect(() => {
    if (picking || sessionDone || !current) return
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const t = e.target instanceof HTMLElement ? e.target : null
      if (
        t &&
        (t.tagName === 'INPUT' ||
          t.tagName === 'TEXTAREA' ||
          t.tagName === 'SELECT' ||
          t.isContentEditable)
      ) {
        return
      }
      if (document.querySelector('[role="dialog"]')) return

      if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
        // a focused button/link keeps its own native Space/Enter activation
        if (t?.closest('button, a[href], [role="button"], summary')) return
        e.preventDefault() // Space would otherwise scroll the page
        if (!flipped) flipCard()
        return
      }
      if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault()
        window.clearTimeout(advanceTimerRef.current)
        setFlipped(false)
        setPicking(true)
        return
      }
      if (e.key === AGAIN_KEY || e.key === KNEW_KEY) {
        if (!flipped) return // grade only after the answer is revealed
        e.preventDefault()
        answer(e.key === KNEW_KEY)
        return
      }
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'j') {
        e.preventDefault()
        goToCard(idx - 1)
        return
      }
      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'k') {
        e.preventDefault()
        goToCard(idx + 1)
        return
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [picking, sessionDone, current, flipped, idx, answer, goToCard, flipCard])

  /* ---------------- exam-misses deck loading ---------------- */
  if (examMisses && !missesLoaded) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
            <Zap className="h-4 w-4 text-rose-300" /> Loading your missed questions…
          </span>
          <span className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
            …
          </span>
        </div>
        <div className="animate-pulse rounded-3xl border border-border/80 bg-card p-7 sm:min-h-[360px] min-h-[320px]">
          <div className="flex items-center justify-between">
            <div className="h-5 w-24 rounded-full bg-muted" />
            <div className="h-4 w-20 rounded-full bg-muted" />
          </div>
          <div className="mt-12 space-y-3.5">
            <div className="mx-auto h-5 w-3/4 rounded-full bg-muted" />
            <div className="mx-auto h-5 w-5/6 rounded-full bg-muted" />
            <div className="mx-auto h-5 w-2/5 rounded-full bg-muted" />
          </div>
        </div>
      </div>
    )
  }

  /* ---------------- picker screen ---------------- */
  if (picking) {
    const allCards = buildDeck(undefined)
    const dueCount = (cid?: string) =>
      allCards
        .filter((c) => {
          if (!cid) return true
          return chapterIdOf(c.sectionId) === cid
        })
        .filter(isDue).length
    const totalDue = srsLoaded ? dueCount() : 0
    const mastered = srs
      ? Object.values(srs).filter((s) => s.box >= 4).length
      : 0
    const missesList = misses ?? []
    // a miss needs drilling while it is not mastered (box < 5) or due again
    const missesDue = missesList.filter((c) => {
      if (!srs) return true
      const st = srs[c.key]
      if (!st) return true // never reviewed
      return st.box < 5 || new Date(st.dueAt).getTime() <= Date.now()
    }).length

    return (
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative mb-8 overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8"
        >
          <div className="absolute inset-0 sv-hero-glow opacity-50" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-200">
              <Brain className="h-3.5 w-3.5" /> Flashcards · spaced repetition
            </div>
            <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
              Active recall, <span className="sv-text-gradient">spaced your way</span>
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Every definition, theorem, law and method from the book becomes a flip card. Answers
              are scheduled with Leitner boxes — cards you know drift away, cards you miss come
              back tomorrow.
            </p>

            {/* SRS summary chips */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => startDeck(undefined, 'due')}
                disabled={!srsLoaded || totalDue === 0}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_rgba(52,211,153,0.35)] transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <AlarmClock className="h-4 w-4" />
                Review due — {srsLoaded ? totalDue : '…'} cards
              </button>
              <button
                onClick={() => startDeck(undefined, 'all')}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-emerald-400/40"
              >
                <Sparkles className="h-4 w-4" /> Full deck — all chapters
              </button>
              {mastered > 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
                  <TrendingUp className="h-3.5 w-3.5" /> {mastered} cards mastered
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* exam misses → SRS deck */}
        {missesList.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mb-6 rounded-2xl border border-rose-400/30 bg-rose-400/[0.06] p-5 sm:p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-rose-400/30 bg-rose-400/10">
                  <Zap className="h-5 w-5 text-rose-300" />
                </span>
                <div>
                  <h2 className="text-[15px] font-bold tracking-tight text-rose-100">
                    Missed questions — {missesList.length} question{missesList.length !== 1 ? 's' : ''} from
                    your last attempts
                  </h2>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-relaxed text-muted-foreground">
                    <span>
                      Every question you got wrong or skipped, drilled until mastered.
                    </span>
                    {srsLoaded && missesDue > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-rose-400/25 bg-rose-400/10 px-2 py-0.5 font-mono text-[10px] font-bold text-rose-200">
                        <AlarmClock className="h-3 w-3" /> {missesDue} due
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <button
                onClick={() => beginDeck(missesList, 'all')}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-rose-400/40 bg-rose-400/15 px-5 py-3 text-sm font-semibold text-rose-100 transition-all hover:bg-rose-400/25"
              >
                <Zap className="h-4 w-4" /> Drill misses
              </button>
            </div>
          </motion.div>
        )}

        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          <Layers className="h-3.5 w-3.5" /> Or drill a single chapter
        </div>
        <div className="grid gap-6">
          {LIBRARY_BOOKS.map((book) => (
            <div key={book.id} className="min-w-0">
              <div className="mb-2.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                <BookOpen className="h-3 w-3 shrink-0 text-emerald-400/80" aria-hidden />
                <span className="min-w-0 truncate">{book.title}{book.edition ? ` · ${book.edition}` : ''}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {LIBRARY_CHAPTERS.filter((ch) => ch.bookId === book.id).map((ch, i) => {
            const count = buildDeck(ch.id).length
            const due = srsLoaded ? dueCount(ch.id) : 0
            return (
              <motion.div
                key={ch.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.04, 0.3) }}
                className="sv-card-glow group min-w-0 rounded-xl border border-border/80 bg-card p-4"
              >
                <button
                  onClick={() => startDeck(ch.id, due > 0 ? 'due' : 'all')}
                  className="flex w-full items-center gap-3.5 text-left"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10">
                    <ChapterIcon icon={ch.icon} className="h-4.5 w-4.5 text-emerald-300" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[10px] font-bold text-emerald-300/80">
                      CH {ch.number}
                    </span>
                    <span className="block truncate text-[14px] font-semibold">{ch.shortTitle}</span>
                  </span>
                  <span className="shrink-0 rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                    {count} cards
                  </span>
                </button>
                {due > 0 && (
                  <button
                    onClick={() => startDeck(ch.id, 'due')}
                    className="mt-2.5 flex w-full items-center justify-between rounded-lg border border-amber-300/25 bg-amber-300/[0.06] px-3 py-1.5 text-[11px] font-semibold text-amber-200 transition-colors hover:bg-amber-300/15"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <AlarmClock className="h-3 w-3" /> {due} due for review
                    </span>
                    <span className="font-mono opacity-70">→</span>
                  </button>
                )}
              </motion.div>
            )
          })}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  /* ---------------- results screen ---------------- */
  if (sessionDone) {
    const pct = total ? Math.round((known.size / total) * 100) : 0
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <p className="sr-only" role="status" aria-live="polite">
          {announcement}
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-card p-8 text-center"
        >
          <div className="absolute inset-0 sv-hero-glow opacity-60" />
          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10">
              <TrendingUp className="h-8 w-8 text-emerald-300" />
            </div>
            <h2 className="mt-4 text-2xl font-bold">Round complete</h2>
            <div className="mt-3 font-mono text-4xl font-bold text-emerald-300">{pct}%</div>
            <p className="mt-1 text-sm text-muted-foreground">
              {known.size} of {total} cards marked known
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-[11px] text-muted-foreground">
              <History className="h-3 w-3 text-emerald-300/70" />
              {mode === 'due' ? 'Review schedule saved' : 'Answers saved to your schedule'} ·
              missed cards return tomorrow
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {again.length > 0 && (
                <button
                  onClick={restartWithMissed}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-500/85 dark:bg-amber-300 dark:text-amber-950 dark:hover:bg-amber-200"
                >
                  <RotateCcw className="h-4 w-4" /> Retry {again.length} missed
                </button>
              )}
              <button
                onClick={() => setPicking(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-emerald-400/40"
              >
                <Layers className="h-4 w-4" /> Pick another deck
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  /* ---------------- card screen ---------------- */
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      {/* screen-reader announcements: card position, grade outcome, round end */}
      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>
      <div className="mb-5 flex items-center justify-between gap-3">
        <button
          onClick={() => setPicking(true)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Decks
        </button>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono">
            {known.size} known
          </span>
          <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-2.5 py-1 font-mono text-amber-200">
            {again.length} again
          </span>
        </div>
      </div>

      {/* progress */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-amber-300"
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {idx + 1}/{total}
        </span>
      </div>

      {/* card */}
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 24, rotateX: -8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -18, rotateX: 8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button
              ref={setCardBtnRef}
              onClick={flipCard}
              className="group relative block w-full text-left"
              style={{ perspective: '1200px' }}
              aria-label={flipped ? 'Show term' : 'Reveal answer'}
            >
              <motion.div
                className="relative min-h-[320px] w-full rounded-3xl sm:min-h-[360px]"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* front — term (exam misses show the question text) */}
                <div
                  className="absolute inset-0 flex flex-col rounded-3xl border border-border/80 bg-card p-7"
                  style={{ backfaceVisibility: 'hidden' }}
                  aria-hidden={flipped}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${kindBadgeClass(current.kind)}`}
                    >
                      {KIND_LABEL[current.kind] ?? 'Concept'}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      Ch {current.chapterNumber} · §{current.sectionNumber}
                    </span>
                  </div>
                  <div className="flex flex-1 items-center justify-center overflow-y-auto px-2 py-6 text-center">
                    <h3
                      className={
                        current.kind === 'exam'
                          ? 'text-xl font-semibold leading-relaxed tracking-tight sm:text-2xl'
                          : 'text-2xl font-bold leading-tight tracking-tight sm:text-3xl'
                      }
                    >
                      {current.term}
                    </h3>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <ChevronsLeftRight className="h-3.5 w-3.5 text-emerald-300/70" />
                    Tap card to reveal
                  </div>
                </div>

                {/* back — statement (correct answer + explanation for exam misses) */}
                <div
                  className={`absolute inset-0 flex flex-col rounded-3xl border bg-gradient-to-br p-7 ${
                    current.kind === 'exam'
                      ? 'border-rose-400/30 from-[oklch(0.2_0.045_16)] to-[oklch(0.17_0.035_16)]'
                      : 'border-emerald-400/30 from-[oklch(0.2_0.04_165)] to-[oklch(0.17_0.03_165)]'
                  }`}
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  aria-hidden={!flipped}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`min-w-0 truncate font-mono text-[11px] font-bold ${
                        current.kind === 'exam' ? 'text-rose-200' : 'text-emerald-300'
                      }`}
                    >
                      {current.kind === 'exam'
                        ? `Missed question · §${current.sectionNumber}`
                        : current.term}
                    </span>
                    <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                      {current.kind === 'exam'
                        ? `Ch ${current.chapterNumber} · ${current.chapterShort}`
                        : KIND_LABEL[current.kind]}
                    </span>
                  </div>
                  <div className="flex flex-1 items-center overflow-y-auto py-4">
                    <p className="text-center text-[15px] leading-relaxed text-foreground/95 sm:text-base">
                      <RichText text={current.statement} />
                    </p>
                  </div>
                  {/* easy help on every card back — simple words, same idea */}
                  <EasyCardHelp term={current.term} statement={current.statement} detail={current.detail} />
                  {current.detail && (
                    <p className="border-t border-dashed border-border/60 pt-3 text-xs leading-relaxed text-muted-foreground">
                      <RichText text={current.detail} />
                    </p>
                  )}
                </div>
              </motion.div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* mastery box indicator + next interval hints */}
      {current && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5" title="Leitner mastery box">
            {[1, 2, 3, 4, 5].map((b) => (
              <span
                key={b}
                className={`h-1.5 w-4 rounded-full transition-colors ${
                  b <= currentBox ? 'bg-emerald-400' : 'bg-muted'
                }`}
              />
            ))}
            <span className="ml-1 font-mono">
              {currentBox === 0 ? 'new' : `box ${currentBox}/5`}
            </span>
          </span>
          <span className="hidden items-center gap-1.5 font-mono sm:inline-flex">
            <span className="text-emerald-300/70">✓ → {nextInterval(true)}d</span>
            <span className="text-amber-300/70">✗ → {nextInterval(false)}d</span>
          </span>
        </div>
      )}

      {/* controls — chips inside each button reveal its keyboard shortcut */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          onClick={() => answer(false)}
          disabled={!current}
          className="flex items-center justify-center gap-2 rounded-xl border border-rose-400/35 bg-rose-400/10 px-5 py-3.5 text-sm font-semibold text-rose-200 transition-all hover:bg-rose-400/20 disabled:opacity-40"
        >
          <X className="h-4 w-4" /> {AGAIN_LABEL}
          <span
            aria-hidden="true"
            className="rounded-md border border-rose-400/30 bg-rose-400/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-rose-200/75"
          >
            {AGAIN_KEY}
          </span>
        </button>
        <button
          onClick={() => answer(true)}
          disabled={!current}
          className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-40"
        >
          <Check className="h-4 w-4" /> {KNEW_LABEL}
          <span
            aria-hidden="true"
            className="rounded-md border border-primary-foreground/25 bg-primary-foreground/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-primary-foreground/75"
          >
            {KNEW_KEY}
          </span>
        </button>
      </div>

      {/* keyboard shortcut hints (labels mirror the grade buttons above) */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-[11px] text-muted-foreground print:hidden">
        {(
          [
            ['Space', 'flip'],
            [AGAIN_KEY, AGAIN_LABEL],
            [KNEW_KEY, KNEW_LABEL],
            ['←/→', 'cards'],
            ['Esc', 'exit'],
          ] as const
        ).map(([key, label], i) => (
          <span key={key} className="inline-flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden="true" className="opacity-60">
                ·
              </span>
            )}
            <Kbd>{key}</Kbd> {label}
          </span>
        ))}
      </div>

      {current && (
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate({ name: 'lesson', sectionId: current.sectionId })}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-emerald-300"
          >
            <BookOpen className="h-3.5 w-3.5" /> Review full lesson §{current.sectionNumber}
          </button>
        </div>
      )}
    </div>
  )
}

'use client'

import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { format, formatDistanceToNow } from 'date-fns'
import {
  ArrowLeft,
  BookOpen,
  CalendarClock,
  Check,
  DoorOpen,
  Footprints,
  Landmark,
  Layers,
  Loader2,
  Pause,
  Play,
  Search,
  Sparkles,
  Trash2,
  Volume2,
  Wand2,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { useToast } from '@/hooks/use-toast'
import { useStudy } from '@/store/useStudy'
import { useAllContent } from '@/hooks/use-content'
import {
  getSection,
  LIBRARY_BOOKS,
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
  LIBRARY_SUBJECTS,
} from '@/data/library'

// ============================================================================
// X8 — MEMORY PALACE VIEW
// Picker (subject → chapter → section, searchable) → live SSE generation with
// a blueprint animation → the immersive walk (full-bleed rooms, glowing fact
// chips, inline narration audio, room navigation dots) → SRS walk-complete CTA.
// ============================================================================

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60'

/** only sections with authored content can become palaces —
 *  computed at runtime once the fetched corpus arrives */

const SUBJECT_BY_ID = new Map(LIBRARY_SUBJECTS.map((s) => [s.id, s]))
const BOOK_BY_ID = new Map(LIBRARY_BOOKS.map((b) => [b.id, b]))
const CHAPTER_BY_ID = new Map(LIBRARY_CHAPTERS.map((c) => [c.id, c]))

// ---------------------------------------------------------------- types --

interface PalaceRoom {
  name: string
  scene: string
  facts: string[]
  image: string | null
  narration: string
  audio: string | null
}

interface Palace {
  id: string
  sectionKey: string
  place: string
  rooms: PalaceRoom[]
  walks: number
  dueAt: string | null
  createdAt: string
  status?: string
}

interface PalaceListItem {
  id: string
  sectionKey: string
  status: string
  dueAt: string | null
  walks: number
  roomCount: number
  createdAt: string
}

interface SectionInfo {
  number: number
  title: string
  chapterId: string
  chapterShort: string
  subjectName: string
}

type Mode = 'picker' | 'generating' | 'walk'

interface GenState {
  phase: 'designing' | 'rooms' | 'error'
  place: string | null
  total: number | null
  currentIndex: number
  currentName: string | null
  doneRooms: number
  error: string | null
}

const INITIAL_GEN: GenState = {
  phase: 'designing',
  place: null,
  total: null,
  currentIndex: 0,
  currentName: null,
  doneRooms: 0,
  error: null,
}

// -------------------------------------------------------------- helpers --

function sectionInfo(sectionKey: string): SectionInfo | null {
  const sec = getSection(sectionKey)
  if (!sec) return null
  const chapter = CHAPTER_BY_ID.get(sec.chapterId)
  const book = chapter ? BOOK_BY_ID.get(chapter.bookId) : undefined
  const subject = book ? SUBJECT_BY_ID.get(book.subjectId) : undefined
  return {
    number: sec.number,
    title: sec.title,
    chapterId: sec.chapterId,
    chapterShort: chapter?.shortTitle ?? chapter?.title ?? '',
    subjectName: subject?.name ?? '',
  }
}

function fmtDate(iso: string): string {
  try {
    return format(new Date(iso), "d MMM yyyy, HH:mm")
  } catch {
    return iso
  }
}

function dueInfo(dueAt: string | null): { label: string; due: boolean } {
  if (!dueAt) return { label: 'No re-walk scheduled', due: false }
  const d = new Date(dueAt).getTime()
  if (d <= Date.now()) return { label: 'Due for a re-walk now', due: true }
  return { label: `Re-walk ${formatDistanceToNow(new Date(dueAt), { addSuffix: true })}`, due: false }
}

function fmtTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

/** read an SSE body, invoking onEvent per frame */
async function consumeSSE(res: Response, onEvent: (event: string, data: Record<string, unknown>) => void) {
  if (!res.body) return
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

async function errorFromResponse(res: Response): Promise<string> {
  let message = `Request failed (${res.status})`
  try {
    const data = (await res.json()) as { error?: string }
    if (data?.error) message = data.error
  } catch {
    /* non-json error */
  }
  return message
}

// ---------------------------------------------------------- audio player --

function RoomAudio({
  room,
  onPlayStart,
}: {
  room: PalaceRoom
  onPlayStart: (el: HTMLAudioElement) => void
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onTime = () => setTime(el.currentTime)
    const onMeta = () => setDuration(el.duration || 0)
    const onEnd = () => {
      setPlaying(false)
      setTime(0)
    }
    el.addEventListener('play', onPlay)
    el.addEventListener('pause', onPause)
    el.addEventListener('timeupdate', onTime)
    el.addEventListener('loadedmetadata', onMeta)
    el.addEventListener('ended', onEnd)
    return () => {
      el.removeEventListener('play', onPlay)
      el.removeEventListener('pause', onPause)
      el.removeEventListener('timeupdate', onTime)
      el.removeEventListener('loadedmetadata', onMeta)
      el.removeEventListener('ended', onEnd)
      el.pause()
    }
  }, [room.audio])

  const toggle = () => {
    const el = audioRef.current
    if (!el) return
    if (el.paused) {
      onPlayStart(el)
      void el.play().catch(() => {
        /* autoplay refusal or network — button stays honest via events */
      })
    } else {
      el.pause()
    }
  }

  const seek = (e: MouseEvent<HTMLDivElement>) => {
    const el = audioRef.current
    if (!el || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    el.currentTime = ratio * duration
    setTime(ratio * duration)
  }

  if (!room.audio) {
    // narration text as the graceful fallback when TTS could not be produced
    return (
      <p className="rounded-2xl border border-amber-400/25 bg-amber-400/5 px-4 py-3 text-sm italic leading-relaxed text-amber-800 dark:text-amber-200/80">
        “{room.narration}”
      </p>
    )
  }

  const progress = duration ? Math.min(100, (time / duration) * 100) : 0

  return (
    <div className="flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-400/5 py-2 pl-2 pr-4">
      <audio ref={audioRef} src={room.audio} preload="metadata" className="hidden" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause narration for ${room.name}` : `Play narration for ${room.name}`}
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-lg shadow-emerald-900/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 ${
          playing ? 'bg-amber-500 hover:bg-amber-400' : 'bg-emerald-600 hover:bg-emerald-500'
        }`}
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
      </button>
      <div
        role="slider"
        aria-label="Narration progress"
        aria-valuemin={0}
        aria-valuemax={Math.round(duration)}
        aria-valuenow={Math.round(time)}
        tabIndex={0}
        onClick={seek}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const el = audioRef.current
            if (!el) return
            el.currentTime = Math.min(duration, Math.max(0, el.currentTime + (e.key === 'ArrowRight' ? 5 : -5)))
          }
        }}
        className="group flex h-6 flex-1 cursor-pointer items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
      >
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-emerald-950/15 dark:bg-emerald-300/10">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <span className="shrink-0 text-xs tabular-nums text-emerald-800/70 dark:text-emerald-200/60">
        {fmtTime(playing || time > 0 ? time : duration)}
      </span>
    </div>
  )
}

// ------------------------------------------------------------- room card --

const FACT_STYLES = [
  'border-emerald-400/35 bg-emerald-400/10 text-emerald-800 shadow-[0_0_20px_-6px_rgba(52,211,153,0.6)] dark:text-emerald-200',
  'border-teal-400/35 bg-teal-400/10 text-teal-800 shadow-[0_0_20px_-6px_rgba(45,212,191,0.55)] dark:text-teal-200',
  'border-amber-400/35 bg-amber-400/10 text-amber-800 shadow-[0_0_20px_-6px_rgba(251,191,36,0.55)] dark:text-amber-200',
]

function RoomCard({
  room,
  index,
  total,
  onPlayStart,
}: {
  room: PalaceRoom
  index: number
  total: number
  onPlayStart: (el: HTMLAudioElement) => void
}) {
  return (
    <motion.section
      data-room-index={index}
      aria-label={`Room ${index + 1} of ${total}: ${room.name}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="scroll-mt-28"
    >
      {/* full-bleed room image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-emerald-900/10 bg-muted shadow-xl shadow-emerald-950/10 dark:border-emerald-300/10">
        {room.image ? (
          <img
            src={room.image}
            alt={`${room.name} — ${room.scene.slice(0, 120)}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-emerald-900/70 via-teal-900/60 to-amber-900/50">
            <Landmark className="h-12 w-12 text-amber-200/70" />
            <span className="px-6 text-center text-sm text-emerald-100/70">
              The painter could not render this room — the scene below still stands.
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
          <DoorOpen className="h-3.5 w-3.5 text-amber-300" />
          Room {index + 1} of {total}
        </div>
        <h3 className="absolute bottom-4 left-5 right-5 font-serif text-2xl font-bold leading-tight text-white drop-shadow-lg md:text-3xl">
          {room.name}
        </h3>
      </div>

      {/* scene + facts + narration */}
      <div className="mt-5 space-y-4">
        <p className="max-w-3xl leading-relaxed text-foreground/80">{room.scene}</p>
        {room.facts.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {room.facts.map((fact, fi) => (
              <span
                key={fi}
                className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium ${FACT_STYLES[fi % FACT_STYLES.length]}`}
              >
                {fact}
              </span>
            ))}
          </div>
        )}
        <div className="max-w-xl pt-1">
          <RoomAudio room={room} onPlayStart={onPlayStart} />
        </div>
      </div>
    </motion.section>
  )
}

// =============================================================== the view =

export function PalaceView({ sectionKey: propSectionKey }: { sectionKey?: string }) {
  const allContent = useAllContent()
  const CONTENT_IDS = useMemo(() => new Set((allContent ?? []).map((c) => c.sectionId)), [allContent])
  const { toast } = useToast()
  const navigate = useStudy((s) => s.navigate)

  const [deviceId, setDeviceId] = useState('')
  const [mode, setMode] = useState<Mode>('picker')
  const [palace, setPalace] = useState<Palace | null>(null)
  const [list, setList] = useState<PalaceListItem[] | null>(null)

  // picker state
  const [subjectId, setSubjectId] = useState<string>('')
  const [chapterId, setChapterId] = useState<string>('')
  const [targetSection, setTargetSection] = useState<string>('')
  const [query, setQuery] = useState('')

  // generating state
  const [gen, setGen] = useState<GenState>(INITIAL_GEN)

  // walk state
  const [activeRoom, setActiveRoom] = useState(0)
  const [marking, setMarking] = useState(false)
  const [marked, setMarked] = useState(false)
  const [openingId, setOpeningId] = useState<string | null>(null)
  const [deleteArmId, setDeleteArmId] = useState<string | null>(null)

  const roomRefs = useRef<(HTMLElement | null)[]>([])
  const currentAudioRef = useRef<HTMLAudioElement | null>(null)

  // ------------------------------------------------------------- loading --

  const loadList = useCallback(async (id: string) => {
    try {
      const res = await fetch(`/api/palace?deviceId=${encodeURIComponent(id)}`)
      if (!res.ok) return
      const data = (await res.json()) as { palaces?: PalaceListItem[] }
      setList(data.palaces ?? [])
    } catch {
      setList([])
    }
  }, [])

  useEffect(() => {
    setDeviceId(useStudy.getState().ensureDevice())
  }, [])

  // initial load: list + (with a sectionKey prop) existing palace for it
  useEffect(() => {
    if (!deviceId) return
    let cancelled = false
    void loadList(deviceId)
    if (propSectionKey) {
      const info = sectionInfo(propSectionKey)
      if (info) {
        setSubjectIdFromChapter(info.chapterId)
        setChapterId(info.chapterId)
        setTargetSection(propSectionKey)
      }
      void (async () => {
        try {
          const res = await fetch(
            `/api/palace?deviceId=${encodeURIComponent(deviceId)}&sectionKey=${encodeURIComponent(propSectionKey)}`
          )
          if (!res.ok || cancelled) return
          const data = (await res.json()) as { palace?: Palace | null }
          if (!cancelled && data.palace) {
            setPalace(data.palace)
            setMode('walk')
          }
        } catch {
          /* offline — picker stays */
        }
      })()
    }
    return () => {
      cancelled = true
    }
  }, [deviceId, propSectionKey, loadList])

  function setSubjectIdFromChapter(chId: string) {
    const chapter = CHAPTER_BY_ID.get(chId)
    const book = chapter ? BOOK_BY_ID.get(chapter.bookId) : undefined
    if (book) setSubjectId(book.subjectId)
  }

  // ------------------------------------------------------ picker derived --

  const bookIdsForSubject = useMemo(() => {
    const ids = new Set<string>()
    for (const b of LIBRARY_BOOKS) if (b.subjectId === subjectId) ids.add(b.id)
    return ids
  }, [subjectId])

  const chaptersForSubject = useMemo(
    () => LIBRARY_CHAPTERS.filter((c) => bookIdsForSubject.has(c.bookId)),
    [bookIdsForSubject]
  )

  const sectionsForChapter = useMemo(
    () => LIBRARY_SECTIONS.filter((s) => s.chapterId === chapterId && CONTENT_IDS.has(s.id)),
    [chapterId, CONTENT_IDS]
  )

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (q.length < 2) return []
    return LIBRARY_SECTIONS.filter(
      (s) => CONTENT_IDS.has(s.id) && s.title.toLowerCase().includes(q)
    ).slice(0, 30)
  }, [query, CONTENT_IDS])

  const targetInfo = useMemo(() => (targetSection ? sectionInfo(targetSection) : null), [targetSection])

  // ---------------------------------------------------------- generation --

  const startGeneration = useCallback(
    async (sectionKey: string) => {
      setMode('generating')
      setGen(INITIAL_GEN)
      try {
        const res = await fetch('/api/palace', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ deviceId, sectionKey }),
        })
        if (!res.ok) throw new Error(await errorFromResponse(res))
        const contentType = res.headers.get('content-type') ?? ''
        if (contentType.includes('application/json')) {
          // cached palace — jump straight to the walk
          const data = (await res.json()) as { palace?: Palace }
          if (data.palace) {
            setPalace(data.palace)
            setMarked(false)
            setMode('walk')
            void loadList(deviceId)
          }
          return
        }
        await consumeSSE(res, (event, data) => {
          if (event === 'stage') {
            const stage = data.stage as string | undefined
            if (stage === 'design') {
              setGen((g) => ({
                ...g,
                phase: 'rooms',
                place: typeof data.place === 'string' ? data.place : null,
                total: typeof data.total === 'number' ? data.total : null,
              }))
            } else if (stage === 'room') {
              setGen((g) => ({
                ...g,
                phase: 'rooms',
                currentIndex: typeof data.index === 'number' ? data.index : g.currentIndex,
                currentName: typeof data.name === 'string' ? data.name : g.currentName,
                total: typeof data.total === 'number' ? data.total : g.total,
              }))
            } else if (stage === 'room-done') {
              setGen((g) => ({
                ...g,
                doneRooms: typeof data.index === 'number' ? data.index : g.doneRooms + 1,
              }))
            }
          } else if (event === 'done') {
            const done = data as unknown as Palace & { rooms?: PalaceRoom[] }
            if (done.id && Array.isArray(done.rooms)) {
              setPalace({
                id: done.id,
                sectionKey: typeof data.sectionKey === 'string' ? data.sectionKey : sectionKey,
                place: typeof data.place === 'string' ? done.place : '',
                rooms: done.rooms,
                walks: typeof data.walks === 'number' ? done.walks : 0,
                dueAt: typeof data.dueAt === 'string' ? data.dueAt : null,
                createdAt: typeof data.createdAt === 'string' ? data.createdAt : new Date().toISOString(),
              })
              setMarked(false)
              setMode('walk')
              void loadList(deviceId)
            }
          } else if (event === 'error') {
            setGen((g) => ({
              ...g,
              phase: 'error',
              error: typeof data.error === 'string' ? data.error : 'Generation failed.',
            }))
          }
        })
      } catch (err) {
        setGen((g) => ({
          ...g,
          phase: 'error',
          error: err instanceof Error ? err.message : 'Generation failed — please try again.',
        }))
      }
    },
    [deviceId, loadList]
  )

  // ------------------------------------------------------- walk actions --

  const openPalace = useCallback(
    async (id: string) => {
      if (!deviceId) return
      setOpeningId(id)
      try {
        const res = await fetch(`/api/palace/${id}?deviceId=${encodeURIComponent(deviceId)}`)
        if (!res.ok) throw new Error(await errorFromResponse(res))
        const data = (await res.json()) as Palace & { rooms?: PalaceRoom[] }
        if (data.id && Array.isArray(data.rooms)) {
          setPalace(data)
          setMarked(false)
          setActiveRoom(0)
          setMode('walk')
          window.scrollTo({ top: 0 })
        }
      } catch (err) {
        toast({
          title: 'Memory Palace',
          description: err instanceof Error ? err.message : 'Could not open that palace.',
          variant: 'destructive',
        })
      } finally {
        setOpeningId(null)
      }
    },
    [deviceId, toast]
  )

  const markWalked = useCallback(async () => {
    if (!palace || !deviceId || marking) return
    setMarking(true)
    try {
      const res = await fetch(
        `/api/palace/${palace.id}?deviceId=${encodeURIComponent(deviceId)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'walked' }),
        }
      )
      if (!res.ok) throw new Error(await errorFromResponse(res))
      const data = (await res.json()) as { walks: number; dueAt: string | null }
      setPalace((p) => (p ? { ...p, walks: data.walks, dueAt: data.dueAt } : p))
      setMarked(true)
      toast({
        title: 'Walk complete — well remembered',
        description: `Next re-walk: ${data.dueAt ? fmtDate(data.dueAt) : 'unscheduled'}`,
      })
      void loadList(deviceId)
    } catch (err) {
      toast({
        title: 'Memory Palace',
        description: err instanceof Error ? err.message : 'Could not record the walk.',
        variant: 'destructive',
      })
    } finally {
      setMarking(false)
    }
  }, [palace, deviceId, marking, toast, loadList])

  const deletePalace = useCallback(
    async (id: string) => {
      if (!deviceId) return
      try {
        const res = await fetch(`/api/palace/${id}?deviceId=${encodeURIComponent(deviceId)}`, {
          method: 'DELETE',
        })
        if (!res.ok) throw new Error(await errorFromResponse(res))
        setList((l) => (l ? l.filter((p) => p.id !== id) : l))
        if (palace?.id === id) {
          setPalace(null)
          setMode('picker')
        }
        toast({ title: 'Memory Palace', description: 'Palace demolished.' })
      } catch (err) {
        toast({
          title: 'Memory Palace',
          description: err instanceof Error ? err.message : 'Could not delete that palace.',
          variant: 'destructive',
        })
      }
    },
    [deviceId, palace, toast]
  )

  // track the room on screen while walking
  useEffect(() => {
    if (mode !== 'walk' || !palace) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.roomIndex)
            if (!Number.isNaN(idx)) setActiveRoom(idx)
          }
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    )
    for (const el of roomRefs.current) if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [mode, palace])

  const handlePlayStart = useCallback((el: HTMLAudioElement) => {
    if (currentAudioRef.current && currentAudioRef.current !== el) {
      currentAudioRef.current.pause()
    }
    currentAudioRef.current = el
  }, [])

  const jumpToRoom = useCallback((i: number) => {
    roomRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  // ================================================================ render

  // ---------------------------------------------------------- generating =

  if (mode === 'generating') {
    const total = gen.total ?? 0
    const progress = total ? Math.round((gen.doneRooms / total) * 100) : 0
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
        <AnimatePresence mode="wait">
          {gen.phase === 'error' ? (
            <motion.div
              key="err"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-amber-400/30 bg-amber-400/5 p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/15">
                <Wand2 className="h-6 w-6 text-amber-600 dark:text-amber-300" />
              </div>
              <h2 className="font-serif text-2xl font-bold">The architect stumbled</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-foreground/70">{gen.error}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setMode('picker')}
                  className={`rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5 ${FOCUS_RING}`}
                >
                  Back to the picker
                </button>
                {targetSection && (
                  <button
                    type="button"
                    onClick={() => void startGeneration(targetSection)}
                    className={`rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 ${FOCUS_RING}`}
                  >
                    Try again
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="gen"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-b from-emerald-400/5 via-transparent to-amber-300/5 p-8 sm:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600/15">
                  <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/20" />
                </span>
                <div>
                  <h2 className="font-serif text-2xl font-bold sm:text-3xl">Building your memory palace</h2>
                  <p className="text-sm text-foreground/60">
                    {gen.phase === 'designing'
                      ? 'The architect is sketching the blueprint…'
                      : gen.place
                        ? `“${gen.place}”`
                        : 'Blueprint ready — painting the rooms…'}
                  </p>
                </div>
              </div>

              {/* blueprint: rooms light up as they complete */}
              <div className="mt-10 flex items-center justify-between gap-1 overflow-x-auto pb-2">
                {total > 0
                  ? Array.from({ length: total }, (_, i) => {
                      const roomIndex = i + 1
                      const done = roomIndex <= gen.doneRooms
                      const current = roomIndex === gen.currentIndex && !done
                      return (
                        <div key={i} className="flex min-w-0 items-center">
                          {i > 0 && (
                            <span
                              className={`h-0.5 w-4 shrink-0 rounded-full sm:w-7 ${
                                roomIndex <= gen.doneRooms ? 'bg-emerald-400/70' : 'bg-foreground/10'
                              }`}
                            />
                          )}
                          <motion.div
                            animate={
                              current
                                ? { scale: [1, 1.12, 1], boxShadow: '0 0 0 6px rgba(251,191,36,0.15)' }
                                : { scale: 1, boxShadow: '0 0 0 0px rgba(0,0,0,0)' }
                            }
                            transition={current ? { repeat: Infinity, duration: 1.6 } : { duration: 0.2 }}
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                              done
                                ? 'border-emerald-500/60 bg-emerald-500/20 text-emerald-700 dark:text-emerald-200'
                                : current
                                  ? 'border-amber-400/70 bg-amber-400/15 text-amber-700 dark:text-amber-200'
                                  : 'border-foreground/15 bg-foreground/5 text-foreground/40'
                            }`}
                          >
                            {done ? <Check className="h-4 w-4" /> : roomIndex}
                          </motion.div>
                        </div>
                      )
                    })
                  : Array.from({ length: 6 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        {i > 0 && <span className="h-0.5 w-4 rounded-full bg-foreground/10 sm:w-7" />}
                        <div className="h-10 w-10 shrink-0 animate-pulse rounded-full border border-foreground/10 bg-foreground/5" />
                      </div>
                    ))}
              </div>

              {/* progress */}
              <div className="mt-8">
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium text-foreground/80">
                    {gen.currentName ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-emerald-500" />
                        Painting “{gen.currentName}”
                      </span>
                    ) : (
                      'Designing the journey…'
                    )}
                  </span>
                  <span className="tabular-nums text-foreground/50">
                    {total ? `${gen.doneRooms}/${total} rooms` : '—'}
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-foreground/10">
                  {total ? (
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  ) : (
                    <motion.div
                      className="h-full w-1/3 rounded-full bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent"
                      animate={{ x: ['-100%', '300%'] }}
                      transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                    />
                  )}
                </div>
              </div>

              <p className="mt-8 text-center text-xs text-foreground/50">
                This takes ~1–2 minutes — every room gets its own painting and narration. Keep this tab open.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // ---------------------------------------------------------------- walk =

  if (mode === 'walk' && palace) {
    const info = sectionInfo(palace.sectionKey)
    const due = dueInfo(palace.dueAt)
    return (
      <div className="w-full">
        {/* hero */}
        <div className="relative overflow-hidden border-b border-emerald-900/10 bg-gradient-to-b from-emerald-400/10 via-transparent to-transparent dark:border-emerald-300/10">
          <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
            <button
              type="button"
              onClick={() => setMode('picker')}
              className={`mb-6 inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-3 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:bg-foreground/5 ${FOCUS_RING}`}
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All palaces
            </button>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">
                <Landmark className="h-3.5 w-3.5" /> Memory palace
              </p>
              <h1 className="mt-2 font-serif text-4xl font-bold leading-tight sm:text-5xl">{palace.place || 'Your palace'}</h1>
              {info && (
                <p className="mt-3 text-sm text-foreground/70">
                  <span className="font-semibold text-foreground">§{info.number} {info.title}</span>
                  {' · '}
                  {info.chapterShort}
                  {info.subjectName ? ` · ${info.subjectName}` : ''}
                </p>
              )}
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 font-medium text-emerald-800 dark:text-emerald-200">
                  <Layers className="h-3.5 w-3.5" /> {palace.rooms.length} rooms
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1.5 font-medium text-teal-800 dark:text-teal-200">
                  <Footprints className="h-3.5 w-3.5" /> {palace.walks} {palace.walks === 1 ? 'walk' : 'walks'}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-medium ${
                    due.due
                      ? 'border-amber-400/50 bg-amber-400/15 text-amber-800 dark:text-amber-200'
                      : 'border-foreground/15 bg-foreground/5 text-foreground/70'
                  }`}
                >
                  <CalendarClock className="h-3.5 w-3.5" /> {due.label}
                </span>
                {info && (
                  <button
                    type="button"
                    onClick={() => navigate({ name: 'lesson', sectionId: palace.sectionKey })}
                    className={`inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1.5 font-medium text-foreground/70 transition-colors hover:bg-foreground/10 ${FOCUS_RING}`}
                  >
                    <BookOpen className="h-3.5 w-3.5" /> Open lesson
                  </button>
                )}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => void markWalked()}
                  disabled={marking}
                  className={`inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/25 transition-colors hover:bg-emerald-500 disabled:opacity-60 ${FOCUS_RING}`}
                >
                  {marking ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                  {marked ? 'Walk recorded' : 'Mark this walk complete'}
                </button>
                {marked && palace.dueAt && (
                  <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                    Next re-walk: {fmtDate(palace.dueAt)}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* room navigation dots — top on mobile, side rail on desktop */}
        <div className="sticky top-0 z-20 flex justify-center bg-background/80 py-2 backdrop-blur-sm lg:hidden">
          <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-3 py-2 shadow-sm">
            {palace.rooms.map((room, i) => (
              <button
                key={i}
                type="button"
                title={room.name}
                aria-label={`Jump to room ${i + 1}: ${room.name}`}
                onClick={() => jumpToRoom(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${FOCUS_RING} ${
                  i === activeRoom
                    ? 'scale-125 bg-emerald-500'
                    : i < activeRoom
                      ? 'bg-emerald-400/50'
                      : 'bg-foreground/20 hover:bg-foreground/35'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="fixed right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-2.5 rounded-full border border-foreground/10 bg-background/80 px-2.5 py-3 shadow-md backdrop-blur-sm lg:flex">
          {palace.rooms.map((room, i) => (
            <button
              key={i}
              type="button"
              title={room.name}
              aria-label={`Jump to room ${i + 1}: ${room.name}`}
              onClick={() => jumpToRoom(i)}
              className={`flex items-center justify-center rounded-full text-[10px] font-semibold transition-all ${FOCUS_RING} ${
                i === activeRoom
                  ? 'h-7 w-7 scale-110 bg-emerald-500 text-white'
                  : i < activeRoom
                    ? 'h-5 w-5 bg-emerald-400/40 text-emerald-900 dark:text-emerald-50'
                    : 'h-5 w-5 bg-foreground/10 text-foreground/50 hover:bg-foreground/20'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* the journey */}
        <div className="mx-auto w-full max-w-4xl space-y-16 px-4 py-12 sm:px-6">
          {palace.rooms.map((room, i) => (
            <div key={i} ref={(el) => { roomRefs.current[i] = el }}>
              <RoomCard room={room} index={i} total={palace.rooms.length} onPlayStart={handlePlayStart} />
            </div>
          ))}

          {/* journey end — the SRS tie-in */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-emerald-400/25 bg-gradient-to-b from-emerald-400/10 to-amber-300/5 p-8 text-center sm:p-10"
          >
            <Sparkles className="mx-auto h-8 w-8 text-amber-500" />
            <h2 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">You walked the whole palace</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-foreground/70">
              Close your eyes and retrace the rooms once more — then mark the walk so the palace returns to you on
              schedule.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => void markWalked()}
                disabled={marking}
                className={`inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/25 transition-colors hover:bg-emerald-500 disabled:opacity-60 ${FOCUS_RING}`}
              >
                {marking ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                {marked ? 'Walk recorded' : 'Mark this walk complete'}
              </button>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground/5 ${FOCUS_RING}`}
              >
                Re-walk from the entrance
              </button>
            </div>
            {marked && palace.dueAt && (
              <p className="mt-4 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Next re-walk: {fmtDate(palace.dueAt)}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    )
  }

  // -------------------------------------------------------------- picker =

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      {/* header */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">
          <Landmark className="h-3.5 w-3.5" /> Memory palace
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">Walk your way through any section</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-foreground/70">
          Pick a section and the palace architect turns its concepts into a vivid place — a sequence of painted rooms
          you wander through, each one holding facts in plain sight. Re-walk your palaces on a spaced schedule and the
          journey locks in.
        </p>
      </motion.div>

      {/* builder card */}
      <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-gradient-to-b from-emerald-400/5 to-transparent p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="palace-subject" className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
              Subject
            </label>
            <select
              id="palace-subject"
              value={subjectId}
              onChange={(e) => {
                setSubjectId(e.target.value)
                setChapterId('')
              }}
              className={`mt-1.5 w-full rounded-xl border border-foreground/15 bg-background px-3 py-2.5 text-sm transition-colors hover:border-emerald-400/40 ${FOCUS_RING}`}
            >
              <option value="">Choose a subject…</option>
              {LIBRARY_SUBJECTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="palace-search" className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
              Or search sections
            </label>
            <div className="relative mt-1.5">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
              <Input
                id="palace-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. truth tables, cache memory…"
                className="pl-9"
              />
            </div>
          </div>
        </div>

        {/* search results */}
        {searchResults.length > 0 ? (
          <div className="mt-5 max-h-80 space-y-1.5 overflow-y-auto pr-1">
            {searchResults.map((s) => {
              const info = sectionInfo(s.id)
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setTargetSection(s.id)
                    if (info) {
                      setSubjectIdFromChapter(info.chapterId)
                      setChapterId(info.chapterId)
                    }
                  }}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                    targetSection === s.id
                      ? 'border-emerald-500/60 bg-emerald-500/10'
                      : 'border-foreground/10 bg-background hover:border-emerald-400/40 hover:bg-emerald-400/5'
                  } ${FOCUS_RING}`}
                >
                  <span className="text-sm font-semibold">§{s.number} {s.title}</span>
                  {info && (
                    <span className="ml-2 text-xs text-foreground/50">
                      {info.chapterShort} · {info.subjectName}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        ) : (
          subjectId && (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {/* chapters */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/60">Chapters</p>
                <div className="mt-1.5 max-h-64 space-y-1.5 overflow-y-auto pr-1">
                  {chaptersForSubject.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setChapterId(c.id === chapterId ? '' : c.id)}
                      className={`flex w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left transition-colors ${
                        chapterId === c.id
                          ? 'border-emerald-500/60 bg-emerald-500/10'
                          : 'border-foreground/10 bg-background hover:border-emerald-400/40 hover:bg-emerald-400/5'
                      } ${FOCUS_RING}`}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                        {c.number}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium">{c.shortTitle || c.title}</span>
                        <span className="block text-xs text-foreground/45">{c.title}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              {/* sections */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/60">Sections</p>
                <div className="mt-1.5 max-h-64 space-y-1.5 overflow-y-auto pr-1">
                  {chapterId ? (
                    sectionsForChapter.length ? (
                      sectionsForChapter.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setTargetSection(s.id)}
                          className={`w-full rounded-xl border px-3.5 py-2.5 text-left text-sm transition-colors ${
                            targetSection === s.id
                              ? 'border-emerald-500/60 bg-emerald-500/10 font-semibold'
                              : 'border-foreground/10 bg-background hover:border-emerald-400/40 hover:bg-emerald-400/5'
                          } ${FOCUS_RING}`}
                        >
                          §{s.number} {s.title}
                        </button>
                      ))
                    ) : (
                      <p className="rounded-xl border border-dashed border-foreground/15 px-4 py-6 text-center text-xs text-foreground/50">
                        This chapter has no palace-ready sections yet.
                      </p>
                    )
                  ) : (
                    <p className="rounded-xl border border-dashed border-foreground/15 px-4 py-6 text-center text-xs text-foreground/50">
                      Pick a chapter to see its sections.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        )}

        {/* selected section + generate */}
        <AnimatePresence>
          {targetSection && targetInfo && (
            <motion.div
              key="target"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-sm font-semibold">
                    §{targetInfo.number} {targetInfo.title}
                  </p>
                  <p className="mt-0.5 text-xs text-foreground/55">
                    {targetInfo.chapterShort}
                    {targetInfo.subjectName ? ` · ${targetInfo.subjectName}` : ''}
                  </p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-300/90">
                    <Volume2 className="h-3.5 w-3.5" /> Takes ~1–2 minutes — each room gets a painting and narration.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => void startGeneration(targetSection)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/25 transition-colors hover:bg-emerald-500 ${FOCUS_RING}`}
                >
                  <Wand2 className="h-4 w-4" /> Generate palace
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* past palaces */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-xl font-bold">
          <Footprints className="h-5 w-5 text-emerald-600 dark:text-emerald-300" /> Your palaces
        </h2>
        {list === null ? (
          <div className="mt-4 space-y-2">
            {[0, 1, 2].map((i) => (
              <Skeleton key={i} className="h-20 w-full rounded-2xl" />
            ))}
          </div>
        ) : list.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-foreground/15 p-8 text-center">
            <Landmark className="mx-auto h-8 w-8 text-foreground/30" />
            <p className="mt-3 text-sm font-medium text-foreground/70">No palaces yet</p>
            <p className="mt-1 text-xs text-foreground/50">Build your first one above — it becomes a place you can revisit forever.</p>
          </div>
        ) : (
          <div className="mt-4 max-h-96 space-y-2 overflow-y-auto pr-1">
            {list.map((item) => {
              const info = sectionInfo(item.sectionKey)
              const due = dueInfo(item.dueAt)
              const armed = deleteArmId === item.id
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-background p-3.5 transition-colors hover:border-emerald-400/40"
                >
                  <button
                    type="button"
                    onClick={() => void openPalace(item.id)}
                    disabled={openingId === item.id}
                    className={`min-w-0 flex-1 text-left ${FOCUS_RING} rounded-xl`}
                  >
                    <span className="block truncate text-sm font-semibold">
                      {info ? `§${info.number} ${info.title}` : item.sectionKey}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-foreground/50">
                      {info ? `${info.chapterShort} · ${info.subjectName}` : '—'} · built {fmtDate(item.createdAt)}
                    </span>
                    <span className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[11px]">
                      <span className="inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-foreground/5 px-2 py-0.5 text-foreground/60">
                        <Layers className="h-3 w-3" /> {item.roomCount} rooms
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-foreground/5 px-2 py-0.5 text-foreground/60">
                        <Footprints className="h-3 w-3" /> {item.walks}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-medium ${
                          due.due
                            ? 'border-amber-400/50 bg-amber-400/15 text-amber-800 dark:text-amber-200'
                            : 'border-foreground/10 bg-foreground/5 text-foreground/60'
                        }`}
                      >
                        <CalendarClock className="h-3 w-3" /> {due.label}
                      </span>
                    </span>
                  </button>
                  {openingId === item.id && <Loader2 className="h-4 w-4 shrink-0 animate-spin text-emerald-500" />}
                  <button
                    type="button"
                    aria-label={armed ? 'Confirm delete' : 'Delete palace'}
                    title={armed ? 'Click again to confirm' : 'Delete'}
                    onClick={() => {
                      if (armed) {
                        setDeleteArmId(null)
                        void deletePalace(item.id)
                      } else {
                        setDeleteArmId(item.id)
                        window.setTimeout(() => {
                          setDeleteArmId((cur) => (cur === item.id ? null : cur))
                        }, 3000)
                      }
                    }}
                    className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      armed
                        ? 'border-amber-500/60 bg-amber-500/15 text-amber-800 hover:bg-amber-500/25 dark:text-amber-200'
                        : 'border-foreground/10 text-foreground/50 hover:border-amber-400/40 hover:text-amber-700 dark:hover:text-amber-300'
                    } ${FOCUS_RING}`}
                  >
                    {armed ? 'Sure?' : <Trash2 className="h-4 w-4" />}
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default PalaceView

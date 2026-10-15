'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'sonner'
import {
  ArrowUpRight,
  BookOpen,
  Brain,
  ClipboardList,
  Globe,
  GraduationCap,
  History,
  Loader2,
  MessageSquare,
  MessagesSquare,
  Scale,
  Send,
  Sparkles,
  Swords,
  Users,
  Wand2,
  X,
} from 'lucide-react'
import { useStudy } from '@/store/useStudy'
import { getSection } from '@/data/library'

// ============================================================================
// X2 — MULTI-AGENT TEACHING STUDIO (faculty chat UI)
// Five personas · Debate mode with style learning · Round-table seminars.
// Streams over SSE from /api/studio/chat.
// ============================================================================

const RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

type Persona = 'professor' | 'examiner' | 'drill' | 'planner' | 'researcher'
type Mode = 'chat' | 'debate' | 'roundtable'

const PERSONAS: { id: Persona; label: string; blurb: string; icon: typeof GraduationCap; accent: string }[] = [
  { id: 'professor', label: 'Professor', blurb: 'Grounded in your library, cites sections', icon: GraduationCap, accent: 'text-emerald-300' },
  { id: 'examiner', label: 'Examiner', blurb: 'Oral viva — one question at a time, graded', icon: ClipboardList, accent: 'text-amber-300' },
  { id: 'drill', label: 'Drill Sergeant', blurb: 'Rapid-fire reps on your weakest skills', icon: Swords, accent: 'text-rose-300' },
  { id: 'planner', label: 'Planner', blurb: 'Reads your twin, rebuilds your study plan', icon: Wand2, accent: 'text-cyan-300' },
  { id: 'researcher', label: 'Researcher', blurb: 'Live web sources beyond the library', icon: Globe, accent: 'text-violet-300' },
]

const MODES: { id: Mode; label: string; icon: typeof MessagesSquare; hint: string }[] = [
  { id: 'chat', label: 'Consult', icon: MessageSquare, hint: 'One-on-one with a faculty member' },
  { id: 'debate', label: 'Debate', icon: Scale, hint: 'Two teachers argue their best explanation — you pick the winner' },
  { id: 'roundtable', label: 'Round-table', icon: Users, hint: 'A three-teacher seminar on your topic' },
]

interface Citation {
  sectionId: string
  number: number
  title: string
  chapterTitle: string
  subjectName: string
}
interface WebSource {
  title: string
  url: string
  host: string
}
interface StreamMsg {
  id: string
  role: 'user' | 'assistant'
  persona?: string | null
  content: string
  citations?: Citation[] | null
  sources?: WebSource[] | null
  pending?: boolean
}
interface ThreadRow {
  id: string
  title: string
  persona: string
  mode: string
  updatedAt: string
}

function personaChip(persona?: string | null) {
  const meta = PERSONAS.find((p) => p.id === persona)
  if (!meta) return null
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wide">
      <meta.icon className={`h-3 w-3 ${meta.accent}`} aria-hidden />
      <span className={meta.accent}>{meta.label}</span>
    </span>
  )
}

function personaLabel(persona?: string | null): string {
  if (persona === 'debate-a') return 'Intuitionist'
  if (persona === 'debate-b') return 'Rigorist'
  if (persona === 'rt-sep') return ''
  return PERSONAS.find((p) => p.id === persona)?.label ?? 'Faculty'
}

export function StudioView({ targetSkill, subjectHint }: { targetSkill?: string; subjectHint?: string }) {
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const navigate = useStudy((s) => s.navigate)
  const deviceId = ensureDevice()

  const [persona, setPersona] = useState<Persona>('professor')
  const [mode, setMode] = useState<Mode>('chat')
  const [threadId, setThreadId] = useState<string | null>(null)
  const [messages, setMessages] = useState<StreamMsg[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [stage, setStage] = useState<string | null>(null)
  const [threads, setThreads] = useState<ThreadRow[]>([])
  const [showHistory, setShowHistory] = useState(false)
  const [style, setStyle] = useState<string | null>(null)
  const [voted, setVoted] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null)
  const abortRef = useRef(false)

  const loadThreads = useCallback(async () => {
    try {
      const res = await fetch(`/api/studio/threads?deviceId=${encodeURIComponent(deviceId)}`)
      if (res.ok) {
        const d = await res.json()
        setThreads(d.threads ?? [])
      }
    } catch {
      /* offline-tolerant */
    }
  }, [deviceId])

  useEffect(() => {
    void loadThreads()
  }, [loadThreads])

  // OS command handshake — the palette may hand us a question to ask
  useEffect(() => {
    try {
      const q = sessionStorage.getItem('sv-studio-question')
      if (q) {
        sessionStorage.removeItem('sv-studio-question')
        setInput(q)
      }
    } catch {
      /* storage unavailable */
    }
  }, [])

  // create the initial thread for this consultation
  useEffect(() => {
    let cancelled = false
    void (async () => {
      try {
        const res = await fetch('/api/studio/threads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            deviceId,
            persona,
            mode,
            targetSkill: targetSkill ?? null,
            title: targetSkill ? `Lesson: ${getSection(targetSkill)?.title ?? targetSkill}` : undefined,
          }),
        })
        if (res.ok && !cancelled) {
          const d = await res.json()
          setThreadId(d.id)
        }
      } catch {
        /* handled on send */
      }
    })()
    return () => {
      cancelled = true
    }
     
  }, [deviceId])

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, stage])

  const newThread = async (nextPersona: Persona = persona, nextMode: Mode = mode) => {
    abortRef.current = true
    try {
      const res = await fetch('/api/studio/threads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deviceId, persona: nextPersona, mode: nextMode, targetSkill: targetSkill ?? null }),
      })
      if (res.ok) {
        const d = await res.json()
        setThreadId(d.id)
        setMessages([])
        setStyle(null)
        setVoted(false)
        setStage(null)
      }
    } catch {
      toast.error('Could not start a new consultation.')
    }
  }

  const openThread = async (id: string) => {
    try {
      const res = await fetch(
        `/api/studio/messages?threadId=${encodeURIComponent(id)}&deviceId=${encodeURIComponent(deviceId)}`
      )
      if (!res.ok) return
      const d = await res.json()
      abortRef.current = true
      setThreadId(id)
      setPersona(d.thread.persona as Persona)
      setMode(d.thread.mode as Mode)
      setStyle(d.thread.style)
      setVoted(false)
      setMessages(
        (d.messages ?? []).map((m: StreamMsg & { citations?: unknown }) => ({
          ...m,
          citations: Array.isArray(m.citations) ? m.citations : null,
        }))
      )
      setShowHistory(false)
    } catch {
      toast.error('Could not open that consultation.')
    }
  }

  const deleteThread = async (id: string) => {
    try {
      await fetch(
        `/api/studio/threads?id=${encodeURIComponent(id)}&deviceId=${encodeURIComponent(deviceId)}`,
        { method: 'DELETE' }
      )
      if (id === threadId) void newThread()
      void loadThreads()
    } catch {
      toast.error('Could not delete.')
    }
  }

  const send = async () => {
    const text = input.trim()
    if (!text || busy || !threadId) return
    setInput('')
    setBusy(true)
    setVoted(false)
    abortRef.current = false
    setMessages((m) => [...m, { id: `u-${Date.now()}`, role: 'user', content: text }])

    // optimistic assistant placeholder per mode
    const placeholderPersona =
      mode === 'debate' ? 'debate-a' : mode === 'roundtable' ? 'professor' : persona
    setMessages((m) => [
      ...m,
      { id: `a-${Date.now()}`, role: 'assistant', persona: placeholderPersona, content: '', pending: true },
    ])

    try {
      const res = await fetch('/api/studio/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          threadId,
          deviceId,
          message: text,
          persona,
          mode,
          subjectHint: subjectHint ?? null,
        }),
      })
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`)

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let lastPersona: string | null = null
      let currentCitations: Citation[] = []
      let currentSources: WebSource[] = []

      const startNewBubble = (p: string) => {
        setMessages((m) => {
          const copy = [...m]
          const last = copy[copy.length - 1]
          if (last?.pending) {
            copy[copy.length - 1] = { ...last, persona: p, citations: currentCitations, sources: currentSources }
          } else {
            copy.push({
              id: `a-${Date.now()}-${copy.length}`,
              role: 'assistant',
              persona: p,
              content: '',
              pending: true,
              citations: currentCitations,
              sources: currentSources,
            })
          }
          return copy
        })
      }

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''
        for (const line of lines) {
          if (!line.startsWith('data:')) continue
          const payload = line.slice(5).trim()
          if (!payload || payload === '[DONE]') continue
          let evt: { event?: string } & Record<string, unknown>
          try {
            evt = JSON.parse(payload)
          } catch {
            continue
          }
          const type = evt.event
          if (type === 'stage') {
            setStage(typeof evt.label === 'string' ? evt.label : null)
          } else if (type === 'citations') {
            currentCitations = (evt as unknown as { data?: unknown[] }).data as Citation[] ?? []
            if (!Array.isArray(currentCitations)) currentCitations = []
            setMessages((m) => {
              const copy = [...m]
              const last = copy[copy.length - 1]
              if (last?.pending) copy[copy.length - 1] = { ...last, citations: currentCitations }
              return copy
            })
          } else if (type === 'sources') {
            currentSources = ((evt as unknown as { data?: unknown[] }).data as WebSource[]) ?? []
            if (!Array.isArray(currentSources)) currentSources = []
            setMessages((m) => {
              const copy = [...m]
              const last = copy[copy.length - 1]
              if (last?.pending) copy[copy.length - 1] = { ...last, sources: currentSources }
              return copy
            })
          } else if (type === 'delta') {
            const d = evt as unknown as { data?: { persona?: string; text?: string } }
            const p = d.data?.persona ?? placeholderPersona
            const text = d.data?.text ?? ''
            if (p === 'debate-sep' || p === 'rt-sep') {
              // separator — next delta starts a new bubble
              lastPersona = 'sep'
              continue
            }
            if (lastPersona === 'sep' || lastPersona === null) {
              startNewBubble(p)
              lastPersona = p
            }
            setMessages((m) => {
              const copy = [...m]
              const last = copy[copy.length - 1]
              if (last) copy[copy.length - 1] = { ...last, persona: p, content: last.content + text }
              return copy
            })
          } else if (type === 'done') {
            setMessages((m) => m.map((x) => ({ ...x, pending: false })))
            const d = evt as unknown as { data?: { twinEvents?: number } }
            if (d.data?.twinEvents) {
              toast.success(`Twin updated — ${d.data.twinEvents} evidence event${d.data.twinEvents > 1 ? 's' : ''} recorded`, { icon: <Brain className="h-4 w-4 text-emerald-300" /> })
            }
          } else if (type === 'error') {
            const d = evt as unknown as { data?: { error?: string } }
            throw new Error(d.data?.error ?? 'stream error')
          }
        }
      }
      setMessages((m) => m.map((x) => ({ ...x, pending: false })))
      void loadThreads()
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'The faculty is unreachable.'
      toast.error(msg)
      setMessages((m) => {
        const copy = m.filter((x) => !(x.pending && !x.content))
        return copy
      })
    } finally {
      setBusy(false)
      setStage(null)
    }
  }

  const vote = async (v: 'intuition' | 'rigor') => {
    if (!threadId || voted) return
    try {
      const res = await fetch('/api/studio/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ threadId, deviceId, vote: v }),
      })
      if (res.ok) {
        const d = await res.json()
        setVoted(true)
        setStyle(d.style)
        toast.success(`Noted — future explanations lean ${d.style}`, {
          icon: <Brain className="h-4 w-4 text-emerald-300" />,
        })
      }
    } catch {
      toast.error('Could not record that vote.')
    }
  }

  const activePersona = useMemo(() => PERSONAS.find((p) => p.id === persona)!, [persona])
  const debatePair = useMemo(
    () => messages.filter((m) => m.role === 'assistant' && m.persona?.startsWith('debate-')),
    [messages]
  )
  const canVote = mode === 'debate' && debatePair.length >= 2 && !busy && !voted

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      {/* header */}
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10">
            <Sparkles className="h-6 w-6 text-emerald-300" aria-hidden />
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Teaching <span className="text-emerald-300">Studio</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground sm:text-[15px]">
              A faculty of five AI teachers — grounded, probing, and live.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowHistory((v) => !v)}
            className={`inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-emerald-400/40 ${RING}`}
            aria-expanded={showHistory}
          >
            <History className="h-4 w-4 text-emerald-300" aria-hidden />
            History
            {threads.length > 0 && (
              <span className="rounded-full bg-emerald-400/15 px-1.5 font-mono text-[10px] text-emerald-300">
                {threads.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* persona picker + modes */}
      <div className="mb-6 grid gap-3 lg:grid-cols-[1fr_auto]">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {PERSONAS.map((p) => {
            const active = persona === p.id && mode === 'chat'
            return (
              <button
                key={p.id}
                onClick={() => {
                  setPersona(p.id)
                  if (mode !== 'chat') {
                    setMode('chat')
                    void newThread(p.id, 'chat')
                  }
                }}
                title={p.blurb}
                aria-pressed={active}
                className={`group flex shrink-0 items-center gap-2.5 rounded-2xl border px-4 py-3 text-left transition-all ${RING} ${
                  active
                    ? 'border-emerald-400/50 bg-emerald-400/10 shadow-[0_8px_30px_-12px_rgba(52,211,153,0.4)]'
                    : 'border-border/80 bg-card hover:border-emerald-400/30'
                }`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border ${
                    active ? 'border-emerald-400/40 bg-emerald-400/15' : 'border-border/70 bg-background/50'
                  }`}
                >
                  <p.icon className={`h-4.5 w-4.5 ${p.accent}`} aria-hidden />
                </span>
                <span>
                  <span className="block text-[13px] font-bold">{p.label}</span>
                  <span className="block max-w-44 truncate text-[11px] text-muted-foreground">{p.blurb}</span>
                </span>
              </button>
            )
          })}
        </div>
        <div className="flex gap-2 lg:justify-end">
          {MODES.map((m) => {
            const active = mode === m.id
            return (
              <button
                key={m.id}
                onClick={() => {
                  setMode(m.id)
                  void newThread(persona, m.id)
                }}
                title={m.hint}
                aria-pressed={active}
                className={`inline-flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2.5 text-[12.5px] font-semibold transition-colors ${RING} ${
                  active
                    ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-600 dark:text-emerald-300'
                    : 'border-border/80 bg-card/60 text-muted-foreground hover:border-emerald-400/30'
                }`}
              >
                <m.icon className="h-4 w-4" aria-hidden />
                {m.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        {/* ---------------- conversation column ---------------- */}
        <div className="order-1 flex min-h-[60vh] flex-col overflow-hidden rounded-2xl border border-border/80 bg-card">
          {/* conversation header */}
          <div className="flex items-center justify-between gap-3 border-b border-border/60 bg-background/30 px-4 py-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <activePersona.icon className={`h-4.5 w-4.5 shrink-0 ${activePersona.accent}`} aria-hidden />
              <div className="min-w-0">
                <p className="truncate text-[13px] font-bold">
                  {mode === 'debate' ? 'Debate Mode' : mode === 'roundtable' ? 'Round-table Seminar' : activePersona.label}
                </p>
                <p className="truncate text-[11px] text-muted-foreground">
                  {MODES.find((m) => m.id === mode)?.hint}
                </p>
              </div>
            </div>
            {style && (
              <span className="shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">
                leans {style}
              </span>
            )}
          </div>

          {/* messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5">
            {messages.length === 0 && !busy && (
              <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                <div className="flex -space-x-3">
                  {PERSONAS.map((p, i) => (
                    <motion.span
                      key={p.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card"
                    >
                      <p.icon className={`h-5 w-5 ${p.accent}`} aria-hidden />
                    </motion.span>
                  ))}
                </div>
                <h3 className="mt-5 text-base font-semibold">Ask the faculty anything</h3>
                <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">
                  {targetSkill
                    ? `This consultation is focused on “${getSection(targetSkill)?.title ?? 'your lesson'}”.`
                    : 'The Professor cites your library · the Examiner runs a viva · the Drill Sergeant targets your weakest skills.'}
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {[
                    'Explain eigenvalues with a picture',
                    'Viva me on cache coherence',
                    'Drill my weakest skills',
                    'Design my 14-day plan',
                  ].map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setInput(s)
                      }}
                      className={`rounded-full border border-border/80 bg-background/50 px-3.5 py-1.5 text-[12px] text-muted-foreground transition-colors hover:border-emerald-400/40 hover:text-foreground ${RING}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4">
              <AnimatePresence initial={false}>
                {messages.map((m) => {
                  if (m.role === 'user') {
                    return (
                      <motion.div
                        key={m.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-end"
                      >
                        <div className="max-w-[85%] rounded-2xl rounded-br-md border border-emerald-400/25 bg-emerald-400/10 px-4 py-2.5 text-[13.5px] leading-relaxed">
                          {m.content}
                        </div>
                      </motion.div>
                    )
                  }
                  const isDebate = m.persona?.startsWith('debate-')
                  const debateStyle =
                    m.persona === 'debate-a'
                      ? 'border-emerald-400/30 bg-emerald-400/[0.06]'
                      : 'border-amber-400/30 bg-amber-400/[0.06]'
                  return (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`max-w-[92%] rounded-2xl rounded-bl-md border px-4 py-3 ${
                        isDebate ? debateStyle : 'border-border/60 bg-background/40'
                      }`}
                    >
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        {isDebate ? (
                          <span className="text-[10.5px] font-bold uppercase tracking-wide text-muted-foreground">
                            {personaLabel(m.persona)}
                          </span>
                        ) : (
                          personaChip(m.persona)
                        )}
                        {m.pending && !m.content && (
                          <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                            <Loader2 className="h-3 w-3 animate-spin" aria-hidden /> {stage ?? 'thinking'}
                            <span className="flex gap-0.5">
                              {[0, 1, 2].map((i) => (
                                <motion.span
                                  key={i}
                                  className="h-1 w-1 rounded-full bg-emerald-300"
                                  animate={{ opacity: [0.2, 1, 0.2] }}
                                  transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
                                />
                              ))}
                            </span>
                          </span>
                        )}
                      </div>
                      <div className="whitespace-pre-wrap text-[13.5px] leading-relaxed">{m.content}</div>
                      {m.citations && m.citations.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-border/40 pt-2.5">
                          {m.citations.slice(0, 5).map((c) => (
                            <button
                              key={c.sectionId}
                              onClick={() => navigate({ name: 'lesson', sectionId: c.sectionId })}
                              title={`Open §${c.number} ${c.title} — ${c.chapterTitle}`}
                              className={`group inline-flex items-center gap-1 rounded-lg border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 text-[11px] font-semibold text-emerald-600 transition-colors hover:border-emerald-400/50 dark:text-emerald-300 ${RING}`}
                            >
                              <BookOpen className="h-3 w-3" aria-hidden />
                              §{c.number} {c.title.slice(0, 26)}
                              <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                            </button>
                          ))}
                        </div>
                      )}
                      {m.sources && m.sources.length > 0 && (
                        <div className="mt-3 flex flex-col gap-1 border-t border-border/40 pt-2.5">
                          {m.sources.slice(0, 5).map((s, i) => (
                            <a
                              key={s.url}
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-1.5 text-[11.5px] text-muted-foreground transition-colors hover:text-emerald-300"
                            >
                              <Globe className="h-3 w-3 shrink-0" aria-hidden />
                              <span className="truncate">
                                [{i + 1}] {s.title} — {s.host}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </AnimatePresence>

              {/* debate vote bar */}
              {canVote && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-border/80 bg-card p-4"
                >
                  <p className="mb-3 text-center text-[13px] font-semibold">
                    Which explanation landed better?
                  </p>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => vote('intuition')}
                      className={`inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-sm font-semibold text-emerald-600 transition-colors hover:bg-emerald-400/20 dark:text-emerald-300 ${RING}`}
                    >
                      🧠 Intuition won
                    </button>
                    <button
                      onClick={() => vote('rigor')}
                      className={`inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-sm font-semibold text-amber-600 transition-colors hover:bg-amber-400/20 dark:text-amber-300 ${RING}`}
                    >
                      📐 Rigor won
                    </button>
                  </div>
                  <p className="mt-2.5 text-center text-[11px] text-muted-foreground">
                    Your vote trains how the Professor explains in this thread.
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* composer */}
          <div className="border-t border-border/60 bg-background/30 p-3">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    void send()
                  }
                }}
                rows={1}
                placeholder={
                  mode === 'debate'
                    ? 'State the doubt the teachers will argue about…'
                    : mode === 'roundtable'
                      ? 'Give the seminar a topic…'
                      : `Ask the ${activePersona.label}…`
                }
                className="max-h-36 min-h-11 flex-1 resize-none rounded-xl border border-border/80 bg-background/60 px-3.5 py-2.5 text-[13.5px] placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
                disabled={busy}
                maxLength={4000}
              />
              <button
                onClick={() => void send()}
                disabled={busy || !input.trim()}
                aria-label="Send message"
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_8px_30px_-8px_rgba(52,211,153,0.35)] transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 ${RING}`}
              >
                {busy ? (
                  <Loader2 className="h-4.5 w-4.5 animate-spin" aria-hidden />
                ) : (
                  <Send className="h-4.5 w-4.5" aria-hidden />
                )}
              </button>
            </div>
            <p className="mt-1.5 px-1 text-[10.5px] text-muted-foreground/70">
              Enter to send · Shift+Enter for a new line · Examiner &amp; Drill answers feed your twin
            </p>
          </div>
        </div>

        {/* ---------------- side column ---------------- */}
        <div className="order-2 flex flex-col gap-4">
          <AnimatePresence>
            {showHistory && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden rounded-2xl border border-border/80 bg-card"
              >
                <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-[13px] font-bold">
                    <History className="h-4 w-4 text-emerald-300" aria-hidden /> Past consultations
                  </span>
                  <button
                    onClick={() => setShowHistory(false)}
                    aria-label="Close history"
                    className={`rounded-lg p-1 text-muted-foreground hover:text-foreground ${RING}`}
                  >
                    <X className="h-4 w-4" aria-hidden />
                  </button>
                </div>
                <div className="max-h-96 overflow-y-auto p-2">
                  {threads.length === 0 ? (
                    <p className="px-2 py-6 text-center text-[12.5px] text-muted-foreground">
                      No consultations yet.
                    </p>
                  ) : (
                    threads.map((t) => (
                      <div
                        key={t.id}
                        className={`group flex items-center gap-2 rounded-xl px-2.5 py-2 transition-colors hover:bg-emerald-400/[0.06] ${
                          t.id === threadId ? 'bg-emerald-400/10' : ''
                        }`}
                      >
                        <button
                          onClick={() => void openThread(t.id)}
                          className={`min-w-0 flex-1 text-left ${RING} rounded-lg`}
                        >
                          <span className="block truncate text-[12.5px] font-semibold">{t.title}</span>
                          <span className="block text-[10.5px] text-muted-foreground">
                            {t.mode === 'chat'
                              ? PERSONAS.find((p) => p.id === t.persona)?.label ?? t.persona
                              : t.mode === 'debate'
                                ? 'Debate'
                                : 'Round-table'}{' '}
                            · {new Date(t.updatedAt).toLocaleDateString()}
                          </span>
                        </button>
                        <button
                          onClick={() => void deleteThread(t.id)}
                          aria-label={`Delete ${t.title}`}
                          className={`shrink-0 rounded-lg p-1.5 text-muted-foreground/50 opacity-0 transition-opacity hover:text-rose-400 group-hover:opacity-100 ${RING}`}
                        >
                          <X className="h-3.5 w-3.5" aria-hidden />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* mode explainer */}
          <div className="rounded-2xl border border-border/80 bg-card p-4">
            <span className="inline-flex items-center gap-2 text-[13px] font-bold">
              <MessagesSquare className="h-4 w-4 text-emerald-300" aria-hidden /> How the studio works
            </span>
            <ul className="mt-3 flex flex-col gap-2.5 text-[12px] leading-relaxed text-muted-foreground">
              <li className="flex gap-2">
                <GraduationCap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-300" aria-hidden />
                <span>
                  <b className="text-foreground">Professor</b> answers only from your 4,000+ library
                  sections and cites the exact lesson.
                </span>
              </li>
              <li className="flex gap-2">
                <ClipboardList className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-300" aria-hidden />
                <span>
                  <b className="text-foreground">Examiner</b> runs a live oral viva — every answer is
                  graded and feeds your twin.
                </span>
              </li>
              <li className="flex gap-2">
                <Swords className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-300" aria-hidden />
                <span>
                  <b className="text-foreground">Drill Sergeant</b> reads your twin and fires reps at
                  your weakest skills.
                </span>
              </li>
              <li className="flex gap-2">
                <Scale className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-300" aria-hidden />
                <span>
                  <b className="text-foreground">Debate</b> pits intuition vs rigor — your votes teach
                  the studio your style.
                </span>
              </li>
              <li className="flex gap-2">
                <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-300" aria-hidden />
                <span>
                  <b className="text-foreground">Round-table</b> stages a five-turn seminar between
                  three teachers.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

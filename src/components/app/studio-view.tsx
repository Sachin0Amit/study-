'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'sonner'
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  ClipboardList,
  Copy,
  Download,
  FileText,
  Flame,
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
import ReactMarkdown from 'react-markdown'
import { useStudy } from '@/store/useStudy'
import { getSection } from '@/data/library'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// ============================================================================
// X2 — MULTI-AGENT TEACHING STUDIO (faculty chat UI)
// Five personas · Debate mode with style learning · Round-table seminars.
// Streams over SSE from /api/studio/chat.
// ============================================================================

const RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

type Persona = 'professor' | 'examiner' | 'drill' | 'planner' | 'researcher'
type Mode = 'chat' | 'debate' | 'roundtable' | 'warroom'
type WarDepth = 'quick' | 'deep'
type WarPanelKey = 'professor' | 'examiner' | 'drill' | 'researcher'

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
  { id: 'warroom', label: 'War Room', icon: Flame, hint: 'All four minds attack one question in parallel, then synthesize a consensus' },
]

// the four war-room panels (the planner sits these battles out)
const WAR_PANEL_ORDER: WarPanelKey[] = ['professor', 'examiner', 'drill', 'researcher']
const WAR_SUGGESTIONS = [
  'Why does quicksort degrade to $O(n^2)$?',
  'Compare TCP congestion control approaches',
  'Explain the master theorem in one shot',
]

interface WarCitation {
  sectionId: string
  number?: number
  title: string
  chapterTitle?: string
  subjectName?: string
}
interface WarRoomResponse {
  panels?: Record<WarPanelKey, string>
  synthesis?: string
  citations?: WarCitation[]
  depth?: WarDepth
  error?: string
}
interface WarRoomResult {
  question: string
  depth: WarDepth
  panels: Record<WarPanelKey, string>
  synthesis: string
  citations: WarCitation[]
  createdAt: string
}

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

/** tiny copy-to-clipboard icon button (war-room panels + brief + export) */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text)
          setCopied(true)
          setTimeout(() => setCopied(false), 1600)
        } catch {
          toast.error('Could not copy to clipboard.')
        }
      }}
      aria-label="Copy to clipboard"
      title="Copy to clipboard"
      className={`rounded-lg p-1.5 text-muted-foreground/60 transition-colors hover:bg-emerald-400/10 hover:text-emerald-300 ${RING}`}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-300" aria-hidden />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden />
      )}
    </button>
  )
}

/** compact markdown renderer for war-room panels + the consensus brief */
function WarMarkdown({ text }: { text: string }) {
  return (
    <div className="text-[13px] leading-relaxed">
      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
          ul: ({ node, ...props }) => <ul className="mb-2 list-disc space-y-1 pl-4 last:mb-0" {...props} />,
          ol: ({ node, ...props }) => <ol className="mb-2 list-decimal space-y-1 pl-4 last:mb-0" {...props} />,
          li: ({ node, ...props }) => <li className="pl-0.5" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-bold text-foreground" {...props} />,
          h1: ({ node, ...props }) => <h3 className="mb-1.5 mt-1 text-[13.5px] font-bold" {...props} />,
          h2: ({ node, ...props }) => <h4 className="mb-1.5 mt-1 text-[13px] font-bold" {...props} />,
          h3: ({ node, ...props }) => <h5 className="mb-1 mt-1 text-[12.5px] font-bold" {...props} />,
          a: ({ node, ...props }) => (
            <a className="text-emerald-300 underline underline-offset-2" target="_blank" rel="noopener noreferrer" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="mb-2 border-l-2 border-emerald-400/40 pl-3 text-muted-foreground" {...props} />
          ),
          code: ({ node, ...props }) => <code className="rounded bg-border/40 px-1 py-0.5 font-mono text-[12px]" {...props} />,
          hr: () => <hr className="my-3 border-border/50" />,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  )
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

  // war room state (stateless — not tied to a thread)
  const [warQuestion, setWarQuestion] = useState('')
  const [warDepth, setWarDepth] = useState<WarDepth>('quick')
  const [warBusy, setWarBusy] = useState(false)
  const [warResult, setWarResult] = useState<WarRoomResult | null>(null)
  const [warError, setWarError] = useState<string | null>(null)

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
  }, [messages, stage, warBusy, warResult])

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
      if (id === threadId) void newThread(persona, mode === 'warroom' ? 'chat' : mode)
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

      // standard SSE frames: "event: <name>\ndata: <json>\n\n"
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        let sep: number
        while ((sep = buffer.indexOf('\n\n')) !== -1) {
          const raw = buffer.slice(0, sep)
          buffer = buffer.slice(sep + 2)
          let type = 'message'
          const dataLines: string[] = []
          for (const line of raw.split('\n')) {
            if (line.startsWith('event:')) type = line.slice(6).trim()
            else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim())
          }
          if (!dataLines.length) continue
          let evt: unknown
          try {
            evt = JSON.parse(dataLines.join('\n'))
          } catch {
            continue
          }
          if (type === 'stage') {
            const label = (evt as { label?: unknown }).label
            setStage(typeof label === 'string' ? label : null)
          } else if (type === 'citations') {
            currentCitations = Array.isArray(evt) ? (evt as Citation[]) : []
            setMessages((m) => {
              const copy = [...m]
              const last = copy[copy.length - 1]
              if (last?.pending) copy[copy.length - 1] = { ...last, citations: currentCitations }
              return copy
            })
          } else if (type === 'sources') {
            currentSources = Array.isArray(evt) ? (evt as WebSource[]) : []
            setMessages((m) => {
              const copy = [...m]
              const last = copy[copy.length - 1]
              if (last?.pending) copy[copy.length - 1] = { ...last, sources: currentSources }
              return copy
            })
          } else if (type === 'delta') {
            const d = evt as { persona?: string; text?: string }
            const p = d.persona ?? placeholderPersona
            const text = d.text ?? ''
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
            const twinEvents = (evt as { twinEvents?: number }).twinEvents
            if (twinEvents) {
              toast.success(`Twin updated — ${twinEvents} evidence event${twinEvents > 1 ? 's' : ''} recorded`, { icon: <Brain className="h-4 w-4 text-emerald-300" /> })
            }
          } else if (type === 'error') {
            const message = (evt as { error?: string }).error
            throw new Error(message ?? 'stream error')
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

  // ------------------------------------------------------------- war room
  const runWarRoom = async (overrideQuestion?: string) => {
    const question = (overrideQuestion ?? warQuestion).trim()
    if (!question || warBusy) return
    if (overrideQuestion && overrideQuestion.trim()) setWarQuestion(overrideQuestion.trim())
    setWarBusy(true)
    setWarError(null)
    setWarResult(null)
    try {
      const res = await fetch('/api/studio/warroom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deviceId, question, depth: warDepth }),
      })
      const data = (await res.json().catch(() => null)) as WarRoomResponse | null
      if (!res.ok || !data?.panels) {
        throw new Error(data?.error ?? `The war room could not convene (HTTP ${res.status}).`)
      }
      setWarResult({
        question,
        depth: data.depth ?? warDepth,
        panels: {
          professor: data.panels.professor ?? 'Panel unavailable — the Professor could not be reached this round.',
          examiner: data.panels.examiner ?? 'Panel unavailable — the Examiner could not be reached this round.',
          drill: data.panels.drill ?? 'Panel unavailable — the Drill Sergeant could not be reached this round.',
          researcher: data.panels.researcher ?? 'Panel unavailable — the Researcher could not be reached this round.',
        },
        synthesis: data.synthesis ?? 'Consensus unavailable — the panels above stand on their own.',
        citations: Array.isArray(data.citations) ? data.citations : [],
        createdAt: new Date().toISOString(),
      })
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'The war room could not convene.'
      setWarError(msg)
      toast.error(msg)
    } finally {
      setWarBusy(false)
    }
  }

  /** the question that produced a given assistant answer — for escalation */
  const escalateTarget = (idx: number): string | null => {
    for (let j = idx; j >= 0; j--) {
      if (messages[j].role === 'user') return messages[j].content
    }
    return null
  }

  // ------------------------------------------------------------- session export
  const hasExportContent = mode === 'warroom' ? warResult !== null : messages.length > 0

  const buildSessionMarkdown = (): string => {
    const lines: string[] = []
    const now = new Date()
    if (mode === 'warroom' && warResult) {
      lines.push('# StudyVerse Studio — War Room Session', '')
      lines.push(`- **Date:** ${now.toLocaleString()}`)
      lines.push(`- **Mode:** War Room (${warResult.depth})`)
      lines.push(`- **Question:** ${warResult.question}`, '')
      for (const k of WAR_PANEL_ORDER) {
        const meta = PERSONAS.find((p) => p.id === k)
        lines.push(`## ${meta?.label ?? k}`, '', warResult.panels[k], '')
      }
      lines.push('## Consensus Brief', '', warResult.synthesis, '')
      if (warResult.citations.length) {
        lines.push('## Library citations', '')
        for (const c of warResult.citations) {
          lines.push(`- §${c.number ?? ''} ${c.title}${c.chapterTitle ? ` — ${c.chapterTitle}` : ''}`)
        }
        lines.push('')
      }
      return lines.join('\n')
    }
    // consult / debate / round-table thread export
    const modeLabel = MODES.find((m) => m.id === mode)?.label ?? 'Consult'
    lines.push(`# StudyVerse Studio — ${modeLabel} Session`, '')
    lines.push(`- **Date:** ${now.toLocaleString()}`)
    lines.push(`- **Mode:** ${modeLabel}`)
    lines.push(`- **Persona:** ${activePersona.label}`, '')
    for (const m of messages) {
      if (m.role === 'user') {
        lines.push('## Learner', '', m.content, '')
      } else {
        lines.push(`## ${personaLabel(m.persona) || 'Faculty'}`, '', m.content, '')
        if (m.citations?.length) {
          for (const c of m.citations.slice(0, 5)) lines.push(`- §${c.number} ${c.title} — ${c.chapterTitle}`)
          lines.push('')
        }
        if (m.sources?.length) {
          for (const s of m.sources.slice(0, 5)) lines.push(`- [${s.title}](${s.url})`)
          lines.push('')
        }
      }
    }
    return lines.join('\n')
  }

  const exportSessionMarkdown = () => {
    try {
      const md = buildSessionMarkdown()
      const ts = new Date()
      const pad = (n: number) => String(n).padStart(2, '0')
      const stamp = `${ts.getFullYear()}${pad(ts.getMonth() + 1)}${pad(ts.getDate())}-${pad(ts.getHours())}${pad(ts.getMinutes())}${pad(ts.getSeconds())}`
      const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `studyverse-studio-${stamp}.md`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      toast.success('Session exported as markdown', { icon: <Download className="h-4 w-4 text-emerald-300" /> })
    } catch {
      toast.error('Could not export the session.')
    }
  }

  const copySessionMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(buildSessionMarkdown())
      toast.success('Session copied to clipboard', { icon: <Copy className="h-4 w-4 text-emerald-300" /> })
    } catch {
      toast.error('Could not copy the session.')
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
          {hasExportContent && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-emerald-400/40 ${RING}`}
                >
                  <Download className="h-4 w-4 text-emerald-300" aria-hidden />
                  Export
                  <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={exportSessionMarkdown} className="gap-2 text-[13px]">
                  <FileText className="h-4 w-4 text-emerald-300" aria-hidden /> Export Markdown
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => void copySessionMarkdown()} className="gap-2 text-[13px]">
                  <Copy className="h-4 w-4 text-emerald-300" aria-hidden /> Copy all
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
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
                  if (m.id !== 'warroom') void newThread(persona, m.id)
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
        {/* ---------------- main column: WAR ROOM · conversation ---------------- */}
        {mode === 'warroom' ? (
          <div className="order-1 flex min-h-[60vh] flex-col overflow-hidden rounded-2xl border border-orange-400/25 bg-card">
            {/* war room header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 bg-background/30 px-4 py-3">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-orange-400/30 bg-orange-400/10">
                  <Flame className="h-4 w-4 text-orange-400" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-bold">War Room</p>
                  <p className="truncate text-[11px] text-muted-foreground">
                    Four minds attack one question — then a consensus brief
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-1 rounded-lg border border-border/70 bg-background/50 p-0.5">
                {(['quick', 'deep'] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setWarDepth(d)}
                    disabled={warBusy}
                    aria-pressed={warDepth === d}
                    title={d === 'quick' ? 'Fast, tight panels' : 'Full-depth panels'}
                    className={`rounded-md px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide transition-colors disabled:opacity-50 ${
                      warDepth === d
                        ? 'bg-orange-400/15 text-orange-500 dark:text-orange-300'
                        : 'text-muted-foreground hover:text-foreground'
                    } ${RING}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* the question — the trigger */}
            <div className="border-b border-border/60 bg-background/30 p-3">
              <div className="flex items-end gap-2">
                <textarea
                  value={warQuestion}
                  onChange={(e) => setWarQuestion(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      void runWarRoom()
                    }
                  }}
                  rows={1}
                  placeholder="Bring a question — all four minds attack it in parallel…"
                  className="max-h-36 min-h-11 flex-1 resize-none rounded-xl border border-border/80 bg-background/60 px-3.5 py-2.5 text-[13.5px] placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50"
                  disabled={warBusy}
                  maxLength={2000}
                />
                <button
                  onClick={() => void runWarRoom()}
                  disabled={warBusy || !warQuestion.trim()}
                  aria-label="Launch the war room"
                  className={`inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground shadow-[0_8px_30px_-8px_rgba(251,146,60,0.4)] transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 ${RING}`}
                >
                  {warBusy ? (
                    <Loader2 className="h-4.5 w-4.5 animate-spin" aria-hidden />
                  ) : (
                    <Flame className="h-4.5 w-4.5" aria-hidden />
                  )}
                  {warBusy ? 'Convening…' : 'Attack'}
                </button>
              </div>
            </div>

            {/* war room body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5">
              {warBusy && (
                <div aria-live="polite">
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {WAR_PANEL_ORDER.map((k) => {
                      const meta = PERSONAS.find((p) => p.id === k)!
                      return (
                        <div key={k} className="rounded-2xl border border-border/70 bg-background/40 p-4">
                          <div className="mb-3 flex items-center gap-2 opacity-70">
                            <meta.icon className={`h-4 w-4 ${meta.accent}`} aria-hidden />
                            <span className="text-[12px] font-bold">{meta.label}</span>
                            <Loader2 className="ml-auto h-3.5 w-3.5 animate-spin text-muted-foreground" aria-hidden />
                          </div>
                          <div className="space-y-2.5">
                            {[92, 100, 78, 88, 60].map((w, l) => (
                              <div key={l} className="h-3 animate-pulse rounded bg-border/60" style={{ width: `${w}%` }} />
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  {/* synthesizing shimmer */}
                  <div className="relative mt-4 overflow-hidden rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.04] p-4">
                    <motion.div
                      className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent"
                      animate={{ x: ['-120%', '320%'] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
                      aria-hidden
                    />
                    <p className="relative flex items-center gap-2 text-[12.5px] font-semibold text-muted-foreground">
                      <Sparkles className="h-4 w-4 text-emerald-300" aria-hidden />
                      Synthesizing consensus…
                    </p>
                    <div className="relative mt-3 space-y-2.5">
                      {[95, 82, 70].map((w, l) => (
                        <div key={l} className="h-3 animate-pulse rounded bg-border/50" style={{ width: `${w}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {!warBusy && warError && (
                <div className="rounded-2xl border border-rose-400/30 bg-rose-400/[0.06] p-4 text-[13px] text-rose-600 dark:text-rose-300">
                  {warError}
                </div>
              )}

              {!warBusy && !warResult && !warError && (
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                  <div className="flex -space-x-3">
                    {WAR_PANEL_ORDER.map((k, i) => {
                      const meta = PERSONAS.find((p) => p.id === k)!
                      return (
                        <motion.span
                          key={k}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card"
                        >
                          <meta.icon className={`h-5 w-5 ${meta.accent}`} aria-hidden />
                        </motion.span>
                      )
                    })}
                  </div>
                  <h3 className="mt-5 text-base font-semibold">Bring a question — all four minds attack it in parallel</h3>
                  <p className="mt-1.5 max-w-md text-sm text-muted-foreground">
                    The Professor cites your library · the Examiner maps what gets tested · the Drill Sergeant drafts
                    reps · the Researcher scans the live web — then a Consensus Brief lands.
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {WAR_SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => setWarQuestion(s)}
                        className={`rounded-full border border-border/80 bg-background/50 px-3.5 py-1.5 text-[12px] text-muted-foreground transition-colors hover:border-orange-400/40 hover:text-foreground ${RING}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {!warBusy && warResult && (
                <div>
                  {/* session echo */}
                  <div className="flex flex-wrap items-center gap-2 text-[11.5px] text-muted-foreground">
                    <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-2.5 py-1 font-bold uppercase tracking-wide text-orange-500 dark:text-orange-300">
                      {warResult.depth} strike
                    </span>
                    <span className="min-w-0 flex-1 truncate italic">“{warResult.question}”</span>
                    <span>{new Date(warResult.createdAt).toLocaleString()}</span>
                  </div>

                  {/* the four panels */}
                  <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {WAR_PANEL_ORDER.map((k) => {
                      const meta = PERSONAS.find((p) => p.id === k)!
                      const text = warResult.panels[k]
                      const unavailable = text.startsWith('Panel unavailable')
                      return (
                        <motion.div
                          key={k}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex flex-col rounded-2xl border p-4 ${
                            unavailable ? 'border-border/50 bg-background/20' : 'border-border/70 bg-background/40'
                          }`}
                        >
                          <div className="mb-2.5 flex items-center gap-2 border-b border-border/40 pb-2.5">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background/60">
                              <meta.icon className={`h-3.5 w-3.5 ${meta.accent}`} aria-hidden />
                            </span>
                            <span className="shrink-0 text-[12px] font-bold">{meta.label}</span>
                            <span className="hidden truncate text-[10.5px] text-muted-foreground/70 xl:block">
                              {meta.blurb}
                            </span>
                            <span className="ml-auto shrink-0">
                              <CopyButton text={text} />
                            </span>
                          </div>
                          <div className={unavailable ? 'text-[12.5px] italic text-muted-foreground' : ''}>
                            {unavailable ? text : <WarMarkdown text={text} />}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* consensus brief — the verdict */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="relative mt-4 overflow-hidden rounded-2xl border border-emerald-400/35 bg-gradient-to-br from-emerald-400/[0.09] via-card to-card p-5 shadow-[0_12px_40px_-16px_rgba(52,211,153,0.35)]"
                  >
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-400/15">
                        <Award className="h-4.5 w-4.5 text-emerald-300" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[13.5px] font-bold text-emerald-600 dark:text-emerald-300">Consensus Brief</p>
                        <p className="text-[11px] text-muted-foreground">The synthesized verdict of all four minds</p>
                      </div>
                      <span className="ml-auto shrink-0">
                        <CopyButton text={warResult.synthesis} />
                      </span>
                    </div>
                    <WarMarkdown text={warResult.synthesis} />
                  </motion.div>

                  {/* library citations */}
                  {warResult.citations.length > 0 && (
                    <div className="mt-4 rounded-2xl border border-border/70 bg-card/60 p-4">
                      <p className="mb-2.5 flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wide text-muted-foreground">
                        <BookOpen className="h-3.5 w-3.5 text-emerald-300" aria-hidden /> Library citations
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {warResult.citations.map((c) => (
                          <button
                            key={c.sectionId}
                            onClick={() => navigate({ name: 'lesson', sectionId: c.sectionId })}
                            title={`Open ${c.chapterTitle ? `${c.chapterTitle} — ` : ''}${c.title}`}
                            className={`group inline-flex items-center gap-1 rounded-lg border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 text-[11px] font-semibold text-emerald-600 transition-colors hover:border-emerald-400/50 dark:text-emerald-300 ${RING}`}
                          >
                            <BookOpen className="h-3 w-3" aria-hidden />
                            {c.number != null ? `§${c.number} ` : ''}
                            {c.title.slice(0, 26)}
                            <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
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
                {messages.map((m, idx) => {
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
                        {(mode === 'chat' || mode === 'debate') && !m.pending && m.content && escalateTarget(idx) && (
                          <button
                            onClick={() => {
                              const target = escalateTarget(idx)
                              if (!target) return
                              setMode('warroom')
                              setWarQuestion(target)
                              void runWarRoom(target)
                            }}
                            title="Send this question to all four minds at once"
                            className={`inline-flex items-center gap-1 rounded-full border border-orange-400/30 bg-orange-400/10 px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-orange-500 transition-colors hover:border-orange-400/60 hover:bg-orange-400/20 dark:text-orange-300 ${RING}`}
                          >
                            <Flame className="h-3 w-3" aria-hidden /> Escalate to War Room
                          </button>
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
        )}

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
              <li className="flex gap-2">
                <Flame className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-400" aria-hidden />
                <span>
                  <b className="text-foreground">War Room</b> sends one question to four minds in
                  parallel and synthesizes a consensus brief you can export.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

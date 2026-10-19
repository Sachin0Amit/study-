'use client'

/**
 * Voice Tutor — the lesson that talks back.
 *
 * Two modes on a floating panel available inside any lesson:
 *  - Listen: the lesson read aloud block-by-block (TTS via /api/voice/tts),
 *    with the reading queue visible, the current block highlighted and the
 *    next block's audio prefetched while the current one plays.
 *  - Ask: press the mic, speak a question (or type it) — ASR transcribes,
 *    a Socratic tutor answers grounded in THIS lesson (/api/voice/ask), and
 *    the reply is spoken back.
 *
 * Pure client; every AI call happens in API routes (z-ai-web-dev-sdk is
 * backend-only by house rule).
 */

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AudioLines,
  BookOpenText,
  Loader2,
  Mic,
  MicOff,
  Pause,
  Play,
  Radio,
  RotateCcw,
  Send,
  SkipBack,
  SkipForward,
  Sparkles,
  Volume2,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface VoiceBlock {
  key: string
  label: string
  text: string
}

interface ChatTurn {
  role: 'user' | 'tutor'
  content: string
  audioUrl?: string
}

type AskPhase = 'idle' | 'recording' | 'transcribing' | 'thinking' | 'speaking' | 'error'

const VOICES: { id: string; label: string }[] = [
  { id: 'tongtong', label: 'Warm' },
  { id: 'xiaochen', label: 'Calm' },
  { id: 'kazi', label: 'Clear' },
  { id: 'jam', label: 'British' },
]

/* ------------------------------------------------------------------ */
/*  WAV encoding — MediaRecorder gives webm/mp4; ASR wants WAV          */
/* ------------------------------------------------------------------ */

function encodeWavFromBuffer(buffer: AudioBuffer): ArrayBuffer {
  const numCh = Math.min(2, buffer.numberOfChannels)
  const len = buffer.length
  const sampleRate = buffer.sampleRate
  const bytesPerSample = 2
  const blockAlign = numCh * bytesPerSample
  const dataSize = len * blockAlign
  const out = new ArrayBuffer(44 + dataSize)
  const view = new DataView(out)

  const writeStr = (off: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i))
  }
  writeStr(0, 'RIFF')
  view.setUint32(4, 36 + dataSize, true)
  writeStr(8, 'WAVE')
  writeStr(12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true) // PCM
  view.setUint16(22, numCh, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, sampleRate * blockAlign, true)
  view.setUint16(32, blockAlign, true)
  view.setUint16(34, 16, true) // bits
  writeStr(36, 'data')
  view.setUint32(40, dataSize, true)

  const channels: Float32Array[] = []
  for (let c = 0; c < numCh; c++) channels.push(buffer.getChannelData(c))
  let off = 44
  for (let i = 0; i < len; i++) {
    for (let c = 0; c < numCh; c++) {
      const s = Math.max(-1, Math.min(1, channels[c][i]))
      view.setInt16(off, s < 0 ? s * 0x8000 : s * 0x7fff, true)
      off += 2
    }
  }
  return out
}

function arrayBufferToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf)
  let bin = ''
  const CHUNK = 0x8000
  for (let i = 0; i < bytes.length; i += CHUNK) {
    bin += String.fromCharCode(...bytes.subarray(i, i + CHUNK))
  }
  return btoa(bin)
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function VoiceTutor({ sectionId, lessonTitle, blocks }: {
  sectionId: string
  lessonTitle: string
  blocks: VoiceBlock[]
}) {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<'listen' | 'ask'>('listen')
  /* SSR-safe mounted flag (no setState-in-effect) */
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )

  /* portal to <body> — escapes any transformed ancestor (page transitions)
   * that would otherwise trap the fixed panel in a local stacking context */
  if (!mounted) return null

  return createPortal(
    <>
      {/* floating action button — bottom-right, above the safe area */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="vt-fab"
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            onClick={() => setOpen(true)}
            aria-label="Open Voice Tutor — listen to this lesson or ask a question by voice"
            className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-[0_10px_30px_-8px_rgba(16,185,129,0.65)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 print:hidden"
          >
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-400/25" style={{ animationDuration: '2.6s' }} />
            <AudioLines className="h-6 w-6" aria-hidden />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.section
            key="vt-panel"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            aria-label="Voice Tutor"
            className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-[60] flex max-h-[min(72vh,640px)] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl print:hidden"
          >
            {/* header */}
            <header className="flex items-center gap-2.5 border-b border-border bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10 px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <AudioLines className="h-4 w-4" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="text-[13.5px] font-semibold leading-tight text-foreground">Voice Tutor</h2>
                <p className="truncate text-[11.5px] text-muted-foreground">{lessonTitle}</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close Voice Tutor"
                className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </header>

            {/* tab switch */}
            <div className="flex gap-1 border-b border-border px-3 pt-2.5" role="tablist" aria-label="Voice Tutor modes">
              {(['listen', 'ask'] as const).map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={`flex items-center gap-1.5 rounded-t-lg border-b-2 px-3.5 pb-2 pt-1 text-[12.5px] font-semibold transition-colors ${
                    tab === t
                      ? 'border-emerald-500 text-foreground'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t === 'listen' ? <BookOpenText className="h-3.5 w-3.5" aria-hidden /> : <Mic className="h-3.5 w-3.5" aria-hidden />}
                  {t === 'listen' ? 'Listen' : 'Ask'}
                </button>
              ))}
            </div>

            {tab === 'listen' ? <ListenPanel sectionId={sectionId} blocks={blocks} /> : <AskPanel sectionId={sectionId} />}
          </motion.section>
        )}
      </AnimatePresence>
    </>, document.body)
}

/* ------------------------------------------------------------------ */
/*  Listen — read the lesson aloud, block by block                     */
/* ------------------------------------------------------------------ */

function ListenPanel({ sectionId, blocks }: { sectionId: string; blocks: VoiceBlock[] }) {
  const [voice, setVoice] = useState('tongtong')
  const [speed, setSpeed] = useState(1)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [loadingIdx, setLoadingIdx] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const urlCache = useRef<Map<number, string>>(new Map()) // idx → objectURL
  const stoppedRef = useRef(true)
  const listRef = useRef<HTMLDivElement | null>(null)

  /* strip markdown-ish noise so the voice reads clean prose */
  const speakable = useMemo(
    () =>
      blocks.map((b) => ({
        ...b,
        text: b.text
          .replace(/\*\*([^*]+)\*\*/g, '$1')
          .replace(/\$([^$]*)\$/g, '$1')
          .replace(/[#>*_`]/g, '')
          .replace(/\s+/g, ' ')
          .trim(),
      })),
    [blocks],
  )

  const releaseAll = useCallback(() => {
    stoppedRef.current = true
    setPlaying(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ''
    }
    for (const url of urlCache.current.values()) URL.revokeObjectURL(url)
    urlCache.current.clear()
  }, [])

  useEffect(() => releaseAll, [releaseAll])
  useEffect(() => () => releaseAll(), [releaseAll, sectionId])

  const fetchAudio = useCallback(
    async (idx: number): Promise<string | null> => {
      const cached = urlCache.current.get(idx)
      if (cached) return cached
      const block = speakable[idx]
      if (!block || !block.text) return null
      setLoadingIdx(idx)
      try {
        /* 45s cap — a lost connection must not spin the player forever */
        const ctrl = new AbortController()
        const timer = window.setTimeout(() => ctrl.abort(), 45_000)
        const res = await fetch('/api/voice/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: block.text.slice(0, 1000), voice, speed }),
          signal: ctrl.signal,
        }).finally(() => window.clearTimeout(timer))
        if (!res.ok) throw new Error(`tts ${res.status}`)
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        urlCache.current.set(idx, url)
        return url
      } catch {
        setError('Could not synthesize this block — check your connection and try again.')
        return null
      } finally {
        setLoadingIdx(null)
      }
    },
    [speakable, voice, speed],
  )

  const playIdx = useCallback(
    async (idx: number) => {
      if (idx < 0 || idx >= speakable.length) {
        releaseAll()
        setCurrent(0)
        return
      }
      setCurrent(idx)
      const url = await fetchAudio(idx)
      if (!url) return
      if (stoppedRef.current) return
      const audio = new Audio(url)
      audioRef.current = audio
      audio.onended = () => {
        if (stoppedRef.current) return
        /* prefetch the next block while this one played */
        if (idx + 1 < speakable.length) void fetchAudio(idx + 1)
        void playIdx(idx + 1)
      }
      audio.onerror = () => setError('Audio playback failed — skipping to the next block.')
      try {
        await audio.play()
      } catch {
        setError('Tap play again — the browser blocked autoplay.')
        setPlaying(false)
      }
    },
    [fetchAudio, releaseAll, speakable.length],
  )

  const start = useCallback(
    (idx: number) => {
      setError(null)
      stoppedRef.current = false
      setPlaying(true)
      void playIdx(idx)
    },
    [playIdx],
  )

  const pause = useCallback(() => {
    stoppedRef.current = true
    setPlaying(false)
    audioRef.current?.pause()
  }, [])

  /* voice or speed change mid-session → invalidate cache, restart block */
  const restartWithSettings = useCallback(
    (nextVoice: string, nextSpeed: number) => {
      const idx = current
      releaseAll()
      setVoice(nextVoice)
      setSpeed(nextSpeed)
      window.setTimeout(() => start(idx), 60)
    },
    [current, releaseAll, start],
  )

  /* keep the active row in view */
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${current}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [current])

  if (!blocks.length) {
    return (
      <div className="px-4 py-8 text-center text-[13px] text-muted-foreground">
        This lesson has no readable passages yet.
      </div>
    )
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* reading queue */}
      <div ref={listRef} className="min-h-0 flex-1 space-y-1 overflow-y-auto px-3 py-3">
        {speakable.map((b, i) => (
          <button
            key={b.key}
            data-idx={i}
            onClick={() => (playing ? (pause(), start(i)) : start(i))}
            aria-label={`Read: ${b.label}`}
            className={`w-full rounded-lg border px-3 py-2 text-left transition-colors ${
              i === current
                ? 'border-emerald-500/50 bg-emerald-500/10'
                : 'border-transparent hover:border-border hover:bg-muted/60'
            }`}
          >
            <span className="flex items-center gap-2">
              {i === current && playing ? (
                <Radio className="h-3 w-3 shrink-0 animate-pulse text-emerald-500" aria-hidden />
              ) : (
                <span className="w-3 shrink-0 text-center text-[10px] text-muted-foreground">{i + 1}</span>
              )}
              <span className={`text-[12px] font-medium ${i === current ? 'text-foreground' : 'text-muted-foreground'}`}>
                {b.label}
              </span>
              {loadingIdx === i && <Loader2 className="ml-auto h-3 w-3 shrink-0 animate-spin text-emerald-500" aria-hidden />}
            </span>
            <span className="mt-0.5 line-clamp-1 block pl-5 text-[11px] text-muted-foreground/80">{b.text.slice(0, 90)}</span>
          </button>
        ))}
      </div>

      {error && (
        <p role="alert" className="mx-3 mb-2 rounded-lg bg-rose-500/10 px-3 py-2 text-[11.5px] text-rose-600 dark:text-rose-400">
          {error}
        </p>
      )}

      {/* transport + settings */}
      <div className="space-y-2.5 border-t border-border px-3 py-3">
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" size="icon" className="h-9 w-9" aria-label="Previous block" onClick={() => { pause(); start(Math.max(0, current - 1)) }}>
            <SkipBack className="h-4 w-4" aria-hidden />
          </Button>
          <Button
            size="lg"
            className="h-11 w-11 rounded-full bg-emerald-600 hover:bg-emerald-700"
            aria-label={playing ? 'Pause reading' : 'Start reading'}
            onClick={() => (playing ? pause() : start(current))}
          >
            {playing ? <Pause className="h-5 w-5" aria-hidden /> : <Play className="ml-0.5 h-5 w-5" aria-hidden />}
          </Button>
          <Button variant="outline" size="icon" className="h-9 w-9" aria-label="Next block" onClick={() => { pause(); start(Math.min(speakable.length - 1, current + 1)) }}>
            <SkipForward className="h-4 w-4" aria-hidden />
          </Button>
          <Button variant="outline" size="icon" className="h-9 w-9" aria-label="Stop and reset" onClick={() => { releaseAll(); setCurrent(0) }}>
            <RotateCcw className="h-4 w-4" aria-hidden />
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-1.5 text-[11.5px] text-muted-foreground">
            Voice
            <select
              value={voice}
              onChange={(e) => restartWithSettings(e.target.value, speed)}
              className="rounded-md border border-border bg-background px-1.5 py-1 text-[11.5px] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Reading voice"
            >
              {VOICES.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-1 items-center gap-2 text-[11.5px] text-muted-foreground">
            Speed
            <Slider
              value={[speed]}
              min={0.7}
              max={1.4}
              step={0.05}
              onValueCommit={(v) => restartWithSettings(voice, v[0] ?? speed)}
              aria-label="Reading speed"
              className="flex-1"
            />
            <span className="w-8 text-right tabular-nums text-foreground">{speed.toFixed(2)}×</span>
          </label>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Ask — speak (or type) a question, hear the grounded answer          */
/* ------------------------------------------------------------------ */

function AskPanel({ sectionId }: { sectionId: string }) {
  const [turns, setTurns] = useState<ChatTurn[]>([])
  const [phase, setPhase] = useState<AskPhase>('idle')
  const [typed, setTyped] = useState('')
  const [speakReplies, setSpeakReplies] = useState(true)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [micSupported, setMicSupported] = useState(false)

  const recorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const audioCtxRef = useRef<AudioContext | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const chatRef = useRef<HTMLDivElement | null>(null)
  const replyAudioRef = useRef<HTMLAudioElement | null>(null)
  const turnsRef = useRef<ChatTurn[]>([])

  useEffect(() => {
    turnsRef.current = turns
  }, [turns])

  useEffect(() => {
    setMicSupported(
      typeof window !== 'undefined' &&
        typeof navigator !== 'undefined' &&
        !!navigator.mediaDevices?.getUserMedia &&
        typeof window.MediaRecorder !== 'undefined',
    )
  }, [])

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' })
  }, [turns, phase])

  const stopReplyAudio = useCallback(() => {
    if (replyAudioRef.current) {
      replyAudioRef.current.pause()
      replyAudioRef.current = null
    }
  }, [])

  const cleanupRecording = useCallback(() => {
    if (recorderRef.current && recorderRef.current.state === 'recording') {
      recorderRef.current.stop()
    }
    recorderRef.current = null
    streamRef.current?.getTracks().forEach((t) => t.stop())
    streamRef.current = null
    chunksRef.current = []
  }, [])

  useEffect(
    () => () => {
      cleanupRecording()
      stopReplyAudio()
    },
    [cleanupRecording, stopReplyAudio],
  )

  const send = useCallback(
    async (payload: { audioBase64?: string; question?: string }) => {
      setErrorMsg(null)
      setPhase('thinking')
      setTurns((t) => [...t, { role: 'user', content: payload.question ?? 'Your spoken question' }])
      try {
        const res = await fetch('/api/voice/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...payload,
            sectionId,
            history: turnsRef.current.slice(-6).map((t) => ({ role: t.role, content: t.content })),
            speak: speakReplies,
          }),
        })
        const data = (await res.json()) as { transcript?: string; answer?: string; audioBase64?: string; error?: string }
        if (!res.ok || !data.answer) throw new Error(data.error || `tutor ${res.status}`)

        /* replace the placeholder user turn with the real transcript */
        setTurns((t) => {
          const copy = [...t]
          const lastUser = [...copy].reverse().findIndex((x) => x.role === 'user')
          if (lastUser !== -1 && data.transcript) copy[copy.length - 1 - lastUser].content = data.transcript
          return copy
        })
        setTurns((t) => [...t, { role: 'tutor', content: data.answer! }])

        if (data.audioBase64) {
          setPhase('speaking')
          const url = `data:audio/wav;base64,${data.audioBase64}`
          const audio = new Audio(url)
          replyAudioRef.current = audio
          audio.onended = () => setPhase('idle')
          audio.onerror = () => setPhase('idle')
          try {
            await audio.play()
          } catch {
            setPhase('idle')
          }
        } else {
          setPhase('idle')
        }
      } catch (err) {
        setPhase('error')
        setErrorMsg(err instanceof Error ? err.message : 'The tutor could not answer — try again.')
      }
    },
    [sectionId, speakReplies],
  )

  const startRecording = useCallback(async () => {
    setErrorMsg(null)
    stopReplyAudio()
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      const mime = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4'].find(
        (m) => typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(m),
      )
      const rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined)
      chunksRef.current = []
      rec.ondataavailable = (e) => e.data.size > 0 && chunksRef.current.push(e.data)
      rec.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: rec.mimeType || 'audio/webm' })
        cleanupRecording()
        if (blob.size < 1200) {
          /* too short — probably a mis-tap */
          setPhase('idle')
          return
        }
        setPhase('transcribing')
        try {
          const arrayBuf = await blob.arrayBuffer()
          const ctx = audioCtxRef.current ?? new AudioContext()
          audioCtxRef.current = ctx
          const decoded = await ctx.decodeAudioData(arrayBuf.slice(0))
          const wav = encodeWavFromBuffer(decoded)
          await send({ audioBase64: arrayBufferToBase64(wav) })
        } catch {
          setPhase('error')
          setErrorMsg('Could not process the recording — type your question instead?')
        }
      }
      recorderRef.current = rec
      rec.start()
      setPhase('recording')
    } catch {
      setPhase('error')
      setErrorMsg('Microphone unavailable — check browser permissions, or type your question.')
    }
  }, [cleanupRecording, send, stopReplyAudio])

  const stopRecording = useCallback(() => {
    if (recorderRef.current?.state === 'recording') recorderRef.current.stop()
    else setPhase('idle')
  }, [])

  const phaseLabel: Record<AskPhase, string> = {
    idle: '',
    recording: 'Listening… tap to stop',
    transcribing: 'Transcribing your question…',
    thinking: 'The tutor is thinking…',
    speaking: 'Speaking the answer…',
    error: '',
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* conversation */}
      <div ref={chatRef} className="min-h-0 flex-1 space-y-2.5 overflow-y-auto px-3 py-3">
        {turns.length === 0 && phase === 'idle' && (
          <div className="space-y-2 rounded-xl border border-dashed border-border bg-muted/30 px-3.5 py-4 text-center">
            <Sparkles className="mx-auto h-4 w-4 text-emerald-500" aria-hidden />
            <p className="text-[12.5px] font-medium text-foreground">Ask anything about this lesson</p>
            <p className="text-[11.5px] leading-relaxed text-muted-foreground">
              Speak or type — the tutor answers from this lesson and the wider library, then reads the answer aloud.
            </p>
          </div>
        )}
        {turns.map((t, i) => (
          <div key={i} className={`flex ${t.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-[12.5px] leading-relaxed ${
                t.role === 'user'
                  ? 'rounded-br-md bg-emerald-600 text-white'
                  : 'rounded-bl-md border border-border bg-muted/50 text-foreground'
              }`}
            >
              {t.role === 'tutor' && phase === 'speaking' && i === turns.length - 1 ? (
                <Volume2 className="mb-1 h-3.5 w-3.5 animate-pulse text-emerald-500" aria-hidden />
              ) : null}
              {t.content}
            </div>
          </div>
        ))}
        {(phase === 'thinking' || phase === 'transcribing') && (
          <div className="flex items-center gap-2 text-[11.5px] text-muted-foreground">
            <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-500" aria-hidden />
            {phase === 'transcribing' ? 'Transcribing…' : 'Thinking…'}
          </div>
        )}
        {phase === 'recording' && (
          <div className="flex items-center justify-center gap-2 py-1">
            <span className="flex gap-1" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="w-1 rounded-full bg-rose-500"
                  style={{ height: '14px', animation: `vt-bar 0.9s ${i * 0.12}s ease-in-out infinite alternate` }}
                />
              ))}
            </span>
            <span className="text-[11.5px] font-medium text-rose-500">Listening…</span>
          </div>
        )}
      </div>

      {errorMsg && (
        <p role="alert" className="mx-3 mb-2 rounded-lg bg-rose-500/10 px-3 py-2 text-[11.5px] text-rose-600 dark:text-rose-400">
          {errorMsg}
        </p>
      )}
      {phaseLabel[phase] && phase !== 'recording' && (
        <p aria-live="polite" className="px-4 pb-1 text-center text-[11px] text-muted-foreground">
          {phaseLabel[phase]}
        </p>
      )}

      {/* input row */}
      <div className="space-y-2 border-t border-border px-3 py-3">
        <div className="flex items-end gap-2">
          {micSupported ? (
            <button
              onClick={phase === 'recording' ? stopRecording : startRecording}
              disabled={phase === 'thinking' || phase === 'transcribing' || phase === 'speaking'}
              aria-label={phase === 'recording' ? 'Stop recording and ask' : 'Record a spoken question'}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40 ${
                phase === 'recording'
                  ? 'bg-rose-500 text-white shadow-[0_0_0_6px_rgba(244,63,94,0.18)]'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              {phase === 'recording' ? <MicOff className="h-5 w-5" aria-hidden /> : <Mic className="h-5 w-5" aria-hidden />}
            </button>
          ) : (
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground" title="Microphone not supported — type instead">
              <MicOff className="h-5 w-5" aria-hidden />
            </span>
          )}
          <form
            className="flex min-w-0 flex-1 items-end gap-1.5"
            onSubmit={(e) => {
              e.preventDefault()
              const q = typed.trim()
              if (!q) return
              setTyped('')
              void send({ question: q })
            }}
          >
            <input
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              placeholder="…or type your question"
              aria-label="Type your question for the tutor"
              className="min-w-0 flex-1 rounded-xl border border-border bg-background px-3 py-2.5 text-[12.5px] text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <Button
              type="submit"
              size="icon"
              className="h-10 w-10 shrink-0 rounded-xl bg-emerald-600 hover:bg-emerald-700"
              aria-label="Send question"
              disabled={!typed.trim() || phase === 'thinking' || phase === 'transcribing' || phase === 'speaking'}
            >
              <Send className="h-4 w-4" aria-hidden />
            </Button>
          </form>
        </div>
        <label className="flex items-center justify-end gap-2 text-[11px] text-muted-foreground">
          Read answers aloud
          <Switch checked={speakReplies} onCheckedChange={(v) => { setSpeakReplies(v); if (!v) stopReplyAudio() }} aria-label="Speak tutor answers" />
        </label>
      </div>
    </div>
  )
}

/* tiny keyframes for the recording bars */
export const voiceTutorBarKeyframes = `
@keyframes vt-bar {
  from { transform: scaleY(0.35); }
  to   { transform: scaleY(1); }
}
`

/* small helper used by LessonView to assemble the reading queue */
export function buildVoiceBlocks(input: {
  intro?: string
  objectives?: string[]
  concepts?: { term: string; statement: string }[]
  examples?: { title: string; problem?: string; result?: string }[]
  keyTakeaways?: string[]
}): VoiceBlock[] {
  const out: VoiceBlock[] = []
  if (input.intro) out.push({ key: 'intro', label: 'Introduction', text: input.intro })
  if (input.concepts?.length) {
    /* lessons may repeat a term (e.g. a pitfall re-mentioning a concept) — index the key */
    input.concepts.forEach((c, i) =>
      out.push({ key: `c-${i}-${c.term}`, label: `Concept — ${c.term}`, text: `${c.term}. ${c.statement}` }),
    )
  }
  if (input.examples?.length) {
    input.examples.forEach((ex, i) => {
      const parts = [ex.title, ex.problem, ex.result ? `Result. ${ex.result}` : ''].filter(Boolean).join('. ')
      if (parts) out.push({ key: `ex-${i}`, label: `Worked example ${i + 1}`, text: parts })
    })
  }
  if (input.keyTakeaways?.length) {
    out.push({ key: 'takeaways', label: 'In summary', text: `In summary. ${input.keyTakeaways.join('. ')}` })
  }
  return out
}


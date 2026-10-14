'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Loader2, NotebookPen, Trash2 } from 'lucide-react'
import { useStudy } from '@/store/useStudy'
import { logActivity } from '@/lib/activity'

type SaveState = 'idle' | 'dirty' | 'saving' | 'saved' | 'error'

/**
 * Per-section personal notes with debounced autosave to SQLite.
 */
export function NotesPanel({ sectionId }: { sectionId: string }) {
  const deviceId = useStudy((s) => s.deviceId)
  const ensureDevice = useStudy((s) => s.ensureDevice)

  const [text, setText] = useState('')
  const [state, setState] = useState<SaveState>('idle')
  const [loaded, setLoaded] = useState(false)
  const did = useRef(deviceId ?? ensureDevice())

  // Load existing note (component remounts per section — initial state is the reset)
  useEffect(() => {
    let cancelled = false
    fetch(`/api/notes?deviceId=${encodeURIComponent(did.current)}&sectionKey=${encodeURIComponent(sectionId)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled) return
        setText(data?.note ?? '')
        setLoaded(true)
      })
      .catch(() => {
        if (!cancelled) setLoaded(true)
      })
    return () => {
      cancelled = true
    }
  }, [sectionId])

  // Debounced autosave whenever the note is dirty
  useEffect(() => {
    if (!loaded || state !== 'dirty') return
    const timer = setTimeout(async () => {
      setState('saving')
      try {
        const res = await fetch('/api/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ deviceId: did.current, sectionKey: sectionId, note: text }),
        })
        setState(res.ok ? 'saved' : 'error')
        if (res.ok && text.trim().length > 0) logActivity('note')
      } catch {
        setState('error')
      }
    }, 900)
    return () => clearTimeout(timer)
  }, [text, state, loaded, sectionId])

  const onChange = (v: string) => {
    setText(v)
    setState('dirty')
  }

  const clearNote = async () => {
    setText('')
    setState('idle')
    try {
      await fetch('/api/notes', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deviceId: did.current, sectionKey: sectionId }),
      })
    } catch {
      // best-effort
    }
  }

  return (
    <section className="mb-8 print:hidden">
      <div className="mb-3.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-teal-300/30 bg-teal-300/10 text-teal-300">
            <NotebookPen className="h-4 w-4" />
          </span>
          <h2 className="text-base font-bold tracking-tight">My notes</h2>
        </div>
        {/* save status */}
        <span
          className="inline-flex items-center gap-1.5 font-mono text-[11px] tabular-nums"
          aria-live="polite"
        >
          {state === 'saving' && (
            <>
              <Loader2 className="h-3 w-3 animate-spin text-amber-300" />
              <span className="text-amber-200">saving…</span>
            </>
          )}
          {state === 'saved' && (
            <>
              <Check className="h-3 w-3 text-emerald-300" />
              <span className="text-emerald-300/90">saved</span>
            </>
          )}
          {state === 'error' && <span className="text-rose-300">save failed — keep typing to retry</span>}
          {state === 'dirty' && <span className="text-muted-foreground">unsaved</span>}
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border/80 bg-card transition-colors focus-within:border-teal-300/40">
        <textarea
          value={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder={
            loaded
              ? 'Jot down questions, mnemonics, proofs to re-derive… saved automatically to your device.'
              : 'Loading your note…'
          }
          aria-label={`Personal notes for section ${sectionId}`}
          rows={5}
          maxLength={20000}
          className="w-full resize-y bg-transparent px-4 py-3.5 text-[14px] leading-relaxed text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
        />
        <div className="flex items-center justify-between border-t border-border/60 bg-muted/25 px-4 py-2">
          <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
            {text.length.toLocaleString()} chars
          </span>
          <div className="flex items-center gap-2">
            {text.trim() && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={clearNote}
                className="inline-flex items-center gap-1 rounded-md border border-rose-400/25 bg-rose-400/10 px-2 py-1 text-[11px] font-medium text-rose-300 transition-colors hover:bg-rose-400/20"
              >
                <Trash2 className="h-3 w-3" /> Clear
              </motion.button>
            )}
            <span className="hidden font-mono text-[10px] text-muted-foreground/60 sm:inline">
              markdown-style **bold** · autosaves
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

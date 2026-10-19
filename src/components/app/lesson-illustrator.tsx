'use client'

/**
 * AI Lesson Illustrator — every lesson can commission its own artwork.
 *
 * A quiet "Illustrate this lesson" affordance in the lesson header calls
 * /api/illustrate, which composes a style-rotation prompt from the lesson's
 * title and concepts, generates the image once (z-ai-web-dev-sdk, backend
 * only) and caches it in SQLite by section id — so the second visit is
 * instant and free. Regenerate walks a curated style rotation.
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Image as ImageIcon, Loader2, Palette, RefreshCw, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface IllustrationPayload {
  imageBase64: string
  prompt: string
  style: string
}

const STYLE_LABEL: Record<string, string> = {
  'vintage-textbook': 'Vintage textbook plate',
  blueprint: 'Technical schematic',
  'botanical-print': 'Botanical engraving',
  woodcut: 'Woodcut print',
  'field-notes': 'Field-journal watercolor',
  'geometric-poster': 'Geometric poster',
}

export function LessonIllustrator({ sectionId, title, concepts }: {
  sectionId: string
  title: string
  concepts: string[]
}) {
  const [art, setArt] = useState<IllustrationPayload | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [variant, setVariant] = useState(0)
  const [open, setOpen] = useState(false)
  const requested = useRef(false)

  /* hydrate a previously generated illustration (cheap GET) */
  useEffect(() => {
    let alive = true
    setArt(null)
    setError(null)
    setVariant(0)
    requested.current = false
    fetch(`/api/illustrate?sectionId=${encodeURIComponent(sectionId)}`)
      .then((r) => r.json())
      .then((d: { found?: boolean; imageBase64?: string; prompt?: string; style?: string }) => {
        if (alive && d.found && d.imageBase64) {
          setArt({ imageBase64: d.imageBase64, prompt: d.prompt ?? '', style: d.style ?? '' })
          setOpen(true)
        }
      })
      .catch(() => {
        /* offline / first visit — the affordance simply stays collapsed */
      })
    return () => {
      alive = false
    }
  }, [sectionId])

  const generate = useCallback(
    async (v: number) => {
      setBusy(true)
      setError(null)
      try {
        const res = await fetch('/api/illustrate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sectionId, title, concepts, variant: v }),
        })
        const data = (await res.json()) as IllustrationPayload & { error?: string }
        if (!res.ok || !data.imageBase64) throw new Error(data.error || `illustrate ${res.status}`)
        setArt({ imageBase64: data.imageBase64, prompt: data.prompt, style: data.style })
        setVariant(v)
        setOpen(true)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'The illustrator is resting — try again in a moment.')
      } finally {
        setBusy(false)
      }
    },
    [sectionId, title, concepts],
  )

  return (
    <div className="print:hidden">
      {/* collapsed affordance */}
      <button
        onClick={() => {
          const nextOpen = !open
          setOpen(nextOpen)
          if (nextOpen && !art && !busy && !requested.current) {
            requested.current = true
            void generate(0)
          }
        }}
        className="group inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-[12px] font-semibold text-amber-700 transition-colors hover:bg-amber-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 dark:text-amber-300"
        aria-expanded={open}
        aria-label={art ? 'Show the AI illustration for this lesson' : 'Illustrate this lesson with AI'}
      >
        {busy ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
        ) : (
          <Palette className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" aria-hidden />
        )}
        {busy ? 'Painting…' : art ? 'Lesson artwork' : 'Illustrate this lesson'}
      </button>

      <AnimatePresence>
        {open && (
          <motion.figure
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mt-3 overflow-hidden rounded-xl border border-book-rule bg-card"
            aria-label="AI-generated lesson illustration"
          >
            {busy && !art ? (
              <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-amber-500/5 via-transparent to-rose-500/5 text-center">
                <Sparkles className="h-6 w-6 animate-pulse text-amber-500" aria-hidden />
                <p className="max-w-[38ch] px-6 font-serif text-[14px] italic text-book-soft">
                  The illustrator is reading this lesson and composing a plate for it…
                </p>
              </div>
            ) : art ? (
              <>
                <img
                  src={`data:image/png;base64,${art.imageBase64}`}
                  alt={`AI illustration for the lesson ${title}`}
                  className={busy ? 'w-full opacity-40 transition-opacity' : 'w-full transition-opacity'}
                  loading="lazy"
                />
                <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-4 py-2.5">
                  <span className="flex items-center gap-1.5 text-[11.5px] text-muted-foreground">
                    <ImageIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    <span className="italic">{STYLE_LABEL[art.style] ?? art.style} · commissioned for this lesson</span>
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 gap-1.5 px-2.5 text-[11.5px] text-muted-foreground"
                    disabled={busy}
                    onClick={() => void generate(variant + 1)}
                    aria-label="Regenerate the illustration in a new style"
                  >
                    {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden /> : <RefreshCw className="h-3.5 w-3.5" aria-hidden />}
                    Another style
                  </Button>
                </figcaption>
              </>
            ) : error ? (
              <div className="flex min-h-[140px] flex-col items-center justify-center gap-2 px-6 text-center">
                <p role="alert" className="text-[12.5px] text-rose-600 dark:text-rose-400">
                  {error}
                </p>
                <Button variant="outline" size="sm" onClick={() => void generate(0)}>
                  Try again
                </Button>
              </div>
            ) : null}
          </motion.figure>
        )}
      </AnimatePresence>
    </div>
  )
}

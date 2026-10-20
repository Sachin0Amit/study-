'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUp, History } from 'lucide-react'

/** Emerald reading-progress bar that tracks page scroll (shown on long pages) */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 200 ? Math.min(100, (el.scrollTop / total) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (progress <= 0) return null
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 print:hidden" aria-hidden>
      <div
        className="h-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

/** Floating scroll-to-top button, appears after scrolling past 60% of a viewport */
export function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="sv-scroll-top-btn fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/30 bg-card/90 text-emerald-300 shadow-[0_8px_30px_-6px_rgba(52,211,153,0.4)] backdrop-blur-md transition-[background-color,border-color,color,bottom] duration-200 hover:bg-emerald-400/15 print:hidden"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* =====================================================================
   round 6-c: per-section scroll restore ("was here" — resume reading)
   Positions persist in localStorage as { y, at } under sv-scroll::<sectionId>.
   Coexists with ReadingProgress/ScrollTopButton: all listeners passive,
   saves debounced, restore is a one-shot (never fights the progress bar or
   the store's navigate()-resets-scroll-to-top behavior).
   ===================================================================== */

/** localStorage key holding the last reading offset for a lesson section */
const scrollKey = (sectionId: string) => `sv-scroll::${sectionId}`

/** Offsets below this are "page start" — never stored, so the SPA's
 *  navigate()-scrolls-to-top can never clobber a real reading position. */
const MIN_SAVE_Y = 260

type SavedPos = { y: number; at: number }

function readSavedY(key: string): number {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return 0
    const parsed = JSON.parse(raw) as Partial<SavedPos>
    if (typeof parsed.y !== 'number' || !Number.isFinite(parsed.y)) return 0
    return parsed.y < 0 ? 0 : Math.floor(parsed.y)
  } catch {
    return 0
  }
}

function saveY(key: string, y: number) {
  if (y < MIN_SAVE_Y) return // "at the top" is not a position worth resuming
  try {
    localStorage.setItem(key, JSON.stringify({ y: Math.floor(y), at: Date.now() } satisfies SavedPos))
  } catch {
    /* storage unavailable/full — position simply isn't persisted */
  }
}

/**
 * Per-lesson scroll restore:
 * - on mount, re-applies a saved offset 1–2 frames after paint (lesson DOM is
 *   static, so layout is already final);
 * - while reading, persists the offset (debounced 300 ms, skipped near the top);
 * - exposes "was here" pill state: target, visibility, and whether the reader
 *   is currently below the saved spot (label toggle).
 */
export function useLessonScrollRestore(sectionId: string) {
  const [target, setTarget] = useState(0)
  const [visible, setVisible] = useState(false)
  const [below, setBelow] = useState(false)
  const targetRef = useRef(0)

  useEffect(() => {
    const key = scrollKey(sectionId)
    const saved = readSavedY(key)
    targetRef.current = saved

    // publish pill state one frame after mount (post-paint — avoids cascading
    // synchronous renders inside the effect), then re-apply the saved offset
    // one frame later; lesson DOM is static, so layout is already final.
    let raf2 = 0
    const raf1 = requestAnimationFrame(() => {
      setTarget(saved)
      setVisible(saved >= MIN_SAVE_Y)
      setBelow(false)
      if (saved >= MIN_SAVE_Y) {
        raf2 = requestAnimationFrame(() => {
          raf2 = 0
          // 'instant' overrides the app-wide html{scroll-behavior:smooth} so the
          // restore is a single jump — intermediate offsets would dismiss the pill
          window.scrollTo({ top: saved, behavior: 'instant' })
        })
      }
    })

    let timer: ReturnType<typeof setTimeout> | undefined
    const onScroll = () => {
      const y = window.scrollY
      const t = targetRef.current
      if (t >= MIN_SAVE_Y) {
        // the pill is only meaningful near the saved spot — drop it well past it
        if (Math.abs(y - t) > 600) setVisible(false)
        else setBelow(y > t + 120)
      }
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => saveY(key, y), 300)
    }
    const flush = () => {
      if (timer) {
        clearTimeout(timer)
        timer = undefined
      }
      saveY(key, window.scrollY)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pagehide', flush)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pagehide', flush)
      flush()
      cancelAnimationFrame(raf1)
      if (raf2) cancelAnimationFrame(raf2)
    }
  }, [sectionId])

  /** Jump (smooth unless reduced motion) to the saved offset; dismisses the pill. */
  const jump = useCallback(() => {
    const t = targetRef.current
    if (t >= MIN_SAVE_Y) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top: t, behavior: reduce ? 'auto' : 'smooth' })
    }
    setVisible(false) // auto-dismiss after first use
  }, [])

  return { target, visible, below, jump }
}

/** "Was here" pill — fixed bottom-center; jumps back to the last reading spot */
export function ResumePill({
  target,
  visible,
  below,
  onJump,
}: {
  target: number
  visible: boolean
  below: boolean
  onJump: () => void
}) {
  return (
    <AnimatePresence>
      {visible && target > 0 && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 14, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.95 }}
          transition={{ duration: 0.22 }}
          onClick={onJump}
          className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-amber-300/30 bg-card/90 px-4 py-2 text-xs font-semibold text-amber-700 shadow-lg backdrop-blur-md transition-colors duration-200 hover:border-amber-400/50 hover:bg-amber-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 dark:text-amber-200 print:hidden"
          aria-label={
            below ? 'Jump back up to your last reading position' : 'Resume reading at your last reading position'
          }
        >
          <History className="h-3.5 w-3.5 text-amber-500 dark:text-amber-300" aria-hidden />
          {below ? 'Jump back up' : 'Resume reading'}
          {below ? (
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          ) : (
            <ArrowDown className="h-3.5 w-3.5" aria-hidden />
          )}
        </motion.button>
      )}
    </AnimatePresence>
  )
}

'use client'

import { useCallback, useEffect, useState } from 'react'
import { CloudOff, RefreshCw, Wifi, WifiOff } from 'lucide-react'
import { toast } from 'sonner'
import { useStudy } from '@/store/useStudy'

const RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const LS_KEY = 'sv-offline-mode'

/**
 * X9 — Offline PWA layer.
 * The service worker registers ONLY when the learner opts in (keeps the dev
 * server honest). While enabled: lesson APIs and statics are cached, eligible
 * POSTs (progress / quiz / activity / notes / twin) queue in IndexedDB and
 * replay on reconnect. A tiny status pill shows cache/offline state.
 */
export function OfflineProvider() {
  const [enabled, setEnabled] = useState(false)
  const [online, setOnline] = useState(true)
  const [pending, setPending] = useState(0)
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const deviceId = ensureDevice()

  useEffect(() => {
    try {
      // storage is an external system — read it once, outside React's render
      const stored = localStorage.getItem(LS_KEY)
      const wasOnline = navigator.onLine
      queueMicrotask(() => {
        setEnabled(stored === '1')
        setOnline(wasOnline)
      })
    } catch {
      /* storage unavailable */
    }
    const up = () => {
      setOnline(true)
      // tell the SW to flush its mutation queue
      if (navigator.serviceWorker?.controller) {
        navigator.serviceWorker.controller.postMessage('sv-flush-queue')
      }
      toast.success('Back online — queued study actions are syncing', {
        icon: <Wifi className="h-4 w-4 text-emerald-300" />,
      })
    }
    const down = () => {
      setOnline(false)
      toast.info('Offline — StudyVerse keeps working, actions will queue', {
        icon: <WifiOff className="h-4 w-4 text-amber-300" />,
      })
    }
    window.addEventListener('online', up)
    window.addEventListener('offline', down)
    return () => {
      window.removeEventListener('online', up)
      window.removeEventListener('offline', down)
    }
  }, [])

  // register/unregister the SW when the toggle flips
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return
    if (enabled) {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then(() => {
          // warm the caches with the user's live endpoints
          const urls = [
            `/api/progress?deviceId=${encodeURIComponent(deviceId)}`,
            `/api/flashcards?deviceId=${encodeURIComponent(deviceId)}`,
            `/api/notes?deviceId=${encodeURIComponent(deviceId)}`,
          ]
          for (const u of urls) void fetch(u).catch(() => {})
        })
        .catch(() => {
          toast.error('Offline mode could not start in this browser.')
          setEnabled(false)
        })
    } else {
      void navigator.serviceWorker.getRegistrations().then((regs) => {
        for (const r of regs) void r.unregister()
      })
    }
  }, [enabled, deviceId])

  // count queued mutations while offline (IndexedDB peek)
  const countQueue = useCallback(async () => {
    if (!enabled) return
    try {
      const db = await new Promise((resolve, reject) => {
        const req = indexedDB.open('sv-v1-queue', 1)
        req.onupgradeneeded = () => {
          if (!req.result.objectStoreNames.contains('mutations')) {
            req.result.createObjectStore('mutations', { autoIncrement: true })
          }
        }
        req.onsuccess = () => resolve(req.result)
        req.onerror = () => reject(req.error)
      })
      await new Promise((resolve) => {
        const tx = (db as IDBDatabase).transaction('mutations', 'readonly')
        const req = tx.objectStore('mutations').count()
        req.onsuccess = () => {
          setPending(req.result ?? 0)
          resolve()
        }
        req.onerror = () => resolve()
      })
      ;(db as IDBDatabase).close()
    } catch {
      /* queue db may not exist yet */
    }
  }, [enabled])

  useEffect(() => {
    const t = setInterval(countQueue, 4000)
    void countQueue()
    return () => clearInterval(t)
  }, [countQueue])

  const toggle = () => {
    const next = !enabled
    setEnabled(next)
    try {
      localStorage.setItem(LS_KEY, next ? '1' : '0')
    } catch {
      /* storage unavailable */
    }
    if (next) {
      toast.success('Offline mode on — lessons you visit are cached for no-signal study', {
        icon: <CloudOff className="h-4 w-4 text-emerald-300" />,
      })
    } else {
      toast.info('Offline mode off — caches cleared on next visit')
    }
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={enabled}
      title={
        enabled
          ? 'Offline mode ON — lessons you open are cached; study actions queue and sync when back online'
          : 'Offline mode OFF — click to cache lessons for no-signal study'
      }
      aria-label="Toggle offline mode"
      className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-2.5 text-[12px] font-bold transition-all ${RING} ${
        enabled
          ? online
            ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-600 dark:text-emerald-200'
            : 'border-amber-400/50 bg-amber-400/15 text-amber-600 dark:text-amber-200'
          : 'border-border/70 bg-card/60 text-muted-foreground hover:text-foreground'
      }`}
    >
      {enabled ? (
        online ? (
          <Wifi className="h-3.5 w-3.5" aria-hidden />
        ) : (
          <WifiOff className="h-3.5 w-3.5 animate-pulse" aria-hidden />
        )
      ) : (
        <CloudOff className="h-3.5 w-3.5" aria-hidden />
      )}
      <span className="hidden xl:inline">{enabled ? (online ? 'Offline ready' : 'Offline') : 'Offline'}</span>
      {enabled && !online && pending > 0 && (
        <span className="ml-0.5 inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-1.5 font-mono text-[10px]">
          <RefreshCw className="h-2.5 w-2.5 animate-spin" aria-hidden />
          {pending}
        </span>
      )}
    </button>
  )
}

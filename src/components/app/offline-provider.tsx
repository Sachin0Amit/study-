'use client'

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { CloudOff, Download, RefreshCw, Wifi, WifiOff } from 'lucide-react'
import { toast } from 'sonner'
import { useStudy } from '@/store/useStudy'
import { DownloadManager } from './download-manager'

const RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const LS_KEY = 'sv-offline-mode'

// --- module-level external stores (SSR-safe via server snapshots) ----------
const offlineListeners = new Set<() => void>()
function readOfflinePref(): boolean {
  try {
    return typeof localStorage !== 'undefined' && localStorage.getItem(LS_KEY) === '1'
  } catch {
    return false
  }
}
function writeOfflinePref(v: boolean) {
  try {
    localStorage.setItem(LS_KEY, v ? '1' : '0')
  } catch {
    /* storage unavailable */
  }
  for (const l of offlineListeners) l()
}
function subscribeOfflinePref(cb: () => void) {
  offlineListeners.add(cb)
  window.addEventListener('storage', cb) // cross-tab sync
  return () => {
    offlineListeners.delete(cb)
    window.removeEventListener('storage', cb)
  }
}

function subscribeNetwork(cb: () => void) {
  window.addEventListener('online', cb)
  window.addEventListener('offline', cb)
  return () => {
    window.removeEventListener('online', cb)
    window.removeEventListener('offline', cb)
  }
}

/**
 * X9 — Offline PWA layer.
 * The service worker registers ONLY when the learner opts in (keeps the dev
 * server honest). While enabled: lesson APIs and statics are cached, eligible
 * POSTs (progress / quiz / activity / notes / twin) queue in IndexedDB and
 * replay on reconnect. A tiny status pill shows cache/offline state.
 */
export function OfflineProvider() {
  const enabled = useSyncExternalStore(subscribeOfflinePref, readOfflinePref, () => false)
  const online = useSyncExternalStore(subscribeNetwork, () => navigator.onLine, () => true)
  const [pending, setPending] = useState(0)
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const deviceId = ensureDevice()

  // toast + SW flush on network transitions (no setState here — lint-safe)
  const prevOnline = useRef(true)
  useEffect(() => {
    if (prevOnline.current === online) return
    prevOnline.current = online
    if (online) {
      // tell the SW to flush its mutation queue
      navigator.serviceWorker?.controller?.postMessage('sv-flush-queue')
      toast.success('Back online — queued study actions are syncing', {
        icon: <Wifi className="h-4 w-4 text-emerald-300" />,
      })
    } else {
      toast.info('Offline — StudyVerse keeps working, actions will queue', {
        icon: <WifiOff className="h-4 w-4 text-amber-300" />,
      })
    }
  }, [online])

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
          writeOfflinePref(false)
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
      const db = await new Promise<IDBDatabase>((resolve, reject) => {
        const req = indexedDB.open('sv-v1-queue', 1)
        req.onupgradeneeded = () => {
          if (!req.result.objectStoreNames.contains('mutations')) {
            req.result.createObjectStore('mutations', { autoIncrement: true })
          }
        }
        req.onsuccess = () => resolve(req.result)
        req.onerror = () => reject(req.error)
      })
      await new Promise<void>((resolve) => {
        const tx = db.transaction('mutations', 'readonly')
        const req = tx.objectStore('mutations').count()
        req.onsuccess = () => {
          setPending(req.result ?? 0)
          resolve()
        }
        req.onerror = () => resolve()
      })
      db.close()
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
    writeOfflinePref(next)
    if (next) {
      toast.success('Offline mode on — lessons you visit are cached for no-signal study', {
        icon: <CloudOff className="h-4 w-4 text-emerald-300" />,
      })
    } else {
      toast.info('Offline mode off — caches cleared on next visit')
    }
  }

  // the pill is the entry point to the Download Manager (the on/off switch lives inside)
  const [managerOpen, setManagerOpen] = useState(false)

  // the command palette can pop the Download Manager via 'sv:open-download-manager'
  useEffect(() => {
    const open = () => setManagerOpen(true)
    window.addEventListener('sv:open-download-manager', open)
    return () => window.removeEventListener('sv:open-download-manager', open)
  }, [])

  return (
    <>
      <button
        onClick={() => setManagerOpen(true)}
        aria-haspopup="dialog"
        title="Download Manager — pin books for offline study, toggle offline mode"
        aria-label="Open download manager"
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
          <Download className="h-3.5 w-3.5" aria-hidden />
        )}
        <span className="hidden xl:inline">{enabled ? (online ? 'Offline ready' : 'Offline') : 'Downloads'}</span>
        {enabled && !online && pending > 0 && (
          <span className="ml-0.5 inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-1.5 font-mono text-[10px]">
            <RefreshCw className="h-2.5 w-2.5 animate-spin" aria-hidden />
            {pending}
          </span>
        )}
      </button>
      <DownloadManager
        open={managerOpen}
        onOpenChange={setManagerOpen}
        offlineEnabled={enabled}
        onToggleOffline={toggle}
      />
    </>
  )
}

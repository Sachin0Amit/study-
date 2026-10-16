'use client'

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import {
  AlertTriangle,
  BookDown,
  CheckCircle2,
  ChevronDown,
  CloudOff,
  HardDrive,
  Loader2,
  RotateCw,
  ShieldAlert,
  ShieldCheck,
  Trash2,
  X,
} from 'lucide-react'
import { toast } from 'sonner'
import {
  LIBRARY_BOOKS,
  LIBRARY_SUBJECTS,
} from '@/data/library'
import {
  cancelPin,
  estimateBookBytes,
  estimateStorage,
  formatBytes,
  getActiveDownloads,
  getOfflineCacheVersion,
  isStoragePersisted,
  listPinned,
  pinBook,
  requestPersistentStorage,
  subscribeOfflineCache,
  unpinBook,
  wouldExceedQuota,
} from '@/lib/offline-cache'
import type { PinnedBookManifest, StorageEstimateInfo } from '@/lib/offline-cache'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'

const RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

/* ------------------------------------------------------------------ */
/*  network flag (local copy — the provider keeps its own store)       */
/* ------------------------------------------------------------------ */
function subscribeNetwork(cb: () => void) {
  window.addEventListener('online', cb)
  window.addEventListener('offline', cb)
  return () => {
    window.removeEventListener('online', cb)
    window.removeEventListener('offline', cb)
  }
}

/* ------------------------------------------------------------------ */
/*  Download Manager — pin books for full offline study                */
/* ------------------------------------------------------------------ */
export function DownloadManager({
  open,
  onOpenChange,
  offlineEnabled,
  onToggleOffline,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  offlineEnabled: boolean
  onToggleOffline: () => void
}) {
  const cacheVersion = useSyncExternalStore(subscribeOfflineCache, getOfflineCacheVersion, () => 0)
  const online = useSyncExternalStore(subscribeNetwork, () => navigator.onLine, () => true)

  const [pinned, setPinned] = useState<PinnedBookManifest[]>([])
  const [storage, setStorage] = useState<StorageEstimateInfo | null>(null)
  const [persisted, setPersisted] = useState<boolean | null>(null)

  const refresh = useCallback(async () => {
    const [p, s, persistedFlag] = await Promise.all([listPinned(), estimateStorage(), isStoragePersisted()])
    setPinned(p)
    setStorage(s)
    setPersisted(persistedFlag)
  }, [])

  useEffect(() => {
    if (!open) return
    void refresh()
  }, [open, cacheVersion, refresh])

  const downloads = useMemo(() => getActiveDownloads(), [cacheVersion])
  const pinnedIds = useMemo(() => new Set(pinned.map((m) => m.bookId)), [pinned])

  /* ---------- storage bar ---------- */
  const usedPct =
    storage && storage.quota > 0 && storage.usage >= 0 ? Math.min(100, (storage.usage / storage.quota) * 100) : null
  const over80 = usedPct !== null && usedPct > 80

  /* ---------- persist button ---------- */
  const [persistBusy, setPersistBusy] = useState(false)
  const onProtect = async () => {
    setPersistBusy(true)
    try {
      const granted = await requestPersistentStorage()
      setPersisted(granted)
      if (granted) {
        toast.success('Offline data is protected from automatic eviction', {
          icon: <ShieldCheck className="h-4 w-4 text-emerald-300" />,
        })
      } else {
        toast.info('This browser declined persistent storage — downloads stay, but may be evicted under disk pressure')
      }
    } finally {
      setPersistBusy(false)
    }
  }

  /* ---------- unpin (two-step) ---------- */
  const [armedUnpin, setArmedUnpin] = useState<string | null>(null)
  useEffect(() => {
    if (!armedUnpin) return
    const t = setTimeout(() => setArmedUnpin(null), 3000)
    return () => clearTimeout(t)
  }, [armedUnpin])

  const onUnpin = (m: PinnedBookManifest) => {
    if (armedUnpin !== m.bookId) {
      setArmedUnpin(m.bookId)
      return
    }
    setArmedUnpin(null)
    void unpinBook(m.bookId)
      .then(() => {
        toast.success(`Removed "${m.title}" from offline storage`, {
          description: `${formatBytes(m.bytes)} freed on this device`,
        })
      })
      .catch(() => toast.error('Could not remove this book — try again'))
  }

  /* ---------- pin browser ---------- */
  const [openSubject, setOpenSubject] = useState<string | null>(null)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [selectionBytes, setSelectionBytes] = useState(0)
  const [selectionOverQuota, setSelectionOverQuota] = useState(false)

  useEffect(() => {
    let alive = true
    void (async () => {
      let bytes = 0
      let over = false
      for (const bookId of selected) {
        bytes += await estimateBookBytes(bookId)
        over = over || (await wouldExceedQuota(bookId))
      }
      if (!alive) return
      setSelectionBytes(bytes)
      setSelectionOverQuota(over)
    })()
    return () => {
      alive = false
    }
  }, [selected, cacheVersion])

  const toggleSelected = (bookId: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(bookId)) next.delete(bookId)
      else next.add(bookId)
      return next
    })
  }

  const onPinSelected = () => {
    const bookIds = Array.from(selected)
    if (bookIds.length === 0) return
    if (!online) {
      toast.error('You are offline — connect to the internet to pin books')
      return
    }
    setSelected(new Set())
    for (const bookId of bookIds) {
      const title = LIBRARY_BOOKS.find((b) => b.id === bookId)?.title ?? 'Book'
      void pinBook(bookId)
        .then((outcome) => {
          if (!outcome) return // already downloading
          if (outcome.status === 'complete') {
            toast.success(`"${title}" is available offline`, {
              description: `${outcome.stored} sections · ${formatBytes(outcome.bytes)}`,
              icon: <CheckCircle2 className="h-4 w-4 text-emerald-300" />,
            })
          } else if (outcome.status === 'partial') {
            toast.warning(`"${title}" pinned partially — ${outcome.stored} sections stored`, {
              description: 'Re-pin it later to resume the missing sections',
            })
          } else if (outcome.status === 'cancelled') {
            toast.info(`Download of "${title}" cancelled — partial copy kept`)
          } else if (outcome.status === 'error') {
            toast.error(`Could not pin "${title}"`, {
              description: `${outcome.error} — partial copies are kept, re-pin to resume`,
            })
          }
        })
        .catch(() => toast.error(`Could not pin "${title}" — check your connection`))
    }
  }

  const onResume = (m: PinnedBookManifest) => {
    if (!online) {
      toast.error('You are offline — connect to the internet to resume downloads')
      return
    }
    void pinBook(m.bookId)
      .then((outcome) => {
        if (!outcome) return
        if (outcome.status === 'complete') {
          toast.success(`"${m.title}" is fully available offline`, {
            description: `${outcome.stored} sections · ${formatBytes(outcome.bytes)}`,
            icon: <CheckCircle2 className="h-4 w-4 text-emerald-300" />,
          })
        } else {
          toast.warning(`"${m.title}" still partial — ${outcome.stored}/${m.totalSections} sections stored`)
        }
      })
      .catch(() => toast.error('Resume failed — check your connection'))
  }

  /* ---------- derived ---------- */
  const totalPinnedSections = pinned.reduce((a, m) => a + m.sectionCount, 0)
  const subjectsWithBooks = useMemo(
    () =>
      LIBRARY_SUBJECTS.map((s) => ({
        subject: s,
        books: LIBRARY_BOOKS.filter((b) => b.subjectId === s.id),
      })).filter((g) => g.books.length > 0),
    []
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <HardDrive className="h-5 w-5 text-emerald-500 dark:text-emerald-300" aria-hidden />
            Download Manager
          </DialogTitle>
          <DialogDescription>
            Pin books for full offline study — lessons, worked examples and quizzes stay on this device.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          {/* ---------- offline mode switch (moved off the header pill) ---------- */}
          <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-muted/30 px-4 py-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold">Offline mode</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                Caches pages you visit, queues study actions while offline and syncs them when you reconnect.
              </p>
            </div>
            <Switch
              checked={offlineEnabled}
              onCheckedChange={onToggleOffline}
              aria-label="Toggle offline mode"
              className={`${RING} shrink-0`}
            />
          </div>

          {/* ---------- storage estimate ---------- */}
          <section aria-label="Storage" className="rounded-xl border border-border bg-card/60 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold">Device storage</p>
              <p className="font-mono text-xs text-muted-foreground">
                {storage && storage.usage >= 0 && storage.quota > 0
                  ? `${formatBytes(storage.usage)} of ${formatBytes(storage.quota)} used`
                  : 'Usage unknown in this browser'}
              </p>
            </div>
            {usedPct !== null ? (
              <div className="mt-2.5">
                <Progress
                  value={usedPct}
                  aria-label={`${Math.round(usedPct)}% of storage quota used`}
                  className={`h-2.5 ${over80 ? '[&>[data-slot=progress-indicator]]:bg-amber-500' : ''}`}
                />
                <div className="mt-1.5 flex items-center justify-between gap-2 text-[11px] text-muted-foreground">
                  <span>
                    Pinned books: {formatBytes(storage?.pinnedBytes ?? 0)}
                    {pinned.length > 0 && ` · ${pinned.length} ${pinned.length === 1 ? 'book' : 'books'} · ${totalPinnedSections} sections`}
                  </span>
                  <span className={over80 ? 'font-semibold text-amber-600 dark:text-amber-300' : ''}>
                    {Math.round(usedPct)}%
                  </span>
                </div>
              </div>
            ) : (
              <p className="mt-2 text-[11px] text-muted-foreground">
                Pinned books: {formatBytes(storage?.pinnedBytes ?? 0)}
                {pinned.length > 0 && ` · ${pinned.length} ${pinned.length === 1 ? 'book' : 'books'} · ${totalPinnedSections} sections`}
              </p>
            )}

            {/* eviction protection */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border/70 pt-3">
              <p className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
                {persisted === true ? (
                  <>
                    <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-300" aria-hidden />
                    <span className="text-emerald-600 dark:text-emerald-300">Protected — this browser will not auto-evict your downloads</span>
                  </>
                ) : persisted === false ? (
                  <>
                    <ShieldAlert className="h-4 w-4 shrink-0 text-amber-500" aria-hidden />
                    <span>Not protected — the browser may evict offline data under disk pressure</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                    <span>Protection state unknown in this browser</span>
                  </>
                )}
              </p>
              {persisted !== true && (
                <button
                  onClick={onProtect}
                  disabled={persistBusy}
                  className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3 text-xs font-semibold transition-colors hover:border-emerald-400/40 hover:text-emerald-600 disabled:opacity-60 dark:hover:text-emerald-300 ${RING}`}
                >
                  {persistBusy ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
                  ) : (
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                  )}
                  Protect offline data
                </button>
              )}
            </div>
          </section>

          {/* ---------- downloads in progress ---------- */}
          {downloads.length > 0 && (
            <section aria-label="Downloads in progress" className="space-y-3">
              <p className="text-sm font-semibold">Downloading</p>
              {downloads.map((d) => (
                <div key={d.bookId} className="rounded-xl border border-emerald-400/30 bg-emerald-400/[0.06] p-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="min-w-0 truncate text-sm font-semibold">{d.title}</p>
                    <button
                      onClick={() => cancelPin(d.bookId)}
                      aria-label={`Cancel downloading ${d.title}`}
                      className={`inline-flex size-11 -m-2 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground ${RING}`}
                    >
                      <X className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                  <Progress
                    value={d.total > 0 ? (d.done / d.total) * 100 : 0}
                    aria-label={`${d.done} of ${d.total} sections downloaded`}
                    className="mt-2 h-2"
                  />
                  <p className="mt-1.5 font-mono text-[11px] text-muted-foreground">
                    {d.done}/{d.total} sections · {formatBytes(d.bytes)}
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* ---------- pinned books ---------- */}
          <section aria-label="Pinned books" className="space-y-3">
            <p className="text-sm font-semibold">On this device</p>
            {pinned.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border px-4 py-6 text-center text-xs text-muted-foreground">
                No books pinned yet — pick one below to study without internet.
              </p>
            ) : (
              <ul className="space-y-2">
                {pinned.map((m) => (
                  <li
                    key={m.bookId}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-3.5 py-2.5"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10">
                      <BookDown className="h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">{m.title}</p>
                      <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-muted-foreground">
                        <span>{m.subjectName}</span>
                        <span aria-hidden>·</span>
                        <span>
                          {m.sectionCount}/{m.totalSections} sections
                        </span>
                        <span aria-hidden>·</span>
                        <span>{formatBytes(m.bytes)}</span>
                        <span aria-hidden>·</span>
                        <span>{new Date(m.pinnedAt).toLocaleDateString()}</span>
                      </p>
                    </div>
                    {m.status === 'partial' && (
                      <button
                        onClick={() => onResume(m)}
                        disabled={!online}
                        title={online ? 'Finish the missing sections' : 'Go online to resume'}
                        className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-amber-400/40 bg-amber-400/10 px-2.5 text-[11px] font-bold text-amber-700 transition-colors hover:bg-amber-400/20 disabled:opacity-50 dark:text-amber-200 ${RING}`}
                      >
                        <RotateCw className="h-3.5 w-3.5" aria-hidden />
                        Resume
                      </button>
                    )}
                    <button
                      onClick={() => onUnpin(m)}
                      aria-label={
                        armedUnpin === m.bookId ? `Confirm removing ${m.title} from offline storage` : `Remove ${m.title} from offline storage`
                      }
                      className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full transition-colors ${
                        armedUnpin === m.bookId
                          ? 'bg-red-500/15 text-red-600 dark:text-red-300'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      } ${RING}`}
                    >
                      {armedUnpin === m.bookId ? (
                        <span className="text-[10px] font-bold leading-tight">Tap again</span>
                      ) : (
                        <Trash2 className="h-4 w-4" aria-hidden />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* ---------- pin a book browser ---------- */}
          <section aria-label="Pin a book" className="rounded-xl border border-border bg-card/60 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold">Pin a book</p>
              {!online && (
                <p className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-600 dark:text-amber-300">
                  <CloudOff className="h-3.5 w-3.5" aria-hidden /> Go online to pin books
                </p>
              )}
            </div>

            <div className="mt-3 max-h-64 space-y-1.5 overflow-y-auto pr-1">
              {subjectsWithBooks.map(({ subject, books }) => {
                const expanded = openSubject === subject.id
                return (
                  <div key={subject.id} className="rounded-lg border border-border/70">
                    <button
                      onClick={() => setOpenSubject(expanded ? null : subject.id)}
                      aria-expanded={expanded}
                      className={`flex min-h-11 w-full items-center gap-2.5 rounded-lg px-3 py-1.5 text-left transition-colors hover:bg-muted/50 ${RING}`}
                    >
                      <span aria-hidden className="inline-block size-2.5 shrink-0 rounded-full" style={{ background: subject.accent }} />
                      <span className="min-w-0 flex-1 truncate text-[13px] font-semibold">{subject.name}</span>
                      <span className="shrink-0 font-mono text-[10px] text-muted-foreground">{books.length} books</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                        aria-hidden
                      />
                    </button>
                    {expanded && (
                      <ul className="space-y-0.5 border-t border-border/70 p-1.5">
                        {books.map((b) => {
                          const isPinned = pinnedIds.has(b.id)
                          const isSelected = selected.has(b.id)
                          return (
                            <li key={b.id}>
                              <label
                                className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-2.5 py-1 transition-colors hover:bg-muted/50 ${
                                  isPinned ? 'opacity-60' : ''
                                }`}
                              >
                                <Checkbox
                                  checked={isPinned || isSelected}
                                  disabled={isPinned}
                                  onCheckedChange={() => toggleSelected(b.id)}
                                  aria-label={isPinned ? `${b.title} — already pinned` : `Select ${b.title} for offline download`}
                                />
                                <span className="min-w-0 flex-1">
                                  <span className="block truncate text-[13px] font-medium">{b.title}</span>
                                  <span className="block truncate text-[11px] text-muted-foreground">{b.author}</span>
                                </span>
                                {isPinned && (
                                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">
                                    Pinned
                                  </span>
                                )}
                              </label>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>

            {selectionOverQuota && selected.size > 0 && (
              <p
                className="mt-3 flex items-start gap-2 rounded-lg border border-amber-400/40 bg-amber-400/10 px-3 py-2 text-[11px] font-medium text-amber-700 dark:text-amber-200"
                role="status"
              >
                <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                This selection would push this device past 80% of its storage quota — downloads may fail part-way.
              </p>
            )}

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border/70 pt-3">
              <p className="font-mono text-[11px] text-muted-foreground">
                {selected.size === 0
                  ? 'No books selected'
                  : `${selected.size} ${selected.size === 1 ? 'book' : 'books'} · ~${formatBytes(selectionBytes)}`}
              </p>
              <button
                onClick={onPinSelected}
                disabled={selected.size === 0 || !online}
                className={`inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-500 px-4 text-[13px] font-bold text-emerald-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50 ${RING}`}
              >
                <BookDown className="h-4 w-4" aria-hidden />
                Download {selected.size > 0 ? `${selected.size} ${selected.size === 1 ? 'book' : 'books'}` : 'books'}
              </button>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

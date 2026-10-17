/**
 * X9 Pro — Offline content cache.
 *
 * Client-side IndexedDB store that pins whole books for full offline study.
 * The pin flow fetches the same JSON `/api/section/[sectionId]` returns
 * (section metadata + chapter + siblings + the authored lesson content) and
 * stores it in the `pinned-content` store keyed by sectionId, plus a
 * `manifest` store keyed by bookId with book/chapter metadata, sizes and
 * timestamps.
 *
 * Everything is reactive through a tiny module-level event store:
 * `subscribeOfflineCache` + `getOfflineCacheVersion` plug straight into
 * `useSyncExternalStore`, and `onOfflineCacheEvent` gives typed download
 * progress events for any UI that wants them.
 *
 * The layer is deliberately independent of the service worker: pinning uses
 * plain network fetches, storage lives in IndexedDB (not Cache Storage), and
 * `navigator.storage.persist()` can shield it from eviction.
 */

import {
  getBook,
  getChapters,
  getSections,
  LIBRARY_SUBJECTS,
} from '@/data/library'
import type { ChapterMeta, SectionContent, SectionMeta } from '@/data/library'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

/** Exactly the shape `GET /api/section/[key]` returns. */
export interface SectionApiPayload {
  section: SectionMeta
  chapter: ChapterMeta
  siblings: SectionMeta[]
  content: SectionContent | null
}

/** One pinned section, as stored in the `pinned-content` object store. */
export interface PinnedSectionRecord {
  sectionId: string
  bookId: string
  fetchedAt: number
  bytes: number
  api: SectionApiPayload
}

/** One pinned book, as stored in the `manifest` object store (keyed by bookId). */
export interface PinnedBookManifest {
  bookId: string
  title: string
  author: string
  subjectId: string
  subjectName: string
  /** sections actually stored on this device */
  sectionCount: number
  /** sections the book has in total (target for the download) */
  totalSections: number
  bytes: number
  pinnedAt: number
  updatedAt: number
  status: 'complete' | 'partial'
}

export interface StorageEstimateInfo {
  /** bytes the origin uses (incl. SW caches) — -1 when the browser hides it */
  usage: number
  /** origin quota — -1 when unknown */
  quota: number
  /** bytes used by pinned books alone */
  pinnedBytes: number
}

export type DownloadPhase = 'fetching' | 'done' | 'cancelled' | 'error'

export interface DownloadState {
  bookId: string
  title: string
  done: number
  total: number
  bytes: number
  phase: DownloadPhase
  error?: string
}

export type PinOutcome =
  | { status: 'complete' | 'partial' | 'cancelled'; downloaded: number; reused: number; failed: number; stored: number; bytes: number }
  | { status: 'error'; downloaded: number; reused: number; failed: number; stored: number; bytes: number; error: string }

export type OfflineCacheEvent =
  | { type: 'progress'; bookId: string; done: number; total: number; bytes: number }
  | { type: 'change'; bookId?: string }
  | { type: 'quota' }

/* ------------------------------------------------------------------ */
/*  IndexedDB plumbing (raw API — no wrapper dependency)               */
/* ------------------------------------------------------------------ */

const DB_NAME = 'studyverse-offline'
const DB_VERSION = 1
const STORE_SECTIONS = 'pinned-content'
const STORE_MANIFEST = 'manifest'

let dbPromise: Promise<IDBDatabase> | null = null

function ensureStores(db: IDBDatabase) {
  if (!db.objectStoreNames.contains(STORE_SECTIONS)) {
    db.createObjectStore(STORE_SECTIONS, { keyPath: 'sectionId' })
  }
  if (!db.objectStoreNames.contains(STORE_MANIFEST)) {
    db.createObjectStore(STORE_MANIFEST, { keyPath: 'bookId' })
  }
}

function openDb(): Promise<IDBDatabase> {
  if (typeof indexedDB === 'undefined') return Promise.reject(new Error('IndexedDB unavailable'))
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => ensureStores(req.result)
    req.onsuccess = () => {
      const db = req.result
      // Self-heal: if the page died mid-upgrade, Chrome can leave the database
      // at its new version with NO object stores (the version bump commits
      // before the upgrade transaction does). Reopening one version higher
      // forces a fresh upgrade that (re)creates whatever is missing.
      if (!db.objectStoreNames.contains(STORE_SECTIONS) || !db.objectStoreNames.contains(STORE_MANIFEST)) {
        db.close()
        const heal = indexedDB.open(DB_NAME, db.version + 1)
        heal.onupgradeneeded = () => ensureStores(heal.result)
        heal.onsuccess = () => {
          const healed = heal.result
          healed.onclose = () => {
            dbPromise = null
          }
          resolve(healed)
        }
        heal.onerror = () => {
          dbPromise = null
          reject(heal.error ?? new Error('Could not repair offline cache'))
        }
        return
      }
      db.onclose = () => {
        dbPromise = null
      }
      resolve(db)
    }
    req.onerror = () => {
      dbPromise = null
      reject(req.error ?? new Error('Could not open offline cache'))
    }
  })
  return dbPromise
}

function reqAsPromise<T>(req: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error ?? new Error('IndexedDB request failed'))
  })
}

function txAsPromise(tx: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onabort = () => reject(tx.error ?? new Error('IndexedDB transaction aborted'))
    tx.onerror = () => reject(tx.error ?? new Error('IndexedDB transaction failed'))
  })
}

async function withStore<T>(
  store: string,
  mode: IDBTransactionMode,
  fn: (s: IDBObjectStore) => IDBRequest<T> | void
): Promise<T | undefined> {
  const db = await openDb()
  const tx = db.transaction(store, mode)
  const req = fn(tx.objectStore(store))
  await txAsPromise(tx)
  return req ? (req as IDBRequest<T>).result : undefined
}

function isQuotaError(err: unknown): boolean {
  return (
    (err instanceof DOMException && (err.name === 'QuotaExceededError' || err.code === 22)) ||
    (err instanceof Error && /quota/i.test(err.message))
  )
}

/* ------------------------------------------------------------------ */
/*  Event store — version counter for useSyncExternalStore + typed     */
/*  download-progress events for any subscriber.                       */
/* ------------------------------------------------------------------ */

const storeListeners = new Set<() => void>()
const eventListeners = new Set<(e: OfflineCacheEvent) => void>()
let cacheVersion = 0

function emit(e: OfflineCacheEvent) {
  cacheVersion++
  for (const l of eventListeners) {
    try {
      l(e)
    } catch {
      /* listener error must not break the pin */
    }
  }
  for (const l of storeListeners) l()
}

/** Subscribe to every offline-cache change (pinned set, download progress, quota). */
export function subscribeOfflineCache(cb: () => void): () => void {
  storeListeners.add(cb)
  return () => {
    storeListeners.delete(cb)
  }
}

/** Snapshot for `useSyncExternalStore` — bumps on every change/progress event. */
export function getOfflineCacheVersion(): number {
  return cacheVersion
}

/** Typed download-progress events ("so the UI can show a progress bar"). */
export function onOfflineCacheEvent(cb: (e: OfflineCacheEvent) => void): () => void {
  eventListeners.add(cb)
  return () => {
    eventListeners.delete(cb)
  }
}

/* ------------------------------------------------------------------ */
/*  Active downloads                                                   */
/* ------------------------------------------------------------------ */

interface DownloadRuntime {
  state: DownloadState
  cancel: boolean
}

const active = new Map<string, DownloadRuntime>()
let lastProgressEmit = 0
const PROGRESS_EMIT_MS = 90

function setPhase(rt: DownloadRuntime, phase: DownloadPhase, error?: string) {
  rt.state.phase = phase
  rt.state.error = error
}

/** Snapshot of in-flight downloads (fresh copies — safe for render). */
export function getActiveDownloads(): DownloadState[] {
  return Array.from(active.values(), (rt) => ({ ...rt.state }))
}

/** Ask an in-flight pin to stop. Already-stored sections are kept (resume = re-pin). */
export function cancelPin(bookId: string) {
  const rt = active.get(bookId)
  if (!rt) return
  rt.cancel = true
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** All sections of a book, in book order — computed client-side from the
 *  library data (cheaper and identical to what /api/library would return). */
function bookSections(bookId: string): SectionMeta[] {
  const out: SectionMeta[] = []
  for (const ch of getChapters(bookId)) out.push(...getSections(ch.id))
  return out
}

function subjectNameOf(subjectId: string): string {
  return LIBRARY_SUBJECTS.find((s) => s.id === subjectId)?.name ?? 'General'
}

const textEncoder = new TextEncoder()

/** Human-readable byte size: "812 KB", "1.4 MB", "2.1 GB". */
export function formatBytes(n: number): string {
  if (!Number.isFinite(n) || n < 0) return '—'
  if (n < 1024) return `${n} B`
  const units = ['KB', 'MB', 'GB', 'TB']
  let v = n / 1024
  let i = 0
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024
    i++
  }
  return `${v >= 100 ? Math.round(v) : v.toFixed(1)} ${units[i]}`
}

/** Rough size of a not-yet-pinned book, from the average pinned section. */
export async function estimateBookBytes(bookId: string): Promise<number> {
  const sections = bookSections(bookId)
  const manifests = await listPinned()
  const totalSections = manifests.reduce((a, m) => a + m.sectionCount, 0)
  const avg = totalSections > 0 ? manifests.reduce((a, m) => a + m.bytes, 0) / totalSections : 12_000
  return Math.round(sections.length * avg)
}

/* ------------------------------------------------------------------ */
/*  Public API                                                         */
/* ------------------------------------------------------------------ */

/**
 * Pin a book: fetch every section's `/api/section/...` JSON with a small
 * concurrency pool (6) and store it offline. Sections already in the store
 * are skipped, so re-pinning resumes a partial download. Keeps whatever it
 * managed to store when the network drops or the user cancels.
 */
export async function pinBook(bookId: string): Promise<PinOutcome | null> {
  const book = getBook(bookId)
  if (!book) return { status: 'error', downloaded: 0, reused: 0, failed: 0, stored: 0, bytes: 0, error: 'Unknown book' }
  if (active.has(bookId)) return null // already downloading

  const sections = bookSections(bookId)
  if (sections.length === 0) {
    return { status: 'error', downloaded: 0, reused: 0, failed: 0, stored: 0, bytes: 0, error: 'Book has no sections' }
  }

  // hard quota pre-check: never start a download that cannot fit at all
  try {
    const est = await estimateStorage()
    if (est.quota > 0) {
      const expected = await estimateBookBytes(bookId)
      if (est.usage + expected > est.quota) {
        return {
          status: 'error',
          downloaded: 0,
          reused: 0,
          failed: 0,
          stored: 0,
          bytes: 0,
          error: 'Not enough storage on this device',
        }
      }
    }
  } catch {
    /* estimate unavailable — let the actual puts decide */
  }

  const rt: DownloadRuntime = {
    state: { bookId, title: book.title, done: 0, total: sections.length, bytes: 0, phase: 'fetching' },
    cancel: false,
  }
  active.set(bookId, rt)
  lastProgressEmit = 0
  emit({ type: 'progress', bookId, done: 0, total: sections.length, bytes: 0 })

  let downloaded = 0
  let reused = 0
  let failed = 0
  let bytes = 0
  let quotaError = false

  let cursor = 0
  const worker = async () => {
    while (cursor < sections.length) {
      if (rt.cancel) return
      const section = sections[cursor++]
      try {
        // resume support: a section already stored for this book is skipped
        const existing = await withStore<PinnedSectionRecord>(STORE_SECTIONS, 'readonly', (s) =>
          s.get(section.id)
        )
        if (existing && existing.bookId === bookId) {
          reused++
          rt.state.done++
          rt.state.bytes += existing.bytes
          bytes += existing.bytes
          continue
        }
      } catch {
        /* read failed — fall through to a fresh fetch */
      }
      try {
        // fetch with retry — a dev-server restart or a flaky network can
        // poison pooled connections and 502 a whole burst at once
        let res: Response | null = null
        for (let attempt = 0; attempt < 4; attempt++) {
          try {
            res = await fetch(`/api/section/${encodeURIComponent(section.id)}`)
            if (res.ok) break
            if (res.status >= 500 && attempt < 3) {
              await new Promise((r) => setTimeout(r, 600 * (attempt + 1)))
              res = null
              continue
            }
            break // 4xx (or final 5xx) — not retryable
          } catch {
            if (attempt < 3) {
              await new Promise((r) => setTimeout(r, 600 * (attempt + 1)))
              continue
            }
          }
        }
        if (!res || !res.ok) {
          failed++
          continue
        }
        const text = await res.text()
        const api = JSON.parse(text) as SectionApiPayload
        const record: PinnedSectionRecord = {
          sectionId: section.id,
          bookId,
          fetchedAt: Date.now(),
          bytes: textEncoder.encode(text).byteLength,
          api,
        }
        await withStore(STORE_SECTIONS, 'readwrite', (s) => s.put(record))
        downloaded++
        bytes += record.bytes
        rt.state.done++
        rt.state.bytes = bytes
        const now = Date.now()
        if (now - lastProgressEmit >= PROGRESS_EMIT_MS) {
          lastProgressEmit = now
          emit({ type: 'progress', bookId, done: rt.state.done, total: rt.state.total, bytes })
        }
      } catch (err) {
        if (isQuotaError(err)) {
          quotaError = true
          rt.cancel = true
          return
        }
        failed++
      }
    }
  }
  const lanes = Math.min(6, sections.length)
  await Promise.all(Array.from({ length: lanes }, worker))

  const stored = downloaded + reused
  const complete = stored >= sections.length

  // write/refresh the manifest whenever anything is on disk
  if (stored > 0) {
    try {
      const prev = await withStore<PinnedBookManifest>(STORE_MANIFEST, 'readonly', (s) => s.get(bookId))
      const manifest: PinnedBookManifest = {
        bookId,
        title: book.title,
        author: book.author,
        subjectId: book.subjectId,
        subjectName: subjectNameOf(book.subjectId),
        sectionCount: stored,
        totalSections: sections.length,
        bytes,
        pinnedAt: prev?.pinnedAt ?? Date.now(),
        updatedAt: Date.now(),
        status: complete ? 'complete' : 'partial',
      }
      await withStore(STORE_MANIFEST, 'readwrite', (s) => s.put(manifest))
    } catch (err) {
      if (isQuotaError(err)) quotaError = true
    }
  }

  active.delete(bookId)

  if (quotaError) {
    setPhase(rt, 'error', 'Device storage full — partial copy kept')
    emit({ type: 'quota' })
    emit({ type: 'change', bookId })
    return { status: 'error', downloaded, reused, failed, stored, bytes, error: 'Device storage full — partial copy kept' }
  }
  if (rt.cancel) {
    setPhase(rt, 'cancelled')
    emit({ type: 'change', bookId })
    return { status: 'cancelled', downloaded, reused, failed, stored, bytes }
  }
  if (failed > 0 || !complete) {
    setPhase(rt, complete ? 'done' : 'error', failed > 0 ? `${failed} section(s) failed` : undefined)
    emit({ type: 'change', bookId })
    return { status: complete ? 'complete' : 'partial', downloaded, reused, failed, stored, bytes }
  }
  setPhase(rt, 'done')
  emit({ type: 'change', bookId })
  return { status: 'complete', downloaded, reused, failed, stored, bytes }
}

/** Remove a book (or cancel its in-flight download) and all its pinned sections. */
export async function unpinBook(bookId: string): Promise<void> {
  cancelPin(bookId)
  const db = await openDb()
  const tx = db.transaction([STORE_SECTIONS, STORE_MANIFEST], 'readwrite')
  const sections = tx.objectStore(STORE_SECTIONS)
  const cursorReq = sections.openCursor()
  const wipe = new Promise<void>((resolve, reject) => {
    cursorReq.onsuccess = () => {
      const cursor = cursorReq.result
      if (!cursor) {
        resolve()
        return
      }
      const record = cursor.value as PinnedSectionRecord
      if (record && record.bookId === bookId) cursor.delete()
      cursor.continue()
    }
    cursorReq.onerror = () => reject(cursorReq.error ?? new Error('Could not scan pinned sections'))
  })
  tx.objectStore(STORE_MANIFEST).delete(bookId)
  await Promise.all([wipe, txAsPromise(tx)])
  emit({ type: 'change', bookId })
}

/** Pinned books, newest first. */
export async function listPinned(): Promise<PinnedBookManifest[]> {
  try {
    const all = await withStore<PinnedBookManifest[]>(STORE_MANIFEST, 'readonly', (s) => s.getAll())
    return (all ?? []).sort((a, b) => b.pinnedAt - a.pinnedAt)
  } catch {
    return []
  }
}

/** The stored `/api/section` payload for one section, or null when not pinned. */
export async function getOfflineSection(sectionId: string): Promise<SectionApiPayload | null> {
  try {
    const record = await withStore<PinnedSectionRecord>(STORE_SECTIONS, 'readonly', (s) =>
      s.get(sectionId)
    )
    return record?.api ?? null
  } catch {
    return null
  }
}

/** Cheap membership check (for badges). */
export async function hasOfflineSection(sectionId: string): Promise<boolean> {
  try {
    const record = await withStore<PinnedSectionRecord>(STORE_SECTIONS, 'readonly', (s) =>
      s.get(sectionId)
    )
    return !!record
  } catch {
    return false
  }
}

/** Origin storage usage + how much of it is pinned content. */
export async function estimateStorage(): Promise<StorageEstimateInfo> {
  let usage = -1
  let quota = -1
  try {
    if (typeof navigator !== 'undefined' && navigator.storage?.estimate) {
      const est = await navigator.storage.estimate()
      usage = est.usage ?? 0
      quota = est.quota ?? 0
    }
  } catch {
    /* keep -1s */
  }
  const pinnedBytes = (await listPinned()).reduce((a, m) => a + m.bytes, 0)
  return { usage, quota, pinnedBytes }
}

/** Would pinning this book push the origin past `fraction` (default 80%) of its quota? */
export async function wouldExceedQuota(bookId: string, fraction = 0.8): Promise<boolean> {
  const est = await estimateStorage()
  if (est.quota <= 0) return false
  const expected = await estimateBookBytes(bookId)
  return est.usage + expected > est.quota * fraction
}

/** Ask the browser to protect this origin's storage from eviction. */
export async function requestPersistentStorage(): Promise<boolean> {
  try {
    if (typeof navigator !== 'undefined' && navigator.storage?.persist) {
      return await navigator.storage.persist()
    }
  } catch {
    /* denied / unsupported */
  }
  return false
}

/** Current persisted flag, or null when unsupported. */
export async function isStoragePersisted(): Promise<boolean | null> {
  try {
    if (typeof navigator !== 'undefined' && navigator.storage?.persisted) {
      return await navigator.storage.persisted()
    }
  } catch {
    /* unsupported */
  }
  return null
}

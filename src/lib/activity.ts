'use client'

import { useStudy } from '@/store/useStudy'

export type ActivityKind = 'lesson' | 'quiz' | 'cards' | 'note'

/** Local (browser timezone) day as "YYYY-MM-DD" */
export function todayStr(): string {
  const d = new Date()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

const FLUSH_MS = 4000

/** queued increments, one entry per kind */
const pending = new Map<ActivityKind, number>()
let flushTimer: ReturnType<typeof setTimeout> | null = null

function postEntry(kind: ActivityKind, count: number, day: string) {
  const deviceId = useStudy.getState().ensureDevice()
  const payload = JSON.stringify({ deviceId, kind, day, count })
  // sendBeacon first — most reliable on page teardown
  try {
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([payload], { type: 'application/json' })
      if (navigator.sendBeacon('/api/activity', blob)) return
    }
  } catch {
    // fall through to fetch keepalive
  }
  try {
    void fetch('/api/activity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true,
    }).catch(() => {})
  } catch {
    // never throws
  }
}

/** Immediately POST every queued kind (one request per kind). */
export function flushActivity() {
  if (flushTimer !== null) {
    clearTimeout(flushTimer)
    flushTimer = null
  }
  if (pending.size === 0) return
  const entries = [...pending.entries()]
  pending.clear()
  const day = todayStr()
  for (const [kind, count] of entries) postEntry(kind, count, day)
}

function scheduleFlush() {
  if (flushTimer !== null) return
  flushTimer = setTimeout(() => {
    flushTimer = null
    flushActivity()
  }, FLUSH_MS)
}

/**
 * Queue a study activity (lesson viewed, quiz finished, cards reviewed, note saved).
 * Batches per kind in memory and flushes as a single POST per kind every ~4s,
 * plus on tab hide / page unload (sendBeacon with fetch-keepalive fallback).
 * Never throws — activity logging must not break studying.
 */
export function logActivity(kind: ActivityKind, count = 1) {
  try {
    if (typeof window === 'undefined' || count <= 0) return
    pending.set(kind, (pending.get(kind) ?? 0) + Math.floor(count))
    scheduleFlush()
  } catch {
    // never throws
  }
}

// flush pending activity when the tab is hidden or the page is unloaded
if (typeof window !== 'undefined') {
  try {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') flushActivity()
    })
    window.addEventListener('pagehide', flushActivity)
  } catch {
    // never throws
  }
}

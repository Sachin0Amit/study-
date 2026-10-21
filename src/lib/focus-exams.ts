'use client'

/**
 * X11G — Exam D-day store (module-level, shared by Focus HQ and the Pod).
 *
 * A tiny external store around /api/focus/exams: both the ExamCountdownCard
 * and the Pod's next-exam chip subscribe to the same cache, so adding or
 * removing a D-day in one place updates the other instantly.
 */

import { useCallback, useEffect, useSyncExternalStore } from 'react'
import { useStudy } from '@/store/useStudy'

export interface ExamRow {
  id: string
  title: string
  examDate: string // local "YYYY-MM-DD"
  note: string | null
  createdAt: string
}

let exams: ExamRow[] | null = null
let loading = false
const listeners = new Set<() => void>()

function subscribe(fn: () => void): () => void {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}
function getSnapshot(): ExamRow[] | null {
  return exams
}
function getServerSnapshot(): ExamRow[] | null {
  return null
}

async function reload(): Promise<void> {
  if (loading || typeof window === 'undefined') return
  loading = true
  try {
    const deviceId = useStudy.getState().ensureDevice()
    const res = await fetch(`/api/focus/exams?deviceId=${encodeURIComponent(deviceId)}`)
    if (res.ok) {
      const data = (await res.json()) as { exams?: ExamRow[] }
      exams = data.exams ?? []
      for (const fn of listeners) fn()
    }
  } catch {
    /* offline — keep the last snapshot */
  } finally {
    loading = false
  }
}

export function useFocusExams(): { exams: ExamRow[] | null; refresh: () => void } {
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const snap = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  useEffect(() => {
    ensureDevice()
    if (snap === null) void reload()
  }, [snap, ensureDevice])
  const refresh = useCallback(() => {
    void reload()
  }, [])
  return { exams: snap, refresh }
}

/** create an exam — throws Error with the server's message on failure */
export async function addExam(title: string, examDate: string, note?: string): Promise<ExamRow> {
  const deviceId = useStudy.getState().ensureDevice()
  const res = await fetch('/api/focus/exams', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ deviceId, title, examDate, note: note || undefined }),
  })
  const data = (await res.json().catch(() => ({}))) as { exam?: ExamRow; error?: string }
  if (!res.ok || !data.exam) throw new Error(data.error ?? 'Could not add the exam')
  void reload()
  return data.exam
}

export async function removeExam(id: string): Promise<void> {
  const deviceId = useStudy.getState().ensureDevice()
  const res = await fetch(
    `/api/focus/exams?id=${encodeURIComponent(id)}&deviceId=${encodeURIComponent(deviceId)}`,
    { method: 'DELETE' }
  )
  if (!res.ok) throw new Error('Could not remove the exam')
  void reload()
}

/* ------------------------------------------------------------------ */
/*  Countdown math                                                     */
/* ------------------------------------------------------------------ */

/** whole days between today (local midnight) and the exam date; < 0 = past */
export function daysUntil(examDate: string): number {
  const [y, m, d] = examDate.split('-').map(Number)
  const exam = new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1)
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.round((exam.getTime() - today.getTime()) / 86_400_000)
}

/** exams with examDate >= today, soonest first (server already sorts) */
export function upcomingExams(rows: ExamRow[] | null): ExamRow[] {
  if (!rows) return []
  return rows.filter((e) => daysUntil(e.examDate) >= 0)
}

export interface ExamTone {
  /** tailwind text color for the big D-number */
  text: string
  /** tailwind border/bg classes for chips */
  chip: string
  /** 6-digit hex for inline styles (rings) */
  hex: string
  label: string
}

/** urgency ramp: calm emerald → amber → orange → rose as D-day nears */
export function examTone(daysLeft: number): ExamTone {
  if (daysLeft < 0)
    return { text: 'text-muted-foreground', chip: 'border-border bg-muted/40 text-muted-foreground', hex: '#71717a', label: 'past' }
  if (daysLeft === 0)
    return { text: 'text-rose-500 dark:text-rose-300', chip: 'border-rose-400/50 bg-rose-400/15 text-rose-600 dark:text-rose-300', hex: '#fb7185', label: 'today' }
  if (daysLeft <= 2)
    return { text: 'text-rose-500 dark:text-rose-300', chip: 'border-rose-400/40 bg-rose-400/10 text-rose-600 dark:text-rose-300', hex: '#fb7185', label: 'imminent' }
  if (daysLeft <= 7)
    return { text: 'text-orange-500 dark:text-orange-300', chip: 'border-orange-400/40 bg-orange-400/10 text-orange-600 dark:text-orange-300', hex: '#fb923c', label: 'this week' }
  if (daysLeft <= 30)
    return { text: 'text-amber-500 dark:text-amber-300', chip: 'border-amber-400/40 bg-amber-400/10 text-amber-600 dark:text-amber-300', hex: '#fbbf24', label: 'this month' }
  return { text: 'text-emerald-500 dark:text-emerald-300', chip: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300', hex: '#34d399', label: 'on the horizon' }
}

/** "8 weeks & 2 days" style breakdown */
export function weeksBreakdown(days: number): string {
  if (days < 7) return `${days} day${days === 1 ? '' : 's'}`
  const w = Math.floor(days / 7)
  const d = days % 7
  return `${w} week${w === 1 ? '' : 's'}${d ? ` & ${d}d` : ''}`
}

/** long local date line, e.g. "Sunday, 20 Dec 2026" */
export function examDateLine(examDate: string): string {
  const [y, m, d] = examDate.split('-').map(Number)
  return new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1).toLocaleDateString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

'use client'

/**
 * X11H — Study-plan store (module-level, shared by Focus HQ's PlanCard,
 * the generator dialog and any future surface — home briefing, palette…).
 *
 * Mirrors the focus-exams store: one cached snapshot, useSyncExternalStore
 * binding, mutations trigger a reload so every subscriber stays in sync.
 */

import { useCallback, useEffect, useSyncExternalStore } from 'react'
import { useStudy } from '@/store/useStudy'
import type { PlanSubjectInput } from '@/lib/plan-generator'

export interface PlanBlockRow {
  id: string
  examId: string | null
  examTitle: string | null
  day: string // "YYYY-MM-DD"
  subject: string
  subjectId: string | null
  minutes: number
  note: string | null
  done: boolean
  position: number
  createdAt: string
}

export interface GeneratePlanInput {
  examId?: string
  days?: number
  subjects: PlanSubjectInput[]
  dailyMinutes: number
  restWeekly: boolean
}

let blocks: PlanBlockRow[] | null = null
let loading = false
const listeners = new Set<() => void>()

function subscribe(fn: () => void): () => void {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}
function getSnapshot(): PlanBlockRow[] | null {
  return blocks
}
function getServerSnapshot(): PlanBlockRow[] | null {
  return null
}

async function reload(): Promise<void> {
  if (loading || typeof window === 'undefined') return
  loading = true
  try {
    const deviceId = useStudy.getState().ensureDevice()
    const res = await fetch(`/api/focus/plan?deviceId=${encodeURIComponent(deviceId)}`)
    if (res.ok) {
      const data = (await res.json()) as { blocks?: PlanBlockRow[] }
      blocks = data.blocks ?? []
      for (const fn of listeners) fn()
    }
  } catch {
    /* offline — keep the last snapshot */
  } finally {
    loading = false
  }
}

export function useStudyPlan(): { blocks: PlanBlockRow[] | null; refresh: () => void } {
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const snap = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  useEffect(() => {
    ensureDevice()
    if (snap === null) void reload()
  }, [snap, ensureDevice])
  const refresh = useCallback(() => {
    void reload()
  }, [])
  return { blocks: snap, refresh }
}

/** generate (and replace) the plan — throws the server's message on failure */
export async function generatePlan(input: GeneratePlanInput): Promise<{ created: number }> {
  const deviceId = useStudy.getState().ensureDevice()
  const res = await fetch('/api/focus/plan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ deviceId, ...input }),
  })
  const data = (await res.json().catch(() => ({}))) as { created?: number; error?: string }
  if (!res.ok) throw new Error(data.error ?? 'Could not generate the plan')
  void reload()
  return { created: data.created ?? 0 }
}

export async function togglePlanBlock(id: string, done: boolean): Promise<void> {
  const deviceId = useStudy.getState().ensureDevice()
  // optimistic
  const prev = blocks
  blocks = (blocks ?? []).map((b) => (b.id === id ? { ...b, done } : b))
  for (const fn of listeners) fn()
  try {
    const res = await fetch('/api/focus/plan', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, deviceId, done }),
    })
    if (!res.ok) throw new Error('patch failed')
  } catch {
    blocks = prev
    for (const fn of listeners) fn()
  }
}

export async function deletePlanBlock(id: string): Promise<void> {
  const deviceId = useStudy.getState().ensureDevice()
  const prev = blocks
  blocks = (blocks ?? []).filter((b) => b.id !== id)
  for (const fn of listeners) fn()
  try {
    const res = await fetch(
      `/api/focus/plan?id=${encodeURIComponent(id)}&deviceId=${encodeURIComponent(deviceId)}`,
      { method: 'DELETE' }
    )
    if (!res.ok) throw new Error('delete failed')
  } catch {
    blocks = prev
    for (const fn of listeners) fn()
  }
}

export async function clearPlan(): Promise<number> {
  const deviceId = useStudy.getState().ensureDevice()
  const res = await fetch(`/api/focus/plan?deviceId=${encodeURIComponent(deviceId)}&all=1`, {
    method: 'DELETE',
  })
  const data = (await res.json().catch(() => ({}))) as { cleared?: number; error?: string }
  if (!res.ok) throw new Error(data.error ?? 'Could not clear the plan')
  void reload()
  return data.cleared ?? 0
}

/* ------------------------------------------------------------------ */
/*  derived helpers                                                    */
/* ------------------------------------------------------------------ */

/** local "YYYY-MM-DD" for today (matches focus.ts localDateKey) */
export function planTodayKey(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export interface DayPlan {
  day: string
  blocks: PlanBlockRow[]
  minutes: number
}

/** group blocks by day, ascending */
export function planByDay(rows: PlanBlockRow[]): DayPlan[] {
  const map = new Map<string, PlanBlockRow[]>()
  for (const b of rows) {
    const list = map.get(b.day) ?? []
    list.push(b)
    map.set(b.day, list)
  }
  return [...map.entries()]
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .map(([day, list]) => ({
      day,
      blocks: list.sort((a, b) => a.position - b.position),
      minutes: list.reduce((n, b) => n + b.minutes, 0),
    }))
}

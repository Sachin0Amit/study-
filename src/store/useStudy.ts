'use client'

import { create } from 'zustand'

export type View =
  | { name: 'library'; domain?: string; topicId?: string }
  | { name: 'book'; bookId: string }
  | { name: 'chapter'; chapterId: string }
  | { name: 'lesson'; sectionId: string }
  | { name: 'playground' }
  | { name: 'progress' }
  | { name: 'flashcards'; chapterId?: string; examMisses?: boolean }
  | { name: 'formulas'; chapterId?: string }
  | { name: 'exam'; chapterId?: string }
  | { name: 'search'; query?: string }
  | { name: 'syllabus' }
  // ---- X-systems (StudyVerse OS) ----
  | { name: 'studio'; targetSkill?: string; subjectHint?: string }
  | { name: 'twin' }
  | { name: 'remix' }
  | { name: 'arena' }
  | { name: 'paper-dna' }
  | { name: 'palace'; sectionKey?: string }

interface ProgressEntry {
  status: 'in_progress' | 'completed'
  quizScore?: { score: number; total: number }
  lastViewed: string
}

interface StudyStore {
  view: View
  viewStack: View[] // history for back navigation
  deviceId: string | null
  progress: Record<string, ProgressEntry>
  /** Focus reading mode: app chrome (header/footer/TOC) hidden, page centered — on while reading lessons */
  readerFocus: boolean
  /** Reading text scale for lesson pages (1 = default; persisted in localStorage by the setter) */
  readerScale: number
  /** Easy mode: show super-simple yellow explanations everywhere. ON by default. */
  easyMode: boolean
  navigate: (view: View) => void
  goBack: () => void
  setReaderFocus: (on: boolean) => void
  setReaderScale: (scale: number) => void
  setEasyMode: (on: boolean) => void
  ensureDevice: () => string
  loadProgress: () => Promise<void>
  markViewed: (sectionId: string) => void
  markCompleted: (sectionId: string) => void
  recordQuiz: (sectionId: string, score: number, total: number) => void
}

function makeDeviceId() {
  return 'dev-' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36)
}

export const useStudy = create<StudyStore>((set, get) => ({
  view: { name: 'library' },
  viewStack: [],
  deviceId: null,
  progress: {},
  readerFocus: false,
  readerScale: 1,
  easyMode: true,

  navigate: (view) => {
    set((s) => ({ view, viewStack: [...s.viewStack, s.view].slice(-30) }))
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  },

  goBack: () => {
    const stack = get().viewStack
    if (stack.length === 0) {
      set({ view: { name: 'library' } })
      return
    }
    const prev = stack[stack.length - 1]
    set({ view: prev, viewStack: stack.slice(0, -1) })
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  },

  setReaderFocus: (on) => set({ readerFocus: on }),

  setReaderScale: (scale) => {
    const clamped = Math.min(1.25, Math.max(0.9, Math.round(scale * 20) / 20))
    set({ readerScale: clamped })
    try {
      localStorage.setItem('sv-reader-scale', String(clamped))
    } catch {
      /* storage unavailable — scale just isn't persisted */
    }
  },

  setEasyMode: (on) => {
    set({ easyMode: on })
    try {
      localStorage.setItem('sv-easy-mode', on ? '1' : '0')
    } catch {
      /* storage unavailable */
    }
  },

  ensureDevice: () => {
    let id = get().deviceId
    if (id) return id
    if (typeof window !== 'undefined') {
      id = localStorage.getItem('studyverse-device-id')
      if (!id) {
        id = makeDeviceId()
        localStorage.setItem('studyverse-device-id', id)
      }
    } else {
      id = makeDeviceId()
    }
    set({ deviceId: id })
    return id
  },

  loadProgress: async () => {
    const id = get().ensureDevice()
    try {
      const res = await fetch(`/api/progress?deviceId=${encodeURIComponent(id)}`)
      if (!res.ok) return
      const data = (await res.json()) as { progress: Record<string, ProgressEntry> }
      set({ progress: data.progress || {} })
    } catch {
      // offline-tolerant
    }
  },

  markViewed: (sectionId) => {
    const id = get().ensureDevice()
    set((s) => {
      const existing = s.progress[sectionId]
      if (existing?.status === 'completed') return s
      const progress = {
        ...s.progress,
        [sectionId]: {
          status: 'in_progress' as const,
          lastViewed: new Date().toISOString(),
        },
      }
      return { ...s, progress }
    })
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ deviceId: id, sectionKey: sectionId, status: 'in_progress' }),
    }).catch(() => {})
  },

  markCompleted: (sectionId) => {
    const id = get().ensureDevice()
    set((s) => {
      const existing = s.progress[sectionId]
      const progress = {
        ...s.progress,
        [sectionId]: {
          status: 'completed' as const,
          quizScore: existing?.quizScore,
          lastViewed: new Date().toISOString(),
        },
      }
      return { ...s, progress }
    })
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ deviceId: id, sectionKey: sectionId, status: 'completed' }),
    }).catch(() => {})
  },

  recordQuiz: (sectionId, score, total) => {
    const id = get().ensureDevice()
    set((s) => {
      const existing = s.progress[sectionId]
      const better =
        !existing?.quizScore || score > existing.quizScore.score
          ? { score, total }
          : existing.quizScore
      const progress = {
        ...s.progress,
        [sectionId]: {
          status: existing?.status || ('in_progress' as const),
          quizScore: better,
          lastViewed: new Date().toISOString(),
        },
      }
      return { ...s, progress }
    })
    fetch('/api/quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ deviceId: id, sectionKey: sectionId, score, total, answers: [] }),
    }).catch(() => {})
  },
}))

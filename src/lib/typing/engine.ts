/**
 * X12 — Keyboard Dojo: the typing engine.
 *
 * Pure logic + persistence for the typing trainer (no React):
 *  · word/char state model (correct / incorrect / extra, free-form code lines)
 *  · metric math — net & raw WPM, accuracy, consistency (coefficient of variation)
 *  · per-key accuracy ledger + confusion pairs (the heatmap's data)
 *  · localStorage persistence — settings, history, PBs, streak days, totals
 *
 * WPM conventions follow the standard (monkeytype-style) definitions:
 *   raw  = every keystroke  / 5 / minutes
 *   net  = correct chars in the FINAL text (incl. correct spaces) / 5 / minutes
 *   acc  = correct keystrokes / total keystrokes
 */

import {
  type CodeLang,
  type Drill,
  COMMON_WORDS,
  DRILLS,
  generateWords,
  pickCode,
  pickQuote,
  drillById,
  generateDrillTokens,
} from './content'
import { courseLessonById, generateLessonTokens } from './course'

/* ------------------------------------------------------------------ */
/* Core types                                                          */
/* ------------------------------------------------------------------ */

export type CharState = 'pending' | 'correct' | 'incorrect' | 'extra'

export interface TypedChar {
  /** expected char; '\n' for code-line ends */
  char: string
  /** what the user actually pressed (confusion analysis) */
  typed?: string
  state: CharState
}

export interface TypingWord {
  text: string
  chars: TypedChar[]
  /** free-form words (code lines) contain inner spaces; space/Enter are chars, not separators */
  freeForm?: boolean
}

export type TestMode = 'course' | 'time' | 'words' | 'quote' | 'code' | 'drill' | 'custom'

export interface Modifiers {
  punc: boolean
  nums: boolean
  iron: boolean
  blind: boolean
  peek: boolean
}

export const DEFAULT_MODIFIERS: Modifiers = {
  punc: false,
  nums: false,
  iron: false,
  blind: false,
  peek: false,
}

export interface TestConfig {
  mode: TestMode
  /** seconds for time mode, word count for words mode, 's'|'m'|'l' quote, code lang, drill id, course lesson id ('' = course home) */
  param: number | string
  mods: Modifiers
  customText?: string
}

export interface TestResult {
  wpm: number
  rawWpm: number
  accuracy: number
  consistency: number | null
  durationSec: number
  correctChars: number
  incorrectChars: number
  /** per-second raw wpm samples (for the results chart) */
  rawSeries: number[]
  /** per-second cumulative net wpm */
  netSeries: number[]
  /** per-second error counts */
  errSeries: number[]
  config: TestConfig
  label: string
  at: string
}

/* ------------------------------------------------------------------ */
/* Word model construction                                             */
/* ------------------------------------------------------------------ */

/** Build word states from plain text (whitespace-separated tokens). */
export function makeWords(text: string): TypingWord[] {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => ({ text: w, chars: w.split('').map((c) => ({ char: c, state: 'pending' as CharState })) }))
}

/** Build code-line words: each line is one free-form word ending in '\n'. */
export function makeCodeWords(code: string): TypingWord[] {
  const lines = code.replace(/\t/g, '  ').split('\n')
  return lines.map((line, i) => {
    const text = i < lines.length - 1 ? line + '\n' : line
    return {
      text,
      freeForm: true,
      chars: text.split('').map((c) => ({ char: c, state: 'pending' as CharState })),
    }
  })
}

/** Human label for the mode shown in history/PB chips. */
export function configLabel(cfg: TestConfig): string {
  switch (cfg.mode) {
    case 'course': {
      const les = courseLessonById(String(cfg.param || ''))
      return les ? `course ${les.n}: ${les.title}` : 'course overview'
    }
    case 'time':
      return `time ${cfg.param}s`
    case 'words':
      return `words ${cfg.param}`
    case 'quote':
      return `quote ${cfg.param}`
    case 'code': {
      const snip = CODE_LANGS.find((l) => l.id === cfg.param)
      return `code · ${snip ? snip.short : 'all'}`
    }
    case 'drill': {
      const d = drillById(String(cfg.param))
      return `drill · ${d ? d.title : cfg.param}`
    }
    case 'custom':
      return 'custom text'
  }
}

export const CODE_LANGS: { id: CodeLang | 'all'; label: string; short: string }[] = [
  { id: 'all', label: 'All languages', short: 'all' },
  { id: 'ts', label: 'TypeScript', short: 'ts' },
  { id: 'js', label: 'JavaScript', short: 'js' },
  { id: 'py', label: 'Python', short: 'py' },
  { id: 'c', label: 'C', short: 'c' },
]

/** Generate the word list for a fresh test. */
export function generateTest(cfg: TestConfig): TypingWord[] {
  switch (cfg.mode) {
    case 'course': {
      const les = courseLessonById(String(cfg.param || ''))
      if (!les) return makeWords('choose a lesson from the course to begin')
      return makeWords(generateLessonTokens(les).join(' '))
    }
    case 'time': {
      // endless-ish stream: ~4.5 chars/word at a generous pace
      const secs = Number(cfg.param) || 60
      const words = generateWords(Math.max(80, Math.ceil(secs * 4)), {
        punctuation: cfg.mods.punc,
        numbers: cfg.mods.nums,
      })
      return makeWords(words.join(' '))
    }
    case 'words': {
      const count = Number(cfg.param) || 25
      return makeWords(
        generateWords(count, { punctuation: cfg.mods.punc, numbers: cfg.mods.nums }).join(' ')
      )
    }
    case 'quote': {
      const q = pickQuote((cfg.param as 's' | 'm' | 'l') || 'm')
      return makeWords(q.text)
    }
    case 'code': {
      const lang = (cfg.param as CodeLang | 'all') || 'all'
      return makeCodeWords(pickCode(lang).code)
    }
    case 'drill': {
      const d = drillById(String(cfg.param))
      if (!d) return makeWords(COMMON_WORDS.slice(0, 25).join(' '))
      return makeWords(generateDrillTokens(d).join(' '))
    }
    case 'custom': {
      const text = (cfg.customText ?? '').trim().slice(0, 900)
      if (text.length < 3) return makeWords('the quick brown fox jumps over the lazy dog')
      return makeWords(text)
    }
  }
}

/** Append more words (time mode never runs out). */
export function appendWords(existing: TypingWord[], cfg: TestConfig, count = 30): TypingWord[] {
  let fresh: string[]
  if (cfg.mode === 'time') {
    fresh = generateWords(count, { punctuation: cfg.mods.punc, numbers: cfg.mods.nums })
  } else if (cfg.mode === 'drill') {
    const d = drillById(String(cfg.param)) ?? DRILLS[0]
    fresh = generateDrillTokens(d)
  } else if (cfg.mode === 'course') {
    const les = courseLessonById(String(cfg.param || ''))
    fresh = les ? generateLessonTokens(les) : COMMON_WORDS.slice(0, count)
  } else {
    fresh = COMMON_WORDS.slice(0, count)
  }
  return [...existing, ...makeWords(fresh.join(' '))]
}

/* ------------------------------------------------------------------ */
/* Metrics                                                             */
/* ------------------------------------------------------------------ */

/** Consistency = 100 × (1 − σ/μ) over per-second raw WPM, clamped 0-100. */
export function computeConsistency(series: number[]): number | null {
  const s = series.filter((n) => Number.isFinite(n) && n >= 0)
  if (s.length < 3) return null
  const mean = s.reduce((a, b) => a + b, 0) / s.length
  if (mean <= 0) return null
  const variance = s.reduce((a, b) => a + (b - mean) ** 2, 0) / s.length
  const cv = Math.sqrt(variance) / mean
  return Math.round(Math.max(0, Math.min(100, (1 - cv) * 100)))
}

export function countFinalChars(words: TypingWord[]): { correct: number; incorrect: number } {
  let correct = 0
  let incorrect = 0
  for (const w of words) {
    for (const c of w.chars) {
      if (c.state === 'correct') correct++
      else if (c.state === 'incorrect' || c.state === 'extra') incorrect++
    }
  }
  return { correct, incorrect }
}

/* ------------------------------------------------------------------ */
/* Persistence (localStorage)                                          */
/* ------------------------------------------------------------------ */

export const TYPING_LS = {
  settings: 'sv-typing-settings',
  history: 'sv-typing-history',
  pbs: 'sv-typing-pbs',
  keys: 'sv-typing-keys',
  confusions: 'sv-typing-confusions',
  days: 'sv-typing-days',
  totals: 'sv-typing-totals',
  name: 'sv-typing-name',
  course: 'sv-typing-course',
} as const

export interface KeyStat {
  c: number
  w: number
}

export interface StoredRun {
  at: string
  mode: string
  label: string
  mods: string
  wpm: number
  raw: number
  acc: number
  cons: number | null
  dur: number
  chars: number
  errors: number
  pb: boolean
}

export interface PbEntry {
  wpm: number
  acc: number
  cons: number | null
  at: string
}

export interface TypingTotals {
  tests: number
  seconds: number
  chars: number
}

export interface StoredSettings {
  mode: TestMode
  timeParam: number
  wordsParam: number
  quoteSize: 's' | 'm' | 'l'
  codeLang: CodeLang | 'all'
  drillId: string
  courseLesson: string
  mods: Modifiers
  sound: boolean
  name: string
}

export const DEFAULT_SETTINGS: StoredSettings = {
  mode: 'course',
  timeParam: 60,
  wordsParam: 25,
  quoteSize: 'm',
  codeLang: 'all',
  drillId: 'home-row-anchor',
  courseLesson: '',
  mods: { ...DEFAULT_MODIFIERS },
  sound: false,
  name: '',
}

function read<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function write(key: string, value: unknown): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage unavailable — the dojo degrades to in-memory */
  }
}

export const loadSettings = (): StoredSettings => {
  const s = read<Partial<StoredSettings>>(TYPING_LS.settings, {})
  return {
    ...DEFAULT_SETTINGS,
    ...s,
    mods: { ...DEFAULT_MODIFIERS, ...(s.mods ?? {}) },
  }
}
export const saveSettings = (s: StoredSettings) => write(TYPING_LS.settings, s)

/* ---- course progress ---- */

export interface LessonRecord {
  passed: boolean
  stars: number
  wpm: number
  acc: number
  at: string
}

export type CourseProgress = Record<string, LessonRecord>

export const loadCourse = (): CourseProgress => {
  const c = read<Record<string, unknown>>(TYPING_LS.course, {})
  const out: CourseProgress = {}
  for (const [k, v] of Object.entries(c)) {
    if (v && typeof v === 'object' && typeof (v as LessonRecord).wpm === 'number') {
      const r = v as LessonRecord
      out[k] = {
        passed: !!r.passed,
        stars: Math.max(0, Math.min(3, r.stars | 0)),
        wpm: r.wpm | 0,
        acc: Math.max(0, Math.min(100, r.acc | 0)),
        at: typeof r.at === 'string' ? r.at : new Date().toISOString(),
      }
    }
  }
  return out
}
export const saveCourse = (c: CourseProgress) => write(TYPING_LS.course, c)

export const loadHistory = (): StoredRun[] => {
  const h = read<unknown>(TYPING_LS.history, [])
  return Array.isArray(h) ? (h as StoredRun[]).slice(0, 80) : []
}
export const saveHistory = (h: StoredRun[]) => write(TYPING_LS.history, h.slice(0, 80))

export const loadPbs = (): Record<string, PbEntry> => {
  const p = read<Record<string, unknown>>(TYPING_LS.pbs, {})
  const out: Record<string, PbEntry> = {}
  for (const [k, v] of Object.entries(p)) {
    if (v && typeof v === 'object' && typeof (v as PbEntry).wpm === 'number') {
      out[k] = v as PbEntry
    }
  }
  return out
}
export const savePbs = (p: Record<string, PbEntry>) => write(TYPING_LS.pbs, p)

export const loadKeyStats = (): Record<string, KeyStat> =>
  read<Record<string, KeyStat>>(TYPING_LS.keys, {})
export const saveKeyStats = (k: Record<string, KeyStat>) => write(TYPING_LS.keys, k)

export const loadConfusions = (): Record<string, number> =>
  read<Record<string, number>>(TYPING_LS.confusions, {})
export const saveConfusions = (c: Record<string, number>) => write(TYPING_LS.confusions, c)

export const loadTotals = (): TypingTotals =>
  read<TypingTotals>(TYPING_LS.totals, { tests: 0, seconds: 0, chars: 0 })
export const saveTotals = (t: TypingTotals) => write(TYPING_LS.totals, t)

export const loadName = (): string => {
  if (typeof window === 'undefined') return ''
  try {
    return window.localStorage.getItem(TYPING_LS.name) ?? ''
  } catch {
    return ''
  }
}
export const saveName = (n: string) => {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(TYPING_LS.name, n.slice(0, 24))
  } catch {
    /* ignore */
  }
}

/* ------------------------------------------------------------------ */
/* Streaks                                                             */
/* ------------------------------------------------------------------ */

export function todayKey(d = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function loadDays(): string[] {
  const d = read<string[]>(TYPING_LS.days, [])
  return Array.isArray(d) ? d : []
}

export function saveDays(days: string[]) {
  write(TYPING_LS.days, Array.from(new Set(days)).sort().slice(-400))
}

/** consecutive-day streak ending today or yesterday */
export function streakFromDays(days: string[]): number {
  if (days.length === 0) return 0
  const set = new Set(days)
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(today.getDate() - 1)
  if (!set.has(todayKey(today)) && !set.has(todayKey(yesterday))) return 0
  let streak = 0
  const cursor = new Date(today)
  if (!set.has(todayKey(cursor))) cursor.setDate(cursor.getDate() - 1)
  while (set.has(todayKey(cursor))) {
    streak++
    cursor.setDate(cursor.getDate() - 1)
  }
  return streak
}

/* ------------------------------------------------------------------ */
/* PB keys                                                            */
/* ------------------------------------------------------------------ */

/** modifiers only count on modes where they change the text */
export function effectiveMods(cfg: TestConfig): string[] {
  const textMods = cfg.mode === 'time' || cfg.mode === 'words' ? [cfg.mods.punc && 'punc', cfg.mods.nums && 'nums'] : []
  const ruleMods = [cfg.mods.iron && 'iron', cfg.mods.blind && 'blind', cfg.mods.peek && 'peek']
  return [...textMods, ...ruleMods].filter(Boolean) as string[]
}

export function pbKey(cfg: TestConfig): string {
  const base =
    cfg.mode === 'course'
      ? `course-${cfg.param}`
      : cfg.mode === 'time' || cfg.mode === 'words'
      ? `${cfg.mode}-${cfg.param}`
        : cfg.mode === 'quote' || cfg.mode === 'code'
          ? `${cfg.mode}-${cfg.param}`
          : cfg.mode === 'drill'
            ? `drill-${cfg.param}`
            : 'custom'
  const mods = effectiveMods(cfg).filter((m) => m !== 'punc' && m !== 'nums')
  const textMods = effectiveMods(cfg).filter((m) => m === 'punc' || m === 'nums')
  const parts = [base, ...textMods, ...mods]
  return parts.join('+')
}

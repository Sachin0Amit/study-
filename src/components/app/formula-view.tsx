'use client'

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ChevronDown,
  FileText,
  Printer,
  Search,
  Sigma,
  Star,
  ArrowUpRight,
  Check,
  PenLine,
} from 'lucide-react'
import { LIBRARY_BOOKS, LIBRARY_CHAPTERS, getChapter } from '@/data/library'
import { FORMULAS, formulasForChapter, TOTAL_FORMULAS, type FormulaEntry } from '@/data/formulas'
import { ChapterIcon } from './chapter-icon'
import { TeX } from '../math'
import { RichText } from '../rich-text'
import { EasyBox } from './easy-box'
import { useStudy } from '@/store/useStudy'

/** Jump from a formula back to its source lesson */
/** 'rosen-ch10' / 'osc-ch5' + section '5.3' -> 'osc-ch5-s3' (3rd section of the chapter) */
function sectionKeyOf(entry: FormulaEntry): string | null {
  const ch = Number(entry.chapterId.replace(/^[a-z]+-ch/, ''))
  const sec = Number(entry.section.split('.')[1])
  return Number.isFinite(ch) && Number.isFinite(sec) ? `${entry.chapterId}-s${sec}` : null
}

/** Stable key for a formula — must match the API-side derivation exactly */
function formulaKeyOf(entry: FormulaEntry): string {
  return `${entry.chapterId}|${entry.section}|${entry.name}`
}

// ---------- markdown-lite rendering for personal notes ----------

/** One parsed inline segment of a personal note */
type NoteSegment = { kind: 'text' | 'bold' | 'em'; text: string }

/**
 * Markdown-lite tokenizer: **bold** and *italic* segments.
 * A marker only pairs when it wraps non-empty content that neither starts
 * nor ends with whitespace — so stray asterisks ("2 * 3", "a ** b") render
 * literally instead of swallowing text. Unmatched markers fall through as
 * plain text. Nothing is converted to HTML — we emit React elements only.
 */
function parseNoteSegments(text: string): NoteSegment[] {
  const segments: NoteSegment[] = []
  let plain = ''
  let i = 0
  const flush = () => {
    if (plain) {
      segments.push({ kind: 'text', text: plain })
      plain = ''
    }
  }
  /** index of the closing `marker` for a run opening at i, or -1 when invalid */
  const closing = (marker: string): number => {
    const end = text.indexOf(marker, i + marker.length)
    if (end < 0) return -1
    const inner = text.slice(i + marker.length, end)
    if (!inner || /^\s/.test(inner) || /\s$/.test(inner)) return -1
    return end
  }
  while (i < text.length) {
    if (text[i] !== '*') {
      plain += text[i]
      i += 1
      continue
    }
    const marker = text.startsWith('**', i) ? '**' : '*'
    const end = closing(marker)
    if (end < 0) {
      plain += marker // unmatched — keep the asterisk(s) literally
      i += marker.length
      continue
    }
    flush()
    segments.push({ kind: marker === '**' ? 'bold' : 'em', text: text.slice(i + marker.length, end) })
    i = end + marker.length
  }
  flush()
  return segments
}

/** Render a note's **bold** / *italic* markup as safe React nodes (no HTML string) */
function renderNoteMarkdown(text: string): ReactNode[] {
  return parseNoteSegments(text).map((seg, i) => {
    if (seg.kind === 'bold') {
      return (
        <strong key={i} className="font-semibold not-italic text-teal-200">
          {seg.text}
        </strong>
      )
    }
    if (seg.kind === 'em') {
      return (
        <em key={i} className="text-teal-100">
          {seg.text}
        </em>
      )
    }
    return <span key={i}>{seg.text}</span>
  })
}

/** The derivation expander — step-by-step proof lines behind a toggle.
 *  Steps support $...$ math; numbered like a worked argument; expands in print. */
function DerivationExpander({ steps }: { steps: string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-primary/90 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 print:hidden"
      >
        <Sigma className="h-3.5 w-3.5" aria-hidden />
        {open ? 'Hide derivation' : `Derivation — ${steps.length} steps`}
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      {open && (
        <motion.ol
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="mt-2 space-y-1.5 border-l-2 border-primary/25 pl-3.5"
        >
          {steps.map((step, i) => (
            <li key={i} className="flex gap-2.5 text-[12px] leading-relaxed text-foreground/90">
              <span className="w-4 shrink-0 pt-[0.1rem] text-right font-mono text-[10.5px] font-semibold text-primary/70">
                {i + 1}.
              </span>
              <RichText text={step} className="block" />
            </li>
          ))}
        </motion.ol>
      )}
      {/* print always shows the derivation — it is the cheat sheet's spine */}
      <ol className="mt-2 hidden space-y-1 pl-3.5 print:block">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-2 text-[11px] leading-snug text-black">
            <span className="w-4 shrink-0 text-right font-mono text-[10px] font-semibold text-zinc-600">{i + 1}.</span>
            <RichText text={step} className="block" />
          </li>
        ))}
      </ol>
    </div>
  )
}

/** Easy meaning under every formula — respects global Easy toggle. */
function EasyFormulaHelp({ name, formula, note }: { name: string; formula: string; note?: string }) {
  const easyMode = useStudy((s) => s.easyMode)
  if (!easyMode) return null
  return (
    <div className="print:hidden">
      <EasyBox variant="concept" term={name} statement={formula} detail={note} defaultOpen={false} />
    </div>
  )
}

export function FormulaView({ chapterId }: { chapterId?: string }) {
  const navigate = useStudy((s) => s.navigate)
  const deviceId = useStudy((s) => s.deviceId)
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const [active, setActive] = useState<string>(chapterId ?? 'all')
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  // formulaKey → personal annotation (per device), loaded alongside favorites
  const [notes, setNotes] = useState<Record<string, string>>({})
  // inline note editor state — only one editor open at a time
  const [editingKey, setEditingKey] = useState<string | null>(null)
  const [draft, setDraft] = useState('')
  // transient "saved ✓" confirmation next to the freshly saved note
  const [savedFlash, setSavedFlash] = useState<string | null>(null)
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // load pinned favorites + personal notes for this device (createdAt asc, order preserved by the Set)
  useEffect(() => {
    const id = deviceId ?? ensureDevice()
    let cancelled = false
    fetch(`/api/formula-favorites?deviceId=${encodeURIComponent(id)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (cancelled || !d) return
        if (Array.isArray(d?.favorites)) setFavorites(new Set(d.favorites as string[]))
        if (d?.notes && typeof d.notes === 'object') setNotes(d.notes as Record<string, string>)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [deviceId, ensureDevice])

  // clear the pending saved-flash timer on unmount
  useEffect(() => () => {
    if (flashTimer.current) clearTimeout(flashTimer.current)
  }, [])

  /** Optimistic pin/unpin — POST or DELETE fire-and-forget, rollback on failure.
   *  Unpinning deletes the row (and its note) server-side — mirror that locally. */
  const toggleFavorite = (f: FormulaEntry) => {
    const key = formulaKeyOf(f)
    const prev = favorites
    const prevNotes = notes
    const next = new Set(prev)
    if (next.has(key)) next.delete(key)
    else next.add(key)
    setFavorites(next)
    if (!next.has(key)) {
      // unstar removes the whole row incl. the personal note
      const nextNotes = { ...notes }
      delete nextNotes[key]
      setNotes(nextNotes)
      if (editingKey === key) setEditingKey(null)
    }
    const id = deviceId ?? ensureDevice()
    fetch('/api/formula-favorites', {
      method: next.has(key) ? 'POST' : 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ deviceId: id, formulaKey: key }),
    }).catch(() => {
      setFavorites(prev)
      setNotes(prevNotes)
    })
  }

  /** Open/close the inline note editor for a formula (cancels silently) */
  const toggleNoteEditor = (f: FormulaEntry) => {
    const key = formulaKeyOf(f)
    if (editingKey === key) {
      setEditingKey(null)
      return
    }
    setEditingKey(key)
    setDraft(notes[key] ?? '')
  }

  /** Tiny "saved ✓" confirmation that fades out after ~1.6s */
  const flashSaved = (key: string) => {
    setSavedFlash(key)
    if (flashTimer.current) clearTimeout(flashTimer.current)
    flashTimer.current = setTimeout(() => setSavedFlash(null), 1600)
  }

  /** Optimistic note save — PUT upserts the row (auto-pins on the server).
   *  Rollback notes+favorites on failure, same pattern as toggleFavorite. */
  const saveNote = (f: FormulaEntry) => {
    const key = formulaKeyOf(f)
    const note = draft.trim().slice(0, 500)
    if (!note && !notes[key]) {
      setEditingKey(null) // nothing to save — behave like cancel
      return
    }
    const prevNotes = notes
    const prevFavorites = favorites
    const nextNotes = { ...notes }
    if (note) nextNotes[key] = note
    else delete nextNotes[key]
    const nextFavorites = new Set(favorites)
    if (note) nextFavorites.add(key) // saving a note implicitly pins the formula
    setNotes(nextNotes)
    setFavorites(nextFavorites)
    setEditingKey(null)
    const id = deviceId ?? ensureDevice()
    fetch('/api/formula-favorites', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ deviceId: id, formulaKey: key, note }),
    })
      .then((r) => {
        if (!r.ok) throw new Error('note save failed')
        if (note) flashSaved(key)
      })
      .catch(() => {
        setNotes(prevNotes)
        setFavorites(prevFavorites)
      })
  }

  const chapter = getChapter(active)
  const entries = useMemo(() => {
    const base =
      active === 'all'
        ? FORMULAS
        : active === 'pinned'
          ? FORMULAS.filter((f) => favorites.has(formulaKeyOf(f)))
          : formulasForChapter(active)
    const q = query.trim().toLowerCase()
    if (!q) return base
    return base.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.formula.toLowerCase().includes(q) ||
        (f.note ?? '').toLowerCase().includes(q) ||
        (notes[formulaKeyOf(f)] ?? '').toLowerCase().includes(q)
    )
  }, [active, query, favorites, notes])

  // group entries by section number for tidy layout
  const grouped = useMemo(() => {
    const groups: { section: string; items: FormulaEntry[] }[] = []
    for (const f of entries) {
      const last = groups[groups.length - 1]
      if (last && last.section === f.section) last.items.push(f)
      else groups.push({ section: f.section, items: [f] })
    }
    return groups
  }, [entries])

  const isAll = active === 'all'
  const isPinned = active === 'pinned'
  const pinnedCount = favorites.size
  const pinnedWithNotes = useMemo(
    () => Array.from(favorites).filter((k) => (notes[k] ?? '').length > 0).length,
    [favorites, notes]
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="sv-print-sheet relative mb-8 overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8 print:rounded-none print:border-0 print:border-b"
      >
        <div className="absolute inset-0 sv-hero-glow opacity-40 print:hidden" />
        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-3.5 py-1.5 text-xs font-semibold text-amber-200 print:hidden">
                <Sigma className="h-3.5 w-3.5" /> {TOTAL_FORMULAS} formulas · one page
                {pinnedCount > 0 ? ` · ${pinnedCount} pinned` : ''}
              </div>
              <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
                Formula sheet
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Every identity, bound and counting fact from the book — curated, searchable and
                printable. Print it, pin it above your desk.
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(245,158,11,0.35)] transition-all hover:bg-amber-500/85 dark:bg-amber-300 dark:text-amber-950 dark:hover:bg-amber-200 print:hidden"
            >
              <Printer className="h-4 w-4" />
              Print / Save PDF
            </button>
          </div>
        </div>
      </motion.div>

      {/* controls — hidden in print */}
      <div className="mb-6 print:hidden">
        {/* search */}
        <div className="relative mb-4">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search formulas — try “De Morgan”, “pigeonhole”, “Bayes”…"
            aria-label="Search formulas"
            className="w-full rounded-xl border border-border/80 bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-amber-300/50 focus:outline-none"
          />
        </div>

        {/* chapter pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActive('pinned')}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
              isPinned
                ? 'border-amber-300/50 bg-amber-300/15 text-amber-200'
                : 'border-border/80 bg-card text-muted-foreground hover:border-amber-300/30 hover:text-foreground'
            }`}
          >
            <Star fill="currentColor" className="h-3 w-3" />
            Pinned · {pinnedCount}
            {pinnedWithNotes > 0 && (
              <span className="font-normal text-teal-300/90">
                · {pinnedWithNotes} with notes
              </span>
            )}
          </button>
          <button
            onClick={() => setActive('all')}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
              isAll
                ? 'border-amber-300/50 bg-amber-300/15 text-amber-200'
                : 'border-border/80 bg-card text-muted-foreground hover:border-amber-300/30 hover:text-foreground'
            }`}
          >
            All chapters · {TOTAL_FORMULAS}
          </button>
          {LIBRARY_CHAPTERS.map((ch) => (
            <button
              key={ch.id}
              onClick={() => setActive(ch.id)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                active === ch.id
                  ? 'border-amber-300/50 bg-amber-300/15 text-amber-200'
                  : 'border-border/80 bg-card text-muted-foreground hover:border-amber-300/30 hover:text-foreground'
              }`}
            >
              <span className="font-mono text-[10px] opacity-70">CH {ch.number}</span>
              {ch.shortTitle}
            </button>
          ))}
        </div>
      </div>

      {/* sheet title (visible always; in print acts as document header) */}
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-bold tracking-tight">
          {isPinned ? 'Pinned formulas' : isAll ? 'All chapters' : `Chapter ${chapter?.number} — ${chapter?.shortTitle}`}
          <span className="ml-3 font-mono text-xs font-normal text-muted-foreground">
            {entries.length} formulas{query ? ` matching “${query.trim()}”` : ''}
          </span>
        </h2>
        {chapter && (
          <button
            onClick={() => navigate({ name: 'chapter', chapterId: chapter.id })}
            className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-emerald-300 print:hidden"
          >
            Open chapter <ArrowUpRight className="h-3 w-3" />
          </button>
        )}
      </div>

      {/* formula groups */}
      <div className="sv-print-sheet grid gap-3 md:grid-cols-2">
        {grouped.map((g, gi) => (
          <div key={`${g.section}-${gi}`} className="contents">
            {g.items.map((f, i) => {
              const target = sectionKeyOf(f)
              const fKey = formulaKeyOf(f)
              const isFav = favorites.has(fKey)
              const personalNote = notes[fKey] ?? ''
              const hasNote = personalNote.length > 0
              const isEditing = editingKey === fKey
              return (
                <motion.div
                  key={`${f.chapterId}-${f.name}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-xl border border-border/80 bg-card p-4 print:break-inside-avoid print:rounded-lg print:border-zinc-300"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[13px] font-bold leading-tight">{f.name}</span>
                    <span className="flex shrink-0 items-center gap-1">
                      <button
                        onClick={() => toggleNoteEditor(f)}
                        aria-label={isEditing ? 'Close note editor' : hasNote ? 'Edit personal note' : 'Add personal note'}
                        title={hasNote ? 'Edit personal note' : 'Add a personal note'}
                        className={`flex h-7 w-7 items-center justify-center rounded-md transition-all focus-visible:opacity-100 focus-visible:outline-none print:hidden ${
                          hasNote
                            ? 'opacity-100 hover:bg-amber-300/10'
                            : 'opacity-100 hover:bg-amber-300/10 sm:opacity-0 sm:group-hover:opacity-100'
                        }`}
                      >
                        <PenLine
                          className={`h-4 w-4 transition-colors ${
                            hasNote
                              ? 'text-amber-300'
                              : 'text-muted-foreground/60 hover:text-amber-300'
                          }`}
                        />
                      </button>
                      <button
                        onClick={() => toggleFavorite(f)}
                        aria-label={isFav ? 'Unpin formula' : 'Pin formula'}
                        className={`flex h-7 w-7 items-center justify-center rounded-md transition-all focus-visible:opacity-100 focus-visible:outline-none print:hidden ${
                          isFav
                            ? 'opacity-100 hover:bg-amber-300/10'
                            : 'opacity-0 hover:bg-amber-300/10 group-hover:opacity-100'
                        }`}
                      >
                        <Star
                          fill="currentColor"
                          className={`h-4 w-4 transition-colors ${
                            isFav
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-muted-foreground/60 hover:text-amber-300'
                          }`}
                        />
                      </button>
                      <span className="sv-print-chip shrink-0 rounded-full border border-border/70 bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                        §{f.section}
                      </span>
                    </span>
                  </div>
                  {f.latex ? (
                    <TeX tex={f.latex} display className="mt-2 text-left text-[15px] print:text-black" />
                  ) : (
                    <p className="mt-2 font-mono text-[13.5px] leading-relaxed text-emerald-100/95 print:text-black">
                      {f.formula}
                    </p>
                  )}
                  {/* step-by-step derivation — where the formula comes from */}
                  {f.derive?.length ? <DerivationExpander steps={f.derive} /> : null}
                  {/* easy meaning for every formula — simple words, same formula */}
                  <EasyFormulaHelp name={f.name} formula={f.formula} note={f.note} />
                  {f.note && (
                    <p className="mt-1.5 border-t border-dashed border-border/60 pt-1.5 text-[11.5px] leading-relaxed text-muted-foreground">
                      {f.note}
                    </p>
                  )}
                  {/* personal annotation — printable (personalized cheat-sheet) */}
                  {hasNote && !isEditing && (
                    <div className="mt-1.5 border-t border-dashed border-teal-300/25 pt-1.5">
                      <p className="border-l-2 border-teal-400/40 pl-2.5 text-[11.5px] italic leading-[1.7] text-teal-200/90">
                        <PenLine
                          aria-hidden="true"
                          className="mr-1 inline h-3 w-3 align-[-1px] text-teal-300/80"
                        />
                        <span className="font-semibold not-italic text-teal-300/90">Your note:</span>{' '}
                        {renderNoteMarkdown(personalNote)}
                        {savedFlash === fKey && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="ml-1.5 rounded-full border border-amber-300/30 bg-amber-300/10 px-1.5 py-px font-mono text-[9.5px] font-medium not-italic tracking-wide text-amber-300/90 print:hidden"
                          >
                            saved ✓
                          </motion.span>
                        )}
                      </p>
                    </div>
                  )}
                  {/* inline note editor — hidden in print */}
                  {isEditing && (
                    <div className="mt-2 print:hidden">
                      <textarea
                        autoFocus
                        rows={2}
                        maxLength={500}
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        onFocus={(e) =>
                          // put the caret at the end when (re)entering the editor
                          e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)
                        }
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') {
                            setEditingKey(null)
                          } else if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                            e.preventDefault()
                            saveNote(f)
                          }
                        }}
                        placeholder="Your note — mnemonic, when to use, gotcha…"
                        aria-label={`Personal note for ${f.name}`}
                        className="w-full resize-none rounded-lg border border-border/80 bg-muted/30 px-2.5 py-2 text-[12px] leading-relaxed text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-amber-300/50 focus:outline-none"
                      />
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        <button
                          onClick={() => saveNote(f)}
                          className="inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground transition-opacity hover:opacity-85"
                        >
                          <Check className="h-3 w-3" /> Save
                        </button>
                        <button
                          onClick={() => setEditingKey(null)}
                          className="rounded-md px-2 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Cancel
                        </button>
                        <span className="font-mono text-[10px] text-muted-foreground/70">
                          supports **bold**
                        </span>
                        <span className="ml-auto hidden font-mono text-[10px] text-muted-foreground/50 sm:inline">
                          ⌘↵ save · esc cancel
                        </span>
                      </div>
                    </div>
                  )}
                  {target && (
                    <button
                      onClick={() => navigate({ name: 'lesson', sectionId: target })}
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground/70 opacity-0 transition-all hover:text-emerald-300 focus-visible:opacity-100 group-hover:opacity-100 print:hidden"
                    >
                      <FileText className="h-3 w-3" /> Study §{f.section}
                    </button>
                  )}
                </motion.div>
              )
            })}
          </div>
        ))}
      </div>

      {isPinned && favorites.size === 0 ? (
        <div className="rounded-2xl border border-dashed border-border/80 bg-card/40 p-10 text-center print:hidden">
          <Star className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <p className="mt-3 text-sm font-medium text-muted-foreground">
            No pinned formulas yet — tap the star on any formula to pin it here.
          </p>
        </div>
      ) : entries.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border/80 bg-card/40 p-10 text-center print:hidden">
          <Search className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <h3 className="mt-3 text-base font-semibold">No formulas match</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Try a shorter query — e.g. “Euler”, “gcd”, “C(n”.
          </p>
        </div>
      )}

      {/* print footer note */}
      <div className="mt-8 hidden print:block">
        <p className="text-center text-[10px] text-zinc-500">
          StudyVerse · {LIBRARY_BOOKS.map((b) => b.title).join(' + ')} · {TOTAL_FORMULAS} curated formulas
        </p>
      </div>

      {/* back link */}
      <div className="mt-8 print:hidden">
        <button
          onClick={() => navigate(chapter ? { name: 'chapter', chapterId: chapter.id } : { name: 'library' })}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {chapter ? `Back to Ch ${chapter.number}` : 'Back to library'}
        </button>
      </div>
    </div>
  )
}

/** Small badge listing chapters covered — used in library view marketing strip */
export function FormulaSheetBadge() {
  const navigate = useStudy((s) => s.navigate)
  return (
    <button
      onClick={() => navigate({ name: 'formulas' })}
      className="sv-card-glow group flex items-center gap-3 rounded-xl border border-border/80 bg-card p-4 text-left"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-300/30 bg-amber-300/10">
        <Check className="h-4.5 w-4.5 text-amber-300" />
      </span>
      <span className="min-w-0">
        <span className="block text-[14px] font-semibold">Formula sheet</span>
        <span className="block text-xs text-muted-foreground">
          {TOTAL_FORMULAS} printable formulas — one page per chapter
        </span>
      </span>
    </button>
  )
}

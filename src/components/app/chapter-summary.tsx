'use client'

import { useMemo } from 'react'
import { Check, Clock, Layers, ListChecks, Target } from 'lucide-react'
import { LIBRARY_BOOKS, getChapter, getSections } from '@/data/library'
import type { SectionContent, SectionMeta } from '@/data/library'
import { useAllContent } from '@/hooks/use-content'
import { ChapterIcon } from './chapter-icon'
import { RichText } from '../rich-text'

// Short edition suffix: "Eighth Edition" -> "8e" (falls back to the raw string)
const ORDINALS: Record<string, string> = {
  first: '1e',
  second: '2e',
  third: '3e',
  fourth: '4e',
  fifth: '5e',
  sixth: '6e',
  seventh: '7e',
  eighth: '8e',
  ninth: '9e',
  tenth: '10e',
  eleventh: '11e',
  twelfth: '12e',
  thirteenth: '13e',
}

function editionShort(edition?: string): string {
  if (!edition) return ''
  const key = edition.trim().split(/\s+/)[0]?.toLowerCase() ?? ''
  return ORDINALS[key] ?? edition
}

interface SectionEntry {
  sec: SectionMeta
  content: SectionContent
}

/**
 * Compact cheat-sheet style summary of a whole chapter:
 * every section's objectives + key takeaways on one printable sheet.
 * On screen it lives inside the modal rendered by chapter-view; in print it
 * flattens to a clean black-on-white A4 sheet (see globals.css print block).
 */
export function ChapterSummary({ chapterId }: { chapterId: string }) {
  /* lesson corpus arrives by runtime fetch (kept out of the bundle) */
  const allContent = useAllContent()
  // sections with a matching master-content entry; missing entries are skipped
  const entries = useMemo<SectionEntry[]>(() => {
    const byId = new Map<string, SectionContent>(
      (allContent ?? []).map((c) => [c.sectionId, c] as [string, SectionContent]),
    )
    return getSections(chapterId)
      .map((sec) => ({ sec, content: byId.get(sec.id) }))
      .filter((e): e is SectionEntry => e.content != null)
  }, [chapterId, allContent])

  const chapter = getChapter(chapterId)
  if (!chapter) return null
  const book = LIBRARY_BOOKS.find((b) => b.id === chapter.bookId)

  const totalMinutes = entries.reduce((sum, e) => sum + e.content.readingTime, 0)
  const objectiveCount = entries.reduce((n, e) => n + e.content.objectives.length, 0)
  const takeawayCount = entries.reduce((n, e) => n + e.content.keyTakeaways.length, 0)

  const authorLast = (book?.author ?? '').trim().split(/\s+/).pop() ?? ''
  const edition = editionShort(book?.edition)
  const sourceLine = [
    authorLast,
    book ? `${book.title}${edition ? ` (${edition})` : ''}` : null,
  ]
    .filter(Boolean)
    .join(', ')

  return (
    <div className="sv-summary-sheet">
      {/* ---------- sheet header ---------- */}
      <header className="sv-summary-header mb-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-4 sm:p-5">
        <div className="flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 print:hidden">
            <ChapterIcon icon={chapter.icon} className="h-5 w-5 text-emerald-300" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300/80">
              {book ? `${book.title} · ` : ''}Chapter {chapter.number} · pages {chapter.pages}
            </div>
            <h2 className="sv-summary-title mt-1 text-xl font-bold leading-tight tracking-tight sm:text-2xl">
              {chapter.title}
            </h2>
            <div className="sv-summary-meta mt-2.5 flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Layers className="h-3 w-3 text-teal-300/80" aria-hidden />
                {entries.length} sections
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3 text-teal-300/80" aria-hidden />
                ~{totalMinutes} min total
              </span>
              <span className="inline-flex items-center gap-1">
                <Target className="h-3 w-3 text-emerald-300/80" aria-hidden />
                {objectiveCount} objectives
              </span>
              <span className="inline-flex items-center gap-1">
                <ListChecks className="h-3 w-3 text-amber-300/80" aria-hidden />
                {takeawayCount} takeaways
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- per-section objectives + takeaways ---------- */}
      {entries.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border/80 p-8 text-center text-sm text-muted-foreground">
          No lesson content recorded for this chapter yet.
        </div>
      ) : (
        <div className="sv-summary-sections grid gap-3">
          {entries.map(({ sec, content }) => (
            <section
              key={sec.id}
              className="sv-summary-section break-inside-avoid rounded-xl border border-border/80 bg-card/60 p-3.5 sm:p-4"
            >
              <div className="flex items-baseline gap-2">
                <span className="shrink-0 font-mono text-xs font-bold text-emerald-300">
                  §{sec.number}
                </span>
                <h3 className="min-w-0 flex-1 text-[13.5px] font-semibold leading-snug">
                  {sec.title}
                </h3>
                <span className="ml-auto shrink-0 font-mono text-[10px] text-muted-foreground">
                  ~{content.readingTime} min
                </span>
              </div>

              <div className="sv-summary-cols mt-2.5 grid gap-3 sm:grid-cols-2">
                {content.objectives.length > 0 && (
                  <div className="min-w-0">
                    <div className="sv-summary-label text-[9.5px] font-bold uppercase tracking-[0.16em] text-teal-300/90">
                      Objectives
                    </div>
                    <ul className="sv-summary-list mt-1.5 grid gap-1">
                      {content.objectives.map((o, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-1.5 text-[12px] leading-relaxed text-foreground/85"
                        >
                          <span
                            aria-hidden
                            className="mt-[3px] shrink-0 text-[10px] leading-none text-teal-300"
                          >
                            •
                          </span>
                          <span className="min-w-0"><RichText text={o} /></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {content.keyTakeaways.length > 0 && (
                  <div className="min-w-0">
                    <div className="sv-summary-label text-[9.5px] font-bold uppercase tracking-[0.16em] text-amber-300/90">
                      Key takeaways
                    </div>
                    <ul className="sv-summary-list mt-1.5 grid gap-1">
                      {content.keyTakeaways.map((t, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-1.5 text-[12px] leading-relaxed text-foreground/85"
                        >
                          <Check
                            aria-hidden
                            className="mt-0.5 h-3 w-3 shrink-0 text-emerald-400"
                          />
                          <span className="min-w-0"><RichText text={t} /></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* ---------- print-only provenance footer ---------- */}
      <div className="mt-6 hidden print:block">
        <p className="text-center text-[9.5px] text-zinc-500">
          {sourceLine ? `${sourceLine} · ` : ''}Chapter {chapter.number} summary · generated by
          StudyVerse
        </p>
      </div>
    </div>
  )
}

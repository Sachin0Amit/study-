'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, BookMarked, BookOpen, Clock, Layers, Play } from 'lucide-react'
import { getBook, getChapters, LIBRARY_SECTIONS, LIBRARY_SUBJECTS } from '@/data/library'
import { INTERACTIVE_META } from '@/components/interactives/registry'
import { easyBookLine, easyChapterLine } from '@/data/easy-library'
import { EasyBox, EasyLine } from './easy-box'
import { ChapterIcon } from './chapter-icon'
import { TiltCard } from './tilt-card'
import { useStudy } from '@/store/useStudy'

export function BookView({ bookId }: { bookId: string }) {
  const navigate = useStudy((s) => s.navigate)
  const progress = useStudy((s) => s.progress)
  const easyMode = useStudy((s) => s.easyMode)
  const book = getBook(bookId)
  if (!book) return null
  const chapters = getChapters(bookId)
  const subject = LIBRARY_SUBJECTS.find((s) => s.id === book.subjectId)
  const sectionsOf = (cid: string) => LIBRARY_SECTIONS.filter((s) => s.chapterId === cid)

  const doneCount = (cid: string) =>
    sectionsOf(cid).filter((s) => progress[s.id]?.status === 'completed').length

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <button
        onClick={() => navigate({ name: 'library' })}
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Library
      </button>

      {/* Book hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-10 overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8"
      >
        <div className="absolute inset-0 sv-hero-glow opacity-60" />
        <div className="absolute inset-0 sv-grid-bg opacity-25" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
          {/* stylized cover */}
          <div className="relative mx-auto w-32 shrink-0 sm:mx-0 sm:w-36" style={{ perspective: '900px' }}>
            <div
              className="sv-float relative aspect-[3/4] rounded-lg border border-emerald-400/30 bg-gradient-to-br from-emerald-950 via-[oklch(0.22_0.05_165)] to-[oklch(0.16_0.03_165)] p-4 shadow-2xl"
              style={{ transform: 'rotateY(-14deg) rotateX(4deg)' }}
            >
              <div className="flex h-full flex-col justify-between">
                <BookOpen className="h-6 w-6 text-emerald-300/90" />
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-300/70">
                    {book ? `${book.author.split(',')[0]} · ${book.edition?.replace(' Edition', '')}` : ''}
                  </div>
                  <div className="mt-1 text-[13px] font-bold leading-tight text-emerald-50">
                    {book?.title ?? 'StudyVerse Book'}
                  </div>
                  <div className="mt-1 text-[10px] text-emerald-200/50">{book ? `${book.pages} pages · ${getChapters(book.id).length} chapters` : ""}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              {subject?.name} · {book.edition}
            </div>
            <h1 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
              {book.title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {book.description}
            </p>
            {easyMode && (
              <div className="mt-3 max-w-2xl">
                <EasyBox variant="text" text={easyBookLine(book)} defaultOpen={false} />
              </div>
            )}
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1">
                <Layers className="h-3 w-3" /> {chapters.length} chapters
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1">
                <BookOpen className="h-3 w-3" /> {chapters.reduce((acc, c) => acc + sectionsOf(c.id).length, 0)} lessons
              </span>
              {chapters.some((c) => !!INTERACTIVE_META[c.interactiveKey]) && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-emerald-200">
                  <Play className="h-3 w-3" /> {chapters.filter((c) => !!INTERACTIVE_META[c.interactiveKey]).length} labs
                </span>
              )}
            </div>
            {book.sources && book.sources.length > 0 && (
              <div className="mt-5 rounded-xl border border-border/70 bg-muted/30 p-3.5">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  <BookMarked className="h-3 w-3" /> Master volume — merged from {book.sources.length}{' '}
                  {book.sources.length === 1 ? 'source' : 'sources'}
                </div>
                <ul className="mt-2 space-y-1">
                  {book.sources.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-[12px] leading-snug text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400/70" aria-hidden />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Chapter grid */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {chapters.map((ch, i) => {
          const secs = sectionsOf(ch.id)
          const done = doneCount(ch.id)
          const pct = secs.length ? Math.round((done / secs.length) * 100) : 0
          const tool = INTERACTIVE_META[ch.interactiveKey]
          return (
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.4) }}
            >
              <TiltCard className="cursor-pointer rounded-2xl">
                <button
                  onClick={() => navigate({ name: 'chapter', chapterId: ch.id })}
                  className="sv-card-glow sv-tilt-inner block w-full rounded-2xl border border-border/80 bg-card p-5 text-left"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10">
                        <ChapterIcon icon={ch.icon} className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div>
                        <div className="font-mono text-[11px] font-bold text-emerald-300/80">
                          Chapter {ch.number} · {ch.pages}
                        </div>
                        <h3 className="text-[15px] font-bold leading-snug">{ch.shortTitle}</h3>
                      </div>
                    </div>
                    <div className="relative h-10 w-10 shrink-0" aria-hidden>
                      <svg viewBox="0 0 36 36" className="h-10 w-10 -rotate-90">
                        <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="3" className="text-muted/30" />
                        <circle
                          cx="18"
                          cy="18"
                          r="15"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray={`${(pct / 100) * 94.2} 94.2`}
                          className="text-emerald-400 transition-all duration-700"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] font-bold text-emerald-300">
                        {pct}%
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
                    {ch.description}
                  </p>
                  <EasyLine text={easyChapterLine(ch)} />

                  {tool && (
                    <div className="mt-4 flex items-center gap-2 rounded-lg border border-amber-300/20 bg-amber-300/[0.07] px-3 py-2">
                      <Play className="h-3.5 w-3.5 shrink-0 text-amber-300" />
                      <span className="truncate text-xs font-medium text-amber-200/90">{tool.title}</span>
                    </div>
                  )}

                  <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="font-mono">{secs.length} sections</span>
                    <span className="inline-flex items-center gap-1">
                      {tool ? (
                        <>
                          <Play className="h-3 w-3 text-amber-300" /> Interactive lab
                        </>
                      ) : (
                        <>
                          <BookOpen className="h-3 w-3 text-emerald-400" /> Master notes & quiz
                        </>
                      )}
                    </span>
                  </div>
                </button>
              </TiltCard>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

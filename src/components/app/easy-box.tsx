'use client'

import { useState } from 'react'
import { Lightbulb, ChevronDown, Sparkles } from 'lucide-react'
import { explainEasy, easyExample, easyQuiz } from '@/lib/easy'
import { useStudy } from '@/store/useStudy'

/**
 * EasyBox — super-simple explanation shown EVERYWHERE.
 * Yellow soft box, always easy words, no jargon.
 * - variant "concept": needs term + statement + detail?
 * - variant "example": needs problem
 * - variant "quiz": needs explanation
 * - variant "text": needs text (takeaway / derivation / anything)
 */
export function EasyBox({
  variant,
  term,
  statement,
  detail,
  problem,
  explanation,
  text,
  defaultOpen = true,
}: {
  variant: 'concept' | 'example' | 'quiz' | 'text'
  term?: string
  statement?: string
  detail?: string
  problem?: string
  explanation?: string
  text?: string
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  let lines: string[] = []
  if (variant === 'concept') {
    const e = explainEasy(term ?? 'Idea', statement ?? '', detail)
    lines = [e.oneLine, e.analogy, e.remember]
  } else if (variant === 'example') {
    lines = [easyExample(problem ?? '')]
  } else if (variant === 'quiz') {
    lines = [easyQuiz(explanation ?? '')]
  } else {
    lines = [`In easy words: ${text ?? ''}`]
  }

  return (
    <div className="mt-3 rounded-xl border border-amber-400/30 bg-amber-400/[0.07] print:border-zinc-300 print:bg-zinc-50">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center gap-2 px-3.5 py-2.5 text-left"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400/20">
          <Lightbulb className="h-3.5 w-3.5 text-amber-600 dark:text-amber-300" />
        </span>
        <span className="text-[12.5px] font-bold text-amber-700 dark:text-amber-200">
          Easy meaning — read this first
        </span>
        <ChevronDown
          className={`ml-auto h-3.5 w-3.5 text-amber-600/70 transition-transform dark:text-amber-300/70 ${open ? '' : '-rotate-90'}`}
        />
      </button>
      {open && (
        <ul className="space-y-1.5 px-3.5 pb-3.5 pl-11">
          {lines.map((l, i) => (
            <li key={i} className="text-[13.5px] leading-relaxed text-foreground/90">
              {i === 0 ? '👉 ' : i === 1 ? '💡 ' : '⭐ '}
              {l}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** Small banner on top of every lesson: what to do in 3 steps. Always easy. */
export function EasyStart({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.06] p-4 print:hidden">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15">
        <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
      </span>
      <div className="text-[13.5px] leading-relaxed">
        <p className="font-bold text-emerald-700 dark:text-emerald-200">
          How to read “{title}” — super easy way
        </p>
        <p className="mt-1 text-foreground/85">
          1. Read only the <b>yellow boxes</b> first — they give the idea in simple words.
          2. Then read the main text slowly, one idea at a time.
          3. Then try the lab + quiz. Mistakes are OK — that is how you learn.
        </p>
      </div>
    </div>
  )
}

/**
 * EasyLine — one-line easy hint safe INSIDE clickable cards.
 * No button inside, so no nested-button HTML error.
 * Shows only when easyMode is ON (reads store itself).
 */
export function EasyLine({ text }: { text: string }) {
  const easyMode = useStudy((s) => s.easyMode)
  if (!easyMode) return null
  return (
    <p
      className="mt-2 flex items-start gap-1.5 text-[12px] leading-relaxed text-amber-700 dark:text-amber-200/90"
      onClick={(e) => e.stopPropagation()}
    >
      <span aria-hidden className="shrink-0">💡</span>
      <span>{text}</span>
    </p>
  )
}

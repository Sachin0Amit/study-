'use client'

import { Fragment, type ReactNode } from 'react'
import { TeX } from './math'

const SPLIT_RE = /(\$\$[^$]+\$\$|\$[^$]+\$|\*\*[^*]+\*\*|`[^`]+`)/g

// Plain-text numeric fractions like 7/3 (outside $...$ and code) also render
// stacked. Dates (1/30/2025) are excluded via the surrounding-char guards.
const PLAIN_FRAC_SPLIT_RE =
  /((?<![\d./])\d+(?:\.\d+)?\s*\/\s*\d+(?:\.\d+)?(?![\d./]))/g
const PLAIN_FRAC_ONLY_RE =
  /^(?<![\d./])\d+(?:\.\d+)?\s*\/\s*\d+(?:\.\d+)?(?![\d./])$/

/** Render `7/3` inside plain prose as a stacked fraction, leaving other text alone. */
function renderPlainWithFractions(p: string, keyPrefix: string | number): ReactNode {
  if (!p.includes('/')) return p
  if (!PLAIN_FRAC_SPLIT_RE.test(p)) {
    // reset stateful `g` regex before returning
    PLAIN_FRAC_SPLIT_RE.lastIndex = 0
    return p
  }
  PLAIN_FRAC_SPLIT_RE.lastIndex = 0
  const parts = p.split(PLAIN_FRAC_SPLIT_RE)
  return parts.map((chunk, j) => {
    if (chunk && PLAIN_FRAC_ONLY_RE.test(chunk)) {
      const [a, b] = chunk.split('/').map((x) => x.trim())
      if (a && b) return <TeX key={`${keyPrefix}-${j}`} tex={`\\frac{${a}}{${b}}`} />
    }
    return <Fragment key={`${keyPrefix}-${j}`}>{chunk}</Fragment>
  })
}

/**
 * Rich text renderer used across lessons, exams, flashcards and summaries.
 * Supports:
 *   **bold**        → <strong>
 *   $inline math$   → KaTeX inline
 *   $$display$$     → KaTeX display block (centered)
 *   `code`          → inline monospace chip
 *   ``` blocks ```  → multi-line <pre> code block (split BEFORE all other spans)
 */
export function RichText({ text, className }: { text: string; className?: string }) {
  // ``` fenced blocks first — they may span lines
  const fenceParts = text.split('```')
  return (
    <span className={className}>
      {fenceParts.map((fence, fi) =>
        fi % 2 === 1 ? (
          <code
            key={fi}
            className="sv-code-block my-1.5 block overflow-x-auto rounded-lg border border-border/70 bg-muted/40 px-3.5 py-2.5 font-mono text-[12.5px] leading-relaxed text-foreground/90 print:border-zinc-300 print:bg-zinc-100 print:text-black"
          >
            {fence.replace(/^\n+|\n+$/g, '')}
          </code>
        ) : (
          <Fragment key={fi}>
            {(fence.match(SPLIT_RE) ? fence.split(SPLIT_RE) : [fence]).map((p, i) => {
              if (p.length > 4 && p.startsWith('**') && p.endsWith('**')) {
                return (
                  <strong key={i} className="font-semibold text-foreground">
                    {renderPlainWithFractions(p.slice(2, -2), `b-${fi}-${i}`)}
                  </strong>
                )
              }
              if (p.length > 4 && p.startsWith('$$') && p.endsWith('$$')) {
                return <TeX key={i} tex={p.slice(2, -2)} display />
              }
              if (p.length > 2 && p.startsWith('$') && p.endsWith('$')) {
                return <TeX key={i} tex={p.slice(1, -1)} />
              }
              if (p.length > 2 && p.startsWith('`') && p.endsWith('`')) {
                return (
                  <code
                    key={i}
                    className="rounded-md border border-border/60 bg-muted/50 px-1.5 py-px font-mono text-[0.85em] text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300 print:border-zinc-300 print:bg-zinc-100 print:text-black"
                  >
                    {p.slice(1, -1)}
                  </code>
                )
              }
              return <Fragment key={i}>{renderPlainWithFractions(p, `t-${fi}-${i}`)}</Fragment>
            })}
          </Fragment>
        )
      )}
    </span>
  )
}

/** Strip math delimiters, bold markers and code fences for plain-text contexts (search, export). */
export function plainText(text: string): string {
  return text
    .replace(/```/g, '')
    .replace(/\$\$([^$]+)\$\$/g, '$1')
    .replace(/\$([^$]+)\$/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
}

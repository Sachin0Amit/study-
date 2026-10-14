'use client'

import { useMemo } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { prettifyTex } from '@/lib/tex-pretty'

/**
 * KaTeX-based math rendering for the StudyVerse platform.
 * - `<TeX tex="..." />` → inline math (flows with text)
 * - `<TeX tex="..." display />` → centered display block
 * LaTeX strings live inside content data delimited by `$...$` / `$$...$$`
 * and are unwrapped by the RichText component before reaching TeX.
 */
export function TeX({
  tex,
  display = false,
  className,
}: {
  tex: string
  display?: boolean
  className?: string
}) {
  const html = useMemo(
    () =>
      katex.renderToString(prettifyTex(tex), {
        displayMode: display,
        throwOnError: false,
        strict: false,
        trust: false,
        output: 'html',
      }),
    [tex, display]
  )

  if (display) {
    return (
      <span
        className={`sv-math-block my-1 block overflow-x-auto overflow-y-hidden py-1 text-center ${className ?? ''}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  return (
    <span
      className={`sv-math-inline ${className ?? ''}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

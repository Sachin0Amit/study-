'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

/** Keeps <meta name="theme-color"> in sync so mobile browser chrome
 *  matches the active light/dark surface. */
export function ThemeColorMeta() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'theme-color'
      document.head.appendChild(meta)
    }
    // dark: oklch(0.13 0.014 165) ≈ #0b100e · light: oklch(0.984 0.004 106) ≈ #fbfdfa
    meta.content = resolvedTheme === 'light' ? '#fbfdfa' : '#0b100e'
  }, [resolvedTheme])

  return null
}

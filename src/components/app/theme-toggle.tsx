'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

/**
 * Light/dark mode switch — premium brand default is dark.
 * Icon visibility is pure CSS (`.dark` on <html>), so there is no
 * hydration-sensitive state: the Sun shows in dark mode (click → light),
 * the Moon shows in light mode (click → dark).
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle light/dark theme"
      title="Toggle light/dark theme"
      className="group relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-card/60 text-muted-foreground transition-all hover:border-border hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 print:hidden"
    >
      <Sun
        className="hidden h-4 w-4 duration-300 group-hover:rotate-45 dark:block"
        aria-hidden
      />
      <Moon
        className="h-4 w-4 duration-300 group-hover:-rotate-12 dark:hidden"
        aria-hidden
      />
    </button>
  )
}

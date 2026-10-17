'use client'

/**
 * X10 Pro — Keyboard shortcuts cheatsheet.
 *
 * Opens via the window event 'sv:open-shortcuts' (dispatched by the command
 * palette's `?` binding and the "Keyboard shortcuts" palette command). The
 * global key bindings themselves live in the command palette's key handler —
 * this file is purely the cheatsheet UI, and the source of truth for what
 * bindings exist (see SHORTCUT_GROUPS below).
 */

import { useEffect, useState } from 'react'
import { Command, Compass, Cpu, GraduationCap, Keyboard } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export const OPEN_SHORTCUTS_EVENT = 'sv:open-shortcuts'

export interface ShortcutRow {
  keys: string[]
  label: string
}

export interface ShortcutGroup {
  title: string
  icon: typeof Keyboard
  rows: ShortcutRow[]
}

/** every binding here is wired in command-palette.tsx (or native to a view) */
export const SHORTCUT_GROUPS: ShortcutGroup[] = [
  {
    title: 'Navigate',
    icon: Compass,
    rows: [
      { keys: ['⌘', 'K'], label: 'Command palette — search & run anything' },
      { keys: ['/'], label: 'Jump to search' },
      { keys: ['G', 'L'], label: 'Library' },
      { keys: ['G', 'T'], label: 'Cognitive twin' },
      { keys: ['G', 'S'], label: 'Teaching studio' },
      { keys: ['G', 'A'], label: 'Study arena' },
      { keys: ['G', 'P'], label: 'Progress dashboard' },
      { keys: ['←', '→'], label: 'Previous / next page, card or question' },
      { keys: ['J', 'K'], label: 'Back / forward through cards & lists' },
    ],
  },
  {
    title: 'Study',
    icon: GraduationCap,
    rows: [
      { keys: ['F'], label: 'Show / hide the deep focus timer' },
      { keys: ['E'], label: 'Toggle easy help (simple yellow boxes)' },
      { keys: ['1'], label: 'Flashcards: grade "again"' },
      { keys: ['2'], label: 'Flashcards: grade "knew it"' },
      { keys: ['Esc'], label: 'Exit reading focus / close panels' },
    ],
  },
  {
    title: 'System',
    icon: Cpu,
    rows: [
      { keys: ['?'], label: 'This cheatsheet' },
      { keys: ['⏎'], label: 'Run the selected palette command' },
      { keys: ['↑', '↓'], label: 'Move through palette results' },
      { keys: ['T'], label: 'Toggle light / dark theme' },
      { keys: ['O'], label: 'Toggle offline mode' },
      { keys: ['Esc'], label: 'Close dialogs' },
    ],
  },
]

function Kbd({ children }: { children: string }) {
  return (
    <kbd className="inline-flex h-6 min-w-6 items-center justify-center rounded-md border border-border bg-muted px-1.5 font-mono text-[11px] font-semibold text-foreground/80 shadow-[inset_0_-1px_0_rgb(0_0_0/0.08)]">
      {children}
    </kbd>
  )
}

export function ShortcutsOverlay() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const openIt = () => setOpen(true)
    window.addEventListener(OPEN_SHORTCUTS_EVENT, openIt)
    return () => window.removeEventListener(OPEN_SHORTCUTS_EVENT, openIt)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Keyboard className="h-4.5 w-4.5 text-emerald-300" aria-hidden />
            Keyboard shortcuts
          </DialogTitle>
          <DialogDescription>
            StudyVerse OS flies with keys — single letters work whenever you are not typing.{' '}
            <Kbd>?</Kbd> brings this sheet back anytime.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHORTCUT_GROUPS.map((group) => (
            <section key={group.title} aria-label={group.title}>
              <h3 className="mb-2.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                <group.icon className="h-3.5 w-3.5 text-emerald-300/80" aria-hidden />
                {group.title}
              </h3>
              <ul className="flex flex-col gap-1">
                {group.rows.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-3 rounded-lg px-1.5 py-1.5 transition-colors hover:bg-muted/50"
                  >
                    <span className="text-[12.5px] leading-snug text-foreground/90">{row.label}</span>
                    <span className="flex shrink-0 items-center gap-1">
                      {row.keys.map((k, i) => (
                        <Kbd key={`${row.label}-${i}`}>{k}</Kbd>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-1 flex items-center gap-1.5 border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
          <Command className="h-3 w-3" aria-hidden />
          Letter shortcuts pause automatically while a test or mock paper is running, and inside
          inputs.
        </p>
      </DialogContent>
    </Dialog>
  )
}

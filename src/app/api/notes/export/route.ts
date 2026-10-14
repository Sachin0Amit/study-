import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { LIBRARY_CHAPTERS, LIBRARY_SECTIONS } from '@/data/library'
import { FORMULAS } from '@/data/formulas'

export const dynamic = 'force-dynamic'

const pad = (n: number) => String(n).padStart(2, '0')

/** YYYY-MM-DD for the filename, computed server-side */
function filenameDate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

/** YYYY-MM-DD HH:MM (local) for "Last updated" lines */
function stamp(d: Date): string {
  return `${filenameDate(d)} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

/**
 * GET /api/notes/export?deviceId=X
 * Streams ALL of the device's notes as a downloadable Markdown file,
 * grouped by chapter (ordered by number) and section (ordered by number).
 */
export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get('deviceId')
  if (!deviceId) {
    return NextResponse.json({ error: 'deviceId required' }, { status: 400 })
  }

  const rows = await db.sectionNote.findMany({
    where: { deviceId },
    orderBy: { updatedAt: 'desc' },
  })

  // Only keep non-empty notes, keyed by sectionKey (latest row wins)
  const notes = new Map<string, { note: string; updatedAt: Date }>()
  for (const r of rows) {
    if (r.note.trim()) notes.set(r.sectionKey, { note: r.note, updatedAt: r.updatedAt })
  }

  const now = new Date()
  const exportedLine = `Exported ${now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })} · ${notes.size} lesson${notes.size !== 1 ? 's' : ''} with notes`

  const lines: string[] = ['# StudyVerse — My Study Notes', exportedLine, '']

  if (notes.size === 0) {
    lines.push('No notes yet — open any lesson and start writing.', '')
  } else {
    // Resolve section metadata; unknown keys land in "Unsorted"
    const sectionById = new Map(LIBRARY_SECTIONS.map((s) => [s.id, s]))
    const unsorted: { sectionKey: string; note: string; updatedAt: Date }[] = []

    const chapters = [...LIBRARY_CHAPTERS].sort((a, b) => a.number - b.number)
    for (const ch of chapters) {
      const sections = LIBRARY_SECTIONS.filter((s) => s.chapterId === ch.id).sort(
        (a, b) => a.number - b.number
      )
      const withNotes = sections.filter((s) => notes.has(s.id))
      if (withNotes.length === 0) continue
      lines.push(`## Chapter ${ch.number} — ${ch.shortTitle}`, '')
      for (const s of withNotes) {
        const n = notes.get(s.id)!
        lines.push(`### §${s.number} ${s.title}`, `> Last updated ${stamp(n.updatedAt)}`, '', n.note, '')
      }
    }

    for (const [sectionKey, n] of notes) {
      if (!sectionById.has(sectionKey)) unsorted.push({ sectionKey, ...n })
    }
    if (unsorted.length > 0) {
      unsorted.sort((a, b) => a.updatedAt.getTime() - b.updatedAt.getTime())
      lines.push('## Unsorted', '')
      for (const u of unsorted) {
        lines.push(`### ${u.sectionKey}`, `> Last updated ${stamp(u.updatedAt)}`, '', u.note, '')
      }
    }
  }

  // ---- Formula notes (append-only): pinned formulas with personal notes ----
  // The markdown inside the note (e.g. **bold**) is preserved verbatim.
  const favRows = await db.formulaFavorite.findMany({
    where: { deviceId, note: { not: '' } },
    // most recently pinned first (the model has no updatedAt — createdAt is the pin time)
    orderBy: { createdAt: 'desc' },
  })
  const formulaNotes = favRows.filter((r) => r.note.trim())

  if (formulaNotes.length > 0) {
    // formulaKey is "<chapterId>|<section>|<name>" — resolve against the sheet
    const formulaByKey = new Map(
      FORMULAS.map((f) => [`${f.chapterId}|${f.section}|${f.name}`, f])
    )
    const chapterById = new Map(LIBRARY_CHAPTERS.map((c) => [c.id, c]))

    lines.push('', '## Formula notes', '')
    lines.push('Pinned formulas with personal notes (markdown preserved).', '')
    for (const r of formulaNotes) {
      const entry = formulaByKey.get(r.formulaKey)
      if (entry) {
        const ch = chapterById.get(entry.chapterId)
        const chapterLabel = ch ? `Ch ${ch.number}: ${ch.title}` : entry.chapterId
        lines.push(`### ${entry.name} — §${entry.section} · ${chapterLabel}`, '')
        lines.push('```', entry.formula, '```', '')
        lines.push(r.note, '')
      } else {
        // stale favorite — the key no longer resolves to a formula in the sheet
        lines.push(`### ${r.formulaKey}`, '')
        lines.push('_(formula no longer found in the current sheet)_', '')
        lines.push(r.note, '')
      }
    }
  }

  const markdown = lines.join('\n')

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Disposition': `attachment; filename="studyverse-notes-${filenameDate(now)}.md"`,
      'Cache-Control': 'no-store',
    },
  })
}

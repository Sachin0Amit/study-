// ============ Coverage Registry Builder ====================================
//
// Generates the AI-facing content ledger:
//   coverage/coverage.json  — machine-readable inventory of EVERY subject,
//                             book, chapter and section in the library
//   coverage/COVERAGE.md    — human/AI-readable registry with expansion rules
//
// WHY: before writing ANY new content (manual daily-expansion prompts or
// agent work), consult this registry. If a topic already exists, DEEPEN it
// (add sections/examples/depth tiers) instead of writing a duplicate. Only
// topics absent from the registry should be authored fresh.
//
// Run: bun run coverage   (or: bun scripts/build-coverage.ts)

import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import {
  LIBRARY_SUBJECTS,
  LIBRARY_BOOKS,
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
} from '../src/data/library'

interface ChapterEntry {
  id: string
  number: number
  title: string
  shortTitle: string
  bookId: string
  sectionCount: number
  sections: { id: string; number: number; title: string }[]
}

interface SubjectEntry {
  id: string
  name: string
  group: string
  tagline: string
  chapterCount: number
  sectionCount: number
  chapters: ChapterEntry[]
}

const ROOT = join(__dirname, '..')

function main() {
  const chaptersByBook = new Map<string, typeof LIBRARY_CHAPTERS>()
  for (const c of LIBRARY_CHAPTERS) {
    const list = chaptersByBook.get(c.bookId)
    if (list) list.push(c)
    else chaptersByBook.set(c.bookId, [c])
  }
  const sectionsByChapter = new Map<string, typeof LIBRARY_SECTIONS>()
  for (const s of LIBRARY_SECTIONS) {
    const list = sectionsByChapter.get(s.chapterId)
    if (list) list.push(s)
    else sectionsByChapter.set(s.chapterId, [s])
  }
  const bookBySubject = new Map<string, (typeof LIBRARY_BOOKS)[number]>()
  for (const b of LIBRARY_BOOKS) if (!bookBySubject.has(b.subjectId)) bookBySubject.set(b.subjectId, b)

  const subjects: SubjectEntry[] = LIBRARY_SUBJECTS.map((sub) => {
    const book = bookBySubject.get(sub.id)
    const chapters = (book ? (chaptersByBook.get(book.id) ?? []) : [])
      .slice()
      .sort((a, b) => a.number - b.number)
      .map<ChapterEntry>((c) => {
        const secs = (sectionsByChapter.get(c.id) ?? [])
          .slice()
          .sort((a, b) => a.number - b.number)
          .map((s) => ({ id: s.id, number: s.number, title: s.title }))
        return {
          id: c.id,
          number: c.number,
          title: c.title,
          shortTitle: c.shortTitle,
          bookId: c.bookId,
          sectionCount: secs.length,
          sections: secs,
        }
      })
    return {
      id: sub.id,
      name: sub.name,
      group: sub.group ?? 'Ungrouped',
      tagline: sub.tagline,
      chapterCount: chapters.length,
      sectionCount: chapters.reduce((a, c) => a + c.sectionCount, 0),
      chapters,
    }
  })

  const totals = {
    subjects: subjects.length,
    books: LIBRARY_BOOKS.length,
    chapters: LIBRARY_CHAPTERS.length,
    sections: LIBRARY_SECTIONS.length,
  }

  // ---------------- coverage.json ----------------
  const registry = {
    generatedAt: new Date().toISOString(),
    purpose:
      'AI content ledger — consult BEFORE writing any new library content. If a topic exists here, deepen it (new sections, worked examples, depth tiers) instead of duplicating. Only absent topics get fresh authoring.',
    howToCheck: [
      '1. Search this file (or COVERAGE.md) for the topic/subject you plan to write.',
      '2. Found it? → extend the existing chapter: add sections, examples, derivations, masters/PhD tiers.',
      '3. Not found? → pick the correct subject (or propose a new one) and author chapter files in src/data/library-parts/ following the existing pattern, then re-run `bun run coverage`.',
      '4. Never create a second chapter covering the same topic under a different name — check synonyms too.',
    ],
    totals,
    subjects,
  }
  mkdirSync(join(ROOT, 'coverage'), { recursive: true })
  writeFileSync(join(ROOT, 'coverage/coverage.json'), JSON.stringify(registry, null, 2))

  // ---------------- COVERAGE.md ----------------
  const groups = new Map<string, SubjectEntry[]>()
  for (const s of subjects) {
    const list = groups.get(s.group)
    if (list) list.push(s)
    else groups.set(s.group, [s])
  }

  const lines: string[] = []
  lines.push('# StudyVerse Content Coverage Registry')
  lines.push('')
  lines.push('> **AI EXPANSION RULES — READ FIRST**')
  lines.push('>')
  lines.push('> 1. **Cross-verify before writing.** Search this registry for any topic you plan to')
  lines.push('>    author. If it already exists (check synonyms and abbreviations too), you must')
  lines.push('>    **deepen the existing chapter** — add sections, worked examples, derivations,')
  lines.push('>    figures, interactives, masters/PhD depth tiers — **never write a duplicate**.')
  lines.push('> 2. **Expand from the frontier.** New content continues from where this registry')
  lines.push('>    ends; keep it in the correct subject (or propose a new subject deliberately).')
  lines.push('>')
  lines.push('> This file is regenerated from the live data by `bun run coverage`.')
  lines.push('> Machine-readable twin: `coverage/coverage.json` (includes every section id/title).')
  lines.push('')
  lines.push('## Totals')
  lines.push('')
  lines.push(`- **Subjects:** ${totals.subjects}`)
  lines.push(`- **Books (master volumes):** ${totals.books}`)
  lines.push(`- **Chapters:** ${totals.chapters}`)
  lines.push(`- **Sections (lessons):** ${totals.sections}`)
  lines.push('')

  for (const [group, subs] of groups) {
    lines.push(`## ${group} — ${subs.length} subject${subs.length === 1 ? '' : 's'}`)
    lines.push('')
    for (const s of subs) {
      lines.push(`### ${s.name} (\`${s.id}\`)`)
      lines.push('')
      lines.push(`*${s.tagline}* — ${s.chapterCount} chapters · ${s.sectionCount} sections`)
      lines.push('')
      for (const c of s.chapters) {
        lines.push(
          `- **Ch ${c.number}. ${c.title}** \`${c.id}\` — ${c.sectionCount} sections: ${c.sections
            .map((x) => x.title)
            .join('; ')}`
        )
      }
      lines.push('')
    }
  }

  lines.push('---')
  lines.push('')
  lines.push('*End of registry.*')
  writeFileSync(join(ROOT, 'coverage/COVERAGE.md'), lines.join('\n'))

  console.log(
    `[coverage] wrote coverage/coverage.json + coverage/COVERAGE.md — ` +
      `${totals.subjects} subjects · ${totals.chapters} chapters · ${totals.sections} sections`
  )
}

main()

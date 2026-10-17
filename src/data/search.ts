import {
  LIBRARY_CHAPTERS,
  LIBRARY_SECTIONS,
  getBook,
  getChapter,
  getSection,
} from './library'
import { allContent } from './content'
import { UNIVERSE_TOPICS } from './universe'
import { plainText } from '@/components/rich-text'

export interface SearchItem {
  kind: 'section' | 'concept' | 'chapter' | 'lab' | 'universe'
  id: string
  title: string
  subtitle: string
  /** chapter context label, e.g. "Ch 6 · Counting" */
  context: string
  /** navigation target */
  sectionId?: string
  chapterId?: string
  toolKey?: string
  /** Knowledge Universe navigation target (inside the Library view) */
  universeDomain?: string
  universeTopicId?: string
  haystack: string
}

let cachedIndex: SearchItem[] | null = null

export function buildSearchIndex(): SearchItem[] {
  if (cachedIndex) return cachedIndex
  const items: SearchItem[] = []

  // Chapters
  for (const ch of LIBRARY_CHAPTERS) {
    const book = getBook(ch.bookId)
    items.push({
      kind: 'chapter',
      id: `chapter-${ch.id}`,
      title: `Chapter ${ch.number} — ${ch.shortTitle}`,
      subtitle: ch.description,
      context: book
        ? `${book.title.split(' and ')[0]}${book.edition ? ` · ${book.edition.replace(' Edition', 'e')}` : ''}`
        : '',
      chapterId: ch.id,
      haystack: `${ch.title} ${ch.shortTitle} ${ch.description}`.toLowerCase(),
    })
  }

  // Sections
  for (const sec of LIBRARY_SECTIONS) {
    const ch = getChapter(sec.chapterId)
    items.push({
      kind: 'section',
      id: `section-${sec.id}`,
      title: `§${sec.number} ${sec.title}`,
      subtitle: sec.description,
      context: ch ? `Ch ${ch.number} · ${ch.shortTitle}` : '',
      sectionId: sec.id,
      haystack: `${sec.number} ${sec.title} ${sec.description}`.toLowerCase(),
    })
  }

  // Concepts from master content
  for (const content of allContent) {
    const sec = getSection(content.sectionId)
    const ch = sec ? getChapter(sec.chapterId) : undefined
    const ctx = ch && sec ? `Ch ${ch.number} · §${sec.number}` : ''
    for (const c of content.concepts) {
      items.push({
        kind: 'concept',
        id: `concept-${content.sectionId}-${c.term}`,
        title: c.term,
        subtitle: plainText(c.statement),
        context: ctx,
        sectionId: content.sectionId,
        haystack: plainText(`${c.term} ${c.statement} ${c.detail ?? ''}`).toLowerCase(),
      })
    }
  }

  // Knowledge Universe topics — deep study guides across every field
  for (const t of UNIVERSE_TOPICS) {
    items.push({
      kind: 'universe',
      id: `universe-${t.id}`,
      title: t.title,
      subtitle: t.concepts.slice(0, 3).join(' · '),
      context: `${t.domain} · ${t.field}`,
      universeDomain: t.domain,
      universeTopicId: t.id,
      haystack: `${t.title} ${t.domain} ${t.field} ${t.branch} ${t.concepts.join(' ')}`.toLowerCase(),
    })
  }

  cachedIndex = items
  return items
}

export function searchLibrary(query: string, limit = 24): SearchItem[] {
  const q = query.trim().toLowerCase()
  const index = buildSearchIndex()
  if (!q) {
    // default: sections first when empty
    return index
      .filter((i) => i.kind === 'section')
      .slice(0, limit)
  }
  const terms = q.split(/\s+/)
  const scored: { item: SearchItem; score: number }[] = []
  for (const item of index) {
    if (!item.haystack.includes(terms[0]) && !item.title.toLowerCase().includes(terms[0])) continue
    let score = 0
    let allMatch = true
    for (const t of terms) {
      const inTitle = item.title.toLowerCase().includes(t)
      const inSub = item.haystack.includes(t)
      if (inTitle) score += 10
      else if (inSub) score += 2
      else {
        allMatch = false
        break
      }
    }
    if (!allMatch) continue
    if (item.kind === 'section') score += 6
    if (item.kind === 'concept') score += 3
    if (item.kind === 'chapter') score += 4
    if (item.kind === 'universe') score += 4
    scored.push({ item, score })
  }
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.item)
}

/**
 * Builds public/data/exam-knowledge-index.json — a lightweight index of every
 * Knowledge-University topic (id, title, field, domain, concepts, readMins).
 *
 * Server-side exam mapping uses this to match curated syllabus topics to
 * knowledge chapters WITHOUT importing the ~25 MB fields corpus through the
 * bundler (which OOMs the dev server — see src/data/content/server.ts).
 *
 * Run: bun run scripts/build-knowledge-index.ts
 */
import { writeFileSync } from 'fs'
import { KNOWLEDGE_TOPICS } from '../src/data/knowledge'

interface KnowledgeIndexEntry {
  id: string
  title: string
  domain: string
  field: string
  branch: string
  concepts: string[]
  readMins: number
  words: number
}

const entries: KnowledgeIndexEntry[] = KNOWLEDGE_TOPICS.map((t) => ({
  /** 'ku-' prefix = the exact section id the reader and content.json use */
  id: 'ku-' + t.id,
  title: t.title,
  domain: t.domain,
  field: t.field,
  branch: t.branch,
  concepts: t.concepts.slice(0, 8),
  readMins: t.readMins,
  words: t.words,
}))

entries.sort((a, b) => a.id.localeCompare(b.id))

writeFileSync('public/data/exam-knowledge-index.json', JSON.stringify(entries))

console.log(
  `wrote public/data/exam-knowledge-index.json — ${entries.length} topics, ` +
    `${(entries.length > 0 ? entries.reduce((n, e) => n + e.words, 0) / 1000 : 0).toFixed(0)}k words indexed`
)

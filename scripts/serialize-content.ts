/**
 * Serialize the authored content into the cheap-to-parse JSON assets the app
 * actually imports. Run after editing ANY authored content:
 *   bun run scripts/serialize-content.ts
 *
 * Produces two files:
 *  1. src/data/library-parts/knowledge-meta.json — the Knowledge Universe
 *     registries (subjects/books/chapters/sections). library.ts imports this
 *     JSON so the heavy topic TS files never enter the client/server compile
 *     graph (the OOM fix — one JSON parse instead of a 500-module graph).
 *  2. src/data/content/content.json — every live SectionContent, including
 *     the Knowledge Universe lessons.
 *
 * The authored TS files (src/data/content/*.ts, src/data/knowledge/fields/*)
 * are consumed ONLY by this script.
 */
import {
  KNOWLEDGE_SUBJECTS,
  KNOWLEDGE_BOOKS,
  KNOWLEDGE_CHAPTERS,
  KNOWLEDGE_SECTIONS,
} from '../src/data/library-parts/knowledge-universe'
import { rawAllContent } from '../src/data/content/source'
import { writeFileSync } from 'fs'

/* 1) Knowledge registries — written before library.ts is imported, so the
 *    dynamic import below always sees the fresh JSON. */
writeFileSync(
  'src/data/library-parts/knowledge-meta.json',
  JSON.stringify({
    subjects: KNOWLEDGE_SUBJECTS,
    books: KNOWLEDGE_BOOKS,
    chapters: KNOWLEDGE_CHAPTERS,
    sections: KNOWLEDGE_SECTIONS,
  })
)
console.log(
  `knowledge-meta.json written — ${KNOWLEDGE_SUBJECTS.length} subjects · ${KNOWLEDGE_CHAPTERS.length} chapters · ${KNOWLEDGE_SECTIONS.length} sections`
)

/* 2) Section content — library.ts is imported dynamically so it picks up the
 *    freshly written knowledge-meta.json above. */
const { LIBRARY_SECTIONS } = await import('../src/data/library')

const liveSectionIds = new Set(LIBRARY_SECTIONS.map((s) => s.id))
const live = rawAllContent.filter((c) => liveSectionIds.has(c.sectionId))

writeFileSync('src/data/content/content.json', JSON.stringify(live))
console.log(`content.json written — ${live.length} live sections (${rawAllContent.length - live.length} filtered)`)

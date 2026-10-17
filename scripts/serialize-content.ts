/**
 * Serialize the authored section content (520 TS files) into one JSON module.
 * Run after editing any file in src/data/content/ :
 *   bun run scripts/serialize-content.ts
 * The app imports content.json (cheap for the bundler); this script is the
 * only consumer of source.ts (the 520-file TS graph).
 */
import { LIBRARY_SECTIONS } from '../src/data/library'
import { rawAllContent } from '../src/data/content/source'
import { writeFileSync } from 'fs'

const liveSectionIds = new Set(LIBRARY_SECTIONS.map((s) => s.id))
const live = rawAllContent.filter((c) => liveSectionIds.has(c.sectionId))

writeFileSync('src/data/content/content.json', JSON.stringify(live))
console.log(`content.json written — ${live.length} live sections (${rawAllContent.length - live.length} filtered)`)

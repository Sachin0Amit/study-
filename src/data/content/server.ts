/**
 * SERVER content access — API routes and server libs.
 *
 * Reads the pre-serialized corpus from public/data/content.json with fs at
 * first use. This deliberately bypasses the bundler: a 25 MB JSON that rides
 * through the Turbopack transform pipeline costs ~2.5 GB of compile memory
 * and OOM-kills the box, while an fs read costs a single parse (~200 MB).
 *
 * Client views must use ./client instead (runtime fetch) — never this module.
 */
import { readFileSync } from 'fs'
import { join } from 'path'
import type { SectionContent } from '../library'

let cache: SectionContent[] | null = null
let cachePromise: Promise<SectionContent[]> | null = null

function contentPath(): string {
  /* dev: <project root>/public/data/content.json (cwd is the project root)
     prod standalone: public/ is copied next to server.js — same layout. */
  return join(process.cwd(), 'public', 'data', 'content.json')
}

/** Synchronous full corpus (lazy fs read + parse on first call). */
export function allContent(): SectionContent[] {
  if (!cache) {
    cache = JSON.parse(readFileSync(contentPath(), 'utf8')) as SectionContent[]
  }
  return cache
}

/** Async variant so route handlers can avoid blocking the event loop. */
export function allContentAsync(): Promise<SectionContent[]> {
  if (cache) return Promise.resolve(cache)
  if (!cachePromise) {
    cachePromise = import('node:fs/promises').then((fs) =>
      fs.readFile(contentPath(), 'utf8').then((txt) => {
        cache = JSON.parse(txt) as SectionContent[]
        return cache
      })
    )
  }
  return cachePromise
}

export function getSectionContent(sectionId: string): SectionContent | undefined {
  return allContent().find((c) => c.sectionId === sectionId)
}

export function TOTAL_CONTENT_SECTIONS(): number {
  return allContent().length
}

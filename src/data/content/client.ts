/**
 * CLIENT content access — browser views only.
 *
 * Fetches the pre-serialized corpus from /data/content.json at runtime and
 * caches it in memory. This keeps the 25 MB corpus OUT of the client compile
 * graph entirely (the dev box OOM-killed next-server whenever the JSON rode
 * through the bundler) and shrinks every view chunk to almost nothing.
 *
 * Server code must use ./server (fs read) — never this module.
 */
import type { SectionContent } from '../library'

let cache: SectionContent[] | null = null
let inflight: Promise<SectionContent[]> | null = null

/** Load (once) and return the full lesson corpus in the browser. */
export function loadAllContent(): Promise<SectionContent[]> {
  if (cache) return Promise.resolve(cache)
  if (!inflight) {
    inflight = fetch('/data/content.json')
      .then((r) => {
        if (!r.ok) throw new Error(`content.json fetch failed: ${r.status}`)
        return r.json() as Promise<SectionContent[]>
      })
      .then((d) => {
        cache = d
        return d
      })
      .catch((err) => {
        inflight = null /* allow retry */
        throw err
      })
  }
  return inflight
}

/** Synchronous peek at the loaded corpus (empty array until loaded). */
export function allContentLoaded(): SectionContent[] {
  return cache ?? []
}

export function contentReady(): boolean {
  return cache !== null
}

/** Synchronous lookup — undefined until the corpus has loaded. */
export function getSectionContent(sectionId: string): SectionContent | undefined {
  return cache?.find((c) => c.sectionId === sectionId)
}

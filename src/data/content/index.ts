import type { SectionContent } from '../library'
import raw from './content.json'

// ============================================================================
// Content module — single pre-serialized JSON asset.
//
// The authored TS files (ch01.ts … 520 files, ~28 MB) are consumed ONLY by
// scripts/serialize-content.ts, which regenerates content.json. The app
// imports the JSON instead: one cheap parse for the bundler instead of
// compiling a 520-module graph on both the server and client, which kept
// overflowing the sandbox's memory budget.
//
// Regenerate after editing any authored file:
//   bun run scripts/serialize-content.ts
// ============================================================================

const liveContent: SectionContent[] = raw as unknown as SectionContent[]

const contentMap: Record<string, SectionContent> = Object.fromEntries(
  liveContent.map((c) => [c.sectionId, c])
)

export function getSectionContent(sectionId: string): SectionContent | undefined {
  return contentMap[sectionId]
}

export const TOTAL_CONTENT_SECTIONS = liveContent.length
export { liveContent as allContent }

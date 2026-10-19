'use client'

/**
 * useAllContent — loads the lesson corpus (runtime fetch of
 * /data/content.json) once per browser session and hands it to the view.
 * Returns null while loading so views can render their skeleton.
 */
import { useEffect, useState } from 'react'
import type { SectionContent } from '@/data/library'
import { loadAllContent } from '@/data/content/client'

export function useAllContent(): SectionContent[] | null {
  const [content, setContent] = useState<SectionContent[] | null>(null)
  useEffect(() => {
    let alive = true
    loadAllContent()
      .then((d) => {
        if (alive) setContent(d)
      })
      .catch(() => {
        /* network failure — view keeps its skeleton; toast handled by caller */
      })
    return () => {
      alive = false
    }
  }, [])
  return content
}

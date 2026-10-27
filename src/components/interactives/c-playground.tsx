'use client'

import { CodePlayground } from './code-playground'

/** Registry wrapper — binds the shared runner UI to the C toolchain. */
export default function CPlayground() {
  return <CodePlayground variant="c" />
}

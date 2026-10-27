'use client'

import { CodePlayground } from './code-playground'

/** Registry wrapper — binds the shared runner UI to the Java toolchain. */
export default function JavaPlayground() {
  return <CodePlayground variant="java" />
}

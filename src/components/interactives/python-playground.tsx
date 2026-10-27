'use client'

import { CodePlayground } from './code-playground'

/** Registry wrapper — binds the shared runner UI to the Python toolchain. */
export default function PythonPlayground() {
  return <CodePlayground variant="python" />
}

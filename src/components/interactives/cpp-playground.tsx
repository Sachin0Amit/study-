'use client'

import { CodePlayground } from './code-playground'

/** Registry wrapper — binds the shared runner UI to the Cpp toolchain. */
export default function CppPlayground() {
  return <CodePlayground variant="cpp" />
}

'use client'

import { CodePlayground } from './code-playground'

/** Registry wrapper — binds the shared runner UI to the Sql toolchain. */
export default function SqlPlayground() {
  return <CodePlayground variant="sql" />
}

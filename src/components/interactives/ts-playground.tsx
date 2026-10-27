'use client'

import { CodePlayground } from './code-playground'

/** Registry wrapper — binds the shared runner UI to the Ts toolchain. */
export default function TsPlayground() {
  return <CodePlayground variant="ts" />
}

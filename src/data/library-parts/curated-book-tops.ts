/* ------------------------------------------------------------------ */
/*  Curated book chapter tops                                          */
/*                                                                     */
/*  When the knowledge taxonomy merges chapters into an existing       */
/*  curated master book (the Mathematics Master Library, the Physics   */
/*  Master Library, …), the appended chapters must continue the        */
/*  book's chapter numbering. This helper imports the curated chapter  */
/*  registries and reports the current highest chapter number per      */
/*  merge-target book.                                                 */
/*                                                                     */
/*  Import graph note: the merged/subjects modules import ONLY types   */
/*  from ../library, so importing them here creates no runtime cycle  */
/*  with library.ts (which reads the JSON this bridge produces).       */
/* ------------------------------------------------------------------ */

import { MATH_CHAPTERS } from './merged/math'
import { PHYS_CHAPTERS } from './merged/physics'
import { CHEM_CHAPTERS } from './merged/chemistry'
import { ENGLISH_CHAPTERS } from './merged/english'
import { APT_CHAPTERS } from './merged/aptitude'
import { JAVA_CHAPTERS } from './subjects/programming-java'
import { DSA_CHAPTERS } from './subjects/dsa'
import { AI_CHAPTERS } from './subjects/ai-data-science'
import { CYBER_CHAPTERS } from './subjects/cybersecurity'
import { OS_CHAPTERS } from './subjects/operating-systems'
import { POWER_CHAPTERS } from './subjects/power-systems'
import { CONTROL_CHAPTERS } from './subjects/control-instrumentation'
import { SOLIDS_CHAPTERS } from './subjects/solids-materials'
import { MANUFACTURING_CHAPTERS } from './subjects/manufacturing-industrial'
import { COMMUNICATION_CHAPTERS } from './subjects/communication-systems'
import { VISUAL_CHAPTERS } from './subjects/visual-computing'

function topOf(chapters: { number: number }[]): number {
  return chapters.reduce((m, c) => Math.max(m, c.number), 0)
}

/** bookId → highest chapter number currently in that curated book */
export const CURATED_BOOK_CHAPTER_TOPS: Record<string, number> = {
  'math-master': topOf(MATH_CHAPTERS),
  'phys-master': topOf(PHYS_CHAPTERS),
  'chem-complete': topOf(CHEM_CHAPTERS),
  'english-complete': topOf(ENGLISH_CHAPTERS),
  'aptitude-complete': topOf(APT_CHAPTERS),
  'java-complete': topOf(JAVA_CHAPTERS),
  'dsa-complete': topOf(DSA_CHAPTERS),
  'ai-complete': topOf(AI_CHAPTERS),
  'cybersecurity-complete': topOf(CYBER_CHAPTERS),
  'os-complete': topOf(OS_CHAPTERS),
  'power-complete': topOf(POWER_CHAPTERS),
  'control-complete': topOf(CONTROL_CHAPTERS),
  'solids-complete': topOf(SOLIDS_CHAPTERS),
  'manufacturing-complete': topOf(MANUFACTURING_CHAPTERS),
  'communication-complete': topOf(COMMUNICATION_CHAPTERS),
  'visual-complete': topOf(VISUAL_CHAPTERS),
}

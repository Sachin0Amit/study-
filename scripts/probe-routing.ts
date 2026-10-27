/**
 * Matcher routing probes for the KCET/WBJEE topic names that landed on
 * wrong-family chapters in the first audit dump. Prints the routed target
 * for each candidate phrasing so the exam file can use the honest name
 * that also routes correctly (QCE-pass pattern).
 */
import { matchTopicDetailed, fuzzyMatchTopic } from '../src/lib/syllabus'
import { getCatalog } from '../src/lib/syllabus'

const cat = getCatalog()

const probes: { name: string; scope?: string }[] = [
  // chemistry
  { name: 'Redox reactions', scope: 'chemistry' },
  { name: 'Redox reactions and oxidation numbers', scope: 'chemistry' },
  { name: 'Redox chemistry', scope: 'chemistry' },
  { name: 'Amines', scope: 'chemistry' },
  { name: 'Amines and diazonium salts', scope: 'chemistry' },
  { name: 'Organic compounds containing nitrogen', scope: 'chemistry' },
  { name: 'Environmental chemistry', scope: 'chemistry' },
  { name: 'Everyday and industrial chemistry', scope: 'chemistry' },
  { name: 'States of matter: gases and liquids', scope: 'chemistry' },
  { name: 'Gaseous state and liquids', scope: 'chemistry' },
  { name: 'The gaseous state', scope: 'chemistry' },
  // mathematics
  { name: 'Applications of calculus', scope: 'mathematics' },
  { name: 'Application of calculus', scope: 'mathematics' },
  { name: 'Applications of derivatives and integrals', scope: 'mathematics' },
  { name: 'Integrals', scope: 'mathematics' },
  { name: 'Applications of the integrals', scope: 'mathematics' },
  { name: 'Application of integrals', scope: 'mathematics' },
  { name: 'Trigonometric functions', scope: 'mathematics' },
  { name: 'Trigonometric functions and identities', scope: 'mathematics' },
  { name: 'Relations and functions', scope: 'mathematics' },
  { name: 'Inverse trigonometric functions', scope: 'mathematics' },
  { name: 'Circle and conic sections', scope: 'mathematics' },
  { name: 'Conic sections', scope: 'mathematics' },
  { name: 'Straight lines', scope: 'mathematics' },
  { name: 'Straight lines and circle', scope: 'mathematics' },
  { name: 'Probability', scope: 'mathematics' },
  { name: 'Linear programming', scope: 'mathematics' },
  // physics
  { name: 'Mechanical properties of solids', scope: 'physics' },
  { name: 'Mechanical properties of fluids', scope: 'physics' },
  { name: 'Wave optics', scope: 'physics' },
  { name: 'Particle nature of light and matter waves', scope: 'physics' },
  { name: 'Dual nature of radiation and matter', scope: 'physics' },
  { name: 'Atomic physics', scope: 'physics' },
  { name: 'Atomic physics: Bohr model, hydrogen spectrum and X-rays', scope: 'physics' },
  { name: 'Atoms and atomic spectra', scope: 'physics' },
  { name: 'Semiconductor electronics', scope: 'physics' },
]

for (const p of probes) {
  let out = 'UNMAPPED'
  if (p.scope) {
    const within = matchTopicDetailed(p.name, cat).matches.find(
      (m) => m.subject.id === p.scope
    )
    out = within ? `${within.subject.id}/${within.chapter?.id ?? '?'} conf=${within.score?.toFixed(2)}` : 'no scoped'
  }
  // also show the global winner for reference
  const g = fuzzyMatchTopic(p.name, cat)
  const gtxt = g ? `${g.subjectId}/${g.chapterId} conf=${g.confidence?.toFixed(2)}` : 'none'
  console.log(p.name.padEnd(52), '| scoped[' + (p.scope ?? '-') + ']:', out.padEnd(46), '| global:', gtxt)
}

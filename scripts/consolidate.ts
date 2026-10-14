// ============================================================================
// SUBJECT-WISE CONSOLIDATION MIGRATION (one-shot) — v2
//
// User request:
//  1. Library strictly SUBJECT-WISE: 9 subjects, ONE book each.
//  2. NO repetition of topics/subtopics inside any subject:
//     - dissolve the 9 standalone textbook subjects into CSE/ECE as chapters
//     - merge the extra math books into the single mathematics book
//     - remove first-year common chapters from branch subjects (their unique
//       applied topics merge into the home subjects)
//     - merge graduate/defence scope chapters into canonical semester chapters
//     - consolidate multi-textbook duplication (physics/chemistry/math) into
//       one canonical chapter per topic, section-level fuzzy dedupe
//  3. Keeper chapters keep ids + section order (formula links stay valid);
//     moved sections are retargeted in content + formula files.
//
// Exam provenance (code comment only, per product rule): merged entrance/
// graduate/defence-scope chapters researched from official syllabi; see
// research/*.md.
// ============================================================================
import * as fs from 'node:fs'
import * as path from 'node:path'
import { LIBRARY_CHAPTERS, LIBRARY_SECTIONS } from '../src/data/library'
import { allContent } from '../src/data/content'

type Chapter = (typeof LIBRARY_CHAPTERS)[number]
type Section = (typeof LIBRARY_SECTIONS)[number]

// ---------------------------------------------------------------------------
// 0. Load source data (immutable)
// ---------------------------------------------------------------------------
const chById = new Map<string, Chapter>(LIBRARY_CHAPTERS.map((c) => [c.id, c as Chapter]))
const sectionsByChapter = new Map<string, Section[]>()
for (const s of LIBRARY_SECTIONS) {
  if (!sectionsByChapter.has(s.chapterId)) sectionsByChapter.set(s.chapterId, [])
  sectionsByChapter.get(s.chapterId)!.push(s as Section)
}
const suffixOf = (id: string) => Number(/-s(\d+)$/.exec(id)?.[1] ?? 0)
for (const [, list] of sectionsByChapter) list.sort((a, b) => suffixOf(a.id) - suffixOf(b.id))

const contentIds = new Set(allContent.map((c) => c.sectionId))
const hasContent = (id: string) => contentIds.has(id)

// ---------------------------------------------------------------------------
// 1. Fuzzy title similarity
// ---------------------------------------------------------------------------
const STOP = new Set([
  'the', 'and', 'of', 'in', 'for', 'a', 'an', 'to', 'with', 'from', 'on', 'at', 'by', 'as', 'or',
  'into', 'their', 'its', 'basic', 'basics', 'introduction', 'fundamentals', 'fundamental',
  'essentials', 'concepts', 'overview', 'part', 'first', 'second', 'study', 'using',
])
function toks(t: string): string[] {
  return t
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .map((w) => (w.length > 3 && w.endsWith('s') ? w.slice(0, -1) : w))
    .filter((w) => w.length > 1 && !STOP.has(w))
}
function sim(a: string[], b: string[]): { j: number; subset: boolean } {
  const A = new Set(a)
  const B = new Set(b)
  let inter = 0
  for (const x of A) if (B.has(x)) inter++
  const uni = new Set([...A, ...B]).size
  return { j: uni === 0 ? 0 : inter / uni, subset: inter > 0 && inter === Math.min(A.size, B.size) }
}

// ---------------------------------------------------------------------------
// 2. Chapter renames (cosmetic + clarity)
// ---------------------------------------------------------------------------
const CHAPTER_RENAMES: Record<string, string> = {
  'math-s1': 'math-sk1', 'math-s2': 'math-sk2', 'math-s3': 'math-sk3', 'math-s4': 'math-sk4',
  'math-q1': 'apt-q1', 'apt-s1': 'apt-gensci',
  'cse-e-se': 'cse-e-sweng',
  'ece-e-signals': 'ece-e-sigsys',
  'ece-e-speech-biomed': 'ece-e-speechbio',
  'ee-e-special-machines': 'ee-e-specmach',
  'ee-e-switchgear': 'ee-e-protection',
  'me-e-som': 'me-e-strength',
}
const resolveOld = (id: string): string => {
  for (const [o, n] of Object.entries(CHAPTER_RENAMES)) if (n === id) return o
  return id
}

// ---------------------------------------------------------------------------
// 3. Clusters
// ---------------------------------------------------------------------------
interface Cluster { keeper: string; absorbs?: string[]; title?: string; shortTitle?: string; description?: string; icon?: string; book: string }

const CLUSTERS: Cluster[] = [
  // ============ MATHEMATICS ============
  { book: 'math-master', keeper: 'math-a1', absorbs: ['math-m1'], title: 'Sets, Relations & Functions', shortTitle: 'Sets & Functions' },
  { book: 'math-master', keeper: 'math-a2', absorbs: ['math-m2', 'advmath-ch1', 'advmath-ch2'], title: 'Complex Numbers & Quadratic Equations', shortTitle: 'Complex & Quadratics' },
  { book: 'math-master', keeper: 'math-a5', absorbs: ['math-m3', 'advmath-ch3', 'advmath-ch12'], title: 'Matrices & Determinants', shortTitle: 'Matrices & Det' },
  { book: 'math-master', keeper: 'math-a4', absorbs: ['math-m4', 'math-m5', 'advmath-ch4'], title: 'Permutations, Combinations & the Binomial Theorem', shortTitle: 'P&C & Binomial' },
  { book: 'math-master', keeper: 'calc-ch11', absorbs: ['math-m6', 'math-a3', 'advmath-ch5', 'advmath-ch13'], title: 'Sequences, Series & Logarithms', shortTitle: 'Sequences & Series' },
  { book: 'math-master', keeper: 'advmath-ch11' },
  { book: 'math-master', keeper: 'advmath-ch16', title: 'Inequalities & Approximations', shortTitle: 'Inequalities' },
  { book: 'math-master', keeper: 'math-a7', absorbs: ['math-m14', 'advmath-ch6', 'advmath-ch14', 'advmath-ch15'], title: 'Trigonometry' },
  { book: 'math-master', keeper: 'math-a8', absorbs: ['advmath-ch7'], title: 'Two-Dimensional Coordinate Geometry', shortTitle: 'Coordinate Geometry' },
  { book: 'math-master', keeper: 'math-a9', absorbs: ['advmath-ch8'], title: 'Conic Sections' },
  { book: 'math-master', keeper: 'math-a10', absorbs: ['math-m11'], title: 'Three-Dimensional Geometry', shortTitle: '3D Geometry' },
  { book: 'math-master', keeper: 'math-a15', absorbs: ['math-m12'], title: 'Vector Algebra', shortTitle: 'Vectors' },
  { book: 'math-master', keeper: 'math-a6', absorbs: ['math-m13', 'advmath-ch10'], title: 'Probability & Statistics', shortTitle: 'Prob & Stats' },
  { book: 'math-master', keeper: 'calc-ch2', absorbs: ['math-a11'] },
  { book: 'math-master', keeper: 'calc-ch3', absorbs: ['math-a12'] },
  { book: 'math-master', keeper: 'calc-ch5', absorbs: ['math-a13'] },
  { book: 'math-master', keeper: 'calc-ch9', absorbs: ['math-m9', 'math-a14'] },
  { book: 'math-master', keeper: 'rosen-ch10', absorbs: ['engmath-ch14'] },
  // ============ PHYSICS ============
  { book: 'phys-master', keeper: 'young-ch1', absorbs: ['hall-ch1', 'ewen-ch0', 'ewen-ch1', 'ewen-ch2', 'ewen-ch3', 'coletta-ch0', 'phys-m1', 'phys-a1'], title: 'Units, Measurement & Vectors', shortTitle: 'Units & Vectors' },
  { book: 'phys-master', keeper: 'phys-ch1', title: 'Introduction — Atoms in Motion', shortTitle: 'Atoms in Motion' },
  { book: 'phys-master', keeper: 'phys-ch2', title: 'Probability in Physics', shortTitle: 'Probability' },
  { book: 'phys-master', keeper: 'hall-ch2', absorbs: ['young-ch2', 'coletta-ch1', 'coletta-ch2', 'ewen-ch4', 'phys-m2', 'phys-a2'], title: 'Motion in a Straight Line', shortTitle: 'Straight-Line Motion' },
  { book: 'phys-master', keeper: 'hall-ch4', absorbs: ['young-ch3', 'coletta-ch3'] },
  { book: 'phys-master', keeper: 'hall-ch5', absorbs: ['hall-ch6', 'young-ch4', 'young-ch5', 'coletta-ch4', 'coletta-ch5', 'ewen-ch5', 'phys-m3', 'phys-a3', 'phys-m4', 'phys-a4'], title: 'Force and Motion', shortTitle: 'Force & Motion' },
  { book: 'phys-master', keeper: 'hall-ch7', absorbs: ['young-ch6', 'coletta-ch7', 'ewen-ch8'] },
  { book: 'phys-master', keeper: 'hall-ch8', absorbs: ['young-ch7'] },
  { book: 'phys-master', keeper: 'hall-ch9', absorbs: ['young-ch8', 'coletta-ch8', 'ewen-ch6', 'phys-a4'], title: 'Momentum & Collisions', shortTitle: 'Momentum' },
  { book: 'phys-master', keeper: 'hall-ch10', absorbs: ['young-ch9', 'coletta-ch9', 'ewen-ch9', 'phys-m5', 'phys-a5', 'phys-ch5'], title: 'Rotation of Rigid Bodies', shortTitle: 'Rotation' },
  { book: 'phys-master', keeper: 'hall-ch11', absorbs: ['young-ch10'] },
  { book: 'phys-master', keeper: 'hall-ch12', absorbs: ['young-ch11', 'coletta-ch10', 'ewen-ch7'], title: 'Static Equilibrium & Elasticity', shortTitle: 'Equilibrium' },
  { book: 'phys-master', keeper: 'hall-ch13', absorbs: ['young-ch13', 'coletta-ch6', 'ewen-ch11', 'phys-m6', 'phys-a6'] },
  { book: 'phys-master', keeper: 'hall-ch14', absorbs: ['young-ch12', 'coletta-ch11', 'ewen-ch13', 'phys-m7', 'phys-a8'] },
  { book: 'phys-master', keeper: 'hall-ch15', absorbs: ['young-ch14', 'coletta-ch15', 'phys-m10', 'phys-a7', 'phys-ch6'] },
  { book: 'phys-master', keeper: 'hall-ch16', absorbs: ['young-ch15', 'coletta-ch16'] },
  { book: 'phys-master', keeper: 'hall-ch17', absorbs: ['young-ch16', 'ewen-ch16', 'phys-a9', 'phys-ch7'] },
  { book: 'phys-master', keeper: 'hall-ch18', absorbs: ['young-ch17', 'young-ch18', 'young-ch19', 'coletta-ch13', 'ewen-ch14', 'ewen-ch12', 'phys-a10'], title: 'Temperature, Heat & the First Law', shortTitle: 'Heat & First Law' },
  { book: 'phys-master', keeper: 'hall-ch19', absorbs: ['ewen-ch15', 'coletta-ch12', 'phys-m9', 'phys-a11'] },
  { book: 'phys-master', keeper: 'hall-ch20', absorbs: ['young-ch20', 'coletta-ch14', 'phys-m8'], title: 'Entropy & the Second Law', shortTitle: 'Entropy' },
  { book: 'phys-master', keeper: 'hall-ch21' },
  { book: 'phys-master', keeper: 'hall-ch22', absorbs: ['young-ch21', 'coletta-ch17', 'phys-m11', 'phys-a12'] },
  { book: 'phys-master', keeper: 'hall-ch23', absorbs: ['young-ch22'] },
  { book: 'phys-master', keeper: 'hall-ch24', absorbs: ['young-ch23', 'coletta-ch18'] },
  { book: 'phys-master', keeper: 'hall-ch25', absorbs: ['young-ch24', 'phys-a13'] },
  { book: 'phys-master', keeper: 'hall-ch26', absorbs: ['young-ch25', 'coletta-ch19', 'phys-m12', 'phys-a14'] },
  { book: 'phys-master', keeper: 'hall-ch27', absorbs: ['young-ch26', 'coletta-ch20'] },
  { book: 'phys-master', keeper: 'hall-ch28', absorbs: ['young-ch27', 'coletta-ch21', 'ewen-ch18', 'phys-m13', 'phys-a15'] },
  { book: 'phys-master', keeper: 'hall-ch29', absorbs: ['young-ch28'] },
  { book: 'phys-master', keeper: 'hall-ch30', absorbs: ['young-ch29', 'coletta-ch22', 'phys-m14', 'phys-a16'] },
  { book: 'phys-master', keeper: 'hall-ch31', absorbs: ['young-ch31', 'ewen-ch19'] },
  { book: 'phys-master', keeper: 'hall-ch33', absorbs: ['hall-ch32', 'young-ch32', 'young-ch33', 'ewen-ch20', 'coletta-ch23', 'phys-m15', 'phys-a17'], title: 'Electromagnetic Waves', shortTitle: 'EM Waves' },
  { book: 'phys-master', keeper: 'hall-ch34', absorbs: ['young-ch34', 'coletta-ch24', 'ewen-ch21', 'phys-m16', 'phys-a18'], title: 'Geometric Optics & Imaging', shortTitle: 'Geometric Optics' },
  { book: 'phys-master', keeper: 'hall-ch35', absorbs: ['young-ch35', 'coletta-ch26', 'phys-a19'] },
  { book: 'phys-master', keeper: 'hall-ch36', absorbs: ['young-ch36', 'ewen-ch22'] },
  { book: 'phys-master', keeper: 'hall-ch37', absorbs: ['young-ch37', 'coletta-ch27', 'ewen-ch24', 'phys-ch9'] },
  { book: 'phys-master', keeper: 'hall-ch38', absorbs: ['young-ch38', 'coletta-ch28', 'phys-m17', 'phys-a20'], title: 'Photons & Quantum Physics', shortTitle: 'Photons & Quanta' },
  { book: 'phys-master', keeper: 'hall-ch39', absorbs: ['young-ch39', 'young-ch40'], title: 'Matter Waves & Wave Functions', shortTitle: 'Matter Waves' },
  { book: 'phys-master', keeper: 'hall-ch40', absorbs: ['young-ch41', 'coletta-ch29'] },
  { book: 'phys-master', keeper: 'young-ch42', absorbs: ['hall-ch41', 'phys-m19'], title: 'Molecules, Solids & Conduction', shortTitle: 'Condensed Matter' },
  { book: 'phys-master', keeper: 'hall-ch42', absorbs: ['young-ch43', 'coletta-ch30', 'phys-m18', 'phys-a21'] },
  { book: 'phys-master', keeper: 'hall-ch44', absorbs: ['young-ch44'] },
  { book: 'phys-master', keeper: 'phys-m20' },
  { book: 'phys-master', keeper: 'ewen-ch10' },
  { book: 'phys-master', keeper: 'coletta-ch25' },
  // ============ CHEMISTRY ============
  { book: 'chem-complete', keeper: 'chem-ch1', absorbs: ['chem-m1', 'chem-a1'] },
  { book: 'chem-complete', keeper: 'chem-ch2', absorbs: ['chem-m2', 'chem-a3'] },
  { book: 'chem-complete', keeper: 'chem-ch11', absorbs: ['chem-m3', 'chem-m9', 'chem-a4', 'chem-a10'] },
  { book: 'chem-complete', keeper: 'chem-ch3', absorbs: ['chem-a2'] },
  { book: 'chem-complete', keeper: 'chem-ch4', absorbs: ['chem-m4', 'chem-a5'] },
  { book: 'chem-complete', keeper: 'chem-ch5', absorbs: ['chem-m6', 'chem-a6'] },
  { book: 'chem-complete', keeper: 'chem-ch6', absorbs: ['chem-m7', 'chem-a7'] },
  { book: 'chem-complete', keeper: 'chem-ch7', absorbs: ['chem-m8', 'chem-a8'] },
  { book: 'chem-complete', keeper: 'chem-ch27', absorbs: ['chem-m5'] },
  { book: 'chem-complete', keeper: 'chem-ch33' },
  { book: 'chem-complete', keeper: 'chem-ch34' },
  { book: 'chem-complete', keeper: 'chem-ch12', absorbs: ['chem-m12', 'chem-a14'] },
  { book: 'chem-complete', keeper: 'chem-ch13', absorbs: ['chem-m10', 'chem-m11', 'chem-a12', 'chem-a13', 'chem-a15'] },
  { book: 'chem-complete', keeper: 'chem-ch14', absorbs: ['chem-a11'] },
  { book: 'chem-complete', keeper: 'chem-ch39', absorbs: ['chem-m13', 'chem-m20', 'chem-a23'], title: 'Practical & Analytical Chemistry', shortTitle: 'Practical Chemistry' },
  { book: 'chem-complete', keeper: 'chem-ch8', absorbs: ['chem-m14', 'chem-a16'] },
  { book: 'chem-complete', keeper: 'chem-ch9', absorbs: ['chem-m15', 'chem-a17', 'chem-a18', 'chem-a19', 'chem-m16', 'chem-m17'] },
  { book: 'chem-complete', keeper: 'chem-ch21', absorbs: ['chem-a20'] },
  { book: 'chem-complete', keeper: 'chem-ch10', absorbs: ['chem-m18', 'chem-a21', 'chem-m19', 'chem-a22'] },
  { book: 'chem-complete', keeper: 'chem-ch44' },
  // ============ CSE ============
  { book: 'cse-complete', keeper: 'cse-e-pps', absorbs: ['ece-e-prog', 'ee-e-prog-c', 'me-e-prog-c'], title: 'Programming in C', shortTitle: 'C Programming' },
  { book: 'cse-complete', keeper: 'cse-e-python' },
  { book: 'cse-complete', keeper: 'cse-e-toc', absorbs: ['cse-g7', 'cse-d8'] },
  { book: 'cse-complete', keeper: 'cse-e-aca', title: 'Advanced Computer Architecture', shortTitle: 'Adv Architecture' },
  { book: 'cse-complete', keeper: 'cse-e-micro', absorbs: ['ece-e-micro', 'ee-e-microprocessors'], title: 'Microprocessors & Microcontrollers', shortTitle: 'Microprocessors' },
  { book: 'cse-complete', keeper: 'cse-e-dip', absorbs: ['ece-e-image-processing'], title: 'Image Processing', shortTitle: 'Image Processing' },
  { book: 'cse-complete', keeper: 'cse-e-ml' },
  { book: 'cse-complete', keeper: 'cse-e-ai' },
  { book: 'cse-complete', keeper: 'cse-e-deeplearning' },
  { book: 'cse-complete', keeper: 'cse-e-iot', absorbs: ['ece-e-iot'] },
  { book: 'cse-complete', keeper: 'cse-e-crypto', absorbs: ['cse-d12'], title: 'Cybersecurity & Cryptography', shortTitle: 'Cybersecurity' },
  { book: 'cse-complete', keeper: 'cse-e-sweng' },
  { book: 'cse-complete', keeper: 'cse-e-cgraphics' },
  { book: 'cse-complete', keeper: 'cse-e-blockchain' },
  { book: 'cse-complete', keeper: 'cse-e-cloud' },
  { book: 'cse-complete', keeper: 'cse-e-bigdata' },
  // ============ ECE ============
  { book: 'ece-complete', keeper: 'ece-e-networks', absorbs: ['ece-d2'], title: 'Network Analysis & Synthesis', shortTitle: 'Network Analysis' },
  { book: 'ece-complete', keeper: 'ece-e-devices', absorbs: ['ece-d4', 'ece-e-basic-electronics', 'cse-e-basic-electronics', 'ee-e-basic-electronics', 'elec-ch12', 'elec-ch13', 'elec-ch14', 'elec-ch23', 'elec-ch24', 'elec-ch25'] },
  { book: 'ece-complete', keeper: 'ece-e-digital', absorbs: ['ece-d6', 'ee-e-digital', 'elec-ch18'] },
  { book: 'ece-complete', keeper: 'ece-e-sigsys', absorbs: ['ece-d3', 'ee-e-signals', 'ee-d8', 'elec-ch11', 'sigctrl-ch1', 'sigctrl-ch2', 'sigctrl-ch3'], title: 'Signals & Systems', shortTitle: 'Signals & Systems' },
  { book: 'ece-complete', keeper: 'ece-e-dsp', absorbs: ['ece-d10', 'sigctrl-ch4'], title: 'Digital Signal Processing', shortTitle: 'DSP' },
  { book: 'ece-complete', keeper: 'ece-e-analog', absorbs: ['ece-d5', 'ee-e-analog', 'elec-ch21', 'elec-ch26', 'elec-ch27', 'elec-ch28', 'elec-ch29', 'elec-ch30', 'elec-ch16', 'elec-ch17'], title: 'Analog Circuits', shortTitle: 'Analog Circuits' },
  { book: 'ece-complete', keeper: 'ece-e-ic', absorbs: ['elec-ch15', 'elec-ch22'], title: 'Analog Integrated Circuits', shortTitle: 'Analog ICs' },
  { book: 'ece-complete', keeper: 'ece-e-analog-comm', absorbs: ['commem-ch1', 'commem-ch2'] },
  { book: 'ece-complete', keeper: 'ece-e-digital-comm', absorbs: ['commem-ch3', 'commem-ch4'] },
  { book: 'ece-complete', keeper: 'ece-e-emft', absorbs: ['ece-d7', 'ee-e-emft', 'ee-d10', 'commem-ch5'], title: 'Electromagnetic Field Theory', shortTitle: 'EM Field Theory' },
  { book: 'ece-complete', keeper: 'ece-e-antennas', absorbs: ['commem-ch6'] },
  { book: 'ece-complete', keeper: 'ece-e-control', absorbs: ['ece-d8', 'ee-e-control', 'ee-e-modern-control', 'ee-d7', 'sigctrl-ch5', 'sigctrl-ch6'], title: 'Control Systems', shortTitle: 'Control Systems' },
  { book: 'ece-complete', keeper: 'ece-e-instrumentation' },
  { book: 'ece-complete', keeper: 'ece-e-vlsi-tech' },
  { book: 'ece-complete', keeper: 'ece-e-vlsi-design' },
  { book: 'ece-complete', keeper: 'ece-e-optical-comm' },
  { book: 'ece-complete', keeper: 'ece-e-optical-networks' },
  { book: 'ece-complete', keeper: 'ece-e-data-comm' },
  { book: 'ece-complete', keeper: 'ece-e-wireless' },
  { book: 'ece-complete', keeper: 'ece-e-microwave-radar' },
  { book: 'ece-complete', keeper: 'ece-e-satellite' },
  { book: 'ece-complete', keeper: 'ece-e-embedded' },
  { book: 'ece-complete', keeper: 'ece-e-speechbio' },
  // ============ EE ============
  { book: 'ee-complete', keeper: 'ee-e-basic-electrical', absorbs: ['cse-e-bee', 'ece-e-electech', 'elec-ch1', 'elec-ch2', 'elec-ch3'], title: 'Basic Electrical Engineering', shortTitle: 'Basic Electrical' },
  { book: 'ee-complete', keeper: 'ee-e-circuits', absorbs: ['ee-d2', 'elec-ch4', 'elec-ch5', 'elec-ch6', 'elec-ch7', 'elec-ch8', 'elec-ch9', 'elec-ch10'], title: 'Electric Circuit Analysis', shortTitle: 'Circuit Analysis' },
  { book: 'ee-complete', keeper: 'ee-e-machines1' },
  { book: 'ee-complete', keeper: 'ee-e-machines2' },
  { book: 'ee-complete', keeper: 'ee-e-specmach' },
  { book: 'ee-complete', keeper: 'ee-e-materials' },
  { book: 'ee-complete', keeper: 'ee-e-ps1' },
  { book: 'ee-complete', keeper: 'ee-e-psa' },
  { book: 'ee-complete', keeper: 'ee-e-protection' },
  { book: 'ee-complete', keeper: 'ee-e-ps2' },
  { book: 'ee-complete', keeper: 'ee-e-utilization' },
  { book: 'ee-complete', keeper: 'ee-e-power-electronics', absorbs: ['ee-d5', 'ece-e-industrial', 'elec-ch20'], title: 'Power Electronics & Drives', shortTitle: 'Power Electronics' },
  { book: 'ee-complete', keeper: 'ee-e-machine-design' },
  { book: 'ee-complete', keeper: 'ee-e-measurements', absorbs: ['ee-d6'] },
  { book: 'ee-complete', keeper: 'ee-e-energy', absorbs: ['me-e-renewable', 'me-d12'], title: 'Energy Systems & Renewables', shortTitle: 'Energy Systems' },
  { book: 'ee-complete', keeper: 'ee-e-instrumentation' },
  { book: 'ee-complete', keeper: 'ee-e-ev' },
  { book: 'ee-complete', keeper: 'ee-e-hvdc-facts' },
  // ============ ME ============
  { book: 'me-complete', keeper: 'me-e-graphics', absorbs: ['cse-e-graphics', 'ece-e-graphics'] },
  { book: 'me-complete', keeper: 'me-e-mechanics', absorbs: ['cse-e-mechanics'] },
  { book: 'me-complete', keeper: 'me-e-thermo', absorbs: ['me-d3'] },
  { book: 'me-complete', keeper: 'me-e-fluids' },
  { book: 'me-complete', keeper: 'me-e-strength' },
  { book: 'me-complete', keeper: 'me-e-materials', absorbs: ['me-d9'] },
  { book: 'me-complete', keeper: 'me-e-machine-drawing' },
  { book: 'me-complete', keeper: 'me-e-metrology' },
  { book: 'me-complete', keeper: 'me-e-tom1' },
  { book: 'me-complete', keeper: 'me-e-mfg1' },
  { book: 'me-complete', keeper: 'me-e-industrial', absorbs: ['me-d10'] },
  { book: 'me-complete', keeper: 'me-e-design' },
  { book: 'me-complete', keeper: 'me-e-heat', absorbs: ['me-d4'] },
  { book: 'me-complete', keeper: 'me-e-tom2' },
  { book: 'me-complete', keeper: 'me-e-mfg2' },
  { book: 'me-complete', keeper: 'me-e-ice' },
  { book: 'me-complete', keeper: 'me-e-rac' },
  { book: 'me-complete', keeper: 'me-e-fluid-mach' },
  { book: 'me-complete', keeper: 'me-e-automobile' },
  { book: 'me-complete', keeper: 'me-e-powerplant' },
  { book: 'me-complete', keeper: 'me-e-cadcam' },
  { book: 'me-complete', keeper: 'me-e-mechatronics', absorbs: ['me-d11'] },
  { book: 'me-complete', keeper: 'me-e-robotics' },
  // ============ ENGLISH / APTITUDE ============
  { book: 'english-complete', keeper: 'eng-r1' },
  { book: 'english-complete', keeper: 'eng-r2' },
  { book: 'english-complete', keeper: 'eng-r3' },
  { book: 'english-complete', keeper: 'eng-r4' },
  { book: 'english-complete', keeper: 'eng-l1' },
  { book: 'aptitude-complete', keeper: 'apt-r1' },
  { book: 'aptitude-complete', keeper: 'apt-g1' },
  { book: 'aptitude-complete', keeper: 'apt-gensci' },
  { book: 'aptitude-complete', keeper: 'apt-q1' },
]

// ---------------------------------------------------------------------------
// 4. Final chapter order per book
// ---------------------------------------------------------------------------
const range = (prefix: string, n: number, start = 1) => Array.from({ length: n }, (_, i) => `${prefix}${start + i}`)
const BOOK_ORDER: Record<string, string[]> = {
  'math-master': [
    ...range('rosen-ch', 13), ...range('calc-ch', 17),
    'math-a1', 'math-a2', 'math-a5', 'math-a4', 'advmath-ch11', 'advmath-ch16',
    'math-a7', 'math-a8', 'math-a9', 'math-a10', 'math-a15', 'math-a6',
    'math-sk1', 'math-sk2', 'math-sk3', 'math-sk4',
    ...range('engmath-ch', 13), ...range('engmath-ch', 10, 15),
  ],
  'phys-master': [
    'young-ch1', 'phys-ch1', 'phys-ch2',
    'hall-ch2', 'hall-ch4', 'hall-ch5', 'hall-ch7', 'hall-ch8', 'hall-ch9', 'hall-ch10', 'hall-ch11',
    'hall-ch12', 'hall-ch13', 'hall-ch14', 'hall-ch15', 'hall-ch16', 'hall-ch17', 'hall-ch18', 'hall-ch19',
    'hall-ch20', 'hall-ch21', 'hall-ch22', 'hall-ch23', 'hall-ch24', 'hall-ch25', 'hall-ch26', 'hall-ch27',
    'hall-ch28', 'hall-ch29', 'hall-ch30', 'hall-ch31', 'hall-ch33', 'hall-ch34', 'hall-ch35', 'hall-ch36',
    'hall-ch37', 'hall-ch38', 'hall-ch39', 'hall-ch40', 'young-ch42', 'hall-ch42', 'hall-ch43', 'hall-ch44',
    'phys-lasers', 'ewen-ch10', 'coletta-ch25', 'phys-m20',
  ],
  'chem-complete': [...range('chem-ch', 44), 'chem-engg'],
  'english-complete': ['eng-r1', 'eng-r2', 'eng-r3', 'eng-r4', 'eng-l1'],
  'aptitude-complete': ['apt-r1', 'apt-g1', 'apt-gensci', 'apt-q1'],
  'cse-complete': [
    'cse-e-pps', 'cse-e-python', ...range('cpp-ch', 44), ...range('java-ch', 12), ...range('js-ch', 17), ...range('web-ch', 26),
    'cse-e-toc', ...range('clrs-ch', 39), ...range('mano-ch', 12), ...range('compcoa-ch', 10),
    'cse-e-aca', 'cse-e-micro', ...range('osc-ch', 15), ...range('dbms-ch', 8), ...range('cn-ch', 8),
    'cse-e-sweng', 'cse-e-cgraphics', 'cse-e-dip', 'cse-e-ai', 'cse-e-ml', 'cse-e-deeplearning',
    'cse-e-blockchain', 'cse-e-iot', 'cse-e-cloud', 'cse-e-crypto', 'cse-e-bigdata',
  ],
  'ece-complete': [
    'ece-e-networks', 'ece-e-devices', 'ece-e-digital', 'ece-e-sigsys', 'ece-e-dsp', 'ece-e-analog',
    'ece-e-ic', 'ece-e-analog-comm', 'ece-e-digital-comm', 'ece-e-emft', 'ece-e-antennas', 'ece-e-control',
    'ece-e-instrumentation', 'ece-e-vlsi-tech', 'ece-e-vlsi-design', 'ece-e-optical-comm', 'ece-e-optical-networks',
    'ece-e-data-comm', 'ece-e-wireless', 'ece-e-microwave-radar', 'ece-e-satellite', 'ece-e-embedded', 'ece-e-speechbio',
  ],
  'ee-complete': [
    'ee-e-basic-electrical', 'ee-e-circuits', 'ee-e-machines1', 'ee-e-machines2', 'ee-e-specmach', 'ee-e-materials',
    'ee-e-ps1', 'ee-e-psa', 'ee-e-protection', 'ee-e-ps2', 'ee-e-utilization', 'ee-e-power-electronics',
    'ee-e-machine-design', 'ee-e-measurements', 'ee-e-energy', 'ee-e-instrumentation', 'ee-e-ev', 'ee-e-hvdc-facts',
  ],
  'me-complete': [
    'me-e-graphics', 'me-e-mechanics', 'me-e-thermo', 'me-e-fluids', 'me-e-strength', 'me-e-materials',
    'me-e-machine-drawing', 'me-e-metrology', 'me-e-tom1', 'me-e-mfg1', 'me-e-industrial', 'me-e-design',
    'me-e-heat', 'me-e-tom2', 'me-e-mfg2', 'me-e-ice', 'me-e-rac', 'me-e-fluid-mach', 'me-e-automobile',
    'me-e-powerplant', 'me-e-cadcam', 'me-e-mechatronics', 'me-e-robotics',
  ],
}

// ---------------------------------------------------------------------------
// 5. New chapters
// ---------------------------------------------------------------------------
interface NewChapter { id: string; book: string; title: string; shortTitle: string; description: string; icon: string; pages: string; interactiveKey: string }
const NEW_CHAPTERS: NewChapter[] = [
  {
    id: 'phys-lasers', book: 'phys-master', title: 'Lasers & Optical Fibres', shortTitle: 'Lasers & Fibres',
    description: 'Stimulated emission and laser action, properties of laser light, laser systems and their applications, and the physics of optical fibres that carry modern communications — applied photonics for engineering.',
    icon: 'zap', pages: 'Applied physics curriculum', interactiveKey: 'wave-lab',
  },
  {
    id: 'chem-engg', book: 'chem-complete', title: 'Engineering Chemistry', shortTitle: 'Engg Chemistry',
    description: 'Chemistry at work in engineering: water hardness and treatment, corrosion science and its control, fuels and combustion, lubricants, polymers and plastics, nanomaterials and green chemistry — the applied first-year curriculum in one place.',
    icon: 'cog', pages: 'Applied chemistry curriculum', interactiveKey: 'molecular-lab',
  },
]

// auto-add trivial clusters for remaining BOOK_ORDER ids
const newIds = new Set(NEW_CHAPTERS.map((n) => n.id))
for (const [book, order] of Object.entries(BOOK_ORDER)) {
  for (const id of order) {
    if (CLUSTERS.some((c) => c.keeper === id)) continue
    CLUSTERS.push({ keeper: id, book })
  }
}

// validate clusters
const absorbedBy = new Map<string, string>()
for (const c of CLUSTERS) {
  const oldKeeper = resolveOld(c.keeper)
  if (!chById.has(oldKeeper)) console.error(`!! keeper not found: ${c.keeper}`)
  for (const a of c.absorbs ?? []) {
    if (!chById.has(a)) console.error(`!! absorbed chapter not found: ${a}`)
    if (absorbedBy.has(a)) console.error(`!! chapter absorbed twice: ${a}`)
    absorbedBy.set(a, c.keeper)
  }
}
for (const [book, order] of Object.entries(BOOK_ORDER)) {
  for (const id of order) {
    if (absorbedBy.has(id)) console.error(`!! BOOK_ORDER contains absorbed chapter ${id} in ${book}`)
    if (newIds.has(id)) continue
    if (!CLUSTERS.some((c) => c.keeper === id)) console.error(`!! BOOK_ORDER id without cluster: ${id}`)
  }
}

// ---------------------------------------------------------------------------
// 6. Section routes (old section id -> NEW keeper id or '__DROP__')
// ---------------------------------------------------------------------------
const R: Record<string, string> = {}
const drop = (id: string) => (R[id] = '__DROP__')
const route = (ids: string[], to: string) => ids.forEach((i) => (R[i] = to))

// ---- Mathematics section splits ----
route(['math-m10-s1', 'math-m10-s2', 'math-m10-s3', 'math-m10-s4'], 'math-a8')
route(['math-m10-s5'], 'math-a9')
route(['math-m7-s1'], 'calc-ch1')
route(['math-m7-s2'], 'calc-ch2')
route(['math-m7-s3'], 'calc-ch3')
route(['math-m7-s4'], 'calc-ch4')
route(['math-m8-s1', 'math-m8-s3', 'math-m8-s4'], 'calc-ch5')
route(['math-m8-s2'], 'calc-ch7')
route(['math-m8-s5'], 'calc-ch6')
route(['math-a13-s3'], 'calc-ch7')
route(['math-a13-s6'], 'calc-ch6')
route(['advmath-ch9-s1'], 'math-a15')
route(['advmath-ch9-s2', 'advmath-ch9-s3', 'advmath-ch9-s4'], 'math-a10')
// branch engineering-math: keep only genuinely unique topics
route(['ee-e-math3-s1', 'me-e-math3-s1'], 'engmath-ch4') // series solutions of ODEs
route(['cse-e-math3-s5'], 'engmath-ch13') // Runge-Kutta + calculus of variations

// ---- Physics: Feynman lecture section routes ----
route(['phys-ch3-s1'], 'hall-ch2')
route(['phys-ch3-s2', 'phys-ch3-s5'], 'hall-ch5')
route(['phys-ch3-s3'], 'hall-ch9')
route(['phys-ch3-s4'], 'young-ch1')
route(['phys-ch4-s1'], 'hall-ch7')
route(['phys-ch4-s2'], 'hall-ch13')
route(['phys-ch4-s3', 'phys-ch4-s4'], 'hall-ch8')
route(['phys-ch5-s3'], 'hall-ch11')
route(['phys-ch7-s1'], 'hall-ch16')
route(['phys-ch8-s1', 'phys-ch8-s2'], 'hall-ch34')
route(['phys-ch8-s3'], 'hall-ch35')
route(['phys-ch8-s4'], 'hall-ch36')
route(['phys-ch10-s1', 'phys-ch10-s2', 'phys-ch10-s3'], 'hall-ch19')
route(['phys-ch10-s4'], 'hall-ch18')
route(['phys-ch10-s5'], 'hall-ch20')
route(['phys-ch11-s1', 'phys-ch11-s2', 'phys-ch11-s4'], 'hall-ch22')
route(['phys-ch11-s3'], 'hall-ch23')
route(['phys-ch11-s5'], 'hall-ch24')
route(['phys-ch12-s1'], 'hall-ch25')
route(['phys-ch12-s2'], 'hall-ch29')
route(['phys-ch12-s3'], 'hall-ch30')
route(['phys-ch13-s1', 'phys-ch13-s2', 'phys-ch13-s4'], 'hall-ch33')
route(['phys-ch13-s3'], 'hall-ch31')
route(['phys-ch14-s1'], 'hall-ch37')
route(['phys-ch14-s2'], 'hall-ch33')
route(['phys-ch14-s3'], 'young-ch42')
route(['phys-ch14-s4'], 'hall-ch28')
route(['phys-ch14-s5'], 'hall-ch14')
route(['phys-ch15-s1', 'phys-ch15-s2'], 'hall-ch39')
route(['phys-ch15-s3', 'phys-ch15-s4', 'phys-ch15-s5'], 'hall-ch40')

// ---- Physics: entrance-scope section splits ----
route(['phys-a1-s5'], 'phys-m20')
route(['phys-a2-s2', 'phys-a2-s3'], 'hall-ch4')
route(['phys-m4-s4'], 'hall-ch9')
route(['phys-a4-s2', 'phys-a4-s3', 'phys-a4-s4'], 'hall-ch9')
route(['phys-m7-s1'], 'hall-ch12')
route(['phys-m7-s2', 'phys-m7-s3', 'phys-m7-s4'], 'hall-ch14')
route(['phys-m7-s5', 'phys-m7-s6'], 'hall-ch18')
route(['phys-a7-s4'], 'hall-ch12')
route(['phys-m8-s1', 'phys-m8-s2'], 'hall-ch18')
route(['phys-a10-s5'], 'hall-ch38')
route(['phys-a11-s4'], 'hall-ch18')
route(['phys-a11-s5', 'phys-a11-s6'], 'hall-ch20')
route(['phys-m10-s3', 'phys-m10-s4'], 'hall-ch16')
route(['phys-m11-s1'], 'hall-ch21')
route(['phys-m11-s2', 'phys-m11-s4'], 'hall-ch22')
route(['phys-m11-s3'], 'hall-ch23')
route(['phys-m11-s5'], 'hall-ch25')
route(['phys-a12-s1'], 'hall-ch21')
route(['phys-a12-s2', 'phys-a12-s4'], 'hall-ch22')
route(['phys-a12-s3'], 'hall-ch24')
route(['phys-a12-s5'], 'hall-ch23')
route(['phys-m12-s4'], 'hall-ch27')
route(['phys-a14-s3'], 'hall-ch27')
route(['phys-m13-s1'], 'hall-ch29')
route(['phys-m13-s2', 'phys-m13-s3', 'phys-m13-s4', 'phys-m13-s5'], 'hall-ch28')
route(['phys-a15-s1', 'phys-a15-s2', 'phys-a15-s3'], 'hall-ch29')
route(['phys-a15-s4', 'phys-a15-s5', 'phys-a15-s6'], 'hall-ch28')
route(['phys-m14-s3', 'phys-m14-s4'], 'hall-ch31')
route(['phys-a16-s3'], 'hall-ch30')
route(['phys-a16-s4'], 'hall-ch31')
route(['phys-m16-s1', 'phys-m16-s2', 'phys-m16-s3'], 'hall-ch34')
route(['phys-m16-s4', 'phys-m16-s5'], 'hall-ch35')
route(['phys-m16-s6'], 'hall-ch36')
route(['phys-a19-s4'], 'hall-ch36')
route(['phys-a20-s2', 'phys-a20-s3', 'phys-a20-s4'], 'hall-ch40')
route(['phys-a20-s5'], 'hall-ch39')
route(['phys-m18-s1'], 'hall-ch40')
route(['phys-m18-s2', 'phys-m18-s3', 'phys-m18-s4'], 'hall-ch42')

// ---- Physics: ewen-ch17 Basic Electricity (broken numbering) ----
route(['ewen-ch17-s1', 'ewen-ch17-s7'], 'hall-ch21')
route(['ewen-ch17-s8'], 'hall-ch22')
route(['ewen-ch17-s2', 'ewen-ch17-s3', 'ewen-ch17-s4', 'ewen-ch17-s5', 'ewen-ch17-s10'], 'hall-ch26')
route(['ewen-ch17-s9', 'ewen-ch17-s11', 'ewen-ch17-s12', 'ewen-ch17-s13'], 'hall-ch27')
route(['ewen-ch17-s6'], 'hall-ch30')

// ---- Physics: ewen-ch23 Modern Physics ----
route(['ewen-ch23-s1', 'ewen-ch23-s2'], 'hall-ch38')
route(['ewen-ch23-s3', 'ewen-ch23-s4', 'ewen-ch23-s5'], 'hall-ch40')
route(['ewen-ch23-s6', 'ewen-ch23-s7', 'ewen-ch23-s8', 'ewen-ch23-s10'], 'hall-ch42')
route(['ewen-ch23-s9'], 'hall-ch43')

// ---- Engg-physics chapters (4 branches) ----
for (const p of ['cse-e-physics', 'ece-e-physics', 'ee-e-physics', 'me-e-physics']) {
  route([`${p}-s1`], 'hall-ch35')
  route([`${p}-s2`], 'phys-lasers')
  route([`${p}-s3`], 'hall-ch38')
  route([`${p}-s4`], 'young-ch42')
  route([`${p}-s5`], 'hall-ch33')
}

// ---- Engg-chemistry chapters -> chemistry book (applied topics only) ----
for (const c of ['cse-e-chemistry', 'ece-e-chemistry', 'ee-e-chem', 'me-e-chem']) {
  for (const s of sectionsByChapter.get(c) ?? []) {
    if (/water|corrosion|polymer|fuel|lubricant|nanomaterial|green|materials chemistry/i.test(s.title)) route([s.id], 'chem-engg')
    else drop(s.id) // atomic structure / thermodynamics / electrochemistry: covered by chemistry keepers
  }
}

// ---- Chemistry section splits ----
route(['chem-a2-s5', 'chem-a2-s6'], 'chem-ch34')
route(['chem-a9-s1', 'chem-a9-s2', 'chem-a9-s3'], 'chem-ch33')
route(['chem-a9-s4', 'chem-a9-s5'], 'chem-ch27')
route(['chem-a9-s6'], 'chem-ch7')
route(['chem-a22-s4'], 'chem-ch44')

// ---- CSE section routes ----
route(['cse-e-discrete-s4'], 'rosen-ch9') // lattices & algebraic structures
route(['cse-d13-s1', 'cse-d13-s2'], 'cse-e-ml')
route(['cse-d13-s3'], 'cse-e-ai')
route(['cse-d13-s4'], 'cse-e-deeplearning')
route(['ece-d11-s3', 'ee-d9-s3'], 'cse-e-micro')

// ---- ECE defence-scope section routes ----
route(['ece-d9-s1', 'ece-d9-s2'], 'ece-e-analog-comm')
route(['ece-d9-s3', 'ece-d9-s4'], 'ece-e-digital-comm')
route(['ece-d9-s5'], 'ece-e-optical-comm')
route(['ece-d11-s1'], 'ece-e-vlsi-tech')
route(['ece-d11-s2'], 'ece-e-vlsi-design')
route(['ece-d11-s4', 'ee-d9-s4'], 'ece-e-embedded')
route(['ece-d12-s1', 'ece-d12-s2'], 'ece-e-data-comm')
route(['ece-d12-s3'], 'ece-e-wireless')
route(['ece-d12-s4'], 'ece-e-microwave-radar')
route(['ece-d12-s5'], 'ece-e-satellite')
route(['ee-d9-s1'], 'ece-e-analog')
route(['ee-d9-s2'], 'ece-e-digital')

// ---- EE defence-scope section routes ----
route(['ee-d3-s1', 'ee-d3-s2', 'ee-d3-s4'], 'ee-e-machines1')
route(['ee-d3-s3'], 'ee-e-machines2')
route(['ee-d3-s5'], 'ee-e-specmach')
route(['ee-d4-s1', 'ee-d4-s2'], 'ee-e-ps1')
route(['ee-d4-s3'], 'ee-e-psa')
route(['ee-d4-s4'], 'ee-e-protection')
route(['ee-d4-s5'], 'ee-e-ps2')
route(['ee-d11-s1', 'ee-d11-s3'], 'ee-e-utilization')
route(['ee-d11-s2'], 'ee-e-materials')

// ---- ME defence-scope section routes ----
route(['me-d2-s1', 'me-d2-s2', 'me-d2-s3'], 'me-e-fluids')
route(['me-d2-s4', 'me-d2-s5'], 'me-e-fluid-mach')
route(['me-d5-s1', 'me-d5-s2'], 'me-e-ice')
route(['me-d5-s3'], 'me-e-rac')
route(['me-d5-s4', 'me-d5-s5'], 'me-e-powerplant')
route(['me-d6-s1'], 'me-e-mechanics')
route(['me-d6-s2', 'me-d6-s3', 'me-d6-s4'], 'me-e-strength')
route(['me-d7-s1', 'me-d7-s2'], 'me-e-tom1')
route(['me-d7-s3', 'me-d7-s4'], 'me-e-tom2')
route(['me-d7-s5'], 'me-e-design')
route(['me-d8-s1'], 'me-e-mfg1')
route(['me-d8-s2'], 'me-e-mfg2')
route(['me-d8-s3'], 'me-e-metrology')
route(['me-d8-s4'], 'me-e-cadcam')
// elec-ch19 Machines & Transformers split
route(['elec-ch19-s1', 'elec-ch19-s2', 'elec-ch19-s4'], 'ee-e-machines1')
route(['elec-ch19-s3'], 'ee-e-machines2')

// ---- Branch common chapters -> home subjects ----
for (const s of sectionsByChapter.get('cse-e-bee') ?? []) route([s.id], 'ee-e-basic-electrical')
for (const s of sectionsByChapter.get('ece-e-electech') ?? []) route([s.id], 'ee-e-basic-electrical')
for (const s of sectionsByChapter.get('cse-e-graphics') ?? []) route([s.id], 'me-e-graphics')
for (const s of sectionsByChapter.get('ece-e-graphics') ?? []) route([s.id], 'me-e-graphics')
for (const s of sectionsByChapter.get('cse-e-mechanics') ?? []) route([s.id], 'me-e-mechanics')
for (const s of sectionsByChapter.get('cse-e-basic-electronics') ?? []) route([s.id], 'ece-e-devices')
for (const s of sectionsByChapter.get('ece-e-basic-electronics') ?? []) route([s.id], 'ece-e-devices')
for (const s of sectionsByChapter.get('ee-e-basic-electronics') ?? []) route([s.id], 'ece-e-devices')
for (const s of sectionsByChapter.get('ece-e-prog') ?? []) route([s.id], 'cse-e-pps')
for (const s of sectionsByChapter.get('ee-e-prog-c') ?? []) route([s.id], 'cse-e-pps')
for (const s of sectionsByChapter.get('me-e-prog-c') ?? []) route([s.id], 'cse-e-pps')

// ---------------------------------------------------------------------------
// 7. Build final chapters
// ---------------------------------------------------------------------------
interface KeptSection { origId: string; finalId: string; title: string; description: string; content: boolean }
interface FinalChapter {
  id: string; book: string; number: number; title: string; shortTitle: string; description: string
  icon: string; pages: string; interactiveKey: string; sections: KeptSection[]; appendCounter: number
}
const finalChapters: FinalChapter[] = []
const stats = { kept: 0, dropped: 0, swapped: 0, droppedContent: 0 }
const idMapping = new Map<string, string>()

function tryAbsorb(section: Section, target: FinalChapter): void {
  const t = toks(section.title)
  const srcContent = hasContent(section.id)
  for (let i = 0; i < target.sections.length; i++) {
    const k = target.sections[i]
    const kt = toks(k.title)
    const s = sim(t, kt)
    const dup = s.j >= 0.6 || (s.subset && Math.min(t.length, kt.length) >= 2)
    if (!dup) continue
    if (srcContent && !k.content && s.j >= 0.5) {
      // swap: content-bearing absorbed section takes over the keeper slot id
      target.sections[i] = { origId: section.id, finalId: k.finalId, title: section.title, description: section.description, content: true }
      idMapping.set(section.id, k.finalId)
      stats.swapped++
      stats.kept++
      return
    }
    if (srcContent && s.j < 0.75) continue // uncertain + has content -> keep both
    if (srcContent) stats.droppedContent++
    stats.dropped++
    return
  }
  const finalId = `${target.id}-s${++target.appendCounter}`
  target.sections.push({ origId: section.id, finalId, title: section.title, description: section.description, content: srcContent })
  if (finalId !== section.id) idMapping.set(section.id, finalId)
  stats.kept++
}

for (const cluster of CLUSTERS) {
  const keeperId = cluster.keeper
  const oldKeeper = resolveOld(keeperId)
  const ch = chById.get(oldKeeper)!
  const originals = sectionsByChapter.get(oldKeeper) ?? []
  const sections: KeptSection[] = originals.map((s) => {
    const finalId = `${keeperId}-s${suffixOf(s.id)}`
    if (finalId !== s.id) idMapping.set(s.id, finalId)
    return { origId: s.id, finalId, title: s.title, description: s.description, content: hasContent(s.id) }
  })
  const fc: FinalChapter = {
    id: keeperId, book: cluster.book, number: 0,
    title: cluster.title ?? ch.title, shortTitle: cluster.shortTitle ?? ch.shortTitle,
    description: cluster.description ?? ch.description, icon: cluster.icon ?? ch.icon,
    pages: ch.pages, interactiveKey: ch.interactiveKey,
    sections, appendCounter: originals.length,
  }
  for (const absorb of cluster.absorbs ?? []) {
    for (const s of sectionsByChapter.get(absorb) ?? []) {
      const explicit = R[s.id]
      if (explicit === '__DROP__') { stats.dropped++; if (hasContent(s.id)) stats.droppedContent++; continue }
      if (explicit && explicit !== keeperId) continue // routed elsewhere
      tryAbsorb(s, fc)
    }
  }
  finalChapters.push(fc)
}

// New chapters: collect routed sections
const fcById = new Map(finalChapters.map((c) => [c.id, c]))
for (const nc of NEW_CHAPTERS) {
  const fc: FinalChapter = { ...nc, number: 0, sections: [], appendCounter: 0 }
  finalChapters.push(fc)
  fcById.set(nc.id, fc)
}

// Standalone routed sections (source chapters not absorbed by that cluster)
for (const [secId, targetId] of Object.entries(R)) {
  if (targetId === '__DROP__') continue
  const fc = fcById.get(targetId)
  if (!fc) { console.error(`!! route target missing: ${targetId}`); continue }
  if (NEW_CHAPTERS.some((n) => n.id === targetId)) {
    const sec = LIBRARY_SECTIONS.find((s) => s.id === secId) as Section | undefined
    if (sec) tryAbsorb(sec, fc)
    continue
  }
  const sec = LIBRARY_SECTIONS.find((s) => s.id === secId) as Section | undefined
  if (!sec) continue
  const sourceChapter = sec.chapterId
  if (absorbedBy.get(sourceChapter) === targetId) continue // handled in cluster pass
  if (fc.sections.some((k) => k.origId === secId)) continue
  tryAbsorb(sec, fc)
}

// ---------------------------------------------------------------------------
// 8. Assemble books, assign numbers
// ---------------------------------------------------------------------------
const books: { id: string; chapters: FinalChapter[] }[] = []
for (const [bookId, order] of Object.entries(BOOK_ORDER)) {
  const chs: FinalChapter[] = []
  let n = 0
  for (const id of order) {
    const found = fcById.get(id)
    if (!found) { console.error(`!! MISSING CHAPTER ${id} for book ${bookId}`); continue }
    found.number = ++n
    chs.push(found)
  }
  books.push({ id: bookId, chapters: chs })
}
for (const c of finalChapters) {
  if (c.number === 0) console.error(`!! chapter never assigned to a book: ${c.id}`)
}

// ---------------------------------------------------------------------------
// 9. Emit merged library-parts files
// ---------------------------------------------------------------------------
const esc = (v: string) => v.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
const OUT = path.resolve(__dirname, '../src/data/library-parts/merged')
fs.mkdirSync(OUT, { recursive: true })

const BOOK_FILES: Record<string, { file: string; prefix: string; title: string }> = {
  'math-master': { file: 'math', prefix: 'MATH', title: 'Mathematics Master Library' },
  'phys-master': { file: 'physics', prefix: 'PHYS', title: 'Physics Master Library' },
  'chem-complete': { file: 'chemistry', prefix: 'CHEM', title: 'Chemistry Library' },
  'english-complete': { file: 'english', prefix: 'ENGLISH', title: 'English Library' },
  'aptitude-complete': { file: 'aptitude', prefix: 'APT', title: 'Aptitude Library' },
  'cse-complete': { file: 'cse', prefix: 'CSE', title: 'CSE Complete Curriculum' },
  'ece-complete': { file: 'ece', prefix: 'ECE', title: 'ECE Complete Curriculum' },
  'ee-complete': { file: 'ee', prefix: 'EE', title: 'EE Complete Curriculum' },
  'me-complete': { file: 'me', prefix: 'ME', title: 'ME Complete Curriculum' },
}
const reportLines: string[] = []
for (const [bookId, meta] of Object.entries(BOOK_FILES)) {
  const book = books.find((b) => b.id === bookId)!
  let out = `// ============================================================================\n// ${meta.title} — consolidated subject-wise (${book.chapters.length} chapters)\n// Generated by scripts/consolidate.ts. Curriculum/exam provenance is documented\n// in code comments and research/*.md only (product rule: no exam names in UI).\n// ============================================================================\nimport type { ChapterMeta, SectionMeta } from '../../library'\n\nexport const ${meta.prefix}_CHAPTERS: ChapterMeta[] = [\n`
  for (const ch of book.chapters) {
    out += `  { id: '${ch.id}', bookId: '${bookId}', number: ${ch.number}, title: '${esc(ch.title)}', shortTitle: '${esc(ch.shortTitle)}', description: '${esc(ch.description)}', icon: '${ch.icon}', pages: '${esc(ch.pages)}', interactiveKey: '${esc(ch.interactiveKey)}' },\n`
  }
  out += `]\n\nexport const ${meta.prefix}_SECTIONS: SectionMeta[] = [\n`
  let secCount = 0
  for (const ch of book.chapters) {
    reportLines.push(`${String(ch.number).padStart(3)} ${ch.id} :: ${ch.shortTitle} [${ch.sections.length} sec, ${ch.sections.filter((s) => s.content).length} content]`)
    ch.sections.forEach((s, i) => {
      secCount++
      out += `  { id: '${s.finalId}', chapterId: '${ch.id}', number: ${i + 1}, title: '${esc(s.title)}', description: '${esc(s.description)}' },\n`
    })
  }
  out += `]\n`
  fs.writeFileSync(path.join(OUT, `${meta.file}.ts`), out)
  reportLines.push(`--- ${bookId}: ${book.chapters.length} chapters, ${secCount} sections`)
  console.log(`${bookId}: ${book.chapters.length} chapters, ${secCount} sections -> merged/${meta.file}.ts`)
}
fs.writeFileSync('/tmp/new-structure.txt', reportLines.join('\n'))

// ---------------------------------------------------------------------------
// 10. Rewrite library.ts (types verbatim, new subjects/books/aggregates)
// ---------------------------------------------------------------------------
const origLib = fs.readFileSync(path.resolve(__dirname, '../src/data/library.ts'), 'utf8')
const typesBlock = origLib.slice(origLib.indexOf('export interface Subject'), origLib.indexOf('export const LIBRARY_SUBJECTS'))

const header = `// ============ Core type system for the StudyVerse platform ============
//
// SUBJECT-WISE CONSOLIDATED LIBRARY — 9 subjects, one book each:
//   Mathematics · Physics · Chemistry · English · Aptitude ·
//   Computer Science & Engineering · Electronics & Communication ·
//   Electrical Engineering · Mechanical Engineering
//
// Every topic appears exactly once, in its home subject. Provenance (code
// comment only — exam names intentionally absent from user-visible text per
// product decision; see research/*.md): merged chapters researched from
// official competitive-exam and university syllabi plus the classic textbooks
// (Rosen, Stewart, Halliday, Young, Ewen, Coletta, Feynman, Silberschatz,
// Mano, CLRS, Stroustrup, Horstmann, Flanagan, Hughes, Nilsson).

import { MATH_CHAPTERS, MATH_SECTIONS } from './library-parts/merged/math'
import { PHYS_CHAPTERS, PHYS_SECTIONS } from './library-parts/merged/physics'
import { CHEM_CHAPTERS, CHEM_SECTIONS } from './library-parts/merged/chemistry'
import { ENGLISH_CHAPTERS, ENGLISH_SECTIONS } from './library-parts/merged/english'
import { APT_CHAPTERS, APT_SECTIONS } from './library-parts/merged/aptitude'
import { CSE_CHAPTERS, CSE_SECTIONS } from './library-parts/merged/cse'
import { ECE_CHAPTERS, ECE_SECTIONS } from './library-parts/merged/ece'
import { EE_CHAPTERS, EE_SECTIONS } from './library-parts/merged/ee'
import { ME_CHAPTERS, ME_SECTIONS } from './library-parts/merged/me'

`
const subjectsBlock = `export const LIBRARY_SUBJECTS: Subject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    slug: 'mathematics',
    description: 'The complete mathematics path — logic, proofs, discrete structures, the full calculus sequence, classical algebra, probability and statistics, and the engineering mathematics sequence from linear algebra to transforms and numerical methods.',
    icon: 'sigma',
    accent: '#10b981',
    tagline: 'From first principles to research frontiers',
  },
  {
    id: 'physics',
    name: 'Physics',
    slug: 'physics',
    description: 'One canonical chapter per topic — mechanics, waves, thermodynamics, electromagnetism, optics and modern physics — merging the great textbooks with entrance-scope and applied engineering physics into a single deduplicated sequence.',
    icon: 'atom',
    accent: '#f59e0b',
    tagline: 'The unified physics curriculum',
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    slug: 'chemistry',
    description: 'Physical, organic and inorganic chemistry in full, plus the applied engineering chemistry — water, corrosion, fuels, polymers and nanomaterials — with every mechanism, trend and confirmatory test.',
    icon: 'hexagon',
    accent: '#22d3ee',
    tagline: 'Molecules, mechanisms and applications',
  },
  {
    id: 'english',
    name: 'English & Comprehension',
    slug: 'english',
    description: 'Complete verbal skills: reading comprehension and rhetoric, words in context, expression of ideas, standard conventions, grammar essentials, vocabulary and comprehension practice.',
    icon: 'type',
    accent: '#f472b6',
    tagline: 'Read deeply, write precisely',
  },
  {
    id: 'aptitude',
    name: 'Aptitude & Reasoning',
    slug: 'aptitude',
    description: 'The complete mental-aptitude curriculum: reasoning and problem solving, quantitative aptitude, general awareness and general science.',
    icon: 'brain',
    accent: '#a3e635',
    tagline: 'Sharpen every kind of thinking',
  },
  {
    id: 'cse-engg',
    name: 'Computer Science & Engineering',
    slug: 'computer-science-engineering',
    description: 'The whole CS path in one master volume: programming languages (C, Python, C++, Java, JavaScript, web), theory of computation, algorithms, digital logic and computer design, architecture, microprocessors, operating systems, databases, networks, and the applied stack from software engineering to AI, security and big data.',
    icon: 'binary',
    accent: '#be123c',
    tagline: 'The complete CS curriculum',
  },
  {
    id: 'ece-engg',
    name: 'Electronics & Communication Engineering',
    slug: 'electronics-communication-engineering',
    description: 'The whole ECE path in one volume: network analysis, electronic devices, digital electronics, signals and systems, DSP, analog circuits and ICs, communications, electromagnetics, antennas, control systems, VLSI, embedded systems and microwave engineering.',
    icon: 'cpu',
    accent: '#c2410c',
    tagline: 'From devices to communication systems',
  },
  {
    id: 'electrical-engineering',
    name: 'Electrical Engineering',
    slug: 'electrical-engineering',
    description: 'The whole EE path in one volume: basic electrical engineering, circuit analysis, machines, power systems, power electronics and drives, switchgear and protection, measurements, energy systems and renewables, electric vehicles and HVDC.',
    icon: 'zap',
    accent: '#a16207',
    tagline: 'Power, machines and control',
  },
  {
    id: 'mechanical-engineering',
    name: 'Mechanical Engineering',
    slug: 'mechanical-engineering',
    description: 'The whole ME path in one volume: graphics, mechanics, thermodynamics, fluids, strength of materials, materials science, metrology, theory of machines, manufacturing, design, heat transfer, engines, refrigeration, automotive, CAD/CAM, mechatronics and robotics.',
    icon: 'cog',
    accent: '#15803d',
    tagline: 'Design, build and manufacture',
  },
]`

const booksBlock = `export const LIBRARY_BOOKS: BookMeta[] = [
  {
    id: 'math-master',
    subjectId: 'mathematics',
    title: 'The Mathematics Master Library',
    author: 'Kenneth H. Rosen, James Stewart & the StudyVerse Curriculum Team',
    edition: 'Master Edition',
    year: '2019 · 2020 · 2026',
    description:
      'All the mathematics, one master volume: Rosen’s discrete mathematics (logic, proofs, counting, graphs), Stewart’s complete calculus sequence, the classical algebra block (complex numbers, matrices, trigonometry, coordinate and 3D geometry, probability and statistics), applied problem-solving skills, and the full engineering mathematics sequence — linear algebra, ODEs, PDEs, complex analysis, Laplace/Fourier/z transforms and numerical methods. Every topic appears exactly once, in pedagogical order.',
    pages: 3868,
    accent: '#10b981',
    sources: [
      'Rosen — Discrete Mathematics and Its Applications, 8e (1118 pp)',
      'Stewart, Clegg & Watson — Calculus: Early Transcendentals, 9e (1390 pp)',
      'Engineering mathematics curriculum — linear algebra to numerical methods (23 chapters)',
      'Classical algebra & advanced problem-solving companion (curriculum volumes)',
    ],
  },
  {
    id: 'phys-master',
    subjectId: 'physics',
    title: 'The Physics Master Library',
    author: 'David Halliday, Hugh D. Young, Richard P. Feynman, Dale Ewen, Vincent Coletta',
    edition: 'Consolidated Topic Edition',
    year: '2010 · 2018 · 2020 · 2021 · 2010',
    description:
      'One canonical chapter per physics topic. The conceptual spine of the Feynman Lectures, the complete university course of Halliday/Resnick/Walker and Young & Freedman, Ewen’s applied physics and Coletta’s fundamentals are merged into a single deduplicated sequence — measurement and vectors, mechanics, waves, heat and thermodynamics, electromagnetism, optics, modern physics, lasers and optical fibres — with entrance-scope depth folded into each topic.',
    pages: 7534,
    accent: '#f59e0b',
    sources: [
      'Feynman, Leighton & Sands — The Feynman Lectures on Physics, Vols I–III (conceptual spine)',
      'Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended (primary treatment)',
      'Young & Freedman — University Physics with Modern Physics, 15e (merged)',
      'Ewen, Schurter & Gundersen — Applied Physics, 11e (merged)',
      'Coletta — Physics Fundamentals, 2e (merged)',
    ],
  },
  {
    id: 'chem-complete',
    subjectId: 'chemistry',
    title: 'Chemistry: Physical, Organic, Inorganic & Applied',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description:
      'Physical, organic and inorganic chemistry in one deduplicated volume — mole concept through kinetics, GOC through biomolecules, periodicity through salt analysis, spectroscopy, stereochemistry and pericyclic depth — capped by the applied engineering chemistry chapter: water, corrosion, fuels, lubricants, polymers, nanomaterials and green chemistry.',
    pages: 1060,
    accent: '#22d3ee',
  },
  {
    id: 'english-complete',
    subjectId: 'english',
    title: 'English: Reading, Writing & Comprehension',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description:
      'Complete verbal skills in one volume: reading comprehension and rhetoric, words in context, text structure and purpose, cross-text connections, command of evidence, standard English conventions, transitions, rhetorical synthesis, grammar essentials, vocabulary, voice, narration and comprehension practice.',
    pages: 5,
    accent: '#f472b6',
  },
  {
    id: 'aptitude-complete',
    subjectId: 'aptitude',
    title: 'Aptitude, Reasoning & General Awareness',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description:
      'The complete mental-aptitude curriculum: reasoning and problem solving (analogies, series, coding–decoding, blood relations, syllogisms, seating arrangements, puzzles and non-verbal patterns), quantitative aptitude (percentages, ratios, time–work, speed–distance and data interpretation), general awareness and general science.',
    pages: 4,
    accent: '#a3e635',
  },
  {
    id: 'cse-complete',
    subjectId: 'cse-engg',
    title: 'CSE — The Complete Curriculum',
    author: 'StudyVerse Curriculum Team with Silberschatz, Mano, Cormen, Stroustrup, Horstmann & Flanagan',
    edition: '2026 Master Edition',
    year: '2026',
    description:
      'The whole Computer Science path in one master volume, organized subject-wise with no repetition: programming in C and Python, the complete C++ (Stroustrup), Java (Horstmann), JavaScript (Flanagan) and web development courses; theory of computation; the full algorithms canon (CLRS); digital logic and computer design (Mano); computer organization, advanced architecture and microprocessors; operating systems (Silberschatz); databases; computer networks; and the applied stack — software engineering, graphics, image processing, AI, machine learning, deep learning, blockchain, IoT, cloud, cybersecurity and big data.',
    pages: 5851,
    accent: '#be123c',
    sources: [
      'Silberschatz, Galvin & Gagne — Operating System Concepts, 10e (918 pp)',
      'Mano — Digital Logic and Computer Design (612 pp)',
      'Cormen, Leiserson, Rivest & Stein — Introduction to Algorithms, 3e (1313 pp)',
      'Stroustrup — The C++ Programming Language, 4e (1366 pp)',
      'Horstmann — Core Java, 12e (3548 pp combined volumes)',
      'Flanagan — JavaScript: The Definitive Guide, 7e (708 pp)',
      'The Complete Web Development Library (2026 edition)',
      'University model CSE curricula (8 semesters) + graduate & defence software scopes — merged subject-wise, every topic once',
    ],
  },
  {
    id: 'ece-complete',
    subjectId: 'ece-engg',
    title: 'ECE — The Complete Curriculum',
    author: 'StudyVerse Curriculum Team with Hughes, Nilsson & Horowitz',
    edition: '2026 Master Edition',
    year: '2026',
    description:
      'The whole Electronics & Communication path in one deduplicated volume: network analysis and synthesis, electronic devices, digital electronics, signals and systems, digital signal processing, analog circuits and ICs, analog and digital communication, electromagnetic field theory, antennas, control systems, measurements and instrumentation, VLSI technology and design, optical fibre communication and networks, data networks, wireless and mobile systems, microwave and radar, satellite communication, embedded systems, and speech/biomedical DSP.',
    pages: 3029,
    accent: '#c2410c',
    sources: [
      'Hughes — Electrical & Electronic Technology, 12e (electronics chapters)',
      'Nilsson & Riedel — Electric Circuits, 12e (merged)',
      'Horowitz & Hill — The Art of Electronics, 3e (merged)',
      'University model ECE curricula (8 semesters) + defence-electronics scope — merged subject-wise',
    ],
  },
  {
    id: 'ee-complete',
    subjectId: 'electrical-engineering',
    title: 'EE — The Complete Curriculum',
    author: 'StudyVerse Curriculum Team with Hughes & Nilsson',
    edition: '2026 Master Edition',
    year: '2026',
    description:
      'The whole Electrical Engineering path in one deduplicated volume: basic electrical engineering, electric circuit analysis (including the deep treatments of capacitance, magnetism, transients, AC power and resonance), DC and AC machines, special machines, electrical materials, power systems I & II, power system analysis, switchgear and protection, utilization and traction, power electronics and drives, machine design, measurements, energy systems and renewables, instrumentation, electric vehicles, and HVDC & FACTS.',
    pages: 2225,
    accent: '#a16207',
    sources: [
      'Hughes — Electrical & Electronic Technology, 12e (electrical chapters)',
      'Nilsson & Riedel — Electric Circuits, 12e (merged)',
      'University model EE curricula (8 semesters) + defence-research EE scope — merged subject-wise',
    ],
  },
  {
    id: 'me-complete',
    subjectId: 'mechanical-engineering',
    title: 'ME — The Complete Curriculum',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Master Edition',
    year: '2026',
    description:
      'The whole Mechanical Engineering path in one deduplicated volume: engineering graphics and machine drawing, mechanics, applied thermodynamics, fluid mechanics and machinery, strength of materials, materials science, metrology and quality control, theory of machines I & II, manufacturing I & II, machine design, heat and mass transfer, IC engines, refrigeration and air conditioning, automobile engineering, power plant engineering, CAD/CAM and automation, mechatronics and robotics.',
    pages: 42,
    accent: '#15803d',
    sources: [
      'University model ME curricula (8 semesters) + defence-research ME scope — merged subject-wise',
    ],
  },
]`

const aggregates = `export const LIBRARY_CHAPTERS: ChapterMeta[] = [
  ...MATH_CHAPTERS,
  ...PHYS_CHAPTERS,
  ...CHEM_CHAPTERS,
  ...ENGLISH_CHAPTERS,
  ...APT_CHAPTERS,
  ...CSE_CHAPTERS,
  ...ECE_CHAPTERS,
  ...EE_CHAPTERS,
  ...ME_CHAPTERS,
]

export const LIBRARY_SECTIONS: SectionMeta[] = [
  ...MATH_SECTIONS,
  ...PHYS_SECTIONS,
  ...CHEM_SECTIONS,
  ...ENGLISH_SECTIONS,
  ...APT_SECTIONS,
  ...CSE_SECTIONS,
  ...ECE_SECTIONS,
  ...EE_SECTIONS,
  ...ME_SECTIONS,
]`

const helpersBlock = `
// Lookup helpers
export function getBook(bookId: string) {
  return LIBRARY_BOOKS.find((b) => b.id === bookId)
}
export function getChapters(bookId: string) {
  return LIBRARY_CHAPTERS.filter((c) => c.bookId === bookId).sort((a, b) => a.number - b.number)
}
export function getChapter(chapterId: string) {
  return LIBRARY_CHAPTERS.find((c) => c.id === chapterId)
}
export function getSections(chapterId: string) {
  return LIBRARY_SECTIONS.filter((s) => s.chapterId === chapterId).sort((a, b) => a.number - b.number)
}
export function getSection(sectionId: string) {
  return LIBRARY_SECTIONS.find((s) => s.id === sectionId)
}`

fs.writeFileSync(path.resolve(__dirname, '../src/data/library.ts'), header + typesBlock + subjectsBlock + '\n\n' + booksBlock + '\n\n' + aggregates + '\n' + helpersBlock + '\n')
console.log('library.ts rewritten')

// ---------------------------------------------------------------------------
// 11. Retarget content files (sectionId renames)
// ---------------------------------------------------------------------------
let contentPatched = 0
const contentDir = path.resolve(__dirname, '../src/data/content')
for (const f of fs.readdirSync(contentDir)) {
  if (!f.endsWith('.ts') || f === 'index.ts') continue
  const p = path.join(contentDir, f)
  let src = fs.readFileSync(p, 'utf8')
  const orig = src
  for (const [from, to] of idMapping) {
    const needle = `sectionId: '${from}'`
    if (src.includes(needle)) {
      src = src.split(needle).join(`sectionId: '${to}'`)
    }
  }
  if (src !== orig) { fs.writeFileSync(p, src); contentPatched++ }
}
console.log(`content files patched: ${contentPatched}`)

// ---------------------------------------------------------------------------
// 12. Retarget / drop formula entries (formula files + content-embedded)
// ---------------------------------------------------------------------------
const finalSectionIndex = new Map<string, { chapter: string; index: number }>()
for (const ch of finalChapters) ch.sections.forEach((s, i) => finalSectionIndex.set(s.finalId, { chapter: ch.id, index: i + 1 }))
const finalChapterNumber = new Map(finalChapters.map((c) => [c.id, c.number]))

function resolveFormulaTarget(srcSecId: string): { chapter: string; secStr: string } | 'DROP' | null {
  if (idMapping.has(srcSecId)) {
    const to = idMapping.get(srcSecId)!
    const loc = finalSectionIndex.get(to)
    if (loc) return { chapter: loc.chapter, secStr: `${finalChapterNumber.get(loc.chapter)}.${loc.index}` }
    return 'DROP'
  }
  if (finalSectionIndex.has(srcSecId)) return null // untouched — keep verbatim
  return 'DROP'
}

let formulasPatched = 0
let formulaEntriesDropped = 0
let formulaEntriesRetargeted = 0
const dataDir = path.resolve(__dirname, '../src/data')
const processFormulaFile = (p: string) => {
  const src = fs.readFileSync(p, 'utf8')
  if (!src.includes("chapterId: '")) return
  const lines = src.split('\n')
  const out: string[] = []
  let changed = false
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (/^\s*\{\s*$/.test(line)) {
      let j = i + 1
      while (j < lines.length && !/^\s*\},?\s*$/.test(lines[j])) j++
      if (j < lines.length) {
        const block = lines.slice(i, j + 1)
        const blockStr = block.join('\n')
        const chId = /chapterId:\s*'([^']+)'/.exec(blockStr)?.[1]
        const sec = /section:\s*'([^']+)'/.exec(blockStr)?.[1]
        if (chId && sec && Number.isFinite(Number(sec.split('.')[1]))) {
          const srcSecId = `${chId}-s${Number(sec.split('.')[1])}`
          const target = resolveFormulaTarget(srcSecId)
          if (target === 'DROP') { changed = true; formulaEntriesDropped++; i = j + 1; continue }
          if (target) {
            const newBlock = blockStr
              .replace(/chapterId:\s*'[^']+'/, `chapterId: '${target.chapter}'`)
              .replace(/section:\s*'[^']+'/, `section: '${target.secStr}'`)
            out.push(...newBlock.split('\n'))
            changed = true
            formulaEntriesRetargeted++
            i = j + 1
            continue
          }
        }
        out.push(...block)
        i = j + 1
        continue
      }
    }
    out.push(line)
    i++
  }
  if (changed) { fs.writeFileSync(p, out.join('\n')); formulasPatched++ }
}
for (const f of fs.readdirSync(dataDir)) {
  if (f.endsWith('-formulas.ts') || f === 'missing-formulas.ts') processFormulaFile(path.join(dataDir, f))
}
for (const f of fs.readdirSync(contentDir)) {
  if (!f.endsWith('.ts') || f === 'index.ts') continue
  processFormulaFile(path.join(contentDir, f))
}
console.log(`formula files patched: ${formulasPatched}, entries retargeted: ${formulaEntriesRetargeted}, dropped: ${formulaEntriesDropped}`)

// ---------------------------------------------------------------------------
// 13. Report
// ---------------------------------------------------------------------------
console.log('\n===== MIGRATION REPORT =====')
console.log(`stats: ${JSON.stringify(stats)}`)
console.log(`id mappings: ${idMapping.size}`)
let totalLiveContent = 0
for (const ch of finalChapters) for (const s of ch.sections) if (s.content) totalLiveContent++
console.log(`live content sections: ${totalLiveContent}`)
const totalChapters = books.reduce((a, b) => a + b.chapters.length, 0)
const totalSections = books.reduce((a, b) => a + b.chapters.reduce((x, c) => x + c.sections.length, 0), 0)
console.log(`TOTALS: subjects=9 books=9 chapters=${totalChapters} sections=${totalSections}`)
for (const b of books) {
  const secs = b.chapters.reduce((a, c) => a + c.sections.length, 0)
  const withContent = b.chapters.reduce((a, c) => a + c.sections.filter((s) => s.content).length, 0)
  console.log(`  ${b.id}: ${b.chapters.length} ch / ${secs} sec / ${withContent} with content`)
}
for (const ch of finalChapters) {
  if (ch.sections.length === 0) console.error(`!! EMPTY CHAPTER: ${ch.id}`)
}
const seen = new Set<string>()
for (const ch of finalChapters) for (const s of ch.sections) {
  if (seen.has(s.finalId)) console.error(`!! DUPLICATE SECTION ID: ${s.finalId}`)
  seen.add(s.finalId!)
}
fs.writeFileSync(path.resolve(__dirname, 'migration-id-map.json'), JSON.stringify([...idMapping.entries()], null, 1))
console.log('full structure listing: /tmp/new-structure.txt')

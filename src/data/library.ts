// ============ Core type system for the StudyVerse platform ============
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

export interface Subject {
  id: string
  name: string
  slug: string
  description: string
  icon: string // lucide icon name key
  accent: string // hex accent color
  tagline: string
}

export interface BookMeta {
  id: string
  subjectId: string
  title: string
  author: string
  edition?: string
  year?: string
  description: string
  pages?: number
  accent: string // hex accent for cards
  sources?: string[] // for master volumes: the books merged into this one
}

export interface ChapterMeta {
  id: string // e.g. "rosen-ch1"
  bookId: string
  number: number
  title: string
  shortTitle: string
  description: string
  icon: string // lucide icon key in chapterIcons map
  pages: string // e.g. "24–143"
  interactiveKey: string // key into interactives registry
}

export interface SectionMeta {
  id: string // e.g. "rosen-ch1-s1"
  chapterId: string
  number: number // section number, e.g. 1.1
  title: string
  description: string
}

// ---------- Master content for a section ----------

export interface Concept {
  term: string
  kind: 'definition' | 'theorem' | 'law' | 'method' | 'notation' | 'insight'
  statement: string // supports simple **bold** markdown-ish
  detail?: string
}

export interface WorkedExample {
  title: string
  problem: string
  steps: { label: string; text: string }[]
  result?: string
  diagram?: string // visual physics diagram or illustration
}

export interface QuizQuestion {
  q: string
  options: string[]
  answer: number // index into options
  explanation: string
  diagram?: string // visual physics diagram or illustration solving the problem
}

/* ------------------------------------------------------------------ */
/*  The depth ladder — "from basics to a PhD"                          */
/*  The section core above IS the undergraduate material (Level I).   */
/*  Optional tiers then carry the very same topics to graduate         */
/*  coursework level (masters) and on to the research frontier (phd).  */
/* ------------------------------------------------------------------ */

export interface DepthBlock {
  kind: 'para' | 'theorem' | 'proof' | 'derivation' | 'remark' | 'example' | 'application' | 'open'
  heading?: string // required for example, recommended for open
  body: string // flowing prose; **bold**, $...$/$$...$$ KaTeX, `code`
}

export interface DepthTier {
  tier: 'masters' | 'phd'
  title: string
  blocks: DepthBlock[]
}

/** A textbook figure — an authored inline SVG set into the reading flow,
 *  like a figure plate in a printed book. `svg` is static authored data
 *  (never user input): responsive via viewBox, strokes in currentColor so
 *  it adapts to light/dark paper. */
export interface LessonFigure {
  caption: string // rendered as "Figure N — caption"; supports $...$ math
  svg: string // inline SVG markup (viewBox based, width 100%)
  sketchImage?: string // authentic hand-drawn scientific notebook sketch image path, e.g. "/diagrams/bohr_atom_sketch.jpg"
  sketchCaption?: string // handwritten notes / summary caption for sketch view
  afterConcept?: number // 1-based concept ordinal to follow; omit → after all concepts
}

export interface DerivationStep {
  label: string // e.g. "Step 1: Momentum transfer per collision"
  formula?: string // KaTeX formula, e.g. "$$\\Delta p_x = 2mv_x$$"
  explanation: string // pedagogical rationale for this step
}

export interface DetailedDerivation {
  title: string
  statement: string // target formula or law to derive, e.g. "Derivation of Kinetic Pressure $P = \\frac{1}{3}nm\\langle v^2\\rangle$"
  prerequisites?: string[] // what physics/math is assumed for this derivation
  steps: DerivationStep[]
  result: string // final derived formula and interpretation
}

export interface SectionContent {
  sectionId: string
  readingTime: number // minutes
  prerequisites?: string[] // concepts or prior sections required before this lesson
  intro: string
  objectives: string[]
  concepts: Concept[]
  figures?: LessonFigure[]
  derivations?: DetailedDerivation[]
  examples: WorkedExample[]
  keyTakeaways: string[]
  quiz: (QuizQuestion | undefined)[]
  depth?: DepthTier[]
}

export const LIBRARY_SUBJECTS: Subject[] = [
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
]

export const LIBRARY_BOOKS: BookMeta[] = [
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
]

export const LIBRARY_CHAPTERS: ChapterMeta[] = [
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
]

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
}

// ============ Core type system for the StudyVerse platform ============

import { CALC_CHAPTERS, CALC_SECTIONS } from './library-parts/calc'
import { JS_CHAPTERS, JS_SECTIONS } from './library-parts/js'
import { MANO_CHAPTERS, MANO_SECTIONS } from './library-parts/mano'
import { ELEC_CHAPTERS, ELEC_SECTIONS } from './library-parts/electronics'
import { PHYS_CHAPTERS, PHYS_SECTIONS } from './library-parts/physics'
import { CLRS_CHAPTERS, CLRS_SECTIONS } from './library-parts/clrs'
import { HALL_CHAPTERS, HALL_SECTIONS } from './library-parts/halliday'
import { YOUNG_CHAPTERS, YOUNG_SECTIONS } from './library-parts/young'
import { EWEN_CHAPTERS, EWEN_SECTIONS } from './library-parts/ewen'
import { COLETTA_CHAPTERS, COLETTA_SECTIONS } from './library-parts/coletta'
import { CPP_CHAPTERS, CPP_SECTIONS } from './library-parts/cpp'
import { WEBDEV_CHAPTERS, WEBDEV_SECTIONS } from './library-parts/webdev'
import { ENGMATH_CHAPTERS, ENGMATH_SECTIONS } from './library-parts/engmath'
import { JEEMATHS_CHAPTERS, JEEMATHS_SECTIONS } from './library-parts/jeemaths'
import { CHEM_CHAPTERS, CHEM_SECTIONS } from './library-parts/chem'
import { DBMS_CHAPTERS, DBMS_SECTIONS } from './library-parts/dbms'
import { CN_CHAPTERS, CN_SECTIONS } from './library-parts/cn'
import { COMPCOA_CHAPTERS, COMPCOA_SECTIONS } from './library-parts/compcoa'
import { SIGCTRL_CHAPTERS, SIGCTRL_SECTIONS } from './library-parts/sigctrl'
import { COMMEM_CHAPTERS, COMMEM_SECTIONS } from './library-parts/commem'
import { JAVA_CHAPTERS, JAVA_SECTIONS } from './library-parts/java'
// ---- Exam syllabus libraries (JEE Main / JEE Advanced / SAT / DRDO / GATE / Engineering semesters) ----
import { JEEMAIN_PHY_CHAPTERS, JEEMAIN_PHY_SECTIONS } from './library-parts/exams/jeemain-physics'
import { JEEMAIN_CHEM_CHAPTERS, JEEMAIN_CHEM_SECTIONS } from './library-parts/exams/jeemain-chemistry'
import { JEEMAIN_MATH_CHAPTERS, JEEMAIN_MATH_SECTIONS } from './library-parts/exams/jeemain-maths'
import { JEEADV_PHY_CHAPTERS, JEEADV_PHY_SECTIONS } from './library-parts/exams/jeeadv-physics'
import { JEEADV_CHEM_CHAPTERS, JEEADV_CHEM_SECTIONS } from './library-parts/exams/jeeadv-chemistry'
import { JEEADV_MATH_CHAPTERS, JEEADV_MATH_SECTIONS } from './library-parts/exams/jeeadv-maths'
import { SAT_MATH_CHAPTERS, SAT_MATH_SECTIONS } from './library-parts/exams/sat-math'
import { SAT_RW_CHAPTERS, SAT_RW_SECTIONS } from './library-parts/exams/sat-rw'
import { DRDO_T1_CHAPTERS, DRDO_T1_SECTIONS } from './library-parts/exams/drdo-tier1'
import { DRDO_CSE_CHAPTERS, DRDO_CSE_SECTIONS } from './library-parts/exams/drdo-cse'
import { DRDO_ECE_CHAPTERS, DRDO_ECE_SECTIONS } from './library-parts/exams/drdo-ece'
import { DRDO_EE_CHAPTERS, DRDO_EE_SECTIONS } from './library-parts/exams/drdo-ee'
import { DRDO_ME_CHAPTERS, DRDO_ME_SECTIONS } from './library-parts/exams/drdo-me'
import { GATE_CS_CHAPTERS, GATE_CS_SECTIONS } from './library-parts/exams/gate-cs'
import { ENGG_CSE_CHAPTERS, ENGG_CSE_SECTIONS } from './library-parts/exams/engg-cse'
import { ENGG_ECE_CHAPTERS, ENGG_ECE_SECTIONS } from './library-parts/exams/engg-ece'
import { ENGG_EE_CHAPTERS, ENGG_EE_SECTIONS } from './library-parts/exams/engg-ee'
import { ENGG_ME_CHAPTERS, ENGG_ME_SECTIONS } from './library-parts/exams/engg-me'

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
    description:
      'One unified mathematics curriculum — the complete Rosen discrete mathematics (logic, proofs, counting, graphs, computation) merged with the complete Stewart calculus sequence (limits through vector calculus). Every topic, nothing skipped.',
    icon: 'sigma',
    accent: '#10b981',
    tagline: 'Proof • Change • Structure',
  },
  {
    id: 'physics',
    name: 'Physics',
    slug: 'physics',
    description:
      'Feynman’s legendary Lectures on Physics, Volumes I–III merged into one master curriculum: atoms and matter, mechanics and gravitation, oscillations and waves, optics, relativity, heat, the complete electromagnetic theory and quantum mechanics.',
    icon: 'atom',
    accent: '#f59e0b',
    tagline: 'Mechanics • Fields • Quanta',
  },
  {
    id: 'cs-operating-systems',
    name: 'Operating Systems',
    slug: 'operating-systems',
    description:
      'The software that runs the machine: processes, threads, CPU scheduling, synchronization, deadlocks, virtual memory, storage, I/O and file systems — the theory underneath every computer you use.',
    icon: 'terminal',
    accent: '#f97316',
    tagline: 'Processes • Memory • Systems',
  },
  {
    id: 'cs-javascript',
    name: 'JavaScript',
    slug: 'javascript',
    description:
      'The programming language of the web: types, objects, closures, classes, modules, promises and async/await — from language core to browsers, Node and modern tooling.',
    icon: 'code',
    accent: '#eab308',
    tagline: 'Language • Browser • Node',
  },
  {
    id: 'ece-digital-systems',
    name: 'Digital Logic & Computer Design',
    slug: 'digital-logic-computer-design',
    description:
      'How computers are built from the ground up: binary arithmetic, Boolean algebra, K-maps, combinational and sequential circuits, registers, and the register-transfer design of a complete small computer.',
    icon: 'circuit-board',
    accent: '#f43f5e',
    tagline: 'Gates • Registers • Computers',
  },
  {
    id: 'ece-electronics',
    name: 'Electronics & Electrical Technology',
    slug: 'electronics-electrical-technology',
    description:
      'The complete electronics master library — Hughes Electrical & Electronic Technology, Nilsson’s Electric Circuits and Horowitz & Hill’s Art of Electronics unified into one curriculum: DC and AC circuit theory, transients, transforms, semiconductors, amplifiers, op-amps, filters, digital electronics, machines and power systems.',
    icon: 'zap',
    accent: '#14b8a6',
    tagline: 'Circuits • Devices • Power',
  },
  {
    id: 'cs-algorithms',
    name: 'Algorithms',
    slug: 'algorithms',
    description:
      'The theory of algorithms end to end — Cormen, Leiserson, Rivest and Stein’s Introduction to Algorithms in full: asymptotic analysis, sorting, data structures, dynamic programming, greedy methods, amortized analysis, B-trees, van Emde Boas trees, disjoint sets, graph algorithms, flows, multithreaded algorithms, linear programming, the FFT, number theory, string matching, computational geometry, NP-completeness and approximation algorithms — with the mathematical appendices.',
    icon: 'network',
    accent: '#84cc16',
    tagline: 'Correctness • Complexity • Proof',
  },
  {
    id: 'cs-cpp',
    name: 'C++ Programming',
    slug: 'cpp-programming',
    description:
      'Stroustrup’s complete tour of the C++ programming language (C++11): the core facilities of types, pointers, functions and exceptions; the abstraction mechanisms of classes, templates and metaprogramming; and the full standard library from STL containers and algorithms to strings, regexes, streams, numerics and concurrency.',
    icon: 'binary',
    accent: '#a855f7',
    tagline: 'Types • Templates • Systems',
  },
  {
    id: 'web-development',
    name: 'Web Development',
    slug: 'web-development',
    description:
      'The complete full-stack web curriculum — how the web works, semantic HTML5, modern CSS3 through Tailwind, JavaScript for the browser, TypeScript, React 19 with Next.js 15, Node.js and Express APIs, PostgreSQL and MongoDB with Prisma, auth and security, testing, performance, accessibility, SEO, Docker, CI/CD and cloud deployment, ending in a production SaaS capstone.',
    icon: 'globe',
    accent: '#f472b6',
    tagline: 'HTML • React • Node',
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    slug: 'chemistry',
    description:
      'Physical, organic and inorganic chemistry in full: stoichiometry through kinetics, mechanisms and named reactions, periodicity through salt analysis — every formula, trend and classic test.',
    icon: 'atom',
    accent: '#22d3ee',
    tagline: 'Physical • Organic • Inorganic',
  },
  {
    id: 'cs-core-systems',
    name: 'CS Core Systems',
    slug: 'cs-core-systems',
    description:
      'The systems spine beyond operating systems: databases, computer networks, compiler design and computer organization — ER to transactions, OSI to DNS, lexing to pipelining.',
    icon: 'database',
    accent: '#e879f9',
    tagline: 'Data • Networks • Machines',
  },
  {
    id: 'java',
    name: 'Java Programming',
    slug: 'java-programming',
    description:
      'Modern Java from first program to production: syntax and OOP, generics and collections, concurrency, streams, I/O and networking, JDBC and modules — the complete Horstmann tour.',
    icon: 'code',
    accent: '#fb7185',
    tagline: 'OOP • Streams • Concurrency',
  },
  // ---- Competitive exam subjects ----
  {
    id: 'exam-jee',
    name: 'IIT JEE — Main & Advanced',
    slug: 'jee-main-advanced',
    description:
      'The complete official NTA JEE Main 2026 syllabus (Physics 20 units, Chemistry 20 units, Mathematics 14 units — every topic, nothing skipped) plus the complete IIT JEE Advanced 2026 syllabus (jeeadv.ac.in) with the extra Advanced-only topics: thermal physics, nuclear chemistry, extractive metallurgy, salt analysis and more — six exam books, unit by unit, subtopic by subtopic.',
    icon: 'graduation-cap',
    accent: '#6366f1',
    tagline: 'Main • Advanced • Official Syllabi',
  },
  {
    id: 'exam-sat',
    name: 'Digital SAT',
    slug: 'digital-sat',
    description:
      'The College Board digital adaptive SAT mapped skill by skill: all four Math content domains (Algebra, Advanced Math, Problem Solving & Data Analysis, Geometry & Trigonometry) and all four Reading & Writing domains (Craft & Structure, Information & Ideas, Standard English Conventions, Expression of Ideas) with every official testing point, question weights and adaptive module strategy.',
    icon: 'globe',
    accent: '#0ea5e9',
    tagline: 'Math • Reading • Writing',
  },
  {
    id: 'exam-drdo',
    name: 'DRDO Scientist B',
    slug: 'drdo-scientist-b',
    description:
      'Defence research entrance mapped end to end: the Tier I screening battery (quantitative aptitude, reasoning, general awareness, English, general science) plus the complete Tier II engineering discipline syllabi for Computer Science, Electronics & Communication, Electrical and Mechanical — every area the RAC recruitment tests, from radar and missile guidance to VLSI, power systems and mechatronics.',
    icon: 'rocket',
    accent: '#65a30d',
    tagline: 'Tier I • Tier II • CSE ECE EE ME',
  },
  {
    id: 'exam-gate',
    name: 'GATE',
    slug: 'gate',
    description:
      'The GATE 2026 Computer Science & Information Technology syllabus (IIT Guwahati official) transcribed in full: General Aptitude plus all ten subject sections from Engineering Mathematics and Digital Logic through Operating Systems, Databases and Computer Networks — with official wording, weightages and every tested subtopic.',
    icon: 'award',
    accent: '#b45309',
    tagline: 'CS & IT • Official 2026 Syllabus',
  },
  {
    id: 'exam-engg',
    name: 'Engineering Semester Exams',
    slug: 'engineering-semester-exams',
    description:
      'The full four-branch university curriculum (AKTU/VTU/AICTE model) semester by semester: 135+ subjects across Computer Science, Electronics & Communication, Electrical and Mechanical engineering — from first-year mathematics and physics through branch cores like DSA, EMFT, power systems and thermodynamics to final-year AI, VLSI, EV and robotics electives, each with its complete topic list.',
    icon: 'library',
    accent: '#be123c',
    tagline: 'CSE • ECE • EE • ME • Semesters 1–8',
  },
]

export const LIBRARY_BOOKS: BookMeta[] = [
  {
    id: 'math-master',
    subjectId: 'mathematics',
    title: 'The Mathematics Master Library',
    author: 'Kenneth H. Rosen, James Stewart',
    edition: 'Master Edition',
    year: '2019 · 2020',
    description:
      'All the mathematics, one master volume: Rosen’s Discrete Mathematics and Its Applications (8e) and Stewart’s Calculus: Early Transcendentals (9e) merged into a single 30-chapter curriculum — logic and proofs, then the complete calculus sequence from limits to vector calculus.',
    pages: 2508,
    accent: '#10b981',
    sources: [
      'Rosen — Discrete Mathematics and Its Applications, 8e (1118 pp) — chapters 1–13',
      'Stewart, Clegg & Watson — Calculus: Early Transcendentals, 9e (1390 pp) — chapters 14–30',
    ],
  },
  {
    id: 'phys-master',
    subjectId: 'physics',
    title: 'The Physics Master Library',
    author: 'Richard P. Feynman, David Halliday, Hugh D. Young, Dale Ewen, Vincent Coletta',
    edition: 'Master Edition',
    year: '2010 · 2018 · 2020 · 2021 · 2010',
    description:
      'All the physics, one master volume — five books merged into a single 159-chapter curriculum: Feynman’s Lectures (the conceptual spine: mechanics, radiation, heat, electromagnetism and quantum mechanics), Halliday/Resnick/Walker’s Fundamentals of Physics (the complete university course), Young & Freedman’s University Physics (calculus-based theory with guided problem-solving), Ewen’s Applied Physics (algebra-based, applications and technical problem-solving) and Coletta’s Physics Fundamentals (motion-to-particles with derivations and perspective essays).',
    pages: 7534,
    accent: '#f59e0b',
    sources: [
      'Feynman, Leighton & Sands — The Feynman Lectures on Physics, Vols I–III (2752 pp) — chapters 1–15',
      'Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended (1452 pp) — chapters 16–59',
      'Young & Freedman — University Physics with Modern Physics, 15e (1587 pp) — chapters 60–103',
      'Ewen, Schurter & Gundersen — Applied Physics, 11e (777 pp) — chapters 104–128',
      'Coletta — Physics Fundamentals, 2e (966 pp) — chapters 129–159',
    ],
  },
  {
    id: 'silberschatz-osc10',
    subjectId: 'cs-operating-systems',
    title: 'Operating System Concepts',
    author: 'Abraham Silberschatz, Peter Baer Galvin, Greg Gagne',
    edition: 'Tenth Edition',
    year: '2018',
    description:
      'The classic “Dinosaur Book” — what operating systems do and how they do it: processes and threads, CPU scheduling, synchronization, deadlocks, main and virtual memory, mass storage, I/O and file systems.',
    pages: 918,
    accent: '#f97316',
  },
  {
    id: 'flanagan-js7',
    subjectId: 'cs-javascript',
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    edition: 'Seventh Edition',
    year: '2020',
    description:
      '“The Rhino Book” — the complete JavaScript reference and tutorial: the language from types to metaprogramming, plus the browser platform, Node.js and the modern toolchain.',
    pages: 708,
    accent: '#eab308',
  },
  {
    id: 'mano-dld',
    subjectId: 'ece-digital-systems',
    title: 'Digital Logic and Computer Design',
    author: 'M. Morris Mano',
    edition: 'Classic Edition',
    year: '1979',
    description:
      'The classic that builds a computer from first principles: binary systems, Boolean algebra and gate minimization, combinational and sequential logic, registers, and register-transfer design of a small digital computer.',
    pages: 612,
    accent: '#f43f5e',
  },
  {
    id: 'elec-master',
    subjectId: 'ece-electronics',
    title: 'The Electronics Master Library',
    author: 'Edward Hughes, James W. Nilsson, Paul Horowitz',
    edition: 'Master Edition',
    year: '2016 · 2022 · 2015',
    description:
      'All the electronics, one master volume — Hughes Electrical & Electronic Technology (12e), Nilsson & Riedel Electric Circuits (12e) and Horowitz & Hill The Art of Electronics (3e) unified into a single 20-chapter curriculum from DC fundamentals to power systems, with every theorem, device and technique from all three books.',
    pages: 3049,
    accent: '#14b8a6',
    sources: [
      'Hughes — Electrical & Electronic Technology, 12e (1009 pp)',
      'Nilsson & Riedel — Electric Circuits, 12e (816 pp)',
      'Horowitz & Hill — The Art of Electronics, 3e (1224 pp)',
    ],
  },
  // ---- Introduction to Algorithms (Cormen, Leiserson, Rivest, Stein — 3rd Ed) ----
  {
    id: 'clrs-alg3',
    subjectId: 'cs-algorithms',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
    edition: 'Third Edition',
    year: '2009',
    description:
      'The definitive algorithms text, covered chapter by chapter: asymptotic analysis, the sorting canon, the classical data structures, dynamic programming and greedy design, amortized analysis, the advanced structures (B-trees, Fibonacci heaps, van Emde Boas trees, disjoint sets), the full graph suite including maximum flow, multithreaded algorithms, matrices and linear programming, the FFT, number-theoretic algorithms, string matching, computational geometry, NP-completeness and approximation — plus all four mathematical appendices.',
    pages: 1313,
    accent: '#84cc16',
  },
  // ---- The C++ Programming Language (Stroustrup — 4th Ed) ----
  {
    id: 'stroustrup-cpp4',
    subjectId: 'cs-cpp',
    title: 'The C++ Programming Language',
    author: 'Bjarne Stroustrup',
    edition: 'Fourth Edition',
    year: '2013',
    description:
      'The C++ book, by the language’s creator — all four parts: the introductory tours, the basic facilities (types, pointers, functions, exceptions, namespaces, source organization), the abstraction mechanisms (classes, construction and destruction, overloading, hierarchies, RTTI, templates and metaprogramming), and the complete standard library (containers, algorithms, iterators, memory and resources, utilities, strings, regular expressions, streams, locales, numerics, concurrency and the C library).',
    pages: 1366,
    accent: '#a855f7',
  },
  // ---- The Complete Web Development Library (2026 Edition) ----
  {
    id: 'webdev-complete',
    subjectId: 'web-development',
    title: 'The Complete Web Development Library',
    author: 'MDN Web Docs, React, Next.js, Node.js, PostgreSQL & Prisma contributors',
    edition: '2026 Edition',
    year: '2026',
    description:
      'Zero to shipped: internet and browser fundamentals, HTML5 and CSS3 in full, JavaScript for the web, TypeScript, React and Next.js, Node/Express APIs real and realtime, SQL and NoSQL data layers, auth and OWASP security, testing at every level, performance/accessibility/SEO, and Docker-to-cloud deployment — 20 chapters, 100 sections, nothing skipped.',
    pages: 1200,
    accent: '#f472b6',
    sources: [
      'MDN Curriculum — web standards, semantic HTML, CSS, JS, a11y, tooling',
      'roadmap.sh Full-Stack path + 2026 industry syllabi — React/Next, Node/Express, PostgreSQL/Mongo, testing, DevOps',
    ],
  },
  // ---- Engineering Mathematics for GATE (2026 Edition) ----
  {
    id: 'engmath-complete',
    subjectId: 'mathematics',
    title: 'Engineering Mathematics',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description:
      'The mathematics Rosen and Stewart leave out: linear algebra, differential equations, PDEs, vector calculus theorems, complex analysis, Laplace/Fourier/z transforms — 10 chapters, 40 sections, every theorem with worked problems.',
    pages: 640,
    accent: '#10b981',
  },
  // ---- JEE Mathematics Companion (2026 Edition) ----
  {
    id: 'jeemaths-complete',
    subjectId: 'mathematics',
    title: 'Advanced Mathematics Companion',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description:
      'Problem-solving mathematics in tool-first form: complex numbers, quadratics, matrices, combinatorics, trigonometry, coordinate geometry, vectors/3D and statistics — 10 chapters, 40 sections of method-driven theory.',
    pages: 720,
    accent: '#10b981',
  },
  // ---- JEE Chemistry: Physical, Organic & Inorganic (2026 Edition) ----
  {
    id: 'chem-complete',
    subjectId: 'chemistry',
    title: 'Chemistry: Physical, Organic & Inorganic',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description:
      'Physical, organic and inorganic chemistry in full: mole concept through kinetics, GOC through biomolecules, periodicity through salt analysis — 14 chapters, 56 sections with every mechanism, trend and confirmatory test.',
    pages: 980,
    accent: '#22d3ee',
  },
  // ---- Databases: GATE CS/ISRO (2026 Edition) ----
  {
    id: 'dbms-complete',
    subjectId: 'cs-core-systems',
    title: 'Databases: Design to Transactions',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description:
      'ER modeling, relational algebra and calculus, SQL, normalization through BCNF, serializability, concurrency control, recovery and B/B+ indexing — 8 chapters, 32 sections.',
    pages: 480,
    accent: '#e879f9',
  },
  // ---- Computer Networks: GATE CS/ISRO (2026 Edition) ----
  {
    id: 'cn-complete',
    subjectId: 'cs-core-systems',
    title: 'Computer Networks: Layers to Applications',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description:
      'Layering and switching, framing and CRC, MAC and Ethernet, routing algorithms, CIDR and NAT, TCP congestion control, DNS/HTTP/mail — 8 chapters, 32 sections of numerical-heavy theory.',
    pages: 520,
    accent: '#e879f9',
  },
  // ---- Compiler Design + Computer Organization (2026 Edition) ----
  {
    id: 'compcoa-complete',
    subjectId: 'cs-core-systems',
    title: 'Compilers + Computer Organization & Architecture',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description:
      'ISA to pipelining to caches to DMA, then lexing through LL/LR parsing to dataflow optimization — 10 chapters, 40 sections.',
    pages: 660,
    accent: '#e879f9',
  },
  // ---- Signals & Systems + Control (2026 Edition) ----
  {
    id: 'sigctrl-complete',
    subjectId: 'ece-electronics',
    title: 'Signals & Systems + Control Systems',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description:
      'Signals, LTI convolution, Fourier and z-transforms, transfer functions and Mason rule, Routh/Bode/root-locus and state space — 6 chapters, 24 sections.',
    pages: 420,
    accent: '#14b8a6',
  },
  // ---- Communications + Electromagnetics Extras (2026 Edition) ----
  {
    id: 'commem-complete',
    subjectId: 'ece-electronics',
    title: 'Communications + Electromagnetics',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description:
      'Random processes, AM/FM, digital modulation and detection, information theory and codes, Maxwell waves, transmission lines and antennas — 6 chapters, 24 sections.',
    pages: 460,
    accent: '#14b8a6',
  },
  // ---- Core Java (Horstmann 12e) ----
  {
    id: 'horstmann-java12',
    subjectId: 'java',
    title: 'Core Java: Fundamentals to Advanced',
    author: 'Cay S. Horstmann',
    edition: 'Twelfth Edition',
    year: '2024',
    description:
      'The complete Java tour in one volume: fundamental syntax, objects and inheritance, interfaces and lambdas, exceptions, generics, collections, concurrency, streams, I/O and networking, JDBC and modules — 12 chapters, 48 sections.',
    pages: 3548,
    accent: '#fb7185',
    sources: [
      'Horstmann — Core Java, Vol. I Fundamentals, 12e + Vol. II Advanced Features (3548 pp)',
    ],
  },
  // ---- ================= COMPETITIVE EXAM LIBRARIES ================= ----
  // ---- JEE Main 2026 (official NTA syllabus, jeemain.nta.nic.in) ----
  {
    id: 'jeemain-physics-2026',
    subjectId: 'exam-jee',
    title: 'JEE Main 2026 Physics — Official NTA Syllabus',
    author: 'National Testing Agency',
    edition: '2026 Session Syllabus',
    year: '2026',
    description:
      'The complete NTA Physics syllabus, all 20 units: units & measurements through kinematics, the whole mechanics chain, thermal physics, electromagnetism in full, optics, modern physics, electronic devices and all 18 experimental skills — every official subtopic mapped to a section, with Paper 1 pattern (20+5 questions per subject, +4/−1).',
    pages: 20,
    accent: '#6366f1',
    sources: [
      'JEE (Main) 2026 official syllabus PDF — NTA (17 pp)',
    ],
  },
  {
    id: 'jeemain-chemistry-2026',
    subjectId: 'exam-jee',
    title: 'JEE Main 2026 Chemistry — Official NTA Syllabus',
    author: 'National Testing Agency',
    edition: '2026 Session Syllabus',
    year: '2026',
    description:
      'The complete NTA Chemistry syllabus, all 20 units in official order: the physical core (mole concept through electrochemistry and kinetics), periodicity, p/d/f-block and coordination chemistry, and the full organic sequence from GOC through biomolecules plus the practical-chemistry ion list — every official subtopic mapped to a section.',
    pages: 20,
    accent: '#8b5cf6',
    sources: [
      'JEE (Main) 2026 official syllabus PDF — NTA (17 pp)',
    ],
  },
  {
    id: 'jeemain-maths-2026',
    subjectId: 'exam-jee',
    title: 'JEE Main 2026 Mathematics — Official NTA Syllabus',
    author: 'National Testing Agency',
    edition: '2026 Session Syllabus',
    year: '2026',
    description:
      'The complete NTA Mathematics syllabus, all 14 units: sets and relations, complex numbers and quadratics, matrices and determinants, P&C and binomial theorem, sequences and series, the full calculus spine (limits, continuity, differentiability, integrals, differential equations), coordinate geometry, 3D, vectors, statistics & probability and trigonometry — every official subtopic mapped to a section.',
    pages: 14,
    accent: '#a855f7',
    sources: [
      'JEE (Main) 2026 official syllabus PDF — NTA (17 pp)',
    ],
  },
  // ---- JEE Advanced 2026 (official IIT syllabus, jeeadv.ac.in) ----
  {
    id: 'jeeadv-physics-2026',
    subjectId: 'exam-jee',
    title: 'JEE Advanced 2026 Physics — Official IIT Syllabus',
    author: 'IIT Roorkee (JAB)',
    edition: '2026 Syllabus',
    year: '2026',
    description:
      'The official JEE Advanced Physics syllabus in study-sized chapters: general physics with all 9 prescribed experiments, the mechanics chain in full depth, thermal physics, electromagnetism including magnetic dipole moments of revolving electrons, ray and wave optics, and modern physics through Moseley\u2019s law, decay law and binding energy — every subtopic of the official 7-section syllabus.',
    pages: 21,
    accent: '#4f46e5',
    sources: [
      'JEE (Advanced) 2026 official syllabus PDF — jeeadv.ac.in (16 pp)',
    ],
  },
  {
    id: 'jeeadv-chemistry-2026',
    subjectId: 'exam-jee',
    title: 'JEE Advanced 2026 Chemistry — Official IIT Syllabus',
    author: 'IIT Roorkee (JAB)',
    edition: '2026 Syllabus',
    year: '2026',
    description:
      'All 37 official Chemistry sections mapped into 23 chapters: general topics, the physical core including solid state, solutions, surface chemistry and nuclear chemistry, the inorganic chain from periodicity through 3d transition elements, ores, extractive metallurgy and complete qualitative salt analysis, and the organic sequence through benzene chemistry, biomolecules and practical organic chemistry.',
    pages: 23,
    accent: '#7c3aed',
    sources: [
      'JEE (Advanced) 2026 official syllabus PDF — jeeadv.ac.in (16 pp)',
    ],
  },
  {
    id: 'jeeadv-maths-2026',
    subjectId: 'exam-jee',
    title: 'JEE Advanced 2026 Mathematics — Official IIT Syllabus',
    author: 'IIT Roorkee (JAB)',
    edition: '2026 Syllabus',
    year: '2026',
    description:
      'The official 9-section Mathematics syllabus split into 15 study chapters: algebra of complex numbers and quadratics with logarithms, matrices, probability with mean/median/mode/standard deviation, trigonometry through general solutions, the full analytic geometry suite (2D, conics, 3D), differential calculus with Rolle/LMVT, integral calculus with definite-integral properties, and vectors.',
    pages: 15,
    accent: '#9333ea',
    sources: [
      'JEE (Advanced) 2026 official syllabus PDF — jeeadv.ac.in (16 pp)',
    ],
  },
  // ---- Digital SAT (College Board) ----
  {
    id: 'sat-math-2026',
    subjectId: 'exam-sat',
    title: 'Digital SAT Math — All 4 Content Domains',
    author: 'College Board',
    edition: 'Digital SAT Suite',
    year: '2026',
    description:
      'Every Math domain of the adaptive digital SAT with official question weights: Algebra (~35%, 13–15 questions), Advanced Math (~35%), Problem Solving & Data Analysis (~15%) and Geometry & Trigonometry (~15%) — 19 skill sections covering every official testing point from linear systems and nonlinear function behaviour to margin of error, study design, radians and circle equations. Calculator throughout (Desmos), ~30% in-context questions.',
    pages: 4,
    accent: '#0ea5e9',
    sources: [
      'College Board — Digital SAT Suite Specifications Overview (Summer 2022)',
      'College Board — Student Question Bank skill taxonomy',
    ],
  },
  {
    id: 'sat-rw-2026',
    subjectId: 'exam-sat',
    title: 'Digital SAT Reading & Writing — All 4 Content Domains',
    author: 'College Board',
    edition: 'Digital SAT Suite',
    year: '2026',
    description:
      'Every Reading & Writing domain with official weights: Craft & Structure (~28%), Information & Ideas (~26%), Standard English Conventions (~26%) and Expression of Ideas (~20%) — 10 skill sections from words-in-context and cross-text connections through command of evidence, sentence boundaries, form/structure/sense, transitions and rhetorical synthesis. Short passages (25–150 words), one question each, 64 minutes for 54 questions.',
    pages: 4,
    accent: '#0284c7',
    sources: [
      'College Board — Digital SAT Suite Specifications Overview (Summer 2022)',
    ],
  },
  // ---- DRDO Scientist B ----
  {
    id: 'drdo-tier1',
    subjectId: 'exam-drdo',
    title: 'DRDO Scientist B — Tier I Screening',
    author: 'DRDO Recruitment & Assessment Centre (RAC)',
    edition: 'RAC Advertisement',
    year: '2026',
    description:
      'The Tier I computer-based screening battery: 100 marks across quantitative aptitude & numerical ability, reasoning & problem solving, general awareness with defence/S&T focus, English language and general science — 29 topic sections from percentages and seating arrangements to DRDO missions, labs and missile programs. Negative marking 0.25; qualifying marks 40% (UR) / 35% (SC/OBC) / 30% (EWS/PwD).',
    pages: 5,
    accent: '#65a30d',
    sources: [
      'DRDO RAC Scientist \u2018B\u2019 recruitment advertisement — Tier I scheme',
    ],
  },
  {
    id: 'drdo-cse',
    subjectId: 'exam-drdo',
    title: 'DRDO Tier II — Computer Science & Engineering',
    author: 'DRDO Recruitment & Assessment Centre (RAC)',
    edition: 'RAC Advertisement',
    year: '2026',
    description:
      'The Tier II CSE discipline paper (60 marks of the 75-mark paper): engineering mathematics, discrete structures, digital logic, computer organization, programming & data structures, algorithms, theory of computation, compiler design, operating systems, databases, computer networks, cybersecurity and AI/ML — the full defence-software stack from lab automation to secure missile code.',
    pages: 13,
    accent: '#4d7c0f',
    sources: [
      'DRDO RAC Scientist \u2018B\u2019 Tier II syllabus — CSE discipline',
    ],
  },
  {
    id: 'drdo-ece',
    subjectId: 'exam-drdo',
    title: 'DRDO Tier II — Electronics & Communication',
    author: 'DRDO Recruitment & Assessment Centre (RAC)',
    edition: 'RAC Advertisement',
    year: '2026',
    description:
      'The Tier II ECE discipline paper: networks, signals & systems, electronic devices, analog and digital circuits, electromagnetics, control systems, analog & digital communications, DSP, VLSI & embedded systems and advanced communications — radar, EW and missile-guidance electronics included, the classic DRDO core branch.',
    pages: 12,
    accent: '#3f6212',
    sources: [
      'DRDO RAC Scientist \u2018B\u2019 Tier II syllabus — ECE discipline',
    ],
  },
  {
    id: 'drdo-ee',
    subjectId: 'exam-drdo',
    title: 'DRDO Tier II — Electrical Engineering',
    author: 'DRDO Recruitment & Assessment Centre (RAC)',
    edition: 'RAC Advertisement',
    year: '2026',
    description:
      'The Tier II EE discipline scope compiled from RAC/SET and CEPTAM official lists: electric circuits, electrical machines, power systems, power electronics & drives, measurements & instrumentation, control systems, signals & systems, analog & digital electronics and electromagnetic theory — with research-lab topics in utilization, materials and maintenance.',
    pages: 11,
    accent: '#166534',
    sources: [
      'DRDO RAC/CEPTAM EE discipline syllabi',
    ],
  },
  {
    id: 'drdo-me',
    subjectId: 'exam-drdo',
    title: 'DRDO Tier II — Mechanical Engineering',
    author: 'DRDO Recruitment & Assessment Centre (RAC)',
    edition: 'RAC Advertisement',
    year: '2026',
    description:
      'The Tier II ME discipline paper: fluid mechanics & machinery, thermodynamics, heat transfer, IC engines & power plant, mechanics of materials, theory of machines & machine design, manufacturing technology & metrology, materials science, industrial engineering, mechatronics & robotics and renewable energy — propulsion, airframes and launcher engineering included.',
    pages: 12,
    accent: '#15803d',
    sources: [
      'DRDO RAC Scientist \u2018B\u2019 Tier II syllabus — ME discipline',
    ],
  },
  // ---- GATE CS ----
  {
    id: 'gate-cs-2026',
    subjectId: 'exam-gate',
    title: 'GATE 2026 CS & IT — Official Syllabus',
    author: 'IIT Guwahati (GATE 2026)',
    edition: 'CS + IT Papers',
    year: '2026',
    description:
      'The official GATE Computer Science & Information Technology syllabus transcribed in full — General Aptitude (15 marks) plus the ten subject sections: Engineering Mathematics (13 marks), Digital Logic, Computer Organization & Architecture, Programming & Data Structures, Algorithms, Theory of Computation, Compiler Design, Operating System, Databases and Computer Networks — 58 sections with every official subtopic in official wording, for the 65-question / 100-mark / 3-hour paper.',
    pages: 11,
    accent: '#b45309',
    sources: [
      'GATE 2026 CS syllabus PDF — IIT Guwahati (organizing institute)',
    ],
  },
  // ---- Engineering semester exams ----
  {
    id: 'engg-cse',
    subjectId: 'exam-engg',
    title: 'CSE — 8 Semesters, Complete Curriculum',
    author: 'AKTU / VTU / AICTE model curriculum',
    edition: '2026 Edition',
    year: '2026',
    description:
      'The whole Computer Science degree path: 36 subjects from Semester 1 (mathematics, physics, programming in C) through the Sem 3–5 core (DSA, digital logic, COA, OS, DBMS, TOC, compilers, networks) to Sem 6–8 electives (ML, blockchain, cloud, cryptography, IoT, big data, deep learning) — every subject with its complete unit list.',
    pages: 36,
    accent: '#be123c',
    sources: [
      'AKTU CSE 3rd/4th year curricula + VTU 2021-scheme CSE syllabus',
    ],
  },
  {
    id: 'engg-ece',
    subjectId: 'exam-engg',
    title: 'ECE — 8 Semesters, Complete Curriculum',
    author: 'AKTU / VTU / AICTE model curriculum',
    edition: '2026 Edition',
    year: '2026',
    description:
      'The whole Electronics & Communication degree path: 37 subjects from first-year electrical technology and physics through network analysis, electronic devices, signals & systems, analog and digital circuits, EMFT, communications, DSP, control, microprocessors, VLSI, embedded systems, antennas, microwave & radar and optical fiber — every subject with its complete unit list.',
    pages: 37,
    accent: '#c2410c',
    sources: [
      'IIT-BBS ECE curriculum (46 pp) + AKTU/VTU ECE schemes',
    ],
  },
  {
    id: 'engg-ee',
    subjectId: 'exam-engg',
    title: 'EE — 8 Semesters, Complete Curriculum',
    author: 'AKTU / VTU / AICTE model curriculum',
    edition: '2026 Edition',
    year: '2026',
    description:
      'The whole Electrical Engineering degree path: 32 subjects from circuit theory and measurements through machines I & II, power systems I & II, power system analysis, power electronics & drives, switchgear & protection, utilization & traction, HVDC & FACTS, electric vehicles and renewable energy systems — every subject with its complete unit list.',
    pages: 32,
    accent: '#a16207',
    sources: [
      'SHUATS EE syllabus (42 pp) + AKTU/VTU EE schemes',
    ],
  },
  {
    id: 'engg-me',
    subjectId: 'exam-engg',
    title: 'ME — 8 Semesters, Complete Curriculum',
    author: 'AKTU / VTU / AICTE model curriculum',
    edition: '2026 Edition',
    year: '2026',
    description:
      'The whole Mechanical Engineering degree path: 30 subjects from engineering mechanics and strength of materials through thermodynamics, fluid mechanics & machinery, manufacturing technology I & II, heat & mass transfer, theory of machines I & II, machine design, RAC, IC engines, power plant, automobile engineering, CAD/CAM, mechatronics and robotics — every subject with its complete unit list.',
    pages: 30,
    accent: '#9f1239',
    sources: [
      'SHUATS ME syllabus (73 pp) + AKTU/VTU ME schemes',
    ],
  },
]

export const LIBRARY_CHAPTERS: ChapterMeta[] = [
  { id: 'rosen-ch1', bookId: 'math-master', number: 1, title: 'The Foundations: Logic and Proofs', shortTitle: 'Logic & Proofs', description: 'Propositional logic, quantifiers, rules of inference and the craft of writing proofs — the language all of mathematics is written in.', icon: 'brain', pages: 'Rosen 24–143', interactiveKey: 'truth-table-lab' },
  { id: 'rosen-ch2', bookId: 'math-master', number: 2, title: 'Basic Structures: Sets, Functions, Sequences, Sums, and Matrices', shortTitle: 'Sets & Functions', description: 'The fundamental data structures of mathematics — sets, functions, sequences, cardinality and matrices.', icon: 'circles', pages: 'Rosen 144–223', interactiveKey: 'venn-explorer' },
  { id: 'rosen-ch3', bookId: 'math-master', number: 3, title: 'Algorithms', shortTitle: 'Algorithms', description: 'What algorithms are, how fast they grow, and how to measure their complexity.', icon: 'cpu', pages: 'Rosen 224–273', interactiveKey: 'sorting-visualizer' },
  { id: 'rosen-ch4', bookId: 'math-master', number: 4, title: 'Number Theory and Cryptography', shortTitle: 'Number Theory', description: 'Divisibility, primes, congruences and the number-theoretic machinery behind modern cryptography.', icon: 'lock', pages: 'Rosen 274–427', interactiveKey: 'gcd-stepper' },
  { id: 'rosen-ch5', bookId: 'math-master', number: 5, title: 'Induction and Recursion', shortTitle: 'Induction & Recursion', description: 'Mathematical induction, strong induction, recursive definitions and recursive algorithms.', icon: 'infinity', pages: 'Rosen 354–427', interactiveKey: 'hanoi-tower' },
  { id: 'rosen-ch6', bookId: 'math-master', number: 6, title: 'Counting', shortTitle: 'Counting', description: 'The basics of counting, pigeonhole principle, permutations, combinations and binomial coefficients.', icon: 'hash', pages: 'Rosen 428–491', interactiveKey: 'counting-lab' },
  { id: 'rosen-ch7', bookId: 'math-master', number: 7, title: 'Discrete Probability', shortTitle: 'Probability', description: 'Probability theory, Bayes’ theorem, expected value and variance for discrete sample spaces.', icon: 'dices', pages: 'Rosen 492–549', interactiveKey: 'probability-lab' },
  { id: 'rosen-ch8', bookId: 'math-master', number: 8, title: 'Advanced Counting Techniques', shortTitle: 'Advanced Counting', description: 'Recurrence relations, divide-and-conquer, generating functions and inclusion–exclusion.', icon: 'trending', pages: 'Rosen 550–621', interactiveKey: 'recurrence-explorer' },
  { id: 'rosen-ch9', bookId: 'math-master', number: 9, title: 'Relations', shortTitle: 'Relations', description: 'Properties of relations, closures, equivalence relations and partial orderings.', icon: 'network', pages: 'Rosen 622–695', interactiveKey: 'relation-explorer' },
  { id: 'rosen-ch10', bookId: 'math-master', number: 10, title: 'Graphs', shortTitle: 'Graphs', description: 'Graph models, connectivity, Euler and Hamilton paths, shortest paths, planarity and coloring.', icon: 'share', pages: 'Rosen 696–803', interactiveKey: 'graph-playground' },
  { id: 'rosen-ch11', bookId: 'math-master', number: 11, title: 'Trees', shortTitle: 'Trees', description: 'Tree applications, traversals, spanning trees and minimum spanning trees.', icon: 'git-branch', pages: 'Rosen 804–869', interactiveKey: 'tree-traversal' },
  { id: 'rosen-ch12', bookId: 'math-master', number: 12, title: 'Boolean Algebra', shortTitle: 'Boolean Algebra', description: 'Boolean functions, logic gates and minimization of circuits.', icon: 'toggle-right', pages: 'Rosen 870–907', interactiveKey: 'logic-gates' },
  { id: 'rosen-ch13', bookId: 'math-master', number: 13, title: 'Modeling Computation', shortTitle: 'Models of Computation', description: 'Languages and grammars, finite-state machines, language recognition and Turing machines.', icon: 'bot', pages: 'Rosen 908–965', interactiveKey: 'fsm-simulator' },
  // ---- Operating System Concepts (Silberschatz, Galvin, Gagne — 10th Ed) ----
  { id: 'osc-ch1', bookId: 'silberschatz-osc10', number: 1, title: 'Introduction', shortTitle: 'Introduction', description: 'What an operating system is, how a computer is organized (interrupts, DMA, storage hierarchy), single-processor to distributed architectures, dual-mode operation and kernel data structures.', icon: 'terminal', pages: '4–54', interactiveKey: 'os-anatomy' },
  { id: 'osc-ch2', bookId: 'silberschatz-osc10', number: 2, title: 'Operating-System Structures', shortTitle: 'OS Structures', description: 'OS services, the system-call interface, linkers and loaders, monolithic vs layered vs microkernel vs modular designs, and how an OS boots.', icon: 'layers', pages: '55–101', interactiveKey: 'os-anatomy' },
  { id: 'osc-ch3', bookId: 'silberschatz-osc10', number: 3, title: 'Processes', shortTitle: 'Processes', description: 'The process concept, memory layout, the PCB, scheduling queues and context switches, process creation (fork/exec) and interprocess communication.', icon: 'activity', pages: '106–156', interactiveKey: 'process-lifecycle' },
  { id: 'osc-ch4', bookId: 'silberschatz-osc10', number: 4, title: 'Threads and Concurrency', shortTitle: 'Threads & Concurrency', description: 'Threads, multicore programming, Amdahl’s law, multithreading models, thread libraries and implicit threading with thread pools and fork–join.', icon: 'shuffle', pages: '160–198', interactiveKey: 'race-lab' },
  { id: 'osc-ch5', bookId: 'silberschatz-osc10', number: 5, title: 'CPU Scheduling', shortTitle: 'CPU Scheduling', description: 'Scheduling criteria and algorithms — FCFS, SJF/SRTF, priority, round robin, multilevel feedback queues — plus multicore, real-time scheduling and Linux CFS.', icon: 'timer', pages: '200–254', interactiveKey: 'cpu-scheduler' },
  { id: 'osc-ch6', bookId: 'silberschatz-osc10', number: 6, title: 'Synchronization Tools', shortTitle: 'Synchronization Tools', description: 'Race conditions, the critical-section problem, Peterson’s solution, hardware support (test-and-set, compare-and-swap), mutex locks, semaphores, monitors and liveness hazards.', icon: 'handshake', pages: '257–288', interactiveKey: 'race-lab' },
  { id: 'osc-ch7', bookId: 'silberschatz-osc10', number: 7, title: 'Synchronization Examples', shortTitle: 'Sync Examples', description: 'The classic problems — bounded buffer, readers–writers, dining philosophers — plus synchronization in Windows, Linux, POSIX and Java.', icon: 'utensils', pages: '289–315', interactiveKey: 'dining-philosophers' },
  { id: 'osc-ch8', bookId: 'silberschatz-osc10', number: 8, title: 'Deadlocks', shortTitle: 'Deadlocks', description: 'Deadlock characterization, the resource-allocation graph, prevention, avoidance with the Banker’s algorithm, detection and recovery.', icon: 'siren', pages: '318–346', interactiveKey: 'bankers-algorithm' },
  { id: 'osc-ch9', bookId: 'silberschatz-osc10', number: 9, title: 'Main Memory', shortTitle: 'Main Memory', description: 'Address binding and the MMU, contiguous allocation and fragmentation, paging, TLB and effective access time, page-table structures, Intel and ARMv8.', icon: 'memory-stick', pages: '349–387', interactiveKey: 'paging-visualizer' },
  { id: 'osc-ch10', bookId: 'silberschatz-osc10', number: 10, title: 'Virtual Memory', shortTitle: 'Virtual Memory', description: 'Demand paging, copy-on-write, page replacement (FIFO, optimal, LRU, clock), frame allocation, thrashing, working sets and memory-mapped files.', icon: 'database', pages: '389–444', interactiveKey: 'page-replacement' },
  { id: 'osc-ch11', bookId: 'silberschatz-osc10', number: 11, title: 'Mass-Storage Structure', shortTitle: 'Mass Storage', description: 'HDD and NVM device structure, disk scheduling (SSTF, SCAN, C-SCAN), storage attachment, RAID levels, error correction and swap-space management.', icon: 'hard-drive', pages: '449–487', interactiveKey: 'disk-scheduler' },
  { id: 'osc-ch12', bookId: 'silberschatz-osc10', number: 12, title: 'I/O Systems', shortTitle: 'I/O Systems', description: 'I/O hardware, polling, interrupts and DMA, the application I/O interface, the kernel I/O subsystem (buffering, caching, spooling) and I/O performance.', icon: 'plug', pages: '489–526', interactiveKey: 'os-anatomy' },
  { id: 'osc-ch13', bookId: 'silberschatz-osc10', number: 13, title: 'File-System Interface', shortTitle: 'FS Interface', description: 'Files, attributes and access methods; directory structures from single-level to acyclic graphs; protection and memory-mapped files.', icon: 'folder-open', pages: '529–561', interactiveKey: 'file-allocation' },
  { id: 'osc-ch14', bookId: 'silberschatz-osc10', number: 14, title: 'File-System Implementation', shortTitle: 'FS Implementation', description: 'File-system layers and operations, allocation methods (contiguous, linked, indexed), free-space management, efficiency, performance and journaling.', icon: 'folder-cog', pages: '564–594', interactiveKey: 'file-allocation' },
  { id: 'osc-ch15', bookId: 'silberschatz-osc10', number: 15, title: 'File-System Internals', shortTitle: 'FS Internals', description: 'Partitions and mounting, file sharing, virtual file systems, remote and distributed file systems (NFS) and consistency semantics.', icon: 'server', pages: '597–617', interactiveKey: 'file-allocation' },
  // ---- Calculus: Early Transcendentals (Stewart 9e) — chapters from parts file ----
  ...CALC_CHAPTERS,
  // ---- JavaScript: The Definitive Guide (Flanagan 7e) ----
  ...JS_CHAPTERS,
  // ---- Digital Logic and Computer Design (Mano) ----
  ...MANO_CHAPTERS,
  // ---- The Electronics Master Library (Hughes 12e + Nilsson 12e + AoE 3e) ----
  ...ELEC_CHAPTERS,
  // ---- The Feynman Lectures on Physics, Vols I–III ----
  ...PHYS_CHAPTERS,
  // ---- Introduction to Algorithms (Cormen, Leiserson, Rivest, Stein — 3rd Ed) ----
  ...CLRS_CHAPTERS,
  // ---- Fundamentals of Physics (Halliday, Resnick, Walker — 11th Ed Extended, now merged into phys-master ch 16–59) ----
  ...HALL_CHAPTERS,
  // ---- University Physics with Modern Physics (Young & Freedman — 15th Ed, phys-master ch 60–103) ----
  ...YOUNG_CHAPTERS,
  // ---- Applied Physics (Ewen, Schurter & Gundersen — 11th Ed, phys-master ch 104–128) ----
  ...EWEN_CHAPTERS,
  // ---- Physics Fundamentals (Coletta — 2nd Ed, phys-master ch 129–159) ----
  ...COLETTA_CHAPTERS,
  // ---- The C++ Programming Language (Stroustrup — 4th Ed) ----
  ...CPP_CHAPTERS,
  // ---- The Complete Web Development Library (2026 Edition) ----
  ...WEBDEV_CHAPTERS,
  // ---- Engineering Mathematics for GATE (2026 Edition) ----
  ...ENGMATH_CHAPTERS,
  // ---- JEE Mathematics Companion (2026 Edition) ----
  ...JEEMATHS_CHAPTERS,
  // ---- JEE Chemistry (2026 Edition) ----
  ...CHEM_CHAPTERS,
  // ---- Databases (2026 Edition) ----
  ...DBMS_CHAPTERS,
  // ---- Computer Networks (2026 Edition) ----
  ...CN_CHAPTERS,
  // ---- Compilers + Computer Organization (2026 Edition) ----
  ...COMPCOA_CHAPTERS,
  // ---- Signals & Systems + Control (2026 Edition) ----
  ...SIGCTRL_CHAPTERS,
  // ---- Communications + Electromagnetics (2026 Edition) ----
  ...COMMEM_CHAPTERS,
  // ---- Core Java (Horstmann 12e) ----
  ...JAVA_CHAPTERS,
  // ---- ============== COMPETITIVE EXAM LIBRARIES (all chapters & sections) ============== ----
  // ---- JEE Main 2026 (official NTA syllabus) ----
  ...JEEMAIN_PHY_CHAPTERS,
  ...JEEMAIN_CHEM_CHAPTERS,
  ...JEEMAIN_MATH_CHAPTERS,
  // ---- JEE Advanced 2026 (official IIT syllabus) ----
  ...JEEADV_PHY_CHAPTERS,
  ...JEEADV_CHEM_CHAPTERS,
  ...JEEADV_MATH_CHAPTERS,
  // ---- Digital SAT (College Board) ----
  ...SAT_MATH_CHAPTERS,
  ...SAT_RW_CHAPTERS,
  // ---- DRDO Scientist B ----
  ...DRDO_T1_CHAPTERS,
  ...DRDO_CSE_CHAPTERS,
  ...DRDO_ECE_CHAPTERS,
  ...DRDO_EE_CHAPTERS,
  ...DRDO_ME_CHAPTERS,
  // ---- GATE CS 2026 ----
  ...GATE_CS_CHAPTERS,
  // ---- Engineering semester exams ----
  ...ENGG_CSE_CHAPTERS,
  ...ENGG_ECE_CHAPTERS,
  ...ENGG_EE_CHAPTERS,
  ...ENGG_ME_CHAPTERS,
]

export type LibrarySection = SectionMeta

export const LIBRARY_SECTIONS: LibrarySection[] = [
  // Chapter 1
  { id: 'rosen-ch1-s1', chapterId: 'rosen-ch1', number: 1.1, title: 'Propositional Logic', description: 'Propositions, truth values and the connectives ∧, ∨, ⊕, →, ↔ that build compound statements.' },
  { id: 'rosen-ch1-s2', chapterId: 'rosen-ch1', number: 1.2, title: 'Applications of Propositional Logic', description: 'Translating English to logic, logic in system specifications, Boolean searches and logic puzzles.' },
  { id: 'rosen-ch1-s3', chapterId: 'rosen-ch1', number: 1.3, title: 'Propositional Equivalences', description: 'Tautologies, contradictions, logical equivalences and the laws of algebra of logic.' },
  { id: 'rosen-ch1-s4', chapterId: 'rosen-ch1', number: 1.4, title: 'Predicates and Quantifiers', description: 'Predicates, variables, the universal ∀ and existential ∃ quantifiers and bound variables.' },
  { id: 'rosen-ch1-s5', chapterId: 'rosen-ch1', number: 1.5, title: 'Nested Quantifiers', description: 'Reading and writing statements with two or more quantifiers, and their negations.' },
  { id: 'rosen-ch1-s6', chapterId: 'rosen-ch1', number: 1.6, title: 'Rules of Inference', description: 'Valid argument forms: modus ponens, modus tollens, hypothetical and disjunctive syllogisms.' },
  { id: 'rosen-ch1-s7', chapterId: 'rosen-ch1', number: 1.7, title: 'Introduction to Proofs', description: 'Direct proofs, proof by contraposition, proof by contradiction and exhaustive proofs.' },
  { id: 'rosen-ch1-s8', chapterId: 'rosen-ch1', number: 1.8, title: 'Proof Methods and Strategy', description: 'Choosing proof methods, existence proofs, uniqueness proofs and forward/backward reasoning.' },
  // Chapter 2
  { id: 'rosen-ch2-s1', chapterId: 'rosen-ch2', number: 2.1, title: 'Sets', description: 'Set notation, subsets, power sets, Cartesian products and set identities.' },
  { id: 'rosen-ch2-s2', chapterId: 'rosen-ch2', number: 2.2, title: 'Set Operations', description: 'Union, intersection, difference, complement, symmetric difference and computer representation of sets.' },
  { id: 'rosen-ch2-s3', chapterId: 'rosen-ch2', number: 2.3, title: 'Functions', description: 'One-to-one, onto, bijections, inverse and composition of functions, important functions.' },
  { id: 'rosen-ch2-s4', chapterId: 'rosen-ch2', number: 2.4, title: 'Sequences and Summations', description: 'Sequences, recurrence relations, series, summation notation and special series.' },
  { id: 'rosen-ch2-s5', chapterId: 'rosen-ch2', number: 2.5, title: 'Cardinality of Sets', description: 'Countable sets, the countability of rationals and Cantor’s uncountability of the reals.' },
  { id: 'rosen-ch2-s6', chapterId: 'rosen-ch2', number: 2.6, title: 'Matrices', description: 'Matrix arithmetic, matrix multiplication, transposes, zero–one matrices and Boolean products.' },
  // Chapter 3
  { id: 'rosen-ch3-s1', chapterId: 'rosen-ch3', number: 3.1, title: 'Algorithms', description: 'What algorithms are, pseudocode, searching and greedy algorithms, halting problem.' },
  { id: 'rosen-ch3-s2', chapterId: 'rosen-ch3', number: 3.2, title: 'The Growth of Functions', description: 'Big-O, big-Omega and big-Theta notation and analyzing function growth.' },
  { id: 'rosen-ch3-s3', chapterId: 'rosen-ch3', number: 3.3, title: 'Complexity of Algorithms', description: 'Time and space complexity, best/average/worst case analysis of key algorithms.' },
  // Chapter 4
  { id: 'rosen-ch4-s1', chapterId: 'rosen-ch4', number: 4.1, title: 'Divisibility and Modular Arithmetic', description: 'Division algorithm, div and mod, congruences and arithmetic modulo m.' },
  { id: 'rosen-ch4-s2', chapterId: 'rosen-ch4', number: 4.2, title: 'Integer Representations and Algorithms', description: 'Base expansions, binary/octal/hex, integer addition/multiplication and modular exponentiation.' },
  { id: 'rosen-ch4-s3', chapterId: 'rosen-ch4', number: 4.3, title: 'Primes and Greatest Common Divisors', description: 'Prime factorization, GCD, Euclidean algorithm, Bézout coefficients and linear congruences.' },
  { id: 'rosen-ch4-s4', chapterId: 'rosen-ch4', number: 4.4, title: 'Solving Congruences', description: 'Linear congruences, the Chinese Remainder Theorem and Fermat’s Little Theorem.' },
  { id: 'rosen-ch4-s5', chapterId: 'rosen-ch4', number: 4.5, title: 'Applications of Congruences', description: 'Hashing functions, pseudorandom numbers and check digits.' },
  { id: 'rosen-ch4-s6', chapterId: 'rosen-ch4', number: 4.6, title: 'Cryptography', description: 'Classical ciphers, RSA public-key cryptosystem, encryption and decryption protocols.' },
  // Chapter 5
  { id: 'rosen-ch5-s1', chapterId: 'rosen-ch5', number: 5.1, title: 'Mathematical Induction', description: 'The well-ordering principle and proofs by mathematical induction.' },
  { id: 'rosen-ch5-s2', chapterId: 'rosen-ch5', number: 5.2, title: 'Strong Induction and Well-Ordering', description: 'Strong induction proofs, lemmas and the validity of the well-ordering property.' },
  { id: 'rosen-ch5-s3', chapterId: 'rosen-ch5', number: 5.3, title: 'Recursive Definitions and Structural Induction', description: 'Recursively defined sets, strings, trees and structural induction proofs.' },
  { id: 'rosen-ch5-s4', chapterId: 'rosen-ch5', number: 5.4, title: 'Recursive Algorithms', description: 'Designing and analyzing recursive algorithms, merge sort, correctness via induction.' },
  { id: 'rosen-ch5-s5', chapterId: 'rosen-ch5', number: 5.5, title: 'Program Correctness', description: 'Hoare triples, partial and total correctness and loop invariants.' },
  // Chapter 6
  { id: 'rosen-ch6-s1', chapterId: 'rosen-ch6', number: 6.1, title: 'The Basics of Counting', description: 'Product rule, sum rule, subtraction and division rules, the pigeonhole principle basics.' },
  { id: 'rosen-ch6-s2', chapterId: 'rosen-ch6', number: 6.2, title: 'The Pigeonhole Principle', description: 'The pigeonhole principle, generalized pigeonhole and Ramsey-type applications.' },
  { id: 'rosen-ch6-s3', chapterId: 'rosen-ch6', number: 6.3, title: 'Permutations and Combinations', description: 'Permutations and combinations of n objects, with and without repetition.' },
  { id: 'rosen-ch6-s4', chapterId: 'rosen-ch6', number: 6.4, title: 'Binomial Coefficients and Identities', description: 'The binomial theorem, Pascal’s triangle and identities for binomial coefficients.' },
  { id: 'rosen-ch6-s5', chapterId: 'rosen-ch6', number: 6.5, title: 'Generalized Permutations and Combinations', description: 'Permutations with repetition, combinations with repetition, distributing objects into boxes.' },
  { id: 'rosen-ch6-s6', chapterId: 'rosen-ch6', number: 6.6, title: 'Generating Permutations and Combinations', description: 'Listing all permutations and combinations: lexicographic order and Gray codes.' },
  // Chapter 7
  { id: 'rosen-ch7-s1', chapterId: 'rosen-ch7', number: 7.1, title: 'An Introduction to Discrete Probability', description: 'Sample spaces, events, assigning probabilities and combining events.' },
  { id: 'rosen-ch7-s2', chapterId: 'rosen-ch7', number: 7.2, title: 'Probability Theory', description: 'Conditional probability, independence, Bernoulli trials and random variables.' },
  { id: 'rosen-ch7-s3', chapterId: 'rosen-ch7', number: 7.3, title: 'Bayes’ Theorem', description: 'Bayes’ theorem, partitioning sample spaces and Bayesian inference.' },
  { id: 'rosen-ch7-s4', chapterId: 'rosen-ch7', number: 7.4, title: 'Expected Value and Variance', description: 'Linearity of expectation, variance, Chebyshev’s inequality and Markov chains.' },
  // Chapter 8
  { id: 'rosen-ch8-s1', chapterId: 'rosen-ch8', number: 8.1, title: 'Applications of Recurrence Relations', description: 'Modeling with recurrence relations: Fibonacci, compound interest, divide-and-conquer.' },
  { id: 'rosen-ch8-s2', chapterId: 'rosen-ch8', number: 8.2, title: 'Solving Linear Recurrence Relations', description: 'Homogeneous linear recurrences, characteristic roots, distinct and repeated roots.' },
  { id: 'rosen-ch8-s3', chapterId: 'rosen-ch8', number: 8.3, title: 'Divide-and-Conquer Algorithms and Recurrence Relations', description: 'Master theorem style analysis of divide-and-conquer recurrences.' },
  { id: 'rosen-ch8-s4', chapterId: 'rosen-ch8', number: 8.4, title: 'Generating Functions', description: 'Ordinary generating functions, closed forms and counting applications.' },
  { id: 'rosen-ch8-s5', chapterId: 'rosen-ch8', number: 8.5, title: 'Inclusion–Exclusion', description: 'The principle of inclusion–exclusion for counting unions of sets.' },
  { id: 'rosen-ch8-s6', chapterId: 'rosen-ch8', number: 8.6, title: 'Applications of Inclusion–Exclusion', description: 'Counting onto functions, derangements and the sieve of Eratosthenes.' },
  // Chapter 9
  { id: 'rosen-ch9-s1', chapterId: 'rosen-ch9', number: 9.1, title: 'Relations and Their Properties', description: 'Binary relations, properties: reflexive, symmetric, antisymmetric, transitive; combining relations.' },
  { id: 'rosen-ch9-s2', chapterId: 'rosen-ch9', number: 9.2, title: 'n-ary Relations and Their Applications', description: 'n-ary relations, relational databases, keys and projection/join operations.' },
  { id: 'rosen-ch9-s3', chapterId: 'rosen-ch9', number: 9.3, title: 'Representing Relations', description: 'Matrices and digraphs as representations of relations.' },
  { id: 'rosen-ch9-s4', chapterId: 'rosen-ch9', number: 9.4, title: 'Closures of Relations', description: 'Reflexive, symmetric and transitive closures; Warshall’s algorithm.' },
  { id: 'rosen-ch9-s5', chapterId: 'rosen-ch9', number: 9.5, title: 'Equivalence Relations', description: 'Equivalence classes, partitions and connections between them.' },
  { id: 'rosen-ch9-s6', chapterId: 'rosen-ch9', number: 9.6, title: 'Partial Orderings', description: 'Posets, Hasse diagrams, total orders, lattices and topological sorting.' },
  // Chapter 10
  { id: 'rosen-ch10-s1', chapterId: 'rosen-ch10', number: 10.1, title: 'Graphs and Graph Models', description: 'Graph terminology, graph models for networks, social analysis and scheduling.' },
  { id: 'rosen-ch10-s2', chapterId: 'rosen-ch10', number: 10.2, title: 'Graph Terminology and Special Types of Graphs', description: 'Degrees, complete, bipartite, regular graphs and new graphs from old.' },
  { id: 'rosen-ch10-s3', chapterId: 'rosen-ch10', number: 10.3, title: 'Representing Graphs and Graph Isomorphism', description: 'Adjacency lists, adjacency matrices and detecting graph isomorphism.' },
  { id: 'rosen-ch10-s4', chapterId: 'rosen-ch10', number: 10.4, title: 'Connectivity', description: 'Paths, connectedness, Menger’s theorem and paths in directed graphs.' },
  { id: 'rosen-ch10-s5', chapterId: 'rosen-ch10', number: 10.5, title: 'Euler and Hamilton Paths', description: 'Euler circuits and paths, Hamilton circuits, the traveling salesperson problem.' },
  { id: 'rosen-ch10-s6', chapterId: 'rosen-ch10', number: 10.6, title: 'Shortest-Path Problems', description: 'Dijkstra’s algorithm, shortest paths in weighted graphs.' },
  { id: 'rosen-ch10-s7', chapterId: 'rosen-ch10', number: 10.7, title: 'Planar Graphs', description: 'Euler’s formula, Kuratowski’s theorem and planarity.' },
  { id: 'rosen-ch10-s8', chapterId: 'rosen-ch10', number: 10.8, title: 'Graph Coloring', description: 'Chromatic number, the four color theorem and coloring applications.' },
  // Chapter 11
  { id: 'rosen-ch11-s1', chapterId: 'rosen-ch11', number: 11.1, title: 'Introduction to Trees', description: 'Trees, forests, rooted trees, m-ary trees and properties of trees.' },
  { id: 'rosen-ch11-s2', chapterId: 'rosen-ch11', number: 11.2, title: 'Applications of Trees', description: 'Binary search trees, decision trees, prefix codes and Huffman coding.' },
  { id: 'rosen-ch11-s3', chapterId: 'rosen-ch11', number: 11.3, title: 'Tree Traversal', description: 'Preorder, inorder and postorder traversal, expression trees.' },
  { id: 'rosen-ch11-s4', chapterId: 'rosen-ch11', number: 11.4, title: 'Spanning Trees', description: 'Spanning trees, DFS and BFS construction, counting spanning trees.' },
  { id: 'rosen-ch11-s5', chapterId: 'rosen-ch11', number: 11.5, title: 'Minimum Spanning Trees', description: 'Prim’s and Kruskal’s algorithms for minimum spanning trees.' },
  // Chapter 12
  { id: 'rosen-ch12-s1', chapterId: 'rosen-ch12', number: 12.1, title: 'Boolean Functions', description: 'Boolean functions, Boolean expressions and duality.' },
  { id: 'rosen-ch12-s2', chapterId: 'rosen-ch12', number: 12.2, title: 'Representing Boolean Functions', description: 'Sum-of-products expansions and functional completeness.' },
  { id: 'rosen-ch12-s3', chapterId: 'rosen-ch12', number: 12.3, title: 'Logic Gates', description: 'Gates: NOT, AND, OR, NAND, NOR, XOR; combinational circuits.' },
  { id: 'rosen-ch12-s4', chapterId: 'rosen-ch12', number: 12.4, title: 'Minimization of Circuits', description: 'Karnaugh maps, the Quine–McCluskey method and don’t care conditions.' },
  // Chapter 13
  { id: 'rosen-ch13-s1', chapterId: 'rosen-ch13', number: 13.1, title: 'Languages and Grammars', description: 'Phrase-structure grammars, types 0–3, derivation and Backus–Naur form.' },
  { id: 'rosen-ch13-s2', chapterId: 'rosen-ch13', number: 13.2, title: 'Finite-State Machines with Output', description: 'Moore machines and Mealy machines with output functions.' },
  { id: 'rosen-ch13-s3', chapterId: 'rosen-ch13', number: 13.3, title: 'Finite-State Machines with No Output', description: 'State diagrams, set of strings, language recognition, regular sets.' },
  { id: 'rosen-ch13-s4', chapterId: 'rosen-ch13', number: 13.4, title: 'Language Recognition', description: 'Nondeterministic finite-state machines, Kleene’s theorem and regular expressions.' },
  { id: 'rosen-ch13-s5', chapterId: 'rosen-ch13', number: 13.5, title: 'Turing Machines', description: 'Turing machines, Church–Turing thesis and computability.' },
  // ---- Operating System Concepts — Chapter 1: Introduction ----
  { id: 'osc-ch1-s1', chapterId: 'osc-ch1', number: 1.1, title: 'What Operating Systems Do', description: 'The user view and system view of an OS, and a working definition of what an operating system actually is.' },
  { id: 'osc-ch1-s2', chapterId: 'osc-ch1', number: 1.2, title: 'Computer-System Organization', description: 'CPU, device controllers and the bus; the interrupt-driven cycle, the storage hierarchy and direct memory access.' },
  { id: 'osc-ch1-s3', chapterId: 'osc-ch1', number: 1.3, title: 'Computer-System Architecture', description: 'Single-processor systems, multicore, NUMA, clusters and distributed systems.' },
  { id: 'osc-ch1-s4', chapterId: 'osc-ch1', number: 1.4, title: 'Operating-System Operations', description: 'Dual-mode operation, privileged instructions, the timer, and multiprogramming vs time sharing.' },
  { id: 'osc-ch1-s5', chapterId: 'osc-ch1', number: 1.5, title: 'Environments, Kernel Structures and Open Source', description: 'Resource management, security, virtualization; kernel data structures (lists, queues, trees, hashes, maps); computing environments; free and open-source operating systems.' },
  // ---- OSC Chapter 2: Operating-System Structures ----
  { id: 'osc-ch2-s1', chapterId: 'osc-ch2', number: 2.1, title: 'Operating-System Services', description: 'What the OS provides to users, processes and the system itself — one user interface plus nine core services.' },
  { id: 'osc-ch2-s2', chapterId: 'osc-ch2', number: 2.2, title: 'User Interfaces and System Calls', description: 'CLI, GUI and touch interfaces; the system-call interface; the six categories of system calls and parameter passing.' },
  { id: 'osc-ch2-s3', chapterId: 'osc-ch2', number: 2.3, title: 'System Services, Linkers and Loaders', description: 'System services, why applications are OS-specific, and how linkers and loaders bring programs to life.' },
  { id: 'osc-ch2-s4', chapterId: 'osc-ch2', number: 2.4, title: 'Operating-System Design and Structure', description: 'Mechanisms vs policies; monolithic, layered, microkernel, modular and hybrid designs — macOS, iOS and Android.' },
  { id: 'osc-ch2-s5', chapterId: 'osc-ch2', number: 2.5, title: 'Building, Booting and Debugging an OS', description: 'The boot process from firmware to GRUB, the Windows subsystem for Linux, and OS debugging with BCC/DTrace.' },
  // ---- OSC Chapter 3: Processes ----
  { id: 'osc-ch3-s1', chapterId: 'osc-ch3', number: 3.1, title: 'Process Concept', description: 'A process is a program in execution: the memory layout of a C program, the PCB and the process states.' },
  { id: 'osc-ch3-s2', chapterId: 'osc-ch3', number: 3.2, title: 'Process Scheduling', description: 'Ready and device queues, long/short-term schedulers, context switching and its cost.' },
  { id: 'osc-ch3-s3', chapterId: 'osc-ch3', number: 3.3, title: 'Operations on Processes', description: 'Process creation with fork()/exec(), parent–child relationships, wait/exit, Android’s process hierarchy and systemd.' },
  { id: 'osc-ch3-s4', chapterId: 'osc-ch3', number: 3.4, title: 'IPC in Shared-Memory Systems', description: 'Interprocess communication, the producer–consumer problem and the bounded ring buffer with in/out counters.' },
  { id: 'osc-ch3-s5', chapterId: 'osc-ch3', number: 3.5, title: 'Message Passing, Pipes and Client-Server IPC', description: 'Direct vs indirect communication, blocking and buffering; POSIX and Windows IPC; pipes, sockets, RPC and Android AIDL.' },
  // ---- OSC Chapter 4: Threads & Concurrency ----
  { id: 'osc-ch4-s1', chapterId: 'osc-ch4', number: 4.1, title: 'Overview of Threads', description: 'What a thread is, what it shares with its sibling threads and the four benefits of multithreading.' },
  { id: 'osc-ch4-s2', chapterId: 'osc-ch4', number: 4.2, title: 'Multicore Programming and Amdahl’s Law', description: 'Data vs task parallelism, the four challenges of multicore programming, and the speedup equation that caps every parallel program.' },
  { id: 'osc-ch4-s3', chapterId: 'osc-ch4', number: 4.3, title: 'Multithreading Models and Thread Libraries', description: 'User vs kernel threads, many-to-one, one-to-one and many-to-many models; Pthreads, Windows and Java thread libraries.' },
  { id: 'osc-ch4-s4', chapterId: 'osc-ch4', number: 4.4, title: 'Implicit Threading and Threading Issues', description: 'Thread pools, OpenMP, Grand Central Dispatch and fork–join; cancellation, signals, thread-local storage and kernel thread designs.' },
  // ---- OSC Chapter 5: CPU Scheduling ----
  { id: 'osc-ch5-s1', chapterId: 'osc-ch5', number: 5.1, title: 'Basic Concepts', description: 'CPU–I/O burst cycles, when scheduling decisions happen, and preemptive vs non-preemptive policies.' },
  { id: 'osc-ch5-s2', chapterId: 'osc-ch5', number: 5.2, title: 'Scheduling Criteria', description: 'The five metrics — CPU utilization, throughput, turnaround, waiting and response time — and how they trade off.' },
  { id: 'osc-ch5-s3', chapterId: 'osc-ch5', number: 5.3, title: 'Scheduling Algorithms', description: 'FCFS and the convoy effect, SJF/SRTF with exponential averaging, priority with aging, and round robin with quantum effects.' },
  { id: 'osc-ch5-s4', chapterId: 'osc-ch5', number: 5.4, title: 'Thread and Multiprocessor Scheduling', description: 'Multilevel queues and feedback, processor affinity, load balancing, NUMA-aware scheduling, Linux CFS and Windows 10.' },
  { id: 'osc-ch5-s5', chapterId: 'osc-ch5', number: 5.5, title: 'Real-Time Scheduling and Evaluation', description: 'Rate-monotonic and earliest-deadline-first scheduling with utilization bounds; deterministic, queueing and simulation evaluation.' },
  // ---- OSC Chapter 6: Synchronization Tools ----
  { id: 'osc-ch6-s1', chapterId: 'osc-ch6', number: 6.1, title: 'Race Conditions and the Critical-Section Problem', description: 'Why shared data breaks under interleaving, and the three requirements every correct solution must satisfy.' },
  { id: 'osc-ch6-s2', chapterId: 'osc-ch6', number: 6.2, title: 'Peterson’s Solution and Hardware Support', description: 'Peterson’s algorithm, memory barriers and instruction reordering, test-and-set, compare-and-swap and atomic variables.' },
  { id: 'osc-ch6-s3', chapterId: 'osc-ch6', number: 6.3, title: 'Mutex Locks and Semaphores', description: 'Spinlocks and CAS-based mutexes; counting and binary semaphores, busy-wait vs sleep implementations and their dangers.' },
  { id: 'osc-ch6-s4', chapterId: 'osc-ch6', number: 6.4, title: 'Monitors, Liveness and Evaluation', description: 'Condition variables and monitor semantics; deadlock, priority inversion and starvation as liveness hazards; tool support.' },
  // ---- OSC Chapter 7: Synchronization Examples ----
  { id: 'osc-ch7-s1', chapterId: 'osc-ch7', number: 7.1, title: 'The Bounded-Buffer Problem', description: 'Producer–consumer with semaphores and with monitors — the canonical synchronization pattern.' },
  { id: 'osc-ch7-s2', chapterId: 'osc-ch7', number: 7.2, title: 'Readers–Writers and Dining Philosophers', description: 'Concurrent readers vs exclusive writers; five philosophers, five forks and deadlock-free solutions.' },
  { id: 'osc-ch7-s3', chapterId: 'osc-ch7', number: 7.3, title: 'Synchronization Within Kernels and POSIX', description: 'Windows and Linux kernel synchronization strategies and the POSIX mutex, semaphore and condition-variable APIs.' },
  { id: 'osc-ch7-s4', chapterId: 'osc-ch7', number: 7.4, title: 'Java Synchronization and Alternative Approaches', description: 'Java monitors, wait/notify and reentrant locks; transactional memory, OpenMP and functional languages as lock-free alternatives.' },
  // ---- OSC Chapter 8: Deadlocks ----
  { id: 'osc-ch8-s1', chapterId: 'osc-ch8', number: 8.1, title: 'System Model and Deadlock Characterization', description: 'Resources, the resource-allocation graph and the four necessary conditions for deadlock.' },
  { id: 'osc-ch8-s2', chapterId: 'osc-ch8', number: 8.2, title: 'Deadlock Prevention and Avoidance', description: 'Breaking the four conditions; safe states and the Banker’s algorithm with full worked examples.' },
  { id: 'osc-ch8-s3', chapterId: 'osc-ch8', number: 8.3, title: 'Detection, Recovery and Livelock', description: 'Deadlock detection algorithms, recovery by termination or rollback, livelock and Linux lockdep / Java thread dumps.' },
  // ---- OSC Chapter 9: Main Memory ----
  { id: 'osc-ch9-s1', chapterId: 'osc-ch9', number: 9.1, title: 'Background and Address Binding', description: 'Logical vs physical addresses, the MMU and dynamic relocation, base-and-limit registers, dynamic loading, linking and DLLs.' },
  { id: 'osc-ch9-s2', chapterId: 'osc-ch9', number: 9.2, title: 'Contiguous Allocation and Swapping', description: 'First/best/worst fit, internal vs external fragmentation, compaction and swapping pages to backing store.' },
  { id: 'osc-ch9-s3', chapterId: 'osc-ch9', number: 9.3, title: 'Paging', description: 'Frames and pages, the page table, address translation with the offset split, and the TLB with effective-access-time math.' },
  { id: 'osc-ch9-s4', chapterId: 'osc-ch9', number: 9.4, title: 'Page-Table Structure and Architectures', description: 'Hierarchical, hashed and inverted page tables; protection and shared pages; Intel x86-64 and ARMv8 examples.' },
  // ---- OSC Chapter 10: Virtual Memory ----
  { id: 'osc-ch10-s1', chapterId: 'osc-ch10', number: 10.1, title: 'Background and Demand Paging', description: 'Running programs bigger than RAM: the page-fault dance, its cost and the effective-access-time formula.' },
  { id: 'osc-ch10-s2', chapterId: 'osc-ch10', number: 10.2, title: 'Copy-on-Write and Memory Compression', description: 'fork() without copying pages, vfork, and compressed memory in macOS and Windows 10.' },
  { id: 'osc-ch10-s3', chapterId: 'osc-ch10', number: 10.3, title: 'Page Replacement', description: 'FIFO and Belady’s anomaly, optimal replacement, LRU as stack approximation, and clock/second-chance/enhanced variants.' },
  { id: 'osc-ch10-s4', chapterId: 'osc-ch10', number: 10.4, title: 'Allocation of Frames and Thrashing', description: 'Equal vs proportional allocation, global vs local replacement, page-fault frequency, working sets and why thrashing happens.' },
  { id: 'osc-ch10-s5', chapterId: 'osc-ch10', number: 10.5, title: 'Memory-Mapped Files and Kernel Memory', description: 'mmap vs read/write, shared memory via files; slab and buddy allocators; Linux and Windows 10 virtual memory in practice.' },
  // ---- OSC Chapter 11: Mass-Storage Structure ----
  { id: 'osc-ch11-s1', chapterId: 'osc-ch11', number: 11.1, title: 'HDD and NVM Device Structure', description: 'Platters, tracks, cylinders, sectors and transfer rates; SSD/NVM pages and blocks, the flash translation layer and wear leveling.' },
  { id: 'osc-ch11-s2', chapterId: 'osc-ch11', number: 11.2, title: 'Disk Scheduling and Device Management', description: 'FCFS, SSTF, SCAN, C-SCAN and C-LOOK on a moving head; formatting, the boot block, bad blocks, ECC and swap-space management.' },
  { id: 'osc-ch11-s3', chapterId: 'osc-ch11', number: 11.3, title: 'Storage Attachment', description: 'Direct-attached buses, network-attached storage (NAS), storage-area networks (SAN), cloud and object storage.' },
  { id: 'osc-ch11-s4', chapterId: 'osc-ch11', number: 11.4, title: 'RAID Structure', description: 'Striping, mirroring and parity; RAID 0–6 with capacity and reliability formulas; rebuilding and NVM RAID.' },
  // ---- OSC Chapter 12: I/O Systems ----
  { id: 'osc-ch12-s1', chapterId: 'osc-ch12', number: 12.1, title: 'I/O Hardware', description: 'Ports, buses and controllers; handshaking, polling, interrupt vectors and traps, and direct memory access.' },
  { id: 'osc-ch12-s2', chapterId: 'osc-ch12', number: 12.2, title: 'Application I/O Interface and Kernel I/O Subsystem', description: 'Block, character and network devices; blocking, nonblocking and vectored I/O; buffering, caching, spooling and the life of an I/O request.' },
  { id: 'osc-ch12-s3', chapterId: 'osc-ch12', number: 12.3, title: 'I/O Performance and Power Management', description: 'The I/O performance ladder, STREAMS, and power management for mobile and laptop systems.' },
  // ---- OSC Chapter 13: File-System Interface ----
  { id: 'osc-ch13-s1', chapterId: 'osc-ch13', number: 13.1, title: 'File Concept and Attributes', description: 'What a file is, its attributes and operations, file types and internal structure.' },
  { id: 'osc-ch13-s2', chapterId: 'osc-ch13', number: 13.2, title: 'Access Methods', description: 'Sequential, direct and indexed access — and the index structures that emulate each.' },
  { id: 'osc-ch13-s3', chapterId: 'osc-ch13', number: 13.3, title: 'Directory Structure', description: 'Single-level to two-level to tree to acyclic-graph directories; sharing, mounting and path resolution.' },
  { id: 'osc-ch13-s4', chapterId: 'osc-ch13', number: 13.4, title: 'Protection and Memory-Mapped Files', description: 'Access control — owners, groups and ACLs; memory-mapped files and the Windows file API.' },
  // ---- OSC Chapter 14: File-System Implementation ----
  { id: 'osc-ch14-s1', chapterId: 'osc-ch14', number: 14.1, title: 'File-System Structure, Operations and Directories', description: 'The layered design, the mount protocol, the open()/read() flow and linear-list vs hash-table directories.' },
  { id: 'osc-ch14-s2', chapterId: 'osc-ch14', number: 14.2, title: 'Allocation Methods and Free Space', description: 'Contiguous extents, linked allocation and FAT, indexed i-nodes; bitmaps vs linked free lists; performance trade-offs.' },
  { id: 'osc-ch14-s3', chapterId: 'osc-ch14', number: 14.3, title: 'Efficiency, Performance and Recovery', description: 'Disk efficiency, the page cache, journaling/write-ahead logging, snapshots and the WAFL file system.' },
  // ---- OSC Chapter 15: File-System Internals ----
  { id: 'osc-ch15-s1', chapterId: 'osc-ch15', number: 15.1, title: 'File Systems, Partitions and Mounting', description: 'File-system types, partitions, the boot partition and the mount protocol.' },
  { id: 'osc-ch15-s2', chapterId: 'osc-ch15', number: 15.2, title: 'File Sharing and Virtual File Systems', description: 'Remote vs distributed file sharing and the VFS object model that unifies many file systems.' },
  { id: 'osc-ch15-s3', chapterId: 'osc-ch15', number: 15.3, title: 'Remote and Distributed File Systems', description: 'The NFS protocol and idempotent operations, DFS naming and transparency, and remote-access caching.' },
  { id: 'osc-ch15-s4', chapterId: 'osc-ch15', number: 15.4, title: 'Consistency Semantics', description: 'Unix, session and immutable-file semantics — what “reading what you wrote” really means.' },
  // ---- Stewart / Mano / Flanagan / Electronics / Feynman sections come from the parts files ----
  ...CALC_SECTIONS,
  ...JS_SECTIONS,
  ...MANO_SECTIONS,
  ...ELEC_SECTIONS,
  ...PHYS_SECTIONS,
  ...CLRS_SECTIONS,
  ...HALL_SECTIONS,
  ...YOUNG_SECTIONS,
  ...EWEN_SECTIONS,
  ...COLETTA_SECTIONS,
  ...CPP_SECTIONS,
  // ---- The Complete Web Development Library (2026 Edition) ----
  ...WEBDEV_SECTIONS,
  // ---- Engineering Mathematics for GATE (2026 Edition) ----
  ...ENGMATH_SECTIONS,
  // ---- JEE Mathematics Companion (2026 Edition) ----
  ...JEEMATHS_SECTIONS,
  // ---- JEE Chemistry (2026 Edition) ----
  ...CHEM_SECTIONS,
  // ---- Databases (2026 Edition) ----
  ...DBMS_SECTIONS,
  // ---- Computer Networks (2026 Edition) ----
  ...CN_SECTIONS,
  // ---- Compilers + Computer Organization (2026 Edition) ----
  ...COMPCOA_SECTIONS,
  // ---- Signals & Systems + Control (2026 Edition) ----
  ...SIGCTRL_SECTIONS,
  // ---- Communications + Electromagnetics (2026 Edition) ----
  ...COMMEM_SECTIONS,
  // ---- Core Java (Horstmann 12e) ----
  ...JAVA_SECTIONS,
  // ---- ============== COMPETITIVE EXAM LIBRARIES (all chapters & sections) ============== ----
  // ---- JEE Main 2026 (official NTA syllabus) ----
  ...JEEMAIN_PHY_SECTIONS,
  ...JEEMAIN_CHEM_SECTIONS,
  ...JEEMAIN_MATH_SECTIONS,
  // ---- JEE Advanced 2026 (official IIT syllabus) ----
  ...JEEADV_PHY_SECTIONS,
  ...JEEADV_CHEM_SECTIONS,
  ...JEEADV_MATH_SECTIONS,
  // ---- Digital SAT (College Board) ----
  ...SAT_MATH_SECTIONS,
  ...SAT_RW_SECTIONS,
  // ---- DRDO Scientist B ----
  ...DRDO_T1_SECTIONS,
  ...DRDO_CSE_SECTIONS,
  ...DRDO_ECE_SECTIONS,
  ...DRDO_EE_SECTIONS,
  ...DRDO_ME_SECTIONS,
  // ---- GATE CS 2026 ----
  ...GATE_CS_SECTIONS,
  // ---- Engineering semester exams ----
  ...ENGG_CSE_SECTIONS,
  ...ENGG_ECE_SECTIONS,
  ...ENGG_EE_SECTIONS,
  ...ENGG_ME_SECTIONS,
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

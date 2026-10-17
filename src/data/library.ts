// ============ Core type system for the StudyVerse platform ============
//
// SUBJECT-WISE LIBRARY — every subject is a course-level discipline and
// contains ALL branches' chapters and every competitive-exam scope for that
// course (the Mathematics model, applied to everything). Provenance (code
// comment only — exam names intentionally absent from user-visible text per
// product decision; see research/*.md): chapters researched from official
// competitive-exam and university syllabi plus the classic textbooks (Rosen,
// Stewart, Halliday, Young, Ewen, Coletta, Feynman, Silberschatz, Mano,
// CLRS, Stroustrup, Horstmann, Flanagan, Hughes, Nilsson).

import { MATH_CHAPTERS, MATH_SECTIONS } from './library-parts/merged/math'
import { PHYS_CHAPTERS, PHYS_SECTIONS } from './library-parts/merged/physics'
import { CHEM_CHAPTERS, CHEM_SECTIONS } from './library-parts/merged/chemistry'
import { ENGLISH_CHAPTERS, ENGLISH_SECTIONS } from './library-parts/merged/english'
import { APT_CHAPTERS, APT_SECTIONS } from './library-parts/merged/aptitude'
import { CCPP_CHAPTERS, CCPP_SECTIONS } from './library-parts/subjects/programming-c-cpp'
import { JAVA_CHAPTERS, JAVA_SECTIONS } from './library-parts/subjects/programming-java'
import { WEB_CHAPTERS, WEB_SECTIONS } from './library-parts/subjects/web-development'
import { AI_CHAPTERS, AI_SECTIONS } from './library-parts/subjects/ai-data-science'
import { DSA_CHAPTERS, DSA_SECTIONS } from './library-parts/subjects/dsa'
import { TOC_CHAPTERS, TOC_SECTIONS } from './library-parts/subjects/toc'
import { COA_CHAPTERS, COA_SECTIONS } from './library-parts/subjects/coa'
import { COMPILER_CHAPTERS, COMPILER_SECTIONS } from './library-parts/subjects/compiler-design'
import { OS_CHAPTERS, OS_SECTIONS } from './library-parts/subjects/operating-systems'
import { DBMS_CHAPTERS, DBMS_SECTIONS } from './library-parts/subjects/dbms'
import { NETWORKS_CHAPTERS, NETWORKS_SECTIONS } from './library-parts/subjects/computer-networks'
import { MICRO_EMBEDDED_CHAPTERS, MICRO_EMBEDDED_SECTIONS } from './library-parts/subjects/microprocessors-embedded'
import { SOFTWARE_CHAPTERS, SOFTWARE_SECTIONS } from './library-parts/subjects/software-emerging'
import { CYBER_CHAPTERS, CYBER_SECTIONS } from './library-parts/subjects/cybersecurity'
import { VISUAL_CHAPTERS, VISUAL_SECTIONS } from './library-parts/subjects/visual-computing'
import { DIGITAL_CHAPTERS, DIGITAL_SECTIONS } from './library-parts/subjects/digital-electronics'
import { EDC_CHAPTERS, EDC_SECTIONS } from './library-parts/subjects/electronic-devices-circuits'
import { SIGNALS_CHAPTERS, SIGNALS_SECTIONS } from './library-parts/subjects/signals-systems'
import { COMMUNICATION_CHAPTERS, COMMUNICATION_SECTIONS } from './library-parts/subjects/communication-systems'
import { EM_CHAPTERS, EM_SECTIONS } from './library-parts/subjects/electromagnetics'
import { VLSI_CHAPTERS, VLSI_SECTIONS } from './library-parts/subjects/vlsi-design'
import { CIRCUITS_CHAPTERS, CIRCUITS_SECTIONS } from './library-parts/subjects/electric-circuits'
import { MACHINES_CHAPTERS, MACHINES_SECTIONS } from './library-parts/subjects/electrical-machines'
import { POWER_CHAPTERS, POWER_SECTIONS } from './library-parts/subjects/power-systems'
import { CONTROL_CHAPTERS, CONTROL_SECTIONS } from './library-parts/subjects/control-instrumentation'
import { ENERGY_CHAPTERS, ENERGY_SECTIONS } from './library-parts/subjects/energy-automotive'
import { MECH_GRAPHICS_CHAPTERS, MECH_GRAPHICS_SECTIONS } from './library-parts/subjects/mechanics-graphics'
import { SOLIDS_CHAPTERS, SOLIDS_SECTIONS } from './library-parts/subjects/solids-materials'
import { MACH_DESIGN_CHAPTERS, MACH_DESIGN_SECTIONS } from './library-parts/subjects/machines-design'
import { THERMAL_CHAPTERS, THERMAL_SECTIONS } from './library-parts/subjects/thermal-fluids'
import { MANUFACTURING_CHAPTERS, MANUFACTURING_SECTIONS } from './library-parts/subjects/manufacturing-industrial'
import { MECHATRONICS_CHAPTERS, MECHATRONICS_SECTIONS } from './library-parts/subjects/mechatronics-robotics'
import {
  KNOWLEDGE_SUBJECTS,
  KNOWLEDGE_BOOKS,
  KNOWLEDGE_CHAPTERS,
  KNOWLEDGE_SECTIONS,
} from './library-parts/knowledge-universe'

export interface Subject {
  id: string
  name: string
  slug: string
  description: string
  icon: string // lucide icon name key
  accent: string // hex accent color
  tagline: string
  group?: string // homepage section (Foundations, Computing Systems, ...)
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
    group: 'Foundations',
  },
  {
    id: 'physics',
    name: 'Physics',
    slug: 'physics',
    description: 'One canonical chapter per topic — mechanics, waves, thermodynamics, electromagnetism, optics and modern physics — merging the great textbooks with entrance-scope and applied engineering physics into a single deduplicated sequence.',
    icon: 'atom',
    accent: '#f59e0b',
    tagline: 'The unified physics curriculum',
    group: 'Foundations',
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    slug: 'chemistry',
    description: 'Physical, organic and inorganic chemistry in full, plus the applied engineering chemistry — water, corrosion, fuels, polymers and nanomaterials — with every mechanism, trend and confirmatory test.',
    icon: 'hexagon',
    accent: '#22d3ee',
    tagline: 'Molecules, mechanisms and applications',
    group: 'Foundations',
  },
  {
    id: 'english',
    name: 'English & Comprehension',
    slug: 'english',
    description: 'Complete verbal skills: reading comprehension and rhetoric, words in context, expression of ideas, standard conventions, grammar essentials, vocabulary and comprehension practice.',
    icon: 'type',
    accent: '#f472b6',
    tagline: 'Read deeply, write precisely',
    group: 'Foundations',
  },
  {
    id: 'aptitude',
    name: 'Aptitude & Reasoning',
    slug: 'aptitude',
    description: 'The complete mental-aptitude curriculum: reasoning and problem solving, quantitative aptitude, general awareness and general science.',
    icon: 'brain',
    accent: '#a3e635',
    tagline: 'Sharpen every kind of thinking',
    group: 'Foundations',
  },
  {
    id: 'programming-c-cpp',
    name: 'C & C++ Programming',
    slug: 'c-cpp-programming',
    description: 'The complete systems-programming track: C from first principles — types, control flow, functions, arrays, pointers, structures and files — followed by the full C++ canon: the language tour, classes and resource management, templates and generic programming, the standard library, concurrency and metaprogramming. Every branch’s programming curriculum and assessment scope is folded in.',
    icon: 'terminal',
    accent: '#f97316',
    tagline: 'From pointers to templates',
    group: 'Programming & Software',
  },
  {
    id: 'programming-java',
    name: 'Java Programming',
    slug: 'java-programming',
    description: 'The complete Java track: platform and environment, language fundamentals, objects and classes, inheritance, interfaces and lambdas, error handling and logging, generics, collections, concurrency, streams, I/O and networking, JDBC and modules — matching every branch’s Java curriculum and assessment scope.',
    icon: 'package',
    accent: '#dc2626',
    tagline: 'Objects, streams and enterprise craft',
    group: 'Programming & Software',
  },
  {
    id: 'web-development',
    name: 'Web Development & JavaScript',
    slug: 'web-development',
    description: 'The complete web track: internet foundations, HTML semantics, CSS layout and theming, client-side JavaScript, TypeScript, React and Next.js, Node APIs, SQL and NoSQL databases, auth and security, testing, performance, accessibility, SEO and deployment — plus the full definitive JavaScript course covering the language core, browser and server platforms, with every curriculum and assessment scope merged in.',
    icon: 'globe',
    accent: '#14b8a6',
    tagline: 'From first page to full stack',
    group: 'Programming & Software',
  },
  {
    id: 'ai-data-science',
    name: 'AI, Machine Learning & Data Science',
    slug: 'ai-data-science',
    description: 'The complete intelligence track: Python programming as the working language, classical artificial intelligence — search, knowledge representation, reasoning and planning — machine learning, deep learning and big-data analytics, consolidating every branch’s AI curriculum and assessment scope into one sequence.',
    icon: 'bot',
    accent: '#9333ea',
    tagline: 'From search to neural networks',
    group: 'Programming & Software',
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    slug: 'data-structures-algorithms',
    description: 'The complete algorithms canon: growth of functions, divide-and-conquer, sorting and selection, heaps, hash tables, search trees, dynamic programming, greedy methods, amortized analysis, B-trees, Fibonacci heaps, disjoint sets, graph algorithms, maximum flow, number-theoretic and string algorithms, computational geometry and NP-completeness — with every branch’s curriculum and assessment scope folded in.',
    icon: 'git-branch',
    accent: '#16a34a',
    tagline: 'The algorithms canon',
    group: 'Computing Systems',
  },
  {
    id: 'toc',
    name: 'Theory of Computation',
    slug: 'theory-of-computation',
    description: 'The complete computability track: formal languages and grammars, finite automata and regular languages, context-free grammars and pushdown automata, Turing machines, decidability and computability — merging every curriculum and assessment scope for the theory of computation.',
    icon: 'infinity',
    accent: '#c026d3',
    tagline: 'Languages, grammars, machines',
    group: 'Computing Systems',
  },
  {
    id: 'coa',
    name: 'Computer Organization & Architecture',
    slug: 'computer-organization-architecture',
    description: 'How computers are built: register transfer and micro-operations, processor and control-unit design, basic computer organization and microcomputers, instruction-set architecture and addressing modes, datapath and control, pipelining, memory hierarchy and I/O systems, through advanced architectures — merging every branch’s organization curriculum with the classic texts and assessment scopes.',
    icon: 'cpu',
    accent: '#b45309',
    tagline: 'Hardware from gates to pipelines',
    group: 'Computing Systems',
  },
  {
    id: 'compiler-design',
    name: 'Compiler Design',
    slug: 'compiler-design',
    description: 'The complete translation pipeline: lexical analysis and symbol tables, top-down LL parsing, bottom-up LR parsing, syntax-directed translation and runtime organization, and machine-independent and machine-dependent optimization — consolidating every curriculum and assessment scope for translators and compilers.',
    icon: 'arrow-left-right',
    accent: '#be123c',
    tagline: 'From source code to machine code',
    group: 'Computing Systems',
  },
  {
    id: 'operating-systems',
    name: 'Operating Systems',
    slug: 'operating-systems',
    description: 'The complete operating-systems course: OS structures, processes and threads, CPU scheduling, synchronization tools and their classic problems, deadlocks, main and virtual memory, mass storage, and file-system interface, implementation and internals — with every branch’s curriculum and assessment scope folded in.',
    icon: 'server',
    accent: '#0891b2',
    tagline: 'The program that runs programs',
    group: 'Computing Systems',
  },
  {
    id: 'dbms',
    name: 'Database Management Systems',
    slug: 'database-management-systems',
    description: 'The complete databases course: ER modelling, the relational model, algebra and calculus, SQL, normalization, transactions, concurrency control and recovery, indexing and file organization — merging every branch’s curriculum and assessment scope.',
    icon: 'database',
    accent: '#65a30d',
    tagline: 'Model, query, protect',
    group: 'Computing Systems',
  },
  {
    id: 'computer-networks',
    name: 'Computer Networks',
    slug: 'computer-networks',
    description: 'The complete networking track: layering and switching, framing and error control, medium access and Ethernet, routing algorithms and protocols, IP addressing, ARP/DHCP/ICMP, TCP and congestion control, and application protocols — plus the data-communication perspective on WAN technologies, switching and frame formats from the electronics curriculum, with every assessment scope folded in.',
    icon: 'network',
    accent: '#0d9488',
    tagline: 'Layer by layer, end to end',
    group: 'Computing Systems',
  },
  {
    id: 'microprocessors-embedded',
    name: 'Microprocessors & Embedded Systems',
    slug: 'microprocessors-embedded-systems',
    description: 'The complete microprocessor and embedded track: architecture, programming and interfacing of the classic microprocessors and microcontrollers, timers, interrupts and peripherals, embedded C, serial buses from UART to CAN, RTOS concepts and interfacing case studies — merging the computer-science and electronics curricula with every assessment scope.',
    icon: 'circuit-board',
    accent: '#92400e',
    tagline: 'Chips that run the real world',
    group: 'Electronics & Communication',
  },
  {
    id: 'software-emerging',
    name: 'Software Engineering & Emerging Tech',
    slug: 'software-engineering-emerging-tech',
    description: 'Software engineering and the modern stack: process models, requirements, design, testing and project management, cloud computing, the Internet of Things and blockchain architecture — consolidating every branch’s curriculum and assessment scope.',
    icon: 'folder-cog',
    accent: '#7c3aed',
    tagline: 'Process, practice and the new stack',
    group: 'Programming & Software',
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'The complete security course: security foundations and cryptography, symmetric and asymmetric ciphers, hashes and digital signatures, network-security protocols, attacks and defenses, malware analysis and security management — with every branch’s curriculum and assessment scope folded in.',
    icon: 'lock',
    accent: '#f43f5e',
    tagline: 'Defend the system',
    group: 'Programming & Software',
  },
  {
    id: 'visual-computing',
    name: 'Computer Graphics & Image Processing',
    slug: 'computer-graphics-image-processing',
    description: 'The visual-computing track: computer graphics — scan conversion, transformations, clipping, visible-surface determination, curves and surfaces — and digital image processing: enhancement, transforms, restoration, segmentation and compression, merging both curricula and every assessment scope.',
    icon: 'aperture',
    accent: '#06b6d4',
    tagline: 'Pixels to pictures',
    group: 'Computing Systems',
  },
  {
    id: 'digital-electronics',
    name: 'Digital Electronics & Logic Design',
    slug: 'digital-electronics-logic-design',
    description: 'The complete digital track: binary systems and codes, Boolean algebra and gates, minimization from K-maps to Quine–McCluskey, combinational and MSI/LSI design, sequential logic, registers and counters — merging the classic Mano text with the digital-systems course, every branch’s logic curriculum and all assessment scopes.',
    icon: 'binary',
    accent: '#ea5807',
    tagline: 'From switches to processors',
    group: 'Electronics & Communication',
  },
  {
    id: 'electronic-devices-circuits',
    name: 'Electronic Devices & Circuits',
    slug: 'electronic-devices-circuits',
    description: 'The complete devices-and-circuits track: semiconductor physics and the pn junction, diodes and special-purpose devices, BJTs, FETs and MOSFETs, the thyristor family and IC fabrication, amplifier analysis, feedback and oscillators, power stages, op-amp circuits, analog ICs and data converters — merging the electronics coverage of every branch with all assessment scopes.',
    icon: 'battery-charging',
    accent: '#ca8a04',
    tagline: 'Electrons under control',
    group: 'Electronics & Communication',
  },
  {
    id: 'signals-systems',
    name: 'Signals, Systems & DSP',
    slug: 'signals-systems-dsp',
    description: 'The complete signals track: signal classification, LTI systems and convolution, Fourier series and transforms, sampling, Laplace and z-transforms, the DFT and FFT algorithms, FIR and IIR filter design with realization structures and finite word-length effects — plus speech and biomedical DSP applications — with every assessment scope folded in.',
    icon: 'audio-waveform',
    accent: '#8b5cf6',
    tagline: 'Analyze any signal',
    group: 'Electronics & Communication',
  },
  {
    id: 'communication-systems',
    name: 'Communication Systems',
    slug: 'communication-systems',
    description: 'The complete communication track: analog modulation and superheterodyne receivers, digital modulation and channel coding with information theory, wireless and mobile systems from propagation models to 5G, satellite orbits and link budgets, and optical fibre communication and photonic networks — merging every curriculum and assessment scope.',
    icon: 'radio',
    accent: '#e11d48',
    tagline: 'Sender to receiver',
    group: 'Electronics & Communication',
  },
  {
    id: 'electromagnetics',
    name: 'Electromagnetics, Antennas & Microwaves',
    slug: 'electromagnetics-antennas-microwaves',
    description: 'The complete fields track: vector calculus in three coordinate systems, electrostatics and magnetostatics, Maxwell’s equations, plane waves and polarization, transmission lines with Smith charts, waveguides, antennas and wave propagation, and microwave tubes, solid-state devices and radar — with every assessment scope folded in.',
    icon: 'magnet',
    accent: '#d97706',
    tagline: 'Fields, waves, links',
    group: 'Electronics & Communication',
  },
  {
    id: 'vlsi-design',
    name: 'VLSI Design',
    slug: 'vlsi-design',
    description: 'The complete VLSI track: fabrication science from crystal growth to packaging, CMOS process flows and layout rules, MOS inverter design and logic styles, sequential design, subsystem datapaths, memories, low-power techniques and testing — merging both VLSI curricula and every assessment scope.',
    icon: 'layout-grid',
    accent: '#a16207',
    tagline: 'Design the silicon',
    group: 'Electronics & Communication',
  },
  {
    id: 'electric-circuits',
    name: 'Electric Circuits & Networks',
    slug: 'electric-circuits-networks',
    description: 'The complete circuits track: DC and AC fundamentals, mesh and nodal analysis, the full set of network theorems, resonance and coupled circuits, transients, two-port networks and network synthesis — merging the basic-electrical, circuit-analysis and network-analysis courses of every branch with all assessment scopes.',
    icon: 'plug',
    accent: '#f59e0b',
    tagline: 'The language of every electrical system',
    group: 'Electrical & Power',
  },
  {
    id: 'electrical-machines',
    name: 'Electrical Machines, Drives & EV',
    slug: 'electrical-machines-drives-ev',
    description: 'The complete machines track: DC machines, transformers, induction and synchronous machines, special machines, electrical machine design, power-electronic converters and electric drives, utilization and traction, and electric vehicles — merging every branch’s curriculum and assessment scope.',
    icon: 'cog',
    accent: '#15803d',
    tagline: 'Motors, generators, drives',
    group: 'Electrical & Power',
  },
  {
    id: 'power-systems',
    name: 'Power Systems',
    slug: 'power-systems',
    description: 'The complete power track: generation and supply systems, per-unit analysis and load flow, fault studies and protection, switchgear, transmission lines, and HVDC with FACTS — with every branch’s curriculum and assessment scope folded in.',
    icon: 'zap',
    accent: '#a16207',
    tagline: 'Generate, transmit, protect',
    group: 'Electrical & Power',
  },
  {
    id: 'control-instrumentation',
    name: 'Control Systems & Instrumentation',
    slug: 'control-systems-instrumentation',
    description: 'The complete control track: transfer-function modelling, block-diagram algebra and signal flow graphs, time response, stability, root locus and frequency-domain design, compensation and state-space analysis — together with the full measurement and instrumentation stack: bridges, oscilloscopes, transducers and digital instruments from both the electrical and electronics curricula.',
    icon: 'gauge',
    accent: '#0f766e',
    tagline: 'Measure, model, regulate',
    group: 'Electrical & Power',
  },
  {
    id: 'energy-automotive',
    name: 'Energy Conversion & Automotive',
    slug: 'energy-conversion-automotive',
    description: 'The energy-conversion track: power-plant engineering, internal-combustion engines, automobile engineering, rocket & space propulsion and renewable energy systems — merging the mechanical and electrical coverage of energy with every assessment scope.',
    icon: 'fan',
    accent: '#65a30d',
    tagline: 'Engines, wheels, renewables',
    group: 'Mechanical & Energy',
  },
  {
    id: 'mechanics-graphics',
    name: 'Engineering Mechanics & Graphics',
    slug: 'engineering-mechanics-graphics',
    description: 'The mechanics-and-drawing track: engineering mechanics — statics and dynamics of particles and rigid bodies — engineering graphics with projection, sections and development, and machine drawing of components, fits and assemblies — with every branch’s curriculum and assessment scope folded in.',
    icon: 'shapes',
    accent: '#9333ea',
    tagline: 'Forces, motion, drawings',
    group: 'Mechanical & Energy',
  },
  {
    id: 'solids-materials',
    name: 'Mechanics of Solids & Materials',
    slug: 'mechanics-of-solids-materials',
    description: 'The materials track: strength of materials — stress and strain, torsion, bending, shear and deflection — together with materials science and metallurgy: crystal structure, phase diagrams, heat treatment and engineering alloys — merging every branch’s curriculum and assessment scope.',
    icon: 'layers',
    accent: '#57534e',
    tagline: 'Stress, strain, structure',
    group: 'Mechanical & Energy',
  },
  {
    id: 'machines-design',
    name: 'Theory of Machines & Machine Design',
    slug: 'theory-of-machines-design',
    description: 'The machines track: kinematics of mechanisms, velocity and acceleration analysis, dynamics of machines with balancing and vibrations, and the full machine-design sequence — joints, shafts, bearings, gears, springs and design-for-fatigue — with every assessment scope folded in.',
    icon: 'wrench',
    accent: '#b45309',
    tagline: 'Mechanisms into machines',
    group: 'Mechanical & Energy',
  },
  {
    id: 'thermal-fluids',
    name: 'Thermal & Fluid Sciences',
    slug: 'thermal-fluid-sciences',
    description: 'The thermal-fluids track: applied thermodynamics, fluid mechanics, heat and mass transfer, fluid machinery, and refrigeration and air conditioning — merging every branch’s curriculum and assessment scope.',
    icon: 'thermometer',
    accent: '#dc2626',
    tagline: 'Heat, work, flow',
    group: 'Mechanical & Energy',
  },
  {
    id: 'manufacturing-industrial',
    name: 'Manufacturing & Industrial Systems',
    slug: 'manufacturing-industrial-systems',
    description: 'The manufacturing track: casting, forming, welding and machining processes, metrology and quality control, CAD/CAM and automation, and industrial engineering — operations research, production planning and quality management — with every assessment scope folded in.',
    icon: 'hammer',
    accent: '#334155',
    tagline: 'Make it, measure it, manage it',
    group: 'Mechanical & Energy',
  },
  {
    id: 'mechatronics-robotics',
    name: 'Mechatronics & Robotics',
    slug: 'mechatronics-robotics',
    description: 'The integration track: mechatronics — sensors, actuators, microcontroller interfacing and system design — and robotics: kinematics, dynamics and control of manipulators and mobile robots — merging every branch’s curriculum and assessment scope.',
    icon: 'move',
    accent: '#0891b2',
    tagline: 'Where machines think',
    group: 'Mechanical & Energy',
  },
  ...KNOWLEDGE_SUBJECTS,
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
    id: 'c-cpp-complete',
    subjectId: 'programming-c-cpp',
    title: 'C & C++ Programming — The Complete Track',
    author: 'StudyVerse Curriculum Team with Bjarne Stroustrup',
    edition: '2026 Edition',
    year: '2026',
    description: 'All of C and C++ in one track: the C programming course first — types, operators, control flow, functions, arrays, strings, pointers, structures and file handling — then the complete C++ language: tours of the language, abstraction, containers and concurrency; types, declarations and expressions; classes, construction and hierarchies; overloading and templates through metaprogramming; the standard library from containers and algorithms to streams, numerics and concurrency; and memory, resource and utility management.',
    pages: 1640,
    accent: '#f97316',
    sources: [
      'Stroustrup — The C++ Programming Language, 4e (1366 pp)',
      'C programming curriculum — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'java-complete',
    subjectId: 'programming-java',
    title: 'Java Programming — The Complete Track',
    author: 'StudyVerse Curriculum Team with Cay Horstmann',
    edition: '2026 Edition',
    year: '2026',
    description: 'The complete Java course: the Java platform and environment, fundamentals, objects and classes, inheritance, interfaces and lambda expressions, error handling and logging, generics, collections, concurrency, streams, I/O and networking, JDBC and the module system — every branch’s Java curriculum and assessment scope merged into one sequence.',
    pages: 290,
    accent: '#dc2626',
    sources: [
      'Horstmann — Core Java, 12e (two volumes)',
      'University Java curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'web-complete',
    subjectId: 'web-development',
    title: 'Web Development & JavaScript — The Complete Track',
    author: 'StudyVerse Curriculum Team with David Flanagan',
    edition: '2026 Edition',
    year: '2026',
    description: 'From a blank page to a deployed full-stack app: web foundations, semantic HTML, forms and media, CSS fundamentals through layout and theming, motion and tooling, JavaScript for the web, async and storage, TypeScript, React and Next.js, Node and Express, APIs and realtime, SQL and NoSQL with ORMs, auth and security, testing, performance, accessibility and SEO, DevOps and the capstone — followed by the definitive deep course on JavaScript itself: lexical structure, types, expressions, objects, arrays, functions, classes, modules, the standard library, iterators and generators, async patterns, metaprogramming, browsers, Node and tooling.',
    pages: 1340,
    accent: '#14b8a6',
    sources: [
      'The Complete Web Development Library (2026 edition)',
      'Flanagan — JavaScript: The Definitive Guide, 7e (708 pp)',
    ],
  },
  {
    id: 'ai-complete',
    subjectId: 'ai-data-science',
    title: 'AI, Machine Learning & Data Science — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'The intelligence track in one volume: Python programming as the working language, classical artificial intelligence — search, knowledge representation, reasoning, planning and learning — machine learning across supervised, unsupervised and ensemble methods, deep learning with neural architectures and applications, and big-data analytics with the modern data stack. Every branch’s AI curriculum and assessment scope is merged in.',
    pages: 170,
    accent: '#9333ea',
    sources: [
      'University AI/ML/data-science curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'dsa-complete',
    subjectId: 'dsa',
    title: 'Data Structures & Algorithms — The Complete Track',
    author: 'StudyVerse Curriculum Team with Cormen, Leiserson, Rivest & Stein',
    edition: '2026 Edition',
    year: '2026',
    description: 'The complete algorithms canon: the role of algorithms and getting started, growth of functions, divide-and-conquer, randomized algorithms, heapsort and quicksort, linear-time sorting, medians and order statistics, elementary data structures, hash tables, binary search trees, red-black trees and augmentation, dynamic programming and greedy algorithms, amortized analysis, B-trees, Fibonacci heaps, van Emde Boas trees and disjoint sets, graph algorithms from BFS to maximum flow, multithreaded and matrix algorithms, linear programming, polynomials and the FFT, number theory, string matching, computational geometry, NP-completeness and approximation — with every assessment scope folded in.',
    pages: 940,
    accent: '#16a34a',
    sources: [
      'Cormen, Leiserson, Rivest & Stein — Introduction to Algorithms, 3e (1313 pp)',
      'Design-&-analysis curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'toc-complete',
    subjectId: 'toc',
    title: 'Theory of Computation — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Formal languages and the machines that recognize them: regular languages and finite automata, context-free grammars and pushdown automata, Turing machines and computability, decidability and reductions — every curriculum and assessment scope for the theory of computation merged into one chapter-by-section sequence.',
    pages: 50,
    accent: '#c026d3',
    sources: [
      'University automata/computation curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'coa-complete',
    subjectId: 'coa',
    title: 'Computer Organization & Architecture — The Complete Track',
    author: 'StudyVerse Curriculum Team with M. Morris Mano',
    edition: '2026 Edition',
    year: '2026',
    description: 'How computers are built, from the register-transfer level upward: register transfer and micro-operations, processor design, control-unit design, the basic computer and microcomputers, then the modern course — instruction-set architecture and addressing, datapath and control, pipelining, memory hierarchy and I/O systems — capped by advanced architectures. Every branch’s organization curriculum and assessment scope is folded in.',
    pages: 250,
    accent: '#b45309',
    sources: [
      'Mano — Digital Logic and Computer Design (612 pp, architecture chapters)',
      'Computer-organization curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'compiler-complete',
    subjectId: 'compiler-design',
    title: 'Compiler Design — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'The complete translation pipeline: lexical analysis and symbol-table construction, top-down LL parsing, bottom-up LR parsing, syntax-directed translation and runtime memory organization, and optimization — machine-independent and machine-dependent. Every curriculum and assessment scope for translators and compilers is merged in.',
    pages: 120,
    accent: '#be123c',
    sources: [
      'University compiler curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'os-complete',
    subjectId: 'operating-systems',
    title: 'Operating Systems — The Complete Track',
    author: 'StudyVerse Curriculum Team with Silberschatz, Galvin & Gagne',
    edition: '2026 Edition',
    year: '2026',
    description: 'The complete operating-systems course: introduction and OS structures, processes, threads and concurrency, CPU scheduling, synchronization tools and their classic problems, deadlocks, main memory and virtual memory, mass-storage structure, I/O systems, and the file-system interface, implementation and internals — with every branch’s curriculum and assessment scope folded in.',
    pages: 370,
    accent: '#0891b2',
    sources: [
      'Silberschatz, Galvin & Gagne — Operating System Concepts, 10e (918 pp)',
      'University OS curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'dbms-complete',
    subjectId: 'dbms',
    title: 'Database Management Systems — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'The complete databases course: ER modelling, the relational model and algebra with calculus, SQL, normalization, transactions, concurrency control and recovery, and indexing and file organization — every branch’s curriculum and assessment scope merged into one sequence.',
    pages: 190,
    accent: '#65a30d',
    sources: [
      'University DBMS curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'networks-complete',
    subjectId: 'computer-networks',
    title: 'Computer Networks — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'The complete networking track: layering and switching, framing and error control, medium access and Ethernet, routing, IP addressing, ARP/DHCP/ICMP, TCP and congestion control, application protocols — plus the data-communication perspective: OSI and TCP/IP stacks, LAN/MAN/WAN, circuit and packet switching, HDLC, ATM and frame relay, and digital switching — with every assessment scope folded in.',
    pages: 230,
    accent: '#0d9488',
    sources: [
      'University networking curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'microembedded-complete',
    subjectId: 'microprocessors-embedded',
    title: 'Microprocessors & Embedded Systems — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'The complete micro-and-embedded track: microprocessor and microcontroller architecture, programming and interfacing — timers, interrupts, memory and I/O, peripherals and serial buses from UART to CAN — plus embedded-system design: embedded C, RTOS concepts with scheduling and synchronization, and sensor/actuator interfacing case studies. The computer-science and electronics curricula and every assessment scope are merged in.',
    pages: 110,
    accent: '#92400e',
    sources: [
      'University microprocessor & embedded curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'software-complete',
    subjectId: 'software-emerging',
    title: 'Software Engineering & Emerging Tech — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Software practice and the modern stack: software-engineering process models, requirements, design, construction, testing and project management, cloud computing from service models to virtualization and migration, the Internet of Things from sensing to fog computing, and blockchain architecture from consensus to smart contracts — every branch’s curriculum and assessment scope merged in.',
    pages: 110,
    accent: '#7c3aed',
    sources: [
      'University software & emerging-tech curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'cybersecurity-complete',
    subjectId: 'cybersecurity',
    title: 'Cybersecurity — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'The complete security course: security foundations and goals, classical and modern cryptography, symmetric and asymmetric ciphers, hashes, MACs and digital signatures, authentication and key management, network-security protocols and firewalls, web and system attacks, malware, intrusion detection and security management — with every branch’s curriculum and assessment scope folded in.',
    pages: 70,
    accent: '#f43f5e',
    sources: [
      'University security curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'visual-complete',
    subjectId: 'visual-computing',
    title: 'Computer Graphics & Image Processing — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'The visual-computing track: computer graphics — output primitives and scan conversion, 2D and 3D transformations, clipping, viewing, visible-surface determination, illumination, curves and surfaces — and digital image processing: fundamentals and enhancement, transforms, restoration, segmentation, morphology and compression — merging both curricula and every assessment scope.',
    pages: 70,
    accent: '#06b6d4',
    sources: [
      'University graphics & vision curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'digital-complete',
    subjectId: 'digital-electronics',
    title: 'Digital Electronics & Logic Design — The Complete Track',
    author: 'StudyVerse Curriculum Team with M. Morris Mano',
    edition: '2026 Edition',
    year: '2026',
    description: 'The complete digital track: binary systems, Boolean algebra and logic gates, function simplification from K-maps to the Quine–McCluskey method, combinational logic and MSI/LSI blocks, sequential logic, registers and counters — merged with the full digital-systems course covering number systems, PLDs, finite state machines, logic families and HDL basics. Every branch’s logic curriculum and assessment scope is folded in.',
    pages: 310,
    accent: '#ea5807',
    sources: [
      'Mano — Digital Logic and Computer Design (612 pp, logic chapters)',
      'University digital curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'edc-complete',
    subjectId: 'electronic-devices-circuits',
    title: 'Electronic Devices & Circuits — The Complete Track',
    author: 'StudyVerse Curriculum Team with Horowitz & Hill',
    edition: '2026 Edition',
    year: '2026',
    description: 'Devices through analog ICs in one track: semiconductor physics, the pn junction and diode circuits, special-purpose diodes, BJTs, JFETs and MOSFETs with biasing, the thyristor family and IC fabrication; diode and transistor circuit applications, amplifier analysis with small-signal models, feedback and oscillator topologies, power amplifiers and op-amp active circuits; and the analog-IC course — op-amp internals, application circuits, the 555 timer and PLL, voltage regulators, data converters and multipliers. Every branch’s electronics curriculum and assessment scope is merged in.',
    pages: 580,
    accent: '#ca8a04',
    sources: [
      'Horowitz & Hill — The Art of Electronics, 3e (merged)',
      'University devices & circuits curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'signals-complete',
    subjectId: 'signals-systems',
    title: 'Signals, Systems & DSP — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Signals and their processing in one track: signal and system classification with LTI analysis, convolution, Fourier series and transforms, sampling and aliasing, Laplace and z-transforms with system functions; discrete-time analysis with the DFT and FFT, FIR and IIR filter design, realization structures and finite word-length effects — plus speech and biomedical signal applications. Every branch’s curriculum and assessment scope is folded in.',
    pages: 250,
    accent: '#8b5cf6',
    sources: [
      'University signals & DSP curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'communication-complete',
    subjectId: 'communication-systems',
    title: 'Communication Systems — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Sender to receiver in one track: analog modulation and detection with superheterodyne receivers, digital communication with PCM, line coding, matched filtering, digital modulation and channel coding, spread spectrum and information theory; wireless and mobile systems from propagation and fading through GSM to 5G; satellite orbits, transponders and link budgets; and optical fibre communication with photonic networks from SONET to PON. Every curriculum and assessment scope is merged in.',
    pages: 310,
    accent: '#e11d48',
    sources: [
      'University communication curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'em-complete',
    subjectId: 'electromagnetics',
    title: 'Electromagnetics, Antennas & Microwaves — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Fields, waves and links in one track: vector calculus, electrostatics and magnetostatics with boundary conditions, Maxwell’s equations, plane-wave propagation and polarization, transmission lines with Smith charts, and waveguides; antenna parameters, wire and array antennas, aperture antennas and propagation modes; and microwave engineering — tubes, solid-state devices, waveguide components, S-parameters, matching, measurements and radar systems. Every assessment scope is folded in.',
    pages: 200,
    accent: '#d97706',
    sources: [
      'University fields & microwave curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'vlsi-complete',
    subjectId: 'vlsi-design',
    title: 'VLSI Design — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Chip design end to end: fabrication science from crystal growth through oxidation, epitaxy, diffusion, ion implantation, lithography and metallization to complete CMOS flows, layout rules and packaging; MOS inverter VTC and delay, static, dynamic and domino logic styles, sequential design, subsystem datapaths, memory design, low-power techniques and testing with ATPG, scan and BIST — merging both VLSI curricula and every assessment scope.',
    pages: 70,
    accent: '#a16207',
    sources: [
      'University VLSI curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'circuits-complete',
    subjectId: 'electric-circuits',
    title: 'Electric Circuits & Networks — The Complete Track',
    author: 'StudyVerse Curriculum Team with Nilsson & Riedel',
    edition: '2026 Edition',
    year: '2026',
    description: 'The complete circuits track: basic electrical engineering — DC and AC fundamentals, magnetism and batteries; circuit analysis with the deep treatments of capacitance, transients, AC power and resonance, two-port networks; network analysis and synthesis — graph theory and topology, the complete theorem set, RLC transients, resonance and coupled circuits, driving-point functions and Foster/Cauer realization; and the electrical materials that make it all — conductors, magnetics and insulators. Every branch’s circuits curriculum and assessment scope is merged in.',
    pages: 440,
    accent: '#f59e0b',
    sources: [
      'Nilsson & Riedel — Electric Circuits, 12e (merged)',
      'University circuits curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'machines-complete',
    subjectId: 'electrical-machines',
    title: 'Electrical Machines, Drives & EV — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Rotating machinery and drives in one track: DC machines, transformers, induction and synchronous machines, special machines and electrical machine design; power-electronic converters — rectifiers, choppers, inverters and cycloconverters — with electric drives; utilization and electric traction; and electric vehicles — motors, batteries, charging and management systems. Every branch’s curriculum and assessment scope is merged in.',
    pages: 310,
    accent: '#15803d',
    sources: [
      'University machines & drives curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'power-complete',
    subjectId: 'power-systems',
    title: 'Power Systems — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'The grid end to end: generation and supply systems, per-unit representation and load-flow analysis, symmetrical components and fault studies, switchgear and protection — relays, circuit breakers and surge protection — transmission lines and cables, power-system operation and control, and HVDC with FACTS. Every branch’s curriculum and assessment scope is folded in.',
    pages: 190,
    accent: '#a16207',
    sources: [
      'University power curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'control-complete',
    subjectId: 'control-instrumentation',
    title: 'Control Systems & Instrumentation — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Measurement and regulation in one track: control-systems modelling with block-diagram algebra and signal flow graphs, time-domain specifications and stability, root locus, Bode and Nyquist methods, compensation and state-space design; electrical and electronic measurement — standards and errors, bridges and Q-meters, instruments and oscilloscopes, digital techniques; and instrumentation — transducers, signal conditioning, data acquisition and display. Both the electrical and electronics curricula and every assessment scope are merged in.',
    pages: 290,
    accent: '#0f766e',
    sources: [
      'University control & instrumentation curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'energy-complete',
    subjectId: 'energy-automotive',
    title: 'Energy Conversion & Automotive — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Energy and motion in one track: power-plant engineering — thermal, hydro, nuclear and gas plants with their cycles and economics; internal-combustion engines — SI and CI, fuels, combustion, testing and emissions; automobile engineering — transmission, chassis, electricals and modern systems; renewable energy — solar, wind, biomass, geothermal and storage with hybrid systems; and rocket & space propulsion — the thrust and rocket equations, chemical and electric engines, staging, and spacecraft mission systems. The mechanical and electrical coverage and every assessment scope are merged in.',
    pages: 240,
    accent: '#65a30d',
    sources: [
      'University energy & automotive curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'mechanics-complete',
    subjectId: 'mechanics-graphics',
    title: 'Engineering Mechanics & Graphics — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Forces, motion and the drawings that describe them: engineering mechanics — statics of particles and rigid bodies, friction, trusses, dynamics, kinematics and kinetics; engineering graphics — projection systems, orthographic views, sections, development and pictorials; and machine drawing — threads and fasteners, keys, couplings, joints, bearings and assemblies with limits and fits. Every branch’s curriculum and assessment scope is folded in.',
    pages: 100,
    accent: '#9333ea',
    sources: [
      'University mechanics & graphics curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'solids-complete',
    subjectId: 'solids-materials',
    title: 'Mechanics of Solids & Materials — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'How materials carry load and what they are made of: strength of materials — stress and strain, torsion, bending and shear, deflection, columns and strain energy; and materials science — crystal structure and defects, phase diagrams and transformations, heat treatment, ferrous and non-ferrous alloys, composites and smart materials. Every branch’s curriculum and assessment scope is merged in.',
    pages: 110,
    accent: '#57534e',
    sources: [
      'University solids & materials curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'design-complete',
    subjectId: 'machines-design',
    title: 'Theory of Machines & Machine Design — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Mechanisms into machines: kinematics of links, cams and followers, gears and gear trains; velocity and acceleration analysis, friction and belt drives; dynamics of machines — balancing, vibration analysis and critical speeds, governors and flywheels; and machine design — materials and stresses, threaded fasteners, shafts and keys, couplings, springs, bearings, welded and riveted joints, spur and helical gears with fatigue considerations. Every assessment scope is folded in.',
    pages: 130,
    accent: '#b45309',
    sources: [
      'University machines & design curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'thermal-complete',
    subjectId: 'thermal-fluids',
    title: 'Thermal & Fluid Sciences — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Heat, work and flow in one track: applied thermodynamics — laws, processes, cycles, gas and vapour power, refrigeration psychrometry; fluid mechanics — statics, kinematics, dynamics with Bernoulli and momentum, viscous flow, boundary layers, turbomachinery and hydraulic machines; heat and mass transfer — conduction, convection, radiation and exchangers; and refrigeration and air conditioning — vapour-compression and absorption systems, components and load estimation. Every branch’s curriculum and assessment scope is merged in.',
    pages: 260,
    accent: '#dc2626',
    sources: [
      'University thermal & fluids curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'manufacturing-complete',
    subjectId: 'manufacturing-industrial',
    title: 'Manufacturing & Industrial Systems — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Make it, measure it, manage it: manufacturing processes — casting, welding, forming and machining with CNC; metrology and quality control — measurement standards, comparators, gauges, statistical quality control and acceptance sampling; CAD/CAM and automation — geometric modelling, NC part programming, robotics in manufacturing, FMS and CIM; and industrial engineering — operations research from linear programming through queuing, production planning and control, inventory and plant layout. Every assessment scope is folded in.',
    pages: 200,
    accent: '#334155',
    sources: [
      'University manufacturing & industrial curricula — all branches + assessment scopes, merged',
    ],
  },
  {
    id: 'mechatronics-complete',
    subjectId: 'mechatronics-robotics',
    title: 'Mechatronics & Robotics — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    edition: '2026 Edition',
    year: '2026',
    description: 'Where machines think: mechatronics — sensors and transducers, actuators, signal conditioning and microcontroller interfacing, system modeling, design and simulation with case studies; and robotics — manipulator kinematics and dynamics, trajectory planning, control, sensors, end effectors and mobile robotics with applications. Every branch’s curriculum and assessment scope is merged in.',
    pages: 90,
    accent: '#0891b2',
    sources: [
      'University mechatronics & robotics curricula — all branches + assessment scopes, merged',
    ],
  },
  ...KNOWLEDGE_BOOKS,
]

export const LIBRARY_CHAPTERS: ChapterMeta[] = [
  ...MATH_CHAPTERS,
  ...PHYS_CHAPTERS,
  ...CHEM_CHAPTERS,
  ...ENGLISH_CHAPTERS,
  ...APT_CHAPTERS,
  ...CCPP_CHAPTERS,
  ...JAVA_CHAPTERS,
  ...WEB_CHAPTERS,
  ...AI_CHAPTERS,
  ...DSA_CHAPTERS,
  ...TOC_CHAPTERS,
  ...COA_CHAPTERS,
  ...COMPILER_CHAPTERS,
  ...OS_CHAPTERS,
  ...DBMS_CHAPTERS,
  ...NETWORKS_CHAPTERS,
  ...MICRO_EMBEDDED_CHAPTERS,
  ...SOFTWARE_CHAPTERS,
  ...CYBER_CHAPTERS,
  ...VISUAL_CHAPTERS,
  ...DIGITAL_CHAPTERS,
  ...EDC_CHAPTERS,
  ...SIGNALS_CHAPTERS,
  ...COMMUNICATION_CHAPTERS,
  ...EM_CHAPTERS,
  ...VLSI_CHAPTERS,
  ...CIRCUITS_CHAPTERS,
  ...MACHINES_CHAPTERS,
  ...POWER_CHAPTERS,
  ...CONTROL_CHAPTERS,
  ...ENERGY_CHAPTERS,
  ...MECH_GRAPHICS_CHAPTERS,
  ...SOLIDS_CHAPTERS,
  ...MACH_DESIGN_CHAPTERS,
  ...THERMAL_CHAPTERS,
  ...MANUFACTURING_CHAPTERS,
  ...MECHATRONICS_CHAPTERS,
  ...KNOWLEDGE_CHAPTERS,
]

export const LIBRARY_SECTIONS: SectionMeta[] = [
  ...MATH_SECTIONS,
  ...PHYS_SECTIONS,
  ...CHEM_SECTIONS,
  ...ENGLISH_SECTIONS,
  ...APT_SECTIONS,
  ...CCPP_SECTIONS,
  ...JAVA_SECTIONS,
  ...WEB_SECTIONS,
  ...AI_SECTIONS,
  ...DSA_SECTIONS,
  ...TOC_SECTIONS,
  ...COA_SECTIONS,
  ...COMPILER_SECTIONS,
  ...OS_SECTIONS,
  ...DBMS_SECTIONS,
  ...NETWORKS_SECTIONS,
  ...MICRO_EMBEDDED_SECTIONS,
  ...SOFTWARE_SECTIONS,
  ...CYBER_SECTIONS,
  ...VISUAL_SECTIONS,
  ...DIGITAL_SECTIONS,
  ...EDC_SECTIONS,
  ...SIGNALS_SECTIONS,
  ...COMMUNICATION_SECTIONS,
  ...EM_SECTIONS,
  ...VLSI_SECTIONS,
  ...CIRCUITS_SECTIONS,
  ...MACHINES_SECTIONS,
  ...POWER_SECTIONS,
  ...CONTROL_SECTIONS,
  ...ENERGY_SECTIONS,
  ...MECH_GRAPHICS_SECTIONS,
  ...SOLIDS_SECTIONS,
  ...MACH_DESIGN_SECTIONS,
  ...THERMAL_SECTIONS,
  ...MANUFACTURING_SECTIONS,
  ...MECHATRONICS_SECTIONS,
  ...KNOWLEDGE_SECTIONS,
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

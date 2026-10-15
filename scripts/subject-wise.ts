// ============================================================================
// SUBJECT-WISE RESTRUCTURE (round 2) — dissolve the 4 branch mega-books
// (CSE/ECE/EE/ME) into 32 course-level subjects so that EVERY subject
// (like Mathematics already does) contains all branches' chapters and all
// competitive-exam scopes for that course. Chapter/section IDs are kept
// STABLE (content/formulas/progress/deep-links untouched); only bookId,
// chapter numbers and metadata change.
//
// Generated files:
//   src/data/library-parts/subjects/<subjectId>.ts   (32 files)
//   src/data/library.ts                              (rewritten)
// Deleted: merged/cse.ts, ece.ts, ee.ts, me.ts (science files stay)
// ============================================================================
import { LIBRARY_SUBJECTS, LIBRARY_BOOKS, LIBRARY_CHAPTERS, LIBRARY_SECTIONS } from '../src/data/library'
import type { ChapterMeta, SectionMeta } from '../src/data/library'
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'

// ---------------------------------------------------------------- utilities
const q = (s: string) => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"
const range = (prefix: string, from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => `${prefix}${from + i}`)

// ------------------------------------------------- new subject definitions
interface SubjectDef {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  accent: string
  tagline: string
  group: string
}

const G1 = 'Foundations'
const G2 = 'Programming & Software'
const G3 = 'Computing Systems'
const G4 = 'Electronics & Communication'
const G5 = 'Electrical & Power'
const G6 = 'Mechanical & Energy'

const NEW_SUBJECTS: SubjectDef[] = [
  {
    id: 'programming-c-cpp', name: 'C & C++ Programming', slug: 'c-cpp-programming', icon: 'terminal', accent: '#f97316', group: G2,
    tagline: 'From pointers to templates',
    description: 'The complete systems-programming track: C from first principles — types, control flow, functions, arrays, pointers, structures and files — followed by the full C++ canon: the language tour, classes and resource management, templates and generic programming, the standard library, concurrency and metaprogramming. Every branch’s programming curriculum and assessment scope is folded in.',
  },
  {
    id: 'programming-java', name: 'Java Programming', slug: 'java-programming', icon: 'package', accent: '#dc2626', group: G2,
    tagline: 'Objects, streams and enterprise craft',
    description: 'The complete Java track: platform and environment, language fundamentals, objects and classes, inheritance, interfaces and lambdas, error handling and logging, generics, collections, concurrency, streams, I/O and networking, JDBC and modules — matching every branch’s Java curriculum and assessment scope.',
  },
  {
    id: 'web-development', name: 'Web Development & JavaScript', slug: 'web-development', icon: 'globe', accent: '#14b8a6', group: G2,
    tagline: 'From first page to full stack',
    description: 'The complete web track: internet foundations, HTML semantics, CSS layout and theming, client-side JavaScript, TypeScript, React and Next.js, Node APIs, SQL and NoSQL databases, auth and security, testing, performance, accessibility, SEO and deployment — plus the full definitive JavaScript course covering the language core, browser and server platforms, with every curriculum and assessment scope merged in.',
  },
  {
    id: 'ai-data-science', name: 'AI, Machine Learning & Data Science', slug: 'ai-data-science', icon: 'bot', accent: '#9333ea', group: G2,
    tagline: 'From search to neural networks',
    description: 'The complete intelligence track: Python programming as the working language, classical artificial intelligence — search, knowledge representation, reasoning and planning — machine learning, deep learning and big-data analytics, consolidating every branch’s AI curriculum and assessment scope into one sequence.',
  },
  {
    id: 'dsa', name: 'Data Structures & Algorithms', slug: 'data-structures-algorithms', icon: 'git-branch', accent: '#16a34a', group: G3,
    tagline: 'The algorithms canon',
    description: 'The complete algorithms canon: growth of functions, divide-and-conquer, sorting and selection, heaps, hash tables, search trees, dynamic programming, greedy methods, amortized analysis, B-trees, Fibonacci heaps, disjoint sets, graph algorithms, maximum flow, number-theoretic and string algorithms, computational geometry and NP-completeness — with every branch’s curriculum and assessment scope folded in.',
  },
  {
    id: 'toc', name: 'Theory of Computation', slug: 'theory-of-computation', icon: 'infinity', accent: '#c026d3', group: G3,
    tagline: 'Languages, grammars, machines',
    description: 'The complete computability track: formal languages and grammars, finite automata and regular languages, context-free grammars and pushdown automata, Turing machines, decidability and computability — merging every curriculum and assessment scope for the theory of computation.',
  },
  {
    id: 'coa', name: 'Computer Organization & Architecture', slug: 'computer-organization-architecture', icon: 'cpu', accent: '#b45309', group: G3,
    tagline: 'Hardware from gates to pipelines',
    description: 'How computers are built: register transfer and micro-operations, processor and control-unit design, basic computer organization and microcomputers, instruction-set architecture and addressing modes, datapath and control, pipelining, memory hierarchy and I/O systems, through advanced architectures — merging every branch’s organization curriculum with the classic texts and assessment scopes.',
  },
  {
    id: 'compiler-design', name: 'Compiler Design', slug: 'compiler-design', icon: 'arrow-left-right', accent: '#be123c', group: G3,
    tagline: 'From source code to machine code',
    description: 'The complete translation pipeline: lexical analysis and symbol tables, top-down LL parsing, bottom-up LR parsing, syntax-directed translation and runtime organization, and machine-independent and machine-dependent optimization — consolidating every curriculum and assessment scope for translators and compilers.',
  },
  {
    id: 'operating-systems', name: 'Operating Systems', slug: 'operating-systems', icon: 'server', accent: '#0891b2', group: G3,
    tagline: 'The program that runs programs',
    description: 'The complete operating-systems course: OS structures, processes and threads, CPU scheduling, synchronization tools and their classic problems, deadlocks, main and virtual memory, mass storage, and file-system interface, implementation and internals — with every branch’s curriculum and assessment scope folded in.',
  },
  {
    id: 'dbms', name: 'Database Management Systems', slug: 'database-management-systems', icon: 'database', accent: '#65a30d', group: G3,
    tagline: 'Model, query, protect',
    description: 'The complete databases course: ER modelling, the relational model, algebra and calculus, SQL, normalization, transactions, concurrency control and recovery, indexing and file organization — merging every branch’s curriculum and assessment scope.',
  },
  {
    id: 'computer-networks', name: 'Computer Networks', slug: 'computer-networks', icon: 'network', accent: '#0d9488', group: G3,
    tagline: 'Layer by layer, end to end',
    description: 'The complete networking track: layering and switching, framing and error control, medium access and Ethernet, routing algorithms and protocols, IP addressing, ARP/DHCP/ICMP, TCP and congestion control, and application protocols — plus the data-communication perspective on WAN technologies, switching and frame formats from the electronics curriculum, with every assessment scope folded in.',
  },
  {
    id: 'microprocessors-embedded', name: 'Microprocessors & Embedded Systems', slug: 'microprocessors-embedded-systems', icon: 'circuit-board', accent: '#92400e', group: G4,
    tagline: 'Chips that run the real world',
    description: 'The complete microprocessor and embedded track: architecture, programming and interfacing of the classic microprocessors and microcontrollers, timers, interrupts and peripherals, embedded C, serial buses from UART to CAN, RTOS concepts and interfacing case studies — merging the computer-science and electronics curricula with every assessment scope.',
  },
  {
    id: 'software-emerging', name: 'Software Engineering & Emerging Tech', slug: 'software-engineering-emerging-tech', icon: 'folder-cog', accent: '#7c3aed', group: G2,
    tagline: 'Process, practice and the new stack',
    description: 'Software engineering and the modern stack: process models, requirements, design, testing and project management, cloud computing, the Internet of Things and blockchain architecture — consolidating every branch’s curriculum and assessment scope.',
  },
  {
    id: 'cybersecurity', name: 'Cybersecurity', slug: 'cybersecurity', icon: 'lock', accent: '#f43f5e', group: G2,
    tagline: 'Defend the system',
    description: 'The complete security course: security foundations and cryptography, symmetric and asymmetric ciphers, hashes and digital signatures, network-security protocols, attacks and defenses, malware analysis and security management — with every branch’s curriculum and assessment scope folded in.',
  },
  {
    id: 'visual-computing', name: 'Computer Graphics & Image Processing', slug: 'computer-graphics-image-processing', icon: 'aperture', accent: '#06b6d4', group: G3,
    tagline: 'Pixels to pictures',
    description: 'The visual-computing track: computer graphics — scan conversion, transformations, clipping, visible-surface determination, curves and surfaces — and digital image processing: enhancement, transforms, restoration, segmentation and compression, merging both curricula and every assessment scope.',
  },
  {
    id: 'digital-electronics', name: 'Digital Electronics & Logic Design', slug: 'digital-electronics-logic-design', icon: 'binary', accent: '#ea5807', group: G4,
    tagline: 'From switches to processors',
    description: 'The complete digital track: binary systems and codes, Boolean algebra and gates, minimization from K-maps to Quine–McCluskey, combinational and MSI/LSI design, sequential logic, registers and counters — merging the classic Mano text with the digital-systems course, every branch’s logic curriculum and all assessment scopes.',
  },
  {
    id: 'electronic-devices-circuits', name: 'Electronic Devices & Circuits', slug: 'electronic-devices-circuits', icon: 'battery-charging', accent: '#ca8a04', group: G4,
    tagline: 'Electrons under control',
    description: 'The complete devices-and-circuits track: semiconductor physics and the pn junction, diodes and special-purpose devices, BJTs, FETs and MOSFETs, the thyristor family and IC fabrication, amplifier analysis, feedback and oscillators, power stages, op-amp circuits and analog ICs — merging the electronics coverage of every branch with all assessment scopes.',
  },
  {
    id: 'signals-systems', name: 'Signals, Systems & DSP', slug: 'signals-systems-dsp', icon: 'audio-waveform', accent: '#8b5cf6', group: G4,
    tagline: 'Analyze any signal',
    description: 'The complete signals track: signal classification, LTI systems and convolution, Fourier series and transforms, sampling, Laplace and z-transforms, the DFT and FFT algorithms, FIR and IIR filter design with realization structures and finite word-length effects — plus speech and biomedical DSP applications — with every assessment scope folded in.',
  },
  {
    id: 'communication-systems', name: 'Communication Systems', slug: 'communication-systems', icon: 'radio', accent: '#e11d48', group: G4,
    tagline: 'Sender to receiver',
    description: 'The complete communication track: analog modulation and superheterodyne receivers, digital modulation and channel coding with information theory, wireless and mobile systems from propagation models to 5G, satellite orbits and link budgets, and optical fibre communication and photonic networks — merging every curriculum and assessment scope.',
  },
  {
    id: 'electromagnetics', name: 'Electromagnetics, Antennas & Microwaves', slug: 'electromagnetics-antennas-microwaves', icon: 'magnet', accent: '#d97706', group: G4,
    tagline: 'Fields, waves, links',
    description: 'The complete fields track: vector calculus in three coordinate systems, electrostatics and magnetostatics, Maxwell’s equations, plane waves and polarization, transmission lines with Smith charts, waveguides, antennas and wave propagation, and microwave tubes, solid-state devices and radar — with every assessment scope folded in.',
  },
  {
    id: 'vlsi-design', name: 'VLSI Design', slug: 'vlsi-design', icon: 'layout-grid', accent: '#a16207', group: G4,
    tagline: 'Design the silicon',
    description: 'The complete VLSI track: fabrication science from crystal growth to packaging, CMOS process flows and layout rules, MOS inverter design and logic styles, sequential design, subsystem datapaths, memories, low-power techniques and testing — merging both VLSI curricula and every assessment scope.',
  },
  {
    id: 'electric-circuits', name: 'Electric Circuits & Networks', slug: 'electric-circuits-networks', icon: 'plug', accent: '#f59e0b', group: G5,
    tagline: 'The language of every electrical system',
    description: 'The complete circuits track: DC and AC fundamentals, mesh and nodal analysis, the full set of network theorems, resonance and coupled circuits, transients, two-port networks and network synthesis — merging the basic-electrical, circuit-analysis and network-analysis courses of every branch with all assessment scopes.',
  },
  {
    id: 'electrical-machines', name: 'Electrical Machines, Drives & EV', slug: 'electrical-machines-drives-ev', icon: 'cog', accent: '#15803d', group: G5,
    tagline: 'Motors, generators, drives',
    description: 'The complete machines track: DC machines, transformers, induction and synchronous machines, special machines, electrical machine design, power-electronic converters and electric drives, utilization and traction, and electric vehicles — merging every branch’s curriculum and assessment scope.',
  },
  {
    id: 'power-systems', name: 'Power Systems', slug: 'power-systems', icon: 'zap', accent: '#a16207', group: G5,
    tagline: 'Generate, transmit, protect',
    description: 'The complete power track: generation and supply systems, per-unit analysis and load flow, fault studies and protection, switchgear, transmission lines, and HVDC with FACTS — with every branch’s curriculum and assessment scope folded in.',
  },
  {
    id: 'control-instrumentation', name: 'Control Systems & Instrumentation', slug: 'control-systems-instrumentation', icon: 'gauge', accent: '#0f766e', group: G5,
    tagline: 'Measure, model, regulate',
    description: 'The complete control track: transfer-function modelling, block-diagram algebra and signal flow graphs, time response, stability, root locus and frequency-domain design, compensation and state-space analysis — together with the full measurement and instrumentation stack: bridges, oscilloscopes, transducers and digital instruments from both the electrical and electronics curricula.',
  },
  {
    id: 'energy-automotive', name: 'Energy Conversion & Automotive', slug: 'energy-conversion-automotive', icon: 'fan', accent: '#65a30d', group: G6,
    tagline: 'Engines, wheels, renewables',
    description: 'The energy-conversion track: power-plant engineering, internal-combustion engines, automobile engineering and renewable energy systems — merging the mechanical and electrical coverage of energy with every assessment scope.',
  },
  {
    id: 'mechanics-graphics', name: 'Engineering Mechanics & Graphics', slug: 'engineering-mechanics-graphics', icon: 'shapes', accent: '#9333ea', group: G6,
    tagline: 'Forces, motion, drawings',
    description: 'The mechanics-and-drawing track: engineering mechanics — statics and dynamics of particles and rigid bodies — engineering graphics with projection, sections and development, and machine drawing of components, fits and assemblies — with every branch’s curriculum and assessment scope folded in.',
  },
  {
    id: 'solids-materials', name: 'Mechanics of Solids & Materials', slug: 'mechanics-of-solids-materials', icon: 'layers', accent: '#57534e', group: G6,
    tagline: 'Stress, strain, structure',
    description: 'The materials track: strength of materials — stress and strain, torsion, bending, shear and deflection — together with materials science and metallurgy: crystal structure, phase diagrams, heat treatment and engineering alloys — merging every branch’s curriculum and assessment scope.',
  },
  {
    id: 'machines-design', name: 'Theory of Machines & Machine Design', slug: 'theory-of-machines-design', icon: 'wrench', accent: '#b45309', group: G6,
    tagline: 'Mechanisms into machines',
    description: 'The machines track: kinematics of mechanisms, velocity and acceleration analysis, dynamics of machines with balancing and vibrations, and the full machine-design sequence — joints, shafts, bearings, gears, springs and design-for-fatigue — with every assessment scope folded in.',
  },
  {
    id: 'thermal-fluids', name: 'Thermal & Fluid Sciences', slug: 'thermal-fluid-sciences', icon: 'thermometer', accent: '#dc2626', group: G6,
    tagline: 'Heat, work, flow',
    description: 'The thermal-fluids track: applied thermodynamics, fluid mechanics, heat and mass transfer, fluid machinery, and refrigeration and air conditioning — merging every branch’s curriculum and assessment scope.',
  },
  {
    id: 'manufacturing-industrial', name: 'Manufacturing & Industrial Systems', slug: 'manufacturing-industrial-systems', icon: 'hammer', accent: '#334155', group: G6,
    tagline: 'Make it, measure it, manage it',
    description: 'The manufacturing track: casting, forming, welding and machining processes, metrology and quality control, CAD/CAM and automation, and industrial engineering — operations research, production planning and quality management — with every assessment scope folded in.',
  },
  {
    id: 'mechatronics-robotics', name: 'Mechatronics & Robotics', slug: 'mechatronics-robotics', icon: 'move', accent: '#0891b2', group: G6,
    tagline: 'Where machines think',
    description: 'The integration track: mechatronics — sensors, actuators, microcontroller interfacing and system design — and robotics: kinematics, dynamics and control of manipulators and mobile robots — merging every branch’s curriculum and assessment scope.',
  },
]

// ---------------------------------------------------- new book definitions
interface BookDef {
  id: string
  subjectId: string
  title: string
  author: string
  description: string
  accent: string
  sources?: string[]
  exportPrefix: string
  /** ordered chapter ids */
  chapters: string[]
}

const OLD_BRANCH_BOOKS = ['cse-complete', 'ece-complete', 'ee-complete', 'me-complete']

const NEW_BOOKS: BookDef[] = [
  {
    id: 'c-cpp-complete', subjectId: 'programming-c-cpp', exportPrefix: 'CCPP', accent: '#f97316',
    title: 'C & C++ Programming — The Complete Track',
    author: 'StudyVerse Curriculum Team with Bjarne Stroustrup',
    description: 'All of C and C++ in one track: the C programming course first — types, operators, control flow, functions, arrays, strings, pointers, structures and file handling — then the complete C++ language: tours of the language, abstraction, containers and concurrency; types, declarations and expressions; classes, construction and hierarchies; overloading and templates through metaprogramming; the standard library from containers and algorithms to streams, numerics and concurrency; and memory, resource and utility management.',
    sources: ['Stroustrup — The C++ Programming Language, 4e (1366 pp)', 'C programming curriculum — all branches + assessment scopes, merged'],
    chapters: ['cse-e-pps', ...range('cpp-ch', 1, 44)],
  },
  {
    id: 'java-complete', subjectId: 'programming-java', exportPrefix: 'JAVA', accent: '#dc2626',
    title: 'Java Programming — The Complete Track',
    author: 'StudyVerse Curriculum Team with Cay Horstmann',
    description: 'The complete Java course: the Java platform and environment, fundamentals, objects and classes, inheritance, interfaces and lambda expressions, error handling and logging, generics, collections, concurrency, streams, I/O and networking, JDBC and the module system — every branch’s Java curriculum and assessment scope merged into one sequence.',
    sources: ['Horstmann — Core Java, 12e (two volumes)', 'University Java curricula — all branches + assessment scopes, merged'],
    chapters: range('java-ch', 1, 12),
  },
  {
    id: 'web-complete', subjectId: 'web-development', exportPrefix: 'WEB', accent: '#14b8a6',
    title: 'Web Development & JavaScript — The Complete Track',
    author: 'StudyVerse Curriculum Team with David Flanagan',
    description: 'From a blank page to a deployed full-stack app: web foundations, semantic HTML, forms and media, CSS fundamentals through layout and theming, motion and tooling, JavaScript for the web, async and storage, TypeScript, React and Next.js, Node and Express, APIs and realtime, SQL and NoSQL with ORMs, auth and security, testing, performance, accessibility and SEO, DevOps and the capstone — followed by the definitive deep course on JavaScript itself: lexical structure, types, expressions, objects, arrays, functions, classes, modules, the standard library, iterators and generators, async patterns, metaprogramming, browsers, Node and tooling.',
    sources: ['The Complete Web Development Library (2026 edition)', 'Flanagan — JavaScript: The Definitive Guide, 7e (708 pp)'],
    chapters: [...range('web-ch', 1, 26), ...range('js-ch', 1, 17)],
  },
  {
    id: 'ai-complete', subjectId: 'ai-data-science', exportPrefix: 'AI', accent: '#9333ea',
    title: 'AI, Machine Learning & Data Science — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'The intelligence track in one volume: Python programming as the working language, classical artificial intelligence — search, knowledge representation, reasoning, planning and learning — machine learning across supervised, unsupervised and ensemble methods, deep learning with neural architectures and applications, and big-data analytics with the modern data stack. Every branch’s AI curriculum and assessment scope is merged in.',
    sources: ['University AI/ML/data-science curricula — all branches + assessment scopes, merged'],
    chapters: ['cse-e-python', 'cse-e-ai', 'cse-e-ml', 'cse-e-deeplearning', 'cse-e-bigdata'],
  },
  {
    id: 'dsa-complete', subjectId: 'dsa', exportPrefix: 'DSA', accent: '#16a34a',
    title: 'Data Structures & Algorithms — The Complete Track',
    author: 'StudyVerse Curriculum Team with Cormen, Leiserson, Rivest & Stein',
    description: 'The complete algorithms canon: the role of algorithms and getting started, growth of functions, divide-and-conquer, randomized algorithms, heapsort and quicksort, linear-time sorting, medians and order statistics, elementary data structures, hash tables, binary search trees, red-black trees and augmentation, dynamic programming and greedy algorithms, amortized analysis, B-trees, Fibonacci heaps, van Emde Boas trees and disjoint sets, graph algorithms from BFS to maximum flow, multithreaded and matrix algorithms, linear programming, polynomials and the FFT, number theory, string matching, computational geometry, NP-completeness and approximation — with every assessment scope folded in.',
    sources: ['Cormen, Leiserson, Rivest & Stein — Introduction to Algorithms, 3e (1313 pp)', 'Design-&-analysis curricula — all branches + assessment scopes, merged'],
    chapters: range('clrs-ch', 1, 39),
  },
  {
    id: 'toc-complete', subjectId: 'toc', exportPrefix: 'TOC', accent: '#c026d3',
    title: 'Theory of Computation — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Formal languages and the machines that recognize them: regular languages and finite automata, context-free grammars and pushdown automata, Turing machines and computability, decidability and reductions — every curriculum and assessment scope for the theory of computation merged into one chapter-by-section sequence.',
    sources: ['University automata/computation curricula — all branches + assessment scopes, merged'],
    chapters: ['cse-e-toc'],
  },
  {
    id: 'coa-complete', subjectId: 'coa', exportPrefix: 'COA', accent: '#b45309',
    title: 'Computer Organization & Architecture — The Complete Track',
    author: 'StudyVerse Curriculum Team with M. Morris Mano',
    description: 'How computers are built, from the register-transfer level upward: register transfer and micro-operations, processor design, control-unit design, the basic computer and microcomputers, then the modern course — instruction-set architecture and addressing, datapath and control, pipelining, memory hierarchy and I/O systems — capped by advanced architectures. Every branch’s organization curriculum and assessment scope is folded in.',
    sources: ['Mano — Digital Logic and Computer Design (612 pp, architecture chapters)', 'Computer-organization curricula — all branches + assessment scopes, merged'],
    chapters: [...range('mano-ch', 8, 12), ...range('compcoa-ch', 1, 5), 'cse-e-aca'],
  },
  {
    id: 'compiler-complete', subjectId: 'compiler-design', exportPrefix: 'COMPILER', accent: '#be123c',
    title: 'Compiler Design — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'The complete translation pipeline: lexical analysis and symbol-table construction, top-down LL parsing, bottom-up LR parsing, syntax-directed translation and runtime memory organization, and optimization — machine-independent and machine-dependent. Every curriculum and assessment scope for translators and compilers is merged in.',
    sources: ['University compiler curricula — all branches + assessment scopes, merged'],
    chapters: range('compcoa-ch', 6, 10),
  },
  {
    id: 'os-complete', subjectId: 'operating-systems', exportPrefix: 'OS', accent: '#0891b2',
    title: 'Operating Systems — The Complete Track',
    author: 'StudyVerse Curriculum Team with Silberschatz, Galvin & Gagne',
    description: 'The complete operating-systems course: introduction and OS structures, processes, threads and concurrency, CPU scheduling, synchronization tools and their classic problems, deadlocks, main memory and virtual memory, mass-storage structure, I/O systems, and the file-system interface, implementation and internals — with every branch’s curriculum and assessment scope folded in.',
    sources: ['Silberschatz, Galvin & Gagne — Operating System Concepts, 10e (918 pp)', 'University OS curricula — all branches + assessment scopes, merged'],
    chapters: range('osc-ch', 1, 15),
  },
  {
    id: 'dbms-complete', subjectId: 'dbms', exportPrefix: 'DBMS', accent: '#65a30d',
    title: 'Database Management Systems — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'The complete databases course: ER modelling, the relational model and algebra with calculus, SQL, normalization, transactions, concurrency control and recovery, and indexing and file organization — every branch’s curriculum and assessment scope merged into one sequence.',
    sources: ['University DBMS curricula — all branches + assessment scopes, merged'],
    chapters: range('dbms-ch', 1, 8),
  },
  {
    id: 'networks-complete', subjectId: 'computer-networks', exportPrefix: 'NETWORKS', accent: '#0d9488',
    title: 'Computer Networks — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'The complete networking track: layering and switching, framing and error control, medium access and Ethernet, routing, IP addressing, ARP/DHCP/ICMP, TCP and congestion control, application protocols — plus the data-communication perspective: OSI and TCP/IP stacks, LAN/MAN/WAN, circuit and packet switching, HDLC, ATM and frame relay, and digital switching — with every assessment scope folded in.',
    sources: ['University networking curricula — all branches + assessment scopes, merged'],
    chapters: [...range('cn-ch', 1, 8), 'ece-e-data-comm'],
  },
  {
    id: 'microembedded-complete', subjectId: 'microprocessors-embedded', exportPrefix: 'MICRO_EMBEDDED', accent: '#92400e',
    title: 'Microprocessors & Embedded Systems — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'The complete micro-and-embedded track: microprocessor and microcontroller architecture, programming and interfacing — timers, interrupts, memory and I/O, peripherals and serial buses from UART to CAN — plus embedded-system design: embedded C, RTOS concepts with scheduling and synchronization, and sensor/actuator interfacing case studies. The computer-science and electronics curricula and every assessment scope are merged in.',
    sources: ['University microprocessor & embedded curricula — all branches + assessment scopes, merged'],
    chapters: ['cse-e-micro', 'ece-e-embedded'],
  },
  {
    id: 'software-complete', subjectId: 'software-emerging', exportPrefix: 'SOFTWARE', accent: '#7c3aed',
    title: 'Software Engineering & Emerging Tech — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Software practice and the modern stack: software-engineering process models, requirements, design, construction, testing and project management, cloud computing from service models to virtualization and migration, the Internet of Things from sensing to fog computing, and blockchain architecture from consensus to smart contracts — every branch’s curriculum and assessment scope merged in.',
    sources: ['University software & emerging-tech curricula — all branches + assessment scopes, merged'],
    chapters: ['cse-e-sweng', 'cse-e-cloud', 'cse-e-iot', 'cse-e-blockchain'],
  },
  {
    id: 'cybersecurity-complete', subjectId: 'cybersecurity', exportPrefix: 'CYBER', accent: '#f43f5e',
    title: 'Cybersecurity — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'The complete security course: security foundations and goals, classical and modern cryptography, symmetric and asymmetric ciphers, hashes, MACs and digital signatures, authentication and key management, network-security protocols and firewalls, web and system attacks, malware, intrusion detection and security management — with every branch’s curriculum and assessment scope folded in.',
    sources: ['University security curricula — all branches + assessment scopes, merged'],
    chapters: ['cse-e-crypto'],
  },
  {
    id: 'visual-complete', subjectId: 'visual-computing', exportPrefix: 'VISUAL', accent: '#06b6d4',
    title: 'Computer Graphics & Image Processing — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'The visual-computing track: computer graphics — output primitives and scan conversion, 2D and 3D transformations, clipping, viewing, visible-surface determination, illumination, curves and surfaces — and digital image processing: fundamentals and enhancement, transforms, restoration, segmentation, morphology and compression — merging both curricula and every assessment scope.',
    sources: ['University graphics & vision curricula — all branches + assessment scopes, merged'],
    chapters: ['cse-e-cgraphics', 'cse-e-dip'],
  },
  {
    id: 'digital-complete', subjectId: 'digital-electronics', exportPrefix: 'DIGITAL', accent: '#ea5807',
    title: 'Digital Electronics & Logic Design — The Complete Track',
    author: 'StudyVerse Curriculum Team with M. Morris Mano',
    description: 'The complete digital track: binary systems, Boolean algebra and logic gates, function simplification from K-maps to the Quine–McCluskey method, combinational logic and MSI/LSI blocks, sequential logic, registers and counters — merged with the full digital-systems course covering number systems, PLDs, finite state machines, logic families and HDL basics. Every branch’s logic curriculum and assessment scope is folded in.',
    sources: ['Mano — Digital Logic and Computer Design (612 pp, logic chapters)', 'University digital curricula — all branches + assessment scopes, merged'],
    chapters: [...range('mano-ch', 1, 7), 'ece-e-digital'],
  },
  {
    id: 'edc-complete', subjectId: 'electronic-devices-circuits', exportPrefix: 'EDC', accent: '#ca8a04',
    title: 'Electronic Devices & Circuits — The Complete Track',
    author: 'StudyVerse Curriculum Team with Horowitz & Hill',
    description: 'Devices through analog ICs in one track: semiconductor physics, the pn junction and diode circuits, special-purpose diodes, BJTs, JFETs and MOSFETs with biasing, the thyristor family and IC fabrication; diode and transistor circuit applications, amplifier analysis with small-signal models, feedback and oscillator topologies, power amplifiers and op-amp active circuits; and the analog-IC course — op-amp internals, application circuits, the 555 timer and PLL, voltage regulators, data converters and multipliers. Every branch’s electronics curriculum and assessment scope is merged in.',
    sources: ['Horowitz & Hill — The Art of Electronics, 3e (merged)', 'University devices & circuits curricula — all branches + assessment scopes, merged'],
    chapters: ['ece-e-devices', 'ece-e-analog', 'ece-e-ic'],
  },
  {
    id: 'signals-complete', subjectId: 'signals-systems', exportPrefix: 'SIGNALS', accent: '#8b5cf6',
    title: 'Signals, Systems & DSP — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Signals and their processing in one track: signal and system classification with LTI analysis, convolution, Fourier series and transforms, sampling and aliasing, Laplace and z-transforms with system functions; discrete-time analysis with the DFT and FFT, FIR and IIR filter design, realization structures and finite word-length effects — plus speech and biomedical signal applications. Every branch’s curriculum and assessment scope is folded in.',
    sources: ['University signals & DSP curricula — all branches + assessment scopes, merged'],
    chapters: ['ece-e-sigsys', 'ece-e-dsp', 'ece-e-speechbio'],
  },
  {
    id: 'communication-complete', subjectId: 'communication-systems', exportPrefix: 'COMMUNICATION', accent: '#e11d48',
    title: 'Communication Systems — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Sender to receiver in one track: analog modulation and detection with superheterodyne receivers, digital communication with PCM, line coding, matched filtering, digital modulation and channel coding, spread spectrum and information theory; wireless and mobile systems from propagation and fading through GSM to 5G; satellite orbits, transponders and link budgets; and optical fibre communication with photonic networks from SONET to PON. Every curriculum and assessment scope is merged in.',
    sources: ['University communication curricula — all branches + assessment scopes, merged'],
    chapters: ['ece-e-analog-comm', 'ece-e-digital-comm', 'ece-e-wireless', 'ece-e-satellite', 'ece-e-optical-comm', 'ece-e-optical-networks'],
  },
  {
    id: 'em-complete', subjectId: 'electromagnetics', exportPrefix: 'EM', accent: '#d97706',
    title: 'Electromagnetics, Antennas & Microwaves — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Fields, waves and links in one track: vector calculus, electrostatics and magnetostatics with boundary conditions, Maxwell’s equations, plane-wave propagation and polarization, transmission lines with Smith charts, and waveguides; antenna parameters, wire and array antennas, aperture antennas and propagation modes; and microwave engineering — tubes, solid-state devices, waveguide components, S-parameters, matching, measurements and radar systems. Every assessment scope is folded in.',
    sources: ['University fields & microwave curricula — all branches + assessment scopes, merged'],
    chapters: ['ece-e-emft', 'ece-e-antennas', 'ece-e-microwave-radar'],
  },
  {
    id: 'vlsi-complete', subjectId: 'vlsi-design', exportPrefix: 'VLSI', accent: '#a16207',
    title: 'VLSI Design — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Chip design end to end: fabrication science from crystal growth through oxidation, epitaxy, diffusion, ion implantation, lithography and metallization to complete CMOS flows, layout rules and packaging; MOS inverter VTC and delay, static, dynamic and domino logic styles, sequential design, subsystem datapaths, memory design, low-power techniques and testing with ATPG, scan and BIST — merging both VLSI curricula and every assessment scope.',
    sources: ['University VLSI curricula — all branches + assessment scopes, merged'],
    chapters: ['ece-e-vlsi-tech', 'ece-e-vlsi-design'],
  },
  {
    id: 'circuits-complete', subjectId: 'electric-circuits', exportPrefix: 'CIRCUITS', accent: '#f59e0b',
    title: 'Electric Circuits & Networks — The Complete Track',
    author: 'StudyVerse Curriculum Team with Nilsson & Riedel',
    description: 'The complete circuits track: basic electrical engineering — DC and AC fundamentals, magnetism and batteries; circuit analysis with the deep treatments of capacitance, transients, AC power and resonance, two-port networks; network analysis and synthesis — graph theory and topology, the complete theorem set, RLC transients, resonance and coupled circuits, driving-point functions and Foster/Cauer realization; and the electrical materials that make it all — conductors, magnetics and insulators. Every branch’s circuits curriculum and assessment scope is merged in.',
    sources: ['Nilsson & Riedel — Electric Circuits, 12e (merged)', 'University circuits curricula — all branches + assessment scopes, merged'],
    chapters: ['ee-e-basic-electrical', 'ee-e-circuits', 'ece-e-networks', 'ee-e-materials'],
  },
  {
    id: 'machines-complete', subjectId: 'electrical-machines', exportPrefix: 'MACHINES', accent: '#15803d',
    title: 'Electrical Machines, Drives & EV — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Rotating machinery and drives in one track: DC machines, transformers, induction and synchronous machines, special machines and electrical machine design; power-electronic converters — rectifiers, choppers, inverters and cycloconverters — with electric drives; utilization and electric traction; and electric vehicles — motors, batteries, charging and management systems. Every branch’s curriculum and assessment scope is merged in.',
    sources: ['University machines & drives curricula — all branches + assessment scopes, merged'],
    chapters: ['ee-e-machines1', 'ee-e-machines2', 'ee-e-specmach', 'ee-e-machine-design', 'ee-e-power-electronics', 'ee-e-utilization', 'ee-e-ev'],
  },
  {
    id: 'power-complete', subjectId: 'power-systems', exportPrefix: 'POWER', accent: '#a16207',
    title: 'Power Systems — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'The grid end to end: generation and supply systems, per-unit representation and load-flow analysis, symmetrical components and fault studies, switchgear and protection — relays, circuit breakers and surge protection — transmission lines and cables, power-system operation and control, and HVDC with FACTS. Every branch’s curriculum and assessment scope is folded in.',
    sources: ['University power curricula — all branches + assessment scopes, merged'],
    chapters: ['ee-e-ps1', 'ee-e-psa', 'ee-e-protection', 'ee-e-ps2', 'ee-e-hvdc-facts'],
  },
  {
    id: 'control-complete', subjectId: 'control-instrumentation', exportPrefix: 'CONTROL', accent: '#0f766e',
    title: 'Control Systems & Instrumentation — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Measurement and regulation in one track: control-systems modelling with block-diagram algebra and signal flow graphs, time-domain specifications and stability, root locus, Bode and Nyquist methods, compensation and state-space design; electrical and electronic measurement — standards and errors, bridges and Q-meters, instruments and oscilloscopes, digital techniques; and instrumentation — transducers, signal conditioning, data acquisition and display. Both the electrical and electronics curricula and every assessment scope are merged in.',
    sources: ['University control & instrumentation curricula — all branches + assessment scopes, merged'],
    chapters: ['ece-e-control', 'ee-e-measurements', 'ece-e-instrumentation', 'ee-e-instrumentation'],
  },
  {
    id: 'energy-complete', subjectId: 'energy-automotive', exportPrefix: 'ENERGY', accent: '#65a30d',
    title: 'Energy Conversion & Automotive — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Energy and motion in one track: power-plant engineering — thermal, hydro, nuclear and gas plants with their cycles and economics; internal-combustion engines — SI and CI, fuels, combustion, testing and emissions; automobile engineering — transmission, chassis, electricals and modern systems; and renewable energy — solar, wind, biomass, geothermal and storage with hybrid systems. The mechanical and electrical coverage and every assessment scope are merged in.',
    sources: ['University energy & automotive curricula — all branches + assessment scopes, merged'],
    chapters: ['me-e-powerplant', 'me-e-ice', 'me-e-automobile', 'ee-e-energy'],
  },
  {
    id: 'mechanics-complete', subjectId: 'mechanics-graphics', exportPrefix: 'MECH_GRAPHICS', accent: '#9333ea',
    title: 'Engineering Mechanics & Graphics — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Forces, motion and the drawings that describe them: engineering mechanics — statics of particles and rigid bodies, friction, trusses, dynamics, kinematics and kinetics; engineering graphics — projection systems, orthographic views, sections, development and pictorials; and machine drawing — threads and fasteners, keys, couplings, joints, bearings and assemblies with limits and fits. Every branch’s curriculum and assessment scope is folded in.',
    sources: ['University mechanics & graphics curricula — all branches + assessment scopes, merged'],
    chapters: ['me-e-mechanics', 'me-e-graphics', 'me-e-machine-drawing'],
  },
  {
    id: 'solids-complete', subjectId: 'solids-materials', exportPrefix: 'SOLIDS', accent: '#57534e',
    title: 'Mechanics of Solids & Materials — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'How materials carry load and what they are made of: strength of materials — stress and strain, torsion, bending and shear, deflection, columns and strain energy; and materials science — crystal structure and defects, phase diagrams and transformations, heat treatment, ferrous and non-ferrous alloys, composites and smart materials. Every branch’s curriculum and assessment scope is merged in.',
    sources: ['University solids & materials curricula — all branches + assessment scopes, merged'],
    chapters: ['me-e-strength', 'me-e-materials'],
  },
  {
    id: 'design-complete', subjectId: 'machines-design', exportPrefix: 'MACH_DESIGN', accent: '#b45309',
    title: 'Theory of Machines & Machine Design — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Mechanisms into machines: kinematics of links, cams and followers, gears and gear trains; velocity and acceleration analysis, friction and belt drives; dynamics of machines — balancing, vibration analysis and critical speeds, governors and flywheels; and machine design — materials and stresses, threaded fasteners, shafts and keys, couplings, springs, bearings, welded and riveted joints, spur and helical gears with fatigue considerations. Every assessment scope is folded in.',
    sources: ['University machines & design curricula — all branches + assessment scopes, merged'],
    chapters: ['me-e-tom1', 'me-e-tom2', 'me-e-design'],
  },
  {
    id: 'thermal-complete', subjectId: 'thermal-fluids', exportPrefix: 'THERMAL', accent: '#dc2626',
    title: 'Thermal & Fluid Sciences — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Heat, work and flow in one track: applied thermodynamics — laws, processes, cycles, gas and vapour power, refrigeration psychrometry; fluid mechanics — statics, kinematics, dynamics with Bernoulli and momentum, viscous flow, boundary layers, turbomachinery and hydraulic machines; heat and mass transfer — conduction, convection, radiation and exchangers; and refrigeration and air conditioning — vapour-compression and absorption systems, components and load estimation. Every branch’s curriculum and assessment scope is merged in.',
    sources: ['University thermal & fluids curricula — all branches + assessment scopes, merged'],
    chapters: ['me-e-thermo', 'me-e-fluids', 'me-e-heat', 'me-e-fluid-mach', 'me-e-rac'],
  },
  {
    id: 'manufacturing-complete', subjectId: 'manufacturing-industrial', exportPrefix: 'MANUFACTURING', accent: '#334155',
    title: 'Manufacturing & Industrial Systems — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Make it, measure it, manage it: manufacturing processes — casting, welding, forming and machining with CNC; metrology and quality control — measurement standards, comparators, gauges, statistical quality control and acceptance sampling; CAD/CAM and automation — geometric modelling, NC part programming, robotics in manufacturing, FMS and CIM; and industrial engineering — operations research from linear programming through queuing, production planning and control, inventory and plant layout. Every assessment scope is folded in.',
    sources: ['University manufacturing & industrial curricula — all branches + assessment scopes, merged'],
    chapters: ['me-e-mfg1', 'me-e-mfg2', 'me-e-metrology', 'me-e-cadcam', 'me-e-industrial'],
  },
  {
    id: 'mechatronics-complete', subjectId: 'mechatronics-robotics', exportPrefix: 'MECHATRONICS', accent: '#0891b2',
    title: 'Mechatronics & Robotics — The Complete Track',
    author: 'StudyVerse Curriculum Team',
    description: 'Where machines think: mechatronics — sensors and transducers, actuators, signal conditioning and microcontroller interfacing, system modeling, design and simulation with case studies; and robotics — manipulator kinematics and dynamics, trajectory planning, control, sensors, end effectors and mobile robotics with applications. Every branch’s curriculum and assessment scope is merged in.',
    sources: ['University mechatronics & robotics curricula — all branches + assessment scopes, merged'],
    chapters: ['me-e-mechatronics', 'me-e-robotics'],
  },
]

// ----------------------------------------------------------- sanity checks
const branchChapterIds = LIBRARY_CHAPTERS.filter((c) => OLD_BRANCH_BOOKS.includes(c.bookId)).map((c) => c.id)
const routed: string[] = NEW_BOOKS.flatMap((b) => b.chapters)
const routedSet = new Set(routed)
const dupes = routed.filter((id, i) => routed.indexOf(id) !== i)
const missing = branchChapterIds.filter((id) => !routedSet.has(id))
const unknown = routed.filter((id) => !branchChapterIds.includes(id))
if (dupes.length) { console.error('DUPLICATE ROUTES:', dupes); process.exit(1) }
if (missing.length) { console.error('UNROUTED CHAPTERS:', missing); process.exit(1) }
if (unknown.length) { console.error('UNKNOWN CHAPTERS IN ROUTES:', unknown); process.exit(1) }
if (routed.length !== branchChapterIds.length) { console.error(`COUNT MISMATCH routed=${routed.length} branch=${branchChapterIds.length}`); process.exit(1) }
const newSubjectIds = new Set(NEW_SUBJECTS.map((s) => s.id))
for (const b of NEW_BOOKS) if (!newSubjectIds.has(b.subjectId)) { console.error(`book ${b.id} bad subject`); process.exit(1) }
console.log(`routing OK: ${routed.length} branch chapters → ${NEW_BOOKS.length} new books / ${NEW_SUBJECTS.length} new subjects`)

// ------------------------------------------------------------- serialization
const chapterLine = (c: ChapterMeta) =>
  `  { id: ${q(c.id)}, bookId: ${q(c.bookId)}, number: ${c.number}, title: ${q(c.title)}, shortTitle: ${q(c.shortTitle)}, description: ${q(c.description)}, icon: ${q(c.icon)}, pages: ${q(c.pages)}, interactiveKey: ${q(c.interactiveKey)} },`
const sectionLine = (s: SectionMeta) =>
  `  { id: ${q(s.id)}, chapterId: ${q(s.chapterId)}, number: ${s.number}, title: ${q(s.title)}, description: ${q(s.description)} },`

const chapterById = new Map(LIBRARY_CHAPTERS.map((c) => [c.id, c] as const))
const sectionsByChapter = new Map<string, SectionMeta[]>()
for (const s of LIBRARY_SECTIONS) {
  if (!sectionsByChapter.has(s.chapterId)) sectionsByChapter.set(s.chapterId, [])
  sectionsByChapter.get(s.chapterId)!.push(s)
}

// --------------------------------------------------------------- emit files
const subjectsDir = 'src/data/library-parts/subjects'
rmSync(subjectsDir, { recursive: true, force: true })
mkdirSync(subjectsDir, { recursive: true })

for (const book of NEW_BOOKS) {
  const subject = NEW_SUBJECTS.find((s) => s.id === book.subjectId)!
  const chapters: ChapterMeta[] = book.chapters.map((id, i) => {
    const c = { ...chapterById.get(id)! }
    c.bookId = book.id
    c.number = i + 1
    return c
  })
  const sections = chapters.flatMap((c) => sectionsByChapter.get(c.id) ?? [])
  const sectionsCount = sections.length
  const pages = Math.max(chapters.length, Math.round((sectionsCount * 6) / 10) * 10)

  const header = `// ============================================================================
// ${subject.name} — subject-wise track (${chapters.length} chapters, ${sectionsCount} sections)
// Generated by scripts/subject-wise.ts. Chapters consolidated from every
// branch curriculum + competitive-exam scopes (exam provenance documented in
// code comments and research/*.md only — product rule: no exam names in UI).
// ============================================================================`
  const body = `import type { ChapterMeta, SectionMeta } from '../../library'

export const ${book.exportPrefix}_CHAPTERS: ChapterMeta[] = [
${chapters.map(chapterLine).join('\n')}
]

export const ${book.exportPrefix}_SECTIONS: SectionMeta[] = [
${sections.map(sectionLine).join('\n')}
]
`
  writeFileSync(`${subjectsDir}/${subject.id}.ts`, `${header}\n${body}`)
  console.log(`wrote subjects/${subject.id}.ts — ${chapters.length} ch / ${sectionsCount} s`)
}

// ------------------------------------------------- rewrite library.ts header
const scienceImports = `import { MATH_CHAPTERS, MATH_SECTIONS } from './library-parts/merged/math'
import { PHYS_CHAPTERS, PHYS_SECTIONS } from './library-parts/merged/physics'
import { CHEM_CHAPTERS, CHEM_SECTIONS } from './library-parts/merged/chemistry'
import { ENGLISH_CHAPTERS, ENGLISH_SECTIONS } from './library-parts/merged/english'
import { APT_CHAPTERS, APT_SECTIONS } from './library-parts/merged/aptitude'`

const newImports = NEW_BOOKS.map(
  (b) => `import { ${b.exportPrefix}_CHAPTERS, ${b.exportPrefix}_SECTIONS } from './library-parts/subjects/${b.subjectId}'`
).join('\n')

const subjectLine = (s: {
  id: string; name: string; slug: string; description: string; icon: string; accent: string; tagline: string; group?: string
}) => {
  const group = s.group ? `    group: ${q(s.group)},\n` : ''
  return `  {
    id: ${q(s.id)},
    name: ${q(s.name)},
    slug: ${q(s.slug)},
    description: ${q(s.description)},
    icon: ${q(s.icon)},
    accent: ${q(s.accent)},
    tagline: ${q(s.tagline)},
${group}  },`
}

// the 5 science subjects keep their definitions but gain a group
const scienceSubjects = LIBRARY_SUBJECTS.filter((s) => !['cse-engg', 'ece-engg', 'electrical-engineering', 'mechanical-engineering'].includes(s.id))
  .map((s) => subjectLine({ ...s, group: G1 }))

const allSubjects = [...scienceSubjects, ...NEW_SUBJECTS.map((s) => subjectLine(s))].join('\n')

const bookLine = (b: BookDef) => {
  const chapters = b.chapters.length
  const sections = b.chapters.flatMap((id) => sectionsByChapter.get(id) ?? []).length
  const pages = Math.max(chapters, Math.round((sections * 6) / 10) * 10)
  const sources = b.sources
    ? `    sources: [\n${b.sources.map((s) => `      ${q(s)},`).join('\n')}\n    ],\n`
    : ''
  return `  {
    id: ${q(b.id)},
    subjectId: ${q(b.subjectId)},
    title: ${q(b.title)},
    author: ${q(b.author)},
    edition: '2026 Edition',
    year: '2026',
    description: ${q(b.description)},
    pages: ${pages},
    accent: ${q(b.accent)},
${sources}  },`
}

const newBooksStr = NEW_BOOKS.map(bookLine).join('\n')

const chapterSpread = `export const LIBRARY_CHAPTERS: ChapterMeta[] = [
  ...MATH_CHAPTERS,
  ...PHYS_CHAPTERS,
  ...CHEM_CHAPTERS,
  ...ENGLISH_CHAPTERS,
  ...APT_CHAPTERS,
${NEW_BOOKS.map((b) => `  ...${b.exportPrefix}_CHAPTERS,`).join('\n')}
]`

const sectionSpread = `export const LIBRARY_SECTIONS: SectionMeta[] = [
  ...MATH_SECTIONS,
  ...PHYS_SECTIONS,
  ...CHEM_SECTIONS,
  ...ENGLISH_SECTIONS,
  ...APT_SECTIONS,
${NEW_BOOKS.map((b) => `  ...${b.exportPrefix}_SECTIONS,`).join('\n')}
]`

// keep the existing science book definitions verbatim from current library.ts
const currentSrc = await Bun.file('src/data/library.ts').text()
const bookArrayMatch = currentSrc.match(/export const LIBRARY_BOOKS: BookMeta\[\] = \[([\s\S]*?)\n\]\n/)
if (!bookArrayMatch) { console.error('could not extract LIBRARY_BOOKS from current library.ts'); process.exit(1) }
const scienceBooksBlock = bookArrayMatch[1]
  .split(/\n  \{\n/)
  .filter((chunk) => chunk.trim().length > 0)
  .map((chunk) => '  {\n' + chunk)
  .filter((chunk) => !OLD_BRANCH_BOOKS.some((bid) => chunk.includes(`id: ${q(bid)}`)))
  .map((chunk) => chunk.replace(/\n  \},?$/, (m) => m))
  .join('\n')
if (scienceBooksBlock.includes('cse-complete')) { console.error('science book extraction failed — branch book still present'); process.exit(1) }

const libraryTs = `// ============ Core type system for the StudyVerse platform ============
//
// SUBJECT-WISE LIBRARY — every subject is a course-level discipline and
// contains ALL branches' chapters and every competitive-exam scope for that
// course (the Mathematics model, applied to everything). Provenance (code
// comment only — exam names intentionally absent from user-visible text per
// product decision; see research/*.md): chapters researched from official
// competitive-exam and university syllabi plus the classic textbooks (Rosen,
// Stewart, Halliday, Young, Ewen, Coletta, Feynman, Silberschatz, Mano,
// CLRS, Stroustrup, Horstmann, Flanagan, Hughes, Nilsson).

${scienceImports}
${newImports}

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
  body: string // flowing prose; **bold**, $...$/$$...$$ KaTeX, \`code\`
}

export interface DepthTier {
  tier: 'masters' | 'phd'
  title: string
  blocks: DepthBlock[]
}

/** A textbook figure — an authored inline SVG set into the reading flow,
 *  like a figure plate in a printed book. \`svg\` is static authored data
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
  formula?: string // KaTeX formula, e.g. "$$\\\\Delta p_x = 2mv_x$$"
  explanation: string // pedagogical rationale for this step
}

export interface DetailedDerivation {
  title: string
  statement: string // target formula or law to derive, e.g. "Derivation of Kinetic Pressure $P = \\\\frac{1}{3}nm\\\\langle v^2\\\\rangle$"
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
${allSubjects}
]

export const LIBRARY_BOOKS: BookMeta[] = [
${scienceBooksBlock}
${newBooksStr}
]

${chapterSpread}

${sectionSpread}

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
  return LIBRARY_SECTIONSS_PLACEHOLDER.find((s) => s.id === sectionId)
}
`

const finalTs = libraryTs.replace('LIBRARY_SECTIONSS_PLACEHOLDER', 'LIBRARY_SECTIONS')
await Bun.write('src/data/library.ts', finalTs)

// delete the dissolved branch files
for (const f of ['cse', 'ece', 'ee', 'me']) {
  rmSync(`src/data/library-parts/merged/${f}.ts`, { force: true })
  console.log(`deleted merged/${f}.ts`)
}

console.log(`\nDONE: ${NEW_SUBJECTS.length} new subjects + 5 science = ${NEW_SUBJECTS.length + 5} subjects, ${NEW_BOOKS.length + 5} books`)
console.log(`chapters: ${LIBRARY_CHAPTERS.length} (unchanged) · sections: ${LIBRARY_SECTIONS.length} (unchanged)`)

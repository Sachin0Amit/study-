// ============================================================================
// DRDO Scientist 'B' — Tier-II Computer Science & Engineering discipline
// (bookId 'drdo-cse'). Chapter/section metadata transcribed from the official
// DRDO RAC descriptive-syllabus topic lists (RAC advertisement written-exam
// syllabus, UPSC ESE-Mains style, documented for Advt 140 and reproduced by
// Testbook/Adda247/Embibe — see research/sat-drdo-syllabus.md §2.1).
// Paper 1 → Areas 1–6 (chapters 1–6); Paper 2 → Areas 1–7 (chapters 7–13).
// Research Aptitude (15-mark Section B) lives in the Tier-I book, not here.
// ============================================================================
import type { ChapterMeta, SectionMeta } from '../../library'

export const DRDO_CSE_CHAPTERS: ChapterMeta[] = [
  { id: 'drdo-cse-a1', bookId: 'drdo-cse', number: 1, title: 'Engineering Mathematics', shortTitle: 'Engineering Maths', description: 'Linear algebra, calculus, probability and information theory in the depth DRDO expects — matrices and eigen-systems, vector calculus, random variables and Shannon entropy for signal and crypto work.', icon: 'sigma', pages: 'Paper 1 · Area 1', interactiveKey: 'probability-lab' },
  { id: 'drdo-cse-a2', bookId: 'drdo-cse', number: 2, title: 'Discrete Mathematics', shortTitle: 'Discrete Maths', description: 'Propositional and first-order logic, sets, relations, lattices, groups, graph theory and combinatorics — the discrete backbone of algorithm design and hardware verification.', icon: 'brain', pages: 'Paper 1 · Area 2', interactiveKey: 'graph-playground' },
  { id: 'drdo-cse-a3', bookId: 'drdo-cse', number: 3, title: 'Digital Logic', shortTitle: 'Digital Logic', description: 'Boolean algebra, minimization, combinational and sequential circuits and fixed/floating-point arithmetic — the gate-level foundation of DRDO avionics and mission processors.', icon: 'binary', pages: 'Paper 1 · Area 3', interactiveKey: 'logic-gates' },
  { id: 'drdo-cse-a4', bookId: 'drdo-cse', number: 4, title: 'Computer Organization & Architecture', shortTitle: 'Comp Org & Arch', description: 'Machine instructions, datapaths, pipelining, memory hierarchy and I/O modes — how the computers inside DRDO missiles, radars and C4I systems are organized.', icon: 'cpu', pages: 'Paper 1 · Area 4', interactiveKey: 'os-anatomy' },
  { id: 'drdo-cse-a5', bookId: 'drdo-cse', number: 5, title: 'Programming & Data Structures', shortTitle: 'Prog & Data Structs', description: 'C programming with memory management and recursion, the core linear and hierarchical data structures, and object-oriented programming basics.', icon: 'code', pages: 'Paper 1 · Area 5', interactiveKey: 'tree-traversal' },
  { id: 'drdo-cse-a6', bookId: 'drdo-cse', number: 6, title: 'Algorithms', shortTitle: 'Algorithms', description: 'Asymptotic analysis, searching, sorting, hashing and the classic design techniques — greedy, dynamic programming, divide-and-conquer — with graph algorithms for routing and planning problems.', icon: 'trending', pages: 'Paper 1 · Area 6', interactiveKey: 'sorting-visualizer' },
  { id: 'drdo-cse-a7', bookId: 'drdo-cse', number: 7, title: 'Compiler Design', shortTitle: 'Compiler Design', description: 'Lexical analysis, parsing, syntax-directed translation, runtime environments and intermediate code generation — how DRDO toolchains turn source into machine code.', icon: 'layers', pages: 'Paper 2 · Area 1', interactiveKey: 'js-playground' },
  { id: 'drdo-cse-a8', bookId: 'drdo-cse', number: 8, title: 'Theory of Computation', shortTitle: 'Theory of Computation', description: 'Regular languages, context-free grammars, pushdown automata, Turing machines and undecidability — the formal-limits theory behind DRDO verification and language tools.', icon: 'infinity', pages: 'Paper 2 · Area 2', interactiveKey: 'fsm-simulator' },
  { id: 'drdo-cse-a9', bookId: 'drdo-cse', number: 9, title: 'Operating Systems', shortTitle: 'Operating Systems', description: 'Processes and threads, synchronization, deadlocks, scheduling, virtual memory and file systems, plus hypervisors and secure-OS concepts for DRDO mission-critical computing.', icon: 'memory-stick', pages: 'Paper 2 · Area 3', interactiveKey: 'cpu-scheduler' },
  { id: 'drdo-cse-a10', bookId: 'drdo-cse', number: 10, title: 'Databases', shortTitle: 'Databases', description: 'ER and relational modelling, SQL, integrity constraints, normal forms, B/B+ tree indexing and transaction management — the data layer of DRDO logistics and command systems.', icon: 'database', pages: 'Paper 2 · Area 4', interactiveKey: 'js-playground' },
  { id: 'drdo-cse-a11', bookId: 'drdo-cse', number: 11, title: 'Computer Networks', shortTitle: 'Computer Networks', description: 'Layering and the OSI model, Ethernet LANs, IPv4/IPv6 routing, TCP/UDP with congestion control and the classic application protocols behind DRDO tactical networks.', icon: 'network', pages: 'Paper 2 · Area 5', interactiveKey: 'graph-playground' },
  { id: 'drdo-cse-a12', bookId: 'drdo-cse', number: 12, title: 'Cybersecurity', shortTitle: 'Cybersecurity', description: 'Cryptography, Kerberos, secure protocols, firewalls, intrusion detection and the anatomy of attacks — protecting DRDO networks, IoT and cloud systems from threats and malware.', icon: 'lock', pages: 'Paper 2 · Area 6', interactiveKey: 'js-playground' },
  { id: 'drdo-cse-a13', bookId: 'drdo-cse', number: 13, title: 'AI & Machine Learning', shortTitle: 'AI & Machine Learning', description: 'Classification, clustering, dimensionality reduction, regression and neural networks with deep learning — the techniques behind DRDO target recognition and autonomous systems.', icon: 'bot', pages: 'Paper 2 · Area 7', interactiveKey: 'js-playground' },
]

export const DRDO_CSE_SECTIONS: SectionMeta[] = [
  // ---- Chapter 1 · Engineering Mathematics ----
  { id: 'drdo-cse-a1-s1', chapterId: 'drdo-cse-a1', number: 1.1, title: 'Linear Algebra & Transforms', description: 'Matrices, determinants and systems of linear equations; eigenvalues and eigenvectors, LU decomposition, orthonormal bases; Fourier, DCT and wavelet transforms.' },
  { id: 'drdo-cse-a1-s2', chapterId: 'drdo-cse-a1', number: 1.2, title: 'Calculus & Vector Calculus', description: 'Limits, continuity, differentiability, maxima and minima, mean value theorem and integration; gradient, divergence, curl and the integral theorems of vector calculus.' },
  { id: 'drdo-cse-a1-s3', chapterId: 'drdo-cse-a1', number: 1.3, title: 'Probability & Distributions', description: 'Random variables; uniform, normal, exponential, Poisson and binomial distributions; mean, median, mode and standard deviation; conditional probability and Bayes theorem.' },
  { id: 'drdo-cse-a1-s4', chapterId: 'drdo-cse-a1', number: 1.4, title: 'Information Theory', description: 'Shannon entropy, information and conditional information — the mathematical basis of DRDO compression, cryptography and communication-system analysis.' },
  // ---- Chapter 2 · Discrete Mathematics ----
  { id: 'drdo-cse-a2-s1', chapterId: 'drdo-cse-a2', number: 2.1, title: 'Propositional & First-Order Logic', description: 'Propositional and first-order logic — well-formed formulas, validity, equivalences and inference.' },
  { id: 'drdo-cse-a2-s2', chapterId: 'drdo-cse-a2', number: 2.2, title: 'Sets, Relations & Algebraic Structures', description: 'Sets, relations and functions; partial orders and lattices; groups and their elementary properties.' },
  { id: 'drdo-cse-a2-s3', chapterId: 'drdo-cse-a2', number: 2.3, title: 'Graph Theory', description: 'Graph connectivity, matching and colouring — models for network design and dependency analysis.' },
  { id: 'drdo-cse-a2-s4', chapterId: 'drdo-cse-a2', number: 2.4, title: 'Combinatorics & Recurrence Relations', description: 'Counting techniques, recurrence relations and generating functions for algorithmic analysis.' },
  // ---- Chapter 3 · Digital Logic ----
  { id: 'drdo-cse-a3-s1', chapterId: 'drdo-cse-a3', number: 3.1, title: 'Boolean Algebra & Minimization', description: 'Boolean algebra and the minimization of switching functions.' },
  { id: 'drdo-cse-a3-s2', chapterId: 'drdo-cse-a3', number: 3.2, title: 'Combinational Circuits', description: 'Analysis and design of combinational circuits for arithmetic, selection and coding tasks.' },
  { id: 'drdo-cse-a3-s3', chapterId: 'drdo-cse-a3', number: 3.3, title: 'Sequential Circuits', description: 'Latches, flip-flops, counters and registers — clocked sequential circuit design.' },
  { id: 'drdo-cse-a3-s4', chapterId: 'drdo-cse-a3', number: 3.4, title: 'Number Representation & Computer Arithmetic', description: 'Number representation and computer arithmetic in fixed and floating point.' },
  // ---- Chapter 4 · Computer Organization & Architecture ----
  { id: 'drdo-cse-a4-s1', chapterId: 'drdo-cse-a4', number: 4.1, title: 'Machine Instructions & Addressing Modes', description: 'Machine instructions, addressing modes and assembly-language programming.' },
  { id: 'drdo-cse-a4-s2', chapterId: 'drdo-cse-a4', number: 4.2, title: 'ALU, Datapath & Control Unit', description: 'Arithmetic-logic unit operation, data path design and control unit organization.' },
  { id: 'drdo-cse-a4-s3', chapterId: 'drdo-cse-a4', number: 4.3, title: 'Instruction Pipelining & Parallel Architectures', description: 'Instruction pipelining and its hazards; RISC, CISC and parallel processor architectures.' },
  { id: 'drdo-cse-a4-s4', chapterId: 'drdo-cse-a4', number: 4.4, title: 'Memory Hierarchy', description: 'Cache, main memory and secondary storage levels of the memory hierarchy.' },
  { id: 'drdo-cse-a4-s5', chapterId: 'drdo-cse-a4', number: 4.5, title: 'I/O Interface: Interrupts & DMA', description: 'Input-output organization with interrupt and DMA modes of transfer.' },
  // ---- Chapter 5 · Programming & Data Structures ----
  { id: 'drdo-cse-a5-s1', chapterId: 'drdo-cse-a5', number: 5.1, title: 'Programming in C', description: 'Functions, structures, memory management and recursion in C.' },
  { id: 'drdo-cse-a5-s2', chapterId: 'drdo-cse-a5', number: 5.2, title: 'Linear Data Structures', description: 'Arrays, stacks, queues and linked lists — representations, operations and applications.' },
  { id: 'drdo-cse-a5-s3', chapterId: 'drdo-cse-a5', number: 5.3, title: 'Trees, Heaps & Graphs', description: 'Trees, binary search trees, binary heaps and graph structures as data organizations.' },
  { id: 'drdo-cse-a5-s4', chapterId: 'drdo-cse-a5', number: 5.4, title: 'Object-Oriented Programming Basics', description: 'Classes, objects, inheritance and polymorphism fundamentals.' },
  // ---- Chapter 6 · Algorithms ----
  { id: 'drdo-cse-a6-s1', chapterId: 'drdo-cse-a6', number: 6.1, title: 'Asymptotic Analysis', description: 'Worst-case time and space complexity of algorithms with asymptotic notation.' },
  { id: 'drdo-cse-a6-s2', chapterId: 'drdo-cse-a6', number: 6.2, title: 'Searching, Sorting & Hashing', description: 'Searching algorithms, comparison-based sorts and hashing techniques.' },
  { id: 'drdo-cse-a6-s3', chapterId: 'drdo-cse-a6', number: 6.3, title: 'Design Techniques', description: 'Greedy, dynamic programming and divide-and-conquer strategies applied to classic problems.' },
  { id: 'drdo-cse-a6-s4', chapterId: 'drdo-cse-a6', number: 6.4, title: 'Graph Algorithms', description: 'Graph search, minimum spanning trees and shortest-path algorithms.' },
  // ---- Chapter 7 · Compiler Design ----
  { id: 'drdo-cse-a7-s1', chapterId: 'drdo-cse-a7', number: 7.1, title: 'Lexical Analysis', description: 'Specification of tokens, regular expressions and lexical-analyzer construction.' },
  { id: 'drdo-cse-a7-s2', chapterId: 'drdo-cse-a7', number: 7.2, title: 'Parsing', description: 'Context-free grammars and top-down and bottom-up parsing techniques.' },
  { id: 'drdo-cse-a7-s3', chapterId: 'drdo-cse-a7', number: 7.3, title: 'Syntax-Directed Translation', description: 'Attributes and syntax-directed translation schemes for semantic processing.' },
  { id: 'drdo-cse-a7-s4', chapterId: 'drdo-cse-a7', number: 7.4, title: 'Runtime Environments & Intermediate Code', description: 'Runtime storage organization and intermediate code generation.' },
  // ---- Chapter 8 · Theory of Computation ----
  { id: 'drdo-cse-a8-s1', chapterId: 'drdo-cse-a8', number: 8.1, title: 'Regular Languages & Finite Automata', description: 'Regular expressions and finite automata — deterministic and nondeterministic models and their equivalence.' },
  { id: 'drdo-cse-a8-s2', chapterId: 'drdo-cse-a8', number: 8.2, title: 'Context-Free Grammars & Pushdown Automata', description: 'Context-free grammars, derivations and pushdown automata recognition.' },
  { id: 'drdo-cse-a8-s3', chapterId: 'drdo-cse-a8', number: 8.3, title: 'Pumping Lemmas & the Language Hierarchy', description: 'Pumping lemmas for regular and context-free languages; the Chomsky hierarchy and closure properties.' },
  { id: 'drdo-cse-a8-s4', chapterId: 'drdo-cse-a8', number: 8.4, title: 'Turing Machines & Undecidability', description: 'Turing machines, universal computation and undecidable problems.' },
  // ---- Chapter 9 · Operating Systems ----
  { id: 'drdo-cse-a9-s1', chapterId: 'drdo-cse-a9', number: 9.1, title: 'Processes, Threads & IPC', description: 'Processes, threads and inter-process communication services.' },
  { id: 'drdo-cse-a9-s2', chapterId: 'drdo-cse-a9', number: 9.2, title: 'Concurrency, Synchronization & Deadlocks', description: 'Concurrency and synchronization primitives; deadlock prevention, avoidance and detection.' },
  { id: 'drdo-cse-a9-s3', chapterId: 'drdo-cse-a9', number: 9.3, title: 'CPU Scheduling', description: 'CPU scheduling algorithms and their comparative performance.' },
  { id: 'drdo-cse-a9-s4', chapterId: 'drdo-cse-a9', number: 9.4, title: 'Memory Management & Virtual Memory', description: 'Memory management strategies and virtual memory with paging and segmentation.' },
  { id: 'drdo-cse-a9-s5', chapterId: 'drdo-cse-a9', number: 9.5, title: 'File Systems, Hypervisors & Secure OS', description: 'File system organization; virtual machines and hypervisors; secure operating system concepts.' },
  // ---- Chapter 10 · Databases ----
  { id: 'drdo-cse-a10-s1', chapterId: 'drdo-cse-a10', number: 10.1, title: 'ER & Relational Model', description: 'ER modelling, relational algebra, tuple calculus and SQL querying.' },
  { id: 'drdo-cse-a10-s2', chapterId: 'drdo-cse-a10', number: 10.2, title: 'Constraints & Normal Forms', description: 'Integrity constraints, functional dependencies and normal forms for good schema design.' },
  { id: 'drdo-cse-a10-s3', chapterId: 'drdo-cse-a10', number: 10.3, title: 'File Organization & Indexing', description: 'File organization and indexing structures including B and B+ trees.' },
  { id: 'drdo-cse-a10-s4', chapterId: 'drdo-cse-a10', number: 10.4, title: 'Transactions & Concurrency Control', description: 'Transaction properties, schedules and concurrency control protocols.' },
  // ---- Chapter 11 · Computer Networks ----
  { id: 'drdo-cse-a11-s1', chapterId: 'drdo-cse-a11', number: 11.1, title: 'Layering, OSI & LAN Technologies', description: 'Concept of layering, the OSI model and Ethernet LAN technologies.' },
  { id: 'drdo-cse-a11-s2', chapterId: 'drdo-cse-a11', number: 11.2, title: 'Flow & Error Control, Switching', description: 'Flow and error control techniques; circuit and packet switching.' },
  { id: 'drdo-cse-a11-s3', chapterId: 'drdo-cse-a11', number: 11.3, title: 'Network Layer & Routing', description: 'IPv4 and IPv6 addressing, routers and routing algorithms — distance vector and link state.' },
  { id: 'drdo-cse-a11-s4', chapterId: 'drdo-cse-a11', number: 11.4, title: 'Transport Layer: TCP & UDP', description: 'TCP and UDP operation, the socket interface and congestion control.' },
  { id: 'drdo-cse-a11-s5', chapterId: 'drdo-cse-a11', number: 11.5, title: 'Application Protocols & WiFi Basics', description: 'DNS, SMTP, POP, FTP and HTTP; basics of WiFi.' },
  // ---- Chapter 12 · Cybersecurity ----
  { id: 'drdo-cse-a12-s1', chapterId: 'drdo-cse-a12', number: 12.1, title: 'Security Principles & Cryptography', description: 'Cybersecurity principles; public and private key cryptography, hash functions, digital signatures and certificates.' },
  { id: 'drdo-cse-a12-s2', chapterId: 'drdo-cse-a12', number: 12.2, title: 'Authentication & Secure Protocols', description: 'Kerberos and RADIUS authentication; the IPSec, SSH and SSL protocol suites.' },
  { id: 'drdo-cse-a12-s3', chapterId: 'drdo-cse-a12', number: 12.3, title: 'Firewalls & Intrusion Detection', description: 'Firewall architectures and intrusion detection systems for perimeter defence.' },
  { id: 'drdo-cse-a12-s4', chapterId: 'drdo-cse-a12', number: 12.4, title: 'Threats, Malware & Attacks', description: 'Threats, vulnerabilities and malicious software; buffer overflow, DoS, DDoS, SQL injection and web application attacks.' },
  { id: 'drdo-cse-a12-s5', chapterId: 'drdo-cse-a12', number: 12.5, title: 'IoT, Cloud & Blockchain Security', description: 'Security basics for IoT and cloud deployments; blockchain fundamentals.' },
  // ---- Chapter 13 · AI & Machine Learning ----
  { id: 'drdo-cse-a13-s1', chapterId: 'drdo-cse-a13', number: 13.1, title: 'Classification & Clustering', description: 'Supervised classification and unsupervised clustering techniques.' },
  { id: 'drdo-cse-a13-s2', chapterId: 'drdo-cse-a13', number: 13.2, title: 'Dimensionality Reduction & Regression', description: 'PCA and SVD; correlation and regression analysis.' },
  { id: 'drdo-cse-a13-s3', chapterId: 'drdo-cse-a13', number: 13.3, title: 'Learning Process, Search & Decision Trees', description: 'Training and test data, overfitting and underfitting; search methods, ontology and decision trees.' },
  { id: 'drdo-cse-a13-s4', chapterId: 'drdo-cse-a13', number: 13.4, title: 'Neural Networks & Deep Learning', description: 'Activation functions, the multi-layer perceptron, deep learning and applications of artificial neural networks.' },
]

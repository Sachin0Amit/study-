import type { CuratedExam } from './types'

/**
 * India PG / competitive entrance exams — curated official syllabi.
 *
 * Sources: GATE (organised on rotation by IISc/IITs — GATE 2027 by IIT
 * Madras, gate2027.iitm.ac.in), IIM CAT (iimcat.ac.in), NTA CUET (UG)
 * (cuet.nta.nic.in). Weightages appear only where officially published;
 * CAT publishes no syllabus, so its section map follows the official exam
 * pattern plus past papers.
 */

export const INDIA_PG_COMPETITIVE_EXAMS: CuratedExam[] = [
  {
    id: 'gate-cse',
    name: 'GATE CSE',
    fullName: 'Graduate Aptitude Test in Engineering — Computer Science and Information Technology',
    aliases: ['gate cs', 'gate computer science', 'gate cse'],
    region: 'India',
    category: 'PG engineering entrance',
    popularity: 90,
    syllabusVerified: '2026-10-20',
    website: 'https://gate.iitm.ac.in',
    overview: {
      conductor: 'IISc/IITs (rotating)',
      level: 'BTech/BE → M.Tech/PSU recruitment',
      stages: ['Single stage — one paper chosen from 30 subject codes'],
      papers: ['General Aptitude (15 marks)', 'Engineering Mathematics (13 marks)', 'Core CS (72 marks)'],
      duration: '3 h · 65 questions · 100 marks',
      marking: '+1/+2 marks per question; MCQ −1/3 or −2/3 negative, MSQ/NAT no negative',
      negativeMarking: 'MCQ only: −1/3 (1-mark) or −2/3 (2-mark); MSQ and NAT carry none',
      questionTypes: ['MCQ (1 correct)', 'MSQ (multiple correct)', 'NAT (numerical answer)'],
      notes:
        'Paper code CS. The organising institute rotates yearly (IIT Madras for GATE 2027). The GATE score stays valid for 3 years from the result date.',
    },
    sources: [
      { title: 'GATE 2027 — official website, brochure and paper syllabi', url: 'https://gate2027.iitm.ac.in', host: 'iitm.ac.in' },
    ],
    subjects: [
      {
        name: 'General Aptitude',
        mappedSubjectId: 'aptitude',
        weightage: 15,
        units: [
          {
            name: 'Verbal Aptitude',
            topics: [
              { name: 'Grammar', subtopics: ['Tenses, articles, adjectives and prepositions', 'Conjunctions, verb-noun agreement and other parts of speech'] },
              { name: 'Vocabulary', subtopics: ['Words and their meanings in context', 'Idioms and phrases in context'] },
              { name: 'Reading Comprehension', subtopics: ['Reading and comprehension of passages', 'Narrative sequencing'] },
            ],
          },
          {
            name: 'Quantitative Aptitude',
            topics: [
              { name: 'Data Interpretation', subtopics: ['Data graphs: bar graphs, pie charts and other graphs representing data', '2- and 3-dimensional plots, maps and tables'] },
              { name: 'Numerical Computation and Estimation', subtopics: ['Ratios, percentages, powers, exponents and logarithms', 'Permutations and combinations, and series'] },
              { name: 'Numerical Reasoning', subtopics: ['Data analysis', 'Drawing conclusions from numerical data'] },
            ],
          },
        ],
      },
      {
        name: 'Engineering Mathematics',
        mappedSubjectId: 'mathematics',
        weightage: 13,
        units: [
          {
            name: 'Linear Algebra',
            topics: [
              { name: 'Matrices and Determinants', subtopics: ['Matrix algebra', 'Properties of determinants'] },
              { name: 'Systems of Linear Equations', subtopics: ['Solving systems of linear equations', 'LU decomposition'] },
              { name: 'Eigenvalues and Eigenvectors', subtopics: ['Characteristic equation', 'Computing eigenvalues and eigenvectors'] },
            ],
          },
          {
            name: 'Calculus',
            topics: [
              { name: 'Limits, Continuity and Differentiability', subtopics: ['Evaluation of limits', 'Continuity and differentiability tests'] },
              { name: 'Maxima, Minima and Mean Value Theorem', subtopics: ['Local and global extrema', 'Applications of the mean value theorem'] },
              { name: 'Integration', subtopics: ['Definite integrals', 'Indefinite integrals'] },
              { name: 'Partial Derivatives and Total Derivative', subtopics: ['Partial differentiation', 'Total derivative'] },
            ],
          },
          {
            name: 'Probability and Statistics',
            topics: [
              { name: 'Random Variables', subtopics: ['Discrete and continuous random variables', 'Expectation and variance'] },
              { name: 'Standard Distributions', subtopics: ['Binomial, Poisson, exponential and normal distributions'] },
              { name: 'Conditional Probability and Bayes Theorem', subtopics: ['Conditional probability', 'Bayes theorem'] },
              { name: 'Sampling and Estimation', subtopics: ['Sampling distributions', 'Estimation'] },
            ],
          },
          {
            name: 'Discrete Mathematics',
            topics: [
              { name: 'Sets, Relations and Functions', subtopics: ['Set operations', 'Equivalence relations and partial orders', 'Functions and their properties'] },
              { name: 'Algebraic Structures', subtopics: ['Lattices and monoids', 'Groups'] },
              { name: 'Graph Theory', subtopics: ['Connectivity', 'Matching and coloring'] },
              { name: 'Combinatorics', subtopics: ['Counting techniques', 'Recurrence relations and generating functions'] },
            ],
          },
        ],
      },
      {
        name: 'Core CS',
        mappedSubjectId: 'dsa',
        weightage: 72,
        units: [
          {
            name: 'Digital Logic',
            topics: [
              { name: 'Number Systems and Computer Arithmetic', subtopics: ['Number representation', 'Fixed-point and floating-point arithmetic'] },
              { name: 'Boolean Algebra and Minimization', subtopics: ['Boolean identities and simplification', 'Minimization using Karnaugh maps'] },
              { name: 'Combinational Circuits', subtopics: ['Arithmetic circuits: adders, subtractors and multipliers', 'Multiplexers, decoders and encoders', 'Comparators and code converters'] },
              { name: 'Sequential Circuits', subtopics: ['Latches and flip-flops', 'Counters and shift registers', 'Finite state machines and their minimization'] },
              { name: 'Programmable Logic Devices', subtopics: ['PLA, PAL and ROM-based implementations'] },
            ],
          },
          {
            name: 'Computer Organization and Architecture',
            topics: [
              { name: 'Machine Instructions and Addressing Modes', subtopics: ['Instruction formats and the instruction cycle', 'Immediate, direct, indirect, register and indexed addressing'] },
              { name: 'ALU, Data-Path and Control Unit', subtopics: ['ALU operations', 'Single-cycle and multi-cycle data-paths', 'Hardwired and microprogrammed control'] },
              { name: 'Instruction Pipelining and Hazards', subtopics: ['Pipeline stages and speedup', 'Data, structural and control hazards', 'Techniques to handle hazards'] },
              { name: 'Memory Hierarchy', subtopics: ['Cache organization and mapping', 'Main memory and secondary storage'] },
              { name: 'I/O Interface', subtopics: ['Interrupt-driven transfer', 'Direct memory access (DMA)'] },
            ],
          },
          {
            name: 'Programming and Data Structures',
            topics: [
              { name: 'Programming in C', subtopics: ['Data types, operators and expressions', 'Control flow and functions', 'Pointers, arrays and dynamic memory allocation'] },
              { name: 'Recursion', subtopics: ['Recursive definitions and base cases', 'Recursion vs iteration'] },
              { name: 'Arrays, Stacks and Queues', subtopics: ['Array representation and manipulation', 'Stack operations and applications', 'Circular and double-ended queues'] },
              { name: 'Linked Lists', subtopics: ['Singly and doubly linked lists', 'Insertion, deletion and traversal'] },
              { name: 'Trees', subtopics: ['Binary trees and their traversals', 'Binary search trees'] },
              { name: 'Binary Heaps', subtopics: ['Min-heaps and max-heaps', 'Insert, delete and heapify operations'] },
              { name: 'Graphs', subtopics: ['Adjacency list and adjacency matrix representations', 'Basic graph terminology'] },
            ],
          },
          {
            name: 'Algorithms',
            topics: [
              { name: 'Asymptotic Analysis', subtopics: ['Big-O, Big-Omega and Big-Theta notation', 'Worst-case time and space complexity'] },
              { name: 'Searching, Sorting and Hashing', subtopics: ['Linear and binary search', 'Merge, quick and heap sort', 'Hash tables and collision resolution'] },
              { name: 'Greedy Algorithms', subtopics: ['Greedy-choice strategy', 'Huffman coding'] },
              { name: 'Divide and Conquer', subtopics: ['Recurrence relations and the Master theorem', 'Classic divide-and-conquer problems'] },
              { name: 'Dynamic Programming', subtopics: ['Overlapping subproblems and optimal substructure', 'Knapsack and longest common subsequence'] },
              { name: 'Graph Algorithms', subtopics: ['BFS and DFS traversals', 'Minimum spanning trees: Prim\'s and Kruskal\'s', 'Single-source shortest paths: Dijkstra and Bellman-Ford'] },
            ],
          },
          {
            name: 'Theory of Computation',
            topics: [
              { name: 'Regular Expressions and Finite Automata', subtopics: ['Regular expressions', 'DFA, NFA and their equivalence', 'State minimization'] },
              { name: 'Context-Free Grammars and Pushdown Automata', subtopics: ['Derivations and parse trees', 'Pushdown automata', 'Ambiguous grammars'] },
              { name: 'Regular and Context-Free Languages', subtopics: ['Closure properties', 'Pumping lemma applications'] },
              { name: 'Turing Machines and Undecidability', subtopics: ['Turing machine model', 'Decidable and undecidable languages'] },
            ],
          },
          {
            name: 'Compiler Design',
            topics: [
              { name: 'Lexical Analysis', subtopics: ['Tokens, patterns and lexemes', 'Scanner implementation via finite automata'] },
              { name: 'Parsing', subtopics: ['Top-down (LL) and bottom-up (LR) parsing', 'Parse conflicts and error recovery'] },
              { name: 'Syntax-Directed Translation', subtopics: ['Syntax-directed definitions', 'Attribute evaluation'] },
              { name: 'Intermediate Code Generation', subtopics: ['Three-address code', 'Quadruples and triples'] },
              { name: 'Run-Time Environments', subtopics: ['Activation records', 'Parameter passing'] },
              { name: 'Local Optimization and Data-Flow Analysis', subtopics: ['Local optimization', 'Constant propagation', 'Liveness analysis'] },
            ],
          },
          {
            name: 'Operating Systems',
            topics: [
              { name: 'Processes and Threads', subtopics: ['Process states and the process control block', 'Threads and multithreading', 'Inter-process communication'] },
              { name: 'Concurrency and Synchronization', subtopics: ['Critical sections and race conditions', 'Semaphores and monitors', 'Classic synchronization problems'] },
              { name: 'Deadlock and Starvation', subtopics: ['Necessary conditions for deadlock', 'Prevention, avoidance, detection and recovery'] },
              { name: 'Scheduling Algorithms', subtopics: ['FCFS, SJF, priority and round-robin scheduling', 'Preemptive vs non-preemptive policies'] },
              { name: 'Memory Management', subtopics: ['Paging and segmentation', 'Virtual memory and page replacement'] },
              { name: 'File Systems, Protection and Security', subtopics: ['File-system implementation', 'Protection mechanisms and security basics'] },
            ],
          },
          {
            name: 'Databases',
            topics: [
              { name: 'ER-Model', subtopics: ['Entities, attributes and relationships', 'ER diagrams and mapping to relational schemas'] },
              { name: 'Relational Model and Languages', subtopics: ['Relational algebra', 'Tuple calculus', 'SQL'] },
              { name: 'Integrity Constraints and Normal Forms', subtopics: ['Keys and integrity constraints', 'Functional dependencies', 'Normal forms up to BCNF'] },
              { name: 'File Organization and Indexing', subtopics: ['Sequential and hashed file organization', 'B and B+ trees'] },
              { name: 'Transactions and Concurrency Control', subtopics: ['ACID properties', 'Serializability and locking', 'Deadlock handling in databases'] },
            ],
          },
          {
            name: 'Computer Networks',
            topics: [
              { name: 'Layering and LAN Technologies', subtopics: ['Concept of layering (OSI and TCP/IP)', 'Ethernet LANs', 'Basics of Wi-Fi'] },
              { name: 'Flow and Error Control, Switching', subtopics: ['Sliding-window flow control', 'Error detection: CRC and checksum', 'Circuit and packet switching'] },
              { name: 'Network Layer', subtopics: ['IPv4 and IPv6 addressing', 'Routing algorithms: distance vector and link state'] },
              { name: 'Transport Layer', subtopics: ['TCP and UDP', 'Sockets', 'Congestion control'] },
              { name: 'Application Layer Protocols', subtopics: ['HTTP, SMTP, POP, FTP and DNS'] },
              { name: 'Network Security', subtopics: ['Authentication and confidentiality', 'Public and private key cryptography', 'Digital signatures, certificates and firewalls'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'gate-ece',
    name: 'GATE ECE',
    fullName: 'Graduate Aptitude Test in Engineering — Electronics and Communication Engineering',
    aliases: ['gate ec', 'gate electronics', 'gate ece'],
    region: 'India',
    category: 'PG engineering entrance',
    popularity: 88,
    syllabusVerified: '2026-10-20',
    website: 'https://gate.iitm.ac.in',
    overview: {
      conductor: 'IISc/IITs (rotating)',
      level: 'BTech/BE → M.Tech/PSU recruitment',
      stages: ['Single stage — one paper chosen from 30 subject codes'],
      papers: ['General Aptitude (15 marks)', 'Subject section (85 marks)'],
      duration: '3 h · 65 questions · 100 marks',
      marking: '+1/+2 marks per question; MCQ −1/3 or −2/3 negative, MSQ/NAT no negative',
      negativeMarking: 'MCQ only: −1/3 (1-mark) or −2/3 (2-mark); MSQ and NAT carry none',
      questionTypes: ['MCQ (1 correct)', 'MSQ (multiple correct)', 'NAT (numerical answer)'],
      notes:
        'Paper code EC. The organising institute rotates yearly (IIT Madras for GATE 2027). The GATE score stays valid for 3 years from the result date.',
    },
    sources: [
      { title: 'GATE 2027 — official website, brochure and paper syllabi', url: 'https://gate2027.iitm.ac.in', host: 'iitm.ac.in' },
    ],
    subjects: [
      {
        name: 'General Aptitude',
        mappedSubjectId: 'aptitude',
        weightage: 15,
        units: [
          {
            name: 'Verbal Aptitude',
            topics: [
              { name: 'Grammar', subtopics: ['Tenses, articles, adjectives and prepositions', 'Conjunctions, verb-noun agreement and other parts of speech'] },
              { name: 'Vocabulary', subtopics: ['Words and their meanings in context', 'Idioms and phrases in context'] },
              { name: 'Reading Comprehension', subtopics: ['Reading and comprehension of passages', 'Narrative sequencing'] },
            ],
          },
          {
            name: 'Quantitative Aptitude',
            topics: [
              { name: 'Data Interpretation', subtopics: ['Data graphs: bar graphs, pie charts and other graphs representing data', '2- and 3-dimensional plots, maps and tables'] },
              { name: 'Numerical Computation and Estimation', subtopics: ['Ratios, percentages, powers, exponents and logarithms', 'Permutations and combinations, and series'] },
              { name: 'Numerical Reasoning', subtopics: ['Data analysis', 'Drawing conclusions from numerical data'] },
            ],
          },
        ],
      },
      {
        name: 'Engineering Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Linear Algebra',
            topics: [
              { name: 'Matrix Algebra', subtopics: ['Matrix operations and inverse', 'Rank of a matrix'] },
              { name: 'Systems of Linear Equations', subtopics: ['Solving systems of linear equations', 'Consistency analysis'] },
              { name: 'Eigenvalues and Eigenvectors', subtopics: ['Characteristic equation', 'Computing eigenvalues and eigenvectors'] },
            ],
          },
          {
            name: 'Calculus',
            topics: [
              { name: 'Mean Value Theorems and Extrema', subtopics: ['Mean value theorems', 'Maxima and minima'] },
              { name: 'Integral Calculus', subtopics: ['Theorems of integral calculus', 'Evaluation of definite and improper integrals'] },
              { name: 'Partial and Directional Derivatives', subtopics: ['Partial derivatives', 'Directional derivatives and vector identities'] },
              { name: 'Multiple Integrals', subtopics: ['Double and triple integrals', 'Line, surface and volume integrals'] },
              { name: 'Vector Calculus Theorems', subtopics: ['Stokes\' theorem', 'Gauss divergence theorem', 'Green\'s theorem'] },
              { name: 'Fourier Series', subtopics: ['Fourier series representation of periodic functions'] },
            ],
          },
          {
            name: 'Differential Equations',
            topics: [
              { name: 'First-Order Equations', subtopics: ['Linear and nonlinear first-order ODEs'] },
              { name: 'Higher-Order Linear ODEs', subtopics: ['Constant-coefficient equations', 'Cauchy\'s and Euler\'s equations'] },
              { name: 'Initial and Boundary Value Problems', subtopics: ['Laplace transform methods', 'Solution of initial and boundary value problems'] },
            ],
          },
          {
            name: 'Probability and Statistics',
            topics: [
              { name: 'Descriptive Statistics', subtopics: ['Mean, median, mode and standard deviation', 'Sampling theorems'] },
              { name: 'Probability', subtopics: ['Conditional probability', 'Bayes theorem'] },
              { name: 'Random Variables and Distributions', subtopics: ['Discrete and continuous random variables', 'Poisson, normal and binomial distributions'] },
              { name: 'Correlation and Regression', subtopics: ['Correlation analysis', 'Linear regression'] },
            ],
          },
          {
            name: 'Numerical Methods',
            topics: [
              { name: 'Nonlinear Equations', subtopics: ['Bisection and Newton-Raphson methods', 'Convergence criteria for iterative methods'] },
              { name: 'Systems of Equations', subtopics: ['Gauss elimination', 'Gauss-Seidel iteration'] },
              { name: 'Numerical Solution of ODEs', subtopics: ['Single-step and multi-step methods', 'Euler and Runge-Kutta methods'] },
            ],
          },
        ],
      },
      {
        name: 'Core ECE',
        mappedSubjectId: 'signals-systems',
        units: [
          {
            name: 'Networks, Signals and Systems',
            topics: [
              { name: 'Circuit Analysis Techniques', subtopics: ['Nodal and mesh analysis', 'Superposition, Thevenin and Norton theorems', 'Maximum power transfer and Wye-Delta transformation'] },
              { name: 'Transient and Steady-State Analysis', subtopics: ['Transient response of RL, RC and RLC circuits', 'Sinusoidal steady-state analysis using phasors', 'Resonance and quality factor'] },
              { name: 'Two-Port Networks', subtopics: ['Z, Y, h and ABCD parameters', 'Interconnection of two-port networks'] },
              { name: 'Continuous-Time Signals and Systems', subtopics: ['LTI systems and convolution', 'Fourier series and Fourier transform', 'Laplace transform'] },
              { name: 'Discrete-Time Signals and Systems', subtopics: ['Difference equations', 'Z-transform, DTFT and DFT', 'Sampling theorem'] },
            ],
          },
          {
            name: 'Electronic Devices',
            topics: [
              { name: 'Semiconductor Physics', subtopics: ['Energy bands in intrinsic and extrinsic silicon', 'Carrier transport: drift and diffusion currents, mobility and resistivity', 'Generation and recombination of carriers'] },
              { name: 'Poisson and Continuity Equations', subtopics: ['Poisson equation', 'Continuity equations'] },
              { name: 'Junction Devices', subtopics: ['p-n junction and Zener diode', 'LED, photodiode and solar cell'] },
              { name: 'Transistor Structures', subtopics: ['BJT', 'MOS capacitor', 'MOSFET'] },
              { name: 'IC Fabrication', subtopics: ['Basics of IC fabrication technology'] },
            ],
          },
          {
            name: 'Analog Circuits',
            topics: [
              { name: 'Diode Circuits', subtopics: ['Clipping and clamping circuits', 'Rectifiers and power supplies'] },
              { name: 'BJT and MOSFET Amplifiers', subtopics: ['Biasing and coupling', 'Small-signal analysis', 'Frequency response'] },
              { name: 'Feedback and Oscillators', subtopics: ['Feedback amplifiers', 'RC, LC and crystal oscillators'] },
              { name: 'Operational Amplifiers', subtopics: ['Op-amp characteristics', 'Inverting and non-inverting amplifiers', 'Summers, differentiators and integrators', 'Active filters and Schmitt triggers'] },
            ],
          },
          {
            name: 'Digital Circuits',
            topics: [
              { name: 'Number Systems and Boolean Algebra', subtopics: ['Number representation', 'Boolean identities and minimization using Karnaugh maps'] },
              { name: 'Combinational Circuits', subtopics: ['Logic gates and their static CMOS implementations', 'Arithmetic circuits, code converters, multiplexers and decoders'] },
              { name: 'Sequential Circuits', subtopics: ['Latches and flip-flops', 'Counters and shift registers', 'Finite state machines'] },
              { name: 'Data Converters', subtopics: ['Sample and hold circuits', 'ADC and DAC architectures'] },
              { name: 'Memories and Programmable Devices', subtopics: ['ROM, SRAM and DRAM', 'Programmable logic devices'] },
            ],
          },
          {
            name: 'Control Systems',
            topics: [
              { name: 'System Representation', subtopics: ['Transfer function and block diagram representation', 'Signal flow graphs'] },
              { name: 'Feedback Principle', subtopics: ['Open-loop and closed-loop systems', 'Effect of feedback on performance'] },
              { name: 'Time-Domain Analysis', subtopics: ['Transient and steady-state analysis of LTI systems', 'Stability using the Routh-Hurwitz criterion'] },
              { name: 'Frequency-Domain Analysis', subtopics: ['Bode plots', 'Nyquist criterion', 'Gain and phase margins'] },
              { name: 'Root Locus and Compensation', subtopics: ['Root loci analysis', 'Lag, lead and lag-lead compensation'] },
              { name: 'State-Space Analysis', subtopics: ['State variable models', 'Solution of state equations of LTI systems'] },
            ],
          },
          {
            name: 'Communications',
            topics: [
              { name: 'Random Processes', subtopics: ['Autocorrelation and power spectral density', 'Gaussian processes'] },
              { name: 'Analog Communications', subtopics: ['Amplitude modulation and demodulation', 'Angle modulation and demodulation', 'Spectra of AM and FM signals', 'Superheterodyne receivers'] },
              { name: 'Information Theory', subtopics: ['Entropy and mutual information', 'Channel capacity theorem'] },
              { name: 'Digital Communications', subtopics: ['PCM and DPCM', 'Digital modulation schemes: ASK, PSK, FSK and QAM', 'Intersymbol interference and matched filter receivers', 'Bandwidth, SNR and BER fundamentals'] },
              { name: 'Error Correction', subtopics: ['Fundamentals of error correction', 'Hamming codes and CRC'] },
              { name: 'Multiple Access', subtopics: ['TDMA, FDMA and CDMA fundamentals'] },
            ],
          },
          {
            name: 'Electromagnetics',
            topics: [
              { name: 'Electrostatics', subtopics: ['Coulomb\'s law and electric fields', 'Gauss\'s law and applications'] },
              { name: 'Maxwell\'s Equations', subtopics: ['Differential and integral forms and their interpretation', 'Boundary conditions'] },
              { name: 'Plane Waves', subtopics: ['Wave equation', 'Propagation in lossless and conducting media', 'Reflection and refraction', 'Polarization'] },
              { name: 'Transmission Lines', subtopics: ['Transmission line equations', 'Characteristic impedance, matching and transformation', 'Smith chart'] },
              { name: 'Waveguides', subtopics: ['Modes and boundary conditions', 'Cut-off frequencies'] },
              { name: 'Antennas', subtopics: ['Dipole and monopole antennas', 'Linear antenna arrays', 'Loop antennas'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'gate-ee',
    name: 'GATE EE',
    fullName: 'Graduate Aptitude Test in Engineering — Electrical Engineering',
    aliases: ['gate electrical', 'gate electrical engineering', 'gate ee'],
    region: 'India',
    category: 'PG engineering entrance',
    popularity: 87,
    syllabusVerified: '2026-10-20',
    website: 'https://gate.iitm.ac.in',
    overview: {
      conductor: 'IISc/IITs (rotating)',
      level: 'BTech/BE → M.Tech/PSU recruitment',
      stages: ['Single stage — one paper chosen from 30 subject codes'],
      papers: ['General Aptitude (15 marks)', 'Subject section (85 marks)'],
      duration: '3 h · 65 questions · 100 marks',
      marking: '+1/+2 marks per question; MCQ −1/3 or −2/3 negative, MSQ/NAT no negative',
      negativeMarking: 'MCQ only: −1/3 (1-mark) or −2/3 (2-mark); MSQ and NAT carry none',
      questionTypes: ['MCQ (1 correct)', 'MSQ (multiple correct)', 'NAT (numerical answer)'],
      notes:
        'Paper code EE. The organising institute rotates yearly (IIT Madras for GATE 2027). The GATE score stays valid for 3 years from the result date.',
    },
    sources: [
      { title: 'GATE 2027 — official website, brochure and paper syllabi', url: 'https://gate2027.iitm.ac.in', host: 'iitm.ac.in' },
    ],
    subjects: [
      {
        name: 'General Aptitude',
        mappedSubjectId: 'aptitude',
        weightage: 15,
        units: [
          {
            name: 'Verbal Aptitude',
            topics: [
              { name: 'Grammar', subtopics: ['Tenses, articles, adjectives and prepositions', 'Conjunctions, verb-noun agreement and other parts of speech'] },
              { name: 'Vocabulary', subtopics: ['Words and their meanings in context', 'Idioms and phrases in context'] },
              { name: 'Reading Comprehension', subtopics: ['Reading and comprehension of passages', 'Narrative sequencing'] },
            ],
          },
          {
            name: 'Quantitative Aptitude',
            topics: [
              { name: 'Data Interpretation', subtopics: ['Data graphs: bar graphs, pie charts and other graphs representing data', '2- and 3-dimensional plots, maps and tables'] },
              { name: 'Numerical Computation and Estimation', subtopics: ['Ratios, percentages, powers, exponents and logarithms', 'Permutations and combinations, and series'] },
              { name: 'Numerical Reasoning', subtopics: ['Data analysis', 'Drawing conclusions from numerical data'] },
            ],
          },
        ],
      },
      {
        name: 'Engineering Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Linear Algebra',
            topics: [
              { name: 'Matrix Algebra', subtopics: ['Matrix operations and inverse', 'Rank of a matrix'] },
              { name: 'Systems of Linear Equations', subtopics: ['Solving systems of linear equations', 'Consistency analysis'] },
              { name: 'Eigenvalues and Eigenvectors', subtopics: ['Characteristic equation', 'Computing eigenvalues and eigenvectors'] },
            ],
          },
          {
            name: 'Calculus',
            topics: [
              { name: 'Mean Value Theorems and Extrema', subtopics: ['Mean value theorems', 'Maxima and minima'] },
              { name: 'Integral Calculus', subtopics: ['Theorems of integral calculus', 'Evaluation of definite and improper integrals'] },
              { name: 'Partial and Directional Derivatives', subtopics: ['Partial derivatives', 'Directional derivatives and vector identities'] },
              { name: 'Multiple Integrals', subtopics: ['Double and triple integrals', 'Line, surface and volume integrals'] },
              { name: 'Vector Calculus Theorems', subtopics: ['Stokes\' theorem', 'Gauss divergence theorem', 'Green\'s theorem'] },
            ],
          },
          {
            name: 'Differential Equations',
            topics: [
              { name: 'First-Order Equations', subtopics: ['Linear and nonlinear first-order ODEs'] },
              { name: 'Higher-Order Linear ODEs', subtopics: ['Constant-coefficient equations', 'Cauchy\'s and Euler\'s equations'] },
              { name: 'Initial and Boundary Value Problems', subtopics: ['Laplace transform methods', 'Solution of initial and boundary value problems'] },
            ],
          },
          {
            name: 'Complex Variables',
            topics: [
              { name: 'Analytic Functions', subtopics: ['Cauchy-Riemann equations', 'Analyticity and singularities'] },
              { name: 'Complex Integration and Series', subtopics: ['Cauchy\'s integral theorem and formula', 'Taylor\'s and Laurent\'s series'] },
            ],
          },
          {
            name: 'Probability and Statistics',
            topics: [
              { name: 'Descriptive Statistics', subtopics: ['Mean, median, mode and standard deviation', 'Sampling theorems'] },
              { name: 'Probability', subtopics: ['Conditional probability', 'Bayes theorem'] },
              { name: 'Random Variables and Distributions', subtopics: ['Discrete and continuous random variables', 'Poisson, normal and binomial distributions'] },
            ],
          },
          {
            name: 'Numerical Methods',
            topics: [
              { name: 'Nonlinear Equations', subtopics: ['Bisection and Newton-Raphson methods', 'Convergence criteria for iterative methods'] },
              { name: 'Systems of Equations', subtopics: ['Gauss elimination', 'Gauss-Seidel iteration'] },
              { name: 'Numerical Solution of ODEs', subtopics: ['Single-step and multi-step methods', 'Euler and Runge-Kutta methods'] },
            ],
          },
          {
            name: 'Transform Theory',
            topics: [
              { name: 'Fourier Transform', subtopics: ['Fourier transform pairs', 'Properties and applications'] },
              { name: 'Laplace Transform', subtopics: ['Transform and inverse transform', 'Solving differential equations'] },
              { name: 'Z-Transform', subtopics: ['Transform and inverse transform', 'Properties'] },
            ],
          },
        ],
      },
      {
        name: 'Core EE',
        mappedSubjectId: 'electric-circuits',
        units: [
          {
            name: 'Electric Circuits and Fields',
            topics: [
              { name: 'Basic Circuit Elements and Laws', subtopics: ['V-I characteristics of R, L and C elements', 'Kirchhoff\'s laws', 'Star-Delta transformation'] },
              { name: 'Network Theorems', subtopics: ['Superposition theorem', 'Thevenin\'s and Norton\'s theorems', 'Maximum power transfer'] },
              { name: 'Transient Analysis', subtopics: ['Transient response of RL, RC and RLC circuits'] },
              { name: 'AC Steady-State Analysis', subtopics: ['Sinusoidal steady-state analysis using phasors', 'Resonance and quality factor', 'Balanced and unbalanced three-phase circuits', 'Active and reactive power'] },
              { name: 'Coupled Circuits and Two-Port Networks', subtopics: ['Magnetic circuits and mutual inductance', 'Two-port network parameters'] },
              { name: 'Electric and Magnetic Fields', subtopics: ['Electrostatic fields', 'Magnetic fields'] },
            ],
          },
          {
            name: 'Signals and Systems',
            topics: [
              { name: 'Signal Representation and Sampling', subtopics: ['Continuous and discrete-time signals', 'Shifting and scaling operations', 'Sampling theorem'] },
              { name: 'LTI Systems', subtopics: ['Impulse response and convolution', 'Linearity, causality and stability'] },
              { name: 'Transforms', subtopics: ['Fourier series and Fourier transform', 'Laplace transform', 'Z-transform', 'DFT and FFT'] },
            ],
          },
          {
            name: 'Electrical Machines',
            topics: [
              { name: 'Transformers', subtopics: ['Single-phase transformer: equivalent circuit, phasor diagram and testing', 'Regulation and efficiency', 'Three-phase transformer connections and vector groups', 'Autotransformers'] },
              { name: 'DC Machines', subtopics: ['Types and characteristics', 'Speed control and starting'] },
              { name: 'Synchronous Machines', subtopics: ['Construction and EMF equation', 'Equivalent circuit and phasor diagram', 'Voltage regulation and synchronous condenser'] },
              { name: 'Induction Motors', subtopics: ['Operating principle and equivalent circuit', 'Torque-slip characteristics', 'Starting and speed control', 'Single-phase induction motors'] },
              { name: 'Special Machines', subtopics: ['Stepper motors', 'Brushless DC motors'] },
            ],
          },
          {
            name: 'Power Systems',
            topics: [
              { name: 'Power Generation', subtopics: ['Hydro, thermal and nuclear plants', 'Economic operation of power systems'] },
              { name: 'Transmission Lines', subtopics: ['Line models and performance', 'Corona', 'HVDC transmission fundamentals'] },
              { name: 'Per-Unit Quantities and Load Flow', subtopics: ['Per-unit representation', 'Load flow: Gauss-Seidel and Newton-Raphson methods'] },
              { name: 'Fault Analysis', subtopics: ['Symmetrical components and three-phase faults', 'Unsymmetrical faults'] },
              { name: 'Circuit Breakers and Protection', subtopics: ['Circuit breaker types and duty', 'Protective relays and schemes'] },
              { name: 'Stability and Transients', subtopics: ['Swing equation and equal area criterion', 'Power system transients'] },
            ],
          },
          {
            name: 'Control Systems',
            topics: [
              { name: 'Modelling of Systems', subtopics: ['Transfer function models', 'Block diagrams and signal flow graphs'] },
              { name: 'Feedback and Time Response', subtopics: ['Feedback principle', 'Transient and steady-state analysis of LTI systems'] },
              { name: 'Stability Analysis', subtopics: ['Routh-Hurwitz criterion', 'Root loci', 'Nyquist criterion and Bode plots'] },
              { name: 'Compensation', subtopics: ['Lag, lead and lag-lead compensation'] },
              { name: 'State Variable Analysis', subtopics: ['State space models', 'Solution of state equations of LTI systems'] },
            ],
          },
          {
            name: 'Electrical and Electronic Measurements',
            topics: [
              { name: 'Measurement of Electrical Quantities', subtopics: ['Voltage, current, power and energy', 'Resistance, inductance, capacitance and frequency'] },
              { name: 'Bridges and Potentiometers', subtopics: ['AC and DC bridges', 'Potentiometers'] },
              { name: 'Indicating Instruments', subtopics: ['Galvanometers', 'Instrument transformers'] },
              { name: 'Digital Instruments', subtopics: ['Digital voltmeters and multimeters', 'Q-meters', 'Oscilloscopes'] },
              { name: 'Transducers', subtopics: ['Measurement of non-electrical quantities', 'Errors in measurements'] },
            ],
          },
          {
            name: 'Analog and Digital Electronics',
            topics: [
              { name: 'Semiconductor Devices and Amplifiers', subtopics: ['Diode, BJT and MOSFET characteristics', 'Amplifier biasing and small-signal analysis', 'Frequency response'] },
              { name: 'Operational Amplifier Circuits', subtopics: ['Op-amp characteristics', 'Amplifier, filter and comparator applications'] },
              { name: 'Digital Logic Circuits', subtopics: ['Combinational circuits: Boolean algebra and Karnaugh maps', 'Sequential circuits: flip-flops, counters and registers'] },
              { name: 'Data Converters', subtopics: ['ADC and DAC basics'] },
              { name: 'Microprocessors and Microcontrollers', subtopics: ['8085 and 8051 architecture', 'Programming and interfacing'] },
            ],
          },
          {
            name: 'Power Electronics',
            topics: [
              { name: 'Power Semiconductor Devices', subtopics: ['Diode, thyristor, triac and GTO', 'MOSFET and IGBT characteristics'] },
              { name: 'Controlled Rectifiers', subtopics: ['Single-phase rectifiers', 'Three-phase rectifiers'] },
              { name: 'DC-DC Converters', subtopics: ['Buck, boost and buck-boost converters', 'Cuk converter'] },
              { name: 'Inverters and AC Controllers', subtopics: ['Voltage-source and current-source inverters', 'AC voltage controllers', 'Cycloconverters'] },
              { name: 'Electric Drives', subtopics: ['DC motor drives', 'Induction motor drives', 'Synchronous motor drives'] },
              { name: 'Applications', subtopics: ['Switched-mode power supplies (SMPS)', 'Uninterruptible power supplies (UPS)'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'gate-mechanical',
    name: 'GATE ME',
    fullName: 'Graduate Aptitude Test in Engineering — Mechanical Engineering',
    aliases: ['gate me', 'gate mechanical', 'gate mech'],
    region: 'India',
    category: 'PG engineering entrance',
    popularity: 88,
    syllabusVerified: '2026-10-20',
    website: 'https://gate.iitm.ac.in',
    overview: {
      conductor: 'IISc/IITs (rotating)',
      level: 'BTech/BE → M.Tech/PSU recruitment',
      stages: ['Single stage — one paper chosen from 30 subject codes'],
      papers: ['General Aptitude (15 marks)', 'Subject section (85 marks)'],
      duration: '3 h · 65 questions · 100 marks',
      marking: '+1/+2 marks per question; MCQ −1/3 or −2/3 negative, MSQ/NAT no negative',
      negativeMarking: 'MCQ only: −1/3 (1-mark) or −2/3 (2-mark); MSQ and NAT carry none',
      questionTypes: ['MCQ (1 correct)', 'MSQ (multiple correct)', 'NAT (numerical answer)'],
      notes:
        'Paper code ME. The organising institute rotates yearly (IIT Madras for GATE 2027). The GATE score stays valid for 3 years from the result date.',
    },
    sources: [
      { title: 'GATE 2027 — official website, brochure and paper syllabi', url: 'https://gate2027.iitm.ac.in', host: 'iitm.ac.in' },
    ],
    subjects: [
      {
        name: 'General Aptitude',
        mappedSubjectId: 'aptitude',
        weightage: 15,
        units: [
          {
            name: 'Verbal Aptitude',
            topics: [
              { name: 'Grammar', subtopics: ['Tenses, articles, adjectives and prepositions', 'Conjunctions, verb-noun agreement and other parts of speech'] },
              { name: 'Vocabulary', subtopics: ['Words and their meanings in context', 'Idioms and phrases in context'] },
              { name: 'Reading Comprehension', subtopics: ['Reading and comprehension of passages', 'Narrative sequencing'] },
            ],
          },
          {
            name: 'Quantitative Aptitude',
            topics: [
              { name: 'Data Interpretation', subtopics: ['Data graphs: bar graphs, pie charts and other graphs representing data', '2- and 3-dimensional plots, maps and tables'] },
              { name: 'Numerical Computation and Estimation', subtopics: ['Ratios, percentages, powers, exponents and logarithms', 'Permutations and combinations, and series'] },
              { name: 'Numerical Reasoning', subtopics: ['Data analysis', 'Drawing conclusions from numerical data'] },
            ],
          },
        ],
      },
      {
        name: 'Engineering Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Linear Algebra',
            topics: [
              { name: 'Matrix Algebra', subtopics: ['Matrix operations and inverse', 'Rank of a matrix'] },
              { name: 'Systems of Linear Equations', subtopics: ['Solving systems of linear equations', 'Consistency analysis'] },
              { name: 'Eigenvalues and Eigenvectors', subtopics: ['Characteristic equation', 'Computing eigenvalues and eigenvectors'] },
            ],
          },
          {
            name: 'Calculus',
            topics: [
              { name: 'Differential Calculus', subtopics: ['Limits, continuity and differentiability', 'Mean value theorems', 'Partial derivatives, maxima and minima'] },
              { name: 'Integral Calculus', subtopics: ['Methods of integration', 'Definite and improper integrals', 'Multiple integrals'] },
              { name: 'Sequences and Series', subtopics: ['Convergence of sequences and series', 'Taylor series expansions'] },
              { name: 'Vector Calculus', subtopics: ['Directional derivatives and vector identities', 'Line, surface and volume integrals', 'Stokes, Gauss and Green theorems'] },
            ],
          },
          {
            name: 'Differential Equations',
            topics: [
              { name: 'Ordinary Differential Equations', subtopics: ['First-order linear and nonlinear equations', 'Higher-order linear ODEs with constant coefficients'] },
              { name: 'Laplace Transforms', subtopics: ['Transforms and inverse transforms', 'Solving ODEs with Laplace transforms'] },
              { name: 'Boundary Value Problems', subtopics: ['Initial and boundary value problems'] },
            ],
          },
          {
            name: 'Complex Variables',
            topics: [
              { name: 'Analytic Functions', subtopics: ['Cauchy-Riemann equations', 'Analyticity and singularities'] },
              { name: 'Complex Integration and Series', subtopics: ['Cauchy\'s integral theorem and formula', 'Taylor\'s and Laurent\'s series'] },
            ],
          },
          {
            name: 'Probability and Statistics',
            topics: [
              { name: 'Probability', subtopics: ['Definitions of probability', 'Conditional probability and Bayes theorem'] },
              { name: 'Distributions', subtopics: ['Binomial, Poisson and normal distributions', 'Mean, median, mode and standard deviation'] },
              { name: 'Regression and Correlation', subtopics: ['Linear regression', 'Correlation and curve fitting'] },
            ],
          },
          {
            name: 'Numerical Methods',
            topics: [
              { name: 'Nonlinear Equations', subtopics: ['Bisection and Newton-Raphson methods', 'Convergence criteria for iterative methods'] },
              { name: 'Systems of Equations', subtopics: ['Gauss elimination', 'Gauss-Seidel iteration'] },
              { name: 'Integration and Differentiation', subtopics: ['Trapezoidal and Simpson\'s rules', 'Numerical differentiation'] },
              { name: 'Numerical Solution of ODEs', subtopics: ['Euler and Runge-Kutta methods', 'Single-step and multi-step methods'] },
            ],
          },
        ],
      },
      {
        name: 'Core ME',
        mappedSubjectId: 'thermal-fluids',
        units: [
          {
            name: 'Engineering Mechanics',
            topics: [
              { name: 'Equilibrium of Rigid Bodies', subtopics: ['Free-body diagrams and equilibrium equations', 'Trusses and frames', 'Virtual work'] },
              { name: 'Kinematics', subtopics: ['Rectilinear and curvilinear motion', 'Plane motion of rigid bodies'] },
              { name: 'Kinetics', subtopics: ['Newton\'s second law for particles and rigid bodies', 'Impulse and momentum (linear and angular)', 'Work and energy formulations', 'Collisions'] },
            ],
          },
          {
            name: 'Mechanics of Materials',
            topics: [
              { name: 'Stress and Strain', subtopics: ['Stress-strain relationships and elastic constants', 'Mohr\'s circle for plane stress and plane strain', 'Thin cylinders', 'Thermal stresses'] },
              { name: 'Shear Force and Bending Moment', subtopics: ['SF and BM diagrams', 'Relations between load, shear and moment'] },
              { name: 'Bending and Shear Stresses', subtopics: ['Bending stress in beams', 'Transverse shear stress distribution'] },
              { name: 'Deflection of Beams', subtopics: ['Standard methods for beam deflection'] },
              { name: 'Torsion', subtopics: ['Torsion of circular shafts'] },
              { name: 'Columns and Energy Methods', subtopics: ['Euler\'s theory of columns', 'Strain energy methods'] },
              { name: 'Material Testing', subtopics: ['Universal testing machine', 'Hardness and impact testing', 'Strain gauges and rosettes'] },
            ],
          },
          {
            name: 'Theory of Machines',
            topics: [
              { name: 'Kinematic Analysis', subtopics: ['Displacement, velocity and acceleration analysis of plane mechanisms', 'Dynamic analysis of slider-crank mechanisms'] },
              { name: 'Cams', subtopics: ['Cam-follower systems and displacement diagrams'] },
              { name: 'Gear Trains', subtopics: ['Simple, compound and epicyclic gear trains'] },
              { name: 'Flywheels and Governors', subtopics: ['Flywheels and fluctuation of energy', 'Governor types and characteristics'] },
              { name: 'Balancing', subtopics: ['Balancing of rotating masses', 'Balancing of reciprocating masses'] },
            ],
          },
          {
            name: 'Vibrations',
            topics: [
              { name: 'Free Vibration', subtopics: ['Undamped single-degree-of-freedom systems', 'Damped free vibration'] },
              { name: 'Forced Vibration', subtopics: ['Harmonic excitation of SDOF systems', 'Vibration isolation and transmissibility', 'Resonance'] },
              { name: 'Critical Speeds', subtopics: ['Critical speeds of shafts'] },
            ],
          },
          {
            name: 'Machine Design',
            topics: [
              { name: 'Design for Static and Dynamic Loading', subtopics: ['Static and fluctuating loads', 'Failure theories', 'Stress concentration'] },
              { name: 'Fatigue', subtopics: ['Fatigue strength and the S-N diagram'] },
              { name: 'Joints', subtopics: ['Bolted, riveted and welded joints'] },
              { name: 'Shafts and Bearings', subtopics: ['Shaft design', 'Rolling and sliding contact bearings'] },
              { name: 'Power Transmission and Machine Elements', subtopics: ['Gears', 'Brakes and clutches', 'Springs'] },
            ],
          },
          {
            name: 'Fluid Mechanics',
            topics: [
              { name: 'Fluid Properties and Statics', subtopics: ['Fluid properties', 'Manometry', 'Buoyancy and forces on submerged bodies', 'Stability of floating bodies'] },
              { name: 'Control-Volume Analysis', subtopics: ['Continuity, momentum and energy equations', 'Fluid acceleration'] },
              { name: 'Differential Analysis and Bernoulli\'s Equation', subtopics: ['Differential equations of continuity and momentum', 'Bernoulli\'s equation and applications'] },
              { name: 'Viscous Flow', subtopics: ['Laminar and turbulent flow', 'Boundary layer', 'Flow through pipes, bends and fittings and head losses'] },
              { name: 'Compressible Flow Basics', subtopics: ['Elementary concepts of compressible flows'] },
            ],
          },
          {
            name: 'Heat Transfer',
            topics: [
              { name: 'Conduction', subtopics: ['One-dimensional conduction and thermal resistance', 'Conduction in cylindrical and spherical systems', 'Unsteady conduction and lumped parameter analysis'] },
              { name: 'Convection', subtopics: ['Thermal boundary layer', 'Dimensionless parameters in free and forced convection', 'Correlations for flat plates and pipe flow', 'Effect of turbulence'] },
              { name: 'Heat Exchangers', subtopics: ['LMTD method', 'NTU-effectiveness method'] },
              { name: 'Radiation', subtopics: ['Stefan-Boltzmann law', 'Wien\'s displacement law', 'Black and grey surfaces', 'Radiation exchange and view factors'] },
            ],
          },
          {
            name: 'Thermodynamics',
            topics: [
              { name: 'Basic Concepts and Pure Substances', subtopics: ['Thermodynamic systems and processes', 'Properties of pure substances', 'Behaviour of ideal and real gases', 'Equations of state'] },
              { name: 'Work, Heat and the First Law', subtopics: ['Work and heat transfer', 'First law for closed and open systems'] },
              { name: 'Second Law and Entropy', subtopics: ['Second law of thermodynamics', 'Entropy', 'Availability and irreversibility'] },
              { name: 'Thermodynamic Relations and Mixtures', subtopics: ['Thermodynamic relations', 'Ideal gas mixtures'] },
            ],
          },
          {
            name: 'Applications',
            topics: [
              { name: 'Power Engineering', subtopics: ['Air and gas compressors', 'Vapour and gas power cycles'] },
              { name: 'IC Engines', subtopics: ['Air-standard Otto, Diesel and dual cycles'] },
              { name: 'Refrigeration and Air-Conditioning', subtopics: ['Vapour refrigeration cycle', 'Heat pumps and gas refrigeration', 'Psychrometry and air-conditioning processes'] },
              { name: 'Turbomachinery', subtopics: ['Impulse and reaction principles', 'Pelton, Francis and Kaplan turbines', 'Steam and gas turbines'] },
            ],
          },
          {
            name: 'Manufacturing Engineering',
            topics: [
              { name: 'Casting', subtopics: ['Casting fundamentals and mold making', 'Common casting defects'] },
              { name: 'Forming', subtopics: ['Fundamentals of metal forming', 'Rolling, forging, extrusion and drawing', 'Sheet metal working: shearing, bending and deep drawing'] },
              { name: 'Machining', subtopics: ['Orthogonal and oblique cutting', 'Tool life and tool wear', 'Machinability and cutting fluids'] },
              { name: 'Non-Traditional Machining', subtopics: ['EDM, ECM and USM', 'Abrasive jet and water jet machining', 'Laser and electron beam machining'] },
              { name: 'CNC Machining', subtopics: ['CNC machine tools', 'Part programming basics'] },
              { name: 'Joining', subtopics: ['Arc, gas and resistance welding', 'Brazing and soldering'] },
              { name: 'Metrology and Inspection', subtopics: ['Limits, fits and tolerances', 'Comparators and gauges', 'Measurement of surface texture'] },
            ],
          },
          {
            name: 'Industrial Engineering',
            topics: [
              { name: 'Process and Production Planning', subtopics: ['Process planning', 'Production planning and control', 'Forecasting and aggregate planning', 'Scheduling and materials requirement planning'] },
              { name: 'Inventory Control', subtopics: ['EOQ models', 'Inventory control systems'] },
              { name: 'Lean and Value Engineering', subtopics: ['Lean manufacturing and just-in-time', 'Value engineering'] },
              { name: 'Work Study and Ergonomics', subtopics: ['Method study', 'Work measurement', 'Ergonomics'] },
              { name: 'Quality Management', subtopics: ['Statistical quality control: control charts and acceptance sampling', 'Total quality management and Six Sigma'] },
              { name: 'Operations Research', subtopics: ['Linear programming', 'Transportation and assignment problems', 'Network analysis: PERT and CPM', 'Simple queuing models'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'gate-civil',
    name: 'GATE CE',
    fullName: 'Graduate Aptitude Test in Engineering — Civil Engineering',
    aliases: ['gate civil', 'gate civil engineering', 'gate ce'],
    region: 'India',
    category: 'PG engineering entrance',
    popularity: 86,
    syllabusVerified: '2026-10-20',
    website: 'https://gate.iitm.ac.in',
    overview: {
      conductor: 'IISc/IITs (rotating)',
      level: 'BTech/BE → M.Tech/PSU recruitment',
      stages: ['Single stage — one paper chosen from 30 subject codes'],
      papers: ['General Aptitude (15 marks)', 'Subject section (85 marks)'],
      duration: '3 h · 65 questions · 100 marks',
      marking: '+1/+2 marks per question; MCQ −1/3 or −2/3 negative, MSQ/NAT no negative',
      negativeMarking: 'MCQ only: −1/3 (1-mark) or −2/3 (2-mark); MSQ and NAT carry none',
      questionTypes: ['MCQ (1 correct)', 'MSQ (multiple correct)', 'NAT (numerical answer)'],
      notes:
        'Paper code CE. The organising institute rotates yearly (IIT Madras for GATE 2027). The GATE score stays valid for 3 years from the result date.',
    },
    sources: [
      { title: 'GATE 2027 — official website, brochure and paper syllabi', url: 'https://gate2027.iitm.ac.in', host: 'iitm.ac.in' },
    ],
    subjects: [
      {
        name: 'General Aptitude',
        mappedSubjectId: 'aptitude',
        weightage: 15,
        units: [
          {
            name: 'Verbal Aptitude',
            topics: [
              { name: 'Grammar', subtopics: ['Tenses, articles, adjectives and prepositions', 'Conjunctions, verb-noun agreement and other parts of speech'] },
              { name: 'Vocabulary', subtopics: ['Words and their meanings in context', 'Idioms and phrases in context'] },
              { name: 'Reading Comprehension', subtopics: ['Reading and comprehension of passages', 'Narrative sequencing'] },
            ],
          },
          {
            name: 'Quantitative Aptitude',
            topics: [
              { name: 'Data Interpretation', subtopics: ['Data graphs: bar graphs, pie charts and other graphs representing data', '2- and 3-dimensional plots, maps and tables'] },
              { name: 'Numerical Computation and Estimation', subtopics: ['Ratios, percentages, powers, exponents and logarithms', 'Permutations and combinations, and series'] },
              { name: 'Numerical Reasoning', subtopics: ['Data analysis', 'Drawing conclusions from numerical data'] },
            ],
          },
        ],
      },
      {
        name: 'Engineering Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Linear Algebra',
            topics: [
              { name: 'Matrix Algebra', subtopics: ['Matrix operations and inverse', 'Rank of a matrix'] },
              { name: 'Systems of Linear Equations', subtopics: ['Solving systems of linear equations', 'Consistency analysis'] },
              { name: 'Eigenvalues and Eigenvectors', subtopics: ['Characteristic equation', 'Computing eigenvalues and eigenvectors'] },
            ],
          },
          {
            name: 'Calculus',
            topics: [
              { name: 'Differential Calculus', subtopics: ['Limits, continuity and differentiability', 'Mean value theorems, local maxima and minima', 'Partial derivatives and total derivative'] },
              { name: 'Integral Calculus', subtopics: ['Definite and improper integrals', 'Double and triple integrals'] },
              { name: 'Sequences, Series and Taylor Expansions', subtopics: ['Convergence of sequences and series', 'Taylor series'] },
              { name: 'Vector Calculus', subtopics: ['Vector identities and directional derivatives', 'Line, surface and volume integrals'] },
            ],
          },
          {
            name: 'Ordinary Differential Equations (ODE)',
            topics: [
              { name: 'First-Order Equations', subtopics: ['Linear and nonlinear first-order ODEs'] },
              { name: 'Higher-Order Linear ODEs', subtopics: ['Constant-coefficient equations', 'Cauchy\'s and Euler\'s equations'] },
              { name: 'Laplace Transforms and Boundary Value Problems', subtopics: ['Laplace transform methods', 'Initial and boundary value problems'] },
            ],
          },
          {
            name: 'Partial Differential Equations (PDE)',
            topics: [
              { name: 'Classification of PDEs', subtopics: ['Classification and order of PDEs'] },
              { name: 'Standard PDE Solutions', subtopics: ['One-dimensional heat equation', 'Wave equation and Laplace equation'] },
            ],
          },
          {
            name: 'Probability and Statistics',
            topics: [
              { name: 'Probability', subtopics: ['Definitions of probability', 'Conditional probability and Bayes theorem'] },
              { name: 'Distributions', subtopics: ['Binomial, Poisson and normal distributions', 'Random variables, mean and standard deviation'] },
              { name: 'Correlation and Regression', subtopics: ['Correlation analysis', 'Linear regression'] },
            ],
          },
          {
            name: 'Numerical Methods',
            topics: [
              { name: 'Nonlinear Equations', subtopics: ['Bisection and Newton-Raphson methods', 'Convergence criteria for iterative methods'] },
              { name: 'Systems of Equations', subtopics: ['Gauss elimination', 'Gauss-Seidel iteration'] },
              { name: 'Integration and ODEs', subtopics: ['Trapezoidal and Simpson\'s rules', 'Euler and Runge-Kutta methods'] },
            ],
          },
        ],
      },
      {
        name: 'Core CE',
        mappedSubjectId: 'mechanics-graphics',
        units: [
          {
            name: 'Structural Engineering',
            topics: [
              { name: 'Mechanics', subtopics: ['System of forces, free-body diagrams and equilibrium equations', 'Internal forces in structures', 'Friction and its applications', 'Centre of mass', 'Free vibrations of undamped single-degree-of-freedom systems'] },
              { name: 'Structural Analysis', subtopics: ['Internal force diagrams for beams and frames', 'Deflections: virtual work and energy methods', 'Influence lines and moving loads', 'Statically indeterminate structures: force and displacement methods', 'Arches and cables', 'Plastic analysis of beams and frames'] },
              { name: 'Concrete Structures', subtopics: ['Working stress and limit state design philosophies', 'Flexural and shear design of beams', 'Slabs, columns and footings', 'Basics of prestressed concrete'] },
              { name: 'Steel Structures', subtopics: ['Tension and compression members', 'Beams and beam-columns', 'Bolted and welded connections', 'Column bases and plate girders'] },
            ],
          },
          {
            name: 'Geotechnical Engineering',
            topics: [
              { name: 'Soil Mechanics', subtopics: ['Index properties and soil classification', 'Compaction of soils', 'Permeability and seepage (flow nets)', 'Effective stress and consolidation', 'Shear strength of soils'] },
              { name: 'Foundation Engineering', subtopics: ['Sub-surface investigations (SPT and CPT)', 'Bearing capacity of shallow foundations', 'Pile foundations', 'Earth pressure theories and retaining walls', 'Stability of slopes'] },
            ],
          },
          {
            name: 'Water Resources Engineering',
            topics: [
              { name: 'Fluid Mechanics and Hydraulics', subtopics: ['Fluid properties, statics and manometry', 'Continuity, momentum and energy equations; Bernoulli\'s equation', 'Laminar and turbulent pipe flow and head losses', 'Open-channel flow: specific energy and hydraulic jump', 'Boundary layer and dimensional analysis', 'Impulse and reaction turbines and pumps'] },
              { name: 'Hydrology', subtopics: ['Hydrologic cycle and precipitation measurement', 'Evaporation, evapotranspiration and infiltration', 'Runoff, hydrographs and the unit hydrograph', 'Flood estimation and frequency analysis'] },
              { name: 'Irrigation', subtopics: ['Water requirement of crops (duty and delta)', 'Design of lined and unlined canals', 'Diversion headworks, canal falls and cross-drainage works', 'Waterlogging and drainage'] },
            ],
          },
          {
            name: 'Environmental Engineering',
            topics: [
              { name: 'Water and Waste Water', subtopics: ['Water quality standards and sampling', 'Water treatment: coagulation, sedimentation, filtration and disinfection', 'Wastewater characteristics (BOD and COD)', 'Primary and secondary wastewater treatment', 'Sewerage systems and sewage disposal'] },
              { name: 'Air Pollution', subtopics: ['Types of pollutants, their sources and impacts', 'Air pollution meteorology and dispersion', 'Air quality standards and control devices'] },
              { name: 'Municipal Solid Wastes', subtopics: ['Characteristics and generation of solid wastes', 'Collection, transport and processing', 'Disposal through sanitary landfills'] },
              { name: 'Noise Pollution', subtopics: ['Impacts and measurement of noise', 'Noise standards and control'] },
            ],
          },
          {
            name: 'Transportation Engineering',
            topics: [
              { name: 'Highway Planning and Alignment', subtopics: ['Highway alignment and geometric design (sight distance and gradients)', 'Cross-section elements and intersections', 'Pavement materials and characterization', 'Flexible and rigid pavement design'] },
              { name: 'Traffic Engineering', subtopics: ['Traffic studies: volume, speed and origin-destination', 'Traffic flow theory and highway capacity', 'Signal design and intersection control', 'Road signs, markings and safety'] },
            ],
          },
          {
            name: 'Geomatics Engineering',
            topics: [
              { name: 'Principles of Surveying and Maps', subtopics: ['Principles of surveying', 'Maps and map projections', 'Errors in measurements'] },
              { name: 'Distance and Angle Measurement', subtopics: ['Distance measurement: tape, chain and EDM', 'Angle measurement: compass and theodolite'] },
              { name: 'Traverse Surveying, Leveling and Curves', subtopics: ['Traverse surveying and computation of area', 'Leveling and tacheometry', 'Horizontal and vertical curves'] },
              { name: 'Photogrammetry and Remote Sensing', subtopics: ['Basics of photogrammetry', 'Remote sensing fundamentals'] },
              { name: 'GIS and GNSS', subtopics: ['Geographic Information System basics', 'Global Navigation Satellite Systems'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'cat',
    name: 'CAT',
    fullName: 'Common Admission Test',
    aliases: ['common admission test', 'cat exam', 'iim cat'],
    region: 'India',
    category: 'MBA entrance',
    popularity: 91,
    syllabusVerified: '2026-10-20',
    website: 'https://iimcat.ac.in',
    overview: {
      conductor: 'IIMs (rotating)',
      level: 'Graduate → MBA/PGP admission',
      stages: ['Single stage (three fixed-order, individually timed sections)'],
      papers: ['Verbal Ability and Reading Comprehension (VARC)', 'Data Interpretation and Logical Reasoning (DILR)', 'Quantitative Aptitude (QA)'],
      duration: '2 h · 3 sections · 40 min each',
      marking: '+3 correct / −1 incorrect (TITA no negative)',
      negativeMarking: '−1 per wrong MCQ; TITA questions carry no negative marking',
      questionTypes: ['MCQ', 'TITA (type in the answer)'],
      notes:
        'IIMs publish no official syllabus — this section-wise map follows the official exam pattern and past papers. Recent pattern (CAT 2024): 66 questions — VARC 24, DILR 20, QA 22, 3 marks each; on-screen calculator provided.',
    },
    sources: [
      { title: 'IIM CAT — official website and exam pattern', url: 'https://iimcat.ac.in', host: 'iimcat.ac.in' },
    ],
    subjects: [
      {
        name: 'Verbal Ability and Reading Comprehension',
        mappedSubjectId: 'english',
        weightage: 36,
        units: [
          {
            name: 'Reading Comprehension',
            topics: [
              { name: 'Passage Comprehension (Long Passages)', subtopics: ['Main idea and argument structure', 'Detail and inference questions', 'Question types: main idea, detail and function'] },
              { name: 'Passage Comprehension (Short and Medium Passages)', subtopics: ['Quick extraction of key arguments', 'Vocabulary-in-context questions', 'Application of passage ideas'] },
              { name: 'Inference and Tone Questions', subtopics: ['Drawing inferences beyond the stated text', 'Identifying tone and attitude', 'Identifying the author\'s purpose'] },
            ],
          },
          {
            name: 'Verbal Ability',
            topics: [
              { name: 'Para Jumbles', subtopics: ['Rearranging 4-5 sentences into a coherent paragraph (TITA format)', 'Identifying opening and linking sentences'] },
              { name: 'Para Summary', subtopics: ['Choosing the most faithful summary of a short passage', 'Avoiding distortions and extreme options'] },
              { name: 'Odd Sentence Out', subtopics: ['Spotting the sentence that breaks paragraph coherence', 'Detecting theme and tone shifts'] },
            ],
          },
        ],
      },
      {
        name: 'Data Interpretation and Logical Reasoning',
        mappedSubjectId: 'aptitude',
        weightage: 30,
        units: [
          {
            name: 'Data Interpretation',
            topics: [
              { name: 'Tables and Caselets', subtopics: ['Extracting and computing from tables', 'Caselet-based calculations'] },
              { name: 'Bar and Line Graphs', subtopics: ['Reading single, stacked and grouped bar graphs', 'Trend interpretation from line graphs'] },
              { name: 'Venn Diagrams', subtopics: ['Two-set and three-set problems', 'Overlapping set calculations'] },
              { name: 'Pie Charts and Radar Charts', subtopics: ['Share and percentage calculations from pie charts', 'Comparisons from radar charts'] },
              { name: 'Games and Tournaments', subtopics: ['Round-robin and knockout formats', 'Points-table and win-loss deductions'] },
            ],
          },
          {
            name: 'Logical Reasoning',
            topics: [
              { name: 'Arrangements (Linear, Circular, Matrix)', subtopics: ['Linear and circular seating arrangements', 'Matrix and grid-based arrangements'] },
              { name: 'Team Selection and Distribution', subtopics: ['Selecting teams under constraints', 'Distributing people, objects or tasks'] },
              { name: 'Ordering and Ranking', subtopics: ['Rank and position puzzles', 'Sequential ordering constraints'] },
              { name: 'Blood Relations and Family Trees', subtopics: ['Family tree deduction', 'Coded blood relation problems'] },
              { name: 'Critical Reasoning Puzzles', subtopics: ['Multi-condition puzzle sets', 'Logical deduction under constraints'] },
            ],
          },
        ],
      },
      {
        name: 'Quantitative Aptitude',
        mappedSubjectId: 'mathematics',
        weightage: 34,
        units: [
          {
            name: 'Arithmetic',
            topics: [
              { name: 'Percentages', subtopics: ['Percentage change and successive change', 'Percentage equivalents and multiplication factors'] },
              { name: 'Profit and Loss', subtopics: ['Cost price, selling price and markup', 'Discounts and successive discounts'] },
              { name: 'Simple and Compound Interest', subtopics: ['SI and CI across compounding periods', 'Instalment-based problems'] },
              { name: 'Ratio and Proportion', subtopics: ['Combining and dividing in ratios', 'Proportion and variation'] },
              { name: 'Time, Speed and Distance', subtopics: ['Average and relative speed', 'Trains, boats and streams'] },
              { name: 'Time and Work', subtopics: ['Individual and combined work rates', 'Pipes and cisterns'] },
              { name: 'Averages and Mixtures', subtopics: ['Weighted averages', 'Alligation and mixtures'] },
            ],
          },
          {
            name: 'Algebra',
            topics: [
              { name: 'Linear and Quadratic Equations', subtopics: ['Roots and nature of roots', 'Forming equations from word problems'] },
              { name: 'Inequalities and Modulus', subtopics: ['Linear and quadratic inequalities', 'Absolute-value equations and inequalities'] },
              { name: 'Logarithms', subtopics: ['Laws of logarithms', 'Logarithmic equations and inequalities'] },
              { name: 'Functions and Graphs', subtopics: ['Domain and range', 'Modulus and greatest-integer functions', 'Graph transformations'] },
              { name: 'Sequences and Series', subtopics: ['Arithmetic and geometric progressions', 'Harmonic progressions and summation of series'] },
              { name: 'Surds and Indices', subtopics: ['Laws of indices', 'Rationalizing and comparing surds'] },
            ],
          },
          {
            name: 'Geometry',
            topics: [
              { name: 'Triangles', subtopics: ['Similarity and congruence', 'Area formulas and special points (centroid, circumcentre, incentre)'] },
              { name: 'Circles', subtopics: ['Chords, tangents and angle properties', 'Areas and common tangents'] },
              { name: 'Polygons and Quadrilaterals', subtopics: ['Regular polygon properties', 'Quadrilateral areas and diagonals'] },
              { name: 'Coordinate Geometry', subtopics: ['Distance, section and centroid formulas', 'Straight lines: slope, intercepts and equations'] },
              { name: 'Mensuration', subtopics: ['Areas and perimeters of 2D shapes', 'Surface areas and volumes of 3D solids'] },
            ],
          },
          {
            name: 'Modern Mathematics',
            topics: [
              { name: 'Permutations and Combinations', subtopics: ['Fundamental counting principle', 'Arrangements and selections', 'Circular permutations'] },
              { name: 'Probability', subtopics: ['Basic and compound events', 'Conditional probability and independence'] },
              { name: 'Set Theory', subtopics: ['Union and intersection', 'Venn diagram problems'] },
              { name: 'Number System Basics', subtopics: ['Factors, remainders and divisibility', 'HCF and LCM'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'cuet',
    name: 'CUET',
    fullName: 'Common University Entrance Test (Undergraduate)',
    aliases: ['cuet ug', 'common university entrance test'],
    region: 'India',
    category: 'University entrance',
    popularity: 87,
    syllabusVerified: '2026-10-20',
    website: 'https://cuet.nta.nic.in',
    overview: {
      conductor: 'NTA',
      level: 'Class 12 → undergraduate admission (central, state and participating private universities)',
      stages: ['Single stage — computer-based, multiple slots'],
      papers: ['Section IA/IB: Languages', 'Section II: Domain subjects', 'Section III: General Test'],
      duration: 'per-slot 60 min MCQ papers',
      marking: '+5 correct / −1 incorrect',
      negativeMarking: '−1 per incorrect answer',
      questionTypes: ['MCQ (four options)'],
      notes:
        'Section IA languages + Section II domain subjects + Section III general test; students pick their mix. Domain syllabi follow the NCERT Class 11-12 curriculum; the subject list below covers the most commonly chosen domains.',
    },
    sources: [
      { title: 'CUET (UG) — information bulletin and section-wise syllabus', url: 'https://cuet.nta.nic.in', host: 'nta.nic.in' },
    ],
    subjects: [
      {
        name: 'English',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Reading Comprehension',
            topics: [
              { name: 'Factual Passages', subtopics: ['Locating information in factual texts', 'Detail and vocabulary questions'] },
              { name: 'Literary and Narrative Passages', subtopics: ['Interpreting literary prose', 'Tone, style and inference questions'] },
            ],
          },
          {
            name: 'Verbal Ability',
            topics: [
              { name: 'Rearranging Jumbled Parts', subtopics: ['Reordering jumbled sentences', 'Reconstructing paragraphs'] },
              { name: 'Synonyms and Antonyms', subtopics: ['Selecting synonyms', 'Selecting antonyms'] },
            ],
          },
          {
            name: 'Grammar and Usage',
            topics: [
              { name: 'Spot the Error', subtopics: ['Identifying grammatical errors in sentences'] },
              { name: 'Fill in the Blanks', subtopics: ['Grammar-based blank completion'] },
              { name: 'Choosing the Correct Word or Phrase', subtopics: ['Appropriate word and phrase selection'] },
            ],
          },
          {
            name: 'Vocabulary',
            topics: [
              { name: 'Idioms and Phrases', subtopics: ['Meanings of common idioms and phrases'] },
              { name: 'One-Word Substitution', subtopics: ['Single-word equivalents of descriptions'] },
            ],
          },
        ],
      },
      {
        name: 'Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Algebra',
            topics: [
              { name: 'Relations and Functions', subtopics: ['Types of relations', 'One-one, onto and inverse functions'] },
              { name: 'Inverse Trigonometric Functions', subtopics: ['Principal value branches', 'Basic identities'] },
              { name: 'Matrices', subtopics: ['Matrix operations', 'Types of matrices and transpose'] },
              { name: 'Determinants', subtopics: ['Properties of determinants', 'Adjoint and inverse', 'Solving systems of linear equations'] },
            ],
          },
          {
            name: 'Calculus',
            topics: [
              { name: 'Continuity and Differentiability', subtopics: ['Continuity tests', 'Chain rule and implicit differentiation', 'Logarithmic and exponential differentiation'] },
              { name: 'Applications of Derivatives', subtopics: ['Rate of change', 'Increasing and decreasing functions', 'Maxima and minima'] },
              { name: 'Integrals', subtopics: ['Indefinite integration techniques', 'Definite integrals and their properties'] },
              { name: 'Applications of the Integrals', subtopics: ['Area under simple curves'] },
              { name: 'Differential Equations', subtopics: ['Order and degree', 'Variable separable and linear differential equations'] },
            ],
          },
          {
            name: 'Linear Programming',
            topics: [
              { name: 'Formulation of Linear Programming Problems', subtopics: ['Objective function and constraints', 'Mathematical formulation of real situations'] },
              { name: 'Graphical Solution of LPPs', subtopics: ['Feasible regions and corner points', 'Identifying optimal solutions'] },
            ],
          },
          {
            name: 'Probability and Statistics',
            topics: [
              { name: 'Probability', subtopics: ['Conditional probability', 'Bayes theorem', 'Random variables and the binomial distribution'] },
              { name: 'Statistics', subtopics: ['Measures of dispersion: range and mean deviation', 'Variance and standard deviation'] },
            ],
          },
          {
            name: 'Vectors and 3D Geometry',
            topics: [
              { name: 'Vectors', subtopics: ['Vector algebra and types of vectors', 'Scalar (dot) and vector (cross) products'] },
              { name: 'Three-Dimensional Geometry', subtopics: ['Direction cosines and direction ratios', 'Equations of lines in space', 'Equations of planes'] },
            ],
          },
        ],
      },
      {
        name: 'Physics',
        mappedSubjectId: 'physics',
        units: [
          {
            name: 'Mechanics',
            topics: [
              { name: 'Kinematics', subtopics: ['Motion in one and two dimensions', 'Projectile motion'] },
              { name: 'Laws of Motion', subtopics: ['Newton\'s laws of motion', 'Friction', 'Circular motion dynamics'] },
              { name: 'Work, Energy and Power', subtopics: ['Work-energy theorem', 'Conservation of mechanical energy', 'Collisions'] },
              { name: 'Rotational Motion', subtopics: ['Moment of inertia', 'Torque and angular momentum', 'Rolling motion'] },
              { name: 'Gravitation', subtopics: ['Kepler\'s laws', 'Newton\'s law of gravitation', 'Gravitational potential and escape velocity'] },
            ],
          },
          {
            name: 'Properties of Matter and Thermodynamics',
            topics: [
              { name: 'Mechanical Properties of Solids and Fluids', subtopics: ['Elasticity and stress-strain', 'Fluid pressure, viscosity and Bernoulli\'s principle', 'Surface tension'] },
              { name: 'Thermal Properties and Kinetic Theory', subtopics: ['Thermal expansion and calorimetry', 'Kinetic theory of gases'] },
              { name: 'Thermodynamics', subtopics: ['First and second laws', 'Heat engines, refrigerators and the Carnot cycle'] },
            ],
          },
          {
            name: 'Oscillations and Waves',
            topics: [
              { name: 'Oscillations', subtopics: ['Simple harmonic motion and its energy', 'Simple pendulum and spring systems'] },
              { name: 'Waves', subtopics: ['Travelling and standing waves', 'Beats and the Doppler effect'] },
            ],
          },
          {
            name: 'Electricity and Magnetism',
            topics: [
              { name: 'Electrostatics', subtopics: ['Coulomb\'s law and electric field', 'Electric potential and dipoles', 'Conductors and capacitors'] },
              { name: 'Current Electricity', subtopics: ['Ohm\'s law and resistivity', 'Cells, EMF and Kirchhoff\'s rules', 'Heating effect of current'] },
              { name: 'Magnetic Effects of Current and Magnetism', subtopics: ['Biot-Savart and Ampere laws', 'Moving-coil galvanometer', 'Magnetic materials and the earth\'s magnetism'] },
              { name: 'Electromagnetic Induction and AC', subtopics: ['Faraday\'s and Lenz\'s laws', 'Self and mutual inductance', 'Alternating currents and LCR circuits'] },
            ],
          },
          {
            name: 'Optics',
            topics: [
              { name: 'Ray Optics', subtopics: ['Reflection and refraction', 'Mirrors, lenses and optical instruments', 'Prisms and dispersion'] },
              { name: 'Wave Optics', subtopics: ['Interference', 'Diffraction', 'Polarization'] },
            ],
          },
          {
            name: 'Modern Physics',
            topics: [
              { name: 'Dual Nature of Radiation and Matter', subtopics: ['Photoelectric effect', 'de Broglie waves'] },
              { name: 'Atoms and Nuclei', subtopics: ['Bohr model and spectra', 'Nuclear composition, binding energy and radioactivity'] },
              { name: 'Electronic Devices', subtopics: ['Semiconductors and p-n junctions', 'Diodes, rectifiers and logic gates'] },
            ],
          },
        ],
      },
      {
        name: 'Chemistry',
        mappedSubjectId: 'chemistry',
        units: [
          {
            name: 'Basic Concepts, Atomic Structure and Periodicity',
            topics: [
              { name: 'Some Basic Concepts of Chemistry', subtopics: ['Mole concept and stoichiometry', 'Laws of chemical combination'] },
              { name: 'Structure of Atom', subtopics: ['Quantum numbers and orbitals', 'Electronic configuration'] },
              { name: 'Classification and Periodicity', subtopics: ['Periodic table trends', 'Atomic radius, ionization enthalpy and electronegativity'] },
            ],
          },
          {
            name: 'Chemical Bonding and States of Matter',
            topics: [
              { name: 'Chemical Bonding and Molecular Structure', subtopics: ['Ionic, covalent and coordinate bonds', 'VSEPR theory and hybridization', 'Molecular orbital theory basics'] },
              { name: 'States of Matter', subtopics: ['Gas laws and the ideal gas equation', 'Real gases and intermolecular forces'] },
            ],
          },
          {
            name: 'Thermodynamics, Equilibrium and Redox',
            topics: [
              { name: 'Chemical Thermodynamics', subtopics: ['Enthalpy and entropy', 'Spontaneity and Gibbs energy'] },
              { name: 'Equilibrium', subtopics: ['Chemical equilibrium and Le Chatelier\'s principle', 'Ionic equilibrium, pH and buffers'] },
              { name: 'Redox Reactions', subtopics: ['Oxidation numbers', 'Balancing redox equations'] },
            ],
          },
          {
            name: 'Kinetics and Solutions',
            topics: [
              { name: 'Chemical Kinetics', subtopics: ['Rate laws and order of reaction', 'Temperature dependence and catalysis'] },
              { name: 'Solutions', subtopics: ['Colligative properties', 'Raoult\'s law and ideal solutions'] },
            ],
          },
          {
            name: 'Inorganic Chemistry',
            topics: [
              { name: 'p-Block Elements', subtopics: ['Group-wise trends', 'Important compounds and their uses'] },
              { name: 'd- and f-Block Elements', subtopics: ['Transition element trends', 'Coloured ions and magnetic properties'] },
              { name: 'Coordination Compounds', subtopics: ['Nomenclature and isomerism', 'Werner\'s theory and bonding'] },
            ],
          },
          {
            name: 'Organic Chemistry and Biomolecules',
            topics: [
              { name: 'Basics of Organic Chemistry', subtopics: ['Nomenclature and isomerism', 'Reaction mechanisms and inductive/resonance effects'] },
              { name: 'Hydrocarbons and Haloalkanes', subtopics: ['Alkanes, alkenes and alkynes', 'Aromatic hydrocarbons', 'Haloalkanes and haloarenes'] },
              { name: 'Oxygen- and Nitrogen-Containing Compounds', subtopics: ['Alcohols, phenols and ethers', 'Aldehydes, ketones and carboxylic acids', 'Amines and diazonium salts'] },
              { name: 'Biomolecules', subtopics: ['Carbohydrates', 'Proteins and nucleic acids', 'Vitamins'] },
            ],
          },
        ],
      },
      {
        name: 'Biology',
        units: [
          {
            name: 'Diversity and Structural Organisation',
            topics: [
              { name: 'Diversity in Living Organisms', subtopics: ['Classification and taxonomic categories', 'Viruses, bacteria and the kingdoms of life'] },
              { name: 'Structural Organisation in Plants and Animals', subtopics: ['Plant tissues and morphology', 'Animal tissues', 'Morphology and anatomy of flowering plants'] },
            ],
          },
          {
            name: 'Cell Biology and Biomolecules',
            topics: [
              { name: 'Cell: The Unit of Life', subtopics: ['Cell organelles', 'Prokaryotic vs eukaryotic cells'] },
              { name: 'Biomolecules and Enzymes', subtopics: ['Proteins, carbohydrates and lipids', 'Enzyme action'] },
              { name: 'Cell Cycle and Cell Division', subtopics: ['Mitosis', 'Meiosis'] },
            ],
          },
          {
            name: 'Plant Physiology',
            topics: [
              { name: 'Photosynthesis', subtopics: ['Light and dark reactions', 'C3, C4 and CAM pathways'] },
              { name: 'Respiration in Plants', subtopics: ['Glycolysis and the Krebs cycle', 'Electron transport and ATP synthesis'] },
              { name: 'Plant Growth and Development', subtopics: ['Growth phases', 'Plant growth regulators'] },
            ],
          },
          {
            name: 'Human Physiology',
            topics: [
              { name: 'Digestion and Absorption', subtopics: ['Alimentary canal and digestion', 'Absorption and assimilation'] },
              { name: 'Breathing and Respiration', subtopics: ['Respiratory system and gas exchange'] },
              { name: 'Body Fluids and Circulation', subtopics: ['Blood and the heart', 'Circulatory pathways'] },
              { name: 'Excretory Products and Elimination', subtopics: ['Kidney structure and urine formation'] },
              { name: 'Locomotion and Movement', subtopics: ['Muscle contraction', 'Skeletal system'] },
              { name: 'Neural and Chemical Coordination', subtopics: ['Nervous system and neurons', 'Endocrine glands and hormones'] },
            ],
          },
          {
            name: 'Reproduction and Genetics',
            topics: [
              { name: 'Sexual Reproduction', subtopics: ['Reproduction in flowering plants', 'Human reproductive system and health'] },
              { name: 'Principles of Inheritance and Variation', subtopics: ['Mendelian genetics', 'Linkage, crossing over and sex-linked inheritance'] },
              { name: 'Molecular Basis of Inheritance', subtopics: ['DNA structure and replication', 'Transcription and translation', 'Gene regulation and the lac operon'] },
            ],
          },
          {
            name: 'Evolution, Ecology and Biotechnology',
            topics: [
              { name: 'Evolution', subtopics: ['Origin of life', 'Natural selection and evidence for evolution'] },
              { name: 'Ecosystems and Biodiversity', subtopics: ['Ecosystem structure and energy flow', 'Biodiversity and its conservation'] },
              { name: 'Organisms and Populations', subtopics: ['Population interactions', 'Adaptations'] },
              { name: 'Biotechnology', subtopics: ['Principles and processes', 'Applications in health and agriculture'] },
              { name: 'Human Health and Disease', subtopics: ['Pathogens and immunity', 'Common diseases and prevention'] },
            ],
          },
        ],
      },
      {
        name: 'Economics',
        units: [
          {
            name: 'Microeconomics',
            topics: [
              { name: 'Consumer Equilibrium and Demand', subtopics: ['Consumer equilibrium', 'Demand and its determinants', 'Price, income and cross elasticity of demand'] },
              { name: 'Producer Behaviour and Supply', subtopics: ['Production function and returns', 'Costs of production', 'Supply and its elasticity'] },
              { name: 'Forms of Market and Price Determination', subtopics: ['Perfect and imperfect competition', 'Price determination under perfect competition'] },
            ],
          },
          {
            name: 'Macroeconomics',
            topics: [
              { name: 'National Income and Related Aggregates', subtopics: ['Measuring national income', 'Real vs nominal GDP', 'Aggregates such as GNP and NNP'] },
              { name: 'Determination of Income and Employment', subtopics: ['Aggregate demand and supply', 'Propensity to consume and the multiplier'] },
              { name: 'Money and Banking', subtopics: ['Functions of money', 'Commercial banks and credit creation', 'Central bank and monetary policy'] },
              { name: 'Government Budget and the Economy', subtopics: ['Objectives of the budget', 'Receipts, expenditure and deficits'] },
              { name: 'Foreign Exchange and Balance of Payments', subtopics: ['Exchange rate determination', 'Balance of payments accounts'] },
            ],
          },
          {
            name: 'Indian Economic Development',
            topics: [
              { name: 'Development Policies and Experience (1947-1990)', subtopics: ['Planning and the Five Year Plans', 'Agriculture and industrial policy'] },
              { name: 'Economic Reforms Since 1991', subtopics: ['Liberalisation, privatisation and globalisation', 'Disinvestment and appraisal of reforms'] },
              { name: 'Current Challenges Facing the Indian Economy', subtopics: ['Poverty', 'Human capital formation', 'Rural development', 'Employment and infrastructure', 'Sustainable development'] },
              { name: 'Development Experience of India\'s Neighbours', subtopics: ['Comparative overview of India, China and Pakistan'] },
            ],
          },
        ],
      },
      {
        name: 'Accountancy',
        units: [
          {
            name: 'Accounting Fundamentals',
            topics: [
              { name: 'Basic Accounting Concepts', subtopics: ['Accounting principles and concepts', 'The accounting equation', 'Basis of accounting'] },
              { name: 'Recording of Transactions', subtopics: ['Journal entries and subsidiary books', 'Posting to ledgers'] },
              { name: 'Preparation of Financial Statements', subtopics: ['Trial balance', 'Trading, profit and loss account and balance sheet of sole proprietorships'] },
            ],
          },
          {
            name: 'Partnership Accounts',
            topics: [
              { name: 'Fundamentals of Partnership', subtopics: ['Partnership deed', 'Profit and loss appropriation', 'Interest on capital and drawings'] },
              { name: 'Admission of a Partner', subtopics: ['Sacrificing ratio and revaluation', 'Goodwill treatment'] },
              { name: 'Retirement and Death of a Partner', subtopics: ['Gaining ratio', 'Settlement of the outgoing partner\'s account'] },
              { name: 'Dissolution of Partnership', subtopics: ['Realisation account', 'Settlement of accounts'] },
            ],
          },
          {
            name: 'Company Accounts',
            topics: [
              { name: 'Issue of Shares', subtopics: ['Share capital terms', 'Application, allotment and calls', 'Over-subscription and under-subscription'] },
              { name: 'Issue of Debentures', subtopics: ['Terms of issue', 'Interest on debentures'] },
              { name: 'Financial Statements of a Company', subtopics: ['Balance sheet format', 'Statement of profit and loss'] },
            ],
          },
          {
            name: 'Financial Statement Analysis',
            topics: [
              { name: 'Analysis of Financial Statements', subtopics: ['Comparative statements', 'Common size statements'] },
              { name: 'Accounting Ratios', subtopics: ['Liquidity ratios', 'Solvency ratios', 'Profitability and turnover ratios'] },
              { name: 'Cash Flow Statement', subtopics: ['Operating, investing and financing activities'] },
            ],
          },
          {
            name: 'Computerized Accounting',
            topics: [
              { name: 'Computerized Accounting System', subtopics: ['Components and features', 'Data entry through vouchers'] },
              { name: 'Using Computerized Accounting', subtopics: ['Creating accounts and vouchers', 'Generating accounting reports'] },
            ],
          },
        ],
      },
      {
        name: 'History',
        units: [
          {
            name: 'Ancient India',
            topics: [
              { name: 'Harappan Civilization', subtopics: ['Town planning of the first cities', 'Crafts, trade and subsistence', 'Problems of decline'] },
              { name: 'Early States and Economies', subtopics: ['Inscriptions as sources', 'States and urban centres'] },
              { name: 'Early Religious Traditions', subtopics: ['Growth of Buddhism', 'Sanchi Stupa and its discovery'] },
              { name: 'Society through the Mahabharata', subtopics: ['The epic as a source of social history'] },
              { name: 'Thinkers, Beliefs and Buildings', subtopics: ['Vedic thought and Upanishads', 'Early monumental architecture'] },
            ],
          },
          {
            name: 'Medieval India',
            topics: [
              { name: 'Through the Eyes of Travellers', subtopics: ['Al-Biruni, Ibn Battuta and Bernier on Indian society'] },
              { name: 'Bhakti-Sufi Traditions', subtopics: ['Bhakti saints and practices', 'Sufi silsilas and practices'] },
              { name: 'Vijayanagara: An Imperial Capital', subtopics: ['Discovery of Hampi', 'Rayas, nayakas and urban core'] },
              { name: 'Peasants, Zamindars and the State', subtopics: ['Rural society and agrarian structure', 'Village communities and revenue'] },
            ],
          },
          {
            name: 'Modern India and National Movement',
            topics: [
              { name: 'Colonialism and the Countryside', subtopics: ['Revenue settlements and rural society', 'Peasant revolts'] },
              { name: 'Revolt of 1857 and Its Representations', subtopics: ['Causes and spread', 'Changes after the revolt'] },
              { name: 'Colonialism and Indian Towns', subtopics: ['Urbanisation of Madras, Bombay and Calcutta'] },
              { name: 'Mahatma Gandhi and the Nationalist Movement', subtopics: ['Satyagraha campaigns', 'Quit India and independence'] },
              { name: 'Framing of the Constitution', subtopics: ['Constituent Assembly and its debates'] },
            ],
          },
          {
            name: 'World History Themes',
            topics: [
              { name: 'Writing and City Life', subtopics: ['Mesopotamia and early urbanism'] },
              { name: 'An Empire Across Three Continents', subtopics: ['The Roman Empire: politics, society and economy'] },
              { name: 'Nomadic Empires', subtopics: ['Genghis Khan and the Mongols'] },
              { name: 'Changing Cultural Traditions', subtopics: ['Renaissance and humanism'] },
              { name: 'Displacing Indigenous Peoples', subtopics: ['European expansion and native peoples of the Americas'] },
              { name: 'Paths to Modernisation', subtopics: ['Modernisation of Japan and China'] },
            ],
          },
        ],
      },
      {
        name: 'Political Science',
        units: [
          {
            name: 'Indian Constitution at Work',
            topics: [
              { name: 'Constitution: Why and How', subtopics: ['The Constituent Assembly', 'Philosophy of the Constitution'] },
              { name: 'Rights in the Indian Constitution', subtopics: ['Fundamental Rights', 'Directive Principles and Fundamental Duties'] },
              { name: 'Election and Representation', subtopics: ['Election Commission', 'Challenges of representation'] },
              { name: 'Executive, Legislature and Judiciary', subtopics: ['President, Prime Minister and Council of Ministers', 'Parliament and its functions', 'Supreme Court and judicial review'] },
              { name: 'Federalism and Local Governments', subtopics: ['Centre-state relations', 'Panchayati Raj and municipalities'] },
            ],
          },
          {
            name: 'Contemporary World Politics',
            topics: [
              { name: 'The Cold War Era and End of Bipolarity', subtopics: ['Origins and course of the Cold War', 'Disintegration of the Soviet Union', 'The Non-Aligned Movement'] },
              { name: 'US Hegemony and Alternative Centres of Power', subtopics: ['Dimensions of US dominance', 'Rise of China, the EU and other poles'] },
              { name: 'Contemporary South Asia', subtopics: ['Conflicts and cooperation in the region'] },
              { name: 'International Organisations', subtopics: ['The UN system', 'Reform debates'] },
              { name: 'Security in the Contemporary World', subtopics: ['Traditional and non-traditional threats'] },
              { name: 'Environment, Resources and Globalisation', subtopics: ['Environmental concerns', 'Globalisation and its critics'] },
            ],
          },
          {
            name: 'Politics in India Since Independence',
            topics: [
              { name: 'Nation-Building and Its Challenges', subtopics: ['Integration of princely states', 'Linguistic reorganisation of states'] },
              { name: 'Era of One-Party Dominance', subtopics: ['The Congress system', 'Rise of opposition parties'] },
              { name: 'Politics of Planned Development', subtopics: ['Five Year Plans', 'Green Revolution and its aftermath'] },
              { name: 'India\'s External Relations', subtopics: ['Non-alignment', 'Wars and relations with neighbours'] },
              { name: 'Crisis of Democratic Order', subtopics: ['The Emergency', 'Restoration of democracy'] },
              { name: 'Regional Aspirations and Recent Developments', subtopics: ['Rise of regional parties', 'Popular movements and coalition politics'] },
            ],
          },
        ],
      },
      {
        name: 'Geography',
        units: [
          {
            name: 'Fundamentals of Human Geography',
            topics: [
              { name: 'Human Geography: Nature and Scope', subtopics: ['Naturalisation of humans and humanisation of nature'] },
              { name: 'The World Population', subtopics: ['Distribution, density and growth', 'Population composition', 'Human development'] },
              { name: 'Economic Activities', subtopics: ['Primary activities', 'Secondary activities', 'Tertiary and quaternary activities'] },
              { name: 'Transport, Communication and Trade', subtopics: ['Modes and networks of transport', 'International trade patterns'] },
            ],
          },
          {
            name: 'India: People and Economy',
            topics: [
              { name: 'Population of India', subtopics: ['Distribution, density and growth', 'Migration and population composition'] },
              { name: 'Human Settlements', subtopics: ['Rural settlement types', 'Urban classification and urbanisation'] },
              { name: 'Resources of India', subtopics: ['Land resources and agriculture', 'Water resources and irrigation', 'Mineral and energy resources'] },
              { name: 'Industries and Trade', subtopics: ['Industrial location and regions', 'Transport networks and international trade'] },
            ],
          },
          {
            name: 'Physical Geography Basics',
            topics: [
              { name: 'Earth, Rocks and Landforms', subtopics: ['Origin and interior of the earth', 'Rocks and their classification', 'Landforms and their evolution'] },
              { name: 'Atmosphere and Climate', subtopics: ['Composition and heating of the atmosphere', 'Circulation, cyclones and weather systems'] },
              { name: 'Oceans and the Water Cycle', subtopics: ['Ocean relief and currents', 'Movements of ocean water and tides'] },
            ],
          },
        ],
      },
      {
        name: 'Psychology',
        units: [
          {
            name: 'Psychological Foundations',
            topics: [
              { name: 'What Is Psychology', subtopics: ['Nature and scope of psychology', 'Popular notions vs the scientific study of behaviour'] },
              { name: 'Methods of Enquiry in Psychology', subtopics: ['Experimental method', 'Observational, survey and case-study methods'] },
              { name: 'Human Development', subtopics: ['Stages of development across the lifespan'] },
              { name: 'Learning and Memory', subtopics: ['Learning processes', 'Memory: encoding, storage and retrieval'] },
            ],
          },
          {
            name: 'Self and Personality',
            topics: [
              { name: 'Self', subtopics: ['Self-concept and self-esteem', 'Cultural influences on the self'] },
              { name: 'Personality', subtopics: ['Trait and type approaches', 'Psychodynamic and humanistic approaches'] },
              { name: 'Variations in Psychological Attributes', subtopics: ['Individual differences and intelligence', 'Assessment of psychological attributes'] },
            ],
          },
          {
            name: 'Meeting Life Challenges',
            topics: [
              { name: 'Stress and Coping', subtopics: ['Sources of stress', 'Coping strategies and promoting positive health'] },
              { name: 'Psychological Disorders', subtopics: ['Anxiety, mood and psychotic disorders', 'Substance-related disorders'] },
              { name: 'Therapeutic Approaches', subtopics: ['Psychotherapies', 'Counselling and rehabilitation'] },
            ],
          },
          {
            name: 'Psychology and Social Life',
            topics: [
              { name: 'Attitude and Social Cognition', subtopics: ['Attitude formation and change', 'Impression formation and prejudice'] },
              { name: 'Social Influence and Group Processes', subtopics: ['Conformity, compliance and obedience', 'Group dynamics and leadership'] },
              { name: 'Psychology Applied to Social Concerns', subtopics: ['Psychology and the environment', 'Health, peace and digital-world applications'] },
            ],
          },
        ],
      },
      {
        name: 'Computer Science',
        mappedSubjectId: 'programming-java',
        units: [
          {
            name: 'Programming in Python/C++',
            topics: [
              { name: 'Programming Fundamentals', subtopics: ['Data types, variables and operators', 'Conditional and iterative statements'] },
              { name: 'Functions', subtopics: ['Defining and calling functions', 'Parameters, return values and scope'] },
              { name: 'Data Handling', subtopics: ['Strings, lists, tuples and dictionaries', 'File handling'] },
            ],
          },
          {
            name: 'Computational Thinking and Algorithms',
            topics: [
              { name: 'Computational Thinking', subtopics: ['Decomposition and pattern recognition', 'Abstraction and algorithms'] },
              { name: 'Algorithms and Flowcharts', subtopics: ['Designing simple algorithms', 'Flowchart symbols and construction'] },
            ],
          },
          {
            name: 'Computer Networks',
            topics: [
              { name: 'Networking Fundamentals', subtopics: ['Network types and topologies', 'Transmission media and devices'] },
              { name: 'Internet and Its Services', subtopics: ['How the internet works', 'Web, email and cloud services'] },
            ],
          },
          {
            name: 'Database Concepts',
            topics: [
              { name: 'Database Fundamentals', subtopics: ['Data and databases', 'Tables, records and keys'] },
              { name: 'SQL', subtopics: ['DDL and DML basics', 'Simple queries using SELECT'] },
            ],
          },
          {
            name: 'Society, Law and Ethics',
            topics: [
              { name: 'Digital Footprint and Cyber Safety', subtopics: ['Digital footprint', 'Cyberbullying and safe browsing practices'] },
              { name: 'Societal Impacts', subtopics: ['Intellectual property and licensing', 'E-waste and the digital divide'] },
            ],
          },
        ],
      },
      {
        name: 'General Test',
        mappedSubjectId: 'aptitude',
        units: [
          {
            name: 'Quantitative Reasoning',
            topics: [
              { name: 'Applications of Arithmetic', subtopics: ['Percentages, ratio and proportion', 'Averages and basic statistics'] },
              { name: 'Applications of Algebra and Geometry', subtopics: ['Simple equations and mensuration basics', 'Elementary algebra in context'] },
            ],
          },
          {
            name: 'Logical Reasoning',
            topics: [
              { name: 'Series and Analogies', subtopics: ['Number and letter series', 'Analogies and classification'] },
              { name: 'Coding-Decoding', subtopics: ['Letter and number coding'] },
              { name: 'Blood Relations and Direction Sense', subtopics: ['Family relation puzzles', 'Direction and distance problems'] },
            ],
          },
          {
            name: 'General Mental Ability',
            topics: [
              { name: 'Problem Solving', subtopics: ['Logical deduction', 'Data-based reasoning'] },
              { name: 'Spatial and Visual Reasoning', subtopics: ['Figure-based problems'] },
            ],
          },
          {
            name: 'Numerical Ability',
            topics: [
              { name: 'Number Operations', subtopics: ['Number system basics', 'Computation with whole numbers'] },
              { name: 'Data Interpretation', subtopics: ['Tables and charts'] },
            ],
          },
          {
            name: 'Current Affairs',
            topics: [
              { name: 'Recent National Affairs', subtopics: ['Government initiatives and policies', 'Major national events'] },
              { name: 'Recent International Affairs', subtopics: ['Major world events and summits'] },
            ],
          },
        ],
      },
    ],
  },
]

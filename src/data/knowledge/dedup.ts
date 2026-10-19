/* ------------------------------------------------------------------ */
/*  Dedup ledger — topics that are ALREADY EXPLAINED elsewhere         */
/*                                                                     */
/*  USER RULE (verbatim intent): "There should be no repetition of      */
/*  topics. If some topics are already available, first deep-dive      */
/*  into whether that topic is already explained or not. If it is      */
/*  explained, don't include it there. If not, then only include       */
/*  that subject or topic."                                            */
/*                                                                     */
/*  Every entry below was cross-verified against the existing Library  */
/*  subjects (Foundations / Programming & Software / Computing         */
/*  Systems / Electronics & Communication / Electrical & Power /       */
/*  Mechanical & Energy) and found to be a duplicate. The topic is     */
/*  excluded from rendering and MUST NOT be re-authored in future      */
/*  expansion passes — deepen `coveredBy` instead.                     */
/*                                                                     */
/*  Machine-checkable twin: coverage/dedupe-report.json (scores from   */
/*  scripts/dedupe-knowledge.ts). Human ledger: coverage/COVERAGE.md.  */
/* ------------------------------------------------------------------ */

export interface ExcludedTopic {
  /** where the topic is already explained, in full */
  coveredBy: string
  /** short evidence note */
  note: string
}

export const EXCLUDED_TOPICS: Record<string, ExcludedTopic> = {
  /* ---- Physical Sciences ---- */
  'phys-angular-momentum': {
    coveredBy: 'Physics → Rotational Dynamics chapters',
    note: 'Angular momentum, torque and rotational motion are fully covered in the Physics master library.',
  },
  'phys-entropy-second-law': {
    coveredBy: 'Physics → Entropy & the Second Law',
    note: 'Entropy, the second law and heat-engine limits are covered in the thermodynamics block.',
  },
  'phys-chemical-equilibrium': {
    coveredBy: 'Chemistry → Chemical & Ionic Equilibrium',
    note: "Le Chatelier's principle, Kc/Kp and equilibrium shifts are covered in the Chemistry volume.",
  },
  'phys-special-relativity': {
    coveredBy: 'Physics → Relativity',
    note: 'Time dilation, length contraction and relativistic momentum are covered in modern physics.',
  },
  'chem-periodic-trends': {
    coveredBy: 'Chemistry → Periodic Properties & Chemical Bonding',
    note: 'Periodic trends (radius, IE, EA, electronegativity) are covered in the inorganic block.',
  },
  /* ---- Mathematical Sciences (domain fully covered by Mathematics subject) ---- */
  'math-derivative-as-limit': {
    coveredBy: 'Mathematics → Limits and Derivatives',
    note: 'The derivative-as-limit definition is the opening of the full Stewart calculus sequence.',
  },
  'math-bayes-theorem': {
    coveredBy: 'Mathematics → Probability & Statistics',
    note: "Bayes' theorem and total probability are covered in the probability block.",
  },
  'math-eigenvalues': {
    coveredBy: 'Mathematics → Eigenvalues, Diagonalization & LU Decomposition',
    note: 'Eigenvalues, eigenvectors and diagonalization are covered in engineering mathematics.',
  },
  'math-prime-numbers': {
    coveredBy: 'Mathematics → Number Theory and Cryptography',
    note: 'Primes, divisibility, GCD and modular arithmetic are covered in the number-theory chapter.',
  },
  'math-infinity-countability': {
    coveredBy: 'Mathematics → Cardinality of Sets',
    note: 'Countability, uncountability and sizes of infinity are covered in the sets chapter.',
  },
  'math-graph-theory-bridges': {
    coveredBy: 'Mathematics → Graphs',
    note: 'Graph theory (Euler paths, connectivity, coloring) is covered in the discrete-math block.',
  },
  /* ---- Computing & AI (domain fully covered by existing CS subjects) ---- */
  'cs-hash-tables-collision-resolution': {
    coveredBy: 'Data Structures & Algorithms → Hash Tables',
    note: 'Hash tables, collision resolution and load factors are covered in the DSA track.',
  },
  'cs-backpropagation-neural-network-learning': {
    coveredBy: 'AI, Machine Learning & Data Science → Deep Learning Foundations',
    note: 'Backpropagation and gradient descent are covered in the deep-learning chapter.',
  },
  'cs-public-key-cryptography-rsa': {
    coveredBy: 'Mathematics → Number Theory and Cryptography; Cybersecurity',
    note: 'RSA, modular exponentiation and public-key systems are covered in both tracks.',
  },
  'cs-transformer-attention': {
    coveredBy: 'AI, Machine Learning & Data Science → Neural NLP & Attention; Transformer Pipelines',
    note: 'Attention and transformer architectures are covered in the NLP/transformers chapters.',
  },
  'cs-operating-systems-processes': {
    coveredBy: 'Operating Systems → Processes & Scheduling',
    note: 'Processes, threads, scheduling and the process abstraction are the core of the OS track.',
  },
  'cs-blockchain-consensus': {
    coveredBy: 'Software Engineering & Emerging Tech → Blockchain Architecture Design',
    note: 'Blockchain architecture and consensus are covered in the emerging-tech track.',
  },
  /* ---- Engineering Science ---- */
  'eng-feedback-control-pid-tuning': {
    coveredBy: 'Control Systems & Instrumentation → Control Systems',
    note: 'Feedback control, PID and time-response analysis are covered in the control track.',
  },
  'eng-why-materials-fail': {
    coveredBy: 'Solids, Materials & Manufacturing → stress/fatigue/fracture chapters',
    note: 'Stress, strain, fatigue and fracture mechanics are covered in materials/mechanics of materials.',
  },
  'eng-three-phase-power': {
    coveredBy: 'Electric Circuits & Networks → Three-Phase Circuits',
    note: 'Three-phase systems, line/phase relations and power measurement are covered.',
  },
  'eng-structures-bridges': {
    coveredBy: 'Physics → Static Equilibrium & Elasticity; Solids & Materials',
    note: 'Loads, stress analysis and safety factors are covered in statics and mechanics of materials.',
  },
  'eng-manufacturing-tolerances': {
    coveredBy: 'Manufacturing & Industrial Engineering → Limits, Fits, Gauges & Surface Metrology',
    note: 'Tolerances, fits and measurement are covered across the metrology chapters.',
  },
  /* ---- Technology & Applied Science ---- */
  'tech-lithium-ion-charging-chemistry': {
    coveredBy: 'Chemistry → Batteries and Fuel Cells; Energy → Hybrid Systems & Storage',
    note: 'Battery electrochemistry and storage systems are covered in chemistry and energy tracks.',
  },
  'tech-semiconductor-lithography': {
    coveredBy: 'VLSI Design → Diffusion, Implantation & Lithography; Metallization & CMOS Process Flow',
    note: 'Lithography and the CMOS process flow are covered in the VLSI fabrication chapters.',
  },
  'tech-nuclear-fission-reactors': {
    coveredBy: 'Physics → Energy from the Nucleus → The Nuclear Reactor',
    note: 'Fission, chain reactions and reactor operation are covered in nuclear physics.',
  },
  'tech-fiber-optics': {
    coveredBy: 'Communication Systems → Optical Fiber Communication',
    note: 'Fiber principles, attenuation and dispersion are covered in the communications track.',
  },
  /* ---- Emerging & Interdisciplinary ---- */
  'emer-quantum-computing-without-hype': {
    coveredBy: 'Software Engineering & Emerging Tech → Quantum Computing Foundations',
    note: 'Qubits, gates and quantum algorithms are covered in the emerging-tech track.',
  },
  /* ---- Everyday Knowledge ---- */
  'every-probability-everyday-decisions': {
    coveredBy: 'Mathematics → Discrete Probability',
    note: 'Probability foundations, conditional probability and expected value are fully covered.',
  },
}

/** Domains whose every topic was excluded — the whole domain is retired. */
export const EXCLUDED_DOMAINS: Record<string, string> = {
  Mathematics: 'Every topic already covered by the Mathematics master subject (calculus, probability, linear algebra, number theory, set theory, graph theory).',
  'Computing & AI': 'Every topic already covered by the DSA / AI / OS / Cybersecurity / Emerging-Tech subjects.',
}

/** Check: is this topic id already excluded (a duplicate)? */
export function isExcludedTopic(id: string): boolean {
  return Object.prototype.hasOwnProperty.call(EXCLUDED_TOPICS, id)
}

/**
 * Knowledge Universe — Quantum Information — Chapter 01: Quantum Computation
 * 2 lessons · ~2,214 words
 * field: Quantum Information
 * legacy sources: emerging-interdisciplinary.ts, x51-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Quantum Computation]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 quantum-qubits-gates — Qubits and Quantum Gates
 *   01.2 emer-quantum-computing-without-hype — Quantum Computing Without the Hype
 */
import type { KnowledgeTopic } from '../../types'

export const quantumInformationCh01: KnowledgeTopic[] = [
  {
    id: 'quantum-qubits-gates',
    title: 'Qubits and Quantum Gates',
    domain: 'Emerging & Interdisciplinary',
    field: 'Quantum Information',
    branch: 'Quantum Computation',
    tier: 'core' as const,
    concepts: [
      'The qubit: amplitudes, phases and the Born rule',
      'The Bloch sphere as the qubit\u2019s map',
      'Entanglement: correlations without signaling',
      'The no-cloning theorem',
      'Gates: X, Z, H and CNOT',
      'Decoherence: T1 relaxation and T2 dephasing',
      'Measurement collapses — and chooses what survives',
    ],
    words: 1095,
    readMins: 5,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The sensing lesson of this book showed quantum states out-measuring classical devices — atomic transitions as clock standards, SQUIDs reading femtotesla fields. This lesson builds the information primitive underneath those phenomena and the computing revolution built on it: the qubit, the gate, and the two theorems (measurement and no-cloning) that make quantum computation unlike anything classical.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every popular description of quantum computing says the qubit is "0 and 1 at the same time". It is not — it is a complex amplitude with a phase, and the phase is where the power lives. Get this one correction right and the entire field opens: algorithms become interference choreography, error correction becomes a fight for phases, and hardware becomes a fight against decoherence.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A qubit is a two-level quantum system described by amplitudes: α|0⟩ + β|1⟩ with complex α, β, normalized so |α|² + |β|² = 1. Measuring yields 0 with probability |α|² and 1 with probability |β|² — the Born rule — and collapses the state. The relative phase between α and β is invisible to a single measurement but is exactly what gates manipulate and algorithms exploit. The Bloch sphere is the qubit\u2019s map: every pure state is a point on a sphere, the north and south poles the classical 0 and 1, and every gate a rotation.',
      },
      {
        kind: 'para',
        text: 'Two qubits can share a state no product of individuals describes — a Bell state like (|00⟩ + |11⟩)/√2, where measuring one instantly fixes the other\u2019s outcome, however far apart they are. Entanglement carries perfect correlations but cannot signal (no message travels — the outcomes are random until compared), and it is the resource that makes quantum states hard to simulate classically. Its twin theorem is no-cloning (Wootters and Zurek, 1982): no process copies an unknown quantum state. You cannot back up a qubit — which is simultaneously the cryptographer\u2019s gift (eavesdropping leaves marks) and the error-corrector\u2019s hardest constraint.',
      },
      {
        kind: 'para',
        text: 'Gates are unitary rotations. The Pauli-X flips |0⟩ and |1⟩ — the quantum NOT. The Pauli-Z flips a phase: |1⟩ picks up a minus sign while |0⟩ is untouched. The Hadamard H is the workhorse: it turns |0⟩ into (|0⟩+|1⟩)/√2 — a perfect superposition — and turns that superposition back into |0⟩; H creates and un-creates interference. The CNOT gate entangles: conditioned on a control qubit, it flips a target, and applied to (H|0⟩)⊗|0⟩ it manufactures the Bell state. A quantum circuit is a sequence of these rotations; a universal set (say H, T, CNOT) can approximate any unitary at all.',
      },
      {
        kind: 'para',
        text: 'The enemy is decoherence. A qubit couples to its environment — stray fields, phonons, cosmic rays — and the amplitudes\u2019 precious relative phase leaks away. Two clocks measure the decay: T1, the energy relaxation time (excited state decaying to ground), and T2, the dephasing time (phase information scrambled). Classical bits are robust because each bit is a macroscopic charge reservoir; qubits are fragile because each is a deliberately isolated two-level system. The gap in error rates — roughly one error per thousand gate operations versus far below one per Avogadro\u2019s number for classical transistors — is the mountain the next lesson\u2019s error-correction machinery exists to climb.',
      },
      {
        kind: 'para',
        text: 'Measurement completes the picture and sets the rules of the game. It is destructive: you cannot peek mid-computation and continue. It is probabilistic: outcomes arrive with Born-rule probabilities. And it is choosy: in a good algorithm, the interference choreography arranges amplitudes so that WRONG answers cancel and the RIGHT answer\u2019s amplitude is large at the moment of measurement. A quantum computer is thus a machine for making wrong answers interfere destructively — and everything from Shor\u2019s factoring to Grover\u2019s search is a particular choreography to that end.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Circuit: start from |00⟩. Apply H to qubit 0, then CNOT with qubit 0 as control, qubit 1 as target.',
          'Step one: H|0⟩ = (|0⟩+|1⟩)/√2, so the state is (|00⟩+|10⟩)/√2.',
          'Step two: CNOT flips the target when the control is 1: (|00⟩+|11⟩)/√2 — the Bell state Φ+.',
          'Read the payoff: each qubit alone is pure random, but measured together they agree 100% of the time — entanglement, manufactured in two gates.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Quantum key distribution: no-cloning makes eavesdropping detectable — commercial QKD links exist.',
        'Randomness generation: measurement outcomes are certified-random — hardware random beacons run on this.',
        'Simulators and education: the Qiskit textbook lets anyone run these exact circuits on free cloud backends.',
        'Bench physics: T1 and T2 are the reported health metrics of every qubit announcement you will read.',
        'Algorithm design: every future algorithm in the next lesson is gates plus interference plus measurement.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, "tries every answer at once" — a superposition alone gives random answers; only engineered interference distinguishes anything, and designing it is the hard part. Second, thinking entanglement transmits information — it correlates outcomes, but no signal travels. Third, ignoring phases: a state and its phase-flipped twin differ in every interference experiment. Fourth, treating no-cloning as a lab failure — it is a theorem with a proof, and quantum error correction works only by navigating around it, not against it. Fifth, reading T1/T2 without asking about gate fidelities — a long-lived qubit with slow, inaccurate gates still cannot compute.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'qubit', def: 'A two-level quantum state α|0⟩+β|1⟩ — amplitudes and phases, not "both values at once".' },
        { term: 'Born rule', def: 'Measurement yields an outcome with probability equal to the amplitude\u2019s squared magnitude.' },
        { term: 'Bloch sphere', def: 'The unit sphere mapping every pure qubit state to a point — gates are rotations on it.' },
        { term: 'no-cloning theorem', def: 'Unknown quantum states cannot be copied — the constraint error correction navigates.' },
        { term: 'Hadamard gate', def: 'H — creates (and un-creates) equal superposition; the interference workhorse.' },
        { term: 'T1 / T2', def: 'Relaxation and dephasing times — the decoherence clocks every platform reports.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Measuring the qubit (3|0⟩ + 4|1⟩)/5 yields…',
          options: ['both answers at once', '1 with probability 16/25 and 0 with probability 9/25', 'always 1', 'a random phase'],
          answer: 1,
          explain: 'Born rule: probabilities are squared magnitudes — 9/25 and 16/25 here.',
        },
        {
          q: 'The no-cloning theorem says…',
          options: ['quantum gates are imperfect', 'an unknown quantum state cannot be copied', 'qubits cannot be measured twice', 'entanglement cannot be created'],
          answer: 1,
          explain: 'Copying unknown amplitudes is provably impossible — the theorem error correction navigates.',
        },
        {
          q: 'H on |0⟩, then CNOT (control 0, target 1), produces…',
          options: ['a product state', 'the Bell state (|00⟩+|11⟩)/√2', 'the state |11⟩', 'a random mixture'],
          answer: 1,
          explain: 'Hadamard then controlled-NOT manufactures the textbook entangled pair in two gates.',
        },
        {
          q: 'T2 measures…',
          options: ['how fast the excited state decays', 'how fast phase information scrambles', 'gate speed', 'refrigerator temperature'],
          answer: 1,
          explain: 'T1 is energy relaxation; T2 is dephasing — the two decoherence clocks.',
        },
      ] },
    ],
  },
  {
    id: 'emer-quantum-computing-without-hype',
    title: 'Quantum Computing Without the Hype',
    domain: 'Emerging & Interdisciplinary',
    field: 'Quantum Information',
    branch: 'Quantum Computation',
    tier: 'advanced',
    concepts: [
      'Qubits and superposition',
      'Measurement: one answer, squared amplitudes',
      'Interference as the engine of speedups',
      'Entanglement: stronger-than-classical correlation',
      'Unitary gates, decoherence, and error correction',
      'What is actually proven to win',
    ],
    words: 1119,
    readMins: 6,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Strip away the mysticism and a quantum computer is a machine that choreographs amplitudes — complex numbers whose squared magnitudes become probabilities — so that wrong answers interfere destructively and right ones survive. This advanced topic in Quantum Information, part of Emerging & Interdisciplinary fields, covers qubits, measurement, entanglement, and decoherence in the Quantum Computation branch with honest math: what is genuinely proven (Shor\'s factoring, Grover\'s search, quantum simulation), what is engineering grind, and what is marketing. The result is a working filter for quantum news.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Banks and governments are already migrating cryptography because of this field\'s proven theorems, not its press releases. Knowing which claims are physics and which are fundraising changes how you read every quantum headline for the next decade.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A classical bit is 0 or 1; a qubit\'s state is a weighted combination α|0⟩ + β|1⟩, with complex amplitudes α and β obeying |α|² + |β|² = 1. Describing n qubits takes 2ⁿ amplitudes — a billion numbers for thirty qubits — which is why simulating quantum systems classically explodes.',
      },
      {
        kind: 'para',
        text: 'Measure a qubit and you get 0 with probability |α|² or 1 with |β|² — one classical answer, and the superposition is gone. You cannot read the amplitudes directly, and the no-cloning theorem forbids copying an unknown state to try. Algorithms must therefore steer amplitude toward outcomes you would be happy to measure.',
      },
      {
        kind: 'para',
        text: 'Quantum gates rotate amplitudes so paths to wrong answers cancel each other while paths to right answers reinforce — the same mathematics that lets a guitar string hold a stable note. This is the honest version of checking all answers in parallel: the parallelism is real, but interference is the only way to cash it into a single useful readout.',
      },
      {
        kind: 'para',
        text: 'Two qubits can share a state with no independent description of either; measure one and the other\'s statistics are fixed, with correlations stronger than any local classical model — the content of Bell tests, honored with the 2022 physics Nobel. Entanglement enables quantum key distribution and teleportation of states, yet transmits nothing faster than light: each side alone sees pure randomness.',
      },
      {
        kind: 'para',
        text: 'Quantum gates are reversible, probability-preserving rotations, and a small fixed set — Hadamard, T, CNOT — is universal, the analogue of classical NAND logic. The enemy is decoherence: stray interactions act as unwanted measurements, leaking the state away in microseconds to milliseconds. The threshold theorem promises that below some error rate, error correction scales — at the cost of hundreds to thousands of physical qubits per reliable logical one.',
      },
      {
        kind: 'para',
        text: 'Peter Shor\'s 1994 factoring algorithm breaks RSA and elliptic-curve cryptography on a large fault-tolerant machine — the reason post-quantum cryptography standards exist today. Lov Grover\'s 1996 search finds a marked item in about √N steps: real, quadratic, not magical. And Feynman\'s founding 1982 motivation — simulating quantum chemistry — remains the most defensible long-term payoff.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Qubit state and the Born rule',
        latex: '|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle, \\quad |\\alpha|^2 + |\\beta|^2 = 1',
        meaning: 'Amplitudes α and β are complex; measuring yields 0 with probability |α|² and 1 with |β|².',
      },
      {
        kind: 'formula',
        name: 'Grover iteration count',
        latex: 'R \\approx \\frac{\\pi}{4}\\sqrt{\\frac{N}{M}}',
        meaning: 'About π/4 times √(N/M) oracle calls to find one of M marked items among N — quadratic, not exponential, speedup.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: searching an unstructured database of 1,000,000 entries for the single correct record — how many queries does Grover\'s algorithm need versus a classical scan?',
          'Recall the governing formula: roughly (π/4)·√(N/M) iterations for N items and M solutions.',
          'Apply: with N = 10⁶ and M = 1, √N = 1,000, so R ≈ (π/4)(1,000) ≈ 785 iterations, versus a classical average of N/2 = 500,000 lookups.',
          'State the result: about 640 times fewer queries — genuinely faster, but only quadratically, so the advantage grows with N and only fault-tolerant hardware realizes it at scale.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Cryptography: institutions are migrating now to post-quantum standards because of Shor\'s theorem, years before large machines exist.',
          'Quantum simulation of molecules for batteries, catalysts, and drug candidates — the field\'s founding motivation.',
          'Optimization and sampling on annealers — genuinely quantum hardware, with contested real-world advantage so far.',
          'Quantum sensing and atomic clocks — not computing, but the same physics already improving navigation and imaging.',
          'Quantum key distribution for links where eavesdropping is physically detectable.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The champion misreading is that a qubit stores 2ⁿ classical bits — amplitudes exist, but measurement returns one answer, period. Quantum computers break all encryption today is false: Shor needs large fault-tolerant machines that do not yet exist, and post-quantum schemes already resist them. And entanglement enabling faster-than-light communication contradicts the theory\'s structure — each local measurement alone looks like pure noise.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Qubit', def: 'A two-level quantum system whose state is a superposition weighted by amplitudes.' },
          { term: 'Amplitude', def: 'A complex number whose squared magnitude gives an outcome\'s probability.' },
          { term: 'Born rule', def: 'Measurement yields an outcome with probability equal to its squared amplitude.' },
          { term: 'Entanglement', def: 'A joint state with no independent description of its parts; stronger-than-classical correlation.' },
          { term: 'Unitary gate', def: 'A reversible, probability-preserving operation — the quantum analogue of a logic gate.' },
          { term: 'Decoherence', def: 'Loss of quantum information to environmental interaction — the central engineering enemy.' },
          { term: 'NISQ', def: 'Noisy intermediate-scale quantum: today\'s era of small, error-laden processors.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A qubit has amplitude 0.6 for |0⟩ and 0.8 for |1⟩. Measuring it yields:',
            options: ['0 with certainty', '1 with probability 0.64', 'Both values simultaneously forever', '0 with probability 0.6 and 1 with probability 0.8'],
            answer: 1,
            explain: 'The Born rule: probability of |1⟩ is |0.8|² = 0.64, and probabilities must sum to one.',
          },
          {
            q: 'The engine of quantum speedups is best described as:',
            options: ['Trying every answer in parallel and reading them all', 'Interference canceling amplitudes of wrong answers', 'Running classical code on colder hardware', 'Entanglement transmitting answers instantly'],
            answer: 1,
            explain: 'Algorithms rotate amplitudes so wrong-answer paths cancel and right ones add before a single measurement.',
          },
          {
            q: 'Grover\'s algorithm searches N items in about:',
            options: ['Constant time', 'log N steps', '√N steps', 'N steps'],
            answer: 2,
            explain: 'A quadratic speedup: roughly (π/4)√N iterations — about 785 for a million items.',
          },
          {
            q: 'The no-cloning theorem states that:',
            options: ['Qubits cannot be moved between machines', 'An unknown quantum state cannot be copied perfectly', 'Errors cannot be corrected', 'Classical bits cannot encode amplitudes'],
            answer: 1,
            explain: 'Perfect copying of unknown states is forbidden — which is why error correction must encode information across many qubits.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: linear algebra comfort — vectors, complex numbers, matrices — and basic algorithmic thinking. Next: single-qubit gates and Deutsch\'s first algorithm, then Shor\'s algorithm properly, then quantum error correction and complexity classes.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'A qubit state is α|0⟩ + β|1⟩ with |α|² + |β|² = 1.',
          'Measurement returns one outcome — the Born rule, no peeking.',
          'Speedups come from interference, not parallel answers.',
          'Decoherence is the enemy; error correction pays a large hardware overhead.',
          'Proven wins: Shor for factoring, Grover for √N search, and quantum simulation.',
        ],
      },
    ],
  },
]

/**
 * Knowledge Universe — Quantum Information — Chapter 02: Algorithms & Hardware
 * 1 lesson · ~1,129 words
 * field: Quantum Information
 * legacy sources: x51-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Algorithms & Hardware]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 quantum-algorithms-hardware — Quantum Algorithms and Hardware Platforms
 */
import type { KnowledgeTopic } from '../../types'

export const quantumInformationCh02: KnowledgeTopic[] = [
  {
    id: 'quantum-algorithms-hardware',
    title: 'Quantum Algorithms and Hardware Platforms',
    domain: 'Emerging & Interdisciplinary',
    field: 'Quantum Information',
    branch: 'Algorithms & Hardware',
    tier: 'core' as const,
    concepts: [
      'Interference is the algorithm',
      'Shor 1994: factoring and the cryptography stakes',
      'Grover 1996: the square-root search speedup',
      'Error correction: Shor\u2019s code to the surface code',
      'Hardware: transmons, trapped ions, neutral atoms, photonics, spin qubits',
      'The NISQ era and what it can (and cannot) do',
      'Post-quantum cryptography as the countermove',
    ],
    words: 1129,
    readMins: 6,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'Gates are the alphabet; this lesson is the literature. A quantum algorithm is a deliberate interference choreography — amplitudes arranged so wrong answers cancel — run on hardware that is fighting decoherence the whole time. Between the two sits error correction, the field\u2019s central invention, which turns thousands of fragile physical qubits into one reliable logical qubit.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Two dates bracket the stakes: 1994, when Peter Shor showed a quantum computer could factor integers and thereby break the public-key cryptography the internet runs on; and 2024, when NIST standardized the post-quantum algorithms meant to replace it. The entire field\u2019s funding, urgency and paranoia flow through that arc.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The algorithms first. Shor\u2019s algorithm (1994) reduces factoring N to finding the period of a modular function, then uses the quantum Fourier transform to read that period from interference — exponential speedup over the best known classical methods. Its consequence: RSA and elliptic-curve cryptography fall to a large fault-tolerant quantum computer. Grover\u2019s algorithm (1996) searches an unstructured space in √N queries instead of N — a quadratic speedup, provably the best possible for unstructured search, with amplitude amplification as its engine. Quantum simulation is the third pillar and the original one (Feynman, 1982): simulating molecules and materials on classical machines costs exponential resources, while a quantum computer simulates quantum systems natively — the catalyst-chemistry dream (nitrogen fixation\u2019s FeMoco) that motivates much of the hardware race.',
      },
      {
        kind: 'para',
        text: 'Error correction is what makes those algorithms more than theory. You cannot copy qubits (no-cloning), so classical repetition fails. Shor\u2019s 1995 nine-qubit code showed a way around: encode ONE logical qubit redundantly across many physical qubits and measure only PARITY relationships (stabilizers) that reveal errors without revealing the encoded data. The surface code is the modern standard: qubits on a 2-D lattice, nearest-neighbor checks, and a tolerable physical error rate near one percent — below which adding qubits suppresses the logical error exponentially. The catch, the threshold theorem\u2019s price tag: today\u2019s hardware needs hundreds to thousands of physical qubits per logical qubit, which is why useful Shor\u2019s remains a machine of millions of physical qubits.',
      },
      {
        kind: 'para',
        text: 'The hardware race runs on five platforms. Superconducting transmons (IBM, Google): microwave resonant circuits on chips, gated in nanoseconds, coherence tens to hundreds of microseconds, but requiring dilution refrigerators near 15 millikelvin and millikelvin-stable control wiring — the scale leaders (hundreds to ~1000+ coupled qubits). Trapped ions (Quantinuum, IonQ): atoms levitated in electromagnetic traps, gates tens of microseconds but exquisitely accurate, coherence minutes, all-to-all connectivity — the fidelity leaders. Neutral atoms (QuEra, Pasqal): optical tweezers arranging hundreds of atoms in reconfigurable arrays, Rydberg-state gates, rapid scaling. Photonics (Xanadu, PsiQuantum): flying qubits at room temperature, natural for networking, gates probabilistic. Silicon spin qubits: qubits in the transistors of the existing fab economy — tiny, slow to mature, potentially massive in scale.',
      },
      {
        kind: 'para',
        text: 'Where the field actually stands: the NISQ era — Noisy Intermediate-Scale Quantum (Preskill\u2019s coinage, 2018) — devices of tens to a thousand-plus physical qubits without full error correction. Google\u2019s 2019 Sycamore sampling experiment claimed the first quantum advantage over classical simulation; improved classical algorithms have since chewed at the specific claim, which is exactly how the frontier should work. Today\u2019s honest use cases are research: quantum error-correction demonstrations, small simulations, benchmarking. Tomorrow\u2019s require the millions of qubits of fault tolerance. And the countermove is already deployed: NIST finalized its first post-quantum cryptography standards in 2024 (ML-KEM and kin), and the migration — replacing RSA/ECC across the internet — is a decade-scale project running in parallel with the hardware.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Question: what does Grover\u2019s algorithm do to a 4-item search, and why is one iteration enough?',
          'Classical worst case: four queries. Grover prepares the uniform superposition over all four with one Hadamard round.',
          'One Grover iteration (oracle phase-flip of the marked item, then diffusion) rotates the amplitude distribution toward the answer: the marked amplitude grows from 1/2 to 1.',
          'Measure: the answer appears with near certainty after ONE oracle query — the √N pattern (here √4 = 2 → of order 1 iteration) that scales to databases no classical machine could search this way.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Cryptography migration: NIST\u2019s 2024 standards (ML-KEM, ML-DSA) are being deployed now because "harvest now, decrypt later" adversaries record traffic today.',
        'Cloud access: IBM, IonQ and Quantinuum quantum processors run real circuits from laptops — the algorithms here are testable tonight.',
        'Chemistry and materials: small-molecule simulations (and battery electrolyte studies) are the first commercial beachhead.',
        'Optimization research: quantum and quantum-inspired annealing compete on logistics portfolios.',
        'National programs: every major economy now funds qubit platforms — the hardware race is infrastructure policy.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, "Shor breaks encryption today" — it needs millions of physical qubits at full error correction; the NISQ era cannot run it, which is exactly why the cryptography migration has a decade of runway. Second, "quantum computers speed up everything" — the proven speedups are specific (period-finding, unstructured search, simulation); for most tasks classical wins. Third, quoting qubit counts as the headline — a thousand noisy qubits can be worth less than fifty good ones; fidelity and error correction matter more. Fourth, ignoring the stack: dilution refrigerators, control electronics and cryo-wiring are half the engineering. Fifth, treating advantage claims as settled — classical algorithms keep improving, and that contest is healthy.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Shor\u2019s algorithm', def: 'Quantum period-finding that factors integers — the reason post-quantum cryptography exists.' },
        { term: 'Grover\u2019s algorithm', def: '√N unstructured search via amplitude amplification — provably optimal for its class.' },
        { term: 'surface code', def: 'The leading 2-D error-correcting code: stabilizer checks on a lattice, ~1% physical error tolerance.' },
        { term: 'logical qubit', def: 'One reliable encoded qubit built from many noisy physical ones — the real currency of fault tolerance.' },
        { term: 'transmon', def: 'The superconducting qubit circuit of the scale leaders — fast, microwave-controlled, dilution-fridge-cooled.' },
        { term: 'NISQ', def: 'Noisy Intermediate-Scale Quantum — the current era of useful but uncorrected devices (Preskill, 2018).' },
        { term: 'ML-KEM', def: 'NIST\u2019s 2024-standardized post-quantum key-encapsulation scheme — the replacement for RSA/ECC key exchange.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Shor\u2019s algorithm threatens RSA because it…',
          options: ['guesses passwords faster', 'factors large integers exponentially faster than known classical methods', 'breaks AES directly', 'transmits keys securely'],
          answer: 1,
          explain: 'RSA\u2019s security rests on factoring being hard; Shor makes it easy on a large fault-tolerant machine.',
        },
        {
          q: 'Grover\u2019s speedup for unstructured search is…',
          options: ['exponential', 'quadratic (√N)', 'linear', 'none'],
          answer: 1,
          explain: '√N queries instead of N — and provably the best any approach can do unstructured.',
        },
        {
          q: 'Why can\u2019t error correction just copy a qubit three times like a classical bit?',
          options: ['Copying is too slow', 'No-cloning forbids copying unknown quantum states', 'Errors are too rare', 'Measurement is free'],
          answer: 1,
          explain: 'Stabilizer measurement checks parities without revealing — or needing to copy — the encoded state.',
        },
        {
          q: 'The NISQ era is defined by…',
          options: ['fault-tolerant machines', 'noisy intermediate-scale devices without full error correction', 'room-temperature qubits', 'quantum internet'],
          answer: 1,
          explain: 'Preskill\u2019s 2018 name for today\u2019s useful-but-noisy hundreds-of-qubits machines.',
        },
      ] },
    ],
  },
]

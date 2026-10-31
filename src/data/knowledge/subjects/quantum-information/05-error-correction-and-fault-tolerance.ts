/**
 * Knowledge Universe — Quantum Information — Chapter 05: Error Correction & Fault Tolerance
 * 2 lessons · ~3,257 words
 * field: Quantum Information
 * legacy sources: x59-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Error Correction & Fault Tolerance]
 *
 * Lessons (snapshot at reorganization):
 *   05.1 quantum-error-correction-codes — Quantum Error Correction: Measuring Errors Without Reading the Data
 *   05.2 quantum-fault-tolerance-scale — Fault Tolerance: From Physical to Logical Qubits
 */
import type { KnowledgeTopic } from '../../types'

export const quantumInformationCh05: KnowledgeTopic[] = [
  {
    id: 'quantum-error-correction-codes',
    title: 'Quantum Error Correction: Measuring Errors Without Reading the Data',
    domain: 'Emerging & Interdisciplinary',
    field: 'Quantum Information',
    branch: 'Error Correction & Fault Tolerance',
    tier: 'advanced',
    concepts: [
      'why classical repetition fails: no-cloning revisited',
      'syndrome measurement extracts the error, not the data',
      'the three-qubit bit-flip code, step by step',
      'phase flips and Shor\'s nine-qubit code',
      'stabilizers: the code as a commuting Pauli group',
      'the surface code: a planar lattice of checks',
      'the threshold theorem and Willow\'s Λ = 2.14',
    ],
    words: 1661,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'Two chapters of this book built the promise — qubits, gates, algorithms — and one sentence named the obstacle: error correction is what makes the algorithms more than theory. This lesson opens that sentence. The obstacle is unlike anything in classical engineering. A classical bit can be copied (send it three times, vote), inspected (look and see if it flipped) and corrected at leisure. A qubit can be neither copied — the no-cloning theorem of the qubits-and-gates chapter — nor inspected, because measuring it destroys the superposition you were computing on. Yet decoherence never stops: every stray interaction is a partial measurement leaking the state away in microseconds to milliseconds. Quantum error correction (QEC) escapes this trap, and the escape route is the most counterintuitive trick in the field.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Without QEC, a quantum computer is a very expensive random-number generator: gates of 99.9% fidelity compound into garbage after a few hundred operations. With QEC below threshold, errors can be suppressed exponentially — the only known route from today\'s noisy chips to machines that can factor, simulate chemistry, or run any of the algorithms this book\'s earlier chapters described.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The escape begins with entanglement. Encode one logical qubit across several physical qubits: the bit-flip code spreads α|0⟩ + β|1⟩ into α|000⟩ + β|111⟩ — the information now lives in the CORRELATIONS, not in any single qubit. A bit flip on any one member carries the state to, say, α|010⟩ + β|101⟩. Now measure not the data but the PARITIES of neighbouring pairs — the observables Z₁Z₂ and Z₂Z₃. Each returns ±1, and the pattern of signs (the syndrome) identifies WHICH qubit flipped, because the three codewords differ in exactly these parities. Crucially, the measurement is compatible with the encoded superposition: α and β are never touched, so the quantum information survives the check. You have measured an error without reading the data — the trick classical redundancy cannot perform and QEC cannot live without.',
      },
      {
        kind: 'para',
        text: 'Run the simplest case end to end. Encode |ψ⟩ = α|0⟩ + β|1⟩ → α|000⟩ + β|111⟩. A stray X flips qubit 2: the state becomes α|010⟩ + β|101⟩. Measure Z₁Z₂: qubits 1 and 2 now differ (0 vs 1, 0 vs 1) → result −1. Measure Z₂Z₃: they differ too → −1. Syndrome (−,−) points at the middle qubit; apply X₂, restoring α|000⟩ + β|111⟩. Had the syndrome been (−,+), qubit 1 was the culprit; (+,−), qubit 3. Four possible syndromes, four recoveries, no measurement of α or β anywhere. The same measurement can be repeated indefinitely — error correction is continuous nursing, not a one-time shield.',
      },
      {
        kind: 'para',
        text: 'Bit flips are only half the disease. A phase flip — the Z operator — maps α|0⟩+β|1⟩ to α|0⟩−β|1⟩, changing the SIGN structure of the superposition. It has no classical analogue (a classical bit cannot be "minus itself") and the three-qubit repetition code is blind to it. Shor\'s 1995 nine-qubit code was the breakthrough: by concatenating a phase-flip repetition around a bit-flip repetition, it corrects an arbitrary error on any single qubit. The insight that generalizes: any quantum error, however continuous it looks, collapses under measurement to a discrete X, Z, Y or no-error outcome on a given qubit — so discrete codes suffice against continuous noise. The stabilizer formalism of Gottesman systematized this: a code is a group of commuting Pauli operators whose eigenvalues are checked; syndromes are their measurement outcomes; corrections are the Paulis that fit the pattern. The CSS construction (Calderbank–Shor–Steane) builds quantum codes directly from pairs of classical ones.',
      },
      {
        kind: 'para',
        text: 'The code that actually runs on hardware is the surface code, chosen for engineering reasons the older codes lack: every check involves only NEAREST NEIGHBOURS on a two-dimensional lattice, exactly matching how chips are wired. Data qubits sit on a grid; measure qubits sit between them, each continuously checking one X-parity or one Z-parity of its four neighbours. The "distance" d of the code — the size of the patch — determines how many physical errors it can absorb: a distance-d surface code corrects up to ⌊(d−1)/2⌋ arbitrary errors. A rotated distance-7 patch needs 49 data qubits plus 36 measure qubits: 105, precisely the layout of Google\'s Willow chip. Logical qubits can be moved, measured and braided across the lattice; the cost is that ONE logical qubit consumes the whole patch.',
      },
      {
        kind: 'para',
        text: 'The threshold theorem is the licence for everything else: if the physical error rate per operation stays below a threshold p_th (near 1% for the surface code), then increasing the code distance suppresses the logical error exponentially. In 2024 Willow demonstrated this below-threshold scaling in the open: stepping the code from distance 3 to 5 to 7 (3×3 → 5×5 → 7×7 patches) cut the logical error rate by a measured factor Λ = 2.14 ± 0.02 at each step, and the distance-7 logical memory outlived the best physical qubit on the chip. That single number — logical errors HALVING per size step — is the experimental proof that scaling up makes things better, not worse, and it converted the threshold theorem from theory to an engineering curve.',
      },
      {
        kind: 'para',
        text: 'The catch is arithmetic. A useful computation needs logical error rates around 10⁻¹² or better per operation, and at realistic physical error rates that means code distances in the twenties — roughly 2d² physical qubits per logical one, so a thousand physical qubits for each logical qubit. Extrapolations for factoring RSA-2048 (Gidney and Ekerå\'s widely cited estimate) land near twenty million physical qubits running for hours. None of this is hidden: it is the field\'s open ledger, and it is why the hardware roadmaps of the previous chapter count logical qubits, not physical ones. The decoder — classical software that must consume the syndrome stream in real time and infer corrections faster than errors arrive — has become its own engineering discipline, as vital as the qubits it guards.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Logical error suppression',
        latex: 'p_{L} \\approx A\\left(\\frac{p}{p_{th}}\\right)^{(d+1)/2}',
        meaning: 'Below threshold, logical error falls exponentially in code distance d; Willow measured the exponent-2 step factor Λ = 2.14 for the surface code.',
      },
      {
        kind: 'formula',
        name: 'Surface-code distance capability',
        latex: '\\text{corrects } \\lfloor (d-1)/2 \\rfloor \\text{ errors with } \\sim 2d^{2} \\text{ physical qubits}',
        meaning: 'A distance-7 patch (105 qubits on Willow\'s rotated layout) absorbs any 3 arbitrary physical errors.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how many errors a distance-7 surface code corrects, and the syndrome outcome if errors strike data qubits 1 and 4 (adjacent to the same X-check).',
          'Capability: ⌊(7−1)/2⌋ = 3 — any three arbitrary (X, Z or Y) errors are correctable.',
          'Two errors within one check\'s support flip that check\'s parity twice — no net change — but each touches OTHER checks, so the combined syndrome pattern still isolates both locations uniquely.',
          'State the result: the pair is corrected. The lattice geometry, not luck, is what makes multi-error recovery decodable — and it is why the surface code\'s local checks beat older global-measurement codes on real chips.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Google\'s Willow (2024): below-threshold scaling with Λ = 2.14 per distance-2 step, logical memory beating physical',
          'IBM and academic qLDPC codes packing many logical qubits per physical qubit for memory',
          'Neutral-atom arrays demonstrating tens of logical qubits with reconfigurable connectivity',
          'Trapped-ion logical-qubit demonstrations with the field\'s best two-qubit fidelities',
          'Real-time decoders (minimum-weight matching, union-find) running on FPGA and GPU control stacks',
          'Post-quantum migration planning: "harvest-now, decrypt-later" deadlines set by QEC progress',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'QEC does not violate no-cloning — nothing is copied; information lives in entangled correlations. Syndrome measurement must never touch the data observables — checking a data qubit directly would collapse the computation. Below threshold is necessary but not sufficient: correlated events (cosmic-ray hits, leakage out of the computational subspace) can defeat independent-error assumptions. And the overhead is not a footnote: a thousand physical qubits per logical one is the price of admission.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Syndrome', def: 'The pattern of check outcomes (eigenvalues of stabilizers) that identifies the error without revealing the encoded data.' },
          { term: 'Stabilizer', def: 'A commuting Pauli operator left unchanged by the codewords; the code is defined by the group of such operators.' },
          { term: 'Bit-flip / phase-flip code', def: 'Repetition codes protecting against X-type or Z-type errors; concatenated, they protect both (Shor\'s code).' },
          { term: 'CSS code', def: 'Construction building a quantum code from two classical codes, one for bit flips, one for phase flips.' },
          { term: 'Surface code', def: 'A planar lattice code with nearest-neighbour checks — the practical standard for superconducting hardware.' },
          { term: 'Code distance', def: 'The smallest error that maps one codeword to another; a distance-d code corrects ⌊(d−1)/2⌋ arbitrary errors.' },
          { term: 'Threshold theorem', def: 'Below a critical physical error rate, increasing code size suppresses logical errors exponentially.' },
          { term: 'Decoder', def: 'Real-time classical software turning syndrome streams into correction decisions.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Syndrome measurement is safe for the quantum data because:',
            options: [
              'it is performed very quickly',
              'the measured operators (parities) commute with the encoded information, so α and β are never revealed',
              'the data qubits are cooled first',
              'errors are impossible during measurement',
            ],
            answer: 1,
            explain: 'The checks distinguish which codeword the state lies in without distinguishing α|000⟩ + β|111⟩\'s components — the error is read, the data is not.',
          },
          {
            q: 'The three-qubit bit-flip code fails against phase flips because:',
            options: [
              'phase flips are too rare to matter',
              'all three codewords share the same phase parities — Z errors commute with the checks and go undetected',
              'phase flips cannot occur physically',
              'measurement destroys the code',
            ],
            answer: 1,
            explain: 'Repetition in the Z basis is blind to Z errors; Shor\'s nine-qubit code adds the missing basis protection.',
          },
          {
            q: 'The surface code won hardware adoption chiefly because:',
            options: [
              'it corrects the most errors per qubit',
              'its checks are strictly nearest-neighbour on a 2-D lattice, matching chip wiring',
              'it needs no measurements',
              'it works at room temperature',
            ],
            answer: 1,
            explain: 'Local checks suit planar fabrication and fast control; older codes needing global measurements do not map onto hardware.',
          },
          {
            q: 'Willow\'s Λ = 2.14 result demonstrated that:',
            options: [
              'physical qubits finally outperform transistors',
              'each distance-2 step roughly halves the logical error rate — exponential suppression below threshold, in hardware',
              'Shor\'s algorithm now runs at scale',
              'error correction is no longer needed',
            ],
            answer: 1,
            explain: 'The distance 3→5→7 ladder cut logical errors per step — the experimental threshold-theorem curve the field had been waiting for.',
          },
        ],
      },
    ],
  },
  {
    id: 'quantum-fault-tolerance-scale',
    title: 'Fault Tolerance: From Physical to Logical Qubits',
    domain: 'Emerging & Interdisciplinary',
    field: 'Quantum Information',
    branch: 'Error Correction & Fault Tolerance',
    tier: 'advanced',
    concepts: [
      'gates must be protected, not just memory',
      'transversal gates and the Eastin–Knill theorem',
      'magic state distillation for the missing T gate',
      'error budgets: choosing code distance from algorithm size',
      'the overhead ladder from NISQ to useful machines',
      'qLDPC codes and the memory-overhead squeeze',
      'roadmaps: what is demonstrated, what remains',
    ],
    words: 1596,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The error-correction lesson protected a qubit AT REST — a memory. But a computer is not a memory; it computes, and every gate is a new chance for failure. Worse, gates are how errors SPREAD: a CNOT between two data qubits copies a bit flip on the control straight onto the target, and a single physical fault can contaminate an entire logical block. Fault tolerance is the discipline of computing ON encoded data such that errors stay contained: no single physical fault anywhere — in the gates, the measurements, even the classical control — may grow into an uncorrectable logical error. It is the bridge between the codes of the previous lesson and the algorithms of the algorithms chapter, and its arithmetic sets the size of every serious quantum roadmap.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The gap between today\'s chips and useful machines is not a factor of two or ten — it is six orders of magnitude in qubit count and several in gate quality. Fault tolerance is the framework that turns that gap into an engineering schedule instead of a mystery: it says exactly how many physical qubits and gates a given computation needs, given measured hardware error rates. Roadmaps from Google, IBM and the atom-array teams are fault-tolerance arithmetic made public.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The cleanest fault-tolerant construction is the transversal gate: apply the logical gate BITWISE, one physical gate per qubit across separate code blocks, so no physical interaction ever connects two qubits of the same block. An error on one physical wire then damages at most one qubit of a block — exactly the situation the code corrects. Transversal CNOT, H, and Pauli operations come free on the surface code. The limit is the Eastin–Knill theorem: no quantum error-correcting code admits a UNIVERSAL transversal gate set. Something is always missing — on the surface code\'s standard encoding, the T gate (the diagonal 45° rotation that, with Hadamards and CNOTs, completes universality).',
      },
      {
        kind: 'para',
        text: 'The missing gate is supplied by magic states. A T gate can be applied by CONSUMING a specially prepared ancillary state — the magic state |T⟩ = T|+⟩ — through a teleportation-like injection circuit. The problem: preparing |T⟩ with the accuracy fault tolerance demands is itself a computational task. The solution is magic state distillation: consume many noisy copies, run them through a verification circuit, and emit fewer copies with dramatically lower error — one clean state out of a dozen noisy ones, repeatable to any purity. The consequence is architectural and sobering: distillation factories dominate the space-time budget of fault-tolerant algorithms, often holding most of the machine\'s qubits at any moment. When you hear that a useful computation needs "millions of physical qubits", the factories are where most of them live.',
      },
      {
        kind: 'para',
        text: 'The total design is then an error budget, and it is honest arithmetic. A surface-code logical qubit at physical error p runs a logical error roughly p_L ≈ 0.1 × (100p)^((d+1)/2) per operation (Fowler\'s standard fit near threshold). An algorithm performing N logical operations needs per-operation error comfortably below 1/N, or failures accumulate. Set the target, solve for the distance d, then pay the ≈2d² physical qubits per logical qubit — plus the factory. That chain, measured hardware error to code distance to qubit count to wall-clock time, is how resource estimates like Gidney–Ekerå\'s twenty-million-qubit factoring scenario are produced, and how roadmaps translate chip error rates into calendar years.',
      },
      {
        kind: 'para',
        text: 'The overhead ladder has recognizable rungs. Rung one: NISQ — the algorithms chapter\'s territory, no error correction at all, useful only for tasks robust to noise. Rung two: below-threshold demonstration — Willow\'s distance-7 memory, one logical qubit better than its best physical part, 2024. Rung three: small logical processors — atom arrays and trapped ions demonstrating a few to a few-dozen logical qubits with full gate sets (neutral-atom teams crossed the "tens" line in 2023–2024; trapped-ion and superconducting teams demonstrated logical two-qubit gates and small algorithms on encoded data). Rung four: early fault tolerance — hundreds of logical qubits running tens of millions of logical gates, the publicly announced target of superconducting roadmaps around the end of the decade. Rung five: the million-plus-logical machines of chemistry and cryptanalysis. Each rung has been reached by the platform that said it would; none has skipped the arithmetic.',
      },
      {
        kind: 'para',
        text: 'The overhead squeeze is driving the field\'s newest idea wave: better CODES. The surface code spends 2d² physical qubits per logical — robust but greedy. Quantum low-density-parity-check (qLDPC) codes — in the highlight, IBM\'s 2024 "gross code" — pack TWELVE logical qubits into 288 physical ones with error protection comparable to a much larger surface-code footprint, at the price of long-range connections a modular chip must now provide. Memory-overhead improvements of an order of magnitude are on the table, which is why every serious architecture now pairs a code choice with a wiring strategy: superconducting modules with microwave links, trapped ions with shuttling, atoms with atom moves. The decoder problem (the previous lesson) remains the pacing item: at distance 25, syndrome decisions must be made in microseconds, forever.',
      },
      {
        kind: 'para',
        text: 'What fault tolerance BUYS, stated plainly: factoring large integers on a schedule that threatens deployed public-key cryptography (hence the post-quantum migration already underway); quantum simulation of strongly correlated chemistry — catalysts, batteries, high-temperature superconductors — beyond classical reach; and unstructured search and sampling speedups of varying depth. What it does NOT change: the algorithms chapter\'s honest boundaries — no general exponential speedup for everything, and the classical computing world keeps moving too. The mature position, and the one this book takes: fault tolerance converts quantum computing\'s grand questions into scheduled engineering, which is exactly the stage — hard, expensive, but no longer miraculous — where technologies get built.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Surface-code error budget (Fowler fit)',
        latex: 'p_{L} \\approx 0.1\\,(100\\,p)^{(d+1)/2}',
        meaning: 'Logical error per operation from physical error p and code distance d — the equation that turns algorithm requirements into chip specifications.',
      },
      {
        kind: 'formula',
        name: 'Algorithm feasibility condition',
        latex: 'N \\cdot p_{L} \\ll 1',
        meaning: 'A computation of N logical operations succeeds only when the per-operation logical error is far below 1/N — the budget behind every roadmap number.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the surface-code distance needed to run 10⁹ logical operations at physical error p = 10⁻³, and the qubit cost.',
          'Set the per-operation budget: N·p_L ≤ 1 with margin → p_L ≈ 10⁻¹².',
          'Solve 0.1 × (100 × 10⁻³)^((d+1)/2) = 0.1 × (0.1)^((d+1)/2) ≤ 10⁻¹² → (d+1)/2 ≥ 12 → d ≥ 23.',
          'Convert to hardware: ≈ 2d² ≈ 1,058 physical qubits per logical qubit.',
          'Interpret: one hundred logical qubits — a small but genuinely fault-tolerant processor — costs about 10⁵ physical qubits plus distillation factories. Scale the same arithmetic to cryptanalysis-scale N and the famous millions fall out.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Roadmap engineering: Google, IBM and atom-array teams publishing logical-qubit milestones against this arithmetic',
          'qLDPC memory demonstrations (IBM 2024: 12 logical in 288 physical) attacking the overhead squeeze',
          'Magic-state factory design as the dominant sub-system of fault-tolerant architectures',
          'Cryptographic migration calendars (post-quantum standards deployment) keyed to factoring feasibility',
          'Quantum chemistry programs targeting catalysts and materials on early fault-tolerant machines',
          'Control-stack co-design: FPGAs/GPUs decoding syndromes in real time at distance 20+',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not declare error correction "solved" because memory works: computation adds gate errors, leakage and the magic-state bill. Do not compare qubit counts across platforms — distance, error rate and connectivity all differ, and only the error budget is meaningful. Do not ignore the decoder: real-time classical processing is a hard systems constraint, not a footnote. And treat timeline extrapolations as the arithmetic they are: one measured below-threshold result, however historic, is rung two of five.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Fault tolerance', def: 'Designing encoded computation so no single physical fault becomes an uncorrectable logical error.' },
          { term: 'Transversal gate', def: 'A logical gate applied bitwise across code blocks — automatically fault-tolerant, never universal (Eastin–Knill).' },
          { term: 'Magic state', def: 'A prepared ancillary state whose consumption implements the missing non-Clifford gate (typically T).' },
          { term: 'Magic state distillation', def: 'Converting many noisy magic states into fewer, far cleaner ones — the space-time cost centre of fault-tolerant algorithms.' },
          { term: 'Error budget', def: 'The chain from algorithm size to per-operation logical error to code distance to physical qubit count.' },
          { term: 'qLDPC code', def: 'Quantum low-density-parity-check code family offering much lower memory overhead than the surface code (e.g. IBM\'s 12-in-288 gross code, 2024).' },
          { term: 'Logical qubit', def: 'The encoded, error-corrected qubit that algorithms use — counted, not physical qubits, in serious roadmaps.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The Eastin–Knill theorem states that:',
            options: [
              'no code can correct gate errors',
              'no quantum code has a universal set of transversal gates, so supplements like magic states are required',
              'all gates must be measured',
              'physical qubits cannot be encoded',
            ],
            answer: 1,
            explain: 'Transversality alone can never reach universality; the missing gate arrives via magic-state injection and distillation.',
          },
          {
            q: 'Magic state distillation exists to:',
            options: [
              'cool the dilution refrigerator',
              'produce high-purity |T⟩ ancillas so the missing non-Clifford gate can be applied fault-tolerantly',
              'entangle two chips',
              'decode syndromes faster',
            ],
            answer: 1,
            explain: 'Distillation converts many noisy copies into few clean ones — the price of universality, and the machine\'s biggest factory.',
          },
          {
            q: 'Doubling the number of logical operations in an algorithm:',
            options: [
              'doubles the required code distance',
              'tightens the per-operation error budget, pushing the required code distance up by a few rungs',
              'has no effect on the code',
              'halves the physical qubit cost',
            ],
            answer: 1,
            explain: 'N·p_L ≪ 1 is the constraint; larger N demands lower p_L, hence larger d and ≈2d² physical qubits per logical.',
          },
          {
            q: 'The appeal of qLDPC codes is that they:',
            options: [
              'work at room temperature',
              'encode many logical qubits per physical footprint, attacking the overhead that limits fault-tolerant machines',
              'eliminate measurement',
              'remove the need for decoders',
            ],
            answer: 1,
            explain: 'IBM\'s 2024 gross code fits 12 logical into 288 physical — memory overheads an order of magnitude better than surface-code patches.',
          },
        ],
      },
    ],
  },
]

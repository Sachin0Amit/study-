/**
 * Knowledge Universe — Quantum Information — Chapter 03: Quantum Communication & Networks
 * 2 lessons · ~3,428 words
 * field: Quantum Information
 * legacy sources: x61-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Quantum Communication & Networks]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 quantum-qkd-bb84 — Quantum Key Distribution: Security from Physics
 *   03.2 quantum-teleportation-networks — Teleportation and the Quantum Internet
 */
import type { KnowledgeTopic } from '../../types'

export const quantumInformationCh03: KnowledgeTopic[] = [
  {
    id: 'quantum-qkd-bb84',
    title: 'Quantum Key Distribution: Security from Physics',
    domain: 'Emerging & Interdisciplinary',
    field: 'Quantum Information',
    branch: 'Quantum Communication & Networks',
    tier: 'core' as const,
    concepts: [
      'The threat model: math-based secrets in a quantum world',
      'BB84: four polarizations, two bases, one protocol',
      'Sifting, eavesdropper detection and the error budget',
      'E91 and device independence: Bell tests as security proofs',
      'Decoy states and distance: making it work on real fiber',
      'Deployments: metropolitan rings, backbones and Micius',
    ],
    words: 1715,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The qubits lesson of this book closed on a promise: no-cloning means eavesdropping leaves marks, and the cryptographer is the beneficiary. This lesson cashes that promise. Quantum key distribution — QKD — is the oldest applied idea in quantum information: a scheme in which two parties grow a shared secret key whose secrecy is guaranteed not by the difficulty of some mathematical problem, but by the physics of measurement itself. The qubits-and-gates chapter built the qubit, the algorithms chapter built the computation; this chapter builds the link between machines, starting with the 1984 protocol that founded the field.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The algorithms lesson owns the threat: Shor\u2019s factoring algorithm breaks the public-key cryptography the internet runs on, once a large fault-tolerant machine exists. The standard response is post-quantum cryptography — new math problems (the ML-KEM family is named there as a term) that are believed quantum-resistant but remain assumptions. QKD is the other answer: information-theoretic security with no computational assumption to break, ever. Nations and banks that must protect secrets for decades — when a harvest-now-decrypt-later adversary matters — are the customers building the links this lesson describes.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The threat model defines the field. Classical key exchange rests on computational hardness: factoring, discrete logarithms — problems that a sufficiently large quantum computer solves in polynomial time. Post-quantum cryptography changes the math; QKD changes the category. Its security target is information-theoretic: even an adversary with unlimited computing power, and even one bound only by quantum mechanics (not by any implementation assumption), cannot learn the key beyond a provably negligible amount. The price of that guarantee is physical infrastructure — a quantum channel (usually optical fiber or free space) between the parties — and the honesty to state what QKD does NOT do: it distributes keys for symmetric cryptography; it does not replace authentication, since the protocol itself needs a small pre-shared secret or a PKI to prove who is talking.',
      },
      {
        kind: 'para',
        text: 'BB84 — Bennett and Brassard, 1984 — is the founding protocol and still the teaching model. Alice encodes random bits on single photons in one of two conjugate bases: rectilinear (horizontal/vertical) or diagonal (the two forty-five-degree polarizations); for each photon she records the bit and the basis, chosen independently at random. Bob measures each arriving photon in a basis of his own, chosen at random. Quantum mechanics now does the work: a photon measured in the WRONG basis yields a random outcome and destroys the original state — so Bob guesses Alice\u2019s basis half the time, and when he guesses right the bit transfers faithfully. They then announce their basis choices (never the bit values) over an authenticated public channel — basis reconciliation, or sifting — and keep only the positions where the bases matched. About half the transmitted photons survive sifting; from those, both parties hold identical random bits: the raw shared key.',
      },
      {
        kind: 'para',
        text: 'Eavesdropping has a signature because measurement is destructive. An eavesdropper Eve must measure each photon to learn anything — no-cloning forbids copying it first — and measuring in the wrong basis (fifty percent chance) randomizes the state before it reaches Bob. If Eve intercepts and resends everything, the sifted bits carry an error rate of one quarter: half the time she picked the wrong basis, and half of those her random outcome disagrees with Alice\u2019s bit — a quantum bit error rate of 25 percent that no natural channel noise can mask. The protocol therefore samples a slice of the sifted key, estimates that error rate (QBER), and aborts if it exceeds a security threshold (about eleven percent for BB84 with one-way post-processing). Below threshold, the parties run error correction to reconcile their strings, then privacy amplification — hashing the string down so that whatever partial information Eve might hold is compressed to nothing — and the remainder is the final key. Security is a theorem, not a hope.',
      },
      {
        kind: 'para',
        text: 'The entanglement route came in 1991. Artur Ekert\u2019s E91 protocol distributes entangled photon pairs and lets the security test be a Bell-inequality experiment: measure enough pairs in the correlation-testing bases and verify the violation that only unmeasured, un-eavesdropped entanglement can produce. The Bell violation IS the certificate — a device that has been intercepted fails the test by the same physics that makes entanglement unforgeable. This idea matured into device-independent QKD, developed through the 2010s and demonstrated experimentally in 2022: security proven from the Bell violation alone, holding even if the hardware was built by the adversary — the strongest security statement in cryptography, delivered by the strongest correlation physics allows.',
      },
      {
        kind: 'para',
        text: 'Real systems live in the gap between single photons and available hardware. Cheap attenuated-laser sources occasionally emit two photons in one pulse, enabling the photon-number-splitting attack — Eve keeps one photon, forwards the rest. Decoy states (proposed by Hwang in 2003 and completed by Lo, Ma and Chen in 2005) close the hole: Alice varies the pulse intensity randomly, and the intensity-dependent statistics expose any photon-number-selective attack. Distance is the second constraint: fiber absorbs about 0.2 dB per kilometre at telecom wavelengths, and with no amplifiers possible (an amplifier is a measurement-and-copy device — no-cloning again), direct QKD saturates at a few hundred kilometres. Twin-field QKD, demonstrated from 2018 onward, pushes single-span records toward a thousand kilometres by interfering photons from two distant transmitters at a midpoint — the trick that makes continental terrestrial chains feasible.',
      },
      {
        kind: 'para',
        text: 'Deployments have run for two decades and are now infrastructure. DARPA\u2019s Boston network (2003) linked university and government sites; SECOQC built a metropolitan network in Vienna (2008); Tokyo ran a QKD network for the 2010s. China built the Beijing–Shanghai trusted-relay backbone (about 2,000 km, opened 2017) for banking and government traffic, and the Micius satellite — launched 2016 — took the physics to orbit: satellite-to-ground QKD, and by 2017 intercontinental quantum-secured videoconferencing between Beijing and Vienna. The satellite matters because fiber attenuation grows with distance while free-space loss over a vacuum path does not — space is the shortcut the fiber limit demands. The honest architectural note: today\u2019s long backbones use trusted relay nodes (the key is decrypted and re-encrypted at each node), which dilutes end-to-end security — exactly the gap the repeater networks of the next lesson are meant to close.',
      },
      {
        kind: 'example',
        title: 'Worked Example: The 25 Percent Signature of an Intercept-Resend Attack',
        steps: [
          'Eve intercepts every photon and measures in a random basis: half the time she matches Alice\u2019s basis and resends the state intact.',
          'The other half she measures in the wrong basis: the state collapses to her random result, which Bob then measures.',
          'Among SIFTED bits (Bob\u2019s basis matched Alice\u2019s), Eve chose wrongly 50% of the time, and in those cases Bob\u2019s outcome is wrong 50% of the time: QBER = 0.5 × 0.5 = 25%.',
          'The BB84 abort threshold is about 11%, so full interception is caught immediately. A partial attack on a fraction f of photons raises the QBER to f/4 — Eve can tap at most ~44% of pulses before tripping the alarm, and the privacy-amplification margin shrinks accordingly. The eavesdropper\u2019s power is bounded by the physics, quantitatively.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Banking and government backbones: metropolitan QKD rings protect data-center-to-data-center links where decades-long secrecy matters.',
        'Satellite key distribution: Micius-class systems deliver keys between ground stations a fiber cannot span, enabling intercontinental quantum-secured sessions.',
        'Critical infrastructure: power-grid and telecom operators trial QKD links for control-plane secrets with decade-scale confidentiality requirements.',
        'Hybrid architectures: QKD keys feed symmetric ciphers alongside post-quantum algorithms (the ML-KEM track) — defense in depth across both physics and math.',
        'Certified randomness: the same optics power quantum random number generators — the sibling product of the QKD supply chain.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, "QKD replaces cryptography": it distributes keys only — symmetric ciphers, hashing and authentication still run the session, and QKD itself needs an authenticated classical channel. Second, "unconditional security" marketing: the theorem covers the idealized protocol; real systems add side channels — detector blinding, timing leaks — that implementation-hardening must close, which is precisely the niche device-independent designs target. Third, forgetting the distance law: no amplifier can rescue a quantum signal, so loss grows exponentially with fiber length — the reason trusted relays and satellites exist, and the opening for true repeaters. Fourth, confusing QKD with post-quantum cryptography: one is physics, the other is math; they are complements, not rivals. Fifth, treating the 25-percent intercept signature as all-or-nothing: partial attacks scale linearly (f/4), and the protocol\u2019s job is to price Eve\u2019s information down to zero, not merely to ring a bell.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'BB84', def: 'Bennett-Brassard 1984: single-photon key distribution in two conjugate polarization bases — the founding QKD protocol.' },
        { term: 'Basis reconciliation (sifting)', def: 'The public comparison of basis choices that keeps only the matching-basis positions — roughly half the raw transmissions.' },
        { term: 'QBER', def: 'Quantum bit error rate on the sifted key; the eavesdropping and noise signature that gates the abort decision.' },
        { term: 'Privacy amplification', def: 'Hashing the reconciled key to compress away any residual eavesdropper information to negligible levels.' },
        { term: 'Decoy states', def: 'Randomized pulse intensities that defeat photon-number-splitting attacks on weak laser sources.' },
        { term: 'Device-independent QKD', def: 'Security certified by a Bell-inequality violation alone — valid even with untrusted hardware.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In BB84, why must Eve\u2019s measurement disturb the key?',
          options: ['Lasers are noisy', 'No-cloning forbids copying the photon, so she must measure in a basis that is wrong half the time', 'Polarization drifts in fiber', 'Bob\u2019s detectors are imperfect'],
          answer: 1,
          explain: 'She cannot copy the unknown state, and measurement in the wrong conjugate basis randomizes it — disturbance is the physics, not an implementation flaw.',
        },
        {
          q: 'A full intercept-resend attack on BB84 produces what error rate on the sifted key?',
          options: ['5%', '11%', '25%', '50%'],
          answer: 2,
          explain: 'Wrong basis half the time × wrong outcome half of those = 25% QBER — far above the ~11% abort threshold, so the attack is caught.',
        },
        {
          q: 'Why can\u2019t optical amplifiers extend QKD links the way they extend classical fiber?',
          options: ['Amplifiers are too expensive', 'Amplification requires copying quantum states, which no-cloning forbids', 'Fiber absorption is zero', 'Photons are too fast'],
          answer: 1,
          explain: 'A quantum amplifier would have to clone unknown states. Loss must be fought with better sources, detectors, twin-field schemes — or repeaters with quantum memories.',
        },
        {
          q: 'Decoy states were invented to defeat…',
          options: ['photon-number-splitting attacks on weak laser pulses', 'fiber absorption', 'detector dead time', 'Bell-inequality loopholes'],
          answer: 0,
          explain: 'Multi-photon pulses let Eve split off a photon; randomized intensity levels make any photon-number-selective interference statistically visible.',
        },
      ] },
    ],
  },
  {
    id: 'quantum-teleportation-networks',
    title: 'Teleportation and the Quantum Internet',
    domain: 'Emerging & Interdisciplinary',
    field: 'Quantum Information',
    branch: 'Quantum Communication & Networks',
    tier: 'core' as const,
    concepts: [
      'Why qubits cannot simply be sent: the transport problem',
      'The 1993 teleportation protocol, step by step',
      'What travels and what does not: bits, not matter, not faster than light',
      'Entanglement swapping and the quantum repeater',
      'Building the network: memories, nodes, satellites',
      'The roadmap: from trusted relays to a true quantum internet',
    ],
    words: 1713,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The QKD lesson moved a classical secret across a quantum channel. This lesson moves the quantum state itself — the harder and more consequential job. You cannot amplify a qubit signal (no-cloning), cannot read it mid-flight and re-send it (measurement destroys it), and cannot tuck it in memory for long (decoherence — the T1 and T2 clocks of the qubits lesson). Teleportation is the protocol that solves transport by never moving the fragile state at all: it transfers an unknown quantum state from one particle to another using shared entanglement plus two ordinary classical bits, and it is the load-bearing operation of every quantum network now being built.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'A quantum internet — machines that exchange entanglement the way today\u2019s internet exchanges packets — is the infrastructure layer under the field\u2019s next applications: networking small quantum processors into larger ones, blind cloud computing where the server never learns your input, long-baseline telescopes and clocks synced by entangled photons, and end-to-end quantum-secured links without trusted relays. Every one of them reduces to the protocol in this lesson running over repeater chains. The roadmap stages that governments now fund are measured by how far teleportation has been pushed: between particles in one lab, between non-adjacent nodes, between cities, between continents.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The transport problem is unique to quantum information. A classical file copies freely; an unknown qubit cannot be copied (Wootters-Zurek, in the qubits lesson). A classical signal regenerates at every repeater; a quantum signal that encounters a measuring device collapses into one sampled outcome, losing the amplitudes the whole point of the computation lives in. Matter qubits — trapped ions, superconducting circuits, NV centers — are stationary: moving them across a room is an engineering ordeal. Photons fly beautifully through fiber and free space but cannot be stored. The only resource that bridges the worlds is entanglement, which is why the network layer of quantum information is, at bottom, an entanglement-distribution system with a classical control plane.',
      },
      {
        kind: 'para',
        text: 'The teleportation protocol — Charles Bennett, Gilles Brassard, Claude Crépeau, Richard Jozsa, Asher Peres and William Wootters, 1993 — uses exactly those resources. Step one: Alice and Bob share an entangled Bell pair. Step two: Alice performs a joint Bell-basis measurement on the unknown input state TOGETHER WITH her half of the pair. This measurement has four equally likely outcomes, and it consumes both states it touches — the input is destroyed in the process, which is how the protocol respects no-cloning: the state now exists only in the correlations. Step three: Alice sends Bob two classical bits naming which of the four outcomes she saw. Step four: Bob applies the corresponding correction — the identity, Pauli-X, Pauli-Z or their product — to his half, and his particle is now exactly the state that entered Alice\u2019s apparatus. The qubits lesson\u2019s gate vocabulary is the entire toolkit: one Bell pair, one Bell measurement, two bits, one of four corrections.',
      },
      {
        kind: 'para',
        text: 'What travels — and what does not — is the part popular culture mangles. No matter, no energy and no information-bearing qubit crosses the gap: only the two classical bits travel, at light speed at most, through an ordinary channel anyone may overhear (they name only the correction, carrying zero information about the state itself). Before Alice\u2019s bits arrive, Bob\u2019s particle is locally a maximally mixed state — pure randomness, no signature of the input — so relativity survives intact: teleportation cannot signal faster than light. The state\u2019s identity crosses not as a signal but as a correlation already established when the pair was distributed. And the original is always destroyed: teleportation MOVES a quantum state rather than copying it, the move operation no-cloning permits.',
      },
      {
        kind: 'para',
        text: 'Experiments traced the protocol from table to planet. Zeilinger\u2019s Innsbruck group teleported photon polarization states in 1997; the distance records climbed — 143 kilometres between Canary Islands in 2012 — until Micius teleported states from ground to satellite in 2017. Matter mattered too: ensembles of atoms, trapped ions and solid-state spins teleported among themselves, and in 2014 the Delft group teleported between nitrogen-vacancy centers on separate diamond chips, the first between permanent electronic qubits. Each generation closed a gap the network roadmap needed: teleportation between moving carriers, between storage nodes, and across continental distances.',
      },
      {
        kind: 'para',
        text: 'Entanglement swapping turns teleportation into networking. Apply the protocol to entanglement itself: Alice–Bob share a pair, Bob–Charlie share another, and a Bell measurement on Bob\u2019s two particles teleports the entanglement across him — leaving Alice and Charlie entangled though they never interacted. Chain that operation and a long link becomes a chain of short, loss-tolerant segments; this is the quantum repeater, proposed by Briegel, Dür, Cirac and Zoller in 1998. Raw entanglement degrades with every segment, so real repeaters interleave entanglement purification (distilling many noisy pairs into fewer good ones) with swapping, and they need quantum memories — matter systems that hold a qubit\u2019s entanglement while the neighboring segments complete. Memories are the hard part: laboratory records now hold entanglement for seconds to minutes in atoms and defects, enough for metropolitan segments, while the engineering of thousands of synchronized, long-lived, high-rate nodes remains the field\u2019s central construction problem. The QKD lesson\u2019s trusted relays are the placeholder until repeaters work at scale — today\u2019s backbone nodes KNOW the keys they relay; a repeater would never need to.',
      },
      {
        kind: 'para',
        text: 'The network is assembling in stages, and the stage names are now standard (Wehner, Elkouss and Hanson\u2019s 2018 Science roadmap). Trusted-repeater QKD networks — stage zero — run today, as the last lesson described. The milestones above it: entanglement distributed between two end nodes (Delft\u2019s three-node network, 2021, did it for the first time among MULTIPLE nodes, with teleportation between non-adjacent nodes following in 2022); then teleportation as a service between memories; then networks of entangled processors; finally the full quantum internet, with distributed computation, blind computing and entanglement-enhanced sensing as applications. Metropolitan testbeds, national programs and satellite constellations are all executing against that ladder — the same ladder this book\u2019s chapters climb: qubits, then algorithms, then communication, then the error-correction stack that the fault-tolerance lesson makes scalable.',
      },
      {
        kind: 'example',
        title: 'Worked Example: The Four Corrections of Teleportation',
        steps: [
          'Alice measures (input ⊗ her half) in the Bell basis. Outcome Φ₊ — the pair was already aligned: Bob\u2019s particle IS the input; correction: identity. Classical bits: 00.',
          'Outcome Φ₋ — a phase flip crept in: Bob applies Z (Pauli-Z) to fix it. Bits: 01.',
          'Outcome Ψ₊ — the roles of |0⟩ and |1⟩ swapped: Bob applies X (the quantum NOT). Bits: 10.',
          'Outcome Ψ₋ — both a swap and a phase flip: Bob applies X then Z (equivalently iY up to global phase). Bits: 11. Two classical bits decode four outcomes — exactly the 2-bit control message of the protocol, and the reason entanglement plus 2 bits transports any state α|0⟩ + β|1⟩ whatever the amplitudes.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Networked quantum processors: teleportation links small machines into larger ones — the modular route to scaling beyond any single cryostat.',
        'Blind quantum computing: clients delegate computations to a server that learns nothing about the input — privacy outsourced by physics.',
        'End-to-end quantum-secured links: repeater chains replace trusted relays, closing the last lesson\u2019s weakest architectural point.',
        'Entanglement-enhanced metrology: synchronized clocks and networked telescopes whose baseline sensitivity classical links cannot deliver.',
        'Distributed algorithms and sensing: entangled sensor arrays and multi-node games with no classical equivalent — the application layer the roadmap\u2019s later stages unlock.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, the science-fiction gloss: teleportation moves a STATE, not matter, not people, not energy — the object at Alice\u2019s end is consumed, and nothing travels except two classical bits. Second, faster-than-light dreams: without the bits arriving, Bob\u2019s half is pure noise, so no signal outruns light. Third, "the original is scanned and rebuilt": no measurement reads the amplitudes — the Bell measurement never learns them, which is precisely why the protocol is legal under no-cloning. Fourth, confusing trusted relays with repeaters: today\u2019s backbone nodes see the keys; repeaters would hold only entanglement, and the difference is the difference between a courier reading your letter and one carrying a sealed envelope. Fifth, assuming swapping needs the long segment to work first: the whole design philosophy is short segments first, then stitch — memories, not distance records, are the bottleneck.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Teleportation', def: 'Transfer of an unknown quantum state via shared entanglement, a Bell measurement, two classical bits and a Pauli correction (Bennett et al., 1993).' },
        { term: 'Bell measurement', def: 'Joint measurement in the four-state entangled basis; it consumes the input and emits one of four two-bit outcomes.' },
        { term: 'Entanglement swapping', def: 'Teleporting entanglement itself, entangling two particles that never interacted — the repeater\u2019s core primitive.' },
        { term: 'Quantum repeater', def: 'A chain node that purifies and swaps entanglement across short segments to beat exponential fiber loss without cloning.' },
        { term: 'Quantum memory', def: 'A matter system (atoms, ions, NV centers) that stores an entangled qubit while other link segments complete.' },
        { term: 'Trusted relay', def: 'A relay node that decrypts and re-encrypts keys — today\u2019s backbones\u2019 compromise, to be replaced by repeaters.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In the teleportation protocol, what crosses the distance between Alice and Bob?',
          options: ['The input qubit itself', 'Two classical bits naming the Bell-measurement outcome', 'A copy of the state', 'An amplified photon'],
          answer: 1,
          explain: 'Entanglement was shared beforehand; only the two-bit correction message travels — the state\u2019s identity transfers through the correlations.',
        },
        {
          q: 'Why is teleportation consistent with the no-cloning theorem?',
          options: ['It only works for known states', 'The Bell measurement destroys the original, so the state exists in exactly one place', 'It copies at half strength', 'Classical bits are not quantum'],
          answer: 1,
          explain: 'The measurement consumes both input and entangled partner; the state moves rather than copies — the unique move operation no-cloning permits.',
        },
        {
          q: 'A quantum repeater beats fiber loss by…',
          options: ['amplifying photons', 'purifying and swapping entanglement across short remembered segments', 'sending photons faster', 'measuring and re-sending the qubit'],
          answer: 1,
          explain: 'No amplification or measurement of the data qubit is possible; repeaters build long-distance entanglement from short verified links, with memories holding the ends.',
        },
        {
          q: 'Before Alice\u2019s two bits arrive, Bob\u2019s half of the pair…',
          options: ['already contains the state, readable with the right measurement', 'is locally a maximally mixed state with no trace of the input', 'is a clone at half fidelity', 'has collapsed to |0⟩'],
          answer: 1,
          explain: 'His reduced state is pure noise — which is why teleportation cannot signal faster than light, and why the classical bits are irreplaceable.',
        },
      ] },
    ],
  },
]

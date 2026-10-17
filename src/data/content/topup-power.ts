import type { SectionContent } from "../library";

export const powerTopupContent: SectionContent[] = [
  {
    sectionId: "ee-e-psa-s1",
    readingTime: 10,
    intro:
      "Power networks span many voltage levels, so impedances quoted in ohms are awkward to compare or combine. The per-unit system normalises every quantity to a chosen base, which removes ideal transformers from the impedance diagram and makes equipment of very different size directly comparable. This section builds the conversion machinery and applies it to a generator-transformer-line chain.",
    objectives: [
      "Explain how base power and base voltages are chosen for a study",
      "Convert impedances between ohms, nameplate per-unit and study per-unit values",
      "Assemble a per-unit impedance diagram for a generator-transformer-line system",
    ],
    concepts: [
      {
        term: "Per-unit quantity",
        kind: "definition",
        statement:
          "A per-unit value is the ratio of the actual quantity to its chosen base: $Q_{pu} = Q/Q_{base}$.",
        detail:
          "Once base apparent power $S_{base}$ and base voltage $V_{base}$ are fixed, the other bases follow: $I_{base} = S_{base}/(√3 V_{base})$ and $Z_{base} = V_{base}^2/S_{base}$, using line-to-line kV with three-phase MVA. The √3 factors that clutter three-phase formulas are absorbed into the base relationships.",
      },
      {
        term: "Base selection",
        kind: "method",
        statement:
          "Choose one common $S_{base}$ (often 100 MVA) for the whole study and one $V_{base}$ per voltage level, with the voltage bases linked by the transformer turns ratios.",
        detail:
          "With this choice the per-unit impedance of a transformer is identical on its two sides, so the ideal transformer disappears from the impedance diagram and only the leakage reactance remains. Breaking this rule is the single most common source of per-unit errors.",
      },
      {
        term: "Change of base",
        kind: "method",
        statement:
          "$Z_{pu,new} = Z_{pu,old} × (S_{base,new}/S_{base,old}) × (V_{base,old}/V_{base,new})^2$.",
        detail:
          "Nameplate reactances are quoted on the machine rating, so they almost always need rebasing to the study MVA. When the voltage bases already follow the turns ratios, the voltage factor is 1 and only the MVA ratio applies.",
      },
      {
        term: "Component models",
        kind: "definition",
        statement:
          "Generators contribute subtransient $X''d$ or transient $X'd$, transformers their leakage reactance, and lines a series $R + jX$ (plus shunt charging on long lines).",
        detail:
          "Typical values: $X''d$ = 0.10-0.25 pu, $X'd$ = 0.20-0.40 pu, transformer leakage 0.05-0.15 pu on rating, and overhead-line X/R from about 1 at distribution voltage to 10 or more on EHV lines. For fault studies loads become constant impedances and shunt elements are usually neglected.",
      },
      {
        term: "The impedance diagram",
        kind: "notation",
        statement:
          "The single-line diagram reduces to one per-unit network of series impedances between internal EMFs and the neutral, with every element carrying its rebased per-unit value.",
        detail:
          "This diagram is the sandbox for every later calculation: three-phase faults, unbalanced faults through sequence networks, and stability studies all read their impedances from it. Voltage-base annotations on each zone guard against silent rebasing mistakes.",
      },
      {
        term: "Why per-unit works so well",
        kind: "insight",
        statement:
          "Per-unit values cluster in similar ranges across equipment of very different rating, so abnormal data is visible at a glance.",
        detail:
          "A line reactance of 3 pu or a generator of 0.004 pu is instantly suspicious. The normalisation also makes three-phase and single-phase formulas identical, which is why every production-grade tool works internally in per-unit.",
      },
    ],
    examples: [
      {
        title: "Per-unit conversion for a generator-transformer-line chain",
        problem:
          "A 60 MVA, 11 kV generator has $X''d$ = 0.20 pu on its own rating. It feeds a 60 MVA, 11/132 kV transformer with X = 0.10 pu on rating, and then an 80 km overhead line of 0.15 + j0.45 Ω/km at 132 kV. Using a 100 MVA base with 11 kV at the generator bus, find the per-unit impedance from the generator EMF to the far end of the line.",
        steps: [
          {
            label: "Fix the bases",
            text: "S_base = 100 MVA. Voltage bases follow the transformer: 11 kV at the generator, 132 kV on the line. Z_base at 132 kV = 132²/100 = 174.24 Ω.",
          },
          {
            label: "Convert the generator",
            text: "X''d = 0.20 × (100/60) × (11/11)² = 0.333 pu on the new base.",
          },
          {
            label: "Convert the transformer",
            text: "X_T = 0.10 × (100/60) = 0.167 pu. The voltage factor is 1 because the voltage bases already match the turns ratio.",
          },
          {
            label: "Convert the line",
            text: "Z_line = 80 × (0.15 + j0.45) = 12 + j36 Ω. In per unit: (12 + j36)/174.24 = 0.069 + j0.207 pu.",
          },
          {
            label: "Total",
            text: "Z_total = 0.069 + j(0.333 + 0.167 + 0.207) = 0.069 + j0.707 pu.",
          },
        ],
        result:
          "Z_total ≈ 0.069 + j0.707 pu on 100 MVA; a bolted three-phase fault at the line end draws about 1/0.71 ≈ 1.41 pu current.",
      },
    ],
    keyTakeaways: [
      "Per-unit needs one MVA base for the system and voltage bases that follow transformer turns ratios.",
      "Nameplate reactances must be rebased with the MVA (and, if ratios differ, voltage) correction factors.",
      "A correctly drawn impedance diagram eliminates ideal transformers and becomes the input to every fault study.",
    ],
    quiz: [
      {
        q: "A 132 kV, 100 MVA study base is chosen. What is the base impedance at the 132 kV level?",
        options: ["1.32 Ω", "174.24 Ω", "13.2 Ω", "1742 Ω"],
        answer: 1,
        explanation: "Z_base = kV²/MVA = 132²/100 = 17424/100 = 174.24 Ω.",
      },
      {
        q: "A transformer has X = 0.08 pu on 40 MVA. On a 100 MVA base with matching voltage bases, its reactance is:",
        options: ["0.032 pu", "0.08 pu", "0.20 pu", "0.32 pu"],
        answer: 2,
        explanation: "Only the MVA factor applies: 0.08 × (100/40) = 0.20 pu.",
      },
      {
        q: "Why must voltage bases in a per-unit study follow the transformer turns ratios?",
        options: [
          "To keep currents equal on both sides",
          "So the transformer per-unit impedance is identical seen from either side",
          "To make base frequency 50 Hz",
          "To zero out the line resistance",
        ],
        answer: 1,
        explanation:
          "When the base-voltage ratio equals the turns ratio, the per-unit leakage reactance is the same from both sides and the ideal transformer drops out of the diagram.",
      },
      {
        q: "Base current at 11 kV on a 100 MVA base is closest to:",
        options: ["909 A", "262 A", "5249 A", "9091 A"],
        answer: 2,
        explanation: "I_base = 100 MVA/(√3 × 11 kV) = 100 × 10^6/(1.732 × 11000) ≈ 5249 A.",
      },
    ],
  },
  {
    sectionId: "ee-e-psa-s2",
    readingTime: 9,
    intro:
      "A balanced three-phase fault is the easiest fault to analyse and often the most severe. Because the network stays symmetric, only the positive-sequence network is needed, and the fault current follows from the Thevenin equivalent at the fault point. That same Thevenin impedance is the diagonal entry of the Z-bus matrix, which is how computer programs handle faults at any bus.",
    objectives: [
      "Derive the Thevenin equivalent seen from a faulted bus",
      "Explain how the Z-bus matrix encodes driving-point and transfer impedances",
      "Compute short-circuit MVA and convert per-unit currents to amperes",
    ],
    concepts: [
      {
        term: "Thevenin equivalent at the fault point",
        kind: "theorem",
        statement:
          "For a three-phase fault through impedance $Z_f$ at a bus: $I_f = V_{prefault}/(Z_{th} + Z_f)$, where $Z_{th}$ is the passive driving-point impedance at that bus.",
        detail:
          "All source EMFs are shorted behind their internal impedances and the prefault voltage is normally taken as 1.0 pu. For a bolted fault, $I_f = V_{prefault}/Z_{th}$, and the faulted bus voltage collapses to zero.",
      },
      {
        term: "Z-bus matrix",
        kind: "method",
        statement:
          "Z-bus relates bus voltages to current injections by open-circuit impedances: $V = Z_{bus} I$, with $Z_{ii}$ the driving-point and $Z_{ij}$ the transfer impedance.",
        detail:
          "$Z_{ii}$ is the voltage at bus i per unit current injected at i with all other injections zero; $Z_{ij}$ is the voltage at j per unit injection at i. For a bolted fault at bus k, I_f = V_k^0/Z_kk, so fault studies reduce to reading one diagonal element.",
      },
      {
        term: "Short-circuit MVA",
        kind: "definition",
        statement:
          "The fault level at a bus is SC MVA = $S_{base}/Z_{th,pu}$ at 1.0 pu prefault voltage, equivalently √3 × V(kV) × I_f(kA).",
        detail:
          "It quantifies breaker duty at the bus and falls with electrical distance from the sources. Utilities quote fault levels in MVA precisely because equipment ratings are expressed that way.",
      },
      {
        term: "Current contributions",
        kind: "insight",
        statement:
          "During a bolted fault at a bus, each infeed branch contributes I_i = V^0/Z_i independently, and the contributions sum to the total fault current.",
        detail:
          "The faulted bus voltage is driven to zero, so each source pushes current set only by its own EMF and impedance. Superposition of the prefault state and the faulted delta state gives the same result rigorously.",
      },
      {
        term: "DC offset and the X/R ratio",
        kind: "insight",
        statement:
          "The instantaneous fault current can overshoot the symmetrical rms value by up to √2, governed by the X/R ratio of the Thevenin impedance.",
        detail:
          "The DC component decays with time constant (X/ωR), so high X/R networks near generators keep the offset alive until contact parting. Breakers are rated on symmetrical current with an asymmetry multiplying factor that accounts for this.",
      },
    ],
    examples: [
      {
        title: "Three-phase fault at a two-source bus",
        problem:
          "Two sources feed an 11 kV bus F. Source 1 is 1.0 pu EMF behind j0.20 pu; source 2 is 1.0 pu EMF behind j0.30 pu; both on a 100 MVA base. Find the bolted three-phase fault current at F in per unit, in amperes, and the fault MVA.",
        steps: [
          {
            label: "Thevenin impedance",
            text: "With both EMFs shorted, the two reactances are in parallel at F: Z_th = (j0.20 × j0.30)/(j0.20 + j0.30) = j0.12 pu.",
          },
          {
            label: "Fault current",
            text: "I_f = 1.0/j0.12 = 8.33 pu in magnitude.",
          },
          {
            label: "Check by contributions",
            text: "Source 1 delivers 1/j0.20 = 5 pu and source 2 delivers 1/j0.30 = 3.33 pu; the sum is 8.33 pu.",
          },
          {
            label: "To amperes",
            text: "At 11 kV, I_base = 100 MVA/(√3 × 11 kV) ≈ 5249 A, so I_f ≈ 8.33 × 5249 ≈ 43.7 kA.",
          },
          {
            label: "Fault level",
            text: "SC MVA = 100/0.12 = 833 MVA, the interrupting duty the bus feeders must be rated for.",
          },
        ],
        result: "I_f ≈ 8.33 pu ≈ 43.7 kA; short-circuit level at F = 833 MVA.",
      },
    ],
    keyTakeaways: [
      "A three-phase fault uses only the positive-sequence network.",
      "I_f = V_prefault/Z_kk, the diagonal Z-bus entry at the faulted bus.",
      "Fault MVA = base MVA divided by Z_th in pu; breaker ratings are chosen against this number.",
    ],
    quiz: [
      {
        q: "For a bolted three-phase fault at bus k with prefault voltage 1.0 pu, the fault current in per unit equals:",
        options: ["Z_kk", "1/Z_kk", "Z_kk × I_base", "√3 × Z_kk"],
        answer: 1,
        explanation: "I_f = V/Z = 1/Z_kk pu, since Z_kk is the driving-point Thevenin impedance.",
      },
      {
        q: "A bus has Thevenin impedance j0.25 pu on a 50 MVA base. The short-circuit MVA is:",
        options: ["125 MVA", "200 MVA", "50 MVA", "12.5 MVA"],
        answer: 1,
        explanation: "SC MVA = S_base/Z_th = 50/0.25 = 200 MVA.",
      },
      {
        q: "The transfer impedance Z_ij of a Z-bus matrix is defined as:",
        options: [
          "the voltage at bus j per unit current injected at bus i, all other injections zero",
          "the current at bus j per unit voltage at bus i",
          "the impedance of the line directly between i and j",
          "the fault impedance at bus i",
        ],
        answer: 0,
        explanation:
          "Z-bus entries are open-circuit driving-point (diagonal) and transfer (off-diagonal) impedances.",
      },
      {
        q: "The DC offset in a fault current wave is governed mainly by:",
        options: [
          "the load power factor",
          "the X/R ratio of the Thevenin impedance",
          "the fault distance along the line",
          "the transformer vector group",
        ],
        answer: 1,
        explanation:
          "The offset decays with time constant X/(ωR); a high X/R keeps the asymmetry significant at contact parting and raises breaker stress.",
      },
    ],
  },
  {
    sectionId: "ee-e-psa-s3",
    readingTime: 10,
    intro:
      "Unbalanced faults and open conductors cannot be solved phase by phase because the mutual coupling between phases is unequal. Fortescue's symmetrical components decompose any three phasors into three balanced sets — positive, negative and zero sequence — each of which sees a simple balanced network. The technique converts every unsymmetrical fault into a wiring problem between sequence networks.",
    objectives: [
      "Apply the operator a = 1∠120° and its algebraic properties",
      "Transform phase quantities into sequence components and back",
      "Decompose a set of unbalanced phasors numerically",
    ],
    concepts: [
      {
        term: "Operator a",
        kind: "notation",
        statement: "The operator a rotates a phasor by 120°: a = 1∠120° = -0.5 + j0.866, with a³ = 1 and 1 + a + a² = 0.",
        detail:
          "It expresses a balanced set with a single phasor: for positive sequence, I_b = a²I_a and I_c = aI_a. The three unit phasors 1, a and a² form a closed equilateral triangle on the complex plane, which is why they sum to zero.",
      },
      {
        term: "The 0-1-2 transformation",
        kind: "method",
        statement:
          "I_a0 = (I_a + I_b + I_c)/3, I_a1 = (I_a + aI_b + a²I_c)/3, I_a2 = (I_a + a²I_b + aI_c)/3.",
        detail:
          "The inverse (synthesis) equations are I_a = I_a0 + I_a1 + I_a2, I_b = I_a0 + a²I_a1 + aI_a2 and I_c = I_a0 + aI_a1 + a²I_a2. With this convention the total three-phase power equals three times the sum of the per-sequence powers.",
      },
      {
        term: "Sequence networks",
        kind: "definition",
        statement:
          "Each sequence has its own one-phase network: positive sequence contains the EMFs, negative sequence is passive with impedances Z2, and zero sequence includes the neutral-earth return path.",
        detail:
          "In a balanced network the three sequence networks are completely decoupled, which is the entire reason the method works. Zero-sequence current can flow only when a physical return path through neutral or earth exists.",
      },
      {
        term: "Sequence impedances of apparatus",
        kind: "definition",
        statement:
          "Synchronous machines have distinct Z1, Z2 and Z0; transformers carry equal positive and negative leakage impedance but a connection-dependent zero-sequence path.",
        detail:
          "For machines, Z2 usually lies between $X''d$ and $X'd$, while Z0 is much smaller (a fraction of $X''d$). A delta winding traps zero-sequence current by circulating it internally, and three-limb cores give a lower magnetising Z0 than banked single-phase units.",
      },
      {
        term: "Why the method works",
        kind: "insight",
        statement:
          "Balanced networks cannot mix sequences: positive-sequence excitation produces only positive-sequence response.",
        detail:
          "An unbalanced fault therefore injects negative- and zero-sequence quantities only at the fault boundary, where the boundary conditions tie the otherwise independent networks together. The next section turns those ties into circuits.",
      },
    ],
    examples: [
      {
        title: "Decomposition of an unbalanced current set",
        problem:
          "The line currents at a point are I_a = 100∠0° A, I_b = 100∠180° A and I_c = 0. Find the zero-, positive- and negative-sequence components.",
        steps: [
          {
            label: "Zero sequence",
            text: "I_a0 = (100∠0° + 100∠180° + 0)/3 = (100 - 100 + 0)/3 = 0 A.",
          },
          {
            label: "Positive sequence",
            text: "I_a1 = (I_a + aI_b + a²I_c)/3 = (100∠0° + 100∠300°)/3 = (150 - j86.6)/3 = 57.74∠-30° A.",
          },
          {
            label: "Negative sequence",
            text: "I_a2 = (I_a + a²I_b + aI_c)/3 = (100∠0° + 100∠60°)/3 = (150 + j86.6)/3 = 57.74∠30° A.",
          },
          {
            label: "Verify by synthesis",
            text: "I_a = 0 + 57.74∠-30° + 57.74∠30° = 100∠0° A; I_b = 57.74∠210° + 57.74∠150° = -100 A ✓. The zero component vanishes because the phasors sum to zero.",
          },
        ],
        result: "I_a0 = 0 A, I_a1 = 57.74∠-30° A, I_a2 = 57.74∠30° A.",
      },
    ],
    keyTakeaways: [
      "a = 1∠120°, a³ = 1, and 1 + a + a² = 0.",
      "Zero sequence exists only when the phasors do not sum to zero, which requires an earth or neutral return.",
      "Balanced sequence networks are independent; unbalanced faults merely interconnect them at the fault point.",
    ],
    quiz: [
      {
        q: "The operator a equals:",
        options: ["1∠90°", "1∠120°", "1∠180°", "1∠240°"],
        answer: 1,
        explanation: "a = 1∠120°; its square a² = 1∠240° and the three unit phasors sum to zero.",
      },
      {
        q: "If I_a + I_b + I_c = 0, then:",
        options: [
          "the positive sequence is zero",
          "the negative sequence is zero",
          "the zero sequence is zero",
          "all three sequences are equal",
        ],
        answer: 2,
        explanation: "I_a0 = (I_a + I_b + I_c)/3 = 0 whenever the phasors form a closed set.",
      },
      {
        q: "In the synthesis equations, phase b current equals:",
        options: [
          "I_a0 + aI_a1 + a²I_a2",
          "I_a0 + a²I_a1 + aI_a2",
          "I_a1 + aI_a2 + a²I_a0",
          "aI_a0 + a²I_a1 + I_a2",
        ],
        answer: 1,
        explanation: "The b-phase positive-sequence component lags by 120°, giving a²I_a1, while the negative-sequence component leads, giving aI_a2.",
      },
      {
        q: "I_a = 150∠0° A while I_b = I_c = 0. The positive-sequence component I_a1 is:",
        options: ["150 A", "75 A", "50 A", "0 A"],
        answer: 2,
        explanation: "I_a1 = (150 + 0 + 0)/3 = 50 A; in fact all three components equal 50 A here.",
      },
    ],
  },
  {
    sectionId: "ee-e-psa-s4",
    readingTime: 10,
    intro:
      "Line-to-ground, line-to-line and double-line-to-ground faults destroy the symmetry that makes three-phase analysis easy. Symmetrical components rescue the problem: each fault type imposes boundary conditions that translate into a specific series or parallel connection of the three sequence networks at the fault point. Reading these connections correctly is most of the skill.",
    objectives: [
      "State the boundary conditions for LG, LL and LLG faults",
      "Draw the sequence-network interconnection for each fault type",
      "Compute an LG fault current numerically from sequence impedances",
    ],
    concepts: [
      {
        term: "LG (single line-to-ground) fault",
        kind: "method",
        statement:
          "For a phase-a ground fault through $Z_f$, the sequence networks are in series with 3$Z_f$: $I_{a1} = E/(Z_1 + Z_2 + Z_0 + 3Z_f)$ and $I_f = 3I_{a1}$.",
        detail:
          "The series connection forces I_a1 = I_a2 = I_a0, and the voltages sum to 3Z_f I_a1. For a bolted fault fed from a balanced source, the healthy phases carry no fault current.",
      },
      {
        term: "LL (line-to-line) fault",
        kind: "method",
        statement:
          "For phases b and c faulted through $Z_f$, networks 1 and 2 are in series with $Z_f$ and no zero-sequence current flows: $I_{a1} = E/(Z_1 + Z_2 + Z_f)$.",
        detail:
          "With I_a2 = -I_a1 and I_a0 = 0, the faulted-phase currents are equal and opposite: for a bolted fault, I_b = -I_c = √3∠-90° × I_a1, so the line current magnitude is √3 times I_a1.",
      },
      {
        term: "LLG (double line-to-ground) fault",
        kind: "method",
        statement:
          "With phases b and c grounded through $Z_f$, network 2 sits in parallel with ($Z_0$ + 3$Z_f$), and that combination is in series with network 1.",
        detail:
          "I_a1 = E/(Z_1 + Z_2(Z_0 + 3Z_f)/(Z_2 + Z_0 + 3Z_f)). The ground and phase currents follow from the current divider between networks 2 and 0; extreme cases recover the LG and LL limits.",
      },
      {
        term: "Only network 1 has a source",
        kind: "insight",
        statement:
          "The positive-sequence network contains the machine EMFs; the negative- and zero-sequence networks are passive.",
        detail:
          "Machines generate balanced EMF, so all unbalance appears only at the fault boundary where the networks are wired together. This keeps the connection diagrams drawable from memory.",
      },
      {
        term: "Which fault is worst",
        kind: "insight",
        statement:
          "Near generator terminals a three-phase or LG fault is usually most severe; with distance, LG current falls fastest because $Z_0$ grows with the earth-return path.",
        detail:
          "Overhead-line $Z_0$ is typically 2.5 to 3.5 times $Z_1$, so the zero-sequence leg dominates remote earth faults. Breakers near large grounded generator neutrals see the highest earth-fault duties.",
      },
    ],
    examples: [
      {
        title: "LG fault current at a generator terminal",
        problem:
          "At the terminals of an 11 kV generator the sequence reactances seen from the fault point are Z_1 = j0.30 pu, Z_2 = j0.20 pu and Z_0 = j0.08 pu on a 100 MVA base, and the fault is bolted (Z_f = 0). Find the fault current in amperes.",
        steps: [
          {
            label: "Series connection",
            text: "LG fault: Z_total = Z_1 + Z_2 + Z_0 + 3Z_f = j0.30 + j0.20 + j0.08 = j0.58 pu.",
          },
          {
            label: "Positive-sequence current",
            text: "I_a1 = 1.0/j0.58 = 1.724∠-90° pu (magnitude 1.724).",
          },
          {
            label: "Fault current",
            text: "I_f = 3I_a1 = 5.17 pu.",
          },
          {
            label: "To amperes",
            text: "At 11 kV, I_base = 100 MVA/(√3 × 11 kV) ≈ 5249 A, so I_f ≈ 5.17 × 5249 ≈ 27.1 kA.",
          },
        ],
        result:
          "I_f ≈ 5.17 pu ≈ 27.1 kA; phases b and c carry no current for this bolted fault on an otherwise balanced system.",
      },
    ],
    keyTakeaways: [
      "LG: series connection of Z_1 + Z_2 + Z_0 + 3Z_f, with I_f = 3I_a1.",
      "LL: series Z_1 + Z_2 + Z_f, no zero sequence, fault current = √3 I_a1.",
      "LLG: Z_2 in parallel with (Z_0 + 3Z_f), that group in series with Z_1.",
      "Only the positive-sequence network contains EMFs.",
    ],
    quiz: [
      {
        q: "In an LG fault on phase a, the relationship between the sequence currents is:",
        options: [
          "I_a1 = I_a2 = I_a0",
          "I_a1 = -I_a2 and I_a0 = 0",
          "I_a1 + I_a2 + I_a0 = 0",
          "I_a1 = 2I_a2",
        ],
        answer: 0,
        explanation: "The series connection of the three networks forces the same current through each.",
      },
      {
        q: "For a bolted LL fault, the fault current magnitude in terms of I_a1 is:",
        options: ["I_a1", "√3 I_a1", "3 I_a1", "2 I_a1"],
        answer: 1,
        explanation: "I_b = (a² - a)I_a1 = √3∠-90° I_a1, so the line-to-line current is √3 times the positive-sequence current.",
      },
      {
        q: "Z_1 = j0.3, Z_2 = j0.2 and Z_0 = j0.4 pu with Z_f = 0. The LG fault current in pu is:",
        options: ["1.11 pu", "3.33 pu", "2.22 pu", "0.9 pu"],
        answer: 1,
        explanation: "I_f = 3E/(Z_1 + Z_2 + Z_0) = 3 × 1.0/0.9 = 3.33 pu.",
      },
      {
        q: "Which sequence network contains the source EMF?",
        options: ["zero sequence", "negative sequence", "positive sequence", "all three"],
        answer: 2,
        explanation: "Machine EMFs are balanced, hence purely positive sequence; the other networks are passive.",
      },
      {
        q: "In an LLG fault, the negative- and zero-sequence networks are connected:",
        options: [
          "in series with each other",
          "in parallel, then in series with network 1",
          "in parallel with network 1",
          "left open",
        ],
        answer: 1,
        explanation: "I_a1 splits between networks 2 and 0 at the fault point, so they sit in parallel behind network 1.",
      },
    ],
  },
  {
    sectionId: "ee-e-psa-s5",
    readingTime: 10,
    intro:
      "Load flow is the steady-state backbone calculation: given generation, load and network data, it finds every bus voltage and every line flow. The network is assembled as a Y-bus admittance matrix, buses are classified as slack, PV or PQ, and nonlinear power equations are solved iteratively. The choice between Gauss-Seidel and Newton-Raphson is a choice between simplicity and speed.",
    objectives: [
      "Form the Y-bus of a network from its line admittances",
      "Distinguish slack, PV and PQ buses by their knowns and unknowns",
      "Compare Gauss-Seidel and Newton-Raphson solution strategies",
    ],
    concepts: [
      {
        term: "Y-bus formation",
        kind: "method",
        statement:
          "Y_ii equals the sum of admittances of all branches incident at bus i (plus shunts), and Y_ij = Y_ji = -y_ij for the branch between i and j.",
        detail:
          "Off-diagonal entries exist only between directly connected buses, so Y-bus is sparse — the property exploited by all production solvers. Off-nominal transformer taps add small corrections to the two diagonal entries they touch.",
      },
      {
        term: "Bus classification",
        kind: "definition",
        statement:
          "The slack bus fixes voltage magnitude and angle and balances losses; PV buses hold P and |V|; PQ buses — most of them — have specified P and Q.",
        detail:
          "One slack bus is mandatory because losses are unknown until the solution exists; it absorbs the mismatch between load, loss and generation. A generator bus demotes itself to PQ when it hits a reactive-power limit.",
      },
      {
        term: "Power-flow equations",
        kind: "theorem",
        statement:
          "P_i = |V_i| Σ_j |V_j|(G_ij cos δ_ij + B_ij sin δ_ij) and Q_i = |V_i| Σ_j |V_j|(G_ij sin δ_ij - B_ij cos δ_ij), with δ_ij = δ_i - δ_j.",
        detail:
          "For a PQ bus both P_i and Q_i are known, so the pair of equations solves for |V_i| and δ_i; for a PV bus Q is free and only the P equation is enforced. An n-bus system gives roughly 2n coupled nonlinear equations.",
      },
      {
        term: "Gauss-Seidel method",
        kind: "method",
        statement:
          "Each bus voltage is updated in turn from the latest available values using the explicit rearrangement of the power equations, with an acceleration factor of about 1.6.",
        detail:
          "It is simple to code and light on memory, but convergence is linear and slow, and it can fail on stressed systems or networks containing negative series reactances such as series capacitors.",
      },
      {
        term: "Newton-Raphson method",
        kind: "method",
        statement:
          "The power mismatches ΔP and ΔQ are solved iteratively from J × Δx = ΔS, where J is the Jacobian of the power equations with respect to angles and voltage magnitudes.",
        detail:
          "Convergence is quadratic near the solution — typically 3 to 5 iterations regardless of network size — at the cost of forming and factorising a large but sparse Jacobian each iteration. Fast-decoupled and DC load flows trade accuracy for further speed.",
      },
    ],
    examples: [
      {
        title: "Y-bus for a three-bus network",
        problem:
          "Three buses are joined by lines with per-unit admittances y12 = 1 - j4, y13 = 2 - j6 and y23 = 1 - j4. Assemble the Y-bus and comment on its singularity.",
        steps: [
          {
            label: "Diagonal entries",
            text: "Y_11 = y12 + y13 = 3 - j10; Y_22 = y12 + y23 = 2 - j8; Y_33 = y13 + y23 = 3 - j10.",
          },
          {
            label: "Off-diagonal entries",
            text: "Y_12 = Y_21 = -y12 = -1 + j4; Y_13 = Y_31 = -y13 = -2 + j6; Y_23 = Y_32 = -y23 = -1 + j4.",
          },
          {
            label: "Assemble",
            text: "Rows of Y_bus: (3 - j10, -1 + j4, -2 + j6), (-1 + j4, 2 - j8, -1 + j4), (-2 + j6, -1 + j4, 3 - j10).",
          },
          {
            label: "Check the row sums",
            text: "Every row sums to zero because only series branches exist. A shunt tie to ground (line charging, loads or sources) is needed to make Y-bus non-singular.",
          },
        ],
        result:
          "Y_bus is the symmetric matrix above; its rows sum to zero, confirming that some shunt element to earth is required for inversion.",
      },
    ],
    keyTakeaways: [
      "Y_ii adds all incident admittances; Y_ij is the negative of the branch admittance between i and j.",
      "Slack fixes |V| and δ and balances losses; PV holds P and |V|; PQ holds P and Q.",
      "Newton-Raphson converges in a handful of iterations; Gauss-Seidel is simple but slow and fragile on stressed systems.",
    ],
    quiz: [
      {
        q: "In a Y-bus, the mutual admittance Y_ij for a line of admittance y_ij between buses i and j is:",
        options: ["y_ij", "-y_ij", "1/y_ij", "0"],
        answer: 1,
        explanation: "The mutual (off-diagonal) entry is the negative of the series branch admittance connecting the two buses.",
      },
      {
        q: "A bus with specified P and Q, whose |V| and δ are unknowns, is a:",
        options: ["slack bus", "PV bus", "PQ bus", "reference bus"],
        answer: 2,
        explanation: "PQ buses specify both powers; the solver finds their voltage magnitude and angle.",
      },
      {
        q: "The slack bus exists because:",
        options: [
          "one bus must have zero voltage",
          "system losses are unknown until the solution is found",
          "generators cannot control reactive power",
          "the Y-bus must stay symmetric",
        ],
        answer: 1,
        explanation: "Total losses depend on the solution, so one bus must absorb the unknown loss mismatch while holding angle reference.",
      },
      {
        q: "Newton-Raphson load flow typically converges in about:",
        options: ["2-5 iterations", "50-100 iterations", "exactly n iterations for n buses", "one iteration"],
        answer: 0,
        explanation: "Quadratic convergence near the solution gives a handful of iterations essentially independent of size.",
      },
      {
        q: "Which method is notorious for failing on networks with series capacitors (negative reactance)?",
        options: ["Newton-Raphson", "Gauss-Seidel", "both equally", "neither"],
        answer: 1,
        explanation: "Gauss-Seidel diverges on negative-impedance branches; Newton-Raphson handles them comfortably.",
      },
    ],
  },
  {
    sectionId: "ee-e-psa-s6",
    readingTime: 12,
    intro:
      "Stability asks whether synchronous machines stay in step after a disturbance; traveling-wave theory asks how voltage and current propagate along lines between stations. Both topics are energy arguments: the swing equation tracks accelerating energy in the rotor, the equal-area criterion balances it against the grid, and the lattice diagram tracks energy reflected at every impedance discontinuity.",
    objectives: [
      "Write and interpret the swing equation and inertia constant H",
      "Apply the equal-area criterion to find a critical clearing angle",
      "Compute surge impedance loading and reflection coefficients",
    ],
    concepts: [
      {
        term: "Swing equation",
        kind: "law",
        statement:
          "M d²δ/dt² = P_m - P_e, with M = H/(πf) in per unit for δ in radians and time in seconds.",
        detail:
          "H is the stored kinetic energy at rated speed divided by the MVA rating — typically 2-9 MJ/MVA depending on machine type and size. A small damping term D dδ/dt is usually added to represent load and damper effects.",
      },
      {
        term: "Equal-area criterion",
        kind: "theorem",
        statement:
          "The machine remains in step if the accelerating area A_1 gained during the fault does not exceed the maximum decelerating area A_2 available after clearing.",
        detail:
          "With post-fault power P_e = P_max sin δ and pre-fault angle δ_0, the swing limit is δ_max = π - δ_0. Equating A_1 = ∫(P_m - P_e,fault)dδ with A_2 = ∫(P_e - P_m)dδ gives the critical clearing angle without solving the differential equation.",
      },
      {
        term: "Critical clearing time",
        kind: "method",
        statement:
          "If the accelerating power is roughly constant at P_a during the fault, t_cc ≈ √(2M(δ_c - δ_0)/P_a).",
        detail:
          "The exact value needs numerical integration of the swing equation, but the square-root form shows the leverage: higher inertia buys time, and faster clearing always helps. EHV clearing times of 2-4 cycles exist precisely to meet this constraint.",
      },
      {
        term: "Surge impedance and SIL",
        kind: "definition",
        statement:
          "The surge impedance Z_c = √(L/C) is about 350-400 Ω for overhead lines, and the surge impedance loading is SIL = V²/Z_c.",
        detail:
          "At SIL the reactive power generated by line charging exactly balances that consumed by the series inductance, so the voltage profile is flat. Below SIL the line exports vars; above SIL it imports them. A 400 kV line with Z_c = 400 Ω has SIL = 400²/400 = 400 MW.",
      },
      {
        term: "Traveling waves and reflections",
        kind: "law",
        statement:
          "Disturbances propagate at v = 1/√(LC), near light speed on overhead lines, and the reflection coefficient at a discontinuity is Γ = (Z_L - Z_c)/(Z_L + Z_c).",
        detail:
          "An open end (Z_L → ∞) gives Γ = +1 and doubles the voltage; a shorted end gives Γ = -1 and doubles the current. Line traps, transformers and cable-line junctions all create partial reflections governed by this ratio.",
      },
      {
        term: "Bewley lattice diagram",
        kind: "method",
        statement:
          "The lattice diagram plots every successive reflection and transmission of a wavefront in time and distance so the transient at any point is their sum.",
        detail:
          "Each junction spawns a reflected wave scaled by Γ and a transmitted wave scaled by 1 + Γ. The diagram is the standard tool for visualising lightning and switching surge build-up on lines.",
      },
    ],
    examples: [
      {
        title: "Equal-area criterion with numbers",
        problem:
          "A machine delivers P_m = 1.0 pu into a line whose post-fault power-angle curve is P_e = 2.0 sin δ. During the fault the transfer capability collapses to P_e = 0.5 sin δ. Find the critical clearing angle δ_c.",
        steps: [
          {
            label: "Pre-fault angle",
            text: "P_m = P_e gives 2.0 sin δ_0 = 1.0, so δ_0 = 30° (0.5236 rad). The swing limit is δ_max = 180° - 30° = 150° (2.618 rad).",
          },
          {
            label: "Accelerating area",
            text: "A_1 = ∫ from δ_0 to δ_c of (1.0 - 0.5 sin δ) dδ = (δ_c - 0.5236) + 0.5(cos δ_c - cos 30°).",
          },
          {
            label: "Decelerating area",
            text: "A_2 = ∫ from δ_c to δ_max of (2 sin δ - 1.0) dδ = 2(cos δ_c - cos 150°) - (2.618 - δ_c) = 2 cos δ_c + 1.732 - 2.618 + δ_c.",
          },
          {
            label: "Equate and solve",
            text: "A_1 = A_2 cancels δ_c: -0.957 + 0.5 cos δ_c = 2 cos δ_c - 0.886, so 1.5 cos δ_c = -0.071 and cos δ_c = -0.047.",
          },
        ],
        result: "δ_c ≈ 92.7° — the fault must be cleared before the rotor angle reaches about 93° or the machine loses synchronism.",
      },
    ],
    keyTakeaways: [
      "Swing equation: M d²δ/dt² = P_m - P_e with M = H/(πf) in per unit.",
      "Stability survives if the accelerating area stays within the available decelerating area; faster clearing raises the margin.",
      "SIL = V²/Z_c gives a flat voltage profile; reflections follow Γ = (Z_L - Z_c)/(Z_L + Z_c), with +1 doubling voltage at open ends.",
    ],
    quiz: [
      {
        q: "A 400 kV line has surge impedance 400 Ω. Its surge impedance loading is:",
        options: ["100 MW", "160 MW", "400 MW", "1600 MW"],
        answer: 2,
        explanation: "SIL = V²/Z_c = 400²/400 = 400 MW.",
      },
      {
        q: "At the open-circuited end of a line, the voltage-wave reflection coefficient is:",
        options: ["-1", "0", "+1", "0.5"],
        answer: 2,
        explanation: "Γ = (Z_L - Z_c)/(Z_L + Z_c) tends to +1 as Z_L → ∞, so the incident and reflected waves add to double the voltage.",
      },
      {
        q: "In the per-unit swing equation, the inertia coefficient M equals:",
        options: ["H/πf", "Hf/π", "2H", "πf/H"],
        answer: 0,
        explanation: "With δ in radians and t in seconds, M = H/(πf) when the swing equation is written per unit.",
      },
      {
        q: "The equal-area criterion states that first-swing stability holds if:",
        options: [
          "A_1 exceeds A_2",
          "A_1 is no greater than the maximum available decelerating area",
          "A_1 is exactly zero",
          "δ_c is below 30°",
        ],
        answer: 1,
        explanation: "The rotor must give back at least as much kinetic energy as the fault injected before reaching δ_max = π - δ_0.",
      },
    ],
  },
  {
    sectionId: "ee-e-psa-s7",
    readingTime: 9,
    intro:
      "This capstone section ties the three calculation engines together and drills the judgement calls that separate a correct study from a misleading one. Which reactance represents a generator during a breaker-duty study versus a stability run? Which method fits which question? Most errors in practice are conceptual — the right tool applied with the wrong model.",
    objectives: [
      "Select the appropriate analysis method for a given engineering question",
      "Match machine reactances to the study type and time scale",
      "Recognise the classic traps in fault, load-flow and stability work",
    ],
    concepts: [
      {
        term: "Method selection",
        kind: "method",
        statement:
          "Use Thevenin/Z-bus for three-phase fault duty, sequence networks for unbalanced faults, load flow for steady-state voltages and flows, and swing or equal-area analysis for dynamic security.",
        detail:
          "The questions differ: what the breaker must interrupt (subtransient current plus asymmetry), what voltages buses will hold (load flow), and whether the plant rides through an outage (stability). Mixing tools mixes time scales and produces confident nonsense.",
      },
      {
        term: "Reactance choice",
        kind: "definition",
        statement:
          "Breaker interrupting duty uses X''d, transient stability uses X'd, and steady-state voltage and synchronising studies use X_d.",
        detail:
          "The subtransient component decays with a 20-50 ms time constant and the transient over roughly 0.5-2 s, after which field control makes X_d govern. Using X'd in a breaker study can understate duty by a factor approaching two.",
      },
      {
        term: "Load-flow traps",
        kind: "insight",
        statement:
          "A converged case with a slack bus absorbing huge losses, or every PV bus pinned on its Q limit, is a warning rather than an answer.",
        detail:
          "Other classics: forgetting that a bus cannot be both slack and PV, wrong tap data on transformers, and accepting the low-voltage solution branch of the equations instead of the operating point. Sanity-check power balances and voltages against expectations before trusting output.",
      },
      {
        term: "Fault-study traps",
        kind: "insight",
        statement:
          "Top fault-study errors: omitting 3Z_f in LG faults, ignoring DC offset and X/R, forgetting motor infeed, and using nominal instead of actual prefault voltage.",
        detail:
          "Induction motors feed roughly their locked-rotor current (5-7 × FLC) into nearby faults for the first few cycles and count toward breaker duty. Resistance-earthed systems make LG currents small but make zero-sequence relaying essential.",
      },
      {
        term: "Stability traps",
        kind: "insight",
        statement:
          "Stability depends on clearing speed, not just on margins — a study that ignores relay and breaker time flatters the system.",
        detail:
          "A first-swing-stable case can still grow inter-area oscillations if damping is poor. Load modelling matters too: constant-power loads give pessimistic critical clearing times compared with constant-impedance representations, which makes them a conservative screening choice.",
      },
    ],
    examples: [
      {
        title: "Choosing the right reactance",
        problem:
          "A generator has X''d = 0.15, X'd = 0.30 and X_d = 1.20 pu on rating. Estimate the initial fault-current contribution at 1.0 pu terminal voltage for (a) breaker-duty and (b) transient-studies, and (c) the sustained value.",
        steps: [
          {
            label: "Breaker duty",
            text: "Use the subtransient reactance: I'' = 1/0.15 = 6.67 pu. This, plus the DC-offset factor, sets the interrupting requirement.",
          },
          {
            label: "Stability run",
            text: "Use the transient reactance: I' = 1/0.30 = 3.33 pu for the first-swing network model.",
          },
          {
            label: "Sustained current",
            text: "With field response, X_d = 1.20 gives I_s = 0.83 pu — far below interrupting levels but relevant to sustained-fault damage.",
          },
          {
            label: "Read the gap",
            text: "The breaker-duty current is twice the transient value; using the wrong reactance halves the calculated duty.",
          },
        ],
        result: "I'' = 6.67 pu (breaker duty), I' = 3.33 pu (stability), I_s = 0.83 pu (sustained).",
      },
    ],
    keyTakeaways: [
      "Match the tool to the question: fault duty, unbalanced faults, load flow and dynamics answer different questions on different time scales.",
      "X''d for interruption, X'd for the first swing, X_d for steady state.",
      "Most wrong answers in practice come from model selection, not arithmetic.",
    ],
    quiz: [
      {
        q: "For circuit-breaker interrupting duty near a generator, the machine reactance to use is:",
        options: ["X_d", "X'd", "X''d", "the step-up transformer leakage reactance only"],
        answer: 2,
        explanation: "The subtransient reactance gives the highest initial fault current that the breaker must interrupt.",
      },
      {
        q: "In an LG fault calculation, the fault impedance enters the sequence network as:",
        options: ["Z_f", "2Z_f", "3Z_f", "Z_f/3"],
        answer: 2,
        explanation: "The same fault current I_a1 flows through Z_f in each of the three sequences, giving 3Z_f in the series loop.",
      },
      {
        q: "Which statement about the slack bus is correct?",
        options: [
          "Its voltage magnitude and angle are fixed",
          "Its P and Q are both specified",
          "It must be the largest generator",
          "It carries no current",
        ],
        answer: 0,
        explanation: "The slack holds |V| and δ (usually 0°) and absorbs the unknown system losses.",
      },
      {
        q: "A converged load flow shows a load bus at 0.85 pu with all equipment supposedly in service. The best first reaction is to:",
        options: [
          "accept it — solver output is ground truth",
          "check for a low-voltage solution branch, wrong tap data or overstated load",
          "switch to Gauss-Seidel and compare",
          "raise the slack bus voltage",
        ],
        answer: 1,
        explanation: "Convergence says nothing about being on the physical solution branch; data and tap settings are the usual culprits.",
      },
      {
        q: "Induction-motor contribution to breaker duty is typically about:",
        options: ["motor full-load current", "1.5 × full-load current", "locked-rotor current, 5-7 × FLC", "zero"],
        answer: 2,
        explanation: "Motors act as sources briefly, contributing roughly locked-rotor current during the first cycles of a fault.",
      },
    ],
  },
  {
    sectionId: "ee-e-protection-s1",
    readingTime: 8,
    intro:
      "Protection exists to detect faults and isolate only the faulted element, quickly enough to limit damage and preserve stability. It is a philosophy of zones and redundancy rather than a catalogue of relays: every part of the power system lies inside at least two overlapping zones, primary protection acts within its zone, and backup covers the failure of any single element.",
    objectives: [
      "Explain zone overlap and why it is deliberate",
      "Distinguish primary from backup protection and dependability from security",
      "Describe the role of CTs and VTs in feeding protective relays",
    ],
    concepts: [
      {
        term: "Zones of protection",
        kind: "definition",
        statement:
          "Each zone covers one system element — generator, transformer, busbar or line — and overlaps its neighbours across a circuit breaker, with the overlap defined by CT locations.",
        detail:
          "A fault anywhere is cleared by the nearest breakers on both sides. Overlap ensures no dead spot, while keeping the overlapped region tiny limits the area where two zones both trip. Zones are bounded by where the CTs sit, not by the breaker contacts.",
      },
      {
        term: "Primary and backup protection",
        kind: "method",
        statement:
          "Primary protection clears in-zone faults at the highest available speed; backup protection operates if the primary or its breaker fails.",
        detail:
          "Local backup (breaker-failure protection) trips surrounding breakers if current persists after a set time; remote backup grades time-delayed relays one zone further out, sacrificing speed for certainty. Both exist because no component is perfect.",
      },
      {
        term: "Reliability, dependability and security",
        kind: "definition",
        statement:
          "Reliability splits into dependability — operating for every in-zone fault — and security — not operating for anything else. The five desired qualities are reliability, speed, selectivity, sensitivity and economy.",
        detail:
          "Duplicate schemes with no-vote tripping raise dependability; voting, blocking logic and tighter settings raise security. Every practical scheme is a deliberate trade between the two, because improving one usually costs the other.",
      },
      {
        term: "CTs and VTs",
        kind: "definition",
        statement:
          "Current transformers scale primary current to 1 A or 5 A secondaries at rated current; voltage transformers scale primary voltage to a standard secondary such as 110 V line-to-line.",
        detail:
          "Protection-class CTs must stay accurate up to many times rated current — the knee point and accuracy limit factor govern this — or the relay sees a distorted waveform. A saturated CT during a heavy through-fault is the root cause of many false operations.",
      },
      {
        term: "Speed versus selectivity",
        kind: "insight",
        statement:
          "Every extra cycle of fault-clearing time increases damage, instability risk and customer interruptions, yet selectivity forces some zones to wait.",
        detail:
          "The compromise is quantified by grading margins: instantaneous elements inside the protected zone, time-graded elements reaching beyond it, and total EHV clearance in 2-5 cycles including breaker time.",
      },
    ],
    examples: [
      {
        title: "Grading margin between primary and backup",
        problem:
          "A primary relay clears an in-zone fault in 0.10 s and its breaker interrupts in 0.08 s. Determine the minimum operating time for the upstream backup, allowing 0.05 s for relay overshoot and 0.17 s for CT and setting tolerances.",
        steps: [
          {
            label: "Primary total clearance",
            text: "Total time = relay time + breaker time = 0.10 + 0.08 = 0.18 s.",
          },
          {
            label: "Overshoot allowance",
            text: "The backup element may keep moving briefly after the current disappears: allow 0.05 s.",
          },
          {
            label: "Tolerance allowance",
            text: "CT errors, relay timing errors and setting tolerances: allow 0.17 s.",
          },
          {
            label: "Backup setting",
            text: "Backup operating time must be at least 0.18 + 0.05 + 0.17 = 0.40 s for faults inside the primary zone.",
          },
        ],
        result: "Set the backup to at least 0.40 s — the classic grading (CTI) margin of roughly 0.3-0.5 s.",
      },
    ],
    keyTakeaways: [
      "Zones overlap at breakers; CT placement, not breaker placement, defines zone boundaries.",
      "Primary is fast and selective; backup is slower but certain; reliability = dependability + security.",
      "CT saturation at high fault current is the classic cause of protection misoperation — check knee points at maximum fault current.",
    ],
    quiz: [
      {
        q: "The overlap of adjacent protection zones is arranged so that:",
        options: [
          "relays are not duplicated",
          "no fault can lie outside all zones",
          "the number of CTs is halved",
          "breakers are shared between zones",
        ],
        answer: 1,
        explanation: "Overlap closes every possible dead spot; the price is a small region where two zones may both operate.",
      },
      {
        q: "Dependability of a protection system means:",
        options: [
          "it never maloperates",
          "it always operates for faults inside its zone",
          "it is cheap to maintain",
          "it uses only numerical relays",
        ],
        answer: 1,
        explanation: "Dependability is the certainty of operation for in-zone faults; security is restraint for everything else.",
      },
      {
        q: "A 2000/5 A CT carrying 10 kA of fault current delivers, before saturation:",
        options: ["5 A", "25 A", "50 A", "100 A"],
        answer: 1,
        explanation: "Secondary = 10,000 × (5/2000) = 25 A.",
      },
      {
        q: "Remote backup differs from local (breaker-failure) backup because it:",
        options: [
          "trips the same breaker faster",
          "uses time-graded relays in the next zone out",
          "needs no CTs",
          "responds only to earth faults",
        ],
        answer: 1,
        explanation: "Remote backup sits further upstream with longer delays; local backup trips adjacent breakers on persistent current.",
      },
    ],
  },
  {
    sectionId: "ee-e-protection-s2",
    readingTime: 9,
    intro:
      "The relay is the decision element: it measures current, voltage or impedance and issues the trip order when its characteristic is satisfied. Inverse-definite-minimum-time characteristics dominate overcurrent protection because they trade speed against selectivity automatically — near faults trip fast, distant faults wait. Numerical relays now implement these classical curves in software, plus a library of extras.",
    objectives: [
      "Interpret the standard IDMT curve and its PSM and TMS parameters",
      "Compute relay operating time for a given fault current",
      "Compare electromagnetic, static and numerical relay technologies",
    ],
    concepts: [
      {
        term: "IDMT characteristic",
        kind: "law",
        statement:
          "Standard inverse curve: t = TMS × 0.14/(PSM^0.02 - 1) seconds.",
        detail:
          "Operating time falls steeply with current at low PSM and flattens to a nearly constant minimum at high PSM — the 'definite minimum' in the name. Other standard curves: very inverse t = TMS × 13.5/(PSM - 1) and extremely inverse t = TMS × 80/(PSM² - 1), the latter matching equipment with I²t damage curves.",
      },
      {
        term: "Plug setting and PSM",
        kind: "notation",
        statement:
          "The plug setting fixes relay pickup as a percentage of CT secondary rating; PSM = secondary fault current / plug-setting current.",
        detail:
          "Plug settings were historically selectable in 25% steps from 50% to 200% of relay rating. For a 400/1 A CT with 100% plug setting, a 4000 A primary fault gives PSM = 4000/400 = 10 — ten times pickup.",
      },
      {
        term: "TMS (time multiplier setting)",
        kind: "notation",
        statement:
          "The TMS scales the whole curve vertically, historically from 0.1 to 1.0 in 0.05 steps.",
        detail:
          "Grading between relays in series is achieved by successively larger TMS values so each upstream relay waits its grading margin longer for faults in the downstream zone. TMS does not change pickup, only time.",
      },
      {
        term: "Relay technologies",
        kind: "definition",
        statement:
          "Electromagnetic (induction disc), static (analogue electronics) and numerical (microprocessor) relays implement the same measurement logic with different hardware.",
        detail:
          "Induction discs gave inherent time delay and visible movement; static relays added precision and lower burdens; numerical relays add self-supervision, event records and multiple characteristics in one chassis at a fraction of the wiring.",
      },
      {
        term: "Numerical relay extras",
        kind: "insight",
        statement:
          "One numerical chassis provides overcurrent, earth-fault, directional, distance and autoreclose logic with disturbance recording and communications.",
        detail:
          "Setting groups can switch with system state, and standards-based digital communication lets relays share measurements for busbar and differential schemes without dedicated pilot wires. The relay has become a measurement computer with protection as one application.",
      },
    ],
    examples: [
      {
        title: "IDMT operating time calculation",
        problem:
          "An overcurrent relay is fed by a 400/1 A CT with plug setting 100% and TMS = 0.3. Using the standard inverse characteristic, find its operating time for a 4000 A fault.",
        steps: [
          {
            label: "Pickup",
            text: "Plug setting 100% of the 1 A secondary means pickup at 1 A secondary, corresponding to 400 A primary.",
          },
          {
            label: "PSM",
            text: "PSM = 4000/400 = 10.",
          },
          {
            label: "Curve time at TMS 1",
            text: "t = 0.14/(10^0.02 - 1) = 0.14/(1.0471 - 1) = 0.14/0.0471 = 2.97 s.",
          },
          {
            label: "Apply the TMS",
            text: "t = 0.3 × 2.97 = 0.89 s.",
          },
        ],
        result: "The relay operates in approximately 0.89 s for the 4000 A fault.",
      },
    ],
    keyTakeaways: [
      "PSM is the fault current as a multiple of relay pickup; TMS shifts the whole curve vertically.",
      "Standard inverse: t = TMS × 0.14/(PSM^0.02 - 1).",
      "Numerical relays reproduce the classical curves plus recording, communications and multi-function logic in one device.",
    ],
    quiz: [
      {
        q: "A 400/1 CT feeds a relay with plug setting 125%. The pickup current referred to the primary is:",
        options: ["400 A", "500 A", "320 A", "1000 A"],
        answer: 1,
        explanation: "125% of 1 A secondary corresponds to 1.25 × 400 = 500 A primary.",
      },
      {
        q: "For PSM = 10 and TMS = 0.1, the standard inverse operating time is about:",
        options: ["0.30 s", "0.89 s", "2.97 s", "8.9 s"],
        answer: 0,
        explanation: "t = 0.1 × 0.14/(10^0.02 - 1) = 0.1 × 2.97 ≈ 0.30 s.",
      },
      {
        q: "The 'definite minimum time' in an IDMT relay refers to:",
        options: [
          "the relay reset time",
          "the flattening of the curve to nearly constant time at high PSM",
          "a fixed 0.1 s delay",
          "the breaker operating time",
        ],
        answer: 1,
        explanation: "Beyond roughly PSM 20 the curve is almost flat — further current increases barely reduce the time.",
      },
      {
        q: "Extremely inverse characteristics are preferred where:",
        options: [
          "long grading chains exist",
          "the protected equipment has an I²t damage curve such as cables or machines",
          "fault levels are very low",
          "CTs may saturate",
        ],
        answer: 1,
        explanation: "The 80/(PSM² - 1) shape matches thermal withstand curves and grades well with fuses.",
      },
    ],
  },
  {
    sectionId: "ee-e-protection-s3",
    readingTime: 10,
    intro:
      "A circuit breaker must interrupt currents the grid can barely deliver: carrying thousands of amperes continuously and extinguishing an arc at a natural current zero within cycles. Whether the medium is oil, SF6 or vacuum, the physics is the same — dielectric strength across the separating contacts must recover faster than the transient recovery voltage rises. Ratings and test duties capture this race.",
    objectives: [
      "Explain arc physics and interruption at current zero",
      "Distinguish recovery voltage, restriking voltage and RRRV",
      "Compare SF6, vacuum and oil technologies with typical ratings",
    ],
    concepts: [
      {
        term: "Arc physics",
        kind: "definition",
        statement:
          "The arc is a thermally ionised plasma column that conducts even as the contacts separate; interruption succeeds only at a current zero where the plasma de-ionises before voltage rebuilds.",
        detail:
          "At each power-frequency zero crossing the current falls to zero and the column cools. If dielectric recovery outruns the voltage across the gap the arc dies; otherwise it restrikes and current continues for another half cycle.",
      },
      {
        term: "Recovery versus restriking voltage",
        kind: "definition",
        statement:
          "Recovery voltage is the power-frequency rms voltage across the open breaker after final extinction; restriking voltage is the high-frequency transient that appears immediately at interruption.",
        detail:
          "The transient recovery voltage may overshoot to about twice the steady recovery peak. Its rate of rise — RRRV in kV/µs — is the critical stress; the breaker's dielectric must outrun it within microseconds of current zero.",
      },
      {
        term: "RRRV of a single-frequency circuit",
        kind: "law",
        statement:
          "With source inductance L and stray capacitance C: v(t) = E_m(1 - cos ω_n t), restriking peak = 2E_m, f_n = 1/(2π√(LC)) and maximum RRRV = ω_n E_m.",
        detail:
          "Adding capacitance across the contacts lowers the natural frequency and the RRRV — a classic mitigation for difficult duties. Resistance switching damps the transient and splits the recovery between two interruptions.",
      },
      {
        term: "SF6, vacuum and oil compared",
        kind: "insight",
        statement:
          "SF6 delivers superb interruption for EHV (up to 800 kV, 40-63 kA, 3-cycle duties); vacuum excels at fast, frequent, maintenance-free switching up to roughly 72.5-145 kV; oil is legacy equipment.",
        detail:
          "Electronegative SF6 captures free electrons and puffer designs blast the arc at zero; vacuum interrupters need only millimetre contact gaps in sealed bottles; oil quenches by hydrogen released from decomposition but is bulky, fire-risky and maintenance-heavy. Environmental pressure now pushes SF6-free designs for new installations.",
      },
      {
        term: "Ratings and test duties",
        kind: "definition",
        statement:
          "A breaker is rated by voltage, normal current, symmetrical breaking current with its DC component, making current (about 2.5 × rms breaking) and interrupting time in cycles.",
        detail:
          "The making rating reflects the peak asymmetrical current the mechanism must latch against. Standard test duties cover short-line faults with steep initial TRV, out-of-phase switching and capacitive currents, each stressing a different part of the race.",
      },
    ],
    examples: [
      {
        title: "Restriking voltage and RRRV",
        problem:
          "A 132 kV breaker interrupts a three-phase fault. The supply-side inductance per phase is 5 mH and the stray capacitance is 0.1 µF. Estimate the restriking voltage peak and its rate of rise.",
        steps: [
          {
            label: "Phase voltage peak",
            text: "E_m = √2 × 132/√3 = 107.8 kV.",
          },
          {
            label: "Restriking peak",
            text: "Neglecting resistance, the single-frequency recovery peaks at 2E_m = 215.5 kV.",
          },
          {
            label: "Natural frequency",
            text: "f_n = 1/(2π√(LC)) = 1/(2π√(5 × 10^-3 × 0.1 × 10^-6)) ≈ 7.1 kHz, so ω_n ≈ 4.47 × 10^4 rad/s.",
          },
          {
            label: "RRRV",
            text: "Maximum slope of E_m(1 - cos ω_n t) is E_m ω_n = 107.8 × 10^3 × 4.47 × 10^4 ≈ 4.8 kV/µs.",
          },
        ],
        result:
          "Restriking peak ≈ 215 kV with RRRV ≈ 4.8 kV/µs; the dielectric must win the race within a quarter of the 7.1 kHz cycle, about 35 µs.",
      },
    ],
    keyTakeaways: [
      "Interruption happens at current zero; the race is between dielectric recovery and TRV rise.",
      "Restriking voltage is the transient (peak up to 2E_m); recovery voltage is the steady power-frequency voltage afterwards.",
      "RRRV ≈ E_m ω_n; capacitance across the contacts tames both frequency and RRRV.",
    ],
    quiz: [
      {
        q: "Arc interruption in an AC circuit breaker fundamentally occurs:",
        options: [
          "when contacts reach full gap",
          "at a natural current zero",
          "when arc voltage exceeds source voltage",
          "at voltage zero",
        ],
        answer: 1,
        explanation: "Only at current zero does the plasma cool enough for the dielectric to recover.",
      },
      {
        q: "In the recovery transient v = E_m(1 - cos ω_n t), the peak restriking voltage is:",
        options: ["E_m", "1.5 E_m", "2 E_m", "4 E_m"],
        answer: 2,
        explanation: "The cosine term swings from -1 to +1, so v peaks at 2E_m.",
      },
      {
        q: "Adding capacitance in parallel with breaker contacts:",
        options: [
          "raises the RRRV",
          "lowers the natural frequency and the RRRV",
          "has no effect on the TRV",
          "increases the recovery voltage peak",
        ],
        answer: 1,
        explanation: "f_n = 1/(2π√(LC)) falls with C, and RRRV = ω_n E_m falls with it.",
      },
      {
        q: "Which pairing of interrupting medium and typical application is correct?",
        options: [
          "vacuum for EHV GIS, SF6 for distribution boards",
          "SF6 for EHV substation duty, vacuum for medium-voltage switchgear",
          "oil for all modern EHV gear",
          "air-blast for distribution networks",
        ],
        answer: 1,
        explanation: "SF6 dominates transmission-class duties; vacuum interrupters dominate MV switchgear through roughly the 72.5-145 kV class.",
      },
      {
        q: "The making-current rating of a breaker is approximately:",
        options: [
          "equal to the breaking current",
          "2.5 times the rms symmetrical breaking current, as a peak",
          "half the breaking current",
          "√3 times the breaking current",
        ],
        answer: 1,
        explanation: "Closing onto a fault must latch against the peak asymmetric current, about 2.5 × the rms breaking rating at 50 Hz.",
      },
    ],
  },
  {
    sectionId: "ee-e-protection-s4",
    readingTime: 10,
    intro:
      "Transmission lines are exposed, long and statistically the most fault-prone elements, so their protection balances reach, speed and dependability. Distance protection measures the ratio of voltage to current to estimate fault position, and stepped zones of reach cover the line and its neighbours. Differential and pilot schemes exchange information between ends for true unit protection.",
    objectives: [
      "Explain the stepped-zone principle of distance protection",
      "Calculate zone reaches in primary and secondary ohms",
      "Describe line differential and pilot-relaying schemes",
    ],
    concepts: [
      {
        term: "Distance measurement",
        kind: "method",
        statement:
          "The relay computes the apparent impedance Z = V/I at its terminal; for a fault at per-kilometre impedance z and distance d, Z ≈ z·d.",
        detail:
          "Because the measurement is a ratio, reach is largely independent of source strength — the key advantage over overcurrent grading. Fault resistance, load impedance and infeed from the remote end distort the measurement, which is why settings carry margins.",
      },
      {
        term: "Three-zone stepped characteristics",
        kind: "law",
        statement:
          "Zone 1: 80-85% of the line, instantaneous. Zone 2: 100% of the line plus about 20-50% of the shortest adjacent line, delayed 0.3-0.5 s. Zone 3: roughly 120% of the line plus the longest adjacent line, delayed up to about 1.5 s.",
        detail:
          "Zone 1 is deliberately short so it can never overreach the remote bus; Zone 2 covers the remaining line with a delay that grades with the neighbour's Zone 1; Zone 3 provides remote backup. Impedance, mho, quadrilateral and lens shapes tune the reach in the Z-plane.",
      },
      {
        term: "Secondary ohms",
        kind: "notation",
        statement: "Relay reach in secondary ohms = primary ohms × CT ratio / VT ratio.",
        detail:
          "The relay sees voltage divided by the VT ratio and current divided by the CT ratio, so its impedance scales by CT/VT. Always verify settings in both primary and secondary ohms against the relay's measurable range.",
      },
      {
        term: "Line differential protection",
        kind: "method",
        statement:
          "Currents entering the protected zone are compared by Kirchhoff's law; any net inflow beyond charging current and CT errors is an internal fault.",
        detail:
          "Older pilot-wire schemes carried the comparison over metallic circuits; modern digital current differential exchanges sampled phasors over fibre. The result is unit protection — absolute selectivity with no grading delays — at the price of channel dependence.",
      },
      {
        term: "Pilot (teleprotection) schemes",
        kind: "method",
        statement:
          "Permissive schemes trip instantly when local Zone 2 and a permission signal from the remote end both assert; blocking schemes trip unless a block arrives.",
        detail:
          "Permissive overreach transfer trip gives instantaneous clearance for 100% of the line; blocking trades security for dependability in the opposite direction. Carrier, microwave or fibre channels carry the signals, and channel failure degrades the scheme gracefully to stepped zones.",
      },
    ],
    examples: [
      {
        title: "Three-zone reach settings",
        problem:
          "Line AB is 100 km with 0.4 Ω/km reactance (X_AB = 40 Ω primary); the adjacent line BC is 60 km of the same construction (24 Ω). The relay at A uses a 400/1 CT and a 132 kV/110 V VT. Set the three zones in primary and secondary ohms.",
        steps: [
          {
            label: "Zone 1 (instantaneous)",
            text: "80% of AB: 0.8 × 40 = 32 Ω primary, operating instantaneously.",
          },
          {
            label: "Zone 2",
            text: "Min(120% of AB, AB + 50% of BC) = min(48, 40 + 12) = 48 Ω, delayed 0.4 s.",
          },
          {
            label: "Zone 3",
            text: "120% of (AB + BC) = 1.2 × (40 + 24) = 76.8 Ω, delayed 1.0 s as remote backup.",
          },
          {
            label: "Convert to secondary",
            text: "CT ratio = 400, VT ratio = 132,000/110 = 1200, so reaches are 32/3 = 10.7 Ω, 48/3 = 16 Ω and 76.8/3 = 25.6 Ω secondary.",
          },
        ],
        result:
          "Zone 1: 32 Ω at 0 s; Zone 2: 48 Ω at 0.4 s; Zone 3: 76.8 Ω at 1.0 s (primary ohms) — 10.7, 16 and 25.6 Ω at the relay.",
      },
    ],
    keyTakeaways: [
      "Zone 1 (80%) never overreaches; Zone 2 covers the remote end with delay; Zone 3 backs up the neighbour.",
      "Secondary ohms = primary ohms × CT ratio / VT ratio.",
      "Current differential gives unit protection with no grading; teleprotection adds channel-dependent instantaneous tripping over the whole line.",
    ],
    quiz: [
      {
        q: "Zone 1 of a distance relay is set to only 80% of the line impedance because:",
        options: [
          "relays cannot measure full line impedance",
          "measurement error, infeed and transients could cause overreach beyond the remote bus",
          "the VT cannot supply more reach",
          "Zone 2 covers the first 80% anyway",
        ],
        answer: 1,
        explanation: "An overreaching Zone 1 would trip instantaneously for faults on the adjacent line — unacceptable loss of selectivity.",
      },
      {
        q: "Line AB has Z = 50 Ω primary, CT 600/5 and VT 132 kV/110 V. Zone 1 at 80% in secondary ohms is:",
        options: ["40 Ω", "4 Ω", "8 Ω", "12 Ω"],
        answer: 1,
        explanation: "Zone 1 = 40 Ω primary; secondary = 40 × (600/5)/1200 = 40 × 120/1200 = 4 Ω.",
      },
      {
        q: "A permissive overreach transfer trip (POTT) scheme clears a Zone-2 fault instantly when:",
        options: [
          "local Zone 2 starts and the remote end sends permission",
          "the teleprotection channel fails",
          "Zone 3 picks up",
          "the remote breaker opens first",
        ],
        answer: 0,
        explanation: "Both ends seeing the fault in their overreaching zone confirms it is on the line, permitting instant tripping.",
      },
      {
        q: "The main advantage of distance protection over plain time-graded overcurrent is:",
        options: [
          "no CTs are needed",
          "reach is largely independent of source strength and fault level",
          "no time delays are ever needed",
          "it also protects remote substations",
        ],
        answer: 1,
        explanation: "The V/I ratio fixes reach regardless of how much current the sources can deliver.",
      },
    ],
  },
  {
    sectionId: "ee-e-protection-s5",
    readingTime: 9,
    intro:
      "Each major apparatus fails in its own characteristic ways — transformers by insulation gas, motors by heat and stalling, generators by stator and rotor earth faults — and each has purpose-built protection. The schemes stack simple principles (gas detection, thermal replicas, differential and restricted earth fault) into layers matched to the failure modes.",
    objectives: [
      "Explain the Buchholz relay and its two operating stages",
      "Describe motor thermal and stall protection",
      "Outline generator stator and rotor earth-fault schemes",
    ],
    concepts: [
      {
        term: "Buchholz protection",
        kind: "method",
        statement:
          "A gas-accumulation relay in the pipe between transformer tank and conservator alarms on slow gas collection and trips on the oil surge of a violent internal fault.",
        detail:
          "Minor incipient faults — overheating, partial discharge — decompose oil slowly and collect roughly 250-300 cm³ of gas to raise the alarm. A heavy arc vaporises oil, and the pressure wave drives the surge vane to trip within a fraction of a second. Buchholz sees faults that electrical schemes cannot.",
      },
      {
        term: "Motor thermal protection",
        kind: "method",
        statement:
          "A thermal replica integrates I² heating against the motor's heating and cooling time constants to model winding temperature, with a separate timed stall element.",
        detail:
          "Typical settings: overload pickup at 105-115% of full-load current with the curve below the machine's thermal withstand, plus a locked-rotor element timing the 5-7 × FLC starting current against the hot-stall withstand (commonly 10-30 s). Restart supervision blocks repeated starts until the model cools.",
      },
      {
        term: "Generator stator protection",
        kind: "method",
        statement:
          "Biased differential covers phase faults; neutral earthing resistance limits earth-fault current, and neutral-voltage plus third-harmonic or injection schemes detect earth faults along the winding.",
        detail:
          "Large units are earthed through a distribution transformer or resistor that limits earth-fault current to a few amperes up to a few tens of amperes, preventing core burning. A neutral overvoltage element set around 5% covers about 95% of the winding from the terminal; third-harmonic or low-frequency injection covers the neutral-end remainder for 100% protection.",
      },
      {
        term: "Generator rotor earth fault",
        kind: "method",
        statement:
          "The field circuit is unearthed, so the first earth fault causes no current — injection-based schemes detect it and alarm before a second fault can short part of the field.",
        detail:
          "Historic schemes used a potentiometer and relay between field and earth; modern numerical relays inject a coded signal and monitor for leakage. One fault is an alarm; policy then schedules an orderly shutdown before the second one occurs.",
      },
      {
        term: "Further generator elements",
        kind: "insight",
        statement:
          "Loss of excitation (offset-mho characteristic in the impedance plane), negative-sequence rotor heating (I²t), overfluxing (V/Hz) and backup distance complete the scheme.",
        detail:
          "Negative-sequence currents induce double-frequency rotor currents that heat round-rotor bodies; the relay mirrors the machine's I₂²t withstand. Loss of field drives the machine underexcited and, eventually, out of step — the offset mho in the -X direction catches it early.",
      },
    ],
    examples: [
      {
        title: "Generator stator earth-fault current",
        problem:
          "An 11 kV generator neutral is earthed through an equivalent 100 Ω resistance. Estimate the earth-fault current for a bolted phase-to-earth fault at the stator terminal, and state the coverage of a 5% neutral-voltage element.",
        steps: [
          {
            label: "Sequence path",
            text: "For an LG fault, I_f = 3E/(Z_1 + Z_2 + Z_0 + 3R_n). The machine reactances are negligible beside 3 × 100 = 300 Ω.",
          },
          {
            label: "Compute",
            text: "E = 11/√3 kV = 6.35 kV, so I_f ≈ 3 × 6351/300 ≈ 63.5 A — equivalently E/R_n.",
          },
          {
            label: "Significance",
            text: "The resistor caps fault energy so the stator core is not burned, but 63.5 A still demands fast clearance.",
          },
          {
            label: "Relaying",
            text: "A neutral overvoltage element picking up at 5% of phase voltage covers about 95% of the winding from the terminal; third-harmonic or injection schemes extend coverage to 100%.",
          },
        ],
        result: "I_f ≈ 63.5 A, limited by design and detected by neutral-voltage earth-fault relaying.",
      },
    ],
    keyTakeaways: [
      "Buchholz alarms on gas and trips on oil surge — the only protection that sees incipient transformer faults.",
      "Motor protection models heat: an overload curve below the withstand plus a timed stall element.",
      "Generator earth-fault current is deliberately small (≈ E/R_n); neutral-voltage plus third-harmonic or injection schemes give 95-100% stator coverage.",
      "Rotor circuits are unearthed; the first earth fault is alarmed by injection schemes before a second can occur.",
    ],
    quiz: [
      {
        q: "A Buchholz relay trips on:",
        options: [
          "accumulation of about 300 cm³ of gas",
          "a surge of oil toward the conservator",
          "high winding temperature",
          "overcurrent in the HV winding",
        ],
        answer: 1,
        explanation: "Slow gas accumulation raises an alarm; the oil surge from a violent fault drives the trip vane.",
      },
      {
        q: "An 11 kV generator with 100 Ω neutral earthing has a terminal earth-fault current of about:",
        options: ["6350 A", "635 A", "63.5 A", "21 A"],
        answer: 2,
        explanation: "I_f ≈ E/R_n = (11/√3 × 1000)/100 ≈ 63.5 A.",
      },
      {
        q: "Third-harmonic or injection schemes on a generator stator are used to:",
        options: [
          "detect phase-to-phase faults",
          "cover the neutral-end 5-10% of the winding that neutral-voltage schemes miss",
          "measure rotor current",
          "detect loss of excitation",
        ],
        answer: 1,
        explanation: "Neutral-voltage elements lose sensitivity near the neutral; harmonic or injection methods close that gap.",
      },
      {
        q: "Negative-sequence current is dangerous mainly because it:",
        options: [
          "unbalances the load",
          "induces double-frequency currents that heat the rotor of round-rotor machines",
          "causes DC offset in fault current",
          "saturates the CTs",
        ],
        answer: 1,
        explanation: "The stator's negative-sequence field rotates against the rotor, inducing 100 Hz currents in rotor body and wedges.",
      },
    ],
  },
  {
    sectionId: "ee-e-protection-s6",
    readingTime: 9,
    intro:
      "Lightning and switching impose voltages far above insulation ratings, arriving as traveling waves rather than steady signals. Shielding keeps most strokes off the conductors, arresters clamp what gets through, and insulation coordination makes sure equipment withstand exceeds what the protective devices let through — with margin.",
    objectives: [
      "Quantify lightning stroke parameters and the voltages they produce on lines",
      "Compare rod gaps with surge arresters",
      "Perform a basic insulation-coordination margin calculation",
    ],
    concepts: [
      {
        term: "Lightning stroke parameters",
        kind: "definition",
        statement:
          "First strokes deliver 2-200 kA with medians near 30 kA, fronts of a few microseconds and rates of rise of order 10 kA/µs.",
        detail:
          "Protection design keys on peak current (drives the surge amplitude), steepness (drives induced and travelled voltages) and charge (drives thermal and mechanical duty). Multi-stroke flashes add repeated stress to arresters and insulation.",
      },
      {
        term: "Surge voltage on a struck line",
        kind: "law",
        statement:
          "A stroke of current I striking a line of surge impedance Z launches a voltage V = IZ/2 in each direction from the strike point.",
        detail:
          "With I = 30 kA and Z = 400 Ω the surge is 6000 kV — no practical insulation survives a direct hit, which is why shielding wires and arresters, not insulation alone, carry the burden. At an open busbar end the arriving wave doubles again.",
      },
      {
        term: "Rod gap versus surge arrester",
        kind: "insight",
        statement:
          "A rod gap is cheap and robust but its sparkover is erratic and it cannot stop power-frequency follow current; a modern gapless zinc-oxide arrester clamps the voltage nonlinearly and reseals by itself.",
        detail:
          "The ZnO varistor conducts steeply above its reference voltage, presenting its residual voltage as the protective level; silicon-carbide arresters needed series gaps precisely because they could not block power-frequency current. Rod gaps survive only as rough backup protection on some transformers.",
      },
      {
        term: "Insulation coordination",
        kind: "method",
        statement:
          "Set equipment BIL and chopped-wave withstand above arrester protective levels with a margin — commonly 20-25% or more — including the separation-distance effect.",
        detail:
          "Protective margin = (withstand − protective level)/protective level. The voltage at the protected equipment exceeds the arrester residual by the inductive drop along arrester leads and connections, which grows with stroke steepness — so arresters mount close to what they protect.",
      },
      {
        term: "Shielding and earthing",
        kind: "method",
        statement:
          "Shield (earth) wires intercept direct strokes; low tower-footing resistance prevents backflashover from tower-potential rise.",
        detail:
          "When stroke current through the tower and its earthing raises the tower-top potential above the insulation withstand, a backflashover occurs — hence targets of roughly 10 Ω or less in high-keraunic areas. Line arresters on selected towers rescue poor sites.",
      },
    ],
    examples: [
      {
        title: "Stroke surge and protective margin",
        problem:
          "A 30 kA stroke hits a 400 Ω overhead line. Separately, on a 132 kV system a transformer has BIL 550 kV while the station arrester's residual voltage at 10 kA discharge is 350 kV. Find the line surge and the protective margin.",
        steps: [
          {
            label: "Surge on the line",
            text: "V = IZ/2 = 30,000 × 400/2 = 6,000,000 V = 6000 kV, split equally into both directions.",
          },
          {
            label: "Arrester action",
            text: "At the station the ZnO arrester conducts the 10 kA discharge and holds its 350 kV residual voltage.",
          },
          {
            label: "Margin",
            text: "Protective margin = (550 − 350)/350 × 100 = 57%.",
          },
          {
            label: "Judge",
            text: "57% comfortably exceeds the usual 20-25% requirement, even allowing for separation distance between arrester and transformer.",
          },
        ],
        result:
          "The direct stroke is a 6000 kV surge; the arrester clamps the station to 350 kV at 10 kA, leaving a 57% margin to the 550 kV BIL.",
      },
    ],
    keyTakeaways: [
      "V = IZ/2: a direct 30 kA stroke on a 400 Ω line is a 6000 kV surge — shielding, not insulation, handles direct strokes.",
      "Gapless ZnO arresters clamp overvoltage and reseal without power-follow; rod gaps are crude, erratic backups.",
      "Coordination keeps BIL above arrester residual by at least 20-25%, including the lead-length (separation) effect.",
    ],
    quiz: [
      {
        q: "A 20 kA stroke terminating on a 400 Ω line produces a surge of:",
        options: ["4000 kV", "8000 kV", "2000 kV", "500 kV"],
        answer: 0,
        explanation: "V = IZ/2 = 20,000 × 400/2 = 4,000,000 V = 4000 kV.",
      },
      {
        q: "Compared with a rod gap, a gapless ZnO surge arrester:",
        options: [
          "has more variable sparkover",
          "clamps the overvoltage and interrupts power-frequency follow current without gaps",
          "cannot conduct lightning current",
          "is slower but cheaper",
        ],
        answer: 1,
        explanation: "The nonlinear varistor conducts surge current, then blocks power-frequency current by itself — no gaps to reseal.",
      },
      {
        q: "A transformer has BIL 650 kV and the arrester protective level is 450 kV. The protective margin is:",
        options: ["44%", "69%", "30%", "18%"],
        answer: 0,
        explanation: "(650 − 450)/450 × 100 ≈ 44%.",
      },
      {
        q: "Backflashover on a transmission tower occurs when:",
        options: [
          "the arrester fails",
          "tower-top potential rises above line insulation withstand due to stroke current in the tower and earthing",
          "lightning strikes only at mid-span",
          "the shield wire is missing",
        ],
        answer: 1,
        explanation: "I × Z_tower (and footing resistance) raises the tower above the line's insulation level, flashing over the insulators.",
      },
    ],
  },
  {
    sectionId: "ee-e-protection-s7",
    readingTime: 9,
    intro:
      "The busbar arrangement of a substation sets its cost, flexibility and survivability: single bus is cheap but any breaker work de-energises a bay, while ring and breaker-and-a-half schemes buy security with extra breakers. On overhead lines, auto-reclosing converts the 80-90% of faults that are transient into momentary dips instead of sustained outages.",
    objectives: [
      "Compare single, double, ring and breaker-and-a-half busbar schemes",
      "Choose reclosing practice — number of shots, dead time and three-pole versus single-pole",
      "Justify dead time from the arc de-ionisation requirement",
    ],
    concepts: [
      {
        term: "Single and sectionalised bus",
        kind: "definition",
        statement:
          "One busbar feeds every bay, so a bus fault or breaker maintenance drops the whole station unless a bus-section breaker splits it into halves.",
        detail:
          "It is the cheapest and simplest layout, suited to small distribution substations. A main-and-transfer arrangement keeps feeders in service during breaker maintenance by transferring them to a spare bus and coupling breaker.",
      },
      {
        term: "Double bus schemes",
        kind: "method",
        statement:
          "Two main buses feed each bay, selected either by bus-selector isolators (one breaker per bay) or by dedicated breakers (double-breaker scheme).",
        detail:
          "Double-bus single-breaker saves breakers but selector switching is a procedural risk; double-bus double-breaker gives full redundancy at nearly double the cost. These layouts earn their keep at generation switchyards and critical EHV nodes.",
      },
      {
        term: "Ring bus",
        kind: "method",
        statement:
          "Breakers form a closed ring with bays connected between adjacent pairs, so each circuit is fed from two sides and n bays need only n breakers.",
        detail:
          "Any single breaker can be taken out or can fail without losing a circuit; a bay fault trips its two adjacent breakers. Beyond about four to six bays the arrangement becomes awkward and protection more complex, which is where breaker-and-a-half takes over.",
      },
      {
        term: "Breaker-and-a-half",
        kind: "definition",
        statement:
          "Two buses are joined by strings of three breakers feeding two circuits each, so every circuit has two independent breakers and the station averages 1.5 breakers per circuit.",
        detail:
          "Any breaker can be maintained or can fail without dropping a circuit, and a bus fault trips only that bus's breakers while all circuits continue through the other bus. It is the standard choice for large, high-value EHV substations.",
      },
      {
        term: "Auto-reclosing practice",
        kind: "method",
        statement:
          "After a trip the breaker recloses after a dead time long enough for the arc path to de-ionise — commonly single-shot on HV/EHV lines and up to three shots with increasing delays on distribution feeders.",
        detail:
          "The empirical de-ionisation rule t ≈ 10.5 + V/34.5 cycles (V in kV) gives about 0.29 s at 132 kV, so practical dead times run from a few hundred milliseconds to a few seconds. Single-pole reclose on long EHV lines keeps two phases transmitting power during the dead time, directly aiding transient stability. Synchro-check guards the reclose when the line may have drifted in angle.",
      },
    ],
    examples: [
      {
        title: "Choosing dead time from de-ionisation",
        problem:
          "A 132 kV overhead line uses single-shot auto-reclose. Using the empirical de-ionisation time t = 10.5 + V/34.5 cycles, select a practical dead time and justify the scheme.",
        steps: [
          {
            label: "Formula",
            text: "t = 10.5 + 132/34.5 = 10.5 + 3.8 = 14.3 cycles.",
          },
          {
            label: "Convert to seconds",
            text: "At 50 Hz, 14.3 cycles = 14.3/50 = 0.29 s.",
          },
          {
            label: "Add margin",
            text: "Allow for arc variability, mechanism and air/SF6 pressure: choose the next standard setting of 0.5 s.",
          },
          {
            label: "Scheme",
            text: "Single shot with 0.5 s dead time and lockout after one unsuccessful reclose; 80-90% of overhead faults are transient, so most recloses succeed.",
          },
        ],
        result:
          "Minimum dead time ≈ 0.29 s; set 0.5 s single-shot auto-reclose to restore the line within half a second on transient faults.",
      },
    ],
    keyTakeaways: [
      "Scheme choice is a cost-flexibility-security trade: single bus (1 breaker/bay) → ring (1 breaker/bay, two-sided feed) → breaker-and-a-half (1.5 breakers/bay, full security).",
      "Ring and breaker-and-a-half schemes keep circuits fed through breaker maintenance or failure; double-bus arrangements add bus-level redundancy.",
      "Auto-reclose dead time must exceed the arc de-ionisation time, t ≈ 10.5 + V/34.5 cycles, and single-pole reclose supports EHV stability.",
    ],
    quiz: [
      {
        q: "In a breaker-and-a-half scheme, the number of breakers required for four circuits is:",
        options: ["4", "5", "6", "8"],
        answer: 2,
        explanation: "Two strings of two circuits with three breakers each: 2 × 3 = 6 breakers, or 1.5 per circuit.",
      },
      {
        q: "The main weakness of a single-busbar scheme is that:",
        options: [
          "it needs too many breakers",
          "a bus fault or breaker maintenance de-energises the whole station",
          "it cannot be protected",
          "it requires two earth switches per bay",
        ],
        answer: 1,
        explanation: "With one bus there is no alternative path; sectionalising or a transfer bus mitigates it.",
      },
      {
        q: "In a ring bus serving n bays, the number of breakers is:",
        options: ["n", "1.5n", "2n", "n/2"],
        answer: 0,
        explanation: "Each bay sits between two breakers of the ring, and each breaker is shared by two bays: n breakers for n bays.",
      },
      {
        q: "Using t = 10.5 + V/34.5 cycles, the de-ionisation time on a 220 kV line is about:",
        options: ["17 cycles", "10.5 cycles", "22 cycles", "34.5 cycles"],
        answer: 0,
        explanation: "t = 10.5 + 220/34.5 = 10.5 + 6.4 ≈ 17 cycles.",
      },
      {
        q: "Single-pole auto-reclose on a long EHV line mainly improves:",
        options: [
          "arc de-ionisation speed",
          "transient stability by keeping the healthy phases transmitting power during the dead time",
          "breaker contact life",
          "protection selectivity",
        ],
        answer: 1,
        explanation: "Two phases keep synchronising power flowing while the faulted phase recloses, easing the first swing.",
      },
    ],
  },
];

import type { FormulaEntry } from './formulas'

// ============================================================================
// Auto-completed formula sheet for chapters that had no entries.
// Every chapterId below exists in the library; section numbers match the
// real sections. Wired into FORMULAS via src/data/formulas.ts.
// ============================================================================

export const MISSING_FORMULAS: FormulaEntry[] = [
  // ---- chem-ch10 ----
  {
    chapterId: 'chem-ch10',
    section: '10.1',
    name: 'Amines & Diazonium Salts',
    formula: 'Amines & Diazonium Salts — Basicity orders, Hoffmann bromamide, diazotization and azo coupling.',
    note: 'Basicity orders, Hoffmann bromamide, diazotization and azo coupling.',
  },
  {
    chapterId: 'chem-ch10',
    section: '10.2',
    name: 'Carbohydrates & Proteins',
    formula: 'Carbohydrates & Proteins — Glucose/fructose structures, mutarotation, peptide linkages, denaturation.',
    note: 'Glucose/fructose structures, mutarotation, peptide linkages, denaturation.',
  },
  // ---- chem-ch13 ----
  {
    chapterId: 'chem-ch13',
    section: '13.1',
    name: 'p-Block Groups 13-14',
    formula: 'p-Block Groups 13-14 — Boron anomalies, carbon-silicon contrasts, oxides and chlorides trends.',
    note: 'Boron anomalies, carbon-silicon contrasts, oxides and chlorides trends.',
  },
  {
    chapterId: 'chem-ch13',
    section: '13.2',
    name: 'p-Block Groups 15-18',
    formula: 'p-Block Groups 15-18 — Nitrogen fixation chemistry, oxoacids of P/S/Cl, noble-gas compounds.',
    note: 'Nitrogen fixation chemistry, oxoacids of P/S/Cl, noble-gas compounds.',
  },
  // ---- chem-ch15 ----
  {
    chapterId: 'chem-ch15',
    section: '15.1',
    name: 'Operators, Observables & Uncertainty',
    formula: 'Operators, Observables & Uncertainty — Hermitian operators, commutators, Heisenberg uncertainty with minimum-uncertaint',
    note: 'Hermitian operators, commutators, Heisenberg uncertainty with minimum-uncertainty states.',
  },
  {
    chapterId: 'chem-ch15',
    section: '15.2',
    name: 'Particle in a Box & Tunnelling',
    formula: 'Particle in a Box & Tunnelling — Quantized levels and nodes, zero-point energy, barrier penetration preview.',
    note: 'Quantized levels and nodes, zero-point energy, barrier penetration preview.',
  },
  // ---- chem-ch16 ----
  {
    chapterId: 'chem-ch16',
    section: '16.1',
    name: 'Hydrogen Atom & Quantum Numbers',
    formula: 'Hydrogen Atom & Quantum Numbers — Radial and angular parts, orbital shapes and node counting.',
    note: 'Radial and angular parts, orbital shapes and node counting.',
  },
  {
    chapterId: 'chem-ch16',
    section: '16.2',
    name: 'Many-Electron Atoms & Term Symbols',
    formula: 'Many-Electron Atoms & Term Symbols — Shielding, Russell-Saunders terms, Hund rules from term ordering.',
    note: 'Shielding, Russell-Saunders terms, Hund rules from term ordering.',
  },
  // ---- chem-ch17 ----
  {
    chapterId: 'chem-ch17',
    section: '17.1',
    name: 'LCAO-MO & Bond Order',
    formula: 'LCAO-MO & Bond Order — Bonding/antibonding combinations, s-p mixing, photoelectron preview.',
    note: 'Bonding/antibonding combinations, s-p mixing, photoelectron preview.',
  },
  {
    chapterId: 'chem-ch17',
    section: '17.2',
    name: 'Hückel Theory Preview',
    formula: 'Hückel Theory Preview — Pi-electron energies of conjugated systems, aromaticity counting.',
    note: 'Pi-electron energies of conjugated systems, aromaticity counting.',
  },
  // ---- chem-ch18 ----
  {
    chapterId: 'chem-ch18',
    section: '18.1',
    name: 'Rotational & Vibrational Spectra',
    formula: 'Rotational & Vibrational Spectra — Rigid-rotor lines, anharmonic progressions, hot bands.',
    note: 'Rigid-rotor lines, anharmonic progressions, hot bands.',
  },
  {
    chapterId: 'chem-ch18',
    section: '18.2',
    name: 'Electronic Spectra & Franck-Condon',
    formula: 'Electronic Spectra & Franck-Condon — Vertical transitions, vibronic structure, dissociation limits.',
    note: 'Vertical transitions, vibronic structure, dissociation limits.',
  },
  // ---- chem-ch19 ----
  {
    chapterId: 'chem-ch19',
    section: '19.1',
    name: 'Boltzmann Distribution',
    formula: 'Boltzmann Distribution — Population ratios, temperature dependence, partition-function idea.',
    note: 'Population ratios, temperature dependence, partition-function idea.',
  },
  {
    chapterId: 'chem-ch19',
    section: '19.2',
    name: 'Molecular Partition Functions',
    formula: 'Molecular Partition Functions — Translational/rotational/vibrational contributions, factorization.',
    note: 'Translational/rotational/vibrational contributions, factorization.',
  },
  // ---- chem-ch20 ----
  {
    chapterId: 'chem-ch20',
    section: '20.1',
    name: 'Collision Theory',
    formula: 'Collision Theory — Steric factor, cross sections, temperature dependence prediction.',
    note: 'Steric factor, cross sections, temperature dependence prediction.',
  },
  {
    chapterId: 'chem-ch20',
    section: '20.2',
    name: 'Transition-State Theory',
    formula: 'Transition-State Theory — Activated complex, Eyring equation, entropy of activation reading.',
    note: 'Activated complex, Eyring equation, entropy of activation reading.',
  },
  // ---- chem-ch21 ----
  {
    chapterId: 'chem-ch21',
    section: '21.1',
    name: 'Nucleophilic Addition to Carbonyls',
    formula: 'Nucleophilic Addition to Carbonyls — Bürgi-Dunitz angle, cyanohydrins, acetal/imine formation maps.',
    note: 'Bürgi-Dunitz angle, cyanohydrins, acetal/imine formation maps.',
  },
  {
    chapterId: 'chem-ch21',
    section: '21.2',
    name: 'Substitution at Carbonyl Carbon',
    formula: 'Substitution at Carbonyl Carbon — Tetrahedral intermediates, reactivity order of acid derivatives.',
    note: 'Tetrahedral intermediates, reactivity order of acid derivatives.',
  },
  // ---- chem-ch22 ----
  {
    chapterId: 'chem-ch22',
    section: '22.1',
    name: 'EAS Mechanism & Directing Effects',
    formula: 'EAS Mechanism & Directing Effects — Sigma complexes, activators/deactivators, ipso preview.',
    note: 'Sigma complexes, activators/deactivators, ipso preview.',
  },
  {
    chapterId: 'chem-ch22',
    section: '22.2',
    name: 'Conjugate Addition & SNAr',
    formula: 'Conjugate Addition & SNAr — Michael acceptors, Meisenheimer complexes, benzyne preview.',
    note: 'Michael acceptors, Meisenheimer complexes, benzyne preview.',
  },
  // ---- chem-ch23 ----
  {
    chapterId: 'chem-ch23',
    section: '23.1',
    name: 'Conformation: Alkanes & Cyclohexane',
    formula: 'Conformation: Alkanes & Cyclohexane — A-values, chair flips, axial/equatorial equilibria.',
    note: 'A-values, chair flips, axial/equatorial equilibria.',
  },
  {
    chapterId: 'chem-ch23',
    section: '23.2',
    name: 'Diastereoselectivity',
    formula: 'Diastereoselectivity — Felkin-Anh model, chelation control, Zimmerman-Traxler preview.',
    note: 'Felkin-Anh model, chelation control, Zimmerman-Traxler preview.',
  },
  // ---- chem-ch24 ----
  {
    chapterId: 'chem-ch24',
    section: '24.1',
    name: 'Mass Spectrometry & Isotopes',
    formula: 'Mass Spectrometry & Isotopes — Fragmentation patterns, M+2 clues, high-resolution formulae.',
    note: 'Fragmentation patterns, M+2 clues, high-resolution formulae.',
  },
  {
    chapterId: 'chem-ch24',
    section: '24.2',
    name: 'Proton NMR in Practice',
    formula: 'Proton NMR in Practice — Shift regions, splitting trees, exchangeable protons.',
    note: 'Shift regions, splitting trees, exchangeable protons.',
  },
  // ---- chem-ch25 ----
  {
    chapterId: 'chem-ch25',
    section: '25.1',
    name: 'Aromatic Heterocycle Reactions',
    formula: 'Aromatic Heterocycle Reactions — Pyridine/pyrrole/furan reactivity maps, electrophilic positions.',
    note: 'Pyridine/pyrrole/furan reactivity maps, electrophilic positions.',
  },
  {
    chapterId: 'chem-ch25',
    section: '25.2',
    name: 'Heterocycle Synthesis',
    formula: 'Heterocycle Synthesis — Paal-Knorr, Hantzsch and classic ring closures.',
    note: 'Paal-Knorr, Hantzsch and classic ring closures.',
  },
  // ---- chem-ch26 ----
  {
    chapterId: 'chem-ch26',
    section: '26.1',
    name: 'Rearrangements',
    formula: 'Rearrangements — Wagner-Meerwein shifts, Baeyer-Villiger, Beckmann maps.',
    note: 'Wagner-Meerwein shifts, Baeyer-Villiger, Beckmann maps.',
  },
  {
    chapterId: 'chem-ch26',
    section: '26.2',
    name: 'Radical Chains',
    formula: 'Radical Chains — Initiation/propagation/termination, selectivity of H-abstraction.',
    note: 'Initiation/propagation/termination, selectivity of H-abstraction.',
  },
  // ---- chem-ch3 ----
  {
    chapterId: 'chem-ch3',
    section: '3.1',
    name: 'Gas Laws & Dalton Pressures',
    formula: 'Gas Laws & Dalton Pressures — Boyle, Charles, Avogadro laws, combined law, partial-pressure arithmetic.',
    note: 'Boyle, Charles, Avogadro laws, combined law, partial-pressure arithmetic.',
  },
  {
    chapterId: 'chem-ch3',
    section: '3.2',
    name: 'Diffusion, Effusion & Kinetic Theory',
    formula: 'Diffusion, Effusion & Kinetic Theory — Graham law, molecular speeds, kinetic-theory postulates and pressure derivation.',
    note: 'Graham law, molecular speeds, kinetic-theory postulates and pressure derivation.',
  },
  // ---- chem-ch9 ----
  {
    chapterId: 'chem-ch9',
    section: '9.1',
    name: 'Alkanes, Alkenes & Alkynes',
    formula: 'Alkanes, Alkenes & Alkynes — Preparation routes, combustion, ozonolysis and acidity of terminal alkynes.',
    note: 'Preparation routes, combustion, ozonolysis and acidity of terminal alkynes.',
  },
  {
    chapterId: 'chem-ch9',
    section: '9.2',
    name: 'Benzene & Aromatic Substitution',
    formula: 'Benzene & Aromatic Substitution — Huckel rule, directing effects, nitration/sulfonation/halogenation maps.',
    note: 'Huckel rule, directing effects, nitration/sulfonation/halogenation maps.',
  },
  // ---- commem-ch1 ----
  {
    chapterId: 'ece-e-analog-comm',
    section: '8.6',
    name: 'Autocorrelation & PSD',
    formula: 'Autocorrelation & PSD — Wide-sense stationarity, Wiener-Khintchin pair, power from PSD.',
    note: 'Wide-sense stationarity, Wiener-Khintchin pair, power from PSD.',
  },
  {
    chapterId: 'ece-e-analog-comm',
    section: '8.7',
    name: 'White Noise Properties',
    formula: 'White Noise Properties — Flat PSD, delta autocorrelation, thermal-noise floor kTB.',
    note: 'Flat PSD, delta autocorrelation, thermal-noise floor kTB.',
  },
  // ---- compcoa-ch1 ----
  {
    chapterId: 'compcoa-ch1',
    section: '1.1',
    name: 'Instruction Formats & Operand Models',
    formula: 'Instruction Formats & Operand Models — Zero/one/two/three-address formats, stack versus accumulator versus GPR trade-of',
    note: 'Zero/one/two/three-address formats, stack versus accumulator versus GPR trade-offs.',
  },
  {
    chapterId: 'compcoa-ch1',
    section: '1.2',
    name: 'Addressing Modes',
    formula: 'Addressing Modes — Immediate, direct, indirect, register, indexed, PC-relative and their effective-',
    note: 'Immediate, direct, indirect, register, indexed, PC-relative and their effective-address ma',
  },
  // ---- compcoa-ch9 ----
  {
    chapterId: 'compcoa-ch9',
    section: '9.1',
    name: 'S vs L Attributed Definitions',
    formula: 'S vs L Attributed Definitions — Synthesized versus inherited attributes, evaluation orders.',
    note: 'Synthesized versus inherited attributes, evaluation orders.',
  },
  {
    chapterId: 'compcoa-ch9',
    section: '9.2',
    name: 'Activation Records & Displays',
    formula: 'Activation Records & Displays — Static/dynamic links, calling sequences, access to nonlocals.',
    note: 'Static/dynamic links, calling sequences, access to nonlocals.',
  },
  // ---- dbms-ch1 ----
  {
    chapterId: 'dbms-ch1',
    section: '1.1',
    name: 'Entities, Attributes & Keys',
    formula: 'Entities, Attributes & Keys — Strong versus weak entities, key versus non-key attributes, multivalued and deri',
    note: 'Strong versus weak entities, key versus non-key attributes, multivalued and derived attrib',
  },
  {
    chapterId: 'dbms-ch1',
    section: '1.2',
    name: 'Relationships & Cardinality',
    formula: 'Relationships & Cardinality — One-to-one/one-to-many/many-to-many, participation constraints, roles and recurs',
    note: 'One-to-one/one-to-many/many-to-many, participation constraints, roles and recursive relati',
  },
  // ---- dbms-ch2 ----
  {
    chapterId: 'dbms-ch2',
    section: '2.1',
    name: 'Relations, Tuples & Domains',
    formula: 'Relations, Tuples & Domains — Relation schemas versus instances, atomic domains, nulls and their pitfalls.',
    note: 'Relation schemas versus instances, atomic domains, nulls and their pitfalls.',
  },
  {
    chapterId: 'dbms-ch2',
    section: '2.2',
    name: 'Primary, Candidate & Foreign Keys',
    formula: 'Primary, Candidate & Foreign Keys — Minimal keys, choosing primaries, referential actions on delete/update.',
    note: 'Minimal keys, choosing primaries, referential actions on delete/update.',
  },
  // ---- elec-ch21 ----
  {
    chapterId: 'ece-e-analog',
    section: '6.13',
    name: 'Signal Models and Amplifier Quantities',
    formula: 'Signal Models and Amplifier Quantities — Voltage, current and power gain; decibel arithmetic; input and output resistance',
    note: 'Voltage, current and power gain; decibel arithmetic; input and output resistances and load',
  },
  {
    chapterId: 'ece-e-analog',
    section: '6.14',
    name: 'Amplifier Transfer and Biasing Idea',
    formula: 'Amplifier Transfer and Biasing Idea — Transfer characteristics, linear range, bias point and small-signal operation ar',
    note: 'Transfer characteristics, linear range, bias point and small-signal operation around Q.',
  },
  // ---- elec-ch22 ----
  {
    chapterId: 'ece-e-ic',
    section: '7.10',
    name: 'Ideal Op-Amp and Golden Rules',
    formula: 'Ideal Op-Amp and Golden Rules — Virtual short and virtual open from infinite gain; the two rules that solve ever',
    note: 'Virtual short and virtual open from infinite gain; the two rules that solve every ideal ci',
  },
  {
    chapterId: 'ece-e-ic',
    section: '7.11',
    name: 'Inverting, Non-Inverting and Difference Stages',
    formula: 'Inverting, Non-Inverting and Difference Stages — Closed-loop gains, input resistances, the subtractor and instrumentation front-e',
    note: 'Closed-loop gains, input resistances, the subtractor and instrumentation front-end.',
  },
  // ---- elec-ch23 ----
  {
    chapterId: 'ece-e-devices',
    section: '2.1',
    name: 'Semiconductor Physics and the pn Junction',
    formula: 'Semiconductor Physics and the pn Junction — Intrinsic/extrinsic silicon, drift and diffusion, depletion region and built-in ',
    note: 'Intrinsic/extrinsic silicon, drift and diffusion, depletion region and built-in voltage.',
  },
  {
    chapterId: 'ece-e-devices',
    section: '2.30',
    name: 'Diode Equation and Terminal Models',
    formula: 'Diode Equation and Terminal Models — Exponential I–V, constant-drop and small-signal resistance models, temperature b',
    note: 'Exponential I–V, constant-drop and small-signal resistance models, temperature behaviour.',
  },
  // ---- elec-ch24 ----
  {
    chapterId: 'ece-e-devices',
    section: '2.33',
    name: 'MOS Structure and Regions',
    formula: 'MOS Structure and Regions — Threshold voltage, triode versus saturation, channel-length modulation.',
    note: 'Threshold voltage, triode versus saturation, channel-length modulation.',
  },
  {
    chapterId: 'ece-e-devices',
    section: '2.34',
    name: 'Square-Law I–V Model',
    formula: 'Square-Law I–V Model — Drain-current equations per region, transconductance parameters, p-channel compl',
    note: 'Drain-current equations per region, transconductance parameters, p-channel complements.',
  },
  // ---- elec-ch25 ----
  {
    chapterId: 'ece-e-devices',
    section: '2.37',
    name: 'NPN/PNP Structure and Modes',
    formula: 'NPN/PNP Structure and Modes — Active, saturation, cutoff and inverse modes; minority-carrier picture of action',
    note: 'Active, saturation, cutoff and inverse modes; minority-carrier picture of action.',
  },
  {
    chapterId: 'ece-e-devices',
    section: '2.38',
    name: 'Exponential I–V and Ebers-Moll View',
    formula: 'Exponential I–V and Ebers-Moll View — Collector current law, alpha-beta relation, Early effect and output resistance.',
    note: 'Collector current law, alpha-beta relation, Early effect and output resistance.',
  },
  // ---- elec-ch26 ----
  {
    chapterId: 'ece-e-analog',
    section: '6.17',
    name: 'Bias Design for Discrete Stages',
    formula: 'Bias Design for Discrete Stages — Choosing Q for swing and linearity; emitter/source degeneration trade-offs.',
    note: 'Choosing Q for swing and linearity; emitter/source degeneration trade-offs.',
  },
  {
    chapterId: 'ece-e-analog',
    section: '6.18',
    name: 'CE/CS and CB/CG Stages',
    formula: 'CE/CS and CB/CG Stages — Voltage gain, input/output resistances; when common-base/gate wins.',
    note: 'Voltage gain, input/output resistances; when common-base/gate wins.',
  },
  // ---- elec-ch27 ----
  {
    chapterId: 'ece-e-analog',
    section: '6.21',
    name: 'The Differential Pair',
    formula: 'The Differential Pair — Large-signal transfer, tail current, differential versus common-mode gain.',
    note: 'Large-signal transfer, tail current, differential versus common-mode gain.',
  },
  {
    chapterId: 'ece-e-analog',
    section: '6.22',
    name: 'CMRR and Mismatch',
    formula: 'CMRR and Mismatch — Common-mode rejection definition, offset sources, layout matching intuition.',
    note: 'Common-mode rejection definition, offset sources, layout matching intuition.',
  },
  // ---- elec-ch28 ----
  {
    chapterId: 'ece-e-analog',
    section: '6.25',
    name: 'Low-Frequency Roll-off',
    formula: 'Low-Frequency Roll-off — Coupling and bypass capacitors as high-pass sections; dominant low pole.',
    note: 'Coupling and bypass capacitors as high-pass sections; dominant low pole.',
  },
  {
    chapterId: 'ece-e-analog',
    section: '6.26',
    name: 'High-Frequency Models and Miller Effect',
    formula: 'High-Frequency Models and Miller Effect — Junction capacitances, Miller multiplication, unity-gain frequency fT.',
    note: 'Junction capacitances, Miller multiplication, unity-gain frequency fT.',
  },
  // ---- elec-ch29 ----
  {
    chapterId: 'ece-e-analog',
    section: '6.29',
    name: 'Four Feedback Topologies',
    formula: 'Four Feedback Topologies — Series/shunt mixing and sampling; identifying topology from the schematic.',
    note: 'Series/shunt mixing and sampling; identifying topology from the schematic.',
  },
  {
    chapterId: 'ece-e-analog',
    section: '6.30',
    name: 'Loop Gain and Desensitivity',
    formula: 'Loop Gain and Desensitivity — Return-ratio idea, gain stabilization factor 1+βA, sensitivity reduction.',
    note: 'Return-ratio idea, gain stabilization factor 1+βA, sensitivity reduction.',
  },
  // ---- elec-ch30 ----
  {
    chapterId: 'ece-e-analog',
    section: '6.33',
    name: 'Class A Stages',
    formula: 'Class A Stages — Q-centred operation, 25% efficiency ceiling, power dissipation split.',
    note: 'Q-centred operation, 25% efficiency ceiling, power dissipation split.',
  },
  {
    chapterId: 'ece-e-analog',
    section: '6.34',
    name: 'Class B and Crossover Distortion',
    formula: 'Class B and Crossover Distortion — Push-pull action, dead zone, 78.5% theoretical efficiency.',
    note: 'Push-pull action, dead zone, 78.5% theoretical efficiency.',
  },
  // ---- engmath-ch11 ----
  {
    chapterId: 'engmath-ch11',
    section: '11.1',
    name: 'Floating-Point Error & Stability',
    formula: 'Floating-Point Error & Stability — Rounding, truncation versus roundoff, conditioning and stable versus unstable al',
    note: 'Rounding, truncation versus roundoff, conditioning and stable versus unstable algorithms.',
  },
  {
    chapterId: 'engmath-ch11',
    section: '11.2',
    name: 'Lagrange & Spline Interpolation',
    formula: 'Lagrange & Spline Interpolation — Interpolating polynomials, error term, cubic splines for smooth fits.',
    note: 'Interpolating polynomials, error term, cubic splines for smooth fits.',
  },
  // ---- engmath-ch12 ----
  {
    chapterId: 'engmath-ch12',
    section: '12.1',
    name: 'Gauss Elimination & Pivoting',
    formula: 'Gauss Elimination & Pivoting — Forward elimination, partial pivoting, operation counts and multipliers.',
    note: 'Forward elimination, partial pivoting, operation counts and multipliers.',
  },
  {
    chapterId: 'engmath-ch12',
    section: '12.2',
    name: 'LU, Cholesky & Doolittle Forms',
    formula: 'LU, Cholesky & Doolittle Forms — Factor-once-solve-many, symmetric positive-definite shortcut.',
    note: 'Factor-once-solve-many, symmetric positive-definite shortcut.',
  },
  // ---- engmath-ch13 ----
  {
    chapterId: 'engmath-ch13',
    section: '13.1',
    name: 'Euler & Runge-Kutta Methods',
    formula: 'Euler & Runge-Kutta Methods — Explicit steps, local versus global error, classic RK4 tableau.',
    note: 'Explicit steps, local versus global error, classic RK4 tableau.',
  },
  {
    chapterId: 'engmath-ch13',
    section: '13.2',
    name: 'Stiffness & Multistep Ideas',
    formula: 'Stiffness & Multistep Ideas — Why explicit methods fail on stiff decay; Adams-Bashforth/Moulton preview.',
    note: 'Why explicit methods fail on stiff decay; Adams-Bashforth/Moulton preview.',
  },
  // ---- engmath-ch14 ----
  {
    chapterId: 'rosen-ch10',
    section: '10.9',
    name: 'Shortest Paths',
    formula: 'Shortest Paths — Dijkstra and Bellman-Ford behaviour, negative-edge handling.',
    note: 'Dijkstra and Bellman-Ford behaviour, negative-edge handling.',
  },
  {
    chapterId: 'rosen-ch10',
    section: '10.10',
    name: 'Spanning Trees & MST',
    formula: 'Spanning Trees & MST — Prim and Kruskal rules, cut property, minimum-cost design.',
    note: 'Prim and Kruskal rules, cut property, minimum-cost design.',
  },
  // ---- engmath-ch15 ----
  {
    chapterId: 'engmath-ch15',
    section: '15.1',
    name: 'Random Variables & Expectation',
    formula: 'Random Variables & Expectation — Discrete versus continuous, PMF/PDF/CDF, mean and variance laws.',
    note: 'Discrete versus continuous, PMF/PDF/CDF, mean and variance laws.',
  },
  {
    chapterId: 'engmath-ch15',
    section: '15.2',
    name: 'Binomial, Poisson & Exponential Laws',
    formula: 'Binomial, Poisson & Exponential Laws — Counting-process models, memoryless property, rate arithmetic.',
    note: 'Counting-process models, memoryless property, rate arithmetic.',
  },
  // ---- engmath-ch16 ----
  {
    chapterId: 'engmath-ch16',
    section: '16.1',
    name: 'Sampling & Point Estimation',
    formula: 'Sampling & Point Estimation — Estimators, bias and variance, maximum-likelihood idea.',
    note: 'Estimators, bias and variance, maximum-likelihood idea.',
  },
  {
    chapterId: 'engmath-ch16',
    section: '16.2',
    name: 'Confidence Intervals',
    formula: 'Confidence Intervals — z/t intervals for means, proportion intervals, interpreting coverage.',
    note: 'z/t intervals for means, proportion intervals, interpreting coverage.',
  },
  // ---- engmath-ch17 ----
  {
    chapterId: 'engmath-ch17',
    section: '17.1',
    name: 'R^n, C^n & Vector Space Axioms',
    formula: 'R^n, C^n & Vector Space Axioms — Coordinates done concretely first, then the abstract axioms.',
    note: 'Coordinates done concretely first, then the abstract axioms.',
  },
  {
    chapterId: 'engmath-ch17',
    section: '17.2',
    name: 'Subspaces & Tests',
    formula: 'Subspaces & Tests — Closed under addition/scaling; sums of subspaces.',
    note: 'Closed under addition/scaling; sums of subspaces.',
  },
  // ---- engmath-ch18 ----
  {
    chapterId: 'engmath-ch18',
    section: '18.1',
    name: 'Span & Linear Independence',
    formula: 'Span & Linear Independence — Minimal spanning sets, dependence lemma mechanics.',
    note: 'Minimal spanning sets, dependence lemma mechanics.',
  },
  {
    chapterId: 'engmath-ch18',
    section: '18.2',
    name: 'Bases & Dimension Theorem',
    formula: 'Bases & Dimension Theorem — Every basis same size; dimension as invariant.',
    note: 'Every basis same size; dimension as invariant.',
  },
  // ---- engmath-ch19 ----
  {
    chapterId: 'engmath-ch19',
    section: '19.1',
    name: 'Null Spaces & Ranges',
    formula: 'Null Spaces & Ranges — Injectivity/surjectivity from dimensions; fundamental subspaces.',
    note: 'Injectivity/surjectivity from dimensions; fundamental subspaces.',
  },
  {
    chapterId: 'engmath-ch19',
    section: '19.2',
    name: 'Invertibility & Isomorphisms',
    formula: 'Invertibility & Isomorphisms — Two-sided inverses, isomorphic iff same dimension.',
    note: 'Two-sided inverses, isomorphic iff same dimension.',
  },
  // ---- engmath-ch20 ----
  {
    chapterId: 'engmath-ch20',
    section: '20.1',
    name: 'Invariant Subspaces',
    formula: 'Invariant Subspaces — Eigenvalues without determinants: every complex operator has an eigenvalue.',
    note: 'Eigenvalues without determinants: every complex operator has an eigenvalue.',
  },
  {
    chapterId: 'engmath-ch20',
    section: '20.2',
    name: 'Upper-Triangular Form',
    formula: 'Upper-Triangular Form — Basis making every operator triangular over complex scalars.',
    note: 'Basis making every operator triangular over complex scalars.',
  },
  // ---- java-ch1 ----
  {
    chapterId: 'java-ch1',
    section: '1.1',
    name: 'JVM, JDK & Bytecode Portability',
    formula: 'JVM, JDK & Bytecode Portability — Write-once-run-anywhere mechanics; bytecode versus native code.',
    note: 'Write-once-run-anywhere mechanics; bytecode versus native code.',
  },
  {
    chapterId: 'java-ch1',
    section: '1.2',
    name: 'First Programs & JShell',
    formula: 'First Programs & JShell — Class-and-main ceremony, JShell experimentation, program anatomy.',
    note: 'Class-and-main ceremony, JShell experimentation, program anatomy.',
  },
  // ---- java-ch10 ----
  {
    chapterId: 'java-ch10',
    section: '10.1',
    name: 'Stream Creation & Operations',
    formula: 'Stream Creation & Operations — Sources, intermediate versus terminal ops, laziness.',
    note: 'Sources, intermediate versus terminal ops, laziness.',
  },
  {
    chapterId: 'java-ch10',
    section: '10.2',
    name: 'Collectors & Grouping',
    formula: 'Collectors & Grouping — toList/toMap/groupingBy/partitioningBy, downstream collectors.',
    note: 'toList/toMap/groupingBy/partitioningBy, downstream collectors.',
  },
  // ---- java-ch11 ----
  {
    chapterId: 'java-ch11',
    section: '11.1',
    name: 'Byte & Character Streams',
    formula: 'Byte & Character Streams — Input/Output hierarchies, readers/writers, buffering.',
    note: 'Input/Output hierarchies, readers/writers, buffering.',
  },
  {
    chapterId: 'java-ch11',
    section: '11.2',
    name: 'NIO Channels, Buffers & Files',
    formula: 'NIO Channels, Buffers & Files — Selectors preview, Path/Files utilities, memory-mapped files.',
    note: 'Selectors preview, Path/Files utilities, memory-mapped files.',
  },
  // ---- java-ch12 ----
  {
    chapterId: 'java-ch12',
    section: '12.1',
    name: 'JDBC Drivers & Connections',
    formula: 'JDBC Drivers & Connections — DriverManager versus DataSource, connection lifecycle.',
    note: 'DriverManager versus DataSource, connection lifecycle.',
  },
  {
    chapterId: 'java-ch12',
    section: '12.2',
    name: 'Queries & Prepared Statements',
    formula: 'Queries & Prepared Statements — ResultSet traversal, parameter binding, injection defence.',
    note: 'ResultSet traversal, parameter binding, injection defence.',
  },
  // ---- java-ch2 ----
  {
    chapterId: 'java-ch2',
    section: '2.1',
    name: 'Primitive Types & Variables',
    formula: 'Primitive Types & Variables — int/long/double/char/boolean ranges, constants, enumerated types.',
    note: 'int/long/double/char/boolean ranges, constants, enumerated types.',
  },
  {
    chapterId: 'java-ch2',
    section: '2.2',
    name: 'Strings & Console I/O',
    formula: 'Strings & Console I/O — Immutable strings, text blocks, formatting, Scanner input.',
    note: 'Immutable strings, text blocks, formatting, Scanner input.',
  },
  // ---- java-ch3 ----
  {
    chapterId: 'java-ch3',
    section: '3.1',
    name: 'Classes, Objects & Encapsulation',
    formula: 'Classes, Objects & Encapsulation — Fields versus locals, access control, mutators that preserve invariants.',
    note: 'Fields versus locals, access control, mutators that preserve invariants.',
  },
  {
    chapterId: 'java-ch3',
    section: '3.2',
    name: 'Constructors & Initialization',
    formula: 'Constructors & Initialization — Overloading, this-chaining, initialization blocks, final fields.',
    note: 'Overloading, this-chaining, initialization blocks, final fields.',
  },
  // ---- java-ch4 ----
  {
    chapterId: 'java-ch4',
    section: '4.1',
    name: 'Subclassing & Dynamic Binding',
    formula: 'Subclassing & Dynamic Binding — extends, overriding, virtual dispatch, super calls.',
    note: 'extends, overriding, virtual dispatch, super calls.',
  },
  {
    chapterId: 'java-ch4',
    section: '4.2',
    name: 'Abstract Classes & Final Control',
    formula: 'Abstract Classes & Final Control — Template-method pattern, sealing extension points.',
    note: 'Template-method pattern, sealing extension points.',
  },
  // ---- java-ch5 ----
  {
    chapterId: 'java-ch5',
    section: '5.1',
    name: 'Interfaces & Default Methods',
    formula: 'Interfaces & Default Methods — Contracts, multiple inheritance of type, evolution via defaults.',
    note: 'Contracts, multiple inheritance of type, evolution via defaults.',
  },
  {
    chapterId: 'java-ch5',
    section: '5.2',
    name: 'Lambdas & Method References',
    formula: 'Lambdas & Method References — Functional interfaces, effectively-final capture, comparator idioms.',
    note: 'Functional interfaces, effectively-final capture, comparator idioms.',
  },
  // ---- java-ch6 ----
  {
    chapterId: 'java-ch6',
    section: '6.1',
    name: 'Checked vs Unchecked Exceptions',
    formula: 'Checked vs Unchecked Exceptions — Hierarchy, throws discipline, when to catch versus declare.',
    note: 'Hierarchy, throws discipline, when to catch versus declare.',
  },
  {
    chapterId: 'java-ch6',
    section: '6.2',
    name: 'Try-with-Resources & Chaining',
    formula: 'Try-with-Resources & Chaining — Automatic closing, suppressed exceptions, cause chains.',
    note: 'Automatic closing, suppressed exceptions, cause chains.',
  },
  // ---- java-ch7 ----
  {
    chapterId: 'java-ch7',
    section: '7.1',
    name: 'Type Parameters & Bounds',
    formula: 'Type Parameters & Bounds — Generic classes/methods, extends/super bounds, PECS rule.',
    note: 'Generic classes/methods, extends/super bounds, PECS rule.',
  },
  {
    chapterId: 'java-ch7',
    section: '7.2',
    name: 'Wildcards in Practice',
    formula: 'Wildcards in Practice — Producer-extends, consumer-super, unbounded uses.',
    note: 'Producer-extends, consumer-super, unbounded uses.',
  },
  // ---- java-ch8 ----
  {
    chapterId: 'java-ch8',
    section: '8.1',
    name: 'List & Set Implementations',
    formula: 'List & Set Implementations — ArrayList versus LinkedList, HashSet/TreeSet ordering and cost.',
    note: 'ArrayList versus LinkedList, HashSet/TreeSet ordering and cost.',
  },
  {
    chapterId: 'java-ch8',
    section: '8.2',
    name: 'Queues, Deques & Maps',
    formula: 'Queues, Deques & Maps — Priority queues, ArrayDeque, HashMap/TreeMap/LinkedHashMap choice.',
    note: 'Priority queues, ArrayDeque, HashMap/TreeMap/LinkedHashMap choice.',
  },
  // ---- java-ch9 ----
  {
    chapterId: 'java-ch9',
    section: '9.1',
    name: 'Threads & Executors',
    formula: 'Threads & Executors — Thread lifecycle, pools, futures, structured task submission.',
    note: 'Thread lifecycle, pools, futures, structured task submission.',
  },
  {
    chapterId: 'java-ch9',
    section: '9.2',
    name: 'Synchronization & Locks',
    formula: 'Synchronization & Locks — Monitor locks, Lock/Condition, deadlock avoidance.',
    note: 'Monitor locks, Lock/Condition, deadlock avoidance.',
  },
  // ---- sigctrl-ch1 ----
  {
    chapterId: 'ece-e-sigsys',
    section: '4.15',
    name: 'CT vs DT Signal Types',
    formula: 'CT vs DT Signal Types — Analog, sampled and digital signals; even/odd, periodic and bounded signals.',
    note: 'Analog, sampled and digital signals; even/odd, periodic and bounded signals.',
  },
  {
    chapterId: 'ece-e-sigsys',
    section: '4.16',
    name: 'Shifting, Scaling & Reversal',
    formula: 'Shifting, Scaling & Reversal — Time-shift/scale order of operations, transformation puzzles.',
    note: 'Time-shift/scale order of operations, transformation puzzles.',
  },
]

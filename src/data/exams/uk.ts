import type { CuratedExam } from './types'

/**
 * United Kingdom exams — curated official syllabi.
 *
 * Sources: Pearson Edexcel / AQA / OCR specifications built on the DfE
 * common core for A-level and GCSE mathematics and the sciences, AQA
 * subject specifications, and the UCAT Consortium subtest descriptions.
 */

export const UK_EXAMS: CuratedExam[] = [
  {
    id: 'a-level-maths',
    name: 'A-Level Maths',
    fullName: 'GCE Advanced Level Mathematics (Edexcel/AQA/OCR common core)',
    aliases: ['a level mathematics', 'alevel maths', 'as maths', 'a2 maths'],
    region: 'United Kingdom',
    category: 'School-leaving subject exam',
    popularity: 81,
    syllabusVerified: '2026-10-20',
    website: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.html',
    overview: {
      conductor: 'Pearson Edexcel / AQA / OCR (common DfE core)',
      level: 'Sixth form → university admission',
      stages: ['Linear — all exams at the end of the two-year course (AS is a separate standalone qualification)'],
      papers: ['Paper 1: Pure Mathematics', 'Paper 2: Pure Mathematics', 'Paper 3: Statistics and Mechanics (Edexcel layout)'],
      duration: 'Three 2 h papers (Pure 1, Pure 2, Statistics & Mechanics)',
      marking: 'A*-E grades; 300 UMS-era removed — linear 100% exam',
      questionTypes: ['Structured written questions', 'Calculator allowed throughout'],
      notes:
        'Content below is the DfE common core shared by all boards; paper layout differs (Edexcel: two pure papers + one stats & mechanics paper; OCR/AQA interleave pure questions into papers 2 and 3).',
    },
    sources: [
      { title: 'A Level Mathematics specification (Pearson)', url: 'https://qualifications.pearson.com', host: 'qualifications.pearson.com' },
      { title: 'DfE — GCE AS and A level mathematics content', url: 'https://www.gov.uk/government/publications/gce-as-and-a-level-mathematics', host: 'gov.uk' },
    ],
    subjects: [
      {
        name: 'Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Pure Mathematics',
            topics: [
              {
                name: 'Proof',
                subtopics: [
                  'Proof by deduction using algebra',
                  'Proof by exhaustion (checking all cases)',
                  'Disproof by counterexample',
                  'Proof by contradiction (e.g. √2 is irrational; infinitely many primes)',
                ],
              },
              {
                name: 'Algebra and Functions',
                subtopics: [
                  'Laws of indices and simplifying surds (incl. rationalising denominators)',
                  'Quadratics: completing the square, the discriminant, factor and remainder theorems',
                  'Simultaneous equations (linear-linear and linear-quadratic) and quadratic inequalities',
                  'Polynomial division and partial fractions',
                  'Graph sketching, transformations and the modulus function',
                  'Composite and inverse functions; modelling with functions',
                ],
              },
              {
                name: 'Coordinate Geometry in the (x, y) Plane',
                subtopics: [
                  'Straight lines: gradient, parallel and perpendicular, intersections',
                  'Circles: equation, tangents, chord properties and geometric proofs',
                  'Parametric equations of curves and conversion to and from cartesian form',
                ],
              },
              {
                name: 'Sequences and Series',
                subtopics: [
                  'nth-term rules and recurrence relations; increasing, decreasing and periodic sequences',
                  'Arithmetic sequences and series (sum formulae)',
                  'Geometric sequences and series; sum to infinity when |r| < 1',
                  'Binomial expansion: positive integer n, then negative and fractional powers',
                  'Sigma notation for finite sums',
                ],
              },
              {
                name: 'Trigonometry',
                subtopics: [
                  'Exact values, radians and the graphs of sine, cosine and tangent',
                  'Trigonometric identities and equations; reciprocal functions (cosec, sec, cot)',
                  'Addition and double-angle formulae; harmonic form R cos(θ − α)',
                  'Small-angle approximations for sin, cos and tan',
                ],
              },
              {
                name: 'Exponentials and Logarithms',
                subtopics: [
                  'Exponential functions and e^x; growth and decay graphs',
                  'Laws of logarithms, change of base and the natural logarithm ln',
                  'Solving equations involving exponents and logarithms',
                  'Modelling with y = ae^kx (growth, decay and fitting to data)',
                ],
              },
              {
                name: 'Differentiation',
                subtopics: [
                  'Differentiation from first principles',
                  'Standard derivatives and the chain, product and quotient rules',
                  'Implicit and parametric differentiation',
                  'Stationary points, second derivatives and optimisation',
                  'Connected rates of change and differential models',
                ],
              },
              {
                name: 'Integration',
                subtopics: [
                  'Integration as the reverse of differentiation; standard integrals',
                  'Definite integrals; areas under and between curves',
                  'Integration by substitution and by parts',
                  'Integration using partial fractions',
                  'Separable differential equations with boundary conditions',
                ],
              },
              {
                name: 'Numerical Methods',
                subtopics: [
                  'Locating roots of f(x) = 0 by sign changes',
                  'Iterative methods x_{n+1} = g(x_n) with cobweb and staircase diagrams',
                  'The Newton-Raphson method and conditions for its failure',
                ],
              },
              {
                name: 'Vectors',
                subtopics: [
                  'Vectors in two and three dimensions: magnitude, direction and unit vectors',
                  'Position vectors and the distance between two points',
                  'Solving geometric problems with vectors (parallel, collinear, proofs)',
                ],
              },
            ],
          },
          {
            name: 'Statistics',
            topics: [
              {
                name: 'Statistical Sampling',
                subtopics: [
                  'Populations, samples and the need for sampling',
                  'Random, systematic, stratified, quota and opportunity sampling',
                  'Large data set work (board-specific, e.g. Edexcel weather data)',
                ],
              },
              {
                name: 'Data Presentation and Interpretation',
                subtopics: [
                  'Measures of location and spread (mean, median, mode, variance, standard deviation)',
                  'Coding data and its effect on the measures',
                  'Histograms, box plots, outlier detection and comparing distributions',
                ],
              },
              {
                name: 'Probability',
                subtopics: [
                  'Addition and multiplication laws; mutually exclusive and independent events',
                  'Venn diagrams, tree diagrams and two-way tables',
                  'Conditional probability and P(A|B)',
                ],
              },
              {
                name: 'Statistical Distributions',
                subtopics: [
                  'Discrete random variables and their probability distributions',
                  'The binomial distribution and cumulative binomial probabilities',
                  'The normal distribution, standardisation and inverse normal calculations',
                ],
              },
              {
                name: 'Hypothesis Testing',
                subtopics: [
                  'Null and alternative hypotheses, significance levels, one- and two-tailed tests',
                  'Tests for the proportion p of a binomial distribution',
                  'Tests for the mean of a normal distribution',
                  'Tests for zero correlation using the PMCC',
                ],
              },
              {
                name: 'Correlation and Regression',
                subtopics: [
                  'Scatter diagrams, correlation vs causation and the PMCC',
                  'Least-squares regression lines and prediction (interpolation vs extrapolation)',
                  'Linearising exponential and power models with logarithms',
                  'Large data set work: correlation and regression with real data',
                ],
              },
            ],
          },
          {
            name: 'Mechanics',
            topics: [
              {
                name: 'Quantities and Units in Mechanics',
                subtopics: [
                  'SI quantities and units in mechanics (force, mass, velocity, acceleration)',
                  'Modelling assumptions: particle, rod, smooth and rough surfaces, inextensible strings, no air resistance',
                ],
              },
              {
                name: 'Kinematics',
                subtopics: [
                  'Constant acceleration (suvat) equations in one dimension',
                  'Velocity-time graphs: displacement and acceleration',
                  'Variable acceleration using calculus (differentiating and integrating s, v, a)',
                  'Projectiles: components of motion, maximum height, range, speed and direction',
                ],
              },
              {
                name: 'Forces and Newton\'s Laws',
                subtopics: [
                  'Newton\'s three laws applied to particles',
                  'Force diagrams: weight, normal reaction, tension, thrust and friction',
                  'Connected particles: pulleys, tow bars and lifts',
                  'Friction: F = μR, limiting equilibrium and inclined planes',
                ],
              },
              {
                name: 'Moments',
                subtopics: [
                  'Moment of a force about a point; resultant moments',
                  'Equilibrium of rigid bodies (beams and ladder-style problems)',
                  'Tilting and toppling problems',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'a-level-physics',
    name: 'A-Level Physics',
    fullName: 'GCE Advanced Level Physics (AQA 7408 core; OCR/Edexcel equivalents)',
    aliases: ['a level physics', 'alevel physics', 'as physics', 'a2 physics'],
    region: 'United Kingdom',
    category: 'School-leaving subject exam',
    popularity: 72,
    syllabusVerified: '2026-10-20',
    website: 'https://www.aqa.org.uk/subjects/science/as-and-a-level/physics-7408',
    overview: {
      conductor: 'AQA / OCR / Edexcel',
      level: 'Sixth form → university admission',
      stages: ['Linear — all exams at the end of the two-year course'],
      papers: ['Paper 1 — measurements to mechanics + periodic motion', 'Paper 2 — thermal physics, fields and nuclear physics', 'Paper 3 — practical skills, data analysis + optional topic'],
      duration: 'Three 2 h papers',
      marking: 'A*-E; three 2 h papers',
      questionTypes: ['Multiple-choice questions', 'Structured written questions', 'Data analysis and practical skills questions'],
      notes:
        'Structure shown follows AQA 7408; OCR A and Edexcel have equivalent cores with different option lists and paper layouts. A separate practical endorsement (pass/fail) complements the grade.',
    },
    sources: [
      { title: 'AQA A-level Physics (7408) specification', url: 'https://www.aqa.org.uk/subjects/science/as-and-a-level/physics-7408', host: 'aqa.org.uk' },
    ],
    subjects: [
      {
        name: 'Physics',
        mappedSubjectId: 'physics',
        units: [
          {
            name: 'Measurements and Their Errors',
            topics: [
              { name: 'Use of SI Units and Their Prefixes', subtopics: ['SI base quantities, derived units and unit conversion', 'Prefixes from tera (10^12) to femto (10^-15)', 'Checking equations for homogeneity of units'] },
              { name: 'Limitations of Physical Measurements', subtopics: ['Random and systematic errors', 'Precision, accuracy and resolution of instruments', 'Propagation of percentage uncertainty in calculations', 'Error bars, worst-fit lines and uncertainty in gradients'] },
              { name: 'Estimation of Physical Quantities', subtopics: ['Order-of-magnitude estimates for everyday quantities', 'Estimation as a problem-solving strategy'] },
            ],
          },
          {
            name: 'Particles and Radiation',
            topics: [
              { name: 'The Structure of the Atom', subtopics: ['Protons, neutrons, electrons and nuclide notation', 'Specific charge of nuclei and charged particles', 'Stable and unstable nuclei'] },
              { name: 'Fundamental Interactions', subtopics: ['The four fundamental interactions and their exchange particles', 'Constructing Feynman diagrams for simple interactions', 'Creation and annihilation of particle-antiparticle pairs (E = mc²)'] },
              { name: 'Classification of Particles', subtopics: ['Hadrons: baryons (proton, neutron) and mesons', 'Leptons (electron, muon, neutrinos) and lepton numbers', 'Antiparticles and their properties'] },
              { name: 'Quarks and Conservation Laws', subtopics: ['Properties of quarks and antiquarks (u, d, s)', 'Beta decay in terms of quark transformation', 'Applying conservation laws (charge, baryon number, lepton number, strangeness) to reactions'] },
            ],
          },
          {
            name: 'Waves and Optics',
            topics: [
              { name: 'Progressive Waves', subtopics: ['Amplitude, frequency, period, wavelength, speed and v = fλ', 'Longitudinal and transverse waves; polarisation as evidence for transverse EM waves', 'Graphs of displacement against time and against distance'] },
              { name: 'Superposition, Stationary Waves and Interference', subtopics: ['Principle of superposition, coherence and path difference', 'Stationary waves on strings and in tubes; harmonics', 'Young\'s double slit (w = λD/s)', 'Single-slit diffraction and diffraction gratings (nλ = d sin θ)'] },
              { name: 'Refraction at a Plane Surface', subtopics: ['Refractive index and Snell\'s law', 'Total internal reflection, critical angle and optical fibres'] },
            ],
          },
          {
            name: 'Mechanics and Materials',
            topics: [
              { name: 'Kinematics and Projectiles', subtopics: ['Suvat equations for uniform acceleration', 'Projectile motion: independent horizontal and vertical components', 'Displacement-time and velocity-time graphs'] },
              { name: 'Newton\'s Laws, Momentum and Moments', subtopics: ['Newton\'s three laws and free-body diagrams', 'Linear momentum, impulse and conservation in collisions', 'Moments, couples, torque and the principle of moments', 'Air resistance, drag and terminal velocity'] },
              { name: 'Work, Energy and Power', subtopics: ['Work done, energy transfers and conservation of energy', 'Kinetic energy, gravitational potential energy and power', 'Efficiency of energy transfers'] },
              { name: 'Materials', subtopics: ['Density and Hooke\'s law (F = kΔL)', 'Elastic strain energy and force-extension graphs', 'Stress, strain, ultimate tensile stress and Young modulus', 'Loading and unloading curves: elastic/plastic behaviour, brittle and ductile materials'] },
            ],
          },
          {
            name: 'Electricity',
            topics: [
              { name: 'Current, Charge and Resistance', subtopics: ['Current I = ΔQ/Δt and drift velocity (I = nqvA)', 'Ohm\'s law, resistivity ρ = RA/L and temperature effects', 'I-V characteristics of filament lamps, thermistors and diodes', 'Series and parallel networks; potential dividers with LDRs and thermistors'] },
              { name: 'EMF and Internal Resistance', subtopics: ['Electromotive force and internal resistance (ε = I(R + r))', 'Terminal potential difference and lost volts', 'Cells in series and parallel combinations'] },
            ],
          },
          {
            name: 'Further Mechanics and Thermal Physics',
            topics: [
              { name: 'Circular Motion', subtopics: ['Angular speed ω = v/r and radian measure', 'Centripetal acceleration (a = ω²r = v²/r) and centripetal force', 'Applications: vehicles on bends and vertical circles'] },
              { name: 'Simple Harmonic Motion', subtopics: ['Defining equation a = −ω²x and conditions for SHM', 'Solutions x = A cos ωt; maximum speed and acceleration', 'Mass-spring (T = 2π√(m/k)) and pendulum (T = 2π√(L/g)) systems', 'Energy exchange between kinetic and potential in SHM', 'Damping, forced vibrations and resonance'] },
              { name: 'Thermal Physics', subtopics: ['Internal energy, specific heat capacity and specific latent heat', 'Gas laws and absolute zero; ideal gas equation pV = nRT', 'Kinetic theory equation pV = ⅓Nm(c_rms)² and its assumptions'] },
            ],
          },
          {
            name: 'Fields and Their Consequences',
            topics: [
              { name: 'Gravitational Fields', subtopics: ['Newton\'s law of gravitation and field strength g', 'Gravitational potential and potential energy in radial fields', 'Satellite orbits: geostationary and low polar orbits'] },
              { name: 'Electric Fields', subtopics: ['Coulomb\'s law and electric field strength', 'Electric potential and potential difference in radial and uniform fields', 'Comparisons between gravitational and electric fields'] },
              { name: 'Capacitance', subtopics: ['Capacitance and parallel-plate capacitors', 'Energy stored (E = ½QV = ½CV²)', 'Exponential charge and discharge; the time constant RC'] },
              { name: 'Magnetic Fields', subtopics: ['Forces on currents (F = BIl) and moving charges (F = Bqv)', 'Magnetic flux, flux linkage and Faraday\'s law', 'Lenz\'s law, induced EMF, alternators and dynamos', 'Transformers (Ns/Np = Vs/Vp) and efficient transmission'] },
            ],
          },
          {
            name: 'Nuclear Physics',
            topics: [
              { name: 'Nuclear Instability and Decay', subtopics: ['Nuclear radius (R = r₀A^(1/3)) and nuclear density', 'Alpha, beta-minus, beta-plus and gamma decay with nuclear equations', 'Activity, decay constant and half-life (A = λN)', 'Background radiation, the inverse-square law for gamma and safety'] },
              { name: 'Mass-Energy and Binding Energy', subtopics: ['E = mc² and mass difference', 'Binding energy per nucleon and the binding energy curve', 'Fission and fusion interpretations of the curve'] },
            ],
          },
          {
            name: 'Optional Topic (choose one)',
            topics: [
              { name: 'Astrophysics', subtopics: ['Lenses, refracting and reflecting telescopes; magnification and resolving power', 'Classification of stars: magnitude, luminosity and the HR diagram', 'Stellar evolution from nebulae to black holes; supernovae', 'Redshift, Hubble\'s law and the evolution of the universe', 'Exoplanet detection: transit and radial velocity methods'] },
              { name: 'Medical Physics', subtopics: ['The eye: focusing, defects and correction', 'Ultrasound: A-scans, B-scans and acoustic impedance', 'Endoscopy using total internal reflection', 'X-ray imaging, contrast media and CT scanning', 'Medical tracers, the gamma camera and radiation safety'] },
              { name: 'Engineering Physics', subtopics: ['Moment of inertia and rotational kinetic energy', 'Torque, angular acceleration and conservation of angular momentum', 'Flywheels: energy storage and smoothing', 'The first law of thermodynamics and p-V work', 'Heat engines: engine cycles, indicated and brake power, efficiency'] },
              { name: 'Turning Points in Physics', subtopics: ['Cathode rays, thermionic emission and the specific charge of the electron', 'Millikan\'s determination of the charge on the electron', 'Photoelectric effect, photons and work function', 'de Broglie wavelength and electron diffraction', 'Special relativity: invariance of c, time dilation and length contraction'] },
              { name: 'Electronics', subtopics: ['Analogue and digital signals, sampling and resolution', 'Operational amplifiers: inverting, non-inverting, summing and comparator modes', 'Sensing circuits with thermistors and LDRs', 'RC networks for timing and smoothing'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'a-level-chemistry',
    name: 'A-Level Chemistry',
    fullName: 'GCE Advanced Level Chemistry (AQA 7405 core; OCR/Edexcel equivalents)',
    aliases: ['a level chemistry', 'alevel chemistry', 'as chemistry', 'a2 chemistry'],
    region: 'United Kingdom',
    category: 'School-leaving subject exam',
    popularity: 71,
    syllabusVerified: '2026-10-20',
    website: 'https://www.aqa.org.uk/subjects/science/as-and-a-level/chemistry-7405',
    overview: {
      conductor: 'AQA / OCR / Edexcel',
      level: 'Sixth form → university admission',
      stages: ['Linear — all exams at the end of the two-year course'],
      papers: ['Paper 1 — physical and inorganic chemistry with relevant practicals', 'Paper 2 — physical and organic chemistry with relevant practicals', 'Paper 3 — all content, practical skills and data analysis'],
      duration: 'Three 2 h papers',
      marking: 'A*-E; linear exams',
      questionTypes: ['Multiple-choice questions', 'Structured questions with calculations, equations and mechanisms', 'Practical skills and data analysis questions'],
      notes:
        'Structure shown follows AQA 7405 (physical / inorganic / organic); OCR and Edexcel cover the same core ideas with different topic orders. A separate practical endorsement (pass/fail) complements the grade.',
    },
    sources: [
      { title: 'AQA A-level Chemistry (7405) specification', url: 'https://www.aqa.org.uk/subjects/science/as-and-a-level/chemistry-7405', host: 'aqa.org.uk' },
    ],
    subjects: [
      {
        name: 'Chemistry',
        mappedSubjectId: 'chemistry',
        units: [
          {
            name: 'Physical Chemistry',
            topics: [
              { name: 'Atomic Structure', subtopics: ['Fundamental particles, mass number and isotopes', 'Electron configurations and successive ionisation energies', 'Time-of-flight mass spectrometry and relative atomic mass'] },
              { name: 'Amount of Substance', subtopics: ['The mole, Avogadro\'s constant and molar calculations', 'The ideal gas equation pV = nRT', 'Empirical and molecular formulae, percentage yield and atom economy', 'Titration calculations and solution concentrations', 'Water of crystallisation in hydrated salts'] },
              { name: 'Bonding', subtopics: ['Ionic, covalent and metallic bonding models', 'Electronegativity, bond polarity and intermolecular forces (including hydrogen bonding)', 'Shapes of molecules and ions (VSEPR)', 'Physical properties explained by bonding and structure'] },
              { name: 'Energetics', subtopics: ['Enthalpy change and reaction profiles', 'Hess\'s law cycles with enthalpies of combustion and formation', 'Mean bond enthalpies', 'Calorimetry experiments'] },
              { name: 'Kinetics', subtopics: ['Collision theory and Maxwell-Boltzmann distributions', 'Effects of temperature, concentration, pressure, surface area and catalysts', 'Catalysts and activation energy'] },
              { name: 'Chemical Equilibria and Le Chatelier', subtopics: ['Dynamic equilibrium and Le Chatelier\'s principle', 'Kc expressions and calculations', 'Industrial conditions (Haber and Contact processes)'] },
              { name: 'Redox', subtopics: ['Oxidation numbers and their application', 'Half-equations and overall redox equations', 'Redox titrations and oxidising/reducing agents'] },
              { name: 'Thermodynamics', subtopics: ['Born-Haber cycles and lattice enthalpy', 'Enthalpies of solution and hydration', 'Entropy change ΔS', 'Gibbs free energy ΔG = ΔH − TΔS and feasibility'] },
              { name: 'Rate Equations and Kp', subtopics: ['Rate equations, orders of reaction and rate constants', 'Determining orders from initial rates and concentration-time data', 'Rate-determining step and the Arrhenius equation', 'Kp and partial pressures'] },
              { name: 'Electrode Potentials and Electrochemical Cells', subtopics: ['Standard electrode potentials and half-cells', 'Using the electrochemical series to predict feasibility', 'Commercial cells and fuel cells'] },
              { name: 'Acids and Bases', subtopics: ['Brønsted-Lowry theory, pH and Kw', 'pH of strong and weak acids (Ka); titration curves and indicators', 'Buffers and their action'] },
              { name: 'Periodicity', subtopics: ['Trends in atomic radius and first ionisation energy', 'Trends in melting points across periods explained by structure'] },
              { name: 'Group 2 and Group 7 Trends', subtopics: ['Group 2: reactivity, oxides, hydroxides, sulfates', 'Group 7: displacement, oxidising power and reducing ability', 'Identification of ions (flame tests, silver halides, sulfate and carbonate tests)'] },
            ],
          },
          {
            name: 'Inorganic Chemistry',
            topics: [
              { name: 'Introduction to Transition Metals', subtopics: ['Definition and electron configurations of transition metals (incl. Cr and Cu exceptions)', 'Complex ions: ligands, coordination numbers, geometries and isomerism', 'Variable oxidation states, coloured compounds and catalytic behaviour'] },
              { name: 'Reactions of Ions in Aqueous Solution', subtopics: ['Acidity and deprotonation of aqua ions [M(H2O)6]^n+', 'Amphoteric hydroxides and precipitation reactions', 'Ligand substitution in aqueous solution'] },
            ],
          },
          {
            name: 'Organic Chemistry',
            topics: [
              { name: 'Introduction to Organic Chemistry', subtopics: ['IUPAC nomenclature, formulae and functional groups', 'Structural isomerism and stereoisomerism', 'Reaction mechanisms: fission, radicals, electrophiles, nucleophiles and curly arrows'] },
              { name: 'Alkanes', subtopics: ['Fractional distillation and cracking of crude oil', 'Combustion and pollution (incl. catalytic converters)', 'Free-radical substitution mechanisms'] },
              { name: 'Halogenoalkanes', subtopics: ['Nucleophilic substitution (SN1 and SN2 mechanisms)', 'Elimination reactions', 'Ozone depletion and hydrolysis rates'] },
              { name: 'Alkenes', subtopics: ['Bonding and E/Z stereoisomerism', 'Electrophilic addition mechanisms (incl. Markownikoff)', 'Addition polymerisation'] },
              { name: 'Alcohols', subtopics: ['Classification and production (hydration, fermentation)', 'Oxidation to aldehydes, ketones and carboxylic acids', 'Elimination to form alkenes'] },
              { name: 'Organic Analysis', subtopics: ['Mass spectrometry: fragmentation and molecular ion peaks (incl. M+1/M+2 patterns)', 'Infrared spectroscopy and functional-group identification', 'Test-tube tests for functional groups'] },
              { name: 'Optical Isomerism', subtopics: ['Chirality and enantiomers', 'Racemic mixtures and polarimetry'] },
              { name: 'Aldehydes and Ketones', subtopics: ['Reduction to alcohols', 'Oxidation of aldehydes (Fehling\'s and Tollens\' reagents)', 'Nucleophilic addition (HCN) and identification with 2,4-DNP'] },
              { name: 'Carboxylic Acids and Derivatives', subtopics: ['Acidity and reactions of carboxylic acids', 'Esters: formation, hydrolysis and uses', 'Acyl chlorides and acid anhydrides'] },
              { name: 'Aromatic Chemistry', subtopics: ['Benzene structure and delocalisation', 'Electrophilic substitution: nitration and Friedel-Crafts acylation'] },
              { name: 'Amines', subtopics: ['Preparation from halogenoalkanes and nitriles', 'Basicity comparisons', 'Reactions with acids to form salts'] },
              { name: 'Polymers', subtopics: ['Addition polymers', 'Condensation polymers: polyesters and polyamides', 'Degradable polymers and disposal'] },
              { name: 'Amino Acids, Proteins and DNA', subtopics: ['Amino acids as zwitterions with acid-base behaviour', 'Peptide bonds and protein structure', 'DNA base pairing and the sugar-phosphate backbone'] },
              { name: 'Organic Synthesis', subtopics: ['Multi-step synthetic routes', 'Functional-group interconversions and reagent selection', 'Practical techniques: reflux, distillation, recrystallisation and melting-point purity'] },
              { name: 'NMR Spectroscopy', subtopics: ['¹H NMR: chemical shift, integration and splitting patterns', '¹³C NMR interpretation', 'Combined-spectra problem solving with the data sheet'] },
              { name: 'Chromatography', subtopics: ['Principles: stationary and mobile phases, Rf values', 'Thin-layer and column chromatography', 'Gas chromatography and GC-MS'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'a-level-biology',
    name: 'A-Level Biology',
    fullName: 'GCE Advanced Level Biology (AQA 7402 core; OCR/Edexcel equivalents)',
    aliases: ['a level biology', 'alevel biology', 'as biology', 'a2 biology'],
    region: 'United Kingdom',
    category: 'School-leaving subject exam',
    popularity: 70,
    syllabusVerified: '2026-10-20',
    website: 'https://www.aqa.org.uk/subjects/science/as-and-a-level/biology-7402',
    overview: {
      conductor: 'AQA / OCR / Edexcel',
      level: 'Sixth form → university admission',
      stages: ['Linear — all exams at the end of the two-year course'],
      papers: ['Paper 1 — biological molecules to genetic information (units 1-4)', 'Paper 2 — energy transfers to gene expression (units 5-8)', 'Paper 3 — synoptic content, practical skills, data analysis and one essay'],
      duration: 'Three 2 h papers',
      marking: 'A*-E; linear exams with an essay in Paper 3',
      questionTypes: ['Short-answer questions', 'Structured and extended written questions', 'Practical skills and data analysis questions'],
      notes:
        'Structure shown follows AQA 7402; OCR A and Edexcel A (context-led) cover the same core with different organisations. A separate practical endorsement (pass/fail) complements the grade.',
    },
    sources: [
      { title: 'AQA A-level Biology (7402) specification', url: 'https://www.aqa.org.uk/subjects/science/as-and-a-level/biology-7402', host: 'aqa.org.uk' },
    ],
    subjects: [
      {
        name: 'Biology',
        units: [
          {
            name: 'Biological Molecules',
            topics: [
              { name: 'Carbohydrates', subtopics: ['Monosaccharides (alpha and beta glucose, ribose and deoxyribose)', 'Disaccharides and glycosidic bonds by condensation', 'Polysaccharides: starch, glycogen and cellulose; structure-function links', 'Biochemical tests: reducing and non-reducing sugars, starch'] },
              { name: 'Lipids', subtopics: ['Triglycerides from glycerol and fatty acids', 'Phospholipids and their role in membranes', 'The emulsion test and functions of lipids'] },
              { name: 'Proteins and Enzymes', subtopics: ['Amino acid structure, peptide bonds and structural levels', 'Fibrous and globular proteins', 'Enzyme action: induced fit and activation energy', 'Factors affecting enzyme activity (pH, temperature, concentrations)', 'Competitive and non-competitive inhibition'] },
              { name: 'Nucleic Acids', subtopics: ['DNA and RNA: nucleotide structure and base pairing', 'Semi-conservative replication (incl. Meselson-Stahl evidence)', 'Comparing the structures and roles of DNA and RNA'] },
              { name: 'ATP, Water and Inorganic Ions', subtopics: ['ATP structure, hydrolysis and its role as the energy currency', 'Water: polarity, hydrogen bonding, solvent and thermal properties', 'Roles of inorganic ions (iron, phosphate, hydrogen carbonate, sodium)'] },
            ],
          },
          {
            name: 'Cells',
            topics: [
              { name: 'Cell Structure and Microscopy', subtopics: ['Eukaryotic organelles and their functions', 'Prokaryotic cells and viruses compared with eukaryotes', 'Optical, TEM and SEM microscopy; magnification and resolution', 'Cell fractionation and preparation techniques'] },
              { name: 'All Cells Arise from Other Cells', subtopics: ['The cell cycle: interphase, mitosis and cytokinesis', 'Binary fission and viral replication', 'Mitotic index and uncontrolled cell division (cancer)'] },
              { name: 'Transport Across Cell Membranes', subtopics: ['Simple and facilitated diffusion', 'Osmosis and water potential', 'Active transport and co-transport (glucose absorption in the ileum)'] },
              { name: 'Cell Recognition and the Immune System', subtopics: ['Phagocytosis and the non-specific response', 'T lymphocytes and cell-mediated immunity', 'B lymphocytes, antibodies and humoral immunity', 'Vaccination and active vs passive immunity', 'HIV and why antibiotics do not affect viruses'] },
            ],
          },
          {
            name: 'Organisms Exchange Substances with Their Environment',
            topics: [
              { name: 'Surface Area to Volume and Gas Exchange', subtopics: ['SA:V ratios and exchange strategies', 'Gas exchange in single-celled organisms, insects, fish and plants', 'Human alveoli and the mechanics of ventilation'] },
              { name: 'Digestion and Absorption', subtopics: ['Digestion of carbohydrates, lipids and proteins', 'Absorption in the ileum: villi, microvilli and co-transport'] },
              { name: 'Mass Transport in Animals', subtopics: ['The heart, cardiac cycle and blood vessels', 'Tissue fluid formation and capillary exchange', 'Haemoglobin: dissociation curves and the Bohr effect', 'Atherosclerosis and cardiovascular disease'] },
              { name: 'Mass Transport in Plants', subtopics: ['Xylem, the transpiration stream and factors affecting transpiration', 'Phloem loading and the mass flow hypothesis', 'Xerophytic adaptations and potometers'] },
            ],
          },
          {
            name: 'Genetic Information, Variation and Relationships Between Organisms',
            topics: [
              { name: 'DNA, Genes and Chromosomes', subtopics: ['DNA and chromosome organisation in eukaryotes and prokaryotes', 'Homologous chromosomes, alleles, genotype and phenotype', 'Meiosis: crossing over and independent segregation as sources of variation'] },
              { name: 'DNA and Protein Synthesis', subtopics: ['Transcription: mRNA and RNA polymerase', 'Translation: ribosomes, tRNA and peptide bond formation', 'The genetic code (degenerate, non-overlapping, universal)', 'Gene mutations: substitution, insertion and frameshifts'] },
              { name: 'Genetic Diversity and Adaptation', subtopics: ['Types of mutation and their contribution to diversity', 'Directional and stabilising natural selection', 'Antibiotic resistance as selection in action'] },
              { name: 'Species and Taxonomy', subtopics: ['Classification hierarchy and binomial nomenclature', 'Phylogenetic classification and evidence for relationships', 'Species definitions and their difficulties'] },
              { name: 'Biodiversity Within a Community', subtopics: ['Species richness and the index of diversity', 'Effects of agriculture on biodiversity', 'Sampling with quadrats and transects'] },
            ],
          },
          {
            name: 'Energy Transfers In and Between Organisms',
            topics: [
              { name: 'Photosynthesis', subtopics: ['Light-dependent reaction: photolysis and photophosphorylation', 'Light-independent reaction: the Calvin cycle and RuBisCO', 'Limiting factors and agricultural applications', 'Investigating photosynthetic pigments and rates'] },
              { name: 'Respiration', subtopics: ['Glycolysis', 'The link reaction and Krebs cycle', 'Oxidative phosphorylation and chemiosmosis', 'Anaerobic respiration: lactate and ethanol pathways', 'Respiratory quotient and respirometers'] },
              { name: 'Energy and Ecosystems', subtopics: ['Trophic levels, biomass and efficiency of transfer', 'Strategies to improve food-chain efficiency'] },
              { name: 'Nutrient Cycles', subtopics: ['The nitrogen cycle: ammonification, nitrification, nitrogen fixation, denitrification', 'The phosphorus cycle', 'Fertilisers and eutrophication'] },
            ],
          },
          {
            name: 'Organisms Respond to Changes in Their Internal and External Environment',
            topics: [
              { name: 'Stimuli and Responses', subtopics: ['Taxes, kineses and tropisms', 'The reflex arc and nervous control of involuntary responses'] },
              { name: 'Nervous Coordination', subtopics: ['Receptors: the Pacinian corpuscle and generator potentials', 'Resting potentials and action potentials', 'Myelination, saltatory conduction and factors affecting speed', 'Synaptic transmission and the neuromuscular junction'] },
              { name: 'Skeletal Muscle', subtopics: ['The sliding filament theory of contraction', 'Slow and fast twitch muscle fibres'] },
              { name: 'Homeostasis', subtopics: ['Principles of homeostasis and negative feedback', 'Blood glucose control: insulin, glucagon and adrenaline', 'Control of blood water potential: the kidney, ADH and selective reabsorption'] },
            ],
          },
          {
            name: 'Genetics, Populations, Evolution and Ecosystems',
            topics: [
              { name: 'Inheritance', subtopics: ['Monohybrid crosses and genetic diagrams', 'Codominance, multiple alleles and sex linkage', 'Dihybrid inheritance, autosomal linkage and epistasis', 'The chi-squared test for genetic ratios'] },
              { name: 'Populations and Evolution', subtopics: ['The Hardy-Weinberg principle and allele frequencies', 'Variation, types of selection and genetic drift', 'Speciation: allopatric and sympatric isolation'] },
              { name: 'Ecosystems', subtopics: ['Populations, communities, carrying capacity and limiting factors', 'Ecological succession from colonisation to climax communities', 'Distribution of global ecosystems and climatic effects'] },
              { name: 'Conservation', subtopics: ['Reasons for conservation and sustainable resource management', 'Managing succession and protecting habitats'] },
            ],
          },
          {
            name: 'The Control of Gene Expression',
            topics: [
              { name: 'Gene Mutation', subtopics: ['Mutation types and their effects on polypeptides', 'Chromosome mutations: polyploidy and non-disjunction', 'Mutagenic agents (radiation and chemicals)'] },
              { name: 'Gene Expression and Epigenetics', subtopics: ['Stem cells and totipotency', 'Transcription factors and the control of expression', 'Epigenetics: DNA methylation and histone acetylation', 'The operon model and RNA interference (siRNA)', 'Oncogenes and tumour suppressor genes'] },
              { name: 'Using Genome Projects', subtopics: ['Genome sequencing and determining proteomes', 'Applications in research and medicine'] },
              { name: 'Gene Technologies', subtopics: ['Recombinant DNA: restriction enzymes, plasmids and reverse transcriptase', 'PCR and gel electrophoresis', 'DNA probes, hybridisation and genetic fingerprinting', 'Applications in medicine, forensics and breeding'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'a-level-economics',
    name: 'A-Level Economics',
    fullName: 'GCE Advanced Level Economics (AQA 7136; OCR/Edexcel equivalents)',
    aliases: ['a level economics', 'alevel economics', 'as economics', 'a2 economics'],
    region: 'United Kingdom',
    category: 'School-leaving subject exam',
    popularity: 69,
    syllabusVerified: '2026-10-20',
    website: 'https://www.aqa.org.uk/subjects/business/as-and-a-level/economics-7136',
    overview: {
      conductor: 'AQA / OCR / Edexcel',
      level: 'Sixth form → university admission',
      stages: ['Linear — all exams at the end of the two-year course'],
      papers: ['Paper 1 — markets and market failure (2 h)', 'Paper 2 — national and international economy (2 h)', 'Paper 3 — economic principles and issues (2 h, multiple choice + case study)'],
      duration: 'Three 2 h papers',
      marking: 'A*-E; linear exams',
      questionTypes: ['Multiple-choice (Paper 3)', 'Data-response questions', 'Extended case-study essays'],
      notes:
        'Structure shown follows AQA 7136; Edexcel and OCR organise the same micro/macro content across three linear papers with different question styles.',
    },
    sources: [
      { title: 'AQA A-level Economics (7136) specification', url: 'https://www.aqa.org.uk/subjects/business/as-and-a-level/economics-7136', host: 'aqa.org.uk' },
    ],
    subjects: [
      {
        name: 'Economics',
        units: [
          {
            name: 'Individuals, Firms, Markets and Market Failure',
            topics: [
              { name: 'Economic Methodology and the Economic Problem', subtopics: ['Positive and normative statements; economic methodology', 'Scarcity, opportunity cost and choice at the margin', 'Production possibility frontiers', 'Specialisation, the division of labour and economic systems'] },
              { name: 'Individual Economic Decision Making', subtopics: ['Consumer aims: utility maximisation and marginal analysis', 'Behavioural economics: bounded rationality and biases (framing, anchoring, availability)', 'Nudge theory and choice architecture'] },
              { name: 'Production Costs and Revenues', subtopics: ['Fixed and variable costs; marginal and average cost curves', 'Economies and diseconomies of scale', 'Revenue: AR and MR under different market structures', 'Profit maximisation (MC = MR); normal and supernormal profit'] },
              { name: 'Different Market Structures and Contestability', subtopics: ['Perfect competition: assumptions and outcomes', 'Monopolistic competition and oligopoly (interdependence and collusion)', 'Monopoly power, price discrimination and natural monopoly', 'Contestability, barriers to entry and sunk costs', 'Efficiency comparisons: allocative, productive and dynamic'] },
              { name: 'Market Mechanism', subtopics: ['Demand and supply analysis: equilibrium and shifts', 'Price elasticity of demand and supply', 'Income and cross elasticity of demand', 'Consumer and producer surplus', 'Price signals, rationing and reallocation of resources'] },
              { name: 'Market Failure and Government Intervention', subtopics: ['Externalities in production and consumption; merit and demerit goods', 'Public goods, the free-rider problem and common access resources', 'Information gaps and asymmetric information', 'Intervention: indirect taxes, subsidies, price controls and direct provision', 'Government failure and unintended consequences'] },
            ],
          },
          {
            name: 'National and International Economy',
            topics: [
              { name: 'The Measurement of Macroeconomic Performance', subtopics: ['GDP, GNI and real vs nominal measures', 'Inflation measures (CPI) and unemployment measures', 'Balance of payments structure and imbalances'] },
              { name: 'How the Macroeconomy Works', subtopics: ['The circular flow of income, injections and withdrawals', 'Aggregate demand and its components (C + I + G + X − M)', 'Aggregate supply: short run and long run (Keynesian vs classical)', 'The multiplier effect'] },
              { name: 'Economic Performance', subtopics: ['Economic growth and the business cycle', 'Unemployment: types, causes and consequences', 'Inflation and deflation: causes and effects', 'International competitiveness and living standards'] },
              { name: 'Macroeconomic Policy', subtopics: ['Policy objectives and trade-offs (incl. the Phillips curve)', 'Fiscal policy: budgets, deficits, national debt and automatic stabilisers', 'Monetary policy: interest rates and central bank operations', 'Supply-side policies (market-based and interventionist)'] },
              { name: 'International Trade and the Global Economy', subtopics: ['Comparative and absolute advantage', 'Protectionism: tariffs, quotas and arguments for and against', 'Trade blocs, economic integration and the WTO', 'Exchange rate systems and the effects of currency movements', 'Globalisation: causes and consequences'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'gcse-maths',
    name: 'GCSE Maths',
    fullName: 'GCSE Mathematics (Higher Tier, grades 9-1)',
    aliases: ['gcse mathematics', 'gcse higher maths'],
    region: 'United Kingdom',
    category: 'School-leaving subject exam',
    popularity: 78,
    syllabusVerified: '2026-10-20',
    website: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300',
    overview: {
      conductor: 'AQA / Edexcel / OCR (common DfE core)',
      level: 'Key Stage 4 → sixth form / apprenticeships',
      stages: ['Linear — all exams at the end of Year 11'],
      papers: ['Paper 1', 'Paper 2', 'Paper 3 (one non-calculator paper and two calculator papers on AQA/Edexcel)'],
      duration: 'Three 1 h 30 min papers',
      marking: 'Grades 9-1 (Foundation 5-1, Higher 9-4)',
      questionTypes: ['Short single-mark questions', 'Structured multi-step problems'],
      notes:
        'Foundation and Higher tiers share a common core; this entry covers the Higher tier. Higher-only content is flagged in the subtopics.',
    },
    sources: [
      { title: 'AQA GCSE Mathematics (8300) specification', url: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300', host: 'aqa.org.uk' },
      { title: 'DfE — Mathematics GCSE subject content', url: 'https://www.gov.uk/government/publications/mathematics-gcse-subject-content', host: 'gov.uk' },
    ],
    subjects: [
      {
        name: 'Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Number',
            topics: [
              { name: 'Structure and Calculation', subtopics: ['Order of operations and inverse operations', 'Prime factor decomposition, HCF and LCM', 'Applying the four operations to integers, fractions and decimals'] },
              { name: 'Fractions, Decimals and Percentages', subtopics: ['Converting and ordering fractions, decimals and percentages', 'Percentage change, reverse percentages and compound interest'] },
              { name: 'Measures and Accuracy', subtopics: ['Estimation and rounding (significant figures, decimal places)', 'Bounds and error intervals (upper and lower bounds)', 'Units and compound units (speed, density, pressure)'] },
              { name: 'Indices and Surds', subtopics: ['Laws of indices including negative and fractional powers', 'Simplifying surds and rationalising denominators (Higher)'] },
              { name: 'Standard Form', subtopics: ['Converting to and from a × 10^n', 'Calculating with numbers in standard form'] },
            ],
          },
          {
            name: 'Algebra',
            topics: [
              { name: 'Notation, Vocabulary and Manipulation', subtopics: ['Simplifying, expanding and factorising expressions', 'Rearranging formulae', 'Using identities and algebraic arguments'] },
              { name: 'Graphs', subtopics: ['Linear graphs: gradients, intercepts, parallel and perpendicular lines (Higher)', 'Quadratic, cubic, reciprocal and exponential graphs', 'Trigonometric graphs (Higher)', 'Transformations of graphs (translations and reflections)', 'Equation of a circle and its tangent (Higher)'] },
              { name: 'Solving Equations and Inequalities', subtopics: ['Linear equations and formulae', 'Inequalities on number lines and as graph regions', 'Iteration for approximate solutions (Higher)'] },
              { name: 'Sequences', subtopics: ['nth term of linear sequences', 'Quadratic sequences (Higher)', 'Geometric and other special sequences (Higher)'] },
              { name: 'Quadratics including the Formula and Completing the Square', subtopics: ['Solving by factorising', 'The quadratic formula', 'Completing the square (incl. vertex form)'] },
              { name: 'Simultaneous Equations including Linear-Quadratic', subtopics: ['Linear simultaneous equations by elimination and substitution', 'Linear-quadratic pairs (Higher)', 'Forming and solving equations from contexts'] },
              { name: 'Algebraic Fractions and Proof', subtopics: ['Simplifying and operating with algebraic fractions (Higher)', 'Algebraic proof and disproof by counterexample'] },
            ],
          },
          {
            name: 'Ratio, Proportion and Rates of Change',
            topics: [
              { name: 'Ratio and Proportion', subtopics: ['Simplifying, sharing and dividing in a ratio', 'Direct and inverse proportion with equations and graphs', 'Scale drawings, maps and best-buy comparisons'] },
              { name: 'Rates of Change', subtopics: ['Compound rates: speed, density, pressure and flow', 'Growth and decay problems (compound interest, depreciation)', 'Interpreting gradients as rates of change and areas under graphs (Higher)'] },
            ],
          },
          {
            name: 'Geometry and Measures',
            topics: [
              { name: 'Properties and Constructions', subtopics: ['Angle facts, polygons and parallel lines', 'Congruence, similarity and geometric proof (incl. similar shapes ratio)', 'Circle theorems and their proofs (Higher)', 'Constructions with ruler and compasses; loci'] },
              { name: 'Mensuration and Calculation', subtopics: ['Perimeter, area and volume of standard and composite shapes', 'Pythagoras\' theorem in 2D and 3D', 'Trigonometry: SOHCAHTOA, exact values, sine and cosine rules, area ½ab sin C (Higher)', 'Arc length and sector area; surface area of cones, spheres and frustums'] },
              { name: 'Vectors', subtopics: ['Vector notation and arithmetic', 'Using vectors in geometric proof (parallel and collinear points)'] },
              { name: 'Transformations and Constructions', subtopics: ['Rotation, reflection, translation and enlargement (incl. negative scale factors)', 'Invariance under transformations', 'Combined constructions and loci problems'] },
            ],
          },
          {
            name: 'Probability',
            topics: [
              { name: 'Probability of Events', subtopics: ['The probability scale, sample spaces and exhaustive outcomes', 'Independent and mutually exclusive events', 'Experimental probability and relative frequency'] },
              { name: 'Tree and Venn Diagrams', subtopics: ['Tree diagrams with and without replacement', 'Venn diagrams with set notation'] },
              { name: 'Conditional Probability for Higher', subtopics: ['Conditional probability from two-way tables and Venn diagrams', 'Tree diagrams with conditional branches'] },
            ],
          },
          {
            name: 'Statistics',
            topics: [
              { name: 'Sampling and Representation', subtopics: ['Populations, samples and capture-recapture (Higher)', 'Pie charts, bar charts, frequency polygons and histograms'] },
              { name: 'Interpretation and Comparison of Data Distributions', subtopics: ['Measures of central tendency and spread', 'Comparing distributions with justification', 'Time series and trend lines'] },
              { name: 'Cumulative Frequency and Box Plots', subtopics: ['Cumulative frequency curves (medians, quartiles, IQR)', 'Box plots, outliers and comparisons'] },
              { name: 'Scatter Graphs and Correlation', subtopics: ['Plotting and interpreting scatter graphs', 'Lines of best fit, interpolation/extrapolation and causation caveats'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ucat',
    name: 'UCAT',
    fullName: 'University Clinical Aptitude Test',
    aliases: ['ukcat', 'university clinical aptitude test'],
    region: 'United Kingdom',
    category: 'Medical admission aptitude',
    popularity: 74,
    syllabusVerified: '2026-10-20',
    website: 'https://www.ucat.ac.uk',
    overview: {
      conductor: 'UCAT Consortium (formerly UKCAT)',
      level: 'Undergraduate → UK medicine/dentistry',
      stages: ['Single sitting per admissions cycle (one attempt per year)'],
      papers: ['Verbal Reasoning', 'Decision Making', 'Quantitative Reasoning', 'Abstract Reasoning', 'Situational Judgement'],
      duration: '≈ 2 h computer-based (five timed subtests)',
      marking: '300-900 per cognitive subtest; SJT band 1-4',
      negativeMarking: 'None',
      questionTypes: ['MCQ (4-5 options)', 'Situational judgement ranking'],
      notes:
        'No curriculum content — tests aptitude; sections are strictly timed with no going back. Universities weight the score differently.',
    },
    sources: [
      { title: 'UCAT — test format and subtests', url: 'https://www.ucat.ac.uk', host: 'ucat.ac.uk' },
    ],
    subjects: [
      {
        name: 'Verbal Reasoning',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Critical Evaluation',
            topics: [
              { name: 'True / False / Can\'t Tell from Passages', subtopics: ['Verifying statements strictly against passage evidence', 'Recognising when information is insufficient (Can\'t Tell)', 'Avoiding outside knowledge and assumptions'] },
              { name: 'Author\'s Opinion vs Fact', subtopics: ['Identifying the writer\'s claims and stance', 'Separating factual statements from opinion', 'Questions on the writer\'s main point or purpose'] },
            ],
          },
          {
            name: 'Inference from Text',
            topics: [
              { name: 'Drawing Conclusions', subtopics: ['Selecting the best-supported conclusion from options', 'Eliminating options with unsupported detail or absolutes'] },
              { name: 'Applying Information', subtopics: ['Applying passage information to new scenarios', 'Reasoning with data or claims stated in the text'] },
            ],
          },
        ],
      },
      {
        name: 'Decision Making',
        mappedSubjectId: 'aptitude',
        units: [
          {
            name: 'Logical Puzzles and Reasoning',
            topics: [
              { name: 'Syllogisms and Venn Logic', subtopics: ['Testing whether conclusions must follow from premises', 'Venn puzzles: which statements must or could be true'] },
              { name: 'Logical Equations and Yes/No Deductions', subtopics: ['Ordering and arrangement puzzles', 'Making series of yes/no deductions to isolate the answer', 'Logical connectives (and, or, if-then) in puzzles'] },
            ],
          },
          {
            name: 'Evaluating Arguments',
            topics: [
              { name: 'Strongest Argument Selection', subtopics: ['Weighing arguments for and against a course of action', 'Spotting flawed arguments and weak assumptions'] },
              { name: 'Assumptions in Arguments', subtopics: ['Identifying hidden assumptions behind claims', 'Distinguishing assumptions from conclusions and evidence'] },
            ],
          },
          {
            name: 'Probability and Statistical Reasoning',
            topics: [
              { name: 'Interpreting Probabilities', subtopics: ['Reading probability statements and gambling-style scenarios', 'Combining probabilities in practical contexts'] },
              { name: 'Expected Outcomes', subtopics: ['Reasoning about averages and expected values', 'Choosing the best option from statistical information'] },
            ],
          },
        ],
      },
      {
        name: 'Quantitative Reasoning',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Numerical Problem Solving',
            topics: [
              { name: 'Ratios and Percentages', subtopics: ['Percentage change and reverse percentages', 'Ratio sharing, mixtures and scaling'] },
              { name: 'Rates and Averages', subtopics: ['Speed/distance/time and rates of flow', 'Means, medians and combined averages'] },
              { name: 'Geometry and Time', subtopics: ['Perimeter, area and volume with unit conversions', 'Timetables, clocks and scheduling arithmetic'] },
            ],
          },
          {
            name: 'Data Interpretation',
            topics: [
              { name: 'Charts and Tables', subtopics: ['Multi-step extraction from tables and charts', 'Estimation and sanity-checking to save time'] },
              { name: 'Graph Reading under Time Pressure', subtopics: ['Interpolating from line and scatter graphs', 'Approximate reading, currencies and unit conversions across charts'] },
            ],
          },
        ],
      },
      {
        name: 'Abstract Reasoning',
        mappedSubjectId: 'aptitude',
        units: [
          {
            name: 'Pattern Recognition',
            topics: [
              { name: 'Type 1 (Sets A/B)', subtopics: ['Deciding whether a test shape belongs to Set A, Set B or neither', 'Two independent rules, one per set'] },
              { name: 'Type 2 (Sequences)', subtopics: ['Choosing the shape that continues the series', 'Tracking several changing features across steps'] },
              { name: 'Type 3 (Analogies)', subtopics: ['Finding the rule that changes the first shape into the second', 'Applying the same change to a new shape'] },
              { name: 'Type 4 (Best Fit)', subtopics: ['Assigning a shape to the set it best matches', 'Comparing against both partial rules'] },
            ],
          },
          {
            name: 'Rule Detection',
            topics: [
              { name: 'Simple and Conditional Rules', subtopics: ['Rules combining counts, positions and rotations', 'Ignoring distractor features that break naive rules'] },
              { name: 'Shape Attributes', subtopics: ['Number, size, colour/shading, orientation and symmetry', 'Distribution of features (sides, angles, overlaps)'] },
            ],
          },
        ],
      },
      {
        name: 'Situational Judgement',
        units: [
          {
            name: 'Medical Ethics Scenarios',
            topics: [
              { name: 'Integrity', subtopics: ['Honesty about mistakes, confidentiality and professionalism', 'Acting on concerns and patient safety'] },
              { name: 'Perspective Taking', subtopics: ['Recognising patient, colleague and team viewpoints', 'Empathy in communication with patients and relatives'] },
              { name: 'Teamwork', subtopics: ['Respecting roles within a multidisciplinary team', 'Handover, delegation and supporting colleagues under pressure'] },
            ],
          },
          {
            name: 'Response Ranking',
            topics: [
              { name: 'Importance and Appropriateness Judgements', subtopics: ['Rating the importance of responses in a scenario', 'Rating appropriateness, including partial-credit nuances'] },
              { name: 'Band-Based Scoring', subtopics: ['Partial-credit scoring against expert panels', 'How bands 1-4 are reported to universities'] },
            ],
          },
        ],
      },
    ],
  },
]

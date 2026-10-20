import type { CuratedExam } from './types'

/**
 * IB Diploma Programme subject exams — curated official syllabi.
 *
 * Sources: International Baccalaureate Organization DP subject guides
 * (Mathematics: Analysis and Approaches HL; the 2023-guides for Physics,
 * Chemistry and Biology with first assessment 2025; the 2020 Economics
 * guide with first assessment 2022).
 */

export const IB_EXAMS: CuratedExam[] = [
  {
    id: 'ib-math-aa',
    name: 'IB Math AA',
    fullName: 'IB Diploma — Mathematics: Analysis and Approaches (HL)',
    aliases: ['ib maths aa', 'ib analysis and approaches', 'ib math hl'],
    region: 'Global',
    category: 'IB Diploma subject',
    popularity: 77,
    syllabusVerified: '2026-10-20',
    website: 'https://www.ibo.org',
    overview: {
      conductor: 'International Baccalaureate Organization',
      level: 'Diploma Programme → university admission',
      stages: ['HL route (240 h) or SL route (150 h); this entry covers HL'],
      papers: ['Paper 1: 2 h (no calculator)', 'Paper 2: 2 h (calculator)', 'Paper 3: 1 h (HL-only, calculator)'],
      duration: '3 papers (HL: 2 h + 2 h + 1 h) + IA exploration',
      marking: '1-7 scale; 80% exam + 20% internal assessment',
      questionTypes: ['Short-response questions', 'Extended-response questions', 'Problem-solving without a calculator (Paper 1)'],
      notes:
        'AA emphasises analytic methods; AI (Applications) is a separate route not covered here. The IA is an individual mathematical exploration.',
    },
    sources: [
      { title: 'Mathematics: Analysis and Approaches — IB Diploma Programme guide', url: 'https://www.ibo.org/programmes/diploma-programme/curriculum/', host: 'ibo.org' },
    ],
    subjects: [
      {
        name: 'Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Number and Algebra',
            topics: [
              {
                name: 'Number Operations, Approximation and Counting',
                subtopics: [
                  'Integer and rational exponents; numbers in a × 10^k form',
                  'Absolute, percentage and upper/lower bound errors',
                  'Counting principles: permutations and combinations (HL)',
                ],
              },
              {
                name: 'Arithmetic and Geometric Sequences and Series',
                subtopics: [
                  'nth-term and sum formulae with sigma notation',
                  'Compound interest, depreciation and financial applications',
                  'Sum to infinity of convergent geometric series',
                ],
              },
              {
                name: 'Exponents and Logarithms',
                subtopics: [
                  'Laws of exponents and logarithms; change of base',
                  'Solving exponential and logarithmic equations',
                  'Logarithmic and exponential behaviour in context',
                ],
              },
              {
                name: 'The Binomial Theorem',
                subtopics: [
                  'Expansions of (a + bx)^n for positive integer n',
                  'Generalised binomial expansion for rational n, valid for |x| < 1 (HL)',
                  'Finding specific coefficients and terms',
                ],
              },
              {
                name: 'Complex Numbers (HL)',
                subtopics: [
                  'Argand diagrams, modulus and argument',
                  'Euler and modulus-argument (cis) forms; sums, products and quotients',
                  'De Moivre\'s theorem and nth roots, incl. roots of unity',
                  'Complex roots of polynomials and conjugate pairs',
                ],
              },
              {
                name: 'Proof and Partial Fractions (HL)',
                subtopics: [
                  'Proof by deduction, contradiction and mathematical induction',
                  'Partial fraction decompositions',
                ],
              },
            ],
          },
          {
            name: 'Functions',
            topics: [
              {
                name: 'Notation, Composite and Inverse Functions',
                subtopics: [
                  'Domain, range and function notation',
                  'Composite functions f∘g',
                  'Inverse functions and reflection in y = x',
                ],
              },
              {
                name: 'Transformations of Graphs',
                subtopics: [
                  'Translations, stretches and reflections',
                  'Combined transformations and their effect on key points',
                ],
              },
              {
                name: 'Quadratic Functions and Modelling',
                subtopics: [
                  'Vertex form, axis of symmetry and the discriminant',
                  'Completing the square and optimisation problems',
                  'Quadratic models fitted to data with technology',
                ],
              },
              {
                name: 'Exponential, Logarithmic and Other Models',
                subtopics: [
                  'Exponential growth and decay models',
                  'Logarithmic functions and their graphs',
                  'Direct, inverse and power variation models',
                ],
              },
              {
                name: 'Polynomial, Rational and Modulus Functions (HL)',
                subtopics: [
                  'Polynomial graphs, roots and factorisation',
                  'Rational functions and their asymptotes',
                  'Solving inequalities graphically and analytically',
                  'Modulus (absolute value) equations and inequalities',
                ],
              },
            ],
          },
          {
            name: 'Geometry and Trigonometry',
            topics: [
              {
                name: 'Coordinate Geometry and 3D Solids',
                subtopics: [
                  'Distance and midpoint in two and three dimensions',
                  'Perimeter, area and volume of standard and composite solids',
                  'Arc length and sector area (radian measure)',
                ],
              },
              {
                name: 'Trigonometric Ratios and Triangle Solution',
                subtopics: [
                  'Right-angled trigonometry and exact values',
                  'Sine and cosine rules; area ½ab sin C',
                  'Applications: angles of elevation, depression and bearings',
                ],
              },
              {
                name: 'The Unit Circle and Trigonometric Graphs',
                subtopics: [
                  'The unit circle and radian measure',
                  'Graphs of sine, cosine and tangent and their transformations',
                  'Sinusoidal modelling of real data',
                ],
              },
              {
                name: 'Trigonometric Identities and Equations',
                subtopics: [
                  'The Pythagorean identity and its uses',
                  'Double angle identities; compound angle identities (HL)',
                  'Solving trigonometric equations in radians, incl. periodic families',
                ],
              },
              {
                name: 'Vectors (HL)',
                subtopics: [
                  'Vector operations, magnitude and unit vectors in 2D and 3D',
                  'Scalar (dot) product, angles and perpendicularity',
                  'Vector and parametric equations of lines; intersections and angles between lines',
                  'Vector (cross) product, areas and equations of planes',
                ],
              },
            ],
          },
          {
            name: 'Statistics and Probability',
            topics: [
              {
                name: 'Sampling and Data Representation',
                subtopics: [
                  'Sampling concepts, methods and their limitations',
                  'Histograms, box plots and outliers',
                ],
              },
              {
                name: 'Descriptive Statistics',
                subtopics: [
                  'Measures of central tendency and dispersion',
                  'Quartiles, interquartile range and effect of outliers',
                  'Linear transformations of data and their effect on statistics',
                ],
              },
              {
                name: 'Correlation and Regression',
                subtopics: [
                  'Pearson\'s product-moment correlation coefficient',
                  'Least-squares regression and prediction (interpolation vs extrapolation)',
                  'Association vs causation',
                ],
              },
              {
                name: 'Probability',
                subtopics: [
                  'Sample spaces, Venn diagrams and tree diagrams',
                  'Independent and mutually exclusive events; conditional probability',
                  'Probability with and without replacement',
                ],
              },
              {
                name: 'Probability Distributions',
                subtopics: [
                  'Discrete random variables; E(X) and Var(X) (expectation algebra HL)',
                  'The binomial distribution',
                  'The normal distribution and inverse normal calculations',
                  'The Poisson distribution and approximations (HL)',
                ],
              },
              {
                name: 'Inference: Chi-Squared and t-Tests',
                subtopics: [
                  'Chi-squared test for independence (contingency tables)',
                  'Chi-squared goodness-of-fit test (HL)',
                  'The t-test (one-sample, two-sample and paired) (HL)',
                  'Null hypotheses, p-values and significance levels',
                ],
              },
            ],
          },
          {
            name: 'Calculus',
            topics: [
              {
                name: 'Limits and Differentiation from First Principles',
                subtopics: [
                  'Limit notation and behaviour',
                  'First-principles differentiation of polynomials',
                  'Tangents and normals; the derivative as rate of change',
                ],
              },
              {
                name: 'Derivative Rules and Techniques',
                subtopics: [
                  'Chain, product and quotient rules',
                  'Derivatives of trigonometric, exponential and logarithmic functions',
                  'Implicit differentiation and related rates of change (HL)',
                  'Second derivatives: concavity and points of inflexion',
                  'Derivatives of inverse trigonometric functions and a^x (HL)',
                ],
              },
              {
                name: 'Applications of Differentiation',
                subtopics: [
                  'Increasing/decreasing behaviour and stationary points',
                  'Optimisation problems in context',
                  'Kinematics: displacement, velocity and acceleration',
                ],
              },
              {
                name: 'Integration',
                subtopics: [
                  'Indefinite integrals and standard antiderivatives',
                  'Definite integrals; areas under and between curves',
                  'Integration by substitution and by parts (HL)',
                  'Integration using partial fractions (HL)',
                  'Improper integrals (HL)',
                ],
              },
              {
                name: 'Differential Equations (HL)',
                subtopics: [
                  'Separation of variables; general and particular solutions',
                  'Euler\'s method for numerical solutions',
                ],
              },
              {
                name: 'Maclaurin Series (HL)',
                subtopics: [
                  'Maclaurin series for common functions',
                  'Series for e^x, sin x, cos x, ln(1 + x) and (1 + x)^n',
                  'Manipulating known series by substitution and integration',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ib-physics',
    name: 'IB Physics',
    fullName: 'IB Diploma — Physics (HL)',
    aliases: ['ib physics hl', 'ib dp physics'],
    region: 'Global',
    category: 'IB Diploma subject',
    popularity: 68,
    syllabusVerified: '2026-10-20',
    website: 'https://www.ibo.org',
    overview: {
      conductor: 'International Baccalaureate Organization',
      level: 'Diploma Programme → university admission',
      stages: ['HL route with 60 h of extension content beyond the SL core'],
      papers: ['Paper 1 — multiple-choice and data-based questions', 'Paper 2 — short-answer and extended-response', 'IA — individual scientific investigation'],
      duration: 'Two written papers (HL) + IA; 95 h core + 60 h HL extension',
      marking: '1-7 scale; ≈80% exam + 20% IA',
      questionTypes: ['Multiple-choice questions', 'Short-answer questions', 'Extended-response questions', 'Data-based and experimental questions'],
      notes:
        '2023 syllabus (first assessment 2025): five themes A-E with HL-only content flagged below; options removed and assessment restructured to two written papers plus the investigation.',
    },
    sources: [
      { title: 'Physics — IB Diploma Programme guide', url: 'https://www.ibo.org/programmes/diploma-programme/curriculum/', host: 'ibo.org' },
    ],
    subjects: [
      {
        name: 'Physics',
        mappedSubjectId: 'physics',
        units: [
          {
            name: 'A. Space, Time and Motion',
            topics: [
              {
                name: 'Kinematics',
                subtopics: [
                  'Motion graphs and equations of uniform acceleration',
                  'Projectile motion',
                  'Relative velocity (HL)',
                ],
              },
              {
                name: 'Forces and Momentum',
                subtopics: [
                  'Free-body diagrams, resolving and resultant forces',
                  'Newton\'s laws, friction, drag and terminal velocity',
                  'Momentum, impulse and conservation',
                ],
              },
              {
                name: 'Work, Energy and Power',
                subtopics: [
                  'Work done and energy transfers',
                  'Kinetic, gravitational and elastic potential energy',
                  'Power and efficiency',
                ],
              },
              {
                name: 'Rigid Bodies and Rotational Dynamics (HL)',
                subtopics: [
                  'Torque (moment) of a force and rotational equilibrium',
                  'Moment of inertia and rotational kinetic energy',
                  'Rotational kinematics and dynamics (τ = Iα)',
                  'Angular momentum and its conservation',
                ],
              },
              {
                name: 'Galilean and Special Relativity (HL)',
                subtopics: [
                  'Reference frames and Galilean relativity',
                  'The postulates of special relativity and invariance of c',
                  'Time dilation, length contraction and the Lorentz factor',
                  'Relativistic momentum and energy',
                ],
              },
            ],
          },
          {
            name: 'B. The Particulate Nature of Matter',
            topics: [
              {
                name: 'Thermal Energy Transfers',
                subtopics: [
                  'Conduction, convection and thermal radiation',
                  'Specific heat capacity and calorimetry',
                  'Specific latent heat',
                ],
              },
              {
                name: 'The Greenhouse Effect',
                subtopics: [
                  'Solar and terrestrial radiation balance',
                  'Albedo and emissivity',
                  'Greenhouse gases and feedback effects',
                ],
              },
              {
                name: 'Thermodynamics (HL)',
                subtopics: [
                  'The first law of thermodynamics (ΔU = Q + W)',
                  'Entropy and entropy change',
                  'Thermodynamic cycles and heat engines',
                ],
              },
              {
                name: 'Current and Circuits',
                subtopics: [
                  'Current, charge and Kirchhoff\'s circuit laws',
                  'Ohm\'s law, resistivity and component characteristics',
                  'Series and parallel networks; cells and internal resistance',
                  'Electrical power dissipation',
                ],
              },
              {
                name: 'Inelastic Collisions and Conservation of Momentum (HL)',
                subtopics: [
                  'Conservation of momentum in inelastic collisions',
                  'Elastic vs inelastic energy analysis',
                  'Two-dimensional collision problems',
                ],
              },
            ],
          },
          {
            name: 'C. Wave Behaviour',
            topics: [
              {
                name: 'Simple Harmonic Motion',
                subtopics: [
                  'Conditions for SHM and the defining equation',
                  'Displacement, velocity and energy in oscillations',
                  'Mass-spring and pendulum systems',
                ],
              },
              {
                name: 'The Wave Model',
                subtopics: [
                  'Travelling waves: v = fλ, wavefronts and superposition',
                  'Amplitude, intensity and the inverse-square relationship',
                  'Polarisation (HL)',
                ],
              },
              {
                name: 'Wave Phenomena',
                subtopics: [
                  'Interference and Young\'s double-slit',
                  'Single-slit diffraction and diffraction gratings',
                  'Refraction, Snell\'s law and total internal reflection',
                ],
              },
              {
                name: 'Standing Waves and Resonance',
                subtopics: [
                  'Standing waves on strings and in pipes; harmonics',
                  'Resonance and damping',
                ],
              },
              {
                name: 'The Doppler Effect',
                subtopics: [
                  'Doppler shift of sound and light',
                  'Applications: redshift, radar and medical ultrasound',
                ],
              },
            ],
          },
          {
            name: 'D. Fields',
            topics: [
              {
                name: 'Gravitational Fields',
                subtopics: [
                  'Newton\'s law of gravitation and field strength',
                  'Gravitational potential and potential energy in radial fields',
                  'Motion in gravitational fields: orbits and satellites (HL)',
                ],
              },
              {
                name: 'Electric Fields',
                subtopics: [
                  'Coulomb\'s law and electric field strength',
                  'Electric potential and potential difference',
                  'Uniform fields and comparisons with gravity',
                ],
              },
              {
                name: 'Magnetic Fields',
                subtopics: [
                  'Magnetic flux density; forces on currents and moving charges',
                  'Magnetic flux, flux linkage and Faraday\'s law',
                  'AC generators and transformers',
                ],
              },
              {
                name: 'Induction',
                subtopics: [
                  'Lenz\'s law and induced EMF',
                  'Eddy currents and practical applications',
                ],
              },
            ],
          },
          {
            name: 'E. Nuclear and Quantum Physics',
            topics: [
              {
                name: 'Structure of the Atom',
                subtopics: [
                  'Atomic models, photons and energy levels',
                  'Emission and absorption spectra',
                  'The photoelectric effect and work function',
                ],
              },
              {
                name: 'Nuclear Physics',
                subtopics: [
                  'Nucleons, isotopes and mass-energy equivalence (E = mc²)',
                  'Binding energy and the binding energy curve',
                  'Nuclear stability',
                ],
              },
              {
                name: 'Radioactive Decay',
                subtopics: [
                  'Alpha, beta and gamma decay with nuclear equations',
                  'Activity, half-life and exponential decay',
                  'Background radiation and safety',
                ],
              },
              {
                name: 'Quantum Physics',
                subtopics: [
                  'Wave-particle duality and the de Broglie wavelength',
                  'Electron diffraction as evidence',
                  'Quantum tunnelling and applications (HL)',
                ],
              },
              {
                name: 'Fission and Fusion',
                subtopics: [
                  'Induced fission and chain reactions',
                  'Fusion reactions and energy yield',
                  'Comparing fission and fusion on the binding-energy curve',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ib-chemistry',
    name: 'IB Chemistry',
    fullName: 'IB Diploma — Chemistry (HL)',
    aliases: ['ib chemistry hl', 'ib dp chemistry'],
    region: 'Global',
    category: 'IB Diploma subject',
    popularity: 67,
    syllabusVerified: '2026-10-20',
    website: 'https://www.ibo.org',
    overview: {
      conductor: 'International Baccalaureate Organization',
      level: 'Diploma Programme → university admission',
      stages: ['HL route with additional higher-level content throughout the themes'],
      papers: ['Paper 1 — multiple-choice and data-based questions', 'Paper 2 — short-answer and extended-response', 'IA — individual scientific investigation'],
      duration: 'Two written papers (HL) + IA',
      marking: '1-7 scale; ≈80% exam + 20% IA',
      questionTypes: ['Multiple-choice questions', 'Short-answer questions', 'Extended-response questions', 'Data-based and experimental questions'],
      notes:
        '2023 syllabus (first assessment 2025): content is organised into Structure and Reactivity themes; options removed; HL-only material is flagged below.',
    },
    sources: [
      { title: 'Chemistry — IB Diploma Programme guide', url: 'https://www.ibo.org/programmes/diploma-programme/curriculum/', host: 'ibo.org' },
    ],
    subjects: [
      {
        name: 'Chemistry',
        mappedSubjectId: 'chemistry',
        units: [
          {
            name: 'Structure',
            topics: [
              {
                name: 'Introduction to the Particulate Nature of Matter',
                subtopics: [
                  'Elements, compounds and mixtures; states of matter',
                  'Kinetic molecular theory and changes of state',
                  'Separation of mixtures (filtration, distillation, chromatography)',
                ],
              },
              {
                name: 'Nuclear Symbol Notation and Isotopes',
                subtopics: [
                  'Protons, neutrons and electrons; nuclear symbol notation',
                  'Isotopes, relative atomic mass and isotopic abundance',
                  'Mass spectra and relative atomic mass determination (HL)',
                ],
              },
              {
                name: 'Electron Configurations and Periodicity',
                subtopics: [
                  'Electron shells, subshells and orbitals; writing configurations',
                  'The periodic table: groups, periods and blocks',
                  'Trends in atomic radius, ionisation energy and electronegativity',
                ],
              },
              {
                name: 'Ionic and Covalent Structure',
                subtopics: [
                  'Ionic bonding, lattice structures and ionic formulae',
                  'Covalent bonding and Lewis structures',
                  'Formal charge, resonance and expanded octets (HL)',
                  'Bond polarity and molecular dipoles',
                ],
              },
              {
                name: 'Counting Particles by Mass: The Mole',
                subtopics: [
                  'Avogadro\'s constant, the mole and molar mass calculations',
                  'Empirical and molecular formulae from composition data',
                  'Solution concentrations and titration analysis',
                  'Ideal gases: pV = nRT and molar volume',
                ],
              },
              {
                name: 'Bonding and Structure',
                subtopics: [
                  'The metallic model and delocalised electrons',
                  'VSEPR geometries, bond angles and hybridisation (HL)',
                  'Intermolecular forces: London (dispersion), dipole-dipole and hydrogen bonding',
                  'Structure-property links: melting points, conductivity, solubility; materials and alloys',
                ],
              },
            ],
          },
          {
            name: 'Reactivity',
            topics: [
              {
                name: 'What Drives Chemical Reactions: Energy and Entropy',
                subtopics: [
                  'Exothermic and endothermic change; measuring enthalpy (calorimetry)',
                  'Energy cycles: Hess\'s law and bond enthalpies',
                  'Energy from fuels: combustion and alternatives',
                  'Entropy, spontaneity and Gibbs free energy (HL)',
                ],
              },
              {
                name: 'How Much: The Amount of Chemical Change',
                subtopics: [
                  'Stoichiometry: mole ratios and limiting reactants',
                  'Theoretical yield, percentage yield and atom economy',
                  'Solution and gas stoichiometry in analysis',
                ],
              },
              {
                name: 'How Fast: Rates of Reaction',
                subtopics: [
                  'Collision theory and Maxwell-Boltzmann distributions',
                  'Effects of temperature, concentration, surface area and catalysts',
                  'Rate expressions, order of reaction and rate constants (HL)',
                  'Activation energy from Arrhenius data (HL)',
                ],
              },
              {
                name: 'How Far: The Extent of Chemical Change',
                subtopics: [
                  'Dynamic equilibrium and Le Chatelier\'s principle',
                  'The equilibrium constant Kc and its qualitative use',
                  'Kp and quantitative equilibrium calculations (HL)',
                  'The relationship between ΔG° and K (HL)',
                ],
              },
              {
                name: 'Proton Transfer Reactions: Acids and Bases',
                subtopics: [
                  'Brønsted-Lowry acids and bases; conjugate pairs',
                  'pH; strong and weak acids and bases; Ka and pKa',
                  'Titration curves, indicators and buffer solutions (HL)',
                ],
              },
              {
                name: 'Electron Transfer and Electron-Pair Sharing Reactions',
                subtopics: [
                  'Oxidation numbers, half-equations and redox analysis',
                  'Voltaic cells and standard electrode potentials (HL)',
                  'Electrolysis of molten and aqueous systems (HL)',
                  'Lewis acid-base theory, nucleophiles and electrophiles (HL)',
                  'Radical reactions: initiation, propagation and termination',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ib-biology',
    name: 'IB Biology',
    fullName: 'IB Diploma — Biology (HL)',
    aliases: ['ib biology hl', 'ib dp biology'],
    region: 'Global',
    category: 'IB Diploma subject',
    popularity: 66,
    syllabusVerified: '2026-10-20',
    website: 'https://www.ibo.org',
    overview: {
      conductor: 'International Baccalaureate Organization',
      level: 'Diploma Programme → university admission',
      stages: ['HL route with additional higher-level content throughout the themes'],
      papers: ['Paper 1 — multiple-choice and data-based questions', 'Paper 2 — short-answer and extended-response', 'IA — individual scientific investigation'],
      duration: 'Two written papers (HL) + IA',
      marking: '1-7 scale; ≈80% exam + 20% IA',
      questionTypes: ['Multiple-choice questions', 'Short-answer questions', 'Extended-response questions', 'Data-based and experimental questions'],
      notes:
        'Structure follows the 2023 IB Biology guide (themes A-D, first assessment 2025). A few subtopic placements are regularised where official subtopics straddle themes (e.g. gas exchange grouped under B, energy transfer under C); content items are standard syllabus material and HL-only items are flagged.',
    },
    sources: [
      { title: 'Biology — IB Diploma Programme guide', url: 'https://www.ibo.org/programmes/diploma-programme/curriculum/', host: 'ibo.org' },
    ],
    subjects: [
      {
        name: 'Biology',
        units: [
          {
            name: 'A. Unity and Diversity',
            topics: [
              {
                name: 'Water',
                subtopics: [
                  'Hydrogen bonding and emergent properties (cohesion, solvent action, thermal stability)',
                  'Water in organisms: transport, metabolism and habitat',
                ],
              },
              {
                name: 'Nucleic Acids as the Molecule of Life',
                subtopics: [
                  'DNA and RNA structure: nucleotides, base pairing and directionality',
                  'Roles of DNA and RNA in storing and transferring information',
                  'Origins of cells, endosymbiosis and the RNA world (HL)',
                ],
              },
              {
                name: 'Cell Structure and Function',
                subtopics: [
                  'Cell theory; prokaryotic and eukaryotic cells',
                  'Organelles and their functions',
                  'Cell size, surface-area-to-volume ratio and specialisation',
                  'Microscopy skills: magnification, resolution and specimen work',
                ],
              },
              {
                name: 'Diversity and Classification',
                subtopics: [
                  'Binomial nomenclature and the taxonomic hierarchy',
                  'The three domains and classification from evidence',
                  'Phylogenetic trees and clades',
                  'Viruses and the challenges they pose for classification',
                ],
              },
              {
                name: 'Evolution and Speciation',
                subtopics: [
                  'Natural selection and sources of variation',
                  'Evidence for evolution (fossil, molecular, anatomical)',
                  'Speciation: allopatric and sympatric isolation',
                  'The Hardy-Weinberg principle and allele frequencies (HL)',
                ],
              },
              {
                name: 'Conservation and Biodiversity',
                subtopics: [
                  'Measuring species diversity and threats to biodiversity',
                  'Reasons for conservation and sustainable use',
                  'Conservation approaches: protected areas, restoration and ex situ methods',
                ],
              },
            ],
          },
          {
            name: 'B. Form and Function',
            topics: [
              {
                name: 'Carbohydrates and Lipids',
                subtopics: [
                  'Monosaccharides, disaccharides and polysaccharides (starch, glycogen, cellulose)',
                  'Fatty acids, triglycerides and phospholipids',
                  'Structure-function links: energy storage, membranes and insulation',
                ],
              },
              {
                name: 'Proteins',
                subtopics: [
                  'Amino acids, peptide bonds and structural levels',
                  'Fibrous and globular proteins',
                  'Enzyme function: active sites, induced fit and factors affecting activity',
                ],
              },
              {
                name: 'Membranes and Membrane Transport',
                subtopics: [
                  'The fluid mosaic model',
                  'Passive transport: diffusion, facilitated diffusion and osmosis',
                  'Active transport and vesicular transport (endo/exocytosis)',
                  'Osmolarity and its effects on cells (HL)',
                ],
              },
              {
                name: 'Gas Exchange and Transport',
                subtopics: [
                  'Surface-area-to-volume ratios and exchange surfaces',
                  'Gas exchange organs in animals and plants',
                  'Circulatory systems and blood composition',
                  'Transport in plants: xylem, transpiration and phloem',
                  'Vascular structure and ventilation in depth (HL)',
                ],
              },
              {
                name: 'Integration of Body Systems',
                subtopics: [
                  'Cell-to-cell communication: receptors and signal transduction',
                  'Neurons: action potentials, synapses and neurotransmitters',
                  'Reflex arcs and coordination between systems',
                  'Muscles and motility (HL)',
                ],
              },
              {
                name: 'Defence Against Disease',
                subtopics: [
                  'Pathogens and modes of transmission',
                  'Innate immunity: barriers, inflammation and phagocytes',
                  'Adaptive immunity: B and T lymphocytes, antibodies (HL detail)',
                  'Vaccination, antibiotics and the evolution of resistance',
                ],
              },
            ],
          },
          {
            name: 'C. Interaction and Interdependence',
            topics: [
              {
                name: 'Cell Respiration',
                subtopics: [
                  'Glycolysis: substrates, products and net ATP',
                  'Anaerobic pathways: lactate and ethanol fermentation',
                  'The link reaction, Krebs cycle and oxidative phosphorylation (HL)',
                  'ATP yield comparisons of aerobic and anaerobic respiration',
                ],
              },
              {
                name: 'Photosynthesis',
                subtopics: [
                  'Light-dependent reactions: photolysis and photophosphorylation',
                  'Light-independent reactions: the Calvin cycle and RuBisCO',
                  'Limiting factors and agricultural applications',
                  'Cyclic electron flow and chloroplast detail (HL)',
                ],
              },
              {
                name: 'Chemical Signalling: Hormones',
                subtopics: [
                  'Hormones and endocrine communication',
                  'Signal reception and transduction cascades',
                  'Insulin and glucagon in metabolic regulation',
                ],
              },
              {
                name: 'Populations and Communities',
                subtopics: [
                  'Population growth curves, carrying capacity and limiting factors',
                  'Interactions: competition, predation, mutualism and parasitism',
                  'Niches and community relationships',
                ],
              },
              {
                name: 'Transfer of Energy and Matter in Ecosystems',
                subtopics: [
                  'Trophic levels, food webs and energy losses between levels',
                  'Carbon cycling through photosynthesis, respiration and combustion',
                  'Nutrient cycles: carbon and nitrogen in depth (HL)',
                ],
              },
            ],
          },
          {
            name: 'D. Continuity and Change',
            topics: [
              {
                name: 'DNA Replication',
                subtopics: [
                  'Semi-conservative replication and the main enzymes',
                  'Replication origins, leading and lagging strands (HL)',
                  'Fidelity of replication and mutation',
                ],
              },
              {
                name: 'Gene Expression',
                subtopics: [
                  'Transcription and translation; the genetic code',
                  'Regulation of gene expression; epigenetics and the operon model (HL)',
                  'Gene mutation and its effects on proteins',
                ],
              },
              {
                name: 'Cell Division',
                subtopics: [
                  'The cell cycle and mitosis',
                  'Meiosis and the production of genetic variation',
                  'Control by cyclins; oncogenes and tumour suppressors (HL)',
                ],
              },
              {
                name: 'Inheritance',
                subtopics: [
                  'Monohybrid crosses and Mendel\'s laws',
                  'Codominance, multiple alleles and sex linkage',
                  'Dihybrid crosses, autosomal linkage and test crosses (HL)',
                  'Pedigree analysis and statistical testing of genetic data (HL)',
                ],
              },
              {
                name: 'Water Potential, Osmosis and Homeostasis',
                subtopics: [
                  'Water potential and osmotic gradients',
                  'Osmoregulation and the nephron (HL kidney detail)',
                  'Thermoregulation and blood glucose regulation',
                  'Negative feedback principles',
                ],
              },
              {
                name: 'Reproduction',
                subtopics: [
                  'Sexual and asexual reproduction; fertilisation and early development',
                  'The menstrual cycle: hormonal control and feedback (HL)',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ib-economics',
    name: 'IB Economics',
    fullName: 'IB Diploma — Economics (HL)',
    aliases: ['ib economics hl', 'ib dp economics'],
    region: 'Global',
    category: 'IB Diploma subject',
    popularity: 65,
    syllabusVerified: '2026-10-20',
    website: 'https://www.ibo.org',
    overview: {
      conductor: 'International Baccalaureate Organization',
      level: 'Diploma Programme → university admission',
      stages: ['Four units with HL extensions throughout; real-world examples are assessed in every paper'],
      papers: ['Paper 1 — extended response (essay)', 'Paper 2 — data response', 'Paper 3 — HL-only quantitative and policy paper', 'Internal assessment — three news-based commentaries'],
      duration: 'P1 1 h 15 + P2 1 h 45 + P3 1 h 45 (HL) + IA commentaries',
      marking: '1-7 scale; ≈80% exam + 20% IA',
      questionTypes: ['Extended written responses (essays)', 'Data-response questions', 'Quantitative and policy questions (HL Paper 3)'],
      notes:
        '2020 syllabus (first assessment 2022). SL skips Paper 3; HL-only content is flagged in the subtopics below.',
    },
    sources: [
      { title: 'Economics — IB Diploma Programme guide', url: 'https://www.ibo.org/programmes/diploma-programme/curriculum/', host: 'ibo.org' },
    ],
    subjects: [
      {
        name: 'Economics',
        units: [
          {
            name: 'Unit 1: Introduction to Economics',
            topics: [
              {
                name: 'What Is Economics?',
                subtopics: [
                  'Scarcity, choice and opportunity cost',
                  'Economic agents and the factors of production',
                  'Decision-making at the margin',
                ],
              },
              {
                name: 'How Do Economists Approach the World?',
                subtopics: [
                  'The economic method: hypotheses, models and ceteris paribus',
                  'Positive and normative analysis',
                  'The production possibilities model and its assumptions',
                ],
              },
            ],
          },
          {
            name: 'Unit 2: Microeconomics',
            topics: [
              {
                name: 'Demand and Supply',
                subtopics: [
                  'Demand and supply curves; movements vs shifts',
                  'Market equilibrium and adjustment to disequilibrium',
                  'Linear demand and supply functions and solving for equilibrium (HL)',
                ],
              },
              {
                name: 'Competitive Markets: Elasticity and Efficiency',
                subtopics: [
                  'Price elasticity of demand: determinants, calculations and total revenue',
                  'Price elasticity of supply',
                  'Consumer surplus, producer surplus and community surplus',
                  'Allocative efficiency at competitive equilibrium',
                  'Income and cross-price elasticities of demand (HL)',
                ],
              },
              {
                name: 'Government Intervention',
                subtopics: [
                  'Indirect taxes: incidence and market effects (HL: calculations)',
                  'Subsidies: effects on prices, output and stakeholders (HL: calculations)',
                  'Price ceilings and price floors',
                  'Unintended consequences and government failure',
                ],
              },
              {
                name: 'Market Failure: Externalities, Public Goods and Common Access',
                subtopics: [
                  'Negative and positive externalities in production and consumption',
                  'Public goods and the free-rider problem',
                  'Common access resources and sustainability',
                  'Merit and demerit goods; information gaps',
                ],
              },
              {
                name: 'Asymmetric Information and Market Power (HL)',
                subtopics: [
                  'Asymmetric information between buyers and sellers (HL)',
                  'Abuse of monopoly power as market failure (HL)',
                  'Policy responses: regulation, corrective taxation and tradable permits',
                ],
              },
            ],
          },
          {
            name: 'Unit 3: Macroeconomics',
            topics: [
              {
                name: 'Measuring Economic Activity and AD-AS',
                subtopics: [
                  'GDP, GNI and real vs nominal measures',
                  'The circular flow of income and aggregate demand components',
                  'Short-run and long-run aggregate supply; Keynesian vs monetarist views',
                  'AD-AS analysis of demand-side and supply-side shocks',
                  'The Keynesian multiplier and its calculation (HL)',
                ],
              },
              {
                name: 'Variations in Economic Activity',
                subtopics: [
                  'The business cycle and economic growth',
                  'Unemployment: measurement, types and consequences',
                  'Inflation and deflation: measurement (CPI) and causes',
                  'Income inequality and poverty',
                ],
              },
              {
                name: 'Macroeconomic Policy',
                subtopics: [
                  'Fiscal policy: government spending, taxation, deficits and debt',
                  'Monetary policy: interest rates and the central bank',
                  'Supply-side policies: market-based and interventionist',
                  'Policy objectives, trade-offs and the Phillips curve',
                ],
              },
              {
                name: 'Exchange Rates and the Balance of Payments',
                subtopics: [
                  'Floating and fixed exchange rate systems',
                  'Determination of exchange rates by demand and supply',
                  'Consequences of exchange rate changes for trade and growth',
                  'Balance of payments: current account structure and imbalances',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: The Global Economy',
            topics: [
              {
                name: 'International Trade',
                subtopics: [
                  'Absolute and comparative advantage; gains from specialisation',
                  'Terms of trade and their determinants (HL)',
                  'The World Trade Organization and trade agreements',
                  'Limitations of the comparative advantage model',
                ],
              },
              {
                name: 'Trade Protection and Regional Integration',
                subtopics: [
                  'Tariffs and quotas: analysis and welfare effects',
                  'Arguments for and against trade protection',
                  'Economic integration: trade blocs, trade creation and diversion (HL detail)',
                ],
              },
              {
                name: 'Economic Development and Sustainability',
                subtopics: [
                  'Measuring development: GDP per capita, HDI and composite indicators',
                  'Barriers to economic development (HL)',
                  'Foreign aid and its evaluation (HL)',
                  'Sustainable development and the UN SDGs',
                ],
              },
              {
                name: 'Evaluating Economic Development',
                subtopics: [
                  'Market-based and interventionist development strategies',
                  'Evaluating growth and development outcomes',
                  'Real-world examples and case studies',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

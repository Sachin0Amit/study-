import type { CuratedExam } from './types'

/**
 * India — state common entrance tests (outside Maharashtra), curated official
 * syllabi.
 *
 * Sources read this pass:
 * - WBJEE-2026 Information Bulletin (West Bengal Joint Entrance Examinations
 *   Board, official publication on the wbjeeb.nic.in publication CDN) —
 *   downloaded and read in full, 63 pages. Appendix-9 "Syllabus for
 *   WBJEE-2026" lists the complete chapter-wise syllabus verbatim:
 *   Mathematics 22 chapters, Physics 24 chapters, Chemistry 37 chapters —
 *   every unit/topic/subtopic below is carved from that appendix, with the
 *   paper pattern (2.3), rank rules (2.2), schedule (2.1) and category-wise
 *   marking (3.x) confirmed from the bulletin body.
 * - KEA UGCET-2026 (Karnataka Examinations Authority) — the official
 *   Information Bulletin on cetonline.karnataka.gov.in (state portal): the
 *   exam pattern (each subject paper 60 marks, 60 OMR rows, 80 minutes, no
 *   negative marking; agriculture-quota merit 50% CET PCB + 50% practical;
 *   Kannada language test for eligible candidates) confirmed from the
 *   bulletin text; the subject syllabus is the full first-year and
 *   second-year PUC curriculum prescribed by the Department of Pre-University
 *   Education, Karnataka (NCERT-aligned), which KEA publishes as per-subject
 *   syllabus documents on the UGCET-2026 portal.
 *
 * Scope: KCET (UGCET) and WBJEE complete the state-CET family alongside
 * MHT-CET in india-engineering.ts. Both are PCM/PCB state entrances whose
 * syllabi sit on NCERT-aligned class 11-12 content, so every topic maps to
 * the unified library's physics/chemistry/mathematics masters chapters or
 * the Knowledge University biology lessons — zero library restructuring
 * needed. Medical/agriculture-stream add-ons (Kannada language test, farm
 * science practicals) are out of the library's teaching scope and excluded,
 * matching the exclusion notes in the other curated files.
 */

export const INDIA_STATE_CET_EXAMS: CuratedExam[] = [
  {
    id: 'wbjee',
    name: 'WBJEE',
    fullName: 'West Bengal Joint Entrance Examination (WBJEE)',
    aliases: [
      'wbjeeb',
      'west bengal joint entrance examination',
      'west bengal jee',
      'wb jee',
      'wbjee exam',
      'west bengal engineering entrance',
    ],
    region: 'India',
    category: 'State engineering & pharmacy entrance',
    popularity: 58,
    syllabusVerified: '2026-10-26',
    website: 'https://wbjeeb.nic.in',
    overview: {
      conductor: 'West Bengal Joint Entrance Examinations Board (WBJEEB)',
      level:
        'Class 11-12 → undergraduate admission to Engineering/Technology, Pharmacy and Architecture courses in West Bengal',
      stages: ['Single-day written examination — Paper-I and Paper-II on the same day'],
      papers: [
        'Paper-I Mathematics: 75 MCQs in 2 hours (11:00 a.m. - 1:00 p.m.) — 50 Category-1 (1 mark each), 15 Category-2 (2 marks each), 10 Category-3 (2 marks each) = 100 marks',
        'Paper-II Physics & Chemistry: 40 Physics + 40 Chemistry MCQs in 2 hours (2:00 p.m. - 4:00 p.m.) — per subject 30 Category-1 (1 mark), 5 Category-2 (2 marks), 5 Category-3 (2 marks) = 50 + 50 marks',
      ],
      duration: 'Paper-I 2 h · Paper-II 2 h (both papers on one day)',
      marking:
        '200 marks total (Mathematics 100, Physics 50, Chemistry 50). Category-1: one option correct, +1 / −¼. Category-2: one option correct, +2 / −½. Category-3: one or more options correct, +2 only when all correct and none incorrect (partial credit: 1 of 2 for two of three correct in a 3-correct question), no negative marking',
      negativeMarking:
        'Category-1: −¼ per wrong answer · Category-2: −½ per wrong answer · Category-3: no negative marking (but any marked incorrect option voids the question)',
      questionTypes: [
        'Multiple-choice questions with four options per question, OMR answer sheets',
        'Category-3 questions may have more than one correct option',
      ],
      notes:
        'Two merit lists from one sitting: the General Merit Rank (GMR) for engineering/technology/pharmacy/architecture and the Pharmacy Merit Rank (PMR) — candidates sitting only Paper-II are eligible for the PMR only, and Paper-I alone draws no rank. Tie-breaking walks through subject-wise negative marks and 2-mark question scores in bulletin-defined order. Counselling runs through the WBJEEB e-counselling (Kolkata centre-based option entry). For B.Arch, the NATA score is used alongside. The syllabus below is the official Appendix-9 chapter list of the WBJEE-2026 bulletin, read in full.',
    },
    sources: [
      {
        title: 'WBJEEB — Information Bulletin WBJEE-2026 (official; Appendix-9 syllabus pp. 39-54)',
        url: 'https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf',
        host: 'cdnbbsr.s3waas.gov.in',
      },
      {
        title: 'West Bengal Joint Entrance Examinations Board — official portal',
        url: 'https://wbjeeb.nic.in',
        host: 'wbjeeb.nic.in',
      },
    ],
    subjects: [
      {
        name: 'Mathematics',
        mappedSubjectId: 'mathematics',
        weightage: 50,
        units: [
          {
            name: 'Algebra',
            topics: [
              {
                name: 'Progressions and series: AP, GP, HP',
                subtopics: [
                  'Definitions of A.P., G.P. and H.P., general term',
                  'Summation of first n terms of series Σn, Σn², Σn³',
                  'Arithmetic and geometric series, A.M., G.M. and their relation',
                  'Infinite G.P. series and its sum',
                ],
              },
              {
                name: 'Logarithms',
                subtopics: ['Definition and general properties', 'Change of base'],
              },
              {
                name: 'Complex numbers',
                subtopics: [
                  'Ordered-pair definition and representation in the Argand plane',
                  'Complex conjugate, triangle inequality, amplitude and its properties',
                  'Square root of complex numbers; cube roots of unity and applications',
                  "De Moivre's theorem (statement only) and elementary applications",
                  'Solution of quadratic equations in the complex number system',
                ],
              },
              {
                name: 'Quadratic and polynomial equations',
                subtopics: [
                  'Polynomials with real coefficients, fundamental theorem of algebra',
                  'Relations between roots and coefficients, nature of roots',
                  'Formation of a quadratic equation',
                  'Sign and magnitude of the quadratic expression ax² + bx + c',
                ],
              },
              {
                name: 'Permutation and combination',
                subtopics: [
                  'Permutations of n different things taken r at a time; repeated and not-all-different cases',
                  'Combinations of n different things taken r at a time; not-all-different cases',
                  'Problems involving both permutations and combinations',
                ],
              },
              {
                name: 'Principle of mathematical induction',
                subtopics: [
                  'Statement of the principle; proofs for the sums of squares and cubes of first n natural numbers',
                  'Divisibility statements such as 2²ⁿ − 1 divisible by 3 and 7 | 3²ⁿ⁺¹ + 2ⁿ⁺²',
                ],
              },
              {
                name: 'Binomial theorem (positive integral index)',
                subtopics: [
                  'Statement of the theorem, general term, middle term, equidistant terms',
                  'Properties of binomial coefficients and applications',
                ],
              },
              {
                name: 'Matrices and determinants',
                subtopics: [
                  'Real matrices up to 3 × 3: addition, scalar multiplication, multiplication, transpose',
                  'Determinants and their properties; minors, cofactors, adjoint',
                  'Non-singular matrices and the inverse of a matrix',
                  'Solving linear systems in at most three variables; area of a triangle by determinants',
                ],
              },
              {
                name: 'Sets, relations and mappings',
                subtopics: [
                  'Subsets, power set, complement, union, intersection, difference, symmetric difference',
                  'Venn diagrams, De Morgan laws, inclusion-exclusion for at most three sets, cartesian product',
                  'Equivalence relations; domain, range, injective/surjective/bijective mappings',
                  'Composition and inverse of mappings',
                ],
              },
              {
                name: 'Statistics and probability',
                subtopics: [
                  'Measures of dispersion, mean, variance and standard deviation, frequency distributions',
                  'Addition and multiplication rules; conditional probability and Bayes theorem',
                  'Independence of events, repeated independent trials and the binomial distribution',
                ],
              },
            ],
          },
          {
            name: 'Trigonometry',
            topics: [
              {
                name: 'Trigonometric functions and equations',
                subtopics: [
                  'Compound angles; addition and subtraction formulae',
                  'Multiple and submultiple angle formulae',
                  'General solution of trigonometric equations',
                  'Inverse trigonometric functions and their properties',
                ],
              },
            ],
          },
          {
            name: 'Coordinate geometry',
            topics: [
              {
                name: 'Two-dimensional coordinates and straight lines',
                subtopics: [
                  'Distance and section formulae, area of a triangle, collinearity condition',
                  'Polar coordinates and conversion; parallel transformation of axes; locus problems',
                  'Slope, equations of straight lines in different forms, angle between two lines',
                  'Perpendicularity and parallelism; distance of a point from a line; distance between parallel lines',
                  'Lines through the intersection of two lines; angle bisectors of two lines',
                ],
              },
              {
                name: 'Circle and its equations',
                subtopics: [
                  'Circle equations from centre-radius and diameter endpoints; parametric equations',
                  'Tangents, normals and chords; line-circle intersection; common chords and common tangents',
                ],
              },
              {
                name: 'Conic sections',
                subtopics: [
                  'Conic definitions: focus, directrix, eccentricity and the eccentricity classification',
                  'Parabola, ellipse and hyperbola in standard form with foci, directrices and parametric forms',
                ],
              },
              {
                name: 'Three-dimensional geometry',
                subtopics: [
                  'Direction cosines and direction ratios; distance and section formulae in space',
                  'Equations of straight lines and planes; distance of a point from a plane or line',
                  'Angle between two lines; shortest distance between skew lines',
                ],
              },
            ],
          },
          {
            name: 'Calculus',
            topics: [
              {
                name: 'Differential calculus',
                subtopics: [
                  'Functions: domain, range, composition, inverses and basic properties',
                  'Limits, continuity, differentiability and the derivative',
                  'Chain rule and derivatives in various forms; differentials; second-order derivatives',
                ],
              },
              {
                name: "Rolle's theorem and mean value theorems",
                subtopics: [
                  "Rolle's theorem and Lagrange's mean value theorem (statements, geometry, elementary applications)",
                  "L'Hospital's rule (statement) and its applications",
                ],
              },
              {
                name: 'Integral calculus',
                subtopics: [
                  'Indefinite integrals of standard functions; integration by parts, substitution and partial fractions',
                  'Definite integral as the limit of a sum with equal subdivisions',
                  'Fundamental theorem of integral calculus and properties of definite integrals',
                ],
              },
              {
                name: 'Differential equations',
                subtopics: [
                  'Formation of ordinary differential equations; order and degree',
                  'Solving homogeneous equations, separation of variables, linear first-order equations',
                ],
              },
              {
                name: 'Applications of derivatives and integrals',
                subtopics: [
                  'Rate of change, monotonicity, maxima and minima; tangents and normals, conditions of tangency',
                  'Rectilinear motion with constant acceleration',
                  'Area bounded by elementary curves and straight lines; area between two curves',
                ],
              },
            ],
          },
          {
            name: 'Vectors',
            topics: [
              {
                name: 'Vector algebra and products',
                subtopics: [
                  'Addition of vectors and scalar multiplication',
                  'Dot and cross products; scalar triple product',
                  'Geometric interpretations and applications of the products',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Physics',
        mappedSubjectId: 'physics',
        weightage: 25,
        units: [
          {
            name: 'Mechanics',
            topics: [
              {
                name: 'Physical world, units, dimensions and measurement',
                subtopics: [
                  'Fundamental and derived units; dimensions of physical quantities and dimensional analysis',
                  'Accuracy, precision, errors, rounding off, order of magnitude and significant figures',
                ],
              },
              {
                name: 'Motion in one and two dimensions',
                subtopics: [
                  'Inertial and non-inertial frames; position-time and velocity-time graphs',
                  'Uniformly accelerated motion with graphical and calculus treatments',
                  'Vectors in 3D: dot and cross products, resolution in rectangular and non-rectangular components',
                  'Relative velocity; projectile motion and the inclined plane',
                ],
              },
              {
                name: 'Laws of motion',
                subtopics: [
                  'Force, inertia, impulse; conservation of linear momentum with applications',
                  'Free-body diagrams and equilibrium of concurrent forces',
                  'Static, kinetic and rolling friction; dynamics of uniform circular motion and banking of roads',
                ],
              },
              {
                name: 'Work, power and energy',
                subtopics: [
                  'Work-energy theorem for constant and variable forces',
                  'Kinetic and potential energy; conservation of mechanical energy; conservative and non-conservative forces',
                  'Spring potential energy; motion in a vertical circle; elastic and inelastic collisions in one and two dimensions',
                ],
              },
              {
                name: 'Systems of particles and rigid-body rotation',
                subtopics: [
                  'Centre of mass of two-particle systems and connected bodies; torque and angular momentum',
                  'Conservation of angular momentum; equilibrium of rigid bodies',
                  'Moments of inertia and radius of gyration of simple geometric bodies (without derivation)',
                  'Parallel and perpendicular axis theorems with applications',
                ],
              },
            ],
          },
          {
            name: 'Gravitation and properties of matter',
            topics: [
              {
                name: 'Gravitation',
                subtopics: [
                  "Universal law of gravitation; acceleration due to gravity and its variation",
                  "Kepler's laws and applications; gravitational potential and potential energy",
                  'Escape velocity; orbital velocity and time period of satellites; geostationary satellites',
                ],
              },
              {
                name: 'Elasticity and fluid mechanics',
                subtopics: [
                  "Hooke's law; Young's, bulk and shear moduli; compressibility; Poisson's ratio",
                  'Elastic potential energy of stretched strings and springs',
                  "Fluid pressure, buoyancy and Pascal's law; effect of gravity on fluid pressure",
                  'Surface tension: surface energy, excess pressure in drops and bubbles, angle of contact, capillary rise',
                ],
              },
              {
                name: 'Viscosity and fluid flow',
                subtopics: [
                  'Coefficient of viscosity; streamline and turbulent motion, Reynolds number',
                  "Stokes' law and terminal velocity",
                  "Bernoulli's theorem and its applications",
                ],
              },
            ],
          },
          {
            name: 'Heat and thermodynamics',
            topics: [
              {
                name: 'Thermal physics and calorimetry',
                subtopics: [
                  'Thermal expansion of solids, liquids and gases; anomalous expansion of water',
                  'Specific heat capacity; change of state and latent heat',
                  'Conduction, convection and radiation; heat conduction through slabs in series and parallel, equivalent thermal conductance',
                  "Black-body radiation, Kirchhoff's law, Newton's law of cooling, Wien's displacement law, Stefan's law with Boltzmann's correction",
                ],
              },
              {
                name: 'Thermodynamics',
                subtopics: [
                  'Zeroth law and thermal equilibrium; heat, external work and internal energy',
                  'First law; Cp and Cv and the relation between them; isothermal and adiabatic processes with P-V diagrams',
                  'Second law; reversible and irreversible processes; Carnot engine efficiency; refrigerator efficiency (qualitative)',
                ],
              },
              {
                name: 'Kinetic theory of gases',
                subtopics: [
                  'Equation of state of a perfect gas; assumptions of kinetic theory',
                  'Pressure and temperature from the molecular viewpoint; rms speed',
                  'Degrees of freedom, law of equipartition of energy and specific heats of gases',
                  'Mean free path; Avogadro number',
                ],
              },
            ],
          },
          {
            name: 'Oscillations and waves',
            topics: [
              {
                name: 'Simple harmonic motion',
                subtopics: [
                  'Periodic motion: time period, frequency, displacement-time equation and phase',
                  'SHM systems: restoring force and force constant; simple pendulum, loaded spring, liquid U-tubes, floating bodies, vertical SHM',
                  'Kinetic and potential energy in SHM; free, forced and damped oscillations; resonance (introductory)',
                ],
              },
              {
                name: 'Wave motion and sound',
                subtopics: [
                  'Progressive wave equation; longitudinal and transverse waves; sound waves',
                  "Newton's formula and Laplace's correction; factors affecting the velocity of sound",
                  'Superposition and reflection; standing waves in strings and organ pipes; harmonics and overtones',
                  'Beats; Doppler effect of sound',
                ],
              },
            ],
          },
          {
            name: 'Electricity and magnetism',
            topics: [
              {
                name: 'Electrostatics',
                subtopics: [
                  'Conservation of charge; Coulomb law and superposition for multiple and continuous charge distributions',
                  'Electric field and field lines; dipole fields on the axis, perpendicular bisector and general point; dipole torque',
                  "Electric flux; Gauss's theorem for an infinite wire, infinite plane sheet and thin spherical shell",
                  'Potential and field-potential relation; potential of point charges and dipoles; equipotential surfaces; potential energy of systems',
                  'Conductors, insulators, dielectrics and polarisation; capacitors in series and parallel; parallel-plate and spherical capacitors with and without dielectrics; energy stored',
                ],
              },
              {
                name: 'Current electricity',
                subtopics: [
                  'Drift velocity and mobility; Ohm law, resistivity and conductivity; V-I characteristics and temperature dependence',
                  'Series, parallel and mixed grouping of resistances and cells (including unequal emfs)',
                  "Kirchhoff's laws and simple applications; Wheatstone bridge and metre bridge principles",
                  'Potentiometer: comparing emfs and measuring internal resistance',
                ],
              },
              {
                name: 'Magnetic effects of current and magnetism',
                subtopics: [
                  "Oersted's discovery; Biot-Savart law for a circular loop; Ampere's law for straight wires and toroidal solenoids",
                  'Force on a moving charge in magnetic and electric fields; cyclotron frequency',
                  'Force on current-carrying conductors; force between parallel wires and the definition of the ampere',
                  'Moving-coil galvanometer, current sensitivity and ammeter/voltmeter conversion',
                  'Current loop and revolving electron as magnetic dipoles; bar-magnet field; earth magnetic elements',
                  'Permeability, susceptibility, retentivity, coercivity; B-H hysteresis loop; para-, dia- and ferromagnetism',
                ],
              },
              {
                name: 'Electromagnetic induction and alternating current',
                subtopics: [
                  "Magnetic flux; Faraday's laws, Lenz's law and eddy currents",
                  'Self and mutual inductance of solenoids',
                  'Peak and rms values; reactance and impedance; phasor diagrams for R, L and C circuits',
                  'LR, CR and series LCR circuits; resonance; LC oscillator (qualitative)',
                  'Power and power factor; wattless current; AC generator and transformer',
                ],
              },
            ],
          },
          {
            name: 'Electromagnetic waves and optics',
            topics: [
              {
                name: 'Electromagnetic waves',
                subtopics: [
                  'Displacement current (basic idea); characteristics and transverse nature of EM waves',
                  'The electromagnetic spectrum and applications across its bands',
                ],
              },
              {
                name: 'Ray optics and optical instruments',
                subtopics: [
                  'Reflection at spherical mirrors and the mirror formula',
                  'Refraction, total internal reflection and optical fibres; refraction at spherical surfaces',
                  "Thin-lens formula and lens-maker's formula; Newton's relation and the displacement (conjugate-points) method",
                  'Lens combinations and lens-mirror systems; power of a lens; prism refraction and dispersion',
                  'The eye: accommodation and correction of myopia and hypermetropia; microscopes and astronomical (reflecting and refracting) telescopes with magnifying powers',
                ],
              },
              {
                name: 'Wave optics',
                subtopics: [
                  "Wavefronts and Huygens' principle applied to reflection and refraction at plane surfaces",
                  "Young's double-slit interference; coherence; maxima and minima by path and phase difference; fringe width",
                  "Fraunhofer single-slit diffraction and the width of the central maximum; resolving power of microscope and telescope",
                  "Polarisation, plane-polarised light, Brewster's law and polaroids; scattering and the blue of the sky (Raman effect, elementary)",
                ],
              },
              {
                name: 'Particle nature of light and matter waves',
                subtopics: [
                  'Photoelectric effect: Hertz and Lenard observations, Einstein photoelectric equation',
                  'Matter waves: the de Broglie relation and simple applications',
                ],
              },
            ],
          },
          {
            name: 'Modern physics and solid-state electronics',
            topics: [
              {
                name: 'Atomic physics: Bohr model, hydrogen spectrum and X-rays',
                subtopics: [
                  "Alpha-particle scattering and Rutherford's nuclear model",
                  'Bohr model of hydrogen; energy levels and the hydrogen spectrum',
                  'Continuous and characteristic X-rays; Moseley law',
                ],
              },
              {
                name: 'Nuclear physics',
                subtopics: [
                  'Nuclear composition and size; isotopes, isobars, isotones; atomic masses',
                  'Alpha, beta and gamma decay and the radioactive decay law',
                  'Mass-energy relation and mass defect; binding energy per nucleon against mass number',
                  'Chain reaction, nuclear fission and fusion',
                ],
              },
              {
                name: 'Solid-state electronics and devices',
                subtopics: [
                  'Band theory of solids (qualitative); conductors, insulators and semiconductors',
                  'Intrinsic and extrinsic semiconductors with band diagrams',
                  'p-n junction diode: I-V characteristics in forward and reverse bias; rectifier action',
                  'LED, photodiode and solar cell construction and I-V characteristics',
                  'Zener diode as a voltage regulator',
                  'BJT action and characteristics; CE amplifier and oscillator; logic gates OR, AND, NOT, NAND, NOR and simple combinations',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Chemistry',
        mappedSubjectId: 'chemistry',
        weightage: 25,
        units: [
          {
            name: 'Physical chemistry',
            topics: [
              {
                name: 'Some basic concepts of chemistry',
                subtopics: [
                  'Laws of chemical combination; elements, atoms and molecules',
                  'Atomic and molecular masses; mole concept and molar mass; percentage composition',
                  'Empirical and molecular formulae; stoichiometry and calculations on reactions',
                  'Concentration terms of solutions and related calculations',
                ],
              },
              {
                name: 'Structure of an atom',
                subtopics: [
                  "Bohr model and its limitations; shells and sub-shells; dual nature of matter and light",
                  "de Broglie relationship; Heisenberg uncertainty principle; Schrödinger wave equation (elementary idea)",
                  'Orbitals, quantum numbers and shapes of s, p and d orbitals',
                  'Aufbau principle, Pauli exclusion principle and Hund rule; exchange energy; electronic configurations and the stability of half-filled and fully filled orbitals',
                ],
              },
              {
                name: 'Classification of elements and periodicity',
                subtopics: [
                  'Modern periodic law and the present form of the periodic table',
                  'Trends in atomic and ionic radii, van der Waals radii, ionisation enthalpy, electron gain enthalpy, electronegativity and valency',
                  'Nomenclature of elements with atomic number greater than 100',
                ],
              },
              {
                name: 'Chemical bonding and molecular structure',
                subtopics: [
                  'Ionic and covalent bonds; bond parameters; Lewis structures; formal charge; polarity',
                  'Valence bond theory, resonance, VSEPR geometry and hybridisation involving s, p and d orbitals',
                  'Intermolecular interactions: dipolar interactions, London dispersion forces, van der Waals interactions',
                  'Intra- and intermolecular hydrogen bonding',
                  'Molecular orbital theory of homonuclear diatomic molecules H₂, He₂, O₂, N₂, F₂ (qualitative)',
                ],
              },
              {
                name: 'States of matter: solids and gases',
                subtopics: [
                  'Classification of solids: molecular, ionic, covalent, metallic; amorphous and crystalline solids',
                  'Unit cells in two- and three-dimensional lattices; packing efficiency and packing in solids; voids; atoms per unit cell; density of the unit cell; point defects',
                  'Kinetic theory of gases; molecular speeds; Dalton law of partial pressures; Graham law',
                  "Deviation from ideal behaviour and the van der Waals equation; liquefaction of gases and critical parameters",
                ],
              },
              {
                name: 'Chemical thermodynamics',
                subtopics: [
                  'System and surroundings; work, heat, energy; extensive and intensive properties; state functions; zeroth law',
                  'First law: internal energy change ΔU and enthalpy change ΔH; enthalpies of bond dissociation, combustion, formation, atomisation, ionisation, solution and sublimation',
                  "Hess law of constant heat summation; Born-Haber cycle and its applications",
                  'Second law: entropy as a state function; Gibbs free energy and the criteria for spontaneous, non-spontaneous and equilibrium processes',
                ],
              },
              {
                name: 'Equilibrium',
                subtopics: [
                  'Physical and chemical equilibrium; dynamic nature; law of mass action and the equilibrium constant',
                  "Factors affecting equilibrium — Le Chatelier's principle",
                  'Ionic equilibrium: ionisation of acids and bases, strong and weak electrolytes, degree of ionisation of polybasic acids, acid strength',
                  'pH and the Henderson equation; hydrolysis of salts (elementary); buffer solutions and buffer action',
                  'Solubility product and the common ion effect with illustrative examples',
                ],
              },
              {
                name: 'Solutions',
                subtopics: [
                  'Solubility of gases in liquids; solid solutions; vapour pressure and Raoult law',
                  'Colligative properties: relative lowering of vapour pressure, boiling-point elevation, freezing-point depression, osmotic pressure',
                  'Determination of molecular mass from colligative properties; abnormal molecular mass and the van Hoff factor',
                  'True solutions, colloidal solutions and suspensions',
                ],
              },
              {
                name: 'Chemical kinetics',
                subtopics: [
                  'Average and instantaneous rates; effects of concentration, temperature and catalysts',
                  'Order and molecularity; rate law and specific rate constant',
                  'Integrated rate equations and half-life for zero- and first-order reactions',
                  'Arrhenius equation and activation energy; collision theory (elementary)',
                  'Homogeneous, heterogeneous and enzyme catalysis',
                ],
              },
              {
                name: 'Redox reactions and oxidation numbers',
                subtopics: [
                  'Oxidation, reduction, oxidation number',
                  'Balancing redox reactions by electron loss/gain and oxidation-number change',
                  'Applications in permanganometry and dichromatometry',
                ],
              },
              {
                name: 'Electrochemistry',
                subtopics: [
                  'Conductance in electrolytic solutions; specific and molar conductivity and their concentration dependence; Kohlrausch law',
                  'Electrolysis and the laws of electrolysis (elementary); dry cell, electrolytic and galvanic cells',
                  'emf, standard electrode potentials and the Nernst equation applied to chemical cells',
                  'Relation between Gibbs free energy change and cell emf; fuel cells; lithium-ion battery',
                ],
              },
            ],
          },
          {
            name: 'Organic chemistry',
            topics: [
              {
                name: 'Basic principles of organic chemistry',
                subtopics: [
                  'Classification and IUPAC nomenclature of organic compounds',
                  'Electronic displacements: inductive effect, resonance and hyperconjugation',
                  'Homolytic and heterolytic fission: free radicals, carbocations and carbanions; electrophiles and nucleophiles',
                  'Elementary ideas of addition, elimination and substitution reactions',
                ],
              },
              {
                name: 'Hydrocarbons',
                subtopics: [
                  'Alkanes: nomenclature, isomerism, ethane conformations, physical properties up to C6, halogenation with free-radical mechanism, combustion, pyrolysis',
                  'Alkenes: double-bond structure, geometrical isomerism, preparations; addition of hydrogen, halogens, water and hydrogen halides with Markovnikov and peroxide effects; ozonolysis and oxidation; electrophilic addition mechanism',
                  'Alkynes: triple-bond structure, preparations and additions of hydrogen, halogens, hydrogen halides and water',
                  "Aromatic hydrocarbons: benzene resonance, Huckel rule and aromaticity; electrophilic substitution — nitration, sulphonation, halogenation, Friedel-Crafts alkylation and acylation",
                ],
              },
              {
                name: 'Haloalkanes and haloarenes',
                subtopics: [
                  'Nomenclature, nature of the C-X bond, physical and chemical properties; substitution mechanisms and carbocation stability',
                  'R/S and D/L configurations',
                  'Uses and environmental effects of dichloromethane, trichloromethane, tetrachloromethane, iodoform and freons',
                  'Haloarenes: C-X bond nature, directive influence of halogen in monosubstituted compounds; DDT uses and environmental effects',
                ],
              },
              {
                name: 'Alcohols, phenols and ethers',
                subtopics: [
                  'Alcohols: nomenclature, preparation, physical and chemical properties of primary alcohols; identification of primary, secondary and tertiary alcohols; dehydration mechanism; methanol and ethanol uses',
                  'Phenols: nomenclature, preparation, properties, acidic nature, electrophilic substitution and uses',
                  'Ethers: nomenclature, preparation, properties and uses',
                ],
              },
              {
                name: 'Aldehydes, ketones and carboxylic acids',
                subtopics: [
                  'Nature of the carbonyl group; preparation and properties of aldehydes and ketones',
                  'Mechanism of nucleophilic addition; reactivity of alpha hydrogen',
                  'Carboxylic acids: nomenclature, acidic nature, preparation, properties and uses',
                ],
              },
              {
                name: 'Amines and diazonium salts',
                subtopics: [
                  'Nitro compounds: general preparation and reduction reactions',
                  'Amines: nomenclature, classification, structure, preparation, properties and uses; identification of primary, secondary and tertiary amines',
                  'Cyanides and isocyanides: nomenclature, structure, preparation; hydrolysis and reduction reactions',
                  'Diazonium salts: preparation, chemical reactions and importance in synthetic organic chemistry',
                ],
              },
              {
                name: 'Biomolecules',
                subtopics: [
                  'Carbohydrates: aldoses and ketoses; glucose and fructose; D/L configuration; sucrose; starch and cellulose',
                  'Proteins: alpha-amino acids, zwitterionic structures, peptide bonds and polypeptides; primary structure; denaturation; enzymes',
                  'Nucleic acids: DNA and RNA (introduction and basic concepts)',
                ],
              },
              {
                name: 'Polymers',
                subtopics: [
                  'Natural and synthetic polymers; addition and condensation polymerisation; copolymerisation',
                  'Important polymers: polythene, nylon, polyesters, Bakelite, rubber',
                  'Biodegradable and non-biodegradable polymers',
                ],
              },
            ],
          },
          {
            name: 'Inorganic chemistry',
            topics: [
              {
                name: 's-Block elements and hydrogen peroxide',
                subtopics: [
                  'Group 1 and Group 2 electronic configurations, occurrence and property trends',
                  'Reactivity trends with oxygen, water, hydrogen and halogens; ionic, covalent and interstitial hydrides',
                  'Hydrogen peroxide: preparation, properties, structure and uses; hydrogen as a fuel',
                  'Biological importance of sodium, potassium, magnesium and calcium',
                ],
              },
              {
                name: 'p-Block elements',
                subtopics: [
                  'General p-block introduction: configurations, occurrence, oxidation states and reactivity trends',
                  'Group 13: boron oxides, boric acid, borates, diborane and inorganic graphite; aluminium reactions with acid and alkali; LiAlH₄ and Al₂O₃',
                  'Group 14: catenation, allotropes, nano-carbon and graphene; CO and CO₂; silicon tetrachloride, silicate chains (SiO₃)ₙ²⁻ and zeolites',
                  'Group 15: structure and reactions of NH₃, HNO₃, NCl₃ and nitrogen oxides; phosphorus allotropes, phosphine, phosphorus halides and oxoacids',
                  'Group 16: classification of oxides; ozone; sulphur allotropes and oxoacids',
                  'Group 17 and 18: halogen oxides, oxoacids, interhalogens, pseudohalogens and polyhalides; noble-gas compounds XeF₂, XeF₄, XeF₆, XeOF₂, XeO₂, XeO₃',
                ],
              },
              {
                name: 'd- and f-block elements',
                subtopics: [
                  'Transition-metal characteristics; ionic radii, ionisation enthalpy, oxidation states, colour, catalytic and magnetic properties of the first row',
                  'Preparation and properties of K₂Cr₂O₇ and KMnO₄',
                  'Lanthanoids: configurations, oxidation states, reactivity, lanthanoid contraction and its consequences',
                  'Actinoids: configurations, oxidation states and comparison with the lanthanoids',
                ],
              },
              {
                name: 'Coordination compounds',
                subtopics: [
                  'Ligands classified by denticity and field strength; coordination number; colour and magnetic properties',
                  'IUPAC nomenclature of mononuclear coordination compounds; EAN rule',
                  "Bonding: Werner's theory, valence bond theory and crystal field theory; CFSE",
                  'Structural and stereo-isomerism; importance in qualitative analysis, metal extraction and biological systems',
                ],
              },
            ],
          },
          {
            name: 'Environmental and analytical chemistry',
            topics: [
              {
                name: 'Pollution of air, water and soil; green chemistry',
                subtopics: [
                  'Air, water and soil pollution: causes and effects; primary and secondary pollutants',
                  'Chemical reactions in the atmosphere; smog; industrial waste pollution; solid-waste management (elementary)',
                  'SPM and RSPM; green chemistry as a pollution-reduction strategy; water preservation and protection; pollution-control strategy',
                ],
              },
              {
                name: 'Qualitative and quantitative analysis',
                subtopics: [
                  'Detection of nitrogen, sulphur and halogens in organic compounds by the Lassaigne test',
                  'Functional-group identification: primary aromatic amine, aldehyde, ketone, carboxylic acid and unsaturation',
                  'Calculations based on acid-base and redox titrations (dichromatometry and permanganometry)',
                  'Dry and wet tests for water-soluble non-interfering radicals: Cl⁻, S²⁻, SO₄²⁻, NO₂⁻, NO₃⁻, CO₃²⁻ and Cu²⁺, Al³⁺, Fe²⁺, Fe³⁺, Zn²⁺, Ca²⁺, Mg²⁺, Na⁺, NH₄⁺',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'kcet',
    name: 'KCET',
    fullName: 'Karnataka Common Entrance Test (UGCET)',
    aliases: [
      'kcet',
      'karnataka cet',
      'karnataka common entrance test',
      'ugcet',
      'karnataka ugcet',
      'kea cet',
      'kcet exam',
      'karnataka engineering entrance',
    ],
    region: 'India',
    category: 'State engineering, agriculture & pharmacy entrance',
    popularity: 66,
    syllabusVerified: '2026-10-26',
    website: 'https://cetonline.karnataka.gov.in/kea/ugcet2026',
    overview: {
      conductor: 'Karnataka Examinations Authority (KEA), Government of Karnataka',
      level:
        'First- and second-year PUC (Class 11-12) → undergraduate admission to Engineering/Technology, B.Pharm, farm-science and other professional courses in Karnataka',
      stages: [
        'Application and document verification',
        'Four OMR subject sessions held across two days',
        'Option entry and seat allocation in KEA counselling rounds',
      ],
      papers: [
        'Physics: 60 MCQs, 60 marks, 80 minutes',
        'Chemistry: 60 MCQs, 60 marks, 80 minutes',
        'Mathematics: 60 MCQs, 60 marks, 80 minutes (PCM group)',
        'Biology: 60 MCQs, 60 marks, 80 minutes (medical / agriculture / pharmacy groups sit Biology instead of or alongside Mathematics)',
      ],
      duration: 'Four 80-minute subject sessions across two days',
      marking:
        'One mark per question, 60 marks per subject, maximum 180 marks; the candidate takes three subject papers per their stream',
      negativeMarking: 'None — no negative marking',
      questionTypes: ['Multiple-choice questions with four options, OMR answer sheets'],
      notes:
        'The syllabus is the ENTIRE first-year and second-year PUC curriculum prescribed by the Department of Pre-University Education, Karnataka (NCERT-aligned), which KEA publishes as per-subject syllabus documents on the UGCET portal. Engineering-seat merit uses the PCM total; B.Arch additionally requires the NATA score; B.Sc. farm-science (agriculture quota) merit combines 50% CET marks (Physics, Chemistry, Biology) with 50% of the practical-examination marks; the Kannada language test on the eve of the exam is qualifying-only for eligible (horanadu and gadinaru Kannadiga) candidates. KCET marks carry no negative penalty, so exhaustive coverage of the PUC chapter list below is the scoring strategy.',
    },
    sources: [
      {
        title: 'KEA — UGCET-2026 Information Bulletin (official; exam pattern, subject papers and merit rules)',
        url: 'https://cetonline.karnataka.gov.in/keawebentry456/ugcet2026/information_bulletin_1_ugcet_2026_17012026english.pdf',
        host: 'cetonline.karnataka.gov.in',
      },
      {
        title: 'KEA — UGCET-2026 portal (subject syllabus documents and notifications)',
        url: 'https://cetonline.karnataka.gov.in/kea/ugcet2026',
        host: 'cetonline.karnataka.gov.in',
      },
    ],
    subjects: [
      {
        name: 'Physics',
        mappedSubjectId: 'physics',
        weightage: 33,
        units: [
          {
            name: 'First-year PUC',
            topics: [
              {
                name: 'Physical world, units and measurement',
                subtopics: [
                  'Scope and excitement of physics',
                  'SI fundamental and derived units; dimensional analysis and applications',
                  'Accuracy and precision; errors and significant figures',
                ],
              },
              {
                name: 'Motion in a straight line and in a plane',
                subtopics: [
                  'Position, displacement, velocity and acceleration; uniformly accelerated motion and graphs',
                  'Scalars and vectors; resolution, dot and cross products',
                  'Projectile motion; uniform circular motion; relative velocity',
                ],
              },
              {
                name: 'Laws of motion',
                subtopics: [
                  "Newton's three laws; impulse and conservation of linear momentum",
                  'Free-body diagrams; equilibrium of concurrent forces',
                  'Static, kinetic and rolling friction; dynamics of circular motion; banking of roads',
                ],
              },
              {
                name: 'Work, energy and power',
                subtopics: [
                  'Work-energy theorem; kinetic and potential energy',
                  'Conservative forces and conservation of mechanical energy; spring potential energy',
                  'Elastic and inelastic collisions; power',
                ],
              },
              {
                name: 'System of particles and rotational motion',
                subtopics: [
                  'Centre of mass; motion of connected systems; torque and angular momentum',
                  'Conservation of angular momentum',
                  'Moment of inertia and radius of gyration; parallel and perpendicular axis theorems; rolling motion',
                ],
              },
              {
                name: 'Gravitation',
                subtopics: [
                  'Universal law of gravitation; acceleration due to gravity and its variation with altitude and depth',
                  "Kepler's laws",
                  'Escape and orbital velocities; time period and energy of satellites; geostationary orbits',
                ],
              },
              {
                name: 'Mechanical properties of solids: stress, strain and elastic moduli',
                subtopics: [
                  "Stress-strain and Hooke's law; Young's, bulk and shear moduli; Poisson's ratio; elastic energy",
                ],
              },
              {
                name: 'Mechanical properties of fluids',
                subtopics: [
                  'Fluid pressure; Pascal law and buoyancy (Archimedes principle)',
                  "Viscosity, Stokes' law and terminal velocity; Reynolds number; Bernoulli's theorem",
                  'Surface tension, surface energy, angle of contact and capillary rise',
                ],
              },
              {
                name: 'Thermal properties and thermodynamics',
                subtopics: [
                  'Temperature scales; thermal expansion of solids, liquids and gases; anomalous expansion of water',
                  'Calorimetry: specific heat, latent heat, change of state',
                  'Heat transfer: conduction, convection and radiation; thermal conductivity',
                  'Zeroth and first laws; internal energy, Cp and Cv; isothermal and adiabatic processes',
                  'Second law; reversible and irreversible processes; Carnot engine and efficiency',
                ],
              },
              {
                name: 'Kinetic theory of gases',
                subtopics: [
                  'Ideal-gas equation and assumptions of kinetic theory',
                  'Pressure of an ideal gas; rms, average and most-probable speeds',
                  'Degrees of freedom and law of equipartition of energy; specific heats; mean free path',
                ],
              },
              {
                name: 'Oscillations',
                subtopics: [
                  'SHM equation, phase and energy (kinetic and potential)',
                  'Simple pendulum, loaded spring, liquid in U-tube; free, forced and damped oscillations; resonance',
                ],
              },
              {
                name: 'Waves',
                subtopics: [
                  'Progressive waves; transverse and longitudinal waves; speed of sound (Newton-Laplace)',
                  'Principle of superposition; reflection of waves; stationary waves in strings and pipes; harmonics and overtones',
                  'Beats; Doppler effect of sound',
                ],
              },
            ],
          },
          {
            name: 'Second-year PUC',
            topics: [
              {
                name: 'Electrostatics',
                subtopics: [
                  'Electric charges, Coulomb law and superposition; electric field and field lines',
                  'Electric dipole: field, potential and torque in a uniform field',
                  "Gauss's theorem applied to wires, sheets and spherical shells",
                  'Electric potential, equipotential surfaces and field-potential relation; conductors and dielectrics',
                  'Capacitance; series and parallel combinations; parallel-plate capacitor with dielectrics; stored energy',
                ],
              },
              {
                name: 'Current electricity',
                subtopics: [
                  'Drift velocity, mobility, Ohm law, resistivity and conductivity; temperature dependence',
                  'emf and internal resistance; series and parallel combinations of cells',
                  "Kirchhoff's rules; Wheatstone bridge and metre bridge; potentiometer applications",
                  'Electrical energy and power; heating effect',
                ],
              },
              {
                name: 'Magnetic effects of current and magnetism',
                subtopics: [
                  'Biot-Savart law and the circular loop; Ampere circuital law for wires and solenoids',
                  'Force on a moving charge and on a current-carrying conductor; cyclotron frequency',
                  'Force between parallel currents and the definition of the ampere; torque on a current loop',
                  'Moving-coil galvanometer and conversion to ammeter and voltmeter',
                  'Current loop and revolving electron as magnetic dipoles; earth magnetic elements',
                  'Para-, dia- and ferromagnetism; permeability, susceptibility, retentivity and hysteresis',
                ],
              },
              {
                name: 'Electromagnetic induction and alternating current',
                subtopics: [
                  "Magnetic flux; Faraday's laws and Lenz's law; eddy currents",
                  'Self and mutual inductance; AC generator',
                  'Peak and rms values; reactance and impedance; phasors; series LCR circuit and resonance',
                  'Power factor and wattless current; transformer',
                ],
              },
              {
                name: 'Electromagnetic waves',
                subtopics: [
                  'Displacement current (basic idea)',
                  'Characteristics and transverse nature of electromagnetic waves; the EM spectrum and applications',
                ],
              },
              {
                name: 'Ray optics and optical instruments',
                subtopics: [
                  'Reflection at spherical mirrors and the mirror formula; refraction and total internal reflection',
                  "Thin-lens formula and lens-maker's formula; lens combinations; prism refraction and dispersion",
                  'Optical instruments: microscope and astronomical telescope; the eye and correction of myopia and hypermetropia',
                ],
              },
              {
                name: 'Wave optics',
                subtopics: [
                  "Wavefront and Huygens' principle; reflection and refraction of plane waves",
                  "Young's double-slit experiment; coherence; conditions for maxima and minima; fringe width",
                  'Single-slit diffraction; resolving power of optical instruments',
                  "Polarisation; plane-polarised light; Brewster's law and polaroids",
                ],
              },
              {
                name: 'Dual nature of radiation and matter',
                subtopics: [
                  'Photoelectric effect: Hertz and Lenard observations; Einstein photoelectric equation',
                  'Matter waves and the de Broglie relation',
                ],
              },
              {
                name: 'Atoms and hydrogen spectrum',
                subtopics: [
                  'Alpha-particle scattering and the Rutherford nuclear model',
                  'Bohr model of the hydrogen atom; energy levels and the hydrogen spectrum',
                ],
              },
              {
                name: 'Nuclei',
                subtopics: [
                  'Nuclear composition and size; isotopes, isobars and isotones',
                  'Radioactivity: alpha, beta and gamma decay and the decay law; half-life and activity',
                  'Mass defect and binding energy per nucleon; nuclear fission and fusion',
                ],
              },
              {
                name: 'Semiconductor electronics',
                subtopics: [
                  'Energy bands; intrinsic and extrinsic semiconductors; p-type and n-type doping',
                  'p-n junction diode and its I-V characteristics; diode as a rectifier',
                  'LED, photodiode and solar cell; Zener diode as a voltage regulator',
                  'Logic gates OR, AND, NOT, NAND, NOR and simple combinations',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Chemistry',
        mappedSubjectId: 'chemistry',
        weightage: 33,
        units: [
          {
            name: 'First-year PUC',
            topics: [
              {
                name: 'Some basic concepts of chemistry',
                subtopics: [
                  'Laws of chemical combination; mole concept, molar mass, percentage composition, empirical and molecular formulae; stoichiometry; concentration terms',
                ],
              },
              {
                name: 'Structure of an atom',
                subtopics: [
                  "Bohr model and its limitations; dual nature and de Broglie relation; Heisenberg uncertainty principle",
                  'Quantum numbers, orbital shapes, Aufbau principle, Pauli exclusion and Hund rule; electronic configurations',
                ],
              },
              {
                name: 'Periodicity and chemical bonding',
                subtopics: [
                  'Modern periodic law; trends in radii, ionisation enthalpy, electron gain enthalpy, electronegativity and valency',
                  'Ionic and covalent bonds; Lewis structures; bond parameters; formal charge; polarity and resonance',
                  'VSEPR geometry; hybridisation involving s, p and d orbitals',
                  'Molecular orbital theory of homonuclear diatomics (qualitative); intermolecular forces and hydrogen bonding',
                ],
              },
              {
                name: 'Gaseous state and liquids',
                subtopics: [
                  'Gas laws and the ideal-gas equation; kinetic-molecular model; molecular speeds',
                  "Deviation from ideal behaviour; van der Waals equation; liquefaction and critical constants",
                  'Liquid state: vapour pressure, viscosity and surface tension',
                ],
              },
              {
                name: 'Chemical thermodynamics',
                subtopics: [
                  'System and surroundings; state functions; internal energy and enthalpy',
                  'Enthalpies of formation, combustion, atomisation, sublimation, ionisation and solution; bond enthalpy',
                  "First law; Hess law of constant heat summation",
                  'Entropy and the second law; Gibbs free energy and spontaneity criteria',
                ],
              },
              {
                name: 'Equilibrium',
                subtopics: [
                  'Equilibrium constant and reaction quotient; Le Chatelier principle',
                  'Ionic equilibrium: acid-base ionisation, pH scale, buffers, Henderson equation, salt hydrolysis, solubility product, common ion effect',
                ],
              },
              {
                name: 'Redox reactions and oxidation numbers',
                subtopics: [
                  'Oxidation numbers; balancing redox reactions by ion-electron and oxidation-number methods',
                ],
              },
              {
                name: 'Hydrogen, s-block and p-block (groups 13-14)',
                subtopics: [
                  'Hydrogen isotopes; hydrides; hydrogen peroxide preparation, structure and uses',
                  'Group 1 and 2 elements: trends, important compounds, biological importance of Na, K, Mg, Ca',
                  'Group 13: boron compounds, diborane, boric acid, aluminium chemistry',
                  'Group 14: catenation and allotropes of carbon; CO and CO2; silicones, silicates and zeolites',
                ],
              },
              {
                name: 'Organic chemistry: basic principles and hydrocarbons',
                subtopics: [
                  'IUPAC nomenclature; structural and stereoisomerism; fission of covalent bonds; electrophiles and nucleophiles',
                  'Inductive, resonance and hyperconjugation effects; reaction types',
                  'Alkanes, alkenes and alkynes: preparations and characteristic reactions; Markovnikov and peroxide effects',
                  'Aromatic hydrocarbons: benzene structure, aromaticity and Huckel rule; electrophilic substitution mechanisms',
                ],
              },
              {
                name: 'Pollution of air, water and soil; green chemistry',
                subtopics: [
                  'Air, water and soil pollution and their effects; primary and secondary pollutants',
                  'Smog; acid rain; greenhouse effect (elementary); green chemistry',
                ],
              },
            ],
          },
          {
            name: 'Second-year PUC',
            topics: [
              {
                name: 'Solutions and electrochemistry',
                subtopics: [
                  "Raoult law; colligative properties: vapour-pressure lowering, boiling-point elevation, freezing-point depression, osmotic pressure; van Hoff factor",
                  'Conductance, specific and molar conductivity; Kohlrausch law',
                  'Electrolysis; galvanic cells, standard electrode potentials and the electrochemical series',
                  'Nernst equation; relation between Gibbs energy and emf; fuel cells; lithium-ion battery',
                ],
              },
              {
                name: 'Chemical kinetics',
                subtopics: [
                  'Rate of reaction; factors affecting rate; order and molecularity; rate law',
                  'Integrated rate equations and half-life for zero- and first-order reactions',
                  'Arrhenius equation, activation energy and the collision theory (elementary)',
                  'Homogeneous, heterogeneous and enzyme catalysis',
                ],
              },
              {
                name: 'd- and f-block elements and coordination compounds',
                subtopics: [
                  'Transition-element trends: radii, ionisation enthalpy, oxidation states, colour and magnetism',
                  'Preparation and properties of potassium dichromate and potassium permanganate',
                  'Lanthanoid contraction and actinoid comparison',
                  'Ligands and coordination number; IUPAC nomenclature; Werner, VBT and CFT bonding; isomerism; applications',
                ],
              },
              {
                name: 'Haloalkanes and haloarenes',
                subtopics: [
                  'Nature of the C-X bond; nomenclature',
                  'Substitution mechanisms (SN1 and SN2) and carbocation stability; stereochemical configurations',
                  'Uses and environmental effects of halo-organics (DDT, freons)',
                ],
              },
              {
                name: 'Alcohols, phenols and ethers',
                subtopics: [
                  'Preparations and properties of alcohols; distinction of primary, secondary and tertiary alcohols',
                  'Acidic nature of phenols and electrophilic substitution in phenols',
                  'Preparation and properties of ethers; industrial uses of methanol and ethanol',
                ],
              },
              {
                name: 'Aldehydes, ketones and carboxylic acids',
                subtopics: [
                  'Carbonyl group reactivity; nucleophilic addition mechanism; alpha-hydrogen reactions',
                  'Named reactions of carbonyl compounds (aldol, Cannizzaro and related)',
                  'Carboxylic acids: acidity and substituent effects; preparations and uses',
                ],
              },
              {
                name: 'Amines and diazonium salts',
                subtopics: [
                  'Preparation and basicity of amines; distinction tests for primary, secondary and tertiary amines',
                  'Diazonium salts: preparation, reactions and synthetic importance',
                  'Cyanides and isocyanides (elementary)',
                ],
              },
              {
                name: 'Biomolecules',
                subtopics: [
                  'Carbohydrates: mono-, oligo- and polysaccharides; reducing and non-reducing sugars',
                  'Proteins: amino acids, peptide bonds, protein structure; enzymes',
                  'Vitamins: classification and deficiency diseases',
                  'Nucleic acids: DNA and RNA structure and roles',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Mathematics',
        mappedSubjectId: 'mathematics',
        weightage: 34,
        units: [
          {
            name: 'First-year PUC',
            topics: [
              {
                name: 'Sets, relations and functions',
                subtopics: [
                  'Sets and Venn diagrams; subsets, power set, union, intersection, difference',
                  'Ordered pairs and cartesian product of sets',
                  'Relations: domain, range and codomain',
                  'Functions: types, composition, domain and range',
                ],
              },
              {
                name: 'Trigonometric functions and identities',
                subtopics: [
                  'Angles, radian measure and arc length',
                  'Trigonometric functions, identities and equations',
                  'Compound and multiple angle formulae',
                  'Properties of triangles; general solutions of trigonometric equations',
                ],
              },
              {
                name: 'Complex numbers and quadratic equations',
                subtopics: [
                  'Complex numbers in the Argand plane; modulus and amplitude',
                  'Square roots of complex numbers',
                  'Nature of roots; relations between roots and coefficients of a quadratic',
                ],
              },
              {
                name: 'Permutations, combinations and binomial theorem',
                subtopics: [
                  'Factorial notation; permutations with and without repetition; combinations',
                  'Binomial theorem for positive integral index; general and middle terms',
                  'Applications of binomial coefficients',
                ],
              },
              {
                name: 'Sequences, series and mathematical induction',
                subtopics: [
                  'Arithmetic and geometric progressions; AM-GM relation',
                  'Sums Σn, Σn², Σn³; infinite geometric series and its sum',
                  'Statement and simple applications of the principle of mathematical induction',
                ],
              },
              {
                name: 'Linear inequalities',
                subtopics: [
                  'Algebraic solution of linear inequalities in one variable',
                  'Graphical solution of linear inequalities in two variables',
                ],
              },
              {
                name: 'Straight lines and conic sections',
                subtopics: [
                  'Slope, intercepts and various forms of the line equation; angle between lines; distance of a point',
                  'Circles; sections of a cone: parabola, ellipse and hyperbola in standard form',
                  'Foci, directrices and eccentricity of conics',
                ],
              },
              {
                name: 'Introduction to three-dimensional geometry',
                subtopics: ['Coordinate axes and octants', 'Distance formula in space', 'Section formula in space'],
              },
              {
                name: 'Limits and derivatives',
                subtopics: [
                  'Intuitive idea of limits and algebra of limits',
                  'Derivative as the rate of change and slope; first-principles derivatives',
                  'Derivatives of standard functions; algebra of derivatives',
                ],
              },
              {
                name: 'Statistics and probability',
                subtopics: [
                  'Range, mean deviation, variance and standard deviation; frequency distributions',
                  'Random experiments, sample spaces and events; axiomatic probability',
                  'Addition rule; simple problems on equally likely outcomes',
                ],
              },
            ],
          },
          {
            name: 'Second-year PUC',
            topics: [
              {
                name: 'Relations and functions',
                subtopics: [
                  'One-one and onto functions; composition and invertibility',
                  'Domain, range and graphs of functions',
                ],
              },
              {
                name: 'Inverse trigonometric functions',
                subtopics: [
                  'Domains, ranges and principal-value branches',
                  'Graphs and elementary properties of inverse trigonometric functions',
                ],
              },
              {
                name: 'Matrices and determinants',
                subtopics: [
                  'Matrix types, operations, transpose; symmetric and skew-symmetric matrices',
                  'Determinant properties; minors and cofactors; adjoint and inverse',
                  'Solving linear systems by the matrix (inverse) method; consistency; area of a triangle',
                ],
              },
              {
                name: 'Continuity and differentiability',
                subtopics: [
                  'Continuity and differentiability of functions',
                  'Chain rule; implicit and logarithmic differentiation; derivatives of inverse trigonometric functions',
                  'Second-order derivatives',
                ],
              },
              {
                name: 'Applications of derivatives',
                subtopics: [
                  'Rate of change; increasing and decreasing functions',
                  'Tangents and normals; approximations',
                  'Maxima and minima; simple optimisation problems',
                ],
              },
              {
                name: 'Integrals',
                subtopics: [
                  'Indefinite integrals of standard functions; substitution, integration by parts and partial fractions',
                  'Definite integrals and their properties; fundamental theorem of calculus',
                ],
              },
              {
                name: 'Applications of integration',
                subtopics: [
                  'Area under simple curves and between curves',
                ],
              },
              {
                name: 'Differential equations',
                subtopics: [
                  'Order and degree; formation of differential equations',
                  'Variable-separable equations; homogeneous equations',
                  'Linear first-order differential equations',
                ],
              },
              {
                name: 'Vectors and three-dimensional geometry',
                subtopics: [
                  'Vector algebra: addition, scalar multiplication; dot and cross products; scalar triple product',
                  'Direction cosines and ratios',
                  'Equations of lines and planes; angles and distances in space; skew lines',
                ],
              },
              {
                name: 'Probability and statistics',
                subtopics: [
                  'Conditional probability; multiplication theorem; independence',
                  "Bayes' theorem; random variables, probability distributions, mean and variance; binomial distribution (elementary)",
                ],
              },
              {
                name: 'Linear programming',
                subtopics: [
                  'Constraints, feasible regions and the graphical optimisation method',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Biology',
        units: [
          {
            name: 'First-year PUC',
            topics: [
              {
                name: 'The living world and biological classification',
                subtopics: [
                  'Taxonomy, nomenclature and classification',
                  'Biological classification: monera, protista, fungi, plantae and animalia; viruses and lichens',
                ],
              },
              {
                name: 'Plant kingdom',
                subtopics: [
                  'Algae, bryophytes, pteridophytes, gymnosperms and angiosperms; life cycles',
                ],
              },
              {
                name: 'Animal kingdom',
                subtopics: [
                  'Non-chordates up to phyla and chordate classes; body plans',
                ],
              },
              {
                name: 'Morphology of flowering plants',
                subtopics: [
                  'Root, stem and leaf: types, modifications and venation',
                  'Inflorescence, flower, fruit and seed; floral formulae',
                ],
              },
              {
                name: 'Anatomy of flowering plants',
                subtopics: [
                  'Plant tissues and tissue systems',
                  'Monocot and dicot stems and roots; secondary growth (elementary)',
                ],
              },
              {
                name: 'Structural organisation in animals',
                subtopics: [
                  'Animal tissues: epithelial, connective, muscular and nervous',
                  'Structural organisation in animals (frog as representative)',
                ],
              },
              {
                name: 'Cell structure and function',
                subtopics: [
                  'Cell theory; prokaryotic and eukaryotic cells; organelles',
                  'Biomolecules: proteins, carbohydrates, lipids and nucleic acids; enzymes and their action',
                  'Cell cycle and cell division: mitosis and meiosis',
                ],
              },
              {
                name: 'Plant physiology',
                subtopics: [
                  'Transport in plants: water and mineral uptake, transpiration, phloem loading',
                  'Photosynthesis: light and dark reactions, C3 and C4 pathways, photorespiration',
                  'Respiration in plants: glycolysis, Krebs cycle, electron transport and fermentation',
                  'Plant growth and development: hormones and differentiation',
                ],
              },
              {
                name: 'Human physiology',
                subtopics: [
                  'Digestion and absorption; breathing and exchange of gases',
                  'Body fluids and circulation; excretory products and elimination',
                  'Locomotion and movement; neural control and coordination; chemical coordination',
                ],
              },
            ],
          },
          {
            name: 'Second-year PUC',
            topics: [
              {
                name: 'Sexual reproduction in flowering plants',
                subtopics: [
                  'Anther, pollen, embryo sac, double fertilisation',
                  'Apomixis and polyembryony (elementary)',
                ],
              },
              {
                name: 'Human reproduction and reproductive health',
                subtopics: [
                  'Human reproductive system; gametogenesis; menstrual cycle; fertilisation and parturition',
                  'Reproductive health: contraception, STIs and assisted reproduction',
                ],
              },
              {
                name: 'Principles of inheritance and variation',
                subtopics: [
                  "Mendelian inheritance; linkage, crossing over and sex-linked inheritance",
                  'Chromosomal theory; genetic disorders',
                ],
              },
              {
                name: 'Molecular basis of inheritance',
                subtopics: [
                  'DNA as genetic material, replication, transcription, translation, genetic code, gene regulation',
                ],
              },
              {
                name: 'Evolution',
                subtopics: [
                  'Darwinism, Hardy-Weinberg equilibrium, speciation and human evolution',
                ],
              },
              {
                name: 'Human health and disease',
                subtopics: [
                  'Pathogens, immunity, cancer and drug abuse',
                ],
              },
              {
                name: 'Microbes in human welfare',
                subtopics: [
                  'Fermentation, antibiotics, biofertilisers, biogas',
                ],
              },
              {
                name: 'Biotechnology and its applications',
                subtopics: [
                  'Principles and processes: recombinant DNA technology, PCR, cloning vectors',
                  'Applications: Bt crops, RNA interference, gene therapy, transgenic animals, insulin production',
                ],
              },
              {
                name: 'Ecology and environment',
                subtopics: [
                  'Organisms and populations: adaptations, population interactions and growth',
                  'Ecosystems: energy flow, pyramids, productivity; decomposition',
                  'Biodiversity and conservation: patterns, hotspots, in-situ and ex-situ strategies; environmental issues',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

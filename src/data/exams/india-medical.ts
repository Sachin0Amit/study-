import type { CuratedExam } from './types'

/**
 * India medical entrance exam — curated official syllabus.
 *
 * Source: NMC/NTA NEET (UG) 2026 official syllabus (verified live — the
 * rationalised syllabus in force since the 2024 edition; NCERT Class 11–12
 * is the base text).
 */

export const INDIA_MEDICAL_EXAMS: CuratedExam[] = [
  {
    id: 'neet',
    name: 'NEET',
    fullName: 'National Eligibility cum Entrance Test (Undergraduate)',
    aliases: ['neet ug', 'neet exam', 'national eligibility cum entrance test'],
    region: 'India',
    category: 'Medical entrance',
    popularity: 99,
    syllabusVerified: '2026-10-20',
    website: 'https://neet.nta.nic.in',
    overview: {
      conductor: 'National Testing Agency (NTA)',
      level: 'Class 11–12 → MBBS/BDS/AYUSH admission',
      papers: ['Single pen-paper: Physics, Chemistry, Biology'],
      duration: '3 h 20 min · 180 questions (45 physics, 45 chemistry, 90 biology)',
      marking: '720 marks; +4 correct / −1 incorrect',
      negativeMarking: '−1 per incorrect',
      questionTypes: ['MCQ (4 options)'],
      notes:
        'Single pen-and-paper (OMR) exam offered in English, Hindi and regional languages. NCERT Class 11–12 textbooks are the base. The syllabus follows the NMC/NTA rationalised syllabus in force since the 2024 edition (2026 official syllabus verified) — chapters dropped in the rationalisation (e.g. States of Matter, Hydrogen, s-Block, Environmental Chemistry, Polymers, Chemistry in Everyday Life, Reproduction in Organisms) are not tested.',
    },
    sources: [
      { title: 'NEET UG — Syllabus', url: 'https://neet.nta.nic.in', host: 'neet.nta.nic.in' },
    ],
    subjects: [
      {
        name: 'Physics',
        mappedSubjectId: 'physics',
        units: [
          // Class 11 (NCERT Units I–X)
          {
            name: 'Physics and Measurement',
            topics: [
              {
                name: 'Measurement and Units',
                subtopics: [
                  'Units of measurements and systems of units',
                  'SI units: fundamental and derived units',
                  'Least count and significant figures',
                ],
              },
              {
                name: 'Errors and Dimensional Analysis',
                subtopics: [
                  'Errors in measurements',
                  'Dimensions of physical quantities',
                  'Dimensional analysis and its applications',
                ],
              },
            ],
          },
          {
            name: 'Kinematics',
            topics: [
              {
                name: 'Motion in a Straight Line',
                subtopics: [
                  'Frame of reference',
                  'Speed and velocity; uniform and non-uniform motion',
                  'Average speed and instantaneous velocity',
                  'Uniformly accelerated motion',
                  'Position-time and velocity-time graphs; relations for uniformly accelerated motion',
                ],
              },
              {
                name: 'Motion in a Plane',
                subtopics: [
                  'Scalars and vectors; vector addition and subtraction; scalar and vector products',
                  'Unit vector; resolution of a vector; relative velocity',
                  'Projectile motion',
                  'Uniform circular motion',
                ],
              },
            ],
          },
          {
            name: 'Laws of Motion',
            topics: [
              {
                name: 'Force, Inertia and Newton’s Laws',
                subtopics: [
                  'Force and inertia; Newton’s first law of motion',
                  'Momentum and Newton’s second law of motion',
                  'Impulse',
                  'Newton’s third law of motion',
                ],
              },
              {
                name: 'Conservation of Momentum and Equilibrium',
                subtopics: [
                  'Law of conservation of linear momentum and its applications',
                  'Equilibrium of concurrent forces',
                ],
              },
              {
                name: 'Friction',
                subtopics: ['Static and kinetic friction; laws of friction', 'Rolling friction'],
              },
              {
                name: 'Dynamics of Uniform Circular Motion',
                subtopics: [
                  'Centripetal force and its applications',
                  'Vehicle on a level circular road',
                  'Vehicle on a banked road',
                ],
              },
            ],
          },
          {
            name: 'Work, Energy and Power',
            topics: [
              {
                name: 'Work, Power and Energy',
                subtopics: [
                  'Work done by a constant force and a variable force',
                  'Kinetic and potential energies; work-energy theorem',
                  'Power',
                ],
              },
              {
                name: 'Energy Conservation and Forces',
                subtopics: [
                  'Potential energy of a spring; conservation of mechanical energy',
                  'Conservative and non-conservative forces',
                  'Motion in a vertical circle',
                ],
              },
              {
                name: 'Collisions',
                subtopics: [
                  'Elastic and inelastic collisions in one dimension',
                  'Collisions in two dimensions',
                ],
              },
            ],
          },
          {
            name: 'Rotational Motion',
            topics: [
              {
                name: 'Centre of Mass',
                subtopics: [
                  'Centre of mass of a two-particle system',
                  'Centre of mass of a rigid body',
                ],
              },
              {
                name: 'Torque and Angular Momentum',
                subtopics: [
                  'Basic concepts of rotational motion; moment of a force and torque',
                  'Angular momentum and its conservation',
                  'Equilibrium of rigid bodies',
                ],
              },
              {
                name: 'Moment of Inertia and Rotational Dynamics',
                subtopics: [
                  'Moment of inertia and radius of gyration',
                  'Values of moments of inertia for simple geometrical objects',
                  'Parallel and perpendicular axes theorems and their applications',
                  'Rigid body rotation and equations of rotational motion',
                  'Comparison of linear and rotational motions',
                ],
              },
            ],
          },
          {
            name: 'Gravitation',
            topics: [
              {
                name: 'Universal Law of Gravitation and g',
                subtopics: [
                  'The universal law of gravitation',
                  'Acceleration due to gravity and its variation with altitude and depth',
                  'Kepler’s laws of planetary motion',
                ],
              },
              {
                name: 'Gravitational Potential and Energy',
                subtopics: ['Gravitational potential energy', 'Gravitational potential'],
              },
              {
                name: 'Satellites and Escape Velocity',
                subtopics: [
                  'Escape velocity',
                  'Motion of a satellite; orbital velocity, time period and energy of a satellite',
                ],
              },
            ],
          },
          {
            name: 'Properties of Solids and Liquids',
            topics: [
              {
                name: 'Mechanical Properties of Solids',
                subtopics: [
                  'Elastic behaviour; stress-strain relationship',
                  'Hooke’s law',
                  'Young’s modulus, bulk modulus and modulus of rigidity',
                ],
              },
              {
                name: 'Mechanical Properties of Fluids',
                subtopics: [
                  'Pressure due to a fluid column; Pascal’s law and its applications',
                  'Effect of gravity on fluid pressure',
                  'Viscosity; Stokes’ law and terminal velocity; streamline and turbulent flow; critical velocity',
                  'Bernoulli’s principle and its applications',
                  'Surface energy and surface tension; angle of contact; excess of pressure across a curved surface',
                  'Applications of surface tension: drops, bubbles and capillary rise',
                ],
              },
              {
                name: 'Thermal Properties of Matter',
                subtopics: [
                  'Heat, temperature and thermal expansion',
                  'Specific heat capacity and calorimetry',
                  'Change of state and latent heat',
                  'Heat transfer: conduction, convection and radiation',
                ],
              },
            ],
          },
          {
            name: 'Thermodynamics',
            topics: [
              {
                name: 'Zeroth Law and Temperature',
                subtopics: [
                  'Thermal equilibrium and the concept of temperature',
                  'Zeroth law of thermodynamics',
                ],
              },
              {
                name: 'First Law of Thermodynamics',
                subtopics: [
                  'Heat, work and internal energy',
                  'Isothermal and adiabatic processes',
                ],
              },
              {
                name: 'Second Law of Thermodynamics',
                subtopics: ['Reversible and irreversible processes'],
              },
            ],
          },
          {
            name: 'Kinetic Theory of Gases',
            topics: [
              {
                name: 'Perfect Gas Equation',
                subtopics: ['Equation of state of a perfect gas', 'Work done on compressing a gas'],
              },
              {
                name: 'Kinetic Theory of Gases',
                subtopics: [
                  'Assumptions of the kinetic theory; concept of pressure',
                  'Kinetic interpretation of temperature',
                  'RMS speed of gas molecules',
                ],
              },
              {
                name: 'Equipartition and Mean Free Path',
                subtopics: [
                  'Degrees of freedom; law of equipartition of energy',
                  'Applications to specific heat capacities of gases',
                  'Mean free path; Avogadro’s number',
                ],
              },
            ],
          },
          {
            name: 'Oscillations and Waves',
            topics: [
              {
                name: 'Oscillations',
                subtopics: [
                  'Oscillations and periodic motion: time period, frequency, displacement as a function of time; periodic functions',
                  'Simple harmonic motion (S.H.M.) and its equation; phase',
                  'Oscillations of a spring: restoring force and force constant',
                  'Energy in S.H.M.: kinetic and potential energies',
                  'Simple pendulum: derivation of expression for its time period',
                ],
              },
              {
                name: 'Wave Motion',
                subtopics: [
                  'Longitudinal and transverse waves',
                  'Speed of a travelling wave',
                  'Displacement relation for a progressive wave',
                ],
              },
              {
                name: 'Superposition of Waves',
                subtopics: [
                  'Principle of superposition of waves; reflection of waves',
                  'Standing waves in strings and organ pipes; fundamental mode and harmonics',
                  'Beats',
                ],
              },
            ],
          },
          // Class 12 (NCERT Units I–IX)
          {
            name: 'Electrostatics',
            topics: [
              {
                name: 'Electric Charges and Fields',
                subtopics: [
                  'Conservation of charge',
                  'Coulomb’s law: forces between two point charges',
                  'Forces between multiple charges; superposition principle and continuous charge distribution',
                  'Electric field due to a point charge; electric field lines',
                  'Electric dipole and field due to a dipole',
                  'Torque on a dipole in a uniform electric field',
                ],
              },
              {
                name: 'Electrostatic Potential and Capacitance',
                subtopics: [
                  'Electric potential and potential difference; calculation for a point charge, dipole and system of charges',
                  'Equipotential surfaces',
                  'Electrical potential energy of two point charges and of a dipole in an electrostatic field',
                  'Conductors and insulators; dielectrics and electric polarization',
                  'Combination of capacitors in series and parallel',
                  'Parallel-plate capacitor with and without dielectric medium; energy stored in a capacitor',
                ],
              },
            ],
          },
          {
            name: 'Current Electricity',
            topics: [
              {
                name: 'Electric Current and Ohm’s Law',
                subtopics: [
                  'Drift velocity and mobility, and their relation with electric current',
                  'Ohm’s law and electrical resistance',
                  'V-I characteristics of ohmic and non-ohmic conductors',
                  'Electrical energy and power; resistivity and conductivity',
                  'Temperature dependence of resistance',
                ],
              },
              {
                name: 'Resistors and Cells',
                subtopics: [
                  'Series and parallel combinations of resistors',
                  'Internal resistance, potential difference and emf of a cell',
                  'Combination of cells in series and parallel',
                ],
              },
              {
                name: 'Kirchhoff’s Laws and Bridges',
                subtopics: [
                  'Kirchhoff’s laws and their applications',
                  'Wheatstone bridge and metre bridge',
                ],
              },
            ],
          },
          {
            name: 'Magnetic Effects of Current and Magnetism',
            topics: [
              {
                name: 'Moving Charges and Magnetism',
                subtopics: [
                  'Biot-Savart law and its application to a current-carrying circular loop',
                  'Ampere’s law and its applications: infinitely long straight wire and solenoid',
                  'Force on a moving charge in uniform magnetic and electric fields',
                  'Force on a current-carrying conductor in a uniform magnetic field',
                  'Force between two parallel current-carrying conductors; definition of the ampere',
                  'Torque on a current loop in a uniform magnetic field',
                  'Moving coil galvanometer: sensitivity and conversion to ammeter and voltmeter',
                ],
              },
              {
                name: 'Magnetism and Matter',
                subtopics: [
                  'Current loop as a magnetic dipole and its magnetic dipole moment',
                  'Bar magnet as an equivalent solenoid; magnetic field lines',
                  'Magnetic field due to a dipole along its axis and perpendicular to its axis',
                  'Torque on a magnetic dipole in a uniform magnetic field',
                  'Para-, dia- and ferromagnetic substances with examples; effect of temperature on magnetic properties',
                ],
              },
            ],
          },
          {
            name: 'Electromagnetic Induction and Alternating Currents',
            topics: [
              {
                name: 'Electromagnetic Induction',
                subtopics: [
                  'Faraday’s law; induced emf and current',
                  'Lenz’s law',
                  'Eddy currents',
                  'Self and mutual inductance',
                ],
              },
              {
                name: 'Alternating Current',
                subtopics: [
                  'Peak and rms values of alternating current/voltage',
                  'Reactance and impedance; LCR series circuit and resonance',
                  'Power in AC circuits; wattless current',
                  'AC generator and transformer',
                ],
              },
            ],
          },
          {
            name: 'Electromagnetic Waves',
            topics: [
              {
                name: 'Electromagnetic Waves',
                subtopics: [
                  'Displacement current',
                  'Electromagnetic waves and their characteristics',
                  'Transverse nature of electromagnetic waves',
                ],
              },
              {
                name: 'Electromagnetic Spectrum',
                subtopics: [
                  'Radio waves, microwaves, infrared, visible, ultraviolet, X-rays and gamma rays',
                  'Applications of electromagnetic waves',
                ],
              },
            ],
          },
          {
            name: 'Optics',
            topics: [
              {
                name: 'Ray Optics and Optical Instruments',
                subtopics: [
                  'Reflection of light; spherical mirrors; mirror formula',
                  'Refraction of light at plane and spherical surfaces',
                  'Thin lens formula and lens maker formula',
                  'Total internal reflection and its applications',
                  'Magnification; power of a lens; combination of thin lenses in contact',
                  'Refraction of light through a prism',
                  'Microscope and astronomical telescope (reflecting and refracting) and their magnifying powers',
                ],
              },
              {
                name: 'Wave Optics',
                subtopics: [
                  'Wavefront and Huygens’ principle; laws of reflection and refraction using wavefronts',
                  'Interference: Young’s double-slit experiment and expression for fringe width',
                  'Coherent sources and sustained interference of light',
                  'Diffraction due to a single slit; width of the central maximum',
                  'Polarization: plane-polarized light, Brewster’s law, uses of plane-polarized light and Polaroid',
                ],
              },
            ],
          },
          {
            name: 'Dual Nature of Matter and Radiation',
            topics: [
              {
                name: 'Photoelectric Effect',
                subtopics: [
                  'Dual nature of radiation; photoelectric effect',
                  'Hertz and Lenard’s observations',
                  'Einstein’s photoelectric equation; particle nature of light',
                ],
              },
              {
                name: 'Matter Waves',
                subtopics: ['Wave nature of particles', 'de Broglie relation'],
              },
            ],
          },
          {
            name: 'Atoms and Nuclei',
            topics: [
              {
                name: 'Atoms',
                subtopics: [
                  'Alpha-particle scattering experiment',
                  'Rutherford’s model of atom; Bohr model and energy levels',
                  'Hydrogen spectrum',
                ],
              },
              {
                name: 'Nuclei',
                subtopics: [
                  'Composition and size of nucleus; atomic masses',
                  'Mass-energy relation and mass defect',
                  'Binding energy per nucleon and its variation with mass number',
                  'Nuclear fission and fusion',
                ],
              },
            ],
          },
          {
            name: 'Electronic Devices',
            topics: [
              {
                name: 'Semiconductor Diode',
                subtopics: [
                  'Semiconductors; semiconductor diode: I-V characteristics in forward and reverse bias',
                  'Diode as a rectifier',
                  'I-V characteristics of LED, photodiode, solar cell and Zener diode',
                ],
              },
              {
                name: 'Zener Diode and Logic Gates',
                subtopics: [
                  'Zener diode as a voltage regulator',
                  'Logic gates (OR, AND, NOT, NAND and NOR)',
                ],
              },
            ],
          },
          // Experimental skills (classes 11 and 12)
          {
            name: 'Experimental Skills',
            topics: [
              {
                name: 'Measurement Experiments',
                subtopics: [
                  'Vernier calipers: internal/external diameter and depth of a vessel',
                  'Screw gauge: thickness/diameter of a thin sheet/wire',
                  'Metre scale: mass of a given object by the principle of moments',
                ],
              },
              {
                name: 'Mechanics and Sound Experiments',
                subtopics: [
                  'Simple pendulum: dissipation of energy (square of amplitude vs time)',
                  'Young’s modulus of elasticity of the material of a metallic wire',
                  'Surface tension of water by capillary rise and effect of detergents',
                  'Coefficient of viscosity of a given viscous liquid by terminal velocity of a spherical body',
                  'Speed of sound in air at room temperature using a resonance tube',
                ],
              },
              {
                name: 'Heat Experiments',
                subtopics: [
                  'Specific heat capacity of a given solid and liquid by the method of mixtures',
                ],
              },
              {
                name: 'Electricity Experiments',
                subtopics: [
                  'Resistivity of the material of a given wire using a metre bridge',
                  'Resistance of a given wire using Ohm’s law',
                  'Resistance and figure of merit of a galvanometer by half deflection method',
                ],
              },
              {
                name: 'Optics Experiments',
                subtopics: [
                  'Focal length of convex mirror, concave mirror and convex lens using the parallax method',
                  'Plot of the angle of deviation vs angle of incidence for a triangular prism',
                  'Refractive index of a glass slab using a travelling microscope',
                ],
              },
              {
                name: 'Semiconductor Experiments',
                subtopics: [
                  'Characteristic curves of a p-n junction diode in forward and reverse bias',
                  'Characteristic curves of a Zener diode and finding reverse breakdown voltage',
                  'Identification of diode, LED, resistor and capacitor from a mixed collection',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Chemistry',
        mappedSubjectId: 'chemistry',
        units: [
          // Physical Chemistry
          {
            name: 'Some Basic Concepts in Chemistry',
            topics: [
              {
                name: 'Matter and Atomic Theory',
                subtopics: [
                  'Matter and its nature',
                  'Dalton’s atomic theory; concept of atom, molecule, element and compound',
                  'Laws of chemical combination',
                ],
              },
              {
                name: 'Mole Concept and Formulae',
                subtopics: [
                  'Atomic and molecular masses; mole concept and molar mass',
                  'Percentage composition; empirical and molecular formulae',
                ],
              },
              {
                name: 'Stoichiometry',
                subtopics: ['Chemical equations and stoichiometry'],
              },
            ],
          },
          {
            name: 'Atomic Structure',
            topics: [
              {
                name: 'Electromagnetic Radiation and Bohr Model',
                subtopics: [
                  'Nature of electromagnetic radiation; photoelectric effect',
                  'Spectrum of the hydrogen atom',
                  'Bohr model of a hydrogen atom: postulates, derivation of energy and orbit-radii relations, limitations',
                ],
              },
              {
                name: 'Quantum Mechanical Model',
                subtopics: [
                  'Dual nature of matter; de Broglie’s relationship',
                  'Heisenberg uncertainty principle; elementary ideas of quantum mechanics',
                  'Quantum mechanical model of the atom and its important features',
                ],
              },
              {
                name: 'Quantum Numbers and Orbitals',
                subtopics: [
                  'Atomic orbitals as one-electron wave functions',
                  'Variation of ψ and ψ² with r for 1s and 2s orbitals',
                  'Principal, angular momentum and magnetic quantum numbers and their significance',
                  'Shapes of s, p and d orbitals; electron spin and spin quantum number',
                ],
              },
              {
                name: 'Electronic Configuration',
                subtopics: [
                  'Aufbau principle, Pauli’s exclusion principle and Hund’s rule',
                  'Electronic configuration of elements',
                  'Extra stability of half-filled and completely filled orbitals',
                ],
              },
            ],
          },
          {
            name: 'Chemical Bonding and Molecular Structure',
            topics: [
              {
                name: 'Ionic Bonding',
                subtopics: [
                  'Kossel-Lewis approach to chemical bond formation; ionic and covalent bonds',
                  'Formation of ionic bonds; factors affecting their formation',
                  'Calculation of lattice enthalpy',
                ],
              },
              {
                name: 'Covalent Bonding and VSEPR',
                subtopics: [
                  'Concept of electronegativity; Fajan’s rule; dipole moment',
                  'Valence Shell Electron Pair Repulsion (VSEPR) theory and shapes of simple molecules',
                ],
              },
              {
                name: 'Valence Bond Theory and Hybridization',
                subtopics: [
                  'Valence bond theory: important features',
                  'Concept of hybridization involving s, p and d orbitals',
                  'Resonance',
                ],
              },
              {
                name: 'Molecular Orbital Theory',
                subtopics: [
                  'LCAOs; types of molecular orbitals (bonding, antibonding); sigma and pi bonds',
                  'MO electronic configurations of homonuclear diatomic molecules',
                  'Concept of bond order, bond length and bond energy',
                ],
              },
              {
                name: 'Metallic and Hydrogen Bonding',
                subtopics: [
                  'Elementary idea of metallic bonding',
                  'Hydrogen bonding and its applications',
                ],
              },
            ],
          },
          {
            name: 'Chemical Thermodynamics',
            topics: [
              {
                name: 'Fundamentals of Thermodynamics',
                subtopics: [
                  'System and surroundings; extensive and intensive properties',
                  'State functions; types of processes',
                ],
              },
              {
                name: 'First Law and Thermochemistry',
                subtopics: [
                  'Concept of work, heat, internal energy and enthalpy; heat capacity and molar heat capacity',
                  'Hess’s law of constant heat summation',
                  'Enthalpies of bond dissociation, combustion, formation, atomization, sublimation, phase transition, hydration, ionization and solution',
                ],
              },
              {
                name: 'Second Law and Spontaneity',
                subtopics: [
                  'Spontaneity of processes; entropy',
                  'ΔS of the universe and ΔG of the system as criteria for spontaneity',
                  'ΔG° (standard Gibbs energy change) and equilibrium constant',
                ],
              },
            ],
          },
          {
            name: 'Solutions',
            topics: [
              {
                name: 'Concentration Terms',
                subtopics: [
                  'Molality, molarity, mole fraction',
                  'Percentage by volume and mass',
                ],
              },
              {
                name: 'Vapour Pressure and Raoult’s Law',
                subtopics: [
                  'Vapour pressure of solutions; Raoult’s law',
                  'Ideal and non-ideal solutions; vapour pressure-composition plots',
                ],
              },
              {
                name: 'Colligative Properties',
                subtopics: [
                  'Relative lowering of vapour pressure; depression of freezing point; elevation of boiling point; osmotic pressure',
                  'Determination of molecular mass using colligative properties',
                  'Abnormal value of molar mass; van’t Hoff factor and its significance',
                ],
              },
            ],
          },
          {
            name: 'Equilibrium',
            topics: [
              {
                name: 'Physical and Chemical Equilibrium',
                subtopics: [
                  'Meaning of equilibrium; concept of dynamic equilibrium',
                  'Equilibria involving physical processes: solid-liquid, liquid-gas and solid-gas; Henry’s law',
                  'Law of chemical equilibrium; equilibrium constants (Kp and Kc) and their significance',
                  'Significance of ΔG and ΔG° in chemical equilibrium',
                ],
              },
              {
                name: 'Factors Affecting Equilibrium',
                subtopics: [
                  'Effect of concentration, pressure, temperature and catalyst',
                  'Le Chatelier’s principle',
                ],
              },
              {
                name: 'Ionic Equilibrium',
                subtopics: [
                  'Weak and strong electrolytes; ionization of electrolytes',
                  'Concepts of acids and bases (Arrhenius, Bronsted-Lowry and Lewis) and their ionization',
                  'Acid-base equilibria (including multistage ionization) and ionization constants; ionization of water; pH scale',
                  'Common ion effect; hydrolysis of salts and pH of their solutions',
                  'Solubility of sparingly soluble salts and solubility products; buffer solutions',
                ],
              },
            ],
          },
          {
            name: 'Redox Reactions and Electrochemistry',
            topics: [
              {
                name: 'Redox Reactions',
                subtopics: [
                  'Electronic concepts of oxidation and reduction; redox reactions',
                  'Oxidation number; rules for assigning oxidation number',
                  'Balancing of redox reactions',
                ],
              },
              {
                name: 'Electrolytic Conduction',
                subtopics: [
                  'Electrolytic and metallic conduction; conductance in electrolytic solutions',
                  'Molar conductivities and their variation with concentration',
                  'Kohlrausch’s law and its applications',
                ],
              },
              {
                name: 'Electrochemical Cells',
                subtopics: [
                  'Electrolytic and galvanic cells; different types of electrodes',
                  'Electrode potentials including standard electrode potential; half-cell and cell reactions',
                  'emf of a galvanic cell and its measurement; Nernst equation and its applications',
                  'Relationship between cell potential and Gibbs energy change',
                  'Dry cell and lead accumulator; fuel cells',
                ],
              },
            ],
          },
          {
            name: 'Chemical Kinetics',
            topics: [
              {
                name: 'Rate and Order of Reaction',
                subtopics: [
                  'Rate of a chemical reaction; factors affecting the rate: concentration, temperature, pressure and catalyst',
                  'Elementary and complex reactions; order and molecularity',
                  'Rate law; rate constant and its units',
                ],
              },
              {
                name: 'Integrated Rate Laws',
                subtopics: [
                  'Differential and integral forms of zero and first-order reactions',
                  'Characteristics and half-lives of zero and first-order reactions',
                ],
              },
              {
                name: 'Temperature Dependence and Theories',
                subtopics: [
                  'Effect of temperature on the rate of reactions; Arrhenius theory',
                  'Activation energy and its calculation',
                  'Collision theory of bimolecular gaseous reactions (no derivation)',
                ],
              },
            ],
          },
          // Inorganic Chemistry
          {
            name: 'Classification of Elements and Periodicity in Properties',
            topics: [
              {
                name: 'Modern Periodic Table',
                subtopics: [
                  'Modern periodic law and present form of the periodic table',
                  's, p, d and f block elements',
                ],
              },
              {
                name: 'Periodic Trends',
                subtopics: [
                  'Atomic and ionic radii; ionization enthalpy; electron gain enthalpy',
                  'Valence, oxidation states and chemical reactivity',
                ],
              },
            ],
          },
          {
            name: 'p-Block Elements',
            topics: [
              {
                name: 'General Trends (Groups 13–18)',
                subtopics: [
                  'Electronic configuration of Group 13 to Group 18 elements',
                  'General trends in physical and chemical properties across the periods and down the groups',
                ],
              },
              {
                name: 'Unique Behaviour of the First Element',
                subtopics: ['Unique behaviour of the first element in each group'],
              },
            ],
          },
          {
            name: 'd- and f-Block Elements',
            topics: [
              {
                name: 'Transition Elements',
                subtopics: [
                  'General introduction, electronic configuration, occurrence and characteristics',
                  'General trends in the first-row transition elements: physical properties, ionization enthalpy, oxidation states, atomic radii',
                  'Colour, catalytic behaviour, magnetic properties, complex formation, interstitial compounds, alloy formation',
                ],
              },
              {
                name: 'Important Compounds',
                subtopics: [
                  'Preparation, properties and uses of K2Cr2O7 and KMnO4',
                ],
              },
              {
                name: 'Inner Transition Elements',
                subtopics: [
                  'Lanthanoids: electronic configuration, oxidation states and lanthanoid contraction',
                  'Actinoids: electronic configuration and oxidation states',
                ],
              },
            ],
          },
          {
            name: 'Coordination Compounds',
            topics: [
              {
                name: 'Introduction and Nomenclature',
                subtopics: [
                  'Werner’s theory; ligands, coordination number, denticity and chelation',
                  'IUPAC nomenclature of mononuclear coordination compounds',
                ],
              },
              {
                name: 'Isomerism and Bonding',
                subtopics: [
                  'Isomerism in coordination compounds',
                  'Valence bond approach and basic ideas of crystal field theory',
                ],
              },
              {
                name: 'Properties and Importance',
                subtopics: [
                  'Colour and magnetic properties',
                  'Importance in qualitative analysis, extraction of metals and biological systems',
                ],
              },
            ],
          },
          // Organic Chemistry
          {
            name: 'Purification and Characterisation of Organic Compounds',
            topics: [
              {
                name: 'Purification Methods',
                subtopics: [
                  'Crystallization, sublimation and distillation',
                  'Differential extraction and chromatography: principles and applications',
                ],
              },
              {
                name: 'Qualitative Analysis',
                subtopics: [
                  'Detection of nitrogen, sulphur, phosphorus and halogens',
                ],
              },
              {
                name: 'Quantitative Analysis',
                subtopics: [
                  'Estimation of carbon, hydrogen, nitrogen, halogens, sulphur and phosphorus (basic principles only)',
                  'Calculations of empirical and molecular formulae',
                  'Numerical problems in organic quantitative analysis',
                ],
              },
            ],
          },
          {
            name: 'Some Basic Principles of Organic Chemistry',
            topics: [
              {
                name: 'Structure and Classification',
                subtopics: [
                  'Tetravalency of carbon; shapes of simple molecules: hybridization (s and p)',
                  'Classification based on functional groups, including compounds containing halogens, oxygen, nitrogen and sulphur',
                  'Homologous series',
                ],
              },
              {
                name: 'Nomenclature and Isomerism',
                subtopics: [
                  'Trivial and IUPAC nomenclature',
                  'Structural and stereoisomerism',
                ],
              },
              {
                name: 'Bond Fission and Reactive Intermediates',
                subtopics: [
                  'Homolytic and heterolytic covalent bond fission',
                  'Free radicals, carbocations and carbanions; stability of carbocations and free radicals',
                  'Electrophiles and nucleophiles',
                ],
              },
              {
                name: 'Electronic Displacement in a Covalent Bond',
                subtopics: [
                  'Inductive effect and electromeric effect',
                  'Resonance and hyperconjugation',
                ],
              },
              {
                name: 'Types of Organic Reactions',
                subtopics: ['Substitution, addition, elimination and rearrangement'],
              },
            ],
          },
          {
            name: 'Hydrocarbons',
            topics: [
              {
                name: 'Alkanes',
                subtopics: [
                  'Classification, isomerism, IUPAC nomenclature; general methods of preparation, properties and reactions',
                  'Conformations: sawhorse and Newman projections (of ethane)',
                  'Mechanism of halogenation of alkanes',
                ],
              },
              {
                name: 'Alkenes',
                subtopics: [
                  'Geometrical isomerism',
                  'Mechanism of electrophilic addition',
                  'Addition of hydrogen, halogens, water and hydrogen halides (Markownikoff’s and peroxide effect)',
                  'Ozonolysis and polymerization',
                ],
              },
              {
                name: 'Alkynes',
                subtopics: [
                  'Acidic character',
                  'Addition of hydrogen, halogens, water and hydrogen halides',
                  'Polymerization',
                ],
              },
              {
                name: 'Aromatic Hydrocarbons',
                subtopics: [
                  'Nomenclature; benzene: structure and aromaticity',
                  'Mechanism of electrophilic substitution: halogenation and nitration',
                  'Friedel-Crafts alkylation and acylation',
                  'Directive influence of the functional group in monosubstituted benzene',
                ],
              },
            ],
          },
          {
            name: 'Organic Compounds Containing Halogens',
            topics: [
              {
                name: 'Haloalkanes and Haloarenes',
                subtopics: [
                  'General methods of preparation, properties and reactions',
                  'Nature of the C-X bond',
                  'Mechanisms of substitution reactions',
                ],
              },
              {
                name: 'Uses and Environmental Effects',
                subtopics: [
                  'Uses and environmental effects of chloroform, iodoform, freons and DDT',
                ],
              },
            ],
          },
          {
            name: 'Organic Compounds Containing Oxygen',
            topics: [
              {
                name: 'Alcohols',
                subtopics: [
                  'General methods of preparation, properties, reactions and uses',
                  'Identification of primary, secondary and tertiary alcohols',
                  'Mechanism of dehydration',
                ],
              },
              {
                name: 'Phenols',
                subtopics: [
                  'Acidic nature',
                  'Electrophilic substitution reactions: halogenation, nitration and sulphonation',
                  'Reimer-Tiemann reaction',
                ],
              },
              {
                name: 'Ethers',
                subtopics: ['Structure of ethers'],
              },
              {
                name: 'Aldehydes and Ketones',
                subtopics: [
                  'Nature of the carbonyl group; nucleophilic addition to the >C=O group',
                  'Relative reactivities of aldehydes and ketones',
                  'Nucleophilic addition reactions: HCN, NH3 and its derivatives; Grignard reagent',
                  'Oxidation; reduction (Wolff-Kishner and Clemmensen)',
                  'Acidity of α-hydrogen; aldol condensation, Cannizzaro reaction, haloform reaction',
                  'Chemical tests to distinguish between aldehydes and ketones',
                ],
              },
              {
                name: 'Carboxylic Acids',
                subtopics: ['Acidic strength and factors affecting it'],
              },
            ],
          },
          {
            name: 'Organic Compounds Containing Nitrogen',
            topics: [
              {
                name: 'Amines',
                subtopics: [
                  'General methods of preparation, properties, reactions and uses',
                  'Nomenclature, classification and structure',
                  'Basic character; identification of primary, secondary and tertiary amines',
                ],
              },
              {
                name: 'Diazonium Salts',
                subtopics: ['Importance in synthetic organic chemistry'],
              },
            ],
          },
          {
            name: 'Biomolecules',
            topics: [
              {
                name: 'Carbohydrates',
                subtopics: [
                  'Classification; aldoses and ketoses',
                  'Monosaccharides (glucose and fructose) and constituent monosaccharides of oligosaccharides (sucrose, lactose and maltose)',
                ],
              },
              {
                name: 'Proteins',
                subtopics: [
                  'Elementary idea of α-amino acids, peptide bond, polypeptides and proteins',
                  'Primary, secondary, tertiary and quaternary structures (qualitative idea only)',
                  'Denaturation of proteins; enzymes',
                ],
              },
              {
                name: 'Vitamins',
                subtopics: ['Classification and functions'],
              },
              {
                name: 'Nucleic Acids',
                subtopics: [
                  'Chemical constitution of DNA and RNA',
                  'Biological functions of nucleic acids',
                ],
              },
              {
                name: 'Hormones',
                subtopics: ['General introduction'],
              },
            ],
          },
          {
            name: 'Principles Related to Practical Chemistry',
            topics: [
              {
                name: 'Detection of Elements and Functional Groups',
                subtopics: [
                  'Detection of extra elements (nitrogen, sulphur, halogens) in organic compounds',
                  'Detection of hydroxyl (alcoholic and phenolic), carbonyl (aldehyde and ketone), carboxyl and amino groups',
                ],
              },
              {
                name: 'Chemistry of Preparations',
                subtopics: [
                  'Inorganic compounds: Mohr’s salt and potash alum',
                  'Organic compounds: acetanilide, p-nitro acetanilide, aniline yellow and iodoform',
                ],
              },
              {
                name: 'Titrimetric Exercises',
                subtopics: [
                  'Acids, bases and the use of indicators',
                  'Oxalic acid vs KMnO4; Mohr’s salt vs KMnO4',
                ],
              },
              {
                name: 'Qualitative Salt Analysis',
                subtopics: [
                  'Cations: Pb2+, Cu2+, Al3+, Fe3+, Zn2+, Ni2+, Ca2+, Ba2+, Mg2+, NH4+',
                  'Anions: CO3²−, S²−, SO4²−, NO3−, NO2−, Cl−, Br−, I− (insoluble salts excluded)',
                ],
              },
              {
                name: 'Physical Chemistry Experiments',
                subtopics: [
                  'Enthalpy of solution of CuSO4',
                  'Enthalpy of neutralization of a strong acid and a strong base',
                  'Preparation of lyophilic and lyophobic sols',
                  'Kinetic study of the reaction of iodide ions with hydrogen peroxide at room temperature',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Biology',
        units: [
          // Class 11 (NCERT Units I–V)
          {
            name: 'Diversity in Living World',
            topics: [
              {
                name: 'The Living World',
                subtopics: [
                  'What is living; biodiversity; need for classification',
                  'Taxonomy and systematics; concept of species and taxonomic hierarchy',
                  'Binomial nomenclature',
                ],
              },
              {
                name: 'Biological Classification',
                subtopics: [
                  'Five kingdom classification',
                  'Salient features and classification of Monera, Protista and Fungi into major groups',
                  'Lichens, viruses and viroids',
                ],
              },
              {
                name: 'Plant Kingdom',
                subtopics: [
                  'Salient features and classification of plants into major groups: algae, bryophytes, pteridophytes and gymnosperms',
                  'Three to five salient and distinguishing features and at least two examples of each category',
                ],
              },
              {
                name: 'Animal Kingdom',
                subtopics: [
                  'Salient features and classification of animals: non-chordates up to phylum level',
                  'Chordates up to class level',
                  'Three to five salient features and at least two examples of each category',
                ],
              },
            ],
          },
          {
            name: 'Structural Organisation in Animals and Plants',
            topics: [
              {
                name: 'Morphology of Flowering Plants',
                subtopics: [
                  'Morphology and modifications',
                  'Tissues; anatomy and functions of root, stem, leaf, inflorescence (cymose and racemose), flower, fruit and seed',
                  'Families: Malvaceae, Cruciferae, Leguminosae, Compositae and Graminae',
                ],
              },
              {
                name: 'Anatomy of Flowering Plants',
                subtopics: [
                  'Anatomy and functions of different parts of flowering plants (dealt with the relevant practicals)',
                ],
              },
              {
                name: 'Structural Organisation in Animals',
                subtopics: [
                  'Animal tissues',
                  'Morphology, anatomy and functions of the digestive, circulatory, respiratory, nervous and reproductive systems of an insect (frog) — brief account only',
                ],
              },
            ],
          },
          {
            name: 'Cell Structure and Function',
            topics: [
              {
                name: 'Cell: The Unit of Life',
                subtopics: [
                  'Cell theory and cell as the basic unit of life',
                  'Structure of prokaryotic and eukaryotic cells; plant cell and animal cell',
                  'Cell envelope, cell membrane and cell wall',
                  'Cell organelles: structure and function; endomembrane system (ER, Golgi bodies, lysosomes, vacuoles)',
                  'Mitochondria, ribosomes, plastids and microbodies; cytoskeleton, cilia, flagella and centrioles (ultrastructure and function)',
                  'Nucleus: nuclear membrane, chromatin and nucleolus',
                ],
              },
              {
                name: 'Biomolecules',
                subtopics: [
                  'Chemical constituents of living cells',
                  'Biomolecules: structure and function of proteins, carbohydrates, lipids and nucleic acids',
                  'Enzymes: types, properties, enzyme action, classification and nomenclature',
                ],
              },
              {
                name: 'Cell Cycle and Cell Division',
                subtopics: [
                  'Cell cycle',
                  'Mitosis and meiosis',
                  'Significance of mitosis and meiosis',
                ],
              },
            ],
          },
          {
            name: 'Plant Physiology',
            topics: [
              {
                name: 'Photosynthesis in Higher Plants',
                subtopics: [
                  'Photosynthesis as a means of autotrophic nutrition; site of photosynthesis',
                  'Pigments involved in photosynthesis (elementary idea); photochemical and biosynthetic phases',
                  'Cyclic and non-cyclic photophosphorylation; chemiosmotic hypothesis',
                  'Photorespiration; C3 and C4 pathways',
                  'Factors affecting photosynthesis',
                ],
              },
              {
                name: 'Respiration in Plants',
                subtopics: [
                  'Exchange of gases',
                  'Cellular respiration: glycolysis, fermentation (anaerobic), TCA cycle and electron transport system (aerobic)',
                  'Energy relations: number of ATP molecules generated',
                  'Amphibolic pathways; respiratory quotient',
                ],
              },
              {
                name: 'Plant Growth and Development',
                subtopics: [
                  'Seed germination; phases of plant growth and plant growth rate; conditions of growth',
                  'Differentiation, dedifferentiation and redifferentiation',
                  'Sequence of developmental processes in a plant cell',
                  'Growth regulators: auxin, gibberellin, cytokinin, ethylene and ABA',
                ],
              },
            ],
          },
          {
            name: 'Human Physiology',
            topics: [
              {
                name: 'Breathing and Exchange of Gases',
                subtopics: [
                  'Respiratory organs in animals (recall only); respiratory system in humans',
                  'Mechanism of breathing and its regulation: exchange of gases, transport of gases and regulation of respiration; respiratory volumes',
                  'Disorders related to respiration: asthma, emphysema and occupational respiratory disorders',
                ],
              },
              {
                name: 'Body Fluids and Circulation',
                subtopics: [
                  'Composition of blood; blood groups; coagulation of blood',
                  'Composition of lymph and its function',
                  'Human circulatory system: structure of the heart and blood vessels',
                  'Cardiac cycle, cardiac output, ECG and double circulation; regulation of cardiac activity',
                  'Disorders of the circulatory system: hypertension, coronary artery disease, angina pectoris and heart failure',
                ],
              },
              {
                name: 'Excretory Products and Their Elimination',
                subtopics: [
                  'Modes of excretion: ammonotelism, ureotelism and uricotelism',
                  'Human excretory system: structure and function; urine formation; osmoregulation',
                  'Regulation of kidney function: renin-angiotensin, atrial natriuretic factor, ADH and diabetes insipidus',
                  'Role of other organs in excretion',
                  'Disorders: uraemia, renal failure, renal calculi and nephritis; dialysis and artificial kidney',
                ],
              },
              {
                name: 'Locomotion and Movement',
                subtopics: [
                  'Types of movement: ciliary, flagellar and muscular',
                  'Skeletal muscle: contractile proteins and muscle contraction',
                  'Skeletal system and its functions; joints',
                  'Disorders of the muscular and skeletal system: myasthenia gravis, tetany, muscular dystrophy, arthritis, osteoporosis and gout',
                ],
              },
              {
                name: 'Neural Control and Coordination',
                subtopics: [
                  'Neuron and nerves',
                  'Nervous system in humans: central, peripheral and visceral nervous systems',
                  'Generation and conduction of nerve impulse',
                ],
              },
              {
                name: 'Chemical Coordination and Integration',
                subtopics: [
                  'Endocrine glands and hormones; human endocrine system',
                  'Hypothalamus, pituitary, pineal, thyroid, parathyroid, adrenal, pancreas and gonads',
                  'Mechanism of hormone action (elementary idea)',
                  'Role of hormones as messengers and regulators',
                  'Hypo- and hyperactivity and related disorders: dwarfism, acromegaly, cretinism, goitre, exophthalmic goitre, diabetes and Addison’s disease',
                ],
              },
            ],
          },
          // Class 12 (NCERT Units VI–X)
          {
            name: 'Reproduction',
            topics: [
              {
                name: 'Sexual Reproduction in Flowering Plants',
                subtopics: [
                  'Flower structure; development of male and female gametophytes',
                  'Pollination: types, agencies and examples; outbreeding devices',
                  'Pollen-pistil interaction; double fertilization',
                  'Post-fertilization events: development of endosperm and embryo; development of seed and formation of fruit',
                  'Special modes: apomixis, parthenocarpy and polyembryony; significance of seed and fruit formation',
                ],
              },
              {
                name: 'Human Reproduction',
                subtopics: [
                  'Male and female reproductive systems; microscopic anatomy of testis and ovary',
                  'Gametogenesis: spermatogenesis and oogenesis',
                  'Menstrual cycle; fertilisation, embryo development up to blastocyst formation and implantation',
                  'Pregnancy and placenta formation; parturition; lactation (elementary ideas)',
                ],
              },
              {
                name: 'Reproductive Health',
                subtopics: [
                  'Need for reproductive health and prevention of sexually transmitted diseases (STD)',
                  'Birth control: need and methods; contraception and medical termination of pregnancy (MTP)',
                  'Amniocentesis',
                  'Infertility and assisted reproductive technologies: IVF, ZIFT and GIFT (elementary idea for general awareness)',
                ],
              },
            ],
          },
          {
            name: 'Genetics and Evolution',
            topics: [
              {
                name: 'Principles of Inheritance and Variation',
                subtopics: [
                  'Heredity and variation: Mendelian inheritance',
                  'Deviations from Mendelism: incomplete dominance, co-dominance, multiple alleles and inheritance of blood groups, pleiotropy',
                  'Elementary idea of polygenic inheritance; chromosome theory of inheritance; chromosomes and genes',
                  'Sex determination in humans, birds and honey bee; linkage and crossing over',
                  'Sex-linked inheritance: haemophilia and colour blindness',
                  'Mendelian disorders in humans: thalassemia',
                  'Chromosomal disorders in humans: Down’s, Turner’s and Klinefelter’s syndromes',
                ],
              },
              {
                name: 'Molecular Basis of Inheritance',
                subtopics: [
                  'Search for genetic material and DNA as genetic material',
                  'Structure of DNA and RNA; DNA packaging; DNA replication',
                  'Central dogma; transcription, genetic code and translation',
                  'Gene expression and regulation: lac operon',
                  'Genome and the human genome project',
                  'DNA fingerprinting and protein biosynthesis',
                ],
              },
              {
                name: 'Evolution',
                subtopics: [
                  'Origin of life; biological evolution and evidences from paleontology, comparative anatomy, embryology and molecular evidence',
                  'Darwin’s contribution; modern synthetic theory of evolution',
                  'Mechanism of evolution: variation (mutation and recombination) and natural selection with examples, types of natural selection',
                  'Gene flow and genetic drift; Hardy-Weinberg’s principle',
                  'Adaptive radiation; human evolution',
                ],
              },
            ],
          },
          {
            name: 'Biology and Human Welfare',
            topics: [
              {
                name: 'Human Health and Disease',
                subtopics: [
                  'Health and disease; pathogens and parasites causing human diseases',
                  'Malaria, filariasis, ascariasis, typhoid, pneumonia, common cold, amoebiasis, ringworm, dengue and chikungunya',
                  'Basic concepts of immunology: vaccines',
                  'Cancer, HIV and AIDS',
                  'Adolescence: drug and alcohol abuse; tobacco abuse',
                ],
              },
              {
                name: 'Microbes in Human Welfare',
                subtopics: [
                  'Microbes in household food processing',
                  'Microbes in industrial production, sewage treatment and energy generation',
                  'Microbes as biocontrol agents and biofertilizers',
                ],
              },
            ],
          },
          {
            name: 'Biotechnology and its Applications',
            topics: [
              {
                name: 'Biotechnology: Principles and Processes',
                subtopics: [
                  'Principles and processes of biotechnology',
                  'Genetic engineering (recombinant DNA technology)',
                  'Tools of recombinant DNA technology: enzymes, vectors and host cells',
                  'Processes: transformation, amplification (PCR) and selection of recombinants',
                ],
              },
              {
                name: 'Biotechnology and its Applications',
                subtopics: [
                  'Applications in health: human insulin and vaccine production; gene therapy',
                  'Genetically modified organisms: Bt crops',
                  'Transgenic animals',
                  'Biosafety issues: biopiracy and patents',
                ],
              },
            ],
          },
          {
            name: 'Ecology and Environment',
            topics: [
              {
                name: 'Organisms and Populations',
                subtopics: [
                  'Organisms and their environment',
                  'Population interactions: mutualism, competition, predation and parasitism',
                  'Population attributes: growth, birth rate and death rate, age distribution',
                ],
              },
              {
                name: 'Ecosystem',
                subtopics: [
                  'Ecosystem: patterns and components',
                  'Productivity and decomposition',
                  'Energy flow',
                  'Pyramids of number, biomass and energy',
                ],
              },
              {
                name: 'Biodiversity and its Conservation',
                subtopics: [
                  'Concept of biodiversity; patterns of biodiversity; importance of biodiversity; loss of biodiversity',
                  'Biodiversity conservation: hotspots, endangered organisms and extinction',
                  'Red Data Book; biosphere reserves, national parks, sanctuaries and sacred groves',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

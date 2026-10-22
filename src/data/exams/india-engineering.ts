import type { CuratedExam } from './types'

/**
 * India engineering entrance exams — curated official syllabi.
 *
 * Sources: NTA (JEE Main 2026 official syllabus PDF, verified live),
 * JAB / organising IIT (JEE Advanced revised syllabus, in force since 2023),
 * BITS Pilani (BITSAT-2026 official syllabus annexure, verified live).
 */

export const INDIA_ENGINEERING_EXAMS: CuratedExam[] = [
  {
    id: 'jee-main',
    name: 'JEE Main',
    fullName: 'Joint Entrance Examination Main',
    aliases: ['jee mains', 'joint entrance exam main', 'iit jee main', 'aieee'],
    region: 'India',
    category: 'Engineering entrance',
    popularity: 98,
    syllabusVerified: '2026-10-20',
    website: 'https://jeemain.nta.nic.in',
    overview: {
      conductor: 'National Testing Agency (NTA)',
      level: 'Class 11–12 → BTech/BE/BArch admission',
      papers: ['Paper 1: BTech (Physics, Chemistry, Mathematics)', 'Paper 2: BArch/BPlanning'],
      duration: 'Paper 1: 3 h · 75 questions (25 per subject: 20 MCQ + 5 numerical, all compulsory)',
      marking: 'Paper 1: 300 marks; +4 correct / −1 incorrect MCQ',
      negativeMarking:
        '−1 per incorrect MCQ; numerical value questions (Section B) carry NO negative marking under the 2025+ policy — the 2024 cycle had briefly applied −1 to numericals as well',
      questionTypes: ['MCQ (4 options)', 'Numerical value questions'],
      notes:
        'Computer-based test held in two sessions per year (January and April); a candidate’s best session score counts. Syllabus follows the NTA-reduced syllabus in force since the 2024 cycle (2026 official syllabus PDF verified) — chapters dropped in the reduction (States of Matter, Hydrogen, s-Block, Polymers, Chemistry in Everyday Life, Communication Systems etc.) are not tested. Paper 2 Drawing portion is pen-and-paper.',
    },
    sources: [
      { title: 'JEE Main — Information Bulletin & Syllabus', url: 'https://jeemain.nta.nic.in', host: 'jeemain.nta.nic.in' },
    ],
    subjects: [
      {
        name: 'Physics',
        mappedSubjectId: 'physics',
        units: [
          {
            name: 'Units and Measurements',
            topics: [
              {
                name: 'Measurement and Units',
                subtopics: [
                  'Units of measurement and systems of units',
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
                  'Velocity-time and position-time graphs; relations for uniformly accelerated motion',
                  'Relative velocity',
                ],
              },
              {
                name: 'Motion in a Plane',
                subtopics: ['Projectile motion', 'Uniform circular motion'],
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
                  'Potential energy of a spring',
                  'Conservation of mechanical energy',
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
                name: 'Elasticity',
                subtopics: [
                  'Elastic behaviour; stress-strain relationship',
                  'Hooke’s law',
                  'Young’s modulus, bulk modulus and modulus of rigidity',
                ],
              },
              {
                name: 'Fluid Statics and Dynamics',
                subtopics: [
                  'Pressure due to a fluid column; Pascal’s law and its applications',
                  'Effect of gravity on fluid pressure',
                  'Viscosity; Stokes’ law and terminal velocity',
                  'Streamline and turbulent flow; critical velocity',
                  'Bernoulli’s principle and its applications',
                ],
              },
              {
                name: 'Surface Tension',
                subtopics: [
                  'Surface energy and surface tension; angle of contact',
                  'Excess of pressure across a curved surface',
                  'Applications of surface tension: drops, bubbles and capillary rise',
                ],
              },
              {
                name: 'Thermal Properties of Matter',
                subtopics: [
                  'Heat, temperature and thermal expansion',
                  'Specific heat capacity and calorimetry',
                  'Change of state and latent heat',
                ],
              },
              {
                name: 'Heat Transfer',
                subtopics: ['Conduction', 'Convection', 'Radiation'],
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
                name: 'Simple Harmonic Motion',
                subtopics: [
                  'Oscillations and periodic motion: time period, frequency, displacement as a function of time; periodic functions',
                  'S.H.M. equation and phase',
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
          {
            name: 'Electrostatics',
            topics: [
              {
                name: 'Electric Charges and Coulomb’s Law',
                subtopics: [
                  'Conservation of charge',
                  'Coulomb’s law: forces between two point charges',
                  'Forces between multiple charges; superposition principle and continuous charge distribution',
                ],
              },
              {
                name: 'Electric Field and Dipole',
                subtopics: [
                  'Electric field due to a point charge; electric field lines',
                  'Electric dipole and electric field due to a dipole',
                  'Torque on a dipole in a uniform electric field',
                ],
              },
              {
                name: 'Gauss’s Law',
                subtopics: [
                  'Electric flux; Gauss’s law',
                  'Field due to an infinitely long uniformly charged straight wire',
                  'Field due to a uniformly charged infinite plane sheet',
                  'Field due to a uniformly charged thin spherical shell',
                ],
              },
              {
                name: 'Electric Potential',
                subtopics: [
                  'Electric potential and potential difference; calculation for a point charge, dipole and system of charges',
                  'Equipotential surfaces',
                  'Electrical potential energy of two point charges and of a dipole in an electrostatic field',
                ],
              },
              {
                name: 'Capacitance',
                subtopics: [
                  'Conductors and insulators; dielectrics and electric polarization',
                  'Combination of capacitors in series and parallel',
                  'Parallel-plate capacitor with and without dielectric medium between the plates',
                  'Energy stored in a capacitor',
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
                  'I-V characteristics of ohmic and non-ohmic conductors',
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
                name: 'Magnetic Field Due to Currents',
                subtopics: [
                  'Biot-Savart law and its application to a current-carrying circular loop',
                  'Ampere’s law and its applications: infinitely long straight wire and solenoid',
                ],
              },
              {
                name: 'Force and Torque in Magnetic Fields',
                subtopics: [
                  'Force on a moving charge in uniform magnetic and electric fields',
                  'Force on a current-carrying conductor in a uniform magnetic field',
                  'Force between two parallel current-carrying conductors; definition of the ampere',
                  'Torque experienced by a current loop in a uniform magnetic field',
                  'Moving coil galvanometer: sensitivity and conversion to ammeter and voltmeter',
                ],
              },
              {
                name: 'Magnetic Dipoles and Magnetic Materials',
                subtopics: [
                  'Current loop as a magnetic dipole and its magnetic dipole moment',
                  'Bar magnet as an equivalent solenoid; magnetic field lines',
                  'Magnetic field due to a magnetic dipole along its axis and perpendicular to its axis',
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
                name: 'Alternating Currents',
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
                name: 'Ray Optics',
                subtopics: [
                  'Reflection of light; spherical mirrors; mirror formula',
                  'Refraction of light at plane and spherical surfaces',
                  'Thin lens formula and lens maker formula',
                  'Total internal reflection and its applications',
                  'Magnification; power of a lens; combination of thin lenses in contact',
                  'Refraction of light through a prism',
                ],
              },
              {
                name: 'Optical Instruments',
                subtopics: [
                  'Microscope and astronomical telescope (reflecting and refracting)',
                  'Magnifying powers',
                ],
              },
              {
                name: 'Wave Optics',
                subtopics: [
                  'Wavefront and Huygens principle; laws of reflection and refraction using wavefronts',
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
                name: 'Atomic Models',
                subtopics: [
                  'Alpha-particle scattering experiment',
                  'Rutherford’s model of atom; Bohr model and energy levels',
                  'Hydrogen spectrum',
                ],
              },
              {
                name: 'Nucleus',
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
                  'Zener diode as a voltage regulator',
                ],
              },
              {
                name: 'Logic Gates',
                subtopics: ['OR, AND, NOT, NAND and NOR gates'],
              },
            ],
          },
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
                  'State functions; entropy; types of processes',
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
                  'Spontaneity of processes',
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
                  'Equilibria involving physical processes: solid-liquid, liquid-gas, gas-gas and solid-gas; Henry’s law',
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
                  'Solubility of sparingly soluble salts and solubility product; buffer solutions',
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
        name: 'Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Sets, Relations and Functions',
            topics: [
              {
                name: 'Sets',
                subtopics: [
                  'Sets and their representation',
                  'Union, intersection and complement of sets and their algebraic properties',
                  'Power set',
                ],
              },
              {
                name: 'Relations',
                subtopics: ['Types of relations', 'Equivalence relations'],
              },
              {
                name: 'Functions',
                subtopics: [
                  'One-one, into and onto functions',
                  'Composition of functions',
                ],
              },
            ],
          },
          {
            name: 'Complex Numbers and Quadratic Equations',
            topics: [
              {
                name: 'Complex Numbers',
                subtopics: [
                  'Complex numbers as ordered pairs of reals; representation in the form a + ib and in a plane',
                  'Argand diagram; algebra of complex numbers',
                  'Modulus and argument (amplitude) of a complex number',
                ],
              },
              {
                name: 'Quadratic Equations',
                subtopics: [
                  'Quadratic equations in real and complex number systems and their solutions',
                  'Relations between roots and coefficients; nature of roots',
                  'Formation of quadratic equations with given roots',
                ],
              },
            ],
          },
          {
            name: 'Matrices and Determinants',
            topics: [
              {
                name: 'Matrices',
                subtopics: ['Algebra of matrices', 'Types of matrices'],
              },
              {
                name: 'Determinants',
                subtopics: [
                  'Determinants and matrices of order two and three; evaluation of determinants',
                  'Area of triangles using determinants',
                  'Adjoint and inverse of a square matrix',
                ],
              },
              {
                name: 'Solving Linear Systems',
                subtopics: [
                  'Test of consistency of simultaneous linear equations',
                  'Solution of simultaneous linear equations in two or three variables using matrices',
                ],
              },
            ],
          },
          {
            name: 'Permutations and Combinations',
            topics: [
              {
                name: 'Counting and Permutations',
                subtopics: [
                  'Fundamental principle of counting',
                  'Meaning of P(n, r)',
                  'Simple applications',
                ],
              },
              {
                name: 'Combinations',
                subtopics: [
                  'Meaning of C(n, r)',
                  'Selections and arrangements',
                ],
              },
            ],
          },
          {
            name: 'Binomial Theorem and Its Simple Applications',
            topics: [
              {
                name: 'Binomial Theorem',
                subtopics: ['Binomial theorem for a positive integral index'],
              },
              {
                name: 'General and Middle Terms',
                subtopics: ['General term and middle term', 'Simple applications'],
              },
            ],
          },
          {
            name: 'Sequence and Series',
            topics: [
              {
                name: 'Arithmetic Progression',
                subtopics: [
                  'Arithmetic progressions',
                  'Insertion of arithmetic means between two given numbers',
                ],
              },
              {
                name: 'Geometric Progression',
                subtopics: [
                  'Geometric progressions',
                  'Insertion of geometric means between two given numbers',
                ],
              },
              {
                name: 'A.M. and G.M.',
                subtopics: ['Relation between A.M. and G.M.'],
              },
            ],
          },
          {
            name: 'Limit, Continuity and Differentiability',
            topics: [
              {
                name: 'Real Functions and Limits',
                subtopics: [
                  'Real-valued functions; algebra of functions',
                  'Polynomial, rational, trigonometric, logarithmic and exponential functions; inverse functions',
                  'Graphs of simple functions; limits',
                ],
              },
              {
                name: 'Continuity and Differentiation',
                subtopics: [
                  'Continuity and differentiability',
                  'Differentiation of the sum, difference, product and quotient of two functions',
                  'Differentiation of trigonometric, inverse trigonometric, logarithmic, exponential, composite and implicit functions',
                  'Derivatives of order up to two',
                ],
              },
              {
                name: 'Applications of Derivatives',
                subtopics: [
                  'Rate of change of quantities',
                  'Monotonic: increasing and decreasing functions',
                  'Maxima and minima of functions of one variable',
                ],
              },
            ],
          },
          {
            name: 'Integral Calculus',
            topics: [
              {
                name: 'Indefinite Integrals',
                subtopics: [
                  'Integral as an anti-derivative',
                  'Fundamental integrals involving algebraic, trigonometric, exponential and logarithmic functions',
                  'Integration by substitution, by parts and by partial fractions',
                  'Integration using trigonometric identities',
                ],
              },
              {
                name: 'Definite Integrals',
                subtopics: [
                  'Fundamental theorem of calculus',
                  'Properties of definite integrals; evaluation of definite integrals',
                ],
              },
              {
                name: 'Area Under Curves',
                subtopics: [
                  'Determining areas of the regions bounded by simple curves in standard forms',
                ],
              },
            ],
          },
          {
            name: 'Differential Equations',
            topics: [
              {
                name: 'Basics of Differential Equations',
                subtopics: [
                  'Ordinary differential equations and their order and degree',
                ],
              },
              {
                name: 'Solutions of Differential Equations',
                subtopics: [
                  'Solution by the method of separation of variables',
                  'Solution of homogeneous and linear differential equations of the type dy/dx + p(x)y = q(x)',
                ],
              },
            ],
          },
          {
            name: 'Coordinate Geometry',
            topics: [
              {
                name: 'Straight Lines',
                subtopics: [
                  'Cartesian system of rectangular coordinates; distance formula; section formula; locus and its equation',
                  'Slope of a line; parallel and perpendicular lines; intercepts of a line on the coordinate axes',
                  'Various forms of equations of a line; intersection of lines; angle between two lines',
                  'Conditions for concurrence of three lines; distance of a point from a line',
                  'Centroid, orthocentre and circumcentre of a triangle',
                ],
              },
              {
                name: 'Circles',
                subtopics: [
                  'Standard and general forms of the equation of a circle; radius and centre',
                  'Equation of a circle when the endpoints of a diameter are given',
                  'Points of intersection of a line and a circle with the centre at the origin',
                ],
              },
              {
                name: 'Conic Sections',
                subtopics: [
                  'Sections of conics',
                  'Equations of conic sections (parabola, ellipse and hyperbola) in standard forms',
                ],
              },
            ],
          },
          {
            name: 'Three Dimensional Geometry',
            topics: [
              {
                name: 'Coordinates and Lines in Space',
                subtopics: [
                  'Coordinates of a point in space; distance between two points; section formula',
                  'Direction ratios and direction cosines; angle between two intersecting lines',
                ],
              },
              {
                name: 'Lines and Skew Lines',
                subtopics: [
                  'Equation of a line',
                  'Skew lines; the shortest distance between them and its equation',
                ],
              },
            ],
          },
          {
            name: 'Vector Algebra',
            topics: [
              {
                name: 'Vectors and Scalars',
                subtopics: [
                  'Vectors and scalars; addition of vectors',
                  'Components of a vector in two dimensions and three-dimensional space',
                ],
              },
              {
                name: 'Scalar and Vector Products',
                subtopics: ['Scalar product', 'Vector product'],
              },
            ],
          },
          {
            name: 'Statistics and Probability',
            topics: [
              {
                name: 'Statistics',
                subtopics: [
                  'Measures of dispersion',
                  'Calculation of mean, median and mode of grouped and ungrouped data',
                  'Calculation of standard deviation, variance and mean deviation for grouped and ungrouped data',
                ],
              },
              {
                name: 'Probability',
                subtopics: [
                  'Probability of an event',
                  'Addition and multiplication theorems of probability; Baye’s theorem',
                  'Probability distribution of a random variable',
                ],
              },
            ],
          },
          {
            name: 'Trigonometry',
            topics: [
              {
                name: 'Trigonometrical Identities and Functions',
                subtopics: [
                  'Trigonometrical identities',
                  'Trigonometrical functions',
                ],
              },
              {
                name: 'Inverse Trigonometrical Functions',
                subtopics: ['Inverse trigonometrical functions and their properties'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'jee-advanced',
    name: 'JEE Advanced',
    fullName: 'Joint Entrance Examination Advanced',
    aliases: ['jee adv', 'iit jee', 'joint entrance exam advanced', 'iit entrance exam'],
    region: 'India',
    category: 'Engineering entrance',
    popularity: 92,
    syllabusVerified: '2026-10-20',
    website: 'https://jeeadv.ac.in',
    overview: {
      conductor: 'IIT (rotating organising institute) under the Joint Admission Board (JAB)',
      level: 'Class 11–12 → BTech admission to the IITs (via JEE Main qualification)',
      stages: ['JEE Main (qualifying) → JEE Advanced'],
      papers: ['Paper 1 and Paper 2 — both compulsory, held the same day'],
      duration: '2 × 3 h',
      marking:
        'Varies section to section: full, partial and negative marks are possible (e.g. +4/−2, +3/−1, +2/−1); the exact scheme is disclosed with each paper',
      negativeMarking:
        'Negative marking in most sections (−1 to −2); some multiple-correct sections award partial marks',
      questionTypes: [
        'MCQ with one correct option',
        'MCQ with one or more correct options (partial marking)',
        'Numerical value questions',
        'Matching list questions',
      ],
      notes:
        'Computer-based test; only the top JEE Main qualifiers (about 2.5 lakh candidates) may register each year. Syllabus follows the revised JEE Advanced syllabus in force since the 2023 examination.',
    },
    sources: [
      { title: 'JEE Advanced — Official Syllabus', url: 'https://jeeadv.ac.in', host: 'jeeadv.ac.in' },
    ],
    subjects: [
      {
        name: 'Physics',
        mappedSubjectId: 'physics',
        units: [
          {
            name: 'General',
            topics: [
              {
                name: 'Units, Dimensions and Measurement',
                subtopics: [
                  'Units and dimensions; dimensional analysis',
                  'Least count and significant figures',
                  'Methods of measurement and error analysis',
                ],
              },
              {
                name: 'Experimental Methods',
                subtopics: [
                  'Vernier calipers and screw gauge (micrometer) experiments',
                  'Determination of g using a simple pendulum',
                  'Young’s modulus by Searle’s method',
                  'Specific heat of a liquid using a calorimeter',
                  'Focal length of a concave mirror and a convex lens using the u-v method',
                  'Speed of sound using a resonance column; Ohm’s law and specific resistance via metre bridge and post office box',
                ],
              },
            ],
          },
          {
            name: 'Mechanics',
            topics: [
              {
                name: 'Kinematics',
                subtopics: [
                  'Kinematics in one and two dimensions (Cartesian coordinates only); projectiles',
                  'Uniform circular motion',
                  'Relative velocity',
                ],
              },
              {
                name: 'Newton’s Laws, Friction and Energy',
                subtopics: [
                  'Newton’s laws of motion; inertial and uniformly accelerated frames of reference',
                  'Static and dynamic friction',
                  'Kinetic and potential energy; work and power',
                  'Conservation of linear momentum and mechanical energy',
                ],
              },
              {
                name: 'Systems of Particles and Collisions',
                subtopics: [
                  'Systems of particles; centre of mass and its motion',
                  'Impulse',
                  'Elastic and inelastic collisions',
                ],
              },
              {
                name: 'Gravitation',
                subtopics: [
                  'Law of gravitation; gravitational potential and field',
                  'Acceleration due to gravity',
                  'Motion of planets and satellites in circular orbits; escape velocity',
                ],
              },
              {
                name: 'Rigid Body Dynamics',
                subtopics: [
                  'Moment of inertia; parallel and perpendicular axes theorems; moments of inertia of uniform bodies with simple geometrical shapes',
                  'Angular momentum and torque; conservation of angular momentum',
                  'Dynamics of rigid bodies with a fixed axis of rotation',
                  'Rolling without slipping of rings, cylinders and spheres',
                  'Equilibrium of rigid bodies; collisions of point masses with rigid bodies',
                ],
              },
              {
                name: 'Oscillations and Elasticity',
                subtopics: [
                  'Linear and angular simple harmonic motions',
                  'Hooke’s law and Young’s modulus',
                ],
              },
              {
                name: 'Fluid Mechanics',
                subtopics: [
                  'Pressure in a fluid; Pascal’s law; buoyancy',
                  'Surface energy and surface tension; capillary rise',
                  'Viscosity and Stokes’ law; terminal velocity',
                  'Streamline flow; equation of continuity and Bernoulli’s theorem',
                ],
              },
              {
                name: 'Waves',
                subtopics: [
                  'Wave motion (plane waves only); longitudinal and transverse waves; superposition',
                  'Progressive and stationary waves; vibration of strings and air columns',
                  'Resonance and beats',
                  'Speed of sound in gases; Doppler effect (in sound)',
                ],
              },
            ],
          },
          {
            name: 'Thermal Physics',
            topics: [
              {
                name: 'Thermal Expansion and Calorimetry',
                subtopics: [
                  'Thermal expansion of solids, liquids and gases',
                  'Calorimetry and latent heat',
                  'Heat conduction in one dimension; elementary concepts of convection and radiation',
                  'Newton’s law of cooling',
                ],
              },
              {
                name: 'Kinetic Theory and Ideal Gases',
                subtopics: [
                  'Ideal gas laws',
                  'Specific heats (Cv and Cp) of monoatomic and diatomic gases',
                  'Isothermal and adiabatic processes; bulk modulus of gases',
                ],
              },
              {
                name: 'Laws of Thermodynamics',
                subtopics: [
                  'Equivalence of heat and work; first law and its applications (ideal gases only)',
                  'Second law; reversible and irreversible processes',
                  'Carnot engine and its efficiency',
                ],
              },
              {
                name: 'Blackbody Radiation',
                subtopics: [
                  'Absorptive and emissive powers; Kirchhoff’s law',
                  'Wien’s displacement law and Stefan’s law',
                ],
              },
            ],
          },
          {
            name: 'Electricity and Magnetism',
            topics: [
              {
                name: 'Electrostatics',
                subtopics: [
                  'Coulomb’s law; electric field and potential',
                  'Potential energy of systems of point charges and of dipoles in a uniform electrostatic field',
                  'Electric field lines; flux of the electric field; Gauss’s law and simple applications',
                  'Capacitance; parallel-plate capacitor with and without dielectrics; capacitors in series and parallel',
                  'Energy stored in a capacitor',
                ],
              },
              {
                name: 'Current Electricity',
                subtopics: [
                  'Electric current and Ohm’s law',
                  'Series and parallel arrangements of resistances and cells',
                  'Kirchhoff’s laws and simple applications',
                  'Heating effect of current',
                ],
              },
              {
                name: 'Magnetic Effects of Current and Magnetism',
                subtopics: [
                  'Biot-Savart’s law and Ampere’s law: straight wire, axis of a circular coil, solenoid',
                  'Force on a moving charge and on a current-carrying wire in a uniform magnetic field',
                  'Magnetic moment of a current loop; effect of a uniform magnetic field on a current loop',
                  'Moving coil galvanometer; conversion to voltmeter and ammeter',
                ],
              },
              {
                name: 'Electromagnetic Induction and AC Circuits',
                subtopics: [
                  'Faraday’s law and Lenz’s law; self and mutual inductance',
                  'RC, LR, LC and LCR (series) circuits with d.c. and a.c. sources',
                ],
              },
            ],
          },
          {
            name: 'Optics',
            topics: [
              {
                name: 'Ray Optics',
                subtopics: [
                  'Rectilinear propagation of light',
                  'Reflection and refraction at plane and spherical surfaces; total internal reflection',
                  'Deviation and dispersion of light by a prism',
                  'Thin lenses; combinations of mirrors and thin lenses; magnification',
                ],
              },
              {
                name: 'Wave Optics',
                subtopics: [
                  'Wave nature of light: Huygens’ principle',
                  'Interference limited to Young’s double-slit experiment',
                ],
              },
            ],
          },
          {
            name: 'Modern Physics',
            topics: [
              {
                name: 'Atomic Nucleus and Radioactivity',
                subtopics: [
                  'Atomic nucleus; alpha, beta and gamma radiations',
                  'Law of radioactive decay; decay constant; half-life and mean life',
                  'Binding energy and its calculation',
                  'Fission and fusion processes; energy calculations',
                ],
              },
              {
                name: 'Quantum and Atomic Physics',
                subtopics: [
                  'Photoelectric effect',
                  'Bohr’s theory of hydrogen-like atoms',
                  'Characteristic and continuous X-rays; Moseley’s law',
                  'de Broglie wavelength of matter waves',
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
          {
            name: 'Physical Chemistry',
            topics: [
              {
                name: 'Gaseous and Liquid States',
                subtopics: [
                  'Ideal gas equation; deviation from ideality (compressibility factor)',
                  'van der Waals equation',
                  'Kinetic theory of gases including Maxwell’s law of distribution of molecular velocities',
                  'Mean free path',
                  'Liquids: vapour pressure, surface tension, viscosity',
                ],
              },
              {
                name: 'Atomic Structure',
                subtopics: [
                  'Bohr models and spectrum of the hydrogen atom; quantum numbers',
                  'Wave-particle duality, de Broglie hypothesis and uncertainty principle',
                  'Qualitative quantum mechanical picture of the hydrogen atom; shapes of s, p and d orbitals',
                  'Electronic configurations of elements (up to atomic number 36)',
                  'Aufbau principle, Pauli’s exclusion principle and Hund’s rule',
                ],
              },
              {
                name: 'Chemical Bonding and Molecular Structure',
                subtopics: [
                  'Orbital overlap and the covalent bond; hybridisation involving s, p and d orbitals',
                  'Orbital energy diagrams for homonuclear diatomic species',
                  'Hydrogen bond; polarity in molecules and dipole moment (qualitative)',
                  'VSEPR model and shapes of molecules',
                ],
              },
              {
                name: 'Chemical Thermodynamics',
                subtopics: [
                  'Intensive and extensive properties; state functions',
                  'First law: internal energy, work (pressure-volume type) and heat',
                  'Enthalpy; Hess’s law; heats of reaction, fusion and vapourization',
                  'Second law and entropy; free energy; criterion of spontaneity',
                  'Equilibrium constant in terms of Gibbs energy',
                ],
              },
              {
                name: 'Chemical Equilibrium',
                subtopics: [
                  'Law of mass action; equilibrium constant (Kp and Kc)',
                  'Le Chatelier’s principle (qualitative)',
                  'Acids and bases (Bronsted and Lewis concepts), pH and buffer solutions',
                  'Solubility product and common-ion effect',
                ],
              },
              {
                name: 'Electrochemistry',
                subtopics: [
                  'Electrochemical cells and cell reactions; standard electrode potentials',
                  'Nernst equation and its relation to Gibbs energy; electrochemical series',
                  'Faraday’s laws of electrolysis',
                  'Electrolytic conductance: specific, equivalent and molar conductivity; Kohlrausch’s law',
                  'Batteries (primary and secondary), fuel cells; corrosion',
                ],
              },
              {
                name: 'Chemical Kinetics',
                subtopics: [
                  'Rates of chemical reactions; order of reactions; rate constant',
                  'First-order reactions',
                  'Temperature dependence of the rate constant (Arrhenius equation)',
                ],
              },
              {
                name: 'Solid State',
                subtopics: [
                  'Classification of solids; crystalline state and the seven crystal systems',
                  'Close-packed structures of solids (cubic only): fcc, bcc and hcp lattices',
                  'Packing efficiency and unit-cell density calculations',
                  'Voids and point defects',
                ],
              },
              {
                name: 'Solutions',
                subtopics: [
                  'Henry’s law',
                  'Raoult’s law and ideal solutions',
                  'Colligative properties; determination of molecular mass',
                  'Abnormal colligative properties (van’t Hoff factor)',
                ],
              },
              {
                name: 'Surface Chemistry',
                subtopics: [
                  'Elementary concepts of adsorption (excluding adsorption isotherms)',
                  'Colloids: types, methods of preparation and general properties',
                  'Elementary ideas of emulsions, surfactants and micelles (definitions and examples)',
                ],
              },
              {
                name: 'Nuclear Chemistry',
                subtopics: [
                  'Radioactivity: isotopes and isobars; properties of α, β and γ rays',
                  'Kinetics of radioactive decay (decay series excluded); mass defect and binding energy calculations',
                  'Applications such as carbon dating',
                ],
              },
            ],
          },
          {
            name: 'Inorganic Chemistry',
            topics: [
              {
                name: 'Isolation, Preparation and Properties of Non-Metals',
                subtopics: [
                  'Preparation, properties and reactions of boron, silicon, nitrogen, phosphorus, oxygen, sulphur and halogens',
                  'Properties of allotropes of carbon (diamond and graphite), phosphorus and sulphur',
                ],
              },
              {
                name: 'Preparation, Properties and Reactions of Compounds',
                subtopics: [
                  'Boron: boric acid, borax and boron halides',
                  'Silicon: silicates, silicones, silicon tetrachloride and zeolites',
                  'Nitrogen: ammonia and the oxides and oxyacids of nitrogen',
                  'Phosphorus: oxides, oxyacids, phosphine and phosphorus halides (PCl3, PCl5)',
                  'Oxygen: ozone and hydrogen peroxide',
                  'Sulphur: hydrogen sulphide, oxides, sulphuric acid and sodium thiosulphate',
                  'Halogens: hydrohalic acids, oxides and oxyacids of chlorine, bleaching powder',
                ],
              },
              {
                name: 'Transition Elements (3d Series)',
                subtopics: [
                  'General introduction, electronic configuration, occurrence and characteristics',
                  'General trends: physical properties, ionization enthalpy, oxidation states, atomic radii, colour',
                  'Catalytic behaviour, magnetic properties, complex formation, interstitial compounds, alloy formation',
                  'Preparation, properties and uses of K2Cr2O7 and KMnO4',
                ],
              },
              {
                name: 'Ores and Minerals',
                subtopics: [
                  'Commonly occurring ores and minerals of iron, copper, tin, lead and magnesium',
                  'Ores of aluminium, zinc and silver',
                ],
              },
              {
                name: 'Extractive Metallurgy',
                subtopics: [
                  'Chemical principles and reactions only (industrial details excluded)',
                  'Carbon reduction and thermite process',
                  'Self-reduction; electrolytic and hydrometallurgical processes (elementary idea)',
                  'Refining: van Arkel method, zone refining and Mond process (examples only)',
                ],
              },
              {
                name: 'Principles of Qualitative Analysis',
                subtopics: [
                  'Group analysis of cations: Ag+, Hg2+, Cu2+, Pb2+, Bi3+, Fe3+, Cr3+, Al3+, Ca2+, Ba2+, Zn2+, Mn2+, Mg2+',
                  'Anion detection: nitrate, halides (excluding fluoride), sulphate and sulphide',
                ],
              },
            ],
          },
          {
            name: 'Organic Chemistry',
            topics: [
              {
                name: 'Concepts',
                subtopics: [
                  'Hybridisation of carbon; sigma and pi bonds; shapes of simple organic molecules',
                  'Structural and geometrical isomerism; optical isomerism of compounds with up to two asymmetric centres',
                  'IUPAC nomenclature of simple organic compounds (hydrocarbons; mono- and bi-functional compounds)',
                  'Conformations of ethane and butane (Newman projections)',
                  'Determination of empirical and molecular formulae (combustion method)',
                ],
              },
              {
                name: 'Electronic Effects and Reactive Intermediates',
                subtopics: [
                  'Resonance and hyperconjugation; keto-enol tautomerism',
                  'Inductive and resonance effects on acidity and basicity of organic acids and bases',
                  'Hydrogen bonds and their effects on the physical properties of alcohols and carboxylic acids',
                  'Reactive intermediates from homolytic and heterolytic cleavage: carbocations, carbanions and free radicals',
                ],
              },
              {
                name: 'Preparation, Properties and Reactions of Alkanes',
                subtopics: [
                  'Homologous series; physical properties (melting points, boiling points, density)',
                  'Combustion and halogenation of alkanes',
                  'Preparation by the Wurtz reaction and decarboxylation',
                ],
              },
              {
                name: 'Preparation, Properties and Reactions of Alkenes and Alkynes',
                subtopics: [
                  'Physical properties of alkenes and alkynes (boiling points, density, dipole moments)',
                  'Acidity of alkynes',
                  'Addition reactions of alkenes with halogens, hydrogen halides and water; acid-catalysed hydration',
                  'Ozonolysis of alkenes and alkynes',
                  'Polymerisation reactions',
                ],
              },
              {
                name: 'Reactions of Benzene',
                subtopics: [
                  'Structure and aromaticity',
                  'Electrophilic substitution: nitration, halogenation and sulphonation',
                  'Friedel-Crafts alkylation and acylation',
                  'Effect of o-, m- and p-directing groups in monosubstituted benzenes',
                ],
              },
              {
                name: 'Phenols',
                subtopics: [
                  'Acidity',
                  'Electrophilic substitution: halogenation, nitration and sulphonation',
                  'Reimer-Tiemann and Kolbe reactions',
                ],
              },
              {
                name: 'Characteristic Reactions of Alkyl Halides and Alcohols',
                subtopics: [
                  'Rearrangement reactions of alkyl carbocations and Grignard reactions',
                  'SN1 and SN2 nucleophilic substitution',
                  'Alcohols: esterification, dehydration and oxidation; reactions with sodium, phosphorus halides and ZnCl2/concentrated HCl',
                  'Conversion of alcohols into aldehydes and ketones',
                ],
              },
              {
                name: 'Characteristic Reactions of Ethers, Aldehydes and Ketones',
                subtopics: [
                  'Preparation of ethers by Williamson’s synthesis',
                  'Oxidation and reduction (Clemmensen and Wolff-Kishner); oxime and hydrazone formation',
                  'Aldol condensation, Cannizzaro reaction and haloform reaction',
                  'Nucleophilic addition reactions (Grignard, HCN and ammonia derivatives)',
                ],
              },
              {
                name: 'Characteristic Reactions of Carboxylic Acids and Amines',
                subtopics: [
                  'Formation of esters, acid chlorides and amides',
                  'Basicity of amines',
                  'Diazotisation; carbylamine reaction and Hinsberg test',
                  'Reactions with nitrous acid',
                ],
              },
              {
                name: 'Carbohydrates',
                subtopics: [
                  'Classification; mono- and disaccharides (glucose and sucrose)',
                  'Oxidation and reduction reactions',
                  'Glycoside formation and hydrolysis of sucrose',
                ],
              },
              {
                name: 'Amino Acids and Peptides',
                subtopics: [
                  'General structure and physical properties',
                  'Primary structure of peptides',
                ],
              },
              {
                name: 'Polymers',
                subtopics: [
                  'Properties and uses of some important natural polymers',
                  'Properties and uses of some important synthetic polymers',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Algebra',
            topics: [
              {
                name: 'Complex Numbers',
                subtopics: [
                  'Algebra of complex numbers: addition, multiplication, conjugation, polar representation',
                  'Properties of modulus and principal argument; triangle inequality',
                  'Cube roots of unity; geometric interpretations',
                ],
              },
              {
                name: 'Quadratic Equations and Logarithms',
                subtopics: [
                  'Quadratic equations with real coefficients; relations between roots and coefficients',
                  'Formation of equations with given roots; symmetric functions of roots',
                  'Logarithms and their properties',
                ],
              },
              {
                name: 'Sequences and Series',
                subtopics: [
                  'Arithmetic, geometric and harmonic progressions and means',
                  'Sums of finite arithmetic and geometric progressions; infinite geometric series',
                  'Sums of squares and cubes of the first n natural numbers',
                ],
              },
              {
                name: 'Permutations, Combinations and the Binomial Theorem',
                subtopics: [
                  'Permutations and combinations',
                  'Binomial theorem for a positive integral index',
                  'Properties of binomial coefficients',
                ],
              },
              {
                name: 'Matrices and Determinants',
                subtopics: [
                  'Matrices: equality, addition, multiplication by a scalar, product and transpose',
                  'Determinant and inverse of a square matrix of order up to three',
                  'Diagonal, symmetric and skew-symmetric matrices and their properties',
                  'Solutions of simultaneous linear equations in two or three variables',
                ],
              },
              {
                name: 'Probability',
                subtopics: [
                  'Addition and multiplication rules; conditional probability and Bayes’ theorem',
                  'Independence of events',
                  'Computation of probabilities using permutations and combinations',
                ],
              },
            ],
          },
          {
            name: 'Trigonometry',
            topics: [
              {
                name: 'Trigonometric Functions and Identities',
                subtopics: [
                  'Trigonometric functions, their periodicity and graphs',
                  'Addition and subtraction formulae',
                  'Formulae involving multiple and sub-multiple angles',
                  'General solution of trigonometric equations',
                ],
              },
              {
                name: 'Inverse Trigonometric Functions',
                subtopics: [
                  'Principal values only and their elementary properties',
                ],
              },
            ],
          },
          {
            name: 'Analytical Geometry',
            topics: [
              {
                name: 'Straight Lines',
                subtopics: [
                  'Cartesian coordinates; distance between two points; section formulae; shift of origin',
                  'Equation of a straight line in various forms; angle between two lines',
                  'Distance of a point from a line; lines through the point of intersection of two given lines',
                  'Equation of the bisector of the angle between two lines; concurrency of lines',
                  'Centroid, orthocentre, incentre and circumcentre of a triangle',
                ],
              },
              {
                name: 'Circles',
                subtopics: [
                  'Equation of a circle in various forms; parametric equations',
                  'Equations of tangent, normal and chord',
                  'Intersection of a circle with a straight line or a circle; circle through points of intersection',
                ],
              },
              {
                name: 'Conic Sections',
                subtopics: [
                  'Equations of a parabola, ellipse and hyperbola in standard form',
                  'Foci, directrices and eccentricity; parametric equations',
                  'Equations of tangent and normal; locus problems',
                ],
              },
              {
                name: 'Three-Dimensional Geometry',
                subtopics: [
                  'Direction cosines and direction ratios',
                  'Equation of a straight line in space; skew lines',
                  'Equation of a plane; distance of a point from a plane',
                ],
              },
            ],
          },
          {
            name: 'Differential Calculus',
            topics: [
              {
                name: 'Functions',
                subtopics: [
                  'Real-valued functions of a real variable; one-one, onto and composite functions',
                  'Absolute value, polynomial, rational, trigonometric, logarithmic and exponential functions',
                  'Even and odd functions; inverse of a function',
                ],
              },
              {
                name: 'Limits, Continuity and Differentiability',
                subtopics: [
                  'Limit and continuity of the sum, difference, product and quotient of two functions',
                  'L’Hospital rule for the evaluation of limits',
                  'Continuity of composite functions; intermediate value property of continuous functions',
                ],
              },
              {
                name: 'Differentiation',
                subtopics: [
                  'Derivative of a function; chain rule',
                  'Derivatives of polynomial, rational, trigonometric, inverse trigonometric, logarithmic and exponential functions',
                  'Derivatives of implicit functions; derivatives up to order two',
                ],
              },
              {
                name: 'Applications of Derivatives',
                subtopics: [
                  'Geometrical interpretation of the derivative; tangents and normals',
                  'Increasing and decreasing functions; maxima and minima',
                  "Rolle's theorem and Lagrange's mean value theorem",
                ],
              },
            ],
          },
          {
            name: 'Integral Calculus',
            topics: [
              {
                name: 'Indefinite Integration',
                subtopics: [
                  'Integration as the inverse process of differentiation',
                  'Indefinite integrals of standard functions',
                  'Integration by parts and by the methods of substitution and partial fractions',
                ],
              },
              {
                name: 'Definite Integrals and Areas',
                subtopics: [
                  'Definite integrals and their properties; fundamental theorem of integral calculus',
                  'Areas of simple regions bounded by simple curves',
                ],
              },
              {
                name: 'Differential Equations',
                subtopics: [
                  'Formation of ordinary differential equations',
                  'Solution of homogeneous differential equations; variables separable method',
                  'Linear first-order differential equations',
                ],
              },
            ],
          },
          {
            name: 'Vectors',
            topics: [
              {
                name: 'Vector Algebra',
                subtopics: [
                  'Addition of vectors and scalar multiplication',
                  'Dot and cross products',
                ],
              },
              {
                name: 'Products of Three Vectors',
                subtopics: [
                  'Scalar and vector triple products',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'bitsat',
    name: 'BITSAT',
    fullName: 'Birla Institute of Technology and Science Admission Test',
    aliases: ['bits pilani entrance', 'bitsat online', 'bits admission test'],
    region: 'India',
    category: 'Engineering entrance',
    popularity: 85,
    syllabusVerified: '2026-10-20',
    website: 'https://bitsadmission.com',
    overview: {
      conductor: 'BITS Pilani',
      level: 'Class 11–12 → integrated first-degree admission (BE, BPharm, MSc) at BITS Pilani, Goa and Hyderabad campuses',
      papers: [
        'Part I: Physics',
        'Part II: Chemistry',
        'Part III: (a) English Proficiency and (b) Logical Reasoning',
        'Part IV: Mathematics (or Biology for BPharm, BE Environmental & Sustainability Engg and MSc Biological Sciences)',
      ],
      duration: '3 h for 130 questions (Physics 30, Chemistry 30, English 10, Logical Reasoning 20, Maths/Biology 40)',
      marking: '390 marks; +3 correct / −1 incorrect; no time limit per section',
      negativeMarking: '−1 per incorrect answer; no marks for unattempted questions',
      questionTypes: ['MCQ (4 options, one correct)'],
      notes:
        'Computer-based test held in two sessions (about May and June–July); candidates may appear in both and the higher score counts. If all 130 questions are answered without skipping, 12 extra questions (3 each from Physics, Chemistry, Maths/Biology and Logical Reasoning) may be attempted in remaining time.',
    },
    sources: [
      {
        title: 'BITSAT-2026 — Official Syllabus (Annexure)',
        url: 'https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT_Syllabus.pdf',
        host: 'admissions.bits-pilani.ac.in',
      },
    ],
    subjects: [
      {
        name: 'Physics',
        mappedSubjectId: 'physics',
        units: [
          {
            name: 'Units and Measurement',
            topics: [
              {
                name: 'Units and Dimensions',
                subtopics: [
                  'Different systems of units; SI units, fundamental and derived units',
                  'Dimensional analysis',
                ],
              },
              {
                name: 'Precision and Measurement',
                subtopics: [
                  'Precision and significant figures',
                  'Fundamental measurements in physics: Vernier calipers, screw gauge, physical balance',
                ],
              },
            ],
          },
          {
            name: 'Kinematics',
            topics: [
              {
                name: 'Vectors in Kinematics',
                subtopics: ['Properties of vectors', 'Position, velocity and acceleration vectors'],
              },
              {
                name: 'Motion with Constant Acceleration',
                subtopics: ['Motion with constant acceleration', 'Relative motion'],
              },
              {
                name: 'Projectile and Circular Motion',
                subtopics: ['Projectile motion', 'Uniform circular motion'],
              },
            ],
          },
          {
            name: 'Newton’s Laws of Motion',
            topics: [
              {
                name: 'Newton’s Laws and Forces',
                subtopics: [
                  'Newton’s laws: free body diagrams, resolution of forces',
                  'Motion on an inclined plane',
                  'Motion of blocks with pulley systems',
                ],
              },
              {
                name: 'Circular Motion and Frames',
                subtopics: ['Circular motion: centripetal force', 'Inertial and non-inertial frames'],
              },
            ],
          },
          {
            name: 'Impulse and Momentum',
            topics: [
              {
                name: 'Impulse and Momentum',
                subtopics: [
                  'Definition of impulse and momentum',
                  'Conservation of momentum',
                  'Momentum of a system of particles',
                ],
              },
              {
                name: 'Collisions and Centre of Mass',
                subtopics: ['Collisions', 'Centre of mass'],
              },
            ],
          },
          {
            name: 'Work and Energy',
            topics: [
              {
                name: 'Work, Power and Energy',
                subtopics: [
                  'Work done by a force',
                  'Kinetic energy and the work-energy theorem',
                  'Power',
                ],
              },
              {
                name: 'Energy Conservation',
                subtopics: [
                  'Conservative forces and potential energy',
                  'Conservation of mechanical energy',
                ],
              },
            ],
          },
          {
            name: 'Rotational Motion',
            topics: [
              {
                name: 'Rotational Kinematics',
                subtopics: [
                  'Angular displacement, angular velocity and angular acceleration',
                  'Rotational motion with constant angular acceleration',
                ],
              },
              {
                name: 'Rotational Dynamics',
                subtopics: [
                  'Moment of inertia; parallel and perpendicular axes theorems; rotational kinetic energy',
                  'Torque and angular momentum; conservation of angular momentum',
                  'Rolling motion',
                ],
              },
            ],
          },
          {
            name: 'Gravitation',
            topics: [
              {
                name: 'Gravitation and Potential Energy',
                subtopics: [
                  'Newton’s law of gravitation',
                  'Gravitational potential energy; escape velocity',
                ],
              },
              {
                name: 'Planetary and Satellite Motion',
                subtopics: ['Kepler’s laws', 'Satellite motion'],
              },
            ],
          },
          {
            name: 'Mechanics of Solids and Fluids',
            topics: [
              {
                name: 'Elasticity',
                subtopics: ['Elastic behaviour of solids', 'Stress, strain and elastic moduli'],
              },
              {
                name: 'Fluid Mechanics',
                subtopics: [
                  'Pressure, density and Archimedes’ principle',
                  'Viscosity and surface tension',
                  'Bernoulli’s theorem',
                ],
              },
            ],
          },
          {
            name: 'Oscillations',
            topics: [
              {
                name: 'Simple Harmonic Motion',
                subtopics: [
                  'Kinematics of simple harmonic motion',
                  'Spring-mass system; simple and compound pendulum',
                ],
              },
              {
                name: 'Forced and Damped Oscillations',
                subtopics: ['Forced and damped oscillations', 'Resonance'],
              },
            ],
          },
          {
            name: 'Waves',
            topics: [
              {
                name: 'Travelling and Standing Waves',
                subtopics: [
                  'Progressive sinusoidal waves',
                  'Standing waves in strings and pipes',
                ],
              },
              {
                name: 'Superposition and Doppler Effect',
                subtopics: ['Superposition of waves; beats', 'Doppler effect'],
              },
            ],
          },
          {
            name: 'Heat and Thermodynamics',
            topics: [
              {
                name: 'Kinetic Theory and Heat Transfer',
                subtopics: [
                  'Kinetic theory of gases',
                  'Thermal equilibrium and temperature',
                  'Specific heat; conduction, convection and radiation; thermal conductivity',
                  'Newton’s law of cooling',
                ],
              },
              {
                name: 'Laws of Thermodynamics',
                subtopics: [
                  'Work, heat and the first law of thermodynamics',
                  'Second law of thermodynamics',
                  'Carnot engine: efficiency and coefficient of performance',
                ],
              },
            ],
          },
          {
            name: 'Electrostatics',
            topics: [
              {
                name: 'Coulomb’s Law and Electric Field',
                subtopics: [
                  'Coulomb’s law',
                  'Electric field: discrete and continuous charge distributions',
                  'Electric dipole',
                ],
              },
              {
                name: 'Potential, Gauss’s Law and Capacitance',
                subtopics: [
                  'Electrostatic potential and electrostatic potential energy',
                  'Gauss’ law and its applications',
                  'Capacitance and dielectrics: parallel-plate capacitor; capacitors in series and parallel',
                ],
              },
            ],
          },
          {
            name: 'Current Electricity',
            topics: [
              {
                name: 'Ohm’s Law and DC Circuits',
                subtopics: [
                  'Ohm’s law; Joule heating',
                  'DC circuits: resistors and cells in series and parallel',
                  'Kirchhoff’s laws; potentiometer and Wheatstone bridge',
                ],
              },
              {
                name: 'Electrical Resistance',
                subtopics: ['Resistivity: origin and temperature dependence'],
              },
            ],
          },
          {
            name: 'Magnetic Effect of Current',
            topics: [
              {
                name: 'Magnetic Fields of Currents',
                subtopics: [
                  'Biot-Savart’s law and its applications',
                  'Ampere’s law and its applications',
                ],
              },
              {
                name: 'Forces, Torque and Instruments',
                subtopics: [
                  'Lorentz force; force on current-carrying conductors in a magnetic field',
                  'Magnetic moment of a current loop; torque on a current loop',
                  'Galvanometer and its conversion to voltmeter and ammeter',
                ],
              },
            ],
          },
          {
            name: 'Electromagnetic Induction',
            topics: [
              {
                name: 'Electromagnetic Induction',
                subtopics: [
                  'Faraday’s law, Lenz’s law, eddy currents',
                  'Self and mutual inductance',
                  'Transformers and generators',
                ],
              },
              {
                name: 'Alternating Current Circuits',
                subtopics: [
                  'Alternating current: peak and rms values',
                  'AC circuits; LCR circuits',
                ],
              },
            ],
          },
          {
            name: 'Optics',
            topics: [
              {
                name: 'Ray Optics',
                subtopics: [
                  'Laws of reflection and refraction',
                  'Lenses and mirrors',
                  'Optical instruments: telescope and microscope',
                ],
              },
              {
                name: 'Wave Optics',
                subtopics: [
                  'Interference: Huygen’s principle and Young’s double-slit experiment; interference in thin films',
                  'Diffraction due to a single slit',
                  'Polarization: states of polarization, Malus’ law and Brewster’s law',
                ],
              },
              {
                name: 'Electromagnetic Waves',
                subtopics: [
                  'Electromagnetic waves and their characteristics (qualitative ideas only)',
                  'Electromagnetic spectrum',
                ],
              },
            ],
          },
          {
            name: 'Modern Physics',
            topics: [
              {
                name: 'Dual Nature and Atomic Models',
                subtopics: [
                  'Dual nature of light and matter: photoelectric effect and de Broglie wavelength',
                  'Rutherford’s experiment and Bohr’s atomic model',
                  'Hydrogen atom spectrum',
                ],
              },
              {
                name: 'Nuclear Physics',
                subtopics: [
                  'Radioactivity',
                  'Nuclear reactions: fission and fusion; binding energy',
                ],
              },
            ],
          },
          {
            name: 'Electronic Devices',
            topics: [
              {
                name: 'Semiconductors and Diodes',
                subtopics: [
                  'Energy bands in solids (qualitative): conductors, insulators and semiconductors',
                  'Semiconductor diode: I-V characteristics in forward and reverse bias; diode as a rectifier',
                  'I-V characteristics of LED, photodiode, solar cell and Zener diode; Zener diode as a voltage regulator',
                ],
              },
              {
                name: 'Transistors and Logic Gates',
                subtopics: [
                  'Junction transistor: transistor action, characteristics; transistor as an amplifier (common emitter) and oscillator',
                  'Logic gates (OR, AND, NOT, NAND and NOR); transistor as a switch',
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
          {
            name: 'States of Matter',
            topics: [
              {
                name: 'Measurement and Stoichiometry',
                subtopics: [
                  'Physical quantities, SI units, dimensional analysis, precision, significant figures',
                  'Laws of chemical combination; Dalton’s atomic theory; mole concept and stoichiometry',
                ],
              },
              {
                name: 'Gaseous and Liquid States',
                subtopics: [
                  'Three states of matter; intermolecular interactions; types of bonding; melting and boiling points',
                  'Gaseous state: kinetic energy and molecular speeds; gas laws and ideal gas equation; Avogadro number',
                  'Deviation from ideal behaviour: critical temperature, liquefaction of gases, van der Waals equation',
                  'Liquid state: vapour pressure, surface tension, viscosity',
                ],
              },
              {
                name: 'Solid State',
                subtopics: [
                  'Classification; space lattices and crystal systems; unit cells and density calculations (cubic and hexagonal)',
                  'Close packing; crystal structures of ionic, covalent and metallic crystals; voids; point defects',
                  'Electrical, magnetic and dielectric properties; amorphous solids',
                  'Band theory of metals: conductors, semiconductors and insulators; n- and p-type semiconductors',
                ],
              },
            ],
          },
          {
            name: 'Atomic Structure',
            topics: [
              {
                name: 'Subatomic Particles and Atomic Models',
                subtopics: [
                  'Atomic number, isotopes and isobars',
                  'Thomson’s model and its limitations; Rutherford’s picture of the atom and its limitations',
                  'Hydrogen atom spectrum and the Bohr model and its limitations',
                ],
              },
              {
                name: 'Quantum Mechanical Picture',
                subtopics: [
                  'Wave-particle duality: de Broglie relation and uncertainty principle',
                  'Quantum numbers and wave functions; atomic orbitals and their shapes (s, p and d); spin quantum number',
                ],
              },
              {
                name: 'Many-Electron Atoms',
                subtopics: [
                  'Pauli exclusion principle; Aufbau principle and Hund’s rule',
                  'Electronic configurations of atoms',
                ],
              },
            ],
          },
          {
            name: 'Periodicity and Bonding',
            topics: [
              {
                name: 'Periodic Table and Trends',
                subtopics: [
                  'Brief history of the development of periodic tables; periodic law and the modern periodic table',
                  'Types of elements: s, p, d and f blocks; nomenclature of elements with atomic number greater than 100',
                  'Periodic trends: ionization energy, atomic and ionic radii, electron affinity, electronegativity and valency',
                ],
              },
              {
                name: 'Ionic and Covalent Bonding',
                subtopics: [
                  'Ionic bond: lattice energy and Born-Haber cycle; covalent character of ionic bonds and polar character of covalent bonds; bond parameters',
                  'Valence bond theory: orbital overlap, directionality of bonds, hybridisation (s, p and d orbitals), resonance',
                  'Molecular orbital theory: methodology, orbital energy level diagrams, bond order, magnetic properties of homonuclear diatomics (qualitative)',
                ],
              },
              {
                name: 'Molecular Structure',
                subtopics: [
                  'Lewis picture and resonance structures',
                  'VSEPR model and molecular shapes',
                  'Dipole moments; hydrogen bond',
                ],
              },
            ],
          },
          {
            name: 'Thermodynamics',
            topics: [
              {
                name: 'Basic Concepts',
                subtopics: [
                  'Systems and surroundings; state functions; intensive and extensive properties',
                  'Zeroth law and temperature',
                ],
              },
              {
                name: 'First Law and Thermochemistry',
                subtopics: [
                  'Work, internal energy, heat, enthalpy; heat capacities and specific heats',
                  'Measurement of ΔU and ΔH; enthalpies of formation, phase transformation, ionization and electron gain',
                  'Hess’s law; enthalpies of bond dissociation, combustion, atomization, sublimation, solution and dilution',
                ],
              },
              {
                name: 'Second and Third Laws',
                subtopics: [
                  'Spontaneous and reversible processes; entropy',
                  'Gibbs free energy: spontaneity, non-mechanical work and equilibrium',
                  'Third law: introduction',
                ],
              },
            ],
          },
          {
            name: 'Physical and Chemical Equilibria',
            topics: [
              {
                name: 'Solutions and Concentration',
                subtopics: [
                  'Concentration units: mole fraction, molarity and molality',
                  'Solubility of solids and gases in liquids',
                ],
              },
              {
                name: 'Solution Equilibria',
                subtopics: [
                  'Vapour pressure; Raoult’s law; relative lowering of vapour pressure',
                  'Depression in freezing point; elevation in boiling point; osmotic pressure; determination of molecular mass',
                  'Solid solutions; abnormal molecular mass; van’t Hoff factor',
                ],
              },
              {
                name: 'Chemical and Ionic Equilibria',
                subtopics: [
                  'Dynamic nature of equilibrium; law of mass action; equilibrium constants (Kp, Kc)',
                  'Factors affecting equilibrium; Le Chatelier’s principle; significance of ΔG and ΔG°',
                  'Acids and bases (Arrhenius, Bronsted-Lowry and Lewis); degree of ionization; pH; buffers; Henderson equation; acid-base titrations',
                  'Hydrolysis; solubility product of sparingly soluble salts; common ion effect',
                ],
              },
            ],
          },
          {
            name: 'Electrochemistry',
            topics: [
              {
                name: 'Redox and Galvanic Cells',
                subtopics: [
                  'Oxidation-reduction reactions (electron transfer concept); oxidation number; balancing of redox reactions',
                  'Electrochemical cells and cell reactions; standard electrode potentials; emf of galvanic cells',
                  'Nernst equation; factors affecting electrode potential; Gibbs energy change and cell potential',
                  'Secondary cells, dry cells and fuel cells; corrosion and its prevention',
                ],
              },
              {
                name: 'Electrolysis and Conduction',
                subtopics: [
                  'Electrolytic conductance; specific and molar conductivities; variation with concentration',
                  'Kohlrausch’s law and its application',
                  'Electrolysis and Faraday’s laws of electrolysis',
                ],
              },
            ],
          },
          {
            name: 'Chemical Kinetics',
            topics: [
              {
                name: 'Rate Laws',
                subtopics: [
                  'Rate and rate expression of a reaction; rate constant',
                  'Order and molecularity of a reaction',
                  'Integrated rate expressions and half-life for zero and first order reactions',
                ],
              },
              {
                name: 'Factors Affecting Rate',
                subtopics: [
                  'Concentration of reactants, catalyst and particle size effects',
                  'Temperature dependence of the rate constant; activation energy; Arrhenius equation',
                  'Collision theory (elementary idea, no mathematical treatment)',
                ],
              },
              {
                name: 'Surface Chemistry',
                subtopics: [
                  'Adsorption: physisorption and chemisorption; factors affecting adsorption of gases on solids',
                  'Catalysis: homogeneous and heterogeneous; activity, selectivity and enzyme catalysis',
                  'Colloids: distinction from true solutions and suspensions; types and properties (Tyndall effect, Brownian movement, electrophoresis, coagulation); emulsions',
                ],
              },
            ],
          },
          {
            name: 'Hydrogen and s-Block Elements',
            topics: [
              {
                name: 'Hydrogen',
                subtopics: [
                  'Unique position in the periodic table; occurrence and isotopes',
                  'Dihydrogen: preparation, properties, reactions and uses',
                  'Hydrides: molecular, saline, ionic, covalent and interstitial',
                  'Water: properties and structure; heavy water; hydrogen peroxide; hydrogen as a fuel',
                ],
              },
              {
                name: 's-Block Trends',
                subtopics: [
                  'Abundance and occurrence; anomalous properties of the first elements in each group; diagonal relationships',
                  'Trends in ionization energy and atomic/ionic radii',
                ],
              },
              {
                name: 'Alkali and Alkaline Earth Metals',
                subtopics: [
                  'Lithium, sodium and potassium: occurrence, extraction, reactivity, electrode potentials; biological importance',
                  'Compounds: NaCl, Na2CO3, NaHCO3, NaOH, KCl and KOH',
                  'Magnesium and calcium: occurrence, extraction, reactivity; reactions with O2, H2O, H2 and halogens',
                  'Compounds: CaO, Ca(OH)2, plaster of Paris, MgSO4, MgCl2, CaCO3 and CaSO4; solubility and thermal stability of oxo salts',
                ],
              },
            ],
          },
          {
            name: 'p-, d- and f-Block Elements',
            topics: [
              {
                name: 'General Trends',
                subtopics: [
                  'Abundance, distribution, physical and chemical properties, isolation and uses',
                  'Trends in chemical reactivity; electronic configuration; oxidation states; anomalous properties of the first element of each group',
                ],
              },
              {
                name: 'Group 13 and 14',
                subtopics: [
                  'Boron: borax, boric acid, boron hydrides and halides; reactions of aluminium with acids and alkalis',
                  'Carbon: catenation, allotropes (graphite, diamond, fullerenes), oxides, halides, sulphides and carbides',
                  'Silicon: silica, silicates, silicones, silicon tetrachloride and zeolites',
                ],
              },
              {
                name: 'Group 15 and 16',
                subtopics: [
                  'Nitrogen: preparation, reactivity and uses; ammonia (Haber process); oxides of nitrogen; nitric acid (Ostwald process); NPK fertilizers',
                  'Phosphorus: production and allotropes; hydrides, oxides, oxoacids, halides and phosphine',
                  'Dioxygen: isolation and reactivity; acidic, basic and amphoteric oxides; ozone',
                  'Sulphur: allotropes; sulphur dioxide and sulphuric acid; oxides and oxoacids (structures only)',
                ],
              },
              {
                name: 'Group 17, 18 and the d-Block',
                subtopics: [
                  'Halogens: hydrides, oxides and oxyacids (structures only); chlorine and HCl; interhalogen compounds; bleaching powder',
                  'Group 18 elements: uses; xenon fluorides, oxides and oxoacids',
                  'd-Block: general trends of the first row; occurrence and extraction of iron, copper, silver, zinc and mercury',
                  'Steel and important alloys; preparation and properties of K2Cr2O7 and KMnO4',
                ],
              },
              {
                name: 'f-Block and Coordination Compounds',
                subtopics: [
                  'Lanthanoids and actinoids: oxidation states, chemical reactivity, lanthanide contraction and its consequences',
                  'Coordination compounds: coordination number, ligands, Werner’s theory, IUPAC nomenclature, isomerism',
                  'Bonding: valence-bond approach and crystal field theory (qualitative)',
                  'Applications: qualitative analysis, extraction of metals, biological systems (chlorophyll, vitamin B12, haemoglobin)',
                ],
              },
            ],
          },
          {
            name: 'Principles of Organic Chemistry and Hydrocarbons',
            topics: [
              {
                name: 'Fundamentals',
                subtopics: [
                  'Classification based on functional groups; trivial and IUPAC nomenclature',
                  'Methods of purification: qualitative and quantitative',
                  'Electronic displacement in a covalent bond: inductive, resonance and hyperconjugation effects',
                  'Free radicals, carbocations, carbanions, nucleophiles and electrophiles; types of organic reactions',
                ],
              },
              {
                name: 'Alkanes',
                subtopics: [
                  'Structural isomerism; general properties and chemical reactions',
                  'Free-radical halogenation, combustion and pyrolysis',
                ],
              },
              {
                name: 'Alkenes and Alkynes',
                subtopics: [
                  'Structure of double and triple bonded compounds; general preparation and physical properties',
                  'Electrophilic and free-radical additions: hydrogen, halogens, water and hydrogen halides (Markovnikov’s addition and peroxide effect)',
                  'Ozonolysis and oxidation; mechanism of electrophilic addition',
                  'Acidic character of alkynes; 1,2- and 1,4-addition to dienes',
                ],
              },
              {
                name: 'Aromatic Hydrocarbons',
                subtopics: [
                  'Sources, properties and isomerism; resonance delocalization and aromaticity',
                  'Polynuclear hydrocarbons; IUPAC nomenclature',
                  'Mechanism of electrophilic substitution; directive influence and effect of substituents on reactivity',
                  'Carcinogenicity and toxicity',
                ],
              },
              {
                name: 'Haloalkanes and Haloarenes',
                subtopics: [
                  'Physical properties, nomenclature and optical rotation',
                  'Chemical reactions and mechanisms of substitution',
                  'Uses and environmental effects: di/tri/tetrachloromethanes, iodoform, freon and DDT',
                ],
              },
            ],
          },
          {
            name: 'Stereochemistry',
            topics: [
              {
                name: 'Conformations',
                subtopics: [
                  'Conformations of ethane',
                  'Newman and sawhorse projections',
                ],
              },
              {
                name: 'Geometrical Isomerism',
                subtopics: [
                  'Geometrical isomerism in alkenes',
                  'Conditions for geometrical isomerism',
                ],
              },
            ],
          },
          {
            name: 'Organic Compounds with Functional Groups Containing Oxygen and Nitrogen',
            topics: [
              {
                name: 'Oxygen-Containing Functional Groups',
                subtopics: [
                  'Nomenclature, electronic structure, preparation, identification, reactions, properties and uses of alcohols, phenols and ethers',
                  'Nomenclature, preparation and reactions of aldehydes, ketones and carboxylic acids',
                ],
              },
              {
                name: 'Nitrogen-Containing Functional Groups',
                subtopics: [
                  'Nomenclature, preparation, reactions and uses of nitro compounds, amines and diazonium salts',
                  'Cyanides and isocyanides',
                ],
              },
              {
                name: 'Specific Reactions',
                subtopics: [
                  'Reactivity of α-hydrogen in carbonyl compounds; effect of substituents on α-carbon on acid strength',
                  'Comparative reactivity of acid derivatives; mechanisms of nucleophilic addition and dehydration',
                  'Basic character of amines; methods of preparation and separation',
                  'Importance of diazonium salts in synthetic organic chemistry',
                ],
              },
            ],
          },
          {
            name: 'Biological, Industrial and Environmental Chemistry',
            topics: [
              {
                name: 'Biomolecules',
                subtopics: [
                  'Carbohydrates: classification; monosaccharides; structures of pentoses and hexoses; glucose reactions; di- and polysaccharides',
                  'Proteins: amino acids, peptide bond, polypeptides; primary to quaternary structures; denaturation and enzymes',
                  'Nucleic acids: types; chemical composition of DNA and RNA; primary structure and double helix of DNA',
                  'Vitamins: classification, structure and functions; hormones',
                ],
              },
              {
                name: 'Polymers',
                subtopics: [
                  'Classification of polymers; general methods of polymerization (free radical, cationic, anionic)',
                  'Molecular mass of polymers; biopolymers and biodegradable polymers; copolymerization',
                  'Natural rubber and vulcanization; synthetic rubbers; condensation polymers',
                  'Important polymers: polythene, nylon, polyesters, bakelite and rubber',
                ],
              },
              {
                name: 'Environmental Chemistry',
                subtopics: [
                  'Environmental pollutants; soil, water and air pollution; chemical reactions in the atmosphere; smog',
                  'Major atmospheric pollutants; acid rain; ozone depletion and its effects',
                  'Greenhouse effect and global warming; industrial air pollution',
                  'Green chemistry for control of environmental pollution',
                ],
              },
              {
                name: 'Chemicals in Medicine, Health-Care and Food',
                subtopics: [
                  'Analgesics, tranquilizers, antiseptics and disinfectants',
                  'Antimicrobials, anti-fertility drugs, antihistamines, antibiotics and antacids',
                  'Preservatives, artificial sweetening agents and antioxidants',
                  'Soaps and detergents',
                ],
              },
            ],
          },
          {
            name: 'Theoretical Principles of Experimental Chemistry',
            topics: [
              {
                name: 'Volumetric Analysis',
                subtopics: [
                  'Principles; standard solutions of sodium carbonate and oxalic acid; acid-base titrations',
                  'Redox titrations involving KMnO4, K2Cr2O7 and Na2S2O3',
                ],
              },
              {
                name: 'Qualitative Analysis of Inorganic Salts',
                subtopics: [
                  'Cations: Pb2+, Cu2+, As3+, Mn2+, Al3+, Zn2+, Co2+, Ca2+, Sr2+, Ba2+, Mg2+, NH4+, Fe3+, Ni2+',
                  'Anions: CO3²−, S²−, SO4²−, SO3²−, NO2−, NO3−, Cl−, Br−, I−, PO4³−, CH3COO−, C2O4²−',
                ],
              },
              {
                name: 'Physical Chemistry Experiments',
                subtopics: [
                  'Preparation and crystallization: alum, copper sulphate, benzoic acid, ferrous sulphate, double salts',
                  'Temperature vs solubility; pH studies: common ion effect, fruit juices, acid/base/salt solutions',
                  'Lyophilic and lyophobic sols; dialysis; role of emulsifying agents',
                  'Equilibrium studies: ferric-thiocyanate and cobalt-chloride systems',
                  'Enthalpy determinations: strong acid-base neutralization; acetone-chloroform hydrogen bonding',
                  'Rate studies: thiosulphate-HCl, iodate-sulphite and iodide-peroxide reactions (concentration and temperature effects)',
                ],
              },
              {
                name: 'Purification and Organic Analysis',
                subtopics: [
                  'Filtration, crystallization, sublimation, distillation, differential extraction and chromatography',
                  'Melting and boiling point determination; paper chromatography and Rf values',
                  'Detection of nitrogen, sulphur, phosphorus and halogens',
                  'Detection of carbohydrates, fats and proteins in foodstuffs',
                  'Detection of alcoholic, phenolic, aldehydic, ketonic, carboxylic and amino groups; unsaturation',
                ],
              },
              {
                name: 'Preparations and Laboratory Technique',
                subtopics: [
                  'Preparations: acetanilide, p-nitro acetanilide, dibenzal acetone, aniline yellow, beta-naphthol-aniline dye',
                  'Basic laboratory technique: cutting and bending glass tubes, drawing a jet, boring of cork',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'English Proficiency',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Grammar',
            topics: [
              {
                name: 'Determiners, Prepositions and Modals',
                subtopics: [
                  'Determiners and prepositions',
                  'Modals and adjectives',
                  'Relative pronouns',
                ],
              },
              {
                name: 'Agreement, Time and Tense',
                subtopics: ['Agreement', 'Time and tense'],
              },
              {
                name: 'Sentence Construction',
                subtopics: [
                  'Parallel construction',
                  'Voice and transformation',
                  'Question tags and relative clauses',
                ],
              },
            ],
          },
          {
            name: 'Vocabulary',
            topics: [
              {
                name: 'Word Formation and Spelling',
                subtopics: [
                  'Odd word and one-word substitution',
                  'Spelling and word formation',
                  'Homophones',
                ],
              },
              {
                name: 'Meaning in Context',
                subtopics: [
                  'Contextual meanings: definitions, academic vocabulary and connotation',
                  'Collocations',
                  'Analogy',
                ],
              },
              {
                name: 'Synonyms, Antonyms and Idioms',
                subtopics: [
                  'Synonyms and antonyms',
                  'Phrasal verbs and idioms',
                ],
              },
            ],
          },
          {
            name: 'Reading Comprehension',
            topics: [
              {
                name: 'Content and Ideas',
                subtopics: [
                  'Finding main ideas and reaching conclusions using supporting evidence',
                  'Anticipation of ideas',
                  'Distinguishing facts from opinions',
                ],
              },
              {
                name: 'Vocabulary and Summary',
                subtopics: [
                  'Figurative usage: metaphors and similes; select cloze',
                  'Finding the correct summary from options',
                ],
              },
              {
                name: 'Referents and Reorganization',
                subtopics: [
                  'Referents',
                  'Reorganization of information (jigsaw reading)',
                ],
              },
            ],
          },
          {
            name: 'Composition',
            topics: [
              {
                name: 'Rearrangement',
                subtopics: [
                  'Word order',
                  'Logical organization of paragraphs',
                ],
              },
              {
                name: 'Paragraph Unity and Linkers',
                subtopics: [
                  'Identifying the correct topic sentence',
                  'Paragraph unity',
                  'Linkers and connectives',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Logical Reasoning',
        mappedSubjectId: 'aptitude',
        units: [
          {
            name: 'Verbal Reasoning',
            topics: [
              {
                name: 'Analogy and Classification',
                subtopics: [
                  'Analogy: identifying a corresponding relationship from alternatives',
                  'Classification: assorting items by a shared quality and spotting the odd option',
                ],
              },
              {
                name: 'Series Completion',
                subtopics: [
                  'Completing number and letter series',
                  'Finding the wrong part in a series',
                ],
              },
              {
                name: 'Logical Deduction and Chart Logic',
                subtopics: [
                  'Identifying correct/incorrect logical conclusions from a brief passage',
                  'Completing partially filled charts and tables from given information',
                ],
              },
            ],
          },
          {
            name: 'Nonverbal Reasoning',
            topics: [
              {
                name: 'Pattern Perception and Figure Formation',
                subtopics: [
                  'Identifying the missing quarter of a given pattern',
                  'Analyzing and forming a figure from given parts',
                ],
              },
              {
                name: 'Paper Cutting and Figure Matrix',
                subtopics: [
                  'Patterns formed by folding and cutting paper',
                  'Completing figure matrices that follow a common rule',
                ],
              },
              {
                name: 'Rule Detection',
                subtopics: [
                  'Selecting the set of figures that obeys a given rule and forms the correct series',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Algebra',
            topics: [
              {
                name: 'Complex Numbers',
                subtopics: [
                  'Addition, multiplication, conjugation and polar representation',
                  'Properties of modulus and principal argument; triangle inequality',
                  'Roots of complex numbers; geometric interpretations; fundamental theorem of algebra',
                ],
              },
              {
                name: 'Quadratic Equations',
                subtopics: [
                  'Theory of quadratic equations in real and complex number systems',
                  'Solutions of quadratic equations',
                ],
              },
              {
                name: 'Progressions and Series',
                subtopics: [
                  'Arithmetic, geometric and arithmetico-geometric progressions and series',
                  'Sums of finite arithmetic and geometric progressions; infinite geometric series',
                  'Sums of squares and cubes of the first n natural numbers',
                ],
              },
              {
                name: 'Logarithms and Exponential Series',
                subtopics: ['Logarithms and their properties', 'Exponential series'],
              },
              {
                name: 'Permutations, Combinations and Binomial Theorem',
                subtopics: [
                  'Permutations as arrangements and combinations as selection; simple applications',
                  'Binomial theorem for a positive integral index; properties of binomial coefficients; Pascal’s triangle',
                ],
              },
              {
                name: 'Matrices and Determinants',
                subtopics: [
                  'Matrices and determinants of order two or three: properties and evaluation',
                  'Matrix addition and multiplication; adjoint and inverse',
                  'Solutions of simultaneous linear equations in two or three variables; elementary row and column operations',
                  'Types of matrices; applications of determinants in finding the area of triangles',
                ],
              },
              {
                name: 'Sets, Relations and Functions',
                subtopics: [
                  'Algebra of sets and applications; equivalence relations',
                  'Mappings: one-one, into and onto; composition; binary operations; inverse of a function',
                  'Functions of real variables: polynomial, modulus, signum and greatest integer',
                ],
              },
              {
                name: 'Mathematical Reasoning and Inequalities',
                subtopics: [
                  'Mathematically acceptable statements; connecting words/phrases (implies, and/or, there exists, if and only if)',
                  'Difference between contradiction, converse and contrapositive; mathematical induction',
                  'Linear inequalities: one-variable (algebraic) and two-variable (graphical) solutions',
                ],
              },
            ],
          },
          {
            name: 'Trigonometry',
            topics: [
              {
                name: 'Trigonometric Functions and Equations',
                subtopics: [
                  'Measurement of angles in radians and degrees; positive and negative angles',
                  'Trigonometric ratios, functions with their graphs and identities',
                  'Solution of trigonometric equations',
                ],
              },
              {
                name: 'Inverse Trigonometric Functions',
                subtopics: ['Inverse trigonometric functions and their properties'],
              },
            ],
          },
          {
            name: 'Two-Dimensional Coordinate Geometry',
            topics: [
              {
                name: 'Basics',
                subtopics: [
                  'Cartesian coordinates; distance between two points; section formulae; shift of origin',
                ],
              },
              {
                name: 'Straight Lines and Pair of Straight Lines',
                subtopics: [
                  'Equations of straight lines in various forms; angle between two lines',
                  'Distance of a point from a line; lines through the point of intersection of two given lines',
                  'Equation of the bisector of the angle between two lines; concurrent lines',
                ],
              },
              {
                name: 'Circles and Conic Sections',
                subtopics: [
                  'Equation of a circle in standard form; parametric equations of a circle',
                  'Conic sections: parabola, ellipse and hyperbola — eccentricity, directrices and foci',
                ],
              },
            ],
          },
          {
            name: 'Three-Dimensional Coordinate Geometry',
            topics: [
              {
                name: 'Lines in Space',
                subtopics: [
                  'Coordinate axes and coordinate planes; distance between two points; section formula',
                  'Direction cosines and direction ratios; equation of a straight line in space; skew lines',
                ],
              },
              {
                name: 'Planes',
                subtopics: [
                  'Angle between two lines with given direction ratios; shortest distance between two lines',
                  'Equation of a plane; distance of a point from a plane',
                  'Condition for coplanarity of three lines; angles between two planes and between a line and a plane',
                ],
              },
            ],
          },
          {
            name: 'Differential Calculus',
            topics: [
              {
                name: 'Functions, Limits and Continuity',
                subtopics: [
                  'Domain and range of a real-valued function',
                  'Limits and continuity of sums, differences, products and quotients of two functions',
                  'Differentiability',
                ],
              },
              {
                name: 'Differentiation',
                subtopics: [
                  'Derivatives of polynomial, rational, trigonometric, inverse trigonometric, exponential, logarithmic and implicit functions',
                  'Derivative of sums, differences, products and quotients; chain rule; parametric form',
                  'Geometric interpretation of the derivative; tangents and normals',
                ],
              },
              {
                name: 'Applications of Derivatives',
                subtopics: [
                  'Increasing and decreasing functions; maxima and minima of a function',
                  "Rolle's theorem, mean value theorem and intermediate value theorem",
                ],
              },
            ],
          },
          {
            name: 'Integral Calculus',
            topics: [
              {
                name: 'Indefinite Integrals',
                subtopics: [
                  'Integration as the inverse process of differentiation',
                  'Indefinite integrals of standard functions',
                  'Methods: substitution, by parts, partial fractions and trigonometric identities',
                ],
              },
              {
                name: 'Definite Integrals and Applications',
                subtopics: [
                  'Definite integrals and their properties; fundamental theorem of integral calculus',
                  'Areas under simple curves and of regions bounded by them',
                ],
              },
            ],
          },
          {
            name: 'Ordinary Differential Equations',
            topics: [
              {
                name: 'Basics',
                subtopics: [
                  'Order and degree of a differential equation',
                  'Formulation of a differential equation whose general solution is given',
                ],
              },
              {
                name: 'First-Order Equations',
                subtopics: [
                  'Variables separable method',
                  'Homogeneous differential equations of first order and first degree',
                  'Linear first-order differential equations',
                ],
              },
            ],
          },
          {
            name: 'Probability',
            topics: [
              {
                name: 'Fundamentals',
                subtopics: [
                  'Various terminology; axiomatic and other approaches of probability',
                  'Addition and multiplication rules of probability',
                  'Conditional probability, total probability and Bayes’ theorem; independent events',
                ],
              },
              {
                name: 'Random Variables',
                subtopics: [
                  'Discrete random variables and distributions with mean and variance',
                ],
              },
            ],
          },
          {
            name: 'Vectors',
            topics: [
              {
                name: 'Vector Algebra',
                subtopics: [
                  'Direction ratios/cosines of vectors; addition of vectors; scalar multiplication',
                  'Position vector of a point dividing a line segment in a given ratio',
                ],
              },
              {
                name: 'Products',
                subtopics: [
                  'Dot and cross products of two vectors; projection of a vector on a line',
                  'Scalar triple products and their geometrical interpretations',
                ],
              },
            ],
          },
          {
            name: 'Statistics',
            topics: [
              {
                name: 'Dispersion',
                subtopics: [
                  'Measures of dispersion',
                  'Range, mean deviation, variance and standard deviation',
                ],
              },
              {
                name: 'Frequency Distributions',
                subtopics: [
                  'Analysis of frequency distributions with equal means but different variances',
                ],
              },
            ],
          },
          {
            name: 'Linear Programming',
            topics: [
              {
                name: 'Formulation',
                subtopics: [
                  'Various terminology and formulation of linear programming problems',
                  'Constraints and objective function',
                ],
              },
              {
                name: 'Graphical Solution',
                subtopics: [
                  'Solution using the graphical method: feasible and infeasible regions and solutions',
                  'Optimal feasible solutions (up to three non-trivial constraints)',
                ],
              },
            ],
          },
          {
            name: 'Mathematical Modeling',
            topics: [
              {
                name: 'Formulation of Real-Life Problems',
                subtopics: [
                  'Formulation of simple real-life problems',
                  'Translating word problems into mathematical form',
                ],
              },
              {
                name: 'Solution Techniques',
                subtopics: [
                  'Solution using matrices',
                  'Solution using calculus and linear programming',
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
            name: 'Diversity in Living World',
            topics: [
              {
                name: 'Biology and Life',
                subtopics: [
                  'Biology: its meaning and relevance to mankind',
                  'What is living; taxonomic categories and aids',
                  'Systematics and the binomial system of nomenclature',
                ],
              },
              {
                name: 'Classification',
                subtopics: [
                  'Introductory classification: two-kingdom and five-kingdom systems',
                  'Plant kingdom: salient features of major groups (algae to angiosperms)',
                  'Animal kingdom: salient features of non-chordates up to phylum and chordates up to class level',
                ],
              },
            ],
          },
          {
            name: 'Cell: The Unit of Life; Structure and Function',
            topics: [
              {
                name: 'Cell Structure',
                subtopics: [
                  'Cell wall, cell membrane and endomembrane system (ER, Golgi, lysosomes, vacuoles)',
                  'Mitochondria, plastids, ribosomes, cytoskeleton, cilia and flagella, centrosome and centriole, nucleus, microbodies',
                  'Structural differences: prokaryotic vs eukaryotic cells; plant vs animal cells',
                ],
              },
              {
                name: 'Cell Division',
                subtopics: [
                  'Cell cycle: various phases',
                  'Mitosis and meiosis',
                ],
              },
              {
                name: 'Biomolecules and Enzymes',
                subtopics: [
                  'Structure and function of carbohydrates, proteins, lipids and nucleic acids',
                  'Enzymes: chemical nature, types, properties and mechanism of action',
                ],
              },
            ],
          },
          {
            name: 'Genetics and Evolution',
            topics: [
              {
                name: 'Inheritance',
                subtopics: [
                  'Mendelian inheritance; chromosome theory of inheritance; gene interaction',
                  'Incomplete dominance, co-dominance, complementary genes and multiple alleles',
                  'Linkage and crossing over; inheritance patterns of haemophilia and blood groups in humans',
                ],
              },
              {
                name: 'Molecular Genetics',
                subtopics: [
                  'DNA: organization and replication; transcription and translation',
                  'Gene expression and regulation; DNA fingerprinting',
                ],
              },
              {
                name: 'Evolution',
                subtopics: [
                  'Theories and evidences of evolution, including modern Darwinism',
                ],
              },
            ],
          },
          {
            name: 'Structure and Function — Plants',
            topics: [
              {
                name: 'Morphology and Anatomy',
                subtopics: [
                  'Morphology of a flowering plant; tissues and tissue systems',
                  'Anatomy and function of root, stem (with modifications), leaf, inflorescence, flower (whorls, placentation), fruit and seed; secondary growth',
                ],
              },
              {
                name: 'Transport and Nutrition',
                subtopics: [
                  'Absorption and movement of water (diffusion, osmosis, water relations) and nutrients; translocation of food',
                  'Transpiration and gaseous exchange; mechanism of stomatal movement',
                  'Mineral nutrition: macro- and micro-nutrients; deficiency disorders; biological nitrogen fixation',
                ],
              },
              {
                name: 'Photosynthesis and Respiration',
                subtopics: [
                  'Photosynthesis: light reaction; cyclic and non-cyclic photophosphorylation; CO2 fixation pathways; photorespiration; limiting factors',
                  'Respiration: anaerobic, fermentation and aerobic; glycolysis, TCA cycle, electron transport system; energy relations',
                ],
              },
            ],
          },
          {
            name: 'Structure and Function — Animals',
            topics: [
              {
                name: 'Digestion and Respiration',
                subtopics: [
                  'Digestive system: organs, digestion and absorption',
                  'Respiratory system: organs, breathing, exchange and transport of gases',
                ],
              },
              {
                name: 'Circulation and Excretion',
                subtopics: [
                  'Body fluids and circulation: blood, lymph, double circulation, regulation of cardiac activity',
                  'Hypertension and coronary artery diseases',
                  'Excretory system: urine formation and regulation of kidney function',
                ],
              },
              {
                name: 'Movement and Coordination',
                subtopics: [
                  'Locomotion and movement: skeletal system, joints, muscles and types of movement',
                  'Control and coordination: central and peripheral nervous systems; neuron structure and function; reflex action and sensory reception',
                  'Endocrine glands and hormones; mechanism of hormone action',
                ],
              },
            ],
          },
          {
            name: 'Reproduction, Growth and Movement in Plants',
            topics: [
              {
                name: 'Reproduction in Plants',
                subtopics: [
                  'Asexual methods of reproduction',
                  'Sexual reproduction: development of male and female gametophytes; pollination (types and agents); fertilization',
                  'Development of embryo, endosperm, seed and fruit (including parthenocarpy)',
                ],
              },
              {
                name: 'Growth and Development',
                subtopics: [
                  'Growth phases; types of growth regulators and their role in seed dormancy, germination and movement',
                  'Apical dominance; senescence; abscission',
                  'Photoperiodism; vernalisation; various types of movements',
                ],
              },
            ],
          },
          {
            name: 'Reproduction and Development in Humans',
            topics: [
              {
                name: 'Reproductive Systems',
                subtopics: [
                  'Male and female reproductive systems',
                ],
              },
              {
                name: 'Reproductive Biology',
                subtopics: [
                  'Menstrual cycle; gamete production; fertilisation; implantation',
                  'Embryo development; pregnancy and parturition',
                  'Birth control and contraception',
                ],
              },
            ],
          },
          {
            name: 'Ecology and Environment',
            topics: [
              {
                name: 'Ecology Fundamentals',
                subtopics: [
                  'Meaning of ecology, environment, habitat and niche',
                  'Ecological levels of organization (organism to biosphere)',
                  'Characteristics of species, population, biotic community and ecosystem; succession and climax',
                ],
              },
              {
                name: 'Ecosystems and Energy Flow',
                subtopics: [
                  'Ecosystem: biotic and abiotic components; ecological pyramids; food chain and food web',
                  'Energy flow; major types of ecosystems including agroecosystem',
                ],
              },
              {
                name: 'Adaptations and Biodiversity',
                subtopics: [
                  'Ecological adaptations: structural and physiological features of aquatic and desert plants and animals',
                  'Biodiversity: meaning, types and conservation strategies (biosphere reserves, national parks, sanctuaries)',
                  'Pollution: air, water, noise and radioactive; global warming and climate change; ozone depletion; bioremediation; deforestation; extinction and hot spots',
                ],
              },
            ],
          },
          {
            name: 'Biology and Human Welfare',
            topics: [
              {
                name: 'Health and Disease',
                subtopics: [
                  'Animal husbandry: livestock, poultry, fisheries; major animal diseases and their control',
                  'Pathogens of major communicable human diseases caused by fungi, bacteria, viruses, protozoans and helminths, and their control',
                  'Cancer and AIDS; adolescence and drug/alcohol abuse',
                  'Basic concepts of immunology',
                ],
              },
              {
                name: 'Crop Improvement',
                subtopics: [
                  'Plant breeding and tissue culture in crop improvement',
                ],
              },
            ],
          },
          {
            name: 'Biotechnology and its Applications',
            topics: [
              {
                name: 'Microbial Technology',
                subtopics: [
                  'Microbes as ideal systems for biotechnology',
                  'Microbial technology in food processing, industrial production (alcohol, acids, enzymes, antibiotics), sewage treatment and energy generation',
                ],
              },
              {
                name: 'Recombinant DNA Technology',
                subtopics: [
                  'Steps in recombinant DNA technology: restriction enzymes, nucleic-acid insertion by vectors and other methods, regeneration of recombinants',
                  'Applications in human health: insulin, vaccines, growth hormones, organ transplant and gene therapy',
                  'Applications in industry and agriculture: expensive enzymes, strain improvement, GM crops (nitrogen fixation, herbicide- and pest-resistance including Bt crops)',
                ],
              },
            ],
          },
        ],
      },
    ],
  },

/* ------------------------------------------------------------------ */
/*  VITEEE — added by the exam-syllabus deep-dive pass (2026-10-23).   */
/*  Pattern and subject split verified against the official VITEEE     */
/*  site (viteee.vit.ac.in — 100 MCQs, +4/-1, 2 hours; MPCEA maths     */
/*  stream or BPCEA biology stream). Topic lists follow the official   */
/*  VITEEE syllabus scope (Class 11-12 NCERT-based subject pages).     */
/* ------------------------------------------------------------------ */
  {
    id: 'viteee',
    name: 'VITEEE',
    fullName: 'VIT Engineering Entrance Examination',
    aliases: ['viteee exam', 'vit engineering entrance', 'vit entrance exam', 'vit vellore entrance'],
    region: 'India',
    category: 'Engineering entrance',
    popularity: 62,
    syllabusVerified: '2026-10-23',
    website: 'https://viteee.vit.ac.in',
    overview: {
      conductor: 'Vellore Institute of Technology (VIT)',
      level: 'Undergraduate B.Tech admission across VIT campuses (Vellore, Chennai, AP, Bhopal)',
      stages: ['Single computer-based test session; candidates book a slot across the exam window (April-May)'],
      papers: ['One 2-hour paper, 100 MCQs: Mathematics or Biology 40, Physics 25, Chemistry 25, Aptitude 5, English 5'],
      duration: '120 minutes (Maths/Biology 50 min, Physics 30 min, Chemistry 30 min, English+Aptitude 10 min)',
      marking: '+4 for each correct answer; 0 for unanswered; no marks above 125 are possible — the paper totals 400 marks across 100 questions',
      negativeMarking: '−1 for each wrong answer',
      questionTypes: ['MCQ only; each question carries 4 marks'],
      notes:
        'Two streams: MPCEA (Mathematics, Physics, Chemistry, Aptitude, English) for most B.Tech programmes and BPCEA (Biology replaces Mathematics) for biotechnology streams. There is no separate third subject choice — candidates attempt exactly one stream. Selection is rank-based across all VIT campuses.',
    },
    sources: [
      { title: 'VITEEE official site — pattern, eligibility and syllabus links', url: 'https://viteee.vit.ac.in', host: 'viteee.vit.ac.in' },
      { title: 'VITEEE syllabus page — subject-wise syllabus links', url: 'https://viteee.vit.ac.in/viteee-syllabus.html', host: 'viteee.vit.ac.in' },
    ],
    subjects: [
      {
        name: 'Mathematics',
        mappedSubjectId: 'mathematics',
        weightage: 40,
        units: [
          {
            name: 'Algebra and Matrices',
            topics: [
              { name: 'Matrices and determinants', subtopics: ['Types, algebra, transpose and inverse', 'Determinant properties, adjoint, solving linear systems (Cramer)'] },
              { name: 'Sets, relations and functions', subtopics: ['Set algebra, function composition, invertibility'] },
              { name: 'Complex numbers and quadratics', subtopics: ['Argand plane, modulus-argument, roots of unity', 'Quadratic equations, nature of roots, symmetric functions of roots'] },
              { name: 'Permutations, combinations and binomial theorem', subtopics: ['Counting, arrangements and selections', 'Binomial expansion, general and middle terms'] },
              { name: 'Sequences, series and mathematical induction', subtopics: ['AP, GP, AGP sums, special series', 'Induction proofs'] },
            ],
          },
          {
            name: 'Trigonometry and Coordinate Geometry',
            topics: [
              { name: 'Trigonometry', subtopics: ['Identities and equations, multiple and sub-multiple angles', 'Inverse trigonometric functions, properties of triangles, heights and distances'] },
              { name: 'Two-dimensional coordinate geometry', subtopics: ['Straight lines, pairs of lines, circles', 'Tangents, chords and radical axis'] },
              { name: 'Conic sections', subtopics: ['Parabola, ellipse, hyperbola — equations, tangents and normals'] },
              { name: 'Three-dimensional geometry and vectors', subtopics: ['Direction cosines, lines and planes', 'Vector algebra, dot and cross products, scalar triple product'] },
            ],
          },
          {
            name: 'Calculus and Probability',
            topics: [
              { name: 'Limits, continuity and differentiation', subtopics: ['Limit laws, continuity, differentiability', 'Derivative rules, implicit and parametric differentiation, tangents and normals, maxima and minima, rate problems'] },
              { name: 'Integration and differential equations', subtopics: ['Standard integrals, substitution, by parts, partial fractions', 'Definite integrals and areas; first-order differential equations — variable separable and linear'] },
              { name: 'Probability and statistics', subtopics: ['Addition and multiplication rules, conditional probability, Bayes theorem, random variables, mean and variance, binomial distribution'] },
              { name: 'Discrete mathematics', subtopics: ['Logic statements and truth tables, groups as an algebraic structure'] },
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
            name: 'Mechanics and Properties of Matter',
            topics: [
              { name: 'Laws of motion and friction', subtopics: ['Conservation of momentum, static, kinetic and rolling friction'] },
              { name: 'Work, energy and power', subtopics: ['Work-energy theorem, conservative forces, energy conservation'] },
              { name: 'Gravitation and solids', subtopics: ['Newton\'s law of gravitation, satellites; elasticity — stress-strain, Hooke\'s law, Poisson ratio'] },
              { name: 'Fluids and heat', subtopics: ['Viscosity, Stokes\' law, terminal velocity, Bernoulli\'s theorem', 'Heat capacity, latent heat, blackbody radiation — Wien\'s and Stefan\'s laws, laws of thermodynamics'] },
            ],
          },
          {
            name: 'Electricity and Magnetism',
            topics: [
              { name: 'Electrostatics', subtopics: ['Coulomb\'s law and superposition, electric field and dipole', 'Potential and equipotentials, Gauss\'s law, capacitors and dielectrics'] },
              { name: 'Current electricity', subtopics: ['Drift velocity, Ohm\'s law, resistivity-temperature, Kirchhoff\'s laws, Wheatstone bridge, potentiometer'] },
              { name: 'Magnetic effects of current', subtopics: ['Biot-Savart and Ampere\'s laws, force on charges and conductors, moving-coil galvanometer'] },
              { name: 'Electromagnetic induction and AC', subtopics: ['Faraday\'s and Lenz\'s laws, self and mutual inductance, AC circuits with R-L-C, resonance, transformers'] },
            ],
          },
          {
            name: 'Optics, Modern Physics and Electronics',
            topics: [
              { name: 'Ray and wave optics', subtopics: ['Mirrors, lenses, prisms; Huygens\' principle, interference — Young\'s double slit, diffraction, polarisation'] },
              { name: 'Dual nature and atomic physics', subtopics: ['Electromagnetic waves and spectrum, photoelectric effect, atomic models and spectra'] },
              { name: 'Nuclear physics', subtopics: ['Radioactivity — decay law and half-life, fission and fusion, binding energy'] },
              { name: 'Semiconductor devices', subtopics: ['Energy bands, PN junction diode, Zener and LED, transistors as amplifier and switch, logic gates'] },
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
            name: 'Physical Chemistry',
            topics: [
              { name: 'Atomic structure and periodicity', subtopics: ['Quantum numbers, orbitals, electronic configuration', 'Periodic trends — radius, ionisation energy, electronegativity'] },
              { name: 'Chemical bonding and states', subtopics: ['Ionic and covalent bonding, VSEPR shapes, hybridisation, molecular orbital basics', 'Solid state — unit cells and packing; gaseous state — ideal and real gases'] },
              { name: 'Thermodynamics, equilibrium and kinetics', subtopics: ['First law, enthalpy, Hess\'s law, Gibbs energy', 'Chemical and ionic equilibrium, pH, buffers, Ksp; rate laws, Arrhenius equation, catalysis; solutions and colligative properties'] },
              { name: 'Electrochemistry and surface chemistry', subtopics: ['Galvanic cells, Nernst equation, electrolysis, Faraday\'s laws; adsorption, colloids, emulsions'] },
            ],
          },
          {
            name: 'Inorganic Chemistry',
            topics: [
              { name: 's-, p- and d-block elements', subtopics: ['Group trends, anomalous behaviour of the first element, transition-element chemistry — oxidation states, colour, catalysis'] },
              { name: 'Coordination chemistry and metallurgy', subtopics: ['Nomenclature, isomerism, Werner and crystal-field basics', 'Extraction principles — concentration, reduction, refining of common metals'] },
            ],
          },
          {
            name: 'Organic Chemistry',
            topics: [
              { name: 'Fundamentals and hydrocarbons', subtopics: ['Nomenclature, isomerism, electronic effects — induction, resonance, hyperconjugation', 'Alkanes, alkenes, alkynes and benzene — preparations and characteristic reactions, aromatic substitution'] },
              { name: 'Functional groups and biomolecules', subtopics: ['Haloalkanes, alcohols, phenols, ethers, aldehydes, ketones, carboxylic acids, amines — preparations and conversions', 'Carbohydrates, proteins and vitamins — classification and properties; polymers; environmental chemistry basics'] },
            ],
          },
        ],
      },
      {
        name: 'Aptitude',
        mappedSubjectId: 'aptitude',
        weightage: 5,
        units: [
          {
            name: 'Reasoning and Data',
            topics: [
              { name: 'Data interpretation', subtopics: ['Reading tables, bar charts, line graphs and pie charts; percentage-change and comparison questions'] },
              { name: 'Logical reasoning', subtopics: ['Series and patterns, coding-decoding, blood relations, direction sense, syllogism-style deductions'] },
              { name: 'Sets, functions and relations basics', subtopics: ['Applied set reasoning, simple mapping and matching questions'] },
            ],
          },
        ],
      },
      {
        name: 'English',
        mappedSubjectId: 'english',
        weightage: 5,
        units: [
          {
            name: 'Comprehension and Grammar',
            topics: [
              { name: 'Reading comprehension', subtopics: ['Short passages — main idea, detail, inference, vocabulary in context'] },
              { name: 'Grammar and usage', subtopics: ['Tenses, articles, prepositions, subject-verb agreement, common errors, sentence completion'] },
              { name: 'Vocabulary and dialogue', subtopics: ['Synonyms, antonyms, word meanings in context, dialogue sequencing (English for communication)'] },
            ],
          },
        ],
      },
      {
        name: 'Biology (BPCEA stream)',
        weightage: 40,
        units: [
          {
            name: 'Diversity, Structure and Function',
            topics: [
              { name: 'Diversity of living organisms', subtopics: ['Classification — five kingdoms, plant and animal groups, viruses and lichens'] },
              { name: 'Structural organisation', subtopics: ['Morphology and anatomy of flowering plants; animal tissues — frog as representative'] },
              { name: 'Cell structure and function', subtopics: ['Cell organelles, biomolecules, cell cycle and division — mitosis and meiosis'] },
              { name: 'Plant and human physiology', subtopics: ['Transport, mineral nutrition, photosynthesis, respiration, growth and hormones', 'Digestion, breathing, body fluids and circulation, excretion, locomotion, neural and chemical coordination'] },
            ],
          },
          {
            name: 'Genetics, Reproduction and Ecology',
            topics: [
              { name: 'Reproduction', subtopics: ['Reproduction in flowering plants and humans, reproductive health'] },
              { name: 'Genetics and evolution', subtopics: ['Mendelian inheritance, chromosomes and DNA, molecular basis of inheritance, evolution — theories and evidence'] },
              { name: 'Biology and human welfare, biotechnology, ecology', subtopics: ['Immunity and health, microbes in human welfare, biotechnology principles and applications, ecosystems, biodiversity and conservation, environmental issues'] },
            ],
          },
        ],
      },
    ],
  },
]

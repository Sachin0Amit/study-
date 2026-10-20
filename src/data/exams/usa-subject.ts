import type { CuratedExam } from './types'

/**
 * USA AP subject exams and graduate admission tests — curated official
 * syllabi.
 *
 * Sources: College Board AP Course and Exam Descriptions (CEDs) for the AP
 * exams, AAMC for the MCAT, LSAC for the LSAT.
 *
 * Note: AP unit weightage values are the midpoints of the ranges published
 * in each CED's exam-weighting table (e.g. 10-12% recorded as 11).
 */

export const USA_SUBJECT_EXAMS: CuratedExam[] = [
  {
    id: 'ap-calculus-ab',
    name: 'AP Calculus AB',
    fullName: 'Advanced Placement Calculus AB',
    aliases: ['ap calculus', 'calculus ab', 'ap calc ab'],
    region: 'United States',
    category: 'AP subject exam',
    popularity: 80,
    syllabusVerified: '2026-10-20',
    website: 'https://apstudents.collegeboard.org',
    overview: {
      conductor: 'College Board',
      level: 'High school → college credit / advanced placement',
      duration: '3 h 15 min (Section I MCQ 105 min · Section II FRQ 90 min)',
      marking: 'MCQ 50% + FRQ 50%; score 1-5',
      negativeMarking: 'None',
      questionTypes: ['Multiple-choice (4 options)', 'Free-response questions'],
      notes: 'Units 1-8 follow the official CED order; Section II mixes calculator-permitted and no-calculator parts.',
    },
    sources: [
      { title: 'AP Calculus AB — Course and Exam Description (CED)', url: 'https://apcentral.collegeboard.org', host: 'apcentral.collegeboard.org' },
    ],
    subjects: [
      {
        name: 'Calculus AB',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Limits and Continuity',
            weightage: 11,
            topics: [
              { name: 'Defining Limits', subtopics: ['Limit notation and intuitive meaning', 'Estimating limits from graphs', 'Estimating limits from tables'] },
              { name: 'Determining Limits', subtopics: ['Algebraic properties of limits', 'Algebraic manipulation and factoring', 'The squeeze theorem', 'Selecting procedures for determining limits'] },
              { name: 'Continuity', subtopics: ['Types of discontinuities', 'Continuity at a point and over an interval', 'The intermediate value theorem'] },
              { name: 'Removing Discontinuities', subtopics: ['Removable versus non-removable discontinuities', 'Redefining a function to fill a hole', 'Confirming continuity after removal'] },
              { name: 'Infinite Limits and Asymptotes', subtopics: ['Infinite limits and vertical asymptotes', 'Limits at infinity and horizontal asymptotes', 'Connecting limits at infinity and end behaviour'] },
            ],
          },
          {
            name: 'Differentiation: Definition and Fundamental Properties',
            weightage: 11,
            topics: [
              { name: 'Defining the Derivative', subtopics: ['Average and instantaneous rates of change', 'The limit definition of the derivative', 'Estimating derivatives from graphs and tables'] },
              { name: 'Differentiability and Continuity', subtopics: ['Differentiability implies continuity', 'Corners, cusps and vertical tangent lines', 'When the derivative fails to exist'] },
              { name: 'Fundamental Differentiation Rules', subtopics: ['The power rule', 'Constant, sum, difference and constant multiple rules', 'Derivatives of cos x, sin x, e^x and ln x'] },
              { name: 'Product and Quotient Rules', subtopics: ['The product rule', 'The quotient rule', 'Derivatives of tan x, cot x, sec x and csc x'] },
            ],
          },
          {
            name: 'Differentiation: Composite, Implicit, and Inverse Functions',
            weightage: 11,
            topics: [
              { name: 'The Chain Rule', subtopics: ['Differentiating composite functions', 'Chaining multiple layers', 'Selecting procedures for calculating derivatives'] },
              { name: 'Implicit Differentiation', subtopics: ['Differentiating equations not solved for y', 'Tangent lines to implicit curves', 'Implicitly defined relations'] },
              { name: 'Differentiating Inverse Functions', subtopics: ['The inverse function derivative rule', 'Derivatives of inverse trigonometric functions', 'Relating a function and its inverse'] },
              { name: 'Higher-Order Derivatives', subtopics: ['Second and higher derivatives', 'Notation for higher derivatives'] },
            ],
          },
          {
            name: 'Contextual Applications of Differentiation',
            weightage: 12.5,
            topics: [
              { name: 'Interpreting the Derivative in Context', subtopics: ['Meaning of the derivative in applied problems', 'Straight-line motion: position, velocity and acceleration', 'Rates of change beyond motion'] },
              { name: 'Related Rates', subtopics: ['Setting up related-rates equations', 'Solving related-rates problems', 'Classic setups: shadows, ladders and cones'] },
              { name: 'Linearization and Local Linearity', subtopics: ['Approximating values with tangent lines', 'Linearization at a point'] },
              { name: 'L\'Hôpital\'s Rule', subtopics: ['Indeterminate forms such as 0/0', 'Applying the rule correctly', 'Recognising when the rule applies'] },
            ],
          },
          {
            name: 'Analytical Applications of Differentiation',
            weightage: 16.5,
            topics: [
              { name: 'Mean Value and Extreme Value Theorems', subtopics: ['Mean value theorem conditions and conclusions', 'Extreme value theorem', 'Critical points and relative versus absolute extrema'] },
              { name: 'Monotonicity and the First Derivative Test', subtopics: ['Intervals of increase and decrease', 'First derivative test for relative extrema', 'The candidates test for absolute extrema'] },
              { name: 'Concavity and the Second Derivative Test', subtopics: ['Determining concavity', 'Points of inflection', 'Second derivative test for extrema'] },
              { name: 'Graph Analysis', subtopics: ['Sketching graphs from derivative information', 'Connecting the graphs of a function and its derivatives', 'Behaviours of implicit relations'] },
              { name: 'Optimization Problems', subtopics: ['Setting up optimization models', 'Justifying maximum and minimum values', 'Applied optimization contexts'] },
            ],
          },
          {
            name: 'Integration and Accumulation of Change',
            weightage: 18.5,
            topics: [
              { name: 'Accumulation and Riemann Sums', subtopics: ['Accumulation of change', 'Approximating areas with Riemann sums', 'Summation and definite integral notation'] },
              { name: 'The Fundamental Theorem of Calculus', subtopics: ['Evaluating definite integrals with antiderivatives', 'Properties of definite integrals', 'Accumulation functions'] },
              { name: 'Antiderivatives and Indefinite Integrals', subtopics: ['Basic antidifferentiation rules', 'Indefinite integral notation', 'The constant of integration'] },
              { name: 'Integration by Substitution', subtopics: ['U-substitution for indefinite integrals', 'Substitution with definite integrals', 'Long division and completing the square before integrating'] },
            ],
          },
          {
            name: 'Differential Equations',
            weightage: 9,
            topics: [
              { name: 'Modeling with Differential Equations', subtopics: ['Writing differential equations from descriptions', 'Verifying solutions', 'Slope fields'] },
              { name: 'Separation of Variables', subtopics: ['Solving by separation of variables', 'Particular solutions from initial conditions', 'General solutions'] },
              { name: 'Exponential Models', subtopics: ['Exponential growth and decay', 'Equations of the dy/dx = ky form', 'Applications such as interest and cooling'] },
            ],
          },
          {
            name: 'Applications of Integration',
            weightage: 12.5,
            topics: [
              { name: 'Average Value and Accumulation in Context', subtopics: ['Average value of a function', 'Position, velocity and acceleration with integrals', 'Accumulation functions in applied contexts'] },
              { name: 'Area Between Curves', subtopics: ['Area between two curves', 'Curves intersecting more than twice', 'Horizontal and vertical slices'] },
              { name: 'Volumes with Cross Sections', subtopics: ['Square and rectangular cross sections', 'Triangular and semicircular cross sections', 'Setting up cross-section integrals'] },
              { name: 'Volumes by Disc and Washer Methods', subtopics: ['The disc method', 'The washer method', 'Revolving around different axes'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ap-calculus-bc',
    name: 'AP Calculus BC',
    fullName: 'Advanced Placement Calculus BC',
    aliases: ['ap calculus bc', 'calculus bc', 'ap calc bc'],
    region: 'United States',
    category: 'AP subject exam',
    popularity: 75,
    syllabusVerified: '2026-10-20',
    website: 'https://apstudents.collegeboard.org',
    overview: {
      conductor: 'College Board',
      level: 'High school → college credit / advanced placement',
      duration: '3 h 15 min (Section I MCQ 105 min · Section II FRQ 90 min)',
      marking: 'MCQ 50% + FRQ 50%; score 1-5',
      negativeMarking: 'None',
      questionTypes: ['Multiple-choice (4 options)', 'Free-response questions'],
      notes: 'A superset of Calculus AB: all eight AB units plus parametric, polar and vector-valued functions (Unit 9) and infinite series (Unit 10). An AB subscore is also reported.',
    },
    sources: [
      { title: 'AP Calculus BC — Course and Exam Description (CED)', url: 'https://apcentral.collegeboard.org', host: 'apcentral.collegeboard.org' },
    ],
    subjects: [
      {
        name: 'Calculus BC',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Limits and Continuity',
            weightage: 5.5,
            topics: [
              { name: 'Defining Limits', subtopics: ['Limit notation and intuitive meaning', 'Estimating limits from graphs', 'Estimating limits from tables'] },
              { name: 'Determining Limits', subtopics: ['Algebraic properties of limits', 'Algebraic manipulation and factoring', 'The squeeze theorem', 'Selecting procedures for determining limits'] },
              { name: 'Continuity', subtopics: ['Types of discontinuities', 'Continuity at a point and over an interval', 'The intermediate value theorem'] },
              { name: 'Removing Discontinuities', subtopics: ['Removable versus non-removable discontinuities', 'Redefining a function to fill a hole', 'Confirming continuity after removal'] },
              { name: 'Infinite Limits and Asymptotes', subtopics: ['Infinite limits and vertical asymptotes', 'Limits at infinity and horizontal asymptotes', 'Connecting limits at infinity and end behaviour'] },
            ],
          },
          {
            name: 'Differentiation: Definition and Fundamental Properties',
            weightage: 5.5,
            topics: [
              { name: 'Defining the Derivative', subtopics: ['Average and instantaneous rates of change', 'The limit definition of the derivative', 'Estimating derivatives from graphs and tables'] },
              { name: 'Differentiability and Continuity', subtopics: ['Differentiability implies continuity', 'Corners, cusps and vertical tangent lines', 'When the derivative fails to exist'] },
              { name: 'Fundamental Differentiation Rules', subtopics: ['The power rule', 'Constant, sum, difference and constant multiple rules', 'Derivatives of cos x, sin x, e^x and ln x'] },
              { name: 'Product and Quotient Rules', subtopics: ['The product rule', 'The quotient rule', 'Derivatives of tan x, cot x, sec x and csc x'] },
            ],
          },
          {
            name: 'Differentiation: Composite, Implicit, and Inverse Functions',
            weightage: 5.5,
            topics: [
              { name: 'The Chain Rule', subtopics: ['Differentiating composite functions', 'Chaining multiple layers', 'Selecting procedures for calculating derivatives'] },
              { name: 'Implicit Differentiation', subtopics: ['Differentiating equations not solved for y', 'Tangent lines to implicit curves', 'Implicitly defined relations'] },
              { name: 'Differentiating Inverse Functions', subtopics: ['The inverse function derivative rule', 'Derivatives of inverse trigonometric functions', 'Relating a function and its inverse'] },
              { name: 'Higher-Order Derivatives', subtopics: ['Second and higher derivatives', 'Notation for higher derivatives'] },
            ],
          },
          {
            name: 'Contextual applications of Differentiation',
            weightage: 7.5,
            topics: [
              { name: 'Interpreting the Derivative in Context', subtopics: ['Meaning of the derivative in applied problems', 'Straight-line motion: position, velocity and acceleration', 'Rates of change beyond motion'] },
              { name: 'Related Rates', subtopics: ['Setting up related-rates equations', 'Solving related-rates problems', 'Classic setups: shadows, ladders and cones'] },
              { name: 'Linearization and Local Linearity', subtopics: ['Approximating values with tangent lines', 'Linearization at a point'] },
              { name: 'L\'Hôpital\'s Rule', subtopics: ['Indeterminate forms such as 0/0', 'Applying the rule correctly', 'Recognising when the rule applies'] },
            ],
          },
          {
            name: 'Analytical Applications of Differentiation',
            weightage: 9.5,
            topics: [
              { name: 'Mean Value and Extreme Value Theorems', subtopics: ['Mean value theorem conditions and conclusions', 'Extreme value theorem', 'Critical points and relative versus absolute extrema'] },
              { name: 'Monotonicity and the First Derivative Test', subtopics: ['Intervals of increase and decrease', 'First derivative test for relative extrema', 'The candidates test for absolute extrema'] },
              { name: 'Concavity and the Second Derivative Test', subtopics: ['Determining concavity', 'Points of inflection', 'Second derivative test for extrema'] },
              { name: 'Graph Analysis', subtopics: ['Sketching graphs from derivative information', 'Connecting the graphs of a function and its derivatives', 'Behaviours of implicit relations'] },
              { name: 'Optimization Problems', subtopics: ['Setting up optimization models', 'Justifying maximum and minimum values', 'Applied optimization contexts'] },
            ],
          },
          {
            name: 'Integration and Accumulation of Change',
            weightage: 18.5,
            topics: [
              { name: 'Accumulation and Riemann Sums', subtopics: ['Accumulation of change', 'Approximating areas with Riemann sums', 'Summation and definite integral notation'] },
              { name: 'The Fundamental Theorem of Calculus', subtopics: ['Evaluating definite integrals with antiderivatives', 'Properties of definite integrals', 'Accumulation functions'] },
              { name: 'Antiderivatives and Indefinite Integrals', subtopics: ['Basic antidifferentiation rules', 'Indefinite integral notation', 'The constant of integration'] },
              { name: 'Integration by Substitution', subtopics: ['U-substitution for indefinite integrals', 'Substitution with definite integrals', 'Long division and completing the square before integrating'] },
              { name: 'Advanced Integration Techniques', subtopics: ['Integration by parts', 'Integration using linear partial fractions', 'Improper integrals', 'Selecting techniques for antidifferentiation'] },
            ],
          },
          {
            name: 'Differential Equations',
            weightage: 7.5,
            topics: [
              { name: 'Modeling with Differential Equations', subtopics: ['Writing differential equations from descriptions', 'Verifying solutions', 'Slope fields'] },
              { name: 'Separation of Variables', subtopics: ['Solving by separation of variables', 'Particular solutions from initial conditions', 'General solutions'] },
              { name: 'Exponential Models', subtopics: ['Exponential growth and decay', 'Equations of the dy/dx = ky form', 'Applications such as interest and cooling'] },
              { name: 'Euler\'s Method', subtopics: ['Approximating solutions step by step', 'Comparing approximations with exact solutions'] },
            ],
          },
          {
            name: 'Applications of Integration',
            weightage: 7.5,
            topics: [
              { name: 'Average Value and Accumulation in Context', subtopics: ['Average value of a function', 'Position, velocity and acceleration with integrals', 'Accumulation functions in applied contexts'] },
              { name: 'Area Between Curves', subtopics: ['Area between two curves', 'Curves intersecting more than twice', 'Horizontal and vertical slices'] },
              { name: 'Volumes with Cross Sections', subtopics: ['Square and rectangular cross sections', 'Triangular and semicircular cross sections', 'Setting up cross-section integrals'] },
              { name: 'Volumes by Disc and Washer Methods', subtopics: ['The disc method', 'The washer method', 'Revolving around different axes'] },
              { name: 'Arc Length and Distance Traveled', subtopics: ['Arc length of a smooth planar curve', 'Setting up arc length integrals', 'Distance traveled along a curve'] },
            ],
          },
          {
            name: 'Parametric, Polar, and Vector-Valued Functions',
            weightage: 11.5,
            topics: [
              { name: 'Parametric Equations', subtopics: ['Defining and differentiating parametric equations', 'Second derivatives of parametric equations', 'Arc lengths of parametric curves'] },
              { name: 'Vector-Valued Functions', subtopics: ['Defining and differentiating vector-valued functions', 'Integrating vector-valued functions', 'Planar motion problems'] },
              { name: 'Polar Coordinates and Areas', subtopics: ['Defining polar coordinates', 'Differentiating in polar form', 'Area bounded by one and two polar curves'] },
            ],
          },
          {
            name: 'Infinite Sequences and Series',
            weightage: 17.5,
            topics: [
              {
                name: 'Convergence Tests',
                subtopics: ['Defining convergent and divergent infinite series', 'Geometric series and the nth term test', 'Integral, comparison and alternating series tests', 'The ratio test', 'Absolute versus conditional convergence'],
              },
              { name: 'Taylor and Maclaurin Series', subtopics: ['Taylor polynomial approximations of functions', 'Finding Taylor and Maclaurin series', 'Representing functions as power series'] },
              { name: 'Radius and Interval of Convergence', subtopics: ['Radius of convergence of power series', 'Interval of convergence with endpoint checks'] },
              { name: 'Error Bounds', subtopics: ['Alternating series error bound', 'Lagrange error bound', 'Bounding the size of the remainder'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ap-physics-1',
    name: 'AP Physics 1',
    fullName: 'AP Physics 1: Algebra-Based',
    aliases: ['ap physics', 'physics 1', 'ap physics 1 algebra based'],
    region: 'United States',
    category: 'AP subject exam',
    popularity: 76,
    syllabusVerified: '2026-10-20',
    website: 'https://apstudents.collegeboard.org',
    overview: {
      conductor: 'College Board',
      level: 'High school → college credit / advanced placement',
      duration: '3 h (Section I MCQ 80 min · Section II 4 FRQ 100 min)',
      marking: 'MCQ 50% + FRQ 50%; score 1-5',
      negativeMarking: 'None',
      questionTypes: ['Multiple-choice (4 options)', 'Free-response questions'],
      notes: 'Revised CED effective fall 2024: fluids joins as Unit 8 and the exam moved to 40 MCQs and 4 FRQs.',
    },
    sources: [
      { title: 'AP Physics 1 — Course and Exam Description (CED)', url: 'https://apcentral.collegeboard.org', host: 'apcentral.collegeboard.org' },
    ],
    subjects: [
      {
        name: 'Physics 1',
        mappedSubjectId: 'physics',
        units: [
          {
            name: 'Kinematics',
            weightage: 12.5,
            topics: [
              { name: 'Scalars and Vectors', subtopics: ['Distance versus displacement, speed versus velocity', 'Vector addition and components', 'Adding vectors graphically and analytically'] },
              { name: 'Position, Velocity, and Acceleration', subtopics: ['Motion diagrams and graphs', 'Relating position, velocity and acceleration graphs', 'Average versus instantaneous quantities'] },
              { name: 'Representing Motion', subtopics: ['Graphical representations of motion', 'Kinematic equations for constant acceleration', 'Translating between graphs, equations and words'] },
              { name: 'Reference Frames and Relative Motion', subtopics: ['Choosing and changing reference frames', 'Relative velocity in one and two dimensions'] },
              { name: 'Projectile Motion', subtopics: ['Independence of horizontal and vertical motion', 'Objects launched horizontally and at an angle', 'Range, time of flight and maximum height'] },
            ],
          },
          {
            name: 'Force and Translational Dynamics',
            weightage: 20.5,
            topics: [
              { name: 'Systems and Center of Mass', subtopics: ['Defining the system', 'Center of mass of point-mass systems', 'Internal versus external forces'] },
              { name: 'Forces and Free-Body Diagrams', subtopics: ['Identifying forces acting on an object', 'Free-body diagram conventions', 'Newton\'s third law force pairs'] },
              { name: 'Newton\'s First and Second Laws', subtopics: ['Inertia and equilibrium', 'Applying the second law to objects and systems', 'Translational acceleration of connected systems'] },
              { name: 'Gravitational, Friction and Spring Forces', subtopics: ['Gravitational force and g near Earth', 'Kinetic and static friction', 'Hooke\'s law for springs', 'Resistive forces and terminal speed'] },
              { name: 'Circular Motion and Centripetal Force', subtopics: ['Centripetal acceleration', 'Net radial force requirements', 'Period and speed in circular motion'] },
            ],
          },
          {
            name: 'Work, Energy, and Power',
            weightage: 20.5,
            topics: [
              { name: 'Translational Kinetic Energy', subtopics: ['Kinetic energy and its units', 'The work-energy theorem'] },
              { name: 'Work', subtopics: ['Work done by constant forces', 'Positive, negative and net work', 'Work done by a varying force from graphs'] },
              { name: 'Potential Energy', subtopics: ['Gravitational potential energy', 'Spring (elastic) potential energy', 'Energy bar charts and diagrams'] },
              { name: 'Conservation of Energy', subtopics: ['Conservation of mechanical energy', 'Energy dissipated by friction', 'Solving problems with energy methods'] },
              { name: 'Power', subtopics: ['Average and instantaneous power', 'Power in mechanical systems'] },
            ],
          },
          {
            name: 'Linear Momentum',
            weightage: 12.5,
            topics: [
              { name: 'Momentum and Impulse', subtopics: ['Linear momentum', 'The impulse-momentum theorem', 'Force-time graphs'] },
              { name: 'Conservation of Momentum', subtopics: ['Isolated systems', 'Momentum conservation in collisions and explosions'] },
              { name: 'Collisions', subtopics: ['Elastic collisions', 'Inelastic and perfectly inelastic collisions', 'Energy analysis of collisions'] },
              { name: 'Motion of the Center of Mass', subtopics: ['Velocity of the center of mass', 'Center-of-mass motion for systems of objects'] },
            ],
          },
          {
            name: 'Torque and Rotational Dynamics',
            weightage: 12.5,
            topics: [
              { name: 'Rotational Kinematics', subtopics: ['Angular displacement, velocity and acceleration', 'Analogy with linear kinematics', 'Relating linear and angular quantities'] },
              { name: 'Torque', subtopics: ['Torque and lever arms', 'Torque from a force at an angle', 'Net torque on rigid bodies'] },
              { name: 'Rotational Inertia', subtopics: ['Moment of inertia of common shapes', 'Point-mass calculations', 'How mass distribution changes inertia'] },
              { name: 'Newton\'s Second Law for Rotation', subtopics: ['Relating net torque and angular acceleration', 'The rotational analog of F = ma'] },
              { name: 'Rotational Equilibrium and Statics', subtopics: ['Conditions for static equilibrium', 'Solving rigid-body statics problems', 'Center of gravity'] },
            ],
          },
          {
            name: 'Energy and Momentum of Rotating Systems',
            weightage: 6.5,
            topics: [
              { name: 'Rotational Kinetic Energy', subtopics: ['Rotational kinetic energy', 'Work done by a torque', 'Total energy of rolling objects'] },
              { name: 'Angular Momentum and Angular Impulse', subtopics: ['Angular momentum of point masses and rigid bodies', 'Angular impulse'] },
              { name: 'Conservation of Angular Momentum', subtopics: ['Angular momentum in isolated systems', 'Rotational collisions and changing inertia'] },
              { name: 'Rolling', subtopics: ['Rolling without slipping', 'Energy analysis of rolling objects'] },
              { name: 'Motion of Orbiting Objects', subtopics: ['Circular orbits and satellite motion', 'Orbital speed, period and energy'] },
            ],
          },
          {
            name: 'Oscillations',
            weightage: 6.5,
            topics: [
              { name: 'Defining Simple Harmonic Motion', subtopics: ['Conditions for SHM', 'Restoring force proportional to displacement'] },
              { name: 'Representing and Analyzing SHM', subtopics: ['Position-time graphs of SHM', 'Sinusoidal equations for SHM', 'Period, frequency and amplitude'] },
              { name: 'Spring-Mass Systems and Pendulums', subtopics: ['Period of a mass-spring system', 'Period of a simple pendulum', 'What does and does not affect the period'] },
              { name: 'Energy in Simple Harmonic Motion', subtopics: ['Exchange of kinetic and potential energy', 'Total mechanical energy of an oscillator', 'Energy versus position graphs'] },
            ],
          },
          {
            name: 'Fluids',
            weightage: 12.5,
            topics: [
              { name: 'Internal Structure and Density', subtopics: ['Density of materials', 'Fluids versus solids at the particle level'] },
              { name: 'Pressure', subtopics: ['Absolute and gauge pressure', 'Pressure in a static fluid column', 'Pascal\'s principle'] },
              { name: 'Fluids and Newton\'s Laws', subtopics: ['Buoyant force', 'Archimedes\' principle and displaced fluid', 'Floating and submerged objects'] },
              { name: 'Fluids and Conservation Laws', subtopics: ['The continuity equation for volume flow', 'Bernoulli\'s equation for ideal flow', 'Applications to pipes and outflow speeds'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ap-chemistry',
    name: 'AP Chemistry',
    fullName: 'Advanced Placement Chemistry',
    aliases: ['ap chem', 'ap chemistry exam', 'chemistry ap'],
    region: 'United States',
    category: 'AP subject exam',
    popularity: 75,
    syllabusVerified: '2026-10-20',
    website: 'https://apstudents.collegeboard.org',
    overview: {
      conductor: 'College Board',
      level: 'High school → college credit / advanced placement',
      duration: '3 h 15 min (Section I MCQ 90 min · Section II FRQ 105 min)',
      marking: 'MCQ 50% + FRQ 50%; score 1-5',
      negativeMarking: 'None',
      questionTypes: ['Multiple-choice (4 options)', 'Free-response questions'],
      notes: 'The nine CED units assume algebra-level math; a calculator is allowed in Section II only.',
    },
    sources: [
      { title: 'AP Chemistry — Course and Exam Description (CED)', url: 'https://apcentral.collegeboard.org', host: 'apcentral.collegeboard.org' },
    ],
    subjects: [
      {
        name: 'Chemistry',
        mappedSubjectId: 'chemistry',
        units: [
          {
            name: 'Atomic Structure and Properties',
            weightage: 8,
            topics: [
              { name: 'Moles and Molar Mass', subtopics: ['The mole and Avogadro\'s number', 'Mass spectroscopy of elements', 'Percent composition and empirical formulas', 'Composition of mixtures'] },
              { name: 'Atomic Structure and Electron Configuration', subtopics: ['Electron configurations', 'Photoelectron spectroscopy', 'Valence electrons and ionic compounds'] },
              { name: 'Periodic Trends', subtopics: ['Atomic and ionic radius', 'Ionization energy and electronegativity', 'Effective nuclear charge behind the trends'] },
            ],
          },
          {
            name: 'Compound Structure and Properties',
            weightage: 8,
            topics: [
              { name: 'Types of Chemical Bonds', subtopics: ['Ionic, covalent and metallic bonding', 'Intramolecular force and potential energy', 'Bond length and bond energy curves'] },
              { name: 'Ionic and Metallic Bonding', subtopics: ['Ionic bonding and lattice energy', 'Properties of ionic compounds', 'Metallic bonding and conductivity'] },
              { name: 'Lewis Diagrams', subtopics: ['Drawing Lewis structures', 'Resonance structures', 'Formal charge', 'Exceptions to the octet rule'] },
              { name: 'VSEPR and Bond Hybridization', subtopics: ['Molecular geometry from VSEPR', 'Bond hybridization', 'Bond and molecular polarity'] },
            ],
          },
          {
            name: 'Properties of Substances and Mixtures',
            weightage: 20,
            topics: [
              { name: 'Intermolecular Forces', subtopics: ['Dispersion, dipole-dipole and hydrogen bonding', 'IMF strength and physical properties', 'Solids: molecular, ionic, metallic and covalent network'] },
              { name: 'Gases', subtopics: ['The ideal gas law and partial pressures', 'Kinetic molecular theory', 'Deviations from ideal behavior'] },
              { name: 'Solutions and Mixtures', subtopics: ['Solubility and saturation', 'Representations of solutions', 'Separation of solutions and mixtures, chromatography'] },
              { name: 'Spectroscopy', subtopics: ['The electromagnetic spectrum and photon energy', 'The photoelectric effect', 'Beer-Lambert law'] },
            ],
          },
          {
            name: 'Chemical Reactions',
            weightage: 8,
            topics: [
              { name: 'Chemical Equations', subtopics: ['Writing and balancing equations', 'Net ionic equations', 'Physical versus chemical changes'] },
              { name: 'Stoichiometry', subtopics: ['Mole and mass calculations', 'Limiting reactant and excess', 'Percent yield and atom economy'] },
              { name: 'Types of Chemical Reactions', subtopics: ['Precipitation reactions', 'Introduction to acid-base reactions', 'Oxidation-reduction reactions'] },
              { name: 'Introduction to Titration', subtopics: ['Titration setup and calculations', 'Equivalence point basics'] },
            ],
          },
          {
            name: 'Kinetics',
            weightage: 8,
            topics: [
              { name: 'Reaction Rates and Rate Laws', subtopics: ['Average and instantaneous rates', 'Rate laws and reaction order', 'Concentration changes over time and half-life'] },
              { name: 'Collision Model and Energy Profiles', subtopics: ['The collision model', 'Reaction energy profiles', 'Temperature effects on rates'] },
              { name: 'Reaction Mechanisms', subtopics: ['Elementary reactions and intermediates', 'Mechanisms consistent with the rate law', 'The steady-state approximation'] },
              { name: 'Catalysis', subtopics: ['Homogeneous and heterogeneous catalysts', 'Effect on the activation energy profile'] },
            ],
          },
          {
            name: 'Thermodynamics',
            weightage: 8,
            topics: [
              { name: 'Endothermic and Exothermic Processes', subtopics: ['Energy diagrams and enthalpy', 'Sign conventions for heat flow'] },
              { name: 'Heat Transfer and Calorimetry', subtopics: ['Thermal equilibrium', 'Heat capacity and specific heat', 'Energy of phase changes'] },
              { name: 'Enthalpy of Reactions', subtopics: ['Enthalpy of reaction', 'Bond enthalpies', 'Enthalpy of formation'] },
              { name: 'Hess\'s Law', subtopics: ['Summing reaction enthalpies', 'Manipulating equations and their enthalpy changes'] },
            ],
          },
          {
            name: 'Equilibrium',
            weightage: 8,
            topics: [
              { name: 'Equilibrium Constant and Reaction Quotient', subtopics: ['Reversible reactions and equilibrium', 'Calculating K and Q', 'Magnitude and properties of K'] },
              { name: 'Calculating Equilibrium Concentrations', subtopics: ['ICE-table setups', 'Representations of equilibrium'] },
              { name: 'Le Châtelier\'s Principle', subtopics: ['Predicting the direction of shift', 'Q versus K reasoning', 'Effects of concentration, volume and temperature changes'] },
              { name: 'Solubility Equilibria', subtopics: ['Ksp calculations', 'The common-ion effect', 'pH, solubility and free energy of dissolution'] },
            ],
          },
          {
            name: 'Acids and Bases',
            weightage: 13,
            topics: [
              { name: 'Introduction to Acids and Bases', subtopics: ['Arrhenius and Brønsted-Lowry definitions', 'pH and pOH of strong acids and bases', 'Molecular structure of acids and bases'] },
              { name: 'Weak Acid and Base Equilibria', subtopics: ['Ka, Kb and Kw', 'pH calculations for weak acids and bases', 'pH and pKa'] },
              { name: 'Buffers', subtopics: ['Buffer composition and action', 'The Henderson-Hasselbalch equation', 'Buffer capacity'] },
              { name: 'Acid-Base Titrations', subtopics: ['Titration curves and equivalence points', 'Half-equivalence point', 'Indicator selection'] },
            ],
          },
          {
            name: 'Applications of Thermodynamics',
            weightage: 8,
            topics: [
              { name: 'Entropy', subtopics: ['Introduction to entropy', 'Absolute entropy and entropy change', 'Qualitative entropy comparisons'] },
              {
                name: 'Gibbs Free Energy and Thermodynamic Favorability',
                subtopics: ['Favorability from ΔG', 'Free energy and equilibrium', 'Coupled reactions', 'Thermodynamic versus kinetic control'],
              },
              { name: 'Electrochemistry', subtopics: ['Galvanic and electrolytic cells', 'Cell potential and free energy', 'Nonstandard conditions', 'Electrolysis and Faraday\'s law'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ap-biology',
    name: 'AP Biology',
    fullName: 'Advanced Placement Biology',
    aliases: ['ap bio', 'ap biology exam', 'biology ap'],
    region: 'United States',
    category: 'AP subject exam',
    popularity: 74,
    syllabusVerified: '2026-10-20',
    website: 'https://apstudents.collegeboard.org',
    overview: {
      conductor: 'College Board',
      level: 'High school → college credit / advanced placement',
      duration: '3 h (Section I MCQ 90 min · Section II FRQ 90 min)',
      marking: 'MCQ 50% + FRQ 50%; score 1-5',
      negativeMarking: 'None',
      questionTypes: ['Multiple-choice (4 options)', 'Free-response questions'],
      notes: 'Section II mixes individual and investigative long questions with short-answer items; science practices run across all eight units.',
    },
    sources: [
      { title: 'AP Biology — Course and Exam Description (CED)', url: 'https://apcentral.collegeboard.org', host: 'apcentral.collegeboard.org' },
    ],
    subjects: [
      {
        name: 'Biology',
        units: [
          {
            name: 'Chemistry of Life',
            weightage: 9.5,
            topics: [
              { name: 'Structure of Water and Hydrogen Bonding', subtopics: ['Polarity and hydrogen bonding', 'Cohesion, adhesion and surface tension', 'Water as a solvent and its high specific heat'] },
              { name: 'Elements of Life', subtopics: ['Essential elements for life', 'Monomers and polymers of macromolecules'] },
              { name: 'Biological Macromolecules', subtopics: ['Carbohydrates, lipids, proteins and nucleic acids', 'Dehydration synthesis and hydrolysis', 'Structure-function relationships'] },
              { name: 'Nucleic Acids', subtopics: ['DNA and RNA components', 'Base pairing and directionality'] },
            ],
          },
          {
            name: 'Cell Structure and Function',
            weightage: 11.5,
            topics: [
              { name: 'Subcellular Components', subtopics: ['Membrane-bound organelles', 'Ribosomes and the endomembrane system', 'Mitochondria and chloroplasts'] },
              { name: 'Cell Structure and Size', subtopics: ['Cell size limitations', 'Surface area to volume ratios', 'Structural features supporting function'] },
              { name: 'Plasma Membranes', subtopics: ['The fluid mosaic model', 'Membrane permeability', 'Selective transport proteins'] },
              { name: 'Membrane Transport', subtopics: ['Passive and facilitated diffusion', 'Active transport and pumps', 'Tonicity and osmoregulation', 'Endocytosis and exocytosis'] },
              { name: 'Cell Compartmentalization', subtopics: ['Compartmentalization in eukaryotes', 'Origins of compartmentalization', 'Internal membranes and metabolic efficiency'] },
            ],
          },
          {
            name: 'Cellular Energetics',
            weightage: 14,
            topics: [
              { name: 'Enzymes', subtopics: ['Enzyme structure and function', 'Catalysis and activation energy', 'Environmental effects on enzyme activity', 'Inhibition and cofactors'] },
              { name: 'Cellular Energy', subtopics: ['ATP and energy coupling', 'Redox reactions and electron carriers'] },
              { name: 'Photosynthesis', subtopics: ['Light-dependent reactions', 'The Calvin cycle', 'Pigments and chloroplast structure'] },
              { name: 'Cellular Respiration', subtopics: ['Glycolysis and fermentation', 'The Krebs cycle', 'Oxidative phosphorylation and chemiosmosis', 'Fitness of different energy strategies'] },
            ],
          },
          {
            name: 'Cell Communication and Cell Cycle',
            weightage: 12.5,
            topics: [
              { name: 'Cell Communication', subtopics: ['Local and long-distance signaling', 'Reception and ligands', 'Cellular responses'] },
              { name: 'Signal Transduction', subtopics: ['Signal transduction pathways', 'Signal amplification', 'Changes in pathways over evolution'] },
              { name: 'Feedback', subtopics: ['Positive feedback loops', 'Negative feedback and homeostasis'] },
              { name: 'Cell Cycle and Its Regulation', subtopics: ['Interphase and mitosis', 'Checkpoints and regulatory proteins', 'Cancer as a breakdown of regulation'] },
            ],
          },
          {
            name: 'Heredity',
            weightage: 9.5,
            topics: [
              { name: 'Meiosis', subtopics: ['Meiosis I and II', 'Crossing over and independent assortment', 'Meiosis as a source of genetic diversity'] },
              { name: 'Mendelian Genetics', subtopics: ['Mendel\'s laws of segregation and independent assortment', 'Monohybrid and dihybrid crosses', 'Probability rules', 'Pedigree analysis'] },
              { name: 'Non-Mendelian Genetics', subtopics: ['Incomplete dominance and codominance', 'Sex-linked inheritance', 'Linked genes and recombination', 'Non-nuclear inheritance'] },
              { name: 'Environmental Effects on Phenotype', subtopics: ['Environmental influences on traits', 'Examples such as nutrition and temperature'] },
            ],
          },
          {
            name: 'Gene Expression and Regulation',
            weightage: 14,
            topics: [
              { name: 'DNA and RNA Structure and Replication', subtopics: ['Nucleotide structure and base pairing', 'Semi-conservative replication', 'Enzymes and mechanism of replication'] },
              { name: 'Transcription and RNA Processing', subtopics: ['Transcription in prokaryotes and eukaryotes', 'RNA processing and splicing'] },
              { name: 'Translation', subtopics: ['The genetic code and codons', 'Ribosomes and tRNA', 'Stages of translation'] },
              { name: 'Regulation of Gene Expression and Cell Specialization', subtopics: ['Operons in prokaryotes', 'Eukaryotic regulatory elements', 'Differential expression and cell specialization'] },
              { name: 'Mutations and Biotechnology', subtopics: ['Types of mutations and their effects', 'Gel electrophoresis and PCR', 'Bacterial transformation'] },
            ],
          },
          {
            name: 'Natural Selection',
            weightage: 14.5,
            topics: [
              { name: 'Natural and Artificial Selection', subtopics: ['Natural selection fundamentals', 'Artificial selection and domestication', 'Variation within populations'] },
              { name: 'Population Genetics and Hardy-Weinberg', subtopics: ['Hardy-Weinberg equilibrium', 'Conditions for equilibrium', 'Directional, stabilizing and disruptive selection'] },
              { name: 'Evidence of Evolution and Common Ancestry', subtopics: ['Fossil and molecular evidence', 'Homologous and analogous structures', 'Phylogeny and evolutionary relationships', 'Continuing evolution'] },
              { name: 'Speciation and Extinction', subtopics: ['Reproductive isolation and speciation', 'Rates of speciation and extinction'] },
            ],
          },
          {
            name: 'Ecology',
            weightage: 16.5,
            topics: [
              { name: 'Responses to the Environment', subtopics: ['Responses to biotic and abiotic factors', 'Behavioral and physiological responses'] },
              { name: 'Energy Flow Through Ecosystems', subtopics: ['Trophic levels and food webs', 'Primary productivity', 'Energy transfer efficiency between levels'] },
              { name: 'Population Ecology', subtopics: ['Exponential and logistic growth models', 'Carrying capacity', 'Density-dependent and density-independent effects'] },
              { name: 'Community Ecology', subtopics: ['Competition, predation and symbiosis', 'Biodiversity and ecosystem stability'] },
              { name: 'Disruptions to Ecosystems', subtopics: ['Invasive species', 'Human activity and climate-related disruption'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ap-csa',
    name: 'AP Computer Science A',
    fullName: 'Advanced Placement Computer Science A',
    aliases: ['ap csa', 'ap computer science', 'ap comp sci'],
    region: 'United States',
    category: 'AP subject exam',
    popularity: 73,
    syllabusVerified: '2026-10-20',
    website: 'https://apstudents.collegeboard.org',
    overview: {
      conductor: 'College Board',
      level: 'High school → college credit / advanced placement',
      duration: '3 h (Section I MCQ 90 min · Section II FRQ 90 min)',
      marking: 'MCQ 50% + FRQ 50%; score 1-5',
      negativeMarking: 'None',
      questionTypes: ['Multiple-choice (4 options)', 'Free-response questions'],
      notes: 'All code is written in Java; the 2024 course update reorganized the early units around objects and methods, and abstract classes and interfaces are not tested.',
    },
    sources: [
      { title: 'AP Computer Science A — Course and Exam Description (CED)', url: 'https://apcentral.collegeboard.org', host: 'apcentral.collegeboard.org' },
    ],
    subjects: [
      {
        name: 'Computer Science A',
        mappedSubjectId: 'programming-java',
        units: [
          {
            name: 'Using Objects and Methods',
            topics: [
              { name: 'Why Programming? Why Java?', subtopics: ['Programs and algorithms in everyday contexts', 'Compiling and executing Java programs', 'Program input and output'] },
              { name: 'Variables and Data Types', subtopics: ['Primitive types: int, double and boolean', 'Declarations and initialization', 'Casting and ranges of variables'] },
              { name: 'Expressions and Assignment Statements', subtopics: ['Arithmetic operators and precedence', 'Compound assignment operators', 'Integer division and the modulo operator'] },
              { name: 'Calling Methods', subtopics: ['String methods: length, substring, indexOf and equals', 'Math class methods', 'Void and non-void method calls'] },
            ],
          },
          {
            name: 'Class Creation',
            topics: [
              { name: 'Objects: Instances of Classes', subtopics: ['Attributes and behaviors', 'State of an object'] },
              { name: 'Creating and Storing Objects', subtopics: ['Constructors and the new keyword', 'Null references and aliasing', 'Constructor parameters'] },
              { name: 'Writing Methods', subtopics: ['Method headers and return types', 'Formal versus actual parameters', 'Void methods with parameters'] },
            ],
          },
          {
            name: 'Boolean Expressions and if Statements',
            topics: [
              { name: 'Boolean Expressions', subtopics: ['Relational operators', 'Object equivalence with == and equals', 'Compound expressions with &&, || and !'] },
              { name: 'if Statements', subtopics: ['if and if-else', 'else if chains', 'Nested conditionals'] },
              { name: 'Equivalent Boolean Expressions', subtopics: ['De Morgan\'s laws', 'Simplifying compound conditions'] },
            ],
          },
          {
            name: 'Iteration',
            topics: [
              { name: 'while Loops', subtopics: ['Standard while loops', 'Avoiding infinite loops and off-by-one errors'] },
              { name: 'for Loops', subtopics: ['For-loop structure and bounds', 'Counting patterns'] },
              { name: 'Nested Iteration', subtopics: ['Nested loops', 'Tracing nested execution'] },
              { name: 'Iteration Algorithms', subtopics: ['Accumulating sums and products', 'Finding minimum and maximum values', 'String traversal algorithms'] },
            ],
          },
          {
            name: 'Writing Classes',
            topics: [
              { name: 'Class Definitions', subtopics: ['Instance variables and constructors', 'The this reference', 'Encapsulation with private access'] },
              { name: 'Accessor and Mutator Methods', subtopics: ['Getters and setters', 'Preconditions and postconditions'] },
              { name: 'Static Members', subtopics: ['Static variables and methods', 'When to use static members'] },
              { name: 'Scope and Access', subtopics: ['Local, parameter and instance scope', 'Public and private modifiers'] },
            ],
          },
          {
            name: 'Array',
            topics: [
              { name: 'Array Creation and Access', subtopics: ['Declaring and initializing arrays', 'Indexing and the length field', 'Bounds and exceptions'] },
              { name: 'Traversing Arrays', subtopics: ['Standard for loops', 'Enhanced for loops', 'Modifying elements while traversing'] },
              { name: 'Array Algorithms', subtopics: ['Sum, average, min and max', 'Search, shift and reverse algorithms'] },
            ],
          },
          {
            name: 'ArrayList',
            topics: [
              { name: 'ArrayList Objects and Methods', subtopics: ['Creating ArrayLists', 'add, get, set, remove and size', 'Wrapper classes and autoboxing', 'Ethical issues around data collections'] },
              { name: 'Traversing ArrayLists', subtopics: ['Index-based traversal', 'Removing elements safely while traversing'] },
              { name: 'Searching Algorithms', subtopics: ['Sequential search', 'Binary search'] },
              { name: 'Sorting Algorithms', subtopics: ['Insertion sort', 'Selection sort', 'Merge sort'] },
            ],
          },
          {
            name: '2D Array',
            topics: [
              { name: '2D Array Creation and Access', subtopics: ['Declaring 2D arrays', 'Row and column indexing', 'Array initializers'] },
              { name: 'Traversing 2D Arrays', subtopics: ['Nested loops and row-major order', 'Enhanced for over 2D arrays', 'Algorithms on 2D data'] },
            ],
          },
          {
            name: 'Inheritance',
            topics: [
              { name: 'Creating Subclasses', subtopics: ['The extends keyword', 'Inherited versus new members', 'Superclass and subclass relationships'] },
              { name: 'Subclass Constructors and super References', subtopics: ['Constructor chaining with super', 'Calling superclass methods'] },
              { name: 'Overriding Methods', subtopics: ['Method overriding', 'Dynamic dispatch', 'super calls inside overridden methods'] },
              { name: 'Inheritance Hierarchies', subtopics: ['Polymorphic references', 'Downcasting and upcasting', 'Designing hierarchies'] },
              { name: 'The Object Class', subtopics: ['toString', 'equals'] },
            ],
          },
          {
            name: 'Recursion',
            topics: [
              { name: 'Recursive Methods', subtopics: ['Base cases and recursive calls', 'Tracing recursive execution', 'When recursion fits a problem'] },
              { name: 'Recursive Searching and Sorting', subtopics: ['Binary search recursively', 'Merge sort recursively'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ap-statistics',
    name: 'AP Statistics',
    fullName: 'Advanced Placement Statistics',
    aliases: ['ap stats', 'ap stat', 'ap statistics exam'],
    region: 'United States',
    category: 'AP subject exam',
    popularity: 70,
    syllabusVerified: '2026-10-20',
    website: 'https://apstudents.collegeboard.org',
    overview: {
      conductor: 'College Board',
      level: 'High school → college credit / advanced placement',
      duration: '3 h (Section I MCQ 90 min · Section II FRQ 90 min)',
      marking: 'MCQ 50% + FRQ 50%; score 1-5',
      negativeMarking: 'None',
      questionTypes: ['Multiple-choice (4 options)', 'Free-response questions'],
      notes: 'A graphing calculator with statistics functions is expected on both sections; the CED does not publish fixed unit weightings for this course.',
    },
    sources: [
      { title: 'AP Statistics — Course and Exam Description (CED)', url: 'https://apcentral.collegeboard.org', host: 'apcentral.collegeboard.org' },
    ],
    subjects: [
      {
        name: 'Statistics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Exploring One-Variable Data',
            topics: [
              { name: 'Introducing Statistics and Data Basics', subtopics: ['Categorical versus quantitative variables', 'Explanatory and response variables', 'Individuals and variables'] },
              { name: 'Graphical Representations', subtopics: ['Dotplots, stemplots and histograms', 'Describing shape, center and spread', 'Cumulative relative frequency graphs'] },
              { name: 'Measures of Center and Spread', subtopics: ['Mean, median and mode', 'Range, IQR and standard deviation', 'Boxplots and the 1.5 IQR outlier rule'] },
              { name: 'Comparing Distributions', subtopics: ['Side-by-side graphs', 'Comparing center, spread and shape in context'] },
              { name: 'The Normal Distribution', subtopics: ['Density curves', 'z-scores and the standard normal curve', 'The empirical rule and normal calculations'] },
            ],
          },
          {
            name: 'Exploring Two-Variable Data',
            topics: [
              { name: 'Correlation', subtopics: ['Scatterplots', 'The correlation coefficient r', 'Correlation is not causation'] },
              { name: 'Linear Regression', subtopics: ['Least-squares regression lines', 'Interpreting slope, intercept and residuals', 'r-squared and the standard deviation of residuals'] },
              { name: 'Regression Diagnostics and Transformations', subtopics: ['Residual plots', 'Influential points and outliers', 'Logarithmic and power transformations'] },
              { name: 'Categorical Data: Two-Way Tables', subtopics: ['Marginal, joint and conditional distributions', 'Association between categorical variables'] },
            ],
          },
          {
            name: 'Collecting Data',
            topics: [
              { name: 'Sampling Methods and Sources of Bias', subtopics: ['Simple random samples', 'Stratified, cluster and systematic sampling', 'Sources of bias in sample surveys'] },
              { name: 'Experimental Design', subtopics: ['Treatments, control groups and placebos', 'Random assignment and blinding', 'Blocking and matched pairs', 'Replication'] },
              { name: 'Scope of Inference', subtopics: ['Causation from well-designed experiments', 'Generalizing to populations', 'Confounding variables'] },
            ],
          },
          {
            name: 'Probability, Random Variables, and Probability Distributions',
            topics: [
              { name: 'Probability Rules', subtopics: ['Sample spaces and events', 'Addition and multiplication rules', 'Conditional probability and independence'] },
              { name: 'Random Variables', subtopics: ['Discrete random variables', 'Mean (expected value) and standard deviation', 'Combining and transforming random variables'] },
              { name: 'Binomial and Geometric Distributions', subtopics: ['Binomial settings and calculations', 'Mean and standard deviation of a binomial', 'Geometric settings and calculations'] },
            ],
          },
          {
            name: 'Sampling Distributions',
            topics: [
              { name: 'Sampling Distributions and Variability', subtopics: ['Statistics as random variables', 'Bias and variability of estimators', 'Simulating sampling distributions'] },
              { name: 'Sampling Distribution of a Sample Proportion', subtopics: ['Mean and standard deviation', 'Normal condition checks'] },
              { name: 'Sampling Distribution of a Sample Mean', subtopics: ['The central limit theorem', 'Effect of sample size'] },
            ],
          },
          {
            name: 'Inference for Categorical Data: Proportions',
            topics: [
              { name: 'Confidence Intervals for a Proportion', subtopics: ['Constructing the interval', 'Interpreting confidence levels', 'Choosing a sample size'] },
              { name: 'Hypothesis Tests for a Proportion', subtopics: ['Null and alternative hypotheses', 'Test statistics and p-values', 'Stating conclusions in context'] },
              { name: 'Type I and Type II Errors and Power', subtopics: ['Error types and their consequences', 'What affects the power of a test'] },
              { name: 'Two-Proportion Inference', subtopics: ['Confidence interval for a difference of proportions', 'Tests for a difference of proportions'] },
            ],
          },
          {
            name: 'Inference for Quantitative Data: Means',
            topics: [
              { name: 'Confidence Intervals for a Mean', subtopics: ['The t-distribution', 'Constructing and interpreting intervals'] },
              { name: 'Hypothesis Tests for a Mean', subtopics: ['One-sample t-tests', 'Conditions for inference'] },
              { name: 'Paired and Two-Sample t Procedures', subtopics: ['Paired versus independent designs', 'Two-sample t-intervals and tests'] },
            ],
          },
          {
            name: 'Inference for Categorical Data: Chi-Square',
            topics: [
              { name: 'Chi-Square Goodness-of-Fit Test', subtopics: ['Expected counts and conditions', 'Test statistic and conclusions'] },
              { name: 'Chi-Square Tests for Homogeneity', subtopics: ['Comparing distributions across several populations', 'Expected counts and conditions', 'Test statistic and conclusions'] },
              { name: 'Chi-Square Tests for Independence', subtopics: ['Testing association in two-way tables', 'Expected counts under independence', 'Degrees of freedom for two-way tables'] },
            ],
          },
          {
            name: 'Inference for Quantitative Data: Slopes',
            topics: [
              { name: 'Sampling Distribution of the Slope', subtopics: ['Conditions for inference on a slope', 'Standard error of the estimated slope'] },
              { name: 'Confidence Intervals and Tests for a Slope', subtopics: ['Interval for the population slope', 'The t-test for a slope', 'Degrees of freedom n minus 2'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'mcat',
    name: 'MCAT',
    fullName: 'Medical College Admission Test',
    aliases: ['medical college admission test'],
    region: 'United States',
    category: 'Medical admission',
    popularity: 79,
    syllabusVerified: '2026-10-20',
    website: 'https://students-residents.aamc.org',
    overview: {
      conductor: 'AAMC (Association of American Medical Colleges)',
      level: 'Undergraduate → MD programs',
      duration: '7 h 30 min total (four 90-95 min sections)',
      marking: '118-132 per section; 472-528 total',
      negativeMarking: 'None',
      questionTypes: ['Passage-based MCQs', 'Standalone discrete questions'],
      notes: 'No penalty for guessing; foundations-of-behavior sections test research-methods skills throughout.',
    },
    sources: [
      { title: 'MCAT — What is on the MCAT Exam', url: 'https://students-residents.aamc.org', host: 'aamc.org' },
    ],
    subjects: [
      {
        name: 'Chemical and Physical Foundations — Physics',
        mappedSubjectId: 'physics',
        units: [
          {
            name: 'Translational Motion and Forces',
            topics: [
              { name: 'Kinematics', subtopics: ['Vectors, distance and displacement', 'Speed, velocity and acceleration', 'Projectile and free-fall motion'] },
              { name: 'Newton\'s Laws and Free-Body Diagrams', subtopics: ['Drawing free-body diagrams', 'Friction, inclines and pulleys', 'Equilibrium and tension'] },
              { name: 'Uniform Circular Motion', subtopics: ['Centripetal acceleration and force', 'Period, frequency and speed'] },
            ],
          },
          {
            name: 'Work and Energy',
            topics: [
              { name: 'Work and Kinetic Energy', subtopics: ['The work-energy theorem', 'Positive, negative and total work'] },
              { name: 'Potential Energy and Conservation', subtopics: ['Gravitational and elastic potential energy', 'Conservation of mechanical energy', 'Energy dissipated by friction'] },
              { name: 'Power', subtopics: ['Average and instantaneous power', 'Power in mechanical systems'] },
            ],
          },
          {
            name: 'Electrostatics and Circuits',
            topics: [
              { name: 'Electrostatics', subtopics: ['Charge and Coulomb\'s law', 'Electric fields and potential', 'Equipotential lines'] },
              { name: 'Circuit Elements and Ohm\'s Law', subtopics: ['Current, voltage and resistance', 'Resistivity', 'Circuit symbols and meters'] },
              { name: 'Circuit Analysis', subtopics: ['Series and parallel resistors', 'Kirchhoff\'s rules', 'Capacitance and capacitors', 'Power dissipation in circuits'] },
            ],
          },
          {
            name: 'Waves and Sound',
            topics: [
              { name: 'Wave Characteristics', subtopics: ['Transverse and longitudinal waves', 'Amplitude, frequency, wavelength and speed', 'Periodic motion of springs and pendulums'] },
              { name: 'Sound', subtopics: ['Production and propagation of sound', 'Intensity, loudness and attenuation', 'The Doppler effect', 'Pitch and resonance'] },
              { name: 'Standing Waves and Interference', subtopics: ['Resonance in pipes and strings', 'Open and closed pipe harmonics', 'Wave interference and beats'] },
            ],
          },
          {
            name: 'Light and Optics',
            topics: [
              { name: 'Electromagnetic Radiation', subtopics: ['The electromagnetic spectrum', 'Polarization', 'Color, filters and dispersion'] },
              { name: 'Reflection and Refraction', subtopics: ['The law of reflection', 'Snell\'s law and total internal reflection', 'Index of refraction'] },
              { name: 'Mirrors and Lenses', subtopics: ['Concave and convex mirrors', 'Converging and diverging lenses', 'Ray diagrams, focal length and magnification'] },
              { name: 'Diffraction and Interference', subtopics: ['Single-slit and double-slit patterns', 'Thin-film interference'] },
            ],
          },
          {
            name: 'Atomic and Nuclear Physics',
            topics: [
              { name: 'Atomic Structure and Spectra', subtopics: ['The Bohr model and energy levels', 'Absorption and emission spectra', 'Photon energy'] },
              { name: 'Nuclear Physics', subtopics: ['Radioactive decay modes', 'Half-life calculations', 'Mass-energy equivalence, fission and fusion'] },
            ],
          },
        ],
      },
      {
        name: 'Chemical and Physical Foundations — Chemistry & Biochemistry',
        mappedSubjectId: 'chemistry',
        units: [
          {
            name: 'General Chemistry: Elements and Bonding',
            topics: [
              { name: 'Atomic Structure and the Periodic Table', subtopics: ['Electron configurations', 'Periodic trends: radius, ionization energy and electronegativity', 'Isotopes and average atomic mass'] },
              { name: 'Chemical Bonding', subtopics: ['Ionic, covalent and metallic bonds', 'Lewis structures and formal charge', 'VSEPR shapes and polarity'] },
              { name: 'Intermolecular Forces', subtopics: ['Dispersion, dipole-dipole forces and hydrogen bonding', 'How IMFs shape physical properties'] },
            ],
          },
          {
            name: 'Reactions and Stoichiometry',
            topics: [
              { name: 'Stoichiometry and the Mole', subtopics: ['Moles, molar mass and Avogadro\'s number', 'Balancing equations and limiting reagents', 'Empirical and molecular formulas'] },
              { name: 'Reaction Types and Equations', subtopics: ['Oxidation-reduction and oxidation states', 'Net ionic equations', 'Synthesis, decomposition and replacement reactions'] },
            ],
          },
          {
            name: 'Solutions and Acid-Base',
            topics: [
              { name: 'Solutions and Concentration', subtopics: ['Molarity, molality and dilutions', 'Solubility rules and saturation', 'Electrolytes'] },
              { name: 'Acid-Base Chemistry', subtopics: ['pH, pOH and Kw', 'Strong versus weak acids and bases', 'Conjugate pairs, Ka and Kb'] },
              { name: 'Titrations and Buffers', subtopics: ['Titration curves and equivalence points', 'Buffer systems and buffer capacity'] },
            ],
          },
          {
            name: 'Biochemistry: Biomolecules and Metabolism',
            topics: [
              { name: 'Amino Acids and Protein Structure', subtopics: ['Amino acid classes and properties', 'Primary through quaternary structure', 'Denaturation and folding'] },
              { name: 'Enzymes', subtopics: ['Enzyme kinetics basics', 'Cofactors and coenzymes', 'Competitive and noncompetitive inhibition'] },
              { name: 'Carbohydrates and Lipids', subtopics: ['Monosaccharides and polysaccharides', 'Fatty acids, triglycerides and phospholipids', 'Amphipathic molecules and membranes'] },
              { name: 'Metabolism and Bioenergetics', subtopics: ['Glycolysis, gluconeogenesis and the Krebs cycle', 'The electron transport chain and oxidative phosphorylation', 'ATP and coupled reactions', 'Metabolic regulation'] },
            ],
          },
        ],
      },
      {
        name: 'Critical Analysis and Reasoning Skills',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Foundations of Comprehension',
            topics: [
              { name: 'Words and Phrases in Context', subtopics: ['Meaning from surrounding text', 'Rhetorical uses of specific wording'] },
              { name: 'Sentence and Paragraph Meaning', subtopics: ['Literal comprehension of sentences', 'Paragraph focus and transitions', 'Textual components: words, sentences and paragraphs'] },
            ],
          },
          {
            name: 'Reasoning Within the Text',
            topics: [
              { name: 'Thesis and Support', subtopics: ['Identifying the thesis and main claims', 'How evidence supports claims', 'Following the flow of an argument'] },
              { name: 'Relationships Among Ideas', subtopics: ['Cause and effect, comparison and contrast', 'How examples and illustrations function', 'Synthesizing components of the passage'] },
            ],
          },
          {
            name: 'Reasoning Beyond the Text',
            topics: [
              { name: 'Application and Extrapolation', subtopics: ['Applying passage ideas to new contexts', 'Using hypotheses and evidence outside the passage'] },
              { name: 'Integrating New Information', subtopics: ['How new information affects conclusions', 'Weighing new evidence for and against claims', 'Recognizing unstated assumptions'] },
            ],
          },
        ],
      },
      {
        name: 'Biological and Biochemical Foundations of Living Systems',
        units: [
          {
            name: 'Molecular Biology and Genetics',
            topics: [
              { name: 'Molecular Genetics', subtopics: ['DNA replication, transcription and translation', 'Regulation of gene expression', 'Mutations and DNA repair'] },
              { name: 'Transmission Genetics', subtopics: ['Mendelian inheritance', 'Meiosis and genetic diversity', 'Linkage, recombination and pedigrees'] },
              { name: 'Biotechnology', subtopics: ['Recombinant DNA basics', 'PCR and gel electrophoresis', 'Bacterial transformation'] },
            ],
          },
          {
            name: 'Cell Structure and Function',
            topics: [
              { name: 'Cell Structure and Organelles', subtopics: ['Prokaryotic versus eukaryotic cells', 'Organelles and their functions', 'Cytoskeleton and cell junctions'] },
              { name: 'Membrane Transport and Signaling', subtopics: ['Diffusion, osmosis and active transport', 'Receptors and signal transduction', 'Cell communication'] },
              { name: 'Cell Division', subtopics: ['Mitosis and the cell cycle', 'Checkpoints and regulation', 'Apoptosis'] },
            ],
          },
          {
            name: 'Tissues and Organ Systems',
            topics: [
              { name: 'Tissue Types', subtopics: ['Epithelial, connective, muscle and nervous tissue', 'Structure-function relationships of tissues'] },
              { name: 'Circulatory, Respiratory and Digestive Systems', subtopics: ['Gas exchange and blood flow', 'Digestion and nutrient absorption', 'Homeostatic regulation'] },
              { name: 'Immune, Renal, Endocrine and Reproductive Systems', subtopics: ['Innate and adaptive immunity', 'Kidney filtration and function', 'Hormonal control of physiology'] },
            ],
          },
          {
            name: 'Biochemistry of Metabolism',
            topics: [
              { name: 'Enzymes and Metabolic Regulation', subtopics: ['Enzyme kinetics and inhibition', 'Allosteric and hormonal regulation'] },
              { name: 'Central Metabolic Pathways', subtopics: ['Glycolysis and gluconeogenesis', 'The Krebs cycle', 'Oxidative phosphorylation and ATP yield'] },
              { name: 'Lipid and Nitrogen Metabolism', subtopics: ['Fatty acid synthesis and beta-oxidation', 'Ketone bodies and cholesterol', 'Amino acid catabolism and the urea cycle'] },
            ],
          },
          {
            name: 'Evolution and Natural Selection',
            topics: [
              { name: 'Evolutionary Mechanisms', subtopics: ['Natural selection, genetic drift and gene flow', 'Sources of genetic variation', 'Evidence for evolution'] },
              { name: 'Speciation and Phylogeny', subtopics: ['Reproductive isolation and species concepts', 'Phylogenetic trees and shared ancestry'] },
              { name: 'Population Genetics', subtopics: ['Hardy-Weinberg equilibrium', 'Types of selection and fitness'] },
            ],
          },
        ],
      },
      {
        name: 'Psychological, Social, and Biological Foundations of Behavior',
        units: [
          {
            name: 'Behavior and Behavior Change',
            topics: [
              { name: 'Attitudes and Persuasion', subtopics: ['Attitude formation and change', 'Cognitive dissonance', 'Central and peripheral routes of persuasion'] },
              { name: 'Theories of Behavior Change', subtopics: ['The stages-of-change model', 'Self-efficacy and locus of control', 'Habit formation'] },
            ],
          },
          {
            name: 'Interactions Between Biology and Behavior',
            topics: [
              { name: 'Biological Bases of Behavior', subtopics: ['Neuron structure and function', 'Neurotransmitters and signaling', 'Organization of the nervous system'] },
              { name: 'The Endocrine System and Behavior', subtopics: ['Major endocrine glands and hormones', 'Hormonal influences on behavior'] },
              { name: 'Behavioral Neuroscience Methods', subtopics: ['Lesion and stimulation studies', 'Imaging and recording techniques', 'Behavioral genetics and twin studies'] },
            ],
          },
          {
            name: 'Perception and Attention',
            topics: [
              { name: 'Sensation', subtopics: ['Sensory receptors and transduction', 'Absolute and difference thresholds', 'Sensory adaptation'] },
              { name: 'Perception', subtopics: ['Top-down and bottom-up processing', 'Gestalt principles', 'Depth perception and perceptual constancies'] },
              { name: 'Attention', subtopics: ['Selective attention', 'Divided attention and multitasking limits', 'Inattentional and change blindness'] },
            ],
          },
          {
            name: 'Learning and Memory',
            topics: [
              { name: 'Learning', subtopics: ['Classical conditioning', 'Operant conditioning and reinforcement schedules', 'Observational learning'] },
              { name: 'Memory', subtopics: ['Encoding, storage and retrieval', 'Working and long-term memory systems', 'Memory consolidation'] },
              { name: 'Forgetting and Distortion', subtopics: ['Interference and decay', 'False memories', 'Types of amnesia'] },
            ],
          },
          {
            name: 'Social Processes and Identity',
            topics: [
              { name: 'Social Influence', subtopics: ['Conformity, compliance and obedience', 'Group processes and groupthink', 'Social facilitation'] },
              { name: 'Social Identity and Attribution', subtopics: ['Self-concept and identity development', 'Social identity theory', 'Attribution biases including the fundamental attribution error'] },
              { name: 'Interpersonal Behavior', subtopics: ['Attraction and relationship formation', 'Aggression', 'Prosocial behavior and altruism'] },
            ],
          },
          {
            name: 'Social Stratification and Inequality',
            topics: [
              { name: 'Class and Stratification', subtopics: ['Social class and socioeconomic status', 'Systems of stratification and mobility', 'Effects of poverty and segregation'] },
              { name: 'Prejudice and Discrimination', subtopics: ['Stereotypes, prejudice and discrimination', 'Theories of prejudice', 'Reducing prejudice, including the contact hypothesis'] },
              { name: 'Culture and Group Differences', subtopics: ['Culture, norms and cultural change', 'Demographic characteristics and identity', 'Health and educational disparities'] },
            ],
          },
          {
            name: 'Psychology of Health and Illness',
            topics: [
              { name: 'Stress and Coping', subtopics: ['The physiological stress response', 'Coping strategies and social support', 'How stress affects health'] },
              { name: 'Health Behavior and Medical Care', subtopics: ['Health behavior and adherence', 'Doctor-patient communication', 'Well-being and quality of life'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'lsat',
    name: 'LSAT',
    fullName: 'Law School Admission Test',
    aliases: ['law school admission test', 'lsat exam'],
    region: 'United States',
    category: 'Law admission',
    popularity: 77,
    syllabusVerified: '2026-10-20',
    website: 'https://www.lsac.org',
    overview: {
      conductor: 'LSAC (Law School Admission Council)',
      level: 'Undergraduate → JD programs',
      duration: '≈ 2 h 20 min (four 35-min sections: two Logical Reasoning, one Reading Comprehension, one unscored experimental) + 35-min unscored writing',
      marking: '120-180 scale',
      negativeMarking: 'None',
      questionTypes: ['Four-choice MCQs', 'Argument-based passages'],
      notes: 'Logic Games (analytical reasoning) were removed from the LSAT in August 2024; a second Logical Reasoning section replaced them.',
    },
    sources: [
      { title: 'LSAT — test structure and question types', url: 'https://www.lsac.org', host: 'lsac.org' },
    ],
    subjects: [
      {
        name: 'Logical Reasoning',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Argument Structure',
            topics: [
              { name: 'Identifying Conclusions', subtopics: ['Separating the conclusion from premises', 'Conclusion indicator words', 'Main point versus subsidiary points'] },
              { name: 'Premises', subtopics: ['Identifying supporting evidence', 'Premise indicators', 'How premises connect to the conclusion'] },
              { name: 'Assumptions', subtopics: ['Necessary assumptions', 'Sufficient assumptions', 'The gap between premises and conclusion'] },
            ],
          },
          {
            name: 'Argument Evaluation',
            topics: [
              { name: 'Weakening Arguments', subtopics: ['Finding the vulnerability in an argument', 'Answer choices that attack assumptions'] },
              { name: 'Strengthening Arguments', subtopics: ['Bolstering the link between premises and conclusion', 'Ruling out alternative explanations'] },
              { name: 'Flaws and Fallacies', subtopics: ['Common reasoning flaws', 'Circular reasoning, overgeneralization and false cause', 'Matching flaws to answer choices'] },
              { name: 'Assumption Questions', subtopics: ['Necessary-assumption elimination', 'The negation test', 'Sufficient versus necessary in answer choices'] },
            ],
          },
          {
            name: 'Inference and Application',
            topics: [
              { name: 'Must-Be-True Inferences', subtopics: ['What the statements logically entail', 'Avoiding overly strong conclusions'] },
              { name: 'Principle Application', subtopics: ['Matching scenarios to principles', 'Principles that justify reasoning'] },
              { name: 'Paradox Resolution', subtopics: ['Explaining surprising results', 'Resolving apparent contradictions'] },
              { name: 'Method and Role of Argument Parts', subtopics: ['Describing the method of reasoning', 'The function of a highlighted statement', 'Roles: evidence, counterexample and concession'] },
            ],
          },
        ],
      },
      {
        name: 'Reading Comprehension',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Reading Comprehension Passages',
            topics: [
              { name: 'Main Point', subtopics: ['Global main-idea questions', 'Primary purpose questions'] },
              { name: 'Author Attitude', subtopics: ['Tone and opinion markers', 'Degrees of agreement and criticism', 'Attitude toward cited views'] },
              { name: 'Inference from Text', subtopics: ['What must be true based on the passage', 'Inferences about specific references'] },
              { name: 'Function of Phrases and Paragraphs', subtopics: ['Why an example or aside is included', 'How paragraphs advance the argument'] },
            ],
          },
          {
            name: 'Comparative Reading',
            topics: [
              { name: 'Two-Passage Relationship Questions', subtopics: ['Points of agreement and disagreement', 'How one author would respond to the other'] },
              { name: 'Analyzing Each Passage in the Pair', subtopics: ['Questions about a single passage in the set', 'Contrasting methods, evidence and emphasis'] },
            ],
          },
        ],
      },
    ],
  },
]

// ============================================================================
// DRDO Scientist 'B' — Tier-II Mechanical Engineering discipline (bookId
// 'drdo-me'). Chapter/section metadata transcribed from the official DRDO
// RAC descriptive-syllabus topic lists (RAC advertisement written-exam
// syllabus, UPSC ESE-Mains style, documented for Advt 140 and reproduced by
// Testbook/Adda247/Embibe — see research/sat-drdo-syllabus.md §2.4; CEPTAM
// STA-'B' ME Tier-II topics used for cross-reference). RAC Paper 1 / Paper 2
// topic clusters (fluids, thermo + heat transfer, IC engines + RAC, turbo,
// power plant, renewables; solid mechanics, materials, mechanisms, design,
// manufacturing + industrial, mechatronics) are regrouped into the 12 core
// ME areas below.
// ============================================================================
import type { ChapterMeta, SectionMeta } from '../../library'

export const DRDO_ME_CHAPTERS: ChapterMeta[] = [
  { id: 'me-d1', bookId: 'me-complete', number: 31, title: 'Engineering Mathematics', shortTitle: 'Engineering Maths', description: 'Applied mathematics for mechanical analysis — linear algebra, calculus, differential equations, probability and numerical methods used across the defence research establishment design work.', icon: 'sigma', pages: 'Area 1', interactiveKey: 'curve-lab' },
  { id: 'me-d2', bookId: 'me-complete', number: 32, title: 'Fluid Mechanics & Machinery', shortTitle: 'Fluids & Machinery', description: 'Fluid properties and statics through viscous pipe flow, then pumps, turbines and jet propulsion — the flow science behind the defence research establishment hydraulics, aerodynamics and propulsion.', icon: 'wind', pages: 'Area 2', interactiveKey: 'js-playground' },
  { id: 'me-d3', bookId: 'me-complete', number: 33, title: 'Thermodynamics', shortTitle: 'Thermodynamics', description: 'The laws of thermodynamics, entropy and availability with Rankine, Otto, Diesel and Dual cycle analysis — the theoretical core of the defence research establishment propulsion and energy conversion.', icon: 'thermometer', pages: 'Area 3', interactiveKey: 'gas-lab' },
  { id: 'me-d4', bookId: 'me-complete', number: 34, title: 'Heat Transfer', shortTitle: 'Heat Transfer', description: 'Conduction, convection, radiation and heat-exchanger performance — the thermal design science for the defence research establishment missiles, electronics cooling and power hardware.', icon: 'zap', pages: 'Area 4', interactiveKey: 'gas-lab' },
  { id: 'me-d5', bookId: 'me-complete', number: 35, title: 'IC Engines, Refrigeration & Power Plant', shortTitle: 'Engines & Power Plant', description: 'IC engines and their systems, refrigeration and air conditioning, and power plant cycles and components — energy conversion machinery for the defence research establishment platforms and installations.', icon: 'repeat', pages: 'Area 5', interactiveKey: 'js-playground' },
  { id: 'me-d6', bookId: 'me-complete', number: 36, title: 'Mechanics of Materials', shortTitle: 'Mechanics of Materials', description: 'Forces and dynamics, stress and strain, bending and torsion and pressure vessels — the strength-of-materials foundation for the defence research establishment airframes, launchers and structures.', icon: 'shapes', pages: 'Area 6', interactiveKey: 'js-playground' },
  { id: 'me-d7', bookId: 'me-complete', number: 37, title: 'Theory of Machines & Design', shortTitle: 'Machines & Design', description: 'Mechanisms, gears, balancing, gyroscopes and vibrations, then failure-safe design of machine elements — kinematic and design practice for the defence research establishment mechanisms and weapon systems.', icon: 'wrench', pages: 'Area 7', interactiveKey: 'js-playground' },
  { id: 'me-d8', bookId: 'me-complete', number: 38, title: 'Manufacturing Technology & Metrology', shortTitle: 'Manufacturing & Metro', description: 'Casting, forming, joining and machining with limits, fits, metrology and condition monitoring — production technology that turns the defence research establishment designs into reliable hardware.', icon: 'hammer', pages: 'Area 8', interactiveKey: 'js-playground' },
  { id: 'me-d9', bookId: 'me-complete', number: 39, title: 'Materials Science', shortTitle: 'Materials Science', description: 'Crystallography, phase diagrams, heat treatment and material testing — selecting and tailoring the materials behind the defence research establishment armour, structures and propulsion hardware.', icon: 'atom', pages: 'Area 9', interactiveKey: 'crystal-lattice-lab' },
  { id: 'me-d10', bookId: 'me-complete', number: 40, title: 'Industrial Engineering', shortTitle: 'Industrial Engineering', description: 'Production planning and control, inventory control and operations research with CPM-PERT — the management science that keeps the defence research establishment production and projects on schedule.', icon: 'chart-line', pages: 'Area 10', interactiveKey: 'js-playground' },
  { id: 'me-d11', bookId: 'me-complete', number: 41, title: 'Mechatronics & Robotics', shortTitle: 'Mechatronics & Robots', description: 'Microcontrollers, PLCs, sensors, actuators and robot kinematics — the interdisciplinary systems inside the defence research establishment guided weapons, unmanned ground vehicles and automated test rigs.', icon: 'bot', pages: 'Area 11', interactiveKey: 'js-playground' },
  { id: 'me-d12', bookId: 'me-complete', number: 42, title: 'Renewable Sources of Energy', shortTitle: 'Renewable Energy', description: 'Solar thermal and photovoltaic conversion, wind, biomass, tidal energy and fuel cells — sustainable energy engineering for the defence research establishment remote installations and green campuses.', icon: 'battery-charging', pages: 'Area 12', interactiveKey: 'js-playground' },
]

export const DRDO_ME_SECTIONS: SectionMeta[] = [
  // ---- Chapter 1 · Engineering Mathematics ----
  { id: 'me-d1-s1', chapterId: 'me-d1', number: 31.1, title: 'Linear Algebra & Calculus', description: 'Matrices, eigenvalue problems, differentiation, integration and engineering optimization.' },
  { id: 'me-d1-s2', chapterId: 'me-d1', number: 31.2, title: 'Differential Equations', description: 'Ordinary differential equations governing vibration, thermal and fluid systems.' },
  { id: 'me-d1-s3', chapterId: 'me-d1', number: 31.3, title: 'Probability & Statistics', description: 'Probability distributions, averages and dispersion for reliability and quality analysis.' },
  { id: 'me-d1-s4', chapterId: 'me-d1', number: 31.4, title: 'Numerical Methods', description: 'Root finding, interpolation, numerical integration and ODE solvers for design computation.' },
  // ---- Chapter 2 · Fluid Mechanics & Machinery ----
  { id: 'me-d2-s1', chapterId: 'me-d2', number: 32.1, title: 'Fluid Properties & Statics', description: 'Basic concepts and properties of fluids, manometry, fluid statics and buoyancy.' },
  { id: 'me-d2-s2', chapterId: 'me-d2', number: 32.2, title: 'Equations of Motion & Bernoulli', description: "Equations of motion, Bernoulli's equation and its applications." },
  { id: 'me-d2-s3', chapterId: 'me-d2', number: 32.3, title: 'Viscous Flow & Pipe Losses', description: 'Viscous flow of incompressible fluids, laminar and turbulent flows, flow through pipes and head losses.' },
  { id: 'me-d2-s4', chapterId: 'me-d2', number: 32.4, title: 'Pumps & Compressors', description: 'Reciprocating and rotary pumps; reciprocating and rotary compressors — theory and applications.' },
  { id: 'me-d2-s5', chapterId: 'me-d2', number: 32.5, title: 'Turbines & Jet Propulsion', description: 'Pelton, Kaplan and Francis turbines, velocity diagrams, impulse and reaction principles; steam and gas turbines; pulse jet and ram jet propulsion theory.' },
  // ---- Chapter 3 · Thermodynamics ----
  { id: 'me-d3-s1', chapterId: 'me-d3', number: 33.1, title: 'Systems, Processes & Pure Substances', description: 'Thermodynamic systems and processes; properties of pure substances.' },
  { id: 'me-d3-s2', chapterId: 'me-d3', number: 33.2, title: 'Laws of Thermodynamics', description: 'Zeroth, First and Second Laws of thermodynamics and their consequences.' },
  { id: 'me-d3-s3', chapterId: 'me-d3', number: 33.3, title: 'Entropy, Irreversibility & Availability', description: 'Entropy, irreversibility and availability analysis of energy systems.' },
  { id: 'me-d3-s4', chapterId: 'me-d3', number: 33.4, title: 'Ideal & Real Gases', description: 'Ideal and real gas behaviour, the compressibility factor and gas mixtures.' },
  { id: 'me-d3-s5', chapterId: 'me-d3', number: 33.5, title: 'Energy Conversion Cycles', description: 'Analysis of the Rankine, Otto, Diesel and Dual cycles for energy conversion.' },
  // ---- Chapter 4 · Heat Transfer ----
  { id: 'me-d4-s1', chapterId: 'me-d4', number: 34.1, title: 'Conduction', description: 'Steady and unsteady conduction, thermal resistance and extended surfaces (fins).' },
  { id: 'me-d4-s2', chapterId: 'me-d4', number: 34.2, title: 'Convection', description: 'Free and forced convection with heat-transfer correlations; boiling and condensation.' },
  { id: 'me-d4-s3', chapterId: 'me-d4', number: 34.3, title: 'Radiation', description: 'Radiative heat transfer and the radiation heat-transfer coefficient.' },
  { id: 'me-d4-s4', chapterId: 'me-d4', number: 34.4, title: 'Heat Exchangers', description: 'Heat exchanger types and performance analysis.' },
  // ---- Chapter 5 · IC Engines, Refrigeration & Power Plant ----
  { id: 'me-d5-s1', chapterId: 'me-d5', number: 35.1, title: 'IC Engines: SI & CI', description: 'SI and CI engines, engine systems and components, performance characteristics and testing.' },
  { id: 'me-d5-s2', chapterId: 'me-d5', number: 35.2, title: 'Fuels, Emissions & Control', description: 'Fuels and their properties; emissions and emission control technology.' },
  { id: 'me-d5-s3', chapterId: 'me-d5', number: 35.3, title: 'Refrigeration & Air Conditioning', description: 'Vapour compression, absorption, jet, thermoelectric and vortex tube refrigeration; psychrometric properties and processes, comfort charts, load calculations and heat pumps.' },
  { id: 'me-d5-s4', chapterId: 'me-d5', number: 35.4, title: 'Power Plant Cycles, Fuels & Boilers', description: 'Rankine and Brayton cycles with regeneration and reheat; fuel properties, flue gas analysis and boilers.' },
  { id: 'me-d5-s5', chapterId: 'me-d5', number: 35.5, title: 'Power Plant Components', description: 'Steam turbines, condensers, air ejectors, electrostatic precipitators and cooling towers — theory, design, types and applications.' },
  // ---- Chapter 6 · Mechanics of Materials ----
  { id: 'me-d6-s1', chapterId: 'me-d6', number: 36.1, title: 'Statics: Forces, Friction & Centroids', description: 'Analysis of systems of forces, friction, centroid and centre of gravity, and dynamics.' },
  { id: 'me-d6-s2', chapterId: 'me-d6', number: 36.2, title: 'Stress & Strain', description: 'Stresses and strains, including compound stresses and strains.' },
  { id: 'me-d6-s3', chapterId: 'me-d6', number: 36.3, title: 'Bending & Torsion', description: 'Shear force and bending moment diagrams; theory of bending stresses, slope and deflection; torsion of shafts.' },
  { id: 'me-d6-s4', chapterId: 'me-d6', number: 36.4, title: 'Thin & Thick Pressure Vessels', description: 'Thin and thick cylinders and spheres under pressure.' },
  // ---- Chapter 7 · Theory of Machines & Design ----
  { id: 'me-d7-s1', chapterId: 'me-d7', number: 37.1, title: 'Mechanism Kinematics', description: 'Kinematic pairs, mobility, inversions and velocity and acceleration analysis of planar mechanisms.' },
  { id: 'me-d7-s2', chapterId: 'me-d7', number: 37.2, title: 'Cams, Gears & Gear Trains', description: 'Cam follower motions; law of gearing, involute profiles and interference; helical, spiral and worm gears; simple, compound and epicyclic gear trains.' },
  { id: 'me-d7-s3', chapterId: 'me-d7', number: 37.3, title: 'Dynamics: Balancing, Gyroscopes & Governors', description: 'Slider-crank dynamics and turning moment; balancing of revolving and reciprocating masses; gyroscopic couple effects on automobiles, ships and aircraft; governors.' },
  { id: 'me-d7-s4', chapterId: 'me-d7', number: 37.4, title: 'Vibrations', description: 'Free and forced vibration of undamped and damped SDOF systems; transmissibility ratio, vibration isolation and critical speed of shafts.' },
  { id: 'me-d7-s5', chapterId: 'me-d7', number: 37.5, title: 'Design of Machine Elements', description: 'Design for static and dynamic loading, failure theories and the S-N diagram; riveted, welded and bolted joints, shafts, spur gears, bearings, brakes, clutches and flywheels.' },
  // ---- Chapter 8 · Manufacturing Technology & Metrology ----
  { id: 'me-d8-s1', chapterId: 'me-d8', number: 38.1, title: 'Casting, Forming & Joining', description: 'Metal casting, metal forming and metal joining processes.' },
  { id: 'me-d8-s2', chapterId: 'me-d8', number: 38.2, title: 'Machining & Machine Tools', description: 'Machining and machine tool operations and cutting fundamentals.' },
  { id: 'me-d8-s3', chapterId: 'me-d8', number: 38.3, title: 'Metrology & Inspection', description: 'Limits, fits and tolerances; metrology and inspection techniques.' },
  { id: 'me-d8-s4', chapterId: 'me-d8', number: 38.4, title: 'CIM, FMS & Condition Monitoring', description: 'Computer-integrated manufacturing and FMS; vibration, noise, wear-debris and signature analysis, field balancing and NDT techniques; reliability and failure analysis.' },
  // ---- Chapter 9 · Materials Science ----
  { id: 'me-d9-s1', chapterId: 'me-d9', number: 39.1, title: 'Crystallography & Defects', description: 'Basic crystallography and crystal defects.' },
  { id: 'me-d9-s2', chapterId: 'me-d9', number: 39.2, title: 'Alloys & Phase Diagrams', description: 'Alloy systems and equilibrium phase diagrams.' },
  { id: 'me-d9-s3', chapterId: 'me-d9', number: 39.3, title: 'Heat Treatment & Metals', description: 'Heat treatment of ferrous and non-ferrous metals.' },
  { id: 'me-d9-s4', chapterId: 'me-d9', number: 39.4, title: 'Non-Metallic & Nano Materials', description: 'Non-metallic materials and the basics of nano-materials.' },
  { id: 'me-d9-s5', chapterId: 'me-d9', number: 39.5, title: 'Properties, Testing & Corrosion', description: 'Mechanical properties and testing; corrosion prevention and control.' },
  // ---- Chapter 10 · Industrial Engineering ----
  { id: 'me-d10-s1', chapterId: 'me-d10', number: 40.1, title: 'Production Planning & Control', description: 'Production planning and control systems for manufacturing operations.' },
  { id: 'me-d10-s2', chapterId: 'me-d10', number: 40.2, title: 'Inventory Control', description: 'Inventory models and control policies for materials management.' },
  { id: 'me-d10-s3', chapterId: 'me-d10', number: 40.3, title: 'Operations Research & CPM-PERT', description: 'Operations research methods and CPM-PERT project network scheduling.' },
  // ---- Chapter 11 · Mechatronics & Robotics ----
  { id: 'me-d11-s1', chapterId: 'me-d11', number: 41.1, title: 'Microprocessors, Microcontrollers & PLC', description: 'Architecture, programming, I/O and computer interfacing; programmable logic controllers for automation.' },
  { id: 'me-d11-s2', chapterId: 'me-d11', number: 41.2, title: 'Sensors & Actuators', description: 'Piezoelectric accelerometers, Hall-effect sensors, optical encoders, resolvers and Inductosyn; pneumatic and hydraulic actuators and stepper motors.' },
  { id: 'me-d11-s3', chapterId: 'me-d11', number: 41.3, title: 'Mechatronic Control', description: 'Mathematical modelling of physical systems, control signals, controllability and observability.' },
  { id: 'me-d11-s4', chapterId: 'me-d11', number: 41.4, title: 'Robotics', description: 'Robot classification and specifications; direct and inverse kinematics; homogeneous coordinates and the four-axis SCARA arm equation.' },
  // ---- Chapter 12 · Renewable Sources of Energy ----
  { id: 'me-d12-s1', chapterId: 'me-d12', number: 42.1, title: 'Solar Radiation & Collectors', description: 'Solar radiation geometry; flat-plate and focusing collectors — materials and performance.' },
  { id: 'me-d12-s2', chapterId: 'me-d12', number: 42.2, title: 'Solar Thermal Storage & Applications', description: 'Solar thermal energy storage; heating, cooling and power generation applications.' },
  { id: 'me-d12-s3', chapterId: 'me-d12', number: 42.3, title: 'Solar Photovoltaics', description: 'Solar photovoltaic conversion principles and system design.' },
  { id: 'me-d12-s4', chapterId: 'me-d12', number: 42.4, title: 'Wind, Biomass & Tidal Energy', description: 'Harnessing methods and applications of wind, biomass and tidal energy.' },
  { id: 'me-d12-s5', chapterId: 'me-d12', number: 42.5, title: 'Fuel Cells', description: 'Working principles and applications of fuel cells.' },
]

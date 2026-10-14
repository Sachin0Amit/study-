// ============================================================================
// DRDO Scientist 'B' — Tier-II Electrical Engineering discipline (bookId
// 'drdo-ee'). Chapter/section metadata compiled from the legacy RAC/SET
// Tier-II EE scope (GATE-EE/ESE-EE-equivalent subjects) and DRDO's own
// official CEPTAM STA-'B' Tier-II syllabus for Electrical Engineering —
// see research/sat-drdo-syllabus.md §2.3 (RAC advertisements 118/129/140;
// DRDO CEPTAM-11 Tier-II detailed syllabus PDF). No RAC descriptive paper
// was published for EE in Advt 140 (GATE + interview route), so this
// representative core-area list is used.
// ============================================================================
import type { ChapterMeta, SectionMeta } from '../../library'

export const DRDO_EE_CHAPTERS: ChapterMeta[] = [
  { id: 'ee-d1', bookId: 'ee-complete', number: 33, title: 'Engineering Mathematics', shortTitle: 'Engineering Maths', description: 'Linear algebra, calculus, differential equations, probability and numerical methods — the common mathematical core for the defence research establishment electrical analysis and design work.', icon: 'sigma', pages: 'Area 1', interactiveKey: 'probability-lab' },
  { id: 'ee-d2', bookId: 'ee-complete', number: 34, title: 'Electric Circuits', shortTitle: 'Electric Circuits', description: 'DC and AC circuit analysis, network theorems, transients, two-port networks and coupled circuits — the analysis backbone of the defence research establishment power and control hardware.', icon: 'circuit-board', pages: 'Area 2', interactiveKey: 'thevenin-lab' },
  { id: 'ee-d3', bookId: 'ee-complete', number: 35, title: 'Electrical Machines', shortTitle: 'Electric Machines', description: 'DC machines, transformers, induction and synchronous machines plus stepper, BLDC and servo specials — electromechanical conversion for the defence research establishment actuators and test rigs.', icon: 'rotate-cw', pages: 'Area 3', interactiveKey: 'machine-lab' },
  { id: 'ee-d4', bookId: 'ee-complete', number: 36, title: 'Power Systems', shortTitle: 'Power Systems', description: 'Generation economics, transmission and distribution, fault analysis, protection and stability — delivering dependable power to the defence research establishments and field systems.', icon: 'plug', pages: 'Area 4', interactiveKey: 'js-playground' },
  { id: 'ee-d5', bookId: 'ee-complete', number: 37, title: 'Power Electronics & Drives', shortTitle: 'Power Electronics', description: 'Power semiconductor devices, rectifiers, choppers, inverters and motor drives — the switching muscle behind the defence research establishment motor control and power conditioning.', icon: 'zap', pages: 'Area 5', interactiveKey: 'converter-lab' },
  { id: 'ee-d6', bookId: 'ee-complete', number: 38, title: 'Electrical Measurements & Instrumentation', shortTitle: 'Measurements & Instr', description: 'Instruments, bridges, digital measurement, transducers and data acquisition — the measurement science behind the defence research establishment test benches, telemetry and quality assurance.', icon: 'gauge', pages: 'Area 6', interactiveKey: 'breadboard-oscilloscope-sim' },
  { id: 'ee-d7', bookId: 'ee-complete', number: 39, title: 'Control Systems', shortTitle: 'Control Systems', description: 'Modelling, stability, compensation and state-space methods — feedback control for the defence research establishment servo drives, tracking systems and process plants.', icon: 'sliders-horizontal', pages: 'Area 7', interactiveKey: 'filter-lab' },
  { id: 'ee-d8', bookId: 'ee-complete', number: 40, title: 'Signals & Systems', shortTitle: 'Signals & Systems', description: 'Continuous and discrete signals, sampling and transform applications — signal fundamentals for the defence research establishment instrumentation, protection and data-acquisition work.', icon: 'waves', pages: 'Area 8', interactiveKey: 'fourier-lab' },
  { id: 'ee-d9', bookId: 'ee-complete', number: 41, title: 'Analog & Digital Electronics', shortTitle: 'Analog & Digital', description: 'Op-amps, oscillators, logic families, ADC/DAC and the 8085/8051 family — the electronics literacy the defence research establishment expects from its electrical engineers.', icon: 'cpu', pages: 'Area 9', interactiveKey: 'opamp-lab' },
  { id: 'ee-d10', bookId: 'ee-complete', number: 42, title: 'Electromagnetic Theory', shortTitle: 'EM Theory', description: "Electrostatics, magnetostatics, Maxwell's equations and field applications in machines — the field theory behind the defence research establishment motors, sensors and pulse-power systems.", icon: 'magnet', pages: 'Area 10', interactiveKey: 'efield-lab' },
  { id: 'ee-d11', bookId: 'ee-complete', number: 43, title: 'Utilization, Materials & Maintenance', shortTitle: 'Utilization & Practice', description: 'Utilization of electrical energy, electrical materials, estimation and costing, wiring and maintenance — the practical, research-lab side of the defence research establishment electrical engineering.', icon: 'wrench', pages: 'Area 11', interactiveKey: 'js-playground' },
]

export const DRDO_EE_SECTIONS: SectionMeta[] = [
  // ---- Chapter 1 · Engineering Mathematics ----
  { id: 'ee-d1-s1', chapterId: 'ee-d1', number: 33.1, title: 'Linear Algebra', description: 'Matrices, determinants, eigenvalues and the solution of systems of linear equations.' },
  { id: 'ee-d1-s2', chapterId: 'ee-d1', number: 33.2, title: 'Calculus', description: 'Limits, differentiation, integration and their engineering applications.' },
  { id: 'ee-d1-s3', chapterId: 'ee-d1', number: 33.3, title: 'Differential Equations', description: 'Ordinary differential equations for circuit transient and system dynamics.' },
  { id: 'ee-d1-s4', chapterId: 'ee-d1', number: 33.4, title: 'Probability, Statistics & Numerical Methods', description: 'Probability distributions and statistics for measurement data; numerical techniques for design computation.' },
  // ---- Chapter 2 · Electric Circuits ----
  { id: 'ee-d2-s1', chapterId: 'ee-d2', number: 34.1, title: 'DC Circuit Analysis & Theorems', description: "Ohm's and Kirchhoff's laws, mesh and nodal analysis, Thevenin, Norton, superposition and maximum power transfer theorems, star/delta transformations." },
  { id: 'ee-d2-s2', chapterId: 'ee-d2', number: 34.2, title: 'AC Circuits & Phasor Analysis', description: 'Single- and three-phase phasor analysis, resonance, power factor and power in AC circuits.' },
  { id: 'ee-d2-s3', chapterId: 'ee-d2', number: 34.3, title: 'Transients & Laplace Analysis', description: 'RL, RC and RLC transient response; network analysis in the Laplace domain.' },
  { id: 'ee-d2-s4', chapterId: 'ee-d2', number: 34.4, title: 'Two-Port Networks & Coupled Circuits', description: 'Two-port parameters, coupled circuits and mutual inductance.' },
  { id: 'ee-d2-s5', chapterId: 'ee-d2', number: 34.5, title: 'Network Graphs & State Equations', description: 'Network topology, graph matrices and state-equation formulation.' },
  // ---- Chapter 3 · Electrical Machines ----
  { id: 'ee-d3-s1', chapterId: 'ee-d3', number: 35.1, title: 'DC Machines', description: 'DC generators and motors — characteristics, starting and speed control, commutation.' },
  { id: 'ee-d3-s2', chapterId: 'ee-d3', number: 35.2, title: 'Transformers', description: 'Construction, equivalent circuit, losses, efficiency and regulation; auto-transformers, three-phase connections and parallel operation.' },
  { id: 'ee-d3-s3', chapterId: 'ee-d3', number: 35.3, title: 'Induction Machines', description: 'Slip-torque characteristics, starting and speed control methods, single-phase motors.' },
  { id: 'ee-d3-s4', chapterId: 'ee-d3', number: 35.4, title: 'Synchronous Machines', description: 'EMF generation, armature reaction, voltage regulation, synchronizing and power circles.' },
  { id: 'ee-d3-s5', chapterId: 'ee-d3', number: 35.5, title: 'Special Machines', description: 'Stepper motors, BLDC and servo machine basics for precision actuation.' },
  // ---- Chapter 4 · Power Systems ----
  { id: 'ee-d4-s1', chapterId: 'ee-d4', number: 36.1, title: 'Generation & Economics', description: 'Thermal, hydro, nuclear, wind and solar PV generation; economics of generation, load curves and tariffs.' },
  { id: 'ee-d4-s2', chapterId: 'ee-d4', number: 36.2, title: 'Transmission Systems', description: 'Line parameters and models, performance and voltage regulation; HVDC versus HVAC, insulators, corona, cables and substations.' },
  { id: 'ee-d4-s3', chapterId: 'ee-d4', number: 36.3, title: 'Fault Analysis, Load Flow & Stability', description: 'Symmetrical components, symmetrical and unsymmetrical faults, load flow basics and power system stability.' },
  { id: 'ee-d4-s4', chapterId: 'ee-d4', number: 36.4, title: 'Switchgear & Protection', description: 'Relays, circuit breakers, CTs and PTs and protection schemes.' },
  { id: 'ee-d4-s5', chapterId: 'ee-d4', number: 36.5, title: 'Distribution Systems & Earthing', description: 'Distribution system arrangements, earthing practices and voltage regulation.' },
  // ---- Chapter 5 · Power Electronics & Drives ----
  { id: 'ee-d5-s1', chapterId: 'ee-d5', number: 37.1, title: 'Power Semiconductor Devices', description: 'Diode, BJT, MOSFET, IGBT, thyristor and TRIAC characteristics and switching behaviour.' },
  { id: 'ee-d5-s2', chapterId: 'ee-d5', number: 37.2, title: 'Rectifiers, Cycloconverters & AC Controllers', description: 'Controlled and uncontrolled rectifiers, cycloconverters and AC voltage controllers.' },
  { id: 'ee-d5-s3', chapterId: 'ee-d5', number: 37.3, title: 'Choppers & Inverters', description: 'DC-DC choppers, inverters and switching techniques.' },
  { id: 'ee-d5-s4', chapterId: 'ee-d5', number: 37.4, title: 'Electric Drives', description: 'DC and AC motor control and speed-control methods; converter applications in drives.' },
  // ---- Chapter 6 · Electrical Measurements & Instrumentation ----
  { id: 'ee-d6-s1', chapterId: 'ee-d6', number: 38.1, title: 'Measurement Principles & Errors', description: 'Accuracy, precision and standards; static and dynamic characteristics, errors and statistical analysis.' },
  { id: 'ee-d6-s2', chapterId: 'ee-d6', number: 38.2, title: 'Indicating & Integrating Instruments', description: 'PMMC and moving-iron instruments, dynamometer wattmeters, energy meters and instrument transformers.' },
  { id: 'ee-d6-s3', chapterId: 'ee-d6', number: 38.3, title: 'Bridges & Parameter Measurement', description: 'Wheatstone, Kelvin, Maxwell and Schering bridges; measurement of R, L, C, power, energy and power factor.' },
  { id: 'ee-d6-s4', chapterId: 'ee-d6', number: 38.4, title: 'Digital Measurement & Data Acquisition', description: 'Digital voltmeters and counters, oscilloscopes, transducers, displays, telemetry and data acquisition systems.' },
  // ---- Chapter 7 · Control Systems ----
  { id: 'ee-d7-s1', chapterId: 'ee-d7', number: 39.1, title: 'Modelling & Representation', description: 'Mathematical modelling of physical systems, transfer functions, block diagrams and signal flow graphs.' },
  { id: 'ee-d7-s2', chapterId: 'ee-d7', number: 39.2, title: 'Time-Response Analysis', description: 'Steady-state and transient response of feedback control systems.' },
  { id: 'ee-d7-s3', chapterId: 'ee-d7', number: 39.3, title: 'Stability & Frequency Response', description: 'Routh-Hurwitz, root locus, Bode and Nyquist stability techniques.' },
  { id: 'ee-d7-s4', chapterId: 'ee-d7', number: 39.4, title: 'Compensators & PID Controllers', description: 'Compensator design and PID and industrial controller tuning.' },
  { id: 'ee-d7-s5', chapterId: 'ee-d7', number: 39.5, title: 'State-Space Basics', description: 'State-variable representation, controllability and observability.' },
  // ---- Chapter 8 · Signals & Systems ----
  { id: 'ee-d8-s1', chapterId: 'ee-d8', number: 40.1, title: 'Signal Classification', description: 'Continuous and discrete-time signals and basic system properties.' },
  { id: 'ee-d8-s2', chapterId: 'ee-d8', number: 40.2, title: 'Sampling', description: 'Sampling theory, aliasing and signal reconstruction.' },
  { id: 'ee-d8-s3', chapterId: 'ee-d8', number: 40.3, title: 'Transform Applications', description: 'Fourier and Laplace transform applications to electrical signals and systems.' },
  // ---- Chapter 9 · Analog & Digital Electronics ----
  { id: 'ee-d9-s1', chapterId: 'ee-d9', number: 41.1, title: 'Analog Electronics', description: 'Electronic components and devices; amplifiers, op-amps, oscillators and filters.' },
  { id: 'ee-d9-s2', chapterId: 'ee-d9', number: 41.2, title: 'Digital Electronics', description: 'Boolean algebra, gates, combinational and sequential circuits, logic families and ADC/DAC conversion.' },
  { id: 'ee-d9-s3', chapterId: 'ee-d9', number: 41.3, title: 'Microprocessors & Microcontrollers', description: '8085 and 8051 architecture, programming, interfacing and peripheral devices.' },
  { id: 'ee-d9-s4', chapterId: 'ee-d9', number: 41.4, title: 'Embedded Systems Basics', description: 'Embedded system building blocks for instrumentation and control.' },
  // ---- Chapter 10 · Electromagnetic Theory ----
  { id: 'ee-d10-s1', chapterId: 'ee-d10', number: 42.1, title: 'Electrostatics & Capacitance', description: 'Electric field, potential, capacitance and dielectric behaviour.' },
  { id: 'ee-d10-s2', chapterId: 'ee-d10', number: 42.2, title: 'Magnetostatics & Inductance', description: "Magnetic fields, Faraday's and Lenz's laws, induced EMF and inductance." },
  { id: 'ee-d10-s3', chapterId: 'ee-d10', number: 42.3, title: "Maxwell's Equations", description: "Maxwell's equations, electromagnetic force and field relationships." },
  { id: 'ee-d10-s4', chapterId: 'ee-d10', number: 42.4, title: 'Field Theory in Machines', description: 'Application of electromagnetic field theory to electrical machines and devices.' },
  // ---- Chapter 11 · Utilization, Materials & Maintenance ----
  { id: 'ee-d11-s1', chapterId: 'ee-d11', number: 43.1, title: 'Utilization of Electrical Energy', description: 'Illumination, electric traction, motor drives and industrial heating applications.' },
  { id: 'ee-d11-s2', chapterId: 'ee-d11', number: 43.2, title: 'Electrical Materials & Energy Storage', description: 'Conducting, insulating, magnetic and dielectric materials; superconductivity, nano-materials, batteries and energy storage.' },
  { id: 'ee-d11-s3', chapterId: 'ee-d11', number: 43.3, title: 'Estimation, Costing & Wiring', description: 'Wiring systems, estimation and costing of installations and electrical schematic drawing.' },
  { id: 'ee-d11-s4', chapterId: 'ee-d11', number: 43.4, title: 'Maintenance & Repair', description: 'Maintenance practices for electrical and electronic equipment in laboratory and field environments.' },
]

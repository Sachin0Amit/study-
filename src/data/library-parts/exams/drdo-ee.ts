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
  { id: 'drdo-ee-a1', bookId: 'drdo-ee', number: 1, title: 'Engineering Mathematics', shortTitle: 'Engineering Maths', description: 'Linear algebra, calculus, differential equations, probability and numerical methods — the common mathematical core for DRDO electrical analysis and design work.', icon: 'sigma', pages: 'Area 1', interactiveKey: 'probability-lab' },
  { id: 'drdo-ee-a2', bookId: 'drdo-ee', number: 2, title: 'Electric Circuits', shortTitle: 'Electric Circuits', description: 'DC and AC circuit analysis, network theorems, transients, two-port networks and coupled circuits — the analysis backbone of DRDO power and control hardware.', icon: 'circuit-board', pages: 'Area 2', interactiveKey: 'thevenin-lab' },
  { id: 'drdo-ee-a3', bookId: 'drdo-ee', number: 3, title: 'Electrical Machines', shortTitle: 'Electric Machines', description: 'DC machines, transformers, induction and synchronous machines plus stepper, BLDC and servo specials — electromechanical conversion for DRDO actuators and test rigs.', icon: 'rotate-cw', pages: 'Area 3', interactiveKey: 'machine-lab' },
  { id: 'drdo-ee-a4', bookId: 'drdo-ee', number: 4, title: 'Power Systems', shortTitle: 'Power Systems', description: 'Generation economics, transmission and distribution, fault analysis, protection and stability — delivering dependable power to DRDO establishments and field systems.', icon: 'plug', pages: 'Area 4', interactiveKey: 'js-playground' },
  { id: 'drdo-ee-a5', bookId: 'drdo-ee', number: 5, title: 'Power Electronics & Drives', shortTitle: 'Power Electronics', description: 'Power semiconductor devices, rectifiers, choppers, inverters and motor drives — the switching muscle behind DRDO motor control and power conditioning.', icon: 'zap', pages: 'Area 5', interactiveKey: 'converter-lab' },
  { id: 'drdo-ee-a6', bookId: 'drdo-ee', number: 6, title: 'Electrical Measurements & Instrumentation', shortTitle: 'Measurements & Instr', description: 'Instruments, bridges, digital measurement, transducers and data acquisition — the measurement science behind DRDO test benches, telemetry and quality assurance.', icon: 'gauge', pages: 'Area 6', interactiveKey: 'breadboard-oscilloscope-sim' },
  { id: 'drdo-ee-a7', bookId: 'drdo-ee', number: 7, title: 'Control Systems', shortTitle: 'Control Systems', description: 'Modelling, stability, compensation and state-space methods — feedback control for DRDO servo drives, tracking systems and process plants.', icon: 'sliders-horizontal', pages: 'Area 7', interactiveKey: 'filter-lab' },
  { id: 'drdo-ee-a8', bookId: 'drdo-ee', number: 8, title: 'Signals & Systems', shortTitle: 'Signals & Systems', description: 'Continuous and discrete signals, sampling and transform applications — signal fundamentals for DRDO instrumentation, protection and data-acquisition work.', icon: 'waves', pages: 'Area 8', interactiveKey: 'fourier-lab' },
  { id: 'drdo-ee-a9', bookId: 'drdo-ee', number: 9, title: 'Analog & Digital Electronics', shortTitle: 'Analog & Digital', description: 'Op-amps, oscillators, logic families, ADC/DAC and the 8085/8051 family — the electronics literacy DRDO expects from its electrical engineers.', icon: 'cpu', pages: 'Area 9', interactiveKey: 'opamp-lab' },
  { id: 'drdo-ee-a10', bookId: 'drdo-ee', number: 10, title: 'Electromagnetic Theory', shortTitle: 'EM Theory', description: "Electrostatics, magnetostatics, Maxwell's equations and field applications in machines — the field theory behind DRDO motors, sensors and pulse-power systems.", icon: 'magnet', pages: 'Area 10', interactiveKey: 'efield-lab' },
  { id: 'drdo-ee-a11', bookId: 'drdo-ee', number: 11, title: 'Utilization, Materials & Maintenance', shortTitle: 'Utilization & Practice', description: 'Utilization of electrical energy, electrical materials, estimation and costing, wiring and maintenance — the practical, research-lab side of DRDO electrical engineering.', icon: 'wrench', pages: 'Area 11', interactiveKey: 'js-playground' },
]

export const DRDO_EE_SECTIONS: SectionMeta[] = [
  // ---- Chapter 1 · Engineering Mathematics ----
  { id: 'drdo-ee-a1-s1', chapterId: 'drdo-ee-a1', number: 1.1, title: 'Linear Algebra', description: 'Matrices, determinants, eigenvalues and the solution of systems of linear equations.' },
  { id: 'drdo-ee-a1-s2', chapterId: 'drdo-ee-a1', number: 1.2, title: 'Calculus', description: 'Limits, differentiation, integration and their engineering applications.' },
  { id: 'drdo-ee-a1-s3', chapterId: 'drdo-ee-a1', number: 1.3, title: 'Differential Equations', description: 'Ordinary differential equations for circuit transient and system dynamics.' },
  { id: 'drdo-ee-a1-s4', chapterId: 'drdo-ee-a1', number: 1.4, title: 'Probability, Statistics & Numerical Methods', description: 'Probability distributions and statistics for measurement data; numerical techniques for design computation.' },
  // ---- Chapter 2 · Electric Circuits ----
  { id: 'drdo-ee-a2-s1', chapterId: 'drdo-ee-a2', number: 2.1, title: 'DC Circuit Analysis & Theorems', description: "Ohm's and Kirchhoff's laws, mesh and nodal analysis, Thevenin, Norton, superposition and maximum power transfer theorems, star/delta transformations." },
  { id: 'drdo-ee-a2-s2', chapterId: 'drdo-ee-a2', number: 2.2, title: 'AC Circuits & Phasor Analysis', description: 'Single- and three-phase phasor analysis, resonance, power factor and power in AC circuits.' },
  { id: 'drdo-ee-a2-s3', chapterId: 'drdo-ee-a2', number: 2.3, title: 'Transients & Laplace Analysis', description: 'RL, RC and RLC transient response; network analysis in the Laplace domain.' },
  { id: 'drdo-ee-a2-s4', chapterId: 'drdo-ee-a2', number: 2.4, title: 'Two-Port Networks & Coupled Circuits', description: 'Two-port parameters, coupled circuits and mutual inductance.' },
  { id: 'drdo-ee-a2-s5', chapterId: 'drdo-ee-a2', number: 2.5, title: 'Network Graphs & State Equations', description: 'Network topology, graph matrices and state-equation formulation.' },
  // ---- Chapter 3 · Electrical Machines ----
  { id: 'drdo-ee-a3-s1', chapterId: 'drdo-ee-a3', number: 3.1, title: 'DC Machines', description: 'DC generators and motors — characteristics, starting and speed control, commutation.' },
  { id: 'drdo-ee-a3-s2', chapterId: 'drdo-ee-a3', number: 3.2, title: 'Transformers', description: 'Construction, equivalent circuit, losses, efficiency and regulation; auto-transformers, three-phase connections and parallel operation.' },
  { id: 'drdo-ee-a3-s3', chapterId: 'drdo-ee-a3', number: 3.3, title: 'Induction Machines', description: 'Slip-torque characteristics, starting and speed control methods, single-phase motors.' },
  { id: 'drdo-ee-a3-s4', chapterId: 'drdo-ee-a3', number: 3.4, title: 'Synchronous Machines', description: 'EMF generation, armature reaction, voltage regulation, synchronizing and power circles.' },
  { id: 'drdo-ee-a3-s5', chapterId: 'drdo-ee-a3', number: 3.5, title: 'Special Machines', description: 'Stepper motors, BLDC and servo machine basics for precision actuation.' },
  // ---- Chapter 4 · Power Systems ----
  { id: 'drdo-ee-a4-s1', chapterId: 'drdo-ee-a4', number: 4.1, title: 'Generation & Economics', description: 'Thermal, hydro, nuclear, wind and solar PV generation; economics of generation, load curves and tariffs.' },
  { id: 'drdo-ee-a4-s2', chapterId: 'drdo-ee-a4', number: 4.2, title: 'Transmission Systems', description: 'Line parameters and models, performance and voltage regulation; HVDC versus HVAC, insulators, corona, cables and substations.' },
  { id: 'drdo-ee-a4-s3', chapterId: 'drdo-ee-a4', number: 4.3, title: 'Fault Analysis, Load Flow & Stability', description: 'Symmetrical components, symmetrical and unsymmetrical faults, load flow basics and power system stability.' },
  { id: 'drdo-ee-a4-s4', chapterId: 'drdo-ee-a4', number: 4.4, title: 'Switchgear & Protection', description: 'Relays, circuit breakers, CTs and PTs and protection schemes.' },
  { id: 'drdo-ee-a4-s5', chapterId: 'drdo-ee-a4', number: 4.5, title: 'Distribution Systems & Earthing', description: 'Distribution system arrangements, earthing practices and voltage regulation.' },
  // ---- Chapter 5 · Power Electronics & Drives ----
  { id: 'drdo-ee-a5-s1', chapterId: 'drdo-ee-a5', number: 5.1, title: 'Power Semiconductor Devices', description: 'Diode, BJT, MOSFET, IGBT, thyristor and TRIAC characteristics and switching behaviour.' },
  { id: 'drdo-ee-a5-s2', chapterId: 'drdo-ee-a5', number: 5.2, title: 'Rectifiers, Cycloconverters & AC Controllers', description: 'Controlled and uncontrolled rectifiers, cycloconverters and AC voltage controllers.' },
  { id: 'drdo-ee-a5-s3', chapterId: 'drdo-ee-a5', number: 5.3, title: 'Choppers & Inverters', description: 'DC-DC choppers, inverters and switching techniques.' },
  { id: 'drdo-ee-a5-s4', chapterId: 'drdo-ee-a5', number: 5.4, title: 'Electric Drives', description: 'DC and AC motor control and speed-control methods; converter applications in drives.' },
  // ---- Chapter 6 · Electrical Measurements & Instrumentation ----
  { id: 'drdo-ee-a6-s1', chapterId: 'drdo-ee-a6', number: 6.1, title: 'Measurement Principles & Errors', description: 'Accuracy, precision and standards; static and dynamic characteristics, errors and statistical analysis.' },
  { id: 'drdo-ee-a6-s2', chapterId: 'drdo-ee-a6', number: 6.2, title: 'Indicating & Integrating Instruments', description: 'PMMC and moving-iron instruments, dynamometer wattmeters, energy meters and instrument transformers.' },
  { id: 'drdo-ee-a6-s3', chapterId: 'drdo-ee-a6', number: 6.3, title: 'Bridges & Parameter Measurement', description: 'Wheatstone, Kelvin, Maxwell and Schering bridges; measurement of R, L, C, power, energy and power factor.' },
  { id: 'drdo-ee-a6-s4', chapterId: 'drdo-ee-a6', number: 6.4, title: 'Digital Measurement & Data Acquisition', description: 'Digital voltmeters and counters, oscilloscopes, transducers, displays, telemetry and data acquisition systems.' },
  // ---- Chapter 7 · Control Systems ----
  { id: 'drdo-ee-a7-s1', chapterId: 'drdo-ee-a7', number: 7.1, title: 'Modelling & Representation', description: 'Mathematical modelling of physical systems, transfer functions, block diagrams and signal flow graphs.' },
  { id: 'drdo-ee-a7-s2', chapterId: 'drdo-ee-a7', number: 7.2, title: 'Time-Response Analysis', description: 'Steady-state and transient response of feedback control systems.' },
  { id: 'drdo-ee-a7-s3', chapterId: 'drdo-ee-a7', number: 7.3, title: 'Stability & Frequency Response', description: 'Routh-Hurwitz, root locus, Bode and Nyquist stability techniques.' },
  { id: 'drdo-ee-a7-s4', chapterId: 'drdo-ee-a7', number: 7.4, title: 'Compensators & PID Controllers', description: 'Compensator design and PID and industrial controller tuning.' },
  { id: 'drdo-ee-a7-s5', chapterId: 'drdo-ee-a7', number: 7.5, title: 'State-Space Basics', description: 'State-variable representation, controllability and observability.' },
  // ---- Chapter 8 · Signals & Systems ----
  { id: 'drdo-ee-a8-s1', chapterId: 'drdo-ee-a8', number: 8.1, title: 'Signal Classification', description: 'Continuous and discrete-time signals and basic system properties.' },
  { id: 'drdo-ee-a8-s2', chapterId: 'drdo-ee-a8', number: 8.2, title: 'Sampling', description: 'Sampling theory, aliasing and signal reconstruction.' },
  { id: 'drdo-ee-a8-s3', chapterId: 'drdo-ee-a8', number: 8.3, title: 'Transform Applications', description: 'Fourier and Laplace transform applications to electrical signals and systems.' },
  // ---- Chapter 9 · Analog & Digital Electronics ----
  { id: 'drdo-ee-a9-s1', chapterId: 'drdo-ee-a9', number: 9.1, title: 'Analog Electronics', description: 'Electronic components and devices; amplifiers, op-amps, oscillators and filters.' },
  { id: 'drdo-ee-a9-s2', chapterId: 'drdo-ee-a9', number: 9.2, title: 'Digital Electronics', description: 'Boolean algebra, gates, combinational and sequential circuits, logic families and ADC/DAC conversion.' },
  { id: 'drdo-ee-a9-s3', chapterId: 'drdo-ee-a9', number: 9.3, title: 'Microprocessors & Microcontrollers', description: '8085 and 8051 architecture, programming, interfacing and peripheral devices.' },
  { id: 'drdo-ee-a9-s4', chapterId: 'drdo-ee-a9', number: 9.4, title: 'Embedded Systems Basics', description: 'Embedded system building blocks for instrumentation and control.' },
  // ---- Chapter 10 · Electromagnetic Theory ----
  { id: 'drdo-ee-a10-s1', chapterId: 'drdo-ee-a10', number: 10.1, title: 'Electrostatics & Capacitance', description: 'Electric field, potential, capacitance and dielectric behaviour.' },
  { id: 'drdo-ee-a10-s2', chapterId: 'drdo-ee-a10', number: 10.2, title: 'Magnetostatics & Inductance', description: "Magnetic fields, Faraday's and Lenz's laws, induced EMF and inductance." },
  { id: 'drdo-ee-a10-s3', chapterId: 'drdo-ee-a10', number: 10.3, title: "Maxwell's Equations", description: "Maxwell's equations, electromagnetic force and field relationships." },
  { id: 'drdo-ee-a10-s4', chapterId: 'drdo-ee-a10', number: 10.4, title: 'Field Theory in Machines', description: 'Application of electromagnetic field theory to electrical machines and devices.' },
  // ---- Chapter 11 · Utilization, Materials & Maintenance ----
  { id: 'drdo-ee-a11-s1', chapterId: 'drdo-ee-a11', number: 11.1, title: 'Utilization of Electrical Energy', description: 'Illumination, electric traction, motor drives and industrial heating applications.' },
  { id: 'drdo-ee-a11-s2', chapterId: 'drdo-ee-a11', number: 11.2, title: 'Electrical Materials & Energy Storage', description: 'Conducting, insulating, magnetic and dielectric materials; superconductivity, nano-materials, batteries and energy storage.' },
  { id: 'drdo-ee-a11-s3', chapterId: 'drdo-ee-a11', number: 11.3, title: 'Estimation, Costing & Wiring', description: 'Wiring systems, estimation and costing of installations and electrical schematic drawing.' },
  { id: 'drdo-ee-a11-s4', chapterId: 'drdo-ee-a11', number: 11.4, title: 'Maintenance & Repair', description: 'Maintenance practices for electrical and electronic equipment in laboratory and field environments.' },
]

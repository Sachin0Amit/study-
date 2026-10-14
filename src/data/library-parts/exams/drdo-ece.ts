// ============================================================================
// DRDO Scientist 'B' — Tier-II Electronics & Communication Engineering
// discipline (bookId 'drdo-ece'). Chapter/section metadata reorganized from
// the official DRDO RAC descriptive-syllabus topic lists (RAC advertisement
// written-exam syllabus, UPSC ESE-Mains style, documented for Advt 140 and
// reproduced by Testbook/Adda247/Embibe — see research/sat-drdo-syllabus.md
// §2.2). RAC Paper 1 / Paper 2 topic clusters (basic electronics/electrical,
// materials, measurements, network theory, circuits, comms, control, EM,
// advanced electronics and communication topics) are regrouped into the 12
// core ECE areas below.
// ============================================================================
import type { ChapterMeta, SectionMeta } from '../../library'

export const DRDO_ECE_CHAPTERS: ChapterMeta[] = [
  { id: 'ece-d1', bookId: 'ece-complete', number: 38, title: 'Engineering Mathematics', shortTitle: 'Engineering Maths', description: 'Linear algebra, calculus, differential equations, probability and numerical methods — the mathematical engine room of the defence research establishment communication, control and signal-processing design.', icon: 'sigma', pages: 'Area 1', interactiveKey: 'fourier-lab' },
  { id: 'ece-d2', bookId: 'ece-complete', number: 39, title: 'Network Theory', shortTitle: 'Network Theory', description: 'Circuit analysis from DC laws and theorems through RLC transients to Laplace-domain and two-port techniques — the base layer of every the defence research establishment electronic system.', icon: 'circuit-board', pages: 'Area 2', interactiveKey: 'dc-circuit-lab' },
  { id: 'ece-d3', bookId: 'ece-complete', number: 40, title: 'Signals & Systems', shortTitle: 'Signals & Systems', description: 'Classification, convolution and the full transform toolbox for continuous and discrete signals — the working language of the defence research establishment radar, sonar and communication engineers.', icon: 'waves', pages: 'Area 3', interactiveKey: 'fourier-lab' },
  { id: 'ece-d4', bookId: 'ece-complete', number: 41, title: 'Electronic Devices', shortTitle: 'Electronic Devices', description: 'Semiconductor physics, diodes, BJTs, JFETs, MOSFETs, optoelectronics and electronic materials — the device fabric of the defence research establishment electronic-warfare and avionics subsystems.', icon: 'zap', pages: 'Area 4', interactiveKey: 'diode-lab' },
  { id: 'ece-d5', bookId: 'ece-complete', number: 42, title: 'Analog Circuits', shortTitle: 'Analog Circuits', description: 'Biasing, small-signal amplifiers, feedback, op-amp applications, oscillators, waveshaping and data conversion — the analog front ends of the defence research establishment sensors and receivers.', icon: 'activity', pages: 'Area 5', interactiveKey: 'opamp-lab' },
  { id: 'ece-d6', bookId: 'ece-complete', number: 43, title: 'Digital Circuits', shortTitle: 'Digital Circuits', description: 'Boolean algebra, logic families, combinational and sequential design with counters, memories and microprocessors — digital hardware construction for the defence research establishment systems.', icon: 'toggle-right', pages: 'Area 6', interactiveKey: 'kmap-minimizer' },
  { id: 'ece-d7', bookId: 'ece-complete', number: 44, title: 'Electromagnetics', shortTitle: 'Electromagnetics', description: "Maxwell's equations, wave propagation, transmission lines, waveguides and antennas — the physics of the defence research establishment radar, telemetry and electromagnetic warfare.", icon: 'magnet', pages: 'Area 7', interactiveKey: 'em-wave-lab' },
  { id: 'ece-d8', bookId: 'ece-complete', number: 45, title: 'Control Systems', shortTitle: 'Control Systems', description: 'Feedback modelling, stability analysis and compensator design — the control theory that points the defence research establishment missile airframes, gimbal platforms and tracking systems.', icon: 'sliders-horizontal', pages: 'Area 8', interactiveKey: 'phasor-lab' },
  { id: 'ece-d9', bookId: 'ece-complete', number: 46, title: 'Analog & Digital Communications', shortTitle: 'Analog & Digital Comms', description: 'Noise and information theory, AM/FM, PCM and digital modulation, multiple access and optical fibre — the transport layer of the defence research establishment telemetry and tactical data links.', icon: 'radio', pages: 'Area 9', interactiveKey: 'fourier-lab' },
  { id: 'ece-d10', bookId: 'ece-complete', number: 47, title: 'Digital Signal Processing', shortTitle: 'Digital Signal Proc', description: 'Discrete-time system analysis and FIR/IIR digital filter design with speech, audio and radar applications — the number-crunching core of the defence research establishment sonar, radar and EW processors.', icon: 'audio-waveform', pages: 'Area 10', interactiveKey: 'filter-lab' },
  { id: 'ece-d11', bookId: 'ece-complete', number: 48, title: 'VLSI & Embedded Systems', shortTitle: 'VLSI & Embedded', description: 'IC fabrication and VLSI design methods, microprocessors and microcontrollers, and embedded system organization — how the defence research establishment builds custom silicon and onboard computers.', icon: 'component', pages: 'Area 11', interactiveKey: 'sequential-lab' },
  { id: 'ece-d12', bookId: 'ece-complete', number: 49, title: 'Advanced Communication Systems', shortTitle: 'Adv Communications', description: 'Network principles, cellular systems, microwave line-of-sight links and satellite orbits with link-budget design — long-haul and tactical connectivity in the defence research establishment practice.', icon: 'radar', pages: 'Area 12', interactiveKey: 'orbit-lab' },
]

export const DRDO_ECE_SECTIONS: SectionMeta[] = [
  // ---- Chapter 1 · Engineering Mathematics ----
  { id: 'ece-d1-s1', chapterId: 'ece-d1', number: 38.1, title: 'Linear Algebra', description: 'Matrices, systems of equations, eigenvalues and vector spaces for circuit and signal analysis.' },
  { id: 'ece-d1-s2', chapterId: 'ece-d1', number: 38.2, title: 'Calculus & Differential Equations', description: 'Differentiation, integration, maxima-minima and ordinary differential equations for system modelling.' },
  { id: 'ece-d1-s3', chapterId: 'ece-d1', number: 38.3, title: 'Probability & Random Processes', description: 'Random variables, probability distributions and random processes — the statistics of noise in receivers and radar.' },
  { id: 'ece-d1-s4', chapterId: 'ece-d1', number: 38.4, title: 'Numerical Methods', description: 'Numerical solution of equations, interpolation, integration and ODE solvers for engineering computation.' },
  // ---- Chapter 2 · Network Theory ----
  { id: 'ece-d2-s1', chapterId: 'ece-d2', number: 39.1, title: 'DC Circuits & Theorems', description: "Ohm's and Kirchhoff's laws, mesh and nodal analysis, wye-delta transformation and the basic circuit theorems." },
  { id: 'ece-d2-s2', chapterId: 'ece-d2', number: 39.2, title: 'Time-Domain Transients', description: 'Solution of linear constant-coefficient differential equations — time-domain analysis of RLC circuits.' },
  { id: 'ece-d2-s3', chapterId: 'ece-d2', number: 39.3, title: 'Laplace-Domain Network Analysis', description: 'Solution of network equations using Laplace transforms and frequency-domain analysis of RLC circuits.' },
  { id: 'ece-d2-s4', chapterId: 'ece-d2', number: 39.4, title: 'Two-Port Networks & State Equations', description: 'Two-port parameters, driving-point and transfer functions, network graphs and matrices, and state equations for networks.' },
  { id: 'ece-d2-s5', chapterId: 'ece-d2', number: 39.5, title: 'Steady-State Sinusoidal Analysis', description: 'Steady-state sinusoidal analysis with phasors, resonance and AC power.' },
  // ---- Chapter 3 · Signals & Systems ----
  { id: 'ece-d3-s1', chapterId: 'ece-d3', number: 40.1, title: 'Signal & System Classification', description: 'Continuous and discrete signals; linearity, time invariance, causality and stability; system realization.' },
  { id: 'ece-d3-s2', chapterId: 'ece-d3', number: 40.2, title: 'LTI Systems & Convolution', description: 'Impulse response, convolution and the application of signal and system theory.' },
  { id: 'ece-d3-s3', chapterId: 'ece-d3', number: 40.3, title: 'Fourier Analysis', description: 'Fourier series and transforms and their applications to spectra and filtering.' },
  { id: 'ece-d3-s4', chapterId: 'ece-d3', number: 40.4, title: 'Laplace, z-Transforms & Sampling', description: 'Laplace and z-transforms; sampling of continuous-time signals.' },
  // ---- Chapter 4 · Electronic Devices ----
  { id: 'ece-d4-s1', chapterId: 'ece-d4', number: 41.1, title: 'Semiconductor Physics & Junctions', description: 'Basics of semiconductors, carrier transport, PN junctions and diode characteristics for different uses.' },
  { id: 'ece-d4-s2', chapterId: 'ece-d4', number: 41.2, title: 'BJTs, JFETs & MOSFETs', description: 'Junction and field-effect transistor construction, characteristics and applications.' },
  { id: 'ece-d4-s3', chapterId: 'ece-d4', number: 41.3, title: 'Integrated Circuits & Optoelectronics', description: 'Basics of integrated circuits — bipolar, MOS and CMOS; optical sources and detectors and optoelectronic applications.' },
  { id: 'ece-d4-s4', chapterId: 'ece-d4', number: 41.4, title: 'Electronic & Magnetic Materials', description: 'Crystal structure and defects, ceramics and insulating laminates, magnetic materials and ferrites, nano materials and superconductivity.' },
  { id: 'ece-d4-s5', chapterId: 'ece-d4', number: 41.5, title: 'Measurements & Instrumentation Basics', description: 'Accuracy, precision and standards; static and dynamic characteristics, errors, transducers, displays, telemetry and data acquisition.' },
  // ---- Chapter 5 · Analog Circuits ----
  { id: 'ece-d5-s1', chapterId: 'ece-d5', number: 42.1, title: 'Amplifier Biasing & Small-Signal Analysis', description: 'Small-signal equivalent circuits of diodes, BJTs and FETs; biasing and stability of BJT and JFET amplifier stages.' },
  { id: 'ece-d5-s2', chapterId: 'ece-d5', number: 42.2, title: 'Single & Multi-Stage Amplifiers', description: 'Analysis and design of single and multi-stage amplifiers.' },
  { id: 'ece-d5-s3', chapterId: 'ece-d5', number: 42.3, title: 'Feedback & Op-Amp Applications', description: 'Feedback and its uses; operational amplifiers and linear ICs in linear and non-linear applications.' },
  { id: 'ece-d5-s4', chapterId: 'ece-d5', number: 42.4, title: 'Oscillators, Timers & Waveshaping', description: 'Oscillator circuits, timers, multipliers and waveshaping techniques.' },
  { id: 'ece-d5-s5', chapterId: 'ece-d5', number: 42.5, title: 'Active Filters & Data Converters', description: 'Active filter design and A/D and D/A converter circuits.' },
  // ---- Chapter 6 · Digital Circuits ----
  { id: 'ece-d6-s1', chapterId: 'ece-d6', number: 43.1, title: 'Boolean Algebra & Logic Families', description: 'Boolean algebra applications, logic gates and digital IC families.' },
  { id: 'ece-d6-s2', chapterId: 'ece-d6', number: 43.2, title: 'Combinational Circuit Design', description: 'Combinational circuits and multiplexer-based design applications.' },
  { id: 'ece-d6-s3', chapterId: 'ece-d6', number: 43.3, title: 'Sequential Circuits, Counters & Registers', description: 'Sequential circuits — counters, registers and memories — design and applications.' },
  { id: 'ece-d6-s4', chapterId: 'ece-d6', number: 43.4, title: 'Microprocessors in Digital Design', description: 'Microprocessor architecture, programming and interfacing for digital system applications.' },
  // ---- Chapter 7 · Electromagnetics ----
  { id: 'ece-d7-s1', chapterId: 'ece-d7', number: 44.1, title: "Vector Calculus & Maxwell's Equations", description: "Elements of vector calculus, Maxwell's equations in integral and differential form, Gauss' and Stokes' theorems." },
  { id: 'ece-d7-s2', chapterId: 'ece-d7', number: 44.2, title: 'Wave Propagation in Media', description: 'Wave propagation through different media — attenuation, phase and polarization behaviour.' },
  { id: 'ece-d7-s3', chapterId: 'ece-d7', number: 44.3, title: 'Transmission Lines & Matching', description: 'Transmission line types, the Smith chart, impedance matching and transformation, S-parameters and pulse excitation.' },
  { id: 'ece-d7-s4', chapterId: 'ece-d7', number: 44.4, title: 'Waveguides', description: 'Rectangular and dielectric waveguides — modes, cut-off frequency and dispersion.' },
  { id: 'ece-d7-s5', chapterId: 'ece-d7', number: 44.5, title: 'Antennas', description: 'Radiation patterns, monopoles and dipoles, gain and active and passive arrays.' },
  // ---- Chapter 8 · Control Systems ----
  { id: 'ece-d8-s1', chapterId: 'ece-d8', number: 45.1, title: 'Modelling & Signal Flow Graphs', description: 'Mathematical modelling, transfer functions, block diagrams, signal flow graphs and system realization.' },
  { id: 'ece-d8-s2', chapterId: 'ece-d8', number: 45.2, title: 'Time-Response Analysis', description: 'Steady-state and transient analysis of open and closed loop feedback systems.' },
  { id: 'ece-d8-s3', chapterId: 'ece-d8', number: 45.3, title: 'Stability & Frequency Response', description: 'Routh-Hurwitz criterion, root loci and Nyquist and Bode plots for stability analysis.' },
  { id: 'ece-d8-s4', chapterId: 'ece-d8', number: 45.4, title: 'Compensator & Controller Design', description: 'Control system design with lead and lag compensators, PID and industrial controllers.' },
  // ---- Chapter 9 · Analog & Digital Communications ----
  { id: 'ece-d9-s1', chapterId: 'ece-d9', number: 46.1, title: 'Random Signals, Noise & Information Theory', description: 'Probability theory, random signals and noise; information theory and the analog-versus-digital trade-off.' },
  { id: 'ece-d9-s2', chapterId: 'ece-d9', number: 46.2, title: 'Amplitude & Frequency Modulation', description: 'AM and FM transmitters and receivers — theory, practice and standards — with SNR comparison.' },
  { id: 'ece-d9-s3', chapterId: 'ece-d9', number: 46.3, title: 'Pulse Code Modulation & Multiplexing', description: 'Sampling, quantizing and coding; PCM and DPCM; multiplexing of audio and video signals.' },
  { id: 'ece-d9-s4', chapterId: 'ece-d9', number: 46.4, title: 'Digital Modulation & Multiple Access', description: 'ASK, FSK and PSK modulation; TDMA, FDMA and CDMA multiple access schemes.' },
  { id: 'ece-d9-s5', chapterId: 'ece-d9', number: 46.5, title: 'Optical Fibre Communication', description: 'Fibre optic communication — theory, practice and standards for high-capacity links.' },
  // ---- Chapter 10 · Digital Signal Processing ----
  { id: 'ece-d10-s1', chapterId: 'ece-d10', number: 47.1, title: 'Discrete-Time Signals & Systems', description: 'Discrete-time signals and systems, LTI analysis and the DFT.' },
  { id: 'ece-d10-s2', chapterId: 'ece-d10', number: 47.2, title: 'FIR Digital Filters', description: 'Finite impulse response filter structures and design methods.' },
  { id: 'ece-d10-s3', chapterId: 'ece-d10', number: 47.3, title: 'IIR Digital Filters', description: 'Infinite impulse response filter structures and design methods.' },
  { id: 'ece-d10-s4', chapterId: 'ece-d10', number: 47.4, title: 'DSP Applications', description: 'Speech, audio and radar signal processing applications.' },
  // ---- Chapter 11 · VLSI & Embedded Systems ----
  { id: 'ece-d11-s1', chapterId: 'ece-d11', number: 48.1, title: 'VLSI Technology', description: 'IC processing, lithography, interconnects, packaging and testing.' },
  { id: 'ece-d11-s2', chapterId: 'ece-d11', number: 48.2, title: 'VLSI Design', description: 'MUX, ROM and PLA-based design; Moore and Mealy circuits; pipeline concepts and design for testability.' },
  { id: 'ece-d11-s3', chapterId: 'ece-d11', number: 48.3, title: 'Microprocessors, Microcontrollers & Interfacing', description: 'Architecture, interrupts, DMA, instruction sets and peripheral interfacing.' },
  { id: 'ece-d11-s4', chapterId: 'ece-d11', number: 48.4, title: 'Embedded Systems & Computer Organization', description: 'Embedded system design; CPU, memory and I/O organization, OS and database basics and elements of programming languages for ECE engineers.' },
  // ---- Chapter 12 · Advanced Communication Systems ----
  { id: 'ece-d12-s1', chapterId: 'ece-d12', number: 49.1, title: 'Communication Networks & Security', description: 'Principles, practices and technologies of communication networks, the OSI model and network security.' },
  { id: 'ece-d12-s2', chapterId: 'ece-d12', number: 49.2, title: 'Packet Multiplexing & Scheduling', description: 'Packet multiplexed streams and scheduling; TCP/IP protocol analysis.' },
  { id: 'ece-d12-s3', chapterId: 'ece-d12', number: 49.3, title: 'Cellular & Mobile Networks', description: 'Cellular network types, analysis and mobility protocols.' },
  { id: 'ece-d12-s4', chapterId: 'ece-d12', number: 49.4, title: 'Microwave & Line-of-Sight Systems', description: 'Terrestrial and space line-of-sight systems, link calculations and system design — the physics behind microwave and radar links.' },
  { id: 'ece-d12-s5', chapterId: 'ece-d12', number: 49.5, title: 'Satellite & Fibre System Design', description: 'Communication satellite orbits, characteristics and systems; fibre optic link calculations and block schematics.' },
]

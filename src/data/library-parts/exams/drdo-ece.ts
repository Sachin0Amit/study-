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
  { id: 'drdo-ece-a1', bookId: 'drdo-ece', number: 1, title: 'Engineering Mathematics', shortTitle: 'Engineering Maths', description: 'Linear algebra, calculus, differential equations, probability and numerical methods — the mathematical engine room of DRDO communication, control and signal-processing design.', icon: 'sigma', pages: 'Area 1', interactiveKey: 'fourier-lab' },
  { id: 'drdo-ece-a2', bookId: 'drdo-ece', number: 2, title: 'Network Theory', shortTitle: 'Network Theory', description: 'Circuit analysis from DC laws and theorems through RLC transients to Laplace-domain and two-port techniques — the base layer of every DRDO electronic system.', icon: 'circuit-board', pages: 'Area 2', interactiveKey: 'dc-circuit-lab' },
  { id: 'drdo-ece-a3', bookId: 'drdo-ece', number: 3, title: 'Signals & Systems', shortTitle: 'Signals & Systems', description: 'Classification, convolution and the full transform toolbox for continuous and discrete signals — the working language of DRDO radar, sonar and communication engineers.', icon: 'waves', pages: 'Area 3', interactiveKey: 'fourier-lab' },
  { id: 'drdo-ece-a4', bookId: 'drdo-ece', number: 4, title: 'Electronic Devices', shortTitle: 'Electronic Devices', description: 'Semiconductor physics, diodes, BJTs, JFETs, MOSFETs, optoelectronics and electronic materials — the device fabric of DRDO electronic-warfare and avionics subsystems.', icon: 'zap', pages: 'Area 4', interactiveKey: 'diode-lab' },
  { id: 'drdo-ece-a5', bookId: 'drdo-ece', number: 5, title: 'Analog Circuits', shortTitle: 'Analog Circuits', description: 'Biasing, small-signal amplifiers, feedback, op-amp applications, oscillators, waveshaping and data conversion — the analog front ends of DRDO sensors and receivers.', icon: 'activity', pages: 'Area 5', interactiveKey: 'opamp-lab' },
  { id: 'drdo-ece-a6', bookId: 'drdo-ece', number: 6, title: 'Digital Circuits', shortTitle: 'Digital Circuits', description: 'Boolean algebra, logic families, combinational and sequential design with counters, memories and microprocessors — digital hardware construction for DRDO systems.', icon: 'toggle-right', pages: 'Area 6', interactiveKey: 'kmap-minimizer' },
  { id: 'drdo-ece-a7', bookId: 'drdo-ece', number: 7, title: 'Electromagnetics', shortTitle: 'Electromagnetics', description: "Maxwell's equations, wave propagation, transmission lines, waveguides and antennas — the physics of DRDO radar, telemetry and electromagnetic warfare.", icon: 'magnet', pages: 'Area 7', interactiveKey: 'em-wave-lab' },
  { id: 'drdo-ece-a8', bookId: 'drdo-ece', number: 8, title: 'Control Systems', shortTitle: 'Control Systems', description: 'Feedback modelling, stability analysis and compensator design — the control theory that points DRDO missile airframes, gimbal platforms and tracking systems.', icon: 'sliders-horizontal', pages: 'Area 8', interactiveKey: 'phasor-lab' },
  { id: 'drdo-ece-a9', bookId: 'drdo-ece', number: 9, title: 'Analog & Digital Communications', shortTitle: 'Analog & Digital Comms', description: 'Noise and information theory, AM/FM, PCM and digital modulation, multiple access and optical fibre — the transport layer of DRDO telemetry and tactical data links.', icon: 'radio', pages: 'Area 9', interactiveKey: 'fourier-lab' },
  { id: 'drdo-ece-a10', bookId: 'drdo-ece', number: 10, title: 'Digital Signal Processing', shortTitle: 'Digital Signal Proc', description: 'Discrete-time system analysis and FIR/IIR digital filter design with speech, audio and radar applications — the number-crunching core of DRDO sonar, radar and EW processors.', icon: 'audio-waveform', pages: 'Area 10', interactiveKey: 'filter-lab' },
  { id: 'drdo-ece-a11', bookId: 'drdo-ece', number: 11, title: 'VLSI & Embedded Systems', shortTitle: 'VLSI & Embedded', description: 'IC fabrication and VLSI design methods, microprocessors and microcontrollers, and embedded system organization — how DRDO builds custom silicon and onboard computers.', icon: 'component', pages: 'Area 11', interactiveKey: 'sequential-lab' },
  { id: 'drdo-ece-a12', bookId: 'drdo-ece', number: 12, title: 'Advanced Communication Systems', shortTitle: 'Adv Communications', description: 'Network principles, cellular systems, microwave line-of-sight links and satellite orbits with link-budget design — long-haul and tactical connectivity in DRDO practice.', icon: 'radar', pages: 'Area 12', interactiveKey: 'orbit-lab' },
]

export const DRDO_ECE_SECTIONS: SectionMeta[] = [
  // ---- Chapter 1 · Engineering Mathematics ----
  { id: 'drdo-ece-a1-s1', chapterId: 'drdo-ece-a1', number: 1.1, title: 'Linear Algebra', description: 'Matrices, systems of equations, eigenvalues and vector spaces for circuit and signal analysis.' },
  { id: 'drdo-ece-a1-s2', chapterId: 'drdo-ece-a1', number: 1.2, title: 'Calculus & Differential Equations', description: 'Differentiation, integration, maxima-minima and ordinary differential equations for system modelling.' },
  { id: 'drdo-ece-a1-s3', chapterId: 'drdo-ece-a1', number: 1.3, title: 'Probability & Random Processes', description: 'Random variables, probability distributions and random processes — the statistics of noise in receivers and radar.' },
  { id: 'drdo-ece-a1-s4', chapterId: 'drdo-ece-a1', number: 1.4, title: 'Numerical Methods', description: 'Numerical solution of equations, interpolation, integration and ODE solvers for engineering computation.' },
  // ---- Chapter 2 · Network Theory ----
  { id: 'drdo-ece-a2-s1', chapterId: 'drdo-ece-a2', number: 2.1, title: 'DC Circuits & Theorems', description: "Ohm's and Kirchhoff's laws, mesh and nodal analysis, wye-delta transformation and the basic circuit theorems." },
  { id: 'drdo-ece-a2-s2', chapterId: 'drdo-ece-a2', number: 2.2, title: 'Time-Domain Transients', description: 'Solution of linear constant-coefficient differential equations — time-domain analysis of RLC circuits.' },
  { id: 'drdo-ece-a2-s3', chapterId: 'drdo-ece-a2', number: 2.3, title: 'Laplace-Domain Network Analysis', description: 'Solution of network equations using Laplace transforms and frequency-domain analysis of RLC circuits.' },
  { id: 'drdo-ece-a2-s4', chapterId: 'drdo-ece-a2', number: 2.4, title: 'Two-Port Networks & State Equations', description: 'Two-port parameters, driving-point and transfer functions, network graphs and matrices, and state equations for networks.' },
  { id: 'drdo-ece-a2-s5', chapterId: 'drdo-ece-a2', number: 2.5, title: 'Steady-State Sinusoidal Analysis', description: 'Steady-state sinusoidal analysis with phasors, resonance and AC power.' },
  // ---- Chapter 3 · Signals & Systems ----
  { id: 'drdo-ece-a3-s1', chapterId: 'drdo-ece-a3', number: 3.1, title: 'Signal & System Classification', description: 'Continuous and discrete signals; linearity, time invariance, causality and stability; system realization.' },
  { id: 'drdo-ece-a3-s2', chapterId: 'drdo-ece-a3', number: 3.2, title: 'LTI Systems & Convolution', description: 'Impulse response, convolution and the application of signal and system theory.' },
  { id: 'drdo-ece-a3-s3', chapterId: 'drdo-ece-a3', number: 3.3, title: 'Fourier Analysis', description: 'Fourier series and transforms and their applications to spectra and filtering.' },
  { id: 'drdo-ece-a3-s4', chapterId: 'drdo-ece-a3', number: 3.4, title: 'Laplace, z-Transforms & Sampling', description: 'Laplace and z-transforms; sampling of continuous-time signals.' },
  // ---- Chapter 4 · Electronic Devices ----
  { id: 'drdo-ece-a4-s1', chapterId: 'drdo-ece-a4', number: 4.1, title: 'Semiconductor Physics & Junctions', description: 'Basics of semiconductors, carrier transport, PN junctions and diode characteristics for different uses.' },
  { id: 'drdo-ece-a4-s2', chapterId: 'drdo-ece-a4', number: 4.2, title: 'BJTs, JFETs & MOSFETs', description: 'Junction and field-effect transistor construction, characteristics and applications.' },
  { id: 'drdo-ece-a4-s3', chapterId: 'drdo-ece-a4', number: 4.3, title: 'Integrated Circuits & Optoelectronics', description: 'Basics of integrated circuits — bipolar, MOS and CMOS; optical sources and detectors and optoelectronic applications.' },
  { id: 'drdo-ece-a4-s4', chapterId: 'drdo-ece-a4', number: 4.4, title: 'Electronic & Magnetic Materials', description: 'Crystal structure and defects, ceramics and insulating laminates, magnetic materials and ferrites, nano materials and superconductivity.' },
  { id: 'drdo-ece-a4-s5', chapterId: 'drdo-ece-a4', number: 4.5, title: 'Measurements & Instrumentation Basics', description: 'Accuracy, precision and standards; static and dynamic characteristics, errors, transducers, displays, telemetry and data acquisition.' },
  // ---- Chapter 5 · Analog Circuits ----
  { id: 'drdo-ece-a5-s1', chapterId: 'drdo-ece-a5', number: 5.1, title: 'Amplifier Biasing & Small-Signal Analysis', description: 'Small-signal equivalent circuits of diodes, BJTs and FETs; biasing and stability of BJT and JFET amplifier stages.' },
  { id: 'drdo-ece-a5-s2', chapterId: 'drdo-ece-a5', number: 5.2, title: 'Single & Multi-Stage Amplifiers', description: 'Analysis and design of single and multi-stage amplifiers.' },
  { id: 'drdo-ece-a5-s3', chapterId: 'drdo-ece-a5', number: 5.3, title: 'Feedback & Op-Amp Applications', description: 'Feedback and its uses; operational amplifiers and linear ICs in linear and non-linear applications.' },
  { id: 'drdo-ece-a5-s4', chapterId: 'drdo-ece-a5', number: 5.4, title: 'Oscillators, Timers & Waveshaping', description: 'Oscillator circuits, timers, multipliers and waveshaping techniques.' },
  { id: 'drdo-ece-a5-s5', chapterId: 'drdo-ece-a5', number: 5.5, title: 'Active Filters & Data Converters', description: 'Active filter design and A/D and D/A converter circuits.' },
  // ---- Chapter 6 · Digital Circuits ----
  { id: 'drdo-ece-a6-s1', chapterId: 'drdo-ece-a6', number: 6.1, title: 'Boolean Algebra & Logic Families', description: 'Boolean algebra applications, logic gates and digital IC families.' },
  { id: 'drdo-ece-a6-s2', chapterId: 'drdo-ece-a6', number: 6.2, title: 'Combinational Circuit Design', description: 'Combinational circuits and multiplexer-based design applications.' },
  { id: 'drdo-ece-a6-s3', chapterId: 'drdo-ece-a6', number: 6.3, title: 'Sequential Circuits, Counters & Registers', description: 'Sequential circuits — counters, registers and memories — design and applications.' },
  { id: 'drdo-ece-a6-s4', chapterId: 'drdo-ece-a6', number: 6.4, title: 'Microprocessors in Digital Design', description: 'Microprocessor architecture, programming and interfacing for digital system applications.' },
  // ---- Chapter 7 · Electromagnetics ----
  { id: 'drdo-ece-a7-s1', chapterId: 'drdo-ece-a7', number: 7.1, title: "Vector Calculus & Maxwell's Equations", description: "Elements of vector calculus, Maxwell's equations in integral and differential form, Gauss' and Stokes' theorems." },
  { id: 'drdo-ece-a7-s2', chapterId: 'drdo-ece-a7', number: 7.2, title: 'Wave Propagation in Media', description: 'Wave propagation through different media — attenuation, phase and polarization behaviour.' },
  { id: 'drdo-ece-a7-s3', chapterId: 'drdo-ece-a7', number: 7.3, title: 'Transmission Lines & Matching', description: 'Transmission line types, the Smith chart, impedance matching and transformation, S-parameters and pulse excitation.' },
  { id: 'drdo-ece-a7-s4', chapterId: 'drdo-ece-a7', number: 7.4, title: 'Waveguides', description: 'Rectangular and dielectric waveguides — modes, cut-off frequency and dispersion.' },
  { id: 'drdo-ece-a7-s5', chapterId: 'drdo-ece-a7', number: 7.5, title: 'Antennas', description: 'Radiation patterns, monopoles and dipoles, gain and active and passive arrays.' },
  // ---- Chapter 8 · Control Systems ----
  { id: 'drdo-ece-a8-s1', chapterId: 'drdo-ece-a8', number: 8.1, title: 'Modelling & Signal Flow Graphs', description: 'Mathematical modelling, transfer functions, block diagrams, signal flow graphs and system realization.' },
  { id: 'drdo-ece-a8-s2', chapterId: 'drdo-ece-a8', number: 8.2, title: 'Time-Response Analysis', description: 'Steady-state and transient analysis of open and closed loop feedback systems.' },
  { id: 'drdo-ece-a8-s3', chapterId: 'drdo-ece-a8', number: 8.3, title: 'Stability & Frequency Response', description: 'Routh-Hurwitz criterion, root loci and Nyquist and Bode plots for stability analysis.' },
  { id: 'drdo-ece-a8-s4', chapterId: 'drdo-ece-a8', number: 8.4, title: 'Compensator & Controller Design', description: 'Control system design with lead and lag compensators, PID and industrial controllers.' },
  // ---- Chapter 9 · Analog & Digital Communications ----
  { id: 'drdo-ece-a9-s1', chapterId: 'drdo-ece-a9', number: 9.1, title: 'Random Signals, Noise & Information Theory', description: 'Probability theory, random signals and noise; information theory and the analog-versus-digital trade-off.' },
  { id: 'drdo-ece-a9-s2', chapterId: 'drdo-ece-a9', number: 9.2, title: 'Amplitude & Frequency Modulation', description: 'AM and FM transmitters and receivers — theory, practice and standards — with SNR comparison.' },
  { id: 'drdo-ece-a9-s3', chapterId: 'drdo-ece-a9', number: 9.3, title: 'Pulse Code Modulation & Multiplexing', description: 'Sampling, quantizing and coding; PCM and DPCM; multiplexing of audio and video signals.' },
  { id: 'drdo-ece-a9-s4', chapterId: 'drdo-ece-a9', number: 9.4, title: 'Digital Modulation & Multiple Access', description: 'ASK, FSK and PSK modulation; TDMA, FDMA and CDMA multiple access schemes.' },
  { id: 'drdo-ece-a9-s5', chapterId: 'drdo-ece-a9', number: 9.5, title: 'Optical Fibre Communication', description: 'Fibre optic communication — theory, practice and standards for high-capacity links.' },
  // ---- Chapter 10 · Digital Signal Processing ----
  { id: 'drdo-ece-a10-s1', chapterId: 'drdo-ece-a10', number: 10.1, title: 'Discrete-Time Signals & Systems', description: 'Discrete-time signals and systems, LTI analysis and the DFT.' },
  { id: 'drdo-ece-a10-s2', chapterId: 'drdo-ece-a10', number: 10.2, title: 'FIR Digital Filters', description: 'Finite impulse response filter structures and design methods.' },
  { id: 'drdo-ece-a10-s3', chapterId: 'drdo-ece-a10', number: 10.3, title: 'IIR Digital Filters', description: 'Infinite impulse response filter structures and design methods.' },
  { id: 'drdo-ece-a10-s4', chapterId: 'drdo-ece-a10', number: 10.4, title: 'DSP Applications', description: 'Speech, audio and radar signal processing applications.' },
  // ---- Chapter 11 · VLSI & Embedded Systems ----
  { id: 'drdo-ece-a11-s1', chapterId: 'drdo-ece-a11', number: 11.1, title: 'VLSI Technology', description: 'IC processing, lithography, interconnects, packaging and testing.' },
  { id: 'drdo-ece-a11-s2', chapterId: 'drdo-ece-a11', number: 11.2, title: 'VLSI Design', description: 'MUX, ROM and PLA-based design; Moore and Mealy circuits; pipeline concepts and design for testability.' },
  { id: 'drdo-ece-a11-s3', chapterId: 'drdo-ece-a11', number: 11.3, title: 'Microprocessors, Microcontrollers & Interfacing', description: 'Architecture, interrupts, DMA, instruction sets and peripheral interfacing.' },
  { id: 'drdo-ece-a11-s4', chapterId: 'drdo-ece-a11', number: 11.4, title: 'Embedded Systems & Computer Organization', description: 'Embedded system design; CPU, memory and I/O organization, OS and database basics and elements of programming languages for ECE engineers.' },
  // ---- Chapter 12 · Advanced Communication Systems ----
  { id: 'drdo-ece-a12-s1', chapterId: 'drdo-ece-a12', number: 12.1, title: 'Communication Networks & Security', description: 'Principles, practices and technologies of communication networks, the OSI model and network security.' },
  { id: 'drdo-ece-a12-s2', chapterId: 'drdo-ece-a12', number: 12.2, title: 'Packet Multiplexing & Scheduling', description: 'Packet multiplexed streams and scheduling; TCP/IP protocol analysis.' },
  { id: 'drdo-ece-a12-s3', chapterId: 'drdo-ece-a12', number: 12.3, title: 'Cellular & Mobile Networks', description: 'Cellular network types, analysis and mobility protocols.' },
  { id: 'drdo-ece-a12-s4', chapterId: 'drdo-ece-a12', number: 12.4, title: 'Microwave & Line-of-Sight Systems', description: 'Terrestrial and space line-of-sight systems, link calculations and system design — the physics behind microwave and radar links.' },
  { id: 'drdo-ece-a12-s5', chapterId: 'drdo-ece-a12', number: 12.5, title: 'Satellite & Fibre System Design', description: 'Communication satellite orbits, characteristics and systems; fibre optic link calculations and block schematics.' },
]

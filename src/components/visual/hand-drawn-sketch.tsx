'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  X,
  FileText,
  Info,
  CheckCircle,
  HelpCircle,
  Sparkles,
  BookOpen
} from 'lucide-react'
import { TeX } from '@/components/math'
import { RichText } from '@/components/rich-text'
import type { DiagramTopic } from './visual-diagram-solver'

export interface HotspotPin {
  id: string
  x: number // percentage 0-100
  y: number // percentage 0-100
  label: string
  formula?: string
  description: string
}

export interface SketchMetadata {
  image?: string
  title: string
  subtitle: string
  paperStyle: 'graph' | 'lined' | 'quad' | 'chalkboard'
  keyFormulas: string[]
  takeaways: string[]
  graphInsights: {
    xAxis: string
    yAxis: string
    curveBehavior: string
    criticalPoint: string
  }
  hotspots: HotspotPin[]
  svgSketchFallback?: React.ReactNode
}

export const SKETCH_CATALOG: Record<DiagramTopic, SketchMetadata> = {
  bohr_transitions: {
    image: '/diagrams/bohr_atom_sketch.jpg',
    title: "Bohr Model & Hydrogen Spectral Transitions",
    subtitle: "Physics Laboratory Notebook · Balmer Series & Energy Level Drops",
    paperStyle: 'graph',
    keyFormulas: [
      'E_n = -\\frac{13.6\\text{ eV}}{n^2}',
      'hf = \\Delta E = |E_i - E_f|',
      '\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right)',
      'L = mvr = n\\hbar'
    ],
    takeaways: [
      "Electron orbits are strictly quantized: only standing wave circles L = n*hbar are allowed.",
      "A downward transition n=3 -> n=2 emits the red Balmer H-alpha photon at exactly lambda = 656 nm.",
      "Energy levels scale inversely with n² (-13.6 eV, -3.40 eV, -1.51 eV), clustering toward ionization at 0 eV."
    ],
    graphInsights: {
      xAxis: "Principal Quantum Number n (1, 2, 3, 4 ... ∞)",
      yAxis: "Binding Energy E_n (electron-volts, eV)",
      curveBehavior: "Hyperbolic quantization scaling as -1/n² with spacing shrinking for larger n",
      criticalPoint: "Ground state n=1 at -13.6 eV; Ionization limit at n=∞ where E=0 eV"
    },
    hotspots: [
      {
        id: 'orbit-levels',
        x: 48,
        y: 42,
        label: 'Quantized Orbits',
        formula: 'r_n = n^2 a_0',
        description: 'Bohr radii scale as n² where a_0 = 0.529 Å. Only non-radiating stationary states persist.'
      },
      {
        id: 'balmer-photon',
        x: 75,
        y: 48,
        label: 'Balmer Transition',
        formula: 'hf = E_3 - E_2 = 1.89\\text{ eV}',
        description: 'Downward jump from n=3 to n=2 liberates a visible photon at wavelength λ = 656 nm (red H-alpha).'
      },
      {
        id: 'rydberg-box',
        x: 35,
        y: 84,
        label: 'Rydberg Equation',
        formula: '1/\\lambda = R_H (1/n_f^2 - 1/n_i^2)',
        description: 'Empirically predicted line spectra derived directly from Bohr angular momentum quantization.'
      }
    ]
  },

  projectile: {
    image: '/diagrams/projectile_trajectory_sketch.jpg',
    title: "2D Projectile Motion & Kinematic Vector Decomposition",
    subtitle: "Engineering Graph Paper · Independent X & Y Kinematic Components",
    paperStyle: 'quad',
    keyFormulas: [
      'v_{0x} = v_0\\cos\\theta = \\text{constant}',
      'v_y(t) = v_0\\sin\\theta - gt',
      'H_{\\max} = \\frac{v_0^2\\sin^2\\theta}{2g}',
      'R = \\frac{v_0^2\\sin(2\\theta)}{g}'
    ],
    takeaways: [
      "Horizontal and vertical motions are strictly independent: a_x = 0 while a_y = -g = -9.8 m/s².",
      "At the apex of flight, vertical velocity momentarily reaches v_y = 0 while v_x remains invariant.",
      "Maximum range over level ground occurs at launch angle theta = 45 degrees."
    ],
    graphInsights: {
      xAxis: "Horizontal displacement x (meters)",
      yAxis: "Vertical altitude y (meters)",
      curveBehavior: "Concave downward symmetric parabola y = x tan(θ) - [g/(2 v_0² cos²θ)] x²",
      criticalPoint: "Apex peak (x = R/2, y = H_max) where instantaneous tangent slope is zero"
    },
    hotspots: [
      {
        id: 'launch-vector',
        x: 20,
        y: 65,
        label: 'Launch Velocity Decomposition',
        formula: '\\vec{v}_0 = v_0\\cos\\theta\\hat{i} + v_0\\sin\\theta\\hat{j}',
        description: 'Initial velocity splits into orthogonal vectors; gravity exclusively acts on the vertical axis.'
      },
      {
        id: 'trajectory-apex',
        x: 52,
        y: 28,
        label: 'Trajectory Apex',
        formula: 'v_y = 0, \\; v_{\\text{apex}} = v_{0x}',
        description: 'Kinetic energy reaches minimum at the summit where all motion is purely horizontal.'
      },
      {
        id: 'range-impact',
        x: 82,
        y: 70,
        label: 'Range & Touchdown',
        formula: 't_{\\text{flight}} = \\frac{2v_0\\sin\\theta}{g}',
        description: 'Landing occurs at twice the rise time, with equal and opposite vertical landing velocity -v_0y.'
      }
    ]
  },

  wave_interference: {
    image: '/diagrams/double_slit_sketch.jpg',
    title: "Young's Double-Slit Interference & Intensity Profile",
    subtitle: "Laboratory Notebook · Slit Path Difference & Screen Fringe Envelope",
    paperStyle: 'graph',
    keyFormulas: [
      'd\\sin\\theta = m\\lambda \\quad (\\text{Bright Maxima})',
      'd\\sin\\theta = (m + \\frac{1}{2})\\lambda \\quad (\\text{Dark Minima})',
      'y_m = \\frac{m\\lambda L}{d}',
      'I = I_0\\cos^2\\left(\\frac{\\pi d y}{\\lambda L}\\right)'
    ],
    takeaways: [
      "Path length difference delta r = d sin(theta) determines constructive vs destructive superposition.",
      "Bright fringes occur where path difference is an integer number of full wavelengths m*lambda.",
      "Screen intensity profile follows a cosine-squared curve with central maximum at m=0."
    ],
    graphInsights: {
      xAxis: "Intensity I (Watts/m²)",
      yAxis: "Fringe Screen Position y (mm)",
      curveBehavior: "Periodic cos²(π d y / λ L) intensity peaks modulated by slit diffraction envelope",
      criticalPoint: "Central zeroth-order bright fringe y=0 with peak intensity I_max = 4 I_single"
    },
    hotspots: [
      {
        id: 'slits-barrier',
        x: 28,
        y: 40,
        label: 'Double Slit Aperture',
        formula: 'd = \\text{slit spacing}',
        description: 'Two coherent secondary cylindrical wavefronts emerge from single monochromatic light beam.'
      },
      {
        id: 'path-difference',
        x: 46,
        y: 35,
        label: 'Geometric Path Difference',
        formula: '\\Delta r = d\\sin\\theta',
        description: 'Extra distance traveled by ray S2 compared to ray S1 to reach target screen point P.'
      },
      {
        id: 'intensity-curve',
        x: 85,
        y: 72,
        label: 'Intensity Graph',
        formula: 'I(y) = I_0 \\cos^2(\\pi d y / \\lambda L)',
        description: 'Hand-plotted intensity graph showing bright peak bands and zero-intensity dark nodes.'
      }
    ]
  },

  free_body: {
    image: '/diagrams/incline_freebody_sketch.jpg',
    title: "Inclined Plane Free Body Diagram & Force Resolution",
    subtitle: "Engineering Problem Notes · Coordinate Tilt along Incline Ramp",
    paperStyle: 'quad',
    keyFormulas: [
      'F_N = mg\\cos\\theta',
      'f_k = \\mu_k F_N = \\mu_k mg\\cos\\theta',
      '\\Sigma F_x = mg\\sin\\theta - f_k = ma',
      'a = g(\\sin\\theta - \\mu_k\\cos\\theta)'
    ],
    takeaways: [
      "Tilt coordinate axes parallel (x) and perpendicular (y) to the incline to simplify Newton's 2nd Law.",
      "Gravity mg decomposes into mg sin(theta) driving motion downhill and mg cos(theta) balancing normal force.",
      "Frictional force opposes sliding motion along the surface and equals mu_k * normal force."
    ],
    graphInsights: {
      xAxis: "Incline Ramp Angle θ (degrees)",
      yAxis: "Downhill Acceleration a (m/s²)",
      curveBehavior: "Monotonically increasing sinusoidal response starting at 0 and approaching g at 90°",
      criticalPoint: "Critical slip angle tan(θ_c) = μ_s below which block remains static"
    },
    hotspots: [
      {
        id: 'normal-vector',
        x: 27,
        y: 45,
        label: 'Normal Force Vector',
        formula: 'F_N = mg\\cos\\theta',
        description: 'Surface reaction force perpendicular to the ramp, preventing penetration into the incline.'
      },
      {
        id: 'friction-vector',
        x: 38,
        y: 48,
        label: 'Kinetic Friction',
        formula: 'f_k = \\mu_k F_N',
        description: 'Dissipative resistive force parallel to the ramp opposing instantaneous velocity.'
      },
      {
        id: 'newton-resolution',
        x: 65,
        y: 52,
        label: "Newton's 2nd Law Derivation",
        formula: 'a = g(\\sin\\theta - \\mu_k\\cos\\theta)',
        description: 'Full step-by-step substitution showing mass m cancelling out from both sides.'
      }
    ]
  },

  doppler: {
    image: '/diagrams/doppler_sound_sketch.jpg',
    title: "Acoustic Doppler Wavefront Compression & Pitch Shift",
    subtitle: "Study Spiral Notebook · Source Motion & Frequency vs Time Graph",
    paperStyle: 'lined',
    keyFormulas: [
      'f_{\\text{obs}} = f_0 \\left(\\frac{v}{v \\pm v_s}\\right)',
      '\\lambda_{\\text{front}} = \\frac{v - v_s}{f_0}',
      '\\lambda_{\\text{behind}} = \\frac{v + v_s}{f_0}',
      'v = f \\lambda = 343\\text{ m/s}'
    ],
    takeaways: [
      "When the source moves towards the observer (- sign), wave crests compress together, raising pitch.",
      "When the source recedes (+ sign), wave crests stretch farther apart, lowering observed pitch.",
      "The frequency shift transition happens abruptly as the moving source passes the listener."
    ],
    graphInsights: {
      xAxis: "Time t (seconds)",
      yAxis: "Observed Frequency f_obs (Hertz)",
      curveBehavior: "High plateau f_obs > f_0 approaching, transitioning through a steep sigmoid drop to low plateau f_obs < f_0",
      criticalPoint: "Crossing point t = t_pass where source velocity vector is momentary perpendicular to line of sight"
    },
    hotspots: [
      {
        id: 'compressed-front',
        x: 62,
        y: 45,
        label: 'Compressed Wavefronts',
        formula: '\\lambda_{\\text{front}} < \\lambda_0 \\implies f_{\\text{obs}} > f_0',
        description: 'Acoustic circles bunch up in front of the vehicle, perceived as a higher pitch by listener A.'
      },
      {
        id: 'stretched-behind',
        x: 28,
        y: 35,
        label: 'Stretched Wavefronts',
        formula: '\\lambda_{\\text{behind}} > \\lambda_0 \\implies f_{\\text{obs}} < f_0',
        description: 'Trailing wavefronts are spaced further apart, perceived as a lower tone by listener B.'
      },
      {
        id: 'freq-time-graph',
        x: 25,
        y: 84,
        label: 'Frequency vs Time Curve',
        formula: 'f(t) \\text{ S-curve transition}',
        description: 'Hand-sketched plot capturing the familiar Doppler drop as the vehicle drives past.'
      }
    ]
  },

  circuits: {
    image: '/diagrams/electric_circuit_sketch.jpg',
    title: "DC Circuit Loop Analysis & Resistor I-V Characteristics",
    subtitle: "ECE Laboratory Notes · Kirchhoff's Voltage Law & Ohmic Characteristic Lines",
    paperStyle: 'graph',
    keyFormulas: [
      'V = IR \\quad (\\text{Ohm\'s Law})',
      '\\Sigma \\Delta V_{\\text{loop}} = 0 \\quad (\\text{KVL})',
      '\\Sigma I_{\\text{in}} = \\Sigma I_{\\text{out}} \\quad (\\text{KCL})',
      'R_{\\text{series}} = R_1 + R_2, \\; \\frac{1}{R_{\\text{parallel}}} = \\frac{1}{R_1} + \\frac{1}{R_2}'
    ],
    takeaways: [
      "Kirchhoff's Voltage Law: the sum of electric potential drops around any closed loop must equal zero.",
      "Resistors in series carry identical current I and divide voltage drops proportionally to resistance.",
      "Resistors in parallel share identical voltage drop Delta V and divide current inversely to resistance."
    ],
    graphInsights: {
      xAxis: "Applied Voltage V (Volts)",
      yAxis: "Current I (Amperes)",
      curveBehavior: "Straight linear Ohmic rays I = (1/R) V through the origin",
      criticalPoint: "Slope equals conductance G = 1/R; smaller slope corresponds to higher resistance"
    },
    hotspots: [
      {
        id: 'voltage-source',
        x: 20,
        y: 28,
        label: 'DC Voltage Source',
        formula: 'V_{\\text{battery}} = 12\\text{V}',
        description: 'Electrochemical potential pump generating electric field driving charges through the loop.'
      },
      {
        id: 'loop-current',
        x: 38,
        y: 30,
        label: 'Kirchhoff Voltage Loop',
        formula: '\\Sigma \\Delta V = 12 - 4 - 2 - 6 = 0\\text{ V}',
        description: 'Conservation of energy verified across series and parallel resistive branches.'
      },
      {
        id: 'iv-characteristic',
        x: 78,
        y: 70,
        label: 'Resistor I-V Curve',
        formula: 'I = V / R',
        description: 'Hand-drawn linear characteristic graph showing Ohmic behavior for series and parallel branches.'
      }
    ]
  },

  optics_snell: {
    image: '/diagrams/optics_refraction_sketch.jpg',
    title: "Snell's Law of Refraction & Total Internal Reflection",
    subtitle: "Optics Laboratory Notebook · Refractive Index & Critical Angle Limit",
    paperStyle: 'quad',
    keyFormulas: [
      'n_1\\sin\\theta_1 = n_2\\sin\\theta_2',
      '\\sin\\theta_c = \\frac{n_2}{n_1} \\quad (n_1 > n_2)',
      'v = \\frac{c}{n}',
      '\\theta_{\\text{reflected}} = \\theta_{\\text{incident}}'
    ],
    takeaways: [
      "Light passing into a medium with higher optical density (n2 > n1) bends towards the surface normal.",
      "When travelling from a denser to rarer medium (n1 > n2), rays bend away from the normal.",
      "Beyond the critical angle theta_c, 100% of the incident light reflects back with zero refraction into medium 2."
    ],
    graphInsights: {
      xAxis: "Angle of Incidence θ_1 (degrees)",
      yAxis: "Angle of Refraction θ_2 (degrees)",
      curveBehavior: "Arcsin curve θ_2 = arcsin[(n1/n2) sin θ_1] terminating at critical angle asymptote",
      criticalPoint: "Critical threshold θ_c = arcsin(n2/n1) where refracted ray skims interface at 90°"
    },
    hotspots: [
      {
        id: 'interface-refract',
        x: 52,
        y: 48,
        label: 'Interface Boundary',
        formula: 'n_1\\sin\\theta_1 = n_2\\sin\\theta_2',
        description: 'Ray speed change at the air-glass boundary produces wave front rotation and angular deflection.'
      },
      {
        id: 'tir-box',
        x: 82,
        y: 60,
        label: 'Total Internal Reflection',
        formula: '\\theta_1 > \\theta_c \\implies 100\\% \\text{ reflection}',
        description: 'Fiber optics principle: all optical energy is conserved without transmission losses.'
      },
      {
        id: 'angle-graph',
        x: 18,
        y: 42,
        label: 'θ_2 vs θ_1 Graph',
        formula: '\\theta_2(\\theta_1) \\text{ curve}',
        description: 'Hand-plotted curve showing non-linear Snell deflection terminating at the critical angle limit.'
      }
    ]
  },

  circular_motion: {
    title: "Uniform Circular Motion & Centripetal Acceleration",
    subtitle: "Chalkboard Kinematics Sketch · Radial Acceleration Vector",
    paperStyle: 'chalkboard',
    keyFormulas: [
      'a_c = \\frac{v^2}{r} = \\omega^2 r',
      'v = \\frac{2\\pi r}{T} = \\omega r',
      'F_c = m\\frac{v^2}{r}',
      '\\vec{a} \\perp \\vec{v}'
    ],
    takeaways: [
      "Even at constant speed v, the velocity vector is constantly turning, generating an acceleration towards the center.",
      "Centripetal acceleration is strictly perpendicular to instantaneous tangential velocity.",
      "Net centripetal force is not an extra force: it is provided by tension, gravity, or friction."
    ],
    graphInsights: {
      xAxis: "Angular frequency ω (rad/s) or Speed v (m/s)",
      yAxis: "Centripetal force F_c (Newtons)",
      curveBehavior: "Parabolic quadratic curve scaling as v² or ω²",
      criticalPoint: "Origin (0,0) where zero speed produces zero required central turning force"
    },
    hotspots: []
  },

  coulomb_efield: {
    title: "Coulomb's Law & Electrostatic Field Lines",
    subtitle: "Physics Study Sheet · Dipole Field Lines & Point Charge Forces",
    paperStyle: 'graph',
    keyFormulas: [
      'F = k_e\\frac{|q_1 q_2|}{r^2}',
      '\\vec{E} = \\frac{\\vec{F}}{q_0} = k_e\\frac{q}{r^2}\\hat{r}',
      'V = k_e\\frac{q}{r}',
      '\\Phi_E = \\oint \\vec{E}\\cdot d\\vec{A} = \\frac{Q_{\\text{encl}}}{\\varepsilon_0}'
    ],
    takeaways: [
      "Electrostatic force obeys inverse-square drop-off with distance r².",
      "Electric field lines emerge radially from positive charges and terminate on negative charges.",
      "Equipotential lines run everywhere perpendicular to electric field vectors."
    ],
    graphInsights: {
      xAxis: "Radial distance r (meters)",
      yAxis: "Electric Field E (N/C)",
      curveBehavior: "Hyperbolic inverse-square drop 1/r² falling rapidly towards zero",
      criticalPoint: "r -> 0 where classical point charge field becomes singular"
    },
    hotspots: []
  },

  thermodynamics_pv: {
    title: "Thermodynamic P-V Indicator Diagram & Carnot Cycle",
    subtitle: "Chalkboard Study Sketch · Isotherms, Adiabats & Net Cyclic Work",
    paperStyle: 'chalkboard',
    keyFormulas: [
      'W = \\int P \\, dV = \\text{Area under P-V curve}',
      '\\Delta U = Q - W',
      'W_{\\text{net}} = \\text{Enclosed loop area}',
      '\\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}'
    ],
    takeaways: [
      "The area enclosed by a clockwise closed cycle on the P-V diagram equals the net work done by the engine.",
      "Isothermal processes follow P = nRT/V hyperbolas; adiabatic processes are steeper with P = C / V^gamma.",
      "Carnot efficiency represents the absolute upper theoretical limit for any heat engine between T_H and T_C."
    ],
    graphInsights: {
      xAxis: "Gas Volume V (m³ or Liters)",
      yAxis: "Pressure P (Pascals or atm)",
      curveBehavior: "Two upper/lower isotherms intersected by two steep adiabatic curves",
      criticalPoint: "Peak state (P1, V1) at maximum compression and highest reservoir temperature T_H"
    },
    hotspots: []
  },

  calculus_tangent: {
    title: "Differential Calculus: Secant to Tangent Derivative Limit",
    subtitle: "Calculus Notebook Sheet · Slope Function & Instantaneous Rate of Change",
    paperStyle: 'quad',
    keyFormulas: [
      'f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}',
      'm_{\\text{sec}} = \\frac{f(x+h) - f(x)}{h}',
      'y - y_0 = f\'(x_0)(x - x_0)',
      '\\frac{df}{dx} = \\text{instantaneous tangent slope}'
    ],
    takeaways: [
      "The derivative is the geometric limit of secant chord slopes as the horizontal interval h approaches zero.",
      "The tangent line provides the best linear approximation to any smooth curve near a point x_0.",
      "In physics, the derivative of position with respect to time yields instantaneous velocity v = dx/dt."
    ],
    graphInsights: {
      xAxis: "Independent Variable x",
      yAxis: "Function Value f(x)",
      curveBehavior: "Smooth nonlinear curve with secant chord rotating toward the tangent asymptote",
      criticalPoint: "Point of tangency (x_0, f(x_0)) where secant and tangent lines coincide"
    },
    hotspots: []
  },

  logic_gates: {
    title: "Digital Logic Timing Diagram & Truth Tables",
    subtitle: "Digital Design Sheet · Binary Waveform Transitions & Boolean Algebra",
    paperStyle: 'graph',
    keyFormulas: [
      'Y_{\\text{AND}} = A \\cdot B',
      'Y_{\\text{OR}} = A + B',
      'Y_{\\text{NAND}} = \\overline{A \\cdot B}',
      'Y_{\\text{XOR}} = A \\oplus B'
    ],
    takeaways: [
      "Timing waveforms illustrate propagation delay and synchronous clock edge transitions.",
      "NAND and NOR gates are universal: any digital circuit can be synthesized exclusively with them.",
      "De Morgan's Laws: ~(A & B) = ~A | ~B, ~(A | B) = ~A & ~B."
    ],
    graphInsights: {
      xAxis: "Time t (nanoseconds)",
      yAxis: "Digital Voltage Level (0V LOW / 3.3V HIGH)",
      curveBehavior: "Square-wave binary pulses with finite rise and fall transition times",
      criticalPoint: "Clock edge transition triggering flip-flop state updates"
    },
    hotspots: []
  },

  titration_equilibrium: {
    image: '/diagrams/titration_equilibrium_sketch.jpg',
    title: "Acid-Base Titration Curves & Le Châtelier Equilibrium",
    subtitle: "Chemistry Laboratory Notebook · Buffer Capacities, Equivalence Point & pH Shifting",
    paperStyle: 'quad',
    keyFormulas: [
      '\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right)',
      'K_w = [\\text{H}_3\\text{O}^+][\\text{OH}^-] = 1.0 \\times 10^{-14}',
      'Q_c = \\frac{[\\text{Products}]^c}{[\\text{Reactants}]^a}',
      '\\Delta G = \\Delta G^\\circ + RT\\ln Q'
    ],
    takeaways: [
      "At the half-equivalence point (V = 1/2 V_eq), [HA] = [A⁻], making pH = pKa directly on the buffer plateau.",
      "The equivalence point for weak acid / strong base titration occurs at pH > 7 (basic) due to conjugate base hydrolysis.",
      "Le Châtelier's principle dictates that increasing endothermic temperature shifts equilibrium towards product formation."
    ],
    graphInsights: {
      xAxis: "Volume of Titrant Added (mL of 0.10 M NaOH)",
      yAxis: "Solution pH (0 to 14 Scale)",
      curveBehavior: "Sigmoidal S-curve featuring an initial buffer plateau, a steep equivalence inflection, and alkaline saturation",
      criticalPoint: "Half-equivalence point where pH = pKa = 4.76; Equivalence point at V_eq = 25 mL, pH ≈ 8.72"
    },
    hotspots: [
      {
        id: 'half-eq',
        x: 28,
        y: 55,
        label: 'Half-Equivalence',
        formula: '\\text{pH} = \\text{p}K_a',
        description: 'Equal concentrations of weak acid HA and conjugate base A⁻ produce maximum buffer capacity.'
      },
      {
        id: 'eq-point',
        x: 50,
        y: 35,
        label: 'Equivalence Point',
        formula: 'n_{\\text{acid}} = n_{\\text{base}}',
        description: 'Stoichiometric neutralization reached. Steep pH surge from ~6 to ~11 in less than 0.2 mL.'
      },
      {
        id: 'indicator-range',
        x: 70,
        y: 25,
        label: 'Phenolphthalein Transition',
        formula: '\\text{p}K_{\\text{In}} \\approx 9.3',
        description: 'Colorless in acidic/neutral solution; turns vivid magenta pink between pH 8.2 and 10.0.'
      }
    ]
  },

  periodic_trends: {
    image: '/diagrams/periodic_trends_sketch.jpg',
    title: "Periodic Trends: Ionization Energy, Atomic Radius & Electronegativity",
    subtitle: "Inorganic Chemistry Study Sheet · Z_eff Nuclear Shielding vs. Shell Quantum Numbers",
    paperStyle: 'graph',
    keyFormulas: [
      'Z_{\\text{eff}} = Z - S',
      'F_{\\text{coulomb}} = \\frac{k \\cdot Z_{\\text{eff}} \\cdot e}{r^2}',
      '\\text{IE}_1 < \\text{IE}_2 \\ll \\text{IE}_3\\quad (\\text{core valence leap})',
      'r_{\\text{cation}} < r_{\\text{neutral}} < r_{\\text{anion}}'
    ],
    takeaways: [
      "Atomic radius contracts across a period (left to right) because Z_eff increases while electrons populate the same shell.",
      "First Ionization Energy peaks sharply at noble gases (He, Ne, Ar, Kr) due to closed-shell stable electronic octets.",
      "Subshell anomalies: Nitrogen IE > Oxygen IE due to extra stability of half-filled p³ orbital (exchange energy)."
    ],
    graphInsights: {
      xAxis: "Atomic Number Z (1 to 36, H through Kr)",
      yAxis: "First Ionization Energy IE_1 (kJ/mol)",
      curveBehavior: "Sawtooth periodic oscillations with sharp noble gas peaks and alkali metal valleys (Li, Na, K, Rb)",
      criticalPoint: "He highest at 2372 kJ/mol; Cs/Fr lowest at ~380 kJ/mol; subshell dips at B (2p¹) and O (2p⁴)"
    },
    hotspots: [
      {
        id: 'noble-peaks',
        x: 42,
        y: 18,
        label: 'Noble Gas Octet Peak',
        formula: 's^2 p^6\\text{ stable octet}',
        description: 'Noble gases hold valence electrons tightly with highest effective nuclear charge in their row.'
      },
      {
        id: 'subshell-drop',
        x: 26,
        y: 38,
        label: 'Exchange & Subshell Dip',
        formula: '\\text{IE}(\\text{N}) > \\text{IE}(\\text{O})',
        description: 'Nitrogen half-filled 2p³ has zero electron-pairing repulsion; Oxygen has one paired 2p⁴ orbital which repels.'
      },
      {
        id: 'radius-trend',
        x: 65,
        y: 72,
        label: 'Radius Contraction',
        formula: 'Z_{\\text{eff}} \\uparrow \\implies r \\downarrow',
        description: 'Incomplete shielding by valence electrons pulls the cloud inward as nuclear charge Z climbs across period.'
      }
    ]
  },

  molecular_vsepr: {
    image: '/diagrams/molecular_vsepr_sketch.jpg',
    title: "VSEPR Molecular Geometry, Hybridization & Dipole Polarity",
    subtitle: "Organic & Physical Chemistry Notes · Lone Pair Steric Repulsion & 3D Spatial Angles",
    paperStyle: 'quad',
    keyFormulas: [
      '\\text{Steric Number} = (\\text{# of bonded atoms}) + (\\text{# of lone pairs})',
      '\\text{Repulsion: } \\text{LP-LP} > \\text{LP-BP} > \\text{BP-BP}',
      '\\vec{\\mu}_{\\text{net}} = \\sum \\vec{\\mu}_{\\text{bond}}',
      '\\cos\\theta = -\\frac{1}{3} \\implies \\theta = 109.47^\\circ\\text{ (ideal tetrahedron)}'
    ],
    takeaways: [
      "Lone pairs exert greater repulsive force than bonding pairs, compressing tetrahedral 109.5° to 107° in NH3 and 104.5° in H2O.",
      "Symmetric geometries (linear AX2, trigonal planar AX3, tetrahedral AX4) have vector dipole cancellation: mu_net = 0.",
      "Steric number maps directly to hybridization: SN=2 -> sp, SN=3 -> sp², SN=4 -> sp³, SN=5 -> sp³d, SN=6 -> sp³d²."
    ],
    graphInsights: {
      xAxis: "Steric Number & Lone Pair Count (AX_n E_m)",
      yAxis: "Inter-bond Angle θ (degrees °)",
      curveBehavior: "Discrete geometric quantization: 180° (linear) -> 120° (trigonal) -> 109.5° (tetrahedron) -> 90° (octahedron)",
      criticalPoint: "Water bent geometry at 104.5° with strong net dipole vector pointing toward Oxygen lone pairs"
    },
    hotspots: [
      {
        id: 'water-angle',
        x: 30,
        y: 46,
        label: 'Water 104.5° Compression',
        formula: '\\text{AX}_2\\text{E}_2 \\implies 104.5^\\circ',
        description: 'Two oxygen lone pairs squeeze the H-O-H bond angle down from the ideal 109.5° to 104.5°.'
      },
      {
        id: 'dipole-vector',
        x: 62,
        y: 35,
        label: 'Net Molecular Dipole',
        formula: '\\mu = q \\cdot d \\neq 0',
        description: 'Asymmetric charge distribution creates a polar molecule capable of hydrogen bonding.'
      },
      {
        id: 'orbital-hybrid',
        x: 50,
        y: 78,
        label: 'Hybridization Steric Model',
        formula: 'sp^3 \\implies 4\\text{ equivalent lobes}',
        description: 'Linear combinations of 1 s and 3 p orbitals oriented towards the vertices of a regular tetrahedron.'
      }
    ]
  },

  reaction_kinetics: {
    image: '/diagrams/reaction_kinetics_sketch.jpg',
    title: "Chemical Reaction Kinetics & Arrhenius Activation Energy",
    subtitle: "Physical Chemistry Laboratory · Reaction Coordinates, Catalysis & Integrated Rate Laws",
    paperStyle: 'quad',
    keyFormulas: [
      'k = A e^{-E_a / RT}',
      '\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A',
      '\\text{0th Order: } [A]_t = -kt + [A]_0',
      '\\text{1st Order: } \\ln[A]_t = -kt + \\ln[A]_0\\quad (t_{1/2} = \\frac{\\ln 2}{k})',
      '\\text{2nd Order: } \\frac{1}{[A]_t} = kt + \\frac{1}{[A]_0}'
    ],
    takeaways: [
      "A catalyst accelerates a reaction by providing an alternate mechanism with a lower activation energy Ea; delta H remains unchanged.",
      "Plotting ln[A] vs t yields a straight line exclusively for first-order kinetics, where half-life is independent of concentration.",
      "Arrhenius plot slope = -Ea / R, allowing experimental determination of activation energy barriers."
    ],
    graphInsights: {
      xAxis: "Reaction Coordinate (Reactants -> Transition State -> Products)",
      yAxis: "Potential Energy E (kJ/mol)",
      curveBehavior: "Endothermic or exothermic barrier curve; uncatalyzed high hump vs catalyzed dual-trough lowered peak",
      criticalPoint: "Transition State (activated complex ‡) at energy maximum where bonds are simultaneously breaking/forming"
    },
    hotspots: [
      {
        id: 'act-barrier',
        x: 48,
        y: 22,
        label: 'Transition State ‡ & Ea',
        formula: 'E_a = E_{\\text{transition}} - E_{\\text{reactants}}',
        description: 'Minimum kinetic collision energy required to rearrange bonds into the activated intermediate state.'
      },
      {
        id: 'catalyst-path',
        x: 52,
        y: 38,
        label: 'Catalyzed Pathway',
        formula: 'E_{a,\\text{cat}} < E_a',
        description: 'Catalyst lowers activation barrier without affecting delta G or thermodynamic equilibrium position.'
      },
      {
        id: 'rate-law-plot',
        x: 78,
        y: 70,
        label: 'Linear Diagnostic Plot',
        formula: '\\text{Slope} = -E_a / R',
        description: 'Arrhenius linearization enables precise determination of molecular collision frequency and activation threshold.'
      }
    ]
  },

  electrochem_galvanic: {
    image: '/diagrams/galvanic_cell_sketch.jpg',
    title: "Galvanic Electrochemical Cell & Redox Potentials",
    subtitle: "Electrochemistry Laboratory · Daniell Cell, Electron Flow & Nernst Thermodynamic Voltage",
    paperStyle: 'quad',
    keyFormulas: [
      'E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = +1.10\\text{ V}',
      '\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}',
      'E = E^\\circ - \\frac{RT}{nF}\\ln Q = E^\\circ - \\frac{0.0592}{n}\\log_{10} Q',
      '\\text{Anode: Oxidation (AN OX)}, \\quad \\text{Cathode: Reduction (RED CAT)}'
    ],
    takeaways: [
      "Spontaneous electrochemical redox occurs when E°_cell > 0, producing negative Gibbs free energy ΔG° < 0.",
      "Electrons travel spontaneously through external circuit from anode (Zn oxidation) to cathode (Cu reduction).",
      "The salt bridge (KNO3) maintains electroneutrality: anions NO3⁻ migrate to anode, cations K⁺ migrate to cathode."
    ],
    graphInsights: {
      xAxis: "Reaction Quotient Q = [Zn²⁺]/[Cu²⁺] (logarithmic scale)",
      yAxis: "Cell Potential E_cell (Volts, V)",
      curveBehavior: "Linear decay governed by Nernst equation: E = 1.10 V - (0.0296) log Q until E reaches 0.00 V at equilibrium",
      criticalPoint: "Standard state Q = 1 at E° = +1.10 V; Dead battery when Q = K_eq where E_cell = 0.00 V"
    },
    hotspots: [
      {
        id: 'anode-half',
        x: 25,
        y: 45,
        label: 'Zinc Anode (Oxidation)',
        formula: '\\text{Zn}(s) \\to \\text{Zn}^{2+}(aq) + 2e^-',
        description: 'Electrons leave Zn strip; electrode mass decreases as Zn dissolves into aqueous solution.'
      },
      {
        id: 'salt-bridge',
        x: 50,
        y: 35,
        label: 'Salt Bridge (KNO3)',
        formula: '\\text{Charge Neutrality}',
        description: 'Prevents charge buildup: NO3⁻ flows to Zn half-cell, K⁺ flows to Cu half-cell.'
      },
      {
        id: 'voltmeter-reading',
        x: 50,
        y: 15,
        label: 'Standard EMF Voltmeter',
        formula: 'E^\\circ = +0.34 - (-0.76) = +1.10\\text{ V}',
        description: 'Standard electromotive force under 1.0 M aqueous concentrations at 298.15 K.'
      },
      {
        id: 'cathode-half',
        x: 75,
        y: 45,
        label: 'Copper Cathode (Reduction)',
        formula: '\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s)',
        description: 'Electrons arrive from wire; Cu²⁺ ions deposit onto copper electrode causing mass increase.'
      }
    ]
  },

  universal_physics: {
    title: "Physics Problem Solving & Scientific Principles",
    subtitle: "Master Study Notebook · Dimensional Analysis & Principles",
    paperStyle: 'graph',
    keyFormulas: [
      '\\text{Physical Law} \\implies \\text{Equilibrium or Conservation}',
      '\\Sigma \\vec{F} = m\\vec{a}',
      'E_{\\text{initial}} + W_{\\text{ext}} = E_{\\text{final}}',
      '[\\text{LHS Units}] = [\\text{RHS Units}]'
    ],
    takeaways: [
      "Always sketch a clear diagram with labeled coordinates and known parameters before calculating.",
      "Check dimensional consistency on both sides of every equation to catch algebraic slips early.",
      "Examine extreme limits (e.g. angle -> 0, mass -> infinity) to verify physical plausibility."
    ],
    graphInsights: {
      xAxis: "Independent Variable X",
      yAxis: "Dependent System State Y",
      curveBehavior: "Functional relationship dictated by governing conservation laws",
      criticalPoint: "Equilibrium points where system derivatives vanish"
    },
    hotspots: []
  }
}

interface HandDrawnSketchProps {
  topic: DiagramTopic
  questionText?: string
  explanation?: string
  options?: string[]
  answer?: number
  onSwitchToSimulation?: () => void
}

export function HandDrawnSketch({
  topic,
  questionText,
  explanation,
  options,
  answer,
  onSwitchToSimulation
}: HandDrawnSketchProps) {
  const meta = SKETCH_CATALOG[topic] ?? SKETCH_CATALOG.universal_physics
  const [zoomLevel, setZoomLevel] = useState(1)
  const [activePin, setActivePin] = useState<HotspotPin | null>(
    meta.hotspots.length > 0 ? meta.hotspots[0] : null
  )
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [showFormulas, setShowFormulas] = useState(true)

  // Reset zoom on topic change — React's adjust-state-during-render pattern
  // (setState during render re-renders immediately without committing).
  const [prevTopic, setPrevTopic] = useState(topic)
  if (prevTopic !== topic) {
    setPrevTopic(topic)
    setZoomLevel(1)
    setActivePin(meta.hotspots.length > 0 ? meta.hotspots[0] : null)
  }

  // Escape key closes lightbox
  useEffect(() => {
    if (!isLightboxOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isLightboxOpen])

  return (
    <div className="flex flex-col gap-4 font-sans">
      {/* Top Banner: Sketch sheet title & student metadata */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-amber-600/30 bg-amber-500/10 dark:bg-amber-950/20 px-3.5 py-2">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-500/20 text-amber-500 dark:text-amber-400 border border-amber-500/30">
            <BookOpen className="h-4 w-4" />
          </span>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-wide text-foreground">
              {meta.title}
            </h4>
            <p className="text-[11px] text-muted-foreground font-mono">
              {meta.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          {meta.image && (
            <>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(0.8, Math.min(2.0, z - 0.2)))}
                className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel(1)}
                className="px-1.5 py-0.5 rounded text-[10px] font-mono hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                title="Reset Zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(0.8, Math.min(2.0, z + 0.2)))}
                className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="flex items-center gap-1 px-2 py-1 rounded bg-background/80 hover:bg-background border border-border text-[11px] font-medium transition-colors ml-1"
                title="Full-resolution Lightbox"
              >
                <Maximize2 className="h-3 w-3 text-amber-400" />
                <span>Fullscreen</span>
              </button>
            </>
          )}

          {onSwitchToSimulation && (
            <button
              type="button"
              onClick={onSwitchToSimulation}
              className="flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium transition-colors ml-2"
              title="Switch to Animated Simulation"
            >
              <Sparkles className="h-3 w-3" />
              <span>Animated Mode</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Sketch Canvas & Notebook Viewer */}
      <div className="relative overflow-hidden rounded-xl border border-book-rule bg-card shadow-md">
        {meta.image ? (
          <div className="relative w-full overflow-hidden bg-zinc-950 flex items-center justify-center min-h-[380px] max-h-[580px] select-none group">
            {/* Paper Texture Overlay */}
            <div
              className="relative w-full transition-transform duration-200 ease-out flex items-center justify-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={meta.image}
                alt={meta.title}
                className="w-full h-auto max-h-[580px] object-contain rounded cursor-zoom-in"
                onClick={() => setIsLightboxOpen(true)}
              />

              {/* Interactive Hotspot Pins overlay */}
              {meta.hotspots.map((pin) => {
                const isSelected = activePin?.id === pin.id
                return (
                  <button
                    key={pin.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setActivePin(isSelected ? null : pin)
                    }}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold shadow-lg transition-all z-20 ${
                      isSelected
                        ? 'bg-amber-500 text-black scale-110 ring-4 ring-amber-400/40'
                        : 'bg-black/75 backdrop-blur-md text-amber-300 border border-amber-400/60 hover:bg-amber-500 hover:text-black hover:scale-105'
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                    <span>{pin.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Hint overlay on bottom right */}
            <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10.5px] text-zinc-300 pointer-events-none flex items-center gap-1.5">
              <Info className="h-3 w-3 text-amber-400" />
              <span>Click image to expand · Click pins for notes</span>
            </div>
          </div>
        ) : (
          /* Fallback organic hand-drawn chalkboard / notebook SVG sketch */
          <div className="p-4 sm:p-6 bg-notebook-grid dark:bg-chalkboard">
            <OrganicSketchFallback topic={topic} meta={meta} />
          </div>
        )}

        {/* Active Pin Handwritten Note Callout Card */}
        <AnimatePresence>
          {activePin && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="border-t border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30 p-3.5 sm:p-4 text-foreground flex flex-col sm:flex-row items-start justify-between gap-3"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="font-semibold text-xs tracking-wide text-amber-500 dark:text-amber-400 uppercase font-mono">
                    Notebook Annotation: {activePin.label}
                  </span>
                </div>
                {activePin.formula && (
                  <div className="my-1.5 inline-block rounded bg-background/80 px-2 py-0.5 border border-border text-xs">
                    <TeX tex={activePin.formula} />
                  </div>
                )}
                <p className="text-xs sm:text-[13px] leading-relaxed text-muted-foreground mt-1 font-serif italic">
                  &ldquo;{activePin.description}&rdquo;
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActivePin(null)}
                className="text-xs text-muted-foreground hover:text-foreground p-1"
                aria-label="Dismiss note"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Handwritten Formulas & Study Takeaways Notebook Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left: Handwritten Formulas & Question Derivation Card */}
        <div className="rounded-xl border border-book-rule bg-notebook-lined p-4 shadow-sm text-foreground flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-book-rule">
              <span className="font-handwriting text-xl text-amber-600 dark:text-amber-400 font-bold tracking-wide">
                Key Formulas &amp; Laws
              </span>
              <span className="text-[10.5px] font-mono text-muted-foreground">
                STUDY SHEET
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {meta.keyFormulas.map((formula, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border/80 bg-background/90 px-3 py-1.5 text-xs shadow-xs"
                >
                  <TeX tex={formula} />
                </div>
              ))}
            </div>

            {/* Question-Specific Application */}
            {questionText && (
              <div className="mt-4 pt-3 border-t border-border/60">
                <span className="font-handwriting text-lg text-emerald-600 dark:text-emerald-400 font-bold">
                  Problem Context:
                </span>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-3 font-serif italic">
                  <RichText text={questionText} />
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-border/60 text-[11px] text-muted-foreground font-mono flex items-center justify-between">
            <span>Verified in lab notebook</span>
            <span className="text-emerald-500 font-semibold flex items-center gap-1">
              <CheckCircle className="h-3 w-3" /> Q.E.D.
            </span>
          </div>
        </div>

        {/* Right: Graph Insights & Mathematical Takeaways Card */}
        <div className="rounded-xl border border-book-rule bg-notebook-grid p-4 shadow-sm text-foreground flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-book-rule">
              <span className="font-handwriting text-xl text-primary font-bold tracking-wide">
                Graph &amp; Scientific Takeaways
              </span>
              <span className="text-[10.5px] font-mono text-muted-foreground">
                OBSERVATIONS
              </span>
            </div>

            {/* Graph Axes breakdown */}
            <div className="mt-3 rounded-lg border border-border/80 bg-background/80 p-3 text-xs space-y-1.5 font-sans">
              <div className="flex justify-between">
                <span className="text-muted-foreground font-medium">Abscissa (X-Axis):</span>
                <span className="font-mono text-foreground">{meta.graphInsights.xAxis}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground font-medium">Ordinate (Y-Axis):</span>
                <span className="font-mono text-foreground">{meta.graphInsights.yAxis}</span>
              </div>
              <div className="pt-1 border-t border-border/60 text-[11.5px] text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Curve behavior:</strong> {meta.graphInsights.curveBehavior}
              </div>
            </div>

            {/* Core Takeaways */}
            <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground list-disc list-inside font-serif">
              {meta.takeaways.map((note, i) => (
                <li key={i} className="leading-relaxed">
                  <span className="text-foreground">{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-border/60 text-[11px] text-muted-foreground font-mono flex items-center gap-1.5">
            <Info className="h-3 w-3 text-amber-500" />
            <span>Critical limit: {meta.graphInsights.criticalPoint}</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && meta.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[95vh] max-w-[95vw] sm:max-w-6xl w-full flex flex-col rounded-xl bg-zinc-950 border border-white/20 shadow-2xl overflow-hidden p-4 sm:p-6 text-foreground"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide">
                    {meta.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">{meta.subtitle}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="rounded-lg p-2 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close lightbox"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="my-auto py-4 overflow-auto max-h-[75vh] flex items-center justify-center">
                <img
                  src={meta.image}
                  alt={meta.title}
                  className="max-h-[70vh] w-auto max-w-full rounded shadow-xl"
                />
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
                <span>Hand-drawn authentic scientific study notes</span>
                <span className="font-mono text-[11px] text-amber-400">Press ESC or click outside to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * Organic chalkboard & notebook SVG fallback for topics without a scanned photo.
 * Renders hand-sketched lines, chalkboard grid, formulas, and graphs with organic feel.
 */
function OrganicSketchFallback({
  topic,
  meta
}: {
  topic: DiagramTopic
  meta: SketchMetadata
}) {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-4">
      <svg
        viewBox="0 0 600 320"
        className="w-full max-w-[650px] h-auto text-foreground drop-shadow-sm select-none"
      >
        <defs>
          {/* Subtle wobbly sketch filter */}
          <filter id="hand-wobble">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2.2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {/* Notebook grid lines or chalkboard marks */}
        <g opacity="0.15" stroke="currentColor" strokeWidth="0.8">
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={`h-${i}`} x1="30" y1={30 + i * 20} x2="570" y2={30 + i * 20} />
          ))}
          {Array.from({ length: 27 }).map((_, j) => (
            <line key={`v-${j}`} x1={30 + j * 20} y1="30" x2={30 + j * 20} y2={310} />
          ))}
        </g>

        {/* Hand-drawn sketch border */}
        <rect
          x="28"
          y="28"
          width="544"
          height="264"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          filter="url(#hand-wobble)"
          opacity="0.6"
        />

        {/* Topic-specific hand-drawn graph/diagram */}
        {topic === 'thermodynamics_pv' ? (
          <g filter="url(#hand-wobble)">
            {/* P-V Axes */}
            <line x1="80" y1="260" x2="520" y2="260" stroke="currentColor" strokeWidth="2.5" />
            <polygon points="522,260 514,256 514,264" fill="currentColor" />
            <text x="530" y="264" fontSize="14" fill="currentColor" className="font-handwriting">
              Volume V
            </text>

            <line x1="100" y1="280" x2="100" y2="50" stroke="currentColor" strokeWidth="2.5" />
            <polygon points="100,48 96,56 104,56" fill="currentColor" />
            <text x="75" y="45" fontSize="14" fill="currentColor" className="font-handwriting">
              Pressure P
            </text>

            {/* Carnot Cycle loop */}
            <path
              d="M 160 110 Q 240 120 320 150 Q 380 180 400 230 Q 320 238 230 220 Q 180 170 160 110 Z"
              fill="rgba(16, 185, 129, 0.15)"
              stroke="#10b981"
              strokeWidth="2.5"
            />
            {/* Direction arrows */}
            <circle cx="160" cy="110" r="4" fill="#f59e0b" />
            <text x="145" y="105" fontSize="13" fill="#f59e0b" className="font-handwriting font-bold">
              1 (P1, V1, T_H)
            </text>
            <circle cx="320" cy="150" r="4" fill="#f59e0b" />
            <text x="330" y="145" fontSize="13" fill="#f59e0b" className="font-handwriting font-bold">
              2
            </text>
            <circle cx="400" cy="230" r="4" fill="#f59e0b" />
            <text x="410" y="235" fontSize="13" fill="#f59e0b" className="font-handwriting font-bold">
              3 (T_C)
            </text>
            <circle cx="230" cy="220" r="4" fill="#f59e0b" />
            <text x="215" y="238" fontSize="13" fill="#f59e0b" className="font-handwriting font-bold">
              4
            </text>

            {/* Shaded Work Label */}
            <text x="235" y="180" fontSize="15" fill="#10b981" className="font-handwriting font-bold">
              W_net = ∮ P dV
            </text>
            <text x="210" y="200" fontSize="12" fill="currentColor" className="font-handwriting" opacity="0.8">
              (Enclosed Loop Work)
            </text>
          </g>
        ) : topic === 'calculus_tangent' ? (
          <g filter="url(#hand-wobble)">
            {/* Coordinate axes */}
            <line x1="80" y1="260" x2="520" y2="260" stroke="currentColor" strokeWidth="2.5" />
            <text x="530" y="264" fontSize="14" fill="currentColor" className="font-handwriting">
              x
            </text>
            <line x1="100" y1="280" x2="100" y2="50" stroke="currentColor" strokeWidth="2.5" />
            <text x="90" y="45" fontSize="14" fill="currentColor" className="font-handwriting">
              y = f(x)
            </text>

            {/* Non-linear curve */}
            <path
              d="M 120 250 Q 260 230 340 140 T 480 70"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2.8"
            />

            {/* Tangent line */}
            <line x1="190" y1="250" x2="450" y2="70" stroke="#f59e0b" strokeWidth="2.2" strokeDasharray="6 3" />
            <circle cx="320" cy="160" r="5" fill="#f59e0b" />
            <text x="330" y="165" fontSize="13" fill="#f59e0b" className="font-handwriting font-bold">
              (x_0, f(x_0))
            </text>

            {/* Secant chord */}
            <line x1="240" y1="210" x2="400" y2="110" stroke="#10b981" strokeWidth="1.8" opacity="0.7" />
            <circle cx="400" cy="110" r="4" fill="#10b981" />
            <text x="405" y="105" fontSize="12" fill="#10b981" className="font-handwriting">
              (x_0+h, f(x_0+h))
            </text>

            <text x="180" y="90" fontSize="14" fill="currentColor" className="font-handwriting font-bold">
              m_tan = lim(h→0) [f(x+h) - f(x)] / h
            </text>
          </g>
        ) : topic === 'titration_equilibrium' ? (
          <g filter="url(#hand-wobble)">
            {/* pH vs Volume Axes */}
            <line x1="80" y1="260" x2="520" y2="260" stroke="currentColor" strokeWidth="2.5" />
            <text x="430" y="278" fontSize="13" fill="currentColor" className="font-handwriting">
              Volume NaOH (mL) →
            </text>
            <line x1="100" y1="280" x2="100" y2="50" stroke="currentColor" strokeWidth="2.5" />
            <text x="65" y="48" fontSize="13" fill="currentColor" className="font-handwriting font-bold">
              pH ↑
            </text>

            {/* pH Tick Marks */}
            <text x="75" y="264" fontSize="11" fill="currentColor">0</text>
            <text x="75" y="195" fontSize="11" fill="currentColor">4.76</text>
            <text x="75" y="145" fontSize="11" fill="currentColor">7.0</text>
            <text x="75" y="115" fontSize="11" fill="currentColor">8.72</text>
            <text x="75" y="65" fontSize="11" fill="currentColor">14</text>

            {/* Buffer zone highlight */}
            <rect x="150" y="180" width="120" height="30" fill="rgba(20, 184, 166, 0.15)" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 3" />
            <text x="160" y="172" fontSize="12" fill="#14b8a6" className="font-handwriting font-bold">
              Buffer Plateau: pH = pKa
            </text>

            {/* Sigmoidal titration curve */}
            <path
              d="M 100 240 C 130 220 200 195 240 195 C 280 195 285 150 290 100 C 295 85 360 80 500 78"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="2.8"
            />

            {/* Half Equivalence Point */}
            <circle cx="200" cy="195" r="5" fill="#f59e0b" />
            <text x="175" y="215" fontSize="12" fill="#f59e0b" className="font-handwriting font-bold">
              1/2 V_eq (12.5 mL)
            </text>

            {/* Equivalence Point Inflection */}
            <circle cx="288" cy="115" r="6" fill="#f43f5e" />
            <line x1="288" y1="115" x2="288" y2="260" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="296" y="112" fontSize="13" fill="#f43f5e" className="font-handwriting font-bold">
              Equivalence V_eq = 25 mL (pH = 8.72)
            </text>

            {/* Phenolphthalein indicator band */}
            <rect x="100" y="105" width="420" height="20" fill="rgba(244, 63, 94, 0.1)" stroke="none" />
            <text x="350" y="120" fontSize="11" fill="#f43f5e" className="font-handwriting">
              Phenolphthalein turns pink (pH 8.2 - 10)
            </text>
          </g>
        ) : topic === 'periodic_trends' ? (
          <g filter="url(#hand-wobble)">
            {/* Coordinate axes */}
            <line x1="80" y1="260" x2="520" y2="260" stroke="currentColor" strokeWidth="2.5" />
            <text x="430" y="278" fontSize="13" fill="currentColor" className="font-handwriting">
              Atomic Number Z (1 → 36)
            </text>
            <line x1="100" y1="280" x2="100" y2="50" stroke="currentColor" strokeWidth="2.5" />
            <text x="60" y="48" fontSize="13" fill="currentColor" className="font-handwriting font-bold">
              IE_1 (kJ/mol) ↑
            </text>

            {/* Sawtooth IE periodic curve */}
            <path
              d="M 110 180 L 130 65 L 140 235 L 170 190 L 180 205 L 210 160 L 220 175 L 250 95 L 260 245 L 290 200 L 300 215 L 330 170 L 340 185 L 370 125 L 380 250 L 410 230 L 460 210 L 500 145"
              fill="none"
              stroke="#6366f1"
              strokeWidth="2.5"
            />

            {/* Noble gas peaks */}
            <circle cx="130" cy="65" r="5" fill="#a855f7" />
            <text x="120" y="55" fontSize="13" fill="#a855f7" className="font-handwriting font-bold">He (2372)</text>
            <circle cx="250" cy="95" r="5" fill="#a855f7" />
            <text x="242" y="85" fontSize="13" fill="#a855f7" className="font-handwriting font-bold">Ne (2080)</text>
            <circle cx="370" cy="125" r="5" fill="#a855f7" />
            <text x="362" y="115" fontSize="13" fill="#a855f7" className="font-handwriting font-bold">Ar (1520)</text>

            {/* Alkali metal troughs */}
            <circle cx="140" cy="235" r="4" fill="#f59e0b" />
            <text x="135" y="250" fontSize="12" fill="#f59e0b" className="font-handwriting">Li</text>
            <circle cx="260" cy="245" r="4" fill="#f59e0b" />
            <text x="255" y="260" fontSize="12" fill="#f59e0b" className="font-handwriting">Na</text>

            {/* Subshell dip note */}
            <text x="175" y="150" fontSize="12" fill="#ec4899" className="font-handwriting font-bold">
              N &gt; O dip (2p³ exchange stability)
            </text>
            <line x1="210" y1="160" x2="220" y2="175" stroke="#ec4899" strokeWidth="1.5" />
          </g>
        ) : topic === 'molecular_vsepr' ? (
          <g filter="url(#hand-wobble)">
            {/* Title / Hybridization banner */}
            <text x="120" y="65" fontSize="14" fill="currentColor" className="font-handwriting font-bold">
              VSEPR Repulsion: Lone Pair - Lone Pair &gt; Lone Pair - Bond Pair &gt; BP - BP
            </text>

            {/* Methane CH4 tetrahedral wedge/dash */}
            <g transform="translate(140, 150)">
              <circle cx="0" cy="0" r="16" fill="#38bdf8" opacity="0.3" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="5" fontSize="14" fill="#38bdf8" textAnchor="middle" fontWeight="bold">C</text>
              <line x1="0" y1="-16" x2="0" y2="-55" stroke="currentColor" strokeWidth="2.5" />
              <text x="0" y="-60" fontSize="13" fill="currentColor" textAnchor="middle">H</text>
              <line x1="-16" y1="5" x2="-55" y2="25" stroke="currentColor" strokeWidth="2.5" />
              <text x="-65" y="30" fontSize="13" fill="currentColor">H</text>
              {/* Wedge */}
              <polygon points="5,14 40,48 25,52" fill="#10b981" />
              <text x="42" y="60" fontSize="13" fill="#10b981">H</text>
              {/* Dash */}
              <line x1="12" y1="5" x2="35" y2="-10" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
              <text x="42" y="-12" fontSize="13" fill="currentColor">H</text>
              <text x="-35" y="80" fontSize="13" fill="currentColor" className="font-handwriting font-bold">
                Methane: ideal 109.5°
              </text>
            </g>

            {/* Water H2O bent geometry with 2 lone pairs */}
            <g transform="translate(380, 150)">
              <circle cx="0" cy="0" r="18" fill="#f43f5e" opacity="0.3" stroke="#f43f5e" strokeWidth="2" />
              <text x="0" y="5" fontSize="14" fill="#f43f5e" textAnchor="middle" fontWeight="bold">O</text>
              {/* Lone pairs */}
              <path d="M -5 -16 C -20 -40 -5 -50 0 -20" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="1.5" />
              <circle cx="-10" cy="-35" r="2" fill="#f59e0b" />
              <circle cx="-4" cy="-38" r="2" fill="#f59e0b" />
              <path d="M 5 -16 C 20 -40 5 -50 0 -20" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="1.5" />
              <circle cx="4" cy="-38" r="2" fill="#f59e0b" />
              <circle cx="10" cy="-35" r="2" fill="#f59e0b" />
              {/* Bonds to H */}
              <line x1="-14" y1="10" x2="-45" y2="45" stroke="currentColor" strokeWidth="2.5" />
              <text x="-55" y="55" fontSize="13" fill="currentColor">H</text>
              <line x1="14" y1="10" x2="45" y2="45" stroke="currentColor" strokeWidth="2.5" />
              <text x="50" y="55" fontSize="13" fill="currentColor">H</text>
              {/* Compressed angle */}
              <path d="M -20 20 Q 0 32 20 20" fill="none" stroke="#e11d48" strokeWidth="1.5" />
              <text x="0" y="32" fontSize="12" fill="#e11d48" textAnchor="middle" fontWeight="bold">104.5°</text>
              <text x="-40" y="80" fontSize="13" fill="#e11d48" className="font-handwriting font-bold">
                Water: compressed to 104.5°
              </text>
            </g>
          </g>
        ) : topic === 'reaction_kinetics' ? (
          <g filter="url(#hand-wobble)">
            {/* Coordinate axes */}
            <line x1="80" y1="260" x2="520" y2="260" stroke="currentColor" strokeWidth="2.5" />
            <text x="430" y="278" fontSize="13" fill="currentColor" className="font-handwriting">
              Reaction Coordinate →
            </text>
            <line x1="100" y1="280" x2="100" y2="50" stroke="currentColor" strokeWidth="2.5" />
            <text x="60" y="48" fontSize="13" fill="currentColor" className="font-handwriting font-bold">
              Energy E ↑
            </text>

            {/* Reactant and Product plateaus */}
            <line x1="100" y1="180" x2="170" y2="180" stroke="#3b82f6" strokeWidth="2.5" />
            <text x="110" y="172" fontSize="13" fill="#3b82f6" className="font-handwriting font-bold">Reactants (A + B)</text>
            <line x1="420" y1="220" x2="500" y2="220" stroke="#10b981" strokeWidth="2.5" />
            <text x="430" y="212" fontSize="13" fill="#10b981" className="font-handwriting font-bold">Products (C + D)</text>

            {/* Uncatalyzed curve */}
            <path
              d="M 170 180 C 220 180 250 80 300 80 C 350 80 370 220 420 220"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2.8"
            />
            <circle cx="300" cy="80" r="5" fill="#ef4444" />
            <text x="270" y="70" fontSize="13" fill="#ef4444" className="font-handwriting font-bold">Transition State ‡</text>

            {/* Catalyzed curve */}
            <path
              d="M 170 180 C 220 180 250 130 300 130 C 350 130 370 220 420 220"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeDasharray="6 3"
            />
            <circle cx="300" cy="130" r="4" fill="#10b981" />
            <text x="310" y="135" fontSize="12" fill="#10b981" className="font-handwriting font-bold">Catalyzed (lower Ea)</text>

            {/* Ea double-headed arrow */}
            <line x1="240" y1="180" x2="240" y2="80" stroke="#f59e0b" strokeWidth="1.8" />
            <text x="215" y="130" fontSize="13" fill="#f59e0b" className="font-handwriting font-bold">E_a (uncat)</text>

            {/* Delta H */}
            <line x1="470" y1="180" x2="470" y2="220" stroke="#6366f1" strokeWidth="1.8" />
            <text x="475" y="202" fontSize="12" fill="#6366f1" className="font-handwriting font-bold">ΔH &lt; 0 (Exo)</text>
          </g>
        ) : topic === 'electrochem_galvanic' ? (
          <g filter="url(#hand-wobble)">
            {/* Title / EMF banner */}
            <text x="140" y="55" fontSize="15" fill="#06b6d4" className="font-handwriting font-bold">
              Daniell Galvanic Cell: E°_cell = +0.34V - (-0.76V) = +1.10 V
            </text>

            {/* Left beaker: Zn anode */}
            <rect x="110" y="130" width="100" height="110" rx="4" fill="rgba(6, 182, 212, 0.08)" stroke="currentColor" strokeWidth="2" />
            <rect x="145" y="90" width="20" height="90" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5" />
            <text x="120" y="255" fontSize="12" fill="currentColor" className="font-handwriting font-bold">
              Zn(s) → Zn²⁺ + 2e⁻
            </text>
            <text x="135" y="120" fontSize="11" fill="#f59e0b">Anode (-)</text>

            {/* Right beaker: Cu cathode */}
            <rect x="370" y="130" width="100" height="110" rx="4" fill="rgba(59, 130, 246, 0.12)" stroke="currentColor" strokeWidth="2" />
            <rect x="405" y="90" width="20" height="90" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
            <text x="380" y="255" fontSize="12" fill="currentColor" className="font-handwriting font-bold">
              Cu²⁺ + 2e⁻ → Cu(s)
            </text>
            <text x="395" y="120" fontSize="11" fill="#10b981">Cathode (+)</text>

            {/* Salt bridge */}
            <path d="M 180 160 L 180 110 Q 290 85 400 110 L 400 160" fill="none" stroke="#a855f7" strokeWidth="12" strokeLinecap="round" opacity="0.3" />
            <path d="M 180 160 L 180 110 Q 290 85 400 110 L 400 160" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
            <text x="255" y="125" fontSize="12" fill="#a855f7" className="font-handwriting font-bold">Salt Bridge (KNO3)</text>

            {/* External circuit & voltmeter */}
            <line x1="155" y1="90" x2="155" y2="70" stroke="currentColor" strokeWidth="2" />
            <line x1="155" y1="70" x2="265" y2="70" stroke="currentColor" strokeWidth="2" />
            <circle cx="290" cy="70" r="16" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
            <text x="290" y="74" fontSize="11" fill="#10b981" textAnchor="middle" fontWeight="bold">V: +1.10V</text>
            <line x1="315" y1="70" x2="415" y2="70" stroke="currentColor" strokeWidth="2" />
            <line x1="415" y1="70" x2="415" y2="90" stroke="currentColor" strokeWidth="2" />

            {/* Electron flow arrow */}
            <text x="210" y="65" fontSize="12" fill="#38bdf8" className="font-handwriting font-bold">
              e⁻ flow →
            </text>
          </g>
        ) : (
          <g filter="url(#hand-wobble)">
            {/* General Scientific study sketch */}
            <line x1="80" y1="260" x2="520" y2="260" stroke="currentColor" strokeWidth="2" />
            <line x1="100" y1="270" x2="100" y2="60" stroke="currentColor" strokeWidth="2" />
            <path
              d="M 120 230 Q 220 80 340 160 T 500 90"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
            />
            <circle cx="340" cy="160" r="5" fill="#f59e0b" />
            <text x="350" y="155" fontSize="14" fill="#f59e0b" className="font-handwriting font-bold">
              Equilibrium State
            </text>
            <text x="140" y="80" fontSize="15" fill="currentColor" className="font-handwriting font-bold">
              Conservation of Energy &amp; Momentum
            </text>
          </g>
        )}

        {/* Handwritten teacher note at bottom right */}
        <text
          x="380"
          y="285"
          fontSize="14"
          fill="#10b981"
          className="font-handwriting font-bold"
        >
          ✓ Lab Notebook: Consistent with Theory
        </text>
      </svg>
    </div>
  )
}

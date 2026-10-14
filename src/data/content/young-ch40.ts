import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 40: QM I Wave Functions.

export const youngCh40Content: SectionContent[] = [
  {
    sectionId: "young-ch40-s1",
    readingTime: 8,
    intro: "The wave function $\\Psi(x,t)$ replaces trajectories: $|\\Psi|^{2}$ is probability density, and stationary states obey the time-independent Schrodinger equation. Normalization, continuity, and boundary conditions select the allowed states. This is the operating system for the rest of quantum physics.",
    objectives: [
      "Interpret $|\\Psi|^{2}$ with normalization $\\int|\\Psi|^{2}dx = 1$",
      "Write the 1D time-independent equation $-\\hbar^{2}\\psi^{\\prime\\prime}/2m + U\\psi = E\\psi$",
      "Apply boundary and continuity rules for $\\psi$ and $\\psi^{\\prime}$"
    ],
    concepts: [
      {
        term: "Born interpretation",
        kind: "law",
        statement: "**$|\\Psi(x,t)|^{2}dx$ is the probability** of finding the particle in $dx$; total probability is $1$.",
        detail: "Expectations average with this weight: $\\langle x \\rangle = \\int x|\\psi|^{2}dx$."
      },
      {
        term: "Time-independent Schrodinger",
        kind: "theorem",
        statement: "Stationary $\\psi(x)$ with $\\Psi = \\psi e^{-iEt/\\hbar}$ obeys **$-\\hbar^{2}\\psi^{\\prime\\prime}/2m + U(x)\\psi = E\\psi$**.",
        detail: "Kinetic operator $-(\\hbar^{2}/2m)d^{2}/dx^{2}$ plus potential equals energy eigenvalue."
      },
      {
        term: "Stationary states",
        kind: "definition",
        statement: "**$|\\Psi|^{2} = |\\psi|^{2}$ is static** though $\\Psi$ rotates in complex phase at $E/\\hbar$.",
        detail: "Superpositions beat at $\\Delta E/\\hbar$, producing real motion."
      },
      {
        term: "Continuity rules",
        kind: "method",
        statement: "**$\\psi$ and $\\psi^{\\prime}$ stay continuous** across finite jumps; $\\psi \\to 0$ at infinite walls.",
        detail: "Kinks would mean infinite kinetic energy; only infinite $U$ tolerates a kink in slope."
      },
      {
        term: "Operators and eigenvalues",
        kind: "notation",
        statement: "**Observables are operators** ($p \\to -i\\hbar\\,d/dx$); definite values occur only in eigenstates.",
        detail: "Measurement returns eigenvalues with $|c_{n}|^{2}$ probabilities."
      }
    ],
    figures: [
      {
        caption: "Born rule: $|\\psi|^{2}$ is probability density; area under it totals $1$",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Born rule: |psi|^2 is probability density; area under it totals 1"><rect x="0" y="0" width="400" height="200" fill="none"/><line x1="40" y1="160" x2="370" y2="160" stroke="currentColor" stroke-width="1.5"/><path d="M 60 160 C 120 160, 140 60, 200 60 C 260 60, 280 160, 340 160" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M 60 160 C 120 160, 140 60, 200 60 C 260 60, 280 160, 340 160 L 340 160 L 60 160 Z" fill="currentColor" opacity="0.12"/><text x="190" y="50" font-size="13" fill="currentColor">|ψ|²</text><text x="150" y="182" font-size="12" fill="currentColor">area = 1 (normalized)</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Normalizing a triangle",
        problem: "$\\psi = Ax$ on $[0,1]$ nm, zero elsewhere. Find $A$ (SI).",
        steps: [
          { label: "Step 1: Integral", text: "$1 = A^{2}\\int_{0}^{L}x^{2}dx = A^{2}L^{3}/3$ with $L = 10^{-9}$ m." },
          { label: "Step 2: Solve", text: "$A = \\sqrt{3/L^{3}} = \\sqrt{3 \\times 10^{27}} = 1.73 \\times 10^{13}$ per m$^{3/2}$." },
          { label: "Step 3: Probability", text: "$P(0, L/2) = \\int_{0}^{L/2} = (1/8)$: eighth of detections in the left half." }
        ],
        result: "$A = 1.73 \\times 10^{13}$ m$^{-3/2}$; left-half probability $1/8$."
      },
      {
        title: "Expectation in a half-well",
        problem: "For the above state find $\\langle x \\rangle$.",
        steps: [
          { label: "Step 1: Weight", text: "$\\langle x \\rangle = A^{2}\\int_{0}^{L}x^{3}dx = A^{2}L^{4}/4$." },
          { label: "Step 2: Insert A", text: "$= (3/L^{3})(L^{4}/4) = 3L/4 = 0.750$ nm." },
          { label: "Step 3: Sense", text: "Density $\\propto x^{2}$ leans right, so mean exceeds $L/2$." }
        ],
        result: "$\\langle x \\rangle = 0.750$ nm."
      }
    ],
    keyTakeaways: [
      "$|\\Psi|^{2}$ is probability; normalize to $1$.",
      "Time-independent Schrodinger is the energy eigenvalue equation.",
      "$\\psi$ stays continuous; slope kinks only at infinite walls."
    ],
    quiz: [
      {
        q: "Integral of |psi|-squared over all space equals:",
        options: ["Zero", "One", "Energy", "hbar"],
        answer: 1,
        explanation: "Total probability of finding the particle somewhere is unity."
      },
      {
        q: "Stationary-state density is:",
        options: ["Oscillating at E/hbar", "Static in time", "Zero", "Traveling"],
        answer: 1,
        explanation: "Phase rotation cancels in the modulus."
      },
      {
        q: "Across a finite potential jump, psi and psi-prime are:",
        options: ["Both discontinuous", "Both continuous", "Zero", "Infinite"],
        answer: 1,
        explanation: "Finite jumps keep kinetic energy finite, forcing continuity."
      }
    ]
  },
  {
    sectionId: "young-ch40-s2",
    readingTime: 7,
    intro: "Infinite walls at $0$ and $L$ pin $\\psi$ to sine standing waves with $\\lambda_{n} = 2L/n$ and $E_{n} = n^{2}h^{2}/8mL^{2}$. Nodes multiply with $n$ while antinodes mark likely spots. Dots, wires, and conjugated dyes are boxed particles with tunable colors.",
    objectives: [
      "Derive $E_{n} = n^{2}h^{2}/8mL^{2}$ and $\\psi_{n} = \\sqrt{2/L}\\sin(n\\pi x/L)$",
      "Sketch densities and locate nodes for $n = 1,2,3$",
      "Estimate nanostructure energies and photon colors"
    ],
    concepts: [
      {
        term: "Quantization from walls",
        kind: "theorem",
        statement: "**$k_{n} = n\\pi/L$**, **$E_{n} = \\hbar^{2}k_{n}^{2}/2m = n^{2}h^{2}/8mL^{2}$** from $\\psi(0) = \\psi(L) = 0$.",
        detail: "Fitting half-waves into $L$ selects $n$; $n = 0$ is the forbidden zero function."
      },
      {
        term: "Normalized states",
        kind: "theorem",
        statement: "**$\\psi_{n} = \\sqrt{2/L}\\sin(n\\pi x/L)$** with $n-1$ interior nodes.",
        detail: "Ground state bulges center; excited states alternate sign per lobe."
      },
      {
        term: "Zero-point confinement",
        kind: "law",
        statement: "**$E_{1} = h^{2}/8mL^{2} > 0$ always**: boxing costs kinetic energy by uncertainty.",
        detail: "Electron in $1$ nm: $0.376$ eV; proton in $1$ fm: $20$ MeV scale."
      },
      {
        term: "Selection and spectra",
        kind: "method",
        statement: "Dipole jumps change $n$ with **$\\Delta E = E_{u}-E_{l}$ radiated**; superpositions slosh at $\\Delta E/\\hbar$.",
        detail: "Dye-chain length tunes absorption from UV to IR by $1/L^{2}$."
      },
      {
        term: "Correspondence",
        kind: "insight",
        statement: "High-$n$ densities **average to uniform classical** bouncing; rapidwiggles coarse-grain flat.",
        detail: "$n = 100$ looks classical to blurry detectors."
      }
    ],
    figures: [
      {
        caption: "Box states $n = 1,2,3$: sine waves pinned at walls with $n-1$ nodes",
        svg: '<svg viewBox="0 0 400 190" style="width:100%;height:auto" role="img" aria-label="Box states n = 1,2,3: sine waves pinned at walls with n-1 nodes"><rect x="0" y="0" width="400" height="190" fill="none"/><line x1="60" y1="30" x2="60" y2="160" stroke="currentColor" stroke-width="2"/><line x1="340" y1="30" x2="340" y2="160" stroke="currentColor" stroke-width="2"/><path d="M 60 150 C 140 150, 160 110, 200 110 C 240 110, 260 150, 340 150" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 60 100 C 120 100, 130 40, 200 40 C 270 40, 280 100, 340 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6,4"/><text x="345" y="150" font-size="12" fill="currentColor">n=1</text><text x="345" y="100" font-size="12" fill="currentColor">n=2</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Electron in 1 nm box",
        problem: "Find $E_{1}$, $E_{2}$, and the $2$-to-$1$ photon.",
        steps: [
          { label: "Step 1: Constant", text: "$h^{2}/8mL^{2} = (6.626 \\times 10^{-34})^{2}/[8(9.11 \\times 10^{-31})(10^{-9})^{2}] = 6.02 \\times 10^{-20}$ J." },
          { label: "Step 2: eV", text: "$E_{1} = 0.376$ eV; $E_{2} = 1.504$ eV." },
          { label: "Step 3: Photon", text: "$\\Delta E = 1.128$ eV: $\\lambda = 1240/1.128 = 1099$ nm infrared." }
        ],
        result: "$E_{1} = 0.376$ eV, photon $1.13$ eV at $1100$ nm."
      },
      {
        title: "Quantum dot color",
        problem: "CdSe dot $L = 3.0$ nm effective box for electron-hole pair ($m^{\\ast} \\approx 0.1m_{e}$ each). Estimate gap shift.",
        steps: [
          { label: "Step 1: Scale", text: "$E_{1} \\propto 1/mL^{2}$: $0.376 \\times 10/(9) = 0.418$ eV per carrier." },
          { label: "Step 2: Pair", text: "Sum $\\approx 0.84$ eV blue shift over bulk gap." },
          { label: "Step 3: Display", text: "Smaller dots emit bluer: the QLED size-color rule." }
        ],
        result: "$\\sim 0.8$ eV confinement blue shift."
      }
    ],
    keyTakeaways: [
      "Walls quantize to $E_{n} \\propto n^{2}/L^{2}$ sine states.",
      "Ground energy is nonzero; nodes count $n-1$.",
      "Box scaling sizes dots, wires, and dyes."
    ],
    quiz: [
      {
        q: "Particle-in-box $E_{3}$ / $E_{1}$ equals:",
        options: ["$3$", "$6$", "$9$", "$27$"],
        answer: 2,
        explanation: "Quadratic in n: $3^{2} = 9$."
      },
      {
        q: "$\\psi_{2}$ has interior nodes numbering:",
        options: ["Zero", "One", "Two", "Three"],
        answer: 1,
        explanation: "n minus 1 nodes; center node for n = 2."
      },
      {
        q: "Halving L changes $E_{1}$ by:",
        options: ["Half", "Double", "Quadruple", "No change"],
        answer: 2,
        explanation: "$1/L^{2}$ scaling: $(2)^{2} = 4$."
      }
    ]
  },
  {
    sectionId: "young-ch40-s3",
    readingTime: 6,
    intro: "Finite walls leak: wave functions tunnel exponentially into forbidden shoulders, lowering energies below the infinite-box values. At least one bound state always exists in 1D, however shallow. Quantum wells in lasers engineer these levels by layer thickness.",
    objectives: [
      "Write decaying tails $\\psi \\propto e^{-\\kappa x}$ with $\\kappa = \\sqrt{2m(U_{0}-E)}/\\hbar$",
      "Compare finite versus infinite level spacings",
      "State the 1D always-binds theorem"
    ],
    concepts: [
      {
        term: "Penetration depth",
        kind: "theorem",
        statement: "In forbidden $U_{0} > E$, **$\\psi \\propto e^{-\\kappa x}$** with **$\\kappa = \\sqrt{2m(U_{0}-E)}/\\hbar$** ($1/\\kappa$ is skin depth).",
        detail: "Electron $1$ eV below top: $1/\\kappa = 0.195$ nm, atomic scale."
      },
      {
        term: "Lowered levels",
        kind: "theorem",
        statement: "**Finite wells bind fewer, lower states** than the infinite box; effective width exceeds $L$ by tails.",
        detail: "Graphical $k$-$\\kappa$ matching replaces closed formulas."
      },
      {
        term: "Always binds in 1D",
        kind: "law",
        statement: "**Any 1D attractive well, however shallow, holds at least one bound state**.",
        detail: "3D needs threshold depth; 1D never does."
      },
      {
        term: "Number of states",
        kind: "method",
        statement: "Count bound states by **$\\approx (2L/\\pi\\hbar)\\sqrt{2mU_{0}}/2 + 1/2$** strength parameter in deep wells.",
        detail: "Diode designers tune $L$ and $U_{0}$ to isolate one lasing level."
      },
      {
        term: "Tunneling tails meet barriers",
        kind: "insight",
        statement: "These evanescent tails are **the source of tunneling current** when a second well nears (next section).",
        detail: "Overlap splits levels into bands in solids (Chapter 42)."
      }
    ],
    examples: [
      {
        title: "Tail length",
        problem: "Electron $2.0$ eV below a $U_{0}$ step. Find $1/\\kappa$.",
        steps: [
          { label: "Step 1: Kappa", text: "$\\kappa = \\sqrt{2(9.11 \\times 10^{-31})(2.0 \\times 1.602 \\times 10^{-19})}/(1.055 \\times 10^{-34}) = 7.25 \\times 10^{9}$ per m." },
          { label: "Step 2: Depth", text: "$1/\\kappa = 0.138$ nm." },
          { label: "Step 3: Probability", text: "At $0.5$ nm out, density falls $e^{-7.25} \\approx 7 \\times 10^{-4}$." }
        ],
        result: "$0.138$ nm skin depth."
      },
      {
        title: "Finite versus infinite",
        problem: "$L = 1$ nm well, $U_{0} = 5.0$ eV. Is ground below $0.376$ eV?",
        steps: [
          { label: "Step 1: Infinite value", text: "$0.376$ eV from Section 40.2." },
          { label: "Step 2: Leakage", text: "Tails widen the effective box to $\\sim 1.4$ nm, halving energy toward $0.2$ eV." },
          { label: "Step 3: Count", text: "Strength admits $2$-$3$ bound states, not infinite." }
        ],
        result: "Ground near $0.2$ eV with few bound states."
      }
    ],
    keyTakeaways: [
      "Forbidden regions host exponential tails with $1/\\kappa$ range.",
      "Finite wells lower and thin the infinite ladder.",
      "1D wells always bind at least one state."
    ],
    quiz: [
      {
        q: "kappa for deeper deficit $U_{0}$ - E:",
        options: ["Shrinks", "Grows", "Stays", "Vanishes"],
        answer: 1,
        explanation: "Square-root dependence shortens tails for higher walls."
      },
      {
        q: "Finite-well energies versus infinite box are:",
        options: ["Higher", "Lower", "Equal", "Zero"],
        answer: 1,
        explanation: "Leakage widens effective width, dropping kinetic cost."
      },
      {
        q: "A shallow 1D well binds:",
        options: ["Zero states", "At least one", "Infinite states", "Only scattering states"],
        answer: 1,
        explanation: "1D threshold theorem guarantees one bound state."
      }
    ]
  },
  {
    sectionId: "young-ch40-s4",
    readingTime: 7,
    intro: "A classically forbidden barrier still transmits: $T \\approx e^{-2\\kappa L}$ leaks particles through. Alpha decay, fusion in the Sun, and scanning tunneling microscopes are barrier leakage in action. Height times width, not either alone, sets the exponent.",
    objectives: [
      "State $T \\approx e^{-2\\kappa L}$ for thick barriers",
      "Compute alpha-decay and STM tunneling factors",
      "Explain fusion's Gamow exponent qualitatively"
    ],
    concepts: [
      {
        term: "Tunneling transmission",
        kind: "theorem",
        statement: "Thick rectangular barrier: **$T \\approx 16[E(U_{0}-E)/U_{0}^{2}]\\,e^{-2\\kappa L}$**, dominated by the exponential.",
        detail: "Doubling $L$ squares the suppression; prefactors rarely matter."
      },
      {
        term: "Alpha decay",
        kind: "law",
        statement: "Alpha particles **tunnel through Coulomb walls** ($\\sim 20$ MeV) at $4$-$9$ MeV, giving **Geiger-Nuttall log-lifetime versus $1/\\sqrt{E}$**.",
        detail: "U-238 ($4.27$ MeV) waits $10^{9}$ yr; Po-212 ($8.78$ MeV) waits microseconds."
      },
      {
        term: "STM",
        kind: "method",
        statement: "**Current $I \\propto e^{-2\\kappa L}$** with $\\kappa \\sim 10$ per nm makes $0.1$ nm height changes alter current tenfold.",
        detail: "Feedback holding $I$ maps atoms at $0.01$ nm vertical resolution."
      },
      {
        term: "Fusion Gamow factor",
        kind: "insight",
        statement: "Sun's protons tunnel at keV through MeV repulsion; **Gamow peak folds tunneling rise against thermal fall**, fixing the burning rate.",
        detail: "Chapter 43 quantifies stellar $Q$-values with this exponent."
      },
      {
        term: "Resonant tunneling",
        kind: "theorem",
        statement: "Double barriers transmit **$100$ percent at resonant quasi-bound energies** despite opaque single walls.",
        detail: "Resonant-tunneling diodes switch at terahertz on this principle."
      }
    ],
    figures: [
      {
        caption: "Tunneling: exponential tail $e^{-\\kappa x}$ crosses the barrier giving $T \\approx e^{-2\\kappa L}$",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Tunneling: exponential tail e^-kappa x crosses the barrier giving T approx e^-2kappa L"><rect x="0" y="0" width="400" height="200" fill="none"/><rect x="150" y="60" width="100" height="100" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="2"/><line x1="20" y1="120" x2="380" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="5,4"/><path d="M 20 120 C 80 120, 110 120, 150 120 M 150 120 C 180 120, 200 140, 250 140 M 250 140 C 300 140, 330 140, 380 140" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M 150 120 C 180 60, 220 60, 250 140" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4"/><text x="160" y="50" font-size="12" fill="currentColor">barrier U0</text><text x="260" y="160" font-size="12" fill="currentColor">transmitted T</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "STM sensitivity",
        problem: "Work function $4.0$ eV gives $\\kappa = 10.2$ per nm. How much does $0.100$ nm extra gap cut current?",
        steps: [
          { label: "Step 1: Exponent", text: "$2\\kappa\\Delta L = 2(10.2)(0.100) = 2.04$." },
          { label: "Step 2: Factor", text: "$e^{-2.04} = 0.130$: current drops to $13$ percent." },
          { label: "Step 3: Imaging", text: "Atomic steps $0.2$ nm modulate current $60$-fold: easy contrast." }
        ],
        result: "Current falls $7.7$-fold per angstrom."
      },
      {
        title: "Alpha order of magnitude",
        problem: "Alpha $E = 5.0$ MeV, wall $U_{0} - E \\approx 15$ MeV, $L = 20$ fm. Estimate exponent.",
        steps: [
          { label: "Step 1: Kappa", text: "$\\kappa = \\sqrt{2m_{\\alpha}(15 \\mathrm{MeV})}/\\hbar = 1.20 \\times 10^{15}$ per m." },
          { label: "Step 2: Exponent", text: "$2\\kappa L = 2(1.20 \\times 10^{15})(2.0 \\times 10^{-14}) = 48$." },
          { label: "Step 3: T", text: "$e^{-48} \\sim 10^{-21}$ per hit; $10^{21}$ hits/s gives second-scale decay." }
        ],
        result: "$T \\sim 10^{-21}$ per assault, matching radioactivity scales."
      }
    ],
    keyTakeaways: [
      "$T \\approx e^{-2\\kappa L}$ prices every tunneling process.",
      "Alpha lifetimes, STM, and fusion share one exponent.",
      "Resonances can defeat single-barrier opacity."
    ],
    quiz: [
      {
        q: "Doubling barrier width L:",
        options: ["Halves T", "Squares the suppression (T to T-squared)", "Doubles T", "No change"],
        answer: 1,
        explanation: "Exponent doubles: $e^{-4kL} = (e^{-2kL})^{2}$."
      },
      {
        q: "STM current versus gap is:",
        options: ["Linear", "Exponential", "Quadratic", "Constant"],
        answer: 1,
        explanation: "Overlap of tails gives $e^{-2\\kappa L}$ dependence."
      },
      {
        q: "Alpha decay rate depends most sensitively on:",
        options: ["Sample color", "Alpha energy via Gamow exponent", "Container shape", "Humidity"],
        answer: 1,
        explanation: "Geiger-Nuttall: MeV shifts move lifetimes by orders."
      }
    ]
  },
  {
    sectionId: "young-ch40-s5",
    readingTime: 7,
    intro: "The parabolic well $U = kx^{2}/2$ yields evenly spaced $E_{n} = (n+1/2)\\hbar\\omega$ with Hermite-Gaussian states. Zero-point $\\hbar\\omega/2$ is mandatory, and photons step one rung at a time. Molecules vibrate and fields quantize as oscillators.",
    objectives: [
      "State $E_{n} = (n+1/2)\\hbar\\omega$ with $\\omega = \\sqrt{k/m}$",
      "Sketch $n = 0,1,2$ densities against the parabola",
      "Apply $\\Delta n = \\pm 1$ selection to vibrational spectra"
    ],
    concepts: [
      {
        term: "Oscillator levels",
        kind: "theorem",
        statement: "**$E_{n} = (n + 1/2)\\hbar\\omega$**, ladder spacing $\\hbar\\omega$ from $n = 0$ up.",
        detail: "Gaussian ground state; $n$th state has $n$ nodes times the Gaussian envelope."
      },
      {
        term: "Zero-point motion",
        kind: "law",
        statement: "**$E_{0} = \\hbar\\omega/2$ never removable**; position and momentum share $\\hbar/2$ each in quadrature.",
        detail: "Helium liquid and Casimir forces trace to oscillator zero points of atoms and fields."
      },
      {
        term: "Selection rule",
        kind: "theorem",
        statement: "Dipole radiation takes **$\\Delta n = \\pm 1$**, emitting $\\hbar\\omega$ photons per step.",
        detail: "Equal spacing makes all jumps one color; anharmonicity later splits overtones."
      },
      {
        term: "Classical limit",
        kind: "insight",
        statement: "High-$n$ envelopes **approach the classical $1/v$ dwell distribution** peaking at turning points.",
        detail: "$n = 20$ already crowds the walls like a swinging mass."
      },
      {
        term: "Universal oscillator",
        kind: "insight",
        statement: "**Any smooth minimum is an oscillator** to second order; phonons and photons are its quanta in solids and cavities.",
        detail: "Chapter 42 builds heat capacity and bands from these ladders."
      }
    ],
    examples: [
      {
        title: "HCl vibration",
        problem: "HCl stretch $\\tilde{\\nu} = 2886$ per cm. Find $\\hbar\\omega$ and zero-point.",
        steps: [
          { label: "Step 1: Photon", text: "$E = hc\\tilde{\\nu} = (1.986 \\times 10^{-23})(2886 \\times 100) = 5.73 \\times 10^{-20}$ J." },
          { label: "Step 2: eV", text: "$= 0.358$ eV spacing; zero-point $0.179$ eV." },
          { label: "Step 3: Temperature", text: "$E/k = 4150$ K: vibrations freeze at room temperature, rotations do not." }
        ],
        result: "Spacing $0.358$ eV, zero-point $0.179$ eV."
      },
      {
        title: "Photon ladder steps",
        problem: "Oscillator in $n = 3$ emits successively to ground. List photons.",
        steps: [
          { label: "Step 1: Rule", text: "Only $\\Delta n = -1$ allowed dipole: $3$-to-$2$, $2$-to-$1$, $1$-to-$0$." },
          { label: "Step 2: Energies", text: "Three identical $\\hbar\\omega$ photons, not one $3\\hbar\\omega$ photon." },
          { label: "Step 3: Overtone", text: "Weak anharmonic $\\Delta n = -2$ appears only with imperfections." }
        ],
        result: "Three $\\hbar\\omega$ photons in cascade."
      }
    ],
    keyTakeaways: [
      "$E_{n} = (n+1/2)\\hbar\\omega$: even ladder with zero-point half step.",
      "Dipole steps are $\\pm 1$ rung; classical dwell emerges at high $n$.",
      "Every potential minimum hides an oscillator."
    ],
    quiz: [
      {
        q: "Oscillator $E_{2}$ is:",
        options: ["$hbar omega$", "$2.5 hbar omega$", "$2 hbar omega$", "$0.5 hbar omega$"],
        answer: 1,
        explanation: "$(2+1/2) = 2.5$."
      },
      {
        q: "Allowed dipole jump from n = 2 is to:",
        options: ["$n = 0$", "$n = 1$ or $3$", "$n = 5$", "Any n"],
        answer: 1,
        explanation: "Selection $\\Delta n = \\pm 1$."
      },
      {
        q: "Zero-point energy exists because:",
        options: ["Friction", "Uncertainty forbids simultaneous sharp x and p", "Heat", "Relativity"],
        answer: 1,
        explanation: "Ground Gaussian saturates $\\Delta x\\Delta p = \\hbar/2$."
      }
    ]
  },
  {
    sectionId: "young-ch40-s6",
    readingTime: 6,
    intro: "Measurement collapses superpositions onto eigenvalues: position clicks sample $|\\psi|^{2}$, energy clicks return one $E_{n}$ with $|c_{n}|^{2}$ odds. Expectation values predict means, never single shots. Collapse plus unitary evolution is the full quantum rulebook in one section.",
    objectives: [
      "State collapse onto eigenstates with $|c_{n}|^{2}$ probabilities",
      "Compute expectations $\\langle O \\rangle$ versus eigenvalues",
      "Explain sequential-measurement disturbance (which-slit)"
    ],
    concepts: [
      {
        term: "Collapse postulate",
        kind: "law",
        statement: "**Measuring $O$ returns one eigenvalue $o_{n}$ and leaves eigenstate $n$**, with $P_{n} = |c_{n}|^{2}$.",
        detail: "Repeat measurement then repeats the same $o_{n}$ immediately."
      },
      {
        term: "Expectation",
        kind: "definition",
        statement: "**$\\langle O \\rangle = \\sum P_{n}o_{n}$** predicts ensemble means; single shots scatter with $\\Delta O$.",
        detail: "Box superposition $(\\psi_{1}+\\psi_{2})/\\sqrt{2}$ averages $5h^{2}/16mL^{2}$ yet never yields it."
      },
      {
        term: "Position measurement",
        kind: "method",
        statement: "Click at $x$ samples **$|\\psi(x)|^{2}$** and **narrows the state** to a localized packet.",
        detail: "Subsequent momentum spreads wide by uncertainty."
      },
      {
        term: "Incompatible observables",
        kind: "theorem",
        statement: "**Noncommuting operators share no eigenstates** ($[x,p] = i\\hbar$); sharp $x$ randomizes $p$.",
        detail: "Which-slit detection collapses to one slit and erases fringes."
      },
      {
        term: "Unitary plus collapse",
        kind: "insight",
        statement: "**Schrodinger evolves amplitudes; measurement selects outcomes**: two rules, one theory, endless debate (many-worlds, decoherence).",
        detail: "Decoherence explains apparent collapse speed without settling interpretation."
      }
    ],
    examples: [
      {
        title: "Energy lottery",
        problem: "State $(\\psi_{1} + \\psi_{2})/\\sqrt{2}$ in a box ($E_{1} = 1.0$ eV). Find outcomes and mean.",
        steps: [
          { label: "Step 1: Outcomes", text: "$1.0$ eV or $4.0$ eV, each $P = 1/2$." },
          { label: "Step 2: Mean", text: "$\\langle E \\rangle = 2.5$ eV, never observed in one shot." },
          { label: "Step 3: After", text: "Observing $4.0$ eV leaves $\\psi_{2}$; repeats give $4.0$ eV." }
        ],
        result: "$1$ or $4$ eV at half odds; mean $2.5$ eV."
      },
      {
        title: "Which-slit kills fringes",
        problem: "Electrons build fringes, then a detector tags slits with $99$ percent reliability. What survives?",
        steps: [
          { label: "Step 1: Collapse", text: "Each electron projects to slit 1 or 2 at detection." },
          { label: "Step 2: Pattern", text: "Cross term $2\\Re(\\psi_{1}^{\\ast}\\psi_{2})$ averages out: sum of singles." },
          { label: "Step 3: Recovery", text: "Erasing the tag restores coherence (quantum eraser). Measurement, not damage, matters." }
        ],
        result: "Fringes fade to the incoherent sum; erasure revives them."
      }
    ],
    keyTakeaways: [
      "Outcomes are eigenvalues with $|c_{n}|^{2}$ odds; states collapse accordingly.",
      "Means are expectations; shots scatter per $\\Delta O$.",
      "Incompatible measurements disturb each other fundamentally."
    ],
    quiz: [
      {
        q: "State (psi1+psi2)/sqrt2 energy measurement gives:",
        options: ["Always the mean", "E1 or E2 at half odds each", "Zero", "2E1 always"],
        answer: 1,
        explanation: "Born probabilities are the squared coefficients."
      },
      {
        q: "After measuring E2, an immediate repeat gives:",
        options: ["E1", "E2 again", "Random", "Zero"],
        answer: 1,
        explanation: "Collapse leaves the eigenstate; repeats confirm."
      },
      {
        q: "Which-path detection removes fringes because it:",
        options: ["Heats the slits", "Projects onto one-slit states, killing cross terms", "Changes wavelength", "Blocks the beam"],
        answer: 1,
        explanation: "Decoherence of the superposition, not classical damage."
      }
    ]
  }
];

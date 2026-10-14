import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 28: Quantum Concepts (Sections 28.1 – 28.3)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh28Content: SectionContent[] = [
  {
    sectionId: "coletta-ch28-s1",
    readingTime: 7,
    intro: "Light arrives in lumps: blackbody spectra, the photoelectric effect, and Compton scattering each force $E = hf$. Coletta builds the photon from these three experiments with Planck's $h = 6.626 \\times 10^{-34}$ J·s. Quantization starts here.",
    objectives: [
      "Explain blackbody, photoelectric, and Compton evidence for photons",
      "Apply $E = hf$ and $K_{max} = hf - \\phi$ to photoelectric data",
      "Compute Compton shifts with $\\Delta\\lambda = (h/mc)(1 - \\cos\\theta)$"
    ],
    concepts: [
      {
        term: "Planck quantum",
        kind: "definition",
        statement: "Energy exchanges in packets $E = hf$: Planck's constant $h = 6.626 \\times 10^{-34}$ J·s $= 4.136 \\times 10^{-15}$ eV·s sizes every quantum.",
        detail: "A $1$ MHz radio photon holds $4$ neV while an X-ray photon holds keV; frequency is the wallet."
      },
      {
        term: "Blackbody radiation",
        kind: "law",
        statement: "Hot objects emit with peak $\\lambda_{max}T = 2.90 \\times 10^{-3}$ m·K (Wien) and total $\\sigma T^{4}$ (Stefan-Boltzmann); only quantized oscillators fit the short-wave falloff.",
        detail: "The Sun ($5800$ K) peaks near $500$ nm green while room objects peak in the infrared near $10$ micrometers."
      },
      {
        term: "Photoelectric effect",
        kind: "law",
        statement: "Electrons eject with $K_{max} = hf - \\phi$ above threshold $f_{0} = \\phi/h$: slope $h$ and $x$-intercept $\\phi$ for every metal.",
        detail: "Cesium ($\\phi = 2.1$ eV) answers $579$ nm and bluer; brighter failing light only adds numbers of impotent photons."
      },
      {
        term: "Photon momentum",
        kind: "definition",
        statement: "Photons carry $p = E/c = h/\\lambda$ despite zero rest mass, delivering kicks $\\Delta p$ in scattering and absorption.",
        detail: "A $500$ nm photon's $1.3 \\times 10^{-27}$ kg·m/s nudges atoms measurably in laser cooling."
      },
      {
        term: "Compton scattering",
        kind: "theorem",
        statement: "X-rays bouncing off electrons stretch by $\\Delta\\lambda = \\lambda_{C}(1 - \\cos\\theta)$ with $\\lambda_{C} = h/m_{e}c = 2.43$ pm, proving billiard-ball collisions.",
        detail: "Backscatter ($180^{\\circ}$) doubles the shift to $4.86$ pm, read directly on crystal spectrometers." }
    ],
    figures: [
      {
        caption: "Photoelectric $K_{max} = hf - \\phi$: slope $h$, threshold $f_{0} = \\phi/h$",
        svg: '<svg role="img" aria-label="Photoelectric K_max = hf - phi: slope h, threshold f_0 = phi/h" viewBox="0 0 400 150" width="100%" height="150"><line x1="50" y1="15" x2="50" y2="130" stroke="currentColor" stroke-width="1"/><line x1="50" y1="130" x2="380" y2="130" stroke="currentColor" stroke-width="1"/><line x1="140" y1="130" x2="340" y2="40" stroke="currentColor" stroke-width="2.5"/><circle cx="140" cy="130" r="4" fill="currentColor"/><text x="140" y="145" text-anchor="middle" font-size="11" fill="currentColor">f0</text><text x="300" y="40" font-size="11" fill="currentColor">slope = h</text><text x="60" y="60" font-size="11" fill="currentColor">Kmax</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Photoelectrons from zinc",
        problem: "Zinc ($\\phi = 4.3$ eV) is lit by $250$ nm ultraviolet. Find $K_{max}$.",
        steps: [
          { label: "Photon energy", text: "$E = hc/\\lambda = 1240/250 = 4.96$ eV." },
          { label: "Subtract work", text: "$K_{max} = 4.96 - 4.3 = 0.66$ eV." },
          { label: "Threshold check", text: "$f_{0} = 4.3$ eV$/h$ corresponds to $288$ nm, so $250$ nm passes." }
        ],
        result: "About $0.66$ eV ($1.1 \\times 10^{-19}$ J)."
      },
      {
        title: "Compton backscatter",
        problem: "A $71$ pm X-ray backscatters ($\\theta = 180^{\\circ}$) off an electron. Find the shift and new wavelength.",
        steps: [
          { label: "Shift", text: "$\\Delta\\lambda = 2.43(1 - \\cos 180) = 2.43 \\times 2 = 4.86$ pm." },
          { label: "New wavelength", text: "$71 + 4.86 = 75.86$ pm." },
          { label: "Energy lost", text: "The $6.8$ percent stretch went into electron recoil." }
        ],
        result: "$\\Delta\\lambda = 4.86$ pm."
      }
    ],
    keyTakeaways: [
      "Three experiments — blackbody, photoelectric, Compton — demand $E = hf$.",
      "$K_{max} = hf - \\phi$ sorts threshold behavior by slope $h$.",
      "Compton shift proves photons collide with momentum $h/\\lambda$."
    ],
    quiz: [
      {
        q: "Photoelectric threshold depends on:",
        options: ["Light brightness", "Frequency versus work function", "Exposure time", "Beam width"],
        answer: 1,
        explanation: "Only $hf > \\phi$ ejects; brighter sub-threshold light never accumulates enough per photon."
      },
      {
        q: "Doubling light frequency (above threshold) at fixed brightness:",
        options: ["Raises each $K_{max}$ by $h\\Delta f$", "Halves $K_{max}$", "Changes nothing", "Doubles photon count"],
        answer: 0,
        explanation: "Each photon gains $h\\Delta f$ while their number halves at fixed power."
      },
      {
        q: "Compton shift at $90^{\\circ}$ equals:",
        options: ["$2\\lambda_{C}$", "$h$", "Zero", "$\\lambda_{C} = 2.43$ pm"],
        answer: 3,
        explanation: "$1 - \\cos 90^{\\circ} = 1$, leaving one Compton wavelength."
      }
    ]
  },
  {
    sectionId: "coletta-ch28-s2",
    readingTime: 6,
    intro: "If waves act like particles, particles act like waves: de Broglie gives every mass a wavelength $\\lambda = h/p$. Coletta covers electron diffraction and the Bohr-orbit preview that Chapter 29 completes. Matter interferes with itself.",
    objectives: [
      "Compute de Broglie $\\lambda = h/p$ for particles from electrons to baseballs",
      "Explain Davisson-Germer electron diffraction as wave proof",
      "Preview standing-wave orbits as the Bohr condition"
    ],
    concepts: [
      {
        term: "de Broglie wavelength",
        kind: "law",
        statement: "Every particle carries $\\lambda = h/p = h/mv$ (nonrelativistic): faster and heavier means shorter wave.",
        detail: "A $100$ eV electron spans $0.123$ nm (atomic scale) while a pitched baseball spans $10^{-34}$ m (nothing). "
      },
      {
        term: "Electron diffraction",
        kind: "theorem",
        statement: "Electrons scatter off crystals at Bragg angles $2d\\sin\\theta = m\\lambda$ with $\\lambda = h/p$, exactly as X-rays do.",
        detail: "Davisson and Germer's $54$ eV beam peaked at $50^{\\circ}$ for $\\lambda = 0.165$ nm, matching de Broglie."
      },
      {
        term: "Standing-wave orbits",
        kind: "insight",
        statement: "Allowed Bohr orbits fit whole waves around the circle: $2\\pi r = n\\lambda = nh/p$, quantizing angular momentum to $L = n\\hbar$.",
        detail: "Non-fitting waves cancel themselves, leaving only integer orbits standing."
      },
      {
        term: "Wave-particle duality",
        kind: "insight",
        statement: "**Duality** grants both natures to everything: $E = hf$ and $p = h/\\lambda$ translate between particle and wave books.",
        detail: "Interference needs the wave ledger; clicks and tracks need the particle one."
      },
      {
        term: "Macroscopic invisibility",
        kind: "insight",
        statement: "Everyday $\\lambda$ sits far below nuclear sizes, so duality hides: only light masses at atomic speeds show measurable waves.",
        detail: "Even dust grains diffract in principle but never in practice." }
    ],
    examples: [
      {
        title: "Electron microscope wavelength",
        problem: "Find $\\lambda$ for electrons accelerated through $10$ kV (nonrelativistic).",
        steps: [
          { label: "Momentum", text: "$p = \\sqrt{2mK} = \\sqrt{2 \\times 9.11 \\times 10^{-31} \\times 10^{4} \\times 1.60 \\times 10^{-19}} = \\sqrt{2.915 \\times 10^{-45}} \\approx 5.40 \\times 10^{-23}$ kg·m/s." },
          { label: "Wavelength", text: "$\\lambda = h/p = 6.626 \\times 10^{-34}/5.40 \\times 10^{-23} \\approx 1.227 \\times 10^{-11}$ m." },
          { label: "Use", text: "$12.3$ pm resolves far below visible light's $500$ nm." }
        ],
        result: "About $12$ pm."
      },
      {
        title: "Baseball wave",
        problem: "A $0.15$ kg ball at $40$ m/s: find its de Broglie wavelength.",
        steps: [
          { label: "Momentum", text: "$p = 0.15 \\times 40 = 6.0$ kg·m/s." },
          { label: "Wavelength", text: "$\\lambda = 6.626 \\times 10^{-34}/6.0 \\approx 1.10 \\times 10^{-34}$ m." },
          { label: "Verdict", text: "Twenty orders below nuclei: no slit will ever show it." }
        ],
        result: "About $10^{-34}$ m."
      }
    ],
    keyTakeaways: [
      "Matter waves obey $\\lambda = h/p$, large only for light fast particles.",
      "Electron diffraction proves the wave nature directly.",
      "Fitting waves around orbits previews Bohr quantization."
    ],
    quiz: [
      {
        q: "Electron speed doubles (nonrelativistic). Its $\\lambda$ becomes:",
        options: ["Unchanged", "Double", "Half", "Quadruple"],
        answer: 2,
        explanation: "$\\lambda = h/mv$ is inversely proportional to $v$."
      },
      {
        q: "Davisson-Germer peaks proved:",
        options: ["Electrons are classical", "Electrons diffract as waves", "Protons are waves only", "Light is particles only"],
        answer: 1,
        explanation: "Angle-matched Bragg scattering at $h/p$ wavelengths is wave behavior."
      },
      {
        q: "Bohr orbits fit $n$ wavelengths because:",
        options: ["Other waves self-cancel", "Nuclei vibrate", "Photons push", "Circles attract electrons"],
        answer: 0,
        explanation: "Only integer standing waves survive round-trip interference."
      }
    ]
  },
  {
    sectionId: "coletta-ch28-s3",
    readingTime: 6,
    intro: "Measuring position disturbs momentum: Heisenberg's $\\Delta x\\,\\Delta p \\geq h/4\\pi$ sets the fundamental blur. Coletta traces it to wave packets — narrow in space means broad in wavelength — and applies it to atoms and microscopes. Uncertainty is Fourier, not clumsiness.",
    objectives: [
      "State Heisenberg $\\Delta x\\,\\Delta p \\geq h/4\\pi$ and $\\Delta E\\,\\Delta t \\geq h/4\\pi$",
      "Explain the wave-packet origin of the tradeoff",
      "Estimate atomic spreads and microscope limits from uncertainty"
    ],
    concepts: [
      {
        term: "Position-momentum uncertainty",
        kind: "law",
        statement: "Simultaneous knowledge obeys $\\Delta x\\,\\Delta p \\geq h/4\\pi = \\hbar/2$: squeezing position spreads momentum and vice versa.",
        detail: "Pinning an electron to $0.1$ nm costs at least $5.3 \\times 10^{-25}$ kg·m/s of momentum blur."
      },
      {
        term: "Energy-time uncertainty",
        kind: "law",
        statement: "Short-lived states spread in energy: $\\Delta E\\,\\Delta t \\geq h/4\\pi$, broadening spectral lines of fleeting levels.",
        detail: "A $10^{-8}$ s excited state carries $\\sim10^{-7}$ eV of natural width."
      },
      {
        term: "Wave-packet origin",
        kind: "method",
        statement: "Building a narrow packet needs many wavelengths (momenta) superposed; a pure wavelength spans all space. The tradeoff is Fourier mathematics.",
        detail: "Hearing a note's pitch needs several cycles, the audio version of $\\Delta f\\,\\Delta t \\geq 1/4\\pi$."
      },
      {
        term: "Atomic stability",
        kind: "insight",
        statement: "Uncertainty stops collapse: squeezing toward the nucleus spikes $p^{2}/2m$ kinetic faster than $-ke^{2}/r$ attraction deepens, balancing near $a_{0}$.",
        detail: "Atoms are big because confinement is expensive in momentum."
      },
      {
        term: "Observer effect versus uncertainty",
        kind: "insight",
        statement: "Disturbance pictures (photon kicks) illustrate but understate: even interaction-free statistics obey the bound because waves, not gadgets, limit joint sharpness.",
        detail: "Entangled measurements confirm the blur with no kick delivered." }
    ],
    figures: [
      {
        caption: "Narrow packet (spread $p$) versus pure wave (spread $x$): $\\Delta x\\,\\Delta p \\geq h/4\\pi$",
        svg: '<svg role="img" aria-label="Narrow packet (spread p) versus pure wave (spread x): Delta x,Delta p geq h/4pi" viewBox="0 0 400 130" width="100%" height="130"><path d="M30,90 C60,88 70,30 100,32 C130,34 140,88 170,90" fill="none" stroke="currentColor" stroke-width="2"/><text x="100" y="115" font-size="11" fill="currentColor">narrow x, broad p</text><path d="M230,65 L370,65 M230,55 L370,55 M230,75 L370,75" stroke="currentColor" stroke-width="1.4" fill="none"/><text x="300" y="115" font-size="11" fill="currentColor">sharp p, wide x</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Electron confined to an atom",
        problem: "An electron is localized to $\\Delta x = 0.10$ nm. Estimate minimum $\\Delta v$.",
        steps: [
          { label: "Momentum blur", text: "$\\Delta p \\geq h/4\\pi\\Delta x = 6.626 \\times 10^{-34}/(4\\pi \\times 10^{-10}) \\approx 5.27 \\times 10^{-25}$ kg·m/s." },
          { label: "Velocity", text: "$\\Delta v = \\Delta p/m = 5.27 \\times 10^{-25}/9.11 \\times 10^{-31} \\approx 5.79 \\times 10^{5}$ m/s." },
          { label: "Meaning", text: "Atomic electrons necessarily move at $10^{5}$–$10^{6}$ m/s scale speeds." }
        ],
        result: "At least $5.8 \\times 10^{5}$ m/s of spread."
      },
      {
        title: "Natural line width",
        problem: "An excited state lives $\\Delta t = 1.6$ ns. Estimate $\\Delta E$ in eV.",
        steps: [
          { label: "Bound", text: "$\\Delta E \\geq h/4\\pi\\Delta t = 6.626 \\times 10^{-34}/(4\\pi \\times 1.6 \\times 10^{-9}) \\approx 3.30 \\times 10^{-26}$ J." },
          { label: "Convert", text: "Divide by $1.60 \\times 10^{-19}$ to get $2.06 \\times 10^{-7}$ eV." },
          { label: "Note", text: "Tiny against eV spacings but measurable by laser spectroscopy." }
        ],
        result: "About $2 \\times 10^{-7}$ eV."
      }
    ],
    keyTakeaways: [
      "$\\Delta x\\,\\Delta p \\geq h/4\\pi$ and $\\Delta E\\,\\Delta t \\geq h/4\\pi$ bound joint knowledge.",
      "Packets trade spatial narrowness for momentum breadth by Fourier law.",
      "Atoms hold their size because squeezing costs kinetic energy."
    ],
    quiz: [
      {
        q: "Localizing an electron twice as tightly (half $\\Delta x$) does what to $\\Delta p$?",
        options: ["Leaves it", "Zeroes it", "Halves it", "Doubles it (at least)"],
        answer: 3,
        explanation: "The product bound forces momentum spread up as position spread falls."
      },
      {
        q: "Energy-time uncertainty says short-lived levels have:",
        options: ["Infinite lifetime", "Sharp energies", "Broadened energies", "Zero energy"],
        answer: 2,
        explanation: "Small $\\Delta t$ demands large $\\Delta E$ in the product bound."
      },
      {
        q: "Uncertainty fundamentally comes from:",
        options: ["Bad instruments", "Wave-packet Fourier tradeoff", "Friction", "Gravity"],
        answer: 1,
        explanation: "Narrow packets need broad spectra mathematically, independent of apparatus."
      },
      // PYQ-pattern: JEE Mains 2019 — photoelectric threshold (rephrased, values changed)
      {
        q: "A metal has work function $\\phi = 2.30 \\text{ eV}$. The longest wavelength that can eject electrons is closest to:",
        options: ["$270 \\text{ nm}$", "$539 \\text{ nm}$", "$1080 \\text{ nm}$", "$1240 \\text{ nm}$"],
        answer: 1,
        explanation: "Step 1: Given $\\phi = 2.30 \\text{ eV}$ and threshold condition $hf_{0} = \\phi$. Step 2: Governing law is $\\lambda_{0} = hc/\\phi$ with $hc = 1240 \\text{ eV}\\cdot\\text{nm}$. Step 3: Key equation: $$\\lambda_{0} = \\frac{1240}{2.30}.$$ Step 4: Numerics give $\\lambda_{0} \\approx 539 \\text{ nm}$; units are nanometers and longer waves carry too little energy. Step 5: Distractors fail because $270$ halves the wavelength, $1080$ doubles it, and $1240$ is the $1 \\text{ eV}$ conversion constant. Step 6: Conclude cutoff sits at about **$539 \\text{ nm}$**."
      },
      // PYQ-pattern: GATE PH 2020 — position momentum uncertainty (rephrased, values changed)
      {
        q: "An electron is confined to $\\Delta x = 0.050 \\text{ nm}$. The minimum velocity spread is closest to:",
        options: ["$1.2 \\times 10^{6} \\text{ m/s}$", "$5.8 \\times 10^{5} \\text{ m/s}$", "$1.2 \\times 10^{5} \\text{ m/s}$", "$2.3 \\times 10^{6} \\text{ m/s}$"],
        answer: 0,
        explanation: "Step 1: Given $\\Delta x = 5.0 \\times 10^{-11} \\text{ m}$ and $m = 9.11 \\times 10^{-31} \\text{ kg}$. Step 2: Governing law is $\\Delta x\\Delta p \\geq h/4\\pi$ with $h = 6.626 \\times 10^{-34}$. Step 3: Key equation: $$\\Delta p \\geq \\frac{6.626 \\times 10^{-34}}{4\\pi(5.0 \\times 10^{-11})}, \\qquad \\Delta v = \\frac{\\Delta p}{m}.$$ Step 4: Numerics give $\\Delta p \\approx 1.05 \\times 10^{-24}$ and $\\Delta v \\approx 1.2 \\times 10^{6} \\text{ m/s}$; units $\\text{kg}\\cdot\\text{m/s}$ over $\\text{kg}$ are $\\text{m/s}$. Step 5: Distractors fail because $5.8 \\times 10^{5}$ belongs to $0.10 \\text{ nm}$, $1.2 \\times 10^{5}$ slips a decade, and $2.3 \\times 10^{6}$ mishandles $4\\pi$. Step 6: Conclude confinement forces at least **$1.2 \\times 10^{6} \\text{ m/s}$** of spread."
      },
      // PYQ-pattern: JEE Advanced 2018 — electron wavelength from voltage (rephrased, values changed)
      {
        q: "Electrons accelerated from rest through $100 \\text{ V}$ have wavelength closest to:",
        options: ["$1.23 \\text{ nm}$", "$0.012 \\text{ nm}$", "$0.39 \\text{ nm}$", "$0.123 \\text{ nm}$"],
        answer: 3,
        explanation: "Step 1: Given $V = 100 \\text{ V}$ so $K = eV = 100 \\text{ eV} = 1.60 \\times 10^{-17} \\text{ J}$. Step 2: Governing laws are $p = \\sqrt{2mK}$ and $\\lambda = h/p$. Step 3: Key equation: $$\\lambda = \\frac{6.626 \\times 10^{-34}}{\\sqrt{2(9.11 \\times 10^{-31})(1.60 \\times 10^{-17})}}.$$ Step 4: Numerics give $p = 5.40 \\times 10^{-24}$ and $\\lambda = 1.23 \\times 10^{-10} \\text{ m} = 0.123 \\text{ nm}$; units resolve to meters. Step 5: Distractors fail by decades from unit slips, while $0.39$ belongs to a heavier particle. Step 6: Conclude the beam wavelength is about **$0.123 \\text{ nm}$**."
      },
      // PYQ-pattern: JEE Mains 2021 — energy time broadening (rephrased, values changed)
      {
        q: "An excited level lives $\\Delta t = 0.80 \\text{ ns}$. Its natural energy width is closest to:",
        options: ["$2.1 \\times 10^{-7} \\text{ eV}$", "$8.2 \\times 10^{-7} \\text{ eV}$", "$4.1 \\times 10^{-7} \\text{ eV}$", "$2.6 \\times 10^{-26} \\text{ eV}$"],
        answer: 2,
        explanation: "Step 1: Given $\\Delta t = 8.0 \\times 10^{-10} \\text{ s}$. Step 2: Governing law is $\\Delta E\\Delta t \\geq h/4\\pi$ with $h = 6.626 \\times 10^{-34}$. Step 3: Key equation: $$\\Delta E \\geq \\frac{6.626 \\times 10^{-34}}{4\\pi(8.0 \\times 10^{-10})}.$$ Step 4: Numerics give $6.59 \\times 10^{-26} \\text{ J}$, and dividing by $1.60 \\times 10^{-19}$ yields $4.1 \\times 10^{-7} \\text{ eV}$; units convert cleanly to electron-volts. Step 5: Distractors fail because $2.1 \\times 10^{-7}$ belongs to $1.6 \\text{ ns}$, $8.2 \\times 10^{-7}$ halves the lifetime again, and $2.6 \\times 10^{-26}$ quotes joules as electron-volts. Step 6: Conclude the level is broadened by about **$4.1 \\times 10^{-7} \\text{ eV}$**."
      },
      // PYQ-pattern: GATE PH 2022 — photon momentum (rephrased, values changed)
      {
        q: "Orange photons of $\\lambda = 600 \\text{ nm}$ each carry momentum closest to:",
        options: ["$3.3 \\times 10^{-19} \\text{ kg}\\cdot\\text{m/s}$", "$1.10 \\times 10^{-27} \\text{ kg}\\cdot\\text{m/s}$", "$1.8 \\times 10^{-36} \\text{ kg}\\cdot\\text{m/s}$", "$6.6 \\times 10^{-34} \\text{ kg}\\cdot\\text{m/s}$"],
        answer: 1,
        explanation: "Step 1: Given $\\lambda = 6.00 \\times 10^{-7} \\text{ m}$. Step 2: Governing law is $p = h/\\lambda$ with $h = 6.626 \\times 10^{-34}$. Step 3: Key equation: $$p = \\frac{6.626 \\times 10^{-34}}{6.00 \\times 10^{-7}}.$$ Step 4: Numerics give $p \\approx 1.10 \\times 10^{-27} \\text{ kg}\\cdot\\text{m/s}$; units $\\text{J}\\cdot\\text{s}/\\text{m}$ are momentum. Step 5: Distractors fail because $3.3 \\times 10^{-19}$ is the energy in joules, $1.8 \\times 10^{-36}$ divides by $c$ twice, and $6.6 \\times 10^{-34}$ quotes $h$ itself. Step 6: Conclude each photon carries about **$1.10 \\times 10^{-27} \\text{ kg}\\cdot\\text{m/s}$**."
      },
      // PYQ-pattern: JEE Advanced 2020 — Bohr angular momentum (rephrased, values changed)
      {
        q: "In the Bohr model the $n = 3$ orbit of hydrogen has angular momentum:",
        options: ["$3.16 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$", "$1.05 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$", "$9.48 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$", "$0$"],
        answer: 0,
        explanation: "Step 1: Given level $n = 3$ and quantization $L = n\\hbar$. Step 2: Governing law is $L = nh/2\\pi$ with $h = 6.626 \\times 10^{-34}$. Step 3: Key equation: $$L = \\frac{3(6.626 \\times 10^{-34})}{2\\pi} = 3(1.055 \\times 10^{-34}).$$ Step 4: Numerics give $L \\approx 3.16 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$; units of $h$ are angular momentum. Step 5: Distractors fail because $1.05 \\times 10^{-34}$ is the $n = 1$ value, $9.48 \\times 10^{-34}$ uses $3h$ without $2\\pi$, and $0$ denies quantization. Step 6: Conclude the third orbit carries **$3.16 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$**."
      }
    ]
  }
]

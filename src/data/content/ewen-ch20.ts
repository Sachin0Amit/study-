import type { SectionContent } from "../library"

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition, Chapter 20
// Light (Sections 20.1 – 20.5)
// ============================================================================

export const ewenCh20Content: SectionContent[] = [
  {
    sectionId: "ewen-ch20-s1",
    readingTime: 5,
    intro: "Light is the messenger of the universe — wave, particle, and ray all at once depending on the experiment. This section surveys the dual models, the ray approximation for instruments, and the technician's working picture of beams and shadows.",
    objectives: [
      "State the wave–particle duality as experiment-dependent models",
      "Use the ray model (straight-line beams, shadows) for instruments",
      "Classify luminous, illuminated, transparent, and opaque bodies",
    ],
    concepts: [
      {
        term: "Wave–particle duality",
        kind: "insight",
        statement: "Light interferes like a wave and ejects electrons like particles; the experiment selects the model.",
        detail: "Slits show waves; photoelectric meters count particles — both are correct descriptions.",
      },
      {
        term: "Ray model",
        kind: "method",
        statement: "When $\\lambda$ is tiny beside apertures, light travels as straight rays casting sharp shadows — the basis of Chapters 21–22 diagrams.",
        detail: "Lenses, mirrors, and sight lines all assume rectilinear rays until diffraction matters.",
      },
      {
        term: "Luminous versus illuminated",
        kind: "definition",
        statement: "Luminous bodies emit their own light (lamps, sun); illuminated bodies reflect it (moon, paper).",
        detail: "Photometry treats lamps as sources and desks as receivers.",
      },
      {
        term: "Transparent, translucent, opaque",
        kind: "definition",
        statement: "Transparent media pass rays undistorted, translucent ones scatter them, opaque ones block them.",
        detail: "Frosted bulbs are translucent by design; blackbodies are ideal opaque absorbers.",
      },
      {
        term: "Spectrum placement",
        kind: "notation",
        statement: "Visible light spans $380$–$750 \\text{ nm}$ ($4.3$–$7.9 \\times 10^{14} \\text{ Hz}$), flanked by infrared and ultraviolet.",
        detail: "Color follows wavelength: violet short, red long.",
      },
    ],
    examples: [
      {
        title: "Shadow geometry",
        problem: "A $2.00 \\text{ m}$ pole casts a $3.00 \\text{ m}$ shadow. At the same time a tower casts $45.0 \\text{ m}$. Find the tower height by similar rays.",
        steps: [
          { label: "Step 1: Ratio", text: "$h/45.0 = 2.00/3.00$." },
          { label: "Step 2: Solve", text: "$h = 30.0 \\text{ m}$." },
        ],
        result: "$30.0 \\text{ m}$ — straight-ray surveying.",
      },
      {
        title: "Red-light frequency",
        problem: "Find the frequency of $700 \\text{ nm}$ red light.",
        steps: [
          { label: "Step 1: Divide $c/\\lambda$", text: "$f = 3.00 \\times 10^{8}/7.00 \\times 10^{-7} = 4.29 \\times 10^{14} \\text{ Hz}$." },
        ],
        result: "$4.29 \\times 10^{14} \\text{ Hz}$.",
      },
    ],
    keyTakeaways: [
      "Light is wave and particle; rays are the short-wavelength limit for instruments.",
      "Luminous emits; illuminated reflects; transparency grades the passage.",
      "Visible spans $380$–$750 \\text{ nm}$ from violet to red.",
    ],
    quiz: [
      {
        q: "Sharp shadows support which model?",
        options: ["Wave", "Particle", "Ray (straight-line travel)", "Quantum field"],
        answer: 2,
        explanation: "Rectilinear rays explain crisp umbras; wave spreading would blur them.",
      },
      {
        q: "The Moon is visible because it is:",
        options: ["Luminous", "Illuminated (reflecting sunlight)", "Transparent", "A blackbody emitter"],
        answer: 1,
        explanation: "It shines by reflected sunlight, brightest at full phase.",
      },
      {
        q: "Which wavelength is visible?",
        options: ["$10 \\text{ cm}$", "$550 \\text{ nm}$", "$10 \\text{ nm}$", "$1 \\text{ mm}$"],
        answer: 1,
        explanation: "$550 \\text{ nm}$ is green; the others are microwave, X-ray, and microwave bands.",
      },
    ],
  },
  {
    sectionId: "ewen-ch20-s2",
    readingTime: 5,
    intro: "Light is fast but not infinitely fast — $3.00 \\times 10^{8} \\text{ m}/\\text{s}$ — and measuring it took centuries of ingenuity. This section follows Roemer to Michelson, uses light-travel time for ranging, and notes the $c$ speed limit.",
    objectives: [
      "Quote $c = 3.00 \\times 10^{8} \\text{ m}/\\text{s}$ and describe key measurements",
      "Compute light-travel times and radar/lidar ranges",
      "State that $c$ in vacuum is the universal speed limit",
    ],
    concepts: [
      {
        term: "Speed of light",
        kind: "notation",
        statement: "$c = 3.00 \\times 10^{8} \\text{ m}/\\text{s}$ ($186{,}000 \\text{ mi}/\\text{s}$; one foot per nanosecond).",
        detail: "Memorize $c$ and the foot-per-nanosecond bench equivalent.",
      },
      {
        term: "Roemer to Michelson",
        kind: "insight",
        statement: "Jupiter's moon delays (Roemer), toothed wheels (Fizeau), rotating mirrors (Foucault, Michelson) progressively pinned $c$.",
        detail: "Each method timed light over a known baseline — astronomy first, bench optics later.",
      },
      {
        term: "Light-travel ranging",
        kind: "method",
        statement: "Distance is $d = c\\Delta t/2$ for radar/lidar echoes; one-way for beacons.",
        detail: "GPS solves four such one-way times for position plus clock error.",
      },
      {
        term: "Vacuum speed limit",
        kind: "law",
        statement: "No signal or matter exceeds $c$ in vacuum; media only slow light ($v = c/n$).",
        detail: "Relativity (Chapter 24) makes this a law of causality, not just optics.",
      },
      {
        term: "Astronomical distances",
        kind: "notation",
        statement: "A light-year is $9.46 \\times 10^{12} \\text{ km}$; the Sun is $8.3$ light-minutes away.",
        detail: "Telescopes look back in time by exactly the travel delay.",
      },
    ],
    examples: [
      {
        title: "Sunlight travel time",
        problem: "Earth orbits $1.496 \\times 10^{11} \\text{ m}$ from the Sun. Find the light-travel time.",
        steps: [
          { label: "Step 1: Divide", text: "$t = 1.496 \\times 10^{11}/3.00 \\times 10^{8} = 499 \\text{ s}$." },
        ],
        result: "$499 \\text{ s}$ ($8.31 \\text{ min}$).",
      },
      {
        title: "Lidar range",
        problem: "A lidar pulse returns $6.70 \\mu\\text{s}$ after firing. Find the target distance.",
        steps: [
          { label: "Step 1: Round trip", text: "$d = (3.00 \\times 10^{8})(6.70 \\times 10^{-6})/2 = 1005 \\text{ m}$." },
        ],
        result: "About $1.01 \\text{ km}$.",
      },
    ],
    keyTakeaways: [
      "$c = 3.00 \\times 10^{8} \\text{ m}/\\text{s}$; one foot per nanosecond.",
      "Echo ranging halves the round-trip $c\\Delta t$.",
      "Nothing outruns $c$ in vacuum.",
    ],
    quiz: [
      {
        q: "Light crosses a $3.00 \\text{ m}$ room in about:",
        options: ["$10 \\text{ s}$", "$10 \\text{ ns}$", "$1 \\text{ ms}$", "$3 \\text{ min}$"],
        answer: 1,
        explanation: "$3.00/3.00 \\times 10^{8} = 10^{-8} \\text{ s} = 10 \\text{ ns}$.",
      },
      {
        q: "Roemer's evidence for finite $c$ was:",
        options: ["Toothed-wheel timing", "Delays in Jupiter's moon eclipses", "Rotating mirrors", "Photoelectric current"],
        answer: 1,
        explanation: "Io's eclipses lagged when Earth was farthest — light needed extra travel time.",
      },
      {
        q: "A light-year measures:",
        options: ["Time", "Distance", "Speed", "Brightness"],
        answer: 1,
        explanation: "Distance light travels in one year: $9.46 \\times 10^{12} \\text{ km}$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch20-s3",
    readingTime: 5,
    intro: "Young's double slit proves light is a wave: overlapping beams interfere. This section reads interference and diffraction as wave signatures, computes fringe positions, and links wavelength to color.",
    objectives: [
      "Explain double-slit bright/dark fringes by path difference",
      "Apply $d\\sin\\theta = m\\lambda$ for bright fringes",
      "Connect wavelength order to color order",
    ],
    concepts: [
      {
        term: "Huygens wavelets",
        kind: "insight",
        statement: "Every wavefront point spawns forward wavelets; their envelope is the next front.",
        detail: "Bending around corners and slit spreading both follow from this construction.",
      },
      {
        term: "Double-slit interference",
        kind: "law",
        statement: "Bright fringes occur at path difference $m\\lambda$: $d\\sin\\theta = m\\lambda$ ($m = 0, 1, 2, \\ldots$); dark at half-integers.",
        detail: "Coherent (single-wavelength, in-phase) slits are required — lasers qualify, filaments need filtering.",
      },
      {
        term: "Diffraction spreading",
        kind: "insight",
        statement: "Narrow slits spread light widely ($\\theta \\sim \\lambda/a$); wide apertures hold tight beams.",
        detail: "That is why pinholes blur and telescope mirrors must be large.",
      },
      {
        term: "Wavelength sets color",
        kind: "notation",
        statement: "Violet $\\approx 400 \\text{ nm}$ through red $\\approx 700 \\text{ nm}$; fringe spacing grows with $\\lambda$.",
        detail: "Red fringes sit wider than violet in the same apparatus.",
      },
      {
        term: "Single-slit minimum",
        kind: "theorem",
        statement: "First dark minimum at $a\\sin\\theta = \\lambda$ for slit width $a$.",
        detail: "The central maximum is twice as wide as the side lobes.",
      },
    ],
    figures: [
      {
        caption: "Double slit: path difference $d\\sin\\theta = m\\lambda$ gives bright fringes; half-integer gives dark.",
        svg: "<svg role='img' aria-label='Double slit: path difference dsintheta = mlambda gives bright fringes; half-integer gives dark.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"100\" y1=\"30\" x2=\"100\" y2=\"170\"/><circle cx=\"100\" cy=\"85\" r=\"4\" fill=\"currentColor\"/><circle cx=\"100\" cy=\"115\" r=\"4\" fill=\"currentColor\"/><line x1=\"280\" y1=\"20\" x2=\"280\" y2=\"180\"/><line x1=\"100\" y1=\"85\" x2=\"280\" y2=\"60\"/><line x1=\"100\" y1=\"115\" x2=\"280\" y2=\"140\"/><line x1=\"100\" y1=\"100\" x2=\"280\" y2=\"100\" stroke-dasharray=\"5 4\"/><text x=\"285\" y=\"60\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">bright</text><text x=\"285\" y=\"105\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">central</text><text x=\"40\" y=\"190\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">coherent slits d apart</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Fringe position",
        problem: "Slits $0.250 \\text{ mm}$ apart project $600 \\text{ nm}$ light onto a screen $1.20 \\text{ m}$ away. Find the first bright fringe distance from center.",
        steps: [
          { label: "Step 1: Small-angle fringe", text: "$y = m\\lambda L/d$." },
          { label: "Step 2: Substitute", text: "$y = (1)(600 \\times 10^{-9})(1.20)/(0.250 \\times 10^{-3}) = 2.88 \\times 10^{-3} \\text{ m}$." },
        ],
        result: "$2.88 \\text{ mm}$ off center.",
      },
      {
        title: "Color ordering check",
        problem: "The same apparatus runs $450 \\text{ nm}$ violet. Compare fringe width with red.",
        steps: [
          { label: "Step 1: Ratio", text: "$y \\propto \\lambda$: $450/600 = 0.750$." },
        ],
        result: "Violet fringes $25\\%$ tighter than red.",
      },
    ],
    keyTakeaways: [
      "Coherent slits interfere: bright at $d\\sin\\theta = m\\lambda$.",
      "Narrow apertures diffract widely; fringe scale grows with $\\lambda$.",
      "Interference is the wave certificate of light.",
    ],
    quiz: [
      {
        q: "Covering one slit of a double-slit setup:",
        options: ["Widens fringes", "Destroys interference, leaving single-slit spread", "Doubles brightness everywhere", "Changes color"],
        answer: 1,
        explanation: "Two coherent sources are required; one slit gives only its own diffraction envelope.",
      },
      {
        q: "Third bright fringe ($m = 3$) with $d = 0.100 \\text{ mm}$, $\\lambda = 500 \\text{ nm}$ sits at $\\sin\\theta$:",
        options: ["$0.00167$", "$0.005$", "$0.015$", "$1.5$"],
        answer: 2,
        explanation: "$3(500 \\times 10^{-9})/10^{-4} = 0.015$.",
      },
      {
        q: "Interference proves light behaves as a:",
        options: ["Stream of particles only", "Wave", "Static field", "Sound"],
        answer: 1,
        explanation: "Cancellation and reinforcement need phase — a wave property particles alone cannot supply.",
      },
    ],
  },
  {
    sectionId: "ewen-ch20-s4",
    readingTime: 5,
    intro: "Dim light ejects electrons instantly — only photons explain it. This section states the photoelectric effect, Planck's $E = hf$, and Einstein's $hf = \\phi + K_{max}$, and runs photon-energy numbers for lamps and sensors.",
    objectives: [
      "Describe the photoelectric effect's wave-defying facts",
      "Compute photon energies $E = hf = hc/\\lambda$",
      "Apply $hf = \\phi + K_{max}$ to photocells",
    ],
    concepts: [
      {
        term: "Photon",
        kind: "definition",
        statement: "A photon is one quantum of light with $E = hf = hc/\\lambda$; $h = 6.63 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$.",
        detail: "A green photon carries ~$2.3 \\text{ eV}$ ($3.7 \\times 10^{-19} \\text{ J}$).",
      },
      {
        term: "Photoelectric facts",
        kind: "law",
        statement: "Electrons eject instantly above a threshold frequency, with $K_{max}$ growing in $f$ (not intensity); more intensity means more electrons, not faster ones.",
        detail: "Waves would need time to soak energy and would depend on intensity — both contradicted.",
      },
      {
        term: "Einstein equation",
        kind: "theorem",
        statement: "$hf = \\phi + K_{max}$: photon energy splits into work function $\\phi$ plus electron kinetic energy.",
        detail: "Stopping voltage measures it: $K_{max} = eV_{stop}$.",
      },
      {
        term: "Electron volt",
        kind: "notation",
        statement: "$1 \\text{ eV} = 1.60 \\times 10^{-19} \\text{ J}$; photon shortcut $E(\\text{eV}) \\approx 1240/\\lambda(\\text{nm})$.",
        detail: "$550 \\text{ nm}$ green is $1240/550 = 2.25 \\text{ eV}$.",
      },
      {
        term: "Photocell applications",
        kind: "insight",
        statement: "Exposure meters, solar cells, motion sensors, and photomultipliers all trade photons for electrons at threshold-tuned cathodes.",
        detail: "Solar cells internalize the effect in silicon junctions instead of vacuum tubes.",
      },
    ],
    examples: [
      {
        title: "Green photon energy",
        problem: "Find the energy of a $550 \\text{ nm}$ photon in joules and eV.",
        steps: [
          { label: "Step 1: Joules", text: "$E = hc/\\lambda = (6.63 \\times 10^{-34})(3.00 \\times 10^{8})/5.50 \\times 10^{-7} = 3.62 \\times 10^{-19} \\text{ J}$." },
          { label: "Step 2: eV", text: "$3.62 \\times 10^{-19}/1.60 \\times 10^{-19} = 2.26 \\text{ eV}$ (check $1240/550 = 2.25$)." },
        ],
        result: "$3.62 \\times 10^{-19} \\text{ J}$ ($2.26 \\text{ eV}$).",
      },
      {
        title: "Stopping voltage",
        problem: "Light of $f = 1.20 \\times 10^{15} \\text{ Hz}$ strikes a cathode with $\\phi = 2.30 \\text{ eV}$. Find $K_{max}$ and $V_{stop}$.",
        steps: [
          { label: "Step 1: Photon", text: "$hf = (4.136 \\times 10^{-15})(1.20 \\times 10^{15}) = 4.96 \\text{ eV}$." },
          { label: "Step 2: Subtract", text: "$K_{max} = 4.96 - 2.30 = 2.66 \\text{ eV}$; $V_{stop} = 2.66 \\text{ V}$." },
        ],
        result: "$K_{max} = 2.66 \\text{ eV}$; stopping voltage $2.66 \\text{ V}$.",
      },
    ],
    keyTakeaways: [
      "Photons carry $E = hf$; $1240/\\lambda(\\text{nm})$ gives eV instantly.",
      "$hf = \\phi + K_{max}$ with intensity setting count, frequency setting energy.",
      "Photocells and solar cells are applied photoelectric physics.",
    ],
    quiz: [
      {
        q: "Brighter light above threshold on a photocathode:",
        options: ["Ejects faster electrons", "Ejects more electrons at the same max energy", "Lowers the work function", "Stops all emission"],
        answer: 1,
        explanation: "Intensity counts photons; per-photon energy $hf$ fixes $K_{max}$.",
      },
      {
        q: "A $1240 \\text{ nm}$ photon has energy about:",
        options: ["$1.00 \\text{ eV}$", "$1240 \\text{ eV}$", "$10.0 \\text{ eV}$", "$0.10 \\text{ eV}$"],
        answer: 0,
        explanation: "$1240/1240 = 1.00 \\text{ eV}$ (near infrared).",
      },
      {
        q: "No electrons emit no matter how bright the light. Best explanation:",
        options: ["The cathode is cold", "Photon frequency is below threshold ($hf < \\phi$)", "The ammeter failed", "Light is a wave"],
        answer: 1,
        explanation: "Below-threshold photons cannot pay the work function at any intensity.",
      },
    ],
  },
  {
    sectionId: "ewen-ch20-s5",
    readingTime: 6,
    intro: "Photometry prices light: how many lumens a lamp makes and how many lux land on the desk. This section defines candela, lumen, lux, and footcandle, applies the inverse-square law $E = I/d^{2}$, and lays out shop lighting.",
    objectives: [
      "Define luminous intensity, flux, and illumination with units",
      "Apply $E = I/d^{2}$ to lamp placement problems",
      "Design work-plane illumination for shop tasks",
    ],
    concepts: [
      {
        term: "Candela and lumen",
        kind: "definition",
        statement: "Luminous intensity $I$ (candelas) is lumens per steradian; flux $\\Phi$ (lumens) totals all directions ($\\Phi = 4\\pi I$ isotropic).",
        detail: "A $60 \\text{ W}$ incandescent made ~$800 \\text{ lm}$; LEDs now top $100 \\text{ lm}/\\text{W}$.",
      },
      {
        term: "Illumination units",
        kind: "notation",
        statement: "Illumination $E = \\Phi/A$: $1 \\text{ lux} = 1 \\text{ lm}/\\text{m}^{2}$; $1 \\text{ footcandle} = 1 \\text{ lm}/\\text{ft}^{2} \\approx 10.76 \\text{ lux}$.",
        detail: "Sunlight ~$100{,}000 \\text{ lux}$; offices $300$–$500 \\text{ lux}$; machine shops $500$–$1000 \\text{ lux}$.",
      },
      {
        term: "Inverse-square law",
        kind: "law",
        statement: "Point-source illumination falls as $E = I/d^{2}$ (normal incidence): double the distance, quarter the lux.",
        detail: "$100 \\text{ cd}$ at $2 \\text{ m}$ gives $25 \\text{ lux}$.",
      },
      {
        term: "Cosine (oblique) law",
        kind: "method",
        statement: "Tilted surfaces get $E = (I/d^{2})\\cos\\theta$ with $\\theta$ from the normal.",
        detail: "Wall-washers and drafting lamps aim near-normal for full rated lux.",
      },
      {
        term: "Lighting layout",
        kind: "method",
        statement: "Size lamp lumens from $\\Phi = E \\times A / (CU \\times LLF)$ with utilization and loss factors.",
        detail: "Dirty, aged fixtures deliver half of catalog lumens — maintenance factor is engineering honesty.",
      },
    ],
    figures: [
      {
        caption: "Inverse-square law: the same flux $\\Phi$ spreads over $4\\times$ area at $2\\times$ distance, so $E = I/d^{2}$.",
        svg: "<svg role='img' aria-label='Inverse-square law: the same flux Phi spreads over 4times area at 2times distance, so E = I/d^2.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"60\" cy=\"100\" r=\"8\" fill=\"currentColor\"/><line x1=\"68\" y1=\"80\" x2=\"180\" y2=\"50\"/><line x1=\"68\" y1=\"120\" x2=\"180\" y2=\"150\"/><line x1=\"180\" y1=\"50\" x2=\"180\" y2=\"150\"/><line x1=\"68\" y1=\"70\" x2=\"300\" y2=\"30\"/><line x1=\"68\" y1=\"130\" x2=\"300\" y2=\"170\"/><line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"170\"/><text x=\"150\" y=\"175\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">area A</text><text x=\"270\" y=\"190\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">area 4A: E/4</text></svg>",
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Desk-lamp illumination",
        problem: "A $40.0 \\text{ cd}$ task lamp sits $0.800 \\text{ m}$ above a bench (normal incidence). Find $E$ in lux.",
        steps: [
          { label: "Step 1: Inverse square", text: "$E = 40.0/(0.800)^{2} = 62.5 \\text{ lux}$." },
        ],
        result: "$62.5 \\text{ lux}$ — fine for rough work, dim for inspection (add lamps).",
      },
      {
        title: "Shop bay lumens",
        problem: "A $60.0 \\text{ m}^{2}$ bay needs $750 \\text{ lux}$ with $CU = 0.600$ and $LLF = 0.750$. Find lamp lumens and fixtures ($5000 \\text{ lm}$ each).",
        steps: [
          { label: "Step 1: Lumens", text: "$\\Phi = (750)(60.0)/(0.600 \\times 0.750) = 100{,}000 \\text{ lm}$." },
          { label: "Step 2: Fixtures", text: "$100{,}000/5000 = 20$ fixtures." },
        ],
        result: "$100{,}000 \\text{ lm}$; $20$ high-bay fixtures.",
      },
    ],
    keyTakeaways: [
      "Lumens total; lux (or footcandles) land per area.",
      "$E = I/d^{2}$ (times $\\cos\\theta$ tilted) places every lamp.",
      "Utilization and dirt factors separate catalog from work-plane lumens.",
    ],
    quiz: [
      {
        q: "Moving a bench twice as far from a lamp changes illumination to:",
        options: ["$2\\times$", "$1/2\\times$", "$1/4\\times$", "Unchanged"],
        answer: 2,
        explanation: "$E = I/d^{2}$: doubling $d$ quarters $E$.",
      },
      {
        q: "$1$ footcandle equals about:",
        options: ["$1 \\text{ lux}$", "$10.8 \\text{ lux}$", "$100 \\text{ lux}$", "$0.09 \\text{ lux}$"],
        answer: 1,
        explanation: "$1 \\text{ lm}/\\text{ft}^{2} = 10.76 \\text{ lux}$.",
      },
      {
        q: "A surface tilted $60^{\\circ}$ from the beam normal receives:",
        options: ["Full $E$", "Half $E$", "Zero", "Double $E$"],
        answer: 1,
        explanation: "$\\cos 60^{\\circ} = 0.5$.",
      },
    ],
  },
]

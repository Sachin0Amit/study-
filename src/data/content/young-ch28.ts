import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 28
// Sources of Magnetic Field (Sections 28.1 – 28.8)
// ============================================================================

export const youngCh28Content: SectionContent[] = [
  {
    sectionId: "young-ch28-s1",
    readingTime: 5,
    intro: "Every $\\vec{B}$ comes from moving charge — first the single charge. Young writes the velocity-crossed field of a point charge, the magnetic analogue of Coulomb's law and seed of Biot-Savart.",
    objectives: [
      "State $\\vec{B} = (\\mu_{0}/4\\pi)q\\vec{v} \\times \\hat{r}/r^{2}$",
      "Compare its strength with the charge's electric field",
      "Explain why single-charge fields are usually undetectable",
    ],
    concepts: [
      {
        term: "Field of a moving point charge",
        kind: "law",
        statement: "Charge $q$ at velocity $\\vec{v}$ makes $\\vec{B} = (\\mu_{0}/4\\pi)q\\vec{v} \\times \\hat{r}/r^{2}$: circles around $\\vec{v}$, falling as $1/r^{2}$, with $\\mu_{0}/4\\pi = 10^{-7}\\ \\mathrm{T \\cdot m/A}$ exactly (SI definition).",
        detail: "Ahead/behind ($\\vec{v} \\parallel \\hat{r}$) the field vanishes; broadside it peaks — the magnetic double-lobe.",
      },
      {
        term: "E-to-B ratio",
        kind: "theorem",
        statement: "For the same charge, $B/E = (v/c^{2})\\sin$-factors: $B = (v/c^{2})E$ broadside — magnetism is electricity times $v/c^{2}$ (relativity preview).",
        detail: "A $10^{7}\\ \\mathrm{m/s}$ electron's $B$ is $10^{-10}E$-scale per unit... precisely $v/c^{2} = 1.11 \\times 10^{-10}\\ \\mathrm{s/m}$ times $E$.",
      },
      {
        term: "Undetectable singles",
        kind: "insight",
        statement: "One electron at $1\\ \\mu\\mathrm{m}$ broadside gives $B = 10^{-7}(1.6 \\times 10^{-19})(10^{6})/10^{-12} = 1.6 \\times 10^{-14}\\ \\mathrm{T}$ — femtoteslas need SQUIDs; currents sum $10^{19}$ such fields into teslas.",
        detail: "Magnetism is collective: wires win by numbers, not by single-charge strength.",
      },
      {
        term: "Direction discipline",
        kind: "method",
        statement: "$q\\vec{v}$ plays $I\\vec{l}$'s role: RHR thumb along $q\\vec{v}$ (flip for electrons), fingers curl as $\\vec{B}$ — identical to wire rules per charge.",
        detail: "Proton beams steer with RHR; electron beams mirror it.",
      },
      {
        term: "Permeability constant",
        kind: "notation",
        statement: "$\\mu_{0} = 4\\pi \\times 10^{-7}\\ \\mathrm{T \\cdot m/A}$ fixes magnetic units; $c^{2} = 1/(\\epsilon_{0}\\mu_{0})$ ties $\\mu_{0}$ to $\\epsilon_{0}$ and light speed — Maxwell's synthesis in one product.",
        detail: "2019 SI redefines via fixed $e$ and $h$, but $\\mu_{0}$'s value holds to $10^{-10}$.",
      },
    ],
    examples: [
      {
        title: "Proton's magnetic versus electric field",
        problem: "A proton at $v = 2.00 \\times 10^{7}\\ \\mathrm{m/s}$ passes $r = 1.00 \\times 10^{-10}\\ \\mathrm{m}$ broadside. Find $B$ and $E$ there.",
        steps: [
          { label: "Magnetic", text: "$B = 10^{-7}qv/r^{2} = 10^{-7}(1.602 \\times 10^{-19})(2.00 \\times 10^{7})/10^{-20} = 3.204 \\times 10^{-19}/10^{-20} = 32.04\\ \\mathrm{T}$." },
          { label: "Electric", text: "$E = kq/r^{2} = (8.988 \\times 10^{9})(1.602 \\times 10^{-19})/10^{-20} = 1.44 \\times 10^{11}\\ \\mathrm{V/m}$." },
          { label: "Ratio", text: "$B/E = 32.04/1.44 \\times 10^{11} = 2.22 \\times 10^{-10} = v/c^{2} = 2.00 \\times 10^{7}/9.00 \\times 10^{16}$. Confirmed." },
        ],
        result: "$B = 32\\ \\mathrm{T}$ beside $E = 1.44 \\times 10^{11}\\ \\mathrm{V/m}$ — atomic-scale teslas.",
      },
      {
        title: "Electron beam field",
        problem: "A $1.00\\ \\mu\\mathrm{A}$ beam ($6.24 \\times 10^{12}$ electrons/s at $10^{7}\\ \\mathrm{m/s}$) passes; find $B$ at $1.00\\ \\mathrm{mm}$ broadside via current formula preview $B = \\mu_{0}I/(2\\pi r)$.",
        steps: [
          { label: "Apply", text: "$B = (4\\pi \\times 10^{-7})(10^{-6})/(2\\pi \\times 10^{-3}) = 2.00 \\times 10^{-10}\\ \\mathrm{T}$." },
          { label: "Per electron", text: "Spacing $1.6\\ \\mathrm{m}$ apart (!), each contributes $\\sim 10^{-7}(1.6 \\times 10^{-19})(10^{7})/10^{-6} = 1.6 \\times 10^{-19}\\ \\mathrm{T}$ — summation over $10^{12}$/s makes tenths of a nanotesla." },
          { label: "Lesson", text: "Single charges are femtotesla whispers; beams are collective voices." },
        ],
        result: "$B = 0.200\\ \\mathrm{nT}$ at $1\\ \\mathrm{mm}$ from a microamp beam.",
      },
    ],
    keyTakeaways: [
      "$\\vec{B} = (\\mu_{0}/4\\pi)q\\vec{v} \\times \\hat{r}/r^{2}$: circles around motion, $1/r^{2}$.",
      "$B/E \\sim v/c^{2}$: magnetism is relativity's residue.",
      "Singles are femtoteslas; currents sum moles of them into teslas.",
    ],
    quiz: [
      {
        q: "The magnetic field directly ahead of a moving charge is:",
        options: ["Maximum", "Zero ($\\vec{v} \\times \\hat{r} = 0$)", "Equal to $E/c$", "Infinite"],
        answer: 1,
        explanation: "Parallel cross product vanishes: the double-lobe has nulls fore and aft.",
      },
      {
        q: "$\\mu_{0}$, $\\epsilon_{0}$, and $c$ relate by:",
        options: ["$c^{2} = 1/(\\epsilon_{0}\\mu_{0})$", "$c = \\epsilon_{0}\\mu_{0}$", "$c = \\mu_{0}/\\epsilon_{0}$", "Unrelated"],
        answer: 0,
        explanation: "Maxwell's synthesis: $(8.854 \\times 10^{-12})(4\\pi \\times 10^{-7}) = 1/c^{2}$.",
      },
      {
        q: "Single-charge $B$ fields are undetectable in most labs because:",
        options: ["They do not exist", "One $e$ gives femtoteslas at micron range", "They oscillate too fast", "Vacuum blocks them"],
        answer: 1,
        explanation: "$10^{-7}ev/r^{2} \\sim 10^{-14}\\ \\mathrm{T}$: only collective currents register.",
      },
    ],
  },
  {
    sectionId: "young-ch28-s2",
    readingTime: 5,
    intro: "Summing moving charges over a wire gives the Biot-Savart law — $d\\vec{B} = (\\mu_{0}/4\\pi)I\\,d\\vec{l} \\times \\hat{r}/r^{2}$. Young states it and integrates finite wires, the magnetic twin of Coulomb integration.",
    objectives: [
      "State Biot-Savart with direction and $1/r^{2}$ dependence",
      "Set up $d\\vec{B}$ integrals for straight and curved wires",
      "Check results against symmetry and limits",
    ],
    concepts: [
      {
        term: "Biot-Savart law",
        kind: "law",
        statement: "Current element $I\\,d\\vec{l}$ contributes $d\\vec{B} = (\\mu_{0}/4\\pi)I\\,d\\vec{l} \\times \\hat{r}/r^{2}$; total $\\vec{B} = \\int d\\vec{B}$ sums vectorially over the circuit.",
        detail: "Biot-Savart (1820) measured force between elements; the law is magnetostatics' Coulomb integral.",
      },
      {
        term: "Direction of dB",
        kind: "method",
        statement: "Each $d\\vec{B}$ circles its element by RHR; symmetry cancels components before integration — finite straight wires keep only the azimuthal field.",
        detail: "Grasp the element with thumb along $I$: fingers curl as $d\\vec{B}$ — per-slice circles summed.",
      },
      {
        term: "Finite-wire result",
        kind: "theorem",
        statement: "A finite straight wire gives $B = (\\mu_{0}I/4\\pi a)(\\sin\\theta_{1} + \\sin\\theta_{2})$ at perpendicular distance $a$ ($\\theta$'s from the foot to each end); infinite wires give $\\mu_{0}I/(2\\pi a)$.",
        detail: "Semi-infinite ($\\theta_{1} = 90^{\\circ}$, $\\theta_{2} = 0$) gives half the infinite value — ends cost half the field.",
      },
      {
        term: "Current-loop center",
        kind: "theorem",
        statement: "A full loop radius $R$ gives $B = \\mu_{0}I/(2R)$ at center ($N$ turns: $\\mu_{0}NI/(2R)$); arcs give the fractional $(\\Delta\\phi/2\\pi)$ share.",
        detail: "$100$ turns, $5\\ \\mathrm{cm}$, $2\\ \\mathrm{A}$: $B = 2.51\\ \\mathrm{mT}$ — Helmholtz pairs flatten this into uniform volumes.",
      },
      {
        term: "Biot-Savart versus Coulomb",
        kind: "insight",
        statement: "Both integrate $1/r^{2}$ source bits, but $d\\vec{l} \\times \\hat{r}$ angles make Biot-Savart integrals harder — Ampère's law (Section 28.6) rescues symmetric cases.",
        detail: "Strategy: asymmetric → Biot-Savart; symmetric → Ampère — the chapter's division of labor.",
      },
    ],
    examples: [
      {
        title: "Loop center field",
        problem: "A $200$-turn coil ($R = 0.060\\ \\mathrm{m}$) carries $I = 3.00\\ \\mathrm{A}$. Find center $B$.",
        steps: [
          { label: "Apply", text: "$B = \\mu_{0}NI/(2R) = (4\\pi \\times 10^{-7})(200)(3.00)/(0.120)$." },
          { label: "Numerator", text: "$(1.2566 \\times 10^{-6})(600) = 7.540 \\times 10^{-4}$." },
          { label: "Divide", text: "$7.540 \\times 10^{-4}/0.120 = 6.283 \\times 10^{-3}\\ \\mathrm{T} = 6.28\\ \\mathrm{mT}$." },
        ],
        result: "$B = 6.28\\ \\mathrm{mT}$ at center.",
      },
      {
        title: "Semi-infinite wire end",
        problem: "A semi-infinite wire carries $I = 10.0\\ \\mathrm{A}$. Find $B$ at distance $a = 0.020\\ \\mathrm{m}$ from its endpoint, perpendicular to the wire.",
        steps: [
          { label: "Formula", text: "$B = \\mu_{0}I/(4\\pi a)$ (half the infinite $\\mu_{0}I/(2\\pi a)$)." },
          { label: "Numbers", text: "$(4\\pi \\times 10^{-7})(10.0)/(4\\pi \\times 0.020) = 10^{-7}(10.0)/0.020 = 5.00 \\times 10^{-5}\\ \\mathrm{T}$." },
          { label: "Check", text: "Infinite wire would give $100\\ \\mu\\mathrm{T}$; the missing half-wire costs half. Consistent." },
        ],
        result: "$B = 50.0\\ \\mu\\mathrm{T}$ circling the wire.",
      },
    ],
    keyTakeaways: [
      "$d\\vec{B} = (\\mu_{0}/4\\pi)I\\,d\\vec{l} \\times \\hat{r}/r^{2}$ summed over circuits.",
      "Finite wires: $(\\mu_{0}I/4\\pi a)(\\sin\\theta_{1}+\\sin\\theta_{2})$; loops $\\mu_{0}NI/(2R)$.",
      "Asymmetric → Biot-Savart; symmetric → Ampère.",
    ],
    quiz: [
      {
        q: "Biot-Savart $d\\vec{B}$ direction is:",
        options: ["Along $I\\,d\\vec{l}$", "Along $I\\,d\\vec{l} \\times \\hat{r}$ (RHR)", "Radial from the wire", "Zero always"],
        answer: 1,
        explanation: "The cross product aims each contribution azimuthally around its element.",
      },
      {
        q: "A $90^{\\circ}$ arc of radius $R$ carrying $I$ gives at its center:",
        options: ["$\\mu_{0}I/(2R)$", "$\\mu_{0}I/(8R)$", "Zero", "$\\mu_{0}I/(4R)$"],
        answer: 1,
        explanation: "Quarter of the full loop: $(1/4)\\mu_{0}I/(2R) = \\mu_{0}I/(8R)$.",
      },
      {
        q: "Semi-infinite wire field at its endpoint plane is what fraction of the infinite wire's?",
        options: ["Equal", "Half", "Double", "Zero"],
        answer: 1,
        explanation: "Missing half the source removes half the integral: $\\mu_{0}I/(4\\pi a)$ versus $\\mu_{0}I/(2\\pi a)$.",
      },
    ],
  },
  {
    sectionId: "young-ch28-s3",
    readingTime: 5,
    intro: "The infinite straight wire's $B = \\mu_{0}I/(2\\pi r)$ is magnetostatics' workhorse — compass circles, cable forces, and the ampere's definition all hang on it. Young derives it two ways.",
    objectives: [
      "Derive $B = \\mu_{0}I/(2\\pi r)$ via Biot-Savart and via Ampère",
      "Map circular field lines with RHR direction",
      "Compute wire fields for lab currents",
    ],
    concepts: [
      {
        term: "Straight-wire field",
        kind: "theorem",
        statement: "An infinite straight wire gives $B = \\mu_{0}I/(2\\pi r)$ azimuthally: $10\\ \\mathrm{A}$ makes $20\\ \\mu\\mathrm{T}$ at $10\\ \\mathrm{cm}$ and $2\\ \\mu\\mathrm{T}$ at $1\\ \\mathrm{m}$.",
        detail: "Biot-Savart integrates $(\\sin\\theta_{1}+\\sin\\theta_{2}}) \\to 2$; Ampère's loop reads it in one line (Section 28.6).",
      },
      {
        term: "Circular field pattern",
        kind: "insight",
        statement: "Lines are concentric circles (RHR grasp): no beginning or end — the visual proof that $\\oint \\vec{B} \\cdot d\\vec{l} \\ne 0$ around currents (Ampère preview).",
        detail: "Compasses ring a live wire like numbers on a clock — Oersted's pattern quantified.",
      },
      {
        term: "1/r falloff meaning",
        kind: "law",
        statement: "$B \\propto 1/r$ (not $1/r^{2}$) because the wire's endless current keeps supplying nearby source — dimensional reduction softens decay, as with electric lines.",
        detail: "Line sources ($1/r$) beat point sources ($1/r^{2}$) at range — power-line fields reach farther than appliance dipoles.",
      },
      {
        term: "Two-wire cancellation",
        kind: "method",
        statement: "Go-and-return pairs (cables, twisted pairs) nearly cancel: opposite $I$'s give $B \\approx \\mu_{0}Id/(2\\pi r^{2})$ dipole-like — twisting shrinks loop area and radiation.",
        detail: "Mains cords are quiet because supply and return co-locate; separated rails (busbars) hum loudly.",
      },
      {
        term: "Lab benchmark",
        kind: "notation",
        statement: "$1\\ \\mathrm{A}$ at $1\\ \\mathrm{cm}$ gives $20\\ \\mu\\mathrm{T}$ — comparable to Earth's field: ampere-scale currents visibly swing compasses at hand range.",
        detail: "Deflection compasses calibrated this way once defined current absolutely.",
      },
    ],
    figures: [
      {
        caption: "Straight wire: concentric $\\vec{B}$ circles with $B = \\mu_{0}I/(2\\pi r)$ — grasp the wire (thumb $I$), fingers curl as $\\vec{B}$.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circular field around straight wire"><line x1="200" y1="10" x2="200" y2="160" stroke="currentColor" stroke-width="3"/><polygon points="194,10 200,0 206,10" fill="currentColor"/><text x="208" y="30" font-size="12" fill="currentColor">I</text><g fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="200" cy="90" rx="30" ry="18"/><ellipse cx="200" cy="90" rx="60" ry="36"/><ellipse cx="200" cy="90" rx="90" ry="54" opacity="0.5"/></g><text x="290" y="100" font-size="12" fill="currentColor">B ∝ 1/r</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Wire versus Earth",
        problem: "How close to a $5.00\\ \\mathrm{A}$ wire does its field equal Earth's $50.0\\ \\mu\\mathrm{T}$?",
        steps: [
          { label: "Set equal", text: "$\\mu_{0}I/(2\\pi r) = 50.0 \\times 10^{-6}$." },
          { label: "Solve", text: "$r = \\mu_{0}I/(2\\pi \\times 50.0 \\times 10^{-6}) = (2.00 \\times 10^{-7})(5.00)/50.0 \\times 10^{-6} = 10^{-6}/50.0 \\times 10^{-6} = 0.020\\ \\mathrm{m}$." },
          { label: "Meaning", text: "Within $2\\ \\mathrm{cm}$ the wire dominates; beyond, Earth wins — compass placement matters." },
        ],
        result: "$r = 2.00\\ \\mathrm{cm}$ crossover.",
      },
      {
        title: "Busbar field",
        problem: "A busbar carries $2000\\ \\mathrm{A}$. Find $B$ at $r = 0.050\\ \\mathrm{m}$.",
        steps: [
          { label: "Apply", text: "$B = (2.00 \\times 10^{-7})(2000)/0.050 = 4.00 \\times 10^{-4}/0.050 = 8.00 \\times 10^{-3}\\ \\mathrm{T}$." },
          { label: "Scale", text: "$8\\ \\mathrm{mT}$ — $160$ times Earth's field: steel tools feel it." },
          { label: "Force preview", text: "A parallel return bar feels $F/L = \\mu_{0}I^{2}/(2\\pi d)$ — Section 28.4's headline." },
        ],
        result: "$B = 8.00\\ \\mathrm{mT}$.",
      },
    ],
    keyTakeaways: [
      "$B = \\mu_{0}I/(2\\pi r)$ circling by RHR grasp rule.",
      "Lines are endless circles; $1/r$ outranges $1/r^{2}$ sources.",
      "Go-return pairs cancel to dipole order — twist to quiet.",
    ],
    quiz: [
      {
        q: "Doubling distance from a straight wire changes $B$ by:",
        options: ["$1/4$", "$1/2$", "$2$ times", "Unchanged"],
        answer: 1,
        explanation: "$B \\propto 1/r$: double $r$, halve $B$.",
      },
      {
        q: "Field circles around a wire prove:",
        options: ["$\\vec{B}$ has sources", "Circulation $\\oint \\vec{B} \\cdot d\\vec{l}$ is nonzero around current", "Wires are charged", "Compasses are broken"],
        answer: 1,
        explanation: "Closed $\\vec{B}$ loops give nonzero line integrals — Ampère's law in picture form.",
      },
      {
        q: "Twisted-pair wiring reduces magnetic interference because:",
        options: ["It raises current", "Opposite currents co-locate and cancel to dipole order", "It blocks electric fields", "Copper changes $\\mu_{0}$"],
        answer: 1,
        explanation: "Adjacent opposite $I$'s nearly superpose to zero; twisting alternates residual loop polarity.",
      },
    ],
  },
  {
    sectionId: "young-ch28-s4",
    readingTime: 4,
    intro: "Current-carrying wires push each other through each other's fields — attraction for parallel, repulsion for antiparallel. Young computes $F/L = \\mu_{0}I_{1}I_{2}/(2\\pi d)$ and shows how it once defined the ampere.",
    objectives: [
      "Derive $F/L = \\mu_{0}I_{1}I_{2}/(2\\pi d)$ for parallel wires",
      "Predict attraction versus repulsion from current senses",
      "Explain the pre-2019 ampere definition",
    ],
    concepts: [
      {
        term: "Force between parallel currents",
        kind: "theorem",
        statement: "Parallel wires ($I_{1}$, $I_{2}$, separation $d$) attract with $F/L = \\mu_{0}I_{1}I_{2}/(2\\pi d)$; antiparallel repel — each wire's $I\\vec{l} \\times \\vec{B}_{\\mathrm{other}}$.",
        detail: "$100\\ \\mathrm{A}$ each at $10\\ \\mathrm{cm}$: $F/L = 0.020\\ \\mathrm{N/m}$ — busbars need bracing.",
      },
      {
        term: "Attraction logic",
        kind: "insight",
        statement: "Parallel currents make opposing $\\vec{B}$'s between them (cancellation) and reinforcing $\\vec{B}$'s outside — field energy minimizes by pulling wires together (like currents attract).",
        detail: "Antiparallel reverses it: strong field between pushes apart — unlike charges' logic inverted.",
      },
      {
        term: "Ampere definition (pre-2019)",
        kind: "notation",
        statement: "Until 2019, $1\\ \\mathrm{A}$ was the current making $F/L = 2 \\times 10^{-7}\\ \\mathrm{N/m}$ between $1\\ \\mathrm{m}$-spaced wires — fixing $\\mu_{0}/4\\pi = 10^{-7}$ exactly.",
        detail: "Since 2019 the ampere counts electrons ($1.602 \\times 10^{-19}\\ \\mathrm{C}$ exact); $\\mu_{0}$ is measured, holding $10^{-7}$ to $10^{-10}$.",
      },
      {
        term: "Rail forces",
        kind: "method",
        statement: "Opposite rails of a loop repel with $F/L$ above; multi-turn coils feel $N^{2}$-scaled bursting forces — MRI windings pre-stress against tesla-scale $I\\vec{l} \\times \\vec{B}$.",
        detail: "$500\\ \\mathrm{A}$ in $3\\ \\mathrm{T}$ feels $1500\\ \\mathrm{N/m}$ per wire — tons across a magnet bore.",
      },
      {
        term: "Action-reaction check",
        kind: "law",
        statement: "Forces are equal, opposite, and collinear: $\\vec{F}_{12} = -\\vec{F}_{21}$ — Newton's third law survives field mediation with field momentum balancing transients.",
        detail: "Static cases show it directly; pulsed cases hide momentum in $\\vec{E} \\times \\vec{B}$ flow.",
      },
    ],
    examples: [
      {
        title: "Jumper-cable pinch",
        problem: "Jumper cables carry $I = 150\\ \\mathrm{A}$ oppositely (go-return) spaced $d = 0.020\\ \\mathrm{m}$. Find repulsion per meter.",
        steps: [
          { label: "Apply", text: "$F/L = \\mu_{0}I^{2}/(2\\pi d) = (2.00 \\times 10^{-7})(22500)/0.020$." },
          { label: "Numerator", text: "$(2.00 \\times 10^{-7})(22500) = 4.50 \\times 10^{-3}$." },
          { label: "Divide", text: "$4.50 \\times 10^{-3}/0.020 = 0.225\\ \\mathrm{N/m}$ repulsive." },
        ],
        result: "$0.225\\ \\mathrm{N/m}$ pushing the cables apart.",
      },
      {
        title: "Defining current",
        problem: "What current in both $1\\ \\mathrm{m}$-spaced wires gives $F/L = 2.00 \\times 10^{-7}\\ \\mathrm{N/m}$?",
        steps: [
          { label: "Invert", text: "$I^{2} = (F/L)(2\\pi d)/\\mu_{0} = (2.00 \\times 10^{-7})(2\\pi \\times 1)/(4\\pi \\times 10^{-7}) = 1.00$." },
          { label: "Current", text: "$I = 1.00\\ \\mathrm{A}$ — the pre-2019 definition realized." },
          { label: "Modern view", text: "Today $1\\ \\mathrm{A} = 6.2415 \\times 10^{18}$ electrons/s; the force follows." },
        ],
        result: "$I = 1.00\\ \\mathrm{A}$ by the old definition.",
      },
    ],
    keyTakeaways: [
      "$F/L = \\mu_{0}I_{1}I_{2}/(2\\pi d)$: parallel attract, antiparallel repel.",
      "Old ampere: $2 \\times 10^{-7}\\ \\mathrm{N/m}$ at $1\\ \\mathrm{m}$; new ampere counts electrons.",
      "Coil bursting forces scale $N^{2}$ — magnets are pressure vessels.",
    ],
    quiz: [
      {
        q: "Two wires with opposite currents:",
        options: ["Attract", "Repel", "Feel nothing", "Twist into helices"],
        answer: 1,
        explanation: "Each $I\\vec{l} \\times \\vec{B}_{\\mathrm{other}}$ points outward — antiparallel repels.",
      },
      {
        q: "Doubling both currents and halving separation changes $F/L$ by:",
        options: ["$2$ times", "$8$ times", "$4$ times", "Unchanged"],
        answer: 1,
        explanation: "$F/L \\propto I_{1}I_{2}/d$: $2 \\times 2 / (1/2) = 8$.",
      },
      {
        q: "The pre-2019 ampere fixed:",
        options: ["$e$ exactly", "$\\mu_{0}/4\\pi = 10^{-7}$ via wire force", "The speed of light", "Planck's constant"],
        answer: 1,
        explanation: "Force between standard wires defined current; 2019 inverted this to fix $e$.",
      },
    ],
  },
  {
    sectionId: "young-ch28-s5",
    readingTime: 5,
    intro: "Loops make dipoles: Young integrates Biot-Savart on the loop axis to get $B_{x} = \\mu_{0}Ia^{2}/[2(x^{2}+a^{2})^{3/2}]$ and shows the far field is a dipole $\\mu_{0}\\mu/(2\\pi x^{3})$.",
    objectives: [
      "Derive the on-axis loop field",
      "Take center and far-field (dipole) limits",
      "Superpose loops into Helmholtz pairs",
    ],
    concepts: [
      {
        term: "Loop axis field",
        kind: "theorem",
        statement: "Radius-$a$ loop, current $I$: $B_{x} = \\mu_{0}Ia^{2}/[2(x^{2}+a^{2})^{3/2}]$ on axis — maximum $\\mu_{0}I/(2a)$ at center, falling symmetric both ways.",
        detail: "Every $I\\,d\\vec{l}$ contributes equal axial projection; transverse parts cancel pairwise.",
      },
      {
        term: "Dipole far field",
        kind: "law",
        statement: "For $x \\gg a$, $B_{x} \\approx \\mu_{0}Ia^{2}/(2x^{3}) = \\mu_{0}\\mu/(2\\pi x^{3})$ with $\\mu = I\\pi a^{2}$: loops are $1/x^{3}$ dipoles, like electric dipoles' $1/r^{3}$.",
        detail: "Bar magnets share this far field — same multipole, different source (spin alignment versus current).",
      },
      {
        term: "Helmholtz coils",
        kind: "method",
        statement: "Two loops separated by $a$ (each radius $a$) cancel $d^{2}B/dx^{2}$ at center, giving a uniform volume ($\\sim 1$ percent over $a/3$) with $B = (8/5\\sqrt{5})\\mu_{0}NI/a$.",
        detail: "CRT labs and bioelectromagnetics bathe samples in Helmholtz uniformity.",
      },
      {
        term: "Multi-turn scaling",
        kind: "notation",
        statement: "$N$ turns multiply $B$ by $N$ (same $a$, stacked): $B_{x} = \\mu_{0}NIa^{2}/[2(x^{2}+a^{2})^{3/2}]$ — ampere-turns $NI$ price magnet strength.",
        detail: "$1000$ turns at $1\\ \\mathrm{A}$ match $1$ turn at $1000\\ \\mathrm{A}$ (minus $I^{2}R$ differences).",
      },
      {
        term: "Off-axis complexity",
        kind: "insight",
        statement: "Off-axis loop fields need elliptic integrals — no elementary form — which is why solenoid interiors use Ampère instead.",
        detail: "Numerics or series expansions handle fringe fields; symmetry handles the axis.",
      },
    ],
    figures: [
      {
        caption: "Loop axis field peaks at center ($\\mu_{0}I/2a$) and relaxes to dipole $\\mu_{0}\\mu/(2\\pi x^{3})$ far away.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Loop axis field profile"><line x1="40" y1="140" x2="380" y2="140" stroke="currentColor" stroke-width="1.5"/><line x1="200" y1="140" x2="200" y2="20" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><ellipse cx="200" cy="90" rx="14" ry="50" fill="none" stroke="currentColor" stroke-width="2"/><path d="M60,135 Q140,130 185,60 Q200,40 215,60 Q260,130 340,135" fill="none" stroke="currentColor" stroke-width="2"/><text x="230" y="60" font-size="12" fill="currentColor">Bx peak center</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Single loop numbers",
        problem: "Loop $a = 0.050\\ \\mathrm{m}$, $I = 4.00\\ \\mathrm{A}$. Find $B$ at center and at $x = 0.200\\ \\mathrm{m}$.",
        steps: [
          { label: "Center", text: "$B = \\mu_{0}I/(2a) = (4\\pi \\times 10^{-7})(4.00)/0.100 = 5.027 \\times 10^{-5}\\ \\mathrm{T} = 50.3\\ \\mu\\mathrm{T}$." },
          { label: "Off-axis", text: "$x^{2}+a^{2} = 0.04+0.0025 = 0.0425$; $(0.0425)^{3/2} = 8.764 \\times 10^{-3}$. $B = (4\\pi \\times 10^{-7})(4.00)(0.0025)/(2 \\times 8.764 \\times 10^{-3}) = 1.257 \\times 10^{-8}/0.01753 = 7.17 \\times 10^{-7}\\ \\mathrm{T}$." },
          { label: "Dipole check", text: "$\\mu_{0}\\mu/(2\\pi x^{3}) = (2 \\times 10^{-7})(4\\pi \\times 0.0025)/0.008 = 7.85 \\times 10^{-7}$ — within $10$ percent at $4$ radii." },
        ],
        result: "$50.3\\ \\mu\\mathrm{T}$ center; $0.717\\ \\mu\\mathrm{T}$ at $20\\ \\mathrm{cm}$.",
      },
      {
        title: "Helmholtz center field",
        problem: "Helmholtz pair: $N = 100$ each, $a = 0.150\\ \\mathrm{m}$, $I = 2.00\\ \\mathrm{A}$. Find center $B$.",
        steps: [
          { label: "Formula", text: "$B = (8/5\\sqrt{5})\\mu_{0}NI/a = 0.7155(4\\pi \\times 10^{-7})(200)/0.150$." },
          { label: "Numerator", text: "$0.7155(1.2566 \\times 10^{-6})(200) = 1.798 \\times 10^{-4}$." },
          { label: "Divide", text: "$1.798 \\times 10^{-4}/0.150 = 1.199 \\times 10^{-3}\\ \\mathrm{T} = 1.20\\ \\mathrm{mT}$." },
        ],
        result: "$B = 1.20\\ \\mathrm{mT}$ uniform at center.",
      },
    ],
    keyTakeaways: [
      "$B_{x} = \\mu_{0}Ia^{2}/[2(x^{2}+a^{2})^{3/2}]$: peaked center, symmetric fall.",
      "Far field $\\mu_{0}\\mu/(2\\pi x^{3})$: every loop is a dipole.",
      "Helmholtz spacing ($d = a$) flattens the center volume.",
    ],
    quiz: [
      {
        q: "Loop center field scales with radius as:",
        options: ["$1/a^{2}$", "$1/a$", "$a$", "$a^{2}$"],
        answer: 1,
        explanation: "$B = \\mu_{0}I/(2a)$: smaller loops concentrate harder at fixed $I$.",
      },
      {
        q: "Far on axis, a current loop's field falls as:",
        options: ["$1/x^{2}$", "$1/x^{3}$", "$1/x$", "Constant"],
        answer: 1,
        explanation: "Dipole far field $\\mu_{0}\\mu/(2\\pi x^{3})$ — $+I$/$-I$ sides nearly cancel.",
      },
      {
        q: "Helmholtz coils space loops by:",
        options: ["Zero gap", "One radius", "Ten radii", "Half wavelength"],
        answer: 1,
        explanation: "$d = a$ zeros the second derivative, maximizing uniform volume.",
      },
    ],
  },
  {
    sectionId: "young-ch28-s6",
    readingTime: 5,
    intro: "Ampère's law — circulation equals $\\mu_{0}$ times enclosed current — is Gauss's magnetic twin. Young states it, explains the RHR sign rule, and shows when symmetry makes it a calculator.",
    objectives: [
      "State $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_{0}I_{\\mathrm{enc}}$",
      "Apply the RHR sign rule for enclosed currents",
      "Distinguish useful (symmetric) from useless (lumpy) applications",
    ],
    concepts: [
      {
        term: "Ampère's law",
        kind: "law",
        statement: "For any closed loop, $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_{0}I_{\\mathrm{enc}}$: circulation counts net current threading the loop (vacuum magnetostatics).",
        detail: "Steady currents only here; changing $\\vec{E}$ adds displacement current in Section 29.7.",
      },
      {
        term: "Sign rule",
        kind: "method",
        statement: "Curl RHR fingers with loop traversal: thumb is $+$ current; opposing currents subtract — $I_{\\mathrm{enc}}$ is algebraic, like $Q_{\\mathrm{enc}}$.",
        detail: "Go-return pairs threading once each cancel to zero circulation — twisted pairs are Ampère-quiet.",
      },
      {
        term: "When Ampère computes",
        kind: "insight",
        statement: "Ampère extracts $B$ only when symmetry makes $|B|$ constant on the loop with fixed angle to $d\\vec{l}$: straight wires, solenoids, toroids — elsewhere it is true but barren.",
        detail: "Gauss's electric twin has the same bargain: symmetry is the price of one-line fields.",
      },
      {
        term: "Circulation versus flux",
        kind: "notation",
        statement: "Ampère integrates tangential $\\vec{B}$ around loops (circulation); Gauss integrates normal $\\vec{B}$ over surfaces (flux $= 0$) — complementary projections of one field.",
        detail: "Stokes' theorem will marry circulation to $\\nabla \\times \\vec{B} = \\mu_{0}\\vec{J}$ — the differential form.",
      },
      {
        term: "Outside currents",
        kind: "definition",
        statement: "Currents outside the loop shape $\\vec{B}$ on it but contribute zero net circulation — entry-exit cancellation exactly as in Gauss's law.",
        detail: "A kiloamp centimeter outside adds $0$ to $\\oint \\vec{B} \\cdot d\\vec{l}$.",
      },
    ],
    examples: [
      {
        title: "Loop around two wires",
        problem: "An Ampèrian loop encircles $I_{1} = +8.00\\ \\mathrm{A}$ (with traversal) and $I_{2} = -3.00\\ \\mathrm{A}$ (against). Find circulation.",
        steps: [
          { label: "Enclosed", text: "$I_{\\mathrm{enc}} = 8.00 - 3.00 = +5.00\\ \\mathrm{A}$." },
          { label: "Circulation", text: "$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_{0}(5.00) = (4\\pi \\times 10^{-7})(5.00) = 6.283 \\times 10^{-6}\\ \\mathrm{T \\cdot m}$." },
          { label: "Outside note", text: "A $100\\ \\mathrm{A}$ busbar outside the loop adds exactly $0$." },
        ],
        result: "$6.28\\ \\mu\\mathrm{T \\cdot m}$ circulation.",
      },
      {
        title: "Zero-circulation loop",
        problem: "A loop threads a coaxial cable's inner ($+I$) and outer ($-I$) currents. Find $\\oint \\vec{B} \\cdot d\\vec{l}$ outside the cable.",
        steps: [
          { label: "Enclosed", text: "$I_{\\mathrm{enc}} = I - I = 0$." },
          { label: "Circulation", text: "$\\oint \\vec{B} \\cdot d\\vec{l} = 0$ — and symmetry forces $B = 0$ outside ideal coax." },
          { label: "Shielding", text: "Coax confines its field between conductors — quiet cables by Ampère design." },
        ],
        result: "Zero circulation; zero external field.",
      },
    ],
    keyTakeaways: [
      "$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_{0}I_{\\mathrm{enc}}$ with RHR-signed currents.",
      "Outside currents add zero; symmetry unlocks $B$ extraction.",
      "Circulation (Ampère) complements flux (Gauss $= 0$).",
    ],
    quiz: [
      {
        q: "Ampèrian loop encircling $+5\\ \\mathrm{A}$ and $-5\\ \\mathrm{A}$ gives circulation:",
        options: ["$10\\mu_{0}$", "Zero", "$5\\mu_{0}$", "Infinite"],
        answer: 1,
        explanation: "$I_{\\mathrm{enc}} = 5 - 5 = 0$: algebraic threading counts signs.",
      },
      {
        q: "Ampère's law yields $B$ directly only when:",
        options: ["Currents are large", "Symmetry makes $|B|$ uniform on the loop", "Loops are small", "Wires are short"],
        answer: 1,
        explanation: "Factoring $B$ out of $\\oint \\vec{B} \\cdot d\\vec{l}$ needs constant magnitude and angle.",
      },
      {
        q: "The steady-current restriction exists because:",
        options: ["Batteries die", "Changing electric fields add displacement current (Section 29.7)", "Wires melt", "Compasses lag"],
        answer: 1,
        explanation: "Maxwell-Ampère adds $\\mu_{0}\\epsilon_{0}\\,d\\Phi_{E}/dt$ for time-varying fields.",
      },
    ],
  },
  {
    sectionId: "young-ch28-s7",
    readingTime: 6,
    intro: "Solenoids and toroids turn Ampère's law into uniform-field factories. Young derives $B = \\mu_{0}nI$ inside solenoids, the confined toroid field, and prices lab and MRI magnets.",
    objectives: [
      "Derive solenoid $B = \\mu_{0}nI$ with edge and finiteness notes",
      "Derive toroid $B = \\mu_{0}NI/(2\\pi r)$ and confinement",
      "Compute turns and currents for target fields",
    ],
    concepts: [
      {
        term: "Solenoid field",
        kind: "theorem",
        statement: "A long solenoid ($n$ turns/m) has $B = \\mu_{0}nI$ uniform inside, $\u2248 0$ outside: rectangular Ampèrian loop catches $nLI$ with flux $BL$ through length $L$.",
        detail: "$n = 1000/\\mathrm{m}$, $I = 2\\ \\mathrm{A}$ gives $B = 2.51\\ \\mathrm{mT}$ — lab fields from modest windings.",
      },
      {
        term: "Toroid field",
        kind: "theorem",
        statement: "An $N$-turn toroid gives $B = \\mu_{0}NI/(2\\pi r)$ inside the doughnut, zero outside: circular loops thread all $N$ turns with circumference $2\\pi r$.",
        detail: "$N = 500$, $I = 3\\ \\mathrm{A}$, $r = 0.10\\ \\mathrm{m}$: $B = 3.00\\ \\mathrm{mT}$ — confined, stray-free.",
      },
      {
        term: "Confinement logic",
        kind: "insight",
        statement: "Toroids trap all flux in the core (no ends, no fringe); solenoids leak at mouths ($B_{\\mathrm{end}} \\approx \\mu_{0}nI/2$) — fusion tokamaks are toroids for this reason.",
        detail: "Fringe fields steer beams unintentionally; toroids keep none outside.",
      },
      {
        term: "Design scaling",
        kind: "method",
        statement: "Ampere-turns $NI$ set $B$; $I^{2}R$ sets heat: superconducting $NI$ ($10^{5}$–$10^{6}$) reaches teslas without megawatts — MRI at $1.5\\ \\mathrm{T}$ needs $\\sim 10^{6}$ ampere-turns.",
        detail: "Copper $1\\ \\mathrm{T}$ solenoids drink $\\sim 10\\ \\mathrm{MW}$; NbTi sips cryogenics instead.",
      },
      {
        term: "Field uniformity limits",
        kind: "notation",
        statement: "Finite solenoids vary $\\sim (D/L)^{2}$ at center; precision NMR adds shim coils canceling gradients to $10^{-9}$ — homogeneity is engineered, not assumed.",
        detail: "Long-thin ($L \\gg D$) wins uniformity; short-fat wins access — magnet design trades both.",
      },
    ],
    figures: [
      {
        caption: "Solenoid: rectangular loop catches $nLI$ giving $B = \\mu_{0}nI$ inside; toroid: circular loop gives $B = \\mu_{0}NI/(2\\pi r)$, zero outside.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Solenoid and toroid Ampere loops"><g fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="110" cy="85" rx="18" ry="45"/><ellipse cx="140" cy="85" rx="18" ry="45"/><ellipse cx="170" cy="85" rx="18" ry="45"/></g><rect x="95" y="110" width="90" height="35" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/><ellipse cx="310" cy="85" rx="55" ry="45" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="310" cy="85" rx="25" ry="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/><text x="95" y="160" font-size="11" fill="currentColor">B=μ0nI</text><text x="280" y="160" font-size="11" fill="currentColor">B=μ0NI/2πr</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Lab solenoid",
        problem: "Wind $n = 800/\\mathrm{m}$ carrying $I = 3.50\\ \\mathrm{A}$. Find inside $B$.",
        steps: [
          { label: "Apply", text: "$B = \\mu_{0}nI = (4\\pi \\times 10^{-7})(800)(3.50)$." },
          { label: "Multiply", text: "$(1.2566 \\times 10^{-6})(2800) = 3.519 \\times 10^{-3}\\ \\mathrm{T}$." },
          { label: "Scale", text: "$3.52\\ \\mathrm{mT}$ — $70$ times Earth's field, uniform and cheap." },
        ],
        result: "$B = 3.52\\ \\mathrm{mT}$ inside.",
      },
      {
        title: "Toroid confinement check",
        problem: "Toroid $N = 400$, $I = 5.00\\ \\mathrm{A}$, mean $r = 0.120\\ \\mathrm{m}$. Find $B$ inside and state outside.",
        steps: [
          { label: "Inside", text: "$B = \\mu_{0}NI/(2\\pi r) = (4\\pi \\times 10^{-7})(2000)/(0.7540) = 2.513 \\times 10^{-3}/0.7540 = 3.333 \\times 10^{-3}\\ \\mathrm{T}$." },
          { label: "Outside", text: "$B = 0$ (ideal): loops outside enclose net zero turns." },
          { label: "Variation", text: "Inner wall ($r = 0.10$) runs $20$ percent hotter than outer ($0.14$) — $1/r$ across the bore." },
        ],
        result: "$3.33\\ \\mathrm{mT}$ mean inside; zero outside.",
      },
    ],
    keyTakeaways: [
      "Solenoid $B = \\mu_{0}nI$ inside, $\u2248 0$ outside (long ideal).",
      "Toroid $B = \\mu_{0}NI/(2\\pi r)$ inside, $0$ outside — perfect confinement.",
      "Ampere-turns set $B$; superconductors reach teslas without megawatts.",
    ],
    quiz: [
      {
        q: "Doubling both $n$ and $I$ in a solenoid changes $B$ by:",
        options: ["$2$ times", "$4$ times", "Unchanged", "$1/2$"],
        answer: 1,
        explanation: "$B = \\mu_{0}nI \\propto nI$: $2 \\times 2 = 4$.",
      },
      {
        q: "Toroid exterior field is zero because:",
        options: ["Iron blocks it", "External loops enclose zero net turns", "Current is DC", "Toroids have no field anywhere"],
        answer: 1,
        explanation: "$I_{\\mathrm{enc}} = NI - NI = 0$ outside (or zero turns threaded): Ampère reports no circulation.",
      },
      {
        q: "Solenoid end field is about:",
        options: ["Equal to center", "Half the center value", "Double", "Zero"],
        answer: 1,
        explanation: "Half the turns effectively contribute at the mouth: $B_{\\mathrm{end}} \\approx \\mu_{0}nI/2$.",
      },
    ],
  },
  {
    sectionId: "young-ch28-s8",
    readingTime: 5,
    intro: "Why is iron magnetic? Domains, hysteresis, and the Curie point complete the story: Young classifies paramagnets, diamagnets, and ferromagnets and reads $B$-$H$ loops quantitatively.",
    objectives: [
      "Distinguish paramagnetic, diamagnetic, and ferromagnetic response",
      "Read hysteresis loops (saturation, remanence, coercivity)",
      "Explain domains and Curie-temperature disordering",
    ],
    concepts: [
      {
        term: "Three magnetic classes",
        kind: "definition",
        statement: "**Paramagnets** ($\\chi_{m} > 0$, tiny) align moments weakly; **diamagnets** ($\\chi_{m} < 0$, tiny) oppose via Lenz-like orbital response; **ferromagnets** ($\\chi_{m} \\gg 1$, nonlinear) lock alignment spontaneously.",
        detail: "Aluminum $+2 \\times 10^{-5}$, copper $-1 \\times 10^{-5}$, iron $+10^{3}$–$10^{5}$ — eight orders between weak and strong.",
      },
      {
        term: "Domains",
        kind: "insight",
        statement: "Ferromagnets split into **domains** (micron Weiss regions) magnetized to saturation in random directions; external $\\vec{B}$ grows aligned domains at walls' expense — magnetization as boundary motion.",
        detail: "Demagnetized iron sums to zero net moment; Barkhausen clicks count wall jumps discretely.",
      },
      {
        term: "Hysteresis loop",
        kind: "method",
        statement: "Cycling $H$ traces $B$: **saturation** (all aligned), **remanence** $B_{r}$ (memory at $H = 0$), **coercivity** $H_{c}$ (reverse field erasing it) — loop area is energy lost per cycle.",
        detail: "Hard magnets (NdFeB: $H_{c} \\sim 10^{6}\\ \\mathrm{A/m}$) keep memory; soft iron ($H_{c} \\sim 10\\ \\mathrm{A/m}$) resets for transformers.",
      },
      {
        term: "Curie temperature",
        kind: "law",
        statement: "Above $T_{C}$ ($1043\\ \\mathrm{K}$ Fe, $1388\\ \\mathrm{K}$ Co, $627\\ \\mathrm{K}$ Ni) thermal agitation beats exchange coupling: ferromagnets turn paramagnetic — order melts at a second-order transition.",
        detail: "Heat a nail past orange glow and it stops attracting magnets; cooling restores domains.",
      },
      {
        term: "Permeability and B-H",
        kind: "notation",
        statement: "$\\vec{B} = \\mu\\vec{H}$ with $\\mu = K_{m}\\mu_{0}$ ($K_{m} = 1 + \\chi_{m}$): vacuum $K_{m} = 1$, transformer steel $K_{m} \\sim 10^{4}$ — flux concentrates $10^{4}$-fold in cores.",
        detail: "Toroid inductance scales $K_{m}$-fold with cores — Chapter 30's payoff.",
      },
    ],
    examples: [
      {
        title: "Core flux concentration",
        problem: "An air toroid gives $B_{0} = 2.00\\ \\mathrm{mT}$. Inserting silicon steel ($K_{m} = 5000$) at fixed $NI$: find $B$.",
        steps: [
          { label: "Scale", text: "$B = K_{m}B_{0} = 5000(2.00 \\times 10^{-3}) = 10.0\\ \\mathrm{T}$?? — unreal: saturation caps steel at $\\sim 2\\ \\mathrm{T}$." },
          { label: "Saturation", text: "Real $B \\approx 1.8\\ \\mathrm{T}$: linear $K_{m}$ fails near saturation — $B$-$H$ curves bend flat." },
          { label: "Lesson", text: "$K_{m}$ prices small-signal response; saturation sets large-signal ceilings." },
        ],
        result: "Linear predicts $10\\ \\mathrm{T}$; saturation caps at $\\sim 2\\ \\mathrm{T}$.",
      },
      {
        title: "Hysteresis energy loss",
        problem: "A transformer core ($V = 0.020\\ \\mathrm{m^{3}}$) has loop area $500\\ \\mathrm{J/m^{3}}$ per cycle at $60\\ \\mathrm{Hz}$. Find core power loss.",
        steps: [
          { label: "Per cycle", text: "$(500)(0.020) = 10.0\\ \\mathrm{J}$ per loop." },
          { label: "Power", text: "$P = 10.0(60) = 600\\ \\mathrm{W}$ of heat — laminated thin sheets plus soft alloys shrink the loop." },
          { label: "Why laminate", text: "Thin insulation breaks eddy paths (Section 29.6) while soft $H_{c}$ narrows hysteresis — both losses attacked." },
        ],
        result: "$600\\ \\mathrm{W}$ hysteresis heat.",
      },
    ],
    keyTakeaways: [
      "Para ($+$tiny), dia ($-$tiny), ferro (huge nonlinear) classify response.",
      "Domains align via wall motion; $T_{C}$ melts order thermally.",
      "Hysteresis $B_{r}$/$H_{c}$ price memory; loop area is loss per cycle.",
    ],
    quiz: [
      {
        q: "Heating iron above $1043\\ \\mathrm{K}$ makes it:",
        options: ["More magnetic", "Paramagnetic (domains disorder)", "Superconducting", "Permanently demagnetized at all $T$"],
        answer: 1,
        explanation: "$T_{C}$ breaks exchange alignment; cooling restores ferromagnetism — reversible transition.",
      },
      {
        q: "Large loop area (hard magnet) is wanted for:",
        options: ["Transformers", "Permanent memories/magnets (high $B_{r}$, $H_{c}$)", "AC cores", "Shielding"],
        answer: 1,
        explanation: "Hard loops resist erasure; soft narrow loops minimize $60\\ \\mathrm{Hz}$ losses.",
      },
      {
        q: "Diamagnetism arises from:",
        options: ["Permanent moments aligning", "Induced orbital currents opposing $\\vec{B}$ (Lenz-like)", "Domains", "Nuclear spins only"],
        answer: 1,
        explanation: "Field-induced circulation creates opposing moments in all matter — universal but tiny.",
      },
    ],
  },
]

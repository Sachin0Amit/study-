import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 18: Electric Potential (Sections 18.1 – 18.4)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh18Content: SectionContent[] = [
  {
    sectionId: "coletta-ch18-s1",
    readingTime: 7,
    intro: "Potential generalizes the hill-and-valley thinking of gravitational energy to charges. Coletta defines potential energy $U = qV$, computes the point-charge potential $V = kq/r$, and shows how voltages steer every charge without vector sums. Equipotentials map the terrain.",
    objectives: [
      "Relate potential energy, potential, and work through $U = qV$ and $W = -\\Delta U$",
      "Compute $V = kq/r$ and superpose potentials as scalars",
      "Use equipotentials and $E_{x} = -\\Delta V/\\Delta x$ to find fields and motion"
    ],
    concepts: [
      {
        term: "Electric potential energy",
        kind: "definition",
        statement: "A charge $q$ at potential $V$ holds **potential energy** $U = qV$ in joules, and the field does work $W = -\\Delta U = -q\\Delta V$ moving it.",
        detail: "Positive charges roll downhill toward lower $V$ while negative charges roll uphill toward higher $V$, both losing $U$ and gaining kinetic energy."
      },
      {
        term: "Electric potential",
        kind: "definition",
        statement: "**Potential** $V = U/q$ in volts (J/C) is the energy per unit positive charge, with $1$ eV $= 1.60 \\times 10^{-19}$ J as the atomic energy coin.",
        detail: "A $12$ V battery gives each coulomb $12$ J and each electron $12$ eV of energy per traversal."
      },
      {
        term: "Point-charge potential",
        kind: "theorem",
        statement: "A point charge gives $V = kq/r$ (zero at infinity), and systems superpose **scalarly**: $V = \\sum kq_{i}/r_{i}$ with signs included.",
        detail: "Two opposite charges at equal distance give $V = 0$ but nonzero $\\vec{E}$, proving potential and field carry different information."
      },
      {
        term: "Equipotentials",
        kind: "definition",
        statement: "**Equipotentials** are surfaces of constant $V$ that field lines cross perpendicularly, with close spacing marking strong $\\vec{E}$.",
        detail: "No work is needed to slide along an equipotential, which is why conductors are equipotential volumes in equilibrium."
      },
      {
        term: "Field from potential",
        kind: "method",
        statement: "The field points down the steepest voltage slope with $E_{x} \\approx -\\Delta V/\\Delta x$, so $100$ V across $2.0$ mm means $E = 5.0 \\times 10^{4}$ N/C.",
        detail: "Uniform fields have evenly spaced planar equipotentials, and the minus sign sends positive charges from high to low $V$."
      }
    ],
    figures: [
      {
        caption: "Equipotentials (dashed) around $+q$ with $\\vec{E}$ radial; $V = kq/r$ falls with $r$",
        svg: '<svg role="img" aria-label="Equipotentials (dashed) around +q with vecE radial; V = kq/r falls with r" viewBox="0 0 400 170" width="100%" height="170"><circle cx="200" cy="85" r="8" fill="currentColor"/><text x="200" y="112" text-anchor="middle" font-size="13" fill="currentColor">+q</text><circle cx="200" cy="85" r="28" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/><circle cx="200" cy="85" r="52" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/><circle cx="200" cy="85" r="76" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/><line x1="200" y1="85" x2="200" y2="15" stroke="currentColor" stroke-width="1.6"/><polygon points="200,9 195,19 205,19" fill="currentColor"/><line x1="200" y1="85" x2="262" y2="47" stroke="currentColor" stroke-width="1.2"/><polygon points="267,44 257,44 261,53" fill="currentColor"/></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Potential of two charges",
        problem: "Charges $+4.0$ nC at $x = 0$ and $-2.0$ nC at $x = 6.0$ cm. Find $V$ at $x = 3.0$ cm on the axis.",
        steps: [
          { label: "First charge", text: "$V_{1} = kq_{1}/r_{1} = 8.99 \\times 10^{9} \\times 4.0 \\times 10^{-9}/0.030 \\approx 1199$ V." },
          { label: "Second charge", text: "$V_{2} = 8.99 \\times 10^{9} \\times (-2.0 \\times 10^{-9})/0.030 \\approx -599$ V." },
          { label: "Add scalars", text: "$V = 1199 - 599 \\approx 600$ V." }
        ],
        result: "About $6.0 \\times 10^{2}$ V."
      },
      {
        title: "Electron through 500 volts",
        problem: "An electron starts from rest across $500$ V. What is its final speed?",
        steps: [
          { label: "Energy gain", text: "$K = e\\Delta V = 500$ eV $= 500 \\times 1.60 \\times 10^{-19} = 8.0 \\times 10^{-17}$ J." },
          { label: "Speed", text: "$v = \\sqrt{2K/m} = \\sqrt{2 \\times 8.0 \\times 10^{-17}/9.11 \\times 10^{-31}} = \\sqrt{1.756 \\times 10^{14}} \\approx 1.33 \\times 10^{7}$ m/s." },
          { label: "Check", text: "About $4$ percent of light speed, safely nonrelativistic." }
        ],
        result: "About $1.3 \\times 10^{7}$ m/s."
      }
    ],
    keyTakeaways: [
      "Energy $U = qV$ sorts motion: positives fall toward low $V$, negatives toward high $V$.",
      "Potentials add as scalars with $V = kq/r$ per point charge.",
      "Fields point down the voltage slope via $E = -\\Delta V/\\Delta x$."
    ],
    quiz: [
      {
        q: "A proton is released in a uniform field toward lower $V$. Its kinetic energy:",
        options: ["Stays constant", "Becomes negative", "Decreases", "Increases"],
        answer: 3,
        explanation: "The field does positive work $W = -q\\Delta V$ as the proton falls in potential, raising $K$."
      },
      {
        q: "Equal $+q$ and $-q$ equidistant from point P. At P:",
        options: ["Both nonzero", "$V = 0$ and $E = 0$", "$V = 0$ but $E \\ne 0$", "$V \\ne 0$ but $E = 0$"],
        answer: 2,
        explanation: "Scalar potentials cancel while the vector fields reinforce, a classic $V$-versus-$E$ distinction."
      },
      {
        q: "Equipotentials $10$ V apart are $2$ mm apart. Field magnitude is:",
        options: ["$5$ N/C", "$20$ N/C", "$5000$ N/C", "$20000$ N/C"],
        answer: 2,
        explanation: "$E = \\Delta V/\\Delta x = 10/0.002 = 5000$ N/C perpendicular to the surfaces."
      }
    ]
  },
  {
    sectionId: "coletta-ch18-s2",
    readingTime: 7,
    intro: "A capacitor parks charge at a voltage and holds energy for later, from camera flashes to defibrillators. Coletta defines $C = Q/V$, derives the parallel-plate formula $C = \\epsilon_{0}A/d$, and works series-parallel combinations with stored energy $U = Q^{2}/2C$. Geometry sets storage.",
    objectives: [
      "Apply $C = Q/V$ and $C = \\epsilon_{0}A/d$ to parallel-plate capacitors",
      "Combine capacitors in series and parallel and find equivalent $C$",
      "Compute stored energy with $U = \\tfrac{1}{2}QV = \\tfrac{1}{2}CV^{2}$"
    ],
    concepts: [
      {
        term: "Capacitance",
        kind: "definition",
        statement: "**Capacitance** $C = Q/V$ in farads measures charge stored per volt, fixed by geometry rather than by $Q$ or $V$.",
        detail: "Raising the voltage on a fixed capacitor proportionally raises the stored charge, with $C$ as the constant of proportionality."
      },
      {
        term: "Parallel-plate capacitor",
        kind: "theorem",
        statement: "Plates of area $A$ separated by $d$ give $C = \\epsilon_{0}A/d$, since $V = Ed = \\sigma d/\\epsilon_{0} = Qd/\\epsilon_{0}A$.",
        detail: "Doubling the area doubles $C$ while doubling the gap halves it, the two knobs of capacitor design."
      },
      {
        term: "Series and parallel",
        kind: "method",
        statement: "Parallel capacitors share $V$ and add: $C_{eq} = \\sum C_{i}$. Series capacitors share $Q$ with $1/C_{eq} = \\sum 1/C_{i}$.",
        detail: "Two $6$ muF capacitors give $12$ muF in parallel but $3$ muF in series, and the series pair holds the same charge on each."
      },
      {
        term: "Stored energy",
        kind: "theorem",
        statement: "Charging a capacitor banks $U = \\tfrac{1}{2}QV = \\tfrac{1}{2}CV^{2} = Q^{2}/2C$, also readable as field energy density $u = \\tfrac{1}{2}\\epsilon_{0}E^{2}$.",
        detail: "A $100$ muF capacitor at $300$ V stores $4.5$ J, enough for a bright flash pulse."
      },
      {
        term: "Cylindrical and spherical forms",
        kind: "insight",
        statement: "Coaxial cables give $C = 2\\pi\\epsilon_{0}L/\\ln(b/a)$ per length $L$ and isolated spheres give $C = 4\\pi\\epsilon_{0}R$, the same $Q/V$ idea in round geometry.",
        detail: "Long thin cables store little per meter because the log of the radius ratio grows slowly."
      }
    ],
    examples: [
      {
        title: "Parallel-plate value",
        problem: "Plates of area $0.020$ m$^{2}$ are $1.0$ mm apart in air. Find $C$ and $Q$ at $50$ V.",
        steps: [
          { label: "Capacitance", text: "$C = \\epsilon_{0}A/d = 8.85 \\times 10^{-12} \\times 0.020/0.0010 = 1.77 \\times 10^{-10}$ F." },
          { label: "Charge", text: "$Q = CV = 1.77 \\times 10^{-10} \\times 50 \\approx 8.85 \\times 10^{-9}$ C." },
          { label: "Energy", text: "$U = CV^{2}/2 = 1.77 \\times 10^{-10} \\times 2500/2 \\approx 2.2 \\times 10^{-7}$ J." }
        ],
        result: "$C \\approx 177$ pF storing $8.9$ nC."
      },
      {
        title: "Series-parallel combo",
        problem: "A $4.0$ muF and $6.0$ muF pair in parallel is placed in series with $5.0$ muF across $30$ V. Find the total charge drawn.",
        steps: [
          { label: "Parallel branch", text: "$C_{p} = 4.0 + 6.0 = 10.0$ muF." },
          { label: "Series total", text: "$1/C_{eq} = 1/10.0 + 1/5.0 = 3/10$, so $C_{eq} = 10/3 \\approx 3.33$ muF." },
          { label: "Charge", text: "$Q = C_{eq}V = 3.33 \\times 30 \\approx 100$ muC." }
        ],
        result: "About $1.0 \\times 10^{-4}$ C from the supply."
      }
    ],
    keyTakeaways: [
      "Capacitance $C = Q/V$ is pure geometry, with $C = \\epsilon_{0}A/d$ for plates.",
      "Parallel adds $C$ while series adds reciprocals at shared charge.",
      "Stored energy $U = CV^{2}/2$ lives in the field at $u = \\epsilon_{0}E^{2}/2$."
    ],
    quiz: [
      {
        q: "Plate separation doubles at fixed area. Capacitance:",
        options: ["Halves", "Quadruples", "Unchanged", "Doubles"],
        answer: 0,
        explanation: "$C = \\epsilon_{0}A/d$ is inversely proportional to $d$."
      },
      {
        q: "Two $8$ muF capacitors in series give:",
        options: ["$4$ muF", "$64$ muF", "$16$ muF", "$8$ muF"],
        answer: 0,
        explanation: "$1/C_{eq} = 1/8 + 1/8 = 1/4$, so $C_{eq} = 4$ muF."
      },
      {
        q: "Voltage on a fixed capacitor doubles. Stored energy becomes:",
        options: ["Unchanged", "Double", "Quadruple", "Half"],
        answer: 2,
        explanation: "$U = CV^{2}/2$ scales with $V^{2}$."
      }
    ]
  },
  {
    sectionId: "coletta-ch18-s3",
    readingTime: 5,
    intro: "Sliding an insulator into a capacitor raises its storage, a puzzle until atoms are consulted. Coletta explains polarization of dielectrics, the constant $\\kappa$, and the rules $C = \\kappa C_{0}$ with reduced field $E = E_{0}/\\kappa$. Matter helps hold charge.",
    objectives: [
      "Explain atomic polarization and the dielectric constant $\\kappa$",
      "Apply $C = \\kappa C_{0}$ and $E = E_{0}/\\kappa$ for filled capacitors",
      "Distinguish isolated-charge versus fixed-voltage insertion outcomes"
    ],
    concepts: [
      {
        term: "Dielectric constant",
        kind: "definition",
        statement: "A **dielectric** is an insulator with constant $\\kappa > 1$ (about $3$–$5$ for glass and plastics, $80$ for water) that multiplies capacitance: $C = \\kappa C_{0}$.",
        detail: "The molecules cannot conduct but they can stretch and rotate, which is enough to assist storage."
      },
      {
        term: "Polarization",
        kind: "insight",
        statement: "**Polarization** aligns molecular dipoles against the applied field, laying bound surface charge that partly cancels the free plate charge.",
        detail: "The interior field drops to $E = E_{0}/\\kappa$ because the bound charge opposes the plates, letting more free charge accumulate at the same voltage."
      },
      {
        term: "Isolated versus connected insertion",
        kind: "method",
        statement: "With plates isolated ($Q$ fixed), insertion lowers $V$ to $V_{0}/\\kappa$ and energy falls; with a battery attached ($V$ fixed), $Q$ rises to $\\kappa Q_{0}$ and the battery supplies energy.",
        detail: "The energy difference is the work of pulling the slab in or the battery pushing extra charge on."
      },
      {
        term: "Dielectric strength",
        kind: "definition",
        statement: "**Dielectric strength** is the maximum field before breakdown sparks through, about $3 \\times 10^{6}$ N/C for air and $10$–$100$ MV/m for solids.",
        detail: "Exceeding it ionizes a channel and the capacitor shorts, which is why high-voltage units need thick solid fill."
      },
      {
        term: "Energy with dielectric",
        kind: "theorem",
        statement: "Stored energy becomes $U = \\kappa\\epsilon_{0}E^{2}/2$ per volume, so the same field packs $\\kappa$ times more energy into the filled gap.",
        detail: "At fixed voltage the energy rises by $\\kappa$ because extra charge flows on; at fixed charge it falls by $\\kappa$ because voltage sags."
      }
    ],
    examples: [
      {
        title: "Filling a capacitor",
        problem: "A $200$ pF air capacitor at $60$ V is disconnected, then filled with $\\kappa = 4.0$ plastic. Find the new voltage.",
        steps: [
          { label: "Stored charge", text: "$Q = C_{0}V_{0} = 200 \\times 60 = 12{,}000$ pC, fixed after disconnection." },
          { label: "New capacitance", text: "$C = \\kappa C_{0} = 800$ pF." },
          { label: "New voltage", text: "$V = Q/C = 12{,}000/800 = 15$ V, down by $\\kappa$." }
        ],
        result: "$V = 15$ V after insertion."
      },
      {
        title: "Battery-connected fill",
        problem: "The same $200$ pF capacitor stays on its $60$ V battery while $\\kappa = 4.0$ is inserted. Find the new charge.",
        steps: [
          { label: "Voltage fixed", text: "$V = 60$ V maintained by the battery." },
          { label: "New charge", text: "$Q = CV = 800 \\times 10^{-12} \\times 60 = 4.8 \\times 10^{-8}$ C." },
          { label: "Increase", text: "Four times the original $12$ nC, with the battery doing the extra work." }
        ],
        result: "$48$ nC on the plates."
      }
    ],
    keyTakeaways: [
      "Dielectrics polarize and multiply capacitance by $\\kappa$.",
      "Interior field falls to $E_{0}/\\kappa$ via bound surface charge.",
      "Isolated insertion drops voltage; connected insertion draws charge."
    ],
    quiz: [
      {
        q: "A dielectric slab is inserted into an isolated charged capacitor. The voltage:",
        options: ["Rises by $\\kappa$", "Falls to $V_{0}/\\kappa$", "Stays the same", "Reverses sign"],
        answer: 1,
        explanation: "With $Q$ fixed and $C$ multiplied by $\\kappa$, $V = Q/C$ drops by $\\kappa$."
      },
      {
        q: "Polarization reduces the interior field because:",
        options: ["Bound charge opposes the plates", "Plates move apart", "Charge is destroyed", "Free electrons leave"],
        answer: 0,
        explanation: "Aligned dipoles lay bound charge of opposite sign near each plate, partly canceling the free-charge field."
      },
      {
        q: "Dielectric strength is:",
        options: ["The stored energy", "The plate area", "The $\\kappa$ value", "The maximum field before breakdown"],
        answer: 3,
        explanation: "It is the sparking threshold in V/m, beyond which the insulator conducts."
      }
    ]
  },
  {
    sectionId: "coletta-ch18-s4",
    readingTime: 5,
    intro: "The oscilloscope makes voltages visible by steering an electron beam with the very fields of this chapter. Coletta traces electrons from gun through deflection plates to the fluorescent screen. One compact device reviews $F = qE$, projectile motion, and $V = Ed$ together.",
    objectives: [
      "Explain the electron gun, deflection plates, and sweep in an oscilloscope",
      "Compute deflection from $a = eE/m$ and projectile time of flight",
      "Read amplitude and period from a screen trace"
    ],
    concepts: [
      {
        term: "Electron gun",
        kind: "definition",
        statement: "A heated cathode boils off electrons that accelerate through $V_{a}$ to $v = \\sqrt{2eV_{a}/m}$ before entering the deflection region.",
        detail: "A $2000$ V anode gives about $2.7 \\times 10^{7}$ m/s, so the beam crosses the plates in nanoseconds."
      },
      {
        term: "Deflection plates",
        kind: "method",
        statement: "Plate voltage $V_{d}$ makes uniform $E = V_{d}/d$ and sideways $a = eE/m$; with flight time $t = L/v$ the spot shifts $y = at^{2}/2 \\propto V_{d}$.",
        detail: "Linearity of $y$ in $V_{d}$ is what makes the screen a faithful voltmeter."
      },
      {
        term: "Sweep and triggering",
        kind: "definition",
        statement: "A sawtooth **sweep** drags the spot horizontally at constant speed while vertical plates paint $V(t)$, and **triggering** restarts each sweep at the same phase for a steady picture.",
        detail: "Without triggering successive traces start at random phases and the waveform smears into a band."
      },
      {
        term: "Sensitivity",
        kind: "notation",
        statement: "**Sensitivity** in volts per division converts screen height to voltage, and the timebase in s/div converts width to period and frequency.",
        detail: "A $2$ V/div scale with a $3$-division peak means $6$ V amplitude; a $1$ ms/div scale with $4$ divisions per cycle means $250$ Hz."
      },
      {
        term: "Why electrons",
        kind: "insight",
        statement: "Electrons deflect hugely because $e/m$ is enormous ($1.76 \\times 10^{11}$ C/kg), so millivolts visibly steer kilovolt beams.",
        detail: "Protons with the same energy would deflect nearly two thousand times less, far too stiffly for a bench display." }
    ],
    figures: [
      {
        caption: "Oscilloscope beam deflected by $E = V_{d}/d$ between plates of length $L$",
        svg: '<svg role="img" aria-label="Oscilloscope beam deflected by E = V_d/d between plates of length L" viewBox="0 0 400 150" width="100%" height="150"><rect x="150" y="30" width="120" height="12" fill="currentColor" opacity="0.8"/><rect x="150" y="108" width="120" height="12" fill="currentColor" opacity="0.8"/><line x1="20" y1="75" x2="150" y2="75" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="75" r="5" fill="currentColor"/><path d="M150,75 L270,75 L340,110" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="345" cy="113" r="5" fill="currentColor"/><text x="185" y="25" font-size="12" fill="currentColor">deflection plates</text><text x="285" y="135" font-size="12" fill="currentColor">screen</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Beam speed",
        problem: "Electrons accelerate through $1500$ V. Find their speed entering the plates.",
        steps: [
          { label: "Energy", text: "$K = eV = 1500 \\times 1.60 \\times 10^{-19} = 2.40 \\times 10^{-16}$ J." },
          { label: "Speed", text: "$v = \\sqrt{2K/m} = \\sqrt{4.80 \\times 10^{-16}/9.11 \\times 10^{-31}} = \\sqrt{5.27 \\times 10^{14}} \\approx 2.30 \\times 10^{7}$ m/s." },
          { label: "Note", text: "Still under $10$ percent of light speed, so classical $K = mv^{2}/2$ is acceptable." }
        ],
        result: "About $2.3 \\times 10^{7}$ m/s."
      },
      {
        title: "Deflection size",
        problem: "Plates $d = 1.0$ cm apart and $L = 4.0$ cm long carry $20$ V while $v = 2.0 \\times 10^{7}$ m/s electrons pass. Find exit deflection.",
        steps: [
          { label: "Field and acceleration", text: "$E = 20/0.010 = 2000$ N/C, so $a = eE/m = 1.60 \\times 10^{-19} \\times 2000/9.11 \\times 10^{-31} \\approx 3.51 \\times 10^{14}$ m/s$^{2}$." },
          { label: "Time", text: "$t = L/v = 0.040/2.0 \\times 10^{7} = 2.0 \\times 10^{-9}$ s." },
          { label: "Shift", text: "$y = at^{2}/2 = 3.51 \\times 10^{14} \\times 4.0 \\times 10^{-18}/2 \\approx 7.0 \\times 10^{-4}$ m." }
        ],
        result: "About $0.70$ mm at plate exit, magnified by drift to the screen."
      }
    ],
    keyTakeaways: [
      "Electron guns convert $eV_{a}$ into beam speed $v = \\sqrt{2eV_{a}/m}$.",
      "Plate deflection $y = at^{2}/2$ is linear in plate voltage.",
      "Sweep plus triggering turns deflection into stable waveforms."
    ],
    quiz: [
      {
        q: "Deflection-plate voltage doubles. The spot shift:",
        options: ["Vanishes", "Halves", "Doubles", "Quadruples"],
        answer: 2,
        explanation: "Since $y \\propto a \\propto E \\propto V_{d}$, doubling $V_{d}$ doubles $y$."
      },
      {
        q: "The sweep generator supplies:",
        options: ["Vertical signal voltage", "Horizontal constant-speed motion", "Electron emission", "Screen phosphor"],
        answer: 1,
        explanation: "The sawtooth pulls the beam across at uniform rate so horizontal position means time."
      },
      {
        q: "A trace spans $4$ divisions at $5$ V/div. The peak-to-peak voltage is:",
        options: ["$5$ V", "$9$ V", "$20$ V", "$1.25$ V"],
        answer: 2,
        explanation: "Multiply divisions by sensitivity: $4 \\times 5 = 20$ V."
      }
    ]
  }
]

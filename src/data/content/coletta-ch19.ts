import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 19: Electric Current (Sections 19.1 – 19.4)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh19Content: SectionContent[] = [
  {
    sectionId: "coletta-ch19-s1",
    readingTime: 5,
    intro: "Current is charge in motion, the bridge from electrostatics to circuits. Coletta defines $I = \\Delta Q/\\Delta t$, pictures drift velocity in wires, and distinguishes the slow electron drift from the near-instant signal. Amperes count coulombs per second.",
    objectives: [
      "Define current $I = \\Delta Q/\\Delta t$ and compute charge from $Q = It$",
      "Explain drift velocity and why signals are fast while electrons are slow",
      "State the sign convention that positive charge defines current direction"
    ],
    concepts: [
      {
        term: "Electric current",
        kind: "definition",
        statement: "**Current** $I = \\Delta Q/\\Delta t$ in amperes (C/s) is the rate charge crosses a surface, with conventional direction following positive flow.",
        detail: "A $2.0$ A wire carries $2.0$ C per second, about $1.2 \\times 10^{19}$ electrons, even though each electron drifts slowly."
      },
      {
        term: "Conventional versus electron current",
        kind: "notation",
        statement: "Circuit arrows show **conventional** current (positive flow), opposite to electron motion in metals, and every formula assumes this convention.",
        detail: "Franklin guessed the sign before the electron was found; reversing the guess would flip every arrow but change no prediction."
      },
      {
        term: "Drift velocity",
        kind: "theorem",
        statement: "Electrons drift at $v_{d} = I/neA$, typically fractions of a mm/s, where $n$ is conduction electrons per volume and $A$ the wire area.",
        detail: "The signal still races near light speed because each electron shoves its neighbor electrically, like a full pipe passing pressure instantly."
      },
      {
        term: "Charge conservation in wires",
        kind: "law",
        statement: "Steady current is the same everywhere in a series wire: charge neither piles up nor vanishes, so $I_{in} = I_{out}$ at every junction.",
        detail: "A thinner section speeds the drift up exactly enough to keep $I$ constant, previewing Kirchhoff's junction rule."
      },
      {
        term: "AC versus DC",
        kind: "definition",
        statement: "**Direct current** flows one way from batteries while **alternating current** reverses sinusoidally, $I = I_{0}\\sin(2\\pi ft)$, at $60$ Hz from wall outlets.",
        detail: "Both carry power, but only DC has a fixed polarity for which plus and minus terminals keep their meaning." }
    ],
    figures: [
      {
        caption: "Drift $v_{d}$ of electrons opposite conventional $I$ in a wire of area $A$",
        svg: '<svg role="img" aria-label="Drift v_d of electrons opposite conventional I in a wire of area A" viewBox="0 0 400 130" width="100%" height="130"><rect x="20" y="40" width="360" height="50" fill="none" stroke="currentColor" stroke-width="2"/><line x1="60" y1="30" x2="60" y2="100" stroke="currentColor" stroke-width="1" opacity="0.5"/><line x1="340" y1="30" x2="340" y2="100" stroke="currentColor" stroke-width="1" opacity="0.5"/><line x1="80" y1="55" x2="130" y2="55" stroke="currentColor" stroke-width="2"/><polygon points="130,55 120,50 120,60" fill="currentColor"/><text x="105" y="45" font-size="12" fill="currentColor">I</text><line x1="300" y1="78" x2="250" y2="78" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/><polygon points="250,78 260,73 260,83" fill="currentColor"/><text x="275" y="95" font-size="12" fill="currentColor">vd</text><circle cx="180" cy="65" r="4" fill="currentColor" opacity="0.7"/><circle cx="220" cy="65" r="4" fill="currentColor" opacity="0.7"/><circle cx="200" cy="80" r="4" fill="currentColor" opacity="0.7"/></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Charge in a flashlight",
        problem: "A bulb draws $0.30$ A for $5.0$ minutes. How much charge flows?",
        steps: [
          { label: "Time", text: "$t = 5.0 \\times 60 = 300$ s." },
          { label: "Charge", text: "$Q = It = 0.30 \\times 300 = 90$ C." },
          { label: "Electrons", text: "$N = 90/1.60 \\times 10^{-19} \\approx 5.6 \\times 10^{20}$ electrons." }
        ],
        result: "$90$ C, about half a mole of electrons."
      },
      {
        title: "Drift speed in copper",
        problem: "A $1.5$ A current flows in copper wire of diameter $1.0$ mm with $n = 8.5 \\times 10^{28}$ m$^{-3}$. Find $v_{d}$.",
        steps: [
          { label: "Area", text: "$A = \\pi r^{2} = \\pi(5.0 \\times 10^{-4})^{2} \\approx 7.85 \\times 10^{-7}$ m$^{2}$." },
          { label: "Drift", text: "$v_{d} = I/neA = 1.5/(8.5 \\times 10^{28} \\times 1.60 \\times 10^{-19} \\times 7.85 \\times 10^{-7})$." },
          { label: "Evaluate", text: "Denominator $\\approx 1.068 \\times 10^{4}$, so $v_{d} \\approx 1.40 \\times 10^{-4}$ m/s." }
        ],
        result: "About $0.14$ mm/s."
      }
    ],
    keyTakeaways: [
      "Current $I = \\Delta Q/\\Delta t$ counts charge per second with positive-flow arrows.",
      "Drift speeds are sub-mm/s while the electrical signal is near light speed.",
      "Steady current is uniform along a series wire by charge conservation."
    ],
    quiz: [
      {
        q: "A wire carries $4.0$ A for $30$ s. Charge delivered is:",
        options: ["$34$ C", "$120$ C", "$0.13$ C", "$7.5$ C"],
        answer: 1,
        explanation: "$Q = It = 4.0 \\times 30 = 120$ C."
      },
      {
        q: "Wire diameter doubles at fixed current. Drift velocity becomes:",
        options: ["Four times", "Double", "Half", "One quarter"],
        answer: 3,
        explanation: "Area quadruples, and $v_{d} = I/neA$ falls to one quarter."
      },
      {
        q: "Conventional current in a copper wire points:",
        options: ["With electron drift", "Opposite electron drift", "Perpendicular to the wire", "Only in AC"],
        answer: 1,
        explanation: "By convention current follows positive charge, opposite to electron motion in metals."
      }
    ]
  },
  {
    sectionId: "coletta-ch19-s2",
    readingTime: 6,
    intro: "Ohm's law turns voltage into current through resistance, the friction of the electron world. Coletta defines $V = IR$, builds resistivity $R = \\rho L/A$ from material and shape, and tracks temperature dependence. Not every device obeys, which makes ohmic behavior worth testing.",
    objectives: [
      "Apply $V = IR$ to find any one of voltage, current, or resistance",
      "Compute wire resistance from $R = \\rho L/A$ with table resistivities",
      "Explain temperature dependence $\\rho = \\rho_{0}[1 + \\alpha(T - T_{0})]$"
    ],
    concepts: [
      {
        term: "Ohm's law",
        kind: "law",
        statement: "An **ohmic** device satisfies $V = IR$: current is proportional to voltage with resistance $R$ in ohms as the constant.",
        detail: "Filament bulbs and diodes curve away from the straight line as they heat or rectify, so $R = V/I$ still defines resistance but it is no longer constant."
      },
      {
        term: "Resistivity",
        kind: "definition",
        statement: "**Resistivity** $\\rho$ in ohm-meters is the material property behind $R = \\rho L/A$: long thin wires resist more than short fat ones of the same stuff.",
        detail: "Copper at $1.7 \\times 10^{-8}$ ohm-m versus nichrome at $1.5 \\times 10^{-6}$ explains why heaters use alloy coils and feeds use copper."
      },
      {
        term: "Conductivity",
        kind: "notation",
        statement: "**Conductivity** $\\sigma = 1/\\rho$ in S/m measures ease of flow, with the local form $\\vec{J} = \\sigma\\vec{E}$ linking current density to field.",
        detail: "Silver tops the metals near $6.3 \\times 10^{7}$ S/m while glass sits some twenty orders lower."
      },
      {
        term: "Temperature dependence",
        kind: "theorem",
        statement: "Metals follow $\\rho = \\rho_{0}[1 + \\alpha(T - T_{0})]$ with $\\alpha \\approx 3.9 \\times 10^{-3}$ per $^{\\circ}$C for copper, as hotter lattice vibrations scatter electrons more.",
        detail: "A $100$-degree rise raises copper resistance nearly $40$ percent, which is why motors draw extra current when cold and bulbs flash bright at switch-on."
      },
      {
        term: "Superconductors",
        kind: "insight",
        statement: "Below a critical temperature some materials drop to **zero** DC resistance, carrying persistent currents without voltage.",
        detail: "MRI magnets exploit this to hold huge fields with no steady power, at the price of cryogenic cooling."
      }
    ],
    examples: [
      {
        title: "Copper lead resistance",
        problem: "Find the resistance of $20$ m of copper wire, diameter $2.0$ mm, with $\\rho = 1.7 \\times 10^{-8}$ ohm-m.",
        steps: [
          { label: "Area", text: "$A = \\pi(1.0 \\times 10^{-3})^{2} \\approx 3.14 \\times 10^{-6}$ m$^{2}$." },
          { label: "Resistance", text: "$R = \\rho L/A = 1.7 \\times 10^{-8} \\times 20/3.14 \\times 10^{-6} \\approx 0.108$ ohm." },
          { label: "Drop at 5 A", text: "$V = IR = 5 \\times 0.108 \\approx 0.54$ V lost in the leads." }
        ],
        result: "About $0.11$ ohm."
      },
      {
        title: "Hot filament",
        problem: "A tungsten filament is $18$ ohm at $20^{\\circ}$C with $\\alpha = 4.5 \\times 10^{-3}$ per $^{\\circ}$C. Estimate $R$ at $2000^{\\circ}$C.",
        steps: [
          { label: "Temperature rise", text: "$\\Delta T = 1980$ degrees." },
          { label: "Factor", text: "$1 + \\alpha\\Delta T = 1 + 4.5 \\times 10^{-3} \\times 1980 = 1 + 8.91 = 9.91$." },
          { label: "Hot resistance", text: "$R \\approx 18 \\times 9.91 \\approx 178$ ohm." }
        ],
        result: "About $1.8 \\times 10^{2}$ ohm, ten times the cold value."
      }
    ],
    keyTakeaways: [
      "Ohmic devices obey $V = IR$ linearly; $R$ still defined otherwise.",
      "Resistance $R = \\rho L/A$ separates material from geometry.",
      "Metal resistivity rises linearly with temperature via $\\alpha$."
    ],
    quiz: [
      {
        q: "A $12$ V battery drives $3.0$ A through a resistor. $R$ equals:",
        options: ["$4.0$ ohm", "$15$ ohm", "$36$ ohm", "$0.25$ ohm"],
        answer: 0,
        explanation: "$R = V/I = 12/3.0 = 4.0$ ohm."
      },
      {
        q: "Wire length triples and diameter halves. Resistance changes by:",
        options: ["$6$", "$12$", "$3/2$", "$3$"],
        answer: 1,
        explanation: "$R \\propto L/A$ with $A \\propto d^{2}$: factor $3/(1/2)^{2} = 12$."
      },
      {
        q: "Heating a copper wire generally:",
        options: ["Makes it superconducting", "Lowers its resistance", "Raises its resistance", "Leaves it unchanged"],
        answer: 2,
        explanation: "Stronger lattice vibration scatters electrons, raising $\\rho$ through positive $\\alpha$."
      }
    ]
  },
  {
    sectionId: "coletta-ch19-s3",
    readingTime: 6,
    intro: "Circuits exist to deliver energy, and power $P = IV$ prices every joule. Coletta converts $P = IV$ into $I^{2}R$ and $V^{2}/R$, introduces EMF with internal resistance, and handles AC averages with rms values. Batteries, outlets, and bills all speak watts.",
    objectives: [
      "Compute electric power with $P = IV = I^{2}R = V^{2}/R$",
      "Model real batteries as EMF $\\mathcal{E}$ with internal resistance $r$",
      "Use rms values $V_{rms} = V_{0}/\\sqrt{2}$ for AC power"
    ],
    concepts: [
      {
        term: "Electric power",
        kind: "definition",
        statement: "**Power** $P = IV$ in watts is the energy per second converted by a device, with $P = I^{2}R = V^{2}/R$ for resistors.",
        detail: "A $120$ V, $0.50$ A bulb radiates $60$ W, and doubling its voltage would quadruple the power until it burns out."
      },
      {
        term: "EMF and internal resistance",
        kind: "definition",
        statement: "A battery supplies **electromotive force** $\\mathcal{E}$ (work per charge, in volts) but wastes $Ir$ internally, so terminal voltage is $V = \\mathcal{E} - Ir$.",
        detail: "A $9$ V battery with $r = 2.0$ ohm sags to $7.0$ V at $1.0$ A, which is why starter motors dim headlights."
      },
      {
        term: "Kilowatt-hours",
        kind: "notation",
        statement: "Utilities bill energy in **kilowatt-hours**: $1$ kWh $= 3.6 \\times 10^{6}$ J, the energy of $1000$ W for one hour.",
        detail: "A $60$ W bulb burning $10$ hours uses $0.60$ kWh, a few cents of electricity."
      },
      {
        term: "AC and rms values",
        kind: "theorem",
        statement: "Sinusoidal AC with peaks $V_{0}$, $I_{0}$ delivers the same average power as DC at **rms** levels $V_{rms} = V_{0}/\\sqrt{2}$ and $I_{rms} = I_{0}/\\sqrt{2}$, so $P_{avg} = V_{rms}I_{rms}$.",
        detail: "Wall $120$ V is rms, peaking near $170$ V sixty times per second, which is why AC meters read $120$ V on a waveform that never sits still."
      },
      {
        term: "Short circuits",
        kind: "insight",
        statement: "A **short** bypasses the load with near-zero $R$, so $I = \\mathcal{E}/r$ surges to the battery's limit and $I^{2}r$ heating can start fires.",
        detail: "Fuses and breakers exist precisely to open before short-circuit heating melts insulation." }
    ],
    figures: [
      {
        caption: "Real battery as EMF $\\mathcal{E}$ with internal $r$: $V = \\mathcal{E} - Ir$",
        svg: '<svg role="img" aria-label="Real battery as EMF mathcalE with internal r: V = mathcalE - Ir" viewBox="0 0 400 130" width="100%" height="130"><line x1="60" y1="65" x2="130" y2="65" stroke="currentColor" stroke-width="2"/><rect x="130" y="55" width="70" height="20" fill="none" stroke="currentColor" stroke-width="2"/><text x="165" y="48" text-anchor="middle" font-size="12" fill="currentColor">r</text><line x1="200" y1="65" x2="230" y2="65" stroke="currentColor" stroke-width="2"/><line x1="250" y1="40" x2="250" y2="90" stroke="currentColor" stroke-width="3"/><line x1="270" y1="55" x2="270" y2="75" stroke="currentColor" stroke-width="5"/><text x="260" y="115" font-size="12" fill="currentColor">EMF E</text><rect x="290" y="50" width="60" height="30" fill="none" stroke="currentColor" stroke-width="2"/><text x="320" y="70" text-anchor="middle" font-size="12" fill="currentColor">R</text><line x1="350" y1="65" x2="380" y2="65" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="65" x2="60" y2="110" stroke="currentColor" stroke-width="1.5"/><line x1="380" y1="65" x2="380" y2="110" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="110" x2="380" y2="110" stroke="currentColor" stroke-width="1.5"/></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Heater power",
        problem: "A $120$ V heater element is $15$ ohm. Find current and power.",
        steps: [
          { label: "Current", text: "$I = V/R = 120/15 = 8.0$ A." },
          { label: "Power", text: "$P = VI = 120 \\times 8.0 = 960$ W, or $V^{2}/R = 14400/15 = 960$ W." },
          { label: "Energy per hour", text: "$E = Pt = 960 \\times 3600 = 3.456 \\times 10^{6}$ J $\\approx 0.96$ kWh." }
        ],
        result: "$8.0$ A and $960$ W."
      },
      {
        title: "Loaded battery",
        problem: "A battery with $\\mathcal{E} = 12.0$ V and $r = 0.30$ ohm drives $2.0$ A. Find terminal voltage and wasted power.",
        steps: [
          { label: "Terminal voltage", text: "$V = \\mathcal{E} - Ir = 12.0 - 2.0 \\times 0.30 = 11.4$ V." },
          { label: "Internal heating", text: "$P_{r} = I^{2}r = 4.0 \\times 0.30 = 1.2$ W." },
          { label: "Delivered", text: "$P = VI = 11.4 \\times 2.0 = 22.8$ W of the $24.0$ W chemically supplied." }
        ],
        result: "$11.4$ V at terminals with $1.2$ W lost inside."
      }
    ],
    keyTakeaways: [
      "Power $P = IV$ takes resistor forms $I^{2}R$ and $V^{2}/R$.",
      "Real sources sag as $V = \\mathcal{E} - Ir$ under load.",
      "AC power uses rms values with $P_{avg} = V_{rms}I_{rms}$."
    ],
    quiz: [
      {
        q: "A $6.0$ V, $2.0$ A motor converts power of:",
        options: ["$3.0$ W", "$8.0$ W", "$12$ W", "$24$ W"],
        answer: 2,
        explanation: "$P = IV = 6.0 \\times 2.0 = 12$ W."
      },
      {
        q: "Terminal voltage falls below EMF because:",
        options: ["Current wastes $Ir$ inside the source", "Wires are superconducting", "AC cancels DC", "Charge is destroyed"],
        answer: 0,
        explanation: "Internal resistance drops $Ir$ volts before the terminals, leaving $V = \\mathcal{E} - Ir$."
      },
      {
        q: "US wall voltage $120$ V rms peaks at about:",
        options: ["$120$ V", "$170$ V", "$60$ V", "$85$ V"],
        answer: 1,
        explanation: "$V_{0} = \\sqrt{2}\\,V_{rms} \\approx 1.414 \\times 120 \\approx 170$ V."
      }
    ]
  },
  {
    sectionId: "coletta-ch19-s4",
    readingTime: 6,
    intro: "Zooming to electron scale, Coletta derives Ohm's law from collisions: electrons accelerate in $\\vec{E}$, scatter off the lattice, and settle to a drift proportional to the field. Conductivity emerges as $\\sigma = ne^{2}\\tau/m$. Resistance is microscopic traffic.",
    objectives: [
      "Describe the Drude collision model with mean free time $\\tau$",
      "Derive $\\vec{J} = \\sigma\\vec{E}$ with $\\sigma = ne^{2}\\tau/m$",
      "Explain why heating raises resistivity in this picture"
    ],
    concepts: [
      {
        term: "Drude collision model",
        kind: "definition",
        statement: "Electrons accelerate freely for a mean time $\\tau$ between lattice collisions, then scatter randomly, so only the last free flight contributes to drift.",
        detail: "Typical $\\tau \\approx 10^{-14}$ s in copper gives mean free paths of nanometers at Fermi speeds."
      },
      {
        term: "Drift from collisions",
        kind: "theorem",
        statement: "Averaging over collisions gives $\\vec{v}_{d} = -e\\vec{E}\\tau/m$: drift is linear in field because each flight starts from rest on average.",
        detail: "Doubling $E$ doubles the sprint speed reached in time $\\tau$, hence doubles the average drift."
      },
      {
        term: "Microscopic Ohm's law",
        kind: "law",
        statement: "Current density $\\vec{J} = -ne\\vec{v}_{d}$ becomes $\\vec{J} = \\sigma\\vec{E}$ with **conductivity** $\\sigma = ne^{2}\\tau/m$ and $\\rho = 1/\\sigma$.",
        detail: "More carriers ($n$) or longer flights ($\\tau$) raise $\\sigma$; heavier effective mass lowers it."
      },
      {
        term: "Mean free path",
        kind: "notation",
        statement: "The **mean free path** $\\ell = v\\tau$ (with Fermi speed for metals) is the average distance between scatterings.",
        detail: "Pure cold crystals have long $\\ell$ and low $\\rho$; alloys and heat shorten $\\ell$ and raise $\\rho$."
      },
      {
        term: "Heating mechanism",
        kind: "insight",
        statement: "Higher temperature means harder lattice vibration, shorter $\\tau$, and larger $\\rho$, which is the microscopic origin of positive $\\alpha$.",
        detail: "The $I^{2}R$ heat is the kinetic energy electrons dump into the lattice at every scattering crash." }
    ],
    examples: [
      {
        title: "Conductivity of copper",
        problem: "Copper has $n = 8.5 \\times 10^{28}$ m$^{-3}$ and $\\tau = 2.5 \\times 10^{-14}$ s. Estimate $\\sigma$.",
        steps: [
          { label: "Formula", text: "$\\sigma = ne^{2}\\tau/m = 8.5 \\times 10^{28} \\times (1.60 \\times 10^{-19})^{2} \\times 2.5 \\times 10^{-14}/9.11 \\times 10^{-31}$." },
          { label: "Numerator", text: "$8.5 \\times 10^{28} \\times 2.56 \\times 10^{-38} \\times 2.5 \\times 10^{-14} = 5.44 \\times 10^{-23}$." },
          { label: "Divide", text: "$5.44 \\times 10^{-23}/9.11 \\times 10^{-31} \\approx 5.97 \\times 10^{7}$ S/m, near the measured $5.9 \\times 10^{7}$." }
        ],
        result: "About $6.0 \\times 10^{7}$ S/m."
      },
      {
        title: "Field in a live wire",
        problem: "Copper wire ($\\rho = 1.7 \\times 10^{-8}$ ohm-m) carries $J = 2.0 \\times 10^{6}$ A/m$^{2}$. Find $E$ inside.",
        steps: [
          { label: "Local law", text: "$E = \\rho J$." },
          { label: "Compute", text: "$E = 1.7 \\times 10^{-8} \\times 2.0 \\times 10^{6} = 0.034$ V/m." },
          { label: "Note", text: "Only $3.4$ cm of voltage drop per meter, tiny because copper conducts so well." }
        ],
        result: "$3.4 \\times 10^{-2}$ V/m."
      }
    ],
    keyTakeaways: [
      "Collisions every $\\tau$ reset electron flights and produce drift $v_{d} = eE\\tau/m$.",
      "Conductivity $\\sigma = ne^{2}\\tau/m$ counts carriers times flight time.",
      "Heat shortens $\\tau$ and raises resistivity."
    ],
    quiz: [
      {
        q: "In the Drude model, doubling $E$ at fixed $\\tau$:",
        options: ["Quadruples $\\tau$", "Doubles $v_{d}$", "Halves $v_{d}$", "Leaves $v_{d}$ unchanged"],
        answer: 1,
        explanation: "Since $v_{d} = eE\\tau/m$ is linear in $E$, doubling the field doubles the drift."
      },
      {
        q: "Conductivity rises when:",
        options: ["$n$ falls", "$\\tau$ lengthens", "Mass rises", "Temperature rises in metals"],
        answer: 1,
        explanation: "$\\sigma = ne^{2}\\tau/m$ grows with longer collision-free flights and more carriers."
      },
      {
        q: "Mean free path is defined as:",
        options: ["$E/\\tau$", "$ne^{2}$", "$\\rho J$", "$v\\tau$"],
        answer: 3,
        explanation: "Distance equals speed times time between collisions, $\\ell = v\\tau$."
      }
    ]
  }
]

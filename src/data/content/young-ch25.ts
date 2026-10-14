import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 25
// Current, Resistance, and Electromotive Force (Sections 25.1 – 25.6)
// ============================================================================

export const youngCh25Content: SectionContent[] = [
  {
    sectionId: "young-ch25-s1",
    readingTime: 5,
    intro: "Charge in motion is current — amperes of electrons drifting through copper. Young defines $I = dQ/dt$, introduces current density $\\vec{J}$, and derives the continuity link between them.",
    objectives: [
      "Define current $I = dQ/dt$ and the ampere",
      "Define $\\vec{J}$ and apply $I = \\int \\vec{J} \\cdot d\\vec{A}$",
      "Distinguish drift velocity from signal speed with numbers",
    ],
    concepts: [
      {
        term: "Electric current",
        kind: "definition",
        statement: "**Current** $I = dQ/dt$ is charge per unit time through a surface in **amperes** ($1\\ \\mathrm{A} = 1\\ \\mathrm{C/s}$); conventional current follows positive flow, opposite electron motion.",
        detail: "A $2\\ \\mathrm{A}$ wire passes $1.25 \\times 10^{19}$ electrons per second — Franklin's sign legacy in every arrow.",
      },
      {
        term: "Current density",
        kind: "definition",
        statement: "**Current density** $\\vec{J}$ (amperes per $\\mathrm{m^{2}}$) points with positive flow; total $I = \\int \\vec{J} \\cdot d\\vec{A}$ sums flux-like contributions over the cross section.",
        detail: "Uniform $J$ gives $I = JA$; skin effect at AC crowds $J$ to surfaces (Chapter 31 preview).",
      },
      {
        term: "Drift velocity",
        kind: "theorem",
        statement: "$\\vec{J} = nq\\vec{v}_{d}$: with copper's $n = 8.5 \\times 10^{28}\\ \\mathrm{m^{-3}}$, $I = 1\\ \\mathrm{A}$ in $1\\ \\mathrm{mm^{2}}}$ drifts at $v_{d} = 7.35 \\times 10^{-5}\\ \\mathrm{m/s}$ — millimeters per minute.",
        detail: "Signals race at near-$c$ field speed while electrons crawl: the hose-already-full analogy — pressure waves, not water molecules, hurry.",
      },
      {
        term: "Continuity of current",
        kind: "law",
        statement: "Steady currents satisfy $\\nabla \\cdot \\vec{J} = 0$ (what enters a junction leaves); time-varying cases add charge pileup: $\\oint \\vec{J} \\cdot d\\vec{A} = -dQ_{\\mathrm{enc}}/dt$.",
        detail: "Kirchhoff's junction rule (Chapter 26) is continuity at a node.",
      },
      {
        term: "AC versus DC",
        kind: "notation",
        statement: "**Direct current** holds direction; **alternating current** reverses sinusoidally ($60\\ \\mathrm{Hz}$ mains) with the same $|I|$-heating but zero net drift.",
        detail: "Mains electrons slosh micrometers while delivering kilowatts — drift oscillates, energy flows.",
      },
    ],
    examples: [
      {
        title: "Drift speed in copper",
        problem: "Copper wire ($n = 8.5 \\times 10^{28}\\ \\mathrm{m^{-3}}$) of diameter $1.63\\ \\mathrm{mm}$ carries $I = 2.50\\ \\mathrm{A}$. Find $J$ and $v_{d}$.",
        steps: [
          { label: "Area", text: "$A = \\pi d^{2}/4 = \\pi(1.63 \\times 10^{-3})^{2}/4 = 2.087 \\times 10^{-6}\\ \\mathrm{m^{2}}$." },
          { label: "Density", text: "$J = I/A = 2.50/2.087 \\times 10^{-6} = 1.198 \\times 10^{6}\\ \\mathrm{A/m^{2}}$." },
          { label: "Drift", text: "$v_{d} = J/(ne) = 1.198 \\times 10^{6}/(8.5 \\times 10^{28} \\times 1.602 \\times 10^{-19}) = 1.198 \\times 10^{6}/1.362 \\times 10^{10} = 8.80 \\times 10^{-5}\\ \\mathrm{m/s}$." },
        ],
        result: "$J = 1.20 \\times 10^{6}\\ \\mathrm{A/m^{2}}$; $v_{d} = 8.8 \\times 10^{-5}\\ \\mathrm{m/s}$ ($0.32\\ \\mathrm{m/h}$).",
      },
      {
        title: "Electrons per second",
        problem: "How many electrons pass a point per second for $I = 0.500\\ \\mathrm{A}$?",
        steps: [
          { label: "Rate", text: "$dN/dt = I/e = 0.500/1.602 \\times 10^{-19} = 3.121 \\times 10^{18}\\ \\mathrm{s^{-1}}$." },
          { label: "Per minute", text: "$1.87 \\times 10^{20}$ electrons per minute — a mole every $10^{4}$ years at half an amp." },
          { label: "Conventional note", text: "Conventional current points opposite this electron flow." },
        ],
        result: "$3.12 \\times 10^{18}$ electrons per second.",
      },
    ],
    keyTakeaways: [
      "$I = dQ/dt$ in amperes; $I = \\int \\vec{J} \\cdot d\\vec{A}$ generalizes across sections.",
      "$\\vec{J} = nq\\vec{v}_{d}$: drift is sub-millimeter-per-second while signals fly.",
      "Steady $\\nabla \\cdot \\vec{J} = 0$; unsteady adds $-dQ/dt$ pileup.",
    ],
    quiz: [
      {
        q: "Conventional current direction is:",
        options: ["Electron flow direction", "Positive-charge flow, opposite electrons", "Always clockwise", "Undefined"],
        answer: 1,
        explanation: "Franklin's positive convention predates electron discovery; arrows follow $+q$ motion.",
      },
      {
        q: "Doubling wire diameter at fixed $I$ changes drift speed by:",
        options: ["$2$ times", "$1/4$", "$4$ times", "Unchanged"],
        answer: 1,
        explanation: "$v_{d} = I/(neA)$ with $A \\propto d^{2}$: $2^{2} = 4$ in the denominator.",
      },
      {
        q: "Lights turn on instantly although drift is slow because:",
        options: ["Electrons move at $c$", "Fields propagate near $c$ through the already-full wire", "Current needs no electrons", "Drift formula is wrong"],
        answer: 1,
        explanation: "Energy rides the field wave; electrons merely shuffle micrometers locally.",
      },
    ],
  },
  {
    sectionId: "young-ch25-s2",
    readingTime: 5,
    intro: "Why does copper conduct and glass not? Resistivity $\\rho$ prices materials from silver to semiconductors, with temperature dependence that thermometers exploit and superconductors abolish.",
    objectives: [
      "Define resistivity $\\rho$ and conductivity $\\sigma = 1/\\rho$",
      "Apply $\\rho(T) = \\rho_{0}[1 + \\alpha(T - T_{0})]$ numerically",
      "Distinguish ohmic from nonohmic conduction",
    ],
    concepts: [
      {
        term: "Resistivity",
        kind: "definition",
        statement: "**Resistivity** $\\rho$ ($\\Omega \\cdot \\mathrm{m}$) is the material constant in $\\vec{E} = \\rho\\vec{J}$; conductivity $\\sigma = 1/\\rho$ inverts it. Copper $1.72 \\times 10^{-8}$, glass $10^{10}$–$10^{14}$.",
        detail: "Twenty orders of magnitude separate conductors from insulators — the widest material range in physics.",
      },
      {
        term: "Temperature dependence",
        kind: "law",
        statement: "Metals obey $\\rho(T) = \\rho_{0}[1 + \\alpha(T - T_{0})]$ with $\\alpha \\approx 3.9 \\times 10^{-3}/^{\\circ}\\mathrm{C}$ (copper); semiconductors drop $\\rho$ with $T$ as carriers thermally activate.",
        detail: "A $100^{\\circ}\\mathrm{C}$ rise raises copper $\\rho$ $39$ percent — motor windings derate hot.",
      },
      {
        term: "Ohmic versus nonohmic",
        kind: "definition",
        statement: "**Ohmic** materials hold $\\rho$ independent of $E$ (linear $I$-$V$); diodes, gas discharges, and filaments are **nonohmic** with $\\rho(E)$ or $\\rho(T(I))$ dependence.",
        detail: "Ohm's law is a material approximation, not a universal law — valid for metals at fixed $T$.",
      },
      {
        term: "Resistivity table logic",
        kind: "method",
        statement: "Silver $1.59$, copper $1.72$, aluminum $2.65$ ($\\times 10^{-8}$); nichrome $100 \\times 10^{-8}$ for heaters; silicon $10^{-3}$–$10^{3}$ tunable by doping.",
        detail: "Heaters want high $\\rho$ (nichrome); grids want low $\\rho$ (aluminum's lightness beats copper's edge).",
      },
      {
        term: "Superconductivity preview",
        kind: "insight",
        statement: "Below $T_{c}$, some materials drop $\\rho$ to exactly zero (mercury $4.15\\ \\mathrm{K}$, YBCO $92\\ \\mathrm{K}$) — persistent currents without driving $E$ (Chapter 29 returns).",
        detail: "MRI magnets run kiloamps losslessly in niobium-titanium at $4\\ \\mathrm{K}$.",
      },
    ],
    examples: [
      {
        title: "Hot copper winding",
        problem: "A copper coil measures $12.0\\ \\Omega$ at $20^{\\circ}\\mathrm{C}$. Find its resistance at $90^{\\circ}\\mathrm{C}$ ($\\alpha = 3.93 \\times 10^{-3}$).",
        steps: [
          { label: "Apply", text: "$R = R_{0}[1 + \\alpha\\Delta T] = 12.0[1 + (3.93 \\times 10^{-3})(70)]$." },
          { label: "Factor", text: "$1 + 0.2751 = 1.2751$; $R = 12.0(1.2751) = 15.30\\ \\Omega$." },
          { label: "Current effect", text: "At fixed voltage, current sags $21.6$ percent hot — motors draw most at startup." },
        ],
        result: "$R = 15.3\\ \\Omega$ at $90^{\\circ}\\mathrm{C}$.",
      },
      {
        title: "Nichrome heater wire",
        problem: "Nichrome ($\\rho = 1.00 \\times 10^{-6}$) wire of length $2.00\\ \\mathrm{m}$ and diameter $0.500\\ \\mathrm{mm}$: find $R$.",
        steps: [
          { label: "Area", text: "$A = \\pi(5.00 \\times 10^{-4})^{2}/4 = 1.963 \\times 10^{-7}\\ \\mathrm{m^{2}}$." },
          { label: "Resistance", text: "$R = \\rho L/A = (1.00 \\times 10^{-6})(2.00)/1.963 \\times 10^{-7} = 2.00 \\times 10^{-6}/1.963 \\times 10^{-7} = 10.19\\ \\Omega$." },
          { label: "Power", text: "At $120\\ \\mathrm{V}$: $P = V^{2}/R = 1413\\ \\mathrm{W}$ — a space heater from two meters of wire." },
        ],
        result: "$R = 10.2\\ \\Omega$.",
      },
    ],
    keyTakeaways: [
      "$\\vec{E} = \\rho\\vec{J}$ defines $\\rho$; $\\sigma = 1/\\rho$ inverts it.",
      "Metals rise $\\rho$ with $T$ ($\\alpha \\sim 4 \\times 10^{-3}$); semiconductors fall.",
      "Ohmic means constant $\\rho$; filaments and diodes are nonohmic.",
    ],
    quiz: [
      {
        q: "Resistivity units are:",
        options: ["$\\Omega/\\mathrm{m}$", "$\\Omega \\cdot \\mathrm{m}$", "$\\Omega \\cdot \\mathrm{m^{2}}$", "Siemens"],
        answer: 1,
        explanation: "$R = \\rho L/A$ gives $\\rho = RA/L$: ohms times meters.",
      },
      {
        q: "A filament's $I$-$V$ curve bends because:",
        options: ["It violates charge conservation", "Heating raises $\\rho(T(I))$ — nonohmic self-heating", "Electrons vanish", "Voltage is undefined"],
        answer: 1,
        explanation: "More current means hotter filament means higher $\\rho$: sublinear $I$-$V$.",
      },
      {
        q: "Semiconductor resistivity with rising $T$:",
        options: ["Rises like metals", "Falls as carriers activate", "Stays constant", "Becomes infinite"],
        answer: 1,
        explanation: "Thermal excitation frees carriers exponentially, overwhelming phonon scattering.",
      },
    ],
  },
  {
    sectionId: "young-ch25-s3",
    readingTime: 5,
    intro: "From material ($\\rho$) to object ($R$): resistance combines resistivity with geometry as $R = \\rho L/A$. Young states Ohm's law, reads resistor codes, and sizes wires for the currents they must carry.",
    objectives: [
      "Apply $R = \\rho L/A$ to wires of any gauge",
      "State Ohm's law $V = IR$ and its limits",
      "Interpret resistor ratings and tolerances",
    ],
    concepts: [
      {
        term: "Resistance from geometry",
        kind: "theorem",
        statement: "Uniform wire has $R = \\rho L/A$: long thin wires resist most; $12$-gauge copper ($2.05\\ \\mathrm{mm}$ diameter) is $5.2\\ \\mathrm{m\\Omega/m}$.",
        detail: "Doubling length doubles $R$; doubling diameter quarters it — the wire-sizing rules.",
      },
      {
        term: "Ohm's law",
        kind: "law",
        statement: "**Ohm's law** $V = IR$ holds for ohmic devices at fixed $T$: current through is proportional to voltage across, with $R$ the constant.",
        detail: "$10\\ \\mathrm{V}$ across $2\\ \\Omega$ drives $5\\ \\mathrm{A}$ — the three-way slide rule of circuits.",
      },
      {
        term: "Resistors and codes",
        kind: "notation",
        statement: "Resistors carry color bands (digits-digits-multiplier-tolerance): yellow-violet-red-gold is $4.7\\ \\mathrm{k\\Omega} \\pm 5$ percent; power ratings ($1/4\\ \\mathrm{W}$, $1\\ \\mathrm{W}$) cap $I^{2}R$.",
        detail: "A $100\\ \\Omega$, $1/4\\ \\mathrm{W}$ resistor survives $50\\ \\mathrm{mA}$ ($0.25\\ \\mathrm{W}$) but not $100\\ \\mathrm{mA}$ ($1\\ \\mathrm{W}$).",
      },
      {
        term: "Wire gauge logic",
        kind: "method",
        statement: "American Wire Gauge drops $\\sim 3$ per doubling of area; mains $14$-gauge ($1.63\\ \\mathrm{mm}$) carries $15\\ \\mathrm{A}$ safely, $12$-gauge $20\\ \\mathrm{A}$.",
        detail: "Undersized extension cords overheat by $I^{2}R$ — gauge is fire safety, not convenience.",
      },
      {
        term: "Nonuniform conductors",
        kind: "insight",
        statement: "Tapered or varying-$\\rho$ conductors need $R = \\int \\rho\\,dx/A(x)$: integrate slices in series — the calculus behind fuses and thermistors.",
        detail: "A cone's resistance integrates $dx/(\\pi r(x)^{2})$ — narrow ends dominate.",
      },
    ],
    figures: [
      {
        caption: "$R = \\rho L/A$: resistance grows with length and shrinks with area — the wire-sizing law behind every gauge table.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Resistance versus length and area"><line x1="40" y1="60" x2="200" y2="60" stroke="currentColor" stroke-width="4"/><text x="100" y="50" font-size="12" fill="currentColor">L, thin: big R</text><line x1="40" y1="120" x2="200" y2="120" stroke="currentColor" stroke-width="10"/><text x="100" y="145" font-size="12" fill="currentColor">L, thick: small R</text><line x1="240" y1="60" x2="360" y2="60" stroke="currentColor" stroke-width="4"/><text x="250" y="50" font-size="12" fill="currentColor">2L: double R</text><line x1="240" y1="120" x2="300" y2="120" stroke="currentColor" stroke-width="10"/><text x="250" y="145" font-size="12" fill="currentColor">L/2: half R</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Extension cord drop",
        problem: "A $15.0\\ \\mathrm{m}$ copper cord ($\\rho = 1.72 \\times 10^{-8}$) uses $1.63\\ \\mathrm{mm}$-diameter wire (round trip $30.0\\ \\mathrm{m}$). Find $R$ and voltage drop at $12.0\\ \\mathrm{A}$.",
        steps: [
          { label: "Area", text: "$A = \\pi(1.63 \\times 10^{-3})^{2}/4 = 2.087 \\times 10^{-6}\\ \\mathrm{m^{2}}$." },
          { label: "Resistance", text: "$R = \\rho L/A = (1.72 \\times 10^{-8})(30.0)/2.087 \\times 10^{-6} = 5.16 \\times 10^{-7}/2.087 \\times 10^{-6} = 0.247\\ \\Omega$." },
          { label: "Drop", text: "$V = IR = (12.0)(0.247) = 2.97\\ \\mathrm{V}$ lost in the cord ($2.5$ percent of $120\\ \\mathrm{V}$)." },
        ],
        result: "$R = 0.247\\ \\Omega$; drop $2.97\\ \\mathrm{V}$ at $12\\ \\mathrm{A}$.",
      },
      {
        title: "Resistor power check",
        problem: "Can a $220\\ \\Omega$, $1/4\\ \\mathrm{W}$ resistor carry $30\\ \\mathrm{mA}$?",
        steps: [
          { label: "Power", text: "$P = I^{2}R = (0.030)^{2}(220) = (9.00 \\times 10^{-4})(220) = 0.198\\ \\mathrm{W}$." },
          { label: "Rating", text: "$0.198 < 0.250\\ \\mathrm{W}$: survives, with $21$ percent margin." },
          { label: "At 40 mA", text: "$P = (0.040)^{2}(220) = 0.352\\ \\mathrm{W}$ — smokes. Ratings are thermal, not electrical, limits." },
        ],
        result: "Safe at $30\\ \\mathrm{mA}$ ($0.198\\ \\mathrm{W}$); fails at $40\\ \\mathrm{mA}$.",
      },
    ],
    keyTakeaways: [
      "$R = \\rho L/A$: long-thin resists; short-thick conducts.",
      "$V = IR$ for ohmic devices at fixed $T$.",
      "Ratings cap $I^{2}R$ heating; gauge is fire safety.",
    ],
    quiz: [
      {
        q: "Stretching a wire to twice its length (volume conserved) changes $R$ by:",
        options: ["$2$ times", "$4$ times", "$1/2$", "Unchanged"],
        answer: 1,
        explanation: "$L$ doubles and $A$ halves: $R = \\rho(2L)/(A/2) = 4R$.",
      },
      {
        q: "Ohm's law $V = IR$ fails for:",
        options: ["Copper at fixed $T$", "Filaments (self-heating) and diodes", "All resistors", "Superconductors only"],
        answer: 1,
        explanation: "$\\rho$ must be $E$-independent; heating and junctions break that.",
      },
      {
        q: "A $1/4\\ \\mathrm{W}$, $100\\ \\Omega$ resistor's maximum current is:",
        options: ["$50\\ \\mathrm{mA}$", "$250\\ \\mathrm{mA}$", "$2.5\\ \\mathrm{A}$", "$25\\ \\mu\\mathrm{A}$"],
        answer: 0,
        explanation: "$I = \\sqrt{P/R} = \\sqrt{0.25/100} = 0.050\\ \\mathrm{A}$.",
      },
    ],
  },
  {
    sectionId: "young-ch25-s4",
    readingTime: 6,
    intro: "Batteries are not ideal voltage sources — internal resistance steals volts under load. Young defines emf, derives terminal voltage $V_{ab} = \\mathcal{E} - Ir$, and analyzes complete circuits.",
    objectives: [
      "Define emf $\\mathcal{E}$ as work per charge by the source",
      "Apply $V_{ab} = \\mathcal{E} - Ir$ to loaded batteries",
      "Solve single-loop circuits for current and terminal voltage",
    ],
    concepts: [
      {
        term: "Electromotive force",
        kind: "definition",
        statement: "**Emf** $\\mathcal{E}$ is the source's work per unit charge ($\\mathrm{J/C} = \\mathrm{V}$) from chemical, magnetic, or photovoltaic action — a misnamed voltage, not a force.",
        detail: "Alkaline $1.5\\ \\mathrm{V}$, lead-acid $2.1\\ \\mathrm{V}$/cell, lithium $3.7\\ \\mathrm{V}$: chemistry sets $\\mathcal{E}$.",
      },
      {
        term: "Internal resistance",
        kind: "definition",
        statement: "Real sources carry series **internal resistance** $r$: electrolyte, electrodes, and contacts dissipate $I^{2}r$ inside the battery itself.",
        detail: "Fresh AA $r \\sim 0.15\\ \\Omega$; depleted $r$ climbs past $1\\ \\Omega$ — dead batteries are resistive, not just weak.",
      },
      {
        term: "Terminal voltage",
        kind: "theorem",
        statement: "Loaded terminals read $V_{ab} = \\mathcal{E} - Ir$: a $12.6\\ \\mathrm{V}$, $r = 0.020\\ \\Omega$ car battery at $150\\ \\mathrm{A}$ sags to $12.6 - 3.0 = 9.6\\ \\mathrm{V}$.",
        detail: "Open-circuit ($I = 0$) voltmeters read true $\\mathcal{E}$; cranking meters read the sag.",
      },
      {
        term: "Complete-circuit current",
        kind: "method",
        statement: "Single loop: $I = \\mathcal{E}/(R + r)$ — total emf over total resistance; then $V_{R} = IR$ and $V_{ab} = \\mathcal{E} - Ir$ follow.",
        detail: "Short circuits ($R \\to 0$) draw $\\mathcal{E}/r$: kiloamps from car batteries — fusible links exist for this.",
      },
      {
        term: "Charging reverses the drop",
        kind: "insight",
        statement: "Driving current backward (charging) gives $V_{ab} = \\mathcal{E} + Ir$: chargers must exceed emf by the resistive markup.",
        detail: "$12\\ \\mathrm{V}$ batteries charge at $13.8$–$14.4\\ \\mathrm{V}$ — the $Ir$ overhead made visible.",
      },
    ],
    figures: [
      {
        caption: "Complete circuit: $I = \\mathcal{E}/(R+r)$ with terminal voltage $V_{ab} = \\mathcal{E} - Ir$ sagging under load.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Single loop circuit with emf internal resistance and load"><rect x="80" y="50" width="240" height="70" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="80" y1="70" x2="80" y2="100" stroke="currentColor" stroke-width="4"/><text x="88" y="90" font-size="12" fill="currentColor">source</text><rect x="200" y="50" width="40" height="70" fill="none" stroke="currentColor" stroke-width="3"/><text x="205" y="140" font-size="12" fill="currentColor">R</text><text x="130" y="45" font-size="12" fill="currentColor">I = E/(R+r)</text><text x="130" y="135" font-size="12" fill="currentColor">Vab sags with I</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Car battery under crank",
        problem: "$\\mathcal{E} = 12.6\\ \\mathrm{V}$, $r = 0.015\\ \\Omega$, starter $R = 0.069\\ \\Omega$. Find $I$ and terminal voltage.",
        steps: [
          { label: "Current", text: "$I = \\mathcal{E}/(R+r) = 12.6/(0.069+0.015) = 12.6/0.084 = 150\\ \\mathrm{A}$." },
          { label: "Terminals", text: "$V_{ab} = \\mathcal{E} - Ir = 12.6 - (150)(0.015) = 12.6 - 2.25 = 10.35\\ \\mathrm{V}$." },
          { label: "Power split", text: "Starter $I^{2}R = 1552\\ \\mathrm{W}$; internal $I^{2}r = 337\\ \\mathrm{W}$ wasted as battery heat." },
        ],
        result: "$I = 150\\ \\mathrm{A}$; terminals sag to $10.4\\ \\mathrm{V}$.",
      },
      {
        title: "Finding emf and r",
        problem: "A battery reads $12.60\\ \\mathrm{V}$ open-circuit and $12.00\\ \\mathrm{V}$ delivering $10.0\\ \\mathrm{A}$. Find $\\mathcal{E}$ and $r$.",
        steps: [
          { label: "Emf", text: "Open circuit gives $\\mathcal{E} = 12.60\\ \\mathrm{V}$." },
          { label: "Internal", text: "$r = (\\mathcal{E} - V)/I = (12.60 - 12.00)/10.0 = 0.060\\ \\Omega$." },
          { label: "Short preview", text: "Short current $\\approx 12.6/0.06 = 210\\ \\mathrm{A}$ — fuse accordingly." },
        ],
        result: "$\\mathcal{E} = 12.6\\ \\mathrm{V}$, $r = 60\\ \\mathrm{m\\Omega}$.",
      },
    ],
    keyTakeaways: [
      "$\\mathcal{E}$ is source work per charge; $r$ is its series resistance.",
      "Loaded $V_{ab} = \\mathcal{E} - Ir$; charging $\\mathcal{E} + Ir$.",
      "Loop current $I = \\mathcal{E}/(R+r)$; open circuits read true $\\mathcal{E}$.",
    ],
    quiz: [
      {
        q: "Terminal voltage sags under load because:",
        options: ["Emf drops", "Current through internal $r$ wastes $Ir$ volts", "Wires gain resistance only", "Charge is lost"],
        answer: 1,
        explanation: "$V_{ab} = \\mathcal{E} - Ir$: internal dissipation steals terminal volts proportionally to $I$.",
      },
      {
        q: "A $9\\ \\mathrm{V}$ battery with $r = 2\\ \\Omega$ shorted delivers about:",
        options: ["$9\\ \\mathrm{A}$", "$4.5\\ \\mathrm{A}$", "$18\\ \\mathrm{A}$", "Zero"],
        answer: 1,
        explanation: "$I = \\mathcal{E}/r = 9/2 = 4.5\\ \\mathrm{A}$ — all $40.5\\ \\mathrm{W}$ inside the battery.",
      },
      {
        q: "Charging a battery requires applied voltage:",
        options: ["Below $\\mathcal{E}$", "Above $\\mathcal{E}$ by $Ir$", "Equal to zero", "AC only"],
        answer: 1,
        explanation: "$V_{\\mathrm{applied}} = \\mathcal{E} + Ir$ drives reverse current through $r$.",
      },
      {
        q: "Open-circuit voltmeter reads:",
        options: ["$Ir$", "True emf $\\mathcal{E}$", "Zero", "Double $\\mathcal{E}$"],
        answer: 1,
        explanation: "$I = 0$ kills the $Ir$ drop: $V_{ab} = \\mathcal{E}$.",
      },
    ],
  },
  {
    sectionId: "young-ch25-s5",
    readingTime: 5,
    intro: "Resistors turn electrical work into heat at $P = VI$ — Young prices Joule heating, battery energy, and the kilowatt-hours on your bill, with wire-gauge safety as the payoff.",
    objectives: [
      "Apply $P = VI = I^{2}R = V^{2}/R$ to heaters and loads",
      "Compute battery energy and lifetime from ratings",
      "Convert watts to kilowatt-hours and billing cost",
    ],
    concepts: [
      {
        term: "Electric power",
        kind: "theorem",
        statement: "Delivering $I$ across $V$ transfers $P = VI$; with $V = IR$ this is $P = I^{2}R = V^{2}/R$ — Joule heating in resistors, useful work in motors.",
        detail: "A $120\\ \\mathrm{V}$, $5\\ \\mathrm{A}$ heater makes $600\\ \\mathrm{W}$; doubling voltage quadruples $V^{2}/R$ power.",
      },
      {
        term: "Heating versus delivery",
        kind: "insight",
        statement: "$I^{2}R$ in transmission lines wastes; $V^{2}/R$ in loads earns — high-voltage transmission minimizes $I$ (hence $I^{2}R$) for fixed $VI$ power.",
        detail: "$100\\ \\mathrm{MW}$ at $500\\ \\mathrm{kV}$ loses $25$ times less than at $100\\ \\mathrm{kV}$ — the grid's voltage logic.",
      },
      {
        term: "Battery ratings",
        kind: "notation",
        statement: "Batteries rate in ampere-hours ($\\mathrm{Ah}$): $2.5\\ \\mathrm{Ah}$ at $12\\ \\mathrm{V}$ stores $(2.5)(12) = 30\\ \\mathrm{Wh} = 1.08 \\times 10^{5}\\ \\mathrm{J}$ — capacity times voltage is energy.",
        detail: "Drain at $0.5\\ \\mathrm{A}$ lasts $5\\ \\mathrm{h}$ ideally; Peukert losses shorten high-rate discharge.",
      },
      {
        term: "Kilowatt-hours and bills",
        kind: "method",
        statement: "Utilities sell $1\\ \\mathrm{kWh} = 3.6 \\times 10^{6}\\ \\mathrm{J}$; a $1500\\ \\mathrm{W}$ heater running $8\\ \\mathrm{h}$ uses $12\\ \\mathrm{kWh}$ ($\\sim$ $1.80$ dollars at $0.15$/kWh).",
        detail: "Watts are rate; watt-hours are purchase — bills meter energy, not power.",
      },
      {
        term: "Fuse sizing",
        kind: "law",
        statement: "Wires and fuses cap $I^{2}R$ heating: $14$-gauge ($15\\ \\mathrm{A}$) versus $12$-gauge ($20\\ \\mathrm{A}$) limits protect insulation from $I^{2}R$ ignition.",
        detail: "Fuses sacrifice themselves at calibrated $I^{2}t$ — thermal integrals, not just current thresholds.",
      },
    ],
    examples: [
      {
        title: "Heater resistance and current",
        problem: "A $1500\\ \\mathrm{W}$, $120\\ \\mathrm{V}$ heater: find $R$ and $I$.",
        steps: [
          { label: "Resistance", text: "$R = V^{2}/P = 14400/1500 = 9.60\\ \\Omega$." },
          { label: "Current", text: "$I = P/V = 1500/120 = 12.5\\ \\mathrm{A}$ — within a $15\\ \\mathrm{A}$ circuit, barely." },
          { label: "Two heaters", text: "$25\\ \\mathrm{A}$ trips the breaker: $I^{2}R$ protection doing its job." },
        ],
        result: "$R = 9.60\\ \\Omega$; $I = 12.5\\ \\mathrm{A}$.",
      },
      {
        title: "Phone battery energy",
        problem: "A $3.7\\ \\mathrm{V}$, $3000\\ \\mathrm{mAh}$ phone battery: find stored energy and talk time at $1.5\\ \\mathrm{W}$ drain.",
        steps: [
          { label: "Energy", text: "$E = (3.00\\ \\mathrm{Ah})(3.7\\ \\mathrm{V}) = 11.1\\ \\mathrm{Wh} = 3.996 \\times 10^{4}\\ \\mathrm{J}$." },
          { label: "Time", text: "$t = 11.1/1.5 = 7.4\\ \\mathrm{h}$ of talk." },
          { label: "Standby", text: "At $0.05\\ \\mathrm{W}$ standby: $11.1/0.05 = 222\\ \\mathrm{h}$ — nine days." },
        ],
        result: "$11.1\\ \\mathrm{Wh}$ ($40\\ \\mathrm{kJ}$); $7.4\\ \\mathrm{h}$ talk.",
      },
    ],
    keyTakeaways: [
      "$P = VI = I^{2}R = V^{2}/R$: one power, three faces.",
      "High-$V$ transmission beats $I^{2}R$ loss; $\\mathrm{Ah} \\times V$ is stored energy.",
      "Bills meter $\\mathrm{kWh}$ ($3.6\\ \\mathrm{MJ}$); fuses cap $I^{2}t$.",
    ],
    quiz: [
      {
        q: "Halving voltage on a fixed resistor changes power by:",
        options: ["$1/2$", "$1/4$", "$2$ times", "Unchanged"],
        answer: 1,
        explanation: "$P = V^{2}/R \\propto V^{2}$: $(1/2)^{2} = 1/4$.",
      },
      {
        q: "Transmission uses high voltage to:",
        options: ["Raise current", "Cut $I^{2}R$ loss for fixed delivered $VI$", "Increase resistance", "Avoid transformers"],
        answer: 1,
        explanation: "Fixed power at higher $V$ means lower $I$; losses fall as $I^{2}$.",
      },
      {
        q: "A $2\\ \\mathrm{kW}$ heater running $30$ minutes uses:",
        options: ["$1\\ \\mathrm{kWh}$", "$2\\ \\mathrm{kWh}$", "$60\\ \\mathrm{kWh}$", "$0.5\\ \\mathrm{kWh}$"],
        answer: 0,
        explanation: "$(2\\ \\mathrm{kW})(0.5\\ \\mathrm{h}) = 1\\ \\mathrm{kWh} = 3.6\\ \\mathrm{MJ}$.",
      },
    ],
  },
  {
    sectionId: "young-ch25-s6",
    readingTime: 6,
    intro: "Ohm's law emerges from electron pinball: accelerate, collide, repeat. Young derives $\\rho = m/(ne^{2}\\tau)$ in the Drude model and connects conductivity to mean free path and Fermi speed.",
    objectives: [
      "Derive $\\vec{J} = \\sigma\\vec{E}$ from collision-averaged drift",
      "Express $\\rho = m/(ne^{2}\\tau)$ with scattering time $\\tau$",
      "Explain temperature dependence via phonon scattering",
    ],
    concepts: [
      {
        term: "Drude collision model",
        kind: "definition",
        statement: "Electrons accelerate freely for mean time $\\tau$ between collisions, then scatter randomly (zero average velocity); the field rebuilds drift $\\vec{v}_{d} = -e\\vec{E}\\tau/m$ each interval.",
        detail: "Ions are bowling pins; electrons are balls re-aimed by $\\vec{E}$ after every hit — steady drift from repeated resetting.",
      },
      {
        term: "Microscopic Ohm's law",
        kind: "theorem",
        statement: "With $\\vec{J} = -ne\\vec{v}_{d}$ and $\\vec{v}_{d} = -e\\vec{E}\\tau/m$, $\\vec{J} = (ne^{2}\\tau/m)\\vec{E}$: hence $\\sigma = ne^{2}\\tau/m$ and $\\rho = m/(ne^{2}\\tau)$.",
        detail: "Copper's $\\tau \\approx 2.7 \\times 10^{-14}\\ \\mathrm{s}$ reproduces $\\rho = 1.72 \\times 10^{-8}$ — pinball predicts the tables.",
      },
      {
        term: "Mean free path",
        kind: "method",
        statement: "With Fermi speed $v_{F} \\approx 1.57 \\times 10^{6}\\ \\mathrm{m/s}$, copper's $\\lambda = v_{F}\\tau \\approx 42\\ \\mathrm{nm}$ — $100$ atomic spacings between hits at room $T$.",
        detail: "Perfect lattices would never scatter (Bloch waves); phonons and defects supply the pins.",
      },
      {
        term: "Why rho rises with T",
        kind: "law",
        statement: "Hotter lattices vibrate more (more phonons), shortening $\\tau \\propto 1/T$ above Debye temperature — hence $\\rho \\propto T$ and $\\alpha \\approx 1/T_{0}$.",
        detail: "$\\alpha = 1/293 = 3.4 \\times 10^{-3}$ predicted versus $3.93 \\times 10^{-3}$ measured for copper — phonon physics in one line.",
      },
      {
        term: "Drude limits",
        kind: "insight",
        statement: "Drude misses $T$-linear heat capacity and $\\tau$'s $T^{5}$ cryogenic fall (quantum Fermi-Dirac and Bloch-Grüneisen fixes), but nails $\\sigma$'s scale — right mechanism, classical statistics.",
        detail: "Sommerfeld's quantum upgrade keeps $\\rho = m/(ne^{2}\\tau)$ with $\\tau$ evaluated at the Fermi surface.",
      },
    ],
    figures: [
      {
        caption: "Drude pinball: $\\vec{E}$ accelerates each electron until a randomizing collision resets drift; average velocity $\\vec{v}_{d} = -e\\vec{E}\\tau/m$.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Drude electron scattering between collisions"><g fill="currentColor" opacity="0.5"><circle cx="100" cy="50" r="6"/><circle cx="160" cy="110" r="6"/><circle cx="230" cy="55" r="6"/><circle cx="300" cy="115" r="6"/></g><path d="M40,85 Q90,80 98,58 Q140,70 158,102 Q200,95 228,63 Q270,75 298,107 L350,100" fill="none" stroke="currentColor" stroke-width="2"/><text x="45" y="140" font-size="12" fill="currentColor">accelerate → collide → repeat; vd = −eEτ/m</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Scattering time for copper",
        problem: "From $\\rho = 1.72 \\times 10^{-8}$, $n = 8.5 \\times 10^{28}$ find $\\tau$ for copper.",
        steps: [
          { label: "Invert", text: "$\\tau = m/(ne^{2}\\rho) = 9.11 \\times 10^{-31}/(8.5 \\times 10^{28} \\times 2.566 \\times 10^{-38} \\times 1.72 \\times 10^{-8})$." },
          { label: "Denominator", text: "$(8.5 \\times 10^{28})(2.566 \\times 10^{-38}) = 2.181 \\times 10^{-9}$; times $1.72 \\times 10^{-8}$ gives $3.752 \\times 10^{-17}$." },
          { label: "Time", text: "$\\tau = 9.11 \\times 10^{-31}/3.752 \\times 10^{-17} = 2.43 \\times 10^{-14}\\ \\mathrm{s}$." },
        ],
        result: "$\\tau \\approx 2.4 \\times 10^{-14}\\ \\mathrm{s}$ between collisions.",
      },
      {
        title: "Mean free path",
        problem: "With $\\tau = 2.43 \\times 10^{-14}\\ \\mathrm{s}$ and $v_{F} = 1.57 \\times 10^{6}\\ \\mathrm{m/s}$, find $\\lambda$ and atomic spacings crossed.",
        steps: [
          { label: "Path", text: "$\\lambda = v_{F}\\tau = (1.57 \\times 10^{6})(2.43 \\times 10^{-14}) = 3.82 \\times 10^{-8}\\ \\mathrm{m} = 38\\ \\mathrm{nm}$." },
          { label: "Spacings", text: "$38/0.26 \\approx 146$ copper spacings ($0.26\\ \\mathrm{nm}$) per free flight." },
          { label: "Drift comparison", text: "Drift $10^{-4}\\ \\mathrm{m/s}$ versus Fermi $10^{6}$: drift is a $10^{-10}$ breeze on a hurricane." },
        ],
        result: "$\\lambda \\approx 38\\ \\mathrm{nm}$ ($\\sim 150$ spacings).",
      },
    ],
    keyTakeaways: [
      "Collisions reset drift each $\\tau$: $\\vec{v}_{d} = -e\\vec{E}\\tau/m$.",
      "$\\rho = m/(ne^{2}\\tau)$: density, charge, and scattering set resistivity.",
      "Phonons shorten $\\tau$ with $T$ ($\\rho \\propto T$); $\\lambda = v_{F}\\tau \\sim 40\\ \\mathrm{nm}$.",
    ],
    quiz: [
      {
        q: "In the Drude model, drift velocity is proportional to:",
        options: ["$E^{2}$", "$E$", "$1/E$", "$T^{2}$"],
        answer: 1,
        explanation: "$\\vec{v}_{d} = -e\\vec{E}\\tau/m$: linear in field (Ohmic) at fixed $\\tau$.",
      },
      {
        q: "Copper's long $\\lambda \\sim 40\\ \\mathrm{nm}$ means electrons cross ~$150$ spacings because:",
        options: ["Atoms are absent", "Bloch waves ignore perfect lattices; only phonons/defects scatter", "Electrons tunnel", "Copper is a superconductor"],
        answer: 1,
        explanation: "Periodic potentials propagate electrons freely; disorder (vibrations, impurities) causes the rare hits.",
      },
      {
        q: "Resistivity rises with $T$ in Drude because:",
        options: ["$n$ falls", "$\\tau$ shortens from phonon scattering", "$e$ changes", "$m$ rises"],
        answer: 1,
        explanation: "$\\rho = m/(ne^{2}\\tau)$: more phonons mean more frequent resets, smaller $\\tau$, larger $\\rho$.",
      },
    ],
  },
]

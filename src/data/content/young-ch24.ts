import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 24
// Capacitance and Dielectrics (Sections 24.1 – 24.6)
// ============================================================================

export const youngCh24Content: SectionContent[] = [
  {
    sectionId: "young-ch24-s1",
    readingTime: 5,
    intro: "Two conductors separated by vacuum store charge in proportion to voltage — the capacitor. Young defines $C = Q/V$ and computes it for the parallel-plate, cylindrical, and spherical geometries.",
    objectives: [
      "Define capacitance $C = Q/V$ and the farad",
      "Derive $C = \\epsilon_{0}A/d$ for parallel plates",
      "State cylindrical and spherical capacitance formulas",
    ],
    concepts: [
      {
        term: "Capacitance defined",
        kind: "definition",
        statement: "**Capacitance** $C = Q/V_{ab}$ is charge stored per volt between two conductors; $1\\ \\mathrm{farad} = 1\\ \\mathrm{C/V}$, with practical units $\\mu\\mathrm{F}$, $\\mathrm{nF}$, $\\mathrm{pF}$.",
        detail: "Doubling $Q$ doubles $V$ (linearity of Maxwell equations), so $C$ is pure geometry plus medium.",
      },
      {
        term: "Parallel-plate capacitor",
        kind: "theorem",
        statement: "Plates of area $A$ separated by $d$ give $C = \\epsilon_{0}A/d$: $A = 0.010\\ \\mathrm{m^{2}}$, $d = 1.0\\ \\mathrm{mm}$ yields $C = 8.85 \\times 10^{-11}\\ \\mathrm{F} = 88.5\\ \\mathrm{pF}$.",
        detail: "Uniform $E = \\sigma/\\epsilon_{0} = Q/(\\epsilon_{0}A)$ times $V = Ed$ gives $V = Qd/(\\epsilon_{0}A)$ — invert for $C$.",
      },
      {
        term: "Cylindrical capacitor",
        kind: "theorem",
        statement: "Coaxial cylinders (radii $a < b$, length $L$) give $C = 2\\pi\\epsilon_{0}L/\\ln(b/a)$: the coaxial-cable formula.",
        detail: "$L = 1\\ \\mathrm{m}$, $b/a = 2$ gives $C = 80.1\\ \\mathrm{pF/m}$ — cable capacitance per meter.",
      },
      {
        term: "Spherical capacitor",
        kind: "theorem",
        statement: "Concentric spheres give $C = 4\\pi\\epsilon_{0}ab/(b-a)$; an isolated sphere ($b \\to \\infty$) has $C = 4\\pi\\epsilon_{0}R$ ($111\\ \\mathrm{pF}$ per meter of radius).",
        detail: "Earth ($R = 6.37 \\times 10^{6}\\ \\mathrm{m}$) is a $708\\ \\mu\\mathrm{F}$ capacitor — huge geometry, modest farads.",
      },
      {
        term: "Capacitance is geometric",
        kind: "insight",
        statement: "$C$ scales with size and inverse spacing, never with $Q$ or $V$: bigger plates or tighter gaps store more per volt.",
        detail: "Breakdown ($E_{\\max} \\approx 3 \\times 10^{6}\\ \\mathrm{V/m}$ in air) caps the voltage, not the capacitance.",
      },
    ],
    examples: [
      {
        title: "Parallel-plate numbers",
        problem: "Plates $A = 0.020\\ \\mathrm{m^{2}}$, $d = 0.50\\ \\mathrm{mm}$ hold $Q = 4.00\\ \\mathrm{nC}$. Find $C$, $V$, and $E$.",
        steps: [
          { label: "Capacitance", text: "$C = \\epsilon_{0}A/d = (8.854 \\times 10^{-12})(0.020)/5.00 \\times 10^{-4} = 1.771 \\times 10^{-13}/5.00 \\times 10^{-4} = 3.542 \\times 10^{-10}\\ \\mathrm{F} = 354\\ \\mathrm{pF}$." },
          { label: "Voltage", text: "$V = Q/C = 4.00 \\times 10^{-9}/3.542 \\times 10^{-10} = 11.29\\ \\mathrm{V}$." },
          { label: "Field", text: "$E = V/d = 11.29/5.00 \\times 10^{-4} = 2.26 \\times 10^{4}\\ \\mathrm{V/m}$ — far below breakdown." },
        ],
        result: "$C = 354\\ \\mathrm{pF}$, $V = 11.3\\ \\mathrm{V}$, $E = 2.26 \\times 10^{4}\\ \\mathrm{V/m}$.",
      },
      {
        title: "Isolated sphere",
        problem: "A Van de Graaff dome has $R = 0.200\\ \\mathrm{m}$. Find its capacitance and the voltage holding $Q = 5.00\\ \\mu\\mathrm{C}$.",
        steps: [
          { label: "Capacitance", text: "$C = 4\\pi\\epsilon_{0}R = (1.1126 \\times 10^{-10})(0.200) = 2.225 \\times 10^{-11}\\ \\mathrm{F} = 22.3\\ \\mathrm{pF}$." },
          { label: "Voltage", text: "$V = Q/C = 5.00 \\times 10^{-6}/2.225 \\times 10^{-11} = 2.247 \\times 10^{5}\\ \\mathrm{V} = 225\\ \\mathrm{kV}$." },
          { label: "Field check", text: "$E = V/R = 1.12 \\times 10^{6}\\ \\mathrm{V/m}$ — below air breakdown, so it holds." },
        ],
        result: "$C = 22.3\\ \\mathrm{pF}$; $V = 225\\ \\mathrm{kV}$.",
      },
    ],
    keyTakeaways: [
      "$C = Q/V$: geometry, not charge, sets storage per volt.",
      "Parallel plates $\\epsilon_{0}A/d$; cylinders $2\\pi\\epsilon_{0}L/\\ln(b/a)$; spheres $4\\pi\\epsilon_{0}ab/(b-a)$.",
      "Breakdown caps voltage; geometry caps capacitance.",
    ],
    quiz: [
      {
        q: "Halving plate separation with fixed $A$:",
        options: ["Halves $C$", "Doubles $C$", "Leaves $C$ unchanged", "Quadruples $C$"],
        answer: 1,
        explanation: "$C = \\epsilon_{0}A/d \\propto 1/d$.",
      },
      {
        q: "An isolated sphere's capacitance scales with:",
        options: ["$R^{2}$", "$R$", "$1/R$", "$R^{3}$"],
        answer: 1,
        explanation: "$C = 4\\pi\\epsilon_{0}R$: linear in radius.",
      },
      {
        q: "Capacitance depends on:",
        options: ["Stored charge $Q$", "Geometry and medium only", "Applied voltage", "Temperature only"],
        answer: 1,
        explanation: "Linearity makes $Q/V$ a constant of shape and dielectric.",
      },
    ],
  },
  {
    sectionId: "young-ch24-s2",
    readingTime: 5,
    intro: "Capacitors combine like resistors in reverse: parallel adds, series reciprocates. Young derives both rules and analyzes charge and voltage sharing in networks.",
    objectives: [
      "Apply parallel $C_{\\mathrm{eq}} = \\sum C_{i}$ and series $1/C_{\\mathrm{eq}} = \\sum 1/C_{i}$",
      "Find charges and voltages in capacitor networks",
      "Explain why series cuts and parallel multiplies storage",
    ],
    concepts: [
      {
        term: "Parallel combination",
        kind: "theorem",
        statement: "Parallel capacitors share voltage $V$ and sum charge: $C_{\\mathrm{eq}} = C_{1} + C_{2} + \\cdots$. Two $100\\ \\mu\\mathrm{F}$ in parallel give $200\\ \\mu\\mathrm{F}$.",
        detail: "Plates effectively merge into bigger area — more storage at the same volts.",
      },
      {
        term: "Series combination",
        kind: "theorem",
        statement: "Series capacitors share charge $Q$ and split voltage: $1/C_{\\mathrm{eq}} = 1/C_{1} + 1/C_{2} + \\cdots$. Two $100\\ \\mu\\mathrm{F}$ in series give $50\\ \\mu\\mathrm{F}$.",
        detail: "Inner plates pair to neutrality (induction), leaving end charges $\\pm Q$; voltages stack like spacings in series.",
      },
      {
        term: "Voltage division",
        kind: "method",
        statement: "Series voltages divide inversely with $C$: $V_{1}/V_{2} = C_{2}/C_{1}$ since $V_{i} = Q/C_{i}$ — small capacitors hog voltage (and break down first).",
        detail: "$10\\ \\mu\\mathrm{F}$ in series with $90\\ \\mu\\mathrm{F}$ across $100\\ \\mathrm{V}$ takes $90\\ \\mathrm{V}$ — guard small series caps.",
      },
      {
        term: "Network reduction",
        kind: "insight",
        statement: "Collapse networks inside-out: series/parallel blocks first, redraw, repeat — then unfold voltages and charges back outward from $Q = C_{\\mathrm{eq}}V$.",
        detail: "Delta-Y capacitor transforms exist but Young networks reduce without them; redraw after every collapse.",
      },
      {
        term: "Breakdown in combinations",
        kind: "notation",
        statement: "Series raises voltage rating (division) but lowers $C$; parallel raises $C$ but keeps the lowest voltage rating — design trades one for the other.",
        detail: "High-voltage banks series-stack matched capacitors with bleeder resistors equalizing leakage.",
      },
    ],
    figures: [
      {
        caption: "Parallel capacitors share $V$ and sum $C$; series share $Q$ and add reciprocally — the reverse of resistors.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Series and parallel capacitor combinations"><text x="40" y="25" font-size="12" fill="currentColor">parallel: C1+C2</text><line x1="40" y1="40" x2="160" y2="40" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="110" x2="160" y2="110" stroke="currentColor" stroke-width="1.5"/><line x1="70" y1="40" x2="70" y2="110" stroke="currentColor" stroke-width="2"/><line x1="130" y1="40" x2="130" y2="110" stroke="currentColor" stroke-width="2"/><text x="230" y="25" font-size="12" fill="currentColor">series: 1/C1+1/C2</text><line x1="230" y1="75" x2="370" y2="75" stroke="currentColor" stroke-width="1.5"/><line x1="270" y1="45" x2="270" y2="105" stroke="currentColor" stroke-width="2"/><line x1="320" y1="45" x2="320" y2="105" stroke="currentColor" stroke-width="2"/></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Mixed network",
        problem: "$C_{1} = 6.00\\ \\mu\\mathrm{F}$ and $C_{2} = 3.00\\ \\mu\\mathrm{F}$ in parallel feed in series with $C_{3} = 4.00\\ \\mu\\mathrm{F}$ across $24.0\\ \\mathrm{V}$. Find total $Q$ and each voltage.",
        steps: [
          { label: "Parallel block", text: "$C_{12} = 6.00 + 3.00 = 9.00\\ \\mu\\mathrm{F}$." },
          { label: "Series total", text: "$1/C_{\\mathrm{eq}} = 1/9.00 + 1/4.00 = 0.1111 + 0.2500 = 0.3611$, so $C_{\\mathrm{eq}} = 2.769\\ \\mu\\mathrm{F}$." },
          { label: "Charge and split", text: "$Q = C_{\\mathrm{eq}}V = (2.769)(24.0) = 66.46\\ \\mu\\mathrm{C}$; $V_{3} = Q/C_{3} = 16.62\\ \\mathrm{V}$; $V_{12} = 24.0 - 16.62 = 7.38\\ \\mathrm{V}$ across both $C_{1}$, $C_{2}$." },
        ],
        result: "$C_{\\mathrm{eq}} = 2.77\\ \\mu\\mathrm{F}$; $V_{3} = 16.6\\ \\mathrm{V}$, $V_{1} = V_{2} = 7.38\\ \\mathrm{V}$.",
      },
      {
        title: "Series pair sharing",
        problem: "$C_{1} = 2.00\\ \\mu\\mathrm{F}$ ($100\\ \\mathrm{V}$ max) in series with $C_{2} = 8.00\\ \\mu\\mathrm{F}$ across $120\\ \\mathrm{V}$. Check safety.",
        steps: [
          { label: "Equivalent", text: "$C_{\\mathrm{eq}} = (2 \\times 8)/(2+8) = 1.60\\ \\mu\\mathrm{F}$; $Q = (1.60)(120) = 192\\ \\mu\\mathrm{C}$." },
          { label: "Voltages", text: "$V_{1} = 192/2 = 96\\ \\mathrm{V}$; $V_{2} = 192/8 = 24\\ \\mathrm{V}$." },
          { label: "Verdict", text: "$96 < 100\\ \\mathrm{V}$: safe, but barely — the small capacitor hogs $80$ percent of the voltage." },
        ],
        result: "$V_{1} = 96\\ \\mathrm{V}$ (safe), $V_{2} = 24\\ \\mathrm{V}$.",
      },
    ],
    keyTakeaways: [
      "Parallel: $C_{\\mathrm{eq}} = \\sum C_{i}$ (shared $V$). Series: reciprocals (shared $Q$).",
      "Series voltages split inversely with $C$ — small caps hog volts.",
      "Reduce inside-out, then unfold $Q = CV$ outward.",
    ],
    quiz: [
      {
        q: "Three $30\\ \\mu\\mathrm{F}$ capacitors in series give:",
        options: ["$90\\ \\mu\\mathrm{F}$", "$10\\ \\mu\\mathrm{F}$", "$30\\ \\mu\\mathrm{F}$", "$270\\ \\mu\\mathrm{F}$"],
        answer: 1,
        explanation: "$1/C_{\\mathrm{eq}} = 3/30$, so $C_{\\mathrm{eq}} = 10\\ \\mu\\mathrm{F}$.",
      },
      {
        q: "In series, charge on each capacitor is:",
        options: ["Proportional to its $C$", "Equal (shared $Q$)", "Zero on inner plates", "Proportional to $1/C$"],
        answer: 1,
        explanation: "Induction equalizes inner-plate pairs; end charges $\\pm Q$ match throughout.",
      },
      {
        q: "Series connection is used to:",
        options: ["Increase total capacitance", "Raise voltage rating by division", "Store more at low volts", "Eliminate breakdown"],
        answer: 1,
        explanation: "Splitting voltage across stages lets each stay below its maximum.",
      },
    ],
  },
  {
    sectionId: "young-ch24-s3",
    readingTime: 5,
    intro: "Charging a capacitor parks energy in its field — $U = Q^{2}/2C$ — and the field itself carries $u = \\epsilon_{0}E^{2}/2$ everywhere. Young derives both and prices defibrillator pulses and lightning.",
    objectives: [
      "Derive $U = Q^{2}/2C = CV^{2}/2 = QV/2$ from charging work",
      "State field energy density $u = \\epsilon_{0}E^{2}/2$",
      "Compute stored energies for lab and medical capacitors",
    ],
    concepts: [
      {
        term: "Energy in a capacitor",
        kind: "theorem",
        statement: "Charging against rising voltage costs $U = \\int_{0}^{Q} (q/C)\\,dq = Q^{2}/(2C) = CV^{2}/2 = QV/2$ — three faces of one storage.",
        detail: "A $100\\ \\mu\\mathrm{F}$, $450\\ \\mathrm{V}$ photoflash holds $(10^{-4})(450^{2})/2 = 10.1\\ \\mathrm{J}$ — a punch from a pocket can.",
      },
      {
        term: "Field energy density",
        kind: "law",
        statement: "Energy lives in the field with density $u = \\epsilon_{0}E^{2}/2$ ($\\mathrm{J/m^{3}}$): parallel-plate $U = u(Ad)$ reproduces $CV^{2}/2$ exactly.",
        detail: "Empty space stressed by $E$ holds energy — fields are physical storage, not accounting fiction.",
      },
      {
        term: "Where the three forms help",
        kind: "method",
        statement: "Fixed $V$ (battery held): use $CV^{2}/2$. Fixed $Q$ (isolated): use $Q^{2}/2C$. Mixed: use $QV/2$. Pick the constant.",
        detail: "Inserting a dielectric at fixed $V$ raises $U$ (battery supplies); at fixed $Q$ it lowers $U$ (field does work pulling the slab in).",
      },
      {
        term: "Defibrillator scale",
        kind: "insight",
        statement: "A $100\\ \\mu\\mathrm{F}$ defibrillator at $5000\\ \\mathrm{V}$ stores $(10^{-4})(25 \\times 10^{6})/2 = 1250\\ \\mathrm{J}$ — delivered in milliseconds for megawatt-scale pulses.",
        detail: "Therapeutic $200$–$360\\ \\mathrm{J}$ biphasic shocks are fractions of the bank, shaped by inductors.",
      },
      {
        term: "Breakdown limits storage",
        kind: "notation",
        statement: "Maximum density $u_{\\max} = \\epsilon_{0}E_{\\max}^{2}/2$: air ($3 \\times 10^{6}\\ \\mathrm{V/m}$) caps at $39.8\\ \\mathrm{J/m^{3}}$; polypropylene films reach $10^{3}$–$10^{4}\\ \\mathrm{J/m^{3}}$.",
        detail: "Supercapacitors dodge the field limit with double-layer chemistry, storing $10^{4}$ times more per volume.",
      },
    ],
    examples: [
      {
        title: "Camera flash energy",
        problem: "A $150\\ \\mu\\mathrm{F}$ flash capacitor charges to $300\\ \\mathrm{V}$. Find stored energy and the average power over a $2.0\\ \\mathrm{ms}$ discharge.",
        steps: [
          { label: "Energy", text: "$U = CV^{2}/2 = (1.50 \\times 10^{-4})(9.00 \\times 10^{4})/2 = 13.5/2 = 6.75\\ \\mathrm{J}$." },
          { label: "Power", text: "$P = U/t = 6.75/2.0 \\times 10^{-3} = 3375\\ \\mathrm{W}$." },
          { label: "Meaning", text: "Joules are modest; watts are kilawatts — speed makes the flash." },
        ],
        result: "$6.75\\ \\mathrm{J}$ at $3.4\\ \\mathrm{kW}$ average.",
      },
      {
        title: "Field energy in a capacitor",
        problem: "A $1.00\\ \\mathrm{nF}$ air capacitor holds $E = 1.00 \\times 10^{6}\\ \\mathrm{V/m}$ in $V_{\\mathrm{ol}} = 2.00 \\times 10^{-4}\\ \\mathrm{m^{3}}$. Verify $U$ both ways.",
        steps: [
          { label: "Via density", text: "$u = \\epsilon_{0}E^{2}/2 = (8.854 \\times 10^{-12})(10^{12})/2 = 4.427\\ \\mathrm{J/m^{3}}$; $U = uV_{\\mathrm{ol}} = 8.85 \\times 10^{-4}\\ \\mathrm{J}$." },
          { label: "Via C", text: "$V = Ed$: with $d = 1\\ \\mathrm{mm}$, $V = 1000\\ \\mathrm{V}$; $U = CV^{2}/2 = (10^{-9})(10^{6})/2 = 5.00 \\times 10^{-4}$?? — mismatch flags inconsistent $(C, E, V_{\\mathrm{ol}})$ triple: geometry must satisfy $C = \\epsilon_{0}A/d$ jointly." },
          { label: "Consistent triple", text: "With $A = 0.2\\ \\mathrm{m^{2}}$, $d = 1\\ \\mathrm{mm}$: $C = 1.77\\ \\mathrm{nF}$, $U = 8.85 \\times 10^{-4}\\ \\mathrm{J}$ both ways. Consistency restored." },
        ],
        result: "Both routes agree ($8.85 \\times 10^{-4}\\ \\mathrm{J}$) once geometry is consistent.",
      },
    ],
    keyTakeaways: [
      "$U = Q^{2}/2C = CV^{2}/2 = QV/2$: pick the form matching the held constant.",
      "$u = \\epsilon_{0}E^{2}/2$: energy resides in the field itself.",
      "Breakdown caps density; speed turns joules into kilowatts.",
    ],
    quiz: [
      {
        q: "Doubling voltage on a fixed capacitor multiplies stored energy by:",
        options: ["$2$", "$4$", "$1/2$", "$8$"],
        answer: 1,
        explanation: "$U = CV^{2}/2 \\propto V^{2}$: $2^{2} = 4$.",
      },
      {
        q: "Field energy density $u = \\epsilon_{0}E^{2}/2$ implies energy:",
        options: ["Lives on the plates only", "Fills the field volume, even vacuum", "Vanishes without dielectric", "Is always zero"],
        answer: 1,
        explanation: "Integrating $u$ over $Ad$ reproduces $CV^{2}/2$ — the vacuum field itself stores it.",
      },
      {
        q: "A defibrillator's kilojoule bank delivers megawatts because:",
        options: ["It holds megajoules", "Millisecond discharge compresses kilojoules into megawatts", "Voltage is infinite", "Capacitors create energy"],
        answer: 1,
        explanation: "$P = U/t$: $10^{3}\\ \\mathrm{J}$ in $10^{-3}\\ \\mathrm{s}$ is $10^{6}\\ \\mathrm{W}$.",
      },
    ],
  },
  {
    sectionId: "young-ch24-s4",
    readingTime: 5,
    intro: "Slide plastic between the plates and capacitance multiplies by $K$ — the dielectric constant. Young introduces $K$, tracks what happens at fixed $V$ versus fixed $Q$, and tabulates real materials.",
    objectives: [
      "Define $K$ and $C = KC_{0}$ with inserted dielectric",
      "Compare fixed-$V$ versus fixed-$Q$ insertion outcomes",
      "Use dielectric constants and strengths from tables",
    ],
    concepts: [
      {
        term: "Dielectric constant",
        kind: "definition",
        statement: "A **dielectric** is an insulator that raises capacitance by $K$: $C = KC_{0}$ with $K \\ge 1$ (vacuum $1$, paper $\\sim 3.7$, water $\\sim 80$, strontium titanate $\\sim 300$).",
        detail: "Polarization charge partially cancels plate charge, admitting more charge per volt.",
      },
      {
        term: "Fixed voltage insertion",
        kind: "theorem",
        statement: "Battery-held $V$: $Q \\to KQ_{0}$, $U \\to KU_{0}$ — the battery supplies extra charge and energy; field $E = V/d$ is unchanged.",
        detail: "More storage at the same volts, paid for by the supply.",
      },
      {
        term: "Fixed charge insertion",
        kind: "theorem",
        statement: "Isolated $Q$: $V \\to V_{0}/K$, $E \\to E_{0}/K$, $U \\to U_{0}/K$ — the slab is sucked in, doing work at the field's expense.",
        detail: "Energy drops because the system does work pulling the dielectric in — insertion force is real and measurable.",
      },
      {
        term: "Dielectric strength",
        kind: "notation",
        statement: "**Dielectric strength** $E_{\\max}$ caps working voltage: air $3 \\times 10^{6}\\ \\mathrm{V/m}$, mica $10^{8}$, Teflon $6 \\times 10^{7}$ — exceed it and avalanche breakdown shorts the plates.",
        detail: "High-$K$ ceramics trade strength for constant; capacitor choice balances both.",
      },
      {
        term: "Why K exceeds 1",
        kind: "insight",
        statement: "Bound polarization charge $\\sigma_{b}$ opposes free $\\sigma$: net $\\sigma - \\sigma_{b}$ makes less $E$ per free charge, so more free charge fits per volt (Section 24.5 derives $\\sigma_{b} = \\sigma(1-1/K)$).",
        detail: "Water's $K = 80$ means $98.75$ percent cancellation — the solvent power behind biology.",
      },
    ],
    examples: [
      {
        title: "Paper-filled capacitor",
        problem: "A $354\\ \\mathrm{pF}$ air capacitor ($11.3\\ \\mathrm{V}$ at $4.00\\ \\mathrm{nC}$) is filled with paper ($K = 3.7$) while isolated. Find new $C$, $V$, $U$ ratio.",
        steps: [
          { label: "Capacitance", text: "$C = KC_{0} = 3.7(354) = 1310\\ \\mathrm{pF}$." },
          { label: "Voltage", text: "$V = Q/C = 4.00 \\times 10^{-9}/1.310 \\times 10^{-9} = 3.05\\ \\mathrm{V}$ ($11.3/3.7$). " },
          { label: "Energy", text: "$U = Q^{2}/2C = U_{0}/K$: drops to $27$ percent — the missing $73$ percent did work sucking the paper in." },
        ],
        result: "$C = 1.31\\ \\mathrm{nF}$, $V = 3.05\\ \\mathrm{V}$, $U = U_{0}/3.7$.",
      },
      {
        title: "Battery-held insertion",
        problem: "The same capacitor stays connected to $11.3\\ \\mathrm{V}$ while paper ($K = 3.7$) slides in. Find new $Q$ and $U$.",
        steps: [
          { label: "Charge", text: "$Q = CV = (1.310 \\times 10^{-9})(11.3) = 1.48 \\times 10^{-8}\\ \\mathrm{C} = 14.8\\ \\mathrm{nC}$ ($3.7 \\times 4.00$)." },
          { label: "Energy", text: "$U = CV^{2}/2 = (1.310 \\times 10^{-9})(127.7)/2 = 8.36 \\times 10^{-8}\\ \\mathrm{J}$ — $3.7$ times the air value $2.26 \\times 10^{-8}\\ \\mathrm{J}$." },
          { label: "Source", text: "Battery supplied the extra $10.8\\ \\mathrm{nC}$ and $6.1 \\times 10^{-8}\\ \\mathrm{J}$ (plus work accounting). " },
        ],
        result: "$Q = 14.8\\ \\mathrm{nC}$, $U$ up $3.7$-fold via the battery.",
      },
    ],
    keyTakeaways: [
      "$C = KC_{0}$: dielectrics multiply storage; $K$ spans $1$ to $\sim 300$.",
      "Fixed $V$: $Q, U$ rise $K$-fold. Fixed $Q$: $V, E, U$ fall $K$-fold.",
      "Strength $E_{\\max}$ caps voltage; $K$ and strength trade off.",
    ],
    quiz: [
      {
        q: "Sliding a dielectric into an isolated charged capacitor:",
        options: ["Raises $V$", "Lowers $V$ to $V_{0}/K$", "Leaves $V$ unchanged", "Discharges it"],
        answer: 1,
        explanation: "$V = Q/C$ with $C = KC_{0}$: voltage falls by $K$ while $Q$ is trapped.",
      },
      {
        q: "Water's $K \\approx 80$ means inserted in a fixed-$Q$ capacitor it:",
        options: ["Raises energy $80$-fold", "Cuts field and voltage to about $1$ percent", "Has no effect", "Shorts the plates"],
        answer: 1,
        explanation: "$E = E_{0}/K$: $1/80 = 1.25$ percent remains — near-total polarization cancellation.",
      },
      {
        q: "Dielectric strength is:",
        options: ["The same as $K$", "The maximum field before breakdown", "Always $3 \\times 10^{6}\\ \\mathrm{V/m}$", "Capacitance per volume"],
        answer: 1,
        explanation: "Beyond $E_{\\max}$ avalanche ionization conducts — material-dependent from air to mica.",
      },
    ],
  },
  {
    sectionId: "young-ch24-s5",
    readingTime: 5,
    intro: "What do molecules do inside a dielectric? Young builds the polarization model — induced dipoles, bound surface charge $\\sigma_{b}$ — and derives how microscopics produce macroscopic $K$.",
    objectives: [
      "Explain electronic, ionic, and orientational polarization",
      "Derive $\\sigma_{b} = \\sigma(1 - 1/K)$ for a slab",
      "Relate susceptibility $\\chi_{e} = K - 1$ to polarization $\\vec{P}$",
    ],
    concepts: [
      {
        term: "Three polarization mechanisms",
        kind: "definition",
        statement: "**Electronic** (cloud shift), **ionic** (sublattice shift), and **orientational** (permanent-dipole alignment) polarizations all produce bound charge; water uses all three across frequency.",
        detail: "Microwave ovens pump orientational lag; optical glass uses electronic response ($n^{2} \\approx K$ at light frequencies).",
      },
      {
        term: "Bound surface charge",
        kind: "theorem",
        statement: "A polarized slab shows bound charge $\\sigma_{b} = P$ (polarization = dipole moment per volume); between capacitor plates $\\sigma_{b} = \\sigma(1 - 1/K)$, canceling most free charge.",
        detail: "$K = 3.7$ paper: $\\sigma_{b} = 0.73\\sigma$ — nearly three-quarters cancellation.",
      },
      {
        term: "Polarization field",
        kind: "notation",
        statement: "**Polarization** $\\vec{P}$ (dipole moment per $\\mathrm{m^{3}}$) links via $\\vec{P} = \\epsilon_{0}\\chi_{e}\\vec{E}$ with susceptibility $\\chi_{e} = K - 1$ in linear dielectrics.",
        detail: "Nonlinear ferroelectrics (barium titanate) keep $\\vec{P}$ without $\\vec{E}$ — hysteresis memories exploit it.",
      },
      {
        term: "Bound volume charge",
        kind: "method",
        statement: "Nonuniform $\\vec{P}$ leaves bulk bound charge $\\rho_{b} = -\\nabla \\cdot \\vec{P}$; uniform slabs show surface $\\sigma_{b}$ only.",
        detail: "Graded-polarization lenses and electrets are engineered $\\rho_{b}$ distributions.",
      },
      {
        term: "Frequency dependence",
        kind: "insight",
        statement: "Heavy mechanisms lag at high frequency: water's $K$ falls $80 \\to 1.8$ from static to optical — orientational dipoles cannot follow light.",
        detail: "Refractive index $n = \\sqrt{K_{\\mathrm{optical}}}$: water $n = 1.33$ matches $\\sqrt{1.8} = 1.34$.",
      },
    ],
    figures: [
      {
        caption: "Polarized slab: aligned dipoles cancel inside but leave bound surface charge $\\sigma_{b} = P$ opposing the free plates.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aligned dipoles with bound surface charge"><line x1="60" y1="25" x2="60" y2="145" stroke="currentColor" stroke-width="3"/><line x1="340" y1="25" x2="340" y2="145" stroke="currentColor" stroke-width="3"/><text x="40" y="20" font-size="12" fill="currentColor">free +</text><text x="320" y="20" font-size="12" fill="currentColor">free -</text><g font-size="16" fill="currentColor"><text x="110" y="90">+</text><text x="135" y="90">-</text><text x="170" y="90">+</text><text x="195" y="90">-</text><text x="230" y="90">+</text><text x="255" y="90">-</text></g><text x="105" y="120" font-size="12" fill="currentColor">bound -</text><text x="250" y="120" font-size="12" fill="currentColor">bound +</text><text x="150" y="155" font-size="12" fill="currentColor">dipoles cancel inside</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Bound charge on paper",
        problem: "Capacitor plates carry free $\\sigma = 2.00\\ \\mu\\mathrm{C/m^{2}}$ with paper ($K = 3.7$). Find $\\sigma_{b}$ and net $\\sigma_{\\mathrm{net}}$.",
        steps: [
          { label: "Bound", text: "$\\sigma_{b} = \\sigma(1 - 1/K) = 2.00(1 - 1/3.7) = 2.00(0.7297) = 1.459\\ \\mu\\mathrm{C/m^{2}}$." },
          { label: "Net", text: "$\\sigma_{\\mathrm{net}} = 2.00 - 1.459 = 0.541\\ \\mu\\mathrm{C/m^{2}} = \\sigma/K$. Confirmed." },
          { label: "Field", text: "$E = \\sigma_{\\mathrm{net}}/\\epsilon_{0} = E_{0}/3.7$ — the $K$-reduction made molecular." },
        ],
        result: "$\\sigma_{b} = 1.46\\ \\mu\\mathrm{C/m^{2}}$; net $0.541\\ \\mu\\mathrm{C/m^{2}}$.",
      },
      {
        title: "Polarization magnitude",
        problem: "Find $P$ in the paper above if $E = 1.00 \\times 10^{5}\\ \\mathrm{V/m}$ inside.",
        steps: [
          { label: "Susceptibility", text: "$\\chi_{e} = K - 1 = 2.7$." },
          { label: "Polarization", text: "$P = \\epsilon_{0}\\chi_{e}E = (8.854 \\times 10^{-12})(2.7)(1.00 \\times 10^{5}) = 2.39 \\times 10^{-6}\\ \\mathrm{C/m^{2}}$." },
          { label: "Check", text: "Surface $\\sigma_{b} = P = 2.39\\ \\mu\\mathrm{C/m^{2}}$ order-matches the $1.46$ above (different $E$). Consistent." },
        ],
        result: "$P = 2.39\\ \\mu\\mathrm{C/m^{2}}$.",
      },
    ],
    keyTakeaways: [
      "Electronic, ionic, orientational mechanisms all produce bound charge.",
      "$\\sigma_{b} = \\sigma(1-1/K)$: cancellation quantified.",
      "$\\vec{P} = \\epsilon_{0}\\chi_{e}\\vec{E}$, $\\chi_{e} = K-1$; $K$ falls with frequency.",
    ],
    quiz: [
      {
        q: "Bound surface charge arises from:",
        options: ["Free electrons arriving", "Aligned dipole ends terminating at the surface", "Ionization", "External wiring"],
        answer: 1,
        explanation: "Each dipole contributes $+q$ at one face and $-q$ at the other; interiors cancel, surfaces keep $\\sigma_{b} = P$.",
      },
      {
        q: "For $K = 5$, the fraction of free charge canceled is:",
        options: ["$1/5$", "$4/5$", "$5$", "Zero"],
        answer: 1,
        explanation: "$\\sigma_{b}/\\sigma = 1 - 1/K = 4/5$: $80$ percent cancellation.",
      },
      {
        q: "Water's $K$ drops at optical frequencies because:",
        options: ["Electrons vanish", "Orientational dipoles cannot follow fast fields; only electronic response remains", "It boils", "Susceptibility is constant always"],
        answer: 1,
        explanation: "Heavy rotation freezes out by $\\sim 10^{10}\\ \\mathrm{Hz}$; $K \\to n^{2} \\approx 1.8$.",
      },
      {
        q: "Ferroelectrics differ by:",
        options: ["Having $K < 1$", "Retaining $\\vec{P}$ without $\\vec{E}$ (hysteresis)", "Being conductors", "Ignoring fields"],
        answer: 1,
        explanation: "Spontaneous polarization with remanence enables nonvolatile memories.",
      },
    ],
  },
  {
    sectionId: "young-ch24-s6",
    readingTime: 5,
    intro: "Dielectrics reshape Gauss's law around free charge only. Young introduces displacement $\\vec{D}$, proves $\\oint \\vec{D} \\cdot d\\vec{A} = Q_{f}$, and recomputes energy density as $u = \\epsilon E^{2}/2$.",
    objectives: [
      "Define $\\vec{D} = \\epsilon_{0}\\vec{E} + \\vec{P} = \\epsilon\\vec{E}$",
      "Apply $\\oint \\vec{D} \\cdot d\\vec{A} = Q_{f,\\mathrm{enc}}$ to dielectric capacitors",
      "Write energy density $u = \\epsilon E^{2}/2 = D^{2}/(2\\epsilon)$",
    ],
    concepts: [
      {
        term: "Electric displacement",
        kind: "definition",
        statement: "**Displacement** $\\vec{D} = \\epsilon_{0}\\vec{E} + \\vec{P}$ counts free-charge effects only; in linear media $\\vec{D} = \\epsilon\\vec{E}$ with $\\epsilon = K\\epsilon_{0}$ (permittivity).",
        detail: "$D$ in $\\mathrm{C/m^{2}}$ reads free $\\sigma_{f}$ directly off plates: $D = \\sigma_{f}$ at the surface.",
      },
      {
        term: "Gauss's law for D",
        kind: "law",
        statement: "$\\oint \\vec{D} \\cdot d\\vec{A} = Q_{f,\\mathrm{enc}}$: bound charge drops out, so $D$-problems ignore polarization bookkeeping entirely.",
        detail: "Coaxial cable with dielectric: $D = \\lambda/(2\\pi r)$ exactly as vacuum, while $E = D/\\epsilon$ shrinks $K$-fold.",
      },
      {
        term: "Boundary conditions",
        kind: "method",
        statement: "Across interfaces $D_{\\perp}$ jumps by free $\\sigma_{f}$ and $E_{\\parallel}$ is continuous — the refraction rules for field lines entering dielectrics.",
        detail: "Lines bend toward the normal entering high-$K$ (like light into glass) since $E_{\\perp}$ drops while $E_{\\parallel}$ holds.",
      },
      {
        term: "Energy with dielectrics",
        kind: "theorem",
        statement: "Density generalizes to $u = \\epsilon E^{2}/2 = ED/2 = D^{2}/(2\\epsilon)$: at fixed $D$ (fixed $Q$), higher $\\epsilon$ lowers stored energy.",
        detail: "Partially filled capacitors extremize $U$ over insertion — energy methods compute insertion forces ($F = -dU/dx$ at fixed $Q$).",
      },
      {
        term: "Permittivity table",
        kind: "notation",
        statement: "Vacuum $\\epsilon_{0}$; Teflon $1.9\\epsilon_{0}$; mica $5.4\\epsilon_{0}$; titania ceramics to $300\\epsilon_{0}$ — $\\epsilon$ prices the medium's polarizability.",
        detail: "High-$\\epsilon$ shrinks antennas and capacitors but invites loss tangents at RF.",
      },
    ],
    figures: [
      {
        caption: "$\\vec{D}$ springs from free charge only ($D = \\sigma_{f}$); $\\vec{E} = \\vec{D}/\\epsilon$ shrinks $K$-fold inside the dielectric.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="D and E fields with dielectric slab"><line x1="80" y1="30" x2="80" y2="140" stroke="currentColor" stroke-width="3"/><line x1="320" y1="30" x2="320" y2="140" stroke="currentColor" stroke-width="3"/><rect x="180" y="30" width="70" height="110" fill="currentColor" opacity="0.25" stroke="currentColor"/><text x="185" y="85" font-size="12" fill="currentColor">K</text><g stroke="currentColor" stroke-width="1.5"><line x1="90" y1="60" x2="310" y2="60"/><line x1="90" y1="90" x2="310" y2="90"/><line x1="90" y1="120" x2="310" y2="120"/></g><text x="100" y="155" font-size="12" fill="currentColor">D uniform; E dips inside K</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "D in a filled capacitor",
        problem: "Plates carry free $\\sigma_{f} = 3.00\\ \\mu\\mathrm{C/m^{2}}$ with mica ($K = 5.4$). Find $D$, $E$, and $V$ for $d = 1.00\\ \\mathrm{mm}$.",
        steps: [
          { label: "Displacement", text: "$D = \\sigma_{f} = 3.00 \\times 10^{-6}\\ \\mathrm{C/m^{2}}$ everywhere between." },
          { label: "Field", text: "$E = D/(K\\epsilon_{0}) = 3.00 \\times 10^{-6}/(5.4 \\times 8.854 \\times 10^{-12}) = 3.00 \\times 10^{-6}/4.781 \\times 10^{-11} = 6.275 \\times 10^{4}\\ \\mathrm{V/m}$." },
          { label: "Voltage", text: "$V = Ed = 62.75\\ \\mathrm{V}$ versus $339\\ \\mathrm{V}$ in vacuum — $5.4$-fold reduction." },
        ],
        result: "$D = 3.00\\ \\mu\\mathrm{C/m^{2}}$, $E = 6.28 \\times 10^{4}\\ \\mathrm{V/m}$, $V = 62.8\\ \\mathrm{V}$.",
      },
      {
        title: "Energy density with K",
        problem: "Compare $u$ for the mica capacitor above versus vacuum at the same $D$.",
        steps: [
          { label: "With mica", text: "$u = D^{2}/(2\\epsilon) = (9.00 \\times 10^{-12})/(2 \\times 5.4 \\times 8.854 \\times 10^{-12}) = 9.00 \\times 10^{-12}/9.563 \\times 10^{-11} = 0.0941\\ \\mathrm{J/m^{3}}$." },
          { label: "Vacuum", text: "$u_{0} = D^{2}/(2\\epsilon_{0}) = 9.00 \\times 10^{-12}/1.771 \\times 10^{-11} = 0.508\\ \\mathrm{J/m^{3}}$." },
          { label: "Ratio", text: "$0.0941/0.508 = 0.185 = 1/5.4$: fixed-$Q$ insertion cuts energy $K$-fold." },
        ],
        result: "$0.094\\ \\mathrm{J/m^{3}}$ versus $0.508$: $K$-fold reduction.",
      },
    ],
    keyTakeaways: [
      "$\\vec{D} = \\epsilon\\vec{E}$ isolates free charge: $\\oint \\vec{D} \\cdot d\\vec{A} = Q_{f}$.",
      "$D_{\\perp}$ jumps by $\\sigma_{f}$; $E_{\\parallel}$ is continuous across interfaces.",
      "$u = \\epsilon E^{2}/2$: high-$\\epsilon$ lowers fixed-$Q$ energy.",
    ],
    quiz: [
      {
        q: "Gauss's law for $\\vec{D}$ encloses:",
        options: ["All charge including bound", "Free charge only", "No charge", "Only dipoles"],
        answer: 1,
        explanation: "$\\vec{D}$ absorbs $\\vec{P}$ by construction, leaving $Q_{f}$ as the sole source.",
      },
      {
        q: "Inserting dielectric at fixed free charge $Q_{f}$:",
        options: ["Raises $D$", "Leaves $D$ unchanged but lowers $E$ $K$-fold", "Lowers $D$ $K$-fold", "Zeros $D$"],
        answer: 1,
        explanation: "$D$ follows $Q_{f}$ alone; $E = D/\\epsilon$ carries the $K$-reduction.",
      },
      {
        q: "Field lines entering high-$K$ dielectric bend:",
        options: ["Away from the normal", "Toward the normal", "Not at all", "Backward"],
        answer: 1,
        explanation: "$E_{\\perp}$ shrinks while $E_{\\parallel}$ holds — same refraction as light into glass.",
      },
    ],
  },
]

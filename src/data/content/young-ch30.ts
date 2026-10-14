import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 30
// Inductance (Sections 30.1 – 30.6)
// ============================================================================

export const youngCh30Content: SectionContent[] = [
  {
    sectionId: "young-ch30-s1",
    readingTime: 5,
    intro: "Two coils share flux: changing current in one induces emf in the other — mutual inductance. Young defines $M$, proves $M_{12} = M_{21}$, and prices transformers' coupling.",
    objectives: [
      "Define $M = N_{2}\\Phi_{B2}/i_{1}$ and $\\mathcal{E}_{2} = -M\\,di_{1}/dt$",
      "Prove reciprocity $M_{12} = M_{21}$",
      "Compute $M$ for solenoid linkages numerically",
    ],
    concepts: [
      {
        term: "Mutual inductance",
        kind: "definition",
        statement: "**Mutual inductance** $M = N_{2}\\Phi_{B2}/i_{1}$ (henrys: $1\\ \\mathrm{H} = 1\\ \\mathrm{V \\cdot s/A}$) links flux in coil 2 per ampere in coil 1; $\\mathcal{E}_{2} = -M\\,di_{1}/dt$.",
        detail: "$M = 50\\ \\mathrm{mH}$ with $di_{1}/dt = 200\\ \\mathrm{A/s}$ induces $10\\ \\mathrm{V}$ — transformer secondaries in a line.",
      },
      {
        term: "Reciprocity",
        kind: "theorem",
        statement: "$M_{12} = M_{21} = M$: energizing either coil links the same flux-per-ampere — proved via $U = -Mi_{1}i_{2}$ work symmetry (or Neumann double integral).",
        detail: "Measure $M$ whichever way is convenient; transformers work both directions (step-up reversed is step-down).",
      },
      {
        term: "Coupling coefficient",
        kind: "notation",
        statement: "**Coupling** $k = M/\\sqrt{L_{1}L_{2}}$ ($0 \\le k \\le 1$): iron cores reach $k \\approx 0.99$; air-core Tesla coils $k \\sim 0.1$ — leakage flux $1-k$ limits regulation.",
        detail: "Loose coupling resonates voltage (radio tuning) instead of transferring power.",
      },
      {
        term: "Solenoid-solenoid M",
        kind: "method",
        statement: "Long solenoid 1 ($n_{1}$, $A$, $l$) around coil 2 ($N_{2}$): $M = \\mu_{0}n_{1}N_{2}A/l$-scaled by overlap — $B_{1} = \\mu_{0}n_{1}i_{1}$ threads $N_{2}$ turns of area $A$.",
        detail: "$n_{1} = 1000/\\mathrm{m}$, $N_{2} = 200$, $A = 5\\ \\mathrm{cm^{2}}$, $l = 0.3\\ \\mathrm{m}$: $M = 0.42\\ \\mathrm{mH}$.",
      },
      {
        term: "Sign and dots",
        kind: "insight",
        statement: "Winding sense sets emf polarity (dot convention): dots on the same magnetic sides mean in-phase voltages — transformer schematics mark them explicitly.",
        detail: "Reversed leads flip $180^{\\circ}$ of phase; three-phase banks live or die by dots.",
      },
    ],
    examples: [
      {
        title: "Solenoid mutual inductance",
        problem: "Solenoid 1: $n_{1} = 1200/\\mathrm{m}$, length $0.400\\ \\mathrm{m}$, area $A = 6.00 \\times 10^{-4}\\ \\mathrm{m^{2}}$. Coil 2: $N_{2} = 150$ turns wound over its center. Find $M$.",
        steps: [
          { label: "Field per amp", text: "$B_{1}/i_{1} = \\mu_{0}n_{1} = (4\\pi \\times 10^{-7})(1200) = 1.508 \\times 10^{-3}\\ \\mathrm{T/A}$." },
          { label: "Flux linkage", text: "$M = N_{2}(B_{1}/i_{1})A = (150)(1.508 \\times 10^{-3})(6.00 \\times 10^{-4}) = 1.357 \\times 10^{-4}\\ \\mathrm{H}$." },
          { label: "Result", text: "$M = 0.136\\ \\mathrm{mH}$ — with $di_{1}/dt = 500\\ \\mathrm{A/s}$, $\\mathcal{E}_{2} = 68\\ \\mathrm{mV}$." },
        ],
        result: "$M = 0.136\\ \\mathrm{mH}$.",
      },
      {
        title: "Induced pulse",
        problem: "With $M = 0.136\\ \\mathrm{mH}$ above, coil 1 current ramps $0 \\to 4.00\\ \\mathrm{A}$ in $8.00\\ \\mathrm{ms}$. Find mean $\\mathcal{E}_{2}$.",
        steps: [
          { label: "Rate", text: "$di_{1}/dt = 4.00/8.00 \\times 10^{-3} = 500\\ \\mathrm{A/s}$." },
          { label: "Emf", text: "$|\\mathcal{E}_{2}| = M\\,di_{1}/dt = (1.357 \\times 10^{-4})(500) = 0.0679\\ \\mathrm{V}$." },
          { label: "Polarity", text: "Lenz opposes the rise — dots decide which end goes positive." },
        ],
        result: "$67.9\\ \\mathrm{mV}$ mean induced emf.",
      },
    ],
    keyTakeaways: [
      "$M = N_{2}\\Phi_{B2}/i_{1}$; $\\mathcal{E}_{2} = -M\\,di_{1}/dt$ (henrys).",
      "$M_{12} = M_{21}$: coupling is symmetric.",
      "$k = M/\\sqrt{L_{1}L_{2}}$ prices linkage; dots price polarity.",
    ],
    quiz: [
      {
        q: "Mutual inductance units (henry) equal:",
        options: ["$\\mathrm{V \\cdot s/A}$", "$\\mathrm{A \\cdot s/V}$", "$\\mathrm{Wb \\cdot A}$", "$\\Omega/\\mathrm{s}$"],
        answer: 0,
        explanation: "$M = \\mathcal{E}/(di/dt)$: volts per ampere-per-second.",
      },
      {
        q: "Reciprocity $M_{12} = M_{21}$ means:",
        options: ["Coils must be identical", "Either coil can drive; linkage per ampere matches", "Emfs are always equal", "Currents must match"],
        answer: 1,
        explanation: "Geometry's flux linkage is symmetric; turns and drive side do not break it.",
      },
      {
        q: "Iron cores raise $M$ by:",
        options: ["Raising resistance", "Channeling flux ($k \\to 1$) through both coils", "Adding turns magically", "Cooling the wire"],
        answer: 1,
        explanation: "High-$\\mu$ cores guide nearly all flux through the linked coil — minimal leakage.",
      },
    ],
  },
  {
    sectionId: "young-ch30-s2",
    readingTime: 5,
    intro: "A coil fights changes in its own current — self-inductance. Young defines $L = N\\Phi_{B}/i$, derives $\\mathcal{E} = -L\\,di/dt$, and computes solenoids and toroids.",
    objectives: [
      "Define $L = N\\Phi_{B}/i$ and $\\mathcal{E}_{L} = -L\\,di/dt$",
      "Derive solenoid $L = \\mu_{0}n^{2}Al$ and toroid $L = \\mu_{0}N^{2}A/(2\\pi r)$",
      "Predict inductor behavior in DC steady state and transients",
    ],
    concepts: [
      {
        term: "Self-inductance",
        kind: "definition",
        statement: "**Self-inductance** $L = N\\Phi_{B}/i$ (henrys) is flux linkage per own ampere; changing current induces $\\mathcal{E}_{L} = -L\\,di/dt$ opposing the change — electrical inertia.",
        detail: "$L = 2\\ \\mathrm{H}$ with $di/dt = 3\\ \\mathrm{A/s}$ fights with $6\\ \\mathrm{V}$ — chokes smooth power supplies this way.",
      },
      {
        term: "Solenoid inductance",
        kind: "theorem",
        statement: "Long solenoid: $L = \\mu_{0}n^{2}Al = \\mu_{0}N^{2}A/l$ — $n^{2}$ scaling (turns make flux and link it). $n = 2000/\\mathrm{m}$, $A = 10\\ \\mathrm{cm^{2}}$, $l = 0.5\\ \\mathrm{m}$: $L = 5.03\\ \\mathrm{mH}$.",
        detail: "Doubling turns quadruples $L$; doubling length (fixed $N$) halves it — winding wisdom in one formula.",
      },
      {
        term: "Toroid inductance",
        kind: "theorem",
        statement: "Toroid: $L = \\mu_{0}N^{2}A/(2\\pi r)$ (mean radius $r$, core area $A$); iron cores multiply by $K_{m}$ ($\\sim 10^{3}$–$10^{4}$) until saturation.",
        detail: "$N = 300$, $A = 4\\ \\mathrm{cm^{2}}$, $r = 8\\ \\mathrm{cm}$ air-core: $L = 0.108\\ \\mathrm{mH}$ — steel makes it $\\sim 0.5\\ \\mathrm{H}$.",
      },
      {
        term: "Inductor circuit role",
        kind: "insight",
        statement: "Inductors pass steady DC ($\\mathcal{E}_{L} = 0$ at $di/dt = 0$: plain wire) but block fast change — low-pass filters, spark coils ($L\\,di/dt$ kicks kilovolts), and relay snubbers.",
        detail: "Opening an inductive circuit spikes $V = L\\,di/dt$ across the gap — arc suppression diodes clamp it.",
      },
      {
        term: "Inductor symbol and polarity",
        kind: "notation",
        statement: "Circuit symbol is a coil; voltage drops $L\\,di/dt$ in the current's direction of rise — mark $+$ where current enters during ramp-up (Lenz).",
        detail: "KVL around $R$-$L$ loops: $\\mathcal{E} - iR - L\\,di/dt = 0$ — the Section 30.4 differential equation.",
      },
    ],
    figures: [
      {
        caption: "Solenoid $L = \\mu_{0}n^{2}Al$: turns make $B = \\mu_{0}nI$ and link it $N$ times — $n^{2}$ scaling from double duty.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Solenoid inductance geometry"><g fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="120" cy="85" rx="16" ry="42"/><ellipse cx="155" cy="85" rx="16" ry="42"/><ellipse cx="190" cy="85" rx="16" ry="42"/><ellipse cx="225" cy="85" rx="16" ry="42"/></g><line x1="100" y1="85" x2="260" y2="85" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="110" y="150" font-size="12" fill="currentColor">B=μ0nI links N turns: L=μ0n²Al</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Solenoid inductance",
        problem: "Solenoid: $N = 800$ turns, $l = 0.400\\ \\mathrm{m}$, $A = 5.00 \\times 10^{-4}\\ \\mathrm{m^{2}}$. Find $L$.",
        steps: [
          { label: "Turns density", text: "$n = N/l = 800/0.400 = 2000/\\mathrm{m}$." },
          { label: "Apply", text: "$L = \\mu_{0}n^{2}Al = (4\\pi \\times 10^{-7})(4.00 \\times 10^{6})(5.00 \\times 10^{-4})(0.400)$." },
          { label: "Multiply", text: "$(1.2566 \\times 10^{-6})(4.00 \\times 10^{6}) = 5.0265$; times $2.00 \\times 10^{-4}$ gives $1.005 \\times 10^{-3}\\ \\mathrm{H}$." },
        ],
        result: "$L = 1.01\\ \\mathrm{mH}$.",
      },
      {
        title: "Back emf during ramp",
        problem: "The $1.01\\ \\mathrm{mH}$ inductor above ramps $0 \\to 6.00\\ \\mathrm{A}$ in $12.0\\ \\mathrm{ms}$. Find mean back emf.",
        steps: [
          { label: "Rate", text: "$di/dt = 6.00/0.0120 = 500\\ \\mathrm{A/s}$." },
          { label: "Emf", text: "$|\\mathcal{E}_{L}| = L\\,di/dt = (1.005 \\times 10^{-3})(500) = 0.5025\\ \\mathrm{V}$." },
          { label: "Interrupt kick", text: "Forced to zero in $1\\ \\mu\\mathrm{s}$ instead: $V = (10^{-3})(6/10^{-6}) = 6000\\ \\mathrm{V}$ — ignition-coil sparks." },
        ],
        result: "$0.503\\ \\mathrm{V}$ ramping; kilovolts if interrupted.",
      },
    ],
    keyTakeaways: [
      "$L = N\\Phi_{B}/i$; $\\mathcal{E}_{L} = -L\\,di/dt$ opposes change.",
      "Solenoid $\\mu_{0}n^{2}Al$; toroid $\\mu_{0}N^{2}A/(2\\pi r)$; cores multiply $K_{m}$-fold.",
      "DC steady: wire. Transients: $n^{2}$-scaled inertia; interrupts spark.",
    ],
    quiz: [
      {
        q: "Doubling turns on a fixed-geometry solenoid changes $L$ by:",
        options: ["$2$ times", "$4$ times", "$1/2$", "Unchanged"],
        answer: 1,
        explanation: "$L = \\mu_{0}N^{2}A/l \\propto N^{2}$: turns make and link flux.",
      },
      {
        q: "An ideal inductor in steady DC acts as:",
        options: ["Open circuit", "Plain wire (zero drop)", "Capacitor", "Battery"],
        answer: 1,
        explanation: "$di/dt = 0$ kills $L\\,di/dt$; only winding resistance (ideal: none) remains.",
      },
      {
        q: "Opening a switch on a large inductor causes:",
        options: ["Nothing", "High-voltage kick $L\\,di/dt$ arcing the gap", "Capacitor charging", "Immediate zero current safely"],
        answer: 1,
        explanation: "Forced fast $di/dt$ multiplies $L$ into kilovolts — snubbers clamp it.",
      },
    ],
  },
  {
    sectionId: "young-ch30-s3",
    readingTime: 5,
    intro: "Inductors store energy in their magnetic field: $U = LI^{2}/2$ with density $u = B^{2}/(2\\mu_{0})$. Young derives both and prices MRI banks and lightning-scale fields.",
    objectives: [
      "Derive $U = LI^{2}/2$ from $\\int \\mathcal{E}_{L}i\\,dt$ work",
      "State $u = B^{2}/(2\\mu_{0})$ (vacuum; $B^{2}/2\\mu$ in media)",
      "Compute stored energies for solenoids and magnets",
    ],
    concepts: [
      {
        term: "Energy in an inductor",
        kind: "theorem",
        statement: "Ramping current against back emf costs $U = \\int_{0}^{I} Li\\,di = LI^{2}/2$: $L = 5\\ \\mathrm{H}$, $I = 10\\ \\mathrm{A}$ stores $250\\ \\mathrm{J}$ — the flywheel of circuits.",
        detail: "Sustaining DC costs nothing (ideal $R = 0$); building current banks the energy reversibly.",
      },
      {
        term: "Magnetic energy density",
        kind: "law",
        statement: "Fields hold $u = B^{2}/(2\\mu_{0})$ ($\\mathrm{J/m^{3}}$): solenoid $U = u(Al)$ reproduces $LI^{2}/2$ — energy lives in $\\vec{B}$, as $\\vec{E}$ holds $\\epsilon_{0}E^{2}/2$.",
        detail: "$1\\ \\mathrm{T}$ packs $3.98 \\times 10^{5}\\ \\mathrm{J/m^{3}}$ — magnetic bottles are dense storage.",
      },
      {
        term: "Capacitor-inductor symmetry",
        kind: "insight",
        statement: "$U = LI^{2}/2$ mirrors $CV^{2}/2$; $u = B^{2}/2\\mu_{0}$ mirrors $\\epsilon_{0}E^{2}/2$ — $L$-$C$ duality structures oscillations (Sections 30.5–30.6).",
        detail: "Energy sloshes $E$-field to $B$-field in $L$-$C$ tanks exactly as position trades velocity in springs.",
      },
      {
        term: "MRI energy scale",
        kind: "method",
        statement: "A $1.5\\ \\mathrm{T}$, $1\\ \\mathrm{m}$-bore MRI ($V \\sim 1\\ \\mathrm{m^{3}}$, $L \\sim 100\\ \\mathrm{H}$, $I \\sim 100\\ \\mathrm{A}$) stores $LI^{2}/2 = 0.5\\ \\mathrm{MJ}$ — quenches vent it as helium boiloff.",
        detail: "Quench heaters spread the dump resistively; megajoules demand engineered exits.",
      },
      {
        term: "In-media density",
        kind: "notation",
        statement: "In linear media $u = B^{2}/(2\\mu) = BH/2$: high-$\\mu$ cores hold less field energy per tesla (flux cheap) — air gaps store the energy in gapped inductors.",
        detail: "Flyback transformers gap cores deliberately: gap $B^{2}/2\\mu_{0}$ dominates storage.",
      },
    ],
    examples: [
      {
        title: "Solenoid energy both ways",
        problem: "Solenoid $L = 1.01\\ \\mathrm{mH}$ carries $I = 6.00\\ \\mathrm{A}$. Find $U$ via $LI^{2}/2$ and via $u \\times$ volume ($l = 0.400\\ \\mathrm{m}$, $A = 5.00 \\times 10^{-4}$).",
        steps: [
          { label: "Via L", text: "$U = (1.005 \\times 10^{-3})(36)/2 = 0.01809\\ \\mathrm{J}$." },
          { label: "Via field", text: "$B = \\mu_{0}nI = (4\\pi \\times 10^{-7})(2000)(6.00) = 0.01508\\ \\mathrm{T}$; $u = B^{2}/(2\\mu_{0}) = 2.274 \\times 10^{-4}/2.513 \\times 10^{-6} = 90.47\\ \\mathrm{J/m^{3}}$." },
          { label: "Volume", text: "$V_{\\mathrm{ol}} = Al = 2.00 \\times 10^{-4}\\ \\mathrm{m^{3}}$; $U = 90.47(2.00 \\times 10^{-4}) = 0.01809\\ \\mathrm{J}$. Match." },
        ],
        result: "$U = 18.1\\ \\mathrm{mJ}$ both ways.",
      },
      {
        title: "Lightning-channel density",
        problem: "A lightning channel packs $B = 2.00\\ \\mathrm{T}$ briefly. Find $u$ and compare with TNT ($4.6 \\times 10^{9}\\ \\mathrm{J/m^{3}}$).",
        steps: [
          { label: "Density", text: "$u = 4.00/(2 \\times 4\\pi \\times 10^{-7}) = 4.00/2.513 \\times 10^{-6} = 1.592 \\times 10^{6}\\ \\mathrm{J/m^{3}}$." },
          { label: "Ratio", text: "$1.59 \\times 10^{6}/4.6 \\times 10^{9} = 3.46 \\times 10^{-4}$ — a third of a gram of TNT per cubic meter of field." },
          { label: "Total", text: "Kilometer channels ($\\sim 10\\ \\mathrm{m^{3}}$) hold $\\sim 16\\ \\mathrm{MJ}$ in $\\vec{B}$ alone." },
        ],
        result: "$1.59\\ \\mathrm{MJ/m^{3}}$ — $0.035$ percent of TNT density.",
      },
    ],
    keyTakeaways: [
      "$U = LI^{2}/2$: work against back emf banked reversibly.",
      "$u = B^{2}/(2\\mu_{0})$: energy in the field volume.",
      "Symmetric with $CV^{2}/2$ and $\\epsilon_{0}E^{2}/2$ — oscillation fuel.",
    ],
    quiz: [
      {
        q: "Doubling current in a fixed inductor multiplies stored energy by:",
        options: ["$2$", "$4$", "$1/2$", "$8$"],
        answer: 1,
        explanation: "$U = LI^{2}/2 \\propto I^{2}$: $2^{2} = 4$.",
      },
      {
        q: "Magnetic and electric energy densities mirror as:",
        options: ["$B^{2}/2\\mu_{0}$ and $\\epsilon_{0}E^{2}/2$", "Identical formulas", "$LB^{2}$ and $CE^{2}$", "Zero always"],
        answer: 0,
        explanation: "Each field's stress squared over twice its vacuum constant — duality made dimensional.",
      },
      {
        q: "MRI quenches must vent megajoules because:",
        options: ["Batteries overcharge", "$LI^{2}/2$ storage converts to heat on resistance onset", "Patients exhale", "Helium burns"],
        answer: 1,
        explanation: "Normal zones $I^{2}R$-burn the banked $0.5\\ \\mathrm{MJ}$; engineered boiloff carries it out.",
      },
    ],
  },
  {
    sectionId: "young-ch30-s4",
    readingTime: 6,
    intro: "Battery, resistor, inductor in series: current grows as $I_{0}(1-e^{-Rt/L})$ toward $\\mathcal{E}/R$ with clock $\\tau = L/R$. Young solves growth and decay and times relay chatter.",
    objectives: [
      "Solve $I(t) = (\\mathcal{E}/R)(1 - e^{-Rt/L})$ for energizing",
      "Solve $I(t) = I_{0}e^{-Rt/L}$ for decay with $\\tau = L/R$",
      "Track energy split between $R$ heat and $LI^{2}/2$ storage",
    ],
    concepts: [
      {
        term: "R-L growth",
        kind: "theorem",
        statement: "Closing $\\mathcal{E}$-$R$-$L$: $\\mathcal{E} - iR - L\\,di/dt = 0$ gives $i(t) = (\\mathcal{E}/R)(1 - e^{-Rt/L})$ — inductor starts open ($i = 0$, full $L\\,di/dt$) and ends short ($i = \\mathcal{E}/R$).",
        detail: "$\\mathcal{E} = 12\\ \\mathrm{V}$, $R = 6\\ \\Omega$, $L = 3\\ \\mathrm{H}$ ($\\tau = 0.5\\ \\mathrm{s}$): $1.26\\ \\mathrm{A}$ at $0.5\\ \\mathrm{s}$, $1.90\\ \\mathrm{A}$ at $1.5\\ \\mathrm{s}$.",
      },
      {
        term: "R-L decay",
        kind: "theorem",
        statement: "Shorted $R$-$L$ with $I_{0}$: $i(t) = I_{0}e^{-Rt/L}$ — the banked $LI_{0}^{2}/2$ burns in $R$ with the same $\\tau = L/R$.",
        detail: "Relay coils spark at opening ($L\\,di/dt$ kick) then die exponentially — snubber diodes recirculate safely.",
      },
      {
        term: "Inductive time constant",
        kind: "insight",
        statement: "$\\tau = L/R$: big $L$ (more inertia) slows, big $R$ (more damping) quickens — dual of $RC$ where $R$ slows charging.",
        detail: "$L = 10\\ \\mathrm{H}$, $R = 100\\ \\Omega$: $\\tau = 0.1\\ \\mathrm{s}$ — sluggish giants need small $R$ patience.",
      },
      {
        term: "Energy ledger",
        kind: "law",
        statement: "Battery supplies $\\int \\mathcal{E}i\\,dt = LI_{0}^{2}/2 + \\int i^{2}R\\,dt$: half stored only for the special $R$-$C$ case — here storage fraction is $50$ percent solely for linear ramps... precisely: total $= $ stored $+$ burned, split by timing, always balancing.",
        detail: "Growth: $LI_{0}^{2}/2$ banks, rest heats; decay: bank empties into heat — conservation each way.",
      },
      {
        term: "Inductor as continuity",
        kind: "method",
        statement: "Inductor current cannot jump (infinite $L\\,di/dt$ would need infinite $V$): $i(0^{+}) = i(0^{-})$ — the switching initial condition, dual of capacitor voltage continuity.",
        detail: "Capacitors continue $V$; inductors continue $I$ — one continuity per storage mode.",
      },
    ],
    figures: [
      {
        caption: "R-L growth $I_{0}(1-e^{-Rt/L})$ toward $\\mathcal{E}/R$ and decay $I_{0}e^{-Rt/L}$: $\\tau = L/R$ clocks both ($63$ percent per $\\tau$).",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RL growth and decay curves"><line x1="30" y1="160" x2="380" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="160" x2="30" y2="15" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="60" x2="380" y2="60" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.5"/><path d="M30,160 Q120,80 200,66 Q300,58 370,58" fill="none" stroke="currentColor" stroke-width="2"/><path d="M30,60 Q120,70 200,110 Q300,150 370,158" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 4"/><text x="290" y="50" font-size="12" fill="currentColor">growth to E/R</text><text x="290" y="130" font-size="12" fill="currentColor">decay to 0</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Energizing a magnet",
        problem: "$\\mathcal{E} = 24.0\\ \\mathrm{V}$, $R = 8.00\\ \\Omega$, $L = 4.00\\ \\mathrm{H}$. Find $I$ at $t = 0.500\\ \\mathrm{s}$ ($\\tau = 0.500\\ \\mathrm{s}$) and final $I$.",
        steps: [
          { label: "Steady", text: "$I_{\\infty} = 24.0/8.00 = 3.00\\ \\mathrm{A}$." },
          { label: "At one tau", text: "$I = 3.00(1 - e^{-1}) = 3.00(0.6321) = 1.896\\ \\mathrm{A}$." },
          { label: "Stored then", text: "$U = LI^{2}/2 = (4.00)(3.596)/2 = 7.19\\ \\mathrm{J}$ of eventual $(4)(9)/2 = 18.0\\ \\mathrm{J}$." },
        ],
        result: "$1.90\\ \\mathrm{A}$ at $\\tau$; $3.00\\ \\mathrm{A}$ final.",
      },
      {
        title: "Relay opening spark",
        problem: "A $2.00\\ \\mathrm{H}$ relay at $I_{0} = 0.500\\ \\mathrm{A}$ opens in $1.00\\ \\mathrm{ms}$ into stray $R = 10.0\\ \\mathrm{k\\Omega}$. Estimate peak voltage.",
        steps: [
          { label: "Rate", text: "$di/dt \\approx 0.500/10^{-3} = 500\\ \\mathrm{A/s}$." },
          { label: "Kick", text: "$V = L\\,di/dt = (2.00)(500) = 1000\\ \\mathrm{V}$ — across the opening contacts." },
          { label: "Fix", text: "Freewheel diode clamps to $0.7\\ \\mathrm{V}$, recirculating $LI_{0}^{2}/2 = 0.25\\ \\mathrm{J}$ into coil $R$." },
        ],
        result: "$\\sim 1\\ \\mathrm{kV}$ unclamped; $0.7\\ \\mathrm{V}$ with diode.",
      },
    ],
    keyTakeaways: [
      "Growth $(\\mathcal{E}/R)(1-e^{-Rt/L})$; decay $I_{0}e^{-Rt/L}$; $\\tau = L/R$.",
      "Inductors start open, end short; $i$ never jumps.",
      "Storage $LI^{2}/2$ banks then burns; interrupts kick $L\\,di/dt$.",
    ],
    quiz: [
      {
        q: "At $t = 0^{+}$ after closing $\\mathcal{E}$-$R$-$L$, current is:",
        options: ["$\\mathcal{E}/R$", "Zero (inductor continues $i$)", "Infinite", "$\\mathcal{E}/L$"],
        answer: 1,
        explanation: "$i(0^{+}) = i(0^{-}) = 0$: finite voltage cannot jump current through $L$.",
      },
      {
        q: "Increasing $R$ in R-L growth:",
        options: ["Slows toward a higher final", "Quickens ($\\tau = L/R$ falls) toward a lower $\\mathcal{E}/R$", "Has no effect", "Oscillates"],
        answer: 1,
        explanation: "More damping hurries equilibrium but lowers $I_{\\infty} = \\mathcal{E}/R$.",
      },
      {
        q: "After $3\\tau$ of R-L decay, current remains:",
        options: ["$37$ percent", "$5.0$ percent ($e^{-3}$)", "$63$ percent", "Zero exactly"],
        answer: 1,
        explanation: "$e^{-3} = 0.0498$: $95$ percent gone, $5$ percent lingers.",
      },
    ],
  },
  {
    sectionId: "young-ch30-s5",
    readingTime: 5,
    intro: "Inductor plus capacitor with no resistance rings forever: $\\omega = 1/\\sqrt{LC}$. Young solves the $L$-$C$ oscillator, trades $Q^{2}/2C$ against $LI^{2}/2$, and tunes radio circuits.",
    objectives: [
      "Derive $\\omega_{0} = 1/\\sqrt{LC}$ from $d^{2}q/dt^{2} + q/(LC) = 0$",
      "Track energy sloshing between $C$ and $L$",
      "Compute resonant frequencies for tuner values",
    ],
    concepts: [
      {
        term: "L-C oscillation equation",
        kind: "theorem",
        statement: "Loop KVL $-L\\,di/dt - q/C = 0$ with $i = -dq/dt$ gives $d^{2}q/dt^{2} + q/(LC) = 0$: SHM at $\\omega_{0} = 1/\\sqrt{LC}$, $f_{0} = 1/(2\\pi\\sqrt{LC})$.",
        detail: "$L = 10\\ \\mu\\mathrm{H}$, $C = 100\\ \\mathrm{pF}$: $f_{0} = 5.03\\ \\mathrm{MHz}$ — AM-band tanks.",
      },
      {
        term: "Charge and current phases",
        kind: "method",
        statement: "$q = Q_{0}\\cos(\\omega_{0}t)$, $i = \\omega_{0}Q_{0}\\sin(\\omega_{0}t)$: current leads charge by $90^{\\circ}$ — $C$ full when $L$ empty, alternating each quarter period.",
        detail: "Mechanical twin: charge is displacement, current is velocity — same quadrature.",
      },
      {
        term: "Energy sloshing",
        kind: "law",
        statement: "Total $U = q^{2}/(2C) + Li^{2}/2 = Q_{0}^{2}/(2C)$ constant: all-electric at extremes, all-magnetic at zero crossings — lossless exchange at $\\omega_{0}$.",
        detail: "$Q_{0} = 1\\ \\mu\\mathrm{C}$ on $100\\ \\mathrm{pF}$: $U = 5.0\\ \\mathrm{mJ}$ cycling electrically to magnetically $5$ million times per second.",
      },
      {
        term: "Tuning radios",
        kind: "insight",
        statement: "Variable $C$ ($10$–$365\\ \\mathrm{pF}$) tunes $f_{0} \\propto 1/\\sqrt{C}}$: $6$:$1$ capacitance swing covers $2.4$:$1$ frequency ( $530$–$1700\\ \\mathrm{kHz}$ AM needs $10$:$1$ — padding plus bands).",
        detail: "Antenna $L$-$C$ tanks select one station's $\\omega_{0}$ from the spectrum — resonance as filter (Chapter 31 extends with $R$).",
      },
      {
        term: "Ideal versus real",
        kind: "notation",
        statement: "Ideal $L$-$C$ rings forever ($Q$-factor $\\infty$); wire $R$ damps as $e^{-Rt/2L}$ (Section 30.6) — superconducting tanks approach the ideal measurably.",
        detail: "Quartz crystals ($Q \\sim 10^{5}$) are mechanical $L$-$C$ equivalents holding watch time.",
      },
    ],
    examples: [
      {
        title: "FM tuner tank",
        problem: "Tune $100\\ \\mathrm{MHz}$ with $L = 0.100\\ \\mu\\mathrm{H}$. Find $C$.",
        steps: [
          { label: "Invert", text: "$C = 1/((2\\pi f)^{2}L) = 1/((6.283 \\times 10^{8})^{2} \\times 10^{-7})$." },
          { label: "Denominator", text: "$(3.948 \\times 10^{17})(10^{-7}) = 3.948 \\times 10^{10}$." },
          { label: "Capacitance", text: "$C = 2.533 \\times 10^{-11}\\ \\mathrm{F} = 25.3\\ \\mathrm{pF}$ — trimmer-capacitor territory." },
        ],
        result: "$C = 25.3\\ \\mathrm{pF}$ for $100\\ \\mathrm{MHz}$.",
      },
      {
        title: "Peak current in oscillation",
        problem: "$L = 4.00\\ \\mathrm{mH}$, $C = 250\\ \\mathrm{nF}$, $Q_{0} = 8.00\\ \\mu\\mathrm{C}$. Find $\\omega_{0}$, $f_{0}$, $I_{0}$.",
        steps: [
          { label: "Frequency", text: "$\\omega_{0} = 1/\\sqrt{LC} = 1/\\sqrt{(4.00 \\times 10^{-3})(2.50 \\times 10^{-7})} = 1/\\sqrt{10^{-9}} = 31623\\ \\mathrm{rad/s}$; $f_{0} = 5033\\ \\mathrm{Hz}$." },
          { label: "Peak current", text: "$I_{0} = \\omega_{0}Q_{0} = (31623)(8.00 \\times 10^{-6}) = 0.253\\ \\mathrm{A}$." },
          { label: "Energy", text: "$U = Q_{0}^{2}/(2C) = 6.40 \\times 10^{-11}/5.00 \\times 10^{-7} = 1.28 \\times 10^{-4}\\ \\mathrm{J}$ cycling intact." },
        ],
        result: "$\\omega_{0} = 3.16 \\times 10^{4}\\ \\mathrm{rad/s}$; $I_{0} = 0.253\\ \\mathrm{A}$.",
      },
    ],
    keyTakeaways: [
      "$\\omega_{0} = 1/\\sqrt{LC}$: $L$-$C$ rings like mass-spring ($1/\\sqrt{k/m}$).",
      "$q$/$i$ in quadrature; $U = Q_{0}^{2}/2C$ sloshes losslessly.",
      "Variable $C$ tunes $f_{0}$ — radio selection by resonance.",
    ],
    quiz: [
      {
        q: "Quadrupling $C$ in L-C changes $f_{0}$ by:",
        options: ["$2$ times", "$1/2$", "$4$ times", "Unchanged"],
        answer: 1,
        explanation: "$f_{0} \\propto 1/\\sqrt{C}$: $\\sqrt{4} = 2$ in the denominator.",
      },
      {
        q: "At the instant capacitor charge is maximal, inductor current is:",
        options: ["Maximal", "Zero (all energy electric)", "Negative maximal", "Infinite"],
        answer: 1,
        explanation: "Quadrature: $i \\propto \\sin(\\omega t)$ vanishes where $q \\propto \\cos$ peaks.",
      },
      {
        q: "L-C tanks tune radios because:",
        options: ["They amplify everything", "Resonant $\\omega_{0}$ selects one frequency's large response", "They demodulate", "They transmit"],
        answer: 1,
        explanation: "Driven at $\\omega_{0}$ (Chapter 31) the tank voltage peaks — frequency filtering by resonance.",
      },
    ],
  },
  {
    sectionId: "young-ch30-s6",
    readingTime: 5,
    intro: "Add resistance and oscillations decay: the series $L$-$R$-$C$ transient rings down as $e^{-Rt/2L}$ while oscillating. Young classifies under, critical, and overdamping — the complete transient inventory.",
    objectives: [
      "Write $d^{2}q/dt^{2} + (R/L)dq/dt + q/(LC) = 0$ and identify regimes",
      "State $\\omega^{\\prime} = \\sqrt{\\omega_{0}^{2} - (R/2L)^{2}}$ and critical $R_{c} = 2\\sqrt{L/C}$",
      "Choose damping for meters, ignitions, and filters",
    ],
    concepts: [
      {
        term: "Damped equation",
        kind: "definition",
        statement: "Series $L$-$R$-$C$: $L\\,d^{2}q/dt^{2} + R\\,dq/dt + q/C = 0$, i.e. $d^{2}q/dt^{2} + (R/L)dq/dt + \\omega_{0}^{2}q = 0$ — the mechanical damped oscillator in charge language ($R/L = b/m$).",
        detail: "One equation governs car suspensions, RLC filters, and door closers — damping is universal.",
      },
      {
        term: "Underdamping",
        kind: "theorem",
        statement: "For $R < 2\\sqrt{L/C}$, $q = Ae^{-Rt/2L}\\cos(\\omega^{\\prime}t + \\phi)$ with $\\omega^{\\prime} = \\sqrt{1/(LC) - (R/2L)^{2}}$: ringing decay, $Q$-factor $\\omega_{0}L/R$ oscillations per radian-budget.",
        detail: "$L = 1\\ \\mathrm{mH}$, $C = 1\\ \\mu\\mathrm{F}$, $R = 10\\ \\Omega$: $\\omega_{0} = 31623$, $\\omega^{\\prime} = 31225\\ \\mathrm{rad/s}$ — $1$ percent detuned, visibly ringing.",
      },
      {
        term: "Critical damping",
        kind: "law",
        statement: "$R_{c} = 2\\sqrt{L/C}$ returns fastest without overshoot: $q = (A + Bt)e^{-\\omega_{0}t}$ — galvanometers and airbags target critical.",
        detail: "Above $R_{c}$ (overdamped) creeps as dual exponentials; below rings — critical splits speed from oscillation.",
      },
      {
        term: "Logarithmic decrement",
        kind: "method",
        statement: "Successive peaks ratio $x_{n+1}/x_{n} = e^{-\\pi R/(L\\omega^{\\prime})}$: counting ring-down measures $R$ (or $Q$) — tap-and-listen component metrology.",
        detail: "$10$ percent per cycle ($\\delta = 0.105$) reads $Q = \\pi/\\delta \\approx 30$.",
      },
      {
        term: "Where each regime serves",
        kind: "insight",
        statement: "Underdamped: radio $IF$ filters (ring wanted). Critically damped: meters (settle fast, no overshoot). Overdamped: ignition killers and snubbers (no ringing allowed).",
        detail: "Damping choice is application morality: ring, settle, or crawl — pick one.",
      },
    ],
    figures: [
      {
        caption: "L-R-C transients: underdamped ringing, critically damped fastest return, overdamped slow creep — $R_{c} = 2\\sqrt{L/C}$ divides them.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Damping regimes"><line x1="30" y1="100" x2="380" y2="100" stroke="currentColor" stroke-width="1" opacity="0.5"/><path d="M30,40 Q80,45 110,70 Q160,110 220,100 Q300,90 370,99" fill="none" stroke="currentColor" stroke-width="2"/><path d="M30,40 Q100,50 160,85 Q220,105 370,100" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 4"/><path d="M30,40 Q120,60 200,90 Q300,100 370,100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 3"/><text x="280" y="60" font-size="11" fill="currentColor">under</text><text x="280" y="85" font-size="11" fill="currentColor">critical</text><text x="280" y="115" font-size="11" fill="currentColor">over</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Classify a transient",
        problem: "$L = 2.00\\ \\mathrm{mH}$, $C = 500\\ \\mathrm{nF}$, $R = 40.0\\ \\Omega$. Find regime and $\\omega^{\\prime}$ if ringing.",
        steps: [
          { label: "Critical R", text: "$R_{c} = 2\\sqrt{L/C} = 2\\sqrt{2.00 \\times 10^{-3}/5.00 \\times 10^{-7}} = 2\\sqrt{4000} = 2(63.25) = 126.5\\ \\Omega$." },
          { label: "Compare", text: "$40.0 < 126.5$: underdamped — rings." },
          { label: "Frequency", text: "$\\omega_{0} = 1/\\sqrt{LC} = 1/\\sqrt{10^{-9}} = 31623$; $R/2L = 40/0.004 = 10000$; $\\omega^{\\prime} = \\sqrt{31623^{2} - 10000^{2}} = \\sqrt{10^{9} - 10^{8}} = 30000\\ \\mathrm{rad/s}$." },
        ],
        result: "Underdamped; $\\omega^{\\prime} = 3.00 \\times 10^{4}\\ \\mathrm{rad/s}$.",
      },
      {
        title: "Ring-down count",
        problem: "The circuit above starts at $Q_{0} = 5.00\\ \\mu\\mathrm{C}$. After how many cycles does amplitude fall below $5$ percent?",
        steps: [
          { label: "Decay per time", text: "Envelope $e^{-Rt/2L} = e^{-10000t}$." },
          { label: "Target", text: "$e^{-10000t} = 0.05 \\Rightarrow t = \\ln 20/10000 = 2.996/10000 = 2.996 \\times 10^{-4}\\ \\mathrm{s}$." },
          { label: "Cycles", text: "Period $T = 2\\pi/30000 = 2.094 \\times 10^{-4}\\ \\mathrm{s}$; cycles $= 2.996/2.094 = 1.43$ — gone in under two rings." },
        ],
        result: "$0.300\\ \\mathrm{ms}$ ($1.4$ cycles) to $5$ percent.",
      },
    ],
    keyTakeaways: [
      "$Lq^{\\prime\\prime} + Rq^{\\prime} + q/C = 0$: universal damped oscillator.",
      "$R_{c} = 2\\sqrt{L/C}$ splits ringing from creeping; $\\omega^{\\prime} = \\sqrt{\\omega_{0}^{2}-(R/2L)^{2}}$.",
      "Match regime to job: ring (filters), settle (meters), crawl (snubbers).",
    ],
    quiz: [
      {
        q: "Critical damping $R_{c}$ equals:",
        options: ["$\\sqrt{L/C}$", "$2\\sqrt{L/C}$", "$L/C$", "$1/\\sqrt{LC}$"],
        answer: 1,
        explanation: "Zero discriminant of $(R/L)^{2} - 4/(LC) = 0$ gives $R_{c} = 2\\sqrt{L/C}$.",
      },
      {
        q: "Overdamped L-R-C response:",
        options: ["Rings forever", "Creeps without oscillation (dual exponentials)", "Grows unbounded", "Jumps discontinuously"],
        answer: 1,
        explanation: "Real distinct roots give $Ae^{-\\gamma_{1}t} + Be^{-\\gamma_{2}t}$ — monotonic return.",
      },
      {
        q: "Galvanometers target critical damping because it:",
        options: ["Maximizes ringing", "Settles fastest without overshoot", "Minimizes cost", "Raises resistance"],
        answer: 1,
        explanation: "Dead-beat response reads quickly and truthfully — one approach, no oscillation.",
      },
    ],
  },
]

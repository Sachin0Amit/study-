import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 26
// Direct-Current Circuits (Sections 26.1 – 26.5)
// ============================================================================

export const youngCh26Content: SectionContent[] = [
  {
    sectionId: "young-ch26-s1",
    readingTime: 5,
    intro: "Resistor networks collapse to one equivalent: series adds, parallel reciprocates. Young reduces combinations, prices voltage dividers, and splits currents quantitatively.",
    objectives: [
      "Apply series $R_{\\mathrm{eq}} = \\sum R_{i}$ and parallel $1/R_{\\mathrm{eq}} = \\sum 1/R_{i}$",
      "Analyze voltage dividers and current splits numerically",
      "Reduce multi-stage networks inside-out",
    ],
    concepts: [
      {
        term: "Series resistors",
        kind: "theorem",
        statement: "Series resistors share current $I$ and split voltage: $R_{\\mathrm{eq}} = R_{1} + R_{2} + \\cdots$. Two $100\\ \\Omega$ in series give $200\\ \\Omega$.",
        detail: "Charge has one path; drops stack like lengths — the daisy-chain rule.",
      },
      {
        term: "Parallel resistors",
        kind: "theorem",
        statement: "Parallel resistors share voltage $V$ and split current: $1/R_{\\mathrm{eq}} = 1/R_{1} + 1/R_{2} + \\cdots$. Two $100\\ \\Omega$ in parallel give $50\\ \\Omega$.",
        detail: "Charge takes all paths; conductances $G = 1/R$ add — extra branches always lower $R_{\\mathrm{eq}}$.",
      },
      {
        term: "Voltage divider",
        kind: "method",
        statement: "Series $R_{1}$, $R_{2}$ across $V$ give $V_{2} = V R_{2}/(R_{1}+R_{2})$: $9\\ \\mathrm{V}$ across $2\\ \\mathrm{k\\Omega}$ + $1\\ \\mathrm{k\\Omega}$ puts $3.0\\ \\mathrm{V}$ on the $1\\ \\mathrm{k\\Omega}$.",
        detail: "Volume knobs and sensor biases are loaded dividers — load current perturbs the ratio (Section 26.3 returns).",
      },
      {
        term: "Current divider",
        kind: "method",
        statement: "Parallel $R_{1}$, $R_{2}$ fed by $I$ give $I_{1} = I R_{2}/(R_{1}+R_{2})$: current favors the easy path inversely — $1\\ \\Omega$ beside $9\\ \\Omega$ takes $90$ percent.",
        detail: "Clamp meters and shunts exploit this: calibrated small $R$ siphons known fractions.",
      },
      {
        term: "Reduction order",
        kind: "insight",
        statement: "Collapse farthest-from-source blocks first, redraw, repeat — then unfold $V = IR$ outward; equivalent resistance never exceeds the smallest parallel branch nor trails the largest series link.",
        detail: "Sanity bounds catch algebra slips: $R_{\\mathrm{eq}}$ sits between those extremes.",
      },
    ],
    figures: [
      {
        caption: "Voltage divider: series $R_{1}$, $R_{2}$ split $V$ as $V_{2} = VR_{2}/(R_{1}+R_{2})$ — loading $R_{2}$ sags the ratio.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Voltage divider with load"><line x1="150" y1="20" x2="150" y2="60" stroke="currentColor" stroke-width="2"/><rect x="135" y="60" width="30" height="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="172" y="85" font-size="12" fill="currentColor">R1</text><rect x="135" y="100" width="30" height="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="172" y="125" font-size="12" fill="currentColor">R2</text><line x1="150" y1="140" x2="150" y2="155" stroke="currentColor" stroke-width="2"/><rect x="220" y="100" width="30" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3"/><text x="255" y="125" font-size="12" fill="currentColor">load</text><line x1="150" y1="110" x2="220" y2="110" stroke="currentColor" stroke-width="1.2"/><text x="100" y="30" font-size="12" fill="currentColor">V in</text><text x="100" y="120" font-size="12" fill="currentColor">V2 out</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Divider with load",
        problem: "A $9.00\\ \\mathrm{V}$ divider uses $R_{1} = 2.00\\ \\mathrm{k\\Omega}$ (top), $R_{2} = 1.00\\ \\mathrm{k\\Omega}$ (bottom). Find $V_{2}$ unloaded, then with a $1.00\\ \\mathrm{k\\Omega}$ load across $R_{2}$.",
        steps: [
          { label: "Unloaded", text: "$V_{2} = 9.00(1.00/3.00) = 3.00\\ \\mathrm{V}$." },
          { label: "Loaded parallel", text: "$R_{2} \\parallel 1.00\\ \\mathrm{k\\Omega} = 0.500\\ \\mathrm{k\\Omega}$; $V_{2}^{\\prime} = 9.00(0.500/2.500) = 1.80\\ \\mathrm{V}$." },
          { label: "Lesson", text: "Loading sags the divider $40$ percent — buffers (op-amps) isolate dividers from loads." },
        ],
        result: "$3.00\\ \\mathrm{V}$ unloaded; $1.80\\ \\mathrm{V}$ loaded.",
      },
      {
        title: "Three-branch split",
        problem: "$12.0\\ \\mathrm{V}$ feeds parallel $4.00\\ \\Omega$, $6.00\\ \\Omega$, $12.0\\ \\Omega$. Find total current and each branch.",
        steps: [
          { label: "Equivalent", text: "$1/R_{\\mathrm{eq}} = 1/4 + 1/6 + 1/12 = 3/12 + 2/12 + 1/12 = 6/12$, so $R_{\\mathrm{eq}} = 2.00\\ \\Omega$." },
          { label: "Total", text: "$I = 12.0/2.00 = 6.00\\ \\mathrm{A}$." },
          { label: "Branches", text: "$3.00$, $2.00$, $1.00\\ \\mathrm{A}$ respectively; sum $6.00$. Consistent." },
        ],
        result: "$6.00\\ \\mathrm{A}$ total; $3/2/1\\ \\mathrm{A}$ branches.",
      },
    ],
    keyTakeaways: [
      "Series adds $R$ (shared $I$); parallel reciprocates (shared $V$).",
      "Dividers: $V_{2} = VR_{2}/(R_{1}+R_{2})$; $I_{1} = IR_{2}/(R_{1}+R_{2})$.",
      "Loads perturb dividers; reduction runs inside-out with bound checks.",
    ],
    quiz: [
      {
        q: "Three $60\\ \\Omega$ resistors in parallel give:",
        options: ["$180\\ \\Omega$", "$20\\ \\Omega$", "$60\\ \\Omega$", "$120\\ \\Omega$"],
        answer: 1,
        explanation: "$1/R_{\\mathrm{eq}} = 3/60$: $R_{\\mathrm{eq}} = 20\\ \\Omega$.",
      },
      {
        q: "A voltmeter loading a divider makes the reading:",
        options: ["Rise", "Sag below the unloaded ratio", "Stay exact", "Reverse polarity"],
        answer: 1,
        explanation: "Meter conductance parallels the lower arm, shrinking its share of the division.",
      },
      {
        q: "In parallel branches, current divides:",
        options: ["Equally always", "Inversely with branch resistance", "Proportionally to resistance", "Only into two branches"],
        answer: 1,
        explanation: "Common $V$ gives $I_{i} = V/R_{i}$: easy paths take more.",
      },
    ],
  },
  {
    sectionId: "young-ch26-s2",
    readingTime: 7,
    intro: "Multi-loop circuits need Kirchhoff's rules — junction charge conservation plus loop energy conservation. Young states both, sets the sign discipline, and solves two-loop networks completely.",
    objectives: [
      "State the junction rule $\\sum I = 0$ and loop rule $\\sum \\Delta V = 0$",
      "Assign loop directions and sign $IR$ drops and emf jumps",
      "Solve two-loop circuits for all branch currents",
    ],
    concepts: [
      {
        term: "Junction rule",
        kind: "law",
        statement: "At any node, $\\sum I_{\\mathrm{in}} = \\sum I_{\\mathrm{out}}$ (signed $\\sum I = 0$): charge never piles up in steady state — continuity at a point.",
        detail: "$3\\ \\mathrm{A}$ in splitting to $1\\ \\mathrm{A}$ and $2\\ \\mathrm{A}$ out is the whole law in action.",
      },
      {
        term: "Loop rule",
        kind: "law",
        statement: "Around any closed loop, $\\sum \\Delta V = 0$: traversing a resistor with the current drops $IR$, against it gains $IR$; crossing emf $-$ to $+$ gains $\\mathcal{E}$, $+$ to $-$ loses it.",
        detail: "Energy conservation per circulating charge — the voltage tour must break even.",
      },
      {
        term: "Sign discipline",
        kind: "method",
        statement: "Fix branch current arrows first (guess freely — negatives self-correct), then write $-$ to $+$ as $+\\mathcal{E}$ and resistor traversal with-current as $-IR$.",
        detail: "A negative solution means the arrow guessed backward; magnitudes stay valid — never re-solve, just reinterpret.",
      },
      {
        term: "Equations count",
        kind: "insight",
        statement: "With $b$ branches and $n$ nodes, write $(n-1)$ junctions plus independent loops to reach $b$ equations — extra loops are linear combinations, not new information.",
        detail: "Two-loop (three-branch) circuits need one junction plus two loops: three equations, three unknowns.",
      },
      {
        term: "Checking solutions",
        kind: "notation",
        statement: "Verify with an unused loop or power balance ($\\sum \\mathcal{E}I = \\sum I^{2}R$): sources supply exactly what resistors burn.",
        detail: "Power balance catches sign slips that loop checks miss — run both on exams.",
      },
    ],
    figures: [
      {
        caption: "Two-loop circuit: junction $I_{1} = I_{2} + I_{3}$ plus left and right loop tours ($\\sum \\Delta V = 0$) fix all three branch currents.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-loop Kirchhoff circuit"><rect x="90" y="50" width="220" height="100" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="200" y1="50" x2="200" y2="150" stroke="currentColor" stroke-width="1.5"/><text x="100" y="45" font-size="12" fill="currentColor">E1 R1</text><text x="215" y="45" font-size="12" fill="currentColor">R2</text><text x="250" y="45" font-size="12" fill="currentColor">E2 R3</text><text x="120" y="110" font-size="12" fill="currentColor">I1</text><text x="185" y="110" font-size="12" fill="currentColor">I2</text><text x="270" y="110" font-size="12" fill="currentColor">I3</text><circle cx="200" cy="50" r="4" fill="currentColor"/><circle cx="200" cy="150" r="4" fill="currentColor"/></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Two-loop solution",
        problem: "Left loop: $\\mathcal{E}_{1} = 12.0\\ \\mathrm{V}$, $R_{1} = 4.00\\ \\Omega$ (left branch); middle $R_{2} = 6.00\\ \\Omega$; right branch $\\mathcal{E}_{2} = 6.00\\ \\mathrm{V}$ (opposing) with $R_{3} = 2.00\\ \\Omega$. Solve with $I_{1} = I_{2} + I_{3}$ (down positive on sides, middle down).",
        steps: [
          { label: "Left loop (clockwise from bottom-left)", text: "$+12.0 - 4.00I_{1} - 6.00I_{2} = 0$, i.e. $4I_{1} + 6I_{2} = 12$." },
          { label: "Right loop (clockwise from bottom-middle)", text: "$+6.00I_{2} - 6.00 - 2.00I_{3} = 0$ (up the middle against $I_{2}$ gains, then emf drop, then $R_{3}$ drop), i.e. $6I_{2} - 2I_{3} = 6$." },
          { label: "Solve", text: "With $I_{1} = I_{2}+I_{3}$: $4(I_{2}+I_{3}) + 6I_{2} = 12 \\Rightarrow 10I_{2} + 4I_{3} = 12$; and $6I_{2} - 2I_{3} = 6$. From the second, $I_{3} = 3I_{2} - 3$; substitute: $10I_{2} + 12I_{2} - 12 = 12 \\Rightarrow 22I_{2} = 24 \\Rightarrow I_{2} = 1.091\\ \\mathrm{A}$, $I_{3} = 0.273\\ \\mathrm{A}$, $I_{1} = 1.364\\ \\mathrm{A}$." },
        ],
        result: "$I_{1} = 1.36\\ \\mathrm{A}$, $I_{2} = 1.09\\ \\mathrm{A}$, $I_{3} = 0.273\\ \\mathrm{A}$ (all as guessed).",
      },
      {
        title: "Power balance check",
        problem: "Verify the solution above with power balance.",
        steps: [
          { label: "Supplied", text: "$\\mathcal{E}_{1}I_{1} = 12.0(1.364) = 16.36\\ \\mathrm{W}$; $\\mathcal{E}_{2}$ absorbs (traversed $+$ to $-$): $-6.00(0.273) = -1.64\\ \\mathrm{W}$. Net supplied $14.73\\ \\mathrm{W}$." },
          { label: "Burned", text: "$4(1.364^{2}) + 6(1.091^{2}) + 2(0.273^{2}) = 7.44 + 7.14 + 0.149 = 14.73\\ \\mathrm{W}$." },
          { label: "Verdict", text: "Match to $0.01\\ \\mathrm{W}$ — solution verified." },
        ],
        result: "$14.7\\ \\mathrm{W}$ supplied equals $14.7\\ \\mathrm{W}$ burned.",
      },
    ],
    keyTakeaways: [
      "Junctions: $\\sum I = 0$. Loops: $\\sum \\Delta V = 0$ with traversal signs.",
      "Guess arrows freely; negatives mean backward, magnitudes hold.",
      "Verify with spare loops and $\\sum \\mathcal{E}I = \\sum I^{2}R$.",
    ],
    quiz: [
      {
        q: "Traversing a resistor with the assigned current contributes:",
        options: ["$+IR$", "$-IR$", "$+\\mathcal{E}$", "Zero"],
        answer: 1,
        explanation: "Moving with the current flows downhill in potential: a drop, $-IR$.",
      },
      {
        q: "A branch current solving to $-2\\ \\mathrm{A}$ means:",
        options: ["Kirchhoff failed", "Magnitude $2\\ \\mathrm{A}$ opposite the guessed arrow", "Zero current", "Infinite current"],
        answer: 1,
        explanation: "Signs encode direction relative to guesses; flip the arrow and keep $2\\ \\mathrm{A}$.",
      },
      {
        q: "Power balance $\\sum \\mathcal{E}I = \\sum I^{2}R$ checks:",
        options: ["Charge conservation", "Energy conservation across the solution", "Resistor color codes", "Capacitance"],
        answer: 1,
        explanation: "Sources must fund exactly the Joule heating (with charging terms signed negative).",
      },
    ],
  },
  {
    sectionId: "young-ch26-s3",
    readingTime: 5,
    intro: "Ammeters splice into lines, voltmeters bridge across — and both disturb the circuit they probe. Young derives ideal-meter rules, loading corrections, and the potentiometer that measures emf without drawing current.",
    objectives: [
      "Connect ammeters in series ($R \\to 0$) and voltmeters in parallel ($R \\to \\infty$)",
      " Correct for meter loading quantitatively",
      "Explain ohmmeter and potentiometer operation",
    ],
    concepts: [
      {
        term: "Ideal meters",
        kind: "definition",
        statement: "Ideal **ammeters** have $R = 0$ (in series, no drop); ideal **voltmeters** have $R = \\infty$ (in parallel, no siphon) — reality approximates with $\\mathrm{m\\Omega}$ shunts and $10\\ \\mathrm{M\\Omega}$ inputs.",
        detail: "An ammeter across a source shorts it; a voltmeter in series starves the circuit — connection errors, not meter faults.",
      },
      {
        term: "Ammeter shunt",
        kind: "method",
        statement: "A galvanometer ($R_{g}$, full-scale $I_{g}$) parallels a shunt $R_{s} = I_{g}R_{g}/(I - I_{g})$ to read $I \\gg I_{g}$: a $1\\ \\mathrm{mA}$, $50\\ \\Omega$ meter reads $10\\ \\mathrm{A}$ with $R_{s} = 5.005\\ \\mathrm{m\\Omega}$.",
        detail: "The shunt carries $99.99$ percent; the movement samples a calibrated sip.",
      },
      {
        term: "Voltmeter multiplier",
        kind: "method",
        statement: "Series multiplier $R_{m} = V/I_{g} - R_{g}$ extends range: the same $1\\ \\mathrm{mA}$ movement reads $100\\ \\mathrm{V}$ with $R_{m} = 99.95\\ \\mathrm{k\\Omega}$.",
        detail: "$20\\ \\mathrm{k\\Omega/V}$ sensitivity ratings are $1/I_{g}$ — less loading per volt with sturdier movements.",
      },
      {
        term: "Loading correction",
        kind: "insight",
        statement: "Finite $R_{V}$ parallels the probed $R$, reading $V_{\\mathrm{meas}} = V R_{V}/(R_{\\mathrm{eq}} + \\cdots)$ low; corrections matter when $R_{V} \\lesssim 10R$.",
        detail: "$10\\ \\mathrm{M\\Omega}$ meters load $1\\ \\mathrm{M\\Omega}$ circuits by $9$ percent — electrometer territory beyond.",
      },
      {
        term: "Potentiometer",
        kind: "notation",
        statement: "A **potentiometer** balances unknown emf against a calibrated wire drop at null current — measuring $\\mathcal{E}$ with zero $Ir$ distortion.",
        detail: "Null methods trade deflection for balance: precision from wire uniformity, not meter quality.",
      },
    ],
    examples: [
      {
        title: "Voltmeter loading",
        problem: "A $10.0\\ \\mathrm{M\\Omega}$ voltmeter across $R_{2} = 1.00\\ \\mathrm{M\\Omega}$ in a $9.00\\ \\mathrm{V}$ divider with $R_{1} = 2.00\\ \\mathrm{M\\Omega}$: find unloaded versus measured $V_{2}$.",
        steps: [
          { label: "Unloaded", text: "$V_{2} = 9.00(1.00/3.00) = 3.00\\ \\mathrm{V}$." },
          { label: "Loaded parallel", text: "$1.00 \\parallel 10.0 = 0.9091\\ \\mathrm{M\\Omega}$; $V_{2}^{\\prime} = 9.00(0.9091/2.9091) = 2.812\\ \\mathrm{V}$." },
          { label: "Error", text: "$6.25$ percent low — even $10\\times$ impedance loads measurably." },
        ],
        result: "$3.00\\ \\mathrm{V}$ true; meter reads $2.81\\ \\mathrm{V}$.",
      },
      {
        title: "Shunt design",
        problem: "Design a $5.00\\ \\mathrm{A}$ ammeter from a $50.0\\ \\mu\\mathrm{A}$, $2.00\\ \\mathrm{k\\Omega}$ movement.",
        steps: [
          { label: "Shunt formula", text: "$R_{s} = I_{g}R_{g}/(I - I_{g}) = (5.00 \\times 10^{-5})(2000)/(5.00 - 0.00005)$." },
          { label: "Evaluate", text: "$0.100/4.99995 = 0.0200002\\ \\Omega = 20.0\\ \\mathrm{m\\Omega}$." },
          { label: "Burden", text: "Full-scale drop $IR_{s} = 0.100\\ \\mathrm{V}$ — the circuit pays $0.5\\ \\mathrm{W}$ to be measured." },
        ],
        result: "$R_{s} = 20.0\\ \\mathrm{m\\Omega}$ shunt.",
      },
    ],
    keyTakeaways: [
      "Ammeters series ($R \\to 0$); voltmeters parallel ($R \\to \\infty$).",
      "Shunts extend current range; multipliers extend voltage range.",
      "Meters load circuits; potentiometers null current to read true $\\mathcal{E}$.",
    ],
    quiz: [
      {
        q: "An ammeter mistakenly placed in parallel:",
        options: ["Reads correctly", "Shorts the branch with near-zero $R$", "Reads double", "Is unaffected"],
        answer: 1,
        explanation: "Milliohm ammeter resistance across volts draws huge current — blown fuse or meter.",
      },
      {
        q: "A $10\\ \\mathrm{M\\Omega}$ meter on a $10\\ \\mathrm{M\\Omega}$-scale circuit errs by order:",
        options: ["$0.01$ percent", "$10$ percent", "$100$ percent", "Zero"],
        answer: 1,
        explanation: "Comparable impedances divide significantly; loading corrections become mandatory.",
      },
      {
        q: "Potentiometers achieve accuracy by:",
        options: ["Huge deflection current", "Null-current balance against a calibrated drop", "Digital displays", "High battery voltage"],
        answer: 1,
        explanation: "Zero current means zero $Ir$ distortion — balance position encodes emf directly.",
      },
    ],
  },
  {
    sectionId: "young-ch26-s4",
    readingTime: 6,
    intro: "Resistor plus capacitor means time: exponential charge and discharge with clock $\\tau = RC$. Young solves both transients, tracks energy, and times camera flashes and pacemakers.",
    objectives: [
      "Solve charging $q = Q_{f}(1 - e^{-t/RC})$ and discharging $q = Q_{0}e^{-t/RC}$",
      "Use $\\tau = RC$ for timing estimates ($5\\tau \\approx$ done)",
      "Track energy split between storage and Joule heating",
    ],
    concepts: [
      {
        term: "R-C charging",
        kind: "theorem",
        statement: "Battery $\\mathcal{E}$ through $R$ onto $C$: $q(t) = C\\mathcal{E}(1 - e^{-t/RC})$, $i(t) = (\\mathcal{E}/R)e^{-t/RC}$ — current starts at $\\mathcal{E}/R$ and dies as voltage builds.",
        detail: "$R = 10\\ \\mathrm{k\\Omega}$, $C = 100\\ \\mu\\mathrm{F}$ gives $\\tau = 1.0\\ \\mathrm{s}$: $63$ percent charged per $\\tau$.",
      },
      {
        term: "R-C discharging",
        kind: "theorem",
        statement: "Shorted $R$-$C$: $q(t) = Q_{0}e^{-t/RC}$, $i(t) = -(Q_{0}/RC)e^{-t/RC}$ — decay with the same $\\tau = RC$.",
        detail: "Flash tubes dump in milliseconds ($R$ tiny); memory backup holds for hours ($R$ huge).",
      },
      {
        term: "Time constant meaning",
        kind: "insight",
        statement: "$\\tau = RC$ is the $e$-folding time: $63$ percent toward final per $\\tau$, $95$ percent by $3\\tau$, $99.3$ percent by $5\\tau$ — the engineer's done-by rule.",
        detail: "$R$ throttles flow, $C$ sizes the bucket: their product clocks the fill.",
      },
      {
        term: "Energy bookkeeping",
        kind: "law",
        statement: "Charging burns exactly half the battery's $C\\mathcal{E}^{2}$ in $R$ and stores half ($C\\mathcal{E}^{2}/2$) — $50$ percent efficiency regardless of $R$ (smaller $R$ just finishes faster).",
        detail: "Discharging converts all stored $Q_{0}^{2}/2C$ to $R$ heat — flashes turn storage into light via the tube's $R(t)$.",
      },
      {
        term: "Timing applications",
        kind: "method",
        statement: "Wipers, pacemakers ($\\tau \\sim 1\\ \\mathrm{s}$ pacing), and camera delays all threshold $V_{C}(t)$ comparators — $R$-$C$ clocks with $C\\mathcal{E}(1-e^{-t/RC})$ precision.",
        detail: "Variable $R$ (knob) tunes the interval; stable film $C$ holds calibration.",
      },
    ],
    figures: [
      {
        caption: "Charging $q = Q_{f}(1-e^{-t/RC})$ rises to $C\\mathcal{E}$ while current $(\\mathcal{E}/R)e^{-t/RC}$ dies; discharge mirrors downward with the same $\\tau$.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RC charging and discharging curves"><line x1="30" y1="160" x2="380" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="160" x2="30" y2="15" stroke="currentColor" stroke-width="1.5"/><path d="M30,160 Q120,80 200,50 Q300,32 370,30" fill="none" stroke="currentColor" stroke-width="2"/><path d="M30,30 Q120,35 200,70 Q300,130 370,155" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 4"/><text x="290" y="45" font-size="12" fill="currentColor">q charge</text><text x="290" y="100" font-size="12" fill="currentColor">i / discharge</text><line x1="130" y1="160" x2="130" y2="30" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/><text x="120" y="175" font-size="11" fill="currentColor">τ=RC</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Flash charge time",
        problem: "$\\mathcal{E} = 300\\ \\mathrm{V}$, $R = 20.0\\ \\mathrm{k\\Omega}$, $C = 150\\ \\mu\\mathrm{F}$. Find $\\tau$ and time to $99$ percent.",
        steps: [
          { label: "Tau", text: "$\\tau = RC = (2.00 \\times 10^{4})(1.50 \\times 10^{-4}) = 3.00\\ \\mathrm{s}$." },
          { label: "99 percent", text: "$1 - e^{-t/\\tau} = 0.99 \\Rightarrow e^{-t/\\tau} = 0.01 \\Rightarrow t = 4.605\\tau = 13.8\\ \\mathrm{s}$." },
          { label: "Initial current", text: "$I_{0} = 300/20000 = 15.0\\ \\mathrm{mA}$ — safe trickle, slow fill." },
        ],
        result: "$\\tau = 3.0\\ \\mathrm{s}$; $13.8\\ \\mathrm{s}$ to $99$ percent.",
      },
      {
        title: "Pacemaker discharge",
        problem: "A $10.0\\ \\mu\\mathrm{F}$ capacitor at $5.00\\ \\mathrm{V}$ discharges through $100\\ \\mathrm{k\\Omega}$ tissue. Find initial current and energy per pulse ($t \\gg \\tau$).",
        steps: [
          { label: "Tau", text: "$\\tau = (10^{5})(10^{-5}) = 1.00\\ \\mathrm{s}$." },
          { label: "Current", text: "$I_{0} = V/R = 5.00/10^{5} = 50.0\\ \\mu\\mathrm{A}$." },
          { label: "Energy", text: "$U = CV^{2}/2 = (10^{-5})(25)/2 = 1.25 \\times 10^{-4}\\ \\mathrm{J} = 125\\ \\mu\\mathrm{J}$ per pulse." },
        ],
        result: "$50\\ \\mu\\mathrm{A}$ initial; $125\\ \\mu\\mathrm{J}$ per pulse.",
      },
    ],
    keyTakeaways: [
      "Charge $C\\mathcal{E}(1-e^{-t/RC})$; discharge $Q_{0}e^{-t/RC}$; currents mirror.",
      "$\\tau = RC$: $63$ percent per $\\tau$, done by $5\\tau$.",
      "Charging wastes half in $R$; discharging burns all stored $U$.",
    ],
    quiz: [
      {
        q: "After $2\\tau$ of charging, the capacitor holds:",
        options: ["$50$ percent of $C\\mathcal{E}$", "$86.5$ percent", "$100$ percent", "$14$ percent"],
        answer: 1,
        explanation: "$1 - e^{-2} = 1 - 0.1353 = 0.8647$.",
      },
      {
        q: "Doubling both $R$ and $C$ changes $\\tau$ by:",
        options: ["$2$ times", "$4$ times", "$1/2$", "Unchanged"],
        answer: 1,
        explanation: "$\\tau = RC$: $2 \\times 2 = 4$.",
      },
      {
        q: "Charging efficiency (stored over supplied) is:",
        options: ["$100$ percent", "$50$ percent regardless of $R$", "Zero", "$95$ percent"],
        answer: 1,
        explanation: "$\\int i^{2}R\\,dt = C\\mathcal{E}^{2}/2$ always equals the stored half.",
      },
    ],
  },
  {
    sectionId: "young-ch26-s5",
    readingTime: 4,
    intro: "From power plant to wall outlet: Young traces distribution — transformers, grounding, fuses, and the $120/240\\ \\mathrm{V}$ household split — with safety physics throughout.",
    objectives: [
      "Describe grid steps from generation to household voltage",
      "Explain three-wire grounding and GFCI protection",
      "Compute household loads and breaker sizing",
    ],
    concepts: [
      {
        term: "Distribution chain",
        kind: "definition",
        statement: "Plants generate at $\\sim 25\\ \\mathrm{kV}$, step up to $100$–$765\\ \\mathrm{kV}$ for $I^{2}R$-lean transmission, then step down through substations to $120/240\\ \\mathrm{V}$ homes.",
        detail: "Each transformer trades volts for amps at fixed power — $100$-fold voltage cuts line current $100$-fold.",
      },
      {
        term: "Household split phase",
        kind: "notation",
        statement: "US homes receive $240\\ \\mathrm{V}$ center-tapped: two $120\\ \\mathrm{V}$ legs for outlets plus $240\\ \\mathrm{V}$ across for dryers and stoves — three wires, two voltages.",
        detail: "Balanced $120\\ \\mathrm{V}$ loads cancel neutral current; stoves bridge leg-to-leg for $240\\ \\mathrm{V}$ power.",
      },
      {
        term: "Grounding and fuses",
        kind: "law",
        statement: "The neutral bonds to Earth at the panel; chassis ground wires shunt faults to trip breakers; fuses/breakers open at calibrated $I^{2}t$ before wires ignite.",
        detail: "Ground is a fault path, not a current carrier — normal return flows on neutral.",
      },
      {
        term: "GFCI protection",
        kind: "method",
        statement: "**Ground-fault interrupters** trip at $\\sim 5\\ \\mathrm{mA}$ hot-neutral imbalance (current leaking through a person) in $25\\ \\mathrm{ms}$ — bathrooms, kitchens, outdoors.",
        detail: "$5\\ \\mathrm{mA}$ through the heart can fibrillate; GFCIs sense the missing milliamps, not overloads.",
      },
      {
        term: "Shock physiology",
        kind: "insight",
        statement: "$1\\ \\mathrm{mA}$ tingles, $10$–$20\\ \\mathrm{mA}$ locks muscles (let-go threshold), $100\\ \\mathrm{mA}$ fibrillates — voltage matters via skin $R$ ($10^{3}$–$10^{5}\\ \\Omega$ wet-to-dry).",
        detail: "$120\\ \\mathrm{V}$ across wet $1\\ \\mathrm{k\\Omega}$ hands drives $120\\ \\mathrm{mA}$ — lethal without GFCI speed.",
      },
    ],
    examples: [
      {
        title: "Kitchen circuit load",
        problem: "A $20.0\\ \\mathrm{A}$, $120\\ \\mathrm{V}$ kitchen circuit feeds a $1500\\ \\mathrm{W}$ kettle plus $800\\ \\mathrm{W}$ toaster. Check the breaker.",
        steps: [
          { label: "Currents", text: "$1500/120 = 12.5\\ \\mathrm{A}$; $800/120 = 6.67\\ \\mathrm{A}$; total $19.17\\ \\mathrm{A}$." },
          { label: "Margin", text: "$19.2 < 20.0\\ \\mathrm{A}$: holds, with $4$ percent margin — add a $1000\\ \\mathrm{W}$ microwave ($8.33\\ \\mathrm{A}$) and it trips at $27.5\\ \\mathrm{A}$." },
          { label: "Power", text: "Circuit capacity $2400\\ \\mathrm{W}$; load $2300\\ \\mathrm{W}$. Tight but legal." },
        ],
        result: "$19.2\\ \\mathrm{A}$ on a $20\\ \\mathrm{A}$ breaker — holds barely.",
      },
      {
        title: "Why transmission is high-V",
        problem: "Deliver $50.0\\ \\mathrm{MW}$ over $R = 5.00\\ \\Omega$ lines at $25\\ \\mathrm{kV}$ versus $250\\ \\mathrm{kV}$. Compare loss.",
        steps: [
          { label: "At 25 kV", text: "$I = 50 \\times 10^{6}/25 \\times 10^{3} = 2000\\ \\mathrm{A}$; loss $I^{2}R = 4.00 \\times 10^{6}(5) = 20.0\\ \\mathrm{MW}$ ($40$ percent!)." },
          { label: "At 250 kV", text: "$I = 200\\ \\mathrm{A}$; loss $40000(5) = 0.200\\ \\mathrm{MW}$ ($0.4$ percent)." },
          { label: "Ratio", text: "$100$-fold less — $10^{2}$ voltage saves $10^{4}$ in $I^{2}R$." },
        ],
        result: "$20\\ \\mathrm{MW}$ versus $0.20\\ \\mathrm{MW}$ loss: high voltage wins $100$-fold.",
      },
    ],
    keyTakeaways: [
      "Generate $25\\ \\mathrm{kV}$, transmit $100$s of $\\mathrm{kV}$, use $120/240\\ \\mathrm{V}$.",
      "Ground shunts faults; breakers cap $I^{2}t$; GFCIs catch $5\\ \\mathrm{mA}$ leaks.",
      "Shock scales with current through body $R$; wet skin kills margins.",
    ],
    quiz: [
      {
        q: "Stepping transmission from $100\\ \\mathrm{kV}$ to $500\\ \\mathrm{kV}$ cuts $I^{2}R$ loss by:",
        options: ["$5$ times", "$25$ times", "$2$ times", "Zero"],
        answer: 1,
        explanation: "Fixed power means $I$ falls $5$-fold; loss falls $5^{2} = 25$-fold.",
      },
      {
        q: "A GFCI trips on:",
        options: ["Overload current", "Hot-neutral imbalance ($\\sim 5\\ \\mathrm{mA}$ leak)", "High voltage", "Low power factor"],
        answer: 1,
        explanation: "It senses current escaping the loop (possibly through a person), not total magnitude.",
      },
      {
        q: "The chassis ground wire normally carries:",
        options: ["Full load current", "No current — only fault current", "Half the neutral current", "DC only"],
        answer: 1,
        explanation: "Neutral returns load current; ground waits idle until insulation fails.",
      },
    ],
  },
]

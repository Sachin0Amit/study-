import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 22: Electromagnetic Induction and AC Circuits (Sections 22.1 – 22.3)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh22Content: SectionContent[] = [
  {
    sectionId: "coletta-ch22-s1",
    readingTime: 8,
    intro: "Changing magnetism makes electricity: pushing a magnet into a coil lights a meter with no battery. Coletta builds magnetic flux $\\Phi = BA\\cos\\theta$, states Faraday's law $\\mathcal{E} = -N\\Delta\\Phi/\\Delta t$, and reads direction from Lenz's rule. Generators and transformers are this law at work.",
    objectives: [
      "Compute flux $\\Phi = BA\\cos\\theta$ and EMF from $\\mathcal{E} = -N\\Delta\\Phi/\\Delta t$",
      "Give Lenz's direction by opposing the change, with energy reasoning",
      "Apply motional $\\mathcal{E} = BLv$ and generator $\\mathcal{E} = NBA\\omega\\sin\\omega t$ forms"
    ],
    concepts: [
      {
        term: "Magnetic flux",
        kind: "definition",
        statement: "**Flux** $\\Phi = BA\\cos\\theta$ in webers counts field lines through area $A$, maximum face-on ($\\theta = 0$) and zero edge-on.",
        detail: "A $0.20$ T field through $0.050$ m$^{2}$ face-on gives $0.010$ Wb of flux."
      },
      {
        term: "Faraday's law",
        kind: "law",
        statement: "Changing flux induces $\\mathcal{E} = -N\\Delta\\Phi/\\Delta t$: turns times rate of change, with the minus encoding Lenz opposition.",
        detail: "Collapsing $0.010$ Wb in $0.020$ s through $100$ turns gives $50$ V without any battery."
      },
      {
        term: "Lenz's rule",
        kind: "method",
        statement: "Induced current always **opposes the change**: approaching north poles induce repelling north faces, and withdrawing ones induce attracting south faces.",
        detail: "The rule is energy conservation: aiding the change would bootstrap free energy from nothing."
      },
      {
        term: "Motional EMF",
        kind: "theorem",
        statement: "A rod of length $L$ cutting field at speed $v$ develops $\\mathcal{E} = BLv$ (for $\\vec{v} \\perp \\vec{B}$), with $q\\vec{v} \\times \\vec{B}$ separating charge to the ends.",
        detail: "Sliding the rod on rails completes a loop where $BLv$ drives current against rail resistance."
      },
      {
        term: "AC generator",
        kind: "theorem",
        statement: "A coil of $N$ turns and area $A$ spinning at $\\omega$ in $B$ gives flux $\\Phi = BA\\cos\\omega t$ and sinusoidal $\\mathcal{E} = NBA\\omega\\sin\\omega t$.",
        detail: "Peak $NBA\\omega$ sets outlet-scale voltage: more turns, area, field, or spin all raise it."
      },
      {
        term: "Transformer EMF",
        kind: "insight",
        statement: "The same $\\Delta\\Phi/\\Delta t$ in a shared iron core transfers power between coils with $V_{2}/V_{1} = N_{2}/N_{1}$, stepping voltage up or down.",
        detail: "High-voltage transmission then low-voltage delivery is Faraday's law priced by wire heating $I^{2}R$."
      }
    ],
    figures: [
      {
        caption: "Magnet entering a coil changes $\\Phi$; induced $I$ opposes the change (Lenz)",
        svg: '<svg role="img" aria-label="Magnet entering a coil changes Phi; induced I opposes the change (Lenz)" viewBox="0 0 400 150" width="100%" height="150"><rect x="40" y="55" width="70" height="40" fill="currentColor" opacity="0.75"/><text x="75" y="80" text-anchor="middle" font-size="12" fill="white">N S</text><line x1="110" y1="75" x2="170" y2="75" stroke="currentColor" stroke-width="2"/><polygon points="170,75 160,70 160,80" fill="currentColor"/><ellipse cx="230" cy="75" rx="18" ry="45" fill="none" stroke="currentColor" stroke-width="2.5"/><ellipse cx="270" cy="75" rx="18" ry="45" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M288,75 L350,75" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="355" cy="75" r="12" fill="none" stroke="currentColor" stroke-width="2"/><line x1="355" y1="63" x2="355" y2="87" stroke="currentColor" stroke-width="1.5"/><text x="355" y="115" text-anchor="middle" font-size="11" fill="currentColor">meter</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "EMF from collapsing flux",
        problem: "A $200$-turn coil of area $0.030$ m$^{2}$ sees perpendicular $B$ fall from $0.60$ T to zero in $0.050$ s. Find the induced EMF.",
        steps: [
          { label: "Flux change", text: "$\\Delta\\Phi = A\\Delta B = 0.030 \\times (-0.60) = -0.018$ Wb." },
          { label: "Faraday", text: "$\\mathcal{E} = -N\\Delta\\Phi/\\Delta t = -200 \\times (-0.018)/0.050 = 72$ V." },
          { label: "Direction", text: "It drives current trying to restore the lost field (Lenz)." }
        ],
        result: "$72$ V induced."
      },
      {
        title: "Sliding-rod power",
        problem: "A $0.25$ m rod slides at $4.0$ m/s perpendicular to $B = 0.60$ T on $3.0$ ohm rails. Find current and mechanical power.",
        steps: [
          { label: "Motional EMF", text: "$\\mathcal{E} = BLv = 0.60 \\times 0.25 \\times 4.0 = 0.60$ V." },
          { label: "Current", text: "$I = 0.60/3.0 = 0.20$ A opposing the motion by Lenz." },
          { label: "Power", text: "$P = \\mathcal{E}I = 0.12$ W, matching drag force $F = ILB = 0.030$ N times $4.0$ m/s." }
        ],
        result: "$0.20$ A with $0.12$ W converted."
      }
    ],
    keyTakeaways: [
      "EMF equals minus turns times flux rate: $\\mathcal{E} = -N\\Delta\\Phi/\\Delta t$.",
      "Lenz opposition is energy conservation in direction form.",
      "Motion $BLv$ and rotation $NBA\\omega$ are Faraday's two great machines."
    ],
    quiz: [
      {
        q: "Flux through a coil doubles in half the time with twice the turns. EMF changes by factor:",
        options: ["$4$", "$8$", "Unchanged", "$2$"],
        answer: 1,
        explanation: "$\\mathcal{E} \\propto N\\Delta\\Phi/\\Delta t$: $2 \\times 2/(1/2) = 8$."
      },
      {
        q: "A north pole approaches a coil. The near face becomes:",
        options: ["Unmagnetized", "East", "North, repelling", "South, attracting"],
        answer: 2,
        explanation: "Lenz repulsion opposes the approach; withdrawal would induce the opposite."
      },
      {
        q: "A rod cutting field lines at $v$ parallel to $B$ develops EMF of:",
        options: ["$B/Lv$", "$BLv$", "$2BLv$", "Zero"],
        answer: 3,
        explanation: "No lines are cut when motion parallels the field, so no charge separation occurs."
      },
      {
        q: "A generator coil spins twice as fast at fixed $B$, $N$, $A$. Peak EMF:",
        options: ["Halves", "Doubles", "Quadruples", "Unchanged"],
        answer: 1,
        explanation: "Peak $NBA\\omega$ is linear in spin rate $\\omega$."
      }
    ],
    depth: [
      {
        tier: "masters",
        title: "From flux rule to the Maxwell–Faraday law",
        blocks: [
          {
            kind: "theorem",
            heading: "Differential Faraday law",
            body: "The integral flux rule $\\oint \\vec{E} \\cdot d\\vec{l} = -d\\Phi_{B}/dt$ is the circulation of a nonconservative electric field. Shrinking the loop to a point and applying Stokes gives the differential form $$\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t},$$ one of Maxwell's four equations: a time-varying $\\vec{B}$ is a source of curling $\\vec{E}$ even with no charges present."
          },
          {
            kind: "derivation",
            heading: "Motional EMF as flux rate",
            body: "Slide a rod at $\\vec{v}$ on rails in uniform $\\vec{B}$: in $dt$ the loop area grows by $L\\,v\\,dt$, so $d\\Phi = BLv\\,dt$ and $\\mathcal{E} = -BLv$. Microscopically each charge feels $q\\vec{v} \\times \\vec{B}$ along the rod, integrating to the same $BLv$. The two pictures agree because the Lorentz force on moving charges is the local agent of the global flux rule; relativity unites them as one field transforming between frames."
          },
          {
            kind: "proof",
            heading: "Lenz from energy conservation",
            body: "Suppose the induced current aided its own change: a receding magnet would induce attraction pulling it back faster, growing flux, current, and kinetic energy without input. The runaway $dK/dt > 0$ with no work source violates conservation, so the physical sign must oppose the change. The minus in Faraday's law is therefore not convention but the energetic stability of the vacuum: electromagnetic systems are diamagnetic in time."
          },
          {
            kind: "remark",
            heading: "What Coletta omits and why it matters",
            body: "Coletta states $\\mathcal{E} = -N\\Delta\\Phi/\\Delta t$ for thin-wire loops; the full form needs the Maxwell correction that changing $\\vec{E}$ likewise curls $\\vec{B}$. Together they predict self-sustaining waves at $c = 1/\\sqrt{\\epsilon_{0}\\mu_{0}}$, the subject of Chapter 23. Every AC machine in this chapter is a low-frequency rehearsal of light itself."
          }
        ]
      }
    ]
  },
  {
    sectionId: "coletta-ch22-s2",
    readingTime: 6,
    intro: "Inductors are the magnetic dual of capacitors: coils that resist current change and bank energy in $\\vec{B}$. Coletta defines $\\mathcal{E} = -L\\Delta I/\\Delta t$, stores $U = LI^{2}/2$, and pairs $L$ against $C$ in every formula. Current gains inertia.",
    objectives: [
      "Apply self-induced $\\mathcal{E} = -L\\Delta I/\\Delta t$ with the henry unit",
      "Compute solenoid inductance $L = \\mu_{0}N^{2}A/\\ell$",
      "Find stored energy $U = LI^{2}/2$ and energy density $u = B^{2}/2\\mu_{0}$"
    ],
    concepts: [
      {
        term: "Self-inductance",
        kind: "definition",
        statement: "**Inductance** $L = N\\Phi/I$ in henries measures flux linked per amp; changing current induces $\\mathcal{E} = -L\\,dI/dt$ opposing the change.",
        detail: "A $50$ mH coil ramping $4.0$ A/s generates $0.20$ V of back EMF fighting the ramp."
      },
      {
        term: "Solenoid inductance",
        kind: "theorem",
        statement: "A solenoid of $N$ turns, area $A$, length $\\ell$ gives $L = \\mu_{0}N^{2}A/\\ell = \\mu_{0}n^{2}V$, growing with turns squared.",
        detail: "Doubling turns quadruples $L$ because both flux per amp and linked turns double."
      },
      {
        term: "Back EMF behavior",
        kind: "insight",
        statement: "Inductors pass steady DC freely but fight every change: they briefly look open at switch-on and briefly source voltage at switch-off.",
        detail: "The switch-off spark across opening contacts is the inductor dumping $LI^{2}/2$ through the air gap."
      },
      {
        term: "Magnetic energy",
        kind: "theorem",
        statement: "An inductor banks $U = LI^{2}/2$, equivalently field density $u = B^{2}/2\\mu_{0}$ integrated over the field volume.",
        detail: "A $2.0$ H coil at $3.0$ A holds $9.0$ J in its field, the dual of $CV^{2}/2$."
      },
      {
        term: "Mutual inductance",
        kind: "definition",
        statement: "**Mutual** inductance $M$ links two coils: $\\mathcal{E}_{2} = -M\\,dI_{1}/dt$, the transformer mechanism with $M = k\\sqrt{L_{1}L_{2}}$.",
        detail: "Shared iron cores push coupling $k$ near one; air cores leave it far below." }
    ],
    examples: [
      {
        title: "Solenoid inductance",
        problem: "A solenoid has $500$ turns, $A = 2.0 \\times 10^{-3}$ m$^{2}$, $\\ell = 0.25$ m. Find $L$.",
        steps: [
          { label: "Formula", text: "$L = \\mu_{0}N^{2}A/\\ell$." },
          { label: "Insert", text: "$L = 4\\pi \\times 10^{-7} \\times 250000 \\times 2.0 \\times 10^{-3}/0.25$." },
          { label: "Evaluate", text: "Numerator $6.283 \\times 10^{-4}$, divided by $0.25$ gives $2.513 \\times 10^{-3}$ H." }
        ],
        result: "About $2.5$ mH."
      },
      {
        title: "Inductive energy",
        problem: "A $0.80$ H coil carries $2.5$ A. Find stored energy and back EMF if current drops to zero in $0.10$ s.",
        steps: [
          { label: "Energy", text: "$U = LI^{2}/2 = 0.80 \\times 6.25/2 = 2.5$ J." },
          { label: "EMF", text: "$\\mathcal{E} = -L\\Delta I/\\Delta t = -0.80 \\times (-2.5)/0.10 = +20$ V." },
          { label: "Sign", text: "Positive at the inflow end, trying to keep current going (Lenz)." }
        ],
        result: "$2.5$ J with $20$ V kick."
      }
    ],
    keyTakeaways: [
      "Inductance $L$ prices flux per amp with back EMF $-L\\,dI/dt$.",
      "Solenoids give $L = \\mu_{0}N^{2}A/\\ell$ with $N^{2}$ scaling.",
      "Energy $LI^{2}/2$ lives in $B$ at density $B^{2}/2\\mu_{0}$."
    ],
    quiz: [
      {
        q: "Turns on a solenoid double at fixed shape. Inductance becomes:",
        options: ["Double", "Quadruple", "Unchanged", "Half"],
        answer: 1,
        explanation: "$L \\propto N^{2}$, so doubling $N$ quadruples $L$."
      },
      {
        q: "Current through an inductor doubles. Stored energy becomes:",
        options: ["Half", "Zero", "Double", "Quadruple"],
        answer: 3,
        explanation: "$U = LI^{2}/2$ scales with $I^{2}$."
      },
      {
        q: "At the instant a DC switch closes, an ideal series inductor acts as:",
        options: ["A capacitor", "A short", "An open", "A battery"],
        answer: 2,
        explanation: "Current cannot jump, so it starts at zero like an open, then relaxes toward a short."
      }
    ]
  },
  {
    sectionId: "coletta-ch22-s3",
    readingTime: 7,
    intro: "Alternating current adds frequency as a knob: inductors stiffen with $X_{L} = \\omega L$ while capacitors soften with $X_{C} = 1/\\omega C$. Coletta builds impedance $Z$, resonance at $f_{0} = 1/2\\pi\\sqrt{LC}$, and average power with phase. Radios tune by this chapter.",
    objectives: [
      "Compute reactances $X_{L} = \\omega L$ and $X_{C} = 1/\\omega C$",
      "Find series impedance $Z = \\sqrt{R^{2} + (X_{L} - X_{C})^{2}}$ and current",
      "Explain resonance $f_{0} = 1/2\\pi\\sqrt{LC}$ and power factor $\\cos\\phi$"
    ],
    concepts: [
      {
        term: "Reactance",
        kind: "definition",
        statement: "**Reactance** prices AC opposition: $X_{L} = \\omega L = 2\\pi fL$ rises with frequency while $X_{C} = 1/\\omega C = 1/2\\pi fC$ falls.",
        detail: "A $10$ mH coil is $3.8$ ohm at $60$ Hz but $3.8$ kohm at $60$ kHz; a $10$ muF capacitor inverts that behavior."
      },
      {
        term: "Impedance",
        kind: "theorem",
        statement: "Series RLC presents $Z = \\sqrt{R^{2} + (X_{L} - X_{C})^{2}}$ with $I_{rms} = V_{rms}/Z$ and phase $\\tan\\phi = (X_{L} - X_{C})/R$.",
        detail: "Inductive circuits lag ($\\phi > 0$, current behind voltage) and capacitive circuits lead."
      },
      {
        term: "Resonance",
        kind: "theorem",
        statement: "**Resonance** at $X_{L} = X_{C}$ gives $f_{0} = 1/2\\pi\\sqrt{LC}$ with minimum $Z = R$ and maximum current.",
        detail: "A $1.0$ mH, $10$ nF tuner resonates near $50$ kHz, selecting one station by peaking its current."
      },
      {
        term: "Average AC power",
        kind: "theorem",
        statement: "Resistors average $P = V_{rms}I_{rms}\\cos\\phi$ while pure $L$ and $C$ average zero, borrowing and returning energy each quarter cycle.",
        detail: "Utilities penalize low power factor because lines carry $I_{rms}$ heating for little delivered $P$."
      },
      {
        term: "Transformers",
        kind: "method",
        statement: "Ideal transformers trade $V_{2}/V_{1} = N_{2}/N_{1} = I_{1}/I_{2}$ at $P_{in} = P_{out}$, stepping high for transmission and low for use.",
        detail: "A $10$:$1$ step-down turns $1200$ V at $1$ A into $120$ V at $10$ A minus small core losses." }
    ],
    figures: [
      {
        caption: "Series resonance: $Z$ minimum and $I$ maximum at $f_{0} = 1/2\\pi\\sqrt{LC}$",
        svg: '<svg role="img" aria-label="Series resonance: Z minimum and I maximum at f_0 = 1/2pisqrtLC" viewBox="0 0 400 150" width="100%" height="150"><line x1="40" y1="10" x2="40" y2="130" stroke="currentColor" stroke-width="1"/><line x1="40" y1="130" x2="380" y2="130" stroke="currentColor" stroke-width="1"/><path d="M40,128 C150,126 180,40 220,38 C260,36 290,126 380,128" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="220" y1="38" x2="220" y2="130" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.6"/><text x="220" y="143" text-anchor="middle" font-size="11" fill="currentColor">f0</text><text x="300" y="60" font-size="12" fill="currentColor">I vs f</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Reactances at 60 Hz",
        problem: "Find $X_{L}$ of $50$ mH and $X_{C}$ of $20$ muF at $60$ Hz.",
        steps: [
          { label: "Inductive", text: "$X_{L} = 2\\pi \\times 60 \\times 0.050 \\approx 18.85$ ohm." },
          { label: "Capacitive", text: "$X_{C} = 1/(2\\pi \\times 60 \\times 20 \\times 10^{-6}) = 1/7.54 \\times 10^{-3} \\approx 132.6$ ohm." },
          { label: "Net", text: "Capacitive dominates by about $114$ ohm of net reactance." }
        ],
        result: "$X_{L} \\approx 19$ ohm, $X_{C} \\approx 133$ ohm."
      },
      {
        title: "Resonant tuner",
        problem: "A tuner uses $L = 0.25$ mH. What $C$ resonates at $1.0$ MHz?",
        steps: [
          { label: "Formula", text: "$f_{0} = 1/2\\pi\\sqrt{LC}$ gives $C = 1/(4\\pi^{2}f_{0}^{2}L)$." },
          { label: "Insert", text: "$C = 1/(4\\pi^{2} \\times 10^{12} \\times 2.5 \\times 10^{-4}) = 1/9.87 \\times 10^{9} \\approx 1.013 \\times 10^{-10}$ F." },
          { label: "Value", text: "About $101$ pF, a standard trimmer size." }
        ],
        result: "About $1.0 \\times 10^{-10}$ F."
      }
    ],
    keyTakeaways: [
      "$X_{L}$ rises and $X_{C}$ falls with frequency, sorting filters.",
      "Impedance $Z$ with phase $\\phi$ generalizes $V = IR$ to AC.",
      "Resonance $f_{0} = 1/2\\pi\\sqrt{LC}$ maximizes current for tuning."
    ],
    quiz: [
      {
        q: "Frequency doubles through a pure inductor. $X_{L}$:",
        options: ["Halves", "Doubles", "Quadruples", "Unchanged"],
        answer: 1,
        explanation: "$X_{L} = 2\\pi fL$ is linear in $f$."
      },
      {
        q: "At series resonance the impedance equals:",
        options: ["$R$", "$X_{L} + X_{C}$", "Infinity", "Zero"],
        answer: 0,
        explanation: "Canceling reactances leave $Z = \\sqrt{R^{2}} = R$, the current maximum."
      },
      {
        q: "Average power in an ideal capacitor under sinusoidal AC is:",
        options: ["$I^{2}X_{C}$", "Maximum", "$V_{rms}I_{rms}$", "Zero"],
        answer: 3,
        explanation: "Voltage and current are $90^{\\circ}$ apart, so $\\cos\\phi = 0$ and energy merely sloshes."
      },
      // PYQ-pattern — Faraday loop emf (rephrased, values changed)
      {
        q: "A 50-turn coil of area $0.020 \\text{ m}^{2}$ faces a field rising from $0$ to $0.50 \\text{ T}$ in $0.10 \\text{ s}$. The induced emf magnitude is:",
        options: ["$0.10 \\text{ V}$", "$50 \\text{ V}$", "$5.0 \\text{ V}$", "$0.50 \\text{ V}$"],
        answer: 2,
        explanation: "Step 1: Given $N = 50$, $A = 0.020 \\text{ m}^{2}$, $\\Delta B = 0.50 \\text{ T}$, $\\Delta t = 0.10 \\text{ s}$. Step 2: Governing law is Faraday $\\mathcal{E} = N\\Delta\\Phi/\\Delta t$ with $\\Phi = BA$ at normal incidence. Step 3: Key equation: $$\\mathcal{E} = N\\frac{A\\Delta B}{\\Delta t} = 50\\frac{(0.020)(0.50)}{0.10}.$$ Step 4: Numerics give flux change $0.010 \\text{ Wb}$ per turn over $0.10 \\text{ s}$, so $\\mathcal{E} = 5.0 \\text{ V}$; units $\\text{Wb/s}$ are volts. Step 5: Distractors fail because $0.10$ drops the $N = 50$ factor, $50$ misplaces a decimal, and $0.50$ confuses $\\Delta B$ with the emf. Step 6: Conclude the coil develops **$5.0 \\text{ V}$**."
      },
      // PYQ-pattern — motional emf (rephrased, values changed)
      {
        q: "A rod of length $L = 0.40 \\text{ m}$ slides at $v = 3.0 \\text{ m/s}$ across a field $B = 0.80 \\text{ T}$ perpendicular to its motion. The emf between its ends is:",
        options: ["$0.96 \\text{ V}$", "$9.6 \\text{ V}$", "$0.096 \\text{ V}$", "$2.4 \\text{ V}$"],
        answer: 0,
        explanation: "Step 1: Given $B = 0.80 \\text{ T}$, $L = 0.40 \\text{ m}$, $v = 3.0 \\text{ m/s}$ mutually perpendicular. Step 2: Governing law is the motional emf $\\mathcal{E} = BLv$ from magnetic force $qvB$ balancing the separated charge. Step 3: Key equation: $$\\mathcal{E} = (0.80)(0.40)(3.0).$$ Step 4: Numerics give $\\mathcal{E} = 0.96 \\text{ V}$; units $\\text{T}\\cdot\\text{m}\\cdot\\text{m/s}$ are volts. Step 5: Distractors fail by decimal slips or by adding $B + L + v$ instead of multiplying. Step 6: Conclude the sliding rod generates **$0.96 \\text{ V}$**."
      },
      // PYQ-pattern — Lenz direction (rephrased, values changed)
      {
        q: "A north pole advances toward a loop along its axis. The induced current, viewed from the magnet side:",
        options: ["Circulates to make a south pole facing the magnet, aiding the approach", "Circulates to make a north pole facing the magnet, opposing the approach", "Vanishes because flux is symmetric", "Reverses twice per second regardless of motion"],
        answer: 1,
        explanation: "Step 1: Given an approaching north pole, so the toward-loop flux grows. Step 2: Governing law is Lenz: induced effects oppose the change, with field of a loop given by the right-hand rule. Step 3: Key relation: $$\\mathcal{E} = -\\frac{d\\Phi}{dt},$$ where the minus sign commands opposition. Step 4: To fight rising into-page flux the loop must send field back out, which needs the current sense that presents a north pole; energy logic agrees since aiding would create work from nothing. Step 5: Distractors fail because aiding violates energy conservation, vanishing ignores $d\\Phi/dt$, and fixed reversal describes AC drive rather than this motion. Step 6: Conclude the loop presents a **repelling north pole**."
      },
      // PYQ-pattern — ideal transformer (rephrased, values changed)
      {
        q: "An ideal transformer has $N_{1}:N_{2} = 1:10$ with primary at $120 \\text{ V}$. The open secondary voltage is:",
        options: ["$12 \\text{ V}$", "$120 \\text{ V}$", "$12000 \\text{ V}$", "$1200 \\text{ V}$"],
        answer: 3,
        explanation: "Step 1: Given turns ratio $N_{2}/N_{1} = 10$ and $V_{1} = 120 \\text{ V}$. Step 2: Governing law for the ideal core is $V_{2}/V_{1} = N_{2}/N_{1}$ at equal power $V_{1}I_{1} = V_{2}I_{2}$. Step 3: Key equation: $$V_{2} = (10)(120).$$ Step 4: Numerics give $V_{2} = 1200 \\text{ V}$ with secondary current one tenth of primary; units stay volts. Step 5: Distractors fail because $12$ steps down, $120$ copies the primary, and $12000$ adds another factor of ten. Step 6: Conclude the secondary delivers **$1200 \\text{ V}$**."
      },
      // PYQ-pattern — LC resonance frequency (rephrased, values changed)
      {
        q: "A tuner uses $L = 0.25 \\text{ mH}$ and $C = 101 \\text{ pF}$. Its resonance frequency is closest to:",
        options: ["$1.0 \\text{ MHz}$", "$6.3 \\text{ MHz}$", "$100 \\text{ kHz}$", "$10 \\text{ MHz}$"],
        answer: 0,
        explanation: "Step 1: Given $L = 2.5 \\times 10^{-4} \\text{ H}$ and $C = 1.01 \\times 10^{-10} \\text{ F}$. Step 2: Governing law is $X_{L} = X_{C}$, giving $f_{0} = 1/2\\pi\\sqrt{LC}$. Step 3: Key equation: $$f_{0} = \\frac{1}{2\\pi\\sqrt{(2.5 \\times 10^{-4})(1.01 \\times 10^{-10})}}.$$ Step 4: Numerics give $LC = 2.53 \\times 10^{-14}$, root $1.59 \\times 10^{-7}$, so $f_{0} \\approx 1.0 \\times 10^{6} \\text{ Hz}$; units of $1/\\sqrt{\\text{H}\\cdot\\text{F}}$ are hertz. Step 5: Distractors fail because $6.3$ drops the $2\\pi$, $100 \\text{ kHz}$ slips a decade, and $10 \\text{ MHz}$ misreads the pico prefix. Step 6: Conclude the tuner peaks near **$1.0 \\text{ MHz}$**."
      },
      // PYQ-pattern — reactance comparison (rephrased, values changed)
      {
        q: "At $60 \\text{ Hz}$, a $50 \\text{ mH}$ inductor and a $20 \\text{ }\\mu\\text{F}$ capacitor are compared. Which holds?",
        options: ["Inductive dominates by about $114 \\text{ }\\Omega$", "Resistive $19 \\text{ }\\Omega$ dominates", "Capacitive dominates by about $114 \\text{ }\\Omega$", "Both equal $19 \\text{ }\\Omega$"],
        answer: 2,
        explanation: "Step 1: Given $f = 60 \\text{ Hz}$, $L = 0.050 \\text{ H}$, $C = 20 \\times 10^{-6} \\text{ F}$. Step 2: Governing laws are $X_{L} = 2\\pi fL$ and $X_{C} = 1/2\\pi fC$. Step 3: Key equations: $$X_{L} = 2\\pi(60)(0.050) = 18.8 \\text{ }\\Omega, \\qquad X_{C} = \\frac{1}{2\\pi(60)(20 \\times 10^{-6})} = 133 \\text{ }\\Omega.$$ Step 4: Numerics give net $133-19 = 114 \\text{ }\\Omega$ capacitive; units are ohms and the larger reactance rules. Step 5: Distractors fail because the inductive choice reads the inequality backward, the resistive choice invents a resistor, and equality holds only at resonance. Step 6: Conclude the branch is **capacitive by about $114 \\text{ }\\Omega$**."
      }
    ]
  }
]

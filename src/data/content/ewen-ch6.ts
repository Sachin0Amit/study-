import type { SectionContent } from '../library'

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition
// Chapter 6: Momentum (pp 160-180)
// ============================================================================

export const ewenCh6Content: SectionContent[] = [
  {
    sectionId: 'ewen-ch6-s1',
    readingTime: 6,
    intro: "A slow truck and a fast bullet can be equally hard to stop because stopping depends on mass times velocity together. This section defines momentum and impulse and proves their exact relation.",
    objectives: [
      "Compute momentum $p = mv$ with correct units",
      "Compute impulse $Ft$ and relate it to momentum change",
      "Use padding and time to explain injury reduction",
    ],
    concepts: [
      {
        term: "Linear momentum",
        kind: "definition",
        statement: "**Momentum $\\vec{p} = m\\vec{v}$** in $\\mathrm{kg \\cdot m/s}$ (or slug-ft/s) measures motion quantity — direction included.",
        detail: "A $1000\\ \\mathrm{kg}$ car at $20\\ \\mathrm{m/s}$ carries $20{,}000\\ \\mathrm{kg \\cdot m/s}$, twice a $500\\ \\mathrm{kg}$ car at the same speed.",
      },
      {
        term: "Impulse",
        kind: "definition",
        statement: "**Impulse $\\vec{J} = \\vec{F}t$** in $\\mathrm{N \\cdot s}$ is the force-time dose delivered to a body.",
        detail: "$100\\ \\mathrm{N}$ for $0.50\\ \\mathrm{s}$ and $50\\ \\mathrm{N}$ for $1.0\\ \\mathrm{s}$ deliver the same $50\\ \\mathrm{N \\cdot s}$.",
      },
      {
        term: "Impulse-momentum theorem",
        kind: "theorem",
        statement: "**$\\vec{F}t = \\Delta\\vec{p} = m\\vec{v} - m\\vec{v}_0$**: impulse equals momentum change — the dynamical core of crash analysis.",
        detail: "It follows directly from $F = ma$ with $a = \\Delta v/t$.",
      },
      {
        term: "Force-time trade-off",
        kind: "insight",
        statement: "Fixed $\\Delta p$ can be delivered by **large $F$ briefly or small $F$ over time** — padding, crumple zones, and follow-through exploit this.",
        detail: "Doubling stopping time halves the average force for the same momentum change.",
      },
      {
        term: "Vector character",
        kind: "notation",
        statement: "Both $\\vec{p}$ and $\\vec{J}$ are **vectors**: signs track gain versus loss along the axis.",
        detail: "Stopping $+20{,}000\\ \\mathrm{kg \\cdot m/s}$ needs $-20{,}000\\ \\mathrm{N \\cdot s}$ of impulse.",
      },
    ],
    figures: [
      {
        caption: "Same $\\Delta p$, different $F$: short hard stop versus long soft stop under equal impulse areas",
        svg: '<svg role="img" aria-label="Same Delta p, different F: short hard stop versus long soft stop under equal impulse areas" viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="40" y1="140" x2="370" y2="140"/><line x1="40" y1="140" x2="40" y2="20"/></g><g fill="currentColor" opacity="0.25"><rect x="60" y="50" width="40" height="90"/><rect x="220" y="95" width="110" height="45"/></g><g stroke="currentColor" stroke-width="2" fill="none"><rect x="60" y="50" width="40" height="90"/><rect x="220" y="95" width="110" height="45"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="52" y="158">hard, brief</text><text x="225" y="158">soft, long: equal area</text></g></svg>',
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Stopping a car",
        problem: "A $1200\\ \\mathrm{kg}$ car at $20.0\\ \\mathrm{m/s}$ must stop. What impulse is needed, and what average force over $4.00\\ \\mathrm{s}$ versus $0.200\\ \\mathrm{s}$?",
        steps: [
          { label: "Momentum", text: "$p = 1200 \\times 20.0 = 24{,}000\\ \\mathrm{kg \\cdot m/s}$; stopping needs $-24{,}000\\ \\mathrm{N \\cdot s}$." },
          { label: "Gentle stop", text: "$F = 24{,}000/4.00 = 6000\\ \\mathrm{N}$ — firm braking." },
          { label: "Crash stop", text: "$F = 24{,}000/0.200 = 120{,}000\\ \\mathrm{N}$ — twenty times worse, hence crumple zones." },
        ],
        result: "Same impulse; $6.00\\ \\mathrm{kN}$ gentle versus $120\\ \\mathrm{kN}$ crash force.",
      },
      {
        title: "Baseball impulse",
        problem: "A $0.145\\ \\mathrm{kg}$ baseball arrives at $40.0\\ \\mathrm{m/s}$ and leaves the bat at $50.0\\ \\mathrm{m/s}$ opposite. Contact lasts $1.20\\ \\mathrm{ms}$. Find impulse and average force.",
        steps: [
          { label: "Change", text: "Take outgoing positive: $\\Delta p = 0.145(50.0) - 0.145(-40.0) = 0.145 \\times 90.0 = 13.05\\ \\mathrm{kg \\cdot m/s}$." },
          { label: "Force", text: "$F = 13.05/0.00120 \\approx 10{,}875\\ \\mathrm{N}$." },
          { label: "Sense", text: "About $10.9\\ \\mathrm{kN}$ for a millisecond — why bats sting." },
        ],
        result: "Impulse $13.1\\ \\mathrm{N \\cdot s}$; average force about $10.9\\ \\mathrm{kN}$.",
      },
    ],
    keyTakeaways: [
      "$p = mv$ ($\\mathrm{kg \\cdot m/s}$); $J = Ft$ ($\\mathrm{N \\cdot s}$); $Ft = \\Delta p$.",
      "Stretching stopping time cuts average force proportionally.",
      "Momentum and impulse carry direction signs.",
    ],
    quiz: [
      {
        q: "Stopping a $1200\\ \\mathrm{kg}$ car from $20.0\\ \\mathrm{m/s}$ in $4.00\\ \\mathrm{s}$ averages",
        options: ["$6000\\ \\mathrm{N}$", "$120{,}000\\ \\mathrm{N}$", "$4800\\ \\mathrm{N}$", "$24{,}000\\ \\mathrm{N}$"],
        answer: 0,
        explanation: "$24{,}000/4.00 = 6000\\ \\mathrm{N}$; in $0.2\\ \\mathrm{s}$ it is $120\\ \\mathrm{kN}$.",
      },
      {
        q: "The baseball ($0.145\\ \\mathrm{kg}$, $-40$ to $+50\\ \\mathrm{m/s}$) gains momentum",
        options: ["$1.45\\ \\mathrm{kg \\cdot m/s}$", "$13.1\\ \\mathrm{kg \\cdot m/s}$", "$7.25\\ \\mathrm{kg \\cdot m/s}$", "Zero"],
        answer: 1,
        explanation: "$0.145 \\times 90.0 = 13.05\\ \\mathrm{kg \\cdot m/s}$.",
      },
      {
        q: "Crumple zones protect by",
        options: ["Reducing total impulse needed", "Lengthening stopping time to lower peak force", "Increasing car mass", "Removing momentum conservation"],
        answer: 1,
        explanation: "Same $\\Delta p$ over longer $t$ means smaller $F$.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch6-s2',
    readingTime: 7,
    intro: "When cars collide, outside forces are brief compared with impact forces, so total momentum is effectively conserved. This section solves elastic and inelastic one-dimensional crashes with that conservation.",
    objectives: [
      "State momentum conservation and its condition",
      "Solve perfectly inelastic (stick-together) collisions",
      "Distinguish elastic from inelastic energy behavior",
    ],
    concepts: [
      {
        term: "Conservation of momentum",
        kind: "law",
        statement: "With negligible net external impulse, **total $\\vec{p}$ is conserved**: $m_1\\vec{v}_1 + m_2\\vec{v}_2 = m_1\\vec{v}_1\\,' + m_2\\vec{v}_2\\,'$.",
        detail: "Internal impact forces are equal-opposite pairs that cancel in the total.",
      },
      {
        term: "Perfectly inelastic collision",
        kind: "definition",
        statement: "Bodies **stick together** ($v_1\\,' = v_2\\,' = V$): $V = (m_1v_1 + m_2v_2)/(m_1 + m_2)$ in one dimension.",
        detail: "Maximum kinetic energy is lost to deformation while momentum survives intact.",
      },
      {
        term: "Elastic collision",
        kind: "definition",
        statement: "**Elastic** impacts conserve kinetic energy too; equal masses exchanging velocities head-on is the textbook case.",
        detail: "Real car crashes are far from elastic — bumpers, heat, and sound carry energy away.",
      },
      {
        term: "Recoil problems",
        kind: "method",
        statement: "Explosions and ejections start at **zero total momentum**, so fragments carry equal-opposite momenta: $m_1v_1 = -m_2v_2$.",
        detail: "A cannon recoils slowly because its mass dwarfs the shell.",
      },
      {
        term: "Sign discipline",
        kind: "method",
        statement: "Fix **one axis positive** and keep every velocity signed through the conservation equation.",
        detail: "A westbound car enters with negative $v$; dropping that sign breaks the total.",
      },
    ],
    examples: [
      {
        title: "Rail-car coupling",
        problem: "A $4000\\ \\mathrm{kg}$ car at $3.00\\ \\mathrm{m/s}$ couples to a stationary $6000\\ \\mathrm{kg}$ car. Find their joint speed.",
        steps: [
          { label: "Total before", text: "$p = 4000 \\times 3.00 + 0 = 12{,}000\\ \\mathrm{kg \\cdot m/s}$." },
          { label: "Joint mass", text: "$M = 10{,}000\\ \\mathrm{kg}$ moving at $V$." },
          { label: "Conserve", text: "$V = 12{,}000/10{,}000 = 1.20\\ \\mathrm{m/s}$ in the original direction." },
        ],
        result: "Coupled speed $1.20\\ \\mathrm{m/s}$.",
      },
      {
        title: "Cannon recoil",
        problem: "A $500\\ \\mathrm{kg}$ cannon fires a $10.0\\ \\mathrm{kg}$ shell at $200\\ \\mathrm{m/s}$. Find recoil speed.",
        steps: [
          { label: "Before", text: "Total momentum zero (at rest)." },
          { label: "After", text: "$10.0 \\times 200 + 500 \\times V = 0$." },
          { label: "Solve", text: "$V = -2000/500 = -4.00\\ \\mathrm{m/s}$ — opposite the shell." },
        ],
        result: "Recoil $4.00\\ \\mathrm{m/s}$ backward.",
      },
    ],
    keyTakeaways: [
      "Isolated collisions conserve total vector momentum even as energy is lost.",
      "Stick-together speed is the momentum-weighted average of pre-impact velocities.",
      "Recoil splits zero initial momentum into equal-opposite parts.",
    ],
    quiz: [
      {
        q: "$4000\\ \\mathrm{kg}$ at $3.00\\ \\mathrm{m/s}$ coupling to $6000\\ \\mathrm{kg}$ at rest gives",
        options: ["$3.00\\ \\mathrm{m/s}$", "$1.20\\ \\mathrm{m/s}$", "$7.50\\ \\mathrm{m/s}$", "$0.800\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$12{,}000/10{,}000 = 1.20\\ \\mathrm{m/s}$.",
      },
      {
        q: "$500\\ \\mathrm{kg}$ cannon firing $10\\ \\mathrm{kg}$ at $200\\ \\mathrm{m/s}$ recoils at",
        options: ["$200\\ \\mathrm{m/s}$", "$4.00\\ \\mathrm{m/s}$", "$0.200\\ \\mathrm{m/s}$", "$20.0\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$V = -(10 \\times 200)/500 = -4.00\\ \\mathrm{m/s}$.",
      },
      {
        q: "In a perfectly inelastic crash, conserved is",
        options: ["Kinetic energy", "Total momentum", "Both fully", "Neither"],
        answer: 1,
        explanation: "Momentum survives; kinetic energy is partly converted to deformation and heat.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch6-s3',
    readingTime: 6,
    intro: "Equal-mass collisions in a plane have a beautiful signature: the fragments separate at right angles. This section proves that result from conservation laws and applies component-wise momentum.",
    objectives: [
      "Apply momentum conservation per axis in 2-D",
      "Show equal-mass elastic scattering separates at $90^{\\circ}$",
      "Solve a billiard-ball deflection problem",
    ],
    concepts: [
      {
        term: "Component-wise conservation",
        kind: "law",
        statement: "Momentum conserves **per axis**: $\\sum p_x$ before equals $\\sum p_x$ after, and likewise $y$ — two independent equations.",
        detail: "Glancing blows transfer sideways momentum while preserving forward totals.",
      },
      {
        term: "Right-angle theorem",
        kind: "theorem",
        statement: "An elastic hit of **equal masses with one initially at rest** sends fragments off at **$90^{\\circ}$ to each other**.",
        detail: "Momentum conservation gives $v_0^2 = v_1^2 + v_2^2$ (Pythagoras) while energy gives the same sum — only a right triangle satisfies both.",
      },
      {
        term: "Billiard-ball idealization",
        kind: "insight",
        statement: "Billiard balls approximate the theorem because their **collision is nearly elastic and masses match** — spin and friction cause the small deviations.",
        detail: "Pool players aim the cue ball deflection using this right-angle expectation.",
      },
      {
        term: "Sticking in two dimensions",
        kind: "method",
        statement: "For 2-D perfectly inelastic hits, total each axis then recombine: $V_x = (\\sum p_x)/M$, $V_y = (\\sum p_y)/M$.",
        detail: "Skid-and-stick car crashes are analyzed exactly this way from skid directions.",
      },
      {
        term: "Energy check",
        kind: "method",
        statement: "Compare **$\\frac{1}{2}mv^2$ totals** before and after to classify the hit as elastic or inelastic.",
        detail: "Missing energy went to spin, sound, heat, or deformation.",
      },
    ],
    figures: [
      {
        caption: "Equal-mass elastic scatter: cue ball and object ball leave at $90^{\\circ}$ to each other",
        svg: '<svg role="img" aria-label="Equal-mass elastic scatter: cue ball and object ball leave at 90^circ to each other" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="40" y1="120" x2="180" y2="120"/><line x1="180" y1="120" x2="300" y2="60"/><line x1="180" y1="120" x2="300" y2="170"/></g><g fill="currentColor"><circle cx="40" cy="120" r="8"/><circle cx="180" cy="120" r="8"/><circle cx="300" cy="60" r="8"/><circle cx="300" cy="170" r="8"/></g><g stroke="currentColor" stroke-width="1.5" fill="none"><rect x="180" y="120" width="14" height="14"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="90" y="110">v₀</text><text x="240" y="80">v₁</text><text x="240" y="160">v₂</text><text x="150" y="160">90°</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Billiard scatter check",
        problem: "A $0.170\\ \\mathrm{kg}$ cue ball at $2.50\\ \\mathrm{m/s}$ hits an identical ball at rest elastically; the cue ball leaves at $30^{\\circ}$ to its path. Find both final speeds via the right-angle rule.",
        steps: [
          { label: "Geometry", text: "Object ball leaves at $90 - 30 = 60^{\\circ}$ on the other side." },
          { label: "Forward ($x$)", text: "$2.50 = v_1\\cos 30^{\\circ} + v_2\\cos 60^{\\circ}$." },
          { label: "Solve", text: "Right-triangle solution: $v_1 = 2.50\\cos 30^{\\circ} = 2.165\\ \\mathrm{m/s}$, $v_2 = 2.50\\sin 30^{\\circ} = 1.25\\ \\mathrm{m/s}$; energy $\\frac{1}{2}m(2.165^2 + 1.25^2) = \\frac{1}{2}m(6.25)$ checks." },
        ],
        result: "Cue ball $2.17\\ \\mathrm{m/s}$ at $30^{\\circ}$; object ball $1.25\\ \\mathrm{m/s}$ at $60^{\\circ}$.",
      },
      {
        title: "Perpendicular momenta sticking",
        problem: "A $1000\\ \\mathrm{kg}$ car east at $10.0\\ \\mathrm{m/s}$ sticks to a $1500\\ \\mathrm{kg}$ car north at $8.00\\ \\mathrm{m/s}$. Find the wreck velocity.",
        steps: [
          { label: "Totals", text: "$p_x = 10{,}000$, $p_y = 12{,}000\\ \\mathrm{kg \\cdot m/s}$; $M = 2500\\ \\mathrm{kg}$." },
          { label: "Components", text: "$V_x = 4.00\\ \\mathrm{m/s}$, $V_y = 4.80\\ \\mathrm{m/s}$." },
          { label: "Recombine", text: "$V = \\sqrt{16 + 23.04} = 6.25\\ \\mathrm{m/s}$ at $\\arctan(4.8/4.0) \\approx 50.2^{\\circ}$ north of east." },
        ],
        result: "$6.25\\ \\mathrm{m/s}$ at $50.2^{\\circ}$ north of east.",
      },
    ],
    keyTakeaways: [
      "Conserve momentum separately on $x$ and $y$ in plane collisions.",
      "Equal-mass elastic scattering from rest separates at $90^{\\circ}$.",
      "Recombine stuck-wreck components with Pythagoras and arctan.",
    ],
    quiz: [
      {
        q: "Cue ball $2.50\\ \\mathrm{m/s}$ deflected $30^{\\circ}$ leaves the object ball at speed",
        options: ["$2.50\\ \\mathrm{m/s}$", "$1.25\\ \\mathrm{m/s}$", "$2.17\\ \\mathrm{m/s}$", "Zero"],
        answer: 1,
        explanation: "$v_2 = v_0\\sin 30^{\\circ} = 1.25\\ \\mathrm{m/s}$ at $60^{\\circ}$.",
      },
      {
        q: "The stuck wreck ($p_x = 10{,}000$, $p_y = 12{,}000$, $M = 2500\\ \\mathrm{kg}$) moves at",
        options: ["$8.80\\ \\mathrm{m/s}$", "$6.25\\ \\mathrm{m/s}$", "$4.00\\ \\mathrm{m/s}$", "$22.0\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$V = \\sqrt{4^2 + 4.8^2} = 6.25\\ \\mathrm{m/s}$.",
      },
      {
        q: "The $90^{\\circ}$ rule needs",
        options: ["Any masses, any elasticity", "Equal masses, elastic, one initially at rest", "Sticking together", "Head-on only with different masses"],
        answer: 1,
        explanation: "Both conservation laws coincide into Pythagoras only under those hypotheses.",
      },
    ],
  },
]

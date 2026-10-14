import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 8
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh8Content: SectionContent[] = [
  {
    sectionId: "coletta-ch8-s1",
    readingTime: 4,
    intro: "Impulse rewrites the second law as a running total of momentum delivered over time. For isolated systems that total is conserved, which sorts collisions even when energy is lost. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Impulse and Linear Momentum at exam depth.",
    objectives: [
      "State and apply the defining relation of Impulse and Linear Momentum with correct SI units",
      "Solve a quantitative Impulse and Linear Momentum problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Impulse and Linear Momentum reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Impulse and Linear Momentum",
        kind: "definition",
        statement: "**Impulse and Linear Momentum is governed by $\\vec{J} = \\vec{F}\\Delta t$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\vec{p} = m\\vec{v}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $m_1v_1 + m_2v_2 = m_1v_1^\\prime + m_2v_2^\\prime$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\vec{J} = \\vec{F}\\Delta t$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $e = \\frac{v_{sep}}{v_{app}}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Collision ledger $m_1v_1 + m_2v_2 = m_1v_1^\\prime + m_2v_2^\\prime$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="disk with lever arm and tangential force"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><circle cx="200" cy="100" r="55" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="200" cy="100" r="6" fill="currentColor"/><line x1="200" y1="100" x2="255" y2="100" stroke="currentColor" stroke-width="2.5"/><line x1="255" y1="100" x2="255" y2="55" stroke="currentColor" stroke-width="2"/><polygon points="255,55 251,65 259,65" fill="currentColor"/><text x="225" y="118" font-size="12" fill="currentColor">r</text><text x="265" y="80" font-size="12" fill="currentColor">F</text><text x="120" y="170" font-size="12" fill="currentColor">torque = r F sin phi</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Completely inelastic stick-together",
        problem: "Mass $2.0 \\, \\mathrm{kg}$ at $3.0 \\, \\mathrm{m/s}$ hits stationary $1.0 \\, \\mathrm{kg}$ and sticks. Find final speed.",
        steps: [
          { label: "Step 1: Initial momentum", text: "$p = m_1v_1 = 2.0 \\times 3.0 = 6.00 \\, \\mathrm{kg\\,m/s}$." },
          { label: "Step 2: Conserve", text: "$(m_1+m_2)V = 6.00$ so $V = 6.00/3.0 = 2.000 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Energy lost", text: "Initial $K = 9.00 \\, \\mathrm{J}$, final $K = 6.00 \\, \\mathrm{J}$; the difference deformed the bodies." },
        ],
        result: "$V = 2.000 \\, \\mathrm{m/s}$ together."
      },
      {
        title: "Impulse stops a ball",
        problem: "A $0.15 \\, \\mathrm{kg}$ tennis ball arrives at $20 \\, \\mathrm{m/s}$ and leaves at $18 \\, \\mathrm{m/s}$ reversed in $\\Delta t = 0.010 \\, \\mathrm{s}$. Find average force.",
        steps: [
          { label: "Step 1: Momentum change", text: "Take incoming as negative: $\\Delta p = 0.15 \\times 18 - 0.15 \\times (-20) = 2.7 + 3.0 = 5.7 \\, \\mathrm{kg\\,m/s}$." },
          { label: "Step 2: Force", text: "$F = \\Delta p/\\Delta t = 5.7/0.010 = 570 \\, \\mathrm{N}$." },
          { label: "Step 3: Sense", text: "Hundreds of newtons for milliseconds is typical of impacts." },
        ],
        result: "$F \\approx 570 \\, \\mathrm{N}$ on the ball."
      },
    ],
    keyTakeaways: [
      "Impulse and Linear Momentum is governed by $\\vec{J} = \\vec{F}\\Delta t$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\vec{p} = m\\vec{v}$",
    ],
    quiz: [
      {
        q: "Impulse equals:",
        options: ["change in momentum", "change in energy", "mass", "power"],
        answer: 0,
        explanation: "$J = F\\Delta t = \\Delta p$."
      },
      {
        q: "Momentum is conserved when:",
        options: ["energy is lost", "forces are friction", "time is long", "net external impulse is zero"],
        answer: 3,
        explanation: "Isolated systems keep $p_{total}$ whatever the internal collision does."
      },
      {
        q: "A completely inelastic collision:",
        options: ["is impossible", "reverses all velocities", "conserves kinetic energy", "sticks with maximum kinetic loss"],
        answer: 3,
        explanation: "Sticking together keeps momentum but sheds the most kinetic energy consistent with it."
      },
    ],
  },
  {
    sectionId: "coletta-ch8-s2",
    readingTime: 5,
    intro: "Impulse rewrites the second law as a running total of momentum delivered over time. For isolated systems that total is conserved, which sorts collisions even when energy is lost. Worked examples carry real numbers you can verify with a calculator. This section treats Momentum of a System of Particles; Conservation of Linear Momentum at exam depth.",
    objectives: [
      "State and apply the defining relation of Momentum of a System of Particles; Conservation of Linear Momentum with correct SI units",
      "Solve a quantitative Momentum of a System of Particles; Conservation of Linear Momentum problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Momentum of a System of Particles; Conservation of Linear Momentum reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $m_1v_1 + m_2v_2 = m_1v_1^\\prime + m_2v_2^\\prime$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\vec{J} = \\vec{F}\\Delta t$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $e = \\frac{v_{sep}}{v_{app}}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $e = \\frac{v_{sep}}{v_{app}}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Momentum of a System of Particles; Conservation of Linear Momentum",
        kind: "definition",
        statement: "**Momentum of a System of Particles; Conservation of Linear Momentum is governed by $\\vec{J} = \\vec{F}\\Delta t$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Completely inelastic stick-together",
        problem: "Mass $3.0 \\, \\mathrm{kg}$ at $4.0 \\, \\mathrm{m/s}$ hits stationary $1.5 \\, \\mathrm{kg}$ and sticks. Find final speed.",
        steps: [
          { label: "Step 1: Initial momentum", text: "$p = m_1v_1 = 3.0 \\times 4.0 = 12.00 \\, \\mathrm{kg\\,m/s}$." },
          { label: "Step 2: Conserve", text: "$(m_1+m_2)V = 12.00$ so $V = 12.00/4.5 = 2.667 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Energy lost", text: "Initial $K = 24.00 \\, \\mathrm{J}$, final $K = 16.00 \\, \\mathrm{J}$; the difference deformed the bodies." },
        ],
        result: "$V = 2.667 \\, \\mathrm{m/s}$ together."
      },
      {
        title: "Impulse stops a ball",
        problem: "A $0.15 \\, \\mathrm{kg}$ tennis ball arrives at $20 \\, \\mathrm{m/s}$ and leaves at $18 \\, \\mathrm{m/s}$ reversed in $\\Delta t = 0.010 \\, \\mathrm{s}$. Find average force.",
        steps: [
          { label: "Step 1: Momentum change", text: "Take incoming as negative: $\\Delta p = 0.15 \\times 18 - 0.15 \\times (-20) = 2.7 + 3.0 = 5.7 \\, \\mathrm{kg\\,m/s}$." },
          { label: "Step 2: Force", text: "$F = \\Delta p/\\Delta t = 5.7/0.010 = 570 \\, \\mathrm{N}$." },
          { label: "Step 3: Sense", text: "Hundreds of newtons for milliseconds is typical of impacts." },
        ],
        result: "$F \\approx 570 \\, \\mathrm{N}$ on the ball."
      },
    ],
    keyTakeaways: [
      "Momentum of a System of Particles; Conservation of Linear Momentum is governed by $\\vec{J} = \\vec{F}\\Delta t$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\vec{p} = m\\vec{v}$",
    ],
    quiz: [
      {
        q: "Momentum is conserved when:",
        options: ["energy is lost", "forces are friction", "time is long", "net external impulse is zero"],
        answer: 3,
        explanation: "Isolated systems keep $p_{total}$ whatever the internal collision does."
      },
      {
        q: "A completely inelastic collision:",
        options: ["is impossible", "reverses all velocities", "conserves kinetic energy", "sticks with maximum kinetic loss"],
        answer: 3,
        explanation: "Sticking together keeps momentum but sheds the most kinetic energy consistent with it."
      },
      {
        q: "Impulse equals:",
        options: ["power", "change in momentum", "change in energy", "mass"],
        answer: 1,
        explanation: "$J = F\\Delta t = \\Delta p$."
      },
    ],
  },
  {
    sectionId: "coletta-ch8-s3",
    readingTime: 6,
    intro: "Impulse rewrites the second law as a running total of momentum delivered over time. For isolated systems that total is conserved, which sorts collisions even when energy is lost. A Closer Look boxes flag the step where beginners most often slip. This section treats Collisions and Kinetic Energy at exam depth.",
    objectives: [
      "State and apply the defining relation of Collisions and Kinetic Energy with correct SI units",
      "Solve a quantitative Collisions and Kinetic Energy problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Collisions and Kinetic Energy reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $e = \\frac{v_{sep}}{v_{app}}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $e = \\frac{v_{sep}}{v_{app}}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Collisions and Kinetic Energy",
        kind: "definition",
        statement: "**Collisions and Kinetic Energy is governed by $\\vec{J} = \\vec{F}\\Delta t$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\vec{p} = m\\vec{v}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $m_1v_1 + m_2v_2 = m_1v_1^\\prime + m_2v_2^\\prime$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Collision ledger $m_1v_1 + m_2v_2 = m_1v_1^\\prime + m_2v_2^\\prime$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="fluid column with hydrostatic pressure levels"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><path d="M 60 60 L 180 60 L 150 150 L 90 150 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><line x1="60" y1="100" x2="180" y2="100" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="120" y1="60" x2="120" y2="30" stroke="currentColor" stroke-width="1.5"/><polygon points="120,30 116,40 124,40" fill="currentColor"/><text x="200" y="100" font-size="12" fill="currentColor">p = p0 + rho g h</text><text x="200" y="125" font-size="12" fill="currentColor">Bernoulli: fast = low p</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Completely inelastic stick-together",
        problem: "Mass $4.0 \\, \\mathrm{kg}$ at $5.0 \\, \\mathrm{m/s}$ hits stationary $2.0 \\, \\mathrm{kg}$ and sticks. Find final speed.",
        steps: [
          { label: "Step 1: Initial momentum", text: "$p = m_1v_1 = 4.0 \\times 5.0 = 20.00 \\, \\mathrm{kg\\,m/s}$." },
          { label: "Step 2: Conserve", text: "$(m_1+m_2)V = 20.00$ so $V = 20.00/6.0 = 3.333 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Energy lost", text: "Initial $K = 50.00 \\, \\mathrm{J}$, final $K = 33.33 \\, \\mathrm{J}$; the difference deformed the bodies." },
        ],
        result: "$V = 3.333 \\, \\mathrm{m/s}$ together."
      },
      {
        title: "Impulse stops a ball",
        problem: "A $0.15 \\, \\mathrm{kg}$ tennis ball arrives at $20 \\, \\mathrm{m/s}$ and leaves at $18 \\, \\mathrm{m/s}$ reversed in $\\Delta t = 0.010 \\, \\mathrm{s}$. Find average force.",
        steps: [
          { label: "Step 1: Momentum change", text: "Take incoming as negative: $\\Delta p = 0.15 \\times 18 - 0.15 \\times (-20) = 2.7 + 3.0 = 5.7 \\, \\mathrm{kg\\,m/s}$." },
          { label: "Step 2: Force", text: "$F = \\Delta p/\\Delta t = 5.7/0.010 = 570 \\, \\mathrm{N}$." },
          { label: "Step 3: Sense", text: "Hundreds of newtons for milliseconds is typical of impacts." },
        ],
        result: "$F \\approx 570 \\, \\mathrm{N}$ on the ball."
      },
    ],
    keyTakeaways: [
      "Collisions and Kinetic Energy is governed by $\\vec{J} = \\vec{F}\\Delta t$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\vec{p} = m\\vec{v}$",
    ],
    quiz: [
      {
        q: "A completely inelastic collision:",
        options: ["is impossible", "reverses all velocities", "conserves kinetic energy", "sticks with maximum kinetic loss"],
        answer: 3,
        explanation: "Sticking together keeps momentum but sheds the most kinetic energy consistent with it."
      },
      {
        q: "Impulse equals:",
        options: ["power", "change in momentum", "change in energy", "mass"],
        answer: 1,
        explanation: "$J = F\\Delta t = \\Delta p$."
      },
      {
        q: "Momentum is conserved when:",
        options: ["net external impulse is zero", "energy is lost", "forces are friction", "time is long"],
        answer: 0,
        explanation: "Isolated systems keep $p_{total}$ whatever the internal collision does."
      },
    ],
  },
]

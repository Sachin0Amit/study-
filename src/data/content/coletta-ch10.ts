import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 10
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh10Content: SectionContent[] = [
  {
    sectionId: "coletta-ch10-s1",
    readingTime: 4,
    intro: "A rigid body at rest must satisfy two vanishing sums at once, of force and of torque. Center of gravity and stress-strain ideas carry statics into structures and materials. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Conditions for Static Equilibrium at exam depth.",
    objectives: [
      "State and apply the defining relation of Conditions for Static Equilibrium with correct SI units",
      "Solve a quantitative Conditions for Static Equilibrium problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Conditions for Static Equilibrium reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Conditions for Static Equilibrium",
        kind: "definition",
        statement: "**Conditions for Static Equilibrium is governed by $\\sum \\vec{F} = 0$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\sum \\tau = 0$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\sigma = \\frac{F}{A}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\sum \\vec{F} = 0$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $\\frac{\\Delta L}{L} = \\frac{\\sigma}{Y}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Equilibrium $\\sum F = 0$, $\\sum \\tau = 0$ on a loaded beam",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="fluid column with hydrostatic pressure levels"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><path d="M 60 60 L 180 60 L 150 150 L 90 150 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><line x1="60" y1="100" x2="180" y2="100" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="120" y1="60" x2="120" y2="30" stroke="currentColor" stroke-width="1.5"/><polygon points="120,30 116,40 124,40" fill="currentColor"/><text x="200" y="100" font-size="12" fill="currentColor">p = p0 + rho g h</text><text x="200" y="125" font-size="12" fill="currentColor">Bernoulli: fast = low p</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Beam pivot balance",
        problem: "A uniform beam of length $L = 4.0 \\, \\mathrm{m}$ pivots at the left end; a weight $W = 400 \\, \\mathrm{N}$ hangs at $x = 1.0 \\, \\mathrm{m}$. What upward cable force at the far end balances torque?",
        steps: [
          { label: "Step 1: Torque equation", text: "About the pivot $TL - Wx = 0$." },
          { label: "Step 2: Solve", text: "$T = Wx/L = 400 \\times 1.0/4.0 = 100.0 \\, \\mathrm{N}$." },
          { label: "Step 3: Force check", text: "Pivot supplies $W - T$ upward so net force vanishes." },
        ],
        result: "$T = 100.0 \\, \\mathrm{N}$."
      },
      {
        title: "Stress in a wire",
        problem: "A $400 \\, \\mathrm{N}$ load hangs on a wire of area $A = 2.0 \\times 10^{-6} \\, \\mathrm{m^2}$. Find stress.",
        steps: [
          { label: "Step 1: Definition", text: "$\\sigma = F/A$." },
          { label: "Step 2: Divide", text: "$\\sigma = 400/2.0 \\times 10^{-6} = 2.00e+08 \\, \\mathrm{Pa}$." },
          { label: "Step 3: Strain preview", text: "Strain $= \\sigma/Y$; steel $Y = 2.0 \\times 10^{11} \\, \\mathrm{Pa}$ gives tiny stretch." },
        ],
        result: "$\\sigma = 2.00e+08 \\, \\mathrm{Pa}$."
      },
    ],
    keyTakeaways: [
      "Conditions for Static Equilibrium is governed by $\\sum \\vec{F} = 0$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\sum \\tau = 0$",
    ],
    quiz: [
      {
        q: "Static equilibrium requires:",
        options: ["only $\\sum F = 0$", "both $\\sum F = 0$ and $\\sum \\tau = 0$", "only $\\sum \\tau = 0$", "zero mass"],
        answer: 1,
        explanation: "Translation and rotation must each balance."
      },
      {
        q: "Center of gravity is where:",
        options: ["weight effectively acts", "friction acts", "normal is zero", "mass is zero"],
        answer: 0,
        explanation: "Torque of weight about any axis equals $W$ at the CG."
      },
      {
        q: "Hooke law for solids reads:",
        options: ["stress is zero", "strain is zero", "$\\sigma = Y \\times$ strain", "$\\sigma = Y/$strain"],
        answer: 2,
        explanation: "Stress over strain is Young modulus $Y$."
      },
    ],
  },
  {
    sectionId: "coletta-ch10-s2",
    readingTime: 5,
    intro: "A rigid body at rest must satisfy two vanishing sums at once, of force and of torque. Center of gravity and stress-strain ideas carry statics into structures and materials. Worked examples carry real numbers you can verify with a calculator. This section treats Center of Gravity at exam depth.",
    objectives: [
      "State and apply the defining relation of Center of Gravity with correct SI units",
      "Solve a quantitative Center of Gravity problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Center of Gravity reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\sigma = \\frac{F}{A}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\sum \\vec{F} = 0$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $\\frac{\\Delta L}{L} = \\frac{\\sigma}{Y}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $\\frac{\\Delta L}{L} = \\frac{\\sigma}{Y}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Center of Gravity",
        kind: "definition",
        statement: "**Center of Gravity is governed by $\\sum \\vec{F} = 0$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Beam pivot balance",
        problem: "A uniform beam of length $L = 4.0 \\, \\mathrm{m}$ pivots at the left end; a weight $W = 500 \\, \\mathrm{N}$ hangs at $x = 1.2 \\, \\mathrm{m}$. What upward cable force at the far end balances torque?",
        steps: [
          { label: "Step 1: Torque equation", text: "About the pivot $TL - Wx = 0$." },
          { label: "Step 2: Solve", text: "$T = Wx/L = 500 \\times 1.2/4.0 = 150.0 \\, \\mathrm{N}$." },
          { label: "Step 3: Force check", text: "Pivot supplies $W - T$ upward so net force vanishes." },
        ],
        result: "$T = 150.0 \\, \\mathrm{N}$."
      },
      {
        title: "Stress in a wire",
        problem: "A $500 \\, \\mathrm{N}$ load hangs on a wire of area $A = 2.0 \\times 10^{-6} \\, \\mathrm{m^2}$. Find stress.",
        steps: [
          { label: "Step 1: Definition", text: "$\\sigma = F/A$." },
          { label: "Step 2: Divide", text: "$\\sigma = 500/2.0 \\times 10^{-6} = 2.50e+08 \\, \\mathrm{Pa}$." },
          { label: "Step 3: Strain preview", text: "Strain $= \\sigma/Y$; steel $Y = 2.0 \\times 10^{11} \\, \\mathrm{Pa}$ gives tiny stretch." },
        ],
        result: "$\\sigma = 2.50e+08 \\, \\mathrm{Pa}$."
      },
    ],
    keyTakeaways: [
      "Center of Gravity is governed by $\\sum \\vec{F} = 0$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\sum \\tau = 0$",
    ],
    quiz: [
      {
        q: "Center of gravity is where:",
        options: ["weight effectively acts", "friction acts", "normal is zero", "mass is zero"],
        answer: 0,
        explanation: "Torque of weight about any axis equals $W$ at the CG."
      },
      {
        q: "Hooke law for solids reads:",
        options: ["stress is zero", "strain is zero", "$\\sigma = Y \\times$ strain", "$\\sigma = Y/$strain"],
        answer: 2,
        explanation: "Stress over strain is Young modulus $Y$."
      },
      {
        q: "Static equilibrium requires:",
        options: ["zero mass", "only $\\sum F = 0$", "both $\\sum F = 0$ and $\\sum \\tau = 0$", "only $\\sum \\tau = 0$"],
        answer: 2,
        explanation: "Translation and rotation must each balance."
      },
    ],
  },
  {
    sectionId: "coletta-ch10-s3",
    readingTime: 6,
    intro: "A rigid body at rest must satisfy two vanishing sums at once, of force and of torque. Center of gravity and stress-strain ideas carry statics into structures and materials. A Closer Look boxes flag the step where beginners most often slip. This section treats Stress and Strain at exam depth.",
    objectives: [
      "State and apply the defining relation of Stress and Strain with correct SI units",
      "Solve a quantitative Stress and Strain problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Stress and Strain reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $\\frac{\\Delta L}{L} = \\frac{\\sigma}{Y}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $\\frac{\\Delta L}{L} = \\frac{\\sigma}{Y}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Stress and Strain",
        kind: "definition",
        statement: "**Stress and Strain is governed by $\\sum \\vec{F} = 0$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\sum \\tau = 0$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\sigma = \\frac{F}{A}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Equilibrium $\\sum F = 0$, $\\sum \\tau = 0$ on a loaded beam",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="pressure volume diagram with cycle work area"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="60" y1="20" x2="60" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="170" x2="360" y2="170" stroke="currentColor" stroke-width="1.5"/><path d="M 90 140 L 220 140 L 220 70 L 320 70" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 90 140 L 320 70" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="30" y="100" font-size="12" fill="currentColor">p</text><text x="200" y="188" font-size="12" fill="currentColor">V</text><text x="230" y="50" font-size="12" fill="currentColor">area = work W</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Beam pivot balance",
        problem: "A uniform beam of length $L = 4.0 \\, \\mathrm{m}$ pivots at the left end; a weight $W = 600 \\, \\mathrm{N}$ hangs at $x = 1.4 \\, \\mathrm{m}$. What upward cable force at the far end balances torque?",
        steps: [
          { label: "Step 1: Torque equation", text: "About the pivot $TL - Wx = 0$." },
          { label: "Step 2: Solve", text: "$T = Wx/L = 600 \\times 1.4/4.0 = 210.0 \\, \\mathrm{N}$." },
          { label: "Step 3: Force check", text: "Pivot supplies $W - T$ upward so net force vanishes." },
        ],
        result: "$T = 210.0 \\, \\mathrm{N}$."
      },
      {
        title: "Stress in a wire",
        problem: "A $600 \\, \\mathrm{N}$ load hangs on a wire of area $A = 2.0 \\times 10^{-6} \\, \\mathrm{m^2}$. Find stress.",
        steps: [
          { label: "Step 1: Definition", text: "$\\sigma = F/A$." },
          { label: "Step 2: Divide", text: "$\\sigma = 600/2.0 \\times 10^{-6} = 3.00e+08 \\, \\mathrm{Pa}$." },
          { label: "Step 3: Strain preview", text: "Strain $= \\sigma/Y$; steel $Y = 2.0 \\times 10^{11} \\, \\mathrm{Pa}$ gives tiny stretch." },
        ],
        result: "$\\sigma = 3.00e+08 \\, \\mathrm{Pa}$."
      },
    ],
    keyTakeaways: [
      "Stress and Strain is governed by $\\sum \\vec{F} = 0$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\sum \\tau = 0$",
    ],
    quiz: [
      {
        q: "Hooke law for solids reads:",
        options: ["stress is zero", "strain is zero", "$\\sigma = Y \\times$ strain", "$\\sigma = Y/$strain"],
        answer: 2,
        explanation: "Stress over strain is Young modulus $Y$."
      },
      {
        q: "Static equilibrium requires:",
        options: ["zero mass", "only $\\sum F = 0$", "both $\\sum F = 0$ and $\\sum \\tau = 0$", "only $\\sum \\tau = 0$"],
        answer: 2,
        explanation: "Translation and rotation must each balance."
      },
      {
        q: "Center of gravity is where:",
        options: ["mass is zero", "weight effectively acts", "friction acts", "normal is zero"],
        answer: 1,
        explanation: "Torque of weight about any axis equals $W$ at the CG."
      },
    ],
  },
]

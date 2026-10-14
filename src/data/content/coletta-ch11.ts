import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 11
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh11Content: SectionContent[] = [
  {
    sectionId: "coletta-ch11-s1",
    readingTime: 7,
    intro: "Fluids at rest press equally in all directions while flowing fluids trade pressure for speed. Buoyancy, surface tension, viscosity, and Bernoulli structure the whole story. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Properties of Fluids at exam depth.",
    objectives: [
      "State and apply the defining relation of Properties of Fluids with correct SI units",
      "Solve a quantitative Properties of Fluids problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Properties of Fluids reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Properties of Fluids",
        kind: "definition",
        statement: "**Properties of Fluids is governed by $\\rho = \\frac{m}{V}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $p = p_0 + \\rho g h$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $B = \\rho V g$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\rho = \\frac{m}{V}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $p + \\frac{1}{2}\\rho v^2 + \\rho g h = \\mathrm{const}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Hydrostatics $p = p_0 + \\rho gh$ and Bernoulli trade of $p$ and $v$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="gas molecules colliding with box walls"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><rect x="110" y="50" width="130" height="100" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="140" cy="80" r="4" fill="currentColor"/><line x1="140" y1="80" x2="160" y2="70" stroke="currentColor" stroke-width="1.5"/><circle cx="180" cy="110" r="4" fill="currentColor"/><line x1="180" y1="110" x2="162" y2="98" stroke="currentColor" stroke-width="1.5"/><circle cx="210" cy="85" r="4" fill="currentColor"/><line x1="210" y1="85" x2="225" y2="97" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="125" r="4" fill="currentColor"/><line x1="150" y1="125" x2="172" y2="133" stroke="currentColor" stroke-width="1.5"/><text x="260" y="100" font-size="12" fill="currentColor">p V = N k T</text><text x="260" y="120" font-size="12" fill="currentColor">hits give pressure</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Hydrostatic pressure",
        problem: "Find gauge pressure at depth $h = 2.0 \\, \\mathrm{m}$ in water.",
        steps: [
          { label: "Step 1: Formula", text: "$p = \\rho g h$ with $\\rho = 1000 \\, \\mathrm{kg/m^3}$." },
          { label: "Step 2: Substitute", text: "$p = 1000 \\times 9.8 \\times 2.0 = 19600 \\, \\mathrm{Pa}$." },
          { label: "Step 3: Atmospheres", text: "That is $0.19 \\, \\mathrm{atm}$ gauge." },
        ],
        result: "$p = 19600 \\, \\mathrm{Pa}$ gauge ($0.19 \\, \\mathrm{atm}$)."
      },
      {
        title: "Buoyant force on a block",
        problem: "A $0.020 \\, \\mathrm{m^3}$ block submerges fully in water. Find buoyancy.",
        steps: [
          { label: "Step 1: Archimedes", text: "$B = \\rho V g$." },
          { label: "Step 2: Numbers", text: "$B = 1000 \\times 0.020 \\times 9.8 = 196 \\, \\mathrm{N}$." },
          { label: "Step 3: Meaning", text: "The scale reads $196 \\, \\mathrm{N}$ lighter than in air." },
        ],
        result: "$B = 196 \\, \\mathrm{N}$ upward."
      },
    ],
    keyTakeaways: [
      "Properties of Fluids is governed by $\\rho = \\frac{m}{V}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $p = p_0 + \\rho g h$",
    ],
    quiz: [
      {
        q: "Gauge pressure at depth $h$ is:",
        options: ["$\\rho gh$", "$\\rho/h$", "$gh/\\rho$", "zero"],
        answer: 0,
        explanation: "$p = p_0 + \\rho gh$ grows linearly with depth."
      },
      {
        q: "Buoyant force equals:",
        options: ["weight of object always", "zero", "atmospheric pressure", "weight of displaced fluid"],
        answer: 3,
        explanation: "$B = \\rho Vg$ is the missing weight of fluid."
      },
      {
        q: "Bernoulli says faster flow means:",
        options: ["same pressure", "no pressure", "higher pressure", "lower pressure"],
        answer: 3,
        explanation: "Energy conservation trades $v^2$ against $p$ at fixed height."
      },
    ],
  },
  {
    sectionId: "coletta-ch11-s2",
    readingTime: 8,
    intro: "Fluids at rest press equally in all directions while flowing fluids trade pressure for speed. Buoyancy, surface tension, viscosity, and Bernoulli structure the whole story. Worked examples carry real numbers you can verify with a calculator. This section treats Pressure in a Fluid at Rest at exam depth.",
    objectives: [
      "State and apply the defining relation of Pressure in a Fluid at Rest with correct SI units",
      "Solve a quantitative Pressure in a Fluid at Rest problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Pressure in a Fluid at Rest reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $B = \\rho V g$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\rho = \\frac{m}{V}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $p + \\frac{1}{2}\\rho v^2 + \\rho g h = \\mathrm{const}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $p + \\frac{1}{2}\\rho v^2 + \\rho g h = \\mathrm{const}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Pressure in a Fluid at Rest",
        kind: "definition",
        statement: "**Pressure in a Fluid at Rest is governed by $\\rho = \\frac{m}{V}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Hydrostatic pressure",
        problem: "Find gauge pressure at depth $h = 3.0 \\, \\mathrm{m}$ in water.",
        steps: [
          { label: "Step 1: Formula", text: "$p = \\rho g h$ with $\\rho = 1000 \\, \\mathrm{kg/m^3}$." },
          { label: "Step 2: Substitute", text: "$p = 1000 \\times 9.8 \\times 3.0 = 29400 \\, \\mathrm{Pa}$." },
          { label: "Step 3: Atmospheres", text: "That is $0.29 \\, \\mathrm{atm}$ gauge." },
        ],
        result: "$p = 29400 \\, \\mathrm{Pa}$ gauge ($0.29 \\, \\mathrm{atm}$)."
      },
      {
        title: "Buoyant force on a block",
        problem: "A $0.020 \\, \\mathrm{m^3}$ block submerges fully in water. Find buoyancy.",
        steps: [
          { label: "Step 1: Archimedes", text: "$B = \\rho V g$." },
          { label: "Step 2: Numbers", text: "$B = 1000 \\times 0.020 \\times 9.8 = 196 \\, \\mathrm{N}$." },
          { label: "Step 3: Meaning", text: "The scale reads $196 \\, \\mathrm{N}$ lighter than in air." },
        ],
        result: "$B = 196 \\, \\mathrm{N}$ upward."
      },
    ],
    keyTakeaways: [
      "Pressure in a Fluid at Rest is governed by $\\rho = \\frac{m}{V}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $p = p_0 + \\rho g h$",
    ],
    quiz: [
      {
        q: "Buoyant force equals:",
        options: ["weight of object always", "zero", "atmospheric pressure", "weight of displaced fluid"],
        answer: 3,
        explanation: "$B = \\rho Vg$ is the missing weight of fluid."
      },
      {
        q: "Bernoulli says faster flow means:",
        options: ["same pressure", "no pressure", "higher pressure", "lower pressure"],
        answer: 3,
        explanation: "Energy conservation trades $v^2$ against $p$ at fixed height."
      },
      {
        q: "Gauge pressure at depth $h$ is:",
        options: ["zero", "$\\rho gh$", "$\\rho/h$", "$gh/\\rho$"],
        answer: 1,
        explanation: "$p = p_0 + \\rho gh$ grows linearly with depth."
      },
    ],
  },
  {
    sectionId: "coletta-ch11-s3",
    readingTime: 9,
    intro: "Fluids at rest press equally in all directions while flowing fluids trade pressure for speed. Buoyancy, surface tension, viscosity, and Bernoulli structure the whole story. A Closer Look boxes flag the step where beginners most often slip. This section treats Archimedes' Principle at exam depth.",
    objectives: [
      "State and apply the defining relation of Archimedes' Principle with correct SI units",
      "Solve a quantitative Archimedes' Principle problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Archimedes' Principle reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $p + \\frac{1}{2}\\rho v^2 + \\rho g h = \\mathrm{const}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $p + \\frac{1}{2}\\rho v^2 + \\rho g h = \\mathrm{const}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Archimedes' Principle",
        kind: "definition",
        statement: "**Archimedes' Principle is governed by $\\rho = \\frac{m}{V}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $p = p_0 + \\rho g h$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $B = \\rho V g$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Hydrostatics $p = p_0 + \\rho gh$ and Bernoulli trade of $p$ and $v$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="sine wave of simple harmonic motion"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="40" y1="100" x2="360" y2="100" stroke="currentColor" stroke-width="1.2"/><path d="M 40 100 Q 80 30 120 100 T 200 100 T 280 100 T 360 100" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="40" y1="20" x2="40" y2="180" stroke="currentColor" stroke-width="1.2"/><text x="200" y="170" font-size="12" text-anchor="middle" fill="currentColor">x = A cos(omega t + phi)</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Hydrostatic pressure",
        problem: "Find gauge pressure at depth $h = 4.0 \\, \\mathrm{m}$ in water.",
        steps: [
          { label: "Step 1: Formula", text: "$p = \\rho g h$ with $\\rho = 1000 \\, \\mathrm{kg/m^3}$." },
          { label: "Step 2: Substitute", text: "$p = 1000 \\times 9.8 \\times 4.0 = 39200 \\, \\mathrm{Pa}$." },
          { label: "Step 3: Atmospheres", text: "That is $0.39 \\, \\mathrm{atm}$ gauge." },
        ],
        result: "$p = 39200 \\, \\mathrm{Pa}$ gauge ($0.39 \\, \\mathrm{atm}$)."
      },
      {
        title: "Buoyant force on a block",
        problem: "A $0.020 \\, \\mathrm{m^3}$ block submerges fully in water. Find buoyancy.",
        steps: [
          { label: "Step 1: Archimedes", text: "$B = \\rho V g$." },
          { label: "Step 2: Numbers", text: "$B = 1000 \\times 0.020 \\times 9.8 = 196 \\, \\mathrm{N}$." },
          { label: "Step 3: Meaning", text: "The scale reads $196 \\, \\mathrm{N}$ lighter than in air." },
        ],
        result: "$B = 196 \\, \\mathrm{N}$ upward."
      },
    ],
    keyTakeaways: [
      "Archimedes' Principle is governed by $\\rho = \\frac{m}{V}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $p = p_0 + \\rho g h$",
    ],
    quiz: [
      {
        q: "Bernoulli says faster flow means:",
        options: ["same pressure", "no pressure", "higher pressure", "lower pressure"],
        answer: 3,
        explanation: "Energy conservation trades $v^2$ against $p$ at fixed height."
      },
      {
        q: "Gauge pressure at depth $h$ is:",
        options: ["zero", "$\\rho gh$", "$\\rho/h$", "$gh/\\rho$"],
        answer: 1,
        explanation: "$p = p_0 + \\rho gh$ grows linearly with depth."
      },
      {
        q: "Buoyant force equals:",
        options: ["weight of displaced fluid", "weight of object always", "zero", "atmospheric pressure"],
        answer: 0,
        explanation: "$B = \\rho Vg$ is the missing weight of fluid."
      },
    ],
  },
  {
    sectionId: "coletta-ch11-s4",
    readingTime: 4,
    intro: "Fluids at rest press equally in all directions while flowing fluids trade pressure for speed. Buoyancy, surface tension, viscosity, and Bernoulli structure the whole story. End-of-section objectives tell you what to reproduce closed-book. This section treats Surface Tension and Capillarity at exam depth.",
    objectives: [
      "State and apply the defining relation of Surface Tension and Capillarity with correct SI units",
      "Solve a quantitative Surface Tension and Capillarity problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Surface Tension and Capillarity reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Surface Tension and Capillarity",
        kind: "definition",
        statement: "**Surface Tension and Capillarity is governed by $\\rho = \\frac{m}{V}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $p = p_0 + \\rho g h$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $B = \\rho V g$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\rho = \\frac{m}{V}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $p + \\frac{1}{2}\\rho v^2 + \\rho g h = \\mathrm{const}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    examples: [
      {
        title: "Hydrostatic pressure",
        problem: "Find gauge pressure at depth $h = 5.0 \\, \\mathrm{m}$ in water.",
        steps: [
          { label: "Step 1: Formula", text: "$p = \\rho g h$ with $\\rho = 1000 \\, \\mathrm{kg/m^3}$." },
          { label: "Step 2: Substitute", text: "$p = 1000 \\times 9.8 \\times 5.0 = 49000 \\, \\mathrm{Pa}$." },
          { label: "Step 3: Atmospheres", text: "That is $0.48 \\, \\mathrm{atm}$ gauge." },
        ],
        result: "$p = 49000 \\, \\mathrm{Pa}$ gauge ($0.48 \\, \\mathrm{atm}$)."
      },
      {
        title: "Buoyant force on a block",
        problem: "A $0.020 \\, \\mathrm{m^3}$ block submerges fully in water. Find buoyancy.",
        steps: [
          { label: "Step 1: Archimedes", text: "$B = \\rho V g$." },
          { label: "Step 2: Numbers", text: "$B = 1000 \\times 0.020 \\times 9.8 = 196 \\, \\mathrm{N}$." },
          { label: "Step 3: Meaning", text: "The scale reads $196 \\, \\mathrm{N}$ lighter than in air." },
        ],
        result: "$B = 196 \\, \\mathrm{N}$ upward."
      },
    ],
    keyTakeaways: [
      "Surface Tension and Capillarity is governed by $\\rho = \\frac{m}{V}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $p = p_0 + \\rho g h$",
    ],
    quiz: [
      {
        q: "Gauge pressure at depth $h$ is:",
        options: ["zero", "$\\rho gh$", "$\\rho/h$", "$gh/\\rho$"],
        answer: 1,
        explanation: "$p = p_0 + \\rho gh$ grows linearly with depth."
      },
      {
        q: "Buoyant force equals:",
        options: ["weight of displaced fluid", "weight of object always", "zero", "atmospheric pressure"],
        answer: 0,
        explanation: "$B = \\rho Vg$ is the missing weight of fluid."
      },
      {
        q: "Bernoulli says faster flow means:",
        options: ["lower pressure", "same pressure", "no pressure", "higher pressure"],
        answer: 0,
        explanation: "Energy conservation trades $v^2$ against $p$ at fixed height."
      },
    ],
  },
  {
    sectionId: "coletta-ch11-s5",
    readingTime: 5,
    intro: "Fluids at rest press equally in all directions while flowing fluids trade pressure for speed. Buoyancy, surface tension, viscosity, and Bernoulli structure the whole story. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Fluid Dynamics; Bernoulli's Equation at exam depth.",
    objectives: [
      "State and apply the defining relation of Fluid Dynamics; Bernoulli's Equation with correct SI units",
      "Solve a quantitative Fluid Dynamics; Bernoulli's Equation problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Fluid Dynamics; Bernoulli's Equation reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $B = \\rho V g$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\rho = \\frac{m}{V}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $p + \\frac{1}{2}\\rho v^2 + \\rho g h = \\mathrm{const}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $p + \\frac{1}{2}\\rho v^2 + \\rho g h = \\mathrm{const}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Fluid Dynamics; Bernoulli's Equation",
        kind: "definition",
        statement: "**Fluid Dynamics; Bernoulli's Equation is governed by $\\rho = \\frac{m}{V}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    figures: [
      {
        caption: "Hydrostatics $p = p_0 + \\rho gh$ and Bernoulli trade of $p$ and $v$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="ruler showing SI length scale"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="40" y1="140" x2="360" y2="140" stroke="currentColor" stroke-width="2"/><line x1="40" y1="140" x2="40" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="56" y1="140" x2="56" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="72" y1="140" x2="72" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="88" y1="140" x2="88" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="104" y1="140" x2="104" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="120" y1="140" x2="120" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="136" y1="140" x2="136" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="152" y1="140" x2="152" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="168" y1="140" x2="168" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="184" y1="140" x2="184" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="200" y1="140" x2="200" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="216" y1="140" x2="216" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="232" y1="140" x2="232" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="248" y1="140" x2="248" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="264" y1="140" x2="264" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="280" y1="140" x2="280" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="296" y1="140" x2="296" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="312" y1="140" x2="312" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="328" y1="140" x2="328" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="344" y1="140" x2="344" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="360" y1="140" x2="360" y2="122" stroke="currentColor" stroke-width="1.5"/><text x="200" y="170" font-size="13" text-anchor="middle" fill="currentColor">meter stick — SI length in meters</text><text x="200" y="60" font-size="13" text-anchor="middle" fill="currentColor">1 m = 100 cm = 1000 mm</text><line x1="40" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><polygon points="200,100 190,96 190,104" fill="currentColor"/></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Hydrostatic pressure",
        problem: "Find gauge pressure at depth $h = 6.0 \\, \\mathrm{m}$ in water.",
        steps: [
          { label: "Step 1: Formula", text: "$p = \\rho g h$ with $\\rho = 1000 \\, \\mathrm{kg/m^3}$." },
          { label: "Step 2: Substitute", text: "$p = 1000 \\times 9.8 \\times 6.0 = 58800 \\, \\mathrm{Pa}$." },
          { label: "Step 3: Atmospheres", text: "That is $0.58 \\, \\mathrm{atm}$ gauge." },
        ],
        result: "$p = 58800 \\, \\mathrm{Pa}$ gauge ($0.58 \\, \\mathrm{atm}$)."
      },
      {
        title: "Buoyant force on a block",
        problem: "A $0.020 \\, \\mathrm{m^3}$ block submerges fully in water. Find buoyancy.",
        steps: [
          { label: "Step 1: Archimedes", text: "$B = \\rho V g$." },
          { label: "Step 2: Numbers", text: "$B = 1000 \\times 0.020 \\times 9.8 = 196 \\, \\mathrm{N}$." },
          { label: "Step 3: Meaning", text: "The scale reads $196 \\, \\mathrm{N}$ lighter than in air." },
        ],
        result: "$B = 196 \\, \\mathrm{N}$ upward."
      },
    ],
    keyTakeaways: [
      "Fluid Dynamics; Bernoulli's Equation is governed by $\\rho = \\frac{m}{V}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $p = p_0 + \\rho g h$",
    ],
    quiz: [
      {
        q: "Buoyant force equals:",
        options: ["weight of displaced fluid", "weight of object always", "zero", "atmospheric pressure"],
        answer: 0,
        explanation: "$B = \\rho Vg$ is the missing weight of fluid."
      },
      {
        q: "Bernoulli says faster flow means:",
        options: ["lower pressure", "same pressure", "no pressure", "higher pressure"],
        answer: 0,
        explanation: "Energy conservation trades $v^2$ against $p$ at fixed height."
      },
      {
        q: "Gauge pressure at depth $h$ is:",
        options: ["$gh/\\rho$", "zero", "$\\rho gh$", "$\\rho/h$"],
        answer: 2,
        explanation: "$p = p_0 + \\rho gh$ grows linearly with depth."
      },
    ],
  },
  {
    sectionId: "coletta-ch11-s6",
    readingTime: 6,
    intro: "Fluids at rest press equally in all directions while flowing fluids trade pressure for speed. Buoyancy, surface tension, viscosity, and Bernoulli structure the whole story. Worked examples carry real numbers you can verify with a calculator. This section treats Viscosity at exam depth.",
    objectives: [
      "State and apply the defining relation of Viscosity with correct SI units",
      "Solve a quantitative Viscosity problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Viscosity reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $p + \\frac{1}{2}\\rho v^2 + \\rho g h = \\mathrm{const}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $p + \\frac{1}{2}\\rho v^2 + \\rho g h = \\mathrm{const}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Viscosity",
        kind: "definition",
        statement: "**Viscosity is governed by $\\rho = \\frac{m}{V}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $p = p_0 + \\rho g h$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $B = \\rho V g$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    examples: [
      {
        title: "Hydrostatic pressure",
        problem: "Find gauge pressure at depth $h = 7.0 \\, \\mathrm{m}$ in water.",
        steps: [
          { label: "Step 1: Formula", text: "$p = \\rho g h$ with $\\rho = 1000 \\, \\mathrm{kg/m^3}$." },
          { label: "Step 2: Substitute", text: "$p = 1000 \\times 9.8 \\times 7.0 = 68600 \\, \\mathrm{Pa}$." },
          { label: "Step 3: Atmospheres", text: "That is $0.68 \\, \\mathrm{atm}$ gauge." },
        ],
        result: "$p = 68600 \\, \\mathrm{Pa}$ gauge ($0.68 \\, \\mathrm{atm}$)."
      },
      {
        title: "Buoyant force on a block",
        problem: "A $0.020 \\, \\mathrm{m^3}$ block submerges fully in water. Find buoyancy.",
        steps: [
          { label: "Step 1: Archimedes", text: "$B = \\rho V g$." },
          { label: "Step 2: Numbers", text: "$B = 1000 \\times 0.020 \\times 9.8 = 196 \\, \\mathrm{N}$." },
          { label: "Step 3: Meaning", text: "The scale reads $196 \\, \\mathrm{N}$ lighter than in air." },
        ],
        result: "$B = 196 \\, \\mathrm{N}$ upward."
      },
    ],
    keyTakeaways: [
      "Viscosity is governed by $\\rho = \\frac{m}{V}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $p = p_0 + \\rho g h$",
    ],
    quiz: [
      {
        q: "Bernoulli says faster flow means:",
        options: ["lower pressure", "same pressure", "no pressure", "higher pressure"],
        answer: 0,
        explanation: "Energy conservation trades $v^2$ against $p$ at fixed height."
      },
      {
        q: "Gauge pressure at depth $h$ is:",
        options: ["$gh/\\rho$", "zero", "$\\rho gh$", "$\\rho/h$"],
        answer: 2,
        explanation: "$p = p_0 + \\rho gh$ grows linearly with depth."
      },
      {
        q: "Buoyant force equals:",
        options: ["atmospheric pressure", "weight of displaced fluid", "weight of object always", "zero"],
        answer: 1,
        explanation: "$B = \\rho Vg$ is the missing weight of fluid."
      },
    ],
  },
  {
    sectionId: "coletta-ch11-s7",
    readingTime: 7,
    intro: "Fluids at rest press equally in all directions while flowing fluids trade pressure for speed. Buoyancy, surface tension, viscosity, and Bernoulli structure the whole story. A Closer Look boxes flag the step where beginners most often slip. This section treats Poiseuille's Law at exam depth.",
    objectives: [
      "State and apply the defining relation of Poiseuille's Law with correct SI units",
      "Solve a quantitative Poiseuille's Law problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Poiseuille's Law reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Poiseuille's Law",
        kind: "definition",
        statement: "**Poiseuille's Law is governed by $\\rho = \\frac{m}{V}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $p = p_0 + \\rho g h$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $B = \\rho V g$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\rho = \\frac{m}{V}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $p + \\frac{1}{2}\\rho v^2 + \\rho g h = \\mathrm{const}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Hydrostatics $p = p_0 + \\rho gh$ and Bernoulli trade of $p$ and $v$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="velocity versus time graph with constant slope"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="50" y1="20" x2="50" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="170" x2="370" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="170" x2="330" y2="50" stroke="currentColor" stroke-width="2.5"/><line x1="190" y1="170" x2="190" y2="110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="50" y1="110" x2="190" y2="110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><text x="20" y="100" font-size="12" fill="currentColor">v</text><text x="200" y="188" font-size="12" fill="currentColor">t</text><text x="230" y="90" font-size="12" fill="currentColor">slope = a, area = displacement</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Hydrostatic pressure",
        problem: "Find gauge pressure at depth $h = 8.0 \\, \\mathrm{m}$ in water.",
        steps: [
          { label: "Step 1: Formula", text: "$p = \\rho g h$ with $\\rho = 1000 \\, \\mathrm{kg/m^3}$." },
          { label: "Step 2: Substitute", text: "$p = 1000 \\times 9.8 \\times 8.0 = 78400 \\, \\mathrm{Pa}$." },
          { label: "Step 3: Atmospheres", text: "That is $0.77 \\, \\mathrm{atm}$ gauge." },
        ],
        result: "$p = 78400 \\, \\mathrm{Pa}$ gauge ($0.77 \\, \\mathrm{atm}$)."
      },
      {
        title: "Buoyant force on a block",
        problem: "A $0.020 \\, \\mathrm{m^3}$ block submerges fully in water. Find buoyancy.",
        steps: [
          { label: "Step 1: Archimedes", text: "$B = \\rho V g$." },
          { label: "Step 2: Numbers", text: "$B = 1000 \\times 0.020 \\times 9.8 = 196 \\, \\mathrm{N}$." },
          { label: "Step 3: Meaning", text: "The scale reads $196 \\, \\mathrm{N}$ lighter than in air." },
        ],
        result: "$B = 196 \\, \\mathrm{N}$ upward."
      },
    ],
    keyTakeaways: [
      "Poiseuille's Law is governed by $\\rho = \\frac{m}{V}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $p = p_0 + \\rho g h$",
    ],
    quiz: [
      {
        q: "Gauge pressure at depth $h$ is:",
        options: ["$gh/\\rho$", "zero", "$\\rho gh$", "$\\rho/h$"],
        answer: 2,
        explanation: "$p = p_0 + \\rho gh$ grows linearly with depth."
      },
      {
        q: "Buoyant force equals:",
        options: ["atmospheric pressure", "weight of displaced fluid", "weight of object always", "zero"],
        answer: 1,
        explanation: "$B = \\rho Vg$ is the missing weight of fluid."
      },
      {
        q: "Bernoulli says faster flow means:",
        options: ["higher pressure", "lower pressure", "same pressure", "no pressure"],
        answer: 1,
        explanation: "Energy conservation trades $v^2$ against $p$ at fixed height."
      },
    ],
  },
]

import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 14
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh14Content: SectionContent[] = [
  {
    sectionId: "coletta-ch14-s1",
    readingTime: 4,
    intro: "Thermodynamics tracks heat and work through state variables and p-V diagrams. Engines and refrigerators expose the second law and the Carnot limit on efficiency. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Thermodynamic Systems at exam depth.",
    objectives: [
      "State and apply the defining relation of Thermodynamic Systems with correct SI units",
      "Solve a quantitative Thermodynamic Systems problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Thermodynamic Systems reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Thermodynamic Systems",
        kind: "definition",
        statement: "**Thermodynamic Systems is governed by $W = \\int p\\,dV$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\Delta U = Q - W$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $e = \\frac{W}{Q_h}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $W = \\int p\\,dV$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $e_{Carnot} = 1 - \\frac{T_c}{T_h}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Pressure-volume loop with work $W = \\int p\\,dV$ as enclosed area",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="block floating with weight and buoyant force"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><rect x="80" y="90" width="240" height="70" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><rect x="170" y="60" width="60" height="60" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><line x1="200" y1="120" x2="200" y2="160" stroke="currentColor" stroke-width="2"/><polygon points="200,160 196,150 204,150" fill="currentColor"/><line x1="200" y1="120" x2="200" y2="80" stroke="currentColor" stroke-width="2"/><polygon points="200,80 196,90 204,90" fill="currentColor"/><text x="250" y="80" font-size="12" fill="currentColor">B = rho V g</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Carnot limit",
        problem: "An engine works between $T_h = 600 \\, \\mathrm{K}$ and $T_c = 300 \\, \\mathrm{K}$. Find maximum efficiency.",
        steps: [
          { label: "Step 1: Carnot", text: "$e_{max} = 1 - T_c/T_h$." },
          { label: "Step 2: Ratio", text: "$T_c/T_h = 300/600 = 0.500$, so $e = 0.500 = 50.0\\%$." },
          { label: "Step 3: Meaning", text: "No engine between these reservoirs can exceed this." },
        ],
        result: "$e_{max} = 50.0\\%$."
      },
      {
        title: "First-law bookkeeping",
        problem: "A gas absorbs $Q = 800 \\, \\mathrm{J}$ and expands doing $W = 300 \\, \\mathrm{J}$. Find $\\Delta U$.",
        steps: [
          { label: "Step 1: Sign convention", text: "Coletta uses $\\Delta U = Q - W$ with $W$ work by the system." },
          { label: "Step 2: Subtract", text: "$\\Delta U = 800 - 300 = 500 \\, \\mathrm{J}$." },
          { label: "Step 3: Isotherm check", text: "Isothermal ideal gas would need $\\Delta U = 0$ so $Q = W$." },
        ],
        result: "$\\Delta U = 500 \\, \\mathrm{J}$ stored internally."
      },
    ],
    keyTakeaways: [
      "Thermodynamic Systems is governed by $W = \\int p\\,dV$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\Delta U = Q - W$",
    ],
    quiz: [
      {
        q: "The first law $\\Delta U = Q - W$ states:",
        options: ["energy conservation with heat", "entropy always drops", "engines are perfect", "heat is a fluid"],
        answer: 0,
        explanation: "Internal energy banks heat in minus work out."
      },
      {
        q: "Carnot efficiency depends on:",
        options: ["reservoir temperatures only", "engine size", "fuel type", "working fluid"],
        answer: 0,
        explanation: "$e = 1 - T_c/T_h$ caps every engine between the pair."
      },
      {
        q: "A refrigerator moves heat:",
        options: ["never", "without work", "hot to cold freely", "cold to hot with work input"],
        answer: 3,
        explanation: "Clausius: work must be paid to pump heat uphill."
      },
    ],
  },
  {
    sectionId: "coletta-ch14-s2",
    readingTime: 5,
    intro: "Thermodynamics tracks heat and work through state variables and p-V diagrams. Engines and refrigerators expose the second law and the Carnot limit on efficiency. Worked examples carry real numbers you can verify with a calculator. This section treats First Law of Thermodynamics at exam depth.",
    objectives: [
      "State and apply the defining relation of First Law of Thermodynamics with correct SI units",
      "Solve a quantitative First Law of Thermodynamics problem by the Coletta strategy, checking dimensions and limits",
      "Explain the First Law of Thermodynamics reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $e = \\frac{W}{Q_h}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $W = \\int p\\,dV$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $e_{Carnot} = 1 - \\frac{T_c}{T_h}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $e_{Carnot} = 1 - \\frac{T_c}{T_h}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of First Law of Thermodynamics",
        kind: "definition",
        statement: "**First Law of Thermodynamics is governed by $W = \\int p\\,dV$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Carnot limit",
        problem: "An engine works between $T_h = 600 \\, \\mathrm{K}$ and $T_c = 290 \\, \\mathrm{K}$. Find maximum efficiency.",
        steps: [
          { label: "Step 1: Carnot", text: "$e_{max} = 1 - T_c/T_h$." },
          { label: "Step 2: Ratio", text: "$T_c/T_h = 290/600 = 0.483$, so $e = 0.517 = 51.7\\%$." },
          { label: "Step 3: Meaning", text: "No engine between these reservoirs can exceed this." },
        ],
        result: "$e_{max} = 51.7\\%$."
      },
      {
        title: "First-law bookkeeping",
        problem: "A gas absorbs $Q = 800 \\, \\mathrm{J}$ and expands doing $W = 300 \\, \\mathrm{J}$. Find $\\Delta U$.",
        steps: [
          { label: "Step 1: Sign convention", text: "Coletta uses $\\Delta U = Q - W$ with $W$ work by the system." },
          { label: "Step 2: Subtract", text: "$\\Delta U = 800 - 300 = 500 \\, \\mathrm{J}$." },
          { label: "Step 3: Isotherm check", text: "Isothermal ideal gas would need $\\Delta U = 0$ so $Q = W$." },
        ],
        result: "$\\Delta U = 500 \\, \\mathrm{J}$ stored internally."
      },
    ],
    keyTakeaways: [
      "First Law of Thermodynamics is governed by $W = \\int p\\,dV$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\Delta U = Q - W$",
    ],
    quiz: [
      {
        q: "Carnot efficiency depends on:",
        options: ["reservoir temperatures only", "engine size", "fuel type", "working fluid"],
        answer: 0,
        explanation: "$e = 1 - T_c/T_h$ caps every engine between the pair."
      },
      {
        q: "A refrigerator moves heat:",
        options: ["never", "without work", "hot to cold freely", "cold to hot with work input"],
        answer: 3,
        explanation: "Clausius: work must be paid to pump heat uphill."
      },
      {
        q: "The first law $\\Delta U = Q - W$ states:",
        options: ["heat is a fluid", "energy conservation with heat", "entropy always drops", "engines are perfect"],
        answer: 1,
        explanation: "Internal energy banks heat in minus work out."
      },
    ],
  },
  {
    sectionId: "coletta-ch14-s3",
    readingTime: 6,
    intro: "Thermodynamics tracks heat and work through state variables and p-V diagrams. Engines and refrigerators expose the second law and the Carnot limit on efficiency. A Closer Look boxes flag the step where beginners most often slip. This section treats Heat Engines and Refrigerators at exam depth.",
    objectives: [
      "State and apply the defining relation of Heat Engines and Refrigerators with correct SI units",
      "Solve a quantitative Heat Engines and Refrigerators problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Heat Engines and Refrigerators reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $e_{Carnot} = 1 - \\frac{T_c}{T_h}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $e_{Carnot} = 1 - \\frac{T_c}{T_h}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Heat Engines and Refrigerators",
        kind: "definition",
        statement: "**Heat Engines and Refrigerators is governed by $W = \\int p\\,dV$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\Delta U = Q - W$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $e = \\frac{W}{Q_h}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Pressure-volume loop with work $W = \\int p\\,dV$ as enclosed area",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="vector resolved into x and y components"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="60" y1="160" x2="340" y2="160" stroke="currentColor" stroke-width="1.2"/><polygon points="340,160 330,156 330,164" fill="currentColor"/><line x1="60" y1="160" x2="60" y2="30" stroke="currentColor" stroke-width="1.2"/><polygon points="60,30 56,40 64,40" fill="currentColor"/><line x1="60" y1="160" x2="280" y2="60" stroke="currentColor" stroke-width="2.5"/><polygon points="280,60 268,62 272,72" fill="currentColor"/><line x1="60" y1="160" x2="280" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="280" y1="160" x2="280" y2="60" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="160" y="178" font-size="13" fill="currentColor">Ax = A cos theta</text><text x="292" y="115" font-size="13" fill="currentColor">Ay</text><text x="120" y="120" font-size="13" fill="currentColor">A</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Carnot limit",
        problem: "An engine works between $T_h = 600 \\, \\mathrm{K}$ and $T_c = 280 \\, \\mathrm{K}$. Find maximum efficiency.",
        steps: [
          { label: "Step 1: Carnot", text: "$e_{max} = 1 - T_c/T_h$." },
          { label: "Step 2: Ratio", text: "$T_c/T_h = 280/600 = 0.467$, so $e = 0.533 = 53.3\\%$." },
          { label: "Step 3: Meaning", text: "No engine between these reservoirs can exceed this." },
        ],
        result: "$e_{max} = 53.3\\%$."
      },
      {
        title: "First-law bookkeeping",
        problem: "A gas absorbs $Q = 800 \\, \\mathrm{J}$ and expands doing $W = 300 \\, \\mathrm{J}$. Find $\\Delta U$.",
        steps: [
          { label: "Step 1: Sign convention", text: "Coletta uses $\\Delta U = Q - W$ with $W$ work by the system." },
          { label: "Step 2: Subtract", text: "$\\Delta U = 800 - 300 = 500 \\, \\mathrm{J}$." },
          { label: "Step 3: Isotherm check", text: "Isothermal ideal gas would need $\\Delta U = 0$ so $Q = W$." },
        ],
        result: "$\\Delta U = 500 \\, \\mathrm{J}$ stored internally."
      },
    ],
    keyTakeaways: [
      "Heat Engines and Refrigerators is governed by $W = \\int p\\,dV$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\Delta U = Q - W$",
    ],
    quiz: [
      {
        q: "A refrigerator moves heat:",
        options: ["never", "without work", "hot to cold freely", "cold to hot with work input"],
        answer: 3,
        explanation: "Clausius: work must be paid to pump heat uphill."
      },
      {
        q: "The first law $\\Delta U = Q - W$ states:",
        options: ["heat is a fluid", "energy conservation with heat", "entropy always drops", "engines are perfect"],
        answer: 1,
        explanation: "Internal energy banks heat in minus work out."
      },
      {
        q: "Carnot efficiency depends on:",
        options: ["working fluid", "reservoir temperatures only", "engine size", "fuel type"],
        answer: 1,
        explanation: "$e = 1 - T_c/T_h$ caps every engine between the pair."
      },
    ],
  },
  {
    sectionId: "coletta-ch14-s4",
    readingTime: 7,
    intro: "Thermodynamics tracks heat and work through state variables and p-V diagrams. Engines and refrigerators expose the second law and the Carnot limit on efficiency. End-of-section objectives tell you what to reproduce closed-book. This section treats Second Law of Thermodynamics at exam depth.",
    objectives: [
      "State and apply the defining relation of Second Law of Thermodynamics with correct SI units",
      "Solve a quantitative Second Law of Thermodynamics problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Second Law of Thermodynamics reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Second Law of Thermodynamics",
        kind: "definition",
        statement: "**Second Law of Thermodynamics is governed by $W = \\int p\\,dV$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\Delta U = Q - W$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $e = \\frac{W}{Q_h}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $W = \\int p\\,dV$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $e_{Carnot} = 1 - \\frac{T_c}{T_h}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    examples: [
      {
        title: "Carnot limit",
        problem: "An engine works between $T_h = 600 \\, \\mathrm{K}$ and $T_c = 270 \\, \\mathrm{K}$. Find maximum efficiency.",
        steps: [
          { label: "Step 1: Carnot", text: "$e_{max} = 1 - T_c/T_h$." },
          { label: "Step 2: Ratio", text: "$T_c/T_h = 270/600 = 0.450$, so $e = 0.550 = 55.0\\%$." },
          { label: "Step 3: Meaning", text: "No engine between these reservoirs can exceed this." },
        ],
        result: "$e_{max} = 55.0\\%$."
      },
      {
        title: "First-law bookkeeping",
        problem: "A gas absorbs $Q = 800 \\, \\mathrm{J}$ and expands doing $W = 300 \\, \\mathrm{J}$. Find $\\Delta U$.",
        steps: [
          { label: "Step 1: Sign convention", text: "Coletta uses $\\Delta U = Q - W$ with $W$ work by the system." },
          { label: "Step 2: Subtract", text: "$\\Delta U = 800 - 300 = 500 \\, \\mathrm{J}$." },
          { label: "Step 3: Isotherm check", text: "Isothermal ideal gas would need $\\Delta U = 0$ so $Q = W$." },
        ],
        result: "$\\Delta U = 500 \\, \\mathrm{J}$ stored internally."
      },
    ],
    keyTakeaways: [
      "Second Law of Thermodynamics is governed by $W = \\int p\\,dV$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\Delta U = Q - W$",
    ],
    quiz: [
      {
        q: "The first law $\\Delta U = Q - W$ states:",
        options: ["heat is a fluid", "energy conservation with heat", "entropy always drops", "engines are perfect"],
        answer: 1,
        explanation: "Internal energy banks heat in minus work out."
      },
      {
        q: "Carnot efficiency depends on:",
        options: ["working fluid", "reservoir temperatures only", "engine size", "fuel type"],
        answer: 1,
        explanation: "$e = 1 - T_c/T_h$ caps every engine between the pair."
      },
      {
        q: "A refrigerator moves heat:",
        options: ["cold to hot with work input", "never", "without work", "hot to cold freely"],
        answer: 0,
        explanation: "Clausius: work must be paid to pump heat uphill."
      },
    ],
  },
  {
    sectionId: "coletta-ch14-s5",
    readingTime: 8,
    intro: "Thermodynamics tracks heat and work through state variables and p-V diagrams. Engines and refrigerators expose the second law and the Carnot limit on efficiency. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Human Metabolism at exam depth.",
    objectives: [
      "State and apply the defining relation of Human Metabolism with correct SI units",
      "Solve a quantitative Human Metabolism problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Human Metabolism reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $e = \\frac{W}{Q_h}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $W = \\int p\\,dV$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $e_{Carnot} = 1 - \\frac{T_c}{T_h}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $e_{Carnot} = 1 - \\frac{T_c}{T_h}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Human Metabolism",
        kind: "definition",
        statement: "**Human Metabolism is governed by $W = \\int p\\,dV$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    figures: [
      {
        caption: "Pressure-volume loop with work $W = \\int p\\,dV$ as enclosed area",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="projectile parabola with launch vector and range"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="30" y1="170" x2="370" y2="170" stroke="currentColor" stroke-width="1.5"/><path d="M 50 165 Q 190 20 340 165" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="50" y1="165" x2="120" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="120,120 108,120 112,130" fill="currentColor"/><circle cx="190" cy="93" r="5" fill="currentColor"/><circle cx="270" cy="118" r="5" fill="currentColor" fill-opacity="0.4"/><text x="60" y="60" font-size="12" fill="currentColor">v0 at angle theta</text><text x="180" y="185" font-size="12" fill="currentColor">range R</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Carnot limit",
        problem: "An engine works between $T_h = 600 \\, \\mathrm{K}$ and $T_c = 260 \\, \\mathrm{K}$. Find maximum efficiency.",
        steps: [
          { label: "Step 1: Carnot", text: "$e_{max} = 1 - T_c/T_h$." },
          { label: "Step 2: Ratio", text: "$T_c/T_h = 260/600 = 0.433$, so $e = 0.567 = 56.7\\%$." },
          { label: "Step 3: Meaning", text: "No engine between these reservoirs can exceed this." },
        ],
        result: "$e_{max} = 56.7\\%$."
      },
      {
        title: "First-law bookkeeping",
        problem: "A gas absorbs $Q = 800 \\, \\mathrm{J}$ and expands doing $W = 300 \\, \\mathrm{J}$. Find $\\Delta U$.",
        steps: [
          { label: "Step 1: Sign convention", text: "Coletta uses $\\Delta U = Q - W$ with $W$ work by the system." },
          { label: "Step 2: Subtract", text: "$\\Delta U = 800 - 300 = 500 \\, \\mathrm{J}$." },
          { label: "Step 3: Isotherm check", text: "Isothermal ideal gas would need $\\Delta U = 0$ so $Q = W$." },
        ],
        result: "$\\Delta U = 500 \\, \\mathrm{J}$ stored internally."
      },
    ],
    keyTakeaways: [
      "Human Metabolism is governed by $W = \\int p\\,dV$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\Delta U = Q - W$",
    ],
    quiz: [
      {
        q: "Carnot efficiency depends on:",
        options: ["working fluid", "reservoir temperatures only", "engine size", "fuel type"],
        answer: 1,
        explanation: "$e = 1 - T_c/T_h$ caps every engine between the pair."
      },
      {
        q: "A refrigerator moves heat:",
        options: ["cold to hot with work input", "never", "without work", "hot to cold freely"],
        answer: 0,
        explanation: "Clausius: work must be paid to pump heat uphill."
      },
      {
        q: "The first law $\\Delta U = Q - W$ states:",
        options: ["engines are perfect", "heat is a fluid", "energy conservation with heat", "entropy always drops"],
        answer: 2,
        explanation: "Internal energy banks heat in minus work out."
      },
    ],
  },
]

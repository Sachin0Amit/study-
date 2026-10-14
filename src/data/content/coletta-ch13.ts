import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 13
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh13Content: SectionContent[] = [
  {
    sectionId: "coletta-ch13-s1",
    readingTime: 7,
    intro: "Heat is energy in transit driven by temperature difference, not a substance contained in bodies. Calorimetry, radiation, convection, and conduction quantify how it moves. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Definition of Heat at exam depth.",
    objectives: [
      "State and apply the defining relation of Definition of Heat with correct SI units",
      "Solve a quantitative Definition of Heat problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Definition of Heat reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Definition of Heat",
        kind: "definition",
        statement: "**Definition of Heat is governed by $Q = mc\\Delta T$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $Q = mL$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $P = \\epsilon\\sigma A T^4$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $Q = mc\\Delta T$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $P = \\frac{kA\\Delta T}{L}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Heat flow $Q = mc\\Delta T$ and radiation $P = \\epsilon\\sigma AT^4$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="sine wave of simple harmonic motion"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="40" y1="100" x2="360" y2="100" stroke="currentColor" stroke-width="1.2"/><path d="M 40 100 Q 80 30 120 100 T 200 100 T 280 100 T 360 100" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="40" y1="20" x2="40" y2="180" stroke="currentColor" stroke-width="1.2"/><text x="200" y="170" font-size="12" text-anchor="middle" fill="currentColor">x = A cos(omega t + phi)</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Warming water by calorimetry",
        problem: "Heat $m = 0.50 \\, \\mathrm{kg}$ of water by $\\Delta T = 20 \\, \\mathrm{K}$. Find $Q$.",
        steps: [
          { label: "Step 1: Specific heat", text: "$Q = mc\\Delta T$ with $c = 4186 \\, \\mathrm{J/(kg\\,K)}$." },
          { label: "Step 2: Multiply", text: "$Q = 0.50 \\times 4186 \\times 20 = 41860 \\, \\mathrm{J}$." },
          { label: "Step 3: Food units", text: "That is $10.00 \\, \\mathrm{kcal}$." },
        ],
        result: "$Q = 41860 \\, \\mathrm{J}$ ($10.00 \\, \\mathrm{kcal}$)."
      },
      {
        title: "Radiated power of a hot plate",
        problem: "A black plate $A = 0.10 \\, \\mathrm{m^2}$ at $T = 500 \\, \\mathrm{K}$ radiates with $\\epsilon = 0.9$. Find $P$.",
        steps: [
          { label: "Step 1: Stefan-Boltzmann", text: "$P = \\epsilon\\sigma A T^4$, $\\sigma = 5.67 \\times 10^{-8}$." },
          { label: "Step 2: Fourth power", text: "$T^4 = 6.25 \\times 10^{10}$, so $P = 0.9 \\times 5.67 \\times 10^{-8} \\times 0.10 \\times 6.25 \\times 10^{10} = 31.9 \\, \\mathrm{W}$." },
          { label: "Step 3: Net caution", text: "Net exchange subtracts surroundings $T_0^4$; this is emission alone." },
        ],
        result: "$P \\approx 32 \\, \\mathrm{W}$ emitted."
      },
    ],
    keyTakeaways: [
      "Definition of Heat is governed by $Q = mc\\Delta T$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $Q = mL$",
    ],
    quiz: [
      {
        q: "Heat flows spontaneously from:",
        options: ["cold to hot", "hot to cold", "solid to gas only", "never"],
        answer: 1,
        explanation: "Second-law direction is down the temperature gradient."
      },
      {
        q: "Calorimetry $Q = mc\\Delta T$ fails during:",
        options: ["phase change", "cooling", "mixing", "warming"],
        answer: 0,
        explanation: "At a phase change $Q = mL$ at fixed $T$."
      },
      {
        q: "Radiated power scales as:",
        options: ["$T^4$", "$1/T$", "$T$", "$T^2$"],
        answer: 0,
        explanation: "Stefan-Boltzmann $P = \\epsilon\\sigma AT^4$ is brutally steep."
      },
    ],
  },
  {
    sectionId: "coletta-ch13-s2",
    readingTime: 8,
    intro: "Heat is energy in transit driven by temperature difference, not a substance contained in bodies. Calorimetry, radiation, convection, and conduction quantify how it moves. Worked examples carry real numbers you can verify with a calculator. This section treats Calorimetry at exam depth.",
    objectives: [
      "State and apply the defining relation of Calorimetry with correct SI units",
      "Solve a quantitative Calorimetry problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Calorimetry reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $P = \\epsilon\\sigma A T^4$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $Q = mc\\Delta T$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $P = \\frac{kA\\Delta T}{L}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $P = \\frac{kA\\Delta T}{L}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Calorimetry",
        kind: "definition",
        statement: "**Calorimetry is governed by $Q = mc\\Delta T$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Warming water by calorimetry",
        problem: "Heat $m = 0.60 \\, \\mathrm{kg}$ of water by $\\Delta T = 25 \\, \\mathrm{K}$. Find $Q$.",
        steps: [
          { label: "Step 1: Specific heat", text: "$Q = mc\\Delta T$ with $c = 4186 \\, \\mathrm{J/(kg\\,K)}$." },
          { label: "Step 2: Multiply", text: "$Q = 0.60 \\times 4186 \\times 25 = 62790 \\, \\mathrm{J}$." },
          { label: "Step 3: Food units", text: "That is $15.00 \\, \\mathrm{kcal}$." },
        ],
        result: "$Q = 62790 \\, \\mathrm{J}$ ($15.00 \\, \\mathrm{kcal}$)."
      },
      {
        title: "Radiated power of a hot plate",
        problem: "A black plate $A = 0.10 \\, \\mathrm{m^2}$ at $T = 500 \\, \\mathrm{K}$ radiates with $\\epsilon = 0.9$. Find $P$.",
        steps: [
          { label: "Step 1: Stefan-Boltzmann", text: "$P = \\epsilon\\sigma A T^4$, $\\sigma = 5.67 \\times 10^{-8}$." },
          { label: "Step 2: Fourth power", text: "$T^4 = 6.25 \\times 10^{10}$, so $P = 0.9 \\times 5.67 \\times 10^{-8} \\times 0.10 \\times 6.25 \\times 10^{10} = 31.9 \\, \\mathrm{W}$." },
          { label: "Step 3: Net caution", text: "Net exchange subtracts surroundings $T_0^4$; this is emission alone." },
        ],
        result: "$P \\approx 32 \\, \\mathrm{W}$ emitted."
      },
    ],
    keyTakeaways: [
      "Calorimetry is governed by $Q = mc\\Delta T$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $Q = mL$",
    ],
    quiz: [
      {
        q: "Calorimetry $Q = mc\\Delta T$ fails during:",
        options: ["phase change", "cooling", "mixing", "warming"],
        answer: 0,
        explanation: "At a phase change $Q = mL$ at fixed $T$."
      },
      {
        q: "Radiated power scales as:",
        options: ["$T^4$", "$1/T$", "$T$", "$T^2$"],
        answer: 0,
        explanation: "Stefan-Boltzmann $P = \\epsilon\\sigma AT^4$ is brutally steep."
      },
      {
        q: "Heat flows spontaneously from:",
        options: ["never", "cold to hot", "hot to cold", "solid to gas only"],
        answer: 2,
        explanation: "Second-law direction is down the temperature gradient."
      },
    ],
  },
  {
    sectionId: "coletta-ch13-s3",
    readingTime: 9,
    intro: "Heat is energy in transit driven by temperature difference, not a substance contained in bodies. Calorimetry, radiation, convection, and conduction quantify how it moves. A Closer Look boxes flag the step where beginners most often slip. This section treats Radiation at exam depth.",
    objectives: [
      "State and apply the defining relation of Radiation with correct SI units",
      "Solve a quantitative Radiation problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Radiation reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $P = \\frac{kA\\Delta T}{L}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $P = \\frac{kA\\Delta T}{L}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Radiation",
        kind: "definition",
        statement: "**Radiation is governed by $Q = mc\\Delta T$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $Q = mL$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $P = \\epsilon\\sigma A T^4$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Heat flow $Q = mc\\Delta T$ and radiation $P = \\epsilon\\sigma AT^4$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="ruler showing SI length scale"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="40" y1="140" x2="360" y2="140" stroke="currentColor" stroke-width="2"/><line x1="40" y1="140" x2="40" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="56" y1="140" x2="56" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="72" y1="140" x2="72" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="88" y1="140" x2="88" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="104" y1="140" x2="104" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="120" y1="140" x2="120" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="136" y1="140" x2="136" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="152" y1="140" x2="152" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="168" y1="140" x2="168" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="184" y1="140" x2="184" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="200" y1="140" x2="200" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="216" y1="140" x2="216" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="232" y1="140" x2="232" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="248" y1="140" x2="248" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="264" y1="140" x2="264" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="280" y1="140" x2="280" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="296" y1="140" x2="296" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="312" y1="140" x2="312" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="328" y1="140" x2="328" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="344" y1="140" x2="344" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="360" y1="140" x2="360" y2="122" stroke="currentColor" stroke-width="1.5"/><text x="200" y="170" font-size="13" text-anchor="middle" fill="currentColor">meter stick — SI length in meters</text><text x="200" y="60" font-size="13" text-anchor="middle" fill="currentColor">1 m = 100 cm = 1000 mm</text><line x1="40" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><polygon points="200,100 190,96 190,104" fill="currentColor"/></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Warming water by calorimetry",
        problem: "Heat $m = 0.70 \\, \\mathrm{kg}$ of water by $\\Delta T = 30 \\, \\mathrm{K}$. Find $Q$.",
        steps: [
          { label: "Step 1: Specific heat", text: "$Q = mc\\Delta T$ with $c = 4186 \\, \\mathrm{J/(kg\\,K)}$." },
          { label: "Step 2: Multiply", text: "$Q = 0.70 \\times 4186 \\times 30 = 87906 \\, \\mathrm{J}$." },
          { label: "Step 3: Food units", text: "That is $21.00 \\, \\mathrm{kcal}$." },
        ],
        result: "$Q = 87906 \\, \\mathrm{J}$ ($21.00 \\, \\mathrm{kcal}$)."
      },
      {
        title: "Radiated power of a hot plate",
        problem: "A black plate $A = 0.10 \\, \\mathrm{m^2}$ at $T = 500 \\, \\mathrm{K}$ radiates with $\\epsilon = 0.9$. Find $P$.",
        steps: [
          { label: "Step 1: Stefan-Boltzmann", text: "$P = \\epsilon\\sigma A T^4$, $\\sigma = 5.67 \\times 10^{-8}$." },
          { label: "Step 2: Fourth power", text: "$T^4 = 6.25 \\times 10^{10}$, so $P = 0.9 \\times 5.67 \\times 10^{-8} \\times 0.10 \\times 6.25 \\times 10^{10} = 31.9 \\, \\mathrm{W}$." },
          { label: "Step 3: Net caution", text: "Net exchange subtracts surroundings $T_0^4$; this is emission alone." },
        ],
        result: "$P \\approx 32 \\, \\mathrm{W}$ emitted."
      },
    ],
    keyTakeaways: [
      "Radiation is governed by $Q = mc\\Delta T$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $Q = mL$",
    ],
    quiz: [
      {
        q: "Radiated power scales as:",
        options: ["$T^4$", "$1/T$", "$T$", "$T^2$"],
        answer: 0,
        explanation: "Stefan-Boltzmann $P = \\epsilon\\sigma AT^4$ is brutally steep."
      },
      {
        q: "Heat flows spontaneously from:",
        options: ["never", "cold to hot", "hot to cold", "solid to gas only"],
        answer: 2,
        explanation: "Second-law direction is down the temperature gradient."
      },
      {
        q: "Calorimetry $Q = mc\\Delta T$ fails during:",
        options: ["warming", "phase change", "cooling", "mixing"],
        answer: 1,
        explanation: "At a phase change $Q = mL$ at fixed $T$."
      },
    ],
  },
  {
    sectionId: "coletta-ch13-s4",
    readingTime: 4,
    intro: "Heat is energy in transit driven by temperature difference, not a substance contained in bodies. Calorimetry, radiation, convection, and conduction quantify how it moves. End-of-section objectives tell you what to reproduce closed-book. This section treats Convection at exam depth.",
    objectives: [
      "State and apply the defining relation of Convection with correct SI units",
      "Solve a quantitative Convection problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Convection reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Convection",
        kind: "definition",
        statement: "**Convection is governed by $Q = mc\\Delta T$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $Q = mL$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $P = \\epsilon\\sigma A T^4$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $Q = mc\\Delta T$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $P = \\frac{kA\\Delta T}{L}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    examples: [
      {
        title: "Warming water by calorimetry",
        problem: "Heat $m = 0.80 \\, \\mathrm{kg}$ of water by $\\Delta T = 35 \\, \\mathrm{K}$. Find $Q$.",
        steps: [
          { label: "Step 1: Specific heat", text: "$Q = mc\\Delta T$ with $c = 4186 \\, \\mathrm{J/(kg\\,K)}$." },
          { label: "Step 2: Multiply", text: "$Q = 0.80 \\times 4186 \\times 35 = 117208 \\, \\mathrm{J}$." },
          { label: "Step 3: Food units", text: "That is $28.00 \\, \\mathrm{kcal}$." },
        ],
        result: "$Q = 117208 \\, \\mathrm{J}$ ($28.00 \\, \\mathrm{kcal}$)."
      },
      {
        title: "Radiated power of a hot plate",
        problem: "A black plate $A = 0.10 \\, \\mathrm{m^2}$ at $T = 500 \\, \\mathrm{K}$ radiates with $\\epsilon = 0.9$. Find $P$.",
        steps: [
          { label: "Step 1: Stefan-Boltzmann", text: "$P = \\epsilon\\sigma A T^4$, $\\sigma = 5.67 \\times 10^{-8}$." },
          { label: "Step 2: Fourth power", text: "$T^4 = 6.25 \\times 10^{10}$, so $P = 0.9 \\times 5.67 \\times 10^{-8} \\times 0.10 \\times 6.25 \\times 10^{10} = 31.9 \\, \\mathrm{W}$." },
          { label: "Step 3: Net caution", text: "Net exchange subtracts surroundings $T_0^4$; this is emission alone." },
        ],
        result: "$P \\approx 32 \\, \\mathrm{W}$ emitted."
      },
    ],
    keyTakeaways: [
      "Convection is governed by $Q = mc\\Delta T$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $Q = mL$",
    ],
    quiz: [
      {
        q: "Heat flows spontaneously from:",
        options: ["never", "cold to hot", "hot to cold", "solid to gas only"],
        answer: 2,
        explanation: "Second-law direction is down the temperature gradient."
      },
      {
        q: "Calorimetry $Q = mc\\Delta T$ fails during:",
        options: ["warming", "phase change", "cooling", "mixing"],
        answer: 1,
        explanation: "At a phase change $Q = mL$ at fixed $T$."
      },
      {
        q: "Radiated power scales as:",
        options: ["$T^2$", "$T^4$", "$1/T$", "$T$"],
        answer: 1,
        explanation: "Stefan-Boltzmann $P = \\epsilon\\sigma AT^4$ is brutally steep."
      },
    ],
  },
  {
    sectionId: "coletta-ch13-s5",
    readingTime: 5,
    intro: "Heat is energy in transit driven by temperature difference, not a substance contained in bodies. Calorimetry, radiation, convection, and conduction quantify how it moves. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Conduction at exam depth.",
    objectives: [
      "State and apply the defining relation of Conduction with correct SI units",
      "Solve a quantitative Conduction problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Conduction reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $P = \\epsilon\\sigma A T^4$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $Q = mc\\Delta T$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $P = \\frac{kA\\Delta T}{L}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $P = \\frac{kA\\Delta T}{L}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Conduction",
        kind: "definition",
        statement: "**Conduction is governed by $Q = mc\\Delta T$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    figures: [
      {
        caption: "Heat flow $Q = mc\\Delta T$ and radiation $P = \\epsilon\\sigma AT^4$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="velocity versus time graph with constant slope"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="50" y1="20" x2="50" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="170" x2="370" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="170" x2="330" y2="50" stroke="currentColor" stroke-width="2.5"/><line x1="190" y1="170" x2="190" y2="110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="50" y1="110" x2="190" y2="110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><text x="20" y="100" font-size="12" fill="currentColor">v</text><text x="200" y="188" font-size="12" fill="currentColor">t</text><text x="230" y="90" font-size="12" fill="currentColor">slope = a, area = displacement</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Warming water by calorimetry",
        problem: "Heat $m = 0.90 \\, \\mathrm{kg}$ of water by $\\Delta T = 40 \\, \\mathrm{K}$. Find $Q$.",
        steps: [
          { label: "Step 1: Specific heat", text: "$Q = mc\\Delta T$ with $c = 4186 \\, \\mathrm{J/(kg\\,K)}$." },
          { label: "Step 2: Multiply", text: "$Q = 0.90 \\times 4186 \\times 40 = 150696 \\, \\mathrm{J}$." },
          { label: "Step 3: Food units", text: "That is $36.00 \\, \\mathrm{kcal}$." },
        ],
        result: "$Q = 150696 \\, \\mathrm{J}$ ($36.00 \\, \\mathrm{kcal}$)."
      },
      {
        title: "Radiated power of a hot plate",
        problem: "A black plate $A = 0.10 \\, \\mathrm{m^2}$ at $T = 500 \\, \\mathrm{K}$ radiates with $\\epsilon = 0.9$. Find $P$.",
        steps: [
          { label: "Step 1: Stefan-Boltzmann", text: "$P = \\epsilon\\sigma A T^4$, $\\sigma = 5.67 \\times 10^{-8}$." },
          { label: "Step 2: Fourth power", text: "$T^4 = 6.25 \\times 10^{10}$, so $P = 0.9 \\times 5.67 \\times 10^{-8} \\times 0.10 \\times 6.25 \\times 10^{10} = 31.9 \\, \\mathrm{W}$." },
          { label: "Step 3: Net caution", text: "Net exchange subtracts surroundings $T_0^4$; this is emission alone." },
        ],
        result: "$P \\approx 32 \\, \\mathrm{W}$ emitted."
      },
    ],
    keyTakeaways: [
      "Conduction is governed by $Q = mc\\Delta T$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $Q = mL$",
    ],
    quiz: [
      {
        q: "Calorimetry $Q = mc\\Delta T$ fails during:",
        options: ["warming", "phase change", "cooling", "mixing"],
        answer: 1,
        explanation: "At a phase change $Q = mL$ at fixed $T$."
      },
      {
        q: "Radiated power scales as:",
        options: ["$T^2$", "$T^4$", "$1/T$", "$T$"],
        answer: 1,
        explanation: "Stefan-Boltzmann $P = \\epsilon\\sigma AT^4$ is brutally steep."
      },
      {
        q: "Heat flows spontaneously from:",
        options: ["solid to gas only", "never", "cold to hot", "hot to cold"],
        answer: 3,
        explanation: "Second-law direction is down the temperature gradient."
      },
    ],
  },
]

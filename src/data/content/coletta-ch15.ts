import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 15
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh15Content: SectionContent[] = [
  {
    sectionId: "coletta-ch15-s1",
    readingTime: 7,
    intro: "A restoring force proportional to displacement generates sinusoidal motion with a fixed period. Springs, pendulums, and the projection of circular motion all sing the same tune. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Simple Harmonic Motion at exam depth.",
    objectives: [
      "State and apply the defining relation of Simple Harmonic Motion with correct SI units",
      "Solve a quantitative Simple Harmonic Motion problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Simple Harmonic Motion reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Simple Harmonic Motion",
        kind: "definition",
        statement: "**Simple Harmonic Motion is governed by $x = A\\cos(\\omega t + \\phi)$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\omega = \\sqrt{\\frac{k}{m}}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $T = 2\\pi\\sqrt{\\frac{L}{g}}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $x = A\\cos(\\omega t + \\phi)$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Oscillation $x = A\\cos(\\omega t + \\phi)$ with period $T = 2\\pi/\\omega$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="ruler showing SI length scale"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="40" y1="140" x2="360" y2="140" stroke="currentColor" stroke-width="2"/><line x1="40" y1="140" x2="40" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="56" y1="140" x2="56" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="72" y1="140" x2="72" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="88" y1="140" x2="88" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="104" y1="140" x2="104" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="120" y1="140" x2="120" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="136" y1="140" x2="136" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="152" y1="140" x2="152" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="168" y1="140" x2="168" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="184" y1="140" x2="184" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="200" y1="140" x2="200" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="216" y1="140" x2="216" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="232" y1="140" x2="232" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="248" y1="140" x2="248" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="264" y1="140" x2="264" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="280" y1="140" x2="280" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="296" y1="140" x2="296" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="312" y1="140" x2="312" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="328" y1="140" x2="328" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="344" y1="140" x2="344" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="360" y1="140" x2="360" y2="122" stroke="currentColor" stroke-width="1.5"/><text x="200" y="170" font-size="13" text-anchor="middle" fill="currentColor">meter stick — SI length in meters</text><text x="200" y="60" font-size="13" text-anchor="middle" fill="currentColor">1 m = 100 cm = 1000 mm</text><line x1="40" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><polygon points="200,100 190,96 190,104" fill="currentColor"/></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Mass-spring period",
        problem: "A mass $m = 0.50 \\, \\mathrm{kg}$ on $k = 20.0 \\, \\mathrm{N/m}$ oscillates. Find $T$.",
        steps: [
          { label: "Step 1: Angular frequency", text: "$\\omega = \\sqrt{k/m} = \\sqrt{20.0/0.50} = 6.325 \\, \\mathrm{rad/s}$." },
          { label: "Step 2: Period", text: "$T = 2\\pi/\\omega = 0.993 \\, \\mathrm{s}$." },
          { label: "Step 3: Amplitude independence", text: "Period ignores amplitude for ideal SHM." },
        ],
        result: "$T = 0.993 \\, \\mathrm{s}$."
      },
      {
        title: "Pendulum clock",
        problem: "A simple pendulum has $L = 1.00 \\, \\mathrm{m}$. Find its small-angle period.",
        steps: [
          { label: "Step 1: Formula", text: "$T = 2\\pi\\sqrt{L/g}$." },
          { label: "Step 2: Substitute", text: "$T = 2\\pi\\sqrt{1.00/9.8} = 2\\pi \\times 0.3194 = 2.007 \\, \\mathrm{s}$." },
          { label: "Step 3: Use", text: "Seconds pendulums need $L \\approx 0.994 \\, \\mathrm{m}$." },
        ],
        result: "$T = 2.007 \\, \\mathrm{s}$."
      },
    ],
    keyTakeaways: [
      "Simple Harmonic Motion is governed by $x = A\\cos(\\omega t + \\phi)$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\omega = \\sqrt{\\frac{k}{m}}$",
    ],
    quiz: [
      {
        q: "SHM satisfies $a$ proportional to:",
        options: ["$-x$", "$x^2$", "$v$", "$t$"],
        answer: 0,
        explanation: "$a = -(k/m)x$ always points home."
      },
      {
        q: "Mass-spring angular frequency is:",
        options: ["$\\sqrt{k/m}$", "$k/m$", "$2\\pi k$", "$\\sqrt{m/k}$"],
        answer: 0,
        explanation: "$\\omega = \\sqrt{k/m}$ so stiff springs sing high."
      },
      {
        q: "Resonance occurs when drive frequency:",
        options: ["is infinite", "is random", "is zero", "matches natural frequency"],
        answer: 3,
        explanation: "Small pushes at $f_0$ accumulate into large amplitude."
      },
    ],
  },
  {
    sectionId: "coletta-ch15-s2",
    readingTime: 8,
    intro: "A restoring force proportional to displacement generates sinusoidal motion with a fixed period. Springs, pendulums, and the projection of circular motion all sing the same tune. Worked examples carry real numbers you can verify with a calculator. This section treats Relationship between SHM and Circular Motion at exam depth.",
    objectives: [
      "State and apply the defining relation of Relationship between SHM and Circular Motion with correct SI units",
      "Solve a quantitative Relationship between SHM and Circular Motion problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Relationship between SHM and Circular Motion reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $T = 2\\pi\\sqrt{\\frac{L}{g}}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $x = A\\cos(\\omega t + \\phi)$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Relationship between SHM and Circular Motion",
        kind: "definition",
        statement: "**Relationship between SHM and Circular Motion is governed by $x = A\\cos(\\omega t + \\phi)$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Mass-spring period",
        problem: "A mass $m = 0.60 \\, \\mathrm{kg}$ on $k = 25.0 \\, \\mathrm{N/m}$ oscillates. Find $T$.",
        steps: [
          { label: "Step 1: Angular frequency", text: "$\\omega = \\sqrt{k/m} = \\sqrt{25.0/0.60} = 6.455 \\, \\mathrm{rad/s}$." },
          { label: "Step 2: Period", text: "$T = 2\\pi/\\omega = 0.973 \\, \\mathrm{s}$." },
          { label: "Step 3: Amplitude independence", text: "Period ignores amplitude for ideal SHM." },
        ],
        result: "$T = 0.973 \\, \\mathrm{s}$."
      },
      {
        title: "Pendulum clock",
        problem: "A simple pendulum has $L = 1.00 \\, \\mathrm{m}$. Find its small-angle period.",
        steps: [
          { label: "Step 1: Formula", text: "$T = 2\\pi\\sqrt{L/g}$." },
          { label: "Step 2: Substitute", text: "$T = 2\\pi\\sqrt{1.00/9.8} = 2\\pi \\times 0.3194 = 2.007 \\, \\mathrm{s}$." },
          { label: "Step 3: Use", text: "Seconds pendulums need $L \\approx 0.994 \\, \\mathrm{m}$." },
        ],
        result: "$T = 2.007 \\, \\mathrm{s}$."
      },
    ],
    keyTakeaways: [
      "Relationship between SHM and Circular Motion is governed by $x = A\\cos(\\omega t + \\phi)$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\omega = \\sqrt{\\frac{k}{m}}$",
    ],
    quiz: [
      {
        q: "Mass-spring angular frequency is:",
        options: ["$\\sqrt{k/m}$", "$k/m$", "$2\\pi k$", "$\\sqrt{m/k}$"],
        answer: 0,
        explanation: "$\\omega = \\sqrt{k/m}$ so stiff springs sing high."
      },
      {
        q: "Resonance occurs when drive frequency:",
        options: ["is infinite", "is random", "is zero", "matches natural frequency"],
        answer: 3,
        explanation: "Small pushes at $f_0$ accumulate into large amplitude."
      },
      {
        q: "SHM satisfies $a$ proportional to:",
        options: ["$t$", "$-x$", "$x^2$", "$v$"],
        answer: 1,
        explanation: "$a = -(k/m)x$ always points home."
      },
    ],
  },
  {
    sectionId: "coletta-ch15-s3",
    readingTime: 9,
    intro: "A restoring force proportional to displacement generates sinusoidal motion with a fixed period. Springs, pendulums, and the projection of circular motion all sing the same tune. A Closer Look boxes flag the step where beginners most often slip. This section treats Mass and Spring at exam depth.",
    objectives: [
      "State and apply the defining relation of Mass and Spring with correct SI units",
      "Solve a quantitative Mass and Spring problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Mass and Spring reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Mass and Spring",
        kind: "definition",
        statement: "**Mass and Spring is governed by $x = A\\cos(\\omega t + \\phi)$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\omega = \\sqrt{\\frac{k}{m}}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $T = 2\\pi\\sqrt{\\frac{L}{g}}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Oscillation $x = A\\cos(\\omega t + \\phi)$ with period $T = 2\\pi/\\omega$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="velocity versus time graph with constant slope"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="50" y1="20" x2="50" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="170" x2="370" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="170" x2="330" y2="50" stroke="currentColor" stroke-width="2.5"/><line x1="190" y1="170" x2="190" y2="110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="50" y1="110" x2="190" y2="110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><text x="20" y="100" font-size="12" fill="currentColor">v</text><text x="200" y="188" font-size="12" fill="currentColor">t</text><text x="230" y="90" font-size="12" fill="currentColor">slope = a, area = displacement</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Mass-spring period",
        problem: "A mass $m = 0.70 \\, \\mathrm{kg}$ on $k = 30.0 \\, \\mathrm{N/m}$ oscillates. Find $T$.",
        steps: [
          { label: "Step 1: Angular frequency", text: "$\\omega = \\sqrt{k/m} = \\sqrt{30.0/0.70} = 6.547 \\, \\mathrm{rad/s}$." },
          { label: "Step 2: Period", text: "$T = 2\\pi/\\omega = 0.960 \\, \\mathrm{s}$." },
          { label: "Step 3: Amplitude independence", text: "Period ignores amplitude for ideal SHM." },
        ],
        result: "$T = 0.960 \\, \\mathrm{s}$."
      },
      {
        title: "Pendulum clock",
        problem: "A simple pendulum has $L = 1.00 \\, \\mathrm{m}$. Find its small-angle period.",
        steps: [
          { label: "Step 1: Formula", text: "$T = 2\\pi\\sqrt{L/g}$." },
          { label: "Step 2: Substitute", text: "$T = 2\\pi\\sqrt{1.00/9.8} = 2\\pi \\times 0.3194 = 2.007 \\, \\mathrm{s}$." },
          { label: "Step 3: Use", text: "Seconds pendulums need $L \\approx 0.994 \\, \\mathrm{m}$." },
        ],
        result: "$T = 2.007 \\, \\mathrm{s}$."
      },
    ],
    keyTakeaways: [
      "Mass and Spring is governed by $x = A\\cos(\\omega t + \\phi)$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\omega = \\sqrt{\\frac{k}{m}}$",
    ],
    quiz: [
      {
        q: "Resonance occurs when drive frequency:",
        options: ["is infinite", "is random", "is zero", "matches natural frequency"],
        answer: 3,
        explanation: "Small pushes at $f_0$ accumulate into large amplitude."
      },
      {
        q: "SHM satisfies $a$ proportional to:",
        options: ["$t$", "$-x$", "$x^2$", "$v$"],
        answer: 1,
        explanation: "$a = -(k/m)x$ always points home."
      },
      {
        q: "Mass-spring angular frequency is:",
        options: ["$\\sqrt{m/k}$", "$\\sqrt{k/m}$", "$k/m$", "$2\\pi k$"],
        answer: 1,
        explanation: "$\\omega = \\sqrt{k/m}$ so stiff springs sing high."
      },
    ],
  },
  {
    sectionId: "coletta-ch15-s4",
    readingTime: 4,
    intro: "A restoring force proportional to displacement generates sinusoidal motion with a fixed period. Springs, pendulums, and the projection of circular motion all sing the same tune. End-of-section objectives tell you what to reproduce closed-book. This section treats The Pendulum at exam depth.",
    objectives: [
      "State and apply the defining relation of The Pendulum with correct SI units",
      "Solve a quantitative The Pendulum problem by the Coletta strategy, checking dimensions and limits",
      "Explain the The Pendulum reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of The Pendulum",
        kind: "definition",
        statement: "**The Pendulum is governed by $x = A\\cos(\\omega t + \\phi)$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\omega = \\sqrt{\\frac{k}{m}}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $T = 2\\pi\\sqrt{\\frac{L}{g}}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $x = A\\cos(\\omega t + \\phi)$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    examples: [
      {
        title: "Mass-spring period",
        problem: "A mass $m = 0.80 \\, \\mathrm{kg}$ on $k = 35.0 \\, \\mathrm{N/m}$ oscillates. Find $T$.",
        steps: [
          { label: "Step 1: Angular frequency", text: "$\\omega = \\sqrt{k/m} = \\sqrt{35.0/0.80} = 6.614 \\, \\mathrm{rad/s}$." },
          { label: "Step 2: Period", text: "$T = 2\\pi/\\omega = 0.950 \\, \\mathrm{s}$." },
          { label: "Step 3: Amplitude independence", text: "Period ignores amplitude for ideal SHM." },
        ],
        result: "$T = 0.950 \\, \\mathrm{s}$."
      },
      {
        title: "Pendulum clock",
        problem: "A simple pendulum has $L = 1.00 \\, \\mathrm{m}$. Find its small-angle period.",
        steps: [
          { label: "Step 1: Formula", text: "$T = 2\\pi\\sqrt{L/g}$." },
          { label: "Step 2: Substitute", text: "$T = 2\\pi\\sqrt{1.00/9.8} = 2\\pi \\times 0.3194 = 2.007 \\, \\mathrm{s}$." },
          { label: "Step 3: Use", text: "Seconds pendulums need $L \\approx 0.994 \\, \\mathrm{m}$." },
        ],
        result: "$T = 2.007 \\, \\mathrm{s}$."
      },
    ],
    keyTakeaways: [
      "The Pendulum is governed by $x = A\\cos(\\omega t + \\phi)$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\omega = \\sqrt{\\frac{k}{m}}$",
    ],
    quiz: [
      {
        q: "SHM satisfies $a$ proportional to:",
        options: ["$t$", "$-x$", "$x^2$", "$v$"],
        answer: 1,
        explanation: "$a = -(k/m)x$ always points home."
      },
      {
        q: "Mass-spring angular frequency is:",
        options: ["$\\sqrt{m/k}$", "$\\sqrt{k/m}$", "$k/m$", "$2\\pi k$"],
        answer: 1,
        explanation: "$\\omega = \\sqrt{k/m}$ so stiff springs sing high."
      },
      {
        q: "Resonance occurs when drive frequency:",
        options: ["matches natural frequency", "is infinite", "is random", "is zero"],
        answer: 0,
        explanation: "Small pushes at $f_0$ accumulate into large amplitude."
      },
    ],
  },
  {
    sectionId: "coletta-ch15-s5",
    readingTime: 5,
    intro: "A restoring force proportional to displacement generates sinusoidal motion with a fixed period. Springs, pendulums, and the projection of circular motion all sing the same tune. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Damped and Forced Oscillations at exam depth.",
    objectives: [
      "State and apply the defining relation of Damped and Forced Oscillations with correct SI units",
      "Solve a quantitative Damped and Forced Oscillations problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Damped and Forced Oscillations reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $T = 2\\pi\\sqrt{\\frac{L}{g}}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $x = A\\cos(\\omega t + \\phi)$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Damped and Forced Oscillations",
        kind: "definition",
        statement: "**Damped and Forced Oscillations is governed by $x = A\\cos(\\omega t + \\phi)$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    figures: [
      {
        caption: "Oscillation $x = A\\cos(\\omega t + \\phi)$ with period $T = 2\\pi/\\omega$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="free body diagram of a block with forces"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><rect x="170" y="80" width="60" height="50" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><line x1="200" y1="80" x2="200" y2="30" stroke="currentColor" stroke-width="2"/><polygon points="200,30 196,40 204,40" fill="currentColor"/><text x="208" y="55" font-size="12" fill="currentColor">N</text><line x1="200" y1="130" x2="200" y2="175" stroke="currentColor" stroke-width="2"/><polygon points="200,175 196,165 204,165" fill="currentColor"/><text x="208" y="160" font-size="12" fill="currentColor">mg</text><line x1="170" y1="105" x2="110" y2="105" stroke="currentColor" stroke-width="2"/><polygon points="110,105 120,101 120,109" fill="currentColor"/><text x="120" y="95" font-size="12" fill="currentColor">f</text><line x1="230" y1="105" x2="290" y2="105" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><polygon points="290,105 280,101 280,109" fill="currentColor"/><text x="255" y="95" font-size="12" fill="currentColor">F</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Mass-spring period",
        problem: "A mass $m = 0.90 \\, \\mathrm{kg}$ on $k = 40.0 \\, \\mathrm{N/m}$ oscillates. Find $T$.",
        steps: [
          { label: "Step 1: Angular frequency", text: "$\\omega = \\sqrt{k/m} = \\sqrt{40.0/0.90} = 6.667 \\, \\mathrm{rad/s}$." },
          { label: "Step 2: Period", text: "$T = 2\\pi/\\omega = 0.942 \\, \\mathrm{s}$." },
          { label: "Step 3: Amplitude independence", text: "Period ignores amplitude for ideal SHM." },
        ],
        result: "$T = 0.942 \\, \\mathrm{s}$."
      },
      {
        title: "Pendulum clock",
        problem: "A simple pendulum has $L = 1.00 \\, \\mathrm{m}$. Find its small-angle period.",
        steps: [
          { label: "Step 1: Formula", text: "$T = 2\\pi\\sqrt{L/g}$." },
          { label: "Step 2: Substitute", text: "$T = 2\\pi\\sqrt{1.00/9.8} = 2\\pi \\times 0.3194 = 2.007 \\, \\mathrm{s}$." },
          { label: "Step 3: Use", text: "Seconds pendulums need $L \\approx 0.994 \\, \\mathrm{m}$." },
        ],
        result: "$T = 2.007 \\, \\mathrm{s}$."
      },
    ],
    keyTakeaways: [
      "Damped and Forced Oscillations is governed by $x = A\\cos(\\omega t + \\phi)$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\omega = \\sqrt{\\frac{k}{m}}$",
    ],
    quiz: [
      {
        q: "Mass-spring angular frequency is:",
        options: ["$\\sqrt{m/k}$", "$\\sqrt{k/m}$", "$k/m$", "$2\\pi k$"],
        answer: 1,
        explanation: "$\\omega = \\sqrt{k/m}$ so stiff springs sing high."
      },
      {
        q: "Resonance occurs when drive frequency:",
        options: ["matches natural frequency", "is infinite", "is random", "is zero"],
        answer: 0,
        explanation: "Small pushes at $f_0$ accumulate into large amplitude."
      },
      {
        q: "SHM satisfies $a$ proportional to:",
        options: ["$v$", "$t$", "$-x$", "$x^2$"],
        answer: 2,
        explanation: "$a = -(k/m)x$ always points home."
      },
    ],
  },
]

import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 6
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh6Content: SectionContent[] = [
  {
    sectionId: "coletta-ch6-s1",
    readingTime: 4,
    intro: "Gravity is universal, falling as the inverse square of separation from every mass to every other. The chapter weighs planets, explains weight inside and above Earth, and tours noninertial frames. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Universal Gravitation at exam depth.",
    objectives: [
      "State and apply the defining relation of Universal Gravitation with correct SI units",
      "Solve a quantitative Universal Gravitation problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Universal Gravitation reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Universal Gravitation",
        kind: "definition",
        statement: "**Universal Gravitation is governed by $F = \\frac{GMm}{r^2}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $g = \\frac{GM}{R^2}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $T^2 = \\frac{4\\pi^2}{GM}r^3$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $F = \\frac{GMm}{r^2}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $a_{cor} = 2\\omega v$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Gravitation $F = GMm/r^2$ binding an orbit of radius $r$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="energy bar chart of kinetic plus potential energy"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><rect x="80" y="40" width="50" height="120" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/><text x="105" y="178" font-size="12" text-anchor="middle" fill="currentColor">K</text><rect x="170" y="80" width="50" height="80" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/><text x="195" y="178" font-size="12" text-anchor="middle" fill="currentColor">U</text><rect x="260" y="20" width="50" height="140" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/><text x="285" y="178" font-size="12" text-anchor="middle" fill="currentColor">E</text><line x1="50" y1="160" x2="340" y2="160" stroke="currentColor" stroke-width="1.5"/><text x="200" y="40" font-size="12" text-anchor="middle" fill="currentColor">energy bars: K + U = E</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Weight at altitude",
        problem: "Find $g$ at altitude $h = 200 \\, \\mathrm{km}$ above Earth ($R = 6380 \\, \\mathrm{km}$).",
        steps: [
          { label: "Step 1: Ratio", text: "$g = g_0 R^2/(R+h)^2$ with $R/(R+h) = 0.9696$." },
          { label: "Step 2: Square", text: "Squared ratio $= 0.9401$, so $g = 9.8 \\times 0.9401 = 9.21 \\, \\mathrm{m/s^2}$." },
          { label: "Step 3: Lesson", text: "Even shuttle heights only trim weight by tens of percent." },
        ],
        result: "$g = 9.21 \\, \\mathrm{m/s^2}$ at $200 \\, \\mathrm{km}$."
      },
      {
        title: "Moon orbit check",
        problem: "The Moon orbits at $r = 3.84 \\times 10^8 \\, \\mathrm{m}$ with period $T = 27.3 \\, \\mathrm{days}$. Verify $a_c \\approx 0.0027 \\, \\mathrm{m/s^2}$.",
        steps: [
          { label: "Step 1: Period in seconds", text: "$T = 27.3 \\times 86400 = 2358720 \\, \\mathrm{s}$." },
          { label: "Step 2: Centripetal", text: "$a_c = 4\\pi^2 r/T^2 = 39.478 \\times 3.84 \\times 10^8/5.564 \\times 10^{12} = 0.00272 \\, \\mathrm{m/s^2}$." },
          { label: "Step 3: Compare", text: "Inverse square from $9.8 \\, \\mathrm{m/s^2}$ at $R$ predicts $9.8/3600 = 0.00272 \\, \\mathrm{m/s^2}$." },
        ],
        result: "Agreement confirms universal gravitation."
      },
    ],
    keyTakeaways: [
      "Universal Gravitation is governed by $F = \\frac{GMm}{r^2}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $g = \\frac{GM}{R^2}$",
    ],
    quiz: [
      {
        q: "$G$ in $F = GMm/r^2$ is:",
        options: ["$9.8$", "$6.67 \\times 10^{-11}$ SI", "$1.6 \\times 10^{-19}$", "$3.0 \\times 10^8$"],
        answer: 1,
        explanation: "Cavendish style experiments give $G = 6.67 \\times 10^{-11} \\, \\mathrm{N\\,m^2/kg^2}$."
      },
      {
        q: "Inside a uniform Earth, $g$ varies as:",
        options: ["$r$", "$r^2$", "constant", "$1/r^2$"],
        answer: 0,
        explanation: "Only interior mass attracts, giving linear $g \\propto r$."
      },
      {
        q: "Coriolis deflection on Earth is caused by:",
        options: ["tides", "relativity", "magnetism", "rotation of the frame"],
        answer: 3,
        explanation: "The rotating frame adds $2\\omega v$ sideways."
      },
    ],
  },
  {
    sectionId: "coletta-ch6-s2",
    readingTime: 5,
    intro: "Gravity is universal, falling as the inverse square of separation from every mass to every other. The chapter weighs planets, explains weight inside and above Earth, and tours noninertial frames. Worked examples carry real numbers you can verify with a calculator. This section treats Gravitational Attraction of the Earth at exam depth.",
    objectives: [
      "State and apply the defining relation of Gravitational Attraction of the Earth with correct SI units",
      "Solve a quantitative Gravitational Attraction of the Earth problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Gravitational Attraction of the Earth reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $T^2 = \\frac{4\\pi^2}{GM}r^3$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $F = \\frac{GMm}{r^2}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $a_{cor} = 2\\omega v$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $a_{cor} = 2\\omega v$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Gravitational Attraction of the Earth",
        kind: "definition",
        statement: "**Gravitational Attraction of the Earth is governed by $F = \\frac{GMm}{r^2}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Weight at altitude",
        problem: "Find $g$ at altitude $h = 400 \\, \\mathrm{km}$ above Earth ($R = 6380 \\, \\mathrm{km}$).",
        steps: [
          { label: "Step 1: Ratio", text: "$g = g_0 R^2/(R+h)^2$ with $R/(R+h) = 0.9410$." },
          { label: "Step 2: Square", text: "Squared ratio $= 0.8855$, so $g = 9.8 \\times 0.8855 = 8.68 \\, \\mathrm{m/s^2}$." },
          { label: "Step 3: Lesson", text: "Even shuttle heights only trim weight by tens of percent." },
        ],
        result: "$g = 8.68 \\, \\mathrm{m/s^2}$ at $400 \\, \\mathrm{km}$."
      },
      {
        title: "Moon orbit check",
        problem: "The Moon orbits at $r = 3.84 \\times 10^8 \\, \\mathrm{m}$ with period $T = 27.3 \\, \\mathrm{days}$. Verify $a_c \\approx 0.0027 \\, \\mathrm{m/s^2}$.",
        steps: [
          { label: "Step 1: Period in seconds", text: "$T = 27.3 \\times 86400 = 2358720 \\, \\mathrm{s}$." },
          { label: "Step 2: Centripetal", text: "$a_c = 4\\pi^2 r/T^2 = 39.478 \\times 3.84 \\times 10^8/5.564 \\times 10^{12} = 0.00272 \\, \\mathrm{m/s^2}$." },
          { label: "Step 3: Compare", text: "Inverse square from $9.8 \\, \\mathrm{m/s^2}$ at $R$ predicts $9.8/3600 = 0.00272 \\, \\mathrm{m/s^2}$." },
        ],
        result: "Agreement confirms universal gravitation."
      },
    ],
    keyTakeaways: [
      "Gravitational Attraction of the Earth is governed by $F = \\frac{GMm}{r^2}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $g = \\frac{GM}{R^2}$",
    ],
    quiz: [
      {
        q: "Inside a uniform Earth, $g$ varies as:",
        options: ["$r$", "$r^2$", "constant", "$1/r^2$"],
        answer: 0,
        explanation: "Only interior mass attracts, giving linear $g \\propto r$."
      },
      {
        q: "Coriolis deflection on Earth is caused by:",
        options: ["tides", "relativity", "magnetism", "rotation of the frame"],
        answer: 3,
        explanation: "The rotating frame adds $2\\omega v$ sideways."
      },
      {
        q: "$G$ in $F = GMm/r^2$ is:",
        options: ["$3.0 \\times 10^8$", "$9.8$", "$6.67 \\times 10^{-11}$ SI", "$1.6 \\times 10^{-19}$"],
        answer: 2,
        explanation: "Cavendish style experiments give $G = 6.67 \\times 10^{-11} \\, \\mathrm{N\\,m^2/kg^2}$."
      },
    ],
  },
  {
    sectionId: "coletta-ch6-s3",
    readingTime: 6,
    intro: "Gravity is universal, falling as the inverse square of separation from every mass to every other. The chapter weighs planets, explains weight inside and above Earth, and tours noninertial frames. A Closer Look boxes flag the step where beginners most often slip. This section treats Noninertial Reference Frames at exam depth.",
    objectives: [
      "State and apply the defining relation of Noninertial Reference Frames with correct SI units",
      "Solve a quantitative Noninertial Reference Frames problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Noninertial Reference Frames reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $a_{cor} = 2\\omega v$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $a_{cor} = 2\\omega v$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Noninertial Reference Frames",
        kind: "definition",
        statement: "**Noninertial Reference Frames is governed by $F = \\frac{GMm}{r^2}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $g = \\frac{GM}{R^2}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $T^2 = \\frac{4\\pi^2}{GM}r^3$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Gravitation $F = GMm/r^2$ binding an orbit of radius $r$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="disk with lever arm and tangential force"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><circle cx="200" cy="100" r="55" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="200" cy="100" r="6" fill="currentColor"/><line x1="200" y1="100" x2="255" y2="100" stroke="currentColor" stroke-width="2.5"/><line x1="255" y1="100" x2="255" y2="55" stroke="currentColor" stroke-width="2"/><polygon points="255,55 251,65 259,65" fill="currentColor"/><text x="225" y="118" font-size="12" fill="currentColor">r</text><text x="265" y="80" font-size="12" fill="currentColor">F</text><text x="120" y="170" font-size="12" fill="currentColor">torque = r F sin phi</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Weight at altitude",
        problem: "Find $g$ at altitude $h = 600 \\, \\mathrm{km}$ above Earth ($R = 6380 \\, \\mathrm{km}$).",
        steps: [
          { label: "Step 1: Ratio", text: "$g = g_0 R^2/(R+h)^2$ with $R/(R+h) = 0.9140$." },
          { label: "Step 2: Square", text: "Squared ratio $= 0.8355$, so $g = 9.8 \\times 0.8355 = 8.19 \\, \\mathrm{m/s^2}$." },
          { label: "Step 3: Lesson", text: "Even shuttle heights only trim weight by tens of percent." },
        ],
        result: "$g = 8.19 \\, \\mathrm{m/s^2}$ at $600 \\, \\mathrm{km}$."
      },
      {
        title: "Moon orbit check",
        problem: "The Moon orbits at $r = 3.84 \\times 10^8 \\, \\mathrm{m}$ with period $T = 27.3 \\, \\mathrm{days}$. Verify $a_c \\approx 0.0027 \\, \\mathrm{m/s^2}$.",
        steps: [
          { label: "Step 1: Period in seconds", text: "$T = 27.3 \\times 86400 = 2358720 \\, \\mathrm{s}$." },
          { label: "Step 2: Centripetal", text: "$a_c = 4\\pi^2 r/T^2 = 39.478 \\times 3.84 \\times 10^8/5.564 \\times 10^{12} = 0.00272 \\, \\mathrm{m/s^2}$." },
          { label: "Step 3: Compare", text: "Inverse square from $9.8 \\, \\mathrm{m/s^2}$ at $R$ predicts $9.8/3600 = 0.00272 \\, \\mathrm{m/s^2}$." },
        ],
        result: "Agreement confirms universal gravitation."
      },
    ],
    keyTakeaways: [
      "Noninertial Reference Frames is governed by $F = \\frac{GMm}{r^2}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $g = \\frac{GM}{R^2}$",
    ],
    quiz: [
      {
        q: "Coriolis deflection on Earth is caused by:",
        options: ["tides", "relativity", "magnetism", "rotation of the frame"],
        answer: 3,
        explanation: "The rotating frame adds $2\\omega v$ sideways."
      },
      {
        q: "$G$ in $F = GMm/r^2$ is:",
        options: ["$3.0 \\times 10^8$", "$9.8$", "$6.67 \\times 10^{-11}$ SI", "$1.6 \\times 10^{-19}$"],
        answer: 2,
        explanation: "Cavendish style experiments give $G = 6.67 \\times 10^{-11} \\, \\mathrm{N\\,m^2/kg^2}$."
      },
      {
        q: "Inside a uniform Earth, $g$ varies as:",
        options: ["$1/r^2$", "$r$", "$r^2$", "constant"],
        answer: 1,
        explanation: "Only interior mass attracts, giving linear $g \\propto r$."
      },
    ],
  },
]

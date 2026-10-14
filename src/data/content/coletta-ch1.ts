import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 1
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh1Content: SectionContent[] = [
  {
    sectionId: "coletta-ch1-s1",
    readingTime: 7,
    intro: "Kinematics begins by idealizing a body as a particle that traces a trajectory through space. Speed, displacement, and velocity are then given sharp meanings before vectors are introduced. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Trajectory of a Particle at exam depth.",
    objectives: [
      "State and apply the defining relation of Trajectory of a Particle with correct SI units",
      "Solve a quantitative Trajectory of a Particle problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Trajectory of a Particle reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Trajectory of a Particle",
        kind: "definition",
        statement: "**Trajectory of a Particle is governed by $\\Delta x = x - x_0$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $v_{av} = \\frac{\\Delta x}{\\Delta t}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\vec{A} + \\vec{B}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\Delta x = x - x_0$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $A_x = A \\cos\\theta$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Vector $\\vec{A}$ with components $A_x = A\\cos\\theta$ and $A_y = A\\sin\\theta$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="vector resolved into x and y components"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="60" y1="160" x2="340" y2="160" stroke="currentColor" stroke-width="1.2"/><polygon points="340,160 330,156 330,164" fill="currentColor"/><line x1="60" y1="160" x2="60" y2="30" stroke="currentColor" stroke-width="1.2"/><polygon points="60,30 56,40 64,40" fill="currentColor"/><line x1="60" y1="160" x2="280" y2="60" stroke="currentColor" stroke-width="2.5"/><polygon points="280,60 268,62 272,72" fill="currentColor"/><line x1="60" y1="160" x2="280" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="280" y1="160" x2="280" y2="60" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="160" y="178" font-size="13" fill="currentColor">Ax = A cos theta</text><text x="292" y="115" font-size="13" fill="currentColor">Ay</text><text x="120" y="120" font-size="13" fill="currentColor">A</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Displacement versus distance on Trajectory of a Particle",
        problem: "A student walks $12.0 \\, \\mathrm{m}$ east then $5.0 \\, \\mathrm{m}$ west. Find distance and displacement.",
        steps: [
          { label: "Step 1: Distance", text: "Path length adds: $12.0 + 5.0 = 17.0 \\, \\mathrm{m}$." },
          { label: "Step 2: Displacement", text: "Signed sum with east positive: $12.0 - 5.0 = 7.0 \\, \\mathrm{m}$ east." },
          { label: "Step 3: Lesson", text: "Distance is a scalar; displacement $\\Delta x = x - x_0$ carries sign." },
        ],
        result: "Distance $17.0 \\, \\mathrm{m}$, displacement $7.0 \\, \\mathrm{m}$ east."
      },
      {
        title: "Vector magnitude from components",
        problem: "A displacement has $A_x = 6.0 \\, \\mathrm{m}$, $A_y = 8.0 \\, \\mathrm{m}$. Find magnitude and direction.",
        steps: [
          { label: "Step 1: Pythagoras", text: "$A = \\sqrt{6.0^2 + 8.0^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10.0 \\, \\mathrm{m}$." },
          { label: "Step 2: Direction", text: "$\\theta = \\tan^{-1}(8.0/6.0) = \\tan^{-1}(1.333) = 53.1^\\circ$ above x-axis." },
          { label: "Step 3: Check", text: "The 6-8-10 triangle confirms the arithmetic." },
        ],
        result: "$A = 10.0 \\, \\mathrm{m}$ at $53.1^\\circ$."
      },
    ],
    keyTakeaways: [
      "Trajectory of a Particle is governed by $\\Delta x = x - x_0$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $v_{av} = \\frac{\\Delta x}{\\Delta t}$",
    ],
    quiz: [
      {
        q: "Displacement differs from distance because displacement:",
        options: ["is always larger", "has direction and can cancel", "is measured in different units", "ignores the path entirely like distance"],
        answer: 1,
        explanation: "Displacement is the signed change $x - x_0$ while distance totals path length."
      },
      {
        q: "The magnitude of $A_x = 6$, $A_y = 8$ is:",
        options: ["14", "48", "7", "10"],
        answer: 3,
        explanation: "Pythagoras gives $\\sqrt{36+64} = 10$."
      },
      {
        q: "Average velocity is defined as:",
        options: ["distance over time", "slope of acceleration", "speed times time", "displacement over elapsed time"],
        answer: 3,
        explanation: "$v_{av} = \\Delta x/\\Delta t$ carries sign; speed averages the path."
      },
    ],
  },
  {
    sectionId: "coletta-ch1-s2",
    readingTime: 8,
    intro: "Kinematics begins by idealizing a body as a particle that traces a trajectory through space. Speed, displacement, and velocity are then given sharp meanings before vectors are introduced. Worked examples carry real numbers you can verify with a calculator. This section treats Speed at exam depth.",
    objectives: [
      "State and apply the defining relation of Speed with correct SI units",
      "Solve a quantitative Speed problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Speed reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\vec{A} + \\vec{B}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\Delta x = x - x_0$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $A_x = A \\cos\\theta$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $A_x = A \\cos\\theta$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Speed",
        kind: "definition",
        statement: "**Speed is governed by $\\Delta x = x - x_0$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Displacement versus distance on Speed",
        problem: "A student walks $13.0 \\, \\mathrm{m}$ east then $6.0 \\, \\mathrm{m}$ west. Find distance and displacement.",
        steps: [
          { label: "Step 1: Distance", text: "Path length adds: $13.0 + 6.0 = 19.0 \\, \\mathrm{m}$." },
          { label: "Step 2: Displacement", text: "Signed sum with east positive: $13.0 - 6.0 = 7.0 \\, \\mathrm{m}$ east." },
          { label: "Step 3: Lesson", text: "Distance is a scalar; displacement $\\Delta x = x - x_0$ carries sign." },
        ],
        result: "Distance $19.0 \\, \\mathrm{m}$, displacement $7.0 \\, \\mathrm{m}$ east."
      },
      {
        title: "Vector magnitude from components",
        problem: "A displacement has $A_x = 6.0 \\, \\mathrm{m}$, $A_y = 8.0 \\, \\mathrm{m}$. Find magnitude and direction.",
        steps: [
          { label: "Step 1: Pythagoras", text: "$A = \\sqrt{6.0^2 + 8.0^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10.0 \\, \\mathrm{m}$." },
          { label: "Step 2: Direction", text: "$\\theta = \\tan^{-1}(8.0/6.0) = \\tan^{-1}(1.333) = 53.1^\\circ$ above x-axis." },
          { label: "Step 3: Check", text: "The 6-8-10 triangle confirms the arithmetic." },
        ],
        result: "$A = 10.0 \\, \\mathrm{m}$ at $53.1^\\circ$."
      },
    ],
    keyTakeaways: [
      "Speed is governed by $\\Delta x = x - x_0$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $v_{av} = \\frac{\\Delta x}{\\Delta t}$",
    ],
    quiz: [
      {
        q: "The magnitude of $A_x = 6$, $A_y = 8$ is:",
        options: ["14", "48", "7", "10"],
        answer: 3,
        explanation: "Pythagoras gives $\\sqrt{36+64} = 10$."
      },
      {
        q: "Average velocity is defined as:",
        options: ["distance over time", "slope of acceleration", "speed times time", "displacement over elapsed time"],
        answer: 3,
        explanation: "$v_{av} = \\Delta x/\\Delta t$ carries sign; speed averages the path."
      },
      {
        q: "Displacement differs from distance because displacement:",
        options: ["ignores the path entirely like distance", "is always larger", "has direction and can cancel", "is measured in different units"],
        answer: 2,
        explanation: "Displacement is the signed change $x - x_0$ while distance totals path length."
      },
    ],
  },
  {
    sectionId: "coletta-ch1-s3",
    readingTime: 9,
    intro: "Kinematics begins by idealizing a body as a particle that traces a trajectory through space. Speed, displacement, and velocity are then given sharp meanings before vectors are introduced. A Closer Look boxes flag the step where beginners most often slip. This section treats Displacement at exam depth.",
    objectives: [
      "State and apply the defining relation of Displacement with correct SI units",
      "Solve a quantitative Displacement problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Displacement reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $A_x = A \\cos\\theta$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $A_x = A \\cos\\theta$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Displacement",
        kind: "definition",
        statement: "**Displacement is governed by $\\Delta x = x - x_0$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $v_{av} = \\frac{\\Delta x}{\\Delta t}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\vec{A} + \\vec{B}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Vector $\\vec{A}$ with components $A_x = A\\cos\\theta$ and $A_y = A\\sin\\theta$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="projectile parabola with launch vector and range"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="30" y1="170" x2="370" y2="170" stroke="currentColor" stroke-width="1.5"/><path d="M 50 165 Q 190 20 340 165" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="50" y1="165" x2="120" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="120,120 108,120 112,130" fill="currentColor"/><circle cx="190" cy="93" r="5" fill="currentColor"/><circle cx="270" cy="118" r="5" fill="currentColor" fill-opacity="0.4"/><text x="60" y="60" font-size="12" fill="currentColor">v0 at angle theta</text><text x="180" y="185" font-size="12" fill="currentColor">range R</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Displacement versus distance on Displacement",
        problem: "A student walks $14.0 \\, \\mathrm{m}$ east then $7.0 \\, \\mathrm{m}$ west. Find distance and displacement.",
        steps: [
          { label: "Step 1: Distance", text: "Path length adds: $14.0 + 7.0 = 21.0 \\, \\mathrm{m}$." },
          { label: "Step 2: Displacement", text: "Signed sum with east positive: $14.0 - 7.0 = 7.0 \\, \\mathrm{m}$ east." },
          { label: "Step 3: Lesson", text: "Distance is a scalar; displacement $\\Delta x = x - x_0$ carries sign." },
        ],
        result: "Distance $21.0 \\, \\mathrm{m}$, displacement $7.0 \\, \\mathrm{m}$ east."
      },
      {
        title: "Vector magnitude from components",
        problem: "A displacement has $A_x = 6.0 \\, \\mathrm{m}$, $A_y = 8.0 \\, \\mathrm{m}$. Find magnitude and direction.",
        steps: [
          { label: "Step 1: Pythagoras", text: "$A = \\sqrt{6.0^2 + 8.0^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10.0 \\, \\mathrm{m}$." },
          { label: "Step 2: Direction", text: "$\\theta = \\tan^{-1}(8.0/6.0) = \\tan^{-1}(1.333) = 53.1^\\circ$ above x-axis." },
          { label: "Step 3: Check", text: "The 6-8-10 triangle confirms the arithmetic." },
        ],
        result: "$A = 10.0 \\, \\mathrm{m}$ at $53.1^\\circ$."
      },
    ],
    keyTakeaways: [
      "Displacement is governed by $\\Delta x = x - x_0$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $v_{av} = \\frac{\\Delta x}{\\Delta t}$",
    ],
    quiz: [
      {
        q: "Average velocity is defined as:",
        options: ["distance over time", "slope of acceleration", "speed times time", "displacement over elapsed time"],
        answer: 3,
        explanation: "$v_{av} = \\Delta x/\\Delta t$ carries sign; speed averages the path."
      },
      {
        q: "Displacement differs from distance because displacement:",
        options: ["ignores the path entirely like distance", "is always larger", "has direction and can cancel", "is measured in different units"],
        answer: 2,
        explanation: "Displacement is the signed change $x - x_0$ while distance totals path length."
      },
      {
        q: "The magnitude of $A_x = 6$, $A_y = 8$ is:",
        options: ["10", "14", "48", "7"],
        answer: 0,
        explanation: "Pythagoras gives $\\sqrt{36+64} = 10$."
      },
    ],
  },
  {
    sectionId: "coletta-ch1-s4",
    readingTime: 4,
    intro: "Kinematics begins by idealizing a body as a particle that traces a trajectory through space. Speed, displacement, and velocity are then given sharp meanings before vectors are introduced. End-of-section objectives tell you what to reproduce closed-book. This section treats Vector Algebra at exam depth.",
    objectives: [
      "State and apply the defining relation of Vector Algebra with correct SI units",
      "Solve a quantitative Vector Algebra problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Vector Algebra reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Vector Algebra",
        kind: "definition",
        statement: "**Vector Algebra is governed by $\\Delta x = x - x_0$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $v_{av} = \\frac{\\Delta x}{\\Delta t}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\vec{A} + \\vec{B}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\Delta x = x - x_0$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $A_x = A \\cos\\theta$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    examples: [
      {
        title: "Displacement versus distance on Vector Algebra",
        problem: "A student walks $15.0 \\, \\mathrm{m}$ east then $8.0 \\, \\mathrm{m}$ west. Find distance and displacement.",
        steps: [
          { label: "Step 1: Distance", text: "Path length adds: $15.0 + 8.0 = 23.0 \\, \\mathrm{m}$." },
          { label: "Step 2: Displacement", text: "Signed sum with east positive: $15.0 - 8.0 = 7.0 \\, \\mathrm{m}$ east." },
          { label: "Step 3: Lesson", text: "Distance is a scalar; displacement $\\Delta x = x - x_0$ carries sign." },
        ],
        result: "Distance $23.0 \\, \\mathrm{m}$, displacement $7.0 \\, \\mathrm{m}$ east."
      },
      {
        title: "Vector magnitude from components",
        problem: "A displacement has $A_x = 6.0 \\, \\mathrm{m}$, $A_y = 8.0 \\, \\mathrm{m}$. Find magnitude and direction.",
        steps: [
          { label: "Step 1: Pythagoras", text: "$A = \\sqrt{6.0^2 + 8.0^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10.0 \\, \\mathrm{m}$." },
          { label: "Step 2: Direction", text: "$\\theta = \\tan^{-1}(8.0/6.0) = \\tan^{-1}(1.333) = 53.1^\\circ$ above x-axis." },
          { label: "Step 3: Check", text: "The 6-8-10 triangle confirms the arithmetic." },
        ],
        result: "$A = 10.0 \\, \\mathrm{m}$ at $53.1^\\circ$."
      },
    ],
    keyTakeaways: [
      "Vector Algebra is governed by $\\Delta x = x - x_0$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $v_{av} = \\frac{\\Delta x}{\\Delta t}$",
    ],
    quiz: [
      {
        q: "Displacement differs from distance because displacement:",
        options: ["ignores the path entirely like distance", "is always larger", "has direction and can cancel", "is measured in different units"],
        answer: 2,
        explanation: "Displacement is the signed change $x - x_0$ while distance totals path length."
      },
      {
        q: "The magnitude of $A_x = 6$, $A_y = 8$ is:",
        options: ["10", "14", "48", "7"],
        answer: 0,
        explanation: "Pythagoras gives $\\sqrt{36+64} = 10$."
      },
      {
        q: "Average velocity is defined as:",
        options: ["displacement over elapsed time", "distance over time", "slope of acceleration", "speed times time"],
        answer: 0,
        explanation: "$v_{av} = \\Delta x/\\Delta t$ carries sign; speed averages the path."
      },
    ],
  },
  {
    sectionId: "coletta-ch1-s5",
    readingTime: 5,
    intro: "Kinematics begins by idealizing a body as a particle that traces a trajectory through space. Speed, displacement, and velocity are then given sharp meanings before vectors are introduced. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Components of Vectors at exam depth.",
    objectives: [
      "State and apply the defining relation of Components of Vectors with correct SI units",
      "Solve a quantitative Components of Vectors problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Components of Vectors reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\vec{A} + \\vec{B}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\Delta x = x - x_0$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $A_x = A \\cos\\theta$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $A_x = A \\cos\\theta$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Components of Vectors",
        kind: "definition",
        statement: "**Components of Vectors is governed by $\\Delta x = x - x_0$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    figures: [
      {
        caption: "Vector $\\vec{A}$ with components $A_x = A\\cos\\theta$ and $A_y = A\\sin\\theta$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="planet in elliptical orbit about the sun"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><circle cx="200" cy="100" r="18" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/><ellipse cx="200" cy="100" rx="130" ry="60" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="330" cy="100" r="7" fill="currentColor"/><line x1="200" y1="100" x2="330" y2="100" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><text x="250" y="90" font-size="12" fill="currentColor">r</text><text x="185" y="150" font-size="12" fill="currentColor">F = G M m / r squared</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Displacement versus distance on Components of Vectors",
        problem: "A student walks $16.0 \\, \\mathrm{m}$ east then $9.0 \\, \\mathrm{m}$ west. Find distance and displacement.",
        steps: [
          { label: "Step 1: Distance", text: "Path length adds: $16.0 + 9.0 = 25.0 \\, \\mathrm{m}$." },
          { label: "Step 2: Displacement", text: "Signed sum with east positive: $16.0 - 9.0 = 7.0 \\, \\mathrm{m}$ east." },
          { label: "Step 3: Lesson", text: "Distance is a scalar; displacement $\\Delta x = x - x_0$ carries sign." },
        ],
        result: "Distance $25.0 \\, \\mathrm{m}$, displacement $7.0 \\, \\mathrm{m}$ east."
      },
      {
        title: "Vector magnitude from components",
        problem: "A displacement has $A_x = 6.0 \\, \\mathrm{m}$, $A_y = 8.0 \\, \\mathrm{m}$. Find magnitude and direction.",
        steps: [
          { label: "Step 1: Pythagoras", text: "$A = \\sqrt{6.0^2 + 8.0^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10.0 \\, \\mathrm{m}$." },
          { label: "Step 2: Direction", text: "$\\theta = \\tan^{-1}(8.0/6.0) = \\tan^{-1}(1.333) = 53.1^\\circ$ above x-axis." },
          { label: "Step 3: Check", text: "The 6-8-10 triangle confirms the arithmetic." },
        ],
        result: "$A = 10.0 \\, \\mathrm{m}$ at $53.1^\\circ$."
      },
    ],
    keyTakeaways: [
      "Components of Vectors is governed by $\\Delta x = x - x_0$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $v_{av} = \\frac{\\Delta x}{\\Delta t}$",
    ],
    quiz: [
      {
        q: "The magnitude of $A_x = 6$, $A_y = 8$ is:",
        options: ["10", "14", "48", "7"],
        answer: 0,
        explanation: "Pythagoras gives $\\sqrt{36+64} = 10$."
      },
      {
        q: "Average velocity is defined as:",
        options: ["displacement over elapsed time", "distance over time", "slope of acceleration", "speed times time"],
        answer: 0,
        explanation: "$v_{av} = \\Delta x/\\Delta t$ carries sign; speed averages the path."
      },
      {
        q: "Displacement differs from distance because displacement:",
        options: ["is measured in different units", "ignores the path entirely like distance", "is always larger", "has direction and can cancel"],
        answer: 3,
        explanation: "Displacement is the signed change $x - x_0$ while distance totals path length."
      },
    ],
  },
  {
    sectionId: "coletta-ch1-s6",
    readingTime: 6,
    intro: "Kinematics begins by idealizing a body as a particle that traces a trajectory through space. Speed, displacement, and velocity are then given sharp meanings before vectors are introduced. Worked examples carry real numbers you can verify with a calculator. This section treats Velocity at exam depth.",
    objectives: [
      "State and apply the defining relation of Velocity with correct SI units",
      "Solve a quantitative Velocity problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Velocity reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $A_x = A \\cos\\theta$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $A_x = A \\cos\\theta$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Velocity",
        kind: "definition",
        statement: "**Velocity is governed by $\\Delta x = x - x_0$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $v_{av} = \\frac{\\Delta x}{\\Delta t}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\vec{A} + \\vec{B}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    examples: [
      {
        title: "Displacement versus distance on Velocity",
        problem: "A student walks $17.0 \\, \\mathrm{m}$ east then $10.0 \\, \\mathrm{m}$ west. Find distance and displacement.",
        steps: [
          { label: "Step 1: Distance", text: "Path length adds: $17.0 + 10.0 = 27.0 \\, \\mathrm{m}$." },
          { label: "Step 2: Displacement", text: "Signed sum with east positive: $17.0 - 10.0 = 7.0 \\, \\mathrm{m}$ east." },
          { label: "Step 3: Lesson", text: "Distance is a scalar; displacement $\\Delta x = x - x_0$ carries sign." },
        ],
        result: "Distance $27.0 \\, \\mathrm{m}$, displacement $7.0 \\, \\mathrm{m}$ east."
      },
      {
        title: "Vector magnitude from components",
        problem: "A displacement has $A_x = 6.0 \\, \\mathrm{m}$, $A_y = 8.0 \\, \\mathrm{m}$. Find magnitude and direction.",
        steps: [
          { label: "Step 1: Pythagoras", text: "$A = \\sqrt{6.0^2 + 8.0^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10.0 \\, \\mathrm{m}$." },
          { label: "Step 2: Direction", text: "$\\theta = \\tan^{-1}(8.0/6.0) = \\tan^{-1}(1.333) = 53.1^\\circ$ above x-axis." },
          { label: "Step 3: Check", text: "The 6-8-10 triangle confirms the arithmetic." },
        ],
        result: "$A = 10.0 \\, \\mathrm{m}$ at $53.1^\\circ$."
      },
    ],
    keyTakeaways: [
      "Velocity is governed by $\\Delta x = x - x_0$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $v_{av} = \\frac{\\Delta x}{\\Delta t}$",
    ],
    quiz: [
      {
        q: "Average velocity is defined as:",
        options: ["displacement over elapsed time", "distance over time", "slope of acceleration", "speed times time"],
        answer: 0,
        explanation: "$v_{av} = \\Delta x/\\Delta t$ carries sign; speed averages the path."
      },
      {
        q: "Displacement differs from distance because displacement:",
        options: ["is measured in different units", "ignores the path entirely like distance", "is always larger", "has direction and can cancel"],
        answer: 3,
        explanation: "Displacement is the signed change $x - x_0$ while distance totals path length."
      },
      {
        q: "The magnitude of $A_x = 6$, $A_y = 8$ is:",
        options: ["7", "10", "14", "48"],
        answer: 1,
        explanation: "Pythagoras gives $\\sqrt{36+64} = 10$."
      },
    ],
  },
]

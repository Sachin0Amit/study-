import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 4
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh4Content: SectionContent[] = [
  {
    sectionId: "coletta-ch4-s1",
    readingTime: 4,
    intro: "Dynamics asks what causes motion to change, and Newton answers with force, mass, and three laws. Coletta builds a systematic free-body-diagram method crowned by Problem Solving Strategy boxes. Coletta Problem Solving Strategy boxes turn free-body diagrams into a repeatable algorithm. This section treats Classical Mechanics at exam depth.",
    objectives: [
      "State and apply the defining relation of Classical Mechanics with correct SI units",
      "Solve a quantitative Classical Mechanics problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Classical Mechanics reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Classical Mechanics",
        kind: "definition",
        statement: "**Classical Mechanics is governed by $\\vec{F}_{net} = m\\vec{a}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $F_g = mg$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $F_s = -kx$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\vec{F}_{net} = m\\vec{a}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $F_{AB} = -F_{BA}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Free-body diagram: $\\sum \\vec{F} = m\\vec{a}$ with $N$, $mg$, $f$, $F$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="free body diagram of a block with forces"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><rect x="170" y="80" width="60" height="50" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><line x1="200" y1="80" x2="200" y2="30" stroke="currentColor" stroke-width="2"/><polygon points="200,30 196,40 204,40" fill="currentColor"/><text x="208" y="55" font-size="12" fill="currentColor">N</text><line x1="200" y1="130" x2="200" y2="175" stroke="currentColor" stroke-width="2"/><polygon points="200,175 196,165 204,165" fill="currentColor"/><text x="208" y="160" font-size="12" fill="currentColor">mg</text><line x1="170" y1="105" x2="110" y2="105" stroke="currentColor" stroke-width="2"/><polygon points="110,105 120,101 120,109" fill="currentColor"/><text x="120" y="95" font-size="12" fill="currentColor">f</text><line x1="230" y1="105" x2="290" y2="105" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><polygon points="290,105 280,101 280,109" fill="currentColor"/><text x="255" y="95" font-size="12" fill="currentColor">F</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Second law in numbers",
        problem: "A mass $m = 2.0 \\, \\mathrm{kg}$ accelerates at $a = 3.0 \\, \\mathrm{m/s^2}$. Find the net force.",
        steps: [
          { label: "Step 1: Law", text: "$F_{net} = ma$." },
          { label: "Step 2: Multiply", text: "$F = 2.0 \\times 3.0 = 6.00 \\, \\mathrm{N}$." },
          { label: "Step 3: Direction", text: "Force points along the acceleration by the second law." },
        ],
        result: "$F_{net} = 6.00 \\, \\mathrm{N}$."
      },
      {
        title: "Weight versus mass",
        problem: "An astronaut of mass $m = 40 \\, \\mathrm{kg}$ stands on Earth. Find the weight and the normal force at rest.",
        steps: [
          { label: "Step 1: Weight", text: "$W = mg = 40 \\times 9.8 = 392 \\, \\mathrm{N}$." },
          { label: "Step 2: Equilibrium", text: "At rest $N - W = 0$ so $N = W$." },
          { label: "Step 3: Third law pair", text: "The astronaut presses Earth with $W$ downward; that pair acts on different bodies." },
        ],
        result: "$W = N = 392 \\, \\mathrm{N}$. Mass is intrinsic; weight is $mg$."
      },
    ],
    keyTakeaways: [
      "Classical Mechanics is governed by $\\vec{F}_{net} = m\\vec{a}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $F_g = mg$",
    ],
    quiz: [
      {
        q: "Newton second law in one line is:",
        options: ["$F = ma$", "$F = mv$", "$F = m/a$", "$F = a/m$"],
        answer: 0,
        explanation: "$F_{net} = ma$ with vectors on both sides."
      },
      {
        q: "Action-reaction pairs act on:",
        options: ["different bodies", "only planets", "only ropes", "the same body"],
        answer: 0,
        explanation: "$F_{AB} = -F_{BA}$ never cancels in one free-body diagram."
      },
      {
        q: "Inertia is measured by:",
        options: ["volume", "charge", "weight", "mass"],
        answer: 3,
        explanation: "Mass resists acceleration; weight $mg$ is a force."
      },
    ],
  },
  {
    sectionId: "coletta-ch4-s2",
    readingTime: 5,
    intro: "Dynamics asks what causes motion to change, and Newton answers with force, mass, and three laws. Coletta builds a systematic free-body-diagram method crowned by Problem Solving Strategy boxes. A Closer Look passages pause on the subtle meaning of force before applications begin. This section treats Force at exam depth.",
    objectives: [
      "State and apply the defining relation of Force with correct SI units",
      "Solve a quantitative Force problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Force reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $F_s = -kx$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\vec{F}_{net} = m\\vec{a}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $F_{AB} = -F_{BA}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $F_{AB} = -F_{BA}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Force",
        kind: "definition",
        statement: "**Force is governed by $\\vec{F}_{net} = m\\vec{a}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Second law in numbers",
        problem: "A mass $m = 3.0 \\, \\mathrm{kg}$ accelerates at $a = 3.5 \\, \\mathrm{m/s^2}$. Find the net force.",
        steps: [
          { label: "Step 1: Law", text: "$F_{net} = ma$." },
          { label: "Step 2: Multiply", text: "$F = 3.0 \\times 3.5 = 10.50 \\, \\mathrm{N}$." },
          { label: "Step 3: Direction", text: "Force points along the acceleration by the second law." },
        ],
        result: "$F_{net} = 10.50 \\, \\mathrm{N}$."
      },
      {
        title: "Weight versus mass",
        problem: "An astronaut of mass $m = 60 \\, \\mathrm{kg}$ stands on Earth. Find the weight and the normal force at rest.",
        steps: [
          { label: "Step 1: Weight", text: "$W = mg = 60 \\times 9.8 = 588 \\, \\mathrm{N}$." },
          { label: "Step 2: Equilibrium", text: "At rest $N - W = 0$ so $N = W$." },
          { label: "Step 3: Third law pair", text: "The astronaut presses Earth with $W$ downward; that pair acts on different bodies." },
        ],
        result: "$W = N = 588 \\, \\mathrm{N}$. Mass is intrinsic; weight is $mg$."
      },
    ],
    keyTakeaways: [
      "Force is governed by $\\vec{F}_{net} = m\\vec{a}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $F_g = mg$",
    ],
    quiz: [
      {
        q: "Action-reaction pairs act on:",
        options: ["different bodies", "only planets", "only ropes", "the same body"],
        answer: 0,
        explanation: "$F_{AB} = -F_{BA}$ never cancels in one free-body diagram."
      },
      {
        q: "Inertia is measured by:",
        options: ["volume", "charge", "weight", "mass"],
        answer: 3,
        explanation: "Mass resists acceleration; weight $mg$ is a force."
      },
      {
        q: "Newton second law in one line is:",
        options: ["$F = a/m$", "$F = ma$", "$F = mv$", "$F = m/a$"],
        answer: 1,
        explanation: "$F_{net} = ma$ with vectors on both sides."
      },
    ],
  },
  {
    sectionId: "coletta-ch4-s3",
    readingTime: 6,
    intro: "Dynamics asks what causes motion to change, and Newton answers with force, mass, and three laws. Coletta builds a systematic free-body-diagram method crowned by Problem Solving Strategy boxes. Galileo In Perspective essay reminds that experiment, not authority, settled inertia. This section treats Newton's First Law at exam depth.",
    objectives: [
      "State and apply the defining relation of Newton's First Law with correct SI units",
      "Solve a quantitative Newton's First Law problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Newton's First Law reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $F_{AB} = -F_{BA}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $F_{AB} = -F_{BA}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Newton's First Law",
        kind: "definition",
        statement: "**Newton's First Law is governed by $\\vec{F}_{net} = m\\vec{a}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $F_g = mg$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $F_s = -kx$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Energy bars $K + U = E$: kinetic plus potential always totals the same $E$.",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="energy bar chart of kinetic plus potential energy"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><rect x="80" y="40" width="50" height="120" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/><text x="105" y="178" font-size="12" text-anchor="middle" fill="currentColor">K</text><rect x="170" y="80" width="50" height="80" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/><text x="195" y="178" font-size="12" text-anchor="middle" fill="currentColor">U</text><rect x="260" y="20" width="50" height="140" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/><text x="285" y="178" font-size="12" text-anchor="middle" fill="currentColor">E</text><line x1="50" y1="160" x2="340" y2="160" stroke="currentColor" stroke-width="1.5"/><text x="200" y="40" font-size="12" text-anchor="middle" fill="currentColor">energy bars: K + U = E</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Second law in numbers",
        problem: "A mass $m = 4.0 \\, \\mathrm{kg}$ accelerates at $a = 4.0 \\, \\mathrm{m/s^2}$. Find the net force.",
        steps: [
          { label: "Step 1: Law", text: "$F_{net} = ma$." },
          { label: "Step 2: Multiply", text: "$F = 4.0 \\times 4.0 = 16.00 \\, \\mathrm{N}$." },
          { label: "Step 3: Direction", text: "Force points along the acceleration by the second law." },
        ],
        result: "$F_{net} = 16.00 \\, \\mathrm{N}$."
      },
      {
        title: "Weight versus mass",
        problem: "An astronaut of mass $m = 80 \\, \\mathrm{kg}$ stands on Earth. Find the weight and the normal force at rest.",
        steps: [
          { label: "Step 1: Weight", text: "$W = mg = 80 \\times 9.8 = 784 \\, \\mathrm{N}$." },
          { label: "Step 2: Equilibrium", text: "At rest $N - W = 0$ so $N = W$." },
          { label: "Step 3: Third law pair", text: "The astronaut presses Earth with $W$ downward; that pair acts on different bodies." },
        ],
        result: "$W = N = 784 \\, \\mathrm{N}$. Mass is intrinsic; weight is $mg$."
      },
    ],
    keyTakeaways: [
      "Newton's First Law is governed by $\\vec{F}_{net} = m\\vec{a}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $F_g = mg$",
    ],
    quiz: [
      {
        q: "Inertia is measured by:",
        options: ["volume", "charge", "weight", "mass"],
        answer: 3,
        explanation: "Mass resists acceleration; weight $mg$ is a force."
      },
      {
        q: "Newton second law in one line is:",
        options: ["$F = a/m$", "$F = ma$", "$F = mv$", "$F = m/a$"],
        answer: 1,
        explanation: "$F_{net} = ma$ with vectors on both sides."
      },
      {
        q: "Action-reaction pairs act on:",
        options: ["the same body", "different bodies", "only planets", "only ropes"],
        answer: 1,
        explanation: "$F_{AB} = -F_{BA}$ never cancels in one free-body diagram."
      },
    ],
  },
  {
    sectionId: "coletta-ch4-s4",
    readingTime: 7,
    intro: "Dynamics asks what causes motion to change, and Newton answers with force, mass, and three laws. Coletta builds a systematic free-body-diagram method crowned by Problem Solving Strategy boxes. Every example solves symbolically before numbers are inserted. This section treats Mass at exam depth.",
    objectives: [
      "State and apply the defining relation of Mass with correct SI units",
      "Solve a quantitative Mass problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Mass reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Mass",
        kind: "definition",
        statement: "**Mass is governed by $\\vec{F}_{net} = m\\vec{a}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $F_g = mg$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $F_s = -kx$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\vec{F}_{net} = m\\vec{a}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $F_{AB} = -F_{BA}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    examples: [
      {
        title: "Second law in numbers",
        problem: "A mass $m = 5.0 \\, \\mathrm{kg}$ accelerates at $a = 4.5 \\, \\mathrm{m/s^2}$. Find the net force.",
        steps: [
          { label: "Step 1: Law", text: "$F_{net} = ma$." },
          { label: "Step 2: Multiply", text: "$F = 5.0 \\times 4.5 = 22.50 \\, \\mathrm{N}$." },
          { label: "Step 3: Direction", text: "Force points along the acceleration by the second law." },
        ],
        result: "$F_{net} = 22.50 \\, \\mathrm{N}$."
      },
      {
        title: "Weight versus mass",
        problem: "An astronaut of mass $m = 100 \\, \\mathrm{kg}$ stands on Earth. Find the weight and the normal force at rest.",
        steps: [
          { label: "Step 1: Weight", text: "$W = mg = 100 \\times 9.8 = 980 \\, \\mathrm{N}$." },
          { label: "Step 2: Equilibrium", text: "At rest $N - W = 0$ so $N = W$." },
          { label: "Step 3: Third law pair", text: "The astronaut presses Earth with $W$ downward; that pair acts on different bodies." },
        ],
        result: "$W = N = 980 \\, \\mathrm{N}$. Mass is intrinsic; weight is $mg$."
      },
    ],
    keyTakeaways: [
      "Mass is governed by $\\vec{F}_{net} = m\\vec{a}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $F_g = mg$",
    ],
    quiz: [
      {
        q: "Newton second law in one line is:",
        options: ["$F = a/m$", "$F = ma$", "$F = mv$", "$F = m/a$"],
        answer: 1,
        explanation: "$F_{net} = ma$ with vectors on both sides."
      },
      {
        q: "Action-reaction pairs act on:",
        options: ["the same body", "different bodies", "only planets", "only ropes"],
        answer: 1,
        explanation: "$F_{AB} = -F_{BA}$ never cancels in one free-body diagram."
      },
      {
        q: "Inertia is measured by:",
        options: ["mass", "volume", "charge", "weight"],
        answer: 0,
        explanation: "Mass resists acceleration; weight $mg$ is a force."
      },
    ],
  },
  {
    sectionId: "coletta-ch4-s5",
    readingTime: 8,
    intro: "Dynamics asks what causes motion to change, and Newton answers with force, mass, and three laws. Coletta builds a systematic free-body-diagram method crowned by Problem Solving Strategy boxes. Coletta Problem Solving Strategy boxes turn free-body diagrams into a repeatable algorithm. This section treats Newton's Second and Third Laws at exam depth.",
    objectives: [
      "State and apply the defining relation of Newton's Second and Third Laws with correct SI units",
      "Solve a quantitative Newton's Second and Third Laws problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Newton's Second and Third Laws reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $F_s = -kx$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\vec{F}_{net} = m\\vec{a}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $F_{AB} = -F_{BA}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $F_{AB} = -F_{BA}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Newton's Second and Third Laws",
        kind: "definition",
        statement: "**Newton's Second and Third Laws is governed by $\\vec{F}_{net} = m\\vec{a}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    figures: [
      {
        caption: "Torque from a lever arm: $\\tau = rF\\sin\\phi$ twists the disk about its axle.",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="disk with lever arm and tangential force"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><circle cx="200" cy="100" r="55" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="200" cy="100" r="6" fill="currentColor"/><line x1="200" y1="100" x2="255" y2="100" stroke="currentColor" stroke-width="2.5"/><line x1="255" y1="100" x2="255" y2="55" stroke="currentColor" stroke-width="2"/><polygon points="255,55 251,65 259,65" fill="currentColor"/><text x="225" y="118" font-size="12" fill="currentColor">r</text><text x="265" y="80" font-size="12" fill="currentColor">F</text><text x="120" y="170" font-size="12" fill="currentColor">torque = r F sin phi</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Second law in numbers",
        problem: "A mass $m = 6.0 \\, \\mathrm{kg}$ accelerates at $a = 5.0 \\, \\mathrm{m/s^2}$. Find the net force.",
        steps: [
          { label: "Step 1: Law", text: "$F_{net} = ma$." },
          { label: "Step 2: Multiply", text: "$F = 6.0 \\times 5.0 = 30.00 \\, \\mathrm{N}$." },
          { label: "Step 3: Direction", text: "Force points along the acceleration by the second law." },
        ],
        result: "$F_{net} = 30.00 \\, \\mathrm{N}$."
      },
      {
        title: "Weight versus mass",
        problem: "An astronaut of mass $m = 120 \\, \\mathrm{kg}$ stands on Earth. Find the weight and the normal force at rest.",
        steps: [
          { label: "Step 1: Weight", text: "$W = mg = 120 \\times 9.8 = 1176 \\, \\mathrm{N}$." },
          { label: "Step 2: Equilibrium", text: "At rest $N - W = 0$ so $N = W$." },
          { label: "Step 3: Third law pair", text: "The astronaut presses Earth with $W$ downward; that pair acts on different bodies." },
        ],
        result: "$W = N = 1176 \\, \\mathrm{N}$. Mass is intrinsic; weight is $mg$."
      },
    ],
    keyTakeaways: [
      "Newton's Second and Third Laws is governed by $\\vec{F}_{net} = m\\vec{a}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $F_g = mg$",
    ],
    quiz: [
      {
        q: "Action-reaction pairs act on:",
        options: ["the same body", "different bodies", "only planets", "only ropes"],
        answer: 1,
        explanation: "$F_{AB} = -F_{BA}$ never cancels in one free-body diagram."
      },
      {
        q: "Inertia is measured by:",
        options: ["mass", "volume", "charge", "weight"],
        answer: 0,
        explanation: "Mass resists acceleration; weight $mg$ is a force."
      },
      {
        q: "Newton second law in one line is:",
        options: ["$F = m/a$", "$F = a/m$", "$F = ma$", "$F = mv$"],
        answer: 2,
        explanation: "$F_{net} = ma$ with vectors on both sides."
      },
    ],
  },
  {
    sectionId: "coletta-ch4-s6",
    readingTime: 9,
    intro: "Dynamics asks what causes motion to change, and Newton answers with force, mass, and three laws. Coletta builds a systematic free-body-diagram method crowned by Problem Solving Strategy boxes. A Closer Look passages pause on the subtle meaning of force before applications begin. This section treats Force Laws at exam depth.",
    objectives: [
      "State and apply the defining relation of Force Laws with correct SI units",
      "Solve a quantitative Force Laws problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Force Laws reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $F_{AB} = -F_{BA}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $F_{AB} = -F_{BA}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Force Laws",
        kind: "definition",
        statement: "**Force Laws is governed by $\\vec{F}_{net} = m\\vec{a}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $F_g = mg$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $F_s = -kx$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    examples: [
      {
        title: "Second law in numbers",
        problem: "A mass $m = 7.0 \\, \\mathrm{kg}$ accelerates at $a = 5.5 \\, \\mathrm{m/s^2}$. Find the net force.",
        steps: [
          { label: "Step 1: Law", text: "$F_{net} = ma$." },
          { label: "Step 2: Multiply", text: "$F = 7.0 \\times 5.5 = 38.50 \\, \\mathrm{N}$." },
          { label: "Step 3: Direction", text: "Force points along the acceleration by the second law." },
        ],
        result: "$F_{net} = 38.50 \\, \\mathrm{N}$."
      },
      {
        title: "Weight versus mass",
        problem: "An astronaut of mass $m = 140 \\, \\mathrm{kg}$ stands on Earth. Find the weight and the normal force at rest.",
        steps: [
          { label: "Step 1: Weight", text: "$W = mg = 140 \\times 9.8 = 1372 \\, \\mathrm{N}$." },
          { label: "Step 2: Equilibrium", text: "At rest $N - W = 0$ so $N = W$." },
          { label: "Step 3: Third law pair", text: "The astronaut presses Earth with $W$ downward; that pair acts on different bodies." },
        ],
        result: "$W = N = 1372 \\, \\mathrm{N}$. Mass is intrinsic; weight is $mg$."
      },
    ],
    keyTakeaways: [
      "Force Laws is governed by $\\vec{F}_{net} = m\\vec{a}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $F_g = mg$",
    ],
    quiz: [
      {
        q: "Inertia is measured by:",
        options: ["mass", "volume", "charge", "weight"],
        answer: 0,
        explanation: "Mass resists acceleration; weight $mg$ is a force."
      },
      {
        q: "Newton second law in one line is:",
        options: ["$F = m/a$", "$F = a/m$", "$F = ma$", "$F = mv$"],
        answer: 2,
        explanation: "$F_{net} = ma$ with vectors on both sides."
      },
      {
        q: "Action-reaction pairs act on:",
        options: ["only ropes", "the same body", "different bodies", "only planets"],
        answer: 2,
        explanation: "$F_{AB} = -F_{BA}$ never cancels in one free-body diagram."
      },
    ],
  },
  {
    sectionId: "coletta-ch4-s7",
    readingTime: 4,
    intro: "Dynamics asks what causes motion to change, and Newton answers with force, mass, and three laws. Coletta builds a systematic free-body-diagram method crowned by Problem Solving Strategy boxes. Galileo In Perspective essay reminds that experiment, not authority, settled inertia. This section treats The Concept of Force at exam depth.",
    objectives: [
      "State and apply the defining relation of The Concept of Force with correct SI units",
      "Solve a quantitative The Concept of Force problem by the Coletta strategy, checking dimensions and limits",
      "Explain the The Concept of Force reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of The Concept of Force",
        kind: "definition",
        statement: "**The Concept of Force is governed by $\\vec{F}_{net} = m\\vec{a}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $F_g = mg$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $F_s = -kx$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\vec{F}_{net} = m\\vec{a}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $F_{AB} = -F_{BA}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Fluid column: pressure grows with depth as $p = p_0 + \\rho gh$, and fast flow means low pressure (Bernoulli).",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="fluid column with hydrostatic pressure levels"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><path d="M 60 60 L 180 60 L 150 150 L 90 150 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><line x1="60" y1="100" x2="180" y2="100" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="120" y1="60" x2="120" y2="30" stroke="currentColor" stroke-width="1.5"/><polygon points="120,30 116,40 124,40" fill="currentColor"/><text x="200" y="100" font-size="12" fill="currentColor">p = p0 + rho g h</text><text x="200" y="125" font-size="12" fill="currentColor">Bernoulli: fast = low p</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Second law in numbers",
        problem: "A mass $m = 8.0 \\, \\mathrm{kg}$ accelerates at $a = 6.0 \\, \\mathrm{m/s^2}$. Find the net force.",
        steps: [
          { label: "Step 1: Law", text: "$F_{net} = ma$." },
          { label: "Step 2: Multiply", text: "$F = 8.0 \\times 6.0 = 48.00 \\, \\mathrm{N}$." },
          { label: "Step 3: Direction", text: "Force points along the acceleration by the second law." },
        ],
        result: "$F_{net} = 48.00 \\, \\mathrm{N}$."
      },
      {
        title: "Weight versus mass",
        problem: "An astronaut of mass $m = 160 \\, \\mathrm{kg}$ stands on Earth. Find the weight and the normal force at rest.",
        steps: [
          { label: "Step 1: Weight", text: "$W = mg = 160 \\times 9.8 = 1568 \\, \\mathrm{N}$." },
          { label: "Step 2: Equilibrium", text: "At rest $N - W = 0$ so $N = W$." },
          { label: "Step 3: Third law pair", text: "The astronaut presses Earth with $W$ downward; that pair acts on different bodies." },
        ],
        result: "$W = N = 1568 \\, \\mathrm{N}$. Mass is intrinsic; weight is $mg$."
      },
    ],
    keyTakeaways: [
      "The Concept of Force is governed by $\\vec{F}_{net} = m\\vec{a}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $F_g = mg$",
    ],
    quiz: [
      {
        q: "Newton second law in one line is:",
        options: ["$F = m/a$", "$F = a/m$", "$F = ma$", "$F = mv$"],
        answer: 2,
        explanation: "$F_{net} = ma$ with vectors on both sides."
      },
      {
        q: "Action-reaction pairs act on:",
        options: ["only ropes", "the same body", "different bodies", "only planets"],
        answer: 2,
        explanation: "$F_{AB} = -F_{BA}$ never cancels in one free-body diagram."
      },
      {
        q: "Inertia is measured by:",
        options: ["weight", "mass", "volume", "charge"],
        answer: 1,
        explanation: "Mass resists acceleration; weight $mg$ is a force."
      },
    ],
  },
  {
    sectionId: "coletta-ch4-s8",
    readingTime: 5,
    intro: "Dynamics asks what causes motion to change, and Newton answers with force, mass, and three laws. Coletta builds a systematic free-body-diagram method crowned by Problem Solving Strategy boxes. Every example solves symbolically before numbers are inserted. This section treats Applications of Newton's Laws of Motion at exam depth.",
    objectives: [
      "State and apply the defining relation of Applications of Newton's Laws of Motion with correct SI units",
      "Solve a quantitative Applications of Newton's Laws of Motion problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Applications of Newton's Laws of Motion reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $F_s = -kx$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\vec{F}_{net} = m\\vec{a}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $F_{AB} = -F_{BA}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $F_{AB} = -F_{BA}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Applications of Newton's Laws of Motion",
        kind: "definition",
        statement: "**Applications of Newton's Laws of Motion is governed by $\\vec{F}_{net} = m\\vec{a}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Second law in numbers",
        problem: "A mass $m = 9.0 \\, \\mathrm{kg}$ accelerates at $a = 6.5 \\, \\mathrm{m/s^2}$. Find the net force.",
        steps: [
          { label: "Step 1: Law", text: "$F_{net} = ma$." },
          { label: "Step 2: Multiply", text: "$F = 9.0 \\times 6.5 = 58.50 \\, \\mathrm{N}$." },
          { label: "Step 3: Direction", text: "Force points along the acceleration by the second law." },
        ],
        result: "$F_{net} = 58.50 \\, \\mathrm{N}$."
      },
      {
        title: "Weight versus mass",
        problem: "An astronaut of mass $m = 180 \\, \\mathrm{kg}$ stands on Earth. Find the weight and the normal force at rest.",
        steps: [
          { label: "Step 1: Weight", text: "$W = mg = 180 \\times 9.8 = 1764 \\, \\mathrm{N}$." },
          { label: "Step 2: Equilibrium", text: "At rest $N - W = 0$ so $N = W$." },
          { label: "Step 3: Third law pair", text: "The astronaut presses Earth with $W$ downward; that pair acts on different bodies." },
        ],
        result: "$W = N = 1764 \\, \\mathrm{N}$. Mass is intrinsic; weight is $mg$."
      },
    ],
    keyTakeaways: [
      "Applications of Newton's Laws of Motion is governed by $\\vec{F}_{net} = m\\vec{a}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $F_g = mg$",
    ],
    quiz: [
      {
        q: "Action-reaction pairs act on:",
        options: ["only ropes", "the same body", "different bodies", "only planets"],
        answer: 2,
        explanation: "$F_{AB} = -F_{BA}$ never cancels in one free-body diagram."
      },
      {
        q: "Inertia is measured by:",
        options: ["weight", "mass", "volume", "charge"],
        answer: 1,
        explanation: "Mass resists acceleration; weight $mg$ is a force."
      },
      {
        q: "Newton second law in one line is:",
        options: ["$F = mv$", "$F = m/a$", "$F = a/m$", "$F = ma$"],
        answer: 3,
        explanation: "$F_{net} = ma$ with vectors on both sides."
      },
    ],
  },
]

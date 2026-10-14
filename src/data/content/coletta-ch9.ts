import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 9
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh9Content: SectionContent[] = [
  {
    sectionId: "coletta-ch9-s1",
    readingTime: 7,
    intro: "Rotation mirrors translation with angle, angular velocity, torque, and moment of inertia playing the familiar roles. Angular momentum joins energy as a conserved currency, even in running. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Description of Rotational Motion at exam depth.",
    objectives: [
      "State and apply the defining relation of Description of Rotational Motion with correct SI units",
      "Solve a quantitative Description of Rotational Motion problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Description of Rotational Motion reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Description of Rotational Motion",
        kind: "definition",
        statement: "**Description of Rotational Motion is governed by $\\theta = \\frac{s}{r}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\tau = rF\\sin\\phi$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $I = \\sum m_i r_i^2$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\theta = \\frac{s}{r}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $L = I\\omega$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Rotation with $\\tau = rF\\sin\\phi$ about a fixed axis",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="beam in static equilibrium with pivot and load"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><polygon points="80,150 80,170 100,170" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/><line x1="80" y1="140" x2="320" y2="140" stroke="currentColor" stroke-width="3"/><line x1="150" y1="140" x2="150" y2="100" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/><polygon points="150,100 146,110 154,110" fill="currentColor"/><line x1="280" y1="140" x2="280" y2="175" stroke="currentColor" stroke-width="2"/><polygon points="280,175 276,165 284,165" fill="currentColor"/><circle cx="280" cy="150" r="10" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="200" y="125" font-size="12" fill="currentColor">sum of F = 0, sum of torque = 0</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Moment of inertia of a hoop",
        problem: "A $2.0 \\, \\mathrm{kg}$ hoop of radius $r = 0.40 \\, \\mathrm{m}$ spins about its center. Find $I$.",
        steps: [
          { label: "Step 1: Formula", text: "All mass at $r$ gives $I = mr^2$." },
          { label: "Step 2: Substitute", text: "$I = 2.0 \\times (0.40)^2 = 2.0 \\times 0.1600 = 0.3200 \\, \\mathrm{kg\\,m^2}$." },
          { label: "Step 3: Compare", text: "A disk of same $m,r$ would have half this $I$." },
        ],
        result: "$I = 0.3200 \\, \\mathrm{kg\\,m^2}$."
      },
      {
        title: "Torque from a wrench",
        problem: "A $40 \\, \\mathrm{N}$ force pushes at $90^\\circ$ on a $0.25 \\, \\mathrm{m}$ wrench. Find torque.",
        steps: [
          { label: "Step 1: Lever", text: "$\\tau = rF\\sin\\phi$ with $\\sin 90^\\circ = 1$." },
          { label: "Step 2: Multiply", text: "$\\tau = 0.25 \\times 40 = 10.0 \\, \\mathrm{N\\,m}$." },
          { label: "Step 3: Direction", text: "Out of the page by the right-hand rule." },
        ],
        result: "$\\tau = 10.0 \\, \\mathrm{N\\,m}$."
      },
    ],
    keyTakeaways: [
      "Description of Rotational Motion is governed by $\\theta = \\frac{s}{r}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\tau = rF\\sin\\phi$",
    ],
    quiz: [
      {
        q: "Torque magnitude is:",
        options: ["$rF$", "$rF\\sin\\phi$", "$r/F$", "$F/r$"],
        answer: 1,
        explanation: "Only the lever arm perpendicular to $F$ twists."
      },
      {
        q: "A hoop has larger $I$ than a disk of same $m,r$ because:",
        options: ["mass sits farther out", "it rolls", "disks are hollow", "it is heavier"],
        answer: 0,
        explanation: "$I = \\sum mr^2$ weights distant mass most."
      },
      {
        q: "Angular momentum $L = I\\omega$ is conserved when:",
        options: ["mass changes", "always", "net external torque is zero", "energy is lost"],
        answer: 2,
        explanation: "Pulling arms in spins the skater up with $L$ fixed."
      },
    ],
  },
  {
    sectionId: "coletta-ch9-s2",
    readingTime: 8,
    intro: "Rotation mirrors translation with angle, angular velocity, torque, and moment of inertia playing the familiar roles. Angular momentum joins energy as a conserved currency, even in running. Worked examples carry real numbers you can verify with a calculator. This section treats Torque at exam depth.",
    objectives: [
      "State and apply the defining relation of Torque with correct SI units",
      "Solve a quantitative Torque problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Torque reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $I = \\sum m_i r_i^2$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\theta = \\frac{s}{r}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $L = I\\omega$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $L = I\\omega$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Torque",
        kind: "definition",
        statement: "**Torque is governed by $\\theta = \\frac{s}{r}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Moment of inertia of a hoop",
        problem: "A $2.5 \\, \\mathrm{kg}$ hoop of radius $r = 0.45 \\, \\mathrm{m}$ spins about its center. Find $I$.",
        steps: [
          { label: "Step 1: Formula", text: "All mass at $r$ gives $I = mr^2$." },
          { label: "Step 2: Substitute", text: "$I = 2.5 \\times (0.45)^2 = 2.5 \\times 0.2025 = 0.5062 \\, \\mathrm{kg\\,m^2}$." },
          { label: "Step 3: Compare", text: "A disk of same $m,r$ would have half this $I$." },
        ],
        result: "$I = 0.5062 \\, \\mathrm{kg\\,m^2}$."
      },
      {
        title: "Torque from a wrench",
        problem: "A $50 \\, \\mathrm{N}$ force pushes at $90^\\circ$ on a $0.25 \\, \\mathrm{m}$ wrench. Find torque.",
        steps: [
          { label: "Step 1: Lever", text: "$\\tau = rF\\sin\\phi$ with $\\sin 90^\\circ = 1$." },
          { label: "Step 2: Multiply", text: "$\\tau = 0.25 \\times 50 = 12.5 \\, \\mathrm{N\\,m}$." },
          { label: "Step 3: Direction", text: "Out of the page by the right-hand rule." },
        ],
        result: "$\\tau = 12.5 \\, \\mathrm{N\\,m}$."
      },
    ],
    keyTakeaways: [
      "Torque is governed by $\\theta = \\frac{s}{r}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\tau = rF\\sin\\phi$",
    ],
    quiz: [
      {
        q: "A hoop has larger $I$ than a disk of same $m,r$ because:",
        options: ["mass sits farther out", "it rolls", "disks are hollow", "it is heavier"],
        answer: 0,
        explanation: "$I = \\sum mr^2$ weights distant mass most."
      },
      {
        q: "Angular momentum $L = I\\omega$ is conserved when:",
        options: ["mass changes", "always", "net external torque is zero", "energy is lost"],
        answer: 2,
        explanation: "Pulling arms in spins the skater up with $L$ fixed."
      },
      {
        q: "Torque magnitude is:",
        options: ["$F/r$", "$rF$", "$rF\\sin\\phi$", "$r/F$"],
        answer: 2,
        explanation: "Only the lever arm perpendicular to $F$ twists."
      },
    ],
  },
  {
    sectionId: "coletta-ch9-s3",
    readingTime: 9,
    intro: "Rotation mirrors translation with angle, angular velocity, torque, and moment of inertia playing the familiar roles. Angular momentum joins energy as a conserved currency, even in running. A Closer Look boxes flag the step where beginners most often slip. This section treats Dynamics of Rotation about a Fixed Axis at exam depth.",
    objectives: [
      "State and apply the defining relation of Dynamics of Rotation about a Fixed Axis with correct SI units",
      "Solve a quantitative Dynamics of Rotation about a Fixed Axis problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Dynamics of Rotation about a Fixed Axis reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $L = I\\omega$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $L = I\\omega$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Dynamics of Rotation about a Fixed Axis",
        kind: "definition",
        statement: "**Dynamics of Rotation about a Fixed Axis is governed by $\\theta = \\frac{s}{r}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\tau = rF\\sin\\phi$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $I = \\sum m_i r_i^2$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Rotation with $\\tau = rF\\sin\\phi$ about a fixed axis",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="gas molecules colliding with box walls"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><rect x="110" y="50" width="130" height="100" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="140" cy="80" r="4" fill="currentColor"/><line x1="140" y1="80" x2="160" y2="70" stroke="currentColor" stroke-width="1.5"/><circle cx="180" cy="110" r="4" fill="currentColor"/><line x1="180" y1="110" x2="162" y2="98" stroke="currentColor" stroke-width="1.5"/><circle cx="210" cy="85" r="4" fill="currentColor"/><line x1="210" y1="85" x2="225" y2="97" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="125" r="4" fill="currentColor"/><line x1="150" y1="125" x2="172" y2="133" stroke="currentColor" stroke-width="1.5"/><text x="260" y="100" font-size="12" fill="currentColor">p V = N k T</text><text x="260" y="120" font-size="12" fill="currentColor">hits give pressure</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Moment of inertia of a hoop",
        problem: "A $3.0 \\, \\mathrm{kg}$ hoop of radius $r = 0.50 \\, \\mathrm{m}$ spins about its center. Find $I$.",
        steps: [
          { label: "Step 1: Formula", text: "All mass at $r$ gives $I = mr^2$." },
          { label: "Step 2: Substitute", text: "$I = 3.0 \\times (0.50)^2 = 3.0 \\times 0.2500 = 0.7500 \\, \\mathrm{kg\\,m^2}$." },
          { label: "Step 3: Compare", text: "A disk of same $m,r$ would have half this $I$." },
        ],
        result: "$I = 0.7500 \\, \\mathrm{kg\\,m^2}$."
      },
      {
        title: "Torque from a wrench",
        problem: "A $60 \\, \\mathrm{N}$ force pushes at $90^\\circ$ on a $0.25 \\, \\mathrm{m}$ wrench. Find torque.",
        steps: [
          { label: "Step 1: Lever", text: "$\\tau = rF\\sin\\phi$ with $\\sin 90^\\circ = 1$." },
          { label: "Step 2: Multiply", text: "$\\tau = 0.25 \\times 60 = 15.0 \\, \\mathrm{N\\,m}$." },
          { label: "Step 3: Direction", text: "Out of the page by the right-hand rule." },
        ],
        result: "$\\tau = 15.0 \\, \\mathrm{N\\,m}$."
      },
    ],
    keyTakeaways: [
      "Dynamics of Rotation about a Fixed Axis is governed by $\\theta = \\frac{s}{r}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\tau = rF\\sin\\phi$",
    ],
    quiz: [
      {
        q: "Angular momentum $L = I\\omega$ is conserved when:",
        options: ["mass changes", "always", "net external torque is zero", "energy is lost"],
        answer: 2,
        explanation: "Pulling arms in spins the skater up with $L$ fixed."
      },
      {
        q: "Torque magnitude is:",
        options: ["$F/r$", "$rF$", "$rF\\sin\\phi$", "$r/F$"],
        answer: 2,
        explanation: "Only the lever arm perpendicular to $F$ twists."
      },
      {
        q: "A hoop has larger $I$ than a disk of same $m,r$ because:",
        options: ["it is heavier", "mass sits farther out", "it rolls", "disks are hollow"],
        answer: 1,
        explanation: "$I = \\sum mr^2$ weights distant mass most."
      },
    ],
  },
  {
    sectionId: "coletta-ch9-s4",
    readingTime: 4,
    intro: "Rotation mirrors translation with angle, angular velocity, torque, and moment of inertia playing the familiar roles. Angular momentum joins energy as a conserved currency, even in running. End-of-section objectives tell you what to reproduce closed-book. This section treats Rotational Kinetic Energy at exam depth.",
    objectives: [
      "State and apply the defining relation of Rotational Kinetic Energy with correct SI units",
      "Solve a quantitative Rotational Kinetic Energy problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Rotational Kinetic Energy reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Rotational Kinetic Energy",
        kind: "definition",
        statement: "**Rotational Kinetic Energy is governed by $\\theta = \\frac{s}{r}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\tau = rF\\sin\\phi$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $I = \\sum m_i r_i^2$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\theta = \\frac{s}{r}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $L = I\\omega$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    examples: [
      {
        title: "Moment of inertia of a hoop",
        problem: "A $3.5 \\, \\mathrm{kg}$ hoop of radius $r = 0.55 \\, \\mathrm{m}$ spins about its center. Find $I$.",
        steps: [
          { label: "Step 1: Formula", text: "All mass at $r$ gives $I = mr^2$." },
          { label: "Step 2: Substitute", text: "$I = 3.5 \\times (0.55)^2 = 3.5 \\times 0.3025 = 1.0588 \\, \\mathrm{kg\\,m^2}$." },
          { label: "Step 3: Compare", text: "A disk of same $m,r$ would have half this $I$." },
        ],
        result: "$I = 1.0588 \\, \\mathrm{kg\\,m^2}$."
      },
      {
        title: "Torque from a wrench",
        problem: "A $70 \\, \\mathrm{N}$ force pushes at $90^\\circ$ on a $0.25 \\, \\mathrm{m}$ wrench. Find torque.",
        steps: [
          { label: "Step 1: Lever", text: "$\\tau = rF\\sin\\phi$ with $\\sin 90^\\circ = 1$." },
          { label: "Step 2: Multiply", text: "$\\tau = 0.25 \\times 70 = 17.5 \\, \\mathrm{N\\,m}$." },
          { label: "Step 3: Direction", text: "Out of the page by the right-hand rule." },
        ],
        result: "$\\tau = 17.5 \\, \\mathrm{N\\,m}$."
      },
    ],
    keyTakeaways: [
      "Rotational Kinetic Energy is governed by $\\theta = \\frac{s}{r}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\tau = rF\\sin\\phi$",
    ],
    quiz: [
      {
        q: "Torque magnitude is:",
        options: ["$F/r$", "$rF$", "$rF\\sin\\phi$", "$r/F$"],
        answer: 2,
        explanation: "Only the lever arm perpendicular to $F$ twists."
      },
      {
        q: "A hoop has larger $I$ than a disk of same $m,r$ because:",
        options: ["it is heavier", "mass sits farther out", "it rolls", "disks are hollow"],
        answer: 1,
        explanation: "$I = \\sum mr^2$ weights distant mass most."
      },
      {
        q: "Angular momentum $L = I\\omega$ is conserved when:",
        options: ["energy is lost", "mass changes", "always", "net external torque is zero"],
        answer: 3,
        explanation: "Pulling arms in spins the skater up with $L$ fixed."
      },
    ],
  },
  {
    sectionId: "coletta-ch9-s5",
    readingTime: 5,
    intro: "Rotation mirrors translation with angle, angular velocity, torque, and moment of inertia playing the familiar roles. Angular momentum joins energy as a conserved currency, even in running. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Angular Momentum at exam depth.",
    objectives: [
      "State and apply the defining relation of Angular Momentum with correct SI units",
      "Solve a quantitative Angular Momentum problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Angular Momentum reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $I = \\sum m_i r_i^2$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $\\theta = \\frac{s}{r}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $L = I\\omega$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $L = I\\omega$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Angular Momentum",
        kind: "definition",
        statement: "**Angular Momentum is governed by $\\theta = \\frac{s}{r}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    figures: [
      {
        caption: "Rotation with $\\tau = rF\\sin\\phi$ about a fixed axis",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="sine wave of simple harmonic motion"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="40" y1="100" x2="360" y2="100" stroke="currentColor" stroke-width="1.2"/><path d="M 40 100 Q 80 30 120 100 T 200 100 T 280 100 T 360 100" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="40" y1="20" x2="40" y2="180" stroke="currentColor" stroke-width="1.2"/><text x="200" y="170" font-size="12" text-anchor="middle" fill="currentColor">x = A cos(omega t + phi)</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Moment of inertia of a hoop",
        problem: "A $4.0 \\, \\mathrm{kg}$ hoop of radius $r = 0.60 \\, \\mathrm{m}$ spins about its center. Find $I$.",
        steps: [
          { label: "Step 1: Formula", text: "All mass at $r$ gives $I = mr^2$." },
          { label: "Step 2: Substitute", text: "$I = 4.0 \\times (0.60)^2 = 4.0 \\times 0.3600 = 1.4400 \\, \\mathrm{kg\\,m^2}$." },
          { label: "Step 3: Compare", text: "A disk of same $m,r$ would have half this $I$." },
        ],
        result: "$I = 1.4400 \\, \\mathrm{kg\\,m^2}$."
      },
      {
        title: "Torque from a wrench",
        problem: "A $80 \\, \\mathrm{N}$ force pushes at $90^\\circ$ on a $0.25 \\, \\mathrm{m}$ wrench. Find torque.",
        steps: [
          { label: "Step 1: Lever", text: "$\\tau = rF\\sin\\phi$ with $\\sin 90^\\circ = 1$." },
          { label: "Step 2: Multiply", text: "$\\tau = 0.25 \\times 80 = 20.0 \\, \\mathrm{N\\,m}$." },
          { label: "Step 3: Direction", text: "Out of the page by the right-hand rule." },
        ],
        result: "$\\tau = 20.0 \\, \\mathrm{N\\,m}$."
      },
    ],
    keyTakeaways: [
      "Angular Momentum is governed by $\\theta = \\frac{s}{r}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\tau = rF\\sin\\phi$",
    ],
    quiz: [
      {
        q: "A hoop has larger $I$ than a disk of same $m,r$ because:",
        options: ["it is heavier", "mass sits farther out", "it rolls", "disks are hollow"],
        answer: 1,
        explanation: "$I = \\sum mr^2$ weights distant mass most."
      },
      {
        q: "Angular momentum $L = I\\omega$ is conserved when:",
        options: ["energy is lost", "mass changes", "always", "net external torque is zero"],
        answer: 3,
        explanation: "Pulling arms in spins the skater up with $L$ fixed."
      },
      {
        q: "Torque magnitude is:",
        options: ["$r/F$", "$F/r$", "$rF$", "$rF\\sin\\phi$"],
        answer: 3,
        explanation: "Only the lever arm perpendicular to $F$ twists."
      },
    ],
  },
  {
    sectionId: "coletta-ch9-s6",
    readingTime: 6,
    intro: "Rotation mirrors translation with angle, angular velocity, torque, and moment of inertia playing the familiar roles. Angular momentum joins energy as a conserved currency, even in running. Worked examples carry real numbers you can verify with a calculator. This section treats Energy Analysis of Running at exam depth.",
    objectives: [
      "State and apply the defining relation of Energy Analysis of Running with correct SI units",
      "Solve a quantitative Energy Analysis of Running problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Energy Analysis of Running reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $L = I\\omega$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $L = I\\omega$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Energy Analysis of Running",
        kind: "definition",
        statement: "**Energy Analysis of Running is governed by $\\theta = \\frac{s}{r}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $\\tau = rF\\sin\\phi$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $I = \\sum m_i r_i^2$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    examples: [
      {
        title: "Moment of inertia of a hoop",
        problem: "A $4.5 \\, \\mathrm{kg}$ hoop of radius $r = 0.65 \\, \\mathrm{m}$ spins about its center. Find $I$.",
        steps: [
          { label: "Step 1: Formula", text: "All mass at $r$ gives $I = mr^2$." },
          { label: "Step 2: Substitute", text: "$I = 4.5 \\times (0.65)^2 = 4.5 \\times 0.4225 = 1.9013 \\, \\mathrm{kg\\,m^2}$." },
          { label: "Step 3: Compare", text: "A disk of same $m,r$ would have half this $I$." },
        ],
        result: "$I = 1.9013 \\, \\mathrm{kg\\,m^2}$."
      },
      {
        title: "Torque from a wrench",
        problem: "A $90 \\, \\mathrm{N}$ force pushes at $90^\\circ$ on a $0.25 \\, \\mathrm{m}$ wrench. Find torque.",
        steps: [
          { label: "Step 1: Lever", text: "$\\tau = rF\\sin\\phi$ with $\\sin 90^\\circ = 1$." },
          { label: "Step 2: Multiply", text: "$\\tau = 0.25 \\times 90 = 22.5 \\, \\mathrm{N\\,m}$." },
          { label: "Step 3: Direction", text: "Out of the page by the right-hand rule." },
        ],
        result: "$\\tau = 22.5 \\, \\mathrm{N\\,m}$."
      },
    ],
    keyTakeaways: [
      "Energy Analysis of Running is governed by $\\theta = \\frac{s}{r}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $\\tau = rF\\sin\\phi$",
    ],
    quiz: [
      {
        q: "Angular momentum $L = I\\omega$ is conserved when:",
        options: ["energy is lost", "mass changes", "always", "net external torque is zero"],
        answer: 3,
        explanation: "Pulling arms in spins the skater up with $L$ fixed."
      },
      {
        q: "Torque magnitude is:",
        options: ["$r/F$", "$F/r$", "$rF$", "$rF\\sin\\phi$"],
        answer: 3,
        explanation: "Only the lever arm perpendicular to $F$ twists."
      },
      {
        q: "A hoop has larger $I$ than a disk of same $m,r$ because:",
        options: ["disks are hollow", "it is heavier", "mass sits farther out", "it rolls"],
        answer: 2,
        explanation: "$I = \\sum mr^2$ weights distant mass most."
      },
    ],
  },
]

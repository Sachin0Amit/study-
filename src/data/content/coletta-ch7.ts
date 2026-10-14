import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 7
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh7Content: SectionContent[] = [
  {
    sectionId: "coletta-ch7-s1",
    readingTime: 7,
    intro: "Work reframes dynamics as an energy ledger in which kinetic energy is deposited and withdrawn. Potential energies for gravity and springs make conservation of mechanical energy a powerful shortcut. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Work and Kinetic Energy at exam depth.",
    objectives: [
      "State and apply the defining relation of Work and Kinetic Energy with correct SI units",
      "Solve a quantitative Work and Kinetic Energy problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Work and Kinetic Energy reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Work and Kinetic Energy",
        kind: "definition",
        statement: "**Work and Kinetic Energy is governed by $W = Fd\\cos\\theta$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $K = \\frac{1}{2}mv^2$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $U_g = mgh$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $W = Fd\\cos\\theta$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $U_s = \\frac{1}{2}kx^2$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Two carts before a collision: $m_1$ moves at $v_1$ toward $m_2$ at rest — momentum is shared at impact.",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="two carts before a collision on a track"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><circle cx="120" cy="100" r="18" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/><circle cx="260" cy="100" r="14" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><line x1="140" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="2"/><polygon points="200,100 190,96 190,104" fill="currentColor"/><line x1="246" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/><text x="120" y="140" font-size="12" text-anchor="middle" fill="currentColor">m1 v1</text><text x="260" y="140" font-size="12" text-anchor="middle" fill="currentColor">m2 at rest</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Work to speed up",
        problem: "A $3.0 \\, \\mathrm{kg}$ block accelerates from rest to $v = 4.0 \\, \\mathrm{m/s}$. Find the net work.",
        steps: [
          { label: "Step 1: Kinetic energy", text: "$K = mv^2/2 = 0.5 \\times 3.0 \\times 16.0 = 24.00 \\, \\mathrm{J}$." },
          { label: "Step 2: Work-energy", text: "From rest $W_{net} = \\Delta K = 24.00 \\, \\mathrm{J}$." },
          { label: "Step 3: Check", text: "Positive work deposits energy; braking would remove it." },
        ],
        result: "$W_{net} = 24.00 \\, \\mathrm{J}$."
      },
      {
        title: "Drop converts potential to kinetic",
        problem: "The same block drops $h = 2.0 \\, \\mathrm{m}$. Find impact speed from energy.",
        steps: [
          { label: "Step 1: Loss of potential", text: "$\\Delta U = mgh = 3.0 \\times 9.8 \\times 2.0 = 58.80 \\, \\mathrm{J}$." },
          { label: "Step 2: Gain of kinetic", text: "$mv^2/2 = 58.80$ gives $v = \\sqrt{2 \\times 58.80/3.0} = 6.26 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Mass cancels", text: "$v = \\sqrt{2gh}$, independent of $m$." },
        ],
        result: "$v = 6.26 \\, \\mathrm{m/s}$ at impact."
      },
    ],
    keyTakeaways: [
      "Work and Kinetic Energy is governed by $W = Fd\\cos\\theta$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $K = \\frac{1}{2}mv^2$",
    ],
    quiz: [
      {
        q: "Work $W = Fd\\cos\\theta$ is zero when force is:",
        options: ["parallel", "perpendicular to displacement", "doubled", "constant"],
        answer: 1,
        explanation: "$\\cos 90^\\circ = 0$; carrying a load level does no mechanical work."
      },
      {
        q: "Spring potential energy is:",
        options: ["$kx^2/2$", "$mgh$", "$mv^2$", "$kx$"],
        answer: 0,
        explanation: "Area under $F = kx$ gives $U_s = kx^2/2$."
      },
      {
        q: "A nonconservative force is exemplified by:",
        options: ["kinetic friction", "electrostatic force", "gravity", "spring force"],
        answer: 0,
        explanation: "Friction path-dependence burns mechanical energy into heat."
      },
    ],
  },
  {
    sectionId: "coletta-ch7-s2",
    readingTime: 8,
    intro: "Work reframes dynamics as an energy ledger in which kinetic energy is deposited and withdrawn. Potential energies for gravity and springs make conservation of mechanical energy a powerful shortcut. Worked examples carry real numbers you can verify with a calculator. This section treats Gravitational Potential Energy; Constant Gravitational Force at exam depth.",
    objectives: [
      "State and apply the defining relation of Gravitational Potential Energy; Constant Gravitational Force with correct SI units",
      "Solve a quantitative Gravitational Potential Energy; Constant Gravitational Force problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Gravitational Potential Energy; Constant Gravitational Force reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $U_g = mgh$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $W = Fd\\cos\\theta$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $U_s = \\frac{1}{2}kx^2$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $U_s = \\frac{1}{2}kx^2$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Gravitational Potential Energy; Constant Gravitational Force",
        kind: "definition",
        statement: "**Gravitational Potential Energy; Constant Gravitational Force is governed by $W = Fd\\cos\\theta$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Work to speed up",
        problem: "A $4.0 \\, \\mathrm{kg}$ block accelerates from rest to $v = 5.0 \\, \\mathrm{m/s}$. Find the net work.",
        steps: [
          { label: "Step 1: Kinetic energy", text: "$K = mv^2/2 = 0.5 \\times 4.0 \\times 25.0 = 50.00 \\, \\mathrm{J}$." },
          { label: "Step 2: Work-energy", text: "From rest $W_{net} = \\Delta K = 50.00 \\, \\mathrm{J}$." },
          { label: "Step 3: Check", text: "Positive work deposits energy; braking would remove it." },
        ],
        result: "$W_{net} = 50.00 \\, \\mathrm{J}$."
      },
      {
        title: "Drop converts potential to kinetic",
        problem: "The same block drops $h = 2.5 \\, \\mathrm{m}$. Find impact speed from energy.",
        steps: [
          { label: "Step 1: Loss of potential", text: "$\\Delta U = mgh = 4.0 \\times 9.8 \\times 2.5 = 98.00 \\, \\mathrm{J}$." },
          { label: "Step 2: Gain of kinetic", text: "$mv^2/2 = 98.00$ gives $v = \\sqrt{2 \\times 98.00/4.0} = 7.00 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Mass cancels", text: "$v = \\sqrt{2gh}$, independent of $m$." },
        ],
        result: "$v = 7.00 \\, \\mathrm{m/s}$ at impact."
      },
    ],
    keyTakeaways: [
      "Gravitational Potential Energy; Constant Gravitational Force is governed by $W = Fd\\cos\\theta$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $K = \\frac{1}{2}mv^2$",
    ],
    quiz: [
      {
        q: "Spring potential energy is:",
        options: ["$kx^2/2$", "$mgh$", "$mv^2$", "$kx$"],
        answer: 0,
        explanation: "Area under $F = kx$ gives $U_s = kx^2/2$."
      },
      {
        q: "A nonconservative force is exemplified by:",
        options: ["kinetic friction", "electrostatic force", "gravity", "spring force"],
        answer: 0,
        explanation: "Friction path-dependence burns mechanical energy into heat."
      },
      {
        q: "Work $W = Fd\\cos\\theta$ is zero when force is:",
        options: ["constant", "parallel", "perpendicular to displacement", "doubled"],
        answer: 2,
        explanation: "$\\cos 90^\\circ = 0$; carrying a load level does no mechanical work."
      },
    ],
  },
  {
    sectionId: "coletta-ch7-s3",
    readingTime: 9,
    intro: "Work reframes dynamics as an energy ledger in which kinetic energy is deposited and withdrawn. Potential energies for gravity and springs make conservation of mechanical energy a powerful shortcut. A Closer Look boxes flag the step where beginners most often slip. This section treats Gravitational Potential Energy; Variable Gravitational Force at exam depth.",
    objectives: [
      "State and apply the defining relation of Gravitational Potential Energy; Variable Gravitational Force with correct SI units",
      "Solve a quantitative Gravitational Potential Energy; Variable Gravitational Force problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Gravitational Potential Energy; Variable Gravitational Force reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $U_s = \\frac{1}{2}kx^2$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $U_s = \\frac{1}{2}kx^2$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Gravitational Potential Energy; Variable Gravitational Force",
        kind: "definition",
        statement: "**Gravitational Potential Energy; Variable Gravitational Force is governed by $W = Fd\\cos\\theta$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $K = \\frac{1}{2}mv^2$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $U_g = mgh$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Beam in static equilibrium: pivot and load balance so $\\sum F = 0$ and $\\sum \\tau = 0$.",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="beam in static equilibrium with pivot and load"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><polygon points="80,150 80,170 100,170" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/><line x1="80" y1="140" x2="320" y2="140" stroke="currentColor" stroke-width="3"/><line x1="150" y1="140" x2="150" y2="100" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/><polygon points="150,100 146,110 154,110" fill="currentColor"/><line x1="280" y1="140" x2="280" y2="175" stroke="currentColor" stroke-width="2"/><polygon points="280,175 276,165 284,165" fill="currentColor"/><circle cx="280" cy="150" r="10" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="200" y="125" font-size="12" fill="currentColor">sum of F = 0, sum of torque = 0</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Work to speed up",
        problem: "A $5.0 \\, \\mathrm{kg}$ block accelerates from rest to $v = 6.0 \\, \\mathrm{m/s}$. Find the net work.",
        steps: [
          { label: "Step 1: Kinetic energy", text: "$K = mv^2/2 = 0.5 \\times 5.0 \\times 36.0 = 90.00 \\, \\mathrm{J}$." },
          { label: "Step 2: Work-energy", text: "From rest $W_{net} = \\Delta K = 90.00 \\, \\mathrm{J}$." },
          { label: "Step 3: Check", text: "Positive work deposits energy; braking would remove it." },
        ],
        result: "$W_{net} = 90.00 \\, \\mathrm{J}$."
      },
      {
        title: "Drop converts potential to kinetic",
        problem: "The same block drops $h = 3.0 \\, \\mathrm{m}$. Find impact speed from energy.",
        steps: [
          { label: "Step 1: Loss of potential", text: "$\\Delta U = mgh = 5.0 \\times 9.8 \\times 3.0 = 147.00 \\, \\mathrm{J}$." },
          { label: "Step 2: Gain of kinetic", text: "$mv^2/2 = 147.00$ gives $v = \\sqrt{2 \\times 147.00/5.0} = 7.67 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Mass cancels", text: "$v = \\sqrt{2gh}$, independent of $m$." },
        ],
        result: "$v = 7.67 \\, \\mathrm{m/s}$ at impact."
      },
    ],
    keyTakeaways: [
      "Gravitational Potential Energy; Variable Gravitational Force is governed by $W = Fd\\cos\\theta$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $K = \\frac{1}{2}mv^2$",
    ],
    quiz: [
      {
        q: "A nonconservative force is exemplified by:",
        options: ["kinetic friction", "electrostatic force", "gravity", "spring force"],
        answer: 0,
        explanation: "Friction path-dependence burns mechanical energy into heat."
      },
      {
        q: "Work $W = Fd\\cos\\theta$ is zero when force is:",
        options: ["constant", "parallel", "perpendicular to displacement", "doubled"],
        answer: 2,
        explanation: "$\\cos 90^\\circ = 0$; carrying a load level does no mechanical work."
      },
      {
        q: "Spring potential energy is:",
        options: ["$kx$", "$kx^2/2$", "$mgh$", "$mv^2$"],
        answer: 1,
        explanation: "Area under $F = kx$ gives $U_s = kx^2/2$."
      },
    ],
  },
  {
    sectionId: "coletta-ch7-s4",
    readingTime: 4,
    intro: "Work reframes dynamics as an energy ledger in which kinetic energy is deposited and withdrawn. Potential energies for gravity and springs make conservation of mechanical energy a powerful shortcut. End-of-section objectives tell you what to reproduce closed-book. This section treats Spring Potential Energy; Conservation of Energy at exam depth.",
    objectives: [
      "State and apply the defining relation of Spring Potential Energy; Conservation of Energy with correct SI units",
      "Solve a quantitative Spring Potential Energy; Conservation of Energy problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Spring Potential Energy; Conservation of Energy reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Spring Potential Energy; Conservation of Energy",
        kind: "definition",
        statement: "**Spring Potential Energy; Conservation of Energy is governed by $W = Fd\\cos\\theta$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $K = \\frac{1}{2}mv^2$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $U_g = mgh$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $W = Fd\\cos\\theta$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $U_s = \\frac{1}{2}kx^2$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    examples: [
      {
        title: "Work to speed up",
        problem: "A $6.0 \\, \\mathrm{kg}$ block accelerates from rest to $v = 7.0 \\, \\mathrm{m/s}$. Find the net work.",
        steps: [
          { label: "Step 1: Kinetic energy", text: "$K = mv^2/2 = 0.5 \\times 6.0 \\times 49.0 = 147.00 \\, \\mathrm{J}$." },
          { label: "Step 2: Work-energy", text: "From rest $W_{net} = \\Delta K = 147.00 \\, \\mathrm{J}$." },
          { label: "Step 3: Check", text: "Positive work deposits energy; braking would remove it." },
        ],
        result: "$W_{net} = 147.00 \\, \\mathrm{J}$."
      },
      {
        title: "Drop converts potential to kinetic",
        problem: "The same block drops $h = 3.5 \\, \\mathrm{m}$. Find impact speed from energy.",
        steps: [
          { label: "Step 1: Loss of potential", text: "$\\Delta U = mgh = 6.0 \\times 9.8 \\times 3.5 = 205.80 \\, \\mathrm{J}$." },
          { label: "Step 2: Gain of kinetic", text: "$mv^2/2 = 205.80$ gives $v = \\sqrt{2 \\times 205.80/6.0} = 8.28 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Mass cancels", text: "$v = \\sqrt{2gh}$, independent of $m$." },
        ],
        result: "$v = 8.28 \\, \\mathrm{m/s}$ at impact."
      },
    ],
    keyTakeaways: [
      "Spring Potential Energy; Conservation of Energy is governed by $W = Fd\\cos\\theta$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $K = \\frac{1}{2}mv^2$",
    ],
    quiz: [
      {
        q: "Work $W = Fd\\cos\\theta$ is zero when force is:",
        options: ["constant", "parallel", "perpendicular to displacement", "doubled"],
        answer: 2,
        explanation: "$\\cos 90^\\circ = 0$; carrying a load level does no mechanical work."
      },
      {
        q: "Spring potential energy is:",
        options: ["$kx$", "$kx^2/2$", "$mgh$", "$mv^2$"],
        answer: 1,
        explanation: "Area under $F = kx$ gives $U_s = kx^2/2$."
      },
      {
        q: "A nonconservative force is exemplified by:",
        options: ["spring force", "kinetic friction", "electrostatic force", "gravity"],
        answer: 1,
        explanation: "Friction path-dependence burns mechanical energy into heat."
      },
    ],
  },
  {
    sectionId: "coletta-ch7-s5",
    readingTime: 5,
    intro: "Work reframes dynamics as an energy ledger in which kinetic energy is deposited and withdrawn. Potential energies for gravity and springs make conservation of mechanical energy a powerful shortcut. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Conservative and Nonconservative Forces at exam depth.",
    objectives: [
      "State and apply the defining relation of Conservative and Nonconservative Forces with correct SI units",
      "Solve a quantitative Conservative and Nonconservative Forces problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Conservative and Nonconservative Forces reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $U_g = mgh$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $W = Fd\\cos\\theta$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $U_s = \\frac{1}{2}kx^2$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $U_s = \\frac{1}{2}kx^2$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Conservative and Nonconservative Forces",
        kind: "definition",
        statement: "**Conservative and Nonconservative Forces is governed by $W = Fd\\cos\\theta$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    figures: [
      {
        caption: "Gas molecules colliding with the box walls: each hit transfers momentum, and the hits add up to $pV = NkT$.",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="gas molecules colliding with box walls"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><rect x="110" y="50" width="130" height="100" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="140" cy="80" r="4" fill="currentColor"/><line x1="140" y1="80" x2="160" y2="70" stroke="currentColor" stroke-width="1.5"/><circle cx="180" cy="110" r="4" fill="currentColor"/><line x1="180" y1="110" x2="162" y2="98" stroke="currentColor" stroke-width="1.5"/><circle cx="210" cy="85" r="4" fill="currentColor"/><line x1="210" y1="85" x2="225" y2="97" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="125" r="4" fill="currentColor"/><line x1="150" y1="125" x2="172" y2="133" stroke="currentColor" stroke-width="1.5"/><text x="260" y="100" font-size="12" fill="currentColor">p V = N k T</text><text x="260" y="120" font-size="12" fill="currentColor">hits give pressure</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Work to speed up",
        problem: "A $7.0 \\, \\mathrm{kg}$ block accelerates from rest to $v = 8.0 \\, \\mathrm{m/s}$. Find the net work.",
        steps: [
          { label: "Step 1: Kinetic energy", text: "$K = mv^2/2 = 0.5 \\times 7.0 \\times 64.0 = 224.00 \\, \\mathrm{J}$." },
          { label: "Step 2: Work-energy", text: "From rest $W_{net} = \\Delta K = 224.00 \\, \\mathrm{J}$." },
          { label: "Step 3: Check", text: "Positive work deposits energy; braking would remove it." },
        ],
        result: "$W_{net} = 224.00 \\, \\mathrm{J}$."
      },
      {
        title: "Drop converts potential to kinetic",
        problem: "The same block drops $h = 4.0 \\, \\mathrm{m}$. Find impact speed from energy.",
        steps: [
          { label: "Step 1: Loss of potential", text: "$\\Delta U = mgh = 7.0 \\times 9.8 \\times 4.0 = 274.40 \\, \\mathrm{J}$." },
          { label: "Step 2: Gain of kinetic", text: "$mv^2/2 = 274.40$ gives $v = \\sqrt{2 \\times 274.40/7.0} = 8.85 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Mass cancels", text: "$v = \\sqrt{2gh}$, independent of $m$." },
        ],
        result: "$v = 8.85 \\, \\mathrm{m/s}$ at impact."
      },
    ],
    keyTakeaways: [
      "Conservative and Nonconservative Forces is governed by $W = Fd\\cos\\theta$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $K = \\frac{1}{2}mv^2$",
    ],
    quiz: [
      {
        q: "Spring potential energy is:",
        options: ["$kx$", "$kx^2/2$", "$mgh$", "$mv^2$"],
        answer: 1,
        explanation: "Area under $F = kx$ gives $U_s = kx^2/2$."
      },
      {
        q: "A nonconservative force is exemplified by:",
        options: ["spring force", "kinetic friction", "electrostatic force", "gravity"],
        answer: 1,
        explanation: "Friction path-dependence burns mechanical energy into heat."
      },
      {
        q: "Work $W = Fd\\cos\\theta$ is zero when force is:",
        options: ["doubled", "constant", "parallel", "perpendicular to displacement"],
        answer: 3,
        explanation: "$\\cos 90^\\circ = 0$; carrying a load level does no mechanical work."
      },
    ],
  },
  {
    sectionId: "coletta-ch7-s6",
    readingTime: 6,
    intro: "Work reframes dynamics as an energy ledger in which kinetic energy is deposited and withdrawn. Potential energies for gravity and springs make conservation of mechanical energy a powerful shortcut. Worked examples carry real numbers you can verify with a calculator. This section treats Power at exam depth.",
    objectives: [
      "State and apply the defining relation of Power with correct SI units",
      "Solve a quantitative Power problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Power reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $U_s = \\frac{1}{2}kx^2$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $U_s = \\frac{1}{2}kx^2$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Power",
        kind: "definition",
        statement: "**Power is governed by $W = Fd\\cos\\theta$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $K = \\frac{1}{2}mv^2$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $U_g = mgh$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    examples: [
      {
        title: "Work to speed up",
        problem: "A $8.0 \\, \\mathrm{kg}$ block accelerates from rest to $v = 9.0 \\, \\mathrm{m/s}$. Find the net work.",
        steps: [
          { label: "Step 1: Kinetic energy", text: "$K = mv^2/2 = 0.5 \\times 8.0 \\times 81.0 = 324.00 \\, \\mathrm{J}$." },
          { label: "Step 2: Work-energy", text: "From rest $W_{net} = \\Delta K = 324.00 \\, \\mathrm{J}$." },
          { label: "Step 3: Check", text: "Positive work deposits energy; braking would remove it." },
        ],
        result: "$W_{net} = 324.00 \\, \\mathrm{J}$."
      },
      {
        title: "Drop converts potential to kinetic",
        problem: "The same block drops $h = 4.5 \\, \\mathrm{m}$. Find impact speed from energy.",
        steps: [
          { label: "Step 1: Loss of potential", text: "$\\Delta U = mgh = 8.0 \\times 9.8 \\times 4.5 = 352.80 \\, \\mathrm{J}$." },
          { label: "Step 2: Gain of kinetic", text: "$mv^2/2 = 352.80$ gives $v = \\sqrt{2 \\times 352.80/8.0} = 9.39 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Mass cancels", text: "$v = \\sqrt{2gh}$, independent of $m$." },
        ],
        result: "$v = 9.39 \\, \\mathrm{m/s}$ at impact."
      },
    ],
    keyTakeaways: [
      "Power is governed by $W = Fd\\cos\\theta$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $K = \\frac{1}{2}mv^2$",
    ],
    quiz: [
      {
        q: "A nonconservative force is exemplified by:",
        options: ["spring force", "kinetic friction", "electrostatic force", "gravity"],
        answer: 1,
        explanation: "Friction path-dependence burns mechanical energy into heat."
      },
      {
        q: "Work $W = Fd\\cos\\theta$ is zero when force is:",
        options: ["doubled", "constant", "parallel", "perpendicular to displacement"],
        answer: 3,
        explanation: "$\\cos 90^\\circ = 0$; carrying a load level does no mechanical work."
      },
      {
        q: "Spring potential energy is:",
        options: ["$mv^2$", "$kx$", "$kx^2/2$", "$mgh$"],
        answer: 2,
        explanation: "Area under $F = kx$ gives $U_s = kx^2/2$."
      },
    ],
  },
  {
    sectionId: "coletta-ch7-s7",
    readingTime: 7,
    intro: "Work reframes dynamics as an energy ledger in which kinetic energy is deposited and withdrawn. Potential energies for gravity and springs make conservation of mechanical energy a powerful shortcut. A Closer Look boxes flag the step where beginners most often slip. This section treats Energy of a System of Particles at exam depth.",
    objectives: [
      "State and apply the defining relation of Energy of a System of Particles with correct SI units",
      "Solve a quantitative Energy of a System of Particles problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Energy of a System of Particles reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Energy of a System of Particles",
        kind: "definition",
        statement: "**Energy of a System of Particles is governed by $W = Fd\\cos\\theta$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $K = \\frac{1}{2}mv^2$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $U_g = mgh$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $W = Fd\\cos\\theta$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $U_s = \\frac{1}{2}kx^2$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Simple harmonic motion as a sine wave: $x = A\\cos(\\omega t + \\phi)$ oscillates about equilibrium.",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="sine wave of simple harmonic motion"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="40" y1="100" x2="360" y2="100" stroke="currentColor" stroke-width="1.2"/><path d="M 40 100 Q 80 30 120 100 T 200 100 T 280 100 T 360 100" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="40" y1="20" x2="40" y2="180" stroke="currentColor" stroke-width="1.2"/><text x="200" y="170" font-size="12" text-anchor="middle" fill="currentColor">x = A cos(omega t + phi)</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Work to speed up",
        problem: "A $9.0 \\, \\mathrm{kg}$ block accelerates from rest to $v = 10.0 \\, \\mathrm{m/s}$. Find the net work.",
        steps: [
          { label: "Step 1: Kinetic energy", text: "$K = mv^2/2 = 0.5 \\times 9.0 \\times 100.0 = 450.00 \\, \\mathrm{J}$." },
          { label: "Step 2: Work-energy", text: "From rest $W_{net} = \\Delta K = 450.00 \\, \\mathrm{J}$." },
          { label: "Step 3: Check", text: "Positive work deposits energy; braking would remove it." },
        ],
        result: "$W_{net} = 450.00 \\, \\mathrm{J}$."
      },
      {
        title: "Drop converts potential to kinetic",
        problem: "The same block drops $h = 5.0 \\, \\mathrm{m}$. Find impact speed from energy.",
        steps: [
          { label: "Step 1: Loss of potential", text: "$\\Delta U = mgh = 9.0 \\times 9.8 \\times 5.0 = 441.00 \\, \\mathrm{J}$." },
          { label: "Step 2: Gain of kinetic", text: "$mv^2/2 = 441.00$ gives $v = \\sqrt{2 \\times 441.00/9.0} = 9.90 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Mass cancels", text: "$v = \\sqrt{2gh}$, independent of $m$." },
        ],
        result: "$v = 9.90 \\, \\mathrm{m/s}$ at impact."
      },
    ],
    keyTakeaways: [
      "Energy of a System of Particles is governed by $W = Fd\\cos\\theta$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $K = \\frac{1}{2}mv^2$",
    ],
    quiz: [
      {
        q: "Work $W = Fd\\cos\\theta$ is zero when force is:",
        options: ["doubled", "constant", "parallel", "perpendicular to displacement"],
        answer: 3,
        explanation: "$\\cos 90^\\circ = 0$; carrying a load level does no mechanical work."
      },
      {
        q: "Spring potential energy is:",
        options: ["$mv^2$", "$kx$", "$kx^2/2$", "$mgh$"],
        answer: 2,
        explanation: "Area under $F = kx$ gives $U_s = kx^2/2$."
      },
      {
        q: "A nonconservative force is exemplified by:",
        options: ["gravity", "spring force", "kinetic friction", "electrostatic force"],
        answer: 2,
        explanation: "Friction path-dependence burns mechanical energy into heat."
      },
    ],
  },
]

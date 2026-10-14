import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 5
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh5Content: SectionContent[] = [
  {
    sectionId: "coletta-ch5-s1",
    readingTime: 7,
    intro: "Real surfaces grip and drag, so friction joins the force inventory before centripetal applications and the center of mass extend Newton to curves and systems. Banked curves and skids show the theory at work. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Friction at exam depth.",
    objectives: [
      "State and apply the defining relation of Friction with correct SI units",
      "Solve a quantitative Friction problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Friction reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Friction",
        kind: "definition",
        statement: "**Friction is governed by $f_s \\le \\mu_s N$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $f_k = \\mu_k N$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $F_c = \\frac{mv^2}{r}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $f_s \\le \\mu_s N$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $x_{cm} = \\frac{\\sum m_i x_i}{M}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Friction and centripetal geometry with $f_s \\le \\mu_s N$ and $F_c = mv^2/r$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="planet in elliptical orbit about the sun"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><circle cx="200" cy="100" r="18" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/><ellipse cx="200" cy="100" rx="130" ry="60" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="330" cy="100" r="7" fill="currentColor"/><line x1="200" y1="100" x2="330" y2="100" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><text x="250" y="90" font-size="12" fill="currentColor">r</text><text x="185" y="150" font-size="12" fill="currentColor">F = G M m / r squared</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Kinetic friction drag",
        problem: "A $5.0 \\, \\mathrm{kg}$ crate slides with $\\mu_k = 0.30$. Find the friction force.",
        steps: [
          { label: "Step 1: Normal", text: "On level ground $N = mg = 5.0 \\times 9.8 = 49.00 \\, \\mathrm{N}$." },
          { label: "Step 2: Friction", text: "$f_k = \\mu_k N = 0.30 \\times 49.00 = 14.70 \\, \\mathrm{N}$." },
          { label: "Step 3: Direction", text: "Friction opposes the sliding velocity." },
        ],
        result: "$f_k = 14.70 \\, \\mathrm{N}$ opposing motion."
      },
      {
        title: "Flat-curve speed limit",
        problem: "A car rounds an unbanked curve $r = 40 \\, \\mathrm{m}$ with $\\mu_s = 0.30$. Find maximum $v$.",
        steps: [
          { label: "Step 1: Requirement", text: "Friction supplies $mv^2/r \\le \\mu_s mg$." },
          { label: "Step 2: Cancel mass", text: "$v \\le \\sqrt{\\mu_s g r} = \\sqrt{0.30 \\times 9.8 \\times 40} = 10.84 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Meaning", text: "Heavier cars do not corner faster; $m$ cancels." },
        ],
        result: "$v_{max} = 10.84 \\, \\mathrm{m/s}$."
      },
    ],
    keyTakeaways: [
      "Friction is governed by $f_s \\le \\mu_s N$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $f_k = \\mu_k N$",
    ],
    quiz: [
      {
        q: "Static friction satisfies:",
        options: ["$f_s = \\mu_s N$ always", "$f_s \\le \\mu_s N$", "$f_s = 0$ always", "$f_s = mg$"],
        answer: 1,
        explanation: "Static friction matches demand up to the cap $\\mu_s N$."
      },
      {
        q: "Centripetal force on a flat curve comes from:",
        options: ["static friction", "normal force", "air", "gravity"],
        answer: 0,
        explanation: "Sideways static friction bends the car; $mv^2/r \\le \\mu_s mg$."
      },
      {
        q: "The center of mass moves as if:",
        options: ["only torque acted", "mass were zero", "no forces act", "all mass and net external force acted there"],
        answer: 3,
        explanation: "$Ma_{cm} = F_{ext}$ even while parts move relative to it."
      },
    ],
  },
  {
    sectionId: "coletta-ch5-s2",
    readingTime: 8,
    intro: "Real surfaces grip and drag, so friction joins the force inventory before centripetal applications and the center of mass extend Newton to curves and systems. Banked curves and skids show the theory at work. Worked examples carry real numbers you can verify with a calculator. This section treats Centripetal Force at exam depth.",
    objectives: [
      "State and apply the defining relation of Centripetal Force with correct SI units",
      "Solve a quantitative Centripetal Force problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Centripetal Force reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $F_c = \\frac{mv^2}{r}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $f_s \\le \\mu_s N$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $x_{cm} = \\frac{\\sum m_i x_i}{M}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $x_{cm} = \\frac{\\sum m_i x_i}{M}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Centripetal Force",
        kind: "definition",
        statement: "**Centripetal Force is governed by $f_s \\le \\mu_s N$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Kinetic friction drag",
        problem: "A $6.0 \\, \\mathrm{kg}$ crate slides with $\\mu_k = 0.35$. Find the friction force.",
        steps: [
          { label: "Step 1: Normal", text: "On level ground $N = mg = 6.0 \\times 9.8 = 58.80 \\, \\mathrm{N}$." },
          { label: "Step 2: Friction", text: "$f_k = \\mu_k N = 0.35 \\times 58.80 = 20.58 \\, \\mathrm{N}$." },
          { label: "Step 3: Direction", text: "Friction opposes the sliding velocity." },
        ],
        result: "$f_k = 20.58 \\, \\mathrm{N}$ opposing motion."
      },
      {
        title: "Flat-curve speed limit",
        problem: "A car rounds an unbanked curve $r = 40 \\, \\mathrm{m}$ with $\\mu_s = 0.35$. Find maximum $v$.",
        steps: [
          { label: "Step 1: Requirement", text: "Friction supplies $mv^2/r \\le \\mu_s mg$." },
          { label: "Step 2: Cancel mass", text: "$v \\le \\sqrt{\\mu_s g r} = \\sqrt{0.35 \\times 9.8 \\times 40} = 11.71 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Meaning", text: "Heavier cars do not corner faster; $m$ cancels." },
        ],
        result: "$v_{max} = 11.71 \\, \\mathrm{m/s}$."
      },
    ],
    keyTakeaways: [
      "Centripetal Force is governed by $f_s \\le \\mu_s N$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $f_k = \\mu_k N$",
    ],
    quiz: [
      {
        q: "Centripetal force on a flat curve comes from:",
        options: ["static friction", "normal force", "air", "gravity"],
        answer: 0,
        explanation: "Sideways static friction bends the car; $mv^2/r \\le \\mu_s mg$."
      },
      {
        q: "The center of mass moves as if:",
        options: ["only torque acted", "mass were zero", "no forces act", "all mass and net external force acted there"],
        answer: 3,
        explanation: "$Ma_{cm} = F_{ext}$ even while parts move relative to it."
      },
      {
        q: "Static friction satisfies:",
        options: ["$f_s = mg$", "$f_s = \\mu_s N$ always", "$f_s \\le \\mu_s N$", "$f_s = 0$ always"],
        answer: 2,
        explanation: "Static friction matches demand up to the cap $\\mu_s N$."
      },
    ],
  },
  {
    sectionId: "coletta-ch5-s3",
    readingTime: 9,
    intro: "Real surfaces grip and drag, so friction joins the force inventory before centripetal applications and the center of mass extend Newton to curves and systems. Banked curves and skids show the theory at work. A Closer Look boxes flag the step where beginners most often slip. This section treats Center of Mass at exam depth.",
    objectives: [
      "State and apply the defining relation of Center of Mass with correct SI units",
      "Solve a quantitative Center of Mass problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Center of Mass reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $x_{cm} = \\frac{\\sum m_i x_i}{M}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $x_{cm} = \\frac{\\sum m_i x_i}{M}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Center of Mass",
        kind: "definition",
        statement: "**Center of Mass is governed by $f_s \\le \\mu_s N$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $f_k = \\mu_k N$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $F_c = \\frac{mv^2}{r}$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Friction and centripetal geometry with $f_s \\le \\mu_s N$ and $F_c = mv^2/r$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="two carts before a collision on a track"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><circle cx="120" cy="100" r="18" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/><circle cx="260" cy="100" r="14" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><line x1="140" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="2"/><polygon points="200,100 190,96 190,104" fill="currentColor"/><line x1="246" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/><text x="120" y="140" font-size="12" text-anchor="middle" fill="currentColor">m1 v1</text><text x="260" y="140" font-size="12" text-anchor="middle" fill="currentColor">m2 at rest</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Kinetic friction drag",
        problem: "A $7.0 \\, \\mathrm{kg}$ crate slides with $\\mu_k = 0.40$. Find the friction force.",
        steps: [
          { label: "Step 1: Normal", text: "On level ground $N = mg = 7.0 \\times 9.8 = 68.60 \\, \\mathrm{N}$." },
          { label: "Step 2: Friction", text: "$f_k = \\mu_k N = 0.40 \\times 68.60 = 27.44 \\, \\mathrm{N}$." },
          { label: "Step 3: Direction", text: "Friction opposes the sliding velocity." },
        ],
        result: "$f_k = 27.44 \\, \\mathrm{N}$ opposing motion."
      },
      {
        title: "Flat-curve speed limit",
        problem: "A car rounds an unbanked curve $r = 40 \\, \\mathrm{m}$ with $\\mu_s = 0.40$. Find maximum $v$.",
        steps: [
          { label: "Step 1: Requirement", text: "Friction supplies $mv^2/r \\le \\mu_s mg$." },
          { label: "Step 2: Cancel mass", text: "$v \\le \\sqrt{\\mu_s g r} = \\sqrt{0.40 \\times 9.8 \\times 40} = 12.52 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Meaning", text: "Heavier cars do not corner faster; $m$ cancels." },
        ],
        result: "$v_{max} = 12.52 \\, \\mathrm{m/s}$."
      },
    ],
    keyTakeaways: [
      "Center of Mass is governed by $f_s \\le \\mu_s N$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $f_k = \\mu_k N$",
    ],
    quiz: [
      {
        q: "The center of mass moves as if:",
        options: ["only torque acted", "mass were zero", "no forces act", "all mass and net external force acted there"],
        answer: 3,
        explanation: "$Ma_{cm} = F_{ext}$ even while parts move relative to it."
      },
      {
        q: "Static friction satisfies:",
        options: ["$f_s = mg$", "$f_s = \\mu_s N$ always", "$f_s \\le \\mu_s N$", "$f_s = 0$ always"],
        answer: 2,
        explanation: "Static friction matches demand up to the cap $\\mu_s N$."
      },
      {
        q: "Centripetal force on a flat curve comes from:",
        options: ["gravity", "static friction", "normal force", "air"],
        answer: 1,
        explanation: "Sideways static friction bends the car; $mv^2/r \\le \\mu_s mg$."
      },
    ],
  },
]

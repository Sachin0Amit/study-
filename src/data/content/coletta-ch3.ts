import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 3
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh3Content: SectionContent[] = [
  {
    sectionId: "coletta-ch3-s1",
    readingTime: 7,
    intro: "Motion in a plane separates into independent horizontal and vertical parts plus a centripetal part whenever the path curves. Projectiles, circular motion, and moving frames all follow from this split. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Acceleration on a Curved Path at exam depth.",
    objectives: [
      "State and apply the defining relation of Acceleration on a Curved Path with correct SI units",
      "Solve a quantitative Acceleration on a Curved Path problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Acceleration on a Curved Path reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Acceleration on a Curved Path",
        kind: "definition",
        statement: "**Acceleration on a Curved Path is governed by $a_c = \\frac{v^2}{r}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $R = \\frac{v_0^2 \\sin 2\\theta}{g}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $v = \\omega r$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $a_c = \\frac{v^2}{r}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $\\vec{v}_{rel} = \\vec{v} - \\vec{V}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Projectile path $y = x\\tan\\theta - gx^2/(2v_0^2\\cos^2\\theta)$ with range $R$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="projectile parabola with launch vector and range"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="30" y1="170" x2="370" y2="170" stroke="currentColor" stroke-width="1.5"/><path d="M 50 165 Q 190 20 340 165" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="50" y1="165" x2="120" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="120,120 108,120 112,130" fill="currentColor"/><circle cx="190" cy="93" r="5" fill="currentColor"/><circle cx="270" cy="118" r="5" fill="currentColor" fill-opacity="0.4"/><text x="60" y="60" font-size="12" fill="currentColor">v0 at angle theta</text><text x="180" y="185" font-size="12" fill="currentColor">range R</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Projectile range and hang time",
        problem: "A ball is launched at $v_0 = 20.0 \\, \\mathrm{m/s}$, $\\theta = 30.0^\\circ$. Find range and time aloft.",
        steps: [
          { label: "Step 1: Components", text: "$v_{0x} = v_0\\cos\\theta = 17.32 \\, \\mathrm{m/s}$, $v_{0y} = v_0\\sin\\theta = 10.00 \\, \\mathrm{m/s}$." },
          { label: "Step 2: Hang time", text: "$T = 2v_{0y}/g = 2.04 \\, \\mathrm{s}$." },
          { label: "Step 3: Range", text: "$R = v_{0x}T = 35.35 \\, \\mathrm{m}$." },
        ],
        result: "$T = 2.04 \\, \\mathrm{s}$, $R = 35.35 \\, \\mathrm{m}$."
      },
      {
        title: "Centripetal acceleration on the curve",
        problem: "A car at $v = %.1f \\, \\mathrm{m/s}$ rounds a curve of radius $r = 50 \\, \\mathrm{m}$. Find $a_c$.",
        steps: [
          { label: "Step 1: Formula", text: "$a_c = v^2/r$ toward the center." },
          { label: "Step 2: Substitute", text: "$a_c = (20.0)^2/50 = 400.0/50 = 8.00 \\, \\mathrm{m/s^2}$." },
          { label: "Step 3: Compare", text: "That is $0.82$ times $g$, requiring friction or banking." },
        ],
        result: "$a_c = 8.00 \\, \\mathrm{m/s^2}$ toward the center."
      },
    ],
    keyTakeaways: [
      "Acceleration on a Curved Path is governed by $a_c = \\frac{v^2}{r}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $R = \\frac{v_0^2 \\sin 2\\theta}{g}$",
    ],
    quiz: [
      {
        q: "Centripetal acceleration points:",
        options: ["along velocity", "toward the center of curvature", "away from center", "vertically always"],
        answer: 1,
        explanation: "$a_c = v^2/r$ bends the velocity vector inward."
      },
      {
        q: "Projectile horizontal motion (no air) has:",
        options: ["constant acceleration", "zero velocity", "increasing mass", "constant velocity"],
        answer: 3,
        explanation: "No horizontal force means $a_x = 0$ and $x = v_{0x}t$."
      },
      {
        q: "Maximum projectile range for given speed is at:",
        options: ["60 degrees", "90 degrees", "30 degrees", "45 degrees"],
        answer: 3,
        explanation: "$R = v_0^2\\sin 2\\theta/g$ peaks when $\\sin 2\\theta = 1$."
      },
    ],
  },
  {
    sectionId: "coletta-ch3-s2",
    readingTime: 8,
    intro: "Motion in a plane separates into independent horizontal and vertical parts plus a centripetal part whenever the path curves. Projectiles, circular motion, and moving frames all follow from this split. Worked examples carry real numbers you can verify with a calculator. This section treats Projectile Motion at exam depth.",
    objectives: [
      "State and apply the defining relation of Projectile Motion with correct SI units",
      "Solve a quantitative Projectile Motion problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Projectile Motion reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $v = \\omega r$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $a_c = \\frac{v^2}{r}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $\\vec{v}_{rel} = \\vec{v} - \\vec{V}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $\\vec{v}_{rel} = \\vec{v} - \\vec{V}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Projectile Motion",
        kind: "definition",
        statement: "**Projectile Motion is governed by $a_c = \\frac{v^2}{r}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Projectile range and hang time",
        problem: "A ball is launched at $v_0 = 22.0 \\, \\mathrm{m/s}$, $\\theta = 35.0^\\circ$. Find range and time aloft.",
        steps: [
          { label: "Step 1: Components", text: "$v_{0x} = v_0\\cos\\theta = 18.02 \\, \\mathrm{m/s}$, $v_{0y} = v_0\\sin\\theta = 12.62 \\, \\mathrm{m/s}$." },
          { label: "Step 2: Hang time", text: "$T = 2v_{0y}/g = 2.58 \\, \\mathrm{s}$." },
          { label: "Step 3: Range", text: "$R = v_{0x}T = 46.41 \\, \\mathrm{m}$." },
        ],
        result: "$T = 2.58 \\, \\mathrm{s}$, $R = 46.41 \\, \\mathrm{m}$."
      },
      {
        title: "Centripetal acceleration on the curve",
        problem: "A car at $v = %.1f \\, \\mathrm{m/s}$ rounds a curve of radius $r = 50 \\, \\mathrm{m}$. Find $a_c$.",
        steps: [
          { label: "Step 1: Formula", text: "$a_c = v^2/r$ toward the center." },
          { label: "Step 2: Substitute", text: "$a_c = (22.0)^2/50 = 484.0/50 = 9.68 \\, \\mathrm{m/s^2}$." },
          { label: "Step 3: Compare", text: "That is $0.99$ times $g$, requiring friction or banking." },
        ],
        result: "$a_c = 9.68 \\, \\mathrm{m/s^2}$ toward the center."
      },
    ],
    keyTakeaways: [
      "Projectile Motion is governed by $a_c = \\frac{v^2}{r}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $R = \\frac{v_0^2 \\sin 2\\theta}{g}$",
    ],
    quiz: [
      {
        q: "Projectile horizontal motion (no air) has:",
        options: ["constant acceleration", "zero velocity", "increasing mass", "constant velocity"],
        answer: 3,
        explanation: "No horizontal force means $a_x = 0$ and $x = v_{0x}t$."
      },
      {
        q: "Maximum projectile range for given speed is at:",
        options: ["60 degrees", "90 degrees", "30 degrees", "45 degrees"],
        answer: 3,
        explanation: "$R = v_0^2\\sin 2\\theta/g$ peaks when $\\sin 2\\theta = 1$."
      },
      {
        q: "Centripetal acceleration points:",
        options: ["vertically always", "along velocity", "toward the center of curvature", "away from center"],
        answer: 2,
        explanation: "$a_c = v^2/r$ bends the velocity vector inward."
      },
    ],
  },
  {
    sectionId: "coletta-ch3-s3",
    readingTime: 9,
    intro: "Motion in a plane separates into independent horizontal and vertical parts plus a centripetal part whenever the path curves. Projectiles, circular motion, and moving frames all follow from this split. A Closer Look boxes flag the step where beginners most often slip. This section treats Circular Motion at exam depth.",
    objectives: [
      "State and apply the defining relation of Circular Motion with correct SI units",
      "Solve a quantitative Circular Motion problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Circular Motion reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $\\vec{v}_{rel} = \\vec{v} - \\vec{V}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $\\vec{v}_{rel} = \\vec{v} - \\vec{V}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Circular Motion",
        kind: "definition",
        statement: "**Circular Motion is governed by $a_c = \\frac{v^2}{r}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $R = \\frac{v_0^2 \\sin 2\\theta}{g}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $v = \\omega r$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Projectile path $y = x\\tan\\theta - gx^2/(2v_0^2\\cos^2\\theta)$ with range $R$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="planet in elliptical orbit about the sun"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><circle cx="200" cy="100" r="18" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/><ellipse cx="200" cy="100" rx="130" ry="60" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="330" cy="100" r="7" fill="currentColor"/><line x1="200" y1="100" x2="330" y2="100" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><text x="250" y="90" font-size="12" fill="currentColor">r</text><text x="185" y="150" font-size="12" fill="currentColor">F = G M m / r squared</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Projectile range and hang time",
        problem: "A ball is launched at $v_0 = 24.0 \\, \\mathrm{m/s}$, $\\theta = 40.0^\\circ$. Find range and time aloft.",
        steps: [
          { label: "Step 1: Components", text: "$v_{0x} = v_0\\cos\\theta = 18.39 \\, \\mathrm{m/s}$, $v_{0y} = v_0\\sin\\theta = 15.43 \\, \\mathrm{m/s}$." },
          { label: "Step 2: Hang time", text: "$T = 2v_{0y}/g = 3.15 \\, \\mathrm{s}$." },
          { label: "Step 3: Range", text: "$R = v_{0x}T = 57.88 \\, \\mathrm{m}$." },
        ],
        result: "$T = 3.15 \\, \\mathrm{s}$, $R = 57.88 \\, \\mathrm{m}$."
      },
      {
        title: "Centripetal acceleration on the curve",
        problem: "A car at $v = %.1f \\, \\mathrm{m/s}$ rounds a curve of radius $r = 50 \\, \\mathrm{m}$. Find $a_c$.",
        steps: [
          { label: "Step 1: Formula", text: "$a_c = v^2/r$ toward the center." },
          { label: "Step 2: Substitute", text: "$a_c = (24.0)^2/50 = 576.0/50 = 11.52 \\, \\mathrm{m/s^2}$." },
          { label: "Step 3: Compare", text: "That is $1.18$ times $g$, requiring friction or banking." },
        ],
        result: "$a_c = 11.52 \\, \\mathrm{m/s^2}$ toward the center."
      },
    ],
    keyTakeaways: [
      "Circular Motion is governed by $a_c = \\frac{v^2}{r}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $R = \\frac{v_0^2 \\sin 2\\theta}{g}$",
    ],
    quiz: [
      {
        q: "Maximum projectile range for given speed is at:",
        options: ["60 degrees", "90 degrees", "30 degrees", "45 degrees"],
        answer: 3,
        explanation: "$R = v_0^2\\sin 2\\theta/g$ peaks when $\\sin 2\\theta = 1$."
      },
      {
        q: "Centripetal acceleration points:",
        options: ["vertically always", "along velocity", "toward the center of curvature", "away from center"],
        answer: 2,
        explanation: "$a_c = v^2/r$ bends the velocity vector inward."
      },
      {
        q: "Projectile horizontal motion (no air) has:",
        options: ["constant velocity", "constant acceleration", "zero velocity", "increasing mass"],
        answer: 0,
        explanation: "No horizontal force means $a_x = 0$ and $x = v_{0x}t$."
      },
    ],
  },
  {
    sectionId: "coletta-ch3-s4",
    readingTime: 4,
    intro: "Motion in a plane separates into independent horizontal and vertical parts plus a centripetal part whenever the path curves. Projectiles, circular motion, and moving frames all follow from this split. End-of-section objectives tell you what to reproduce closed-book. This section treats Reference Frames and Relative Motion at exam depth.",
    objectives: [
      "State and apply the defining relation of Reference Frames and Relative Motion with correct SI units",
      "Solve a quantitative Reference Frames and Relative Motion problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Reference Frames and Relative Motion reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Reference Frames and Relative Motion",
        kind: "definition",
        statement: "**Reference Frames and Relative Motion is governed by $a_c = \\frac{v^2}{r}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $R = \\frac{v_0^2 \\sin 2\\theta}{g}$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $v = \\omega r$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $a_c = \\frac{v^2}{r}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $\\vec{v}_{rel} = \\vec{v} - \\vec{V}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    examples: [
      {
        title: "Projectile range and hang time",
        problem: "A ball is launched at $v_0 = 26.0 \\, \\mathrm{m/s}$, $\\theta = 45.0^\\circ$. Find range and time aloft.",
        steps: [
          { label: "Step 1: Components", text: "$v_{0x} = v_0\\cos\\theta = 18.38 \\, \\mathrm{m/s}$, $v_{0y} = v_0\\sin\\theta = 18.38 \\, \\mathrm{m/s}$." },
          { label: "Step 2: Hang time", text: "$T = 2v_{0y}/g = 3.75 \\, \\mathrm{s}$." },
          { label: "Step 3: Range", text: "$R = v_{0x}T = 68.98 \\, \\mathrm{m}$." },
        ],
        result: "$T = 3.75 \\, \\mathrm{s}$, $R = 68.98 \\, \\mathrm{m}$."
      },
      {
        title: "Centripetal acceleration on the curve",
        problem: "A car at $v = %.1f \\, \\mathrm{m/s}$ rounds a curve of radius $r = 50 \\, \\mathrm{m}$. Find $a_c$.",
        steps: [
          { label: "Step 1: Formula", text: "$a_c = v^2/r$ toward the center." },
          { label: "Step 2: Substitute", text: "$a_c = (26.0)^2/50 = 676.0/50 = 13.52 \\, \\mathrm{m/s^2}$." },
          { label: "Step 3: Compare", text: "That is $1.38$ times $g$, requiring friction or banking." },
        ],
        result: "$a_c = 13.52 \\, \\mathrm{m/s^2}$ toward the center."
      },
    ],
    keyTakeaways: [
      "Reference Frames and Relative Motion is governed by $a_c = \\frac{v^2}{r}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $R = \\frac{v_0^2 \\sin 2\\theta}{g}$",
    ],
    quiz: [
      {
        q: "Centripetal acceleration points:",
        options: ["vertically always", "along velocity", "toward the center of curvature", "away from center"],
        answer: 2,
        explanation: "$a_c = v^2/r$ bends the velocity vector inward."
      },
      {
        q: "Projectile horizontal motion (no air) has:",
        options: ["constant velocity", "constant acceleration", "zero velocity", "increasing mass"],
        answer: 0,
        explanation: "No horizontal force means $a_x = 0$ and $x = v_{0x}t$."
      },
      {
        q: "Maximum projectile range for given speed is at:",
        options: ["45 degrees", "60 degrees", "90 degrees", "30 degrees"],
        answer: 0,
        explanation: "$R = v_0^2\\sin 2\\theta/g$ peaks when $\\sin 2\\theta = 1$."
      },
    ],
  },
]

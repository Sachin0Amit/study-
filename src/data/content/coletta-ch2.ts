import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 2
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh2Content: SectionContent[] = [
  {
    sectionId: "coletta-ch2-s1",
    readingTime: 4,
    intro: "One-dimensional motion with constant acceleration is the workhorse of early mechanics. Free fall is its cleanest example, and graphs make the calculus visible without formal derivatives. Coletta develops the idea verbally, then symbolically, then numerically. This section treats Acceleration in One Dimension at exam depth.",
    objectives: [
      "State and apply the defining relation of Acceleration in One Dimension with correct SI units",
      "Solve a quantitative Acceleration in One Dimension problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Acceleration in One Dimension reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Acceleration in One Dimension",
        kind: "definition",
        statement: "**Acceleration in One Dimension is governed by $a_{av} = \\frac{\\Delta v}{\\Delta t}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $v = v_0 + at$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $x = x_0 + v_0 t + \\frac{1}{2}at^2$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $a_{av} = \\frac{\\Delta v}{\\Delta t}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $v^2 = v_0^2 + 2a\\Delta x$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Velocity-time graph: slope $a = \\Delta v/\\Delta t$, area $\\Delta x$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="velocity versus time graph with constant slope"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="50" y1="20" x2="50" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="170" x2="370" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="170" x2="330" y2="50" stroke="currentColor" stroke-width="2.5"/><line x1="190" y1="170" x2="190" y2="110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="50" y1="110" x2="190" y2="110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><text x="20" y="100" font-size="12" fill="currentColor">v</text><text x="200" y="188" font-size="12" fill="currentColor">t</text><text x="230" y="90" font-size="12" fill="currentColor">slope = a, area = displacement</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Constant acceleration drill",
        problem: "A cart has $v_0 = 5.0 \\, \\mathrm{m/s}$ and $a = 9.8 \\, \\mathrm{m/s^2}$ for $t = 2.0 \\, \\mathrm{s}$. Find $v$ and $x$.",
        steps: [
          { label: "Step 1: Velocity", text: "$v = v_0 + at = 5.0 + 9.8 \\times 2.0 = 5.0 + 19.60 = 24.60 \\, \\mathrm{m/s}$." },
          { label: "Step 2: Position", text: "$x = v_0t + at^2/2 = 10.00 + 19.60 = 29.60 \\, \\mathrm{m}$." },
          { label: "Step 3: Cross-check", text: "$v^2 - v_0^2 = 580.2$ versus $2ax = 580.2$ agree." },
        ],
        result: "$v = 24.60 \\, \\mathrm{m/s}$, $x = 29.60 \\, \\mathrm{m}$."
      },
      {
        title: "Dropped ball in free fall",
        problem: "A ball is dropped from rest. How far does it fall in $2.0 \\, \\mathrm{s}$?",
        steps: [
          { label: "Step 1: Formula", text: "From rest $y = gt^2/2$ with $g = 9.8 \\, \\mathrm{m/s^2}$." },
          { label: "Step 2: Substitute", text: "$y = 4.9 \\times (2.0)^2 = 4.9 \\times 4.00 = 19.60 \\, \\mathrm{m}$." },
          { label: "Step 3: Velocity check", text: "$v = gt = 19.60 \\, \\mathrm{m/s}$ downward." },
        ],
        result: "$y = 19.60 \\, \\mathrm{m}$ down, $v = 19.60 \\, \\mathrm{m/s}$."
      },
    ],
    keyTakeaways: [
      "Acceleration in One Dimension is governed by $a_{av} = \\frac{\\Delta v}{\\Delta t}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $v = v_0 + at$",
    ],
    quiz: [
      {
        q: "The SI unit of acceleration is:",
        options: ["m/s", "m/s squared", "N", "J"],
        answer: 1,
        explanation: "Acceleration is velocity per time, $\\mathrm{m/s^2}$."
      },
      {
        q: "For constant $a$ from rest, displacement grows as:",
        options: ["$at^2/2$", "$a^2 t$", "$\\sqrt{at}$", "$at$"],
        answer: 0,
        explanation: "$x = at^2/2$ when $v_0 = 0$ and $x_0 = 0$."
      },
      {
        q: "In free fall near Earth, $g$ is about:",
        options: ["32 m/s squared", "0", "1.6 m/s squared", "9.8 m/s squared"],
        answer: 3,
        explanation: "$g = 9.8 \\, \\mathrm{m/s^2}$ downward ignoring air."
      },
    ],
  },
  {
    sectionId: "coletta-ch2-s2",
    readingTime: 5,
    intro: "One-dimensional motion with constant acceleration is the workhorse of early mechanics. Free fall is its cleanest example, and graphs make the calculus visible without formal derivatives. Worked examples carry real numbers you can verify with a calculator. This section treats Linear Motion at Constant Acceleration at exam depth.",
    objectives: [
      "State and apply the defining relation of Linear Motion at Constant Acceleration with correct SI units",
      "Solve a quantitative Linear Motion at Constant Acceleration problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Linear Motion at Constant Acceleration reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $x = x_0 + v_0 t + \\frac{1}{2}at^2$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $a_{av} = \\frac{\\Delta v}{\\Delta t}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $v^2 = v_0^2 + 2a\\Delta x$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $v^2 = v_0^2 + 2a\\Delta x$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Linear Motion at Constant Acceleration",
        kind: "definition",
        statement: "**Linear Motion at Constant Acceleration is governed by $a_{av} = \\frac{\\Delta v}{\\Delta t}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Constant acceleration drill",
        problem: "A cart has $v_0 = 6.0 \\, \\mathrm{m/s}$ and $a = 9.8 \\, \\mathrm{m/s^2}$ for $t = 2.5 \\, \\mathrm{s}$. Find $v$ and $x$.",
        steps: [
          { label: "Step 1: Velocity", text: "$v = v_0 + at = 6.0 + 9.8 \\times 2.5 = 6.0 + 24.50 = 30.50 \\, \\mathrm{m/s}$." },
          { label: "Step 2: Position", text: "$x = v_0t + at^2/2 = 15.00 + 30.62 = 45.62 \\, \\mathrm{m}$." },
          { label: "Step 3: Cross-check", text: "$v^2 - v_0^2 = 894.2$ versus $2ax = 894.3$ agree." },
        ],
        result: "$v = 30.50 \\, \\mathrm{m/s}$, $x = 45.62 \\, \\mathrm{m}$."
      },
      {
        title: "Dropped ball in free fall",
        problem: "A ball is dropped from rest. How far does it fall in $2.5 \\, \\mathrm{s}$?",
        steps: [
          { label: "Step 1: Formula", text: "From rest $y = gt^2/2$ with $g = 9.8 \\, \\mathrm{m/s^2}$." },
          { label: "Step 2: Substitute", text: "$y = 4.9 \\times (2.5)^2 = 4.9 \\times 6.25 = 30.62 \\, \\mathrm{m}$." },
          { label: "Step 3: Velocity check", text: "$v = gt = 24.50 \\, \\mathrm{m/s}$ downward." },
        ],
        result: "$y = 30.62 \\, \\mathrm{m}$ down, $v = 24.50 \\, \\mathrm{m/s}$."
      },
    ],
    keyTakeaways: [
      "Linear Motion at Constant Acceleration is governed by $a_{av} = \\frac{\\Delta v}{\\Delta t}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $v = v_0 + at$",
    ],
    quiz: [
      {
        q: "For constant $a$ from rest, displacement grows as:",
        options: ["$at^2/2$", "$a^2 t$", "$\\sqrt{at}$", "$at$"],
        answer: 0,
        explanation: "$x = at^2/2$ when $v_0 = 0$ and $x_0 = 0$."
      },
      {
        q: "In free fall near Earth, $g$ is about:",
        options: ["32 m/s squared", "0", "1.6 m/s squared", "9.8 m/s squared"],
        answer: 3,
        explanation: "$g = 9.8 \\, \\mathrm{m/s^2}$ downward ignoring air."
      },
      {
        q: "The SI unit of acceleration is:",
        options: ["J", "m/s", "m/s squared", "N"],
        answer: 2,
        explanation: "Acceleration is velocity per time, $\\mathrm{m/s^2}$."
      },
    ],
  },
  {
    sectionId: "coletta-ch2-s3",
    readingTime: 6,
    intro: "One-dimensional motion with constant acceleration is the workhorse of early mechanics. Free fall is its cleanest example, and graphs make the calculus visible without formal derivatives. A Closer Look boxes flag the step where beginners most often slip. This section treats Free Fall at exam depth.",
    objectives: [
      "State and apply the defining relation of Free Fall with correct SI units",
      "Solve a quantitative Free Fall problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Free Fall reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $v^2 = v_0^2 + 2a\\Delta x$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $v^2 = v_0^2 + 2a\\Delta x$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Free Fall",
        kind: "definition",
        statement: "**Free Fall is governed by $a_{av} = \\frac{\\Delta v}{\\Delta t}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $v = v_0 + at$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $x = x_0 + v_0 t + \\frac{1}{2}at^2$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Velocity-time graph: slope $a = \\Delta v/\\Delta t$, area $\\Delta x$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="free body diagram of a block with forces"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><rect x="170" y="80" width="60" height="50" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><line x1="200" y1="80" x2="200" y2="30" stroke="currentColor" stroke-width="2"/><polygon points="200,30 196,40 204,40" fill="currentColor"/><text x="208" y="55" font-size="12" fill="currentColor">N</text><line x1="200" y1="130" x2="200" y2="175" stroke="currentColor" stroke-width="2"/><polygon points="200,175 196,165 204,165" fill="currentColor"/><text x="208" y="160" font-size="12" fill="currentColor">mg</text><line x1="170" y1="105" x2="110" y2="105" stroke="currentColor" stroke-width="2"/><polygon points="110,105 120,101 120,109" fill="currentColor"/><text x="120" y="95" font-size="12" fill="currentColor">f</text><line x1="230" y1="105" x2="290" y2="105" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><polygon points="290,105 280,101 280,109" fill="currentColor"/><text x="255" y="95" font-size="12" fill="currentColor">F</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Constant acceleration drill",
        problem: "A cart has $v_0 = 7.0 \\, \\mathrm{m/s}$ and $a = 9.8 \\, \\mathrm{m/s^2}$ for $t = 3.0 \\, \\mathrm{s}$. Find $v$ and $x$.",
        steps: [
          { label: "Step 1: Velocity", text: "$v = v_0 + at = 7.0 + 9.8 \\times 3.0 = 7.0 + 29.40 = 36.40 \\, \\mathrm{m/s}$." },
          { label: "Step 2: Position", text: "$x = v_0t + at^2/2 = 21.00 + 44.10 = 65.10 \\, \\mathrm{m}$." },
          { label: "Step 3: Cross-check", text: "$v^2 - v_0^2 = 1276.0$ versus $2ax = 1276.0$ agree." },
        ],
        result: "$v = 36.40 \\, \\mathrm{m/s}$, $x = 65.10 \\, \\mathrm{m}$."
      },
      {
        title: "Dropped ball in free fall",
        problem: "A ball is dropped from rest. How far does it fall in $3.0 \\, \\mathrm{s}$?",
        steps: [
          { label: "Step 1: Formula", text: "From rest $y = gt^2/2$ with $g = 9.8 \\, \\mathrm{m/s^2}$." },
          { label: "Step 2: Substitute", text: "$y = 4.9 \\times (3.0)^2 = 4.9 \\times 9.00 = 44.10 \\, \\mathrm{m}$." },
          { label: "Step 3: Velocity check", text: "$v = gt = 29.40 \\, \\mathrm{m/s}$ downward." },
        ],
        result: "$y = 44.10 \\, \\mathrm{m}$ down, $v = 29.40 \\, \\mathrm{m/s}$."
      },
    ],
    keyTakeaways: [
      "Free Fall is governed by $a_{av} = \\frac{\\Delta v}{\\Delta t}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $v = v_0 + at$",
    ],
    quiz: [
      {
        q: "In free fall near Earth, $g$ is about:",
        options: ["32 m/s squared", "0", "1.6 m/s squared", "9.8 m/s squared"],
        answer: 3,
        explanation: "$g = 9.8 \\, \\mathrm{m/s^2}$ downward ignoring air."
      },
      {
        q: "The SI unit of acceleration is:",
        options: ["J", "m/s", "m/s squared", "N"],
        answer: 2,
        explanation: "Acceleration is velocity per time, $\\mathrm{m/s^2}$."
      },
      {
        q: "For constant $a$ from rest, displacement grows as:",
        options: ["$at$", "$at^2/2$", "$a^2 t$", "$\\sqrt{at}$"],
        answer: 1,
        explanation: "$x = at^2/2$ when $v_0 = 0$ and $x_0 = 0$."
      },
    ],
  },
  {
    sectionId: "coletta-ch2-s4",
    readingTime: 7,
    intro: "One-dimensional motion with constant acceleration is the workhorse of early mechanics. Free fall is its cleanest example, and graphs make the calculus visible without formal derivatives. End-of-section objectives tell you what to reproduce closed-book. This section treats Graphical Analysis of Linear Motion at exam depth.",
    objectives: [
      "State and apply the defining relation of Graphical Analysis of Linear Motion with correct SI units",
      "Solve a quantitative Graphical Analysis of Linear Motion problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Graphical Analysis of Linear Motion reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Graphical Analysis of Linear Motion",
        kind: "definition",
        statement: "**Graphical Analysis of Linear Motion is governed by $a_{av} = \\frac{\\Delta v}{\\Delta t}$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $v = v_0 + at$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $x = x_0 + v_0 t + \\frac{1}{2}at^2$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $a_{av} = \\frac{\\Delta v}{\\Delta t}$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $v^2 = v_0^2 + 2a\\Delta x$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    examples: [
      {
        title: "Constant acceleration drill",
        problem: "A cart has $v_0 = 8.0 \\, \\mathrm{m/s}$ and $a = 9.8 \\, \\mathrm{m/s^2}$ for $t = 3.5 \\, \\mathrm{s}$. Find $v$ and $x$.",
        steps: [
          { label: "Step 1: Velocity", text: "$v = v_0 + at = 8.0 + 9.8 \\times 3.5 = 8.0 + 34.30 = 42.30 \\, \\mathrm{m/s}$." },
          { label: "Step 2: Position", text: "$x = v_0t + at^2/2 = 28.00 + 60.03 = 88.03 \\, \\mathrm{m}$." },
          { label: "Step 3: Cross-check", text: "$v^2 - v_0^2 = 1725.3$ versus $2ax = 1725.3$ agree." },
        ],
        result: "$v = 42.30 \\, \\mathrm{m/s}$, $x = 88.03 \\, \\mathrm{m}$."
      },
      {
        title: "Dropped ball in free fall",
        problem: "A ball is dropped from rest. How far does it fall in $3.5 \\, \\mathrm{s}$?",
        steps: [
          { label: "Step 1: Formula", text: "From rest $y = gt^2/2$ with $g = 9.8 \\, \\mathrm{m/s^2}$." },
          { label: "Step 2: Substitute", text: "$y = 4.9 \\times (3.5)^2 = 4.9 \\times 12.25 = 60.03 \\, \\mathrm{m}$." },
          { label: "Step 3: Velocity check", text: "$v = gt = 34.30 \\, \\mathrm{m/s}$ downward." },
        ],
        result: "$y = 60.03 \\, \\mathrm{m}$ down, $v = 34.30 \\, \\mathrm{m/s}$."
      },
    ],
    keyTakeaways: [
      "Graphical Analysis of Linear Motion is governed by $a_{av} = \\frac{\\Delta v}{\\Delta t}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $v = v_0 + at$",
    ],
    quiz: [
      {
        q: "The SI unit of acceleration is:",
        options: ["J", "m/s", "m/s squared", "N"],
        answer: 2,
        explanation: "Acceleration is velocity per time, $\\mathrm{m/s^2}$."
      },
      {
        q: "For constant $a$ from rest, displacement grows as:",
        options: ["$at$", "$at^2/2$", "$a^2 t$", "$\\sqrt{at}$"],
        answer: 1,
        explanation: "$x = at^2/2$ when $v_0 = 0$ and $x_0 = 0$."
      },
      {
        q: "In free fall near Earth, $g$ is about:",
        options: ["9.8 m/s squared", "32 m/s squared", "0", "1.6 m/s squared"],
        answer: 0,
        explanation: "$g = 9.8 \\, \\mathrm{m/s^2}$ downward ignoring air."
      },
    ],
  },
]

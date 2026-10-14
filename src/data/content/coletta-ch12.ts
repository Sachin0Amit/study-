import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 12
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh12Content: SectionContent[] = [
  {
    sectionId: "coletta-ch12-s1",
    readingTime: 4,
    intro: "Temperature is operationally defined by thermometers and scales before gases reveal its microscopic meaning. Kinetic theory derives the gas law from molecular collisions, a Coletta signature derivation. Coletta signature ideal-gas-law derivation from molecular collisions is the centerpiece students must be able to reproduce. This section treats Temperature Measurement at exam depth.",
    objectives: [
      "State and apply the defining relation of Temperature Measurement with correct SI units",
      "Solve a quantitative Temperature Measurement problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Temperature Measurement reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Temperature Measurement",
        kind: "definition",
        statement: "**Temperature Measurement is governed by $T_F = \\frac{9}{5}T_C + 32$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $pV = nRT$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\bar{K} = \\frac{3}{2}kT$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $T_F = \\frac{9}{5}T_C + 32$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $p = \\frac{1}{3}nm\\bar{v^2}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    figures: [
      {
        caption: "Molecular collisions giving $pV = NkT$ with $\\bar{K} = 3kT/2$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="pressure volume diagram with cycle work area"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="60" y1="20" x2="60" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="170" x2="360" y2="170" stroke="currentColor" stroke-width="1.5"/><path d="M 90 140 L 220 140 L 220 70 L 320 70" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 90 140 L 320 70" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="30" y="100" font-size="12" fill="currentColor">p</text><text x="200" y="188" font-size="12" fill="currentColor">V</text><text x="230" y="50" font-size="12" fill="currentColor">area = work W</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "RMS speed of air molecules",
        problem: "Find $v_{rms}$ for nitrogen at $T = 300 \\, \\mathrm{K}$ ($m = 4.65 \\times 10^{-26} \\, \\mathrm{kg}$).",
        steps: [
          { label: "Step 1: Formula", text: "$v_{rms} = \\sqrt{3kT/m}$ with $k = 1.38 \\times 10^{-23} \\, \\mathrm{J/K}$." },
          { label: "Step 2: Numerator", text: "$3kT = 3 \\times 1.38 \\times 10^{-23} \\times 300 = 1.24e-20$." },
          { label: "Step 3: Root", text: "$v_{rms} = \\sqrt{1.24e-20/4.65 \\times 10^{-26}} = 517 \\, \\mathrm{m/s}$." },
        ],
        result: "$v_{rms} \\approx 517 \\, \\mathrm{m/s}$, faster than sound."
      },
      {
        title: "Thermal expansion of a bridge",
        problem: "A steel span $L_0 = 100 \\, \\mathrm{m}$ warms by $\\Delta T = 50 \\, \\mathrm{K}$ ($\\alpha = 1.2 \\times 10^{-5} \\, \\mathrm{/K}$). Find growth.",
        steps: [
          { label: "Step 1: Law", text: "$\\Delta L = \\alpha L_0 \\Delta T$." },
          { label: "Step 2: Multiply", text: "$\\Delta L = 1.2 \\times 10^{-5} \\times 100 \\times 50 = 0.060 \\, \\mathrm{m} = 6.0 \\, \\mathrm{cm}$." },
          { label: "Step 3: Joints", text: "Expansion joints must swallow centimeters." },
        ],
        result: "$\\Delta L = 6.0 \\, \\mathrm{cm}$."
      },
    ],
    keyTakeaways: [
      "Temperature Measurement is governed by $T_F = \\frac{9}{5}T_C + 32$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $pV = nRT$",
    ],
    quiz: [
      {
        q: "Absolute zero is:",
        options: ["$0^\\circ$C", "$-273.15^\\circ$C", "$32^\\circ$F", "$100$ K"],
        answer: 1,
        explanation: "$0 \\, \\mathrm{K} = -273.15^\\circ \\mathrm{C}$ is the pressure-zero extrapolation."
      },
      {
        q: "$pV = nRT$ uses temperature in:",
        options: ["kelvin", "fahrenheit", "any scale", "celsius"],
        answer: 0,
        explanation: "Kinetic energy scales with absolute $T_K$."
      },
      {
        q: "Kinetic theory gives pressure as:",
        options: ["static charge", "viscosity", "wall attraction", "molecular bombardment"],
        answer: 3,
        explanation: "$p = nm\\bar{v^2}/3$ counts momentum kicks per area per time."
      },
    ],
  },
  {
    sectionId: "coletta-ch12-s2",
    readingTime: 5,
    intro: "Temperature is operationally defined by thermometers and scales before gases reveal its microscopic meaning. Kinetic theory derives the gas law from molecular collisions, a Coletta signature derivation. A Closer Look explains why temperature means mean kinetic energy. This section treats Ideal Gas Law at exam depth.",
    objectives: [
      "State and apply the defining relation of Ideal Gas Law with correct SI units",
      "Solve a quantitative Ideal Gas Law problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Ideal Gas Law reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\bar{K} = \\frac{3}{2}kT$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $T_F = \\frac{9}{5}T_C + 32$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $p = \\frac{1}{3}nm\\bar{v^2}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $p = \\frac{1}{3}nm\\bar{v^2}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Ideal Gas Law",
        kind: "definition",
        statement: "**Ideal Gas Law is governed by $T_F = \\frac{9}{5}T_C + 32$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    examples: [
      {
        title: "Ideal gas pressure in a tank",
        problem: "A tank holds $n = 2.0 \\, \\mathrm{mol}$ at $T = 310 \\, \\mathrm{K}$ in $V = 0.050 \\, \\mathrm{m^3}$. Find $p$.",
        steps: [
          { label: "Step 1: Gas law", text: "$pV = nRT$ with $R = 8.31 \\, \\mathrm{J/(mol\\,K)}$." },
          { label: "Step 2: Solve", text: "$p = 2.0 \\times 8.31 \\times 310/0.050 = 103044 \\, \\mathrm{Pa}$." },
          { label: "Step 3: Atmospheres", text: "$p/1.013 \\times 10^5 = 1.02 \\, \\mathrm{atm}$." },
        ],
        result: "$p = 103044 \\, \\mathrm{Pa}$ ($1.02 \\, \\mathrm{atm}$)."
      },
      {
        title: "Celsius to Kelvin",
        problem: "A room is $22^\\circ \\mathrm{C}$. Express in kelvin and fahrenheit.",
        steps: [
          { label: "Step 1: Kelvin", text: "$T_K = 22 + 273.15 = 295.15 \\, \\mathrm{K} \\approx 295 \\, \\mathrm{K}$." },
          { label: "Step 2: Fahrenheit", text: "$T_F = 9 \\times 22/5 + 32 = 39.6 + 32 = 71.6^\\circ \\mathrm{F}$." },
          { label: "Step 3: Gas-law reminder", text: "Always insert $T_K$ into $pV = nRT$." },
        ],
        result: "$295 \\, \\mathrm{K}$, $71.6^\\circ \\mathrm{F}$."
      },
    ],
    keyTakeaways: [
      "Ideal Gas Law is governed by $T_F = \\frac{9}{5}T_C + 32$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $pV = nRT$",
    ],
    quiz: [
      {
        q: "$pV = nRT$ uses temperature in:",
        options: ["kelvin", "fahrenheit", "any scale", "celsius"],
        answer: 0,
        explanation: "Kinetic energy scales with absolute $T_K$."
      },
      {
        q: "Kinetic theory gives pressure as:",
        options: ["static charge", "viscosity", "wall attraction", "molecular bombardment"],
        answer: 3,
        explanation: "$p = nm\\bar{v^2}/3$ counts momentum kicks per area per time."
      },
      {
        q: "Absolute zero is:",
        options: ["$100$ K", "$0^\\circ$C", "$-273.15^\\circ$C", "$32^\\circ$F"],
        answer: 2,
        explanation: "$0 \\, \\mathrm{K} = -273.15^\\circ \\mathrm{C}$ is the pressure-zero extrapolation."
      },
    ],
  },
  {
    sectionId: "coletta-ch12-s3",
    readingTime: 6,
    intro: "Temperature is operationally defined by thermometers and scales before gases reveal its microscopic meaning. Kinetic theory derives the gas law from molecular collisions, a Coletta signature derivation. Galileo thermoscope story opens the operational meaning of hotter and colder. This section treats Kinetic Theory; Model of an Ideal Gas at exam depth.",
    objectives: [
      "State and apply the defining relation of Kinetic Theory; Model of an Ideal Gas with correct SI units",
      "Solve a quantitative Kinetic Theory; Model of an Ideal Gas problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Kinetic Theory; Model of an Ideal Gas reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $p = \\frac{1}{3}nm\\bar{v^2}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $p = \\frac{1}{3}nm\\bar{v^2}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Kinetic Theory; Model of an Ideal Gas",
        kind: "definition",
        statement: "**Kinetic Theory; Model of an Ideal Gas is governed by $T_F = \\frac{9}{5}T_C + 32$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $pV = nRT$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\bar{K} = \\frac{3}{2}kT$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    figures: [
      {
        caption: "Molecular collisions giving $pV = NkT$ with $\\bar{K} = 3kT/2$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="block floating with weight and buoyant force"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><rect x="80" y="90" width="240" height="70" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><rect x="170" y="60" width="60" height="60" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><line x1="200" y1="120" x2="200" y2="160" stroke="currentColor" stroke-width="2"/><polygon points="200,160 196,150 204,150" fill="currentColor"/><line x1="200" y1="120" x2="200" y2="80" stroke="currentColor" stroke-width="2"/><polygon points="200,80 196,90 204,90" fill="currentColor"/><text x="250" y="80" font-size="12" fill="currentColor">B = rho V g</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "RMS speed of air molecules",
        problem: "Find $v_{rms}$ for nitrogen at $T = 300 \\, \\mathrm{K}$ ($m = 4.65 \\times 10^{-26} \\, \\mathrm{kg}$).",
        steps: [
          { label: "Step 1: Formula", text: "$v_{rms} = \\sqrt{3kT/m}$ with $k = 1.38 \\times 10^{-23} \\, \\mathrm{J/K}$." },
          { label: "Step 2: Numerator", text: "$3kT = 3 \\times 1.38 \\times 10^{-23} \\times 300 = 1.24e-20$." },
          { label: "Step 3: Root", text: "$v_{rms} = \\sqrt{1.24e-20/4.65 \\times 10^{-26}} = 517 \\, \\mathrm{m/s}$." },
        ],
        result: "$v_{rms} \\approx 517 \\, \\mathrm{m/s}$, faster than sound."
      },
      {
        title: "Thermal expansion of a bridge",
        problem: "A steel span $L_0 = 100 \\, \\mathrm{m}$ warms by $\\Delta T = 50 \\, \\mathrm{K}$ ($\\alpha = 1.2 \\times 10^{-5} \\, \\mathrm{/K}$). Find growth.",
        steps: [
          { label: "Step 1: Law", text: "$\\Delta L = \\alpha L_0 \\Delta T$." },
          { label: "Step 2: Multiply", text: "$\\Delta L = 1.2 \\times 10^{-5} \\times 100 \\times 50 = 0.060 \\, \\mathrm{m} = 6.0 \\, \\mathrm{cm}$." },
          { label: "Step 3: Joints", text: "Expansion joints must swallow centimeters." },
        ],
        result: "$\\Delta L = 6.0 \\, \\mathrm{cm}$."
      },
    ],
    keyTakeaways: [
      "Kinetic Theory; Model of an Ideal Gas is governed by $T_F = \\frac{9}{5}T_C + 32$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $pV = nRT$",
    ],
    quiz: [
      {
        q: "Kinetic theory gives pressure as:",
        options: ["static charge", "viscosity", "wall attraction", "molecular bombardment"],
        answer: 3,
        explanation: "$p = nm\\bar{v^2}/3$ counts momentum kicks per area per time."
      },
      {
        q: "Absolute zero is:",
        options: ["$100$ K", "$0^\\circ$C", "$-273.15^\\circ$C", "$32^\\circ$F"],
        answer: 2,
        explanation: "$0 \\, \\mathrm{K} = -273.15^\\circ \\mathrm{C}$ is the pressure-zero extrapolation."
      },
      {
        q: "$pV = nRT$ uses temperature in:",
        options: ["celsius", "kelvin", "fahrenheit", "any scale"],
        answer: 1,
        explanation: "Kinetic energy scales with absolute $T_K$."
      },
    ],
  },
  {
    sectionId: "coletta-ch12-s4",
    readingTime: 7,
    intro: "Temperature is operationally defined by thermometers and scales before gases reveal its microscopic meaning. Kinetic theory derives the gas law from molecular collisions, a Coletta signature derivation. Vapor and expansion sections connect the law to weather and engineering. This section treats Derivation of the Ideal Gas Law at exam depth.",
    objectives: [
      "State and apply the defining relation of Derivation of the Ideal Gas Law with correct SI units",
      "Solve a quantitative Derivation of the Ideal Gas Law problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Derivation of the Ideal Gas Law reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Core idea of Derivation of the Ideal Gas Law",
        kind: "definition",
        statement: "**Derivation of the Ideal Gas Law is governed by $T_F = \\frac{9}{5}T_C + 32$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $pV = nRT$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\bar{K} = \\frac{3}{2}kT$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $T_F = \\frac{9}{5}T_C + 32$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $p = \\frac{1}{3}nm\\bar{v^2}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
    ],
    examples: [
      {
        title: "Molecular bombardment gives the gas law",
        problem: "Derive $pV = NkT$ for $N$ molecules of mass $m$ in a cube of side $L$, with mean square x-velocity $\\bar{v_x^2}$.",
        steps: [
          { label: "Step 1: One collision", text: "A molecule striking the wall normal to $x$ reverses $v_x$, delivering $\\Delta p = 2m|v_x|$ to the wall." },
          { label: "Step 2: Rate of hits", text: "Round trip across the box takes $\\Delta t = 2L/|v_x|$, so one molecule exerts average force $F_1 = \\Delta p/\\Delta t = mv_x^2/L$." },
          { label: "Step 3: Sum over molecules", text: "Total $F = (m/L)\\sum v_{xi}^2 = Nm\\bar{v_x^2}/L$. Pressure $p = F/L^2 = nm\\bar{v_x^2}$ with $n = N/L^3$." },
          { label: "Step 4: Isotropy plus temperature", text: "Isotropy gives $\\bar{v_x^2} = \\bar{v^2}/3$, and kinetic temperature defines $m\\bar{v^2}/2 = 3kT/2$. Hence $p = nkT$ and $pV = NkT$." },
        ],
        result: "$pV = NkT = nRT$: pressure is collective momentum transfer, temperature is mean molecular kinetic energy."
      },
      {
        title: "Room air pressure from molecular hits",
        problem: "A $3.0 \\, \\mathrm{m}$ cube holds $N = 2.0 \\times 10^{27}$ nitrogen molecules with $m = 4.65 \\times 10^{-26} \\, \\mathrm{kg}$ and root mean square speed $511 \\, \\mathrm{m/s}$. Compute $p$.",
        steps: [
          { label: "Step 1: Mean square", text: "$\\bar{v^2} = (511)^2 = 261121 \\, \\mathrm{m^2/s^2}$." },
          { label: "Step 2: Density", text: "Volume $V = 27 \\, \\mathrm{m^3}$, number density $n = 2.0 \\times 10^{27}/27 = 7.41 \\times 10^{25} \\, \\mathrm{m^{-3}}$." },
          { label: "Step 3: Kinetic pressure", text: "$p = nm\\bar{v^2}/3 = (7.41 \\times 10^{25})(4.65 \\times 10^{-26})(261121)/3 = (3.446)(261121)/3 = 899833/3 \\approx 1.0 \\times 10^5 \\, \\mathrm{Pa}$." },
        ],
        result: "$p \\approx 1.0 \\times 10^5 \\, \\mathrm{Pa}$, one atmosphere from molecular bombardment."
      },
    ],
    keyTakeaways: [
      "Derivation of the Ideal Gas Law is governed by $T_F = \\frac{9}{5}T_C + 32$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $pV = nRT$",
    ],
    quiz: [
      {
        q: "Absolute zero is:",
        options: ["$100$ K", "$0^\\circ$C", "$-273.15^\\circ$C", "$32^\\circ$F"],
        answer: 2,
        explanation: "$0 \\, \\mathrm{K} = -273.15^\\circ \\mathrm{C}$ is the pressure-zero extrapolation."
      },
      {
        q: "$pV = nRT$ uses temperature in:",
        options: ["celsius", "kelvin", "fahrenheit", "any scale"],
        answer: 1,
        explanation: "Kinetic energy scales with absolute $T_K$."
      },
      {
        q: "Kinetic theory gives pressure as:",
        options: ["molecular bombardment", "static charge", "viscosity", "wall attraction"],
        answer: 0,
        explanation: "$p = nm\\bar{v^2}/3$ counts momentum kicks per area per time."
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "Kinetic derivation of the ideal gas law and Maxwell-Boltzmann structure",
        blocks: [
          { kind: "theorem", heading: "Kinetic pressure theorem", body: "Consider $N$ identical molecules of mass $m$ in a cube of side $L$ with velocities $\\vec{v}_i$. Elastic reflection at the wall normal to $x$ reverses $v_{xi}$ and delivers $\\Delta p = 2m|v_{xi}|$. The round-trip time $\\Delta t = 2L/|v_{xi}|$ gives mean force $F_1 = mv_{xi}^2/L$ per molecule, whence total pressure $p = (m/L^3)\\sum_i v_{xi}^2 = nm\\bar{v_x^2}$ with $n = N/V$." },
          { kind: "derivation", heading: "From anisotropy to isotropy", body: "In equilibrium no direction is preferred, so $\\bar{v_x^2} = \\bar{v_y^2} = \\bar{v_z^2} = \\bar{v^2}/3$. Substituting gives $p = nm\\bar{v^2}/3 = 2n\\bar{K}/3$ where $\\bar{K} = m\\bar{v^2}/2$ is mean translational kinetic energy. Identifying $p = nkT$ from the empirical gas law forces $\\bar{K} = 3kT/2$: temperature is mean molecular kinetic energy, with $k = R/N_A$." },
          { kind: "proof", heading: "Why the Maxwell-Boltzmann distribution is required", body: "The mean-square argument fixes only $\\bar{v^2}$, not the full distribution $f(\\vec{v})$. Maximizing entropy $S = -k\\int f\\ln f\\,d^3v$ subject to fixed $N$ and fixed mean energy $\\bar{K}$ via Lagrange multipliers yields $f(v) = 4\\pi v^2(m/2\\pi kT)^{3/2}\\exp(-mv^2/2kT)$. Direct integration confirms $\\int f\\,dv = N$ and $\\int mv^2 f\\,dv/2N = 3kT/2$, closing the loop: the gas law is the second moment of the Maxwell-Boltzmann distribution." },
          { kind: "remark", heading: "Where the idealization breaks", body: "The derivation assumes point molecules, elastic walls, isotropy, and negligible intermolecular forces, hence $pV = NkT$ with $Z = pV/nRT = 1$. Finite molecular volume raises $Z$ via the van der Waals co-volume $b$, while attractions lower it via $a/V_m^2$. Coletta A Closer Look flags both: high-pressure isotherms deviate systematically, and the compressibility chart quantifies the breakdown." },
          { kind: "application", heading: "Worked application: Loschmidt number", body: "At $p = 1.013 \\times 10^5 \\, \\mathrm{Pa}$ and $T = 273.15 \\, \\mathrm{K}$, density $n = p/kT = 1.013 \\times 10^5/(1.38 \\times 10^{-23} \\times 273.15) = 2.69 \\times 10^{25} \\, \\mathrm{m^{-3}}$. Per cubic centimeter that is $2.69 \\times 10^{19}$ molecules, Loschmidt number, each moving near $460 \\, \\mathrm{m/s}$ yet producing only one atmosphere because mass $m \\sim 5 \\times 10^{-26} \\, \\mathrm{kg}$ is tiny." },
        ]
      }
    ],
  },
  {
    sectionId: "coletta-ch12-s5",
    readingTime: 8,
    intro: "Temperature is operationally defined by thermometers and scales before gases reveal its microscopic meaning. Kinetic theory derives the gas law from molecular collisions, a Coletta signature derivation. Coletta signature ideal-gas-law derivation from molecular collisions is the centerpiece students must be able to reproduce. This section treats Vapor Pressure and Humidity at exam depth.",
    objectives: [
      "State and apply the defining relation of Vapor Pressure and Humidity with correct SI units",
      "Solve a quantitative Vapor Pressure and Humidity problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Vapor Pressure and Humidity reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\bar{K} = \\frac{3}{2}kT$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
      {
        term: "Solution method and Problem Solving Strategy",
        kind: "method",
        statement: "**Coletta Problem Solving Strategy boxes prescribe: picture, list knowns, choose the governing relation $T_F = \\frac{9}{5}T_C + 32$, solve symbolically, then substitute numbers.** Diagrams carry signs and directions so algebra inherits the correct geometry.",
        detail: "A Closer Look passages warn where the shortcut method breaks and the full derivation is required."
      },
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $p = \\frac{1}{3}nm\\bar{v^2}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $p = \\frac{1}{3}nm\\bar{v^2}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Vapor Pressure and Humidity",
        kind: "definition",
        statement: "**Vapor Pressure and Humidity is governed by $T_F = \\frac{9}{5}T_C + 32$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
    ],
    figures: [
      {
        caption: "Molecular collisions giving $pV = NkT$ with $\\bar{K} = 3kT/2$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="vector resolved into x and y components"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="60" y1="160" x2="340" y2="160" stroke="currentColor" stroke-width="1.2"/><polygon points="340,160 330,156 330,164" fill="currentColor"/><line x1="60" y1="160" x2="60" y2="30" stroke="currentColor" stroke-width="1.2"/><polygon points="60,30 56,40 64,40" fill="currentColor"/><line x1="60" y1="160" x2="280" y2="60" stroke="currentColor" stroke-width="2.5"/><polygon points="280,60 268,62 272,72" fill="currentColor"/><line x1="60" y1="160" x2="280" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="280" y1="160" x2="280" y2="60" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="160" y="178" font-size="13" fill="currentColor">Ax = A cos theta</text><text x="292" y="115" font-size="13" fill="currentColor">Ay</text><text x="120" y="120" font-size="13" fill="currentColor">A</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "RMS speed of air molecules",
        problem: "Find $v_{rms}$ for nitrogen at $T = 300 \\, \\mathrm{K}$ ($m = 4.65 \\times 10^{-26} \\, \\mathrm{kg}$).",
        steps: [
          { label: "Step 1: Formula", text: "$v_{rms} = \\sqrt{3kT/m}$ with $k = 1.38 \\times 10^{-23} \\, \\mathrm{J/K}$." },
          { label: "Step 2: Numerator", text: "$3kT = 3 \\times 1.38 \\times 10^{-23} \\times 300 = 1.24e-20$." },
          { label: "Step 3: Root", text: "$v_{rms} = \\sqrt{1.24e-20/4.65 \\times 10^{-26}} = 517 \\, \\mathrm{m/s}$." },
        ],
        result: "$v_{rms} \\approx 517 \\, \\mathrm{m/s}$, faster than sound."
      },
      {
        title: "Thermal expansion of a bridge",
        problem: "A steel span $L_0 = 100 \\, \\mathrm{m}$ warms by $\\Delta T = 50 \\, \\mathrm{K}$ ($\\alpha = 1.2 \\times 10^{-5} \\, \\mathrm{/K}$). Find growth.",
        steps: [
          { label: "Step 1: Law", text: "$\\Delta L = \\alpha L_0 \\Delta T$." },
          { label: "Step 2: Multiply", text: "$\\Delta L = 1.2 \\times 10^{-5} \\times 100 \\times 50 = 0.060 \\, \\mathrm{m} = 6.0 \\, \\mathrm{cm}$." },
          { label: "Step 3: Joints", text: "Expansion joints must swallow centimeters." },
        ],
        result: "$\\Delta L = 6.0 \\, \\mathrm{cm}$."
      },
    ],
    keyTakeaways: [
      "Vapor Pressure and Humidity is governed by $T_F = \\frac{9}{5}T_C + 32$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $pV = nRT$",
    ],
    quiz: [
      {
        q: "$pV = nRT$ uses temperature in:",
        options: ["celsius", "kelvin", "fahrenheit", "any scale"],
        answer: 1,
        explanation: "Kinetic energy scales with absolute $T_K$."
      },
      {
        q: "Kinetic theory gives pressure as:",
        options: ["molecular bombardment", "static charge", "viscosity", "wall attraction"],
        answer: 0,
        explanation: "$p = nm\\bar{v^2}/3$ counts momentum kicks per area per time."
      },
      {
        q: "Absolute zero is:",
        options: ["$32^\\circ$F", "$100$ K", "$0^\\circ$C", "$-273.15^\\circ$C"],
        answer: 3,
        explanation: "$0 \\, \\mathrm{K} = -273.15^\\circ \\mathrm{C}$ is the pressure-zero extrapolation."
      },
    ],
  },
  {
    sectionId: "coletta-ch12-s6",
    readingTime: 9,
    intro: "Temperature is operationally defined by thermometers and scales before gases reveal its microscopic meaning. Kinetic theory derives the gas law from molecular collisions, a Coletta signature derivation. A Closer Look explains why temperature means mean kinetic energy. This section treats Thermal Expansion at exam depth.",
    objectives: [
      "State and apply the defining relation of Thermal Expansion with correct SI units",
      "Solve a quantitative Thermal Expansion problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Thermal Expansion reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Notation and units",
        kind: "notation",
        statement: "**Symbols are defined once and used consistently, with SI units attached.** In $p = \\frac{1}{3}nm\\bar{v^2}$ every letter has one meaning inside the section, and unit conversion uses explicit factors rather than memory.",
        detail: "Never drop units mid-calculation; they catch inverted ratios and missing powers."
      },
      {
        term: "Physical insight and In Perspective",
        kind: "insight",
        statement: "**The qualitative insight behind $p = \\frac{1}{3}nm\\bar{v^2}$ is that the mathematics describes something you can picture.** Galileo style thought experiments and the In Perspective essays remind that measurement, not authority, decides.",
        detail: "When the formula surprises intuition, trust the controlled experiment and re-examine hidden assumptions."
      },
      {
        term: "Core idea of Thermal Expansion",
        kind: "definition",
        statement: "**Thermal Expansion is governed by $T_F = \\frac{9}{5}T_C + 32$.** The relation names the quantities, their units, and the conditions under which it holds, and every later calculation in this section refers back to it.",
        detail: "Coletta introduces the relation verbally first, then symbolically, then numerically so that symbols never float free of meaning."
      },
      {
        term: "Quantitative form",
        kind: "theorem",
        statement: "**The section key relation is $pV = nRT$.** It follows from the definitions plus the chapter hypotheses, and its derivation is meant to be reproducible with pencil and paper.",
        detail: "Check dimensions on both sides and test limiting cases before trusting any application."
      },
      {
        term: "Governing law",
        kind: "law",
        statement: "**The operative law reads $\\bar{K} = \\frac{3}{2}kT$.** It constrains what can happen regardless of detail, so it serves as a cross-check on longer calculations.",
        detail: "Laws in Coletta are used actively: write the law first, then insert the data."
      },
    ],
    examples: [
      {
        title: "RMS speed of air molecules",
        problem: "Find $v_{rms}$ for nitrogen at $T = 300 \\, \\mathrm{K}$ ($m = 4.65 \\times 10^{-26} \\, \\mathrm{kg}$).",
        steps: [
          { label: "Step 1: Formula", text: "$v_{rms} = \\sqrt{3kT/m}$ with $k = 1.38 \\times 10^{-23} \\, \\mathrm{J/K}$." },
          { label: "Step 2: Numerator", text: "$3kT = 3 \\times 1.38 \\times 10^{-23} \\times 300 = 1.24e-20$." },
          { label: "Step 3: Root", text: "$v_{rms} = \\sqrt{1.24e-20/4.65 \\times 10^{-26}} = 517 \\, \\mathrm{m/s}$." },
        ],
        result: "$v_{rms} \\approx 517 \\, \\mathrm{m/s}$, faster than sound."
      },
      {
        title: "Thermal expansion of a bridge",
        problem: "A steel span $L_0 = 100 \\, \\mathrm{m}$ warms by $\\Delta T = 50 \\, \\mathrm{K}$ ($\\alpha = 1.2 \\times 10^{-5} \\, \\mathrm{/K}$). Find growth.",
        steps: [
          { label: "Step 1: Law", text: "$\\Delta L = \\alpha L_0 \\Delta T$." },
          { label: "Step 2: Multiply", text: "$\\Delta L = 1.2 \\times 10^{-5} \\times 100 \\times 50 = 0.060 \\, \\mathrm{m} = 6.0 \\, \\mathrm{cm}$." },
          { label: "Step 3: Joints", text: "Expansion joints must swallow centimeters." },
        ],
        result: "$\\Delta L = 6.0 \\, \\mathrm{cm}$."
      },
    ],
    keyTakeaways: [
      "Thermal Expansion is governed by $T_F = \\frac{9}{5}T_C + 32$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $pV = nRT$",
    ],
    quiz: [
      {
        q: "Kinetic theory gives pressure as:",
        options: ["molecular bombardment", "static charge", "viscosity", "wall attraction"],
        answer: 0,
        explanation: "$p = nm\\bar{v^2}/3$ counts momentum kicks per area per time."
      },
      {
        q: "Absolute zero is:",
        options: ["$32^\\circ$F", "$100$ K", "$0^\\circ$C", "$-273.15^\\circ$C"],
        answer: 3,
        explanation: "$0 \\, \\mathrm{K} = -273.15^\\circ \\mathrm{C}$ is the pressure-zero extrapolation."
      },
      {
        q: "$pV = nRT$ uses temperature in:",
        options: ["any scale", "celsius", "kelvin", "fahrenheit"],
        answer: 2,
        explanation: "Kinetic energy scales with absolute $T_K$."
      },
    ],
  },
]

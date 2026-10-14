import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 1
// Units, Physical Quantities, and Vectors (Secs 1.1–1.10)
// ============================================================================

export const youngCh1Content: SectionContent[] = [
  {
    sectionId: "young-ch1-s1",
    readingTime: 4,
    intro: "Physics is the most basic experimental science: it asks how matter, energy, space, and time behave, from quarks to galaxies. Young opens by showing how observation, idealization, and quantitative testing separate physics from pure mathematics and philosophy.",
    objectives: [
      "Describe what physics studies and how experiment tests theory",
      "Distinguish a physical model and idealization from raw observation",
      "Explain why prediction plus measurement is the standard of truth in physics"
    ],
    concepts: [
      {
        term: "Physics as experimental science",
        kind: "definition",
        statement: "Physics studies **matter, energy, and their interactions in space and time**, and every claim must survive confrontation with measurement.",
        detail: "A theory that predicts $g = 9.8\\ \\mathrm{m/s^2}$ lives or dies by dropping objects and timing them, not by elegance alone."
      },
      {
        term: "Two frontiers of scale",
        kind: "insight",
        statement: "Modern physics spans **~$10^{-18}\\ \\mathrm{m}$ (quarks) to ~$10^{26}\\ \\mathrm{m}$ (observable universe)**, some 44 orders of magnitude.",
        detail: "Mechanics in Chapters 1–15 lives in the middle scales, but the same laws of motion and energy apply at the extremes with quantum and relativistic corrections."
      },
      {
        term: "Idealized model",
        kind: "method",
        statement: "An **idealized model** replaces a real system by a simplified version — point mass, massless string, frictionless surface — that keeps the dominant physics.",
        detail: "A baseball in flight becomes a particle of mass $m$ in uniform gravity; spin and air drag are restored later as corrections."
      },
      {
        term: "Theory and experiment loop",
        kind: "method",
        statement: "Observation suggests a **model**, mathematics develops its **predictions**, and new **measurements** confirm, refine, or falsify it.",
        detail: "No amount of derivation proves a law; one reproducible disagreement, such as the precession of Mercury before relativity, forces revision."
      },
      {
        term: "Scope of classical mechanics",
        kind: "insight",
        statement: "Chapters 1–15 are **classical (Newtonian) mechanics plus fluids, waves, and heat**: accurate when speeds satisfy $v \\ll c$ and sizes satisfy $L \\gg 10^{-9}\\ \\mathrm{m}$.",
        detail: "Young flags from page one where relativity ($v \\to c$) and quantum effects (atomic scales) will later take over."
      }
    ],
    examples: [
      {
        title: "Why a model beats a replica",
        problem: "A $0.145\\ \\mathrm{kg}$ baseball is thrown at $40\\ \\mathrm{m/s}$. Should air drag be in the first model?",
        steps: [
          { label: "Estimate weight", text: "Weight is $mg = 0.145 \\times 9.8 = 1.42\\ \\mathrm{N}$." },
          { label: "Estimate drag", text: "At $40\\ \\mathrm{m/s}$ drag on a baseball is roughly $1$–$2\\ \\mathrm{N}$, comparable to weight." },
          { label: "Decide", text: "For a rough range estimate drop drag first and solve the projectile problem; for a real trajectory restore it as a correction." }
        ],
        result: "First model: particle under gravity only. Refined model: add velocity-dependent drag."
      },
      {
        title: "Prediction versus measurement",
        problem: "A model predicts a fall time of $1.43\\ \\mathrm{s}$ from $10.0\\ \\mathrm{m}$. The measured mean is $1.45\\ \\mathrm{s}$. Is the model wrong?",
        steps: [
          { label: "Compare", text: "Difference is $0.02\\ \\mathrm{s}$, about $1.4$%." },
          { label: "Ask about uncertainty", text: "If the timer resolves $0.01\\ \\mathrm{s}$ and air drag adds ~$1$%, the gap is expected, not a falsification." },
          { label: "Conclude", text: "Agreement within estimated uncertainty corroborates the model; a $20$% gap would demand revision." }
        ],
        result: "The model stands; uncertainty analysis (Sec 1.5) decides what counts as agreement."
      }
    ],
    keyTakeaways: [
      "Physics is tested by measurement: models predict, experiments decide.",
      "Start with an idealized model that keeps the dominant effect, then refine.",
      "Classical mechanics rules the middle scales; relativity and quanta bound its edges."
    ],
    quiz: [
      {
        q: "Which best describes the role of an idealized model in Young?",
        options: ["An exact replica of the real system", "A simplified version keeping the dominant physics, refined later", "A purely mathematical theorem with no experiment", "A measurement with zero uncertainty"],
        answer: 1,
        explanation: "Point masses and frictionless surfaces deliberately omit secondary effects first, then restore them as corrections."
      },
      {
        q: "A theory predicting $g = 9.8\\ \\mathrm{m/s^2}$ is validated by:",
        options: ["Elegant mathematics alone", "Agreement with careful drop-and-time measurements", "Majority vote of physicists", "Dimensional analysis only"],
        answer: 1,
        explanation: "Physics is experimental: prediction must survive measurement within uncertainty."
      },
      {
        q: "Classical mechanics of Chapters 1–15 is reliable when:",
        options: ["Speeds approach $c$ and atoms are involved", "Speeds satisfy $v \\ll c$ and sizes are far above atomic scales", "Only in outer space", "Only for massless particles"],
        answer: 1,
        explanation: "Young states the Newtonian domain explicitly; relativity and quantum mechanics take over outside it."
      }
    ]
  },
  {
    sectionId: "young-ch1-s2",
    readingTime: 5,
    intro: "Young teaches one transferable procedure for every problem in the book: Identify the physics, Set up with diagrams and variables, Execute the mathematics, and Evaluate the answer. This section makes that strategy explicit so later chapters can invoke it by name.",
    objectives: [
      "Apply the Identify–Set up–Execute–Evaluate strategy to any mechanics problem",
      "Translate words into a labeled sketch with knowns, unknowns, and target",
      "Judge an answer by units, magnitude, and limiting cases"
    ],
    concepts: [
      {
        term: "IDENTIFY the relevant physics",
        kind: "method",
        statement: "**IDENTIFY:** read the full statement, list knowns and the target, and name the **principle** (for example $\\sum \\vec{F} = m\\vec{a}$) before touching algebra.",
        detail: "Ask what is given, what is asked, and which chapter idea governs it; never hunt for an equation that merely contains the right letters."
      },
      {
        term: "SET UP with sketch and variables",
        kind: "method",
        statement: "**SET UP:** draw the situation, choose **coordinates and symbols** ($x_0$, $v_{0x}$, $t$), and write the governing equations in symbols.",
        detail: "A labeled axis fixes every sign; subscripts such as $v_{0x}$ distinguish initial $x$-velocity from the unknown $v_x$."
      },
      {
        term: "EXECUTE symbolically first",
        kind: "method",
        statement: "**EXECUTE:** solve **algebraically for the target symbol**, then substitute numbers with units in one pass.",
        detail: "Solving $v_x^2 = v_{0x}^2 + 2a_x\\Delta x$ for $\\Delta x$ before inserting numbers exposes errors and lets units cancel visibly."
      },
      {
        term: "EVALUATE the result",
        kind: "method",
        statement: "**EVALUATE:** check **units, sign, magnitude, and limits** — does $120\\ \\mathrm{m/s}$ for a thrown ball make sense?",
        detail: "Test extremes: setting $\\theta = 0$ or $a = 0$ should recover a known simple case; wrong units always mean wrong physics."
      },
      {
        term: "Estimation as a check",
        kind: "insight",
        statement: "A quick **order-of-magnitude estimate** ($g \\approx 10\\ \\mathrm{m/s^2}$, $1\\ \\mathrm{m/s} \\approx 3.6\\ \\mathrm{km/h}$) catches factor-of-ten slips.",
        detail: "If the estimate says seconds and the calculation says hours, recheck powers of ten and unit conversions before trusting the algebra."
      }
    ],
    figures: [
      {
        caption: "Young problem-solving flow: IDENTIFY $\\to$ SET UP $\\to$ EXECUTE $\\to$ EVALUATE with a sketch at the center",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Problem solving flowchart"><rect x="20" y="60" width="130" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="85" y="85" font-size="14" text-anchor="middle" fill="currentColor">IDENTIFY</text><text x="85" y="104" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">principle?</text><rect x="190" y="60" width="130" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="255" y="85" font-size="14" text-anchor="middle" fill="currentColor">SET UP</text><text x="255" y="104" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">sketch + symbols</text><rect x="360" y="60" width="130" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="425" y="85" font-size="14" text-anchor="middle" fill="currentColor">EXECUTE</text><text x="425" y="104" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">solve, then numbers</text><rect x="530" y="60" width="130" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="595" y="85" font-size="14" text-anchor="middle" fill="currentColor">EVALUATE</text><text x="595" y="104" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">units + limits</text><line x1="150" y1="90" x2="190" y2="90" stroke="currentColor" stroke-width="2"/><line x1="320" y1="90" x2="360" y2="90" stroke="currentColor" stroke-width="2"/><line x1="490" y1="90" x2="530" y2="90" stroke="currentColor" stroke-width="2"/><path d="M 595 120 L 595 155 L 255 155 L 255 120" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="425" y="172" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">revise if units or magnitude fail</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Strategy on a braking car",
        problem: "A car at $20\\ \\mathrm{m/s}$ brakes with $a_x = -5.0\\ \\mathrm{m/s^2}$. How far does it travel before stopping?",
        steps: [
          { label: "Identify", text: "Constant-acceleration kinematics; knowns $v_{0x} = 20\\ \\mathrm{m/s}$, $v_x = 0$, $a_x = -5.0\\ \\mathrm{m/s^2}$; target $\\Delta x$." },
          { label: "Set up", text: "Choose $+x$ forward; use $v_x^2 = v_{0x}^2 + 2a_x\\Delta x$." },
          { label: "Execute", text: "$\\Delta x = (0 - 400)/(2 \\times (-5.0)) = 40\\ \\mathrm{m}$." },
          { label: "Evaluate", text: "Units meters, magnitude tens of meters for highway braking — plausible; $a_x \\to 0$ correctly gives $\\Delta x \\to \\infty$." }
        ],
        result: "$40\\ \\mathrm{m}$ of stopping distance, verified by units and limits."
      },
      {
        title: "Catching a unit error",
        problem: "A student reports a sprinter speed as $36\\ \\mathrm{m/s^2}$. What went wrong?",
        steps: [
          { label: "Identify", text: "Speed must have units of $\\mathrm{m/s}$, not $\\mathrm{m/s^2}$." },
          { label: "Set up", text: "Likely confused $v$ with $a$, or divided by time twice." },
          { label: "Evaluate", text: "$36\\ \\mathrm{m/s}$ is $130\\ \\mathrm{km/h}$ — impossibly fast for a sprinter — so magnitude also fails." }
        ],
        result: "Both units and magnitude reject the answer; the EVALUATE step catches it."
      }
    ],
    keyTakeaways: [
      "Name the principle first; never equation-hunt by matching letters.",
      "Draw, choose coordinates, and solve in symbols before substituting numbers.",
      "Every answer must pass units, sign, magnitude, and limiting-case checks."
    ],
    quiz: [
      {
        q: "In Young's strategy, what belongs in SET UP?",
        options: ["Plugging numbers into the first equation seen", "Sketch, coordinates, symbols, and governing equations in symbols", "Checking limiting cases", "Rounding to significant figures"],
        answer: 1,
        explanation: "SET UP fixes geometry and signs before any arithmetic; EVALUATE checks limits afterward."
      },
      {
        q: "Why solve symbolically before substituting numbers?",
        options: ["It uses more paper", "Algebra first exposes structure and lets units cancel visibly", "Numbers are forbidden in physics", "It avoids drawing diagrams"],
        answer: 1,
        explanation: "A symbolic target like $\\Delta x = -v_{0x}^2/2a_x$ can be checked by units and limits before arithmetic hides errors."
      },
      {
        q: "A calculated jet speed of $3\\ \\mathrm{m/s}$ should be:",
        options: ["Accepted because math never lies", "Rejected on magnitude — jets fly near $250\\ \\mathrm{m/s}$", "Reported with ten significant figures", "Converted to kilograms"],
        answer: 1,
        explanation: "EVALUATE demands a magnitude sanity check; $3\\ \\mathrm{m/s}$ is walking pace, not flight."
      }
    ]
  },
  {
    sectionId: "young-ch1-s3",
    readingTime: 5,
    intro: "Mechanics needs only three base quantities — length, mass, and time — and the SI system fixes their units by physical standards. This section defines the meter, kilogram, and second and shows why dimensional consistency is a non-negotiable test of every equation.",
    objectives: [
      "State the SI base units for length, mass, and time",
      "Explain operational standards from artifacts to atomic definitions",
      "Test equations by dimensional consistency"
    ],
    concepts: [
      {
        term: "Physical quantity",
        kind: "definition",
        statement: "A **physical quantity** is a number plus a **unit**: $L = 3.00\\ \\mathrm{m}$ means three times the standard meter.",
        detail: "Without the unit the number is meaningless; with it, any observer worldwide reproduces the measurement."
      },
      {
        term: "SI base units",
        kind: "notation",
        statement: "SI mechanics rests on the **meter ($\\mathrm{m}$)** for length, **kilogram ($\\mathrm{kg}$)** for mass, and **second ($\\mathrm{s}$)** for time.",
        detail: "All other mechanical units derive from these: $1\\ \\mathrm{N} = 1\\ \\mathrm{kg\\cdot m/s^2}$ and $1\\ \\mathrm{J} = 1\\ \\mathrm{N\\cdot m}$."
      },
      {
        term: "Standards: artifact to atomic",
        kind: "definition",
        statement: "The **second** is $9{,}192{,}631{,}770$ periods of cesium-133 radiation; the **meter** is the distance light travels in $1/299{,}792{,}458\\ \\mathrm{s}$; the **kilogram** is fixed by the Planck constant.",
        detail: "Atomic standards replaced bars and cylinders so any equipped lab realizes the same unit without visiting Paris."
      },
      {
        term: "Dimensional consistency",
        kind: "theorem",
        statement: "Every term added or equated must carry **identical dimensions**: $[x] = \\mathrm{L}$, $[v] = \\mathrm{L/T}$, $[a] = \\mathrm{L/T^2}$.",
        detail: "Thus $x = v_0 t + \\frac{1}{2}at^2$ passes ($\\mathrm{L} = \\mathrm{L} + \\mathrm{L}$) while $x = vt^2$ fails and is certainly wrong."
      },
      {
        term: "Prefixes and derived units",
        kind: "notation",
        statement: "SI **prefixes** scale by tens: $1\\ \\mathrm{km} = 10^{3}\\ \\mathrm{m}$, $1\\ \\mathrm{mm} = 10^{-3}\\ \\mathrm{m}$, $1\\ \\mathrm{\\mu m} = 10^{-6}\\ \\mathrm{m}$, $1\\ \\mathrm{nm} = 10^{-9}\\ \\mathrm{m}$.",
        detail: "Young uses centimeters and grams only for conversion practice; dynamics is done in meters, kilograms, and seconds."
      }
    ],
    examples: [
      {
        title: "Checking a kinematics formula",
        problem: "Is $v^2 = v_0^2 + 2a\\Delta x$ dimensionally consistent?",
        steps: [
          { label: "Dimensions of speed squared", text: "$[v^2] = (\\mathrm{L/T})^2 = \\mathrm{L^2/T^2}$; same for $v_0^2$." },
          { label: "Dimensions of correction", text: "$[a\\Delta x] = (\\mathrm{L/T^2})(\\mathrm{L}) = \\mathrm{L^2/T^2}$." },
          { label: "Compare", text: "All three terms are $\\mathrm{L^2/T^2}$ — consistent." }
        ],
        result: "The equation passes the dimensional test (necessary but not sufficient for correctness)."
      },
      {
        title: "Rejecting a wrong formula",
        problem: "A student proposes $x = v_0 t^2$. Test it.",
        steps: [
          { label: "Left side", text: "$[x] = \\mathrm{L}$." },
          { label: "Right side", text: "$[v_0 t^2] = (\\mathrm{L/T})(\\mathrm{T^2}) = \\mathrm{L\\cdot T}$." },
          { label: "Verdict", text: "$\\mathrm{L} \\neq \\mathrm{L\\cdot T}$ — impossible." }
        ],
        result: "Rejected without any numbers; the correct form needs one fewer power of $t$."
      }
    ],
    keyTakeaways: [
      "Mechanics needs only length, mass, time; SI fixes $\\mathrm{m}$, $\\mathrm{kg}$, $\\mathrm{s}$ atomically.",
      "Every number in physics needs its unit to mean anything.",
      "Added or equated terms must share dimensions — a fast, ruthless error filter."
    ],
    quiz: [
      {
        q: "Which triple lists the SI base units for mechanics?",
        options: ["Foot, slug, hour", "Meter, kilogram, second", "Newton, joule, watt", "Centimeter, gram, day"],
        answer: 1,
        explanation: "Length–mass–time in SI are exactly $\\mathrm{m}$, $\\mathrm{kg}$, $\\mathrm{s}$; newtons and joules are derived."
      },
      {
        q: "Why must $x = v_0 t + \\frac{1}{2}at^2$ have matching dimensions in each term?",
        options: ["Because Young prefers symmetry", "Only like dimensions can be added or equated", "Because $t$ is dimensionless", "Because $a$ has no units"],
        answer: 1,
        explanation: "Adding meters to seconds is meaningless; dimensional homogeneity is required of every physical equation."
      },
      {
        q: "The modern second is defined by:",
        options: ["Earth rotation", "Cesium-133 atomic oscillations", "A pendulum in Paris", "The speed of sound"],
        answer: 1,
        explanation: "The second counts $9{,}192{,}631{,}770$ periods of the cesium hyperfine transition — reproducible anywhere."
      }
    ]
  },
  {
    sectionId: "young-ch1-s4",
    readingTime: 5,
    intro: "Unit conversion is algebra, not magic: multiply by one in the form of a conversion factor and let units cancel. This section teaches the chain-link method Young uses on every page, plus density as the first derived quantity.",
    objectives: [
      "Convert reliably between SI, cgs, and British units by chain links",
      "Carry units through every calculation to the final answer",
      "Compute mass and weight from density and volume"
    ],
    concepts: [
      {
        term: "Conversion factor equals one",
        kind: "method",
        statement: "A **conversion factor** such as $\\frac{1000\\ \\mathrm{mm}}{1\\ \\mathrm{m}}$ equals **$1$**, so multiplying by it changes units, never value.",
        detail: "Since numerator and denominator name the same length, $2.50\\ \\mathrm{m} \\times (1000\\ \\mathrm{mm}/1\\ \\mathrm{m}) = 2500\\ \\mathrm{mm}$ exactly in value."
      },
      {
        term: "Chain-link conversion",
        kind: "method",
        statement: "**Chain-link:** string factors so each unwanted unit **cancels diagonally**, leaving only the target unit.",
        detail: "Hours to seconds: $2.0\\ \\mathrm{h} \\times (60\\ \\mathrm{min}/1\\ \\mathrm{h}) \\times (60\\ \\mathrm{s}/1\\ \\mathrm{min}) = 7200\\ \\mathrm{s}$."
      },
      {
        term: "Units ride along",
        kind: "method",
        statement: "Carry **units through every substitution**; the final unit is computed, not guessed.",
        detail: "In $F = ma = (2.0\\ \\mathrm{kg})(3.0\\ \\mathrm{m/s^2}) = 6.0\\ \\mathrm{kg\\cdot m/s^2} = 6.0\\ \\mathrm{N}$, the newton emerges from cancellation."
      },
      {
        term: "Density",
        kind: "definition",
        statement: "**Density** is mass per unit volume, $\\rho = m/V$, with SI unit $\\mathrm{kg/m^3}$.",
        detail: "Water at $1000\\ \\mathrm{kg/m^3} = 1.00\\ \\mathrm{g/cm^3}$; $1\\ \\mathrm{g/cm^3} = 1000\\ \\mathrm{kg/m^3}$ is the most-used conversion in the chapter."
      },
      {
        term: "Exact versus measured conversions",
        kind: "insight",
        statement: "**Defined conversions** ($1\\ \\mathrm{in} = 2.54\\ \\mathrm{cm}$ exactly) carry **infinite precision**; measured ones inherit uncertainty.",
        detail: "Use exact factors freely, but a speed limit in $\\mathrm{mi/h}$ converted with a measured mile keeps the measurement spread."
      }
    ],
    figures: [
      {
        caption: "Chain-link conversion: each factor equals $1$ and unwanted units cancel to $7200\\ \\mathrm{s}$",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chain link conversion"><rect x="25" y="60" width="95" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="72" y="97" font-size="18" text-anchor="middle" fill="currentColor">2 h</text><rect x="160" y="60" width="150" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="235" y="85" font-size="14" text-anchor="middle" fill="currentColor">60 min</text><line x1="180" y1="92" x2="290" y2="92" stroke="currentColor" stroke-width="2"/><text x="235" y="110" font-size="14" text-anchor="middle" fill="currentColor">1 h</text><rect x="350" y="60" width="150" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="425" y="85" font-size="14" text-anchor="middle" fill="currentColor">60 s</text><line x1="370" y1="92" x2="480" y2="92" stroke="currentColor" stroke-width="2"/><text x="425" y="110" font-size="14" text-anchor="middle" fill="currentColor">1 min</text><rect x="540" y="60" width="155" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="617" y="97" font-size="18" text-anchor="middle" fill="currentColor">7200 s</text><text x="137" y="97" font-size="20" text-anchor="middle" fill="currentColor">×</text><text x="330" y="97" font-size="20" text-anchor="middle" fill="currentColor">×</text><text x="520" y="97" font-size="20" text-anchor="middle" fill="currentColor">=</text><text x="360" y="155" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.7">h cancels h, min cancels min — only s survives</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Sprint speed in SI",
        problem: "A sprinter runs $100\\ \\mathrm{m}$ in $10.0\\ \\mathrm{s}$. Express the mean speed in $\\mathrm{km/h}$.",
        steps: [
          { label: "Mean speed", text: "$v = 100/10.0 = 10.0\\ \\mathrm{m/s}$." },
          { label: "Chain link", text: "$10.0\\ \\mathrm{m/s} \\times (1\\ \\mathrm{km}/1000\\ \\mathrm{m}) \\times (3600\\ \\mathrm{s}/1\\ \\mathrm{h}) = 36.0\\ \\mathrm{km/h}$." },
          { label: "Check", text: "Units collapse to $\\mathrm{km/h}$; $36\\ \\mathrm{km/h}$ matches a $10\\ \\mathrm{m/s}$ sprint." }
        ],
        result: "$10.0\\ \\mathrm{m/s} = 36.0\\ \\mathrm{km/h}$."
      },
      {
        title: "Mass of a gold cube",
        problem: "Gold has $\\rho = 19.3\\ \\mathrm{g/cm^3}$. What is the mass of a $2.00\\ \\mathrm{cm}$ cube?",
        steps: [
          { label: "Volume", text: "$V = (2.00)^3 = 8.00\\ \\mathrm{cm^3}$." },
          { label: "Mass", text: "$m = \\rho V = 19.3 \\times 8.00 = 154.4\\ \\mathrm{g}$." },
          { label: "SI check", text: "$154.4\\ \\mathrm{g} = 0.154\\ \\mathrm{kg}$; via $19300\\ \\mathrm{kg/m^3} \\times 8.00 \\times 10^{-6}\\ \\mathrm{m^3} = 0.154\\ \\mathrm{kg}$." }
        ],
        result: "About $154\\ \\mathrm{g}$ ($0.154\\ \\mathrm{kg}$) — density times volume with units carried."
      }
    ],
    keyTakeaways: [
      "Multiply by one: each conversion factor renames the same quantity.",
      "Cancel units diagonally; the surviving unit is the answer unit.",
      "Density $\\rho = m/V$ links mass, volume, and unit systems."
    ],
    quiz: [
      {
        q: "Why is multiplying by $(60\\ \\mathrm{s}/1\\ \\mathrm{min})$ legal?",
        options: ["It adds extra seconds", "Numerator and denominator are the same time, so the factor equals 1", "Seconds are dimensionless", "It changes the physical quantity"],
        answer: 1,
        explanation: "A conversion factor renames units without changing value — multiplying by 1 in disguise."
      },
      {
        q: "$1\\ \\mathrm{g/cm^3}$ equals:",
        options: ["$1\\ \\mathrm{kg/m^3}$", "$1000\\ \\mathrm{kg/m^3}$", "$0.001\\ \\mathrm{kg/m^3}$", "$100\\ \\mathrm{kg/m^3}$"],
        answer: 1,
        explanation: "$(10^{-3}\\ \\mathrm{kg})/(10^{-6}\\ \\mathrm{m^3}) = 10^{3}\\ \\mathrm{kg/m^3}$."
      },
      {
        q: "A calculation ending in $\\mathrm{kg\\cdot m/s^2}$ has computed:",
        options: ["An energy", "A force (newtons)", "A pressure", "A density"],
        answer: 1,
        explanation: "Carrying units through $ma$ produces $\\mathrm{kg\\cdot m/s^2}$, the definition of the newton."
      }
    ]
  },
  {
    sectionId: "young-ch1-s5",
    readingTime: 6,
    intro: "No measurement is exact: instruments, reading, and the quantity itself all contribute uncertainty. This section separates random from systematic error and teaches the significant-figure rules that keep reported results honest.",
    objectives: [
      "Distinguish random uncertainty from systematic bias",
      "Apply significant-figure rules for products and sums",
      "Round honestly without manufacturing precision"
    ],
    concepts: [
      {
        term: "Uncertainty",
        kind: "definition",
        statement: "**Uncertainty** is the doubt about a measurement outcome; **error** in physics usually means this uncertainty, not a mistake.",
        detail: "A length $25.3 \\pm 0.2\\ \\mathrm{cm}$ asserts the true value very likely lies between $25.1$ and $25.5\\ \\mathrm{cm}$."
      },
      {
        term: "Random versus systematic",
        kind: "definition",
        statement: "**Random** uncertainties scatter either way and average down; **systematic** biases push every reading one way and do not average away.",
        detail: "Parallax misreading is largely random; an unzeroed balance reading $0.5\\ \\mathrm{g}$ high is systematic and must be corrected."
      },
      {
        term: "Significant figures",
        kind: "notation",
        statement: "**Significant figures** are the digits known reliably plus the first doubtful one; they record precision, not just value.",
        detail: "$25.3\\ \\mathrm{cm}$ has three; $0.00450\\ \\mathrm{m}$ has three (leading zeros never count, trailing zeros after a decimal do)."
      },
      {
        term: "Products and quotients rule",
        kind: "theorem",
        statement: "For **multiplication and division**, the result carries **as many significant figures as the least precise factor**.",
        detail: "$3.1416 \\times 2.34 = 7.35$ (three figures, set by $2.34$); claiming $7.350$ would invent precision."
      },
      {
        term: "Sums and differences rule",
        kind: "theorem",
        statement: "For **addition and subtraction**, the result is cut at the **coarsest decimal place** present in any term.",
        detail: "$123 + 5.35$ rounds to $128$ at the ones place; $24.68 - 24.61 = 0.07$ keeps only hundredths."
      }
    ],
    examples: [
      {
        title: "Area with honest precision",
        problem: "A plate measures $12.4\\ \\mathrm{cm}$ by $6.8\\ \\mathrm{cm}$. Report its area.",
        steps: [
          { label: "Multiply", text: "$12.4 \\times 6.8 = 84.32\\ \\mathrm{cm^2}$ on the calculator." },
          { label: "Apply rule", text: "Each factor has three and two figures; the answer keeps two." },
          { label: "Round", text: "$84.32 \\to 84\\ \\mathrm{cm^2}$." }
        ],
        result: "$84\\ \\mathrm{cm^2}$ — two significant figures, set by $6.8\\ \\mathrm{cm}$."
      },
      {
        title: "Adding lengths",
        problem: "Add $12.5\\ \\mathrm{m} + 3.42\\ \\mathrm{m} + 0.238\\ \\mathrm{m}$.",
        steps: [
          { label: "Raw sum", text: "$12.5 + 3.42 + 0.238 = 16.158\\ \\mathrm{m}$." },
          { label: "Apply rule", text: "Coarsest term $12.5$ stops at tenths." },
          { label: "Round", text: "$16.158 \\to 16.2\\ \\mathrm{m}$." }
        ],
        result: "$16.2\\ \\mathrm{m}$ — tenths place is the last honest digit."
      }
    ],
    keyTakeaways: [
      "Report uncertainty explicitly; error means doubt, not blunder.",
      "Products keep the fewest figures; sums keep the coarsest decimal place.",
      "Never publish precision your inputs do not own."
    ],
    quiz: [
      {
        q: "An unzeroed scale reading $0.5\\ \\mathrm{g}$ high on every mass is:",
        options: ["Random uncertainty", "Systematic bias", "A significant figure", "A conversion factor"],
        answer: 1,
        explanation: "It shifts all readings one way and survives averaging; only recalibration removes it."
      },
      {
        q: "How many significant figures in $0.00450\\ \\mathrm{m}$?",
        options: ["2", "3", "5", "6"],
        answer: 1,
        explanation: "Leading zeros never count; digits run 4, 5, 0 — the trailing zero after the decimal is significant."
      },
      {
        q: "$8.2\\ \\mathrm{m} \\times 4.1\\ \\mathrm{m}$ should be reported as:",
        options: ["$33.62\\ \\mathrm{m^2}$", "$34\\ \\mathrm{m^2}$", "$33.6\\ \\mathrm{m^2}$", "$30\\ \\mathrm{m^2}$"],
        answer: 1,
        explanation: "Two figures in, two figures out: $33.62 \\to 34\\ \\mathrm{m^2}$."
      }
    ]
  },
  {
    sectionId: "young-ch1-s6",
    readingTime: 5,
    intro: "Many exam and real-world questions need only the power of ten, not the exact digit. This section teaches Fermi estimation: replace unknowns by reasonable bounds, compute, and bracket the answer within a factor of a few.",
    objectives: [
      "Construct Fermi estimates from rough but reasoned inputs",
      "Bracket answers between lower and upper bounds",
      "Use powers of ten and unit volumes for counting estimates"
    ],
    concepts: [
      {
        term: "Order of magnitude",
        kind: "definition",
        statement: "The **order of magnitude** is the power of ten nearest a quantity: $3 \\times 10^{5}$ and $8 \\times 10^{5}$ are both $\\sim 10^{5}$–$10^{6}$.",
        detail: "Being right within a factor of $3$–$10$ counts as success; the point is scale, not digits."
      },
      {
        term: "Fermi estimation recipe",
        kind: "method",
        statement: "**Estimate by bounding:** split the unknown into **countable factors**, guess each within a factor of a few, and **multiply the bounds**.",
        detail: "Piano tuners in Chicago: population $\\times$ households $\\times$ pianos per home $\\times$ tunings per year $\\div$ tunings per tuner — each factor guessed to half an order."
      },
      {
        term: "Reasonable-assumption discipline",
        kind: "method",
        statement: "State **every assumption numerically** so the estimate can be checked and tightened.",
        detail: "Writing fingernail growth $\\sim 1\\ \\mathrm{mm/month}$ exposes the input to correction; hiding it does not."
      },
      {
        term: "Unit-volume counting",
        kind: "method",
        statement: "Count large populations by **dividing a total volume by a unit volume**: $N \\approx V_{\\mathrm{tot}}/V_{\\mathrm{one}}$.",
        detail: "Cells in a body, grains of sand on a beach, and breaths of air in a room all yield to one volume ratio."
      },
      {
        term: "Limits of estimation",
        kind: "insight",
        statement: "Estimation **cannot replace measurement** where factors cancel or exponents amplify; it gives **scale and sanity checks**.",
        detail: "A $10$% input error raised to the third power becomes $30$% — fine for orders of magnitude, fatal for precision engineering."
      }
    ],
    figures: [
      {
        caption: "Fermi ladder: $10^{0} \\to 10^{3} \\to 10^{6} \\to 10^{9}$ bracketing an estimate within a factor of ten",
        svg: `<svg viewBox="0 0 720 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Order of magnitude ladder"><line x1="60" y1="130" x2="660" y2="130" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="130" r="8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="280" cy="130" r="8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="440" cy="130" r="8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="600" cy="130" r="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="120" y="105" font-size="14" text-anchor="middle" fill="currentColor">10⁰</text><text x="280" y="105" font-size="14" text-anchor="middle" fill="currentColor">10³</text><text x="440" y="105" font-size="14" text-anchor="middle" fill="currentColor">10⁶</text><text x="600" y="105" font-size="14" text-anchor="middle" fill="currentColor">10⁹</text><text x="120" y="155" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">fingernail/mo</text><text x="280" y="155" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">people/city</text><text x="440" y="155" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">cells approx</text><text x="600" y="155" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">stars/galaxy</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "How many cells in a human?",
        problem: "Estimate the number of cells in a $70\\ \\mathrm{kg}$ adult.",
        steps: [
          { label: "Body volume", text: "Density near water: $V \\approx 70\\ \\mathrm{kg}/1000\\ \\mathrm{kg/m^3} = 0.07\\ \\mathrm{m^3}$." },
          { label: "Cell volume", text: "Typical cell $\\sim 10\\ \\mathrm{\\mu m}$ across: $V_{\\mathrm{cell}} \\sim (10^{-5}\\ \\mathrm{m})^3 = 10^{-15}\\ \\mathrm{m^3}$." },
          { label: "Divide", text: "$N \\sim 0.07/10^{-15} = 7 \\times 10^{13}$." }
        ],
        result: "$\\sim 10^{13}$–$10^{14}$ cells — correct order; real counts are tens of trillions."
      },
      {
        title: "Breaths of air in a room",
        problem: "Estimate breaths of air filling a $4 \\times 5 \\times 3\\ \\mathrm{m}$ classroom.",
        steps: [
          { label: "Room volume", text: "$V = 60\\ \\mathrm{m^3} = 6.0 \\times 10^{4}\\ \\mathrm{L}$." },
          { label: "One breath", text: "Tidal volume $\\sim 0.5\\ \\mathrm{L}$." },
          { label: "Divide", text: "$N \\sim 6.0 \\times 10^{4}/0.5 = 1.2 \\times 10^{5}$ breaths." }
        ],
        result: "$\\sim 10^{5}$ breaths fill the room."
      }
    ],
    keyTakeaways: [
      "Split unknowns into countable factors and bound each one.",
      "Report orders of magnitude honestly as powers of ten.",
      "Use estimates to check exact calculations, not replace them."
    ],
    quiz: [
      {
        q: "A Fermi estimate is successful when it:",
        options: ["Gives six significant figures", "Gets the power of ten right within a factor of a few", "Uses no assumptions", "Replaces all measurements"],
        answer: 1,
        explanation: "Scale is the product; digits come later from real data."
      },
      {
        q: "Best first step for cells in a body?",
        options: ["Count them under a microscope", "Divide body volume by typical cell volume", "Weigh one electron", "Measure the speed of light"],
        answer: 1,
        explanation: "Unit-volume counting turns an impossible census into one volume ratio."
      },
      {
        q: "Why state each assumption numerically?",
        options: ["To fill pages", "So others can check and tighten each factor", "To hide errors", "Because units cancel automatically"],
        answer: 1,
        explanation: "Explicit numbers expose weak links; hidden guesses cannot be corrected."
      }
    ]
  },
  {
    sectionId: "young-ch1-s7",
    readingTime: 6,
    intro: "Displacement, velocity, force — none fits in a single number because direction matters. This section introduces vectors geometrically and defines addition and subtraction by the parallelogram and polygon rules that all later dynamics obeys.",
    objectives: [
      "Distinguish vectors from scalars with examples",
      "Add and subtract vectors graphically by tail-to-tip",
      "Interpret the resultant and null vector geometrically"
    ],
    concepts: [
      {
        term: "Scalar versus vector",
        kind: "definition",
        statement: "A **scalar** needs only magnitude ($T = 20^{\\circ}\\mathrm{C}$, $m = 2\\ \\mathrm{kg}$); a **vector** needs magnitude **and** direction ($\\vec{v}$, $\\vec{F}$).",
        detail: "Speed $10\\ \\mathrm{m/s}$ is scalar; velocity $10\\ \\mathrm{m/s}$ due east is a vector — rotating it changes the motion."
      },
      {
        term: "Vector notation and magnitude",
        kind: "notation",
        statement: "Vectors print as **bold with an arrow** $\\vec{A}$; magnitude is $|\\vec{A}| = A$, a non-negative scalar.",
        detail: "In handwriting add the arrow; in print the boldface carries it. $A = 0$ means the null vector, not a missing direction."
      },
      {
        term: "Vector addition: tail to tip",
        kind: "method",
        statement: "**Place vectors tail to tip; the resultant $\\vec{R} = \\vec{A} + \\vec{B}$ runs from the first tail to the last tip.** Order does not matter.",
        detail: "The parallelogram diagonal and the tip-to-tail polygon give the same $\\vec{R}$; Young uses both pictures interchangeably."
      },
      {
        term: "Commutative and associative laws",
        kind: "theorem",
        statement: "Vector addition is **commutative** $\\vec{A}+\\vec{B} = \\vec{B}+\\vec{A}$ and **associative** $(\\vec{A}+\\vec{B})+\\vec{C} = \\vec{A}+(\\vec{B}+\\vec{C})$.",
        detail: "Any grouping of tail-to-tip chains ends at the same resultant tip — the polygon closes identically."
      },
      {
        term: "Subtraction and scalar multiples",
        kind: "method",
        statement: "**Subtraction** adds the reversed vector: $\\vec{A} - \\vec{B} = \\vec{A} + (-\\vec{B})$; $k\\vec{A}$ scales length by $|k|$ and flips for $k < 0$.",
        detail: "$2\\vec{A}$ is twice as long in the same direction; $-\\vec{A}$ keeps length and reverses direction."
      }
    ],
    examples: [
      {
        title: "Hiking resultant",
        problem: "A hiker walks $3.0\\ \\mathrm{km}$ east then $4.0\\ \\mathrm{km}$ north. Find the resultant displacement.",
        steps: [
          { label: "Sketch", text: "Tail-to-tip right triangle: legs $3.0$ east, $4.0$ north." },
          { label: "Magnitude", text: "$R = \\sqrt{3.0^2 + 4.0^2} = 5.0\\ \\mathrm{km}$." },
          { label: "Direction", text: "$\\theta = \\arctan(4.0/3.0) = 53^{\\circ}$ north of east." }
        ],
        result: "$5.0\\ \\mathrm{km}$ at $53^{\\circ}$ north of east — the polygon diagonal."
      },
      {
        title: "Subtracting displacements",
        problem: "Given $\\vec{A}$ ($5.0\\ \\mathrm{m}$ east) and $\\vec{B}$ ($3.0\\ \\mathrm{m}$ east), find $\\vec{A} - \\vec{B}$.",
        steps: [
          { label: "Reverse", text: "$-\\vec{B}$ points $3.0\\ \\mathrm{m}$ west." },
          { label: "Add", text: "Tail-to-tip: $5.0$ east plus $3.0$ west leaves $2.0\\ \\mathrm{m}$ east." },
          { label: "Check", text: "Magnitudes subtract only because directions are antiparallel here; in general use the triangle." }
        ],
        result: "$2.0\\ \\mathrm{m}$ east."
      }
    ],
    keyTakeaways: [
      "Vectors carry direction; scalars do not.",
      "Add tail-to-tip; the resultant closes the polygon.",
      "Subtract by adding the reversed vector; scale by stretching or flipping."
    ],
    quiz: [
      {
        q: "Which is a vector?",
        options: ["Temperature $20^{\\circ}\\mathrm{C}$", "Force $5\\ \\mathrm{N}$ south", "Mass $2\\ \\mathrm{kg}$", "Time $10\\ \\mathrm{s}$"],
        answer: 1,
        explanation: "Force needs direction; the other three are fully described by one number plus unit."
      },
      {
        q: "Graphically, $\\vec{R} = \\vec{A} + \\vec{B}$ is:",
        options: ["The difference of lengths $A - B$", "The arrow from the first tail to the last tip after tail-to-tip placement", "Always longer than both $A$ and $B$", "A scalar"],
        answer: 1,
        explanation: "Tail-to-tip chaining defines addition; the resultant closes the chain."
      },
      {
        q: "$\\vec{A} - \\vec{B}$ equals:",
        options: ["$\\vec{A} + (-\\vec{B})$", "$B - A$ as scalars always", "Zero for all vectors", "A scalar"],
        answer: 0,
        explanation: "Subtraction is addition of the reversed vector — flip $\\vec{B}$, then chain."
      }
    ]
  },
  {
    sectionId: "young-ch1-s8",
    readingTime: 6,
    intro: "Graphical addition is intuitive but imprecise. Resolving each vector into perpendicular components turns addition into ordinary arithmetic on numbers — the workhorse method for every equilibrium and projectile problem ahead.",
    objectives: [
      "Resolve a vector into rectangular components from magnitude and angle",
      "Recover magnitude and direction from components",
      "Add vectors analytically via summed components"
    ],
    concepts: [
      {
        term: "Components of a vector",
        kind: "definition",
        statement: "The **rectangular components** $A_x = A\\cos\\theta$, $A_y = A\\sin\\theta$ are the signed projections of $\\vec{A}$ on the axes.",
        detail: "$\\theta$ is measured from $+x$ toward $+y$; components can be negative when the vector points along $-x$ or $-y$."
      },
      {
        term: "Magnitude and direction from components",
        kind: "theorem",
        statement: "Given $(A_x, A_y)$: **$A = \\sqrt{A_x^2 + A_y^2}$** and **$\\tan\\theta = A_y/A_x$**, with the quadrant fixed by the signs.",
        detail: "$A_x < 0$, $A_y > 0$ puts $\\vec{A}$ in quadrant II, so $\\theta$ lies between $90^{\\circ}$ and $180^{\\circ}$."
      },
      {
        term: "Component addition",
        kind: "method",
        statement: "Add **component by component**: $R_x = A_x + B_x$, $R_y = A_y + B_y$, then $R = \\sqrt{R_x^2 + R_y^2}$.",
        detail: "Two-dimensional geometry collapses to two one-dimensional sums — exact, unlike ruler-and-protractor graphics."
      },
      {
        term: "Sign conventions",
        kind: "notation",
        statement: "**Signs carry direction**: $+A_x$ points along $+x$, $-A_x$ along $-x$; swapping $\\theta$ by $180^{\\circ}$ flips both signs.",
        detail: "A vector $10\\ \\mathrm{m}$ at $210^{\\circ}$ has $A_x = 10\\cos 210^{\\circ} = -8.66\\ \\mathrm{m}$, $A_y = -5.00\\ \\mathrm{m}$."
      },
      {
        term: "Choosing axes strategically",
        kind: "insight",
        statement: "Any perpendicular axes work, but **aligning one axis with the motion or slope** minimizes nonzero components.",
        detail: "On an incline, $x$ down the plane leaves gravity with two simple projections instead of awkward angles."
      }
    ],
    figures: [
      {
        caption: "Resolving $\\vec{A}$ into $A_x = A\\cos\\theta$ and $A_y = A\\sin\\theta$ on rectangular axes",
        svg: `<svg viewBox="0 0 720 210" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vector components"><line x1="80" y1="160" x2="640" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="120" y1="20" x2="120" y2="180" stroke="currentColor" stroke-width="1.5"/><line x1="120" y1="160" x2="520" y2="50" stroke="currentColor" stroke-width="2.5"/><polygon points="520,50 495,55 500,70" fill="currentColor"/><line x1="120" y1="160" x2="520" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="520" y1="160" x2="520" y2="50" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="330" y="185" font-size="14" fill="currentColor">Ax = A cos theta</text><text x="545" y="110" font-size="14" fill="currentColor">Ay = A sin theta</text><text x="300" y="100" font-size="14" fill="currentColor">A</text><path d="M 200 160 A 80 80 0 0 0 185 130" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="210" y="140" font-size="13" fill="currentColor">theta</text><text x="650" y="165" font-size="13" fill="currentColor">x</text><text x="125" y="30" font-size="13" fill="currentColor">y</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Components of a pull",
        problem: "A rope pulls with $A = 100\\ \\mathrm{N}$ at $36.9^{\\circ}$ above $+x$. Find $A_x$ and $A_y$.",
        steps: [
          { label: "Project", text: "$A_x = 100\\cos 36.9^{\\circ} = 100 \\times 0.800 = 80.0\\ \\mathrm{N}$." },
          { label: "Project", text: "$A_y = 100\\sin 36.9^{\\circ} = 100 \\times 0.600 = 60.0\\ \\mathrm{N}$." },
          { label: "Check", text: "$\\sqrt{80^2 + 60^2} = 100\\ \\mathrm{N}$ — the 3-4-5 triangle." }
        ],
        result: "$A_x = 80.0\\ \\mathrm{N}$, $A_y = 60.0\\ \\mathrm{N}$."
      },
      {
        title: "Adding two forces analytically",
        problem: "$\\vec{A} = (80, 60)\\ \\mathrm{N}$, $\\vec{B} = (-20, 30)\\ \\mathrm{N}$. Find $\\vec{R} = \\vec{A}+\\vec{B}$.",
        steps: [
          { label: "Sum x", text: "$R_x = 80 + (-20) = 60\\ \\mathrm{N}$." },
          { label: "Sum y", text: "$R_y = 60 + 30 = 90\\ \\mathrm{N}$." },
          { label: "Magnitude and angle", text: "$R = \\sqrt{60^2+90^2} = 108\\ \\mathrm{N}$; $\\theta = \\arctan(90/60) = 56.3^{\\circ}$ above $+x$." }
        ],
        result: "$108\\ \\mathrm{N}$ at $56.3^{\\circ}$ above $+x$."
      }
    ],
    keyTakeaways: [
      "Project with cosine for $x$ and sine for $y$ from $+x$ toward $+y$.",
      "Signs encode quadrant; arctangent alone does not fix direction.",
      "Vector addition is two scalar additions: $R_x$ and $R_y$."
    ],
    quiz: [
      {
        q: "A vector $A = 10\\ \\mathrm{m}$ at $210^{\\circ}$ has components:",
        options: ["$A_x = +8.66$, $A_y = +5.00$", "$A_x = -8.66$, $A_y = -5.00$", "$A_x = -5.00$, $A_y = -8.66$", "$A_x = 0$, $A_y = 10$"],
        answer: 1,
        explanation: "$\\cos 210^{\\circ} = -0.866$, $\\sin 210^{\\circ} = -0.500$ — quadrant III makes both negative."
      },
      {
        q: "Given $A_x = -6$, $A_y = 8$, the direction is:",
        options: ["$53^{\\circ}$ above $+x$", "$127^{\\circ}$ from $+x$", "$-53^{\\circ}$ from $+x$", "$37^{\\circ}$ below $+x$"],
        answer: 1,
        explanation: "$\\arctan(8/-6) = -53^{\\circ}$, but $(-,+)$ is quadrant II: $180 - 53 = 127^{\\circ}$."
      },
      {
        q: "To add vectors analytically you:",
        options: ["Add magnitudes and add angles", "Sum $x$-components and $y$-components separately", "Multiply magnitudes", "Average the directions"],
        answer: 1,
        explanation: "$R_x = A_x+B_x$, $R_y = A_y+B_y$ — geometry becomes arithmetic."
      }
    ]
  },
  {
    sectionId: "young-ch1-s9",
    readingTime: 4,
    intro: "Unit vectors factor direction out of every vector expression. Writing vectors as combinations of the Cartesian triad turns dot and cross products, kinematics, and dynamics into clean component algebra.",
    objectives: [
      "Write vectors in unit-vector form $\\vec{A} = A_x\\hat{\\imath} + A_y\\hat{\\jmath} + A_z\\hat{k}$",
      "Add vectors and scale them in unit-vector notation",
      "Extend components to three dimensions"
    ],
    concepts: [
      {
        term: "Cartesian unit vectors",
        kind: "definition",
        statement: "**$\\hat{\\imath}$, $\\hat{\\jmath}$, $\\hat{k}$** are dimensionless vectors of **unit length** along $+x$, $+y$, $+z$.",
        detail: "$|\\hat{\\imath}| = |\\hat{\\jmath}| = |\\hat{k}| = 1$ exactly; the hat marks unit magnitude."
      },
      {
        term: "Unit-vector expansion",
        kind: "notation",
        statement: "Any vector expands as **$\\vec{A} = A_x\\hat{\\imath} + A_y\\hat{\\jmath} + A_z\\hat{k}$**, with $A = \\sqrt{A_x^2+A_y^2+A_z^2}$.",
        detail: "Example: $\\vec{A} = 3.0\\hat{\\imath} - 2.0\\hat{\\jmath} + 5.0\\hat{k}\\ \\mathrm{m}$ names all three projections at once."
      },
      {
        term: "Addition in unit-vector form",
        kind: "method",
        statement: "Add **coefficient by coefficient**: if $\\vec{R} = \\vec{A}+\\vec{B}$ then $R_x = A_x+B_x$, $R_y = A_y+B_y$, $R_z = A_z+B_z$.",
        detail: "So $(3\\hat{\\imath}+2\\hat{\\jmath}) + (-1\\hat{\\imath}+4\\hat{\\jmath}) = 2\\hat{\\imath}+6\\hat{\\jmath}$."
      },
      {
        term: "Unit vector along an arbitrary direction",
        kind: "method",
        statement: "The **unit vector along $\\vec{A}$** is $\\hat{A} = \\vec{A}/A$, so $\\vec{A} = A\\hat{A}$.",
        detail: "Dividing $(3,4)\\ \\mathrm{m}$ by $5\\ \\mathrm{m}$ gives the direction $(0.6\\hat{\\imath}+0.8\\hat{\\jmath})$ with no units."
      },
      {
        term: "Right-handed triad",
        kind: "insight",
        statement: "**$\\hat{\\imath} \\times \\hat{\\jmath} = \\hat{k}$** cyclically: point fingers along $x$, curl toward $y$, thumb gives $z$.",
        detail: "Young uses right-handed coordinates throughout; a left-handed choice would flip every cross-product sign."
      }
    ],
    examples: [
      {
        title: "Writing a displacement",
        problem: "A displacement has $A_x = -4.0\\ \\mathrm{m}$, $A_y = 3.0\\ \\mathrm{m}$, $A_z = 0$. Write it in unit-vector form and find $A$.",
        steps: [
          { label: "Expand", text: "$\\vec{A} = -4.0\\hat{\\imath} + 3.0\\hat{\\jmath}\\ \\mathrm{m}$." },
          { label: "Magnitude", text: "$A = \\sqrt{(-4.0)^2 + 3.0^2} = 5.0\\ \\mathrm{m}$." },
          { label: "Direction unit vector", text: "$\\hat{A} = (-0.80\\hat{\\imath} + 0.60\\hat{\\jmath})$, dimensionless." }
        ],
        result: "$\\vec{A} = -4.0\\hat{\\imath}+3.0\\hat{\\jmath}\\ \\mathrm{m}$, $A = 5.0\\ \\mathrm{m}$."
      },
      {
        title: "Adding in three dimensions",
        problem: "$\\vec{A} = 2\\hat{\\imath}-\\hat{\\jmath}+3\\hat{k}$, $\\vec{B} = -\\hat{\\imath}+4\\hat{\\jmath}-2\\hat{k}$ (meters). Find $\\vec{R}$.",
        steps: [
          { label: "Sum x", text: "$R_x = 2 + (-1) = 1$." },
          { label: "Sum y and z", text: "$R_y = -1+4 = 3$; $R_z = 3+(-2) = 1$." },
          { label: "Assemble", text: "$\\vec{R} = \\hat{\\imath}+3\\hat{\\jmath}+\\hat{k}\\ \\mathrm{m}$, $R = \\sqrt{11} = 3.32\\ \\mathrm{m}$." }
        ],
        result: "$\\vec{R} = (1,3,1)\\ \\mathrm{m}$, magnitude $3.32\\ \\mathrm{m}$."
      }
    ],
    keyTakeaways: [
      "Unit vectors separate magnitude (numbers) from direction (hats).",
      "$\\vec{A} = A_x\\hat{\\imath}+A_y\\hat{\\jmath}+A_z\\hat{k}$ is the standard mechanics shorthand.",
      "Right-handed $\\hat{\\imath},\\hat{\\jmath},\\hat{k}$ fixes all cross-product signs."
    ],
    quiz: [
      {
        q: "What is $\\hat{A} = \\vec{A}/A$?",
        options: ["A scalar with units", "The dimensionless unit vector along $\\vec{A}$", "The magnitude of $\\vec{A}$", "Always $\\hat{\\imath}$"],
        answer: 1,
        explanation: "Dividing by magnitude strips units and length, leaving pure direction."
      },
      {
        q: "$(3\\hat{\\imath}+2\\hat{\\jmath}) + (-1\\hat{\\imath}+4\\hat{\\jmath})$ equals:",
        options: ["$2\\hat{\\imath}+6\\hat{\\jmath}$", "$4\\hat{\\imath}-2\\hat{\\jmath}$", "$3\\hat{\\imath}+8\\hat{\\jmath}$", "$2\\hat{\\imath}-6\\hat{\\jmath}$"],
        answer: 0,
        explanation: "Add coefficients: $3-1 = 2$ for $\\hat{\\imath}$, $2+4 = 6$ for $\\hat{\\jmath}$."
      },
      {
        q: "Right-handed coordinates satisfy:",
        options: ["$\\hat{\\imath} \\times \\hat{\\jmath} = -\\hat{k}$", "$\\hat{\\imath} \\times \\hat{\\jmath} = \\hat{k}$", "$|\\hat{\\imath}| = 9.8$", "$\\hat{\\imath} = \\hat{\\jmath}$"],
        answer: 1,
        explanation: "Cyclic right-hand rule: $x$ cross $y$ gives $z$."
      }
    ]
  },
  {
    sectionId: "young-ch1-s10",
    readingTime: 7,
    intro: "Two vectors multiply in two distinct ways: the dot product returns a scalar measuring alignment, and the cross product returns a vector measuring perpendicularity. Both pervade mechanics — work uses the dot, torque and magnetism use the cross.",
    objectives: [
      "Compute dot products geometrically and from components",
      "Compute cross products geometrically and from components",
      "Interpret orthogonality, projection, and area via the two products"
    ],
    concepts: [
      {
        term: "Scalar (dot) product",
        kind: "definition",
        statement: "The **dot product** $\\vec{A}\\cdot\\vec{B} = AB\\cos\\phi$ is a **scalar** measuring parallel alignment ($\\phi$ between vectors).",
        detail: "Parallel vectors give $+AB$; antiparallel give $-AB$; perpendicular give $0$."
      },
      {
        term: "Dot product in components",
        kind: "theorem",
        statement: "**$\\vec{A}\\cdot\\vec{B} = A_xB_x + A_yB_y + A_zB_z$**, since $\\hat{\\imath}\\cdot\\hat{\\imath} = 1$ and mixed hats dot to $0$.",
        detail: "Example: $(3,2,0)\\cdot(-1,4,0) = -3+8 = 5$."
      },
      {
        term: "Projection via the dot",
        kind: "method",
        statement: "The **scalar projection** of $\\vec{A}$ on $\\vec{B}$ is $A\\cos\\phi = (\\vec{A}\\cdot\\vec{B})/B$.",
        detail: "Work $W = \\vec{F}\\cdot\\vec{s} = Fs\\cos\\phi$ is exactly this projection times displacement — only the parallel force works."
      },
      {
        term: "Vector (cross) product",
        kind: "definition",
        statement: "The **cross product** $\\vec{C} = \\vec{A}\\times\\vec{B}$ has magnitude **$C = AB\\sin\\phi$** and direction by the **right-hand rule**.",
        detail: "$\\vec{C}$ is perpendicular to both $\\vec{A}$ and $\\vec{B}$; $\\vec{B}\\times\\vec{A} = -\\vec{A}\\times\\vec{B}$ (anticommutative)."
      },
      {
        term: "Cross product in components",
        kind: "theorem",
        statement: "**$\\vec{A}\\times\\vec{B} = (A_yB_z-A_zB_y)\\hat{\\imath} + (A_zB_x-A_xB_z)\\hat{\\jmath} + (A_xB_y-A_yB_x)\\hat{k}$**.",
        detail: "Cyclic hats: $\\hat{\\imath}\\times\\hat{\\jmath} = \\hat{k}$, $\\hat{\\jmath}\\times\\hat{k} = \\hat{\\imath}$, $\\hat{k}\\times\\hat{\\imath} = \\hat{\\jmath}$; self-crosses vanish."
      },
      {
        term: "Geometric meanings",
        kind: "insight",
        statement: "**$|\\vec{A}\\times\\vec{B}|$ is the parallelogram area** spanned by $\\vec{A}$ and $\\vec{B}$; $\\vec{A}\\cdot\\vec{B} = 0$ tests **perpendicularity**.",
        detail: "Torque magnitude $\\tau = rF\\sin\\phi$ and magnetic force $F = qvB\\sin\\phi$ are cross-product magnitudes in disguise."
      }
    ],
    figures: [
      {
        caption: "Dot uses $\\cos\\phi$ (parallel part); cross uses $\\sin\\phi$ (perpendicular part, out of page)",
        svg: `<svg viewBox="0 0 720 200" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dot versus cross product"><line x1="60" y1="150" x2="300" y2="150" stroke="currentColor" stroke-width="2.5"/><polygon points="300,150 285,144 285,156" fill="currentColor"/><line x1="60" y1="150" x2="250" y2="60" stroke="currentColor" stroke-width="2.5"/><polygon points="250,60 235,68 240,80" fill="currentColor"/><text x="180" y="172" font-size="13" fill="currentColor">A</text><text x="250" y="70" font-size="13" fill="currentColor">B</text><path d="M 130 150 A 70 70 0 0 0 115 115" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="140" y="130" font-size="12" fill="currentColor">phi</text><line x1="200" y1="105" x2="200" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="205" y="130" font-size="11" fill="currentColor" opacity="0.7">A cos phi (dot)</text><line x1="430" y1="150" x2="660" y2="150" stroke="currentColor" stroke-width="2.5"/><polygon points="660,150 645,144 645,156" fill="currentColor"/><line x1="430" y1="150" x2="600" y2="70" stroke="currentColor" stroke-width="2.5"/><polygon points="600,70 585,78 590,90" fill="currentColor"/><circle cx="545" cy="110" r="14" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="545" cy="110" r="3" fill="currentColor"/><text x="545" y="170" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">A x B out of page (cross)</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Work-style dot product",
        problem: "$\\vec{A} = 3\\hat{\\imath}+4\\hat{\\jmath}$, $\\vec{B} = 2\\hat{\\imath}-\\hat{\\jmath}$. Find $\\vec{A}\\cdot\\vec{B}$ and the angle.",
        steps: [
          { label: "Components", text: "$\\vec{A}\\cdot\\vec{B} = (3)(2)+(4)(-1) = 6-4 = 2$." },
          { label: "Magnitudes", text: "$A = 5$, $B = \\sqrt{5} = 2.236$." },
          { label: "Angle", text: "$\\cos\\phi = 2/(5 \\times 2.236) = 0.1789$, so $\\phi = 79.7^{\\circ}$." }
        ],
        result: "Dot $2$; nearly perpendicular ($79.7^{\\circ}$)."
      },
      {
        title: "Area-style cross product",
        problem: "$\\vec{A} = 4\\hat{\\imath}$, $\\vec{B} = 3\\hat{\\imath}+3\\hat{\\jmath}$. Find $\\vec{A}\\times\\vec{B}$.",
        steps: [
          { label: "Formula", text: "$C_z = A_xB_y - A_yB_x = 4 \\times 3 - 0 = 12$." },
          { label: "Vector", text: "$\\vec{A}\\times\\vec{B} = 12\\hat{k}$." },
          { label: "Check", text: "$|C| = AB\\sin\\phi = 4 \\times 4.243 \\times \\sin 45^{\\circ} = 12$ — parallelogram area." }
        ],
        result: "$12\\hat{k}$ — magnitude $12$, direction $+z$ by the right-hand rule."
      }
    ],
    keyTakeaways: [
      "Dot is a scalar via cosine: $AB\\cos\\phi = A_xB_x+A_yB_y+A_zB_z$.",
      "Cross is a vector via sine with right-hand direction; order flips sign.",
      "Work projects with the dot; torque and area use the cross."
    ],
    quiz: [
      {
        q: "If $\\vec{A}\\cdot\\vec{B} = 0$ for nonzero vectors, they are:",
        options: ["Parallel", "Perpendicular", "Equal", "Zero"],
        answer: 1,
        explanation: "$AB\\cos\\phi = 0$ forces $\\cos\\phi = 0$, i.e. $\\phi = 90^{\\circ}$."
      },
      {
        q: "$\\vec{B}\\times\\vec{A}$ compared with $\\vec{A}\\times\\vec{B}$ is:",
        options: ["The same vector", "The negated vector", "A scalar", "Always zero"],
        answer: 1,
        explanation: "Cross product is anticommutative — swapping fingers reverses the thumb."
      },
      {
        q: "$(3\\hat{\\imath}+0\\hat{\\jmath}) \\cdot (0\\hat{\\imath}+4\\hat{\\jmath})$ equals:",
        options: ["$12$", "$0$", "$7$", "$12\\hat{k}$"],
        answer: 1,
        explanation: "Perpendicular axes: $(3)(0)+(0)(4) = 0$."
      },
      {
        q: "Torque $\\vec{\\tau} = \\vec{r}\\times\\vec{F}$ is largest when:",
        options: ["$\\vec{r}$ is parallel to $\\vec{F}$", "$\\vec{r}$ is perpendicular to $\\vec{F}$", "$\\vec{r} = 0$", "$\\vec{F} = 0$"],
        answer: 1,
        explanation: "$|\\tau| = rF\\sin\\phi$ peaks at $\\sin\\phi = 1$ ($90^{\\circ}$)."
      }
    ]
  }
];

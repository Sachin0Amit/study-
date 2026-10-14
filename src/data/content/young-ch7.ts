import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 7
// Potential Energy and Energy Conservation (Secs 7.1–7.5)
// ============================================================================

export const youngCh7Content: SectionContent[] = [
  {
    sectionId: "young-ch7-s1",
    readingTime: 6,
    intro: "Gravity stores work as gravitational potential energy $U_g = mgy$, ready to return as kinetic. This section defines $U_g$, proves $W_g = -\\Delta U_g$, and solves fall-and-coast problems by energy instead of kinematics.",
    objectives: [
      "Define $U_{\\mathrm{grav}} = mgy$ with a chosen zero",
      "Use $K_1+U_1 = K_2+U_2$ for gravity-only motion",
      "Explain why only $\\Delta U$ carries physics"
    ],
    concepts: [
      {
        term: "Gravitational potential energy",
        kind: "definition",
        statement: "**$U_{\\mathrm{grav}} = mgy$** stores **$mg$ times height** above an arbitrary zero, in joules.",
        detail: "$2.0\\ \\mathrm{kg}$ at $3.0\\ \\mathrm{m}$ holds $58.8\\ \\mathrm{J}$ over ground zero."
      },
      {
        term: "Work as potential drop",
        kind: "theorem",
        statement: "**$W_g = U_1 - U_2 = -\\Delta U_g$**: gravity work equals potential lost.",
        detail: "Dropping $h$ converts $mgh$ from $U_g$ to $K$ with no other accounting."
      },
      {
        term: "Mechanical energy conservation",
        kind: "theorem",
        statement: "With **gravity only**: **$K_1 + U_{g1} = K_2 + U_{g2}$** — total $E$ is constant.",
        detail: "A $7.67\\ \\mathrm{m/s}$ drop from $3.0\\ \\mathrm{m}$: $mgh = \\frac{1}{2}mv^2$ directly."
      },
      {
        term: "Zero is arbitrary",
        kind: "insight",
        statement: "The **$U_g = 0$ level is free**; shifting it adds a constant to all $U_g$ and changes nothing physical.",
        detail: "Table-top versus floor zero differ by $mgh_{\\mathrm{table}}$ — differences $\\Delta U$ agree."
      },
      {
        term: "Energy versus kinematics",
        kind: "method",
        statement: "Energy gives **speeds from heights** in one line where kinematics needs time plus acceleration staging.",
        detail: "Winding slides, pendulums, and drops all collapse to $\\frac{1}{2}mv^2 + mgy = E$."
      }
    ],
    examples: [
      {
        title: "Slide speed from height",
        problem: "A $2.0\\ \\mathrm{kg}$ block starts rest $3.0\\ \\mathrm{m}$ above the base of a frictionless slide. Find base speed.",
        steps: [
          { label: "Energy", text: "$mgy_1 = \\frac{1}{2}mv_2^2$: $v_2 = \\sqrt{2gh} = \\sqrt{58.8} = 7.67\\ \\mathrm{m/s}$." },
          { label: "Mass cancels", text: "Both sides carry $m$ — any mass gives the same $v$." },
          { label: "Check", text: "Kinematics down a $30^{\\circ}$ $6.0\\ \\mathrm{m}$ ramp: $a = 4.90$, $v = \\sqrt{2 \\times 4.90 \\times 6.0} = 7.67$ — matches." }
        ],
        result: "$7.67\\ \\mathrm{m/s}$ at the base, path-independent."
      },
      {
        title: "Toss-up turnaround",
        problem: "A ball is thrown up at $12\\ \\mathrm{m/s}$. How high?",
        steps: [
          { label: "Energy", text: "$\\frac{1}{2}mv_0^2 = mgH$: $H = 144/19.6 = 7.35\\ \\mathrm{m}$." },
          { label: "Zero choice", text: "Launch level as $U = 0$; only $H$ matters." },
          { label: "Return", text: "Falling back converts $mgH$ to the same $12\\ \\mathrm{m/s}$ speed." }
        ],
        result: "$7.35\\ \\mathrm{m}$ peak."
      }
    ],
    keyTakeaways: [
      "$U_g = mgy$ banks gravity work as height.",
      "Gravity-only flight conserves $K+U_g$.",
      "Zeros are conventional; differences decide motion."
    ],
    quiz: [
      {
        q: "Block sliding from $3.0\\ \\mathrm{m}$ frictionless reaches base at:",
        options: ["$3.0\\ \\mathrm{m/s}$", "$7.67\\ \\mathrm{m/s}$", "$29\\ \\mathrm{m/s}$", "Zero"],
        answer: 1,
        explanation: "$v = \\sqrt{2gh} = \\sqrt{58.8} = 7.67\\ \\mathrm{m/s}$."
      },
      {
        q: "Shifting the $U_g = 0$ level changes:",
        options: ["All speeds", "Nothing physical — only $\\Delta U$ matters", "Mass", "$g$"],
        answer: 1,
        explanation: "A common constant cancels in every $U_1-U_2$ difference."
      },
      {
        q: "Gravitational work $W_g$ equals:",
        options: ["$+\\Delta U_g$", "$-\\Delta U_g = U_1-U_2$", "$\\Delta K + \\Delta U$", "Zero always"],
        answer: 1,
        explanation: "Work by gravity drains the potential bank one-for-one."
      }
    ]
  },
  {
    sectionId: "young-ch7-s2",
    readingTime: 5,
    intro: "Springs bank energy as $U_{\\mathrm{el}} = \\frac{1}{2}kx^2$, trading it with kinetic in oscillations and launches. This section adds elastic storage to the conservation balance and solves spring-gun and hanging-mass problems.",
    objectives: [
      "Define $U_{\\mathrm{el}} = \\frac{1}{2}kx^2$",
      "Conserve $K+U_g+U_{\\mathrm{el}}$ without nonconservative work",
      "Solve launch and oscillation-turnaround problems"
    ],
    concepts: [
      {
        term: "Elastic potential energy",
        kind: "definition",
        statement: "**$U_{\\mathrm{el}} = \\frac{1}{2}kx^2$** stores **$\\frac{1}{2}$ stiffness times stretch squared**, zero at equilibrium.",
        detail: "$k = 500\\ \\mathrm{N/m}$, $x = 0.12\\ \\mathrm{m}$: $U = 3.60\\ \\mathrm{J}$."
      },
      {
        term: "Spring work rule",
        kind: "theorem",
        statement: "**$W_{\\mathrm{spring}} = U_1-U_2 = -\\Delta U_{\\mathrm{el}}$** — spring work drains its own bank.",
        detail: "Uncoiling from $0.12$ to $0$ does $+3.60\\ \\mathrm{J}$ on the load."
      },
      {
        term: "Combined conservation",
        kind: "theorem",
        statement: "With **gravity plus ideal springs only**: **$K_1+U_{g1}+U_{e1} = K_2+U_{g2}+U_{e2}$**.",
        detail: "A mass bobbing on a vertical spring swaps three accounts continuously."
      },
      {
        term: "Turnaround points",
        kind: "method",
        statement: "**Turnarounds have $K = 0$**: set $E = U$ to find amplitude or max stretch directly.",
        detail: "Dropping $m$ onto a spring from $h$: $mg(h+x) = \\frac{1}{2}kx^2$ solves $x_{\\max}$."
      },
      {
        term: "Always non-negative",
        kind: "insight",
        statement: "**$U_{\\mathrm{el}} \\ge 0$ always**, unlike $U_g$ which can be negative below zero — springs reference equilibrium absolutely.",
        detail: "Compression and extension store identically: $(-x)^2 = x^2$."
      }
    ],
    figures: [
      {
        caption: "Energy bars swap $K \\leftrightarrow U_{\\mathrm{el}}$ while $K+U_{\\mathrm{el}} = E$ stays fixed",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spring energy exchange"><rect x="120" y="60" width="80" height="90" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="2"/><rect x="120" y="110" width="80" height="40" fill="currentColor" opacity="0.35"/><rect x="320" y="60" width="80" height="90" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="2"/><rect x="320" y="60" width="80" height="60" fill="currentColor" opacity="0.35"/><rect x="520" y="60" width="80" height="90" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="2"/><rect x="520" y="90" width="80" height="60" fill="currentColor" opacity="0.35"/><text x="160" y="170" font-size="11" text-anchor="middle" fill="currentColor">max stretch</text><text x="360" y="170" font-size="11" text-anchor="middle" fill="currentColor">passing center</text><text x="560" y="170" font-size="11" text-anchor="middle" fill="currentColor">max compress</text><text x="360" y="40" font-size="12" text-anchor="middle" fill="currentColor">K + Uel = E always</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Spring gun",
        problem: "A $0.050\\ \\mathrm{kg}$ dart is fired vertically by $k = 800\\ \\mathrm{N/m}$ compressed $0.10\\ \\mathrm{m}$. How high?",
        steps: [
          { label: "Store", text: "$U_e = 0.5 \\times 800 \\times 0.01 = 4.0\\ \\mathrm{J}$." },
          { label: "Convert", text: "$4.0 = mgH = 0.050 \\times 9.80 \\times H$: $H = 8.16\\ \\mathrm{m}$." },
          { label: "Launch speed", text: "$4.0 = 0.5 \\times 0.050 \\times v^2$: $v = 12.6\\ \\mathrm{m/s}$ at muzzle." }
        ],
        result: "$8.16\\ \\mathrm{m}$ high; $12.6\\ \\mathrm{m/s}$ muzzle speed."
      },
      {
        title: "Drop onto a spring",
        problem: "A $1.0\\ \\mathrm{kg}$ mass falls $0.50\\ \\mathrm{m}$ onto $k = 2000\\ \\mathrm{N/m}$. Find max compression.",
        steps: [
          { label: "Energy", text: "$mg(h+x) = \\frac{1}{2}kx^2$: $9.80(0.50+x) = 1000x^2$." },
          { label: "Quadratic", text: "$1000x^2 - 9.80x - 4.90 = 0$: $x = [9.80 + \\sqrt{96+19600}]/2000 = 0.0750\\ \\mathrm{m}$." },
          { label: "Check", text: "Static sag $mg/k = 4.9\\ \\mathrm{mm}$; dynamic overshoot ~$15$ times larger." }
        ],
        result: "$7.50\\ \\mathrm{cm}$ max compression."
      }
    ],
    keyTakeaways: [
      "$U_{\\mathrm{el}} = \\frac{1}{2}kx^2$ banks stretch energy.",
      "Add elastic to gravity in one conserved total.",
      "Zero kinetic locates turnarounds and amplitudes."
    ],
    quiz: [
      {
        q: "$k = 800\\ \\mathrm{N/m}$ compressed $0.10\\ \\mathrm{m}$ stores:",
        options: ["$80\\ \\mathrm{J}$", "$4.0\\ \\mathrm{J}$", "$0.40\\ \\mathrm{J}$", "Zero"],
        answer: 1,
        explanation: "$0.5 \\times 800 \\times 0.01 = 4.0\\ \\mathrm{J}$."
      },
      {
        q: "Combined gravity-plus-spring conservation is:",
        options: ["$K_1 = K_2$ always", "$K_1+U_{g1}+U_{e1} = K_2+U_{g2}+U_{e2}$", "$U = 0$ always", "$W = 0$ always"],
        answer: 1,
        explanation: "Both potentials bank reversibly; their sum with $K$ is fixed."
      },
      {
        q: "At a spring turnaround:",
        options: ["$K$ is maximum", "$K = 0$ so $E = U$", "$U = 0$", "Speed is maximum"],
        answer: 1,
        explanation: "Instant rest parks all energy in the potentials."
      }
    ]
  },
  {
    sectionId: "young-ch7-s3",
    readingTime: 6,
    intro: "Not every force banks energy reversibly: gravity and springs do, friction does not. This section defines conservative forces by path-independence, shows friction dissipating $K$ into heat, and extends conservation with $W_{\\mathrm{other}}$.",
    objectives: [
      "Test forces for path-independence and round-trip work",
      "Explain friction as nonconservative dissipation",
      "Apply $K_1+U_1+W_{\\mathrm{other}} = K_2+U_2$"
    ],
    concepts: [
      {
        term: "Conservative force",
        kind: "definition",
        statement: "A force is **conservative** when work between two points is **path-independent**, equivalently **$\\oint\\vec{F}\\cdot d\\vec{r} = 0$**.",
        detail: "Gravity and ideal springs pass; kinetic friction and drag fail."
      },
      {
        term: "Nonconservative dissipation",
        kind: "definition",
        statement: "**Nonconservative** forces (friction, drag, thrusts) **drain or feed** mechanical energy depending on path and speed.",
        detail: "Longer slides burn more $K$ into heat: $W_f = -f_k s$ grows with distance."
      },
      {
        term: "Work-energy with other work",
        kind: "theorem",
        statement: "**$K_1 + U_1 + W_{\\mathrm{other}} = K_2 + U_2$**: nonconservative work shifts the mechanical total.",
        detail: "Pushing $+50\\ \\mathrm{J}$ while friction takes $-20$: $E$ rises by $30\\ \\mathrm{J}$."
      },
      {
        term: "Closed-loop test",
        kind: "method",
        statement: "**Round-trip work decides**: zero for conservative, negative (friction) or nonzero for nonconservative.",
        detail: "Lift-and-lower a mass: gravity nets zero; friction bleeds both ways."
      },
      {
        term: "Internal energy destination",
        kind: "insight",
        statement: "Lost mechanical energy becomes **internal (thermal) energy** — warmer surfaces, not vanished energy.",
        detail: "Total energy still conserves; mechanical $E$ alone does not when $W_{\\mathrm{other}} \\neq 0$."
      }
    ],
    examples: [
      {
        title: "Slide with friction",
        problem: "A $2.0\\ \\mathrm{kg}$ block slides from $3.0\\ \\mathrm{m}$ up a $6.0\\ \\mathrm{m}$ ramp with $f_k = 5.0\\ \\mathrm{N}$. Find base speed.",
        steps: [
          { label: "Ideal energy", text: "$mgh = 58.8\\ \\mathrm{J}$ available." },
          { label: "Friction toll", text: "$W_f = -5.0 \\times 6.0 = -30\\ \\mathrm{J}$." },
          { label: "Remainder", text: "$58.8 - 30 = 28.8 = 0.5 \\times 2.0 \\times v^2$: $v = 5.37\\ \\mathrm{m/s}$ (vs $7.67$ frictionless)." }
        ],
        result: "$5.37\\ \\mathrm{m/s}$ — friction claims nearly half the bank."
      },
      {
        title: "Loop test",
        problem: "Carry $10\\ \\mathrm{N}$ friction around a $20\\ \\mathrm{m}$ loop. Round-trip work?",
        steps: [
          { label: "Work", text: "$W = -10 \\times 20 = -200\\ \\mathrm{J}$." },
          { label: "Verdict", text: "Nonzero loop work proves nonconservative." },
          { label: "Gravity contrast", text: "Gravity around any loop nets zero — conservative." }
        ],
        result: "$-200\\ \\mathrm{J}$ per lap; friction can never bank reversibly."
      }
    ],
    keyTakeaways: [
      "Conservative means path-free work and zero loop work.",
      "Friction work $-f_k s$ depends on distance traveled.",
      "$W_{\\mathrm{other}}$ bridges mechanical $E$ across dissipation."
    ],
    quiz: [
      {
        q: "Which force is nonconservative?",
        options: ["Gravity", "Ideal spring", "Kinetic friction", "Electrostatic"],
        answer: 2,
        explanation: "Longer paths burn more energy — path-dependence incarnate."
      },
      {
        q: "Block from $3.0\\ \\mathrm{m}$ with $30\\ \\mathrm{J}$ friction loss reaches base at about:",
        options: ["$7.67\\ \\mathrm{m/s}$", "$5.37\\ \\mathrm{m/s}$", "Zero", "$12\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$(58.8-30) = v^2$, so $v = 5.37\\ \\mathrm{m/s}$."
      },
      {
        q: "Conservative round-trip work is:",
        options: ["Always negative", "Zero", "Always positive", "Infinite"],
        answer: 1,
        explanation: "Path-independence forces every closed loop to cancel."
      }
    ]
  },
  {
    sectionId: "young-ch7-s4",
    readingTime: 6,
    intro: "Every conservative force is the downhill slope of its potential: $F_x = -dU/dx$. This section inverts energy into force, generalizes to three dimensions via the gradient, and checks stability from curvature.",
    objectives: [
      "Derive $F_x = -dU/dx$ in one dimension",
      "Compute $\\vec{F} = -\\nabla U$ in three dimensions",
      "Relate minima, maxima, and neutral points to stability"
    ],
    concepts: [
      {
        term: "Force from potential in 1D",
        kind: "theorem",
        statement: "**$F_x = -dU/dx$**: force points **downhill** with magnitude equal to the slope.",
        detail: "For $U = \\frac{1}{2}kx^2$: $F_x = -kx$ — Hooke law recovered."
      },
      {
        term: "Gradient in 3D",
        kind: "theorem",
        statement: "**$\\vec{F} = -\\nabla U = -(\\partial U/\\partial x)\\hat{\\imath} - (\\partial U/\\partial y)\\hat{\\jmath} - (\\partial U/\\partial z)\\hat{k}$**.",
        detail: "For $U = mgy$: $\\vec{F} = -mg\\hat{\\jmath}$ — uniform gravity recovered."
      },
      {
        term: "Why the minus sign",
        kind: "insight",
        statement: "The **minus** sends force toward **decreasing $U$**: systems accelerate downhill in energy.",
        detail: "Positive slope ($U$ rising with $x$) pushes back toward $-x$."
      },
      {
        term: "Equilibrium from $dU/dx = 0$",
        kind: "method",
        statement: "**Equilibria sit where $dU/dx = 0$** (flat energy); stability follows the second derivative.",
        detail: "$U = ax^2$: minimum at $0$ (stable); $U = -ax^2$: maximum (unstable)."
      },
      {
        term: "Only conservative forces qualify",
        kind: "insight",
        statement: "No potential exists for **friction or magnetism-due-to-motion** — the gradient formula applies **only to conservative fields**.",
        detail: "Attempting $U$ for $f_k$ fails the loop test; energy methods must use $W_{\\mathrm{other}}$ instead."
      }
    ],
    figures: [
      {
        caption: "Force as downhill slope: $F_x = -dU/dx$ pushes toward lower $U$; flat points are equilibria",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Force from potential slope"><path d="M 80 140 Q 250 140 360 90 Q 470 40 640 60" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="360" cy="90" r="5" fill="currentColor"/><line x1="300" y1="108" x2="420" y2="72" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="360" y1="90" x2="280" y2="90" stroke="currentColor" stroke-width="2.5"/><polygon points="280,90 294,84 294,96" fill="currentColor"/><text x="250" y="75" font-size="12" fill="currentColor">F down slope</text><text x="470" y="130" font-size="11" fill="currentColor" opacity="0.7">U(x) curve</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Force from $U = ax^3$",
        problem: "$U(x) = 2.0x^3$ (SI). Find $F_x$ at $x = 3.0\\ \\mathrm{m}$.",
        steps: [
          { label: "Differentiate", text: "$F_x = -dU/dx = -6.0x^2$." },
          { label: "Evaluate", text: "At $3.0$: $F_x = -54\\ \\mathrm{N}$." },
          { label: "Direction", text: "Negative: toward $-x$, downhill from the cubic rise." }
        ],
        result: "$F_x = -54\\ \\mathrm{N}$ at $3.0\\ \\mathrm{m}$."
      },
      {
        title: "Gravity gradient",
        problem: "Recover $\\vec{F}_g$ from $U = mgy$.",
        steps: [
          { label: "Derivatives", text: "$\\partial U/\\partial x = 0$, $\\partial U/\\partial z = 0$, $\\partial U/\\partial y = mg$." },
          { label: "Gradient", text: "$\\vec{F} = -mg\\hat{\\jmath}$." },
          { label: "Sense", text: "Uniform, downward, independent of position — as required." }
        ],
        result: "$\\vec{F}_g = -mg\\hat{\\jmath}$ from the potential slope."
      }
    ],
    keyTakeaways: [
      "Force is minus the potential slope, in 1D and via $\\nabla$ in 3D.",
      "Downhill in energy is the direction of conservative push.",
      "Flat spots are equilibria; curvature decides stability."
    ],
    quiz: [
      {
        q: "For $U = \\frac{1}{2}kx^2$, $F_x$ is:",
        options: ["$+kx$", "$-kx$", "$k/x$", "Zero"],
        answer: 1,
        explanation: "$-d(\\frac{1}{2}kx^2)/dx = -kx$."
      },
      {
        q: "The minus in $\\vec{F} = -\\nabla U$ means:",
        options: ["Force points uphill", "Force points downhill in energy", "Energy is negative", "Forces are zero"],
        answer: 1,
        explanation: "Systems accelerate toward lower potential."
      },
      {
        q: "No potential exists for:",
        options: ["Gravity", "Ideal springs", "Kinetic friction", "Electrostatics"],
        answer: 2,
        explanation: "Path-dependent work forbids a state function $U$."
      }
    ]
  },
  {
    sectionId: "young-ch7-s5",
    readingTime: 6,
    intro: "Energy diagrams turn dynamics into landscape reading: allowed regions, turnarounds, and stability appear before any equation is solved. This section teaches bound versus unbound motion and small oscillations around minima.",
    objectives: [
      "Read allowed and forbidden regions from $E$ versus $U(x)$",
      "Locate turnarounds where $K = 0$",
      "Classify stable, unstable, and neutral equilibria"
    ],
    concepts: [
      {
        term: "Energy diagram",
        kind: "definition",
        statement: "Plot **$U(x)$ with total $E$ as a horizontal line**; motion needs **$K = E - U \\ge 0$**.",
        detail: "Regions with $U > E$ are forbidden — negative $K$ is impossible."
      },
      {
        term: "Turning points",
        kind: "definition",
        statement: "**Turning points** where **$E = U$** ($K = 0**) reverse the motion — the walls of the allowed well.",
        detail: "A mass in a valley oscillates between its two $E = U$ intersections."
      },
      {
        term: "Bound versus unbound",
        kind: "definition",
        statement: "**Bound** motion is trapped ($E$ below escape rims); **unbound** escapes to infinity.",
        detail: "Satellites with $E < 0$ orbit; with $E \\ge 0$ they escape — preview of Chapter 13."
      },
      {
        term: "Equilibrium taxonomy",
        kind: "theorem",
        statement: "**Minima are stable**, **maxima unstable**, **flat lines neutral** — displacement grows, returns, or stays.",
        detail: "A ball in a bowl (minimum) oscillates; atop a hill (maximum) flees; on a table (flat) stays."
      },
      {
        term: "Small oscillations",
        kind: "insight",
        statement: "Near a minimum, $U$ is **locally parabolic**, so motion is **approximately simple harmonic** (preview of Ch 14).",
        detail: "Curvature $k_{\\mathrm{eff}} = d^2U/dx^2$ sets $\\omega = \\sqrt{k_{\\mathrm{eff}}/m}$."
      }
    ],
    figures: [
      {
        caption: "Energy diagram: allowed wells ($E > U$), turnarounds ($E = U$), forbidden hills ($E < U$)",
        svg: `<svg viewBox="0 0 720 200" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energy diagram"><path d="M 60 150 Q 200 150 260 90 Q 320 30 400 90 Q 480 150 620 150" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="60" y1="110" x2="620" y2="110" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><circle cx="225" cy="110" r="5" fill="currentColor"/><circle cx="330" cy="110" r="5" fill="currentColor"/><text x="270" y="135" font-size="11" text-anchor="middle" fill="currentColor">allowed well</text><text x="480" y="135" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">forbidden (U above E)</text><text x="630" y="113" font-size="11" fill="currentColor">E</text><text x="270" y="60" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">U(x)</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Reading a well",
        problem: "$U(x) = 4x^2 - x^4$ (SI) with $E = 3.0\\ \\mathrm{J}$. Where can the particle be?",
        steps: [
          { label: "Condition", text: "Need $4x^2 - x^4 \\le 3.0$." },
          { label: "Roots", text: "$x^4 - 4x^2 + 3 = 0$: let $u = x^2$: $u = 1, 3$, so $x = \\pm 1, \\pm\\sqrt{3}$." },
          { label: "Regions", text: "Allowed $|x| \\le 1$ (central well) and $1 \\le |x| \\le \\sqrt{3}$ lobes per side; $|x| > 2$ forbidden until escape analysis." }
        ],
        result: "Turnarounds at $\\pm 1$ and $\\pm 1.73$; wells trap bound motion."
      },
      {
        title: "Stability of $U = -ax^2$ top",
        problem: "Classify equilibrium at $x = 0$ for $U = -2.0x^2$.",
        steps: [
          { label: "First derivative", text: "$dU/dx = -4.0x = 0$ at $0$ — equilibrium." },
          { label: "Second", text: "$d^2U/dx^2 = -4.0 < 0$ — maximum." },
          { label: "Verdict", text: "Unstable: nudge and $F_x = +4.0x$ flees outward." }
        ],
        result: "Unstable equilibrium at the hilltop."
      }
    ],
    keyTakeaways: [
      "$E - U$ is kinetic: non-negative regions allow motion.",
      "$E = U$ marks walls where motion reverses.",
      "Minima trap stably; maxima repel; flats ignore."
    ],
    quiz: [
      {
        q: "Forbidden regions satisfy:",
        options: ["$U < E$", "$U > E$ (would need $K < 0$)", "$U = E$", "$K > E$"],
        answer: 1,
        explanation: "Kinetic energy cannot be negative, so $U$ above $E$ is unreachable."
      },
      {
        q: "Turning points are where:",
        options: ["$K$ is maximum", "$E = U$ so $K = 0$", "$U = 0$", "$F = 0$ always"],
        answer: 1,
        explanation: "All energy parked as potential; velocity instant zero."
      },
      {
        q: "A minimum of $U(x)$ is:",
        options: ["Unstable equilibrium", "Stable equilibrium", "No equilibrium", "Forbidden"],
        answer: 1,
        explanation: "Displacement raises $U$ and the downhill force restores."
      }
    ]
  }
];

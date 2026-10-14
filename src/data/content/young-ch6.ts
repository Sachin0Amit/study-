import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 6
// Work and Kinetic Energy (Secs 6.1–6.4)
// ============================================================================

export const youngCh6Content: SectionContent[] = [
  {
    sectionId: "young-ch6-s1",
    readingTime: 6,
    intro: "Work translates force into motion change along a displacement. This section defines work for constant forces as $W = Fs\\cos\\phi$ and generalizes it to the line integral for varying forces and curved paths.",
    objectives: [
      "Compute $W = \\vec{F}\\cdot\\vec{s} = Fs\\cos\\phi$ with correct signs",
      "State when work is positive, negative, or zero",
      "Set up $W = \\int F_x\\,dx$ for varying forces"
    ],
    concepts: [
      {
        term: "Work of a constant force",
        kind: "definition",
        statement: "**Work** $W = \\vec{F}\\cdot\\vec{s} = Fs\\cos\\phi$ is the **parallel force times displacement**, in **joules ($\\mathrm{J}$)**.",
        detail: "$20\\ \\mathrm{N}$ over $5.0\\ \\mathrm{m}$ at $0^{\\circ}$ does $100\\ \\mathrm{J}$; at $180^{\\circ}$ it does $-100\\ \\mathrm{J}$."
      },
      {
        term: "Sign of work",
        kind: "theorem",
        statement: "**Acute $\\phi$ does positive work** (force feeds motion); **obtuse does negative**; **$90^{\\circ}$ does zero**.",
        detail: "Lifting does negative gravitational work; the normal on level ground does zero."
      },
      {
        term: "Joule",
        kind: "notation",
        statement: "**$1\\ \\mathrm{J} = 1\\ \\mathrm{N\\cdot m} = 1\\ \\mathrm{kg\\cdot m^2/s^2}$** — force through distance.",
        detail: "Lifting $1\\ \\mathrm{kg}$ by $1\\ \\mathrm{m}$ costs $9.8\\ \\mathrm{J}$ against gravity."
      },
      {
        term: "Work by components",
        kind: "method",
        statement: "Sum **per-axis work**: $W = F_x\\Delta x + F_y\\Delta y + F_z\\Delta z$ for straight moves.",
        detail: "Only the displacement-parallel components survive — perpendicular pushes are free of work."
      },
      {
        term: "Varying force integral",
        kind: "definition",
        statement: "For $F_x(x)$ along $x$: **$W = \\int_{x_1}^{x_2} F_x(x)\\,dx$** — signed area under the force curve.",
        detail: "A spring $F_x = -kx$ gives $W = \\frac{1}{2}kx_1^2 - \\frac{1}{2}kx_2^2$ by triangle areas."
      }
    ],
    figures: [
      {
        caption: "Work $W = Fs\\cos\\phi$: only the parallel projection works; $90^{\\circ}$ gives zero",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Work projection"><line x1="80" y1="140" x2="640" y2="140" stroke="currentColor" stroke-width="1.5"/><rect x="150" y="105" width="90" height="35" fill="none" stroke="currentColor" stroke-width="2"/><line x1="240" y1="122" x2="420" y2="60" stroke="currentColor" stroke-width="2.5"/><polygon points="420,60 405,62 408,74" fill="currentColor"/><line x1="240" y1="122" x2="420" y2="122" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="330" y="145" font-size="12" fill="currentColor">F cos phi (works)</text><text x="330" y="80" font-size="12" fill="currentColor">F</text><text x="440" y="90" font-size="12" fill="currentColor">phi</text><text x="150" y="165" font-size="11" fill="currentColor" opacity="0.7">displacement s</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Hauling at an angle",
        problem: "A $30\\ \\mathrm{N}$ rope at $30^{\\circ}$ above horizontal drags a crate $8.0\\ \\mathrm{m}$. Find work.",
        steps: [
          { label: "Project", text: "$F_{\\parallel} = 30\\cos 30^{\\circ} = 26.0\\ \\mathrm{N}$." },
          { label: "Multiply", text: "$W = 26.0 \\times 8.0 = 208\\ \\mathrm{J}$." },
          { label: "Direct", text: "$W = 30 \\times 8.0 \\times 0.866 = 208\\ \\mathrm{J}$ — consistent." }
        ],
        result: "$208\\ \\mathrm{J}$ of rope work; vertical part does zero."
      },
      {
        title: "Zero-work normal",
        problem: "A $500\\ \\mathrm{N}$ normal acts on a car moving $100\\ \\mathrm{m}$ horizontally. Work?",
        steps: [
          { label: "Angle", text: "$\\phi = 90^{\\circ}$ between $\\vec{n}$ and $\\vec{s}$." },
          { label: "Work", text: "$W = 500 \\times 100 \\times \\cos 90^{\\circ} = 0$." },
          { label: "Meaning", text: "Perpendicular forces steer or support but never energize." }
        ],
        result: "Zero work despite large force and distance."
      }
    ],
    keyTakeaways: [
      "Work is parallel force through distance: $Fs\\cos\\phi$.",
      "Sign follows the angle: help, hinder, or ignore.",
      "Varying forces need the area $\\int F\\,dx$."
    ],
    quiz: [
      {
        q: "$30\\ \\mathrm{N}$ at $30^{\\circ}$ over $8.0\\ \\mathrm{m}$ does:",
        options: ["$240\\ \\mathrm{J}$", "$208\\ \\mathrm{J}$", "Zero", "$-208\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$30 \\times 8.0 \\times \\cos 30^{\\circ} = 208\\ \\mathrm{J}$."
      },
      {
        q: "Work is zero when force is:",
        options: ["Parallel to displacement", "Perpendicular to displacement", "Large", "Constant"],
        answer: 1,
        explanation: "$\\cos 90^{\\circ} = 0$ kills the product."
      },
      {
        q: "One joule equals:",
        options: ["$1\\ \\mathrm{N\\cdot m}$", "$1\\ \\mathrm{N/m}$", "$1\\ \\mathrm{kg/m^3}$", "$1\\ \\mathrm{W/s}$"],
        answer: 0,
        explanation: "Force through distance: newtons times meters."
      }
    ]
  },
  {
    sectionId: "young-ch6-s2",
    readingTime: 7,
    intro: "Kinetic energy packages motion, and the work-energy theorem spends net work on it: $W_{\\mathrm{net}} = \\Delta K$. This flagship section proves the theorem from Newton second law and turns it into the fastest solver for speed-over-distance problems.",
    objectives: [
      "Define $K = \\frac{1}{2}mv^2$ and its scalar properties",
      "Prove $W_{\\mathrm{net}} = K_2-K_1$ for constant and varying forces",
      "Solve speed-distance problems without time"
    ],
    concepts: [
      {
        term: "Kinetic energy",
        kind: "definition",
        statement: "**Kinetic energy** $K = \\frac{1}{2}mv^2$ is the **scalar energy of motion**, always $K \\ge 0$, in joules.",
        detail: "A $1000\\ \\mathrm{kg}$ car at $20\\ \\mathrm{m/s}$ carries $200{,}000\\ \\mathrm{J}$; doubling speed quadruples $K$."
      },
      {
        term: "Work-energy theorem",
        kind: "theorem",
        statement: "**$W_{\\mathrm{net}} = K_2 - K_1 = \\Delta K$**: net work equals kinetic change for a particle.",
        detail: "Positive net work speeds up; negative brakes; zero net keeps speed (though direction may turn)."
      },
      {
        term: "Proof for constant force",
        kind: "theorem",
        statement: "From $v^2 = v_0^2 + 2a\\Delta x$ times $m/2$: **$F_{\\mathrm{net}}\\Delta x = \\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2$**.",
        detail: "Kinematics plus $F_{\\mathrm{net}} = ma$ fuses into energy — time eliminated."
      },
      {
        term: "Proof for varying force",
        kind: "theorem",
        statement: "With $a_x = v_x dv_x/dx$: **$\\int F_{\\mathrm{net},x}\\,dx = \\frac{1}{2}mv_{2x}^2 - \\frac{1}{2}mv_{1x}^2$** by the chain rule.",
        detail: "Substituting $a_x\\,dx = v_x\\,dv_x$ and integrating accumulates exactly $\\Delta(\\frac{1}{2}mv_x^2)$ plus transverse parts."
      },
      {
        term: "Net versus per-force work",
        kind: "method",
        statement: "Either **sum forces then one work**, or **work each force then sum**: $W_{\\mathrm{net}} = \\sum W_i$.",
        detail: "Falling with air drag: $W_g + W_{\\mathrm{drag}} = \\Delta K$ — gravity feeds, drag bleeds."
      }
    ],
    figures: [
      {
        caption: "Net work as area under $F_{\\mathrm{net}}$-$x$ becomes $\\Delta K = \\frac{1}{2}mv_2^2-\\frac{1}{2}mv_1^2$",
        svg: `<svg viewBox="0 0 720 200" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Work energy area"><line x1="60" y1="170" x2="680" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="180" x2="90" y2="30" stroke="currentColor" stroke-width="1.5"/><path d="M 120 140 L 400 100 L 560 60 L 560 170 L 120 170 Z" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="320" y="140" font-size="12" fill="currentColor">area = Wnet = delta K</text><text x="640" y="188" font-size="12" fill="currentColor">x</text><text x="65" y="40" font-size="12" fill="currentColor">Fnet</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Braking distance from energy",
        problem: "A $1200\\ \\mathrm{kg}$ car at $20\\ \\mathrm{m/s}$ brakes with $6000\\ \\mathrm{N}$. Find stopping distance.",
        steps: [
          { label: "Energy to kill", text: "$K = 0.5 \\times 1200 \\times 400 = 240{,}000\\ \\mathrm{J}$." },
          { label: "Theorem", text: "$-6000 \\times d = 0 - 240{,}000$: $d = 40\\ \\mathrm{m}$." },
          { label: "Check", text: "Kinematics: $d = v^2/2|a| = 400/10 = 40\\ \\mathrm{m}$ — identical." }
        ],
        result: "$40\\ \\mathrm{m}$ to stop."
      },
      {
        title: "Speed after a push",
        problem: "A $2.0\\ \\mathrm{kg}$ block starts rest; a $10\\ \\mathrm{N}$ force pushes $6.0\\ \\mathrm{m}$ against $4.0\\ \\mathrm{N}$ friction. Find $v$.",
        steps: [
          { label: "Net work", text: "$W = (10-4.0) \\times 6.0 = 36\\ \\mathrm{J}$." },
          { label: "Energy", text: "$36 = 0.5 \\times 2.0 \\times v^2$: $v^2 = 36$, $v = 6.0\\ \\mathrm{m/s}$." },
          { label: "Per-force check", text: "$60 - 24 = 36\\ \\mathrm{J}$ — pushing feeds, friction bleeds." }
        ],
        result: "$6.0\\ \\mathrm{m/s}$ after $6.0\\ \\mathrm{m}$."
      }
    ],
    keyTakeaways: [
      "$K = \\frac{1}{2}mv^2$ stores motion as a non-negative scalar.",
      "Net work spends directly into $\\Delta K$ — no clock needed.",
      "Sum works or sum forces first; both routes agree."
    ],
    quiz: [
      {
        q: "Net work $+36\\ \\mathrm{J}$ on a $2.0\\ \\mathrm{kg}$ block from rest gives speed:",
        options: ["$36\\ \\mathrm{m/s}$", "$6.0\\ \\mathrm{m/s}$", "$18\\ \\mathrm{m/s}$", "$3.0\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$36 = v^2$ (since $m/2 = 1$), so $v = 6.0\\ \\mathrm{m/s}$."
      },
      {
        q: "Doubling speed multiplies kinetic energy by:",
        options: ["2", "4", "8", "1"],
        answer: 1,
        explanation: "$K \\propto v^2$ — quadratic in speed."
      },
      {
        q: "Negative net work means:",
        options: ["Speed increases", "Kinetic energy decreases — braking", "Mass decreases", "Zero displacement"],
        answer: 1,
        explanation: "$W_{\\mathrm{net}} = \\Delta K < 0$ drains motion energy."
      }
    ],
    depth: [
      {
        tier: "masters",
        title: "Work–Energy Theorem from Newton Laws: Line Integrals and Conservative Structure",
        blocks: [
          {
            kind: "theorem",
            heading: "General work–energy theorem",
            body: "For a particle of constant mass $m$ moving along a trajectory $C$ from $\\vec{r}_1$ to $\\vec{r}_2$ under net force $\\vec{F}_{\\mathrm{net}}(\\vec{r}, \\vec{v}, t)$, the line integral **$W_{\\mathrm{net}} = \\int_C \\vec{F}_{\\mathrm{net}}\\cdot d\\vec{r} = \\frac{1}{2}mv_2^2 - \\frac{1}{2}mv_1^2$**. The proof uses only $\\vec{F}_{\\mathrm{net}} = m\\,d\\vec{v}/dt$ and the chain rule $d\\vec{v}/dt \\cdot d\\vec{r} = \\vec{v}\\cdot d\\vec{v}$, so it holds for velocity- and time-dependent forces (drag, magnetic) as well as positional ones."
          },
          {
            kind: "derivation",
            heading: "Proof via the tangent projection",
            body: "Write $d\\vec{r} = \\vec{v}\\,dt$, so $\\vec{F}_{\\mathrm{net}}\\cdot d\\vec{r} = m\\frac{d\\vec{v}}{dt}\\cdot\\vec{v}\\,dt = m\\,\\vec{v}\\cdot d\\vec{v} = d(\\frac{1}{2}m\\vec{v}\\cdot\\vec{v})$. Integrating along $C$ telescopes: **$\\int_C \\vec{F}_{\\mathrm{net}}\\cdot d\\vec{r} = \\frac{1}{2}mv_2^2 - \\frac{1}{2}mv_1^2$**. Only the tangential part of $\\vec{F}_{\\mathrm{net}}$ contributes, since $\\vec{v}\\cdot d\\vec{v} = v\\,dv$; the normal part bends the path at no energy cost. This is why uniform circular motion keeps $|\\vec{v}|$ while $\\vec{v}$ rotates."
          },
          {
            kind: "remark",
            heading: "Path dependence and the conservative split",
            body: "For generic $\\vec{F}(\\vec{r},\\vec{v},t)$ the integral depends on the path and speed profile — friction and magnetic forces have no potential. When $\\vec{F} = -\\nabla U(\\vec{r})$ is conservative, Stokes theorem gives $\\oint \\vec{F}\\cdot d\\vec{r} = -\\oint \\nabla U\\cdot d\\vec{r} = 0$, so work between fixed endpoints is path-free and defines Chapter 7 potential energy. The Helmholtz decomposition $\\vec{F} = -\\nabla U + \\nabla\\times\\vec{A}$ separates the energy-storing (curl-free) part from the circulating remainder."
          },
          {
            kind: "application",
            heading: "Why energy beats kinematics for constraints",
            body: "For systems with unknown constraint forces (normals, tensions, static friction in rolling), $\\vec{F}_{\\mathrm{constraint}}\\cdot d\\vec{r} = 0$ since each constraint acts perpendicular to the allowed displacement. The work–energy balance then involves only the working forces (gravity, springs, applied pushes), eliminating as many unknowns as constraints. This is the seed of Lagrangian mechanics: project Newton second law onto allowed displacements and integrate once to get energy-type first integrals."
          }
        ]
      }
    ]
  },
  {
    sectionId: "young-ch6-s3",
    readingTime: 6,
    intro: "Springs, gravity on curved paths, and other varying forces need the integral form of work. This section computes spring work, proves curved-path gravity depends only on height, and practices area-under-curve evaluation.",
    objectives: [
      "Compute spring work $W = \\frac{1}{2}kx_1^2-\\frac{1}{2}kx_2^2$",
      "Show gravitational work depends only on vertical drop",
      "Evaluate work from $F$-$x$ graphs and integrals"
    ],
    concepts: [
      {
        term: "Hooke law",
        kind: "law",
        statement: "An ideal spring pulls **$F_x = -kx$** toward equilibrium with stiffness $k$ ($\\mathrm{N/m}$).",
        detail: "Stretching $0.10\\ \\mathrm{m}$ against $k = 200\\ \\mathrm{N/m}$ needs $20\\ \\mathrm{N}$."
      },
      {
        term: "Spring work",
        kind: "theorem",
        statement: "Work by the spring from $x_1$ to $x_2$ is **$W = \\frac{1}{2}kx_1^2 - \\frac{1}{2}kx_2^2$** — minus the change of $\\frac{1}{2}kx^2$.",
        detail: "Stretching $0$ to $0.10\\ \\mathrm{m}$ against the spring costs $W = -1.0\\ \\mathrm{J}$ by the spring (you do $+1.0$)."
      },
      {
        term: "Gravity on any path",
        kind: "theorem",
        statement: "Gravitational work is **$W_g = -mg\\Delta y = mg(y_1-y_2)$** for **any path** — only height counts.",
        detail: "Sliding down a winding $3.0\\ \\mathrm{m}$ hill does the same $mgh$ as vertical drop; horizontal wandering is free."
      },
      {
        term: "Area reading",
        kind: "method",
        statement: "Work is **signed area** under $F_x$-$x$: triangles for springs, rectangles for weights, counting for curves.",
        detail: "A triangular $0$–$20\\ \\mathrm{N}$ ramp over $0.10\\ \\mathrm{m}$ encloses $1.0\\ \\mathrm{J}$."
      },
      {
        term: "Varying-force protocol",
        kind: "method",
        statement: "**Write $F(x)$, integrate term by term**, and check by differentiating energy expressions back.",
        detail: "$F_x = \\alpha x^2$: $W = \\alpha(x_2^3-x_1^3)/3$ — power rule per term."
      }
    ],
    examples: [
      {
        title: "Compressing a spring",
        problem: "$k = 500\\ \\mathrm{N/m}$. How much work must you do to compress $0.12\\ \\mathrm{m}$ from equilibrium?",
        steps: [
          { label: "Spring work", text: "$W_{\\mathrm{spring}} = 0 - \\frac{1}{2} \\times 500 \\times 0.0144 = -3.60\\ \\mathrm{J}$." },
          { label: "Your work", text: "You oppose it: $W_{\\mathrm{you}} = +3.60\\ \\mathrm{J}$." },
          { label: "Force check", text: "Peak force $k|x| = 60\\ \\mathrm{N}$; mean $30\\ \\mathrm{N}$ over $0.12\\ \\mathrm{m}$ is $3.60\\ \\mathrm{J}$." }
        ],
        result: "You do $3.60\\ \\mathrm{J}$; the spring stores it as elastic potential (Ch 7)."
      },
      {
        title: "Slide versus drop",
        problem: "A $2.0\\ \\mathrm{kg}$ block drops $3.0\\ \\mathrm{m}$ vertically or slides down a frictionless $3.0\\ \\mathrm{m}$-high ramp. Compare $W_g$ and final speeds.",
        steps: [
          { label: "Work", text: "Both: $W_g = mgh = 2.0 \\times 9.80 \\times 3.0 = 58.8\\ \\mathrm{J}$." },
          { label: "Speed", text: "From rest: $58.8 = 0.5 \\times 2.0 \\times v^2$: $v = 7.67\\ \\mathrm{m/s}$ both." },
          { label: "Moral", text: "Path shape is irrelevant; only $h$ pays." }
        ],
        result: "Identical $58.8\\ \\mathrm{J}$ and $7.67\\ \\mathrm{m/s}$ — ramp trades force for distance."
      }
    ],
    keyTakeaways: [
      "Spring work is the difference of $\\frac{1}{2}kx^2$ triangle areas.",
      "Gravity pays by height only, on any path.",
      "Integrate or count area; both give work."
    ],
    quiz: [
      {
        q: "Compressing $k = 500\\ \\mathrm{N/m}$ by $0.12\\ \\mathrm{m}$ costs you:",
        options: ["$60\\ \\mathrm{J}$", "$3.60\\ \\mathrm{J}$", "$-3.60\\ \\mathrm{J}$ net kept", "Zero"],
        answer: 1,
        explanation: "$\\frac{1}{2}kx^2 = 250 \\times 0.0144 = 3.60\\ \\mathrm{J}$."
      },
      {
        q: "Gravitational work along a winding slide of drop $h$ is:",
        options: ["Zero", "$mgh$ — path-independent", "Proportional to slide length", "Infinite"],
        answer: 1,
        explanation: "Only vertical $dy$ accumulates; horizontal $dx$ is perpendicular to $m\\vec{g}$."
      },
      {
        q: "Work from an $F_x$-$x$ graph is:",
        options: ["The slope", "The signed area under the curve", "The intercept", "Always zero"],
        answer: 1,
        explanation: "Integrating $F_x\\,dx$ sums force-times-slice areas."
      }
    ]
  },
  {
    sectionId: "young-ch6-s4",
    readingTime: 5,
    intro: "Power is the rate of doing work — the difference between a strong weightlifter and a fast one. This section defines average and instantaneous power $P = \\vec{F}\\cdot\\vec{v}$ and applies it to engines, climbing, and electric bills.",
    objectives: [
      "Define $P_{\\mathrm{av}} = \\Delta W/\\Delta t$ and $P = \\vec{F}\\cdot\\vec{v}$",
      "Convert watts, horsepower, and kilowatt-hours",
      "Solve climbing and engine power problems"
    ],
    concepts: [
      {
        term: "Power",
        kind: "definition",
        statement: "**Power** $P_{\\mathrm{av}} = \\Delta W/\\Delta t$ is **work per unit time** in **watts ($\\mathrm{W} = \\mathrm{J/s}$)**.",
        detail: "Lifting $686\\ \\mathrm{J}$ (a $70\\ \\mathrm{kg}$ person up $1\\ \\mathrm{m}$) in $1.0\\ \\mathrm{s}$ takes $686\\ \\mathrm{W}$."
      },
      {
        term: "Instantaneous power",
        kind: "theorem",
        statement: "**$P = \\vec{F}\\cdot\\vec{v} = Fv\\cos\\phi$**: force times velocity-component along the force.",
        detail: "A $3000\\ \\mathrm{N}$ thrust at $20\\ \\mathrm{m/s}$ delivers $60{,}000\\ \\mathrm{W}$."
      },
      {
        term: "Horsepower and kilowatt-hour",
        kind: "notation",
        statement: "**$1\\ \\mathrm{hp} = 746\\ \\mathrm{W}$**; **$1\\ \\mathrm{kW\\cdot h} = 3.6 \\times 10^6\\ \\mathrm{J}$** of energy.",
        detail: "A $100\\ \\mathrm{W}$ bulb burning $10$ hours consumes $1.0\\ \\mathrm{kW\\cdot h}$."
      },
      {
        term: "Climbing power",
        kind: "method",
        statement: "Steady climbing at $v_y$ needs **$P = mgv_y$** against gravity.",
        detail: "$70\\ \\mathrm{kg}$ at $0.50\\ \\mathrm{m/s}$ vertical: $P = 686 \\times 0.50 = 343\\ \\mathrm{W}$."
      },
      {
        term: "Efficiency",
        kind: "definition",
        statement: "**Efficiency** $e = P_{\\mathrm{out}}/P_{\\mathrm{in}}$ is always below $1$ — waste heat takes the rest.",
        detail: "A $25$% car engine rejects $3\\ \\mathrm{J}$ as heat per $1\\ \\mathrm{J}$ of shaft work."
      }
    ],
    figures: [
      {
        caption: "Power $P = Fv$: same work faster needs proportionally more watts",
        svg: `<svg viewBox="0 0 720 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Power versus time"><line x1="60" y1="150" x2="680" y2="150" stroke="currentColor" stroke-width="1.5"/><rect x="120" y="90" width="180" height="60" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="2"/><rect x="420" y="50" width="90" height="100" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="2"/><text x="210" y="122" font-size="12" text-anchor="middle" fill="currentColor">same work W</text><text x="465" y="105" font-size="12" text-anchor="middle" fill="currentColor">same W</text><text x="210" y="170" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">slow: low P</text><text x="465" y="170" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">fast: high P</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Stair-climb power",
        problem: "A $70\\ \\mathrm{kg}$ student climbs $3.0\\ \\mathrm{m}$ vertically in $4.0\\ \\mathrm{s}$. Find power.",
        steps: [
          { label: "Work", text: "$W = mgh = 70 \\times 9.80 \\times 3.0 = 2058\\ \\mathrm{J}$." },
          { label: "Power", text: "$P = 2058/4.0 = 515\\ \\mathrm{W}$ ($0.69\\ \\mathrm{hp}$)." },
          { label: "Instant check", text: "$v_y = 0.75\\ \\mathrm{m/s}$: $P = 686 \\times 0.75 = 515\\ \\mathrm{W}$ — matches." }
        ],
        result: "$515\\ \\mathrm{W}$ — a fit human burst."
      },
      {
        title: "Cruising power",
        problem: "A car needs $1500\\ \\mathrm{N}$ to hold $25\\ \\mathrm{m/s}$ against drag. Find power and hourly energy.",
        steps: [
          { label: "Power", text: "$P = 1500 \\times 25 = 37{,}500\\ \\mathrm{W} = 37.5\\ \\mathrm{kW}$." },
          { label: "Energy per hour", text: "$37.5\\ \\mathrm{kW} \\times 1\\ \\mathrm{h} = 37.5\\ \\mathrm{kW\\cdot h} = 1.35 \\times 10^8\\ \\mathrm{J}$." },
          { label: "Horsepower", text: "$37500/746 = 50.3\\ \\mathrm{hp}$ at the wheels." }
        ],
        result: "$37.5\\ \\mathrm{kW}$ ($50\\ \\mathrm{hp}$); $135\\ \\mathrm{MJ}$ per hour."
      }
    ],
    keyTakeaways: [
      "Power is work rate: $\\Delta W/\\Delta t$ average, $\\vec{F}\\cdot\\vec{v}$ instant.",
      "Faster delivery of the same work needs more watts.",
      "Track units: $\\mathrm{W}$ for rate, $\\mathrm{kW\\cdot h}$ for energy."
    ],
    quiz: [
      {
        q: "$1500\\ \\mathrm{N}$ at $25\\ \\mathrm{m/s}$ needs power:",
        options: ["$60\\ \\mathrm{W}$", "$37.5\\ \\mathrm{kW}$", "$1500\\ \\mathrm{J}$", "$25\\ \\mathrm{W}$"],
        answer: 1,
        explanation: "$P = Fv = 37{,}500\\ \\mathrm{W}$."
      },
      {
        q: "One kilowatt-hour is:",
        options: ["$3.6 \\times 10^6\\ \\mathrm{J}$", "$1000\\ \\mathrm{W}$", "$1\\ \\mathrm{N}$", "$746\\ \\mathrm{J}$"],
        answer: 0,
        explanation: "$1000\\ \\mathrm{J/s} \\times 3600\\ \\mathrm{s} = 3.6\\ \\mathrm{MJ}$."
      },
      {
        q: "Climbing faster at the same weight needs:",
        options: ["Less power", "Proportionally more power ($P = mgv_y$)", "Same power always", "Zero power"],
        answer: 1,
        explanation: "Power scales linearly with vertical speed."
      }
    ]
  }
];

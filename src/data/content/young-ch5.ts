import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 5
// Applying Newton's Laws (Secs 5.1–5.5)
// ============================================================================

export const youngCh5Content: SectionContent[] = [
  {
    sectionId: "young-ch5-s1",
    readingTime: 6,
    intro: "Equilibrium is Newton first law in working clothes: the vector sum of forces vanishes. This section solves hanging loads, suspended signs, and contact-supported bodies by zeroing $\\sum F_x$ and $\\sum F_y$ in smart coordinates.",
    objectives: [
      "State the particle-equilibrium conditions $\\sum F_x = 0$, $\\sum F_y = 0$",
      "Solve two- and three-force equilibrium with angled cords",
      "Use symmetric and tilted coordinates to simplify sums"
    ],
    concepts: [
      {
        term: "Particle equilibrium",
        kind: "law",
        statement: "A particle is in **equilibrium** when **$\\sum\\vec{F} = 0$**, i.e. $\\sum F_x = 0$ and $\\sum F_y = 0$.",
        detail: "Rest and uniform motion both qualify; acceleration is what equilibrium forbids."
      },
      {
        term: "Tension pulls away",
        kind: "definition",
        statement: "**Tension $T$** in a cord pulls **away from the body** along the cord; massless cords transmit it undiminished.",
        detail: "A $50\\ \\mathrm{N}$ weight hung from a massless rope loads every cross-section with $50\\ \\mathrm{N}$."
      },
      {
        term: "Two-cord suspension",
        kind: "method",
        statement: "Resolve each tension: **$T_1\\cos\\theta_1 = T_2\\cos\\theta_2$** horizontally, **$T_1\\sin\\theta_1+T_2\\sin\\theta_2 = w$** vertically.",
        detail: "Two equations, two unknown tensions — solvable for any hanger geometry."
      },
      {
        term: "Normal and friction readiness",
        kind: "insight",
        statement: "Contact equilibrium adds **normal $n$ perpendicular** and **friction $f$ parallel** to the surface as extra unknowns.",
        detail: "A ladder foot needs both $n$ up and $f$ sideways to close the force polygon."
      },
      {
        term: "Check by polygon closure",
        kind: "method",
        statement: "In equilibrium the **force arrows chained tail-to-tip close** to a polygon — a visual check on algebra.",
        detail: "An open gap in the chain is the missing force or a sign error."
      }
    ],
    examples: [
      {
        title: "Traffic light hanger",
        problem: "A $120\\ \\mathrm{N}$ light hangs from two cords at $37^{\\circ}$ and $53^{\\circ}$ to the horizontal. Find tensions.",
        steps: [
          { label: "Equations", text: "$T_1\\cos 37^{\\circ} = T_2\\cos 53^{\\circ}$; $T_1\\sin 37^{\\circ}+T_2\\sin 53^{\\circ} = 120$." },
          { label: "Numbers", text: "$0.799T_1 = 0.602T_2$, so $T_1 = 0.753T_2$. Then $0.602(0.753T_2)+0.799T_2 = 120$." },
          { label: "Solve", text: "$1.252T_2 = 120$: $T_2 = 95.8\\ \\mathrm{N}$; $T_1 = 72.1\\ \\mathrm{N}$." }
        ],
        result: "$T_1 = 72\\ \\mathrm{N}$, $T_2 = 96\\ \\mathrm{N}$ — steeper cord carries more."
      },
      {
        title: "Symmetric chandelier",
        problem: "A $60\\ \\mathrm{N}$ chandelier hangs from two symmetric cords at $60^{\\circ}$ above horizontal. Find $T$.",
        steps: [
          { label: "Symmetry", text: "$T_1 = T_2 = T$; horizontal parts cancel automatically." },
          { label: "Vertical", text: "$2T\\sin 60^{\\circ} = 60$: $T = 60/(2 \\times 0.866) = 34.6\\ \\mathrm{N}$." },
          { label: "Limit", text: "Cords near horizontal ($\\theta \\to 0$) drive $T \\to \\infty$ — why flat clotheslines snap." }
        ],
        result: "$34.6\\ \\mathrm{N}$ per cord."
      }
    ],
    keyTakeaways: [
      "Equilibrium zeroes each component sum independently.",
      "Tension acts along cords; resolve before summing.",
      "Closed force polygons verify equilibrium algebra."
    ],
    quiz: [
      {
        q: "Particle equilibrium requires:",
        options: ["$\\sum F_x = 0$ and $\\sum F_y = 0$", "$v = 0$ always", "$\\sum F = ma$ with $a \\neq 0$", "Zero mass"],
        answer: 0,
        explanation: "Both component sums must vanish; uniform motion still qualifies."
      },
      {
        q: "Symmetric $60^{\\circ}$ cords holding $60\\ \\mathrm{N}$ carry:",
        options: ["$60\\ \\mathrm{N}$ each", "$34.6\\ \\mathrm{N}$ each", "$30\\ \\mathrm{N}$ each", "$120\\ \\mathrm{N}$ each"],
        answer: 1,
        explanation: "$T = 60/(2\\sin 60^{\\circ}) = 34.6\\ \\mathrm{N}$."
      },
      {
        q: "A nearly horizontal clothesline under load has:",
        options: ["Tiny tension", "Enormous tension ($T \\propto 1/\\sin\\theta$)", "Zero tension", "Tension equal to weight always"],
        answer: 1,
        explanation: "Small vertical components force huge $T$ to supply the needed upward sum."
      }
    ]
  },
  {
    sectionId: "young-ch5-s2",
    readingTime: 7,
    intro: "Most motion is non-equilibrium: net force drives acceleration along straight or curved paths. This section applies $\\sum F = ma$ to accelerating blocks, Atwood machines, and objects with both horizontal and vertical dynamics.",
    objectives: [
      "Solve $\\sum F_x = ma_x$, $\\sum F_y = ma_y$ for accelerated particles",
      "Handle Atwood machines and multi-body cords",
      "Distinguish accelerated from equilibrium setups"
    ],
    concepts: [
      {
        term: "Dynamics versus equilibrium",
        kind: "insight",
        statement: "Dynamics keeps the **$ma$ side**: $\\sum F_x = ma_x$, $\\sum F_y = ma_y$ with **at least one nonzero**.",
        detail: "Equilibrium is the $a = 0$ special case; dynamics spends the net force on acceleration."
      },
      {
        term: "Atwood machine",
        kind: "theorem",
        statement: "Masses $m_1, m_2$ over a massless pulley give **$a = |m_2-m_1|g/(m_1+m_2)$** and **$T = 2m_1m_2g/(m_1+m_2)$**.",
        detail: "Difference drives, sum resists: nearly equal masses creep, lopsided pairs approach $g$."
      },
      {
        term: "Massless-string constraint",
        kind: "method",
        statement: "A **massless inextensible cord** enforces **equal acceleration magnitudes** along its length and **one tension** throughout.",
        detail: "Two diagrams share $T$ and $|a|$; signs follow each body own axis."
      },
      {
        term: "Apparent weight revisited",
        kind: "method",
        statement: "Vertical dynamics reads **$n - mg = ma_y$**: accelerating up heavies the scale, down lightens it.",
        detail: "Elevator at $a_y = +2.0\\ \\mathrm{m/s^2}$: $60\\ \\mathrm{kg}$ reads $708\\ \\mathrm{N}$."
      },
      {
        term: "System versus parts",
        kind: "method",
        statement: "Treat the **whole train for $a$** ($F_{\\mathrm{ext}} = M_{\\mathrm{tot}}a$), then **cut cords for internal $T$**.",
        detail: "Three coupled cars under $F$: $a = F/M$ first, then each coupling from the mass it drags."
      }
    ],
    figures: [
      {
        caption: "Atwood machine: difference $m_2-m_1$ drives $a$, sum $m_1+m_2$ resists it",
        svg: `<svg viewBox="0 0 720 200" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Atwood machine"><circle cx="360" cy="55" r="28" fill="none" stroke="currentColor" stroke-width="2"/><line x1="300" y1="55" x2="300" y2="150" stroke="currentColor" stroke-width="2"/><line x1="420" y1="55" x2="420" y2="150" stroke="currentColor" stroke-width="2"/><rect x="270" y="150" width="60" height="30" fill="none" stroke="currentColor" stroke-width="2"/><rect x="390" y="150" width="60" height="30" fill="none" stroke="currentColor" stroke-width="2"/><text x="300" y="198" font-size="12" text-anchor="middle" fill="currentColor">m1</text><text x="420" y="198" font-size="12" text-anchor="middle" fill="currentColor">m2</text><line x1="300" y1="120" x2="300" y2="140" stroke="currentColor" stroke-width="2"/><polygon points="300,140 295,130 305,130" fill="currentColor"/><line x1="420" y1="150" x2="420" y2="130" stroke="currentColor" stroke-width="2"/><polygon points="420,130 415,140 425,140" fill="currentColor"/><text x="360" y="100" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">same T both sides</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Atwood numbers",
        problem: "$m_1 = 2.0\\ \\mathrm{kg}$, $m_2 = 3.0\\ \\mathrm{kg}$ over an ideal pulley. Find $a$ and $T$.",
        steps: [
          { label: "Acceleration", text: "$a = (3.0-2.0) \\times 9.80/5.0 = 1.96\\ \\mathrm{m/s^2}$ (heavier down)." },
          { label: "Tension", text: "$T = 2 \\times 2.0 \\times 3.0 \\times 9.80/5.0 = 23.5\\ \\mathrm{N}$." },
          { label: "Check", text: "Between $m_1g = 19.6$ and $m_2g = 29.4\\ \\mathrm{N}$ — lighter pulled up, heavier eased down." }
        ],
        result: "$a = 1.96\\ \\mathrm{m/s^2}$; $T = 23.5\\ \\mathrm{N}$."
      },
      {
        title: "Horizontal tow",
        problem: "A $2000\\ \\mathrm{kg}$ truck tows a $1000\\ \\mathrm{kg}$ trailer with $6000\\ \\mathrm{N}$ thrust (ignore drag). Find $a$ and hitch force.",
        steps: [
          { label: "System", text: "$a = 6000/3000 = 2.0\\ \\mathrm{m/s^2}$." },
          { label: "Trailer", text: "Hitch alone accelerates it: $F_H = 1000 \\times 2.0 = 2000\\ \\mathrm{N}$." },
          { label: "Truck check", text: "$6000 - 2000 = 2000 \\times 2.0 = 4000$ — consistent." }
        ],
        result: "$a = 2.0\\ \\mathrm{m/s^2}$; hitch $2000\\ \\mathrm{N}$."
      }
    ],
    keyTakeaways: [
      "Keep $ma$ on the right whenever acceleration is expected.",
      "Cords share $|a|$ and $T$; differences of weight drive Atwoods.",
      "Solve the system for $a$, then cut for internal forces."
    ],
    quiz: [
      {
        q: "Atwood with $2.0$ and $3.0\\ \\mathrm{kg}$ gives $a$ about:",
        options: ["$9.8\\ \\mathrm{m/s^2}$", "$1.96\\ \\mathrm{m/s^2}$", "Zero", "$29\\ \\mathrm{m/s^2}$"],
        answer: 1,
        explanation: "$(1.0/5.0)g = 0.2g = 1.96\\ \\mathrm{m/s^2}$."
      },
      {
        q: "Massless cords enforce:",
        options: ["Different tensions every centimeter", "One tension and equal $|a|$ along the cord", "Zero acceleration", "Infinite mass"],
        answer: 1,
        explanation: "Inextensibility locks kinematics; zero mass kills tension gradients."
      },
      {
        q: "Elevator accelerating down at $a$ reads:",
        options: ["$m(g+a)$", "$m(g-a)$ — lighter", "$mg$ always", "Zero always"],
        answer: 1,
        explanation: "$n = m(g-a)$ from $n - mg = -ma$."
      }
    ]
  },
  {
    sectionId: "young-ch5-s3",
    readingTime: 7,
    intro: "Rough surfaces fight sliding with friction, proportional to the squeeze between them. This section models static versus kinetic friction, solves rough-incline and hauling problems, and treats rolling without slipping as static grip.",
    objectives: [
      "State $f_s \\le \\mu_s n$ and $f_k = \\mu_k n$ with directions",
      "Solve impending-motion and sliding problems",
      "Explain why $\\mu_s > \\mu_k$ matters for braking and walking"
    ],
    concepts: [
      {
        term: "Static friction",
        kind: "law",
        statement: "**Static friction** $f_s \\le \\mu_s n$ **matches the need up to a cap**, opposing impending slip.",
        detail: "Pushing $10\\ \\mathrm{N}$ on a crate needing $10$ draws $10$; needing $40$ with cap $30$ breaks loose."
      },
      {
        term: "Kinetic friction",
        kind: "law",
        statement: "**Kinetic friction** $f_k = \\mu_k n$ is **nearly speed-independent**, opposing actual sliding.",
        detail: "Once moving, the retarding force locks at $\\mu_k n$ — less than the $\\mu_s n$ that held it."
      },
      {
        term: "Coefficients",
        kind: "definition",
        statement: "**$\\mu_s, \\mu_k$** are dimensionless surface pairs (rubber-concrete ~$1.0/0.8$; steel-ice ~$0.1/0.05$).",
        detail: "Typically $\\mu_s > \\mu_k$: breaking loose is harder than staying in motion."
      },
      {
        term: "Rough incline",
        kind: "theorem",
        statement: "A block slips when **$\\tan\\theta > \\mu_s$**; sliding acceleration is **$a = g(\\sin\\theta - \\mu_k\\cos\\theta)$**.",
        detail: "At $\\theta = 30^{\\circ}$ with $\\mu_k = 0.20$: $a = 9.8(0.500-0.173) = 3.20\\ \\mathrm{m/s^2}$."
      },
      {
        term: "Rolling grip",
        kind: "insight",
        statement: "**Rolling without slipping** uses **static friction** at the instant-rest contact — no energy lost, steering and driving possible.",
        detail: "Locked brakes replace static with kinetic grip and lengthen stopping distance — hence anti-lock brakes."
      }
    ],
    examples: [
      {
        title: "Crate push threshold",
        problem: "A $40\\ \\mathrm{kg}$ crate has $\\mu_s = 0.50$, $\\mu_k = 0.30$. Find push to budge it and friction once sliding.",
        steps: [
          { label: "Normal", text: "$n = mg = 392\\ \\mathrm{N}$." },
          { label: "Cap", text: "$f_{s,\\max} = 0.50 \\times 392 = 196\\ \\mathrm{N}$ to budge." },
          { label: "Sliding", text: "$f_k = 0.30 \\times 392 = 118\\ \\mathrm{N}$ opposing motion." }
        ],
        result: "$196\\ \\mathrm{N}$ to start; $118\\ \\mathrm{N}$ while sliding."
      },
      {
        title: "Sliding down rough incline",
        problem: "A $5.0\\ \\mathrm{kg}$ block slides from rest down $30^{\\circ}$ with $\\mu_k = 0.20$. Find $a$ and speed after $2.0\\ \\mathrm{m}$.",
        steps: [
          { label: "Acceleration", text: "$a = 9.80(\\sin 30^{\\circ} - 0.20\\cos 30^{\\circ}) = 9.80(0.500-0.173) = 3.20\\ \\mathrm{m/s^2}$." },
          { label: "Speed", text: "$v^2 = 2 \\times 3.20 \\times 2.0 = 12.8$: $v = 3.58\\ \\mathrm{m/s}$." },
          { label: "Frictionless check", text: "Without friction $a = 4.90$, $v = 4.43\\ \\mathrm{m/s}$ — friction costs ~$20$%." }
        ],
        result: "$a = 3.20\\ \\mathrm{m/s^2}$; $3.58\\ \\mathrm{m/s}$ after $2.0\\ \\mathrm{m}$."
      }
    ],
    keyTakeaways: [
      "Static matches need up to $\\mu_s n$; kinetic locks at $\\mu_k n$.",
      "Friction opposes slip or impending slip, never motion abstractly.",
      "Inclines slip when $\\tan\\theta$ exceeds $\\mu_s$."
    ],
    quiz: [
      {
        q: "A $40\\ \\mathrm{kg}$ crate ($\\mu_s = 0.50$) starts moving when pushed past:",
        options: ["$118\\ \\mathrm{N}$", "$196\\ \\mathrm{N}$", "$40\\ \\mathrm{N}$", "$392\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$\\mu_s mg = 0.50 \\times 392 = 196\\ \\mathrm{N}$."
      },
      {
        q: "Kinetic friction direction is:",
        options: ["Along the motion", "Opposite the sliding velocity", "Vertical always", "Zero always"],
        answer: 1,
        explanation: "It resists actual relative slip at the interface."
      },
      {
        q: "Anti-lock brakes help because:",
        options: ["They use kinetic friction", "They preserve static grip ($\\mu_s > \\mu_k$)", "They remove the normal force", "They increase speed"],
        answer: 1,
        explanation: "Rolling contact keeps instant-rest static friction, which out-grips skidding."
      }
    ]
  },
  {
    sectionId: "young-ch5-s4",
    readingTime: 6,
    intro: "Circular motion dynamics is Newton second law aimed at the center: some real agent — tension, normal, friction, gravity — must supply $mv^2/R$. This section finds speeds, tensions, and normals on curves, pendulums, and banked roads.",
    objectives: [
      "Require $\\sum F_{\\mathrm{rad}} = mv^2/R$ toward the center",
      "Solve conical pendulums, crests, and banked curves",
      "Explain why no outward centrifugal force enters inertial diagrams"
    ],
    concepts: [
      {
        term: "Radial Newton law",
        kind: "law",
        statement: "**$\\sum F_{\\mathrm{rad}} = mv^2/R$** inward; tangential $\\sum F_{\\tan} = ma_{\\tan}$ handles speed change.",
        detail: "Uniform circular motion zeroes the tangential sum; only the radial equation constrains $v$."
      },
      {
        term: "Conical pendulum",
        kind: "theorem",
        statement: "A mass on a string sweeping angle $\\theta$: **$T\\sin\\theta = mv^2/r$**, **$T\\cos\\theta = mg$**, so **$\\tan\\theta = v^2/rg$**.",
        detail: "Faster spin flings wider: $v = \\sqrt{rg\\tan\\theta}$."
      },
      {
        term: "Crest and dip normals",
        kind: "method",
        statement: "Over a **crest**: $mg - n = mv^2/R$ (lighter); in a **dip**: $n - mg = mv^2/R$ (heavier).",
        detail: "At $v = \\sqrt{gR}$ the crest normal vanishes — airborne."
      },
      {
        term: "Banked curve",
        kind: "theorem",
        statement: "An ideally **banked** frictionless curve needs **$\\tan\\theta = v^2/Rg$** so the normal horizontal part supplies $mv^2/R$.",
        detail: "Highway $R = 200\\ \\mathrm{m}$, $v = 25\\ \\mathrm{m/s}$: $\\theta = \\arctan(625/1960) = 17.7^{\\circ}$."
      },
      {
        term: "No centrifugal in inertial frames",
        kind: "insight",
        statement: "**Never draw centrifugal force** in inertial diagrams — outward fling is inertia, and adding it double-counts.",
        detail: "The string pulls in; the ball tendency to fly straight explains the tautness without new forces."
      }
    ],
    figures: [
      {
        caption: "Banked curve: normal $\\vec{n}$ tilts so $n\\sin\\theta = mv^2/R$ with $n\\cos\\theta = mg$",
        svg: `<svg viewBox="0 0 720 200" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Banked curve forces"><line x1="80" y1="160" x2="640" y2="110" stroke="currentColor" stroke-width="3"/><rect x="320" y="88" width="70" height="40" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="355" cy="108" r="4" fill="currentColor"/><line x1="355" y1="108" x2="355" y2="168" stroke="currentColor" stroke-width="2"/><polygon points="355,168 349,156 361,156" fill="currentColor"/><line x1="355" y1="108" x2="310" y2="60" stroke="currentColor" stroke-width="2"/><polygon points="310,60 316,72 306,70" fill="currentColor"/><text x="365" y="165" font-size="12" fill="currentColor">mg</text><text x="275" y="55" font-size="12" fill="currentColor">n</text><line x1="355" y1="108" x2="430" y2="108" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="435" y="112" font-size="11" fill="currentColor" opacity="0.7">mv squared / R inward</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Conical pendulum speed",
        problem: "A $0.50\\ \\mathrm{kg}$ ball on a $1.0\\ \\mathrm{m}$ string sweeps $r = 0.40\\ \\mathrm{m}$ horizontally. Find $v$ and $T$.",
        steps: [
          { label: "Angle", text: "$\\sin\\theta = 0.40/1.0$: $\\theta = 23.6^{\\circ}$." },
          { label: "Speed", text: "$v = \\sqrt{rg\\tan\\theta} = \\sqrt{0.40 \\times 9.80 \\times 0.437} = 1.31\\ \\mathrm{m/s}$." },
          { label: "Tension", text: "$T = mg/\\cos\\theta = 4.90/0.917 = 5.34\\ \\mathrm{N}$." }
        ],
        result: "$v = 1.31\\ \\mathrm{m/s}$; $T = 5.34\\ \\mathrm{N}$."
      },
      {
        title: "Crest lightness",
        problem: "A $1000\\ \\mathrm{kg}$ car crests $R = 50\\ \\mathrm{m}$ at $15\\ \\mathrm{m/s}$. Find $n$.",
        steps: [
          { label: "Law", text: "$mg - n = mv^2/R$." },
          { label: "Numbers", text: "$n = 9800 - 1000 \\times 225/50 = 9800 - 4500 = 5300\\ \\mathrm{N}$." },
          { label: "Airborne speed", text: "$v = \\sqrt{9.8 \\times 50} = 22.1\\ \\mathrm{m/s}$ floats the car." }
        ],
        result: "$5300\\ \\mathrm{N}$ — about half weight; $22.1\\ \\mathrm{m/s}$ lifts off."
      }
    ],
    keyTakeaways: [
      "Point $\\sum F_{\\mathrm{rad}}$ at the center with magnitude $mv^2/R$.",
      "Banking and pendulums trade height angle for speed via $\\tan\\theta$.",
      "Crests lighten, dips heavy — $n$ reports the difference."
    ],
    quiz: [
      {
        q: "Correct radial equation in an inertial frame is:",
        options: ["$\\sum F_{\\mathrm{rad}} + F_{\\mathrm{centrifugal}} = 0$", "$\\sum F_{\\mathrm{rad}} = mv^2/R$ inward", "$\\sum F_{\\mathrm{rad}} = 0$ always", "$mv^2/R$ outward"],
        answer: 1,
        explanation: "Real forces sum to the inward $mv^2/R$; no extra fling force is drawn."
      },
      {
        q: "Car cresting at $15\\ \\mathrm{m/s}$ ($R = 50\\ \\mathrm{m}$, $1000\\ \\mathrm{kg}$) feels normal:",
        options: ["$9800\\ \\mathrm{N}$", "$5300\\ \\mathrm{N}$", "$14300\\ \\mathrm{N}$", "Zero"],
        answer: 1,
        explanation: "$9800 - 4500 = 5300\\ \\mathrm{N}$."
      },
      {
        q: "Ideal banking angle satisfies:",
        options: ["$\\tan\\theta = Rg/v^2$", "$\\tan\\theta = v^2/Rg$", "$\\sin\\theta = 0$ always", "$\\theta = 90^{\\circ}$ always"],
        answer: 1,
        explanation: "Horizontal normal part $n\\sin\\theta$ must equal $mv^2/R$ with $n\\cos\\theta = mg$."
      }
    ]
  },
  {
    sectionId: "young-ch5-s5",
    readingTime: 4,
    intro: "Underneath every rope and road lie four fundamental interactions. This closing section surveys gravity, electromagnetism, and the strong and weak nuclear forces, with their ranges, strengths, and the unification program.",
    objectives: [
      "List the four fundamental forces weakest to strongest",
      "Give the range and mediator of each interaction",
      "Explain why everyday contact is electromagnetic"
    ],
    concepts: [
      {
        term: "Gravity",
        kind: "definition",
        statement: "**Gravity** is **universally attractive**, infinite-range, weakest ($\\sim 10^{-38}$ of strong), mediated by mass-energy curving spacetime.",
        detail: "It rules planets and galaxies but is negligible inside atoms."
      },
      {
        term: "Electromagnetism",
        kind: "definition",
        statement: "**Electromagnetism** acts on **charge**, infinite-range, $\\sim 10^{-2}$ of strong, mediated by **photons**.",
        detail: "It holds atoms, makes contact forces, light, and chemistry — nearly all of daily life."
      },
      {
        term: "Strong interaction",
        kind: "definition",
        statement: "**Strong force** binds **quarks and nuclei**, range $\\sim 10^{-15}\\ \\mathrm{m}$, strongest, mediated by **gluons**.",
        detail: "It overcomes proton repulsion inside nuclei; outside femtometers it vanishes."
      },
      {
        term: "Weak interaction",
        kind: "definition",
        statement: "**Weak force** drives **beta decay and fusion**, range $\\sim 10^{-18}\\ \\mathrm{m}$, mediated by **$W$ and $Z$ bosons**.",
        detail: "Sunshine begins with weak conversion of protons to neutrons in the proton-proton chain."
      },
      {
        term: "Unification view",
        kind: "insight",
        statement: "At high energy the forces **merge**: electroweak unification is tested; **grand and quantum-gravity unification** remain open.",
        detail: "Mechanics uses effective gravity plus electromagnetic contact — the low-energy faces of two fundamental fields."
      }
    ],
    figures: [
      {
        caption: "Four forces by strength and range: strong and weak confine to nuclei while electromagnetism and gravity reach to infinity",
        svg: `<svg viewBox="0 0 720 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four fundamental forces"><line x1="60" y1="140" x2="660" y2="140" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="140" r="7" fill="currentColor"/><circle cx="330" cy="140" r="10" fill="currentColor" opacity="0.6"/><line x1="470" y1="140" x2="620" y2="140" stroke="currentColor" stroke-width="2.5"/><line x1="150" y1="140" x2="200" y2="140" stroke="currentColor" stroke-width="2.5"/><text x="150" y="115" font-size="11" text-anchor="middle" fill="currentColor">weak</text><text x="330" y="115" font-size="11" text-anchor="middle" fill="currentColor">strong</text><text x="545" y="115" font-size="11" text-anchor="middle" fill="currentColor">EM + gravity</text><text x="360" y="163" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">short range (nuclei) versus infinite range</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Contact is electromagnetic",
        problem: "Why does a table push up on a book without touching atoms?",
        steps: [
          { label: "Scales", text: " Nuclei are $10^{-15}$–$10^{-14}\\ \\mathrm{m}$; atoms $10^{-10}\\ \\mathrm{m}$ — mostly empty." },
          { label: "Repel", text: "Electron clouds overlap and electromagnetic repulsion balances weight at angstrom gaps." },
          { label: "Normal", text: "Macroscopic $n$ is billions of microscopic Coulomb pushes summed." }
        ],
        result: "The normal force is electromagnetism in disguise."
      },
      {
        title: "Strength hierarchy",
        problem: "Compare gravity and Coulomb repulsion for two protons $10^{-15}\\ \\mathrm{m}$ apart.",
        steps: [
          { label: "Gravity", text: "$F_g = Gm_p^2/r^2 \\approx 6.67 \\times 10^{-11} \\times (1.67 \\times 10^{-27})^2/10^{-30} \\approx 1.9 \\times 10^{-34}\\ \\mathrm{N}$." },
          { label: "Coulomb", text: "$F_e = k e^2/r^2 \\approx 9 \\times 10^9 \\times (1.6 \\times 10^{-19})^2/10^{-30} \\approx 230\\ \\mathrm{N}$." },
          { label: "Ratio", text: "$F_e/F_g \\sim 10^{36}$ — gravity utterly negligible; strong (~$10^3\\ \\mathrm{N}$ here) still wins." }
        ],
        result: "Electromagnetism beats gravity by ~$10^{36}$ for protons; only the strong binds nuclei."
      }
    ],
    keyTakeaways: [
      "Four forces: gravity, electromagnetic, strong, weak.",
      "Range and strength decide each domain: nuclei, atoms, cosmos.",
      "Everyday pushes are electromagnetic contact at atomic scale."
    ],
    quiz: [
      {
        q: "Weakest, infinite-range, always-attractive force is:",
        options: ["Strong", "Gravity", "Electromagnetism", "Friction"],
        answer: 1,
        explanation: "Gravity couples to all mass-energy but with stunning feebleness."
      },
      {
        q: "Normal and friction forces are fundamentally:",
        options: ["Gravitational", "Electromagnetic", "Strong", "Weak"],
        answer: 1,
        explanation: "Electron-cloud Coulomb repulsion sums to macroscopic contact forces."
      },
      {
        q: "Strong force range is about:",
        options: ["Infinite", "$10^{-15}\\ \\mathrm{m}$ (femtometers)", "$1\\ \\mathrm{m}$", "$10^{11}\\ \\mathrm{m}$"],
        answer: 1,
        explanation: "Gluon confinement kills it beyond nuclear diameters."
      }
    ]
  }
];

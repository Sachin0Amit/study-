import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 8
// Momentum, Impulse, and Collisions (Secs 8.1–8.6)
// ============================================================================

export const youngCh8Content: SectionContent[] = [
  {
    sectionId: "young-ch8-s1",
    readingTime: 5,
    intro: "Momentum packages mass in motion, and impulse spends force over time on it. This section defines $\\vec{p} = m\\vec{v}$ and proves the impulse-momentum theorem $\\vec{J} = \\Delta\\vec{p}$ that governs every hit and kick.",
    objectives: [
      "Define momentum $\\vec{p} = m\\vec{v}$ and its units",
      "Define impulse $\\vec{J} = \\int\\vec{F}\\,dt$",
      "Apply $\\vec{J} = \\vec{p}_2-\\vec{p}_1$ to impacts"
    ],
    concepts: [
      {
        term: "Linear momentum",
        kind: "definition",
        statement: "**Momentum** $\\vec{p} = m\\vec{v}$ is **mass times velocity** ($\\mathrm{kg\\cdot m/s}$), vector like $\\vec{v}$.",
        detail: "A $1000\\ \\mathrm{kg}$ car at $20\\ \\mathrm{m/s}$ carries $20{,}000\\ \\mathrm{kg\\cdot m/s}$ — twenty times a $50\\ \\mathrm{kg}$ person at the same speed."
      },
      {
        term: "Impulse",
        kind: "definition",
        statement: "**Impulse** $\\vec{J} = \\int_{t_1}^{t_2}\\vec{F}(t)\\,dt$ is **force accumulated over time**, also $\\mathrm{kg\\cdot m/s}$.",
        detail: "A $100\\ \\mathrm{N}$ push for $0.50\\ \\mathrm{s}$ delivers $50\\ \\mathrm{N\\cdot s}$ of impulse."
      },
      {
        term: "Impulse-momentum theorem",
        kind: "theorem",
        statement: "**$\\vec{J}_{\\mathrm{net}} = \\vec{p}_2 - \\vec{p}_1 = \\Delta\\vec{p}$** — net impulse equals momentum change.",
        detail: "It is Newton second law integrated: $\\int\\vec{F}\\,dt = \\int m\\,d\\vec{v}$."
      },
      {
        term: "Average force in impacts",
        kind: "method",
        statement: "**$\\vec{F}_{\\mathrm{av}} = \\Delta\\vec{p}/\\Delta t$**: short stops demand huge forces.",
        detail: "Stopping $0.15\\ \\mathrm{kg}$ at $40\\ \\mathrm{m/s}$ in $0.005\\ \\mathrm{s}$ averages $1200\\ \\mathrm{N}$."
      },
      {
        term: "Padding extends time",
        kind: "insight",
        statement: "**Lengthening $\\Delta t$ softens $F_{\\mathrm{av}}$** for fixed $\\Delta p$ — airbags, gloves, and bending knees.",
        detail: "Doubling impact time halves the average force on the occupant."
      }
    ],
    examples: [
      {
        title: "Tennis impact",
        problem: "A $0.057\\ \\mathrm{kg}$ ball arrives at $30\\ \\mathrm{m/s}$ and leaves at $35\\ \\mathrm{m/s}$ reversed in $0.008\\ \\mathrm{s}$. Find impulse and mean force.",
        steps: [
          { label: "Momenta", text: "Take incoming as $-x$: $p_1 = -1.71$, $p_2 = +1.995\\ \\mathrm{kg\\cdot m/s}$." },
          { label: "Impulse", text: "$J = 1.995 - (-1.71) = 3.705\\ \\mathrm{N\\cdot s}$." },
          { label: "Force", text: "$F_{\\mathrm{av}} = 3.705/0.008 = 463\\ \\mathrm{N}$." }
        ],
        result: "$3.71\\ \\mathrm{N\\cdot s}$ impulse; $463\\ \\mathrm{N}$ mean force."
      },
      {
        title: "Bend the knees",
        problem: "A $70\\ \\mathrm{kg}$ jumper lands at $4.0\\ \\mathrm{m/s}$. Compare stiff ($0.05\\ \\mathrm{s}$) versus soft ($0.25\\ \\mathrm{s}$) stops.",
        steps: [
          { label: "Momentum to kill", text: "$\\Delta p = 70 \\times 4.0 = 280\\ \\mathrm{kg\\cdot m/s}$." },
          { label: "Stiff", text: "$F = 280/0.05 = 5600\\ \\mathrm{N}$ ($8g$)." },
          { label: "Soft", text: "$F = 280/0.25 = 1120\\ \\mathrm{N}$ ($1.6g$) — five times gentler." }
        ],
        result: "Soft landing cuts peak force by a factor of five."
      }
    ],
    keyTakeaways: [
      "$\\vec{p} = m\\vec{v}$ stores motion; $\\vec{J} = \\int\\vec{F}\\,dt$ spends force-time.",
      "Net impulse equals momentum change, always.",
      "Impacts trade force against time for fixed $\\Delta p$."
    ],
    quiz: [
      {
        q: "Impulse-momentum theorem states:",
        options: ["$\\vec{J}_{\\mathrm{net}} = \\Delta\\vec{p}$", "$\\vec{J} = m$", "$\\vec{p} = Ft^2$", "$\\vec{F} = 0$ always"],
        answer: 0,
        explanation: "Integrating $\\sum\\vec{F} = m\\vec{a}$ over time gives exactly this."
      },
      {
        q: "Stopping $0.15\\ \\mathrm{kg}$ at $40\\ \\mathrm{m/s}$ in $0.005\\ \\mathrm{s}$ averages:",
        options: ["$6\\ \\mathrm{N}$", "$1200\\ \\mathrm{N}$", "$40\\ \\mathrm{N}$", "Zero"],
        answer: 1,
        explanation: "$\\Delta p = 6.0$, divided by $0.005 = 1200\\ \\mathrm{N}$."
      },
      {
        q: "Airbags protect by:",
        options: ["Reducing $\\Delta p$ needed", "Extending $\\Delta t$ to cut $F_{\\mathrm{av}}$", "Increasing mass", "Removing forces"],
        answer: 1,
        explanation: "Same momentum change over longer time means smaller average force."
      }
    ]
  },
  {
    sectionId: "young-ch8-s2",
    readingTime: 6,
    intro: "When external impulses vanish, total momentum cannot change — a conservation law rivaling energy. This section proves momentum conservation for isolated systems and applies it to recoil and explosions.",
    objectives: [
      "Prove $\\vec{P}_{\\mathrm{tot}}$ conserved without net external impulse",
      "Separate internal from external forces",
      "Solve recoil and explosion problems"
    ],
    concepts: [
      {
        term: "Total momentum",
        kind: "definition",
        statement: "**$\\vec{P}_{\\mathrm{tot}} = \\vec{p}_1+\\vec{p}_2+\\cdots$** sums every part; internal pairs cancel in the sum.",
        detail: "Two skaters pushing: $m_1\\vec{v}_1 + m_2\\vec{v}_2$ is the conserved ledger."
      },
      {
        term: "Conservation condition",
        kind: "theorem",
        statement: "If **$\\sum\\vec{F}_{\\mathrm{ext}} = 0$** (isolated), then **$d\\vec{P}_{\\mathrm{tot}}/dt = 0$** — total momentum fixed.",
        detail: "Internal springs and collisions reshuffle $\\vec{p}$ among parts but never change the total."
      },
      {
        term: "Internal versus external",
        kind: "method",
        statement: "**Internal** forces pair-cancel; only **external** impulses ($\\int\\vec{F}_{\\mathrm{ext}}\\,dt$) move $\\vec{P}_{\\mathrm{tot}}$.",
        detail: "Car-crash deformation is internal to the two-car system; road friction on either is external."
      },
      {
        term: "Recoil",
        kind: "method",
        statement: "**Zero initial $P$ splits oppositely**: $m_1\\vec{v}_1 + m_2\\vec{v}_2 = 0$, so speeds invert mass ratios.",
        detail: "$10\\ \\mathrm{kg}$ cannon firing $1.0\\ \\mathrm{kg}$ at $100\\ \\mathrm{m/s}$ recoils at $10\\ \\mathrm{m/s}$."
      },
      {
        term: "Component conservation",
        kind: "insight",
        statement: "Conservation holds **per axis**: $P_x$ can conserve while $P_y$ changes under vertical external force.",
        detail: "Projectiles conserve $P_x$ (no horizontal force) while gravity drains $P_y$."
      }
    ],
    figures: [
      {
        caption: "Isolated push: $m_1\\vec{v}_1 + m_2\\vec{v}_2 = 0$ — equal opposite momenta from rest",
        svg: `<svg viewBox="0 0 720 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Recoil momenta"><rect x="140" y="60" width="90" height="55" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><rect x="490" y="60" width="90" height="55" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="185" y="92" font-size="13" text-anchor="middle" fill="currentColor">m1</text><text x="535" y="92" font-size="13" text-anchor="middle" fill="currentColor">m2</text><line x1="140" y1="88" x2="40" y2="88" stroke="currentColor" stroke-width="2.5"/><polygon points="40,88 54,82 54,94" fill="currentColor"/><line x1="580" y1="88" x2="680" y2="88" stroke="currentColor" stroke-width="2.5"/><polygon points="680,88 666,82 666,94" fill="currentColor"/><text x="90" y="70" font-size="11" fill="currentColor">p1</text><text x="630" y="70" font-size="11" fill="currentColor">p2</text><text x="360" y="140" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.7">Ptot = 0 stays 0: p1 = minus p2</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Skater push",
        problem: "A $60\\ \\mathrm{kg}$ skater pushes a $40\\ \\mathrm{kg}$ skater; the $40\\ \\mathrm{kg}$ one leaves at $3.0\\ \\mathrm{m/s}$. Find the other velocity.",
        steps: [
          { label: "Conserve", text: "$0 = 60v_1 + 40 \\times 3.0$." },
          { label: "Solve", text: "$v_1 = -120/60 = -2.0\\ \\mathrm{m/s}$." },
          { label: "Energy note", text: "Momenta cancel; kinetic energies $120+180 = 300\\ \\mathrm{J}$ came from the push." }
        ],
        result: "$2.0\\ \\mathrm{m/s}$ opposite the partner."
      },
      {
        title: "Cannon recoil",
        problem: "A $500\\ \\mathrm{kg}$ cannon fires $10\\ \\mathrm{kg}$ at $200\\ \\mathrm{m/s}$. Recoil?",
        steps: [
          { label: "Conserve", text: "$0 = 500V + 10 \\times 200$." },
          { label: "Solve", text: "$V = -2000/500 = -4.0\\ \\mathrm{m/s}$." },
          { label: "Check", text: "Mass ratio $50$:1 inverts speed ratio $1$:$50$." }
        ],
        result: "$4.0\\ \\mathrm{m/s}$ backward."
      }
    ],
    keyTakeaways: [
      "Isolated total momentum never changes.",
      "Internal forces reshuffle; external impulses rule.",
      "Zero-start splits give inverse-mass velocities."
    ],
    quiz: [
      {
        q: "Total momentum is conserved when:",
        options: ["Internal forces are large", "Net external force (impulse) is zero", "Kinetic energy is conserved", "Masses are equal"],
        answer: 1,
        explanation: "$d\\vec{P}/dt = \\sum\\vec{F}_{\\mathrm{ext}}$ — zero input keeps the ledger fixed."
      },
      {
        q: "$60\\ \\mathrm{kg}$ pushing $40\\ \\mathrm{kg}$ to $3.0\\ \\mathrm{m/s}$ recoils at:",
        options: ["$3.0\\ \\mathrm{m/s}$", "$2.0\\ \\mathrm{m/s}$ opposite", "$4.5\\ \\mathrm{m/s}$", "Zero"],
        answer: 1,
        explanation: "$60v = -120$: $v = -2.0\\ \\mathrm{m/s}$."
      },
      {
        q: "A projectile in flight conserves:",
        options: ["Both $P_x$ and $P_y$", "$P_x$ only — gravity is external vertically", "Neither component", "Only kinetic energy"],
        answer: 1,
        explanation: "No horizontal external force; gravity drains $P_y$ steadily."
      }
    ]
  },
  {
    sectionId: "young-ch8-s3",
    readingTime: 6,
    intro: "Collisions conserve momentum but may waste kinetic energy as heat and deformation. This section classifies collisions, solves completely inelastic mergers, and introduces the ballistic pendulum as a momentum-then-energy problem.",
    objectives: [
      "Classify elastic, inelastic, completely inelastic collisions",
      "Solve mergers with $m_1v_1+m_2v_2 = (m_1+m_2)V$",
      "Analyze the ballistic pendulum in two stages"
    ],
    concepts: [
      {
        term: "Collision classes",
        kind: "definition",
        statement: "**Momentum always conserves** in isolated collisions; **kinetic energy** conserves only if **elastic**.",
        detail: "Completely inelastic sticks together (max $K$ loss); partially inelastic loses some; elastic keeps all $K$."
      },
      {
        term: "Completely inelastic merger",
        kind: "theorem",
        statement: "Sticking gives **$V = (m_1v_1+m_2v_2)/(m_1+m_2)$** in 1D — one equation, one unknown final velocity.",
        detail: "$2000\\ \\mathrm{kg}$ at $10\\ \\mathrm{m/s}$ hitting $1000\\ \\mathrm{kg}$ at rest: $V = 6.67\\ \\mathrm{m/s}$."
      },
      {
        term: "Kinetic loss in mergers",
        kind: "insight",
        statement: "Mergers **maximize $K$ loss** consistent with $P$ conservation — deformation and heat take the rest.",
        detail: "Above: $100{,}000\\ \\mathrm{J}$ drops to $66{,}700$: $33{,}300\\ \\mathrm{J}$ lost."
      },
      {
        term: "Ballistic pendulum protocol",
        kind: "method",
        statement: "**Stage 1 (collision): conserve $P$** as the bullet lodges; **Stage 2 (swing): conserve $E$** as it rises.",
        detail: "Never conserve $E$ through the embedding (inelastic) nor $P$ through the swing (gravity external)."
      },
      {
        term: "Impulse view of collisions",
        kind: "insight",
        statement: "During brief hard hits, **external impulses are negligible** next to internal collision impulses — conservation applies even with gravity present.",
        detail: "A millisecond car crash conserves $P$ though weight and normals act throughout."
      }
    ],
    examples: [
      {
        title: "Railcar merger",
        problem: "A $2000\\ \\mathrm{kg}$ car at $10\\ \\mathrm{m/s}$ hits and sticks to $1000\\ \\mathrm{kg}$ at rest. Find $V$ and $K$ loss.",
        steps: [
          { label: "Momentum", text: "$V = 2000 \\times 10/3000 = 6.67\\ \\mathrm{m/s}$." },
          { label: "Energies", text: "$K_1 = 100{,}000\\ \\mathrm{J}$; $K_2 = 0.5 \\times 3000 \\times 44.4 = 66{,}700\\ \\mathrm{J}$." },
          { label: "Loss", text: "$33{,}300\\ \\mathrm{J}$ to coupling deformation." }
        ],
        result: "$V = 6.67\\ \\mathrm{m/s}$; one-third of $K$ lost."
      },
      {
        title: "Ballistic pendulum",
        problem: "A $0.010\\ \\mathrm{kg}$ bullet at $v$ lodges in $2.0\\ \\mathrm{kg}$; the block rises $0.12\\ \\mathrm{m}$. Find $v$.",
        steps: [
          { label: "Swing energy", text: "$(M+m)V^2/2 = (M+m)gh$: $V = \\sqrt{2gh} = \\sqrt{2.352} = 1.534\\ \\mathrm{m/s}$." },
          { label: "Collision momentum", text: "$mv = (M+m)V$: $v = 2.01 \\times 1.534/0.010 = 308\\ \\mathrm{m/s}$." },
          { label: "Check", text: "Huge ratio $201$:1 amplifies $1.5\\ \\mathrm{m/s}$ to $308$ — the pendulum as amplifier." }
        ],
        result: "$v = 308\\ \\mathrm{m/s}$."
      }
    ],
    keyTakeaways: [
      "Momentum conservation spans all isolated collisions.",
      "Sticking fixes $V$ by mass-weighted averaging.",
      "Ballistic pendulum: $P$ to lodge, $E$ to rise."
    ],
    quiz: [
      {
        q: "In any isolated collision, conserved is:",
        options: ["Kinetic energy always", "Total momentum always", "Both always", "Neither ever"],
        answer: 1,
        explanation: "Newton third law pairs cancel internally; energy needs elasticity too."
      },
      {
        q: "$2000\\ \\mathrm{kg}$ at $10\\ \\mathrm{m/s}$ sticking to $1000\\ \\mathrm{kg}$ at rest gives:",
        options: ["$10\\ \\mathrm{m/s}$", "$6.67\\ \\mathrm{m/s}$", "$5.0\\ \\mathrm{m/s}$", "Zero"],
        answer: 1,
        explanation: "Mass-weighted mean: $20{,}000/3000 = 6.67\\ \\mathrm{m/s}$."
      },
      {
        q: "Ballistic pendulum uses:",
        options: ["Energy throughout", "Momentum for lodging, energy for swing", "Momentum throughout", "Neither"],
        answer: 1,
        explanation: "Embedding is inelastic (no $E$); swing has external gravity (no $P$)."
      }
    ]
  },
  {
    sectionId: "young-ch8-s4",
    readingTime: 7,
    intro: "Elastic collisions keep kinetic energy as well as momentum, giving two equations for two unknowns. This section solves 1D elastic collisions in closed form and extends the bookkeeping to 2D glancing hits.",
    objectives: [
      "Solve 1D elastic collisions via $P$ plus $K$ conservation",
      "Use relative-velocity reversal $v_{2}-v_{1} = -(v_{2}^{\\prime}-v_{1}^{\\prime})$",
      "Conserve vector momentum in 2D collisions"
    ],
    concepts: [
      {
        term: "Elastic conditions",
        kind: "definition",
        statement: "**Elastic** means **$P$ and $K$ both conserve** — ideal springs, atomic hits, Newton cradle nearly.",
        detail: "Macroscopic metal-on-metal is nearly elastic; clay is the opposite extreme."
      },
      {
        term: "Relative-velocity reversal",
        kind: "theorem",
        statement: "In 1D elastic hits, **approach speed equals separation speed**: $v_1-v_2 = -(v_1^{\\prime}-v_2^{\\prime})$.",
        detail: "It replaces the quadratic $K$ equation with a linear one — the exam shortcut."
      },
      {
        term: "1D elastic solution",
        kind: "theorem",
        statement: "With target $m_2$ at rest: **$v_1^{\\prime} = (m_1-m_2)v_1/(m_1+m_2)$**, **$v_2^{\\prime} = 2m_1v_1/(m_1+m_2)$**.",
        detail: "Equal masses swap velocities; heavy-on-light plows through; light-on-heavy rebounds."
      },
      {
        term: "Equal-mass swap",
        kind: "insight",
        statement: "**Equal masses with one initially at rest exchange velocities** in head-on elastic hits.",
        detail: "Billiard stop-shot: cue ball halts dead, object ball departs at full speed."
      },
      {
        term: "2D glancing collisions",
        kind: "method",
        statement: "In 2D conserve **$P_x$, $P_y$, and $K$** (elastic): three equations for four outgoing components — one angle must be given.",
        detail: "Equal-mass elastic with one at rest scatters at $90^{\\circ}$ between the outgoing tracks."
      }
    ],
    figures: [
      {
        caption: "Head-on elastic: approach speed equals separation speed; equal masses swap $v$",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Elastic collision"><line x1="40" y1="95" x2="680" y2="95" stroke="currentColor" stroke-width="1.5"/><circle cx="230" cy="95" r="22" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="490" cy="95" r="22" fill="none" stroke="currentColor" stroke-width="2"/><line x1="252" y1="95" x2="330" y2="95" stroke="currentColor" stroke-width="2.5"/><polygon points="330,95 316,89 316,101" fill="currentColor"/><line x1="420" y1="70" x2="350" y2="70" stroke="currentColor" stroke-width="2"/><polygon points="350,70 364,64 364,76" fill="currentColor"/><line x1="512" y1="95" x2="600" y2="95" stroke="currentColor" stroke-width="2.5"/><polygon points="600,95 586,89 586,101" fill="currentColor"/><text x="230" y="140" font-size="11" text-anchor="middle" fill="currentColor">m1 in</text><text x="490" y="140" font-size="11" text-anchor="middle" fill="currentColor">m2 out</text><text x="360" y="50" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">m1 rebounds (light on heavy)</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Newton-cradle equal masses",
        problem: "$m_1 = m_2 = 0.20\\ \\mathrm{kg}$; $v_1 = 4.0\\ \\mathrm{m/s}$, $v_2 = 0$, elastic head-on. Find outgoing.",
        steps: [
          { label: "Formulas", text: "$v_1^{\\prime} = 0$, $v_2^{\\prime} = 4.0\\ \\mathrm{m/s}$." },
          { label: "Check P", text: "$0.80 = 0.80\\ \\mathrm{kg\\cdot m/s}$." },
          { label: "Check K", text: "$1.60 = 1.60\\ \\mathrm{J}$ — full transfer." }
        ],
        result: "Velocities swap: $0$ and $4.0\\ \\mathrm{m/s}$."
      },
      {
        title: "Heavy plow-through",
        problem: "$m_1 = 6.0\\ \\mathrm{kg}$ at $5.0\\ \\mathrm{m/s}$ hits $m_2 = 2.0\\ \\mathrm{kg}$ at rest, elastic. Find outgoing.",
        steps: [
          { label: "Formulas", text: "$v_1^{\\prime} = (4/8) \\times 5.0 = 2.50\\ \\mathrm{m/s}$; $v_2^{\\prime} = (12/8) \\times 5.0 = 7.50\\ \\mathrm{m/s}$." },
          { label: "Check P", text: "$30 = 15 + 15 = 30$." },
          { label: "Check K", text: "$75 = 18.75 + 56.25 = 75\\ \\mathrm{J}$." }
        ],
        result: "$2.50$ and $7.50\\ \\mathrm{m/s}$ forward — heavy keeps going."
      }
    ],
    keyTakeaways: [
      "Elastic adds $K$ conservation to $P$ conservation.",
      "Approach-separation equality linearizes the system.",
      "Mass ratios decide swap, plow, or rebound."
    ],
    quiz: [
      {
        q: "Equal-mass head-on elastic with one at rest gives:",
        options: ["Both stop", "Velocities swap", "Both continue at half speed", "Heavy stops always"],
        answer: 1,
        explanation: "$(m_1-m_2) = 0$ kills $v_1^{\\prime}$; $2m_1/(2m_1) = 1$ transfers all."
      },
      {
        q: "1D elastic shortcut replacing $K$ quadratic is:",
        options: ["$v_1 = v_2$ always", "Approach speed equals separation speed", "Masses are equal", "Energy is lost"],
        answer: 1,
        explanation: "Combining $P$ and $K$ conservation factors into velocity-difference reversal."
      },
      {
        q: "$6.0\\ \\mathrm{kg}$ at $5.0\\ \\mathrm{m/s}$ elastic onto $2.0\\ \\mathrm{kg}$ at rest: $v_2^{\\prime}$ is:",
        options: ["$2.50\\ \\mathrm{m/s}$", "$7.50\\ \\mathrm{m/s}$", "$5.0\\ \\mathrm{m/s}$", "Zero"],
        answer: 1,
        explanation: "$2m_1v_1/(m_1+m_2) = 60/8 = 7.50\\ \\mathrm{m/s}$."
      }
    ]
  },
  {
    sectionId: "young-ch8-s5",
    readingTime: 5,
    intro: "The center of mass moves as if all mass and external force lived there — the great simplification for multi-part systems. This section locates the CM and proves $M\\vec{a}_{\\mathrm{cm}} = \\sum\\vec{F}_{\\mathrm{ext}}$.",
    objectives: [
      "Locate $\\vec{r}_{\\mathrm{cm}} = \\sum m_i\\vec{r}_i/M$ discretely and continuously",
      "Prove $\\vec{P}_{\\mathrm{tot}} = M\\vec{v}_{\\mathrm{cm}}$",
      "Move the CM under external forces only"
    ],
    concepts: [
      {
        term: "Center of mass",
        kind: "definition",
        statement: "**$\\vec{r}_{\\mathrm{cm}} = (m_1\\vec{r}_1+m_2\\vec{r}_2+\\cdots)/M$** is the mass-weighted mean position.",
        detail: "$2.0\\ \\mathrm{kg}$ at $x = 0$ and $6.0\\ \\mathrm{kg}$ at $x = 4.0\\ \\mathrm{m}$: $x_{\\mathrm{cm}} = 24/8 = 3.0\\ \\mathrm{m}$."
      },
      {
        term: "CM motion theorem",
        kind: "theorem",
        statement: "**$M\\vec{a}_{\\mathrm{cm}} = \\sum\\vec{F}_{\\mathrm{ext}}$** — the CM accelerates as a particle of mass $M$ under external forces only.",
        detail: "A tumbling wrench CM traces a parabola though the ends whirl — internal spins never move the CM."
      },
      {
        term: "Momentum as CM motion",
        kind: "theorem",
        statement: "**$\\vec{P}_{\\mathrm{tot}} = M\\vec{v}_{\\mathrm{cm}}$**: total momentum is CM mass times CM velocity.",
        detail: "Conservation of $\\vec{P}$ is uniform motion of the CM in isolation."
      },
      {
        term: "Symmetry shortcut",
        kind: "method",
        statement: "**Symmetric uniform bodies center their CM** at the geometric center — no integral needed.",
        detail: "Rod midpoint, disk center, sphere center; cars and humans need the weighted sum."
      },
      {
        term: "Internal motion cannot move CM",
        kind: "insight",
        statement: "Without external force the **CM stays** (or coasts): astronauts reposition limbs freely but the CM floats on.",
        detail: "Walking works because foot friction is external — pushing Earth back moves you forward."
      }
    ],
    examples: [
      {
        title: "Dumbbell CM",
        problem: "$2.0\\ \\mathrm{kg}$ at $x = 0$, $6.0\\ \\mathrm{kg}$ at $x = 4.0\\ \\mathrm{m}$. Find $x_{\\mathrm{cm}}$.",
        steps: [
          { label: "Sum", text: "$x_{\\mathrm{cm}} = (2 \\times 0 + 6 \\times 4.0)/8.0 = 3.0\\ \\mathrm{m}$." },
          { label: "Sense", text: "Closer to the heavy mass, as required." },
          { label: "Shift", text: "Moving $2.0\\ \\mathrm{kg}$ to $x = 8.0$ shifts CM to $(16+24)/8 = 5.0\\ \\mathrm{m}$." }
        ],
        result: "$x_{\\mathrm{cm}} = 3.0\\ \\mathrm{m}$."
      },
      {
        title: "Exploding shell",
        problem: "A shell in flight ($P$ known) bursts into fragments. Where does the CM go?",
        steps: [
          { label: "External", text: "Only gravity acts (air aside): CM continues the original parabola." },
          { label: "Fragments", text: "Pieces scatter, but mass-weighted mean stays on track." },
          { label: "Use", text: "Finding one fragment locates the other via the CM line." }
        ],
        result: "CM follows the pre-burst trajectory regardless of the blast."
      }
    ],
    keyTakeaways: [
      "CM is the mass-weighted average position.",
      "External forces alone steer the CM.",
      "Total momentum is just $M\\vec{v}_{\\mathrm{cm}}$."
    ],
    quiz: [
      {
        q: "$2.0\\ \\mathrm{kg}$ at $0$ and $6.0\\ \\mathrm{kg}$ at $4.0\\ \\mathrm{m}$ center at:",
        options: ["$2.0\\ \\mathrm{m}$", "$3.0\\ \\mathrm{m}$", "$4.0\\ \\mathrm{m}$", "Zero"],
        answer: 1,
        explanation: "$(0+24)/8 = 3.0\\ \\mathrm{m}$ — weighted toward the heavy end."
      },
      {
        q: "CM acceleration obeys:",
        options: ["$M\\vec{a}_{\\mathrm{cm}} = \\sum\\vec{F}_{\\mathrm{ext}}$", "$\\vec{a}_{\\mathrm{cm}} = 0$ always", "$\\vec{F} = 0$ always", "$\\vec{a}_{\\mathrm{cm}} = \\vec{g}$ always"],
        answer: 0,
        explanation: "Internal pairs cancel in the mass-weighted sum, leaving externals."
      },
      {
        q: "An isolated tumbling wrench CM:",
        options: ["Spins wildly", "Moves uniformly (or rests)", "Accelerates", "Vanishes"],
        answer: 1,
        explanation: "No external impulse: $\\vec{v}_{\\mathrm{cm}}$ fixed while parts rotate about it."
      }
    ]
  },
  {
    sectionId: "young-ch8-s6",
    readingTime: 6,
    intro: "Rockets move by shedding mass: exhaust thrown back drives the vehicle forward. This section derives thrust $F = -v_{\\mathrm{ex}}\\,dm/dt$ and the rocket equation $\\Delta v = v_{\\mathrm{ex}}\\ln(m_0/m)$.",
    objectives: [
      "Derive thrust from momentum exchange with exhaust",
      "State and use the rocket equation for $\\Delta v$",
      "Explain staging and mass ratio strategy"
    ],
    concepts: [
      {
        term: "Thrust",
        kind: "theorem",
        statement: "**Thrust** $F = |v_{\\mathrm{ex}}\\,dm/dt|$: exhaust speed times mass-flow rate.",
        detail: "$v_{\\mathrm{ex}} = 2500\\ \\mathrm{m/s}$, $100\\ \\mathrm{kg/s}$: $F = 250{,}000\\ \\mathrm{N}$."
      },
      {
        term: "Rocket equation",
        kind: "theorem",
        statement: "**$\\Delta v = v_{\\mathrm{ex}}\\ln(m_0/m)$** — velocity gain is exhaust speed times log mass ratio (no gravity).",
        detail: "Mass ratio $10$: $\\Delta v = 2.303\\,v_{\\mathrm{ex}}$; ratio $20$ adds only $0.69\\,v_{\\mathrm{ex}}$ more."
      },
      {
        term: "Why the logarithm",
        kind: "insight",
        statement: "Early fuel pushes **later fuel as dead weight**: each increment pays diminishing returns — the tyranny of the log.",
        detail: "Doubling $\\Delta v$ needs squaring the mass ratio, not doubling fuel."
      },
      {
        term: "Gravity and drag tolls",
        kind: "insight",
        statement: "Real ascent subtracts **gravity loss $g\\Delta t$** and drag: $\\Delta v_{\\mathrm{net}} = v_{\\mathrm{ex}}\\ln(m_0/m) - g\\Delta t - \\cdots$.",
        detail: "Fast burns minimize hovering on the exhaust flame."
      },
      {
        term: "Staging",
        kind: "method",
        statement: "**Staging discards dead tanks** to reset $m_0/m$ per stage; $\\Delta v$ adds across stages.",
        detail: "Three stages each ratio $5$ give $3v_{\\mathrm{ex}}\\ln 5$ without hauling empty shells."
      }
    ],
    figures: [
      {
        caption: "Rocket: exhaust momentum $v_{\\mathrm{ex}}\\,dm$ backward pays for $m\\,dv$ forward",
        svg: `<svg viewBox="0 0 720 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rocket thrust"><polygon points="330,30 390,30 390,120 360,140 330,120" fill="none" stroke="currentColor" stroke-width="2"/><line x1="360" y1="140" x2="360" y2="160" stroke="currentColor" stroke-width="2"/><line x1="330" y1="90" x2="230" y2="90" stroke="currentColor" stroke-width="2.5"/><polygon points="230,90 244,84 244,96" fill="currentColor"/><line x1="390" y1="60" x2="490" y2="60" stroke="currentColor" stroke-width="2.5"/><polygon points="490,60 476,54 476,66" fill="currentColor"/><text x="180" y="75" font-size="12" fill="currentColor">exhaust vex</text><text x="440" y="45" font-size="12" fill="currentColor">rocket v</text><text x="360" y="30" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">m shrinking</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Thrust of a burner",
        problem: "A rocket ejects $100\\ \\mathrm{kg/s}$ at $v_{\\mathrm{ex}} = 2500\\ \\mathrm{m/s}$. Find thrust.",
        steps: [
          { label: "Formula", text: "$F = 2500 \\times 100 = 250{,}000\\ \\mathrm{N}$." },
          { label: "Lift check", text: "Lifts $25{,}500\\ \\mathrm{kg}$ against $g$ — a small launcher stage." },
          { label: "Direction", text: "Forward on rocket, opposite exhaust." }
        ],
        result: "$250\\ \\mathrm{kN}$ of thrust."
      },
      {
        title: "Single-stage gain",
        problem: "$v_{\\mathrm{ex}} = 3000\\ \\mathrm{m/s}$, mass ratio $m_0/m = 8$. Find $\\Delta v$ (no gravity).",
        steps: [
          { label: "Log", text: "$\\ln 8 = 2.079$." },
          { label: "Gain", text: "$\\Delta v = 3000 \\times 2.079 = 6237\\ \\mathrm{m/s}$." },
          { label: "Orbit check", text: "Short of $9400\\ \\mathrm{m/s}$ to orbit with losses — staging needed." }
        ],
        result: "$6.24\\ \\mathrm{km/s}$ ideal gain."
      }
    ],
    keyTakeaways: [
      "Thrust is exhaust speed times flow rate.",
      "$\\Delta v$ grows with log mass ratio — steep price for speed.",
      "Drop dead mass (staging) and burn fast to beat gravity."
    ],
    quiz: [
      {
        q: "$100\\ \\mathrm{kg/s}$ at $2500\\ \\mathrm{m/s}$ gives thrust:",
        options: ["$25\\ \\mathrm{N}$", "$250{,}000\\ \\mathrm{N}$", "$2500\\ \\mathrm{N}$", "Zero"],
        answer: 1,
        explanation: "$F = v_{\\mathrm{ex}}|dm/dt| = 250{,}000\\ \\mathrm{N}$."
      },
      {
        q: "Rocket equation $\\Delta v$ scales with mass ratio as:",
        options: ["Linear", "Logarithm $\\ln(m_0/m)$", "Square", "Inverse"],
        answer: 1,
        explanation: "Integrating $dv = -v_{\\mathrm{ex}}\\,dm/m$ accumulates the log."
      },
      {
        q: "Staging helps because it:",
        options: ["Increases exhaust speed magically", "Sheds dead tank mass, resetting the ratio", "Removes gravity", "Burns slower"],
        answer: 1,
        explanation: "Each stage starts fresh without hauling empties."
      }
    ]
  }
];

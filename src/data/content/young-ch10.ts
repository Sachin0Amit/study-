import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 10
// Dynamics of Rotational Motion (Secs 10.1–10.7)
// ============================================================================

export const youngCh10Content: SectionContent[] = [
  {
    sectionId: "young-ch10-s1",
    readingTime: 5,
    intro: "Torque is the twisting power of a force: lever arm times force times sine of the angle. This section defines $\\tau = rF\\sin\\phi$ and fixes its vector direction with $\\vec{\\tau} = \\vec{r}\\times\\vec{F}$.",
    objectives: [
      "Compute $\\tau = rF\\sin\\phi = Fd$ with lever arms",
      "Assign torque signs and vector directions",
      "Explain why $90^{\\circ}$ maximizes torque"
    ],
    concepts: [
      {
        term: "Torque magnitude",
        kind: "definition",
        statement: "**$\\tau = rF\\sin\\phi$** ($\\mathrm{N\\cdot m}$): distance times force times sine of the angle between them.",
        detail: "$0.30\\ \\mathrm{m}$ wrench at $100\\ \\mathrm{N}$, $90^{\\circ}$: $30\\ \\mathrm{N\\cdot m}$."
      },
      {
        term: "Lever arm",
        kind: "definition",
        statement: "**Lever arm** $d = r\\sin\\phi$ is the **perpendicular distance** from the pivot to the force line.",
        detail: "Pushing at the hinge ($d = 0$) turns nothing; pushing at the knob maximizes $d$."
      },
      {
        term: "Torque vector",
        kind: "definition",
        statement: "**$\\vec{\\tau} = \\vec{r}\\times\\vec{F}$** points by the **right-hand rule** — out of the page for counterclockwise.",
        detail: "In-plane $\\vec{r}, \\vec{F}$ give $\\pm\\hat{k}$ torque; $\\tau_z = xF_y - yF_x$ in components."
      },
      {
        term: "Sign convention",
        kind: "notation",
        statement: "**Counterclockwise positive** (out of page) is Young standard for fixed-axis problems.",
        detail: "A clockwise weight torque on a door is negative $\\tau_z$."
      },
      {
        term: "Zero-torque lines",
        kind: "insight",
        statement: "**$\\phi = 0$ or $180^{\\circ}$ gives zero torque** — pulling along the lever neither tightens nor loosens.",
        detail: "Pushing a door straight into its hinges wastes all effort on the pivots."
      }
    ],
    examples: [
      {
        title: "Wrench at an angle",
        problem: "A $0.30\\ \\mathrm{m}$ wrench gets $100\\ \\mathrm{N}$ at $60^{\\circ}$ to the handle. Find $\\tau$.",
        steps: [
          { label: "Sine", text: "$\\tau = 0.30 \\times 100 \\times \\sin 60^{\\circ} = 30 \\times 0.866 = 26.0\\ \\mathrm{N\\cdot m}$." },
          { label: "Lever arm", text: "$d = 0.30 \\times 0.866 = 0.260\\ \\mathrm{m}$; $100 \\times 0.260 = 26.0$ — matches." },
          { label: "Best angle", text: "At $90^{\\circ}$: $30.0\\ \\mathrm{N\\cdot m}$ — $15$% more." }
        ],
        result: "$26.0\\ \\mathrm{N\\cdot m}$ loosening torque."
      },
      {
        title: "Door push",
        problem: "Push a $0.80\\ \\mathrm{m}$ door with $20\\ \\mathrm{N}$ perpendicular at the knob. Torque?",
        steps: [
          { label: "Torque", text: "$\\tau = 0.80 \\times 20 = 16\\ \\mathrm{N\\cdot m}$." },
          { label: "Mid push", text: "At $0.40\\ \\mathrm{m}$: $8.0\\ \\mathrm{N\\cdot m}$ — half." },
          { label: "Hinge push", text: "At $0$: zero — all force loads the hinge." }
        ],
        result: "$16\\ \\mathrm{N\\cdot m}$ at the knob."
      }
    ],
    keyTakeaways: [
      "Torque is $rF\\sin\\phi$ — twist, not push.",
      "Lever arm $d$ is the perpendicular gap to the force line.",
      "Right-hand rule promotes torque to a vector."
    ],
    quiz: [
      {
        q: "$0.30\\ \\mathrm{m}$ at $100\\ \\mathrm{N}$, $60^{\\circ}$, gives torque:",
        options: ["$30\\ \\mathrm{N\\cdot m}$", "$26.0\\ \\mathrm{N\\cdot m}$", "Zero", "$3000\\ \\mathrm{N\\cdot m}$"],
        answer: 1,
        explanation: "$30\\sin 60^{\\circ} = 26.0\\ \\mathrm{N\\cdot m}$."
      },
      {
        q: "Torque is zero when the force points:",
        options: ["Perpendicular to the lever", "Along the lever ($\\phi = 0$)", "Up always", "Down always"],
        answer: 1,
        explanation: "$\\sin 0 = 0$ — no perpendicular part to twist."
      },
      {
        q: "$\\vec{\\tau} = \\vec{r}\\times\\vec{F}$ direction follows:",
        options: ["Left-hand rule", "Right-hand rule", "No rule", "Always $+x$"],
        answer: 1,
        explanation: "Curl $\\vec{r}$ into $\\vec{F}$; thumb gives $\\vec{\\tau}$."
      }
    ]
  },
  {
    sectionId: "young-ch10-s2",
    readingTime: 6,
    intro: "Net torque spins the moment of inertia: $\\sum\\tau_z = I\\alpha_z$. This section applies the rotational second law to pulleys, unwinding cords, and rigid assemblies, mirroring every linear dynamics move.",
    objectives: [
      "State $\\sum\\tau_z = I\\alpha_z$ for fixed-axis rotation",
      "Solve cord-and-pulley systems with massive pulleys",
      "Combine $F = ma$ (translation) with $\\tau = I\\alpha$ (rotation)"
    ],
    concepts: [
      {
        term: "Rotational second law",
        kind: "law",
        statement: "**$\\sum\\tau_z = I\\alpha_z$** — net torque equals inertia times angular acceleration about a fixed axis.",
        detail: "$20\\ \\mathrm{N\\cdot m}$ on $I = 4.0\\ \\mathrm{kg\\cdot m^2}$: $\\alpha_z = 5.0\\ \\mathrm{rad/s^2}$."
      },
      {
        term: "Massive pulley",
        kind: "method",
        statement: "A **massive pulley** splits cord tension ($T_1 \\neq T_2$); the difference torques the disk: **$(T_1-T_2)R = I\\alpha$**.",
        detail: "Massless pulleys keep $T$ uniform; massive ones exact a torque toll."
      },
      {
        term: "Rolling constraint",
        kind: "method",
        statement: "No-slip cords give **$a = R\\alpha$** — translation and spin lock step.",
        detail: "Unwinding $R = 0.10\\ \\mathrm{m}$ with $a = 2.0\\ \\mathrm{m/s^2}$: $\\alpha = 20\\ \\mathrm{rad/s^2}$."
      },
      {
        term: "Sign consistency",
        kind: "method",
        statement: "Take **one rotation sense positive** for $\\tau$, $\\alpha$, and the cord $a$ together.",
        detail: "Clockwise-positive cord fall matches clockwise-positive disk $\\alpha$."
      },
      {
        term: "Linear-rotational pairs",
        kind: "insight",
        statement: "**$F\\leftrightarrow\\tau$, $m\\leftrightarrow I$, $a\\leftrightarrow\\alpha$** — every linear setup has a rotational twin.",
        detail: "Atwood with a massive disk is two $F = ma$ plus one $\\tau = I\\alpha$ with $a = R\\alpha$."
      }
    ],
    figures: [
      {
        caption: "Massive pulley: $(T_1-T_2)R = I\\alpha$ with $a = R\\alpha$ for the hanging mass",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Massive pulley"><circle cx="360" cy="70" r="45" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="360" cy="70" r="6" fill="currentColor"/><line x1="315" y1="70" x2="315" y2="160" stroke="currentColor" stroke-width="2"/><rect x="290" y="160" width="50" height="22" fill="none" stroke="currentColor" stroke-width="2"/><line x1="405" y1="70" x2="405" y2="120" stroke="currentColor" stroke-width="2"/><text x="270" y="120" font-size="12" fill="currentColor">T1</text><text x="415" y="110" font-size="12" fill="currentColor">T2</text><text x="360" y="150" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">I alpha from tension split</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Unwinding cable",
        problem: "A $20\\ \\mathrm{kg}$ mass unwinds a cable from a disk ($I = 2.0\\ \\mathrm{kg\\cdot m^2}$, $R = 0.20\\ \\mathrm{m}$). Find $a$.",
        steps: [
          { label: "Equations", text: "$mg - T = ma$; $TR = I\\alpha = I a/R$." },
          { label: "Eliminate T", text: "$mg = a(m + I/R^2) = a(20 + 50) = 70a$." },
          { label: "Solve", text: "$a = 196/70 = 2.80\\ \\mathrm{m/s^2}$; $T = 196 - 56 = 140\\ \\mathrm{N}$." }
        ],
        result: "$a = 2.80\\ \\mathrm{m/s^2}$ (massive pulley slows the fall)."
      },
      {
        title: "Direct spin-up",
        problem: "$\\sum\\tau_z = 20\\ \\mathrm{N\\cdot m}$ on $I = 4.0\\ \\mathrm{kg\\cdot m^2}$. Find $\\alpha_z$ and $\\omega$ after $3.0\\ \\mathrm{s}$.",
        steps: [
          { label: "Alpha", text: "$\\alpha_z = 20/4.0 = 5.0\\ \\mathrm{rad/s^2}$." },
          { label: "Speed", text: "$\\omega_z = 15\\ \\mathrm{rad/s}$ from rest." },
          { label: "Angle", text: "$\\Delta\\theta = 22.5\\ \\mathrm{rad}$." }
        ],
        result: "$5.0\\ \\mathrm{rad/s^2}$; $15\\ \\mathrm{rad/s}$ after $3.0\\ \\mathrm{s}$."
      }
    ],
    keyTakeaways: [
      "$\\sum\\tau_z = I\\alpha_z$ governs fixed-axis spin.",
      "Massive pulleys split tension to fund $I\\alpha$.",
      "Lock $a = R\\alpha$ wherever cords grip rims."
    ],
    quiz: [
      {
        q: "$20\\ \\mathrm{N\\cdot m}$ on $I = 4.0\\ \\mathrm{kg\\cdot m^2}$ gives:",
        options: ["$80\\ \\mathrm{rad/s^2}$", "$5.0\\ \\mathrm{rad/s^2}$", "$20\\ \\mathrm{rad/s^2}$", "Zero"],
        answer: 1,
        explanation: "$\\alpha = \\tau/I = 5.0\\ \\mathrm{rad/s^2}$."
      },
      {
        q: "A massive pulley differs by:",
        options: ["Keeping tensions equal", "Splitting tensions to supply $I\\alpha$", "Removing gravity", "Zero inertia"],
        answer: 1,
        explanation: "$(T_1-T_2)R = I\\alpha$ — the split pays for spin."
      },
      {
        q: "No-slip cord on radius $R$ obeys:",
        options: ["$a = R\\alpha$", "$a = R/\\alpha$", "$\\alpha = 0$", "$a = 0$"],
        answer: 0,
        explanation: "Arc unwound $R\\Delta\\theta$ equals mass drop."
      }
    ]
  },
  {
    sectionId: "young-ch10-s3",
    readingTime: 7,
    intro: "Rolling is translation plus rotation: the center coasts at $v_{\\mathrm{cm}}$ while the rim spins at $\\omega = v_{\\mathrm{cm}}/R$. This section energizes rolling ($K = \\frac{1}{2}Mv^2+\\frac{1}{2}I\\omega^2$) and races shapes down inclines.",
    objectives: [
      "State the rolling condition $v_{\\mathrm{cm}} = R\\omega$",
      "Compute rolling kinetic energy split",
      "Predict incline race order from $I/MR^2$"
    ],
    concepts: [
      {
        term: "Rolling without slipping",
        kind: "definition",
        statement: "**$v_{\\mathrm{cm}} = R\\omega$** (and $a_{\\mathrm{cm}} = R\\alpha$) — contact instant rest, top at $2v_{\\mathrm{cm}}$.",
        detail: "A $0.30\\ \\mathrm{m}$ wheel at $10\\ \\mathrm{rad/s}$ coasts $3.0\\ \\mathrm{m/s}$."
      },
      {
        term: "Rolling kinetic energy",
        kind: "theorem",
        statement: "**$K = \\frac{1}{2}Mv_{\\mathrm{cm}}^2 + \\frac{1}{2}I_{\\mathrm{cm}}\\omega^2$** — translation plus spin about the CM.",
        detail: "Hoop: $\\frac{1}{2}Mv^2+\\frac{1}{2}Mv^2 = Mv^2$ — half parked in spin."
      },
      {
        term: "Instant-axis view",
        kind: "insight",
        statement: "Rolling is **instant rotation about the contact point** with $I_{\\mathrm{contact}} = I_{\\mathrm{cm}}+MR^2$.",
        detail: "$K = \\frac{1}{2}I_{\\mathrm{contact}}\\omega^2$ reproduces the two-term sum in one shot."
      },
      {
        term: "Race down an incline",
        kind: "theorem",
        statement: "Rolling from height $h$: **$v = \\sqrt{2gh/(1+I/MR^2)}$** — smaller $I$ wins.",
        detail: "Sphere ($0.4$): $v = \\sqrt{10gh/7}$; hoop ($1.0$): $v = \\sqrt{gh}$ — sphere beats hoop."
      },
      {
        term: "Static friction role",
        kind: "insight",
        statement: "**Static friction torques rolling** but does **zero work** (contact at rest) — mechanical $E$ conserves on clean roll.",
        detail: "Slipping adds kinetic-friction loss; clean rolling needs only enough $\\mu_s$ to grip."
      }
    ],
    examples: [
      {
        title: "Hoop versus disk race",
        problem: "Hoop and disk (same $M$, $R$) roll from $h = 2.0\\ \\mathrm{m}$. Find base speeds.",
        steps: [
          { label: "Hoop", text: "$v = \\sqrt{9.80 \\times 2.0} = \\sqrt{19.6} = 4.43\\ \\mathrm{m/s}$." },
          { label: "Disk", text: "$v = \\sqrt{4gh/3} = \\sqrt{26.1} = 5.11\\ \\mathrm{m/s}$." },
          { label: "Slide check", text: "Frictionless slide: $\\sqrt{2gh} = 6.26$ — rolling parks energy in spin." }
        ],
        result: "Disk $5.11$, hoop $4.43\\ \\mathrm{m/s}$ — less inertia wins."
      },
      {
        title: "Rolling energy audit",
        problem: "A $2.0\\ \\mathrm{kg}$ hoop ($R = 0.30\\ \\mathrm{m}$) rolls at $3.0\\ \\mathrm{m/s}$. Find $K$ split.",
        steps: [
          { label: "Translation", text: "$0.5 \\times 2.0 \\times 9.0 = 9.0\\ \\mathrm{J}$." },
          { label: "Rotation", text: "$\\omega = 10\\ \\mathrm{rad/s}$, $I = 0.18$: $0.5 \\times 0.18 \\times 100 = 9.0\\ \\mathrm{J}$." },
          { label: "Total", text: "$18\\ \\mathrm{J}$ — half and half for a hoop." }
        ],
        result: "$9.0+9.0 = 18\\ \\mathrm{J}$ total."
      }
    ],
    keyTakeaways: [
      "Rolling locks $v_{\\mathrm{cm}} = R\\omega$.",
      "Energy splits into coast plus spin.",
      "Small $I/MR^2$ wins incline races."
    ],
    quiz: [
      {
        q: "Rolling without slipping requires:",
        options: ["$v_{\\mathrm{cm}} = R\\omega$", "$v = 0$ always", "$\\omega = 0$ always", "Slipping fast"],
        answer: 0,
        explanation: "Contact rest plus CM march fixes rim spin exactly."
      },
      {
        q: "Same $M$, $R$ from height $h$: fastest roller is:",
        options: ["Hoop", "Disk", "Sphere (smallest $I/MR^2$)", "All tie"],
        answer: 2,
        explanation: "$v = \\sqrt{2gh/(1+c)}$ grows as $c = I/MR^2$ shrinks."
      },
      {
        q: "Static friction in clean rolling does work:",
        options: ["Equal to $K$ loss", "Zero — contact instant rest", "Infinite", "Negative always"],
        answer: 1,
        explanation: "Zero displacement at the contact kills $\\vec{f}\\cdot d\\vec{r}$."
      }
    ]
  },
  {
    sectionId: "young-ch10-s4",
    readingTime: 5,
    intro: "Torques do work through angles: $W = \\tau\\Delta\\theta$, with power $P = \\tau\\omega$. This section ports work-energy to rotation and solves spin-up energy and motor-power problems.",
    objectives: [
      "Compute $W = \\int\\tau_z\\,d\\theta$ for rotation",
      "Use $W_{\\mathrm{net}} = \\Delta(\\frac{1}{2}I\\omega^2)$",
      "Evaluate $P = \\tau_z\\omega_z$ for machinery"
    ],
    concepts: [
      {
        term: "Rotational work",
        kind: "definition",
        statement: "**$W = \\tau_z\\Delta\\theta$** (constant torque) or **$\\int\\tau_z\\,d\\theta$** generally — torque through angle.",
        detail: "$10\\ \\mathrm{N\\cdot m}$ through $6.0\\ \\mathrm{rad}$: $60\\ \\mathrm{J}$."
      },
      {
        term: "Rotational work-energy",
        kind: "theorem",
        statement: "**$W_{\\mathrm{net}} = \\frac{1}{2}I\\omega_2^2 - \\frac{1}{2}I\\omega_1^2$** — net torque work feeds spin energy.",
        detail: "Braking $I = 2.0$, $10 \\to 0\\ \\mathrm{rad/s}$: $W = -100\\ \\mathrm{J}$."
      },
      {
        term: "Rotational power",
        kind: "theorem",
        statement: "**$P = \\tau_z\\omega_z$** — torque times spin rate, in watts.",
        detail: "$50\\ \\mathrm{N\\cdot m}$ at $20\\ \\mathrm{rad/s}$: $1000\\ \\mathrm{W}$."
      },
      {
        term: "Work by gravity on rolling",
        kind: "method",
        statement: "Rolling downhill converts **$Mgh$ into $\\frac{1}{2}Mv^2+\\frac{1}{2}I\\omega^2$** with static friction work-free.",
        detail: "Energy alone gives race speeds without dynamics."
      },
      {
        term: "Motor ratings",
        kind: "insight",
        statement: "Motors trade **torque for speed** at fixed power: high-$\\tau$ low-$\\omega$ (hoist) versus low-$\\tau$ high-$\\omega$ (fan).",
        detail: "$1000\\ \\mathrm{W}$ gives $100\\ \\mathrm{N\\cdot m}$ at $10\\ \\mathrm{rad/s}$ but $10$ at $100$."
      }
    ],
    examples: [
      {
        title: "Spin-up work",
        problem: "How much work to spin $I = 2.0\\ \\mathrm{kg\\cdot m^2}$ from rest to $10\\ \\mathrm{rad/s}$?",
        steps: [
          { label: "Energy", text: "$W = 0.5 \\times 2.0 \\times 100 = 100\\ \\mathrm{J}$." },
          { label: "Torque check", text: "$\\tau = 10\\ \\mathrm{N\\cdot m}$ needs $\\Delta\\theta = 10\\ \\mathrm{rad}$: $100\\ \\mathrm{J}$ — consistent." },
          { label: "Power", text: "Done in $5.0\\ \\mathrm{s}$: $20\\ \\mathrm{W}$ average." }
        ],
        result: "$100\\ \\mathrm{J}$ of spin energy."
      },
      {
        title: "Motor torque",
        problem: "A $1000\\ \\mathrm{W}$ motor holds $20\\ \\mathrm{rad/s}$. What torque?",
        steps: [
          { label: "Power", text: "$\\tau = P/\\omega = 1000/20 = 50\\ \\mathrm{N\\cdot m}$." },
          { label: "Gear down", text: "Halving speed to $10$ doubles torque to $100\\ \\mathrm{N\\cdot m}$." },
          { label: "Units", text: "$\\mathrm{N\\cdot m} \\times \\mathrm{rad/s} = \\mathrm{J/s} = \\mathrm{W}$." }
        ],
        result: "$50\\ \\mathrm{N\\cdot m}$ at $20\\ \\mathrm{rad/s}$."
      }
    ],
    keyTakeaways: [
      "Torque through angle is work; $\\tau\\omega$ is power.",
      "Net rotational work feeds $\\frac{1}{2}I\\omega^2$.",
      "Energy shortcuts bypass $\\alpha(t)$ integration."
    ],
    quiz: [
      {
        q: "$10\\ \\mathrm{N\\cdot m}$ through $6.0\\ \\mathrm{rad}$ does work:",
        options: ["$1.67\\ \\mathrm{J}$", "$60\\ \\mathrm{J}$", "$16\\ \\mathrm{J}$", "Zero"],
        answer: 1,
        explanation: "$W = \\tau\\Delta\\theta = 60\\ \\mathrm{J}$."
      },
      {
        q: "Rotational power is:",
        options: ["$\\tau/\\omega$", "$\\tau\\omega$", "$I\\omega$ always", "Zero"],
        answer: 1,
        explanation: "Rate of $\\tau\\,d\\theta$ is $\\tau\\omega$."
      },
      {
        q: "Spinning $I = 2.0$ to $10\\ \\mathrm{rad/s}$ stores:",
        options: ["$20\\ \\mathrm{J}$", "$100\\ \\mathrm{J}$", "$200\\ \\mathrm{J}$", "$10\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$\\frac{1}{2}I\\omega^2 = 100\\ \\mathrm{J}$."
      }
    ]
  },
  {
    sectionId: "young-ch10-s5",
    readingTime: 6,
    intro: "Angular momentum $\\vec{L} = \\vec{r}\\times\\vec{p}$ packages rotation the way $\\vec{p}$ packages translation. This section defines it for particles and rigid bodies ($L_z = I\\omega_z$) and proves $\\sum\\vec{\\tau} = d\\vec{L}/dt$.",
    objectives: [
      "Define $\\vec{L} = \\vec{r}\\times\\vec{p}$ with magnitude $rmv\\sin\\phi$",
      "State $L_z = I\\omega_z$ for fixed-axis bodies",
      "Use $\\sum\\vec{\\tau} = d\\vec{L}/dt$"
    ],
    concepts: [
      {
        term: "Particle angular momentum",
        kind: "definition",
        statement: "**$\\vec{L} = \\vec{r}\\times\\vec{p}$**, magnitude **$L = rmv\\sin\\phi$**, direction by the right-hand rule.",
        detail: "Circular orbit: $\\phi = 90^{\\circ}$, $L = rmv$ along $+\\hat{k}$."
      },
      {
        term: "Rigid-body angular momentum",
        kind: "theorem",
        statement: "Fixed-axis: **$L_z = I\\omega_z$** — inertia times spin, signed by sense.",
        detail: "Disk $I = 0.50$, $\\omega = 12$: $L_z = 6.0\\ \\mathrm{kg\\cdot m^2/s}$."
      },
      {
        term: "Torque as L-rate",
        kind: "theorem",
        statement: "**$\\sum\\vec{\\tau} = d\\vec{L}/dt$** — net torque is the rate of angular-momentum change.",
        detail: "The rotational twin of $\\sum\\vec{F} = d\\vec{p}/dt$."
      },
      {
        term: "Units and signs",
        kind: "notation",
        statement: "**$\\mathrm{kg\\cdot m^2/s} = \\mathrm{J\\cdot s}$**; counterclockwise viewed from $+z$ is $L_z > 0$.",
        detail: "Braking torque opposes $\\vec{L}$ and shrinks it."
      },
      {
        term: "When $L$ outlives $\\omega$ intuition",
        kind: "insight",
        statement: "Mass far out carries **outsized $L$** ($\\propto r^2\\omega$ at fixed $\\omega$) — the skater secret.",
        detail: "Tucking arms cuts $I$ but $L$ persists, so $\\omega$ must soar."
      }
    ],
    figures: [
      {
        caption: "$\\vec{L} = \\vec{r}\\times\\vec{p}$: magnitude $rmv\\sin\\phi$, direction by the right-hand rule",
        svg: `<svg viewBox="0 0 720 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Angular momentum vector"><circle cx="200" cy="90" r="6" fill="currentColor"/><text x="200" y="115" font-size="11" text-anchor="middle" fill="currentColor">origin</text><line x1="200" y1="90" x2="420" y2="90" stroke="currentColor" stroke-width="2"/><text x="310" y="80" font-size="12" fill="currentColor">r</text><circle cx="420" cy="90" r="14" fill="none" stroke="currentColor" stroke-width="2"/><line x1="420" y1="90" x2="420" y2="30" stroke="currentColor" stroke-width="2.5"/><polygon points="420,30 414,42 426,42" fill="currentColor"/><text x="435" y="60" font-size="12" fill="currentColor">p (tangent)</text><circle cx="560" cy="90" r="14" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="560" cy="90" r="3" fill="currentColor"/><text x="560" y="130" font-size="12" text-anchor="middle" fill="currentColor">L out of page</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Orbiting particle",
        problem: "A $2.0\\ \\mathrm{kg}$ mass circles $R = 1.5\\ \\mathrm{m}$ at $4.0\\ \\mathrm{m/s}$. Find $L$.",
        steps: [
          { label: "Magnitude", text: "$L = 1.5 \\times 2.0 \\times 4.0 = 12\\ \\mathrm{kg\\cdot m^2/s}$." },
          { label: "Direction", text: "Along $+\\hat{k}$ for counterclockwise." },
          { label: "Rigid check", text: "$I = 4.50$, $\\omega = 2.667$: $I\\omega = 12$ — matches." }
        ],
        result: "$12\\ \\mathrm{kg\\cdot m^2/s}$ about the center."
      },
      {
        title: "Spinning disk",
        problem: "A disk with $I = 0.50\\ \\mathrm{kg\\cdot m^2}$ spins at $12\\ \\mathrm{rad/s}$. Find $L_z$ and stopping torque for $4.0\\ \\mathrm{s}$ halt.",
        steps: [
          { label: "Momentum", text: "$L_z = 6.0\\ \\mathrm{kg\\cdot m^2/s}$." },
          { label: "Torque", text: "$\\tau_z = \\Delta L/\\Delta t = -6.0/4.0 = -1.50\\ \\mathrm{N\\cdot m}$." },
          { label: "Sense", text: "Negative (clockwise) torque kills positive spin." }
        ],
        result: "$L_z = 6.0$; $1.50\\ \\mathrm{N\\cdot m}$ braking torque."
      }
    ],
    keyTakeaways: [
      "$\\vec{L} = \\vec{r}\\times\\vec{p}$ generalizes $\\vec{p}$ to rotation.",
      "Fixed-axis bodies carry $L_z = I\\omega_z$.",
      "Torques rate-change $\\vec{L}$, exactly like forces and $\\vec{p}$."
    ],
    quiz: [
      {
        q: "$2.0\\ \\mathrm{kg}$ circling $1.5\\ \\mathrm{m}$ at $4.0\\ \\mathrm{m/s}$ has $L$:",
        options: ["$3.0$", "$12\\ \\mathrm{kg\\cdot m^2/s}$", "$48$", "Zero"],
        answer: 1,
        explanation: "$rmv = 12$ with $\\sin 90^{\\circ} = 1$."
      },
      {
        q: "Fixed-axis angular momentum is:",
        options: ["$L_z = I/\\omega_z$", "$L_z = I\\omega_z$", "$L_z = mv$ always", "Zero always"],
        answer: 1,
        explanation: "Summing $r_i m_i v_i = m_i r_i^2\\omega$ gives $I\\omega$."
      },
      {
        q: "$\\sum\\vec{\\tau} = d\\vec{L}/dt$ parallels:",
        options: ["$\\sum\\vec{F} = d\\vec{p}/dt$", "$F = mv$", "$E = mc^2$", "$p = 0$"],
        answer: 0,
        explanation: "Torque is to $\\vec{L}$ what force is to $\\vec{p}$."
      }
    ]
  },
  {
    sectionId: "young-ch10-s6",
    readingTime: 6,
    intro: "Without net external torque, angular momentum cannot change — so skaters spin faster tucked and divers twist mid-air. This section applies $L$-conservation to spin-ups, collisions, and Kepler second law.",
    objectives: [
      "State $L$-conservation for $\\sum\\tau_{\\mathrm{ext}} = 0$",
      "Solve skater tuck and turntable-catch problems",
      "Link $L$-conservation to Kepler equal areas"
    ],
    concepts: [
      {
        term: "Conservation of angular momentum",
        kind: "law",
        statement: "If **$\\sum\\vec{\\tau}_{\\mathrm{ext}} = 0$**, then **$\\vec{L}_{\\mathrm{tot}}$ is fixed** — direction and magnitude.",
        detail: "Internal twists (arms, springs) redistribute $\\omega$ but never $\\vec{L}$."
      },
      {
        term: "Skater tuck",
        kind: "method",
        statement: "**$I_1\\omega_1 = I_2\\omega_2$**: halving $I$ doubles $\\omega$ with no torque.",
        detail: "$I$: $4.0 \\to 1.5\\ \\mathrm{kg\\cdot m^2}$ spins $2.0 \\to 5.33\\ \\mathrm{rad/s}$; $K$ rises from muscle work."
      },
      {
        term: "Turntable catch",
        kind: "method",
        statement: "Catching a mass adds its **$mvr$** to system $L$; dropping it onto the rim slows the spin: **$\\omega_2 = I_1\\omega_1/(I_1+mR^2)$**.",
        detail: "$I = 50$, $m = 20\\ \\mathrm{kg}$, $R = 2.0\\ \\mathrm{m}$: $\\omega$ drops to $50/130 = 38$%."
      },
      {
        term: "Kepler second law",
        kind: "theorem",
        statement: "Central gravity exerts **zero torque** about the Sun, so planetary **$L$ fixes areal velocity**: equal areas in equal times.",
        detail: "Planets sweep fast near perihelion, slow at aphelion — $L = mr^2\\dot\\theta$ constant."
      },
      {
        term: "Energy can still change",
        kind: "insight",
        statement: "**$L$-conservation does not conserve $K$**: tucking speeds up and raises $\\frac{1}{2}I\\omega^2$ via internal work.",
        detail: "Skater $K$: $8.0 \\to 21.3\\ \\mathrm{J}$ — extra from pulling arms in."
      }
    ],
    examples: [
      {
        title: "Skater spin-up",
        problem: "A skater at $2.0\\ \\mathrm{rad/s}$ tucks from $I = 4.0$ to $1.5\\ \\mathrm{kg\\cdot m^2}$. Find new $\\omega$ and $K$ change.",
        steps: [
          { label: "Conserve", text: "$\\omega_2 = 4.0 \\times 2.0/1.5 = 5.33\\ \\mathrm{rad/s}$." },
          { label: "Energies", text: "$K_1 = 0.5 \\times 4.0 \\times 4.0 = 8.0\\ \\mathrm{J}$; $K_2 = 0.5 \\times 1.5 \\times 28.4 = 21.3\\ \\mathrm{J}$." },
          { label: "Source", text: "Arm muscles supply $13.3\\ \\mathrm{J}$ — $L$ fixed, $K$ not." }
        ],
        result: "$5.33\\ \\mathrm{rad/s}$; $K$ rises $8.0 \\to 21.3\\ \\mathrm{J}$."
      },
      {
        title: "Merry-go-round catch",
        problem: "A $50\\ \\mathrm{kg\\cdot m^2}$ platform at $3.0\\ \\mathrm{rad/s}$ catches $20\\ \\mathrm{kg}$ at $R = 2.0\\ \\mathrm{m}$ (dropped, no tangential speed). Find $\\omega_2$.",
        steps: [
          { label: "Inertia", text: "$I_2 = 50 + 20 \\times 4.0 = 130\\ \\mathrm{kg\\cdot m^2}$." },
          { label: "Conserve", text: "$\\omega_2 = 50 \\times 3.0/130 = 1.15\\ \\mathrm{rad/s}$." },
          { label: "Energy", text: "$K$ drops $225 \\to 86.5\\ \\mathrm{J}$ — thud dissipates." }
        ],
        result: "$1.15\\ \\mathrm{rad/s}$ after the catch."
      }
    ],
    keyTakeaways: [
      "Zero external torque freezes total $\\vec{L}$.",
      "$I\\omega$ trades internally: tuck spins up, spread slows.",
      "Central forces conserve $L$ — Kepler areas follow."
    ],
    quiz: [
      {
        q: "Skater tucking $4.0 \\to 1.5\\ \\mathrm{kg\\cdot m^2}$ from $2.0\\ \\mathrm{rad/s}$ reaches:",
        options: ["$0.75\\ \\mathrm{rad/s}$", "$5.33\\ \\mathrm{rad/s}$", "$2.0\\ \\mathrm{rad/s}$", "Zero"],
        answer: 1,
        explanation: "$\\omega_2 = (4.0/1.5) \\times 2.0 = 5.33\\ \\mathrm{rad/s}$."
      },
      {
        q: "Kepler equal areas follow from:",
        options: ["Energy conservation", "Zero central torque, so $L$ conserved", "Circular orbits only", "Friction"],
        answer: 1,
        explanation: "$\\vec{r}\\times\\vec{F} = 0$ for central pull keeps $d\\vec{L}/dt = 0$."
      },
      {
        q: "Tucking while spinning changes $K$ because:",
        options: ["$L$ is violated", "Internal muscles do work while $L$ stays fixed", "Mass changes", "Gravity vanishes"],
        answer: 1,
        explanation: "Conservation fixes $I\\omega$, not $\\frac{1}{2}I\\omega^2$."
      }
    ]
  },
  {
    sectionId: "young-ch10-s7",
    readingTime: 6,
    intro: "A spinning gyroscope defies gravity by precessing instead of falling: torque at right angles to $\\vec{L}$ steers it sideways. This section derives precession rate $\\Omega = Mgr/Is$ and surveys gyro applications.",
    objectives: [
      "Explain precession as $d\\vec{L} = \\vec{\\tau}\\,dt$ perpendicular to $\\vec{L}$",
      "Compute $\\Omega = \\tau/L = Mgr/I\\omega$",
      "Describe gyro stabilizers, compasses, and tops"
    ],
    concepts: [
      {
        term: "Precession mechanism",
        kind: "insight",
        statement: "**Torque perpendicular to spin-$\\vec{L}$ rotates $\\vec{L}$ sideways** ($d\\vec{L} = \\vec{\\tau}\\,dt$) instead of toppling it.",
        detail: "Weight torques a tilted top horizontally; the spin axis circles vertically — precession, not fall."
      },
      {
        term: "Precession rate",
        kind: "theorem",
        statement: "**$\\Omega = \\tau/L = Mgr/I\\omega$** for a top of mass $M$, CM distance $r$, spin $\\omega$.",
        detail: "Fast spin (large $L$) precesses slowly; $I = 0.010$, $\\omega = 100$: $\\Omega \\approx Mgr$ — stately circling."
      },
      {
        term: "Nutation",
        kind: "definition",
        statement: "**Nutation** is small **nodding superposed** on precession when the top is released off-steady.",
        detail: "Friction damps nodding, leaving pure precession — the sleeping top."
      },
      {
        term: "Gyroscope stability",
        kind: "insight",
        statement: "Large $L$ **resists reorientation**: torques precess rather than tilt — ships, bikes, and satellites exploit it.",
        detail: "Control-moment gyros steer spacecraft by trading $L$ with the bus."
      },
      {
        term: "Earth as gyroscope",
        kind: "insight",
        statement: "Sun and Moon torque Earth equatorial bulge, **precessing the axis in $26{,}000$ years** — the precession of the equinoxes.",
        detail: "Pole star changes on millennial scales from the same $d\\vec{L} = \\vec{\\tau}\\,dt$."
      }
    ],
    figures: [
      {
        caption: "Top precession: weight torque $\\vec{\\tau}$ perpendicular to $\\vec{L}$ steers the axis in a cone",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gyroscope precession"><line x1="360" y1="160" x2="360" y2="60" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="360" y1="120" x2="470" y2="70" stroke="currentColor" stroke-width="2.5"/><polygon points="470,70 455,72 458,84" fill="currentColor"/><ellipse cx="360" cy="60" rx="110" ry="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><circle cx="360" cy="120" r="5" fill="currentColor"/><text x="480" y="65" font-size="12" fill="currentColor">L along axle</text><text x="360" y="180" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">precession cone, rate Omega</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Top precession rate",
        problem: "A $0.50\\ \\mathrm{kg}$ top with $r = 0.040\\ \\mathrm{m}$, $I = 2.0 \\times 10^{-4}\\ \\mathrm{kg\\cdot m^2}$, spins at $80\\ \\mathrm{rad/s}$. Find $\\Omega$.",
        steps: [
          { label: "Torque", text: "$\\tau = 0.50 \\times 9.80 \\times 0.040 = 0.196\\ \\mathrm{N\\cdot m}$." },
          { label: "Spin L", text: "$L = 2.0 \\times 10^{-4} \\times 80 = 0.0160\\ \\mathrm{kg\\cdot m^2/s}$." },
          { label: "Rate", text: "$\\Omega = 0.196/0.0160 = 12.3\\ \\mathrm{rad/s}$ — fast top wobble; real tops spin faster and precess slower." }
        ],
        result: "$\\Omega = 12.3\\ \\mathrm{rad/s}$ for these demo numbers."
      },
      {
        title: "Bike-wheel demo",
        problem: "Holding a spinning wheel ($L$ along axle) by one handle, why does it not flop?",
        steps: [
          { label: "Torque", text: "Weight acts at CM offset — horizontal $\\vec{\\tau}$ perpendicular to $\\vec{L}$." },
          { label: "Response", text: "$d\\vec{L}$ sideways: axle precesses around vertical instead of dropping." },
          { label: "Stop spin", text: "$L \\to 0$: $\\vec{\\tau}$ now tilts $\\vec{L} = 0$ into falling — flop." }
        ],
        result: "Spin converts fall-torque into precession."
      }
    ],
    keyTakeaways: [
      "Perpendicular torque precesses $\\vec{L}$, never shrinks it directly.",
      "$\\Omega = \\tau/L$: fast spin means slow stately circling.",
      "Gyros stabilize by parking momentum in fast wheels."
    ],
    quiz: [
      {
        q: "Precession happens because:",
        options: ["Torque aligns with $\\vec{L}$", "Torque perpendicular to $\\vec{L}$ rotates it sideways", "Gravity vanishes", "Friction stops spin"],
        answer: 1,
        explanation: "$d\\vec{L} = \\vec{\\tau}\\,dt$ adds at right angles — steering, not toppling."
      },
      {
        q: "Precession rate $\\Omega$ equals:",
        options: ["$L/\\tau$", "$\\tau/L = Mgr/I\\omega$", "$I\\omega$ always", "Zero"],
        answer: 1,
        explanation: "Faster spin (bigger $L$) or smaller weight-torque slows the cone."
      },
      {
        q: "Earth axis precesses ($26{,}000$ yr) because:",
        options: ["Air drag", "Sun–Moon torque on the equatorial bulge steering $\\vec{L}$", "No torque at all", "Tides stopping rotation"],
        answer: 1,
        explanation: "Same gyroscope physics on planetary scale."
      }
    ]
  }
];

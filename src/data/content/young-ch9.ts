import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 9
// Rotation of Rigid Bodies (Secs 9.1–9.6)
// ============================================================================

export const youngCh9Content: SectionContent[] = [
  {
    sectionId: "young-ch9-s1",
    readingTime: 5,
    intro: "Rotation replaces meters with radians and velocity with spin rate. This section defines angular position, velocity, and acceleration, with the right-hand rule fixing their vector directions.",
    objectives: [
      "Measure angles in radians and convert from revolutions",
      "Define $\\omega_z = d\\theta/dt$ and $\\alpha_z = d\\omega_z/dt$",
      "Assign vector directions by the right-hand rule"
    ],
    concepts: [
      {
        term: "Radian measure",
        kind: "definition",
        statement: "**Radian**: $\\theta = s/r$ (arc over radius); **$2\\pi\\ \\mathrm{rad} = 360^{\\circ}$**, $1\\ \\mathrm{rev} = 2\\pi\\ \\mathrm{rad}$.",
        detail: "$90^{\\circ} = \\pi/2 = 1.571\\ \\mathrm{rad}$; arc $s = r\\theta$ only with $\\theta$ in radians."
      },
      {
        term: "Angular velocity",
        kind: "definition",
        statement: "**$\\omega_z = \\lim_{\\Delta t\\to 0}\\Delta\\theta/\\Delta t = d\\theta/dt$** ($\\mathrm{rad/s}$); sign follows the $z$-axis choice.",
        detail: "Counterclockwise viewed from $+z$ is $\\omega_z > 0$; $33\\frac{1}{3}$ rpm $= 3.49\\ \\mathrm{rad/s}$."
      },
      {
        term: "Angular acceleration",
        kind: "definition",
        statement: "**$\\alpha_z = d\\omega_z/dt = d^2\\theta/dt^2$** ($\\mathrm{rad/s^2}$) — spin-up rate.",
        detail: "Same-sign $\\omega_z\\alpha_z$ spins faster; opposite signs brake the spin."
      },
      {
        term: "Right-hand rule",
        kind: "method",
        statement: "**Curl fingers with rotation; thumb gives $+\\vec{\\omega}$** (and $+\\vec{\\alpha}$ when spinning up).",
        detail: "Counterclockwise in the $xy$-plane points $+\\hat{k}$; clockwise points $-\\hat{k}$."
      },
      {
        term: "Rigid-body sharing",
        kind: "insight",
        statement: "Every point of a **rigid body shares the same $\\vec{\\omega}$ and $\\vec{\\alpha}$** at each instant — rotation is collective.",
        detail: "Rim and hub differ in $v$ and $a$ but never in $\\omega$ or $\\alpha$."
      }
    ],
    examples: [
      {
        title: "Record spin",
        problem: "A record turns $33\\frac{1}{3}$ rpm. Find $\\omega$ in $\\mathrm{rad/s}$.",
        steps: [
          { label: "Revolutions", text: "$33.33/60 = 0.5556\\ \\mathrm{rev/s}$." },
          { label: "Radians", text: "$\\omega = 0.5556 \\times 2\\pi = 3.49\\ \\mathrm{rad/s}$." },
          { label: "Direction", text: "Clockwise viewed from above: $\\vec{\\omega} = -3.49\\hat{k}\\ \\mathrm{rad/s}$." }
        ],
        result: "$3.49\\ \\mathrm{rad/s}$ about $-z$."
      },
      {
        title: "Spin-up rate",
        problem: "A wheel goes $10$ to $30\\ \\mathrm{rad/s}$ in $4.0\\ \\mathrm{s}$ uniformly. Find $\\alpha_z$ and turns.",
        steps: [
          { label: "Alpha", text: "$\\alpha_z = 20/4.0 = 5.0\\ \\mathrm{rad/s^2}$." },
          { label: "Angle", text: "$\\Delta\\theta = 10 \\times 4.0 + 0.5 \\times 5.0 \\times 16 = 80\\ \\mathrm{rad}$." },
          { label: "Turns", text: "$80/2\\pi = 12.7\\ \\mathrm{rev}$." }
        ],
        result: "$5.0\\ \\mathrm{rad/s^2}$; $12.7$ revolutions."
      }
    ],
    keyTakeaways: [
      "Radians make $s = r\\theta$ exact — always convert first.",
      "$\\omega_z$ and $\\alpha_z$ differentiate like $v_x$ and $a_x$.",
      "Right-hand rule promotes spin signs to vectors."
    ],
    quiz: [
      {
        q: "$33\\frac{1}{3}$ rpm equals:",
        options: ["$33\\ \\mathrm{rad/s}$", "$3.49\\ \\mathrm{rad/s}$", "$209\\ \\mathrm{rad/s}$", "$0.55\\ \\mathrm{rad/s}$"],
        answer: 1,
        explanation: "$(33.33/60) \\times 2\\pi = 3.49\\ \\mathrm{rad/s}$."
      },
      {
        q: "All points of a rigid spinning body share:",
        options: ["Linear velocity", "Angular velocity $\\vec{\\omega}$", "Centripetal acceleration", "Radius"],
        answer: 1,
        explanation: "Rotation is collective; $v = r\\omega$ still varies with radius."
      },
      {
        q: "Counterclockwise in the $xy$-plane points $\\vec{\\omega}$ along:",
        options: ["$-\\hat{k}$", "$+\\hat{k}$", "$+\\hat{\\imath}$", "Zero"],
        answer: 1,
        explanation: "Right-hand curl: fingers CCW, thumb $+z$."
      }
    ]
  },
  {
    sectionId: "young-ch9-s2",
    readingTime: 5,
    intro: "Constant angular acceleration mirrors constant linear acceleration exactly: swap $x$ for $\\theta$, $v_x$ for $\\omega_z$, $a_x$ for $\\alpha_z$. This section ports all four kinematic equations to the spinning world.",
    objectives: [
      "State the four constant-$\\alpha_z$ rotation equations",
      "Solve spin-up and braking problems",
      "Map every linear quantity to its angular twin"
    ],
    concepts: [
      {
        term: "Rotation kinematics",
        kind: "theorem",
        statement: "For constant $\\alpha_z$: **$\\omega_z = \\omega_{0z}+\\alpha_z t$**, **$\\theta = \\theta_0+\\omega_{0z}t+\\frac{1}{2}\\alpha_z t^2$**, **$\\omega_z^2 = \\omega_{0z}^2+2\\alpha_z\\Delta\\theta$**.",
        detail: "Identical to Chapter 2 with rotated symbols — same derivations, same strategy."
      },
      {
        term: "Average-spin form",
        kind: "theorem",
        statement: "**$\\Delta\\theta = \\frac{1}{2}(\\omega_{0z}+\\omega_z)t$** — mean spin rate times time.",
        detail: "Braking $30 \\to 0\\ \\mathrm{rad/s}$ in $6.0\\ \\mathrm{s}$: $\\Delta\\theta = 15 \\times 6.0 = 90\\ \\mathrm{rad}$."
      },
      {
        term: "Sign discipline",
        kind: "method",
        statement: "Fix **$+\\theta$ sense once**; braking means $\\alpha_z$ opposes $\\omega_z$.",
        detail: "Spinning $+\\omega$ to rest needs $-\\alpha$; the quadratic then gives positive $\\Delta\\theta$."
      },
      {
        term: "Revolutions at the end",
        kind: "method",
        statement: "Solve in **radians**, convert to **revolutions** ($/2\\pi$) only for the final statement.",
        detail: "$90\\ \\mathrm{rad} = 14.3\\ \\mathrm{rev}$ — converting early invites $2\\pi$ slips."
      },
      {
        term: "Linear-angular dictionary",
        kind: "insight",
        statement: "**$x\\leftrightarrow\\theta$, $v_x\\leftrightarrow\\omega_z$, $a_x\\leftrightarrow\\alpha_z$** — every linear intuition ports over.",
        detail: "Free-fall $g$ analog: a flywheel with constant $\\alpha_z$ is the spinning dropped ball."
      }
    ],
    figures: [
      {
        caption: "Constant $\\alpha_z$: linear $\\omega_z$-$t$ graph with area $\\Delta\\theta$ beneath",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Angular velocity time graph"><line x1="60" y1="160" x2="680" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="170" x2="90" y2="20" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="130" x2="600" y2="50" stroke="currentColor" stroke-width="2.5"/><line x1="90" y1="130" x2="600" y2="130" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="330" y="150" font-size="12" fill="currentColor" opacity="0.7">mean spin times t</text><text x="620" y="178" font-size="12" fill="currentColor">t</text><text x="65" y="40" font-size="12" fill="currentColor">omega</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Flywheel braking",
        problem: "A wheel at $30\\ \\mathrm{rad/s}$ brakes uniformly to rest in $6.0\\ \\mathrm{s}$. Find $\\alpha_z$ and $\\Delta\\theta$.",
        steps: [
          { label: "Alpha", text: "$\\alpha_z = (0-30)/6.0 = -5.0\\ \\mathrm{rad/s^2}$." },
          { label: "Angle", text: "$\\Delta\\theta = 15 \\times 6.0 = 90\\ \\mathrm{rad} = 14.3\\ \\mathrm{rev}$." },
          { label: "Timeless check", text: "$0 = 900 + 2(-5.0)\\Delta\\theta$: $\\Delta\\theta = 90$ — matches." }
        ],
        result: "$-5.0\\ \\mathrm{rad/s^2}$; $90\\ \\mathrm{rad}$ ($14.3$ rev)."
      },
      {
        title: "Drill spin-up",
        problem: "A drill starts rest with $\\alpha_z = 40\\ \\mathrm{rad/s^2}$ for $3.0\\ \\mathrm{s}$. Find $\\omega_z$ and turns.",
        steps: [
          { label: "Speed", text: "$\\omega_z = 120\\ \\mathrm{rad/s}$." },
          { label: "Angle", text: "$\\Delta\\theta = 0.5 \\times 40 \\times 9.0 = 180\\ \\mathrm{rad}$." },
          { label: "Turns", text: "$180/2\\pi = 28.6\\ \\mathrm{rev}$." }
        ],
        result: "$120\\ \\mathrm{rad/s}$ after $28.6$ turns."
      }
    ],
    keyTakeaways: [
      "Constant-$\\alpha_z$ uses the four linear equations with rotated symbols.",
      "Braking opposes signs; spin-up aligns them.",
      "Work in radians; report revolutions last."
    ],
    quiz: [
      {
        q: "Braking $30\\ \\mathrm{rad/s}$ to rest in $6.0\\ \\mathrm{s}$ turns:",
        options: ["$90\\ \\mathrm{rad}$ ($14.3$ rev)", "$180\\ \\mathrm{rad}$", "$30\\ \\mathrm{rad}$", "Zero"],
        answer: 0,
        explanation: "Mean $15\\ \\mathrm{rad/s}$ over $6.0\\ \\mathrm{s}$ is $90\\ \\mathrm{rad}$."
      },
      {
        q: "The angular analog of $v_x^2 = v_{0x}^2+2a_x\\Delta x$ is:",
        options: ["$\\omega_z = \\omega_{0z}+\\alpha_z t$", "$\\omega_z^2 = \\omega_{0z}^2+2\\alpha_z\\Delta\\theta$", "$\\theta = \\omega t$", "$\\alpha = \\omega^2$"],
        answer: 1,
        explanation: "Direct symbol swap: $x \\to \\theta$, $v \\to \\omega$, $a \\to \\alpha$."
      },
      {
        q: "Why solve in radians?",
        options: ["Revolutions are forbidden", "Formulas $s = r\\theta$, $v = r\\omega$ need radians", "Radians are larger", "Degrees break clocks"],
        answer: 1,
        explanation: "Arc-length relations assume $\\theta = s/r$ — radian definition."
      }
    ]
  },
  {
    sectionId: "young-ch9-s3",
    readingTime: 6,
    intro: "Rim speed and acceleration follow from spin rate and radius: $v = r\\omega$, $a_{\\mathrm{tan}} = r\\alpha$, $a_{\\mathrm{rad}} = \\omega^2 r$. This section links the angular and linear worlds point by point.",
    objectives: [
      "Compute $v = r\\omega$ for points on a rigid body",
      "Split acceleration into $a_{\\tan} = r\\alpha$ and $a_{\\mathrm{rad}} = \\omega^2 r$",
      "Solve belt, gear, and rolling problems by shared rim speeds"
    ],
    concepts: [
      {
        term: "Tangential speed",
        kind: "theorem",
        statement: "**$v = r\\omega$**: rim speed is radius times spin rate ($\\omega$ in $\\mathrm{rad/s}$).",
        detail: "$R = 0.30\\ \\mathrm{m}$ at $10\\ \\mathrm{rad/s}$: $v = 3.0\\ \\mathrm{m/s}$."
      },
      {
        term: "Tangential acceleration",
        kind: "theorem",
        statement: "**$a_{\\tan} = r\\alpha_z$** changes speed along the tangent.",
        detail: "Spin-up $\\alpha = 5.0\\ \\mathrm{rad/s^2}$ at $0.30\\ \\mathrm{m}$: $a_{\\tan} = 1.5\\ \\mathrm{m/s^2}$."
      },
      {
        term: "Radial acceleration",
        kind: "theorem",
        statement: "**$a_{\\mathrm{rad}} = v^2/r = \\omega^2 r$** points centerward — the Ch 3 result per point.",
        detail: "Above: $a_{\\mathrm{rad}} = 100 \\times 0.30 = 30\\ \\mathrm{m/s^2}$ — twenty times $a_{\\tan}$."
      },
      {
        term: "Total linear acceleration",
        kind: "method",
        statement: "**$a = \\sqrt{a_{\\tan}^2+a_{\\mathrm{rad}}^2}$** with perpendicular components.",
        detail: "Steady spin zeroes $a_{\\tan}}$; only the center-seeking part remains."
      },
      {
        term: "Shared-rim constraint",
        kind: "method",
        statement: "Belts and gears **share rim speed**: **$r_1\\omega_1 = r_2\\omega_2$** (no slip).",
        detail: "A $5.0\\ \\mathrm{cm}$ driver at $20\\ \\mathrm{rad/s}$ spins a $15\\ \\mathrm{cm}$ wheel at $6.67\\ \\mathrm{rad/s}$."
      }
    ],
    examples: [
      {
        title: "CD rim acceleration",
        problem: "A CD ($R = 0.060\\ \\mathrm{m}$) spins at $50\\ \\mathrm{rad/s}$ steadily. Find rim $v$ and $a$.",
        steps: [
          { label: "Speed", text: "$v = 0.060 \\times 50 = 3.0\\ \\mathrm{m/s}$." },
          { label: "Radial", text: "$a_{\\mathrm{rad}} = 2500 \\times 0.060 = 150\\ \\mathrm{m/s^2}$ ($15g$)." },
          { label: "Tangential", text: "Steady: $a_{\\tan} = 0$; total $150\\ \\mathrm{m/s^2}$ inward." }
        ],
        result: "$3.0\\ \\mathrm{m/s}$ rim speed; $150\\ \\mathrm{m/s^2}$ inward."
      },
      {
        title: "Belt drive",
        problem: "A $0.050\\ \\mathrm{m}$ motor pulley at $40\\ \\mathrm{rad/s}$ belts a $0.20\\ \\mathrm{m}$ drum. Find drum $\\omega$.",
        steps: [
          { label: "Rim speed", text: "$v = 0.050 \\times 40 = 2.0\\ \\mathrm{m/s}$ shared." },
          { label: "Drum", text: "$\\omega = 2.0/0.20 = 10\\ \\mathrm{rad/s}$." },
          { label: "Ratio", text: "Four-times radius runs one-quarter speed." }
        ],
        result: "$10\\ \\mathrm{rad/s}$ drum speed."
      }
    ],
    keyTakeaways: [
      "$v = r\\omega$ scales spin to each radius.",
      "Acceleration splits into speeding ($r\\alpha$) and steering ($\\omega^2 r$).",
      "No-slip links share $r\\omega$ across wheels."
    ],
    quiz: [
      {
        q: "Point at $0.30\\ \\mathrm{m}$, $10\\ \\mathrm{rad/s}$ has speed:",
        options: ["$33\\ \\mathrm{m/s}$", "$3.0\\ \\mathrm{m/s}$", "$10\\ \\mathrm{m/s}$", "Zero"],
        answer: 1,
        explanation: "$r\\omega = 3.0\\ \\mathrm{m/s}$."
      },
      {
        q: "Steady spin radial acceleration is:",
        options: ["$r\\alpha$", "$\\omega^2 r$ inward", "Zero", "Tangent"],
        answer: 1,
        explanation: "Speed constant kills $a_{\\tan}$; turning keeps $\\omega^2 r$."
      },
      {
        q: "Belted pulleys satisfy:",
        options: ["$\\omega_1 = \\omega_2$ always", "$r_1\\omega_1 = r_2\\omega_2$", "$r_1 = r_2$ always", "Zero speed"],
        answer: 1,
        explanation: "Common belt speed is each rim speed."
      }
    ]
  },
  {
    sectionId: "young-ch9-s4",
    readingTime: 6,
    intro: "Spinning objects store kinetic energy in every speck: $K = \\frac{1}{2}I\\omega^2$. This section builds rotational kinetic energy from particle sums and introduces moment of inertia as rotational mass.",
    objectives: [
      "Derive $K_{\\mathrm{rot}} = \\frac{1}{2}I\\omega^2$",
      "Define $I = \\sum m_i r_i^2$ for particles",
      "Compare flywheel designs by $I$"
    ],
    concepts: [
      {
        term: "Rotational kinetic energy",
        kind: "theorem",
        statement: "**$K_{\\mathrm{rot}} = \\frac{1}{2}I\\omega^2$** with **$I = \\sum m_i r_i^2$** — each speck contributes $\\frac{1}{2}m_i(r_i\\omega)^2$.",
        detail: "Far mass counts quadratically: doubling radius quadruples its $I$ share."
      },
      {
        term: "Moment of inertia",
        kind: "definition",
        statement: "**Moment of inertia $I$** ($\\mathrm{kg\\cdot m^2}$) is **rotational inertia** — resistance to spin change.",
        detail: "Hoop $MR^2$ out-spins disk $\\frac{1}{2}MR^2$: rim-weighted mass is lazier."
      },
      {
        term: "Common shapes",
        kind: "notation",
        statement: "Rod-center $ML^2/12$, rod-end $ML^2/3$, hoop $MR^2$, disk $\\frac{1}{2}MR^2$, sphere $\\frac{2}{5}MR^2$.",
        detail: "Same $M, R$: hoop stores twice the disk energy at equal $\\omega$."
      },
      {
        term: "Energy scales",
        kind: "insight",
        statement: "**$K_{\\mathrm{rot}} \\propto I$ and $\\omega^2$**: doubling spin quadruples stored energy.",
        detail: "$I = 2.0\\ \\mathrm{kg\\cdot m^2}$ at $10\\ \\mathrm{rad/s}$: $K = 100\\ \\mathrm{J}$; at $20$: $400\\ \\mathrm{J}$."
      },
      {
        term: "Flywheel moral",
        kind: "insight",
        statement: "**Put mass at the rim** for storage (max $I/M$); **near the axle** for agility (min $I$).",
        detail: "Energy utilities use rim-heavy flywheels; robots use hollow-light arms."
      }
    ],
    figures: [
      {
        caption: "Same $M$, $R$: hoop $I = MR^2$ out-stores disk $I = \\frac{1}{2}MR^2$ — radius weights quadratically",
        svg: `<svg viewBox="0 0 720 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hoop versus disk inertia"><circle cx="200" cy="90" r="60" fill="none" stroke="currentColor" stroke-width="8"/><circle cx="200" cy="90" r="4" fill="currentColor"/><circle cx="520" cy="90" r="60" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="2"/><circle cx="520" cy="90" r="4" fill="currentColor"/><text x="200" y="170" font-size="12" text-anchor="middle" fill="currentColor">hoop: MR squared</text><text x="520" y="170" font-size="12" text-anchor="middle" fill="currentColor">disk: half MR squared</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Flywheel storage",
        problem: "A $50\\ \\mathrm{kg}$ hoop ($R = 0.50\\ \\mathrm{m}$) spins at $40\\ \\mathrm{rad/s}$. Find $K$.",
        steps: [
          { label: "Inertia", text: "$I = 50 \\times 0.25 = 12.5\\ \\mathrm{kg\\cdot m^2}$." },
          { label: "Energy", text: "$K = 0.5 \\times 12.5 \\times 1600 = 10{,}000\\ \\mathrm{J}$." },
          { label: "Disk check", text: "Same-mass disk: $I = 6.25$, $K = 5000\\ \\mathrm{J}$ — half." }
        ],
        result: "$10\\ \\mathrm{kJ}$ in the hoop; $5.0\\ \\mathrm{kJ}$ in the equal disk."
      },
      {
        title: "Two-speck rotor",
        problem: "Two $1.0\\ \\mathrm{kg}$ masses at $r = 0.40\\ \\mathrm{m}$ on a massless rod spin at $6.0\\ \\mathrm{rad/s}$. Find $I$ and $K$.",
        steps: [
          { label: "Inertia", text: "$I = 2 \\times 1.0 \\times 0.16 = 0.32\\ \\mathrm{kg\\cdot m^2}$." },
          { label: "Energy", text: "$K = 0.5 \\times 0.32 \\times 36 = 5.76\\ \\mathrm{J}$." },
          { label: "Per speck", text: "$v = 2.40\\ \\mathrm{m/s}$ each: $2 \\times 2.88 = 5.76$ — matches." }
        ],
        result: "$I = 0.32\\ \\mathrm{kg\\cdot m^2}$; $K = 5.76\\ \\mathrm{J}$."
      }
    ],
    keyTakeaways: [
      "$K_{\\mathrm{rot}} = \\frac{1}{2}I\\omega^2$ sums $\\frac{1}{2}m_iv_i^2$.",
      "$I = \\sum m_i r_i^2$ prices mass by radius squared.",
      "Shape decides storage at fixed $M$ and $\\omega$."
    ],
    quiz: [
      {
        q: "$I = 2.0\\ \\mathrm{kg\\cdot m^2}$ at $10\\ \\mathrm{rad/s}$ stores:",
        options: ["$20\\ \\mathrm{J}$", "$100\\ \\mathrm{J}$", "$200\\ \\mathrm{J}$", "$10\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$0.5 \\times 2.0 \\times 100 = 100\\ \\mathrm{J}$."
      },
      {
        q: "Same $M$, $R$: hoop versus disk inertia is:",
        options: ["Equal", "Hoop double the disk ($MR^2$ vs $\\frac{1}{2}MR^2$)", "Half", "Zero"],
        answer: 1,
        explanation: "Rim concentration maximizes $\\sum mr^2$."
      },
      {
        q: "Doubling $\\omega$ multiplies $K_{\\mathrm{rot}}$ by:",
        options: ["2", "4", "8", "1"],
        answer: 1,
        explanation: "Quadratic in spin rate."
      }
    ]
  },
  {
    sectionId: "young-ch9-s5",
    readingTime: 5,
    intro: "The parallel-axis theorem moves moments of inertia between parallel axes in one line: $I_P = I_{\\mathrm{cm}} + Md^2$. This section states, proves by geometry, and applies it to rods, disks, and compound bodies.",
    objectives: [
      "State $I_P = I_{\\mathrm{cm}} + Md^2$",
      "Shift rod and disk inertias to ends and rims",
      "Combine inertias additively for compound bodies"
    ],
    concepts: [
      {
        term: "Parallel-axis theorem",
        kind: "theorem",
        statement: "**$I_P = I_{\\mathrm{cm}} + Md^2$**: shifting the axis by $d$ adds $M$ at distance $d$.",
        detail: "Rod-center $ML^2/12$ to rod-end: $ML^2/12 + M(L/2)^2 = ML^2/3$."
      },
      {
        term: "Why $Md^2$",
        kind: "theorem",
        statement: "Each speck gains $d^2$ plus a cross term linear in CM offsets — which **sums to zero** about the CM.",
        detail: "Only the collective $Md^2$ survives; internal distribution stays in $I_{\\mathrm{cm}}$."
      },
      {
        term: "CM minimizes $I$",
        kind: "insight",
        statement: "Among parallel axes, the **CM axis minimizes $I$** — every shift adds positive $Md^2$.",
        detail: "Spin a rod about its end ($ML^2/3$) is four times lazier than about center ($ML^2/12$)."
      },
      {
        term: "Additivity",
        kind: "method",
        statement: "**Inertias add** for glued parts about a common axis: $I_{\\mathrm{tot}} = \\sum I_i$.",
        detail: "Dumbbell: two spheres plus rod, each shifted to the shared spin axis."
      },
      {
        term: "Perpendicular-axis preview",
        kind: "insight",
        statement: "Flat plates also obey **$I_z = I_x+I_y$** for perpendicular axes — used for disks about diameters.",
        detail: "Disk $I_z = \\frac{1}{2}MR^2$ splits equally: $I_{\\mathrm{diam}} = \\frac{1}{4}MR^2$ each."
      }
    ],
    examples: [
      {
        title: "Rod about its end",
        problem: "A $3.0\\ \\mathrm{kg}$, $2.0\\ \\mathrm{m}$ rod: $I$ about center and about one end.",
        steps: [
          { label: "Center", text: "$I_{\\mathrm{cm}} = 3.0 \\times 4.0/12 = 1.0\\ \\mathrm{kg\\cdot m^2}$." },
          { label: "Shift", text: "$I_{\\mathrm{end}} = 1.0 + 3.0 \\times 1.0 = 4.0\\ \\mathrm{kg\\cdot m^2}$." },
          { label: "Ratio", text: "Four times larger — $ML^2/3$ versus $ML^2/12$." }
        ],
        result: "$1.0$ center; $4.0\\ \\mathrm{kg\\cdot m^2}$ end."
      },
      {
        title: "Disk about rim tangent",
        problem: "A $4.0\\ \\mathrm{kg}$ disk ($R = 0.25\\ \\mathrm{m}$): $I$ about center and about a parallel rim axis.",
        steps: [
          { label: "Center", text: "$I_{\\mathrm{cm}} = 0.5 \\times 4.0 \\times 0.0625 = 0.125\\ \\mathrm{kg\\cdot m^2}$." },
          { label: "Shift", text: "$I = 0.125 + 4.0 \\times 0.0625 = 0.375\\ \\mathrm{kg\\cdot m^2}$." },
          { label: "Factor", text: "Three times center ($\\frac{3}{2}MR^2$)." }
        ],
        result: "$0.375\\ \\mathrm{kg\\cdot m^2}$ about the rim-parallel axis."
      }
    ],
    keyTakeaways: [
      "Shift axes by adding $Md^2$ to the CM value.",
      "CM axis is the laziest-minimum among parallels.",
      "Build compound $I$ by summing shifted parts."
    ],
    quiz: [
      {
        q: "Rod $ML^2/12$ about center becomes about the end:",
        options: ["$ML^2/12$", "$ML^2/3$", "$ML^2/6$", "Zero"],
        answer: 1,
        explanation: "$ML^2/12 + M(L/2)^2 = ML^2/3$."
      },
      {
        q: "Parallel-axis shift adds:",
        options: ["$Md$", "$Md^2$", "$M/d^2$", "Zero"],
        answer: 1,
        explanation: "Distance enters quadratically, like every inertia."
      },
      {
        q: "Minimum $I$ among parallel axes is at:",
        options: ["The rim", "The center of mass", "Infinity", "The end"],
        answer: 1,
        explanation: "Every shift adds positive $Md^2$."
      }
    ]
  },
  {
    sectionId: "young-ch9-s6",
    readingTime: 7,
    intro: "Moments of inertia for continuous bodies come from integration: $I = \\int r^2\\,dm$. This section sets up $dm$ for rods, rings, disks, and spheres, and harvests the standard table used in every rotation problem.",
    objectives: [
      "Set up $I = \\int r^2\\,dm$ with linear, areal, and volume densities",
      "Derive rod, hoop, disk, and sphere inertias",
      "Choose symmetry elements that simplify $dm$"
    ],
    concepts: [
      {
        term: "Inertia integral",
        kind: "definition",
        statement: "**$I = \\int r^2\\,dm$** sums $r^2$ over mass elements; $dm = \\lambda\\,dx$, $\\sigma\\,dA$, or $\\rho\\,dV$.",
        detail: "Uniform rod: $dm = (M/L)dx$; uniform disk: $dm = \\sigma 2\\pi r\\,dr$."
      },
      {
        term: "Thin rod",
        kind: "theorem",
        statement: "Rod about center: **$I = ML^2/12$**; about end: **$ML^2/3$** by $\\int_{-L/2}^{L/2}x^2(M/L)dx$.",
        detail: "Cubic $x^3/3$ evaluated symmetric doubles to $L^3/12$."
      },
      {
        term: "Hoop and disk",
        kind: "theorem",
        statement: "Hoop: **$I = MR^2$** (all mass at $R$); disk: **$I = \\frac{1}{2}MR^2$** via $\\int r^2\\sigma 2\\pi r\\,dr$.",
        detail: "The disk $r^3$ integral averages $R^2/2$ over the area."
      },
      {
        term: "Solid sphere",
        kind: "theorem",
        statement: "Solid sphere: **$I = \\frac{2}{5}MR^2$** by stacking disks of radius $\\sqrt{R^2-z^2}$.",
        detail: "Hollow shell gives $\\frac{2}{3}MR^2$ — surface mass rides farther out."
      },
      {
        term: "Symmetry strategy",
        kind: "method",
        statement: "Choose **$dm$ at fixed $r$** (rings for disks, shells for spheres) so $r^2$ factors out of each element.",
        detail: "Wrong slices (strips at varying $r$) force double integrals; rings need one."
      }
    ],
    figures: [
      {
        caption: "Disk by rings: $dm = \\sigma 2\\pi r\\,dr$ at fixed $r$ gives $I = \\frac{1}{2}MR^2$",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Disk rings"><circle cx="360" cy="95" r="70" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="360" cy="95" r="45" fill="none" stroke="currentColor" stroke-width="6" opacity="0.6"/><circle cx="360" cy="95" r="20" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="360" cy="95" r="4" fill="currentColor"/><text x="470" y="100" font-size="12" fill="currentColor">ring dm at r</text><text x="360" y="180" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">integrate r squared dm, 0 to R</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Rod integral",
        problem: "Derive $I_{\\mathrm{cm}} = ML^2/12$ for a uniform rod.",
        steps: [
          { label: "Element", text: "$dm = (M/L)dx$, $r = |x|$, $x$ from $-L/2$ to $L/2$." },
          { label: "Integrate", text: "$I = (M/L)[x^3/3]_{-L/2}^{L/2} = (M/L)(L^3/12) = ML^2/12$." },
          { label: "Numbers", text: "$2.0\\ \\mathrm{kg}$, $1.0\\ \\mathrm{m}$: $I = 0.167\\ \\mathrm{kg\\cdot m^2}$." }
        ],
        result: "$ML^2/12$ — $0.167\\ \\mathrm{kg\\cdot m^2}$ for the sample."
      },
      {
        title: "Disk integral",
        problem: "Derive $I = \\frac{1}{2}MR^2$ for a uniform disk.",
        steps: [
          { label: "Element", text: "Ring at $r$: $dm = \\sigma 2\\pi r\\,dr$, $\\sigma = M/\\pi R^2$." },
          { label: "Integrate", text: "$I = \\int_0^R r^2\\sigma 2\\pi r\\,dr = 2\\pi\\sigma R^4/4 = MR^2/2$." },
          { label: "Numbers", text: "$3.0\\ \\mathrm{kg}$, $0.20\\ \\mathrm{m}$: $I = 0.060\\ \\mathrm{kg\\cdot m^2}$." }
        ],
        result: "$\\frac{1}{2}MR^2$ — $0.060\\ \\mathrm{kg\\cdot m^2}$ for the sample."
      }
    ],
    keyTakeaways: [
      "$I = \\int r^2\\,dm$ is the continuous form of $\\sum mr^2$.",
      "Rings, shells, and slices at fixed $r$ make integrals one-dimensional.",
      "Memorize rod, hoop, disk, sphere — derive the rest."
    ],
    quiz: [
      {
        q: "Correct inertia integral is:",
        options: ["$I = \\int r\\,dm$", "$I = \\int r^2\\,dm$", "$I = \\int m\\,dr$", "$I = Mr$ always"],
        answer: 1,
        explanation: "Each speck contributes $r^2\\,dm$ — radius squared."
      },
      {
        q: "Uniform disk $I$ about its central axis is:",
        options: ["$MR^2$", "$\\frac{1}{2}MR^2$", "$\\frac{2}{5}MR^2$", "$ML^2/12$"],
        answer: 1,
        explanation: "Ring integration averages $r^2$ to $R^2/2$."
      },
      {
        q: "Best $dm$ for a disk is:",
        options: ["Cartesian squares", "Concentric rings at fixed $r$", "Random chunks", "Points only"],
        answer: 1,
        explanation: "Constant-$r$ rings factor $r^2$ out of each element."
      }
    ]
  }
];

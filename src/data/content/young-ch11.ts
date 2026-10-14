import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 11
// Equilibrium and Elasticity (Secs 11.1–11.5)
// ============================================================================

export const youngCh11Content: SectionContent[] = [
  {
    sectionId: "young-ch11-s1",
    readingTime: 5,
    intro: "Rigid bodies need two balances: forces must cancel and torques must cancel. This section states $\\sum\\vec{F} = 0$ and $\\sum\\vec{\\tau} = 0$ and shows any pivot works for the torque test.",
    objectives: [
      "State the two equilibrium conditions for rigid bodies",
      "Use $\\sum\\tau_z = 0$ about any convenient pivot",
      "Distinguish particle from rigid-body equilibrium"
    ],
    concepts: [
      {
        term: "First condition",
        kind: "law",
        statement: "**$\\sum\\vec{F} = 0$**: net external force vanishes — CM does not accelerate.",
        detail: "Component-wise: $\\sum F_x = 0$, $\\sum F_y = 0$ (planar)."
      },
      {
        term: "Second condition",
        kind: "law",
        statement: "**$\\sum\\vec{\\tau}_P = 0$ about any point P**: net torque vanishes — no angular acceleration.",
        detail: "If forces balance, torque about one zero-point guarantees zero about all points."
      },
      {
        term: "Pivot freedom",
        kind: "method",
        statement: "Choose the **pivot at an unknown force** to kill its torque and isolate the other unknowns.",
        detail: "Hinged beam: pivot at the hinge removes two unknowns at once."
      },
      {
        term: "Rigid versus particle",
        kind: "insight",
        statement: "Particles need only **force balance**; extended bodies add **torque balance** — a seesaw balances forces yet rotates.",
        detail: "Two equal opposite forces offset form a couple: zero net $F$, nonzero $\\tau$."
      },
      {
        term: "Static determinacy",
        kind: "insight",
        statement: "Planar equilibrium gives **three scalar equations** ($F_x, F_y, \\tau_z$) — enough for up to three unknowns.",
        detail: "More unknowns need elasticity (indeterminate) — preview of Sec 11.4."
      }
    ],
    examples: [
      {
        title: "Seesaw balance",
        problem: "$30\\ \\mathrm{kg}$ at $2.0\\ \\mathrm{m}$ left of pivot; where must $45\\ \\mathrm{kg}$ sit right to balance?",
        steps: [
          { label: "Torques", text: "$30 \\times 9.8 \\times 2.0 = 45 \\times 9.8 \\times d$." },
          { label: "Solve", text: "$d = 60/45 = 1.33\\ \\mathrm{m}$ right." },
          { label: "Forces", text: "Pivot supplies $(30+45) \\times 9.8 = 735\\ \\mathrm{N}$ up." }
        ],
        result: "$1.33\\ \\mathrm{m}$ right of pivot."
      },
      {
        title: "Couple",
        problem: "Two $10\\ \\mathrm{N}$ forces opposite, offset $0.50\\ \\mathrm{m}$. Net $F$ and $\\tau$?",
        steps: [
          { label: "Force", text: "$10 - 10 = 0$ net." },
          { label: "Torque", text: "$\\tau = 10 \\times 0.50 = 5.0\\ \\mathrm{N\\cdot m}$ (same sense both)." },
          { label: "Moral", text: "First condition passes, second fails — pure rotation." }
        ],
        result: "Zero force, $5.0\\ \\mathrm{N\\cdot m}$ torque."
      }
    ],
    keyTakeaways: [
      "Balance forces and torques independently.",
      "Pivot at unknowns to simplify torque sums.",
      "Three planar equations cap solvable unknowns at three."
    ],
    quiz: [
      {
        q: "Rigid-body equilibrium needs:",
        options: ["$\\sum\\vec{F} = 0$ only", "$\\sum\\vec{F} = 0$ and $\\sum\\vec{\\tau} = 0$", "$\\sum\\tau \\neq 0$", "Zero mass"],
        answer: 1,
        explanation: "Translation and rotation freeze separately."
      },
      {
        q: "$30\\ \\mathrm{kg}$ at $2.0\\ \\mathrm{m}$ balances $45\\ \\mathrm{kg}$ at:",
        options: ["$2.0\\ \\mathrm{m}$", "$1.33\\ \\mathrm{m}$ opposite side", "$3.0\\ \\mathrm{m}$ same side", "Zero"],
        answer: 1,
        explanation: "Torque equality: $30 \\times 2.0 = 45d$."
      },
      {
        q: "Best pivot choice is:",
        options: ["At an unknown force to eliminate it", "Always at the CM", "Always at the left end", "Nowhere"],
        answer: 0,
        explanation: "Zero lever arm kills that unknown torque term."
      }
    ]
  },
  {
    sectionId: "young-ch11-s2",
    readingTime: 5,
    intro: "Gravity acts throughout a body but torques as if concentrated at the center of gravity. This section locates the CG, equates it with the CM in uniform $g$, and explains balance and toppling by support base.",
    objectives: [
      "Locate the center of gravity by weighted averaging",
      "Explain CG versus CM in nonuniform gravity",
      "Predict toppling from CG over base"
    ],
    concepts: [
      {
        term: "Center of gravity",
        kind: "definition",
        statement: "**CG** is where total weight **$\\vec{W} = M\\vec{g}$ effectively acts** for torque: $\\vec{r}_{\\mathrm{cg}} = \\sum w_i\\vec{r}_i/W$.",
        detail: "Supporting at the CG balances torques — the finger under the ruler."
      },
      {
        term: "CG equals CM in uniform g",
        kind: "theorem",
        statement: "In **uniform $\\vec{g}$**, weights scale with masses, so **CG coincides with CM**.",
        detail: "Lab bodies use CM coordinates for gravity torques; mountains and satellites need the distinction."
      },
      {
        term: "Support base rule",
        kind: "method",
        statement: "A body **topples when its CG passes outside the support base** — torque about the tipping edge goes over.",
        detail: "Leaning tower stands while its CG hangs over the foundation footprint."
      },
      {
        term: "Balance and stability",
        kind: "insight",
        statement: "**Low CG and wide base stabilize**; high CG and narrow base tip easily.",
        detail: "SUVs roll sooner than sedans; crouching steadies a canoe."
      },
      {
        term: "Weighing by CG shifts",
        kind: "method",
        statement: "Shifting a known mass along a **steelyard** locates unknown weights by CG torque balance.",
        detail: "Truck scales and doctor beams are calibrated CG levers."
      }
    ],
    figures: [
      {
        caption: "Toppling when the CG overhangs the base: torque about the edge changes sign",
        svg: `<svg viewBox="0 0 720 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Center of gravity toppling"><rect x="280" y="60" width="120" height="90" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="340" cy="105" r="6" fill="currentColor"/><line x1="340" y1="105" x2="340" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="200" y1="160" x2="520" y2="160" stroke="currentColor" stroke-width="2"/><rect x="420" y="60" width="120" height="90" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="500" cy="105" r="6" fill="currentColor"/><line x1="500" y1="105" x2="500" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="340" y="178" font-size="11" text-anchor="middle" fill="currentColor">stable: CG over base</text><text x="480" y="178" font-size="11" text-anchor="middle" fill="currentColor">tips: CG outside</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Ruler CG",
        problem: "A $1.0\\ \\mathrm{m}$ uniform ruler plus $0.20\\ \\mathrm{kg}$ at $x = 0.90\\ \\mathrm{m}$ (ruler $0.15\\ \\mathrm{kg}$). Find balance point.",
        steps: [
          { label: "Moments", text: "$x_{\\mathrm{cg}} = (0.15 \\times 0.50 + 0.20 \\times 0.90)/0.35 = 0.255/0.35 = 0.729\\ \\mathrm{m}$." },
          { label: "Sense", text: "Shifted $23\\ \\mathrm{cm}$ toward the load from center." },
          { label: "Support", text: "Finger at $0.73\\ \\mathrm{m}$ balances both torques." }
        ],
        result: "Balance at $0.73\\ \\mathrm{m}$ from the zero end."
      },
      {
        title: "Toppling truck",
        problem: "A van CG $0.80\\ \\mathrm{m}$ high, track $1.6\\ \\mathrm{m}$ wide. Estimate lateral tip acceleration.",
        steps: [
          { label: "Geometry", text: "Tip when inertial torque $mah$ exceeds $mg(w/2)$: $a = g(w/2)/h$." },
          { label: "Numbers", text: "$a = 9.80 \\times 0.80/0.80 = 9.80\\ \\mathrm{m/s^2}$ ($1g$)." },
          { label: "SUV check", text: "CG $1.0\\ \\mathrm{m}$: $a = 7.84$ — tips sooner." }
        ],
        result: "~$1g$ lateral tips the van; higher CG tips easier."
      }
    ],
    keyTakeaways: [
      "Gravity torques through the CG; uniform $g$ puts it at the CM.",
      "CG over base stands; outside topples.",
      "Low and wide beats high and narrow."
    ],
    quiz: [
      {
        q: "CG coincides with CM when:",
        options: ["Gravity is uniform", "Mass is zero", "Body is moving", "Never"],
        answer: 0,
        explanation: "Uniform $g$ scales every weight with its mass identically."
      },
      {
        q: "Toppling occurs when:",
        options: ["CG is low", "CG passes outside the support base", "Base is wide", "Weight is small"],
        answer: 1,
        explanation: "Edge torque then rotates outward instead of restoring."
      },
      {
        q: "Ruler ($0.15\\ \\mathrm{kg}$) plus $0.20\\ \\mathrm{kg}$ at $0.90\\ \\mathrm{m}$ balances near:",
        options: ["$0.50\\ \\mathrm{m}$", "$0.73\\ \\mathrm{m}$", "$0.90\\ \\mathrm{m}$", "Zero"],
        answer: 1,
        explanation: "Weighted mean $(0.075+0.18)/0.35 = 0.729\\ \\mathrm{m}$."
      }
    ]
  },
  {
    sectionId: "young-ch11-s3",
    readingTime: 7,
    intro: "Beams, hinges, ladders, and drawbridges submit to the two equilibrium conditions with well-chosen pivots. This section works the standard structures and enforces the full Young solution protocol.",
    objectives: [
      "Solve beam, hinge, and ladder problems with $\\sum F$ and $\\sum\\tau$",
      "Handle cables, hinges with two force components, and friction at feet",
      "Verify solutions by re-pivoting"
    ],
    concepts: [
      {
        term: "Hinge forces",
        kind: "definition",
        statement: "A **hinge (pin)** supplies **two force components** $H_x, H_y$ but **zero torque** about itself.",
        detail: "Pivoting there removes both from the torque equation — the standard simplification."
      },
      {
        term: "Ladder protocol",
        kind: "method",
        statement: "Ladder: **$n$ up, $f$ sideways at foot; $n_{\\mathrm{wall}}$ horizontal at smooth top; $mg$ at CM** — three equations, three unknowns ($f$, $n$, $n_{\\mathrm{wall}}$).",
        detail: "Torque about the foot kills $n$ and $f$ together."
      },
      {
        term: "Cable-tension beams",
        kind: "method",
        statement: "Horizontal beams with angled cables: **torque about the hinge gives $T$ directly**; force sums give hinge loads.",
        detail: "$T\\sin\\theta \\times L$ balances $mg \\times L/2$ plus load torques."
      },
      {
        term: "Friction bound",
        kind: "method",
        statement: "Ladder feet need **$f \\le \\mu_s n$** — equilibrium solutions must pass this audit.",
        detail: "Required $f$ grows as the ladder flattens; waxed floors demand steeper angles."
      },
      {
        term: "Re-pivot check",
        kind: "method",
        statement: "**Recompute $\\sum\\tau$ about a second pivot** — a free independent verification.",
        detail: "Numbers surviving two pivots plus both force sums are trustworthy."
      }
    ],
    figures: [
      {
        caption: "Ladder equilibrium: $\\vec{n}$, $\\vec{f}$ at the foot, $\\vec{n}_{\\mathrm{wall}}$ at the smooth top, $m\\vec{g}$ at the center",
        svg: `<svg viewBox="0 0 720 200" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ladder forces"><line x1="60" y1="170" x2="680" y2="170" stroke="currentColor" stroke-width="2"/><line x1="640" y1="30" x2="640" y2="170" stroke="currentColor" stroke-width="2"/><line x1="300" y1="170" x2="560" y2="50" stroke="currentColor" stroke-width="3"/><circle cx="430" cy="110" r="4" fill="currentColor"/><line x1="430" y1="110" x2="430" y2="160" stroke="currentColor" stroke-width="2"/><polygon points="430,160 424,148 436,148" fill="currentColor"/><line x1="300" y1="170" x2="300" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="300,120 294,132 306,132" fill="currentColor"/><line x1="560" y1="50" x2="500" y2="50" stroke="currentColor" stroke-width="2"/><polygon points="500,50 512,44 512,56" fill="currentColor"/><text x="440" y="155" font-size="11" fill="currentColor">mg</text><text x="285" y="110" font-size="11" fill="currentColor">n up</text><text x="490" y="38" font-size="11" fill="currentColor">wall push</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Ladder against smooth wall",
        problem: "A $10\\ \\mathrm{kg}$, $4.0\\ \\mathrm{m}$ ladder at $60^{\\circ}$ to ground, smooth wall. Find foot friction and wall normal.",
        steps: [
          { label: "Torque about foot", text: "$n_w \\times 4.0\\sin 60^{\\circ} = 98 \\times 2.0\\cos 60^{\\circ}$: $n_w \\times 3.464 = 98$: $n_w = 28.3\\ \\mathrm{N}$." },
          { label: "Forces", text: "$f = n_w = 28.3\\ \\mathrm{N}$; $n = 98\\ \\mathrm{N}$." },
          { label: "Friction audit", text: "Needs $\\mu_s \\ge 28.3/98 = 0.289$ — ordinary floors pass." }
        ],
        result: "$f = n_w = 28.3\\ \\mathrm{N}$; $n = 98\\ \\mathrm{N}$."
      },
      {
        title: "Sign-board beam",
        problem: "A $20\\ \\mathrm{kg}$ uniform $3.0\\ \\mathrm{m}$ beam hinged at the wall, cable at $40^{\\circ}$ from the far end. Find $T$.",
        steps: [
          { label: "Torque about hinge", text: "$T\\sin 40^{\\circ} \\times 3.0 = 196 \\times 1.5$: $T \\times 1.928 = 294$." },
          { label: "Solve", text: "$T = 152\\ \\mathrm{N}$." },
          { label: "Hinge", text: "$H_x = T\\cos 40^{\\circ} = 116\\ \\mathrm{N}$; $H_y = 196 - T\\sin 40^{\\circ} = 98.3\\ \\mathrm{N}$." }
        ],
        result: "$T = 152\\ \\mathrm{N}$; hinge $(116, 98)\\ \\mathrm{N}$."
      }
    ],
    keyTakeaways: [
      "Pivot at hinges to kill two unknowns at once.",
      "Ladders couple wall normal to foot friction.",
      "Audit friction and re-pivot to verify."
    ],
    quiz: [
      {
        q: "A pin hinge contributes:",
        options: ["One force only", "Two force components, zero torque about itself", "Only torque", "Nothing"],
        answer: 1,
        explanation: "It constrains $x$ and $y$ translation but permits rotation."
      },
      {
        q: "Ladder ($10\\ \\mathrm{kg}$, $4.0\\ \\mathrm{m}$, $60^{\\circ}$, smooth wall) needs foot friction about:",
        options: ["$98\\ \\mathrm{N}$", "$28\\ \\mathrm{N}$", "Zero", "$196\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "Torque balance gives $n_w = 28.3$; horizontal sum sets $f$ equal."
      },
      {
        q: "Best verification of an equilibrium solution is:",
        options: ["Repeating the same pivot", "Torque about a second pivot plus both force sums", "Guessing", "Ignoring friction"],
        answer: 1,
        explanation: "Independent moment center catches arithmetic slips."
      }
    ]
  },
  {
    sectionId: "young-ch11-s4",
    readingTime: 7,
    intro: "Deformable solids stretch, squeeze, and shear in proportion to load: stress over strain is the elastic modulus. This section defines tensile, bulk, and shear moduli and computes elongations, compressions, and twists.",
    objectives: [
      "Define stress, strain for tension, bulk, and shear",
      "Apply $Y$, $B$, $S$ to elongation and deformation",
      "Compare steel, bone, and rubber stiffnesses"
    ],
    concepts: [
      {
        term: "Tensile stress and strain",
        kind: "definition",
        statement: "**Tensile stress** $= F/A$ ($\\mathrm{Pa}$); **strain** $= \\Delta L/L$ (dimensionless); **$Y = (F/A)/(\\Delta L/L)$**.",
        detail: "Steel $Y = 2.0 \\times 10^{11}\\ \\mathrm{Pa}$; bone $1.6 \\times 10^{10}$; rubber $10^6$–$10^7$."
      },
      {
        term: "Bulk modulus",
        kind: "definition",
        statement: "**$B = -\\Delta p/(\\Delta V/V)$** resists uniform squeeze; water $B = 2.2 \\times 10^9\\ \\mathrm{Pa}$.",
        detail: "$100\\ \\mathrm{m}$ ocean depth ($\\sim 10\\ \\mathrm{atm}$) compresses water by only $0.046$%."
      },
      {
        term: "Shear modulus",
        kind: "definition",
        statement: "**$S = (F/A)/\\phi$** resists shape-skew at constant volume; $\\phi$ in radians.",
        detail: "Bolts and rivets are shear-rated; torsion bars are shear springs."
      },
      {
        term: "Elongation formula",
        kind: "theorem",
        statement: "**$\\Delta L = FL/AY$** — long thin soft rods stretch most.",
        detail: "$1000\\ \\mathrm{N}$ on $2.0\\ \\mathrm{m}$ steel $A = 1.0 \\times 10^{-4}\\ \\mathrm{m^2}$: $\\Delta L = 0.10\\ \\mathrm{mm}$."
      },
      {
        term: "Units of pressure",
        kind: "notation",
        statement: "**$1\\ \\mathrm{Pa} = 1\\ \\mathrm{N/m^2}$**; $1\\ \\mathrm{atm} = 1.013 \\times 10^5\\ \\mathrm{Pa}$.",
        detail: "Moduli in gigapascals ($10^9\\ \\mathrm{Pa}$) keep numbers compact."
      }
    ],
    figures: [
      {
        caption: "Tension ($F/A$ vs $\\Delta L/L$), bulk ($\\Delta p$ vs $\\Delta V/V$), shear ($F/A$ vs $\\phi$)",
        svg: `<svg viewBox="0 0 720 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three elastic moduli"><rect x="80" y="60" width="40" height="80" fill="none" stroke="currentColor" stroke-width="2"/><line x1="120" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="2"/><polygon points="170,80 158,74 158,86" fill="currentColor"/><line x1="120" y1="120" x2="170" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="170,120 158,114 158,126" fill="currentColor"/><text x="125" y="160" font-size="11" text-anchor="middle" fill="currentColor">tension Y</text><rect x="300" y="70" width="90" height="60" fill="none" stroke="currentColor" stroke-width="2"/><line x1="280" y1="100" x2="300" y2="100" stroke="currentColor" stroke-width="2"/><polygon points="300,100 290,94 290,106" fill="currentColor"/><line x1="410" y1="100" x2="390" y2="100" stroke="currentColor" stroke-width="2"/><polygon points="390,100 400,94 400,106" fill="currentColor"/><text x="345" y="160" font-size="11" text-anchor="middle" fill="currentColor">bulk B</text><rect x="520" y="70" width="90" height="60" fill="none" stroke="currentColor" stroke-width="2"/><line x1="520" y1="70" x2="560" y2="70" stroke="currentColor" stroke-width="2"/><polygon points="560,70 548,64 548,76" fill="currentColor"/><text x="565" y="160" font-size="11" text-anchor="middle" fill="currentColor">shear S</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Steel wire stretch",
        problem: "A $2.0\\ \\mathrm{m}$ steel wire ($A = 1.0 \\times 10^{-4}\\ \\mathrm{m^2}$, $Y = 2.0 \\times 10^{11}$) holds $1000\\ \\mathrm{N}$. Find $\\Delta L$.",
        steps: [
          { label: "Formula", text: "$\\Delta L = 1000 \\times 2.0/(1.0 \\times 10^{-4} \\times 2.0 \\times 10^{11}) = 2000/2.0 \\times 10^7 = 1.0 \\times 10^{-4}\\ \\mathrm{m}$." },
          { label: "Strain", text: "$5.0 \\times 10^{-5}$ — fifty microstrain." },
          { label: "Rubber check", text: "Rubber $Y = 10^7$: $\\Delta L = 2.0\\ \\mathrm{m}$ — twenty-thousand times more." }
        ],
        result: "$0.10\\ \\mathrm{mm}$ of stretch."
      },
      {
        title: "Ocean compression",
        problem: "How much does $1.0\\ \\mathrm{m^3}$ of water compress $100\\ \\mathrm{m}$ down ($\\Delta p = 9.9 \\times 10^5\\ \\mathrm{Pa}$)?",
        steps: [
          { label: "Strain", text: "$\\Delta V/V = -9.9 \\times 10^5/2.2 \\times 10^9 = -4.5 \\times 10^{-4}$." },
          { label: "Volume", text: "$\\Delta V = -4.5 \\times 10^{-4}\\ \\mathrm{m^3} = -450\\ \\mathrm{cm^3}$." },
          { label: "Sense", text: "Half a liter per cubic meter — water nearly incompressible." }
        ],
        result: "$-450\\ \\mathrm{cm^3}$ per cubic meter."
      }
    ],
    keyTakeaways: [
      "Stress is force per area; strain is fractional change.",
      "Modulus is stiffness: stress per unit strain.",
      "$\\Delta L = FL/AY$ prices length, thinness, and softness."
    ],
    quiz: [
      {
        q: "Young modulus is defined as:",
        options: ["$(F/A)/(\\Delta L/L)$", "$(\\Delta L/L)/(F/A)$", "$F\\Delta L$ always", "$A/F$"],
        answer: 0,
        explanation: "Stiffness: stress needed per unit strain."
      },
      {
        q: "$1000\\ \\mathrm{N}$ on $2.0\\ \\mathrm{m}$ steel ($10^{-4}\\ \\mathrm{m^2}$) stretches about:",
        options: ["$2.0\\ \\mathrm{m}$", "$0.10\\ \\mathrm{mm}$", "$10\\ \\mathrm{cm}$", "Zero"],
        answer: 1,
        explanation: "$FL/AY = 1.0 \\times 10^{-4}\\ \\mathrm{m}$."
      },
      {
        q: "Bulk modulus governs:",
        options: ["Stretching wires", "Uniform volume squeeze $\\Delta V/V$", "Twisting shafts", "Bending beams"],
        answer: 1,
        explanation: "$B = -\\Delta p/(\\Delta V/V)$."
      }
    ]
  },
  {
    sectionId: "young-ch11-s5",
    readingTime: 5,
    intro: "Hooke proportionality ends where permanent deformation begins. This section reads stress-strain curves to ultimate strength, distinguishes ductile from brittle failure, and sets safety factors for design.",
    objectives: [
      "Read proportional limit, yield, ultimate, and fracture points",
      "Distinguish elastic recovery from plastic set",
      "Explain safety factors in structural design"
    ],
    concepts: [
      {
        term: "Proportional and elastic limits",
        kind: "definition",
        statement: "**Proportional limit** ends linearity; **elastic limit** ends recoverability — close together in metals.",
        detail: "Below both, unloading retraces loading to zero strain."
      },
      {
        term: "Yield and plasticity",
        kind: "definition",
        statement: "Beyond **yield**, **plastic flow** leaves **permanent set** after unloading.",
        detail: "Bent paper clips stay bent — dislocations slid irreversibly."
      },
      {
        term: "Ultimate and fracture",
        kind: "definition",
        statement: "**Ultimate strength** is maximum stress; **fracture** breaks — necking precedes it in ductile metals.",
        detail: "Steel ultimate ~$400\\ \\mathrm{MPa}$; spider silk rivals it per mass."
      },
      {
        term: "Ductile versus brittle",
        kind: "definition",
        statement: "**Ductile** (copper, steel) stretches far before breaking; **brittle** (glass, cast iron) snaps near the elastic limit.",
        detail: "Car bodies crumple ductilely to absorb crash energy; windows shatter brittlely."
      },
      {
        term: "Safety factor",
        kind: "method",
        statement: "Design loads stay **well below yield** by a **safety factor** ($3$–$10$ for lifts, bridges).",
        detail: "A $10\\ \\mathrm{kN}$-rated cable at factor $5$ works at $2.0\\ \\mathrm{kN}$."
      }
    ],
    examples: [
      {
        title: "Safe cable",
        problem: "A steel cable ($A = 5.0 \\times 10^{-5}\\ \\mathrm{m^2}$, yield $250\\ \\mathrm{MPa}$) lifts with safety factor $5$. Find working load.",
        steps: [
          { label: "Yield force", text: "$F_y = 250 \\times 10^6 \\times 5.0 \\times 10^{-5} = 12{,}500\\ \\mathrm{N}$." },
          { label: "Working", text: "$F = 12{,}500/5 = 2500\\ \\mathrm{N}$ ($255\\ \\mathrm{kg}$)." },
          { label: "Stress", text: "Working stress $50\\ \\mathrm{MPa}$ — deep in the linear zone." }
        ],
        result: "$2500\\ \\mathrm{N}$ working load."
      },
      {
        title: "Elastic or plastic?",
        problem: "A wire stretched $0.20$% returns fully; stretched $2.0$% stays $1.5$% longer. Classify.",
        steps: [
          { label: "First", text: "Full recovery: elastic (within limit)." },
          { label: "Second", text: "Permanent $1.5$% set: plastic (past yield)." },
          { label: "Curve", text: "Proportional region below ~$0.2$%; ultimate far above." }
        ],
        result: "$0.20$% elastic; $2.0$% plastic with set."
      }
    ],
    keyTakeaways: [
      "Elastic deforms reversibly; plastic keeps a set.",
      "Curves mark proportional, yield, ultimate, fracture in order.",
      "Engineer below yield with explicit safety factors."
    ],
    quiz: [
      {
        q: "Permanent set after unloading means:",
        options: ["Elastic behavior", "Plastic deformation past yield", "Zero stress", "Brittle perfection"],
        answer: 1,
        explanation: "Unrecovered strain is the signature of dislocation flow."
      },
      {
        q: "Ultimate strength is:",
        options: ["First deviation from linearity", "Maximum stress before necking/fracture", "Zero stress", "Always equal to Young modulus"],
        answer: 1,
        explanation: "Peak of the engineering stress-strain curve."
      },
      {
        q: "Safety factor $5$ on $12{,}500\\ \\mathrm{N}$ yield gives working load:",
        options: ["$12{,}500\\ \\mathrm{N}$", "$2500\\ \\mathrm{N}$", "$62{,}500\\ \\mathrm{N}$", "Zero"],
        answer: 1,
        explanation: "Divide breaking-class load by the factor: $12{,}500/5$."
      }
    ]
  }
];

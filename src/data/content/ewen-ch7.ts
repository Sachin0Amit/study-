import type { SectionContent } from '../library'

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition
// Chapter 7: Concurrent and Parallel Forces (pp 181-217)
// ============================================================================

export const ewenCh7Content: SectionContent[] = [
  {
    sectionId: 'ewen-ch7-s1',
    readingTime: 6,
    intro: "Real structures carry angled loads that must be split before they can be balanced. This section resolves two-dimensional forces into components and totals them into resultants.",
    objectives: [
      "Resolve angled structural loads into $x$ and $y$ parts",
      "Total concurrent 2-D forces into a resultant",
      "Use the resultant to anticipate the balancing force",
    ],
    concepts: [
      {
        term: "Concurrent forces",
        kind: "definition",
        statement: "Forces are **concurrent** when their lines of action meet at one point — the single-point tug analyzed by vector sums.",
        detail: "A ring pulled by three ropes is concurrent; a beam on two supports is not (parallel-force case).",
      },
      {
        term: "Resolution of loads",
        kind: "method",
        statement: "Replace each angled load by **$F_x = F\\cos\\theta$**, **$F_y = F\\sin\\theta$** with correct signs before any balancing.",
        detail: "A $200\\ \\mathrm{lb}$ guy wire at $40^{\\circ}$ gives $F_x = 153\\ \\mathrm{lb}$, $F_y = 129\\ \\mathrm{lb}$.",
      },
      {
        term: "Resultant of a concurrent set",
        kind: "theorem",
        statement: "**$R_x = \\sum F_x$**, **$R_y = \\sum F_y$**, $R = \\sqrt{R_x^2 + R_y^2}$ — one arrow replacing the set.",
        detail: "Zero $R$ already means equilibrium; nonzero $R$ names the unbalanced push.",
      },
      {
        term: "Force triangle/polygon",
        kind: "method",
        statement: "Chained tip-to-tail, concurrent forces form a **closed polygon if and only if balanced** — the graphical equilibrium test.",
        detail: "An open gap is the missing equilibrant drawn to scale.",
      },
      {
        term: "Units in statics",
        kind: "notation",
        statement: "Keep **one force unit** (all newtons or all pounds) through every resolution and total.",
        detail: "Mixing $\\mathrm{N}$ and $\\mathrm{lb}$ inside one sum silently corrupts supports and tensions.",
      },
    ],
    figures: [
      {
        caption: "Concurrent ring: three rope pulls resolved on $x$-$y$ axes into $R_x$, $R_y$",
        svg: '<svg role="img" aria-label="Concurrent ring: three rope pulls resolved on x-y axes into R_x, R_y" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="200" y1="100" x2="60" y2="100"/><line x1="200" y1="100" x2="340" y2="100"/><line x1="200" y1="100" x2="200" y2="20"/><line x1="200" y1="100" x2="200" y2="170"/></g><g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="200" y1="100" x2="110" y2="60"/><line x1="200" y1="100" x2="300" y2="70"/><line x1="200" y1="100" x2="200" y2="155"/></g><g fill="currentColor"><circle cx="200" cy="100" r="7"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="90" y="55">rope A</text><text x="302" y="65">rope B</text><text x="208" y="160">load</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Guy-wire components",
        problem: "A guy wire pulls a pole top with $F = 2000\\ \\mathrm{N}$ at $40^{\\circ}$ above horizontal. Find the horizontal and vertical loads on the pole.",
        steps: [
          { label: "Resolve", text: "$F_x = 2000\\cos 40^{\\circ} = 2000 \\times 0.7660 = 1532\\ \\mathrm{N}$; $F_y = 2000\\sin 40^{\\circ} = 1286\\ \\mathrm{N}$." },
          { label: "Meaning", text: "The anchor must resist $1532\\ \\mathrm{N}$ sideways; the pole carries $1286\\ \\mathrm{N}$ extra compression." },
          { label: "Check", text: "$\\sqrt{1532^2 + 1286^2} \\approx 2000\\ \\mathrm{N}$ — recomposition confirms." },
        ],
        result: "$1532\\ \\mathrm{N}$ horizontal, $1286\\ \\mathrm{N}$ vertical compression.",
      },
      {
        title: "Two-rope resultant",
        problem: "Ropes pull a ring with $300\\ \\mathrm{N}$ east and $400\\ \\mathrm{N}$ at $90^{\\circ}$ (north). Find the resultant.",
        steps: [
          { label: "Total", text: "$R_x = 300$, $R_y = 400\\ \\mathrm{N}$." },
          { label: "Magnitude", text: "$R = 500\\ \\mathrm{N}$ at $\\arctan(4/3) = 53.1^{\\circ}$ north of east." },
          { label: "Balance preview", text: "A third rope must supply $500\\ \\mathrm{N}$ opposite to hold the ring." },
        ],
        result: "$500\\ \\mathrm{N}$ at $53.1^{\\circ}$; equilibrant is its opposite.",
      },
    ],
    keyTakeaways: [
      "Concurrent forces meet at a point and total by components.",
      "Resolve first with $F\\cos\\theta$, $F\\sin\\theta$, then sum axes.",
      "Closed force polygon means balanced; the gap names the missing force.",
    ],
    quiz: [
      {
        q: "$2000\\ \\mathrm{N}$ at $40^{\\circ}$ gives horizontal load",
        options: ["$1286\\ \\mathrm{N}$", "$1532\\ \\mathrm{N}$", "$2000\\ \\mathrm{N}$", "$714\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$2000\\cos 40^{\\circ} = 1532\\ \\mathrm{N}$.",
      },
      {
        q: "$300\\ \\mathrm{N}$ east plus $400\\ \\mathrm{N}$ north resultants to",
        options: ["$700\\ \\mathrm{N}$ east", "$500\\ \\mathrm{N}$ at $53.1^{\\circ}$", "$100\\ \\mathrm{N}$ west", "$500\\ \\mathrm{N}$ south"],
        answer: 1,
        explanation: "$\\sqrt{300^2 + 400^2} = 500$ at $\\arctan(4/3)$.",
      },
      {
        q: "Concurrent means",
        options: ["Parallel and spread out", "Lines of action meeting at one point", "Acting at different times", "Frictionless"],
        answer: 1,
        explanation: "One common point of action defines concurrency.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch7-s2',
    readingTime: 7,
    intro: "A sign hanging from two cables or a bracket under load stays put only when forces balance on both axes. This section solves concurrent equilibrium with $\\sum F_x = 0$, $\\sum F_y = 0$.",
    objectives: [
      "Write equilibrium equations for a concurrent point",
      "Solve symmetric and asymmetric cable tensions",
      "Verify solutions by substitution into both axes",
    ],
    concepts: [
      {
        term: "Concurrent equilibrium conditions",
        kind: "law",
        statement: "A concurrent point is in equilibrium **if and only if $\\sum F_x = 0$ and $\\sum F_y = 0$** — no net push on either axis.",
        detail: "Two scalar equations solve at most two unknown tensions or angles.",
      },
      {
        term: "Tension pulls away",
        kind: "method",
        statement: "Cable **tension always pulls away from the point** along the cable — draw every tension arrow outward before resolving.",
        detail: "Inward arrows reverse signs and wreck both equations.",
      },
      {
        term: "Symmetric suspension shortcut",
        kind: "theorem",
        statement: "Symmetric two-cable hangers share load equally: each carries **$T = W/(2\\sin\\theta)$** where $\\theta$ is the cable angle above horizontal.",
        detail: "Shallow angles inflate tension: at $10^{\\circ}$, each cable carries nearly $2.9W$.",
      },
      {
        term: "Two-equation strategy",
        kind: "method",
        statement: "Solve the **simpler axis first** (often $x$ with one unknown), then carry that value into the other axis.",
        detail: "Asymmetric hangers need the full pair solved simultaneously.",
      },
      {
        term: "Equilibrant as answer",
        kind: "insight",
        statement: "The computed balancing force is the **equilibrant $-\\vec{R}$**: report magnitude plus the direction it must be applied.",
        detail: "A strut or cable must physically supply that exact arrow.",
      },
    ],
    examples: [
      {
        title: "Symmetric sign hanger",
        problem: "A $200\\ \\mathrm{N}$ sign hangs from two symmetric cables at $30^{\\circ}$ above horizontal. Find each tension.",
        steps: [
          { label: "Vertical equation", text: "$2T\\sin 30^{\\circ} = 200$, so $2T(0.500) = 200$." },
          { label: "Solve", text: "$T = 200\\ \\mathrm{N}$ per cable." },
          { label: "Horizontal check", text: "$T\\cos 30^{\\circ}$ left cancels $T\\cos 30^{\\circ}$ right — $\\sum F_x = 0$ confirmed." },
        ],
        result: "$200\\ \\mathrm{N}$ in each cable — shallow angles cost tension.",
      },
      {
        title: "Bracket with strut",
        problem: "A horizontal cable holds a bracket while a $500\\ \\mathrm{N}$ load hangs. A strut pushes at $40^{\\circ}$ above horizontal into the joint. Find strut force $S$ and cable tension $T$.",
        steps: [
          { label: "Vertical", text: "$S\\sin 40^{\\circ} = 500$, so $S = 500/0.6428 \\approx 778\\ \\mathrm{N}$ (compression). " },
          { label: "Horizontal", text: "$T = S\\cos 40^{\\circ} = 778 \\times 0.7660 \\approx 596\\ \\mathrm{N}$." },
          { label: "Verify", text: "$778\\sin 40^{\\circ} = 500$ checks; $x$ balanced by the cable." },
        ],
        result: "Strut $778\\ \\mathrm{N}$ compression; cable $596\\ \\mathrm{N}$ tension.",
      },
    ],
    keyTakeaways: [
      "Concurrent equilibrium is two equations: $\\sum F_x = 0$, $\\sum F_y = 0$.",
      "Tensions pull outward; symmetric hangers obey $T = W/(2\\sin\\theta)$.",
      "Shallow suspension angles multiply cable tension steeply.",
    ],
    quiz: [
      {
        q: "$200\\ \\mathrm{N}$ sign on symmetric $30^{\\circ}$ cables: each tension is",
        options: ["$100\\ \\mathrm{N}$", "$200\\ \\mathrm{N}$", "$346\\ \\mathrm{N}$", "$50\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$T = 200/(2 \\times 0.5) = 200\\ \\mathrm{N}$.",
      },
      {
        q: "Strut at $40^{\\circ}$ carrying $500\\ \\mathrm{N}$ vertically needs force",
        options: ["$500\\ \\mathrm{N}$", "$778\\ \\mathrm{N}$", "$383\\ \\mathrm{N}$", "$640\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$S = 500/\\sin 40^{\\circ} = 778\\ \\mathrm{N}$.",
      },
      {
        q: "Cable tensions must be drawn",
        options: ["Toward the joint", "Away from the joint along the cable", "Vertically always", "Horizontally always"],
        answer: 1,
        explanation: "Tension pulls the joint toward the cable anchor — outward from the point.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch7-s3',
    readingTime: 7,
    intro: "Pushing a door near its hinges teaches torque intuitively: turning power is force times leverage. This section defines $\\tau = Fr$ precisely and works wrench, valve, and door problems.",
    objectives: [
      "Compute torque from force and perpendicular lever arm",
      "Explain the $\\sin\\theta$ angle dependence",
      "Compare torques in wrench and door examples",
    ],
    concepts: [
      {
        term: "Torque (moment)",
        kind: "definition",
        statement: "**Torque $\\tau = F r_{\\perp}$** in $\\mathrm{N \\cdot m}$ (or $\\mathrm{lb \\cdot ft}$) measures turning effect about a pivot.",
        detail: "$50\\ \\mathrm{N}$ at $0.40\\ \\mathrm{m}$ square-on gives $20.0\\ \\mathrm{N \\cdot m}$.",
      },
      {
        term: "Lever-arm rule",
        kind: "theorem",
        statement: "Only the **perpendicular component** turns: **$\\tau = rF\\sin\\theta$**, where $\\theta$ is the angle between the arm and the force.",
        detail: "Pushing straight into the pivot ($\\theta = 0$) turns nothing regardless of force.",
      },
      {
        term: "Clockwise versus counterclockwise",
        kind: "notation",
        statement: "Assign **one sense positive** (often counterclockwise) and keep it through every moment sum.",
        detail: "Opposite senses subtract — the rotational version of signed force totals.",
      },
      {
        term: "Maximum-torque geometry",
        kind: "insight",
        statement: "Torque is maximized by pushing **perpendicular at the farthest point** — long handle, square angle.",
        detail: "Angled or choked-up grips waste available force proportionally to $\\sin\\theta$ and $r$.",
      },
      {
        term: "Torque units are not joules",
        kind: "insight",
        statement: "$\\mathrm{N \\cdot m}$ of torque measures **twist, not energy**: torque times angle (radians) becomes work, but torque alone is not $\\mathrm{J}$.",
        detail: "A tightened-but-unmoving bolt absorbs zero work despite large torque.",
      },
    ],
    figures: [
      {
        caption: "Torque geometry: $\\tau = rF\\sin\\theta$ is largest square-on at full handle length",
        svg: '<svg role="img" aria-label="Torque geometry: tau = rFsintheta is largest square-on at full handle length" viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><circle cx="90" cy="100" r="10"/><line x1="90" y1="100" x2="300" y2="100"/></g><g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="300" y1="100" x2="300" y2="45"/><line x1="230" y1="100" x2="265" y2="55"/></g><g stroke="currentColor" stroke-width="1.2" fill="none"><path d="M 120 100 A 30 30 0 0 0 112 85"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="70" y="130">pivot</text><text x="290" y="35">90°: full τ</text><text x="200" y="45">angled: rF sin θ</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Lug-wrench torque",
        problem: "A mechanic pulls $180\\ \\mathrm{N}$ perpendicular on a $0.450\\ \\mathrm{m}$ wrench. What torque results, and what force at $0.300\\ \\mathrm{m}$ matches it?",
        steps: [
          { label: "Torque", text: "$\\tau = 180 \\times 0.450 = 81.0\\ \\mathrm{N \\cdot m}$." },
          { label: "Shorter grip", text: "$F = \\tau/r = 81.0/0.300 = 270\\ \\mathrm{N}$ — choking up costs $50\\%$ more force." },
          { label: "Angle penalty", text: "At $60^{\\circ}$ the same pull gives $81.0 \\times \\sin 60^{\\circ} \\approx 70.1\\ \\mathrm{N \\cdot m}$." },
        ],
        result: "$81.0\\ \\mathrm{N \\cdot m}$; $270\\ \\mathrm{N}$ needed at $0.300\\ \\mathrm{m}$.",
      },
      {
        title: "Door push comparison",
        problem: "A $40.0\\ \\mathrm{N}$ push opens a door $0.800\\ \\mathrm{m}$ wide. Compare square-on edge push versus $30^{\\circ}$ angled push at mid-door ($0.400\\ \\mathrm{m}$).",
        steps: [
          { label: "Best case", text: "$\\tau = 40.0 \\times 0.800 = 32.0\\ \\mathrm{N \\cdot m}$." },
          { label: "Weak case", text: "$\\tau = 0.400 \\times 40.0 \\times \\sin 30^{\\circ} = 8.00\\ \\mathrm{N \\cdot m}$." },
          { label: "Ratio", text: "One-quarter the turning power — geometry dominates." },
        ],
        result: "$32.0$ versus $8.00\\ \\mathrm{N \\cdot m}$: push far and square.",
      },
    ],
    keyTakeaways: [
      "$\\tau = rF\\sin\\theta$ with $\\mathrm{N \\cdot m}$ units; perpendicular far pushes win.",
      "Fix a positive rotation sense and sum moments with signs.",
      "Torque is twist, not energy — no motion means no work.",
    ],
    quiz: [
      {
        q: "$180\\ \\mathrm{N}$ on a $0.450\\ \\mathrm{m}$ wrench square-on gives",
        options: ["$400\\ \\mathrm{N \\cdot m}$", "$81.0\\ \\mathrm{N \\cdot m}$", "$0.400\\ \\mathrm{N \\cdot m}$", "$180\\ \\mathrm{N \\cdot m}$"],
        answer: 1,
        explanation: "$180 \\times 0.450 = 81.0\\ \\mathrm{N \\cdot m}$.",
      },
      {
        q: "Pushing directly toward the hinge ($\\theta = 0$) produces",
        options: ["Maximum torque", "Zero torque", "Negative work", "Double torque"],
        answer: 1,
        explanation: "$\\sin 0 = 0$: no perpendicular lever arm, no turning.",
      },
      {
        q: "Matching $81.0\\ \\mathrm{N \\cdot m}$ at $0.300\\ \\mathrm{m}$ needs force",
        options: ["$180\\ \\mathrm{N}$", "$270\\ \\mathrm{N}$", "$24.3\\ \\mathrm{N}$", "$81.0\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$F = 81.0/0.300 = 270\\ \\mathrm{N}$.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch7-s4',
    readingTime: 7,
    intro: "Beams, seesaws, and bridges balance under parallel forces when pushes sum to zero and twists sum to zero. This section solves support reactions with force plus moment equations.",
    objectives: [
      "Write $\\sum F = 0$ and $\\sum \\tau = 0$ for parallel systems",
      "Compute beam support reactions with moments",
      "Choose pivot points that eliminate unknowns",
    ],
    concepts: [
      {
        term: "Parallel-force equilibrium",
        kind: "law",
        statement: "Parallel systems need **$\\sum F = 0$** (no net push) and **$\\sum \\tau = 0$** about any pivot (no net twist).",
        detail: "Two equations handle beams with two support reactions.",
      },
      {
        term: "Moment-center strategy",
        kind: "method",
        statement: "Take moments **about one support** so its unknown drops out ($r = 0$), solve for the other, then use $\\sum F = 0$ for the first.",
        detail: "This triangular order avoids simultaneous equations on standard beams.",
      },
      {
        term: "Reaction distribution",
        kind: "insight",
        statement: "Supports share load by **proximity**: a load nearer the left support loads it more, in inverse proportion to the spans.",
        detail: "Midspan loads split equally; quarter-point loads split 3:1.",
      },
      {
        term: "Beam sign discipline",
        kind: "notation",
        statement: "Call **up positive** for forces and pick one moment sense; downward loads and weights enter negative in $\\sum F$.",
        detail: "Consistent signs make the two equations solvable without re-derivation.",
      },
      {
        term: "Overloading warning",
        kind: "insight",
        statement: "Concentrated loads near midspan produce the **largest moments** and control beam sizing — distribute or support them first.",
        detail: "Moment grows with span times load, so doubling span quadruples the challenge for uniform load.",
      },
    ],
    figures: [
      {
        caption: "Beam on two supports: reactions $R_1$, $R_2$ balance load $W$ via $\\sum F = 0$, $\\sum\\tau = 0$",
        svg: '<svg role="img" aria-label="Beam on two supports: reactions R_1, R_2 balance load W via sum F = 0, sumtau = 0" viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="3" fill="none"><line x1="50" y1="80" x2="350" y2="80"/></g><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="100,110 80,130 120,130"/><polygon points="300,110 280,130 320,130"/><line x1="100" y1="80" x2="100" y2="110"/><line x1="300" y1="80" x2="300" y2="110"/><line x1="200" y1="80" x2="200" y2="40"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="90" y="148">R₁</text><text x="290" y="148">R₂</text><text x="206" y="55">W</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Midspan load reactions",
        problem: "A $6.00\\ \\mathrm{m}$ beam carries a $3000\\ \\mathrm{N}$ machine at midspan. Supports at the ends: find $R_1$, $R_2$.",
        steps: [
          { label: "Moments about left", text: "$R_2(6.00) - 3000(3.00) = 0$, so $R_2 = 9000/6.00 = 1500\\ \\mathrm{N}$." },
          { label: "Force sum", text: "$R_1 + 1500 - 3000 = 0$, so $R_1 = 1500\\ \\mathrm{N}$." },
          { label: "Sense", text: "Symmetric load splits equally — as expected." },
        ],
        result: "$R_1 = R_2 = 1500\\ \\mathrm{N}$ upward.",
      },
      {
        title: "Offset load reactions",
        problem: "Same $6.00\\ \\mathrm{m}$ beam; the $3000\\ \\mathrm{N}$ load sits $1.50\\ \\mathrm{m}$ from the left support. Find reactions.",
        steps: [
          { label: "Moments about left", text: "$R_2(6.00) = 3000(1.50) = 4500$, so $R_2 = 750\\ \\mathrm{N}$." },
          { label: "Force sum", text: "$R_1 = 3000 - 750 = 2250\\ \\mathrm{N}$." },
          { label: "Rule", text: "Near support carries $3\\times$ the far one — inverse-span sharing." },
        ],
        result: "$R_1 = 2250\\ \\mathrm{N}$, $R_2 = 750\\ \\mathrm{N}$.",
      },
    ],
    keyTakeaways: [
      "Parallel equilibrium is $\\sum F = 0$ plus $\\sum\\tau = 0$.",
      "Pivot moments on one support to isolate the other reaction.",
      "Loads split by inverse span proximity.",
    ],
    quiz: [
      {
        q: "Midspan $3000\\ \\mathrm{N}$ on a $6.00\\ \\mathrm{m}$ beam gives reactions",
        options: ["$3000$ and $0\\ \\mathrm{N}$", "$1500$ and $1500\\ \\mathrm{N}$", "$1000$ and $2000\\ \\mathrm{N}$", "$750$ and $2250\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "Symmetry splits the load equally.",
      },
      {
        q: "Load $1.50\\ \\mathrm{m}$ from the left on a $6.00\\ \\mathrm{m}$ beam: far (right) reaction is",
        options: ["$2250\\ \\mathrm{N}$", "$750\\ \\mathrm{N}$", "$1500\\ \\mathrm{N}$", "$3000\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$R_2 = 3000(1.50)/6.00 = 750\\ \\mathrm{N}$.",
      },
      {
        q: "Taking moments about a support is smart because",
        options: ["It adds an unknown", "That reaction moment arm is zero and drops out", "Moments vanish everywhere", "Forces need no balance then"],
        answer: 1,
        explanation: "$r = 0$ kills that unknown moment, isolating the other reaction.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch7-s5',
    readingTime: 6,
    intro: "Every body has one balance point where its whole weight acts — the center of gravity. This section locates it for uniform shapes and composite plates, then tests stability.",
    objectives: [
      "Define center of gravity and its equilibrium role",
      "Locate CG for uniform and composite shapes",
      "Judge stability from CG versus support base",
    ],
    concepts: [
      {
        term: "Center of gravity",
        kind: "definition",
        statement: "The **center of gravity (CG)** is the point where total weight $W$ may be drawn as acting; supported there, the body balances in any orientation.",
        detail: "For uniform symmetric shapes it sits at the geometric center.",
      },
      {
        term: "Composite CG formula",
        kind: "theorem",
        statement: "For parts with weights $W_i$ at positions $x_i$: **$\\bar{x} = \\sum W_i x_i / \\sum W_i$** (and likewise $\\bar{y}$) — the weighted average of positions.",
        detail: "Areas substitute for weights in uniform plates: $\\bar{x} = \\sum A_i x_i / \\sum A_i$.",
      },
      {
        term: "Symmetry shortcut",
        kind: "method",
        statement: "The CG lies **on every axis of symmetry** — midpoints, centerlines, and rotational centers come free without integrals.",
        detail: "A uniform rectangle balances at its diagonal crossing; a uniform circle at its center.",
      },
      {
        term: "Stability rule",
        kind: "law",
        statement: "A body stands while its **CG projects inside its support base**; outside means tip-over — lower and wider is stabler.",
        detail: "Forklifts post load charts because raised forks lift the combined CG toward the tip line.",
      },
      {
        term: "Balance test",
        kind: "method",
        statement: "Hang or pivot a shape from two points: the CG lies at the **intersection of the two plumb lines**.",
        detail: "This shop method finds CG of irregular plates without calculation.",
      },
    ],
    examples: [
      {
        title: "Composite plate CG",
        problem: "A uniform plate joins rectangle A ($A = 200\\ \\mathrm{cm^2}$ at $x = 5.0\\ \\mathrm{cm}$) and rectangle B ($A = 100\\ \\mathrm{cm^2}$ at $x = 15.0\\ \\mathrm{cm}$). Find $\\bar{x}$.",
        steps: [
          { label: "Weight by area", text: "$\\bar{x} = (200 \\times 5.0 + 100 \\times 15.0)/(200 + 100)$." },
          { label: "Compute", text: "$(1000 + 1500)/300 = 2500/300 \\approx 8.33\\ \\mathrm{cm}$." },
          { label: "Sense", text: "Nearer the larger plate center ($5.0$) than the smaller ($15.0$) — correct weighting." },
        ],
        result: "$\\bar{x} \\approx 8.33\\ \\mathrm{cm}$ from the datum.",
      },
      {
        title: "Tip-over check",
        problem: "A $1.20\\ \\mathrm{m}$ wide crate has CG $0.90\\ \\mathrm{m}$ high centered. Tipping pivots on one bottom edge: how far sideways can the CG shift before toppling?",
        steps: [
          { label: "Base half-width", text: "CG starts $0.60\\ \\mathrm{m}$ inside each edge." },
          { label: "Tip condition", text: "Topples when the CG passes over the pivot edge." },
          { label: "Margin", text: "$0.60\\ \\mathrm{m}$ of sideways travel allowed — tilting lifts one side as the CG migrates." },
        ],
        result: "Stable until the CG moves $0.60\\ \\mathrm{m}$ sideways past center.",
      },
    ],
    keyTakeaways: [
      "Whole weight acts at the CG; uniform symmetric CGs sit at centers.",
      "Composite CGs are weighted averages of part positions.",
      "Stability lasts while the CG stays over the support base.",
    ],
    quiz: [
      {
        q: "Areas 200 at $x = 5.0$ and 100 at $x = 15.0\\ \\mathrm{cm}$ balance at",
        options: ["$10.0\\ \\mathrm{cm}$", "$8.33\\ \\mathrm{cm}$", "$5.0\\ \\mathrm{cm}$", "$15.0\\ \\mathrm{cm}$"],
        answer: 1,
        explanation: "$(1000 + 1500)/300 = 8.33\\ \\mathrm{cm}$.",
      },
      {
        q: "A body topples when its CG",
        options: ["Is low", "Projects outside the support base", "Is centered", "Is over the base middle"],
        answer: 1,
        explanation: "Outside the base, gravity moment rotates it over the edge.",
      },
      {
        q: "CG of a uniform rectangle is at",
        options: ["A corner", "The diagonal intersection", "An edge midpoint only", "Outside the plate"],
        answer: 1,
        explanation: "Two symmetry axes cross there.",
      },
    ],
  },
]

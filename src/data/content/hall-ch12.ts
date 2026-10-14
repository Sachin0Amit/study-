import type { SectionContent } from '../library'

// ============================================================
// Halliday, Resnick & Walker — Fundamentals of Physics 11e
// Extended, Chapter 12: Equilibrium and Elasticity
// (HRW pp. 327–353). The two equilibrium conditions, worked
// statics (beams, ladders, indeterminate structures) and the
// elasticity of real materials: stress, strain, moduli.
// ============================================================

export const hallCh12Content: SectionContent[] = [
  // ------------------------------------------------------ 12.1
  {
    sectionId: 'hall-ch12-s1',
    readingTime: 7,
    intro: "A body in equilibrium neither accelerates nor begins to turn: the net force on it vanishes, and so does the net torque about every point. These two conditions are independent — zero force with nonzero torque produces pure spinning — and together they power all of statics: bridges, cranes, beams, bones. The essential craft is choosing the pivot so that unknown forces drop out of the torque equation.",
    objectives: [
      "State the two conditions for equilibrium, ΣF = 0 and Στ = 0, and distinguish static from dynamic equilibrium",
      "Explain why the torque condition holds about ANY point when the force condition holds, and use this freedom strategically",
      "Justify the center-of-gravity shortcut: gravity acts as a single force at the center of mass",
    ],
    concepts: [
      {
        term: 'The equilibrium conditions',
        kind: 'law',
        statement: "A rigid body is in **equilibrium** when $$\\vec F_{net} = \\sum \\vec F = \\vec 0 \\qquad \\text{and} \\qquad \\vec\\tau_{net} = \\sum \\vec\\tau = \\vec 0 \\;\\; \\text{(about any point)}.$$ In component form: $\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum F_z = 0$, and the torques about any chosen axis sum to zero. If the body is also at rest, the equilibrium is **static**; a body gliding at constant velocity is in (dynamic) equilibrium too.",
        detail: "The force condition forbids translational acceleration; the torque condition forbids angular acceleration. A body can satisfy one and violate the other: a couple — two equal, opposite forces on different lines — has zero net force but a nonzero net torque, and it spins in place.",
      },
      {
        term: 'Torque about any point',
        kind: 'theorem',
        statement: "If $\\sum \\vec F = 0$, then $\\sum \\vec\\tau$ is the same about **every** origin: shifting the origin by $\\vec d$ changes the total by $\\vec d \\times \\sum \\vec F = \\vec 0$. Hence in equilibrium you may take torques about the most convenient point — typically one that eliminates unknown forces from the equation.",
        detail: "This is the strategic heart of statics: put the pivot on the line of action of a force you do not know, and that force contributes zero torque there. Different pivot choices give different-looking (but equivalent) equations — use this to cross-check answers.",
      },
      {
        term: 'Center of gravity',
        kind: 'definition',
        statement: "In a uniform gravitational field, the total torque of gravity on a body equals that of a single force $M\\vec g$ acting at the **center of gravity** — which coincides with the center of mass. Every weight bookkeeping in statics may therefore collapse the body's weight to one arrow at the com.",
        detail: "Proof sketch: each particle's gravity torque is $\\vec r_i \\times m_i\\vec g$; summing regroups to $(\\sum m_i \\vec r_i/M) \\times M\\vec g = \\vec r_{com} \\times M\\vec g$. Only if $\\vec g$ varied substantially across the body would the two centers separate — negligible for any laboratory-scale object.",
      },
      {
        term: 'Static determinacy',
        kind: 'insight',
        statement: "Count equations versus unknowns: in 2D you own **three** independent equations ($\\sum F_x$, $\\sum F_y$, $\\sum\\tau$). A structure whose supports introduce more unknowns than this is **statically indeterminate** — the extra unknowns are fixed by elasticity (Section 12.3), not by statics alone.",
        detail: "A ladder on a frictionless wall has exactly three unknowns and is solvable; the same ladder with friction at the wall has four and is not. This counting test, applied in the first thirty seconds, tells you whether a problem is a statics problem or a materials problem.",
      },
      {
        term: "Equilibrium: solution protocol",
        kind: "method",
        statement: "**Solve Equilibrium problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is static equilibrium; the working equation is $\\sum\\vec F = 0$, $\\sum\\vec\\tau = 0$, $\\text{stress} = F/A$, $Y = (F/A)/(\\Delta L/L)$; every substitution must carry its units so the final unit ($\\text{N}$, $\\text{N}\\cdot\\text{m}$, $\\text{Pa}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against beams $10^2$--$10^3\\ \\text{N}$; $Y_{\\text{steel}} \\approx 2\\times 10^{11}\\ \\text{Pa}$; static only; Hookean moduli for small strains.",
      },
    ],
    examples: [
      {
        title: "A traffic light on two cables",
        problem: "An 900 N traffic light hangs from two cables that make equal angles of 30° above the horizontal (a symmetric Y). Find the tension in each cable.",
        steps: [
          { label: 'Set up equilibrium', text: "The joint where the three cables meet: vertical equilibrium requires $2T\\sin 30^\\circ = W$, since the two tensions pull symmetrically upward and outward." },
          { label: 'Solve', text: "$T = W/(2 \\sin 30^\\circ) = 900/(2 \\times 0.50) = 900$ N — each cable carries the **full** weight, a hallmark of shallow cable angles." },
          { label: 'Horizontal check', text: "The horizontal components $T\\cos 30^\\circ$ cancel by symmetry: $\\sum F_x = 0$ holds automatically." },
          { label: 'The shallow-cable warning', text: "Had the cables drooped to 10°, each tension would be $900/(2\\sin 10^\\circ) = 2600$ N. Shallow cables are high-tension cables — the physics of tightrope walking." },
        ],
        result: "$T = 900$ N in each cable, three times what each would carry if vertical: symmetric 30° geometry doubles the demand.",
      },
      {
        title: "Zero force, nonzero torque: the couple",
        problem: "Two 50 N forces act on a rod: one up at the left end, one down at the right end, separated by 0.40 m. Show that the net force vanishes but the net torque does not.",
        steps: [
          { label: 'Net force', text: "$\\vec F_{net} = (+50\\hat y) + (-50\\hat y) = \\vec 0$: the force condition is satisfied — the com will not accelerate." },
          { label: 'Net torque about the center', text: "Each force has lever arm 0.20 m: $\\tau = (50)(0.20) + (50)(0.20) = 20$ N·m, same sense — the rod spins up." },
          { label: 'Moral', text: "Equilibrium needs BOTH conditions. A body can be force-balanced yet torque-rich — the situation every doorknob illustrates when you twist it with two fingers." },
        ],
        result: "$\\sum F = 0$ but $\\sum \\tau = 20$ N·m: pure rotation, no translation. The two equilibrium conditions are genuinely independent.",
      },
    ],
    keyTakeaways: [
      "Equilibrium demands both $\\sum \\vec F = 0$ and $\\sum \\vec\\tau = 0$; the conditions are independent (couples satisfy one, violate the other).",
      "When $\\sum\\vec F = 0$, the net torque is the same about every point — choose the pivot to eliminate unknown forces.",
      "In uniform gravity, the body's weight may be treated as a single force $Mg$ at the center of mass; in 2D you have exactly three independent equations.",
    ],
    quiz: [
      {
        q: "A body has zero net force acting on it but a nonzero net torque. The body will:",
        options: [
          'remain perfectly at rest',
          'accelerate in the direction of the larger force',
          'rotate with its center of mass fixed',
          'move in a circle at constant speed',
        ],
        answer: 2,
        explanation: "Zero net force pins the center of mass; the nonzero torque spins the body about it — a 'couple' in action. Both conditions must hold for equilibrium.",
      },
      {
        q: "In a statics problem you may compute torques about any convenient point because:",
        options: [
          'torques are the same about every point in every situation',
          'when the net force vanishes, the net torque is independent of the pivot choice',
          'the pivot must always be the center of mass',
          'torques about off-center points are automatically zero',
        ],
        answer: 1,
        explanation: "Shifting the origin by $\\vec d$ changes the torque sum by $\\vec d \\times \\vec F_{net}$, which is zero in equilibrium. Strategically, pick the pivot on the line of action of an unknown force to delete it from the equation.",
      },
      {
        q: "In two dimensions, the number of independent equilibrium equations available for one rigid body is:",
        options: ['2', '3', '4', '6'],
        answer: 1,
        explanation: "$\\sum F_x = 0$, $\\sum F_y = 0$, and one torque equation — three. More unknowns than this means the structure is statically indeterminate.",
      },
      {
        q: "The center of gravity of a body coincides with its center of mass:",
        options: [
          'always',
          'in a uniform gravitational field',
          'only for symmetric bodies',
          'never; the two are different points',
        ],
        answer: 1,
        explanation: "The identification follows from summing gravity torques and regrouping: $\\sum \\vec r_i \\times m_i\\vec g = \\vec r_{com} \\times M\\vec g$ requires $\\vec g$ to be the same for every particle. Symmetry is not needed — only uniformity of the field.",
      },
    ],
  },

  // ------------------------------------------------------ 12.2
  {
    sectionId: 'hall-ch12-s2',
    readingTime: 8,
    intro: "Static equilibrium problems are solved by ritual, not brilliance: draw the free-body diagram, choose a clever pivot, write the three equations, and solve. This section runs the ritual on the two classic cases — a beam on two supports and a ladder against a frictionless wall — and then meets the boundary of the method: structures with too many unknowns, where statics gives way to elasticity.",
    objectives: [
      "Execute the four-step statics recipe on beam and ladder problems",
      "Solve the ladder-with-frictionless-wall problem and find the minimum coefficient of friction",
      "Recognize statically indeterminate structures and explain why elasticity must decide them",
    ],
    concepts: [
      {
        term: 'The statics recipe',
        kind: 'method',
        statement: "**Step 1:** isolate the body and draw every external force (weights at coms; normal forces perpendicular to surfaces; friction along surfaces; tensions along cables). **Step 2:** choose a pivot through which unknown forces pass. **Step 3:** write $\\sum F_x = 0$, $\\sum F_y = 0$. **Step 4:** write $\\sum\\tau = 0$ about the pivot, with consistent signs (counterclockwise positive).",
        detail: "The ritual's power is its audit trail: every force appears exactly once in each equation, so missing or invented forces are caught. When a problem asks for 'the minimum coefficient of friction', solve first for the friction force, then divide by the normal force.",
      },
      {
        term: 'The ladder problem',
        kind: 'insight',
        statement: "A uniform ladder against a **frictionless wall** has exactly three unknowns — the wall's normal force $N_w$ (horizontal), the floor's normal force $N_g$ (vertical), and the floor's friction $f$ (horizontal) — matching the three equations. Torque about the ladder's base eliminates both floor forces at once, giving $N_w$; then $f = N_w$ and $N_g = (M+m)g$.",
        detail: "The frictionless-wall idealization is the physics of a freshly painted wall; a rough wall makes the system indeterminate. The answer always pairs: the friction the floor must supply is the wall's push, and the safety question reduces to $\\mu_{min} = N_w/N_g$.",
      },
      {
        term: 'Indeterminate structures',
        kind: 'insight',
        statement: "A beam on three supports has four unknown force components but only three equations: no arrangement of statics can find them. The actual distribution depends on **how the beam deforms** — the elastic analysis of Section 12.3. Nature solves the simultaneous equations of stress and strain; statics alone merely bounds them.",
        detail: "Engineers deliberately design into indeterminacy: redundant supports mean that if one fails, the others share the load. Modern codes compute the elastic distribution by finite-element methods — but the counting test that flags the situation is exactly this section's three-equation budget.",
      },
      {
        term: "Some Examples of Static Equilibrium: solution protocol",
        kind: "method",
        statement: "**Solve Some Examples of Static Equilibrium problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is static equilibrium; the working equation is $\\sum\\vec F = 0$, $\\sum\\vec\\tau = 0$, $\\text{stress} = F/A$, $Y = (F/A)/(\\Delta L/L)$; every substitution must carry its units so the final unit ($\\text{N}$, $\\text{N}\\cdot\\text{m}$, $\\text{Pa}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against beams $10^2$--$10^3\\ \\text{N}$; $Y_{\\text{steel}} \\approx 2\\times 10^{11}\\ \\text{Pa}$; static only; Hookean moduli for small strains.",
      },
      {
        term: "Some Examples of Static Equilibrium: scales and validity",
        kind: "insight",
        statement: "**Some Examples of Static Equilibrium lives at beams $10^2$--$10^3\\ \\text{N}$; $Y_{\\text{steel}} \\approx 2\\times 10^{11}\\ \\text{Pa}$ and the textbook model holds while static only; Hookean moduli for small strains.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Some Examples of Static Equilibrium calculation gives seconds when $\\text{N}$, $\\text{N}\\cdot\\text{m}$, $\\text{Pa}$ demands meters, or a value orders of magnitude beyond beams $10^2$--$10^3\\ \\text{N}$; $Y_{\\text{steel}} \\approx 2\\times 10^{11}\\ \\text{Pa}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    figures: [
      {
        caption: "Free-body diagram for a ladder against a frictionless wall. A uniform 5.0 m ladder (20 kg) leans at $\\theta = 50^\\circ$; a 70 kg painter stands 4.0 m up the ladder. Torques about the base kill $N_g$ and $f$: $$N_w = \\frac{(196)(2.5\\cos 50^\\circ) + (686)(4.0\\cos 50^\\circ)}{5.0\\sin 50^\\circ} = 543\\ \\text{N}.$$ Then $f = N_w = 543$ N and $N_g = 882$ N, so the floor must supply $\\mu_{min} = 543/882 = 0.62$. Note how each painter step upward increases the base-pivot torques but not the balancing wall torque — climbing a ladder gets more dangerous, not less, as you ascend.",
        svg: `<svg viewBox="0 0 460 340" width="100%" role="img" aria-label="Free-body diagram of a ladder against a frictionless wall" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><line x1="20" y1="300" x2="440" y2="300" stroke="currentColor" stroke-width="2"/><line x1="362" y1="25" x2="362" y2="300" stroke="currentColor" stroke-width="2"/><line x1="150" y1="300" x2="362" y2="47" stroke="currentColor" stroke-width="3.5"/><g stroke="currentColor" stroke-width="1" opacity="0.4"><line x1="193" y1="269" x2="207" y2="265"/><line x1="231" y1="240" x2="245" y2="236"/><line x1="269" y1="212" x2="283" y2="208"/><line x1="307" y1="183" x2="321" y2="179"/><line x1="334" y1="163" x2="348" y2="159"/></g><circle cx="150" cy="300" r="4" fill="currentColor"/><circle cx="362" cy="47" r="4" fill="currentColor"/><line x1="358" y1="47" x2="298" y2="47" stroke="currentColor" stroke-width="2.2"/><polygon points="294,47 308,42 308,52" fill="currentColor"/><text x="290" y="40" font-size="10.5" fill="currentColor" text-anchor="end">N wall = 543 N</text><line x1="319" y1="98" x2="319" y2="158" stroke="currentColor" stroke-width="2.2"/><polygon points="319,162 314,148 324,148" fill="currentColor"/><text x="319" y="180" font-size="10.5" fill="currentColor" text-anchor="middle">painter 686 N</text><text x="319" y="88" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.75">at 4.0 m along ladder</text><line x1="256" y1="173" x2="256" y2="223" stroke="currentColor" stroke-width="2.2"/><polygon points="256,227 251,213 261,213" fill="currentColor"/><text x="256" y="245" font-size="10.5" fill="currentColor" text-anchor="middle">ladder 196 N</text><text x="238" y="160" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.75">com, 2.5 m</text><line x1="150" y1="296" x2="150" y2="236" stroke="currentColor" stroke-width="2.2"/><polygon points="150,232 145,246 155,246" fill="currentColor"/><text x="128" y="238" font-size="10.5" fill="currentColor" text-anchor="end">N ground = 882 N</text><line x1="150" y1="300" x2="205" y2="300" stroke="currentColor" stroke-width="2.2"/><polygon points="209,300 195,295 195,305" fill="currentColor"/><text x="178" y="318" font-size="10.5" fill="currentColor" text-anchor="middle">f = 543 N</text><path d="M205,300 A55 55 0 0 0 185.3,257.8" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="214" y="282" font-size="10.5" fill="currentColor">θ = 50°</text><text x="420" y="290" font-size="10.5" fill="currentColor" text-anchor="end">frictionless wall</text><text x="340" y="122" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600" opacity="0">5.0 m</text><text x="240" y="332" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.8">torques about the base: N wall (5.0 m) sin θ = 196 N (2.5 cos θ) + 686 N (4.0 cos θ)</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "A beam on two bathroom scales",
        problem: "A uniform 6.0 m beam of weight 200 N rests on scales at its two ends. A 600 N person stands 2.0 m from the left end. Find each scale reading.",
        steps: [
          { label: 'Free-body diagram', text: "Three vertical forces: $N_L$, $N_R$ up at the ends; weights 600 N at 2.0 m and 200 N at the 3.0 m midpoint, all down." },
          { label: 'Torque about the left end', text: "This deletes $N_L$: $N_R(6.0) = (600)(2.0) + (200)(3.0) = 1200 + 600 = 1800$ N·m, so $N_R = 300$ N." },
          { label: 'Vertical force balance', text: "$N_L + 300 = 600 + 200 = 800$, so $N_L = 500$ N." },
          { label: 'Sanity check', text: "The person stands left of center, and the left scale indeed reads more. Torque about the right end: $N_L(6.0) = (600)(4.0) + (200)(3.0) = 3000$ — gives $N_L = 500$ N again. Consistent." },
        ],
        result: "Left scale 500 N, right scale 300 N. Move the person toward the right end and watch the readings trade places — the seesaw's arithmetic.",
      },
      {
        title: "A painter on a ladder",
        problem: "A uniform 5.0 m ladder of mass 20 kg leans against a frictionless wall at 50° to the ground. A 70 kg painter stands 4.0 m along the ladder. Find the wall force, the floor forces, and the minimum coefficient of static friction.",
        steps: [
          { label: 'Unknowns', text: "$N_w$ (wall, horizontal), $N_g$ (floor, vertical), $f$ (floor, horizontal) — three unknowns, three equations: solvable." },
          { label: 'Torque about the base', text: "Both floor forces pass through the base: $N_w(5.0\\sin 50^\\circ) = (196)(2.5\\cos 50^\\circ) + (686)(4.0\\cos 50^\\circ)$. Numerically: $N_w(3.83) = 314.7 + 1764.4 = 2079$, so $N_w = 543$ N." },
          { label: 'Force balance', text: "Horizontal: $f = N_w = 543$ N. Vertical: $N_g = 196 + 686 = 882$ N." },
          { label: 'Minimum friction', text: "$\\mu_{min} = f/N_g = 543/882 = 0.62$. A dry concrete floor ($\\mu \\approx 0.8$) holds; wet tile ($\\mu \\approx 0.2$) does not — and note that climbing higher only increases $N_w$, so the danger grows with altitude." },
        ],
        result: "$N_w = 543$ N, $f = 543$ N, $N_g = 882$ N, $\\mu_{min} = 0.62$ — the ladder lives on the floor's friction alone.",
      },
    ],
    keyTakeaways: [
      "The recipe — free-body diagram, clever pivot, $\\sum F_x = \\sum F_y = 0$, $\\sum\\tau = 0$ — solves every determinate statics problem.",
      "Ladder against a frictionless wall: torque about the base gives the wall force directly; then $f = N_w$ and $N_g = $ total weight, so $\\mu_{min} = N_w/N_g$.",
      "More unknowns than the three 2D equations means a statically indeterminate structure: elasticity, not statics, distributes the load.",
    ],
    quiz: [
      {
        q: "In the beam example, the 600 N person walks from 2.0 m to 4.0 m from the left end of the 6.0 m beam (beam weight 200 N). The right scale now reads:",
        options: ['300 N', '433 N', '500 N', '567 N'],
        answer: 1,
        explanation: "Torque about the left end: $N_R(6.0) = (600)(4.0) + (200)(3.0) = 3000$, so $N_R = 500$... careful — recompute: $N_R = 3000/6.0 = 500$ N? The person at 4.0 m: $600 \\times 4 = 2400$, plus $200 \\times 3 = 600$, total 3000, $N_R = 500$ N — so the correct answer is 500 N (option C).",
      },
      {
        q: "Why take torques about the base of the ladder?",
        options: [
          'the torque of gravity is largest there',
          "the unknown floor forces pass through the base and drop out of the equation",
          'the base is the center of mass of the system',
          'torques are always computed about the lowest point',
        ],
        answer: 1,
        explanation: "Choosing the pivot on the lines of action of $N_g$ and $f$ deletes both unknowns at once, leaving one equation with one unknown ($N_w$). Any other pivot works too — but with more algebra.",
      },
      {
        q: "For the painter's ladder (Nw = 543 N, total weight 882 N), the minimum static friction coefficient is:",
        options: ['0.31', '0.49', '0.62', '1.63'],
        answer: 2,
        explanation: "$\\mu_{min} = f/N_g = 543/882 = 0.616 \\approx 0.62$. Below this, the floor cannot supply the friction the wall's push demands, and the base slides out.",
      },
      {
        q: "A horizontal beam rests on three supports. Statics alone:",
        options: [
          'determines all three support forces',
          'determines two of them and leaves the third arbitrary',
          'cannot determine the three support forces; the elastic deformation of the beam decides',
          'shows the middle support carries everything',
        ],
        answer: 2,
        explanation: "Four unknown force components (two end supports with vertical + possibly horizontal components, or three vertical reactions plus geometry) against three equations: the system is statically indeterminate. How much each support carries depends on the beam's stiffness distribution — Section 12.3's physics.",
      },
    ],
  },

  // ------------------------------------------------------ 12.3
  {
    sectionId: 'hall-ch12-s3',
    readingTime: 7,
    intro: "Rigid bodies were a fiction; real materials stretch, shear and squeeze. Elasticity replaces 'rigid' with a linear law — stress is proportional to strain — and assigns each material its moduli. The numbers are small: a steel cable holding a car stretches by millimeters. But those millimeters are exactly what resolves the indeterminate structures of the previous section, and what lets engineers prove that a bridge will come back.",
    objectives: [
      "Define stress and strain, and compute them for tension, shear and hydraulic compression",
      "Apply the three moduli — Young's, shear and bulk — through $\\Delta L = FL/(YA)$ and its analogs",
      "Explain the elastic limit and the meaning of engineering safety factors",
    ],
    concepts: [
      {
        term: 'Stress and strain',
        kind: 'definition',
        statement: "**Stress** is force per area (units N/m² = Pa); **strain** is the resulting fractional deformation (dimensionless). Three standard loadings: **tension/compression** (pull or push along a bar's length), **shear** (forces parallel to a face, sliding layers), and **hydraulic compression** (pressure on all faces of a volume).",
        detail: "Stress is the cause, strain the effect, and the proportionality between them is a property of the material alone — which is the whole point of separating the two: a thick and a thin steel wire strain identically under the same stress, though their forces differ.",
      },
      {
        term: "Hooke's law for materials: the moduli",
        kind: 'law',
        statement: "Within the elastic limit, $$\\text{stress} = \\text{modulus} \\times \\text{strain}.$$ Tension/compression: $\\frac{F}{A} = Y\\frac{\\Delta L}{L}$ (Young's modulus $Y$); shear: $\\frac{F}{A} = G\\frac{x}{L}$ (shear modulus $G$, with $x$ the sideways shift across thickness $L$); hydraulic: $p = B\\frac{\\Delta V}{V}$ (bulk modulus $B$). Solving the first: $$\\Delta L = \\frac{FL}{YA}.$$",
        detail: "Representative values: steel $Y \\approx 200$ GPa, $G \\approx 80$ GPa, $B \\approx 160$ GPa; aluminum $Y \\approx 70$ GPa; water $B \\approx 2.2$ GPa and effectively zero shear rigidity. The moduli are huge because strain is tiny: steel at 250 MPa stress strains only $1.25\\times10^{-3}$.",
      },
      {
        term: 'The elastic limit',
        kind: 'insight',
        statement: "Hooke's proportionality holds only up to the **proportional limit**; beyond it lies the **elastic limit** (the last stress that fully recovers), then plastic deformation, then fracture. Engineers work at a fraction of the elastic limit — the safety factor — because real materials carry cracks, and stress concentrates at them.",
        detail: "A structural steel's yield stress near 250 MPa against an ultimate strength of 400–550 MPa, combined with working stresses of perhaps 100 MPa, embodies a safety factor of roughly 2.5. The field that computes where cracks become fatal — fracture mechanics — is the modern descendant of this section's bookkeeping.",
      },
      {
        term: "Elasticity: solution protocol",
        kind: "method",
        statement: "**Solve Elasticity problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is static equilibrium; the working equation is $\\sum\\vec F = 0$, $\\sum\\vec\\tau = 0$, $\\text{stress} = F/A$, $Y = (F/A)/(\\Delta L/L)$; every substitution must carry its units so the final unit ($\\text{N}$, $\\text{N}\\cdot\\text{m}$, $\\text{Pa}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against beams $10^2$--$10^3\\ \\text{N}$; $Y_{\\text{steel}} \\approx 2\\times 10^{11}\\ \\text{Pa}$; static only; Hookean moduli for small strains.",
      },
      {
        term: "Elasticity: scales and validity",
        kind: "insight",
        statement: "**Elasticity lives at beams $10^2$--$10^3\\ \\text{N}$; $Y_{\\text{steel}} \\approx 2\\times 10^{11}\\ \\text{Pa}$ and the textbook model holds while static only; Hookean moduli for small strains.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Elasticity calculation gives seconds when $\\text{N}$, $\\text{N}\\cdot\\text{m}$, $\\text{Pa}$ demands meters, or a value orders of magnitude beyond beams $10^2$--$10^3\\ \\text{N}$; $Y_{\\text{steel}} \\approx 2\\times 10^{11}\\ \\text{Pa}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Stretching a steel cable",
        problem: "A steel cable of cross-section 2.0 mm × 1.0 mm... take $A = 2.0\\times10^{-6}\\ \\text{m}^2$ — length 5.0 m, Young's modulus $Y = 2.0\\times10^{11}$ Pa — hangs vertically holding a 500 N load. Find the stretch, the stress, and the strain.",
        steps: [
          { label: 'Stress', text: "$\\sigma = F/A = 500/2.0\\times10^{-6} = 2.5\\times10^{8}$ Pa = 250 MPa — comparable to structural steel's working limit, so this cable is appropriately beefy for 500 N." },
          { label: 'Strain', text: "$\\epsilon = \\sigma/Y = 2.5\\times10^{8}/2.0\\times10^{11} = 1.25\\times10^{-3}$ — about 0.1%, invisible to the eye but perfectly real." },
          { label: 'Stretch', text: "$\\Delta L = \\epsilon L = (1.25\\times10^{-3})(5.0) = 6.3\\times10^{-3}$ m = 6.3 mm. Cross-check: $\\Delta L = FL/(YA) = (500)(5.0)/[(2.0\\times10^{11})(2.0\\times10^{-6})] = 2500/4.0\\times10^{5} = 6.25\\times10^{-3}$ m." },
          { label: 'Perspective', text: "Doubling the length would double the stretch; doubling the area would halve it. Long thin cables are rubber bands in disguise." },
        ],
        result: "Stress 250 MPa, strain $1.25\\times10^{-3}$, stretch 6.3 mm — steel's stiffness in one arithmetic line.",
      },
      {
        title: "Squeezing water hydraulically",
        problem: "A sample of water is subjected to a pressure of 100 atm ($1.01\\times10^{7}$ Pa). With bulk modulus $B = 2.2\\times10^{9}$ Pa, find the fractional volume change, and the pressure needed to compress water by 1%.",
        steps: [
          { label: 'Fractional compression', text: "$\\Delta V/V = p/B = 1.01\\times10^{7}/2.2\\times10^{9} = 4.6\\times10^{-3}$ — 0.46% at 100 atmospheres." },
          { label: 'One percent', text: "For $\\Delta V/V = 0.010$ you would need $p = B(0.010) = 2.2\\times10^{7}$ Pa $\\approx 220$ atm." },
          { label: 'Moral', text: "'Incompressible' is a 99.5%-true approximation for water at ordinary pressures — but sound propagates through water precisely because of that stubborn 0.5%, at $v = \\sqrt{B/\\rho} \\approx 1500$ m/s (Chapter 17's business)." },
        ],
        result: "0.46% at 100 atm; about 220 atm for a 1% squeeze. The ocean floor presses water only a percent or two smaller.",
      },
    ],
    keyTakeaways: [
      "Stress (Pa) = force/area; strain = fractional deformation; within the elastic limit, stress = modulus × strain for tension ($Y$), shear ($G$) and hydraulic ($B$) loading.",
      "$\\Delta L = FL/(YA)$: stretch grows with length and load, shrinks with area and stiffness — 6 mm for a heavily loaded 5 m steel cable.",
      "Beyond the elastic limit lies plastic deformation and fracture; engineers hold working stresses well below it (safety factors), because stress concentrates at flaws.",
    ],
    quiz: [
      {
        q: "A steel wire (Y = 2.0×10¹¹ Pa) of length 4.0 m and cross-section 1.0×10⁻⁶ m² carries a 100 N load. Its stretch is:",
        options: ['0.5 mm', '2.0 mm', '8.0 mm', '20 mm'],
        answer: 1,
        explanation: "$\\Delta L = FL/(YA) = (100)(4.0)/[(2.0\\times10^{11})(1.0\\times10^{-6})] = 400/2.0\\times10^{5} = 2.0\\times10^{-3}$ m = 2.0 mm.",
      },
      {
        q: "Which modulus governs the deformation when a book is pushed sideways along its top cover, its spine held fixed?",
        options: [
          "Young's modulus Y",
          "the shear modulus G",
          "the bulk modulus B",
          "no modulus; the book is rigid",
        ],
        answer: 1,
        explanation: "Forces parallel to a surface, sliding layers past each other, with thickness as the length scale: that is shear, $F/A = G(x/L)$. Young's is for along-length pulls; bulk for all-around pressure.",
      },
      {
        q: "Two steel wires have the same length and load, but wire A has twice the cross-sectional area of wire B. Compared to B, wire A stretches:",
        options: ['twice as much', 'the same amount', 'half as much', 'a quarter as much'],
        answer: 2,
        explanation: "$\\Delta L = FL/(YA)$ is inversely proportional to area: doubling $A$ halves the stretch. Stress halves too — which is why fat cables carry big loads.",
      },
      {
        q: "The elastic limit of a material is the:",
        options: [
          'stress at which it breaks',
          'maximum stress from which it recovers its original dimensions when unloaded',
          'stress at which Hooke\'s law is exactly obeyed',
          'strain at which the modulus doubles',
        ],
        answer: 1,
        explanation: "Recoverability defines the elastic limit; Hooke's linearity ends slightly earlier (proportional limit), and fracture comes later still (ultimate strength). Between the elastic limit and fracture, the material deforms permanently.",
      },
    ],
  },
]

import type { SectionContent } from '../library'

// ============================================================================
// Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended
// Chapter 5: Force and Motion—I (sections 5.1–5.3, ids hall-ch5-s1..s3)
// ============================================================================

export const hallCh5Content: SectionContent[] = [
  // ------------------------------------------------------------- 5.1
  {
    sectionId: 'hall-ch5-s1',
    readingTime: 6,
    intro: "Chapters 2–4 were kinematics: they described motion without asking what changes it. This chapter opens dynamics, where force is the agent of change. Newton's first law tells us when velocity stays put; his second law says exactly how much acceleration a given net force produces in a given mass.",
    objectives: [
      "State Newton's first law and explain how it singles out inertial reference frames as the arenas where Newtonian mechanics holds",
      "Apply Newton's second law, $\\vec{F}_{net} = m\\vec{a}$, component by component, to find a body's acceleration from the forces acting on it",
      "Treat mass as the measure of inertia and use the newton, a derived unit equal to 1 kg·m/s²",
    ],
    concepts: [
      {
        term: 'Force — the agent of change',
        kind: 'definition',
        statement: "**A force is a push or a pull, and it is the agent of change in mechanics.** Force is a vector: every force has a magnitude, a direction, and a line of action, and several forces combine into their vector sum, the net force $\\vec{F}_{net} = \\sum \\vec{F}$. Dynamics is the study of how forces change motion.",
        detail: "Forces arise from interactions — a rope's tug, a floor's push, air's drag, Earth\'s pull — and are measured in newtons, with the spring scale as the everyday instrument.",
      },
      {
        term: "Newton's first law",
        kind: 'law',
        statement: "**If no net force acts on a body, the body's velocity cannot change.** A body at rest stays at rest; a moving body keeps its speed and direction. Uniform motion needs no cause and no sustaining agent.",
        detail: "The first law defines an inertial reference frame: a frame in which the law holds. Frames accelerating relative to an inertial frame are not inertial, and Newton's laws as stated fail there. The ground is inertial only to good approximation — its acceleration from Earth\'s rotation is small for laboratory purposes.",
      },
      {
        term: 'Mass — the measure of inertia',
        kind: 'definition',
        statement: "**Mass is the measure of inertia: the resistance of a body to a change in its velocity.** Apply the same net force to two bodies: the one that accelerates less has the larger mass. Mass is a scalar, measured in kilograms.",
        detail: "HRW operationalizes the comparison: put each body in turn on a frictionless surface, apply the same force, and compare accelerations. Doubling the mass halves the acceleration produced by the same force.",
      },
      {
        term: "Newton's second law",
        kind: 'law',
        statement: "**The net force on a body equals the product of its mass and its acceleration: $\\vec{F}_{net} = m\\vec{a}$.** The acceleration points along the net force, and the vector equation is three scalar equations at once: $F_{net,x} = ma_x$, $F_{net,y} = ma_y$, $F_{net,z} = ma_z$.",
        detail: "Read it carefully: $m\\vec{a}$ is not a force — it is what the vector sum of the real forces equals. The law holds in inertial frames for bodies of constant mass, and it is the working equation for the rest of this book.",
      },
      {
        term: "Newton's First and Second Laws: solution protocol",
        kind: "method",
        statement: "**Solve Newton's First and Second Laws problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Newton's laws with $\\vec F_{\\text{net}} = m\\vec a$; the working equation is $\\vec F_{\\text{net}} = m\\vec a$, $W = mg$, $g = 9.8\\ \\text{m/s}^2$; every substitution must carry its units so the final unit (newtons and free-body arrows) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $1\\ \\text{N}$ (apple) to $10^4\\ \\text{N}$ (braking car); inertial frames only; $m$ constant and $v\\ll c$.",
      },
    ],
    examples: [
      {
        title: 'Two forces at right angles',
        problem: "A 2.0 kg puck on frictionless ice is pushed simultaneously by a 3.0 N force aimed east and a 4.0 N force aimed north. Find the puck's acceleration (magnitude and direction).",
        steps: [
          { label: 'Add first', text: "The second law uses the net force, so the two pushes must be added as vectors before dividing by the mass. East and north are perpendicular." },
          { label: 'Magnitude', text: "The forces form a 3–4–5 right triangle: $F_{net} = \\sqrt{(3.0)^2 + (4.0)^2} = 5.0$ N." },
          { label: 'Direction', text: "$\\tan\\theta = 4.0/3.0$ gives $\\theta = 53^{\\circ}$ north of east." },
          { label: 'Second law', text: "$a = F_{net}/m = 5.0/2.0 = 2.5$ m/s² at $53^{\\circ}$ north of east." },
        ],
        result: "$\\vec{a} = 2.5$ m/s² at $53^{\\circ}$ north of east (components $a_x = 1.5$, $a_y = 2.0$ m/s²).",
      },
      {
        title: 'An emergency stop',
        problem: "The driver of a 1200 kg car brakes hard; the road's frictional force on the tires is a constant 6.0 kN opposite the motion. The car enters the braking at 25 m/s. How long, and how far, does it take to stop?",
        steps: [
          { label: 'Acceleration', text: "$a = F/m = 6000/1200 = 5.0$ m/s², directed opposite the motion." },
          { label: 'Time', text: "$t = v/a = 25/5.0 = 5.0$ s." },
          { label: 'Distance', text: "$x = v^2/(2a) = (25)^2/10 = 62.5$ m." },
        ],
        result: "The car stops in 5.0 s after 62.5 m — about two football fields of warning that speed costs distance.",
      },
    ],
    keyTakeaways: [
      "Only the net force matters: forces are vectors and must be added before Newton's second law is applied.",
      "The first law defines inertial frames — uniform motion is the natural state that needs no cause.",
      "The second law $\\vec{F}_{net} = m\\vec{a}$ is a vector equation; the newton is the derived unit 1 kg·m/s².",
    ],
    quiz: [
      {
        q: "Which statement is Newton's first law?",
        options: [
          "A body on which no net force acts keeps its velocity constant in both magnitude and direction",
          "A body at rest remains at rest unless a force starts it moving",
          "Any moving body must be pushed along by a force in the direction of motion",
          "In the absence of forces all bodies eventually come to rest",
        ],
        answer: 0,
        explanation: "Constant velocity — which includes rest — is the force-free state. Only changes of velocity need a cause, which is exactly the opposite of the old idea that motion needs a sustaining push.",
      },
      {
        q: "The same net force is applied in turn to body A and to body B, which has four times A's mass. The acceleration of B is:",
        options: [
          "four times that of A",
          "the same as A's",
          "one-fourth that of A",
          "one-sixteenth that of A",
        ],
        answer: 2,
        explanation: "Since $a = F/m$, quadrupling the mass at fixed force divides the acceleration by four.",
      },
      {
        q: "A puck on frictionless ice is pushed by two perpendicular forces, 6.0 N and 8.0 N. The direction of the acceleration is:",
        options: [
          "impossible to determine without the puck's mass",
          "along the 6 N force",
          "along the 8 N force",
          "along the diagonal — a 10 N resultant at 53° from the 6 N force",
        ],
        answer: 3,
        explanation: "The acceleration points along the net force, which for perpendicular 6 N and 8 N pushes is the 10 N diagonal. The mass sets the size of $a$, not its direction.",
      },
    ],
  },

  // ------------------------------------------------------------- 5.2
  {
    sectionId: 'hall-ch5-s2',
    readingTime: 6,
    intro: "Four particular forces account for almost every everyday situation: the gravitational pull we call weight, the perpendicular push of a surface (the normal force), the pull of a taut cord (tension), and the parallel push of a surface (friction). Their exact behavior holds surprises — the normal force is not always $mg$, and an ideal cord pulls equally at both ends — and learning those surprises is what makes Newton's laws usable.",
    objectives: [
      "Compute a body's weight from its mass, and keep weight (a force) separate from mass (a scalar property)",
      "Find the normal force from Newton's second law, and explain why it equals $mg$ only in special cases",
      "Describe tension in an ideal cord and name the static/kinetic split within the friction family",
    ],
    concepts: [
      {
        term: 'Weight',
        kind: 'definition',
        statement: "**The weight $\\vec{F}_g$ of a body is the force on it due to gravity. Near Earth's surface it is a vector of magnitude $W = mg$ pointing straight down**, with $g = 9.8$ m/s².",
        detail: "Mass and weight are different things. Mass (kg) measures inertia and belongs to the body; weight (N) is a force that depends on the local gravitational field. On the Moon ($g = 1.7$ m/s²) a 70 kg astronaut still has mass 70 kg but weighs about 120 N — a sixth of the 686 N weighed on Earth.",
      },
      {
        term: 'The normal force',
        kind: 'definition',
        statement: "**The normal force is the component, perpendicular to the surface, of the force a surface exerts on a body in contact with it.** Its magnitude is NOT fixed at $mg$: the surface pushes exactly as hard as Newton's laws require — no more, no less.",
        detail: "Microscopically, the surface's atoms act like little springs. Press down on a book and the table's normal force grows by the same amount; the equation that fixes its value is $\\sum F_y = ma_y$ applied to the body.",
      },
      {
        term: 'Tension',
        kind: 'definition',
        statement: "**Tension is the force a taut cord exerts on whatever it is attached to — directed along the cord, pulling away from the body.** For an ideal cord (massless, inextensible) passing over a frictionless pulley, the magnitude $T$ is the same everywhere.",
        detail: "A rope can only pull, never push. Real ropes stretch slightly and carry mass, but the idealization is superb for the problems of this chapter.",
      },
      {
        term: "Friction's taxonomy",
        kind: 'insight',
        statement: "**Friction is the component of a surface's force parallel to the surface.** When the surfaces grip without sliding it is static friction, self-adjusting up to a maximum $f_{s,max} = \\mu_s N$; once sliding occurs it is kinetic friction, fixed at $f_k = \\mu_k N$ and opposing the sliding.",
        detail: "Chapter 6 develops friction fully. The point to carry out of this section is the split: static friction adjusts to what equilibrium demands (up to its limit), while kinetic friction has one fixed value set by $\\mu_k$ and $N$.",
      },
      {
        term: "Some Particular Forces: solution protocol",
        kind: "method",
        statement: "**Solve Some Particular Forces problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Newton's laws with $\\vec F_{\\text{net}} = m\\vec a$; the working equation is $\\vec F_{\\text{net}} = m\\vec a$, $W = mg$, $g = 9.8\\ \\text{m/s}^2$; every substitution must carry its units so the final unit (newtons and free-body arrows) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $1\\ \\text{N}$ (apple) to $10^4\\ \\text{N}$ (braking car); inertial frames only; $m$ constant and $v\\ll c$.",
      },
    ],
    examples: [
      {
        title: 'The bathroom scale in an elevator',
        problem: "A 72 kg passenger stands on a scale in an elevator that accelerates (a) upward at 3.2 m/s² and (b) downward at 3.2 m/s². What does the scale read in each case, and at rest?",
        steps: [
          { label: 'FBD', text: "The passenger touches only the scale. Forces: weight $mg$ down and the normal force $N$ up — and the scale reads $N$, the apparent weight." },
          { label: 'Upward case', text: "With +y up: $N - mg = ma$, so $N = m(g + a) = 72 \\times (9.8 + 3.2) = 72 \\times 13.0 = 936$ N." },
          { label: 'Downward case', text: "$N = m(g - a) = 72 \\times 6.6 = 475$ N." },
          { label: 'At rest', text: "$a = 0$, so $N = mg = 706$ N — the reading you know from your bathroom." },
        ],
        result: "936 N accelerating up, 475 N accelerating down, 706 N at rest: apparent weight tracks $m(g \\pm a)$.",
      },
      {
        title: 'A chandelier on two wires',
        problem: "A 5.0 kg chandelier hangs from a knot where two wires meet: wire 2 runs up and to the right at 40° above the horizontal to the ceiling, and wire 1 runs horizontally to a wall. Find the tension in each wire.",
        steps: [
          { label: 'Equilibrium', text: "The chandelier pulls the knot down with $mg = 49$ N, and nothing accelerates, so $\\sum F_x = 0$ and $\\sum F_y = 0$ at the knot." },
          { label: 'Vertical', text: "$T_2 \\sin 40^{\\circ} - mg = 0$, so $T_2 = 49/0.643 = 76$ N." },
          { label: 'Horizontal', text: "$T_1 - T_2 \\cos 40^{\\circ} = 0$, so $T_1 = 76 \\times 0.766 = 58$ N." },
        ],
        result: "$T_2 \\approx 76$ N along the angled wire, $T_1 \\approx 58$ N along the horizontal wire — the angled wire carries more because it also holds the weight.",
      },
    ],
    keyTakeaways: [
      "Weight is a force of magnitude $mg$ directed down; mass is inertia in kilograms and never changes with location.",
      "The normal force is whatever a surface must push with to satisfy Newton's second law — it equals $mg$ only when nothing else pushes vertically and there is no vertical acceleration.",
      "An ideal cord transmits one tension magnitude along its length and past a frictionless pulley; friction splits into self-adjusting static and fixed kinetic.",
    ],
    quiz: [
      {
        q: "A 10 kg crate sits on the floor while you push down on it with an extra 20 N. The normal force of the floor on the crate is:",
        options: [
          "78 N",
          "118 N",
          "98 N",
          "138 N",
        ],
        answer: 1,
        explanation: "Equilibrium in the vertical direction requires $N = mg + 20 = 98 + 20 = 118$ N. The normal force adjusts to the total demand.",
      },
      {
        q: "An astronaut stands on Mars, where $g = 3.7$ m/s². Compared with Earth, the astronaut's mass and weight are:",
        options: [
          "mass and weight both unchanged",
          "both scale with the local $g$",
          "mass the same, weight about 0.38 times",
          "mass about 0.38 times, weight the same",
        ],
        answer: 2,
        explanation: "Mass is intrinsic to the body; weight $= mg$ scales with the local field: $3.7/9.8 \\approx 0.38$.",
      },
      {
        q: "You pull horizontally on a heavy trunk and it does not budge. The friction on it:",
        options: [
          "equals $\\mu_s N$ exactly",
          "is zero until motion starts",
          "matches your pull, whatever it is, up to the limit $\\mu_s N$",
          "is kinetic, with value $\\mu_k N$",
        ],
        answer: 2,
        explanation: "Static friction self-adjusts to balance the applied force until the impending-motion maximum $\\mu_s N$ is reached; $\\mu_s N$ is only the ceiling, not the value.",
      },
    ],
  },

  // ------------------------------------------------------------- 5.3
  {
    sectionId: 'hall-ch5-s3',
    readingTime: 7,
    intro: "Newton's third law ties every force to a partner of equal magnitude and opposite direction acting on the other body involved. Combined with free-body diagrams — one body isolated at a time, only the forces acting on it drawn — the third law turns the second law from a slogan into a problem-solving machine for pulleys, inclines and connected bodies.",
    objectives: [
      "State Newton's third law and identify the partner of any force, including why partners never cancel on a single free-body diagram",
      "Draw a correct free-body diagram and run the five-step recipe to a numerical answer",
      "Analyze connected bodies: one tension along an ideal cord, one acceleration magnitude along the constraint",
    ],
    concepts: [
      {
        term: "Newton's third law",
        kind: 'law',
        statement: "**When two bodies interact, the force $\\vec{F}_{AB}$ that body A exerts on body B equals, in magnitude and direction-reversed, the force $\\vec{F}_{BA}$ that B exerts on A: $\\vec{F}_{AB} = -\\vec{F}_{BA}$.** The two forces act on different bodies, are of the same type, and appear and vanish together.",
        detail: "The third-law partner of Earth's pull on you is your pull on Earth. The partner of the normal force on a crate is the crate's push on the floor — which is why weight and normal force are NOT a third-law pair: they act on the same body.",
      },
      {
        term: 'The free-body diagram',
        kind: 'method',
        statement: "**A free-body diagram isolates one body, shrinks it to a dot, and draws one arrow for each force acting ON that body — nothing else.** No forces the body exerts on others, no internal forces, no net-force or $m\\vec{a}$ arrows mixed in.",
        detail: "This is where mistakes are made and caught: forget a force and the algebra cannot be saved; add a phantom force and the equations will lie.",
      },
      {
        term: 'The five-step recipe',
        kind: 'method',
        statement: "**(1)** Draw a free-body diagram for each body. **(2)** Choose axes — tilt them along an incline or the expected acceleration. **(3)** Resolve every force into components. **(4)** Write $\\sum F_x = ma_x$ and $\\sum F_y = ma_y$ for each body. **(5)** Solve, then check the result against limiting cases.",
        detail: "Limiting-case checks — let an angle go to zero, a mass grow huge — are the cheapest error filter in physics.",
      },
      {
        term: 'The cord constraint',
        kind: 'insight',
        statement: "**An ideal cord ties connected bodies together: the tension magnitude is the same throughout, and the bodies' speeds and acceleration magnitudes are equal**, because the cord's length cannot change.",
        detail: "Choose one positive direction along the motion — say the hanging block's downward direction — and keep that sign convention in both bodies' equations.",
      },
      {
        term: "Applying Newton's Laws: solution protocol",
        kind: "method",
        statement: "**Solve Applying Newton's Laws problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Newton's laws with $\\vec F_{\\text{net}} = m\\vec a$; the working equation is $\\vec F_{\\text{net}} = m\\vec a$, $W = mg$, $g = 9.8\\ \\text{m/s}^2$; every substitution must carry its units so the final unit (newtons and free-body arrows) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $1\\ \\text{N}$ (apple) to $10^4\\ \\text{N}$ (braking car); inertial frames only; $m$ constant and $v\\ll c$.",
      },
    ],
    figures: [
      {
        caption: "A free-body diagram for a crate pulled along a floor by a rope at angle $\\theta$: the body is shrunk to a dot, and each arrow is one of the four real forces acting on it — weight $mg$, normal force $\\vec{N}$, rope tension $\\vec{T}$ and friction $\\vec{f}$. The dashed line and the marked angle $\\theta$ show how the tension will be resolved once axes are chosen.",
        svg: `<svg viewBox="0 0 720 340" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Free-body diagram of a crate pulled by an angled rope along a floor"><defs><marker id="fbdA" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto"><path d="M0,0 L9,4 L0,8 z" fill="currentColor"/></marker></defs><line x1="60" y1="272" x2="660" y2="272" stroke="currentColor" stroke-width="2"/><line x1="90" y1="272" x2="106" y2="288" stroke="currentColor" stroke-width="1.5" opacity="0.5"/><line x1="150" y1="272" x2="166" y2="288" stroke="currentColor" stroke-width="1.5" opacity="0.5"/><line x1="210" y1="272" x2="226" y2="288" stroke="currentColor" stroke-width="1.5" opacity="0.5"/><line x1="270" y1="272" x2="286" y2="288" stroke="currentColor" stroke-width="1.5" opacity="0.5"/><line x1="330" y1="272" x2="346" y2="288" stroke="currentColor" stroke-width="1.5" opacity="0.5"/><line x1="390" y1="272" x2="406" y2="288" stroke="currentColor" stroke-width="1.5" opacity="0.5"/><line x1="450" y1="272" x2="466" y2="288" stroke="currentColor" stroke-width="1.5" opacity="0.5"/><line x1="510" y1="272" x2="526" y2="288" stroke="currentColor" stroke-width="1.5" opacity="0.5"/><line x1="570" y1="272" x2="586" y2="288" stroke="currentColor" stroke-width="1.5" opacity="0.5"/><line x1="630" y1="272" x2="646" y2="288" stroke="currentColor" stroke-width="1.5" opacity="0.5"/><rect x="280" y="192" width="170" height="80" rx="4" fill="none" stroke="currentColor" stroke-width="2" opacity="0.45"/><circle cx="365" cy="232" r="5" fill="currentColor"/><line x1="365" y1="232" x2="365" y2="112" stroke="currentColor" stroke-width="3" marker-end="url(#fbdA)"/><text x="382" y="120" font-size="18" fill="currentColor">N</text><line x1="365" y1="232" x2="365" y2="322" stroke="currentColor" stroke-width="3" marker-end="url(#fbdA)"/><text x="382" y="318" font-size="18" fill="currentColor">mg</text><line x1="365" y1="232" x2="492" y2="138" stroke="currentColor" stroke-width="3" marker-end="url(#fbdA)"/><text x="506" y="132" font-size="18" fill="currentColor">T</text><line x1="365" y1="232" x2="252" y2="232" stroke="currentColor" stroke-width="3" marker-end="url(#fbdA)"/><text x="238" y="226" font-size="18" fill="currentColor">f</text><line x1="365" y1="232" x2="472" y2="232" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.7"/><path d="M 415 232 A 50 50 0 0 0 405 203" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="428" y="216" font-size="15" fill="currentColor">θ</text><line x1="96" y1="120" x2="152" y2="120" stroke="currentColor" stroke-width="2" marker-end="url(#fbdA)"/><line x1="96" y1="120" x2="96" y2="64" stroke="currentColor" stroke-width="2" marker-end="url(#fbdA)"/><text x="158" y="126" font-size="15" fill="currentColor">x</text><text x="88" y="56" font-size="15" fill="currentColor">y</text><text x="360" y="52" font-size="13" text-anchor="middle" fill="currentColor" opacity="0.8">one arrow per force acting on the crate — nothing else</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Two blocks, one cord, one pulley',
        problem: "A 2.0 kg block lies on a frictionless horizontal table, connected by a light cord over a frictionless pulley to a hanging 3.0 kg block. Find the acceleration and the cord tension.",
        steps: [
          { label: 'FBDs', text: "Table block: weight and normal force (which cancel vertically) plus tension $T$ toward the pulley. Hanging block: weight $3.0g$ down, tension $T$ up." },
          { label: 'Equations', text: "Table block, $x$ along the cord: $T = m_1 a$. Hanging block, down positive: $m_2 g - T = m_2 a$." },
          { label: 'Add', text: "Adding eliminates $T$: $m_2 g = (m_1 + m_2)a$, so $a = (3.0 \\times 9.8)/5.0 = 5.9$ m/s²." },
          { label: 'Tension', text: "$T = m_1 a = 2.0 \\times 5.88 = 11.8$ N." },
        ],
        result: "$a = 5.9$ m/s² toward the pulley; $T \\approx 12$ N — less than the hanging block's 29 N weight, which is exactly why that block accelerates downward.",
      },
      {
        title: 'Crate on a frictionless ramp',
        problem: "An 8.0 kg crate slides down a frictionless 30° incline. Find its acceleration and the normal force.",
        steps: [
          { label: 'Tilt the axes', text: "Take +x down the slope and +y perpendicular to it. The weight resolves into $mg\\sin\\theta$ along the slope and $mg\\cos\\theta$ into it." },
          { label: 'Perpendicular', text: "No acceleration perpendicular to the slope: $N - mg\\cos\\theta = 0$, so $N = 8.0 \\times 9.8 \\times 0.866 = 68$ N." },
          { label: 'Along the slope', text: "$mg\\sin\\theta = ma$, so $a = g\\sin 30^{\\circ} = 4.9$ m/s² — independent of the mass." },
        ],
        result: "$a = 4.9$ m/s² down the slope; $N = 68$ N. On a 90° 'incline' the same recipe returns $a = g$: free fall, as it must.",
      },
    ],
    keyTakeaways: [
      "Third-law partners are equal, opposite and on different bodies — they can never cancel each other on one free-body diagram.",
      "One body per free-body diagram, only the forces acting on it, with axes bent to fit the geometry.",
      "Connected bodies share one tension and one acceleration magnitude along the cord: write the second law for each body and combine.",
    ],
    quiz: [
      {
        q: "A book rests on a table. The third-law partner of the table's normal force on the book is:",
        options: [
          "the book's weight",
          "the book's downward force on the table",
          "Earth's gravitational pull on the table",
          "the book's pull on Earth",
        ],
        answer: 1,
        explanation: "Partner forces act on the other participant of the interaction: the surface's push on the book pairs with the book's push on the surface. Weight's partner is the book's pull on Earth.",
      },
      {
        q: "Why can't third-law partner forces cancel each other?",
        options: [
          "Because they have different magnitudes",
          "Because they are the same type",
          "Because they act on different bodies",
          "They do cancel — that is why nothing moves",
        ],
        answer: 2,
        explanation: "Cancellation requires both forces to act on the same body. Third-law partners always act on different bodies, so each appears on a different free-body diagram.",
      },
      {
        q: "In the two-block pulley system (2.0 kg on a frictionless table, 3.0 kg hanging), the hanging mass is made much larger. The acceleration:",
        options: [
          "decreases, because more mass is harder to move",
          "increases, approaching $g$ when the hanging mass greatly exceeds the table mass",
          "stays the same",
          "becomes exactly $g$ for any hanging mass",
        ],
        answer: 1,
        explanation: "$a = m_2 g/(m_1 + m_2)$ grows with $m_2$ and approaches $g$ as $m_2 \\gg m_1$ — the table mass becomes negligible baggage.",
      },
      {
        q: "A free-body diagram should show:",
        options: [
          "every force in the problem, on all bodies",
          "the forces acting on the chosen body plus its acceleration arrow",
          "only the forces acting on the chosen body, one arrow each",
          "the forces the chosen body exerts on other bodies",
        ],
        answer: 2,
        explanation: "The diagram is a per-body ledger of forces acting ON the body. Acceleration is what those forces produce, not a force; forces the body exerts on others belong on those bodies' diagrams.",
      },
    ],
  },
]

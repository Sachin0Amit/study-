import type { SectionContent } from '../library'

// ============================================================
// Halliday, Resnick & Walker — Fundamentals of Physics 11e
// Extended, Chapter 9: Center of Mass and Linear Momentum
// (HRW pp. 214–256). Real textbook treatment: center of mass,
// the com form of Newton's second law, linear momentum, impulse,
// conservation of momentum, and collisions in 1D and 2D.
// ============================================================

export const hallCh9Content: SectionContent[] = [
  // ------------------------------------------------------- 9.1
  {
    sectionId: 'hall-ch9-s1',
    readingTime: 7,
    intro: "A tossed hammer wobbles complicatedly, yet one special point of it sails smoothly along a parabola. That point is the center of mass, and this section builds the machinery for locating it — for a handful of particles, for a solid body, and for composite shapes assembled from simple pieces. The payoffs are immediate: the whole messy motion of an extended body can be split into the clean motion of its com plus motion about its com.",
    objectives: [
      "Compute the center of mass of a system of particles from $x_{com} = \\frac{1}{M}\\sum m_i x_i$ and its vector generalization",
      "Locate the com of a uniform solid body by exploiting symmetry, and of a composite body by treating each part as a point mass at its own com",
      "Explain why the com can lie outside the material of a body and how it differs from (and matches) the center of gravity",
    ],
    concepts: [
      {
        term: 'Center of mass of a system of particles',
        kind: 'definition',
        statement: "For particles of masses $m_1, m_2, \\ldots$ at positions $\\vec r_1, \\vec r_2, \\ldots$, the **center of mass** is the mass-weighted average position, $$\\vec r_{com} = \\frac{1}{M}\\sum_i m_i \\vec r_i, \\qquad M = \\sum_i m_i.$$ In component form, $x_{com} = \\frac{1}{M}\\sum m_i x_i$, and similarly for $y$ and $z$.",
        detail: "The com is a weighted average, so it always lies somewhere among the particles (or beyond them, for a hollow shape) but never depends on the choice of origin: shift the origin and every coordinate shifts with it, canceling out. Its units are those of position, and $M\\,\\vec r_{com}$ acts like the total mass concentrated at one point.",
      },
      {
        term: 'Center of mass of a solid body',
        kind: 'method',
        statement: "For a continuous body the sums become integrals over mass elements: $$\\vec r_{com} = \\frac{1}{M}\\int \\vec r\\,dm.$$ For a **uniform body** (constant density) the com sits at the geometric center whenever the body has enough symmetry — center of a rod, center of a disk or sphere, midpoint of a cube.",
        detail: "In practice you slice the body into familiar shapes whose coms you know, or you integrate. Symmetry is the fastest tool: a uniform circular ring has its com at the center of the circle — in the hole, where there is no material at all. Mass, not area, does the weighting: the com of an object always leans toward the heavier side.",
      },
      {
        term: 'Composite bodies',
        kind: 'method',
        statement: "**To find the com of a composite body**, split it into parts whose coms are known, treat each part as a point mass located at its own com, and take the weighted average: $$x_{com} = \\frac{\\sum_j m_j x_j^{(part\\ com)}}{\\sum_j m_j}.$$ Holes and cut-outs are handled by assigning them **negative mass**.",
        detail: "This works because the defining sum can be regrouped: $\\sum_i m_i x_i = \\sum_j \\left(\\sum_{i \\in j} m_i x_i\\right) = \\sum_j m_j x_j^{(part)}$. An L-shaped plate, a coffee cup with a handle, a ball glued to a rod — all yield to the same bookkeeping.",
      },
      {
        term: 'com outside the material; com vs center of gravity',
        kind: 'insight',
        statement: "The center of mass need not sit **in** the material of the body — a doughnut's com is in its hole, a boomerang's is in the air between its arms. In a uniform gravitational field the **center of gravity** (the point at which the total gravitational torque acts) coincides exactly with the center of mass, which is why the two words are used interchangeably in this book.",
        detail: "If $g$ varied significantly across the body the two points would separate, but for any laboratory-sized object the distinction is negligible. Watch the language of torque problems: 'the weight acts at the com' is precisely the statement that gravity produces no net torque about that point.",
      },
      {
        term: "Center of Mass: solution protocol",
        kind: "method",
        statement: "**Solve Center of Mass problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is center of mass, momentum and impulse; the working equation is $\\vec p = m\\vec v$, $\\vec J = \\Delta\\vec p = \\int\\vec F\\,dt$, $M\\vec a_{\\text{com}} = \\vec F_{\\text{net}}$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person); closed plus isolated for strict conservation; impulse is vector area under $F(t)$.",
      },
    ],
    figures: [
      {
        caption: "The com of an L-shaped uniform plate. Split the plate into a horizontal bar of area $A_1 = 3d^2$ with com at $(1.5d, 0.5d)$ and a vertical bar of area $A_2 = 2d^2$ with com at $(0.5d, 2d)$. Because the plate is uniform, mass $\\propto$ area, so $$x_{com} = \\frac{(3d^2)(1.5d) + (2d^2)(0.5d)}{5d^2} = 1.1\\,d, \\qquad y_{com} = \\frac{(3d^2)(0.5d) + (2d^2)(2d)}{5d^2} = 1.1\\,d,$$ a point that falls in the empty notch of the L — outside the material, as happens with concave bodies.",
        svg: `<svg viewBox="0 0 460 300" width="100%" role="img" aria-label="Center of mass of an L-shaped plate built from two rectangles" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><g stroke="currentColor" stroke-width="0.6" opacity="0.22"><line x1="120" y1="100" x2="120" y2="250"/><line x1="170" y1="200" x2="170" y2="250"/><line x1="70" y1="200" x2="220" y2="200"/><line x1="70" y1="150" x2="120" y2="150"/></g><path d="M70,100 L120,100 L120,200 L220,200 L220,250 L70,250 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g fill="currentColor"><circle cx="145" cy="225" r="3.5"/><circle cx="95" cy="150" r="3.5"/></g><g stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.8"><line x1="145" y1="225" x2="125" y2="195"/><line x1="95" y1="150" x2="125" y2="195"/><line x1="125" y1="195" x2="125" y2="268"/><line x1="125" y1="195" x2="36" y2="195"/></g><circle cx="125" cy="195" r="8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="125" cy="195" r="3" fill="currentColor"/><circle cx="70" cy="250" r="2.5" fill="currentColor"/><g font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.9"><text x="155" y="240">A1 = 3d2</text><text x="95" y="172">A2 = 2d2</text><text x="145" y="214" opacity="0.7">com1</text><text x="104" y="143" opacity="0.7">com2</text></g><g font-size="10.5" fill="currentColor"><text x="125" y="284" text-anchor="middle">x = 1.1 d</text><text x="34" y="189" text-anchor="end">y = 1.1 d</text><text x="70" y="268" text-anchor="middle" opacity="0.7">origin</text></g><text x="230" y="40" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">uniform plate: mass proportional to area</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Three particles on a line",
        problem: "Particles of mass 2.0 kg, 4.0 kg and 8.0 kg sit on the $x$-axis at $x = 0$, $1.0$ m and $2.0$ m. Where is the center of mass?",
        steps: [
          { label: 'Total mass', text: "$M = 2.0 + 4.0 + 8.0 = 14.0$ kg." },
          { label: 'Weighted sum', text: "$\\sum m_i x_i = (2.0)(0) + (4.0)(1.0) + (8.0)(2.0) = 0 + 4.0 + 16 = 20\\ \\text{kg}\\cdot\\text{m}$." },
          { label: 'Divide', text: "$x_{com} = 20/14.0 = 1.43$ m — pulled toward the heavy 8.0 kg particle, sitting between it and the middle particle, much closer to the 2.0 m mark than to the origin." },
        ],
        result: "$x_{com} \\approx 1.4$ m from the 2.0 kg particle. Note the com always leans toward the dominant mass.",
      },
      {
        title: "An L-shaped uniform plate",
        problem: "A uniform plate is built from a horizontal bar $3d$ long and $d$ wide welded to a vertical bar $d$ wide and $2d$ tall on its left end (an L of total height $3d$). Take the origin at the bottom-left corner, $x$ rightward, $y$ upward, and let $d = 0.30$ m. Find the com.",
        steps: [
          { label: 'Split and weigh', text: "Bar 1 (horizontal, area $3d^2$) has com at $(1.5d, 0.5d)$. Bar 2 (vertical, area $2d^2$) has com at $(0.5d, 2d)$. Uniform plate, so mass $\\propto$ area and the total is $5d^2$." },
          { label: 'x-coordinate', text: "$x_{com} = \\frac{(3d^2)(1.5d) + (2d^2)(0.5d)}{5d^2} = \\frac{4.5 + 1.0}{5}d = 1.1d$." },
          { label: 'y-coordinate', text: "$y_{com} = \\frac{(3d^2)(0.5d) + (2d^2)(2d)}{5d^2} = \\frac{1.5 + 4.0}{5}d = 1.1d$. The two coordinates agree because each bar contributes its full area in one direction and a half-width in the other." },
          { label: 'Numbers', text: "With $d = 0.30$ m: $x_{com} = y_{com} = (1.1)(0.30) = 0.33$ m from the corner." },
        ],
        result: "The com sits at $(0.33\\ \\text{m}, 0.33\\ \\text{m})$ — inside the notch of the L, barely on the material. Hang the plate from this point and it balances in any orientation.",
      },
    ],
    keyTakeaways: [
      "The center of mass is the mass-weighted average position: $\\vec r_{com} = \\frac{1}{M}\\sum m_i \\vec r_i$, a physical point independent of the coordinate origin.",
      "For composite bodies, collapse each part to a point mass at its own com and re-average; for uniform symmetric bodies the com sits at the geometric center, even if that center lies in empty space.",
      "In a uniform gravitational field the center of gravity coincides with the center of mass, so the total weight may be treated as acting there when computing torques.",
    ],
    quiz: [
      {
        q: "A uniform circular ring (a doughnut) lies flat on a table. Its center of mass is located:",
        options: [
          'at the geometric center of the ring, in the empty hole',
          'halfway between the inner and outer edges, on the material',
          'at the bottom of the ring, because gravity pulls the com downward',
          'undefined, because there is no material at the com of a hollow object',
        ],
        answer: 0,
        explanation: "The com is a mass-weighted average of positions; by symmetry every piece of the ring is balanced by a piece across the hole, so the average lands exactly at the center — which need not be occupied by material.",
      },
      {
        q: "Particles of 1.0 kg and 3.0 kg sit at $x = 0$ and $x = 4.0$ m. The center of mass is at:",
        options: ['$x = 2.0$ m', '$x = 3.0$ m', '$x = 1.0$ m', '$x = 4.0/3$ m'],
        answer: 1,
        explanation: "$x_{com} = \\frac{(1.0)(0) + (3.0)(4.0)}{4.0} = 3.0$ m — three times closer to the heavier particle, i.e. one quarter of the way from the 3.0 kg mass to the 1.0 kg mass.",
      },
      {
        q: "You compute $x_{com}$ for a system using an origin at the left wall, then redo it with the origin at the right wall. The com itself:",
        options: [
          'shifts by the same amount as the origin, keeping its coordinate value',
          'is the same physical point; only its coordinate value changes',
          'moves toward the new origin',
          'can only be defined with the origin at one of the particles',
        ],
        answer: 1,
        explanation: "The com is a physical point in space. Coordinates are just labels for it; changing the labeling scheme changes the numbers, not the point. This invariance is why the com is worth computing at all.",
      },
      {
        q: "In the L-shaped plate of the worked example, suppose the vertical bar were made twice as dense as the horizontal bar. Compared with $(1.1d, 1.1d)$, the com would:",
        options: [
          'stay exactly where it was',
          'shift toward the vertical bar (smaller $x$, larger $y$)',
          'shift toward the horizontal bar (larger $x$, smaller $y$)',
          'move outside the material of the plate',
        ],
        answer: 1,
        explanation: "Doubling the vertical bar's density doubles its effective weight in the average, pulling the com toward it: $x_{com}$ decreases and $y_{com}$ increases. Mass distribution, not outline, fixes the com.",
      },
    ],
  },

  // ------------------------------------------------------- 9.2
  {
    sectionId: 'hall-ch9-s2',
    readingTime: 6,
    intro: "Here is the chapter's central trick: even when a system of particles tangles itself into chaos — exploding, colliding, vibrating — one point obeys a law as clean as anything in Chapter 5. The center of mass of a system moves exactly as a single particle of the total mass would move under the net external force. All the internal pushes and pulls, however violent, cancel out.",
    objectives: [
      "State and derive $\\vec F_{net,ext} = M\\vec a_{com}$ for a system of particles",
      "Explain why internal forces drop out of the com motion, using Newton's third law",
      "Apply the result to projectile explosion problems, where the com keeps flying along the original parabola",
    ],
    concepts: [
      {
        term: "Newton's second law for a system of particles",
        kind: 'theorem',
        statement: "For any system of total mass $M$, $$M\\vec a_{com} = \\vec F_{net,ext}$$ where $\\vec F_{net,ext}$ is the vector sum of all **external** forces acting on the system. Internal forces — those the particles exert on each other — cannot accelerate the center of mass.",
        detail: "The proof is one line: sum $\\vec F_i = m_i \\vec a_i$ over all particles. The left side splits into external plus internal forces; by Newton's third law the internal ones pair off and cancel. The right side becomes $\\frac{d^2}{dt^2}\\sum m_i \\vec r_i = M\\vec a_{com}$. A rocket, a dancer, a galaxy — each obeys this at its own scale.",
      },
      {
        term: 'Why internal forces cancel',
        kind: 'insight',
        statement: "Every internal force appears twice in the sum — once as $\\vec F_{AB}$ (A on B) and once as $\\vec F_{BA} = -\\vec F_{AB}$ (B on A) — because internal forces always come in third-law pairs **between members of the system**. Their net contribution to $\\vec F_{net}$ is identically zero, however complicated the interactions are.",
        detail: "This is why you cannot lift yourself by pulling on your own belt, and why the frantic collisions inside an exploding firework have no effect whatsoever on the parabola traced by its center of mass. Only forces crossing the system boundary count.",
      },
      {
        term: 'The com of an exploding projectile',
        kind: 'insight',
        statement: "If a projectile explodes in mid-flight (and debris exchange only internal forces), the center of mass of the fragments **continues on the original parabolic trajectory**: gravity, the lone external force, still obeys $M\\vec a_{com} = M\\vec g$.",
        detail: "Fragments may fly wildly, but their mass-weighted average position stays on the parabola until pieces start hitting the ground (which is an external force). Divers, gymnasts and cannon shells all illustrate the same bookkeeping: rearrange yourself however you like — your com is not negotiable.",
      },
      {
        term: "Newton's Second Law for a System of Particles: solution protocol",
        kind: "method",
        statement: "**Solve Newton's Second Law for a System of Particles problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is center of mass, momentum and impulse; the working equation is $\\vec p = m\\vec v$, $\\vec J = \\Delta\\vec p = \\int\\vec F\\,dt$, $M\\vec a_{\\text{com}} = \\vec F_{\\text{net}}$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person); closed plus isolated for strict conservation; impulse is vector area under $F(t)$.",
      },
      {
        term: "Newton's Second Law for a System of Particles: scales and validity",
        kind: "insight",
        statement: "**Newton's Second Law for a System of Particles lives at $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person) and the textbook model holds while closed plus isolated for strict conservation; impulse is vector area under $F(t)$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Newton's Second Law for a System of Particles calculation gives seconds when $\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$ demands meters, or a value orders of magnitude beyond $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Internal chaos, external calm",
        problem: "Three particles (total mass 6.0 kg) on a frictionless table are connected by springs and jerk about violently. Meanwhile a steady horizontal external force of 12 N acts on the system the whole time. Describe the motion of the center of mass.",
        steps: [
          { label: 'Only external forces count', text: "The spring forces are internal; they pair off by Newton's third law and contribute nothing to $\\vec F_{net}$." },
          { label: "Apply the com law", text: "$a_{com} = F_{net,ext}/M = 12\\ \\text{N}/6.0\\ \\text{kg} = 2.0\\ \\text{m/s}^2$ in the direction of the force — constant, regardless of the springs' antics." },
          { label: 'From rest', text: "If the system starts at rest, after $t = 3.0$ s the com has $v_{com} = a_{com}t = 6.0$ m/s and has traveled $x_{com} = \\frac12 a t^2 = 9.0$ m — while individual particles may have moved much more and in all directions." },
        ],
        result: "The com accelerates smoothly at $2.0\\ \\text{m/s}^2$ exactly as a 6.0 kg block would under 12 N. Internal forces never touch it.",
      },
      {
        title: "A firework shell explodes at the top of its arc",
        problem: "A 10 kg shell is launched and reaches the top of its trajectory moving horizontally at 50 m/s. There it explodes into two 5.0 kg fragments. Fragment 1 leaves with velocity $(80, -30)$ m/s relative to the ground. Find fragment 2's velocity, and the kinetic energy released by the blast.",
        steps: [
          { label: 'The com is unperturbed', text: "The explosion is internal to the shell system; the only external force is gravity, so immediately after the blast the com still moves at $(50, 0)$ m/s." },
          { label: 'Solve for fragment 2', text: "$M\\vec v_{com} = m_1\\vec v_1 + m_2\\vec v_2$ gives $(10)(50) = (5.0)(80) + (5.0)v_{2x}$, so $v_{2x} = 20$ m/s; and $0 = (5.0)(-30) + (5.0)v_{2y}$, so $v_{2y} = +30$ m/s." },
          { label: 'Check the energy', text: "Before: $K = \\frac12 (10)(50^2) = 12{,}500$ J. After: $\\frac12(5)(80^2+30^2) + \\frac12(5)(20^2+30^2) = 18{,}250 + 3{,}250 = 21{,}500$ J." },
          { label: 'Account for it', text: "The extra $9{,}000$ J came from the chemical energy of the explosive — momentum conservation says nothing about energy, which need not be conserved in an explosion." },
        ],
        result: "Fragment 2 moves at $(20, +30)$ m/s; the blast added 9.0 kJ of kinetic energy while leaving the com's parabola untouched. Both fragments continue to fall under gravity, and their com keeps tracing the original arc.",
      },
    ],
    keyTakeaways: [
      "$M\\vec a_{com} = \\vec F_{net,ext}$: the center of mass moves as if all mass were concentrated there and only external forces acted.",
      "Internal forces cancel in pairs by Newton's third law — no matter how violent, they can never accelerate the com of an isolated system.",
      "An exploding projectile's com follows the original parabola until fragments interact with the ground (an external force).",
    ],
    quiz: [
      {
        q: "A cannonball fired at 30° explodes at the top of its arc into a dozen fragments (air drag negligible). While all fragments are still airborne, the center of mass of the fragments:",
        options: [
          'moves in a straight line at constant speed',
          'follows the parabola the unbroken ball would have followed',
          'drops straight down from the explosion point',
          'follows a parabola, but with a smaller horizontal speed',
        ],
        answer: 1,
        explanation: "The explosion supplies only internal forces; gravity remains the only external one, so $M\\vec a_{com} = M\\vec g$ still holds and the com traces the original projectile parabola, horizontal velocity unchanged at its launch value's x-component.",
      },
      {
        q: "A 60 kg astronaut floats in deep space and throws a 2.0 kg tool kit away. Ignoring gravity, the center of mass of the astronaut-plus-kit system:",
        options: [
          'moves in the direction the kit was thrown',
          'moves opposite to the kit',
          'remains at rest (or in uniform motion) — the throw is internal',
          'oscillates back and forth as the kit and astronaut separate',
        ],
        answer: 2,
        explanation: "The astronaut and kit exert equal and opposite forces on each other — an internal pair. With no external force, $\\vec a_{com} = 0$: the com stays fixed while the two bodies recoil about it.",
      },
      {
        q: "Which force can change the velocity of a system's center of mass?",
        options: [
          'a spring inside the system connecting two of its parts',
          'the gravitational pull one part of the system exerts on another part',
          'a push from a person outside the system',
          'an internal collision between two fragments of the system',
        ],
        answer: 2,
        explanation: "Only external forces appear in $\\vec F_{net,ext}$. Springs, mutual gravitation and collisions between members of the system are all internal pairs that cancel identically.",
      },
    ],
  },

  // ------------------------------------------------------- 9.3
  {
    sectionId: 'hall-ch9-s3',
    readingTime: 5,
    intro: "Momentum is the oldest organizing quantity in mechanics — Newton's own Principia writes the second law in terms of it. For a single particle it is just mass times velocity; for a system it is total mass times com velocity, which makes the two previous sections snap together into one law: force is the rate of change of momentum.",
    objectives: [
      "Define linear momentum and compute it for particles and systems",
      "Relate the total momentum of a system to the motion of its center of mass: $\\vec P = M\\vec v_{com}$",
      "Write Newton's second law in its momentum form $\\vec F_{net} = d\\vec P/dt$ and explain its advantages",
    ],
    concepts: [
      {
        term: 'Linear momentum',
        kind: 'definition',
        statement: "The **linear momentum** of a particle is $$\\vec p = m\\vec v,$$ a vector in the direction of motion with units kg·m/s (equivalently N·s). The momentum of a system is the vector sum $\\vec P = \\sum \\vec p_i$.",
        detail: "Momentum measures 'quantity of motion': a 4000 kg truck crawling at 2 m/s carries the same magnitude of momentum as a 1.0 kg ball hurled at 8000 m/s. Because it is a vector, equal and opposite momenta cancel exactly — two skaters pulling apart have zero total momentum.",
      },
      {
        term: 'Momentum of a system',
        kind: 'theorem',
        statement: "The total momentum of a system equals the total mass times the velocity of the center of mass: $$\\vec P = \\sum m_i \\vec v_i = M\\vec v_{com}.$$ A system can carry zero total momentum while its parts carry a great deal (equal and opposite).",
        detail: "Differentiate $M\\vec r_{com} = \\sum m_i \\vec r_i$ and the identity follows. Two identical carts approaching each other at 3 m/s have $\\vec P = 0$ and a stationary com — yet 9 J of kinetic energy rides in that frame. Momentum and energy bookkeep different things.",
      },
      {
        term: "Newton's second law, momentum form",
        kind: 'law',
        statement: "$$\\vec F_{net} = \\frac{d\\vec p}{dt} = \\frac{d(m\\vec v)}{dt}$$ For constant mass this reduces to $\\vec F = m\\vec a$, but the momentum form is the deeper statement: it survives into relativity, into variable-mass problems, and into the system form $\\vec F_{net,ext} = d\\vec P/dt$.",
        detail: "This is literally how Newton wrote the law ('the change of motion is proportional to the motive force impressed'). It also generalizes cleanly: for a system, $d\\vec P/dt = M\\vec a_{com}$ reproduces Section 9.2, and in Chapter 11 the angular cousin $\\vec\\tau_{net} = d\\vec L/dt$ will run the same play for rotation.",
      },
      {
        term: "Linear Momentum: solution protocol",
        kind: "method",
        statement: "**Solve Linear Momentum problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is center of mass, momentum and impulse; the working equation is $\\vec p = m\\vec v$, $\\vec J = \\Delta\\vec p = \\int\\vec F\\,dt$, $M\\vec a_{\\text{com}} = \\vec F_{\\text{net}}$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person); closed plus isolated for strict conservation; impulse is vector area under $F(t)$.",
      },
      {
        term: "Linear Momentum: scales and validity",
        kind: "insight",
        statement: "**Linear Momentum lives at $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person) and the textbook model holds while closed plus isolated for strict conservation; impulse is vector area under $F(t)$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Linear Momentum calculation gives seconds when $\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$ demands meters, or a value orders of magnitude beyond $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Two blocks, one stationary com",
        problem: "A 2.0 kg block slides east at 3.0 m/s on a frictionless floor; a 4.0 kg block slides west at 1.5 m/s. Find the total momentum and the velocity of the center of mass. Then compare with a second 4.0 kg block moving east at 1.5 m/s instead.",
        steps: [
          { label: 'Opposite case', text: "Take east as $+x$: $P_x = (2.0)(+3.0) + (4.0)(-1.5) = 6.0 - 6.0 = 0$. The com is at rest: $v_{com} = P/M = 0/6.0 = 0$, even though both blocks move." },
          { label: 'Kinetic energy contrast', text: "The system still carries $K = \\frac12(2)(9) + \\frac12(4)(2.25) = 9.0 + 4.5 = 13.5$ J — all of it 'internal' to the com frame. Zero momentum does not mean zero motion." },
          { label: 'Same-direction case', text: "With the 4.0 kg block also eastward: $P_x = 6.0 + 6.0 = 12\\ \\text{kg}\\cdot\\text{m/s}$, and $v_{com} = 12/6.0 = 2.0$ m/s east — between the two blocks, closer to the slower heavy one." },
        ],
        result: "Momentum is a vector: reversing one velocity changed $\\vec P$ from 12 kg·m/s east to zero without touching either speed. The com velocity tracks $\\vec P$, not the speeds.",
      },
      {
        title: "Momentum change for a bounced ball",
        problem: "A 0.30 kg ball moves east at 6.0 m/s, hits a wall, and rebounds west at 6.0 m/s. What is its change in momentum?",
        steps: [
          { label: 'Before', text: "$\\vec p_i = (0.30)(+6.0) = +1.8\\ \\text{kg}\\cdot\\text{m/s}$ (east)." },
          { label: 'After', text: "$\\vec p_f = (0.30)(-6.0) = -1.8\\ \\text{kg}\\cdot\\text{m/s}$; the speed is the same but the momentum has fully reversed." },
          { label: 'The change', text: "$\\Delta \\vec p = \\vec p_f - \\vec p_i = -3.6\\ \\text{kg}\\cdot\\text{m/s}$ — twice the magnitude of $\\vec p$ itself. This doubled change is why bouncing hurts more than sticking, the theme of Section 9.4." },
        ],
        result: "$\\Delta p = 3.6\\ \\text{kg}\\cdot\\text{m/s}$ westward, delivered by the wall's impulse; the wall feels an equal and opposite +3.6 kg·m/s.",
      },
    ],
    keyTakeaways: [
      "Linear momentum $\\vec p = m\\vec v$ is a vector; the system momentum is $\\vec P = \\sum \\vec p_i = M\\vec v_{com}$.",
      "Newton's second law in its original form is $\\vec F_{net} = d\\vec p/dt$ — more general than $\\vec F = m\\vec a$ and the gateway to impulse and conservation results.",
      "A system can have zero total momentum and large kinetic energy: momentum cancellation says nothing about energy, which is a scalar.",
    ],
    quiz: [
      {
        q: "A 4.0 kg object moves at 3.0 m/s north while a 2.0 kg object moves at 6.0 m/s south. The total momentum of the two-object system is:",
        options: [
          '24 kg·m/s north',
          '24 kg·m/s south',
          'zero',
          '12 kg·m/s north',
        ],
        answer: 2,
        explanation: "$P = (4.0)(3.0)$ north $+ (2.0)(6.0)$ south $= 12 - 12 = 0$. The momenta are equal and opposite, so the com of the pair is at rest — though the kinetic energy is 36 J.",
      },
      {
        q: "The momentum form $\\vec F_{net} = d\\vec p/dt$ is preferred over $\\vec F = m\\vec a$ because it:",
        options: [
          'is easier to remember',
          'remains valid for systems and in relativistic and variable-mass situations',
          'avoids using vectors',
          'holds even when the net force is nonzero and the mass is zero',
        ],
        answer: 1,
        explanation: "The momentum form is the deeper statement of the law: it survives where $m\\vec a$ fails — rockets shedding mass, relativistic speeds — and generalizes immediately to systems via $\\vec P = M\\vec v_{com}$.",
      },
      {
        q: "Under what condition does the total momentum of a system equal $M\\vec v_{com}$?",
        options: [
          'only when all particles have the same velocity',
          'only when the system is in equilibrium',
          'always — it is an identity following from differentiating the definition of the com',
          'only when no external forces act',
        ],
        answer: 2,
        explanation: "Differentiate $M\\vec r_{com} = \\sum m_i \\vec r_i$: the left side gives $M\\vec v_{com}$, the right side $\\sum m_i \\vec v_i = \\sum \\vec p_i$. No physics is needed — it is bookkeeping, valid for every system at every instant.",
      },
    ],
  },

  // ------------------------------------------------------- 9.4
  {
    sectionId: 'hall-ch9-s4',
    readingTime: 7,
    intro: "A collision is a brief, violent affair: a golf ball and a club touch for half a millisecond while the force climbs to kilonewtons. The graph of force against time may be too jagged to matter — what matters is its area. That area is the impulse, and the impulse-momentum theorem says it equals, exactly, the change in momentum. This single equation is the physics of airbags, crumple zones and bent knees.",
    objectives: [
      "State and apply the impulse-momentum theorem $\\vec J = \\int \\vec F\\,dt = \\Delta\\vec p$",
      "Compute impulse from an F-t graph, including the half-sine pulse of a realistic impact",
      "Explain how extending collision time reduces peak force in safety design",
    ],
    concepts: [
      {
        term: 'Collision and impulsive force',
        kind: 'definition',
        statement: "A **collision** is an interaction lasting a short time $\\Delta t$ during which a relatively large **impulsive force** acts. During the collision this force dwarfs the ordinary external forces (gravity, friction), so to excellent approximation the colliding bodies form an isolated system for the duration of contact.",
        detail: "'Short' is relative: a bat meets a ball for ~1 ms, a car crumples for ~100 ms, two galaxies collide for 100 million years. In each case the collision force so dominates the ambient forces that momentum bookkeeping can ignore everything else for the duration.",
      },
      {
        term: 'Impulse and the impulse-momentum theorem',
        kind: 'theorem',
        statement: "The **impulse** of the collision force is the time integral $$\\vec J = \\int_{t_i}^{t_f} \\vec F(t)\\,dt,$$ the area under the force-time curve, and $$\\vec J = \\vec p_f - \\vec p_i = \\Delta\\vec p.$$ Impulse and momentum share units of kg·m/s = N·s, and the relation holds component by component.",
        detail: "The proof is direct integration of $\\vec F = d\\vec p/dt$. Impulse is a vector in the direction of the average force. The theorem is the second law, integrated — which is why it works even when the instantaneous force is unknown in detail, as long as its time integral can be measured or modeled.",
      },
      {
        term: 'Average force and the physics of safety',
        kind: 'method',
        statement: "Define the average force as $F_{avg} = J/\\Delta t$. For a fixed momentum change, stretching the collision time shrinks the force: **$F_{avg} = \\Delta p/\\Delta t$** is the design equation of airbags, helmet padding, catching with give, and landing with bent knees.",
        detail: "A half-sine force pulse of peak $F_{max}$ and duration $\\Delta t$ carries $J = \\frac{2}{\\pi}F_{max}\\Delta t \\approx 0.637 F_{max}\\Delta t$. Note the trade: the same impulse can be a huge force for a short time or a modest force for a long one — the passenger prefers the second.",
      },
      {
        term: "Collision and Impulse: solution protocol",
        kind: "method",
        statement: "**Solve Collision and Impulse problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is center of mass, momentum and impulse; the working equation is $\\vec p = m\\vec v$, $\\vec J = \\Delta\\vec p = \\int\\vec F\\,dt$, $M\\vec a_{\\text{com}} = \\vec F_{\\text{net}}$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person); closed plus isolated for strict conservation; impulse is vector area under $F(t)$.",
      },
      {
        term: "Collision and Impulse: scales and validity",
        kind: "insight",
        statement: "**Collision and Impulse lives at $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person) and the textbook model holds while closed plus isolated for strict conservation; impulse is vector area under $F(t)$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Collision and Impulse calculation gives seconds when $\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$ demands meters, or a value orders of magnitude beyond $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person), recheck the setup before trusting the arithmetic.",
      },
    ],
    figures: [
      {
        caption: "Impulse as area. A club strikes a 45 g golf ball for $\\Delta t = 0.50$ ms with a half-sine force pulse of peak $F_{max} = 9.9$ kN. The shaded area is the impulse: $$J = \\int F\\,dt = \\frac{2}{\\pi}F_{max}\\Delta t = (0.637)(9900\\ \\text{N})(5.0\\times10^{-4}\\ \\text{s}) \\approx 3.15\\ \\text{N}\\cdot\\text{s},$$ enough for $v = J/m = 3.15/0.045 = 70$ m/s — a 252 km/h drive. The dashed line marks the equivalent flat force $F_{avg} = J/\\Delta t = 6.3$ kN.",
        svg: `<svg viewBox="0 0 460 280" width="100%" role="img" aria-label="Impulse as the area under a force-time curve" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><path d="M60,240 Q135,-120 210,240 Z" fill="currentColor" fill-opacity="0.18"/><path d="M60,240 Q135,-120 210,240" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="60" y1="240" x2="410" y2="240" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="240" x2="60" y2="40" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="125" x2="210" y2="125" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4" opacity="0.8"/><circle cx="135" cy="60" r="4" fill="currentColor"/><g stroke="currentColor" stroke-width="1"><line x1="60" y1="236" x2="60" y2="244"/><line x1="135" y1="236" x2="135" y2="244"/><line x1="210" y1="236" x2="210" y2="244"/><line x1="285" y1="236" x2="285" y2="244"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="135" y="258">0.25</text><text x="210" y="258">0.50</text><text x="285" y="258">0.75</text><text x="60" y="258">0</text></g><text x="390" y="272" font-size="11" fill="currentColor" text-anchor="end">t (ms)</text><text x="46" y="60" font-size="11" fill="currentColor" text-anchor="end">F (kN)</text><text x="135" y="46" font-size="11" fill="currentColor" text-anchor="middle">F max = 9.9 kN</text><text x="210" y="112" font-size="10.5" fill="currentColor" text-anchor="end">F avg = 6.3 kN</text><text x="135" y="218" font-size="11.5" fill="currentColor" text-anchor="middle">J = ∫F dt ≈ 3.15 N·s</text><text x="150" y="36" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.8">half-sine pulse, contact time 0.50 ms</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "A golf ball leaves the tee",
        problem: "A club exerts the half-sine force pulse of the figure on a 45 g golf ball initially at rest: peak force 9.9 kN, contact time 0.50 ms. Find the impulse and the launch speed.",
        steps: [
          { label: 'Model the pulse', text: "For a half-sine $F(t) = F_{max}\\sin(\\pi t/\\Delta t)$ on $0 \\le t \\le \\Delta t$, the area is $J = \\int_0^{\\Delta t} F_{max}\\sin(\\pi t/\\Delta t)\\,dt = \\frac{2}{\\pi}F_{max}\\Delta t$." },
          { label: 'Compute the impulse', text: "$J = (0.637)(9900\\ \\text{N})(5.0\\times10^{-4}\\ \\text{s}) = 3.15\\ \\text{N}\\cdot\\text{s}$, directed along the drive." },
          { label: 'Convert to speed', text: "The ball starts at rest, so $J = \\Delta p = mv$: $v = 3.15/0.045 = 70$ m/s $= 252$ km/h — a professional-grade drive." },
          { label: 'Sanity check the average force', text: "$F_{avg} = J/\\Delta t = 3.15/5.0\\times10^{-4} = 6.3$ kN, about 14,000 times the ball's 0.44 N weight: gravity was indeed negligible during contact." },
        ],
        result: "$J = 3.15\\ \\text{N}\\cdot\\text{s}$ and $v = 70$ m/s. The same arithmetic run in reverse tells you the impulse the ball delivered back to the club: $-3.15$ N·s, exactly.",
      },
      {
        title: "Bend your knees",
        problem: "A 70 kg person drops from a 2.0 m ledge and lands at 6.3 m/s. Compare the average force on the legs when landing stiff-legged (stopping in 0.020 s) versus with bent knees (0.50 s).",
        steps: [
          { label: 'Impulse required', text: "The momentum change is $J = \\Delta p = (70)(6.3) = 441\\ \\text{N}\\cdot\\text{s}$ upward, no matter how it is delivered." },
          { label: 'Stiff-legged', text: "$F_{avg} = J/\\Delta t = 441/0.020 \\approx 2.2\\times10^{4}$ N — about 32 times body weight (686 N), enough to fracture a heel." },
          { label: 'Knees bent', text: "$F_{avg} = 441/0.50 \\approx 880$ N, only 1.3 times body weight: a comfortable stop. (Strictly the ground must also support the weight; the point stands — lengthening $\\Delta t$ by a factor of 25 cut the force by 25.)" },
        ],
        result: "Identical impulse, forces 22 kN versus 0.88 kN. The whole job of an airbag or a crumple zone is to buy collision time.",
      },
    ],
    keyTakeaways: [
      "Impulse is the area under the $F(t)$ curve, and $\\vec J = \\Delta\\vec p$ always — no matter how complicated the force's time profile.",
      "A half-sine pulse of peak $F_{max}$ and width $\\Delta t$ carries $J = \\frac{2}{\\pi}F_{max}\\Delta t \\approx 0.64 F_{max}\\Delta t$; the average force is $F_{avg} = J/\\Delta t$.",
      "For fixed $\\Delta p$, stretching the contact time $\\Delta t$ shrinks the force in inverse proportion — the design principle behind every safety device that deforms.",
    ],
    quiz: [
      {
        q: "During a collision the force on a ball varies as a complicated spike. Which quantity is guaranteed to equal the ball's change in momentum?",
        options: [
          'the peak force times the collision time',
          'the area under the force-time curve',
          'the average force divided by the collision time',
          'the peak force divided by the mass of the ball',
        ],
        answer: 1,
        explanation: "$\\vec J = \\int \\vec F\\,dt$ is exactly $\\Delta\\vec p$. Peak times duration would overestimate a spike (it only matches a flat pulse), and dividing by time has the wrong units.",
      },
      {
        q: "Two identical eggs fall onto different surfaces and stop from the same speed. Egg A stops on concrete ($\\Delta t \\approx 1$ ms); egg B sinks into a 25-mm foam pad ($\\Delta t \\approx 25$ ms). The average force on egg B is roughly:",
        options: [
          '25 times larger than on egg A',
          'the same as on egg A',
          '1/25 of the force on egg A',
          'zero, because the foam does not push back',
        ],
        answer: 2,
        explanation: "Both eggs need the same impulse $\\Delta p$. Since $F_{avg} = \\Delta p / \\Delta t$, stretching the stopping time by a factor of 25 divides the average force by 25 — the whole reason packaging foam exists.",
      },
      {
        q: "A 0.15 kg baseball arrives at 40 m/s and leaves in the opposite direction at 50 m/s after 2.0 ms of contact. The impulse the bat delivered has magnitude:",
        options: [
          '1.5 N·s',
          '4.5 N·s',
          '7.5 N·s',
          '13.5 N·s',
        ],
        answer: 3,
        explanation: "Take the outgoing direction as positive: $\\Delta p = m(v_f - v_i) = 0.15\\,(50 - (-40)) = 0.15 \\times 90 = 13.5$ N·s. The reversal makes the impulse larger than either momentum alone; the average force is $13.5/0.0020 = 6.8$ kN.",
      },
      {
        q: "For a half-sine force pulse with peak $F_{max}$ lasting $\\Delta t$, the impulse equals:",
        options: [
          `$F_{max}\\Delta t$`,
          `$\\frac{1}{2}F_{max}\\Delta t$`,
          `$\\frac{2}{\\pi}F_{max}\\Delta t$`,
          `$\\pi F_{max}\\Delta t$`,
        ],
        answer: 2,
        explanation: "The integral of a half sine over its half-period is $2/\\pi \\approx 0.637$ of the bounding rectangle $F_{max}\\Delta t$. A triangular pulse would give $\\frac12 F_{max}\\Delta t$; a flat pulse the full rectangle — always read the area for what it is.",
      },
    ],
  },

  // ------------------------------------------------------- 9.5
  {
    sectionId: 'hall-ch9-s5',
    readingTime: 6,
    intro: "If no impulse comes from outside — nothing pushes on the system from beyond its boundary — the total momentum cannot change. Conservation of linear momentum is the workhorse of collision physics: it holds even when energy is devoured by crumpling metal, and it even works one axis at a time. Recoil, rocketry and radioactive decay all surrender to the same bookkeeping.",
    objectives: [
      "Define closed and isolated systems, the two conditions behind momentum conservation",
      "Apply $\\vec P_i = \\vec P_f$ to recoil, explosion and decay problems, including component-by-component",
      "Recognize when only one component of momentum is conserved, and exploit it",
    ],
    concepts: [
      {
        term: 'Closed and isolated systems',
        kind: 'definition',
        statement: "A system is **closed** if no matter crosses its boundary, and **isolated** if no net external force acts on it. For such a system the total momentum is conserved. During a brief collision, colliding bodies are effectively isolated even when ordinary forces act, because the impulsive contact forces dwarf them.",
        detail: "The definition is a modeling choice: the boundary is wherever you draw it. The plus-and-minus bookkeeping of internal forces (Newton's third law) is what makes the total of a closed system insensitive to everything happening inside.",
      },
      {
        term: 'Conservation of linear momentum',
        kind: 'law',
        statement: "If the system is closed and isolated, $$\\vec P = \\text{constant}: \\qquad \\vec P_i = \\vec P_f.$$ Components work independently: if the net external force has no $x$-component, then $P_x$ alone is conserved — gravity acting vertically does not disturb horizontal momentum.",
        detail: "This follows from $\\vec F_{net,ext} = d\\vec P/dt$: zero force means constant $\\vec P$. It survives relativity (with the corrected momentum) and quantum mechanics — conservation of momentum is anchored in the deep symmetry that the laws of physics are the same everywhere in space.",
      },
      {
        term: 'Recoil as a reverse collision',
        kind: 'insight',
        statement: "Explosions, decays and launches are collisions run backward: a system at rest tears itself into pieces whose momenta must still total zero. A cannon that fires a shell forward recoils; a nucleus that decays recoils; a rocket is a continuous version of the same trick.",
        detail: "In one dimension the recoil speed of the rest of the system is automatic: $m_1 v_1 + m_2 v_2 = 0$ means the light fragment moves fast, the heavy fragment slowly, in inverse proportion to their masses.",
      },
      {
        term: "Conservation of Linear Momentum: solution protocol",
        kind: "method",
        statement: "**Solve Conservation of Linear Momentum problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is center of mass, momentum and impulse; the working equation is $\\vec p = m\\vec v$, $\\vec J = \\Delta\\vec p = \\int\\vec F\\,dt$, $M\\vec a_{\\text{com}} = \\vec F_{\\text{net}}$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person); closed plus isolated for strict conservation; impulse is vector area under $F(t)$.",
      },
      {
        term: "Conservation of Linear Momentum: scales and validity",
        kind: "insight",
        statement: "**Conservation of Linear Momentum lives at $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person) and the textbook model holds while closed plus isolated for strict conservation; impulse is vector area under $F(t)$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Conservation of Linear Momentum calculation gives seconds when $\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$ demands meters, or a value orders of magnitude beyond $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Throwing a ball on frictionless ice",
        problem: "A 45 kg skater at rest on frictionless ice throws a 5.0 kg medicine ball horizontally at 8.0 m/s (relative to the ice). What is her recoil speed?",
        steps: [
          { label: 'Set up conservation', text: "Skater-plus-ball is closed; the ice is frictionless and the throw is brief, so horizontal external impulse is negligible: $P_x$ is conserved." },
          { label: 'Initial momentum', text: "$P_{x,i} = 0$ (everything at rest)." },
          { label: 'Final momentum', text: "$0 = (5.0)(+8.0) + (45.0)v_s$, so $v_s = -40/45 = -0.89$ m/s: she drifts backward at 0.89 m/s." },
          { label: 'Energy note', text: "Her muscles supplied the energy — 160 J for the ball plus her 17.8 J share — none of which momentum conservation tracks. The two laws answer different questions." },
        ],
        result: "Recoil speed 0.89 m/s backward. If she had thrown a 1.0 kg dumbbell at the same speed, her recoil would drop to 0.18 m/s — light projectiles move the thrower least.",
      },
      {
        title: "Recoil of a radium decay",
        problem: "A radium-226 nucleus at rest decays into radon-222 plus an alpha particle (helium nucleus, 4 u) emitted at $1.5\\times10^7$ m/s. Find the recoil speed of the radon-222.",
        steps: [
          { label: 'Isolated system', text: "Nothing external pushes on the nucleus during the decay: total momentum after must equal the zero before." },
          { label: 'Bookkeeping', text: "$0 = (4\\ \\text{u})(1.5\\times10^7) + (222\\ \\text{u})v_{Rn}$, so $v_{Rn} = -\\frac{(4)(1.5\\times10^7)}{222} = -2.7\\times10^5$ m/s." },
          { label: 'Check the scale', text: "The heavy daughter moves at $1/55.5$ of the alpha's speed — momentum splits inversely with mass, kinetic energy (which favors the light particle, $\\propto 1/m$) does not." },
        ],
        result: "The radon nucleus recoils at $2.7\\times10^5$ m/s. Nuclear physicists reconstruct decays exactly this way: unseen particles are inferred from missing momentum.",
      },
    ],
    keyTakeaways: [
      "Momentum is conserved for a closed, isolated system — and component-by-component whenever the net external force has no component along that axis.",
      "During brief collisions ordinary external forces are negligible, so colliding bodies may always be treated as isolated for the contact duration.",
      "Recoil, explosions and radioactive decays are 'reverse collisions': from rest, fragments separate with momenta summing to zero, speeds inversely proportional to masses.",
    ],
    quiz: [
      {
        q: "A shell at the top of its arc explodes into three fragments. Which quantity of the fragment system is conserved during the explosion (neglecting air drag)?",
        options: [
          'kinetic energy and total momentum',
          'total momentum, but not kinetic energy',
          'kinetic energy, but not total momentum',
          'neither, since the com accelerates downward',
        ],
        answer: 1,
        explanation: "The explosion is internal, so total momentum is conserved — but chemical energy converts to kinetic energy, so K increases. Gravity acts throughout, yet it does not spoil momentum conservation at any instant; it simply accelerates the com of the system along the parabola.",
      },
      {
        q: "Two skaters, initially at rest, push off each other. Skater A (60 kg) moves off at 2.0 m/s. The 40 kg skater B moves:",
        options: [
          'at 2.0 m/s in the same direction',
          'at 3.0 m/s in the opposite direction',
          'at 1.33 m/s in the opposite direction',
          'not at all, since she did not push',
        ],
        answer: 1,
        explanation: "Total momentum stays zero: $(60)(2.0) + (40)v_B = 0$ gives $v_B = -3.0$ m/s. The lighter skater always takes the larger speed — action-reaction forces are equal, but $a = F/m$ is not.",
      },
      {
        q: "A projectile fired at an angle explodes mid-flight (fragments stay airborne, drag negligible). Which component(s) of the fragments' total momentum are conserved?",
        options: [
          'both horizontal and vertical',
          'horizontal only',
          'vertical only',
          'neither',
        ],
        answer: 1,
        explanation: "The external force is gravity, which is purely vertical. $P_x$ has no external influence and is conserved exactly; $P_y$ changes at the rate $-Mg$. Conservation works axis by axis — use the clean axis and let the messy one go.",
      },
      {
        q: "Which system is NOT isolated for the purposes of momentum conservation?",
        options: [
          'two railway cars coupling on a level frictionless track',
          'a rifle and bullet during the few ms the bullet travels up the barrel',
          'a car braking hard to a stop on a dry road',
          'a radioactive nucleus during its decay',
        ],
        answer: 2,
        explanation: "The braking car's collision is with the road/Earth — external to the car system, delivering a large impulse. The other three involve only internal interactions during their brief events (rail friction and air drag on the cars are negligible over the coupling moment).",
      },
    ],
  },

  // ------------------------------------------------------- 9.6
  {
    sectionId: 'hall-ch9-s6',
    readingTime: 6,
    intro: "Every collision conserves momentum; not every collision conserves kinetic energy. That single sentence sorts all collisions into three families — elastic, inelastic, and completely inelastic — and tells you which equations you may write down. The classification is worth internalizing before the algebra of the next two sections.",
    objectives: [
      "Classify collisions as elastic, inelastic or completely inelastic based on kinetic-energy bookkeeping",
      "Explain why momentum is conserved in every collision but kinetic energy generally is not, and where the 'lost' energy goes",
      "Compute velocities and kinetic-energy losses in completely inelastic collisions",
    ],
    concepts: [
      {
        term: 'Elastic collision',
        kind: 'definition',
        statement: "A collision is **elastic** if the system's total kinetic energy is the same before and after: $K_i = K_f$ (in addition to $\\vec P_i = \\vec P_f$). Collisions between hard steel balls, billiard balls, or atoms and molecules at ordinary energies are close to elastic.",
        detail: "During contact the bodies briefly store energy in elastic deformation and then pay it all back. On the atomic scale, gas molecules collide essentially elastically — which is why the ideal-gas model of Chapter 19 works at all.",
      },
      {
        term: 'Inelastic collision',
        kind: 'definition',
        statement: "A collision is **inelastic** if some kinetic energy converts to internal energy — deformation, heat, sound, rotation of the fragments' own parts. An inelastic collision in which the bodies **stick together** is called **completely inelastic**: the bodies share a common final velocity, and the kinetic-energy loss is the largest allowed by momentum conservation.",
        detail: "'Completely' does not mean all kinetic energy is lost: the com must keep moving (momentum is conserved), so even two lumps of putty retain the energy $\\frac12 M v_{com}^2$. The bookkeeping: $\\Delta E_{int} = K_i - K_f \\ge 0$ for every real collision.",
      },
      {
        term: 'What every collision conserves',
        kind: 'law',
        statement: "In **every** collision — elastic or not — the total momentum of the colliding system is conserved (contact forces are internal and dwarf external forces during the brief contact). Kinetic energy is conserved **only** in the elastic case: in all others, $K_f < K_i$ with the difference deposited as internal energy.",
        detail: "Total energy is always conserved; kinetic energy is only one of its costumes. When a 10 g bullet buries itself in a block and everything ends up warmer, momentum arithmetic is untouched — which is what makes inelastic problems solvable at all.",
      },
      {
        term: "Momentum and Kinetic Energy in Collisions: solution protocol",
        kind: "method",
        statement: "**Solve Momentum and Kinetic Energy in Collisions problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is center of mass, momentum and impulse; the working equation is $\\vec p = m\\vec v$, $\\vec J = \\Delta\\vec p = \\int\\vec F\\,dt$, $M\\vec a_{\\text{com}} = \\vec F_{\\text{net}}$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person); closed plus isolated for strict conservation; impulse is vector area under $F(t)$.",
      },
      {
        term: "Momentum and Kinetic Energy in Collisions: scales and validity",
        kind: "insight",
        statement: "**Momentum and Kinetic Energy in Collisions lives at $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person) and the textbook model holds while closed plus isolated for strict conservation; impulse is vector area under $F(t)$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Momentum and Kinetic Energy in Collisions calculation gives seconds when $\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$ demands meters, or a value orders of magnitude beyond $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person), recheck the setup before trusting the arithmetic.",
      },
    ],
    figures: [
      {
        caption: "Momentum versus kinetic energy, side by side. Top: an **elastic** collision — 2 kg at 4 m/s meets 6 kg at rest; the bodies separate with velocities $-2$ m/s and $+2$ m/s and $K$ is unchanged (16 J $\\to$ 16 J). Bottom: the **completely inelastic** version — the bodies stick and coast at 1 m/s; momentum is still 8 kg·m/s but $K$ drops from 16 J to 4 J, with 12 J (75%) converted to deformation and heating of the lumps.",
        svg: `<svg viewBox="0 0 460 350" width="100%" role="img" aria-label="Elastic collision versus completely inelastic collision with momentum and kinetic energy accounting" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><text x="230" y="20" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">ELASTIC — momentum and kinetic energy both conserved</text><text x="16" y="46" font-size="9.5" fill="currentColor" opacity="0.7">before</text><rect x="70" y="52" width="44" height="36" rx="3" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="92" y="74" font-size="10.5" fill="currentColor" text-anchor="middle">2 kg</text><line x1="118" y1="70" x2="164" y2="70" stroke="currentColor" stroke-width="2"/><polygon points="166,70 152,65 152,75" fill="currentColor"/><text x="142" y="60" font-size="10" fill="currentColor" text-anchor="middle">4 m/s</text><rect x="230" y="46" width="64" height="44" rx="3" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="262" y="72" font-size="10.5" fill="currentColor" text-anchor="middle">6 kg</text><text x="262" y="102" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.75">at rest</text><text x="16" y="116" font-size="9.5" fill="currentColor" opacity="0.7">after</text><rect x="70" y="124" width="44" height="36" rx="3" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="92" y="146" font-size="10.5" fill="currentColor" text-anchor="middle">2 kg</text><line x1="66" y1="142" x2="26" y2="142" stroke="currentColor" stroke-width="2"/><polygon points="24,142 38,137 38,147" fill="currentColor"/><text x="46" y="132" font-size="10" fill="currentColor" text-anchor="middle">2 m/s</text><rect x="240" y="118" width="64" height="44" rx="3" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="272" y="144" font-size="10.5" fill="currentColor" text-anchor="middle">6 kg</text><line x1="308" y1="140" x2="354" y2="140" stroke="currentColor" stroke-width="2"/><polygon points="356,140 342,135 342,145" fill="currentColor"/><text x="332" y="130" font-size="10" fill="currentColor" text-anchor="middle">2 m/s</text><text x="230" y="170" font-size="10.5" fill="currentColor" text-anchor="middle">p: 8 kg·m/s → 8 kg·m/s     K: 16 J → 16 J</text><line x1="30" y1="184" x2="430" y2="184" stroke="currentColor" stroke-width="1" opacity="0.15"/><text x="230" y="208" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">COMPLETELY INELASTIC — momentum conserved, K is not</text><text x="16" y="230" font-size="9.5" fill="currentColor" opacity="0.7">before</text><rect x="70" y="236" width="44" height="36" rx="3" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="92" y="258" font-size="10.5" fill="currentColor" text-anchor="middle">2 kg</text><line x1="118" y1="254" x2="164" y2="254" stroke="currentColor" stroke-width="2"/><polygon points="166,254 152,249 152,259" fill="currentColor"/><text x="142" y="244" font-size="10" fill="currentColor" text-anchor="middle">4 m/s</text><rect x="230" y="230" width="64" height="44" rx="3" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="262" y="256" font-size="10.5" fill="currentColor" text-anchor="middle">6 kg</text><text x="262" y="286" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.75">at rest</text><text x="16" y="306" font-size="9.5" fill="currentColor" opacity="0.7">after</text><rect x="150" y="294" width="120" height="40" rx="3" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="210" y="318" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">2 kg + 6 kg</text><line x1="274" y1="314" x2="320" y2="314" stroke="currentColor" stroke-width="2"/><polygon points="322,314 308,309 308,319" fill="currentColor"/><text x="298" y="304" font-size="10" fill="currentColor" text-anchor="middle">1 m/s</text><text x="230" y="344" font-size="10.5" fill="currentColor" text-anchor="middle">p: 8 kg·m/s → 8 kg·m/s     K: 16 J → 4 J  (12 J to internal energy)</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Bullet into a block",
        problem: "A 10 g bullet moving horizontally at 400 m/s buries itself in a 2.0 kg block resting on a frictionless surface. Find the final speed and the fraction of kinetic energy converted to internal energy.",
        steps: [
          { label: 'Type the collision', text: "The bullet stays embedded: completely inelastic — momentum conserved, kinetic energy not." },
          { label: 'Momentum bookkeeping', text: "$(0.010)(400) = (2.010)v$, so $v = 4.0/2.01 = 1.99$ m/s, just under 2 m/s." },
          { label: 'Energy audit', text: "$K_i = \\frac12(0.010)(400)^2 = 800$ J; $K_f = \\frac12(2.010)(1.99)^2 = 4.0$ J." },
          { label: 'The verdict', text: "796 J — 99.5% of the bullet's kinetic energy — became heat and deformation in block and bullet. This is why embedded bullets are hot." },
        ],
        result: "Final speed 1.99 m/s; 99.5% of the kinetic energy went to internal energy. Momentum marched through untouched.",
      },
      {
        title: "The equal-mass swap",
        problem: "A 2.0 kg glider at 4.0 m/s on an air track elastically strikes an identical 2.0 kg glider at rest. What are the final velocities?",
        steps: [
          { label: 'Write both laws', text: "Elastic means two equations: momentum $2.0(4.0) = 2.0v_{1f} + 2.0v_{2f}$ and kinetic energy $\\frac12(2)(16) = \\frac12(2)v_{1f}^2 + \\frac12(2)v_{2f}^2$." },
          { label: 'Solve', text: "Dividing through by the common mass: $4 = v_{1f} + v_{2f}$ and $16 = v_{1f}^2 + v_{2f}^2$. The only solution with distinct speeds is $v_{1f} = 0$, $v_{2f} = 4.0$ m/s (the other root restores the initial state)." },
          { label: 'Interpret', text: "Identical masses **swap velocities** in a 1D elastic collision — the incoming glider stops dead and the target takes over its velocity, momentum 8 kg·m/s and energy 16 J both intact." },
        ],
        result: "$v_{1f} = 0$, $v_{2f} = 4.0$ m/s. Newton's cradle is this example wearing a suit.",
      },
    ],
    keyTakeaways: [
      "Momentum is conserved in every collision; kinetic energy is conserved only in elastic ones.",
      "Completely inelastic collisions (bodies stick) lose the maximum kinetic energy allowed by momentum conservation — but never all of it, since the com keeps moving.",
      "'Lost' kinetic energy becomes internal energy — deformation, heat, sound — tracked by $\\Delta E_{int} = K_i - K_f \\ge 0$.",
    ],
    quiz: [
      {
        q: "Two lumps of putty collide head-on and stick. The collision is:",
        options: [
          'elastic, because momentum is conserved',
          'completely inelastic — the kinetic-energy loss is maximal',
          'elastic, because energy is conserved',
          'impossible to classify without the speeds',
        ],
        answer: 1,
        explanation: "Sticking defines the completely inelastic case. Momentum is still conserved, but no other outcome loses more kinetic energy while respecting that conservation.",
      },
      {
        q: "In which collision is kinetic energy conserved?",
        options: [
          'a car crumpling into a wall',
          'a meteorite burying itself in the ground',
          'two billiard balls colliding at moderate speed',
          'the bullet-into-block example above',
        ],
        answer: 2,
        explanation: "Hard, elastic bodies with little permanent deformation return their stored contact energy — billiard balls (and gas molecules) are the textbook elastic cases. The others convert the bulk of their kinetic energy to internal energy.",
      },
      {
        q: "A completely inelastic collision between a moving body and a stationary one always leaves the system with:",
        options: [
          'zero final kinetic energy',
          'final kinetic energy equal to the initial value',
          'the kinetic energy of the center-of-mass motion, $P^2/2M$',
          'more kinetic energy than it started with',
        ],
        answer: 2,
        explanation: "With all mass moving at $v_{com}$, the surviving kinetic energy is $\\frac12 M v_{com}^2 = P^2/2M$ — the minimum compatible with the conserved momentum. Everything in excess of that com motion is internal energy.",
      },
      {
        q: "A 1200 kg car at 20 m/s rear-ends a stationary 2400 kg truck and the two lock bumpers (completely inelastic). Their common speed is:",
        options: [
          '20 m/s',
          '13.3 m/s',
          '10 m/s',
          '6.7 m/s',
        ],
        answer: 3,
        explanation: "$(1200)(20) = (3600)v$ gives $v = 6.7$ m/s. The kinetic energy drops from 240 kJ to 80 kJ — the missing 160 kJ folded the metal.",
      },
    ],
  },

  // ------------------------------------------------------- 9.7
  {
    sectionId: 'hall-ch9-s7',
    readingTime: 8,
    intro: "One-dimensional elastic collisions are the rare problem you can solve in your head — once you know the trick. Momentum conservation plus kinetic-energy conservation collapse into a single statement about relative velocity: the speed of approach equals the speed of separation. From it come the general final-velocity formulas and the three iconic special cases every physicist carries around.",
    objectives: [
      "Derive and use the relative-speed relation $v_{1i} - v_{2i} = -(v_{1f} - v_{2f})$ for 1D elastic collisions",
      "Apply the general final-velocity formulas for arbitrary masses",
      "Predict the three special cases: equal masses, a massive target, a massive projectile",
    ],
    concepts: [
      {
        term: 'The elastic one-dimensional equations',
        kind: 'method',
        statement: "A 1D elastic collision obeys two equations: momentum, $$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f},$$ and kinetic energy, $$m_1 v_{1i}^2 + m_2 v_{2i}^2 = m_1 v_{1f}^2 + m_2 v_{2f}^2.$$ In the center-of-mass frame their solution is trivial: each velocity simply reverses.",
        detail: "The quadratic energy equation makes direct substitution messy. The professional move is to subtract the two equations in a way that factors the difference of squares, which is exactly the relative-speed trick of the next concept — turn the algebra into a linear relation first, then solve.",
      },
      {
        term: 'Relative speed reversal',
        kind: 'theorem',
        statement: "For any 1D elastic collision, $$v_{1i} - v_{2i} = -(v_{1f} - v_{2f}):$$ the speed of approach before the collision equals the speed of separation after it. In the center-of-mass frame the collision just flips both velocities.",
        detail: "Proof sketch: divide the energy equation by 2, write each as $\\frac{m}{2}(v_i^2 - v_f^2) = \\frac{m}{2}(v_i - v_f)(v_i + v_f)$, and use the momentum difference $m_1(v_{1i} - v_{1f}) = -m_2(v_{2i} - v_{2f})$ to cancel the common factor. The relative velocity reverses — a statement true only for elastic collisions, and the fastest route to answers.",
      },
      {
        term: 'General final velocities',
        kind: 'theorem',
        statement: "Solving momentum plus the reversed relative velocity gives $$v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2}v_{1i} + \\frac{2m_2}{m_1 + m_2}v_{2i}, \\qquad v_{2f} = \\frac{2m_1}{m_1 + m_2}v_{1i} + \\frac{m_2 - m_1}{m_1 + m_2}v_{2i}.$$ (With a stationary target, set $v_{2i} = 0$.)",
        detail: "Check the limits: these formulas reduce to the velocity swap for $m_1 = m_2$, to reflection for a wall ($m_2 \\to \\infty$), and they conserve both momentum and energy identically — substitute and watch each check pass.",
      },
      {
        term: 'The three iconic cases',
        kind: 'insight',
        statement: "With target 2 initially at rest: (a) $m_1 = m_2$: the bodies **swap velocities** ($v_{1f} = 0$, $v_{2f} = v_{1i}$); (b) $m_2 \\gg m_1$: the light projectile **rebounds** ($v_{1f} \\approx -v_{1i}$) while the wall barely stirs ($v_{2f} \\approx 0$); (c) $m_1 \\gg m_2$: the heavy projectile **plows on** ($v_{1f} \\approx v_{1i}$) and the light target shoots ahead at $2v_{1i}$.",
        detail: "This is why a tennis ball fired at a bowling ball comes straight back, and why a slow heavy truck that nudges a ping-pong ball launches it at twice the truck's speed. It is also why neutron moderators are made of light nuclei: a neutron loses the most energy per collision when the target mass matches its own.",
      },
      {
        term: "Elastic Collisions in One Dimension: solution protocol",
        kind: "method",
        statement: "**Solve Elastic Collisions in One Dimension problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is center of mass, momentum and impulse; the working equation is $\\vec p = m\\vec v$, $\\vec J = \\Delta\\vec p = \\int\\vec F\\,dt$, $M\\vec a_{\\text{com}} = \\vec F_{\\text{net}}$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person); closed plus isolated for strict conservation; impulse is vector area under $F(t)$.",
      },
    ],
    examples: [
      {
        title: "Light projectile, heavy target",
        problem: "A 2.0 kg glider moving at 4.0 m/s elastically strikes a 6.0 kg glider at rest on an air track. Find both final velocities and verify the energy.",
        steps: [
          { label: 'Formulas with stationary target', text: "$v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2}v_{1i} = \\frac{2 - 6}{8}(4.0) = (-0.5)(4.0) = -2.0$ m/s; $v_{2f} = \\frac{2m_1}{m_1+m_2}v_{1i} = \\frac{4}{8}(4.0) = +2.0$ m/s." },
          { label: 'Relative-speed check', text: "Approach speed $v_{1i} - v_{2i} = 4.0$; separation speed $v_{1f} - v_{2f} = -2.0 - 2.0 = -4.0$. Reversed exactly — elastic confirmed." },
          { label: 'Momentum check', text: "$(2.0)(4.0) = 8.0$; after: $(2.0)(-2.0) + (6.0)(2.0) = -4 + 12 = 8.0$ kg·m/s. Conserved." },
          { label: 'Energy check', text: "Before: $\\frac12(2)(16) = 16$ J; after: $\\frac12(2)(4) + \\frac12(6)(4) = 4 + 12 = 16$ J. Conserved to the joule." },
        ],
        result: "$v_{1f} = -2.0$ m/s (bounces back), $v_{2f} = +2.0$ m/s. The light glider gave up three-quarters of its energy to the heavy one.",
      },
      {
        title: "Why moderators are made of light atoms",
        problem: "A neutron (mass 1 u) at speed $v$ elastically collides head-on with a stationary nucleus of mass $A$ u. Show that the fraction of its kinetic energy transferred is $4A/(1+A)^2$, and evaluate it for hydrogen and for lead.",
        steps: [
          { label: 'Neutron after speed', text: "With $m_1 = 1$, $m_2 = A$ (in u) and $v_{2i} = 0$: $v_{1f} = \\frac{1-A}{1+A}v$. The nucleus takes $v_{2f} = \\frac{2}{1+A}v$." },
          { label: 'Energy fraction lost by neutron', text: "The neutron keeps $\\left(\\frac{1-A}{1+A}\\right)^2$ of its energy, so the fraction transferred is $1 - \\left(\\frac{1-A}{1+A}\\right)^2 = \\frac{(1+A)^2 - (1-A)^2}{(1+A)^2} = \\frac{4A}{(1+A)^2}$." },
          { label: 'Hydrogen', text: "$A = 1$: fraction $= 4/4 = 1.00$ — a head-on hit on a proton hands over **all** the neutron's kinetic energy (it can stop dead)." },
          { label: 'Lead', text: "$A = 207$: fraction $= 828/208^2 \\approx 0.019$ — about 2%. Firing neutrons at lead is a terrible way to slow them; water works because its protons match the neutron mass." },
        ],
        result: "Fraction transferred $= 4A/(1+A)^2$: 100% on hydrogen, 2% on lead. Nuclear reactor moderators are water or graphite — light nuclei — by this exact arithmetic.",
      },
    ],
    keyTakeaways: [
      "A 1D elastic collision satisfies both momentum conservation and relative-speed reversal: $v_{1i} - v_{2i} = -(v_{1f} - v_{2f})$ — approach speed equals separation speed.",
      "The general formulas: $v_{1f} = \\frac{m_1-m_2}{m_1+m_2}v_{1i} + \\frac{2m_2}{m_1+m_2}v_{2i}$ and its partner; memorize the three special cases instead.",
      "Equal masses swap velocities; a heavy target reflects a light projectile; a heavy projectile plows through and flings the light target ahead at $2v_{1i}$.",
    ],
    quiz: [
      {
        q: "A 4.0 kg ball at 5.0 m/s elastically strikes a 12 kg ball at rest (head-on, 1D). The final velocities are:",
        options: [
          '$v_1 = -1.0$ m/s, $v_2 = +2.0$ m/s',
          '$v_1 = -2.5$ m/s, $v_2 = +2.5$ m/s',
          '$v_1 = 0$, $v_2 = +5.0$ m/s',
          '$v_1 = +1.25$ m/s, $v_2 = +1.25$ m/s',
        ],
        answer: 1,
        explanation: "$v_{1f} = \\frac{4-12}{16}(5.0) = -2.5$ m/s and $v_{2f} = \\frac{2(4)}{16}(5.0) = +2.5$ m/s. Check: momentum $20 = (4)(-2.5)+(12)(2.5)$ and $K = 50 = 12.5 + 37.5$ J — both conserved.",
      },
      {
        q: "In a one-dimensional elastic collision, the relative speed of approach equals the relative speed of separation. This statement:",
        options: [
          'holds for all collisions, elastic or not',
          'is equivalent to kinetic-energy conservation combined with momentum conservation',
          'is a separate empirical rule discovered after Newton',
          'holds only when one body is initially at rest',
        ],
        answer: 1,
        explanation: "It is derived by factoring the energy equation and canceling with the momentum difference — it packs the two conservation laws into one linear statement, valid for any masses and any initial velocities along the line of centers.",
      },
      {
        q: "A golf ball is fired head-on at a massive bowling ball at rest. To excellent approximation the golf ball:",
        options: [
          'stops dead and the bowling ball rolls away at the golf ball\'s speed',
          'bounces back with nearly its incoming speed',
          'continues at half its incoming speed',
          'sticks to the bowling ball',
        ],
        answer: 1,
        explanation: "The $m_2 \\gg m_1$ limit of the elastic formulas: $v_{1f} \\to -v_{1i}$ and $v_{2f} \\to 0$. The wall-like target returns all the energy because it takes essentially none — momentum transfer $2m_1 v_{1i}$ with negligible velocity.",
      },
      {
        q: "A heavy truck moving at 10 m/s elastically bumps a stationary ping-pong ball head-on. The ball leaves at approximately:",
        options: [
          '5 m/s',
          '10 m/s',
          '20 m/s',
          '40 m/s',
        ],
        answer: 2,
        explanation: "The $m_1 \\gg m_2$ case: the projectile's speed barely changes, $v_{2f} \\to 2v_{1i} = 20$ m/s. In the truck's frame the ball simply bounces off an approaching wall — doubling the ground-frame speed.",
      },
    ],
  },

  // ------------------------------------------------------- 9.8
  {
    sectionId: 'hall-ch9-s8',
    readingTime: 7,
    intro: "Most real collisions are glancing: billiard balls kiss at an angle and head off in different directions. Momentum is still a vector equation — which now means two scalar equations, one per axis — and if the collision is also elastic, energy supplies the third. The beautiful special case: identical bodies, one at rest, elastic — they always separate at right angles.",
    objectives: [
      "Set up the two component momentum equations for a glancing collision and know when to add the energy equation",
      "Prove and apply the 90-degree rule for equal-mass elastic collisions with a stationary target",
      "Describe glancing collisions in the center-of-mass frame and transform back to the lab frame",
    ],
    concepts: [
      {
        term: 'Glancing collision setup',
        kind: 'method',
        statement: "For a collision in the $xy$ plane, momentum conservation is two equations: $$P_x: \\quad m_1 v_{1ix} + m_2 v_{2ix} = m_1 v_{1fx}\\cos\\theta_1 + m_2 v_{2fx}\\cos\\theta_2,$$ and similarly for $P_y$ with $\\sin\\theta$ factors. If the collision is elastic, add $K_i = K_f$; if completely inelastic, set the final velocities equal instead.",
        detail: "Count your unknowns before diving in: two outgoing speeds and two outgoing angles are four unknowns; the two momentum equations plus energy (elastic) close the problem only if one unknown is given or measured. Real collision analysis — nuclear or vehicular — always combines conservation laws with measured data.",
      },
      {
        term: 'The 90-degree rule',
        kind: 'theorem',
        statement: "In an **elastic** collision between identical masses in which one is initially at rest, the two bodies depart along **perpendicular** directions: $\\theta_1 + \\theta_2 = 90^\\circ$. One of them may take all the speed (head-on limit, $90^\\circ \\to 0^\\circ + 90^\\circ$ counts too).",
        detail: "Proof: momentum $\\vec v_i = \\vec v_1 + \\vec v_2$ (masses cancel) means the three velocity vectors form a triangle; energy $v_i^2 = v_1^2 + v_2^2$ makes it a right triangle with $\\vec v_i$ as hypotenuse — so $\\vec v_1 \\perp \\vec v_2$. Watch two billiard balls collide: the cue ball's post-collision path and the object ball's path meet at a right angle.",
      },
      {
        term: 'The center-of-mass frame',
        kind: 'insight',
        statement: "In the com frame a two-body collision is always head-on: the momenta are equal and opposite before and after, so elastic scattering simply **rotates** the common velocity magnitude. Lab-frame results follow by adding $\\vec v_{com}$ back to every velocity.",
        detail: "This is why high-energy physicists live in the com frame: the physics is cleanest there, and the messy lab frame is recovered by one vector addition. Even for inelastic collisions the com frame splits the kinetic energy cleanly into com motion (untouchable, $\\frac12 M v_{com}^2$) and internal motion (the only part a collision can spend).",
      },
      {
        term: "Collisions in Two Dimensions: solution protocol",
        kind: "method",
        statement: "**Solve Collisions in Two Dimensions problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is center of mass, momentum and impulse; the working equation is $\\vec p = m\\vec v$, $\\vec J = \\Delta\\vec p = \\int\\vec F\\,dt$, $M\\vec a_{\\text{com}} = \\vec F_{\\text{net}}$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person); closed plus isolated for strict conservation; impulse is vector area under $F(t)$.",
      },
      {
        term: "Collisions in Two Dimensions: scales and validity",
        kind: "insight",
        statement: "**Collisions in Two Dimensions lives at $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person) and the textbook model holds while closed plus isolated for strict conservation; impulse is vector area under $F(t)$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Collisions in Two Dimensions calculation gives seconds when $\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$ demands meters, or a value orders of magnitude beyond $p\\sim 10^2\\ \\text{kg}\\cdot\\text{m/s}$ (running person), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "A glancing elastic collision of identical pucks",
        problem: "On frictionless ice, puck A (2.0 kg) moves east at 3.0 m/s and strikes identical puck B at rest. After the elastic glancing collision A moves at $53.1^\\circ$ north of east with speed 1.8 m/s. Find B's final velocity, and confirm the 90-degree rule.",
        steps: [
          { label: 'Conserve $P_x$', text: "Before: $P_x = (2.0)(3.0) = 6.0$. After: $(2.0)(1.8)\\cos 53.1^\\circ + (2.0)v_{Bx} = (3.6)(0.60) + 2.0 v_{Bx} = 2.16 + 2.0v_{Bx}$. Setting equal: $v_{Bx} = (6.0 - 2.16)/2.0 = 1.92$ m/s." },
          { label: 'Conserve $P_y$', text: "Before: $P_y = 0$. After: $(2.0)(1.8)\\sin 53.1^\\circ + (2.0)v_{By} = (3.6)(0.80) + 2.0v_{By} = 2.88 + 2.0v_{By} = 0$, so $v_{By} = -1.44$ m/s (south)." },
          { label: 'Assemble B', text: "$\\vec v_B = (1.92, -1.44)$ m/s: speed $= \\sqrt{3.69 + 2.07} = 2.4$ m/s at $\\arctan(1.44/1.92) = 36.9^\\circ$ south of east." },
          { label: 'Checks', text: "Angles: $53.1^\\circ + 36.9^\\circ = 90.0^\\circ$ — the rule holds. Energy: $\\frac12(2)(9.0) = 9.0$ J versus $\\frac12(2)(3.24) + \\frac12(2)(5.76) = 3.24 + 5.76 = 9.0$ J. Both laws satisfied." },
        ],
        result: "Puck B moves at 2.4 m/s, $36.9^\\circ$ south of east; A and B separate at exactly right angles — the elastic equal-mass signature.",
      },
      {
        title: "Collisions in Two Dimensions: momentum numbers",
        problem: "A ball of mass $0.25\\ \\text{kg}$ moves at $30\\ \\text{m/s}$. Find its momentum and the impulse needed to stop it.",
        steps: [
          { label: "Momentum", text: "$p = mv = 0.25\\times 30 = 7.5\\ \\text{kg}\\cdot\\text{m/s}$." },
          { label: "Impulse", text: "$J = \\Delta p = 0-7.5 = -7.5\\ \\text{N}\\cdot\\text{s}$." },
          { label: "Time sense", text: "A $-0.15\\ \\text{s}$ stop at $50\\ \\text{N}$ average force gives the same $J$." },
        ],
        result: "$p \\approx 7.5\\ \\text{kg}\\cdot\\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      "In 2D, momentum conservation is two scalar equations (one per axis); elasticity adds the energy equation — count unknowns before solving.",
      "Identical masses, elastic, target at rest: the outgoing velocities are perpendicular — the billiard player's 90-degree rule, provable by the velocity right-triangle.",
      "In the com frame every two-body collision is head-on and elastic scattering just rotates velocities; return to the lab by adding $\\vec v_{com}$ back.",
    ],
    quiz: [
      {
        q: "Two identical billiard balls collide elastically; one was at rest. After the collision the struck ball moves at 30° north of east. The cue ball must move:",
        options: [
          'at 30° south of east',
          'at 60° south of east',
          'due east',
          'at 90° south of east',
        ],
        answer: 1,
        explanation: "The 90-degree rule: the two outgoing paths are perpendicular, so the cue ball's direction is $90^\\circ - 30^\\circ = 60^\\circ$ on the other side of the original line of motion — 60° south of east.",
      },
      {
        q: "Why do you need the kinetic-energy equation when analyzing an elastic glancing collision?",
        options: [
          'momentum alone is not a vector equation',
          'there are more unknowns (two speeds and two angles) than the two momentum component equations',
          'energy is conserved in all collisions anyway',
          'the collision is usually inelastic',
        ],
        answer: 1,
        explanation: "Momentum gives two scalar equations for four unknowns. The energy equation supplies the third relation; a measurement of one angle or speed must supply the fourth.",
      },
      {
        q: "In the center-of-mass frame, an elastic collision between two bodies looks like:",
        options: [
          'both bodies stop after the collision',
          'the bodies exchange their speeds and reverse direction, always head-on',
          'the velocities keep their magnitudes but rotate to new directions',
          'one body takes all the kinetic energy',
        ],
        answer: 2,
        explanation: "Momentum conservation pins the momenta to be equal and opposite, and energy conservation pins their magnitudes — so elastic scattering in the com frame can only re-aim the velocities. The lab frame adds $\\vec v_{com}$ back.",
      },
      {
        q: "Puck A (2.0 kg) at 4.0 m/s east hits stationary puck B (2.0 kg); they stick together (completely inelastic, 2D). The combined puck moves:",
        options: [
          'east at 4.0 m/s',
          'east at 2.0 m/s',
          'in a direction that depends on where they stick',
          'east at 1.0 m/s',
        ],
        answer: 1,
        explanation: "Sticking means a single final velocity: $\\vec v_f = \\vec P/M = (2.0 \\times 4.0)/4.0 = 2.0$ m/s east. The impact parameter is irrelevant to the final velocity — only the impulse (zero here, they stick) matters.",
      },
    ],
  },
]

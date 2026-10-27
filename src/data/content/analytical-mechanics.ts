import type { SectionContent } from '../library'

// ============================================================================
// Analytical Mechanics: Lagrange and Hamilton — Chapter 5 of the mechanics-
// graphics master track (chapter 'em-analytical', 4 sections).
// Syllabus scope follows standard university analytical-mechanics electives —
// generalized coordinates and constraints, Lagrange's equations with the
// classical worked systems, conservation through cyclic coordinates and
// Noether's insight, and Hamiltonian mechanics with phase-space structure.
// Technical spine follows the standard literature (Goldstein, Safko & Poole,
// "Classical Mechanics"; Landau & Lifshitz, "Mechanics"; Taylor, "Classical
// Mechanics"; Arnold, "Mathematical Methods of Classical Mechanics"). All
// worked-example numbers (pendulum periods, Atwood acceleration and tension,
// satellite orbital speed and period, phase-ellipse areas, separatrix energy)
// were re-verified by hand. Math is LaTeX, rendered by KaTeX via the RichText
// $...$ / $$...$$ pipeline. Product rule: no exam names in UI copy.
// Adjacent coverage respected: the Engineering Mechanics chapter owns
// Newtonian vector statics/dynamics; the Mathematics masters own Lagrange
// multipliers (calculus) and Lagrange interpolation (numerical methods);
// the Physics master owns quantum mechanics itself — this chapter bridges to
// it at statement level only.
// ============================================================================

export const analyticalMechanicsContent: SectionContent[] = [
  // ----------------------------------------------------------- analytical §1
  {
    sectionId: 'em-analytical-s1',
    readingTime: 9,
    prerequisites: [
      'Newton\'s second law and free-body diagrams (Engineering Mechanics chapter)',
      'Kinetic and potential energy of particles and rigid bodies',
      'Basic partial derivatives of multivariable functions',
    ],
    intro: 'Newton\'s method is magnificent — and merciless. Analyze a double pendulum with it and you write four coupled equations full of constraint forces (two rope tensions) you never wanted, then eliminate them by hand. Analytical mechanics rebuilds the subject on a different currency: **energies, and coordinates you are free to choose**. Pick coordinates that respect the constraints and the constraint forces vanish from the analysis before it begins. This section builds that vocabulary — degrees of freedom, generalized coordinates, generalized forces — and shows why the vector method buckles under linked systems.',
    objectives: [
      'Count degrees of freedom for particles, rigid bodies and linked systems',
      'Distinguish holonomic from non-holonomic constraints with canonical examples',
      'Define generalized coordinates and generalized forces via virtual work',
      'Explain why the Newtonian vector approach becomes impractical for linked systems',
    ],
    concepts: [
      {
        term: 'Degrees of freedom',
        kind: 'definition',
        statement: 'The **degrees of freedom** (DOF) of a system are the minimum number of independent coordinates needed to fix its configuration: N free particles in 3D have 3N; a free rigid body has 6 (three translations + three rotations); each independent holonomic constraint removes one: $$n = 3N - (\\text{holonomic constraints}).$$',
        detail: 'A planar rigid body carries 3 DOF (x, y, one angle). Constraints cut both ways: a pin joint removes 2, a roller removes 1, inextensible links remove 1 each — the same bookkeeping used for mechanisms (Gruebler\'s counting rule in planar kinematics: DOF = 3(n−1) − 2j for n links and j lower pairs).',
      },
      {
        term: 'Holonomic versus non-holonomic constraints',
        kind: 'definition',
        statement: 'A **holonomic** constraint is an integrable relation among coordinates (and possibly time), $f(q_1, \\dots, q_k, t) = 0$ — it genuinely reduces the accessible configurations. A **non-holonomic** constraint involves velocities in a way that cannot be integrated into a relation among coordinates alone — typically $g(q, \\dot q, t) = 0$ — restricting motions without restricting reachable configurations.',
        detail: 'Fixed pendulum length ($x^2 + y^2 = l^2$), a bead on a wire, a particle confined to a sphere: holonomic. Rolling without slipping ($\\dot x = R\\dot\\varphi\\cos\\theta$, …) and the knife-edge (skate) condition: non-holonomic — the wheel can still be parked anywhere, so no coordinate choice eliminates the constraint. Non-holonomic systems need Lagrange multipliers or specialized treatments; they cannot be simply counted away.',
      },
      {
        term: 'Generalized coordinates and generalized forces',
        kind: 'notation',
        statement: '**Generalized coordinates** $q_1, \\dots, q_n$ are any independent parameters that completely fix the configuration — angles, arc lengths, extensions, whatever makes the constraints automatic. The **generalized force** $Q_k$ conjugate to $q_k$ is defined through virtual work: $$\\delta W = \\sum_k Q_k\\, \\delta q_k.$$',
        detail: 'A generalized force has the units that make $Q_k\\,\\delta q_k$ an energy: if $q_k$ is an angle, $Q_k$ is a torque; if $q_k$ is a length, $Q_k$ is a force. Compute it either by $Q_k = \\sum_i \\mathbf{F}_i \\cdot \\partial \\mathbf{r}_i/\\partial q_k$ or by writing the work done when only $q_k$ varies — the latter is the fast exam route.',
      },
      {
        term: 'Why Newton gets painful',
        kind: 'insight',
        statement: 'For an n-DOF linked system, Newton\'s vector method demands equations for every body (including the unknown constraint forces at every joint), followed by manual elimination — the effort grows with the number of *bodies*, not the number of *degrees of freedom*. Lagrange\'s method costs one scalar equation per degree of freedom, with constraint forces absent from the start because ideal constraints do no virtual work.',
        detail: 'The double pendulum is the standard exhibit: Newton needs 4 equations with 2 unknown tensions; Lagrange delivers 2 equations in $(\\theta_1, \\theta_2)$ directly. The trade is bookkeeping style — more algebra up front writing energies, far less at the end — and it scales: robot arms, satellite attitude dynamics and molecular dynamics all live in generalized coordinates.',
      },
    ],
    examples: [
      {
        title: 'Counting degrees of freedom — four systems',
        problem: 'Find the number of degrees of freedom and a natural set of generalized coordinates for: (a) a planar double pendulum; (b) two particles joined by a rigid rod, free in space; (c) a mass on a spring free to swing in 3D (elastic pendulum); (d) a planar slider-crank mechanism (crank, connecting rod, piston).',
        steps: [
          { label: 'Step 1', text: '(a) Two particles in a plane: 4 coordinates; two fixed-length constraints (one per link) → 2 DOF. Coordinates: the angles $(\\theta_1, \\theta_2)$ — the tensions never enter.' },
          { label: 'Step 2', text: '(b) Two free particles in 3D: 6 coordinates; the rigid rod gives one holonomic constraint → 5 DOF (center of mass 3 + orientation 2).' },
          { label: 'Step 3', text: '(c) One particle in 3D with an elastic spring: no constraint (the extension is dynamics, not geometry) → 3 DOF: $(r, \\theta, \\phi)$ — radius, two angles. Lock the spring and it becomes the spherical pendulum with 2.' },
          { label: 'Step 4', text: '(d) Planar mechanism: 3 moving links × 3 = 9 coordinates; four lower pairs (three pins + one slider) each remove 2 → 1 DOF, matching Gruebler: $3(n-1) - 2j = 3(3) - 2(4) = 1$ — drive it with the crank angle alone.' },
        ],
        result: 'DOF: double pendulum 2; rod-joined pair 5; elastic pendulum 3; slider-crank 1 — count coordinates, subtract holonomic constraints, choose coordinates that make the constraints automatic.',
      },
      {
        title: 'Spotting the non-holonomic constraint — a rolling wheel',
        problem: 'An upright wheel of radius R rolls without slipping on the floor, with heading angle θ and spin angle φ. Show that the no-slip conditions are constraints on velocities that cannot be integrated into relations among the coordinates.',
        steps: [
          { label: 'Step 1', text: 'Configuration: four numbers fix it completely — contact position $(x, y)$, heading θ, spin φ. Nothing about the *reachable* configurations is restricted: park the wheel anywhere in any attitude.' },
          { label: 'Step 2', text: 'No-slip means the contact point has zero instantaneous velocity: $\\dot x = R\\dot\\varphi\\cos\\theta$ and $\\dot y = R\\dot\\varphi\\sin\\theta$ — two relations among velocities.' },
          { label: 'Step 3', text: 'Try to integrate: $dx/d\\varphi = R\\cos\\theta$ would work only if θ stayed constant along the path — but θ varies freely. No function $F(x, y, \\theta, \\varphi) = 0$ exists whose differential reproduces the constraint.' },
          { label: 'Step 4', text: 'Consequence: the constraint restricts *motion* (which infinitesimal steps are allowed) without restricting *configuration* — so no clever coordinates can absorb it. Treat rolling systems with Lagrange multipliers carrying the friction forces, or with dedicated non-holonomic equations.' },
        ],
        result: 'Rolling without slip is the canonical non-holonomic constraint: 4 configuration coordinates, 2 non-integrable velocity constraints — restricting paths, not positions.',
      },
    ],
    keyTakeaways: [
      'DOF = independent configuration parameters = coordinates − independent holonomic constraints (free rigid body: 6; planar body: 3).',
      'Holonomic constraints ($f(q,t) = 0$) shape configuration space and can be eliminated by coordinate choice; non-holonomic ones (rolling, knife-edge) restrict velocities only and survive the analysis.',
      'Generalized coordinates are a free choice; generalized forces follow from virtual work $\\delta W = \\sum Q_k\\delta q_k$ and match units to their coordinate (torque for an angle).',
      'Lagrange trades Newton\'s per-body equations with unknown joint forces for one scalar equation per degree of freedom — the reason linked systems live in generalized coordinates.',
    ],
    quiz: [
      {
        q: 'A particle constrained to move on the surface of a sphere of fixed radius has how many degrees of freedom?',
        options: ['1', '2', '3', '0'],
        answer: 1,
        explanation: 'Step 1: Free particle in 3D: 3 coordinates. Step 2: The constraint $x^2 + y^2 + z^2 = R^2$ is one holonomic relation → 3 − 1 = 2. Step 3: Natural coordinates: two angles $(\\theta, \\phi)$ — the spherical pendulum before adding gravity dynamics.',
      },
      {
        q: 'Which of the following is a non-holonomic constraint?',
        options: ['A pendulum bob at fixed distance from a pivot', 'A wheel rolling without slipping on a plane', 'A bead sliding on a rigid circular wire', 'A door hinged on a fixed axis'],
        answer: 1,
        explanation: 'Step 1: Fixed pendulum length, wire-confinement and the hinge are all integrable geometric relations among coordinates — holonomic. Step 2: Rolling without slip imposes velocity relations $\\dot x = R\\dot\\varphi\\cos\\theta$ that cannot be integrated because θ varies. Step 3: It restricts allowed motions without restricting reachable configurations — the definition of non-holonomic.',
      },
      {
        q: 'A planar four-bar linkage (ground + 3 moving links, 4 pin joints) has how many degrees of freedom?',
        options: ['1', '2', '3', '4'],
        answer: 0,
        explanation: 'Step 1: Planar links: 3 moving bodies × 3 = 9 coordinates. Step 2: Four pins each remove 2 → 9 − 8 = 1 by naive counting. Step 3: Gruebler agrees: $3(n-1) - 2j = 3(4-1) - 2(4) = 1$ — one DOF, driven by any single link angle (the naive count and Gruebler coincide here).',
      },
      {
        q: 'For a coordinate $q_k$ that is an angle, the conjugate generalized force $Q_k$ has the units of',
        options: ['force (N)', 'torque (N·m)', 'energy (J)', 'power (W)'],
        answer: 1,
        explanation: 'Step 1: The defining relation is virtual work: $\\delta W = Q_k\\,\\delta q_k$. Step 2: With $\\delta q_k$ dimensionless (radians), $Q_k$ must carry the units of work alone. Step 3: Hence N·m — a torque; generalized forces always pair units with their coordinates so the product is energy.',
      },
    ],
  },

  // ----------------------------------------------------------- analytical §2
  {
    sectionId: 'em-analytical-s2',
    readingTime: 10,
    prerequisites: [
      'Generalized coordinates, constraints and generalized forces (previous section)',
      'Kinetic and potential energy; conservative forces and virtual work',
      'Total and partial derivatives of functions of several variables',
    ],
    intro: 'Here is the remarkable economy of analytical mechanics: **one scalar function — the Lagrangian $L = T - V$ — contains the entire dynamics of any conservative system**, in any generalized coordinates you like. Differentiate it twice per coordinate and the equations of motion fall out, with every constraint force already gone. The method feels like a trick the first time; it is actually a theorem, and this section runs it on the systems every examination loves: pendulums, springs, pulleys and coupled links.',
    objectives: [
      'State Lagrange\'s equations and identify the role of each term',
      'Construct T and V in generalized coordinates for standard systems',
      'Derive equations of motion by systematic differentiation',
      'Add non-conservative generalized forces when damping or driving is present',
    ],
    concepts: [
      {
        term: 'The Lagrangian',
        kind: 'definition',
        statement: 'For a conservative system, $$L(q_1, \\dots, q_n, \\dot q_1, \\dots, \\dot q_n, t) = T - V$$ — kinetic minus potential energy, written in the generalized coordinates and velocities. It is a *generating function*, not an energy: the minus sign is what makes the machinery reproduce attraction toward lower potential energy.',
        detail: 'The Lagrangian may look strange (why subtract?), but it survives because the derivation from d\'Alembert\'s principle couples the time derivative of momentum-like terms ($\\partial L/\\partial \\dot q$) to the gradient of potential-like terms ($\\partial L/\\partial q$). Lagrangians are also the object that generalizes: relativistic fields, electromagnetism (with the velocity-dependent $q\\mathbf{v}\\cdot\\mathbf{A}$ potential) and the standard model of particle physics are all written as Lagrangians.',
      },
      {
        term: 'Lagrange\'s equations of motion',
        kind: 'method',
        statement: 'For each generalized coordinate: $$\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot q_k}\\right) - \\frac{\\partial L}{\\partial q_k} = Q_k^{(nc)},$$ where $Q_k^{(nc)}$ collects non-conservative generalized forces (friction, motors, driving). For purely conservative systems the right side is zero — n coordinates, n equations, no constraint forces.',
        detail: 'The recipe never varies: (1) choose coordinates that absorb the constraints; (2) write T in those coordinates (a chain-rule exercise — velocities couple through the geometry); (3) write V; (4) form L; (5) differentiate. Sanity check the machinery on the mass-spring: $L = \\tfrac{1}{2}m\\dot x^2 - \\tfrac{1}{2}kx^2$ gives $m\\ddot x + kx = 0$, i.e. $\\omega = \\sqrt{k/m}$, in two lines.',
      },
      {
        term: 'Where the equations come from (d\'Alembert)',
        kind: 'insight',
        statement: 'D\'Alembert\'s principle rewrites Newton\'s law as virtual-work equilibrium: $\\sum_i (\\mathbf{F}_i - m_i\\mathbf{a}_i)\\cdot \\delta\\mathbf{r}_i = 0$ for all virtual displacements compatible with the constraints. Ideal constraint forces drop out (they do no virtual work); converting to generalized coordinates and integrating by parts in time yields Lagrange\'s equations.',
        detail: 'Every Newtonian result survives the passage — the equations are equivalent, not approximate. What changes is the bookkeeping: unknown joint forces and tensions never enter, because virtual displacements are chosen to respect the constraints they enforce. That single move is the entire practical advantage.',
      },
      {
        term: 'Non-conservative generalized forces',
        kind: 'notation',
        statement: 'Viscous damping enters as $Q = -c\\dot x$ on the damped coordinate; a driving force or torque enters as its virtual-work conjugate $Q_k = \\delta W/\\delta q_k$. Systems with velocity-dependent potentials (e.g., charges in magnetic fields) absorb what they can into $L$ and treat the rest through $Q_k^{(nc)}$.',
        detail: 'Example: the damped oscillator $L = \\tfrac{1}{2}m\\dot x^2 - \\tfrac{1}{2}kx^2$ with $Q = -c\\dot x$ yields $m\\ddot x + c\\dot x + kx = 0$ — the standard vibration equation (the Vibrations sections of the dynamics chapters treat its solution; here we only generate it). Note that energy methods alone could not have produced the damping term: $-c\\dot x$ is not a potential.',
      },
    ],
    examples: [
      {
        title: 'Simple pendulum — the two-line derivation',
        problem: 'A pendulum of length l = 1.0 m and mass m swings in a plane. Derive its equation of motion by Lagrange\'s method and find the small-oscillation period.',
        steps: [
          { label: 'Step 1', text: 'One DOF (constraint built in): the angle θ from the vertical. Bob position: $x = l\\sin\\theta$, $y = -l\\cos\\theta$, so $v^2 = l^2\\dot\\theta^2$.' },
          { label: 'Step 2', text: 'Energies: $T = \\tfrac{1}{2}ml^2\\dot\\theta^2$ and, with the datum at the bottom, $V = mgl(1 - \\cos\\theta)$; hence $L = \\tfrac{1}{2}ml^2\\dot\\theta^2 - mgl(1 - \\cos\\theta)$.' },
          { label: 'Step 3', text: 'Differentiate: $\\partial L/\\partial\\dot\\theta = ml^2\\dot\\theta$ so $\\frac{d}{dt}(\\cdot) = ml^2\\ddot\\theta$; and $\\partial L/\\partial\\theta = -mgl\\sin\\theta$.' },
          { label: 'Step 4', text: 'Assemble: $ml^2\\ddot\\theta + mgl\\sin\\theta = 0$, i.e. $\\ddot\\theta + (g/l)\\sin\\theta = 0$ — the tension, the force Newton\'s method would demand first, never appeared.' },
          { label: 'Step 5', text: 'Small angles ($\\sin\\theta \\approx \\theta$): $\\omega = \\sqrt{g/l} = \\sqrt{9.81} = 3.13$ rad/s, period $T = 2\\pi/\\omega = 2.01$ s — independent of mass, and of amplitude to first order.' },
        ],
        result: 'θ̈ + (g/l)sinθ = 0; for l = 1 m the small-oscillation period is 2.0 s — derived without ever computing the rope tension.',
      },
      {
        title: 'Atwood machine — constraint-free pulley dynamics',
        problem: 'Masses m1 = 3 kg and m2 = 5 kg hang over a frictionless, massless pulley on an inextensible rope. Use Lagrange\'s method with one generalized coordinate to find the acceleration and the rope tension.',
        steps: [
          { label: 'Step 1', text: 'One DOF: let x be the downward displacement of m2 (m1 rises by the same x — the rope constraint is absorbed into the coordinate definition).' },
          { label: 'Step 2', text: 'Energies: $T = \\tfrac{1}{2}(m_1 + m_2)\\dot x^2 = 4\\dot x^2$; potential (m2 down, m1 up) $V = (m_1 - m_2)gx = -19.62x$, so $L = 4\\dot x^2 + 19.62x$ (SI units, g = 9.81).' },
          { label: 'Step 3', text: 'Equations: $\\partial L/\\partial\\dot x = 8\\dot x \\to 8\\ddot x$; $\\partial L/\\partial x = 19.62$; hence $8\\ddot x - 19.62 = 0$.' },
          { label: 'Step 4', text: 'Solve: $\\ddot x = 2.45$ m/s² — exactly $(m_2 - m_1)g/(m_1 + m_2)$, downward for the heavier mass.' },
          { label: 'Step 5', text: 'Tension on demand: apply Newton to either mass afterward, e.g. m1: $F_t - m_1 g = m_1 a \\Rightarrow F_t = 3(9.81 + 2.45) = 36.8$ N (check with m2: $5(9.81 - 2.45) = 36.8$ ✓). Lagrange deferred the tension until we actually wanted it.' },
        ],
        result: 'a = 2.45 m/s² downward on the 5 kg mass; rope tension 36.8 N — one coordinate, one equation, no pulley forces.',
      },
    ],
    keyTakeaways: [
      'Form $L = T - V$ in generalized coordinates; each coordinate then satisfies $\\frac{d}{dt}(\\partial L/\\partial\\dot q_k) - \\partial L/\\partial q_k = Q_k^{(nc)}$.',
      'The recipe is mechanical: coordinates that absorb constraints → energies → two differentiations per coordinate; constraint forces never appear because ideal constraints do no virtual work.',
      'Verified limits: mass-spring gives $m\\ddot x + kx = 0$; the simple pendulum gives $\\ddot\\theta + (g/l)\\sin\\theta = 0$ — every Newtonian result survives.',
      'The double pendulum\'s Lagrangian carries a coupling term $(m_1+m_2)l_1l_2\\dot\\theta_1\\dot\\theta_2\\cos(\\theta_1-\\theta_2)$ that generates the two coupled nonlinear equations — and ultimately chaotic motion at large amplitude.',
    ],
    quiz: [
      {
        q: 'The Lagrangian of a conservative system is',
        options: ['the total energy T + V', 'the kinetic energy T', 'T − V, the difference of kinetic and potential energy', 'the potential energy expressed in generalized coordinates'],
        answer: 2,
        explanation: 'Step 1: The definition is $L = T - V$. Step 2: It is a generating function for the equations of motion, not the conserved energy — energy conservation arrives separately (next section). Step 3: The minus sign is essential: it makes $\\partial L/\\partial q$ reproduce the force $-\\partial V/\\partial q$ with the correct sign.',
      },
      {
        q: 'A mass-spring system has $L = \\tfrac{1}{2}m\\dot x^2 - \\tfrac{1}{2}kx^2$. Lagrange\'s equation yields',
        options: ['$m\\ddot x - kx = 0$', '$m\\ddot x + kx = 0$', '$m\\ddot x + c\\dot x + kx = 0$', '$\\ddot x + (k/m)\\dot x = 0$'],
        answer: 1,
        explanation: 'Step 1: $\\partial L/\\partial\\dot x = m\\dot x$, so its time derivative is $m\\ddot x$. Step 2: $\\partial L/\\partial x = -kx$. Step 3: $m\\ddot x - (-kx) = 0 \\Rightarrow m\\ddot x + kx = 0$, the undamped oscillator with $\\omega = \\sqrt{k/m}$. The damping term would require a non-conservative $Q = -c\\dot x$.',
      },
      {
        q: 'In an Atwood machine with m1 = 2 kg and m2 = 4 kg (g = 9.81), the acceleration magnitude is',
        options: ['9.81 m/s²', '6.54 m/s²', '3.27 m/s²', '4.91 m/s²'],
        answer: 2,
        explanation: 'Step 1: With x the descent of the heavy mass: $L = \\tfrac{1}{2}(6)\\dot x^2 + (4-2)(9.81)x$ (sign: potential falls). Step 2: Lagrange: $6\\ddot x = 2 \\times 9.81$. Step 3: $\\ddot x = 19.62/6 = 3.27$ m/s² — the general result $(m_2-m_1)g/(m_1+m_2)$.',
      },
      {
        q: 'The greatest practical advantage of Lagrange\'s method over the Newtonian vector method for linked systems is that',
        options: ['it is relativistically invariant by construction', 'ideal constraint forces never appear in the equations', 'it produces fewer *energy* conservation laws to check', 'it works only for conservative systems, simplifying the algebra'],
        answer: 1,
        explanation: 'Step 1: The two methods are equivalent — both produce the true equations of motion. Step 2: But Lagrange\'s virtual displacements respect the constraints, so joint forces and tensions (which do no virtual work) cancel at the derivation stage. Step 3: The analyst writes one scalar equation per degree of freedom instead of per-body vector equations followed by elimination.',
      },
    ],
  },

  // ----------------------------------------------------------- analytical §3
  {
    sectionId: 'em-analytical-s3',
    readingTime: 9,
    prerequisites: [
      'Lagrange\'s equations of motion (previous section)',
      'Angular momentum and energy conservation in Newtonian form (Engineering Mechanics chapter)',
      'Polar-coordinate kinematics',
    ],
    intro: 'Conservation laws tend to look like gifts of nature — lucky cancellations discovered after the algebra. Analytical mechanics reveals them as **structural**: every continuous symmetry of the Lagrangian is, automatically, a conserved quantity. Choose coordinates aligned with the symmetry and the conservation law becomes visible before you differentiate anything. This is the deepest layer of classical mechanics — Noether\'s insight — and it turns central-force problems from ordeals into bookkeeping.',
    objectives: [
      'Identify cyclic coordinates and state the momentum they conserve',
      'Construct the energy function h and state when h equals the total energy E',
      'State Noether\'s connection between symmetry and conservation',
      'Apply cyclic-coordinate reasoning to central-force and orbital motion',
    ],
    concepts: [
      {
        term: 'Cyclic (ignorable) coordinates',
        kind: 'definition',
        statement: 'A coordinate $q_k$ is **cyclic** if it does not appear in L (only $\\dot q_k$ may): $\\partial L/\\partial q_k = 0$. Lagrange\'s equation then collapses to a conservation law: $$\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot q_k}\\right) = 0 \\quad\\Rightarrow\\quad p_k = \\frac{\\partial L}{\\partial \\dot q_k} = \\text{const}.$$',
        detail: 'Conservation by inspection: write L in the best coordinates and the absent ones announce their conserved momenta. A free particle in Cartesian coordinates makes x, y, z all cyclic — three conserved momenta. The skill worth practicing is *choosing* coordinates so that the symmetry you know is there becomes the cyclic coordinate you can see.',
      },
      {
        term: 'The energy function and when it equals E',
        kind: 'method',
        statement: 'Define $$h(q, \\dot q, t) = \\sum_k \\dot q_k \\frac{\\partial L}{\\partial \\dot q_k} - L.$$ If L has no explicit time dependence ($\\partial L/\\partial t = 0$), then $dh/dt = 0$: h is conserved. For a *natural* system — T a homogeneous quadratic in the velocities, V independent of velocity and time — h coincides with the total energy $E = T + V$.',
        detail: 'The fine print matters in exams: if the constraints move with time (a pendulum whose pivot oscillates, T carrying explicit t), h is still conserved when $\\partial L/\\partial t = 0$ holds — but h is then *not* T + V, and the system can exchange energy with the moving constraint. Cyclic time coordinate, conserved energy function: the pattern is the same as for space.',
      },
      {
        term: 'Noether\'s insight (stated)',
        kind: 'insight',
        statement: '**Every one-parameter continuous symmetry of the Lagrangian implies a conserved quantity**: invariance under time translation → conservation of energy; under spatial translation → conservation of linear momentum; under rotation → conservation of angular momentum. The momentum conjugate to the symmetry\'s parameter is the conserved object.',
        detail: 'Stated without proof here, it is the organizing theorem of theoretical physics: the conserved quantities of mechanics are shadows of the symmetries of space and time. It survives the passage to field theory and quantum physics (where it underwrites particle-number conservation from phase symmetries) — and in classical mechanics it simply says: find the symmetry, pick coordinates that expose it, read off the conserved momentum.',
      },
      {
        term: 'Central force in polar coordinates',
        kind: 'method',
        statement: 'For $V = V(r)$: $$L = \\tfrac{1}{2}m(\\dot r^2 + r^2\\dot\\varphi^2) - V(r).$$ The angle φ is cyclic → $l = mr^2\\dot\\varphi$ is conserved (angular momentum), so the areal velocity $dA/dt = l/2m$ is constant — Kepler\'s second law, one differentiation deep. The radial equation reduces to 1D motion in the effective potential: $$m\\ddot r = \\frac{l^2}{mr^3} - \\frac{dV}{dr}, \\qquad V_{\\text{eff}}(r) = V(r) + \\frac{l^2}{2mr^2}.$$',
        detail: 'The centrifugal term $l^2/2mr^2$ is not a force — it is the geometric cost of conserving angular momentum while r changes. Circular orbits sit at the minimum of $V_{\\text{eff}}$; bound orbits oscillate in the well; the well\'s shape (parabolic for the 1/r attraction) encodes the entire orbit geometry.',
      },
    ],
    examples: [
      {
        title: 'Satellite orbit from conservation alone',
        problem: 'A satellite orbits Earth in a circular orbit of radius r = 7000 km (Earth\'s $GM = 3.986\\times10^{14}$ m³/s²). Using the cyclic coordinate of the central-force Lagrangian, find the orbital speed, the period and the angular momentum per unit mass; verify the areal-velocity statement.',
        steps: [
          { label: 'Step 1', text: 'The Lagrangian $L = \\tfrac{1}{2}m(\\dot r^2 + r^2\\dot\\varphi^2) + GMm/r$ has no φ: cyclic, so $l = mr^2\\dot\\varphi = mrv$ is conserved (r constant → v constant).' },
          { label: 'Step 2', text: 'Circular orbit = equilibrium of $V_{\\text{eff}}$: $dV_{\\text{eff}}/dr = 0 \\Rightarrow GMm/r^2 = l^2/(mr^3) \\Rightarrow v^2 = GM/r$ — conservation of angular momentum plus radial balance already fixed the speed.' },
          { label: 'Step 3', text: 'Numbers: $v = \\sqrt{3.986\\times10^{14}/7\\times10^6} = \\sqrt{5.694\\times10^7} = 7.55$ km/s.' },
          { label: 'Step 4', text: 'Period: $T_{\\text{orb}} = 2\\pi r/v = 2\\pi(7000\\,\\text{km})/7.55 = 5828$ s $\\approx 97.1$ min — a low-Earth-orbit clock.' },
          { label: 'Step 5', text: 'Angular momentum per unit mass $l/m = rv = 5.28\\times10^{10}$ m²/s; areal velocity $= l/2m = 2.64\\times10^{10}$ m²/s = constant: Kepler\'s second law before any integration.' },
        ],
        result: 'v = 7.55 km/s, period ≈ 97 min, l/m = 5.28×10¹⁰ m²/s, areal rate 2.64×10¹⁰ m²/s — the orbit read off a conserved momentum, not integrated.',
      },
      {
        title: 'Cyclic coordinate in the spherical pendulum — the skater effect',
        problem: 'A spherical pendulum has length l = 0.8 m and bob mass m = 0.5 kg. At some instant the bob is at θ = 60° from the vertical with azimuthal rate φ̇ = 2 rad/s. Find the conserved quantity, and φ̇ when the bob later swings out to θ = 30°.',
        steps: [
          { label: 'Step 1', text: 'Lagrangian: $L = \\tfrac{1}{2}ml^2(\\dot\\theta^2 + \\sin^2\\theta\\,\\dot\\varphi^2) + mgl\\cos\\theta$. The azimuth φ is absent → cyclic.' },
          { label: 'Step 2', text: 'Conserved conjugate momentum: $p_\\varphi = ml^2\\sin^2\\theta\\,\\dot\\varphi = L_z$, the angular momentum about the vertical axis.' },
          { label: 'Step 3', text: 'Initial value: $L_z = 0.5(0.8)^2\\sin^2 60° (2) = 0.32 \\times 0.75 \\times 2 = 0.48$ kg·m²/s.' },
          { label: 'Step 4', text: 'At θ = 30° ($\\sin^2 30° = 0.25$): $\\dot\\varphi = L_z/(ml^2\\sin^2\\theta) = 0.48/(0.32 \\times 0.25) = 6.0$ rad/s — three times faster as the cone of motion narrows: the figure-skater effect, here delivered by a cyclic coordinate.' },
          { label: 'Step 5', text: 'The θ-motion meanwhile sees the centrifugal barrier $L_z^2/(2ml^2\\sin^2\\theta)$ added to gravity — one conserved number reshaped the whole remaining problem.' },
        ],
        result: 'Lz = 0.48 kg·m²/s conserved; φ̇ speeds from 2 to 6 rad/s as θ goes from 60° to 30°.',
      },
    ],
    keyTakeaways: [
      'A cyclic coordinate ($\\partial L/\\partial q_k = 0$) hands you a conserved momentum $p_k = \\partial L/\\partial\\dot q_k$ — choose coordinates to make symmetries cyclic.',
      'The energy function $h = \\sum \\dot q_k p_k - L$ is conserved whenever $\\partial L/\\partial t = 0$, and equals T + V for natural systems — but not when constraints move with time.',
      'Noether (stated): time-translation symmetry → energy, translation → momentum, rotation → angular momentum; conservation laws are geometry in disguise.',
      'Central force: cyclic φ → $l = mr^2\\dot\\varphi$ → Kepler\'s second law and the 1D effective-potential problem with the $l^2/2mr^2$ centrifugal barrier.',
    ],
    quiz: [
      {
        q: 'If the coordinate φ does not appear in a Lagrangian (only φ̇ does), then',
        options: ['φ must be constant in time', 'the conjugate momentum $p_\\varphi = \\partial L/\\partial\\dot\\varphi$ is conserved', 'the Lagrangian is conserved', 'the system has no kinetic energy associated with φ'],
        answer: 1,
        explanation: 'Step 1: Lagrange\'s equation for φ reads $\\frac{d}{dt}(\\partial L/\\partial\\dot\\varphi) - 0 = 0$. Step 2: The time derivative of the conjugate momentum vanishes, so $p_\\varphi$ is constant. Step 3: φ itself generally keeps changing — it is the *momentum*, not the coordinate, that symmetry conserves.',
      },
      {
        q: 'A satellite moves from a circular orbit of radius r to one of radius 4r. Its orbital speed becomes',
        options: ['the same', 'half', 'twice', 'one-quarter'],
        answer: 1,
        explanation: 'Step 1: Circular-orbit balance gives $v^2 = GM/r$, so $v \\propto 1/\\sqrt{r}$. Step 2: The conserved angular momentum and radial effective-potential equilibrium jointly enforce this scaling. Step 3: At 4r: $v\' = v/\\sqrt{4} = v/2$ — quadrupling the radius halves the speed.',
      },
      {
        q: 'The areal velocity $dA/dt$ of a planet orbiting the Sun equals',
        options: ['$l/m$, the angular momentum per unit mass', '$l/2m$, half the angular momentum per unit mass', '$2l/m$', 'the orbital speed times the radius'],
        answer: 1,
        explanation: 'Step 1: In polar coordinates the area swept in time dt is $\\tfrac{1}{2}r^2 d\\varphi$. Step 2: So $dA/dt = \\tfrac{1}{2}r^2\\dot\\varphi = l/2m$ using $l = mr^2\\dot\\varphi$. Step 3: Since φ is cyclic in the central-force Lagrangian, l is conserved and the areal velocity is constant — Kepler\'s second law.',
      },
      {
        q: 'For which system does the conserved energy function h *not* equal the mechanical energy T + V?',
        options: ['A simple pendulum with fixed pivot', 'A mass on a spring', 'A pendulum whose pivot is made to oscillate vertically with time', 'A bead sliding on a fixed frictionless wire'],
        answer: 2,
        explanation: 'Step 1: h = T + V requires T quadratic in velocities without explicit time dependence and V velocity-free. Step 2: A moving pivot injects explicit time dependence into the kinetic energy (the transformation to pivot coordinates carries t). Step 3: h may still be conserved if $\\partial L/\\partial t = 0$ fails — here it fails, and the bob exchanges energy with the actuator; h is then neither conserved nor equal to T + V.',
      },
    ],
  },

  // ----------------------------------------------------------- analytical §4
  {
    sectionId: 'em-analytical-s4',
    readingTime: 10,
    prerequisites: [
      'Lagrange\'s equations and cyclic coordinates (previous two sections)',
      'Energy conservation for conservative systems',
      'Reading curves and level sets in the plane',
    ],
    intro: 'Lagrange predicts motion through configuration space; Hamilton relocates the entire story to **phase space** — the 2n-dimensional space of coordinates *and* momenta $(q, p)$. The upgrade looks cosmetic and is not: dynamics becomes a first-order flow with perfect q–p symmetry, conserved quantities become geometry, and the picture connects classical mechanics directly to statistical mechanics and quantum theory. This closing section performs the Legendre transform, states the canonical equations, and tours the phase portraits that make Hamiltonian mechanics the analyst\'s favorite lens.',
    objectives: [
      'Construct the Hamiltonian from the Lagrangian by Legendre transform',
      'State and apply Hamilton\'s canonical equations',
      'Read phase portraits: libration, rotation and the pendulum separatrix',
      'State Liouville\'s theorem and the bridges to statistical mechanics and quantum theory',
    ],
    concepts: [
      {
        term: 'Legendre transform to the Hamiltonian',
        kind: 'method',
        statement: 'Define momenta $p_k = \\partial L/\\partial \\dot q_k$ and, inverting for the velocities, $$H(q_1, \\dots, q_n, p_1, \\dots, p_n, t) = \\sum_k \\dot q_k p_k - L.$$ For natural systems (T quadratic, V velocity-free) this equals $T + V$ — but the *variables* have changed: H lives on phase space, with p, not q̇, as the partner of q.',
        detail: 'The Legendre transform exchanges the roles of velocity and momentum while keeping all dynamical information — a change of currency, not of physics. When a coordinate is cyclic in H (no p-dependence… rather, q absent), its momentum is constant exactly as in Lagrangian mechanics; symmetries read even more directly off H.',
      },
      {
        term: 'Hamilton\'s canonical equations',
        kind: 'method',
        statement: 'The dynamics of a Hamiltonian system is the pair of first-order equations per coordinate: $$\\dot q_k = \\frac{\\partial H}{\\partial p_k}, \\qquad \\dot p_k = -\\frac{\\partial H}{\\partial q_k}.$$ n second-order Lagrange equations become 2n first-order equations with perfectly symmetric structure (note the sign asymmetry — it is the whole engine).',
        detail: 'Quick check on the oscillator: $H = p^2/2m + \\tfrac{1}{2}kx^2$ gives $\\dot x = p/m$, $\\dot p = -kx$; eliminating p recovers $m\\ddot x + kx = 0$. The canonical structure is what survives quantization: the Poisson bracket algebra of the q\'s and p\'s maps to commutators of operators — the formal bridge (the quantum mechanics itself lives in the Physics library).',
      },
      {
        term: 'Phase portraits and the separatrix',
        kind: 'definition',
        statement: 'A phase portrait draws trajectories in the $(q, p)$ plane. For a one-degree-of-freedom conservative system, trajectories are the level curves of H. The pendulum portrait shows two families separated by the **separatrix** — the level set through the unstable upright equilibrium: closed loops of *libration* (back-and-forth swinging) inside, wavy lines of *rotation* (continuing over the top) outside.',
        detail: 'Near the stable equilibrium at the bottom, level curves are ellipses (harmonic approximation); along the separatrix the motion spends long times near the top, so the period diverges as the separatrix energy is approached. Phase portraits turn qualitative questions — will this swing go over the top? — into the geometry of a single curve.',
      },
      {
        term: 'Liouville\'s theorem and the bridges onward',
        kind: 'insight',
        statement: 'Hamiltonian flow preserves phase-space volume: a cloud of system points evolves like an incompressible fluid, $$\\frac{d\\rho}{dt} = 0$$ for the density along the flow. This is the foundation of statistical mechanics (ensembles, the microcanonical distribution) and the classical limit of quantum dynamics — connections stated here at survey level.',
        detail: 'Conservation of phase volume forbids Hamiltonian systems from settling onto attractors — no damping, no chaos-attractor in the dissipative sense, though chaotic Hamiltonian systems stretch and fold volumes into ever-finer filaments at constant total volume. The theorem is also the honest boundary of this course: where the phase-space density becomes a quantum wavefunction, the story continues in the Physics master\'s quantum chapters.',
      },
    ],
    examples: [
      {
        title: 'Harmonic oscillator in phase space',
        problem: 'A mass m = 2 kg on a spring k = 50 N/m oscillates with amplitude A = 0.1 m. Construct H, read off the canonical equations, find ω, the energy, and the geometry (semi-axes and enclosed area) of the phase trajectory; verify the area is a conserved quantity.',
        steps: [
          { label: 'Step 1', text: 'From $L = \\tfrac{1}{2}m\\dot x^2 - \\tfrac{1}{2}kx^2$: $p = m\\dot x = 2\\dot x$, so $\\dot x = p/2$; then $H = p\\dot x - L = p^2/2m + \\tfrac{1}{2}kx^2 = p^2/4 + 25x^2$ (joules).' },
          { label: 'Step 2', text: 'Canonical equations: $\\dot x = \\partial H/\\partial p = p/2$ and $\\dot p = -\\partial H/\\partial x = -50x$; eliminating p: $\\ddot x = -25x$, so $\\omega = 5$ rad/s (period 1.26 s, f ≈ 0.80 Hz).' },
          { label: 'Step 3', text: 'Energy at full stretch ($x = A$, $\\dot x = 0$): $E = \\tfrac{1}{2}kA^2 = \\tfrac{1}{2}(50)(0.01) = 0.25$ J — the value labeling this trajectory.' },
          { label: 'Step 4', text: 'Phase geometry: the ellipse $p^2/4 + 25x^2 = 0.25$ has semi-axes $x_{max} = 0.1$ m and $p_{max} = \\sqrt{2mE} = \\sqrt{1.0} = 1.0$ kg·m/s; enclosed area $= \\pi x_{max}p_{max} = 0.314$ J·s. The state point circuits the ellipse once per period.' },
          { label: 'Step 5', text: 'Liouville check: an ensemble of oscillators spread inside this ellipse keeps its phase area exactly 0.314 J·s forever — for the oscillator the ellipse merely rotates rigidly; for any Hamiltonian flow the area would still hold even as the blob shears.' },
        ],
        result: 'ω = 5 rad/s, E = 0.25 J; trajectory = ellipse 0.1 m × 1.0 kg·m/s enclosing 0.314 J·s of phase area — conserved by the flow.',
      },
      {
        title: 'Pendulum separatrix — the dividing energy',
        problem: 'A pendulum has m = 0.5 kg and l = 0.8 m. Write its Hamiltonian, find the separatrix energy, the small-oscillation frequency, and describe what trajectories do on either side of the separatrix.',
        steps: [
          { label: 'Step 1', text: 'With $L = \\tfrac{1}{2}ml^2\\dot\\theta^2 + mgl\\cos\\theta$ (datum through the pivot): $p_\\theta = ml^2\\dot\\theta$, and $H = p_\\theta^2/(2ml^2) - mgl\\cos\\theta$ — equivalently $p_\\theta^2/(2ml^2) + mgl(1-\\cos\\theta)$ up to an additive constant.' },
          { label: 'Step 2', text: 'Numbers: $2ml^2 = 0.64$, so $H = p_\\theta^2/0.64 + 3.924(1 - \\cos\\theta)$ J.' },
          { label: 'Step 3', text: 'Separatrix energy = potential at the top: $E_s = 2mgl = 2(0.5)(9.81)(0.8) = 7.85$ J — the level curve threading through $(\\theta, p_\\theta) = (\\pm\\pi, 0)$, the unstable upright equilibrium.' },
          { label: 'Step 4', text: 'Below 7.85 J: closed loops of libration; near the bottom the harmonic frequency $\\omega = \\sqrt{g/l} = \\sqrt{12.26} = 3.50$ rad/s (period 1.80 s). Above: rotation, with $p_\\theta$ never changing sign — the bob goes over the top. On the separatrix itself the period diverges logarithmically.' },
          { label: 'Step 5', text: 'One number — the energy label — classifies every motion of the pendulum: the phase portrait converts "does it swing or spin?" into "which side of 7.85 J?".' },
        ],
        result: 'Separatrix at E = 2mgl = 7.85 J between libration (closed loops, ω = 3.50 rad/s small-amplitude) and rotation; on it, the pendulum asymptotically approaches the upright.',
      },
    ],
    keyTakeaways: [
      'Legendre transform: $H = \\sum \\dot q_k p_k - L$ with $p_k = \\partial L/\\partial\\dot q_k$; for natural systems H = T + V, but on phase space (q, p).',
      'Canonical equations $\\dot q_k = \\partial H/\\partial p_k$, $\\dot p_k = -\\partial H/\\partial q_k$: 2n first-order equations with symmetric q–p structure — the form that quantizes.',
      'One-DOF phase portraits are level curves of H; the pendulum separatrix (E = 2mgl) divides libration from rotation, with divergent period at the crossing.',
      'Liouville: Hamiltonian flow preserves phase volume — no attractors in conservative dynamics, and the starting point for statistical mechanics; the quantum bridge (H as operator, $H\\psi = E\\psi$) continues in the Physics master.',
    ],
    quiz: [
      {
        q: 'The Legendre transform that produces the Hamiltonian is',
        options: ['$H = L + T$', '$H = \\sum_k \\dot q_k p_k - L$ with $p_k = \\partial L/\\partial\\dot q_k$', '$H = \\sum_k q_k p_k - L$', '$H = T - V$ expressed in velocities'],
        answer: 1,
        explanation: 'Step 1: The momentum is defined from L: $p_k = \\partial L/\\partial\\dot q_k$, then inverted to eliminate velocities. Step 2: The transform $H = \\sum \\dot q_k p_k - L$ swaps the currency from velocities to momenta, keeping all dynamics. Step 3: H equals T + V only for natural systems — and always as a function of (q, p), never (q, q̇).',
      },
      {
        q: 'For $H = p^2/2m + \\tfrac{1}{2}kx^2$, the canonical equations give',
        options: ['$\\dot x = p/m$, $\\dot p = kx$', '$\\dot x = -p/m$, $\\dot p = kx$', '$\\dot x = p/m$, $\\dot p = -kx$', '$\\dot x = kx$, $\\dot p = -p/m$'],
        answer: 2,
        explanation: 'Step 1: $\\dot x = \\partial H/\\partial p = p/m$ (positive — momentum drives position). Step 2: $\\dot p = -\\partial H/\\partial x = -kx$ (negative — the restoring force with the canonical minus sign). Step 3: Together they are equivalent to $m\\ddot x + kx = 0$; the sign pattern is the engine of all Hamiltonian dynamics.',
      },
      {
        q: 'In the pendulum phase portrait, the separatrix is the trajectory that',
        options: ['encircles the origin with the smallest area', 'passes through the unstable (upright) equilibrium, separating libration from rotation', 'corresponds to zero energy', 'is crossed twice per oscillation period'],
        answer: 1,
        explanation: 'Step 1: Level curves of H near the stable bottom are closed libration loops; far out they are rotation lines. Step 2: Between them lies the level set through the saddle at $(\\theta, p_\\theta) = (\\pi, 0)$ — the separatrix, at energy 2mgl. Step 3: On it the motion approaches the top asymptotically and the period diverges; it is never crossed — energy is conserved.',
      },
      {
        q: 'Liouville\'s theorem states that Hamiltonian flow',
        options: ['conserves the energy of every trajectory individually', 'preserves the volume of any region of phase space as it evolves', 'drives phase-space blobs toward attractors', 'conserves the number of coordinates and momenta'],
        answer: 1,
        explanation: 'Step 1: The density of system points obeys $d\\rho/dt = 0$ along the flow — incompressible phase fluid. Step 2: Hence any evolving ensemble keeps its phase volume exactly. Step 3: This forbids attractors (dissipative behavior) in conservative systems and is the geometric foundation of ensemble statistical mechanics.',
      },
    ],
  },
]

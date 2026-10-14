import type { SectionContent } from '../library'

// ============================================================================
// Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended
// Chapter 4: Motion in Two and Three Dimensions (sections 4.1–4.7)
// Includes ONE masters depth tier on 4.4 (the projectile envelope).
// ============================================================================

export const hallCh4Content: SectionContent[] = [
  // ------------------------------------------------------------- 4.1
  {
    sectionId: 'hall-ch4-s1',
    readingTime: 5,
    intro: "What is physics? A fly ball's arc, a satellite's orbit, a bee's drunken path — all are motion in more than one dimension, and the jump from one dimension to three is remarkably cheap: replace the coordinate $x$ with a position vector $\\vec r$. This section defines position and displacement in vector language — the last piece of vocabulary kinematics needs.",
    objectives: [
      "Write position as a vector $\\vec r = x\\hat{i} + y\\hat{j} + z\\hat{k}$ and locate points in 3D",
      "Compute the displacement vector $\\Delta \\vec r = \\vec r_2 - \\vec r_1$ and its magnitude",
      "Distinguish the magnitude of displacement from the distance traveled along a curved path",
    ],
    concepts: [
      {
        term: 'Position vector',
        kind: 'definition',
        statement: "**$\\vec r = x\\hat{i} + y\\hat{j} + z\\hat{k}$: the arrow from the origin to the particle.** Its components are the three coordinates; its magnitude is the straight-line distance from the origin.",
        detail: "One vector replaces three scalars — and, unlike the coordinates, it can be drawn.",
      },
      {
        term: 'Displacement',
        kind: 'definition',
        statement: "**$\\Delta \\vec r = \\vec r_2 - \\vec r_1$: the straight arrow from the first position to the second**, independent of the path taken between them.",
        detail: "Subtracting vectors means subtracting components: $\\Delta x = x_2 - x_1$, and likewise for $y$ and $z$.",
      },
      {
        term: 'Chord versus arc',
        kind: 'insight',
        statement: "**The magnitude $|\\Delta \\vec r|$ is the chord — the crow's distance — while the distance traveled is the arc — the road's length.** A curved path is always longer than the straight-line displacement that summarizes it.",
        detail: "Over any closed loop the displacement vanishes while the distance traveled does not: the ultimate chord–arc contrast.",
      },
      {
        term: "Position and Displacement: solution protocol",
        kind: "method",
        statement: "**Solve Position and Displacement problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is decoupling 2D motion into independent 1D motions sharing the clock $t$; the working equation is $\\vec r = x\\hat{i}+y\\hat{j}+z\\hat{k}$, $\\vec v = d\\vec r/dt$, $R = v_0^2\\sin 2\\theta_0/g$, $a = v^2/r$, $\\vec v_{PA} = \\vec v_{PB}+\\vec v_{BA}$; every substitution must carry its units so the final unit ($\\text{m/s}$, $\\text{m/s}^2$ and vector direction) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$; no air, uniform $g$, $v\\ll c$; frames must be inertial for $\\vec a$ agreement.",
      },
      {
        term: "Position and Displacement: scales and validity",
        kind: "insight",
        statement: "**Position and Displacement lives at ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$ and the textbook model holds while no air, uniform $g$, $v\\ll c$; frames must be inertial for $\\vec a$ agreement.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Position and Displacement calculation gives seconds when $\\text{m/s}$, $\\text{m/s}^2$ and vector direction demands meters, or a value orders of magnitude beyond ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'The squirrel and the branch',
        problem: "A squirrel at $\\vec r_1 = (2.0\\hat{i} + 3.0\\hat{j})$ m scrambles along a branch and ends at $\\vec r_2 = (-1.0\\hat{i} + 6.0\\hat{j})$ m, having run 5.8 m along the bark. Find the displacement and compare it with the distance run.",
        steps: [
          { label: 'Subtract', text: "$\\Delta \\vec r = \\vec r_2 - \\vec r_1 = (-1.0 - 2.0)\\hat{i} + (6.0 - 3.0)\\hat{j} = (-3.0\\hat{i} + 3.0\\hat{j})$ m." },
          { label: 'Magnitude', text: "$|\\Delta \\vec r| = \\sqrt{(-3.0)^2 + 3.0^2} = \\sqrt{18} = 4.2$ m." },
          { label: 'Compare', text: "The branch path measured 5.8 m; the displacement, 4.2 m, is the straight chord that shortcuts it." },
        ],
        result: "$\\Delta \\vec r = (-3.0\\hat{i} + 3.0\\hat{j})$ m with $|\\Delta \\vec r| = 4.2$ m < 5.8 m of bark actually covered.",
      },
      {
        title: "Position and Displacement: range check",
        problem: "A ball is launched at $20\\ \\text{m/s}$, $40^\\circ$ above horizontal on level ground. Find the range.",
        steps: [
          { label: "Formula", text: "$R = v_0^2\\sin 2\\theta_0/g$." },
          { label: "Substitute", text: "$R = 20^2\\sin 80^\\circ/9.8 = 400/9.8\\times 0.985$." },
          { label: "Compute", text: "$R \\approx 40.2\\ \\text{m}$." },
        ],
        result: "$R \\approx 40.2\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      "$\\vec r = x\\hat{i} + y\\hat{j} + z\\hat{k}$ locates a particle; $\\Delta\\vec r = \\vec r_2 - \\vec r_1$ is the straight-line change.",
      "$|\\Delta \\vec r|$ is the chord; the traveled distance is the arc — never shorter.",
      "Vector subtraction is componentwise: $\\Delta\\vec r = (\\Delta x, \\Delta y, \\Delta z)$.",
    ],
    quiz: [
      {
        q: "$\\Delta \\vec r$ points from",
        options: [
          "the second position to the first",
          "the origin to the second position",
          "the first position to the second",
          "along the path actually traveled",
        ],
        answer: 2,
        explanation: "By construction $\\vec r_2 - \\vec r_1$ is the arrow whose tail sits at position 1 and head at position 2.",
      },
      {
        q: "A particle moves from position (1, 1) m to position (4, 5) m. Its displacement components are",
        options: ["(5, 6)", "(−3, −4)", "(3, 4)", "(4, 5)"],
        answer: 2,
        explanation: "Subtract componentwise: $(4 - 1, 5 - 1) = (3, 4)$ m — a 5 m displacement at 53° from $+x$.",
      },
      {
        q: "Over any closed loop (ending where it began), $\\Delta \\vec r$ is",
        options: [
          "equal to the loop's perimeter",
          "zero, though the distance traveled is not",
          "undefined for closed paths",
          "zero only for circular loops",
        ],
        answer: 1,
        explanation: "Positions coincide, so $\\vec r_2 - \\vec r_1 = \\vec 0$; the odometer reading is an entirely different quantity.",
      },
    ],
  },
  // ------------------------------------------------------------- 4.2
  {
    sectionId: 'hall-ch4-s2',
    readingTime: 5,
    intro: "What is physics? Give velocity a direction and it becomes a vector that can change in two ways — by resizing or by turning. This section defines $\\vec v$ as the time derivative of the position vector (one definition, three components) and establishes the geometric fact that underlies all of kinematics: the velocity is tangent to the path.",
    objectives: [
      "Compute average velocity as $\\Delta\\vec r/\\Delta t$ and instantaneous velocity as $d\\vec r/dt$",
      "Find the components of velocity from a given $\\vec r(t)$",
      "Show that the instantaneous velocity is tangent to the trajectory at every point",
    ],
    concepts: [
      {
        term: 'Average velocity',
        kind: 'definition',
        statement: "**$\\vec v_{\\text{avg}} = \\Delta \\vec r / \\Delta t$** — a vector parallel to the displacement, no matter how looped the path between.",
        detail: "Its direction is the chord's, not the path's: it summarizes a trip by its endpoints alone.",
      },
      {
        term: 'Instantaneous velocity',
        kind: 'definition',
        statement: "**$\\vec v = d\\vec r/dt$, the limit of $\\Delta\\vec r/\\Delta t$ as $\\Delta t \\to 0$.** Components: $v_x = dx/dt$, $v_y = dy/dt$, $v_z = dz/dt$.",
        detail: "The speed is the magnitude $|\\vec v| = \\sqrt{v_x^2 + v_y^2 + v_z^2}$ — one scalar summary of three rates.",
      },
      {
        term: 'Tangency',
        kind: 'insight',
        statement: "**As $\\Delta t \\to 0$ the chord flattens into the tangent: the instantaneous velocity is always directed along the tangent to the path.** This is why sparks fly off a grinding wheel tangentially, not radially.",
        detail: "The tangent property is the geometric heart of circular motion (4.5) and of every trajectory problem that follows.",
      },
      {
        term: "Average Velocity and Instantaneous Velocity: solution protocol",
        kind: "method",
        statement: "**Solve Average Velocity and Instantaneous Velocity problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is decoupling 2D motion into independent 1D motions sharing the clock $t$; the working equation is $\\vec r = x\\hat{i}+y\\hat{j}+z\\hat{k}$, $\\vec v = d\\vec r/dt$, $R = v_0^2\\sin 2\\theta_0/g$, $a = v^2/r$, $\\vec v_{PA} = \\vec v_{PB}+\\vec v_{BA}$; every substitution must carry its units so the final unit ($\\text{m/s}$, $\\text{m/s}^2$ and vector direction) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$; no air, uniform $g$, $v\\ll c$; frames must be inertial for $\\vec a$ agreement.",
      },
      {
        term: "Average Velocity and Instantaneous Velocity: scales and validity",
        kind: "insight",
        statement: "**Average Velocity and Instantaneous Velocity lives at ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$ and the textbook model holds while no air, uniform $g$, $v\\ll c$; frames must be inertial for $\\vec a$ agreement.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Average Velocity and Instantaneous Velocity calculation gives seconds when $\\text{m/s}$, $\\text{m/s}^2$ and vector direction demands meters, or a value orders of magnitude beyond ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Where the velocity is purely horizontal',
        problem: "A particle's position is $\\vec r(t) = 3.0t\\,\\hat{i} + (4.0t - t^2)\\hat{j}$ meters, with $t$ in seconds. Find $\\vec v$ at $t = 2.0$ s and at $t = 4.0$ s, and describe each.",
        steps: [
          { label: 'Differentiate componentwise', text: "$\\vec v = 3.0\\hat{i} + (4.0 - 2t)\\hat{j}$ m/s." },
          { label: 'At t = 2.0 s', text: "$\\vec v = 3.0\\hat{i} + 0\\hat{j}$: the vertical motion is momentarily at a turning point, so the particle moves purely horizontally at 3.0 m/s." },
          { label: 'At t = 4.0 s', text: "$\\vec v = 3.0\\hat{i} - 4.0\\hat{j}$ m/s: speed $\\sqrt{9 + 16} = 5.0$ m/s, at $\\tan^{-1}(4/3) = 53°$ below the $+x$ direction." },
        ],
        result: "3.0 m/s horizontally at 2.0 s; 5.0 m/s at 53° below horizontal at 4.0 s — the 3-4-5 triangle again.",
      },
      {
        title: "Average Velocity and Instantaneous Velocity: range check",
        problem: "A ball is launched at $22\\ \\text{m/s}$, $30^\\circ$ above horizontal on level ground. Find the range.",
        steps: [
          { label: "Formula", text: "$R = v_0^2\\sin 2\\theta_0/g$." },
          { label: "Substitute", text: "$R = 22^2\\sin 60^\\circ/9.8 = 484/9.8\\times 0.866$." },
          { label: "Compute", text: "$R \\approx 42.8\\ \\text{m}$." },
        ],
        result: "$R \\approx 42.8\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      "$\\vec v = d\\vec r/dt$, componentwise; speed = $|\\vec v|$.",
      "Instantaneous velocity is tangent to the trajectory — the limiting chord.",
      "$\\vec v_{\\text{avg}}$ points along $\\Delta\\vec r$; $\\vec v$ itself points along the path.",
    ],
    quiz: [
      {
        q: "The direction of the instantaneous velocity at a point on a trajectory is",
        options: ["tangent to the path there", "toward the origin", "perpendicular to the path", "along the average velocity"],
        answer: 0,
        explanation: "The shrinking chord between two nearby positions turns into the tangent line in the limit $\\Delta t \\to 0$.",
      },
      {
        q: "If $\\vec r(t) = (2t^2)\\hat{i} + (3t)\\hat{j}$, then $\\vec v(t) =$",
        options: ["$2t^2\\hat{i} + 3t\\hat{j}$", "$4\\hat{i} + 3\\hat{j}$", "$4t\\hat{i} + 3t\\hat{j}$", "$4t\\hat{i} + 3\\hat{j}$"],
        answer: 3,
        explanation: "Differentiate each component: $d(2t^2)/dt = 4t$ and $d(3t)/dt = 3$.",
      },
      {
        q: "The speed of a particle with $\\vec v = -6\\hat{i} + 8\\hat{j}$ m/s is",
        options: ["14 m/s", "10 m/s", "8 m/s", "2 m/s"],
        answer: 1,
        explanation: "$|\\vec v| = \\sqrt{36 + 64} = 10$ m/s; adding magnitudes (14) ignores the vector character, and the sign of a component never enters a speed.",
      },
    ],
  },
  // ------------------------------------------------------------- 4.3
  {
    sectionId: 'hall-ch4-s3',
    readingTime: 5,
    intro: "What is physics? Acceleration is where dynamics will grip: forces produce accelerations, and in more than one dimension an acceleration can change a velocity's size, its direction, or both. That triple freedom — speeding up, slowing down, turning — is what fills the rest of this chapter: projectiles, circles and relative motion.",
    objectives: [
      "Compute average and instantaneous acceleration as $\\Delta\\vec v/\\Delta t$ and $d\\vec v/dt$",
      "Extract acceleration components from $\\vec v(t)$ or $\\vec r(t)$",
      "Classify accelerations by their effect: changing speed, changing direction, or both",
    ],
    concepts: [
      {
        term: 'Acceleration',
        kind: 'definition',
        statement: "**$\\vec a = d\\vec v/dt$ (components $a_x = dv_x/dt$, and so on) or $\\vec a_{\\text{avg}} = \\Delta \\vec v/\\Delta t$.** Because $\\vec v$ changes direction as well as size, $\\vec a$ need not point anywhere in particular along the path.",
        detail: "In components, $\\vec a = d^2\\vec r/dt^2$: the second derivative of each coordinate.",
      },
      {
        term: 'Three effects',
        kind: 'insight',
        statement: "**An acceleration can (i) change the speed (component along $\\vec v$), (ii) change the direction (component perpendicular to $\\vec v$), or (iii) both.** Uniform circular motion will be pure (ii); free fall, pure (i); most real motion, (iii).",
        detail: "Resolving $\\vec a$ into parallel and perpendicular pieces relative to $\\vec v$ is the diagnostic tool for reading any trajectory.",
      },
      {
        term: 'Perpendicular acceleration keeps speed',
        kind: 'law',
        statement: "**Whenever $\\vec a$ stays perpendicular to $\\vec v$, the speed is constant — only the direction changes.** One fact, and Section 4.5's circular motion is already solved.",
        detail: "The proof is one dot product: $d(v^2)/dt = 2\\vec v \\cdot \\vec a = 0$.",
      },
      {
        term: "Average Acceleration and Instantaneous Acceleration: solution protocol",
        kind: "method",
        statement: "**Solve Average Acceleration and Instantaneous Acceleration problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is decoupling 2D motion into independent 1D motions sharing the clock $t$; the working equation is $\\vec r = x\\hat{i}+y\\hat{j}+z\\hat{k}$, $\\vec v = d\\vec r/dt$, $R = v_0^2\\sin 2\\theta_0/g$, $a = v^2/r$, $\\vec v_{PA} = \\vec v_{PB}+\\vec v_{BA}$; every substitution must carry its units so the final unit ($\\text{m/s}$, $\\text{m/s}^2$ and vector direction) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$; no air, uniform $g$, $v\\ll c$; frames must be inertial for $\\vec a$ agreement.",
      },
      {
        term: "Average Acceleration and Instantaneous Acceleration: scales and validity",
        kind: "insight",
        statement: "**Average Acceleration and Instantaneous Acceleration lives at ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$ and the textbook model holds while no air, uniform $g$, $v\\ll c$; frames must be inertial for $\\vec a$ agreement.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Average Acceleration and Instantaneous Acceleration calculation gives seconds when $\\text{m/s}$, $\\text{m/s}^2$ and vector direction demands meters, or a value orders of magnitude beyond ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Differentiating twice',
        problem: "A velocity is given by $\\vec v(t) = (2.0 + 3.0t)\\hat{i} + (-1.0 + 4.0t^2)\\hat{j}$ m/s. Find $\\vec a$ and its magnitude at $t = 2.0$ s.",
        steps: [
          { label: 'Differentiate', text: "$\\vec a = 3.0\\hat{i} + 8.0t\\,\\hat{j}$ m/s²." },
          { label: 'Substitute', text: "At $t = 2.0$ s: $\\vec a = 3.0\\hat{i} + 16\\hat{j}$ m/s²." },
          { label: 'Magnitude and direction', text: "$a = \\sqrt{9 + 256} = 16.3$ m/s² at $\\tan^{-1}(16/3) = 79°$ from the $+x$ direction." },
        ],
        result: "$\\vec a = (3.0\\hat{i} + 16\\hat{j})$ m/s², magnitude 16.3 m/s².",
      },
      {
        title: "Average Acceleration and Instantaneous Acceleration: range check",
        problem: "A ball is launched at $24\\ \\text{m/s}$, $35^\\circ$ above horizontal on level ground. Find the range.",
        steps: [
          { label: "Formula", text: "$R = v_0^2\\sin 2\\theta_0/g$." },
          { label: "Substitute", text: "$R = 24^2\\sin 70^\\circ/9.8 = 576/9.8\\times 0.94$." },
          { label: "Compute", text: "$R \\approx 55.2\\ \\text{m}$." },
        ],
        result: "$R \\approx 55.2\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      "$\\vec a = d\\vec v/dt = d^2\\vec r/dt^2$, componentwise.",
      "Acceleration can change speed, direction or both — the perpendicular part does the turning.",
      "$\\vec a \\perp \\vec v$ at all times means constant speed — the engine behind uniform circular motion.",
    ],
    quiz: [
      {
        q: "A car rounds a bend at a steady 50 km/h. Its acceleration is",
        options: [
          "nonzero, perpendicular to its velocity",
          "zero because the speed is constant",
          "nonzero, along its velocity",
          "undefined without the path's equation",
        ],
        answer: 0,
        explanation: "The velocity vector is turning, so $\\vec a \\ne 0$; with the speed fixed, all of $\\vec a$ is the perpendicular, turning part.",
      },
      {
        q: "If $\\vec v = 6t^2\\hat{i}$ m/s, the acceleration at $t = 1.0$ s is",
        options: ["$6\\hat{i}$ m/s²", "$0$", "$12t\\hat{i}$ m/s²", "$12\\hat{i}$ m/s²"],
        answer: 3,
        explanation: "$\\vec a = dv_x/dt\\,\\hat{i} = 12t\\hat{i}$, and at $t = 1.0$ s that is $12\\hat{i}$ m/s².",
      },
      {
        q: "A particle's speed can remain constant while its acceleration is nonzero. This happens when",
        options: [
          "$\\vec a$ is always parallel to $\\vec v$",
          "$\\vec a$ is zero",
          "$\\vec v$ reverses direction every instant",
          "$\\vec a$ is always perpendicular to $\\vec v$",
        ],
        answer: 3,
        explanation: "The perpendicular component of $\\vec a$ turns $\\vec v$ without stretching it: $\\vec v \\cdot \\vec a = 0$ keeps $v^2$ constant.",
      },
    ],
  },
  // ------------------------------------------------------------- 4.4
  {
    sectionId: 'hall-ch4-s4',
    readingTime: 8,
    intro: "What is physics? A fly ball, a cannon shell, a leaping salmon — projectiles share one secret: once launched, gravity is the only actor, and it acts only vertically. The horizontal and vertical motions decouple into two familiar one-dimensional problems that merely share a clock. That decoupling, plus the tangency of velocity, generates everything in this section — the parabola included.",
    objectives: [
      "Analyze projectile motion as two independent 1D motions sharing the time $t$",
      "Derive and use the trajectory equation, the range, maximum height and time of flight",
      "Solve horizontal-launch problems from the height alone",
    ],
    concepts: [
      {
        term: 'The decoupling',
        kind: 'insight',
        statement: "**Horizontal: $a_x = 0$, so $v_x = v_{0x}$ stays constant and $x = v_{0x}t$. Vertical: $a_y = -g$, so $y = v_{0y}t - \\frac{1}{2}gt^2$ is free fall.** The only thing the two motions share is the clock.",
        detail: "Nothing about the horizontal motion ever feeds back into the vertical: a bullet fired horizontally and one dropped from the same height strike the ground at the same instant.",
      },
      {
        term: 'The trajectory equation',
        kind: 'law',
        statement: "**Eliminating $t$ between the two motion equations gives the flight path** $$y = (\\tan\\theta_0)x - \\frac{g}{2v_0^2\\cos^2\\theta_0}x^2$$ — a parabola, for every launch angle $\\theta_0$.",
        detail: "This is the curve you actually see — height as a function of downrange distance, with time already divided out.",
      },
      {
        term: 'Level-ground flight data',
        kind: 'law',
        statement: "**Flight time $T = 2v_0\\sin\\theta_0/g$, range $R = v_0^2\\sin 2\\theta_0/g$, maximum height $H = v_0^2\\sin^2\\theta_0/2g$.** Complementary angles ($\\theta_0$ and $90° - \\theta_0$) share the same range; 45° maximizes it, with $R_{\\max} = v_0^2/g$.",
        detail: "The range's $\\sin 2\\theta_0$ is where the double-angle symmetry hides — a $30°$ kick and a $60°$ kick land in the same spot, in principle.",
      },
      {
        term: 'Horizontal launch',
        kind: 'method',
        statement: "**From height $h$ with speed $v_{0x}$: the drop time is set by the height alone, $t = \\sqrt{2h/g}$, and the range is $v_{0x}\\sqrt{2h/g}$.** The falling is independent of the flying.",
        detail: "Mass is absent from every formula here — a bowling ball and a marble launched together from the same cliff land together.",
      },
      {
        term: "Projectile Motion: solution protocol",
        kind: "method",
        statement: "**Solve Projectile Motion problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is decoupling 2D motion into independent 1D motions sharing the clock $t$; the working equation is $\\vec r = x\\hat{i}+y\\hat{j}+z\\hat{k}$, $\\vec v = d\\vec r/dt$, $R = v_0^2\\sin 2\\theta_0/g$, $a = v^2/r$, $\\vec v_{PA} = \\vec v_{PB}+\\vec v_{BA}$; every substitution must carry its units so the final unit ($\\text{m/s}$, $\\text{m/s}^2$ and vector direction) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$; no air, uniform $g$, $v\\ll c$; frames must be inertial for $\\vec a$ agreement.",
      },
    ],
    figures: [
      {
        caption: "Projectile motion decomposed: $\\vec v_x$ (dashed) has the same length everywhere, while $v_y$ shrinks to zero at the apex and returns with opposite sign. The launch angle $\\theta_0$ fixes the ratio of the components; $H = v_0^2\\sin^2\\theta_0/2g$ and $R = v_0^2\\sin 2\\theta_0/g$ on level ground.",
        svg: `<svg viewBox="0 0 720 340" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Projectile trajectory with velocity components"><line x1="60" y1="280" x2="688" y2="280" stroke="currentColor" stroke-width="1.5"/><polygon points="688,280 678,276 678,284" fill="currentColor"/><line x1="90" y1="280" x2="90" y2="52" stroke="currentColor" stroke-width="1.5"/><polygon points="90,52 86,62 94,62" fill="currentColor"/><text x="676" y="268" font-size="13" font-style="italic" fill="currentColor">x</text><text x="78" y="62" font-size="13" font-style="italic" fill="currentColor">y</text><polyline points="90,280 140,208 190,152 240,112 290,88 340,80 390,88 440,112 490,152 540,208 590,280" fill="none" stroke="currentColor" stroke-width="3"/><line x1="90" y1="80" x2="340" y2="80" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/><text x="82" y="74" font-size="12" text-anchor="end" fill="currentColor">H = v₀²sin²θ₀/2g</text><line x1="90" y1="280" x2="120" y2="232" stroke="currentColor" stroke-width="2.5"/><polygon points="120,232 117.0,244.3 110.2,240.1" fill="currentColor"/><line x1="90" y1="280" x2="120" y2="280" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/><polygon points="120,280 110,276 110,284" fill="currentColor"/><text x="98" y="298" font-size="11" fill="currentColor">v₀ₓ</text><line x1="120" y1="280" x2="120" y2="232" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/><polygon points="120,232 116,242 124,242" fill="currentColor"/><text x="130" y="258" font-size="11" fill="currentColor">v₀<tspan dy="4" font-size="9">y</tspan></text><line x1="215" y1="130" x2="245" y2="106" stroke="currentColor" stroke-width="2.5"/><polygon points="245,106 238.4,117.0 232.8,110.0" fill="currentColor"/><line x1="340" y1="80" x2="376" y2="80" stroke="currentColor" stroke-width="2.5"/><polygon points="376,80 364,76 364,84" fill="currentColor"/><text x="352" y="64" font-size="11" fill="currentColor">v = vₓ only (v<tspan dy="3" font-size="9">y</tspan><tspan dy="-3"> = 0)</tspan></text><line x1="420" y1="62" x2="420" y2="100" stroke="currentColor" stroke-width="2"/><polygon points="420,100 416,90 424,90" fill="currentColor"/><text x="428" y="88" font-size="12" font-style="italic" fill="currentColor">g</text><line x1="465" y1="130" x2="495" y2="154" stroke="currentColor" stroke-width="2.5"/><polygon points="495,154 482.8,150.0 488.4,143.0" fill="currentColor"/><line x1="590" y1="280" x2="620" y2="328" stroke="currentColor" stroke-width="2.5"/><polygon points="620,328 609.8,320.2 617.4,315.4" fill="currentColor"/><line x1="590" y1="280" x2="620" y2="280" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/><polygon points="620,280 610,276 610,284" fill="currentColor"/><text x="600" y="298" font-size="11" fill="currentColor">vₓ</text><line x1="620" y1="280" x2="620" y2="328" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/><polygon points="620,328 616,318 624,318" fill="currentColor"/><text x="630" y="312" font-size="11" fill="currentColor">v<tspan dy="4" font-size="9">y</tspan></text><path d="M 140 280 A 50 50 0 0 0 116.5 237.5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="152" y="268" font-size="12" font-style="italic" fill="currentColor">θ₀</text><line x1="90" y1="304" x2="590" y2="304" stroke="currentColor" stroke-width="1.5"/><polygon points="90,304 100,300 100,308" fill="currentColor"/><polygon points="590,304 580,300 580,308" fill="currentColor"/><text x="340" y="322" font-size="12" text-anchor="middle" fill="currentColor">R = v₀²sin 2θ₀ / g</text><text x="520" y="56" font-size="11" fill="currentColor">vₓ never changes —</text><text x="520" y="74" font-size="11" fill="currentColor">only v<tspan dy="3" font-size="9">y</tspan><tspan dy="-3"> does, at rate g</tspan></text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "The stunt driver's gap",
        problem: "A movie stunt driver on a motorcycle speeds horizontally off a 50.0-m-high cliff. The landing zone is 90.0 m from the base of the cliff. What launch speed does the stunt require? Ignore air resistance and take $g = 9.8$ m/s².",
        steps: [
          { label: 'Vertical first', text: "The fall time is fixed by the height alone: $-50.0 = -\\frac{1}{2}gt^2$ gives $t = \\sqrt{2(50.0)/9.8} = 3.19$ s." },
          { label: 'Horizontal second', text: "Constant horizontal velocity must cover 90.0 m in that time: $v_{0x} = 90.0/3.19 = 28.2$ m/s." },
          { label: 'Interpret', text: "About 101 km/h — and the answer is independent of the motorcycle's mass, depending only on the height and the gap." },
        ],
        result: "$v_0 \\approx 28.2$ m/s (about 101 km/h), directed horizontally.",
      },
      {
        title: 'The cleared ball',
        problem: "A soccer ball is kicked at 20.0 m/s, 30.0° above the horizontal, from level ground. Find its time of flight, range and maximum height.",
        steps: [
          { label: 'Components', text: "$v_{0x} = 20.0\\cos 30.0° = 17.3$ m/s and $v_{0y} = 20.0\\sin 30.0° = 10.0$ m/s." },
          { label: 'Flight time and range', text: "$T = 2v_{0y}/g = 20.0/9.8 = 2.04$ s; $R = v_{0x}T = 17.3 \\times 2.04 = 35.3$ m." },
          { label: 'Height', text: "$H = v_{0y}^2/2g = 100/19.6 = 5.10$ m." },
          { label: 'Cross-check', text: "Range formula: $R = v_0^2\\sin 2\\theta_0/g = 400\\sin 60°/9.8 = 35.3$ m — the two routes agree." },
        ],
        result: "$T = 2.04$ s, $R = 35.3$ m, $H = 5.10$ m.",
      },
    ],
    keyTakeaways: [
      "Projectile motion = constant-velocity horizontal motion + free-fall vertical motion sharing a clock.",
      "The path is a parabola; $R = v_0^2\\sin 2\\theta_0/g$ on level ground, maximized at 45°.",
      "At the apex $v_y = 0$ while $a = g$ downward; rise and fall are symmetric.",
    ],
    quiz: [
      {
        q: "At the top of its trajectory a projectile's velocity and acceleration are",
        options: [
          "$\\vec v$ horizontal, $\\vec a$ straight down",
          "$\\vec v$ zero, $\\vec a$ zero",
          "$\\vec v$ vertical, $\\vec a$ zero",
          "$\\vec v$ horizontal, $\\vec a$ zero",
        ],
        answer: 0,
        explanation: "The vertical component vanishes but the horizontal one persists, and gravity never takes a break.",
      },
      {
        q: "A bullet fired horizontally and an identical bullet dropped from the same height at the same instant",
        options: [
          "land with the fired one arriving later",
          "land with the dropped one arriving first",
          "land at the same instant",
          "arrive in an order that depends on the muzzle speed",
        ],
        answer: 2,
        explanation: "Vertical free fall is independent of horizontal motion: both take $t = \\sqrt{2h/g}$.",
      },
      {
        q: "For a fixed launch speed on level ground (no air), the maximum range occurs at",
        options: ["30°", "90°", "60°", "45°"],
        answer: 3,
        explanation: "$R \\propto \\sin 2\\theta_0$ peaks when $2\\theta_0 = 90°$.",
      },
      {
        q: "At what point of the flight is the projectile's speed a minimum?",
        options: ["at launch", "at the apex", "at landing", "at the midpoint of the descent"],
        answer: 1,
        explanation: "At the apex only the constant horizontal component remains; everywhere else the vertical component adds in quadrature.",
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'The envelope of safety — the boundary of all trajectories',
        blocks: [
          {
            kind: 'para',
            heading: 'The global question',
            body: "Everything above treats one launch angle at a time. The masters-level question is global: given a fixed launch speed $v_0$ and no air resistance, what is the set of all points any projectile can reach? The boundary of that set is itself a parabola — the envelope of the trajectory family — and it settles targeting questions in one stroke.",
          },
          {
            kind: 'derivation',
            heading: 'The trajectory, once and for all',
            body: "Launch from the origin at angle $\\theta_0$ with speed $v_0$: $x = v_0\\cos\\theta_0\\,t$ and $y = v_0\\sin\\theta_0\\,t - \\frac{1}{2}gt^2$. Solving the first for $t$ and substituting into the second gives $$y = (\\tan\\theta_0)x - \\frac{g}{2v_0^2\\cos^2\\theta_0}x^2.$$ Write $u \\equiv \\tan\\theta_0$ and use $\\cos^{-2}\\theta_0 = 1 + u^2$: the whole family collapses to $$y(x; u) = ux - \\frac{g}{2v_0^2}(1 + u^2)x^2,$$ a one-parameter family indexed by the launch slope $u$.",
          },
          {
            kind: 'derivation',
            heading: 'Optimizing over the angle',
            body: "For a fixed downrange distance $x$, the highest reachable altitude is the maximum of $y$ over $u$: $$\\frac{\\partial y}{\\partial u} = x - \\frac{g}{v_0^2}u x^2 = 0 \\quad\\Longrightarrow\\quad u^* = \\frac{v_0^2}{gx}.$$ Substituting back, $$y_{\\text{env}}(x) = \\frac{v_0^2}{g} - \\frac{g}{2v_0^2}\\left(1 + \\frac{v_0^4}{g^2x^2}\\right)x^2 = \\frac{v_0^2}{2g} - \\frac{g}{2v_0^2}x^2.$$ The second derivative is $-gx^2/v_0^2 < 0$, confirming a true maximum.",
          },
          {
            kind: 'theorem',
            heading: 'The parabola of safety',
            body: "**No projectile launched at speed $v_0$ from the origin can reach any point above the parabola** $$y_{\\text{env}}(x) = \\frac{v_0^2}{2g} - \\frac{g}{2v_0^2}x^2.$$ **Points on the parabola are attainable by exactly one launch angle, $\\tan\\theta_0 = v_0^2/(gx)$; points strictly below it, by two angles — the high arc and the low line that share the target.** The envelope meets the ground exactly at the level-flight maximum range $x = v_0^2/g$, and its apex, at $x = 0$, is the vertical-shot ceiling $v_0^2/2g$.",
          },
          {
            kind: 'example',
            heading: 'A 30 m/s launcher',
            body: "With $v_0 = 30$ m/s and $g = 9.8$ m/s², the envelope is $y = 45.9 - 0.00544x^2$ (meters). Can a ball reach the window at $(40\\ \\text{m},\\ 38\\ \\text{m})$? The envelope caps the altitude at $x = 40$ m at $45.9 - 8.7 = 37.2$ m — about a meter short: no launch angle works. A target at $(90\\ \\text{m},\\ 1.5\\ \\text{m})$ fares better: $y_{\\text{env}}(90) = 45.9 - 44.1 = 1.8$ m, above the target — reachable, and by two distinct angles.",
          },
          {
            kind: 'application',
            heading: 'Two firing solutions',
            body: "Artillery crews know this theorem operationally: a target inside the envelope is engaged by two distinct elevations — a flat, fast time-of-flight shot and a lofted howitzer arc landing at the same point. Fire-control computers solve the quadratic and offer both; mortars take the high solution precisely because it drops shells behind cover that a flat trajectory cannot clear. The same two-angle structure explains how a soccer keeper can drop a long goal kick softly onto a teammate's head or drive it low and hard to the same spot.",
          },
          {
            kind: 'remark',
            heading: 'Where the idealization breaks',
            body: "Air resistance bends every trajectory below its vacuum cousin, so the true envelope is lower and skewed downrange, and the two-angle degeneracy breaks — the drag-modified optimum launch angle falls well below 45°. On the Moon, with no air and one-sixth the gravity, the envelope simply scales up by the factor 6: the same algebra, a larger kingdom.",
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------- 4.5
  {
    sectionId: 'hall-ch4-s5',
    readingTime: 6,
    intro: "What is physics? A carousel horse, a satellite, a proton in a collider ring moves in a circle at steady speed, yet each is accelerating — its velocity is turning even though it is not growing. This section pins down the geometry of that turning: an acceleration of magnitude $v^2/r$, aimed forever at the center. Circular motion is the first place a vector's direction does all the work.",
    objectives: [
      "Show that motion at constant speed on a circle is nonetheless accelerated",
      "Derive and apply $a = v^2/r$, directed centripetally",
      "Relate speed, radius and period via $v = 2\\pi r/T$",
    ],
    concepts: [
      {
        term: 'Uniform circular motion',
        kind: 'definition',
        statement: "**Motion in a circle at constant speed.** Uniform refers to the speed; the velocity is not uniform, because its direction turns continuously.",
        detail: "With period $T$ — the time for one full lap — the speed follows from the circumference: $v = 2\\pi r/T$.",
      },
      {
        term: 'Centripetal acceleration',
        kind: 'law',
        statement: "**$a = v^2/r$, directed toward the center at every instant.** The word means center-seeking, and the acceleration is perpendicular to the velocity — which is why the speed never changes.",
        detail: "Two routes agree: $v^2/r$ with $v = 2\\pi r/T$ gives $4\\pi^2r/T^2$, exactly the rate at which the velocity's direction must turn to complete one revolution per period.",
      },
      {
        term: 'Perpendicular by construction',
        kind: 'insight',
        statement: "**Because $\\vec a \\perp \\vec v$ at every instant, uniform circular motion changes only the direction of $\\vec v$ — the archetype of acceleration without speeding up.**",
        detail: "Newton's second law will later insist that something real must pull inward — a string, friction, gravity: every centripetal acceleration is paid for by a force.",
      },
      {
        term: "Uniform Circular Motion: solution protocol",
        kind: "method",
        statement: "**Solve Uniform Circular Motion problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is decoupling 2D motion into independent 1D motions sharing the clock $t$; the working equation is $\\vec r = x\\hat{i}+y\\hat{j}+z\\hat{k}$, $\\vec v = d\\vec r/dt$, $R = v_0^2\\sin 2\\theta_0/g$, $a = v^2/r$, $\\vec v_{PA} = \\vec v_{PB}+\\vec v_{BA}$; every substitution must carry its units so the final unit ($\\text{m/s}$, $\\text{m/s}^2$ and vector direction) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$; no air, uniform $g$, $v\\ll c$; frames must be inertial for $\\vec a$ agreement.",
      },
      {
        term: "Uniform Circular Motion: scales and validity",
        kind: "insight",
        statement: "**Uniform Circular Motion lives at ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$ and the textbook model holds while no air, uniform $g$, $v\\ll c$; frames must be inertial for $\\vec a$ agreement.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Uniform Circular Motion calculation gives seconds when $\\text{m/s}$, $\\text{m/s}^2$ and vector direction demands meters, or a value orders of magnitude beyond ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$, recheck the setup before trusting the arithmetic.",
      },
    ],
    figures: [
      {
        caption: "Left: the particle moves from $P_1$ to $P_2$ at constant speed, so $|\\vec v_1| = |\\vec v_2|$. Right: the velocity triangle — because the two velocities have equal length, their difference $\\Delta \\vec v$ points toward the center as $\\Delta t \\to 0$; dividing by $\\Delta t$ gives $a = v^2/r$.",
        svg: `<svg viewBox="0 0 720 330" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Centripetal acceleration from the velocity triangle"><text x="190" y="28" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">positions and velocities</text><text x="425" y="28" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">velocity diagram</text><circle cx="190" cy="175" r="100" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="190" cy="175" r="3" fill="currentColor"/><text x="176" y="197" font-size="12" fill="currentColor">C</text><line x1="190" y1="175" x2="266.6" y2="110.7" stroke="currentColor" stroke-width="1"/><line x1="190" y1="175" x2="207.4" y2="76.5" stroke="currentColor" stroke-width="1"/><text x="214" y="162" font-size="12" font-style="italic" fill="currentColor">Δθ</text><circle cx="266.6" cy="110.7" r="3.5" fill="currentColor"/><text x="278" y="106" font-size="12" fill="currentColor">P₁</text><circle cx="207.4" cy="76.5" r="3.5" fill="currentColor"/><text x="212" y="66" font-size="12" fill="currentColor">P₂</text><line x1="266.6" y1="110.7" x2="215.2" y2="49.4" stroke="currentColor" stroke-width="2.5"/><polygon points="215.2,49.4 226.3,55.7 219.5,61.5" fill="currentColor"/><text x="243" y="42" font-size="12" font-style="italic" fill="currentColor">v₁</text><line x1="207.4" y1="76.5" x2="128.6" y2="62.6" stroke="currentColor" stroke-width="2.5"/><polygon points="128.6,62.6 141.2,60.3 139.6,69.1" fill="currentColor"/><text x="103" y="54" font-size="12" font-style="italic" fill="currentColor">v₂</text><line x1="266.6" y1="110.7" x2="220.6" y2="149.3" stroke="currentColor" stroke-width="2.5"/><polygon points="220.6,149.3 226.9,138.2 232.7,145.0" fill="currentColor"/><text x="238" y="132" font-size="14" font-style="italic" font-weight="bold" fill="currentColor">a</text><circle cx="460" cy="250" r="3" fill="currentColor"/><text x="470" y="266" font-size="12" fill="currentColor">O′</text><line x1="460" y1="250" x2="408.6" y2="188.7" stroke="currentColor" stroke-width="2.5"/><polygon points="408.6,188.7 419.8,195.0 412.8,200.8" fill="currentColor"/><text x="402" y="178" font-size="12" font-style="italic" fill="currentColor">v₁</text><line x1="460" y1="250" x2="381.2" y2="236.1" stroke="currentColor" stroke-width="2.5"/><polygon points="381.2,236.1 393.8,233.8 392.2,242.6" fill="currentColor"/><text x="358" y="252" font-size="12" font-style="italic" fill="currentColor">v₂</text><line x1="408.6" y1="188.7" x2="381.2" y2="236.1" stroke="currentColor" stroke-width="2.5"/><polygon points="381.2,236.1 391.1,227.9 383.3,223.5" fill="currentColor"/><text x="368" y="212" font-size="12" font-style="italic" font-weight="bold" fill="currentColor">Δv</text><path d="M 440.7 227.0 A 30 30 0 0 0 430.4 244.8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="447" y="250" font-size="12" font-style="italic" fill="currentColor">Δθ</text><text x="530" y="120" font-size="12" fill="currentColor">as Δt → 0, Δv points</text><text x="530" y="138" font-size="12" fill="currentColor">at the center, and</text><text x="530" y="166" font-size="15" font-weight="bold" fill="currentColor">a = v²/r</text><text x="530" y="230" font-size="12" fill="currentColor">both arrows have length v</text><text x="530" y="248" font-size="12" fill="currentColor">(uniform speed)</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'The ultracentrifuge',
        problem: "An ultracentrifuge spins a sample at 75 000 revolutions per minute, at a point 4.00 cm from the rotation axis. Find the speed there and the centripetal acceleration, in m/s² and in units of $g$.",
        steps: [
          { label: 'Rate to frequency', text: "75 000 rev/min $= 1250$ rev/s, so each revolution takes $T = 1/1250 = 8.0 \\times 10^{-4}$ s." },
          { label: 'Speed', text: "$v = 2\\pi r f = 2\\pi(0.0400)(1250) = 314$ m/s — faster than most aircraft." },
          { label: 'Acceleration', text: "$a = v^2/r = (314)^2/0.0400 = 2.47 \\times 10^{6}$ m/s², about $2.5 \\times 10^{5}$ times $g$." },
          { label: 'Interpret', text: "This is why ultracentrifuges can sort viruses by mass — and why their rotors are forged from titanium." },
        ],
        result: "$v = 314$ m/s; $a = 2.5 \\times 10^{6}$ m/s² $\\approx 2.5 \\times 10^{5}\\ g$.",
      },
      {
        title: "Uniform Circular Motion: centripetal numbers",
        problem: "A car rounds a curve of radius $25\\ \\text{m}$ at $15\\ \\text{m/s}$. Find the centripetal acceleration.",
        steps: [
          { label: "Formula", text: "$a = v^2/r$ toward the center." },
          { label: "Substitute", text: "$a = 15^2/25 = 225/25 = 9\\ \\text{m/s}^2$." },
          { label: "In $g$'s", text: "$9/9.8 \\approx 0.918g$." },
        ],
        result: "$a \\approx 9\\ \\text{m/s}^2$ inward.",
      },
    ],
    keyTakeaways: [
      "Uniform circular motion is accelerated motion: the direction of $\\vec v$ turns continuously.",
      "$a = v^2/r$ centripetal, perpendicular to $\\vec v$ — constant speed by construction.",
      "$v = 2\\pi r/T$ links speed, radius and period; the two routes to $a$ agree: $v^2/r = 4\\pi^2r/T^2$.",
    ],
    quiz: [
      {
        q: "A particle moves at constant speed on a circle. Its acceleration points",
        options: ["toward the center", "away from the center", "along the velocity", "it is zero"],
        answer: 0,
        explanation: "Only the velocity's direction changes, and turning toward the next tangent means steering toward the center — centripetal, always.",
      },
      {
        q: "Doubling the speed at fixed radius changes the centripetal acceleration by a factor of",
        options: ["2", "4", "1/2", "8"],
        answer: 1,
        explanation: "$a = v^2/r$ is quadratic in the speed: $2v$ gives $4a$.",
      },
      {
        q: "On a circular track of radius 50 m a cyclist rides at 10 m/s. The acceleration is",
        options: ["5.0 m/s²", "2.0 m/s²", "0.2 m/s²", "10 m/s²"],
        answer: 1,
        explanation: "$a = v^2/r = 100/50 = 2.0$ m/s², directed toward the center of the track.",
      },
      {
        q: "The period and speed of uniform circular motion are related by",
        options: ["$v = 2\\pi T/r$", "$v = 2\\pi rT$", "$v = \\pi r^2/T$", "$v = 2\\pi r/T$"],
        answer: 3,
        explanation: "One period covers one circumference: speed = distance over time = $2\\pi r/T$.",
      },
    ],
  },
  // ------------------------------------------------------------- 4.6
  {
    sectionId: 'hall-ch4-s6',
    readingTime: 5,
    intro: "What is physics? The passenger was walking at 2 m/s — measured by whom? Every velocity is a statement about two things: the object moving and the frame doing the measuring. This section builds the one-dimensional bookkeeping that connects them — two subscripts and one addition — and shows why a strolling passenger can be breaking the speed limit relative to the ground.",
    objectives: [
      "Use the two-subscript notation $x_{PA}$ and identify what each subscript names",
      "Apply $x_{PA} = x_{PB} + x_{BA}$ and its differentiated consequences for velocities",
      "Translate one-dimensional motion between frames moving at constant relative velocity",
    ],
    concepts: [
      {
        term: 'Reference frames',
        kind: 'definition',
        statement: "**A reference frame is the body from which a measurement is made — the track, the train, the riverbank.** The subscript pattern $x_{PA}$ reads: the position of P as measured in frame A — first subscript the object, second the frame.",
        detail: "Reversing the subscripts negates: $x_{AB} = -x_{BA}$. The pattern of inner cancellation is exactly like fractions.",
      },
      {
        term: 'Linking positions',
        kind: 'law',
        statement: "**$x_{PA} = x_{PB} + x_{BA}$**: the position of P relative to A equals its position relative to B plus the position of B relative to A.",
        detail: "The chain generalizes over any number of frames — Zurich time plus Zurich–Paris offset plus Paris–Rome offset gives Rome time.",
      },
      {
        term: 'Linking velocities',
        kind: 'law',
        statement: "**Differentiating gives $v_{PA} = v_{PB} + v_{BA}$, and once more $a_{PA} = a_{PB} + a_{BA}$ — which collapses to $a_{PA} = a_{PB}$ whenever the frames move at constant relative velocity.**",
        detail: "All constant-velocity observers measure the same acceleration — the fact that makes inertial frames special in Chapter 5.",
      },
      {
        term: 'One dimension, signs only',
        kind: 'method',
        statement: "**In 1D the whole machinery is signed addition: pick the positive direction once, then add the velocities with their signs.**",
        detail: "Most relative-motion errors are sign errors born of switching the convention mid-problem.",
      },
      {
        term: "Relative Motion in One Dimension: solution protocol",
        kind: "method",
        statement: "**Solve Relative Motion in One Dimension problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is decoupling 2D motion into independent 1D motions sharing the clock $t$; the working equation is $\\vec r = x\\hat{i}+y\\hat{j}+z\\hat{k}$, $\\vec v = d\\vec r/dt$, $R = v_0^2\\sin 2\\theta_0/g$, $a = v^2/r$, $\\vec v_{PA} = \\vec v_{PB}+\\vec v_{BA}$; every substitution must carry its units so the final unit ($\\text{m/s}$, $\\text{m/s}^2$ and vector direction) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$; no air, uniform $g$, $v\\ll c$; frames must be inertial for $\\vec a$ agreement.",
      },
    ],
    examples: [
      {
        title: 'Walking the aisle',
        problem: "A train moves at 20 m/s in the $+x$ direction. A passenger walks at 1.5 m/s relative to the train, (a) toward the front and (b) toward the rear. Find her velocity relative to the ground in each case. (c) Two cyclists then approach one another at 5.0 m/s and 3.0 m/s in this same frame; find the velocity of the first relative to the second.",
        steps: [
          { label: 'Identify frames', text: "P = passenger, B = train, A = ground. Given $v_{BA} = +20$ m/s and $v_{PB} = \\pm 1.5$ m/s." },
          { label: '(a) Toward the front', text: "$v_{PA} = v_{PB} + v_{BA} = 1.5 + 20 = +21.5$ m/s." },
          { label: '(b) Toward the rear', text: "$v_{PA} = -1.5 + 20 = +18.5$ m/s — still forward, just slower." },
          { label: '(c) Cyclists', text: "$v_{12} = v_{1A} - v_{2A} = 5.0 - (-3.0) = +8.0$ m/s: each measures the other closing at 8.0 m/s." },
        ],
        result: "(a) +21.5 m/s, (b) +18.5 m/s, both forward; (c) the cyclists close at 8.0 m/s.",
      },
      {
        title: "Relative Motion in One Dimension: frame addition check",
        problem: "A train moves at $20\\ \\text{m/s}$ and a passenger walks at $1.5\\ \\text{m/s}$ relative to the train toward the front. What is the passenger speed over the ground?",
        steps: [
          { label: "Frames", text: "$v_{PA} = v_{PB}+v_{BA}$ with $v_{BA} = +20$, $v_{PB} = +1.5$." },
          { label: "Add", text: "$v_{PA} = 1.5+20 = 21.5\\ \\text{m/s}$ forward." },
          { label: "Rear check", text: "Walking rearward gives $-1.5+20 = 18.5\\ \\text{m/s}$ — still forward." },
        ],
        result: "$21.5\\ \\text{m/s}$ forward ($18.5$ rearward).",
      },
    ],
    keyTakeaways: [
      "$x_{PA} = x_{PB} + x_{BA}$; differentiate twice for velocities and accelerations.",
      "Subscripts cancel like fractions; reversing the order negates the quantity.",
      "Constant-velocity frames always agree on acceleration.",
    ],
    quiz: [
      {
        q: "In the notation $v_{PA}$, the second subscript names",
        options: ["the moving object", "the frame from which the velocity is measured", "the destination", "a unit conversion"],
        answer: 1,
        explanation: "First subscript = object, second = observer's frame: $v_{PA}$ is the velocity of P as A measures it.",
      },
      {
        q: "Two cars approach each other, one at +12 m/s and one at −15 m/s in the ground frame. The velocity of the first car relative to the second is",
        options: ["−3 m/s", "+3 m/s", "−27 m/s", "+27 m/s"],
        answer: 3,
        explanation: "$v_{12} = v_{1G} - v_{2G} = 12 - (-15) = +27$ m/s: head-on approach at 27 m/s in the first car's frame.",
      },
      {
        q: "You walk at 1.5 m/s toward the rear of a train moving forward at 20 m/s. Relative to the ground you move",
        options: ["18.5 m/s forward", "21.5 m/s forward", "18.5 m/s backward", "at 20 m/s regardless"],
        answer: 0,
        explanation: "$v_{PG} = -1.5 + 20 = +18.5$ m/s — walking backward on a forward train still means moving forward over the ground.",
      },
      {
        q: "If frame B moves at constant velocity relative to frame A, observers in A and B disagree about an object's",
        options: ["both velocity and acceleration", "acceleration but not velocity", "neither", "velocity but not acceleration"],
        answer: 3,
        explanation: "Velocities transform by adding $v_{BA}$; the time derivative of a constant is zero, so accelerations agree.",
      },
    ],
  },
  // ------------------------------------------------------------- 4.7
  {
    sectionId: 'hall-ch4-s7',
    readingTime: 6,
    intro: "What is physics? A plane in a crosswind, a boat crossing a river, raindrops seen through a bus window — in two dimensions the frame connection is no longer signed addition but vector addition, and geometry returns with a vengeance. One diagram, two known arrows, one unknown: this section teaches the recipe that navigators and pilots run before every leg.",
    objectives: [
      "Apply the vector relation $\\vec v_{PA} = \\vec v_{PB} + \\vec v_{BA}$ with head-to-tail geometry",
      "Solve for drift, and for the heading that cancels it (the wind-correction angle)",
      "Explain why accelerations agree across constant-velocity frames",
    ],
    concepts: [
      {
        term: 'The vector link',
        kind: 'law',
        statement: "**$\\vec v_{PA} = \\vec v_{PB} + \\vec v_{BA}$ — the same two-subscript addition as in one dimension, now with arrows.** Attach the vectors head to tail and read off the resultant.",
        detail: "Given any two of the three velocities, the third follows from vector addition or subtraction; sketching the triangle first prevents most sign catastrophes.",
      },
      {
        term: 'Drift',
        kind: 'insight',
        statement: "**A vehicle pointed one way in a cross flow travels another way over the ground: the current's velocity simply adds to the vehicle's heading velocity.** The ground track is the diagonal of the parallelogram.",
        detail: "Drift is why light aircraft hang crooked in a crosswind — nose crabbed into the wind, ground track straight.",
      },
      {
        term: 'Crosswind correction',
        kind: 'method',
        statement: "**To travel straight across a flow, aim upstream by the angle whose sine is $v_{\\text{flow}}/v_{\\text{craft}}$; the ground speed drops to $\\sqrt{v_{\\text{craft}}^2 - v_{\\text{flow}}^2}$.**",
        detail: "Pilots call it the wind-correction angle; the arithmetic is one right triangle.",
      },
      {
        term: 'Frames and acceleration',
        kind: 'insight',
        statement: "**When B moves at constant velocity relative to A, $\\vec a_{PA} = \\vec a_{PB}$: all constant-velocity observers agree on accelerations.** This invariance is the seed of relativity — Galileo's, and later Einstein\'s.",
        detail: "It is also why Chapter 5's laws can be stated once, without appending a list of preferred observers.",
      },
      {
        term: "Relative Motion in Two Dimensions: solution protocol",
        kind: "method",
        statement: "**Solve Relative Motion in Two Dimensions problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is decoupling 2D motion into independent 1D motions sharing the clock $t$; the working equation is $\\vec r = x\\hat{i}+y\\hat{j}+z\\hat{k}$, $\\vec v = d\\vec r/dt$, $R = v_0^2\\sin 2\\theta_0/g$, $a = v^2/r$, $\\vec v_{PA} = \\vec v_{PB}+\\vec v_{BA}$; every substitution must carry its units so the final unit ($\\text{m/s}$, $\\text{m/s}^2$ and vector direction) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against ranges $10$--$100\\ \\text{m}$ for $v_0\\sim 20\\ \\text{m/s}$; centrifuge $a_c$ to $10^5g$; no air, uniform $g$, $v\\ll c$; frames must be inertial for $\\vec a$ agreement.",
      },
    ],
    examples: [
      {
        title: 'A light aircraft in a crosswind',
        problem: "A light aircraft has airspeed (speed relative to the air) 215 km/h, pointed due north. The wind blows at 65 km/h toward the east. (a) Find the plane's velocity relative to the ground. (b) To actually travel due north, at what angle must the pilot head, and what is the ground speed then?",
        steps: [
          { label: '(a) Add the vectors', text: "$\\vec v_{PG} = \\vec v_{PA} + \\vec v_{AG}$: 215 north plus 65 east gives $|\\vec v_{PG}| = \\sqrt{215^2 + 65^2} = \\sqrt{50\\,450} = 225$ km/h." },
          { label: 'Direction of drift', text: "The drift angle east of north is $\\tan^{-1}(65/215) = 16.8°$ — the nose points north but the track runs 17° east of it." },
          { label: '(b) Cancel the wind', text: "Head west of north by $\\alpha$ with $215\\sin\\alpha = 65$, so $\\alpha = \\sin^{-1}(65/215) = 17.6°$." },
          { label: 'Ground speed', text: "$v_{PG} = 215\\cos 17.6° = 205$ km/h — straight north, but slower than the airspeed: the wind's toll." },
        ],
        result: "(a) 225 km/h at 16.8° east of north; (b) head 17.6° west of north at 205 km/h.",
      },
      {
        title: "Relative Motion in Two Dimensions: frame addition check",
        problem: "A train moves at $20\\ \\text{m/s}$ and a passenger walks at $1.5\\ \\text{m/s}$ relative to the train toward the front. What is the passenger speed over the ground?",
        steps: [
          { label: "Frames", text: "$v_{PA} = v_{PB}+v_{BA}$ with $v_{BA} = +20$, $v_{PB} = +1.5$." },
          { label: "Add", text: "$v_{PA} = 1.5+20 = 21.5\\ \\text{m/s}$ forward." },
          { label: "Rear check", text: "Walking rearward gives $-1.5+20 = 18.5\\ \\text{m/s}$ — still forward." },
        ],
        result: "$21.5\\ \\text{m/s}$ forward ($18.5$ rearward).",
      },
    ],
    keyTakeaways: [
      "$\\vec v_{PA} = \\vec v_{PB} + \\vec v_{BA}$ as vector addition — draw the triangle before computing.",
      "Crosswinds and currents cause drift; cancel them by aiming upstream, at the price of ground speed.",
      "All constant-velocity observers measure the same acceleration — Galileo's invariance.",
    ],
    quiz: [
      {
        q: "A boat that can travel 4.0 km/h in still water aims straight north across a river flowing at 3.0 km/h east. Its ground velocity is",
        options: [
          "5.0 km/h at 37° east of north",
          "7.0 km/h toward the northeast",
          "4.0 km/h due north",
          "2.6 km/h due north",
        ],
        answer: 0,
        explanation: "The vectors 4.0 north and 3.0 east add to $\\sqrt{16 + 9} = 5.0$ km/h at $\\tan^{-1}(3/4) = 37°$ east of north.",
      },
      {
        q: "To reach the point directly opposite on that river, the boater must aim",
        options: [
          "due north anyway and accept the drift",
          "east of north by 36.9°",
          "due west, then due north",
          "west of north by 48.6°",
        ],
        answer: 3,
        explanation: "The upstream aim satisfies $\\sin\\alpha = 3.0/4.0$, giving $\\alpha = 48.6°$ west of north, with the crossing speed dropping to $\\sqrt{16 - 9} = 2.6$ km/h.",
      },
      {
        q: "A bus moves east at 10 m/s while rain falls vertically at 8.0 m/s relative to the ground. To a passenger, the rain's velocity is",
        options: [
          "8.0 m/s, straight down as always",
          "12.8 m/s, tilted toward the front of the bus",
          "12.8 m/s, tilted toward the rear of the bus",
          "10 m/s horizontal",
        ],
        answer: 2,
        explanation: "Chain the frames: $\\vec v_{RB} = \\vec v_{RG} + \\vec v_{GB}$ with $\\vec v_{GB} = -\\vec v_{BG}$ pointing west at 10 m/s. The rain thus gains a 10 m/s westward component in the bus frame: 12.8 m/s at $\\tan^{-1}(10/8) = 51°$ from vertical, slanting toward the rear of the bus.",
      },
      {
        q: "Observers in two frames moving at constant relative velocity will agree on the value of",
        options: ["velocity", "position", "all three: position, velocity and acceleration", "acceleration"],
        answer: 3,
        explanation: "Position and velocity pick up frame-dependent offsets; the acceleration is untouched because the relative velocity is constant.",
      },
    ],
  },
]

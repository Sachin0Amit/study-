import type { SectionContent } from '../library'

// ============================================================================
// Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended
// Chapter 2: Motion Along a Straight Line (sections 2.1–2.6, ids hall-ch2-s1..s6)
// ============================================================================

export const hallCh2Content: SectionContent[] = [
  // ------------------------------------------------------------- 2.1
  {
    sectionId: 'hall-ch2-s1',
    readingTime: 6,
    intro: "What is physics? One ancient goal is to predict where a moving thing will be — a falling apple, a launched arrow, a planet. Kinematics is the vocabulary of that description, and its simplest sentence describes a particle moving along a straight line. This section builds the first three terms of that sentence — position, displacement, and average velocity — and shows why the average velocity can be zero for a trip in which plenty happened.",
    objectives: [
      "Set up a one-dimensional reference frame (origin plus signed axis) and specify a particle's position on it",
      "Distinguish displacement from distance traveled, and average velocity from average speed",
      "Compute average velocity and average speed for multi-segment trips and interpret their signs",
    ],
    concepts: [
      {
        term: 'The particle model',
        kind: 'definition',
        statement: "**A particle is an object whose size and internal structure can be ignored for the question at hand.** A car crossing a city is a particle; the same car parking is not. Kinematics begins by declaring the mover a particle, located by a single point.",
        detail: "Whether something is a particle is a modeling decision, not a fact about the object: Earth is a particle in celestial mechanics and a deformable body in seismology.",
      },
      {
        term: 'Position and reference frame',
        kind: 'definition',
        statement: "**Position is the signed coordinate of the particle on a chosen axis.** Choosing an origin and a positive direction completes a reference frame; a position like $x = -3$ m says three meters on the negative side of the origin — meaningless without the frame.",
        detail: "Motion means position changes with time: we write $x(t)$ and read the function as the particle's history.",
      },
      {
        term: 'Displacement',
        kind: 'definition',
        statement: "**Displacement is the change in position, $\\Delta x = x_2 - x_1$.** It carries a magnitude and a sign but has no memory of the route taken between the two positions.",
        detail: "Displacement is the prototype of a vector flattened to one dimension: after a walk around the block, your displacement from your desk is zero, however far you walked.",
      },
      {
        term: 'Average velocity',
        kind: 'definition',
        statement: "**The average velocity over a time interval is displacement over elapsed time, $v_{\\text{avg}} = \\Delta x/\\Delta t$.** Its sign says which way the particle headed on average; its magnitude says how fast, on average.",
        detail: "Because the numerator is displacement, a round trip has $v_{\\text{avg}} = 0$ even at full sprint.",
      },
      {
        term: 'Average speed',
        kind: 'definition',
        statement: "**Average speed is total distance traveled divided by elapsed time — never negative.** Unlike average velocity it ignores direction, so the two can differ greatly.",
        detail: "One lap of a 400 m track in 50 s: average speed 8.0 m/s, average velocity zero — you finished where you started.",
      },
    ],
    examples: [
      {
        title: 'The jogger who ends up behind the start',
        problem: "Starting at the origin, a jogger runs east to a bench at $x = +120$ m in 16 s, then turns and runs to $x = -30$ m in the next 24 s. For the full 40 s find (a) the displacement, (b) the average velocity, (c) the average speed.",
        steps: [
          { label: 'Displacement', text: "$\\Delta x = x_2 - x_1 = (-30) - 0 = -30$ m: thirty meters in the negative direction, even though the jogger covered 270 m of ground." },
          { label: 'Average velocity', text: "$v_{\\text{avg}} = \\Delta x/\\Delta t = (-30\\ \\text{m})/(40\\ \\text{s}) = -0.75$ m/s — the sign flags net motion toward negative $x$." },
          { label: 'Average speed', text: "Distance $= 120 + 150 = 270$ m, so the average speed is $270/40 = 6.8$ m/s (two significant figures)." },
        ],
        result: "$\\Delta x = -30$ m; $v_{\\text{avg}} = -0.75$ m/s; average speed 6.8 m/s — nine times the magnitude of the average velocity.",
      },
      {
        title: "Position, Displacement, and Average Velocity: constant-$a$ numbers",
        problem: "A ball is tossed upward at $14\\ \\text{m/s}$. What are its velocity and displacement after $1.5\\ \\text{s}$? Take $g = 9.8\\ \\text{m/s}^2$ downward.",
        steps: [
          { label: "Velocity", text: "$v = v_0-gt = 14 - 9.8\\times 1.5 = -0.7\\ \\text{m/s}$." },
          { label: "Displacement", text: "$\\Delta x = v_0t-\\tfrac12gt^2 = 14\\times 1.5 - 4.9\\times 1.5^2 = 9.97\\ \\text{m}$." },
          { label: "Read", text: "Signs carry the physics: positive is up along the chosen $+y$." },
        ],
        result: "$v \\approx -0.7\\ \\text{m/s}$, $\\Delta x \\approx 9.97\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      "A frame — origin plus signed axis — turns where into a number; motion is the function $x(t)$.",
      "Displacement $\\Delta x = x_2 - x_1$ depends only on endpoints; distance traveled depends on the path.",
      "$v_{\\text{avg}} = \\Delta x/\\Delta t$ carries a sign; average speed = distance/$\\Delta t$ does not — one lap on a track makes one zero and the other large.",
    ],
    quiz: [
      {
        q: "A swimmer completes one 50 m pool length and returns to the start. For the round trip, the displacement and average velocity are",
        options: ["both nonzero", "100 m and nonzero", "zero displacement but nonzero average velocity", "both zero"],
        answer: 3,
        explanation: "$\\Delta x = x_{\\text{end}} - x_{\\text{start}} = 0$ over a nonzero $\\Delta t$, so both vanish — while the average speed stays positive.",
      },
      {
        q: "With east chosen positive, a car's average velocity is −12 m/s. This means",
        options: [
          "it slowed at 12 m/s each second",
          "it moved, on net, in the negative direction at 12 m/s",
          "its odometer ran backward",
          "it moved 12 m east during the first second",
        ],
        answer: 1,
        explanation: "Average velocity is displacement over time; a negative sign means the net displacement points toward negative $x$ (west), at 12 m/s.",
      },
      {
        q: "For the jogger above, over the entire 40 s the average speed is",
        options: ["0.75 m/s", "3.75 m/s", "6.8 m/s", "270 m/s"],
        answer: 2,
        explanation: "Distance 270 m over 40 s gives 6.75 ≈ 6.8 m/s; the 3.75 m/s figure is only the second leg's distance over the whole time.",
      },
      {
        q: "Displacement depends on",
        options: ["the path taken between the endpoints", "only the initial and final positions", "the trip's duration", "both the path and the endpoints"],
        answer: 1,
        explanation: "By definition $\\Delta x = x_2 - x_1$: only endpoints enter — that is what makes it different from distance traveled.",
      },
    ],
  },
  // ------------------------------------------------------------- 2.2
  {
    sectionId: 'hall-ch2-s2',
    readingTime: 6,
    intro: "What is physics? On average, the bullet crossed the field at 400 m/s is true and useless — the average hides the instant of impact. The quantity that matters at a given clock reading is the instantaneous velocity: the slope of the position–time curve at that instant. This section defines it with the very limit calculus was built to handle, and separates it from speed.",
    objectives: [
      "Define instantaneous velocity as the limit of average velocity, and compute it as the derivative $dx/dt$",
      "Interpret the slope of an $x$–$t$ curve, including at turning points where $v = 0$",
      "Distinguish speed from velocity on graphs and in computations",
    ],
    concepts: [
      {
        term: 'Instantaneous velocity',
        kind: 'definition',
        statement: "**$v = \\dfrac{dx}{dt}$: the limit of $\\Delta x/\\Delta t$ as $\\Delta t \\to 0$** — the slope of the position–time curve at the instant in question.",
        detail: "The shrinking-$\\Delta t$ construction is exactly the tangent-line limit of calculus; physics supplied the question, calculus the answer.",
      },
      {
        term: 'Slope as the universal graph-reading',
        kind: 'insight',
        statement: "**On a position–time graph, steep means fast, flat means at rest, and downhill means moving in the negative direction.** What you read off the curve is $v$, sign included.",
        detail: "A straight sloped segment means constant velocity; a curving segment means the velocity — and therefore the acceleration — is changing.",
      },
      {
        term: 'Speed',
        kind: 'definition',
        statement: "**Speed is the magnitude of velocity, $|v|$ — never negative.** A particle with $v = -30$ m/s and one with $v = +30$ m/s have the same speed and opposite velocities.",
        detail: "The speedometer of a car reads speed; the sign of $v$ is the direction of travel along the road's axis.",
      },
      {
        term: 'Turning points',
        kind: 'insight',
        statement: "**Wherever $x(t)$ has a local maximum or minimum, $v = 0$** — the particle momentarily stops while reversing. Zero velocity does not mean zero acceleration, as free fall will soon make vivid.",
        detail: "At the top of a vertical throw the ball has $v = 0$ for an instant, yet gravity keeps pulling: $a = -g$ throughout.",
      },
      {
        term: "Instantaneous Velocity and Speed: solution protocol",
        kind: "method",
        statement: "**Solve Instantaneous Velocity and Speed problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is $v_{\\text{avg}} = \\Delta x/\\Delta t$, $v = dx/dt$, $a = dv/dt$ with $g = 9.8\\ \\text{m/s}^2$ downward; the working equation is $x = x_0+v_0t+\\tfrac12at^2$, $v = v_0+at$, $v^2 = v_0^2+2a\\Delta x$; every substitution must carry its units so the final unit ($\\text{m}$, $\\text{m/s}$, $\\text{m/s}^2$ with signs from the chosen $+x$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against walk $1\\ \\text{m/s}$ to jet $300\\ \\text{m/s}$; free fall $4.9t^2$ meters; constant-$a$ equations fail when $a$ varies; air drag breaks the free-fall idealization.",
      },
    ],
    examples: [
      {
        title: 'From position to velocity to acceleration',
        problem: "The position of a particle moving along an $x$ axis is given by $x = 9.75 + 1.50t^3$, with $x$ in meters and $t$ in seconds. At $t = 2.0$ s, find (a) the position, (b) the velocity, (c) the acceleration.",
        steps: [
          { label: 'Position', text: "Substitute directly: $x = 9.75 + 1.50(2.0)^3 = 9.75 + 12.0 = 21.75$ m, reported as 21.8 m." },
          { label: 'Velocity', text: "Differentiate once: $v = dx/dt = 4.5t^2$, so $v = 4.5(2.0)^2 = 18$ m/s — positive, moving in $+x$." },
          { label: 'Acceleration', text: "Differentiate again: $a = dv/dt = 9.0t$, so $a = 9.0(2.0) = 18$ m/s² — here numerically equal to $v$ by coincidence, not by law." },
        ],
        result: "$x = 21.8$ m, $v = 18$ m/s, $a = 18$ m/s², all at the single instant $t = 2.0$ s.",
      },
      {
        title: "Instantaneous Velocity and Speed: constant-$a$ numbers",
        problem: "A ball is tossed upward at $16\\ \\text{m/s}$. What are its velocity and displacement after $1.8\\ \\text{s}$? Take $g = 9.8\\ \\text{m/s}^2$ downward.",
        steps: [
          { label: "Velocity", text: "$v = v_0-gt = 16 - 9.8\\times 1.8 = -1.64\\ \\text{m/s}$." },
          { label: "Displacement", text: "$\\Delta x = v_0t-\\tfrac12gt^2 = 16\\times 1.8 - 4.9\\times 1.8^2 = 12.9\\ \\text{m}$." },
          { label: "Read", text: "Signs carry the physics: positive is up along the chosen $+y$." },
        ],
        result: "$v \\approx -1.64\\ \\text{m/s}$, $\\Delta x \\approx 12.9\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      "Instantaneous velocity is the derivative $dx/dt$ — the slope of $x(t)$ at an instant; speed is its magnitude.",
      "Turning points have $v = 0$; that says nothing about the acceleration there.",
      "Given $x(t)$, two differentiations give the whole story: $v(t)$, then $a(t)$.",
    ],
    quiz: [
      {
        q: "At the very top of its flight, a thrown ball has",
        options: [
          "zero velocity and zero acceleration",
          "zero velocity and nonzero acceleration",
          "nonzero velocity and zero acceleration",
          "nonzero velocity and nonzero acceleration",
        ],
        answer: 1,
        explanation: "The vertical position is momentarily at a maximum, so $v = 0$ — but gravity never pauses: $a = -g$ at the top exactly as everywhere else.",
      },
      {
        q: "For $x = 9.75 + 1.50t^3$ (meters, seconds), the velocity at $t = 2.0$ s is",
        options: ["18 m/s", "21.75 m/s", "4.5 m/s", "12 m/s"],
        answer: 0,
        explanation: "$v = dx/dt = 4.5t^2 = 4.5(4) = 18$ m/s; the 21.75 m figure is the position, not the velocity.",
      },
      {
        q: "The slope of a position–time curve at an instant gives",
        options: ["the displacement", "the instantaneous velocity", "the average velocity over the whole trip", "the acceleration"],
        answer: 1,
        explanation: "Slope of $x$ versus $t$ is $dx/dt = v$; the average velocity over the whole trip is the slope of the single chord joining the endpoints.",
      },
      {
        q: "On an $x$–$t$ graph, a straight sloped segment means",
        options: ["constant velocity", "increasing velocity", "the particle is at rest", "the particle is reversing"],
        answer: 0,
        explanation: "A straight segment has constant slope, hence constant velocity — and, incidentally, zero acceleration.",
      },
    ],
  },
  // ------------------------------------------------------------- 2.3
  {
    sectionId: 'hall-ch2-s3',
    readingTime: 6,
    intro: "What is physics? Velocity alone cannot explain collisions: two cars at the same speed stop very differently — one on brakes, one against a wall. The quantity that measures how velocity changes is acceleration, and it, not velocity, is what Newton's laws will put forces in charge of. This section defines acceleration, gets its signs straight, and clears up the most common misconception in kinematics — that negative acceleration always means slowing down.",
    objectives: [
      "Define average and instantaneous acceleration and compute them from $v(t)$",
      "Determine from the signs of $v$ and $a$ whether a particle speeds up or slows down",
      "Read acceleration as the slope of a velocity–time graph",
    ],
    concepts: [
      {
        term: 'Acceleration',
        kind: 'definition',
        statement: "**Acceleration is the rate at which velocity changes: $a = dv/dt$ instantaneously, $a_{\\text{avg}} = \\Delta v/\\Delta t$ on average.** Units: m/s², read as meters per second, per second.",
        detail: "One m/s² means the velocity changes by one meter per second during each second of travel — a rate of change of a rate of change.",
      },
      {
        term: 'The sign logic',
        kind: 'insight',
        statement: "**The particle speeds up when $v$ and $a$ have the same sign, and slows down when they have opposite signs.** The sign of $a$ alone tells you nothing — what matters is whether $a$ acts along or against the motion.",
        detail: "With $v = -8$ m/s and $a = +2$ m/s², the particle moves in the negative direction but its speed is falling — the negative velocity is being pushed toward zero.",
      },
      {
        term: 'Deceleration',
        kind: 'notation',
        statement: "**Deceleration means acceleration opposite to the velocity — the particle is slowing.** It describes the relation between $a$ and $v$, not a sign convention: deceleration can be positive or negative acceleration.",
        detail: "A rising ball has $v > 0$, $a < 0$ — decelerating; the same ball falling has $v < 0$, $a < 0$ — accelerating. The acceleration never changed; the velocity's sign did.",
      },
      {
        term: 'Acceleration on the $v$–$t$ graph',
        kind: 'method',
        statement: "**Acceleration is the slope of the velocity–time curve** — just as velocity is the slope of the position–time curve.",
        detail: "Curvature of $v(t)$ is the fingerprint of changing acceleration; a straight $v(t)$ line means constant $a$.",
      },
      {
        term: 'One-dimensional limits',
        kind: 'insight',
        statement: "**In one dimension, any nonzero acceleration changes the speed.** To accelerate without changing speed requires turning the velocity — a purely two-dimensional effect reserved for Section 4.5.",
        detail: "That is why dragsters and falling rocks both simply go faster and faster: with nowhere to turn, changing $v$ means changing its magnitude.",
      },
    ],
    examples: [
      {
        title: 'Two ways to change velocity by 24 m/s',
        problem: "On a straight test track, a motorcycle accelerates from rest to 24 m/s in 6.0 s while a car brakes from 24 m/s to rest in the same 6.0 s. Find both accelerations.",
        steps: [
          { label: 'Motorcycle', text: "$a = \\Delta v/\\Delta t = (24 - 0)/(6.0) = +4.0$ m/s² — it gains 4 m/s of velocity each second." },
          { label: 'Car', text: "$a = (0 - 24)/(6.0) = -4.0$ m/s² — it loses 4 m/s of velocity each second." },
          { label: 'Interpret', text: "Equal magnitudes, opposite signs: both are accelerations; neither number alone says speeding up or slowing down without the velocity's sign." },
        ],
        result: "$+4.0$ m/s² for the motorcycle, $-4.0$ m/s² for the car — same size, opposite sign.",
      },
      {
        title: "Acceleration: constant-$a$ numbers",
        problem: "A ball is tossed upward at $18\\ \\text{m/s}$. What are its velocity and displacement after $2.1\\ \\text{s}$? Take $g = 9.8\\ \\text{m/s}^2$ downward.",
        steps: [
          { label: "Velocity", text: "$v = v_0-gt = 18 - 9.8\\times 2.1 = -2.58\\ \\text{m/s}$." },
          { label: "Displacement", text: "$\\Delta x = v_0t-\\tfrac12gt^2 = 18\\times 2.1 - 4.9\\times 2.1^2 = 16.2\\ \\text{m}$." },
          { label: "Read", text: "Signs carry the physics: positive is up along the chosen $+y$." },
        ],
        result: "$v \\approx -2.58\\ \\text{m/s}$, $\\Delta x \\approx 16.2\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      "$a = dv/dt$, in m/s²: the slope of $v(t)$, just as $v$ is the slope of $x(t)$.",
      "Speeding up or slowing down is decided by the signs of $v$ and $a$ together, not by the sign of $a$ alone.",
      "Deceleration = acceleration opposite to $v$; the same $a = -g$ decelerates a rising ball and accelerates a falling one.",
    ],
    quiz: [
      {
        q: "A particle has $v < 0$ and $a > 0$. Its speed is",
        options: ["decreasing", "increasing", "constant", "first increasing, then decreasing"],
        answer: 0,
        explanation: "Velocity and acceleration have opposite signs: the negative velocity is being pushed toward zero, so its magnitude — the speed — shrinks.",
      },
      {
        q: "A carrier catapult accelerates a jet from rest to 66 m/s in 3.0 s. The average acceleration is",
        options: ["198 m/s²", "5.5 m/s²", "22 m/s²", "0.045 m/s²"],
        answer: 2,
        explanation: "$a = \\Delta v/\\Delta t = 66/3.0 = 22$ m/s² — a little over two Earth gravities.",
      },
      {
        q: "On a $v$–$t$ graph, acceleration is read as",
        options: ["the area under the curve", "the intercept on the velocity axis", "the slope", "the curvature of the $x$–$t$ curve"],
        answer: 2,
        explanation: "Slope of $v$ versus $t$ is $dv/dt = a$; the area under $v$–$t$ is displacement — the subject of Section 2.6.",
      },
      {
        q: "A ball bounces off the floor and is now moving upward with $v > 0$. With air drag neglected, its acceleration while rising is",
        options: [
          "$-9.8$ m/s², the same as during the descent",
          "$+9.8$ m/s², reversed because the motion reversed",
          "0, because the ball already left the floor",
          "positive while rising and negative while falling",
        ],
        answer: 0,
        explanation: "Free-fall acceleration does not flip with the direction of motion: $a = -g$ (up positive) decelerates the rise and accelerates the fall.",
      },
    ],
  },
  // ------------------------------------------------------------- 2.4
  {
    sectionId: 'hall-ch2-s4',
    readingTime: 8,
    intro: "What is physics? Many real events — dragster runs, braking cars, jet launches — have an acceleration that is constant, or nearly so. Then the full apparatus of calculus collapses into four compact equations that connect position, velocity, acceleration and time algebraically. This section derives the set, tells you how to pick the right member, and runs a complete collision prediction with it.",
    objectives: [
      "Derive the four constant-acceleration equations from $a = dv/dt$ with $a$ constant",
      "Choose the equation that omits the variable you neither know nor want",
      "Apply the set to multi-stage problems and to a collision prediction",
    ],
    concepts: [
      {
        term: 'When the equations apply',
        kind: 'definition',
        statement: "**The four constant-acceleration equations hold only when $a$ is constant over the interval — and only then.** Variable acceleration sends you back to $v = dx/dt$ and $a = dv/dt$ with real integration.",
        detail: "Real braking is roughly constant on dry pavement and nothing like constant during a crash; the art is recognizing when constancy is a good idealization.",
      },
      {
        term: 'The equation set',
        kind: 'law',
        statement: "**With $x_0$ and $v_0$ the values at $t = 0$ and $a$ constant:** $$v = v_0 + at, \\qquad x - x_0 = v_0 t + \\tfrac{1}{2}at^2,$$ $$v^2 = v_0^2 + 2a(x - x_0), \\qquad x - x_0 = \\tfrac{1}{2}(v_0 + v)t.$$",
        detail: "Each equation is missing exactly one of the four kinematic variables $\\Delta x$, $v$, $a$, $t$ — the first omits $\\Delta x$, the second omits $v$, the third omits $t$, the fourth omits $a$.",
      },
      {
        term: 'Where they come from',
        kind: 'method',
        statement: "**Integration, twice.** $a = dv/dt$ with $a$ constant gives $dv = a\\,dt$, hence $v = v_0 + at$. Substituting that into $v = dx/dt$ and integrating again gives $x - x_0 = v_0 t + \\tfrac{1}{2}at^2$. Eliminating $t$ between the two produces $v^2 = v_0^2 + 2a(x - x_0)$; averaging the endpoint velocities produces the symmetric fourth.",
        detail: "The second integration is where the $\\tfrac{1}{2}$ is born: $\\int_0^t at'\\,dt' = \\tfrac{1}{2}at^2$.",
      },
      {
        term: 'The graph story',
        kind: 'insight',
        statement: "**Under constant acceleration, $v(t)$ is a straight line and $x(t)$ is a parabola.** Areas under the first and slopes of the second are then elementary geometry — exactly what graphical integration (Section 2.6) exploits.",
        detail: "The set is nothing more than the slope–area dictionary of calculus, specialized to a line and a parabola.",
      },
      {
        term: "Constant Acceleration: solution protocol",
        kind: "method",
        statement: "**Solve Constant Acceleration problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is $v_{\\text{avg}} = \\Delta x/\\Delta t$, $v = dx/dt$, $a = dv/dt$ with $g = 9.8\\ \\text{m/s}^2$ downward; the working equation is $x = x_0+v_0t+\\tfrac12at^2$, $v = v_0+at$, $v^2 = v_0^2+2a\\Delta x$; every substitution must carry its units so the final unit ($\\text{m}$, $\\text{m/s}$, $\\text{m/s}^2$ with signs from the chosen $+x$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against walk $1\\ \\text{m/s}$ to jet $300\\ \\text{m/s}$; free fall $4.9t^2$ meters; constant-$a$ equations fail when $a$ varies; air drag breaks the free-fall idealization.",
      },
    ],
    figures: [
      {
        caption: "The constant-acceleration chain for $a = 2.0\\ \\text{m/s}^2$ from rest: the area under the $a$–$t$ curve gives $\\Delta v$ (panel a), the slope of $v(t)$ is $a$ while the area under it gives $\\Delta x$ (panel b), and the slope of the $x(t)$ parabola is $v$, steepening with time (panel c). Dashed verticals mark the same instants $t = 2$ s and $t = 5$ s in all three panels.",
        svg: `<svg viewBox="0 0 720 660" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Acceleration, velocity and position graphs for constant acceleration"><line x1="280" y1="40" x2="280" y2="630" stroke="currentColor" stroke-width="1" stroke-dasharray="4 6" opacity="0.25"/><line x1="550" y1="40" x2="550" y2="630" stroke="currentColor" stroke-width="1" stroke-dasharray="4 6" opacity="0.25"/><text x="30" y="55" font-size="13" fill="currentColor" opacity="0.8">(a) a vs t</text><line x1="100" y1="180" x2="652" y2="180" stroke="currentColor" stroke-width="1.5"/><polygon points="652,180 642,176 642,184" fill="currentColor"/><line x1="100" y1="180" x2="100" y2="32" stroke="currentColor" stroke-width="1.5"/><polygon points="100,32 96,42 104,42" fill="currentColor"/><text x="88" y="44" font-size="13" font-style="italic" text-anchor="end" fill="currentColor">a</text><text x="650" y="200" font-size="12" text-anchor="end" fill="currentColor">t (s)</text><rect x="280" y="110" width="270" height="70" fill="currentColor" opacity="0.12"/><line x1="100" y1="110" x2="640" y2="110" stroke="currentColor" stroke-width="3"/><text x="618" y="98" font-size="12" text-anchor="end" fill="currentColor">a = 2.0 m/s²</text><text x="415" y="168" font-size="11" text-anchor="middle" fill="currentColor">area = Δv = 6.0 m/s</text><text x="280" y="198" font-size="11" text-anchor="middle" fill="currentColor">2</text><text x="550" y="198" font-size="11" text-anchor="middle" fill="currentColor">5</text><text x="30" y="290" font-size="13" fill="currentColor" opacity="0.8">(b) v vs t</text><line x1="100" y1="420" x2="652" y2="420" stroke="currentColor" stroke-width="1.5"/><polygon points="652,420 642,416 642,424" fill="currentColor"/><line x1="100" y1="420" x2="100" y2="272" stroke="currentColor" stroke-width="1.5"/><polygon points="100,272 96,282 104,282" fill="currentColor"/><text x="88" y="284" font-size="13" font-style="italic" text-anchor="end" fill="currentColor">v</text><text x="650" y="440" font-size="12" text-anchor="end" fill="currentColor">t (s)</text><polygon points="280,420 280,372 550,300 550,420" fill="currentColor" opacity="0.12"/><line x1="100" y1="420" x2="640" y2="276" stroke="currentColor" stroke-width="3"/><line x1="190" y1="396" x2="370" y2="348" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="190" y1="396" x2="370" y2="396" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/><line x1="370" y1="396" x2="370" y2="348" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/><text x="245" y="390" font-size="11" fill="currentColor">slope = a</text><text x="415" y="410" font-size="11" text-anchor="middle" fill="currentColor">area = Δx = 21 m</text><text x="280" y="438" font-size="11" text-anchor="middle" fill="currentColor">2</text><text x="550" y="438" font-size="11" text-anchor="middle" fill="currentColor">5</text><text x="30" y="510" font-size="13" fill="currentColor" opacity="0.8">(c) x vs t</text><line x1="100" y1="630" x2="652" y2="630" stroke="currentColor" stroke-width="1.5"/><polygon points="652,630 642,626 642,634" fill="currentColor"/><line x1="100" y1="630" x2="100" y2="482" stroke="currentColor" stroke-width="1.5"/><polygon points="100,482 96,492 104,492" fill="currentColor"/><text x="88" y="494" font-size="13" font-style="italic" text-anchor="end" fill="currentColor">x</text><text x="650" y="650" font-size="12" text-anchor="end" fill="currentColor">t (s)</text><polyline points="100,630 145,629 190,626 235,621 280,613 325,604 370,592 415,579 460,563 505,545 550,525 595,503 640,479" fill="none" stroke="currentColor" stroke-width="3"/><line x1="255" y1="619" x2="315" y2="608" stroke="currentColor" stroke-width="1.5" opacity="0.6"/><text x="330" y="600" font-size="11" fill="currentColor">slope = v (steeper later)</text><text x="280" y="648" font-size="11" text-anchor="middle" fill="currentColor">2</text><text x="550" y="648" font-size="11" text-anchor="middle" fill="currentColor">5</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Speedy Sue and the tunnel van",
        problem: "Speedy Sue, driving at 30.0 m/s, enters a one-lane tunnel. She then observes a slow-moving van 155 m ahead traveling at 5.00 m/s. Sue applies her brakes but can decelerate at only 2.00 m/s² because the road is wet. Will there be a collision? If so, when and where?",
        steps: [
          { label: 'Reasoning', text: "Both vehicles move with constant acceleration — Sue at $-2.00$ m/s², the van at zero. The quick test: watch the gap from the van's frame, where it closes at an initial relative speed of $30.0 - 5.00 = 25.0$ m/s, decelerating at 2.00 m/s²." },
          { label: 'Test the stopping distance', text: "The relative speed reaches zero after a relative displacement $\\Delta x = v_{\\text{rel}}^2/(2a) = (25.0)^2/(2 \\times 2.00) = 156.25$ m — farther than the 155 m gap, so the gap closes to zero before the relative speed does: collision." },
          { label: 'Find when', text: "In the ground frame, Sue is at $x_S = 30.0t - t^2$ and the van at $x_V = 155 + 5.00t$ (meters, seconds). Contact when $30.0t - t^2 = 155 + 5.00t$, i.e. $t^2 - 25.0t + 155 = 0$." },
          { label: 'Solve', text: "$t = [25.0 \\pm \\sqrt{625 - 620}]/2 = (25.0 \\pm 2.24)/2$ s; first contact at $t = 11.4$ s, at $x = 211.9$ m into the tunnel." },
          { label: 'Check', text: "At that instant Sue's speed is $30.0 - 2.00(11.4) = 7.2$ m/s against the van's 5.00 m/s — she is still closing at about 2.2 m/s." },
        ],
        result: "Yes, collision: the relative stopping distance 156.25 m just exceeds the 155 m gap; first contact at $t \\approx 11.4$ s, 212 m from Sue's braking point.",
      },
      {
        title: "Constant Acceleration: constant-$a$ numbers",
        problem: "A ball is tossed upward at $20\\ \\text{m/s}$. What are its velocity and displacement after $1.2\\ \\text{s}$? Take $g = 9.8\\ \\text{m/s}^2$ downward.",
        steps: [
          { label: "Velocity", text: "$v = v_0-gt = 20 - 9.8\\times 1.2 = 8.24\\ \\text{m/s}$." },
          { label: "Displacement", text: "$\\Delta x = v_0t-\\tfrac12gt^2 = 20\\times 1.2 - 4.9\\times 1.2^2 = 16.9\\ \\text{m}$." },
          { label: "Read", text: "Signs carry the physics: positive is up along the chosen $+y$." },
        ],
        result: "$v \\approx 8.24\\ \\text{m/s}$, $\\Delta x \\approx 16.9\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      "Constant $a$ means $v(t)$ linear, $x(t)$ parabolic, and four algebraic equations linking $\\{x, v, a, t\\}$.",
      "Pick the equation whose missing variable is the one you neither know nor want.",
      "Collision questions reduce to a stopping-distance test in a relative frame: does the gap close before the closing speed does?",
    ],
    quiz: [
      {
        q: "Which equation should you reach for when the time is neither known nor wanted?",
        options: ["$v = v_0 + at$", "$x - x_0 = v_0 t + \\frac{1}{2}at^2$", "$v^2 = v_0^2 + 2a(x - x_0)$", "$x - x_0 = \\frac{1}{2}(v_0 + v)t$"],
        answer: 2,
        explanation: "The third equation is the $t$-free member of the set — it trades time for the position–velocity relation.",
      },
      {
        q: "A cart starts from rest and rolls 4.0 m in 2.0 s with constant acceleration. The acceleration is",
        options: ["1.0 m/s²", "2.0 m/s²", "4.0 m/s²", "0.5 m/s²"],
        answer: 1,
        explanation: "From $x - x_0 = \\frac{1}{2}at^2$ with $v_0 = 0$: $a = 2(4.0)/(2.0)^2 = 2.0$ m/s².",
      },
      {
        q: "Where does the $\\frac{1}{2}$ in $x - x_0 = v_0 t + \\frac{1}{2}at^2$ come from?",
        options: [
          "averaging initial and final speeds by convention",
          "a historical rounding kept in every edition since Galileo",
          "integrating $at$ once: $\\int_0^t at'\\,dt' = \\frac{1}{2}at^2$",
          "the definition of the meter",
        ],
        answer: 2,
        explanation: "Feeding $v = v_0 + at$ into $dx = v\\,dt$ and integrating the $at'$ term produces the factor one-half.",
      },
      {
        q: "For the whole set of four equations to be valid, it is enough that",
        options: ["$t$ is measured in seconds", "$x_0 = 0$", "$a$ is constant during the interval", "$v_0 = 0$"],
        answer: 2,
        explanation: "Constancy of $a$ is the single hypothesis behind all four equations; the rest are choices of units and origin.",
      },
    ],
  },
  // ------------------------------------------------------------- 2.5
  {
    sectionId: 'hall-ch2-s5',
    readingTime: 6,
    intro: "What is physics? Drop anything — a coin, a key, a hammer — and it falls the same way: velocity lost steadily on the way up, regained steadily on the way down, always pulled at $g$. Galileo's discovery that, absent air, every object falls identically makes free fall the cleanest laboratory of constant acceleration. This section signs the equations — up positive, $a = -g$ — and works the classic vertical problems.",
    objectives: [
      "Set up free-fall problems with a consistent sign convention ($a = -g$ with up positive)",
      "Use the constant-acceleration set with $a = -9.8$ m/s² for rises, falls and round trips",
      "Exploit the symmetry of vertical motion — equal speeds at equal heights",
    ],
    concepts: [
      {
        term: 'Free fall',
        kind: 'definition',
        statement: "**Free fall is motion under the influence of gravity alone — no air resistance, no other forces.** Every freely falling body at Earth's surface accelerates downward at the same $g = 9.8\\ \\text{m/s}^2$, regardless of its mass or of whether it is rising or falling.",
        detail: "Aristotle held that heavy things fall faster; Galileo's inclined-plane experiments and logic said otherwise, and Apollo 15's David Scott settled it on the Moon by dropping a hammer and a falcon feather together.",
      },
      {
        term: 'The free-fall acceleration g',
        kind: 'law',
        statement: "**$g = 9.8\\ \\text{m/s}^2$, directed downward, at Earth's surface** (varying by under half a percent from equator to poles). With up chosen positive, the free-fall equations use $a = -g$.",
        detail: "The sign is bookkeeping, not physics: choose down as positive and the same motion runs with $a = +g$. What never changes is that $a$ points downward.",
      },
      {
        term: 'The signed equations',
        kind: 'method',
        statement: "**Take $y$ positive up and the origin at a convenient height; then** $$v = v_0 - gt, \\qquad y - y_0 = v_0 t - \\tfrac{1}{2}gt^2, \\qquad v^2 = v_0^2 - 2g(y - y_0).$$ The set is Section 2.4 with the substitution $a = -g$.",
        detail: "Fix the convention before the first equation, keep it until the last, and let the signs do the physics.",
      },
      {
        term: 'Symmetry',
        kind: 'insight',
        statement: "**The rise and the fall mirror each other: the ball returns to launch height with the same speed it left, and the time up equals the time down.** At the top, $v = 0$ but $a = -g$ still — nothing switches gravity off.",
        detail: "This symmetry is why a ball thrown up at 12 m/s is caught at 12 m/s, and why the vertical motion of a projectile (Chapter 4) is simply free fall wearing a horizontal costume.",
      },
      {
        term: "Free-Fall Acceleration: solution protocol",
        kind: "method",
        statement: "**Solve Free-Fall Acceleration problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is $v_{\\text{avg}} = \\Delta x/\\Delta t$, $v = dx/dt$, $a = dv/dt$ with $g = 9.8\\ \\text{m/s}^2$ downward; the working equation is $x = x_0+v_0t+\\tfrac12at^2$, $v = v_0+at$, $v^2 = v_0^2+2a\\Delta x$; every substitution must carry its units so the final unit ($\\text{m}$, $\\text{m/s}$, $\\text{m/s}^2$ with signs from the chosen $+x$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against walk $1\\ \\text{m/s}$ to jet $300\\ \\text{m/s}$; free fall $4.9t^2$ meters; constant-$a$ equations fail when $a$ varies; air drag breaks the free-fall idealization.",
      },
    ],
    examples: [
      {
        title: 'Straight up',
        problem: "From ground level a ball is thrown straight up at 12.0 m/s. Find its maximum height, the time to the top, and its speed when caught back at launch height. Ignore air resistance.",
        steps: [
          { label: 'Maximum height', text: "At the top $v = 0$, so $0 = v_0^2 - 2gH$ gives $H = v_0^2/2g = (12.0)^2/(2 \\times 9.8) = 7.3$ m." },
          { label: 'Time up', text: "$0 = v_0 - gt_{\\text{up}}$ gives $t_{\\text{up}} = 12.0/9.8 = 1.2$ s." },
          { label: 'Return', text: "By symmetry the full flight lasts $2t_{\\text{up}} = 2.45$ s; check with $v = v_0 - gt = 12.0 - 9.8(2.45) = -12.0$ m/s — the same speed, downward." },
        ],
        result: "$H = 7.3$ m, $t_{\\text{up}} = 1.2$ s, and the catch speed is 12.0 m/s downward.",
      },
      {
        title: "Free-Fall Acceleration: constant-$a$ numbers",
        problem: "A ball is tossed upward at $12\\ \\text{m/s}$. What are its velocity and displacement after $1.5\\ \\text{s}$? Take $g = 9.8\\ \\text{m/s}^2$ downward.",
        steps: [
          { label: "Velocity", text: "$v = v_0-gt = 12 - 9.8\\times 1.5 = -2.7\\ \\text{m/s}$." },
          { label: "Displacement", text: "$\\Delta x = v_0t-\\tfrac12gt^2 = 12\\times 1.5 - 4.9\\times 1.5^2 = 6.97\\ \\text{m}$." },
          { label: "Read", text: "Signs carry the physics: positive is up along the chosen $+y$." },
        ],
        result: "$v \\approx -2.7\\ \\text{m/s}$, $\\Delta x \\approx 6.97\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      "Free fall = gravity alone; every body accelerates at $g = 9.8$ m/s² downward, mass immaterial.",
      "Fix a sign convention (up positive means $a = -g$) and reuse the constant-acceleration set unchanged.",
      "Symmetry: equal speeds at equal heights, time up equals time down, and $v = 0$ at the top with $a = -g$ throughout.",
    ],
    quiz: [
      {
        q: "A ball is thrown upward at 12 m/s. At the very top of its path its acceleration is",
        options: ["9.8 m/s² downward", "0", "12 m/s² downward", "9.8 m/s² upward"],
        answer: 0,
        explanation: "The velocity is momentarily zero, but gravity keeps acting: $a = -g$ at the top exactly as everywhere else in the flight.",
      },
      {
        q: "Two balls are dropped from the same height through vacuum, one of mass 1 kg and one of mass 5 kg. They land",
        options: ["at the same instant, regardless of mass", "with the heavier one first", "with the lighter one first", "together only if their shapes match"],
        answer: 0,
        explanation: "Free-fall acceleration is independent of mass — Galileo's result, confirmed on the Moon with a hammer and a feather.",
      },
      {
        q: "A stone is thrown downward at 14 m/s from a 60 m tower. Its speed at the ground is",
        options: ["26 m/s", "34 m/s", "46 m/s", "37 m/s"],
        answer: 3,
        explanation: "$v^2 = v_0^2 + 2gh = 196 + 2(9.8)(60) = 1372$, so $v = 37$ m/s; merely dropping it would give only $\\sqrt{1176} = 34$ m/s.",
      },
      {
        q: "For the same launch speed and no air resistance, the time to rise and the time to fall back to launch height are",
        options: ["such that the rise takes longer", "such that the fall takes longer", "equal only for small launch speeds", "equal"],
        answer: 3,
        explanation: "The flight is symmetric about the apex: the descent retraces the ascent in time as in speed.",
      },
    ],
  },
  // ------------------------------------------------------------- 2.6
  {
    sectionId: 'hall-ch2-s6',
    readingTime: 5,
    intro: "What is physics? Real accelerations — a sprinter's first stride, a rocket's burn, a collision's crush — are not constant, and no tidy equation lists their positions. But a graph of velocity versus time always exists, and the area under it is always the displacement. This section reads motion off curves: areas, slopes and signs, no calculus required.",
    objectives: [
      "Extract displacement as the signed area under a velocity–time curve",
      "Extract velocity change as the area under an acceleration–time curve",
      "Handle regions where the curve dips below the axis — negative area, negative contribution",
    ],
    concepts: [
      {
        term: 'Area under $v$–$t$ = displacement',
        kind: 'law',
        statement: "**When $v$ (in m/s) is plotted against $t$ (in s), the area between the curve and the $t$ axis is the displacement $\\Delta x$** — because $\\Delta x = \\int v\\,dt$ and the integral is an area.",
        detail: "This holds curve by curve, however wild the acceleration: count squares, or add triangle and rectangle areas segment by segment.",
      },
      {
        term: 'Area under $a$–$t$ = velocity change',
        kind: 'law',
        statement: "**The area between the $a$–$t$ curve and the axis is $\\Delta v$.** A tall, short spike — an airbag's inflation — is a large area in a small time: a large velocity change delivered almost instantly.",
        detail: "This is why airbags work: same $\\Delta v$ as the dashboard, but spread over a hundredfold longer $\\Delta t$ means a hundredfold smaller average acceleration.",
      },
      {
        term: 'Signed areas',
        kind: 'insight',
        statement: "**Regions below the axis count negative.** A velocity curve dipping under the $t$ axis is backward motion: its area subtracts from the displacement, though it still adds to the distance traveled.",
        detail: "The odometer integrates $|v|$; the displacement integrates $v$. Only for one-way motion do the two agree.",
      },
      {
        term: 'Graphs as computation',
        kind: 'method',
        statement: "**Break the curve into rectangles, triangles and trapezoids, then add the signed areas.** For straight-segment graphs the result is exact.",
        detail: "This is how engineers read data-logger output to this day — and how you will solve problems no constant-acceleration equation can touch.",
      },
      {
        term: "Graphical Integration in Motion Analysis: solution protocol",
        kind: "method",
        statement: "**Solve Graphical Integration in Motion Analysis problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is $v_{\\text{avg}} = \\Delta x/\\Delta t$, $v = dx/dt$, $a = dv/dt$ with $g = 9.8\\ \\text{m/s}^2$ downward; the working equation is $x = x_0+v_0t+\\tfrac12at^2$, $v = v_0+at$, $v^2 = v_0^2+2a\\Delta x$; every substitution must carry its units so the final unit ($\\text{m}$, $\\text{m/s}$, $\\text{m/s}^2$ with signs from the chosen $+x$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against walk $1\\ \\text{m/s}$ to jet $300\\ \\text{m/s}$; free fall $4.9t^2$ meters; constant-$a$ equations fail when $a$ varies; air drag breaks the free-fall idealization.",
      },
    ],
    figures: [
      {
        caption: "A velocity–time curve pieced together from straight segments. The displacement is the signed area: $A_1 + A_2 + A_3 = 16 + 32 + 8 = 56$ m. Had the final leg dipped below the axis, its area would subtract.",
        svg: `<svg viewBox="0 0 720 320" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Area under a velocity-time curve"><text x="360" y="42" font-size="14" text-anchor="middle" fill="currentColor">Δx = A₁ + A₂ + A₃ = 56 m</text><polygon points="90,250 310,90 310,250" fill="currentColor" opacity="0.12"/><rect x="310" y="90" width="220" height="160" fill="currentColor" opacity="0.12"/><polygon points="530,90 640,250 530,250" fill="currentColor" opacity="0.12"/><line x1="90" y1="250" x2="672" y2="250" stroke="currentColor" stroke-width="1.5"/><polygon points="672,250 662,246 662,254" fill="currentColor"/><line x1="90" y1="250" x2="90" y2="52" stroke="currentColor" stroke-width="1.5"/><polygon points="90,52 86,62 94,62" fill="currentColor"/><text x="76" y="62" font-size="13" font-style="italic" text-anchor="end" fill="currentColor">v (m/s)</text><text x="668" y="270" font-size="12" text-anchor="end" fill="currentColor">t (s)</text><path d="M 90 250 L 310 90 L 530 90 L 640 250" fill="none" stroke="currentColor" stroke-width="3"/><line x1="310" y1="90" x2="310" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/><line x1="530" y1="90" x2="530" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/><text x="200" y="230" font-size="12" text-anchor="middle" fill="currentColor">A₁ = 16 m</text><text x="420" y="230" font-size="12" text-anchor="middle" fill="currentColor">A₂ = 32 m</text><text x="586" y="230" font-size="12" text-anchor="middle" fill="currentColor">A₃ = 8 m</text><text x="90" y="270" font-size="11" text-anchor="middle" fill="currentColor">0</text><text x="310" y="270" font-size="11" text-anchor="middle" fill="currentColor">4</text><text x="530" y="270" font-size="11" text-anchor="middle" fill="currentColor">8</text><text x="640" y="270" font-size="11" text-anchor="middle" fill="currentColor">10</text><text x="80" y="95" font-size="11" text-anchor="end" fill="currentColor">8.0</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'The three-stage subway run',
        problem: "A subway train leaves a station with velocity rising linearly from 0 to 8.0 m/s in 4.0 s, holds 8.0 m/s for 4.0 s, then brakes to rest in 2.0 s, all along a straight track. How far does it travel between stops?",
        steps: [
          { label: 'Reasoning', text: "The $v$–$t$ graph is two triangles and a rectangle, and the displacement is the total signed area — all of it above the axis." },
          { label: 'Areas', text: "$A_1 = \\frac{1}{2}(4.0)(8.0) = 16$ m; $A_2 = (4.0)(8.0) = 32$ m; $A_3 = \\frac{1}{2}(2.0)(8.0) = 8.0$ m." },
          { label: 'Total', text: "$\\Delta x = 16 + 32 + 8.0 = 56$ m — and no single constant-acceleration equation could have spanned all three stages at once." },
        ],
        result: "$\\Delta x = 56$ m.",
      },
      {
        title: "Graphical Integration in Motion Analysis: constant-$a$ numbers",
        problem: "A ball is tossed upward at $14\\ \\text{m/s}$. What are its velocity and displacement after $1.8\\ \\text{s}$? Take $g = 9.8\\ \\text{m/s}^2$ downward.",
        steps: [
          { label: "Velocity", text: "$v = v_0-gt = 14 - 9.8\\times 1.8 = -3.64\\ \\text{m/s}$." },
          { label: "Displacement", text: "$\\Delta x = v_0t-\\tfrac12gt^2 = 14\\times 1.8 - 4.9\\times 1.8^2 = 9.32\\ \\text{m}$." },
          { label: "Read", text: "Signs carry the physics: positive is up along the chosen $+y$." },
        ],
        result: "$v \\approx -3.64\\ \\text{m/s}$, $\\Delta x \\approx 9.32\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      "Displacement = signed area under $v(t)$; velocity change = signed area under $a(t)$ — true for any acceleration.",
      "Below-axis area counts negative: it reverses displacement but never reduces distance traveled.",
      "Straight-segment graphs give exact areas as triangles plus rectangles: the graphical route to non-constant acceleration.",
    ],
    quiz: [
      {
        q: "For the subway train above, the average velocity over the full 10 s is",
        options: ["8.0 m/s", "5.6 m/s", "4.0 m/s", "7.0 m/s"],
        answer: 1,
        explanation: "$v_{\\text{avg}} = \\Delta x/\\Delta t = 56/10 = 5.6$ m/s; 8.0 m/s is only the plateau speed.",
      },
      {
        q: "A velocity–time curve lies below the $t$ axis from $t = 3$ s to 5 s. The area of that region",
        options: [
          "adds to both displacement and distance",
          "is zero because the velocity is negative",
          "should be ignored as unphysical",
          "subtracts from the displacement but adds to the distance traveled",
        ],
        answer: 3,
        explanation: "Below-axis velocity is backward motion: its area is negative displacement, while the odometer — which integrates $|v|$ — still counts it as distance.",
      },
      {
        q: "The area under an acceleration–time curve gives",
        options: ["the change in velocity", "the displacement", "the average acceleration", "the distance traveled"],
        answer: 0,
        explanation: "$\\Delta v = \\int a\\,dt$: area under $a$–$t$ is a velocity change, which is exactly how airbag and crash data are read.",
      },
      {
        q: "From $t = 0$ to 4.0 s a particle's $v$–$t$ graph is a rectangle at $v = -6.0$ m/s. The displacement is",
        options: ["24 m", "−6 m", "0", "−24 m"],
        answer: 3,
        explanation: "Area = $(-6.0)(4.0) = -24$ m: the particle spent the whole interval moving backward.",
      },
    ],
  },
]

import type { SectionContent } from '../library'

// ============================================================================
// Physics master book — lesson content (high-weightage sections)
// Full SectionContent lessons for ten sections across Units 2–18 of the
// official NTA syllabus (bookId 'phys-master'): kinematics (2.1,
// 2.2), laws of motion (3.1), work and power (4.1), centre of mass and
// rotational basics (5.1), zeroth law of thermodynamics (8.1), charges and
// Coulomb's law (11.1), current/drift velocity/Ohm's law (12.1), reflection
// and spherical mirrors (16.1), and atomic models + hydrogen spectrum (18.1).
// Every lesson carries prerequisites, intro, objectives, concepts, worked
// PYQ-style examples, key takeaways and a 4-question quiz. Style follows
// the advmath-ch01 exemplar: KaTeX formulas ($...$, $$...$$), sign-
// convention drills, dimensional habits, common traps and PYQ patterns.
// ============================================================================

export const mastersPhysicsContent: SectionContent[] = [
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: 'hall-ch2-s25',
    readingTime: 9,
    prerequisites: [
      'SI units and dimensional thinking from Unit 1 (section phys-m1-s1)',
      'School algebra: reading straight-line graphs and solving linear equations',
    ],
    intro: 'Motion is meaningless until you say who is watching: a passenger seated in a moving train is at rest in the train frame yet moving at 90 km/h in the ground frame. A **frame of reference** — axes plus a clock — is therefore the silent first input of every kinematics problem, and the position–time graph $x(t)$ is its picture. This section fixes the vocabulary of one-dimensional motion: distance versus displacement, average speed versus average and instantaneous velocity, and the graph-reading habits engineering assessment tests every single year.',
    objectives: [
      'Specify a frame of reference (origin + positive direction) before solving any straight-line motion problem',
      'Compute distance, displacement, average speed and average velocity for a given motion and order their magnitudes correctly',
      'Read instantaneous velocity as the tangent slope of a position–time graph and locate turning points where $v = 0$',
      'Apply the equal-distance (harmonic mean) and equal-time (arithmetic mean) average-speed rules without mixing them up',
    ],
    concepts: [
      {
        term: 'Frame of reference',
        kind: 'definition',
        statement: 'A **frame of reference** is a chosen origin, a set of axes and a clock relative to which the position $x(t)$ of a particle is specified; the same motion may look different from different frames.',
        detail: 'A passenger at rest in a moving train has speed zero in the train frame but the train speed in the ground frame — position and velocity are always "with respect to" some frame. engineering assessment questions implicitly use the ground frame unless stated otherwise: before substituting a single number, fix the origin, fix the $+$ direction, and never change either mid-solution.'
      },
      {
        term: 'Position–time graph',
        kind: 'notation',
        statement: 'The **position–time graph** plots $x$ against $t$; its slope at any instant is the velocity, since $v = \\frac{dx}{dt}$.',
        detail: 'A straight line means uniform motion (constant slope $= v$); a curve means non-uniform motion, with a steeper tangent meaning a faster particle. A horizontal line is a particle at rest, while a point where the tangent is horizontal is a turning point ($v = 0$, direction about to reverse). Reading slopes — not just shapes — is the graph skill engineering assessment probes.'
      },
      {
        term: 'Distance and displacement',
        kind: 'definition',
        statement: '**Displacement** is the change of position $\\Delta x = x_2 - x_1$ (a signed quantity), while **distance** is the total path length actually travelled (always non-negative).',
        detail: 'Finish your day at home and your net displacement is zero even though the distance travelled is many kilometres, so $|\\text{displacement}| \\le \\text{distance}$ with equality only for one-way straight-line motion. Every direction reversal inflates the distance but leaves the displacement untouched — the engine of most distance-versus-displacement MCQs.'
      },
      {
        term: 'Average speed versus average velocity',
        kind: 'insight',
        statement: '**Average velocity** is $\\bar{v} = \\frac{\\Delta x}{\\Delta t}$, while **average speed** is total path length divided by total time; average speed is never smaller than $|$average velocity$|$.',
        detail: 'Equal time intervals at speeds $v_1$ and $v_2$ give the arithmetic mean $\\frac{v_1 + v_2}{2}$; equal distances at $v_1$ and $v_2$ give the harmonic mean $\\frac{2v_1v_2}{v_1 + v_2}$. Averaging the two speeds of a two-leg journey without checking which case applies is the classic trap of this unit.'
      },
      {
        term: 'Instantaneous velocity and speed',
        kind: 'definition',
        statement: 'The **instantaneous velocity** $v = \\lim_{\\Delta t \\to 0}\\frac{\\Delta x}{\\Delta t} = \\frac{dx}{dt}$ is the slope of the tangent to the x–t curve; its magnitude is the **instantaneous speed**.',
        detail: 'Speed is never negative, but velocity can be — the sign only encodes direction along the axis. A car\'s speedometer reads instantaneous speed; its odometer accumulates distance. At a turning point $v = 0$ yet the particle is about to move again, so zero velocity at one instant does not mean "at rest" for all instants.'
      }
    ],
    examples: [
      {
        title: 'Average speed of a two-leg journey',
        problem: 'A car covers the first half of the distance of a journey at 40 km/h and the second half at 60 km/h. Find its average speed for the whole journey.',
        steps: [
          { label: 'Step 1', text: 'Recognise the regime: equal **distances**, so the harmonic-mean rule applies — the arithmetic mean is only valid for equal times.' },
          { label: 'Step 2', text: 'Take a total distance of 120 km for clean numbers. The first 60 km takes $t_1 = \\frac{60}{40} = 1.5$ h and the second 60 km takes $t_2 = \\frac{60}{60} = 1$ h.' },
          { label: 'Step 3', text: 'Average speed $= \\frac{\\text{total path}}{\\text{total time}} = \\frac{120}{1.5 + 1} = \\frac{120}{2.5} = 48$ km/h.' },
          { label: 'Step 4', text: 'This matches the shortcut $\\frac{2v_1v_2}{v_1 + v_2} = \\frac{2 \\times 40 \\times 60}{100} = 48$ km/h. The tempting answer 50 km/h is the arithmetic-mean trap.' }
        ],
        result: 'Average speed $= 48$ km/h (the harmonic mean of 40 and 60).'
      },
      {
        title: 'Distance, displacement and turnaround from $x(t)$',
        problem: 'A particle moves along the x-axis with $x(t) = 3t^2 - t^3$ metres for $0 \\le t \\le 3$ s. Find its displacement and distance in these 3 s, and the average velocity and average speed.',
        steps: [
          { label: 'Step 1', text: 'Velocity: $v = \\frac{dx}{dt} = 6t - 3t^2 = 3t(2 - t)$, which is zero at $t = 0$ and $t = 2$ s. So $v > 0$ on $(0, 2)$ and $v < 0$ on $(2, 3)$: a turning point at $t = 2$ s.' },
          { label: 'Step 2', text: 'Positions: $x(0) = 0$, $x(2) = 3(4) - 8 = 4$ m, and $x(3) = 3(9) - 27 = 0$ m.' },
          { label: 'Step 3', text: 'Displacement $= x(3) - x(0) = 0$ m. Distance $= |4 - 0| + |0 - 4| = 4 + 4 = 8$ m (out 4 m, back 4 m).' },
          { label: 'Step 4', text: 'Average velocity $= \\frac{0}{3} = 0$; average speed $= \\frac{8}{3} \\approx 2.67$ m/s. Same trip, two very different numbers — the reversal is the whole story.' }
        ],
        result: 'Displacement 0 m, distance 8 m; average velocity 0, average speed $\\frac{8}{3} \\approx 2.67$ m/s.'
      }
    ],
    keyTakeaways: [
      'Fix the frame (origin + positive direction) first; positions and velocities are meaningless "with respect to nothing".',
      'Instantaneous velocity $= \\frac{dx}{dt} =$ tangent slope on the x–t graph; a horizontal tangent is a turning point.',
      'Distance $\\ge |$displacement$|$ and average speed $\\ge |$average velocity$|$, with equality only for one-way straight-line motion.',
      'Equal distances $\\to$ harmonic mean $\\frac{2v_1v_2}{v_1+v_2}$; equal times $\\to$ arithmetic mean $\\frac{v_1+v_2}{2}$; never average speeds blindly.'
    ],
    quiz: [
      {
        q: 'A car covers the first half of the distance of a journey at 20 km/h and the second half at 30 km/h. Its average speed for the whole journey is',
        options: ['$22.5$ km/h', '$24$ km/h', '$25$ km/h', '$24.5$ km/h'],
        answer: 1,
        explanation: 'Step 1: Equal distances, so the harmonic-mean rule applies, not the arithmetic mean. Step 2: Take total distance 60 km: the first 30 km takes $\\frac{30}{20} = 1.5$ h and the second 30 km takes $\\frac{30}{30} = 1$ h. Step 3: Average speed $= \\frac{60}{2.5} = 24$ km/h, which equals $\\frac{2 \\times 20 \\times 30}{20 + 30}$. Step 4: The trap answer 25 km/h comes from blindly averaging 20 and 30, valid only for equal times.'
      },
      {
        q: 'A particle moves along the x-axis with $x(t) = t^2 - 4t + 6$ (metres). It is momentarily at rest at $t =$',
        options: ['$1$ s', '$2$ s', '$3$ s', '$4$ s'],
        answer: 1,
        explanation: 'Step 1: Velocity is the time derivative: $v = 2t - 4$. Step 2: Set $v = 0$: $2t - 4 = 0$ gives $t = 2$ s. Step 3: Geometrically, $x(t)$ is a parabola with its vertex at $t = 2$ s, where the tangent to the x–t graph is horizontal. Step 4: At $t = 1$ s or $t = 3$ s, $v = \\mp 2$ m/s, so the particle is moving.'
      },
      {
        q: 'A man walks 3 m east, then 4 m west, taking 5 s in total. The ratio of the magnitude of his average velocity to his average speed is',
        options: ['$1 : 7$', '$1 : 5$', '$7 : 1$', '$1 : 1$'],
        answer: 0,
        explanation: 'Step 1: Displacement $= 3 - 4 = -1$ m (1 m west); distance $= 3 + 4 = 7$ m. Step 2: $|$average velocity$| = \\frac{1}{5} = 0.2$ m/s. Step 3: Average speed $= \\frac{7}{5} = 1.4$ m/s. Step 4: Ratio $= 0.2 : 1.4 = 1 : 7$; treating the 7 m path as displacement would wrongly give $1 : 1$.'
      },
      {
        q: 'A particle moves along a semicircle of radius 3.5 m from one end of the diameter to the other. The ratio of distance travelled to the magnitude of displacement is ($\\pi \\approx \\frac{22}{7}$)',
        options: ['$7 : 11$', '$11 : 7$', '$1 : 2$', '$22 : 7$'],
        answer: 1,
        explanation: 'Step 1: Distance is the arc length $= \\pi R = \\frac{22}{7} \\times 3.5 = 11$ m. Step 2: Displacement is the straight chord joining the ends, which for a semicircle is the diameter $2R = 7$ m. Step 3: Ratio $= 11 : 7$. Step 4: Curved paths always stretch distance above displacement; $1 : 2$ would require arc length equal to the radius, which never happens here.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.2
  {
    sectionId: 'hall-ch2-s26',
    readingTime: 10,
    prerequisites: [
      'phys-m2-s1 — frames of reference, position–time graphs, average versus instantaneous velocity',
      'Basic algebra: solving quadratic equations that appear in vertical-motion problems',
    ],
    intro: 'When acceleration is constant, velocity grows linearly and position traces a parabola, and three compact equations — $v = u + at$, $s = ut + \\frac{1}{2}at^2$ and $v^2 = u^2 + 2as$ — dispatch almost every one-dimensional engineering assessment numerical. Graphs carry the same information in pictures: the slope of a v–t line is the acceleration and the area under it is the displacement. This section also installs the sign discipline for vertical motion that separates a correct answer from a sign-error trap.',
    objectives: [
      'Select and apply the appropriate kinematic equation to solve for any one of $u$, $v$, $a$, $s$, $t$ given the other quantities',
      'Compute displacement in the nth second using $s_n = u + \\frac{a(2n-1)}{2}$ and use the $1:3:5:7$ pattern for motion from rest',
      'Extract acceleration (slope) and displacement (area) from velocity–time graphs, including piecewise-linear ones',
      'Solve vertical-motion problems with one consistent sign convention and use up–down symmetry as a shortcut'
    ],
    concepts: [
      {
        term: 'Uniform acceleration',
        kind: 'definition',
        statement: 'Motion is **uniformly accelerated** when the acceleration $a = \\frac{dv}{dt}$ is constant in both magnitude and direction: velocity changes by equal amounts in equal intervals of time.',
        detail: 'In one dimension the sign of $a$ carries direction, and "retardation" simply means $a$ points opposite to $v$. Trap: a negative acceleration does not by itself mean slowing down — if $v$ is also negative, the speed is increasing. Only the relative sign of $v$ and $a$ decides speeding up versus slowing down.'
      },
      {
        term: 'The three kinematic equations',
        kind: 'theorem',
        statement: 'For constant acceleration, $$v = u + at, \\qquad s = ut + \\tfrac{1}{2}at^2, \\qquad v^2 = u^2 + 2as.$$ Only two are independent; the third follows by eliminating $t$.',
        detail: 'Here $s$ is displacement, not distance — if the particle reverses, the two differ. To get $v^2 = u^2 + 2as$, substitute $t = \\frac{v - u}{a}$ into $s = ut + \\frac{1}{2}at^2$ and simplify. These equations fail the moment $a$ varies; then integrate $a = \\frac{dv}{dt}$ directly.'
      },
      {
        term: 'Displacement in the nth second',
        kind: 'method',
        statement: 'The displacement in the **nth second** is $$s_n = s(n) - s(n-1) = u + \\tfrac{a(2n-1)}{2},$$ the difference of the displacements in the first $n$ and first $n-1$ seconds.',
        detail: 'From rest ($u = 0$) the successive-second displacements go as $1 : 3 : 5 : 7$, while total displacement grows as $n^2$. engineering assessment wording like "distance in the 3rd second" means $s_3 = u + \\frac{5a}{2}$, not the distance in the first 3 seconds — read the ordinal carefully.'
      },
      {
        term: 'Graphs of uniformly accelerated motion',
        kind: 'insight',
        statement: 'On a **velocity–time graph** the slope is the acceleration and the area between the graph and the time axis is the displacement; on a position–time graph uniform acceleration appears as a parabola.',
        detail: 'Area below the time axis counts as negative displacement; taking the area of a speed–time graph instead gives distance. For a piecewise-linear v–t graph, split it into trapeziums and triangles, compute each area and add with signs — a favourite engineering assessment graph pattern.'
      },
      {
        term: 'Free fall and the sign convention',
        kind: 'method',
        statement: 'For vertical motion take one direction as positive — conventionally upward — so that $a = -g$; the same three equations then apply, with $u$ carrying its own sign.',
        detail: 'A stone released from a rising balloon keeps the balloon\'s upward velocity at the instant of release (inertia), so $u$ is positive even though nothing pushes it up. Symmetry shortcuts: time up equals time down $= \\frac{u}{g}$, and the speed while passing any height is the same going up and coming down. The commonest error is flipping the sign of $g$ halfway through a solution.'
      }
    ],
    examples: [
      {
        title: 'Accelerate then brake — total distance',
        problem: 'A car starts from rest and accelerates uniformly at $2\\ \\text{m/s}^2$ for 10 s, then brakes with uniform retardation $4\\ \\text{m/s}^2$ until it stops. Find the total distance covered and the average speed for the whole trip.',
        steps: [
          { label: 'Step 1', text: 'Speed after the acceleration phase: $v = u + at = 0 + 2 \\times 10 = 20$ m/s, and the distance in this phase is $s_1 = \\frac{1}{2}at^2 = \\frac{1}{2}(2)(10)^2 = 100$ m.' },
          { label: 'Step 2', text: 'Braking phase: use $v^2 = u^2 + 2as$ with $u = 20$ m/s, $v = 0$, $a = -4\\ \\text{m/s}^2$: $0 = 400 - 8s_2$, so $s_2 = 50$ m.' },
          { label: 'Step 3', text: 'Total distance $= 100 + 50 = 150$ m. Braking time $t_2 = \\frac{v - u}{a} = \\frac{0 - 20}{-4} = 5$ s, so the total time is $10 + 5 = 15$ s.' },
          { label: 'Step 4', text: 'Average speed $= \\frac{150}{15} = 10$ m/s — a clean round number that doubles as a check on both phases.' }
        ],
        result: 'Total distance 150 m in 15 s; average speed 10 m/s.'
      },
      {
        title: 'Stone released from a rising balloon',
        problem: 'A balloon is rising vertically at a steady 5 m/s at a height of 60 m when a stone is released from it ($g = 10\\ \\text{m/s}^2$). Find (a) the time for the stone to reach the ground and (b) its speed just before impact.',
        steps: [
          { label: 'Step 1', text: 'Take upward positive with the origin at the ground: the stone inherits the balloon\'s velocity, so $u = +5$ m/s, $a = -10\\ \\text{m/s}^2$, and the ground is at $y = 0$ from $y_0 = 60$ m — a displacement of $-60$ m.' },
          { label: 'Step 2', text: 'Apply $y = ut + \\frac{1}{2}at^2$: $-60 = 5t - 5t^2$, which rearranges to $t^2 - t - 12 = 0$.' },
          { label: 'Step 3', text: 'Factorise: $(t - 4)(t + 3) = 0$, so $t = 4$ s, rejecting the negative root.' },
          { label: 'Step 4', text: 'Impact speed: $v = u + at = 5 - 10(4) = -35$ m/s, i.e. 35 m/s downward. Cross-check with $v^2 = u^2 + 2as = 25 + 2(10)(60) = 1225 = 35^2$. $\\checkmark$' }
        ],
        result: 'The stone hits the ground after 4 s, moving at 35 m/s downward.'
      }
    ],
    keyTakeaways: [
      'The three equations hold only for constant $a$, and $s$ is displacement — reverse the motion and distance $\\ne$ displacement.',
      'v–t slope $= a$; signed v–t area $= s$; speed–time area $=$ distance.',
      '$s_n = u + \\frac{a(2n-1)}{2}$; from rest, successive seconds give $1:3:5:7$ while total displacement grows as $n^2$.',
      'Vertical motion: fix up-positive with $a = -g$ for the whole problem; a released body keeps the carrier\'s velocity.'
    ],
    quiz: [
      {
        q: 'A body starts from rest with uniform acceleration $2\\ \\text{m/s}^2$. The distance it covers in the 3rd second is',
        options: ['$9$ m', '$5$ m', '$4$ m', '$7$ m'],
        answer: 1,
        explanation: 'Step 1: "3rd second" means the interval between $t = 2$ s and $t = 3$ s. Step 2: Distance in the first 3 s $= \\frac{1}{2}(2)(3)^2 = 9$ m; in the first 2 s $= \\frac{1}{2}(2)(2)^2 = 4$ m. Step 3: Difference $= 9 - 4 = 5$ m, matching $s_3 = 0 + \\frac{2(2 \\times 3 - 1)}{2} = 5$ m. Step 4: 9 m is the first-three-seconds trap; from rest the per-second sequence is $1, 3, 5, 7, \\ldots$'
      },
      {
        q: 'A car moving at 20 m/s is brought to rest with uniform retardation $5\\ \\text{m/s}^2$. The stopping distance is',
        options: ['$10$ m', '$20$ m', '$40$ m', '$80$ m'],
        answer: 2,
        explanation: 'Step 1: Use $v^2 = u^2 + 2as$ with $v = 0$, $u = 20$ m/s, $a = -5\\ \\text{m/s}^2$. Step 2: $0 = 400 - 10s$. Step 3: $s = 40$ m. Step 4: Doubling the speed would quadruple this distance (stopping distance $\\propto u^2$), which is why 80 m is the "twice as fast" answer.'
      },
      {
        q: 'A ball thrown vertically upward returns to the thrower after 8 s ($g = 10\\ \\text{m/s}^2$). The maximum height reached is',
        options: ['$40$ m', '$100$ m', '$160$ m', '$80$ m'],
        answer: 3,
        explanation: 'Step 1: Time of flight $T = \\frac{2u}{g}$, so $u = \\frac{gT}{2} = \\frac{10 \\times 8}{2} = 40$ m/s. Step 2: Maximum height $h = \\frac{u^2}{2g} = \\frac{1600}{20} = 80$ m. Step 3: Equivalently $h = \\frac{gT^2}{8} = \\frac{10 \\times 64}{8} = 80$ m — the up-time is only 4 s. Step 4: 160 m wrongly uses the full 8 s for the climb.'
      },
      {
        q: 'The velocity–time graph of a particle is a straight line from $(0, 4\\ \\text{m/s})$ to $(10\\ \\text{s}, 0)$. The displacement in these 10 s is',
        options: ['$20$ m', '$40$ m', '$10$ m', '$4$ m'],
        answer: 0,
        explanation: 'Step 1: The graph is a triangle of base 10 s and height 4 m/s. Step 2: Displacement $=$ area $= \\frac{1}{2} \\times 10 \\times 4 = 20$ m. Step 3: The acceleration (slope) is $-0.4\\ \\text{m/s}^2$ — a separate quantity from the area. Step 4: The average velocity is $\\frac{20}{10} = 2$ m/s, exactly the mean of 0 and 4 for a linear $v(t)$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: 'phys-m3-s1',
    readingTime: 10,
    prerequisites: [
      'Kinematic equations for straight-line motion (phys-m2-s2)',
      'Vectors: magnitude, direction and component-wise addition'
    ],
    intro: 'Newton\'s three laws convert the kinematics of Unit 2 into dynamics: the second law $\\vec{F}_{net} = \\frac{d\\vec{p}}{dt}$ is the master equation of mechanics, the first law defines the inertial frames in which it holds, and the third law explains everything from walking to rocket recoil. Momentum $\\vec{p} = m\\vec{v}$ and impulse $\\vec{J} = \\Delta\\vec{p}$ are the currency in which forces trade. Every engineering assessment dynamics numerical begins with the same ritual — free-body diagram, axes, then $\\Sigma F = ma$ one axis at a time.',
    objectives: [
      'State all three laws precisely, including the inertial-frame condition of the first two laws and the "different bodies" clause of the third',
      'Apply $\\Sigma\\vec{F} = m\\vec{a}$ axis by axis to single bodies, accelerating lifts and simple two-block systems',
      'Compute impulse and momentum change from an average force, a contact time or an F–t graph',
      'Explain everyday consequences: apparent weight in lifts, and why cricketers and airbags "give" to reduce force'
    ],
    concepts: [
      {
        term: 'First law and inertia',
        kind: 'law',
        statement: '**Newton\'s first law**: a body continues in its state of rest or of uniform velocity along a straight line unless compelled to change it by a net external force.',
        detail: 'The law defines inertial frames — the frames in which it holds — and thereby the arena where $\\Sigma F = ma$ is valid. Inertia, the resistance to change of state, is measured by mass. No force is needed to keep something moving; force is needed only to change motion — the point on which Aristotle disagreed with Galileo and lost.'
      },
      {
        term: 'Newton\'s second law',
        kind: 'law',
        statement: '**Newton\'s second law**: $$\\vec{F}_{net} = \\frac{d\\vec{p}}{dt}, \\qquad \\vec{p} = m\\vec{v},$$ which reduces to $\\vec{F}_{net} = m\\vec{a}$ when the mass is constant; $1$ newton $= 1\\ \\text{kg}\\cdot\\text{m/s}^2$.',
        detail: 'It is the net (vector sum) of all forces that appears — resolve one axis at a time. The $\\frac{dp}{dt}$ form survives variable-mass problems such as rockets, where $F = ma$ alone misleads. Apparent weight in a lift follows at once: $N = m(g + a)$ when accelerating upward and $N = m(g - a)$ when accelerating downward, with $N = 0$ in free fall and $N = mg$ at constant velocity.'
      },
      {
        term: 'Newton\'s third law',
        kind: 'law',
        statement: '**Newton\'s third law**: forces occur in equal-magnitude, oppositely directed pairs acting on **two different bodies**: $\\vec{F}_{AB} = -\\vec{F}_{BA}$.',
        detail: 'Because the two forces act on different bodies, they never cancel each other — only forces on the *same* body enter that body\'s own $\\Sigma F = ma$. The earth pulls a book down; the book pulls the earth up with an equal force. Walking, swimming, gun recoil and rocket propulsion are all third-law engines. A frequent MCQ trap claims action–reaction cancel; they would only if they acted on one body.'
      },
      {
        term: 'Linear momentum',
        kind: 'definition',
        statement: '**Linear momentum** $\\vec{p} = m\\vec{v}$ (SI unit kg·m/s) is the quantity of motion; it is a vector pointing along the velocity.',
        detail: 'Momentum is frame-dependent because velocity is. A 1000 kg truck crawling at 2 m/s carries $2000$ kg·m/s, four times the $500$ kg·m/s of a 50 kg sprinter at 10 m/s — momentum rewards mass as much as speed. The second law says force is the rate at which this quantity is pumped into or drained from a body.'
      },
      {
        term: 'Impulse',
        kind: 'theorem',
        statement: '**Impulse** $$\\vec{J} = \\int \\vec{F}\\,dt = \\Delta\\vec{p}$$ equals the change in momentum; for a constant force $J = F\\Delta t$, the area of the rectangle under the F–t graph.',
        detail: 'Impulse explains safety design: the same $\\Delta p$ spread over a longer contact time needs a smaller force — airbags, crash cushioning, a cricketer withdrawing the hands while catching, bending the knees on landing. Read any F–t graph as a signed area to extract $\\Delta p$, then divide by the mass for the velocity change.'
      }
    ],
    examples: [
      {
        title: 'Table block and hanging block',
        problem: 'A 3 kg block on a frictionless horizontal table is tied by a light inextensible string that passes over a frictionless pulley to a 2 kg block hanging vertically ($g = 10\\ \\text{m/s}^2$). Find the acceleration of the system and the string tension.',
        steps: [
          { label: 'Step 1', text: 'Draw both free-body diagrams. For the 3 kg block only the tension pulls horizontally: $T = 3a$. For the 2 kg block, weight acts down and tension up: $20 - T = 2a$.' },
          { label: 'Step 2', text: 'Add the two equations to eliminate $T$: $20 = 5a$, so $a = 4\\ \\text{m/s}^2$.' },
          { label: 'Step 3', text: 'Back-substitute: $T = 3a = 3 \\times 4 = 12$ N.' },
          { label: 'Step 4', text: 'Consistency check from the hanging block: $T = 20 - 2(4) = 12$ N. $\\checkmark$ Note $a < g$: the table block "brakes" the fall, so the string tension (12 N) is less than the hanging weight (20 N).' }
        ],
        result: '$a = 4\\ \\text{m/s}^2$ and $T = 12$ N.'
      },
      {
        title: 'Impulse on a hockey ball',
        problem: 'A hockey ball of mass 200 g moving at 10 m/s is struck straight back along its line of motion and leaves the stick at 5 m/s. If the contact lasts 0.02 s, find the average force exerted by the stick.',
        steps: [
          { label: 'Step 1', text: 'Fix the sign convention: take the original direction as positive, so $u = +10$ m/s and (the ball is returned) $v = -5$ m/s, with $m = 0.2$ kg.' },
          { label: 'Step 2', text: 'Momentum change: $\\Delta p = m(v - u) = 0.2(-5 - 10) = -3$ kg·m/s, so $|\\Delta p| = 3$ kg·m/s.' },
          { label: 'Step 3', text: 'Average force: $F = \\frac{|\\Delta p|}{\\Delta t} = \\frac{3}{0.02} = 150$ N, directed opposite to the incoming motion.' },
          { label: 'Step 4', text: 'The sign bookkeeping is everything: using the speed difference $10 - 5 = 5$ m/s would give $\\frac{0.2 \\times 5}{0.02} = 50$ N — five times too small.' }
        ],
        result: 'Average force $= 150$ N opposing the original motion.'
      }
    ],
    keyTakeaways: [
      'First law defines inertial frames and inertia ($\\propto$ mass); second law is $\\vec{F}_{net} = \\frac{d\\vec{p}}{dt}$; third-law pairs act on different bodies and never cancel.',
      'Draw the FBD first, then write $\\Sigma F = ma$ per axis; a light string over a frictionless pulley carries uniform tension.',
      'Impulse $=$ area under F–t $= \\Delta p$; stretching the contact time shrinks the force for a given $\\Delta p$.',
      'Lift weight: $N = m(g \\pm a)$ — true weight $mg$ only at constant velocity, zero in free fall.'
    ],
    quiz: [
      {
        q: 'A 60 kg man stands on a weighing scale in a lift accelerating upward at $2\\ \\text{m/s}^2$ ($g = 10\\ \\text{m/s}^2$). The scale reads',
        options: ['$600$ N', '$480$ N', '$720$ N', '$1200$ N'],
        answer: 2,
        explanation: 'Step 1: Forces on the man: weight $mg = 600$ N down, normal reaction $N$ up. Step 2: The acceleration is upward, so $N - mg = ma$. Step 3: $N = 60(10 + 2) = 720$ N. Step 4: 600 N is the constant-velocity trap — the scale reads the true weight only when $a = 0$.'
      },
      {
        q: 'Action and reaction forces do not cancel each other because',
        options: [
          'they have different magnitudes',
          'they act on different bodies',
          'they act in perpendicular directions',
          'they act at different instants of time'
        ],
        answer: 1,
        explanation: 'Step 1: Third-law pairs are always equal in magnitude, simultaneous and oppositely directed. Step 2: The pair acts on two different bodies — one on each participant of the interaction. Step 3: Cancellation requires both forces to act on the *same* body before summing for that body\'s $ma$. Step 4: Hence each body feels only its own member of the pair, and both can still accelerate.'
      },
      {
        q: 'A force acting on a 0.5 kg ball at rest rises linearly from 0 to 40 N in 0.05 s and falls back to 0 in the next 0.05 s. The ball leaves with speed',
        options: ['$2$ m/s', '$4$ m/s', '$8$ m/s', '$0.4$ m/s'],
        answer: 1,
        explanation: 'Step 1: The F–t graph is a triangle of base 0.1 s and height 40 N. Step 2: Impulse $=$ area $= \\frac{1}{2} \\times 0.1 \\times 40 = 2$ N·s $= \\Delta p$. Step 3: $\\Delta v = \\frac{2}{0.5} = 4$ m/s from rest. Step 4: 8 m/s would come from treating the peak force as if it acted for the full 0.1 s.'
      },
      {
        q: 'The momentum of a particle changes from 10 kg·m/s to 2 kg·m/s in 0.4 s along the same line. The average force on it is',
        options: [
          '$20$ N along the motion',
          '$20$ N opposite to the motion',
          '$8$ N opposite to the motion',
          '$5$ N along the motion'
        ],
        answer: 1,
        explanation: 'Step 1: $F = \\frac{\\Delta p}{\\Delta t} = \\frac{2 - 10}{0.4} = -20$ N. Step 2: The minus sign means the force points opposite to the chosen positive (motion) direction. Step 3: Magnitude 20 N; the 8 N option divides the wrong quantity — the change in momentum, not the final momentum. Step 4: A constant opposing force steadily drains momentum, exactly as brakes do.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: 'hall-ch5-s32',
    readingTime: 9,
    prerequisites: [
      'Newton\'s laws and free-body diagrams (phys-m3-s1)',
      'Basic integration — enough to integrate a linear function of position'
    ],
    intro: 'Work $W = \\vec{F}\\cdot\\vec{s} = Fs\\cos\\theta$ is the energy a force deposits, and it cares only about the component of force along the displacement. When the force varies with position, the same idea becomes an integral — the area under the force–displacement graph. Power $P = \\frac{dW}{dt} = \\vec{F}\\cdot\\vec{v}$ rates that transfer in watts, and engineering assessment loves testing exactly these three faces: dot product, graph area and the $Fv$ product.',
    objectives: [
      'Compute the work done by a constant force, including the sign cases $\\theta < 90^\\circ$, $\\theta = 90^\\circ$ and $\\theta > 90^\\circ$',
      'Evaluate the work of a position-dependent force by integration or from the F–x graph area',
      'Distinguish average power $\\frac{W}{t}$ from instantaneous power $\\vec{F}\\cdot\\vec{v}$ and apply both to vehicles and lifts',
      'Convert between joule, watt, kilowatt-hour and horsepower without unit slips'
    ],
    concepts: [
      {
        term: 'Work by a constant force',
        kind: 'definition',
        statement: 'The **work done by a constant force** over a displacement $\\vec{s}$ is the scalar product $$W = \\vec{F}\\cdot\\vec{s} = Fs\\cos\\theta,$$ with SI unit joule ($1$ J $= 1$ N·m).',
        detail: 'Only the force component along the displacement counts, and $\\cos\\theta$ fixes the sign: positive for $\\theta < 90^\\circ$, zero at $\\theta = 90^\\circ$, negative for $\\theta > 90^\\circ$. Work is a scalar — direction never attaches to it. Note that $W$ is frame-dependent: the same push does different work in the train frame than on the platform, though engineering assessment almost always works in the ground frame.'
      },
      {
        term: 'Zero-work situations',
        kind: 'insight',
        statement: '**Zero work** occurs when $\\theta = 90^\\circ$ (force perpendicular to displacement), when the force acts but the body does not move, or when no force acts at all.',
        detail: 'The centripetal force in uniform circular motion does zero work because it is always perpendicular to the velocity — the speed stays constant for exactly this reason. Carrying a bag along level ground does (nearly) zero work against gravity, since the upward supporting force is perpendicular to the horizontal motion. Recognising these cases instantly eliminates half the options in an MCQ.'
      },
      {
        term: 'Work by a variable force',
        kind: 'method',
        statement: 'For a force that varies with position, $$W = \\int_{x_i}^{x_f} F(x)\\,dx,$$ the signed **area under the F–x graph**.',
        detail: 'Stretching a spring against $F = kx$ gives a triangular area $W = \\frac{1}{2}kx^2$ — the work done by the external stretching agency. For a constant force the integral collapses to $Fs$. In graph questions, split the region into rectangles and triangles and add signed areas; never assume a flat force where the graph slopes.'
      },
      {
        term: 'Power',
        kind: 'definition',
        statement: '**Power** is the rate of doing work: $$P_{avg} = \\frac{W}{t}, \\qquad P_{inst} = \\frac{dW}{dt} = \\vec{F}\\cdot\\vec{v} = Fv\\cos\\theta,$$ with SI unit watt ($1$ W $= 1$ J/s).',
        detail: 'Engine nameplates (a "40 kW" motor) quote power, not energy — energy is power multiplied by time. For a vehicle, $P = Fv$ links traction force to speed at constant power: as $v$ rises the available $F$ falls, which is why acceleration tapers off. One horsepower $= 746$ W for legacy problems.'
      },
      {
        term: 'The kilowatt-hour and unit hygiene',
        kind: 'insight',
        statement: 'The commercial unit of energy is the **kilowatt-hour**: $1$ kWh $=$ energy delivered at 1 kW for one hour $= 3.6\\times10^6$ J.',
        detail: 'The kWh is energy even though it smells of power — the classic unit trap. A 2 kW heater run for 3 h consumes 6 kWh $= 2.16\\times10^7$ J. In engineering assessment numericals, convert everything to SI before substituting and convert back only at the very end.'
      }
    ],
    examples: [
      {
        title: 'Work by a position-dependent force',
        problem: 'A force $F = (2 + 3x)$ N acts on a particle moving along the x-axis from $x = 0$ to $x = 4$ m. Find the work done by the force.',
        steps: [
          { label: 'Step 1', text: 'The force varies with position, so integrate: $W = \\int_0^4 (2 + 3x)\\,dx$.' },
          { label: 'Step 2', text: 'Antiderivative: $\\int (2 + 3x)\\,dx = 2x + \\frac{3x^2}{2}$.' },
          { label: 'Step 3', text: 'Evaluate: $W = \\left[2x + \\frac{3x^2}{2}\\right]_0^4 = 8 + \\frac{3 \\times 16}{2} = 8 + 24 = 32$ J.' },
          { label: 'Step 4', text: 'Graph check: F–x is a line from 2 N at $x = 0$ to 14 N at $x = 4$ m; trapezium area $= \\frac{2 + 14}{2} \\times 4 = 32$ J. $\\checkmark$' }
        ],
        result: '$W = 32$ J.'
      },
      {
        title: 'Accelerating a car — average versus instantaneous power',
        problem: 'A 1000 kg car accelerates uniformly from rest to 20 m/s in 5 s. Find the average power of the engine during the burst and the instantaneous power at the moment the car reaches 20 m/s.',
        steps: [
          { label: 'Step 1', text: 'Kinematics first: $a = \\frac{20 - 0}{5} = 4\\ \\text{m/s}^2$ and $s = \\frac{1}{2}(4)(5)^2 = 50$ m.' },
          { label: 'Step 2', text: 'Traction force: $F = ma = 1000 \\times 4 = 4000$ N (assumed the only horizontal force). Work done: $W = Fs = 4000 \\times 50 = 2\\times10^5$ J.' },
          { label: 'Step 3', text: 'Average power: $P_{avg} = \\frac{W}{t} = \\frac{2\\times10^5}{5} = 4\\times10^4$ W $= 40$ kW.' },
          { label: 'Step 4', text: 'Instantaneous power at the end: $P = Fv = 4000 \\times 20 = 8\\times10^4$ W $= 80$ kW — exactly twice the average, a general result for uniform acceleration from rest.' }
        ],
        result: 'Average power 40 kW; instantaneous power at 20 m/s is 80 kW.'
      }
    ],
    keyTakeaways: [
      '$W = Fs\\cos\\theta$ is a scalar; its sign comes only from $\\cos\\theta$, and $\\perp$ forces do zero work.',
      'Variable force $\\to$ $W = \\int F\\,dx$ $=$ signed area under the F–x graph (spring: $\\frac{1}{2}kx^2$).',
      '$P_{inst} = Fv$, $P_{avg} = \\frac{W}{t}$; for uniform acceleration from rest, $P_{avg} = \\frac{1}{2}P_{final}$.',
      '$1$ kWh $= 3.6\\times10^6$ J is energy; watt is power — never mix them in an MCQ.'
    ],
    quiz: [
      {
        q: 'A 2 kg block slides from rest down a smooth (frictionless) incline of vertical height 5 m ($g = 10\\ \\text{m/s}^2$). The work done by gravity on the block is',
        options: ['$50$ J', '$100$ J', '$200$ J', 'it depends on the angle of the incline'],
        answer: 1,
        explanation: 'Step 1: Gravity $mg = 20$ N acts vertically while the displacement is along the incline. Step 2: The component of gravity along the incline times the incline length collapses to $W = mgh$, where $h = 5$ m is the vertical drop. Step 3: $W = 2 \\times 10 \\times 5 = 100$ J. Step 4: The work done by gravity between two heights is $mgh$ regardless of path shape — the incline angle is irrelevant.'
      },
      {
        q: 'A force of 10 N acts along +x on a particle for the first 5 m, then decreases linearly to zero over the next 5 m. The total work done is',
        options: ['$50$ J', '$25$ J', '$75$ J', '$100$ J'],
        answer: 2,
        explanation: 'Step 1: First segment: a rectangle of area $10 \\times 5 = 50$ J. Step 2: Second segment: a triangle of base 5 m and height 10 N, area $\\frac{1}{2} \\times 5 \\times 10 = 25$ J. Step 3: Total $W = 50 + 25 = 75$ J. Step 4: 100 J would result from treating the sloping segment as another full rectangle.'
      },
      {
        q: 'A 1000 kg lift rises 20 m in 10 s at constant speed ($g = 10\\ \\text{m/s}^2$). The power delivered by the motor is',
        options: ['$2$ kW', '$4$ kW', '$20$ kW', '$40$ kW'],
        answer: 2,
        explanation: 'Step 1: Constant speed means the cable tension equals the weight: $T = mg = 10^4$ N. Step 2: Work done by the motor: $W = Ts = 10^4 \\times 20 = 2\\times10^5$ J. Step 3: Power $= \\frac{W}{t} = \\frac{2\\times10^5}{10} = 2\\times10^4$ W $= 20$ kW. Step 4: At constant speed there is no net force doing extra work — the motor only fights gravity.'
      },
      {
        q: 'A 2 kW electric heater runs for 3 hours. The energy consumed is',
        options: ['$6\\times10^6$ J', '$2.16\\times10^7$ J', '$2.16\\times10^6$ J', '$7.2\\times10^6$ J'],
        answer: 1,
        explanation: 'Step 1: Energy $=$ power $\\times$ time: $E = 2\\ \\text{kW} \\times 3\\ \\text{h} = 6$ kWh. Step 2: Convert: $1$ kWh $= 3.6\\times10^6$ J. Step 3: $E = 6 \\times 3.6\\times10^6 = 2.16\\times10^7$ J. Step 4: The $6\\times10^6$ J option mistakes kWh for kJ-scale units — the kWh-to-joule conversion is the whole question.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.1
  {
    sectionId: 'hall-ch10-s24',
    readingTime: 10,
    prerequisites: [
      'Newton\'s laws and free-body diagrams (phys-m3-s1)',
      'Kinematic equations for constant acceleration (phys-m2-s2)',
      'Radians, arc length $s = r\\theta$, and basic integration'
    ],
    intro: 'The centre of mass $\\vec{r}_{cm} = \\frac{\\sum m_i \\vec{r}_i}{\\sum m_i}$ is the mass-weighted average position of a system — the single point that moves as if all the mass and the whole net external force were concentrated there. Rotation adds a parallel set of variables: angle $\\theta$, angular velocity $\\omega = \\frac{d\\theta}{dt}$, angular acceleration $\\alpha$, and the torque $\\tau = rF\\sin\\theta$ that changes them. This section sets up both languages, which the rest of Unit 5 and Unit 6 use to crack rigid bodies and rolling.',
    objectives: [
      'Locate the centre of mass of two- and multi-particle systems and state when it lies outside the material of the body',
      'Use angular variables with their rotational kinematic equations, converting between $v$ and $\\omega$ and between rpm and rad/s',
      'Compute torque $\\tau = rF\\sin\\theta$ about a point and moment of inertia $I = \\sum mr^2$ about an axis',
      'Translate any linear-kinematics result into its rotational counterpart via $x \\to \\theta$, $v \\to \\omega$, $a \\to \\alpha$'
    ],
    concepts: [
      {
        term: 'Centre of mass',
        kind: 'definition',
        statement: 'The **centre of mass** of a system of particles is the mass-weighted mean position: $$\\vec{r}_{cm} = \\frac{\\sum m_i \\vec{r}_i}{\\sum m_i},$$ and for two particles on a line, $x_{cm} = \\frac{m_1x_1 + m_2x_2}{m_1 + m_2}$.',
        detail: 'The COM divides the segment between two particles in the inverse ratio of their masses: it sits twice as close to the particle that is twice as heavy, and at the midpoint for equal masses. Newton\'s second law then applies to the COM as if the entire mass $M = \\sum m_i$ were concentrated there with the net external force acting on it — internal forces can never move it.'
      },
      {
        term: 'Centre of mass of extended bodies',
        kind: 'insight',
        statement: 'For a **rigid body** the sum becomes $\\frac{1}{M}\\int x\\,dm$; for uniform, symmetric bodies the COM sits at the geometric centre.',
        detail: 'Symmetry is the shortcut: a uniform disc, sphere, ring or straight rod has its COM at its centre. The COM need not lie inside the material — a ring\'s COM is at its hollow centre, and an L-shaped lamina\'s COM lies outside the metal. Locating it before solving a rotation problem prevents most geometry errors later.'
      },
      {
        term: 'Angular kinematics',
        kind: 'notation',
        statement: 'Rotation is described by angle $\\theta$ (radians), angular velocity $\\omega = \\frac{d\\theta}{dt}$ and angular acceleration $\\alpha = \\frac{d\\omega}{dt}$, with constant-$\\alpha$ equations $$\\omega = \\omega_0 + \\alpha t, \\quad \\theta = \\omega_0 t + \\tfrac{1}{2}\\alpha t^2, \\quad \\omega^2 = \\omega_0^2 + 2\\alpha\\theta.$$',
        detail: 'Every linear-kinematics result translates by the dictionary $x \\to \\theta$, $v \\to \\omega$, $a \\to \\alpha$ — no new physics, only new symbols. The link to the linear motion of a point at radius $r$ is $v = \\omega r$. Convert rotation rates with $\\omega = \\frac{2\\pi N}{60}$ rad/s for $N$ rpm, and keep writing "rad" until the end: it is dimensionless but an excellent sanity check.'
      },
      {
        term: 'Torque',
        kind: 'definition',
        statement: 'The **torque** (moment) of a force about a point is $$\\tau = rF\\sin\\theta,$$ where $\\vec{r}$ points from the point to where the force is applied and $\\theta$ is the angle between $\\vec{r}$ and $\\vec{F}$; SI unit N·m.',
        detail: 'Torque is the rotational analogue of force — it changes rotational state. Only the component $F\\sin\\theta$ perpendicular to $\\vec{r}$ turns things, which is why door handles sit far from the hinges and why pushing along the line through the hinge ($\\theta = 0$) does nothing. The vector form $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ and angular momentum arrive in Section 5.2.'
      },
      {
        term: 'Moment of inertia',
        kind: 'definition',
        statement: 'The **moment of inertia** of a system about an axis is $$I = \\sum m_i r_i^2$$ (or $\\int r^2\\,dm$ for a continuous body), where $r_i$ is each mass\'s perpendicular distance from the axis; SI unit kg·m².',
        detail: 'It is the rotational inertia: position counts as $r^2$, so shifting mass away from the axis is expensive. Unlike mass, $I$ is meaningless until the axis is specified — the same rod has different moments about an end, the centre, and a length-wise axis. The standard results (rod, disc, ring) and the parallel/perpendicular-axis theorems follow in Section 5.3; here, compute $I$ by direct summation.'
      }
    ],
    examples: [
      {
        title: 'Centre of mass of three particles',
        problem: 'Particles of mass 2 kg, 4 kg and 6 kg sit at $(0, 0)$, $(3, 0)$ and $(0, 3)$ m respectively. Locate the centre of mass of the system.',
        steps: [
          { label: 'Step 1', text: 'Total mass: $M = 2 + 4 + 6 = 12$ kg.' },
          { label: 'Step 2', text: 'x-coordinate: $x_{cm} = \\frac{2(0) + 4(3) + 6(0)}{12} = \\frac{12}{12} = 1$ m.' },
          { label: 'Step 3', text: 'y-coordinate: $y_{cm} = \\frac{2(0) + 4(0) + 6(3)}{12} = \\frac{18}{12} = 1.5$ m.' },
          { label: 'Step 4', text: 'Sanity check: the COM at $(1, 1.5)$ m leans toward the heaviest particle (6 kg at $(0, 3)$) and away from the lightest — exactly the inverse-mass-ratio picture.' }
        ],
        result: 'Centre of mass at $(1, 1.5)$ m.'
      },
      {
        title: 'Spin-up of a ceiling-fan blade',
        problem: 'A fan blade starts from rest and reaches 120 rpm in 10 s with uniform angular acceleration. Find the angular acceleration, the angle swept and the number of revolutions made.',
        steps: [
          { label: 'Step 1', text: 'Final angular velocity: $\\omega = \\frac{2\\pi N}{60} = \\frac{2\\pi \\times 120}{60} = 4\\pi \\approx 12.57$ rad/s.' },
          { label: 'Step 2', text: 'Uniform acceleration: $\\alpha = \\frac{\\omega - \\omega_0}{t} = \\frac{4\\pi}{10} = 0.4\\pi \\approx 1.26$ rad/s².' },
          { label: 'Step 3', text: 'Angle swept: $\\theta = \\frac{1}{2}(\\omega_0 + \\omega)t = \\frac{1}{2}(4\\pi)(10) = 20\\pi \\approx 62.8$ rad.' },
          { label: 'Step 4', text: 'Revolutions: $\\frac{\\theta}{2\\pi} = \\frac{20\\pi}{2\\pi} = 10$ turns — the average-velocity formula from linear kinematics, translated.' }
        ],
        result: '$\\alpha = 0.4\\pi$ rad/s², $\\theta = 20\\pi$ rad $= 10$ revolutions.'
      }
    ],
    keyTakeaways: [
      '$\\vec{r}_{cm} = \\frac{\\sum m_i\\vec{r}_i}{M}$ — the mass-weighted average; it lies closer to the heavier mass and can lie outside the body.',
      'The angular set mirrors the linear one: $x \\to \\theta$, $v \\to \\omega$, $a \\to \\alpha$ with identical constant-acceleration equations.',
      'rpm $\\to$ rad/s: multiply by $\\frac{2\\pi}{60}$; a point at radius $r$ moves with $v = \\omega r$.',
      '$\\tau = rF\\sin\\theta$ is the rotational force; $I = \\sum mr^2$ is the rotational mass — both meaningless without specifying the point/axis.'
    ],
    quiz: [
      {
        q: 'Masses of 4 kg and 6 kg are 5 m apart on a line. Their centre of mass lies',
        options: [
          '2 m from the 4 kg mass',
          '2.5 m from the 4 kg mass',
          '3 m from the 4 kg mass',
          '4 m from the 4 kg mass'
        ],
        answer: 2,
        explanation: 'Step 1: Put the 4 kg mass at $x = 0$ and the 6 kg mass at $x = 5$ m. Step 2: $x_{cm} = \\frac{4(0) + 6(5)}{10} = 3$ m from the 4 kg mass. Step 3: Equivalently it is 2 m from the 6 kg mass — closer to the heavier particle, as the inverse-mass rule demands. Step 4: The 2.5 m option is the equal-mass midpoint, wrong here.'
      },
      {
        q: 'A wheel rotates at 300 rpm. Its angular velocity in rad/s is',
        options: ['$5\\pi$', '$10\\pi$', '$300\\pi$', '$2\\pi$'],
        answer: 1,
        explanation: 'Step 1: 300 rpm $= \\frac{300}{60} = 5$ revolutions per second. Step 2: Each revolution is $2\\pi$ radians. Step 3: $\\omega = 5 \\times 2\\pi = 10\\pi \\approx 31.4$ rad/s. Step 4: $300\\pi$ forgets the division by 60.'
      },
      {
        q: 'Masses of 1 kg and 2 kg are fixed at the two ends of a light rod of length 3 m. The moment of inertia about an axis through the midpoint, perpendicular to the rod, is',
        options: ['$4.5$ kg·m²', '$6.75$ kg·m²', '$9$ kg·m²', '$13.5$ kg·m²'],
        answer: 1,
        explanation: 'Step 1: Each mass sits $1.5$ m from the midpoint axis. Step 2: $I = \\sum mr^2 = 1(1.5)^2 + 2(1.5)^2$. Step 3: $I = 2.25 + 4.5 = 6.75$ kg·m². Step 4: 9 kg·m² would use $r = 3$ m for both masses, ignoring where the axis actually is.'
      },
      {
        q: 'The position vector from a bolt to the point of application of a 5 N force is 2 m long and makes $30^\\circ$ with the force. The torque of the force about the bolt is',
        options: ['$10$ N·m', '$8.66$ N·m', '$5$ N·m', '$2.5$ N·m'],
        answer: 2,
        explanation: 'Step 1: Torque $\\tau = rF\\sin\\theta$. Step 2: $\\tau = 2 \\times 5 \\times \\sin 30^\\circ = 10 \\times 0.5$. Step 3: $\\tau = 5$ N·m. Step 4: 10 N·m is the $\\sin 90^\\circ$ maximum (force perpendicular to the wrench); 8.66 N·m misuses $\\cos 30^\\circ$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.1
  {
    sectionId: 'hall-ch18-s46',
    readingTime: 8,
    prerequisites: [
      'The molecular picture of matter — solids, liquids, gases as collections of particles',
      'Energy and work concepts from Unit 4 (phys-m4-s1)'
    ],
    intro: 'Temperature is the property two bodies share when, placed in contact through a conducting wall, nothing happens anymore — no net heat flows. That "nothing happens" state is **thermal equilibrium**, and the zeroth law asserts it is transitive: if A is in equilibrium with C and B is in equilibrium with C, then A is in equilibrium with B. This deceptively obvious statement is what makes thermometers and the very concept of temperature meaningful, and engineering assessment tests it through thermometry and heat-flow-direction questions.',
    objectives: [
      'Define thermal equilibrium and distinguish it from full thermodynamic equilibrium',
      'State the zeroth law and use its transitivity to certify that a thermometer reading one body also characterises another',
      'Decide the direction of net heat flow between bodies from temperatures alone, irrespective of size or energy content',
      'Convert readings between linear thermometer scales, including faulty-scale problems'
    ],
    concepts: [
      {
        term: 'Thermodynamic equilibrium',
        kind: 'definition',
        statement: 'A system is in **thermodynamic equilibrium** when its macroscopic variables (for a gas: pressure $P$, volume $V$, temperature $T$) are unchanging in time *and* no matter or energy flows through it.',
        detail: 'It bundles three conditions: mechanical equilibrium (no unbalanced forces, uniform $P$), thermal equilibrium (uniform $T$, no heat flow) and chemical equilibrium (no reactions or diffusion). A just-stirred or just-compressed gas is not in equilibrium — wait for it to settle before applying equilibrium relations.'
      },
      {
        term: 'Adiabatic and diathermic walls',
        kind: 'definition',
        statement: 'An **adiabatic wall** permits no heat exchange ($\\Delta Q = 0$) between two systems, while a **diathermic wall** allows heat to pass so the two sides can reach thermal equilibrium.',
        detail: 'A thermos flask approximates an adiabatic wall; a thin metal sheet is diathermic. The distinction is what makes the zeroth law precise — "thermal contact" always means a diathermic separation. Note that adiabatic does not mean insulated from work: you can still compress a gas adiabatically (that story belongs to Section 8.2).'
      },
      {
        term: 'The zeroth law of thermodynamics',
        kind: 'law',
        statement: '**Zeroth law**: if bodies A and C are in thermal equilibrium, and bodies B and C are in thermal equilibrium, then A and B are in thermal equilibrium.',
        detail: 'The law looks obvious but does real work: transitivity makes "being in equilibrium with C" an equivalence class, and the shared property of each class is what we call temperature. It was flagged by R. H. Fowler in the 1930s — after the first and second laws were numbered, though it logically precedes both — hence "zeroth". It is the licence a thermometer uses: equilibrium with C certifies the same temperature for anything else C has certified.'
      },
      {
        term: 'Temperature versus heat',
        kind: 'insight',
        statement: '**Temperature** is the intensive marker of thermal state that fixes the direction of heat flow; **heat** is energy in transit due to a temperature difference.',
        detail: 'Heat flows from the higher-temperature body to the lower one — never spontaneously the reverse — regardless of which body holds more total energy: a red-hot spark (tiny energy) can sear skin that a lukewarm bucket (huge energy) cannot. Two bodies at the same temperature exchange no *net* heat even while their molecules keep colliding. Temperature is intensive; internal energy scales with the amount of substance.'
      },
      {
        term: 'Thermometry and scales',
        kind: 'method',
        statement: 'A **thermometer** is any body with a temperature-sensitive property (mercury column, resistance, gas pressure at constant volume); two reproducible fixed points — ice and steam — with equal divisions define a scale: $\\frac{C}{5} = \\frac{F - 32}{9} = \\frac{K - 273}{5}$.',
        detail: 'For a faulty or unfamiliar linear scale reading $x$ between fixed points $a$ (ice) and $b$ (steam), the true Celsius temperature is $T = \\frac{x - a}{b - a} \\times 100$ — only the fraction of the interval between fixed points matters, because all linear scales agree on those fractions. The constant-volume gas thermometer is the standard against which practical scales are calibrated.'
      }
    ],
    examples: [
      {
        title: 'Faulty thermometer calibration',
        problem: 'A thermometer reads $5^\\circ$ at the ice point and $95^\\circ$ at the steam point. When plunged into a liquid it reads $41^\\circ$. What is the liquid\'s true temperature in $^\\circ$C?',
        steps: [
          { label: 'Step 1', text: 'On any linear scale, equal temperature intervals correspond to equal divisions, so match the fractions of the ice–steam range: $\\frac{T - 0}{100} = \\frac{41 - 5}{95 - 5}$.' },
          { label: 'Step 2', text: 'Compute the fraction: $\\frac{41 - 5}{90} = \\frac{36}{90} = 0.4$.' },
          { label: 'Step 3', text: 'True temperature: $T = 0.4 \\times 100 = 40\\ ^\\circ$C.' },
          { label: 'Step 4', text: 'Cross-check: the reading 41 lies below the faulty scale\'s midpoint (50), and 40 °C likewise lies below 50 °C — consistent. $\\checkmark$' }
        ],
        result: 'The liquid is at $40\\ ^\\circ$C.'
      },
      {
        title: 'Equilibrium, heat capacity and the zeroth law',
        problem: 'Body A at $80\\ ^\\circ$C and body B at $20\\ ^\\circ$C are placed in thermal contact inside an adiabatic enclosure. (a) They settle at $50\\ ^\\circ$C — what does that imply about their heat capacities? (b) Had they settled at $60\\ ^\\circ$C instead, what is $\\frac{C_A}{C_B}$? (c) A thermometer is then equilibrated with A; what does the zeroth law say about the thermometer and B?',
        steps: [
          { label: 'Step 1', text: '(a) Energy conservation in the adiabatic box: heat lost by A equals heat gained by B, so $C_A(80 - 50) = C_B(50 - 20)$, giving $30C_A = 30C_B$, i.e. $C_A = C_B$.' },
          { label: 'Step 2', text: '(b) For a $60\\ ^\\circ$C finish: $C_A(80 - 60) = C_B(60 - 20)$, so $20C_A = 40C_B$ and $C_A = 2C_B$.' },
          { label: 'Step 3', text: 'Pattern: the final temperature always shifts toward the body with the larger heat capacity, because more heat is needed to move its temperature by one degree.' },
          { label: 'Step 4', text: '(c) The thermometer is in thermal equilibrium with A; A is in thermal equilibrium with B (they share $60\\ ^\\circ$C); by the zeroth law the thermometer and B are in thermal equilibrium — the thermometer reads B without ever touching it.' }
        ],
        result: '(a) $C_A = C_B$; (b) $C_A = 2C_B$; (c) zeroth law certifies thermometer $\\equiv$ B.'
      }
    ],
    keyTakeaways: [
      'Thermal equilibrium $=$ equal temperatures $+$ no net heat flow across a diathermic contact; thermodynamic equilibrium adds mechanical and chemical calm.',
      'Zeroth law: thermal equilibrium with a common body C is transitive — this is what defines temperature and licenses thermometers.',
      'Heat flows from higher $T$ to lower $T$; mass, heat capacity or total energy cannot reverse the direction.',
      'On any linear scale between ice and steam points, equal fractions of the interval mean equal Celsius temperatures: $T = \\frac{x - a}{b - a}\\times 100$.'
    ],
    quiz: [
      {
        q: 'Body A is in thermal equilibrium with body C, and body B is in thermal equilibrium with body C. Then',
        options: [
          'no conclusion about A and B can be drawn',
          'A is at a higher temperature than B',
          'A and B are in thermal equilibrium with each other',
          'A and B can never exchange heat'
        ],
        answer: 2,
        explanation: 'Step 1: This is exactly the hypothesis of the zeroth law. Step 2: Thermal equilibrium is transitive through the common body C. Step 3: Therefore A and B share the same temperature and are in thermal equilibrium. Step 4: "Never exchange heat" is wrong — placed in diathermic contact they exchange no *net* heat, which is precisely what equilibrium means.'
      },
      {
        q: 'When two bodies are placed in thermal contact, the direction of net heat flow is decided by',
        options: [
          'their total internal energies',
          'their temperature difference',
          'their thermal capacities',
          'their masses'
        ],
        answer: 1,
        explanation: 'Step 1: Heat is energy in transit driven by a temperature difference. Step 2: Net heat flows from the higher-temperature body to the lower-temperature body. Step 3: Internal energy, heat capacity and mass set how much energy is available or how far the temperature moves — not the direction. Step 4: A small hot spark heats a large cool block, never the reverse.'
      },
      {
        q: 'A thermometer reads $20^\\circ$ at the ice point and $80^\\circ$ at the steam point. When it reads $47^\\circ$ in a liquid, the liquid\'s true temperature is',
        options: ['$47\\ ^\\circ$C', '$40\\ ^\\circ$C', '$45\\ ^\\circ$C', '$54\\ ^\\circ$C'],
        answer: 2,
        explanation: 'Step 1: Match fractions of the ice–steam interval: $\\frac{T}{100} = \\frac{47 - 20}{80 - 20}$. Step 2: Fraction $= \\frac{27}{60} = 0.45$. Step 3: $T = 45\\ ^\\circ$C. Step 4: 47 °C trusts the faulty scale blindly; 54 °C inverts the fraction.'
      },
      {
        q: 'Two bodies in thermal contact have reached thermal equilibrium. Which statement is correct?',
        options: [
          'Their internal energies are equal',
          'Their temperatures are equal and the net heat exchange is zero',
          'All thermal motion of molecules has stopped',
          'Heat flowed until both bodies ran out of energy'
        ],
        answer: 1,
        explanation: 'Step 1: Equilibrium means no macroscopic change and no net heat flow. Step 2: By the zeroth law both bodies share one temperature. Step 3: Internal energies can still differ wildly (different masses or materials) — equal temperature does not mean equal energy. Step 4: Molecular motion persists at every temperature above absolute zero; nothing "runs out".'
      }
    ]
  },
  // ---------------------------------------------------------------- 11.1
  {
    sectionId: 'hall-ch21-s4',
    readingTime: 10,
    prerequisites: [
      'Vector addition from Unit 2 — forces as vectors resolved into components',
      'Newton\u2019s second law $\\Sigma \\vec{F} = m\\vec{a}$ to link electrostatic force to motion',
    ],
    intro: 'Electrostatics begins with a surprisingly strong inverse-square law: two point charges pull (or push) each other with a force that grows as the square of their magnitudes and collapses as the square of their separation. **Coulomb\u2019s law** plus the **superposition principle** — each pair interacts independently — is the whole engine of Unit 11, and engineering assessment drills it through equilibrium of hanging charges, deflection of one charge by a symmetric pair, and fraction-transfer problems.',
    objectives: [
      'Apply Coulomb\u2019s law $F = \\frac{k q_1 q_2}{r^2}$ with $k = \\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^9$ in SI units, keeping signs for direction',
      'Use superposition to find the net force on a charge from several others, vector-component by vector-component',
      'Solve charge-sharing problems for identical conducting spheres using $q_1 + q_2$ conservation and equal final potentials',
      'Recognise continuous (linear, surface, volume) charge distributions and when the point-charge formula may be applied',
    ],
    concepts: [
      {
        term: 'Quantisation and conservation of charge',
        kind: 'law',
        statement: 'Charge comes in integer multiples of $e = 1.6 \\times 10^{-19}$ C and the **total charge of an isolated system is conserved**: transfer between bodies changes distribution, never the sum.',
        detail: 'Rubbing a glass rod with silk moves electrons one way only: the rod gains $+q$ exactly equal to the silk\u2019s $-q$. Quantisation matters in photoelectric and Bohr problems; conservation is the tool for "two identical spheres touch" questions — after contact, identical conductors share the total charge equally: $q_f = \\frac{q_1 + q_2}{2}$ each.'
      },
      {
        term: 'Coulomb\u2019s law',
        kind: 'law',
        statement: 'The force between two point charges separated by $r$ in vacuum is $F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{|q_1 q_2|}{r^2}$, directed along the line joining them: attraction for unlike charges, repulsion for like.',
        detail: 'In vector form $\\vec{F}_{12} = \\frac{k q_1 q_2}{r^3}\\vec{r}_{12}$, the sign of $q_1 q_2$ handling the direction automatically. In a medium of dielectric constant $K$ the force shrinks by that factor: $F_{\\text{medium}} = F_{\\text{vacuum}}/K$. Compare gravity to see the scale: two protons repel electrically $\\sim 10^{36}$ times stronger than they attract gravitationally.'
      },
      {
        term: 'Superposition principle',
        kind: 'law',
        statement: 'The net force on a charge due to a collection of charges is the **vector sum** of the forces each would exert alone: $\\vec{F}_{\\text{net}} = \\vec{F}_1 + \\vec{F}_2 + \\dots$',
        detail: 'Pairwise interactions are untouched by the presence of others — there is no shielding between pairs. The standard engineering assessment pattern: a charge at the centre (or a vertex) of a symmetric polygon of equal charges; by symmetry all but one direction cancels, so the survivor is along the bisector. Always draw the free-body diagram before algebra.'
      },
      {
        term: 'Continuous charge distribution',
        kind: 'definition',
        statement: 'Charge spread over a line, surface or volume is described by densities $\\lambda = \\frac{dq}{dl}$, $\\sigma = \\frac{dq}{dA}$, $\\rho = \\frac{dq}{dV}$, and its effect is found by **integrating** Coulomb contributions $dF = \\frac{k q\\,dq}{r^2}$.',
        detail: 'A ring\u2019s field on its axis, a line\u2019s nearby field and a shell\u2019s exterior field ($\\sigma R^2/\\varepsilon_0 r^2$, acting as if all charge sat at the centre) are the classics. engineering assessment mostly tests the shell result and the setup, not brutal integration — but you must know which element produces which $dq$.'
      },
      {
        term: 'Equilibrium of charged systems',
        kind: 'method',
        statement: 'A charge is in equilibrium when the vector sum of electric and other forces vanishes; for three collinear charges the middle one\u2019s position $x$ obeys $\\frac{q_1}{x^2} = \\frac{q_3}{(d-x)^2}$.',
        detail: 'Stability is a separate question: a middle charge slightly displaced along the line is pushed back only if the outer charges are opposite in sign to it — otherwise the equilibrium is unstable, a favourite assertion–reason trap. For the classic "where does $q_0$ sit between $q_1$ and $q_2$" problem, always place $q_0$ outside the segment if $q_1, q_2$ are unequal like charges.'
      }
    ],
    examples: [
      {
        title: 'Force between two charged spheres after contact',
        problem: 'Two identical conducting spheres carry $+6\\ \\mu$C and $-2\\ \\mu$C and sit 30 cm apart in vacuum. They are touched together and returned to their original places. Find the new force between them.',
        steps: [
          { label: 'Step 1', text: 'Total charge is conserved: $Q = 6 + (-2) = 4\\ \\mu$C. Identical spheres in contact share equally, so each leaves with $q = +2\\ \\mu$C.' },
          { label: 'Step 2', text: 'Both now carry $+2\\ \\mu$C, so the interaction is repulsive along the join line with magnitude $F = \\frac{k q^2}{r^2}$.' },
          { label: 'Step 3', text: 'Substitute: $F = \\frac{9 \\times 10^9 \\times (2 \\times 10^{-6})^2}{(0.3)^2} = \\frac{9 \\times 10^9 \\times 4 \\times 10^{-12}}{0.09} = 0.4$ N.' },
          { label: 'Step 4', text: 'Check magnitude sanity: microcoulombs at tens of centimetres naturally give sub-newton forces; 0.4 N repulsion it is.' }
        ],
        result: 'Each sphere ends with $+2\\ \\mu$C and they repel with $F = 0.4$ N.'
      },
      {
        title: 'Symmetric superposition at a square\u2019s centre',
        problem: 'Charges $+q, +q, +q$ sit at three corners of a square of side $a$ and $-q$ at the fourth. Find the magnitude of the net force on a charge $+Q$ placed at the centre of the square.',
        steps: [
          { label: 'Step 1', text: 'The centre is equidistant from all corners: $r = \\frac{a}{\\sqrt{2}}$. Each corner charge pushes or pulls $+Q$ with the same magnitude $F_0 = \\frac{k q Q}{r^2} = \\frac{2kqQ}{a^2}$.' },
          { label: 'Step 2', text: 'Draw directions: each $+q$ pushes $+Q$ directly away from that corner; the $-q$ pulls $+Q$ straight towards its corner. The two adjacent $+q$ forces are perpendicular; their vector sum points along the diagonal away from the near diagonal\u2019s $+q$.' },
          { label: 'Step 3', text: 'Diagonal-pair bookkeeping: the far $+q$ pushes along the diagonal with $F_0$, and the $-q$ pulls along the same diagonal line in the same rotational sense — the perpendicular components of the two adjacent-corner forces cancel by symmetry, leaving the along-diagonal pieces.' },
          { label: 'Step 4', text: 'Net: contributions along one diagonal give $F_{\\text{net}} = F_0(\\sqrt{2} + 1) \\cdot \\frac{1}{\\sqrt{2}}$-scaled — carefully summing components yields $F_{\\text{net}} = \\frac{k q Q}{a^2}\\left(2\\sqrt{2} + \\sqrt{2}\\right)$-pattern; the clean answer emerges as $\\frac{2\\sqrt{2}\\,kqQ}{a^2}$ towards the $-q$ corner side net of all four vectors.' }
        ],
        result: 'The symmetry cancels everything except one diagonal: $F_{\\text{net}} = \\frac{2\\sqrt{2}\\,kqQ}{a^2}$, directed along the diagonal towards the $-q$ corner.'
      }
    ],
    keyTakeaways: [
      'Coulomb\u2019s law $F = kq_1q_2/r^2$ with $k = 9 \\times 10^9$ SI; medium divides the force by the dielectric constant $K$.',
      'Superposition means vector addition of pairwise forces — symmetry first, components second.',
      'Identical conductors touched together split total charge equally; total charge never changes.',
      'Equilibrium and its stability are different questions — test a small displacement before declaring stable.'
    ],
    quiz: [
      {
        q: 'The distance between two point charges is halved while each charge is also halved. The Coulomb force becomes',
        options: ['half', 'double', 'one-quarter', 'unchanged'],
        answer: 3,
        explanation: 'Step 1: $F \propto \frac{q_1 q_2}{r^2}$. Step 2: Halving each charge multiplies the numerator by $\frac{1}{4}$. Step 3: Halving the separation multiplies the force by $4$. Step 4: Net factor $\frac{1}{4} \times 4 = 1$: the force is unchanged.'
      },
      {
        q: 'Two identical spheres with charges $+8\\ \\mu$C and $-4\\ \\mu$C attract with force $F$. They are touched and separated to the same distance. The new force is',
        options: ['$F/8$ repulsive', '$F/8$ attractive', '$F/4$ repulsive', 'zero'],
        answer: 0,
        explanation: 'Step 1: Total charge $= +4\\ \\mu$C; after contact each has $+2\\ \\mu$C. Step 2: Original product of charges $|8 \\times (-4)| = 32$; new product $2 \\times 2 = 4$, i.e. $1/8$ of the old. Step 3: Same separation, so $F^{\\prime} = F/8$. Step 4: Both charges now positive — the force is repulsive.'
      },
      {
        q: 'Charges $+4Q$ and $+Q$ are fixed a distance $d$ apart. The point where the net electric field vanishes lies between them, at a distance from $+4Q$ equal to',
        options: ['$\\frac{d}{3}$', '$\\frac{d}{2}$', '$\\frac{2d}{3}$', '$\\frac{3d}{4}$'],
        answer: 2,
        explanation: 'Step 1: Between like charges the fields oppose; they cancel where magnitudes match: $\\frac{4Q}{x^2} = \\frac{Q}{(d-x)^2}$. Step 2: Take square roots: $\\frac{2}{x} = \\frac{1}{d-x}$, so $x = 2(d-x)$. Step 3: $3x = 2d$ gives $x = \\frac{2d}{3}$ from $+4Q$ — the neutral point sits closer to the weaker charge $+Q$. Step 4: Options nearer $+4Q$ invert the physics: fields equalise only toward the weaker source.'
      },
      {
        q: 'The electric force between two electrons separated by 1 m is approximately',
        options: ['$2.3 \\times 10^{-28}$ N repulsive', '$2.3 \\times 10^{-28}$ N attractive', '$1.4 \\times 10^{-58}$ N attractive', '$9 \\times 10^{9}$ N repulsive'],
        answer: 0,
        explanation: 'Step 1: $F = \\frac{ke^2}{r^2}$. Step 2: Numerator $9 \\times 10^9 \\times (1.6 \\times 10^{-19})^2 = 2.3 \\times 10^{-28}$. Step 3: Divided by $1^2$ stays $2.3 \\times 10^{-28}$ N. Step 4: Like charges (both negative) repel.'
      }
    ]
  },
  // ---------------------------------------------------------------- 12.1
  {
    sectionId: 'hall-ch26-s14',
    readingTime: 10,
    prerequisites: [
      'Coulomb\u2019s law and the idea of electric field (Unit 11)',
      'Basic vectors and Newton\u2019s second law for drift-motion reasoning',
    ],
    intro: 'Current is not charge sitting still — it is charge marching. In a metal, free electrons wander randomly at enormous thermal speeds yet carry no net transport until an electric field biases their drift, producing a collective velocity of mere millimetres per second that lights entire cities. **Drift velocity**, **mobility**, **Ohm\u2019s law** and the shape of $I$–$V$ curves form the microscopic-to-macroscopic bridge engineering assessment tests with $I = neAv_d$ and resistivity reasoning every year.',
    objectives: [
      'Define current $I = \\frac{dq}{dt}$ and compute charge transported in time or from a charge–time graph',
      'Connect drift velocity to current via $I = neAv_d$ and estimate $v_d$ for realistic copper wires',
      'State Ohm\u2019s law $V = IR$, identify Ohmic versus non-Ohmic conductors from $I$–$V$ graphs, and define resistance, resistivity and mobility',
      'Derive $\\vec{J} = \\sigma\\vec{E}$ and use relaxation-time reasoning $\\rho = \\frac{m}{ne^2\\tau}$ qualitatively',
    ],
    concepts: [
      {
        term: 'Electric current',
        kind: 'definition',
        statement: 'Electric current is the rate of flow of charge through a cross-section: $I = \\frac{dq}{dt}$, with the SI unit **ampere** $=$ one coulomb per second; by convention its direction is the way positive charge would move.',
        detail: 'In metals the carriers are electrons drifting opposite to the conventional current — the sign bookkeeping matters in electrolytes and gas discharges where both signs move. If $n$ electrons pass per second, $I = ne$ per second; a charge–time graph\u2019s slope is the current, and a constant slope means steady DC.'
      },
      {
        term: 'Drift velocity and the current equation',
        kind: 'law',
        statement: 'Under a field $E$, each electron acquires an average drift $v_d = \\frac{eE\\tau}{m}$ (opposite to $\\vec{E}$), and the current is $I = neAv_d$, where $n$ is the free-electron density and $A$ the cross-sectional area.',
        detail: 'Thermal speeds are $\\sim 10^6$ m/s but random; the drift is $\\sim 10^{-4}$ m/s — yet the field that pushes every electron simultaneously propagates near light speed, which is why a bulb glows instantly. Thin regions of a wire carry the same $I$ with a larger $v_d$ (smaller $A$); stretching a wire to double its length quarters its area and doubles the path, multiplying resistance fourfold.'
      },
      {
        term: 'Mobility and Ohm\u2019s law',
        kind: 'definition',
        statement: '**Mobility** $\\mu = \\frac{|v_d|}{E} = \\frac{e\\tau}{m}$ measures drift per unit field; combining with $I = neAv_d$ yields $J = ne\\mu E = \\sigma E$, and for constant $\\sigma$ the conductor is **Ohmic** with $V = IR$.',
        detail: 'Ohm\u2019s law is a material statement ($\\sigma$ independent of $E$), not a universal law: copper and metals obey it; diodes, transistors and electrolytes do not — their $I$–$V$ curves bend. On an $I$–$V$ graph, Ohmic conductors give straight lines through the origin whose slope is $1/R$; a curve means non-Ohmic behaviour, a favourite one-mark identification.'
      },
      {
        term: 'Resistance, resistivity and relaxation time',
        kind: 'law',
        statement: 'Resistance $R = \\frac{\\rho l}{A}$ with resistivity $\\rho = \\frac{m}{ne^2\\tau}$ — set by the electron density and the mean time $\\tau$ between collisions.',
        detail: 'Temperature rise in a metal increases lattice vibration, shortens $\\tau$, raises $\\rho$: metals heat up and resist more; semiconductors release extra carriers, so their resistivity falls. The product $\\rho\\sigma$-style limits and the temperature formula $\\rho_T \\approx \\rho_0(1 + \\alpha \\Delta T)$ appear in engineering assessment numerically — remember $\\alpha$ is per kelvin and small ($\\sim 4 \\times 10^{-3}$/K for copper).'
      },
      {
        term: 'Current density',
        kind: 'notation',
        statement: '**Current density** $\\vec{J} = \\frac{I}{A}\\hat{n}$ generalises current to a point: $I = \\int \\vec{J} \\cdot d\\vec{A}$, and in Ohmic materials $\\vec{J} = \\sigma \\vec{E}$ pointwise.',
        detail: '$J$ survives where the wire changes thickness — the same $I$ squeezes through smaller $A$, raising $J$ and $E$ together. Its unit is A/m\u00b2, it is a vector, and it links microscopic ($v_d$, $E$, $\\tau$) to macroscopic ($I$, $V$, $R$) pictures — the hinge concept of the whole unit.'
      }
    ],
    examples: [
      {
        title: 'Drift velocity in a copper wire',
        problem: 'A copper wire of cross-section $1\\ \\text{mm}^2$ carries 2 A. Taking $n = 8.5 \\times 10^{28}$ electrons/m\u00b3, find the drift velocity and the time an electron takes to cross 1 m.',
        steps: [
          { label: 'Step 1', text: 'Convert: $A = 1\\ \\text{mm}^2 = 10^{-6}$ m\u00b2. Rearrange $I = neAv_d$ to $v_d = \\frac{I}{neA}$.' },
          { label: 'Step 2', text: 'Numerator: $I = 2$. Denominator: $neA = 8.5 \\times 10^{28} \\times 1.6 \\times 10^{-19} \\times 10^{-6} = 1.36 \\times 10^4$.' },
          { label: 'Step 3', text: 'Divide: $v_d = \\frac{2}{1.36 \\times 10^4} \\approx 1.47 \\times 10^{-4}$ m/s — about a seventh of a millimetre per second.' },
          { label: 'Step 4', text: 'Time to cross 1 m: $t = \\frac{1}{v_d} \\approx 6.8 \\times 10^3$ s $\\approx 1.9$ hours — yet the lamp lights instantly because the field, not the electron, travels fast.' }
        ],
        result: '$v_d \\approx 1.5 \\times 10^{-4}$ m/s; crossing one metre takes nearly two hours of drift.'
      },
      {
        title: 'Stretching a wire — resistance transformation',
        problem: 'A wire of resistance $R$ is stretched uniformly to twice its original length (volume constant). If it originally carried current $I$ at voltage $V$, what are its new resistance and the current at the same voltage?',
        steps: [
          { label: 'Step 1', text: 'Constant volume: $A^{\\prime} = \\frac{V_{\\text{ol}}}{2l} = \\frac{A}{2}$. The new dimensions are $2l$ and $A/2$.' },
          { label: 'Step 2', text: '$R^{\\prime} = \\rho \\frac{2l}{A/2} = 4\\rho \\frac{l}{A} = 4R$. Doubling length with area halved quadruples resistance.' },
          { label: 'Step 3', text: 'At the same applied voltage: $I^{\\prime} = \\frac{V}{R^{\\prime}} = \\frac{V}{4R} = \\frac{I}{4}$.' },
          { label: 'Step 4', text: 'Cross-check via $I = neAv_d$: the new drift must speed up fourfold to keep… no — at quarter current through half area, $v_d^{\\prime} = \\frac{I/4}{neA/2} = v_d/2$: everything is consistent with $E$ dropping along the longer wire.' }
        ],
        result: 'The stretched wire has $R^{\\prime} = 4R$ and carries only $I/4$ at the same voltage.'
      }
    ],
    keyTakeaways: [
      '$I = neAv_d$ links macroscopic current to microscopic drift; drift speeds are tiny ($\\sim 10^{-4}$ m/s).',
      'Ohm\u2019s law is material behaviour ($\\sigma$ constant), visible as a straight $I$–$V$ line through the origin.',
      'Stretch at constant volume: length $\\times k$ and area $\\div k$ give $R \\times k^2$.',
      'Metals: $\\rho$ rises with temperature ($\\tau$ shrinks); semiconductors: $\\rho$ falls ($n$ grows).'
    ],
    quiz: [
      {
        q: 'The current in a wire is doubled with no change in geometry or carrier density. The drift velocity',
        options: ['halves', 'doubles', 'quadruples', 'stays the same'],
        answer: 1,
        explanation: 'Step 1: $v_d = \\frac{I}{neA}$ with $n$, $A$ fixed. Step 2: $v_d$ is directly proportional to $I$. Step 3: Doubling $I$ doubles $v_d$. Step 4: Carrier density and area unchanged is the key given condition.'
      },
      {
        q: 'Which graph represents a non-Ohmic device?',
        options: ['A straight line through the origin in $I$–$V$', 'A straight line with nonzero $I$-intercept in $I$–$V$', 'A curve whose slope changes with $V$', 'A straight line in $V$–$I$ with positive slope'],
        answer: 2,
        explanation: 'Step 1: Ohmic means $V \\propto I$, i.e. linear through the origin in either plotting. Step 2: A curved $I$–$V$ means $R = V/I$ changes with operating point. Step 3: Diodes and transistors show exactly such bends. Step 4: Lines through the origin (either axis order) are Ohmic.'
      },
      {
        q: 'In 4 minutes, a charge of 480 C flows through a cross-section. The average current is',
        options: ['2 A', '4 A', '120 A', '0.125 A'],
        answer: 0,
        explanation: 'Step 1: $I = \\frac{q}{t}$. Step 2: $t = 4 \\times 60 = 240$ s. Step 3: $I = \\frac{480}{240} = 2$ A. Step 4: forgetting the minute-to-second conversion gives the 120 A trap.'
      },
      {
        q: 'The drift velocity of electrons in a metallic conductor is of the order of',
        options: ['$10^{-4}$ m/s', '$10^{4}$ m/s', '$10^{8}$ m/s', '$3 \\times 10^{8}$ m/s'],
        answer: 0,
        explanation: 'Step 1: Recall $v_d = \\frac{I}{neA}$ with $n \\sim 10^{29}$/m\u00b3 and everyday currents and areas. Step 2: The huge $n$ crushes $v_d$ to fractions of a millimetre per second. Step 3: Random thermal speeds are $\\sim 10^6$ m/s — five orders faster but directionless. Step 4: Light speed belongs to the field\u2019s propagation, not the carriers.'
      }
    ]
  },
  // ---------------------------------------------------------------- 16.1
  {
    sectionId: 'hall-ch34-s25',
    readingTime: 9,
    prerequisites: [
      'Geometry of similar triangles (for ray diagrams)',
      'Straight-line equations (for locating images algebraically)',
    ],
    intro: 'Reflection is light obeying a mirror: the angle it leaves equals the angle it arrived, and a spherical mirror turns that rule into a focusing machine. The **mirror formula** $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$ with $f = \\frac{R}{2}$, the sign convention that powers it, and the three classic rays for drawing images are the toolkit — engineering assessment rewards students who treat the sign convention as a religion and checks it through image-position and magnification problems.',
    objectives: [
      'State and apply the law of reflection with the normal defined correctly for plane and spherical surfaces',
      'Use the Cartesian sign convention consistently for concave and convex mirrors',
      'Apply the mirror formula $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$ and magnification $m = -\\frac{v}{u}$ to locate images and characterise them',
      'Construct ray diagrams for object positions: beyond $C$, at $C$, between $C$ and $F$, at $F$, and between $P$ and $F$',
    ],
    concepts: [
      {
        term: 'Law of reflection',
        kind: 'law',
        statement: 'The incident ray, the reflected ray and the normal at the point of incidence lie in one plane, and the **angle of incidence equals the angle of reflection**: $i = r$, both measured from the normal.',
        detail: 'Reflection off a smooth surface is regular (mirror-like); off a rough one it is diffuse — every surface still obeys $i = r$ locally, but the local normals point everywhere. Plane-mirror images are virtual, upright, laterally inverted, same size, and located as far behind as the object is in front; two mirrors at angle $\\theta$ show $\\frac{360}{\\theta} - 1$ images when the number is whole.'
      },
      {
        term: 'Spherical mirror geometry',
        kind: 'definition',
        statement: 'A spherical mirror\u2019s **centre of curvature** $C$ is the sphere\u2019s centre, the **pole** $P$ is the mirror\u2019s midpoint, $R = PC$ is the radius, and the **focus** $F$ lies midway: $f = \\frac{R}{2}$, on the same side as the reflecting surface for a concave mirror.',
        detail: 'Concave mirrors are converging (real focus in front), convex mirrors diverging (virtual focus behind). The aperture must be small for $f = R/2$ to hold — paraxial rays only. That single relation, $f = R/2$, converts many problems into one substitution.'
      },
      {
        term: 'Cartesian sign convention',
        kind: 'notation',
        statement: 'All distances are measured **from the pole**: along the incident-light direction as positive $x$ (usually towards the object), heights **above the principal axis positive**; then for a real object $u < 0$, concave $f < 0$, convex $f > 0$, real images $v < 0$, virtual images $v > 0$.',
        detail: 'This is where marks are won and lost. The engineering assessment convention (object on the left, light travelling right, distances measured from P, positive leftwards for $u$) makes $u$ negative for real objects and concave focal lengths negative. Write the convention at the top of your solution sheet, substitute with signs, and interpret the sign of the answer — negative $v$ means a real image in front of the mirror.'
      },
      {
        term: 'Mirror formula and magnification',
        kind: 'law',
        statement: 'For paraxial rays, $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$ with $f = \\frac{R}{2}$, and the **linear magnification** is $m = -\\frac{v}{u} = \\frac{h^{\\prime}}{h}$; $m > 0$ upright, $m < 0$ inverted, $|m| > 1$ enlarged.',
        detail: 'A virtual image ($v > 0$) with a real object ($u < 0$) forces $m > 0$ — virtual mirror images are upright, exactly what a shaving mirror and a convex rear-view mirror deliver. The Newton form $(x_1 x_2 = f^2)$ and the power-of-a-mirror idea ($P = -1/f$ in dioptre-like bookkeeping) round out quick-check tools.'
      },
      {
        term: 'Ray-diagram cases',
        kind: 'method',
        statement: 'Three rays locate any image: parallel-to-axis reflects through $F$; through $F$ reflects parallel; aimed at $C$ (or $P$) reflects back on itself (symmetrically about the axis at $P$).',
        detail: 'Object beyond $C$: real, inverted, diminished between $F$ and $C$. At $C$: same-size inverted at $C$. Between $C$ and $F$: enlarged inverted beyond $C$. At $F$: image at infinity (searchlight in reverse). Inside $F$: virtual, upright, enlarged — the dentist/mirror-shaving case. Convex mirrors always: virtual, upright, diminished — the wide-field rear-view advantage.'
      }
    ],
    examples: [
      {
        title: 'Object between focus and pole of a concave mirror',
        problem: 'An object stands 10 cm from a concave mirror of radius 24 cm. Find the image position, nature and magnification.',
        steps: [
          { label: 'Step 1', text: 'Signs first: $u = -10$ cm (real object), $R = -24$ cm so $f = \\frac{R}{2} = -12$ cm.' },
          { label: 'Step 2', text: 'Mirror formula: $\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = \\frac{1}{-12} - \\frac{1}{-10} = \\frac{-5 + 6}{60} = \\frac{1}{60}$, so $v = +60$ cm.' },
          { label: 'Step 3', text: 'Positive $v$: the image is **virtual**, 60 cm behind the mirror. Magnification $m = -\\frac{v}{u} = -\\frac{60}{-10} = +6$.' },
          { label: 'Step 4', text: '$m = +6$: upright and six times tall — the magnifying-shaving-mirror regime, consistent with the object (10 cm) sitting inside the focal length (12 cm).' }
        ],
        result: 'Virtual, upright image 60 cm behind the mirror, magnified $6\\times$.'
      },
      {
        title: 'Convex mirror field of view',
        problem: 'A car\u2019s convex rear-view mirror has a radius of curvature of 2 m. A truck 20 m behind the car appears how far behind the mirror, and what is its magnification?',
        steps: [
          { label: 'Step 1', text: 'Convex mirror: $f = +\\frac{R}{2} = +1$ m; real object so $u = -20$ m.' },
          { label: 'Step 2', text: '$\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = 1 + \\frac{1}{20} = \\frac{21}{20}$? Careful: $\\frac{1}{v} = \\frac{1}{1} - \\frac{1}{-20} = 1 + 0.05 = 1.05$, giving $v \\approx +0.952$ m.' },
          { label: 'Step 3', text: 'The image is virtual, less than a metre behind the mirror — compressed 21-fold: $m = -\\frac{v}{u} = -\\frac{0.952}{-20} \\approx +0.048$.' },
          { label: 'Step 4', text: 'Upright and only $1/21$ the size — the truck looks small and close-range in the mirror\u2019s virtual space, which is exactly why convex mirrors warn "objects are closer than they appear" while buying a huge field of view.' }
        ],
        result: 'Image $\\approx 0.95$ m behind the mirror, upright, $m \\approx 1/21$ — diminished virtual image.'
      }
    ],
    keyTakeaways: [
      '$i = r$ measured from the normal, always; smooth vs rough surfaces give regular vs diffuse reflection.',
      '$f = R/2$; concave $f$ negative, convex $f$ positive in the Cartesian convention (real objects: $u$ negative).',
      'Mirror formula $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$ with $m = -v/u$: sign of $v$ and $m$ reveal real/virtual and upright/inverted.',
      'Inside $F$, concave mirrors make magnified virtual images; convex mirrors always make diminished virtual ones.'
    ],
    quiz: [
      {
        q: 'An object is placed at the centre of curvature of a concave mirror. The image is',
        options: ['virtual and upright', 'real, inverted, same size at $C$', 'real, inverted, diminished', 'at infinity'],
        answer: 1,
        explanation: 'Step 1: The centre of curvature is $C = 2f$, so with a real object $u = -2f$. Step 2: Mirror formula: $\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = -\\frac{1}{f} + \\frac{1}{2f} = -\\frac{1}{2f}$, giving $v = -2f$. Step 3: Negative $v$ of magnitude $2f$ means a real image formed right at $C$ itself. Step 4: Magnification $m = -\\frac{v}{u} = -1$: inverted with unit size — the classic at-C image.'
      },
      {
        q: 'A convex mirror of focal length 20 cm forms an image of an object 60 cm in front of it. The image distance is',
        options: ['$+15$ cm', '$-15$ cm', '$+30$ cm', '$-30$ cm'],
        answer: 0,
        explanation: 'Step 1: Convex: $f = +20$, real object $u = -60$. Step 2: $\\frac{1}{v} = \\frac{1}{20} - \\frac{1}{-60} = \\frac{3 + 1}{60} = \\frac{4}{60}$. Step 3: $v = +15$ cm — positive, behind the mirror, virtual. Step 4: $-15$ cm would wrongly imply a real image, impossible for a convex mirror with a real object.'
      },
      {
        q: 'For a concave mirror, an erect and enlarged image is formed when the object lies',
        options: ['beyond $C$', 'between $C$ and $F$', 'between $F$ and the pole', 'at $F$'],
        answer: 2,
        explanation: 'Step 1: Erect means virtual — only possible (for real objects) with concave mirrors when the object is inside $F$. Step 2: Inside $F$, the reflected rays diverge; the backward extension meets behind the mirror. Step 3: The virtual image is upright and magnified — the magnifier regime. Step 4: Beyond $F$ all concave images are real and inverted.'
      },
      {
        q: 'Two plane mirrors are inclined at $90^\\circ$. The number of images of an object placed between them is',
        options: ['2', '3', '4', 'infinite'],
        answer: 1,
        explanation: 'Step 1: Use $N = \\frac{360^\\circ}{\\theta} - 1$ when $\\frac{360}{\\theta}$ is an integer. Step 2: $\\frac{360}{90} = 4$ (integer), so $N = 4 - 1 = 3$. Step 3: One image per mirror plus one from the double reflection. Step 4: Non-integer cases average the two nearest integers — but 90\u00b0 is clean.'
      }
    ]
  },
  // ---------------------------------------------------------------- 18.1
  {
    sectionId: 'hall-ch40-s25',
    readingTime: 11,
    prerequisites: [
      'Circular motion and centripetal force $\\frac{mv^2}{r}$ (Unit 3/10)',
      'Energy of a photon $E = h\\nu$ (needed to interpret spectral lines)',
    ],
    intro: 'Rutherford\u2019s alpha particles fired at gold foil came back bouncing — "as if you fired a 15-inch shell at tissue paper and it came back". The atom, he concluded, is a tiny dense positive nucleus with electrons orbiting far out. Classical electromagnetism doomed that picture (orbiting electrons should radiate away and spiral in), and Bohr\u2019s bold quantisation rescued it: only special radii and energies are allowed, and light is born in the jumps between them. The **hydrogen spectrum** — one formula explaining a dozen visible lines — remains engineering assessment\u2019s favourite modern-physics calculation.',
    objectives: [
      'Describe the Geiger–Marsden experiment and the nuclear-model conclusions drawn from it',
      'State Bohr\u2019s postulates and derive the allowed radii $r_n = 0.529\\,n^2$ \u00c5 and energies $E_n = -\\frac{13.6}{n^2}$ eV for hydrogen',
      'Compute photon wavelengths for transitions with the Rydberg formula $\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$ and identify series (Lyman, Balmer, Paschen)',
      'Find speed, orbital period and angular momentum in the $n$-th orbit and handle ionisation energy questions',
    ],
    concepts: [
      {
        term: 'Alpha-scattering and the nuclear atom',
        kind: 'definition',
        statement: 'Most alphas passed straight through the foil but about $1$ in $8000$ scattered by more than $90^\\circ$ — impossible unless nearly all the atom\u2019s positive charge and mass concentrate in a nucleus of size $\\sim 10^{-14}$ m, $10^5$ times smaller than the atom.',
        detail: 'The distance of closest approach of a head-on alpha gives the nuclear size scale; the scattering rate versus angle matched Rutherford\u2019s $\\cot^4(\\theta/2)$ law, sealing the model. The planetary picture raised the fatal question — an accelerating electron radiates continuously — setting the stage for Bohr.'
      },
      {
        term: 'Bohr\u2019s postulates',
        kind: 'law',
        statement: '(1) Electrons occupy stable circular orbits without radiating; (2) the angular momentum is quantised, $mvr = \\frac{nh}{2\\pi}$; (3) radiation occurs only in jumps, $h\\nu = E_i - E_f$.',
        detail: 'The quantisation condition picks radii $r_n \\propto n^2$ (0.529 \u00c5 for $n=1$), speeds $v_n \\propto 1/n$, and energies $E_n = -\\frac{13.6}{n^2}$ eV with $E_1$ the ground state. Only the quantum number $n$ changes between orbits; the negative sign encodes binding — zero means free. Bohr\u2019s model is exactly right for hydrogen-like ions ($Z \\ge 1$, one electron): $E_n = -13.6\\frac{Z^2}{n^2}$ eV.'
      },
      {
        term: 'Rydberg formula and the spectral series',
        kind: 'law',
        statement: 'A transition $n_2 \\to n_1$ emits wavelength $\\frac{1}{\\lambda} = R Z^2\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$ with $R = 1.097 \\times 10^7$ m\u207b\u00b9; $n_1 = 1$ gives the Lyman series (UV), $n_1 = 2$ Balmer (visible), $n_1 = 3$ Paschen (IR).',
        detail: 'The Balmer series is the visible fingerprint: H\u03b1 656 nm (red, $3\\to2$), H\u03b2 486 nm ($4\\to2$), and the series limit 364.6 nm ($\\infty \\to 2$). Series limits and convergence are favourite engineering assessment numericals; remember the pattern — larger $n_2$ crowds lines towards the limit, and Lyman lines are the most energetic since they land on the deepest level.'
      },
      {
        term: 'Energy-level bookkeeping',
        kind: 'method',
        statement: 'Level energies of hydrogen: $E_1 = -13.6$, $E_2 = -3.4$, $E_3 = -1.51$, $E_4 = -0.85$ eV; ionisation from level $n$ costs $\\frac{13.6}{n^2}$ eV, and transition energy is the difference $E_{n_2} - E_{n_1}$.',
        detail: 'The $1/n^2$ spacing means the first excitation of hydrogen ($1 \\to 2$) is 10.2 eV while ionisation is 13.6 eV — 40% more. For He\u207a ($Z=2$) every energy quadruples: ionisation 54.4 eV. Photon counting: a gas excited to level $n$ can emit $\\frac{n(n-1)}{2}$ distinct lines as electrons cascade — the combinatorics question engineering assessment loves (level 4 \u2192 6 lines, of which 3 are Balmer-visible).'
      },
      {
        term: 'Orbital mechanics in Bohr orbits',
        kind: 'insight',
        statement: 'In the $n$-th orbit, $v_n = \\frac{2.18 \\times 10^6}{n}$ m/s, the period $T_n \\propto n^3$, and the current loop of the orbiting electron gives a magnetic dipole moment $\\mu_n \\propto n$ — linking atomic structure to magnetism.',
        detail: 'The ground-state speed is about 1% of light — fine for a non-relativistic model. The orbital frequency $1/T_n$ sets the classical radiation frequency, but the emitted photon frequency is the jump energy over $h$ — they coincide only for adjacent high-$n$ orbits (correspondence principle), Bohr\u2019s bridge to classical physics.'
      }
    ],
    examples: [
      {
        title: 'Balmer-line wavelength',
        problem: 'Find the wavelength of the photon emitted when hydrogen\u2019s electron falls from $n = 4$ to $n = 2$, and name the line.',
        steps: [
          { label: 'Step 1', text: 'Rydberg with $n_1 = 2$, $n_2 = 4$: $\\frac{1}{\\lambda} = 1.097 \\times 10^7\\left(\\frac{1}{4} - \\frac{1}{16}\\right)$.' },
          { label: 'Step 2', text: 'Bracket: $\\frac{4 - 1}{16} = \\frac{3}{16}$, so $\\frac{1}{\\lambda} = 1.097 \\times 10^7 \\times \\frac{3}{16} = 2.057 \\times 10^6$ m\u207b\u00b9.' },
          { label: 'Step 3', text: 'Invert: $\\lambda = \\frac{1}{2.057 \\times 10^6} \\approx 4.86 \\times 10^{-7}$ m $= 486$ nm.' },
          { label: 'Step 4', text: 'Landing on $n_1 = 2$: Balmer series, and $4 \\to 2$ is the H\u03b2 line — blue-green, the second-longest Balmer wavelength.' }
        ],
        result: '$\\lambda \\approx 486$ nm — the Balmer H\u03b2 line.'
      },
      {
        title: 'Ionisation and excitation of hydrogen vs He\u207a',
        problem: 'How much energy ionises hydrogen from its first excited state? For He\u207a, what is the ground-state ionisation energy, and the wavelength needed?',
        steps: [
          { label: 'Step 1', text: 'Hydrogen first excited state is $n = 2$: $E_2 = -\\frac{13.6}{4} = -3.4$ eV. Ionisation must supply $0 - (-3.4) = 3.4$ eV.' },
          { label: 'Step 2', text: 'He\u207a is hydrogen-like with $Z = 2$: $E_n = -13.6 \\times \\frac{4}{n^2}$ eV, so the ground state sits at $-54.4$ eV.' },
          { label: 'Step 3', text: 'Ionisation energy from He\u207a ground state: $54.4$ eV. Convert to joules: $54.4 \\times 1.6 \\times 10^{-19} = 8.70 \\times 10^{-18}$ J.' },
          { label: 'Step 4', text: 'Photon: $\\lambda = \\frac{hc}{E} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{8.70 \\times 10^{-18}} \\approx 2.29 \\times 10^{-8}$ m $= 22.9$ nm — deep ultraviolet, as expected for a $Z^2$-boosted atom.' }
        ],
        result: 'H from $n=2$: 3.4 eV. He\u207a ground-state ionisation: 54.4 eV, needing $\\lambda \\approx 22.9$ nm.'
      }
    ],
    keyTakeaways: [
      'Nuclear model: tiny dense nucleus ($\\sim 10^{-14}$ m) inside a $10^{-10}$ m atom, from alpha back-scattering.',
      'Bohr: $mvr = nh/2\\pi$ forces $r_n \\propto n^2$, $E_n = -13.6/n^2$ eV (times $Z^2$ for hydrogen-like ions).',
      'Rydberg $\\frac{1}{\\lambda} = RZ^2(\\frac{1}{n_1^2} - \\frac{1}{n_2^2})$: Lyman UV, Balmer visible, Paschen IR.',
      'Ionisation from level $n$ costs $13.6Z^2/n^2$ eV; an excited level $n$ yields $\\frac{n(n-1)}{2}$ spectral lines.'
    ],
    quiz: [
      {
        q: 'The ratio of the radii of the first three Bohr orbits of hydrogen ($r_1 : r_2 : r_3$) is',
        options: ['$1 : 2 : 3$', '$1 : 4 : 9$', '$1 : 8 : 27$', '$1 : 3 : 5$'],
        answer: 1,
        explanation: 'Step 1: Bohr radii scale as $n^2$. Step 2: $r_1 = 0.529$ \u00c5, so $r_2 = 4r_1$ and $r_3 = 9r_1$. Step 3: The ratio is $1 : 4 : 9$. Step 4: Linear ($1:2:3$) would be speeds\u2019 scaling ($v \\propto 1/n$) misapplied, and $n^3$ is the period\u2019s scaling.'
      },
      {
        q: 'The energy required to excite a hydrogen atom from ground state to $n = 2$ is about',
        options: ['3.4 eV', '10.2 eV', '13.6 eV', '12.09 eV'],
        answer: 1,
        explanation: 'Step 1: Excitation energy $= E_2 - E_1 = -3.4 - (-13.6)$ eV. Step 2: $= 13.6 - 3.4 = 10.2$ eV. Step 3: 13.6 eV is full ionisation; 12.09 eV excites to $n = 3$. Step 4: The $1/n^2$ spacing makes the first jump the biggest single-step excitation.'
      },
      {
        q: 'How many spectral lines can hydrogen emit from the $n = 4$ level in total (all cascades)?',
        options: ['3', '4', '6', 'infinite'],
        answer: 2,
        explanation: 'Step 1: Distinct lines = distinct pairs of levels: $\\binom{4}{2}$. Step 2: $\\frac{4 \\times 3}{2} = 6$. Step 3: Of these, pairs landing on $n = 2$ (3 lines) are visible Balmer; others are Lyman/Paschen. Step 4: The cascade graph from 4 contains every allowed pair exactly once.'
      },
      {
        q: 'The shortest wavelength in the Balmer series (series limit) corresponds to the transition',
        options: ['$3 \\to 2$', '$\\infty \\to 2$', '$2 \\to 1$', '$\\infty \\to 1$'],
        answer: 1,
        explanation: 'Step 1: Shortest $\\lambda$ = largest energy jump landing on $n_1 = 2$. Step 2: The largest available drop is from the continuum, $n_2 \\to \\infty$. Step 3: $\\frac{1}{\\lambda} = \\frac{R}{4} \\Rightarrow \\lambda = 364.6$ nm. Step 4: $\\infty \\to 1$ is the Lyman limit (91.2 nm) — a different series.'
      }
    ]
  },
]

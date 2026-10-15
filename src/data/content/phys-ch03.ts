import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Feynman Lectures on Physics, Vol. I (New Millennium Edition)
// Chapter 3: Motion, Vectors and Newton's Laws — Lectures 8–12
// Master study content. Worked-example numbers are Feynman's own (Tables 8-1,
// 8-2, 8-4, 9-1, 9-2 and the lecture arithmetic).
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const physCh3Content: SectionContent[] = [
  // ------------------------------------------------------------------ 3.1
  {
    sectionId: 'hall-ch2-s29',
    readingTime: 9,
    intro: 'Feynman opens the study of motion with a disarmingly simple program: before asking why things move, learn to say precisely where they are and when. A car crawling through town and a ball dropped from a height supply the data, and out of the struggle to say what "60 miles an hour" really means comes the invention of the derivative — calculus was created to define speed.',
    objectives: [
      'Describe one-dimensional motion with tables, graphs and functions $s = f(t)$',
      'Define instantaneous speed as a limit and compute it exactly for the falling body',
      'Differentiate and integrate the polynomials that describe motion',
      'Decompose motion into independent components and derive the parabolic trajectory',
    ],
    concepts: [
      {
        term: 'Motion of a point',
        kind: 'definition',
        statement: 'The simplest change a body can undergo is **motion** — change of position with time — and the simplest description treats the body as a single marked **point**, small compared with the distance it moves.',
        detail: 'A car covering a hundred miles does not require us to distinguish front from back; a drifting cloud that is simultaneously forming and evaporating, or a change of mind, would. Feynman deliberately restricts the discussion to one dimension first: the car on one road, distance $s$ from the start recorded minute by minute, with the full three-dimensional description built by the same pattern later.',
      },
      {
        term: 'Distance as a function of time',
        kind: 'notation',
        statement: 'A complete description of one-dimensional motion is a table or graph of distance $s$ against time $t$; when a formula exists it is written $s = f(t)$ — "s is a function of t".',
        detail: 'Feynman\u2019s car covers 1200 ft in the first minute, 4000 ft by two minutes, 9000 by three, then stalls in traffic (9500, 9600 ft), recovers (13,000; 18,000; 23,500 ft) and is finally stopped by a cop at 24,000 ft in 9 minutes. For a falling ball the data collapse into one law, $$s = 16t^2,$$ with $s$ in feet and $t$ in seconds: 16, 64, 144, 256, 400, 576 ft at $t = 1, 2, 3, 4, 5, 6$ s — a perfect parabola when plotted.',
      },
      {
        term: 'The Zeno trap',
        kind: 'insight',
        statement: 'The Greeks never mastered velocity because "how fast right now" hides a real logical trap: **Zeno\u2019s paradox**, in which Achilles — ten times as fast — can never catch a tortoise given a 100-meter head start.',
        detail: 'Each time Achilles reaches the tortoise\u2019s last position the tortoise has moved on — 10 m, then 1 m, then 10 cm, ad infinitum. The paradox dissolves only once you accept that a finite interval of time (or of length) can be cut into infinitely many pieces: infinitely many shrinking steps can occupy a finite, catchable time. Rigorous reasoning about instantaneous speed needs that idea.',
      },
      {
        term: 'Sixty miles an hour: average versus instantaneous',
        kind: 'insight',
        statement: '"You were going 60 miles an hour" cannot mean "you will travel 60 miles in the next hour" — the car may slow or hit a wall; an honest definition must be built from **ever shorter intervals of time**.',
        detail: 'The lady caught by the cop objects that she had been driving only seven minutes. The repair: 60 mph is 88 feet per second — and even one second is too long for a falling ball, whose speed changes appreciably within it. So take a hundredth, a thousandth, a millionth of a second: divide the distance gone by the time, and let the interval shrink without limit. That idea, invented independently by Newton and Leibniz, is the differential calculus; defining "60 miles an hour" was its first application.',
      },
      {
        term: 'Speed as a derivative',
        kind: 'definition',
        statement: 'The velocity at time $t$ is the limit of distance gone over time taken as the interval shrinks: $$v = \\lim_{\\Delta t \\to 0}\\frac{\\Delta s}{\\Delta t} = \\frac{ds}{dt}.$$',
        detail: 'The prefix $\\Delta$ is not a multiplier — $\\Delta s/\\Delta t$ cannot be cancelled to $s/t$, any more than $\\sin\\theta/\\sin 2\\theta$ reduces to $1/2$. The $d$ in $ds/dt$ records that the limit has been taken. Physicists also write $ds = v\\,dt$ for the distance gone in a very short time — exact in the limit, and an excellent approximation whenever $dt$ is small enough.',
      },
      {
        term: 'Distance as an integral',
        kind: 'theorem',
        statement: 'The inverse problem — position from a table of speeds — is solved by adding little rectangles $v(t_i)\\Delta t$ and shrinking the interval: $$s = \\lim_{\\Delta t \\to 0}\\sum_i v(t_i)\\Delta t = \\int v(t)\\,dt.$$',
        detail: 'Integration is the opposite of differentiation: the derivative of the integral gives back $v$; one operator $d$ undoes the other. A warning Feynman stresses: every function can be differentiated analytically, but many integrals have no closed form at all — you then evaluate the sum numerically, again and again with finer intervals, until it stops moving.',
      },
      {
        term: 'Acceleration',
        kind: 'definition',
        statement: 'Acceleration is the time rate of change of velocity, $$a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2},$$ and for the falling ball $v = 32t$ gives $a = 32$ ft/s² — constant.',
        detail: 'A car advertised as reaching 60 mph in ten seconds quotes only an average acceleration. The falling body is the special case: the speed table runs 0, 32, 64, 96, 128 ft/s at $t = 0, 1, 2, 3, 4$ s, gaining exactly 32 ft/s each second, because the force — gravity near the earth — is constant, and acceleration follows force. For any constant acceleration $g$ from rest: $v = gt$ and $s = \\frac{1}{2}gt^2$.',
      },
      {
        term: 'Motion in three dimensions',
        kind: 'method',
        statement: 'A particle in space is located by three distances $x, y, z$; each has its own velocity component $v_x = dx/dt$, $v_y = dy/dt$, $v_z = dz/dt$, and the speed along the path is $$v = \\sqrt{v_x^2 + v_y^2 + v_z^2}.$$',
        detail: 'The displacement in a short time is the diagonal of a box with sides $\\Delta x \\approx v_x\\Delta t$, $\\Delta y \\approx v_y\\Delta t$, $\\Delta z \\approx v_z\\Delta t$; Pythagoras gives $\\Delta s$, and dividing by $\\Delta t$ and taking the limit produces the result. Acceleration decomposes the same way, component by component.',
      },
      {
        term: 'The parabola of projectile motion',
        kind: 'theorem',
        statement: 'A ball thrown horizontally with constant speed $u$ while falling with constant acceleration $-g$ obeys $x = ut$ and $y = -\\frac{1}{2}gt^2$; eliminating $t$ gives the parabolic path $$y = -\\frac{g}{2u^2}x^2.$$',
        detail: 'Any freely falling body shot out in any direction travels in a parabola — the compounding of two independent motions, a preview of the vector decomposition of Section 3.4. The horizontal march is uniform; the vertical drop knows nothing about it and proceeds exactly as if the body had simply been dropped.',
      },
    ],
    examples: [
      {
        title: 'How fast is the falling ball at 5 seconds?',
        problem: 'A ball dropped from rest obeys $s = 16t^2$ (feet, seconds). Determine its speed at the instant $t_0 = 5$ s exactly.',
        steps: [
          { label: 'Step 1: Try the fifth second', text: 'From the table the ball covers $400 - 256 = 144$ ft between $t = 4$ and $t = 5$ s, an average of 144 ft/s. But the ball is speeding up throughout, so this is not the speed at 5 s.' },
          { label: 'Step 2: Shrink to a tenth of a second', text: 'At $t = 5.1$ s the total fall is $16(5.1)^2 = 416.16$ ft, so the last tenth of a second contributed $416.16 - 400 = 16.16$ ft — that is 161.6 ft/s. Closer, but is it the speed at 5, or at 5.05, or at 5.1?' },
          { label: 'Step 3: Shrink to a thousandth', text: 'At $t = 5.001$ s, $s = 16(5.001)^2 = 16(25.010001) = 400.160016$ ft. The last $0.001$ s contributed $0.160016$ ft, i.e. 160.016 ft/s. The sequence 144, 161.6, 160.016 is clearly settling.' },
          { label: 'Step 4: Do the algebra once and for all', text: 'At a general time $t_0$ the position is $16t_0^2$. A moment later, $16(t_0 + \\epsilon)^2 = 16t_0^2 + 32t_0\\epsilon + 16\\epsilon^2$. The extra distance is $\\Delta s = 32t_0\\epsilon + 16\\epsilon^2$, so $$\\frac{\\Delta s}{\\epsilon} = 32t_0 + 16\\epsilon.$$' },
          { label: 'Step 5: Take the limit', text: 'As $\\epsilon \\to 0$ the second term dies and $v = 32t_0$. At $t_0 = 5$: $v = 32 \\times 5 = 160$ ft/s exactly.' },
        ],
        result: 'The speed at 5 s is exactly 160 ft/s. The general law $v = 32t$ reproduces the whole velocity table (0, 32, 64, 96, 128, \u2026), and differentiating again gives the constant acceleration of 32 ft/s per second.',
      },
      {
        title: 'Differentiating a cubic by the same recipe',
        problem: 'A point moves according to $s = At^3 + Bt + C$ with constants $A$, $B$, $C$. Find its velocity and acceleration.',
        steps: [
          { label: 'Step 1: Write the shifted position', text: '$s + \\Delta s = A(t + \\Delta t)^3 + B(t + \\Delta t) + C = At^3 + Bt + C + 3At^2\\Delta t + B\\Delta t + 3At(\\Delta t)^2 + A(\\Delta t)^3$.' },
          { label: 'Step 2: Subtract the old position', text: 'Since $s = At^3 + Bt + C$, the extra distance is $\\Delta s = 3At^2\\Delta t + B\\Delta t + 3At(\\Delta t)^2 + A(\\Delta t)^3$.' },
          { label: 'Step 3: Divide by the time', text: '$\\Delta s/\\Delta t = 3At^2 + B + 3At(\\Delta t) + A(\\Delta t)^2$.' },
          { label: 'Step 4: Let the interval go to zero', text: 'Every term containing a square or cube of $\\Delta t$ vanishes in the limit, leaving $$\\frac{ds}{dt} = 3At^2 + B.$$' },
          { label: 'Step 5: Differentiate again', text: 'Repeating the process on the velocity (the constant $B$ now dies) gives the acceleration $a = 6At$. With practice, terms with higher powers of $\\Delta t$ are dropped at sight.' },
        ],
        result: 'For $s = At^3 + Bt + C$: $v = 3At^2 + B$ and $a = 6At$. The falling body\u2019s chain $16t^2 \\to 32t \\to 32$ is the special case.',
      },
      {
        title: 'Recovering distance from a table of speeds',
        problem: 'Suppose that instead of positions you own a speedometer table: the falling ball reads 0, 32, 64, 96, 128 ft/s at $t = 0, 1, 2, 3, 4$ s. How far has it fallen by $t = 4$ s?',
        steps: [
          { label: 'Step 1: Slice the time', text: 'In each small interval $\\Delta t$ the speed is nearly constant, so the distance for that slice is $v(t_i)\\Delta t$ — the area of a thin rectangle under the speed graph.' },
          { label: 'Step 2: Add the pieces', text: 'Total distance $s = \\sum_i v(t_i)\\Delta t$, exact only in the limit $\\Delta t \\to 0$, that is, $s = \\int v\\,dt$.' },
          { label: 'Step 3: Do the integral', text: 'With $v = 32t$, $$s = \\int_0^4 32t\\,dt = 16(4)^2 - 16(0)^2 = 256 \\text{ ft}.$$' },
          { label: 'Step 4: Cross-check', text: 'The position table of the falling ball says exactly 256 ft at $t = 4$ s — the integral of the derivative returns the original $s = 16t^2$.' },
        ],
        result: '256 ft — and the check confirms that integration undoes differentiation. Where no closed form exists, you would instead evaluate the sum with finer and finer slices until the answer stops moving.',
      },
    ],
    keyTakeaways: [
      'Motion is first described by a table or graph of position against time; a formula, when one exists, is $s = f(t)$.',
      'An average speed over an interval fails at an instant because the speed changes within the interval; the instantaneous speed requires a limit.',
      'Speed is the derivative $v = ds/dt$; distance is the integral $s = \\int v\\,dt$; the two operations undo each other.',
      'Zeno\u2019s paradox dissolves because a finite time can be divided into infinitely many pieces — infinitely many steps need not occupy infinite time.',
      'For the falling body $s = 16t^2$, $v = 32t$, $a = 32$ ft/s²; from rest under any constant acceleration $g$: $v = gt$ and $s = \\frac{1}{2}gt^2$.',
      'In three dimensions each coordinate carries its own derivative and the speed is $\\sqrt{v_x^2 + v_y^2 + v_z^2}$; a projectile launched horizontally at $u$ traces the parabola $y = -(g/2u^2)x^2$.',
    ],
    quiz: [
      {
        q: 'A ball falls from rest with $s = 16t^2$ (feet, seconds). Between $t = 4$ and $t = 5$ s it covers 144 ft. Why is 144 ft/s NOT its speed at $t = 5$ s?',
        options: ['Because the table is not fine enough to define speed at all', 'Because the speed is changing during the interval, so 144 ft/s is only an average', 'Because the ball has already hit the ground by then', 'Because distance must be divided by the square of the time'],
        answer: 1,
        explanation: 'Any finite interval gives an average. Successively shorter intervals give 161.6 ft/s (over 0.1 s) and 160.016 ft/s (over 0.001 s), converging on the instantaneous value $v = 32t_0 = 160$ ft/s.',
      },
      {
        q: 'Using the limit definition, the velocity of the falling ball at any time $t_0$ is:',
        options: [`$16t_0$`, `$32t_0 + 16\\epsilon$ for every $\\epsilon$`, `$32t_0$`, `$16t_0^2$`],
        answer: 2,
        explanation: 'Dividing $\\Delta s = 32t_0\\epsilon + 16\\epsilon^2$ by $\\epsilon$ gives $32t_0 + 16\\epsilon$; the limit as $\\epsilon \\to 0$ kills the second term, leaving exactly $32t_0$.',
      },
      {
        q: 'Zeno\u2019s Achilles-and-tortoise paradox is resolved by recognizing that:',
        options: ['Achilles eventually runs infinitely fast', 'A finite time can be divided into infinitely many pieces, so infinitely many shrinking steps can occupy a finite total time', 'The tortoise secretly slows down', 'Motion is an illusion, as Zeno claimed'],
        answer: 1,
        explanation: 'The gaps 100 m, 10 m, 1 m, 10 cm, \u2026 form an infinite sequence of intervals whose total time is finite — Achilles catches up at a perfectly definite moment.',
      },
      {
        q: 'If $s = At^3 + Bt + C$, the acceleration is:',
        options: [`$3At^2 + B$`, `$6At$`, `$3At$`, `$6At^2 + B$`],
        answer: 1,
        explanation: 'The first differentiation gives $v = 3At^2 + B$; differentiating again — the constant $B$ contributes nothing — gives $a = 6At$.',
      },
      {
        q: 'A projectile launched horizontally with speed $u$ under gravity $g$ follows which path?',
        options: ['A straight line of slope $-g/u$', 'A circle of radius $u^2/g$', 'The parabola $y = -(g/2u^2)x^2$', 'A hyperbola opening upward'],
        answer: 2,
        explanation: 'With $x = ut$ and $y = -\\frac{1}{2}gt^2$, eliminating $t = x/u$ gives $y = -(g/2u^2)x^2$ — a parabola. The faster the launch, the wider and flatter it opens.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.2
  {
    sectionId: 'phys-ch3-s2',
    readingTime: 10,
    intro: 'Dynamics begins where kinematics ends: Newton\u2019s laws tell how forces change momentum. Feynman states the second law in its fundamental form $F = d(mv)/dt$, shows that it is really three equations in component form, and then — in one of the most computational passages of the whole course — evolves a mass on a spring and a planet around the sun step by step, by arithmetic alone.',
    objectives: [
      'State Newton\u2019s three laws and the precise content of $F = d(mv)/dt$',
      'Resolve forces and accelerations into components and exploit their independence',
      'Evolve the spring oscillator and a planetary orbit with the midpoint numerical scheme',
      'Assess the accuracy and the cost of numerical integration',
    ],
    concepts: [
      {
        term: 'Momentum',
        kind: 'definition',
        statement: 'The **momentum** of a body is the product of its mass and its velocity, $p = mv$; mass is the quantitative measure of **inertia** — how hard it is to change the motion.',
        detail: 'Momentum is not velocity: push a light and a heavy object equally and the heavy one moves less. Weight and inertia are proportional on the earth\u2019s surface but are not the same thing — on Mars the weights would differ from earthly ones while the force needed to overcome inertia would not. Mass can be measured by swinging an object in a circle at a fixed speed and registering the force required to keep it there.',
      },
      {
        term: 'Newton\u2019s Second Law',
        kind: 'law',
        statement: 'The time rate of change of momentum is proportional to the force: $$F = \\frac{d(mv)}{dt}.$$ When the mass is constant this reduces to $F = ma$.',
        detail: 'Hidden assumptions: the mass is constant (a Newtonian approximation that relativity will modify), masses add when bodies combine, and the force changes both the magnitude and the direction of the velocity. It is a law about nature, not a mere definition — Feynman returns to that subtlety in Section 3.5.',
      },
      {
        term: 'The three laws together',
        kind: 'law',
        statement: '**First law** (Galileo\u2019s inertia): an undisturbed body keeps its velocity — moving in a straight line or standing still. **Second law**: $F = d(mv)/dt$. **Third law**: the forces between two interacting bodies are equal, opposite, and along the line joining them.',
        detail: 'The first law restates Galileo\u2019s principle of inertia; the second is the workhorse of this chapter; the third is Newton\u2019s only other general statement about forces, and it powers the conservation of momentum of Section 3.3. Before Newton the motions of the planets were a mystery; after him even the perturbations of Uranus by Jupiter and Saturn became computable.',
      },
      {
        term: 'Components: one law is three',
        kind: 'method',
        statement: 'Resolving along the axes, $F_x = m(dv_x/dt) = m(d^2x/dt^2)$, and similarly for $y$ and $z$: Newton\u2019s second law is really **three scalar equations**, and motions in different directions are independent when the forces are.',
        detail: 'A falling body with horizontal launch keeps its horizontal velocity unchanged while dropping vertically exactly as if it had been released from rest — the two-ball collision apparatus of the gravitation lecture demonstrates it directly. A force component is the magnitude times the cosine of its angle with the axis: $F_x = F\\cos(x, F)$.',
      },
      {
        term: 'Acceleration at right angles: a = v²/R',
        kind: 'theorem',
        statement: 'A body moving in a circle of radius $R$ at speed $v$ falls away from the straight tangent by $\\frac{1}{2}(v^2/R)t^2$ in a short time $t$, so the acceleration at right angles to the motion is $$a = \\frac{v^2}{R}.$$',
        detail: 'A force at right angles to the velocity curves the path without changing the speed — exactly what the sun does to a planet. Because gravity pulls precisely toward the sun, no tangential force is needed to keep a planet moving; the angels, if any, must fly radially inward, and they have no wings.',
      },
      {
        term: 'The two worked forces: gravity and springs',
        kind: 'law',
        statement: 'Near the earth\u2019s surface the gravitational force is vertical and nearly constant: $F = GmM/R^2 = mg$ with $g = GM/R^2$, so free fall gives $v_x = v_0 + gt$ and $x = x_0 + v_0t + \\frac{1}{2}gt^2$; a spring stretched by $x$ pulls back with $-kx$, giving the oscillator equation $$-kx = m\\frac{dv_x}{dt}.$$',
        detail: 'Gravity\u2019s law makes weight proportional to mass — the cancellation of $m$ in $mg = m(d^2x/dt^2)$ is why all bodies fall alike. For the spring Feynman simplifies to units with $k/m = 1$, so the equation of motion reads $dv_x/dt = -x$: the velocity changes at a rate proportional to the displacement — the seed of all oscillation theory (Chapter 6).',
      },
      {
        term: 'What the dynamical equations mean',
        kind: 'insight',
        statement: 'Given position **and** velocity at one instant, the law of force supplies the acceleration, which updates the velocity, which updates the position: the motion evolves step by step from initial conditions.',
        detail: 'Kinematics says $x(t + \\epsilon) \\approx x(t) + \\epsilon v_x(t)$; dynamics enters when the acceleration is replaced by the force law: $v_x(t + \\epsilon) = v_x(t) + \\epsilon a_x(t) = v_x(t) - \\epsilon x(t)$ for the spring. Nothing else is needed — no memory, no purpose, just the local rule applied repeatedly.',
      },
      {
        term: 'Numerical solution and its refinement',
        kind: 'method',
        statement: 'To integrate numerically, use the **midpoint scheme**: $$x(t+\\epsilon) = x(t) + \\epsilon\\,v(t + \\epsilon/2), \\qquad v(t+\\epsilon/2) = v(t-\\epsilon/2) + \\epsilon\\,a(t),$$ starting with $v(\\epsilon/2) = v(0) + (\\epsilon/2)a(0)$.',
        detail: 'Evaluating velocities and accelerations halfway through each interval raises the accuracy at no cost in interval size. The error varies roughly as the square of $\\epsilon$: shrink the interval a thousandfold and the calculation becomes a million times more accurate. A good machine of Feynman\u2019s day did about 3000 cycles per second; following Jupiter around the sun with every planetary perturbation correct to one part in a billion took about 4\u00d710\u2075 cycles — roughly two minutes.',
      },
      {
        term: 'Where analysis surrenders',
        kind: 'insight',
        statement: 'Only a handful of problems — free fall, the harmonic oscillator, the two-body orbit — yield exact closed-form solutions; the **three-body problem** and systems of some $10^{17}$ molecules per cubic millimeter of gas defeat both analysis and direct numerics.',
        detail: 'For those, physics needs general theorems that follow from the laws without the details: conservation of energy (Chapter 4) and conservation of momentum (Section 3.3). This division of labor — exact solutions where possible, conservation principles where not — organizes all of mechanics.',
      },
    ],
    examples: [
      {
        title: 'First crude steps for the mass on a spring',
        problem: 'A mass released at $x = 1$ with zero velocity obeys $dv_x/dt = -x$ (units with $k = m = 1$). Estimate its motion with the crude interval $\\epsilon = 0.1$ s.',
        steps: [
          { label: 'Step 1: Update the position', text: '$x(0.1) = x(0) + \\epsilon v(0) = 1.00 + 0.1 \\times 0 = 1.00$ — it has not yet moved.' },
          { label: 'Step 2: Update the velocity', text: 'The acceleration at $t = 0$ is $a = -x(0) = -1.00$, so $v(0.1) = 0 - 0.1 \\times 1.00 = -0.10$.' },
          { label: 'Step 3: Next interval', text: '$x(0.2) = x(0.1) + 0.1 \\times v(0.1) = 1.00 - 0.10 \\times 0.10 = 0.99$, and $v(0.2) = -0.10 - 0.1 \\times 1.00 = -0.20$.' },
          { label: 'Step 4: Watch the pattern', text: 'The mass sits nearly still at first, gains (negative) velocity slowly, then faster as it approaches $x = 0$ — exactly how a released spring behaves. The interval is too crude for accuracy; the midpoint scheme fixes that.' },
        ],
        result: 'Position 1.00 \u2192 0.99 and velocity 0 \u2192 \u22120.20 by $t = 0.2$ s. The crude method has the right physics but poor accuracy — the price of a long interval.',
      },
      {
        title: 'The midpoint scheme (Table 9-1)',
        problem: 'Improve the spring calculation with the midpoint rules, still with $\\epsilon = 0.1$ s, and compare against the exact answer.',
        steps: [
          { label: 'Step 1: Start the velocity at mid-interval', text: '$v(0.05) = v(0) + (\\epsilon/2)a(0) = 0 - 0.05 \\times 1.000 = -0.050$.' },
          { label: 'Step 2: First position', text: '$x(0.1) = x(0) + \\epsilon v(0.05) = 1.000 - 0.1 \\times 0.050 = 0.995$; the acceleration there is $-0.995$.' },
          { label: 'Step 3: March the table', text: '$v(0.15) = -0.050 - 0.1 \\times 0.995 = -0.150$; $x(0.2) = 0.995 - 0.1 \\times 0.150 = 0.980$. Continuing row by row gives $x = 0.955, 0.921, 0.877, \\ldots$ down to $x = 0.070$ at $t = 1.5$ s with midpoint speed about $-1.0$.' },
          { label: 'Step 4: Compare with the exact solution', text: 'The exact motion is $x = \\cos t$: at $t = 1.5$, $\\cos 1.5 = 0.0707$. The tabulated 0.070 agrees to three significant figures — from pure arithmetic, no calculus.' },
        ],
        result: 'Table 9-1 reproduces the cosine to three figures: the mass passes $x = 0$ between $t = 1.5$ and 1.6 s moving at about one unit per second, and by symmetry will climb toward $-1$ before returning.',
      },
      {
        title: 'Chasing a planet around the sun',
        problem: 'A planet starts at $x = 0.500$, $y = 0$ with velocity $(0, 1.630)$, attracted by the sun at the origin through $dv_x/dt = -x/r^3$ and $dv_y/dt = -y/r^3$ (units with $GM = 1$). Compute the first step, then the orbital period.',
        steps: [
          { label: 'Step 1: Initial acceleration', text: '$r(0) = 0.500$, so $1/r^3 = 8.000$ and $a_x = -0.500 \\times 8.000 = -4.000$, $a_y = 0$.' },
          { label: 'Step 2: Half-step velocities', text: '$v_x(0.05) = 0 - 4.000 \\times 0.05 = -0.200$; $v_y(0.05) = 1.630 + 0 = 1.630$.' },
          { label: 'Step 3: First full step', text: '$x(0.1) = 0.500 - 0.200 \\times 0.1 = 0.480$ and $y(0.1) = 0 + 1.630 \\times 0.1 = 0.163$. Then $r = \\sqrt{0.480^2 + 0.163^2} = 0.507$, so $1/r^3 = 7.677$, giving $a_x = -0.480 \\times 7.677 = -3.685$ and $a_y = -0.163 \\times 7.677 = -1.251$.' },
          { label: 'Step 4: Keep going', text: 'Twenty-odd steps of this arithmetic chase the planet halfway around the sun. It crosses the $x$-axis at $t = 2.101$ s on the far side at $x = -1.022$, so the period is $2 \\times 2.101 = 4.20$ s and the semimajor axis is $(1.022 + 0.500)/2 = 0.761$.' },
          { label: 'Step 5: Check against Kepler', text: 'Kepler\u2019s third law with $GM = 1$ predicts the crossing time $\\pi a^{3/2} = \\pi(0.761)^{3/2} = \\pi(0.663) = 2.082$ s, against the computed 2.101 s — the numerical orbit is an ellipse to within about one percent.' },
        ],
        result: 'The planet circuits the sun in 4.20 s on an orbit of semimajor axis 0.761, against the Kepler prediction $2 \\times 2.082 = 4.16$ s. Newton\u2019s laws plus arithmetic reproduce planetary ellipses.',
      },
    ],
    keyTakeaways: [
      'Momentum $p = mv$; mass measures inertia and differs from weight — on Mars the inertia is the same but the weight is not.',
      'Newton\u2019s second law in its fundamental form is $F = d(mv)/dt$, reducing to $F = ma$ when the mass is constant.',
      'Component form: $F_x = m(d^2x/dt^2)$ and similarly for $y$ and $z$; perpendicular motions evolve independently.',
      'Centripetal acceleration $a = v^2/R$ quantifies the sideways pull needed to bend any motion into a circle.',
      'Near the earth $F = mg$ with $g = GM/R^2$; a spring supplies $-kx$, the archetype of the oscillator (Chapter 6).',
      'Given position and velocity at one instant, the equations of motion evolve the entire future step by step.',
      'The midpoint numerical scheme delivers three-figure accuracy by hand and machine precision at machine speed; error falls as the square of the interval.',
    ],
    quiz: [
      {
        q: 'Newton\u2019s second law is most precisely written as:',
        options: [`$F = mv$`, `$F = \\frac{d(mv)}{dt}$`, `$F = \\frac{1}{2}mv^2$`, `$F = mg$`],
        answer: 1,
        explanation: 'The law states that the time rate of change of momentum equals the force. Only when the mass is constant does it reduce to $F = ma$; relativity modifies precisely the constancy of $m$.',
      },
      {
        q: 'A body moves in a circle of radius $R$ at constant speed $v$. Its acceleration points:',
        options: ['Along the direction of motion, of magnitude $v/R$', 'At right angles to the motion, toward the center, of magnitude $v^2/R$', 'At right angles to the motion, away from the center, of magnitude $2v^2/R$', 'Nowhere — constant speed means zero acceleration'],
        answer: 1,
        explanation: 'The velocity vector turns without changing length; the change $\\Delta v_\\perp = v\\Delta\\theta$ points toward the center, giving $a_\\perp = v^2/R$. A tangential component would exist only if the speed were changing.',
      },
      {
        q: 'Why does the midpoint scheme evaluate velocities at $t + \\epsilon/2$ rather than at $t$?',
        options: ['It halves the number of computations', 'Using the speed halfway through the interval matches the interval over which it is applied, greatly improving accuracy at the same step size', 'It avoids computing the acceleration entirely', 'It makes the energy exactly conserved'],
        answer: 1,
        explanation: 'A changing speed mis-samples the interval if taken at its start; the halfway value represents the whole step. With accelerations also taken midway for the velocity updates, accuracy improves dramatically for the same $\\epsilon$.',
      },
      {
        q: 'In the planetary calculation, the initial data $x = 0.500$, $y = 0$, $v_y = 1.630$ (with $GM = 1$) give the first acceleration as:',
        options: [`$a_x = -4.000$, $a_y = 0$`, `$a_x = -2.000$, $a_y = -1.251$`, `$a_x = 0$, $a_y = -4.000$`, `$a_x = -8.000$, $a_y = -8.000$`],
        answer: 0,
        explanation: 'With $r = 0.500$, $1/r^3 = 8.000$, so $a_x = -x/r^3 = -0.500 \\times 8.000 = -4.000$; since $y = 0$, $a_y = 0$. At that point the force is purely radial.',
      },
      {
        q: 'Which problem cannot be solved exactly by analysis and must be handled numerically or by conservation principles?',
        options: ['A mass on an ideal spring', 'A single planet around an immovable sun', 'The three-body problem — for example two planets and the sun', 'Free fall under constant gravity'],
        answer: 2,
        explanation: 'The oscillator, the two-body orbit and free fall all have closed-form solutions. Three interacting bodies defeat analysis, and $10^{17}$ molecules defeat even numerics — hence the conservation theorems of Section 3.3 and Chapter 4.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.3
  {
    sectionId: 'phys-ch3-s3',
    readingTime: 9,
    intro: 'When the details are hopeless — colliding cars, exploding caps, a gas of countless molecules — the total momentum still obeys one simple rule: it never changes unless something from outside pushes. Feynman builds the law twice, once from Newton\u2019s third law and once, more remarkably, from the bare principle that physics looks the same to a uniformly moving observer.',
    objectives: [
      'Derive conservation of momentum from Newton\u2019s third law',
      'Distinguish internal from external forces and state the system-level second law',
      'Analyze sticking and elastic collisions by Galilean frame-shifting',
      'Apply the rocket recoil formula and identify where momentum hides in modern physics',
    ],
    concepts: [
      {
        term: 'Newton\u2019s Third Law',
        kind: 'law',
        statement: 'If one particle pushes a second with a certain force, the second simultaneously pushes the first with an **equal and opposite force along the same line** joining them.',
        detail: 'It is a law about nature, not a definition, and it is not exactly true (relativity forces field momentum into the bookkeeping). With three or more particles the total forces on any two need not be equal and opposite; only the pairwise mutual components obey the law.',
      },
      {
        term: 'Conservation of momentum',
        kind: 'theorem',
        statement: 'For two interacting particles $dp_1/dt = -dp_2/dt$, so $$\\frac{d(p_1 + p_2)}{dt} = 0$$ — the total momentum of a system with only internal forces never changes.',
        detail: 'Whatever the complexity of the force between them — collision, explosion, gravity — measuring or calculating $m_1v_1 + m_2v_2$ before and after always gives the same number. For many particles, every internal force is another particle\u2019s force in reverse, so all internal contributions cancel in the total.',
      },
      {
        term: 'Internal versus external forces',
        kind: 'definition',
        statement: 'Forces between members of an isolated system are **internal** and cannot change its total momentum; forces from outside are **external**, and their sum equals the rate of change of the total momentum of everything inside.',
        detail: 'Isolation is the experimenter\u2019s responsibility: momentum that seems to leak always means an outside agency was forgotten — the mechanical cousin of Bruce\u2019s blocks and the open window in the energy parable of Chapter 4.',
      },
      {
        term: 'Galilean relativity',
        kind: 'law',
        statement: 'The laws of physics look the same to an observer moving uniformly in a straight line as to one standing still — a child bouncing a ball in a smoothly flying airplane finds it behaves exactly as on the ground.',
        detail: 'This "Galilean" principle (Einstein\u2019s more careful analysis comes in Chapter 9) is an independent entrance to collision physics: solve the symmetric version of a collision in the frame where it is obvious, then ride past in a car to generate the asymmetric cases.',
      },
      {
        term: 'Mass defined by recoil',
        kind: 'method',
        statement: 'Two bodies placed either side of a small explosion and found to separate with **equal and opposite velocities are defined to have equal masses** — an operational definition needing no balance scale.',
        detail: 'The definition hides real physics: if copper balances aluminum by this test, and copper balances gold, then aluminum balances gold — an experimental fact, not a piece of logic. Likewise, equal-mass pairs recoil with equal speeds at every strength of explosion. Feynman\u2019s warning: definitions that look empty can contain laws.',
      },
      {
        term: 'Collisions by riding along',
        kind: 'method',
        statement: 'Viewed from a car moving at $-v$, the symmetric collision (equal masses approaching at $\\pm v$, stopping dead) becomes: a mass at $2v$ strikes an equal mass at rest and the pair moves off at $v$ — equivalently, speed $v$ onto rest gives $v/2$.',
        detail: 'Two equal masses with incoming speeds $v_1$ and $v_2$ that stick together end at $\\frac{1}{2}(v_1 + v_2)$ — the arithmetic mean — by the same ride-along argument. Each such transformation is momentum conservation in disguise: $mv_1 + mv_2 = 2m \\cdot \\frac{1}{2}(v_1 + v_2)$.',
      },
      {
        term: 'The air trough and the 2:1 test',
        kind: 'method',
        statement: 'On a frictionless air trough, an exploded pair $m, m$ flying apart at $\\pm v$ and a stuck pair $2m$ drifting at $v/2$ reach the ends simultaneously when the starting distances are in the ratio $2{:}1$ — a direct verification of the sticking rule.',
        detail: 'Compressed air through tiny jets removes the friction that bothered Galileo; toy pistol caps fired by an electric spark supply the explosion. Returning from the ends with velocities nearly reversed, the masses $m$ and $2m$ meet and stop dead — action and reaction again. An explosion between $m$ and $2m$ directly gives $-v$ and $+v/2$: equal and opposite momenta.',
      },
      {
        term: 'Elastic collisions and kinetic energy',
        kind: 'insight',
        statement: 'Momentum is conserved in **every** collision; kinetic energy is conserved only in **elastic** ones — and two equal masses colliding elastically simply **exchange velocities**, a stationary target taking over the projectile\u2019s speed completely.',
        detail: 'At maximum compression in the symmetric case both bodies are momentarily at rest, the energy stored as in a compressed spring; rigid materials with spring bumpers return nearly all of it, putty none — the difference becoming heat and vibration. Collisions of atoms and molecules in a gas are essentially perfectly elastic, since elementary particles have no internal gears in which to hide energy.',
      },
      {
        term: 'Momentum in relativity, fields and quanta',
        kind: 'insight',
        statement: 'Relativity keeps the conservation law but changes the mass: $$m = \\frac{m_0}{\\sqrt{1 - v^2/c^2}};$$ momentum can hide in electromagnetic fields (light exerts pressure), and in quantum mechanics momentum belongs to waves — yet the conservation law survives everywhere.',
        detail: 'Energy hides easily — as heat, whose random atomic motions have no direction — but momentum hides with difficulty: a sum of velocities that does not vanish is a visible drift of the whole body. The field is the exception and the reason the field picture (a particle makes a field; a field acts on another particle) takes over electromagnetism in Chapter 11. Even where $F = ma$ fails in quantum mechanics, momentum conservation maintains itself.',
      },
    ],
    examples: [
      {
        title: 'Speed v strikes an equal mass at rest',
        problem: 'Two equal masses collide head-on and stick. Use Galilean relativity to find the final velocity when one moves at $v$ and the other is at rest, and verify momentum.',
        steps: [
          { label: 'Step 1: Start from the symmetric case', text: 'Equal masses approaching at $+v$ and $-v$ stop dead when they stick — symmetry leaves no preferred direction for the wreckage to move.' },
          { label: 'Step 2: Ride by in a car', text: 'Watch the same collision from a car moving at $-v$: the left mass now appears to come at $2v$, the right at $0$, and the stuck pair recedes at $v$. So a mass at $2v$ hitting an equal at rest ends at $v$; dividing all speeds by two, a mass at $v$ hitting an equal at rest ends at $v/2$.' },
          { label: 'Step 3: Check momentum', text: 'Before: $mv + 0$. After: $2m \\times (v/2) = mv$. Conserved.' },
          { label: 'Step 4: Test on the air trough', text: 'Explode a capped pair $m, m$ apart at $\\pm v$ and let one strike a third, sticky mass $m$. The stuck pair $2m$ should move at $v/2$, covering half the distance in a given time — arrange the track distances in the ratio 2:1 and both arrive together, as observed.' },
        ],
        result: 'The combined body moves at exactly $v/2$; the 2:1 distance experiment confirms it without measuring any force.',
      },
      {
        title: 'Mass m strikes a stationary 2m',
        problem: 'A mass $m$ at speed $v$ hits and sticks to a stationary mass $2m$. Find the final velocity of the wreckage.',
        steps: [
          { label: 'Step 1: The center-of-mass collision', text: 'Take the known building block: $m$ moving at $v$ and $2m$ at $-v/2$ carry equal and opposite momenta ($mv = 2m \\times v/2$), so when they collide and stick, the combined $3m$ stands still.' },
          { label: 'Step 2: Watch from a passing car', text: 'Ride past at velocity $-v/2$: every velocity shifts by $+v/2$. The $m$ now approaches at $v + v/2 = 3v/2$, the $2m$ sits at rest ($-v/2 + v/2 = 0$), and the motionless wreckage drifts at $+v/2$.' },
          { label: 'Step 3: Rescale', text: 'Dividing every velocity by $3/2$: a mass $m$ at speed $v$ striking a stationary $2m$ leaves the stuck pair at $v/3$ — the ratio of speeds before and after is 3 to 1.' },
          { label: 'Step 4: Check momentum', text: 'Before: $mv$. After: $3m \\times (v/3) = mv$ — conserved.' },
        ],
        result: 'The $3m$ wreckage moves at $v/3$. The same ride-along trick generates one-against-three, two-against-three, and indeed any rational mass ratio.',
      },
      {
        title: 'Rocket recoil',
        problem: 'A rocket of large mass $M$, at rest in empty space, ejects a small mass $m$ backward at terrific velocity $V$ relative to the rocket. What forward speed does the rocket acquire?',
        steps: [
          { label: 'Step 1: Total momentum starts at zero', text: 'No external forces act, so the total momentum stays zero however complicated the explosion.' },
          { label: 'Step 2: Write the two momenta', text: 'The ejecta carries momentum $-mV$; the rocket must then carry $+Mv$ forward, with $M \\gg m$.' },
          { label: 'Step 3: Solve', text: 'Momentum conservation gives $$v = \\frac{m}{M}V$$ — small when the burned mass is small compared with the ship.' },
          { label: 'Step 4: Iterate', text: 'So long as material keeps being ejected, the rocket keeps gaining speed: rocket propulsion is the recoil of a gun and needs no air to push against.' },
        ],
        result: '$v = (m/M)\\cdot V$ after one ejection; continuous ejection applies the same law over and over — the seed of the rocket equation.',
      },
    ],
    keyTakeaways: [
      'Action equals reaction: mutual forces between two particles are equal, opposite, and collinear.',
      'Internal forces cancel in pairs, so the total momentum of an isolated system is constant: $m_1v_1 + m_2v_2 + \\cdots =$ const.',
      'The sum of the external forces equals the rate of change of total momentum — the system-level form of Newton\u2019s second law.',
      'Galilean relativity — physics looks the same in uniform motion — generates collision results by riding along, with no knowledge of the force law.',
      'Equal masses that stick end at the mean velocity $\\frac{1}{2}(v_1 + v_2)$; $m$ onto a resting $2m$ gives $v/3$; equal masses colliding elastically exchange velocities.',
      'A rocket accelerates by recoil, $v = (m/M)V$ — momentum conservation needs no air to push against.',
      'Momentum survives relativity (with $m = m_0/\\sqrt{1 - v^2/c^2}$), field theory (field momentum, light pressure) and quantum mechanics — even where $F = ma$ fails.',
    ],
    quiz: [
      {
        q: 'Two particles interact through an arbitrary, complicated force. From Newton\u2019s third law, the rate of change of $p_1 + p_2$ is:',
        options: ['Equal to the force between them', 'Zero', 'Twice the force on particle 1', 'Equal to the product $m_1m_2$'],
        answer: 1,
        explanation: 'Since $dp_1/dt = -dp_2/dt$, the changes cancel exactly, however violent or intricate the interaction: the total momentum of the pair never changes.',
      },
      {
        q: 'A mass $m$ moving at $v$ strikes a stationary mass $m$ and they stick. The final speed is:',
        options: [`$v$`, `$v/2$`, `$v/4$`, `$2v$`],
        answer: 1,
        explanation: 'Ride along with the symmetric case (equal opposite speeds stop dead): in the car frame $2v$ meets $0$ and the pair moves at $v$; scaling down, $v$ onto $0$ gives $v/2$. Momentum: $mv = 2m(v/2)$.',
      },
      {
        q: 'A mass $m$ moving at $v$ strikes a stationary mass $2m$ and they stick. The final speed is:',
        options: [`$v/2$`, `$v/3$`, `$2v/3$`, `$v/6$`],
        answer: 1,
        explanation: 'In the center-of-mass picture $m$ at $v$ meets $2m$ at $-v/2$ and both stop; a car passing at $-v/2$ turns this into $m$ at $3v/2$ hitting a resting $2m$ with result $v/2$. Rescaling gives $v$ onto rest \u2192 $v/3$. Check: $3m(v/3) = mv$.',
      },
      {
        q: 'Two equal masses collide elastically, one initially at rest. Afterwards:',
        options: ['Both move apart at $v/2$', 'Both stop', 'They exchange velocities — the target leaves at $v$, the projectile stops', 'They rebound with equal and opposite velocities'],
        answer: 2,
        explanation: 'In the elastic equal-mass case the momentum transfer is complete: the moving body stops and the struck one departs with the full speed. The $v/2$ answer belongs to the sticking case.',
      },
      {
        q: 'Why is heat a good place to hide energy but a bad place to hide momentum?',
        options: ['Because heat has no temperature', 'Because random atomic velocities sum to zero net momentum — any nonzero sum would show up as a visible drift of the whole body', 'Because momentum can be created but heat cannot', 'Because momentum is conserved only in elastic collisions'],
        answer: 1,
        explanation: 'Squaring random velocities gives a positive sum (energy); summing the vectors gives no net motion. Hidden momentum exists only in fields — light pressure being the measurable example.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.4
  {
    sectionId: 'young-ch1-s39',
    readingTime: 9,
    intro: 'Why can one equation of physics be trusted in every coordinate system? Because the laws are symmetric under translations and rotations of the axes, and vector analysis is the bookkeeping that exploits it. This section builds the machinery — components, sums, the dot product — and compresses Newton\u2019s three scalar laws into a single vector statement.',
    objectives: [
      'Define symmetry in Weyl\u2019s sense and verify translation and rotation invariance of Newton\u2019s laws',
      'Manipulate vectors: addition, scalar multiplication, components and unit vectors',
      'Decompose acceleration into tangential and normal parts and derive $v^2/R$',
      'Compute dot products in components and geometrically, and apply them to kinetic energy and work',
    ],
    concepts: [
      {
        term: 'Symmetry in physics',
        kind: 'definition',
        statement: 'A thing is symmetrical, in Hermann Weyl\u2019s definition, if it can be subjected to some operation and **appear exactly the same afterward**; a physical law is symmetrical when the operation is a change of coordinates.',
        detail: 'Build a complex machine in one place; build its twin somewhere else, oriented the same way, with every relevant influence moved along; the two behave identically. If they do not, something relevant was left behind — a wall pushing, the earth pulling — and hunting for it is part of the physics.',
      },
      {
        term: 'Symmetry under translation',
        kind: 'theorem',
        statement: 'Shifting the origin by $a$ sends $x\u2032 = x - a$, $y\u2032 = y$, $z\u2032 = z$, and the force components are unchanged ($F_{x\u2032} = F_x$, and so on); since $d^2x\u2032/dt^2 = d^2x/dt^2$ for constant $a$, Newton\u2019s laws hold in either system.',
        detail: 'There is no experiment that finds "the origin of the world" — Joe and Moe, with parallel axes at different places, write the same mechanics. The same argument shows an apparatus works the same in any sensibly chosen location.',
      },
      {
        term: 'Symmetry under rotation',
        kind: 'theorem',
        statement: 'Rotating the axes by angle $\\theta$ mixes the coordinates as $$x\u2032 = x\\cos\\theta + y\\sin\\theta, \\qquad y\u2032 = y\\cos\\theta - x\\sin\\theta,$$ and the force components transform by the identical formulas — so Newton\u2019s laws survive rotation too.',
        detail: 'The identity of the coordinate and force transformation rules is an "accident" of extreme importance. Caveat: a grandfather clock tilted to a new angle does behave differently — because the earth was not turned along with it; include the earth, wait a day for it to rotate, and the symmetry is restored. Delicate experiments can tell that the earth is rotating, but not by how much it has rotated.',
      },
      {
        term: 'Scalars and vectors',
        kind: 'definition',
        statement: 'A quantity with no direction (temperature, the number of potatoes in a sack) is a **scalar**; a quantity with three components that transform exactly like a step in space — like $(x, y, z)$ — is a **vector**.',
        detail: 'Not every triple of numbers is a vector: the components must revolve into one another by the rotation law when the axes turn. Velocity, momentum, force, acceleration and displacement are vectors; a vector equation true in one coordinate system is true in all — which is why physics writes its laws that way.',
      },
      {
        term: 'Vector algebra',
        kind: 'method',
        statement: 'Vectors add component by component, $\\mathbf{c} = \\mathbf{a} + \\mathbf{b}$ — equivalently $\\mathbf{c} = \\mathbf{b} + \\mathbf{a}$, and $\\mathbf{a} + (\\mathbf{b} + \\mathbf{c}) = (\\mathbf{a} + \\mathbf{b}) + \\mathbf{c}$; multiplying by a number $\\alpha$ multiplies each component; subtraction adds the negative.',
        detail: 'Geometrically, place the tail of $\\mathbf{b}$ on the head of $\\mathbf{a}$: the arrow from the tail of $\\mathbf{a}$ to the head of $\\mathbf{b}$ is the sum — a construction with no axes in sight. The difference $\\mathbf{d} = \\mathbf{a} - \\mathbf{b}$ is drawn even more easily, as the vector from the tip of $\\mathbf{b}$ to the tip of $\\mathbf{a}$.',
      },
      {
        term: 'Velocity and acceleration as vectors',
        kind: 'theorem',
        statement: 'The velocity is the time derivative of the position vector, $\\mathbf{v} = d\\mathbf{r}/dt$ — the limit of $\\Delta\\mathbf{r}/\\Delta t$ with $\\Delta\\mathbf{r} = \\mathbf{r}_2 - \\mathbf{r}_1$ — and differentiating any vector with respect to time produces a new vector.',
        detail: 'Since the components $dx/dt$, $dy/dt$, $dz/dt$ each transform like coordinates, the derivative inherits vector character. Three reliable ways to manufacture new vectors: multiply one by a constant, differentiate with respect to time, or add and subtract two.',
      },
      {
        term: 'Newton\u2019s laws in vector notation',
        kind: 'law',
        statement: 'With $\\mathbf{a} = d\\mathbf{v}/dt = d^2\\mathbf{r}/dt^2$, Newton\u2019s second law becomes the single vector equation $$m\\mathbf{a} = \\mathbf{F},$$ which silently stands for the three component laws.',
        detail: 'One law on paper, three laws in any particular frame — the vector notation guarantees rotational invariance automatically. All of physics\u2019 later field equations (Chapter 11 onward) are written as vector and tensor equations for exactly this reason.',
      },
      {
        term: 'Tangential and normal acceleration',
        kind: 'theorem',
        statement: 'On a curved path the acceleration splits into a tangential piece $a_\\parallel = dv/dt$ (the change of speed) and a perpendicular piece $$a_\\perp = v\\,\\frac{\\Delta\\theta}{\\Delta t} = \\frac{v^2}{R}$$ (the change of direction), with $R$ the local radius of curvature.',
        detail: 'To subtract velocity vectors drawn at different points, they must first be moved to a common tail — a classic trap. With $\\Delta v_\\perp = v\\Delta\\theta$ and the arc $v\\Delta t = R\\Delta\\theta$, the perpendicular acceleration follows in two lines. The two components are independent: one changes how fast, the other which way.',
      },
      {
        term: 'The scalar (dot) product',
        kind: 'definition',
        statement: 'The dot product $$\\mathbf{a}\\cdot\\mathbf{b} = a_xb_x + a_yb_y + a_zb_z = ab\\cos\\theta$$ is the same number in every coordinate system — a scalar built from two vectors.',
        detail: 'Its invariance follows from that of lengths: $\\mathbf{a}\\cdot\\mathbf{a} = a_x^2 + a_y^2 + a_z^2$ is the squared length of the step. Applications: kinetic energy $\\frac{1}{2}m(\\mathbf{v}\\cdot\\mathbf{v})$; work $\\mathbf{F}\\cdot\\mathbf{s}$; components via the unit vectors $\\mathbf{i}\\cdot\\mathbf{i} = 1$, $\\mathbf{i}\\cdot\\mathbf{j} = 0$, with $\\mathbf{a} = a_x\\mathbf{i} + a_y\\mathbf{j} + a_z\\mathbf{k}$. The vector product $\\mathbf{a}\\times\\mathbf{b}$ waits for the rotation chapters.',
      },
    ],
    examples: [
      {
        title: 'Rotating the axes: a numerical check',
        problem: 'A point sits at $(x, y) = (1, 0)$ and a force with components $(3, 4)$ N acts on it. Moe rotates his axes by $\\theta = 30\u00b0$ (so $\\cos\\theta = 0.866$, $\\sin\\theta = 0.500$). What does Moe see, and does the force still have magnitude 5 N?',
        steps: [
          { label: 'Step 1: Transform the point', text: '$x\u2032 = 1 \\times 0.866 + 0 \\times 0.500 = 0.866$; $y\u2032 = 0 \\times 0.866 - 1 \\times 0.500 = -0.500$. Check: $0.866^2 + 0.500^2 = 0.75 + 0.25 = 1$ — the same distance from the origin.' },
          { label: 'Step 2: Transform the force', text: 'The same rule applies: $F_{x\u2032} = 3 \\times 0.866 + 4 \\times 0.500 = 4.598$ N and $F_{y\u2032} = 4 \\times 0.866 - 3 \\times 0.500 = 1.964$ N.' },
          { label: 'Step 3: Check the magnitude', text: '$|\\mathbf{F}|^2 = 4.598^2 + 1.964^2 = 21.14 + 3.86 = 25.0$, so $|\\mathbf{F}| = 5$ N — unchanged by the rotation, exactly as a vector statement promises.' },
          { label: 'Step 4: The moral', text: 'Joe\u2019s $\\mathbf{F} = m\\mathbf{a}$ and Moe\u2019s $\\mathbf{F}\u2032 = m\\mathbf{a}\u2032$ are the same physics in different numerals; nothing in the experiment can reveal whose axes were used.' },
        ],
        result: 'Moe sees the point at $(0.866, -0.500)$ and the force at $(4.598, 1.964)$ N — the same 5-newton force. Rotation changes the numbers, never the physics.',
      },
      {
        title: 'The parabola of a fast projectile',
        problem: 'A bullet is fired horizontally at $u = 2000$ ft/s. Using $g = 32$ ft/s², find its path and its drop after one second.',
        steps: [
          { label: 'Step 1: Decompose the motion', text: 'Horizontally no force acts: $x = ut$. Vertically the constant pull gives $y = -\\frac{1}{2}gt^2 = -16t^2$.' },
          { label: 'Step 2: Eliminate the time', text: 'With $t = x/u$, $$y = -\\frac{g}{2u^2}x^2 = -\\frac{32}{2(2000)^2}x^2 = -\\frac{x^2}{250{,}000}$$ — a parabola.' },
          { label: 'Step 3: Evaluate the drop', text: 'After one second the bullet has traveled $x = 2000$ ft and dropped $y = -(2000)^2/250{,}000 = -16$ ft — exactly the free-fall figure: the vertical motion ignores the horizontal completely.' },
          { label: 'Step 4: General statement', text: 'Any freely falling body shot out in any direction follows a parabola; increasing $u$ stretches the parabola sideways, which is why the same 16-ft drop carries a faster bullet farther.' },
        ],
        result: 'The path is $y = -x^2/250{,}000$ (feet); at one second the bullet is 2000 ft out and 16 ft down — precisely where a dropped bullet would be vertically.',
      },
      {
        title: 'A sanity check on a = v²/R',
        problem: 'A satellite in a circular orbit near the earth travels at about 5 mi/s at a radius of 4000 miles. Verify that the required centripetal acceleration is essentially the acceleration of gravity, $g \\approx 32$ ft/s².',
        steps: [
          { label: 'Step 1: Apply the formula', text: '$a = v^2/R = (5)^2/4000 = 25/4000 = 1/160$ mi/s².' },
          { label: 'Step 2: Convert the units', text: 'One mile is 5280 ft, so $a = 5280/160 = 33$ ft/s².' },
          { label: 'Step 3: Interpret', text: 'Within the rounding of "about 5 miles per second", this is the familiar $g$: a body moving at 5 mi/s falls toward the earth\u2019s center at exactly the rate gravity supplies — which is what being in orbit means. This is the arithmetic behind Mr. Gagarin\u2019s flight in Chapter 4\u2019s gravitation lecture.' },
        ],
        result: '$a \\approx 33$ ft/s² $\\approx g$: the sideways acceleration needed to bend the satellite\u2019s path into a circle is supplied by gravity itself.',
      },
    ],
    keyTakeaways: [
      'Symmetry (Weyl): an operation after which the thing looks the same; the laws of physics are symmetric under translations and rotations of the coordinate axes.',
      'Translations: $x\u2032 = x - a$; rotations: $x\u2032 = x\\cos\\theta + y\\sin\\theta$, $y\u2032 = y\\cos\\theta - x\\sin\\theta$ — force components follow the same rules, so Newton\u2019s laws survive both.',
      'A vector is three numbers that transform like a step in space; velocity, momentum, force, acceleration — and any time derivative of a vector — are vectors.',
      'Vector addition is tail-to-head and order-free; the difference $\\mathbf{a} - \\mathbf{b}$ runs from the tip of $\\mathbf{b}$ to the tip of $\\mathbf{a}$.',
      'On a curved path the tangential acceleration $dv/dt$ changes the speed and the normal acceleration $v^2/R$ changes the direction.',
      'The dot product $\\mathbf{a}\\cdot\\mathbf{b} = ab\\cos\\theta$ is rotation-invariant; it builds kinetic energy $\\frac{1}{2}m(\\mathbf{v}\\cdot\\mathbf{v})$ and work $\\mathbf{F}\\cdot\\mathbf{s}$.',
    ],
    quiz: [
      {
        q: 'Moe\u2019s axes are Joe\u2019s axes translated by a constant vector. For the force components they measure on the same particle:',
        options: ['They differ by the translation distance', 'They are identical: $F_{x\u2032} = F_x$ and so on', 'They are rotated by 90\u00b0', 'They are equal and opposite'],
        answer: 1,
        explanation: 'Force components are projections, unaffected by where the origin sits. Since a constant shift does not change accelerations either ($d^2a/dt^2 = 0$), both observers write exactly Newton\u2019s laws.',
      },
      {
        q: 'Which triple of numbers is NOT automatically a vector?',
        options: ['The velocity components of a particle', 'Three numbers that keep the same values in every coordinate system', 'The components of a force', 'The components of the position vector $\\mathbf{r}$'],
        answer: 1,
        explanation: 'A vector\u2019s components must mix by the rotation law when the axes turn. Being a vector is about how the numbers change, not about how many there are.',
      },
      {
        q: 'A particle moves at constant speed along a curved path. Its acceleration:',
        options: ['Is zero', 'Points along the motion', 'Points perpendicular to the motion, with magnitude $v^2/R$', 'Points opposite to the motion'],
        answer: 2,
        explanation: 'With $dv/dt = 0$ the tangential part vanishes; only the direction changes, at the rate $a_\\perp = v^2/R$ where $R$ is the local radius of curvature.',
      },
      {
        q: 'The dot product $\\mathbf{a}\\cdot\\mathbf{b}$ equals:',
        options: [`$ab\\sin\\theta$`, '$ab\\cos\\theta$ — the same number in every coordinate system', 'A vector perpendicular to both', 'The area of the parallelogram they span'],
        answer: 1,
        explanation: '$\\mathbf{a}\\cdot\\mathbf{b} = ab\\cos\\theta$ is a scalar invariant; the sine, the perpendicular vector and the parallelogram area belong to the cross product $\\mathbf{a}\\times\\mathbf{b}$, which arrives with rotation in Chapter 5.',
      },
      {
        q: 'Two vectors of length 5 point at right angles. Their sum has length:',
        options: ['10', `$5\\sqrt{2} \\approx 7.07$`, '5', '25'],
        answer: 1,
        explanation: 'Tail-to-head addition gives the diagonal of a square with side 5: $\\sqrt{5^2 + 5^2} = 5\\sqrt{2}$. In components, $(5, 0) + (0, 5) = (5, 5)$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.5
  {
    sectionId: 'hall-ch5-s35',
    readingTime: 10,
    intro: 'Newton\u2019s laws are a program — "pay attention to the forces" — and this lecture is the catalogue: friction, molecular attraction, the electrical and magnetic fundamentals, pseudo forces, and the nuclear forces that die exponentially. The running theme is honesty about which laws are fundamental and which are lumps of complexity wearing simple clothes.',
    objectives: [
      'Explain why $F = ma$ is a law of nature rather than a definition',
      'Apply the friction law $F = \\mu N$ and its inclined-plane measurement',
      'Catalogue the fundamental forces and their laws, including the field concept',
      'Recognize pseudo forces and their proportionality to mass',
      'Characterize the nuclear forces and the exponential Yukawa-type cutoff',
    ],
    concepts: [
      {
        term: 'Is F = ma only a definition?',
        kind: 'insight',
        statement: 'If force were "defined" as $ma$, the law would say nothing; in truth $F = ma$ is an **approximate law of nature**, and force has an independent physical character: it is zero unless some material body is present to source it.',
        detail: 'Feynman\u2019s parody "gorce" — defined so that momentum conservation always holds — shows the difference: the gorce has no material origin. All physical laws are approximations of increasing precision; even a chair cannot be defined exactly (atoms evaporate from it, dirt settles on it), and idealization — to a part in $10^{10}$ or so — is the working trick of physics.',
      },
      {
        term: 'Dry sliding friction',
        kind: 'law',
        statement: 'The force needed to slide one dry body over another is approximately proportional to the **normal force** between them, $$F = \\mu N,$$ with the coefficient $\\mu$ roughly independent of the weight, the contact area and (within limits) the speed.',
        detail: 'On a plane tilted until the block just slides, $W\\sin\\theta = \\mu W\\cos\\theta$, so $\\mu = \\tan\\theta$ — and loading the block with extra weight cancels out. The law is only semi-empirical: real blocks halt and jerk because $\\mu$ varies along the surface, and published tables of "copper on copper" are all false because friction is really copper-oxide-on-dirt. Ultra-pure, outgassed copper cold-welds to itself and $\\mu$ becomes several times unity; a wetted glass tumbler on a glass plate binds and scratches.',
      },
      {
        term: 'Fluid drag',
        kind: 'law',
        statement: 'The drag on a fast airplane is roughly $F \\approx cv^2$; on a slow body in a viscous liquid (a ball in honey) it is closer to proportional to $v$.',
        detail: 'These empirical laws grow more complicated, not simpler, under closer study — the drag on one wing depends on whether the other wing is present — and no simple formula connects the coefficient $c$ to the airplane\u2019s shape. They are engineering laws, not fundamental ones; gravity, by contrast, reveals greater simplicity the harder it is studied.',
      },
      {
        term: 'Molecular forces',
        kind: 'insight',
        statement: 'Between atoms the force is a weak attraction falling as $1/r^7$ for nonpolar molecules at large separation, and a violent repulsion at short range; near the equilibrium separation $d$ the curve is nearly straight — **Hooke\u2019s law**.',
        detail: 'Polar molecules, whose positive and negative charge centers do not coincide, exert stronger dipole-dipole forces. Push molecules slightly closer than $d$ and enormous repulsion resists — that is what keeps us from falling through the floor; pull slightly apart and attraction restores. The restoring force proportional to displacement is Hooke\u2019s law of elasticity: a steel coil spring adds nearly equal extensions for equal 100-gram weights until overloaded. Johansson gauge blocks, wrung together flat, adhere by these molecular attractions strongly enough to lift one another.',
      },
      {
        term: 'Electrical force',
        kind: 'law',
        statement: 'Charges $q_1$ and $q_2$ a distance $r$ apart attract or repel along their joining line with $$F = \\frac{q_1q_2}{4\\pi\\epsilon_0 r^2},$$ with $\\epsilon_0 = 8.854\\times10^{-12}$ coul\u00b2/N\u00b7m\u00b2, that is, $1/4\\pi\\epsilon_0 = 8.99\\times10^9$ N\u00b7m\u00b2/coul\u00b2.',
        detail: 'The electron carries nature\u2019s basic charge, $1.60\\times10^{-19}$ coulomb; the combination $e^2 = q_{\\mathrm{el}}^2/4\\pi\\epsilon_0 = (1.52\\times10^{-14})^2$ lets the force between two electrons be written simply $e^2/r^2$. Unlike charges attract exactly like gravity; like charges repel with the sign reversed. The law holds for charges at rest — moving charges require the field idea.',
      },
      {
        term: 'Fields',
        kind: 'definition',
        statement: 'Instead of action at a distance, say that a charge (or a mass) creates a **field** everywhere — $\\mathbf{E} = q_1\\mathbf{r}/4\\pi\\epsilon_0 r^3$ for electricity, $\\mathbf{C} = -Gm_1\\mathbf{r}/r^3$ for gravity — and the field acts on whatever is placed there: $\\mathbf{F} = q_2\\mathbf{E}$ (or $m_2\\mathbf{C}$).',
        detail: 'The split — sources make fields, fields push charges — looks trivial for static inverse-square laws but becomes essential when things move: the influence takes time to cross space, and the field keeps track of where everything was. Fields carry energy and momentum (Section 3.3), which makes them very real. Superposition holds: $\\mathbf{E} = \\mathbf{E}_1 + \\mathbf{E}_2 + \\cdots$ — absolutely guaranteed for electricity, only approximate for gravity once Einstein\u2019s corrections matter.',
      },
      {
        term: 'Magnetic force',
        kind: 'law',
        statement: 'The magnetic part of the force on a moving charge is **perpendicular to both the velocity and the field**; in components, $$F_x = q(E_x + v_yB_z - v_zB_y)$$ and cyclically for $y$ and $z$.',
        detail: 'The electron-beam tube displays its personality: electric deflection follows the sign of the plate, while a horseshoe magnet deflects up or down according to the pole orientation — invert the magnet end-for-end and the deflection persists; swap the poles side-for-side and it flips. Because the magnetic force is transverse to the motion, it does no work — a fact Chapter 4 exploits.',
      },
      {
        term: 'Pseudo forces',
        kind: 'definition',
        statement: 'An observer in an accelerated frame finds mysterious forces $F\u2032 = F - ma$ proportional to the masses; "centrifugal force" and the tilted water in an accelerating jar are bookkeeping for using the **wrong coordinates**, not new physics.',
        detail: 'Pseudo forces are always proportional to the mass — exactly like gravity — and Einstein seized this coincidence: acceleration imitates gravitation so well that locally the two cannot be told apart, an idea that leads to curved space-time (Chapter 9 and Chapter 14). Feynman\u2019s illustration of the geometry: dwellers on a sphere who shoot objects along great circles watch them apparently attract each other — nothing pulls; the geometry is "weird".',
      },
      {
        term: 'Nuclear forces',
        kind: 'law',
        statement: 'Within the nucleus the force is enormous but short-ranged, dying off exponentially: $$F = \\frac{1}{r^2}\\exp(-r/r_0), \\qquad r_0 \\approx 10^{-13}\\text{ cm},$$ the Yukawa-type form.',
        detail: 'At nuclear distances only quantum mechanics applies, and analysis replaces force by interaction energy — the potential-energy curves of Chapter 4. Attempts to understand these forces uncovered the strange particles, the \u03c0-mesons that Yukawa\u2019s picture predicts, but the fundamental machinery remains unsolved. For scale: the electrical repulsion between two electrons exceeds their gravitational attraction by $4.17\\times10^{42}$ — the hierarchy, worked out in Chapter 4, that lets gravity rule planets while electricity rules matter.',
      },
    ],
    examples: [
      {
        title: 'Friction from an inclined plane',
        problem: 'How is the coefficient of friction measured, and why does the answer not depend on the weight of the sliding block?',
        steps: [
          { label: 'Step 1: Balance on the incline', text: 'Tilt a plane to angle $\\theta$ until a block of weight $W$ just slides steadily: the down-slope pull is $W\\sin\\theta$, the friction is $\\mu N$, and the normal force is $N = W\\cos\\theta$.' },
          { label: 'Step 2: Solve for the coefficient', text: 'Steady sliding requires $W\\sin\\theta = \\mu W\\cos\\theta$, so $$\\mu = \\tan\\theta.$$' },
          { label: 'Step 3: Load the block', text: 'Add weight: every term scales with the same $W$, which cancels — the loaded block slides at the same angle even when one weight is many times the other. Conclusion: $\\mu$ is independent of the weight.' },
          { label: 'Step 4: Respect the limits', text: 'The block actually halts and jerks — $\\mu$ varies from place to place with dirt, oxides and hardness; at excessive normal force or speed the law fails by heating. Tables of "steel on steel" are false precision.' },
        ],
        result: '$\\mu = \\tan\\theta$ at the sliding angle; the weight cancels, so one measurement serves all loads. The law is a useful engineering approximation, not a fundamental one.',
      },
      {
        title: 'How strong is the electrical force?',
        problem: 'Use Feynman\u2019s shorthand $e^2 = (1.52\\times10^{-14})^2$ N\u00b7m\u00b2 to find the electrical force between two electrons 1 cm apart, and again 1 m apart.',
        steps: [
          { label: 'Step 1: The shorthand constant', text: '$e^2 = q_{\\mathrm{el}}^2/4\\pi\\epsilon_0 = (1.52\\times10^{-14})^2 = 2.31\\times10^{-28}$ N\u00b7m\u00b2, so the force between two electrons is simply $F = e^2/r^2$.' },
          { label: 'Step 2: At 1 cm', text: 'With $r = 10^{-2}$ m, $r^2 = 10^{-4}$ m\u00b2: $F = 2.31\\times10^{-28}/10^{-4} = 2.3\\times10^{-24}$ N.' },
          { label: 'Step 3: At 1 m', text: '$F = 2.31\\times10^{-28}/1 = 2.3\\times10^{-28}$ N — four orders of magnitude weaker at a hundred times the distance: the inverse-square law at work.' },
          { label: 'Step 4: Perspective', text: 'The gravitational pull between the same two electrons at 1 m is about $5.5\\times10^{-71}$ N — smaller by the factor $4.2\\times10^{42}$ (Chapter 4 works this out). Electricity, not gravity, runs the atomic world.' },
        ],
        result: 'About $2.3\\times10^{-24}$ N at 1 cm and $2.3\\times10^{-28}$ N at 1 m — tiny in absolute terms, yet $4.2\\times10^{42}$ times stronger than the electrons\u2019 mutual gravity.',
      },
      {
        title: 'The short leash of nuclear forces',
        problem: 'The nuclear force is summarized as $F = (1/r^2)\\exp(-r/r_0)$ with $r_0 \\approx 10^{-13}$ cm. How rapidly does it die with distance?',
        steps: [
          { label: 'Step 1: Evaluate the exponential factor', text: 'At $r = r_0$ the factor is $e^{-1} \\approx 0.37$; at $r = 2r_0$, $e^{-2} \\approx 0.14$; at $r = 3r_0$, $e^{-3} \\approx 0.05$.' },
          { label: 'Step 2: Compare with pure inverse-square', text: 'A Coulomb force at $3r_0$ still has $1/9 \\approx 0.11$ of its strength at $r_0$; the nuclear force has been beaten down to about $0.05 \\times 1/9 \\approx 0.006$ of its $r_0$ value.' },
          { label: 'Step 3: Interpret the range', text: 'Beyond a few times $10^{-13}$ cm the force has effectively vanished: nuclei feel each other only on contact, while gravity and electricity reach across the solar system and beyond.' },
          { label: 'Step 4: Honest status', text: 'No exact law of nuclear force is known; this Yukawa-type form is a crude approximation, and the search for its mechanism uncovered the \u03c0-mesons and much else besides.' },
        ],
        result: 'The exponential throttles the force — roughly a factor of twenty weaker per additional $r_0$ beyond the first. Nuclear forces are enormously strong but fantastically short-ranged.',
      },
    ],
    keyTakeaways: [
      'Force is not a definition: $F = ma$ is an approximate law, and real forces have material sources in the neighborhood.',
      'Dry friction: $F = \\mu N$ with $\\mu = \\tan\\theta$ at the sliding angle; independent of weight, unreliable in the tables, and replaced by cold-welding for perfectly clean metals.',
      'Aerodynamic drag $\\approx cv^2$ (linear in honey at low speed) is empirical and grows more complex under study; fundamental laws grow simpler.',
      'Molecular forces attract as $1/r^7$ at range, repel violently up close, and near equilibrium reduce to Hooke\u2019s law $F \\propto x$.',
      'Fields: sources make $\\mathbf{E}$ (or $\\mathbf{C}$), fields push charges (or masses); superposition is exact for electricity.',
      'Pseudo forces ($F - ma$) counterfeit gravity because both are proportional to mass — the clue Einstein followed to curved space-time.',
      'Nuclear forces follow the Yukawa-type $F = (1/r^2)e^{-r/r_0}$ with range $10^{-13}$ cm — strong but claustrophobically short-ranged.',
    ],
    quiz: [
      {
        q: 'A block just slides steadily on a plane tilted at angle $\\theta$. The coefficient of friction is:',
        options: [`$\\sin\\theta$`, `$\\cos\\theta$`, `$\\tan\\theta$`, `$1/\\tan\\theta$`],
        answer: 2,
        explanation: 'Steady sliding requires $W\\sin\\theta = \\mu W\\cos\\theta$; the weight cancels and $\\mu = \\tan\\theta$. Loading the block changes nothing — every term scales together.',
      },
      {
        q: 'Tables listing $\\mu$ for "copper on copper" are misleading because:',
        options: ['Copper is too soft to measure', 'The surfaces actually in contact are oxides, dirt and contaminants, not pure copper', 'Friction does not depend on the surfaces at all', 'The coefficient depends only on temperature'],
        answer: 1,
        explanation: 'Real surfaces carry oxide and grease layers; with perfectly clean, outgassed copper the pieces cold-weld and the "coefficient" exceeds unity — the atoms cannot tell they belong to different blocks.',
      },
      {
        q: 'The force between two nonpolar molecules at large separation varies approximately as:',
        options: [`$1/r^2$`, `$1/r^7$`, `$1/r^3$`, 'It is zero'],
        answer: 1,
        explanation: 'The quantum-mechanical attraction between nonpolar molecules falls as the seventh power of the distance; polar molecules with dipole moments attract more strongly. Close in, the repulsion takes over — the combination makes solids.',
      },
      {
        q: 'In the field picture, the force on charge $q_2$ due to charge $q_1$ is written:',
        options: ['$\\mathbf{F} = q_1q_2\\mathbf{r}/4\\pi\\epsilon_0 r^3$ directly — no fields needed', `$\\mathbf{F} = q_2\\mathbf{E}$, where $\\mathbf{E} = q_1\\mathbf{r}/4\\pi\\epsilon_0 r^3$ is the field produced by $q_1$`, '$\\mathbf{F} = q_1\\mathbf{E}$ always', `$\\mathbf{F} = \\mathbf{E}/q_2$`],
        answer: 1,
        explanation: 'The analysis splits in two: sources produce fields, and fields act on charges. For statics it is a convenience; for moving charges — where influences lag — it becomes essential, since the field itself carries energy and momentum.',
      },
      {
        q: 'The nuclear force between two nuclei at distance $r$ is best summarized as:',
        options: ['$F = Gm_1m_2/r^2$ — gravity-like and unlimited in range', '$F = (1/r^2)\\exp(-r/r_0)$ — inverse-square throttled by an exponential of range $r_0 \\approx 10^{-13}$ cm', '$F = \\mu N$ — proportional to the normal force', '$F = q_1q_2/4\\pi\\epsilon_0 r^2$ with a different constant'],
        answer: 1,
        explanation: 'Beyond a few nuclear diameters the exponential kills the force — enormously strong up close, effectively zero at atomic distances. That is why nuclei bind tightly but do not notice each other across a molecule.',
      },
    ],
  },
]

export const physCh3Formulas: FormulaEntry[] = [
  {
    chapterId: 'hall-ch2',
    section: '4.29',
    name: 'Speed as a derivative',
    formula: 'v = ds/dt',
    latex: 'v = \\frac{ds}{dt}',
    note: 'the limit of \u0394s/\u0394t as the interval shrinks to zero',
  },
  {
    chapterId: 'hall-ch2',
    section: '4.29',
    name: 'Distance as an integral',
    formula: 's = \u222bv(t) dt',
    latex: 's = \\int v(t)\\,dt',
    note: 'integration undoes differentiation',
  },
  {
    chapterId: 'young-ch1',
    section: '1.39',
    name: 'Scalar (dot) product',
    formula: 'a\u00b7b = ab cos \u03b8',
    latex: '\\mathbf{a}\\cdot\\mathbf{b} = ab\\cos\\theta',
    note: 'the same number in every coordinate system',
  },
  {
    chapterId: 'hall-ch5',
    section: '6.35',
    name: 'Dry sliding friction',
    formula: 'F = \u03bcN',
    latex: 'F = \\mu N',
    note: '\u03bc = tan \u03b8 at the sliding angle; independent of weight',
  },
  {
    chapterId: 'hall-ch5',
    section: '6.35',
    name: 'Coulomb\u2019s law',
    formula: 'F = q\u2081q\u2082/4\u03c0\u03b5\u2080r\u00b2',
    latex: 'F = \\frac{q_1 q_2}{4\\pi\\varepsilon_0 r^{2}}',
    note: '1/4\u03c0\u03b5\u2080 = 8.99\u00d710\u2079 N\u00b7m\u00b2/C\u00b2',
  },
]

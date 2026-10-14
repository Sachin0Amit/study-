import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 9: Differential Equations (Sections 9.1 – 9.6)
// Master study content. Worked-example numbers follow the book’s own style
// (turkey cooling, Euler tables, tank and population data, Lotka–Volterra).
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh9Content: SectionContent[] = [
  // ------------------------------------------------------------------ 9.1
  {
    sectionId: 'calc-ch9-s1',
    readingTime: 9,
    intro: 'Many of the most important laws of science are not formulas but equations about rates: a body cools in proportion to its temperature excess, a falling object gains speed until drag balances gravity, a tank’s salt content changes with the flow through it. A **differential equation** — an equation containing an unknown function and one or more of its derivatives — is the mathematical form such laws take. This section learns to read, verify and build these equations, and to solve the two simplest models completely.',
    objectives: [
      'Define a differential equation, its order, and what it means for a function to be a solution, including general and particular solutions',
      'Solve simple initial-value problems and fit initial conditions to families of solutions',
      'Translate verbal laws into differential equations: Newton’s Law of Cooling, mixing tanks and free fall with air resistance',
      'Solve Newton’s Law of Cooling completely, using one data point to pin down the constant of proportionality',
      'Interpret free fall with drag and its terminal velocity',
    ],
    concepts: [
      {
        term: 'Differential equation and order',
        kind: 'definition',
        statement: 'A **differential equation** is an equation involving an unknown function $y$ and one or more of its derivatives; the **order** of the equation is the order of the highest derivative that appears in it.',
        detail: 'The population law $\\frac{dP}{dt} = kP$ and the cooling law $\\frac{dT}{dt} = k(T - T_s)$ are first order, while the spring equation $m\\frac{d^2s}{dt^2} = -ks$ is second order. Chapter 17 builds the theory of second-order equations from the machinery developed here; the essential habit — check a proposed solution by substituting it — is the same at every order.',
      },
      {
        term: 'Solution, general solution, particular solution',
        kind: 'definition',
        statement: 'A **solution** of a differential equation on an interval is a function $y = f(x)$, with as many continuous derivatives as the equation requires, that makes the equation true for every $x$ in the interval when substituted into it. A **general solution** contains one arbitrary constant per order — a one-parameter **family** of curves — and a **particular solution** is a single member of that family.',
        detail: 'Substitution is the only test: differentiate the candidate, plug in, and check an identity. For $\\frac{dy}{dx} = xy$, the family $y = Ce^{x^2/2}$ passes this test for every value of $C$, which is why the constant survives — the equation cannot distinguish among the members. Only an extra condition can.',
      },
      {
        term: 'Initial-value problem and uniqueness',
        kind: 'theorem',
        statement: 'An **initial-value problem** is a differential equation together with an initial condition $y(x_0) = y_0$. If $f$ and $\\frac{\\partial f}{\\partial y}$ are continuous near $(x_0, y_0)$, then the problem $y\' = f(x, y)$, $y(x_0) = y_0$ has exactly one solution on some interval containing $x_0$.',
        detail: 'Geometrically: through each point of the plane passes exactly one solution curve — solutions never cross. This is what makes the pictures in the next section trustworthy. The uniqueness hypothesis genuinely matters: $y\' = y^{2/3}$ has infinitely many solutions through $y(0) = 0$ because $y^{2/3}$ has no derivative with respect to $y$ at $0$.',
      },
      {
        term: 'Newton’s Law of Cooling',
        kind: 'law',
        statement: 'The rate at which an object’s temperature changes is proportional to the difference between its temperature and the temperature of its surroundings: $$\\frac{dT}{dt} = k(T - T_s),$$ where $T_s$ is the ambient temperature and $k$ is a constant (negative for a cooling object).',
        detail: 'The solution $T(t) = T_s + (T_0 - T_s)e^{kt}$ shows the temperature *excess* decaying exponentially: the object never quite reaches $T_s$. The law is an excellent model for small temperature differences — coffee cooling on a desk, a corpse cooling in a murder mystery, or Stewart’s roasted turkey worked below.',
      },
      {
        term: 'Mixing model',
        kind: 'method',
        statement: 'For a tank whose volume is $V(t)$, with solution entering at concentration $c_{in}$ and flow rate $r_{in}$ and the well-mixed solution leaving at rate $r_{out}$, the amount $A(t)$ of dissolved substance obeys $$\\frac{dA}{dt} = c_{in}\\,r_{in} - \\frac{A(t)}{V(t)}\\,r_{out}.$$',
        detail: 'The outflow term uses the *current* concentration $A/V$ because the tank is stirred. Example: a 60-liter tank of pure water receiving brine at $0.5$ kg/L and $3$ L/min, with outflow also $3$ L/min, gives $\\frac{dA}{dt} = 1.5 - \\frac{A}{20}$ — solvable by separation (Section 9.3) or by an integrating factor (Section 9.5). Note how the assumption of perfect mixing, so convenient here, is the same idealization used in the tank-drain applied project in the book.',
      },
      {
        term: 'Free fall with air resistance',
        kind: 'law',
        statement: 'If drag is proportional to speed, a falling body of mass $m$ obeys $$m\\frac{dv}{dt} = mg - kv,$$ whose solutions approach the **terminal velocity** $v_T = \\frac{mg}{k}$, because that is exactly the speed at which drag cancels gravity.',
        detail: 'The solution from rest is $v(t) = \\frac{mg}{k}\\left(1 - e^{-kt/m}\\right)$: exponential approach with time constant $\\frac{m}{k}$. For an 80-kg skydiver with $k = 16$ kg/s, $v_T = 49$ m/s (about 176 km/h) and the time constant is 5 seconds. Raindrops, parachutists and coffee filters all obey this law; the demonstration in the book compares the filter’s short time constant with the skydiver’s long one.',
      },
      {
        term: 'Modeling as translation',
        kind: 'insight',
        statement: 'Building a differential-equation model is a translation task: convert a verbal statement about a rate into an equation, solve it, then compare predictions with data and revise.',
        detail: 'The loop — model, solve, test, refine — is the scientific method compressed into mathematics. The exponential decay of Chapter 3.8, the populations of Section 9.4 and the circuits of Section 9.5 are all instances of the same three-step pattern. A model that is *wrong forever* (exponential growth) may be *right for now*, and knowing when it fails is as valuable as the formula itself.',
      },
    ],
    examples: [
      {
        title: 'Verifying a family of solutions and fitting an initial condition',
        problem: 'Show that for any constant $C$ the function $T(t) = 75 + Ce^{-kt}$ (with $k > 0$) satisfies the cooling equation $\\frac{dT}{dt} = -k(T - 75)$. Then choose $C$ so that $T(0) = 185$.',
        steps: [
          { label: 'Step 1: Differentiate the candidate', text: 'Holding $C$ and $k$ constant, $\\frac{dT}{dt} = -kCe^{-kt}$.' },
          { label: 'Step 2: Substitute into the equation', text: 'From the formula itself, $T - 75 = Ce^{-kt}$. Multiplying by $-k$ gives $-k(T - 75) = -kCe^{-kt}$, which equals $\\frac{dT}{dt}$ exactly — the equation is satisfied for **every** value of $C$.' },
          { label: 'Step 3: Fit the initial condition', text: 'Set $t = 0$: $185 = 75 + Ce^{0} = 75 + C$, so $C = 110$. The particular member is $T(t) = 75 + 110e^{-kt}$.' },
          { label: 'Step 4: Interpret the family', text: 'Every member starts from its own initial temperature and decays toward the room temperature $75$; the still-unknown constant $k$ controls only **how fast**, and a single later data point will determine it.' },
        ],
        result: 'The whole family $T = 75 + Ce^{-kt}$ solves $\\frac{dT}{dt} = -k(T - 75)$; the member with $T(0) = 185$ is $T(t) = 75 + 110e^{-kt}$.',
      },
      {
        title: 'The roasted turkey (Newton’s Law of Cooling)',
        problem: 'A turkey is taken from the oven when its temperature has reached 185°F and is placed on a table in a room where the temperature is 75°F. After half an hour the turkey has cooled to 150°F. When will its temperature be 100°F?',
        steps: [
          { label: 'Step 1: Write the model', text: 'By Newton’s Law of Cooling, $\\frac{dT}{dt} = k(T - 75)$, where $k$ is a constant that the data will force to be negative.' },
          { label: 'Step 2: Shift out the ambient temperature', text: 'Let $y = T - 75$. Then $\\frac{dy}{dt} = ky$ with $y(0) = 185 - 75 = 110$, so by the exponential growth and decay result of Chapter 3.8, $y(t) = 110e^{kt}$.' },
          { label: 'Step 3: Use the half-hour data point', text: 'At $t = 30$ the temperature is 150°F, so $y(30) = 150 - 75 = 75$. Then $110e^{30k} = 75$, giving $e^{30k} = \\frac{15}{22}$ and $k = \\frac{1}{30}\\ln\\frac{15}{22} \\approx -0.0128$ per minute.' },
          { label: 'Step 4: Assemble the solution', text: 'The temperature excess is $110e^{kt}$, so $T(t) = 75 + 110\\left(\\frac{15}{22}\\right)^{t/30}$: every half hour the excess shrinks to $\\frac{15}{22} \\approx 0.68$ of itself.' },
          { label: 'Step 5: Answer the question', text: 'Set $T = 100$: $110\\left(\\frac{15}{22}\\right)^{t/30} = 25$, so $\\left(\\frac{15}{22}\\right)^{t/30} = \\frac{5}{22}$. Taking logarithms, $t = 30\\,\\frac{\\ln(5/22)}{\\ln(15/22)} \\approx 30(3.87) \\approx 116$ minutes.' },
        ],
        result: 'About 116 minutes — nearly two hours after leaving the oven — the turkey passes through 100°F. The negative constant $k \\approx -0.0128$ confirms the excess decays roughly 1.3 percent per minute.',
      },
      {
        title: 'Falling with drag — terminal velocity',
        problem: 'An object of mass $m$ is dropped from rest, and air resistance is proportional to velocity, so $m\\frac{dv}{dt} = mg - kv$. Show that $v(t) = \\frac{mg}{k}\\left(1 - e^{-kt/m}\\right)$ solves the initial-value problem, then estimate the speed of an 80-kg skydiver with $k = 16$ kg/s both after 5 seconds and in the long run.',
        steps: [
          { label: 'Step 1: Check the initial condition', text: 'At $t = 0$ the formula gives $v(0) = \\frac{mg}{k}(1 - 1) = 0$ — the object starts from rest, as required.' },
          { label: 'Step 2: Differentiate', text: '$\\frac{dv}{dt} = \\frac{mg}{k}\\cdot\\frac{k}{m}e^{-kt/m} = ge^{-kt/m}$, since the exponent’s coefficient is $\\frac{k}{m}$.' },
          { label: 'Step 3: Verify the equation', text: 'Compute the right side: $g - \\frac{k}{m}v = g - \\frac{k}{m}\\cdot\\frac{mg}{k}\\left(1 - e^{-kt/m}\\right) = g - g\\left(1 - e^{-kt/m}\\right) = ge^{-kt/m} = \\frac{dv}{dt}$.' },
          { label: 'Step 4: Long-run behavior', text: 'As $t \\to \\infty$ the exponential term dies, so $v \\to \\frac{mg}{k}$ — the **terminal velocity**, at which drag exactly balances weight and acceleration stops.' },
          { label: 'Step 5: The skydiver’s numbers', text: 'Terminal speed $= \\frac{80 \\times 9.8}{16} = 49$ m/s. The time constant is $\\frac{m}{k} = 5$ s, so at $t = 5$ the speed is $49(1 - e^{-1}) \\approx 31$ m/s — already about 63 percent of terminal.' },
        ],
        result: 'The velocity climbs exponentially toward $\\frac{mg}{k}$; for this skydiver, $v(5) \\approx 31$ m/s and $v \\to 49$ m/s (about 176 km/h). The ratio $\\frac{m}{k}$ sets how quickly the terminal speed is approached.',
      },
    ],
    keyTakeaways: [
      'A differential equation relates an unknown function to its derivatives; the order is the highest derivative that appears.',
      'Verifying a solution is pure substitution: differentiate the candidate and check the equation identically.',
      'A general solution is a family with one arbitrary constant per order; an initial condition selects the particular member.',
      'Newton’s Law of Cooling, $\\frac{dT}{dt} = k(T - T_s)$, makes the temperature *excess* decay exponentially toward zero.',
      'Mixing models balance rates: $\\frac{dA}{dt} = c_{in}r_{in} - \\frac{A}{V}r_{out}$, with the outflow concentration $A/V$.',
      'With linear drag, $m\\frac{dv}{dt} = mg - kv$, speed approaches the terminal velocity $\\frac{mg}{k}$ exponentially with time constant $\\frac{m}{k}$.',
    ],
    quiz: [
      {
        q: 'The order of the differential equation $y\'\'\' + 2y\' = x^3$ is:',
        options: ['1', '2', '3', '6'],
        answer: 2,
        explanation: 'Order counts the highest derivative present — here the third derivative $y\'\'\'$; the power on $x$ is irrelevant.',
      },
      {
        q: 'Which function solves the initial-value problem $\\frac{dy}{dx} = -2y$, $y(0) = 3$?',
        options: [`$y = 3e^{-2x}$`, `$y = 2e^{-3x}$`, `$y = 3e^{2x}$`, `$y = e^{-2x} + 2$`],
        answer: 0,
        explanation: 'Separating gives $y = Ce^{-2x}$; the initial condition forces $C = 3$, and indeed $y\' = -6e^{-2x} = -2y$. The last option also passes $y(0) = 3$ but fails the equation: its derivative $-2e^{-2x}$ never equals $-2\\left(e^{-2x} + 2\\right)$.',
      },
      {
        q: 'A hot turkey sits in a 75°F room and obeys $\\frac{dT}{dt} = k(T - 75)$. While the turkey is hotter than the room, the constant $k$ must be:',
        options: ['Positive', 'Negative', 'Zero', 'Equal to 75'],
        answer: 1,
        explanation: 'The temperature must decrease while $T > 75$, so $\\frac{dT}{dt} < 0$ even though $T - 75 > 0$ — which forces $k < 0$. In the worked example $k \\approx -0.0128$ per minute.',
      },
      {
        q: 'An object falls with drag according to $m\\frac{dv}{dt} = mg - kv$. Its terminal velocity is:',
        options: [`$\\frac{mg}{k}$`, `$\\frac{k}{mg}$`, `$\\frac{gk}{m}$`, `$mgk$`],
        answer: 0,
        explanation: 'Terminal speed means no further acceleration: set $\\frac{dv}{dt} = 0$ and solve $mg - kv = 0$ to get $v = \\frac{mg}{k}$.',
      },
      {
        q: 'A tank of constant volume $V$ initially holds pure water; pure water keeps flowing in and the well-mixed solution drains out at rate $r$. The salt amount $A(t)$ obeys:',
        options: [`$\\frac{dA}{dt} = -\\frac{r}{V}A$`, `$\\frac{dA}{dt} = \\frac{r}{V}A$`, `$\\frac{dA}{dt} = 0$`, `$\\frac{dA}{dt} = -\\frac{V}{r}A$`],
        answer: 0,
        explanation: 'Salt enters at rate zero (the inflow is pure water) and leaves at concentration $A/V$ times rate $r$ — an exponential decay with time constant $\\frac{V}{r}$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 9.2
  {
    sectionId: 'calc-ch9-s2',
    readingTime: 8,
    intro: 'Most differential equations cannot be solved by any formula, but their solutions can still be *seen* and *approximated*. A **direction field** turns the equation $y\' = f(x, y)$ into a picture of little slope segments that solutions must follow, and tracing those segments with straight steps — **Euler’s method** — turns the picture into numbers. This section builds both tools and studies how accurate the numerical one is.',
    objectives: [
      'Sketch and interpret direction fields for first-order equations',
      'Read qualitative behavior off a direction field: where solutions rise, fall and level off',
      'Explain what makes an equation autonomous and find its equilibrium solutions',
      'Carry out Euler’s method with a fixed step size, tabulating successive approximations',
      'Describe how step size controls the error of Euler’s method',
    ],
    concepts: [
      {
        term: 'Direction field (slope field)',
        kind: 'definition',
        statement: 'For a first-order equation $y\' = f(x, y)$, the **direction field** is the collection of short line segments drawn at grid points $(x, y)$, each with slope $f(x, y)$: a field of tiny compass needles that every solution curve must be tangent to.',
        detail: 'Drawing it by hand is manageable when $f$ is simple: for $y\' = x + y$ all segments along the line $y = -x$ are horizontal. A solution is then a curve threaded through the field so that at each point its tangent matches the local segment — start at the initial point and follow the needles.',
      },
      {
        term: 'Reading solutions off the field',
        kind: 'method',
        statement: 'Starting from the initial point $(x_0, y_0)$, sketch a curve tangent to the segments it passes through. The picture answers qualitative questions — where the solution increases, whether it levels off toward a limit — even when no formula is available.',
        detail: 'Concavity is readable too: where the segments steepen along the direction of travel, the solution bends upward; where they flatten, it bends downward. If $y$ stays between two values where segments point inward, the solution is trapped there forever — a picture-proof with no symbols at all.',
      },
      {
        term: 'Autonomous equations and equilibria',
        kind: 'definition',
        statement: 'An equation is **autonomous** when the right side depends only on $y$: $y\' = f(y)$. Constant solutions $y = c$, called **equilibrium solutions**, occur exactly at the roots $f(c) = 0$.',
        detail: 'For $y\' = y^3 - 4y = y(y - 2)(y + 2)$ the equilibria are $y = 0$ and $y = \\pm 2$. Reading the field: solutions starting with $-2 < y_0 < 2$ all flow toward $y = 0$, while those with $y_0 > 2$ or $y_0 < -2$ blow up away from $\\pm 2$ — the equilibrium limits exist only for $-2 \\le y_0 \\le 2$, exactly as the book’s exercise reports.',
      },
      {
        term: 'Euler’s method',
        kind: 'method',
        statement: 'With step size $h$, generate approximations by following each local slope for one full step: $$y_{n+1} = y_n + h\\,f(x_n, y_n), \\qquad x_{n+1} = x_n + h.$$ The result is a polygonal path hugging the true solution curve.',
        detail: 'Euler’s idea is the definition of the derivative run backwards: near $(x_n, y_n)$ the solution behaves like its tangent line, so step along the tangent, recompute the slope, and repeat. It is the numerical analog of the tangent-line approximation of Section 3.10, applied over and over.',
      },
      {
        term: 'Step size and error',
        kind: 'insight',
        statement: 'Euler’s method is a **first-order** method: the error at a fixed target is roughly proportional to $h$, so halving the step size halves the error.',
        detail: 'For $y\' = y$, $y(0) = 1$ (true solution $e^x$), the book’s exercise finds $y(0.4) \\approx 1.4$, $1.44$ and $1.4641$ with $h = 0.4$, $0.2$ and $0.1$, against the exact $e^{0.4} \\approx 1.4918$ — errors $0.0918$, $0.0518$, $0.0277$ that halve as $h$ halves. The error also has a *sign*: because $e^x$ is concave up, tangent steps lie below the curve and every estimate is an underestimate.',
      },
      {
        term: 'Euler’s method as an algorithm',
        kind: 'insight',
        statement: 'Euler’s method is a loop: initialize $x$ and $y$, then repeatedly compute a slope and update both variables — the ancestor of every numerical ODE solver.',
        detail: 'Five lines of code in any language — a `for` loop with two assignment statements, in the style of the loop chapter of the JavaScript book — implement it exactly; physics engines, circuit simulators and game animations all descend from this humble iteration. The cost is also visible in code: cutting the error tenfold requires ten times the steps.',
      },
    ],
    examples: [
      {
        title: 'A direction field for $y\' = x + y$',
        problem: 'Sketch the direction field for $y\' = x + y$ and describe the solution curve that passes through $(0, 1)$.',
        steps: [
          { label: 'Step 1: Find the nullcline', text: 'The slope is zero exactly where $x + y = 0$, that is, along the line $y = -x$: the field there is perfectly horizontal.' },
          { label: 'Step 2: Determine the sign regions', text: 'Above the line $y = -x$ the slopes are positive; below it they are negative. Each unit of increase in $x$ or $y$ steepens the slope by one, so segments grow rapidly toward the upper right.' },
          { label: 'Step 3: Thread the curve from $(0, 1)$', text: 'The initial slope is $0 + 1 = 1$. Moving right, $y$ increases, which increases the slope further — the solution rises and bends **upward**, concave up, with slopes exploding as it goes.' },
          { label: 'Step 4: Confirm with the exact solution', text: 'The linear-equation method of Section 9.5 gives $y = 2e^{x} - x - 1$, which passes through $(0, 1)$ with slope 1 and satisfies $y\'\' = 2e^{x} > 0$ — concave up everywhere, exactly as the field promised.' },
        ],
        result: 'Solutions hug the nullcline $y = -x$ and peel away on either side; the curve through $(0, 1)$ is $y = 2e^x - x - 1$, rising with ever-increasing steepness.',
      },
      {
        title: 'Euler’s method in three steps',
        problem: 'Use Euler’s method with step size $h = 0.5$ to approximate the solution of $y\' = y - 2x$, $y(1) = 0$, at the points $x = 1.5$, $2.0$ and $2.5$.',
        steps: [
          { label: 'Step 1: Set up the iteration', text: 'Here $f(x, y) = y - 2x$, so $y_{n+1} = y_n + 0.5(y_n - 2x_n)$, starting from $x_0 = 1$, $y_0 = 0$.' },
          { label: 'Step 2: First step', text: 'The slope at $(1, 0)$ is $0 - 2(1) = -2$, so $y_1 = 0 + 0.5(-2) = -1$, located at $x = 1.5$.' },
          { label: 'Step 3: Second step', text: 'The slope at $(1.5, -1)$ is $-1 - 2(1.5) = -4$, so $y_2 = -1 + 0.5(-4) = -3$, located at $x = 2$.' },
          { label: 'Step 4: Third step', text: 'The slope at $(2, -3)$ is $-3 - 2(2) = -7$, so $y_3 = -3 + 0.5(-7) = -6.5$ at $x = 2.5$. The running table is $x$: $1 \\to 1.5 \\to 2 \\to 2.5$ with $y$: $0 \\to -1 \\to -3 \\to -6.5$; one more step would give $y_4 = -12.25$.' },
          { label: 'Step 5: Judge the accuracy', text: 'The exact solution (via Section 9.5) is $y = 2x + 2 - 4e^{x-1}$, whose value at $x = 2.5$ is $7 - 4e^{1.5} \\approx -10.9$. The polygon badly lags the steepening curve — the signature of too large a step size.' },
        ],
        result: 'Euler’s method gives $y(1.5) \\approx -1$, $y(2) \\approx -3$ and $y(2.5) \\approx -6.5$, against the true $-10.9$ — the approximation drifts further behind at each step because the slope keeps steepening.',
      },
      {
        title: 'Halving the step size: an error study',
        problem: 'The initial-value problem $y\' = y$, $y(0) = 1$ has the exact solution $y = e^x$. Compute Euler approximations of $y(0.4)$ with step sizes $h = 0.4$, $0.2$ and $0.1$, and compare the errors.',
        steps: [
          { label: 'Step 1: One step with $h = 0.4$', text: 'The single step lands exactly on the tangent line: $y_1 = 1 + 0.4(1) = 1.4$. Error: $e^{0.4} - 1.4 \\approx 0.0918$.' },
          { label: 'Step 2: Two steps with $h = 0.2$', text: '$y_1 = 1 + 0.2(1) = 1.2$, then $y_2 = 1.2 + 0.2(1.2) = 1.44$. Error: $\\approx 0.0518$.' },
          { label: 'Step 3: Four steps with $h = 0.1$', text: '$y_1 = 1.1$, $y_2 = 1.21$, $y_3 = 1.331$, $y_4 = 1.4641$. Error: $e^{0.4} - 1.4641 \\approx 0.0277$.' },
          { label: 'Step 4: Read the pattern', text: 'Each halving of $h$ roughly halves the error ($0.0918 \\to 0.0518 \\to 0.0277$): Euler’s method is first order. Moreover every estimate lies **below** the true value $e^{0.4} \\approx 1.4918$, because the solution is concave up and tangent steps always undercut a convex curve.' },
        ],
        result: 'With errors $0.0918$, $0.0518$ and $0.0277$, Euler’s method displays its first-order convergence — and its systematic underestimate on concave-up solutions.',
      },
    ],
    keyTakeaways: [
      'A direction field plots short segments of slope $f(x, y)$; solutions are the curves tangent to them.',
      'Autonomous equations $y\' = f(y)$ have constant (equilibrium) solutions at the roots of $f$; the field shows which equilibria attract and which repel.',
      'For $y\' = y^3 - 4y$ the equilibria are $y = 0, \\pm 2$: solutions flow to $0$ from within $(-2, 2)$ and escape to infinity outside.',
      'Euler’s method: $y_{n+1} = y_n + h f(x_n, y_n)$ — follow each tangent one step, then recompute the slope.',
      'Halving the step size roughly halves the error (first-order method), at double the computational cost.',
      'Curvature biases the answer: on a concave-up solution the tangent steps systematically undershoot.',
    ],
    quiz: [
      {
        q: 'The equilibrium solutions of $y\' = y^2 - 4$ are:',
        options: ['$y = 0$ only', '$y = 2$ only', `$y = 2$ and $y = -2$`, `$y = 0, 2, -2$`],
        answer: 2,
        explanation: 'Equilibria are the roots of $y^2 - 4 = 0$, namely $y = \\pm 2$; at $y = 0$ the slope is $-4$, not zero.',
      },
      {
        q: 'Euler’s method with $h = 0.1$ starts at $(0, 2)$ for $y\' = x - y$. The first approximation $y_1$ is:',
        options: ['1.8', '2.2', '2.02', '1.98'],
        answer: 0,
        explanation: 'The initial slope is $f(0, 2) = 0 - 2 = -2$, so $y_1 = 2 + 0.1(-2) = 1.8$.',
      },
      {
        q: 'For the autonomous equation $y\' = 1 - y^2$ with $y(0) = 0$, the solution:',
        options: ['increases and approaches $y = 1$', 'decreases without bound', 'decreases and approaches $y = -1$', 'remains identically $0$'],
        answer: 0,
        explanation: 'At $y = 0$ the slope is $1 > 0$, and it stays positive until the solution nears the attracting equilibrium $y = 1$, where the slope fades to zero.',
      },
      {
        q: 'In Euler’s method, halving the step size typically:',
        options: ['halves the error', 'doubles the error', 'quarters the error', 'leaves the error unchanged'],
        answer: 0,
        explanation: 'Euler is a first-order method: error at a fixed target scales like $h$, as the $0.0918 \\to 0.0518 \\to 0.0277$ sequence shows.',
      },
      {
        q: 'Solution curves of $y\' = f(x, y)$, with $f$ and $\\frac{\\partial f}{\\partial y}$ continuous, never cross because:',
        options: ['the direction field is always horizontal', 'at a crossing point the initial-value problem would have two solutions, violating uniqueness', 'curves must stop at equilibrium solutions', 'Euler’s method forbids it'],
        answer: 1,
        explanation: 'A crossing point $(x_0, y_0)$ would give two distinct solutions of the same initial-value problem — impossible by the existence and uniqueness theorem.',
      },
    ],
  },

  // ------------------------------------------------------------------ 9.3
  {
    sectionId: 'calc-ch9-s3',
    readingTime: 9,
    intro: 'The first broad class of equations that can actually be solved consists of those whose variables can be pulled apart: if the right side factors as a function of $x$ times a function of $y$, all it takes is one integration on each side. **Separable equations** govern cooling, mixing and the families of curves that meet a given family at right angles, and their solution strategy — transform, integrate, apply the initial condition — sets the pattern for every technique to come.',
    objectives: [
      'Recognize separable equations $\\frac{dy}{dx} = g(x)\\,f(y)$ and separate the variables',
      'Solve separable equations and their initial-value problems, including solutions that stay implicit',
      'Account for constant solutions that division by $f(y)$ might discard',
      'Find orthogonal trajectories of a given family of curves',
      'Set up and completely solve mixing problems by separation',
    ],
    concepts: [
      {
        term: 'Separable equation',
        kind: 'definition',
        statement: 'A first-order equation is **separable** if it can be written as $$\\frac{dy}{dx} = g(x)\\,f(y),$$ so that all the $y$’s can be collected with $dy$ and all the $x$’s with $dx$: $\\frac{dy}{f(y)} = g(x)\\,dx$.',
        detail: 'The word describes exactly what the algebra does — separate the variables. $\\frac{dy}{dx} = \\frac{x}{y}$, $\\frac{dy}{dx} = e^{x - y}$ (since $e^{x-y} = e^xe^{-y}$) and $y\' = \\cos x \\cos y$ are separable; $y\' = x + y$ and $y\' = \\sin(x + y)$ are not, because no factorization splits the variables.',
      },
      {
        term: 'Solving by separation',
        kind: 'method',
        statement: 'Separate the variables, then integrate both sides: $$\\int \\frac{dy}{f(y)} = \\int g(x)\\,dx + C.$$ Solve for $y$ if it is convenient; otherwise the implicit relation is the answer.',
        detail: 'The single constant $C$ on one side absorbs both integration constants. An initial condition is best applied immediately after integrating — before wrestling the equation into explicit form — because implicit equations are easier to evaluate at a point than to solve.',
      },
      {
        term: 'Implicit solutions and lost solutions',
        kind: 'insight',
        statement: 'A solution may remain an implicit equation in $x$ and $y$, which is perfectly legitimate; and dividing by $f(y)$ silently assumes $f(y) \\ne 0$, so every root of $f$ must be checked as a possible constant solution that division discarded.',
        detail: 'Example: $y\' = y^2$ separates to $\\frac{dy}{y^2} = dx$, giving $-\\frac{1}{y} = x + C$ — but the constant function $y = 0$ is also a solution, invisible to the algebra that divided by $y^2$. The nonconstant solutions $y = \\frac{1}{c - x}$ moreover blow up at $x = c$: finite-time escape, a reminder that solutions of nonlinear equations can have short lifespans.',
      },
      {
        term: 'Orthogonal trajectories',
        kind: 'definition',
        statement: 'A curve is an **orthogonal trajectory** of a family of curves if it intersects every member of the family at a right angle; the orthogonal trajectories of a given family are themselves a family, found by solving a differential equation.',
        detail: 'The recipe: (1) differentiate the equation of the given family to find its slope $m(x, y)$; (2) the orthogonal family must have slope $-\\frac{1}{m}$; (3) solve that new, separable equation. Orthogonal families matter wherever two independent influences act — electric field lines meeting equipotentials, heat-flow directions meeting isotherms.',
      },
      {
        term: 'The exponential family connection',
        kind: 'insight',
        statement: 'The simplest separable equation $\\frac{dy}{dt} = ky$ has solutions $y = Ce^{kt}$ — the exponential family that already appeared as growth and decay in Chapter 3.8 and as the cooling excess in Section 9.1.',
        detail: 'Cooling, radioactive decay, continuously compounded interest and undisturbed population growth are all the *same* differential equation wearing different clothes. Separation merely re-derives the formula $y = Ce^{kt}$ from first principles; the new power of this section is that cooling *with data* and mixing *with flow* now succumb to the same technique.',
      },
      {
        term: 'Mixing models are separable (when volume is constant)',
        kind: 'law',
        statement: 'A tank with constant volume $V$, inflow at concentration $c_{in}$ and rate $r$ both in and out obeys $$\\frac{dA}{dt} = c_{in}r - \\frac{r}{V}A,$$ which is both separable and linear: the workhorse applied equation of the chapter.',
        detail: 'Separating gives $\\frac{dA}{c_{in}r - (r/V)A} = dt$, an integral of the $\\frac{du}{u}$ kind. When inflow and outflow rates differ, the volume $V(t)$ changes and the equation loses its clean form — the book’s tank problems then track $V(t)$ separately before integrating.',
      },
    ],
    examples: [
      {
        title: 'A separable equation: general solution, then particular',
        problem: '(a) Solve the differential equation $\\frac{dy}{dx} = \\frac{x^2}{y}$. (b) Solve the same equation subject to the initial condition $y(0) = 2$.',
        steps: [
          { label: 'Step 1: Separate the variables', text: 'Multiply both sides by $y$ and divide by $dx$ formally: $y\\,dy = x^2\\,dx$ — valid wherever $y \\ne 0$.' },
          { label: 'Step 2: Integrate both sides', text: '$\\int y\\,dy = \\int x^2\\,dx$ gives $\\frac{y^2}{2} = \\frac{x^3}{3} + C$, or multiplied by 6: $3y^2 = 2x^3 + C_1$.' },
          { label: 'Step 3: Accept the implicit form', text: 'Solving for $y$ would give $y = \\pm\\sqrt{\\frac{2x^3}{3} + C}$ — two explicit branches, each defined only where the radicand is nonnegative. The implicit form $3y^2 = 2x^3 + C_1$ keeps both branches and both domains visible at once.' },
          { label: 'Step 4: Apply the initial condition', text: 'Substituting $x = 0$, $y = 2$ into $\\frac{y^2}{2} = \\frac{x^3}{3} + C$ gives $2 = C$, so the particular solution satisfies $3y^2 = 2x^3 + 12$.' },
          { label: 'Step 5: Choose the branch', text: 'Since the solution starts positive and never passes through $y = 0$ (which would violate uniqueness), it stays on the upper branch: $y = \\sqrt{\\frac{2x^3}{3} + 4}$.' },
        ],
        result: '(a) The general solution is $3y^2 = 2x^3 + C$; (b) the solution through $(0, 2)$ is $y = \\sqrt{\\frac{2x^3}{3} + 4}$ — implicit equation, upper branch selected by the initial condition.',
      },
      {
        title: 'Orthogonal trajectories of the hyperbolas $xy = c$',
        problem: 'Find the orthogonal trajectories of the family of rectangular hyperbolas $xy = c$, and describe the two families geometrically.',
        steps: [
          { label: 'Step 1: Differentiate the given family', text: 'Implicit differentiation of $xy = c$ gives $y + x\\frac{dy}{dx} = 0$, so the slope of a member of the family at any point is $\\frac{dy}{dx} = -\\frac{y}{x}$.' },
          { label: 'Step 2: Write the orthogonality condition', text: 'Curves meeting at right angles have slopes whose product is $-1$, so the orthogonal family satisfies $\\frac{dy}{dx} = -1 / \\left(-\\frac{y}{x}\\right) = \\frac{x}{y}$ — the negative reciprocal.' },
          { label: 'Step 3: Separate and integrate', text: 'The new equation is separable: $y\\,dy = x\\,dx$, so $\\frac{y^2}{2} = \\frac{x^2}{2} + C$.' },
          { label: 'Step 4: State the orthogonal family', text: 'Multiplying by 2 and renaming the constant: $y^2 - x^2 = C$ — a family of hyperbolas with asymptotes $y = \\pm x$, opening upward and downward for $C > 0$ and leftward and rightward for $C < 0$.' },
          { label: 'Step 5: Verify the geometry', text: 'Where a curve of $xy = c$ meets a curve of $y^2 - x^2 = C$, the slopes $-\\frac{y}{x}$ and $\\frac{x}{y}$ multiply to $-1$: every intersection is a right angle, and the two families tile the plane like a woven grid.' },
        ],
        result: 'The orthogonal trajectories are the hyperbolas $y^2 - x^2 = C$; the two families cross everywhere at right angles — the classic book example of orthogonal hyperbola families sharing asymptote directions.',
      },
      {
        title: 'A mixing problem solved completely',
        problem: 'A tank contains 60 L of pure water. Brine with a salt concentration of 0.5 kg/L flows in at 3 L/min, and the well-mixed solution drains off at 3 L/min. How much salt is in the tank after 20 minutes, and how much is there in the long run?',
        steps: [
          { label: 'Step 1: Model the amount', text: 'Salt enters at $0.5 \\times 3 = 1.5$ kg/min. The tank stays at 60 L (in-rate equals out-rate), so the outflow concentration is $\\frac{A}{60}$ kg/L and salt leaves at $3\\frac{A}{60} = \\frac{A}{20}$ kg/min. Hence $\\frac{dA}{dt} = 1.5 - \\frac{A}{20}$, with $A(0) = 0$.' },
          { label: 'Step 2: Separate', text: 'Rearranged: $\\frac{dA}{1.5 - A/20} = dt$. Since the inflow equilibrium is $A = 30$, the denominator stays positive along this solution, so no absolute-value surprises await.' },
          { label: 'Step 3: Integrate', text: 'Substituting $u = 1.5 - \\frac{A}{20}$, so $du = -\\frac{1}{20}dA$: the left side is $-20\\int \\frac{du}{u} = -20\\ln|u|$. Thus $-20\\ln\\left(1.5 - \\frac{A}{20}\\right) = t + C$.' },
          { label: 'Step 4: Solve for $A$', text: 'Exponentiating: $1.5 - \\frac{A}{20} = Ce^{-t/20}$, so $A = 30 - 20Ce^{-t/20}$. The initial condition $A(0) = 0$ gives $0 = 30 - 20C$, so $C = 1.5$ and $$A(t) = 30\\left(1 - e^{-t/20}\\right).$$' },
          { label: 'Step 5: Answer the questions', text: 'At $t = 20$: $A = 30(1 - e^{-1}) \\approx 30(0.632) \\approx 19.0$ kg. As $t \\to \\infty$, $A \\to 30$ kg — the tank saturates at exactly the incoming concentration: $0.5$ kg/L times 60 L = 30 kg. The time constant is 20 minutes, so salt accumulates to 63 percent of its ceiling in the first 20 minutes and to about 95 percent within an hour.' },
        ],
        result: '$A(t) = 30\\left(1 - e^{-t/20}\\right)$ kg: about 19.0 kg after 20 minutes, rising toward the 30-kg saturation level — the inflow concentration times the volume — on a 20-minute exponential schedule.',
      },
    ],
    keyTakeaways: [
      'Separable means factorable: $\\frac{dy}{dx} = g(x)f(y)$ rearranges to $\\frac{dy}{f(y)} = g(x)\\,dx$, then integrate.',
      'Apply the initial condition right after integrating — implicit equations are easier to evaluate than to solve.',
      'Division by $f(y)$ can bury constant solutions $y = c$ at the roots of $f$; check them separately.',
      'Orthogonal trajectories: differentiate the family for its slope $m(x, y)$, solve the separable equation $y\' = -\\frac{1}{m}$.',
      'Constant-volume mixing gives $\\frac{dA}{dt} = c_{in}r - \\frac{r}{V}A$, solvable by separation here or by the integrating factor of Section 9.5.',
      'The exponential family $y = Ce^{kt}$ is the special case $f(y) = ky$ — decay, cooling and undamped growth in one formula.',
    ],
    quiz: [
      {
        q: 'Which of these first-order equations is separable?',
        options: [`$\\frac{dy}{dx} = \\frac{x}{y}$`, `$\\frac{dy}{dx} = x + y$`, `$\\frac{dy}{dx} = x^2 + y^2$`, `$\\frac{dy}{dx} = \\sin(x + y)$`],
        answer: 0,
        explanation: 'Only $\\frac{x}{y}$ factors into a pure function of $x$ times a pure function of $y$; sums like $x + y$ and bound combinations like $\\sin(x + y)$ do not separate.',
      },
      {
        q: 'The orthogonal trajectories of the family of parabolas $y = cx^2$ are:',
        options: ['the ellipses $y^2 + \\frac{x^2}{2} = C$', 'the parabolas $y = cx^3$', 'the hyperbolas $xy = C$', 'the lines $y = cx$'],
        answer: 0,
        explanation: 'The family’s slope is $y\' = \\frac{2y}{x}$, so the orthogonal equation is $y\' = -\\frac{x}{2y}$; separating, $2y\\,dy = -x\\,dx$ gives $y^2 + \\frac{x^2}{2} = C$.',
      },
      {
        q: 'Solving $y\' = y^2$ by dividing through by $y^2$ risks losing which solution?',
        options: [`$y = 0$`, `$y = 1$`, `$y = x^2$`, 'None — no solution is lost'],
        answer: 0,
        explanation: 'The constant function $y = 0$ satisfies the original equation, but the step $\\frac{dy}{y^2} = dx$ is illegal when $y = 0$; constant solutions must be checked at the roots of $f(y)$.',
      },
      {
        q: 'In the worked tank example (60 L of pure water, brine at 0.5 kg/L flowing in and out at 3 L/min), the amount of salt approaches:',
        options: ['30 kg — the inflow concentration times the volume', '0 kg, since the tank keeps draining', '15 kg, half the inflow rate', '60 kg, one kilogram per liter'],
        answer: 0,
        explanation: 'The equilibrium is where the two rates balance: $1.5 = \\frac{A}{20}$ gives $A = 30$ kg, i.e. the whole tank eventually matches the incoming brine concentration.',
      },
    ],
  },

  // ------------------------------------------------------------------ 9.4
  {
    sectionId: 'calc-ch9-s4',
    readingTime: 9,
    intro: 'Population data forces a choice between two models. If the relative growth rate stays constant, population grows exponentially — powerful for short horizons, absurd forever. Braking the growth in proportion to the unused fraction $1 - \\frac{P}{K}$ produces the **logistic equation**, the first model in which a population saturates at a carrying capacity $K$ instead of marching to infinity, and it fits everything from bacteria to census data.',
    objectives: [
      'Formulate the exponential model $\\frac{dP}{dt} = kP$ from a constant relative growth rate and solve it',
      'Compute doubling times and predict populations from data',
      'Derive the logistic equation and its solution formula $P(t) = \\frac{K}{1 + Ae^{-kt}}$',
      'Analyze the logistic solution: growth direction, the inflection point at $\\frac{K}{2}$, and the equilibria $0$ and $K$',
      'Compare exponential and logistic fits on the same data and choose sensibly',
    ],
    concepts: [
      {
        term: 'Relative growth rate',
        kind: 'definition',
        statement: 'The **relative growth rate** of a population is the per-capita rate $\\frac{1}{P}\\frac{dP}{dt}$. If it is a constant $k$, the population obeys the exponential model $\\frac{dP}{dt} = kP$.',
        detail: 'Biologists quote relative rates because they are comparable across population sizes: a colony doubling every hour has $k = \\ln 2$ per hour regardless of whether it holds a thousand cells or a billion. The exponential model is exactly Chapter 3.8’s growth-and-decay equation, now written in population language.',
      },
      {
        term: 'Exponential solution and doubling time',
        kind: 'theorem',
        statement: 'The solution of $\\frac{dP}{dt} = kP$ with $P(0) = P_0$ is $$P(t) = P_0 e^{kt}.$$ The doubling time is $\\frac{\\ln 2}{k}$, and more generally the time to multiply by $M$ is $\\frac{\\ln M}{k}$ — both independent of the current population.',
        detail: 'Constant doubling time is both the model’s elegance and its indictment: nothing grows forever, and even the gentle $k$ implied by historical US census data predicts absurd populations within a few centuries. Data that looks exponential on a short window almost never stays exponential.',
      },
      {
        term: 'The logistic equation and carrying capacity',
        kind: 'definition',
        statement: 'The **logistic equation** is $$\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{K}\\right),$$ where $K > 0$ is the **carrying capacity**: the population the environment can sustain. The per-capita rate falls linearly from $k$ (at $P = 0$) to zero (at $P = K$).',
        detail: 'The correction term $1 - \\frac{P}{K}$ is the *unused fraction* of capacity: near-empty environments give nearly exponential growth, nearly-full ones apply the brakes. The equation is separable, and its direction field — the book’s figure for $K = 100$ — shows slopes near zero close to $P = 0$ and $P = 100$ and largest along the line $P = 50$.',
      },
      {
        term: 'Logistic solution formula',
        kind: 'theorem',
        statement: 'Solving the logistic equation with $P(0) = P_0$ gives $$P(t) = \\frac{K}{1 + Ae^{-kt}}, \\qquad A = \\frac{K - P_0}{P_0}.$$ Every solution with $P_0 > 0$ satisfies $\\lim_{t \\to \\infty} P(t) = K$.',
        detail: 'The constant $A$ measures how far the population starts below capacity: $A = 0$ means $P_0 = K$ (already full), and large $A$ means a small founding population about to grow nearly exponentially. If $P_0 > K$, then $A < 0$ and the population *decreases* toward $K$ — overshoot followed by die-back, as in the book’s exercise where a population above 1000 declines back toward 1000.',
      },
      {
        term: 'The S-shape and its inflection point',
        kind: 'insight',
        statement: 'A logistic curve with $0 < P_0 < K$ is concave up until $P = \\frac{K}{2}$ and concave down after — a single inflection at half of carrying capacity, where the growth rate peaks at $\\frac{kK}{4}$.',
        detail: 'This is the celebrated S-curve of adoption: slow start, explosive middle, saturation finish. It is the standard model not only for populations but for the diffusion of technologies and the spread of epidemics — any process whose growth is limited by a shared, finite resource. The next section of this course revisits these limits when populations interact.',
      },
      {
        term: 'Choosing between the models',
        kind: 'insight',
        statement: 'Fit both models to the same data and compare predictions: the exponential model is simpler and fits early data, but only the logistic model has a finite limit, so long-range forecasts demand it.',
        detail: 'In the book’s census exercise, an exponential model $P(t) = 18e^{7t/12}$ built from two early US census points overshoots dramatically by the twentieth century, while the logistic curve tracks the slowdown. The modeling lesson generalizes: the choice of model is a *scientific* claim about which mechanisms matter.',
      },
    ],
    examples: [
      {
        title: 'A logistic model from data',
        problem: 'A population with carrying capacity $K = 10{,}000$ satisfies the logistic equation. If $P(0) = 400$ and $P(1) = 1200$, find the solution and estimate when the population reaches 4000.',
        steps: [
          { label: 'Step 1: Compute the shape constant $A$', text: 'From $P_0 = 400$ and $K = 10{,}000$: $A = \\frac{K - P_0}{P_0} = \\frac{9600}{400} = 24$.' },
          { label: 'Step 2: Write the model with one unknown', text: 'The solution formula gives $P(t) = \\frac{10{,}000}{1 + 24e^{-kt}}$, with $k$ still to be determined.' },
          { label: 'Step 3: Use the second data point', text: 'At $t = 1$: $1200 = \\frac{10{,}000}{1 + 24e^{-k}}$, so $1 + 24e^{-k} = \\frac{10{,}000}{1200} = \\frac{25}{3}$. Then $24e^{-k} = \\frac{22}{3}$, so $e^{-k} = \\frac{11}{36}$ and $k = \\ln\\frac{36}{11} \\approx 1.186$.' },
          { label: 'Step 4: State the model', text: 'The population is $P(t) = \\frac{10{,}000}{1 + 24e^{-1.186t}}$, growing from 400 toward the carrying capacity 10,000.' },
          { label: 'Step 5: Find when $P = 4000$', text: 'Set $\\frac{10{,}000}{1 + 24e^{-kt}} = 4000$, so $1 + 24e^{-kt} = 2.5$ and $24e^{-kt} = 1.5$. Then $e^{-kt} = \\frac{1}{16}$, so $t = \\frac{\\ln 16}{1.186} \\approx 2.34$. Growth is fastest at $P = 5000$, just ahead.' },
        ],
        result: 'The model is $P(t) = \\frac{10{,}000}{1 + 24e^{-1.186t}}$; it passes 4000 — two-fifths of capacity — at about $t = 2.34$, on its way to saturating at 10,000 with maximum growth at $P = 5000$.',
      },
      {
        title: 'Exponential growth and doubling time',
        problem: 'A bacteria culture grows from 500 cells to 4000 cells in 6 hours. Model the population assuming exponential growth, find the doubling time, and predict the count at 12 hours.',
        steps: [
          { label: 'Step 1: Write the model', text: 'With constant relative growth rate: $P(t) = P_0e^{kt} = 500e^{kt}$, $t$ in hours.' },
          { label: 'Step 2: Fit $k$ from the data', text: 'The datum $P(6) = 4000$ gives $4000 = 500e^{6k}$, so $e^{6k} = 8$ and $k = \\frac{\\ln 8}{6} = \\frac{\\ln 2}{2} \\approx 0.347$ per hour.' },
          { label: 'Step 3: Doubling time', text: '$T_2 = \\frac{\\ln 2}{k} = \\frac{\\ln 2}{\\ln 2 / 2} = 2$ hours — consistent with the data, since $6$ hours contains three doublings and $500 \\times 2^3 = 4000$.' },
          { label: 'Step 4: Predict', text: 'Another six hours is three more doublings: $P(12) = 500 \\times 2^6 = 32{,}000$ cells.' },
          { label: 'Step 5: Confront the model’s limits', text: 'Extrapolate one full day: $500 \\times 2^{12} \\approx 2{,}000{,}000$ cells — and a real petri dish has a carrying capacity far below that. The exponential model is honest locally and absurd globally, which is precisely the motivation for the logistic equation.' },
        ],
        result: 'The culture obeys $P(t) = 500e^{t\\ln 2/2}$ with doubling time 2 hours; the prediction at 12 hours is 32,000 cells — a number whose very size argues for a carrying-capacity model.',
      },
      {
        title: 'The logistic curve has a midpoint inflection',
        problem: 'For the logistic equation $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{K}\\right)$, show that a solution with $0 < P_0 < K$ increases, is concave up while $P < \\frac{K}{2}$ and concave down after, and find the maximum possible growth rate.',
        steps: [
          { label: 'Step 1: Differentiate the growth rate', text: 'By the product and chain rules, $\\frac{d^2P}{dt^2} = k\\frac{dP}{dt}\\left(1 - \\frac{P}{K}\\right) + kP\\left(-\\frac{1}{K}\\right)\\frac{dP}{dt} = k\\frac{dP}{dt}\\left(1 - \\frac{2P}{K}\\right)$.' },
          { label: 'Step 2: Substitute the original equation', text: 'Replacing $\\frac{dP}{dt}$ by $kP\\left(1 - \\frac{P}{K}\\right)$: $$\\frac{d^2P}{dt^2} = k^2 P\\left(1 - \\frac{P}{K}\\right)\\left(1 - \\frac{2P}{K}\\right).$$' },
          { label: 'Step 3: Analyze the signs', text: 'While $0 < P < \\frac{K}{2}$, both parentheses are positive, so $\\frac{d^2P}{dt^2} > 0$ — the curve is concave up and accelerating. For $\\frac{K}{2} < P < K$ the last factor is negative: concave down, decelerating toward the ceiling. And since $\\frac{dP}{dt} > 0$ throughout, $P$ is increasing the whole time.' },
          { label: 'Step 4: Locate the inflection and peak rate', text: 'Concavity changes exactly at $P = \\frac{K}{2}$; the growth rate there is $k \\cdot \\frac{K}{2} \\cdot \\frac{1}{2} = \\frac{kK}{4}$ — the fastest the environment ever allows the population to grow.' },
          { label: 'Step 5: Connect with the direction field', text: 'In the book’s field for $K = 100$, segments are nearly horizontal near $P = 0$ and $P = 100$ and longest along the line $P = 50$ — the same midpoint where the solution curve crests from bending up to bending down.' },
        ],
        result: 'Logistic solutions are S-shaped: increasing throughout, concave up to $P = \\frac{K}{2}$ and concave down after, with the single inflection at half of carrying capacity and peak growth rate $\\frac{kK}{4}$.',
      },
    ],
    keyTakeaways: [
      'Constant relative growth rate $\\frac{1}{P}\\frac{dP}{dt} = k$ is exactly the exponential model $P = P_0e^{kt}$, with doubling time $\\frac{\\ln 2}{k}$.',
      'The logistic equation $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{K}\\right)$ brakes growth in proportion to the unused capacity.',
      'Its solution is $P(t) = \\frac{K}{1 + Ae^{-kt}}$ with $A = \\frac{K - P_0}{P_0}$; every solution with $P_0 > 0$ converges to $K$.',
      'If $P_0 > K$ the population decreases back toward $K$ — overshoot and die-back.',
      'The growth rate peaks at $P = \\frac{K}{2}$ with value $\\frac{kK}{4}$: the inflection point of the S-curve.',
      'Model choice is a scientific claim: exponential fits early data, logistic fits the saturation the real world eventually imposes.',
    ],
    quiz: [
      {
        q: 'In the logistic solution $P(t) = \\frac{K}{1 + Ae^{-kt}}$, the constant $A$ equals:',
        options: [`$\\frac{P_0}{K - P_0}$`, `$\\frac{K - P_0}{P_0}$`, `$K - P_0$`, `$\\frac{K}{P_0}$`],
        answer: 1,
        explanation: 'Solving the formula at $t = 0$ for $A$ gives $A = \\frac{K - P_0}{P_0}$: large when the founding population is small, zero when it already equals capacity.',
      },
      {
        q: 'A population grows exponentially with relative rate $k$. Its tripling time is:',
        options: [`$\\frac{\\ln 2}{k}$`, `$3k$`, `$\\frac{\\ln 3}{k}$`, `$\\frac{k}{3}$`],
        answer: 2,
        explanation: 'Solving $e^{kt} = 3$ gives $t = \\frac{\\ln 3}{k}$ — doubling, tripling and $M$-fold times are all $\\frac{\\ln M}{k}$, independent of current size.',
      },
      {
        q: 'A logistic curve with $0 < P_0 < K$ has its inflection point at:',
        options: [`$P = \\frac{K}{2}$`, `$P = K$`, `$P = 0$`, 'It has no inflection point'],
        answer: 0,
        explanation: '$\\frac{d^2P}{dt^2} = k^2P\\left(1 - \\frac{P}{K}\\right)\\left(1 - \\frac{2P}{K}\\right)$ changes sign at $P = \\frac{K}{2}$ — where growth is fastest.',
      },
      {
        q: 'A population starting at $P_0 > K$ in the logistic model:',
        options: ['increases toward $K$', 'decreases toward $K$', 'decreases to $0$', 'increases without bound'],
        answer: 1,
        explanation: 'Above capacity the factor $1 - \\frac{P}{K}$ is negative, so the population shrinks — overshoot followed by die-back down to $K$.',
      },
      {
        q: 'In the logistic equation, the carrying capacity $K$ represents:',
        options: ['the initial population', 'the intrinsic growth rate', 'the doubling time', 'the maximum sustainable population'],
        answer: 3,
        explanation: '$K$ is the equilibrium the environment sustains: growth stops exactly when $P = K$, and every positive solution converges to it.',
      },
    ],
  },

  // ------------------------------------------------------------------ 9.5
  {
    sectionId: 'calc-ch9-s5',
    readingTime: 8,
    intro: 'A first-order equation is **linear** if the unknown function and its derivative appear only to the first power and never multiplied together: in standard form $y\' + P(x)y = Q(x)$. Linearity buys a small miracle: multiplying through by a cleverly chosen **integrating factor** collapses the left side into the derivative of a single product, and the whole equation dissolves into one integration. Most mixing problems and circuit transients in practice are exactly this equation.',
    objectives: [
      'Put first-order linear equations into standard form and identify $P(x)$ and $Q(x)$',
      'Compute the integrating factor $I(x) = e^{\\int P(x)\\,dx}$ and explain why it works',
      'Solve linear equations and linear initial-value problems completely',
      'State the existence and uniqueness theorem for linear equations and contrast it with nonlinear blow-up',
      'Recognize linear models in mixing problems and electric circuits',
    ],
    concepts: [
      {
        term: 'Standard form of a linear equation',
        kind: 'definition',
        statement: 'A first-order equation is **linear** if it can be written as $$y\' + P(x)\\,y = Q(x).$$ Linearity demands that $y$ and $y\'$ appear separately, to the first power: $y\' = x - y$ is linear, while $y\' + \\frac{x}{y} = x^2$, $y\' = y^2$ and $y\' = \\sin y$ are not.',
        detail: 'Everything hinges on identification: dividing the equation by any nonzero coefficient function may be needed first. The test is mechanical — group the $y\'$ and $y$ terms on the left; if what multiplies $y$ depends only on $x$ and everything else depends only on $x$, the equation is linear and this section applies.',
      },
      {
        term: 'The integrating factor',
        kind: 'method',
        statement: 'For $y\' + P(x)y = Q(x)$, multiply both sides by $$I(x) = e^{\\int P(x)\\,dx},$$ producing $\\frac{d}{dx}\\left[I(x)\\,y\\right] = I(x)\\,Q(x)$ — an equation whose left side is a finished derivative.',
        detail: 'The factor works because $I\' = PI$ by construction, so the product rule reassembles the left side: $Iy\' + I\'y = I(y\' + Py)$. Any antiderivative of $P$ suffices — a different constant of integration only rescales the whole equation and cancels out.',
      },
      {
        term: 'General solution pattern',
        kind: 'notation',
        statement: 'After multiplying by $I$, integrate both sides and solve for $y$: $$y = \\frac{1}{I(x)}\\left(\\int I(x)\\,Q(x)\\,dx + C\\right).$$ In practice, write $Iy = \\int IQ\\,dx + C$ and never memorize the final formula — just the two moves: multiply, integrate.',
        detail: 'The method is the same every time, which is its charm: compute $\\int P\\,dx$, exponentiate, multiply, recognize the derivative, integrate. Unlike separation, it survives $Q(x)$ terms that entangle the variables — the tank equation with a constant inflow term is the canonical example.',
      },
      {
        term: 'Existence, uniqueness and global solutions',
        kind: 'theorem',
        statement: 'If $P$ and $Q$ are continuous on an interval $I$ containing $x_0$, then the initial-value problem $y\' + P(x)y = Q(x)$, $y(x_0) = y_0$ has a unique solution on the **entire interval** $I$.',
        detail: 'This is stronger than the nonlinear theorem of Section 9.1: linear equations cannot blow up in finite time. The contrast is sharp — $y\' = y^2$ with $y(0) = 1$ has the solution $y = \\frac{1}{1 - x}$, which escapes to infinity at $x = 1$, because the nonlinearity feeds on the solution itself. Linearity removes that feedback.',
      },
      {
        term: 'Linear models in circuits and tanks',
        kind: 'insight',
        statement: 'An RL circuit with a voltage source obeys $L\\frac{dI}{dt} + RI = E(t)$ — linear in the current $I(t)$; a constant-volume mixing tank obeys $\\frac{dA}{dt} + \\frac{r}{V}A = c_{in}r$ — linear in the amount $A(t)$.',
        detail: 'Both reduce to the same template: rate of change plus a leakage term equals a driving term, and the integrating factor is always an exponential of the accumulated leakage. The RC and RL transients in the Art of Electronics are solved by exactly this method — charging a capacitor through a resistor *is* a first-order linear differential equation.',
      },
      {
        term: 'Two methods, one answer',
        kind: 'insight',
        statement: 'Some equations yield to both separation and the integrating factor — the constant-volume tank equation is separable *and* linear — and solving both ways provides a genuine consistency check.',
        detail: 'For $\\frac{dA}{dt} = 1.5 - \\frac{A}{20}$, separation integrates $\\frac{dA}{1.5 - A/20} = dt$ directly, while the integrating factor $e^{t/20}$ routes the same work through a product derivative. The worked example below runs the second route and recovers the answer the separation route gave in Section 9.3.',
      },
    ],
    examples: [
      {
        title: 'The book’s prototype: $y\' + 3x^2y = 6x^2$',
        problem: 'Solve the differential equation $y\' + 3x^2y = 6x^2$.',
        steps: [
          { label: 'Step 1: Identify $P$ and the integrating factor', text: 'In standard form $P(x) = 3x^2$ and $Q(x) = 6x^2$. Then $\\int 3x^2\\,dx = x^3$, so the integrating factor is $I(x) = e^{x^3}$.' },
          { label: 'Step 2: Multiply through', text: 'The equation becomes $e^{x^3}y\' + 3x^2e^{x^3}y = 6x^2e^{x^3}$. The left side is now exactly the derivative of the product $e^{x^3}y$.' },
          { label: 'Step 3: Write the finished derivative', text: '$\\frac{d}{dx}\\left(e^{x^3}y\\right) = 6x^2e^{x^3}$ — the entire content of the equation, one integration away from solved.' },
          { label: 'Step 4: Integrate', text: 'With the substitution $u = x^3$, $du = 3x^2dx$, the right side integrates to $\\int 6x^2e^{x^3}dx = 2e^{x^3} + C$.' },
          { label: 'Step 5: Solve for $y$', text: 'So $e^{x^3}y = 2e^{x^3} + C$, and dividing by the integrating factor: $y = 2 + Ce^{-x^3}$.' },
        ],
        result: 'The general solution is $y = 2 + Ce^{-x^3}$: the constant particular solution $y = 2$ that the equation visibly supports, surrounded by transients that decay super-exponentially to it.',
      },
      {
        title: 'An initial-value problem, worked to the end',
        problem: 'Solve the initial-value problem $y\' = x - y$, $y(0) = 1$.',
        steps: [
          { label: 'Step 1: Standard form and integrating factor', text: 'Rewrite as $y\' + y = x$, so $P(x) = 1$ and $I(x) = e^{\\int 1\\,dx} = e^{x}$.' },
          { label: 'Step 2: Multiply and recognize the product', text: '$e^xy\' + e^xy = xe^x$ becomes $\\frac{d}{dx}\\left(e^xy\\right) = xe^x$.' },
          { label: 'Step 3: Integrate by parts', text: '$\\int xe^x\\,dx = xe^x - e^x + C$ (take $u = x$, $dv = e^xdx$), so $e^xy = xe^x - e^x + C$.' },
          { label: 'Step 4: Solve for $y$', text: 'Divide by $e^x$: $y = x - 1 + Ce^{-x}$.' },
          { label: 'Step 5: Impose the initial condition', text: 'At $x = 0$: $1 = 0 - 1 + C$, so $C = 2$ and the solution is $y = x - 1 + 2e^{-x}$. Check: $y(0) = 1$ and $y\' + y = (1 - 2e^{-x}) + (x - 1 + 2e^{-x}) = x$.' },
        ],
        result: 'The solution is $y = x - 1 + 2e^{-x}$: the straight line the equation forces at $x = 0$ is asymptotically approached as the transient $2e^{-x}$ dies away — visible immediately in the solution’s structure.',
      },
      {
        title: 'The tank again — by integrating factor',
        problem: 'Solve the mixing problem of Section 9.3, $\\frac{dA}{dt} = 1.5 - \\frac{A}{20}$ with $A(0) = 0$, using an integrating factor, and confirm the answer matches the separation result.',
        steps: [
          { label: 'Step 1: Standard form', text: 'Rearranged: $\\frac{dA}{dt} + \\frac{1}{20}A = 1.5$, so $P(t) = \\frac{1}{20}$ and $Q(t) = 1.5$ — a genuine linear equation with a constant driving term, exactly the shape separation handles least gracefully.' },
          { label: 'Step 2: Integrating factor', text: '$I(t) = e^{\\int dt/20} = e^{t/20}$.' },
          { label: 'Step 3: Multiply and integrate', text: '$\\frac{d}{dt}\\left(Ae^{t/20}\\right) = 1.5e^{t/20}$, so $Ae^{t/20} = 30e^{t/20} + C$ by integrating the exponential.' },
          { label: 'Step 4: Solve and apply the condition', text: '$A = 30 + Ce^{-t/20}$; the condition $A(0) = 0$ forces $C = -30$, giving $A(t) = 30\\left(1 - e^{-t/20}\\right)$.' },
          { label: 'Step 5: Confirm the match', text: 'This is precisely the formula separation produced in Section 9.3, with the same 30-kg ceiling and 20-minute time constant — two different techniques, one physical answer.' },
        ],
        result: 'The integrating-factor route recovers $A(t) = 30\\left(1 - e^{-t/20}\\right)$ kg — and the agreement between two independent methods is the strongest sanity check applied mathematics offers.',
      },
    ],
    keyTakeaways: [
      'Linear standard form: $y\' + P(x)y = Q(x)$ — $y$ and $y\'$ appear only separately and to the first power.',
      'Integrating factor $I = e^{\\int P\\,dx}$; multiplying by it rewrites the left side as $\\frac{d}{dx}[Iy]$.',
      'The two moves — multiply by $I$, integrate — solve every first-order linear equation; no formula memorization needed.',
      'If $P$ and $Q$ are continuous on an interval, the linear IVP has a unique solution on the *whole* interval: no finite-time blow-up.',
      'Nonlinear equations are not so protected: $y\' = y^2$ reaches infinity in finite time.',
      'RL circuits and constant-volume tanks share the template $\\frac{d\\text{(state)}}{dt} + \\text{leakage} \\cdot \\text{state} = \\text{driving term}$.',
    ],
    quiz: [
      {
        q: 'The integrating factor for $y\' + 2xy = x$ is:',
        options: [`$e^{x^2}$`, `$e^{2x}$`, `$x^2$`, `$e^{x}$`],
        answer: 0,
        explanation: 'Here $P(x) = 2x$, so $I = e^{\\int 2x\\,dx} = e^{x^2}$ — multiplying by it turns the left side into $\\frac{d}{dx}\\left(e^{x^2}y\\right)$.',
      },
      {
        q: 'For the equation $x\\,y\' - y = x$ with $x > 0$, the integrating factor is:',
        options: [`$x$`, `$\\frac{1}{x}$`, `$e^{-x}$`, `$\\ln x$`],
        answer: 1,
        explanation: 'Divide by $x$ first: $y\' - \\frac{1}{x}y = 1$, so $P = -\\frac{1}{x}$ and $I = e^{-\\int dx/x} = e^{-\\ln x} = \\frac{1}{x}$.',
      },
      {
        q: 'The general solution of $y\' + y = e^x$ is:',
        options: [`$y = \\frac{1}{2}e^x + Ce^{-x}$`, `$y = e^x + Ce^{-x}$`, `$y = \\frac{1}{2}e^x + Ce^{x}$`, `$y = Ce^{-x} - e^x$`],
        answer: 0,
        explanation: 'With $I = e^x$: $\\frac{d}{dx}\\left(e^xy\\right) = e^{2x}$, so $e^xy = \\frac{1}{2}e^{2x} + C$ and $y = \\frac{1}{2}e^x + Ce^{-x}$.',
      },
      {
        q: 'If $P$ and $Q$ are continuous on an interval $I$ containing $x_0$, the initial-value problem $y\' + P(x)y = Q(x)$, $y(x_0) = y_0$ has:',
        options: ['infinitely many solutions on $I$', 'exactly one solution on the entire interval $I$', 'a solution only near $x_0$ that may blow up later on $I$', 'no solution unless $Q$ is constant'],
        answer: 1,
        explanation: 'The linear theorem guarantees existence and uniqueness on the whole interval where the coefficients are continuous — no finite-time escape, unlike $y\' = y^2$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 9.6
  {
    sectionId: 'calc-ch9-s6',
    readingTime: 9,
    intro: 'Single-species models miss the most dramatic dynamics in nature: predators and prey locked in endless oscillation. Lotka and Volterra proposed in the 1920s that encounter terms $-bRF$ and $+dRF$ — losses from being eaten and gains from finding food — couple the two populations into a **system** whose solutions trace closed cycles in the phase plane. This section reads such systems qualitatively: equilibrium points, trajectories, and the famous lag between predator and prey peaks.',
    objectives: [
      'Write the Lotka–Volterra predator–prey system and interpret each term and sign',
      'Find equilibrium points of two-species systems by setting both derivatives to zero',
      'Interpret phase-plane trajectories, including the closed orbits around coexistence',
      'Describe one full predator–prey cycle in words, including the lag between peaks',
      'Distinguish predator–prey, competition and cooperation systems by their interaction signs',
    ],
    concepts: [
      {
        term: 'Systems of differential equations',
        kind: 'definition',
        statement: 'A **system** of first-order equations specifies the rates of change of several unknown functions simultaneously, each rate depending on the others: $\\frac{dx}{dt} = f(x, y)$, $\\frac{dy}{dt} = g(x, y)$. A solution is a pair of functions $x(t)$, $y(t)$; eliminating $t$ traces a curve in the $xy$-plane called a **phase trajectory**, and the collection of all trajectories is the **phase portrait**.',
        detail: 'The phase plane trades time for geometry: instead of asking “how many rabbits at year 5,” one asks “which way is the rabbit–fox point moving.” Each trajectory is traversed with a definite speed and direction, and the system’s long-run behavior — settling, cycling, escaping — is written in the shapes of the curves.',
      },
      {
        term: 'Lotka–Volterra equations',
        kind: 'law',
        statement: 'With $R(t)$ the prey and $F(t)$ the predator population, the **Lotka–Volterra system** is $$\\frac{dR}{dt} = aR - bRF, \\qquad \\frac{dF}{dt} = -cF + dRF,$$ where $a, b, c, d > 0$: prey grow exponentially, lose to encounters; predators die exponentially, gain from encounters.',
        detail: 'The interaction terms $-bRF$ and $+dRF$ both scale with the *product* of the populations because encounters do. In the book’s exercise, $\\frac{dx}{dt} = -0.05x + 0.0001xy$ with $\\frac{dy}{dt} = 0.1y - 0.005xy$: set $y = 0$ and $x$ decays at 5 percent per unit time — predators starve without prey — while prey alone grow at 10 percent.',
      },
      {
        term: 'Equilibrium points',
        kind: 'method',
        statement: 'An **equilibrium (critical) point** of a system is a pair $(x^*, y^*)$ where both derivatives vanish — populations that, once there, stay there. Find them by solving $f(x, y) = 0$ and $g(x, y) = 0$ simultaneously.',
        detail: 'For Lotka–Volterra the equilibria are $(0, 0)$ — total extinction — and $\\left(\\frac{c}{d}, \\frac{a}{b}\\right)$ — coexistence, at exactly the predator level that neutralizes prey growth and the prey level that neutralizes predator decline. For richer systems (with carrying capacities) the algebra produces up to four equilibria, as the worked competition example shows.',
      },
      {
        term: 'The phase portrait: closed orbits',
        kind: 'insight',
        statement: 'Around the coexistence equilibrium of the Lotka–Volterra system, every trajectory (with positive populations) is a **closed curve**: both populations oscillate periodically, returning to their starting values, forever.',
        detail: 'The orbits nest around the equilibrium like contour lines around a hilltop; the farther out, the wilder the swings. There is no damping anywhere in the basic model — no term removes energy — so cycles persist rather than settle. Adding a carrying capacity for the prey bends the closed orbits into spirals that wind *inward* to a stable coexistence, which is why real ecosystems damp more than this first model predicts.',
      },
      {
        term: 'The quarter-period lag',
        kind: 'insight',
        statement: 'Around each cycle the prey peak is followed — roughly a quarter period later — by the predator peak, then the prey trough, then the predator trough: each population chases the other with a systematic delay.',
        detail: 'The lag is the fingerprint of the model: foxes multiply *after* rabbits become plentiful and starve *after* rabbits collapse. The Hudson’s Bay Company’s lynx and hare pelt records, nearly a century long, show exactly this out-of-phase oscillation and made the system the founding data set of mathematical ecology.',
      },
      {
        term: 'Competition and cooperation',
        kind: 'insight',
        statement: 'The signs of the two interaction terms classify the system: $(-bRF, +dRF)$ is predation, $(-bRF, -dRF)$ is **competition** (each species suffers from the other), and $(+bRF, +dRF)$ is **cooperation** (each benefits from the other).',
        detail: 'In the book’s competition exercise $\\frac{dx}{dt} = 0.5x - 0.004x^2 - 0.001xy$ with $\\frac{dy}{dt} = 0.4y - 0.001y^2 - 0.002xy$: both species have their own carrying capacities (125 and 400) *and* both interaction signs are negative — four equilibrium points result, worked out below.',
      },
    ],
    examples: [
      {
        title: 'Reading the signs: rabbits and foxes',
        problem: 'Classify the roles in the system $$\\frac{dR}{dt} = 0.1R - 0.005RF, \\qquad \\frac{dF}{dt} = -0.05F + 0.0001RF.$$ Which population is the predator, which the prey, and what happens to each in the absence of the other?',
        steps: [
          { label: 'Step 1: Remove the foxes', text: 'Setting $F = 0$ leaves $\\frac{dR}{dt} = 0.1R$: rabbits grow exponentially at 10 percent — so $R$ is the species that thrives alone, the **prey**.' },
          { label: 'Step 2: Remove the rabbits', text: 'Setting $R = 0$ leaves $\\frac{dF}{dt} = -0.05F$: foxes decay exponentially at 5 percent — the **predator** cannot survive without its food.' },
          { label: 'Step 3: Read the interaction terms', text: 'The term $-0.005RF$ removes rabbits in proportion to encounters — predation. The term $+0.0001RF$ builds foxes in proportion to encounters — conversion of eaten prey into predator numbers.' },
          { label: 'Step 4: Find the balance point', text: 'Coexistence requires both rates zero: $\\frac{dR}{dt} = R(0.1 - 0.005F) = 0$ gives $F = 20$; $\\frac{dF}{dt} = F(-0.05 + 0.0001R) = 0$ gives $R = 500$. The equilibrium is $(R, F) = (500, 20)$.' },
          { label: 'Step 5: Interpret', text: 'Twenty foxes are exactly enough to hold five hundred rabbits in check, and five hundred rabbits exactly enough to sustain twenty foxes: one predator per twenty-five prey is this ecosystem’s resting ratio — the center about which all its cycles revolve.' },
        ],
        result: '$R$ is prey (grows alone), $F$ is predator (starves alone); the coexistence equilibrium sits at $(R, F) = (500, 20)$, with everything else in the positive quadrant oscillating around it.',
      },
      {
        title: 'All the equilibrium points of a competition system',
        problem: 'Find all equilibrium points of the competition system $$\\frac{dx}{dt} = 0.5x - 0.004x^2 - 0.001xy, \\qquad \\frac{dy}{dt} = 0.4y - 0.001y^2 - 0.002xy,$$ and interpret each one.',
        steps: [
          { label: 'Step 1: Factor each equation', text: '$\\frac{dx}{dt} = x(0.5 - 0.004x - 0.001y)$ and $\\frac{dy}{dt} = y(0.4 - 0.001y - 0.002x)$; multiplying the first by 1000, the conditions become $x(500 - 4x - y) = 0$ and $y(400 - y - 2x) = 0$.' },
          { label: 'Step 2: Branch on the factors', text: 'Either $x = 0$ or $500 - 4x - y = 0$; independently, either $y = 0$ or $400 - y - 2x = 0$ — four combinations to check.' },
          { label: 'Step 3: The trivial branches', text: '$x = 0$ and $y = 0$: both extinct. $x = 0$ with $400 - y = 0$: the point $(0, 400)$ — species $y$ alone at its own carrying capacity. $y = 0$ with $500 - 4x = 0$: the point $(125, 0)$ — species $x$ alone at capacity.' },
          { label: 'Step 4: The coexistence branch', text: 'Solve $500 - 4x - y = 0$ and $400 - y - 2x = 0$ together. Subtracting gives $100 - 2x = 0$, so $x = 50$ and then $y = 500 - 200 = 300$: the point $(50, 300)$.' },
          { label: 'Step 5: Interpret against the solo capacities', text: 'Coexistence at $(50, 300)$ sits *below* both solo capacities ($50 < 125$ and $300 < 400$): sharing the environment costs each species part of what it could command alone — the signature of competition, where both interaction terms are negative.' },
        ],
        result: 'Four equilibria: $(0, 0)$, $(125, 0)$, $(0, 400)$ and the coexistence point $(50, 300)$ — each species below its solo carrying capacity, the price of sharing the environment.',
      },
      {
        title: 'One cycle in the phase plane, in words',
        problem: 'Describe the phase portrait of the rabbit–fox system of the first example near its coexistence equilibrium $(500, 20)$, narrating one full cycle of a trajectory that starts from $1000$ rabbits and $10$ foxes.',
        steps: [
          { label: 'Step 1: Place the start', text: 'The point $(1000, 10)$ sits far right (many rabbits) and low (few foxes). The rates there are $\\frac{dR}{dt} = 100 - 50 = 50 > 0$ and $\\frac{dF}{dt} = -0.5 + 1 = 0.5 > 0$: both populations rising — the trajectory moves up and to the right.' },
          { label: 'Step 2: The predator boom', text: 'Well-fed foxes multiply; the term $-0.005RF$ grows with $F$ and eventually halts rabbit growth. The rabbit count peaks and turns down **while foxes are still rising** — the trajectory bends upward and leftward.' },
          { label: 'Step 3: The rabbit bust', text: 'With rabbits in decline, the food term $+0.0001RF$ shrinks until the fox death rate $-0.05F$ dominates. Foxes now fall too — the trajectory descends on the left side of the cycle.' },
          { label: 'Step 4: The fox bust and rabbit recovery', text: 'As foxes become scarce, predation lightens and the rabbits rebound: the trajectory swings down and rightward, closing back toward its starting region — counterclockwise around the equilibrium.' },
          { label: 'Step 5: Assemble the cycle', text: 'Rabbit boom feeds fox boom; fox boom causes rabbit bust; rabbit bust starves foxes; fox scarcity restarts rabbits. The populations oscillate forever around $(500, 20)$ with the rabbit peak arriving about a quarter period ahead of the fox peak — the lag visible in the Hudson Bay lynx–hare records.' },
        ],
        result: 'Closed counterclockwise orbits around $(500, 20)$: prey boom, predator boom, prey bust, predator bust — each peak chasing the previous one by a quarter cycle, with neither population ever settling down.',
      },
    ],
    keyTakeaways: [
      'Lotka–Volterra: $\\frac{dR}{dt} = aR - bRF$ and $\\frac{dF}{dt} = -cF + dRF$, with all constants positive.',
      'Interaction terms are proportional to the product $RF$ because encounters are.',
      'Equilibria: $(0, 0)$ for extinction and $\\left(\\frac{c}{d}, \\frac{a}{b}\\right)$ for coexistence — the predator level that stops prey growth, the prey level that stops predator decline.',
      'Near coexistence the trajectories are closed curves: sustained periodic oscillation with no damping.',
      'Predator peaks lag prey peaks by about a quarter period — the lynx–hare fingerprint.',
      'Interaction signs classify the ecology: predation $(-,+)$, competition $(-,-)$, cooperation $(+,+)$; adding carrying capacities turns the closed orbits into inward spirals.',
    ],
    quiz: [
      {
        q: 'In the Lotka–Volterra system $\\frac{dR}{dt} = aR - bRF$, $\\frac{dF}{dt} = -cF + dRF$, the term $-bRF$ represents:',
        options: ['loss of prey to predation', 'gain of predators from eating', 'natural prey growth', 'natural predator death'],
        answer: 0,
        explanation: 'The $-bRF$ term sits in the prey equation and scales with encounters: rabbits lost to being eaten. The matching $+dRF$ term in the predator equation is the same meals, counted from the fox’s side.',
      },
      {
        q: 'For the system $\\frac{dR}{dt} = 0.2R - 0.01RF$, $\\frac{dF}{dt} = -0.1F + 0.001RF$, the coexistence equilibrium is:',
        options: [`$(R, F) = (20, 100)$`, `$(R, F) = (100, 20)$`, '$(R, F) = (0, 0)$ only', `$(R, F) = (50, 50)$`],
        answer: 1,
        explanation: 'Prey growth stops at $F = \\frac{0.2}{0.01} = 20$; predator decline stops at $R = \\frac{0.1}{0.001} = 100$: coexistence at $(100, 20)$, besides the extinction point $(0, 0)$.',
      },
      {
        q: 'In the phase portrait of the Lotka–Volterra system, the trajectories around the coexistence point are:',
        options: ['spirals winding inward', 'closed curves traversed repeatedly', 'rays from the origin', 'straight lines'],
        answer: 1,
        explanation: 'Nothing in the model removes energy from the oscillation, so trajectories close on themselves: both populations return exactly to their starting values each period.',
      },
      {
        q: 'The equilibrium point $(0, 0)$ of the Lotka–Volterra system represents:',
        options: ['oscillating populations', 'both species extinct — if either is zero it stays zero', 'coexistence at half of capacity', 'one species surviving alone'],
        answer: 1,
        explanation: 'With $R = F = 0$ both rates vanish; more generally, if either population hits zero it stays zero — the axes of the phase plane are themselves trajectories.',
      },
      {
        q: 'A two-species system whose interaction terms are negative in **both** equations, with each species also limited by its own carrying capacity, models:',
        options: ['cooperation', 'predation', 'competition', 'symbiosis'],
        answer: 2,
        explanation: 'Both species suffer from encounters — competition for a shared resource. The book’s example has four equilibria, with coexistence below both solo carrying capacities.',
      },
      // PYQ-pattern: JEE Mains 2021 — coexistence equilibrium of Lotka-Volterra (rephrased, values changed)
      {
        q: 'For $\\frac{dR}{dt} = 0.4R - 0.02RF$ and $\\frac{dF}{dt} = -0.3F + 0.01RF$, the coexistence equilibrium with $R > 0$ and $F > 0$ is:',
        options: [`$(20, 30)$`, `$(30, 20)$`, 'Only $(0, 0)$', `$(40, 10)$`],
        answer: 1,
        explanation: 'Step 1: Restate equilibria as points where both rates vanish simultaneously. Step 2: Recall the key factorization $R(0.4 - 0.02F) = 0$ and $F(-0.3 + 0.01R) = 0$. Step 3: With $R > 0$ and $F > 0$, cancel $R$ and $F$ to get $0.4 - 0.02F = 0$ and $-0.3 + 0.01R = 0$. Step 4: Solve as $F = \\frac{0.4}{0.02} = 20$ and $R = \\frac{0.3}{0.01} = 30$. Step 5: The distractors swap the coordinates, report only extinction, or misplace a decimal. Step 6: Hence coexistence sits at $(30, 20)$ alongside $(0, 0)$.'
      },
    ],
  },
]

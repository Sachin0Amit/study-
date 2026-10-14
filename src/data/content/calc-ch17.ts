import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 17: Second-Order Differential Equations (Sections 17.1 – 17.4)
// Master study content. Worked examples are grounded in the book’s own
// exercise numbers where noted; every computation re-derived line by line.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh17Content: SectionContent[] = [
  // ------------------------------------------------------------------ 17.1
  {
    sectionId: 'calc-ch17-s1',
    readingTime: 9,
    intro: 'A second-order differential equation involves the second derivative — acceleration, curvature, the rate at which rates change. When the equation is linear with constant coefficients, one bold guess ($y = e^{rx}$) collapses the entire theory into a quadratic equation called the characteristic (auxiliary) equation, whose two roots write down the general solution in one of three standard forms.',
    objectives: [
      'Classify second-order equations (linear, homogeneous, constant coefficients) and state the existence–uniqueness guarantee for initial-value problems',
      'Derive the characteristic equation from the trial solution $y = e^{rx}$',
      'Write the general solution for distinct real roots, repeated roots and complex roots, and justify each form',
      'Solve initial-value and boundary-value problems by fitting the two arbitrary constants',
    ],
    concepts: [
      {
        term: 'Second-order linear homogeneous equations',
        kind: 'definition',
        statement: 'A **second-order linear differential equation** has the form $a(x)y\'\' + b(x)y\' + c(x)y = g(x)$ — linear in $y$ and its derivatives. When $g(x) = 0$ it is **homogeneous**, and when $a$, $b$, $c$ are constants the theory of this section applies to $$a y\'\' + b y\' + c y = 0, \\qquad a \\ne 0.$$',
        detail: '“Second order” means the highest derivative is $y\'\'$: predicting a solution requires two pieces of initial data, position and velocity. Linearity is the superpower — it makes the set of solutions closed under addition and scalar multiplication, so solutions form a two-dimensional family $c_1 y_1 + c_2 y_2$, exactly as two independent basis vectors span a plane (the linear-algebra view from discrete mathematics: the solution set is a vector space).',
      },
      {
        term: 'Initial-value versus boundary-value problems',
        kind: 'definition',
        statement: 'An **initial-value problem** specifies $y$ and $y\'$ at one point: $y(x_0) = y_0$, $y\'(x_0) = y_1$. A **boundary-value problem** specifies $y$ at two different points. For the IVP with continuous functions, exactly one solution exists; a BVP may have one solution, no solution, or infinitely many.',
        detail: 'The existence–uniqueness theorem (the book’s Theorem in this section) guarantees a unique solution of the IVP for $a \\ne 0$ with continuous coefficients. Boundary-value problems are far less tame: for the book’s example with characteristic roots $r = -2 \\pm 4i$, the BVP with $y(0) = 1$ and $y(\\pi) = 2$ has **no** solution, while changing the second condition to $y(\\pi) = e^{-2\\pi}$ gives **infinitely many** — one whole free constant survives.',
      },
      {
        term: 'The characteristic (auxiliary) equation',
        kind: 'method',
        statement: 'For $a y\'\' + b y\' + c y = 0$, try the exponential solution $y = e^{rx}$. Substituting gives $a r^{2} e^{rx} + b r e^{rx} + c e^{rx} = 0$, and since $e^{rx} \\ne 0$: $$a r^{2} + b r + c = 0,$$ the **characteristic equation** (Stewart also calls it the auxiliary equation).',
        detail: 'Every exponential is mapped to itself by differentiation, scaled by $r$ — differentiation acts on $e^{rx}$ exactly like multiplication by $r$, so the differential equation becomes a polynomial equation in $r$. The whole solution theory is therefore the theory of the quadratic formula: $r = \\dfrac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}$, with the discriminant $b^{2} - 4ac$ deciding which of the three cases applies.',
      },
      {
        term: 'Case 1: distinct real roots',
        kind: 'theorem',
        statement: 'If the characteristic equation has two distinct real roots $r_1 \\ne r_2$, the general solution is $$y = c_1 e^{r_1 x} + c_2 e^{r_2 x}.$$ For example, $y\'\' - 2y\' - 3y = 0$ gives $(r - 3)(r + 1) = 0$, so $y = c_1 e^{3x} + c_2 e^{-x}$.',
        detail: 'The two exponentials are genuinely different functions (neither is a multiple of the other), so the family has the required two free constants. Since $r_1$ and $r_2$ are real, both solutions are pure growth or decay — no oscillation is possible in this case.',
      },
      {
        term: 'Case 2: repeated real root',
        kind: 'theorem',
        statement: 'If the characteristic equation has a double root $r = -b/(2a)$ (discriminant zero), the general solution is $$y = c_1 e^{rx} + c_2 x\\,e^{rx} = (c_1 + c_2 x)\\,e^{rx}.$$ For example, $9y\'\' + 12y\' + 4y = 0$ has $(3r + 2)^{2} = 0$, giving $y = (c_1 + c_2 x)\\,e^{-2x/3}$.',
        detail: 'A double root yields only one exponential $e^{rx}$, so a second independent solution must be found. The miracle candidate $y = x e^{rx}$ works precisely because plugging it in produces $e^{rx}\\left(ar^{2} + br + c\\right)x + e^{rx}\\left(2ar + b\\right)$, and BOTH parentheses vanish exactly when $r$ is a double root. This is the **reduction of order** technique in its simplest instance.',
      },
      {
        term: 'Case 3: complex roots',
        kind: 'theorem',
        statement: 'If the roots are complex $r = \\alpha \\pm \\beta i$ (with $\\alpha = -b/(2a)$ and $\\beta = \\sqrt{4ac - b^{2}}/(2a)$), the (real) general solution is $$y = e^{\\alpha x}\\left(c_1 \\cos \\beta x + c_2 \\sin \\beta x\\right).$$ For example, $y\'\' + 4y\' + 20y = 0$ has $r = -2 \\pm 4i$, so $y = e^{-2x}(c_1 \\cos 4x + c_2 \\sin 4x)$.',
        detail: 'Formally the solution is $c_1 e^{(\\alpha + \\beta i)x} + c_2 e^{(\\alpha - \\beta i)x}$; Euler’s formula $e^{i\\theta} = \\cos\\theta + i \\sin\\theta$ (the same identity behind the Taylor series of Chapter 11) rewrites it as a real oscillation with amplitude governed by $e^{\\alpha x}$. The sign of $\\alpha$ decides everything: decay ($\\alpha < 0$, damped), steady oscillation ($\\alpha = 0$, pure $\\sin$/$\\cos$), or growth ($\\alpha > 0$, unstable).',
      },
      {
        term: 'Fitting initial conditions',
        kind: 'method',
        statement: 'The constants $c_1$ and $c_2$ are pinned down by the two initial conditions: substitute $x = x_0$ into $y$ to get one equation, into $y\'$ to get a second, then solve the resulting $2 \\times 2$ linear system.',
        detail: 'For complex-root solutions differentiate the product carefully: if $y = e^{\\alpha x}(c_1 \\cos \\beta x + c_2 \\sin \\beta x)$, then $y\' = e^{\\alpha x}\\left[(\\alpha c_1 + \\beta c_2)\\cos \\beta x + (\\alpha c_2 - \\beta c_1)\\sin \\beta x\\right]$. At $x_0 = 0$ the equations decouple nicely: $y(0) = c_1$ and $y\'(0) = \\alpha c_1 + \\beta c_2$.',
      },
    ],
    examples: [
      {
        title: 'Distinct real roots with an initial-value problem',
        problem: 'Solve the initial-value problem $y\'\' - 2y\' - 3y = 0$, $y(0) = 2$, $y\'(0) = 2$.',
        steps: [
          { label: 'Step 1: Write the characteristic equation', text: 'Substituting $y = e^{rx}$ and dividing by $e^{rx}$: $r^{2} - 2r - 3 = 0$.' },
          { label: 'Step 2: Solve the quadratic', text: 'Factor: $(r - 3)(r + 1) = 0$, so the distinct real roots are $r = 3$ and $r = -1$.' },
          { label: 'Step 3: Write the general solution', text: 'Case 1 applies: $y = c_1 e^{3x} + c_2 e^{-x}$.' },
          { label: 'Step 4: Apply the first initial condition', text: '$y(0) = c_1 + c_2 = 2$.' },
          { label: 'Step 5: Apply the second initial condition', text: 'Since $y\' = 3c_1 e^{3x} - c_2 e^{-x}$, we get $y\'(0) = 3c_1 - c_2 = 2$. Solving the system: adding the equations gives $4c_1 = 4$, so $c_1 = 1$ and then $c_2 = 1$.' },
          { label: 'Step 6: State the solution', text: '$y = e^{3x} + e^{-x}$. Check: $y(0) = 2$ and $y\'(0) = 3 - 1 = 2$, as required.' },
        ],
        result: 'The IVP solution is $y = e^{3x} + e^{-x}$ — a sum of one growing and one decaying exponential, exactly the book’s own exercise.',
      },
      {
        title: 'Repeated root with an initial-value problem',
        problem: 'Solve the initial-value problem $9y\'\' + 12y\' + 4y = 0$, $y(0) = 1$, $y\'(0) = 0$.',
        steps: [
          { label: 'Step 1: Characteristic equation', text: '$9r^{2} + 12r + 4 = 0$ — and the left side is a perfect square: $(3r + 2)^{2} = 0$.' },
          { label: 'Step 2: Identify the repeated root', text: 'The double root is $r = -\\tfrac{2}{3}$, so Case 2 applies and the solution must be built from $e^{-2x/3}$ and $x e^{-2x/3}$.' },
          { label: 'Step 3: Write the general solution', text: '$y = c_1 e^{-2x/3} + c_2 x e^{-2x/3} = (c_1 + c_2 x)\\,e^{-2x/3}$.' },
          { label: 'Step 4: First initial condition', text: '$y(0) = c_1 = 1$.' },
          { label: 'Step 5: Second initial condition', text: 'Differentiate: $y\' = c_2 e^{-2x/3} - \\tfrac{2}{3}(c_1 + c_2 x)\\,e^{-2x/3}$, so $y\'(0) = c_2 - \\tfrac{2}{3}c_1 = 0$. With $c_1 = 1$: $c_2 = \\tfrac{2}{3}$.' },
          { label: 'Step 6: State the solution', text: '$y = \\left(1 + \\tfrac{2}{3}x\\right) e^{-2x/3}$. The graph decays to zero and never oscillates — but it crosses below the axis only if $c_1$ and $c_2$ have opposite signs.' },
        ],
        result: 'The IVP solution is $y = \\left(1 + \\tfrac{2}{3}x\\right)e^{-2x/3}$: critical decay, faster than pure $e^{-2x/3}$ alone.',
      },
      {
        title: 'Complex roots with an initial-value problem',
        problem: 'Solve the initial-value problem $y\'\' + 4y\' + 20y = 0$, $y(0) = 1$, $y\'(0) = 2$.',
        steps: [
          { label: 'Step 1: Characteristic equation', text: '$r^{2} + 4r + 20 = 0$.' },
          { label: 'Step 2: Apply the quadratic formula', text: '$r = \\dfrac{-4 \\pm \\sqrt{16 - 80}}{2} = \\dfrac{-4 \\pm \\sqrt{-64}}{2} = -2 \\pm 4i$, so $\\alpha = -2$ and $\\beta = 4$.' },
          { label: 'Step 3: Write the general solution', text: 'Case 3: $y = e^{-2x}\\left(c_1 \\cos 4x + c_2 \\sin 4x\\right)$ — an oscillation of frequency $4$ wrapped in a decaying envelope $e^{-2x}$.' },
          { label: 'Step 4: First initial condition', text: '$y(0) = e^{0}(c_1 \\cos 0 + c_2 \\sin 0) = c_1 = 1$.' },
          { label: 'Step 5: Second initial condition', text: 'Differentiate and set $x = 0$: $y\'(0) = \\alpha c_1 + \\beta c_2 = -2(1) + 4c_2 = 2$, so $c_2 = 1$.' },
          { label: 'Step 6: State the solution', text: '$y = e^{-2x}\\left(\\cos 4x + \\sin 4x\\right)$. Check: $y(0) = 1$ and $y\'(0) = -2 + 4 = 2$. The solution oscillates between $\\pm\\sqrt{2}e^{-2x}$, dying out as $x \\to \\infty$.' },
        ],
        result: 'The IVP solution is $y = e^{-2x}(\\cos 4x + \\sin 4x)$ — a damped oscillation, the signature shape of Case 3 with $\\alpha < 0$.',
      },
    ],
    keyTakeaways: [
      'Second-order linear homogeneous equations $ay\'\' + by\' + cy = 0$ are solved completely by the quadratic characteristic equation $ar^{2} + br + c = 0$.',
      'Distinct real roots $r_1 \\ne r_2$ give $y = c_1 e^{r_1 x} + c_2 e^{r_2 x}$; repeated roots give $y = (c_1 + c_2 x)e^{rx}$; complex roots $\\alpha \\pm \\beta i$ give $y = e^{\\alpha x}(c_1 \\cos \\beta x + c_2 \\sin \\beta x)$.',
      'The trial $y = e^{rx}$ works because differentiation acts on exponentials like multiplication by $r$.',
      'The extra factor $x$ in the repeated-root case is forced by needing a second independent solution.',
      'Complex roots always come in conjugate pairs, and Euler’s formula converts them into real damped oscillations.',
      'Initial-value problems (with $y$ and $y\'$ at one point) always have a unique solution; boundary-value problems can have one, none, or infinitely many.',
      'Two initial conditions produce a $2 \\times 2$ linear system for $c_1$ and $c_2$ — solve it and the IVP is finished.',
    ],
    quiz: [
      {
        q: 'The characteristic equation of $2y\'\' - 5y\' - 3y = 0$ is:',
        options: [`$2r^{2} - 5r - 3 = 0$`, `$2r^{2} + 5r + 3 = 0$`, `$r^{2} - 5r - 3 = 0$`, `$2r^{2} - 5r = 0$`],
        answer: 0,
        explanation: 'Substituting $y = e^{rx}$ replaces each derivative by the matching power of $r$, keeping every coefficient in place: $y\'\' \\to r^{2}$, $y\' \\to r$, $y \\to 1$, giving $2r^{2} - 5r - 3 = 0$.',
      },
      {
        q: 'If the characteristic equation has a double root $r = 2$, the general solution is:',
        options: [`$y = c_1 e^{2x}$`, `$y = (c_1 + c_2 x)\\,e^{2x}$`, `$y = c_1 e^{2x} + c_2 e^{-2x}$`, `$y = e^{2x}(c_1 \\cos x + c_2 \\sin x)$`],
        answer: 1,
        explanation: 'A repeated root supplies only one exponential, so the second independent solution is $x e^{2x}$: $y = (c_1 + c_2 x)e^{2x}$. The $x$ factor survives substitution precisely because the root is double.',
      },
      {
        q: 'For $y\'\' + 4y\' + 20y = 0$, the roots of the characteristic equation are:',
        options: [`$r = 2 \\pm 4i$`, `$r = -2 \\pm 4i$`, `$r = -4 \\pm 2i$`, '$r = -2, -2$ (repeated)'],
        answer: 1,
        explanation: '$r = \\frac{-4 \\pm \\sqrt{16 - 80}}{2} = \\frac{-4 \\pm 8i}{2} = -2 \\pm 4i$: real part $-2$ (damping) and imaginary part $4$ (frequency of oscillation).',
      },
      {
        q: 'Which information is needed to determine a unique solution of a second-order initial-value problem?',
        options: ['Only $y(x_0)$', 'Only $y\'\'(x_0)$', 'Both $y(x_0)$ and $y\'(x_0)$', 'Values of $y$ at two different points'],
        answer: 2,
        explanation: 'The general solution carries two constants, so two conditions fix them: initial position AND velocity. Values at two different points define a boundary-value problem, which may have no solution at all.',
      },
      {
        q: 'The solution $y = e^{-2x}(c_1 \\cos 4x + c_2 \\sin 4x)$ exhibits:',
        options: ['Unbounded growth', 'Oscillation with growing amplitude', 'Damped oscillation — oscillation inside a decaying envelope', 'Pure exponential decay with no oscillation'],
        answer: 2,
        explanation: 'The trigonometric factor oscillates with frequency $4$ while the envelope $e^{-2x}$ (from the real part $\\alpha = -2$) decays: oscillations that die out, exactly like a mass on a spring in a jar of honey.',
      },
    ],
  },

  // ------------------------------------------------------------------ 17.2
  {
    sectionId: 'calc-ch17-s2',
    readingTime: 9,
    intro: 'Add a forcing term and the equation becomes nonhomogeneous: $ay\'\' + by\' + cy = g(x)$. The structure of its solutions is beautifully simple — the general solution is one particular solution plus the full complementary solution from Section 17.1 — and for the standard forcing functions (polynomials, exponentials, sines and cosines, and their products) a guess-and-check table produces the particular part mechanically.',
    objectives: [
      'State the structure theorem: general solution $= y_c + y_p$',
      'Build trial solutions from the table of undetermined coefficients for each forcing family',
      'Apply the modification rule when the trial solution overlaps the complementary solution',
      'Combine forcing terms by superposition and finish initial-value problems',
    ],
    concepts: [
      {
        term: 'Structure of the general solution',
        kind: 'theorem',
        statement: 'Every solution of the nonhomogeneous equation $a y\'\' + b y\' + c y = g(x)$ can be written as $$y = y_c + y_p,$$ where $y_p$ is ANY particular solution of the nonhomogeneous equation and $y_c = c_1 y_1 + c_2 y_2$ is the general solution of the associated homogeneous equation (the **complementary solution**).',
        detail: 'Why: the operator $L[y] = ay\'\' + by\' + cy$ is linear, so $L[y_c + y_p] = L[y_c] + L[y_p] = 0 + g = g$; and the difference of any two solutions of the nonhomogeneous equation is a solution of the homogeneous one. The strategy is therefore always the same: solve the homogeneous equation for $y_c$ (Section 17.1), then hunt one single $y_p$.',
      },
      {
        term: 'Method of undetermined coefficients: the guess table',
        kind: 'method',
        statement: 'When $g(x)$ belongs to a family closed under differentiation, guess $y_p$ from the same family: $g = $ polynomial of degree $n$ $\\Rightarrow$ $y_p = A_n x^{n} + \\cdots + A_1 x + A_0$ (ALL lower powers); $g = Ce^{kx}$ $\\Rightarrow$ $y_p = Ae^{kx}$; $g = a\\cos kx + b\\sin kx$ $\\Rightarrow$ $y_p = A\\cos kx + B\\sin kx$ (BOTH terms); for products like $g = e^{kx}\\cos mx$, guess the product of the individual guesses.',
        detail: 'The method works only because differentiating these families stays inside the family: after $L$ is applied to the trial, matching coefficients against $g$ produces a solvable linear system for the undetermined $A$s and $B$s. It fails for forcings like $\\tan x$, $\\ln x$ or $1/x$, whose derivatives never close into a finite family — for those, the general technique is **variation of parameters** (the book’s alternative method, guaranteed but messier).',
      },
      {
        term: 'The modification rule',
        kind: 'method',
        statement: 'If any term of the initial trial $y_p$ is already a solution of the complementary equation, multiply that trial by $x$ (repeat if still overlapping): for $y\'\' + 4y = \\cos 2x$, the trial $A\\cos 2x + B\\sin 2x$ fails (it solves the homogeneous equation), so use $y_p = x(A\\cos 2x + B\\sin 2x)$.',
        detail: 'The reason is linearity: feeding the operator a complementary solution produces zero, so no choice of coefficients could ever match $g$. Multiplying by $x$ regenerates the missing terms — exactly the mechanism that produced $x e^{rx}$ in the repeated-root case of Section 17.1. For a double root, multiply by $x^{2}$.',
      },
      {
        term: 'Superposition principle',
        kind: 'theorem',
        statement: 'If $y_{p1}$ solves $ay\'\' + by\' + cy = g_1(x)$ and $y_{p2}$ solves $ay\'\' + by\' + cy = g_2(x)$, then $y_{p1} + y_{p2}$ solves $ay\'\' + by\' + cy = g_1(x) + g_2(x)$.',
        detail: 'Linearity again: $L[y_{p1} + y_{p2}] = g_1 + g_2$. So a forcing like $x + \\sin 2x$ is attacked in two independent pieces — a polynomial guess for the $x$ part and a trig guess for the $\\sin$ part — and the two particulars are simply added. This is the differential-equations twin of superposition in circuit theory: the response to a sum of inputs is the sum of the responses (the same principle the Art of Electronics leans on for linear circuits).',
      },
      {
        term: 'Reading solutions from the structure',
        kind: 'insight',
        statement: 'The shape of $y = y_c + y_p$ has a physical reading: as $x \\to \\infty$ with positive damping, $y_c \\to 0$ and the solution settles onto $y_p$ — the complementary part is the **transient** and the particular part the **steady state**.',
        detail: 'For a forced spring or an RLC circuit driven at frequency $\\omega$, the long-run behavior is a copy of the driving: the system forgets its initial conditions (transient) and answers only the input (steady state). This interpretation powers Section 17.3’s applications and is worth remembering every time you write $y = y_c + y_p$.',
      },
    ],
    examples: [
      {
        title: 'A basic exponential forcing',
        problem: 'Solve $y\'\' + 4y = e^{-x}$.',
        steps: [
          { label: 'Step 1: Solve the complementary equation', text: 'The characteristic equation $r^{2} + 4 = 0$ has roots $r = \\pm 2i$, so $y_c = c_1 \\cos 2x + c_2 \\sin 2x$.' },
          { label: 'Step 2: Choose the trial', text: 'The forcing $e^{-x}$ is an exponential with $k = -1$, and no exponential solves the complementary equation (which has pure trig solutions), so the trial is $y_p = A e^{-x}$ with no modification needed.' },
          { label: 'Step 3: Substitute', text: 'Compute $y_p\'\' = A e^{-x}$, so substitution gives $A e^{-x} + 4 A e^{-x} = 5A e^{-x} = e^{-x}$.' },
          { label: 'Step 4: Match coefficients', text: '$5A = 1$, so $A = \\tfrac{1}{5}$ and $y_p = \\tfrac{1}{5} e^{-x}$.' },
          { label: 'Step 5: Assemble', text: 'The general solution is $y = c_1 \\cos 2x + c_2 \\sin 2x + \\tfrac{1}{5} e^{-x}$. As $x \\to \\infty$ nothing decays here (the complementary part oscillates forever), but the particular still tracks the forcing.' },
        ],
        result: '$y = c_1 \\cos 2x + c_2 \\sin 2x + \\tfrac{1}{5}e^{-x}$: the exponential forcing shifts the entire oscillation by its own shape.',
      },
      {
        title: 'Superposition: polynomial plus trig forcing',
        problem: 'Solve $y\'\' + y\' - 2y = x + \\sin 2x$ with initial conditions $y(0) = 1$, $y\'(0) = 0$ (the book’s own exercise).',
        steps: [
          { label: 'Step 1: Complementary solution', text: '$r^{2} + r - 2 = (r + 2)(r - 1) = 0$ gives $r = -2, 1$, so $y_c = c_1 e^{x} + c_2 e^{-2x}$.' },
          { label: 'Step 2: Split the forcing', text: 'By superposition, solve with $g_1 = x$ and $g_2 = \\sin 2x$ separately and add the particulars.' },
          { label: 'Step 3: Polynomial piece', text: 'Try $y_{p1} = Ax + B$: then $y_{p1}\'\' + y_{p1}\' - 2y_{p1} = 0 + A - 2(Ax + B) = -2Ax + (A - 2B)$. Matching $x$: $-2A = 1$ so $A = -\\tfrac{1}{2}$; matching constants: $A - 2B = 0$ so $B = -\\tfrac{1}{4}$.' },
          { label: 'Step 4: Trig piece', text: 'Try $y_{p2} = C\\cos 2x + D\\sin 2x$. Substituting and collecting gives $(-6C + 2D)\\cos 2x + (-6D - 2C)\\sin 2x = \\sin 2x$, so $-6C + 2D = 0$ and $-6D - 2C = 1$. From the first, $D = 3C$; then $-20C = 1$ gives $C = -\\tfrac{1}{20}$, $D = -\\tfrac{3}{20}$.' },
          { label: 'Step 5: General solution', text: '$y = c_1 e^{x} + c_2 e^{-2x} - \\tfrac{x}{2} - \\tfrac{1}{4} - \\tfrac{1}{20}\\cos 2x - \\tfrac{3}{20}\\sin 2x$.' },
          { label: 'Step 6: Apply the initial conditions', text: '$y(0) = c_1 + c_2 - \\tfrac{1}{4} - \\tfrac{1}{20} = 1$ gives $c_1 + c_2 = \\tfrac{13}{10}$. Also $y\' = c_1 e^x - 2c_2 e^{-2x} - \\tfrac{1}{2} - \\tfrac{3}{10}\\cos 2x + \\tfrac{1}{10}\\sin 2x$, so $y\'(0) = c_1 - 2c_2 - \\tfrac{4}{5} = 0$ gives $c_1 - 2c_2 = \\tfrac{4}{5}$. Solving: $3c_2 = \\tfrac{1}{2}$, so $c_2 = \\tfrac{1}{6}$ and $c_1 = \\tfrac{17}{15}$.' },
        ],
        result: '$y = \\tfrac{17}{15}e^{x} + \\tfrac{1}{6}e^{-2x} - \\tfrac{x}{2} - \\tfrac{1}{4} - \\tfrac{1}{20}\\cos 2x - \\tfrac{3}{20}\\sin 2x$ — two guessed particulars, one addition, one linear system.',
      },
      {
        title: 'The modification rule in action',
        problem: 'Solve $y\'\' - y\' = x e^{x}$ with $y(0) = 2$, $y\'(0) = 1$.',
        steps: [
          { label: 'Step 1: Complementary solution', text: 'The characteristic equation $r^{2} - r = r(r - 1) = 0$ has roots $r = 0$ and $r = 1$, so $y_c = c_1 + c_2 e^{x}$.' },
          { label: 'Step 2: First trial and failure', text: 'For the forcing $xe^{x}$, the table suggests $(Ax + B)e^{x}$. But the constant piece $B e^{x}$ is a complementary solution — it would be annihilated by the operator. Modification rule: multiply by $x$.' },
          { label: 'Step 3: Modified trial', text: 'Take $y_p = (Ax^{2} + Bx)\\,e^{x}$. Note that even $Axe^{x}$ is not enough — the overlap is with $e^{x}$, so a single factor of $x$ on the whole polynomial guess suffices.' },
          { label: 'Step 4: Substitute', text: 'Computing: $y_p\' = (Ax^{2} + Bx + 2Ax + B)e^{x}$ and $y_p\'\' = (Ax^{2} + Bx + 4Ax + 2B + 2A)e^{x}$. Then $y_p\'\' - y_p\' = (2Ax + 2A + B)\\,e^{x}$.' },
          { label: 'Step 5: Match coefficients', text: '$(2Ax + 2A + B)e^{x} = x e^{x}$ requires $2A = 1$ and $2A + B = 0$, so $A = \\tfrac{1}{2}$ and $B = -1$: $y_p = \\left(\\tfrac{x^{2}}{2} - x\\right) e^{x}$.' },
          { label: 'Step 6: Apply the initial conditions', text: '$y = c_1 + c_2 e^{x} + (\\tfrac{x^{2}}{2} - x)e^{x}$. Then $y(0) = c_1 + c_2 = 2$ and $y\'(0) = c_2 - 1 = 1$, so $c_2 = 2$ and $c_1 = 0$.' },
        ],
        result: '$y = \\left(\\tfrac{x^{2}}{2} - x + 2\\right)e^{x}$ — the guess had to be modified once because $e^{x}$ already lived in $y_c$.',
      },
    ],
    keyTakeaways: [
      'General solution of a nonhomogeneous equation: $y = y_c + y_p$ — complementary plus any particular.',
      'The undetermined-coefficients table: polynomials guess polynomials of the same degree with all lower terms; $e^{kx}$ guesses $Ae^{kx}$; trig guesses $A\\cos kx + B\\sin kx$ with both terms.',
      'Products force product guesses: for $xe^{x}$, guess $(Ax + B)e^{x}$; for $e^{x}\\sin x$, guess $(A\\cos x + B\\sin x)e^{x}$.',
      'Modification rule: if the trial overlaps the complementary solution, multiply by $x$ (by $x^{2}$ for a double overlap).',
      'Superposition lets you solve term-by-term and add the particulars.',
      'The method requires the forcing to belong to a family closed under differentiation; otherwise use variation of parameters.',
      'With damping, $y_c$ is the transient and $y_p$ the steady state the solution settles onto.',
    ],
    quiz: [
      {
        q: 'The general solution of $ay\'\' + by\' + cy = g(x)$ has the form:',
        options: ['$y = y_p$ alone', '$y = y_c + y_p$, complementary plus any particular solution', '$y = c_1 y_1$ with a single constant', '$y = y_c$ alone'],
        answer: 1,
        explanation: 'Linearity splits the problem: the homogeneous part contributes the two-constant family $y_c$, and one particular solution $y_p$ handles the forcing. All solutions arise this way.',
      },
      {
        q: 'For $y\'\' + 9y = \\cos 3x$, the correct trial particular solution is:',
        options: [`$y_p = A\\cos 3x$`, `$y_p = A\\cos 3x + B\\sin 3x$`, `$y_p = x(A\\cos 3x + B\\sin 3x)$`, `$y_p = A x + B$`],
        answer: 2,
        explanation: 'The ordinary trial $A\\cos 3x + B\\sin 3x$ solves the HOMOGENEOUS equation ($r = \\pm 3i$), so the operator would return zero. The modification rule multiplies the whole trig guess by $x$.',
      },
      {
        q: 'To solve $y\'\' + 2y\' = e^{x}\\sin x$ by undetermined coefficients, the trial should be:',
        options: [`$y_p = A e^{x}$`, `$y_p = A\\sin x + B\\cos x$`, `$y_p = e^{x}(A\\cos x + B\\sin x)$`, `$y_p = Ax e^{x}\\sin x$`],
        answer: 2,
        explanation: 'Products guess products: an exponential times a sine/cosine forces $e^{x}(A\\cos x + B\\sin x)$. No modification is needed unless these terms solve the complementary equation — here they do not.',
      },
      {
        q: 'If $y_{p1} = x^{2}/4$ solves $y\'\' + y\' - 2y = x$ and $y_{p2} = -\\tfrac{1}{20}\\cos 2x$ solves $y\'\' + y\' - 2y = \\sin 2x$ (with $y\'\'$ contributing the rest), then a particular solution of $y\'\' + y\' - 2y = x + \\sin 2x$ is:',
        options: [`$y_{p1} \\cdot y_{p2}$`, `$y_{p1} - y_{p2}$`, `$y_{p1} + y_{p2}$`, 'No particular solution exists'],
        answer: 2,
        explanation: 'Superposition: the response to a sum of inputs is the sum of the responses, so $y_p = y_{p1} + y_{p2}$. Multiplying particular solutions is meaningless — linearity is about sums, not products.',
      },
      {
        q: 'Which forcing function makes the method of undetermined coefficients fail?',
        options: [`$g(x) = x^{3}e^{-2x}$`, `$g(x) = \\cos 5x - 3\\sin 5x$`, `$g(x) = \\tan x$`, `$g(x) = e^{2x}\\sin x$`],
        answer: 2,
        explanation: 'Successive derivatives of $\\tan x$ never settle into a finite family of polynomials, exponentials and trig functions, so no finite trial can match. The fallback method is variation of parameters.',
      },
    ],
  },

  // ------------------------------------------------------------------ 17.3
  {
    sectionId: 'calc-ch17-s3',
    readingTime: 10,
    intro: 'Here the theory pays its rent: springs, circuits and oscillations everywhere are governed by $m x\'\' + c x\' + k x = F(t)$. The discriminant of the characteristic equation separates overdamped, critically damped and underdamped motion; forcing adds transients and steady states; and driving a system at its natural frequency produces resonance — unbounded growth. The identical mathematics runs RLC circuits.',
    objectives: [
      'Derive the spring equation $m x\'\' + cx\' + kx = 0$ from Hooke’s law and viscous damping',
      'Classify overdamped, critically damped and underdamped motion from the discriminant $c^{2} - 4mk$ and solve each',
      'Analyze forced oscillations: transient versus steady state, and resonance at $\\omega = \\sqrt{k/m}$',
      'Translate the RLC circuit equation and solve it by analogy with the spring',
    ],
    concepts: [
      {
        term: 'The spring–mass equation',
        kind: 'law',
        statement: 'A mass $m$ on a spring with constant $k$ (Hooke’s law: restoring force $-kx$) moving in a medium with damping constant $c$ (resisting force $-c\\,dx/dt$) obeys **Newton’s second law**: $$m \\frac{d^{2}x}{dt^{2}} + c \\frac{dx}{dt} + k x = 0,$$ with $x(t)$ the displacement from equilibrium.',
        detail: 'Units: $m$ in kilograms, $k$ in newtons per meter (force per stretch), $c$ in newton-seconds per meter (force per velocity). Hooke’s law lets you measure $k$ from data — a force of $13$ N stretching a spring $0.25$ m means $k = 52$ N/m, exactly the book’s exercise. The equation is the homogeneous equation of Section 17.1 wearing physics clothes; adding an external force $F(t)$ on the right makes it the nonhomogeneous equation of Section 17.2.',
      },
      {
        term: 'The three damping regimes',
        kind: 'theorem',
        statement: 'For $m x\'\' + c x\' + k x = 0$, the discriminant $c^{2} - 4mk$ decides everything: **overdamped** ($c^{2} > 4mk$): two distinct negative real roots, no oscillation, the mass creeps back to equilibrium, crossing at most once; **critically damped** ($c^{2} = 4mk$): repeated root $r = -c/2m$, fastest possible return to equilibrium without oscillating; **underdamped** ($c^{2} < 4mk$): complex roots, damped oscillation.',
        detail: 'In the underdamped case the roots are $-\\dfrac{c}{2m} \\pm i\\omega_d$ with **quasi-frequency** $\\omega_d = \\dfrac{\\sqrt{4mk - c^{2}}}{2m}$ and **quasi-period** $2\\pi/\\omega_d$ — slightly slower than the natural frequency $\\sqrt{k/m}$ of the undamped spring, with the difference growing as damping grows. Engineers design car suspensions near critical damping: any less and the car bounces, any more and it recovers sluggishly.',
      },
      {
        term: 'Damped oscillation anatomy',
        kind: 'notation',
        statement: 'An underdamped solution $$x(t) = e^{-ct/2m}\\left(c_1 \\cos \\omega_d t + c_2 \\sin \\omega_d t\\right) = A e^{-ct/2m} \\cos(\\omega_d t - \\delta)$$ oscillates with quasi-frequency $\\omega_d$ inside the shrinking envelope $\\pm A e^{-ct/2m}$.',
        detail: 'The envelope halves every $t = (2m \\ln 2)/c$ — a convenient reading of damping strength. The amplitude–phase form $A\\cos(\\omega_d t - \\delta)$ comes from the identity $c_1\\cos\\theta + c_2\\sin\\theta = A\\cos(\\theta - \\delta)$ with $A = \\sqrt{c_1^{2} + c_2^{2}}$.',
      },
      {
        term: 'Forced oscillations: transient and steady state',
        kind: 'method',
        statement: 'With external force $F(t) = F_0 \\cos \\omega t$, the solution is $x = x_c + x_p$: with damping ($c > 0$) the complementary part $x_c \\to 0$ — the **transient** — while the particular solution, the **steady state**, oscillates forever at the driving frequency $\\omega$: $x_p = \\dfrac{F_0}{m(\\omega^{2} - \\omega_0^{2})}$-scaled trigonometry with $\\omega_0 = \\sqrt{k/m}$.',
        detail: 'The steady-state amplitude peaks sharply as the driving frequency approaches the natural frequency: at $\\omega \\approx \\omega_0$ the denominator $m(\\omega^{2} - \\omega_0^{2})$ vanishes and (with damping present) the response blows up to a large but finite maximum — the practical resonance curve used to tune radios and to avoid bridges’ worst vibration modes.',
      },
      {
        term: 'Resonance',
        kind: 'insight',
        statement: 'Drive an UNDAMPED spring at exactly its natural frequency, $m x\'\' + kx = F_0\\cos\\omega_0 t$ with $\\omega_0 = \\sqrt{k/m}$, and no steady state exists: the solution grows without bound, $$x(t) = c_1\\cos\\omega_0 t + c_2\\sin\\omega_0 t + \\frac{F_0 t}{2m\\omega_0}\\sin\\omega_0 t.$$',
        detail: 'The particular solution is the modification-rule case of Section 17.2: the ordinary trig guess solves the homogeneous equation, so the trial acquires a factor of $t$, producing linear growth of the oscillation amplitude. Physically, each push arrives in phase with the swing and adds energy indefinitely — the opera singer shattering a wine glass, a washing machine walking across the floor at one unlucky spin speed, and the design criterion that keeps buildings and airplane wings away from their resonance bands.',
      },
      {
        term: 'The RLC circuit analogy',
        kind: 'law',
        statement: 'A series circuit with inductance $L$, resistance $R$ and capacitance $C$ driven by voltage $E(t)$ obeys $$L \\frac{d^{2}q}{dt^{2}} + R \\frac{dq}{dt} + \\frac{1}{C}\\, q = E(t),$$ where $q(t)$ is the charge on the capacitor — the SAME equation as the spring with correspondences $L \\leftrightarrow m$, $R \\leftrightarrow c$, $1/C \\leftrightarrow k$, $E \\leftrightarrow F$.',
        detail: 'Every mechanical conclusion translates directly: the natural frequency is $\\omega_0 = 1/\\sqrt{LC}$, resistance damps like friction, and an AC source at $\\omega_0$ drives electrical resonance — the selectivity principle that lets a radio tune one station out of many (the Art of Electronics covers the same LC circuits from the component side). Charge corresponds to displacement and current $i = dq/dt$ to velocity, so energy sloshes between the magnetic field of the coil (kinetic analog) and the electric field of the capacitor (potential analog).',
      },
    ],
    examples: [
      {
        title: 'One spring, three damping regimes',
        problem: 'A $2$ kg mass hangs from a spring with constant $k = 12$ N/m (a $6$ N force stretches it $0.5$ m). Write the equation of motion and describe the solutions for damping constants $c = 14$, $c = 4\\sqrt{6}$ and $c = 4$ N·s/m, in the last case with $x(0) = 1$, $x\'(0) = 0$.',
        steps: [
          { label: 'Step 1: Set up the equation', text: 'Newton’s law gives $2x\'\' + c x\' + 12x = 0$. The classification depends on the discriminant $c^{2} - 4mk = c^{2} - 96$.' },
          { label: 'Step 2: Overdamped, $c = 14$', text: 'Here $c^{2} = 196 > 96$. Dividing by $2$: $x\'\' + 7x\' + 6x = 0$ with characteristic equation $r^{2} + 7r + 6 = (r + 6)(r + 1) = 0$, roots $r = -6, -1$. General solution: $x = c_1 e^{-6t} + c_2 e^{-t}$ — a non-oscillating creep back to equilibrium (the book’s exercise releases the mass from $x(0) = 1$ with $x\'(0) = 0$, giving $x = -\\tfrac{1}{5}e^{-6t} + \\tfrac{6}{5}e^{-t}$).' },
          { label: 'Step 3: Critically damped, $c = 4\\sqrt{6}$', text: 'Now $c^{2} = 96 = 4mk$ exactly: the double root is $r = -c/(2m) = -4\\sqrt{6}/4 = -\\sqrt{6}$, and $x = (c_1 + c_2 t)\\,e^{-\\sqrt{6} t}$ — the fastest zero-overshoot return.' },
          { label: 'Step 4: Underdamped, $c = 4$', text: 'Now $c^{2} = 16 < 96$. The equation becomes $x\'\' + 2x\' + 6x = 0$ with roots $r = -1 \\pm \\sqrt{5}\\,i$, so $x = e^{-t}\\left(c_1 \\cos \\sqrt{5} t + c_2 \\sin \\sqrt{5} t\\right)$.' },
          { label: 'Step 5: Fit the initial conditions', text: 'For the underdamped case: $x(0) = c_1 = 1$, and differentiating gives $x\'(0) = -c_1 + \\sqrt{5} c_2 = 0$, so $c_2 = 1/\\sqrt{5}$ and $x = e^{-t}\\left(\\cos \\sqrt{5} t + \\tfrac{1}{\\sqrt{5}}\\sin \\sqrt{5} t\\right)$.' },
          { label: 'Step 6: Read off the oscillation data', text: 'Quasi-frequency $\\omega_d = \\sqrt{5}$ rad/s, quasi-period $2\\pi/\\sqrt{5} \\approx 2.8$ s, envelope $\\pm\\sqrt{1 + \\tfrac{1}{5}}\\,e^{-t} = \\pm\\tfrac{\\sqrt{30}}{5} e^{-t}$ — visible rings that die out exponentially.' },
        ],
        result: 'The same spring runs through all three regimes as $c$ drops from $14$ through $4\\sqrt{6} \\approx 9.8$ to $4$: creep, fastest decay, then damped ringing with quasi-frequency $\\sqrt{5}$.',
      },
      {
        title: 'A damped oscillation worked completely',
        problem: 'A $1$ kg mass stretches a spring with $k = 100$ N/m; the damping constant is $c = 10$ N·s/m. The mass is set in motion at $x(0) = -0.1$ m with velocity $x\'(0) = 0$. Find and interpret the motion.',
        steps: [
          { label: 'Step 1: Write the IVP', text: 'The equation is $x\'\' + 10x\' + 100x = 0$ (after dividing by $m = 1$), with $x(0) = -0.1$, $x\'(0) = 0$.' },
          { label: 'Step 2: Classify', text: '$c^{2} - 4mk = 100 - 400 = -300 < 0$: underdamped — the motion will oscillate while decaying.' },
          { label: 'Step 3: Solve the characteristic equation', text: '$r^{2} + 10r + 100 = 0$ gives $r = \\dfrac{-10 \\pm \\sqrt{-300}}{2} = -5 \\pm 5\\sqrt{3}\\,i$, so $\\alpha = -5$ and $\\omega_d = 5\\sqrt{3}$.' },
          { label: 'Step 4: General solution', text: '$x = e^{-5t}\\left(c_1 \\cos 5\\sqrt{3} t + c_2 \\sin 5\\sqrt{3} t\\right)$.' },
          { label: 'Step 5: Fit the initial conditions', text: '$c_1 = -0.1$. Differentiating: $x\'(0) = -5c_1 + 5\\sqrt{3} c_2 = 0$, so $c_2 = c_1/\\sqrt{3} = -0.1/\\sqrt{3}$.' },
          { label: 'Step 6: Amplitude–phase form and interpretation', text: 'With $A = \\sqrt{0.01 + 0.01/3} = 0.2/\\sqrt{3} \\approx 0.115$: $x(t) = -\\dfrac{0.2}{\\sqrt{3}}\\,e^{-5t}\\cos\\left(5\\sqrt{3} t - \\tfrac{\\pi}{6}\\right)$. The mass rings at quasi-frequency $5\\sqrt{3} \\approx 8.66$ rad/s (quasi-period $\\approx 0.73$ s) with envelope shrinking by $e^{-5}$ per second — each oscillation about $99$% smaller every $0.92$ s, since $e^{-5 \\cdot 0.92} \\approx \\tfrac{1}{100}$.' },
        ],
        result: '$x(t) = e^{-5t}\\left(-0.1\\cos 5\\sqrt{3} t - \\tfrac{0.1}{\\sqrt{3}}\\sin 5\\sqrt{3} t\\right)$: a damped oscillation at $8.66$ rad/s dying out inside the envelope $\\pm 0.115\\,e^{-5t}$.',
      },
      {
        title: 'Resonance on an undamped spring',
        problem: 'Solve $x\'\' + 4x = \\cos 2t$ with $x(0) = 1$, $x\'(0) = 0$, and describe the long-run behavior.',
        steps: [
          { label: 'Step 1: Identify the resonance condition', text: 'The natural frequency is $\\omega_0 = \\sqrt{4} = 2$, and the driving frequency is $\\omega = 2$: this is exact resonance, and the driving term solves the homogeneous equation.' },
          { label: 'Step 2: Complementary solution', text: '$x_c = c_1 \\cos 2t + c_2 \\sin 2t$.' },
          { label: 'Step 3: Apply the modification rule', text: 'The ordinary trig trial $A\\cos 2t + B\\sin 2t$ reproduces the complementary solution and returns zero when substituted. Multiply by $t$: try $x_p = t(A\\cos 2t + B\\sin 2t)$.' },
          { label: 'Step 4: Substitute and match', text: 'Differentiating twice: $x_p\'\' = (-4At - 4B)\\cos 2t + (4A - 4Bt)\\sin 2t + 2B\\cos 2t \\cdot 0$ — collecting carefully, $x_p\'\' + 4x_p = -4B\\cos 2t + 4A\\sin 2t$. Matching $\\cos 2t$ gives $-4B = 1$, so $B = -\\tfrac{1}{4}$ and $A = 0$.' },
          { label: 'Step 5: Assemble and fit the initial data', text: '$x = c_1\\cos 2t + c_2\\sin 2t - \\tfrac{t}{4}\\sin 2t$. Then $x(0) = c_1 = 1$ and $x\'(0) = 2c_2 = 0$, so $c_2 = 0$.' },
          { label: 'Step 6: Interpret', text: '$x(t) = \\cos 2t - \\tfrac{t}{4}\\sin 2t$: the oscillation amplitude grows like $t/4$ without bound — every cycle the drive pumps in more energy in phase with the motion. This is the wine-glass moment; real systems avoid this regime or rely on damping and nonlinearities to survive it.' },
        ],
        result: '$x(t) = \\cos 2t - \\tfrac{t}{4}\\sin 2t$ — unbounded resonant growth, the modification rule made visible as physics.',
      },
    ],
    keyTakeaways: [
      'Spring equation: $m x\'\' + c x\' + kx = 0$ from Hooke’s law ($-kx$) plus viscous damping ($-c x\'$) plus Newton.',
      'The discriminant $c^{2} - 4mk$ classifies: overdamped (creep), critically damped (fastest non-oscillating return), underdamped (ringing).',
      'Underdamped motion: $x = e^{-ct/2m}(c_1\\cos\\omega_d t + c_2\\sin\\omega_d t)$ with quasi-frequency $\\omega_d = \\sqrt{4mk - c^{2}}/(2m)$, slightly below the natural $\\sqrt{k/m}$.',
      'With damping and forcing, the solution is transient ($\\to 0$) plus a steady state oscillating at the driving frequency.',
      'Resonance: undamped driving at $\\omega_0 = \\sqrt{k/m}$ produces $\\frac{F_0 t}{2m\\omega_0}\\sin\\omega_0 t$ — amplitude growing linearly forever.',
      'RLC circuits obey $Lq\'\' + Rq\' + (1/C)q = E(t)$: $L \\leftrightarrow m$, $R \\leftrightarrow c$, $1/C \\leftrightarrow k$, natural frequency $1/\\sqrt{LC}$.',
      'The resonance trial $t(A\\cos\\omega_0 t + B\\sin\\omega_0 t)$ is exactly the Section 17.2 modification rule wearing a lab coat.',
    ],
    quiz: [
      {
        q: 'A $2$ kg mass on a spring with $k = 12$ N/m has damping constant $c$. The motion is critically damped when $c$ equals:',
        options: ['$4\\sqrt{6} \\approx 9.8$ N·s/m', '$14$ N·s/m', '$4$ N·s/m', '$48$ N·s/m'],
        answer: 0,
        explanation: 'Critical damping requires $c^{2} = 4mk = 4(2)(12) = 96$, so $c = \\sqrt{96} = 4\\sqrt{6} \\approx 9.8$. Any larger $c$ overdamps; any smaller underdamps.',
      },
      {
        q: 'In an underdamped system, the quasi-frequency is $\\omega_d = \\dfrac{\\sqrt{4mk - c^{2}}}{2m}$. Compared with the undamped natural frequency $\\omega_0 = \\sqrt{k/m}$, we always have:',
        options: [`$\\omega_d > \\omega_0$`, `$\\omega_d = \\omega_0$`, `$\\omega_d < \\omega_0$, approaching $\\omega_0$ as $c \\to 0$`, '$\\omega_d$ is negative'],
        answer: 2,
        explanation: 'Damping slows the oscillation: $\\sqrt{4mk - c^{2}} < \\sqrt{4mk} = 2\\sqrt{mk}$, so $\\omega_d < \\sqrt{k/m}$. As damping vanishes, the two frequencies coincide.',
      },
      {
        q: 'An undamped mass–spring system with natural frequency $\\omega_0$ is driven by $F_0\\cos\\omega t$ with $\\omega = \\omega_0$. The particular solution contains the factor:',
        options: ['$\\dfrac{F_0}{m(\\omega^{2} - \\omega_0^{2})}$, a large constant', `$\\dfrac{F_0 t}{2m\\omega_0}$, growing linearly in $t$`, '$e^{-\\omega_0 t}$, decaying', '$\\cos(\\omega_0 t)$ with constant amplitude'],
        answer: 1,
        explanation: 'At exact resonance the constant-coefficient trial fails (it solves the homogeneous equation), so the modified trial picks up a factor of $t$: the amplitude grows like $F_0 t/(2m\\omega_0)$ — unbounded growth, the signature of resonance.',
      },
      {
        q: 'In the RLC circuit equation $Lq\'\' + Rq\' + \\dfrac{1}{C}q = E(t)$, the mechanical analogs are:',
        options: ['$L \\leftrightarrow$ damping, $R \\leftrightarrow$ mass', '$L \\leftrightarrow$ mass, $R \\leftrightarrow$ damping, $1/C \\leftrightarrow$ spring constant', '$1/C \\leftrightarrow$ mass, $L \\leftrightarrow$ spring constant', 'There is no analogy — the equation is unrelated to springs'],
        answer: 1,
        explanation: 'Inductance resists changes in current like mass resists acceleration; resistance dissipates energy like friction; the reciprocal capacitance pulls charge back like a spring pulls displacement. Force corresponds to voltage $E(t)$.',
      },
      {
        q: 'A car suspension is designed to operate near critical damping because:',
        options: ['Critical damping gives the most pleasant oscillations', 'It returns to equilibrium as fast as possible without oscillating', 'It maximizes resonance effects', 'It makes the quasi-period infinite'],
        answer: 1,
        explanation: 'Overdamping recovers sluggishly; underdamping lets the car bounce; critical damping is the boundary case that recovers fastest without overshoot — the Goldilocks setting for shock absorbers.',
      },
    ],
  },

  // ------------------------------------------------------------------ 17.4
  {
    sectionId: 'calc-ch17-s4',
    readingTime: 8,
    intro: 'Most differential equations — Airy’s, Bessel’s, Legendre’s — cannot be solved by any finite combination of elementary functions. The way through is to assume the answer is a power series and solve for its coefficients: substituting $y = \\sum c_n x^n$ turns the differential equation into a recurrence relation, and the infinite series that emerges often becomes the very definition of a new special function.',
    objectives: [
      'Set up the power-series ansatz and differentiate it term by term',
      'Derive recurrence relations by index-shifting and equating coefficients',
      'Generate the two independent solutions from $c_0$ and $c_1$, and verify against known functions when possible',
      'Distinguish ordinary from singular points and state the radius-of-convergence guarantee',
    ],
    concepts: [
      {
        term: 'The power-series ansatz',
        kind: 'method',
        statement: 'Seek a solution centered at $x_0$ as a Taylor-style series: $$y = \\sum_{n=0}^{\\infty} c_n (x - x_0)^{n}, \\qquad y\' = \\sum_{n=1}^{\\infty} n c_n (x - x_0)^{n-1}, \\qquad y\'\' = \\sum_{n=2}^{\\infty} n(n-1)\\,c_n (x - x_0)^{n-2},$$ then substitute into the equation and match powers of $(x - x_0)$.',
        detail: 'Term-by-term differentiation is legal inside the radius of convergence (Section 11.9). Matching powers works because a power series that vanishes on an interval must have every coefficient zero — the polynomial-identity principle extended to series. In practice most examples use $x_0 = 0$ for clean algebra.',
      },
      {
        term: 'Index shifting',
        kind: 'notation',
        statement: 'To compare two series, rewrite them with the same power of $x$. The shift $n \\to n - k$ relabels a sum starting at $n = k$ into one starting at $n = 0$: $$\\sum_{n=2}^{\\infty} n(n-1) c_n x^{n-2} = \\sum_{n=0}^{\\infty} (n+2)(n+1) c_{n+2}\\,x^{n}.$$',
        detail: 'The two mechanical rules: replace every $n$ by $n + 2$ inside the summand, and drop the lower limit by $2$; then re-index all sums to start at the same power of $x$ so their coefficients can be compared term-by-term. Isolated leftover terms (the early powers) become the initial recurrence conditions.',
      },
      {
        term: 'Recurrence relations',
        kind: 'definition',
        statement: 'Equating coefficients of each power of $x$ produces a **recurrence relation** — a formula expressing each $c_n$ in terms of earlier coefficients. Because the differential equation is second order and linear, exactly two coefficients ($c_0$ and $c_1$) remain free, generating two independent solutions $$y_1 = \\text{(series built from } c_0), \\qquad y_2 = \\text{(series built from } c_1).$$',
        detail: 'The general solution is $y = c_0 y_1 + c_1 y_2$ — the same two-dimensional solution space as Section 17.1, now written in series form. Choosing $c_0 = 1, c_1 = 0$ builds one basis solution and $c_0 = 0, c_1 = 1$ the other; initial conditions at $x = 0$ read off directly as $y(0) = c_0$, $y\'(0) = c_1$.',
      },
      {
        term: 'Ordinary versus singular points',
        kind: 'definition',
        statement: 'For the standard form $y\'\' + P(x)y\' + Q(x)y = 0$, a point $x_0$ is **ordinary** if $P$ and $Q$ are analytic at $x_0$ (in particular, if $P(x_0)$ and $Q(x_0)$ are finite). At an ordinary point the series solutions converge at least as far as the nearest singular point; at a singular point the method can break down.',
        detail: 'For Airy’s equation $y\'\' - xy = 0$, both $P = 0$ and $Q = -x$ are polynomials — every point is ordinary and the solutions converge for all $x$ (entire functions). The theorem to remember: the radius of convergence of a series solution is at least the distance from the center to the nearest singular point of the equation — often giving convergence exactly where you need it.',
      },
      {
        term: 'Airy’s equation and special functions',
        kind: 'insight',
        statement: 'The equation $y\'\' - xy = 0$ (Airy’s equation) has no elementary solution; its two series solutions define the **Airy functions** $\\operatorname{Ai}(x)$ and $\\operatorname{Bi}(x)$, which describe light caustics, quantum particles in a linear potential, and stress near a crack tip.',
        detail: 'This is the general pattern: Bessel functions solve $x^{2}y\'\' + xy\' + (x^{2} - \\nu^{2})y = 0$ (vibrating drumheads), Legendre polynomials solve the angular part of the hydrogen atom, Chebyshev polynomials design filters — the Art of Electronics’ DSP chapters meet them again. When no closed form exists, THE POWER SERIES IS THE FUNCTION: libraries like Numerical Recipes evaluate exactly these recurrences. Chapter 11’s power-series machinery was rehearsal for this moment.',
      },
    ],
    examples: [
      {
        title: 'A warm-up that recovers $e^{x}$ and $e^{-x}$',
        problem: 'Solve $y\'\' - y = 0$ by power series and verify that the two series solutions rebuild the known exponentials.',
        steps: [
          { label: 'Step 1: Substitute the ansatz', text: 'With $y = \\sum_{n=0}^{\\infty} c_n x^{n}$: $\\sum_{n=2}^{\\infty} n(n-1) c_n x^{n-2} - \\sum_{n=0}^{\\infty} c_n x^{n} = 0$.' },
          { label: 'Step 2: Index-shift the first sum', text: 'Replace $n$ by $n + 2$: $\\sum_{n=0}^{\\infty} (n+2)(n+1) c_{n+2} x^{n} - \\sum_{n=0}^{\\infty} c_n x^{n} = 0$, so $\\sum_{n=0}^{\\infty}\\left[(n+2)(n+1)c_{n+2} - c_n\\right] x^{n} = 0$.' },
          { label: 'Step 3: Equate coefficients', text: 'Every bracket must vanish: $(n+2)(n+1)c_{n+2} = c_n$, giving the recurrence $$c_{n+2} = \\frac{c_n}{(n+2)(n+1)}.$$' },
          { label: 'Step 4: Build the even chain from $c_0$', text: '$c_2 = \\dfrac{c_0}{2 \\cdot 1} = \\dfrac{c_0}{2!}$, $c_4 = \\dfrac{c_2}{4 \\cdot 3} = \\dfrac{c_0}{4!}$, $c_6 = \\dfrac{c_0}{6!}$, and generally $c_{2k} = \\dfrac{c_0}{(2k)!}$. The even solution is $c_0\\left(1 + \\dfrac{x^{2}}{2!} + \\dfrac{x^{4}}{4!} + \\cdots\\right) = c_0 \\cosh x$.' },
          { label: 'Step 5: Build the odd chain from $c_1$', text: '$c_3 = \\dfrac{c_1}{3!}$, $c_5 = \\dfrac{c_1}{5!}$, so $c_{2k+1} = \\dfrac{c_1}{(2k+1)!}$ and the odd solution is $c_1\\left(x + \\dfrac{x^{3}}{3!} + \\dfrac{x^{5}}{5!} + \\cdots\\right) = c_1 \\sinh x$.' },
          { label: 'Step 6: Recognize the general solution', text: 'Since $\\cosh x = \\tfrac{1}{2}(e^{x} + e^{-x})$ and $\\sinh x = \\tfrac{1}{2}(e^{x} - e^{-x})$, the span of $\\cosh$ and $\\sinh$ equals the span of $e^{x}$ and $e^{-x}$ — the series method reproduces Section 17.1’s answer exactly.' },
        ],
        result: '$y = c_0 \\cosh x + c_1 \\sinh x$, equivalently $y = A e^{x} + B e^{-x}$: the recurrence relation quietly rebuilt the Taylor series of the exponentials.',
      },
      {
        title: 'Airy’s equation: a genuinely new function',
        problem: 'Find the power-series solution of Airy’s equation $y\'\' - xy = 0$ and write out the first several terms of each independent solution.',
        steps: [
          { label: 'Step 1: Substitute', text: '$\\sum_{n=2}^{\\infty} n(n-1)c_n x^{n-2} - x\\sum_{n=0}^{\\infty} c_n x^{n} = 0$. The second sum is $\\sum_{n=0}^{\\infty} c_n x^{n+1}$.' },
          { label: 'Step 2: Align the powers', text: 'Shift the first sum by $n \\to n + 2$: $\\sum_{n=0}^{\\infty}(n+2)(n+1)c_{n+2}x^{n} - \\sum_{n=1}^{\\infty} c_{n-1}x^{n} = 0$ (in the second sum the power $x^{n}$ is produced by the old index $n - 1$).' },
          { label: 'Step 3: Read off the recurrence', text: 'The $x^{0}$ term appears only in the first sum: $2c_2 = 0$, so $c_2 = 0$. For $n \\ge 1$: $(n+2)(n+1)c_{n+2} = c_{n-1}$, that is $$c_{m} = \\frac{c_{m-3}}{m(m-1)} \\quad \\text{for } m \\ge 3.$$' },
          { label: 'Step 4: Chain from $c_0$', text: '$c_3 = \\dfrac{c_0}{3 \\cdot 2} = \\dfrac{c_0}{6}$, $c_6 = \\dfrac{c_3}{6 \\cdot 5} = \\dfrac{c_0}{180}$, $c_9 = \\dfrac{c_6}{9 \\cdot 8} = \\dfrac{c_0}{12960}$ — every third coefficient, all from $c_0$.' },
          { label: 'Step 5: Chain from $c_1$', text: '$c_4 = \\dfrac{c_1}{4 \\cdot 3} = \\dfrac{c_1}{12}$, $c_7 = \\dfrac{c_4}{7 \\cdot 6} = \\dfrac{c_1}{504}$, $c_{10} = \\dfrac{c_7}{10 \\cdot 9} = \\dfrac{c_1}{45360}$ — the $1 \\bmod 3$ family from $c_1$.' },
          { label: 'Step 6: Assemble both solutions', text: '$y_1 = 1 + \\dfrac{x^{3}}{6} + \\dfrac{x^{6}}{180} + \\dfrac{x^{9}}{12960} + \\cdots$ (from $c_0 = 1$) and $y_2 = x + \\dfrac{x^{4}}{12} + \\dfrac{x^{7}}{504} + \\cdots$ (from $c_1 = 1$), with the $c_2$ chain ($c_2 = c_5 = c_8 = \\cdots = 0$) dead. Since all coefficients are polynomials, every point is ordinary and both series converge for all $x$.' },
        ],
        result: 'The general solution is $y = c_0 y_1 + c_1 y_2$ with $y_1 = 1 + \\frac{x^{3}}{6} + \\frac{x^{6}}{180} + \\frac{x^{9}}{12960} + \\cdots$ and $y_2 = x + \\frac{x^{4}}{12} + \\frac{x^{7}}{504} + \\cdots$ — the Airy functions in their native series form.',
      },
    ],
    keyTakeaways: [
      'The ansatz $y = \\sum c_n x^n$ converts a differential equation into algebra: substitute, index-shift, equate coefficients.',
      'A second-order linear equation leaves exactly two free coefficients, $c_0$ and $c_1$ — one independent series each.',
      'Index-shifting rule: $n \\to n + k$ inside the summand while dropping the lower limit by $k$, so all sums carry the same power $x^n$.',
      'Leftover lowest-power terms supply the initial conditions of the recurrence (like $c_2 = 0$ for Airy’s equation).',
      'At an ordinary point, series solutions converge at least to the nearest singular point; polynomial coefficients give solutions converging everywhere.',
      'For equations with no elementary solution — Airy, Bessel, Legendre — the power series IS the definition of the solution, and numerical libraries compute it from the recurrence.',
      'The method recovers familiar answers too: $y\'\' - y = 0$ regenerates the Taylor series of $\\cosh x$ and $\\sinh x$.',
    ],
    quiz: [
      {
        q: 'When solving by power series, the substitution $y = \\sum c_n x^{n}$ into $y\'\' - xy = 0$ produces, after index shifting, the equation $\\sum_{n=0}^{\\infty}(n+2)(n+1)c_{n+2}x^{n} - \\sum_{n=1}^{\\infty} c_{n-1}x^{n} = 0$. The $n = 0$ term implies:',
        options: [`$c_0 = 0$`, `$c_2 = 0$`, `$c_1 = 0$`, 'Nothing — the equation is vacuous at $n = 0$'],
        answer: 1,
        explanation: 'Only the first sum contains an $x^{0}$ term, giving $2 \\cdot 1 \\cdot c_2 = 0$, so $c_2 = 0$ — and by the recurrence, every coefficient in that chain ($c_5, c_8, \\ldots$) vanishes too.',
      },
      {
        q: 'For Airy’s equation, the recurrence is $c_{m} = c_{m-3}/(m(m-1))$ for $m \\ge 3$. Starting from $c_0 = 1$, the coefficients $c_3$, $c_6$ are:',
        options: [`$\\tfrac{1}{3}$ and $\\tfrac{1}{18}$`, `$\\tfrac{1}{6}$ and $\\tfrac{1}{180}$`, `$\\tfrac{1}{2}$ and $\\tfrac{1}{12}$`, `$\\tfrac{1}{6}$ and $\\tfrac{1}{36}$`],
        answer: 1,
        explanation: '$c_3 = c_0/(3 \\cdot 2) = 1/6$ and then $c_6 = c_3/(6 \\cdot 5) = (1/6)/30 = 1/180$. The chain jumps in steps of three because each coefficient looks back three places.',
      },
      {
        q: 'A second-order linear ODE solved by power series leaves how many free coefficients, and why?',
        options: ['One, because the series has a single starting term', 'Two — $c_0$ and $c_1$ — because two initial conditions are needed for a second-order equation', 'Infinitely many, because a series has infinitely many terms', 'None — the recurrence determines everything'],
        answer: 1,
        explanation: 'The recurrence expresses all higher coefficients in terms of earlier ones, and only the two leading coefficients escape: they are precisely $y(0) = c_0$ and $y\'(0) = c_1$, matching the two pieces of initial data a second-order IVP requires.',
      },
      {
        q: 'The radius of convergence of a power-series solution about an ordinary point $x_0$ is:',
        options: ['Always infinite', 'Always zero', 'At least the distance from $x_0$ to the nearest singular point of the equation', 'Exactly one, in all cases'],
        answer: 2,
        explanation: 'The theorem guarantees convergence out to the nearest point where the coefficients of the standard form fail to be analytic. For polynomial coefficients (like Airy’s) there are no singular points, so the solutions converge for every $x$.',
      },
      {
        q: 'Why does the power-series method matter for equations like Airy’s $y\'\' - xy = 0$?',
        options: ['It always terminates and gives a polynomial answer', 'No elementary closed form exists, so the series itself defines the solution — the Airy functions that physics and engineering then tabulate and compute', 'It converts the ODE into a first-order equation', 'It avoids the need for initial conditions'],
        answer: 1,
        explanation: 'When no combination of known functions solves the equation, the series solution becomes the DEFINITION of a new special function — exactly how $\\operatorname{Ai}$, $\\operatorname{Bi}$, Bessel functions and Legendre polynomials enter mathematics.',
      },
      // PYQ-pattern: GATE 2020 — recurrence for Airy-type series solution (rephrased, values changed)
      {
        q: 'With $y = \\sum_{n=0}^{\\infty}c_{n}x^{n}$ in $y^{\\prime\\prime} - xy = 0$, the recurrence for $n \\geq 0$ is:',
        options: [`$c_{n+3} = (n+3)(n+2)c_{n}$`, `$c_{n+3} = \\frac{c_{n}}{(n+3)(n+2)}$`, `$c_{n+1} = c_{n}$`, `$c_{n+2} = c_{n}$`],
        answer: 1,
        explanation: 'Step 1: Restate the ansatz as $y^{\\prime\\prime} = \\sum_{n=0}^{\\infty}(n+2)(n+1)c_{n+2}x^{n}$ and $xy = \\sum_{n=1}^{\\infty}c_{n-1}x^{n}$. Step 2: Recall the key principle that coefficients of like powers must match. Step 3: Read $2c_{2} = 0$ at $n = 0$, so $c_{2} = 0$. Step 4: For $n \\geq 1$ get $(n+2)(n+1)c_{n+2} = c_{n-1}$, which re-indexed is $c_{n+3} = \\frac{c_{n}}{(n+3)(n+2)}$. Step 5: The distractors invert the division, shift by the wrong amount, or ignore the factor $x$. Step 6: Hence the Airy recurrence steps by three with factorial-like denominators.'
      },
    ],
  },
]

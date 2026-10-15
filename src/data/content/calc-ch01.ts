import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 1: Functions and Models (Sections 1.1 – 1.5)
// Master study content. Worked examples track the book’s own exercises and
// solution-manual style (9e solutions, Ch 1 starts at PDF p. 4).
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh1Content: SectionContent[] = [
  // ------------------------------------------------------------------ 1.1
  {
    sectionId: 'calc-ch1-s1',
    depth: [
      {
        tier: 'masters',
        title: 'The function concept, made exact',
        blocks: [
          {
            kind: 'para',
            body: 'Stewart’s word **rule** is doing informal work, and the modern definition removes it. A function from $A$ to $B$ is a subset $f \\subseteq A \\times B$ such that for every $a \\in A$ there is exactly one $b \\in B$ with $(a, b) \\in f$ — existence everywhere, uniqueness everywhere — and that subset is precisely the **graph**. The Vertical Line Test is nothing but the uniqueness clause drawn in the plane. Two consequences deserve attention. First, the **codomain** $B$ is part of the data while the **range** $f(A) = \\{f(a) : a \\in A\\}$ is not: the same squaring rule lands in $\\mathbb{R}$ or in $[0, \\infty)$ depending on the codomain chosen, and only the second choice is surjective — onto-ness is a property of the package, not of the rule alone. Second, “rule” suggests formulas, but most functions have none: the set of finite strings over any alphabet is countable, while $\\left|\\mathbb{R}^{\\mathbb{R}}\\right| = 2^{\\mathfrak{c}}$ with $\\mathfrak{c} = |\\mathbb{R}|$, so the formula-definable functions form a countable dust inside a vast sea.',
          },
          {
            kind: 'theorem',
            heading: 'Strict monotonicity gives injectivity',
            body: 'Let $f$ be defined on a set $D \\subseteq \\mathbb{R}$. If $f$ is strictly increasing on $D$ — meaning $x_1 < x_2$ implies $f(x_1) < f(x_2)$ — or strictly decreasing on $D$, then $f$ is one-to-one. In particular a function that is strictly monotone on its whole domain passes the Horizontal Line Test, and is a candidate for inversion without any further restriction of its domain.',
          },
          {
            kind: 'proof',
            body: 'Suppose $f$ is strictly increasing and let $x_1 \\ne x_2$ be points of $D$. Either $x_1 < x_2$ or $x_2 < x_1$; in the first case $f(x_1) < f(x_2)$, in the second $f(x_2) < f(x_1)$, and in both cases $f(x_1) \\ne f(x_2)$. Distinct inputs always produce distinct outputs, which is injectivity. The converse is false: $f(x) = 1/x$ on $\\mathbb{R} \\setminus \\{0\\}$ is injective — equal values force $\\tfrac{1}{x_1} = \\tfrac{1}{x_2}$, hence $x_1 = x_2$ — yet it is not monotone on its whole domain, since $f(-1) < f(1)$ while $-1 < 1$, but $f(-1) > f\\left(-\\tfrac{1}{2}\\right)$ while $-1 < -\\tfrac{1}{2}$. Monotonicity is a sufficient, not a necessary, passport to one-to-oneness; it is the passport that will let us invert.',
          },
          {
            kind: 'para',
            body: 'Evenness and oddness are the first representation theory most students ever meet, though nobody announces it. Let $\\mathbb{Z}/2 = \\{e, \\sigma\\}$ be the two-element group and let it act on the functions defined on symmetric domains by $(\\sigma \\cdot f)(x) = f(-x)$. An **even** function is a fixed point of this action; an **odd** function is an eigenvector with eigenvalue $-1$. The averaging operators $P_\\pm f = \\tfrac{1}{2}(f \\pm \\sigma \\cdot f)$ are projections, $P_\\pm^2 = P_\\pm$, whose images are exactly the even and the odd subspaces, and every function splits uniquely as $f = f_{\\mathrm{even}} + f_{\\mathrm{odd}}$ with $f_{\\mathrm{even}}(x) = \\tfrac{1}{2}(f(x) + f(-x))$ and $f_{\\mathrm{odd}}(x) = \\tfrac{1}{2}(f(x) - f(-x))$. The characters $+1$ and $-1$ of $\\mathbb{Z}/2$ label the two pieces. Fourier analysis will generalize exactly this pattern: decompose a function into simultaneous eigenvectors of a group action.',
          },
          {
            kind: 'example',
            heading: 'The even–odd split of the exponential',
            body: 'Take $f(x) = e^x$ on the symmetric domain $\\mathbb{R}$ and run the two projections. The even part is $f_{\\mathrm{even}}(x) = \\tfrac{1}{2}(e^x + e^{-x})$, the **hyperbolic cosine** $\\cosh x$, and the odd part is $f_{\\mathrm{odd}}(x) = \\tfrac{1}{2}(e^x - e^{-x})$, the **hyperbolic sine** $\\sinh x$: the decomposition $e^x = \\cosh x + \\sinh x$ is the $\\mathbb{Z}/2$-split of the exponential. The grading rules of the previous paragraph then make predictions, and they come true: even times odd is odd, and indeed $\\cosh x \\sinh x = \\tfrac{1}{2}\\sinh(2x)$; odd times odd is even, and $\\cosh^2 x - \\sinh^2 x$ collapses to the constant $1$. When differential equations arrive, $\\cosh$ and $\\sinh$ will be exactly the even and the odd solutions of $y\'\' = y$, so the symmetry split performed by hand here is the prototype of solving by symmetry.',
          },
          {
            kind: 'remark',
            body: 'The increasing/decreasing definitions of this section hide a classical structure theorem: a monotone function on an interval has at most countably many discontinuities, and every one of them is a jump. At a discontinuity $c$ of an increasing $f$, the one-sided limits $f(c^-) = \\sup_{x < c} f(x)$ and $f(c^+) = \\inf_{x > c} f(x)$ exist by completeness of the reals, and the open interval $\\big(f(c^-), f(c^+)\\big)$ contains no value of $f$; distinct discontinuities own disjoint such intervals, and each interval contains a rational, so the set of jumps injects into $\\mathbb{Q}$. A monotone function can be a staircase with infinitely many steps, but never chaotically discontinuous — its bad behavior is always a tidy, countable set of jumps.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Distributions: functions that are not',
        blocks: [
          {
            kind: 'para',
            body: 'The definition on this page — exactly one output per input — quietly fails to accommodate some of physics’ favorite objects. Dirac’s $\\delta(x)$ is described as zero everywhere except at the origin, where it is infinite, with total integral $1$; no genuine function can behave this way, because a function that is zero except at one point has integral $0$ whatever value it takes there. Oliver Heaviside’s operational calculus of the 1890s manipulated such objects as if they were functions, with spectacular but logically unsecured success. Laurent Schwartz’s 1945 resolution: a **distribution** is not a function at all but a continuous linear functional on the space of test functions $C_c^\\infty(\\mathbb{R})$, the smooth functions of compact support. Every locally integrable $f$ defines the distribution $\\varphi \\mapsto \\int f(x)\\varphi(x)\\,dx$, and the delta is the evaluation functional, $\\langle \\delta, \\varphi \\rangle = \\varphi(0)$ — perfectly rigorous, with no infinities anywhere in sight.',
          },
          {
            kind: 'derivation',
            heading: 'The derivative of a step is a delta',
            body: 'The physicists’ slogan $H\'(x) = \\delta(x)$ becomes a theorem. The distributional derivative is defined by pushing the derivative onto the test function, $\\langle T\', \\varphi \\rangle = -\\langle T, \\varphi\' \\rangle$ — formal integration by parts with no boundary terms, since $\\varphi$ vanishes outside a compact set. For the Heaviside step $H$, the discontinuous cousin of this section’s piecewise functions ($H(x) = 1$ for $x \\ge 0$ and $H(x) = 0$ for $x < 0$), this gives $$\\langle H\', \\varphi \\rangle = -\\int_0^{\\infty} \\varphi\'(x)\\,dx = -\\big(0 - \\varphi(0)\\big) = \\varphi(0) = \\langle \\delta, \\varphi \\rangle.$$ Every property of $\\delta$ that physicists use — the sifting identity, sampling under an integral — is this computation read aloud. The classical derivative fails at jumps; the distributional one never does.',
          },
          {
            kind: 'application',
            heading: 'Green’s functions to quantum fields',
            body: 'Distributions are the load-bearing language of mathematical physics. Electrostatic potential is built from the **Green’s function** of the Laplacian, which in three dimensions is $\\tfrac{1}{4\\pi r}$ and which represents a point source as a multiple of $\\delta$ — the Poisson equation $\\nabla^2 \\phi = -\\rho/\\varepsilon_0$ is solved by convolving the charge density against it. Dirac introduced $\\delta$ in the quantum mechanics that earned him the 1933 Nobel Prize in Physics, where position states appear as generalized eigenvectors; the quantum electrodynamics of Schwinger, Tomonaga and Feynman, recognized with the 1965 Nobel Prize, runs on time-ordered products of operator-valued distributions. Schwartz received the 1950 Fields Medal for the theory that made all of this legal. The moral for this chapter: the function concept of Section 1.1 is the ground floor of a much taller building.',
          },
        ],
      },
    ],
    readingTime: 9,
    intro: 'Calculus is the mathematics of change, and functions are the objects that change — so Stewart opens the book by defining them with total precision. A function is a rule that assigns to each admissible input exactly one output, and the same function can present itself in four interchangeable costumes: a verbal description, a table of values, a graph, and a formula. Fluency in calculus means moving freely among all four representations.',
    objectives: [
      'Define function, domain and range, and identify independent and dependent variables',
      'Read and sketch graphs, and apply the Vertical Line Test to decide whether a curve is a graph of a function',
      'Find the natural domain of a formula by keeping radicands nonnegative and denominators nonzero',
      'Use piecewise definitions, including the absolute value function',
      'Test symmetry (even and odd functions) and determine intervals where a function is increasing or decreasing',
    ],
    concepts: [
      {
        term: 'Function',
        kind: 'definition',
        statement: 'A **function** $f$ is a rule that assigns to each input $x$ exactly one output $y$, written $y = f(x)$. We call $x$ the **independent variable** and $y$ the **dependent variable**. The domain is the set of allowed inputs; the range is the set of outputs actually attained.',
        detail: 'The book’s machine picture is worth internalizing: $x$ goes in, the function machine applies its rule, and a single $y$ must come out. “Exactly one” is the whole contract — a rule that can return two values for one input (like “$y$ such that $y^2 = x$”) is not yet a function without further restriction. The book’s very first example is the area of a circle, $A = \\pi r^2$: each radius $r$ gives one area.',
      },
      {
        term: 'Four ways to represent a function',
        kind: 'insight',
        statement: 'Every function can be represented **verbally** (a description in words), **numerically** (a table of values), **visually** (a graph), or **algebraically** (an explicit formula).',
        detail: 'The book illustrates all four with the same data: verbally, “the area of a circle as a function of its radius”; numerically, a short table of $r$ and $A$ values; visually, a curve; algebraically, $A(r) = \\pi r^2$. Each representation exposes different information — tables make trends visible, graphs make shape visible, formulas make computation and calculus possible.',
      },
      {
        term: 'Domain and range in context',
        kind: 'notation',
        statement: 'If no domain is specified, we use the **natural domain**: the set of all $x$ for which the formula makes sense. In applications, physical context narrows it further.',
        detail: 'The solution manual’s opening examples make the point concretely: a car driven at 60 mi/h for 2 hours has distance $d = 60t$ with domain $\\{t \\mid 0 \\le t \\le 2\\}$ in hours and range $\\{d \\mid 0 \\le d \\le 120\\}$ in miles; an employee paid $8.00 per hour, rounded down to the nearest quarter hour, has domain $[0, 30]$ but a range of discrete quarter-dollar steps $\\{0, 2.00, 4.00, \\ldots, 238.00, 240.00\\}$ — a reminder that a function need not be continuous.',
      },
      {
        term: 'The Vertical Line Test',
        kind: 'method',
        statement: 'A curve in the $xy$-plane is the graph of a function of $x$ **if and only if every vertical line intersects the curve at most once**.',
        detail: 'The test simply restates the definition: a vertical line $x = a$ probes all candidate outputs at input $a$, and more than one intersection would mean two outputs for one input. The solution manual applies it instantly: a circle fails the test, while every properly drawn graph of a parabola passes it.',
      },
      {
        term: 'Piecewise-defined functions',
        kind: 'definition',
        statement: 'A **piecewise-defined function** applies different rules on different parts of its domain, for example the absolute value function $$|x| = \\begin{cases} x & \\text{if } x \\ge 0 \\\\ -x & \\text{if } x < 0.\\end{cases}$$',
        detail: 'Piecewise rules are how real-world pricing, tax brackets and postage tables are written. When evaluating, first locate which piece the input falls into. Note that $|x|$ itself is a function even though it is defined in two pieces — each input still selects exactly one piece, and one output.',
      },
      {
        term: 'Even and odd symmetry',
        kind: 'definition',
        statement: 'A function is **even** if $f(-x) = f(x)$ for all $x$ in its domain — its graph is symmetric about the $y$-axis. It is **odd** if $f(-x) = -f(x)$ — its graph is symmetric about the **origin**.',
        detail: 'For instance, $x^2$ and $x^4$ are even, while $x$, $x^3$ and $1/x$ are odd. The solution manual’s matching exercise adds geometric intuition: among $y = x^2$, $y = x^5$ and $y = x^8$, the odd power $x^5$ is the one symmetric about the origin, and the larger even power $x^8$ is flatter than $x^2$ near the origin and steeper far away. Functions like $x^2 + x$ are neither even nor odd.',
      },
      {
        term: 'Increasing and decreasing functions',
        kind: 'definition',
        statement: 'A function $f$ is **increasing** on an interval $I$ if $f(x_1) < f(x_2)$ whenever $x_1 < x_2$ in $I$; it is **decreasing** on $I$ if $f(x_1) > f(x_2)$ whenever $x_1 < x_2$ in $I$.',
        detail: 'Graphically: increasing means the graph rises as you trace it left to right; decreasing means it falls. Reading monotonicity off a graph is a core skill the solution manual drills — one exercise reads values increasing on $[0, 2]$ and decreasing on $[-4, 0]$ from the same picture. Precise monotonicity tests via derivatives arrive in Section 4.3.',
      },
      {
        term: 'Evaluating and solving from graphs',
        kind: 'method',
        statement: 'To find $f(a)$ from a graph, read the height at $x = a$; to solve $f(x) = c$, find every $x$ whose graph height equals $c$.',
        detail: 'The two operations are duals and both appear in the book’s graph-reading exercises: estimate $g(2) \\approx 1$ and $g(3) \\approx 2.5$ from a curve, then locate the unique $x = -4$ with $g(x) = 3$. The range is exactly the set of heights attained: if the graph never rises above 3, then $g(x) \\le 3$ on the whole domain.',
      },
    ],
    examples: [
      {
        title: 'Reading a graph (Exercise 3 style)',
        problem: 'The graph of a function $g$ has domain $[-4, 4]$ and range $[-2, 3]$, passes through $(-2, 2)$, $(0, -2)$, $(2, 1)$ and $(3, 2.5)$, rises from $(0, -2)$ to $(2, 1)$, and attains its maximum height 3 only at $x = -4$. Estimate $g(0)$, solve $g(x) = 3$, and determine where $g$ is increasing.',
        steps: [
          { label: 'Step 1: Evaluate at inputs', text: 'Read heights: $g(-2) = 2$, $g(0) = -2$, $g(2) = 1$ and $g(3) \\approx 2.5$. Each vertical line $x = a$ meets the graph once, so the graph passes the Vertical Line Test.' },
          { label: 'Step 2: Solve $g(x) = 3$', text: 'Draw the horizontal line $y = 3$. It touches the graph only above $x = -4$, so the unique solution is $x = -4$.' },
          { label: 'Step 3: Bound the outputs', text: 'No point of the graph lies above height 3, so $g(x) \\le 3$ for every $x$ in the domain — equivalently $g(x) \\le 3$ on $[-4, 4]$.' },
          { label: 'Step 4: Read monotonicity', text: 'Tracing left to right, the graph rises from $(0, -2)$ to $(2, 1)$: for any $x_1 < x_2$ in $[0, 2]$ we get $g(x_1) < g(x_2)$, so $g$ is increasing on $[0, 2]$.' },
        ],
        result: 'Graphs encode evaluations (vertical probes), equations (horizontal probes), ranges (heights attained) and monotonicity (rise and fall) — four questions, one picture.',
      },
      {
        title: 'Does the equation define $y$ as a function of $x$?',
        problem: 'Decide whether each equation determines exactly one value of $y$ for each $x$: (a) $3x - 5y = 7$; (b) $x^2 + (y - 3)^2 = 5$.',
        steps: [
          { label: 'Step 1: Solve (a) for $y$', text: 'Rearrange: $3x - 5y = 7 \\iff -5y = -3x + 7 \\iff y = \\tfrac{3}{5}x - \\tfrac{7}{5}$. For each $x$ this gives exactly one $y$, so it defines $y$ as a function of $x$ (a line). Its graph passes the Vertical Line Test.' },
          { label: 'Step 2: Solve (b) for $y$', text: 'Isolate the square: $(y - 3)^2 = 5 - x^2$, so $y = 3 \\pm \\sqrt{5 - x^2}$. The two signs give two outputs whenever $\\sqrt{5 - x^2} > 0$.' },
          { label: 'Step 3: Exhibit a failure', text: 'Take $x = 1$: then $y = 3 + 2 = 5$ and $y = 3 - 2 = 1$ both satisfy the equation — one input, two outputs. The circle fails the Vertical Line Test, so it is not the graph of a function.' },
          { label: 'Step 4: Note the general strategy', text: 'Whenever an equation can be solved uniquely for $y$, it defines a function. Equations that allow $\\pm$ square roots, or are not solvable at all, generally do not — as in the solution manual’s quadratics, cube roots and $2x - |y| = 0$ cases.' },
        ],
        result: '(a) Yes — a linear function. (b) No — a circle, two $y$ values per $x$ inside its shadow.',
      },
      {
        title: 'Natural domain, symmetry and a piecewise evaluation',
        problem: 'For $g(x) = \\sqrt{4 - x^2}$, find the domain and range. Then classify $f(x) = x^5 - x^3 + x$ as even, odd or neither, and evaluate $|{-3}|$ using its piecewise definition.',
        steps: [
          { label: 'Step 1: Domain from the radicand', text: 'The square root demands $4 - x^2 \\ge 0$, that is $x^2 \\le 4$, that is $-2 \\le x \\le 2$. So the domain is $[-2, 2]$. No denominator exists, so no further restriction applies.' },
          { label: 'Step 2: Range from the graph', text: 'As $x$ runs over $[-2, 2]$, the value $\\sqrt{4 - x^2}$ rises from 0 up to 2 and back: the range is $[0, 2]$. The graph is the upper half of a circle of radius 2.' },
          { label: 'Step 3: Test symmetry of $f$', text: 'Compute $f(-x) = (-x)^5 - (-x)^3 + (-x) = -x^5 + x^3 - x = -(x^5 - x^3 + x) = -f(x)$. Since $f(-x) = -f(x)$, the function is **odd** — its graph is symmetric about the origin.' },
          { label: 'Step 4: Evaluate the piecewise $|x|$', text: 'Since $-3 < 0$, the second piece applies: $|{-3}| = -(-3) = 3$. A single input triggers a single piece — the absolute value is a genuine function.' },
        ],
        result: 'Domain $[-2, 2]$, range $[0, 2]$; $f$ is odd; $|{-3}| = 3$. Domain hunting, symmetry checks and piecewise evaluation are the three everyday skills of this section.',
      },
    ],
    keyTakeaways: [
      'A function assigns exactly one output to each input; $y = f(x)$ encodes that contract.',
      'The same function lives in four representations — verbal, numerical, visual, algebraic — and calculus constantly translates between them.',
      'The Vertical Line Test is the definition of “function” drawn as geometry: one input must never see two graph points.',
      'Natural domains are constrained by nonnegative radicands (even roots) and nonzero denominators; applications add physical limits like $0 \\le t \\le 2$.',
      'Even functions satisfy $f(-x) = f(x)$ (mirror in the $y$-axis); odd functions satisfy $f(-x) = -f(x)$ (rotate about the origin).',
      'A function is increasing where its graph rises left to right and decreasing where it falls; derivative-based tests will sharpen this in Section 4.3.',
    ],
    quiz: [
      {
        q: 'A curve in the plane fails the Vertical Line Test. What does that tell you?',
        options: ['The function is not one-to-one', 'The curve is not the graph of any function of $x$', 'The function has no inverse', 'The domain of the function is empty'],
        answer: 1,
        explanation: 'A vertical line $x = a$ probes all outputs at input $a$; two intersections would mean one input maps to two outputs, violating the definition of a function.',
      },
      {
        q: 'What is the natural domain of $g(x) = \\sqrt{4 - x^2}$?',
        options: [`$(0, 2)$`, 'The set of all $x$ with $-2 \\le x \\le 2$', 'The set of all $x$ with $0 \\le x \\le 2$', 'All real numbers except $x = 2$'],
        answer: 1,
        explanation: 'The radicand must be nonnegative: $4 - x^2 \\ge 0 \\iff x^2 \\le 4 \\iff -2 \\le x \\le 2$, the closed interval $[-2, 2]$.',
      },
      {
        q: 'Which of the following functions is odd?',
        options: [`$f(x) = x^2$`, `$f(x) = x^4 + 2$`, `$f(x) = x^3 + x$`, `$f(x) = |x|$`],
        answer: 2,
        explanation: 'Odd means $f(-x) = -f(x)$: here $(-x)^3 + (-x) = -(x^3 + x)$. Powers $x^2$ and $x^4$ are even, and $|{-x}| = |x|$ makes the absolute value even too.',
      },
      {
        q: 'A height-to-shoe-size table assigns height 60 in the two shoe sizes 7 and 8. Why is this not a function?',
        options: ['Because shoe sizes are not numbers', 'Because one input corresponds to more than one output', 'Because the heights are not sorted', 'Because the domain is infinite'],
        answer: 1,
        explanation: 'The definition demands exactly one output per input; the input 60 in produces both 7 and 8, so the table fails to define $y$ as a function of $x$.',
      },
      {
        q: 'If a function’s graph rises as you trace it from $(0, -2)$ to $(2, 1)$, then on $[0, 2]$ the function is:',
        options: ['Decreasing', 'Constant', 'Increasing', 'Symmetric about the $y$-axis'],
        answer: 2,
        explanation: 'Rising graph means $x_1 < x_2$ implies $f(x_1) < f(x_2)$ on that interval — the definition of increasing.',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.2
  {
    sectionId: 'calc-ch1-s2',
    depth: [
      {
        tier: 'masters',
        title: 'The catalog through an analyst’s eyes',
        blocks: [
          {
            kind: 'para',
            body: 'The section’s classification can be sharpened into a definition with real teeth. A function $f$ is **algebraic** if there is a nonzero polynomial $P(x, y)$ in two variables with $P(x, f(x)) = 0$ for all $x$ in the domain; otherwise $f$ is **transcendental**. Polynomials, rational functions and root functions are algebraic — for $f(x) = \\sqrt{x}$ take $P = y^2 - x$ — but the class is far larger than radicals can reach: by the Abel–Ruffini theorem, the algebraic function defined implicitly by $y^5 + y + x = 0$ cannot be written with finitely many arithmetic operations and radicals, yet it is exactly as algebraic as $\\sqrt{x}$. The transcendental families — $e^x$, $\\ln x$, the trigonometric functions — stand outside every such polynomial relation, a function-level echo of Hermite’s 1873 theorem that the number $e$ satisfies no nonzero polynomial with rational coefficients.',
          },
          {
            kind: 'para',
            body: 'The algebraic class is astonishingly stable under the operations of this course. Sums, differences, products and quotients of algebraic functions are algebraic — classically proved by eliminating $y$ between two polynomial relations, the theory of **resultants** — and compositions of algebraic functions are algebraic, as are inverses taken on monotone branches. Even differentiation offers no escape: if $P(x, f(x)) = 0$ identically, then implicit differentiation gives $P_x + P_y f\'(x) = 0$, so $f\' = -P_x / P_y$, again algebraic. The result is a walled garden: start with algebraic functions and apply the entire calculus toolkit — arithmetic, composition, inversion, differentiation — and you never leave. Transcendental functions are precisely the escape routes, and the modeling families of this section live on both sides of the wall, which is why the analyst’s catalog genuinely needs both columns.',
          },
          {
            kind: 'theorem',
            heading: 'Exponential dominance',
            body: 'For every positive integer $n$ and every base $b > 1$ there is a constant $C$ with $x^n \\le C\\,b^x$ for all $x \\ge 0$; equivalently, $\\lim_{x \\to \\infty} \\frac{x^n}{b^x} = 0$. Exponential growth eventually beats polynomial growth of every degree — which is why the swap of base and variable in $x^2$ versus $2^x$ is the most consequential distinction in the entire catalog.',
          },
          {
            kind: 'proof',
            body: 'First handle integers. Write $b = 1 + t$ with $t > 0$; for $k \\ge n + 1$ the binomial theorem gives $$b^k = (1 + t)^k \\ge \\binom{k}{n+1} t^{\\,n+1} = \\frac{k(k-1)\\cdots(k-n)}{(n+1)!}\\,t^{\\,n+1},$$ a polynomial in $k$ of degree $n + 1$ with positive leading coefficient. Hence $\\frac{k^n}{b^k} \\le \\frac{(n+1)!}{t^{\\,n+1}} \\cdot \\frac{1}{k} \\to 0$ as $k \\to \\infty$. Now squeeze the reals: for $x \\ge 1$ put $k = \\lfloor x \\rfloor$, so $k \\le x < k + 1$; then $x^n < (k+1)^n$ while $b^x \\ge b^k$, so $\\frac{x^n}{b^x} \\le b \\cdot \\frac{(k+1)^n}{b^{k+1}}$, which tends to $0$ by the integer case applied at $j = k + 1$. The limit follows.',
          },
          {
            kind: 'application',
            heading: 'Power law or exponential? Plot the logs',
            body: 'The master version of the differences-versus-ratios sniff test is graphical, and it is how real data are actually classified. If $y = Cx^a$ is a power law, then $\\log y = \\log C + a \\log x$, so on a **log-log plot** — $\\log y$ against $\\log x$ — power laws appear as straight lines of slope $a$. If $y = Cb^x$ is an exponential, then $\\log y = \\log C + x \\log b$, so on a **semi-log plot** — $\\log y$ against linear $x$ — exponentials appear as straight lines of slope $\\log b$. Kepler’s third law, allometric biology such as Kleiber’s metabolic scaling near $x^{3/4}$, and Zipf-type rank-frequency laws declare themselves on log-log paper; radioactive decay, compound interest and an epidemic’s early phase declare themselves on semi-log paper. The two plots, used together, are the working scientist’s first diagnostic instrument.',
          },
          {
            kind: 'remark',
            body: 'Every family in this catalog shares a hidden regularity the section never names: nothing here oscillates infinitely often, and every set describable with these functions — zero sets, solution sets, regions between curves — has finitely many connected pieces. Polynomials cross zero finitely many times, rational functions have finitely many poles, and even $\\sqrt{3x - x^2}$ traces a finite arc. Model theorists isolated this property in the 1980s and named it **o-minimality**, and Wilkie’s 1996 theorem proves that the real exponential field enjoys it — arguably the deepest known theorem about the catalog you are reading. The research tier below unpacks what o-minimality means, and its open frontier runs straight into the sine curve sitting in this section’s trigonometric family.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Tame geometry: o-minimal structures',
        blocks: [
          {
            kind: 'para',
            body: 'Model theory studies a structure — a set with distinguished functions and relations — through its **definable sets**, the subsets carved out by first-order formulas. Let $\\mathbb{R}_{\\mathrm{exp}}$ be the real line equipped with the field operations $+$ and $\\times$, the order, and the exponential. A structure on the reals is **o-minimal** — order-minimal — when every one of its definable subsets of $\\mathbb{R}$ is a finite union of points and open intervals: no Cantor dust, no infinite discrete sets, no $\\sin(1/x)$-style pathology, ever. The entire Section 1.2 catalog is definable here — polynomials are atomic, rational functions come from division, $e^x$ is included by fiat, and inverses on monotone branches come along — so o-minimality of $\\mathbb{R}_{\\mathrm{exp}}$ is a theorem about precisely the functions Stewart lists.',
          },
          {
            kind: 'theorem',
            heading: 'Wilkie’s theorem (1996)',
            body: 'The structure $\\mathbb{R}_{\\mathrm{exp}}$ is o-minimal. Consequently, every one-variable function definable from the field operations and $\\exp$ is piecewise strictly monotone with finitely many pieces; every definable subset of $\\mathbb{R}^n$ has finitely many connected components; and definable families cannot oscillate. The proof passes through Khovanskii’s theory of **Pfaffian functions** — chains $f_1, \\ldots, f_k$ in which each $f_i\'$ is a polynomial in $x, f_1, \\ldots, f_i$ — for which Khovanskii proved fewnomial-type finiteness, for instance that a Pfaffian function of one variable has only finitely many zeros.',
          },
          {
            kind: 'application',
            heading: 'Tame topology and number theory',
            body: 'Why should an analyst care? Because o-minimality converts finite descriptions into finite behavior, uniformly, and all geometry built from the catalog inherits it. In an o-minimal structure every definable set admits **cell decomposition** — a finite partition into graphs and open cells, a smooth analogue of triangulation — and the decomposition can be taken uniformly across definable families. van den Dries named the resulting subject **tame topology**. The reach is now extraordinary: Pila’s theorem counting rational points on transcendental surfaces, the o-minimality-powered attacks on the André–Oort conjecture in the theory of Shimura varieties, and uniformity results in real algebraic geometry all run on Wilkie’s machinery. The functions of Section 1.2 are not just a student’s checklist; they are the raw material of currently active theorems.',
          },
          {
            kind: 'open',
            heading: 'Can the exponential and sine coexist?',
            body: 'The frontier of the subject is drawn exactly along the trigonometric part of the catalog. The unrestricted sine is fatal to tameness: the smallest positive zero of $\\sin$ is a definable real (namely $\\pi$), and then the set $\\{x > 3 : \\sin(\\pi x) = 0\\}$ defines the integers, an infinite discrete set — o-minimality dies on the spot. Restricted to a bounded interval, sine is harmless: the restricted analytic functions form the structure $\\mathbb{R}_{\\mathrm{an}}$, proved o-minimal by Denef–van den Dries on Gabrielov’s complement theorem. The open case is the combined structure $\\mathbb{R}_{\\mathrm{an},\\exp}$ with the full exponential: Macintyre and Wilkie proved it o-minimal **assuming Schanuel’s conjecture**, the central open problem of transcendence theory, and no unconditional proof is known. The boundary of tame geometry is, literally, the boundary of what is known about $e$.',
          },
        ],
      },
    ],
    readingTime: 9,
    intro: 'Mathematical modeling is the craft of translating a real-world question into functions, solving, and translating back — the book draws this as a loop connecting the real world to the mathematical world. To model anything you need a catalog of candidate functions ready at hand, and Section 1.2 is exactly that catalog: linear, polynomial, power, rational, algebraic, trigonometric and exponential families, each with its characteristic shape, growth and natural habitat.',
    objectives: [
      'Describe the modeling cycle: formulate, solve, interpret, and test against reality',
      'Recognize linear functions and interpret slope as a rate of change with units',
      'Classify a given formula into its family: polynomial, power, rational, algebraic, trigonometric or exponential',
      'Distinguish power functions from exponential functions, and read the symmetry of $x^n$',
      'Decide from data whether a linear or an exponential model fits, and fit an exponential through two points',
    ],
    concepts: [
      {
        term: 'The modeling cycle',
        kind: 'method',
        statement: 'To model: (1) **formulate** the real problem as relations among variables, choosing convenient notation and reasonable assumptions; (2) **solve** or analyze the mathematics; (3) **interpret** the mathematical conclusions back in real terms; (4) **test** against data and refine.',
        detail: 'The book is candid that a model is an idealization — “the art of lying with mathematics” is not its phrase, but the preface-level warning is: a model that is too simple can still be useful, and one that fits past data may fail for the future. The cycle is honest engineering: predict, compare with measurements, adjust. Every later chapter — population growth, cooling, circuits, optimization — is this loop with different furniture.',
      },
      {
        term: 'Linear functions',
        kind: 'definition',
        statement: 'A **linear function** has the form $f(x) = mx + b$; its graph is a straight line with **slope** $m$ and $y$-intercept $b$. The slope is the rate of change: output changes by $m$ units for each 1-unit change in input.',
        detail: 'Families of lines are parametrized by one feature: the solution manual sketches the family $f(x) = 1 + m(x + 3)$, all lines through the point $(-3, 1)$, and the family $y = mx + b$ with fixed slope 2, all parallel lines. If slope is a known constant the model is linear — cost per item, speed at constant pace, degrees Celsius per meter of altitude.',
      },
      {
        term: 'Polynomial functions',
        kind: 'definition',
        statement: 'A **polynomial** is $P(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$ with whole-number powers; the largest exponent is the **degree**. Degrees 0, 1, 2, 3 give constant, linear, quadratic and cubic functions; the natural domain is all of $\\mathbb{R}$.',
        detail: 'The solution manual classifies $f(x) = x^3 + 3x^2$ as “a polynomial function of degree 3 (also an algebraic function)” — every polynomial is algebraic, but not conversely. Quadratics $ax^2 + bx + c$ are parabolas, the workhorse models of projectile-free ranges and revenue curves; fitting one through three points gives three linear equations in $a$, $b$, $c$, as in the manual’s exercise on a parabola through $(3, 0)$ and $(4, 2)$ with intercept 18.',
      },
      {
        term: 'Power functions',
        kind: 'definition',
        statement: 'A **power function** has the form $f(x) = x^a$ with $a$ a real constant. For $a = n$ a positive integer the graph resembles $x^2$ (even $n$: $y$-axis symmetry, bowl-shaped) or $x^3$ (odd $n$: origin symmetry, steepening).',
        detail: 'The manual’s graph-matching exercise is the canonical picture: among $y = x^2$, $y = x^5$ and $y = x^8$, the odd one $x^5$ is symmetric about the origin, and $x^8$ is flatter than $x^2$ near the origin and rises faster far away. Other exponents: $a = 1/n$ gives root functions like $y = \\sqrt{x}$ (defined for $x \\ge 0$) and $y = \\sqrt[3]{x} = x^{1/3}$ (defined for all real $x$, flatter near 0, steepening through the origin); $a = -1$ gives the reciprocal $y = 1/x$ with its hyperbola asymptotes.',
      },
      {
        term: 'Rational functions',
        kind: 'definition',
        statement: 'A **rational function** is a ratio of polynomials, $f(x) = \\frac{P(x)}{Q(x)}$; its domain excludes the zeros of the denominator, which typically become vertical asymptotes.',
        detail: 'The manual classifies $f(t) = \\frac{3t^2 + 2}{t}$ and $y = \\frac{1}{x^2}$ as rational (and notes $1/x^2 = x^{-2}$ is also a power function — families overlap). Rational functions model rates, concentrations and per-capita quantities; their graphs are dissected with derivatives in Section 4.5.',
      },
      {
        term: 'Algebraic functions',
        kind: 'definition',
        statement: 'An **algebraic function** is anything built from polynomials using finitely many additions, subtractions, multiplications, divisions and root extractions — for instance $y = \\frac{\\sqrt{x}}{x^2 + 1}$ or $s(t) = \\sqrt{t + 4}$.',
        detail: 'The solution manual explicitly labels $y = \\frac{\\sqrt{x}}{x^2 + 1}$ “the quotient of a root of a polynomial and a polynomial,” and $\\sqrt[3]{x}$ as both a root function and a power function $x^{1/3}$. Polynomials, rational functions and root functions are all algebraic; exponentials, logarithms and trigonometric functions are not — they are the **transcendental** functions.',
      },
      {
        term: 'Trigonometric functions',
        kind: 'definition',
        statement: 'The trigonometric functions $\\sin$, $\\cos$, $\\tan$ and their reciprocals are **periodic**: $\\sin$ and $\\cos$ have period $2\\pi$, domain $\\mathbb{R}$, and range $[-1, 1]$; $\\tan x = \\frac{\\sin x}{\\cos x}$ has vertical asymptotes where $\\cos x = 0$.',
        detail: 'They are the natural models of anything that repeats — tides, seasons, AC voltage, sound waves. The manual’s classification exercise puts $g(t) = \\cos^2 t - \\sin t$ squarely in this family. Their derivatives (Section 3.3) and their inverses (Section 1.5) are coming attractions.',
      },
      {
        term: 'Exponential functions',
        kind: 'definition',
        statement: 'An **exponential function** has the variable in the exponent: $f(x) = b^x$ with base $b > 0$, $b \\ne 1$. Populations, bank balances and radioactive samples all follow exponentials because their growth is proportional to their current size.',
        detail: 'The manual classifies $v(t) = 8^t$ and $h(r) = 2.3^r$ as exponential on sight. Do not confuse $b^x$ with the power function $x^b$ — the base and the variable have swapped roles, and the long-run growth rates are utterly different. Section 1.4 develops exponentials in depth.',
      },
      {
        term: 'Linear or exponential? — the discrimination test',
        kind: 'insight',
        statement: 'If data show **approximately equal successive differences**, a linear model fits; if they show **approximately equal successive ratios**, an exponential model fits. Geometric growth multiplies; linear growth adds.',
        detail: 'This is the practical fitting criterion behind the book’s modeling discussion: a walk at constant speed adds the same meters each minute (differences 20, 20, 20 — linear $d = 20t$), while a doubling culture multiplies (ratios 2, 2, 2 — exponential $n = 100 \\cdot 2^t$). For an exponential fit through two data points, substitute both into $y = C b^x$ and solve the resulting two equations for the base $b$ and the coefficient $C$.',
      },
    ],
    examples: [
      {
        title: 'Classifying functions into families (Exercise 1 style)',
        problem: 'Classify each function: (a) $f(x) = x^3 + 3x^2$; (b) $g(t) = \\cos^2 t - \\sin t$; (c) $v(t) = 8^t$; (d) $y = \\frac{\\sqrt{x}}{x^2 + 1}$; (e) $w(u) = \\log_{10} u$.',
        steps: [
          { label: 'Step 1: Count the powers in (a)', text: 'Whole-number powers only, highest power 3: $f$ is a **polynomial of degree 3** — and, being built by sums and products of powers, it is also an algebraic function.' },
          { label: 'Step 2: Identify the transcendental core in (b)', text: 'Combinations of sine and cosine make $g$ a **trigonometric function**, the natural family for periodic behavior.' },
          { label: 'Step 3: Locate the variable in (c)', text: 'The variable $t$ sits in the exponent with constant base 8, so $v$ is an **exponential function** — not a power function.' },
          { label: 'Step 4: Read the construction in (d)', text: 'A root of a polynomial divided by a polynomial: $y$ is **algebraic** (and rational-plus-root, but not itself rational because of the radical). Its natural domain requires $x \\ge 0$ from $\\sqrt{x}$ and all $x$ from the denominator, so $x \\ge 0$.' },
          { label: 'Step 5: Spot the inverse family in (e)', text: 'The base-10 logarithm makes $w$ a **logarithmic function** with domain $(0, \\infty)$ — the inverse of an exponential, developed fully in Section 1.5.' },
        ],
        result: 'Polynomial (also algebraic); trigonometric; exponential; algebraic; logarithmic. Classification is by construction, and the families nest: polynomials inside rationals inside algebraics, with transcendental functions outside the whole tower.',
      },
      {
        title: 'Linear or exponential? Choosing and fitting a model',
        problem: 'Dataset A (meters walked): 0, 20, 40, 60, 80 at times 0, 1, 2, 3, 4 minutes. Dataset B (bacteria count): 100, 200, 400, 800 at times 0, 1, 2, 3 hours. Choose the model type for each and write the formula.',
        steps: [
          { label: 'Step 1: Test differences on A', text: 'Successive differences are $20 - 0 = 20$, $40 - 20 = 20$, $60 - 40 = 20$, $80 - 60 = 20$ — constant. A **linear model** fits: $d(t) = 20t$, slope 20 meters per minute.' },
          { label: 'Step 2: Test ratios on B', text: 'Successive ratios are $\\frac{200}{100} = 2$, $\\frac{400}{200} = 2$, $\\frac{800}{400} = 2$ — constant. An **exponential model** fits: the count doubles every hour.' },
          { label: 'Step 3: Fit the exponential', text: 'Write $n(t) = C b^t$. The first data point gives $C = 100$ (the value at $t = 0$); the ratio gives $b = 2$. So $n(t) = 100 \\cdot 2^t$.' },
          { label: 'Step 4: Extrapolate with care', text: 'At $t = 6$ hours the model predicts $n(6) = 100 \\cdot 64 = 6400$ bacteria. The prediction inherits the model’s assumptions — constant doubling — and real cultures eventually slow down, a refinement handled by the logistic model of Section 9.4.' },
        ],
        result: 'Equal differences signal linear ($d = 20t$); equal ratios signal exponential ($n = 100 \\cdot 2^t$). The difference-versus-ratio sniff test is the modeler’s first diagnostic.',
      },
      {
        title: 'Fitting $y = C b^x$ through two points (Exercise 19 style)',
        problem: 'An exponential function $y = C b^x$ passes through $(1, 6)$ and $(3, 24)$. Find $C$ and $b$.',
        steps: [
          { label: 'Step 1: Translate the points into equations', text: 'Point $(1, 6)$ gives $6 = C b^1 = Cb$. Point $(3, 24)$ gives $24 = C b^3$.' },
          { label: 'Step 2: Eliminate $C$ by dividing', text: 'Divide the second equation by the first: $\\frac{Cb^3}{Cb} = \\frac{24}{6}$, so $b^2 = 4$.' },
          { label: 'Step 3: Solve for the base', text: 'Since the base must be positive, $b = 2$ (rejecting $b = -2$, which would make $2^x$-style powers undefined for irrational $x$).' },
          { label: 'Step 4: Back-substitute for the coefficient', text: 'From $6 = Cb = 2C$ we get $C = 3$. The model is $y = 3 \\cdot 2^x$. Check: $3 \\cdot 2^3 = 24$. ✓', },
        ],
        result: '$C = 3$, $b = 2$: the curve $y = 3 \\cdot 2^x$ threads both points, doubling every unit step in $x$ starting from the value 3.',
      },
    ],
    keyTakeaways: [
      'Modeling is a loop: formulate, solve, interpret, test — and expect to go around more than once.',
      'The essential families: linear $mx + b$, polynomials, powers $x^a$, rationals, algebraic combinations with roots, trigonometric, exponential and logarithmic.',
      'Slope of a linear model is a rate of change with units — the conceptual ancestor of the derivative.',
      'Power function versus exponential function is a matter of where the variable sits: $x^2$ has a constant exponent, $2^x$ has a constant base.',
      'Polynomials and rationals are algebraic; exponentials, logarithms and trigonometric functions are transcendental.',
      'Data with equal successive differences fit a linear model; data with equal successive ratios fit an exponential $y = C b^x$, fit through two points by dividing the equations.',
    ],
    quiz: [
      {
        q: 'Which statement correctly distinguishes $f(x) = x^3$ from $g(x) = 3^x$?',
        options: ['Both are power functions', 'Both are exponential functions', '$f$ is a power function and $g$ is an exponential function', '$f$ is exponential and $g$ is a power function'],
        answer: 2,
        explanation: 'In a power function the base is the variable and the exponent is constant ($x^3$); in an exponential function the base is constant and the exponent is the variable ($3^x$).',
      },
      {
        q: 'The function $f(x) = \\frac{3t^2 + 2}{t}$ (in variable $t$) is best classified as:',
        options: ['A polynomial of degree 2', 'A rational function', 'An algebraic root function', 'An exponential function'],
        answer: 1,
        explanation: 'It is a ratio of polynomials — a rational function. It is also algebraic (all rationals are), but “rational” is the sharpest classification; it is not a polynomial because of the denominator.',
      },
      {
        q: 'Data show successive values 5, 15, 45, 135. Which model family fits, and what is the common feature?',
        options: ['Linear — constant differences of 10', 'Exponential — constant ratio of 3', 'Quadratic — constant second differences', 'Trigonometric — period 4'],
        answer: 1,
        explanation: 'Each value is 3 times the previous one: $15/5 = 45/15 = 135/45 = 3$. Equal ratios are the signature of exponential growth, $y = 5 \\cdot 3^x$.',
      },
      {
        q: 'Why is $y = \\frac{\\sqrt{x}}{x^2 + 1}$ classified as algebraic but not rational?',
        options: ['Because it has a denominator', 'Because of the square root of a polynomial in the numerator', 'Because $x^2 + 1$ can be zero', 'Because its domain is all real numbers'],
        answer: 1,
        explanation: 'Rational functions are ratios of polynomials only; the radical $\\sqrt{x}$ lifts this one into the wider algebraic family, as the solution manual spells out — “quotient of a root of a polynomial and a polynomial.”',
      },
      {
        q: 'Every member of the family of functions $f(x) = 1 + m(x + 3)$ shares which property?',
        options: ['They all pass through the point $(-3, 1)$', 'They all have slope 1', 'They all have $y$-intercept 3', 'They are all exponential'],
        answer: 0,
        explanation: 'At $x = -3$ every member gives $f(-3) = 1 + m \\cdot 0 = 1$ regardless of $m$ — a pencil of lines through $(-3, 1)$, one line per slope.',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.3
  {
    sectionId: 'calc-ch1-s3',
    depth: [
      {
        tier: 'masters',
        title: 'Transformations as group actions',
        blocks: [
          {
            kind: 'para',
            body: 'The shift–stretch–reflect menagerie of this section is secretly a single algebraic object: the **affine group** $\\mathrm{Aff}(\\mathbb{R})$ of maps $x \\mapsto ax + b$ with $a \\ne 0$, composition as the group law, and inverse $x \\mapsto (x - b)/a$. Precomposing $f$ with an affine map moves the graph horizontally; postcomposing — scaling and shifting outputs — moves it vertically; and the full family of relatives $c\\,f(ax + b) + d$ is the **orbit** of $f$ under the two-copy action of $\\mathrm{Aff}(\\mathbb{R}) \\times \\mathrm{Aff}(\\mathbb{R})$. What the section calls “the same shape” is exactly “same orbit”: the group moves graphs around, and shape is the invariant it cannot change. Even and odd functions reappear as fixed points of the order-two element $x \\mapsto -x$ on the input side, and a periodic function is one whose graph is stabilized by an entire translation subgroup $x \\mapsto x + kT$.',
          },
          {
            kind: 'derivation',
            heading: 'Why inside changes act backwards',
            body: 'The counterintuitive rule — $f(x + 3)$ moves the graph **left** — is an inverse-function phenomenon, best seen by tracking one point. Let $(x_0, y_0)$ lie on the graph of $f$, so $y_0 = f(x_0)$, and ask which input $x$ re-creates that old story inside $g(x) = f(ax + b)$: solve $$ax + b = x_0, \\qquad \\text{so} \\qquad x = \\frac{x_0 - b}{a}.$$ The point therefore travels from $(x_0, y_0)$ to $\\big(\\tfrac{x_0 - b}{a},\\, y_0\\big)$: the input coordinate is acted on by the **inverse** of the affine map written inside the formula. For $f(x + 3)$, take $a = 1$ and $b = 3$: the inverse of “add 3” is “subtract 3”, so the point slides toward $x_0 - 3$ — left. Precomposition relabels the input axis by the inverse map, and no amount of staring at $f(x + c)$ directly can change that.',
          },
          {
            kind: 'theorem',
            heading: 'Dilations conjugate translations',
            body: 'As operators on functions write $(T_a f)(x) = f(x + a)$ and $(D_b f)(x) = f(bx)$ for $b > 0$. Then for all $a \\in \\mathbb{R}$ and $b > 0$, $$D_b \\circ T_a = T_{a/b} \\circ D_b, \\qquad \\text{equivalently} \\qquad D_b\\,T_a\\,D_b^{-1} = T_{a/b}.$$ Conjugating a translation by a dilation divides the translation by the dilation factor: a graph $f(bx + a)$ is the parent $f$ shifted by only $a/b$ and then compressed by $b$.',
          },
          {
            kind: 'proof',
            body: 'Evaluate both sides on an arbitrary function at an arbitrary point. The left side gives $(D_b \\circ T_a)f(x) = (T_a f)(bx) = f(bx + a)$. The right side gives $(T_{a/b} \\circ D_b)f(x) = (D_b f)(x + a/b) = f\\big(b(x + a/b)\\big) = f(bx + a)$. The two operators agree on every function at every point, so they are the same operator; composing on the right with $D_b^{-1} = D_{1/b}$ turns the operator equality into the conjugation form. This computation is the entire content of the trigonograph’s rule that $y = A\\sin\\big(B(x - C)\\big)$ has phase shift $C = -a/b$: the constant $a$ living inside $Bx + a$ shrinks by the factor $B$ when read as a visible shift of the graph.',
          },
          {
            kind: 'example',
            heading: 'A sine wave through the conjugation lens',
            body: 'Reduce $y = 2\\sin(3x - \\pi) - 1$ to shift–compress–scale form. Factor the inside: $3x - \\pi = 3\\big(x - \\tfrac{\\pi}{3}\\big)$, so the recipe is: start with $y = \\sin x$; shift **right** by $\\tfrac{\\pi}{3}$ — the theorem’s $a/b$, with $a = -\\pi$ and $b = 3$; compress horizontally by the factor $3$; stretch vertically by $2$; shift down by $1$. The classic student error — shifting right by $\\pi$ because “$-\\pi$ is inside” — is exactly the failure to conjugate: the dilation $D_3$ must divide the translation before the translation becomes a shift you can see. The same bookkeeping governs every $A\\,f\\big(B(x - C)\\big) + D$ of this section, and the order “shift inside, then compress” is forced by the operator identity, not by taste.',
          },
          {
            kind: 'para',
            body: 'A graph’s **symmetry group** is the set of input-side affine moves that leave it exactly invariant, and the classifications of this section become a group-theoretic census. An even function is stabilized by $x \\mapsto -x$. A function symmetric about the vertical line $x = c$ is stabilized by $x \\mapsto 2c - x$ — the quantity $x - c$ is sent to its own negative, which is why the condition $f(2c - x) = f(x)$ generalizes $f(-x) = f(x)$ from center $0$ to center $c$. A function odd about the point $(c, 0)$ pairs the same input reflection with a sign flip on outputs, $f(2c - x) = -f(x)$. And a periodic function of period $T$ is stabilized by the whole subgroup of translations $x \\mapsto x + kT$ for integers $k$ — one symmetry generating infinitely many, the seed of Fourier’s insight that periodic functions should be built from the characters of exactly that subgroup.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Computable analysis: functions as programs',
        blocks: [
          {
            kind: 'para',
            body: 'Stewart defines a function as a “rule.” In 1936, Turing made the word **rule** precise: a rule is a finite program, and a real number is computable when a machine can print its binary expansion digit after digit, never revising what it has already written. **Computable analysis** runs the calculus program on this foundation: a machine computing $f : \\mathbb{R} \\to \\mathbb{R}$ reads ever more digits of the input and, asked for $n$ digits of output, eventually writes them. The catalog functions are all computable — polynomials, exponentials, sines, and everything assembled from them by arithmetic and composition, because programs pipe into programs exactly as Section 1.3’s functions compose. The masters tier of this very section — orbits, conjugations, decompositions — is entirely effective. But the moment a function is allowed to be discontinuous, the theory bifurcates, and the first theorem is a shock.',
          },
          {
            kind: 'theorem',
            heading: 'Computable implies continuous',
            body: 'Every total computable function $f : \\mathbb{R} \\to \\mathbb{R}$ is continuous. More: at each point $x$, the finite portion of the input that the machine consulted while producing the first $n$ digits of $f(x)$ also fixes those digits on a whole neighborhood of $x$, so every approximation is locally stable. Consequently, discontinuous objects — the sign function, the truncated-decimal maps, the branch-heavy piecewise rules of Section 1.1 — are computable only on the regions where they are continuous, never on their whole domain.',
          },
          {
            kind: 'proof',
            body: 'Fix $x$ and $n$, and run the machine on a redundancy-free name of $x$ with target precision $n$; it halts after finitely many steps having consulted only the first $k$ bits of the input, for some finite $k$. Now run the very same machine on any $y$ agreeing with $x$ through those $k$ bits: the machine receives exactly the same answers to every query it asks, performs the identical finite computation, and prints the same first $n$ digits. Hence $|f(y) - f(x)| \\le 2^{-n}$ for every $y$ in an open neighborhood of $x$, and since $n$ was arbitrary, $f$ is continuous at $x$; since $x$ was arbitrary, $f$ is continuous. (The redundancy-free naming convention dodges the $0.0111\\ldots = 0.1$ ambiguity of binary expansions — bookkeeping, not an obstacle.) This is the machine-level reason branch-heavy numerical code is fragile near its branch cuts.',
          },
          {
            kind: 'remark',
            body: 'The converse fails in the most instructive way. Specker (1949) constructed a **computable strictly increasing bounded sequence of rationals** $q_1 < q_2 < q_3 < \\cdots < 1$ whose limit is not a computable real: a program generates the sequence, monotone convergence guarantees the limit exists, and yet no program can name it. The monotone convergence theorem — the engine behind the supremum arguments that power every existence proof in this chapter — is irreducibly non-constructive: an effective monotone sequence can converge to an effectively unreachable point. The same phenomenon shadows the inversion theory of Section 1.5: a computable strictly increasing function can have a non-computable inverse, so even the act of reversing a rule escapes the theory of rules.',
          },
        ],
      },
    ],
    readingTime: 8,
    intro: 'From a few parent functions — the square root, the parabola, the sine curve — an infinite wardrobe of new functions can be cut by shifting, stretching and reflecting their graphs, and by combining and composing the functions themselves. Section 1.3 is the grammar of that construction: first the four geometric moves on graphs, then the two algebraic operations (arithmetic combinations and composition) that build genuinely new formulas rather than just new pictures.',
    objectives: [
      'Apply vertical and horizontal shifts, stretches and shrinks, and reflections to graphs of known functions',
      'Combine functions arithmetically and track the resulting domains',
      'Form compositions $(f \\circ g)(x) = f(g(x))$ and compute their domains correctly',
      'Appreciate that composition is not commutative',
      'Decompose a complicated function into a composition of simpler ones',
    ],
    concepts: [
      {
        term: 'Vertical and horizontal shifts',
        kind: 'method',
        statement: 'Given $y = f(x)$: $y = f(x) + c$ shifts the graph **up** $c$ units, $y = f(x) - c$ shifts it **down**; $y = f(x - c)$ shifts it **right** $c$ units and $y = f(x + c)$ shifts it **left**.',
        detail: 'Inside changes ($x \\to x + c$) move the graph horizontally, and in the direction **opposite** to the sign — to see the old output at the new input you must compensate. The solution manual’s first exercise runs all eight cases on one $f$: shift 3 up, 3 down, 3 right, 3 left, and in the next breath the reflections and scalings.',
      },
      {
        term: 'Vertical and horizontal stretching, shrinking and reflection',
        kind: 'method',
        statement: 'For $c > 1$: $y = c f(x)$ stretches the graph **vertically** by factor $c$, while $y = \\frac{1}{c} f(x)$ shrinks it vertically. $y = f(cx)$ shrinks the graph **horizontally** by factor $c$, while $y = f(x/c)$ stretches it horizontally. $y = -f(x)$ reflects about the $x$-axis; $y = f(-x)$ reflects about the $y$-axis.',
        detail: 'Multiplication outside the function rescales outputs (vertical, intuitive sign); multiplication inside rescales inputs (horizontal, opposite sign). The manual tracks a concrete point: the point $(4, -1)$ on $y = f(x)$ moves to $(2, -1)$ under $y = f(2x)$, to $(-4, -1)$ under $y = f(-x)$, and to $(-4, 1)$ under the double reflection $y = -f(-x)$.',
      },
      {
        term: 'Reading a combined transformation',
        kind: 'insight',
        statement: 'To build $y = -f(x + 4) - 1$ from $y = f(x)$: shift 4 units **left**, reflect about the $x$-axis, then shift 1 unit **down**. The order matters when shifts and reflections interact.',
        detail: 'The solution manual labels exactly this three-move choreography with underbraces — reflect about $x$-axis, shift 4 left, shift down 1 — and simplifies the result: starting from $f(x) = \\sqrt{3x - x^2}$ the transformed function is $-\\sqrt{-x^2 - 5x - 4} - 1$. Work from the inside out: the $+ 4$ acts on inputs before the outer sign and offset act on outputs.',
      },
      {
        term: 'Arithmetic combinations of functions',
        kind: 'definition',
        statement: 'Given $f$ and $g$: $(f + g)(x) = f(x) + g(x)$, $(f - g)(x) = f(x) - g(x)$, $(fg)(x) = f(x)\\, g(x)$ and $\\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}$. The domain of each is the intersection of the domains, **excluding** points where $g(x) = 0$ for the quotient.',
        detail: 'Example: with $f(x) = x^2$ and $g(x) = \\sqrt{x}$, the domain of $f + g$ and $fg$ is $[0, \\infty)$ (the smaller of the two domains), while $f/g = \\frac{x^2}{\\sqrt{x}}$ additionally requires $x > 0$. Combinations rarely stay inside the parent family — sums of exponentials are not exponential — so classify the result on its own merits.',
      },
      {
        term: 'Composition of functions',
        kind: 'definition',
        statement: 'The **composition** of $f$ with $g$ is $$(f \\circ g)(x) = f(g(x)),$$ the function whose input first passes through $g$ and whose output then passes through $f$. Its domain is the set of $x$ in the domain of $g$ such that $g(x)$ lies in the domain of $f$.',
        detail: 'Composition is chaining machines: $x \\to g \\to g(x) \\to f \\to f(g(x))$. The domain clause has teeth: if $f(u) = \\frac{1}{u}$ and $g(x) = \\frac{1}{x^2}$, then $(f \\circ g)(x) = f\\!\\left(\\frac{1}{x^2}\\right) = x^2$, which simplifies to a formula defined everywhere — but the domain is still only $x \\ne 0$, because $x = 0$ never survives the inner machine.',
      },
      {
        term: 'Composition is not commutative',
        kind: 'insight',
        statement: 'In general $(f \\circ g)(x) \\ne (g \\circ f)(x)$: the order of the machines changes the result.',
        detail: 'Take $f(x) = x^2$ and $g(x) = \\sqrt{x}$: then $(f \\circ g)(x) = (\\sqrt{x})^2 = x$ on $[0, \\infty)$, while $(g \\circ f)(x) = \\sqrt{x^2} = |x|$ on all of $\\mathbb{R}$ — different formulas and different domains from the same pair. Even when both orders are defined everywhere, the values differ: squaring “add 1” versus adding 1 to a square.',
      },
      {
        term: 'Decomposing a function',
        kind: 'method',
        statement: 'To decompose $h = f \\circ g$, recognize the **last operation performed**: it names the outer function $f$; what it operates on names the inner function $g$.',
        detail: 'For instance $F(x) = \\sqrt{3x + 2}$ says “take $3x + 2$, then take a square root,” so $g(x) = 3x + 2$ and $f(u) = \\sqrt{u}$. The book’s canonical example is $h(x) = \\sqrt{1 + x^2}$? No — its favorite is $y = (3x + 2)^5$: outer $u^5$, inner $3x + 2$. Decomposition is read off from the outside in and is the mental model the Chain Rule of Section 3.4 will formalize: the derivative will also compose, with $f’$ evaluated at $g(x)$.',
      },
    ],
    examples: [
      {
        title: 'Transforming a graph: shift and stretch (Exercise 6 style)',
        problem: 'The graph of $y = f(x) = \\sqrt{3x - x^2}$ is shifted 2 units to the right and stretched vertically by a factor of 2. Find the function describing the new graph.',
        steps: [
          { label: 'Step 1: Encode the right shift', text: 'A shift of 2 units right replaces every $x$ by $x - 2$: the intermediate curve is $y = f(x - 2) = \\sqrt{3(x - 2) - (x - 2)^2}$.' },
          { label: 'Step 2: Encode the vertical stretch', text: 'A vertical stretch by 2 multiplies the whole output: $y = 2 f(x - 2) = 2\\sqrt{3(x - 2) - (x - 2)^2}$.' },
          { label: 'Step 3: Expand the radicand', text: 'Compute the inside: $3(x - 2) - (x - 2)^2 = 3x - 6 - (x^2 - 4x + 4) = -x^2 + 7x - 10$.' },
          { label: 'Step 4: State the transformed function', text: 'The new graph is $y = 2\\sqrt{-x^2 + 7x - 10}$. Every feature of the original — endpoints, maximum — has moved right 2 and doubled in height, exactly as the geometry predicts.' },
        ],
        result: 'Transformations translate directly into formulas: $y = 2f(x - 2) = 2\\sqrt{-x^2 + 7x - 10}$. Reading transformations backward from a formula is the same skill in reverse.',
      },
      {
        title: 'Arithmetic combinations and their domains',
        problem: 'Let $f(x) = x^2$ and $g(x) = \\sqrt{x}$. Find formulas and domains for $f + g$, $fg$ and $f/g$, and evaluate $(f + g)(4)$.',
        steps: [
          { label: 'Step 1: Intersect the natural domains', text: 'Domain of $f$ is $\\mathbb{R}$; domain of $g$ is $[0, \\infty)$ because of the square root. Sums, products and quotients all begin from the intersection $[0, \\infty)$.' },
          { label: 'Step 2: Write the sum and product', text: '$(f + g)(x) = x^2 + \\sqrt{x}$ on $[0, \\infty)$; $(fg)(x) = x^2 \\sqrt{x}$, which simplifies to $x^{5/2}$ but keeps domain $[0, \\infty)$.' },
          { label: 'Step 3: Guard the quotient', text: '$\\left(\\frac{f}{g}\\right)(x) = \\frac{x^2}{\\sqrt{x}}$, which simplifies to $x^{3/2}$; the domain needs $g(x) \\ne 0$, so it is $(0, \\infty)$ — the endpoint $x = 0$ is excluded even though the simplified formula is tame there.' },
          { label: 'Step 4: Evaluate', text: '$(f + g)(4) = 4^2 + \\sqrt{4} = 16 + 2 = 18$, and $(fg)(4) = 16 \\cdot 2 = 32$.' },
        ],
        result: 'Formulas: $x^2 + \\sqrt{x}$, $x^{5/2}$, $x^{3/2}$ — but their domains are $[0, \\infty)$, $[0, \\infty)$ and $(0, \\infty)$ respectively. Simplifying a formula never widens its domain.',
      },
      {
        title: 'Composing both ways, then decomposing',
        problem: 'Let $f(x) = x^2$ and $g(x) = x - 3$. Compute $(f \\circ g)(x)$ and $(g \\circ f)(x)$ and note they differ. Then decompose $h(x) = (2x + 3)^5$ and $k(x) = \\sqrt{3x + 2}$ as compositions.',
        steps: [
          { label: 'Step 1: Compose $f$ after $g$', text: '$(f \\circ g)(x) = f(x - 3) = (x - 3)^2$: subtract 3 first, square second. The inside machine is $g$.' },
          { label: 'Step 2: Compose $g$ after $f$', text: '$(g \\circ f)(x) = g(x^2) = x^2 - 3$: square first, subtract 3 second. The results differ (at $x = 1$: $(-2)^2 = 4$ versus $1 - 3 = -2$), confirming $f \\circ g \\ne g \\circ f$.' },
          { label: 'Step 3: Decompose $h$', text: 'In $(2x + 3)^5$ the last operation is “raise to the 5th power,” so the outer function is $u^5$ and the inner is $2x + 3$: $h(x) = f(g(x))$ with $f(u) = u^5$, $g(x) = 2x + 3$.' },
          { label: 'Step 4: Decompose $k$', text: 'In $\\sqrt{3x + 2}$ the last operation is the square root, so $k(x) = f(g(x))$ with $f(u) = \\sqrt{u}$ and $g(x) = 3x + 2$.' },
          { label: 'Step 5: Preview the payoff', text: 'Decomposition is exactly the pattern the Chain Rule will exploit in Section 3.4: to differentiate a composition you differentiate the outer function at the inner value and multiply by the derivative of the inner.' },
        ],
        result: 'Compositions: $(x - 3)^2$ versus $x^2 - 3$ — order matters. Decompositions: $(2x + 3)^5$ is “$u^5$ after $2x + 3$”; $\\sqrt{3x + 2}$ is “$\\sqrt{u}$ after $3x + 2$.”',
      },
    ],
    keyTakeaways: [
      'Inside changes to $x$ move or scale the graph horizontally (opposite the sign); outside changes move or scale it vertically.',
      '$y = c f(x)$ scales outputs vertically; $y = f(cx)$ scales inputs horizontally; $y = -f(x)$ and $y = f(-x)$ reflect about the $x$- and $y$-axes.',
      'Multiple transformations compose: work from the inside out, applying input-side changes before output-side changes.',
      'The domain of $f + g$, $f - g$, $fg$ is the intersection of the domains; $f/g$ further excludes zeros of $g$.',
      '$(f \\circ g)(x) = f(g(x))$ with domain $\\{x \\in D_g : g(x) \\in D_f\\}$ — simplify a composition carefully, but never enlarge its domain.',
      'Composition is generally not commutative: $(f \\circ g)(x) \\ne (g \\circ f)(x)$ in all but special cases.',
      'Decompose by naming the last operation performed — the habit that makes the Chain Rule of Section 3.4 feel inevitable.',
    ],
    quiz: [
      {
        q: 'To obtain the graph of $y = f(x + 3)$ from the graph of $y = f(x)$, you should:',
        options: ['Shift the graph 3 units to the right', 'Shift the graph 3 units to the left', 'Shift the graph 3 units up', 'Stretch the graph horizontally by 3'],
        answer: 1,
        explanation: 'Inside changes move the graph horizontally in the direction opposite the sign: $x + 3$ waits until the input is 3 smaller, so the graph shifts left 3 units.',
      },
      {
        q: 'The point $(4, -1)$ lies on the graph of $f$. Which point must lie on the graph of $y = f(-x)$?',
        options: [`$(-4, -1)$`, `$(4, 1)$`, `$(-4, 1)$`, `$(-1, 4)$`],
        answer: 0,
        explanation: 'Reflecting about the $y$-axis negates inputs and keeps outputs: the point $(4, -1)$ moves to $(-4, -1)$, exactly as the solution manual tracks.',
      },
      {
        q: 'If $f(x) = x^2 + 1$ and $g(x) = 2x$, what is $(f \\circ g)(3)$?',
        options: [`$37$`, `$36$`, `$12$`, `$7$`],
        answer: 0,
        explanation: 'Inner first: $g(3) = 6$; then outer: $f(6) = 6^2 + 1 = 37$. Composition always runs the inside machine first.',
      },
      {
        q: 'With $f(u) = \\frac{1}{u}$ and $g(x) = \\frac{1}{x^2}$, the composition $(f \\circ g)(x)$ simplifies to $x^2$. Its domain is:',
        options: ['All real numbers, since $x^2$ is defined everywhere', 'All $x \\ne 0$, because $x = 0$ fails the inner function', 'Only $x > 0$', 'Only $x = 1$'],
        answer: 1,
        explanation: 'The domain of a composition is restricted by the inner machine: $g(0)$ is undefined, so $x = 0$ is excluded even though the simplified formula $x^2$ would accept it.',
      },
      {
        q: 'Decomposing $h(x) = (3x + 2)^5$ as $h = f \\circ g$, a natural choice of inner function $g$ is:',
        options: [`$u^5$`, `$3x + 2$`, `$3x$`, `$5x$`],
        answer: 1,
        explanation: 'The outer function performs the last operation, raising to the 5th power; the inner function supplies its input, $g(x) = 3x + 2$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.4
  {
    sectionId: 'calc-ch1-s4',
    depth: [
      {
        tier: 'masters',
        title: 'The exponential, constructed honestly',
        blocks: [
          {
            kind: 'para',
            body: 'The section gestures toward “extend by continuity,” and the masters-level construction deserves to be done once, in full. For $a > 1$, define rational powers first: $a^{m/n} = \\sqrt[n]{a^m}$, well defined because a positive real has a unique positive $n$-th root. One checks $a^{r+s} = a^r a^s$ for rationals and that $r < s$ implies $a^r < a^s$: the power function is strictly increasing on the rationals. Now complete $\\mathbb{Q}$ by cuts: for real $x$, define $$a^x = \\sup\\,\\{a^r : r \\in \\mathbb{Q},\\ r < x\\},$$ and set $a^x = (1/a)^{-x}$ when $0 < a < 1$. Dedekind completeness of the reals guarantees the supremum exists, and every exponent law survives the passage. The law $a^{x+y} = a^x a^y$, for instance, becomes a supremum sandwich: every rational below $x + y$ splits into a rational below $x$ and a rational below $y$, and conversely, so the two suprema multiply out exactly. What emerges is a function that is monotone, continuous, and satisfies the functional equation — nothing else was ever needed.',
          },
          {
            kind: 'theorem',
            heading: 'Cauchy’s exponential equation',
            body: 'Let $f : \\mathbb{R} \\to \\mathbb{R}$ be continuous, not identically zero, and satisfy $f(x + y) = f(x)\\,f(y)$ for all real $x$ and $y$. Then $f(x) = a^x$ for some $a > 0$: the continuous solutions of the equation are exactly the exponential functions. This is the classification theorem behind the section’s modeling claim — any quantity that multiplies when times add is an exponential, by theorem rather than by convention.',
          },
          {
            kind: 'proof',
            body: 'First, $f(0) = f(0)^2$, so $f(0)$ is $0$ or $1$; if it were $0$, then $f(x) = f(x)\\,f(0) = 0$ identically, which is excluded — so $f(0) = 1$. Then $1 = f(0) = f(x)\\,f(-x)$ forces $f(x) \\ne 0$ everywhere, and $f(x) = f(x/2)^2 > 0$: the function is strictly positive. Put $a = f(1) > 0$. Induction gives $f(n) = a^n$ for integers, and since $1 = f(1) = f\\left(\\tfrac{1}{n}\\right)^n$ with positivity, $f\\left(\\tfrac{1}{n}\\right) = a^{1/n}$, the unique positive $n$-th root, so $f\\left(\\tfrac{m}{n}\\right) = a^{m/n}$: the formula holds on all of $\\mathbb{Q}$. Finally, for real $x$ take rationals $r_k \\to x$; continuity gives $f(x) = \\lim_k f(r_k) = \\lim_k a^{r_k} = a^x$, the supremum-extended power of the previous paragraph. Note where continuity entered: only in the final step, to cross from the dense rationals to the reals.',
          },
          {
            kind: 'derivation',
            heading: 'Two faces of e',
            body: 'The binomial theorem shows that the two limit definitions of $e$ are the same number. Expand and rewrite the binomial coefficients: $$\\left(1 + \\tfrac{1}{n}\\right)^n = \\sum_{k=0}^{n} \\binom{n}{k}\\frac{1}{n^k} = \\sum_{k=0}^{n} \\frac{1}{k!} \\prod_{j=0}^{k-1}\\left(1 - \\frac{j}{n}\\right).$$ Each product is at most $1$, so $\\left(1 + \\tfrac{1}{n}\\right)^n \\le \\sum_{k=0}^{n} \\frac{1}{k!}$; each product climbs toward $1$ as $n$ grows, so both sides increase with $n$. Passing to the limit, the products disappear term by term and $$e = \\lim_{n \\to \\infty}\\left(1 + \\tfrac{1}{n}\\right)^n = \\sum_{k=0}^{\\infty} \\frac{1}{k!}.$$ Squeezing the tail of the series against a geometric series of ratio $\\tfrac{1}{2}$ pins $e$ between $2.66$ and $2.75$ — the number $2.71828\\ldots$ was never arbitrary.',
          },
          {
            kind: 'remark',
            body: 'Rewritten in one line, the theorem says the exponential is a group **isomorphism**: $x \\mapsto e^x$ carries the additive group $(\\mathbb{R}, +)$ onto the multiplicative group of positive reals, and it is the only continuous one. This is why $e$ cannot be avoided: the additive structure of the line and the multiplicative structure of the positive half-line are secretly the same object, and $e^x$ is the dictionary between them. Every law of exponents is a homomorphism property in disguise, the logarithm of the next section is the inverse isomorphism, and base conversion is transport of structure: $b^x = e^{x \\ln b}$ factors every exponential through the natural one. The tangent-slope characterization of $e$ in this section is then the search for the self-dual point of this dictionary.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Nonstandard analysis: infinitesimals return',
        blocks: [
          {
            kind: 'para',
            body: 'Newton and Leibniz computed with infinitesimals — quantities smaller than every positive rational — for two centuries before Weierstrass banished them with epsilon and delta. Abraham Robinson brought them back, rigorously, using model theory: there exists a **proper elementary extension** $^{\\ast}\\mathbb{R}$ of $\\mathbb{R}$, the **hyperreals**, containing infinite numbers $N$ (with $N > n$ for every standard natural $n$) and their reciprocals, the positive infinitesimals $\\varepsilon = 1/N$. The cleanest construction takes sequences of reals modulo a nonprincipal ultrafilter on $\\mathbb{N}$ — two sequences are identified when they agree on a large set of indices — and Łoś’s theorem on ultraproducts does the rest. Keisler’s “Elementary Calculus” teaches the whole course this way, limits replaced by **standard parts**: every finite hyperreal sits infinitely close to exactly one real, its standard part $\\operatorname{st}(x)$.',
          },
          {
            kind: 'theorem',
            heading: 'The transfer principle',
            body: 'There is an effective translation taking each first-order statement $\\Phi$ about $\\mathbb{R}$ to a statement $\\Phi^{\\ast}$ about $^{\\ast}\\mathbb{R}$, such that $$\\mathbb{R} \\models \\Phi \\quad \\Longleftrightarrow \\quad {^{\\ast}\\mathbb{R} \\models \\Phi^{\\ast}}.$$ Every first-order fact about the reals — field laws, order, the values and identities of the catalog functions — is true in the extension precisely when it is true at home. What cannot transfer is anything genuinely second-order: Dedekind completeness quantifies over all subsets, and that quantifier has no counterpart, which is exactly the room the infinitesimals occupy.',
          },
          {
            kind: 'derivation',
            heading: 'e from an infinite number',
            body: 'Transfer turns limit definitions into literal computations. Let $N$ be any positive infinite hyperinteger. The first-order statement “for every natural $n$, the number $\\left(1 + \\tfrac{1}{n}\\right)^n$ lies between $2$ and $3$” is true in $\\mathbb{R}$, so its transfer holds in $^{\\ast}\\mathbb{R}$, and $\\left(1 + \\tfrac{1}{N}\\right)^N$ is a finite hyperreal. Its standard part **defines** $e$: $$e = \\operatorname{st}\\left(1 + \\tfrac{1}{N}\\right)^N.$$ Similarly $\\operatorname{st}\\big(\\sum_{k=0}^{N} \\tfrac{1}{k!}\\big) = e$, and the two hyperfinite quantities differ only by an infinitesimal — the master tier’s derivation reappearing as a single sentence. Best of all, the derivative previews itself: for $f(x) = x^2$ and any infinitesimal $\\varepsilon \\ne 0$, $$\\operatorname{st}\\frac{(x + \\varepsilon)^2 - x^2}{\\varepsilon} = \\operatorname{st}(2x + \\varepsilon) = 2x.$$ Leibniz wrote $\\frac{dy}{dx}$; three hundred years later, the notation finally computes.',
          },
          {
            kind: 'remark',
            body: 'Robinson’s infinitesimals are invertible: $1/\\varepsilon$ is an infinite number, so $\\varepsilon \\ne 0$, and classical logic survives untouched. There is a rival, more radical reconstruction. In **synthetic differential geometry** and **smooth infinitesimal analysis**, one postulates nilpotent infinitesimals — quantities $d$ with $d^2 = 0$ yet $d \\ne 0$ — governed by the Kock–Lawvere axiom that every function is locally affine in $d$: $f(x + d) = f(x) + d\\,f\'(x)$. Classically this is instant nonsense, since $d^2 = 0$ forces $d = 0$ in a field. The escape is logical: the theory is developed in intuitionistic logic, where “$d = 0$ or $d \\ne 0$” is simply not an available inference, and the dividend is that every function in the theory is automatically continuous. Two rehabilitations of the infinitesimal, with opposite prices: Robinson keeps classical logic and pays with non-Archimedean numbers; Kock and Lawvere keep the line smooth and pay with the law of excluded middle.',
          },
        ],
      },
    ],
    readingTime: 8,
    intro: 'Exponential functions are the first transcendental family the book studies, and for good reason: whenever a quantity grows or decays at a rate proportional to its current size — populations, bank interest, radioactive nuclei, epidemics — an exponential is the honest model. This section fixes the definition of $b^x$ for irrational $x$, catalogs the laws of exponents that make the family computable, and introduces the natural base $e$, the number that will make every derivative formula in Chapter 3 clean.',
    objectives: [
      'Define exponential functions $f(x) = b^x$ with $b > 0$, $b \\ne 1$, and state their domain and range',
      'Simplify expressions fluently with the laws of exponents',
      'Sketch exponentials from base behavior: growth for $b > 1$, decay for $0 < b < 1$, with reflections relating them',
      'Distinguish exponential from power functions and explain why exponentials eventually dominate',
      'Explain what the natural base $e$ is and why it is singled out',
    ],
    concepts: [
      {
        term: 'Exponential function',
        kind: 'definition',
        statement: 'An **exponential function** is $f(x) = b^x$ where the base $b$ is a positive constant, $b > 0$ and $b \\ne 1$. Its domain is all of $\\mathbb{R}$ and its range is $(0, \\infty)$; every such graph passes through $(0, 1)$ since $b^0 = 1$.',
        detail: 'The restriction $b > 0$ matters: negative bases such as $(-2)^x$ have no real value at irrational $x$ (what would $(-2)^{\\sqrt{2}}$ mean?), and $b = 1$ gives the constant 1. The book defines rational powers first ($b^{m/n} = \\sqrt[n]{b^m}$) and extends to irrational exponents by continuity — the graph fills in with no holes, an idea made precise by limits in Chapter 2.',
      },
      {
        term: 'Laws of exponents',
        kind: 'law',
        statement: 'For all real $x$ and $y$ (with valid bases): $$b^{x + y} = b^x\\, b^y, \\qquad \\frac{b^x}{b^y} = b^{x - y}, \\qquad (b^x)^y = b^{xy}, \\qquad (ab)^x = a^x b^x,$$ together with $b^{-x} = \\dfrac{1}{b^x}$ and $b^0 = 1$.',
        detail: 'These laws are the computational engine for everything from compound interest to the derivative of $e^x$. The solution manual drills them immediately: simplify $27^{2/3}$, $2x^2(3x^5)^2$, $(2x^{-2})^{-3}x^{-3}$ and $\\frac{3a^{3/2} \\cdot a^{1/2}}{a^{-1}}$ — each done by matching the expression to the right law before doing any arithmetic.',
      },
      {
        term: 'Growth and decay by base',
        kind: 'insight',
        statement: 'If $b > 1$ then $b^x$ is **increasing**, with $b^x \\to 0$ as $x \\to -\\infty$ and $b^x \\to \\infty$ as $x \\to \\infty$. If $0 < b < 1$ it is **decreasing**, and in fact $\\left(\\frac{1}{b}\\right)^x = b^{-x}$ — the two cases are reflections of each other about the $y$-axis.',
        detail: 'The manual compares the graphs of $3^x$, $10^x$, $\\left(\\tfrac{1}{3}\\right)^x$ and $\\left(\\tfrac{1}{10}\\right)^x$: all pass through $(0, 1)$; the larger base climbs faster for $x > 0$ and dives faster toward 0 for $x < 0$; the fractional bases are the mirror images of their reciprocals. The line $y = 0$ is a horizontal asymptote in every case.',
      },
      {
        term: 'Exponential versus power functions',
        kind: 'insight',
        statement: 'A power function $x^n$ and an exponential $b^x$ (with $b > 1$) both grow, but **every exponential eventually outgrows every power**: for large $x$, $b^x$ exceeds $x^n$ no matter how large $n$ is.',
        detail: 'Near the origin the comparison can go either way — $2^x$ sits below $x^2$ for some small $x$ — but the crossover happens and is permanent. This is the book’s warning against eyeballing long-term behavior from a small window: exponential growth feels slow, then suddenly is not. The precise comparison $\\lim_{x \\to \\infty} \\frac{x^n}{b^x} = 0$ is proved with L’Hôpital’s Rule in Section 4.4.',
      },
      {
        term: 'The natural base $e$',
        kind: 'definition',
        statement: 'Among all bases $a > 0$ for $y = a^x$, exactly one makes the slope of the tangent line at $(0, 1)$ equal to **exactly 1**. That base is called $e \\approx 2.71828$, and $f(x) = e^x$ is the **natural exponential function**.',
        detail: 'This is the solution manual’s own definition (its Exercise 4): $e$ is the value of $a$ such that the tangent slope at $x = 0$ on $y = a^x$ is exactly 1. Measured slopes reveal the pattern — the tangent slope of $b^x$ at 0 is proportional to the base itself, and $e$ is the fixed point of that proportionality. The payoff is the cleanest possible differentiation formula, $\\frac{d}{dx} e^x = e^x$, proved in Section 3.1.',
      },
      {
        term: 'Transformations of exponentials',
        kind: 'method',
        statement: 'Shifts, stretches and reflections apply to $y = b^x$ exactly as in Section 1.3: $y = b^{x} + c$ moves up; $y = b^{x + c}$ moves left; $y = b^{-x}$ reflects about the $y$-axis; $y = c\\, b^x$ stretches vertically.',
        detail: 'The manual builds $g(x) = 3^x + 1$ by shifting $y = 3^x$ one unit up — the horizontal asymptote moves to $y = 1$ with it — and treats $e^{-x}$ as the $y$-axis reflection of $e^x$. In applications, $A\\,b^{t}$ re-scales the population and $b^{t - t_0}$ re-anchors the clock; growth-decay modeling in Section 3.8 is nothing but these moves with data attached.',
      },
    ],
    examples: [
      {
        title: 'Simplifying with the laws of exponents (Exercise 2 style)',
        problem: 'Simplify: (a) $27^{2/3}$; (b) $2x^2 (3x^5)^2$; (c) $(2x^{-2})^{-3} x^{-3}$; (d) $\\frac{3 a^{3/2} \\cdot a^{1/2}}{a^{-1}}$.',
        steps: [
          { label: 'Step 1: Rational exponents are roots first', text: '(a) $27^{2/3} = (27^{1/3})^2 = 3^2 = 9$ — take the cube root of 27, then square.' },
          { label: 'Step 2: Powers of products', text: '(b) $2x^2 (3x^5)^2 = 2x^2 \\cdot 3^2 (x^5)^2 = 2x^2 \\cdot 9 x^{10} = 18 x^{12}$, using $(ab)^x = a^x b^x$ and $(b^x)^y = b^{xy}$.' },
          { label: 'Step 3: Negative exponents invert', text: '(c) $(2x^{-2})^{-3} x^{-3} = 2^{-3} x^{6} x^{-3} = \\tfrac{1}{8} x^{3}$, since $(x^{-2})^{-3} = x^{6}$ and multiplying adds exponents.' },
          { label: 'Step 4: Combine a quotient', text: '(d) $\\frac{3 a^{3/2} a^{1/2}}{a^{-1}} = 3 a^{3/2 + 1/2 - (-1)} = 3 a^{3}$: sums in exponents multiply bases, subtracting the denominator’s exponent adds it back.' },
        ],
        result: '$9$, $18x^{12}$, $\\frac{x^3}{8}$ and $3a^3$ — each obtained by naming the applicable law before computing. Exponent laws, not arithmetic, do the work.',
      },
      {
        title: 'Sketching exponentials and their reflections',
        problem: 'Use the graph of $y = 3^x$ to describe the graphs of $g(x) = 3^x + 1$ and $h(x) = \\left(\\tfrac{1}{3}\\right)^x$, stating the horizontal asymptote of each.',
        steps: [
          { label: 'Step 1: Anchor the parent graph', text: '$y = 3^x$ passes through $(0, 1)$, increases for all $x$, approaches 0 as $x \\to -\\infty$ and blows up as $x \\to \\infty$; the $x$-axis ($y = 0$) is its horizontal asymptote.' },
          { label: 'Step 2: Shift for $g$', text: 'Adding 1 outside shifts the whole graph up one unit: $g(x) = 3^x + 1$ passes through $(0, 2)$ and has horizontal asymptote $y = 1$. Every output is exactly one unit above the parent’s.' },
          { label: 'Step 3: Recognize $h$ as a reflection', text: 'Since $\\left(\\tfrac{1}{3}\\right)^x = 3^{-x}$, the graph of $h$ is the reflection of $y = 3^x$ about the $y$-axis: decreasing, still through $(0, 1)$, with the same asymptote $y = 0$.' },
          { label: 'Step 4: Compare growth rates', text: 'Reflecting trades the tails: $3^x$ climbs fast as $x$ grows while $\\left(\\tfrac{1}{3}\\right)^x$ decays to 0; the roles reverse as $x \\to -\\infty$. Bases less than 1 are how exponentials model decay.' },
        ],
        result: '$g$ is the parent shifted up (asymptote $y = 1$); $h$ is the parent reflected (pure decay). One parent graph plus Section 1.3 moves generates every exponential picture you will need.',
      },
      {
        title: 'Doubling growth, computed two ways',
        problem: 'A laboratory culture weighs 2 grams at noon and doubles every hour. Write the weight as a function of hours $t$ after noon, find the weight at 3 pm, and find when the culture will weigh 64 grams.',
        steps: [
          { label: 'Step 1: Model the doubling', text: 'Each hour multiplies the weight by 2, so after $t$ hours the weight is $w(t) = 2 \\cdot 2^{t}$ grams — the initial amount times the doubling base raised to the elapsed time.' },
          { label: 'Step 2: Evaluate', text: 'At $t = 3$: $w(3) = 2 \\cdot 2^3 = 2 \\cdot 8 = 16$ grams. Three doublings: 2 → 4 → 8 → 16.' },
          { label: 'Step 3: Solve for the time', text: 'Set $2 \\cdot 2^{t} = 64$, so $2^{t} = 32 = 2^{5}$, and therefore $t = 5$ hours (5 pm). Matching exponents with the same base solves the equation exactly.' },
          { label: 'Step 4: Generalize', text: 'Writing $w(t) = 2\\cdot 2^{t} = 2^{t + 1}$ shows the same growth shifted one hour earlier — the algebra of exponents is the algebra of the model. Solving when the target is not a power of 2 will require logarithms, the inverse family built in the next section.' },
        ],
        result: '$w(t) = 2 \\cdot 2^t$; 16 grams at 3 pm; 64 grams at 5 pm. Geometric growth by a constant factor is an exponential in disguise.',
      },
    ],
    keyTakeaways: [
      'An exponential function has a constant positive base $b \\ne 1$ and the variable in the exponent; domain $\\mathbb{R}$, range $(0, \\infty)$, and the graph always passes through $(0, 1)$.',
      'The exponent laws — $b^{x+y} = b^x b^y$, $(b^x)^y = b^{xy}$, $(ab)^x = a^x b^x$ — are the workhorse algebra of the whole course.',
      'Base greater than 1 gives growth; base between 0 and 1 gives decay; the two are reflections of each other across the $y$-axis.',
      'Exponential eventually beats polynomial: for any $n$, $b^x > x^n$ for all sufficiently large $x$ when $b > 1$.',
      '$e \\approx 2.71828$ is the unique base whose exponential has tangent slope exactly 1 at $(0, 1)$ — chosen so that $\\frac{d}{dx}e^x = e^x$.',
      'Solving $b^t = c$ requires inverting the exponential; that inverse is the logarithm, the subject of Section 1.5.',
    ],
    quiz: [
      {
        q: 'What are the domain and range of $f(x) = 3^x$?',
        options: ['Domain $(0, \\infty)$, range $\\mathbb{R}$', 'Domain $\\mathbb{R}$, range $(0, \\infty)$', 'Domain $\\mathbb{R}$, range $\\mathbb{R}$', 'Domain $[0, \\infty)$, range $[1, \\infty)$'],
        answer: 1,
        explanation: 'A positive base accepts every real exponent, and a positive quantity raised to any power stays strictly positive — so outputs fill $(0, \\infty)$ and never touch 0.',
      },
      {
        q: 'Evaluate $27^{2/3}$.',
        options: [`$6$`, `$9$`, `$18$`, `$81$`],
        answer: 1,
        explanation: '$27^{2/3} = (27^{1/3})^2 = 3^2 = 9$: the denominator of the rational exponent takes the root, the numerator takes the power.',
      },
      {
        q: 'The graph of $y = \\left(\\tfrac{1}{2}\\right)^x$ is best described as:',
        options: ['The reflection of $y = 2^x$ about the $y$-axis, a decreasing function', 'The reflection of $y = 2^x$ about the $x$-axis, a decreasing function', 'A vertical stretch of $y = 2^x$', 'Identical to $y = 2^x$'],
        answer: 0,
        explanation: '$\\left(\\tfrac{1}{2}\\right)^x = 2^{-x}$, so replacing $x$ by $-x$ reflects the increasing function $2^x$ about the $y$-axis, producing exponential decay.',
      },
      {
        q: 'Which function eventually exceeds all the others as $x \\to \\infty$?',
        options: [`$x^{100}$`, `$100x^{99}$`, `$1.01^{x}$`, `$x^{100} + 100x^{99}$`],
        answer: 2,
        explanation: 'Exponential growth with any base greater than 1 — even 1.01 — eventually overtakes every polynomial, no matter its degree or coefficients.',
      },
      {
        q: 'The number $e$ is defined in this section as:',
        options: ['The base for which the tangent slope to $y = a^x$ at $(0, 1)$ equals exactly 1', 'The largest value $b^x$ can attain', 'The base that makes $b^x$ grow slower than $x^2$', 'A rational approximation of $\\pi$'],
        answer: 0,
        explanation: 'Among all bases $a > 0$, exactly one gives tangent slope exactly 1 at the point $(0, 1)$; that base is $e \\approx 2.71828$, the natural base whose derivative will be itself.',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.5
  {
    sectionId: 'calc-ch1-s5',
    depth: [
      {
        tier: 'masters',
        title: 'Inverses, honestly: existence, slopes, mirror symmetry',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Inverses of monotone continuous functions',
            body: 'Let $f$ be continuous and strictly increasing on an interval $I$; the strictly decreasing case is analogous. Then the image $f(I)$ is an interval, the map $f : I \\to f(I)$ is a bijection, and the inverse $f^{-1} : f(I) \\to I$ exists, is strictly increasing, and is continuous. In particular, every strictly monotone continuous function on an interval is invertible on its range — the Horizontal Line Test becomes a theorem rather than an inspection.',
          },
          {
            kind: 'proof',
            body: 'Injectivity is immediate from strict monotonicity. That $f(I)$ is an interval needs the supremum argument: let $y$ lie strictly between $f(a)$ and $f(b)$ with $a < b$, and say $f(a) < y < f(b)$. The set $S = \\{x \\in [a, b] : f(x) \\le y\\}$ contains $a$ and is bounded, so $c = \\sup S$ exists. If $f(c) < y$, continuity keeps $f$ below $y$ on a neighborhood of $c$, and since $f(b) > y$ we have $c < b$, so points just right of $c$ still belong to $S$ — contradicting that $c$ is an upper bound. If $f(c) > y$, continuity keeps $f$ above $y$ near $c$, and then some $c - \\delta$ is an upper bound of $S$ — contradicting that $c$ is the least upper bound. Hence $f(c) = y$, so every intermediate value is attained. Monotonicity of $f^{-1}$ is forced, and continuity of $f^{-1}$ follows by order: for $y_0 = f(x_0)$ with $x_0$ interior and $\\varepsilon > 0$ small, the values $y_\\pm = f(x_0 \\pm \\varepsilon)$ bracket $y_0$, and every $y$ with $y_- < y < y_+$ satisfies $x_0 - \\varepsilon < f^{-1}(y) < x_0 + \\varepsilon$ by monotonicity — continuity with $\\delta = \\min(y_0 - y_-,\\, y_+ - y_0)$.',
          },
          {
            kind: 'derivation',
            heading: 'The slope of an inverse',
            body: 'Assume in addition that $f$ is differentiable at $x_0$ with $f\'(x_0) \\ne 0$, and that $f^{-1}$ is differentiable at $y_0 = f(x_0)$ — the theorem guarantees existence and continuity, never differentiability. Differentiate the cancellation equation $f^{-1}(f(x)) = x$ with the Chain Rule: $$1 = \\frac{d}{dx} f^{-1}(f(x)) \\Big|_{x_0} = (f^{-1})\'(y_0)\\cdot f\'(x_0), \\qquad \\text{hence} \\qquad (f^{-1})\'(y_0) = \\frac{1}{f\'(x_0)} = \\frac{1}{f\'\\big(f^{-1}(y_0)\\big)}.$$ Read aloud: the slope of the inverse at the reflected point is the reciprocal of the slope. Sanity check with $f(x) = x^2$ on $x \\ge 0$: the inverse is $\\sqrt{y}$, and the formula gives slope $\\tfrac{1}{2\\sqrt{y}}$ at $y = x^2$, matching the direct computation $\\tfrac{d}{dy}\\sqrt{y} = \\tfrac{1}{2\\sqrt{y}}$. The steep part of $f$ becomes the flat part of $f^{-1}$, and where $f\'(x_0) = 0$ the formula blows up — visible as the vertical tangent of $\\sqrt{y}$ at $y = 0$.',
          },
          {
            kind: 'para',
            body: 'The graphical rule — reflect the graph in the line $y = x$ — is a theorem about swapping coordinates, not folklore. The graph of $f^{-1}$ is exactly the set $\\{(y, x) : (x, y) \\text{ lies on the graph of } f\\}$, by the defining equivalence $f^{-1}(y) = x \\iff f(x) = y$. The map $R(x, y) = (y, x)$ is a linear involution, $R^2 = \\mathrm{id}$, whose fixed points form the line $y = x$; a distance-preserving involution with a line of fixed points is the reflection in that line, so graphs of inverse pairs are mirror images. Two by-products: reflection swaps the Vertical and Horizontal Line Tests — invertibility is vertical-line-tested on the reflected graph — and reflection across $y = x$ preserves “uphill,” which is why $f$ and $f^{-1}$ share the direction of their monotonicity.',
          },
          {
            kind: 'example',
            heading: 'arcsin, built from a bare restriction',
            body: 'Sine is not one-to-one on $\\mathbb{R}$, but its restriction to $\\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]$ is: there $\\sin$ is strictly increasing, running from $-1$ to $1$, so it is a bijection $\\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right] \\to [-1, 1]$, and the theorem guarantees that the inverse — call it $\\arcsin$ — exists, is increasing, and is continuous. The cancellation equations hold **with range clauses**: $\\sin(\\arcsin x) = x$ for every $x \\in [-1, 1]$, but $\\arcsin(\\sin\\theta) = \\theta$ only for $\\theta \\in \\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]$ — which is exactly why $\\arcsin\\left(\\sin\\tfrac{5\\pi}{4}\\right) = -\\tfrac{\\pi}{4}$: the angle must first be folded back onto the restricted branch. The slope formula gives $(\\arcsin x)\' = \\tfrac{1}{\\cos(\\arcsin x)} = \\tfrac{1}{\\sqrt{1 - x^2}}$, and the **positive** root is forced because cosine is nonnegative precisely on the chosen branch — the restriction is still doing work, one layer up.',
          },
          {
            kind: 'para',
            body: 'The natural logarithm is an integral wearing an inverse-function costume. Define, for $x > 0$, $$L(x) = \\int_1^x \\frac{dt}{t}$$ — no exponential is needed to state it. A substitution proves the logarithm’s defining law, $L(xy) = L(x) + L(y)$: since $$L(xy) - L(y) = \\int_y^{xy} \\frac{dt}{t} = \\int_1^{x} \\frac{y\\,du}{yu} = L(x)$$ using $t = yu$, products of inputs become sums of values, which is the exponential law read backwards. Because the integrand is positive, $L$ is strictly increasing; the functional equation forces $L(1) = 0$ and pushes $L(x) \\to \\infty$ as $x \\to \\infty$ and $L(x) \\to -\\infty$ as $x \\to 0^+$, so $L$ maps $(0, \\infty)$ onto $\\mathbb{R}$; by the theorem of this tier $L$ has an inverse, and that inverse is **defined** to be the exponential, with $e$ the number satisfying $L(e) = 1$. This is exactly how Stewart’s own starred treatment proceeds late in the book: the logarithm is built by an integral, and the exponential is recovered as its inverse — the Fundamental Theorem of Calculus, waiting to happen.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Fractional calculus: derivatives of order half',
        blocks: [
          {
            kind: 'para',
            body: 'The inverse theme of this section has a spectacular generalization. Integration is an operator, $(If)(x) = \\int_0^x f(t)\\,dt$, and the Fundamental Theorem says $D \\circ I = \\mathrm{id}$ on nice functions — differentiation is a left inverse of integration. Iterating, $I^2 f(x) = \\int_0^x \\int_0^u f(t)\\,dt\\,du$, and swapping the order of integration over the triangle $0 \\le t \\le u \\le x$ collapses it: $I^2 f(x) = \\int_0^x (x - t)\\,f(t)\\,dt$. The pattern continues to $I^n f(x) = \\frac{1}{(n-1)!}\\int_0^x (x - t)^{n-1} f(t)\\,dt$, and Cauchy noticed that the formula survives non-integer $n$ once factorials are replaced by the Gamma function $\\Gamma(\\alpha)$, with $\\Gamma(n) = (n-1)!$. The **Riemann–Liouville fractional integral** is born: $I^\\alpha f(x) = \\frac{1}{\\Gamma(\\alpha)}\\int_0^x (x - t)^{\\alpha - 1} f(t)\\,dt$ for any $\\alpha > 0$, and one verifies the semigroup law $I^\\alpha I^\\beta = I^{\\alpha + \\beta}$ — the honest reason this deserves to be called a fraction of an operator.',
          },
          {
            kind: 'example',
            heading: 'A half-derivative, computed',
            body: 'Take the constant function $1$ and $\\alpha = \\tfrac{1}{2}$. Using $\\Gamma\\left(\\tfrac{1}{2}\\right) = \\sqrt{\\pi}$: $$I^{1/2}[1](x) = \\frac{1}{\\sqrt{\\pi}}\\int_0^x \\frac{dt}{\\sqrt{x - t}} = \\frac{2\\sqrt{x}}{\\sqrt{\\pi}}.$$ To differentiate half as much as one integrates, define $D^{1/2} = \\frac{d}{dx} \\circ I^{1/2}$, and then $$D^{1/2}[1](x) = \\frac{1}{\\sqrt{\\pi x}}.$$ The half-derivative of a constant is **not zero** — fractional operators remember the lower limit $x = 0$ forever, because $I^{1/2}$ averages the whole history of $f$ on $[0, x]$. Checking the monomial $f(x) = x$: $I^{1/2}[x](x) = \\frac{4x^{3/2}}{3\\sqrt{\\pi}}$, and running $D^{1/2}$ on that half-integral returns $\\frac{d}{dx}\\left(x^2/2\\right) = x$, confirming that half and half make a whole.',
          },
          {
            kind: 'application',
            heading: 'Materials with memory',
            body: 'Why would anyone want a derivative of order one-half? Because nature is full of processes caught halfway between storing and dissipating. A perfectly elastic spring obeys $\\sigma(t) = E\\,\\varepsilon(t)$ — stress proportional to strain, a law of order zero; a viscous dashpot obeys $\\sigma(t) = \\eta\\,\\frac{d\\varepsilon}{dt}$, a law of order one. Real materials — polymers, biological tissue, dampers, electrodes — sit in between: **viscoelasticity** is modeled by constitutive laws of order $\\alpha$ with $0 < \\alpha < 1$, the exponent a measured material constant. In control engineering, the fractional PID controller adds a tunable integration order $\\alpha$ between the classical I and D and outperforms standard PID on plants with long memory. Electrochemistry’s Warburg impedance — the response of a diffusion-limited electrode — carries a characteristic $\\sqrt{\\omega}$ signature in frequency, the fingerprint of a half-order derivative in the frequency domain.',
          },
          {
            kind: 'open',
            heading: 'Which fractional derivative is real?',
            body: 'There is no single fractional calculus. Riemann–Liouville, Caputo, Grünwald–Letnikov, Hadamard, Riesz — the definitions disagree about constants and initial conditions (the Riemann–Liouville derivative of a constant is nonzero; the Caputo derivative of a constant is zero), and the disagreement changes what an initial-value problem even means: Riemann–Liouville demands fractional-order initial data, while Caputo accepts classical values like $f(0)$ and $f\'(0)$. Even the semigroup law is fragile — $D^\\alpha D^\\beta = D^{\\alpha + \\beta}$ can pick up boundary terms when $\\alpha + \\beta$ crosses an integer. Which operator deserves to be **the** derivative of order one-half, and whether some canonical calculus interpolates the integer orders while keeping the semigroup law, a sensible product rule, and physically meaningful initial data, remains genuinely open — rival theories compete on numerical and physical evidence, not on proof.',
          },
        ],
      },
    ],
    readingTime: 11,
    intro: 'Many important operations — taking roots, taking logarithms, converting temperatures, decrypting messages — are reversals of other operations, and their mathematical home is the inverse function. Section 1.5 characterizes exactly which functions can be reversed (the one-to-one ones), gives the four-step recipe for finding inverses, and derives the logarithm as the inverse of the exponential. The section ends with the inverse trigonometric functions and the change-of-base formula, completing the catalog of transcendental functions the rest of the book differentiates.',
    objectives: [
      'Test whether a function is one-to-one using the Horizontal Line Test and monotonicity',
      'Find the inverse of a one-to-one function by the four-step procedure and verify it with the cancellation equations',
      'Explain the geometric relationship between the graphs of $f$ and $f^{-1}$ (reflection about $y = x$)',
      'Define logarithms, apply their laws, and convert bases with the change-of-base formula',
      'Use the natural exponential and natural logarithm as the canonical inverse pair, and state the domains and ranges of $\\arcsin$, $\\arccos$ and $\\arctan$',
    ],
    concepts: [
      {
        term: 'One-to-one functions and the Horizontal Line Test',
        kind: 'definition',
        statement: 'A function is **one-to-one** if it never takes the same value twice: $x_1 \\ne x_2$ implies $f(x_1) \\ne f(x_2)$. Graphically, no horizontal line intersects the graph more than once — the **Horizontal Line Test**.',
        detail: 'Only one-to-one functions are reversible, because an inverse must route each output back to a single input. The solution manual’s examples: the line $f(x) = 2x - 3$ is one-to-one (distinct inputs give distinct outputs), while $f(x) = x^4 - 16$ is not ($f(-1) = f(1) = -15$); $r(t) = t^3 + 4$ is one-to-one, and so is $g(x) = \\sqrt[3]{x}$. A shortcut: any function **increasing** (or decreasing) on its whole domain is automatically one-to-one — the manual proves $t^3 + 4$ this way. This is why $x^2$ becomes invertible after restricting its domain to $x \\ge 0$.',
      },
      {
        term: 'Inverse function',
        kind: 'definition',
        statement: 'If $f$ is one-to-one with domain $A$ and range $B$, its **inverse function** $f^{-1}$ has domain $B$ and range $A$ and is defined by $$f^{-1}(y) = x \\quad \\Longleftrightarrow \\quad f(x) = y.$$ The inverse routes each output of $f$ back to the unique input that produced it.',
        detail: 'The inverse swaps the roles of input and output — whatever $f$ does, $f^{-1}$ undoes. Domains swap with ranges: the domain of $f^{-1}$ is the range of $f$ and the range of $f^{-1}$ is the domain of $f$. Caution: $f^{-1}$ is a statement about reversing, **not** the reciprocal $1/f(x)$ — the notation is unlucky but standard. The manual’s compact reading: $f^{-1}(y) = x \\iff f(x) = y$ for $y$ in $B$.',
      },
      {
        term: 'Cancellation equations',
        kind: 'law',
        statement: 'For $x$ in the domain of $f$ and $y$ in the domain of $f^{-1}$: $$f^{-1}(f(x)) = x \\qquad \\text{and} \\qquad f(f^{-1}(y)) = y.$$ Each function undoes the other, in either order.',
        detail: 'These two identities are both the definition-check and the sanity-check for inverses. Example from the manual: given a one-to-one $f$ with $f^{-1}(3) = 2$, we immediately have $f(2) = 3$; and knowing $f(1) = 3$ for an increasing $f$ gives $f^{-1}(3) = 1$, after which $f(f^{-1}(2)) = 2$ holds automatically. The cancellation equations are what make inverse pairs like $e^x$ and $\\ln x$ so useful in solving equations.',
      },
      {
        term: 'How to find an inverse: the four steps',
        kind: 'method',
        statement: 'To find $f^{-1}$: (1) write $y = f(x)$; (2) solve this equation for $x$ in terms of $y$; (3) interchange $x$ and $y$; (4) the result is $y = f^{-1}(x)$, with domain equal to the range of $f$. Graphically, the graph of $f^{-1}$ is the **reflection** of the graph of $f$ about the line $y = x$.',
        detail: 'Solving for $x$ is the hard step and is exactly where domain restrictions earn their keep: for $f(x) = 1 - x^2$ with $x \\ge 0$, the equation $y = 1 - x^2$ gives $x = \\sqrt{1 - y}$ (choosing the nonnegative root because the original domain was $x \\ge 0$), so $f^{-1}(x) = \\sqrt{1 - x}$. Reflection about $y = x$ is why the graph of $\\arcsin$ is the mirror image of the sine curve on its restricted domain — the manual draws exactly this.',
      },
      {
        term: 'Logarithmic functions',
        kind: 'definition',
        statement: 'The **logarithmic function** with base $b$ ($b > 0$, $b \\ne 1$) is the inverse of $b^x$: $$\\log_b x = y \\quad \\Longleftrightarrow \\quad b^y = x.$$ Its domain is $(0, \\infty)$, its range is $\\mathbb{R}$, and its graph passes through $(1, 0)$.',
        detail: 'The logarithm answers the question “$b$ raised to **what** gives $x$?” — it is the exponent-finder for base $b$. Because it inverts an increasing function, $\\log_b$ is increasing for $b > 1$; its graph is the reflection of $y = b^x$ about $y = x$, with a vertical asymptote at $x = 0$. Only positive inputs are allowed: no real power of a positive base is negative or zero.',
      },
      {
        term: 'Laws of logarithms',
        kind: 'law',
        statement: 'For positive $x$ and $y$: $$\\log_b (xy) = \\log_b x + \\log_b y, \\qquad \\log_b \\frac{x}{y} = \\log_b x - \\log_b y, \\qquad \\log_b \\left(x^r\\right) = r \\log_b x.$$',
        detail: 'Each law is the exponential law $b^{x + y} = b^x b^y$ read through the inverse: because logarithms ARE exponents, products of inputs become sums of logs. The classic warning: there is **no** law for $\\log_b(x + y)$, and $\\log_b x + \\log_b y \\ne \\log_b(x + y)$ — conflating these is the most common algebra error in the course. The power law $\\log_b(x^r) = r \\log_b x$ is the workhorse for solving exponential equations.',
      },
      {
        term: 'Natural logarithm and change of base',
        kind: 'notation',
        statement: 'The **natural logarithm** is $\\ln x = \\log_e x$, the inverse of $e^x$. Any logarithm converts to natural logs: $$\\log_b x = \\frac{\\ln x}{\\ln b}.$$',
        detail: 'Since $e$ is the base of calculus (Section 1.4), $\\ln$ is the logarithm of calculus. The change-of-base formula lets a calculator with only $\\ln$ (or $\\log_{10}$) evaluate any $\\log_b$: the solution manual uses it to solve the doubling-time problem $n = 100 \\cdot 2^{t/3}$ by writing $t = 3 \\log_2(n/100) = 3\\, \\frac{\\ln(n/100)}{\\ln 2}$.',
      },
      {
        term: 'The pair $e^x$ and $\\ln x$',
        kind: 'insight',
        statement: '$y = e^x$ (domain $\\mathbb{R}$, range $(0, \\infty)$) and $y = \\ln x$ (domain $(0, \\infty)$, range $\\mathbb{R}$) are inverses: $$\\ln(e^x) = x \\ \\text{ for all } x, \\qquad e^{\\ln x} = x \\ \\text{ for } x > 0,$$ and their graphs are reflections about $y = x$.',
        detail: 'This is the cancellation equations incarnate, and the reason “$e$ to the” and “el-en” cancel in equations: $e^{1 - x} = 7$ becomes $1 - x = \\ln 7$ so $x = 1 - \\ln 7 \\approx -0.95$ (the manual’s Exercise 27), and $3 \\ln(x - 2) = y$ becomes $x = 2 + e^{y/3}$ (its Exercise 28). Derivative-wise this pair is perfect: the slope of $\\ln x$ at $x = e^a$ is $e^{-a}$ — the mirror of $e^x$’s slope — making $\\frac{d}{dx}\\ln x = \\frac{1}{x}$ in Section 3.6.',
      },
      {
        term: 'Inverse trigonometric functions',
        kind: 'notation',
        statement: 'Restricting sine to $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$ makes it one-to-one, and its inverse is $y = \\arcsin x = \\sin^{-1} x$ with domain $[-1, 1]$ and range $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$. Similarly $\\arccos$ has range $[0, \\pi]$ and $\\arctan$ has domain $\\mathbb{R}$ and range $(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})$.',
        detail: 'The trig functions are periodic, hence wildly non-one-to-one; restricting to a monotone branch fixes this — the same trick as restricting $x^2$ to $x \\ge 0$. The solution manual’s evaluations set the standard: $\\arcsin(0.5) = \\tfrac{\\pi}{6}$ because $\\sin \\tfrac{\\pi}{6} = 0.5$ **and** $\\tfrac{\\pi}{6}$ lies in the range $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$; likewise $\\arcsin(-\\tfrac{\\sqrt{2}}{2}) = -\\tfrac{\\pi}{4}$. The range clause is essential: $\\arcsin(\\sin \\tfrac{5\\pi}{4}) = -\\tfrac{\\pi}{4}$, not $\\tfrac{5\\pi}{4}$.',
      },
    ],
    examples: [
      {
        title: 'Finding an inverse with a domain restriction (Exercise 23 style)',
        problem: 'Find the inverse of $f(x) = 1 - x^2$ on the restricted domain $x \\ge 0$, and verify with the cancellation equations.',
        steps: [
          { label: 'Step 1: Confirm one-to-one', text: 'On $x \\ge 0$ the function is decreasing (as $x$ grows, $-x^2$ falls), so $f$ is one-to-one and the inverse exists. The range is $(-\\infty, 1]$ — outputs never exceed 1.' },
          { label: 'Step 2: Write and solve for $x$', text: 'Set $y = 1 - x^2$ with $x \\ge 0$. Then $x^2 = 1 - y$, and because $x \\ge 0$ we must take the nonnegative root: $x = \\sqrt{1 - y}$.' },
          { label: 'Step 3: Interchange variables', text: 'Swap names: $y = \\sqrt{1 - x}$, so the inverse function is $f^{-1}(x) = \\sqrt{1 - x}$ with domain $x \\le 1$ — exactly the range of $f$.' },
          { label: 'Step 4: Verify with cancellation', text: '$f^{-1}(f(x)) = \\sqrt{1 - (1 - x^2)} = \\sqrt{x^2} = x$ for $x \\ge 0$ ✓; and $f(f^{-1}(y)) = 1 - (\\sqrt{1 - y})^2 = y$ for $y \\le 1$ ✓.' },
        ],
        result: '$f^{-1}(x) = \\sqrt{1 - x}$ on $(-\\infty, 1]$. The restriction $x \\ge 0$ chose the square-root branch; without it the parabola fails the Horizontal Line Test and has no inverse at all.',
      },
      {
        title: 'Working the $e^x$ / $\\ln x$ pair (Exercises 27–28 style)',
        problem: 'Solve each equation for $x$: (a) $e^{1 - x} = 7$; (b) $3 \\ln(x - 2) = 6$. Then evaluate $\\ln(e^3)$ and $e^{\\ln 4}$.',
        steps: [
          { label: 'Step 1: Kill the exponential with $\\ln$', text: '(a) Apply $\\ln$ to both sides: $\\ln(e^{1 - x}) = \\ln 7$. The cancellation equation $\\ln(e^u) = u$ collapses the left side to $1 - x = \\ln 7$.' },
          { label: 'Step 2: Finish (a)', text: 'So $x = 1 - \\ln 7 \\approx 1 - 1.9459 \\approx -0.95$. Check: $e^{1 - (-0.95)} = e^{1.95} \\approx 7$ ✓.' },
          { label: 'Step 3: Kill the logarithm with $e^x$', text: '(b) Divide by 3: $\\ln(x - 2) = 2$. Exponentiate: $e^{\\ln(x - 2)} = e^2$, and the cancellation $e^{\\ln u} = u$ gives $x - 2 = e^2$, so $x = 2 + e^2 \\approx 9.39$.' },
          { label: 'Step 4: Evaluate the pure cancellations', text: '$\\ln(e^3) = 3$ (the exponent-finder question: $e$ to what power gives $e^3$?) and $e^{\\ln 4} = 4$. In both directions the pair is transparent.' },
        ],
        result: '(a) $x = 1 - \\ln 7 \\approx -0.95$; (b) $x = 2 + e^2 \\approx 9.39$; and $\\ln(e^3) = 3$, $e^{\\ln 4} = 4$. The exponential and logarithm are the same operation read in opposite directions.',
      },
      {
        title: 'Doubling time and change of base (Exercise 67 style)',
        problem: 'A bacteria count follows $n(t) = 100 \\cdot 2^{t/3}$, with $t$ in hours. Express $t$ as a function of $n$, and find when the count reaches 50,000.',
        steps: [
          { label: 'Step 1: Isolate the exponential', text: 'From $n = 100 \\cdot 2^{t/3}$ divide by 100: $\\frac{n}{100} = 2^{t/3}$.' },
          { label: 'Step 2: Take $\\log_2$ of both sides', text: 'The definition of the logarithm converts the exponential statement: $\\log_2\\!\\left(\\frac{n}{100}\\right) = \\frac{t}{3}$, so $t = 3 \\log_2\\!\\left(\\frac{n}{100}\\right)$.' },
          { label: 'Step 3: Change the base to compute', text: 'For a calculator with only natural logs, use change of base: $t = 3 \\cdot \\frac{\\ln(n/100)}{\\ln 2}$ — the manual’s exact move.' },
          { label: 'Step 4: Insert the target', text: 'At $n = 50{,}000$: $t = 3 \\log_2(500) = 3 \\cdot \\frac{\\ln 500}{\\ln 2} \\approx 3 \\cdot \\frac{6.215}{0.693} \\approx 3 \\cdot 8.966 \\approx 26.9$ hours.' },
        ],
        result: '$t(n) = 3 \\log_2(n/100) = \\frac{3 \\ln(n/100)}{\\ln 2}$; the culture reaches 50,000 at about $t \\approx 26.9$ hours. Logarithms turn “when?” questions about exponential growth into single subtractions of logs.',
      },
    ],
    keyTakeaways: [
      'Only one-to-one functions have inverses; test with the Horizontal Line Test or by monotonicity (increasing or decreasing on the domain suffices).',
      'The inverse satisfies $f^{-1}(y) = x \\iff f(x) = y$, and swaps domain with range: $D_{f^{-1}} = R_f$.',
      'The cancellation equations $f^{-1}(f(x)) = x$ and $f(f^{-1}(y)) = y$ are the definition-check and the equation-solving tool.',
      'To find an inverse: write $y = f(x)$, solve for $x$, interchange the variables — the domain restriction chooses the branch when solving.',
      'The graph of $f^{-1}$ is the reflection of the graph of $f$ about the line $y = x$.',
      '$\\log_b x = y \\iff b^y = x$; the laws of logs mirror the laws of exponents (products become sums), and $\\log_b x = \\frac{\\ln x}{\\ln b}$ converts any base.',
      '$e^x$ and $\\ln x$ are the canonical inverse pair; $\\arcsin$, $\\arccos$ and $\\arctan$ invert restricted trig branches with domains $[-1, 1]$, $[-1, 1]$ and $\\mathbb{R}$, and ranges $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$, $[0, \\pi]$ and $(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})$.',
    ],
    quiz: [
      {
        q: 'Why does $f(x) = x^4 - 16$ fail to have an inverse on $\\mathbb{R}$?',
        options: ['It is not a polynomial', 'It is not one-to-one: $f(-1) = f(1) = -15$', 'Its range is empty', 'It fails the Vertical Line Test'],
        answer: 1,
        explanation: 'The function is even, so distinct inputs share outputs and no horizontal line test passes — the solution manual’s own example. Restricting to $x \\ge 0$ restores invertibility.',
      },
      {
        q: 'A one-to-one function satisfies $f(6) = 17$. What is $f^{-1}(17)$?',
        options: [`$\\tfrac{1}{17}$`, `$6$`, `$17$`, 'It cannot be determined from the information given'],
        answer: 1,
        explanation: 'The definition $f^{-1}(y) = x \\iff f(x) = y$ runs the arrow backward: since $f(6) = 17$, the inverse sends 17 back to 6. Note this is function reversal, not the reciprocal $1/17$.',
      },
      {
        q: 'Which equation is the correct “cancellation” for the natural exponential pair?',
        options: [`$\\ln(x) + e^x = x$`, `$e^{\\ln x} = x$ for $x > 0$`, `$\\ln(e^x) = e$ for all $x$`, `$e^{\\ln x} = 1$ for all $x$`],
        answer: 1,
        explanation: 'The exponential undoes the logarithm on the logarithm’s domain: $e^{\\ln x} = x$ for $x > 0$. Symmetrically $\\ln(e^x) = x$ for every real $x$.',
      },
      {
        q: 'Simplify $\\log_b (x^2 y^3)$ for positive $x$ and $y$.',
        options: [`$2 \\log_b x + 3 \\log_b y$`, `$\\log_b x^2 \\cdot \\log_b y^3$`, `$6 \\log_b (xy)$`, `$\\log_b (2x + 3y)$`],
        answer: 0,
        explanation: 'Products inside a log become sums of logs, and exponents come out in front: $\\log_b(x^2) + \\log_b(y^3) = 2\\log_b x + 3\\log_b y$.',
      },
      {
        q: 'Evaluate $\\arcsin(0.5)$, respecting the range of the inverse sine.',
        options: [`$\\tfrac{5\\pi}{6}$`, `$\\tfrac{\\pi}{6}$`, `$\\tfrac{\\pi}{3}$`, `$\\tfrac{\\pi}{2}$`],
        answer: 1,
        explanation: '$\\sin(\\tfrac{\\pi}{6}) = 0.5$ and $\\tfrac{\\pi}{6}$ lies in the range $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$ — both conditions are required, which is why $\\tfrac{5\\pi}{6}$ (also with sine 0.5) is rejected.',
      },
      // PYQ-pattern — inverse value of a linear function (rephrased, values changed)
      {
        q: 'If $f(x) = 3x - 7$, then $f^{-1}(5)$ equals:',
        options: [`$8$`, `$\\frac{22}{3}$`, `$4$`, `$-4$`],
        answer: 2,
        explanation: 'Step 1: Restate the inverse value as the unique $x$ with $f(x) = 5$. Step 2: Recall the key definition $f^{-1}(y) = x \\iff f(x) = y$. Step 3: Set $3x - 7 = 5$ to get $3x = 12$. Step 4: Divide to obtain $x = 4$. Step 5: The distractors fail since $8$ adds instead of solving, $\\frac{22}{3}$ mis-reads the equation as $3 \\times 5 - 7$ over a wrong denominator, and $-4$ flips a sign. Step 6: Hence $f^{-1}(5) = 4$.'
      },
      // PYQ-pattern — logarithmic equation with domain check (rephrased, values changed)
      {
        q: 'Solve $\\log_{2} x + \\log_{2}(x-2) = 3$ for $x$.',
        options: [`$x = -2$`, `$x = 4$`, `$x = 2$`, `$x = 8$`],
        answer: 1,
        explanation: 'Step 1: Restate the domain first as $x > 0$ and $x - 2 > 0$, so $x > 2$. Step 2: Recall the key law $\\log_{2} x + \\log_{2}(x-2) = \\log_{2}(x(x-2))$. Step 3: Convert to exponential form $x(x-2) = 2^{3} = 8$. Step 4: Solve $x^{2} - 2x - 8 = 0$ to get $(x-4)(x+2) = 0$, so $x = 4$ or $x = -2$. Step 5: Discard $x = -2$ since it violates $x > 2$, and reject $x = 2$ and $x = 8$ which do not satisfy the original equation. Step 6: Therefore the admissible solution is $x = 4$.'
      },
    ],
  },
]

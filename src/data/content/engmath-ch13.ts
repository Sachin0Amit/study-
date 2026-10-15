import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 13: Numeric ODEs/PDEs & Optimization
// (Kreyszig 10e, Part E Chapter 21, Part F Chapter 22).
// Sections 13.1 – 13.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh13Content: SectionContent[] = [
  // ---------------------------------------------------------------- 13.1
  {
    sectionId: 'engmath-ch13-s1',
    readingTime: 9,
    intro: 'Many differential equations admit no closed-form solution, so solvers march forward in small time steps instead. Euler method takes the cheapest possible step along the current slope, while Runge-Kutta methods sample extra slopes for far higher accuracy. This section builds Euler first, separates local from global error, climbs through second-order methods to classic RK4, and reduces higher-order equations to first-order systems.',
    objectives: [
      'Advance Euler steps by hand and quote their local versus global error orders',
      'Explain the midpoint and improved-Euler upgrades over plain Euler',
      'Apply one classic RK4 step and reduce second-order equations to first-order systems'
    ],
    concepts: [
      {
        term: 'Explicit Euler stepping',
        kind: 'method',
        statement: '**Explicit Euler** advances with `$y_{n+1} = y_{n} + h\\,f(x_{n}, y_{n})$`, marching along the tangent currently underfoot in the `euler` stride. Each step needs exactly one slope evaluation, making Euler the cheapest and the crudest solver in the family. Small steps keep the tangent fresh while large steps walk off cliffs, which is why step-size control shadows every practical Euler code.',
        detail: 'Geometrically the method replaces the true curve by its tangent segment over each step, so curvature is precisely what each step ignores.'
      },
      {
        term: 'Local versus global error',
        kind: 'theorem',
        statement: 'One Euler step commits **local error** `$O(h^{2})$` from the dropped Taylor tail, but `$n$` such steps accumulate into **global error** `$O(h)$` because the step count grows like `lte` `$1 \\div h$`. Halving `$h$` therefore halves the final error at double the work, the first-order signature. Confusing local with global order overstates Euler accuracy by a full power of `$h$`, the most common error-analysis slip.',
        detail: 'A method of local order `$p+1$` normally delivers global order `$p$`, the one-power drop that organizes every solver comparison.'
      },
      {
        term: 'Midpoint and improved Euler as RK2',
        kind: 'method',
        statement: '**Second-order Runge-Kutta** methods kill the `$h^{2}$` local term by sampling a trial slope: midpoint evaluates at the half-step center while improved Euler averages the endpoints in the `rk2` predictor-corrector style. Both reach global `$O(h^{2})$`, quartering error under step halving at roughly double the Euler cost per step. They are the minimal upgrade that makes smooth problems feel the accuracy jump without any RK4 bookkeeping.',
        detail: 'Midpoint uses `$k_{1} = f(x_{n}, y_{n})$` then `$y_{n+1} = y_{n} + h\\,f(x_{n} + \\frac{h}{2}, y_{n} + \\frac{h}{2}k_{1})$`, one extra evaluation buying one full order.'
      },
      {
        term: 'Classic fourth-order Runge-Kutta',
        kind: 'theorem',
        statement: 'The **classic RK4** blends four slopes `$k_{1}, k_{2}, k_{3}, k_{4}$` with weights `$1, 2, 2, 1$` over six, `$y_{n+1} = y_{n} + \\frac{h}{6}(k_{1} + 2k_{2} + 2k_{3} + k_{4})$`, reaching global error `$O(h^{4})$` in the `rk4` tableau. Halving `$h$` divides error by sixteen, so a handful of RK4 steps routinely beat hundreds of Euler steps on smooth problems. Four evaluations per step is the price, gladly paid whenever `$f$` is cheap and smooth.',
        detail: 'The weights mirror Simpson rule, and that is no coincidence: RK4 integrates the slope the way Simpson integrates a function.'
      },
      {
        term: 'Systems and higher-order reduction',
        kind: 'method',
        statement: 'Every higher-order equation reduces to a **first-order system** by naming derivatives as new unknowns, for example `$v = y^{\\prime}$` turns `$y^{\\prime\\prime} = g(x, y, y^{\\prime})$` into `$y^{\\prime} = v$` with `$v^{\\prime} = g(x, y, v)$` in the `sys` reduction. All scalar solvers then apply componentwise to the vector `$Y = (y, v)$`, so no separate higher-order theory is needed. Coupled oscillators, circuits and control models all enter solvers through exactly this doorway.',
        detail: 'An `$m$`-th order equation becomes `$m$` first-order equations, and one RK4 step advances the whole state vector together.'
      }
    ],
    figures: [
      {
        caption: 'Euler staircase against the true curve $y(x)$: each tangent segment overshoots where curvature bends away, while the RK4 midpoint and endpoint slope samples sense the bend inside the step.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Euler tangent steps versus true solution curve"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Tangent steps leave the curve</text><path d="M 90 290 Q 300 250 450 170 T 650 90" fill="none" stroke="currentColor" stroke-width="2.5"/><polyline points="90,290 230,272 370,240 510,190" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="8 5"/><circle cx="90" cy="290" r="7" fill="currentColor"/><circle cx="230" cy="272" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="370" cy="240" r="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="560" y="120" font-family="sans-serif" font-size="13" font-weight="bold" fill="currentColor">true y(x)</text><text x="300" y="310" font-family="sans-serif" font-size="13" fill="currentColor">euler staircase (dashed)</text><line x1="370" y1="240" x2="370" y2="205" stroke="currentColor" stroke-width="1.2"/><polygon points="370,200 365,210 375,210" fill="currentColor"/><text x="380" y="222" font-family="sans-serif" font-size="12" font-style="italic" fill="currentColor">gap: local error</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Two Euler steps on exponential growth',
        problem: 'Use Euler with `$h = 0.5$` from `$y(0) = 1$` on `$y^{\\prime} = y$` to reach `$x = 1$`, and compare with `$e \\approx 2.71828$`.',
        steps: [
          { label: 'Step 1: First stride', text: 'The slope at the start is `$f(0, 1) = 1$`, so `$y_{1} = 1 + 0.5 \\times 1 = 1.5$` at `$x = 0.5$`. The tangent undershoots growth because the curve bends upward away from it.' },
          { label: 'Step 2: Second stride', text: 'The refreshed slope is `$1.5$`, giving `$y_{2} = 1.5 + 0.5 \\times 1.5 = 2.25$` at `$x = 1$`. Against the true `$2.71828$` the global error is about `$0.468$`, huge because `$h = 0.5$` is coarse for a first-order method.' },
          { label: 'Step 3: Predict halving', text: 'First-order theory promises error near `$0.234$` at `$h = 0.25$`, still poor, which is precisely why nobody integrates smooth growth with plain Euler when RK4 exists.' }
        ],
        result: 'Euler gives `$2.25$` against `$2.71828$`, error about `$0.468$` after two half-unit steps.'
      },
      {
        title: 'One RK4 step nearly nails the same problem',
        problem: 'Take one classic RK4 step with `$h = 0.5$` on `$y^{\\prime} = y$`, `$y(0) = 1$`, and compare with Euler.',
        steps: [
          { label: 'Step 1: Four slopes', text: 'Evaluate `$k_{1} = 1$`, `$k_{2} = 1 + 0.25 \\times 1 = 1.25$`, `$k_{3} = 1 + 0.25 \\times 1.25 = 1.3125$` and `$k_{4} = 1 + 0.5 \\times 1.3125 = 1.65625$`. Each slope probes further along the bend the previous one revealed.' },
          { label: 'Step 2: Blend in code', text: '```python\nh = 0.5\nk1, k2, k3, k4 = 1.0, 1.25, 1.3125, 1.65625\ny1 = 1.0 + (h / 6.0) * (k1 + 2*k2 + 2*k3 + k4)\nprint(y1)  # 1.6484375 against exp(0.5) = 1.6487213\n```\nThe script prints `1.6484375` against the true `$e^{0.5} \\approx 1.6487213$`, an error near `$0.00028$`.' },
          { label: 'Step 3: Compare honestly', text: 'Euler with the same step erred by about `$0.09$` at `$x = 0.5$`, so RK4 wins by a factor over three hundred for four slope evaluations against one. That exchange rate defines practical solver choice.' }
        ],
        result: 'RK4 gives `$1.64844$` with error about `$0.00028$`, three hundred times better than Euler for the same step.'
      }
    ],
    keyTakeaways: [
      'Euler `$y_{n+1} = y_{n} + h f_{n}$` costs one evaluation per step and delivers only global `$O(h)$` accuracy.',
      'Local order exceeds global order by one power because `$1 \\div h$` steps accumulate.',
      'Midpoint and improved Euler reach global `$O(h^{2})$` with one extra slope per step.',
      'Classic RK4 blends four slopes 1-2-2-1 for global `$O(h^{4})$`, and systems reduce to vector first-order form.'
    ],
    quiz: [
      // PYQ-pattern — Euler step computation on growth equation (rephrased)
      {
        q: 'Euler with `$h = 0.2$` starts at `$y(0) = 1$` on `$y^{\\prime} = 2y$`. What is `$y_{1}$`?',
        options: [`$1.2$`, `$1.4$`, `$1.0$`, `$2.0$`],
        answer: 1,
        explanation: 'Step 1: Evaluate the slope at the start: 2 times 1 gives 2. Step 2: Multiply by the step 0.2 to get the increment 0.4. Step 3: Add to the current value 1, giving 1.4. Step 4: Later steps refresh the slope, so growth compounds from there.'
      },
      {
        q: 'A solver shows global error proportional to `$h$`. What is its local error order and likely identity?',
        options: ['Local `$O(h^{2})$`, consistent with Euler', 'Local `$O(h)$`, a zeroth-order method', 'Local `$O(h^{4})$`, consistent with RK4', 'Local error independent of `$h$`'],
        answer: 0,
        explanation: 'Step 1: Global order trails local order by one power. Step 2: Global first order therefore means local second order. Step 3: That pair is the Euler signature. Step 4: RK4 would show global fourth order instead.'
      },
      {
        q: 'How many slope evaluations does one classic RK4 step need?',
        options: ['One', 'Two', 'Three', 'Four'],
        answer: 3,
        explanation: 'Step 1: Count the tableau slopes k1 through k4. Step 2: k1 sits at the left endpoint. Step 3: k2 and k3 probe the midpoint with different updates. Step 4: k4 closes at the right endpoint, totaling four.'
      },
      {
        q: 'The equation `$y^{\\prime\\prime} + 3y^{\\prime} + 2y = 0$` must enter a solver. What is the correct first-order reduction?',
        options: ['Reduce $v = y^{\\prime\\prime}$ to one equation in $v$', 'Differentiate once more to third order', 'Let $v = y^{\\prime}$, then $y^{\\prime} = v$ and $v^{\\prime} = -3v - 2y$', 'Substitute $y = e^{x}$ directly'],
        answer: 2,
        explanation: 'Step 1: Name the velocity v as the first derivative. Step 2: The first system row restates that definition. Step 3: Solve the original equation for y double prime to get the second row. Step 4: The pair advances the state vector y and v together.'
      }
    ]
  },
  // ---------------------------------------------------------------- 13.2
  {
    sectionId: 'engmath-ch13-s2',
    readingTime: 8,
    intro: 'Explicit solvers march happily until the equation itself contains violently fast decay alongside slow motion. Such stiff problems force explicit methods into absurdly small steps dictated by stability rather than accuracy. This section names stiffness through the test equation, derives the explicit stability limit, introduces implicit rescue, and previews multistep Adams methods.',
    objectives: [
      'Recognize stiffness from separated time scales and state its practical symptom',
      'Apply the explicit Euler stability bound on the test equation',
      'Contrast implicit Euler with Adams-Bashforth and Adams-Moulton steps'
    ],
    concepts: [
      {
        term: 'Stiffness means separated time scales',
        kind: 'definition',
        statement: 'A problem is **stiff** when its solution blends components decaying on wildly different time scales, so the fast transient is long gone while the slow motion still matters in the `stiff` regime. Accuracy would allow generous steps tracking the slow part, yet explicit methods must resolve the dead transient or blow up. Chemical kinetics and stiff circuits with tiny parasitic constants are the classic breeding grounds.',
        detail: 'The ratio of largest to smallest decay rate previews stiffness: ratios near a thousand already punish purely explicit codes.'
      },
      {
        term: 'Explicit stability limit on the test equation',
        kind: 'theorem',
        statement: 'On `$y^{\\prime} = \\lambda y$` with negative `$\\lambda$`, explicit Euler multiplies each step by `$1 + h\\lambda$`, so stability demands **`$|1 + h\\lambda| \\le 1$`**, i.e. `$h \\le 2 \\div |\\lambda|$` in the `stabregion` bound. Overshooting that limit flips growing oscillations into the numerical solution of a decaying problem. Higher-order explicit methods stretch the boundary shape but keep a hard finite cap on `$h|\\lambda|$`.',
        detail: 'With `$\\lambda = -1000$`, Euler needs `$h \\le 0.002$`, while the slow component might tolerate steps hundreds of times larger.'
      },
      {
        term: 'Implicit backward Euler stays calm',
        kind: 'method',
        statement: '**Backward Euler** evaluates the slope at the destination, `$y_{n+1} = y_{n} + h\\,f(x_{n+1}, y_{n+1})$`, solving an equation per step instead of evaluating directly in the `implicit` style. For decaying problems it is unconditionally stable: any `$h$` keeps `$y^{\\prime} = \\lambda y$` bounded when `$\\lambda$` is negative. The per-step solve costs more, but steps hundreds of times larger than the explicit limit repay it on stiff problems.',
        detail: 'Linear test problems reduce the implicit step to one division by `$1 - h\\lambda$`, which damps rather than amplifies for every positive `$h$`.'
      },
      {
        term: 'Adams-Bashforth explicit multistep',
        kind: 'method',
        statement: '**Adams-Bashforth** methods integrate an interpolant through past slope values, for example two-step `$y_{n+1} = y_{n} + \\frac{h}{2}(3f_{n} - f_{n-1})$` needs only one fresh `ab2` evaluation per step. Reusing history raises order without new slope calls, a real economy when `$f$` is expensive. The startup needs separately generated past values, and the stability region stays bounded like other explicit schemes.',
        detail: 'The coefficients `$3 \\div 2$` and `$-1 \\div 2$` are exactly the weights integrating the linear interpolant of the two most recent slopes.'
      },
      {
        term: 'Adams-Moulton corrector with predictor',
        kind: 'method',
        statement: '**Adams-Moulton** methods include the not-yet-known `$f_{n+1}$`, e.g. `$y_{n+1} = y_{n} + \\frac{h}{12}(5f_{n+1} + 8f_{n} - f_{n-1})$`, gaining an order over the matching Bashforth formula at the price of implicitness in the `am2` corrector. Predictor-corrector practice runs an explicit Bashforth **predictor** then refines with one or two Moulton **corrector** passes. The pair delivers high accuracy per evaluation while keeping the implementation explicit in spirit.',
        detail: 'PECE mode, predict-evaluate-correct-evaluate, is the standard rhythm: each cycle spends two fresh evaluations per step.'
      }
    ],
    figures: [
      {
        caption: 'Stiff decay $y(t)$: a fast transient plunges inside the first sliver of time while the slow tail crawls, so explicit steps sized for the tail explode on the long-dead fast mode.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fast transient plus slow tail of a stiff solution"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Two time scales, one solution</text><line x1="70" y1="290" x2="660" y2="290" stroke="currentColor" stroke-width="1.5"/><line x1="70" y1="290" x2="70" y2="80" stroke="currentColor" stroke-width="1.5"/><path d="M 70 100 Q 110 270 220 282 T 660 288" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M 70 100 L 105 250" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="7 5"/><text x="150" y="160" font-family="sans-serif" font-size="13" font-weight="bold" fill="currentColor">fast transient</text><text x="450" y="255" font-family="sans-serif" font-size="13" fill="currentColor">slow tail: big steps fine here</text><line x1="220" y1="290" x2="220" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/><text x="220" y="315" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">transient dead after this</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Explicit Euler explodes on a stiff test',
        problem: 'Examine explicit Euler on `$y^{\\prime} = -1000\\,y$` with `$h = 0.01$` versus the stability limit.',
        steps: [
          { label: 'Step 1: Compute the limit', text: 'Stability needs `$h \\le 2 \\div 1000 = 0.002$`, so the requested `$h = 0.01$` overshoots by a factor of five. Accuracy alone would accept far larger steps, since the true solution `$e^{-1000t}$` is essentially zero after a few hundredths.' },
          { label: 'Step 2: Watch the amplification', text: 'Each step multiplies by `$1 + 0.01 \\times (-1000) = -9$`, so magnitudes grow ninefold with alternating sign while the true solution decays. After three steps the numerical value is `$729$` times its start, pure instability masquerading as dynamics.' },
          { label: 'Step 3: State the fix', text: 'Either cut `$h$` below `$0.002$` for thousands of wasteful steps, or switch to backward Euler, which damps correctly at `$h = 0.01$` with factor `$1 \\div 11$` per step.' }
        ],
        result: 'At `$h = 0.01$` explicit Euler amplifies by `$-9$` per step and diverges; stability demands `$h \\le 0.002$`.'
      },
      {
        title: 'One Adams-Bashforth two-step advance',
        problem: 'Advance `$y^{\\prime} = -y$` from exact history `$y_{0} = 1$`, `$y_{1} = e^{-0.1} \\approx 0.904837$` with `$h = 0.1$` using two-step Adams-Bashforth.',
        steps: [
          { label: 'Step 1: slopes from history', text: 'Past slopes are `$f_{0} = -1$` and `$f_{1} = -0.904837$`. No new `$f$` call is needed yet, the multistep economy in action.' },
          { label: 'Step 2: Apply the weights in code', text: '```python\nh = 0.1\ny1, f0, f1 = 0.904837, -1.0, -0.904837\ny2 = y1 + (h / 2.0) * (3.0 * f1 - f0)\nprint(y2)  # 0.819111 against exp(-0.2) = 0.818731\n```\nThe combination `$1.5 f_{1} - 0.5 f_{0} = -0.857256$` steps to `$y_{2} \\approx 0.819111$`.' },
          { label: 'Step 3: Judge the accuracy', text: 'True `$e^{-0.2} \\approx 0.818731$`, so the error is about `$0.00038$`, third-order behavior from one fresh evaluation. Euler with the same step would err near `$0.009$`, over twenty times worse.' }
        ],
        result: 'Adams-Bashforth gives `$0.819111$` against `$0.818731$`, error about `$0.00038$`.'
      }
    ],
    keyTakeaways: [
      'Stiffness pairs fast dead transients with slow live motion, and explicit steps must respect the fast scale.',
      'Explicit Euler is stable on `$y^{\\prime} = \\lambda y$` only for `$h \\le 2 \\div |\\lambda|$` with negative `$\\lambda$`.',
      'Backward Euler evaluates the slope at the destination and stays stable for any step on decaying problems.',
      'Adams-Bashforth predicts from past slopes while Adams-Moulton corrects with the new slope for an extra order.'
    ],
    quiz: [
      {
        q: 'On `$y^{\\prime} = -500\\,y$`, what is the largest stable explicit Euler step?',
        options: [`$0.004$`, `$0.002$`, `$0.5$`, `$1.0$`],
        answer: 0,
        explanation: 'Step 1: Recall the bound h at most 2 divided by the rate magnitude. Step 2: Insert rate 500 to get 2 divided by 500. Step 3: That quotient equals 0.004. Step 4: Any larger step amplifies instead of damping.'
      },
      {
        q: 'A circuit rings down in microseconds yet is simulated over seconds. Which solver behavior is expected?',
        options: ['Euler takes huge accurate steps', 'RK4 needs no stability care', 'Explicit methods stall at microsecond steps while implicit methods stride through', 'No numeric method can handle it'],
        answer: 2,
        explanation: 'Step 1: Identify the microsecond-to-second ratio as stiffness. Step 2: Explicit stability is chained to the fast scale. Step 3: Implicit methods damp the dead transient at any step. Step 4: Hence implicit striding wins despite costlier steps.'
      },
      {
        q: 'Two-step Adams-Bashforth with $h = 0.1$, $f_{n} = 2$, $f_{n-1} = 1$, $y_{n} = 5$ gives which $y_{n+1}$?',
        options: [`$5.2$`, `$5.5$`, `$5.05$`, `$5.25$`],
        answer: 3,
        explanation: 'Step 1: Form 3 times f-n minus f-n-minus-1: 6 minus 1 gives 5. Step 2: Halve to 2.5 per the two-step weights. Step 3: Multiply by h 0.1 to get increment 0.25. Step 4: Add to 5 for 5.25.'
      },
      {
        q: 'What distinguishes Adams-Moulton from Adams-Bashforth formulas?',
        options: ['Moulton uses only older history', 'Moulton includes the new slope `$f_{n+1}$` and is implicit', 'Moulton needs no startup values', 'Moulton has smaller stability regions always'],
        answer: 1,
        explanation: 'Step 1: Bashforth interpolates past slopes only, staying explicit. Step 2: Moulton extends the interpolant to the unknown new slope. Step 3: That inclusion makes the formula implicit. Step 4: The reward is an extra order of accuracy per step.'
      }
    ]
  },
  // ---------------------------------------------------------------- 13.3
  {
    sectionId: 'engmath-ch13-s3',
    readingTime: 9,
    intro: 'Partial differential equations live on grids where derivatives become neighbor differences. The five-point Laplacian turns elliptic problems into sparse linear systems while explicit time stepping turns heat flow into repeated averaging. This section discretizes the Laplacian, encodes boundary conditions, derives the explicit heat stability limit, and notes the implicit and wave-equation extensions.',
    objectives: [
      'Write the five-point Laplacian stencil and use it at interior grid points',
      'Impose discrete Dirichlet and Neumann boundary conditions correctly',
      'Apply the explicit heat stability bound and describe Crank-Nicolson and wave stencils'
    ],
    concepts: [
      {
        term: 'Five-point Laplacian stencil',
        kind: 'method',
        statement: 'Central differences in both directions give the **five-point Laplacian** `$\\nabla^{2}u \\approx (u_{E} + u_{W} + u_{N} + u_{S} - 4u_{P}) \\div h^{2}$`, averaging the four `stencil` neighbors against four times the center. Each interior grid point contributes one sparse equation, assembling the discrete Poisson system. The stencil is second-order accurate, so halving the mesh spacing quarters the discretization error on smooth solutions.',
        detail: 'On a unit-spaced grid the weights read `$1$` on each neighbor and `$-4$` at the center, the most quoted stencil in elliptic numerics.'
      },
      {
        term: 'Discrete Dirichlet versus Neumann boundaries',
        kind: 'definition',
        statement: '**Dirichlet** conditions pin the boundary value itself, so edge unknowns are simply replaced by the prescribed numbers in the `bc` assembly. **Neumann** conditions prescribe the outward derivative instead, implemented with a ghost node mirroring the interior to encode the slope. Mixing them on different edges yields mixed problems, and each edge must declare exactly one of the two for a well-posed discrete system.',
        detail: 'A zero Neumann slope makes the ghost value equal its interior mirror, enforcing symmetry across that edge.'
      },
      {
        term: 'Explicit heat stepping and its stability cap',
        kind: 'theorem',
        statement: 'Forward time with central space gives `$u_{P}^{new} = r(u_{E} + u_{W}) + (1 - 2r)u_{P}$` in one dimension with mesh ratio **`$r = k\\Delta t \\div (\\Delta x)^{2}$`**, stable exactly for `$r \\le \\frac{1}{2}$` in the `cfl` bound. The update is a convex average of neighbors only inside that range; beyond it the center weight turns negative and oscillations erupt. Refining `$\\Delta x$` therefore forces `$\\Delta t$` down quadratically, the harsh tax of explicit diffusion.',
        detail: 'Halving the spatial mesh at fixed `$r$` needs four times as many time steps to reach the same final time.'
      },
      {
        term: 'Crank-Nicolson implicit averaging',
        kind: 'method',
        statement: '**Crank-Nicolson** averages the old and new Laplacians, reaching second order in time while staying unconditionally stable for the heat equation in the `cn` scheme. Each time level solves a tridiagonal system instead of evaluating a formula, trading explicit simplicity for freedom from the `$r$` cap. Long smooth diffusions run far fewer, larger steps under this scheme than any explicit march allows.',
        detail: 'The tridiagonal solve costs linear effort per step via the Thomas sweep, so implicit steps stay affordable in one dimension.'
      },
      {
        term: 'Wave equation needs two time levels',
        kind: 'method',
        statement: 'Second time derivatives demand central differencing in time as well, giving the explicit **leapfrog stencil** `$u_{P}^{next} = 2u_{P} - u_{P}^{prev} + C^{2}(u_{E} + u_{W} - 2u_{P})$` with Courant number `wave` `$C = c\\Delta t \\div \\Delta x \\le 1$`. Both current and previous levels seed the march, and exceeding unit Courant number lets waves outrun the stencil and destabilize. Hyperbolic problems thus carry their own speed-limit stability law, distinct from the diffusive `$r$` cap.',
        detail: 'Starting the two-level scheme needs a special first step, often a Taylor launch from initial displacement and velocity.'
      }
    ],
    figures: [
      {
        caption: 'Five-point stencil at $P$: neighbors $E$, $W$, $N$, $S$ feed the center with weights $1$ against $-4$, the discrete Laplacian behind every elliptic solve.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five point Laplacian stencil on a grid"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Five-point Laplacian stencil</text><line x1="200" y1="140" x2="520" y2="140" stroke="currentColor" stroke-width="1"/><line x1="200" y1="220" x2="520" y2="220" stroke="currentColor" stroke-width="1"/><line x1="280" y1="60" x2="280" y2="300" stroke="currentColor" stroke-width="1"/><line x1="360" y1="60" x2="360" y2="300" stroke="currentColor" stroke-width="1"/><line x1="440" y1="60" x2="440" y2="300" stroke="currentColor" stroke-width="1"/><circle cx="360" cy="220" r="26" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="228" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">-4 P</text><circle cx="280" cy="220" r="20" fill="currentColor"/><circle cx="440" cy="220" r="20" fill="currentColor"/><circle cx="360" cy="140" r="20" fill="currentColor"/><circle cx="360" cy="300" r="20" fill="currentColor"/><text x="252" y="215" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">W</text><text x="468" y="215" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">E</text><text x="360" y="118" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">N</text><text x="360" y="322" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">S</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'One explicit heat step on three nodes',
        problem: 'Advance interior values `$(0.5, 1.0, 0.5)$` with zero fixed ends by one explicit heat step using `$r = 0.25$`.',
        steps: [
          { label: 'Step 1: State the update', text: 'Each new value is `$0.25 \\times$` neighbor sum plus `$0.5 \\times$` old center, a convex average because `$r = 0.25$` respects the one-half cap. The fixed zero ends feed the edge nodes directly.' },
          { label: 'Step 2: Sweep the three nodes', text: 'Left node: `$0.25 \\times (0 + 1.0) + 0.5 \\times 0.5 = 0.5$`. Middle: `$0.25 \\times (0.5 + 0.5) + 0.5 \\times 1.0 = 0.75$`. Right mirrors left at `$0.5$`. Heat flows downhill from the hot center, exactly as diffusion demands.' },
          { label: 'Step 3: Confirm the maximum principle', text: 'No new value exceeds the old maximum `$1.0$`, confirming stability at this `$r$`. With `$r = 0.75$` the center weight would turn negative and overshoots would appear.' }
        ],
        result: 'New profile `$(0.5, 0.75, 0.5)$`, diffused inward with the peak lowered from `$1.0$` to `$0.75$`.'
      },
      {
        title: 'Largest stable time step for a fine mesh',
        problem: 'For diffusivity `$\\alpha = 0.02$` and spacing `$\\Delta x = 0.1$`, find the largest stable explicit `$\\Delta t$` and verify in code.',
        steps: [
          { label: 'Step 1: Invert the ratio bound', text: 'Stability needs `$\\alpha \\Delta t \\div (\\Delta x)^{2} \\le 0.5$`, so `$\\Delta t \\le 0.5 \\times 0.01 \\div 0.02 = 0.25$`. Any larger step breaks the convex-average structure.' },
          { label: 'Step 2: Check in code', text: '```python\nalpha, dx = 0.02, 0.1\ndt = 0.5 * dx ** 2 / alpha\nprint(dt, alpha * dt / dx ** 2)  # 0.25 0.5\n```\nThe script prints `0.25 0.5`: the limiting step with ratio exactly one half.' },
          { label: 'Step 3: Price refinement', text: 'Halving `$\\Delta x$` to `$0.05$` would cut `$\\Delta t$` to `$0.0625$`, quadrupling the step count for the same simulated time. That quadratic tax motivates implicit schemes on fine meshes.' }
        ],
        result: 'Maximum stable `$\\Delta t = 0.25$` with mesh ratio exactly `$0.5$`.'
      }
    ],
    keyTakeaways: [
      'The five-point Laplacian weights neighbors `$1$` against center `$-4$`, all divided by `$h^{2}$`.',
      'Dirichlet pins boundary values while Neumann prescribes slopes via mirrored ghost nodes.',
      'Explicit heat flow needs `$r = \\alpha\\Delta t \\div (\\Delta x)^{2} \\le \\frac{1}{2}$` or oscillations erupt.',
      'Crank-Nicolson buys unconditional stability with tridiagonal solves, and waves obey the Courant cap `$C \\le 1$`.'
    ],
    quiz: [
      {
        q: 'At an interior point with neighbors `$3, 5, 7, 9$` and center `$6$` on a unit grid, what is the five-point Laplacian?',
        options: [`$0$`, `$24$`, `$-24$`, `$6$`],
        answer: 0,
        explanation: 'Step 1: Sum the four neighbors: 3 plus 5 plus 7 plus 9 gives 24. Step 2: Subtract four times the center: 24 minus 24 gives 0. Step 3: Divide by unit spacing squared, leaving 0. Step 4: Zero Laplacian marks locally harmonic, averaging behavior.'
      },
      {
        q: 'An edge condition fixes `$u = 5$` at every boundary node. Which type is it?',
        options: ['Neumann', 'Mixed interior', 'Dirichlet', 'Initial'],
        answer: 2,
        explanation: 'Step 1: Ask what is prescribed: the value itself. Step 2: Value prescription is the Dirichlet definition. Step 3: Neumann would prescribe the normal slope instead. Step 4: Implementation simply overwrites edge unknowns with 5.'
      },
      {
        q: 'Explicit heat stepping runs with `$r = 0.8$`. What happens?',
        options: ['Faster stable convergence', 'Exact solution in one step', 'Automatic switch to implicit', 'Oscillatory instability from the negative center weight'],
        answer: 3,
        explanation: 'Step 1: The center weight is 1 minus 2r, here minus 0.6. Step 2: Negative weights break the averaging structure. Step 3: Alternating overshoots grow each step. Step 4: Only r at most one half keeps all weights nonnegative.'
      },
      {
        q: 'Why does Crank-Nicolson beat explicit stepping on long diffusions?',
        options: ['It needs no boundary conditions', 'It is unconditionally stable with second-order time accuracy', 'It solves ODEs instead of PDEs', 'It uses no linear algebra'],
        answer: 1,
        explanation: 'Step 1: Explicit steps are chained to the quadratic mesh cap. Step 2: Crank-Nicolson averages old and new Laplacians. Step 3: That average is second order in time and stable at any step. Step 4: Each step pays a cheap tridiagonal solve for that freedom.'
      }
    ]
  },
  // ---------------------------------------------------------------- 13.4
  {
    sectionId: 'engmath-ch13-s4',
    readingTime: 8,
    intro: 'Optimization turns calculus into an iterative descent down the objective landscape, while linear programming exploits the flat geometry of linear constraints. Steepest descent follows the negative gradient and Newton steps bend it with curvature information. This section pairs those unconstrained iterations with the standard form, vertex theorem and simplex walk of linear programs.',
    objectives: [
      'Take steepest-descent and Newton steps on small unconstrained problems',
      'Write linear programs in standard form and locate optima at vertices',
      'Trace the simplex idea of improving basic feasible solutions'
    ],
    concepts: [
      {
        term: 'Steepest descent follows the negative gradient',
        kind: 'method',
        statement: '**Steepest descent** steps `$x_{k+1} = x_{k} - \\alpha_{k} \\nabla f(x_{k})$` along the locally fastest downhill direction, choosing `grad` `$\\alpha_{k}$` by line search or a fixed safe value. It converges reliably but zigzags across narrow valleys, since each step is orthogonal to the last under exact line search. Preconditioning or momentum fixes the zigzag, but plain descent remains the baseline every fancier method must beat.',
        detail: 'On `$f(x, y) = x^{2} + 2y^{2}$` from `$(2, 1)$` with `$\\alpha = 0.25$`, one step lands exactly on `$(1, 0)$`, halving the landscape in a stride.'
      },
      {
        term: 'Newton step bends descent with curvature',
        kind: 'method',
        statement: 'The **Newton step** `$x_{k+1} = x_{k} - H^{-1}\\nabla f$` rescales the gradient by the inverse Hessian `$H$`, striding directly to the minimum of the local quadratic model in the `hess` update. Near a minimum with positive-definite curvature it converges quadratically, collapsing in a handful of steps what descent needs hundreds for. Far away or under indefinite curvature it needs damping or trust regions to stay downhill.',
        detail: 'On a pure quadratic with positive-definite `$H$`, one full Newton step reaches the exact minimizer from anywhere.'
      },
      {
        term: 'Linear programs and the vertex theorem',
        kind: 'theorem',
        statement: 'A **linear program** maximizes `$c^{T}x$` over linear inequalities, and its feasible set is a convex polygon whose **optimum sits at a vertex** whenever one exists in the `lp` geometry. Interior points can always slide toward a corner without losing objective value, so searching vertices suffices. Corner-point enumeration therefore solves every small textbook LP exactly, and the simplex method scales that insight to high dimensions.',
        detail: 'Unbounded feasible sets may push the optimum to infinity along an edge ray, the detectable failure mode of the vertex search.'
      },
      {
        term: 'Simplex walk between basic feasible solutions',
        kind: 'method',
        statement: 'The **simplex method** hops from vertex to neighboring vertex, each step swapping one basic variable out and one in while the objective improves in the `simplex` tableau. Optimality is certified when no improving swap remains, i.e. all reduced costs point downhill-out. Degeneracy can stall progress at one vertex, handled by anti-cycling rules that textbooks note and codes implement quietly.',
        detail: 'Each tableau pivot is Gauss elimination on one column, so the whole optimizer rides on the linear algebra of chapter 12.'
      },
      {
        term: 'Duality bounds every primal guess',
        kind: 'insight',
        statement: '**Duality** pairs each maximization with a minimization whose every feasible value bounds the primal optimum from above, giving a free quality certificate through the `dual` gap. Shrinking the primal-dual gap to zero proves optimality without enumerating anything further. Weak duality holds for any feasible pair while strong duality closes the gap at compatible optima, the theoretical backbone of modern solvers.',
        detail: 'A primal profit of `$11$` beside a dual cost of `$12$` certifies the optimum inside `$[11, 12]$` before either side finishes.'
      }
    ],
    figures: [
      {
        caption: 'Descent on elliptical contours of $f$: the negative gradient arrow cuts across contours while the Newton arrow aims at the center, and the shaded LP polygon nearby shows vertices where linear optima sit.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gradient descent arrows on contours and a linear programming polygon"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Downhill steps and LP corners</text><ellipse cx="220" cy="200" rx="130" ry="90" fill="none" stroke="currentColor" stroke-width="1.5"/><ellipse cx="220" cy="200" rx="85" ry="58" fill="none" stroke="currentColor" stroke-width="1.5"/><ellipse cx="220" cy="200" rx="42" ry="28" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="220" cy="200" r="5" fill="currentColor"/><line x1="330" y1="260" x2="270" y2="225" stroke="currentColor" stroke-width="2"/><polygon points="270,225 280,228 274,218" fill="currentColor"/><text x="335" y="280" font-family="sans-serif" font-size="12" fill="currentColor">neg grad</text><line x1="330" y1="150" x2="240" y2="192" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><polygon points="240,192 250,196 244,186" fill="currentColor"/><text x="335" y="145" font-family="sans-serif" font-size="12" fill="currentColor">newton (dashed)</text><polygon points="470,250 620,250 620,150 540,120 470,180" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="620" cy="150" r="7" fill="currentColor"/><text x="620" y="135" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">opt</text><text x="545" y="285" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">feasible polygon</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'One steepest-descent step on a quadratic bowl',
        problem: 'Take one steepest-descent step with `$\\alpha = 0.25$` on `$f(x, y) = x^{2} + 2y^{2}$` from `$(2, 1)$`.',
        steps: [
          { label: 'Step 1: Gradient at the start', text: 'Differentiate to `$\\nabla f = (2x, 4y)$`, which at `$(2, 1)$` equals `$(4, 4)$`. The negative gradient points down-left, steepest in the `$y$` direction because of the coefficient `$2$`.' },
          { label: 'Step 2: Step downhill', text: 'Update `$(2, 1) - 0.25 \\times (4, 4) = (1, 0)$`. The objective falls from `$4 + 2 = 6$` to `$1 + 0 = 1$`, an excellent single stride on this well-scaled bowl.' },
          { label: 'Step 3: Note the next direction', text: 'At `$(1, 0)$` the gradient is `$(2, 0)$`, horizontal and orthogonal to the previous step, previewing the zigzag pattern exact line searches produce in valleys.' }
        ],
        result: 'One step reaches `$(1, 0)$` with objective dropping from `$6$` to `$1$`.'
      },
      {
        title: 'Corner-point solution of a two-variable LP',
        problem: 'Maximize `$3x + 2y$` subject to `$x + y \\le 4$` and `$x \\le 3$` with `$x, y \\ge 0$`, by enumerating vertices.',
        steps: [
          { label: 'Step 1: List the vertices', text: 'The polygon corners are `$(0, 0)$`, `$(3, 0)$`, `$(3, 1)$` where `$x = 3$` meets `$x + y = 4$`, and `$(0, 4)$`. Each corner is the crossing of two constraint lines.' },
          { label: 'Step 2: Score each corner in code', text: '```python\nverts = [(0,0),(3,0),(3,1),(0,4)]\nbest = max(verts, key=lambda v: 3*v[0] + 2*v[1])\nprint(best, 3*best[0] + 2*best[1])  # (3, 1) 11\n```\nScores are `$0, 9, 11, 8$`, so the script reports `(3, 1)` with value `11`.' },
          { label: 'Step 3: Certify by the vertex theorem', text: 'Linearity guarantees no interior point beats the best corner, so `(3, 1)` with `$11$` is the proven optimum. A simplex run would walk `(0,0)` to `(3,0)` to `(3,1)` along improving edges.' }
        ],
        result: 'Optimum `(3, 1)` with value `$11$`, certified by corner enumeration.'
      }
    ],
    keyTakeaways: [
      'Steepest descent `$x - \\alpha\\nabla f$` is robust but zigzags, while Newton `$x - H^{-1}\\nabla f$` converges quadratically near minima.',
      'Linear programs optimize over polygons, so the vertex theorem reduces the search to corners.',
      'Simplex improves basic feasible solutions edge by edge until reduced costs certify optimality.',
      'Dual feasible values bound the primal optimum, and a zero gap proves optimality.'
    ],
    quiz: [
      {
        q: 'Steepest descent with exact line search takes two consecutive steps. How do their directions relate?',
        options: ['Parallel', 'Orthogonal', 'Opposite', 'Identical'],
        answer: 1,
        explanation: 'Step 1: Exact search minimizes along the current line. Step 2: Optimality there zeroes the directional derivative. Step 3: The next gradient is thus orthogonal to the old direction. Step 4: Repeated orthogonality produces the famous zigzag in valleys.'
      },
      {
        q: 'Newton method on the 1D quadratic `$f(x) = 2x^{2} - 8x + 1$` starts at `$x = 0$`. Where does one full step land?',
        options: [`$0$`, `$1$`, `$2$`, `$4$`],
        answer: 2,
        explanation: 'Step 1: Differentiate to gradient 4x minus 8, giving minus 8 at 0. Step 2: The Hessian is the constant 4. Step 3: The Newton correction is minus 8 divided by 4, i.e. minus 2 with sign flipped. Step 4: Adding 2 to 0 lands exactly on the minimizer 2.'
      },
      {
        q: 'A bounded feasible LP attains its optimum where?',
        options: ['At a vertex of the feasible polygon', 'Strictly inside the polygon only', 'At every feasible point equally', 'Outside the feasible region'],
        answer: 0,
        explanation: 'Step 1: The feasible set is convex with linear objective. Step 2: Sliding from any interior point toward a corner never hurts the objective. Step 3: Hence some vertex matches or beats every point. Step 4: Enumeration or simplex therefore suffices for optimality.'
      },
      {
        q: 'A primal feasible profit is `$11$` and a dual feasible cost is `$12$`. What is certified?',
        options: ['The optimum equals 11 exactly', 'The optimum equals 12 exactly', 'The optimum lies between 11 and 12', 'Both solutions are infeasible'],
        answer: 3,
        explanation: 'Step 1: Weak duality says dual values bound primal values above. Step 2: So the primal optimum is at most 12. Step 3: Primal feasibility says the optimum is at least 11. Step 4: Together they trap the optimum inside the interval from 11 to 12.'
      }
    ]
  }
]

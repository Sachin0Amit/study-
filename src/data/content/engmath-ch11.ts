import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 11: Numeric Methods: Rounding,
// Interpolation & Quadrature (Kreyszig 10e, Part E, Chapter 19).
// Sections 11.1 – 11.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh11Content: SectionContent[] = [
  // ---------------------------------------------------------------- 11.1
  {
    sectionId: 'engmath-ch11-s1',
    readingTime: 8,
    intro: 'Every number stored on a computer is rounded to a finite floating-point grid, so each arithmetic step carries a small roundoff error. Practical computing also truncates infinite processes such as series and iterations, and both error sources propagate through every later step. This section separates the error types, measures them with absolute and relative error, and shows how conditioning of the problem and stability of the algorithm decide the final accuracy.',
    objectives: [
      'Distinguish roundoff error from truncation error and name the source of each in a given computation',
      'Compute absolute and relative errors and propagate them through sums, differences, products and quotients',
      'Explain conditioning versus stability and spot subtractive cancellation before it ruins a result'
    ],
    concepts: [
      {
        term: 'Floating-point form and the unit roundoff',
        kind: 'definition',
        statement: 'A normalized decimal floating-point number has the **form** `$x = \\pm m \\times 10^{e}$` with the mantissa `$m$` confined to a fixed digit window, so `fl(x)` denotes the nearest storable value and the spacing near `$x$` sets the local rounding scale. The **unit roundoff** `$u$` bounds every single rounding by `$|fl(x) - x| \\le u\\,|x|$`, which says each stored value is correct to a fixed relative precision. Widening the mantissa shrinks `$u$` but never removes it, so error analysis always budgets one unit roundoff per operation.',
        detail: 'With `$p$` decimal digits the unit roundoff is `$u = \\frac{1}{2} \\times 10^{1-p}$`, hence four-digit arithmetic rounds each result to about three or four trustworthy significant figures.'
      },
      {
        term: 'Roundoff versus truncation error',
        kind: 'definition',
        statement: '**Roundoff error** comes from finite-precision storage, for example keeping only four digits of `$\\pi$`, while **truncation error** comes from cutting off an infinite mathematical process such as a Taylor series or an iteration limit. The `roundoff` source shrinks when precision grows, whereas the `trunc` source shrinks when more terms or smaller steps are taken. Naming the dominant source correctly decides the cure: higher precision for roundoff, finer discretization for truncation.',
        detail: 'Stopping the exponential series after the cubic term is truncation even in exact arithmetic, while rounding the kept terms to four digits adds roundoff on top.'
      },
      {
        term: 'Absolute and relative error with propagation rules',
        kind: 'theorem',
        statement: 'For a true value `$x$` and approximation `$\\tilde{x}$`, the **absolute error** is `$|x - \\tilde{x}|$` and the **relative error** is `$|x - \\tilde{x}| \\div |x|$`, written with `abserr` for scale and `relerr` for quality. To first order, absolute errors add in sums and differences while **relative errors add** in products and quotients, so `$\\tilde{z} = \\tilde{x}\\tilde{y}$` inherits the sum of the two relative errors. Relative error is the honest measure whenever values differ in magnitude, because an absolute error of `$0.01$` is superb near `$100$` but useless near `$0.02$`.',
        detail: 'A difference `$x - y$` of nearly equal numbers can have a gigantic relative error even when both absolute errors are tiny, which is exactly the cancellation trap described below.'
      },
      {
        term: 'Conditioning belongs to the problem, stability to the algorithm',
        kind: 'insight',
        statement: '**Conditioning** is a property of the mathematical problem itself: a well-conditioned problem changes its answer only mildly under small input changes, while an ill-conditioned one amplifies them. **Stability** is a property of the algorithm: a `stable` method keeps rounding growth proportional to the problem conditioning, whereas an unstable method magnifies rounding far beyond it. Blaming the algorithm for an ill-conditioned problem, or the problem for an unstable algorithm, leads to the wrong fix every time.',
        detail: 'Subtracting two nearly equal measured quantities is ill-conditioned no matter how carefully coded, so the remedy is reformulating the mathematics rather than adding digits.'
      },
      {
        term: 'Subtractive cancellation destroys significant digits',
        kind: 'method',
        statement: '**Subtractive cancellation** strikes when two nearly equal rounded numbers are subtracted: the leading digits cancel and the unrounded tail becomes the whole answer, often leaving zero correct figures. The `cancel` guard is to rewrite first, for example replacing `$\\sqrt{x + \\delta} - \\sqrt{x}$` by `$\\dfrac{\\delta}{\\sqrt{x + \\delta} + \\sqrt{x}}$` before any arithmetic. Equivalent reformulations such as `$x^{2} - y^{2} = (x - y)(x + y)$` move the subtraction away from nearly equal large values and rescue the computation.',
        detail: 'With `$x = 100.01$` and `$y = 100.00$` stored to five figures, the difference `$0.01$` carries the rounding of the fifth digit as a dominant relative error.'
      }
    ],
    figures: [
      {
        caption: 'Rounding grid near $x = 2.5$: the true value falls between grid points, `fl(x)` snaps to the nearest one, and the gap $|x - \\mathrm{fl}(x)|$ is the roundoff error of that single storage step.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line with rounding grid, true value and stored value"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Rounding to a floating-point grid</text><line x1="60" y1="220" x2="660" y2="220" stroke="currentColor" stroke-width="2"/><line x1="120" y1="210" x2="120" y2="230" stroke="currentColor" stroke-width="2"/><line x1="240" y1="210" x2="240" y2="230" stroke="currentColor" stroke-width="2"/><line x1="360" y1="210" x2="360" y2="230" stroke="currentColor" stroke-width="2"/><line x1="480" y1="210" x2="480" y2="230" stroke="currentColor" stroke-width="2"/><line x1="600" y1="210" x2="600" y2="230" stroke="currentColor" stroke-width="2"/><text x="120" y="255" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">2.48</text><text x="240" y="255" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">2.49</text><text x="360" y="255" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">2.50</text><text x="480" y="255" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">2.51</text><text x="600" y="255" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">2.52</text><circle cx="408" cy="220" r="8" fill="currentColor"/><text x="408" y="185" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">true x</text><circle cx="360" cy="220" r="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="185" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">fl(x)</text><line x1="368" y1="140" x2="400" y2="140" stroke="currentColor" stroke-width="1.5"/><polygon points="400,140 392,135 392,145" fill="currentColor"/><line x1="368" y1="140" x2="336" y2="140" stroke="currentColor" stroke-width="1.5"/><polygon points="336,140 344,135 344,145" fill="currentColor"/><text x="368" y="122" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">roundoff</text><text x="120" y="310" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">grid spacing sets the unit roundoff u</text><text x="600" y="310" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">truncation is separate: fewer terms</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Round a constant and measure both errors',
        problem: 'Round $x = \\pi = 3.14159265\\ldots$ to four places after the point, giving `$\\tilde{x} = 3.1416$`, and compute the absolute and relative errors.',
        steps: [
          { label: 'Step 1: Identify the rounding move', text: 'The fifth decimal digit of `$\\pi$` is `$9$`, so rounding to four places pushes the fourth digit up and stores `$\\tilde{x} = 3.1416$`. This is pure `roundoff` from storage, since no series was cut off.' },
          { label: 'Step 2: Absolute error', text: 'Subtract the true value: `$|x - \\tilde{x}| = |3.14159265 - 3.1416| = 0.00000735 \\approx 7.4 \\times 10^{-6}$`. The absolute error sits below one unit in the last kept place, exactly as the unit-roundoff bound promises.' },
          { label: 'Step 3: Relative error', text: 'Divide by the magnitude: `$7.35 \\times 10^{-6} \\div 3.14159265 \\approx 2.34 \\times 10^{-6}$`. Four stored digits deliver about four correct significant figures, and the relative error reports that quality in one number.' }
        ],
        result: 'Absolute error about `$7.4 \\times 10^{-6}$` and relative error about `$2.3 \\times 10^{-6}$`, consistent with four-digit rounding.'
      },
      {
        title: 'Propagate relative errors through a product',
        problem: 'Measurements give `$x = 5.00$` with relative error `$0.002$` and `$y = 4.00$` with relative error `$0.003$`. Estimate `$z = xy$` and bound its relative error, then confirm with a short script.',
        steps: [
          { label: 'Step 1: Nominal product', text: 'Multiply the readings: `$z = 5.00 \\times 4.00 = 20.0$`. The nominal value uses the readings as stored, ignoring their uncertainty bands for a moment.' },
          { label: 'Step 2: Add the relative errors', text: '```python\nx, rx = 5.00, 0.002\ny, ry = 4.00, 0.003\nz = x * y\nrz = rx + ry  # relative errors add for products\nprint(z, rz, z * rz)  # 20.0 0.005 0.1\n```\nFor products the relative-error rule gives `$r_{z} \\approx 0.002 + 0.003 = 0.005$`, so the absolute band is `$20.0 \\times 0.005 = 0.10$` and `$z = 20.0 \\pm 0.1$`.' },
          { label: 'Step 3: Sanity check the size', text: 'A half-percent relative error on a value near `$20$` must give an absolute band near `$0.1$`, and it does. Had this been a difference of nearly equal readings instead, the same absolute bands would have produced a far worse relative error.' }
        ],
        result: '`$z = 20.0 \\pm 0.1$`, i.e. relative error about `$0.005$`, confirmed by the script output `20.0 0.005 0.1`.'
      }
    ],
    keyTakeaways: [
      'Roundoff comes from finite storage while truncation comes from cutting an infinite process, and each needs its own cure.',
      'Relative error `$|x - \\tilde{x}| \\div |x|$` measures quality; absolute errors add in sums and relative errors add in products.',
      'Conditioning describes the problem and stability describes the algorithm, so diagnose which one fails before fixing.',
      'Rewrite subtractions of nearly equal numbers first, since cancellation destroys digits that extra precision cannot recover.'
    ],
    quiz: [
      {
        q: 'Rounding `$2.647$` to two places after the point gives which stored value?',
        options: [`$2.64$`, `$2.65$`, `$2.647$`, `$2.60$`],
        answer: 1,
        explanation: 'Step 1: Look at the third decimal digit, which is 7. Step 2: Since 7 reaches at least 5, round the second place up from 4 to 5. Step 3: The stored value is 2.65 with absolute error 0.003. Step 4: Keeping all three digits would mean no rounding happened at all.'
      },
      {
        q: 'A program sums the exponential series up to the cubic term and then rounds each kept term to four digits. The series cutoff itself is an example of which error?',
        options: ['Roundoff error', 'Ill-conditioning', 'Algorithm instability', 'Truncation error'],
        answer: 3,
        explanation: 'Step 1: Separate the two actions: cutting the infinite series and rounding the kept terms. Step 2: The cutoff discards the tail 0.00847 and further terms, which is truncation by definition. Step 3: The four-digit rounding is a second, smaller roundoff layer on top. Step 4: Finer precision would shrink only the rounding, while more series terms shrink the truncation.'
      },
      {
        q: 'A true length is `$10.0$` and the measured value is `$10.2$`. What is the relative error?',
        options: [`$0.02$`, `$0.2$`, `$0.002$`, `$2$`],
        answer: 0,
        explanation: 'Step 1: Compute absolute error as the gap 10.2 minus 10.0, giving 0.2. Step 2: Divide by the true magnitude 10.0. Step 3: The quotient 0.2 divided by 10.0 equals 0.02. Step 4: As a percentage that is a 2 percent measurement error.'
      },
      {
        q: 'Two slightly different inputs give wildly different outputs, yet the residual of the computed answer is tiny. What does this pattern signal?',
        options: ['A stable algorithm on a well-conditioned problem', 'Pure roundoff with no structural cause', 'An ill-conditioned problem rather than a coding bug', 'Truncation error dominating roundoff'],
        answer: 2,
        explanation: 'Step 1: A tiny residual means the algorithm solved the nearby problem faithfully, so stability holds. Step 2: Wild output swings from small input changes are the signature of ill-conditioning. Step 3: Adding precision cannot remove sensitivity built into the mathematics. Step 4: The correct fix is reformulating the problem, for example rescaling or avoiding the cancellation.'
      }
    ]
  },
  // ---------------------------------------------------------------- 11.2
  {
    sectionId: 'engmath-ch11-s2',
    readingTime: 9,
    intro: 'Interpolation rebuilds a function between measured points by fitting a polynomial through them, and it underlies spline fitting plus the quadrature rules of the next sections. The Lagrange form writes the answer down directly while Newton divided differences build it incrementally. This section pairs each construction with its error term and ends at cubic splines, the piecewise smooth fits used whenever one global polynomial would oscillate.',
    objectives: [
      'Build Lagrange and Newton divided-difference interpolants through small node sets and evaluate them',
      'Apply the interpolation error term to bound the mistake at a new point',
      'State the cubic spline conditions and explain why splines beat high-degree global polynomials'
    ],
    concepts: [
      {
        term: 'Lagrange basis and the interpolant',
        kind: 'method',
        statement: 'For distinct nodes `$x_{0}, \\ldots, x_{n}$` the **Lagrange basis** polynomial `$l_{k}(x)$` equals `$1$` at `$x_{k}$` and `$0$` at every other node, built as a product of factors `$(x - x_{j}) \\div (x_{k} - x_{j})$` over `$j \\ne k$`. The **interpolant** `$p_{n}(x) = \\sum_{k} y_{k} l_{k}(x)$` is then the unique degree-at-most-`$n$` polynomial through the data, and the `lagrange` recipe needs no linear system at all. Each data value `$y_{k}$` simply scales its own cardinal function, so adding precision to one measurement only touches one term.',
        detail: 'Through two points the formula collapses to the straight line, and through three points it gives the unique parabola, matching geometric intuition exactly.'
      },
      {
        term: 'Interpolation error term',
        kind: 'theorem',
        statement: 'When `$f$` has `$n+1$` continuous derivatives, the **remainder** at a new `$x$` is `$R_{n}(x) = \\dfrac{f^{(n+1)}(\\xi)}{(n+1)!} \\prod_{i}(x - x_{i})$` for some `$\\xi$` spanning the nodes, evaluated with the `errterm` bound by maximizing each factor separately. The product factor vanishes at every node, which is why interpolation is exact on the data and worst midway between nodes. Smoother `$f$` and tighter node spacing both shrink the bound, and the factorial in the denominator eventually dominates any fixed derivative growth.',
        detail: 'For linear interpolation the bound simplifies to one half of the maximum second derivative times the node-product, largest at the interval midpoint.'
      },
      {
        term: 'Newton divided differences',
        kind: 'method',
        statement: '**Divided differences** build the same interpolant incrementally: `$f[x_{i}] = y_{i}$`, then `$f[x_{i}, x_{i+1}] = (y_{i+1} - y_{i}) \\div (x_{i+1} - x_{i})$`, with higher orders formed by differencing the previous column in the `divdiff` table. The nested Newton form `$p_{n}(x) = f[x_{0}] + f[x_{0},x_{1}](x - x_{0}) + \\cdots$` evaluates cheaply by Horner-like grouping from the inside out. A newly measured node appends one table diagonal instead of restarting the whole fit, which is the practical edge over Lagrange.',
        detail: 'The top diagonal of the table holds exactly the Newton coefficients, read left to right as the constant, linear, quadratic and higher corrections.'
      },
      {
        term: 'Node placement and the oscillation warning',
        kind: 'insight',
        statement: 'Equally spaced high-degree interpolation can **oscillate wildly** near the interval ends even for smooth `$f$`, the Runge phenomenon, so degree is not a quality dial to turn up freely. The `nodes` lesson is to keep global degree low, cluster nodes where `$f$` bends most, or switch to piecewise fits. Chebyshev-style clustering minimizes the node-product in the error term and tames the edge oscillations that uniform grids provoke.',
        detail: 'A degree-ten fit through eleven uniform points of a steep bell shape can overshoot by large factors at the edges while a spline through the same points stays calm.'
      },
      {
        term: 'Cubic splines with natural end conditions',
        kind: 'definition',
        statement: 'A **cubic spline** joins a separate cubic across each interval so that function values, first derivatives and second derivatives all match at interior nodes, giving visibly smooth `spline` curves with continuous curvature. The **natural** end conditions pin `$M_{0} = M_{n} = 0$` for the endpoint second derivatives, which lets the curve run straight beyond the data instead of curling. Solving one tridiagonal system for the moments `$M_{i}$` fixes every piece at once, costing only linear effort in the number of nodes.',
        detail: 'Each spline piece is cubic, yet the whole fit uses only quadratically many coefficients globally because smoothness ties neighboring pieces together.'
      }
    ],
    figures: [
      {
        caption: 'Three nodes with the Lagrange parabola $p(x)$ through them, plus the spline alternative: smooth cubic pieces with matching slope and curvature at the middle node instead of one global swing.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nodes with interpolating parabola and spline comparison"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Interpolation through three nodes</text><line x1="60" y1="300" x2="660" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="300" x2="60" y2="70" stroke="currentColor" stroke-width="1.5"/><path d="M 120 260 Q 300 250 380 190 T 600 90" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M 120 260 Q 250 255 380 190 M 380 190 Q 480 130 600 90" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><circle cx="120" cy="260" r="8" fill="currentColor"/><circle cx="380" cy="190" r="8" fill="currentColor"/><circle cx="600" cy="90" r="8" fill="currentColor"/><text x="120" y="285" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">x0</text><text x="380" y="285" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">x1</text><text x="600" y="285" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">x2</text><text x="500" y="200" font-family="sans-serif" font-size="13" font-weight="bold" fill="currentColor">p(x) solid</text><text x="500" y="222" font-family="sans-serif" font-size="13" fill="currentColor">spline dashed</text><text x="380" y="168" font-family="sans-serif" font-size="12" font-style="italic" text-anchor="middle" fill="currentColor">slopes match here</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Quadratic Lagrange fit through three points',
        problem: 'Fit the unique parabola through `$(0, 1)$`, `$(1, 3)$` and `$(2, 7)$`, then evaluate it at `$x = 3$`.',
        steps: [
          { label: 'Step 1: Divided-difference table', text: 'First-order differences are `$(3 - 1) \\div (1 - 0) = 2$` and `$(7 - 3) \\div (2 - 1) = 4$`, and the second-order difference is `$(4 - 2) \\div (2 - 0) = 1$`. The Newton form is therefore `$p(x) = 1 + 2x + x(x - 1)$`, which simplifies to `$p(x) = 1 + x + x^{2}$`.' },
          { label: 'Step 2: Verify on the nodes', text: 'Check `$p(0) = 1$`, `$p(1) = 1 + 1 + 1 = 3$` and `$p(2) = 1 + 2 + 4 = 7$`, so all three data points are reproduced exactly as the uniqueness theorem demands.' },
          { label: 'Step 3: Extrapolate to x = 3', text: 'Evaluate `$p(3) = 1 + 3 + 9 = 13$`. Note this value lies outside the node span, so unlike interpolation it carries no error-term guarantee and must be reported with caution.' }
        ],
        result: 'The interpolant is `$p(x) = 1 + x + x^{2}$` with `$p(3) = 13$`.'
      },
      {
        title: 'Bound the linear-interpolation error for the exponential',
        problem: 'Bound the error of linear interpolation of `$f(x) = e^{x}$` on `$[0, 1]$` at any interior point, using the remainder term.',
        steps: [
          { label: 'Step 1: Write the n = 1 remainder', text: '```text\nR1(x) = f\\(xi)/2 * (x-0)*(x-1),  xi in [0,1]\nf\\(x) = e^x <= e ≈ 2.718 on [0,1]\nmax |(x)(x-1)| on [0,1] = 0.25 at x = 0.5\n```\nThe `errterm` bound is `$|R_{1}(x)| \\le \\dfrac{\\max e^{x}}{2} \\times 0.25$`.' },
          { label: 'Step 2: Insert the maximum derivative', text: 'Since `$e^{x}$` increases, its maximum on `$[0,1]$` is `$e \\approx 2.718$`, giving `$|R_{1}| \\le 2.718 \\div 8 \\approx 0.34$`. True linear interpolation `$1 + (e-1)x$` deviates from `$e^{x}$` by at most about `$0.075$`, comfortably inside the bound.' },
          { label: 'Step 3: Read the lesson', text: 'The bound is pessimistic but rigorous: halving the interval would quarter it because the node-product scales with `$h^{2}$`. That scaling argument is exactly what motivates composite rules later.' }
        ],
        result: 'Uniform error bound `$|R_{1}(x)| \\le e \\div 8 \\approx 0.34$` on `$[0,1]$`.'
      }
    ],
    keyTakeaways: [
      'Lagrange writes the degree-`$n$` interpolant directly while Newton divided differences build it incrementally with cheap updates.',
      'The remainder `$f^{(n+1)}(\\xi) \\div (n+1)!$` times the node product vanishes at nodes and peaks between them.',
      'High-degree uniform fits can oscillate, so cluster nodes or drop the degree where the function bends.',
      'Natural cubic splines enforce continuous slope and curvature with `$M_{0} = M_{n} = 0$` for smooth piecewise fits.'
    ],
    quiz: [
      {
        q: 'A unique interpolant is built through `$5$` distinct nodes. What is its maximum possible degree?',
        options: [`$5$`, `$6$`, 'The interpolant is always a straight line', `$4$`],
        answer: 3,
        explanation: 'Step 1: Recall n plus 1 nodes determine degree at most n. Step 2: Here 5 nodes give n equal to 4. Step 3: So the degree cannot exceed 4. Step 4: Fewer points would lower, never raise, that ceiling.'
      },
      {
        q: 'For the nodes `$(0, 1)$`, `$(1, 3)$`, `$(2, 7)$`, what is the second divided difference `$f[0, 1, 2]$`?',
        options: [`$1$`, `$2$`, `$3$`, `$4$`],
        answer: 0,
        explanation: 'Step 1: First differences are 2 and 4 as computed in the worked example. Step 2: Difference them: 4 minus 2 gives 2. Step 3: Divide by the outer span 2 minus 0, giving 1. Step 4: That constant 1 is the quadratic coefficient of the interpolant.'
      },
      {
        q: 'Which end condition defines a natural cubic spline?',
        options: ['Clamped endpoint slopes matching the data trend', 'Periodic wrap-around of all derivatives', 'Zero second derivatives `$M_{0} = M_{n} = 0$` at both ends', 'Straight-line pieces between every node pair'],
        answer: 2,
        explanation: 'Step 1: A cubic spline already enforces continuous value, slope and curvature inside. Step 2: Two extra end conditions are still free. Step 3: The natural choice pins both endpoint second derivatives to 0. Step 4: Clamped or periodic choices serve different applications, not the natural spline.'
      },
      {
        q: 'A smooth function interpolated by one high-degree polynomial on uniform nodes wiggles badly near the ends. What is the standard remedy?',
        options: ['Raise the degree further until it settles', 'Use piecewise low-degree fits such as splines', 'Round all data to fewer digits', 'Extrapolate instead of interpolating'],
        answer: 1,
        explanation: 'Step 1: Identify the symptom as Runge-type edge oscillation. Step 2: Higher uniform degree amplifies rather than cures it. Step 3: Piecewise cubics keep each piece low-degree and smooth. Step 4: Node clustering is the alternative fix; rounding or extrapolating misses the cause.'
      }
    ]
  },
  // ---------------------------------------------------------------- 11.3
  {
    sectionId: 'engmath-ch11-s3',
    readingTime: 9,
    intro: 'Numeric differentiation replaces derivatives with difference quotients while numeric integration replaces areas with weighted function values. The trapezoidal rule joins neighbors with straight segments and Simpson rule fits parabolas, each with a precise error bound. This section derives the three standard quotients and both quadrature rules so that the error formulas can be used to choose step sizes deliberately.',
    objectives: [
      'Approximate first derivatives with forward, backward and central quotients and state their error orders',
      'Apply the trapezoidal and Simpson rules with their derivative-based error bounds',
      'Use degree of precision and step-halving scaling to predict accuracy gains'
    ],
    concepts: [
      {
        term: 'Forward, backward and central difference quotients',
        kind: 'method',
        statement: 'The **forward quotient** `$(f(x+h) - f(x)) \\div h$` and its backward mirror estimate `$f^{\\prime}(x)$` to first order in `diffquot` form, while the **central quotient** `$(f(x+h) - f(x-h)) \\div (2h)$` cancels the linear error terms and reaches second order. Central differencing therefore buys an extra power of `$h$` at the price of one more function evaluation, the standard accuracy-versus-cost trade. One-sided quotients stay mandatory at domain boundaries where the symmetric stencil would reach outside the data.',
        detail: 'Taylor expansion shows forward error `$\\frac{1}{2}hf^{\\prime\\prime}$` against central error `$\\frac{1}{6}h^{2}f^{\\prime\\prime\\prime}$`, which is why halving `$h$` halves one-sided error but quarters central error.'
      },
      {
        term: 'Step-size tradeoff between truncation and roundoff',
        kind: 'theorem',
        statement: 'Shrinking `$h$` reduces the **truncation** part like `$h$` or `$h^{2}$` but inflates the **roundoff** part like `$\\varepsilon \\div h$`, because nearly equal function values are subtracted and divided by a tiny `stepsize`. The total error curve therefore dips to an optimal `$h$` and then rises again, so blindly tiny steps are measurably worse than moderate ones. Balancing the two terms gives `$h \\approx \\sqrt{\\varepsilon}$` for one-sided and `$h \\approx \\varepsilon^{1/3}$` for central quotients in unit-roundoff `$\\varepsilon$` arithmetic.',
        detail: 'With `$\\varepsilon \\approx 10^{-16}$`, central differences bottom out near `$h = 10^{-5}$`, far above the smallest representable step.'
      },
      {
        term: 'Trapezoidal rule and its error bound',
        kind: 'theorem',
        statement: 'The **trapezoidal rule** `$T = \\dfrac{h}{2}(f_{0} + f_{1})$` integrates the linear interpolant, and over `$[a, b]$` its error obeys `$E_{T} = -\\dfrac{b-a}{12} h^{2} f^{\\prime\\prime}(\\xi)$` for some interior `trap` point `$\\xi$`. Curvature `$f^{\\prime\\prime}$` drives the mistake: straight functions integrate exactly while strongly bent ones do not. The bound lets a solver certify accuracy before computing, by maximizing the second derivative over the interval once.',
        detail: 'Doubling the point count halves `$h$` and quarters the trapezoidal error, the quadratic signature used to validate code against theory.'
      },
      {
        term: 'Simpson rule and its error bound',
        kind: 'theorem',
        statement: 'The **Simpson rule** `$S = \\dfrac{h}{3}(f_{0} + 4f_{1} + f_{2})$` integrates the parabola through three equally spaced values, with error `$E_{S} = -\\dfrac{b-a}{180} h^{4} f^{(4)}(\\xi)$` governed by the fourth `simpson` derivative. Because symmetric cancellation wipes out the cubic term too, Simpson is exact through cubics despite using only quadratics. The `$h^{4}$` rate means halving `$h$` divides the error by sixteen, a dramatic payoff for smooth integrands.',
        detail: 'Simpson needs an even number of subintervals so the points group into parabolic panels, with the 4-2-4-2 weighting pattern across interior nodes.'
      },
      {
        term: 'Degree of precision as a quick exactness test',
        kind: 'insight',
        statement: '**Degree of precision** names the highest polynomial degree a rule integrates exactly: one for the trapezoidal rule and three for Simpson, a bonus order earned by symmetry in the `dop` column. Testing a new implementation on `$1, x, x^{2}, x^{3}$` exposes weighting bugs instantly, since each monomial has a known exact integral. Any rule failing its advertised precision is miscoded, not unlucky, so this check precedes all real applications.',
        detail: 'Midpoint single-panel integration shares precision one with trapezoidal but with half the error constant, a frequent source of quick comparison questions.'
      }
    ],
    figures: [
      {
        caption: 'One panel of width $h$: the trapezoidal rule integrates the chord while Simpson rule integrates the parabola, and the shaded gap between curve and chord visualizes $|E_{T}|$ shrinking like $h^{2}$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trapezoid chord versus Simpson parabola under a curve"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Chord versus parabola in one panel</text><path d="M 90 270 Q 230 120 370 200 T 650 150" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="90" y1="270" x2="370" y2="200" stroke="currentColor" stroke-width="1.8"/><line x1="90" y1="270" x2="90" y2="300" stroke="currentColor" stroke-width="1"/><line x1="370" y1="200" x2="370" y2="300" stroke="currentColor" stroke-width="1"/><line x1="90" y1="300" x2="370" y2="300" stroke="currentColor" stroke-width="1"/><path d="M 90 270 Q 230 190 370 200" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="7 5"/><text x="200" y="330" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">trapezoid: chord (solid straight)</text><text x="500" y="330" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">simpson: parabola (dashed)</text><text x="250" y="225" font-family="sans-serif" font-size="12" font-style="italic" fill="currentColor">gap = error</text><circle cx="90" cy="270" r="6" fill="currentColor"/><circle cx="370" cy="200" r="6" fill="currentColor"/><circle cx="230" cy="205" r="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="230" y="180" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">midpoint f1</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Trapezoidal estimate of the exponential integral',
        problem: 'Estimate `$I = \\int_{0}^{1} e^{x} \\, dx = e - 1 \\approx 1.71828$` with one trapezoidal panel and certify the error with the bound.',
        steps: [
          { label: 'Step 1: Apply the single-panel rule', text: 'With `$h = 1$`, `$f_{0} = 1$` and `$f_{1} = e \\approx 2.71828$`, the rule gives `$T = \\frac{1}{2}(1 + 2.71828) \\approx 1.85914$`. The chord lies above the convex exponential, so overestimation is expected and observed.' },
          { label: 'Step 2: Certify with the error bound', text: 'Since `$f^{\\prime\\prime} = e^{x} \\le e$` on `$[0,1]$`, the bound is `$|E_{T}| \\le (1 \\div 12)(1)^{2} e \\approx 0.2265$`. The actual error `$1.85914 - 1.71828 = 0.14086$` sits inside the certificate, confirming the theory.' },
          { label: 'Step 3: Predict refinement', text: 'Two panels would halve `$h$` and quarter the error to roughly `$0.035$`, because the bound scales with `$h^{2}$`. That prediction is checkable in one more line of arithmetic and motivates composite rules.' }
        ],
        result: 'One-panel estimate `$T \\approx 1.85914$` against `$I \\approx 1.71828$`, with certified bound `$0.2265$` containing the true error `$0.14086$`.'
      },
      {
        title: 'Simpson rule integrates a cubic exactly',
        problem: 'Apply Simpson rule with `$h = 1$` to `$I = \\int_{0}^{2} x^{3} \\, dx = 4$` and verify exactness with a script.',
        steps: [
          { label: 'Step 1: Collect the three values', text: 'At `$x = 0, 1, 2$` the cubes are `$0, 1, 8$`. Simpson weights them 1-4-1, so `$S = (1 \\div 3)(0 + 4(1) + 8) = 12 \\div 3 = 4$`.' },
          { label: 'Step 2: Confirm in code', text: '```python\nf0, f1, f2 = 0.0, 1.0, 8.0\nh = 1.0\nS = (h / 3.0) * (f0 + 4.0 * f1 + f2)\nprint(S)  # 4.0, exact against the antiderivative 16/4\n```\nThe script prints `4.0`, matching the antiderivative `$x^{4} \\div 4$` evaluated from `$0$` to `$2$`.' },
          { label: 'Step 3: Explain why it is exact', text: 'The fourth derivative of any cubic is zero, so `$E_{S}$` vanishes identically and Simpson earns its degree of precision three. Any deviation from `$4$` would therefore indicate a weighting bug rather than mathematics.' }
        ],
        result: 'Simpson returns `$S = 4$`, exactly the true integral, as the vanishing fourth derivative guarantees.'
      }
    ],
    keyTakeaways: [
      'Central quotients reach `$O(h^{2})$` accuracy while one-sided quotients manage only `$O(h)$`, at the cost of one extra evaluation.',
      'Total differentiation error dips at a moderate `$h$` because truncation falls while roundoff grows like `$\\varepsilon \\div h$`.',
      'Trapezoidal error scales with `$h^{2} f^{\\prime\\prime}$` and Simpson with `$h^{4} f^{(4)}$`, so bounds certify answers in advance.',
      'Degree of precision is one for trapezoidal and three for Simpson, the fastest self-test of any implementation.'
    ],
    quiz: [
      // PYQ-pattern — Simpson exactness for cubics (rephrased)
      {
        q: 'Which polynomial family does Simpson rule with any even panel count integrate exactly?',
        options: ['All cubics and below', 'Only constants', 'Only odd functions', 'All exponentials'],
        answer: 0,
        explanation: 'Step 1: Recall the Simpson error carries the fourth derivative factor. Step 2: Every cubic has identically zero fourth derivative. Step 3: Hence the error term vanishes for all cubics and lower degrees. Step 4: Exponentials have nonzero fourth derivatives, so no exactness there.'
      },
      {
        q: 'The trapezoidal estimate on an interval is `$1.86$` with `$h = 0.5$`. Roughly what error follows from halving to `$h = 0.25$` if curvature is steady?',
        options: ['Unchanged', 'Halved', 'Quartered', 'Divided by sixteen'],
        answer: 2,
        explanation: 'Step 1: Trapezoidal error scales with the square of h. Step 2: Halving h multiplies the error by one half squared. Step 3: One half squared equals one quarter. Step 4: Sixteen-fold division belongs to Simpson, not trapezoidal.'
      },
      {
        q: 'For `$f(x) = x^{2}$` at `$x = 2$`, the central quotient with `$h = 0.1$` gives which value?',
        options: [`$3.9$`, `$4.0$`, `$4.1$`, `$4.2$`],
        answer: 1,
        explanation: 'Step 1: Evaluate f at 2.1 giving 4.41 and at 1.9 giving 3.61. Step 2: Subtract to get 0.80. Step 3: Divide by twice h, namely 0.2, giving 4.0. Step 4: Quadratics yield exact central differences since the cubic error term vanishes.'
      },
      {
        q: 'Composite Simpson integration over `$[a, b]$` requires the subinterval count `$n$` to satisfy which condition?',
        options: ['Any positive integer', 'An odd integer', 'A power of two', 'An even integer'],
        answer: 3,
        explanation: 'Step 1: Simpson panels each consume two adjacent subintervals for one parabola. Step 2: Hence subintervals must pair up completely. Step 3: That forces n to be even. Step 4: Powers of two suit Romberg tables but are not required by Simpson itself.'
      }
    ]
  },
  // ---------------------------------------------------------------- 11.4
  {
    sectionId: 'engmath-ch11-s4',
    readingTime: 8,
    intro: 'Single-panel rules rarely meet tight tolerances, so practical quadrature subdivides the interval and combines coarse and fine estimates cleverly. Composite rules add panel contributions while Richardson extrapolation cancels the leading error term between two grids. This section builds the composite forms, derives the extrapolation weights, organizes them into the Romberg table, and sketches adaptive refinement.',
    objectives: [
      'Form composite trapezoidal and Simpson sums over `$n$` subintervals',
      'Combine two grid levels with Richardson weights to jump one accuracy order',
      'Read a Romberg table and describe adaptive interval refinement'
    ],
    concepts: [
      {
        term: 'Composite rules by subdivision',
        kind: 'method',
        statement: 'Splitting `$[a, b]$` into `$n$` panels of width `$h = (b - a) \\div n$` and summing single-panel rules gives the **composite** forms, with interior heights weighted 2 for trapezoidal and alternating 4-2 for `composite` Simpson. Each panel contributes its own small error, and adding `$n$` panels of size `$O(h^{3})$` yields the global composite trapezoidal error `$O(h^{2})$`. Subdivision converts one mediocre estimate into a convergent family indexed by `$n$`, the workhorse of all production quadrature.',
        detail: 'Composite Simpson inherits global error `$O(h^{4})$` because its `$O(h^{5})$` panel errors accumulate over `$n$` panels proportional to `$1 \\div h$`.'
      },
      {
        term: 'Step-halving signature of each rule',
        kind: 'law',
        statement: 'Halving `$h$` quarters the composite trapezoidal error but divides the composite Simpson error by **sixteen**, a scaling law checked with the `halving` diagnostic on every new code. Observing a factor near four confirms second-order behavior, while a factor near sixteen confirms fourth-order behavior. Any serious deviation from the expected factor signals a coding mistake, a nonsmooth integrand, or roundoff taking over at tiny `$h$`.',
        detail: 'Logging the ratio of successive differences across three grids is the cheapest convergence proof available in timed problem solving.'
      },
      {
        term: 'Richardson extrapolation cancels the leading term',
        kind: 'method',
        statement: '**Richardson extrapolation** blends a coarse estimate `$T(h)$` with a fine one `$T(h \\div 2)$` through `$T_{\\mathrm{imp}} = T(h \\div 2) + (T(h \\div 2) - T(h)) \\div 3$`, deleting the `$h^{2}$` error shared by trapezoidal grids and leaving a Simpson-quality `richardson` result. The denominator `$3$` equals `$2^{2} - 1$`, the ratio of leading errors between the grids minus one. One line of algebra thus upgrades two cheap estimates into one markedly better value without any new function evaluations.',
        detail: 'Applying the same idea to Simpson pairs with denominator `$15 = 2^{4} - 1$` removes the `$h^{4}$` term and climbs yet another order.'
      },
      {
        term: 'Romberg table organizes repeated extrapolation',
        kind: 'method',
        statement: 'The **Romberg table** stacks trapezoidal values `$R_{k,1}$` for `$h, h \\div 2, h \\div 4, \\ldots$` in its first column and fills rightward with extrapolated entries `$R_{k,j}$` of climbing order via the `romberg` recursion. Each diagonal entry inherits a higher power of `$h$` in its error, so the table converges down and to the right toward the true integral. Reading across a row shows refinement at fixed order, while reading down the diagonal shows order climbing at fixed finest grid.',
        detail: 'Two table levels on `$x^{2}$` already recover the exact integral, because extrapolation of a second-order rule with quadratic data leaves no remainder.'
      },
      {
        term: 'Adaptive refinement spends panels where they matter',
        kind: 'insight',
        statement: '**Adaptive quadrature** estimates the local error on each panel from the coarse-fine difference and subdivides only panels whose share exceeds tolerance, leaving calm regions coarse in the `adapt` strategy. Steep or curved zones automatically collect dense panels while flat zones keep few, giving high accuracy per function evaluation. The stopping test compares `$|T(h) - T(h \\div 2)| \\div 3$` against the panel tolerance, recycling the Richardson estimate as a free error gauge.',
        detail: 'Near-singular behavior such as a square-root slope at an endpoint draws deep local refinement that uniform grids can match only with enormous `$n$`.'
      }
    ],
    figures: [
      {
        caption: 'Richardson idea on grids $h$ and $h \\div 2$: the coarse and fine trapezoidal values straddle the true integral $I$, and the weighted blend lands far closer to $I$ than either parent estimate.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coarse and fine grid estimates combined by Richardson extrapolation"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Two grids, one extrapolation</text><line x1="60" y1="120" x2="660" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><text x="648" y="110" font-family="sans-serif" font-size="12" text-anchor="end" fill="currentColor">true I</text><circle cx="200" cy="180" r="9" fill="currentColor"/><text x="200" y="215" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">T(h)</text><circle cx="420" cy="150" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="420" y="185" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">T(h/2)</text><line x1="200" y1="180" x2="420" y2="150" stroke="currentColor" stroke-width="1.5"/><circle cx="500" cy="126" r="9" fill="currentColor"/><text x="500" y="162" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">blend</text><text x="120" y="280" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">coarse grid: wide panels</text><text x="420" y="280" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">fine grid: panels halved</text><text x="420" y="305" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">blend weights one and minus one third</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Composite trapezoidal on a quadratic',
        problem: 'Estimate `$I = \\int_{0}^{1} x^{2} \\, dx = \\frac{1}{3} \\approx 0.33333$` with the composite trapezoidal rule using `$n = 2$` panels.',
        steps: [
          { label: 'Step 1: Set up the grid', text: 'With `$h = 0.5$` the nodes are `$0, 0.5, 1$` with squares `$0, 0.25, 1$`. The composite weights are one half at the ends and one inside, giving `$T = 0.5 \\times (0 \\div 2 + 0.25 + 1 \\div 2)$`.' },
          { label: 'Step 2: Evaluate', text: 'Inside the brackets `$0 + 0.25 + 0.5 = 0.75$`, and multiplying by `$0.5$` yields `$T = 0.375$`. The error `$0.375 - 0.33333 = 0.04167$` overestimates because the parabola is convex.' },
          { label: 'Step 3: Check the order signature', text: 'One panel would give `$0.5$` with error `$0.16667$`, and two panels give error `$0.04167$`, a ratio of four as second-order theory demands. That factor-four check validates the arithmetic before any extrapolation.' }
        ],
        result: 'Composite estimate `$T = 0.375$` with error `$0.04167$`, exactly one quarter of the single-panel error.'
      },
      {
        title: 'Richardson rescue on the exponential integral',
        problem: 'Combine `$T(h = 1) = 1.85914$` and `$T(h \\div 2) = 1.75393$` for `$\\int_{0}^{1} e^{x} dx$` into one extrapolated value.',
        steps: [
          { label: 'Step 1: Recall the weight', text: 'Trapezoidal leading errors scale by four between the grids, so the blend `$T_{fine} + (T_{fine} - T_{coarse}) \\div 3$` deletes the `$h^{2}$` term. The denominator `$3$` is `$4 - 1$`, not a tunable parameter.' },
          { label: 'Step 2: Compute in code', text: '```python\ncoarse, fine = 1.85914, 1.75393\nblend = fine + (fine - coarse) / 3.0\nprint(blend)  # 1.71886 against true 1.71828\n```\nThe difference `$fine - coarse = -0.10521$` divided by three corrects the fine value down to `$1.71886$`.' },
          { label: 'Step 3: Admire the gain', text: 'The fine grid alone errs by about `$0.0356$` while the blend errs by about `$0.0006$`, a sixty-fold improvement from pure arithmetic. This is Simpson-quality accuracy at trapezoidal prices.' }
        ],
        result: 'Extrapolated value `$1.71886$`, within `$0.0006$` of the true `$1.71828$`.'
      }
    ],
    keyTakeaways: [
      'Composite rules sum panel contributions with trapezoidal weights 1-2-2-1 and Simpson weights 1-4-2-4-1.',
      'Halving `$h$` quarters trapezoidal error and divides Simpson error by sixteen, the standard code-validation check.',
      'Richardson blending with denominator `$2^{p} - 1$` deletes the leading error term using grids already computed.',
      'Romberg tables climb in order along diagonals while adaptive codes refine only high-error panels.'
    ],
    quiz: [
      // PYQ-pattern — Richardson weights from two grids (rephrased)
      {
        q: 'Trapezoidal values `$T(h) = 0.50$` and `$T(h \\div 2) = 0.375$` are available for an integral. What is the Richardson-improved value?',
        options: [`$0.4375$`, `$0.375$`, `$0.3333$`, `$0.50$`],
        answer: 2,
        explanation: 'Step 1: Form the difference of fine minus coarse: 0.375 minus 0.50 gives minus 0.125. Step 2: Divide by 3 to get minus 0.04167. Step 3: Add to the fine value 0.375. Step 4: The blend 0.3333 matches the exact integral of x squared on the unit interval.'
      },
      {
        q: 'What fills the first column of a Romberg table?',
        options: ['Trapezoidal values on successively halved grids', 'Simpson values on successively halved grids', 'Midpoint values on one fixed grid', 'Exact panel integrals'],
        answer: 0,
        explanation: 'Step 1: Romberg starts from the cheapest convergent family. Step 2: That family is composite trapezoidal on halved grids. Step 3: Rightward columns then extrapolate those entries upward in order. Step 4: Simpson-quality values appear in column two, not column one.'
      },
      {
        q: 'Three successive trapezoidal estimates give differences `$0.16$` then `$0.04$`. What does the ratio signal?',
        options: ['First-order convergence', 'Divergence', 'Fourth-order convergence', 'Second-order convergence as theory predicts'],
        answer: 3,
        explanation: 'Step 1: Ratio the consecutive differences: 0.16 divided by 0.04 gives 4. Step 2: A steady factor of 4 marks error proportional to h squared. Step 3: That is exactly the trapezoidal order signature. Step 4: A factor near 16 would instead signal Simpson behavior.'
      },
      {
        q: 'An adaptive integrator keeps subdividing panels near `$x = 0$` for `$f(x) = \\sqrt{x}$` while leaving the rest coarse. Why?',
        options: ['The code has a refinement bug at the left end', 'The steep slope near zero carries the largest local error', 'Roundoff always concentrates at interval starts', 'Adaptive codes refine uniformly by design'],
        answer: 1,
        explanation: 'Step 1: The square root has unbounded slope at the origin. Step 2: Large curvature there inflates the local error bound. Step 3: The coarse-fine difference flags exactly those panels. Step 4: Targeted refinement there buys accuracy that uniform grids reach only with huge n.'
      }
    ]
  }
]

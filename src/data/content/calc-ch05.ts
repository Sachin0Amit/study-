import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Calculus: Early Transcendentals, 9th Edition
// Chapter 5: Integrals (Sections 5.1 – 5.5 as mapped in library.ts)
// Master study content. Worked examples follow the book’s own classics.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh5Content: SectionContent[] = [
  // ------------------------------------------------------------------ 5.1
  {
    sectionId: 'calc-ch5-s1',
    readingTime: 9,
    intro: 'If the tangent problem of Chapter 2 asks how to measure instantaneous change, the area problem asks how to measure accumulated change: what is the exact area of a region bounded by a curve? No polygon formula answers that, so this section builds the answer from scratch — approximate with rectangles, refine, and take a limit. The same machinery solves a second, seemingly unrelated problem: how far does a moving object travel when its velocity is known at every instant?',
    objectives: [
      'Explain why the area under a curve cannot be computed by elementary geometry, and how rectangles give a sequence of improving approximations',
      'Read, manipulate, and evaluate sigma notation, including linearity rules and the power-sum formulas',
      'Express the area under a positive curve as a limit of endpoint sums and compute such limits for monomials',
      'Formulate the distance problem for a moving object and estimate the answer from a velocity table with upper and lower sums',
    ],
    concepts: [
      {
        term: 'The area problem',
        kind: 'definition',
        statement: 'Let $f$ be continuous with $f(x) \\ge 0$ on $[a, b]$. The **area problem** asks for the area $A$ of the region $S$ bounded by the graph of $y = f(x)$, the vertical lines $x = a$ and $x = b$, and the $x$-axis. It is solved as the limit of approximating rectangles, $$A = \\lim_{n \\to \\infty} \\left[ f(x_1) \\Delta x + f(x_2) \\Delta x + \\cdots + f(x_n) \\Delta x \\right],$$ provided this limit exists.',
        detail: 'The area problem is the twin of the tangent problem from Section 2.1: both are answered by a limit, and the Fundamental Theorem of Calculus will later reveal that they are inverse operations. Circles and polygons were mastered by the ancient Greeks precisely because they reduce to simple formulas; a region bounded by an arbitrary curve does not.',
      },
      {
        term: 'Sigma notation',
        kind: 'notation',
        statement: 'If $m$ and $n$ are integers with $m \\le n$, then $$\\sum_{i=m}^{n} a_i = a_m + a_{m+1} + a_{m+2} + \\cdots + a_n.$$ The integer $i$ is the **index of summation**, and it is a dummy variable: $\\sum_{i=1}^{n} a_i = \\sum_{j=1}^{n} a_j$.',
        detail: 'Sigma notation has the same linearity rules as the derivative and the integral that follows from it: $\\sum_{i=m}^{n} (c\\,a_i) = c \\sum_{i=m}^{n} a_i$ and $\\sum_{i=m}^{n} (a_i \\pm b_i) = \\sum_{i=m}^{n} a_i \\pm \\sum_{i=m}^{n} b_i$. A useful special case: $\\sum_{i=1}^{n} 1 = n$.',
      },
      {
        term: 'Sums of powers',
        kind: 'theorem',
        statement: 'The three power-sum formulas that make area limits computable are $$\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}, \\qquad \\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}, \\qquad \\sum_{i=1}^{n} i^3 = \\left[ \\frac{n(n+1)}{2} \\right]^2.$$',
        detail: 'Each is a polynomial in $n$ whose leading term matches $\\int_0^n x^k\\,dx$ — a first hint that sums and integrals measure the same thing. Closed forms for $\\sum i^4$ and beyond exist but grow messy; the pattern $\\text{(leading term)} \\approx \\frac{n^{k+1}}{k+1}$ is what survives the limit.',
      },
      {
        term: 'Approximating area by rectangles',
        kind: 'method',
        statement: 'Divide $[a, b]$ into $n$ subintervals of equal width $\\Delta x = (b - a)/n$, with right endpoints $x_i = a + i\\,\\Delta x$. The **right endpoint approximation** of the area is $$A \\approx \\sum_{i=1}^{n} f(x_i)\\,\\Delta x.$$ Left endpoints use $x_{i-1}$ instead of $x_i$.',
        detail: 'If $f$ is increasing on $[a, b]$, the left-endpoint sum is a **lower sum** (each rectangle lies inside the region) and the right-endpoint sum is an **upper sum** (each rectangle covers a little too much), so the true area is trapped between them. For decreasing $f$ the roles swap. Either way, the two sums squeeze toward each other as $n$ grows.',
      },
      {
        term: 'Area as a limit of sums',
        kind: 'definition',
        statement: 'The area under $y = f(x)$ with $f(x) \\ge 0$ on $[a, b]$ is defined by $$A = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i)\\,\\Delta x, \\quad \\text{where } \\Delta x = \\frac{b-a}{n} \\text{ and } x_i = a + i\\,\\Delta x,$$ whenever the limit exists.',
        detail: 'Nothing in this definition requires rectangles of equal width — any sequence of partitions whose widest rectangle shrinks to zero gives the same limit. Equal widths are chosen purely for computability. If $f$ is continuous, the limit always exists; Section 5.2 turns this construction into the definite integral.',
      },
      {
        term: 'The distance problem',
        kind: 'insight',
        statement: 'If $v(t) \\ge 0$ is the velocity of an object, the **distance traveled** is the area under the velocity curve: $$\\text{distance} = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} v(t_i)\\,\\Delta t.$$ When only recorded velocity data is available, left and right endpoint sums give lower and upper bounds on the true distance.',
        detail: 'This is the exact mirror of Section 2.7, where the slope of the position graph produced velocity; here the area of the velocity graph returns position. Distance traveled is the accumulation of speed over time, and since each thin rectangle $v(t_i)\\,\\Delta t$ is approximately a constant-speed trip of duration $\\Delta t$, the sum of the rectangles is approximately the trip. The smaller the $\\Delta t$, the better the estimate.',
      },
    ],
    examples: [
      {
        title: 'The area under a parabola',
        problem: 'Use right endpoints to express the area under $y = x^2$ above $[0, 1]$ as a limit, then evaluate the limit with a power-sum formula.',
        steps: [
          { label: 'Step 1: Partition the interval', text: 'Here $a = 0$, $b = 1$, so $\\Delta x = \\frac{1 - 0}{n} = \\frac{1}{n}$, and the right endpoints are $x_i = 0 + i \\cdot \\frac{1}{n} = \\frac{i}{n}$ for $i = 1, 2, \\ldots, n$.' },
          { label: 'Step 2: Write the approximating sum', text: 'Each rectangle has height $f(x_i) = \\left(\\frac{i}{n}\\right)^2 = \\frac{i^2}{n^2}$ and width $\\frac{1}{n}$, so $$A_n = \\sum_{i=1}^{n} \\frac{i^2}{n^2} \\cdot \\frac{1}{n} = \\frac{1}{n^3} \\sum_{i=1}^{n} i^2.$$' },
          { label: 'Step 3: Insert the power-sum formula', text: 'Using $\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$ gives $$A_n = \\frac{n(n+1)(2n+1)}{6n^3} = \\frac{1}{6}\\left(1 + \\frac{1}{n}\\right)\\left(2 + \\frac{1}{n}\\right).$$' },
          { label: 'Step 4: Take the limit', text: 'As $n \\to \\infty$, the fractions $\\frac{1}{n}$ vanish, so $$A = \\lim_{n \\to \\infty} \\frac{1}{6}\\left(1 + \\frac{1}{n}\\right)\\left(2 + \\frac{1}{n}\\right) = \\frac{2}{6} = \\frac{1}{3}.$$' },
        ],
        result: 'The area under $y = x^2$ on $[0, 1]$ is exactly $\\frac{1}{3}$ — no geometry formula could have produced this, only a limit of sums.',
      },
      {
        title: 'A limit of sums that hides an integral',
        problem: 'Evaluate $\\displaystyle\\lim_{n \\to \\infty} \\sum_{i=1}^{n} \\frac{i^3}{n^4}$.',
        steps: [
          { label: 'Step 1: Find the hidden $\\Delta x$', text: 'Factor the summand as $\\frac{i^3}{n^4} = \\left(\\frac{i}{n}\\right)^3 \\cdot \\frac{1}{n}$. The factor $\\frac{1}{n}$ plays the role of $\\Delta x$ on the interval $[0, 1]$, and the sample points are $x_i = \\frac{i}{n}$.' },
          { label: 'Step 2: Identify the function', text: 'The remaining factor $\\left(\\frac{i}{n}\\right)^3 = x_i^3$ is $f(x_i)$ for $f(x) = x^3$. The sum is exactly a right-endpoint approximation of the area under $y = x^3$ on $[0, 1]$.' },
          { label: 'Step 3: Evaluate with the cubic power sum', text: 'Using $\\sum_{i=1}^{n} i^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$, the sum equals $\\frac{n^2(n+1)^2}{4n^4} = \\frac{1}{4}\\left(1 + \\frac{1}{n}\\right)^2$.' },
          { label: 'Step 4: Take the limit', text: '$\\displaystyle\\lim_{n \\to \\infty} \\frac{1}{4}\\left(1 + \\frac{1}{n}\\right)^2 = \\frac{1}{4}$, which is precisely the area under $y = x^3$ on $[0, 1]$.' },
        ],
        result: 'The limit is $\\frac{1}{4}$; recognizing the pattern $\\sum f(x_i)\\Delta x$ inside a limit is the skill that Section 5.2 formalizes as the definite integral.',
      },
      {
        title: 'Distance from recorded velocity data',
        problem: 'A car accelerates from rest, and its speedometer is read every 5 seconds: velocities $20, 26, 31, 35, 38, 40, 41$ meters per second at $t = 0, 5, 10, 15, 20, 25, 30$. Estimate the distance traveled, and give an interval that is guaranteed to trap the true value.',
        steps: [
          { label: 'Step 1: Model the data as a table problem', text: 'With $\\Delta t = 5$ seconds and six intervals, the exact distance is the area under a velocity curve passing through the data points.' },
          { label: 'Step 2: Lower estimate with left endpoints', text: 'Assume the slowest plausible speed on each interval, the left value: $$D_{\\text{lower}} = 5(20 + 26 + 31 + 35 + 38 + 40) = 5 \\cdot 190 = 950 \\text{ m}.$$' },
          { label: 'Step 3: Upper estimate with right endpoints', text: 'Assume the fastest plausible speed on each interval, the right value: $$D_{\\text{upper}} = 5(26 + 31 + 35 + 38 + 40 + 41) = 5 \\cdot 211 = 1055 \\text{ m}.$$' },
          { label: 'Step 4: Interpret the trap', text: 'Because the recorded velocities increase, the velocity curve lies above the left values and below the right values, so $950 \\le D \\le 1055$. A good single estimate is the average, about $1002$ meters, with worst-case error at most $52.5$ meters.' },
        ],
        result: 'The car traveled between 950 and 1055 meters in the 30 seconds — recorded data can never pin down distance exactly, only trap it between sums.',
      },
    ],
    keyTakeaways: [
      'The area under a curve is defined, not measured: it is the limit of sums of rectangle areas as the number of rectangles grows without bound.',
      'Sigma notation is the bookkeeping system: $\\sum_{i=1}^{n} a_i$ adds the terms $a_m$ through $a_n$, and it obeys the same linearity rules as derivatives.',
      'The power sums $\\sum i = \\frac{n(n+1)}{2}$, $\\sum i^2 = \\frac{n(n+1)(2n+1)}{6}$ and $\\sum i^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$ turn area limits for monomials into algebra with $n$.',
      'For positive velocity, distance traveled is the area under the velocity curve, and endpoint sums from a data table give certified upper and lower bounds.',
      'The area problem and the tangent problem are dual: slopes of the position graph give velocity; area of the velocity graph returns displacement.',
    ],
    quiz: [
      {
        q: 'Evaluate the sum $\\displaystyle\\sum_{i=1}^{n} (2i + 3)$.',
        options: [`$n^2 + 4n$`, `$n^2 + 3n$`, `$2n^2 + 3$`, `$\\frac{n(n+1)}{2} + 3n$`],
        answer: 0,
        explanation: 'Split by linearity: $2\\sum i + 3\\sum 1 = 2 \\cdot \\frac{n(n+1)}{2} + 3n = n(n+1) + 3n = n^2 + 4n$.',
      },
      {
        q: 'The area under $y = x^2$ on $[0, 1]$ is expressed with right endpoints as $\\displaystyle\\lim_{n \\to \\infty} \\frac{1}{n^3}\\sum_{i=1}^{n} i^2$. Its value is:',
        options: [`$\\frac{1}{2}$`, `$\\frac{1}{3}$`, `$\\frac{1}{4}$`, `$\\frac{2}{3}$`],
        answer: 1,
        explanation: 'The sum equals $\\frac{(n+1)(2n+1)}{6n^2} = \\frac{1}{6}\\left(1 + \\frac{1}{n}\\right)\\left(2 + \\frac{1}{n}\\right)$, which tends to $\\frac{2}{6} = \\frac{1}{3}$.',
      },
      {
        q: 'If $f$ is increasing and positive on $[a, b]$, how do the left-endpoint and right-endpoint sums compare to the true area $A$?',
        options: ['Both underestimate $A$', 'Both overestimate $A$', 'Left sum $\\le A \\le$ right sum', 'Right sum $\\le A \\le$ left sum'],
        answer: 2,
        explanation: 'Each left rectangle sits inside the region and each right rectangle covers it plus a little extra, so the left sum is a lower sum and the right sum an upper sum.',
      },
      {
        q: 'An object has velocity $v(t) \\ge 0$ on $[0, 10]$. The area under the velocity curve on that interval equals:',
        options: ['The acceleration of the object', 'The total distance traveled by the object', 'The average velocity times 10 only if $v$ is constant', 'The displacement of the object from its starting point regardless of sign'],
        answer: 1,
        explanation: 'With $v \\ge 0$, area accumulates speed over time, which is distance traveled. Displacement equals area only when velocity never goes negative — that distinction becomes central in Section 5.4.',
      },
    ],
  },

  // ------------------------------------------------------------------ 5.2
  {
    sectionId: 'calc-ch5-s2',
    readingTime: 9,
    intro: 'The area and distance problems of Section 5.1 share one construction: partition, sample, sum, limit. This section names that construction the definite integral, gives it the famous $\\int$ notation, and assembles its algebra. Because the sample point in each rectangle is allowed to be anywhere in its subinterval, the same limit covers upper, lower, midpoint and endpoint sums in one definition.',
    objectives: [
      'State the definition of the definite integral as the limit of Riemann sums and identify every symbol in the notation',
      'Explain why continuity guarantees integrability, and describe functions that fail to be integrable',
      'Apply the Midpoint Rule to estimate an integral that has no elementary antiderivative',
      'Use the algebraic and comparison properties of integrals, including signed area, to evaluate or bound integrals',
    ],
    concepts: [
      {
        term: 'Riemann sum',
        kind: 'definition',
        statement: 'Divide $[a, b]$ into $n$ subintervals of width $\\Delta x = \\frac{b-a}{n}$ with endpoints $x_i = a + i\\,\\Delta x$, and choose a **sample point** $x_i^*$ anywhere in the $i$-th subinterval $[x_{i-1}, x_i]$. The sum $$\\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x$$ is a **Riemann sum**.',
        detail: 'The star in $x_i^*$ is the definition’s greatest strength: left endpoints, right endpoints, midpoints, and any other choice are all special cases. Georg Friedrich Bernhard Riemann (1826–1866) showed that if $f$ is continuous, every choice of sample points gives sums that converge to one and the same number.',
      },
      {
        term: 'The definite integral',
        kind: 'definition',
        statement: 'If $f$ is defined on $[a, b]$, the **definite integral** of $f$ from $a$ to $b$ is $$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x,$$ provided the limit exists and gives the same value for every choice of the sample points $x_i^*$. When the limit exists, $f$ is called **integrable** on $[a, b]$.',
        detail: 'The symbol $\\int$ is an elongated letter S (for sum), proposed by Leibniz; $dx$ is the ghost of $\\Delta x$; $f(x)$ is the **integrand**; $a$ and $b$ are the **limits of integration**. If $f(x) \\ge 0$, the integral is the area under the curve; in general it is signed area.',
      },
      {
        term: 'Which functions are integrable',
        kind: 'theorem',
        statement: 'If $f$ is **continuous** on $[a, b]$, or if $f$ is **bounded** with **finitely many discontinuities** — in particular if $f$ is monotonic — then $f$ is integrable on $[a, b]$.',
        detail: 'Even functions with a finite number of jump discontinuities have well-defined integrals. The classic integrability failure requires infinitely many badly placed discontinuities, such as the Dirichlet function that is 1 on rationals and 0 on irrationals: its upper sums are always $(b-a)$ and its lower sums always $0$.',
      },
      {
        term: 'The Midpoint Rule',
        kind: 'method',
        statement: 'The Midpoint Rule approximates the integral using the midpoints $\\bar{x}_i = \\frac{1}{2}(x_{i-1} + x_i)$ of each subinterval: $$\\int_a^b f(x)\\,dx \\approx M_n = \\Delta x\\left[ f(\\bar{x}_1) + f(\\bar{x}_2) + \\cdots + f(\\bar{x}_n) \\right].$$',
        detail: 'Among the simple choices, midpoints typically beat both endpoint families because each midpoint rectangle overcounts on one side and undercounts on the other. The Midpoint Rule returns in Section 7.7 with a full error analysis alongside the Trapezoidal and Simpson’s Rules.',
      },
      {
        term: 'Signed area',
        kind: 'insight',
        statement: 'For a general integrable $f$, the value $\\int_a^b f(x)\\,dx$ equals the **signed area**: the area above the $x$-axis minus the area below it. The integral is a signed total, not a total area.',
        detail: 'On subintervals where $f < 0$, every rectangle height $f(x_i^*)$ is negative, so those sums — and hence their limit — subtract. If a problem asks for the total geometric area between a curve and the axis, one must integrate $|f|$ and split at the zeros of $f$, a subtlety Section 5.4 turns into the displacement-versus-distance distinction.',
      },
      {
        term: 'Properties of the definite integral',
        kind: 'theorem',
        statement: 'If $f$ and $g$ are integrable on an interval containing the limits, then: $\\int_a^a f(x)\\,dx = 0$; reversing limits flips the sign, $\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$; $\\int_a^b c\\,dx = c(b-a)$; integrals are linear, $\\int_a^b \\left[c f(x) \\pm k\\,g(x)\\right] dx = c\\int_a^b f(x)\\,dx \\pm k\\int_a^b g(x)\\,dx$; and intervals concatenate, $\\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx = \\int_a^c f(x)\\,dx$.',
        detail: 'The concatenation property says you may cut the region into pieces and add the pieces. Note the mild asymmetry with areas: the concatenation identity holds even if $b$ lies outside $[a, c]$, because the reversed-integral sign rule makes the extra pieces cancel.',
      },
      {
        term: 'Comparison properties',
        kind: 'theorem',
        statement: 'If $f(x) \\ge g(x)$ for $a \\le x \\le b$, then $\\int_a^b f(x)\\,dx \\ge \\int_a^b g(x)\\,dx$. In particular, if $m \\le f(x) \\le M$ then $$m(b - a) \\le \\int_a^b f(x)\\,dx \\le M(b-a),$$ and taking absolute values gives $\\left| \\int_a^b f(x)\\,dx \\right| \\le \\int_a^b \\left| f(x) \\right| dx$.',
        detail: 'These bounds are the integral analogue of the Squeeze Theorem for limits: a function trapped between constants has its integral trapped between the areas of two rectangles. Comparison of functions becomes comparison of accumulated totals — the same idea that powers the Comparison Test for improper integrals in Section 7.8.',
      },
    ],
    figures: [
      {
        caption: 'A left-endpoint Riemann sum: $f(x) = 1 + \\frac{x^2}{8}$ on $[0, 8]$ sliced into $n = 8$ strips of width $\\Delta x = 1$, each rectangle rising to the curve at its left edge $x_{i-1}$ (dots). The rectangle total $\\sum_{i=1}^{8} f(x_{i-1})\\,\\Delta x = 25.5$ underestimates $\\int_0^8 f(x)\\,dx = \\frac{88}{3} \\approx 29.33$ because $f$ is increasing, and the missing slivers vanish as $n \\to \\infty$.',
        svg: '<svg viewBox="0 0 720 400" width="100%" role="img" aria-label="Left-endpoint Riemann sum rectangles under an increasing curve on an interval"><rect x="70" y="310" width="75" height="30" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="1.5"/><rect x="145" y="306.3" width="75" height="33.7" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="1.5"/><rect x="220" y="295" width="75" height="45" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="1.5"/><rect x="295" y="276.3" width="75" height="63.7" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="1.5"/><rect x="370" y="250" width="75" height="90" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="1.5"/><rect x="445" y="216.3" width="75" height="123.7" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="1.5"/><rect x="520" y="175" width="75" height="165" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="1.5"/><rect x="595" y="126.3" width="75" height="213.7" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="1.5"/><line x1="70" y1="340" x2="708" y2="340" stroke="currentColor" stroke-width="1.5"/><polygon points="718,340 706,335.5 706,344.5" fill="currentColor"/><line x1="70" y1="340" x2="70" y2="62" stroke="currentColor" stroke-width="1.5"/><polygon points="70,52 65.5,64 74.5,64" fill="currentColor"/><polyline points="70,310 88.8,309.8 107.5,309.1 126.3,307.9 145,306.3 163.8,304.1 182.5,301.6 201.3,298.5 220,295 238.8,291 257.5,286.6 276.3,281.6 295,276.3 313.8,270.4 332.5,264.1 351.3,257.3 370,250 388.8,242.3 407.5,234.1 426.3,225.4 445,216.3 463.8,206.6 482.5,196.6 501.3,186 520,175 538.8,163.5 557.5,151.6 576.3,139.1 595,126.3 613.8,112.9 632.5,99.1 651.3,84.8 670,70" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="70" cy="310" r="3" fill="#10b981"/><circle cx="145" cy="306.3" r="3" fill="#10b981"/><circle cx="220" cy="295" r="3" fill="#10b981"/><circle cx="295" cy="276.3" r="3" fill="#10b981"/><circle cx="370" cy="250" r="3" fill="#10b981"/><circle cx="445" cy="216.3" r="3" fill="#10b981"/><circle cx="520" cy="175" r="3" fill="#10b981"/><circle cx="595" cy="126.3" r="3" fill="#10b981"/><line x1="70" y1="344" x2="70" y2="354" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 2" opacity="0.6"/><line x1="145" y1="344" x2="145" y2="354" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 2" opacity="0.6"/><line x1="220" y1="344" x2="220" y2="354" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 2" opacity="0.6"/><line x1="295" y1="344" x2="295" y2="354" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 2" opacity="0.6"/><line x1="370" y1="344" x2="370" y2="354" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 2" opacity="0.6"/><line x1="445" y1="344" x2="445" y2="354" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 2" opacity="0.6"/><line x1="520" y1="344" x2="520" y2="354" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 2" opacity="0.6"/><line x1="595" y1="344" x2="595" y2="354" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 2" opacity="0.6"/><line x1="670" y1="344" x2="670" y2="354" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 2" opacity="0.6"/><text x="70" y="370" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">0</text><text x="220" y="370" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2</text><text x="370" y="370" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">4</text><text x="520" y="370" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">6</text><text x="670" y="370" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">8</text><line x1="76" y1="386" x2="139" y2="386" stroke="currentColor" stroke-width="1.5"/><polygon points="70,386 76,382.5 76,389.5" fill="currentColor"/><polygon points="145,386 139,382.5 139,389.5" fill="currentColor"/><text x="107.5" y="380" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">Δx</text><text x="662" y="58" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end" font-style="italic">y = f(x)</text><text x="56" y="66" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">y</text><text x="712" y="364" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">x</text></svg>',
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Recognizing a limit of sums as an integral',
        problem: 'Express $\\displaystyle\\lim_{n \\to \\infty} \\sum_{i=1}^{n} \\frac{i^4}{n^5}$ as a definite integral, and evaluate it.',
        steps: [
          { label: 'Step 1: Match to the Riemann-sum template', text: 'Write the summand as $\\frac{i^4}{n^5} = \\left(\\frac{i}{n}\\right)^4 \\cdot \\frac{1}{n}$. Comparing with $f(x_i^*)\\,\\Delta x$ identifies $\\Delta x = \\frac{1}{n}$, sample points $x_i = \\frac{i}{n}$, and $f(x) = x^4$.' },
          { label: 'Step 2: Recover the interval', text: 'The points $x_i = \\frac{i}{n}$ run from $x_0 = 0$ to $x_n = 1$, so the interval is $[0, 1]$ and the limit is $\\int_0^1 x^4\\,dx$.' },
          { label: 'Step 3: Evaluate the limit directly', text: 'The closed form $\\sum_{i=1}^{n} i^4 = \\frac{n(n+1)(2n+1)(3n^2 + 3n - 1)}{30}$ turns the sum into $\\frac{(n+1)(2n+1)(3n^2+3n-1)}{30n^4}$, whose limit is $\\frac{1 \\cdot 2 \\cdot 3}{30} = \\frac{1}{5}$.' },
          { label: 'Step 4: Sanity check with the rectangle bounds', text: 'Since $0 \\le x^4 \\le 1$ on $[0, 1]$, the comparison property traps the integral in $[0, 1]$, and $\\frac{1}{5}$ sits comfortably inside.' },
        ],
        result: '$\\displaystyle\\lim_{n \\to \\infty} \\sum_{i=1}^{n} \\frac{i^4}{n^5} = \\int_0^1 x^4\\,dx = \\frac{1}{5}$ — the same value the Fundamental Theorem will produce in two lines.',
      },
      {
        title: 'Midpoint Rule for an impossible integral',
        problem: 'Use the Midpoint Rule with $n = 5$ to estimate $\\displaystyle\\int_1^2 \\frac{dx}{x}$, and compare with the true value $\\ln 2 \\approx 0.6931$.',
        steps: [
          { label: 'Step 1: Partition and locate midpoints', text: 'With $a = 1$, $b = 2$, $n = 5$: $\\Delta x = \\frac{2 - 1}{5} = 0.2$. The subintervals are $[1, 1.2], [1.2, 1.4], \\ldots, [1.8, 2]$, so the midpoints are $\\bar{x} = 1.1, 1.3, 1.5, 1.7, 1.9$.' },
          { label: 'Step 2: Evaluate the integrand at the midpoints', text: 'The reciprocals are $\\frac{1}{1.1} \\approx 0.9091$, $\\frac{1}{1.3} \\approx 0.7692$, $\\frac{1}{1.5} \\approx 0.6667$, $\\frac{1}{1.7} \\approx 0.5882$, $\\frac{1}{1.9} \\approx 0.5263$.' },
          { label: 'Step 3: Assemble the estimate', text: '$M_5 = 0.2(0.9091 + 0.7692 + 0.6667 + 0.5882 + 0.5263) = 0.2 \\cdot 3.4595 \\approx 0.6919$.' },
          { label: 'Step 4: Compare against the truth', text: 'The exact value is $\\int_1^2 \\frac{dx}{x} = \\ln 2 \\approx 0.69315$, so the Midpoint Rule erred by only about $0.0012$ — remarkable accuracy from five rectangles.' },
        ],
        result: '$M_5 \\approx 0.6919$, within about $0.0012$ of $\\ln 2$ — and note that this integral cannot be evaluated by any formula met so far, only estimated.',
      },
      {
        title: 'Evaluating an integral with geometry and symmetry',
        problem: 'Evaluate $\\displaystyle\\int_{-3}^{3} \\left( x + \\sqrt{9 - x^2} \\right) dx$ without antidifferentiating.',
        steps: [
          { label: 'Step 1: Split the integral', text: 'By linearity, the integral is $\\int_{-3}^{3} x\\,dx + \\int_{-3}^{3} \\sqrt{9 - x^2}\\,dx$; each piece can be handled geometrically.' },
          { label: 'Step 2: Kill the odd piece', text: 'The graph of $y = x$ encloses a triangle above the axis on $[0, 3]$ and an identical one below on $[-3, 0]$. As signed area they cancel: $\\int_{-3}^{3} x\\,dx = 0$.' },
          { label: 'Step 3: Recognize the semicircle', text: '$y = \\sqrt{9 - x^2}$ is the upper half of the circle $x^2 + y^2 = 9$, a semicircle of radius $3$ on $[-3, 3]$, with area $\\frac{1}{2}\\pi r^2 = \\frac{9\\pi}{2}$.' },
          { label: 'Step 4: Add the pieces', text: '$\\displaystyle\\int_{-3}^{3} \\left( x + \\sqrt{9 - x^2} \\right) dx = 0 + \\frac{9\\pi}{2} = \\frac{9\\pi}{2}$.' },
        ],
        result: 'The integral equals $\\frac{9\\pi}{2}$ — symmetry and the circle formula did all the work, a strategy that will pay off again when Section 5.5 proves the odd-function rule.',
      },
    ],
    keyTakeaways: [
      'The definite integral is the limit of Riemann sums $\\sum f(x_i^*)\\Delta x$, and the sample points $x_i^*$ may lie anywhere in their subintervals.',
      'Continuity on $[a, b]$ guarantees integrability; so does boundedness with finitely many discontinuities, or monotonicity.',
      'The integral is signed area: regions below the $x$-axis count negatively.',
      'The Midpoint Rule $M_n = \\Delta x \\sum f(\\bar{x}_i)$ is usually the sharpest of the simple rectangle estimates and works even when no antiderivative is known.',
      'Integrals are linear, reverse sign when limits are swapped, concatenate across subintervals, and respect order: $f \\le g$ implies $\\int f \\le \\int g$.',
      'A limit of the form $\\lim \\sum f\\left(\\frac{i}{n}\\right)\\frac{1}{n}$ is secretly the integral $\\int_0^1 f(x)\\,dx$.',
    ],
    quiz: [
      {
        q: 'In the definition $\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty}\\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x$, what does $x_i^*$ denote?',
        options: ['Always the right endpoint of the $i$-th subinterval', 'Any sample point chosen from the $i$-th subinterval, with the limit required to be independent of the choices', 'The midpoint of the entire interval $[a, b]$', 'The point where $f$ reaches its maximum'],
        answer: 1,
        explanation: 'The star marks a free sample point. The integral exists only when every possible choice of the $x_i^*$ produces sums with the same limiting value.',
      },
      {
        q: 'If $\\int_0^5 f(x)\\,dx = 12$ and $\\int_5^9 f(x)\\,dx = -3$, what is $\\int_0^9 f(x)\\,dx$?',
        options: [`$15$`, `$-15$`, `$9$`, 'Cannot be determined without knowing $f$'],
        answer: 2,
        explanation: 'Integrals concatenate over adjacent intervals: $12 + (-3) = 9$. No formula for $f$ is needed — only the two given totals.',
      },
      {
        q: 'Estimating $\\int_1^2 \\frac{1}{x}\\,dx$ with the Midpoint Rule and $n = 5$ subintervals, which of the following is the estimate?',
        options: [`$0.6667$`, `$0.6919$`, `$0.7143$`, `$0.7500$`],
        answer: 1,
        explanation: 'With $\\Delta x = 0.2$ and midpoints $1.1, 1.3, 1.5, 1.7, 1.9$, the sum is $0.2(0.9091 + 0.7692 + 0.6667 + 0.5882 + 0.5263) \\approx 0.6919$, very close to $\\ln 2 \\approx 0.6931$.',
      },
      {
        q: 'If $f(x) \\ge g(x)$ on $[a, b]$ and both are integrable, which statement follows?',
        options: [`$\\int_a^b f(x)\\,dx \\le \\int_a^b g(x)\\,dx$`, `$\\int_a^b f(x)\\,dx \\ge \\int_a^b g(x)\\,dx$`, `$\\int_a^b f(x)\\,dx = \\int_a^b g(x)\\,dx$`, 'No ordering of the two integrals can be guaranteed'],
        answer: 1,
        explanation: 'Pointwise order survives accumulation: each rectangle of $f$ is at least as tall as the matching rectangle of $g$, so the limit preserves the inequality.',
      },
    ],
  },

  // ------------------------------------------------------------------ 5.3
  {
    sectionId: 'calc-ch5-s3',
    readingTime: 10,
    intro: 'Computing $\\int_a^b f(x)\\,dx$ from the definition means evaluating a limit of sums — feasible for $x^2$, miserable for anything worse. The Fundamental Theorem of Calculus demolishes the difficulty by joining the two halves of calculus: it says that accumulation functions differentiate back to the integrand, and that definite integrals can be evaluated by any antiderivative at the endpoints. It is arguably the most important theorem in all of calculus.',
    objectives: [
      'State both parts of the Fundamental Theorem of Calculus precisely, with hypotheses',
      'Give the geometric proof intuition for Part 1 and see why Part 2 follows from it',
      'Differentiate functions defined as integrals with variable, and even chained, upper limits',
      'Evaluate definite integrals by the Evaluation Theorem $\\int_a^b f = F(b) - F(a)$ and use evaluation notation',
    ],
    concepts: [
      {
        term: 'FTC Part 1 (differentiating an integral)',
        kind: 'theorem',
        statement: 'If $f$ is continuous on $[a, b]$, then the function $g$ defined by $$g(x) = \\int_a^x f(t)\\,dt, \\qquad a \\le x \\le b$$ is continuous on $[a, b]$ and differentiable on $(a, b)$, with $$g\'(x) = f(x).$$',
        detail: 'Part 1 says that integration builds antiderivatives automatically: every continuous function, however exotic, has an antiderivative — the one obtained by accumulating area. This settles a question left open by Chapter 4, where antiderivatives were found only by recognizing derivative patterns.',
      },
      {
        term: 'Proof intuition for Part 1',
        kind: 'insight',
        statement: 'The difference quotient of the area function is a thin slab ratio: $$\\frac{g(x + h) - g(x)}{h}$$ is the average height of $f$ over the strip $[x, x+h]$, because $g(x+h) - g(x)$ is the area of that strip. As $h \\to 0$ the strip collapses onto $x$, and continuity of $f$ forces the average height toward $f(x)$.',
        detail: 'Formally, if $m$ and $M$ are the minimum and maximum of $f$ on $[x, x+h]$, then $m h \\le g(x+h) - g(x) \\le M h$, so $m \\le \\frac{g(x+h)-g(x)}{h} \\le M$; as $h \\to 0$ both $m$ and $M$ approach $f(x)$, squeezing the quotient to $f(x)$. The proof never computes a single limit of sums — continuity does everything.',
      },
      {
        term: 'FTC Part 2 (the Evaluation Theorem)',
        kind: 'theorem',
        statement: 'If $f$ is continuous on $[a, b]$, then $$\\int_a^b f(x)\\,dx = F(b) - F(a),$$ where $F$ is **any** antiderivative of $f$ on $[a, b]$.',
        detail: 'Part 2 converts integration — a limit of infinite sums — into the search for one function. The answer is independent of which antiderivative is used, because antiderivatives differ by constants: $\\left(F + C\\right)(b) - \\left(F + C\\right)(a) = F(b) - F(a)$. The common shorthand is evaluation brackets: $\\left[ F(x) \\right]_a^b = F(b) - F(a)$.',
      },
      {
        term: 'How Part 2 follows from Part 1',
        kind: 'insight',
        statement: 'By Part 1, the accumulation function $g(x) = \\int_a^x f(t)\\,dt$ is an antiderivative of $f$, so $g$ and any other antiderivative $F$ differ by a constant $C$. Then $$\\int_a^b f(t)\\,dt = g(b) = g(b) - g(a) = \\left[F(b) + C\\right] - \\left[F(a) + C\\right] = F(b) - F(a).$$',
        detail: 'Note $g(a) = \\int_a^a f = 0$, which is why the constant cancels. The logical chain matters: Part 1 is the geometric engine, Part 2 is its computational payoff. Historically, recognizing this connection — slope problems and area problems undoing each other — is what Newton and Leibniz are credited for.',
      },
      {
        term: 'Differentiating variable-limit integrals',
        kind: 'method',
        statement: 'With $f$ continuous and $u$ differentiable, the chain rule turns Part 1 into $$\\frac{d}{dx} \\int_a^{u(x)} f(t)\\,dt = f\\left(u(x)\\right) \\cdot u\'(x).$$ For two moving limits, $\\frac{d}{dx}\\int_{u(x)}^{v(x)} f(t)\\,dt = f(v(x))v\'(x) - f(u(x))u\'(x)$.',
        detail: 'The inner limit replaces $x$ by $u(x)$ as the top of the accumulation, and the chain rule multiplies by how fast that top moves. These patterns appear constantly on exams: if $A(x)$ is area up to $x$, then $A\'(x)$ is the rate at which area accrues — the current height of the curve.',
      },
      {
        term: 'Inverse operations',
        kind: 'insight',
        statement: 'The two parts of the FTC say that **differentiation and integration are inverse processes**: $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$ and $\\int_a^b F\'(x)\\,dx = F(b) - F(a)$.',
        detail: 'One direction integrates a derivative to get net change; the other differentiates an integral to get the integrand back. The pattern parallels $e^{\\ln x} = x$ and $\\ln e^x = x$ for exponentials. It also explains the notation: the $dx$ in the integral is deliberately the same symbol as the differential of Chapter 3.',
      },
    ],
    examples: [
      {
        title: 'Differentiating accumulation functions',
        problem: 'Find the derivative of (a) $g(x) = \\int_0^x \\sqrt{1 + \\sin t}\\;dt$ and (b) $y = \\int_1^{x^4} \\sec t\\;dt$.',
        steps: [
          { label: 'Step 1: Part (a) apply FTC1 directly', text: 'The integrand $\\sqrt{1 + \\sin t}$ is continuous everywhere, so Part 1 applies verbatim: $g\'(x) = \\sqrt{1 + \\sin x}$. No simplification of the integrand is required — and none is possible.' },
          { label: 'Step 2: Part (b) recognize the chained limit', text: 'Here the upper limit is $u(x) = x^4$, not $x$. Write $y = g(u)$ with $g(u) = \\int_1^{u} \\sec t\\;dt$, so the chain rule gives $\\frac{dy}{dx} = g\'(u) \\cdot \\frac{du}{dx}$.' },
          { label: 'Step 3: Apply Part 1 to the inner function', text: 'By Part 1, $g\'(u) = \\sec u$. Therefore $\\frac{dy}{dx} = \\sec(u) \\cdot 4x^3$.' },
          { label: 'Step 4: Back-substitute', text: 'Replacing $u$ by $x^4$ gives $\\frac{dy}{dx} = 4x^3 \\sec\\left(x^4\\right)$, defined wherever $\\sec$ is defined at $x^4$.' },
        ],
        result: '(a) $g\'(x) = \\sqrt{1 + \\sin x}$; (b) $\\frac{dy}{dx} = 4x^3 \\sec(x^4)$. Differentiation never touches the integral’s interior — it reads off the integrand at the moving endpoint.',
      },
      {
        title: 'Evaluating definite integrals with Part 2',
        problem: 'Evaluate $\\displaystyle\\int_1^3 x^2\\,dx$ and $\\displaystyle\\int_0^{\\pi/4} \\sec^2 x\\,dx$.',
        steps: [
          { label: 'Step 1: Find an antiderivative for the first integral', text: 'Since $\\frac{d}{dx}\\left(\\frac{x^3}{3}\\right) = x^2$, take $F(x) = \\frac{x^3}{3}$.' },
          { label: 'Step 2: Evaluate at the endpoints', text: '$\\displaystyle\\int_1^3 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_1^3 = \\frac{27}{3} - \\frac{1}{3} = \\frac{26}{3}$.' },
          { label: 'Step 3: Antiderivative for the trig integral', text: 'From Chapter 3, $\\frac{d}{dx}\\tan x = \\sec^2 x$, so the antiderivative is $\\tan x$.' },
          { label: 'Step 4: Evaluate and conclude', text: '$\\displaystyle\\int_0^{\\pi/4} \\sec^2 x\\,dx = \\left[\\tan x\\right]_0^{\\pi/4} = \\tan\\frac{\\pi}{4} - \\tan 0 = 1 - 0 = 1$.' },
        ],
        result: '$\\int_1^3 x^2\\,dx = \\frac{26}{3}$ and $\\int_0^{\\pi/4} \\sec^2 x\\,dx = 1$ — each computed in two lines instead of a limit of sums.',
      },
      {
        title: 'Closing the loop on Section 5.1',
        problem: 'Use the FTC to find the area under $y = x^2$ on $[0, 1]$, and compare the effort with the Section 5.1 computation.',
        steps: [
          { label: 'Step 1: Identify the area as an integral', text: 'Since $x^2 \\ge 0$ on $[0, 1]$, the area is $\\int_0^1 x^2\\,dx$.' },
          { label: 'Step 2: Antidifferentiate', text: 'An antiderivative of $x^2$ is $\\frac{x^3}{3}$.' },
          { label: 'Step 3: Evaluate', text: '$\\displaystyle\\int_0^1 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3} - 0 = \\frac{1}{3}$.' },
          { label: 'Step 4: Compare the two computations', text: 'Section 5.1 needed a partition, a power-sum formula, and a limit in $n$; the FTC needs only a recognized derivative pattern. The two answers agree because they compute the same limit.' },
        ],
        result: 'The area is $\\frac{1}{3}$, matching Section 5.1 — the FTC replaces the grinding limit of sums with pure antidifferentiation.',
      },
    ],
    keyTakeaways: [
      'FTC Part 1: if $f$ is continuous, then $g(x) = \\int_a^x f(t)\\,dt$ satisfies $g\'(x) = f(x)$ — every continuous function has an antiderivative.',
      'FTC Part 2: $\\int_a^b f(x)\\,dx = F(b) - F(a)$ for any antiderivative $F$, written $\\left[F(x)\\right]_a^b$.',
      'Part 2 follows from Part 1 because the accumulation function is one antiderivative and all others differ from it by a constant.',
      'Chained upper limits bring the chain rule: $\\frac{d}{dx}\\int_a^{u(x)} f(t)\\,dt = f(u(x))\\,u\'(x)$.',
      'Differentiation and integration undo each other, just as the exponential and logarithm do.',
      'The FTC converts area and distance problems from limits of sums into antiderivative hunting — the business of Sections 5.4 and 5.5 and all of Chapter 7.',
    ],
    quiz: [
      {
        q: 'Let $g(x) = \\int_0^x \\frac{1}{1 + t^3}\\,dt$. What is $g\'(x)$?',
        options: [`$\\frac{-3x^2}{(1 + x^3)^2}$`, `$\\frac{1}{1 + x^3}$`, `$\\ln(1 + x^3)$`, `$\\frac{1}{1 + x^3} - \\frac{1}{1 + 0}$`],
        answer: 1,
        explanation: 'FTC Part 1 reads the integrand at the upper limit: $g\'(x) = \\frac{1}{1 + x^3}$. No chain rule is needed because the upper limit is just $x$.',
      },
      {
        q: 'Evaluate $\\displaystyle\\frac{d}{dx} \\int_0^{x^2} e^{-t^2}\\,dt$.',
        options: [`$e^{-x^2}$`, `$2x\\,e^{-x^4}$`, `$e^{-x^4}$`, `$\\frac{e^{-x^4} - 1}{2x}$`],
        answer: 1,
        explanation: 'FTC1 with the chain rule: the integrand evaluated at the moving top $u = x^2$ gives $e^{-(x^2)^2} = e^{-x^4}$, multiplied by $u\'(x) = 2x$.',
      },
      {
        q: 'Which expression correctly evaluates $\\displaystyle\\int_1^4 \\left( 2x + 1 \\right) dx$?',
        options: [`$\\left[x^2 + x\\right]_1^4 = 12$`, `$\\left[x^2 + x\\right]_1^4 = 20$`, `$\\left[2x^2 + x\\right]_1^4 = 65$`, `$\\left[x^2\\right]_1^4 = 15$`],
        answer: 1,
        explanation: 'An antiderivative of $2x + 1$ is $x^2 + x$, so the integral is $(16 + 4) - (1 + 1) = 20$.',
      },
      {
        q: 'Suppose $F$ and $G$ are both antiderivatives of a continuous $f$ on $[a, b]$. Why does the Evaluation Theorem give the same answer with either one?',
        options: ['Because antiderivatives are unique', 'Because $F$ and $G$ differ by a constant, and the constant cancels in $F(b) - F(a)$', 'Because the integral is always zero for continuous functions', 'Because $F$ and $G$ must agree at both endpoints'],
        answer: 1,
        explanation: 'By the Constant Difference Theorem of Section 4.2, $G = F + C$; then $G(b) - G(a) = F(b) + C - F(a) - C = F(b) - F(a)$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 5.4
  {
    sectionId: 'calc-ch5-s4',
    readingTime: 9,
    intro: 'The Evaluation Theorem made integrals computable, provided antiderivatives can be found. This section organizes the search: the indefinite integral records a whole family of antiderivatives, a short table covers most needs, and the Net Change Theorem interprets the results — the integral of a rate of change is the net change. The section ends with the distinction every applications course tests: displacement versus total distance traveled.',
    objectives: [
      'Use indefinite integral notation and explain why the constant $C$ is mandatory',
      'Fluently apply the table of standard antiderivatives for powers, exponentials, and trigonometric functions',
      'State the Net Change Theorem and apply it to rates of change in physics, biology and economics',
      'Distinguish displacement $\\int_a^b v$ from total distance $\\int_a^b |v|$ and compute both from a velocity function',
    ],
    concepts: [
      {
        term: 'The indefinite integral',
        kind: 'definition',
        statement: 'The **indefinite integral** is the family of all antiderivatives of $f$: $$\\int f(x)\\,dx = F(x) + C \\quad \\text{where} \\quad F\'(x) = f(x).$$ The constant $C$ ranges over all real numbers, so the answer is a family of curves, vertical translates of one another.',
        detail: 'The notation deliberately mimics the definite integral — the FTC proved they are the same machinery — but there is no interval, no limits, and no number as the answer. Verify any candidate by differentiating: if $\\frac{d}{dx}\\left[F(x) + C\\right] = f(x)$, it is correct.',
      },
      {
        term: 'Table of standard antiderivatives',
        kind: 'method',
        statement: 'For use with the Evaluation Theorem: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ ($n \\ne -1$), $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$, $\\int e^x\\,dx = e^x + C$, $\\int \\sin x\\,dx = -\\cos x + C$, $\\int \\cos x\\,dx = \\sin x + C$, $\\int \\sec^2 x\\,dx = \\tan x + C$, $\\int \\sec x \\tan x\\,dx = \\sec x + C$, $\\int \\csc^2 x\\,dx = -\\cot x + C$.',
        detail: 'Every entry is a reversed derivative rule from Chapter 3, and each holds on any interval where the integrand is defined. Watch two traps: the power rule fails at $n = -1$ (that case is the logarithm), and $\\int \\frac{1}{x}\\,dx$ needs the absolute value to cover negative $x$.',
      },
      {
        term: 'The Net Change Theorem',
        kind: 'theorem',
        statement: 'The integral of a rate of change is the net change: $$\\int_a^b F\'(x)\\,dx = F(b) - F(a).$$ Equivalently, if $F$ measures a quantity that changes at known rate $F\'$, then the value at time $b$ is the initial value plus the accumulated rate: $F(b) = F(a) + \\int_a^b F\'(x)\\,dx$.',
        detail: 'This is FTC Part 2 wearing its applied costume. Net change adds the positive changes and subtracts the negative ones — a tank that gains 10 liters then loses 4 has net change 6, even though 14 liters of flow occurred. Absolute values are needed when gross, not net, totals are wanted.',
      },
      {
        term: 'Displacement versus distance',
        kind: 'insight',
        statement: 'For velocity $v(t)$ on $[a, b]$: **displacement** is $\\int_a^b v(t)\\,dt$ (net change of position), while **total distance traveled** is $$\\int_a^b \\left| v(t) \\right| dt,$$ computed by splitting $[a, b]$ at every zero of $v$ and adding the absolute values of the pieces.',
        detail: 'This is the signed-area lesson of Section 5.2 in motion. A ball thrown upward retraces its path: displacement counts the round trip as partly cancelling, distance counts both legs as positive. Exam problems love functions like $v(t) = t^2 - 2t - 8$ precisely because $v$ changes sign exactly once inside the interval.',
      },
      {
        term: 'Accumulating applied rates',
        kind: 'insight',
        statement: 'Whenever a quantity is known through its rate — water flow in and out of a tank $\\frac{dV}{dt}$, population growth $\\frac{dP}{dt}$, marginal cost $\\frac{dC}{dx}$, current charging a capacitor $\\frac{dQ}{dt}$ — the amount of change over an interval is $\\int_a^b (\\text{rate})\\,dt$, and the current amount is the initial amount plus that integral.',
        detail: 'Marginal cost from Section 3.7 is exactly a rate of change of cost per unit produced, so the cost of increasing production from $a$ to $b$ units is $\\int_a^b C\'(x)\\,dx$. The same accumulate-the-rate pattern drives differential equations in Chapter 9 and every conservation law in physics.',
      },
      {
        term: 'Checking antiderivatives',
        kind: 'method',
        statement: 'Because antidifferentiation is the inverse of differentiation, every indefinite integral can be **verified** rather than trusted: differentiate the proposed answer and confirm the integrand returns.',
        detail: 'This habit also resolves non-uniqueness: $\\sin^2 x$ and $-\\cos^2 x$ differ by a constant, so both are valid antiderivatives of $\\sin x \\cos x$ — differentiation confirms both. There is no equivalent automatic check for limits or integrals computed from the definition, which is why the FTC is as much a quality-control tool as a shortcut.',
      },
    ],
    examples: [
      {
        title: 'Finding an indefinite integral',
        problem: 'Evaluate $\\displaystyle\\int \\left( 10x^4 - 3\\sec^2 x \\right) dx$ and verify the answer.',
        steps: [
          { label: 'Step 1: Split by linearity', text: 'Indefinite integrals inherit linearity: the integral equals $10\\int x^4\\,dx - 3\\int \\sec^2 x\\,dx$.' },
          { label: 'Step 2: Apply the power rule', text: 'With $n = 4$: $\\int x^4\\,dx = \\frac{x^5}{5} + C_1$, so the first piece is $10 \\cdot \\frac{x^5}{5} = 2x^5$.' },
          { label: 'Step 3: Apply the trig entry', text: 'From the table, $\\int \\sec^2 x\\,dx = \\tan x + C_2$, so the second piece is $-3\\tan x$.' },
          { label: 'Step 4: Combine and verify', text: 'The answer is $2x^5 - 3\\tan x + C$. Differentiating gives $10x^4 - 3\\sec^2 x$ — exactly the integrand, so the family is correct.' },
        ],
        result: '$\\displaystyle\\int \\left( 10x^4 - 3\\sec^2 x \\right) dx = 2x^5 - 3\\tan x + C$, with one constant absorbing all others.',
      },
      {
        title: 'Displacement versus distance',
        problem: 'A particle moves along a line with velocity $v(t) = t^2 - 2t - 8$ meters per second for $0 \\le t \\le 6$. Find its displacement and the total distance traveled.',
        steps: [
          { label: 'Step 1: Find where the velocity changes sign', text: 'Factor $v(t) = (t - 4)(t + 2)$; the zero in $[0, 6]$ is $t = 4$. Testing $t = 0$ gives $v(0) = -8 < 0$, so the particle moves backward on $(0, 4)$ and forward on $(4, 6)$.' },
          { label: 'Step 2: Compute displacement as net change', text: 'An antiderivative is $s\'$ integrated: with $F(t) = \\frac{t^3}{3} - t^2 - 8t$, displacement $= F(6) - F(0) = (72 - 36 - 48) - 0 = -12$ meters.' },
          { label: 'Step 3: Split the distance integral at the sign change', text: '$F(4) = \\frac{64}{3} - 16 - 32 = -\\frac{80}{3}$, so $\\int_0^4 v(t)\\,dt = F(4) - F(0) = -\\frac{80}{3}$ and $\\int_4^6 v(t)\\,dt = F(6) - F(4) = -12 + \\frac{80}{3} = \\frac{44}{3}$.' },
          { label: 'Step 4: Add the absolute values', text: 'Total distance $= \\left| -\\frac{80}{3} \\right| + \\left| \\frac{44}{3} \\right| = \\frac{80 + 44}{3} = \\frac{124}{3} \\approx 41.3$ meters.' },
        ],
        result: 'Displacement is $-12$ meters (net motion backward), but the particle actually covered $\\frac{124}{3} \\approx 41.3$ meters of ground — two very different answers from the same velocity.',
      },
      {
        title: 'Net change in a business context',
        problem: 'The marginal cost of producing a product is $C\'(x) = 6 - 0.02x$ dollars per unit, and the fixed cost is $C(0) = 450$ dollars. Find the cost of producing the first 100 units.',
        steps: [
          { label: 'Step 1: Frame with the Net Change Theorem', text: 'Cost of units 0 through 100 is the accumulation of marginal cost: $C(100) - C(0) = \\int_0^{100} (6 - 0.02x)\\,dx$.' },
          { label: 'Step 2: Antidifferentiate', text: 'An antiderivative of $6 - 0.02x$ is $6x - 0.01x^2$.' },
          { label: 'Step 3: Evaluate', text: '$\\displaystyle\\int_0^{100}(6 - 0.02x)\\,dx = \\left[6x - 0.01x^2\\right]_0^{100} = (600 - 100) - 0 = 500$ dollars.' },
          { label: 'Step 4: Add the fixed cost', text: 'Total cost $C(100) = C(0) + 500 = 450 + 500 = 950$ dollars — the initial value plus the integral of the rate, exactly as the Net Change Theorem prescribes.' },
        ],
        result: 'Producing 100 units costs 950 dollars: fixed cost 450 plus 500 dollars of accumulated marginal cost.',
      },
    ],
    keyTakeaways: [
      'The indefinite integral $\\int f(x)\\,dx = F(x) + C$ denotes the entire family of antiderivatives — never omit the constant $C$.',
      'The standard table (powers with $n \\ne -1$, $\\frac{1}{x} \\to \\ln|x|$, $e^x$, and the trig rules) comes from reversing Chapter 3 derivative patterns.',
      'The Net Change Theorem $\\int_a^b F\'(x)\\,dx = F(b) - F(a)$ says: integrate a rate, get the net change.',
      'To recover a current amount from a rate, add the initial value: $F(b) = F(a) + \\int_a^b F\'$.',
      'Displacement is $\\int_a^b v(t)\\,dt$; total distance is $\\int_a^b |v(t)|\\,dt$, computed by splitting at the zeros of $v$.',
      'The best check of any antiderivative is to differentiate it back.',
    ],
    quiz: [
      {
        q: 'Evaluate $\\displaystyle\\int \\left( \\frac{1}{x} + e^x \\right) dx$.',
        options: [`$\\ln|x| + e^x + C$`, `$\\frac{1}{x^2} + e^x + C$`, `$\\ln|x| + \\frac{e^x}{x} + C$`, `$-\\frac{1}{x^2} + e^x + C$`],
        answer: 0,
        explanation: 'Antiderivative of $\\frac{1}{x}$ is $\\ln|x|$ (the power rule fails at $n = -1$), and of $e^x$ is $e^x$ itself.',
      },
      {
        q: 'Why must an indefinite integral always end with $+ C$?',
        options: ['To make the answer a function', 'Because the derivative of any constant is zero, so antiderivatives come in vertical-shift families', 'Because the integral may diverge', 'It is only needed for trigonometric integrands'],
        answer: 1,
        explanation: 'If $F\' = f$ then $(F + C)\' = f$ for every constant $C$; the general antiderivative is a whole family of parallel curves.',
      },
      {
        q: 'A particle has $v(t) < 0$ on $(0, 3)$ and $v(t) > 0$ on $(3, 6)$. Which statement is true?',
        options: ['Displacement equals total distance', 'Displacement equals total distance minus twice $\\left|\\int_0^3 v(t)\\,dt\\right|$', 'Total distance equals $\\left|\\int_0^6 v(t)\\,dt\\right|$', 'Displacement is always greater than total distance'],
        answer: 1,
        explanation: 'Total distance adds both movements as positive: $|\\int_0^3 v| + |\\int_3^6 v|$; displacement is their signed difference, so distance exceeds displacement by twice the size of the negative leg.',
      },
      {
        q: 'Water flows out of a tank at rate $r(t)$ liters per hour, negative meaning inflow. The Net Change Theorem says the change in volume from hour 2 to hour 8 is:',
        options: [`$\\int_2^8 |r(t)|\\,dt$`, `$r(8) - r(2)$`, `$\\int_2^8 r(t)\\,dt$`, `$V(8) + \\int_2^8 r(t)\\,dt$`],
        answer: 2,
        explanation: 'Volume is the antiderivative of its rate: net change is the signed integral of the rate. Absolute values would measure total flow moved, not the net change in storage.',
      },
    ],
  },

  // ------------------------------------------------------------------ 5.5
  {
    sectionId: 'calc-ch5-s5',
    readingTime: 9,
    intro: 'The chain rule was the workhorse of differentiation, so its reverse must exist for integration. The Substitution Rule — u-substitution — is the antichain rule: recognize a composition and the derivative of its inside function together, rename the inside piece, and transform the integral into a friendlier one. For definite integrals the limits transform too, and symmetry turns many integrals into half their expected work.',
    objectives: [
      'Execute u-substitution on indefinite integrals, including constant adjustments to match $du$',
      'Transform the limits of a definite integral under substitution, and explain why back-substitution is then unnecessary',
      'Prove and apply the odd-function and even-function rules for symmetric integrals',
      'Recognize when a substitution attempt has failed and a different technique is needed',
    ],
    concepts: [
      {
        term: 'The Substitution Rule',
        kind: 'method',
        statement: 'If $u = g(x)$ is differentiable with $g\'$ continuous, and $f$ is continuous on the range of $g$, then $$\\int f\\left(g(x)\\right) g\'(x)\\,dx = \\int f(u)\\,du.$$',
        detail: 'The rule is exactly the chain rule $\\frac{d}{dx}F(g(x)) = f(g(x))g\'(x)$ read backwards. In practice: pick the inside function $u$, compute $du$, and check that the integrand contains (a constant multiple of) the factor $du$ needs. If it does not, substitution with that choice of $u$ will not work.',
      },
      {
        term: 'Why substitution works',
        kind: 'insight',
        statement: 'Substitution is verified, not assumed: differentiate the final answer. If $\\int f(u)\\,du = F(u) + C$, then by the chain rule $\\frac{d}{dx}F(g(x)) = f(g(x))g\'(x)$, which is the original integrand.',
        detail: 'Every technique in Chapter 7 is a derivative rule run in reverse, and each can be checked by differentiation. This is a luxury limits never had — a built-in oracle for answers. Mentally test $\\int x e^{x^2} dx = \\frac{1}{2}e^{x^2} + C$: differentiating gives $\\frac{1}{2} e^{x^2} \\cdot 2x = x e^{x^2}$.',
      },
      {
        term: 'Substitution in definite integrals',
        kind: 'method',
        statement: 'When substituting $u = g(x)$ in a definite integral, transform the limits with it: $$\\int_a^b f\\left(g(x)\\right) g\'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du.$$',
        detail: 'The new limits are $u$-values: the lower limit becomes $g(a)$ and the upper becomes $g(b)$. With converted limits there is no back-substitution — the answer is a number directly. The alternative workflow (substitute, integrate in $x$, then restore $x$) also works but invites algebra slips; converting limits is the professional habit.',
      },
      {
        term: 'Symmetric integrals',
        kind: 'theorem',
        statement: 'If $f$ is continuous on $[-a, a]$, then: if $f$ is **odd**, $f(-x) = -f(x)$, then $\\int_{-a}^{a} f(x)\\,dx = 0$; if $f$ is **even**, $f(-x) = f(x)$, then $\\int_{-a}^{a} f(x)\\,dx = 2\\int_0^{a} f(x)\\,dx$.',
        detail: 'The odd case is the signed-area cancellation seen in Section 5.2: the negative-side lobes mirror and cancel the positive-side lobes. The even case halves the workload by doubling one clean half. Check parity before computing anything on a symmetric interval — it can eliminate the entire problem.',
      },
      {
        term: 'Choosing the substitution',
        kind: 'insight',
        statement: 'The candidate for $u$ is the **inside function of a composition** — the thing being done to $x$ last — and the integral is a candidate for substitution only when $du$ (up to a constant factor) is also present as a factor.',
        detail: 'In $\\int \\sqrt{x^3 + 1}\\; x^2\\,dx$, the inside function is $u = x^3 + 1$ and $du = 3x^2\\,dx$; the integrand supplies $x^2\\,dx$ but no constant factor of $3$ — that is fine, since constants can be inserted freely. But in $\\int \sqrt{x^3 + 1}\\,dx$ nothing resembling $x^2\\,dx$ appears, and this substitution fails; such integrals wait for Chapter 7 (here, none of its tools help either).',
      },
      {
        term: 'When substitution is not enough',
        kind: 'insight',
        statement: 'If no inside function has its derivative present even after constant adjustments, substitution stalls. Products of genuinely different function families — like $\\int x e^x\\,dx$ or $\\int x \\sin x\\,dx$ — need **integration by parts**, the subject of Section 7.1.',
        detail: 'Diagnosing failure early is a skill: attempting $u = e^x$ in $\\int x e^x dx$ leaves $x$ stranded with no matching $du$. The tower of techniques in Chapter 7 exists precisely because each rule of differentiation has an inverse that works only on matching shapes of integrands.',
      },
    ],
    examples: [
      {
        title: 'Two workhorse substitutions',
        problem: 'Evaluate $\\displaystyle\\int x\\,e^{x^2}\\,dx$ and $\\displaystyle\\int \\tan x\\,dx$.',
        steps: [
          { label: 'Step 1: Choose $u$ in the first integral', text: 'The composition is $e^{x^2}$, so take $u = x^2$; then $du = 2x\\,dx$, that is $x\\,dx = \\frac{1}{2}\\,du$. The integrand is exactly $e^u \\cdot \\frac{1}{2}\\,du$.' },
          { label: 'Step 2: Integrate in $u$ and back-substitute', text: '$\\displaystyle\\int x e^{x^2} dx = \\frac{1}{2}\\int e^u\\,du = \\frac{1}{2} e^u + C = \\frac{1}{2} e^{x^2} + C$. Differentiating confirms the answer.' },
          { label: 'Step 3: Rewrite the second integrand', text: 'Write $\\tan x = \\frac{\\sin x}{\\cos x}$ and take $u = \\cos x$, so $du = -\\sin x\\,dx$ and $\\sin x\\,dx = -du$.' },
          { label: 'Step 4: Integrate as a logarithm', text: '$\\displaystyle\\int \\tan x\\,dx = \\int \\frac{1}{u}(-du) = -\\ln|u| + C = -\\ln|\\cos x| + C = \\ln|\\sec x| + C$, using the log law $-\\ln|\\cos| = \\ln|\\sec|$.' },
        ],
        result: '$\\int x e^{x^2}\\,dx = \\frac{1}{2}e^{x^2} + C$ and $\\int \\tan x\\,dx = \\ln|\\sec x| + C$ — the second is a table entry worth memorizing.',
      },
      {
        title: 'A definite integral with transformed limits',
        problem: 'Evaluate $\\displaystyle\\int_0^4 \\sqrt{2x + 1}\\;dx$ by converting the limits.',
        steps: [
          { label: 'Step 1: Substitute and re-limit', text: 'Let $u = 2x + 1$; then $du = 2\\,dx$. When $x = 0$, $u = 1$; when $x = 4$, $u = 9$. The integral becomes an integral entirely in $u$, from 1 to 9.' },
          { label: 'Step 2: Rewrite the integrand', text: 'Since $dx = \\frac{1}{2}\\,du$, the integral is $\\int_1^9 u^{1/2} \\cdot \\frac{1}{2}\\,du = \\frac{1}{2}\\int_1^9 u^{1/2}\\,du$.' },
          { label: 'Step 3: Apply the power rule', text: '$\\displaystyle\\frac{1}{2}\\int_1^9 u^{1/2}\\,du = \\frac{1}{2} \\cdot \\frac{2}{3}\\left[ u^{3/2} \\right]_1^9 = \\frac{1}{3}\\left( 27 - 1 \\right)$.' },
          { label: 'Step 4: Conclude', text: 'The value is $\\frac{26}{3}$. Because the limits were converted to $u$-values, no back-substitution into $x$ was ever needed.' },
        ],
        result: '$\\displaystyle\\int_0^4 \\sqrt{2x+1}\\,dx = \\frac{26}{3}$, computed entirely in the $u$-world.',
      },
      {
        title: 'Symmetry before computation',
        problem: 'Evaluate $\\displaystyle\\int_{-1}^{1} \\left( x^4 + \\tan x \\right) dx$.',
        steps: [
          { label: 'Step 1: Split the integral', text: 'By linearity, the integral is $\\int_{-1}^{1} x^4\\,dx + \\int_{-1}^{1} \\tan x\\,dx$ — and the interval is symmetric, so test each integrand for parity.' },
          { label: 'Step 2: Classify the pieces', text: '$x^4$ is even since $(-x)^4 = x^4$; $\\tan(-x) = -\\tan x$, so $\\tan x$ is odd.' },
          { label: 'Step 3: Apply the symmetric-integral rules', text: 'The odd piece integrates to zero over $[-1, 1]$, and the even piece doubles: $\\int_{-1}^{1} x^4\\,dx = 2\\int_0^1 x^4\\,dx$.' },
          { label: 'Step 4: Compute the surviving half', text: '$\\displaystyle 2\\int_0^1 x^4\\,dx = 2\\left[ \\frac{x^5}{5} \\right]_0^1 = \\frac{2}{5}$, and adding the vanishing tangent piece changes nothing.' },
        ],
        result: '$\\displaystyle\\int_{-1}^{1}\\left(x^4 + \\tan x\\right)dx = \\frac{2}{5}$ — half the integrand was eliminated before any antidifferentiation.',
      },
    ],
    keyTakeaways: [
      'Substitution reverses the chain rule: $\\int f(g(x))g\'(x)\\,dx = \\int f(u)\\,du$ with $u = g(x)$.',
      'Choose $u$ as the inside function; the integral is workable only if its derivative is present up to a constant multiple.',
      'In definite integrals, convert the limits to $u$-values: new limits $g(a)$ and $g(b)$; then never return to $x$.',
      'Symmetric intervals reward parity checks: odd integrands integrate to $0$ on $[-a, a]$; even integrands give $2\\int_0^a$.',
      'Every substitution answer can be verified by differentiating — use that oracle constantly.',
      'When no $du$ can be matched, substitution fails and a Chapter 7 technique (usually parts) is the next move.',
    ],
    quiz: [
      {
        q: 'Which substitution is most appropriate for $\\displaystyle\\int x^2 \\sqrt{1 + x^3}\\,dx$?',
        options: [`$u = \\sqrt{1 + x^3}$`, `$u = x^2$`, `$u = 1 + x^3$`, `$u = x$`],
        answer: 2,
        explanation: 'The inside function is $1 + x^3$ and $du = 3x^2\\,dx$; the integrand contains $x^2\\,dx$, a constant multiple of $du$ — the constant 3 can be supplied.',
      },
      {
        q: 'Evaluating $\\displaystyle\\int_0^2 \\frac{x}{x^2 + 1}\\,dx$ with $u = x^2 + 1$, what are the new limits and the transformed integral?',
        options: [`$u$ from 1 to 5, and $\\frac{1}{2}\\int_1^5 \\frac{du}{u}$`, `$u$ from 0 to 2, and $\\int_0^2 \\frac{du}{u}$`, `$u$ from 1 to 5, and $\\int_1^5 \\frac{du}{u}$`, `$u$ from 0 to 5, and $\\frac{1}{2}\\int_0^5 \\frac{du}{u}$`],
        answer: 0,
        explanation: 'The limits transform as $u = g(x)$: $g(0) = 1$ and $g(2) = 5$; and $du = 2x\\,dx$ supplies the factor $\\frac{1}{2}$.',
      },
      {
        q: 'What is $\\displaystyle\\int_{-\\pi/2}^{\\pi/2} \\left( x^3 \\cos^2 x + \\sin^5 x \\right) dx$?',
        options: [`$\\pi/2$`, `$2\\int_0^{\\pi/2} \\sin^5 x\\,dx$`, `$0$`, `$2\\int_0^{\\pi/2} x^3 \\cos^2 x\\,dx$`],
        answer: 2,
        explanation: '$x^3\\cos^2 x$ is odd (odd times even) and $\\sin^5 x$ is odd; both pieces vanish on the symmetric interval, so the integral is exactly $0$.',
      },
      {
        q: 'After substituting $u = \\cos x$ into $\\displaystyle\\int \\sin^3 x\\,dx$, the next step is:',
        options: [`$\\int u^3\\,du$`, `$-\\int u^3\\,du$`, `$-\\int (1 - u^2)\\,du$`, `$\\int (1 - u^2)\\,du$`],
        answer: 2,
        explanation: 'Write $\\sin^3 x = \\sin x \\cdot \\sin^2 x = \\sin x (1 - \\cos^2 x)$; with $du = -\\sin x\\,dx$ the integral becomes $-\\int(1 - u^2)\\,du$.',
      },
      // PYQ-pattern — substitution with exponential composite (rephrased, values changed)
      {
        q: 'Evaluate $\\displaystyle\\int_{0}^{1} x e^{x^{2}}\\,dx$ using $u = x^{2}$.',
        options: [`$e$`, `$\\frac{e-1}{2}$`, `$e - 1$`, `$\\frac{e}{2}$`],
        answer: 1,
        explanation: 'Step 1: Restate the composite structure with inner $u = x^{2}$ and $du = 2x\\,dx$. Step 2: Recall the key substitution rule $\\int_{a}^{b} f(g(x))g^{\\prime}(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du$. Step 3: Convert limits as $u(0) = 0$ and $u(1) = 1$, with $x\\,dx = \\frac{du}{2}$. Step 4: Transform to $\\frac{1}{2}\\int_{0}^{1} e^{u}\\,du = \\frac{1}{2}(e - 1)$. Step 5: The distractors fail since $e - 1$ omits the $\\frac{1}{2}$ factor, $e$ forgets to subtract the lower value, and $\\frac{e}{2}$ keeps only the upper value. Step 6: Hence the integral equals $\\frac{e-1}{2}$.'
      },
      // PYQ-pattern — logarithmic integral by substitution (rephrased, values changed)
      {
        q: 'Using $u = x^{2} + 1$, evaluate $\\displaystyle\\int_{0}^{1} \\frac{2x}{x^{2}+1}\\,dx$.',
        options: [`$\\ln 1$`, `$1$`, `$\\ln 2$`, `$2$`],
        answer: 2,
        explanation: 'Step 1: Restate the integrand as a quotient whose numerator is the derivative of the denominator up to a constant. Step 2: Recall the key rule $\\int \\frac{u^{\\prime}}{u}\\,dx = \\ln|u| + C$ with $u = x^{2} + 1$. Step 3: Note $du = 2x\\,dx$, so the integral is $\\int_{x=0}^{1} \\frac{du}{u}$ with $u(0) = 1$ and $u(1) = 2$. Step 4: Integrate to $\\ln|u|$ and evaluate as $\\ln 2 - \\ln 1 = \\ln 2$. Step 5: The distractors fail since $\\ln 1 = 0$ keeps only the lower limit, $1$ confuses the log value with the upper limit, and $2$ reports the upper $u$ value itself. Step 6: Therefore the integral equals $\\ln 2$.'
      },
    ],
  },
]

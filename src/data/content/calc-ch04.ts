import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 4: Applications of Differentiation (Sections 4.1 – 4.8)
// Master study content. Worked-example numbers follow the book’s classics
// (the 2400-ft river fence, the 1200-cm2 open box, the inscribed cylinder,
// sqrt(2) by Newton’s method, and the closed-interval quartic).
// All math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh4Content: SectionContent[] = [
  // ------------------------------------------------------------------ 4.1
  {
    sectionId: 'calc-ch4-s1',
    readingTime: 9,
    intro: 'The first great application of the derivative is locating where a function reaches its highest and lowest values. This section defines absolute and local extrema, proves through Fermat’s Theorem that interior extrema can hide only at critical numbers — points where the derivative is zero or fails to exist — and packages the whole search into the Closed Interval Method, the one procedure guaranteed to find extreme values on a finite closed interval.',
    objectives: [
      'Distinguish absolute extrema from local extrema and identify both from graphs and formulas',
      'State the Extreme Value Theorem and explain why continuity and a closed interval are required',
      'Find all critical numbers of a function, including points where the derivative fails to exist',
      'Explain Fermat’s Theorem and why $f\'(c) = 0$ alone does not guarantee an extremum',
      'Apply the Closed Interval Method to find absolute maximum and minimum values',
    ],
    concepts: [
      {
        term: 'Absolute (global) extrema',
        kind: 'definition',
        statement: 'Let $f$ have domain $D$. Then $f(c)$ is an **absolute maximum** value if $f(c) \\ge f(x)$ for all $x$ in $D$, and an **absolute minimum** value if $f(c) \\le f(x)$ for all $x$ in $D$.',
        detail: 'Absolute extrema are statements about the whole domain — the highest and lowest points on the entire graph. They need not exist: $f(x) = x$ has no absolute maximum on the open interval $(0, 1)$ and $f(x) = 1/x$ has no absolute maximum on $(0, 1]$. The Extreme Value Theorem below gives the two conditions that force them to exist.',
      },
      {
        term: 'Local (relative) extrema',
        kind: 'definition',
        statement: '$f(c)$ is a **local maximum** value if $f(c) \\ge f(x)$ when $x$ is near $c$ (that is, in some open interval containing $c$, within the domain); similarly $f(c)$ is a **local minimum** value if $f(c) \\le f(x)$ for all $x$ near $c$.',
        detail: 'A local extremum is a hilltop or valley floor — best in its neighborhood, not necessarily on the whole domain. The graph of a cubic has one local max and one local min but neither is the highest or lowest point overall, because the ends of the graph run off to infinity. An absolute extremum is automatically local.',
      },
      {
        term: 'The Extreme Value Theorem',
        kind: 'theorem',
        statement: 'If $f$ is continuous on a closed interval $[a, b]$, then $f$ attains an absolute maximum value $f(c)$ and an absolute minimum value $f(d)$ at some numbers $c$ and $d$ in $[a, b]$.',
        detail: 'Both hypotheses are essential. Open interval: $f(x) = x$ on $(0, 1)$ never actually reaches 0 or 1. Discontinuity: $f(x) = 1/x$ on $[-1, 1]$ has no largest value — it blows up near the origin. Continuous on a closed interval, however, the graph is a connected arc pinned down at both ends, and it must somewhere touch a highest and a lowest point. The theorem is an existence guarantee — it says the search will succeed, and the Closed Interval Method tells you exactly how to conduct it.',
      },
      {
        term: 'Critical number',
        kind: 'definition',
        statement: 'A number $c$ in the domain of $f$ is a **critical number** if either $f\'(c) = 0$ or $f\'(c)$ does not exist.',
        detail: 'Both halves matter. The polynomial $x^{3} - 3x^{2}$ has critical numbers where $f\'$ vanishes; the absolute value function $f(x) = |x|$ has the critical number $0$ because the corner makes $f\'(0)$ fail to exist — and that corner is exactly its minimum. Note that the point must be in the domain of $f$: for $f(x) = x + 1/x$ the derivative blows up at $x = 0$, but $0$ is not in the domain, so it is not a critical number.',
      },
      {
        term: 'Fermat’s Theorem',
        kind: 'theorem',
        statement: 'If $f$ has a local maximum or minimum at $c$, and $f\'(c)$ exists, then $$f\'(c) = 0.$$',
        detail: 'Proof idea for a local max: for $h > 0$ the difference quotient $\\frac{f(c+h) - f(c)}{h} \\le 0$ (the numerator is $\\le 0$), so the right-hand limit is $\\le 0$; for $h < 0$ the same quotient is $\\ge 0$, so the left-hand limit is $\\ge 0$. If $f\'(c)$ exists, both one-sided limits agree, forcing $f\'(c) = 0$ — the tangent at a hilltop or valley floor is horizontal. Caution: the converse fails both ways. $f(x) = x^{3}$ has $f\'(0) = 0$ but no extremum there, and $f(x) = |x|$ has a minimum at $0$ where $f\'(0)$ does not exist. That is precisely why the definition of critical number includes both cases.',
      },
      {
        term: 'Critical numbers are the only suspects',
        kind: 'insight',
        statement: 'If $f$ has a local maximum or minimum at $c$, then $c$ is a critical number of $f$. So to locate local extrema it suffices to examine the critical numbers — but each critical number must still be tested, because not every critical number is an extremum.',
        detail: 'This is the great sorting result of the section: local extrema occur only where $f\'(c) = 0$ or $f\'(c)$ fails to exist. The classic non-extremum is the saddle-flat point of $x^{3}$ at the origin, where the tangent is horizontal yet the graph keeps climbing. Testing candidates is the job of the sign tests in Section 4.3.',
      },
      {
        term: 'The Closed Interval Method',
        kind: 'method',
        statement: 'To find the absolute extrema of a continuous $f$ on $[a, b]$: **1.** Find the critical numbers of $f$ in $(a, b)$. **2.** Evaluate $f$ at each critical number and at both endpoints $a$ and $b$. **3.** The largest of these values is the absolute maximum; the smallest is the absolute minimum.',
        detail: 'Why the method is complete: by the Extreme Value Theorem the extrema exist; if an extremum sits at an interior point, Fermat says it lands on a critical number; otherwise it lands at an endpoint. So the candidate list — critical numbers plus endpoints — is guaranteed to contain both winners, and a finite comparison settles everything without a graph.',
      },
    ],
    examples: [
      {
        title: 'Finding critical numbers',
        problem: 'Find the critical numbers of $f(x) = x + \\dfrac{1}{x}$.',
        steps: [
          { label: 'Step 1: Differentiate', text: 'Using the Quotient Rule (or the Power Rule on $x^{-1}$), $f\'(x) = 1 - \\dfrac{1}{x^{2}} = \\dfrac{x^{2} - 1}{x^{2}}$.' },
          { label: 'Step 2: Solve $f\'(x) = 0$', text: 'The fraction vanishes when the numerator does: $x^{2} - 1 = 0$, so $x = \\pm 1$. Both lie in the domain of $f$.' },
          { label: 'Step 3: Check where $f\'$ fails to exist', text: 'The derivative is undefined at $x = 0$ — but $0$ is not in the domain of $f$ either, so it is not a critical number. A point must be in the domain of the function itself to qualify.' },
          { label: 'Step 4: Classify quickly', text: 'The sign of $f\'$: negative on $(-1, 0)$ and $(0, 1)$, positive on $(-\\infty, -1)$ and $(1, \\infty)$. So there is a local maximum at $(-1, -2)$ and a local minimum at $(1, 2)$ — both branches of the graph dip toward the vertical asymptote $x = 0$ between them.' },
        ],
        result: 'The critical numbers are $x = -1$ and $x = 1$; the point $x = 0$ is excluded because it lies outside the domain, even though the derivative blows up there.',
      },
      {
        title: 'Closed Interval Method on a cubic',
        problem: 'Find the absolute maximum and minimum values of $f(x) = x^{3} - 3x^{2} + 1$ on the interval $\\left[-\\tfrac{1}{2}, 4\\right]$.',
        steps: [
          { label: 'Step 1: Confirm the hypotheses', text: '$f$ is a polynomial, hence continuous everywhere — in particular on $\\left[-\\tfrac{1}{2}, 4\\right]$ — so the Extreme Value Theorem guarantees that absolute extrema exist and the Closed Interval Method will find them.' },
          { label: 'Step 2: Find the critical numbers', text: '$f\'(x) = 3x^{2} - 6x = 3x(x - 2)$, which vanishes at $x = 0$ and $x = 2$. Both lie inside the interval.' },
          { label: 'Step 3: Evaluate at the critical numbers', text: '$f(0) = 1$ and $f(2) = 8 - 12 + 1 = -3$.' },
          { label: 'Step 4: Evaluate at the endpoints', text: '$f\\left(-\\tfrac{1}{2}\\right) = -\\tfrac{1}{8} - \\tfrac{3}{4} + 1 = \\tfrac{1}{8}$, while $f(4) = 64 - 48 + 1 = 17$.' },
          { label: 'Step 5: Compare all candidates', text: 'The values are $\\tfrac{1}{8}$, $1$, $-3$, $17$. The smallest is $-3$ and the largest is $17$.' },
        ],
        result: 'Absolute minimum $f(2) = -3$; absolute maximum $f(4) = 17$, attained at the right endpoint. Note that $x = 0$ is a local maximum of the graph but loses the global comparison — the endpoint wins.',
      },
      {
        title: 'Closed Interval Method on a quartic',
        problem: 'Find the absolute extrema of $f(x) = 3x^{4} - 16x^{3} + 18x^{2} - 1$ on $[-1, 4]$.',
        steps: [
          { label: 'Step 1: Differentiate and factor', text: '$f\'(x) = 12x^{3} - 48x^{2} + 36x = 12x\\left(x^{2} - 4x + 3\\right) = 12x(x - 1)(x - 3)$.' },
          { label: 'Step 2: List the critical numbers in the interval', text: 'The candidates are $x = 0$, $x = 1$ and $x = 3$; all three lie in the open interval $(-1, 4)$.' },
          { label: 'Step 3: Evaluate $f$ at the critical numbers', text: '$f(0) = -1$; $f(1) = 3 - 16 + 18 - 1 = 4$; $f(3) = 243 - 432 + 162 - 1 = -28$.' },
          { label: 'Step 4: Evaluate $f$ at the endpoints', text: '$f(-1) = 3 + 16 + 18 - 1 = 36$; $f(4) = 768 - 1024 + 288 - 1 = 31$.' },
          { label: 'Step 5: Compare the five values', text: 'The values $-1$, $4$, $-28$, $36$, $31$ have minimum $-28$ and maximum $36$.' },
          { label: 'Step 6: Interpret', text: 'The absolute minimum sits at an interior critical number ($x = 3$) but the absolute maximum sits at the left endpoint ($x = -1$) — a reminder that endpoints are full citizens of the comparison and often win.' },
        ],
        result: 'Absolute minimum $f(3) = -28$; absolute maximum $f(-1) = 36$. Five candidate values, one comparison — no graph required.',
      },
    ],
    keyTakeaways: [
      'Absolute extrema are global statements over the whole domain; local extrema only compare values near the point.',
      'The Extreme Value Theorem: a function continuous on a closed interval $[a, b]$ must attain an absolute max and an absolute min — both hypotheses are essential.',
      'A critical number is a domain point where $f\'(c) = 0$ or $f\'(c)$ does not exist; points outside the domain never qualify.',
      'Fermat’s Theorem: a differentiable local extremum has a horizontal tangent. The converse is false — $x^{3}$ at $0$ is flat but not extreme.',
      'Local extrema can occur only at critical numbers, so the search space for extrema is finite once the critical numbers are found.',
      'Closed Interval Method: evaluate $f$ at interior critical numbers and at both endpoints; the largest value wins as max, the smallest as min.',
    ],
    quiz: [
      {
        q: 'The critical numbers of $f(x) = x^{3} - 3x^{2}$ are:',
        options: [`$x = 0$ and $x = 2$`, '$x = 0$ only', '$x = 2$ only', `$x = 1$ and $x = 3$`],
        answer: 0,
        explanation: 'Factor the derivative: $f\'(x) = 3x^{2} - 6x = 3x(x - 2)$, which vanishes at $0$ and $2$.',
      },
      {
        q: 'For $f(x) = x^{3}$, the point $x = 0$ is:',
        options: ['A local maximum', 'Not a critical number', 'A critical number that is not a local extremum', 'An absolute minimum'],
        answer: 2,
        explanation: '$f\'(0) = 0$ makes it critical, but the graph rises through the origin — the flat tangent changes nothing.',
      },
      {
        q: 'The Extreme Value Theorem guarantees that an absolute maximum exists when:',
        options: [`$f$ is continuous on an open interval $(a, b)$`, `$f$ is continuous on a closed interval $[a, b]$`, `$f$ is differentiable on $\\mathbb{R}$`, '$f\'(x) = 0$ has at least one solution'],
        answer: 1,
        explanation: 'Continuity on a closed interval is the exact hypothesis; open intervals and discontinuous functions can lack extreme values.',
      },
      {
        q: 'For $f(x) = |x|$, the point $x = 0$ is:',
        options: ['A local maximum', 'Not a critical number because $f\'(0)$ does not exist', 'A critical number and a local (and absolute) minimum', 'Neither critical nor extreme'],
        answer: 2,
        explanation: 'A corner where the derivative fails to exist is still a critical number, and the V-shape bottoms out there.',
      },
      {
        q: 'On $[-1, 1]$, the absolute maximum of $f(x) = x^{2}$ occurs:',
        options: ['At $x = 0$', 'At $x = 1$ only', 'Nowhere', 'At both endpoints $x = \\pm 1$'],
        answer: 3,
        explanation: 'The single interior critical point $x = 0$ gives the minimum; the endpoints both give the maximum value $1$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.2
  {
    sectionId: 'calc-ch4-s2',
    readingTime: 9,
    intro: 'The Mean Value Theorem is the bridge between average rates of change and instantaneous ones: if you average 90 km/h over a trip, you were momentarily going exactly 90 km/h at some point. This section states Rolle’s Theorem and the Mean Value Theorem, builds both proofs out of Fermat’s Theorem from Section 4.1, and puts the results to work proving inequalities and constant-function facts that no earlier tool could reach.',
    objectives: [
      'State Rolle’s Theorem and verify its three hypotheses on examples',
      'State the Mean Value Theorem and find the guaranteed number $c$ for given functions',
      'Explain the proof strategy: subtract the secant line and apply Rolle’s Theorem',
      'Use the corollaries: zero derivative on an interval forces a constant function',
      'Apply the Mean Value Theorem to prove inequalities such as $|\\sin a - \\sin b| \\le |a - b|$',
    ],
    concepts: [
      {
        term: 'Rolle’s Theorem',
        kind: 'theorem',
        statement: 'Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$. If $f(a) = f(b)$, then there is a number $c$ in $(a, b)$ such that $$f\'(c) = 0.$$',
        detail: 'Geometrically: if a smooth curve starts and ends at the same height, somewhere in between it levels off — every roller coaster that returns to its station must have a horizontal tangent somewhere. All three hypotheses are needed: $f(x) = x$ on $[0, 1]$ has unequal endpoint values and slope always 1; $f(x) = |x|$ on $[-1, 1]$ has equal endpoints but a corner where differentiability fails and no horizontal tangent exists.',
      },
      {
        term: 'Why Rolle’s Theorem is true',
        kind: 'insight',
        statement: 'By the Extreme Value Theorem, $f$ attains a maximum and a minimum on $[a, b]$. If either occurs at an interior point, Fermat’s Theorem makes that point a critical number with $f\'(c) = 0$. If both occur at endpoints, then — since $f(a) = f(b)$ — the maximum equals the minimum, so $f$ is constant and every $c$ works.',
        detail: 'The proof is a perfect collaboration of the last section’s tools: existence from the Extreme Value Theorem, identification from Fermat. This domino chain — EVT plus Fermat — will reappear one more time to prove the Mean Value Theorem.',
      },
      {
        term: 'The Mean Value Theorem',
        kind: 'theorem',
        statement: 'If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there is a number $c$ in $(a, b)$ such that $$f\'(c) = \\frac{f(b) - f(a)}{b - a}.$$',
        detail: 'The right side is the slope of the secant line through the endpoints — the average rate of change of $f$ over $[a, b]$. The theorem guarantees a tangent line parallel to that secant. Notice that Rolle’s Theorem is exactly the special case $f(a) = f(b)$, where the secant is horizontal.',
      },
      {
        term: 'Geometric and physical readings',
        kind: 'insight',
        statement: 'Some tangent to the graph between $a$ and $b$ is parallel to the chord joining the endpoints. Physically: the instantaneous rate of change must equal the average rate of change at least once — a car that averages 90 km/h over an interval of time was traveling exactly 90 km/h at some instant.',
        detail: 'This is why the Mean Value Theorem is sometimes called the speed-trap theorem: police comparing your timestamped toll receipts do not need a radar gun — the MVT convicts you from the average alone. It is also the theorem that lets a traffic camera system prove a maximum speed from two fixed readings.',
      },
      {
        term: 'Proof of the Mean Value Theorem',
        kind: 'method',
        statement: 'Define the comparison function $$g(x) = f(x) - f(a) - \\frac{f(b) - f(a)}{b - a}(x - a).$$ Then $g$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $g(a) = g(b) = 0$, so Rolle’s Theorem gives a $c$ with $g\'(c) = 0$, that is $f\'(c) = \\frac{f(b) - f(a)}{b - a}$.',
        detail: 'The function $g$ measures the vertical gap between the curve and the secant line. Subtracting the linear part of the curve tilts the picture until the chord lies flat — reducing the general theorem to the special case. This subtract-a-straight-line trick is one of the most reused constructions in analysis.',
      },
      {
        term: 'Corollaries of the Mean Value Theorem',
        kind: 'theorem',
        statement: 'If $f\'(x) = 0$ for all $x$ in an interval, then $f$ is constant on that interval. Consequently, if $f\'(x) = g\'(x)$ on an interval, then $f(x) = g(x) + C$ for a constant $C$.',
        detail: 'Proof: for any two points $x_{1} < x_{2}$ in the interval, the MVT gives $f(x_{2}) - f(x_{1}) = f\'(c)(x_{2} - x_{1}) = 0$, so all values are equal. This corollary is the engine behind the antiderivative theory of Section 4.8 — it is exactly why two antiderivatives of the same function differ by a constant, and why the $+ C$ appears in every indefinite integral.',
      },
    ],
    examples: [
      {
        title: 'Verifying Rolle’s Theorem',
        problem: 'Verify that $f(x) = x^{2} - 4x + 1$ satisfies the hypotheses of Rolle’s Theorem on $[1, 3]$, and find all numbers $c$ that satisfy its conclusion.',
        steps: [
          { label: 'Step 1: Check continuity and differentiability', text: 'Being a polynomial, $f$ is continuous on $[1, 3]$ and differentiable on $(1, 3)$ — the first two hypotheses hold automatically.' },
          { label: 'Step 2: Check the endpoint values', text: '$f(1) = 1 - 4 + 1 = -2$ and $f(3) = 9 - 12 + 1 = -2$. The endpoints agree, so Rolle’s Theorem applies.' },
          { label: 'Step 3: Solve $f\'(c) = 0$', text: '$f\'(x) = 2x - 4$, which vanishes only at $x = 2$.' },
          { label: 'Step 4: Confirm the location', text: 'The point $c = 2$ lies strictly between 1 and 3, so the theorem’s conclusion is satisfied — the parabola has a horizontal tangent exactly at its vertex.' },
        ],
        result: 'Rolle’s Theorem applies, with the guaranteed number $c = 2$. For a parabola the leveling-off point is visibly the vertex, so the theorem and the picture agree.',
      },
      {
        title: 'Finding the Mean Value Theorem point',
        problem: 'Find all numbers $c$ that satisfy the conclusion of the Mean Value Theorem for $f(x) = x^{3} - 3x$ on $[0, 2]$.',
        steps: [
          { label: 'Step 1: Check the hypotheses', text: '$f$ is a polynomial, continuous on $[0, 2]$ and differentiable on $(0, 2)$. The MVT applies.' },
          { label: 'Step 2: Compute the secant slope', text: '$\\dfrac{f(2) - f(0)}{2 - 0} = \\dfrac{(8 - 6) - 0}{2} = \\dfrac{2}{2} = 1$. The theorem promises a tangent of slope exactly 1.' },
          { label: 'Step 3: Solve for $c$', text: '$f\'(x) = 3x^{2} - 3$, so set $3c^{2} - 3 = 1$, giving $c^{2} = \\tfrac{4}{3}$ and $c = \\pm\\tfrac{2}{\\sqrt{3}} = \\pm\\tfrac{2\\sqrt{3}}{3}$.' },
          { label: 'Step 4: Keep only points inside the interval', text: 'The negative candidate $-\\tfrac{2\\sqrt{3}}{3} \\approx -1.15$ lies outside $(0, 2)$; only $c = \\tfrac{2\\sqrt{3}}{3} \\approx 1.15$ qualifies.' },
        ],
        result: 'The Mean Value Theorem is satisfied by the single point $c = \\tfrac{2\\sqrt{3}}{3} \\approx 1.155$, where the tangent to the cubic is parallel to the chord from $(0, 0)$ to $(2, 2)$.',
      },
      {
        title: 'Using the MVT to prove an inequality',
        problem: 'Use the Mean Value Theorem to prove that $|\\sin a - \\sin b| \\le |a - b|$ for all real numbers $a$ and $b$.',
        steps: [
          { label: 'Step 1: Handle the trivial case and set up', text: 'If $a = b$ the inequality reads $0 \\le 0$ and holds. So assume $a \\ne b$ and take $f(x) = \\sin x$ on the interval between them; $f$ is continuous and differentiable everywhere.' },
          { label: 'Step 2: Apply the MVT', text: 'There is a $c$ between $a$ and $b$ with $$\\frac{\\sin a - \\sin b}{a - b} = \\cos c.$$' },
          { label: 'Step 3: Bound the right side', text: 'The cosine of any real number lies in $[-1, 1]$, so $\\left|\\dfrac{\\sin a - \\sin b}{a - b}\\right| = |\\cos c| \\le 1$.' },
          { label: 'Step 4: Clear the denominator', text: 'Multiplying by $|a - b|$ gives $|\\sin a - \\sin b| \\le |a - b|$, exactly the claim. Setting $b = 0$ recovers the useful special case $|\\sin a| \\le |a|$.' },
        ],
        result: 'The inequality holds for all reals. The MVT converts a statement about a difference of function values into a statement about a single derivative value — the standard pattern for proving inequalities of the form $|f(a) - f(b)| \\le M|a - b|$.',
      },
    ],
    keyTakeaways: [
      'Rolle’s Theorem: continuity, differentiability, and equal endpoint values force a point with $f\'(c) = 0$.',
      'The Mean Value Theorem generalizes Rolle: some tangent is parallel to the secant through the endpoints, $f\'(c) = \\frac{f(b) - f(a)}{b - a}$.',
      'The proof subtracts the secant line, reducing the MVT to Rolle, which follows from the EVT plus Fermat’s Theorem.',
      'Physical reading: the instantaneous rate must equal the average rate at least once — the mathematics behind speed enforcement from toll timestamps.',
      'Corollaries: $f\' = 0$ on an interval forces $f$ constant; functions with identical derivatives differ by a constant — the reason every antiderivative carries a $+ C$.',
      'The MVT is the go-to tool for proving Lipschitz-style inequalities such as $|\\sin a - \\sin b| \\le |a - b|$.',
    ],
    quiz: [
      {
        q: 'Rolle’s Theorem requires all of the following except:',
        options: ['Continuity on $[a, b]$', 'Differentiability on $(a, b)$', 'A positive derivative on $(a, b)$', 'Equal endpoint values $f(a) = f(b)$'],
        answer: 2,
        explanation: 'Nothing is assumed about the sign of $f\'$ — the theorem produces a point where the derivative is zero.',
      },
      {
        q: 'The Mean Value Theorem applied to $f(x) = x^{2}$ on $[0, 4]$ guarantees a $c$ with $f\'(c) = ?$',
        options: ['1', '2', '4', '8'],
        answer: 2,
        explanation: 'The secant slope is $(16 - 0)/4 = 4$, and indeed $f\'(2) = 4$; the guaranteed value equals the average rate of change.',
      },
      {
        q: 'Which function fails the hypotheses of the Mean Value Theorem on $[-1, 1]$?',
        options: [`$f(x) = x^{3}$`, `$f(x) = |x|$`, `$f(x) = \\sin x$`, `$f(x) = x^{2} + 1$`],
        answer: 1,
        explanation: 'The corner at the origin destroys differentiability on $(-1, 1)$; the others are polynomials or smooth trig functions.',
      },
      {
        q: 'If $f\'(x) = 0$ for every $x$ in an interval, then $f$ is:',
        options: ['Increasing on the interval', 'Linear on the interval', 'Constant on the interval', 'Undefined on the interval'],
        answer: 2,
        explanation: 'By the MVT, $f(x_{2}) - f(x_{1}) = f\'(c)(x_{2} - x_{1}) = 0$ for any two points — all values are equal.',
      },
      {
        q: 'A car that averages 90 km/h over a highway trip:',
        options: ['Was moving at exactly 90 km/h the whole time', 'At some instant was moving at exactly 90 km/h', 'Never exceeded 90 km/h', 'Must have exceeded 90 km/h at least once'],
        answer: 1,
        explanation: 'The MVT equates the average velocity with an instantaneous velocity at some instant; the other statements do not follow.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.3
  {
    sectionId: 'calc-ch4-s3',
    readingTime: 10,
    intro: 'The sign of the first derivative tells you where a graph rises or falls; the sign of the second derivative tells you which way it bends. This section turns those two facts into the Increasing/Decreasing Test, the First and Second Derivative Tests for local extrema, and the full concavity analysis — the vocabulary needed to sketch curves with confidence in Section 4.5.',
    objectives: [
      'Apply the Increasing/Decreasing Test using the sign of $f\'$',
      'Use the First Derivative Test to classify critical numbers as local maxima, local minima or neither',
      'Determine concavity from the sign of $f\'\'$ and locate inflection points',
      'Apply the Second Derivative Test and know what to do when $f\'\'(c) = 0$',
      'Build a complete increasing/decreasing/concavity table for a polynomial',
    ],
    concepts: [
      {
        term: 'Increasing/Decreasing Test',
        kind: 'theorem',
        statement: 'If $f\'(x) > 0$ on an interval, then $f$ is increasing on that interval; if $f\'(x) < 0$ on an interval, then $f$ is decreasing on it.',
        detail: 'The proof is the Mean Value Theorem again: for $x_{1} < x_{2}$ in the interval, $f(x_{2}) - f(x_{1}) = f\'(c)(x_{2} - x_{1})$, and the sign of the right side is the sign of $f\'(c)$. Because of this test, the sign chart of $f\'$ is the single most useful picture in applied calculus — every hill and valley is a sign change of $f\'$.',
      },
      {
        term: 'First Derivative Test',
        kind: 'theorem',
        statement: 'Suppose $c$ is a critical number of a continuous $f$. If $f\'$ changes from positive to negative at $c$, then $f$ has a local maximum at $c$. If $f\'$ changes from negative to positive at $c$, then $f$ has a local minimum at $c$. If $f\'$ does not change sign at $c$, then $f$ has no local extremum at $c$.',
        detail: 'The test reads the graph’s story directly: climb, flatten at the top, descend means maximum; the reverse means minimum; flatten while continuing in the same direction means nothing happens. It works even when $f\'(c)$ does not exist (corners), which the Second Derivative Test cannot handle.',
      },
      {
        term: 'Concavity',
        kind: 'definition',
        statement: 'If the graph of $f$ lies above all its tangent lines on an interval, $f$ is **concave upward** there; if it lies below all its tangent lines, $f$ is **concave downward**.',
        detail: 'Informally: concave up opens like a cup ($\\cup$) and holds water; concave down opens like a cap ($\\cap$) and sheds it. Equivalently, concave up means $f\'$ is increasing — the tangent slopes steadily grow — and concave down means $f\'$ is decreasing. A concave-up graph crosses its tangent lines; a concave-down graph is crossed by them.',
      },
      {
        term: 'Concavity Test',
        kind: 'theorem',
        statement: 'If $f\'\'(x) > 0$ on an interval, then $f$ is concave upward on it; if $f\'\'(x) < 0$ on an interval, then $f$ is concave downward on it.',
        detail: 'Since $f\'\'$ is the derivative of $f\'$, the sign of $f\'\'$ is the increasing/decreasing behavior of the slopes — positive $f\'\'$ means slopes are rising, which is exactly the cup shape. Chaining the tests: the sign of $f$ tells you where you are, the sign of $f\'$ tells you the direction, and the sign of $f\'\'$ tells you the curvature.',
      },
      {
        term: 'Inflection point',
        kind: 'definition',
        statement: 'A point $P(c, f(c))$ on the graph of a continuous function is an **inflection point** if the concavity changes there — concave up on one side, concave down on the other.',
        detail: 'An inflection point is a point on the graph, so you report both coordinates, not just an $x$-value. Candidates occur where $f\'\'(c) = 0$ or $f\'\'(c)$ does not exist, but the sign of $f\'\'$ must actually change: $f(x) = x^{4}$ has $f\'\'(0) = 0$ yet no inflection, since it is concave up on both sides. At a true inflection point, the tangent line crosses the curve.',
      },
      {
        term: 'Second Derivative Test',
        kind: 'theorem',
        statement: 'Suppose $f\'\'$ is continuous near $c$ and $f\'(c) = 0$. If $f\'\'(c) > 0$, then $f$ has a local minimum at $c$; if $f\'\'(c) < 0$, then $f$ has a local maximum at $c$.',
        detail: 'Intuition: at a critical point with $f\'\'(c) > 0$ the graph is concave up — a cup — so the flat tangent at the bottom of the cup is a local minimum; concave down is a cap, giving a maximum. The test is often faster than the First Derivative Test because it needs only the value $f\'\'(c)$ rather than a full sign chart, but it is strictly less powerful.',
      },
      {
        term: 'When the Second Derivative Test fails',
        kind: 'insight',
        statement: 'If $f\'\'(c) = 0$ the Second Derivative Test is inconclusive: $f(x) = x^{4}$ has a minimum at $0$, while $f(x) = x^{3}$ has no extremum there, and both have $f\'\'(0) = 0$. The First Derivative Test then makes the call.',
        detail: 'The failure mode is informative rather than fatal — a flat second derivative at a critical point signals either a steeper-than-quadratic extremum ($x^{4}$) or a stationary terrace ($x^{3}$). When $f\'\'$ is tedious to compute, skip the second test entirely: the sign chart of $f\'$ already classifies every critical number at once.',
      },
    ],
    examples: [
      {
        title: 'Increasing, decreasing and a fake extremum',
        problem: 'Find the intervals of increase and decrease of $f(x) = x^{4} - 4x^{3}$ and classify its critical numbers.',
        steps: [
          { label: 'Step 1: Differentiate and factor', text: '$f\'(x) = 4x^{3} - 12x^{2} = 4x^{2}(x - 3)$, so the critical numbers are $x = 0$ and $x = 3$.' },
          { label: 'Step 2: Build the sign chart', text: 'The factor $x^{2}$ is never negative, so the sign of $f\'$ is the sign of $x - 3$: negative for $x < 3$ and positive for $x > 3$.' },
          { label: 'Step 3: Read off the intervals', text: '$f$ is decreasing on $(-\\infty, 3)$ and increasing on $(3, \\infty)$. Even though $f\'(0) = 0$, the graph merely flattens as it passes through $x = 0$ — it keeps descending.' },
          { label: 'Step 4: Classify the critical numbers', text: 'At $x = 0$ the derivative does not change sign, so there is no local extremum. At $x = 3$ the derivative changes from negative to positive, so $f$ has a local minimum there.' },
          { label: 'Step 5: Record the value', text: '$f(3) = 81 - 108 = -27$, so the local minimum is the point $(3, -27)$.' },
        ],
        result: 'Decreasing on $(-\\infty, 3)$, increasing on $(3, \\infty)$; no extremum at $x = 0$ despite the horizontal tangent, and a local minimum of $-27$ at $x = 3$. The point $x = 0$ is a textbook warning that $f\'(c) = 0$ alone proves nothing.',
      },
      {
        title: 'Concavity and inflection points',
        problem: 'Find the concavity intervals and the inflection points of $f(x) = 3x^{4} - 4x^{3} + 1$.',
        steps: [
          { label: 'Step 1: Compute both derivatives', text: '$f\'(x) = 12x^{3} - 12x^{2} = 12x^{2}(x - 1)$ and $f\'\'(x) = 36x^{2} - 24x = 12x(3x - 2)$.' },
          { label: 'Step 2: Locate the candidates', text: 'Inflection candidates are where $f\'\'$ vanishes or fails to exist: here $f\'\'(x) = 0$ at $x = 0$ and $x = \\tfrac{2}{3}$.' },
          { label: 'Step 3: Sign chart for $f\'\'$', text: 'Test points: $f\'\'(-1) = 60 > 0$ (concave up); $f\'\'(\\tfrac{1}{2}) = 12 \\cdot \\tfrac{1}{2}(\\tfrac{3}{2} - 2) < 0$ (concave down); $f\'\'(1) = 12 > 0$ (concave up). So the graph is concave up on $(-\\infty, 0)$, concave down on $(0, \\tfrac{2}{3})$, concave up on $(\\tfrac{2}{3}, \\infty)$.' },
          { label: 'Step 4: Confirm real inflection points', text: 'The concavity genuinely changes at both candidates, so both are inflection points. Their coordinates: $(0, f(0)) = (0, 1)$ and $\\left(\\tfrac{2}{3}, f\\left(\\tfrac{2}{3}\\right)\\right) = \\left(\\tfrac{2}{3}, \\tfrac{11}{27}\\right)$, since $f\\left(\\tfrac{2}{3}\\right) = \\tfrac{48}{81} - \\tfrac{96}{81} + \\tfrac{81}{81} = \\tfrac{33}{81} = \\tfrac{11}{27}$.' },
          { label: 'Step 5: Put the picture together', text: 'From the first derivative, $f$ decreases on $(-\\infty, 1)$ and increases on $(1, \\infty)$ with a minimum at $(1, 0)$: the graph descends, flattens momentarily at the inflection $(0, 1)$, keeps descending through the second inflection, and turns upward at the bottom.' },
        ],
        result: 'Inflection points $(0, 1)$ and $\\left(\\tfrac{2}{3}, \\tfrac{11}{27}\\right)$; concave up — down — up. Together with the sign chart of $f\'$, the shape of the graph is completely determined before any plotting.',
      },
      {
        title: 'Second Derivative Test, including the inconclusive case',
        problem: 'Use the Second Derivative Test to classify the critical numbers of $f(x) = x^{5} - 5x^{4}$, and resolve any inconclusive cases with the First Derivative Test.',
        steps: [
          { label: 'Step 1: Critical numbers', text: '$f\'(x) = 5x^{4} - 20x^{3} = 5x^{3}(x - 4)$, so the critical numbers are $x = 0$ and $x = 4$.' },
          { label: 'Step 2: Apply the test at $x = 4$', text: '$f\'\'(x) = 20x^{3} - 60x^{2} = 20x^{2}(x - 3)$, so $f\'\'(4) = 20 \\cdot 16 \\cdot 1 = 320 > 0$: concave up, therefore a local minimum. Its value: $f(4) = 1024 - 1280 = -256$.' },
          { label: 'Step 3: Try the test at $x = 0$', text: '$f\'\'(0) = 0$, so the Second Derivative Test is silent — the point could be a maximum, a minimum or neither.' },
          { label: 'Step 4: Fall back to the First Derivative Test', text: 'The sign of $f\'(x) = 5x^{3}(x - 4)$: for $x < 0$ both factors are negative so $f\' > 0$; for $0 < x < 4$ we get $f\' < 0$. The derivative changes from positive to negative at $0$ — a local maximum at the point $(0, 0)$.' },
          { label: 'Step 5: Summarize', text: 'The graph rises to a peak at the origin, descends through a concavity change, bottoms out at $(4, -256)$, and then climbs forever. One test classified one point; the other was needed for the rest.' },
        ],
        result: 'Local maximum $(0, 0)$, local minimum $(4, -256)$. The Second Derivative Test resolved $x = 4$ instantly but failed at $x = 0$, where the sign chart of $f\'$ finished the job.',
      },
    ],
    keyTakeaways: [
      'The sign of $f\'$ on an interval gives the direction of the graph: positive means increasing, negative means decreasing.',
      'First Derivative Test: a sign change of $f\'$ at a critical number is an extremum; no sign change means no extremum, horizontal tangent or not.',
      'Concave up means the graph lies above its tangents ($f\'\' > 0$); concave down means it lies below them ($f\'\' < 0$).',
      'An inflection point requires an actual change of concavity — $f\'\'(c) = 0$ alone is not enough, as $x^{4}$ shows.',
      'Second Derivative Test: at a critical point, $f\'\'(c) > 0$ signals a local minimum and $f\'\'(c) < 0$ a local maximum.',
      'When $f\'\'(c) = 0$ the Second Derivative Test is inconclusive — the First Derivative Test never is.',
    ],
    quiz: [
      {
        q: 'If $f\'(x) > 0$ throughout an interval, then on that interval $f$ is:',
        options: ['Concave up', 'Decreasing', 'Increasing', 'Constant'],
        answer: 2,
        explanation: 'The Increasing/Decreasing Test reads the direction from the first derivative — concavity is the job of $f\'\'$.',
      },
      {
        q: 'At a critical number $c$, the derivative $f\'$ changes from negative to positive. The First Derivative Test says:',
        options: ['Local maximum at $c$', 'Local minimum at $c$', 'No extremum at $c$', 'Inflection point at $c$'],
        answer: 1,
        explanation: 'Descending then climbing — the valley floor at $c$ is a local minimum.',
      },
      {
        q: 'The function $f(x) = x^{4}$ satisfies $f\'\'(0) = 0$. At $x = 0$ the graph has:',
        options: ['An inflection point', 'A local maximum', 'No inflection point, because concavity does not change', 'A vertical tangent'],
        answer: 2,
        explanation: '$f\'\' = 12x^{2} \\ge 0$ on both sides — always concave up, so no inflection despite the vanishing second derivative.',
      },
      {
        q: 'If $f\'(c) = 0$ and $f\'\'(c) < 0$, then at $c$ the function has:',
        options: ['A local maximum', 'A local minimum', 'No extremum', 'An inflection point'],
        answer: 0,
        explanation: 'A flat tangent on a cap-shaped (concave down) graph is the top of a hill.',
      },
      {
        q: 'For $f(x) = x^{5} - 5x^{4}$, the Second Derivative Test at $x = 0$:',
        options: ['Proves a local maximum', 'Proves a local minimum', 'Is inconclusive because $f\'\'(0) = 0$', 'Does not apply because $0$ is not critical'],
        answer: 2,
        explanation: 'Both derivatives vanish at $0$; only the sign chart of $f\'$ (which shows a maximum there) settles it.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.4
  {
    sectionId: 'calc-ch4-s4',
    readingTime: 10,
    intro: 'Limits of the form $0/0$ or $\\infty/\\infty$ are races between two vanishing or exploding quantities, and their values are not decided by the pieces — they are indeterminate. L’Hospital’s Rule resolves the race by differentiating numerator and denominator separately, and with a few algebraic moves it also tames $\\infty - \\infty$, $1^{\\infty}$, $0^{0}$ and the rest of the indeterminate family.',
    objectives: [
      'Recognize the indeterminate forms $0/0$, $\\infty/\\infty$, $\\infty - \\infty$, $0 \\cdot \\infty$, $1^{\\infty}$ and $0^{0}$',
      'State L’Hospital’s Rule and the conditions under which it may be applied',
      'Apply the rule repeatedly, checking the form at each round',
      'Convert products, differences and powers into quotients that L’Hospital can handle',
      'Establish the growth hierarchy $\\ln x \\ll x^{n} \\ll e^{x}$',
    ],
    concepts: [
      {
        term: 'Indeterminate forms',
        kind: 'definition',
        statement: 'A limit of the form $\\dfrac{f(x)}{g(x)}$ approaching $\\dfrac{0}{0}$ or $\\dfrac{\\infty}{\\infty}$ is **indeterminate**: its value cannot be predicted from the two pieces. The related forms $\\infty - \\infty$, $0 \\cdot \\infty$, $1^{\\infty}$, $0^{0}$ and $\\infty^{0}$ are indeterminate as well.',
        detail: 'Indeterminate means undecided, not nonexistent: $x/x \\to 1$ while $x^{2}/x \\to 0$, both of the form $0/0$. By contrast, $0/\\infty$ tends to 0 and $\\infty + \\infty$ to $\\infty$ — those forms are determined and need no special treatment.',
      },
      {
        term: 'L’Hospital’s Rule',
        kind: 'theorem',
        statement: 'Suppose $f$ and $g$ are differentiable and $g\'(x) \\ne 0$ near $a$ (except possibly at $a$). If $\\lim f(x)/g(x)$ has the form $0/0$ or $\\infty/\\infty$, and $\\lim f\'(x)/g\'(x) = L$ (a number or $\\pm\\infty$), then $$\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f\'(x)}{g\'(x)} = L.$$',
        detail: 'Why it is plausible for $0/0$: if $f(a) = g(a) = 0$, then $\\frac{f(x)}{g(x)} = \\frac{\\frac{f(x) - f(a)}{x - a}}{\\frac{g(x) - g(a)}{x - a}}$, a ratio of difference quotients, which converges to $f\'(a)/g\'(a)$. The general version follows from an extended Mean Value Theorem (Cauchy’s). The rule works for one-sided limits and for $x \\to \\infty$ equally well.',
      },
      {
        term: 'Read the fine print',
        kind: 'insight',
        statement: 'The rule applies only to genuine $0/0$ or $\\infty/\\infty$ forms, and only when the new limit $\\lim f\'/g\'$ exists. Example: $\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x} = 1$, yet $\\frac{(x + \\sin x)\'}{x\'} = 1 + \\cos x$ oscillates forever — the rule fails to apply, but the original limit still exists.',
        detail: 'Verifying the form before each application is the discipline of this section. If the rule produces a non-existent limit, that verdict applies only to the derivative quotient — go back and analyze the original limit another way, such as dividing through by $x$.',
      },
      {
        term: 'Converting other forms to quotients',
        kind: 'method',
        statement: 'Products $0 \\cdot \\infty$: move one factor to the denominator, for example $x e^{-x} = \\frac{x}{e^{x}}$. Differences $\\infty - \\infty$: combine over a common denominator or rationalize. Powers $f^{g}$: take the logarithm, since $f^{g} = e^{g \\ln f}$, so $\\lim f^{g} = e^{\\lim g \\ln f}$ whenever that limit exists.',
        detail: 'The exponential identity is the master key for the three power forms: $1^{\\infty}$ becomes $e^{\\infty \\cdot 0}$, $0^{0}$ becomes $e^{0 \\cdot \\infty}$, and $\\infty^{0}$ becomes $e^{0 \\cdot \\infty}$ — all of which are product forms that convert to quotients. Always exponentiate back at the end.',
      },
      {
        term: 'The growth hierarchy',
        kind: 'law',
        statement: 'As $x \\to \\infty$, logarithms lose to every positive power, and every power loses to the exponential: $$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^{a}} = 0, \\qquad \\lim_{x \\to \\infty} \\frac{x^{n}}{e^{x}} = 0 \\quad (a > 0, \\; n \\text{ any positive integer}).$$',
        detail: 'Each of these is a L’Hospital computation — differentiate $n$ times to kill $x^{n}$ while $e^{x}$ survives every round. The hierarchy matters everywhere in mathematics and computing: it is why a polynomial-time algorithm eventually beats an exponential-time one, and why logarithmic factors are almost free. Growth rates return in a big way when sequences and series are tested in Chapter 11.',
      },
    ],
    examples: [
      {
        title: 'A 0/0 limit needing two rounds',
        problem: 'Evaluate $\\displaystyle\\lim_{x \\to 0} \\frac{\\tan x - x}{x^{3}}$.',
        steps: [
          { label: 'Step 1: Verify the form', text: 'As $x \\to 0$, both $\\tan x - x \\to 0$ and $x^{3} \\to 0$: a genuine $\\frac{0}{0}$ form, so L’Hospital’s Rule may be applied.' },
          { label: 'Step 2: First round', text: '$\\lim_{x \\to 0} \\frac{\\sec^{2}x - 1}{3x^{2}}$ — still $\\frac{0}{0}$, since $\\sec^{2} 0 = 1$.' },
          { label: 'Step 3: Second round', text: 'Differentiate again: the numerator $\\sec^{2}x - 1$ has derivative $2\\sec^{2}x \\tan x$ and the denominator $3x^{2}$ has derivative $6x$, giving $\\lim_{x \\to 0} \\frac{2\\sec^{2}x \\tan x}{6x}$.' },
          { label: 'Step 4: Simplify before differentiating blindly', text: 'Rewrite $\\frac{2\\sec^{2}x \\tan x}{6x} = \\frac{1}{3} \\sec^{2}x \\cdot \\frac{\\tan x}{x}$, using the standard limit $\\frac{\\tan x}{x} \\to 1$.' },
          { label: 'Step 5: Evaluate', text: '$\\sec^{2} 0 = 1$ and $\\frac{\\tan x}{x} \\to 1$, so the limit is $\\frac{1}{3}$.' },
        ],
        result: '$$\\lim_{x \\to 0} \\frac{\\tan x - x}{x^{3}} = \\frac{1}{3}.$$ This says $\\tan x \\approx x + \\tfrac{x^{3}}{3}$ near the origin — the first two terms of the tangent’s Maclaurin series, previewed by pure limit work.',
      },
      {
        title: 'Product and difference forms',
        problem: 'Evaluate (a) $\\displaystyle\\lim_{x \\to \\infty} x e^{-x}$ and (b) $\\displaystyle\\lim_{x \\to (\\pi/2)^{-}} (\\sec x - \\tan x)$.',
        steps: [
          { label: 'Step 1: Identify the form in (a)', text: 'As $x \\to \\infty$, $x \\to \\infty$ while $e^{-x} \\to 0$: the indeterminate product $\\infty \\cdot 0$.' },
          { label: 'Step 2: Convert to a quotient and apply L’Hospital', text: '$x e^{-x} = \\dfrac{x}{e^{x}}$, now $\\dfrac{\\infty}{\\infty}$. Differentiating top and bottom: $\\lim_{x \\to \\infty} \\dfrac{1}{e^{x}} = 0$.' },
          { label: 'Step 3: Identify the form in (b)', text: 'As $x \\to \\tfrac{\\pi}{2}^{-}$, both $\\sec x \\to \\infty$ and $\\tan x \\to \\infty$: the difference form $\\infty - \\infty$.' },
          { label: 'Step 4: Combine over a common denominator', text: '$\\sec x - \\tan x = \\dfrac{1}{\\cos x} - \\dfrac{\\sin x}{\\cos x} = \\dfrac{1 - \\sin x}{\\cos x}$, and as $x \\to \\tfrac{\\pi}{2}^{-}$ this is $\\dfrac{0}{0}$ — eligible for the rule.' },
          { label: 'Step 5: Apply L’Hospital and evaluate', text: 'Differentiating: $\\dfrac{-\\cos x}{-\\sin x} = -\\cot x \\to -\\cot\\left(\\tfrac{\\pi}{2}\\right) = 0$.' },
        ],
        result: '(a) $\\lim_{x \\to \\infty} x e^{-x} = 0$ — a preview of $e^{x}$ beating every power. (b) $\\lim_{x \\to (\\pi/2)^{-}} (\\sec x - \\tan x) = 0$: two infinities can cancel completely.',
      },
      {
        title: 'Indeterminate powers: $0^{0}$ and $1^{\\infty}$',
        problem: 'Evaluate (a) $\\displaystyle\\lim_{x \\to 0^{+}} x^{x}$ and (b) $\\displaystyle\\lim_{x \\to \\infty} \\left(1 + \\frac{2}{x}\\right)^{x}$.',
        steps: [
          { label: 'Step 1: Set up part (a) with a logarithm', text: 'Let $y = x^{x}$, so $\\ln y = x \\ln x$. If $\\lim \\ln y$ exists, then $\\lim y = e^{\\lim \\ln y}$. The form $x \\ln x$ is the product $0 \\cdot (-\\infty)$.' },
          { label: 'Step 2: Convert and apply the rule', text: '$x \\ln x = \\dfrac{\\ln x}{1/x}$, an $\\dfrac{\\infty}{\\infty}$ form as $x \\to 0^{+}$ (the numerator tends to negative infinity). L’Hospital: $\\lim_{x \\to 0^{+}} \\dfrac{1/x}{-1/x^{2}} = \\lim_{x \\to 0^{+}} (-x) = 0$.' },
          { label: 'Step 3: Exponentiate back', text: '$\\lim_{x \\to 0^{+}} x^{x} = e^{0} = 1$.' },
          { label: 'Step 4: Set up part (b)', text: 'As $x \\to \\infty$, the base $1 + \\tfrac{2}{x} \\to 1$ while the exponent $x \\to \\infty$: the form $1^{\\infty}$. Let $y = \\left(1 + \\tfrac{2}{x}\\right)^{x}$, so $\\ln y = x \\ln\\left(1 + \\tfrac{2}{x}\\right)$.' },
          { label: 'Step 5: Convert to a quotient and apply the rule', text: '$\\ln y = \\dfrac{\\ln\\left(1 + \\frac{2}{x}\\right)}{\\frac{1}{x}}$, a $\\frac{0}{0}$ form. Differentiating numerator and denominator: $\\dfrac{\\frac{1}{1 + 2/x} \\cdot \\left(-\\frac{2}{x^{2}}\\right)}{-\\frac{1}{x^{2}}} = \\dfrac{2}{1 + \\frac{2}{x}} \\to 2$ as $x \\to \\infty$.' },
          { label: 'Step 6: Exponentiate back', text: '$\\lim \\ln y = 2$, so $\\lim y = e^{2}$.' },
        ],
        result: '(a) $\\lim_{x \\to 0^{+}} x^{x} = 1$ — the surprising value of $0^{0}$ along this path. (b) $\\lim_{x \\to \\infty}\\left(1 + \\frac{2}{x}\\right)^{x} = e^{2}$, the compound-interest pattern $\\left(1 + \\frac{r}{x}\\right)^{x} \\to e^{r}$ in disguise.',
      },
    ],
    keyTakeaways: [
      'Indeterminate means undecided: $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$, $\\infty - \\infty$, $0 \\cdot \\infty$, $1^{\\infty}$, $0^{0}$ and $\\infty^{0}$ all require further work.',
      'L’Hospital’s Rule: for $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, differentiate numerator and denominator separately — never the quotient rule.',
      'Check the form before every round, and remember the rule needs $\\lim f\'/g\'$ to exist: $\\frac{x + \\sin x}{x} \\to 1$ although $1 + \\cos x$ has no limit.',
      'Convert everything else into a quotient: flip a factor into the denominator, combine differences, and use $f^{g} = e^{g \\ln f}$ for powers.',
      'Growth hierarchy as $x \\to \\infty$: $\\ln x$ loses to every $x^{a}$, and every $x^{n}$ loses to $e^{x}$.',
      'L’Hospital’s Rule is one of the main tools that will make series converge or diverge in Chapter 11 — the growth hierarchy learned here pays off there.',
    ],
    quiz: [
      {
        q: 'Which of these limits is an indeterminate form to which L’Hospital’s Rule directly applies?',
        options: [`$\\lim_{x \\to 0} \\frac{\\sin x}{x}$`, `$\\lim_{x \\to 2} \\frac{x^{2}}{x - 2}$`, `$\\lim_{x \\to 0} \\frac{x^{2} + 1}{x}$`, `$\\lim_{x \\to \\infty} \\frac{x}{\\sqrt{x}}$`],
        answer: 0,
        explanation: 'Only the first is a $\\frac{0}{0}$ form; the second tends to a nonzero-over-zero infinite limit and the fourth simplifies to $\\sqrt{x}$.',
      },
      {
        q: 'Evaluate $\\displaystyle\\lim_{x \\to \\infty} \\frac{\\ln x}{x}$.',
        options: [`$1$`, `$\\infty$`, `$0$`, `$e$`],
        answer: 2,
        explanation: 'L’Hospital: $\\frac{1/x}{1} \\to 0$. Logarithms grow slower than any positive power of $x$.',
      },
      {
        q: 'For $\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x}$, which statement is correct?',
        options: ['It equals 1, and the limit of $\\frac{1 + \\cos x}{1}$ does not exist, so L’Hospital’s Rule does not apply', 'It equals 1 because of L’Hospital’s Rule', 'It does not exist', 'It equals 0'],
        answer: 0,
        explanation: 'Dividing by $x$ gives the answer 1; the derivative quotient $1 + \\cos x$ oscillates, so the rule’s conclusion cannot be invoked.',
      },
      {
        q: 'Evaluate $\\displaystyle\\lim_{x \\to 0^{+}} x^{x}$.',
        options: [`$0$`, `$e$`, `$\\infty$`, `$1$`],
        answer: 3,
        explanation: 'With $y = x^{x}$, $\\ln y = x \\ln x \\to 0$ by L’Hospital, so $y \\to e^{0} = 1$.',
      },
      {
        q: 'As $x \\to \\infty$, which function eventually grows fastest?',
        options: [`$x^{100}$`, `$\\ln(x^{100})$`, `$e^{x}$`, `$x^{99}$`],
        answer: 2,
        explanation: 'Every fixed power loses to $e^{x}$: $\\lim x^{n}/e^{x} = 0$ by repeated L’Hospital, while the logarithm is slowest of all.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.5
  {
    sectionId: 'calc-ch4-s5',
    readingTime: 9,
    intro: 'Curve sketching is where the whole toolkit converges: domain, intercepts, symmetry, asymptotes, monotonicity, extrema and concavity each answer one question about the graph. This section assembles the book’s checklist and runs it twice on rational functions — first a full seven-step sketch with a vertical and a slant asymptote, then a fast pass exploiting odd symmetry.',
    objectives: [
      'Recite the curve-sketching checklist and what each item contributes',
      'Find vertical, horizontal and slant asymptotes, including by polynomial division',
      'Exploit symmetry — even, odd or periodic — to cut the work in half',
      'Combine the sign charts of $f\'$ and $f\'\'$ with the asymptotic picture',
      'Produce a complete sketch of a rational function labeled with all key points',
    ],
    concepts: [
      {
        term: 'The curve-sketching checklist',
        kind: 'method',
        statement: '**A. Domain.** **B. Intercepts** ($x$-intercepts from $f(x) = 0$, the $y$-intercept from $f(0)$). **C. Symmetry** (even, odd, periodic). **D. Asymptotes** (vertical, horizontal, slant). **E. Intervals of increase or decrease**, from the sign of $f\'$. **F. Local extrema**, by the derivative tests. **G. Concavity and points of inflection**, from the sign of $f\'\'$. Then plot the key points, draw the asymptotes, and connect smoothly.',
        detail: 'Each item is a cheap question that eliminates a family of possible graphs: the domain fences the picture, intercepts anchor it, asymptotes steer its distant behavior, and the two sign charts govern everything in between. The checklist is a decision procedure — run it in order and the graph has nowhere left to hide.',
      },
      {
        term: 'Symmetry saves half the work',
        kind: 'insight',
        statement: 'If $f(-x) = f(x)$ the graph is symmetric about the $y$-axis (**even**); if $f(-x) = -f(x)$ it is symmetric about the origin (**odd**); if $f(x + p) = f(x)$ it repeats with period $p$. Analyze half (or one period) and mirror the rest.',
        detail: 'Symmetry is checked by pure substitution before any calculus: for $f(x) = x + \\frac{1}{x}$, the minus sign passes straight through both terms, $f(-x) = -f(x)$ — odd — so the right half of the graph determines the left half by a 180-degree rotation about the origin.',
      },
      {
        term: 'Vertical asymptotes',
        kind: 'definition',
        statement: 'The line $x = a$ is a **vertical asymptote** if $f(x) \\to \\pm\\infty$ as $x \\to a$ from at least one side. For rational functions, these occur at zeros of the denominator that are not canceled by the numerator.',
        detail: 'Always investigate both one-sided limits: near $x = a$ the function may rise on one side and fall on the other, or do the same on both — the sign of the surviving numerator at $a$ decides. A rational function has no other kinds of unbounded approach.',
      },
      {
        term: 'Horizontal asymptotes',
        kind: 'definition',
        statement: 'The line $y = L$ is a **horizontal asymptote** if $f(x) \\to L$ as $x \\to \\infty$ or $x \\to -\\infty$. For a rational function with equal degrees, $L$ is the ratio of leading coefficients; if the denominator has larger degree, $L = 0$.',
        detail: 'A horizontal asymptote describes the tail, never a prohibition: the graph may cross it any number of times at finite $x$. If the numerator has larger degree than the denominator, no horizontal asymptote exists — the tail escapes every horizontal line, and a slant asymptote takes over.',
      },
      {
        term: 'Slant asymptotes by division',
        kind: 'theorem',
        statement: 'If a rational function has numerator degree exactly one more than the denominator, then polynomial division expresses it as $f(x) = mx + b + \\dfrac{r(x)}{q(x)}$ with $\\deg r < \\deg q$, and the line $y = mx + b$ is a **slant (oblique) asymptote**, since $\\frac{r(x)}{q(x)} \\to 0$ as $x \\to \\pm\\infty$.',
        detail: 'The remainder-over-denominator term is the gap between the curve and the line — its sign tells you which side of the asymptote the graph is on. For $\\frac{x^{2}}{x - 2} = x + 2 + \\frac{4}{x - 2}$, the gap $\\frac{4}{x-2}$ is positive when $x > 2$ (curve above the line) and negative when $x < 2$ (curve below).',
      },
      {
        term: 'Calculus supplies the fine structure',
        kind: 'insight',
        statement: 'Asymptotes and symmetry govern the far-field behavior; the sign charts of $f\'$ and $f\'\'$ govern the near-field: where the graph climbs, where it turns, and where it bends. Between them, every stroke of the sketch is justified.',
        detail: 'A practical order: lock down domain and asymptotes first so the picture cannot drift, place the intercepts and critical points as fixed nails, mark the concavity between inflection points, and only then connect — curves should be smooth and should hug the asymptotes as they leave the frame.',
      },
    ],
    examples: [
      {
        title: 'Full sketch with a slant asymptote',
        problem: 'Sketch the graph of $f(x) = \\dfrac{x^{2}}{x - 2}$, showing all asymptotes, intercepts, local extrema and concavity.',
        steps: [
          { label: 'Step 1: Domain and intercepts', text: 'The domain is all $x \\ne 2$. Intercepts: $f(x) = 0$ exactly when $x = 0$, so the origin is the only intercept — both $x$- and $y$-intercept in one point. Symmetry: $f(-x) = \\frac{x^{2}}{-x - 2}$ is neither $\\pm f(x)$, so none.' },
          { label: 'Step 2: Asymptotes', text: 'At $x = 2$ the denominator vanishes while the numerator is $4 \\ne 0$, so $x = 2$ is a vertical asymptote — the function tends to $-\\infty$ from the left and $+\\infty$ from the right. Degree check: numerator is one higher than denominator, so divide: $\\frac{x^{2}}{x - 2} = x + 2 + \\frac{4}{x - 2}$, giving the slant asymptote $y = x + 2$.' },
          { label: 'Step 3: First derivative and critical numbers', text: 'From the division form, $f(x) = x + 2 + 4(x - 2)^{-1}$, so $f\'(x) = 1 - 4(x - 2)^{-2} = \\frac{(x - 2)^{2} - 4}{(x - 2)^{2}} = \\frac{x(x - 4)}{(x - 2)^{2}}$. Critical numbers: $x = 0$ and $x = 4$.' },
          { label: 'Step 4: Increasing and decreasing', text: 'The denominator is a square, always positive, so the sign of $f\'$ is the sign of $x(x - 4)$: increasing on $(-\\infty, 0)$ and $(4, \\infty)$, decreasing on $(0, 2)$ and $(2, 4)$. By the First Derivative Test, $f$ has a local maximum at $(0, 0)$ and a local minimum at $(4, 8)$.' },
          { label: 'Step 5: Second derivative and concavity', text: '$f\'\'(x) = 8(x - 2)^{-3} = \\dfrac{8}{(x - 2)^{3}}$, negative for $x < 2$ and positive for $x > 2$: concave down on $(-\\infty, 2)$, concave up on $(2, \\infty)$. The candidate $x = 2$ is not in the domain, so there is no inflection point — the concavity flips across the asymptote instead.' },
          { label: 'Step 6: Relationship to the slant asymptote', text: 'The gap $f(x) - (x + 2) = \\frac{4}{x - 2}$ is negative for $x < 2$ and positive for $x > 2$: the left branch rides below the line, the right branch above it, both closing in as $|x|$ grows.' },
          { label: 'Step 7: Assemble the sketch', text: 'Left branch: concave down, rising through the origin to the local maximum there, then plunging to $-\\infty$ at the vertical asymptote, staying below $y = x + 2$. Right branch: entering from $+\\infty$ at the asymptote, descending to the minimum $(4, 8)$, then rising concave up forever, riding above the slant asymptote.' },
        ],
        result: 'A two-branch graph with vertical asymptote $x = 2$, slant asymptote $y = x + 2$, local maximum at the origin, local minimum at $(4, 8)$, concave down left of the asymptote and concave up right of it — every feature derived, none guessed.',
      },
      {
        title: 'A fast sketch using odd symmetry',
        problem: 'Sketch $f(x) = x + \\dfrac{1}{x}$, reusing the critical numbers found in Section 4.1.',
        steps: [
          { label: 'Step 1: Domain, symmetry, asymptotes', text: 'Domain $x \\ne 0$; $f(-x) = -f(x)$, so the function is odd — analyze $x > 0$ and rotate 180 degrees about the origin for the rest. Since $\\frac{1}{x} \\to 0$, the line $y = x$ is a slant asymptote, and $x = 0$ is a vertical asymptote. There are no intercepts: $f(x) = 0$ would force $x^{2} = -1$.' },
          { label: 'Step 2: Monotonicity', text: 'From Section 4.1: $f\'(x) = \\frac{x^{2} - 1}{x^{2}}$, negative on $(0, 1)$ and positive on $(1, \\infty)$. The right branch descends from the asymptote to the local minimum at $(1, 2)$, then climbs forever.' },
          { label: 'Step 3: Concavity', text: '$f\'\'(x) = \\dfrac{2}{x^{3}}$: positive for $x > 0$ (concave up) and negative for $x < 0$ (concave down). The concavity flips across the vertical asymptote, not at a point of the graph — no inflection point.' },
          { label: 'Step 4: Position relative to the asymptote', text: 'On the right, $f(x) - x = \\frac{1}{x} > 0$: the branch floats above the line $y = x$, approaching it as $x \\to \\infty$. Odd symmetry mirrors this below on the left.' },
          { label: 'Step 5: Draw', text: 'Right branch: dive from $+\\infty$ along the vertical asymptote, flatten into the U-shaped valley, bottom out at $(1, 2)$, then rise concave up just above the slant asymptote. Rotate the whole picture 180 degrees about the origin for the left branch, which peaks at the local maximum $(-1, -2)$.' },
        ],
        result: 'Two branches pinned between the vertical asymptote $x = 0$ and the slant asymptote $y = x$: a local maximum at $(-1, -2)$, a local minimum at $(1, 2)$, and rotational symmetry about the origin — the same function whose critical numbers opened Section 4.1, now fully drawn.',
      },
    ],
    keyTakeaways: [
      'Run the checklist in order: domain, intercepts, symmetry, asymptotes, monotonicity, extrema, concavity — each item prunes the space of possible graphs.',
      'Vertical asymptotes of rational functions come from un-cancelled zeros of the denominator; check both one-sided limits.',
      'Horizontal asymptote degrees: equal degrees give the ratio of leading coefficients, bottom-heavy gives $y = 0$, top-heavy (by one) gives a slant asymptote via division.',
      'Polynomial division reveals slant asymptotes and the side of the line the graph sits on: the sign of the remainder term is the gap.',
      'Even or odd symmetry halves the analysis; periodicity reduces the picture to one period.',
      'The sign charts of $f\'$ and $f\'\'$ supply every turn and bend between the asymptotes — no plotting of random points needed.',
    ],
    quiz: [
      {
        q: 'The slant asymptote of $y = \\dfrac{x^{2}}{x - 2}$ is:',
        options: [`$y = x - 2$`, `$y = x + 2$`, `$y = x$`, `$x = 2$`],
        answer: 1,
        explanation: 'Division gives $\\frac{x^{2}}{x-2} = x + 2 + \\frac{4}{x-2}$, and the remainder term vanishes at infinity.',
      },
      {
        q: 'The vertical asymptotes of $y = \\dfrac{x^{2}}{x^{2} - 9}$ are:',
        options: ['$x = 3$ only', `$x = \\pm 3$`, `$y = 1$`, 'None — the graph is bounded'],
        answer: 1,
        explanation: 'The denominator factors as $(x - 3)(x + 3)$ and neither factor cancels, so both lines are vertical asymptotes.',
      },
      {
        q: 'The horizontal asymptote of $y = \\dfrac{3x^{2} + 1}{x^{2} + 4}$ is:',
        options: [`$y = 3$`, `$y = 0$`, `$y = \\tfrac{1}{4}$`, 'There is none'],
        answer: 0,
        explanation: 'Equal degrees: the limit is the ratio of leading coefficients, $3/1 = 3$.',
      },
      {
        q: 'A function that is odd has a graph that is:',
        options: ['Symmetric about the $y$-axis', 'Symmetric about the origin', 'Periodic with period $\\pi$', 'Symmetric about the line $y = x$'],
        answer: 1,
        explanation: '$f(-x) = -f(x)$ means a 180-degree rotation about the origin maps the graph to itself — analyze half, rotate for free.',
      },
      {
        q: 'For $y = \\dfrac{x^{2}}{x - 2}$, the concavity is:',
        options: ['Up everywhere', 'Down on $(-\\infty, 2)$ and up on $(2, \\infty)$, with no inflection point', 'Changes at the local minimum $x = 4$', 'Down on $(2, \\infty)$ only'],
        answer: 1,
        explanation: '$f\'\' = \\frac{8}{(x-2)^{3}}$ flips sign at the vertical asymptote — concavity changes, but no graph point exists there to be an inflection.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.6
  {
    sectionId: 'calc-ch4-s6',
    readingTime: 11,
    intro: 'Optimization is calculus paying its rent: largest area, cheapest container, best shape. Every problem shares one skeleton — translate the situation into a function of a single variable, state the domain honestly, locate the critical number, and confirm it gives a maximum or minimum — and this section runs the skeleton end-to-end on the three classic models: the river fence, the open box and the cylinder inscribed in a sphere.',
    objectives: [
      'Translate a word problem into a constraint and an objective function',
      'Eliminate variables to obtain a function of one variable with an honest domain',
      'Locate the critical number and confirm the extreme value by derivative tests',
      'Interpret domain endpoints as degenerate objects that cannot be optimal',
      'Solve the three canonical models: fence area, box volume and inscribed cylinder',
    ],
    concepts: [
      {
        term: 'The five stages of an optimization problem',
        kind: 'method',
        statement: '**1. Understand** the problem and what is to be maximized or minimized. **2. Diagram** it and introduce variables for the unknowns. **3. Write** the constraint (from the fixed quantity) and the objective (the quantity to optimize). **4. Eliminate** a variable using the constraint, obtaining an objective of one variable together with its domain. **5. Find** the critical numbers and confirm the extreme value with the derivative tests.',
        detail: 'Stage 4 is where the mathematics lives: the constraint is the exchange rate between the variables, and the domain records the physical limits (lengths must be positive, the box must fit the material). The calculus at stage 5 is often the easiest part — a single derivative set to zero.',
      },
      {
        term: 'First-derivative test for absolute extrema',
        kind: 'theorem',
        statement: 'Suppose $f$ is continuous on an interval and has exactly one critical number $c$ there. If $f\'$ changes from positive to negative at $c$, then $f(c)$ is the **absolute maximum**; if from negative to positive, the **absolute minimum**. In particular, if $f\'\'(c) < 0$ at the lone critical point, the value is an absolute maximum.',
        detail: 'The logic is the only-hill argument: if the function rises everywhere before $c$ and falls everywhere after, then $c$ is not merely a local peak — nothing anywhere is higher. This test is what lets optimization problems skip the endpoint comparisons of the Closed Interval Method.',
      },
      {
        term: 'Domain analysis is not optional',
        statement: 'Every optimization model has a domain carved by the geometry: the fence width satisfies $0 < x < 1200$ because the length must stay positive; the box base satisfies $0 < x < \\sqrt{1200}$ because the height must stay positive. The endpoints correspond to **degenerate objects** — zero area, zero volume — so the maximum must live in the interior.',
        kind: 'insight',
        detail: 'Stating the domain does three jobs: it certifies that the critical number you found is feasible, it explains why the endpoints cannot win (the objective degenerates to zero there), and it protects against algebraic solutions that are mathematically valid but physically meaningless, such as a negative length.',
      },
      {
        term: 'Confirming the answer',
        kind: 'method',
        statement: 'A critical number is only a candidate until a test confirms it: differentiate again (negative second derivative at a peak, positive at a valley), or run the sign chart of $f\'$ across the critical number, or invoke the only-hill theorem when the critical number is unique.',
        detail: 'For the classic models the objective is a downward-opening cubic or quadratic in the variable, so the second derivative is cheap: $A\'\' = -4$ for the fence and $V\'\' = -3x/2 < 0$ for the box instantly certify a maximum at the critical point.',
      },
      {
        term: 'The models generalize',
        kind: 'insight',
        statement: 'The fence models any fixed-perimeter allocation (including shares of a budget); the box models any fixed-surface container; the inscribed cylinder models any nested-shape problem with a Pythagorean constraint. New numbers, same skeleton: constrain, eliminate, differentiate, verify, interpret.',
        detail: 'In the cylinder problem the constraint is the right triangle inscribed in the circle, $a^{2} + \\left(\\frac{h}{2}\\right)^{2} = r^{2}$ — geometry supplies the constraint, and the five stages proceed unchanged. Recognizing which classic family a new problem belongs to is most of the solution.',
      },
    ],
    examples: [
      {
        title: 'The river fence: maximum area',
        problem: 'A farmer has 2400 feet of fencing and wants to fence off a rectangular field that borders a straight river. He needs no fence along the river. What are the dimensions of the field that has the largest area?',
        steps: [
          { label: 'Step 1: Diagram and variables', text: 'Let $x$ be the width of each side perpendicular to the river and $y$ the length of the side parallel to it. The river itself supplies the fourth side for free.' },
          { label: 'Step 2: Constraint and objective', text: 'Fencing used: $2x + y = 2400$. Objective: area $A = xy$.' },
          { label: 'Step 3: Eliminate $y$', text: 'From the constraint, $y = 2400 - 2x$, so $A(x) = x(2400 - 2x) = 2400x - 2x^{2}$, with domain $0 < x < 1200$ — at $x = 0$ or $x = 1200$ the field collapses and the area is zero.' },
          { label: 'Step 4: Critical number', text: '$A\'(x) = 2400 - 4x = 0$ gives $x = 600$, comfortably inside the domain.' },
          { label: 'Step 5: Confirm the maximum', text: '$A\'\'(x) = -4 < 0$ everywhere, so the parabola opens downward and its single critical point is the absolute maximum (the only-hill argument).' },
          { label: 'Step 6: Answer the question', text: '$y = 2400 - 2(600) = 1200$, and the maximal area is $A = 600 \\times 1200 = 720{,}000$ square feet.' },
        ],
        result: 'The field should be 600 feet deep and 1200 feet long, giving a maximum area of $720{,}000$ square feet. The optimal field is twice as long along the river as it is deep — a consequence of the free side.',
      },
      {
        title: 'The open box: maximum volume from fixed material',
        problem: 'If 1200 square centimeters of material is available to make a box with a square base and an open top, find the largest possible volume of the box.',
        steps: [
          { label: 'Step 1: Variables', text: 'Let $x$ be the side of the square base and $y$ the height, both in centimeters.' },
          { label: 'Step 2: Constraint and objective', text: 'Material used: the base plus four sides, $x^{2} + 4xy = 1200$. Objective: volume $V = x^{2}y$.' },
          { label: 'Step 3: Eliminate $y$', text: 'Solving the constraint, $y = \\dfrac{1200 - x^{2}}{4x}$, so $$V(x) = x^{2} \\cdot \\frac{1200 - x^{2}}{4x} = 300x - \\frac{x^{3}}{4}.$$ The height must be positive, so the domain is $0 < x < \\sqrt{1200} = 20\\sqrt{3} \\approx 34.6$.' },
          { label: 'Step 4: Critical number', text: '$V\'(x) = 300 - \\tfrac{3}{4}x^{2} = 0$ gives $x^{2} = 400$, so $x = 20$ — inside the domain, as required.' },
          { label: 'Step 5: Confirm and finish', text: '$V\'\'(x) = -\\tfrac{3}{2}x < 0$ on the domain, so the lone critical point is the absolute maximum. Then $y = \\dfrac{1200 - 400}{80} = 10$ and $V = 20^{2} \\cdot 10 = 4000$ cubic centimeters.' },
        ],
        result: 'The box with square base 20 cm and height 10 cm has the maximum volume, $4000$ cubic centimeters — the base edge is exactly twice the height at the optimum.',
      },
      {
        title: 'Cylinder inscribed in a sphere: maximum volume',
        problem: 'Find the dimensions of the right circular cylinder of largest volume that can be inscribed in a sphere of radius $r$.',
        steps: [
          { label: 'Step 1: Variables and the hidden triangle', text: 'Let $h$ be the height of the cylinder and $a$ its base radius. Slice the picture by a plane through the axis: the cylinder’s cross-section is a rectangle inscribed in the circle of radius $r$, and half the rectangle is a right triangle with legs $a$ and $h/2$. The constraint is therefore $$a^{2} + \\left(\\frac{h}{2}\\right)^{2} = r^{2}.$$' },
          { label: 'Step 2: Objective and elimination', text: 'Volume $V = \\pi a^{2} h$. Solve the constraint for $a^{2} = r^{2} - \\dfrac{h^{2}}{4}$ and substitute: $$V(h) = \\pi\\left(r^{2}h - \\frac{h^{3}}{4}\\right), \\qquad 0 < h < 2r,$$ where the endpoints give cylinders of zero volume (flat as a pancake or thin as a needle).' },
          { label: 'Step 3: Differentiate and solve', text: '$V\'(h) = \\pi\\left(r^{2} - \\dfrac{3h^{2}}{4}\\right) = 0$ gives $h^{2} = \\dfrac{4r^{2}}{3}$, so $h = \\dfrac{2r}{\\sqrt{3}} = \\dfrac{2\\sqrt{3}}{3}\\,r \\approx 1.155r$.' },
          { label: 'Step 4: Confirm the maximum', text: '$V\'\'(h) = -\\dfrac{3\\pi h}{2} < 0$ throughout the domain: the lone critical point is the absolute maximum (only-hill argument).' },
          { label: 'Step 5: Recover the radius', text: 'From the constraint, $a^{2} = r^{2} - \\dfrac{h^{2}}{4} = r^{2} - \\dfrac{r^{2}}{3} = \\dfrac{2r^{2}}{3}$, so $a = r\\sqrt{\\dfrac{2}{3}} = \\dfrac{\\sqrt{6}}{3}\\,r \\approx 0.816r$.' },
          { label: 'Step 6: State the volume', text: '$V = \\pi a^{2} h = \\pi \\cdot \\dfrac{2r^{2}}{3} \\cdot \\dfrac{2r}{\\sqrt{3}} = \\dfrac{4\\pi r^{3}}{3\\sqrt{3}} \\approx 0.770\\,\\pi r^{3}$ — about 58 percent of the sphere’s volume.' },
        ],
        result: 'The optimal cylinder has height $h = \\dfrac{2r}{\\sqrt{3}}$ and base radius $a = r\\sqrt{\\dfrac{2}{3}}$, with volume $V = \\dfrac{4\\pi r^{3}}{3\\sqrt{3}}$. The geometry (a Pythagorean constraint) did the modeling; the calculus did the rest.',
      },
    ],
    keyTakeaways: [
      'Optimization is a fixed procedure: diagram, variables, constraint, objective, elimination to one variable, critical number, verification, interpretation.',
      'The constraint is the exchange rate between variables; the objective is the one quantity being optimized.',
      'Always state the domain — endpoints correspond to degenerate objects (zero area, zero volume) that cannot be optimal.',
      'A unique critical point with a sign change of $f\'$ (or $f\'\' < 0$ there) is automatically the absolute extremum on the interval.',
      'Classic results: the river fence is optimal at twice as long as deep; the open box at base edge twice the height; the inscribed cylinder at height $2r/\\sqrt{3}$.',
      'Recognize the family — allocation, container, inscribed figure — and the skeleton carries over unchanged.',
    ],
    quiz: [
      {
        q: 'With 1200 feet of fencing along a river (no fence needed on the river side), the width $x$ of the optimal field satisfies:',
        options: [`$x = 300$`, `$x = 600$`, `$x = 1200$`, `$x = 150$`],
        answer: 0,
        explanation: 'Maximize $A(x) = x(1200 - 2x)$: $A\' = 1200 - 4x = 0$ gives $x = 300$, with length $y = 600$.',
      },
      {
        q: 'In the open-top box with fixed surface area, the optimal box has base side equal to:',
        options: ['Twice the height', 'The height', 'Half the height', 'The diagonal of the base'],
        answer: 0,
        explanation: 'The optimum had base 20 cm and height 10 cm — the base edge is exactly twice the height, and this holds for any amount of material.',
      },
      {
        q: 'For a cylinder of base radius $a$ and height $h$ inscribed in a sphere of radius $r$, the constraint is:',
        options: [`$a^{2} + h^{2} = r^{2}$`, `$a + h = 2r$`, `$a^{2} + \\left(\\dfrac{h}{2}\\right)^{2} = r^{2}$`, `$a h = r^{2}$`],
        answer: 2,
        explanation: 'The axial cross-section is a rectangle inscribed in a circle: half of it is a right triangle with legs $a$ and $h/2$ and hypotenuse $r$.',
      },
      {
        q: 'The endpoints of the domain in the fence problem (where the length or width would be zero) both give:',
        options: ['Maximum area', 'Undefined area', 'Zero area — degenerate rectangles', 'Negative area'],
        answer: 2,
        explanation: 'Collapsing any dimension collapses the area to zero, which is why the interior critical point must be the winner.',
      },
      {
        q: 'The absolute maximum of $A(x) = 2400x - 2x^{2}$ on $[0, 1200]$ is:',
        options: [`$720{,}000$ at $x = 600$`, `$1{,}440{,}000$ at $x = 600$`, `$720{,}000$ at $x = 1200$`, `$2400$ at $x = 1$`],
        answer: 0,
        explanation: 'The vertex of the downward parabola: $A\' = 2400 - 4x = 0$ gives $x = 600$ and $A(600) = 720{,}000$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.7
  {
    sectionId: 'calc-ch4-s7',
    readingTime: 9,
    intro: 'Most equations cannot be solved by algebra: fifth degrees and beyond have no general formula, and mixing polynomials with exponentials or trigonometric functions offers no closed form at all. Newton’s method finds roots numerically by repeating one move — replace the curve by its tangent line and slide down to where the tangent meets the axis — and when it works, its convergence is spectacular.',
    objectives: [
      'Derive Newton’s iteration from the linearization of $f$ at a point',
      'Carry out the iteration by hand for $\\sqrt{2}$ and a cubic equation',
      'Explain quadratic convergence and the doubling of correct digits',
      'Recognize the failure modes: horizontal tangents, cycles and divergence',
      'State stopping criteria and their practical meanings',
    ],
    concepts: [
      {
        term: 'The iteration formula',
        kind: 'method',
        statement: 'Given an equation $f(x) = 0$, start from an initial guess $x_{0}$ and generate $$x_{n+1} = x_{n} - \\frac{f(x_{n})}{f\'(x_{n})}$$ as long as $f\'(x_{n}) \\ne 0$.',
        detail: 'Derivation: the tangent line to the graph at $\\left(x_{n}, f(x_{n})\\right)$ is $y = f(x_{n}) + f\'(x_{n})(x - x_{n})$. Setting $y = 0$ and solving for $x$ gives exactly the displayed formula — the next guess is where the tangent crosses the $x$-axis. This is linear approximation (Section 3.10) used as a search engine.',
      },
      {
        term: 'The geometry of the method',
        kind: 'insight',
        statement: 'Each step re-linearizes the function at the newest guess: slide down the tangent to the axis, look at where you landed on the curve, draw a fresh tangent, repeat. The sequence of tangent intercepts hops toward the root.',
        detail: 'When the initial guess is reasonably close to a simple root, the tangents steer the iterates into the root like a funnel. Each new tangent is computed from a point closer to the root than the last, so the local approximation keeps improving — the self-correcting heart of the method.',
      },
      {
        term: 'Quadratic convergence',
        kind: 'insight',
        statement: 'Near a simple root, Newton’s method roughly **squares** the error each step: if $x_{n}$ is correct to $k$ decimal digits, then $x_{n+1}$ is correct to about $2k$ digits. Two or three iterations routinely deliver machine precision.',
        detail: 'The doubling of digits is called quadratic convergence, and it is what separates Newton’s method from bisection, which gains only half a digit per step. The catch: quadratic behavior requires a good initial guess and a root where $f\'$ is nonzero — the funnel must be entered from the right side.',
      },
      {
        term: 'Failure modes',
        kind: 'insight',
        statement: 'The method breaks when $f\'(x_{n}) = 0$ (the tangent is horizontal and never meets the axis), can cycle forever between two values, and can diverge: for $f(x) = x^{1/3}$ the iteration becomes $x_{n+1} = -2x_{n}$, which gallops away from the root at $x = 0$.',
        detail: 'The cube-root example is the classic pathology: $f\'(x) = \\tfrac{1}{3}x^{-2/3}$ blows up at the root, so the tangent lines shoot across the axis and double the distance each step. Practical defense: graph the function first, start near the root, and monitor whether the iterates are actually settling — otherwise fall back on a bracketing method such as bisection.',
      },
      {
        term: 'Stopping criteria',
        kind: 'method',
        statement: 'Iterate until the process stabilizes: stop when $|x_{n+1} - x_{n}|$ is below the desired tolerance, or when $|f(x_{n})|$ is negligible — in practice, when successive iterates agree to every digit the machine displays.',
        detail: 'The two criteria measure different things: small step size says the iterates have converged to each other; small residual says the point nearly solves the equation. Either can be fooled in pathological cases (very flat functions), but together they are the working engineer’s stopping rule.',
      },
    ],
    examples: [
      {
        title: 'Computing a square root by hand',
        problem: 'Use Newton’s method with $x_{0} = 1$ to approximate $\\sqrt{2}$, performing two iterations, and assess the accuracy.',
        steps: [
          { label: 'Step 1: Set up the root problem', text: 'Finding $\\sqrt{2}$ means solving $f(x) = x^{2} - 2 = 0$, with $f\'(x) = 2x$. The iteration is $$x_{n+1} = x_{n} - \\frac{x_{n}^{2} - 2}{2x_{n}}.$$' },
          { label: 'Step 2: First iteration from $x_{0} = 1$', text: '$x_{1} = 1 - \\dfrac{1 - 2}{2 \\cdot 1} = 1 + \\dfrac{1}{2} = 1.5$.' },
          { label: 'Step 3: Second iteration', text: `$x_{2} = 1.5 - \\dfrac{2.25 - 2}{3} = 1.5 - \\dfrac{0.25}{3} = 1.5 - 0.0833333\\ldots = 1.4166667\\ldots$` },
          { label: 'Step 4: One more to see the pattern', text: `$x_{3} = 1.4166667 - \\dfrac{1.4166667^{2} - 2}{2(1.4166667)} = 1.4166667 - 0.0024510\\ldots = 1.4142157\\ldots$` },
          { label: 'Step 5: Assess accuracy against $\\sqrt{2} = 1.41421356\\ldots$', text: 'Errors: $x_{1}$ is off by about $8.6 \\times 10^{-2}$, $x_{2}$ by $2.5 \\times 10^{-3}$, and $x_{3}$ by $2.1 \\times 10^{-6}$. The number of correct digits goes from one to three to six — doubling each step, the signature of quadratic convergence.' },
        ],
        result: 'After two iterations, $x_{2} = 1.4166667$ (three correct digits); after three, $x_{3} = 1.4142157$ (six correct digits). The Babylonian square-root algorithm of antiquity is exactly this iteration.',
      },
      {
        title: 'A root that algebra barely reaches',
        problem: 'Use Newton’s method to find the real root of $x^{3} + x - 1 = 0$, starting from $x_{0} = 1$.',
        steps: [
          { label: 'Step 1: Locate the root first', text: '$f(0) = -1$ and $f(1) = 1$, so the Intermediate Value Theorem guarantees a root in $(0, 1)$. Also $f\'(x) = 3x^{2} + 1 > 0$ everywhere, so this is the only real root — a safe target.' },
          { label: 'Step 2: Write the iteration', text: '$x_{n+1} = x_{n} - \\dfrac{x_{n}^{3} + x_{n} - 1}{3x_{n}^{2} + 1}$.' },
          { label: 'Step 3: First iteration', text: 'From $x_{0} = 1$: $f(1) = 1$ and $f\'(1) = 4$, so $x_{1} = 1 - \\tfrac{1}{4} = 0.75$.' },
          { label: 'Step 4: Second iteration', text: '$f(0.75) = 0.421875 + 0.75 - 1 = 0.171875$ and $f\'(0.75) = 2.6875$, so $x_{2} = 0.75 - 0.0639535\\ldots = 0.6860465\\ldots$' },
          { label: 'Step 5: Third iteration and conclusion', text: '$f(0.6860465) \\approx 0.008929$ and $f\'(0.6860465) \\approx 2.41198$, so $x_{3} \\approx 0.6823438$. The true root is $0.6823278\\ldots$; one more iteration would give nine correct digits.' },
        ],
        result: 'The root is $x \\approx 0.682328$. Although the cubic formula could technically produce this root, Newton’s method delivers it in three easy steps — and works just as well on equations no formula can touch.',
      },
      {
        title: 'A divergent case',
        problem: 'Show that Newton’s method applied to $f(x) = x^{1/3}$ from $x_{0} = 1$ produces iterates that race away from the root.',
        steps: [
          { label: 'Step 1: The function and root', text: '$f(x) = x^{1/3}$ has the single root $x = 0$, and $f\'(x) = \\tfrac{1}{3}x^{-2/3}$.' },
          { label: 'Step 2: Simplify the iteration', text: 'The correction term is $\\dfrac{x^{1/3}}{\\frac{1}{3}x^{-2/3}} = 3x$, so the iteration reads $x_{n+1} = x_{n} - 3x_{n} = -2x_{n}$.' },
          { label: 'Step 3: Generate the sequence', text: 'From $x_{0} = 1$: $1, -2, 4, -8, 16, \\ldots$ — in general $x_{n} = (-2)^{n} x_{0}$. The iterates flip sides of the root while doubling in magnitude.' },
          { label: 'Step 4: Diagnose the failure', text: 'The derivative is unbounded near the root (the graph has a vertical tangent there), so each tangent line crosses the axis far beyond the current point — the linear model is terrible exactly where the root is.' },
        ],
        result: 'Newton’s method diverges, sending its iterates to infinity even though the root exists. The moral: always check that the iterates are converging, and when they misbehave, retreat to a bracketing method that cannot escape.',
      },
    ],
    keyTakeaways: [
      'Newton’s iteration $x_{n+1} = x_{n} - f(x_{n})/f\'(x_{n})$ comes from setting the tangent line at $x_{n}$ equal to zero.',
      'Near a simple root with a decent start, convergence is quadratic — the count of correct digits roughly doubles each step.',
      'Always graph or bracket the root first; a good initial guess is part of the method.',
      'Failure modes: $f\'(x_{n}) = 0$ halts the iteration, cycles can trap it, and vertical-tangent roots like $x^{1/3}$ at the origin repel the iterates to infinity.',
      'Stop when successive iterates agree to the desired precision or the residual $|f(x_{n})|$ is negligible.',
      'The method works on equations with no closed-form solution — its real home is applied mathematics and every numerical computing library.',
    ],
    quiz: [
      {
        q: 'At each step, Newton’s method replaces the function by:',
        options: ['Its tangent line at the current iterate', 'A secant line through two iterates', 'A parabola through three points', 'Its average value'],
        answer: 0,
        explanation: 'The next iterate is the $x$-intercept of the tangent line at the current one.',
      },
      {
        q: 'If $f\'(x_{n}) = 0$ at some iterate, then:',
        options: ['The method has converged', 'The tangent is horizontal and the next iterate is undefined — the method breaks down', 'The error doubles', 'The next iterate equals $x_{n} - 1$'],
        answer: 1,
        explanation: 'The formula divides by $f\'(x_{n})$; a horizontal tangent never meets the axis, so the step is undefined.',
      },
      {
        q: 'Starting from $x_{0} = 1$ for $\\sqrt{2}$, the first iterate $x_{1}$ is:',
        options: [`$1.25$`, `$1.5$`, `$1.414$`, `$2$`],
        answer: 1,
        explanation: '$x_{1} = 1 - \\frac{1 - 2}{2} = 1.5$; the tangent at $(1, -1)$ has slope 2 and crosses the axis at 1.5.',
      },
      {
        q: 'Newton’s method applied to $f(x) = x^{1/3}$ from $x_{0} = 1$ produces:',
        options: ['Rapid convergence to 0', 'The cycle $1, 0, 1, 0, \\ldots$', 'The diverging sequence $1, -2, 4, -8, \\ldots$', 'Exact convergence in one step'],
        answer: 2,
        explanation: 'The iteration reduces to $x_{n+1} = -2x_{n}$ because the derivative blows up at the root — a classic divergence.',
      },
      {
        q: 'Near a simple root, the number of correct digits produced by Newton’s method:',
        options: ['Increases by one per step', 'Roughly doubles each step', 'Stays constant', 'Depends only on $f\'\'$'],
        answer: 1,
        explanation: 'Quadratic convergence: the error is roughly squared each step, so the correct-digit count doubles.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.8
  {
    sectionId: 'calc-ch4-s8',
    readingTime: 9,
    intro: 'An antiderivative of $f$ is a function whose derivative is $f$ — differentiation run in reverse. Because the derivative of a constant is zero, every antiderivative comes in a family that differs by a constant, and an initial condition picks out the one member of the family you want. This section builds the antiderivative table, solves initial-value problems, and recovers position from velocity for moving particles — the doorway to Chapter 5.',
    objectives: [
      'Verify that a proposed function is an antiderivative of a given $f$',
      'Use the antiderivative table for powers, exponentials and trigonometric functions',
      'Find the most general antiderivative, with the $+ C$ family',
      'Solve initial-value problems with one or two initial conditions',
      'Recover position from velocity and velocity from acceleration in motion problems',
    ],
    concepts: [
      {
        term: 'Antiderivative',
        kind: 'definition',
        statement: 'A function $F$ is an **antiderivative** of $f$ on an interval $I$ if $F\'(x) = f(x)$ for all $x$ in $I$. The notation for the most general antiderivative is the indefinite integral: $$\\int f(x)\\,dx = F(x) + C.$$',
        detail: 'The integral sign and the $dx$ are punctuation left over from the limit-of-sums definition arriving in Chapter 5 — they mark what is being integrated and with respect to what. For now the equation is pure reverse differentiation: find $F$ so that differentiating it returns the integrand.',
      },
      {
        term: 'The family is a vertical translate',
        kind: 'theorem',
        statement: 'If $F$ is one antiderivative of $f$ on an interval, then the most general antiderivative is $F(x) + C$ for an arbitrary constant $C$: any two antiderivatives of $f$ differ by a constant.',
        detail: 'This is a corollary of the Mean Value Theorem: if $F\' = G\'$ on an interval, then $(F - G)\' = 0$ there, so $F - G$ is constant. Geometrically, the family of solutions is one curve shifted up and down the plane — one graph for every value of $C$, all with identical slopes at each $x$.',
      },
      {
        term: 'The antiderivative table',
        kind: 'notation',
        statement: '$\\displaystyle\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + C$ ($n \\ne -1$); $\\displaystyle\\int \\frac{1}{x}\\,dx = \\ln|x| + C$; $\\displaystyle\\int e^{x}\\,dx = e^{x} + C$; $\\displaystyle\\int \\sin x\\,dx = -\\cos x + C$; $\\displaystyle\\int \\cos x\\,dx = \\sin x + C$; $\\displaystyle\\int \\sec^{2}x\\,dx = \\tan x + C$; $\\displaystyle\\int \\sec x \\tan x\\,dx = \\sec x + C$; $\\displaystyle\\int \\frac{dx}{1 + x^{2}} = \\tan^{-1}x + C$; $\\displaystyle\\int \\frac{dx}{\\sqrt{1 - x^{2}}} = \\sin^{-1}x + C$.',
        detail: 'Every entry is a differentiation rule from Chapter 3 read right to left — the fastest way to check any antiderivative is to differentiate it. The power rule raises the exponent by one and divides by the new exponent; the exceptions ($n = -1$ and the two inverse-trigonometric entries) are exactly the derivative rules that produce fractions with quadratics or roots in them.',
      },
      {
        term: 'Why $\\ln|x|$ and not $\\ln x$',
        kind: 'insight',
        statement: '$\\frac{d}{dx}\\ln|x| = \\frac{1}{x}$ on both sides of the origin, so $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ holds on the whole domain of $1/x$ — that is, on $(-\\infty, 0)$ and on $(0, \\infty)$ separately.',
        detail: 'The absolute value also fixes an honest subtlety: the most general antiderivative on a disconnected domain may use different constants on different pieces, since nothing links the two intervals. Writing $\\ln|x|$ instead of $\\ln x$ is the price of telling the truth about the domain.',
      },
      {
        term: 'Differential equations and initial conditions',
        kind: 'method',
        statement: 'A **differential equation** such as $f\'(x) = x^{2}$ asks for a whole antiderivative family; an **initial condition** such as $f(0) = 5$ selects one member. An $n$-th order equation needs $n$ conditions to pin down all the constants.',
        detail: 'The recipe is mechanical: integrate as many times as the order of the equation, adding a fresh constant at each integration, then feed in the conditions in order to solve for the constants. For a second-order problem like $f\'\' = g$, the two conditions are typically an initial position and an initial velocity.',
      },
      {
        term: 'Motion: from acceleration back to position',
        kind: 'law',
        statement: 'If $a(t)$ is acceleration, then $v(t) = \\int a(t)\\,dt + C_{1}$ with $C_{1} = v(0)$ the initial velocity, and $s(t) = \\int v(t)\\,dt + C_{2}$ with $C_{2} = s(0)$ the initial position. Near the surface of the Earth, free fall has $a(t) = -g$ with $g \\approx 9.8$ meters per second squared.',
        detail: 'Each integration recovers one rung of the ladder acceleration to velocity to position, and each rung demands one initial condition. This is the prototype of all physical modeling: Newton’s second law gives acceleration from forces, and two integrations return the trajectory.',
      },
    ],
    examples: [
      {
        title: 'A most general antiderivative',
        problem: 'Find the most general antiderivative of $f(x) = 6x^{2} - \\dfrac{4}{x^{2}} + 2e^{x} + \\sin x$.',
        steps: [
          { label: 'Step 1: Rewrite in power form', text: 'The middle term is $-\\dfrac{4}{x^{2}} = -4x^{-2}$, putting every term in a form the table recognizes.' },
          { label: 'Step 2: Integrate term by term', text: 'Antidifferentiation is linear, exactly as differentiation is: $\\int 6x^{2}\\,dx = 2x^{3}$, $\\int -4x^{-2}\\,dx = \\dfrac{4}{x}$ (the exponent rises from $-2$ to $-1$, and dividing by $-1$ flips the sign), $\\int 2e^{x}\\,dx = 2e^{x}$, and $\\int \\sin x\\,dx = -\\cos x$.' },
          { label: 'Step 3: Assemble with a single constant', text: '$$F(x) = 2x^{3} + \\frac{4}{x} + 2e^{x} - \\cos x + C.$$ One constant serves the whole sum, because constants of separate terms absorb into it.' },
          { label: 'Step 4: Verify by differentiating', text: '$F\'(x) = 6x^{2} - \\dfrac{4}{x^{2}} + 2e^{x} + \\sin x$, matching the integrand exactly — the check costs one derivative and is always worth it.' },
        ],
        result: `$$\\int \\left(6x^{2} - \\frac{4}{x^{2}} + 2e^{x} + \\sin x\\right) dx = 2x^{3} + \\frac{4}{x} + 2e^{x} - \\cos x + C.$$`,
      },
      {
        title: 'An initial-value problem with two constants',
        problem: 'Find $f$ if $f\'\'(x) = x + \\sin x$, $f(0) = 2$ and $f\'(0) = 3$.',
        steps: [
          { label: 'Step 1: Integrate once', text: '$f\'(x) = \\displaystyle\\int (x + \\sin x)\\,dx = \\frac{x^{2}}{2} - \\cos x + C_{1}$, using $\\int \\sin x\\,dx = -\\cos x$.' },
          { label: 'Step 2: Apply the first condition', text: '$f\'(0) = 0 - \\cos 0 + C_{1} = -1 + C_{1} = 3$, so $C_{1} = 4$.' },
          { label: 'Step 3: Integrate again', text: '$f(x) = \\displaystyle\\int \\left(\\frac{x^{2}}{2} - \\cos x + 4\\right) dx = \\frac{x^{3}}{6} - \\sin x + 4x + C_{2}$.' },
          { label: 'Step 4: Apply the second condition', text: '$f(0) = 0 - \\sin 0 + 0 + C_{2} = C_{2} = 2$, so $C_{2} = 2$.' },
        ],
        result: '$$f(x) = \\frac{x^{3}}{6} - \\sin x + 4x + 2.$$ Two integrations, two constants, two conditions — the bookkeeping always balances.',
      },
      {
        title: 'Position from velocity',
        problem: 'A particle moves along a line with velocity $v(t) = 3t^{2} - 18t + 24$ (meters per second) and initial position $s(0) = 2$ meters. Find its position function, determine when it reverses direction, and compute both the displacement and the total distance traveled over $[0, 4]$.',
        steps: [
          { label: 'Step 1: Antidifferentiate the velocity', text: '$s(t) = \\displaystyle\\int v(t)\\,dt = t^{3} - 9t^{2} + 24t + C$.' },
          { label: 'Step 2: Apply the initial position', text: '$s(0) = C = 2$, so $s(t) = t^{3} - 9t^{2} + 24t + 2$.' },
          { label: 'Step 3: Find the reversals', text: 'The particle reverses when $v$ changes sign. Factor: $v(t) = 3\\left(t^{2} - 6t + 8\\right) = 3(t - 2)(t - 4)$, so $v = 0$ at $t = 2$ and $t = 4$: moving right on $[0, 2)$, left on $(2, 4)$, right again after $t = 4$.' },
          { label: 'Step 4: Positions at the turning points', text: '$s(2) = 8 - 36 + 48 + 2 = 22$ and $s(4) = 64 - 144 + 96 + 2 = 18$ meters.' },
          { label: 'Step 5: Displacement versus distance', text: 'Displacement over $[0, 4]$: $s(4) - s(0) = 18 - 2 = 16$ meters. Total distance: the sum of the separate legs, $|s(2) - s(0)| + |s(4) - s(2)| = 20 + 4 = 24$ meters.' },
        ],
        result: '$s(t) = t^{3} - 9t^{2} + 24t + 2$; the particle turns at $t = 2$ (22 m) and $t = 4$ (18 m). Displacement 16 meters, total distance 24 meters — the same distinction Chapter 5’s Net Change Theorem will formalize.',
      },
    ],
    keyTakeaways: [
      'An antiderivative of $f$ is any $F$ with $F\' = f$; the most general one is $F + C$, and all solutions are vertical translates of each other.',
      'Read the Chapter 3 derivative table backwards: powers integrate by raising the exponent and dividing, $1/x$ gives $\\ln|x|$, $e^{x}$ returns itself.',
      'The $n \\ne -1$ exclusion in the power rule is not pedantry — $\\int x^{-1}dx$ is the logarithm, a genuinely different animal.',
      'Initial-value problems: integrate once per order, then use the conditions to determine the constants one at a time.',
      'Motion problems chain the ladder: acceleration integrates to velocity (constant = initial velocity), velocity integrates to position (constant = initial position).',
      'Displacement is $s$ at the end minus $s$ at the start; total distance splits the trip at every reversal of the velocity’s sign.',
    ],
    quiz: [
      {
        q: 'The most general antiderivative of $f(x) = \\sin x$ is:',
        options: [`$\\cos x + C$`, `$-\\cos x + C$`, `$-\\cos x$`, `$\\sin x + C$`],
        answer: 1,
        explanation: 'Differentiating $-\\cos x$ gives $\\sin x$; the $+ C$ is required for the most general antiderivative.',
      },
      {
        q: 'The most general antiderivative of $\\dfrac{1}{x}$ on its domain is:',
        options: [`$\\ln x + C$`, `$\\ln|x| + C$`, `$\\dfrac{1}{x^{2}} + C$`, `$-\\dfrac{1}{x^{2}} + C$`],
        answer: 1,
        explanation: 'The absolute value makes the formula valid on both $(-\\infty, 0)$ and $(0, \\infty)$, the two pieces of the domain.',
      },
      {
        q: 'If $F\'(x) = G\'(x)$ for all $x$ in an interval, then:',
        options: ['$F(x) = G(x)$ everywhere', `$F(x) = G(x) + C$ for some constant $C$`, `$F(x) = G(x) + x$`, 'No conclusion can be drawn'],
        answer: 1,
        explanation: 'The derivative of $F - G$ is zero, so $F - G$ is constant by the Mean Value Theorem — the reason every antiderivative family shares one $C$.',
      },
      {
        q: 'A particle has $v(t) = 3t^{2} - 18t + 24$ and $s(0) = 2$. Its position function is:',
        options: [`$t^{3} - 9t^{2} + 24t + 2$`, `$t^{3} - 9t^{2} + 24t$`, `$3t^{3} - 18t^{2} + 24t + 2$`, `$\\dfrac{t^{3}}{3} - 3t^{2} + 24t + 2$`],
        answer: 0,
        explanation: 'Integrate term by term to get $t^{3} - 9t^{2} + 24t + C$ and use $s(0) = 2$ to find $C = 2$.',
      },
      {
        q: 'To determine both constants in the general solution of a second-order equation like $f\'\' = g$, you need:',
        options: ['One condition on $f$', 'Two conditions, such as values of $f$ and $f\'$ at a point', 'Three conditions', 'No conditions'],
        answer: 1,
        explanation: 'One condition per integration: typically the initial value of the function and of its first derivative.',
      },
      // PYQ-pattern: JEE Mains 2021 — initial-value problem for velocity (rephrased, values changed)
      {
        q: 'If $f^{\\prime}(x) = 4x^{3} - 6x$ and $f(0) = 5$, then $f(2)$ equals:',
        options: [`$4$`, `$14$`, `$0$`, `$9$`],
        answer: 3,
        explanation: 'Step 1: Restate the task as antidifferentiation plus pinning down the constant with $f(0) = 5$. Step 2: Recall the key power rule in reverse as $\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + C$. Step 3: Integrate term by term to get $f(x) = x^{4} - 3x^{2} + C$. Step 4: Impose $f(0) = 0 - 0 + C = 5$, so $C = 5$ and $f(x) = x^{4} - 3x^{2} + 5$. Step 5: Evaluate at $x = 2$ to get $16 - 12 + 5 = 9$; the distractors drop the constant, mis-handle a coefficient, or return the constant alone. Step 6: Hence $f(2) = 9$.'
      },
      // PYQ-pattern: JEE Mains 2019 — most general antiderivative of a polynomial (rephrased, values changed)
      {
        q: 'The most general antiderivative of $f(x) = 5x^{4} - 2x + 3$ is:',
        options: [`$x^{5} - x^{2} + 3x + C$`, `$x^{5} - x^{2} + 3x$`, `$20x^{3} - 2$`, `$\\frac{x^{6}}{6} - x^{2} + 3x + C$`],
        answer: 0,
        explanation: 'Step 1: Restate the goal as the full family $F$ with $F^{\\prime} = f$. Step 2: Recall the key reverse power rule $\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + C$ applied term by term. Step 3: Integrate $5x^{4}$ to $x^{5}$, $-2x$ to $-x^{2}$, and $3$ to $3x$. Step 4: Assemble $F(x) = x^{5} - x^{2} + 3x + C$ with one arbitrary constant for the whole sum. Step 5: The distractors fail since omitting $C$ gives only one member, differentiating instead of antidifferentiating reverses the operation, and raising to the wrong power mis-applies the rule. Step 6: Therefore the general family is $x^{5} - x^{2} + 3x + C$.'
      },
    ],
  },
]

import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 3: Differentiation Rules (Sections 3.1 – 3.11)
// Master study content. Worked-example numbers follow the book’s classics
// (2400-ft fence, 100 cm³/s balloon, 10-ft ladder, 185°F turkey, and so on).
// All math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh3Content: SectionContent[] = [
  // ------------------------------------------------------------------ 3.1
  {
    sectionId: 'calc-ch3-s1',
    readingTime: 8,
    intro: 'Computing every derivative straight from the limit definition quickly becomes unbearable. This section builds the algebra of differentiation — the Power Rule, the Constant Multiple and Sum Rules — and adds the one transcendental function that differentiates to itself: the natural exponential. Together these rules let you differentiate any polynomial by inspection.',
    objectives: [
      'Apply the Power Rule to positive, negative and rational exponents',
      'Use the Constant Multiple and Sum/Difference Rules to differentiate polynomials term by term',
      'Prove the Power Rule for positive integer exponents from the limit definition and the Binomial Theorem',
      'Show that the derivative of $e^x$ is $e^x$ and explain why the base $e$ is special among all exponential bases',
      'Find tangent lines to polynomial and exponential curves',
    ],
    concepts: [
      {
        term: 'Derivative of a constant function',
        kind: 'law',
        statement: 'If $c$ is a constant, then $\\frac{d}{dx}\\,c = 0$.',
        detail: 'Geometrically, the graph of $y = c$ is a horizontal line, and every tangent line to it has slope 0. From the definition: $\\frac{dc}{dx} = \\lim_{h \\to 0} \\frac{c - c}{h} = \\lim_{h \\to 0} 0 = 0$.',
      },
      {
        term: 'The Power Rule',
        kind: 'theorem',
        statement: 'For any real number $n$, $$\\frac{d}{dx}\\,x^{n} = n\\,x^{n-1}.$$ Differentiation pulls the exponent down as a coefficient and lowers the exponent by one.',
        detail: 'For a positive integer exponent the proof is a one-line application of the Binomial Theorem: $f(x + h) = (x + h)^{n} = x^{n} + n x^{n-1}h + \\binom{n}{2}x^{n-2}h^{2} + \\cdots + h^{n}$, so the difference quotient is $n x^{n-1} + h \\cdot (\\text{positive powers of } h)$, and every surviving term dies as $h \\to 0$. The rule also holds for negative and rational exponents — for example $\\frac{d}{dx}\\,x^{-3} = -3x^{-4}$ and $\\frac{d}{dx}\\,\\sqrt{x} = \\frac{1}{2\\sqrt{x}}$ — which is why you should always rewrite roots and reciprocals as powers before differentiating.',
      },
      {
        term: 'Constant Multiple Rule',
        kind: 'law',
        statement: 'If $c$ is a constant and $f$ is differentiable, then $\\frac{d}{dx}\\,[c f(x)] = c f\'(x)$.',
        detail: 'The proof follows by pulling the constant out of the limit: $\\lim_{h \\to 0} \\frac{c f(x+h) - c f(x)}{h} = c \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$. Constants slide through the derivative operator — which is why $\\frac{d}{dx}\\,(7\\sqrt{x}) = \\frac{7}{2\\sqrt{x}}$, not $7 \\cdot 0$.',
      },
      {
        term: 'Sum and Difference Rules',
        kind: 'law',
        statement: 'If $f$ and $g$ are differentiable, then $\\frac{d}{dx}\\,[f(x) \\pm g(x)] = f\'(x) \\pm g\'(x)$: the derivative of a sum is the sum of the derivatives.',
        detail: 'This is a direct consequence of the limit laws for sums. Combined with the Constant Multiple Rule it says the differentiation operator is **linear**, and by induction it extends to any finite sum — so polynomials are differentiated term by term.',
      },
      {
        term: 'Derivative of the natural exponential function',
        kind: 'theorem',
        statement: 'For all $x$, $$\\frac{d}{dx}\\,e^{x} = e^{x}.$$ The natural exponential function is its own derivative.',
        detail: 'From the definition, $\\frac{d}{dx} e^{x} = \\lim_{h \\to 0} \\frac{e^{x+h} - e^{x}}{h} = e^{x} \\lim_{h \\to 0} \\frac{e^{h} - 1}{h} = e^{x} \\cdot 1$. The key limit $\\lim_{h \\to 0} \\frac{e^{h} - 1}{h} = 1$ says the graph of $y = e^{x}$ has slope exactly 1 at the origin — numerically, $e^{0.001} \\approx 1.0010005$, so the difference quotient is about $1.0005$, closing in on 1. This self-reproducing behavior is the property that makes $e$ the natural base for calculus.',
      },
      {
        term: 'Why base e is the natural base',
        kind: 'insight',
        statement: 'Every exponential $y = a^{x}$ satisfies $\\frac{d}{dx}\\,a^{x} = m\\,a^{x}$ for some constant $m$ — namely $m = \\lim_{h \\to 0} \\frac{a^{h} - 1}{h}$, the slope of the graph at $(0, 1)$. The base $e$ is the unique base for which $m = 1$.',
        detail: 'So all exponential curves look alike up to a horizontal rescaling, and $e$ is the base whose unit of horizontal stretch matches slope 1 at the intercept. Derivatives of other bases pick up an awkward constant: $\\frac{d}{dx}\\,2^{x} = (\\ln 2)\\,2^{x}$, which is not clean (the full result arrives in Section 3.6).',
      },
    ],
    examples: [
      {
        title: 'Differentiating a polynomial with mixed exponents',
        problem: 'Differentiate $f(x) = x^{5} - 3x^{3} + \\dfrac{2}{x^{2}} + 7\\sqrt{x}$.',
        steps: [
          { label: 'Step 1: Rewrite in power form', text: 'Express every term as a power of $x$: $\\frac{2}{x^{2}} = 2x^{-2}$ and $7\\sqrt{x} = 7x^{1/2}$. The Power Rule only speaks the language of exponents.' },
          { label: 'Step 2: Apply the Sum and Difference Rules', text: 'Differentiate term by term; the derivative of a sum is the sum of the derivatives, so $f\'(x)$ is the sum of the four term-derivatives.' },
          { label: 'Step 3: Power Rule on each term', text: '$\\frac{d}{dx}\\,x^{5} = 5x^{4}$, then $\\frac{d}{dx}\\,(-3x^{3}) = -9x^{2}$ by the Constant Multiple Rule.' },
          { label: 'Step 4: Handle the negative exponent', text: '$\\frac{d}{dx}\\,(2x^{-2}) = 2 \\cdot (-2)x^{-3} = -4x^{-3} = -\\frac{4}{x^{3}}$.' },
          { label: 'Step 5: Handle the rational exponent', text: '$\\frac{d}{dx}\\,(7x^{1/2}) = 7 \\cdot \\frac{1}{2}x^{-1/2} = \\frac{7}{2\\sqrt{x}}$.' },
        ],
        result: '$$f\'(x) = 5x^{4} - 9x^{2} - \\frac{4}{x^{3}} + \\frac{7}{2\\sqrt{x}}, \\qquad x > 0.$$ The expression is only valid where the original function is defined — note the square root forces $x > 0$.',
      },
      {
        title: 'Tangent line to an exponential curve',
        problem: 'Find an equation of the tangent line to the graph of $y = e^{x}$ at the point $(0, 1)$.',
        steps: [
          { label: 'Step 1: Identify the slope', text: 'The slope of the tangent is the derivative at $x = 0$. Since $\\frac{d}{dx} e^{x} = e^{x}$, the slope is $m = e^{0} = 1$.' },
          { label: 'Step 2: Point–slope form', text: 'With slope 1 through $(0, 1)$: $y - 1 = 1 \\cdot (x - 0)$.' },
          { label: 'Step 3: State the line and interpret', text: 'The tangent line is $y = x + 1$. Because $e^x$ is concave up everywhere, the curve lies strictly above this line for every $x \\ne 0$: the famous inequality $e^{x} \\ge 1 + x$, with equality only at the point of tangency.' },
        ],
        result: 'Tangent line: $y = x + 1$. This line is the best linear approximation to $e^x$ near the origin — the seed of Section 3.10’s linear approximations.',
      },
      {
        title: 'Proof from the definition: the derivative of e to the x',
        problem: 'Use the limit definition of the derivative to show that $\\frac{d}{dx}\\,e^{x} = e^{x}$.',
        steps: [
          { label: 'Step 1: Write the difference quotient', text: '$\\frac{d}{dx}\\,e^{x} = \\lim_{h \\to 0} \\frac{e^{x+h} - e^{x}}{h}$.' },
          { label: 'Step 2: Use the law of exponents', text: 'Factor out $e^{x}$: the quotient becomes $e^{x} \\cdot \\lim_{h \\to 0} \\frac{e^{h} - 1}{h}$. The variable $x$ has been quarantined — the entire question is the numerical limit at $h = 0$.' },
          { label: 'Step 3: Evaluate the special limit', text: 'Let $m = \\lim_{h \\to 0} \\frac{e^{h} - 1}{h}$, the slope of $y = e^{x}$ at $(0, 1)$. Table of values: for $h = 0.1$ the quotient is $\\approx 1.0517$; for $h = 0.01$ it is $\\approx 1.0050$; for $h = 0.001$ it is $\\approx 1.0005$. The limit is $m = 1$.' },
          { label: 'Step 4: Conclude', text: 'Therefore $\\frac{d}{dx} e^{x} = e^{x} \\cdot 1 = e^{x}$. The derivative operator leaves this function completely unchanged — differentiating $e^x$ any number of times returns $e^x$.' },
        ],
        result: 'The exponential function is its own derivative, a characterizing property: among all functions, the multiples of $e^x$ are exactly the solutions of $y\' = y$.',
      },
    ],
    keyTakeaways: [
      'The Power Rule $\\frac{d}{dx}x^{n} = nx^{n-1}$ holds for every real exponent; always rewrite roots and reciprocals as powers first.',
      'Differentiation is linear: constants pull out, and sums and differences differentiate term by term.',
      'The proof of the Power Rule for positive integers is a Binomial Theorem computation inside the limit definition.',
      '$\\frac{d}{dx}e^{x} = e^{x}$; the base $e$ is precisely the base whose graph has slope 1 at $(0, 1)$.',
      'Tangent lines to $y = e^x$ at $(0,1)$ give the fundamental inequality $e^x \\ge 1 + x$.',
      'Polynomials differentiate to polynomials of one lower degree; $e^x$ differentiates to itself.',
    ],
    quiz: [
      {
        q: 'Differentiate $f(x) = x^{12}$.',
        options: [`$12x^{11}$`, `$x^{11}$`, `$\\frac{x^{13}}{13}$`, `$11x^{12}$`],
        answer: 0,
        explanation: 'The Power Rule pulls the exponent 12 down as a coefficient and leaves $x^{11}$.',
      },
      {
        q: 'If $f(x) = 4x^{3} - x$, then $f\'(x)$ equals:',
        options: [`$12x^{2} - 1$`, `$12x^{2}$`, `$7x^{2} - 1$`, `$x^{4} - x$`],
        answer: 0,
        explanation: 'Term by term: the Constant Multiple Rule gives $4 \\cdot 3x^{2} = 12x^{2}$ and the derivative of $-x$ is $-1$.',
      },
      {
        q: 'What is $\\dfrac{d}{dx}\\left(\\dfrac{1}{x}\\right)$?',
        options: [`$-\\dfrac{1}{x^{2}}$`, `$\\dfrac{1}{x^{2}}$`, `$-\\dfrac{1}{x}$`, `$\\ln x$`],
        answer: 0,
        explanation: 'Rewrite as $x^{-1}$; the Power Rule gives $-1 \\cdot x^{-2} = -1/x^{2}$.',
      },
      {
        q: 'Which function is equal to its own derivative for all $x$?',
        options: [`$x e^{x}$`, `$e^{2x}$`, `$e^{x}$`, `$2^{x}$`],
        answer: 2,
        explanation: '$\\frac{d}{dx}e^{x} = e^{x}$; note $2^{x}$ differentiates to $(\\ln 2)\\,2^{x}$, not to itself.',
      },
      {
        q: 'The tangent line to $y = \\sqrt{x}$ at the point $(4, 2)$ has slope:',
        options: [`$\\dfrac{1}{2\\sqrt{x}} \\Big|_{x=4} = \\dfrac{1}{4}$`, `$\\dfrac{1}{2}$`, `$2$`, `$\\dfrac{1}{8}$`],
        answer: 0,
        explanation: 'The derivative is $\\frac{1}{2}x^{-1/2}$; at $x = 4$ this is $\\frac{1}{2 \\cdot 2} = \\frac{1}{4}$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.2
  {
    sectionId: 'calc-ch3-s2',
    readingTime: 8,
    intro: 'The derivative of a product is not the product of the derivatives — and neither is the derivative of a quotient the quotient of the derivatives. This section derives the correct rules from the limit definition, proves them rigorously, and trains the bookkeeping habits (write $u$, $v$; differentiate; assemble) that make them mechanical.',
    objectives: [
      'State and apply the Product Rule for $fg$',
      'State and apply the Quotient Rule, including its lo–d–hi mnemonic',
      'Prove both rules from the limit definition of the derivative',
      'Explain with a counterexample why $(fg)\' \\ne f\'g\'$',
      'Combine the Product and Quotient Rules with the Power and exponential rules in a single problem',
    ],
    concepts: [
      {
        term: 'Why naive rules fail',
        kind: 'insight',
        statement: 'In general $(f \\cdot g)\' \\ne f\' \\cdot g\'$ and $\\left(\\frac{f}{g}\\right)\' \\ne \\frac{f\'}{g\'}$. Take $f(x) = g(x) = x$: then $(fg)(x) = x^{2}$ and $(fg)\'(x) = 2x$, but $f\'(x)g\'(x) = 1 \\cdot 1 = 1$.',
        detail: 'Differentiation is linear, not multiplicative. The limit of a product is the product of the limits, but the difference quotient of a product is not the product of difference quotients — an extra cross-term survives. That surviving cross-term is exactly what the Product Rule records.',
      },
      {
        term: 'The Product Rule',
        kind: 'theorem',
        statement: 'If $f$ and $g$ are both differentiable, then $$\\frac{d}{dx}\\,[f(x)g(x)] = f\'(x)g(x) + f(x)g\'(x).$$ The derivative of a product is the first times the derivative of the second, plus the second times the derivative of the first.',
        detail: 'Proof from the limit: subtract and add $f(x+h)g(x)$ in the numerator so that $\\frac{f(x+h)g(x+h) - f(x)g(x)}{h} = \\frac{f(x+h) - f(x)}{h} g(x) + f(x+h)\\frac{g(x+h) - g(x)}{h}$. Because $f$ is differentiable it is continuous, so $f(x+h) \\to f(x)$; the two bracketed difference quotients converge to $f\'(x)$ and $g\'(x)$, giving $f\'(x)g(x) + f(x)g\'(x)$. The add-and-subtract trick is the engine of the proof.',
      },
      {
        term: 'The Quotient Rule',
        kind: 'theorem',
        statement: 'If $f$ and $g$ are differentiable and $g(x) \\ne 0$, then $$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{g(x)f\'(x) - f(x)g\'(x)}{[g(x)]^{2}}.$$',
        detail: 'Mnemonic — **low d-high minus high d-low, over low squared**: the denominator $g$ (low) multiplies the derivative of the numerator, minus the numerator times the derivative of the denominator, all over the square of the low. The order of the subtraction matters, unlike in the Product Rule. A quick proof applies the Product Rule to $f \\cdot g^{-1}$ using the Power Rule with $n = -1$; the direct limit proof again uses an add-and-subtract step with $f(x+h)g(x)$ and a common denominator $g(x+h)g(x)$.',
      },
      {
        term: 'Products of three factors',
        kind: 'method',
        statement: 'By applying the Product Rule twice, $(u v w)\' = u\'vw + uv\'w + uvw\'$: differentiate each factor in turn, holding the others fixed, and add.',
        detail: 'Treat $vw$ as a single function: $(u \\cdot vw)\' = u\'vw + u(vw)\'$, then expand $(vw)\' = v\'w + vw\'$. The pattern extends to any finite number of factors — one term per factor.',
      },
      {
        term: 'Reciprocals as negative powers',
        kind: 'method',
        statement: 'A quotient with constant numerator, such as $\\dfrac{1}{x^{3}+1}$, can be differentiated either by the Quotient Rule with $f = 1$, or by the Power Rule with $n = -1$: both give $-\\dfrac{3x^{2}}{(x^{3}+1)^{2}}$.',
        detail: 'The special case $f = 1$ of the Quotient Rule is worth memorizing as a one-liner: $\\frac{d}{dx}\\left[\\frac{1}{g(x)}\\right] = -\\frac{g\'(x)}{[g(x)]^{2}}$. Choosing the lighter tool for a given problem is half the craft of differentiation.',
      },
    ],
    examples: [
      {
        title: 'Product Rule with a polynomial and an exponential',
        problem: 'Differentiate $y = x^{2}e^{x}$ and evaluate the derivative at $x = 0$.',
        steps: [
          { label: 'Step 1: Name the factors', text: 'Let $f(x) = x^{2}$ and $g(x) = e^{x}$, so $y = f(x)g(x)$ with $f\'(x) = 2x$ and $g\'(x) = e^{x}$.' },
          { label: 'Step 2: Assemble the rule', text: '$y\' = f\'(x)g(x) + f(x)g\'(x) = 2x\\,e^{x} + x^{2}\\,e^{x}$.' },
          { label: 'Step 3: Factor the result', text: 'Both terms carry $e^{x}$: $y\' = e^{x}(x^{2} + 2x) = x(x+2)e^{x}$.' },
          { label: 'Step 4: Evaluate at zero', text: 'At $x = 0$: $y\'(0) = e^{0}(0 + 0) = 0$. The curve $y = x^{2}e^{x}$ has a horizontal tangent at the origin — visible in its graph, which touches the $x$-axis there.' },
        ],
        result: '$$y\' = e^{x}(x^{2} + 2x), \\qquad y\'(0) = 0.$$ Sanity check the structure: the answer has two terms, one per factor, exactly as the rule predicts.',
      },
      {
        title: 'Quotient Rule on a rational function',
        problem: 'Differentiate $y = \\dfrac{x^{2} + 1}{x^{3} + 1}$.',
        steps: [
          { label: 'Step 1: Identify high and low', text: 'Numerator (high) $= x^{2} + 1$ with derivative $2x$; denominator (low) $= x^{3} + 1$ with derivative $3x^{2}$.' },
          { label: 'Step 2: Write lo d-high minus high d-low', text: '$y\' = \\dfrac{(x^{3}+1)(2x) - (x^{2}+1)(3x^{2})}{(x^{3}+1)^{2}}$.' },
          { label: 'Step 3: Expand the numerator', text: 'The first product is $2x^{4} + 2x$; the second is $3x^{4} + 3x^{2}$. Their difference is $-x^{4} - 3x^{2} + 2x$.' },
          { label: 'Step 4: Factor and simplify', text: 'The numerator factors as $-x(x^{3} + 3x - 2)$; nothing cancels with the denominator.' },
        ],
        result: '$$y\' = \\frac{-x^{4} - 3x^{2} + 2x}{(x^{3}+1)^{2}} = -\\frac{x(x^{3}+3x-2)}{(x^{3}+1)^{2}}.$$ Note the minus sign surfaced from the subtraction order — losing it is the single most common Quotient Rule error.',
      },
      {
        title: 'Combining the rules in one expression',
        problem: 'Differentiate $F(x) = \\dfrac{x e^{x}}{x^{2} + 1}$.',
        steps: [
          { label: 'Step 1: Plan the attack', text: 'The outermost structure is a quotient, but the numerator is itself a product. Work inside-out: first differentiate the numerator using the Product Rule.' },
          { label: 'Step 2: Differentiate the numerator', text: 'With $u = x$ and $v = e^{x}$: $(xe^{x})\' = 1 \\cdot e^{x} + x \\cdot e^{x} = e^{x}(x + 1)$.' },
          { label: 'Step 3: Apply the Quotient Rule', text: '$F\'(x) = \\dfrac{(x^{2}+1)\\,e^{x}(x+1) - xe^{x}\\,(2x)}{(x^{2}+1)^{2}}$.' },
          { label: 'Step 4: Factor and simplify', text: 'Pull out $e^{x}$ and expand the remaining bracket: $(x+1)(x^{2}+1) - 2x^{2} = x^{3} - x^{2} + x + 1$.' },
        ],
        result: '$$F\'(x) = \\frac{e^{x}\\left(x^{3} - x^{2} + x + 1\\right)}{(x^{2}+1)^{2}}.$$ Multi-rule problems are won by identifying the outermost rule first and never skipping the bookkeeping.',
      },
    ],
    keyTakeaways: [
      'Product Rule: $(fg)\' = f\'g + fg\'$ — one term per factor, symmetric in the two factors.',
      'Quotient Rule: low d-high minus high d-low, over low squared — the order of subtraction matters.',
      'Both proofs are limit-definition arguments built on the add-and-subtract trick; differentiability forces the continuity that makes them work.',
      'Counterexample $f = g = x$ shows $(fg)\' \\ne f\'g\'$: differentiation is linear, not multiplicative.',
      'For reciprocals with constant numerator, $\\left(\\frac{1}{g}\\right)\' = -\\frac{g\'}{g^{2}}$ is the fast lane.',
      'When several rules appear, match the outermost structure first (product, quotient, chain) and work inward.',
    ],
    quiz: [
      {
        q: 'If $f$ and $g$ are differentiable, then $(fg)\'$ equals:',
        options: ['$f\'g\'$', '$f\'g + fg\'$', '$fg\' - f\'g$', '$\\frac{f\'g + fg\'}{2}$'],
        answer: 1,
        explanation: 'The Product Rule adds one term per factor: first times derivative of second, plus second times derivative of first.',
      },
      {
        q: 'Differentiate $y = x e^{x}$.',
        options: [`$e^{x} + x$`, `$e^{x}(x+1)$`, `$e^{x}$`, `$xe^{x}(x+1)$`],
        answer: 1,
        explanation: 'Product Rule: $1 \\cdot e^{x} + x \\cdot e^{x} = e^{x}(x+1)$.',
      },
      {
        q: 'In the Quotient Rule $\\left(\\frac{f}{g}\\right)\' = \\frac{g f\' - f g\'}{g^{2}}$, the term $g f\'$ is described as:',
        options: ['high d-low', 'low d-high', 'low squared', 'high d-high'],
        answer: 1,
        explanation: 'The denominator $g$ is the low and $f$ the high; $g f\'$ is the low times the derivative of the high.',
      },
      {
        q: 'Take $f(x) = g(x) = x$. What does this example demonstrate about $(fg)\'$ versus $f\'g\'$?',
        options: ['They are always equal', '$(fg)\' = 2x$ while $f\'g\' = 1$, so they differ in general', '$f\'g\' = 2x$ while $(fg)\' = 1$', 'Nothing — the functions must be nonzero'],
        answer: 1,
        explanation: 'With $fg = x^{2}$, the derivative is $2x$, but the product of the separate derivatives is $1 \\cdot 1 = 1$.',
      },
      {
        q: 'Differentiate $h(x) = \\dfrac{1}{x^{3}+1}$ using the reciprocal shortcut.',
        options: [`$-\\dfrac{3x^{2}}{(x^{3}+1)^{2}}$`, `$\\dfrac{3x^{2}}{(x^{3}+1)^{2}}$`, `$-\\dfrac{1}{(x^{3}+1)^{2}}$`, `$\\dfrac{1}{3x^{2}}$`],
        answer: 0,
        explanation: 'With $g = x^{3}+1$: $-g\'/g^{2} = -3x^{2}/(x^{3}+1)^{2}$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.3
  {
    sectionId: 'calc-ch3-s3',
    readingTime: 8,
    intro: 'Trigonometric functions are periodic, bounded, and differentiable everywhere — and their derivatives are again trigonometric. The proofs rest on two special limits, both of which require angles measured in radians. From sine and cosine, the Product and Quotient Rules deliver the derivatives of all four remaining trig functions.',
    objectives: [
      'State the two special trigonometric limits and explain why radians are essential',
      'Prove that $\\frac{d}{dx}\\sin x = \\cos x$ directly from the limit definition',
      'Use the Quotient Rule to derive the derivatives of $\\tan x$, $\\sec x$, $\\csc x$ and $\\cot x$',
      'Differentiate products and powers involving trigonometric functions',
      'Exploit the four-step cycle $\\sin \\to \\cos \\to -\\sin \\to -\\cos$ for higher derivatives',
    ],
    concepts: [
      {
        term: 'The two special trigonometric limits',
        kind: 'law',
        statement: '$$\\lim_{h \\to 0} \\frac{\\sin h}{h} = 1 \\qquad \\text{and} \\qquad \\lim_{h \\to 0} \\frac{\\cos h - 1}{h} = 0,$$ provided $h$ is measured in **radians**.',
        detail: 'The first limit comes from the Squeeze Theorem comparing areas in the unit circle: for $0 < h < \\pi/2$ the sector of angle $h$ is trapped between two triangles, giving $\\cos h < \\frac{\\sin h}{h} < 1$, and both bounds squeeze to 1 as $h \\to 0$. The second follows algebraically: multiply by $\\cos h + 1$ to get $\\frac{\\cos h - 1}{h} = \\frac{\\cos^{2}h - 1}{h(\\cos h + 1)} = -\\frac{\\sin h}{h} \\cdot \\frac{\\sin h}{\\cos h + 1} \\to -1 \\cdot \\frac{0}{2} = 0$. If degrees were used, the first limit would be $\\pi/180$, and every trig derivative would carry that factor — radians are the coordinate system in which calculus is clean.',
      },
      {
        term: 'Derivatives of sine and cosine',
        kind: 'theorem',
        statement: 'For all $x$, $$\\frac{d}{dx}\\,\\sin x = \\cos x \\qquad \\text{and} \\qquad \\frac{d}{dx}\\,\\cos x = -\\sin x.$$',
        detail: 'Both proofs start from the angle-addition formulas. For sine: $\\frac{\\sin(x+h) - \\sin x}{h} = \\sin x \\cdot \\frac{\\cos h - 1}{h} + \\cos x \\cdot \\frac{\\sin h}{h}$, and the two special limits collapse this to $\\sin x \\cdot 0 + \\cos x \\cdot 1 = \\cos x$. For cosine the roles swap, producing the minus sign: differentiating cosine shifts the phase the opposite way.',
      },
      {
        term: 'Derivatives of the other four trig functions',
        kind: 'theorem',
        statement: '$$\\frac{d}{dx}\\tan x = \\sec^{2}x, \\qquad \\frac{d}{dx}\\cot x = -\\csc^{2}x,$$ $$\\frac{d}{dx}\\sec x = \\sec x\\,\\tan x, \\qquad \\frac{d}{dx}\\csc x = -\\csc x\\,\\cot x.$$ Each function with a leading co- differentiates to minus something.',
        detail: 'For tangent, write $\\tan x = \\frac{\\sin x}{\\cos x}$ and apply the Quotient Rule: the numerator becomes $\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x) = \\cos^{2}x + \\sin^{2}x = 1$, so $\\frac{d}{dx}\\tan x = \\frac{1}{\\cos^{2}x} = \\sec^{2}x$. For secant, differentiate $\\frac{1}{\\cos x}$ with the reciprocal shortcut: $-\\frac{-\\sin x}{\\cos^{2}x} = \\frac{\\sin x}{\\cos x} \\cdot \\frac{1}{\\cos x} = \\sec x \\tan x$.',
      },
      {
        term: 'The derivative cycle of sine',
        kind: 'insight',
        statement: 'Differentiating $\\sin x$ four times returns to $\\sin x$: $\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x$. Every fourth derivative of sine is sine.',
        detail: 'This 4-cycle is why trigonometric functions pair naturally with second derivatives: $y\'\' = -y$ is solved by $\\sin x$ and $\\cos x$. The same cycle powers the differential equations behind oscillating circuits and waves — foreshadowing Chapter 17, where second-order linear equations are solved by exactly these functions.',
      },
      {
        term: 'Trig functions in applied formulas',
        kind: 'insight',
        statement: 'Because $|\\sin| \\le 1$ and $|\\cos| \\le 1$, any derivative involving them stays bounded in magnitude — a fact used constantly in error estimates and in physics, where $\\sin\\theta \\approx \\theta$ for small angles (in radians) is the small-angle approximation.',
        detail: 'The approximation $\\sin\\theta \\approx \\theta$ is just the tangent line to $\\sin$ at $0$ — the subject of Section 3.10. It is the engine behind the pendulum equation, the single-slit diffraction pattern, and every linearization of a rotating system near equilibrium.',
      },
    ],
    examples: [
      {
        title: 'Proof from the definition: the derivative of sine',
        problem: 'Use the limit definition to show that $\\frac{d}{dx}\\sin x = \\cos x$.',
        steps: [
          { label: 'Step 1: Write the difference quotient', text: '$\\frac{d}{dx}\\sin x = \\lim_{h \\to 0} \\frac{\\sin(x + h) - \\sin x}{h}$.' },
          { label: 'Step 2: Expand with the addition formula', text: '$\\sin(x + h) = \\sin x \\cos h + \\cos x \\sin h$, so the quotient splits as $\\sin x \\cdot \\frac{\\cos h - 1}{h} + \\cos x \\cdot \\frac{\\sin h}{h}$.' },
          { label: 'Step 3: Let the special limits act', text: 'As $h \\to 0$, $\\frac{\\cos h - 1}{h} \\to 0$ and $\\frac{\\sin h}{h} \\to 1$ — both require radians.' },
          { label: 'Step 4: Conclude', text: '$\\frac{d}{dx}\\sin x = \\sin x \\cdot 0 + \\cos x \\cdot 1 = \\cos x$. The slope of the sine graph at $x$ is exactly the height of the cosine graph at $x$ — which is why the two curves are phase-shifted copies of each other.' },
        ],
        result: 'The derivative of $\\sin x$ is $\\cos x$, proved in four lines once the two special limits are in hand.',
      },
      {
        title: 'Product Rule with trigonometric factors',
        problem: 'Differentiate $f(x) = x^{2}\\sin x$.',
        steps: [
          { label: 'Step 1: Name the factors', text: 'Let $u = x^{2}$ and $v = \\sin x$, so $u\' = 2x$ and $v\' = \\cos x$.' },
          { label: 'Step 2: Apply the Product Rule', text: '$f\'(x) = u\'v + uv\' = 2x\\sin x + x^{2}\\cos x$.' },
          { label: 'Step 3: Check with a sanity value', text: 'At $x = 0$: $f\'(0) = 0 + 0 = 0$. Indeed $f(x) = x^{2}\\sin x \\approx x^{3}$ near the origin (since $\\sin x \\approx x$), and $x^{3}$ has zero slope at $0$.' },
        ],
        result: '$$f\'(x) = 2x\\sin x + x^{2}\\cos x.$$ The answer keeps one term per factor — never a lone product of derivatives.',
      },
      {
        title: 'Deriving the tangent derivative from the quotient',
        problem: 'Show that $\\dfrac{d}{dx}\\tan x = \\sec^{2}x$ by differentiating $\\tan x = \\dfrac{\\sin x}{\\cos x}$.',
        steps: [
          { label: 'Step 1: Set up the Quotient Rule', text: 'With high $= \\sin x$ (derivative $\\cos x$) and low $= \\cos x$ (derivative $-\\sin x$): $\\frac{d}{dx}\\tan x = \\frac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^{2}x}$.' },
          { label: 'Step 2: Simplify the numerator', text: 'The numerator is $\\cos^{2}x + \\sin^{2}x = 1$, the Pythagorean identity doing the heavy lifting.' },
          { label: 'Step 3: Interpret the result', text: '$\\frac{1}{\\cos^{2}x} = \\sec^{2}x$. The tangent graph has the steepest slopes exactly where cosine vanishes — near its vertical asymptotes $x = \\pm\\frac{\\pi}{2}, \\pm\\frac{3\\pi}{2}, \\ldots$, where $\\sec^{2}x \\to \\infty$.' },
        ],
        result: '$\\frac{d}{dx}\\tan x = \\sec^{2}x$, valid wherever $\\tan$ is defined (that is, where $\\cos x \\ne 0$).',
      },
    ],
    keyTakeaways: [
      'The two special limits $\\frac{\\sin h}{h} \\to 1$ and $\\frac{\\cos h - 1}{h} \\to 0$ hold only in radians; degrees would introduce a factor of $\\pi/180$.',
      'Sine differentiates to cosine; cosine differentiates to minus sine — the sign is the classic exam trap.',
      'Tangent differentiates to $\\sec^{2}x$; each co-function (cot, csc) picks up a minus sign.',
      '$\\sec$ differentiates to $\\sec\\tan$; $\\csc$ differentiates to $-\\csc\\cot$.',
      'The four-step derivative cycle of $\\sin x$ returns to $\\sin x$, anticipating oscillation equations.',
      'The small-angle approximation $\\sin\\theta \\approx \\theta$ is the tangent line at the origin.',
    ],
    quiz: [
      {
        q: 'The limit $\\lim_{h \\to 0} \\dfrac{\\sin h}{h} = 1$ requires that $h$ be measured in:',
        options: ['Degrees', 'Radians', 'Gradians', 'Either radians or degrees — it does not matter'],
        answer: 1,
        explanation: 'In degrees the limit is $\\pi/180$; the clean value 1 is a radian phenomenon.',
      },
      {
        q: 'What is $\\dfrac{d}{dx}\\cos x$?',
        options: [`$\\sin x$`, `$-\\sin x$`, `$-\\cos x$`, `$\\sec^{2}x$`],
        answer: 1,
        explanation: 'Differentiating cosine gives minus sine — the sign that shifts the phase in the opposite direction.',
      },
      {
        q: 'Differentiate $y = \\tan x$.',
        options: [`$\\sec^{2}x$`, `$\\csc^{2}x$`, `$\\sec x \\tan x$`, `$-\\csc^{2}x$`],
        answer: 0,
        explanation: 'Apply the Quotient Rule to $\\sin/\\cos$; the Pythagorean identity collapses the numerator to 1.',
      },
      {
        q: 'If $f(x) = x\\cos x$, then $f\'(x)$ equals:',
        options: [`$\\cos x - x\\sin x$`, `$\\cos x + x\\sin x$`, `$-\\sin x$`, `$x\\sin x$`],
        answer: 0,
        explanation: 'Product Rule: $1 \\cdot \\cos x + x \\cdot (-\\sin x)$.',
      },
      {
        q: 'The fourth derivative of $\\sin x$ is:',
        options: [`$\\sin x$`, `$\\cos x$`, `$-\\sin x$`, `$-\\cos x$`],
        answer: 0,
        explanation: 'Differentiating four times walks the full cycle $\\sin \\to \\cos \\to -\\sin \\to -\\cos \\to \\sin$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.4
  {
    sectionId: 'calc-ch3-s4',
    readingTime: 10,
    intro: 'Most interesting functions are compositions — a function stuffed inside another function — and none of the rules so far touches them. The Chain Rule states that derivatives of compositions multiply, and in Leibniz notation it reads like a fraction cancelling. It is the most powerful differentiation rule in the chapter, and the one you will use most per line for the rest of the book.',
    objectives: [
      'Decompose a composite function into an outer and an inner function',
      'State the Chain Rule in both Lagrange ($f(g(x))\'$) and Leibniz ($\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}$) notation',
      'Apply the Chain Rule to trigonometric, exponential and power compositions such as $\\sin(x^{2})$ and $e^{5x}$',
      'Combine the Chain Rule with the Product and Quotient Rules',
      'Explain the intuition of rates multiplying and the structure of the rigorous proof',
    ],
    concepts: [
      {
        term: 'Composite functions review',
        kind: 'definition',
        statement: 'The composite $f \\circ g$ is defined by $(f \\circ g)(x) = f(g(x))$ — the output of $g$ is fed into $f$. In $y = \\sin(x^{2})$, the **inner** function is $u = x^{2}$ and the **outer** function is $y = \\sin u$.',
        detail: 'Decomposition is a skill: given $\\sin(x^{2})$ you should see outer $\\sin u$ wrapped around inner $x^{2}$; given $e^{5x}$ see outer $e^{u}$ around inner $5x$; given $(3x-2)^{5}$ see outer $u^{5}$ around inner $3x - 2$. The Chain Rule differentiates the outer function evaluated at the inner one, then multiplies by the inner derivative.',
      },
      {
        term: 'The Chain Rule',
        kind: 'theorem',
        statement: 'If $g$ is differentiable at $x$ and $f$ is differentiable at $g(x)$, then the composite $F = f \\circ g$ is differentiable at $x$, and $$F\'(x) = f\'(g(x)) \\cdot g\'(x).$$ Differentiate the outer function (at the inner function), then multiply by the derivative of the inner function.',
        detail: 'Intuition: if $x$ changes a little, $u = g(x)$ changes about $g\'(x)$ times as much; if $u$ changes a little, $y = f(u)$ changes about $f\'(u)$ times as much. Chained, $y$ changes about $f\'(g(x)) \\cdot g\'(x)$ times as much — rates multiply. The rigorous proof must handle the case $g\'(x) = 0$ separately, because dividing by $\\Delta u$ is illegal when $\\Delta u = 0$ for arbitrarily small $\\Delta x$; Stewart patches this with an $\\varepsilon$-argument and the continuity of $g$.',
      },
      {
        term: 'Leibniz notation for the Chain Rule',
        kind: 'notation',
        statement: 'If $y = f(u)$ and $u = g(x)$ are both differentiable, then writing derivatives as fractions, $$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}.$$ The $du$ factors appear to cancel.',
        detail: 'Derivatives are not literally fractions, but Leibniz designed the notation so that the best fraction habits give the right answers — the cancellation is a memory aid, not a proof. The notation scales to chains of any length: for $y = f(u), u = g(v), v = h(x)$, you get $\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dv}\\frac{dv}{dx}$. This formal pattern is why substitution works in Chapter 5 and why the change-of-variables formula in Chapter 15 carries a Jacobian determinant.',
      },
      {
        term: 'The Power Rule combined with the Chain Rule',
        kind: 'law',
        statement: 'For any real $n$ and differentiable $g$, $$\\frac{d}{dx}\\,[g(x)]^{n} = n\\,[g(x)]^{n-1}\\,g\'(x).$$',
        detail: 'This is the Chain Rule with outer function $u^{n}$, whose derivative $n u^{n-1}$ is evaluated at $u = g(x)$. It covers a huge fraction of everyday differentiations: $(3x-2)^{5}$, $\\left(\\frac{x}{1+x^{2}}\\right)^{3}$, $\\sqrt{x^{2}+1}$ (take $n = \\frac{1}{2}$). Recognizing something-to-a-power is the fastest trigger for the chain.',
      },
      {
        term: 'Outer-first bookkeeping',
        kind: 'method',
        statement: 'The reliable procedure for any chain: (1) identify the outermost function; (2) write its derivative formula with the inner function left intact; (3) multiply by the inner derivative; (4) repeat if the inner function is itself a composition.',
        detail: 'For $y = \\sin(x^{2})$: outer is sine, so start with $\\cos(\\text{inner}) = \\cos(x^{2})$; multiply by the inner derivative $2x$ to get $2x\\cos(x^{2})$. For $y = e^{5x}$: outer is exp, start with $e^{5x}$, multiply by 5. Never differentiate through to the inside and forget the multiplication — the missing inner derivative is the most common chain-rule error.',
      },
      {
        term: 'Distinguishing sin of x squared from sine squared',
        kind: 'insight',
        statement: '$\\sin(x^{2})$ and $(\\sin x)^{2}$ (written $\\sin^{2}x$) are different functions with different derivatives: $\\frac{d}{dx}\\sin(x^{2}) = 2x\\cos(x^{2})$, while $\\frac{d}{dx}\\sin^{2}x = 2\\sin x\\cos x = \\sin 2x$.',
        detail: 'In the first, the squaring happens before the sine (inner function $x^{2}$); in the second, the squaring wraps the sine (outer function $u^{2}$, inner $\\sin x$). Reading the order of operations aloud — sine of x-squared versus sine-squared of x — is the cheapest debugging tool in trigonometric calculus.',
      },
    ],
    examples: [
      {
        title: 'The two prototype chain problems',
        problem: 'Differentiate (a) $y = \\sin(x^{2})$ and (b) $y = e^{5x}$.',
        steps: [
          { label: 'Step 1: Decompose (a)', text: 'Inner $u = x^{2}$, outer $y = \\sin u$. The derivative of sine evaluated at the inner is $\\cos(u) = \\cos(x^{2})$.' },
          { label: 'Step 2: Multiply by the inner derivative', text: 'Since $\\frac{du}{dx} = 2x$, the Chain Rule gives $\\frac{dy}{dx} = \\cos(x^{2}) \\cdot 2x = 2x\\cos(x^{2})$. In Leibniz form: $\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx} = \\cos(u) \\cdot 2x$.' },
          { label: 'Step 3: Decompose (b)', text: 'Inner $u = 5x$, outer $y = e^{u}$. The exponential differentiates to itself evaluated at the inner: $e^{5x}$.' },
          { label: 'Step 4: Multiply by the inner derivative', text: 'Since $\\frac{du}{dx} = 5$, the Chain Rule gives $\\frac{dy}{dx} = e^{5x} \\cdot 5 = 5e^{5x}$. Compare: $\\frac{d}{dx}e^{x} = e^{x}$ picks up exactly the inner slope 5 here.' },
        ],
        result: '$\\frac{d}{dx}\\sin(x^{2}) = 2x\\cos(x^{2})$ and $\\frac{d}{dx}e^{5x} = 5e^{5x}$. One structure, two costumes: differentiate outer, multiply by inner derivative.',
      },
      {
        title: 'Powers of functions and double chains',
        problem: 'Differentiate (a) $y = (3x - 2)^{5}$ and (b) $y = e^{\\sin x}$.',
        steps: [
          { label: 'Step 1: Recognize (a) as something-to-a-power', text: 'Outer $u^{5}$ around inner $u = 3x - 2$. By the power-chain law: $5(3x-2)^{4} \\cdot 3$.' },
          { label: 'Step 2: Simplify (a)', text: '$\\frac{dy}{dx} = 15(3x-2)^{4}$. The constant 3 from the inner derivative multiplies through.' },
          { label: 'Step 3: Decompose (b)', text: 'Inner $u = \\sin x$, outer $e^{u}$. Outer derivative: $e^{u}$ evaluated at the inner, that is $e^{\\sin x}$.' },
          { label: 'Step 4: Attach the inner derivative', text: 'Multiply by $\\frac{du}{dx} = \\cos x$: $\\frac{dy}{dx} = e^{\\sin x}\\cos x$. Written as one line in Leibniz form: $\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx} = e^{u}\\cos x = e^{\\sin x}\\cos x$.' },
        ],
        result: '$\\frac{dy}{dx}(3x-2)^{5} = 15(3x-2)^{4}$ and $\\frac{dy}{dx}e^{\\sin x} = e^{\\sin x}\\cos x$. The inner function is never differentiated into the outer slot — it stays intact inside the outer derivative.',
      },
      {
        title: 'Chain Rule inside the Product Rule',
        problem: 'Differentiate $f(x) = x^{2}\\sin(3x)$.',
        steps: [
          { label: 'Step 1: Choose the outermost rule', text: 'The expression is a product of $x^{2}$ and $\\sin(3x)$, so the Product Rule is primary.' },
          { label: 'Step 2: Differentiate each factor', text: 'The first factor gives $2x$. The second is a chain: outer $\\sin u$, inner $u = 3x$, so its derivative is $\\cos(3x) \\cdot 3 = 3\\cos(3x)$.' },
          { label: 'Step 3: Assemble the Product Rule', text: '$f\'(x) = 2x\\sin(3x) + x^{2} \\cdot 3\\cos(3x)$.' },
          { label: 'Step 4: Tidy up', text: '$f\'(x) = 2x\\sin(3x) + 3x^{2}\\cos(3x)$. Each factor’s derivative was computed with whatever rule that factor required — here, the chain for the trigonometric one.' },
        ],
        result: '$$f\'(x) = 2x\\sin(3x) + 3x^{2}\\cos(3x).$$ Mixed problems are layered, not simultaneous: resolve the outer structure first, then handle each piece.',
      },
    ],
    keyTakeaways: [
      'Chain Rule: $\\frac{d}{dx}f(g(x)) = f\'(g(x)) \\cdot g\'(x)$ — differentiate outer (at inner), multiply by inner derivative.',
      'Leibniz form $\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}$ extends to chains of any length; the cancellation is mnemonic, not a proof.',
      'Power version: $\\frac{d}{dx}[g(x)]^{n} = n[g(x)]^{n-1}g\'(x)$ covers roots and powers of expressions.',
      'The two prototypes: $\\frac{d}{dx}\\sin(x^{2}) = 2x\\cos(x^{2})$ and $\\frac{d}{dx}e^{5x} = 5e^{5x}$.',
      'Forgetting the inner derivative is the most common error; check every differentiated composite for its trailing factor.',
      '$\\sin(x^{2})$ and $\\sin^{2}x$ are different functions and differentiate differently.',
    ],
    quiz: [
      {
        q: 'Differentiate $y = \\sin(x^{2})$.',
        options: [`$2x\\cos(x^{2})$`, `$\\cos(x^{2})$`, `$2x\\sin(x^{2})$`, `$\\cos(2x)$`],
        answer: 0,
        explanation: 'Outer sine gives $\\cos(x^{2})$, then multiply by the inner derivative $2x$.',
      },
      {
        q: 'Differentiate $y = e^{5x}$.',
        options: [`$e^{5x}$`, `$5xe^{5x}$`, `$5e^{5x}$`, `$\\frac{e^{5x}}{5}$`],
        answer: 2,
        explanation: 'The exponential stays $e^{5x}$; multiply by the inner derivative 5.',
      },
      {
        q: 'If $y = f(u)$ and $u = g(x)$, the Chain Rule in Leibniz notation states:',
        options: [`$\\frac{dy}{dx} = \\frac{dy}{du} + \\frac{du}{dx}$`, `$\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}$`, `$\\frac{dy}{dx} = \\frac{du}{dx}\\frac{dx}{dy}$`, `$\\frac{dy}{du} = \\frac{dy}{dx}\\frac{du}{dx}$`],
        answer: 1,
        explanation: 'The derivatives multiply, with the intermediate variable $u$ cancelling on the right-hand side.',
      },
      {
        q: 'Differentiate $y = (3x - 2)^{5}$.',
        options: [`$5(3x-2)^{4}$`, `$15(3x-2)^{4}$`, `$5(3x-2)^{4} \\cdot 3x$`, `$(3x-2)^{4}$`],
        answer: 1,
        explanation: 'Power-chain: $5(3x-2)^{4}$ times the inner derivative 3 gives $15(3x-2)^{4}$.',
      },
      {
        q: 'Differentiate $y = \\sin^{2}x$.',
        options: [`$2\\sin x\\cos x$`, '$\\cos(2x)$ only', `$2\\cos x$`, `$\\sin(x^{2})$`],
        answer: 0,
        explanation: 'Outer $u^{2}$ around inner $\\sin x$: $2\\sin x \\cdot \\cos x$; by identity this equals $\\sin 2x$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.5
  {
    sectionId: 'calc-ch3-s5',
    readingTime: 9,
    intro: 'Some curves cannot be solved for $y$ as a function of $x$ — the circle, the folium of Descartes, any implicitly defined relation. Implicit differentiation sidesteps the algebra by differentiating the equation as given, treating $y$ as an invisible function of $x$ and letting the Chain Rule manufacture the $\\frac{dy}{dx}$ terms. The same machinery differentiates the inverse trigonometric functions and finds families of curves that meet at right angles.',
    objectives: [
      'Differentiate an implicit equation term by term, applying the Chain Rule to every $y$-term',
      'Find slopes, tangent lines and second derivatives on implicitly defined curves',
      'Derive the derivatives of the six inverse trigonometric functions by implicit differentiation',
      'Use the inverse function relationship between pairs of inverse trig derivatives',
      'Find orthogonal trajectories of a given family of curves',
    ],
    concepts: [
      {
        term: 'Explicit versus implicit definitions',
        kind: 'definition',
        statement: 'A curve is given **explicitly** when it is solved as $y = f(x)$, and **implicitly** when it is described by an equation such as $x^{2} + y^{2} = 25$ or $x^{3} + y^{3} = 6xy$ relating $x$ and $y$.',
        detail: 'Some implicit equations can be solved (the circle gives $y = \\pm\\sqrt{25 - x^{2}}$, two functions glued together), but many — like the folium $x^{3}+y^{3} = 6xy$ — are algebraically hopeless, and even when solvable the explicit formula is often worse to differentiate than the original equation.',
      },
      {
        term: 'The method of implicit differentiation',
        kind: 'method',
        statement: 'Differentiate both sides of the equation with respect to $x$, treating $y$ as a function of $x$ throughout — so the Chain Rule turns every $y$-term into a $y\'$ factor — then solve the resulting linear equation for $y\'$.',
        detail: 'For $x^{2} + y^{2} = 25$: differentiating gives $2x + 2y\\,y\' = 0$, so $y\' = -\\frac{x}{y}$. The slope formula is valid wherever $y \\ne 0$; at $(3, 4)$ the slope is $-\\frac{3}{4}$, at $(4, 3)$ it is $-\\frac{4}{3}$. No solving for $y$ was ever needed. The technique works because near most points the implicit curve is secretly the graph of some differentiable function — a fact proved properly in advanced texts.',
      },
      {
        term: 'Derivatives of the inverse trigonometric functions',
        kind: 'theorem',
        statement: `$$\\frac{d}{dx}\\sin^{-1}x = \\frac{1}{\\sqrt{1-x^{2}}}, \\qquad \\frac{d}{dx}\\cos^{-1}x = \\frac{-1}{\\sqrt{1-x^{2}}}, \\qquad \\frac{d}{dx}\\tan^{-1}x = \\frac{1}{1+x^{2}},$$ $$\\frac{d}{dx}\\cot^{-1}x = \\frac{-1}{1+x^{2}}, \\qquad \\frac{d}{dx}\\sec^{-1}x = \\frac{1}{|x|\\sqrt{x^{2}-1}}, \\qquad \\frac{d}{dx}\\csc^{-1}x = \\frac{-1}{|x|\\sqrt{x^{2}-1}}.$$`,
        detail: 'Prototype derivation for arctangent: let $y = \\tan^{-1}x$, so $\\tan y = x$ and $-\\frac{\\pi}{2} < y < \\frac{\\pi}{2}$. Differentiating implicitly: $\\sec^{2}y \\cdot y\' = 1$, so $y\' = \\frac{1}{\\sec^{2}y} = \\frac{1}{1 + \\tan^{2}y} = \\frac{1}{1 + x^{2}}$ — using $\\sec^{2}y = 1 + \\tan^{2}y$ and then substituting $\\tan y = x$ back. The same dance on $\\sin y = x$ gives $\\cos y \\cdot y\' = 1$, so $y\' = \\frac{1}{\\cos y} = \\frac{1}{\\sqrt{1 - \\sin^{2}y}} = \\frac{1}{\\sqrt{1-x^{2}}}$, the positive root because cosine is positive on the range of arcsine. Each inverse pair (sin/cos, tan/cot, sec/csc) differs only by an overall sign.',
      },
      {
        term: 'Inverse functions and their derivatives',
        kind: 'insight',
        statement: 'If $f^{-1}$ is the inverse of a one-to-one differentiable $f$, the graph of $f^{-1}$ is the reflection of the graph of $f$ across $y = x$ — so tangent lines reflect to tangent lines, and a steep segment of $f$ becomes a flat segment of $f^{-1}$.',
        detail: 'This reflection picture explains the sign-symmetric table above: because $\\sin^{-1}x$ and $\\cos^{-1}x$ are mirror-related, their derivatives are negatives of each other; and it foreshadows the formula $(f^{-1})\'(a) = \\frac{1}{f\'(f^{-1}(a))}$ when the denominator is nonzero. Note that $\\sin^{-1}x$ means arcsine — the inverse function — not $\\frac{1}{\\sin x}$.',
      },
      {
        term: 'Orthogonal trajectories',
        kind: 'definition',
        statement: 'A curve that intersects every member of a family of curves at right angles is an **orthogonal trajectory** of the family. At each intersection, the product of the two slopes is $-1$.',
        detail: 'Recipe: find the slope $y\'$ of the given family (its differential equation), replace $y\'$ by $-\\frac{1}{y\'}$ to get the slope law of the orthogonal family, and solve that simple differential equation. Orthogonal families model isothermal curves versus heat-flow lines, equipotentials versus electric field lines, and streamlines versus velocity potentials — any situation where two geometric families are everywhere perpendicular.',
      },
      {
        term: 'Second derivatives by implicit differentiation',
        kind: 'method',
        statement: 'To find $y\'\'$, first obtain $y\'$ as a formula in $x$ and $y$, then differentiate that formula implicitly again, substituting the already-found expression for $y\'$ wherever it appears.',
        detail: 'For the circle $x^{2}+y^{2} = 25$: from $y\' = -\\frac{x}{y}$, the quotient and chain rules give $y\'\' = -\\frac{y - x y\'}{y^{2}} = -\\frac{y + x^{2}/y}{y^{2}} = -\\frac{x^{2}+y^{2}}{y^{3}} = -\\frac{25}{y^{3}}$. The bookkeeping rule: never leave an unevaluated $y\'$ in the final answer for $y\'\'$.',
      },
    ],
    examples: [
      {
        title: 'Slope and concavity on the circle',
        problem: 'The circle $x^{2} + y^{2} = 25$ passes through $(3, 4)$. Find $\\frac{dy}{dx}$, the tangent line at $(3, 4)$, and the second derivative $y\'\'$.',
        steps: [
          { label: 'Step 1: Differentiate implicitly', text: 'Differentiate both sides with respect to $x$: $2x + 2y\\,\\frac{dy}{dx} = 0$, where the Chain Rule produced the factor $\\frac{dy}{dx}$ on the $y^{2}$ term.' },
          { label: 'Step 2: Solve for the derivative', text: '$\\frac{dy}{dx} = -\\frac{x}{y}$, valid wherever $y \\ne 0$ — at the circle’s east and west points the tangent is vertical.' },
          { label: 'Step 3: Evaluate at (3, 4)', text: 'Slope $= -\\frac{3}{4}$. Tangent line: $y - 4 = -\\frac{3}{4}(x - 3)$, that is $3x + 4y = 25$ — perpendicular to the radius, exactly as geometry demands.' },
          { label: 'Step 4: Differentiate again for concavity', text: 'Treating $y\' = -x/y$ as a quotient in which $y$ depends on $x$: $y\'\' = -\\frac{y - x y\'}{y^{2}}$, then substitute $y\' = -x/y$ and use $x^{2} + y^{2} = 25$ to collapse the numerator.' },
        ],
        result: '$\\frac{dy}{dx} = -\\frac{x}{y}$, tangent $3x + 4y = 25$ at $(3,4)$, and $y\'\' = -\\frac{25}{y^{3}}$ — negative for $y > 0$, so the top half of the circle is concave down, as expected.',
      },
      {
        title: 'Tangent to the folium of Descartes',
        problem: 'The folium $x^{3} + y^{3} = 6xy$ passes through $(3, 3)$. Find $\\frac{dy}{dx}$ and the tangent line there.',
        steps: [
          { label: 'Step 1: Differentiate every term', text: 'Left side: $3x^{2} + 3y^{2}y\'$. Right side, by the Product Rule: $\\frac{d}{dx}(6xy) = 6y + 6x y\'$.' },
          { label: 'Step 2: Collect the y-prime terms', text: '$3y^{2}y\' - 6x y\' = 6y - 3x^{2}$, so $y\'(3y^{2} - 6x) = 6y - 3x^{2}$.' },
          { label: 'Step 3: Solve for the derivative', text: '$\\frac{dy}{dx} = \\frac{6y - 3x^{2}}{3y^{2} - 6x} = \\frac{2y - x^{2}}{y^{2} - 2x}$.' },
          { label: 'Step 4: Evaluate at (3, 3)', text: 'Numerator $2(3) - 9 = -3$; denominator $9 - 6 = 3$; slope $= -1$. Tangent line: $y - 3 = -(x - 3)$, that is $x + y = 6$.' },
        ],
        result: '$\\frac{dy}{dx} = \\frac{2y - x^{2}}{y^{2} - 2x}$; at $(3,3)$ the slope is $-1$ and the tangent is $x + y = 6$. A three-century-old curve, differentiated in four lines.',
      },
      {
        title: 'Orthogonal trajectories of a family of parabolas',
        problem: 'Find the orthogonal trajectories of the family of parabolas $y = c x^{2}$.',
        steps: [
          { label: 'Step 1: Find the family’s differential equation', text: 'Differentiate $y = cx^{2}$: $y\' = 2cx$. Eliminate the parameter $c$ using $c = y/x^{2}$: $y\' = 2\\frac{y}{x}$ — the slope law satisfied at every point of every parabola in the family.' },
          { label: 'Step 2: Write the orthogonal slope law', text: 'Orthogonal curves must have slope $-\\frac{1}{y\'}$ wherever they cross, so they satisfy $\\frac{dy}{dx} = -\\frac{x}{2y}$.' },
          { label: 'Step 3: Solve by separation of variables', text: '$2y\\,dy = -x\\,dx$; integrating both sides gives $y^{2} = -\\frac{x^{2}}{2} + C$, that is $x^{2} + 2y^{2} = K$.' },
          { label: 'Step 4: Interpret', text: 'The orthogonal trajectories are the ellipses $x^{2} + 2y^{2} = K$ — every parabola of the family crosses every ellipse of the new family at a right angle. You have just solved a first-order differential equation by separation, the technique formalized in Chapter 9.' },
        ],
        result: 'Orthogonal family: $x^{2} + 2y^{2} = K$, ellipses. Note how the parameter $c$ had to be eliminated before flipping the slope — the differential equation, not the formula, describes the family.',
      },
    ],
    keyTakeaways: [
      'Implicit differentiation treats $y$ as a function of $x$; the Chain Rule attaches a $y\'$ to every differentiated $y$-term.',
      'The slope comes out as a formula in both $x$ and $y$ — evaluate it at the point of interest.',
      'For $x^{2}+y^{2} = 25$: $y\' = -x/y$ and $y\'\' = -25/y^{3}$; for the folium: $y\' = (2y - x^{2})/(y^{2} - 2x)$.',
      'Inverse trig derivatives come from the same trick: $\\frac{d}{dx}\\tan^{-1}x = \\frac{1}{1+x^{2}}$ and $\\frac{d}{dx}\\sin^{-1}x = \\frac{1}{\\sqrt{1-x^{2}}}$.',
      'Co-inverse pairs differ by a sign; $\\sin^{-1}$ denotes the inverse function, not the reciprocal.',
      'Orthogonal trajectories: eliminate the parameter, invert the slope law, solve — parabolas $y = cx^{2}$ pair with ellipses $x^{2} + 2y^{2} = K$.',
    ],
    quiz: [
      {
        q: 'For the circle $x^{2} + y^{2} = 25$, $\\dfrac{dy}{dx}$ equals:',
        options: [`$-\\dfrac{x}{y}$`, `$\\dfrac{x}{y}$`, `$-\\dfrac{y}{x}$`, `$2x + 2y$`],
        answer: 0,
        explanation: 'Implicit differentiation gives $2x + 2yy\' = 0$, hence $y\' = -x/y$.',
      },
      {
        q: 'When differentiating $y^{3}$ with respect to $x$ during implicit differentiation, the Chain Rule produces:',
        options: [`$3y^{2}$`, '$3y^{2}y\'$', '$y\'$ alone', '$3x^{2}y\'$'],
        answer: 1,
        explanation: 'Outer power rule gives $3y^{2}$; the chain through the invisible function $y(x)$ multiplies by $y\'$.',
      },
      {
        q: 'What is $\\dfrac{d}{dx}\\tan^{-1}x$?',
        options: [`$\\dfrac{1}{\\sqrt{1-x^{2}}}$`, `$\\dfrac{1}{\\cos^{2}x}$`, `$\\dfrac{1}{1+x^{2}}$`, `$\\dfrac{-1}{1+x^{2}}$`],
        answer: 2,
        explanation: 'From $\\tan y = x$: $\\sec^{2}y \\cdot y\' = 1$, and $\\sec^{2}y = 1 + \\tan^{2}y = 1 + x^{2}$.',
      },
      {
        q: 'The orthogonal trajectories of the family of lines $y = cx$ through the origin are:',
        options: ['Other lines through the origin', 'Circles $x^{2} + y^{2} = K$ centered at the origin', 'Parabolas $y = kx^{2}$', 'Horizontal lines'],
        answer: 1,
        explanation: 'The family satisfies $y\' = y/x$; the orthogonal law $y\' = -x/y$ integrates to $x^{2}+y^{2} = K$.',
      },
      {
        q: 'Which equation most urgently requires implicit differentiation?',
        options: [`$y = x^{3} - 3x + 1$`, `$x^{3} + y^{3} = 6xy$`, `$y = \\sin(x^{2})$`, `$y = e^{5x}$`],
        answer: 1,
        explanation: 'The folium cannot be solved for $y$ as a single function of $x$; the others are already explicit.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.6
  {
    sectionId: 'calc-ch3-s6',
    readingTime: 8,
    intro: 'Logarithms are the inverses of exponentials, and implicit differentiation is the key that unlocks them: differentiate $e^{y} = x$ and out falls $\\frac{d}{dx}\\ln x = \\frac{1}{x}$. The same logarithm, applied before differentiating, turns monstrous products, quotients and variable-exponent powers into sums — the technique called logarithmic differentiation. The section closes with the two limit formulas that define $e$ from compound interest.',
    objectives: [
      'Derive $\\frac{d}{dx}\\ln x = \\frac{1}{x}$ by implicit differentiation of $e^{y} = x$',
      'Differentiate $\\log_{a}x$ and $a^{x}$ for a general base $a$',
      'Execute the four-step procedure of logarithmic differentiation',
      'Differentiate variable-to-variable powers such as $x^{x}$',
      'Evaluate the limits that define $e$: $\\lim_{x \\to 0}(1+x)^{1/x} = e$ and $\\lim_{n \\to \\infty}(1 + 1/n)^{n} = e$',
    ],
    concepts: [
      {
        term: 'Derivative of the natural logarithm',
        kind: 'theorem',
        statement: 'For $x > 0$, $$\\frac{d}{dx}\\,\\ln x = \\frac{1}{x}.$$ More generally $\\frac{d}{dx}\\ln|g(x)| = \\frac{g\'(x)}{g(x)}$ wherever $g(x) \\ne 0$.',
        detail: 'Let $y = \\ln x$, so that $e^{y} = x$. Differentiating implicitly with respect to $x$: $e^{y}\\,\\frac{dy}{dx} = 1$, hence $\\frac{dy}{dx} = \\frac{1}{e^{y}} = \\frac{1}{x}$. The natural logarithm has slope $1$ at $x = 1$ and its tangent lines flatten toward $0$ as $x$ grows — the only function whose derivative is the pure reciprocal. The absolute-value variant extends the formula to negative inputs of the log argument since $\\frac{d}{dx}\\ln(-x) = \\frac{1}{x}$ as well.',
      },
      {
        term: 'Logarithms and exponentials of other bases',
        kind: 'law',
        statement: 'For $a > 0$, $a \\ne 1$: $$\\frac{d}{dx}\\log_{a}x = \\frac{1}{x\\ln a}, \\qquad \\frac{d}{dx}\\,a^{x} = a^{x}\\ln a.$$ Every base other than $e$ pays a toll of $\\ln a$.',
        detail: 'Write $\\log_{a}x = \\frac{\\ln x}{\\ln a}$ (change of base) and pull the constant $\\frac{1}{\\ln a}$ out. For $a^{x}$, write $a^{x} = e^{x \\ln a}$ and use the chain: the inner $x \\ln a$ has derivative $\\ln a$, so $\\frac{d}{dx}a^{x} = (\\ln a)\\,e^{x\\ln a} = a^{x}\\ln a$. Setting $a = e$ makes the toll $\\ln e = 1$ — the base case that started Section 3.1.',
      },
      {
        term: 'Logarithmic differentiation',
        kind: 'method',
        statement: 'To differentiate a function built from products, quotients and powers: (1) take $\\ln$ of both sides, (2) expand the logarithm using the laws $\\ln(ab) = \\ln a + \\ln b$, $\\ln(a/b) = \\ln a - \\ln b$ and $\\ln a^{r} = r\\ln a$, (3) differentiate implicitly with respect to $x$, (4) solve for $y\' = y \\cdot (\\ln y)\'$.',
        detail: 'The logarithm converts multiplication into addition, division into subtraction, and exponentiation into multiplication — each a differentiation simplification. The method is essential when the exponent itself varies, as in $x^{x}$ or $x^{\\sin x}$, where neither the Power Rule (exponent not constant) nor the exponential rule (base not constant) applies.',
      },
      {
        term: 'When logarithmic differentiation pays off',
        kind: 'insight',
        statement: 'Reach for logarithmic differentiation when: the function is a product of many factors; a quotient with factors in both positions; a variable base raised to a variable power; or roots of complicated expressions.',
        detail: 'The rule of thumb: if the expression would take more than two applications of the Product and Quotient Rules, logarithm first. The final step always multiplies back by the original $y$ — do not forget it, since $y\' = y(\\ln y)\'$.',
      },
      {
        term: 'The number e as a limit',
        kind: 'insight',
        statement: '$$\\lim_{x \\to 0}\\left(1 + x\\right)^{1/x} = e \\qquad \\text{and} \\qquad \\lim_{n \\to \\infty}\\left(1 + \\frac{1}{n}\\right)^{n} = e,$$ and the slope-based definition $\\lim_{h \\to 0}\\frac{e^{h} - 1}{h} = 1$ is equivalent to both.',
        detail: 'These limits are the mathematical fingerprint of continuous compounding — Section 3.8 derives them from compound interest. They also explain why $e \\approx 2.71828$ appears in so many growth problems: $e$ is exactly the reward for compounding infinitely often.',
      },
    ],
    examples: [
      {
        title: 'Deriving the derivative of ln x',
        problem: 'Use implicit differentiation to show that $\\frac{d}{dx}\\ln x = \\frac{1}{x}$ for $x > 0$.',
        steps: [
          { label: 'Step 1: Rewrite in exponential form', text: 'Let $y = \\ln x$. By the definition of the natural logarithm as the inverse of the exponential, $e^{y} = x$.' },
          { label: 'Step 2: Differentiate both sides implicitly', text: 'The left side is a chain (outer $e^{u}$, inner $u = y$): $e^{y} \\cdot \\frac{dy}{dx} = 1$.' },
          { label: 'Step 3: Solve for the derivative', text: '$\\frac{dy}{dx} = \\frac{1}{e^{y}}$.' },
          { label: 'Step 4: Substitute back', text: 'Since $e^{y} = x$, we get $\\frac{dy}{dx} = \\frac{1}{x}$. The domain $x > 0$ was used when writing $e^{y} = x$ with $y$ real.' },
        ],
        result: '$\\frac{d}{dx}\\ln x = \\frac{1}{x}$ — one implicit differentiation, and the last elementary function falls.',
      },
      {
        title: 'A variable base to a variable power',
        problem: 'Differentiate $y = x^{x}$ for $x > 0$.',
        steps: [
          { label: 'Step 1: Take logarithms', text: '$\\ln y = \\ln x^{x} = x \\ln x$, using the power law for logs — this is the only move that tames the variable exponent.' },
          { label: 'Step 2: Differentiate both sides', text: 'On the left, the chain gives $\\frac{y\'}{y}$. On the right, the Product Rule gives $\\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$.' },
          { label: 'Step 3: Solve for y-prime', text: '$y\' = y(\\ln x + 1)$.' },
          { label: 'Step 4: Substitute y back in', text: '$y\' = x^{x}(\\ln x + 1)$. Check at $x = 1$: $y\' = 1 \\cdot (0 + 1) = 1$, matching the tangent line to $x^{x}$ at $(1,1)$, which has slope 1.' },
        ],
        result: '$$\\frac{d}{dx}\\,x^{x} = x^{x}(\\ln x + 1).$$ Note the trap: neither the Power Rule ($x^{1}$? no — exponent varies) nor the exponential rule applies here.',
      },
      {
        title: 'Logarithmic differentiation of a many-factored quotient',
        problem: 'Differentiate $y = \\dfrac{x^{3/4}\\,\\sqrt{x^{2}+1}}{(3x+2)^{5}}$.',
        steps: [
          { label: 'Step 1: Take logarithms and expand', text: '$\\ln y = \\frac{3}{4}\\ln x + \\frac{1}{2}\\ln(x^{2}+1) - 5\\ln(3x+2)$ — three terms instead of a product, a root and a fifth power.' },
          { label: 'Step 2: Differentiate each piece', text: '$\\frac{y\'}{y} = \\frac{3}{4}\\cdot\\frac{1}{x} + \\frac{1}{2}\\cdot\\frac{2x}{x^{2}+1} - 5\\cdot\\frac{3}{3x+2}$, where each derivative is either a plain log derivative or a small chain.' },
          { label: 'Step 3: Simplify the pieces', text: '$\\frac{y\'}{y} = \\frac{3}{4x} + \\frac{x}{x^{2}+1} - \\frac{15}{3x+2}$.' },
          { label: 'Step 4: Multiply back by y', text: '$y\' = \\dfrac{x^{3/4}\\sqrt{x^{2}+1}}{(3x+2)^{5}}\\left(\\frac{3}{4x} + \\frac{x}{x^{2}+1} - \\frac{15}{3x+2}\\right)$. Factoring out the original function is both the method and the answer’s cleanest form.' },
        ],
        result: 'Direct Product-and-Quotient-Rule attack would need three rules and a page; logarithmic differentiation needs four lines. This is the book’s showcase example of the technique.',
      },
    ],
    keyTakeaways: [
      '$\\frac{d}{dx}\\ln x = \\frac{1}{x}$, derived implicitly from $e^{y} = x$; with an inner function, $\\frac{d}{dx}\\ln|g| = \\frac{g\'}{g}$.',
      'Other bases pay the $\\ln a$ toll: $\\frac{d}{dx}\\log_{a}x = \\frac{1}{x\\ln a}$ and $\\frac{d}{dx}a^{x} = a^{x}\\ln a$.',
      'Logarithmic differentiation: take $\\ln$, expand with log laws, differentiate implicitly, multiply back by $y$.',
      'Variable-to-variable powers like $x^{x}$ require the technique: $\\frac{d}{dx}x^{x} = x^{x}(\\ln x + 1)$.',
      'The limits $\\lim_{x \\to 0}(1+x)^{1/x} = e$ and $\\lim_{n \\to \\infty}(1+1/n)^{n} = e$ connect the number $e$ to compounding.',
      'When a function is a product of three or more factors, logarithm first, differentiate second.',
    ],
    quiz: [
      {
        q: 'What is $\\dfrac{d}{dx}\\ln x$?',
        options: [`$\\dfrac{1}{x}$`, `$\\ln x$`, `$\\dfrac{1}{x \\ln x}$`, `$e^{x}$`],
        answer: 0,
        explanation: 'Implicit differentiation of $e^{y} = x$ yields $1/x$ for $x > 0$.',
      },
      {
        q: 'Differentiate $y = x^{x}$ for $x > 0$.',
        options: [`$x \\cdot x^{x-1}$`, `$x^{x}\\ln x$`, `$x^{x}(\\ln x + 1)$`, `$x^{x-1} + x^{x}\\ln x$`],
        answer: 2,
        explanation: 'Log both sides: $\\ln y = x\\ln x$, so $y\'/y = \\ln x + 1$ and $y\' = x^{x}(\\ln x + 1)$.',
      },
      {
        q: 'What is $\\dfrac{d}{dx}\\,2^{x}$?',
        options: [`$2^{x}$`, `$2^{x}\\ln 2$`, `$x\\,2^{x-1}$`, `$2^{x}\\log_{2}e$`],
        answer: 1,
        explanation: 'Writing $2^{x} = e^{x\\ln 2}$, the chain gives the factor $\\ln 2$.',
      },
      {
        q: 'The final step of every logarithmic differentiation problem is to:',
        options: ['Take the logarithm of the answer', 'Multiply by the original function $y$', 'Divide by $\\ln y$', 'Differentiate once more'],
        answer: 1,
        explanation: 'You solved for $\\frac{y\'}{y}$, so recover $y\' = y \\cdot (\\ln y)\'$ by multiplying back by $y$.',
      },
      {
        q: 'Evaluate $\\lim_{x \\to 0}\\left(1 + x\\right)^{1/x}$.',
        options: [`$1$`, `$0$`, `$e$`, `$\\infty$`],
        answer: 2,
        explanation: 'This is one of the two standard limit definitions of the number $e$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.7
  {
    sectionId: 'calc-ch3-s7',
    readingTime: 9,
    intro: 'The derivative measures instantaneous rate of change, and this section cashes that abstraction out in three arenas: physics, where position differentiates to velocity and then acceleration; economics, where cost and revenue functions differentiates to marginal quantities; and biology, where population functions differentiate to growth rates. The mathematics is one idea — the slope of a function of time or quantity — wearing three costumes.',
    objectives: [
      'Relate position, velocity, acceleration and speed for rectilinear motion',
      'Determine when a particle is at rest, moving forward, or moving backward from $s(t)$',
      'Compute total distance traveled as distinct from displacement',
      'Interpret marginal cost, marginal revenue and marginal profit as derivatives',
      'Compute absolute and relative growth rates for population models',
    ],
    concepts: [
      {
        term: 'Velocity and acceleration',
        kind: 'definition',
        statement: 'If $s = f(t)$ is the position of an object moving along a line, its **velocity** is $$v(t) = \\frac{ds}{dt} = f\'(t)$$ and its **acceleration** is the derivative of velocity, $$a(t) = \\frac{dv}{dt} = \\frac{d^{2}s}{dt^{2}} = f\'\'(t).$$',
        detail: 'Velocity carries a sign: positive means moving in the positive direction, negative means moving back. Speed is the magnitude $|v(t)|$. Acceleration is the second derivative of position — the rate at which the rate itself changes. Galileo’s law of free fall, $s(t) = \\frac{1}{2}gt^{2}$, has constant acceleration $g$, which is exactly why two integrations recover the parabolic position function.',
      },
      {
        term: 'Speed versus velocity',
        kind: 'definition',
        statement: 'Velocity is signed; speed is $|v|$. A particle with $v < 0$ and $a > 0$ is moving backward but decelerating — slowing down — while $v < 0$ with $a < 0$ means moving backward and speeding up.',
        detail: 'The speed is increasing exactly when $v$ and $a$ have the same sign, and decreasing when they have opposite signs. Reading the signs of $v$ and $a$ together is the complete diagnostic for one-dimensional motion.',
      },
      {
        term: 'Total distance versus displacement',
        kind: 'method',
        statement: 'Displacement over $[t_{1}, t_{2}]$ is the net change $s(t_{2}) - s(t_{1})$. Total distance traveled is the sum of the distances of each piece between reversals of direction — found by locating the instants where $v(t) = 0$.',
        detail: 'A particle that goes forward 4 m, back 4 m and forward 20 m has displacement 20 m but total distance 28 m. Displacement ignores direction changes; distance does not. This distinction becomes the absolute-value integral of Chapter 5.',
      },
      {
        term: 'Marginal cost, revenue and profit',
        kind: 'definition',
        statement: 'If $C(x)$ is the cost of producing $x$ units, the **marginal cost** is $C\'(x)$; similarly marginal revenue $R\'(x)$ and marginal profit $P\'(x) = R\'(x) - C\'(x)$. For a single additional unit, $C(x+1) - C(x) \\approx C\'(x)$.',
        detail: 'The approximation is the linearization of Section 3.10 in economic clothing: by the Mean Value Theorem, $C(x+1) - C(x) = C\'(c)$ for some $c$ between $x$ and $x+1$, and when the cost curve is smooth the two are close. Economists phrase decisions at the margin — produce one more unit if marginal revenue exceeds marginal cost. In the book’s loan example, the total cost $C(r)$ of repaying a loan as a function of the interest rate $r$ satisfies $C\'(10) \\approx 1200$ dollars per percentage point: raising the rate from 10% to 11% raises the payoff cost by about 1200 dollars.',
      },
      {
        term: 'Growth rates in biology',
        kind: 'definition',
        statement: 'For a population of size $N(t)$, the **rate of growth** is $\\frac{dN}{dt}$. The **relative growth rate** is $\\frac{1}{N}\\frac{dN}{dt}$ — the growth rate per individual, often expressed as a percentage per unit time.',
        detail: 'A constant relative growth rate is the defining property of exponential growth, the subject of the next section: $\\frac{1}{N}\\frac{dN}{dt} = k$ rearranges to $\\frac{dN}{dt} = kN$. The same derivative-as-rate idea serves chemistry (reaction rates $\\frac{d[A]}{dt}$ for concentration $[A]$) and epidemiology.',
      },
      {
        term: 'The derivative as instantaneous rate',
        kind: 'insight',
        statement: 'Whenever one quantity depends on another, $\\frac{dy}{dx}$ is the instantaneous rate of change of $y$ with respect to $x$ — the limit of average rates $\\frac{\\Delta y}{\\Delta x}$ over shrinking intervals.',
        detail: 'This single sentence covers velocity ($y$ = position, $x$ = time), marginal cost ($y$ = cost, $x$ = quantity), growth rate ($y$ = population, $x$ = time), and every rate yet to appear in the sciences. The units of the derivative are always the units of the output divided by the units of the input.',
      },
    ],
    examples: [
      {
        title: 'Full analysis of rectilinear motion',
        problem: 'A particle moves along a line with position $s = f(t) = t^{3} - 6t^{2} + 9t$, $t \\ge 0$, in meters and seconds. Find its velocity and acceleration; determine when it is at rest, when it moves forward, and the total distance traveled in the first 5 seconds.',
        steps: [
          { label: 'Step 1: Differentiate position', text: 'Velocity: $v(t) = f\'(t) = 3t^{2} - 12t + 9 = 3(t-1)(t-3)$ m/s. Acceleration: $a(t) = v\'(t) = 6t - 12$ m/s².' },
          { label: 'Step 2: When is the particle at rest?', text: '$v(t) = 0$ at $t = 1$ and $t = 3$ s — the instants the motion reverses.' },
          { label: 'Step 3: Determine direction', text: 'Sign chart for $v$: positive on $[0, 1)$ (forward), negative on $(1, 3)$ (backward), positive on $(3, \\infty)$ (forward again). For instance $v(2) = 12 - 24 + 9 = -3$ m/s, confirming backward motion at 2 s.' },
          { label: 'Step 4: Positions at the turning points', text: '$s(0) = 0$, $s(1) = 1 - 6 + 9 = 4$ m, $s(3) = 27 - 54 + 27 = 0$ m, $s(5) = 125 - 150 + 45 = 20$ m.' },
          { label: 'Step 5: Total distance', text: 'Forward: $|4 - 0| = 4$. Backward: $|0 - 4| = 4$. Forward: $|20 - 0| = 20$. Total distance $= 4 + 4 + 20 = 28$ m; displacement $= s(5) - s(0) = 20$ m.' },
        ],
        result: 'Velocity $3(t-1)(t-3)$ m/s, acceleration $6t-12$ m/s²; at rest at $t = 1, 3$; total distance 28 m but displacement only 20 m over the first five seconds.',
      },
      {
        title: 'Marginal cost of production',
        problem: 'A company’s cost function for producing $x$ units per day is $C(x) = 5000 + 10x + 0.05x^{2}$ dollars. Find the marginal cost at $x = 100$ and use it to estimate the cost of the 101st unit; compare with the exact cost.',
        steps: [
          { label: 'Step 1: Differentiate the cost function', text: 'Marginal cost: $C\'(x) = 10 + 0.1x$ dollars per unit.' },
          { label: 'Step 2: Evaluate at the production level', text: '$C\'(100) = 10 + 10 = 20$ dollars per unit — producing the 101st unit should cost about 20 dollars.' },
          { label: 'Step 3: Compare with the exact increment', text: 'Exact: $C(101) - C(100) = [10(1) + 0.05(101^{2} - 100^{2})] = 10 + 0.05(201) = 10 + 10.05 = 20.05$ dollars.' },
          { label: 'Step 4: Interpret the gap', text: 'The estimate 20 is off by only 5 cents because the cost curve bends gently over one unit — the marginal cost is the tangent-line prediction of the next unit’s cost, and the small error is the curvature term.' },
        ],
        result: 'Marginal cost at 100 units is 20 dollars per unit; the true cost of the 101st unit is 20.05 dollars — the derivative is an excellent one-unit predictor.',
      },
      {
        title: 'Growth rate of a bacterial population',
        problem: 'A bacteria culture in a nutrient dish has population $N(t) = 1500 + 20t^{2}$ after $t$ hours. Find the growth rate and the relative growth rate at $t = 3$ hours.',
        steps: [
          { label: 'Step 1: Differentiate the population', text: 'Growth rate: $\\frac{dN}{dt} = 40t$ bacteria per hour.' },
          { label: 'Step 2: Evaluate the growth rate', text: 'At $t = 3$: $\\frac{dN}{dt} = 120$ bacteria per hour — the population is gaining 120 individuals per hour at that instant.' },
          { label: 'Step 3: Compute the relative rate', text: 'Population at $t = 3$: $N(3) = 1500 + 180 = 1680$. Relative rate: $\\frac{1}{N}\\frac{dN}{dt} = \\frac{120}{1680} = \\frac{1}{14} \\approx 0.071$.' },
          { label: 'Step 4: Interpret', text: 'The colony is growing at about 7.1% per hour at that moment. Because the relative rate is falling over time here (numerator linear, denominator quadratic), the growth is sub-exponential — a hint of the logistic constraints studied in Chapter 9.' },
        ],
        result: 'Growth rate 120 bacteria/h; relative growth rate $\\approx 7.1\\%$ per hour at $t = 3$ h.',
      },
    ],
    keyTakeaways: [
      'Velocity is $\\frac{ds}{dt}$; acceleration is $\\frac{dv}{dt} = \\frac{d^{2}s}{dt^{2}}$; speed is $|v|$.',
      'A particle reverses direction exactly when $v$ changes sign — locate the roots of $f\'(t)$.',
      'Total distance sums $|\\Delta s|$ across direction changes; displacement is the net change $s(t_{2}) - s(t_{1})$.',
      'Marginal cost $C\'(x)$ approximates the cost of the next unit: $C(x+1) - C(x) \\approx C\'(x)$.',
      'Relative growth rate $\\frac{1}{N}\\frac{dN}{dt}$ is the per-individual rate; constant relative rate means exponential growth.',
      'Units of a derivative are output units per input unit — the fastest sanity check on any applied answer.',
    ],
    quiz: [
      {
        q: 'A particle has position $s(t) = t^{3} - 6t^{2} + 9t$. It is at rest at:',
        options: [`$t = 1$ and $t = 3$`, '$t = 2$ only', '$t = 0$ only', '$t = 3$ only'],
        answer: 0,
        explanation: 'Set $v(t) = 3(t-1)(t-3) = 0$, giving $t = 1$ and $t = 3$ seconds.',
      },
      {
        q: 'In the same motion, the particle moves backward on the interval:',
        options: [`$(0, 1)$`, `$(1, 3)$`, `$(3, 5)$`, 'never'],
        answer: 1,
        explanation: 'Velocity is negative between its roots at 1 and 3 — for example $v(2) = -3$ m/s.',
      },
      {
        q: 'If $C(x)$ is a cost function, the marginal cost $C\'(100)$ is best interpreted as:',
        options: ['The average cost of the first 100 units', 'The approximate cost of producing the 101st unit', 'The fixed cost of production', 'The revenue from the 100th unit'],
        answer: 1,
        explanation: 'Marginal cost is the tangent-line estimate of the next unit’s cost: $C(101) - C(100) \\approx C\'(100)$.',
      },
      {
        q: 'Over the first 5 seconds the particle with $s(t) = t^{3} - 6t^{2} + 9t$ travels total distance:',
        options: ['$20$ m', '$28$ m', '$4$ m', '$24$ m'],
        answer: 1,
        explanation: 'Sum $|4-0| + |0-4| + |20-0| = 28$ m across the two reversals; displacement is only 20 m.',
      },
      {
        q: 'A population has $\\frac{dN}{dt} = 120$ and $N = 1680$ at a given instant. The relative growth rate is:',
        options: ['About $7.1\\%$ per unit time', 'Exactly $120$ per hour', 'About $0.14\\%$ per unit time', 'Undefined without knowing $N(t)$'],
        answer: 0,
        explanation: 'Relative rate $= \\frac{120}{1680} = \\frac{1}{14} \\approx 0.071$, that is about 7.1%.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.8
  {
    sectionId: 'calc-ch3-s8',
    readingTime: 9,
    intro: 'Whenever a quantity grows or decays at a rate proportional to its own size, it is exponential — and the natural base e is the currency of that world. This section solves the growth-decay equation, applies it to population biology, radioactive decay and Newton’s law of cooling, and derives e itself as the limit of compound interest.',
    objectives: [
      'Solve the natural growth equation $\\frac{dy}{dt} = ky$ and identify the roles of $C$ and $k$',
      'Fit an exponential model to two data points and make predictions',
      'Model cooling and warming with Newton’s law of cooling',
      'Derive continuous compounding as the limit of $m$-times-per-year compounding',
      'Compute doubling times and half-lives from the relative growth rate',
    ],
    concepts: [
      {
        term: 'The natural growth and decay equation',
        kind: 'theorem',
        statement: 'If $y$ satisfies $$\\frac{dy}{dt} = ky$$ for a constant $k$, then $y = Ce^{kt}$ for some constant $C$; conversely every such function satisfies the equation. $k > 0$ gives growth, $k < 0$ gives decay.',
        detail: 'Verification: $\\frac{d}{dt}(Ce^{kt}) = C \\cdot ke^{kt} = k(Ce^{kt})$, so the function solves the equation; that the family exhausts all solutions is proved with the chain rule by studying $y e^{-kt}$, whose derivative is identically 0. The initial condition $y(0) = y_{0}$ pins down $C = y_{0}$. The equation says the relative rate $\\frac{1}{y}\\frac{dy}{dt}$ is the constant $k$ — the signature of exponential behavior.',
      },
      {
        term: 'Population growth and decay modeling',
        kind: 'method',
        statement: 'Given a population that satisfies $\\frac{dy}{dt} = ky$ with $y(0) = y_{0}$, write $y = y_{0}e^{kt}$; a second measurement $y(t_{1})$ determines $k = \\frac{\\ln(y(t_{1})/y_{0})}{t_{1}}$.',
        detail: 'Doubling time and half-life are two faces of the same constant: $T_{\\text{double}} = \\frac{\\ln 2}{k}$ and $T_{\\text{half}} = \\frac{\\ln 2}{|k|}$. Note the time to double is the same at every size — the counterintuitive signature of exponential growth, and the reason unchecked populations and debts escalate.',
      },
      {
        term: 'Newton’s law of cooling',
        kind: 'law',
        statement: 'The temperature $T(t)$ of an object in surroundings at temperature $T_{s}$ changes at a rate proportional to the temperature difference: $$\\frac{dT}{dt} = k(T - T_{s}),$$ and the solution is $$T(t) = T_{s} + (T_{0} - T_{s})\\,e^{kt}$$ where $T_{0} = T(0)$ and $k < 0$ when the object starts hotter than its surroundings.',
        detail: 'The quantity $T - T_{s}$ itself decays exponentially, so temperatures approach the ambient level, rapidly at first and then ever more slowly. This law is an excellent model for cooling food, hot water in a mug, and — in forensic applications — estimating time of death from body temperature.',
      },
      {
        term: 'Compound interest and the birth of e',
        kind: 'insight',
        statement: 'A principal $P$ at annual rate $r$ compounded $m$ times a year grows in $t$ years to $A = P\\left(1 + \\frac{r}{m}\\right)^{mt}$. As the compounding frequency increases, $$\\lim_{m \\to \\infty} P\\left(1 + \\frac{r}{m}\\right)^{mt} = Pe^{rt},$$ continuous compounding.',
        detail: 'Writing the power as $\\left[\\left(1 + \\frac{r}{m}\\right)^{m/r}\\right]^{rt}$ and substituting $x = r/m \\to 0$, the inner limit is exactly $\\lim_{x \\to 0}(1+x)^{1/x} = e$. So the number e from Section 3.6 is the yield of infinitely frequent compounding. The same limit governs anything that compounds: populations, epidemics, chain reactions, and continuously discounted cash flows.',
      },
      {
        term: 'Continuously compounded interest',
        kind: 'definition',
        statement: 'With continuous compounding, the balance obeys $\\frac{dA}{dt} = rA$ with solution $A(t) = Pe^{rt}$ — the account grows at every instant at a rate proportional to its current size.',
        detail: 'The differential equation is what compounding becomes in the limit: interest itself earns interest immediately. The effective annual yield is $e^{r} - 1$, so 6% continuous compounding pays an effective rate of about 6.18%.',
      },
    ],
    examples: [
      {
        title: 'Fitting a growth model from two measurements',
        problem: 'A bacteria culture starts with 1000 cells, and after 2 hours the population is 4000. Assuming exponential growth, find the population function and predict when the culture reaches 16,000 cells.',
        steps: [
          { label: 'Step 1: Write the model', text: '$y = Ce^{kt}$ with $y(0) = C = 1000$, so $y = 1000e^{kt}$.' },
          { label: 'Step 2: Use the second data point', text: '$y(2) = 1000e^{2k} = 4000$, so $e^{2k} = 4$ and $2k = \\ln 4$, giving $k = \\ln 2 \\approx 0.693$ per hour.' },
          { label: 'Step 3: State the model', text: '$y = 1000e^{t\\ln 2} = 1000 \\cdot 2^{t}$ — the culture doubles every hour, since $k = \\ln 2$.' },
          { label: 'Step 4: Predict the target time', text: 'Solve $16{,}000 = 1000 \\cdot 2^{t}$: $2^{t} = 16$, so $t = \\log_{2}16 = 4$ hours. Equivalently $t = \\frac{\\ln 16}{\\ln 2} = 4$.' },
        ],
        result: '$y = 1000 \\cdot 2^{t}$ cells; the culture reaches 16,000 at $t = 4$ hours — a doubling time of exactly one hour, as $k = \\ln 2$ promises.',
      },
      {
        title: 'Newton’s law of cooling: the roast turkey',
        problem: 'A turkey is taken from an oven at $185^{\\circ}$F and placed in a room at $75^{\\circ}$F. After 30 minutes its temperature is $150^{\\circ}$F. Find $T(t)$ and predict when the turkey reaches $100^{\\circ}$F.',
        steps: [
          { label: 'Step 1: Apply the model', text: 'Newton’s law gives $T(t) = T_{s} + (T_{0} - T_{s})e^{kt} = 75 + 110e^{kt}$, since $185 - 75 = 110$.' },
          { label: 'Step 2: Fit k from the data point', text: '$T(30) = 150$: $75 + 110e^{30k} = 150$, so $e^{30k} = \\frac{75}{110} = \\frac{15}{22}$ and $k = \\frac{1}{30}\\ln\\frac{15}{22} \\approx -0.0128$ per minute — negative, as it must be for cooling.' },
          { label: 'Step 3: State the model', text: '$T(t) = 75 + 110e^{-0.0128t}$, decaying toward the room temperature of 75°F.' },
          { label: 'Step 4: Solve for the target temperature', text: 'Set $T(t) = 100$: $110e^{kt} = 25$, so $e^{kt} = \\frac{25}{110} = \\frac{5}{22}$ and $t = \\frac{\\ln(5/22)}{k} = \\frac{-1.4816}{-0.0128} \\approx 116$ minutes.' },
        ],
        result: '$T(t) = 75 + 110e^{kt}$ with $k = \\frac{1}{30}\\ln\\frac{15}{22} \\approx -0.0128$; the turkey cools to 100°F after about 116 minutes — just under two hours.',
      },
      {
        title: 'Compound interest: watching e emerge',
        problem: 'A deposit of 1000 dollars is invested at a 6% annual rate for 3 years. Compare the final balances under annual, semiannual, monthly, daily and continuous compounding.',
        steps: [
          { label: 'Step 1: Annual compounding', text: '$A = 1000(1.06)^{3} = 1191.02$ dollars.' },
          { label: 'Step 2: Semiannual', text: '$A = 1000\\left(1 + \\frac{0.06}{2}\\right)^{2 \\cdot 3} = 1000(1.03)^{6} = 1194.05$ dollars.' },
          { label: 'Step 3: Monthly and daily', text: 'Monthly: $1000\\left(1 + \\frac{0.06}{12}\\right)^{36} = 1000(1.005)^{36} = 1196.68$ dollars. Daily: $1000\\left(1 + \\frac{0.06}{365}\\right)^{1095} = 1197.16$ dollars.' },
          { label: 'Step 4: Continuous limit', text: '$A = 1000e^{0.06 \\cdot 3} = 1000e^{0.18} = 1197.22$ dollars — the ceiling that all finite compounding frequencies climb toward but never reach.' },
        ],
        result: 'Balances: 1191.02, 1194.05, 1196.68, 1197.16 and 1197.22 dollars. The gap between daily and continuous compounding is about 6 cents over three years — yet the continuous formula is the simplest of all to differentiate and analyze.',
      },
    ],
    keyTakeaways: [
      'The equation $\\frac{dy}{dt} = ky$ has solutions $y = Ce^{kt}$; the initial condition fixes $C$, the data fixes $k$.',
      'Doubling time and half-life both equal $\\frac{\\ln 2}{|k|}$, and are independent of the current size.',
      'Newton’s law of cooling: $T(t) = T_{s} + (T_{0} - T_{s})e^{kt}$ with $k < 0$ for a cooling object.',
      'Compound interest converges to $Pe^{rt}$ as frequency grows: $\\lim_{m \\to \\infty}\\left(1 + \\frac{r}{m}\\right)^{mt} = e^{rt}$.',
      'A constant relative growth rate $\\frac{1}{y}\\frac{dy}{dt} = k$ is the fingerprint of exponential behavior.',
      'Exponential models fit short-term data well and long-term data badly — real populations hit resource limits (Chapter 9’s logistic models).',
    ],
    quiz: [
      {
        q: 'The general solution of $\\dfrac{dy}{dt} = ky$ is:',
        options: [`$y = kt + C$`, `$y = Ce^{kt}$`, `$y = e^{kt} + C$`, `$y = k\\ln t + C$`],
        answer: 1,
        explanation: 'Exponential change: differentiating $Ce^{kt}$ returns $k$ times itself, and these are all the solutions.',
      },
      {
        q: 'A population grows as $y = 500e^{0.07t}$. Its doubling time is approximately:',
        options: ['$0.07$ time units', '$\\frac{\\ln 2}{0.07} \\approx 9.9$ time units', '$7$ time units', '$\\frac{0.07}{\\ln 2} \\approx 0.10$ time units'],
        answer: 1,
        explanation: 'Doubling time is always $\\frac{\\ln 2}{k}$; with $k = 0.07$ that is about 9.9 time units.',
      },
      {
        q: 'In Newton’s law of cooling $\\frac{dT}{dt} = k(T - T_{s})$, an object hotter than its surroundings has:',
        options: [`$k > 0$`, `$k < 0$`, `$k = 0$`, 'The sign of k depends on the object’s mass'],
        answer: 1,
        explanation: 'A hot object cools, so $\\frac{dT}{dt} < 0$ while $T - T_{s} > 0$; the proportionality constant must be negative.',
      },
      {
        q: 'As compounding frequency $m$ increases, $\\left(1 + \\dfrac{r}{m}\\right)^{mt}$ approaches:',
        options: [`$1$`, `$rt$`, `$e^{rt}$`, `$\\infty$`],
        answer: 2,
        explanation: 'This limit is the definition of continuous compounding and the source of the base $e$.',
      },
      {
        q: 'A quantity decays according to $y = y_{0}e^{-0.05t}$. Its half-life is:',
        options: ['$20$ time units', '$\\frac{\\ln 2}{0.05} \\approx 13.9$ time units', '$0.05$ time units', '$50$ time units'],
        answer: 1,
        explanation: 'Half-life is $\\frac{\\ln 2}{|k|} = \\frac{0.693}{0.05} \\approx 13.9$ time units — independent of $y_{0}$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.9
  {
    sectionId: 'calc-ch3-s9',
    readingTime: 10,
    intro: 'When several quantities that depend on time are linked by an equation — a ladder against a wall, an inflating balloon, water rising in a trough — differentiating that equation with respect to time relates their rates of change. Related-rates problems are word problems about exactly this move: translate the geometry into an equation, differentiate everything at once, then substitute the numbers.',
    objectives: [
      'Translate a geometric or physical situation into an equation linking time-dependent quantities',
      'Differentiate an equation with respect to $t$ using the Chain Rule on every variable',
      'Compute one rate from another, keeping track of units and signs',
      'Apply the standard strategy: name variables, draw and label, write the relation, differentiate, then substitute',
      'Solve classic configurations: ladder, balloon, trough and shadow problems',
    ],
    concepts: [
      {
        term: 'The related-rates strategy',
        kind: 'method',
        statement: 'The book’s six steps: (1) read the problem and identify the changing quantities, drawing a diagram; (2) write down the given information and the target using **derivative notation** such as $\\frac{dV}{dt}$; (3) find an equation linking the variables; (4) differentiate both sides with respect to $t$; (5) substitute the known values; (6) interpret the answer — units and sign.',
        detail: 'The strategy enforces the discipline that makes these problems solvable: the equation in step 3 must relate variables, not their rates; the rates arrive only after differentiation. Assign letters to all quantities even those not asked for, because the chain will need them.',
      },
      {
        term: 'Differentiate with respect to time',
        kind: 'notation',
        statement: 'Every variable in the equation is a function of $t$, so the Chain Rule applies to each: differentiating $V = \\frac{4}{3}\\pi r^{3}$ with respect to $t$ gives $\\frac{dV}{dt} = 4\\pi r^{2}\\frac{dr}{dt}$, not $4\\pi r^{2}$.',
        detail: 'This is the conceptual heart of the section: $\\frac{d}{dt}$ is a different operator from $\\frac{d}{dr}$, and the missing $\\frac{dr}{dt}$ is the classic lost factor. In Leibniz notation the bookkeeping is automatic — each variable that is not $t$ contributes its own derivative-with-respect-to-$t$ factor.',
      },
      {
        term: 'Substitute after differentiating',
        kind: 'insight',
        statement: 'Numerical values (such as a specific radius) must be substituted **after** the differentiation step, never before — substituting early freezes a variable and silently deletes the very rate you are computing.',
        detail: 'If you put $r = 5$ into $V = \\frac{4}{3}\\pi r^{3}$ before differentiating, you get $\\frac{dV}{dt} = 0$: the volume of that one fixed sphere is indeed constant. The instant values are a snapshot of the moving picture; differentiate the moving picture.',
      },
      {
        term: 'The shadow configuration',
        kind: 'insight',
        statement: 'A streetlight of height $L$ casts the shadow of a person of height $h$ walking away at speed $\\frac{dx}{dt}$; by similar triangles $\\frac{L}{x + s} = \\frac{h}{s}$ (with $s$ the shadow length), so $s = \\frac{h}{L-h}\\,x$ and the shadow tip moves at $\\frac{ds}{dt} + \\frac{dx}{dt} = \\frac{L}{L-h}\\frac{dx}{dt}$ — a constant multiple of the walking speed, independent of position.',
        detail: 'For the book’s numbers — a 15-ft light, a 6-ft man walking at 5 ft/s — the shadow lengthens at $\\frac{6}{9} \\cdot 5 = \\frac{10}{3}$ ft/s and the tip races away at $\\frac{15}{9} \\cdot 5 = \\frac{25}{3}$ ft/s. The punchline is structural: the tip of the shadow moves at a constant speed no matter how far the man is from the pole, because similar triangles make everything proportional to $x$.',
      },
      {
        term: 'Signs in related rates',
        kind: 'insight',
        statement: 'A negative answer means the quantity is decreasing: $\\frac{dy}{dt} = -\\frac{3}{2}$ ft/s in the ladder problem says the top slides **down** at 1.5 ft/s. Assign positive directions at the start and let the signs speak.',
        detail: 'Decide once and for all which directions are positive (usually rightward and upward), then report magnitudes with words — downward, shrinking, approaching — when interpreting. A negative rate is information, not an error.',
      },
    ],
    examples: [
      {
        title: 'The inflating balloon',
        problem: 'Air is pumped into a spherical balloon so that its volume increases at a rate of $100\\,\\text{cm}^3/\\text{s}$. How fast is the radius increasing when the diameter is 50 cm?',
        steps: [
          { label: 'Step 1: Name variables and rates', text: 'Let $r$ and $V$ be the radius and volume at time $t$. Given: $\\frac{dV}{dt} = 100\\,\\text{cm}^3/\\text{s}$. Wanted: $\\frac{dr}{dt}$ when $r = 25$ cm.' },
          { label: 'Step 2: Relate the variables', text: 'The geometry of a sphere: $V = \\frac{4}{3}\\pi r^{3}$.' },
          { label: 'Step 3: Differentiate with respect to t', text: '$\\frac{dV}{dt} = 4\\pi r^{2}\\,\\frac{dr}{dt}$ — the Chain Rule attaches $\\frac{dr}{dt}$ to the $r^{3}$ term.' },
          { label: 'Step 4: Substitute the snapshot values', text: 'With $r = 25$ and $\\frac{dV}{dt} = 100$: $100 = 4\\pi(25)^{2}\\frac{dr}{dt} = 2500\\pi\\,\\frac{dr}{dt}$.' },
          { label: 'Step 5: Solve and interpret', text: '$\\frac{dr}{dt} = \\frac{100}{2500\\pi} = \\frac{1}{25\\pi} \\approx 0.0127$ cm/s — about an eighth of a millimeter per second. The same balloon inflates ever more slowly at fixed airflow because the growing surface area spreads the volume thin.' },
        ],
        result: '$\\frac{dr}{dt} = \\frac{1}{25\\pi} \\approx 0.0127$ cm/s when the diameter is 50 cm. Note how the $r^{2}$ in the differentiated equation is what couples the rates.',
      },
      {
        title: 'The sliding ladder',
        problem: 'A 10-ft ladder leans against a vertical wall. If the bottom of the ladder slides away from the base of the wall at 2 ft/s, how fast is the top of the ladder moving down the wall when the bottom is 6 ft from the wall?',
        steps: [
          { label: 'Step 1: Set up variables', text: 'Let $x$ be the distance from the wall to the bottom of the ladder and $y$ the height of the top, at time $t$. Given $\\frac{dx}{dt} = 2$ ft/s; wanted $\\frac{dy}{dt}$ when $x = 6$. At that instant $y = \\sqrt{100 - 36} = 8$ ft.' },
          { label: 'Step 2: Relate the variables', text: 'The ladder has fixed length 10 ft, so the right triangle satisfies $x^{2} + y^{2} = 100$ (Pythagoras).' },
          { label: 'Step 3: Differentiate with respect to t', text: '$2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$, so $\\frac{dy}{dt} = -\\frac{x}{y}\\frac{dx}{dt}$ — both $x$ and $y$ carried chain factors.' },
          { label: 'Step 4: Substitute', text: 'At $x = 6$, $y = 8$: $\\frac{dy}{dt} = -\\frac{6}{8}(2) = -\\frac{3}{2}$ ft/s.' },
          { label: 'Step 5: Interpret — and note the warning', text: 'The top slides down at 1.5 ft/s. The minus sign says down. Note $\\frac{dy}{dt}$ grows without bound as the ladder flattens ($y \\to 0$) — the model predicts absurd infinite speeds, so it stops being physical well before the ladder lies flat.' },
        ],
        result: '$\\frac{dy}{dt} = -\\frac{3}{2}$ ft/s: the top of the ladder moves down the wall at 1.5 ft/s at that instant.',
      },
      {
        title: 'Filling a trough',
        problem: 'A trough is 10 m long and its ends are isosceles triangles 3 m across at the top and 1 m deep. Water flows in at $12\\,\\text{m}^3/\\text{min}$. How fast is the water level rising when the water is $\\frac{1}{2}$ m deep?',
        steps: [
          { label: 'Step 1: Draw and label a cross-section', text: 'Let $h$ be the water depth and $w$ the width of the water surface across the triangular end. Given $\\frac{dV}{dt} = 12\\,\\text{m}^3/\\text{min}$; wanted $\\frac{dh}{dt}$ when $h = 0.5$ m.' },
          { label: 'Step 2: Use similar triangles', text: 'The triangular cross-section scales linearly: the full triangle has width 3 at depth 1, so the water surface has width $w = 3h$ at depth $h$.' },
          { label: 'Step 3: Express the volume', text: 'The water is a prism of length 10 with triangular cross-section: $V = 10 \\cdot \\frac{1}{2} w h = 10 \\cdot \\frac{1}{2}(3h)(h) = 15h^{2}$ — one variable only, the payoff of eliminating $w$ with similar triangles.' },
          { label: 'Step 4: Differentiate with respect to t', text: '$\\frac{dV}{dt} = 30h\\,\\frac{dh}{dt}$.' },
          { label: 'Step 5: Substitute and solve', text: 'At $h = 0.5$: $12 = 30(0.5)\\frac{dh}{dt} = 15\\frac{dh}{dt}$, so $\\frac{dh}{dt} = \\frac{12}{15} = 0.8$ m/min.' },
        ],
        result: 'The water level rises at $\\frac{4}{5}$ m/min (0.8 m/min) when the depth is half a meter. As the trough fills, the same inflow raises the level ever more slowly — $\\frac{dh}{dt} = \\frac{12}{30h}$ shrinks as $h$ grows.',
      },
    ],
    keyTakeaways: [
      'Related rates = one equation, several time-dependent variables, one differentiation with respect to $t$.',
      'The Chain Rule gives every non-$t$ variable its own rate factor: $\\frac{d}{dt}r^{3} = 3r^{2}\\frac{dr}{dt}$.',
      'Substitute numeric values only after differentiating — early substitution deletes the unknown rate.',
      'Balloon: $\\frac{dV}{dt} = 4\\pi r^{2}\\frac{dr}{dt}$; ladder: $x^{2}+y^{2} = L^{2}$ gives $\\frac{dy}{dt} = -\\frac{x}{y}\\frac{dx}{dt}$.',
      'Trough: eliminate $w$ via similar triangles before building the volume formula $V = 15h^{2}$.',
      'A negative rate is a direction: report it with words — down, shrinking, approaching.',
    ],
    quiz: [
      {
        q: 'For the balloon with $V = \\frac{4}{3}\\pi r^{3}$, differentiating with respect to $t$ gives:',
        options: [`$\\frac{dV}{dt} = 4\\pi r^{2}$`, `$\\frac{dV}{dt} = 4\\pi r^{2}\\frac{dr}{dt}$`, `$\\frac{dr}{dt} = 4\\pi r^{2}\\frac{dV}{dt}$`, `$\\frac{dV}{dr} = \\frac{4}{3}\\pi r^{2}$`],
        answer: 1,
        explanation: 'The chain through $r(t)$ attaches the factor $\\frac{dr}{dt}$ to the geometric derivative $4\\pi r^{2}$.',
      },
      {
        q: 'In the 10-ft ladder problem with the bottom sliding away at 2 ft/s, when $x = 6$ the top moves at:',
        options: ['$+\\frac{3}{2}$ ft/s (upward)', '$-\\frac{3}{2}$ ft/s (downward)', '$-2$ ft/s (downward)', '$-\\frac{3}{4}$ ft/s (downward)'],
        answer: 1,
        explanation: 'With $y = 8$: $\\frac{dy}{dt} = -\\frac{x}{y}\\frac{dx}{dt} = -\\frac{6}{8}(2) = -\\frac{3}{2}$ ft/s.',
      },
      {
        q: 'The most common fatal error in a related-rates problem is:',
        options: ['Drawing the diagram', 'Substituting the given numeric value before differentiating', 'Assigning letters to the variables', 'Writing the units of the answer'],
        answer: 1,
        explanation: 'Early substitution freezes a moving variable and zeroes out the rate you were asked to find.',
      },
      {
        q: 'In the trough problem ($V = 15h^{2}$, $\\frac{dV}{dt} = 12$), the level rises at $h = 0.5$ m at a rate of:',
        options: ['$2.4$ m/min', '$0.8$ m/min', '$1.2$ m/min', '$\\frac{15}{12}$ m/min'],
        answer: 1,
        explanation: '$12 = 30(0.5)\\frac{dh}{dt}$ gives $\\frac{dh}{dt} = \\frac{12}{15} = 0.8$ m/min.',
      },
      {
        q: 'A 6-ft man walks at 5 ft/s directly away from a 15-ft streetlight. The tip of his shadow moves at:',
        options: ['$5$ ft/s', '$\\frac{10}{3}$ ft/s', '$\\frac{25}{3}$ ft/s', '$\\frac{5}{3}$ ft/s'],
        answer: 2,
        explanation: 'Shadow tip position is $\\frac{L}{L-h}x = \\frac{15}{9}x$, so its speed is $\\frac{15}{9} \\cdot 5 = \\frac{25}{3}$ ft/s — constant, no matter where he stands.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.10
  {
    sectionId: 'calc-ch3-s10',
    readingTime: 8,
    intro: 'Near a point of tangency, a differentiable curve is nearly straight — and straight lines are the easiest functions there are. The linearization replaces a function by its tangent line for local computation; differentials package the same idea in infinitesimal notation and quantify how measurement errors propagate through formulas.',
    objectives: [
      'Compute the linearization $L(x) = f(a) + f\'(a)(x-a)$ of a function at a point',
      'Use linear approximations to estimate function values near the point of tangency',
      'Define differentials $dy$ and $dx$ and compute $dy$ for a given $dx$',
      'Contrast the true change $\\Delta y$ with the estimated change $dy$',
      'Propagate relative errors through formulas, including the double-error rule for areas',
    ],
    concepts: [
      {
        term: 'Linearization',
        kind: 'definition',
        statement: 'If $f$ is differentiable at $a$, the **linearization** of $f$ at $a$ is $$L(x) = f(a) + f\'(a)(x - a),$$ the tangent-line approximation of $f$ near $a$: $f(x) \\approx L(x)$ for $x$ close to $a$.',
        detail: 'The linearization is the first-order Taylor polynomial — the best linear match to both the value and the slope of $f$ at $a$. Standard choices: $\\sqrt{x}$ near a perfect square, $\\sin x \\approx x$ near 0, $e^{x} \\approx 1 + x$ near 0, $\\ln(1+x) \\approx x$ near 0. The last three are worth having in instant recall for physics and engineering estimates.',
      },
      {
        term: 'Differentials',
        kind: 'notation',
        statement: 'If $y = f(x)$ is differentiable, the **differential** $dx$ is an independent variable (a small change in $x$), and the **differential** $dy$ is the dependent quantity $$dy = f\'(x)\\,dx.$$',
        detail: 'Historically $dy$ and $dx$ were thought of as infinitesimals; today they are honest variables whose ratio $\\frac{dy}{dx}$ is the derivative. Differentials convert derivative formulas into approximate-change formulas: if $x$ changes by $dx$, the change in $y$ is approximately $f\'(x)\\,dx$. The notation is why integral substitution and separation of variables in later chapters work notationally.',
      },
      {
        term: 'Delta y versus dy',
        kind: 'insight',
        statement: 'The true change is $\\Delta y = f(x + dx) - f(x)$; the differential estimate is $dy = f\'(x)\\,dx$. Geometrically, $\\Delta y$ moves along the **curve** while $dy$ moves along the **tangent line**; the gap between them is the curvature error, vanishing faster than $dx$.',
        detail: 'For $y = x^{3} + 2x$ at $x = 2$ with $dx = 0.05$: $dy = 14(0.05) = 0.7$ while $\\Delta y = f(2.05) - f(2) = 0.715125$ — the estimate is off by about 2%. Linear approximation always errs on the side opposite the concavity: concave up curves lie above their tangents, so $dy$ underestimates $\\Delta y$.',
      },
      {
        term: 'Error propagation',
        kind: 'method',
        statement: 'If a measured quantity $x$ carries a possible error $dx$, the induced error in $y = f(x)$ is approximately $dy = f\'(x)dx$, and the **relative error** is $\\frac{dy}{y}$. For a power law $y = k x^{n}$, relative errors scale by the exponent: $\\frac{dy}{y} = n\\,\\frac{dx}{x}$.',
        detail: 'For the area of a disk $A = \\pi r^{2}$: $\\frac{dA}{A} = 2\\frac{dr}{r}$ — a 1% error in the radius doubles to a 2% error in the area. For a sphere’s volume $V = \\frac{4}{3}\\pi r^{3}$ the error triples: $\\frac{dV}{V} = 3\\frac{dr}{r}$. Exponents in a formula act as error amplifiers, which is why experimental scientists obsess over measuring the most sensitively-exponentiated quantity accurately.',
      },
      {
        term: 'Differentials in many variables — a preview',
        kind: 'insight',
        statement: 'When several inputs wobble at once, the total change is approximately the sum of the partial contributions: $\\Delta z \\approx \\frac{\\partial z}{\\partial x}dx + \\frac{\\partial z}{\\partial y}dy$.',
        detail: 'This is the total differential, formalized in Section 14.4 on tangent planes and linear approximation for functions of several variables — the direct multivariable descendant of this section’s $dy = f\'(x)dx$.',
      },
    ],
    examples: [
      {
        title: 'Linearizing the square root function',
        problem: 'Find the linearization of $f(x) = \\sqrt{x}$ at $a = 4$ and use it to approximate $\\sqrt{3.98}$ and $\\sqrt{4.05}$.',
        steps: [
          { label: 'Step 1: Compute the ingredients at a', text: '$f(4) = 2$ and $f\'(x) = \\frac{1}{2\\sqrt{x}}$ so $f\'(4) = \\frac{1}{4}$.' },
          { label: 'Step 2: Write the linearization', text: '$L(x) = 2 + \\frac{1}{4}(x - 4)$.' },
          { label: 'Step 3: Approximate the first value', text: `$\\sqrt{3.98} \\approx L(3.98) = 2 + \\frac{1}{4}(-0.02) = 2 - 0.005 = 1.995$. A calculator agrees: $\\sqrt{3.98} = 1.994993\\ldots$` },
          { label: 'Step 4: Approximate the second value', text: '$\\sqrt{4.05} \\approx L(4.05) = 2 + \\frac{1}{4}(0.05) = 2.0125$; the true value is $2.012461\\ldots$ — five-decimal accuracy from a line.' },
        ],
        result: '$L(x) = 2 + \\frac{x-4}{4}$, giving $\\sqrt{3.98} \\approx 1.995$ and $\\sqrt{4.05} \\approx 2.0125$. Because $\\sqrt{x}$ is concave down, the tangent-line answers slightly overestimate the true roots.',
      },
      {
        title: 'Comparing dy and delta y',
        problem: 'Let $y = x^{3} + 2x$. If $x$ changes from 2 to 2.05, compute and compare $\\Delta y$ and $dy$.',
        steps: [
          { label: 'Step 1: Compute the true change', text: '$\\Delta y = f(2.05) - f(2) = (8.615125 + 4.1) - (8 + 4) = 12.715125 - 12 = 0.715125$.' },
          { label: 'Step 2: Compute the differential', text: 'With $f\'(x) = 3x^{2} + 2$ and $f\'(2) = 14$: $dy = 14 \\cdot 0.05 = 0.7$.' },
          { label: 'Step 3: Compare', text: 'The differential underestimates the true change by $0.015125$, about 2.1% of $\\Delta y$.' },
          { label: 'Step 4: Explain the sign of the error', text: 'The curve is concave up on the interval, so it lies above its tangent line: the tangent-based estimate $dy$ is always a slight underestimate when $f\'\' > 0$ — exactly as observed.' },
        ],
        result: '$\\Delta y = 0.715125$ versus $dy = 0.7$: the differential captures 97.9% of the true change from a single multiplication.',
      },
      {
        title: 'Error propagation for an area',
        problem: 'The radius of a circular disk is measured as 10 cm with a maximum possible error of 0.1 cm. Use differentials to estimate the maximum error and the relative error in the computed area, and find the error bounds they imply.',
        steps: [
          { label: 'Step 1: Set up the formula', text: 'Area: $A = \\pi r^{2}$ with $r = 10$ and $|dr| \\le 0.1$ cm.' },
          { label: 'Step 2: Differentiate', text: '$dA = 2\\pi r\\,dr = 2\\pi(10)(0.1) = 2\\pi \\approx 6.28\\,\\text{cm}^2$ of maximum error.' },
          { label: 'Step 3: Compute the relative error', text: '$\\frac{dA}{A} = \\frac{2\\pi}{\\pi(10)^{2}} = \\frac{2\\pi}{100\\pi} = 0.02$: a 2% relative error.' },
          { label: 'Step 4: Interpret via the exponent rule', text: 'Because $A$ is proportional to $r^{2}$, relative errors double in transit: $\\frac{dA}{A} = 2\\frac{dr}{r} = 2 \\cdot \\frac{0.1}{10} = 2\\%$. The actual area lies between $\\pi(9.9)^{2} \\approx 307.9$ and $\\pi(10.1)^{2} \\approx 320.5\\,\\text{cm}^2$, straddling the estimate $100\\pi \\approx 314.2$ by about $\\pm 6.3$.' },
        ],
        result: 'Maximum area error $\\approx 2\\pi \\approx 6.28\\,\\text{cm}^2$, a 2% relative error — the exponent 2 in $A = \\pi r^{2}$ doubles the 1% radius error.',
      },
    ],
    keyTakeaways: [
      'Linearization: $L(x) = f(a) + f\'(a)(x - a)$; near $a$, $f(x) \\approx L(x)$.',
      'Differentials: $dy = f\'(x)dx$ estimates the change in $y$ from a small change in $x$.',
      '$\\Delta y$ is the true change along the curve; $dy$ is the tangent-line change; concavity fixes which is larger.',
      'Power laws amplify relative errors by the exponent: $\\frac{dy}{y} = n\\frac{dx}{x}$, so area errors double and volume errors triple radius errors.',
      'The linearizations $\\sin x \\approx x$, $e^{x} \\approx 1 + x$ and $\\ln(1 + x) \\approx x$ near zero are standard equipment for estimation.',
      'This section is the seed of Taylor polynomials (Chapter 11) and total differentials (Chapter 14).',
    ],
    quiz: [
      {
        q: 'The linearization of $f$ at $a$ is:',
        options: ['$L(x) = f(a) + f\'(x)(a - x)$', '$L(x) = f(a) + f\'(a)(x - a)$', '$L(x) = f\'(a) + f(a)(x-a)$', '$L(x) = f(x) + f\'(a)(x-a)$'],
        answer: 1,
        explanation: 'Value plus slope times displacement: the tangent line at $(a, f(a))$.',
      },
      {
        q: 'If $y = f(x)$ and $x$ changes by a small $dx$, the differential $dy$ equals:',
        options: ['$f\'(x)\\,dx$', `$f(x)\\,dx$`, '$\\Delta y$ exactly', '$f\'(dx)$'],
        answer: 0,
        explanation: 'The differential is the derivative times the change in $x$ — the tangent-line estimate of the change in $y$.',
      },
      {
        q: 'For $A = \\pi r^{2}$ with $r = 10 \\pm 0.1$ cm, the maximum error in the computed area is about:',
        options: [`$0.2\\pi\\,\\text{cm}^2$`, `$2\\pi\\,\\text{cm}^2$`, `$0.1\\pi\\,\\text{cm}^2$`, `$10\\pi\\,\\text{cm}^2$`],
        answer: 1,
        explanation: '$dA = 2\\pi r\\,dr = 2\\pi(10)(0.1) = 2\\pi \\approx 6.28\\,\\text{cm}^2$.',
      },
      {
        q: 'A 1% relative error in measuring a radius produces, in the area $A = \\pi r^{2}$, a relative error of:',
        options: [`$1\\%$`, `$2\\%$`, `$0.5\\%$`, `$\\pi\\%$`],
        answer: 1,
        explanation: 'Relative errors scale by the exponent: $\\frac{dA}{A} = 2\\frac{dr}{r} = 2\\%$.',
      },
      {
        q: 'Using the linearization of $\\sqrt{x}$ at $a = 4$, the estimate of $\\sqrt{3.98}$ is:',
        options: [`$1.95$`, `$1.995$`, `$2.005$`, `$1.98$`],
        answer: 1,
        explanation: `$L(3.98) = 2 + \\frac{1}{4}(-0.02) = 1.995$; the true value is $1.99499\\ldots$`,
      },
    ],
  },

  // ------------------------------------------------------------------ 3.11
  {
    sectionId: 'calc-ch3-s11',
    readingTime: 8,
    intro: 'The hyperbolic functions are built from exponentials and behave like trigonometry wearing exponential clothes: they satisfy identity-like laws, differentiate into each other, and have inverses expressible as logarithms. They solve the hanging-cable problem, appear in special relativity and electrical engineering, and complete the table of elementary antiderivatives.',
    objectives: [
      'Define $\\sinh$, $\\cosh$ and $\\tanh$ in terms of exponentials and compute their values',
      'Verify the fundamental identity $\\cosh^{2}x - \\sinh^{2}x = 1$ and its relatives',
      'Differentiate all six hyperbolic functions',
      'Recognize the catenary as the graph of $a\\cosh(x/a)$',
      'State and differentiate the inverse hyperbolic functions, using their logarithmic forms',
    ],
    concepts: [
      {
        term: 'Definitions of the hyperbolic functions',
        kind: 'definition',
        statement: '$$\\sinh x = \\frac{e^{x} - e^{-x}}{2}, \\qquad \\cosh x = \\frac{e^{x} + e^{-x}}{2}, \\qquad \\tanh x = \\frac{\\sinh x}{\\cosh x},$$ with reciprocals $\\operatorname{sech} x = \\frac{1}{\\cosh x}$, $\\operatorname{csch} x = \\frac{1}{\\sinh x}$ and $\\coth x = \\frac{\\cosh x}{\\sinh x}$.',
        detail: 'Say the names hyperbolic sine and hyperbolic cosine, written sinch and cosh. Key values: $\\sinh 0 = 0$, $\\cosh 0 = 1$, and since $\\cosh x \\ge 1$ while $\\tanh x = \\frac{e^{x}-e^{-x}}{e^{x}+e^{-x}}$ is trapped strictly between $-1$ and $1$ with $\\lim_{x \\to \\pm\\infty}\\tanh x = \\pm 1$. Unlike sine and cosine, $\\sinh$ and $\\cosh$ are unbounded: exponential growth beats periodicity.',
      },
      {
        term: 'Why they are called hyperbolic',
        kind: 'insight',
        statement: 'The point $(\\cosh t, \\sinh t)$ traces the right branch of the hyperbola $x^{2} - y^{2} = 1$ as $t$ runs over the reals, exactly as $(\\cos t, \\sin t)$ traces the unit circle.',
        detail: 'The identity below is the hyperbola equation. The parameter $t$ even retains a geometric meaning: twice the area of the hyperbolic sector swept out, the exact analogue of arc length (angle) on the circle. The trig/hyperbolic dictionary runs deep — $\\sin(it) = i\\sinh t$ and $\\cos(it) = \\cosh t$ in complex analysis.',
      },
      {
        term: 'Hyperbolic identities',
        kind: 'law',
        statement: '$$\\cosh^{2}x - \\sinh^{2}x = 1, \\qquad 1 - \\tanh^{2}x = \\operatorname{sech}^{2}x, \\qquad 1 - \\coth^{2}x = -\\operatorname{csch}^{2}x,$$ and the addition laws, for example $\\sinh(x + y) = \\sinh x\\cosh y + \\cosh x\\sinh y$.',
        detail: 'Each is proved by writing both sides in exponentials and expanding — the two-term binomial miracle replaces the Pythagorean theorem. The sign difference from the trigonometric world is systematic: $\\cosh^{2} - \\sinh^{2} = +1$ versus $\\cos^{2} + \\sin^{2} = 1$.',
      },
      {
        term: 'Derivatives of the hyperbolic functions',
        kind: 'theorem',
        statement: '$$\\frac{d}{dx}\\sinh x = \\cosh x, \\qquad \\frac{d}{dx}\\cosh x = \\sinh x, \\qquad \\frac{d}{dx}\\tanh x = \\operatorname{sech}^{2}x,$$ and dually $\\frac{d}{dx}\\coth x = -\\operatorname{csch}^{2}x$, $\\frac{d}{dx}\\operatorname{sech} x = -\\operatorname{sech}x\\tanh x$, $\\frac{d}{dx}\\operatorname{csch} x = -\\operatorname{csch}x\\coth x$.',
        detail: 'Directly from the definitions: $\\frac{d}{dx}\\sinh x = \\frac{e^{x} + e^{-x}}{2} = \\cosh x$ and $\\frac{d}{dx}\\cosh x = \\frac{e^{x} - e^{-x}}{2} = \\sinh x$. The striking contrast with trigonometry: **cos hyperbolic differentiates without a minus sign**. For $\\tanh$, the Quotient Rule gives $\\frac{\\cosh^{2} - \\sinh^{2}}{\\cosh^{2}} = \\operatorname{sech}^{2}x$ by the fundamental identity — structurally identical to the tangent computation, with the identity supplying the collapse.',
      },
      {
        term: 'The catenary',
        kind: 'insight',
        statement: 'A uniform flexible cable hanging under its own weight takes the shape $$y = a\\cosh\\frac{x}{a} + c$$ — a **catenary**, not a parabola. Its derivative is $\\sinh(x/a)$ and its slope at the lowest point is zero.',
        detail: 'The word comes from Latin catena, chain. Galileo guessed the parabola; the correct curve is the hyperbolic cosine, and the distinction matters for suspension bridges and arches (an inverted catenary is the ideal compression-only arch shape). The Gateway Arch in St. Louis is a flattened catenary, and power lines, spider silk and laundry lines all trace $\\cosh$.',
      },
      {
        term: 'Inverse hyperbolic functions',
        kind: 'theorem',
        statement: `$\\sinh^{-1}x = \\ln\\left(x + \\sqrt{x^{2}+1}\\right)$ for all $x$; $\\cosh^{-1}x = \\ln\\left(x + \\sqrt{x^{2}-1}\\right)$ for $x \\ge 1$; $\\tanh^{-1}x = \\frac{1}{2}\\ln\\frac{1+x}{1-x}$ for $|x| < 1$. Their derivatives: $$\\frac{d}{dx}\\sinh^{-1}x = \\frac{1}{\\sqrt{1+x^{2}}}, \\qquad \\frac{d}{dx}\\cosh^{-1}x = \\frac{1}{\\sqrt{x^{2}-1}}, \\qquad \\frac{d}{dx}\\tanh^{-1}x = \\frac{1}{1-x^{2}}.$$`,
        detail: 'The logarithmic forms come from solving $y = \\sinh x = \\frac{e^{x} - e^{-x}}{2}$ as a quadratic in $e^{x}$. The derivatives follow either by differentiating the log form or, more elegantly, by implicit differentiation: from $\\sinh y = x$ we get $\\cosh y \\cdot y\' = 1$, so $y\' = \\frac{1}{\\cosh y} = \\frac{1}{\\sqrt{1 + \\sinh^{2}y}} = \\frac{1}{\\sqrt{1+x^{2}}}$, using the identity and the fact that $\\cosh y > 0$. These formulas are the antiderivatives of the algebraic functions $\\frac{1}{\\sqrt{1+x^{2}}}$ and $\\frac{1}{1-x^{2}}$ — needed for the arc length of a parabola and for partial fractions, respectively.',
      },
    ],
    examples: [
      {
        title: 'Proving the fundamental identity',
        problem: 'Show that $\\cosh^{2}x - \\sinh^{2}x = 1$ for every $x$.',
        steps: [
          { label: 'Step 1: Write in exponentials', text: '$\\cosh^{2}x = \\left(\\frac{e^x + e^{-x}}{2}\\right)^{2} = \\frac{e^{2x} + 2 + e^{-2x}}{4}$, using $(a+b)^{2} = a^{2} + 2ab + b^{2}$ with $ab = 1$.' },
          { label: 'Step 2: Square the sinh', text: '$\\sinh^{2}x = \\left(\\frac{e^x - e^{-x}}{2}\\right)^{2} = \\frac{e^{2x} - 2 + e^{-2x}}{4}$, the cross term now negative.' },
          { label: 'Step 3: Subtract', text: '$\\cosh^{2}x - \\sinh^{2}x = \\frac{(e^{2x} + 2 + e^{-2x}) - (e^{2x} - 2 + e^{-2x})}{4} = \\frac{4}{4} = 1$.' },
          { label: 'Step 4: Interpret', text: 'The exponential terms cancel in pairs; only the cross-term survives — the same algebra that makes $(\\cosh t, \\sinh t)$ parametrize the hyperbola $x^{2} - y^{2} = 1$.' },
        ],
        result: 'One line of algebra: $\\cosh^{2}x - \\sinh^{2}x = 1$. Every other hyperbolic identity yields to the same write-in-exponentials attack.',
      },
      {
        title: 'Differentiating a hyperbolic product',
        problem: 'Differentiate $y = x\\sinh x - \\cosh x$.',
        steps: [
          { label: 'Step 1: Split into terms', text: 'The expression is a difference; differentiate $x\\sinh x$ with the Product Rule and $\\cosh x$ on its own.' },
          { label: 'Step 2: Product Rule piece', text: '$\\frac{d}{dx}(x\\sinh x) = 1 \\cdot \\sinh x + x \\cdot \\cosh x = \\sinh x + x\\cosh x$, using $\\frac{d}{dx}\\sinh x = \\cosh x$.' },
          { label: 'Step 3: Subtract the cosh derivative', text: '$\\frac{d}{dx}\\cosh x = \\sinh x$ — no minus sign in the hyperbolic world — so $y\' = \\sinh x + x\\cosh x - \\sinh x$.' },
          { label: 'Step 4: Simplify', text: 'The lone $\\sinh x$ terms cancel, leaving $y\' = x\\cosh x$.' },
        ],
        result: '$$y\' = x\\cosh x.$$ The cancellation is the signature of an antiderivative structure: $x\\sinh x - \\cosh x$ is an antiderivative of $x\\cosh x$ — exactly the integration-by-parts pattern of Chapter 7.',
      },
      {
        title: 'Derivative of the inverse hyperbolic sine',
        problem: 'Show that $\\dfrac{d}{dx}\\sinh^{-1}x = \\dfrac{1}{\\sqrt{1+x^{2}}}$ by implicit differentiation.',
        steps: [
          { label: 'Step 1: Set up the inverse relation', text: 'Let $y = \\sinh^{-1}x$, so $\\sinh y = x$ with $y$ real. Differentiate both sides with respect to $x$.' },
          { label: 'Step 2: Differentiate implicitly', text: 'The chain through $y$ gives $\\cosh y \\cdot \\frac{dy}{dx} = 1$, hence $\\frac{dy}{dx} = \\frac{1}{\\cosh y}$.' },
          { label: 'Step 3: Convert to x using the identity', text: 'From $\\cosh^{2}y - \\sinh^{2}y = 1$: $\\cosh^{2}y = 1 + \\sinh^{2}y = 1 + x^{2}$, so $\\cosh y = \\sqrt{1+x^{2}}$ — positive root because $\\cosh y \\ge 1$ for every real $y$.' },
          { label: 'Step 4: Conclude and cross-check', text: '$\\frac{dy}{dx} = \\frac{1}{\\sqrt{1+x^{2}}}$. Cross-check via the log form $\\ln(x + \\sqrt{1+x^{2}})$: differentiating gives $\\frac{1 + x/\\sqrt{1+x^{2}}}{x + \\sqrt{1+x^{2}}} = \\frac{1}{\\sqrt{1+x^{2}}}$ after simplification — same answer, longer road.' },
        ],
        result: '$\\frac{d}{dx}\\sinh^{-1}x = \\frac{1}{\\sqrt{1+x^{2}}}$ — mirror-image of the arcsine derivative with a plus sign replacing the minus.',
      },
    ],
    keyTakeaways: [
      '$\\sinh x = \\frac{e^x - e^{-x}}{2}$, $\\cosh x = \\frac{e^x + e^{-x}}{2}$, $\\tanh x = \\frac{\\sinh x}{\\cosh x}$ — exponentials in trigonometric costume.',
      'Fundamental identity: $\\cosh^{2}x - \\sinh^{2}x = 1$; the parametrization $(\\cosh t, \\sinh t)$ draws a hyperbola.',
      'Derivatives: $\\frac{d}{dx}\\sinh = \\cosh$ and $\\frac{d}{dx}\\cosh = \\sinh$ — no minus sign, unlike cosine.',
      '$\\frac{d}{dx}\\tanh x = \\operatorname{sech}^{2}x$, and $\\tanh$ is bounded with horizontal asymptotes at $\\pm 1$.',
      'A hanging chain is a catenary $y = a\\cosh(x/a)$, not a parabola.',
      'Inverse hyperbolics are logarithms; their derivatives, such as $\\frac{d}{dx}\\sinh^{-1}x = \\frac{1}{\\sqrt{1+x^{2}}}$, are the missing antiderivative table entries of Chapter 7.',
    ],
    quiz: [
      {
        q: 'By definition, $\\sinh x$ equals:',
        options: [`$\\dfrac{e^{x} + e^{-x}}{2}$`, `$\\dfrac{e^{x} - e^{-x}}{2}$`, `$e^{x} - e^{-x}$`, `$\\dfrac{e^{x} - e^{-x}}{e^{x} + e^{-x}}$`],
        answer: 1,
        explanation: 'Hyperbolic sine is the difference of the two exponentials over 2; the sum over 2 is $\\cosh$.',
      },
      {
        q: 'What is $\\dfrac{d}{dx}\\cosh x$?',
        options: [`$\\sinh x$`, `$-\\sinh x$`, `$\\cosh x$`, `$\\operatorname{sech}^{2}x$`],
        answer: 0,
        explanation: 'Unlike cosine, hyperbolic cosine differentiates to plus hyperbolic sine.',
      },
      {
        q: 'The fundamental hyperbolic identity is:',
        options: [`$\\cosh^{2}x + \\sinh^{2}x = 1$`, `$\\cosh^{2}x - \\sinh^{2}x = 1$`, `$\\cosh x - \\sinh x = 1$`, `$\\tanh^{2}x + \\operatorname{sech}^{2}x = 1$`],
        answer: 1,
        explanation: 'The difference of squares is 1 — the trigonometric Pythagorean identity with a sign flip; the last option is off by a sign too ($1 - \\tanh^{2} = \\operatorname{sech}^{2}$).',
      },
      {
        q: 'What is $\\dfrac{d}{dx}\\sinh^{-1}x$?',
        options: [`$\\dfrac{1}{\\sqrt{1-x^{2}}}$`, `$\\dfrac{1}{\\sqrt{1+x^{2}}}$`, `$\\dfrac{1}{1+x^{2}}$`, `$\\dfrac{1}{1-x^{2}}$`],
        answer: 1,
        explanation: 'From $\\sinh y = x$: $\\cosh y \\cdot y\' = 1$ and $\\cosh y = \\sqrt{1 + x^{2}}$.',
      },
      {
        q: 'The curve formed by a uniform cable hanging under its own weight is:',
        options: ['A parabola', 'A catenary $y = a\\cosh(x/a)$', 'A circular arc', 'A cycloid'],
        answer: 1,
        explanation: 'The hyperbolic cosine, not the parabola — the classical error Galileo himself made.',
      },
      // PYQ-pattern — derivative of tanh (rephrased, values changed)
      {
        q: 'What is $\\frac{d}{dx}\\tanh x$?',
        options: [`$\\coth^{2} x$`, `$\\operatorname{sech}^{2} x$`, `$-\\operatorname{sech}^{2} x$`, `$\\sinh x$`],
        answer: 1,
        explanation: 'Step 1: Restate $\\tanh x = \\frac{\\sinh x}{\\cosh x}$ and aim for its derivative. Step 2: Recall the key quotient rule $\\left(\\frac{u}{v}\\right)^{\\prime} = \\frac{u^{\\prime}v - uv^{\\prime}}{v^{2}}$ with $u = \\sinh x$ and $v = \\cosh x$. Step 3: Substitute $u^{\\prime} = \\cosh x$ and $v^{\\prime} = \\sinh x$ to get $\\frac{\\cosh^{2} x - \\sinh^{2} x}{\\cosh^{2} x}$. Step 4: Apply the fundamental identity $\\cosh^{2} x - \\sinh^{2} x = 1$ to obtain $\\frac{1}{\\cosh^{2} x} = \\operatorname{sech}^{2} x$. Step 5: The distractors fail since $-\\operatorname{sech}^{2} x$ flips the sign (the derivative of $\\coth$ is $-\\operatorname{csch}^{2} x$), $\\coth^{2} x$ misses a sign and a constant, and $\\sinh x$ confuses the function with its derivative. Step 6: Hence $\\frac{d}{dx}\\tanh x = \\operatorname{sech}^{2} x$.'
      },
      // PYQ-pattern — chain rule with hyperbolic sine (rephrased, values changed)
      {
        q: 'If $y = \\sinh(3x)$, then $\\frac{dy}{dx}$ equals:',
        options: [`$\\cosh(3x)$`, `$3\\sinh(3x)$`, `$3\\cosh(3x)$`, `$\\sinh(3x)$`],
        answer: 2,
        explanation: 'Step 1: Restate $y$ as the composition $f(g(x))$ with outer $f(u) = \\sinh u$ and inner $g(x) = 3x$. Step 2: Recall the key chain rule $\\frac{dy}{dx} = f^{\\prime}(g(x)) \\cdot g^{\\prime}(x)$ together with $\\frac{d}{du}\\sinh u = \\cosh u$. Step 3: Differentiate the outer part to $\\cosh(3x)$ and the inner part to $3$. Step 4: Multiply to get $3\\cosh(3x)$. Step 5: The distractors fail since omitting $3$ forgets the inner derivative, while the $\\sinh$ options differentiate to the wrong hyperbolic partner. Step 6: Therefore $\\frac{dy}{dx} = 3\\cosh(3x)$.'
      },
    ],
  },
]

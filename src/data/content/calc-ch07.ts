import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 7: Techniques of Integration (Sections 7.1 – 7.8)
// Master study content. Worked examples follow the book’s classics
// (LIATE and the tabular method, sin^3 x cos^2 x, sqrt(9 - x^2), partial
// fractions in all three flavors, Simpson on x^3, p-integrals).
// All math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh7Content: SectionContent[] = [
  // ------------------------------------------------------------------ 7.1
  {
    sectionId: 'calc-ch7-s1',
    readingTime: 9,
    intro: 'The Product Rule differentiates products; integration by parts runs the film backward. One formula, $\\int u\\,dv = uv - \\int v\\,du$, trades a hard integral for a hopefully easier one, and with the LIATE rule for choosing which factor to differentiate it becomes the most reliable technique for products of unlike function types — polynomials against exponentials, logarithms standing alone, and the cyclical exponential-trigonometric hybrids.',
    objectives: [
      'Derive the integration-by-parts formula from the Product Rule',
      'Choose $u$ and $dv$ wisely, guided by LIATE',
      'Evaluate $\\int x e^{x}\\,dx$ and $\\int \\ln x\\,dx$ from scratch',
      'Apply the formula repeatedly, including the tabular shortcut',
      'Handle cyclical integrals such as $\\int e^{x}\\sin x\\,dx$ by solving for the integral',
    ],
    concepts: [
      {
        term: 'The integration-by-parts formula',
        kind: 'theorem',
        statement: 'If $u = f(x)$ and $v = g(x)$ are differentiable, then $$\\int u\\,dv = uv - \\int v\\,du.$$',
        detail: 'Start from the Product Rule written in differential form: $d(uv) = u\\,dv + v\\,du$. Integrating both sides gives $uv = \\int u\\,dv + \\int v\\,du$, and rearranging isolates the formula. It is the Product Rule (Section 3.2) played in reverse — a product rule for integrals that trades one integral for another.',
      },
      {
        term: 'Choosing $u$ and $dv$',
        kind: 'method',
        statement: 'Pick $dv$ to be a factor you can integrate immediately, and $u$ to be a factor that **simplifies when differentiated**. The **LIATE** guideline orders the preference for $u$: **L**ogarithmic, then **I**nverse trigonometric, then **A**lgebraic, then **T**rigonometric, then **E**xponential.',
        detail: 'The logic of the order: logarithms and inverse trigonometric functions have no direct antiderivative table entry but differentiate into algebra, so they must be chosen as $u$; polynomials lose degree each differentiation, so they also make good $u$ against exponentials and sines, which are happy to serve as $dv$ since they integrate to their own kind. LIATE is a heuristic, not a law — but it resolves nearly every textbook integral.',
      },
      {
        term: 'The definite-integral version',
        kind: 'theorem',
        statement: '$$\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du.$$ The boundary term is evaluated first, and the remaining integral uses the **same limits**.',
        detail: 'Nothing deep changes — just the Fundamental Theorem applied to both pieces. A common slip is reusing an antiderivative’s dummy limits incorrectly; write the $uv$ evaluation and the new integral with the same $a$ and $b$ from the start.',
      },
      {
        term: 'Repeated integration by parts',
        kind: 'method',
        statement: 'If the new integral $\\int v\\,du$ is again a product of the same two families, apply the formula again — with the **same choice pattern** (keep differentiating the same factor type). Each round peels one power off the algebraic factor.',
        detail: 'For $\\int x^{2}e^{x}dx$, two rounds reduce the polynomial from degree 2 to 0 and the process terminates. The discipline that makes repeated parts work is consistency: if you differentiated the polynomial in round one, differentiate the polynomial again in round two — switching roles sends you in a circle back to where you started.',
      },
      {
        term: 'The tabular method',
        kind: 'method',
        statement: 'For $\\int (\\text{polynomial}) \\times (e^{ax})\\,dx$ or $\\int (\\text{polynomial}) \\times (\\sin\\,/\\cos)\\,dx$: list derivatives of the polynomial in one column until zero, list antiderivatives of the other factor in a parallel column, attach alternating signs $+, -, +, -, \\ldots$ going down, and add the diagonal products.',
        detail: 'The table is just bookkeeping for repeated parts. For $\\int x^{2}e^{x}dx$: the derivative column reads $x^{2}, 2x, 2, 0$ while the integral column reads $e^{x}, e^{x}, e^{x}$; the signed diagonals give $x^{2}e^{x} - 2xe^{x} + 2e^{x} + C$. The method terminates precisely because polynomials die under repeated differentiation — exponentials and sines never do.',
      },
      {
        term: 'Cyclical integrals',
        kind: 'insight',
        statement: 'For $\\int e^{x}\\sin x\\,dx$, two rounds of parts reproduce the original integral with a coefficient. Name it $I$, write the equation $I = e^{x}\\sin x - e^{x}\\cos x - I$, and solve algebraically: $$I = \\frac{e^{x}\\left(\\sin x - \\cos x\\right)}{2} + C.$$',
        detail: 'The trick feels like pulling yourself up by your bootstraps, but it is legitimate linear algebra: parts produces an identity that the unknown integral satisfies, and solving for it is fair game — provided you actually return to it (the $+ C$ on a solved-for integral comes from moving everything else across). This is the standard route for any exponential-times-sine-or-cosine product.',
      },
    ],
    examples: [
      {
        title: 'The two essential warm-ups',
        problem: 'Evaluate (a) $\\displaystyle\\int x e^{x}\\,dx$ and (b) $\\displaystyle\\int \\ln x\\,dx$.',
        steps: [
          { label: 'Step 1: Choose roles in (a) by LIATE', text: 'The factors are algebraic ($x$) and exponential ($e^{x}$). Algebraic outranks exponential, so $u = x$ and $dv = e^{x}dx$.' },
          { label: 'Step 2: Compute $du$ and $v$', text: '$du = dx$ and $v = e^{x}$ — the exponential integrates to itself.' },
          { label: 'Step 3: Assemble', text: '$$\\int x e^{x}dx = x e^{x} - \\int e^{x}dx = x e^{x} - e^{x} + C.$$ The leftover integral was easier — that is the whole point of the trade.' },
          { label: 'Step 4: Attack (b) with a degenerate choice', text: 'The integrand $\\ln x$ seems to be a single factor, but take $u = \\ln x$ and $dv = dx$ (so $v = x$), exactly as LIATE demands for a lone logarithm.' },
          { label: 'Step 5: Assemble and simplify', text: '$du = \\dfrac{1}{x}dx$, so $$\\int \\ln x\\,dx = x\\ln x - \\int x \\cdot \\frac{1}{x}\\,dx = x\\ln x - x + C,$$ a famous antiderivative that has no other derivation.' },
        ],
        result: '(a) $\\int x e^{x}dx = e^{x}(x - 1) + C$; (b) $\\int \\ln x\\,dx = x\\ln x - x + C$. Both are one application of the formula with LIATE-driven choices.',
      },
      {
        title: 'Repeated parts and the tabular check',
        problem: 'Evaluate $\\displaystyle\\int x^{2} e^{x}\\,dx$ by parts twice, then verify with the tabular method.',
        steps: [
          { label: 'Step 1: Round one', text: 'Choose $u = x^{2}$, $dv = e^{x}dx$, so $du = 2x\\,dx$ and $v = e^{x}$: $$\\int x^{2}e^{x}dx = x^{2}e^{x} - 2\\int x e^{x}dx.$$' },
          { label: 'Step 2: Round two on the leftover', text: 'The new integral is the warm-up (a): $\\int x e^{x}dx = x e^{x} - e^{x}$. Substitute it back in.' },
          { label: 'Step 3: Combine', text: `$$\\int x^{2}e^{x}dx = x^{2}e^{x} - 2\\left(xe^{x} - e^{x}\\right) + C = e^{x}\\left(x^{2} - 2x + 2\\right) + C.$$` },
          { label: 'Step 4: Build the tabular table', text: 'Left column, differentiate $x^{2}$ down to zero: $x^{2}$, $2x$, $2$, $0$. Right column, integrate $e^{x}$ down: $e^{x}$, $e^{x}$, $e^{x}$.' },
          { label: 'Step 5: Read off the diagonal with alternating signs', text: 'Pair each row before the zero with the next row of the right column, signs $+, -, +$: $x^{2}e^{x} - 2xe^{x} + 2e^{x}$ — identical to Step 3, as it must be.' },
          { label: 'Step 6: Verify by differentiating', text: 'Differentiating $e^{x}(x^{2} - 2x + 2)$ gives $e^{x}(x^{2} - 2x + 2) + e^{x}(2x - 2) = x^{2}e^{x}$ — the integrand is back.' },
        ],
        result: '$$\\int x^{2}e^{x}dx = e^{x}\\left(x^{2} - 2x + 2\\right) + C.$$ Two rounds of parts, or one tabular table — same arithmetic, better bookkeeping.',
      },
      {
        title: 'A cyclical integral',
        problem: 'Evaluate $\\displaystyle I = \\int e^{x} \\sin x\\,dx$.',
        steps: [
          { label: 'Step 1: Round one', text: 'Take $u = \\sin x$ (trigonometric outranks exponential under LIATE only when an algebraic factor is absent — either assignment cycles here) and $dv = e^{x}dx$, so $du = \\cos x\\,dx$ and $v = e^{x}$: $$I = e^{x}\\sin x - \\int e^{x}\\cos x\\,dx.$$' },
          { label: 'Step 2: Round two, same pattern', text: 'Again choose the trigonometric factor: $u = \\cos x$, $dv = e^{x}dx$, so $du = -\\sin x\\,dx$ and $v = e^{x}$: $$\\int e^{x}\\cos x\\,dx = e^{x}\\cos x + \\int e^{x}\\sin x\\,dx = e^{x}\\cos x + I.$$' },
          { label: 'Step 3: Substitute into round one', text: `$$I = e^{x}\\sin x - \\left(e^{x}\\cos x + I\\right) = e^{x}\\sin x - e^{x}\\cos x - I.$$` },
          { label: 'Step 4: Solve for $I$', text: 'Add $I$ to both sides and halve: $2I = e^{x}(\\sin x - \\cos x)$, so $$I = \\frac{e^{x}\\left(\\sin x - \\cos x\\right)}{2} + C.$$ The constant appears when the equation is solved, since an indefinite integral is only determined up to $C$.' },
          { label: 'Step 5: Verify by differentiating', text: 'Differentiating the answer: $\\frac{1}{2}\\left[e^{x}(\\sin x - \\cos x) + e^{x}(\\cos x + \\sin x)\\right] = e^{x}\\sin x$ — confirmed.' },
        ],
        result: '$$\\int e^{x}\\sin x\\,dx = \\frac{e^{x}(\\sin x - \\cos x)}{2} + C.$$ When parts regenerates the original integral, stop and solve for it instead of differentiating forever.',
      },
    ],
    keyTakeaways: [
      'Integration by parts is the Product Rule integrated: $\\int u\\,dv = uv - \\int v\\,du$.',
      'Choose $dv$ easy to integrate and $u$ easy to differentiate; LIATE orders the preference for $u$.',
      'Definite integrals: evaluate $\\left[uv\\right]_{a}^{b}$ first, then integrate $v\\,du$ with the same limits.',
      'Repeat the formula with a consistent choice pattern — each round should reduce the polynomial factor.',
      'The tabular method packages repeated parts for polynomial-times-exponential or polynomial-times-trig integrals.',
      'Cyclical products like $e^{x}\\sin x$ reproduce themselves after two rounds — name the integral and solve for it.',
    ],
    quiz: [
      {
        q: 'The integration-by-parts formula is:',
        options: [`$\\int u\\,dv = uv - \\int v\\,du$`, `$\\int u\\,dv = uv + \\int v\\,du$`, `$\\int u\\,dv = \\dfrac{uv}{2} + C$`, `$\\int u\\,dv = u\\int dv + v\\int du$`],
        answer: 0,
        explanation: 'Integrate the Product Rule $d(uv) = u\\,dv + v\\,du$ and rearrange.',
      },
      {
        q: 'By LIATE, in $\\int x \\sin x\\,dx$ you should choose $u = $',
        options: [`$\\sin x$`, `$x$`, `$x \\sin x$`, 'There is no choice to make'],
        answer: 1,
        explanation: 'Algebraic factors outrank trigonometric ones, so differentiate $x$ and integrate $\\sin x$.',
      },
      {
        q: '$\\displaystyle\\int \\ln x\\,dx$ equals:',
        options: [`$\\dfrac{(\\ln x)^{2}}{2} + C$`, `$x\\ln x + x + C$`, `$x\\ln x - x + C$`, `$\\dfrac{1}{x} + C$`],
        answer: 2,
        explanation: 'Parts with $u = \\ln x$, $dv = dx$: $x\\ln x - \\int x \\cdot \\frac{1}{x}dx = x\\ln x - x + C$.',
      },
      {
        q: 'The tabular method terminates for $\\int x^{3}e^{x}dx$ because:',
        options: ['$e^{x}$ integrates to zero', 'The polynomial differentiates to zero in finitely many steps', 'Sines and cosines cycle', 'The formula is symmetric in $u$ and $v$'],
        answer: 1,
        explanation: 'Four differentiations kill $x^{3}$, and the exponential column integrates happily the whole way down.',
      },
      {
        q: 'After two rounds of parts on $I = \\int e^{x}\\sin x\\,dx$, you obtain $I = e^{x}\\sin x - e^{x}\\cos x - I$. The next move is:',
        options: ['Differentiate both sides', 'Apply parts a third time', 'Solve the equation for $I$', 'Add a constant of integration to both sides'],
        answer: 2,
        explanation: 'The original integral reappeared — treat the relation as an equation and isolate $I = \\frac{e^{x}(\\sin x - \\cos x)}{2} + C$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.2
  {
    sectionId: 'calc-ch7-s2',
    readingTime: 9,
    intro: 'Products and powers of sines, cosines, tangents and secants are tamed by two moves: save one factor to serve as the differential and convert everything else with a Pythagorean identity. Which factor to save is decided by the parity of the exponents — a small decision tree that covers every case, with half-angle power reduction as the fallback when both powers are even.',
    objectives: [
      'Evaluate $\\int \\sin^{m}x\\cos^{n}x\\,dx$ for odd $m$, odd $n$, and even $m$ and $n$',
      'Evaluate $\\int \\tan^{m}x\\sec^{n}x\\,dx$ in the standard cases',
      'Use the Pythagorean and half-angle identities as the conversion toolkit',
      'Know the special antiderivatives of $\\tan x$ and $\\sec x$',
      'Choose the correct strategy by inspecting the parity of the powers',
    ],
    concepts: [
      {
        term: 'The identity toolkit',
        kind: 'law',
        statement: 'Pythagorean identities: $\\sin^{2}x + \\cos^{2}x = 1$, $\\tan^{2}x + 1 = \\sec^{2}x$. Half-angle (power-reduction) identities: $$\\sin^{2}x = \\frac{1 - \\cos 2x}{2}, \\qquad \\cos^{2}x = \\frac{1 + \\cos 2x}{2}, \\qquad \\sin x\\cos x = \\frac{\\sin 2x}{2}.$$',
        detail: 'The Pythagorean identities are the exchange rates between even powers of one trig function and the other; the half-angle identities are the escape hatch when no odd power is available to peel. Everything in this section is one of these two identities plus a substitution.',
      },
      {
        term: 'Odd power of sine or cosine',
        kind: 'method',
        statement: 'For $\\int \\sin^{m}x\\cos^{n}x\\,dx$: if $m$ is odd, peel off one $\\sin x\\,dx$, write the remaining $\\sin^{m-1}x = (1 - \\cos^{2}x)^{(m-1)/2}$, and substitute $u = \\cos x$. If $n$ is odd, peel off one $\\cos x\\,dx$ and substitute $u = \\sin x$ symmetrically.',
        detail: 'An odd power always leaves one spare factor to pair with $dx$ as the differential of the other function: $d(\\cos x) = -\\sin x\\,dx$ or $d(\\sin x) = \\cos x\\,dx$. The even remainder converts wholesale into a polynomial of the substitution variable. If both powers are odd, either substitution works — pick one and go.',
      },
      {
        term: 'Both powers even',
        kind: 'method',
        statement: 'If both $m$ and $n$ are even, no factor can serve as a differential. Apply the half-angle identities — often repeatedly — until odd powers of $\\cos 2x$ or $\\sin 2x$ appear.',
        detail: 'Each application of a half-angle identity halves the exponents while doubling the angle: $\\sin^{2}x\\cos^{2}x = \\frac{1}{4}\\sin^{2}2x = \\frac{1 - \\cos 4x}{8}$. Answers in the even case are sums of sines of multiple angles rather than polynomials in one trig function — different flavor, same rigor.',
      },
      {
        term: 'Tangent and secant strategies',
        kind: 'method',
        statement: 'For $\\int \\tan^{m}x\\sec^{n}x\\,dx$: if $n$ is even and positive, save a factor $\\sec^{2}x\\,dx$ and substitute $u = \\tan x$, converting the rest via $\\sec^{2}x = 1 + \\tan^{2}x$. If $m$ is odd, save $\\sec x\\tan x\\,dx$ and substitute $u = \\sec x$, converting via $\\tan^{2}x = \\sec^{2}x - 1$. The remaining cases are harder — reduction formulas or clever rewriting take over.',
        detail: 'The logic mirrors the sine-cosine cases exactly: the saved factor is the derivative of the substitution target, and the Pythagorean identity $1 + \\tan^{2} = \\sec^{2}$ converts the rest. When $m$ is even and $n$ is odd, no clean differential exists — that is where the section’s harder exercises (and the reduction formulas of 7.6) live.',
      },
      {
        term: 'The two special antiderivatives',
        kind: 'law',
        statement: `$$\\int \\tan x\\,dx = \\ln|\\sec x| + C, \\qquad \\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C.$$`,
        detail: 'The tangent version is a substitution: $\\int \\tan x\\,dx = \\int \\frac{\\sin x}{\\cos x}dx = -\\ln|\\cos x| + C$. The secant version is a famous trick — multiply and divide by $\\sec x + \\tan x$, so the numerator becomes the derivative of the denominator. Both results are assumed known in Chapter 7 and beyond, including the trig substitutions of the next section.',
      },
      {
        term: 'Why peeling works',
        kind: 'insight',
        statement: 'Every strategy in this section is a single $u$-substitution in disguise: the peeled factor is the differential $du$ of the substitution target, and the Pythagorean identity turns the remaining even powers into a polynomial in $u$.',
        detail: 'Once you see the pattern — odd power means a spare factor means a differential — the section stops being a list of cases and becomes one idea. Even the half-angle fallback is the same idea pointed at a different substitution: $u = 2x$ at the end.',
      },
    ],
    examples: [
      {
        title: 'An odd power of sine',
        problem: 'Evaluate $\\displaystyle\\int \\sin^{3}x \\cos^{2}x\\,dx$.',
        steps: [
          { label: 'Step 1: Inspect the powers', text: 'The exponent 3 on $\\sin x$ is odd, so peel off a single $\\sin x$ to pair with $dx$, and plan the substitution $u = \\cos x$ with $du = -\\sin x\\,dx$.' },
          { label: 'Step 2: Convert the remaining even power', text: 'The two leftover sine factors become $\\sin^{2}x = 1 - \\cos^{2}x = 1 - u^{2}$, and the cosine power is already $\\cos^{2}x = u^{2}$.' },
          { label: 'Step 3: Rewrite the integral in $u$', text: `$$\\int \\sin^{3}x\\cos^{2}x\\,dx = \\int (1 - u^{2})u^{2}(-du) = \\int (u^{4} - u^{2})\\,du.$$` },
          { label: 'Step 4: Integrate the polynomial', text: '$\\displaystyle\\int (u^{4} - u^{2})\\,du = \\frac{u^{5}}{5} - \\frac{u^{3}}{3} + C$.' },
          { label: 'Step 5: Back-substitute', text: 'With $u = \\cos x$: $$\\int \\sin^{3}x\\cos^{2}x\\,dx = \\frac{\\cos^{5}x}{5} - \\frac{\\cos^{3}x}{3} + C.$$' },
        ],
        result: 'A trigonometric integral of three factors collapsed to a two-term polynomial. Differentiating the answer: $-\\sin x\\cos^{4}x + \\sin x\\cos^{2}x = \\sin x\\cos^{2}x(1 - \\cos^{2}x) = \\sin^{3}x\\cos^{2}x$ — verified.',
      },
      {
        title: 'Both powers even: power reduction',
        problem: 'Evaluate $\\displaystyle\\int \\sin^{2}x \\cos^{2}x\\,dx$.',
        steps: [
          { label: 'Step 1: No odd power to peel', text: 'Both exponents are 2, so no spare $\\sin x$ or $\\cos x$ is available as a differential — power reduction is required.' },
          { label: 'Step 2: Combine with the double-angle product', text: 'Use $\\sin x\\cos x = \\tfrac{1}{2}\\sin 2x$: $$\\sin^{2}x\\cos^{2}x = \\frac{\\sin^{2}2x}{4}.$$' },
          { label: 'Step 3: Reduce the remaining square', text: 'Apply the half-angle identity to $\\sin^{2}2x$: $$\\frac{\\sin^{2}2x}{4} = \\frac{1}{4} \\cdot \\frac{1 - \\cos 4x}{2} = \\frac{1 - \\cos 4x}{8}.$$' },
          { label: 'Step 4: Integrate', text: `$$\\int \\frac{1 - \\cos 4x}{8}\\,dx = \\frac{x}{8} - \\frac{\\sin 4x}{32} + C.$$` },
        ],
        result: '$$\\int \\sin^{2}x\\cos^{2}x\\,dx = \\frac{x}{8} - \\frac{\\sin 4x}{32} + C.$$ Notice the answer contains a linear term — even powers of trig functions average out to a nonzero mean value.',
      },
      {
        title: 'Tangent with an even secant power',
        problem: 'Evaluate $\\displaystyle\\int \\tan^{3}x \\sec^{4}x\\,dx$.',
        steps: [
          { label: 'Step 1: Inspect the secant power', text: 'The exponent on $\\sec x$ is 4, even and positive — save one $\\sec^{2}x\\,dx$ for the differential and substitute $u = \\tan x$, $du = \\sec^{2}x\\,dx$.' },
          { label: 'Step 2: Convert the remaining secant powers', text: 'Split $\\sec^{4}x = \\sec^{2}x \\cdot \\sec^{2}x$ and convert the extra factor: $\\sec^{2}x = 1 + \\tan^{2}x = 1 + u^{2}$.' },
          { label: 'Step 3: Rewrite in $u$', text: `$$\\int \\tan^{3}x\\sec^{4}x\\,dx = \\int u^{3}(1 + u^{2})\\,du.$$` },
          { label: 'Step 4: Integrate and back-substitute', text: '$\\displaystyle\\int (u^{3} + u^{5})\\,du = \\frac{u^{4}}{4} + \\frac{u^{6}}{6} + C = \\frac{\\tan^{4}x}{4} + \\frac{\\tan^{6}x}{6} + C$.' },
        ],
        result: '$$\\int \\tan^{3}x\\sec^{4}x\\,dx = \\frac{\\tan^{4}x}{4} + \\frac{\\tan^{6}x}{6} + C.$$ Had the tangent power been odd instead, the same dance with $u = \\sec x$ and the identity $\\tan^{2} = \\sec^{2} - 1$ would have been the route.',
      },
    ],
    keyTakeaways: [
      'Odd power of sine or cosine: peel one factor for the differential, convert the rest with the Pythagorean identity, substitute.',
      'Both powers even: use half-angle identities to reduce powers — answers involve multiple angles like $\\sin 2x$ and $\\cos 4x$.',
      'For tangents and secants: even $n$ on $\\sec$ means save $\\sec^{2}x$ and substitute $u = \\tan x$; odd $m$ on $\\tan$ means save $\\sec x \\tan x$ and substitute $u = \\sec x$.',
      'Memorize the special results: $\\int \\tan x\\,dx = \\ln|\\sec x| + C$ and $\\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C$.',
      'Every strategy here is one $u$-substitution plus one identity — recognize the pattern rather than memorizing cases.',
      'These integrals are the machinery inside trigonometric substitution, the next section.',
    ],
    quiz: [
      {
        q: 'For $\\int \\sin^{3}x\\cos^{2}x\\,dx$, the correct first move is:',
        options: ['Half-angle both factors immediately', 'Peel off one $\\sin x$ and substitute $u = \\cos x$', 'Peel off one $\\cos x$ and substitute $u = \\sin x$', 'Integrate by parts'],
        answer: 1,
        explanation: 'The odd power on $\\sin x$ supplies the spare factor: $\\sin^{3} = \\sin^{2} \\cdot \\sin$ with $\\sin^{2} = 1 - \\cos^{2}$.',
      },
      {
        q: '$\\displaystyle\\int \\tan x\\,dx$ equals:',
        options: [`$\\ln|\\cos x| + C$`, `$\\ln|\\sec x| + C$`, `$\\sec^{2}x + C$`, `$-\\ln|\\sec x| + C$`],
        answer: 1,
        explanation: 'With $u = \\cos x$: $\\int \\frac{-du}{u} = -\\ln|\\cos x| + C = \\ln|\\sec x| + C$.',
      },
      {
        q: 'For $\\int \\tan^{m}x\\sec^{n}x\\,dx$ with $n$ even and positive, the strategy is:',
        options: ['Half-angle power reduction', 'Save $\\sec x\\tan x$ and substitute $u = \\sec x$', 'Save $\\sec^{2}x$ and substitute $u = \\tan x$', 'No strategy exists'],
        answer: 2,
        explanation: 'The even secant power leaves a spare $\\sec^{2}x = d(\\tan x)$, and $\\sec^{2} = 1 + \\tan^{2}$ converts the rest.',
      },
      {
        q: '$\\displaystyle\\int \\sin^{2}x\\,dx$ equals:',
        options: [`$\\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C$`, `$\\dfrac{\\sin^{3}x}{3} + C$`, `$\\dfrac{x}{2} + \\dfrac{\\sin 2x}{4} + C$`, `$-\\dfrac{\\cos^{2}x}{2} + C$`],
        answer: 0,
        explanation: 'Power reduction: $\\sin^{2}x = \\frac{1 - \\cos 2x}{2}$, and integrating gives $\\frac{x}{2} - \\frac{\\sin 2x}{4} + C$.',
      },
      {
        q: 'When both powers in $\\int \\sin^{m}x\\cos^{n}x\\,dx$ are even, the required tool is:',
        options: ['Integration by parts', 'Half-angle power-reduction identities', 'Trigonometric substitution', 'Partial fractions'],
        answer: 1,
        explanation: 'With no odd power to peel, the half-angle identities are the only way to lower the exponents.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.3
  {
    sectionId: 'calc-ch7-s3',
    readingTime: 10,
    intro: 'When an integral carries a radical such as $\\sqrt{a^{2} - x^{2}}$ or $\\sqrt{x^{2} + a^{2}}$, no algebraic substitution removes the root — but a right triangle will. Trigonometric substitution exploits the Pythagorean identities to turn quadratic radicals into perfect squares of sines, tangents or secants, trades the radical for trigonometry, and converts back at the end using a labeled reference triangle.',
    objectives: [
      'Select the correct substitution for each of the three quadratic radical types',
      'Carry out the substitution, including the transformed differential $dx$',
      'Draw and use the reference triangle for back-substitution',
      'Evaluate complete integrals involving $\\sqrt{9 - x^{2}}$, $\\sqrt{x^{2} + a^{2}}$ and $\\sqrt{x^{2} - a^{2}}$',
      'Recognize when trigonometric substitution is unnecessary',
    ],
    concepts: [
      {
        term: 'The three substitutions',
        kind: 'method',
        statement: 'For $\\sqrt{a^{2} - x^{2}}$: substitute $x = a\\sin\\theta$ with $-\\tfrac{\\pi}{2} \\le \\theta \\le \\tfrac{\\pi}{2}$. For $\\sqrt{a^{2} + x^{2}}$: substitute $x = a\\tan\\theta$ with $-\\tfrac{\\pi}{2} < \\theta < \\tfrac{\\pi}{2}$. For $\\sqrt{x^{2} - a^{2}}$ (with $x \\ge a$): substitute $x = a\\sec\\theta$ with $0 \\le \\theta < \\tfrac{\\pi}{2}$.',
        detail: 'Each choice makes the radical a perfect square: $a^{2} - a^{2}\\sin^{2}\\theta = a^{2}\\cos^{2}\\theta$, $a^{2} + a^{2}\\tan^{2}\\theta = a^{2}\\sec^{2}\\theta$, and $a^{2}\\sec^{2}\\theta - a^{2} = a^{2}\\tan^{2}\\theta$. The square root then falls away entirely — that is the entire trick.',
      },
      {
        term: 'Why the angle is restricted',
        kind: 'insight',
        statement: 'The restrictions on $\\theta$ guarantee that the root simplifies with the correct sign: $\\sqrt{a^{2} - a^{2}\\sin^{2}\\theta} = a\\cos\\theta$ is valid because $\\cos\\theta \\ge 0$ on $\\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]$; similarly the other cases keep $\\sec\\theta$ positive.',
        detail: 'The square root of a square is an absolute value, $\\sqrt{u^{2}} = |u|$, and dropping the absolute value silently is the classic error of this section. The angle restrictions are precisely what license the clean simplification — they are part of the substitution, not decoration.',
      },
      {
        term: 'The reference triangle',
        kind: 'method',
        statement: 'Draw a right triangle encoding the substitution — for $x = a\\sin\\theta$, label the opposite side $x$ and the hypotenuse $a$, so the third side is $\\sqrt{a^{2} - x^{2}}$ by Pythagoras. Then read any trigonometric function of $\\theta$ directly off the triangle to convert back to $x$.',
        detail: 'The triangle is the Rosetta stone between the $\\theta$-world and the $x$-world: $\\sin\\theta = \\frac{x}{a}$ is the definition, and $\\cos\\theta = \\frac{\\sqrt{a^{2} - x^{2}}}{a}$, $\\tan\\theta = \\frac{x}{\\sqrt{a^{2} - x^{2}}}$ come free from the side lengths. Never solve for $\\theta$ and apply inverse functions one at a time — the triangle does it all at once.',
      },
      {
        term: 'Completing the square first',
        kind: 'insight',
        statement: 'Quadratics with linear terms, like $x^{2} + 2x + 5$, are handled by completing the square first: $x^{2} + 2x + 5 = (x + 1)^{2} + 4$, then substitute $u = x + 1$ and finally apply the appropriate trigonometric substitution to $\\sqrt{u^{2} + 4}$.',
        detail: 'The pipeline for a general quadratic radical is algebraic preprocessing — complete the square, shift — followed by the appropriate triangle. Only expressions of the bare forms $a^{2} \\pm x^{2}$ and $x^{2} - a^{2}$ enter the substitution table directly.',
      },
      {
        term: 'When trigonometric substitution is overkill',
        kind: 'insight',
        statement: 'Bare forms match the inverse-trigonometric derivative table: $\\int \\frac{dx}{\\sqrt{9 - x^{2}}} = \\sin^{-1}\\left(\\frac{x}{3}\\right) + C$ and $\\int \\frac{dx}{x^{2} + a^{2}} = \\frac{1}{a}\\tan^{-1}\\left(\\frac{x}{a}\\right) + C$ need no triangle at all.',
        detail: 'The full substitution machinery earns its keep when the radical is multiplied by other factors or powers — $\\int \\sqrt{9 - x^{2}}\\,dx$, $\\int \\frac{dx}{x^{2}\\sqrt{x^{2} + 4}}$ — where the table entry alone cannot finish the job. Always scan the integrand for a direct table match before building triangles.',
      },
    ],
    examples: [
      {
        title: 'The sine substitution',
        problem: 'Evaluate $\\displaystyle\\int \\sqrt{9 - x^{2}}\\,dx$.',
        steps: [
          { label: 'Step 1: Choose the substitution', text: 'The radical has the form $\\sqrt{a^{2} - x^{2}}$ with $a = 3$, so set $x = 3\\sin\\theta$ with $-\\tfrac{\\pi}{2} \\le \\theta \\le \\tfrac{\\pi}{2}$, giving $dx = 3\\cos\\theta\\,d\\theta$.' },
          { label: 'Step 2: Simplify the radical', text: '$\\sqrt{9 - x^{2}} = \\sqrt{9 - 9\\sin^{2}\\theta} = 3\\sqrt{\\cos^{2}\\theta} = 3\\cos\\theta$, the absolute value dropping because cosine is nonnegative on the restricted range.' },
          { label: 'Step 3: Rewrite and integrate', text: `$$\\int \\sqrt{9 - x^{2}}\\,dx = \\int 3\\cos\\theta \\cdot 3\\cos\\theta\\,d\\theta = 9\\int \\cos^{2}\\theta\\,d\\theta.$$` },
          { label: 'Step 4: Power reduction', text: 'By the half-angle identity, $9\\int \\frac{1 + \\cos 2\\theta}{2}\\,d\\theta = \\frac{9\\theta}{2} + \\frac{9\\sin 2\\theta}{4} + C$, and since $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, this is $\\frac{9\\theta}{2} + \\frac{9\\sin\\theta\\cos\\theta}{2} + C$.' },
          { label: 'Step 5: Draw the reference triangle', text: 'Opposite side $x$, hypotenuse 3, adjacent side $\\sqrt{9 - x^{2}}$. Read off $\\theta = \\sin^{-1}\\left(\\frac{x}{3}\\right)$, $\\sin\\theta = \\frac{x}{3}$ and $\\cos\\theta = \\frac{\\sqrt{9 - x^{2}}}{3}$.' },
          { label: 'Step 6: Back-substitute', text: `$$\\int \\sqrt{9 - x^{2}}\\,dx = \\frac{9}{2}\\sin^{-1}\\left(\\frac{x}{3}\\right) + \\frac{9}{2} \\cdot \\frac{x}{3} \\cdot \\frac{\\sqrt{9 - x^{2}}}{3} + C = \\frac{9}{2}\\sin^{-1}\\left(\\frac{x}{3}\\right) + \\frac{x\\sqrt{9 - x^{2}}}{2} + C.$$` },
        ],
        result: '$$\\int \\sqrt{9 - x^{2}}\\,dx = \\frac{x\\sqrt{9 - x^{2}}}{2} + \\frac{9}{2}\\sin^{-1}\\left(\\frac{x}{3}\\right) + C.$$ Setting $x = 3\\sin\\theta$ turns a circular arc into a trigonometric polynomial — this is the area of a circular segment, computed by calculus.',
      },
      {
        title: 'The tangent substitution',
        problem: 'Evaluate $\\displaystyle\\int \\frac{dx}{x^{2}\\sqrt{x^{2} + 4}}$.',
        steps: [
          { label: 'Step 1: Choose the substitution', text: 'The radical is $\\sqrt{4 + x^{2}}$, so set $x = 2\\tan\\theta$ with $-\\tfrac{\\pi}{2} < \\theta < \\tfrac{\\pi}{2}$; then $dx = 2\\sec^{2}\\theta\\,d\\theta$ and $\\sqrt{x^{2} + 4} = 2\\sec\\theta$.' },
          { label: 'Step 2: Rewrite everything in $\\theta$', text: `$$\\int \\frac{2\\sec^{2}\\theta\\,d\\theta}{4\\tan^{2}\\theta \\cdot 2\\sec\\theta} = \\frac{1}{4}\\int \\frac{\\sec\\theta}{\\tan^{2}\\theta}\\,d\\theta.$$` },
          { label: 'Step 3: Convert to sines and cosines', text: '$\\dfrac{\\sec\\theta}{\\tan^{2}\\theta} = \\dfrac{1/\\cos\\theta}{\\sin^{2}\\theta/\\cos^{2}\\theta} = \\dfrac{\\cos\\theta}{\\sin^{2}\\theta} = \\cot\\theta \\csc\\theta$.' },
          { label: 'Step 4: Integrate the standard form', text: '$\\dfrac{1}{4}\\int \\cot\\theta\\csc\\theta\\,d\\theta = -\\dfrac{1}{4}\\csc\\theta + C$, since the derivative of $\\csc\\theta$ is $-\\cot\\theta\\csc\\theta$.' },
          { label: 'Step 5: Back-substitute with the triangle', text: 'The triangle for $x = 2\\tan\\theta$: opposite side $x$, adjacent side 2, hypotenuse $\\sqrt{x^{2} + 4}$, so $\\csc\\theta = \\dfrac{\\sqrt{x^{2} + 4}}{x}$.' },
        ],
        result: '$$\\int \\frac{dx}{x^{2}\\sqrt{x^{2} + 4}} = -\\frac{\\sqrt{x^{2} + 4}}{4x} + C.$$ Differentiate to check: the derivative of $-\\frac{1}{4}\\left(x^{2} + 4\\right)^{1/2}x^{-1}$ is $\\frac{1}{4}x^{-2}\\left(x^{2} + 4\\right)^{1/2} - \\frac{1}{4}\\left(x^{2} + 4\\right)^{-1/2}$, which combines over a common denominator to exactly $\\frac{1}{x^{2}\\sqrt{x^{2}+4}}$.',
      },
      {
        title: 'The secant substitution',
        problem: 'Evaluate $\\displaystyle\\int \\frac{dx}{\\sqrt{x^{2} - 4}}$ for $x > 2$.',
        steps: [
          { label: 'Step 1: Choose the substitution', text: 'The radical has the form $\\sqrt{x^{2} - a^{2}}$ with $a = 2$: set $x = 2\\sec\\theta$ with $0 \\le \\theta < \\tfrac{\\pi}{2}$, so $dx = 2\\sec\\theta\\tan\\theta\\,d\\theta$ and $\\sqrt{x^{2} - 4} = 2\\tan\\theta$.' },
          { label: 'Step 2: Simplify the integral', text: `$$\\int \\frac{2\\sec\\theta\\tan\\theta\\,d\\theta}{2\\tan\\theta} = \\int \\sec\\theta\\,d\\theta.$$` },
          { label: 'Step 3: Use the special antiderivative', text: 'From Section 7.2, $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C$.' },
          { label: 'Step 4: Back-substitute with the triangle', text: 'For $x = 2\\sec\\theta$: hypotenuse $x$, adjacent side 2, opposite side $\\sqrt{x^{2} - 4}$, so $\\sec\\theta = \\frac{x}{2}$ and $\\tan\\theta = \\frac{\\sqrt{x^{2} - 4}}{2}$.' },
          { label: 'Step 5: Assemble and absorb constants', text: '$\\ln\\left|\\dfrac{x}{2} + \\dfrac{\\sqrt{x^{2} - 4}}{2}\\right| + C = \\ln\\left|x + \\sqrt{x^{2} - 4}\\right| - \\ln 2 + C$, and the constant $-\\ln 2$ dissolves into $C$.' },
        ],
        result: '$$\\int \\frac{dx}{\\sqrt{x^{2} - 4}} = \\ln\\left|x + \\sqrt{x^{2} - 4}\\right| + C.$$ The three case results together are the inverse-hyperbolic and logarithmic patterns previewed at the end of Chapter 3.',
      },
    ],
    keyTakeaways: [
      'Match the radical to the substitution: $\\sqrt{a^{2} - x^{2}}$ gives $x = a\\sin\\theta$, $\\sqrt{a^{2} + x^{2}}$ gives $x = a\\tan\\theta$, $\\sqrt{x^{2} - a^{2}}$ gives $x = a\\sec\\theta$.',
      'Each substitution makes the radical a perfect square — the Pythagorean identity is the engine.',
      'Restrict $\\theta$ so the dropped absolute values are justified; the simplification $\\sqrt{\\cos^{2}\\theta} = \\cos\\theta$ needs $\\cos\\theta \\ge 0$.',
      'Draw the reference triangle and read all back-substitutions from it — never translate functions one at a time.',
      'Complete the square first when the quadratic has a linear term, then shift, then substitute.',
      'Check for a direct table match first: $\\int \\frac{dx}{\\sqrt{a^{2} - x^{2}}}$ and $\\int \\frac{dx}{x^{2} + a^{2}}$ are inverse trig antiderivatives without any triangle.',
    ],
    quiz: [
      {
        q: 'For an integral containing $\\sqrt{a^{2} - x^{2}}$, the correct substitution is:',
        options: [`$x = a\\tan\\theta$`, `$x = a\\sec\\theta$`, `$x = a\\sin\\theta$`, `$u = a^{2} - x^{2}$`],
        answer: 2,
        explanation: 'Sine makes $a^{2} - a^{2}\\sin^{2}\\theta = a^{2}\\cos^{2}\\theta$ a perfect square.',
      },
      {
        q: 'The restriction $-\\tfrac{\\pi}{2} \\le \\theta \\le \\tfrac{\\pi}{2}$ in $x = a\\sin\\theta$ exists so that:',
        options: ['$\\tan\\theta$ is defined', `$\\cos\\theta \\ge 0$, justifying $\\sqrt{a^{2}\\cos^{2}\\theta} = a\\cos\\theta$`, 'The integral converges', 'The triangle is equilateral'],
        answer: 1,
        explanation: 'A square root of a square is an absolute value; the angle range is what lets it be dropped safely.',
      },
      {
        q: 'With $x = 2\\tan\\theta$, the radical $\\sqrt{x^{2} + 4}$ becomes:',
        options: [`$2\\tan\\theta$`, `$2\\sec\\theta$`, `$2\\cos\\theta$`, `$4\\sec\\theta$`],
        answer: 1,
        explanation: '$\\sqrt{4\\tan^{2}\\theta + 4} = \\sqrt{4\\sec^{2}\\theta} = 2\\sec\\theta$ on the restricted range where secant is positive.',
      },
      {
        q: '$\\displaystyle\\int \\frac{dx}{\\sqrt{x^{2} - a^{2}}}$ equals:',
        options: [`$\\sin^{-1}(x/a) + C$`, `$\\ln\\left|x + \\sqrt{x^{2} - a^{2}}\\right| + C$`, `$\\ln\\left|x - \\sqrt{x^{2} - a^{2}}\\right| + C$`, `$\\frac{\\sqrt{x^{2} - a^{2}}}{2a} + C$`],
        answer: 1,
        explanation: 'The secant substitution produces $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta|$, which reads back to exactly this logarithm.',
      },
      {
        q: 'After integrating in the $\\theta$-world, the conversion back to $x$ is done using:',
        options: ['The reference triangle drawn for the substitution', 'Integration by parts', 'A second trigonometric substitution', 'L’Hospital’s Rule'],
        answer: 0,
        explanation: 'The triangle encodes every trigonometric function of $\\theta$ as a ratio of sides built from $x$ and $a$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.4
  {
    sectionId: 'calc-ch7-s4',
    readingTime: 10,
    intro: 'A rational function — one polynomial over another — can always be dismantled into a polynomial plus simple fractions whose denominators are the factors of the original denominator. Partial fractions is the algebra that performs the split, and once it is finished every piece integrates to a logarithm, an arctangent or a rational function. It is the rare technique that handles an entire class of integrands completely.',
    objectives: [
      'Decide whether a rational function needs division before decomposition',
      'Set up decompositions for distinct linear, repeated linear and quadratic factors',
      'Solve for the unknown constants by strategic substitution and coefficient matching',
      'Integrate each type of partial fraction, including arctangent completions',
      'Appreciate that every rational function has an elementary antiderivative',
    ],
    concepts: [
      {
        term: 'When partial fractions applies',
        kind: 'method',
        statement: 'The integrand must be a **proper** rational function: degree of numerator strictly less than degree of denominator. If it is improper, divide first and apply the method to the remainder — the polynomial part integrates term by term.',
        detail: 'Example: $\\frac{x^{3} + x}{x - 1} = x^{2} + x + 1 + \\frac{2}{x - 1}$ after long division, and only the final fraction needs decomposition. Forgetting the division step is the most common structural error — the method simply has no fallback for equal or larger numerator degree.',
      },
      {
        term: 'Factor the denominator completely',
        kind: 'insight',
        statement: 'Over the real numbers, every polynomial factors into linear factors $(x - r)$ and irreducible quadratics (negative discriminant). The factorization of the denominator completely determines the shape of the partial-fraction decomposition.',
        detail: 'This is the Fundamental Theorem of Algebra filtered through the quadratic formula: cubic and higher factors always split further. An irreducible quadratic like $x^{2} + 4$ is an endpoint — it has no real roots, and the decomposition treats it as an atomic unit with a linear numerator.',
      },
      {
        term: 'Distinct linear factors',
        kind: 'method',
        statement: 'If the denominator factors into distinct linear factors, write $$\\frac{P(x)}{(x - r_{1})(x - r_{2}) \\cdots (x - r_{k})} = \\frac{A_{1}}{x - r_{1}} + \\frac{A_{2}}{x - r_{2}} + \\cdots + \\frac{A_{k}}{x - r_{k}}.$$ Each factor contributes one constant-numerator fraction.',
        detail: 'The number of unknowns equals the number of factors. After multiplying through by the common denominator, substitute the roots $r_{i}$ one at a time — each substitution instantly reveals one constant, a shortcut far faster than expanding everything.',
      },
      {
        term: 'Repeated linear factors',
        kind: 'method',
        statement: 'A factor $(x - r)^{k}$ requires a tower of **k** terms: $$\\frac{A_{1}}{x - r} + \\frac{A_{2}}{(x - r)^{2}} + \\cdots + \\frac{A_{k}}{(x - r)^{k}}.$$ One term per power, from 1 up to $k$.',
        detail: 'The classic error is writing a single fraction for the whole repeated factor. The powers must all be present — the decomposition is an identity of rational functions, and only the full tower can match every behavior near $x = r$. The new terms integrate to $\\frac{-A_{2}}{x - r}$-style rational functions plus logarithms.',
      },
      {
        term: 'Irreducible quadratic factors',
        kind: 'method',
        statement: 'Each distinct irreducible quadratic factor $x^{2} + bx + c$ contributes a fraction with a **linear** numerator: $\\frac{Ax + B}{x^{2} + bx + c}$. A repeated quadratic factor $(x^{2} + bx + c)^{k}$ stacks terms $\\frac{A_{1}x + B_{1}}{x^{2} + bx + c} + \\cdots + \\frac{A_{k}x + B_{k}}{(x^{2} + bx + c)^{k}}$.',
        detail: 'The linear numerator is forced: the derivative of the denominator is linear, and the decomposition must be able to produce it. When integrating, split the numerator into a multiple of the denominator’s derivative (logarithm term) plus a constant (arctangent term after completing the square if needed).',
      },
      {
        term: 'Solving for the constants',
        kind: 'method',
        statement: 'Multiply the decomposition through by the original denominator to clear fractions, then either **substitute strategic values** of $x$ — the roots of the linear factors, which isolate constants — or **equate coefficients** of like powers to build a linear system. Mixing both is fastest.',
        detail: 'Strategic substitution knocks out the easy constants; equating coefficients (often just the highest and lowest powers) finishes the rest. The system always has a unique solution — the theory guarantees the decomposition exists.',
      },
      {
        term: 'Every rational function is integrable',
        kind: 'theorem',
        statement: 'The combination of division, partial fractions, logarithms and arctangents integrates **every** rational function in elementary terms. There is no rational function whose antiderivative cannot be written down.',
        detail: 'This is a rare completeness result — contrast it with $\\int e^{x^{2}}dx$ or $\\int \\frac{\\sin x}{x}dx$, which have no elementary antiderivatives at all (Section 7.6). The contrast explains why computer algebra systems start with rational functions and why engineers multiply by conjugates to manufacture them.',
      },
    ],
    examples: [
      {
        title: 'Distinct linear factors',
        problem: 'Evaluate $\\displaystyle\\int \\frac{x + 5}{2x^{2} - x - 1}\\,dx$ by partial fractions.',
        steps: [
          { label: 'Step 1: Confirm proper and factor', text: 'Numerator degree 1 is less than denominator degree 2, and $2x^{2} - x - 1 = (2x + 1)(x - 1)$ — distinct linear factors.' },
          { label: 'Step 2: Write the decomposition', text: `$$\\frac{x + 5}{(2x + 1)(x - 1)} = \\frac{A}{2x + 1} + \\frac{B}{x - 1}.$$` },
          { label: 'Step 3: Clear denominators', text: 'Multiplying through: $x + 5 = A(x - 1) + B(2x + 1)$ — an identity for all $x$ except the poles.' },
          { label: 'Step 4: Substitute the roots', text: 'At $x = 1$: $6 = 3B$, so $B = 2$. At $x = -\\tfrac{1}{2}$: $4.5 = -1.5A$, so $A = -3$.' },
          { label: 'Step 5: Integrate the pieces', text: '$$\\int \\left(\\frac{-3}{2x + 1} + \\frac{2}{x - 1}\\right) dx = -\\frac{3}{2}\\ln|2x + 1| + 2\\ln|x - 1| + C,$$ where the factor $\\tfrac{1}{2}$ in the first term compensates for the coefficient 2 inside the logarithm’s argument.' },
        ],
        result: '$$\\int \\frac{x + 5}{2x^{2} - x - 1}\\,dx = -\\frac{3}{2}\\ln|2x + 1| + 2\\ln|x - 1| + C.$$ Two logarithms — one per linear factor, exactly as the theory promises.',
      },
      {
        title: 'A repeated linear factor',
        problem: 'Evaluate $\\displaystyle\\int \\frac{x^{2} + 2}{x(x - 1)^{2}}\\,dx$.',
        steps: [
          { label: 'Step 1: Set up with the full tower', text: 'The factor $(x - 1)^{2}$ needs two terms, so $$\\frac{x^{2} + 2}{x(x - 1)^{2}} = \\frac{A}{x} + \\frac{B}{x - 1} + \\frac{C}{(x - 1)^{2}}.$$' },
          { label: 'Step 2: Clear denominators', text: '$x^{2} + 2 = A(x - 1)^{2} + Bx(x - 1) + Cx$.' },
          { label: 'Step 3: Substitute the roots', text: 'At $x = 0$: $2 = A$. At $x = 1$: $3 = C$. These two substitutions finished two of the three constants instantly.' },
          { label: 'Step 4: Find the last constant by coefficients', text: 'Match the $x^{2}$ coefficients on both sides: $1 = A + B$, so $B = 1 - 2 = -1$.' },
          { label: 'Step 5: Integrate term by term', text: '$$\\int \\left(\\frac{2}{x} - \\frac{1}{x - 1} + \\frac{3}{(x - 1)^{2}}\\right) dx = 2\\ln|x| - \\ln|x - 1| - \\frac{3}{x - 1} + C,$$ the last term from the power rule $\\int (x - 1)^{-2}dx = -(x - 1)^{-1}$.' },
        ],
        result: '$$\\int \\frac{x^{2} + 2}{x(x - 1)^{2}}\\,dx = 2\\ln|x| - \\ln|x - 1| - \\frac{3}{x - 1} + C.$$ The repeated factor contributed both a logarithm and a rational term.',
      },
      {
        title: 'An irreducible quadratic factor',
        problem: 'Evaluate $\\displaystyle\\int \\frac{2x^{2} + 3x + 7}{x\\left(x^{2} + 4\\right)}\\,dx$.',
        steps: [
          { label: 'Step 1: Set up with a linear numerator over the quadratic', text: 'The quadratic $x^{2} + 4$ is irreducible (negative discriminant), so $$\\frac{2x^{2} + 3x + 7}{x(x^{2} + 4)} = \\frac{A}{x} + \\frac{Bx + C}{x^{2} + 4}.$$' },
          { label: 'Step 2: Clear denominators', text: '$2x^{2} + 3x + 7 = A(x^{2} + 4) + (Bx + C)x = (A + B)x^{2} + Cx + 4A$.' },
          { label: 'Step 3: Match coefficients', text: 'Constants: $4A = 7$, so $A = \\tfrac{7}{4}$. Linear: $C = 3$. Quadratic: $A + B = 2$, so $B = \\tfrac{1}{4}$.' },
          { label: 'Step 4: Integrate the first piece', text: '$\\displaystyle\\int \\frac{7/4}{x}\\,dx = \\frac{7}{4}\\ln|x|$.' },
          { label: 'Step 5: Split the second piece along the derivative', text: 'Write $\\dfrac{\\frac{1}{4}x + 3}{x^{2} + 4} = \\frac{1}{8} \\cdot \\dfrac{2x}{x^{2} + 4} + 3 \\cdot \\dfrac{1}{x^{2} + 4}$. The first part integrates to $\\frac{1}{8}\\ln(x^{2} + 4)$; the second is an arctangent: $\\displaystyle\\int \\frac{3\\,dx}{x^{2} + 4} = \\frac{3}{2}\\tan^{-1}\\left(\\frac{x}{2}\\right)$.' },
        ],
        result: '$$\\int \\frac{2x^{2} + 3x + 7}{x(x^{2} + 4)}\\,dx = \\frac{7}{4}\\ln|x| + \\frac{1}{8}\\ln(x^{2} + 4) + \\frac{3}{2}\\tan^{-1}\\left(\\frac{x}{2}\\right) + C.$$ Logarithms for the factors that can vanish, arctangent for the one that cannot — the signature of a complete decomposition.',
      },
    ],
    keyTakeaways: [
      'Partial fractions require a proper rational function; divide first when the numerator degree is too large.',
      'The denominator’s complete factorization dictates the decomposition: one constant-numerator term per distinct linear factor, a tower of terms per repeated factor, and a linear numerator per irreducible quadratic.',
      'Repeated factors need all powers from 1 to $k$ — a single term is a structural error.',
      'Solve for constants by substituting the roots, then finish with coefficient matching.',
      'Each linear factor integrates to a logarithm; each irreducible quadratic splits into a logarithm plus an arctangent.',
      'Every rational function has an elementary antiderivative — the one class of integrands for which this is guaranteed.',
    ],
    quiz: [
      {
        q: 'Before decomposing $\\dfrac{x^{3} + x}{x - 1}$ into partial fractions, you must first:',
        options: ['Divide, because the rational function is improper', 'Factor the numerator', 'Substitute $u = x - 1$', 'Complete the square'],
        answer: 0,
        explanation: 'Numerator degree 3 exceeds denominator degree 1, so polynomial division must come first.',
      },
      {
        q: 'A denominator containing the factor $(x - 1)^{3}$ requires which terms?',
        options: ['A single term $\\dfrac{A}{x - 1}$', 'Two terms $\\dfrac{A}{x-1} + \\dfrac{B}{(x-1)^{2}}$', 'Three terms $\\dfrac{A}{x-1} + \\dfrac{B}{(x-1)^{2}} + \\dfrac{C}{(x-1)^{3}}$', 'A term with numerator $Ax + B$'],
        answer: 2,
        explanation: 'One term per power, from the first through the third — the full tower.',
      },
      {
        q: 'For an irreducible quadratic factor $x^{2} + 4$ in the denominator, the corresponding partial fraction has numerator:',
        options: ['A constant $A$', 'Linear, $Ax + B$', 'Quadratic, $Ax^{2} + Bx + C$', 'None — such factors cannot appear'],
        answer: 1,
        explanation: 'The linear numerator can match the derivative of the denominator, which the decomposition needs for the logarithm piece.',
      },
      {
        q: '$\\displaystyle\\int \\frac{dx}{x - r}$ equals:',
        options: [`$\\ln|x - r| + C$`, `$\\dfrac{1}{x - r} + C$`, `$-\\dfrac{1}{(x - r)^{2}} + C$`, `$e^{x - r} + C$`],
        answer: 0,
        explanation: 'Each distinct linear factor contributes one logarithm — the simplest piece of every decomposition.',
      },
      {
        q: 'Which factor produces an arctangent upon integration?',
        options: [`$x - 5$`, '$x^{2} + 9$ with constant numerator', `$(x + 2)^{2}$`, `$x$`],
        answer: 1,
        explanation: 'An irreducible quadratic yields $\\int \\frac{du}{u^{2} + a^{2}} = \\frac{1}{a}\\tan^{-1}\\left(\\frac{u}{a}\\right)$ after splitting off the logarithm part.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.5
  {
    sectionId: 'calc-ch7-s5',
    readingTime: 8,
    intro: 'Differentiation is mechanical — rules apply in order and every elementary function yields. Integration is a game of recognition: no single algorithm covers every integral, but a disciplined search order — simplify, classify, match, combine — turns most textbook integrals into doable ones. This section is that decision procedure, run on integrals that each need exactly two moves in the right sequence.',
    objectives: [
      'Simplify an integrand with algebra and identities before any technique',
      'Classify an integrand by form and match it to substitution, parts, trig methods, trig substitution or partial fractions',
      'Reverse a stalled substitution by solving for $x$ in terms of $u$',
      'Recognize when to multiply by a clever form of 1',
      'Accept when an integral has no elementary antiderivative',
    ],
    concepts: [
      {
        term: 'Step 1: simplify before anything',
        kind: 'method',
        statement: 'Before reaching for machinery, try pure algebra: expand products, divide term by term, rationalize numerators, and apply trigonometric identities such as $\\tan^{2}x = \\sec^{2}x - 1$ or half-angle formulas. The cheapest substitution is the one you never make.',
        detail: 'A large fraction of “hard” integrals become table entries after one identity. Compare $\\int \\frac{x^{2} + 1}{x^{2}}dx$, which is just $\\int \\left(1 + \\frac{1}{x^{2}}\\right) dx = x - \\frac{1}{x} + C$ before any technique is invoked.',
      },
      {
        term: 'Step 2: classify the integrand',
        kind: 'method',
        statement: 'Scan for structure: a composition $f(g(x)) \\cdot g\'(x)$ means **substitution**; a product of unlike types (polynomial with exponential or trig, a lone logarithm or inverse trig) means **integration by parts**; a rational function means **partial fractions**; a quadratic radical means **trigonometric substitution**; powers and products of trig functions mean the **Section 7.2 strategies**.',
        detail: 'The classification is a decision tree, not a checklist to execute in full — one recognized feature usually settles the technique. When two features appear (a radical inside a composition, a polynomial times a trig function), handle the outer structure first and re-classify whatever remains.',
      },
      {
        term: 'Step 3: when the first attempt stalls',
        kind: 'insight',
        statement: 'Substitutions are reversible: if $u = \\sqrt{x}$ does not help, invert it and write $x = u^{2}$, $dx = 2u\\,du$ instead. If parts produces something worse, swap the roles of $u$ and $dv$. If nothing matches, try multiplying by a clever form of 1 — a conjugate, $\\frac{e^{x}}{e^{x}}$, a power of the integrand over itself.',
        detail: 'The $x = u^{2}$ move (integrating $e^{\\sqrt{x}}$) looks illegal because the substitution runs backward, but it is perfectly sound: it is a change of variable in the differential world, and the check is always differentiating the final answer. Flexibility — trying the reverse of the natural move — is what separates fluent integration from formula plugging.',
      },
      {
        term: 'Step 4: accept defeat gracefully',
        kind: 'insight',
        statement: 'Some elementary-looking integrals have no elementary antiderivative: $\\int e^{x^{2}}dx$, $\\int e^{-x^{2}}dx$, $\\int \\frac{\\sin x}{x}dx$ and $\\int \\frac{dx}{\\ln x}$ cannot be written with finitely many elementary operations. For definite integrals, approximation (Section 7.7) or special functions (Section 7.6) take over.',
        detail: 'There is a real theorem behind this — Liouville’s theorem delimits exactly which elementary functions have elementary antiderivatives. Practically: after a reasonable search, stop, name the obstacle, and switch to numerical or special-function methods rather than grinding forever.',
      },
      {
        term: 'The meta-skill: recognition',
        kind: 'insight',
        statement: 'Integration competence is pattern recognition trained by volume: maintain a mental library of known integrals, and compare each new integrand against it before reaching for techniques. Most exam integrals are one disguise away from a library entry.',
        detail: 'The habit that builds the library: after every solved integral, ask what feature of the integrand dictated the successful technique. The classification of Step 2 is learned backward from solved problems, not memorized forward from a table.',
      },
    ],
    examples: [
      {
        title: 'Substitution that stalls, then parts',
        problem: 'Evaluate $\\displaystyle\\int e^{\\sqrt{x}}\\,dx$.',
        steps: [
          { label: 'Step 1: Classify', text: 'The integrand is a composition $e^{\\sqrt{x}}$, but the missing factor $\\frac{1}{2\\sqrt{x}}$ blocks a direct substitution — classify it as a radical blocking a composition.' },
          { label: 'Step 2: Force the substitution by inverting it', text: 'Let $u = \\sqrt{x}$ — and since $du$ does not appear, solve for $x$ instead: $x = u^{2}$, so $dx = 2u\\,du$.' },
          { label: 'Step 3: Rewrite', text: `$$\\int e^{\\sqrt{x}}\\,dx = \\int e^{u} \\cdot 2u\\,du = 2\\int u e^{u}\\,du.$$` },
          { label: 'Step 4: Re-classify — a product of unlike types', text: 'Polynomial times exponential: integration by parts with $w = u$, $dv = e^{u}du$, giving $\\int u e^{u}du = u e^{u} - e^{u}$.' },
          { label: 'Step 5: Back-substitute and verify', text: '$$\\int e^{\\sqrt{x}}\\,dx = 2e^{\\sqrt{x}}\\left(\\sqrt{x} - 1\\right) + C.$$ Differentiate: $2e^{\\sqrt{x}} \\cdot \\frac{1}{2\\sqrt{x}}(\\sqrt{x} - 1) + 2e^{\\sqrt{x}} \\cdot \\frac{1}{2\\sqrt{x}} = e^{\\sqrt{x}}$ — confirmed.' },
        ],
        result: '$$\\int e^{\\sqrt{x}}\\,dx = 2e^{\\sqrt{x}}\\left(\\sqrt{x} - 1\\right) + C.$$ Two techniques in sequence: an inverted substitution to expose the structure, then by parts to finish it.',
      },
      {
        title: 'Spotting the hidden substitution',
        problem: 'Evaluate $\\displaystyle\\int x^{3}\\sqrt{x^{2} + 9}\\,dx$.',
        steps: [
          { label: 'Step 1: Consider the options', text: 'The radical $\\sqrt{x^{2} + 9}$ suggests trigonometric substitution — but that is the expensive route. Look first for a spare factor of the derivative of the inside: the inside is $x^{2} + 9$, whose derivative $2x$ divides the odd power $x^{3}$.' },
          { label: 'Step 2: Substitute on the inside', text: 'Let $u = x^{2} + 9$, so $du = 2x\\,dx$. Write $x^{3}dx = x^{2} \\cdot x\\,dx = (u - 9) \\cdot \\frac{du}{2}$.' },
          { label: 'Step 3: Rewrite and integrate', text: `$$\\int x^{3}\\sqrt{x^{2} + 9}\\,dx = \\frac{1}{2}\\int (u - 9)u^{1/2}\\,du = \\frac{1}{2}\\int \\left(u^{3/2} - 9u^{1/2}\\right) du.$$` },
          { label: 'Step 4: Apply the power rule', text: '$\\frac{1}{2}\\left(\\frac{2}{5}u^{5/2} - 9 \\cdot \\frac{2}{3}u^{3/2}\\right) = \\frac{u^{5/2}}{5} - 3u^{3/2} + C$.' },
          { label: 'Step 5: Back-substitute', text: `$$\\int x^{3}\\sqrt{x^{2} + 9}\\,dx = \\frac{\\left(x^{2} + 9\\right)^{5/2}}{5} - 3\\left(x^{2} + 9\\right)^{3/2} + C.$$` },
        ],
        result: 'An odd power of $x$ outside a radical of $x^{2}$-plus-constant is a standing invitation to substitute $u = x^{2} + 9$ — the cheap alternative to a full trigonometric substitution.',
      },
      {
        title: 'Multiplying by a clever form of 1',
        problem: 'Evaluate $\\displaystyle\\int \\frac{dx}{e^{x} + e^{-x}}$.',
        steps: [
          { label: 'Step 1: Stare at the denominator', text: 'No obvious composition, no product of unlike types, not rational in $x$ — nothing matches. The denominator mixes $e^{x}$ and $e^{-x}$, a hint to manufacture a square.' },
          { label: 'Step 2: Multiply by a form of 1', text: 'Multiply numerator and denominator by $e^{x}$: $$\\frac{1}{e^{x} + e^{-x}} = \\frac{e^{x}}{e^{2x} + 1}.$$' },
          { label: 'Step 3: Re-classify', text: 'Now the integrand is a composition: the inside is $u = e^{x}$ with derivative $du = e^{x}dx$ sitting right in the numerator.' },
          { label: 'Step 4: Substitute and integrate', text: `$$\\int \\frac{e^{x}\\,dx}{e^{2x} + 1} = \\int \\frac{du}{u^{2} + 1} = \\tan^{-1}u + C.$$` },
          { label: 'Step 5: Back-substitute and verify', text: '$$\\int \\frac{dx}{e^{x} + e^{-x}} = \\tan^{-1}\\left(e^{x}\\right) + C.$$ Differentiating: $\\frac{e^{x}}{1 + e^{2x}}$, which equals the original after multiplying top and bottom by $e^{-x}$ — verified.' },
        ],
        result: '$$\\int \\frac{dx}{e^{x} + e^{-x}} = \\tan^{-1}\\left(e^{x}\\right) + C.$$ The move — multiply by a clever 1 — cannot be systematized, but the training question is always the same: what would make this look like something I know?',
      },
    ],
    keyTakeaways: [
      'Simplify first: algebra and identities resolve more integrals than any technique.',
      'Classify before you compute — composition means substitution, unlike product means parts, rational means partial fractions, quadratic radical means trig substitution.',
      'A blocked substitution can be inverted: solve for $x$ in terms of $u$ and compute the new differential.',
      'Odd powers of $x$ outside a quadratic radical invite a plain substitution before any triangle.',
      'Multiplying by a clever form of 1 (conjugates, $e^{x}$ top and bottom) can expose a hidden composition.',
      'Know the untouchables: $\\int e^{\\pm x^{2}}dx$ and $\\int \\frac{\\sin x}{x}dx$ have no elementary antiderivatives — switch to numerical or special-function methods.',
    ],
    quiz: [
      {
        q: 'The first move on an unfamiliar integral should be:',
        options: ['Simplify with algebra or identities', 'Integrate by parts', 'Trigonometric substitution', 'Look up the error bound'],
        answer: 0,
        explanation: 'Expanding, dividing, or applying an identity often dissolves the difficulty before any technique is needed.',
      },
      {
        q: 'An integrand that is a product of a polynomial and an exponential calls for:',
        options: ['Integration by parts', 'Partial fractions', 'Trigonometric substitution', 'The half-angle identity'],
        answer: 0,
        explanation: 'Unlike function types multiplied together — the signature of integration by parts.',
      },
      {
        q: 'For $\\int e^{\\sqrt{x}}dx$, the opening move is:',
        options: ['Parts with $u = e^{\\sqrt{x}}$', 'The inverted substitution $x = u^{2}$, $dx = 2u\\,du$', 'Partial fractions', 'The substitution $u = e^{x}$'],
        answer: 1,
        explanation: 'The natural substitution stalls because $\\frac{1}{2\\sqrt{x}}$ is missing — invert the substitution to expose a by-parts integral $2\\int u e^{u}du$.',
      },
      {
        q: 'The integrand $x^{3}\\sqrt{x^{2} + 9}$ is best attacked by:',
        options: ['The substitution $u = x^{2} + 9$, using the odd power of $x$', 'Full trigonometric substitution $x = 3\\tan\\theta$', 'Integration by parts', 'Partial fractions'],
        answer: 0,
        explanation: 'The spare $x$ in $x^{3}$ pairs with $dx$ to give $\\frac{du}{2}$ — far cheaper than the triangle that the radical suggests.',
      },
      {
        q: 'Which integral has no elementary antiderivative?',
        options: [`$\\int x e^{x^{2}}dx$`, `$\\int e^{x^{2}}dx$`, `$\\int \\frac{x}{x^{2}+1}dx$`, `$\\int \\ln x\\,dx$`],
        answer: 1,
        explanation: 'Without the factor $2x$ outside, $e^{x^{2}}$ cannot be handled by substitution — and Liouville’s theorem rules out any elementary answer.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.6
  {
    sectionId: 'calc-ch7-s6',
    readingTime: 8,
    intro: 'When an integral is standard but not memorized, a printed table finds it in seconds; when the algebra of matching constants is tedious, a computer algebra system does it instantly. Both tools demand the same human skill — recognizing structure, performing the small substitution that matches the printed pattern, and verifying the answer, because CAS output can be correct, unhelpful, or subtly misread.',
    objectives: [
      'Use a table of integrals by matching patterns and adjusting constants',
      'Apply reduction formulas recursively down to a base case',
      'Anticipate what a CAS does well: algebra-heavy decompositions and definite values',
      'Anticipate what a CAS hides: constant differences, special functions, unevaluated integrals',
      'Verify any looked-up or computed antiderivative by differentiation',
    ],
    concepts: [
      {
        term: 'Anatomy of a table entry',
        kind: 'method',
        statement: 'A table entry is a pattern with parameters, for example $$\\int \\frac{du}{\\sqrt{u^{2} + a^{2}}} = \\ln\\left|u + \\sqrt{u^{2} + a^{2}}\\right| + C.$$ To use it, manipulate the integral — by a substitution and by pulling constants out — until it matches the pattern exactly.',
        detail: 'The typical bridge is a small substitution plus constant bookkeeping: for $\\int \\frac{x\\,dx}{\\sqrt{x^{4} + 9}}$, the substitution $u = x^{2}$, $du = 2x\\,dx$ converts it to $\\tfrac{1}{2}\\int \\frac{du}{\\sqrt{u^{2} + 9}}$, which is the printed entry with $a = 3$. The technique is Chapter 5’s substitution rule serving Chapter 7’s recognition.',
      },
      {
        term: 'Reduction formulas',
        kind: 'method',
        statement: 'A reduction formula expresses an integral in terms of a simpler member of the same family, such as $$\\int \\sin^{n}u\\,du = -\\frac{\\sin^{n-1}u\\cos u}{n} + \\frac{n-1}{n}\\int \\sin^{n-2}u\\,du.$$ Apply it repeatedly until reaching a base case, then collect the boundary terms.',
        detail: 'Reduction formulas are integration by parts pre-packaged: each application lowers the exponent by two. The logarithm family obeys $\\int \\ln^{n}u\\,du = u\\ln^{n}u - n\\int \\ln^{n-1}u\\,du$, and the secant family has its own ladder. Recursion replaces thinking — the human contributes only the bookkeeping of the exponents.',
      },
      {
        term: 'What a CAS does well',
        kind: 'insight',
        statement: 'A computer algebra system shines at exactly the parts humans find tedious: partial fractions with ugly coefficients, algebraic simplification, and **definite** integrals — where it can fall back on high-precision numerical methods when symbolic ones stall.',
        detail: 'Ask a CAS for $\\int x^{2}\\sqrt{2 + x}\\,dx$ and it will deliver instantly a combination of powers that would take a person a full page. The right division of labor: humans supply the classification and the verification, the machine supplies the arithmetic.',
      },
      {
        term: 'What a CAS can hide',
        kind: 'insight',
        statement: 'CAS answers may differ by constants or forms: for $\\int \\sin x\\cos x\\,dx$, one system returns $\\tfrac{1}{2}\\sin^{2}x$ and another $-\\tfrac{1}{2}\\cos^{2}x$ — both correct, since they differ by the constant $\\tfrac{1}{2}$. Output may also involve special functions, or come back unevaluated.',
        detail: 'The verification step is not optional: differentiate the answer and confirm you recover the integrand. A CAS also cannot know which form is most useful for your purpose — a logarithmic form versus an arctangent form of the same answer may differ enormously in downstream manipulations.',
      },
      {
        term: 'Non-elementary integrals',
        kind: 'definition',
        statement: 'An antiderivative is **non-elementary** if it cannot be expressed using finitely many elementary operations. The canonical examples define new functions: $\\displaystyle\\int e^{-x^{2}}dx = \\frac{\\sqrt{\\pi}}{2}\\operatorname{erf}(x) + C$ and $\\displaystyle\\int \\frac{\\sin x}{x}dx = \\operatorname{Si}(x) + C$.',
        detail: 'The error function $\\operatorname{erf}(x) = \\frac{2}{\\sqrt{\\pi}}\\int_{0}^{x} e^{-t^{2}}dt$ is defined by the very integral it evaluates — circular-looking but perfectly rigorous, and indispensable in probability and statistics, where $e^{-x^{2}}$ is the bell curve. Naming a new function is how mathematics historically absorbed $\\ln x$ and the trigonometric functions too.',
      },
    ],
    examples: [
      {
        title: 'Matching a table entry through a substitution',
        problem: 'Use the table entry $\\displaystyle\\int \\frac{du}{\\sqrt{u^{2} + a^{2}}} = \\ln\\left|u + \\sqrt{u^{2} + a^{2}}\\right| + C$ to evaluate $\\displaystyle\\int \\frac{x\\,dx}{\\sqrt{x^{4} + 9}}$.',
        steps: [
          { label: 'Step 1: Compare against the pattern', text: 'The integrand has a square root of a square plus a constant — the right family — but the variable inside is $x^{2}$, not $x$, and there is an extra factor of $x$.' },
          { label: 'Step 2: Substitute to expose the pattern', text: 'Let $u = x^{2}$, so $du = 2x\\,dx$ and $x\\,dx = \\frac{du}{2}$: $$\\int \\frac{x\\,dx}{\\sqrt{x^{4} + 9}} = \\frac{1}{2}\\int \\frac{du}{\\sqrt{u^{2} + 9}}.$$' },
          { label: 'Step 3: Match the parameters', text: 'The integral now fits the entry with $a = 3$: the pattern’s $u^{2} + a^{2}$ is our $u^{2} + 9$.' },
          { label: 'Step 4: Apply the entry and back-substitute', text: `$$\\frac{1}{2}\\ln\\left|u + \\sqrt{u^{2} + 9}\\right| + C = \\frac{1}{2}\\ln\\left|x^{2} + \\sqrt{x^{4} + 9}\\right| + C.$$` },
        ],
        result: '$$\\int \\frac{x\\,dx}{\\sqrt{x^{4} + 9}} = \\frac{1}{2}\\ln\\left|x^{2} + \\sqrt{x^{4} + 9}\\right| + C.$$ One substitution and one table lookup — the same result the trigonometric substitution of Section 7.3 would produce with ten times the work.',
      },
      {
        title: 'Working a reduction formula',
        problem: 'Use the reduction formula $\\displaystyle\\int \\ln^{n}u\\,du = u\\ln^{n}u - n\\int \\ln^{n-1}u\\,du$ to evaluate $\\displaystyle\\int \\ln^{3}x\\,dx$.',
        steps: [
          { label: 'Step 1: Apply the formula with $n = 3$', text: '$\\displaystyle\\int \\ln^{3}x\\,dx = x\\ln^{3}x - 3\\int \\ln^{2}x\\,dx$.' },
          { label: 'Step 2: Reduce again with $n = 2$', text: '$\\displaystyle\\int \\ln^{2}x\\,dx = x\\ln^{2}x - 2\\int \\ln x\\,dx$.' },
          { label: 'Step 3: Reach the base case', text: 'The last integral is the Section 7.1 classic: $\\displaystyle\\int \\ln x\\,dx = x\\ln x - x + C$.' },
          { label: 'Step 4: Assemble the pieces', text: 'Substituting upward: $\\int \\ln^{2}x\\,dx = x\\ln^{2}x - 2x\\ln x + 2x + C$, and therefore $$\\int \\ln^{3}x\\,dx = x\\ln^{3}x - 3x\\ln^{2}x + 6x\\ln x - 6x + C.$$' },
          { label: 'Step 5: Verify by differentiating', text: 'The derivative of the answer is $\\ln^{3}x + 3\\ln^{2}x - 3\\ln^{2}x - 6\\ln x + 6\\ln x + 6 - 6 = \\ln^{3}x$ — every auxiliary term cancels in pairs.' },
        ],
        result: '$$\\int \\ln^{3}x\\,dx = x\\ln^{3}x - 3x\\ln^{2}x + 6x\\ln x - 6x + C.$$ Two reductions, one base case — recursion did the algebra that three integrations by parts would have.',
      },
      {
        title: 'Reading CAS output critically',
        problem: 'A CAS returns $\\dfrac{\\sqrt{\\pi}}{2}\\operatorname{erf}(x)$ for $\\displaystyle\\int e^{-x^{2}}dx$. Interpret the answer, verify it, and evaluate $\\displaystyle\\int_{0}^{1} e^{-x^{2}}dx$.',
        steps: [
          { label: 'Step 1: Interpret the symbol', text: 'The answer names the obstacle: $\\operatorname{erf}$ is the error function, defined by the very integral in question: $\\operatorname{erf}(x) = \\frac{2}{\\sqrt{\\pi}}\\int_{0}^{x} e^{-t^{2}}dt$. The CAS is not evading the problem — it is telling you the antiderivative is non-elementary.' },
          { label: 'Step 2: Verify with the Fundamental Theorem', text: 'Since $\\operatorname{erf}$ is defined as an integral with variable upper limit, $\\frac{d}{dx}\\operatorname{erf}(x) = \\frac{2}{\\sqrt{\\pi}}e^{-x^{2}}$ by the Fundamental Theorem — so $\\frac{\\sqrt{\\pi}}{2}\\operatorname{erf}(x)$ differentiates to exactly $e^{-x^{2}}$, and the answer is correct.' },
          { label: 'Step 3: Use it for the definite integral', text: '$$\\int_{0}^{1} e^{-x^{2}}dx = \\frac{\\sqrt{\\pi}}{2}\\left(\\operatorname{erf}(1) - \\operatorname{erf}(0)\\right) = \\frac{\\sqrt{\\pi}}{2}\\operatorname{erf}(1),$$ since $\\operatorname{erf}(0) = 0$.' },
          { label: 'Step 4: Translate to a number', text: 'From tables or numerical integration, $\\operatorname{erf}(1) \\approx 0.8427$, giving $\\int_{0}^{1} e^{-x^{2}}dx \\approx 0.7468$.' },
          { label: 'Step 5: Note the broader picture', text: 'The full Gaussian integral $\\int_{-\\infty}^{\\infty} e^{-x^{2}}dx = \\sqrt{\\pi}$ is evaluated by a spectacular polar-coordinates trick in Chapter 15 — the exception that proves the rule that these integrals resist one-variable elementary methods.' },
        ],
        result: 'The CAS answer is a correct, self-consistent definition in disguise. The lesson: read special-function output as a classification of the integral, verify it with the FTC, and switch to numerical methods (Section 7.7) when a decimal value is needed.',
      },
    ],
    keyTakeaways: [
      'Table entries are patterns with parameters; a small substitution and constant adjustment are the usual bridge to a match.',
      'Reduction formulas express an integral via a simpler member of its family — apply recursively to a base case.',
      'CAS strengths: algebra-heavy partial fractions, simplification, and definite integrals by high-precision numerics.',
      'CAS answers can differ by constants or forms and may invoke special functions — always verify by differentiating.',
      '$\\int e^{-x^{2}}dx = \\frac{\\sqrt{\\pi}}{2}\\operatorname{erf}(x) + C$ is the canonical non-elementary antiderivative — the error function is defined by the integral itself.',
      'Verification by differentiation is the universal warranty on any looked-up or machine-generated answer.',
    ],
    quiz: [
      {
        q: 'A reduction formula:',
        options: ['Expresses an integral in terms of a simpler one from the same family', 'Approximates a definite integral numerically', 'Splits a rational function into partial fractions', 'Computes an error bound'],
        answer: 0,
        explanation: 'Each application lowers the relevant exponent until a base case — like $\\int \\ln x\\,dx$ — finishes the job.',
      },
      {
        q: 'One CAS returns $\\tfrac{1}{2}\\sin^{2}x + C$ and another returns $-\\tfrac{1}{2}\\cos^{2}x + C$ for the same integral. This means:',
        options: ['One of them is wrong', 'Both are correct — the answers differ by a constant', 'The integral does not exist', 'CAS software cannot integrate trigonometric functions'],
        answer: 1,
        explanation: '$\\frac{1}{2}\\sin^{2}x = -\\frac{1}{2}\\cos^{2}x + \\frac{1}{2}$, and a constant offset is absorbed by $C$.',
      },
      {
        q: 'By its definition, $\\dfrac{d}{dx}\\operatorname{erf}(x)$ equals:',
        options: [`$\\dfrac{2}{\\sqrt{\\pi}}e^{-x^{2}}$`, `$e^{-x^{2}}$`, `$\\sqrt{\\pi}\\,e^{-x^{2}}$`, `$\\dfrac{\\sin x}{x}$`],
        answer: 0,
        explanation: 'The error function is an integral with a variable upper limit, so the Fundamental Theorem differentiates it directly.',
      },
      {
        q: 'Before a table entry such as $\\int \\frac{du}{\\sqrt{u^{2}+a^{2}}}$ can be used, you typically must:',
        options: ['Adjust constants and make a small substitution so the integral matches the pattern exactly', 'Differentiate the integrand', 'Compute an error bound', 'Factor the denominator into linear terms'],
        answer: 0,
        explanation: 'Matching is the skill: choose $u$, pull constants through, and identify the parameter $a$.',
      },
      {
        q: 'The integral $\\displaystyle\\int e^{-x^{2}}dx$ is:',
        options: ['Non-elementary — expressed through the special function $\\operatorname{erf}$', 'Equal to $\\frac{e^{-x^{2}}}{-2x} + C$', 'A logarithm after trigonometric substitution', 'Elementary after integration by parts'],
        answer: 0,
        explanation: 'No finite combination of elementary functions works — mathematics names the answer instead.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.7
  {
    sectionId: 'calc-ch7-s7',
    readingTime: 11,
    intro: 'The Fundamental Theorem fails exactly when it is needed most: $e^{-x^{2}}$ has no elementary antiderivative, and half of applied mathematics integrates measured data, not formulas. Numerical integration fills the gap — midpoint rectangles, trapezoids and Simpson’s parabolic arcs — and each rule ships with an explicit error bound that tells you how large $n$ must be before the answer deserves your trust.',
    objectives: [
      'Compute Midpoint, Trapezoidal and Simpson approximations for a given $n$',
      'Apply the error-bound theorems with a bound $K$ on $|f\'\'|$ or $|f^{(4)}|$',
      'Determine the $n$ required to meet a prescribed accuracy',
      'Explain why Simpson’s rule is exact for cubics and errors of opposite sign for the other rules',
      'Apply the trapezoidal rule to tabulated data',
    ],
    concepts: [
      {
        term: 'Why approximate at all',
        kind: 'insight',
        statement: 'Two situations force numerical integration: the antiderivative is **non-elementary** ($e^{-x^{2}}$, $\\frac{\\sin x}{x}$), or the integrand is **known only as data** — laboratory readings, sensor output, survey measurements. Approximation is not a retreat; it is the method of last resort that always works.',
        detail: 'Even when an elementary antiderivative exists, numerical integration serves as an independent check on symbol-heavy work. The rules in this section are also the intellectual ancestors of the numerical methods used throughout scientific computing — the same trade of accuracy for computability.',
      },
      {
        term: 'The Midpoint Rule',
        kind: 'method',
        statement: 'With $\\Delta x = \\frac{b - a}{n}$ and midpoints $\\bar{x}_{i} = \\frac{1}{2}(x_{i-1} + x_{i})$: $$M_{n} = \\Delta x\\left[f(\\bar{x}_{1}) + f(\\bar{x}_{2}) + \\cdots + f(\\bar{x}_{n})\\right].$$ Sample each subinterval exactly in the middle and build the rectangle.',
        detail: 'Sampling at the midpoint makes overestimates on one half of each subinterval cancel underestimates on the other half — which is why the midpoint rule is roughly **twice as accurate** as the trapezoidal rule and errs in the **opposite direction**.',
      },
      {
        term: 'The Trapezoidal Rule',
        kind: 'method',
        statement: 'Join successive sample points with line segments: $$T_{n} = \\frac{\\Delta x}{2}\\left[f(x_{0}) + 2f(x_{1}) + 2f(x_{2}) + \\cdots + 2f(x_{n-1}) + f(x_{n})\\right].$$',
        detail: 'The trapezoidal rule is the **average of the left and right endpoint sums** from Chapter 5: $T_{n} = \\frac{1}{2}(L_{n} + R_{n})$. The coefficient pattern 1, 2, 2, $\\ldots$, 2, 1 — endpoints once, interior nodes twice — is the fingerprint to memorize. On a concave-up function, every chord lies above the curve, so $T_{n}$ overestimates; on concave-down, it underestimates.',
      },
      {
        term: 'Simpson’s Rule',
        kind: 'method',
        statement: 'For an **even** number $n$ of subintervals, fit parabolas through consecutive triples of points: $$S_{n} = \\frac{\\Delta x}{3}\\left[f(x_{0}) + 4f(x_{1}) + 2f(x_{2}) + 4f(x_{3}) + \\cdots + 2f(x_{n-2}) + 4f(x_{n-1}) + f(x_{n})\\right].$$ The coefficient pattern is 1, 4, 2, 4, 2, $\\ldots$, 4, 1.',
        detail: 'A parabola through three points beats a chord through two, and Simpson’s rule is the weighted average of those parabolic pieces: the odd-indexed points carry weight 4 because each belongs to two parabolas, the even interior points weight 2 for the same reason. A remarkable identity connects the rules: $S_{n} = \\frac{2M_{n} + T_{n}}{3}$ — Simpson is the weighted blend that cancels the leading errors of both simpler rules.',
      },
      {
        term: 'Error-bound theorems',
        kind: 'theorem',
        statement: 'If $|f\'\'(x)| \\le K$ on $[a, b]$, then $$|E_{T}| \\le \\frac{K(b - a)^{3}}{12n^{2}}, \\qquad |E_{M}| \\le \\frac{K(b - a)^{3}}{24n^{2}}.$$ If $|f^{(4)}(x)| \\le K$ on $[a, b]$, then $$|E_{S}| \\le \\frac{K(b - a)^{5}}{180n^{4}}.$$',
        detail: 'The bounds are computable **without knowing the true value of the integral** — $K$ comes from maximizing a derivative, not from the answer. The exponents are the headline: the midpoint and trapezoid errors fall like $1/n^{2}$ (doubling $n$ quarters the error), while Simpson’s falls like $1/n^{4}$ (doubling $n$ improves accuracy sixteenfold).',
      },
      {
        term: 'Which rule when',
        kind: 'insight',
        statement: 'Midpoint and trapezoid errors have **opposite signs** (midpoint underestimates when trapezoid overestimates on concave-up data), with the midpoint bound half the size. Simpson is dramatically better: exact for every polynomial of degree at most 3, because the error involves $f^{(4)}$, which vanishes for cubics.',
        detail: 'Simpson’s exactness on cubics from parabolas sounds paradoxical until you notice the symmetry: over each pair of subintervals the cubic term contributes equally on both halves, and the weighted Simpson average cancels it exactly. This bonus accuracy is why Simpson’s rule is the default in numerical libraries.',
      },
    ],
    examples: [
      {
        title: 'All three rules on one integral',
        problem: 'Approximate $\\displaystyle\\int_{0}^{2} x^{3}\\,dx$ with $n = 4$ using the Midpoint, Trapezoidal and Simpson’s rules, compute the exact errors, and check the error bounds.',
        steps: [
          { label: 'Step 1: Exact value and grid', text: 'The true value is $\\int_{0}^{2}x^{3}dx = \\frac{x^{4}}{4}\\Big|_{0}^{2} = 4$. With $n = 4$, $\\Delta x = 0.5$: nodes at $0, 0.5, 1, 1.5, 2$ and midpoints at $0.25, 0.75, 1.25, 1.75$.' },
          { label: 'Step 2: Trapezoidal rule', text: '$$T_{4} = \\frac{0.5}{2}\\left[0 + 2(0.125) + 2(1) + 2(3.375) + 8\\right] = 0.25 \\times 17 = 4.25.$$ Error $= +0.25$ — an overestimate, as expected on a concave-up function.' },
          { label: 'Step 3: Midpoint rule', text: 'Cubes of the midpoints: $0.015625, 0.421875, 1.953125, 5.359375$, summing to $7.75$, so $$M_{4} = 0.5 \\times 7.75 = 3.875.$$ Error $= -0.125$ — an underestimate of exactly half the trapezoid magnitude and the opposite sign.' },
          { label: 'Step 4: Simpson’s rule', text: '$$S_{4} = \\frac{0.5}{3}\\left[0 + 4(0.125) + 2(1) + 4(3.375) + 8\\right] = \\frac{1}{6}(24) = 4.$$ Error $= 0$ — Simpson’s rule is exact on cubics.' },
          { label: 'Step 5: Verify the Simpson identity', text: '$\\frac{2M_{4} + T_{4}}{3} = \\frac{7.75 + 4.25}{3} = \\frac{12}{3} = 4 = S_{4}$ — Simpson is precisely the blend that cancels the two leading errors.' },
          { label: 'Step 6: Check the error bounds', text: '$f\'\'(x) = 6x \\le 12$ on $[0, 2]$, so $K = 12$: $|E_{T}| \\le \\frac{12 \\cdot 8}{12 \\cdot 16} = 0.5$ (actual 0.25) and $|E_{M}| \\le \\frac{12 \\cdot 8}{24 \\cdot 16} = 0.25$ (actual 0.125). For Simpson, $f^{(4)}(x) = 0$, so $K = 0$ gives $|E_{S}| \\le 0$ — the bound itself proves exactness.' },
        ],
        result: '$T_{4} = 4.25$, $M_{4} = 3.875$, $S_{4} = 4$ exactly. All actual errors sit at half their bounds, the midpoint error is half the trapezoid error with opposite sign, and Simpson annihilates the problem.',
      },
      {
        title: 'Choosing $n$ for a target accuracy',
        problem: 'How large must $n$ be to guarantee that the Midpoint and Trapezoidal approximations of $\\displaystyle\\int_{0}^{1} e^{-x^{2}}dx$ have error at most $0.001$?',
        steps: [
          { label: 'Step 1: Establish the bound on $f\'\'$', text: 'For $f(x) = e^{-x^{2}}$: $f\'\'(x) = (4x^{2} - 2)e^{-x^{2}}$. On $[0, 1]$ its magnitude is largest at $x = 0$, where it equals 2, so take $K = 2$.' },
          { label: 'Step 2: Apply the midpoint bound', text: '$$|E_{M}| \\le \\frac{2(1 - 0)^{3}}{24n^{2}} = \\frac{1}{12n^{2}} \\le 0.001 \\implies n^{2} \\ge \\frac{1000}{12} \\approx 83.3 \\implies n \\ge 9.13.$$ Take $n = 10$.' },
          { label: 'Step 3: Apply the trapezoidal bound', text: '$$|E_{T}| \\le \\frac{2}{12n^{2}} \\le 0.001 \\implies n^{2} \\ge \\frac{2000}{12} \\approx 166.7 \\implies n \\ge 12.9.$$ Take $n = 13$.' },
          { label: 'Step 4: Perspective from Simpson', text: 'Since $f^{(4)}(x) = (16x^{4} - 48x^{2} + 12)e^{-x^{2}}$ is at most 12 in magnitude on $[0, 1]$ (its value at $x = 0$), Simpson needs only $\\frac{12}{180n^{4}} \\le 0.001$, that is $n \\ge 2.86$, so **four** subintervals suffice — a vivid display of the $1/n^{4}$ error decay.' },
          { label: 'Step 5: State the result', text: 'Midpoint: $n = 10$; trapezoidal: $n = 13$; and the true value is approximately $0.746824$, obtained with either choice.' },
        ],
        result: 'Ten midpoint or thirteen trapezoid subintervals — or just four Simpson subintervals — guarantee three-decimal accuracy. The bounds decide $n$ in advance, with no need to know the true integral.',
      },
      {
        title: 'Integrating measured data',
        problem: 'A runner’s velocity (meters per second) is recorded every 2 seconds over a 10-second sprint: $v = 38, 41, 46, 44, 37, 32$ at $t = 0, 2, 4, 6, 8, 10$. Estimate the total distance traveled.',
        steps: [
          { label: 'Step 1: Recognize the situation', text: 'The integrand exists only as a table — no formula, no antiderivative. With $\\Delta t = 2$ and $n = 5$, the trapezoidal rule is the natural tool because it needs exactly the recorded values.' },
          { label: 'Step 2: Apply the pattern 1, 2, 2, 2, 2, 1', text: `$$T_{5} = \\frac{2}{2}\\left[38 + 2(41) + 2(46) + 2(44) + 2(37) + 32\\right].$$` },
          { label: 'Step 3: Compute', text: 'The interior contribution is $2(41 + 46 + 44 + 37) = 336$, so $T_{5} = 38 + 336 + 32 = 406$ meters.' },
          { label: 'Step 4: Note what cannot be done', text: 'The midpoint rule is unavailable — it would require velocities at $t = 1, 3, 5, 7, 9$, which were never measured. This is the standard fate of tabulated data: only endpoint-based rules apply.' },
          { label: 'Step 5: Improve the measurement, not the formula', text: 'To improve accuracy you double the sampling rate: the error bound $|E_{T}| \\le \\frac{K(b-a)^{3}}{12n^{2}}$ shows that halving the time step quarters the error — better instruments, better integral.' },
        ],
        result: 'The runner covers approximately **406 meters** in the 10-second sprint. Numerical integration turns a handful of measurements into a distance — the essence of experimental science.',
      },
    ],
    keyTakeaways: [
      'Approximate when the antiderivative is non-elementary or the integrand exists only as data.',
      'Midpoint: sample at the centers, $M_{n} = \\Delta x \\sum f(\\bar{x}_{i})$; Trapezoid: average the endpoint sums with the 1, 2, $\\ldots$, 2, 1 pattern.',
      'Simpson (even $n$): parabolic pieces with the 1, 4, 2, 4, $\\ldots$, 4, 1 pattern, and the identity $S_{n} = \\frac{2M_{n} + T_{n}}{3}$.',
      'Error bounds: $|E_{T}| \\le \\frac{K(b-a)^{3}}{12n^{2}}$ and $|E_{M}| \\le \\frac{K(b-a)^{3}}{24n^{2}}$ with $K \\ge |f\'\'|$, and $|E_{S}| \\le \\frac{K(b-a)^{5}}{180n^{4}}$ with $K \\ge |f^{(4)}|$.',
      'Midpoint and trapezoid errors are opposite in sign, with the midpoint bound half as large; Simpson is exact for all cubics.',
      'For tabulated data only endpoint-based rules apply — and halving the step size squares the improvement.',
    ],
    quiz: [
      {
        q: 'The coefficient pattern of the Trapezoidal Rule is:',
        options: ['1, 4, 2, 4, $\\ldots$, 4, 1', 'All ones', '1, 2, 2, $\\ldots$, 2, 1', 'Alternating 1 and 0'],
        answer: 2,
        explanation: 'Interior nodes are shared by two trapezoids and counted twice; endpoints belong to one each.',
      },
      {
        q: 'Simpson’s Rule requires:',
        options: ['An odd number of subintervals', 'Any number of subintervals', 'An even number of subintervals', 'Exactly two subintervals'],
        answer: 2,
        explanation: 'Parabolas are fitted through consecutive triples, so the subintervals must pair up.',
      },
      {
        q: 'The error bound $|E_{T}| \\le \\dfrac{K(b-a)^{3}}{12n^{2}}$ uses a $K$ that bounds:',
        options: ['$|f\'\'|$ on $[a, b]$', `$|f|$ on $[a, b]$`, 'The maximum of $f\'$', `$f(a) - f(b)$`],
        answer: 0,
        explanation: 'The trapezoid and midpoint bounds come from the second derivative; Simpson’s involves the fourth.',
      },
      {
        q: 'Simpson’s rule computes $\\int_{0}^{2}x^{3}dx$ exactly because:',
        options: ['The rule is exact for all functions', 'It is exact for all polynomials of degree at most 3, since $f^{(4)} = 0$ for cubics', 'Cubics are always increasing', 'The interval is short'],
        answer: 1,
        explanation: 'The error bound involves $f^{(4)}$, which vanishes identically for cubics — parabolas integrate cubics perfectly over paired subintervals.',
      },
      {
        q: 'On a concave-up integrand, the Midpoint and Trapezoidal errors typically have:',
        options: ['The same sign', 'Opposite signs, with the midpoint magnitude about half', 'Both zero', 'No predictable relationship'],
        answer: 1,
        explanation: 'Chords lie above the curve while midpoint rectangles clip below it — overestimates and underestimates of comparable, opposite sizes.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.8
  {
    sectionId: 'calc-ch7-s8',
    readingTime: 10,
    intro: 'An integral over an infinite interval, or of a function that blows up inside the interval, is defined as the limit of ordinary integrals — and that limit may fail to exist. This section evaluates improper integrals of both types, catalogs the p-integrals that settle convergence at a glance, and develops the Comparison Theorem that decides convergence even when no antiderivative exists.',
    objectives: [
      'Define Type 1 improper integrals and evaluate them as limits',
      'Handle Type 2 integrals with discontinuities at endpoints or interior points',
      'Use the p-integral tests for $\\int_{1}^{\\infty}$ and $\\int_{0}^{1}$',
      'Apply the Comparison Theorem to nonnegative integrands',
      'Interpret convergence geometrically as a finite area under an infinite tail',
    ],
    concepts: [
      {
        term: 'Type 1: infinite intervals',
        kind: 'definition',
        statement: '$$\\int_{a}^{\\infty} f(x)\\,dx = \\lim_{t \\to \\infty} \\int_{a}^{t} f(x)\\,dx,$$ provided the limit exists and is finite — in which case the integral **converges**; otherwise it **diverges**. For $\\int_{-\\infty}^{\\infty} f(x)\\,dx$, both $\\int_{-\\infty}^{c}$ and $\\int_{c}^{\\infty}$ must separately converge.',
        detail: 'The definition is pure Chapter 2 limit machinery bolted onto Chapter 5 integrals. Splitting the two-sided integral into two independent halves matters: a symmetric cancellation like $\\lim_{t\\to\\infty}\\int_{-t}^{t}x\\,dx = 0$ does **not** count as convergence — each tail must be finite on its own.',
      },
      {
        term: 'Type 2: discontinuous integrands',
        kind: 'definition',
        statement: 'If $f$ has an infinite discontinuity at $b$, then $\\int_{a}^{b} f(x)\\,dx = \\lim_{t \\to b^{-}} \\int_{a}^{t} f(x)\\,dx$. If the discontinuity sits at an interior point $c$, the integral **splits**: both $\\int_{a}^{c}$ and $\\int_{c}^{b}$ must converge for the whole to converge.',
        detail: 'The interior split is where disasters hide: $\\int_{-1}^{1} \\frac{dx}{x^{2}}$ looks like $-\\frac{1}{x}\\Big|_{-1}^{1} = -2$ by careless Fundamental Theorem, but the integrand blows up at 0 — each half in fact diverges to $+\\infty$, so the integral diverges. Always inspect the integrand on the interval before integrating.',
      },
      {
        term: 'p-integrals over infinite intervals',
        kind: 'theorem',
        statement: '$$\\int_{1}^{\\infty} \\frac{dx}{x^{p}} \\text{ converges if and only if } p > 1.$$ For $p > 1$ the value is $\\frac{1}{p - 1}$; for $p \\le 1$ the integral diverges.',
        detail: 'The computation: $\\int_{1}^{t} x^{-p}dx = \\frac{t^{1-p} - 1}{1 - p}$ for $p \\ne 1$, and $t^{1-p} \\to 0$ exactly when $1 - p < 0$. The borderline case $p = 1$ is $\\ln t \\to \\infty$: the harmonic tail diverges, but just barely — a harbinger of the delicate borderline tests for series in Chapter 11.',
      },
      {
        term: 'p-integrals over finite intervals',
        kind: 'theorem',
        statement: '$$\\int_{0}^{1} \\frac{dx}{x^{p}} \\text{ converges if and only if } p < 1.$$ The mirror image: near zero, large $p$ makes the blow-up too violent to integrate.',
        detail: 'The computation is the same power rule with the limit taken at $0$ instead of infinity, and the inequality flips: the region under $x^{-1/2}$ near the origin has finite area ($2$), while $x^{-2}$ does not. A function can thus be integrable at one singularity scale and not another — the exponent, not the blow-up itself, is what matters.',
      },
      {
        term: 'The Comparison Theorem',
        kind: 'theorem',
        statement: 'Suppose $0 \\le f(x) \\le g(x)$ for $x \\ge a$. If $\\int_{a}^{\\infty} g(x)\\,dx$ converges, then $\\int_{a}^{\\infty} f(x)\\,dx$ converges; if $\\int_{a}^{\\infty} f(x)\\,dx$ diverges, then $\\int_{a}^{\\infty} g(x)\\,dx$ diverges.',
        detail: 'A smaller function under a bigger one with finite area must itself have finite area — the intuition is instant, and the proof is a limit comparison of partial integrals. The theorem is the direct ancestor of the comparison tests for infinite series in Chapter 11, where the same small-versus-large logic returns.',
      },
      {
        term: 'Using comparison well',
        kind: 'method',
        statement: 'To test $\\int_{a}^{\\infty} f$: dominate or bound $f$ by a multiple of a pure power of $x$ — drop lower-order terms in the denominator to find the comparison. Conclude convergence when the dominating p-integral has $p > 1$, divergence when the dominated p-integral has $p \\le 1$.',
        detail: 'For example, $\\frac{1}{x^{3} + \\sqrt{x}} \\le \\frac{1}{x^{3}}$ on $[1, \\infty)$, which converges — the big term $x^{3}$ controls; while $\\frac{1}{\\sqrt{1 + x}} \\ge \\frac{1}{\\sqrt{2x}}$ on $[1, \\infty)$, which diverges. The skill is identifying which single term of a sum controls the decay rate.',
      },
    ],
    examples: [
      {
        title: 'Type 1: two tails that disagree',
        problem: 'Evaluate (a) $\\displaystyle\\int_{1}^{\\infty} \\frac{dx}{x^{2}}$, (b) $\\displaystyle\\int_{1}^{\\infty} \\frac{dx}{x}$, and (c) $\\displaystyle\\int_{0}^{\\infty} e^{-x}\\,dx$.',
        steps: [
          { label: 'Step 1: Set up (a) as a limit', text: `$$\\int_{1}^{\\infty} \\frac{dx}{x^{2}} = \\lim_{t \\to \\infty} \\int_{1}^{t} x^{-2}\\,dx = \\lim_{t \\to \\infty}\\left[-\\frac{1}{x}\\right]_{1}^{t} = \\lim_{t \\to \\infty}\\left(-\\frac{1}{t} + 1\\right) = 1.$$` },
          { label: 'Step 2: Interpret', text: 'An infinitely long region under $1/x^{2}$ has finite area 1 — the tail thins out fast enough that the area stops growing.' },
          { label: 'Step 3: Set up (b)', text: `$$\\int_{1}^{\\infty} \\frac{dx}{x} = \\lim_{t \\to \\infty} \\left[\\ln x\\right]_{1}^{t} = \\lim_{t \\to \\infty} \\ln t = \\infty.$$` },
          { label: 'Step 4: Interpret the contrast', text: 'Thinning from $x^{2}$ to $x$ — one power of the exponent — changes the verdict completely: the harmonic tail accumulates area without bound. This is the $p = 1$ borderline of the p-integral test.' },
          { label: 'Step 5: Evaluate the exponential tail (c)', text: `$$\\int_{0}^{\\infty} e^{-x}\\,dx = \\lim_{t \\to \\infty}\\left[-e^{-x}\\right]_{0}^{t} = \\lim_{t \\to \\infty}\\left(-e^{-t} + 1\\right) = 1.$$` },
        ],
        result: '(a) converges to 1; (b) diverges; (c) converges to 1. Exponential decay is always summable, polynomial decay needs $p > 1$, and the borderline $p = 1$ diverges.',
      },
      {
        title: 'Type 2: singularities at the endpoint',
        problem: 'Evaluate (a) $\\displaystyle\\int_{0}^{1} \\frac{dx}{\\sqrt{x}}$ and (b) $\\displaystyle\\int_{0}^{1} \\frac{dx}{x^{2}}$.',
        steps: [
          { label: 'Step 1: Recognize the improperness in both', text: 'Each integrand blows up at $x = 0$, an endpoint of the interval — Type 2, handled by a one-sided limit $t \\to 0^{+}$.' },
          { label: 'Step 2: Set up (a)', text: `$$\\int_{0}^{1} x^{-1/2}\\,dx = \\lim_{t \\to 0^{+}} \\int_{t}^{1} x^{-1/2}\\,dx = \\lim_{t \\to 0^{+}} \\left[2\\sqrt{x}\\right]_{t}^{1} = \\lim_{t \\to 0^{+}}\\left(2 - 2\\sqrt{t}\\right) = 2.$$` },
          { label: 'Step 3: Set up (b)', text: `$$\\int_{0}^{1} x^{-2}\\,dx = \\lim_{t \\to 0^{+}}\\left[-\\frac{1}{x}\\right]_{t}^{1} = \\lim_{t \\to 0^{+}}\\left(-1 + \\frac{1}{t}\\right) = \\infty.$$` },
          { label: 'Step 4: Compare with the p-integral test', text: 'Case (a) is $p = \\tfrac{1}{2} < 1$: convergent with value $\\frac{1}{1 - p} = 2$ — matching. Case (b) is $p = 2 > 1$: divergent, exactly as the theorem states for the finite-interval flavor.' },
        ],
        result: 'The $x^{-1/2}$ spike integrates to 2; the $x^{-2}$ spike diverges. Near a blow-up, mild singularities have finite area and violent ones do not — with $p = 1$ again the knife edge.',
      },
      {
        title: 'Comparison: convergence without an antiderivative',
        problem: 'Determine, without evaluating, whether (a) $\\displaystyle\\int_{1}^{\\infty} e^{-x^{2}}dx$ and (b) $\\displaystyle\\int_{1}^{\\infty} \\frac{dx}{\\sqrt{1 + x}}$ converge or diverge.',
        steps: [
          { label: 'Step 1: Build the comparison for (a)', text: 'For $x \\ge 1$ we have $x^{2} \\ge x$, so $e^{-x^{2}} \\le e^{-x}$, and all quantities are nonnegative — the Comparison Theorem applies.' },
          { label: 'Step 2: Verify the majorant converges', text: 'From the first example, $\\int_{1}^{\\infty} e^{-x}dx = e^{-1}$ — finite. Therefore $\\int_{1}^{\\infty} e^{-x^{2}}dx$ converges, squeezed under a convergent exponential tail.' },
          { label: 'Step 3: Build the comparison for (b)', text: 'For $x \\ge 1$, $1 + x \\le 2x$, so $\\sqrt{1 + x} \\le \\sqrt{2x} = \\sqrt{2}\\,\\sqrt{x}$, which flips when reciprocated: $\\dfrac{1}{\\sqrt{1 + x}} \\ge \\dfrac{1}{\\sqrt{2}} \\cdot \\dfrac{1}{\\sqrt{x}}$.' },
          { label: 'Step 4: Verify the minorant diverges', text: 'The comparison integral $\\frac{1}{\\sqrt{2}}\\int_{1}^{\\infty} x^{-1/2}dx$ is a p-integral with $p = \\tfrac{1}{2} \\le 1$: it diverges. A nonnegative function sitting above a divergent integral diverges itself.' },
          { label: 'Step 5: Interpret', text: 'No antiderivative of $e^{-x^{2}}$ or of $\\frac{1}{\\sqrt{1+x}}$-style sums was ever needed: inequalities alone settled both questions. Note the full Gaussian integral $\\int_{-\\infty}^{\\infty}e^{-x^{2}}dx = \\sqrt{\\pi}$, evaluated by the polar-coordinates trick of Chapter 15, extends this convergence to the whole line.' },
        ],
        result: '(a) converges by comparison with $e^{-x}$; (b) diverges by comparison with the p-integral at $p = \\tfrac{1}{2}$. The Comparison Theorem delivers verdicts precisely where the Fundamental Theorem has nothing to say.',
      },
    ],
    keyTakeaways: [
      'Improper integrals are limits of ordinary ones: Type 1 sends an endpoint to infinity, Type 2 approaches a discontinuity.',
      'Convergence means the limit exists and is finite; two-sided infinite integrals split into two independent halves that must both converge.',
      'An interior singularity forces a split — integrating straight through it produces nonsense (the $\\int_{-1}^{1}x^{-2}$ trap).',
      'p-integrals: $\\int_{1}^{\\infty} x^{-p}$ converges exactly when $p > 1$; $\\int_{0}^{1} x^{-p}$ exactly when $p < 1$ — the same exponent, opposite verdicts at opposite singularities.',
      'The Comparison Theorem: smaller than a convergent integral means convergent; larger than a divergent one means divergent — nonnegativity required.',
      'Comparison logic is the direct ancestor of the series tests of Chapter 11, where the same p-threshold reappears.',
    ],
    quiz: [
      {
        q: '$\\displaystyle\\int_{1}^{\\infty} \\frac{dx}{x^{p}}$ converges when:',
        options: [`$p > 1$`, `$p < 1$`, `$p = 1$`, 'Always'],
        answer: 0,
        explanation: 'The tail thins fast enough only when the exponent exceeds 1; the value is then $\\frac{1}{p-1}$.',
      },
      {
        q: '$\\displaystyle\\int_{0}^{1} \\frac{dx}{x^{p}}$ converges when:',
        options: [`$p > 1$`, `$p < 1$`, `$p = 1$`, 'Never'],
        answer: 1,
        explanation: 'At a blow-up the roles flip: mild singularities ($p < 1$) have finite area, violent ones do not.',
      },
      {
        q: 'If $f$ has an infinite discontinuity at an interior point $c$ of $[a, b]$, then:',
        options: ['The integral automatically diverges', 'The integral splits at $c$ and converges only if both halves converge', 'The integral equals $f(b) - f(a)$ regardless', 'The value is defined as 0'],
        answer: 1,
        explanation: 'Each side of the singularity is an independent improper integral; both must be finite.',
      },
      {
        q: 'By the Comparison Theorem, $\\displaystyle\\int_{1}^{\\infty} e^{-x^{2}}dx$ converges because:',
        options: ['$0 \\le e^{-x^{2}} \\le e^{-x}$ on $[1, \\infty)$ and $\\int_{1}^{\\infty}e^{-x}dx$ converges', '$e^{-x^{2}}$ has an elementary antiderivative', 'The integrand is sometimes negative', `$x^{2}$ grows faster than $e^{x}$`],
        answer: 0,
        explanation: 'For $x \\ge 1$, $x^{2} \\ge x$ makes $e^{-x^{2}} \\le e^{-x}$, and the smaller function inherits the convergent tail’s finiteness.',
      },
      {
        q: 'The integral $\\displaystyle\\int_{-1}^{1} \\frac{dx}{x^{2}}$:',
        options: ['Equals $-2$ by the Fundamental Theorem', 'Equals 0 by symmetry', 'Equals 2', 'Diverges — the singularity at 0 splits it into two divergent halves'],
        answer: 3,
        explanation: 'Each one-sided piece $\\lim_{t \\to 0^{+}}\\int_{t}^{1}x^{-2}dx$ is infinite; the naive antiderivative evaluation ignores the interior blow-up.',
      },
      // PYQ-pattern — p-integral at infinity (rephrased, values changed)
      {
        q: 'The improper integral $\\displaystyle\\int_{1}^{\\infty} \\frac{dx}{x^{3}}$:',
        options: ['Diverges to $\\infty$', 'Equals $1$', 'Converges to $\\frac{1}{2}$', 'Equals $0$'],
        answer: 2,
        explanation: 'Step 1: Restate the integral as the limit $\\lim_{t \\to \\infty}\\int_{1}^{t}x^{-3}\\,dx$. Step 2: Recall the key $p$-rule that $\\int_{1}^{\\infty}x^{-p}\\,dx$ converges exactly when $p > 1$. Step 3: Antidifferentiate to $\\left[\\frac{x^{-2}}{-2}\\right]_{1}^{t} = \\frac{1}{2} - \\frac{1}{2t^{2}}$. Step 4: Let $t \\to \\infty$ to obtain $\\frac{1}{2}$. Step 5: The distractors fail since divergence needs $p \\leq 1$, $1$ is the value for $p = 2$ misremembered, and $0$ ignores the finite area near $1$. Step 6: Hence the integral converges to $\\frac{1}{2}$.'
      },
      // PYQ-pattern — p-integral at zero (rephrased, values changed)
      {
        q: 'The improper integral $\\displaystyle\\int_{0}^{1} \\frac{dx}{\\sqrt{x}}$:',
        options: ['Diverges', `$2$`, `$1$`, `$0$`],
        answer: 1,
        explanation: 'Step 1: Restate the integral as $\\lim_{t \\to 0^{+}}\\int_{t}^{1}x^{-\\frac{1}{2}}\\,dx$ with a singularity at $0$. Step 2: Recall the key $p$-rule at zero that $\\int_{0}^{1}x^{-p}\\,dx$ converges exactly when $p < 1$. Step 3: Here $p = \\frac{1}{2} < 1$, so convergence is assured. Step 4: Integrate to $\\left[2\\sqrt{x}\\right]_{t}^{1} = 2 - 2\\sqrt{t}$ and let $t \\to 0^{+}$ to get $2$. Step 5: The divergence distractor reverses the $p$-test, $1$ halves the antiderivative constant, and $0$ confuses area with the integrand value at $1$. Step 6: Therefore the integral converges to $2$.'
      },
    ],
  },
]

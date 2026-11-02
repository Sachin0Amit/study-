/**
 * Knowledge Universe — Mathematics — Chapter 03: Calculus
 * 5 lessons · ~14,933 words (§3.2 rewritten 2026-11-02 to textbook standard: 1,530 → 6,021 words, figure plate + 2 derivations; §3.4 rewritten 2026-11-02: 983 → 3,416 words)
 * field: Calculus
 * legacy sources: mathematics.ts, x27-ap-calc-china-pass.ts, x63-cengage-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Calculus]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 calc-removing-discontinuities — Removing Discontinuities: Finding and Filling the Holes
 *   03.2 calc-linearization-differentials — Linearization and Differentials: The Tangent as a Calculator
 *   03.3 calc-concavity-second-derivative-test — Concavity and the Second Derivative Test
 *   03.4 math-derivative-as-limit — The Derivative as a Limit
 *   03.5 calc-definite-integral-properties — Properties of Definite Integrals: Reflection, Periodicity and the Leibniz Rule
 */
import type { KnowledgeTopic } from '../../types'

export const mathematicsUnifiedCh03: KnowledgeTopic[] = [
  {
    id: 'calc-removing-discontinuities',
    title: 'Removing Discontinuities: Finding and Filling the Holes',
    domain: 'Mathematics',
    field: 'Calculus',
    branch: 'Differential Calculus',
    tier: 'intermediate',
    concepts: [
      'Three conditions for continuity at a point',
      'Removable versus non-removable discontinuities',
      'Redefining a function to fill a hole',
      'Cancelling common factors to expose the limit',
      'Confirming continuity after the repair',
      'Jump and infinite discontinuities cannot be patched',
    ],
    words: 1728,
    readMins: 9,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Limits tell you where a function is heading; continuity asks whether it actually arrives. The syllabus treats this as a diagnostic skill: given a function, locate every point of discontinuity, classify each one, and — where the discontinuity is removable — repair the function by redefining a single value. That final step, redefining the function to fill a hole, is the distinctive move of this topic. It converts an abstract limit computation into a concrete construction: you write down a slightly enlarged function that agrees with the original everywhere except one point, and at that one point takes the value the limit demands.',
      },
      {
        kind: 'para',
        text: 'The classification matters because it tells you which repairs are possible. A removable discontinuity is a hole the graph could have: the function approaches a single finite limit from both sides, but the value at the point is missing or wrong. Patch it and the function becomes continuous there. A jump discontinuity — the left and right limits both exist but disagree — is a tear, not a hole; no single value at the point can match both sides at once. An infinite discontinuity, where the function blows up, is beyond patching entirely. So the first job is always the same: compute the one-sided behaviour and decide which of the three worlds you are in.',
      },
      { kind: 'heading', text: 'The three conditions, and what their failure means' },
      {
        kind: 'para',
        text: 'OpenStax\u2019s Calculus Volume 1 (§2.4) states that f is continuous at a point a exactly when three conditions hold together: f(a) is defined; the limit of f(x) as x approaches a exists; and that limit equals f(a). Every discontinuity is the failure of at least one condition, and the type of failure names the type of discontinuity. If f(a) is undefined or disagrees with a limit that does exist, the discontinuity is removable. If the two one-sided limits exist but differ — as with the piecewise function −x² + 4 for x ≤ 3 and 4x − 8 for x > 3 at the seam x = 3, where the left limit is −5 and the right limit is 4 — the discontinuity is a jump. If a one-sided limit is infinite — as with (x + 2)/(x + 1) at x = −1, where the denominator dies — the discontinuity is infinite.',
      },
      {
        kind: 'para',
        text: 'One subtlety the classification hides: a function can fail continuity at a point even when nothing dramatic happens nearby. The function f(x) = sin(x)/x has limit 1 as x approaches 0, and OpenStax\u2019s Example 2.28 shows that the enlarged function with f(0) = 1 is perfectly continuous at 0 — the original was merely missing its value. By contrast, a rational function like (x − 1)/(x² + 2x) is continuous on its whole domain (−∞, −2) ∪ (−2, 0) ∪ (0, ∞); the excluded points are where continuity fails. Polynomials, by the way, never fail: a polynomial is continuous everywhere, which is why holes in rational functions always trace back to a cancelled or zeroed denominator, never to the polynomial numerator alone.',
      },
      { kind: 'heading', text: 'The repair: redefine the function at the point' },
      {
        kind: 'para',
        text: 'To remove a removable discontinuity at x = a, compute the limit L of f as x approaches a, then declare a new function that equals f everywhere except at a, and takes the value L at a. The classic worked case from OpenStax Example 2.26: f(x) = (x² − 4)/(x − 2). Both numerator and denominator vanish at x = 2, so f(2) is undefined — condition 1 fails. Factor the numerator: (x − 2)(x + 2)/(x − 2). For every x ≠ 2 the factors cancel, leaving x + 2, whose limit as x approaches 2 is 4. The limit exists; only the value is missing. Define f(2) = 4 and the enlarged function is continuous at 2. The hole has been filled with the one point the formula was hiding.',
      },
      {
        kind: 'para',
        text: 'Piecewise definitions ask the same question in reverse. Suppose a syllabus-style function is given as (x² − 9)/(x − 3) for x ≠ 3 with some value c assigned at x = 3, and you must find the c that makes the whole thing continuous. Cancel to x + 3, take the limit, and the answer is c = 6. The general recipe is mechanical: compute the limit the pieces approach, then set the odd piece\u2019s value to match. Always finish by confirming continuity after the repair — re-run the three conditions on the enlarged function. The limit must exist (it did by construction), the value must equal it (you set it), and the point must belong to the domain (you just defined it). Three ticks, and the repair is certified.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Classify, then repair, then confirm',
        steps: [
          'Step 1: f(x) = (x² − 4)/(x − 2). Evaluate at the suspect point: f(2) is undefined, so continuity fails at x = 2 regardless of anything else.',
          'Step 2: compute the limit. Factor and cancel for x ≠ 2: f(x) = x + 2, so the limit as x → 2 is 4. A finite two-sided limit exists — the discontinuity is removable, not jump, not infinite.',
          'Step 3: repair. Define the enlarged function g with g(x) = (x² − 4)/(x − 2) for x ≠ 2 and g(2) = 4.',
          'Step 4: confirm. g(2) = 4 is defined; the limit is 4; the limit equals the value. All three conditions hold, so g is continuous at 2 — and everywhere else, since away from 2 it is a polynomial (x + 2).',
          'Contrast: h(x) = (x + 2)/(x + 1) at x = −1. The denominator vanishes with no cancelling factor in the numerator, and the one-sided limits run to ±∞. No value assigned at −1 can fix an infinite limit — the discontinuity is infinite and non-removable.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'What makes a discontinuity at x = a removable rather than jump or infinite?',
            options: [
              'f(a) is the largest value nearby',
              'the two-sided limit exists and is finite, but f(a) is missing or wrong',
              'the left and right limits are both infinite',
              'the function is a polynomial',
            ],
            answer: 1,
            explain: 'Removable means the limit exists and is finite but the point\u2019s value is absent or mismatched — a fillable hole. Jump means the one-sided limits exist but differ; infinite means a one-sided limit is unbounded. Neither of those can be fixed by setting one value.',
          },
          {
            q: 'For f(x) = (x² − 4)/(x − 2), which redefinition makes the function continuous at x = 2?',
            options: ['f(2) = 0', 'f(2) = 2', 'f(2) = 4', 'no value can repair it'],
            answer: 2,
            explain: 'Cancel the common factor: for x ≠ 2 the function equals x + 2, whose limit at 2 is 4. Setting f(2) = 4 makes the value meet the limit — the repair OpenStax demonstrates in Example 2.26.',
          },
          {
            q: 'A piecewise function gives −x² + 4 for x ≤ 3 and 4x − 8 for x > 3. What kind of discontinuity sits at the seam x = 3?',
            options: [
              'removable — redefine the second piece',
              'jump — the one-sided limits (−5 and 4) disagree',
              'infinite — the pieces blow up',
              'none — the function is continuous there',
            ],
            answer: 1,
            explain: 'The left limit is −(3)² + 4 = −5 and the right limit is 4(3) − 8 = 4. Both are finite but unequal, so no single value at x = 3 can match both sides: a jump discontinuity, which no redefinition can remove.',
          },
          {
            q: 'After repairing a removable discontinuity by setting g(a) = L, what is the correct final step?',
            options: [
              're-check all three continuity conditions for g at a',
              'take the derivative of g at a',
              'confirm the limit is the largest value of g nearby',
              'state that confirmation is unnecessary once a value is assigned',
            ],
            answer: 0,
            explain: 'The syllabus explicitly includes "confirming continuity after removal": verify g(a) is defined, the limit exists, and they are equal. Assignment without confirmation risks matching the limit with the wrong value or leaving the point outside the domain.',
          },
          {
            q: 'Why can no redefinition repair the infinite discontinuity of (x + 2)/(x + 1) at x = −1?',
            options: [
              'because −1 is negative',
              'because the one-sided limits are unbounded, so no finite value can equal the limit',
              'because the numerator also vanishes there',
              'because rational functions are never continuous',
            ],
            answer: 1,
            explain: 'Repair requires the limit to exist and be finite. Near x = −1 the denominator tends to 0 while the numerator tends to 1, so the function diverges to ±∞ from the two sides — there is no limit to assign.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Cancelling a factor and forgetting that the cancellation is illegal at the zero itself — the simplified formula x + 2 is only equal to the original for x ≠ 2, which is exactly why the original needed a repair. Calling every hole "removable" without checking that the two-sided limit exists: if the one-sided limits disagree (jump) or diverge (infinite), no value helps. Confusing "f is undefined at a" with "the limit does not exist at a" — Example 2.26 has the former but not the latter. Also beware the opposite slip on piecewise seams: a function can be defined at the seam (condition 1 passes) yet still be discontinuous because the pieces fail to meet (condition 2 fails). Finally, do not claim continuity of a repaired function beyond the point you repaired — confirm the rest of the domain separately.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the derivative-as-a-limit lesson for limit mechanics and the algebra of factoring. Follow with the linearization lesson to see what continuity guarantees near a repaired point, and the concavity lesson for how the second derivative reads a graph\u2019s shape. Primary reading: OpenStax, Calculus Volume 1, §2.4 "Continuity" (openstax.org, CC BY-NC-SA) — Examples 2.26 through 2.34 are the canonical drill set, and the Composite Function Theorem there explains why limits pass through continuous wrappers like cos.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Continuity at a: f(a) defined, limit exists, limit = f(a) — all three or it fails.',
        'Failure modes: value missing or wrong → removable; one-sided limits differ → jump; a one-sided limit unbounded → infinite.',
        'Repair recipe: factor, cancel, take the limit L, set f(a) = L, then re-confirm all three conditions.',
        'Rational holes come from cancelled denominators; polynomials are always continuous on ℝ.',
        'sin(x)/x with f(0) = 1 is the model repair: the formula was one point short of continuous.',
        'Jumps and infinite breaks are non-removable — no single value can satisfy both sides or an unbounded limit.',
      ] },
    ],
  },
  {
    id: 'calc-linearization-differentials',
    title: 'Linearization and Differentials: The Tangent as a Calculator',
    domain: 'Mathematics',
    field: 'Calculus',
    branch: 'Differential Calculus',
    tier: 'intermediate',
    concepts: [
      'Linearization L(x) = f(a) + f\u2032(a)(x \u2212 a)',
      'Tangent-line approximation of nearby values',
      'The four-move drill: anchor, value, slope, evaluate',
      'Differentials dy = f\u2032(x) dx versus the true change \u0394y',
      'Error propagation: sensitivity, relative and percentage error',
      'Power-law rule: the exponent multiplies relative error',
      'The small-angle family and the (1 + x)^n micro-approximation',
      'Accuracy is local: curvature and distance from the anchor',
    ],
    words: 6021,
    readMins: 30,
    addedOn: '2026-10-24',
    blocks: [
      {
        kind: 'para',
        text: "Ask a calculator for \u221a9.1 and the answer arrives before your finger leaves the key: 3.0166206\u2026. The machine cannot \u2018take a square root\u2019 \u2014 its arithmetic unit can only add, multiply and compare. What it actually does, deep in its firmware, is start from a straight line. That is the oldest computational idea in calculus, and it is the whole content of this lesson: a smooth curve, viewed through a microscope of high enough power, is indistinguishable from its tangent line. Know where the line sits and how steep it is, and the line does the rest of the work.",
      },
      {
        kind: 'para',
        text: "The idea has a long pedigree. Fermat, around 1635, drew tangents to find the maxima of curves; Newton, in 1665\u20131666, built his \u2018method of fluxions\u2019 on the same picture; Leibniz\u2019s 1684 paper in the Acta Eruditorum introduced the notation dx and dy that the middle of this lesson still speaks; L\u2019H\u00f4pital\u2019s Analyse des infiniment petits of 1696 \u2014 the first calculus textbook ever printed \u2014 opened with the rule that a small rise dy along a curve behaves like the corresponding rise along its tangent. Taylor in 1715 showed that the tangent is merely the first term of an infinite series of corrections. It remains the fastest, most-used term: the one a working scientist reaches for when a number is needed now.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Three tools, one picture. Linearization replaces a hard function by its tangent line at an easy anchor point and reads nearby values off the line. Differentials (dx, dy) recast the same line as a forecast of small changes. Error propagation turns the derivative into a sensitivity coefficient: how a measurement\u2019s error poisons everything computed from it. The lesson closes with the small-angle family \u2014 the pocket approximations physicists lean on \u2014 and an honest account of when the straight line stops telling the truth.',
      },
      { kind: 'heading', text: 'The Microscope Picture: Every Curve Is Locally a Line' },
      {
        kind: 'para',
        text: "Fix a point x = a on a smooth curve y = f(x) and call a the **anchor**. The **tangent line** at a is the unique straight line through the point (a, f(a)) whose slope equals the derivative f\u2032(a) there. In point-slope form its equation reads\n\n$$y = f(a) + f'(a)(x - a)$$\n\nThe right-hand side deserves a name of its own. It is the **linearization** of f at the anchor a:\n\n$$L(x) = f(a) + f'(a)(x - a) \\tag{1}$$\n\nand the approximation statement that the rest of this lesson earns, uses and eventually qualifies is one line long:\n\n$$f(x) \\approx L(x) \\quad \\text{for } x \\text{ near } a \\tag{2}$$\n\nTwo conditions define the line, and both are matches at the anchor itself: the line and the curve agree in value there, L(a) = f(a), and they agree in slope there, L\u2032(a) = f\u2032(a). Everything the method is worth comes from that double match \u2014 and the honest limits of the method come from what the two graphs do NEXT, once you step away from a.",
      },
      {
        kind: 'para',
        text: "Why should the line be trusted even for x slightly away from the anchor? Because the gap between curve and tangent is not merely small \u2014 it is second-order small, shrinking like the SQUARE of the step. The double match at a kills the entire first-order discrepancy, and what survives is bending, not slope. One derivation is worth a paragraph of assurance here, so the block below does it properly. The practical moral arrives first: anchor the function where evaluation is easy, stay close to the anchor, and the tangent behaves like a photocopy of the curve. Wander far, or anchor where the curve bends hard, and the photocopy drifts \u2014 the closing section of this lesson prices the drift exactly.",
      },
      {
        kind: 'derivation',
        title: 'How Fast the Gap Grows \u2014 the Second-Order Error',
        statement: 'How large is the error f(x) \u2212 L(x) when x sits a step \u0394x = x \u2212 a from the anchor? One extra ingredient settles it: the second derivative f\u2033(a), the rate at which the slope itself changes.',
        prerequisites: ['the linearization L(x) = f(a) + f\u2032(a)(x \u2212 a)', 'the second derivative as the rate of change of the slope'],
        steps: [
          { label: 'Follow the slope across the step', formula: "f'(a + \\Delta x) \\approx f'(a) + f''(a)\\,\\Delta x", explanation: 'The slope at the probe point is itself a function \u2014 so linearize it too. Over a short step the slope changes by approximately its own rate f\u2033(a) times the step: the same microscope logic, applied one level up.' },
          { label: 'Build the rise from an honest average slope', formula: '\\Delta y \\approx \\left(f\'(a) + \\tfrac{1}{2} f\'\'(a)\\,\\Delta x\\right)\\Delta x', explanation: 'The rise along the curve is the average slope over the step times the step. The slope slides from f\u2032(a) up to about f\u2032(a) + f\u2033(a)\u0394x, so its average sits at the midpoint of that slide \u2014 and the factor \u00bd appears.' },
          { label: 'Split the rise into tangent part and bending part', formula: '\\Delta y \\approx f\'(a)\\,\\Delta x + \\tfrac{1}{2} f\'\'(a)(\\Delta x)^{2}', explanation: 'The first piece is exactly the tangent line\u2019s rise dy. The second piece is curvature \u2014 the part of the motion the straight line cannot see.' },
          { label: 'Subtract the forecast and read the error', formula: 'f(x) - L(x) \\approx \\tfrac{1}{2} f\'\'(a)(\\Delta x)^{2}', explanation: 'The first-order terms cancel identically \u2014 that is the double match at work \u2014 and what survives is proportional to the square of the step and to the bending f\u2033(a) at the anchor.' },
        ],
        result: 'The tangent\u2019s error is roughly \u00bd f\u2033(a)(x \u2212 a)\u00b2: second-order small, and signed. Where f\u2033(a) < 0 the curve bends below its tangent, so the line OVERestimates; where f\u2033(a) > 0 it UNDERestimates. Worked Example 1 measures both facts on \u221ax \u2014 and the concavity lesson (\u00a772.3) turns this sign rule into a complete testing kit.',
      },
      {
        kind: 'para',
        text: "A numerical taste of that formula before the drill. For f(x) = \u221ax the second derivative is f\u2033(x) = \u22121/(4x^(3/2)), so at a = 9 it equals \u22121/108 \u2248 \u22120.0093 \u2014 the curve is concave down there, bending gently downward. The error formula prices the tangent\u2019s miss at x = 9.1 at about \u00bd \u00d7 (\u22120.0093) \u00d7 (0.1)\u00b2 \u2248 \u22120.000046: the line should sit slightly ABOVE the curve, and the miss should be under five hundred-thousandths. Worked Example 1 confirms both predictions digit by digit \u2014 the sign of the error and its size to a decimal place.",
      },
      { kind: 'heading', text: 'The Four-Move Drill' },
      {
        kind: 'para',
        text: "Executed by hand, linearization is a four-move drill. Move one: choose the **anchor** a, and make it pass two qualifications \u2014 f(a) must be easy to evaluate exactly (a perfect square under a root, a special angle for sine, x = 0 for most everything else), and a must be close to the value you actually want, close in the sense the last derivation earned, because the error grows like (x \u2212 a)\u00b2. Move two: compute f(a) and f\u2032(a). Move three: assemble L(x) from equation (1). Move four: evaluate L at the awkward input and sanity-check the answer against common sense \u2014 a square root near 3 must come out near 3, a sine can never leave [0, 1]. One drill, endlessly reusable; the worked examples below run it four times on four very different functions.",
      },
      { kind: 'heading', text: 'Differentials: The Leibniz Language of Small Changes' },
      {
        kind: 'para',
        text: "The tangent line answers a static question: what is f(x) near a? Differentials answer a dynamic one: if the input wobbles, how much does the output wobble? For y = f(x), Leibniz\u2019s grammar names two quantities. The **differential** dx is any small, freely chosen change in the input \u2014 an independent variable in its own right, not an approximation to anything. The differential dy is defined as the tangent\u2019s prediction of the resulting output change:\n\n$$dy = f'(x)\\,dx \\tag{3}$$\n\nThe function\u2019s true change, by contrast, is measured along the curve itself:\n\n$$\\Delta y = f(x + \\Delta x) - f(x)$$\n\nand the content of the whole lesson compresses into the one-line dictionary dy \u2248 \u0394y: the tangent\u2019s rise stands in for the curve\u2019s rise whenever \u0394x is small. Figure 1\u2019s right panel is this sentence drawn as a picture \u2014 dy rides the tangent, \u0394y rides the curve, and the sliver between them is the second-order error of Derivation 1.",
      },
      {
        kind: 'para',
        text: "A worked micro-example fixes the vocabulary. Take y = x\u00b2 + 2x at x = 3 with dx = 0.1. The derivative is dy/dx = 2x + 2, so at x = 3:\n\n$$dy = (2 \\cdot 3 + 2)\\,dx = 8 \\times 0.1 = 0.8$$\n\nThe curve\u2019s true change over that same step is:\n\n$$\\Delta y = f(3.1) - f(3) = (9.61 + 6.2) - 15 = 0.81$$\n\nThe tangent missed by 0.01 \u2014 and Derivation 1 says precisely where the 0.01 lives: the ignored bending term \u00bd f\u2033(x) dx\u00b2 = \u00bd \u00d7 2 \u00d7 0.01 = 0.01, exact here because a parabola has constant curvature. The differential is the first-order forecast; the curvature term is the price of not buying the second order.",
      },
      {
        kind: 'para',
        text: "Notice the notation\u2019s double duty. The derivative f\u2032(x) is written dy/dx \u2014 and after this section that slash is no longer decoration: it is literally the ratio of the two differentials along the tangent line, the forecast rise per unit of input step. The productive reading of dy/dx, though, is not the ratio but the forecast it rearranges into: dy = f\u2032(x) dx is what the output WOULD do if the graph really were its tangent. Hold that reading \u2014 the next section shows it converting measurement errors into computed errors across whole industries.",
      },
      { kind: 'heading', text: 'Measuring Instruments Lie: Error Propagation' },
      {
        kind: 'para',
        text: "No instrument hands you x. It hands you x together with a small error dx \u2014 a half-millimetre on a ruler, a tenth of a degree on a thermocouple, a fifty-paise rounding in a ledger. Whatever you compute from the measurement inherits that error, and the derivative is exactly the exchange rate of the inheritance. If a is the measured value and f the computation performed on it, the output error is\n\n$$\\Delta y \\approx dy = f'(a)\\,dx$$\n\nThe derivative f\u2032(a) acts as a **sensitivity coefficient**: input error in, output error out, converted at the local slope. How alarming the output error is depends on the size of the output itself, which is why the working quantities are the **relative error**\n\n$$\\left|\\frac{dy}{y}\\right| = \\left|\\frac{f'(a)\\,dx}{f(a)}\\right|$$\n\nand the **percentage error**, that number multiplied by 100. An absolute error of one centimetre is trivial for a football field and fatal for a wristwatch; relative error is the great equaliser.",
      },
      {
        kind: 'para',
        text: "Power laws hide a shortcut that turns whole pages of error algebra into one line. Because quantities like area, volume and kinetic energy are built as y = kx\u207f, the exponent itself controls how error magnifies \u2014 and the next derivation shows why, with the sphere\u2019s volume as the working case.",
      },
      {
        kind: 'derivation',
        title: 'Why the Exponent Multiplies Relative Error',
        statement: 'For every power law y = kx\u207f, the relative error of the output is n times the relative error of the input: dy/y = n dx/x. The sphere\u2019s volume is the case every machinist and lab course runs into first.',
        prerequisites: ['the differential dy = f\u2032(x) dx', 'the power rule for derivatives', 'cancelling common factors in a fraction'],
        steps: [
          { label: 'Differentiate the power law', formula: '\\frac{dy}{dx} = k n x^{n-1} \\quad \\Longrightarrow \\quad dy = k n x^{n-1}\\,dx', explanation: 'The power rule pulls the exponent down as a multiplier \u2014 the first place the exponent reveals its ambitions.' },
          { label: 'Divide by y = kx\u207f to form the relative error', formula: '\\frac{dy}{y} = \\frac{k n x^{n-1}\\,dx}{k x^{n}} = n\\,\\frac{dx}{x}', explanation: 'The constant k cancels, one power of x cancels, and the exponent survives as a bare multiplier on the input\u2019s relative error. This is the working rule of the section, equation (4) below.' },
          { label: 'Run the sphere as the earning case', formula: 'V = \\tfrac{4}{3}\\pi r^{3} \\;\\Longrightarrow\\; dV = 4\\pi r^{2}\\,dr \\;\\Longrightarrow\\; \\frac{dV}{V} = \\frac{4\\pi r^{2}\\,dr}{\\tfrac{4}{3}\\pi r^{3}} = 3\\,\\frac{dr}{r}', explanation: 'Volume is a power law with n = 3. The differential dV = 4\u03c0r\u00b2 dr is literally the surface area converting radius error into volume error \u2014 and the shortcut agrees with the full computation.' },
        ],
        result: 'For y = kx\u207f the relative errors obey the power-law rule\n\n$$\\frac{dy}{y} = n\\,\\frac{dx}{x} \\tag{4}$$\n\nThe exponent is the error multiplier: area (n = 2) doubles your measuring error, volume (n = 3) triples it, and the pendulum-equivalent of a fourth power quadruples it.',
      },
      {
        kind: 'para',
        text: "Run the sphere once with full numbers. A ball bearing\u2019s radius is measured as 5.00 cm with a possible error of 0.05 cm \u2014 a one-percent measuring job. The differential route: dV = 4\u03c0r\u00b2 dr = 4\u03c0(25)(0.05) = 5\u03c0 \u2248 15.7 cm\u00b3, against a true volume V = 500\u03c0/3 \u2248 523.6 cm\u00b3, which is 15.7/523.6 \u2248 3.0%. The shortcut route, equation (4): 3 \u00d7 (0.05/5) = 3%. One line or three, the same verdict: one percent of measuring has become three percent of volume. The exponent is the error multiplier, and the surface area 4\u03c0r\u00b2 is the conversion machinery doing the tripling.",
      },
      {
        kind: 'para',
        text: "Two honest limits on the relay. The rule divides by y, so a computed quantity near zero carries explosive relative error even when its absolute error is tiny \u2014 an estimated position of 0.02 \u00b1 0.01 is a fifty-percent affair. And the whole chain assumes dx small enough that f\u2032 is nearly constant across the step; an error so large that the slope changes appreciably across it has outgrown the tangent line and belongs to the fuller machinery of statistics. Within those limits, though, the relay is exact bookkeeping: sensitivity f\u2032(a), then relative error, then the exponent\u2019s multiplier if a power law is in play.",
      },
      {
        kind: 'figure',
        caption: 'Figure 1 \u2014 The microscope picture and the differential picture. LEFT: y = \u221ax with its tangent at the anchor a = 9. Far from the anchor the gap is visible \u2014 and asymmetric: at x = 4 (five units left) the line misses by 0.83, at x = 14 (five units right) by only 0.59, because the curvature f\u2033 = \u22121/(4x^(3/2)) weakens as x grows. RIGHT: the zoomed view at any anchor. The input step dx is free; dy = f\u2032(a) dx is the rise predicted along the tangent; \u0394y is the true rise along the curve; the sliver between them, \u0394y \u2212 dy \u2248 \u00bd f\u2033(a) dx\u00b2, is the second-order error of Derivation 1.',
        afterConcept: 4,
        svg: `<svg viewBox="0 0 880 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: curve and tangent separate away from the anchor. Right: dx, dy along the tangent and dy along the curve at the anchor">
  <rect x="0" y="0" width="880" height="470" fill="transparent"/>
  <!-- LEFT: wide view of sqrt(x) and its tangent at a = 9 -->
  <line x1="30" y1="420" x2="490" y2="420" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="40" y1="430" x2="40" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="480" y="440" font-size="13" fill="#64748b">x</text>
  <text x="24" y="30" font-size="13" fill="#64748b">y</text>
  <polyline points="40,420 52.9,358.7 65.9,333.3 91.8,297.5 117.6,269.9 143.5,246.7 195.3,207.8 247,174.9 272.9,140 298.8,105.9 350.6,119.8 402.4,95.7 454.1,73.3" fill="none" stroke="#0ea5e9" stroke-width="2.5"/>
  <line x1="40" y1="290" x2="480" y2="1.2" stroke="#f59e0b" stroke-width="2"/>
  <circle cx="272.9" cy="140" r="5" fill="#10b981"/>
  <text x="252" y="128" font-size="13" fill="#059669">anchor a = 9</text>
  <text x="392" y="58" font-size="14" fill="#0369a1">y = \u221ax</text>
  <text x="330" y="26" font-size="14" fill="#b45309">tangent L(x) = 3 + (x \u2212 9)/6</text>
  <line x1="402.4" y1="95.7" x2="402.4" y2="44.5" stroke="#ef4444" stroke-width="1.5"/>
  <path d="M 402.4 95.7 l -3 7 l 6 0 z" fill="#ef4444"/>
  <path d="M 402.4 44.5 l -3 -7 l 6 0 z" fill="#ef4444"/>
  <text x="408" y="74" font-size="12" fill="#ef4444">miss 0.59</text>
  <line x1="143.5" y1="246.7" x2="143.5" y2="174.7" stroke="#ef4444" stroke-width="1.5"/>
  <path d="M 143.5 246.7 l -3 -7 l 6 0 z" fill="#ef4444"/>
  <path d="M 143.5 174.7 l -3 7 l 6 0 z" fill="#ef4444"/>
  <text x="70" y="215" font-size="12" fill="#ef4444">miss 0.83</text>
  <text x="60" y="452" font-size="15" font-weight="bold" fill="#334155">Wide view: the gap grows like (x \u2212 a)\u00b2 \u2014 and curvature decides how fast</text>
  <!-- RIGHT: zoomed differential picture at the anchor -->
  <line x1="505" y1="420" x2="860" y2="420" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="515" y1="430" x2="515" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="850" y="440" font-size="13" fill="#64748b">x</text>
  <text x="499" y="30" font-size="13" fill="#64748b">y</text>
  <path d="M 530 395 Q 660 250 840 175" fill="none" stroke="#0ea5e9" stroke-width="2.5"/>
  <line x1="545" y1="374.5" x2="835" y2="114.9" stroke="#f59e0b" stroke-width="2"/>
  <circle cx="598" cy="327" r="5" fill="#10b981"/>
  <text x="540" y="352" font-size="13" fill="#059669">anchor (a, f(a))</text>
  <line x1="598" y1="327" x2="776" y2="327" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 776 327 l -8 -3.5 l 0 7 z" fill="#64748b"/>
  <text x="668" y="345" font-size="14" fill="#334155">dx</text>
  <line x1="786" y1="327" x2="786" y2="164.1" stroke="#b45309" stroke-width="1.5"/>
  <path d="M 786 164.1 l -3.5 8 l 7 0 z" fill="#b45309"/>
  <path d="M 786 327 l -3.5 -8 l 7 0 z" fill="#b45309"/>
  <text x="793" y="252" font-size="13" fill="#b45309">dy = f\u2032(a) dx</text>
  <line x1="776" y1="327" x2="776" y2="204.3" stroke="#0369a1" stroke-width="1.5"/>
  <path d="M 776 204.3 l -3.5 8 l 7 0 z" fill="#0369a1"/>
  <text x="700" y="290" font-size="13" fill="#0369a1">\u0394y</text>
  <line x1="800" y1="164.1" x2="800" y2="204.3" stroke="#ef4444" stroke-width="1.5"/>
  <path d="M 800 164.1 l -3.5 8 l 7 0 z" fill="#ef4444"/>
  <path d="M 800 204.3 l -3.5 -8 l 7 0 z" fill="#ef4444"/>
  <text x="806" y="188" font-size="12" fill="#ef4444">\u0394y \u2212 dy \u2248 \u00bd f\u2033(a) dx\u00b2</text>
  <text x="700" y="132" font-size="13" fill="#b45309">tangent</text>
  <text x="778" y="222" font-size="13" fill="#0369a1">y = f(x)</text>
  <text x="520" y="452" font-size="15" font-weight="bold" fill="#334155">Zoomed: dy rides the tangent, \u0394y rides the curve</text>
</svg>`,
      },
      { kind: 'heading', text: 'Worked Examples' },
      {
        kind: 'example',
        title: 'Worked Example 1 \u2014 \u221a9.1: the drill, graded against the truth',
        steps: [
          'Identify what is asked: estimate \u221a9.1 from the tangent line at the nearest easy anchor, then grade the estimate against the true value and against the error theory of Derivation 1.',
          'Choose the anchor: a = 9 is a perfect square adjacent to 9.1 \u2014 easy to evaluate exactly, and close (|x \u2212 a| = 0.1).',
          'Value at the anchor: f(9) = \u221a9 = 3. Slope: f\u2032(x) = 1/(2\u221ax), so f\u2032(9) = 1/6.',
          'Assemble the linearization by equation (1): L(x) = 3 + (1/6)(x \u2212 9).',
          'Evaluate at the awkward point: L(9.1) = 3 + 0.1/6 = 3 + 0.01667 \u2248 3.0167.',
          'Grade it: the true value is \u221a9.1 = 3.0166206\u2026, so the error is about \u22120.000046 \u2014 five correct digits from one derivative evaluation.',
          'Check the theory: Derivation 1 forecast \u00bd f\u2033(9)(0.1)\u00b2 = \u00bd \u00d7 (\u22121/108) \u00d7 0.01 \u2248 \u22120.000046. The predicted size and the predicted sign (overestimate, since f\u2033 < 0) both land on the nose.',
          'State the result: \u221a9.1 \u2248 3.0167 \u2014 accurate to within 0.00005, with the tiny overestimate explained by the curve bending below its tangent.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example 2 \u2014 sin 62\u00b0: the radian trap, defused',
        steps: [
          'Identify what is asked: estimate sin 62\u00b0 from the tangent line at the special angle nearest to it \u2014 no calculator.',
          'Choose the anchor: a = \u03c0/3 (= 60\u00b0), where sine and cosine are exact: sin(\u03c0/3) = \u221a3/2 \u2248 0.86603 and cos(\u03c0/3) = 1/2.',
          'Convert the probe distance to radians \u2014 derivatives of sine assume radians: \u0394x = 62\u00b0 \u2212 60\u00b0 = 2\u00b0 = 2\u03c0/180 = \u03c0/90 \u2248 0.034907.',
          'Slope at the anchor: (sin)\u2032 = cos, so f\u2032(\u03c0/3) = 1/2.',
          'Assemble and evaluate: sin 62\u00b0 \u2248 \u221a3/2 + (1/2)(\u03c0/90) \u2248 0.86603 + 0.01745 \u2248 0.88348.',
          'Grade it: the true value is 0.88295 \u2014 three correct decimals, error \u2248 0.0005.',
          'Sanity-check the trap: had we fed \u0394x = 2 (the raw degree number) into the formula, the \u2018estimate\u2019 would be 0.86603 + 1 = 1.866 \u2014 impossible for a sine. Radians are not a formality; they are what makes (sin)\u2032 = cos true.',
          'State the result: sin 62\u00b0 \u2248 0.8835 (true 0.88295) \u2014 the 60\u00b0 anchor plus a radian-scale nudge of half the step.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example 3 \u2014 a ball bearing\u2019s volume: error propagation end to end',
        steps: [
          'Identify what is asked: a ball bearing\u2019s radius is measured as 5.00 cm with a possible error of 0.05 cm. Estimate the resulting absolute and percentage error in its computed volume.',
          'Model: V = (4/3)\u03c0r\u00b3; the measurement error is dr = 0.05 cm at r = 5.',
          'Differential route: dV = 4\u03c0r\u00b2 dr = 4\u03c0(25)(0.05) = 5\u03c0 \u2248 15.7 cm\u00b3.',
          'Base value: V = (4/3)\u03c0(125) = 500\u03c0/3 \u2248 523.6 cm\u00b3.',
          'Relative error: dV/V \u2248 15.7/523.6 \u2248 0.030, i.e. 3.0%.',
          'Shortcut check, equation (4): dV/V = 3 dr/r = 3 \u00d7 (0.05/5) = 3% \u2014 the same verdict in one line, as the power-law rule promised.',
          'State the result: the volume carries an error of about \u00b115.7 cm\u00b3, i.e. \u00b13% \u2014 one percent of measuring has become three percent of volume, the exponent tripling the relay.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example 4 \u2014 (1.02)\u00b9\u2070: where the one-liner frays',
        steps: [
          'Identify what is asked: estimate (1.02)\u00b9\u2070 by linearization, compare with the truth, and say exactly what the comparison teaches about the micro-rule (1 + x)\u207f \u2248 1 + nx.',
          'Anchor a = 0 on f(x) = (1 + x)\u00b9\u2070: f(0) = 1 and f\u2032(x) = 10(1 + x)\u2079, so f\u2032(0) = 10.',
          'First-order estimate: (1.02)\u00b9\u2070 \u2248 1 + 10(0.02) = 1.200.',
          'Truth: (1.02)\u00b9\u2070 = 1.21899\u2026 \u2014 the tangent line is short by 0.019, about 1.6%.',
          'Diagnose with Derivation 1: the next term is \u00bd n(n\u22121)x\u00b2 = 45 \u00d7 0.0004 = 0.018 \u2014 with n = 10 the exponent amplifies the second order, and the \u2018small\u2019 x = 0.02 is being compounded ten times.',
          'Second-order repair: 1 + 0.20 + 0.018 = 1.218, short by only 0.001; adding the cubic term C(10,3)x\u00b3 = 120(0.000008) = 0.00096 lands on 1.21896 \u2014 within 0.00003 of the truth. Taylor\u2019s 1715 series is this ladder continued forever.',
          'State the result: (1.02)\u00b9\u2070 \u2248 1.200 on the tangent line against a true 1.21899 \u2014 the micro-rule is a first-order servant: brilliant for (1.01)\u00b3, strained for (1.02)\u00b9\u2070, and the concavity lesson (\u00a772.3) names the sign of the shortfall.',
        ],
      },
      { kind: 'heading', text: 'The Small-Angle Family: The a = 0 Toolbox' },
      {
        kind: 'para',
        text: "Anchor everything at a = 0 and the four-move drill collapses into a family of pocket rules that scientists use daily. Each member is just L(x) for one function, read off equation (1) with f(0) and f\u2032(0):\n\n$$\\sin\\theta \\approx \\theta, \\qquad \\tan\\theta \\approx \\theta, \\qquad e^{x} \\approx 1 + x, \\qquad \\ln(1 + x) \\approx x$$\n\nThe sine rule is the famous one: sin 0 = 0 and (sin)\u2032(0) = cos 0 = 1 give sin \u03b8 \u2248 0 + 1\u00b7\u03b8 \u2014 and it is true only because \u03b8 is in radians, since \u2018slope one at zero\u2019 is a radian statement (Worked Example 2 dramatised the trap). The exponential and logarithm rules come from the same two numbers: e\u2070 = 1 with slope 1, and ln 1 = 0 with slope 1/(1+x) at x = 0 again 1.",
      },
      {
        kind: 'para',
        text: "Cosine is the honest oddball. Its slope at 0 is cos 0 = 0, so its first-order line is the flat forecast cos \u03b8 \u2248 1 \u2014 true but lazy, since the interesting part is how cosine LEAVES 1. The framework itself points the way: Derivation 1\u2019s error formula says the next term is \u00bd f\u2033(0)\u03b8\u00b2 = \u2212\u03b8\u00b2/2, giving\n\n$$\\cos\\theta \\approx 1 - \\tfrac{\\theta^{2}}{2}$$\n\n\u2014 the first place this lesson\u2019s second-order machinery earns its keep. The binomial rule (1 + x)\u207f \u2248 1 + nx comes from the same anchor: f(0) = 1, f\u2032(0) = n. It prices (1.01)\u00b3 \u2248 1.03 instantly \u2014 and Worked Example 4 showed, without embarrassment, exactly where it begins to fray.",
      },
      {
        kind: 'para',
        text: "The dividends are everywhere. The pendulum\u2019s period T = 2\u03c0\u221a(L/g), derived in every physics course, is sin \u03b8 \u2248 \u03b8 wearing a coat \u2014 without that linearization the pendulum equation has no closed-form period at all, and every lab manual\u2019s instruction to \u2018keep the swings small\u2019 is a linearization condition in disguise. The slide rule (Oughtred, 1622) is a linearization made of wood and celluloid: its logarithmic scales turn multiplication into addition precisely by letting straight-line behaviour stand in for the log curve between marks. And the modern calculator seeds its own special functions with polynomial approximations whose first term is this lesson\u2019s line \u2014 the straight edge from which all refinement begins.",
      },
      { kind: 'heading', text: 'When the Ruler Wears Out' },
      {
        kind: 'para',
        text: "Every guarantee in this lesson is local, and the boundary deserves a meeting in person. Anchor f(x) = \u221ax at a = 1 instead of 9: the method \u2018works\u2019 \u2014 L(x) = 1 + (x \u2212 1)/2 \u2014 but prices \u221a9.1 at 1 + 8.1/2 = 5.05, a 67% error. Nothing was miscomputed: the accuracy promise was simply never made at that distance, because the error grows like \u00bd f\u2033(a)(x \u2212 a)\u00b2 and (x \u2212 a)\u00b2 has grown from 0.01 to 65. Distance is the first destroyer of the approximation. Curvature is the second: a large |f\u2033| near the anchor means the curve starts bending immediately, so even a modest step outlives the line\u2019s honesty. The practical triage is two questions \u2014 is |x \u2212 a| small, and is f\u2033 moderate at the anchor? \u2014 followed by the sign rule of Derivation 1: where f\u2033 < 0 the tangent rides above the curve and L(x) overestimates; where f\u2033 > 0 it underestimates. Worked Example 1\u2019s tiny overestimate and Worked Example 4\u2019s 1.6% shortfall are the same rule wearing different numbers. The concavity lesson (\u00a772.3) develops the sign logic into a complete testing kit, and Taylor\u2019s 1715 series is the story\u2019s infinite continuation \u2014 the tangent line promoted from whole method to first term.",
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Calculator firmware and numerical libraries seed every square root, sine and logarithm with polynomial approximations whose first term is a linearization \u2014 your phone runs this lesson millions of times per second',
          'Machining and metrology: tolerance stacks use dA/A = 2 de/e and dV/V = 3 de/e to convert a gauge\u2019s measuring error into an accept-or-reject decision',
          'The physics lab: the small-angle pendulum period T = 2\u03c0\u221a(L/g) is sin \u03b8 \u2248 \u03b8 in action \u2014 \u2018keep the swings small\u2019 is a linearization condition',
          'Pharmacology and industrial chemistry: dosing and dilution errors propagate through the exponents of the computing formula \u2014 the power-law rule, equation (4), tells you which measurement deserves the calibration budget',
          'Finance: (1 + r)\u207f \u2248 1 + nr prices a year of small daily returns in one line \u2014 and Worked Example 4 shows exactly when the one line stops being enough',
          'Numerical analysis: equation solvers of the Newton type iterate straight lines \u2014 each step is a linearization, seeded by this lesson\u2019s drill',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Anchoring where evaluation is easy but the point is far \u2014 the tangent at a = 1 prices \u221a9.1 at 5.05, a 67% error, because the accuracy guarantee is local to the anchor. Degrees fed into a sine derivative: (sin)\u2032 = cos is true only in radians, so \u0394x = 2\u00b0 must enter as 0.0349, not 2. Confusing dy with \u0394y \u2014 0.8 is the tangent\u2019s forecast, 0.81 is the truth; the two are asked for separately and marked separately. Forgetting the exponent multiplier: area doubles and volume triples your relative error \u2014 and in reverse, a 9% error in a cubed quantity came from 3%, not 27%. Reporting percentage error as a decimal (0.03 instead of 3%). Dividing by a y near zero, where relative errors explode even when absolute errors are tiny. And trusting (1 + x)\u207f \u2248 1 + nx for large n\u00b7x: Worked Example 4\u2019s 1.6% shortfall is the warning label.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Anchor (a)', def: 'The point where the tangent is drawn: chosen for exact evaluability of f(a) and closeness to the value being estimated.' },
          { term: 'Linearization L(x)', def: 'The tangent line\u2019s formula L(x) = f(a) + f\u2032(a)(x \u2212 a) \u2014 the best straight-line stand-in for f near a.' },
          { term: 'Tangent line', def: 'The unique line through (a, f(a)) with slope f\u2032(a); it matches the curve in value and slope at the anchor.' },
          { term: 'Differential dx', def: 'A small, freely chosen change in the input \u2014 an independent variable, not an approximation.' },
          { term: 'Differential dy', def: 'The tangent\u2019s forecast of the output change, dy = f\u2032(x) dx \u2014 what y would do if the graph were its tangent.' },
          { term: 'True change \u0394y', def: 'The actual rise along the curve, f(x + \u0394x) \u2212 f(x); dy approximates it, and the gap is second-order.' },
          { term: 'Sensitivity coefficient', def: 'The derivative f\u2032(a) read as an exchange rate converting input error into output error.' },
          { term: 'Relative error', def: 'Output error divided by output size, |dy/y| \u2014 the great equaliser across scales.' },
          { term: 'Percentage error', def: 'Relative error \u00d7 100; reported as a percent, never as its decimal.' },
          { term: 'Power-law error multiplier', def: 'For y = kx\u207f, dy/y = n dx/x: the exponent multiplies relative error \u2014 area doubles it, volume triples it.' },
          { term: 'Second-order error', def: 'The tangent\u2019s miss, \u2248 \u00bd f\u2033(a)(x \u2212 a)\u00b2 \u2014 proportional to the square of the step and to the curvature at the anchor.' },
          { term: 'Small-angle approximation', def: 'The a = 0 family \u2014 sin \u03b8 \u2248 \u03b8, tan \u03b8 \u2248 \u03b8, cos \u03b8 \u2248 1 \u2212 \u03b8\u00b2/2, e\u02e3 \u2248 1 + x, ln(1 + x) \u2248 x, (1 + x)\u207f \u2248 1 + nx.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The linearization of f at the anchor x = a is:',
            options: [
              'L(x) = f(a) + f\u2032(a)(x \u2212 a)',
              'L(x) = f\u2032(a)(x \u2212 a)',
              'L(x) = f(a) + a(x \u2212 f\u2032(a))',
              'L(x) = f(x) + f\u2032(x)(x \u2212 a)',
            ],
            answer: 0,
            explain: 'The tangent line in point-slope form: the value f(a) at the anchor plus the slope f\u2032(a) times the horizontal offset. The second option drops the value \u2014 its line passes through (a, 0), not (a, f(a)). The third swaps the roles, using a as a slope and f\u2032(a) as the anchor value \u2014 dimensionally incoherent. The fourth is circular: it needs f(x), the very quantity being approximated.',
          },
          {
            q: 'Using the tangent at a = 9, the estimate of \u221a9.1 is:',
            options: ['3.0167', '3.1000', '3.0500', '9.0167'],
            answer: 0,
            explain: 'L(9.1) = 3 + 0.1/6 \u2248 3.0167, matching Worked Example 1 (true value 3.01662). 3.1000 mistakes the scale of the answer \u2014 a root near 3 cannot jump to 3.1 for a 0.1 change in input. 3.0500 triples the correction, as if \u0394x were 0.3. 9.0167 forgets the square root entirely and adds the step to 9.',
          },
          {
            q: 'Estimate \u221b29 by linearizing f(x) = x^(1/3) at the anchor a = 27:',
            options: ['3.0723', '3.0741', '3.2222', '3.6667'],
            answer: 1,
            explain: 'f\u2032(x) = 1/(3x^(2/3)), so f\u2032(27) = 1/27 and L(29) = 3 + 2/27 \u2248 3.0741 (true value 3.07232 \u2014 the estimate errs by 0.0018, the \u00bd f\u2033(27)(2)\u00b2 term at work). 3.0723 is the TRUE cube root to four places \u2014 seductive, but it is what a table gives you, not what the tangent line computes. 3.2222 used f\u2032(27) = 1/9, forgetting to cube inside x^(2/3). 3.6667 used a slope of 1/3, the derivative of x^(1/3) misread as a constant.',
          },
          {
            q: 'Using the tangent to f(x) = 1/x at a = 4, the estimate of 1/4.02 is:',
            options: ['0.24875', '0.24950', '0.25125', '0.24800'],
            answer: 0,
            explain: 'f\u2032(x) = \u22121/x\u00b2, so f\u2032(4) = \u22121/16 and L(4.02) = 0.25 \u2212 (1/16)(0.02) = 0.25 \u2212 0.00125 = 0.24875 (true value 0.248756 \u2014 five correct digits). 0.25125 flips the slope\u2019s sign, claiming 1/4.02 > 1/4 \u2014 but a larger denominator means a smaller value. 0.24950 used half the step, dx = 0.01. 0.24800 doubled it as if dx = 0.04. Decreasing functions punish sign slips.',
          },
          {
            q: 'For y = x\u00b2 + 2x at x = 3 with dx = 0.1, the differential dy equals:',
            options: ['0.8', '0.81', '0.7', '8.0'],
            answer: 0,
            explain: 'dy = (2x + 2)dx = 8 \u00d7 0.1 = 0.8 \u2014 the tangent\u2019s forecast. 0.81 is \u0394y, the curve\u2019s true change: the exam\u2019s favourite pair, asked for separately. 0.7 comes from f\u2032(3) miscomputed as 7 (a 2\u00b73 + 2 slip). 8.0 reports the slope and forgets to multiply by dx \u2014 a forecast of nothing, since dx never entered.',
          },
          {
            q: 'A sphere\u2019s radius is measured with 2% relative error. The relative error of the computed volume is about:',
            options: ['2%', '4%', '6%', '8%'],
            answer: 2,
            explain: 'Equation (4) with n = 3: dV/V = 3 dr/r = 3 \u00d7 2% = 6%. 2% treats volume as linear in radius. 4% applies the area rule (n = 2) instead of the volume rule. 8% doubles the exponent, as if the multiplier applied twice. The exponent is the error multiplier \u2014 cubing triples.',
          },
          {
            q: 'Which of the following are true statements about the linearization L of f at a? (i) L(a) = f(a) (ii) L\u2032(a) = f\u2032(a) (iii) L is the best straight-line fit to f over the whole interval [a \u2212 1, a + 1] (iv) the error f(x) \u2212 L(x) is roughly \u00bd f\u2033(a)(x \u2212 a)\u00b2 for x near a',
            options: ['(i), (ii) and (iv) only', '(i), (ii) and (iii) only', '(ii), (iii) and (iv) only', 'all four of them'],
            answer: 0,
            explain: '(i) and (ii) are the two matching conditions that define the tangent, and (iv) is Derivation 1\u2019s curvature remainder. (iii) fails: \u2018best fit over an interval\u2019 is least-squares territory, a different line entirely \u2014 the tangent is unbeatable only infinitesimally at a, and once you average over a broad interval another line can beat it.',
          },
          {
            q: 'Assertion (A): the linearization of \u221ax at a = 9 slightly OVERestimates \u221a9.1.\nReason (R): \u221ax has f\u2033(x) = \u22121/(4x^(3/2)) < 0 near 9, so the curve bends below its tangent.',
            options: ['Both A and R are true, and R correctly explains A', 'Both A and R are true, but R does not explain A', 'A is true, R is false', 'A is false, R is true'],
            answer: 0,
            explain: 'A is Worked Example 1\u2019s finding: 3.0167 > 3.01662. R is the sign rule of Derivation 1: negative f\u2033 means the tangent rides above the curve, so the error f \u2212 L is negative. R is precisely the mechanism of A, not a neighbouring fact \u2014 the pair explains.',
          },
          {
            q: 'Match each function to its a = 0 linearization.\nList-I: (A) sin \u03b8 (B) e^x (C) ln(1 + x) (D) cos \u03b8\nList-II: (1) x (2) 1 + x (3) \u03b8 (4) 1 \u2212 \u03b8\u00b2/2',
            options: ['A\u21923, B\u21922, C\u21921, D\u21924', 'A\u21923, B\u21921, C\u21922, D\u21924', 'A\u21924, B\u21922, C\u21921, D\u21923', 'A\u21923, B\u21922, C\u21924, D\u21921'],
            answer: 0,
            explain: 'sin 0 = 0 with (sin)\u2032(0) = 1 gives sin \u03b8 \u2248 \u03b8; e\u2070 = 1 with slope 1 gives e^x \u2248 1 + x; ln 1 = 0 with slope 1 gives ln(1 + x) \u2248 x; and cosine\u2019s zero slope at 0 forces the quadratic term, cos \u03b8 \u2248 1 \u2212 \u03b8\u00b2/2. The other mappings swap the two 1 + x-family members, or pair sine with cosine\u2019s remainder.',
          },
          {
            q: 'A machinist measures the edge of a calibration cube as 10.0 cm with a possible error of 0.1 cm, and computes the surface area A = 6e\u00b2. The relative error of the computed area is closest to:',
            options: ['0.1%', '1%', '2%', '6%'],
            answer: 2,
            explain: 'The edge\u2019s relative error is 0.1/10 = 1%, and area is a power law with n = 2: dA/A = 2 de/e = 2%. 0.1% confuses the absolute error (0.1 cm) with a relative one. 1% is the EDGE\u2019s relative error \u2014 the whole point of the exponent multiplier is that the area does not inherit it unchanged. 6% would cube the relay, as for volume.',
          },
          {
            q: 'For the same cube (edge 10.0 \u00b1 0.1 cm), the percentage error of the computed volume V = e\u00b3 is:',
            options: ['1%', '2%', '3%', '10%'],
            answer: 2,
            explain: 'n = 3: dV/V = 3 de/e = 3 \u00d7 1% = 3% (in absolute terms, about 30 cm\u00b3 on 1,000 cm\u00b3). 1% is the edge\u2019s error again; 2% is the area\u2019s; 10% misuses the absolute error 0.1 cm as if it were a ten-percent relative error. Edge 1% \u2192 area 2% \u2192 volume 3%: the ladder of the exponents.',
          },
          {
            q: 'Estimate sin 2\u00b0 using the tangent at \u03b8 = 0:',
            options: ['2.0', '0.0349', '0.9093', '0.0006'],
            answer: 1,
            explain: 'Radians first: 2\u00b0 = 2\u03c0/180 \u2248 0.034907 rad, and sin \u03b8 \u2248 \u03b8 gives 0.0349 \u2014 six-digit agreement with the true sin 2\u00b0 = 0.0348995. 2.0 feeds the degree number into a radian rule (and no sine can reach 2). 0.9093 is sin 2 RADIANS \u2014 the unit trap\u2019s second face. 0.0006 is the size of the NEXT correction, \u03b8\u00b2/2 \u2014 curvature, not the forecast itself.',
          },
          {
            q: 'A linearization starts giving poor estimates when:',
            options: [
              'f\u2032(a) is large',
              'x moves far from a, or |f\u2033| is large near a, so curvature accumulates',
              'f is a polynomial',
              'dx is chosen negative',
            ],
            answer: 1,
            explain: 'The error formula \u00bd f\u2033(a)(x \u2212 a)\u00b2 grows with BOTH the step and the bending \u2014 those are the two destroyers. A large slope merely stretches the line; polynomials are the friendliest case (constant curvature); a negative dx just walks left of the anchor, where the story is the same.',
          },
          {
            q: 'For f(x) = x\u00b3, the computed value carries a percentage error of about 9%. The percentage error of the measured input was:',
            options: ['27%', '9%', '3%', '1%'],
            answer: 2,
            explain: 'Equation (4) run backwards: dy/y = 3 dx/x, so 9% = 3 \u00d7 dx/x gives dx/x = 3%. 27% multiplies instead of dividing; 9% assumes the exponent is 1; 1% would need an exponent of 9. Inverse use of the multiplier \u2014 the same algebra in the other direction.',
          },
          {
            q: 'You must estimate \u221a26 by linearization. Which anchors are LEGITIMATE by this lesson\u2019s two conditions \u2014 exact evaluability AND closeness? (i) a = 25 (ii) a = 36 (iii) a = 1 (iv) a = 30',
            options: ['(i) only', '(i) and (ii) only', '(i), (ii) and (iii) only', 'all four of them'],
            answer: 0,
            explain: 'Only a = 25 passes both tests: \u221a25 = 5 exactly and |26 \u2212 25| = 1, giving L = 5.1 against a true 5.0990. a = 36 is exact (\u221a36 = 6) but ten units away: L = 6 \u2212 10/12 = 5.1667, sixty times the error of the a = 25 estimate \u2014 the closeness condition is not a nicety. a = 1 is exact but absurd: L = 1 + 25/2 = 13.5. a = 30 is close but \u221a30 has no clean value \u2014 and needing one would defeat the entire method.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: fluency with the derivative as a limit and with differentiating powers, roots, trigonometric and exponential functions. Within this chapter, the concavity-and-second-derivative lesson (\u00a772.3) turns the sign of f\u2033 into a full test and explains the overshoots met in Worked Examples 1 and 4, while the removing-discontinuities lesson (\u00a772.1) supplies the continuity backdrop that makes local approximation legitimate. Beyond: numerical analysis\u2019s Newton-type solvers iterate linearizations step after step; the physics course\u2019s small-angle pendulum and the statistics course\u2019s error-propagation formulas both spend this lesson\u2019s currency. Primary reading: OpenStax, Calculus Volume 1, \u00a74.2 \u2018Linear Approximations and Differentials\u2019 (openstax.org, CC BY-NC-SA) \u2014 the \u221a9.1 and sin-62\u00b0 drill set this lesson extends.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'A smooth curve under a microscope is its tangent: L(x) = f(a) + f\u2032(a)(x \u2212 a), and f(x) \u2248 L(x) for x near a.',
        'The gap is second-order: error \u2248 \u00bd f\u2033(a)(x \u2212 a)\u00b2 \u2014 the curvature at the anchor sets the error\u2019s size and its sign.',
        'Four-move drill: easy close anchor, f(a) and f\u2032(a), assemble L by equation (1), evaluate at the awkward point.',
        '\u221a9.1 \u2248 3.0167 (true 3.01662); sin 62\u00b0 \u2248 0.8835 with the step in radians; \u221b29 \u2248 3.0741.',
        'Differentials: dx free, dy = f\u2032(x) dx the forecast, \u0394y the truth \u2014 and dy/dx is the derivative as a genuine ratio.',
        'Error relay: output error \u2248 f\u2032(a) dx; relative error |dy/y|; power laws multiply it by the exponent \u2014 volume triples a radius error.',
        'The a = 0 family: sin \u03b8 \u2248 \u03b8, cos \u03b8 \u2248 1 \u2212 \u03b8\u00b2/2, e^x \u2248 1 + x, ln(1 + x) \u2248 x, (1 + x)\u207f \u2248 1 + nx.',
        'Accuracy is local: distance and curvature wear the ruler out \u2014 and the sign of f\u2033 says whether the line over- or underestimates.',
      ] },
    ],
  },
  {
    id: 'calc-concavity-second-derivative-test',
    title: 'Concavity and the Second Derivative Test',
    domain: 'Mathematics',
    field: 'Calculus',
    branch: 'Differential Calculus',
    tier: 'intermediate',
    concepts: [
      'Concave up means f\u2032 increasing; concave down means f\u2032 decreasing',
      'Test for Concavity via the sign of f\u2033',
      'Points of inflection where concavity flips',
      'Second Derivative Test for local extrema',
      'The inconclusive f\u2033(c) = 0 case',
      'Critical points versus inflection candidates',
    ],
    words: 1718,
    readMins: 9,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'The first derivative tells you which way a graph climbs; the second derivative tells you how the climbing itself changes — whether the curve is bending upward like a cup or downward like a dome. That bending is concavity, and it answers questions the first derivative cannot: is this slowing growth still growth, is this minimum really the bottom of a valley, where does a trend genuinely change character? The syllabus packages three skills under this heading — determining concavity, locating points of inflection, and using the Second Derivative Test to classify extrema — and all three run off one instrument: the sign of f\u2033, the derivative of the derivative.',
      },
      {
        kind: 'para',
        text: 'OpenStax\u2019s Calculus Volume 1 (§4.5) builds the definition from the first derivative rather than from pictures: f is concave up over an interval where f\u2032 is increasing, and concave down where f\u2032 is decreasing. That framing is worth savouring, because it converts concavity into a problem you already know how to solve — checking whether a function (here f\u2032) is increasing — which is what the Test for Concavity (Theorem 4.10) formalises: if f\u2033(x) > 0 on an interval, f is concave up there; if f\u2033(x) < 0, concave down. Geometrically, concave-up curves sit above their tangent lines (slopes steepening), concave-down curves sit below them (slopes flattening). A parabola y = x² is concave up everywhere because f\u2033 = 2 never changes sign; y = x³ switches from concave down to concave up at the origin, because f\u2033 = 6x flips sign there.',
      },
      { kind: 'heading', text: 'Points of inflection: where the bend flips' },
      {
        kind: 'para',
        text: 'A point (a, f(a)) is a point of inflection when f changes concavity at a and f is continuous at a. Two consequences follow immediately. First, candidates for inflection live only where f\u2033(x) = 0 or f\u2033 is undefined — a continuous function cannot switch from f\u2033 > 0 to f\u2033 < 0 without passing through zero (or breaking), by the same reasoning that pins critical points. Second, and more treacherous: f\u2033(a) = 0 is necessary, not sufficient. The function must actually change concavity at a. For y = x⁴, f\u2033 = 12x² is zero at 0 but never negative — the curve is concave up on both sides of 0, so the origin is not an inflection point, just a flat moment in a cup. Always test the sign of f\u2033 on each side before declaring a flip.',
      },
      {
        kind: 'para',
        text: 'The same sign-chart discipline that classifies critical points classifies inflection candidates. OpenStax\u2019s Example 4.17 runs it on f(x) = x³ \u2212 3x² \u2212 9x \u2212 1: f\u2032(x) = 3x² \u2212 6x \u2212 9 = 3(x \u2212 3)(x + 1), so the critical points are x = \u22121 and x = 3; f is increasing on (\u2212\u221e, \u22121), decreasing on (\u22121, 3), increasing on (3, \u221e) — a local maximum at x = \u22121 and a local minimum at x = 3. Now the second derivative f\u2033(x) = 6x \u2212 6 vanishes at x = 1, is negative to its left and positive to its right, so (1, f(1)) is the inflection point where the dome gives way to the cup — and note it sits neatly between the max and the min, as it must for a cubic.',
      },
      { kind: 'heading', text: 'The Second Derivative Test — and its honest limits' },
      {
        kind: 'para',
        text: 'The test converts concavity at a critical point into a classification. Suppose f\u2032(c) = 0. If f\u2033(c) > 0, the curve is concave up at c, so c is a local minimum — the curve bends up away from the point. If f\u2033(c) < 0, the curve is concave down at c, so c is a local maximum. In Example 4.17: f\u2033(\u22121) = \u221212 < 0 confirms the local max at x = \u22121, and f\u2033(3) = 12 > 0 confirms the local min at x = 3 — no sign chart needed once the second derivative is evaluated. The test\u2019s fine print is the case f\u2033(c) = 0 (or undefined): the test is inconclusive, and you fall back to the first-derivative sign chart. The two standard counters show why: for y = x⁴, f\u2033(0) = 0 yet 0 is a minimum; for y = x³, f\u2033(0) = 0 and 0 is neither max nor min. Identical second-derivative readings, different verdicts — the test genuinely cannot see the difference.',
      },
      {
        kind: 'para',
        text: 'OpenStax\u2019s Example 4.18 shows the machinery surviving rough terrain: f(x) = 5x^(1/3) \u2212 x^(5/3) has f\u2032(x) = 5(1 \u2212 x^(4/3))/(3x^(2/3)), with critical points at x = \u22121, x = 0 and x = 1 — including a point where f\u2032 is undefined because of the cube-root denominator. The sign analysis gives a local minimum at x = \u22121, a local maximum at x = 1, and no extremum at x = 0 despite f\u2032(0) being undefined, because f\u2032 does not change sign there. The lesson generalises: critical points (f\u2032 zero or undefined) are candidates, sign behaviour is the judge, and the second derivative is a fast judge when it is available and nonzero.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Full classification of a cubic',
        steps: [
          'f(x) = x³ \u2212 3x² \u2212 9x \u2212 1. First derivative: f\u2032(x) = 3x² \u2212 6x \u2212 9 = 3(x \u2212 3)(x + 1). Critical points: x = \u22121, x = 3.',
          'Concavity: f\u2033(x) = 6x \u2212 6, zero at x = 1, negative on (\u2212\u221e, 1), positive on (1, \u221e). So f is concave down then concave up, and (1, f(1)) is the inflection point.',
          'Second Derivative Test: f\u2033(\u22121) = \u221212 < 0 → concave down at the critical point → local maximum at x = \u22121.',
          'f\u2033(3) = 12 > 0 → concave up at the critical point → local minimum at x = 3. (Values: f(\u22121) = 6, f(3) = \u221226.)',
          'Counter-check for the inconclusive case: g(x) = x⁴ has g\u2032(0) = 0, g\u2033(0) = 0 — test silent. First-derivative chart shows g\u2032 negative left and positive right of 0: minimum after all. h(x) = x³ shows h\u2032 positive on both sides: no extremum.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'By definition, f is concave up on an interval exactly when…',
            options: [
              'f(x) > 0 throughout the interval',
              'f\u2032 is increasing on the interval',
              'f\u2033 exists on the interval',
              'the graph lies above the x-axis',
            ],
            answer: 1,
            explain: 'OpenStax defines concavity through the slope\u2019s behaviour: concave up means f\u2032 increasing (slopes steepening), which the Test for Concavity then detects via f\u2033 > 0. Positivity of f itself is irrelevant — a cup can live below the axis.',
          },
          {
            q: 'If f\u2033(c) > 0 and f\u2032(c) = 0, the Second Derivative Test classifies c as…',
            options: ['a local maximum', 'a local minimum', 'an inflection point', 'inconclusive'],
            answer: 1,
            explain: 'f\u2033(c) > 0 means concave up at c — the curve bends upward from a stationary point, the picture of a valley bottom. Hence local minimum.',
          },
          {
            q: 'For f(x) = x³ \u2212 3x² \u2212 9x \u2212 1, where does the inflection point sit?',
            options: ['x = \u22121', 'x = 1', 'x = 3', 'x = \u22121 and x = 3'],
            answer: 1,
            explain: 'f\u2033(x) = 6x \u2212 6 changes sign at x = 1, so concavity flips there — between the local max at \u22121 and the local min at 3.',
          },
          {
            q: 'f\u2033(a) = 0. Which conclusion is valid?',
            options: [
              'a is an inflection point',
              'a is a local extremum',
              'nothing yet — f\u2033 = 0 is only a candidate; a sign change in f\u2033 across a is required for inflection, and the extremum question needs other tools',
              'f must be a cubic',
            ],
            answer: 2,
            explain: 'x\u2074 (minimum at 0) and x³ (no extremum at 0) both have zero second derivative there: f\u2033(a) = 0 alone decides nothing. Inflection needs an actual concavity change; extrema need the First-Derivative Test when the second is silent.',
          },
          {
            q: 'A function\u2019s critical point has f\u2032 undefined but f defined. What is the right workflow?',
            options: [
              'discard the point — the test needs f\u2032 = 0',
              'sign-chart f\u2032 around the point; if f\u2032 changes sign, classify by direction (and only then consider f\u2033 if it exists)',
              'declare it an inflection point automatically',
              'declare it a local maximum automatically',
            ],
            answer: 1,
            explain: 'Example 4.18\u2019s x = 0 is exactly this case: f\u2032 undefined, no extremum, because f\u2032 keeps its sign. Candidates come from f\u2032 zero or undefined; verdicts come from sign behaviour.',
          },
          {
            q: 'Which pair correctly matches curve behaviour with tangent-line position?',
            options: [
              'concave up: graph above its tangents; concave down: graph below',
              'concave up: graph below its tangents; concave down: graph above',
              'both concavities: graph crosses its tangents',
              'tangent position is unrelated to concavity',
            ],
            answer: 0,
            explain: 'Steepening slopes (f\u2033 > 0) pull the curve above each tangent; flattening slopes (f\u2033 < 0) drop it below. This picture is also why linearization errors have a sign: the concavity lesson feeds directly into the tangent-approximation lesson.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Treating f\u2033 = 0 as an inflection guarantee — x\u2074 at the origin is the standing counterexample; a sign change in f\u2033 is the requirement. Running the Second Derivative Test at a point where f\u2032 \u2260 0 — the test only speaks at critical points. Applying it where f\u2033(c) = 0 and "guessing minimum because cup-shaped nearby" — the inconclusive case demands the first-derivative chart. Confusing critical points (f\u2032 = 0 or undefined) with inflection candidates (f\u2033 = 0 or undefined) — they are different suspect lists from different derivatives. And forgetting continuity in the inflection definition: a concavity flip across a break in the graph is not an inflection point.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the derivative-as-a-limit lesson and comfort with sign charts. Follow with the linearization lesson — concavity tells you whether a tangent approximation over- or under-shoots — and, for the fuller curve-sketching picture, pair with your algebra volume\u2019s polynomial-analysis sections. Primary reading: OpenStax, Calculus Volume 1, §4.5 "Derivatives and the Shape of a Graph" (openstax.org, CC BY-NC-SA) — Theorem 4.10 and Examples 4.17\u20134.18 are the canonical drills.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Concave up = f\u2032 increasing; concave down = f\u2032 decreasing.',
        'Test for Concavity: f\u2033 > 0 → up, f\u2033 < 0 → down (Theorem 4.10).',
        'Inflection = concavity flip with continuity; candidates at f\u2033 = 0 or undefined, confirmed by sign change.',
        'Second Derivative Test: at f\u2032(c) = 0, f\u2033(c) > 0 → min, f\u2033(c) < 0 → max, f\u2033(c) = 0 → inconclusive (fall back to f\u2032 signs).',
        'x\u2074 and x³ at 0 are the standing counters to "f\u2033 = 0 decides".',
        'Critical points and inflection candidates are different suspect lists — one from f\u2032, one from f\u2033.',
      ] },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'math-derivative-as-limit',
    title: 'The Derivative as a Limit',
    domain: 'Mathematics',
    field: 'Calculus',
    branch: 'Differential Calculus',
    tier: 'core',
    concepts: [
      'Average versus instantaneous rate of change',
      'Why instantaneous speed resisted definition for two millennia',
      'The falling-ball squeeze: averages over shrinking windows',
      'Secant lines closing onto the tangent',
      'The difference quotient, symbol by symbol',
      'Why the limit never substitutes h = 0',
      'Leibniz, Newton and Lagrange: three notations, one object',
      'Continuity, corners, and differentiability',
    ],
    words: 3416,
    readMins: 17,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'A car’s speedometer is a strange instrument. At any instant it reads a single number — sixty, perhaps — and we trust it enough to let fines be computed from it. Yet speed was understood for two thousand years as distance divided by time, and at a single instant both are zero: the reading 60 cannot come from dividing anything by anything. This lesson is about how mathematics answered the question the speedometer begs — what could instantaneous speed mean? The answer, the derivative, defined as a limit of average speeds over ever-smaller windows, became the most productive idea in the history of the subject. This chapter builds it the way it was discovered: from numbers, to pictures, to symbols.',
      },
      { kind: 'heading', text: 'From average speed to an impossible question' },
      {
        kind: 'para',
        text: 'Average speed is honest arithmetic. Drive 120 kilometres between 2 p.m. and 4 p.m. and your average over the window is 120 km ÷ 2 h = 60 km/h: total change in position divided by total change in time, describing the journey as if uniform. An average rate of change is always this division — change in output over change in input. For a position function s(t), the average speed between t and t + h is (s(t + h) − s(t)) / h, where h is the window width. The average is easy, useful, and — for a journey full of traffic lights and overtaken lorries — mildly fictional: it treats the whole window as one uniform block.',
      },
      {
        kind: 'para',
        text: 'The fiction bothered the Greeks first. Around 450 BCE, Zeno of Elea offered his arrow paradox: at any single instant, the flying arrow occupies exactly one position, no different from an arrow at rest — so where does its motion live? The challenge was serious: “speed at an instant”, taken literally, is 0 ÷ 0. Medieval scholars at Merton College, Oxford, in the 1330s proved the mean-speed theorem — a body speeding up uniformly covers the distance of one moving steadily at the mean of its initial and final speeds — a correct result about changing motion, achieved without any notion of instantaneous speed. Galileo, in his Discourses of 1638, established experimentally that a dropped ball falls a distance proportional to the square of the elapsed time: s = 4.9 t² in modern metres and seconds, the 4.9 being half the gravitational acceleration of 9.8 m/s². Everyone could compute averages over intervals; nobody had a number that deserved to be called the speed at one exact moment.',
      },
      {
        kind: 'para',
        text: 'The escape from 0 ÷ 0 is to refuse the single instant and study shrinking windows instead. Take Galileo’s falling ball, s(t) = 4.9 t², and ask how fast it is falling exactly two seconds after release. Over the window from t = 2 to t = 3, the ball falls from 19.6 m to 44.1 m — an average speed of (44.1 − 19.6) / 1 = 24.5 m/s, honest but coarse: a whole second of continuing acceleration folded in. Shrink the window. From t = 2 to t = 2.1: the ball falls from 19.6 m to 4.9 × 2.1² = 21.609 m, an average of (21.609 − 19.6) / 0.1 = 20.09 m/s. From t = 2 to t = 2.01: position 4.9 × 4.0401 = 19.79649 m, average (19.79649 − 19.6) / 0.01 = 19.649 m/s. Now the left. Over t = 1.9 to t = 2: (19.6 − 17.689) / 0.1 = 19.11 m/s; over t = 1.99 to t = 2: (19.6 − 19.40449) / 0.01 = 19.551 m/s. The averages are no longer wandering — from both sides they crowd onto 19.6. That number, the target of the squeeze rather than any member of it, is what mathematics now defines as the instantaneous speed.',
      },
      { kind: 'heading', text: 'The picture: secants closing onto the tangent' },
      {
        kind: 'para',
        text: 'Every average rate of change has a geometric body double. Draw the graph of y = f(x), mark a point P at x = a and a second point Q at x = a + h. The line through P and Q is a secant line, and its slope is exactly the average rate of change: rise Δy = f(a + h) − f(a), run Δx = h, slope = Δy / Δx. (Secant is Latin secare, “to cut” — the geometry chapter uses the same word for a line cutting a circle; no power-of-a-point theorems here.) Now let h shrink. Q slides along the curve toward P, and the secant pivots. The line the secants swing onto is the tangent at P — the line that kisses the curve at that point and shares its direction. The falling ball’s average speeds were secant slopes on the position graph; the instantaneous speed is the tangent slope.',
      },
      {
        kind: 'para',
        text: 'Read the figure in two passes. Left: the curve y = x², the fixed point P = (3, 9), the moving point Q = (3 + h, (3 + h)²). Three secants are drawn, for h = 2, 1 and 0.5, with slopes 8, 7 and 6.5; the bold line is the tangent, slope 6. Each halving of h brings the slope halfway down toward 6. Right: the same story in numbers — the quotient takes the values 7, 6.5, 6.1, 6.01 as h runs through 1, 0.5, 0.1, 0.01, and 5, 5.5, 5.9, 5.99 from the left. Both sides crowd onto 6 — and only when they agree does the tangent slope exist.',
      },
      {
        kind: 'figure',
        caption:
          'The derivative as a limit, seen two ways. LEFT — on y = x² with P(3, 9), the secant through Q(3 + h, (3 + h)²) has slope 6 + h; as h shrinks 2 → 1 → 0.5 the secants swing onto the tangent of slope 6 (bold). RIGHT — the quotient takes values 7, 6.5, 6.1, 6.01 from the right (h > 0) and 5, 5.5, 5.9, 5.99 from the left (h < 0); both sides crowd onto 6, so the limit exists and f′(3) = 6.',
        afterConcept: 4,
        svg: `<svg viewBox="0 0 880 540" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Secant lines through P on the curve y equals x squared rotating onto the tangent as h shrinks, beside the difference-quotient values crowding onto six from both sides">
  <style>.lbl{font-family:Georgia,serif;font-size:14px;fill:#3f3f46}.big{font-size:18px;font-weight:bold}.sm{font-size:12px;fill:#52525b}.ink{stroke:#8a8a93;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}.thin{stroke:#b8b8c0;fill:none;stroke-width:1.6}.rose{fill:#e11d48}.vio{fill:#7c3aed}.box{fill:none;stroke:#c8c8d0;stroke-width:1.6;stroke-dasharray:5 4}.midb{font-family:Georgia,serif;font-size:13.5px;font-weight:bold;fill:#3f3f46;text-anchor:middle}.mono{font-family:Georgia,serif;font-size:13px;fill:#3f3f46}</style>
  <rect x="24" y="52" width="404" height="452" rx="12" class="box"/>
  <text class="lbl big" x="40" y="78">The geometry — secants onto the tangent</text>
  <text class="sm" x="40" y="96">y = x² · fixed point P(3, 9) · moving point Q(3 + h, (3 + h)²)</text>
  <line x1="120" y1="118" x2="146" y2="118" stroke="#7c3aed" stroke-width="2.4"/><text class="sm" x="152" y="122">secant h = 2 · slope 8</text>
  <line x1="120" y1="138" x2="146" y2="138" stroke="#a78bfa" stroke-width="2.4"/><text class="sm" x="152" y="142">secant h = 1 · slope 7</text>
  <line x1="120" y1="158" x2="146" y2="158" stroke="#c4b5fd" stroke-width="2.4"/><text class="sm" x="152" y="162">secant h = 0.5 · slope 6.5</text>
  <line x1="120" y1="178" x2="146" y2="178" stroke="#e11d48" stroke-width="3.4"/><text class="sm" x="152" y="182">tangent · slope 6</text>
  <line x1="60" y1="470" x2="420" y2="470" class="ink"/>
  <line x1="60" y1="470" x2="60" y2="230" class="ink"/>
  <text class="sm" x="414" y="488">x</text>
  <text class="sm" x="44" y="240">y</text>
  <path d="M73.7 459.5 L87.4 454.8 L101.1 449.3 L114.8 443.0 L128.5 435.8 L142.2 427.8 L155.9 419.0 L169.6 409.3 L183.3 398.7 L197.0 387.4 L210.7 375.1 L224.4 362.1 L238.2 348.1 L251.9 333.4 L265.6 317.8 L279.3 301.4 L293.0 284.0 L306.7 265.9 L320.4 247.0 L334.1 227.1 L347.8 206.5 L361.5 185.0 L375.2 162.6" fill="none" stroke="#3f3f46" stroke-width="2.8" stroke-linecap="round"/>
  <line x1="155.9" y1="442.6" x2="354.7" y2="193.8" stroke="#7c3aed" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="169.6" y1="419.4" x2="316.9" y2="260.8" stroke="#a78bfa" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="183.3" y1="402.5" x2="289.6" y2="296.3" stroke="#c4b5fd" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="142.2" y1="438.4" x2="303.3" y2="289.8" stroke="#e11d48" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M352 214 C 320 250 282 288 254 328" fill="none" stroke="#52525b" stroke-width="1.6" stroke-dasharray="4 4"/>
  <path d="M254 328 l-1 -9 l8 4 z" fill="#52525b"/>
  <text class="sm" x="286" y="252">Q slides toward P as h → 0</text>
  <circle cx="210.7" cy="375.1" r="4.5" fill="#e11d48"/>
  <circle cx="347.8" cy="206.5" r="3.5" fill="#7c3aed"/>
  <circle cx="279.3" cy="301.4" r="3.5" fill="#a78bfa"/>
  <circle cx="245.0" cy="340.9" r="3.5" fill="#c4b5fd"/>
  <text class="sm" x="196" y="394" text-anchor="end">P (3, 9)</text>
  <text class="sm" x="356" y="200">Q (5, 25)</text>
  <text class="sm" x="286" y="296">Q (4, 16)</text>
  <text class="sm" x="252" y="338">Q (3.5, 12.25)</text>
  <text class="sm" x="360" y="180" font-style="italic">y = x²</text>
  <rect x="452" y="52" width="404" height="452" rx="12" class="box"/>
  <text class="lbl big" x="468" y="78">The arithmetic — both sides crowd onto 6</text>
  <text class="sm" x="468" y="96">difference quotient ( f(3 + h) − f(3) ) / h = 6 + h</text>
  <rect x="486" y="110" width="336" height="130" rx="10" class="box"/>
  <text class="lbl" x="502" y="132" font-weight="bold">from the right · h &gt; 0</text>
  <text class="mono" x="502" y="156">h = 1 → quotient 7</text>
  <text class="mono" x="502" y="178">h = 0.5 → quotient 6.5</text>
  <text class="mono" x="502" y="200">h = 0.1 → quotient 6.1</text>
  <text class="mono" x="502" y="222">h = 0.01 → quotient 6.01</text>
  <line x1="654" y1="244" x2="654" y2="260" stroke="#52525b" stroke-width="2"/>
  <path d="M654 266 l-4 -9 h8 z" fill="#52525b"/>
  <circle cx="654" cy="300" r="34" fill="#e11d48"/>
  <text x="654" y="310" text-anchor="middle" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#fff">6</text>
  <text class="lbl" x="654" y="356" text-anchor="middle" font-weight="bold">f′(3) = 6</text>
  <line x1="654" y1="366" x2="654" y2="380" stroke="#52525b" stroke-width="2"/>
  <path d="M654 386 l-4 -9 h8 z" fill="#52525b"/>
  <rect x="486" y="392" width="336" height="96" rx="10" class="box"/>
  <text class="lbl" x="502" y="412" font-weight="bold">from the left · h &lt; 0</text>
  <text class="mono" x="502" y="434">h = −1 → quotient 5</text>
  <text class="mono" x="502" y="454">h = −0.5 → quotient 5.5</text>
  <text class="mono" x="502" y="474">h = −0.1 → quotient 5.9</text>
  <text class="mono" x="676" y="434">h = −0.01 → 5.99</text>
  <text class="sm" x="654" y="512" text-anchor="middle">both one-sided crowds agree on 6 — the limit exists, so the tangent slope is defined</text>
</svg>`,
      },
      { kind: 'heading', text: 'The formal definition, symbol by symbol' },
      {
        kind: 'para',
        text: 'It is time to freeze the moving picture into a formula. Fix a function f and a point x, and step a distance h away: the output changes from f(x) to f(x + h). The fraction (f(x + h) − f(x)) / h is the difference quotient — the average rate of change of f over the window from x to x + h, and the slope of the secant through (x, f(x)) and (x + h, f(x + h)). Every symbol earns its place: f(x) is the height at the left edge, f(x + h) the height at the right edge, their difference the rise, h the run, the division the slope. The quotient is meaningful for every h ≠ 0, small or large, positive or negative — a machine with one free dial: h.',
      },
      {
        kind: 'formula',
        name: 'The difference quotient',
        latex: '\\frac{f(x+h) - f(x)}{h}',
        meaning:
          'Average rate of change over a window of width h: the slope of the secant through (x, f(x)) and (x + h, f(x + h)). Meaningful for every h ≠ 0.',
      },
      {
        kind: 'para',
        text: 'The derivative is the number the dial controls as h shrinks toward zero. Not the value at h = 0 — the quotient reads 0/0 there, undefined, and that is not a technicality but the entire point. The definition says: examine the quotient for h near zero but never equal to zero; if those values crowd onto a single number L, then L is the derivative of f at x. This is exactly the squeeze the falling ball performed onto 19.6. If the two sides disagree, or run away without bound, the derivative does not exist — no tangent slope there. The limit is a process of approach, never a substitution.',
      },
      {
        kind: 'formula',
        name: 'The derivative as a limit',
        latex: "f'(x) = \\lim_{h \\to 0}\\frac{f(x+h) - f(x)}{h}",
        meaning:
          'The number the difference quotient approaches as h shrinks toward zero from both sides. When the approach succeeds, f is differentiable at x and the tangent slope is f′(x).',
      },
      {
        kind: 'para',
        text: 'Symbols carry history, and this idea carries more than most. Isaac Newton, during the plague years of 1665–1666 exiled from Cambridge to Woolsthorpe, thought of quantities flowing through time and called the instantaneous rate a fluxion, written with a dot. Gottfried Wilhelm Leibniz, working independently in Paris a decade later — notebooks 1675, first publication 1684 — wrote dy/dx to keep the memory of a quotient of differences alive inside the notation. The partisans fought a priority war that poisoned English and continental mathematics for a century; the modern verdict: both invented calculus independently. Joseph-Louis Lagrange, in his Théorie des fonctions analytiques of 1797, introduced f′(x) to treat differentiation as a machine: feed in a function, receive its derivative. Read all three fluently — dy/dx to feel the shrinking quotient, f′(x) for a function of x, Newton’s dots for physics. The rigorous meaning of “approaches” waited for Cauchy’s Cours d’analyse of 1821 and Weierstrass’s ε–δ language; this lesson’s crowd-onto language is what those theories made exact.',
      },
      {
        kind: 'formula',
        name: 'Tangent slope at a point',
        latex: "m_{\\text{tangent}} = f'(a)",
        meaning:
          'The tangent line to y = f(x) at x = a has exactly this slope; the line itself is y = f(a) + f′(a)(x − a). Using that line as a calculator is the business of the next lesson, on linearization and differentials.',
      },
      { kind: 'heading', text: 'The algebra that makes it computable' },
      {
        kind: 'derivation',
        title: 'The derivative of x², straight from the definition',
        statement:
          'For f(x) = x², compute f′(x) straight from the limit definition. The strategy: expand the numerator, cancel the h, then let h approach zero — the same algebra that produced 19.6 m/s for the falling ball.',
        prerequisites: [
          'The difference quotient (f(x + h) − f(x)) / h',
          'A limit may be evaluated by substitution once the expression is defined at the target',
        ],
        steps: [
          {
            label: 'Write the quotient',
            formula: '$\\frac{(x+h)^2 - x^2}{h}$',
            explanation:
              'Substitute f(x) = x² into the difference quotient: the slope of the secant through (x, x²) and (x + h, (x + h)²), valid for every h ≠ 0.',
          },
          {
            label: 'Expand the numerator',
            formula: '$\\frac{x^2 + 2xh + h^2 - x^2}{h} = \\frac{2xh + h^2}{h}$',
            explanation:
              'The x² terms cancel — the fixed height leaves the rise, and only the change caused by the step h remains. That is why expansion helps.',
          },
          {
            label: 'Cancel the h',
            formula: '$2x + h$',
            explanation:
              'For every h ≠ 0 the quotient is exactly 2x + h. Check: at x = 3, h = 0.5 gives 6.5, h = 0.1 gives 6.1 — the figure’s right column. The falling ball is the same algebra with 4.9 built in: 19.6 + 4.9h.',
          },
          {
            label: 'Let h approach zero',
            formula: "$f'(x) = \\lim_{h \\to 0}(2x + h) = 2x$",
            explanation:
              '2x + h is defined at h = 0, so substitution is legal after the cancellation — it gives 2x. The tangent slope on y = x² is twice the x-coordinate: 6 at x = 3, 19.6 m/s for the ball at t = 2.',
          },
        ],
        result:
          'The derivative of x² is 2x — derived, not memorized. For the falling ball s(t) = 4.9 t², the speed at t = 2 is 4.9 × 2 × 2 = 19.6 m/s, the very number the shrinking averages crowded onto.',
      },
      { kind: 'heading', text: 'Three worked examples, three techniques' },
      {
        kind: 'example',
        title: 'A falling ball, finished honestly',
        steps: [
          'Identify what is asked: the instantaneous speed of s(t) = 4.9 t² at t = 2, from the definition.',
          'Write the quotient: (4.9 (2 + h)² − 19.6) / h, since s(2) = 19.6 exactly.',
          'Expand: 4.9 (4 + 4h + h²) − 19.6 = 19.6 h + 4.9 h².',
          'Divide by h: 19.6 + 4.9 h, valid for every h ≠ 0.',
          'Take the limit: 4.9 h vanishes, and the quotient crowds onto 19.6 from both sides — 19.649 at h = 0.01, 19.551 at h = −0.01.',
          'State the result: the speed at t = 2 is exactly 19.6 m/s, about 70.6 km/h — an answer that survives arithmetic.',
        ],
      },
      {
        kind: 'example',
        title: 'A square root: rationalize, then cancel',
        steps: [
          'Identify what is asked: f′(4) for f(x) = √x, from the definition.',
          'Write the quotient: (√(4 + h) − 2) / h. There is no binomial square to open — the h hides under the radical.',
          'Rationalize: multiply by the conjugate (√(4 + h) + 2). The numerator becomes (4 + h) − 4 = h, so the quotient is 1 / (√(4 + h) + 2).',
          'Cancel and substitute: the h is gone; at h = 0 the survivor gives 1 / (√4 + 2) = 1/4.',
          'Check numerically: at h = 0.01, (√4.01 − 2) / 0.01 ≈ 0.2498, closing onto 0.25 from below.',
          'State the result: f′(4) = 1/4 — the tangent at (4, 2) is gentle, because square roots flatten as they grow.',
        ],
      },
      {
        kind: 'example',
        title: 'A corner where the limit fails',
        steps: [
          'Identify what is asked: does f(x) = |x| have a derivative at x = 0? If not, why not, precisely?',
          'Write the quotient at x = 0: (|h| − 0) / h = |h| / h.',
          'Right side: for h > 0, |h| = h, so the quotient is 1 — every secant from the right has slope 1.',
          'Left side: for h < 0, |h| = −h, so the quotient is −1.',
          'Compare: the two sides crowd onto different numbers, 1 and −1, so the two-sided limit fails and no derivative exists at 0.',
          'State the result: |x| is continuous at 0 yet not differentiable — a corner. Compare x^(1/3) at 0, where the quotient 1 / h^(2/3) runs to infinity: a vertical tangent, still no derivative.',
        ],
      },
      { kind: 'heading', text: 'Differentiability implies continuity' },
      {
        kind: 'para',
        text: 'The corner example forces the question of how the two properties relate. Continuity at a point says the value there matches what nearby values approach — the removing-discontinuities lesson owns the three-condition test. Differentiability is strictly stronger: it demands not just that values approach, but that slopes approach. The one-line proof below shows the arrow runs one way, and the corner of |x| shows the converse fails. Jump discontinuities fail continuity first, so they cannot be differentiable; corners and vertical tangents preserve continuity but break slopes; smooth curves have both.',
      },
      {
        kind: 'derivation',
        title: 'Why differentiability forces continuity',
        statement:
          'If f′(x) exists, then f is continuous at x. The proof is one factorization: the change in output equals the average rate times the window width.',
        prerequisites: [
          'The limit definition of f′(x)',
          'Continuity at x means the change f(x + h) − f(x) crowds onto 0 as h approaches 0',
        ],
        steps: [
          {
            label: 'Factor the change in output',
            formula: '$f(x+h) - f(x) = \\frac{f(x+h) - f(x)}{h} \\cdot h$',
            explanation:
              'For h ≠ 0 this is an identity — the h’s cancel when multiplied out. It reframes the change in f as average rate × window width.',
          },
          {
            label: 'Take the limit of each factor',
            formula: "$\\lim_{h \\to 0}\\left(\\frac{f(x+h)-f(x)}{h} \\cdot h\\right) = f'(x) \\cdot 0 = 0$",
            explanation:
              'The first factor crowds onto f′(x), which exists by assumption; the second is h, which crowds onto 0. Products of convergent factors converge to the product.',
          },
          {
            label: 'Conclude',
            formula: '$\\lim_{h \\to 0} f(x+h) = f(x)$',
            explanation:
              'The change in output crowds onto zero, so nearby values crowd onto the value at the point — the definition of continuity.',
          },
        ],
        result:
          'Differentiability implies continuity; the converse fails — |x| at 0 is continuous, cornered, slopeless. Contrapositive bonus: if a function jumps, its derivative cannot exist, so you need not even form the quotient.',
      },
      {
        kind: 'callout',
        title: 'Where derivatives earn their keep',
        text: 'Newton built the derivative to do physics: velocity is the derivative of position, acceleration the derivative of velocity — this lesson’s falling ball is Newton’s program run on Galileo’s data. Economists read the derivative of a cost function as marginal cost — the cost of the next unit, a rate, not an average. Optimization in every discipline begins by setting a derivative to zero, because at a peak or valley the tangent is horizontal. And when Cauchy proposed gradient descent in 1847, he built the workhorse of machine learning: step against the derivative of the error, and you slide down the error surface. One idea, four centuries, still compounding.',
        tone: 'insight',
      },
      {
        kind: 'callout',
        title: 'Common pitfalls',
        text: 'Three mistakes cost most marks. First, substituting h = 0 into the difference quotient: it reads 0/0, and the limit is a squeeze, not a substitution. Second, believing continuity earns differentiability: |x| at 0 is continuous with one-sided slopes −1 and +1, and the limit still fails. Third, confusing the derivative f′(a), a number, with the tangent line y = f(a) + f′(a)(x − a) — the linearization lesson owns the craft of using that line as a calculator. A last trap hides in names: the Leibniz rule for differentiating integrals belongs to the definite-integral lesson later in this chapter; it shares Leibniz’s name, not this machinery.',
        tone: 'warn',
      },
      {
        kind: 'callout',
        title: 'Study path',
        text: 'Prerequisites: functions and graphs, and limits — the removing-discontinuities lesson of this chapter is the right warm-up, training the one-sided limits squeezed here. Next: the differentiation rules turn this algebra into shortcuts, each provable the way x² was proved here; linearization puts the tangent to work; concavity enlists the derivative twice. The grand symmetry arrives later, when integration accumulates what differentiation slices.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Key terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Average rate of change', def: 'Change in output over change in input: (f(x + h) − f(x)) / h.' },
          { term: 'Difference quotient', def: 'The same fraction, viewed as the slope of the secant through (x, f(x)) and (x + h, f(x + h)).' },
          { term: 'Secant line', def: 'A line cutting a curve twice; its slope is the average rate over the window between the points.' },
          { term: 'Tangent line', def: 'The line the secants crowd onto as h shrinks; slope f′(a) at x = a.' },
          { term: 'Derivative', def: 'The limit of the difference quotient as h approaches zero: the instantaneous rate of change.' },
          { term: 'Differentiable', def: 'Possessing a derivative at the point; forces continuity there.' },
          { term: 'Corner', def: 'A point like x = 0 on |x|: one-sided slopes exist but disagree.' },
          { term: 'Fluxion', def: 'Newton’s name for the instantaneous rate of a flowing quantity.' },
        ],
      },
      { kind: 'heading', text: 'Check your understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'For f(x) = x² at x = 3, the difference quotient with h = 0.1 equals:',
            options: ['6', '6.1', '6.5', '7'],
            answer: 1,
            explain: 'After cancellation the quotient is 2x + h = 6 + 0.1 = 6.1 — the secant through (3, 9) and (3.1, 9.61).',
          },
          {
            q: 'A ball falls from rest with s(t) = 4.9 t² metres. Its instantaneous speed at t = 2 is:',
            options: ['19.6 m/s', '24.5 m/s', '9.8 m/s', '39.2 m/s'],
            answer: 0,
            explain: 'The quotient collapses to 19.6 + 4.9h, whose limit is 19.6; 24.5 m/s is only the average over [2, 3].',
          },
          {
            q: 'For f(x) = √x, the derivative at x = 4 is:',
            options: ['1/2', '1/4', '2', '4'],
            answer: 1,
            explain: 'Rationalizing turns the quotient into 1 / (√(4 + h) + 2), which crowds onto 1/4 as h approaches zero.',
          },
          {
            q: 'The secant through (2, 4) and (5, 25) on the curve y = x² has slope:',
            options: ['6', '7', '8', '21'],
            answer: 1,
            explain: 'Rise 21 over run 3 gives 7 — the quotient 2x + h = 4 + 3.',
          },
          {
            q: 'Why is substituting h = 0 into the difference quotient always wrong?',
            options: [
              'it gives the wrong sign',
              'the quotient is 0/0 there; the derivative is the limit of the quotient, never its value at zero',
              'it only works for polynomials',
              'h must approach zero from the left only',
            ],
            answer: 1,
            explain: 'At h = 0 the quotient is 0/0. The definition examines h ≠ 0 and asks where the values crowd; substitution is legal only after algebra removes h from the denominator.',
          },
          {
            q: 'Which statement about continuity and differentiability is correct?',
            options: [
              'continuity implies differentiability',
              'differentiability implies continuity, and the converse fails',
              'the two properties are equivalent',
              'neither property implies the other',
            ],
            answer: 1,
            explain: 'The factorization proof gives the forward arrow; |x| at 0 — continuous, one-sided slopes −1 and +1 — breaks the reverse.',
          },
          {
            q: 'At x = 0 the function f(x) = x^(1/3) has:',
            options: [
              'a corner, like |x|',
              'a jump discontinuity',
              'a vertical tangent: the quotient h^(1/3) / h = 1 / h^(2/3) grows without bound',
              'a well-defined derivative equal to 0',
            ],
            answer: 2,
            explain: 'The secant slopes 1 / h^(2/3) run off to infinity: the tangent stands vertical, so no finite derivative exists.',
          },
          {
            q: 'Leibniz chose the notation dy/dx to remind the reader that:',
            options: [
              'derivatives only describe straight lines',
              'the derivative is the limit of quotients of differences',
              'dy and dx are ordinary numbers',
              'the derivative must be plotted to be used',
            ],
            answer: 1,
            explain: 'The notation preserves Δy / Δx passing to a limit — differences that vanish without ever dividing by zero.',
          },
        ],
      },
      { kind: 'heading', text: 'Five-minute recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Average rate of change is honest division: (f(x + h) − f(x)) / h, a secant slope.',
          'Instantaneous rate is the target of a squeeze: the limit as h approaches zero from both sides.',
          'The derivative of x² is 2x — expand, cancel h, substitute: the master template.',
          'Square roots yield to the conjugate; always cancel the h before taking the limit.',
          'Differentiability implies continuity; the converse fails at corners and vertical tangents.',
          'Newton, Leibniz, Lagrange: the dot, dy/dx, f′(x) — three notations, one idea.',
        ],
      },
    ],
  },
  {
    id: 'calc-definite-integral-properties',
    title: 'Properties of Definite Integrals: Reflection, Periodicity and the Leibniz Rule',
    domain: 'Mathematics',
    field: 'Calculus',
    branch: 'Integral Calculus',
    tier: 'advanced',
    concepts: [
      'The definite integral as independent of its dummy variable',
      'Sign swap on exchanging limits; concatenation of intervals',
      'The reflection property ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a − x)dx',
      'Symmetry about the mid-ordinate on [0, 2a]',
      'Periodic functions: ∫₀^{nT} f = n ∫₀^T f',
      'The workhorse ∫₀^{π/2} f(sin, cos) symmetry',
      'First mean value theorem for integrals',
      'Leibniz rule: differentiating an integral with variable limits',
    ],
    words: 2050,
    readMins: 10,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'Computing a definite integral from an antiderivative is only half the craft; the other half — the half that cracks the integrals no substitution will ever simplify — is a short list of structural properties that let you compare, fold and reflect integrals before computing anything. Joseph Edwards\u2019 classic treatise on the integral calculus opens its chapter of general theorems by saying these are propositions "many of which are almost self-evident from the definition of integration or from geometrical considerations… but which require to be definitely stated." Modern coaching culture has nicknamed the most powerful of them the King property; Edwards proves it as his Proposition IV, with a two-line substitution and a picture. This lesson states the full family, proves each one honestly, and then runs them on the classic integrals they were born to solve.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'These properties convert impossible integrals into arithmetic: they are the reason ∫₀^{π/2} sinⁿx/(sinⁿx + cosⁿx) dx can be evaluated without ever antidifferentiating, the reason periodic signals integrate over whole periods by multiplying one period, and — through the Leibniz rule — the foundation of how engineers differentiate accumulated quantities whose limits themselves move.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Foundational Properties' },
      {
        kind: 'para',
        text: 'Three properties are nearly free. The dummy-variable property: ∫ₐᵇ φ(x)dx = ∫ₐᵇ φ(z)dz — the letter of integration is a bookkeeping device; both sides equal Ψ(b) − Ψ(a) for any antiderivative Ψ. The sign-swap property: reversing the limits multiplies the integral by −1, ∫ₐᵇ = −∫ᵇₐ, again because Ψ(b) − Ψ(a) flips sign. And concatenation: for any intermediate c, ∫ₐᵇ φ = ∫ₐᶜ φ + ∫ᶜᵇ φ — geometrically, the area under the curve adds up piece by piece. Edwards draws the picture for areas and the proofs are one line each, but every later property leans on these three.',
      },
      {
        kind: 'para',
        text: 'Now the first star. Proposition IV — the reflection property: for any integrable f, ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a − x)dx. The proof is a model of substitution craft: set x = a − X, so dx = −dX and the limits swap (x = 0 gives X = a, x = a gives X = 0); then ∫₀ᵃ f(x)dx = −∫ₐ⁰ f(a − X)dX = ∫₀ᵃ f(a − X)dX by the sign-swap property, and the dummy-variable property renames X back to x. Geometrically, as Edwards puts it, you may take the origin at the far end and add up the area from right to left instead of left to right — it cannot affect the total. The property looks almost too innocent to matter; the worked examples below show it demolishing integrals that resist every direct attack.',
      },
      {
        kind: 'formula',
        name: 'The reflection (King) property and its 2a companion',
        latex: '\\int_0^a f(x)\\,dx = \\int_0^a f(a-x)\\,dx \\qquad\\qquad \\int_0^{2a} f(x)\\,dx = \\int_0^a f(x)\\,dx + \\int_0^a f(2a-x)\\,dx',
        meaning: 'Left: a definite integral equals its own mirror image about the midpoint a/2. Right: the integral over [0, 2a] folds onto [0, a] — so if f(2a − x) = f(x) the integral doubles to 2∫₀ᵃ, and if f(2a − x) = −f(x) it vanishes.',
      },
      {
        kind: 'para',
        text: 'The 2a symmetry propositions follow by splitting [0, 2a] at a and reflecting the second half by the same substitution. Two corollaries do enormous work. If f(2a − x) = f(x) — symmetry about the mid-ordinate, like sin²x on [0, π] — then ∫₀²ᵃ f = 2∫₀ᵃ f. If f(2a − x) = −f(x) — antisymmetry about the midpoint, like cos³x on [0, π] — the integral is exactly zero: the two halves cancel algebraically. Edwards notes this is "very useful in the integrals of the trigonometric or of any periodic functions": since sinⁿ(π − x) = sinⁿx, we get ∫₀^π sinⁿx dx = 2∫₀^{π/2} sinⁿx dx, while cos^{2n+1}(π − x) = −cos^{2n+1}x forces ∫₀^π cos^{2n+1}x dx = 0. Over a full period both symmetries combine: ∫₀^{2π} sin^{2n}x dx = 4∫₀^{π/2} sin^{2n}x dx, and the odd cosine powers vanish outright.',
      },
      {
        kind: 'para',
        text: 'The periodic property deserves its own statement: if f has period T (meaning f(x + T) = f(x) for all x), then ∫₀^{nT} f(x)dx = n ∫₀^T f(x)dx. The graph is the same curve repeated n times, so the areas over successive periods are equal — Edwards\u2019 picture shows the copies stacked along the axis. One subtlety worth flagging: the periodic property does NOT say an integral over an arbitrary window of length T is period-independent; it counts whole periods from a fixed origin. And a companion fact for the trigonometric workhorse: on [0, π/2] the substitution x → π/2 − x swaps sine and cosine, so ∫₀^{π/2} f(sin x, cos x)dx = ∫₀^{π/2} f(cos x, sin x)dx — the reason sinⁿ and cosⁿ share the same integral over the first quadrant, ∫₀^{π/2} sinⁿx dx = ∫₀^{π/2} cosⁿx dx, for every n.',
      },
      {
        kind: 'para',
        text: 'One comparison result completes the family. The first mean value theorem for integrals: if φ is continuous and ψ keeps one sign on [a, b], then ∫ₐᵇ φ(x)ψ(x)dx = φ(ξ)∫ₐᵇ ψ(x)dx for some ξ between a and b — informally, a weighted average of φ is attained somewhere inside. With ψ = 1 this says the integral equals (b − a) times some intermediate value of the function: the average height is actually achieved. Edwards derives it by squeezing the integral between the maximum and minimum values scaled by ∫ψ, then invoking continuity to land exactly on some intermediate value.',
      },
      { kind: 'heading', text: 'The Leibniz Rule' },
      {
        kind: 'para',
        text: 'Edwards\u2019 next chapter changes the question: instead of evaluating integrals, differentiate them. Let u = ∫_{a(c)}^{b(c)} φ(x, c)dx, where the integrand carries a parameter c and the limits themselves move with c. Then the Leibniz rule states du/dc = φ(b, c)·db/dc − φ(a, c)·da/dc + ∫_{a}^{b} ∂φ/∂c dx. Read it as three contributions: the top limit slides and contributes the new area swept in at the top, the bottom limit slides and subtracts the area swept out at the bottom, and the integrand itself thickens or thins everywhere in between. Edwards proves it by expanding u(c + δc) − u(c), using the mean value theorem on the two limit terms (each strip contributes its height times its width δb or δa) and on the interior change, then letting δc vanish; his geometric picture is exactly the area-sweping interpretation. The rule is how accumulation functions with moving boundaries are differentiated — and, read in reverse with a cleverly chosen parameter, it evaluates whole families of integrals by solving a differential equation in c.',
      },
      {
        kind: 'formula',
        name: 'Leibniz rule for variable limits and a parameter',
        latex: '\\frac{d}{dc}\\int_{a(c)}^{b(c)} \\varphi(x, c)\\,dx \\;=\\; \\varphi(b, c)\\,\\frac{db}{dc} \\;-\\; \\varphi(a, c)\\,\\frac{da}{dc} \\;+\\; \\int_{a(c)}^{b(c)} \\frac{\\partial \\varphi}{\\partial c}\\,dx',
        meaning: 'The derivative of a moving-window integral: top-edge contribution minus bottom-edge contribution plus the interior thickening. With no parameter and constant lower limit this collapses to the Fundamental Theorem of Calculus.',
      },
      { kind: 'heading', text: 'Worked Examples' },
      {
        kind: 'example',
        title: 'Worked Example — the reflection property evaluates an "impossible" integral',
        steps: [
          'Let I = ∫₀^{π/2} sinⁿx / (sinⁿx + cosⁿx) dx for any positive n. No substitution simplifies it — apply reflection with a = π/2: I = ∫₀^{π/2} sinⁿ(π/2 − x) / (sinⁿ(π/2 − x) + cosⁿ(π/2 − x)) dx.',
          'Use sin(π/2 − x) = cos x and cos(π/2 − x) = sin x: I = ∫₀^{π/2} cosⁿx / (cosⁿx + sinⁿx) dx.',
          'Add the two expressions: 2I = ∫₀^{π/2} [sinⁿ/(sinⁿ + cosⁿ) + cosⁿ/(cosⁿ + sinⁿ)] dx = ∫₀^{π/2} 1 dx = π/2, because the numerators sum to exactly the shared denominator.',
          'Hence I = π/4 — independent of n. The integral never needed an antiderivative; reflection plus addition did everything.',
          'The same template powers many classics: replace sinⁿ + cosⁿ by any symmetric combination f(sin, cos) and the folded sum still simplifies.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example — folding [0, π] and differentiating a moving window',
        steps: [
          'Let I = ∫₀^π x sin x / (1 + cos²x) dx. The x-factor blocks every direct attack. Reflect about a = π: I = ∫₀^π (π − x) sin(π − x) / (1 + cos²(π − x)) dx = ∫₀^π (π − x) sin x / (1 + cos²x) dx, since sin(π − x) = sin x and cos²(π − x) = cos²x.',
          'Add the two forms: 2I = ∫₀^π π sin x / (1 + cos²x) dx = π ∫₀^π sin x / (1 + cos²x) dx.',
          'Evaluate the remaining integral by substitution t = cos x, dt = −sin x dx: it becomes ∫ from t = 1 to t = −1 of −dt/(1 + t²) = [arctan t] from −1 to 1 = π/4 − (−π/4) = π/2.',
          'So 2I = π · π/2 = π²/2, giving I = π²/4 — one of the most celebrated applications of the folding idea.',
          'Leibniz companion: let F(x) = ∫ₓ^{2x} (sin t)/t dt. Then F\u2032(x) = (sin 2x)/(2x) · 2 − (sin x)/x · 1 = sin 2x / x − sin x / x. The top edge contributes its height times its sliding speed 2, the bottom edge subtracts its height times speed 1, and there is no parameter term.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Signal processing: the average power of a periodic waveform over whole periods is n times one period\u2019s energy — the periodic property doing the bookkeeping',
          'Probability: expected values of symmetric distributions often need no antiderivative at all — reflection and antisymmetry make half the computation vanish',
          'Physics accumulations: work from a moving boundary, heat entering a growing control volume, and flux through a sliding surface are all Leibniz-rule problems',
          'Numerical analysis: error bounds and quadrature estimates lean on the first mean value theorem to replace an integral by a representative value times a length',
          'Economics: accumulated revenue between two moving dates (price index changing, window shifting) is exactly a variable-limit integral awaiting the Leibniz rule',
        ],
      },
      { kind: 'heading', text: 'Pitfalls and Exam Traps' },
      {
        kind: 'list',
        items: [
          'Applying the reflection property on [0, π/2] with f(2a − x): match the property to the interval — the [0, a] reflection uses a − x, the [0, 2a] fold uses 2a − x',
          'Forgetting that reflection gives a SECOND expression for I, not a value: the power move is adding the two expressions so the integrands combine',
          'Using ∫₀^{nT} = n∫₀^T for windows that are not whole periods from the origin — the periodic property counts complete periods only',
          'Dropping the sign on the lower-limit term of the Leibniz rule — it enters with a minus, and reversing limits silently flips answers',
          'Citing the reflection property for improper integrals without checking convergence first — the substitution is legal only when the integral exists',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: 'Reflection property', def: '∫₀ᵃ f(x)dx = ∫₀ᵃ f(a − x)dx: the integral equals its mirror about the midpoint; proved by the substitution x = a − X plus sign-swap.' },
          { term: 'Folding property', def: '∫₀²ᵃ f = ∫₀ᵃ [f(x) + f(2a − x)] dx; doubles symmetric integrands and kills antisymmetric ones.' },
          { term: 'Periodic property', def: 'For f with period T: ∫₀^{nT} f = n ∫₀^T f — whole periods multiply.' },
          { term: 'First mean value theorem', def: '∫ₐᵇ φψ = φ(ξ)∫ₐᵇ ψ for some ξ in (a, b) when ψ keeps one sign; with ψ = 1 the integral is a length times an attained average height.' },
          { term: 'Leibniz rule', def: 'The derivative of ∫_{a(c)}^{b(c)} φ(x, c)dx: top-edge term minus bottom-edge term plus the parameter derivative integrated inside.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The value of ∫₀^{π/2} sin⁵x / (sin⁵x + cos⁵x) dx is:',
            options: [
              'π/8',
              'π/4',
              'π/2',
              'it depends on the antiderivative of sin⁵x',
            ],
            answer: 1,
            explain: 'By reflection (x → π/2 − x) the integral equals ∫₀^{π/2} cos⁵/(cos⁵ + sin⁵) dx; adding the two forms gives 2I = ∫₀^{π/2} 1 dx = π/2, so I = π/4 for ANY positive power — no antiderivative required.',
          },
          {
            q: '∫₀^π x sin x / (1 + cos²x) dx equals:',
            options: [
              'π²/4',
              'π²/2',
              'π/4',
              '0, by antisymmetry about π/2',
            ],
            answer: 0,
            explain: 'Reflection about π gives I = ∫₀^π (π − x) sin x/(1 + cos²x) dx; adding, 2I = π∫₀^π sin x/(1 + cos²x) dx = π · π/2 = π²/2, so I = π²/4. Note the integrand is NOT antisymmetric — the x-factor breaks that.',
          },
          {
            q: 'If f has period 2π and ∫₀^{2π} f(x)dx = 6, then ∫₀^{8π} f(x)dx equals:',
            options: [
              '6',
              '12',
              '24',
              '48',
            ],
            answer: 2,
            explain: '8π is exactly 4 full periods, so the periodic property gives 4 × 6 = 24. Counting periods (8π/2π = 4) is the whole task — but only because the window starts at 0 and covers whole periods.',
          },
          {
            q: 'For F(x) = ∫₀^{x²} cos t dt, the derivative F\u2032(x) is:',
            options: [
              'cos(x²)',
              '2x cos(x²)',
              'x² cos(x²)',
              'sin(x²)',
            ],
            answer: 1,
            explain: 'Leibniz rule with top limit b(x) = x²: F\u2032(x) = cos(x²) · 2x − 0 = 2x cos(x²). The chain rule on the moving limit is exactly the top-edge term; forgetting the factor 2x is the classic error.',
          },
        ],
      },
    ],
  },
]

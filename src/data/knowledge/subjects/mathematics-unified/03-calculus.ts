/**
 * Knowledge Universe — Mathematics — Chapter 03: Calculus
 * 5 lessons · ~10,442 words (§3.4 rewritten 2026-11-02 to textbook standard: 983 → 3,416 words, figure plate added)
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
      'Differentials dy = f\u2032(x) dx',
      'Relative and percentage error estimation',
      'Accuracy decays with distance from the anchor',
      'The (1 + x)^n \u2248 1 + nx micro-approximation',
    ],
    words: 1530,
    readMins: 8,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Every smooth curve, viewed through a microscope, looks like its tangent line. Linearization turns that observation into a computational tool: if you know a function\u2019s value and derivative at one convenient point a, you can approximate its values at all nearby points using nothing more than a straight line — no calculator required. The syllabus pairs this with differentials, the same idea written in the language of small changes: estimate how much the output moves when the input wobbles by a little dx. Together these form the standard unit on approximating values with tangent lines and linearization at a point, and they power the applied question every exam loves: if a measurement is off by this much, how far off is the computed answer?',
      },
      {
        kind: 'para',
        text: 'The formula is short enough to memorise and worth understanding rather than memorising. The tangent line to f at x = a passes through the point (a, f(a)) with slope f\u2032(a). Its point-slope equation is y = f(a) + f\u2032(a)(x \u2212 a). OpenStax\u2019s Calculus Volume 1 (§4.2) names the right-hand side the linearization of f at a, written L(x) = f(a) + f\u2032(a)(x \u2212 a), and states the approximation as f(x) \u2248 L(x) for x near a. Why it works: near a, the tangent hugs the curve — both share the same value at a and the same slope there, so their gap is genuinely second-order small, shrinking much faster than the distance from a. Why it eventually fails: as x travels away from a, the curve bends while the line does not, and the gap widens. Approximation quality is always a story about distance from the anchor point.',
      },
      { kind: 'heading', text: 'The method, executed' },
      {
        kind: 'para',
        text: 'The drill has four moves. Choose an anchor a where f is easy to evaluate exactly and a\u2019s neighbour x is genuinely close. Compute f(a) and f\u2032(a). Assemble L(x) = f(a) + f\u2032(a)(x \u2212 a). Evaluate L at the awkward input. OpenStax\u2019s flagship example: approximate \u221a9.1. Take f(x) = \u221ax with anchor a = 9, where f(9) = 3 and f\u2032(x) = 1/(2\u221ax) so f\u2032(9) = 1/6. Then L(x) = 3 + (x \u2212 9)/6, and \u221a9.1 \u2248 3 + 0.1/6 \u2248 3.0167. The true value is 3.01662… — five digits of accuracy from one derivative. The same template with f(x) = sin x anchored at \u03c0/3 (where sin(\u03c0/3) = \u221a3/2 and cos(\u03c0/3) = 1/2) gives sin 62\u00b0 \u2248 0.88348, and the anchor a = 0 on f(x) = (1 + x)^n collapses to the famous micro-approximation (1 + x)^n \u2248 1 + nx, which prices (1.01)\u00b3 \u2248 1.03 instantly.',
      },
      {
        kind: 'para',
        text: 'Differentials re-phrase the same line in increment language. For y = f(x), define dx as an independent small change in the input and dy = f\u2032(x) dx as the resulting change predicted along the tangent. The ratio dy/dx recovers the derivative — the notation is doing double duty — but the productive reading is predictive: dy is what the output change would be if the graph were its tangent. OpenStax works y = x² + 2x at x = 3 with dx = 0.1: dy = (2x + 2)dx = 8 × 0.1 = 0.8, while the true change \u0394y = f(3.1) \u2212 f(3) = 0.81. The tangent\u2019s prediction misses by 0.01, the size of the ignored curvature — small precisely because dx is small.',
      },
      { kind: 'heading', text: 'Error estimation: the applied payoff' },
      {
        kind: 'para',
        text: 'Where the syllabus docks real weight is measurement error. If a quantity a is measured with a small error dx, the computed f(a) carries error approximately \u0394y \u2248 dy = f\u2032(a) dx — the derivative is a sensitivity coefficient converting input error into output error. Divide by the size of the output to get the relative error |dy/y|, and multiply by 100 for the percentage error. The logic explains everyday surprises: measuring a radius slightly wrong poisons a sphere\u2019s volume three times as strongly in relative terms, because V = (4/3)\u03c0r³ differentiates to dV = 4\u03c0r² dr, so dV/V = 3 dr/r. A half-percent radius error is a one-and-a-half-percent volume error — the exponent is the error multiplier, a shortcut worth internalising for any power-law quantity.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Anchor choice and error propagation',
        steps: [
          'Part A: estimate \u221a9.1. Anchor a = 9 (perfect square, adjacent to 9.1). f\u2032(x) = 1/(2\u221ax), so f\u2032(9) = 1/6.',
          'Assemble L(x) = 3 + (1/6)(x \u2212 9). Evaluate at x = 9.1: L = 3 + 0.1/6 \u2248 3.0167 — matching OpenStax\u2019s value, and within 0.0001 of the true \u221a9.1.',
          'Part B: y = x² + 2x measured at x = 3 with dx = 0.1. dy = (2x + 2)dx = 8(0.1) = 0.8; the actual \u0394y = 0.81. Report dy as the estimate and note the 0.01 curvature shortfall.',
          'Part C: a rod\u2019s length is measured as 10 cm with possible error 0.05 cm; its area scales as L². Relative error in area \u2248 2 × (0.05/10) = 1%, by the power-law rule dA/A = 2 dL/L.',
          'Sanity check: in each case the anchor was easy to evaluate exactly and the probe point was close. Had we anchored \u221ax at 1 to approximate \u221a9.1, the line 1 + (x \u2212 1)/2 predicts 5.05 — a disaster, because 9.1 is nowhere near the anchor.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'What is the linearization L(x) of f at x = a?',
            options: [
              'L(x) = f(a) + f\u2032(a)(x \u2212 a)',
              'L(x) = f\u2032(a)(x \u2212 a)',
              'L(x) = f(a) + f(a)(x \u2212 a)',
              'L(x) = f(x) + f\u2032(x)(x \u2212 a)',
            ],
            answer: 0,
            explain: 'It is the tangent line at a in point-slope form: value f(a) at the anchor plus slope f\u2032(a) times the horizontal offset. Options B and C drop the value or the slope; option D is circular.',
          },
          {
            q: 'Using the tangent at a = 9, what is the estimate of \u221a9.1?',
            options: ['3.0167', '3.1', '3.05', '9.0167'],
            answer: 0,
            explain: 'L(x) = 3 + (x \u2212 9)/6 gives 3 + 0.1/6 \u2248 3.0167 — OpenStax\u2019s worked value, accurate to about four decimal places.',
          },
          {
            q: 'For y = (1 + x)\u00b3, the linearization at a = 0 gives which approximation?',
            options: ['(1 + x)\u00b3 \u2248 1 + 3x', '(1 + x)\u00b3 \u2248 3x', '(1 + x)\u00b3 \u2248 x\u00b3', '(1 + x)\u00b3 \u2248 1 + x\u00b3'],
            answer: 0,
            explain: 'The general rule (1 + x)^n \u2248 1 + nx comes from f(0) = 1 and f\u2032(0) = n; for n = 3 this prices (1.01)\u00b3 \u2248 1.03, matching OpenStax\u2019s example.',
          },
          {
            q: 'A measurement error dx in the input produces what estimated error in f(a)?',
            options: [
              '\u0394y \u2248 dy = f\u2032(a) dx',
              '\u0394y \u2248 dx\u00b2',
              '\u0394y \u2248 f(a) dx',
              'no error can be estimated without the second derivative',
            ],
            answer: 0,
            explain: 'The differential dy = f\u2032(a) dx is the tangent\u2019s prediction of the output change; the second derivative governs how wrong that prediction is, not the first-order estimate itself.',
          },
          {
            q: 'The radius of a sphere is measured with 0.5% relative error. Roughly what relative error does the volume inherit?',
            options: ['0.5%', '1.5%', '3%', '0.17%'],
            answer: 1,
            explain: 'V = (4/3)\u03c0r\u00b3 is a power law with exponent 3, so dV/V = 3 dr/r — the relative error triples to about 1.5%. Exponents are error multipliers.',
          },
          {
            q: 'When does a linearization start giving poor estimates?',
            options: [
              'when f\u2032(a) is large',
              'when x moves far from the anchor a, so curvature accumulates',
              'when f is a polynomial',
              'when dx is chosen negative',
            ],
            answer: 1,
            explain: 'The tangent matches the curve in value and slope only at a; away from a the graph bends and the line does not, so the gap grows. A large slope merely stretches the line — the failure is about distance and curvature.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Anchoring at a point that is easy but distant — the tangent at a = 1 says \u221a9.1 \u2248 5.05, and the method\u2019s accuracy guarantee never applied at that distance. Mixing up dy and \u0394y: dy is the tangent\u2019s prediction (0.8 in OpenStax\u2019s y = x² + 2x example), \u0394y is the true change (0.81); exams ask for both, distinguished. Forgetting to square the error multiplier for power laws — area carries twice the input\u2019s relative error, volume three times. Reporting percentage error as a decimal (0.015 instead of 1.5%). And differentiating with respect to the wrong variable in applied word problems: identify which measured quantity carries the dx before computing anything.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the derivative-as-a-limit lesson for f\u2032 fluency. Follow with the concavity-and-second-derivative lesson to quantify exactly when the tangent overshoots (concave down) or undershoots (concave up), and the removing-discontinuities lesson for the continuity backdrop that makes local approximation legitimate. Primary reading: OpenStax, Calculus Volume 1, §4.2 "Linear Approximations and Differentials" (openstax.org, CC BY-NC-SA) — the \u221a9.1, sin 62\u00b0 and (1.01)\u00b3 examples are the canonical drill set.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'L(x) = f(a) + f\u2032(a)(x \u2212 a): value at the anchor, slope at the anchor, straight line beyond.',
        'Four-move drill: easy anchor, f(a) and f\u2032(a), assemble L, evaluate at the awkward point.',
        '\u221a9.1 \u2248 3.0167 from a = 9; sin 62\u00b0 \u2248 0.88348 from \u03c0/3; (1 + x)^n \u2248 1 + nx from 0.',
        'Differentials: dy = f\u2032(x) dx predicts output change; \u0394y is the truth dy approximates.',
        'Error relay: input error dx becomes output error f\u2032(a) dx; relative error |dy/y|; power-law exponents multiply it.',
        'Accuracy is local — near a it is excellent, and it decays as the curve bends away from the line.',
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

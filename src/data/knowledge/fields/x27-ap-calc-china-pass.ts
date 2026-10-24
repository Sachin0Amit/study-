import type { KnowledgeTopic } from '../types'

/** Expansion pass X27 (2026-10-24): the calculus-fine-points and modern-China
 *  sweep. After the X17–X26 passes drove the exam-coverage audit to 99%
 *  (2398/2427), the remaining 29 unmapped topics clustered on exactly two
 *  families: the three shared AP-Calculus unit topics that both AB and BC
 *  syllabi list separately (Removing Discontinuities; Linearization and Local
 *  Linearity; Concavity and the Second Derivative Test — 6 unmapped entries
 *  across the two syllabi), and the modern-China history block of the Gaokao
 *  preferred-subject history track (Aggression and national salvation
 *  1840–1949; The People's Republic since 1949). Each candidate below was
 *  cross-checked against coverage/coverage.json (4,455+ sections across 201
 *  subjects), the dedup ledger and the knowledge index before authoring:
 *  1. calc-removing-discontinuities — the three-part continuity definition,
 *     the removable/jump/infinite classification, and the piecewise repair.
 *     Zero overlap: math-derivative-as-limit owns the derivative-as-limit
 *     definition (verified grep — no 'discontinuit' hit anywhere in
 *     coverage.json's section titles; the masters calculus volume owns
 *     derivative rules, not the continuity taxonomy).
 *  2. calc-linearization-differentials — tangent-line approximation,
 *     differentials dy = f'(x)dx, relative/percentage error. Zero overlap:
 *     no 'linearization' or 'differential approximation' section exists
 *     (verified grep; the only 'linear' hits are algebra/systems sections).
 *  3. calc-concavity-second-derivative-test — concavity via f', the Test
 *     for Concavity, inflection points, the Second Derivative Test and its
 *     inconclusive case. Zero overlap: no 'concavit' hit in coverage.json
 *     (verified grep); math-derivative-as-limit stops at the definition.
 *  4. hist-modern-china-aggression-salvation — the 1840–1949 arc from the
 *     Opium Wars through the War of Resistance: unequal treaties, the
 *     Taiping convulsion, the Boxer catastrophe, 1911, May Fourth, the
 *     CCP–KMT struggle, the Long March, the Japanese invasion. Zero overlap:
 *     hist-world-wars owns the European theatre of the world wars; the only
 *     China hits in the existing Library are passing mentions inside
 *     hist-nomads-indigenous-modernisation (modernisation comparisons) and
 *     hum-silk-road-exchange (pre-1800 trade) — verified grep for 'opium',
 *     'taiping', 'may fourth', '1911' across all field files.
 *  5. hist-peoples-republic-china — 1949 consolidation, the First Five-Year
 *     Plan, the Great Leap Forward, the Cultural Revolution, and the
 *     post-1978 household-responsibility reform arc. Zero overlap verified:
 *     no existing lesson teaches PRC history (grep for 'great leap',
 *     'cultural revolution', 'people's republic' — only one contextual hit
 *     inside pol-ir-theory's Cold-War narrative).
 *  Sources read while writing (legally open):
 *  - OpenStax, Calculus Volume 1 (openstax.org, CC BY-NC-SA) — §2.4
 *    'Continuity' (the three conditions, Example 2.26 f(x)=(x²−4)/(x−2),
 *    Example 2.27 jump at a piecewise seam, Example 2.28 sin(x)/x with
 *    f(0)=1, Example 2.32 (x+2)/(x+1) infinite at −1, Example 2.34
 *    √(4−x²) on [−2,2], the Composite Function Theorem); §4.2 'Linear
 *    Approximations and Differentials' (L(x)=f(a)+f'(a)(x−a), dy=f'(x)dx,
 *    √9.1 via the tangent at a=9, sin 62° via a=π/3, (1.01)³ ≈ 1+3x,
 *    dy versus Δy at x=3, dx=0.1 for y=x²+2x); §4.5 'Derivatives and the
 *    Shape of a Graph' (Theorem 4.10 Test for Concavity, inflection-point
 *    definition, Example 4.17 f(x)=x³−3x²−9x−1 with critical points −1 and
 *    3, Example 4.18 5x^{1/3}−x^{5/3} with a non-extremum at 0).
 *  - LibreTexts, Introduction to Comparative Politics (Belanger & Moore,
 *    Saint Mary's College edition, CC licensed) — ch.5 'The Political
 *    Development of Modern China': the century-of-humiliation framing,
 *    1842 Treaty of Nanking (Hong Kong to 1997, tariff and legal
 *    concessions), Taiping Rebellion 1850–64 (Hong Xiuquan, 30+ million
 *    dead, land-reform and gender-equality legacies), Boxer uprising 1900
 *    (eight foreign armies), 1911–12 republic and Yuan Shikai, May Fourth
 *    1919 and the Versailles transfer of German concessions, CCP founded
 *    1921, the 1924 United Front, the April 1927 Shanghai massacre, the
 *    Long March to Yan'an, the 1937 Japanese invasion and the PLA, the
 *    1 October 1949 proclamation at Tiananmen.
 *  - LibreTexts, Principles of Economics ch.34.3 'Economies in Transition:
 *    China and Russia' (CC BY-NC-SA, from the lardbucket open edition) —
 *    the 1953 Soviet-style First Five-Year Plan, the 1958 Great Leap
 *    Forward ('an iron and steel foundry in every backyard', communes,
 *    abolished private plots, famine and the return to 1957 output only by
 *    the mid-1960s), the Cultural Revolution's Red Guards and Gang of Four
 *    to 1976, Deng Xiaoping's bao gan dao hu household contracting from
 *    1979 (93% of farmland by 1984), township-and-village enterprises,
 *    the 1989 Tiananmen interruption and the 1992 southern tour, WTO
 *    accession 2001.
 *  - LibreTexts (Mizzou Academy), World History A/B §14.8 'China' — the
 *    Arrow incident and the 1856–60 Second Opium War, the Treaty of
 *    Tientsin, the 1860 burning of the Old Summer Palace, the Convention
 *    of Beijing, the 1899 Open Door notes of John Hay, spheres of
 *    influence and the concession race (railroad, mining, loan rights).
 */

export const x27ApCalcChinaPassTopics: KnowledgeTopic[] = [
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
  {
    id: 'hist-modern-china-aggression-salvation',
    title: 'Aggression and National Salvation: China, 1840\u20131949',
    domain: 'Humanities',
    field: 'World History',
    branch: 'The Modern Age',
    tier: 'intermediate',
    concepts: [
      'Century of humiliation and the unequal treaties',
      'Treaty of Nanking 1842 and extraterritoriality',
      'Taiping Rebellion 1850\u201364 and its revolutionary legacies',
      'Spheres of influence and the Open Door notes',
      '1911 Revolution, Yuan Shikai and the warlord era',
      'May Fourth 1919 and the founding of the CCP in 1921',
      'The Long March and the peasant-revolution strategy',
      'Japanese invasion 1937 and the communist victory of 1949',
    ],
    words: 2466,
    readMins: 12,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'In 1800, Qing China commanded the largest economy and one of the oldest continuous states on earth; by 1942 it had been carved into foreign spheres of influence, convulsed by the bloodiest civil war in human history to that point, and occupied by Japan. The syllabus names this century "aggression and national salvation" because its history runs as a single dialogue: every foreign intrusion called forth a Chinese response — reform, rebellion, revolution — and each failed response radicalised the next. Understanding 1840\u20131949 is therefore not memorising a sequence of treaties and uprisings; it is understanding how a two-thousand-year-old imperial order collapsed under external pressure and what had to be invented — republic, party, army, ideology — before any state could stand in the rubble.',
      },
      {
        kind: 'para',
        text: 'The frame Chinese history itself uses is the "century of humiliation", and the numbers justify the phrase. The comparative-politics text of Belanger and Moore opens the ledger: when China tried to ban the opium that British merchants — supplied from poppy fields the British had opened in eastern India — were pouring into a Chinese market of over 200 million people, Britain answered with naval force. The Opium Wars were, in their words, "a series of conflicts in which Britain and France used their superior military technology to impose a humiliating peace on the Qing rulers". Save this asymmetry: the industrial gap between steam-powered gunboats and a pre-industrial empire is the material foundation on which everything else in this topic rests.',
      },
      { kind: 'heading', text: 'The unequal treaty system, 1842\u20131860' },
      {
        kind: 'para',
        text: 'The First Opium War ended in the 1842 Treaty of Nanking, the first of the "unequal treaties". Its terms, as the LibreTexts comparative-politics chapter records: Britain took control of Hong Kong, which it held until 1997; British merchants received concessions that lowered their export taxes; and British residents were effectively exempted from the Chinese legal system — the principle later called extraterritoriality. Other powers extracted similar privileges in sequence, and the effect was, in the chapter\u2019s image, to carve China into zones of foreign economic influence without ever formally colonising it. China was not India; but a state that cannot tax, judge or license foreigners on its own soil has lost something more subtle than territory: the monopoly of authority that defines sovereignty.',
      },
      {
        kind: 'para',
        text: 'The Second Opium War (1856\u201360) deepened the excavation. Britain, demanding renegotiation of the 1842 settlement — open all of China to British merchants, legalise the opium trade, exempt imports from internal transit duties, seat a British ambassador in Beijing — found its casus belli in the Arrow incident, the seizure of a cargo ship registered under a lapsed British flag, and answered it by bombarding Canton. The Treaty of Tientsin followed; when hostilities resumed, Anglo-French forces marched on Beijing in 1860, the court fled to Rehe, and the troops looted and burned the Old Summer Palace, the imperial garden complex — an act of calculated destruction still remembered in China today. Prince Gong signed the Convention of Beijing (1860), ratifying the new order. The Mizzou Academy world-history text adds the economic coda: by the 1890s the powers held spheres of influence with railroad, mining and loan concessions, and US Secretary of State John Hay\u2019s 1899 Open Door notes — asking all powers to respect Chinese territorial integrity and equal market access — were politely evaded by every recipient.',
      },
      { kind: 'heading', text: 'Internal collapse: the Taiping and the Boxers' },
      {
        kind: 'para',
        text: 'Foreign pressure interacted with internal fracture. The Taiping Rebellion (1850\u201364) was, in the comparative-politics chapter\u2019s tally, "one of the most violent conflicts in human history" — over thirty million dead, some accounts running far higher. Its founder, Hong Xiuquan, was a village teacher who failed the imperial examinations for the third time in 1847 and built a syncretic ideology mixing Christianity with Chinese religious tradition and hatred of Qing corruption. His followers — China\u2019s poorest and most outcast — built an army that swept across the whole country and held the Yangzi heartland for years. The dynasty survived only by devolving military power to provincial armies, a tacit admission that the centre no longer ruled. And though the rebellion failed, its ideas — land reform, gender equality, a modern notion of nationalism — seeded the programmes of every later Chinese revolutionary movement, including the communist one.',
      },
      {
        kind: 'para',
        text: 'The Boxer uprising (1899\u20131901) closed the dynasty\u2019s account. Peasant bands calling themselves the Yihequan — "Righteous and Harmonious Fists", whom westerners called Boxers for their martial drills — attacked missionaries and Chinese converts across the drought-stricken countryside, then marched on Beijing. An eight-nation expeditionary force put them down, and the Mizzou text draws the strategic conclusion: after 1901 the European powers largely abandoned dreams of partitioning China — the prize had become too obviously unstable — while Japan replaced them as the dominant external power. The Empress Dowager Cixi, finally grasping the depth of the crisis, sponsored the "New Policies" reforms; but the sequence of defeats had already convinced a generation of young Chinese that the dynasty itself, not merely its policies, was the problem.',
      },
      { kind: 'heading', text: '1911 and the republic that would not stand' },
      {
        kind: 'para',
        text: 'The end, when it came, was sudden. In 1911 military uprisings swept away an imperial system two millennia old, and on 1 January 1912 the Republic of China was proclaimed with the US-educated doctor Sun Yat-sen as president. Within weeks Sun had traded the office to Yuan Shikai, the modernising army commander negotiating the child emperor Puyi\u2019s abdication — and the republic\u2019s fate with it. Yuan opposed democratic reform, tried to crown himself emperor, and repressed the new Nationalist Party (KMT); forced out by 1916, he left rival regional armies in control of the country. The comparative-politics chapter names the structural cause: defeating the Taiping had already legitimated local military forces, so when the centre failed there was nothing beneath it but warlords. For more than a decade China\u2019s "national government" was a geographic expression.',
      },
      {
        kind: 'para',
        text: 'Into this vacuum stepped two organised alternatives. Sun Yat-sen, rebuffed by the western powers, established an alternative government in Guangzhou in 1921 and turned to the new Soviet Union for support. The Soviets engineered cooperation between Sun\u2019s KMT and the Chinese Communist Party, founded that same year by intellectuals inspired by the 1917 Russian revolution. The CCP itself grew out of the May Fourth movement of 1919 — the student explosion, in the chapter\u2019s account, at the Versailles peace conference\u2019s decision to hand Germany\u2019s concessions in China to Japan rather than return them. May Fourth matters doubly: as a nationalist awakening (China had fought on the winning side and was rewarded with another transfer of its soil) and as a cultural revolution demanding science and democracy in the vernacular language. The 1924 KMT\u2013CCP United Front defeated the warlords by 1925; Sun died that year; and his successor, the general Chiang Kai-shek, turned on the communists in April 1927 — the Shanghai massacre killed thousands of party members and expelled the rest. China\u2019s two modern parties have been enemies ever since.',
      },
      { kind: 'heading', text: 'Mao\u2019s road: countryside, Long March, resistance' },
      {
        kind: 'para',
        text: 'The suppression forced a doctrinal revolution. Marxism had expected the urban proletariat to make history; China\u2019s working class was small, foreign-controlled and now decapitated. Mao Zedong — a founder of the CCP and one of its few peasant-born leaders — drew the conclusion that became the party\u2019s signature: in a rural country, revolution must be built on the peasantry, encircling the cities from the countryside. KMT encirclement campaigns then produced the party\u2019s founding legend. In 1934, escaping annihilation, communist forces began the Long March: roughly 4,000 miles through some of China\u2019s most punishing geography, with losses that by some estimates reached ninety percent of the marchers. It ended at Yan\u2019an, a poor base area in the northwest, where Mao emerged as the party\u2019s dominant political and ideological force. The chapter is candid that the march\u2019s popular memory is more heroic than its documented reality — and that it saved the CCP all the same.',
      },
      {
        kind: 'para',
        text: 'Japan\u2019s full invasion of 1937 — which the chapter treats as the beginning of the Second World War in Asia — completed the reversal of fortunes. The KMT government retreated to the far southwest and, in the chapter\u2019s judgment, was "essentially eliminated as a combatant"; the communist base areas, positioned in the north against Japanese lines, fought a guerrilla war that mobilised the peasantry and built the People\u2019s Liberation Army into an effective force. Whether the CCP\u2019s resistance record was as glorious as its later narrative claimed is debated by historians; what is not debated is the political ledger — the communists were seen as the party fighting for China, the KMT as corrupt and beholden to foreigners. When full civil war resumed after Japan\u2019s defeat, the Truman administration concluded that propping up Chiang was a lost cause and declined direct military intervention. In 1949 the communist armies won the country; on 1 October 1949 Mao stood in Tiananmen Square — where the May Fourth students had protested thirty years before — and proclaimed the People\u2019s Republic of China. Chiang\u2019s forces evacuated to Taiwan, taking the Chinese UN seat with them until 1971.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Reading the aggression\u2013response chain as exam logic',
        steps: [
          'Prompt pattern: "Explain how foreign aggression shaped the Chinese search for national salvation, 1840\u20131949." The marks live in the causal chain, not the list of events.',
          'Link 1: Opium Wars → unequal treaties (Nanking 1842: Hong Kong, tariff limits, extraterritoriality; Tientsin and Beijing 1858\u201360) → sovereignty eroded.',
          'Link 2: sovereignty eroded + fiscal strain → Taiping (1850\u201364) and its suppression by provincial armies → central authority hollowed; rebellion\u2019s ideas (land reform, equality, nationalism) inherited by later radicals.',
          'Link 3: scramble of the 1890s (spheres, concessions; Open Door 1899) + Boxer catastrophe (1901) → the dynasty itself discredited → New Policies too late.',
          'Link 4: 1911 republic → Yuan\u2019s betrayal → warlordism; Versailles 1919 hands German concessions to Japan → May Fourth → CCP 1921; United Front 1924 → Shanghai massacre 1927.',
          'Link 5: peasant strategy + Long March to Yan\u2019an (1934\u201335) → Japanese invasion (1937) fights the war that lets the CCP mobilise → civil war won, PRC proclaimed 1 October 1949.',
          'Exam discipline: for every "aggression" name the treaty or battle; for every "response" name the movement and its outcome; close each link by saying what the failure radicalised next.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The 1842 Treaty of Nanking is called the first "unequal treaty" chiefly because it…',
            options: [
              'ended a war fought entirely on British soil',
              'ceded Hong Kong, fixed low export duties and placed British residents outside Chinese law',
              'required China to industrialise within ten years',
              'gave China a seat in the League of Nations',
            ],
            answer: 1,
            explain: 'Nanking\u2019s three pillars — territorial (Hong Kong, held until 1997), economic (tariff concessions) and legal (extraterritoriality) — stripped the sovereignty a treaty between equals would have preserved.',
          },
          {
            q: 'Which statement about the Taiping Rebellion (1850\u201364) is correct?',
            options: [
              'It was a foreign invasion led by Hong Xiuquan',
              'It killed over thirty million people and left legacies — land reform, gender equality, nationalism — that later revolutionaries inherited',
              'It succeeded in toppling the Qing dynasty',
              'It was put down by the British navy',
            ],
            answer: 1,
            explain: 'Hong\u2019s movement was internal — a failed examination candidate\u2019s syncretic rising of the poorest — and its suppression cost over thirty million lives while forcing the dynasty to devolve power to provincial armies. Its ideas outlived its defeat.',
          },
          {
            q: 'The May Fourth movement (1919) erupted in response to…',
            options: [
              'the abolition of the imperial examinations',
              'the Versailles conference transferring Germany\u2019s Chinese concessions to Japan',
              'the Taiping capture of Nanjing',
              'the Open Door notes',
            ],
            answer: 1,
            explain: 'China had joined the Allied side and asked for the return of German-held territory; Versailles awarded it to Japan instead. The anger of 4 May 1919 fused nationalism with the demands for science and democracy.',
          },
          {
            q: 'The Long March (from 1934) mattered because it…',
            options: [
              'brought the CCP to power immediately',
              'let the CCP survive KMT encirclement and made Mao the party\u2019s dominant leader from the Yan\u2019an base',
              'drove Japan out of Manchuria',
              'unified the CCP with the KMT',
            ],
            answer: 1,
            explain: 'Roughly 4,000 miles at a cost of up to ninety percent of the force, the march delivered the party from annihilation to a secure base — and to Mao\u2019s leadership. Power came fourteen years later.',
          },
          {
            q: 'Why did the Japanese invasion strengthen rather than destroy the CCP?',
            options: [
              'Japan funded the CCP secretly',
              'the CCP\u2019s northern base areas fought a peasant-mobilising guerrilla war while the KMT retreated southwest, and the CCP gained the reputation of fighting for China',
              'the invasion never touched CCP territory',
              'the Soviet Union declared war on Japan in 1937',
            ],
            answer: 1,
            explain: 'Position was destiny: the KMT\u2019s retreat discredited it while the Yan\u2019an-based communists fought where the enemy was, building the PLA and the popular legitimacy that decided the 1946\u201349 civil war.',
          },
          {
            q: 'The Open Door notes of 1899 asked foreign powers to…',
            options: [
              'partition China into formal colonies',
              'respect Chinese territorial integrity and give all nations equal commercial access',
              'expel all missionaries from China',
              'return Hong Kong to China',
            ],
            answer: 1,
            explain: 'John Hay\u2019s notes sought equal access and integrity — and, as the world-history text notes, the powers evaded any real commitment while continuing the concession race.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Conflating the two Opium Wars — Nanking (1842) ended the first; the Arrow incident, the Treaty of Tientsin and the burning of the Old Summer Palace belong to the second (1856\u201360). Dating the republic\u2019s failure to 1911 — the republic was proclaimed in 1912 and broken by Yuan Shikai\u2019s betrayal, whose fall (1916) began full warlordism. Forgetting that the CCP (1921) predates the Shanghai massacre (1927) — the massacre split the United Front, it did not found the parties. Writing "Japan invaded in 1939" — the full invasion the syllabus means is 1937. And reversing the geography of the civil war: the KMT ended in Taiwan; the communists held the mainland from 1 October 1949.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the world-wars lesson for the global framework (Versailles, the Asian theatre) and the silk-road lesson for pre-1800 China\u2019s position in Eurasian trade. Follow with the People\u2019s Republic lesson for what the victorious party built after 1949. Primary reading: LibreTexts, Introduction to Comparative Politics (Belanger & Moore), ch.5 "The Political Development of Modern China" (CC licensed) — sections "The Rise of Western Colonialism", "Internal Conflict", "Revolution and Civil War" and "Foreign Invasion and Revolution"; LibreTexts (Mizzou Academy), World History A/B §14.8 "China" for the Second Opium War and Open Door detail.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        '1842 Nanking: Hong Kong, tariff limits, extraterritoriality — sovereignty\u2019s first breach.',
        '1856\u201360: Arrow, Tientsin, the Old Summer Palace burned, Convention of Beijing.',
        'Taiping 1850\u201364: 30+ million dead; land reform and gender equality enter the revolutionary toolkit.',
        '1890s\u20131901: spheres and concessions; Open Door evaded; Boxers crushed by eight armies; dynasty doomed.',
        '1911\u201312 republic; Yuan\u2019s betrayal; 1916\u201326 warlordism; Versailles 1919 \u2192 May Fourth; CCP 1921.',
        '1927 split; Long March to Yan\u2019an; 1937 invasion flips legitimacy; 1 October 1949, Tiananmen: the PRC.',
      ] },
    ],
  },
  {
    id: 'hist-peoples-republic-china',
    title: 'The People\u2019s Republic since 1949: Leap, Turmoil and Reform',
    domain: 'Humanities',
    field: 'World History',
    branch: 'The Modern Age',
    tier: 'intermediate',
    concepts: [
      '1 October 1949 proclamation and consolidation',
      'First Five-Year Plan 1953: Soviet-style heavy industry',
      'Great Leap Forward 1958: communes and famine',
      'Cultural Revolution, Red Guards and the Gang of Four',
      'Deng Xiaoping and bao gan dao hu household contracting',
      'Dual-track industry and township-village enterprises',
      '1989 interruption and the 1992 southern tour',
    ],
    words: 2052,
    readMins: 10,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'The People\u2019s Republic of China is the only state founded by a successful communist peasant revolution to still be ruled by its founding party — the Soviet Union is gone, but the CCP holds power into its eighth decade. The syllabus\u2019s unit on the PRC since 1949 is therefore an experiment\u2019s full arc: how a revolutionary party converts rural victory into a governing system, what happens when its economic theories meet reality (twice, catastrophically), and how the pragmatic retreat from orthodox planning produced the fastest large-scale growth ever recorded. The economics text of LibreTexts\u2019s Principles of Economics (ch. 34.3) calls China\u2019s transition "a task without historical precedent" — no country had ever converted a command socialist economy into a market one before, and China became "in many ways… the most successful" attempt.',
      },
      {
        kind: 'para',
        text: 'Keep one analytical thread in view throughout: every turn of PRC policy is an argument between radical and pragmatic wings of the same party, fought through economic campaigns. The radicals lose in 1961, win in 1966, lose again in 1976 — and each swing is measurable in output, in lives, and in the institutions left behind. The exam\u2019s favourite question — why did reform succeed where the Leap failed — is answered by comparing exactly those swings.',
      },
      { kind: 'heading', text: 'Consolidation and the Soviet model, 1949\u20131957' },
      {
        kind: 'para',
        text: 'Mao proclaimed the People\u2019s Republic on 1 October 1949 from Tiananmen Square, and the new state moved at once, as the economics chapter records: firms were nationalised, land was redistributed to the peasants who had carried the revolution — with many former landlords executed in the process — and China\u2019s entry into the Korean War in 1950 locked in close ties with the Soviet Union, whose advisers helped build a command socialist economy. The First Five-Year Plan, launched in 1953, "followed the tradition of Soviet economic development": capital-intensive production and the priority of heavy industry. The chapter immediately flags the mismatch — China had "far less capital and a great many more people" than the Soviet Union, so capital-intensive development made little sense. By 1957 the plan\u2019s industrial targets had been met on paper, but the strategy\u2019s fit with China\u2019s actual endowments was already in doubt.',
      },
      { kind: 'heading', text: 'The Great Leap Forward, 1958\u20131961' },
      {
        kind: 'para',
        text: 'In 1958 Mao declared a uniquely Chinese alternative, the Great Leap Forward, "focused on labor-intensive development and the organization of small productive units to quickly turn China into an industrialized country". The chapter\u2019s details deserve memorising: households were encouraged to form their own productive units under the slogan "an iron and steel foundry in every backyard"; material incentives were repudiated as revisionist, motivation to come "from revolutionary zeal, not self-interest"; and in agriculture, farmers were organized into communes of several thousand households each, with the small private plots permitted earlier abolished outright. The Leap was, in the chapter\u2019s verdict, "an economic disaster. Output plunged and a large-scale famine ensued." The recovery was slow: moderate leaders took over, and the economy did not regain its 1957 output level until the mid-1960s. The Leap is the standing demonstration that mobilising enthusiasm is not a production function — when incentives are abolished and information is suppressed, effort is misdirected at scale.',
      },
      { kind: 'heading', text: 'The Cultural Revolution, 1966\u20131976' },
      {
        kind: 'para',
        text: 'The pragmatic interlude ended in the mid-1960s, "when power shifted back towards the radicals with the launching of the Great Proletarian Cultural Revolution". Mao, side-lined by the planners whose competence had cleaned up the Leap, turned to the young: students formed groups called "red guards" and were encouraged to expose "capitalist roaders" — the very officials and experts who ran the economy and the schools. Universities stopped operating normally; skilled administrators were purged or sent to the countryside; political loyalty displaced expertise through every institution. The chapter follows the radical faction to its end: "a group dubbed the \u2018Gang of Four\u2019, led by Mao\u2019s wife Jiang Qing, tried to steer Chinese society towards an ever more revolutionary course until Mao\u2019s death in 1976." Within a month of that death the Gang were arrested, and the decade\u2019s verdict — a generation of schooling and management capacity destroyed — became the argument for everything that followed.',
      },
      { kind: 'heading', text: 'Reform: contracting the countryside, 1978\u20131984' },
      {
        kind: 'para',
        text: 'After Mao\u2019s death, "pragmatists within the Communist Party, led by Deng Xiaoping, embarked on a course of reform that promoted a more market-oriented economy coupled with retention of political power by the Communists" — marketisation without pluralism, the combination that distinguishes the Chinese path from the Soviet collapse. The rural first move, beginning in 1979, was a system provincial leaders called bao gan dao hu, "contracting all decisions to the household": collectively owned farmland was contracted to individual households, which met state quotas at planned prices — then sold any surplus on the open market and kept the profit. The incentive flip did in four years what exhortation had failed to do in twenty: "by 1984, 93% of China\u2019s agricultural land had been contracted to individual households and the rate of growth in agricultural output had soared." Note what did not change — the land remained collectively owned; what changed was who controlled its use and residue. The same dual logic ran through industry: state-owned enterprises were told to meet their quotas and then left free to produce for free markets, "over time, even those production directives were discontinued", while manufacturing boomed through township and village enterprises and private ventures with heavy foreign participation.',
      },
      {
        kind: 'para',
        text: 'The reform path was not a straight line. "This policy combination was challenged in 1989 by a large demonstration in Beijing\u2019s Tiananmen Square. The authorities ordered the military to remove the demonstrators, resulting in the deaths of several hundred civilians. A period of retrenchment in the reform process followed and lasted for several years." What restarted it was theatre as policy: "in 1992, Deng ushered in a period of reinvigorated economic reform in a highly publicized trip to southern China, where reforms had progressed farther" — the eighty-seven-year-old\u2019s tour of the special-zone south legitimising the market course and isolating its opponents. Through successive leadership changes, the chapter notes, reform "managed by the Communist Party, has continued", with most price controls abolished and China\u2019s 2001 entry into the World Trade Organization symbolising the commitment. The results section is blunt: between 1980 and 2006 China\u2019s per capita output, in constant purchasing-power dollars, more than quadrupled — a country that in 1997 counted among the world\u2019s poorest low-income economies now sits "comfortably among the more prosperous lower-middle-income countries".',
      },
      {
        kind: 'example',
        title: 'Worked Example — Compare and contrast: Leap versus reform',
        steps: [
          'Prompt pattern: "Compare the Great Leap Forward (1958) and the post-1978 reforms as development strategies. Why did one fail and the other succeed?"',
          'Structure: run both through the same three lenses — organisation, incentives, information.',
          'Organisation: Leap = communes of several thousand households, private plots abolished, backyard furnaces; Reform = household contracting (bao gan dao hu), 93% of farmland contracted by 1984, surplus rights restored.',
          'Incentives: Leap = "revolutionary zeal, not self-interest" — material incentives repudiated; Reform = quotas at plan prices, surplus at market prices, profits kept — self-interest harnessed inside a plan shell.',
          'Information: Leap = output figures falsified upward while famine spread; Reform = prices and observable surpluses transmitted real scarcity signals; dual-track pricing let the plan melt rather than shatter.',
          'Constant across both: party political control, gradualism versus leap-timing (the names say it), and experimentation — the chapter\u2019s "task without historical precedent" had no textbook, so each strategy was a live trial.',
          'Verdict sentence for the essay: "The Leap tried to command prosperity by decree and destroyed the incentives that produce it; the reforms restored decision rights and rewards to households and enterprises while keeping the political shell — which is why output soared after 1978 exactly where it had collapsed after 1958."',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'China\u2019s First Five-Year Plan (1953) followed which model, and what was its structural mismatch?',
            options: [
              'American New Deal spending — mismatch: too much infrastructure',
              'Soviet capital-intensive heavy industry — mismatch: China was capital-poor and labour-abundant',
              'Japanese export-led light industry — mismatch: too few ports',
              'War-communist requisitioning — mismatch: too much grain',
            ],
            answer: 1,
            explain: 'The chapter states the plan "followed the tradition of Soviet economic development… capital-intensive production and the development of heavy industry", while China had "far less capital and a great many more people than did the Soviet Union".',
          },
          {
            q: 'Which set of features belongs to the Great Leap Forward (1958)?',
            options: [
              'Household contracting, township enterprises, WTO entry',
              'Backyard steel furnaces, communes of several thousand households, abolition of private plots, repudiation of material incentives',
              'Red Guards, big-character posters, purge of capitalist roaders',
              'Special economic zones, dual pricing, southern tour',
            ],
            answer: 1,
            explain: 'Those are the Leap\u2019s signatures, under the slogan "an iron and steel foundry in every backyard" — and they produced the disaster: "output plunged and a large-scale famine ensued", with 1957 output regained only by the mid-1960s.',
          },
          {
            q: 'The Cultural Revolution (from the mid-1960s) is best described as…',
            options: [
              'a campaign to expand university enrolment',
              'radical mobilisation of Red Guards against "capitalist roaders", disabling institutions until Mao\u2019s death in 1976 ended the Gang of Four\u2019s course',
              'an agrarian land-redistribution programme',
              'the first phase of Deng\u2019s market reforms',
            ],
            answer: 1,
            explain: 'The chapter: students organised as red guards exposed "capitalist roaders"; the Gang of Four under Jiang Qing steered "an ever more revolutionary course until Mao\u2019s death in 1976".',
          },
          {
            q: 'The bao gan dao hu system beginning in 1979 is accurately summarised as…',
            options: [
              'nationalisation of village industries',
              'households contracting collectively owned farmland: meet state quotas at planned prices, sell surplus at market prices and keep the profit',
              'abolition of all agricultural markets',
              'a Soviet-style collectivisation drive',
            ],
            answer: 1,
            explain: '"Contracting all decisions to the household" kept land collective but returned use rights and residue claims to families — by 1984, 93% of farmland was contracted and output growth soared.',
          },
          {
            q: 'What happened to the reform programme in 1989\u20131992?',
            options: [
              'it was abandoned permanently after the Tiananmen crackdown',
              'retrenchment followed the 1989 suppression; Deng\u2019s 1992 southern tour then reinvigorated reform',
              'it accelerated immediately after 1989',
              'the party reverted to the commune system',
            ],
            answer: 1,
            explain: 'After "the deaths of several hundred civilians" in Tiananmen Square, "a period of retrenchment… lasted for several years", until Deng\u2019s highly publicised 1992 trip to the reformist south restarted the course.',
          },
          {
            q: 'The chapter\u2019s headline result for the reform era is that between 1980 and 2006 China…',
            options: [
              'grew slower than Japan and the US',
              'saw per capita output in constant purchasing-power terms more than quadruple, moving from the poorest low-income group to the prosperous lower-middle-income tier',
              'kept per capita output flat while population grew',
              'privatised all land ownership outright',
            ],
            answer: 1,
            explain: 'Those are the chapter\u2019s figures — per capita output more than quadrupled 1980\u20132006, with the World Bank reclassifying China among the more prosperous lower-middle-income countries. Land stayed collectively owned; use rights did the work.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Blurring the two radical campaigns — the Leap (1958) was economic, communes and backyard furnaces; the Cultural Revolution (1966\u201376) was political, Red Guards and purges. Misdating the reforms to Mao\u2019s death (1976) — the household-contracting system spread from 1979 and was official policy by the early 1980s. Saying the reforms "privatised the land" — ownership stayed collective; contracting transferred use and surplus rights. Forgetting the famine inside the Leap\u2019s "output plunged" — the sentence records "a large-scale famine", and the economy needed roughly a decade to recover 1957 output. And treating 1989 as the end of reform rather than the interruption the chapter describes, resolved by the 1992 southern tour.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the aggression-and-national-salvation lesson for the 1840\u20131949 arc this state emerged from, and the India-development lesson for the comparative-development lens. Follow with your economics volume\u2019s socialist-economies and transition chapters for the theory underneath. Primary reading: LibreTexts, Principles of Economics, ch.34.3 "Economies in Transition: China and Russia" (CC BY-NC-SA) — the "China: A Gradual Transition" section is this lesson\u2019s spine; LibreTexts, Introduction to Comparative Politics (Belanger & Moore), ch.5, final sections for the 1950s\u201370s campaigns and the post-Mao settlement.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        '1949\u201353: nationalisation, land redistribution, Korean War \u2192 Soviet-tied command economy.',
        '1953 First Plan: Soviet heavy-industry template; capital-poor, labour-rich China fits it badly.',
        '1958 Leap: communes, backyard furnaces, zeal over incentives \u2192 disaster and famine; 1957 output back only by the mid-1960s.',
        '1966\u201376 Cultural Revolution: Red Guards against "capitalist roaders"; Gang of Four until Mao\u2019s death.',
        '1979 bao gan dao hu: household contracting; 93% of farmland by 1984; output soars.',
        'Dual-track industry, TVEs, 1989 retrenchment, 1992 southern tour, WTO 2001 \u2014 per capita output quadruples 1980\u20132006.',
      ] },
    ],
  },
]

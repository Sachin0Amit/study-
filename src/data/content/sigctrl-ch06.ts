import type { SectionContent } from '../library'

// ============================================================================
// Signals and Control — Chapter 6: Stability, Frequency Response, State Space
// Sections 6.1 - 6.4. Master study content.
// ============================================================================

export const sigctrlCh06Content: SectionContent[] = [
  // ---------------------------------------------------------------- 6.1
  {
    sectionId: 'ece-e-control-s24',
    readingTime: 10,
    intro: 'Routh-Hurwitz decides stability from characteristic coefficients without factoring any polynomial. Array construction is mechanical, and sign changes count right-half roots directly. Special cases for zero rows and zero leading elements complete the routine with auxiliary-polynomial tools.',
    objectives: [
      'Build Routh arrays from characteristic polynomials and count right-half roots by sign changes',
      'Resolve zero rows with auxiliary polynomials and zero leading elements with epsilon limits',
      'Bound controller gains $K$ for stability from the first-column positivity conditions'
    ],
    concepts: [
      {
        term: 'Routh array construction',
        kind: 'method',
        statement: 'Rows form from **determinant ratios** `routh` of the two rows above: each entry is the negative determinant of its side columns over the first element above. Alternating polynomial coefficients seed the top two rows.',
        detail: 'For $a_4 s^4 + a_3 s^3 + a_2 s^2 + a_1 s + a_0$, rows $s^4$ and $s^3$ take even and odd coefficients. Zeros pad missing powers explicitly before starting.'
      },
      {
        term: 'Stability criterion',
        kind: 'theorem',
        statement: 'The loop is **stable** `stable` exactly when every first-column entry is nonzero with identical sign. Each sign change marks one **right-half root**, so two changes mean two unstable poles.',
        detail: 'Scaling a whole row by a positive constant preserves the verdict and simplifies fractions. Negative leading coefficients are handled by flipping all signs first.'
      },
      {
        term: 'Zero-row case',
        kind: 'method',
        statement: 'A full **zero row** `zero-row` signals symmetric roots about the origin: form the **auxiliary polynomial** from the row above, differentiate it, and replace the zero row with the derivative coefficients.',
        detail: 'Auxiliary roots sit on the imaginary axis or mirror across it. Solving the auxiliary equation locates the marginal oscillation frequency directly.'
      },
      {
        term: 'Zero leading element',
        kind: 'method',
        statement: 'A **zero first element** `epsilon` with nonzero rest substitutes $\\epsilon > 0$, completes the table symbolically, then takes $\\epsilon \\to 0^{+}$. Sign flips in the limit count the unstable roots.',
        detail: 'The epsilon row avoids division by zero while exposing the sign pattern. Two sign changes emerging in the limit certify two right-half poles.'
      },
      {
        term: 'Gain-range extraction',
        kind: 'method',
        statement: '**Gain bounds** `gain-K` come from forcing every first-column expression in $K$ positive and intersecting the inequalities. The boundary value places poles exactly on the imaginary axis.',
        detail: 'For $s^3 + 3s^2 + 2s + K$, the $s^1$ row demands $K < 6$ with $K > 0$ from the $s^0$ row. At $K = 6$ the auxiliary row oscillates at the computed frequency.'
      }
    ],
    examples: [
      {
        title: 'Trace: third-order stability bound',
        problem: 'Characteristic $s^3 + 3s^2 + 2s + K = 0$. Find the stable $K$ range.',
        steps: [
          { label: 'Step 1', text: '```text\ns^3:  1    2\ns^2:  3    K\ns^1:  (6-K)/3   0\ns^0:  K\n```\nSeed even and odd coefficients, then form the $s^1$ row by the determinant ratio.' },
          { label: 'Step 2', text: 'First-column positivity needs $1 > 0$, $3 > 0$, $(6-K)/3 > 0$ and $K > 0$, which intersect to $0 < K < 6$.' },
          { label: 'Step 3', text: 'At $K = 6$ the $s^1$ row zeroes and the auxiliary $3s^2 + 6$ from the $s^2$ row oscillates at $\\omega = \\sqrt{2}$.' }
        ],
        result: 'Stable for $0 < K < 6$ with marginal oscillation at $K = 6$.'
      },
      {
        title: 'Drill: zero row with auxiliary polynomial',
        problem: 'Routh table for $s^4 + 2s^2 + 1$ develops a zero row. Resolve stability.',
        steps: [
          { label: 'Step 1', text: 'Rows $s^4$: $1, 2, 1$ and $s^3$: $0, 0, 0$ stall immediately since odd coefficients are missing.' },
          { label: 'Step 2', text: 'Auxiliary polynomial from the $s^4$ row is $P(s) = s^4 + 2s^2 + 1 = (s^2+1)^2$. Its derivative $4s^3 + 4s$ supplies replacement row $4, 4$.' },
          { label: 'Step 3', text: 'Continuing gives no sign changes, and $P(s) = 0$ places repeated poles at $s = \\pm j$: marginally stable oscillation, not asymptotic stability.' }
        ],
        result: 'Repeated imaginary-axis poles at $\\pm j$, hence marginally stable.'
      }
    ],
    keyTakeaways: [
      'Routh entries are determinant ratios of the two rows above with zero padding.',
      'Uniform nonzero first-column sign means stability, and each flip counts an unstable pole.',
      'Zero rows resolve through differentiated auxiliary polynomials with symmetric roots.',
      'Zero leading elements resolve through $\\epsilon \\to 0^{+}$ limits on symbolic rows.'
    ],
    quiz: [
      // PYQ-pattern: gain bound from first-column positivity in K
      {
        q: '$s^3 + 3s^2 + 2s + K = 0$ is stable for:',
        options: [`$K > 6$`, '$K < 0$ only', `$0 < K < 6$`, 'Every $K$'],
        answer: 2,
        explanation: 'Step 1: The $s^1$ row computes to $(6-K)/3$. Step 2: Positivity needs $6 - K > 0$. Step 3: The $s^0$ row needs $K > 0$. Step 4: Intersection gives $0 < K < 6$.'
      },
      {
        q: 'Two sign changes in the Routh first column mean:',
        options: [
          'Two poles on the imaginary axis',
          'Two poles in the open right-half plane',
          'A zero row must follow',
          'Marginal stability with no unstable poles'
        ],
        answer: 1,
        explanation: 'Step 1: Sign changes count right-half roots. Step 2: Each flip marks one unstable pole. Step 3: Two flips therefore certify two. Step 4: Imaginary-axis poles instead emerge from zero rows.'
      },
      {
        q: 'A full zero row is replaced by:',
        options: [
          'Coefficients of the differentiated auxiliary polynomial from the row above',
          'A row of ones',
          'An epsilon-shifted copy of the row below',
          'Deletion of the entire table'
        ],
        answer: 0,
        explanation: 'Step 1: Zero rows signal symmetric root sets. Step 2: The row above defines the auxiliary polynomial. Step 3: Differentiation drops its degree by one. Step 4: Those coefficients continue the table.'
      },
      {
        q: 'At the gain boundary $K = 6$ above, the system:',
        options: [
          'Has all poles strictly left-half',
          'Becomes unobservable',
          'Loses all its zeros',
          'Oscillates marginally with auxiliary roots on the imaginary axis'
        ],
        answer: 3,
        explanation: 'Step 1: The $s^1$ row zeroes at the boundary. Step 2: The auxiliary equation $3s^2 + 6 = 0$ governs. Step 3: Its roots are $\\pm j\\sqrt{2}$. Step 4: Imaginary-axis poles mean sustained oscillation.'
      }
    ]
  },

  // ---------------------------------------------------------------- 6.2
  {
    sectionId: 'ece-e-control-s25',
    depth: [
      {
        tier: 'masters',
        title: 'Stability margins: Nyquist, Bode and robustness certificates',
        blocks: [
          {
            kind: 'para',
            body: 'Frequency-domain stability replaces polynomial factoring with **encirclement counting**: the Nyquist plot of open loop $L(j\\omega)$ encircles $-1$ exactly as many times as closed-loop right-half poles exceed open-loop ones. **Gain margin** reports how much gain can rise before the phase-crossover hits $-1$, **phase margin** reports how much phase can lag before the gain-crossover does. Graduate practice reads these as **distance metrics** — the minimal $|1+L|$ over frequency is the reciprocal of peak sensitivity — so larger margins certify tolerance to unmodeled gain and delay. Bode magnitude-phase plots make the same information sketchable with straight-line asymptotes.'
          },
          {
            kind: 'theorem',
            body: 'Let $P$ be open-loop right-half poles and $N$ clockwise encirclements of $-1$ by $L(j\\omega)$. Then closed-loop right-half poles satisfy $Z = N + P$; stability holds if and only if $Z = 0$. Gain margin $GM = 1/|L(j\\omega_{pc})|$ at phase crossover $\\angle L = -\\pi$ and phase margin $PM = \\pi + \\angle L(j\\omega_{gc})$ at gain crossover $|L| = 1$ quantify distance to instability, with $M_S = \\max_{\\omega}|1/(1+L)|$ bounding both from below: larger $M_S$ forces smaller guaranteed $GM$ and $PM$. Positive margins alone do not guarantee robustness when the plot nearly touches $-1$ off-axis.'
          },
          {
            kind: 'derivation',
            heading: 'Margins as distances to the critical point',
            body: 'Derive margins from the loop equation $1 + L = 0$ at the stability boundary. At phase crossover, $L(j\\omega_{pc}) = -|L|$, so scaling gain by $1/|L|$ lands exactly on $-1$ — the gain margin. At gain crossover, $|L| = 1$ with angle $-\\pi + PM$, so added lag $PM$ rotates onto $-1$ — the phase margin. Sensitivity peak connects via geometry: $|1+L(j\\omega)|$ is the distance from the plot to $-1$, so $M_S^{-1}$ is the closest approach. A plot with $GM = 6$ dB and $PM = 45$ degrees can still pass within $0.3$ of $-1$ off-axis, giving $M_S > 3$ and fragility to simultaneous gain-phase perturbations that single-axis margins miss — the graduate reason to monitor $M_S$ and $M_T$ directly.'
          },
          {
            kind: 'application',
            body: 'Robust tuning therefore constrains the trio $(GM, PM, M_S)$ jointly: classical targets near $6$ dB, $45$ degrees and $M_S < 2$ mark a well-damped loop, while aggressive performance pushes $M_S$ toward $2.5$ with explicit uncertainty models justifying the risk. Auto-tuners probe $L(j\\omega)$ with relay or multisine experiments, fit a local model, and back off from the $-1$ point by the required disk margin — a circular exclusion region that implies all three metrics at once. Research frontiers replace fixed margins with probabilistic certificates that bound instability probability under distributions over plant variations, generalizing Nyquist counting to uncertain families.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'Nyquist and Bode plots read stability from frequency data instead of factored polynomials. Encirclement counts map open-loop traces to closed-loop pole counts. Gain and phase margins then report how far the loop stands from the edge.',
    objectives: [
      'Count Nyquist encirclements $N$ and apply $Z = P - N$ for closed-loop pole verdicts',
      'Read gain margin, phase margin and crossover frequencies from Bode magnitude and phase',
      'Judge relative stability from margin signs and predict drift toward oscillation'
    ],
    concepts: [
      {
        term: 'Nyquist mapping idea',
        kind: 'theorem',
        statement: 'The **Nyquist plot** `nyquist` traces $G(s)H(s)$ around the closed right-half contour, and encirclements $N$ of $-1$ satisfy **$Z = P - N$** where $P$ counts open-loop right-half poles. Stability needs $Z = 0$.',
        detail: 'Clockwise encirclements count positive by convention here. The full contour adds the mirror branch plus indent detours around imaginary-axis poles.'
      },
      {
        term: 'Bode magnitude reading',
        kind: 'method',
        statement: '**Bode magnitude** `bode-mag` plots $20\\log_{10}|GH|$ against $\\log_{10}\\omega$ with $-20$ dB per decade per integrator and $\\pm 20$ dB slope shifts at each corner. **Gain crossover** sits where the curve crosses $0$ dB.',
        detail: 'Decade slopes add across factors: two integrators start at $-40$ dB per decade. Corner frequencies $1/\\tau$ mark slope changes for first-order terms.'
      },
      {
        term: 'Bode phase reading',
        kind: 'method',
        statement: '**Bode phase** `bode-phase` sums $-90$ degrees per integrator plus arctangent lags of each factor. **Phase crossover** sits where phase reaches $-180$ degrees.',
        detail: 'First-order lags swing $0$ to $-90$ degrees centered at the corner. Delay terms add linear-in-frequency lag that erodes margin fast.'
      },
      {
        term: 'Gain and phase margins',
        kind: 'definition',
        statement: '**Gain margin** `GM` is the factor by which gain may rise before $0$ dB meets $-180$ degrees, while **phase margin** `PM` is the angle above $-180$ degrees at gain crossover. Positive $GM$ and $PM$ together mark robust stability.',
        detail: 'In decibels $GM_{dB} = -|GH|_{dB}$ at phase crossover. $PM = 180 + \\angle GH$ at gain crossover, targeting $30$ to $60$ degrees in designs.'
      },
      {
        term: 'Relative-stability judgement',
        kind: 'insight',
        statement: '**Relative stability** `relative` compares margin sizes: larger margins tolerate bigger drifts before oscillation. Negative margins certify current instability rather than future risk.',
        detail: 'Raising gain lifts magnitude without moving phase, shrinking both margins toward zero. Adding phase lag at crossover instead eats $PM$ directly.'
      }
    ],
    examples: [
      {
        title: 'Trace: margins from Bode numbers',
        problem: 'At gain crossover $\\omega_{gc} = 4$ the phase is $-130$ degrees. At phase crossover $\\omega_{pc} = 8$ the magnitude is $-6$ dB. Report margins.',
        steps: [
          { label: 'Step 1', text: '```text\ngain crossover: |GH| = 0 dB at w = 4, angle -130 deg\nphase crossover: angle -180 deg at w = 8, |GH| = -6 dB\nPM = 180 + (-130) = 50 deg\nGM = 0 - (-6) = 6 dB\n```\nEach margin reads at the crossover owned by the other axis.' },
          { label: 'Step 2', text: 'Positive $50$ degrees and $6$ dB mark a stably tuned loop with room for moderate gain drift before the $0$ dB and $-180$ degree points coincide.' },
          { label: 'Step 3', text: 'Doubling the gain would add $6$ dB everywhere, landing $GM$ at zero and the loop on the oscillation edge.' }
        ],
        result: '$PM = 50$ degrees and $GM = 6$ dB, a comfortably stable tuning.'
      },
      {
        title: 'Drill: Nyquist count with one open-loop unstable pole',
        problem: 'Open loop has $P = 1$ right-half pole. Nyquist of $GH$ shows one clockwise encirclement of $-1$. Stable?',
        steps: [
          { label: 'Step 1', text: 'Clockwise count gives $N = 1$ under the adopted sign convention.' },
          { label: 'Step 2', text: 'Apply $Z = P - N = 1 - 1 = 0$ closed-loop right-half poles.' },
          { label: 'Step 3', text: 'Zero unstable closed-loop poles means the feedback stabilizes the open-loop unstable plant at this gain.' }
        ],
        result: 'Stable since the single encirclement cancels the single open-loop unstable pole.'
      }
    ],
    keyTakeaways: [
      'Nyquist stability uses $Z = P - N$ with encirclements of $-1$ by the open-loop trace.',
      'Bode magnitude slopes $\\pm 20$ dB per decade per factor locate gain crossover.',
      'Bode phase sums integrator and corner lags to locate phase crossover.',
      'Positive gain and phase margins jointly certify robust stability.'
    ],
    quiz: [
      {
        q: '$P = 1$ with one clockwise Nyquist encirclement of $-1$ gives:',
        options: [
          '$Z = 2$, unstable',
          '$Z = 0$, stable',
          '$Z = 1$, marginally stable',
          'No verdict without Bode plots'
        ],
        answer: 1,
        explanation: 'Step 1: Clockwise means $N = 1$. Step 2: Formula is $Z = P - N$. Step 3: Substitution gives $1 - 1 = 0$. Step 4: Zero closed-loop unstable poles means stable.'
      },
      // PYQ-pattern: margin arithmetic from crossover readings
      {
        q: 'Phase $-130$ degrees at $0$ dB crossover means phase margin:',
        options: ['$130$ degrees', '$50$ degrees', '$-50$ degrees', '$310$ degrees'],
        answer: 1,
        explanation: 'Step 1: Margin formula is $PM = 180 + angle$. Step 2: Substitute $-130$ degrees. Step 3: The sum is $50$ degrees. Step 4: Positive sign confirms stable-side phase.'
      },
      {
        q: 'Magnitude $-6$ dB at $-180$ degrees phase means gain margin:',
        options: ['$6$ dB', '$-6$ dB', '$0$ dB', '$180$ dB'],
        answer: 0,
        explanation: 'Step 1: Margin is the rise to $0$ dB. Step 2: Current level is $-6$ dB. Step 3: Needed rise is $6$ dB. Step 4: Positive margin marks stable-side gain.'
      },
      {
        q: 'Raising loop gain with phase untouched:',
        options: [
          'Improves both margins equally',
          'Shrinks gain margin directly and usually phase margin via crossover shift',
          'Leaves gain margin unchanged',
          'Removes all phase lag'
        ],
        answer: 1,
        explanation: 'Step 1: Gain shifts magnitude vertically. Step 2: Phase crossover level rises toward $0$ dB. Step 3: Gain crossover slides rightward into laggier phase. Step 4: Both margins therefore erode.'
      }
    ]
  },

  // ---------------------------------------------------------------- 6.3
  {
    sectionId: 'ece-e-control-s26',
    readingTime: 10,
    intro: 'Root locus draws every closed-loop pole path as gain sweeps from zero to infinity. Angle and magnitude conditions place branches exactly, while asymptotes and breakaways sketch them quickly. Lead and lag networks then reshape the locus to meet speed and accuracy targets.',
    objectives: [
      'Apply angle and magnitude conditions to test locus membership and find gains $K$',
      'Sketch loci with real-axis segments, asymptotes, centroid and breakaway points',
      'Select lead versus lag compensation for transient shaping versus error trimming'
    ],
    concepts: [
      {
        term: 'Angle and magnitude conditions',
        kind: 'theorem',
        statement: 'A point $s_0$ lies on the **locus** `locus` exactly when angles from poles minus angles from zeros equal $180$ degrees modulo $360$, written $\\sum \\angle(s_0 - p_i) - \\sum \\angle(s_0 - z_j) = 180^{\\circ}$. Gain at the point follows $|K| = \\prod|s_0-p_i|/\\prod|s_0-z_j|$.',
        detail: 'Test points need no plotting: evaluate the angle sum numerically. Magnitude then prices each locus point in gain units.'
      },
      {
        term: 'Real-axis segments',
        kind: 'method',
        statement: '**Real-axis locus** `real-axis` covers intervals with an odd count of poles plus zeros to the right. Segments alternate at each real critical point along the axis.',
        detail: 'Count finite poles and zeros strictly right of the test point. Complex pairs never affect the count since they sit off-axis.'
      },
      {
        term: 'Asymptotes and centroid',
        kind: 'method',
        statement: 'When poles exceed zeros by **$n - m$** `asymptotes`, branches head to infinity along angles $(2q+1)180^{\\circ}/(n-m)$ from centroid $\\sigma = (\\sum p_i - \\sum z_j)/(n-m)$. More poles than zeros bend the far field outward.',
        detail: 'Three excess poles give $60$, $180$ and $300$ degree asymptotes. The centroid anchors them on the real axis regardless of gain.'
      },
      {
        term: 'Breakaway and imaginary crossings',
        kind: 'method',
        statement: '**Breakaway points** `breakaway` solve $dK/ds = 0$ on the real axis where branches split, while **imaginary crossings** come from Routh or substitution $s = j\\omega$. Together they mark the stability edge on the sketch.',
        detail: 'Between adjacent poles the locus bulges off-axis at the breakaway gain. Crossing gains match Routh boundary values from Section 6.1.'
      },
      {
        term: 'Lead versus lag choice',
        kind: 'method',
        statement: '**Lead** `lead` compensation adds left-half zero-pole pairs with zero nearer the origin to bend the locus leftward for speed and margin. **Lag** adds near-origin pairs for low-frequency gain and error trimming with minimal transient change.',
        detail: 'Lead trades noise sensitivity for damping. Lag needs smaller ratios to avoid sluggish tails, and lead-lag cascades serve both goals jointly.'
      }
    ],
    examples: [
      {
        title: 'Trace: sketching a two-pole locus',
        problem: 'Open loop $G(s)H(s) = K/(s(s+2))$. Sketch the locus and find the imaginary crossing.',
        steps: [
          { label: 'Step 1', text: '```text\npoles: 0, -2 | zeros: none | n-m = 2\nreal-axis locus: (-2, 0) by odd-count rule\nasymptotes: 90 and 270 deg from centroid -1\n```\nTwo poles with no zeros fix the scaffold.' },
          { label: 'Step 2', text: 'Breakaway at $dK/ds = 0$ for $K = -s(s+2)$ gives $s = -1$ with $K = 1$: branches meet between the poles then leave vertically along the asymptotes.' },
          { label: 'Step 3', text: 'Characteristic $s^2 + 2s + K = 0$ with $s = j\\omega$ gives $K = \\omega^2$ and $2\\omega = 0$, so the crossing sits at the origin in the limit: any $K > 0$ keeps poles left-half here.' }
        ],
        result: 'Locus on $(-2, 0)$ splitting at $-1$ into vertical asymptotes, stable for all $K > 0$.'
      },
      {
        title: 'Drill: lead against lag on a sluggish loop',
        problem: 'A loop settles slowly with decent steady error, while a sibling loop is fast but inaccurate. Assign lead and lag.',
        steps: [
          { label: 'Step 1', text: 'The sluggish loop needs leftward bending for speed and damping, which is the lead action with its zero nearer the origin than its pole.' },
          { label: 'Step 2', text: 'The fast but inaccurate loop needs low-frequency gain without transient reshaping, which is the lag action with a near-unity pair at the origin side.' },
          { label: 'Step 3', text: 'Verify by locus: lead pulls branches left off the imaginary axis while lag mostly lifts low-frequency magnitude with small angle cost.' }
        ],
        result: 'Lead speeds the sluggish loop, lag trims error of the fast loop.'
      }
    ],
    keyTakeaways: [
      'Angle sums of $180$ degrees mark locus points and magnitude ratios price the gain.',
      'Real-axis segments need an odd pole-zero count to their right.',
      'Asymptote angles and centroid scaffold the far field by pole-zero excess.',
      'Lead bends loci for speed while lag boosts low-frequency gain for accuracy.'
    ],
    quiz: [
      {
        q: 'A test point is on the locus when its angle sum equals:',
        options: ['$0$ degrees', '$90$ degrees', `$180$ degrees modulo $360$`, '$270$ degrees always'],
        answer: 2,
        explanation: 'Step 1: Loop phase must reach $180$ degrees for negative feedback. Step 2: Pole angles minus zero angles give that phase. Step 3: Multiples of $360$ repeat the direction. Step 4: Hence $180$ modulo $360$ is the test.'
      },
      // PYQ-pattern: real-axis segment and asymptote scaffold
      {
        q: 'Poles at $0$ and $-2$ with no zeros give real-axis locus:',
        options: [
          'Everywhere on the real axis',
          'The interval $(-2, 0)$ only',
          'Nowhere on the real axis',
          'Only at $s = -1$'
        ],
        answer: 1,
        explanation: 'Step 1: Test points right of both poles see two to the right. Step 2: Between them see one to the right. Step 3: Odd count marks the locus. Step 4: Only $(-2, 0)$ qualifies.'
      },
      {
        q: 'With $n - m = 3$, asymptote angles are:',
        options: [
          '$0$, $120$ and $240$ degrees',
          '$60$, $180$ and $300$ degrees',
          '$45$, $135$, $225$ and $315$ degrees',
          'A single $180$ degree line'
        ],
        answer: 1,
        explanation: 'Step 1: Formula is $(2q+1)180/(n-m)$. Step 2: With excess $3$, steps are $60$ degrees. Step 3: Values for $q = 0, 1, 2$ give $60$, $180$, $300$. Step 4: Four angles would need excess $4$.'
      },
      {
        q: 'Lead compensation is chosen to:',
        options: [
          'Add low-frequency gain with minimal transient change',
          'Bend the locus leftward for speed and damping at some noise cost',
          'Cancel the plant entirely with inverse dynamics',
          'Remove all feedback sensors'
        ],
        answer: 1,
        explanation: 'Step 1: Lead places zero nearer the origin than its pole. Step 2: Added phase lead shifts branches left. Step 3: Damping and margins improve with faster poles. Step 4: High-frequency lift is the noise price, unlike lag trimming.'
      }
    ]
  },

  // ---------------------------------------------------------------- 6.4
  {
    sectionId: 'ece-e-control-s27',
    readingTime: 8,
    intro: 'State-space models track internal memory directly with first-order vector equations instead of hiding it in high-order denominators. State choice is flexible while transfer behavior stays fixed. Controllability and observability then test whether inputs reach and outputs reveal that memory.',
    objectives: [
      'Write $\\dot{x} = Ax + Bu$ and $y = Cx + Du$ from diagrams and high-order equations',
      'Solve free and forced response via $e^{At}$ and the resolvent $(sI-A)^{-1}$',
      'Test controllability and observability by rank of their structured matrices'
    ],
    concepts: [
      {
        term: 'State equations form',
        kind: 'definition',
        statement: 'The **state model** `state` keeps $\\dot{x} = Ax + Bu$ with output $y = Cx + Du$: $A$ mixes states, $B$ injects inputs, $C$ reads outputs and $D$ feeds through. Order equals state dimension $n$.',
        detail: 'Phase-variable form chains integrators for each denominator coefficient. Parallel and modal forms diagonalize distinct poles into decoupled modes.'
      },
      {
        term: 'Transfer from state matrices',
        kind: 'theorem',
        statement: 'Zero-state transfer is **$G(s) = C(sI-A)^{-1}B + D$** `resolvent` through the resolvent $(sI-A)^{-1}$. Poles are eigenvalues of $A$, shared across all input-output pairs.',
        detail: 'Pole-zero cancellations in $G(s)$ hide modes that state tests still expose. Minimal realizations keep exactly the observable and controllable part.'
      },
      {
        term: 'Matrix exponential solution',
        kind: 'method',
        statement: 'Free motion flows as **$x(t) = e^{At}x(0)$** `expm` with forced convolution $\\int_0^t e^{A(t-\\tau)}Bu(\\tau)d\\tau$ added for inputs. Stability needs every eigenvalue of $A$ strictly left-half.',
        detail: 'Diagonal $A$ exponentiates entrywise to $e^{\\lambda_i t}$. Jordan blocks add $t^k e^{\\lambda t}$ envelopes beside the exponentials.'
      },
      {
        term: 'Controllability test',
        kind: 'method',
        statement: 'The pair is **controllable** `controllable` when $[B, AB, \\dots, A^{n-1}B]$ has full row rank $n$. Full rank means some input steers any state to any target in finite time.',
        detail: 'Repeated or decoupled modes with zero $B$ rows fail the test. Controller design by pole placement assumes this rank first.'
      },
      {
        term: 'Observability test',
        kind: 'method',
        statement: 'The pair is **observable** `observable` when $[C; CA; \\dots; CA^{n-1}]$ stacked has full column rank $n$. Full rank means output records over time determine the initial state uniquely.',
        detail: 'Hidden modes that never reach $C$ fail the test. Observer design mirrors controller design on the transposed pair.'
      }
    ],
    examples: [
      {
        title: 'Trace: phase-variable model of a second-order plant',
        problem: 'Plant $Y(s)/U(s) = 1/(s^2 + 3s + 2)$. Write a state realization and name its poles.',
        steps: [
          { label: 'Step 1', text: '```text\nx1 = y, x2 = y_dot\nx1_dot = x2\nx2_dot = -2 x1 - 3 x2 + u\ny = x1\nA = [[0,1],[-2,-3]] B = [0,1] C = [1,0] D = 0\n```\nChain one integrator per denominator order with feedback of coefficients.' },
          { label: 'Step 2', text: 'Eigenvalues of $A$ solve $\\det(sI - A) = s^2 + 3s + 2$, giving poles $-1$ and $-2$ matching the denominator roots.' },
          { label: 'Step 3', text: 'Controllability matrix $[B, AB] = [[0,1],[1,-3]]$ has rank $2$, and observability stacks full rank as well, so the realization is minimal.' }
        ],
        result: 'Minimal realization with poles $-1$ and $-2$, fully controllable and observable.'
      },
      {
        title: 'Drill: uncontrollable mode diagnosis',
        problem: 'Modal $A = diag(-1, -2)$ with $B = (1, 0)$ claims full control of both modes. Test the claim.',
        steps: [
          { label: 'Step 1', text: 'Controllability matrix is $[B, AB] = [[1,-1],[0,0]]$ since the second $B$ row is zero and stays zero under diagonal $A$.' },
          { label: 'Step 2', text: 'Rank is $1 < n = 2$, so the $-2$ mode never feels the input regardless of signal choice.' },
          { label: 'Step 3', text: 'Pole placement can move $-1$ but not $-2$; actuator rewiring to touch the second mode is the structural fix.' }
        ],
        result: 'Uncontrollable $-2$ mode from the zero $B$ row, rank $1$ of $2$.'
      }
    ],
    keyTakeaways: [
      '$\\dot{x} = Ax + Bu$ and $y = Cx + Du$ carry memory explicitly in vector form.',
      '$C(sI-A)^{-1}B + D$ recovers the transfer with eigenvalues of $A$ as poles.',
      '$e^{At}$ advances initial states with convolution handling the forced input.',
      'Rank tests on structured matrices certify controllability and observability.'
    ],
    quiz: [
      {
        q: 'Poles of $G(s)$ from a state model are:',
        options: [
          'Eigenvalues of $A$ via $\\det(sI-A)$',
          'Entries of $B$ directly',
          'Zeros of $C$ alone',
          'Always at the origin'
        ],
        answer: 0,
        explanation: 'Step 1: The resolvent inverts $(sI-A)$. Step 2: Its denominator is $\\det(sI-A)$. Step 3: Roots are eigenvalues of $A$. Step 4: $B$, $C$ and $D$ shape zeros and gain instead.'
      },
      // PYQ-pattern: rank verdict on a modal controllability matrix
      {
        q: '$A = diag(-1,-2)$, $B = (1,0)$ gives controllability rank:',
        options: [`$0$`, '$1$, hence uncontrollable', '$2$, hence controllable', 'Undefined without $C$'],
        answer: 1,
        explanation: 'Step 1: Build $[B, AB]$ for $n = 2$. Step 2: Rows read $(1,-1)$ and $(0,0)$. Step 3: Rank is $1$ below $n$. Step 4: The $-2$ mode is therefore unreachable.'
      },
      {
        q: 'Free response from $x(0)$ is:',
        options: [
          `$e^{At}x(0)$ with eigenvalue modes of $A$`,
          '$Ax(0)$ with no time evolution',
          `$Bu(t)$ ignoring $A$`,
          '$Cx(0)$ as the state itself'
        ],
        answer: 0,
        explanation: 'Step 1: Homogeneous equation is $\\dot{x} = Ax$. Step 2: Its flow operator is $e^{At}$. Step 3: Initial states advance through that operator. Step 4: Forced inputs instead add the convolution term.'
      },
      {
        q: 'Observability is tested by rank of:',
        options: [
          '$[B, AB, \\dots]$ row blocks',
          'Stacked $[C; CA; \\dots; CA^{n-1}]$ column blocks',
          '$D$ feedthrough alone',
          'The $FFT$ of output samples'
        ],
        answer: 1,
        explanation: 'Step 1: Observability asks whether outputs reveal states. Step 2: Output derivatives bring $CA^k$ rows. Step 3: Stacking $n$ blocks captures full information. Step 4: Full column rank $n$ certifies the property.'
      }
    ]
  }
]

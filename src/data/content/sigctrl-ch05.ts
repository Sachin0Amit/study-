import type { SectionContent } from '../library'

// ============================================================================
// Signals and Control — Chapter 5: Transfer Functions, Blocks and SFG
// Sections 5.1 - 5.4. Master study content.
// ============================================================================

export const sigctrlCh05Content: SectionContent[] = [
  // ---------------------------------------------------------------- 5.1
  {
    sectionId: 'ece-e-control-s20',
    depth: [
      {
        tier: 'masters',
        title: 'Feedback robustness: sensitivity and the cost of control',
        blocks: [
          {
            kind: 'para',
            body: 'Closing the loop around a plant $P$ with controller $C$ replaces open-loop gain $PC$ by closed-loop $T = PC/(1+PC)$ from reference to output, with sensitivity $S = 1/(1+PC)$ from disturbance to error. **Feedback desensitizes**: fractional changes in $P$ appear in $T$ attenuated by $|S|$, so large loop gain makes behavior follow the controller rather than the drifting plant. Graduate control theory quantifies the price — waterbed and Bode integral constraints show sensitivity pushed down in one band must pop up elsewhere — turning robustness into a **shaping problem** for $|S|$ and $|T|$ across frequency rather than a scalar gain choice.'
          },
          {
            kind: 'theorem',
            body: 'The **sensitivity identity** $S + T = 1$ holds at every frequency, and fractional sensitivity satisfies $$\\frac{dT/T}{dP/P} = S,$$ so $|S| < 1$ marks frequencies where feedback helps and $|S| > 1$ where it hurts. For stable minimum-phase loops the **Bode sensitivity integral** forces $$\\int_{0}^{\\infty} \\log|S(j\\omega)| d\\omega = 0$$ up to unstable-pole corrections, proving perfect attenuation everywhere is impossible. Robust stability under multiplicative uncertainty $\\Delta$ with $|\\Delta| < 1/\\gamma$ requires $|T| < \\gamma$ pointwise — small complementary sensitivity where models are poor.'
          },
          {
            kind: 'derivation',
            heading: 'Sensitivity formula and integral constraint',
            body: 'Differentiate $T = PC/(1+PC)$ with respect to $P$ holding $C$ fixed: $$\\frac{dT}{dP} = \\frac{C(1+PC) - PC\\times C}{(1+PC)^{2}} = \\frac{C}{(1+PC)^{2}}.$$ Normalize by $T/P$: $$\\frac{dT/T}{dP/P} = \\frac{P}{T}\\frac{dT}{dP} = \\frac{P(1+PC)}{PC}\\times\\frac{C}{(1+PC)^{2}} = \\frac{1}{1+PC} = S.$$ The Bode integral follows from contour integration of $\\log S(s)$ around the right half-plane for stable loops, where analyticity forces total area zero; unstable poles at $p_i$ add $\\pi\\sum \\text{Re}(p_i)$ of mandatory positive area. Uncertainty analysis applies the small-gain argument to the loop with $\\Delta$: stability for all allowed perturbations holds exactly when the complementary sensitivity stays below the reciprocal bound.'
          },
          {
            kind: 'application',
            body: 'Loop shaping turns the identities into design rules: push $|S|$ low at low frequency for tracking and disturbance rejection, roll $|T|$ off before unmodeled resonances, keep peaks $M_S = \\max|S|$ and $M_T = \\max|T|$ near unity for margin. Modern robust synthesis automates the tradeoff by minimizing weighted $H_{\\infty}$ norms of stacked $S$ and $T$, producing controllers with certificates rather than trial-and-error Bode tweaks. The frontier extends to data-driven tuning that estimates $S$ from closed-loop experiments, preserving stability during adaptation by constraining updates to small-gain steps.'
          }
        ]
      }
    ],
    readingTime: 7,
    intro: 'Feedback compares output against desire and drives the difference toward zero, turning sensitive open loops into robust closed loops. Transfer functions capture that behavior as rational functions of frequency. Sensitivity math then quantifies exactly how much feedback tames plant drift.',
    objectives: [
      'Derive closed-loop $T(s)$ from forward $G(s)$ and feedback $H(s)$ with sign care',
      'Compare open-loop and closed-loop sensitivity to plant and sensor drift',
      'Read poles, zeros and $DC$ gain from factored transfer forms'
    ],
    concepts: [
      {
        term: 'Open versus closed loop',
        kind: 'definition',
        statement: '**Open loop** `open` drives the plant with no measurement return, while **closed loop** `closed` feeds $H(s)$ output back to a summing junction. Negative feedback subtracts, positive feedback adds.',
        detail: 'Open loops are cheap and blind to drift. Closed loops pay in sensors and stability analysis for tracking plus disturbance rejection.'
      },
      {
        term: 'Closed-loop transfer',
        kind: 'theorem',
        statement: 'With forward **$G(s)$** `G` and feedback **$H(s)$** `H`, negative feedback gives $T(s) = G(s)/(1 + G(s)H(s))$. Unity feedback sets $H = 1$ for $T = G/(1+G)$.',
        detail: 'Sign errors flip the denominator to $1 - GH$. Block diagrams mark the subtracted input explicitly to prevent the flip.'
      },
      {
        term: 'Sensitivity reduction',
        kind: 'theorem',
        statement: '**Sensitivity** `S` of $T$ to $G$ is $S_G^T = 1/(1+G(s)H(s))$, so large loop gain $GH$ desensitizes the closed loop to plant drift. Sensor-path sensitivity stays near one, which is why sensors must be precise.',
        detail: 'A ten percent plant shift with $|GH| = 9$ moves $T$ by about one percent. The same math shows disturbances at the plant input divide by $1 + GH$.'
      },
      {
        term: 'Poles, zeros and gain',
        kind: 'notation',
        statement: '**Poles** `poles` root the denominator and set modes, **zeros** root the numerator and block transmission, and $K$ scales the factored form $K \\prod(s-z_i)/\\prod(s-p_j)$. $DC$ gain evaluates at $s = 0$.',
        detail: 'Right-half poles grow in time and dominate stability verdicts. Minimum-phase zeros sit left, non-minimum right with extra phase lag.'
      },
      {
        term: 'Tracking versus disturbance',
        kind: 'insight',
        statement: 'The same loop serves **tracking** `tracking` of references and **rejection** of disturbances through complementary maps $T$ and $S = 1/(1+GH)$. Pushing one down lifts design pressure on the other at shared frequencies.',
        detail: 'Reference error uses $1/(1+GH)$ while plant-input disturbance sees $G/(1+GH)$. Large $GH$ helps both at low frequency within stability limits.'
      }
    ],
    examples: [
      {
        title: 'Trace: closed loop from blocks',
        problem: 'Forward $G(s) = 10/(s+1)$ with unity feedback. Find $T(s)$, its pole and its $DC$ gain.',
        steps: [
          { label: 'Step 1', text: '```text\nT = G / (1 + G) = [10/(s+1)] / [1 + 10/(s+1)]\n  = 10 / (s + 11)\n```\nUnity feedback puts $H = 1$ in the denominator sum.' },
          { label: 'Step 2', text: 'The closed-loop pole moves from $-1$ to $-11$: feedback speeds the loop elevenfold while keeping it left-half stable.' },
          { label: 'Step 3', text: '$DC$ gain is $T(0) = 10/11$, near one but short by the $1/(1+G(0))$ factor, which larger $G(0)$ would shrink further.' }
        ],
        result: '$T(s) = 10/(s+11)$ with pole $-11$ and $DC$ gain $10/11$.'
      },
      {
        title: 'Drill: sensitivity numbers',
        problem: 'Plant $G$ drifts by $10$ percent in a loop with $|GH| = 9$. How far does $T$ drift?',
        steps: [
          { label: 'Step 1', text: 'Sensitivity is $S = 1/(1+GH) = 1/10$ in magnitude at the drift frequency.' },
          { label: 'Step 2', text: 'Closed-loop fractional shift is $S$ times plant shift: $10$ percent divided by $10$.' },
          { label: 'Step 3', text: 'Hence $T$ moves about $1$ percent, a tenfold desensitization bought by the loop gain.' }
        ],
        result: 'Ten percent plant drift becomes one percent closed-loop drift.'
      }
    ],
    keyTakeaways: [
      'Negative feedback closes as $T = G/(1+GH)$ with sign discipline at the summer.',
      'Loop gain divides plant sensitivity and input disturbances alike.',
      'Poles set modes, zeros block tones, and $s = 0$ reads $DC$ gain.',
      'Sensors stay outside the desensitization, so their precision limits the loop.'
    ],
    quiz: [
      {
        q: 'Unity-feedback closed loop with $G(s)$ is:',
        options: [
          `$G/(1-G)$`,
          `$G/(1+G)$`,
          `$1/(1+G)$`,
          '$G \\cdot H$ with no denominator'
        ],
        answer: 1,
        explanation: 'Step 1: General form is $G/(1+GH)$. Step 2: Unity sets $H = 1$. Step 3: Substitution gives $G/(1+G)$. Step 4: Minus signs would instead give $1 - GH$.'
      },
      // PYQ-pattern: sensitivity scaling under large loop gain
      {
        q: 'Loop with $|GH| = 9$ and $10$ percent plant drift shifts $T$ by about:',
        options: ['$90$ percent', '$10$ percent', '$1$ percent', '$0$ percent exactly'],
        answer: 2,
        explanation: 'Step 1: Sensitivity is $1/(1+GH)$. Step 2: Magnitude is $1/10$. Step 3: Multiply plant drift by sensitivity. Step 4: Ten percent becomes one percent.'
      },
      {
        q: 'Zeros of $T(s)$ are values where:',
        options: [
          'The denominator vanishes and modes grow',
          'The numerator vanishes and transmission blocks',
          '$s = 0$ always',
          'Feedback sign flips automatically'
        ],
        answer: 1,
        explanation: 'Step 1: Factored form separates numerator and denominator roots. Step 2: Numerator roots null the output for finite inputs. Step 3: Denominator roots instead set natural modes. Step 4: $DC$ gain is evaluation, not root location.'
      },
      {
        q: 'Feedback desensitizes plant drift but NOT:',
        options: [
          'Reference tracking error',
          'Plant-input disturbances',
          'Sensor-path drift, which feeds forward nearly one to one',
          'Forward-gain variation'
        ],
        answer: 2,
        explanation: 'Step 1: Sensitivity to $G$ divides by $1+GH$. Step 2: Disturbances divide similarly. Step 3: Sensor drift enters past the division. Step 4: Hence sensors must be precise independently.'
      }
    ]
  },

  // ---------------------------------------------------------------- 5.2
  {
    sectionId: 'ece-e-control-s21',
    readingTime: 8,
    intro: 'Block diagrams turn algebra into pictures where series, parallel and feedback combinations collapse visually. Summing junctions and takeoff points slide with care to expose those patterns. Reduction ends with a single transfer between the chosen input and output.',
    objectives: [
      'Collapse series, parallel and feedback blocks into equivalent $G_{eq}$ forms',
      'Shift summers and takeoffs legally past blocks with compensating dynamics',
      'Reduce multi-loop diagrams stepwise to one input-output transfer'
    ],
    concepts: [
      {
        term: 'Series and parallel collapse',
        kind: 'method',
        statement: '**Series** `series` blocks multiply as $G_1 G_2$ while **parallel** `parallel` branches add as $G_1 + G_2$ with matched signs. Both assume signal direction follows the arrows with no loading interaction.',
        detail: 'Cascaded gains multiply pole-zero sets by concatenation. Parallel sums need common denominators before mode counting.'
      },
      {
        term: 'Feedback collapse',
        kind: 'theorem',
        statement: 'A **feedback loop** `feedback` with forward $G$ and return $H$ collapses to $G/(1+GH)$ for negative sign. Inner loops collapse first so outer structure simplifies progressively.',
        detail: 'Collapsing from the inside out keeps denominators nested correctly. Positive feedback instead gives $G/(1-GH)$ with its hazard flagged.'
      },
      {
        term: 'Moving summers',
        kind: 'method',
        statement: 'A **summer** `summer` moved past $G$ against signal flow gains a $1/G$ compensation on the shifted leg, while moving with the flow gains $G$. Signs ride along unchanged on the moved branch.',
        detail: 'Draw the equivalent added signals before and after to verify: the rule preserves every branch contribution while exposing series or feedback adjacency.'
      },
      {
        term: 'Moving takeoffs',
        kind: 'method',
        statement: 'A **takeoff** `takeoff` moved past $G$ against the flow gains $G$ on the tapped leg, while moving with the flow gains $1/G$. The tap still carries the same signal after compensation.',
        detail: 'Takeoffs duplicate signals without loading. Misplaced taps silently change which dynamics the feedback encloses, so re-derive after each move.'
      },
      {
        term: 'Reduction order habit',
        kind: 'insight',
        statement: '**Inside-out reduction** `inside-out` collapses nested loops before outer ones, checking each step by dimension and $DC$ gain. Mason rule cross-checks the final transfer independently.',
        detail: 'Label every intermediate equivalent block. A $DC$-gain sanity check at $s = 0$ catches most sign and move errors early.'
      }
    ],
    examples: [
      {
        title: 'Trace: inner loop then outer loop',
        problem: 'Inner forward $G_1 = 1/s$ with $H_1 = 2$, outer forward path the inner equivalent times $G_2 = 4$, unity outer feedback. Reduce fully.',
        steps: [
          { label: 'Step 1', text: '```text\ninner: G1/(1+G1 H1) = (1/s)/(1+2/s) = 1/(s+2)\nouter forward: 4/(s+2)\nouter loop: [4/(s+2)] / [1 + 4/(s+2)]\n```\nCollapse the inner feedback before touching the outer.' },
          { label: 'Step 2', text: 'Outer collapse gives $4/(s+6)$: multiply numerator and denominator by $(s+2)$ and add the unity return.' },
          { label: 'Step 3', text: '$DC$ check: inner $1/2$, times $4$ is $2$, closed outer $2/3$, matching $4/6$ at $s = 0$.' }
        ],
        result: 'Overall transfer $4/(s+6)$ after inside-out collapse.'
      },
      {
        title: 'Drill: shift a summer to expose feedback',
        problem: 'A disturbance summer sits after $G$ but analysis needs it before $G$. How does the leg compensate?',
        steps: [
          { label: 'Step 1', text: 'Moving the summer against signal flow past $G$ divides the shifted disturbance leg by $G$, inserting $1/G$ on that branch.' },
          { label: 'Step 2', text: 'The main path stays $G$ while the shifted leg now enters with identical effect at the new junction.' },
          { label: 'Step 3', text: 'Feedback structure around $G$ becomes visible for collapse, with the $1/G$ block riding the disturbance path only.' }
        ],
        result: 'Shifted leg gains $1/G$, exposing the loop for reduction.'
      }
    ],
    keyTakeaways: [
      'Series blocks multiply and parallel branches add with sign care.',
      'Feedback with return $H$ collapses to $G/(1+GH)$ under negative sign.',
      'Summers and takeoffs slide with $G$ or $1/G$ compensation on moved legs.',
      'Inside-out order with $DC$ checks keeps multi-loop reduction reliable.'
    ],
    quiz: [
      {
        q: 'Blocks $G_1$ then $G_2$ in series equal:',
        options: [`$G_1 + G_2$`, `$G_1 G_2$`, `$G_1/(1+G_1 G_2)$`, `$G_2 - G_1$`],
        answer: 1,
        explanation: 'Step 1: The first output feeds the second input. Step 2: Transforms multiply in cascade. Step 3: Addition belongs to parallel branches. Step 4: Feedback forms need a return path.'
      },
      // PYQ-pattern: feedback collapse with non-unity return path
      {
        q: 'Forward $G$ with return $H$ under negative feedback collapses to:',
        options: [`$G/(1-GH)$`, `$G/(1+GH)$`, `$GH/(1+G)$`, `$1 + GH$`],
        answer: 1,
        explanation: 'Step 1: Loop signals satisfy $E = R - HE_{out}$ style subtraction. Step 2: Solving with $Y = GE$ gives $Y(1+GH) = GR$. Step 3: Hence $Y/R = G/(1+GH)$. Step 4: Positive sign would flip to $1 - GH$.'
      },
      {
        q: 'A summer moved against flow past $G$ needs:',
        options: [
          'No compensation on any leg',
          '$G$ multiplied on the main path',
          '$1/G$ on the shifted leg entering the new junction',
          'Removal of the feedback sensor'
        ],
        answer: 2,
        explanation: 'Step 1: Against-flow moves change the signal seen downstream. Step 2: Dividing the shifted leg by $G$ restores equality. Step 3: Main-path dynamics stay untouched. Step 4: Sensor removal answers a different question.'
      },
      {
        q: 'Reliable multi-loop reduction proceeds:',
        options: [
          'Outside-in with no checks',
          'Inside-out, collapsing inner loops first with $DC$ verification',
          'By deleting all summers immediately',
          'By converting every branch to unity first'
        ],
        answer: 1,
        explanation: 'Step 1: Inner loops hide inside outer forward paths. Step 2: Collapsing them first exposes outer patterns. Step 3: $DC$ checks catch sign and move slips. Step 4: Deleting junctions destroys signal accounting.'
      }
    ]
  },

  // ---------------------------------------------------------------- 5.3
  {
    sectionId: 'ece-e-control-s22',
    readingTime: 10,
    intro: 'Signal-flow graphs replace blocks with branches so any topology reduces by one formula. Forward paths, loops and their touching relations feed Mason determinant directly. Careful enumeration is the whole battle: missed paths and miscounted non-touching sets are the classic slips.',
    objectives: [
      'List forward paths, individual loops and non-touching loop sets on a flow graph',
      'Evaluate Mason determinant $\\Delta$ and cofactors $\\Delta_k$ without sign slips',
      'Compute overall $T = \\sum P_k \\Delta_k/\\Delta$ and cross-check by block reduction'
    ],
    concepts: [
      {
        term: 'Graph vocabulary',
        kind: 'notation',
        statement: 'Nodes sum incoming **branches** `branch` while branch gains multiply along travel: a **path** never revisits a node and a **loop** returns to its start. Self-loops count as loops of length one.',
        detail: 'Source nodes have only outgoing branches, sinks only incoming. Parallel branches between one node pair add into a single gain.'
      },
      {
        term: 'Forward paths and loop gains',
        kind: 'method',
        statement: 'Each **forward path gain $P_k$** `Pk` multiplies its branch gains from source to sink, while each **loop gain $L_m$** multiplies around its cycle. Enumeration must be exhaustive before any determinant work.',
        detail: ' touch discipline: paths and loops sharing any node, including the source and sink, count as touching. List loops first since determinants reuse them.'
      },
      {
        term: 'Mason determinant',
        kind: 'theorem',
        statement: 'The **determinant** `Delta` is $\\Delta = 1 - \\sum L_1 + \\sum L_2 - \\sum L_3 + \\cdots$ where $L_2$ sums products of two non-touching loops. Signs alternate by count of loops in each product.',
        detail: 'Two loops sharing a node never pair in $L_2$. Triple products need three mutually non-touching loops, rare in textbook graphs but tested.'
      },
      {
        term: 'Path cofactors',
        kind: 'method',
        statement: 'Each **cofactor $\\Delta_k$** `cofactor` rebuilds $\\Delta$ using only loops non-touching path $P_k$. Loops touching the path vanish from its cofactor while surviving in the global $\\Delta$.',
        detail: 'A path touching every loop gets $\\Delta_k = 1$. Missing this deletion is the most common scoring slip in drills.'
      },
      {
        term: 'Overall gain assembly',
        kind: 'theorem',
        statement: 'Mason rule assembles **$T = (\\sum_k P_k \\Delta_k)/\\Delta$** `mason` over all forward paths. One path with full cofactor plus a two-path correction covers most textbook graphs.',
        detail: 'Cross-check small graphs by block reduction: identical $DC$ gain and pole sets confirm the enumeration before trusting a long determinant.'
      }
    ],
    derivations: [
      {
        title: 'Mason Gain from Paths and Loop Determinant',
        statement: 'Source-sink transfer equals cofactor-weighted paths over the graph determinant: $$T = \\frac{\\sum_{k} P_{k} \\Delta_{k}}{\\Delta}$$',
        prerequisites: [
          'Forward path gain $P_{k}$ as the product along path $k$',
          'Loop gain $L$ as the product around a closed directed cycle',
          'Touching rule: shared nodes disqualify loop pairs and path-loop pairs',
        ],
        steps: [
          {
            label: 'Step 1: List every forward path product',
            formula: `$$P_{k} = \\prod g_{e}$$`,
            explanation: 'Each directed route from source to sink contributes the product of its branch gains $g_{e}$. Enumeration must be exhaustive because every route carries signal independently. Missing a path drops a numerator term permanently.',
          },
          {
            label: 'Step 2: Build the graph determinant from loops',
            formula: `$$\\Delta = 1 - \\sum L_{1} + \\sum L_{2} - \\cdots$$`,
            explanation: 'Single loops subtract from one because feedback divides forward gain by one minus loop gain. Products of two mutually non-touching loops add back since independent recirculations compound. Alternation continues over triples and beyond, which is why touching pairs are excluded at every order.',
          },
          {
            label: 'Step 3: Form each cofactor by deleting touching loops',
            formula: `$$\\Delta_{k} = 1 - \\sum L_{1}^{(k)} + \\cdots$$`,
            explanation: 'Loops touching path $k$ already interact with its signal, so they leave the cofactor and stay only in the global $\\Delta$. Only loops fully disjoint from the path rescale that path contribution. A path meeting every loop correctly receives $\\Delta_{k} = 1$.',
          },
          {
            label: 'Step 4: Assemble the ratio and cross-check',
            formula: `$$T = \\frac{P_{1}\\Delta_{1} + P_{2}\\Delta_{2} + \\cdots}{\\Delta}$$`,
            explanation: 'Weighting each path by its cofactor and dividing by the determinant solves all node equations simultaneously by signal-flow algebra. The denominator sets the poles while the numerator shapes zeros, so pole comparison against block reduction validates the count. Agreement on $DC$ gain ends the check because steady values expose dropped paths immediately.',
          },
        ],
        result: 'Mason rule gives $T = (\\sum_{k} P_{k} \\Delta_{k})/\\Delta$ with $\\Delta$ from all non-touching loop sets and $\\Delta_{k}$ from sets avoiding path $k$; careful enumeration plus a block-reduction check makes the reduction routine.',
      },
    ],
    examples: [
      {
        title: 'Trace: two paths with one loop',
        problem: 'Source to sink has $P_1 = G_1 G_2$ and $P_2 = G_3$, with one loop $L_1 = -G_1 G_2 H$ touching $P_1$ only. Apply Mason rule.',
        steps: [
          { label: 'Step 1', text: '```text\npaths: P1 = G1 G2,  P2 = G3\nloops: L1 = -G1 G2 H\ntouching: L1 touches P1, misses P2\nDelta = 1 - L1 = 1 + G1 G2 H\n```\nEnumerate before substituting any cofactor.' },
          { label: 'Step 2', text: 'Cofactors: $\\Delta_1 = 1$ since $L_1$ touches $P_1$, while $\\Delta_2 = 1 - L_1 = 1 + G_1 G_2 H$ since $L_1$ misses $P_2$.' },
          { label: 'Step 3', text: 'Assembly gives $T = (P_1 \\cdot 1 + P_2(1 + G_1 G_2 H))/\\Delta$, which simplifies to $G_3 + G_1 G_2/(1 + G_1 G_2 H)$: direct feedthrough plus the closed loop in parallel.' }
        ],
        result: '$T = G_3 + G_1 G_2/(1 + G_1 G_2 H)$ with cofactors $1$ and $1 + G_1 G_2 H$.'
      },
      {
        title: 'Drill: non-touching pair in Delta',
        problem: 'Graph holds loops $L_A = -2/s$, $L_B = -3/(s+1)$ non-touching, plus $L_C$ touching both. Write $\\Delta$ through second order.',
        steps: [
          { label: 'Step 1', text: 'First-order sum is $L_A + L_B + L_C$ with their signs carried as written.' },
          { label: 'Step 2', text: 'Second-order keeps only the non-touching product $L_A L_B$, excluding pairs with $L_C$ since it touches both partners.' },
          { label: 'Step 3', text: '$\\Delta = 1 - (L_A + L_B + L_C) + L_A L_B$ at this order, with higher terms only when three mutual non-touchers exist.' }
        ],
        result: '$\\Delta$ keeps the $L_A L_B$ product and drops all pairs involving $L_C$.'
      }
    ],
    keyTakeaways: [
      'Paths multiply source-to-sink gains while loops multiply cycle gains.',
      '$\\Delta$ alternates signs over non-touching loop products by count.',
      '$\\Delta_k$ keeps only loops non-touching path $P_k$.',
      '$T = \\sum P_k \\Delta_k/\\Delta$ assembles the full transfer in one formula.'
    ],
    quiz: [
      // PYQ-pattern: Mason cofactor with touching versus non-touching loops
      {
        q: 'Loop $L_1$ touches $P_1$ but not $P_2$. Cofactors are:',
        options: [
          `$\\Delta_1 = 1$ and $\\Delta_2 = 1 - L_1$`,
          `$\\Delta_1 = \\Delta_2 = 1 - L_1$`,
          `$\\Delta_1 = 1 - L_1$ and $\\Delta_2 = 1$`,
          '$\\Delta_1 = \\Delta_2 = 1$ always'
        ],
        answer: 0,
        explanation: 'Step 1: Cofactors delete touching loops. Step 2: $L_1$ touches $P_1$, so $\\Delta_1$ drops it to $1$. Step 3: $L_1$ misses $P_2$, so $\\Delta_2$ keeps $1 - L_1$. Step 4: Global $\\Delta$ still carries $L_1$ regardless.'
      },
      {
        q: 'Mason determinant through second order is:',
        options: [
          `$1 + \\sum L_1 + \\sum L_2$`,
          '$1 - \\sum L_1 + \\sum L_2$ over non-touching pairs',
          `$\\sum P_k \\Delta_k$ with no $\\Delta$`,
          '$1 - \\sum P_k$ over forward paths'
        ],
        answer: 1,
        explanation: 'Step 1: First-order terms subtract all loops. Step 2: Second-order adds non-touching products. Step 3: Signs alternate by loop count. Step 4: Touching pairs never enter $L_2$.'
      },
      {
        q: 'Overall Mason gain with two paths is:',
        options: [
          '$(P_1 + P_2)/\\Delta$ ignoring cofactors',
          '$\\Delta/(P_1 \\Delta_1)$ for the dominant path',
          `$(P_1 \\Delta_1 + P_2 \\Delta_2)/\\Delta$`,
          '$P_1 P_2 \\Delta$ as a product'
        ],
        answer: 2,
        explanation: 'Step 1: Each path weights by its own cofactor. Step 2: The sum collects all source-sink routes. Step 3: Division by global $\\Delta$ closes the loops. Step 4: Dropping cofactors overcounts touching loops.'
      },
      {
        q: 'Two loops sharing a node in $\\Delta$:',
        options: [
          'Pair in $L_2$ regardless of touching',
          'Pair only when both are self-loops',
          'Add as $L_1$ twice instead',
          'Never pair in $L_2$ since non-touching is required'
        ],
        answer: 3,
        explanation: 'Step 1: $L_2$ sums mutually non-touching products. Step 2: A shared node is touching by definition. Step 3: Such pairs are excluded at every order. Step 4: Each loop still appears alone in $L_1$.'
      }
    ]
  },

  // ---------------------------------------------------------------- 5.4
  {
    sectionId: 'ece-e-control-s23',
    readingTime: 9,
    intro: 'Transient specs describe how quickly and cleanly the step response settles, while error constants predict the residue for standard inputs. Damping regimes link pole positions to overshoot and speed in one picture. Together they turn transfer denominators into performance numbers.',
    objectives: [
      'Read rise time, peak time, overshoot and settling time from second-order parameters',
      'Classify responses as under, critically or overdamped from $\\zeta$ and pole layout',
      'Predict step, ramp and parabola steady errors from $K_p$, $K_v$ and $K_a$ by system type'
    ],
    concepts: [
      {
        term: 'First-order transient',
        kind: 'definition',
        statement: 'A **first-order** `first-order` loop $1/(\\tau s + 1)$ reaches $63$ percent in **$\\tau$** and settles within $2$ percent near **$4\\tau$**. No overshoot is possible with a single left-half pole.',
        detail: 'Bandwidth and speed trade directly: smaller $\\tau$ quickens response while widening the frequency spread.'
      },
      {
        term: 'Second-order specs',
        kind: 'theorem',
        statement: 'With **$\\omega_n$** `wn` and **$\\zeta$** `zeta`, peak overshoot is $e^{-\\pi\\zeta/\\sqrt{1-\\zeta^2}}$, peak time $\\pi/\\omega_d$ and $2$ percent settling $4/(\\zeta\\omega_n)$. Damping $\\zeta$ sets shape while $\\omega_n$ scales speed.',
        detail: 'Overshoot depends on $\\zeta$ alone: $\\zeta = 0.5$ gives about $16$ percent. Settling tracks the real part $\\zeta\\omega_n$, the distance of poles from the imaginary axis.'
      },
      {
        term: 'Damping regimes',
        kind: 'definition',
        statement: '**Underdamped** `under` poles form a complex pair with $0 < \\zeta < 1$ and ringing steps, **critically damped** repeats a real pole at $\\zeta = 1$ for fastest ring-free return, and **overdamped** splits two real poles with $\\zeta > 1$ for sluggish creep.',
        detail: 'Pole angle from the negative real axis encodes $\\zeta$: near-axis poles ring long, far-axis pairs settle fast. Repeated poles mark the boundary between ringing and creep.'
      },
      {
        term: 'System type and constants',
        kind: 'definition',
        statement: '**Type** `type` counts integrators $N$ in $G(s)$, fixing which inputs track: $K_p = \\lim_{s \\to 0} G(s)$, $K_v = \\lim_{s \\to 0} sG(s)$ and $K_a = \\lim_{s \\to 0} s^2 G(s)$. Each finite constant kills the error for its input class.',
        detail: 'Type $0$ tracks steps with $1/(1+K_p)$ but fails ramps. Type $1$ zeroes step error with ramp residue $1/K_v$. Type $2$ additionally zeroes ramps with parabola residue $1/K_a$.'
      },
      {
        term: 'Steady-error table',
        kind: 'method',
        statement: 'Unity-feedback errors follow the **$1/(1+K_p)$, $1/K_v$, $1/K_a$** `errors` ladder for step, ramp and parabola inputs by type. Higher type conquers higher inputs while inviting stability cost from added integrators.',
        detail: 'Non-unity loops need the error transfer $1/(1+GH)$ evaluated per input transform. Disturbance residues follow the same ladder with shifted numerators.'
      }
    ],
    examples: [
      {
        title: 'Trace: specs from damping and frequency',
        problem: 'Second-order loop has $\\zeta = 0.5$ and $\\omega_n = 4$. Compute overshoot, peak time and $2$ percent settling time.',
        steps: [
          { label: 'Step 1', text: '```text\novershoot = exp(-pi*0.5/sqrt(1-0.25)) ~= 16 percent\ndamped freq wd = 4*sqrt(1-0.25) = 2*sqrt(3)\npeak time = pi/wd, settling = 4/(0.5*4)\n```\nShape from $\\zeta$, speed from $\\omega_n$.' },
          { label: 'Step 2', text: 'Peak time is $\\pi/(2\\sqrt{3}) \\approx 0.91$ seconds and settling is $4/2 = 2$ seconds, so ringing dies well after the first peak.' },
          { label: 'Step 3', text: 'Raising $\\omega_n$ would squeeze both times proportionally while overshoot stays pinned at $16$ percent by $\\zeta$.' }
        ],
        result: 'About $16$ percent overshoot, $0.91$ s peak time and $2$ s settling time.'
      },
      {
        title: 'Drill: error constants by type',
        problem: '$G(s) = 8/(s(s+2))$ under unity feedback faces step, ramp and parabola inputs. Predict each steady error.',
        steps: [
          { label: 'Step 1', text: 'One integrator at the origin makes the loop type $1$: $K_p$ is unbounded, $K_v = \\lim_{s \\to 0} sG(s) = 4$, and $K_a = 0$.' },
          { label: 'Step 2', text: 'Step error is $1/(1+K_p) = 0$, ramp error is $1/K_v = 0.25$, and parabola error is unbounded since $K_a = 0$.' },
          { label: 'Step 3', text: 'Adding a second integrator would zero the ramp at the price of harder stabilization, the classic type-versus-stability trade.' }
        ],
        result: 'Step $0$, ramp $0.25$ and unbounded parabola error for this type-$1$ loop.'
      }
    ],
    keyTakeaways: [
      'First-order speed reads $\\tau$ with $4\\tau$ settling and no overshoot.',
      'Second-order shape follows $\\zeta$ while $\\omega_n$ scales all times.',
      'Damping regimes map pole layouts to ringing, boundary or creeping steps.',
      'Type counts integrators and sets step, ramp and parabola errors via $K_p$, $K_v$ and $K_a$.'
    ],
    quiz: [
      {
        q: 'Second-order loop with $\\zeta = 0.5$ has peak overshoot near:',
        options: ['$2$ percent', '$5$ percent', '$16$ percent', '$50$ percent'],
        answer: 2,
        explanation: 'Step 1: Overshoot depends only on $\\zeta$. Step 2: The formula is $e^{-\\pi\\zeta/\\sqrt{1-\\zeta^2}}$. Step 3: At $\\zeta = 0.5$ the exponent gives about $0.16$. Step 4: Hence roughly $16$ percent.'
      },
      // PYQ-pattern: steady-state error from type and velocity constant
      {
        q: 'Type-$1$ loop with $K_v = 4$ tracking a unit ramp leaves error:',
        options: [`$0$`, `$0.25$`, `$1$`, 'Unbounded'],
        answer: 1,
        explanation: 'Step 1: Type $1$ zeroes step error. Step 2: Ramp error is $1/K_v$. Step 3: Here $1/4 = 0.25$. Step 4: Parabola inputs instead diverge.'
      },
      {
          q: 'Critically damped response ($\\zeta = 1$) is:',
        options: [
          'Ringing with $16$ percent overshoot',
          'Fastest non-overshooting return with a repeated real pole',
          'Slower than any overdamped pair',
          'Unstable with growing amplitude'
        ],
        answer: 1,
        explanation: 'Step 1: $\\zeta = 1$ sits on the ringing boundary. Step 2: Poles repeat on the real axis. Step 3: No oscillation survives. Step 4: Any slower creep belongs to $\\zeta > 1$.'
      },
      {
        q: '$2$ percent settling time for $\\zeta\\omega_n = 2$ is:',
        options: ['$0.5$ s', '$1$ s', '$2$ s', '$8$ s'],
        answer: 2,
        explanation: 'Step 1: The $2$ percent rule is $4/(\\zeta\\omega_n)$. Step 2: Substitute the product $2$. Step 3: The quotient is $4/2$. Step 4: Hence $2$ seconds.'
      }
    ]
  }
]

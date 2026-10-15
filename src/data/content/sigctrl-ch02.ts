import type { SectionContent } from '../library'

// ============================================================================
// Signals & Control — Chapter 2: LTI Systems: Convolution, Causality
// Master study content covering Sections 2.1 – 2.4.
// ============================================================================

export const sigctrlCh02Content: SectionContent[] = [
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: 'ece-e-sigsys-s19',
    depth: [
      {
        tier: 'masters',
        title: 'Convolution as the LTI fingerprint and eigenstructure',
        blocks: [
          {
            kind: 'para',
            body: 'A linear time-invariant system is fully described by its **impulse response** $h(t)$: the output to any input $x(t)$ is the convolution $$y(t) = \\int_{-\\infty}^{\\infty} x(\\tau)h(t-\\tau)d\\tau,$$ with sums for $h[n]$ and $x[n]$. The operations — flip, shift, multiply, integrate — implement superposition over a continuum of scaled and delayed impulses. Graduate systems theory elevates this from a computation to a **representation theorem**: every LTI operator is convolution with its impulse response, and every convolution operator is LTI. Interconnections then become algebra — cascade is convolution, parallel is addition — previewing transfer-function multiplication.'
          },
          {
            kind: 'derivation',
            heading: 'Sifting to convolution integral',
            body: 'Write arbitrary $x(t)$ via sifting as $$x(t) = \\int_{-\\infty}^{\\infty} x(\\tau)\\delta(t-\\tau)d\\tau.$$ Linearity lets the system act inside the integral, time invariance turns response to $\\delta(t-\\tau)$ into $h(t-\\tau)$, giving $$y(t) = \\int_{-\\infty}^{\\infty} x(\\tau)h(t-\\tau)d\\tau.$$ Discretizing replaces $\\delta(t)$ by $\\delta[n-k]$ and integrals by sums to obtain $$y[n] = \\sum_{k=-\\infty}^{\\infty} x[k]h[n-k].$$ Commutativity, associativity and distributivity follow by change of variables, which is why block-diagram reorderings preserve behavior. The derivation also shows why initial rest matters: nonzero initial state adds a homogeneous term beyond pure convolution.'
          },
          {
            kind: 'theorem',
            body: 'Complex exponentials are **eigenfunctions** of every LTI system: input $e^{j\\omega t}$ produces output $H(\\omega)e^{j\\omega t}$ where $$H(\\omega) = \\int_{-\\infty}^{\\infty} h(\\tau)e^{-j\\omega\\tau}d\\tau$$ is the **frequency response**. Consequently convolution in time becomes multiplication in frequency, $Y(\\omega) = X(\\omega)H(\\omega)$, and cascade of systems multiplies responses. No other family of inputs diagonalizes all LTI operators simultaneously, which is why Fourier analysis is the canonical tool for filtering and stability.'
          },
          {
            kind: 'application',
            body: 'Filter design applies the fingerprint directly: specify desired $H(\\omega)$ (lowpass, highpass, notch), approximate by a realizable $h(t)$ or $h[n]$ under causality and stability constraints, then implement as tapped delay lines or fast convolution via the transform with $O(N\\log N)$ cost. Deconvolution inverts the fingerprint for channel equalization and deblurring, regularized because division by small $|H(\\omega)|$ amplifies noise — the practical limit of inversion. Research frontiers learn $h$ from data under sparsity and positivity priors, turning convolution from an analytic postulate into an estimated model with uncertainty bands.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'The **impulse response** $h(t)$ is the complete fingerprint of a linear time-invariant system: feed it any input and the output is the **convolution** of input with $h$. The mechanics — flip, shift, multiply, add — are identical for sums and integrals. This section builds convolution as the single operation that turns system description into system output.',
    objectives: [
      'State why h(t) or h[n] fully characterizes an LTI system',
      'Execute flip-shift-multiply-add convolution on small sequences and pulses',
      'Apply length, delay and identity properties to check answers'
    ],
    concepts: [
      {
        term: 'Impulse response characterizes LTI systems',
        kind: 'theorem',
        statement: 'For an **LTI** system, the response to $\\delta(t)$ — the **impulse response** $h(t)$ — determines **every** output via $y(t) = x(t) * h(t)$. Linearity splits inputs into weighted impulses; time invariance aligns the shifted responses — `one fingerprint, all outputs`.',
        detail: 'Non-LTI systems need far more: time-varying or nonlinear maps have no single-kernel description.'
      },
      {
        term: 'Convolution sum and integral',
        kind: 'definition',
        statement: 'DT convolution is $y[n] = \\sum_{k=-\\infty}^{\\infty} x[k]\\,h[n-k]$; CT convolution is $y(t) = \\int_{-\\infty}^{\\infty} x(\\tau)\\,h(t-\\tau)\\,d\\tau$. Both read **flip-shift-multiply-add**: reverse $h$, slide it past $x$, weight pointwise, accumulate — `flip, slide, weigh, total`.',
        detail: 'Commutativity ($x * h = h * x$) lets you flip whichever side is simpler — always flip the shorter or the pulse-shaped one.'
      },
      {
        term: 'Finite-length mechanics',
        kind: 'method',
        statement: 'Convolving length-$L$ $x$ with length-$M$ $h$ yields length **$L + M - 1$**, starting at the **sum of start indices**. So $x = [1, 2, 3]$ with $h = [1, 1]$ gives $y = [1, 3, 5, 3]$ (length $3 + 2 - 1 = 4$): full overlap grows then shrinks — `rise, plateau, fall`.',
        detail: 'Length mismatch with this rule is the fastest convolution error check available.'
      },
      {
        term: 'Identity and delay properties',
        kind: 'law',
        statement: 'The impulse is the **identity**: $x * \\delta = x$, and $x(t) * \\delta(t - t_0) = x(t - t_0)$ **delays** by $t_0$. Cascades multiply in convolution: `$h_total = h1*h2`, so a delay $\\delta(t - 2)$ after any $h$ just postpones its output by $2$.',
        detail: 'Steps convolve to ramps ($u * u = r$): integrating twice is convolving with the ramp kernel.'
      },
      {
        term: 'Graphical pulse convolution',
        kind: 'insight',
        statement: 'Convolving two rectangular pulses of widths $T_1, T_2$ yields a **trapezoid** (triangle when equal) of width **$T_1 + T_2$**, peaking at full overlap. Sketch overlap area versus shift — `area-versus-shift is the output` — instead of integrating blindly.',
        detail: 'Breakpoints land at sums of edge positions; between breakpoints the overlap area varies linearly (for flat pulses).'
      }
    ],
    derivations: [
      {
        title: 'Output Length of Linear Convolution',
        statement: 'A length $L$ sequence convolved with a length $M$ response has length $L + M - 1$: $$|y| = L + M - 1$$',
        prerequisites: [
          'Finite support $x[k] \\neq 0$ only for $0 \\leq k \\leq L-1$',
          'Finite support $h[k] \\neq 0$ only for $0 \\leq k \\leq M-1$',
          'Convolution sum $y[n] = \\sum_{k} x[k] h[n-k]$',
        ],
        steps: [
          {
            label: 'Step 1: Bound the summation index',
            formula: `$$y[n] = \\sum_{k} x[k] h[n-k]$$`,
            explanation: 'Term $k$ survives only when $x[k]$ is nonzero and $h[n-k]$ is nonzero simultaneously. The first condition forces $k$ between $0$ and $L - 1$ while the second forces $n - k$ between $0$ and $M - 1$. Overlap of the two ranges decides whether output index $n$ can be nonzero.',
          },
          {
            label: 'Step 2: Locate the first nonzero output',
            formula: `$$y[0] = x[0] h[0]$$`,
            explanation: 'At $n = 0$ the only shared index is $k = 0$, pairing the two leading samples. Generically both are nonzero so the output starts exactly at the origin. Negative indices admit no overlap, which is why nothing precedes this sample.',
          },
          {
            label: 'Step 3: Locate the last nonzero output',
            formula: `$$y[L+M-2] = x[L-1] h[M-1]$$`,
            explanation: 'At $n = L + M - 2$ the only shared index is $k = L - 1$, pairing the two trailing samples. Larger $n$ pushes the required $k$ past the end of $x$ or below the start of $h$. The output therefore ends exactly at index $L + M - 2$.',
          },
          {
            label: 'Step 4: Count the samples between the endpoints',
            formula: `$$N_{y} = (L + M - 2) - 0 + 1 = L + M - 1$$`,
            explanation: 'Contiguous indices from $0$ through $L + M - 2$ inclusive number $L + M - 1$ in total. Interior cancellations can zero isolated values but never shrink the support interval. Zero padding to this length is therefore the safe size for linear convolution by any algorithm.',
          },
        ],
        result: 'Linear convolution of lengths $L$ and $M$ spans indices $0$ to $L + M - 2$, hence $|y| = L + M - 1$ samples; the same count governs polynomial multiplication degrees and safe transform sizes.',
      },
    ],
    examples: [
      {
        title: 'Convolve two short sequences',
        problem: 'Compute $y = x * h$ for $x = [1, 2, 3]$, $h = [1, 1]$.',
        steps: [
          { label: 'Step 1', text: 'Flip h (symmetric here) and slide. ```text\nn=0: [1]*[1]       -> 1\nn=1: [1,2]*[1,1]    -> 3\nn=2: [2,3]*[1,1]    -> 5\nn=3: [3]*[1]        -> 3\n```' },
          { label: 'Step 2', text: 'Collect: $y = [1, 3, 5, 3]$.' },
          { label: 'Step 3', text: 'Check length: $3 + 2 - 1 = 4$ values — matches. Identity test: convolving with $[1]$ alone would return $x$.' }
        ],
        result: '$y = [1, 3, 5, 3]$ of expected length 4.'
      },
      {
        title: 'Pulse with itself gives a triangle',
        problem: 'Convolve $x(t) = u(t) - u(t - 2)$ with itself and describe $y(t)$.',
        steps: [
          { label: 'Step 1', text: 'Set the span. ```text\nwidth 2 + width 2 -> support [0, 4], peak at shift 2\n```' },
          { label: 'Step 2', text: 'Sweep the overlap. Rising area on $(0, 2)$, full overlap value $2$ at $t = 2$, falling area on $(2, 4)$ — a triangle of height $2$.' },
          { label: 'Step 3', text: 'Write piecewise: $y(t) = t$ on $[0,2]$, $y(t) = 4 - t$ on $[2,4]$, zero elsewhere. Equal widths give triangles; unequal widths give trapezoids.' }
        ],
        result: 'Triangle on $[0, 4]$ peaking at $2$ — area-versus-shift made visible.'
      }
    ],
    keyTakeaways: [
      'h (impulse response) plus convolution generates every LTI output: y = x ∗ h.',
      'Mechanics are flip-shift-multiply-add; flip the simpler side via commutativity.',
      'Length adds as L + M − 1 from summed start indices — the instant self-check.',
      'Impulses delay, steps integrate, equal pulses triangle; sketch overlap area versus shift.'
    ],
    quiz: [
      // PYQ-pattern: convolution output length L+M-1
      {
        q: 'x has length 4 starting at n = 1; h has length 3 starting at n = 2. Length and start of y = x ∗ h?',
        options: [
          'Length 6 starting at 3',
          'Length 7 starting at 2',
          'Length 6 starting at 1',
          'Length 12 starting at 3'
        ],
        answer: 0,
        explanation: 'Step 1: Lengths add minus one: 4 + 3 − 1 = 6. Step 2: Start indices add: 1 + 2 = 3. Step 3: So y runs 6 points from n = 3.'
      },
      {
        q: 'x(t) ∗ δ(t − 5) equals?',
        options: ['`5x(t)`', 'x(5t)', 'x(t − 5)', '0'],
        answer: 2,
        explanation: 'Step 1: The impulse is the convolution identity. Step 2: Shifting the identity shifts the output. Step 3: So the result is the input delayed by 5.'
      },
      {
        q: 'Convolving two rectangular pulses of widths 2 and 3 yields?',
        options: [
          'A rectangle of width 5',
          'A trapezoid of total width 5',
          'An impulse of strength 6',
          'A sine wave'
        ],
        answer: 1,
        explanation: 'Step 1: Supports add: total width 5. Step 2: Partial overlaps ramp up and down. Step 3: Full overlap plateaus — the trapezoid profile.'
      },
      {
        q: 'Why may you flip h instead of x in y = x ∗ h?',
        options: [
          'Because impulses are symmetric only',
          'Because flips cancel in pairs',
          'You may not; x must always flip',
          'Because convolution is commutative'
        ],
        answer: 3,
        explanation: 'Step 1: Commutativity states x ∗ h = h ∗ x. Step 2: Either operand may take the flip-shift role. Step 3: Choose the simpler side to flip.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.2
  {
    sectionId: 'ece-e-sigsys-s20',
    readingTime: 8,
    intro: 'Memory, invertibility and causality can be read off either the input–output rule or the impulse response. **Memoryless** systems react instantaneously, **causal** systems never anticipate, and **invertible** systems preserve information distinctly. These three tests share one habit: probe with shifted impulses and delayed inputs.',
    objectives: [
      'Test memoryless, causal and invertible properties from y(t) rules',
      'Translate the same tests to conditions on h(t)',
      'Combine cascade properties without recomputing from scratch'
    ],
    concepts: [
      {
        term: 'Memoryless systems',
        kind: 'definition',
        statement: 'A system is **memoryless** if $y(t)$ depends only on $x(t)$ at the **same instant**, for example $y(t) = 3x(t)^2$. Counter-cases $y(t) = x(t - 1)$ (delay) and $y[n] = x[n] + x[n-1]$ (accumulation) have **memory** — `same-instant-only means memoryless`.',
        detail: 'Memoryless LTI systems are just scalers: $h(t) = K\\delta(t)$ — anything spread in time carries memory.'
      },
      {
        term: 'Causality from rule and from h',
        kind: 'definition',
        statement: 'A system is **causal** when the output never anticipates future inputs: $y(t) = x(t + 1)$ is **noncausal**, $y(t) = x(t - 1)$ is causal. In impulse terms, causality is $h(t) = 0$ for **$t < 0$** (DT: $h[n] = 0$ for $n < 0$) — `no response before the kick`.',
        detail: 'Real-time hardware must be causal; offline file processing may use noncausal rules freely.'
      },
      {
        term: 'Invertibility',
        kind: 'definition',
        statement: 'A system is **invertible** when distinct inputs always give distinct outputs, so an inverse recovers $x$ from $y$. Squarers ($y = x^2$) fail (sign lost); scalers and delays pass. LTI invertibility needs `$h*h_inv = delta` — some `$h_inv` collapses the cascade to identity.',
        detail: 'Test by collision: one output value reachable from two inputs disproves invertibility immediately.'
      },
      {
        term: 'Causality plus memory via h shape',
        kind: 'method',
        statement: 'Read $h$ directly: impulse-at-origin-only ($K\\delta$) means **memoryless**; support on $t \\ge 0$ means **causal with memory** (for spread $h$); any nonzero $t < 0$ part means **noncausal**. Delay $h(t) = \\delta(t - 2)$ is causal with memory of exactly $2$ units — `support location tells the story`.',
        detail: 'Anticausal ($t \\le 0$ support) and two-sided $h$ both fail causality; finite-support $h$ (FIR) always has finite memory.'
      },
      {
        term: 'Cascade combinations',
        kind: 'insight',
        statement: 'Cascades **preserve** causality and memorylessness (causal + causal stays causal) but **not** invertibility blindly: individually invertible stages in cascade stay invertible with reversed-order inverses, while one lossy stage poisons the chain. Check the **weakest stage** — `a chain is only as invertible as its worst link`.',
        detail: 'Parallel combinations instead sum impulse responses: $h = h_1 + h_2$ — properties then need fresh checks.'
      }
    ],
    examples: [
      {
        title: 'Test three input-output rules',
        problem: 'Classify (a) $y(t) = x(t-2)$, (b) $y(t) = x(t+1)$, (c) $y(t) = x(t)^2$ for memory, causality, invertibility.',
        steps: [
          { label: 'Step 1', text: 'Memory. ```text\n(a) uses past     -> memory\n(b) uses future   -> memory\n(c) same instant  -> memoryless\n```' },
          { label: 'Step 2', text: 'Causality. (a) causal (past only); (b) noncausal (future needed); (c) causal (present only).' },
          { label: 'Step 3', text: 'Invertibility. (a) invertible (advance by 2 undoes); (b) invertible (delay undoes); (c) not invertible ($x$ and $-x$ collide).' }
        ],
        result: '(a) memory/causal/invertible; (b) memory/noncausal/invertible; (c) memoryless/causal/lossy.'
      },
      {
        title: 'Read properties off h',
        problem: 'LTI system has $h(t) = e^{-t}u(t) + 2\\delta(t + 1)$. Judge causality and memory.',
        steps: [
          { label: 'Step 1', text: 'Split the terms. ```text\ne^{-t}u(t)      : causal, with memory\n2δ(t+1)         : anticipates by 1 -> noncausal\n```' },
          { label: 'Step 2', text: 'Combine. One noncausal term poisons causality: the sum responds at $t = -1$ before any kick at zero.' },
          { label: 'Step 3', text: 'Memory verdict: spread terms exist, so the system has memory regardless of causality.' }
        ],
        result: 'Noncausal with memory — the $\\delta(t+1)$ term decides causality alone.'
      }
    ],
    keyTakeaways: [
      'Memoryless needs same-instant dependence only; LTI memoryless means a scaled impulse.',
      'Causal means no future dependence; equivalently h vanishes before zero.',
      'Invertible means distinct inputs stay distinct; exhibit one collision to disprove.',
      'Cascades preserve causality; one lossy or anticipating stage decides the chain.'
    ],
    quiz: [
      {
        q: 'y(t) = x(2t) has memory and is?',
        options: [
          'Causal, since scaling preserves order',
          'Noncausal when t < 0 maps to future samples (e.g. t = −1 needs x(−2), but t = 1 needs x(2) — future for negative-side evaluation)',
          'Memoryless and causal',
          'Always causal for compressions'
        ],
        answer: 1,
        explanation: 'Step 1: Output at t uses input at 2t. Step 2: For t beyond the anchor the source instant can run ahead. Step 3: Dependence on ahead instants breaks causality in general.'
      },
      {
        q: 'LTI with h[n] = 0 for all n < 0 is?',
        options: [
          'Causal (possibly with memory if spread)',
          'Noncausal',
          'Memoryless regardless of shape',
          'Unstable regardless of values'
        ],
        answer: 0,
        explanation: 'Step 1: No response precedes the kick. Step 2: That is exactly the causality condition. Step 3: Memory then depends on whether h spreads past zero.'
      },
      // PYQ-pattern: invertibility collision test
      {
        q: 'Which system is NOT invertible?',
        options: [
          'y(t) = 5x(t − 3)',
          'y(t) = x(t) + 7',
          'y(t) = x(t)², since x and −x collide',
          'y[n] = −x[n]'
        ],
        answer: 2,
        explanation: 'Step 1: Seek two inputs sharing one output. Step 2: Squaring maps x and −x together. Step 3: That collision destroys unique recovery.'
      },
      {
        q: 'Causal LTI cascaded with noncausal LTI gives?',
        options: [
          'A causal system always',
          'A memoryless system',
          'An invertible system',
          'A noncausal system: convolution spreads support across the anticipating part'
        ],
        answer: 3,
        explanation: 'Step 1: Cascade convolves the impulse responses. Step 2: The noncausal factor contributes pre-zero support. Step 3: Convolution preserves that anticipation in the total.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.3
  {
    sectionId: 'ece-e-sigsys-s21',
    readingTime: 8,
    intro: '**BIBO stability** demands bounded inputs produce bounded outputs — the practical guarantee that a system never blows up in service. For LTI systems the test collapses to one integral: the impulse response must be **absolutely summable or integrable**. Poles in the left half-plane (or inside the unit circle) preview the same verdict from Chapter 6 territory.',
    objectives: [
      'State the BIBO definition with bounded-input bounded-output quantifiers',
      'Apply absolute summability and integrability tests to h',
      'Use pole locations as a fast stability preview'
    ],
    concepts: [
      {
        term: 'BIBO definition',
        kind: 'definition',
        statement: 'A system is **BIBO stable** if **every** bounded input ($|x| \\le M_x < \\infty$) yields a **bounded** output ($|y| \\le M_y < \\infty$). One exploding input–output pair — for example the resonance buildup of an undamped oscillator — revokes stability: `one unbounded witness fails the system`.',
        detail: 'BIBO is input–output behaviour only; internal states may still ring while outputs stay capped.'
      },
      {
        term: 'LTI stability test',
        kind: 'theorem',
        statement: 'An LTI system is BIBO stable **iff** its impulse response is **absolutely integrable** (CT: $\\int_{-\\infty}^{\\infty} |h(t)|\\,dt < \\infty$) or **absolutely summable** (DT: $\\sum_{n} |h[n]| < \\infty$). Proof sketch: $|y| \\le M_x$ times that integral, and the bound is tight — `finite absolute area means capped outputs`.',
        detail: 'Absolute (not plain) convergence is required: alternating areas can cancel in the plain integral while worst-case inputs align all signs.'
      },
      {
        term: 'Exponential test cases',
        kind: 'method',
        statement: 'Test $h(t) = e^{-at}u(t)$: absolute area $\\int_0^{\\infty} e^{-at}\\,dt = \\frac{1}{a}$ is finite iff **$a > 0$** — decay stabilizes, growth ($a < 0$) explodes. DT twin $h[n] = a^n u[n]$: summable iff **$|a| < 1$** with sum $\\frac{1}{1 - |a|}$ — `decay inside, growth outside`.',
        detail: 'Pure steps ($a = 0$) fail: $u(t)$ accumulates without bound, the integrator counterexample.'
      },
      {
        term: 'Pole-location preview',
        kind: 'insight',
        statement: 'Exponentials $e^{-at}$ carry **poles** at $s = -a$: **left half-plane** ($a > 0$) means stable, right half-plane means unstable, imaginary axis means marginal. DT poles $z = a$ must sit **inside the unit circle** ($|a| < 1$). Pole plots thus preview stability **before** any integration — `left/inside lives, right/outside blows up`.',
        detail: 'Repeated imaginary-axis poles still blow up (resonance $t\\sin t$ growth) — multiplicity matters on the boundary.'
      },
      {
        term: 'FIR is always stable',
        kind: 'law',
        statement: '**Finite-impulse-response** systems (finite-support $h$ with finite values) are **always BIBO stable**: finite taps times bounded input gives bounded output, since $\\sum_{finite} |h| < \\infty$ trivially. Only **IIR** systems with infinite tails can go unstable — `finite taps cannot diverge`.',
        detail: 'Stability effort therefore concentrates on recursive/infinite-horizon designs; FIR design is stability-free.'
      }
    ],
    examples: [
      {
        title: 'Test three impulse responses',
        problem: 'Judge BIBO stability for (a) $h(t) = e^{-3t}u(t)$, (b) $h(t) = u(t)$, (c) $h[n] = (0.5)^n u[n]$.',
        steps: [
          { label: 'Step 1', text: 'Integrate absolute areas. ```text\n(a) ∫_0^∞ e^{-3t} dt = 1/3  -> finite\n(b) ∫_0^T 1 dt = T -> ∞\n(c) Σ 0.5^n = 1/(1-0.5) = 2 -> finite\n```' },
          { label: 'Step 2', text: 'Verdict each. (a) stable (decay); (b) unstable (integrator accumulates); (c) stable (geometric ratio below 1).' },
          { label: 'Step 3', text: 'Cross-check poles. (a) pole at $s = -3$ (left); (b) pole at $s = 0$ (boundary, fails); (c) pole at $z = 0.5$ (inside circle).' }
        ],
        result: '(a) stable, (b) unstable, (c) stable — area tests and poles agree.'
      },
      {
        title: 'Exhibit integrator blowup',
        problem: 'Show $h(t) = u(t)$ (ideal integrator) is BIBO unstable with an explicit witness.',
        steps: [
          { label: 'Step 1', text: 'Pick a bounded input. ```text\nx(t) = u(t) (bounded by 1)\n```' },
          { label: 'Step 2', text: 'Convolve: $y(t) = \\int_0^t 1\\,d\\tau = t$ for $t > 0$ — the ramp grows without bound.' },
          { label: 'Step 3', text: 'Conclude. Bounded input, unbounded output: one witness revokes BIBO stability.' }
        ],
        result: 'Unit-step input drives the integrator to the unbounded ramp — unstable.'
      }
    ],
    keyTakeaways: [
      'BIBO: every bounded input must yield bounded output; one witness of blowup fails the system.',
      'LTI test is absolute integrability/summability of h — decay passes, growth and pure steps fail.',
      'Poles preview it: CT left half-plane, DT inside unit circle.',
      'FIR (finite taps) is always stable; only infinite-tail systems need checking.'
    ],
    quiz: [
      // PYQ-pattern: absolute-summability verdict on exponential h
      {
        q: 'h(t) = e^{2t}u(t) is BIBO stable?',
        options: [
          'Yes, all exponentials are stable',
          'Yes, since it is causal',
          'No: absolute area ∫e^{2t} diverges, so bounded inputs can blow up',
          'Marginally stable with bounded outputs'
        ],
        answer: 2,
        explanation: 'Step 1: Absolute area integrates e^{2t} to infinity. Step 2: The LTI test needs finite absolute area. Step 3: Divergence means some bounded input explodes.'
      },
      {
        q: 'h[n] = (0.5)^n u[n] is stable because?',
        options: [
          'It is causal only',
          'Its absolute sum 1/(1 − 0.5) = 2 is finite',
          'It has finite nonzero power',
          'It is invertible'
        ],
        answer: 1,
        explanation: 'Step 1: Absolute sum is a geometric series. Step 2: Ratio 0.5 < 1 converges to 2. Step 3: Finite absolute sum is exactly the stability criterion.'
      },
      {
        q: 'An FIR filter with 64 finite taps is?',
        options: [
          'Always BIBO stable: finite taps give finite absolute sum',
          'Stable only if taps are positive',
          'Unstable if any tap exceeds 1',
          'Marginally stable'
        ],
        answer: 0,
        explanation: 'Step 1: Finite taps mean a finite absolute sum. Step 2: Bounded input times finite taps stays bounded. Step 3: No divergence mechanism exists.'
      },
      {
        q: 'CT pole at s = +2 with causal h implies?',
        options: [
          'Stability via left half-plane',
          'Marginal stability',
          'Causality alone guarantees stability',
          'Instability: right half-plane pole grows as e^{+2t}'
        ],
        answer: 3,
        explanation: 'Step 1: Pole +2 means growth e^{+2t}. Step 2: Right half-plane is the unstable side. Step 3: Causality does not imply stability — both must be checked.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.4
  {
    sectionId: 'ece-e-sigsys-s22',
    readingTime: 9,
    intro: '**Poles** (denominator roots) and **zeros** (numerator roots) of a transfer function plot the system soul: distance from each pole to a frequency point sets gain, angles set phase. Reading magnitude peaks near poles and dips near zeros turns algebra into Bode intuition. This section converts pole–zero plots into frequency-response sketches.',
    objectives: [
      'Locate poles and zeros of rational H(s) and plot them with conventions',
      'Estimate magnitude from pole/zero distances and phase from angles',
      'Predict resonance, roll-off and DC gain from plot geometry'
    ],
    concepts: [
      {
        term: 'Poles, zeros, plot marks',
        kind: 'notation',
        statement: 'For rational $H(s) = K\\frac{(s - z_1)(s - z_2)\\cdots}{(s - p_1)(s - p_2)\\cdots}$, the **zeros** $z_i$ (marked `o`) null the response and **poles** $p_i$ (marked `x`) peak it. **DC gain** is $H(0)$; high-frequency roll-off is $20 \\times (\\text{zeros} - \\text{poles})$ dB per decade — `each excess pole costs 20 dB/decade`.',
        detail: 'Cancel common factors first: a coincident pole–zero pair hides rather than shapes the response.'
      },
      {
        term: 'Magnitude from distances',
        kind: 'method',
        statement: 'At test frequency $s = j\\omega$, magnitude is $|K|$ times **zero-distances over pole-distances**: $|H(j\\omega)| = |K|\\frac{\\prod |j\\omega - z_i|}{\\prod |j\\omega - p_i|}$. Near a pole the denominator shrinks and gain **peaks**; near a zero the numerator shrinks and gain **dips** — `close pole lifts, close zero sinks`.',
        detail: 'Damping sets peak sharpness: poles hugging the imaginary axis ring tall and narrow.'
      },
      {
        term: 'Phase from angles',
        kind: 'method',
        statement: 'Phase is **zero-angles minus pole-angles** plus $K$ sign: $\\angle H(j\\omega) = \\sum \\angle(j\\omega - z_i) - \\sum \\angle(j\\omega - p_i)$. Each left half-plane pole contributes $0 \\to -90^\\circ$ across its corner; right half-plane poles add **positive** phase (non-minimum-phase signature) — `angles add, poles subtract`.',
        detail: ' Far below all corners phase sits at the DC value; far above, each excess pole leaves another $-90^\\circ$.'
      },
      {
        term: 'Resonance and bandwidth reading',
        kind: 'insight',
        statement: '**Resonance** needs lightly damped complex pole pairs near the $j\\omega$ axis: tall narrow magnitude peak with rapid $180^\\circ$ phase transit. **Bandwidth** spans frequencies within $3\\,dB$ of the passband — wider pole spread means wider, flatter response. `Near-axis pairs ring; spread poles flatten`.',
        detail: 'Quality factor $Q$ prices sharpness: peak height grows with $Q$ while bandwidth shrinks as $\\frac{\\omega_0}{Q}$.'
      },
      {
        term: 'Stability read from poles',
        kind: 'law',
        statement: 'Causal stability needs **all poles strictly left** of the imaginary axis (DT: **inside** the unit circle). Right-plane or outside-circle poles mean exponential blowup; boundary poles mean marginal ringing — `stable plots keep ink off the wrong side`. Zeros may sit anywhere without affecting stability.',
        detail: 'Zeros shape gain and phase only; no zero placement can stabilize a right-plane pole.'
      }
    ],
    examples: [
      {
        title: 'Read a first-order low-pass',
        problem: '$H(s) = \\frac{5}{s + 5}$: find DC gain, corner, high-frequency slope and stability.',
        steps: [
          { label: 'Step 1', text: 'Mark the plot. ```text\npole x at s = -5 ; no finite zeros ; K = 5\n```' },
          { label: 'Step 2', text: 'Compute DC gain $H(0) = \\frac{5}{5} = 1$; corner at $\\omega = 5$ where distance $\\sqrt{2}$ trims gain by $3\\,dB$.' },
          { label: 'Step 3', text: 'Roll off at $-20\\,dB$/decade (one excess pole); pole left of axis means stable.' }
        ],
        result: 'DC gain 1, corner 5 rad/s, −20 dB/decade, stable.'
      },
      {
        title: 'Peak near a lightly damped pair',
        problem: '$H(s)$ has poles at $-0.2 \\pm j10$ and no nearby zeros. Describe the magnitude near $\\omega = 10$.',
        steps: [
          { label: 'Step 1', text: 'Measure distances. ```text\n|j10 - (-0.2+j10)| = 0.2 (tiny) -> tall peak\n```' },
          { label: 'Step 2', text: 'Estimate: denominator product near $0.2 \\times 20$ is small, so gain spikes hard at resonance.' },
          { label: 'Step 3', text: 'Phase transits nearly $180^\\circ$ across the peak while far-away response stays flat — the resonance signature.' }
        ],
        result: 'Sharp tall peak at $\\omega \\approx 10$ with fast phase transit.'
      }
    ],
    keyTakeaways: [
      'Zeros (o) null, poles (x) peak; DC gain is H(0); excess poles set dB/decade roll-off.',
      'Magnitude uses distances (zero over pole); phase uses angles (zero minus pole).',
      'Near-axis complex pairs resonate tall and narrow; spread poles flatten and widen.',
      'Causal stability needs all poles left (CT) or inside the circle (DT); zeros never decide it.'
    ],
    quiz: [
      {
        q: 'H(s) = 5/(s + 5). DC gain and high-frequency slope?',
        options: [
          '5 and −40 dB/decade',
          '1 and −20 dB/decade',
          '0 and 0 dB/decade',
          '5 and +20 dB/decade'
        ],
        answer: 1,
        explanation: 'Step 1: $H(0) = \\frac{5}{5} = 1$. Step 2: One more pole than zeros gives −20 dB/decade. Step 3: Corner at ω = 5 separates flat from falling regions.'
      },
      // PYQ-pattern: resonance from near-axis pole pairs
      {
        q: 'Poles at −0.2 ± j10 with no nearby zeros produce?',
        options: [
          'A deep notch at ω = 10',
          'Flat unity response everywhere',
          'A sharp magnitude peak near ω = 10 with fast phase transit',
          'Zero output at DC'
        ],
        answer: 2,
        explanation: 'Step 1: The j10 test point nearly touches the pole. Step 2: Tiny pole distance inflates magnitude. Step 3: Light damping makes the peak tall, narrow, with rapid phase change.'
      },
      {
        q: 'A zero at s = −3 contributes what as ω passes 3?',
        options: [
          '+90°-toward-rising magnitude lift (zero adds lead) with local dip exactly at the zero frequency only for axis zeros',
          '−90° phase lag and a magnitude dip nearby',
          'No effect ever',
          'Instability'
        ],
        answer: 0,
        explanation: 'Step 1: Zero angles add to phase (lead). Step 2: Zero distances grow numerator with frequency. Step 3: Gain rises past the corner while phase leads.'
      },
      {
        q: 'Causal H(s) has a pole at s = +1. The system is?',
        options: [
          'Stable, since one pole cannot hurt',
          'Stable if a zero cancels it exactly',
          'Marginally stable',
          'Unstable: right half-plane pole grows exponentially'
        ],
        answer: 3,
        explanation: 'Step 1: The pole sits on the unstable side. Step 2: Its mode grows as e^{+t}. Step 3: Exact cancellation is fragile and does not restore robust stability.'
      }
    ]
  }
]

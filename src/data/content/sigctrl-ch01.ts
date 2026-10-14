import type { SectionContent } from '../library'

// ============================================================================
// Signals & Control — Chapter 1: Continuous & Discrete Signals
// Master study content covering Sections 1.1 – 1.4.
// ============================================================================

export const sigctrlCh01Content: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: 'sigctrl-ch1-s1',
    readingTime: 8,
    intro: 'A **continuous-time** signal is defined at every instant $t$, while a **discrete-time** signal lives only at integer indices $n$. Beyond this axis, signals split into even versus odd, periodic versus aperiodic, and bounded versus unbounded. These four classifications decide which tools — symmetry tricks, series expansions, stability tests — apply later.',
    objectives: [
      'Separate continuous-time, discrete-time, analog, sampled and digital signals',
      'Test even/odd symmetry and periodicity from definitions',
      'Judge boundedness and sketch the standard test signals'
    ],
    concepts: [
      {
        term: 'CT versus DT signals',
        kind: 'definition',
        statement: 'A **continuous-time (CT)** signal $x(t)$ is defined for every real $t$, for example $x(t) = \\cos(2\\pi t)$. A **discrete-time (DT)** signal $x[n]$ is defined only at integer $n$, for example $x[n] = (0.5)^n u[n]$. Brackets `[.]` always mark discrete time; parentheses `(.)` mark continuous time.',
        detail: 'Sampling a CT signal at interval $T_s$ yields the DT sequence $x[n] = x(nT_s)$ — the bridge to Chapter 3 sampling theory.'
      },
      {
        term: 'Analog, sampled, digital',
        kind: 'definition',
        statement: '**Analog** signals are CT with continuous amplitude; **sampled** (discrete-time) signals are DT with continuous amplitude; **digital** signals are DT with **quantized** amplitude. A compact disc track is digital: discrete in time **and** in level, stored as `16-bit` words per sample.',
        detail: 'Quantization adds irreversible rounding noise; sampling without quantization is still reversible under Nyquist conditions.'
      },
      {
        term: 'Even and odd symmetry',
        kind: 'definition',
        statement: 'A signal is **even** if $x(-t) = x(t)$ (mirror symmetric, like $\\cos t$) and **odd** if $x(-t) = -x(t)$ (origin symmetric, like `$sin t`). Every signal splits uniquely into even plus odd parts: $x_e(t) = \\frac{x(t) + x(-t)}{2}$ and $x_o(t) = \\frac{x(t) - x(-t)}{2}$, with $x = x_e + x_o$.',
        detail: 'Symmetry kills integrals: odd integrands over symmetric limits integrate to zero — the shortcut behind Fourier coefficient patterns.'
      },
      {
        term: 'Periodic signals',
        kind: 'definition',
        statement: 'A CT signal is **periodic** with period $T_0$ if $x(t + T_0) = x(t)$ for all $t$ (smallest such $T_0$ is **fundamental**); DT periodicity needs `$x[n + N0] = x[n]$`. Sums of sinusoids are periodic only when all frequency ratios are **rational** — $\\cos t + \\cos(\\pi t)$ is aperiodic since $\\frac{1}{\\pi}$ is irrational.',
        detail: 'Fundamental frequency follows as $f_0 = \\frac{1}{T_0}$ (CT) or $\\frac{1}{N_0}$ (DT cycles per sample); harmonics are integer multiples.'
      },
      {
        term: 'Bounded signals',
        kind: 'law',
        statement: 'A signal is **bounded** if some finite $M$ satisfies $|x(t)| \\le M$ for all $t$ (or $|x[n]| \\le M$ for all $n$). The growing exponential $e^{2t}u(t)$ is **unbounded**; `$sin t` waves and every finite-duration pulse are bounded. Boundedness of inputs is the premise of the BIBO stability test in Chapter 2.',
        detail: 'Bounded plus finite-duration implies finite energy; unbounded growth always breaks both energy and power finiteness.'
      }
    ],
    examples: [
      {
        title: 'Even–odd split of an exponential',
        problem: 'Decompose $x(t) = e^{-t}$ (all $t$) into even and odd parts and verify the sum.',
        steps: [
          { label: 'Step 1', text: 'Apply the formulas. ```text\nx_e(t) = (e^{-t} + e^{t})/2  = cosh(t)\nx_o(t) = (e^{-t} - e^{t})/2  = -sinh(t)\n```' },
          { label: 'Step 2', text: 'Check symmetry. $x_e(-t) = x_e(t)$ holds since $\\cosh$ is even; $x_o(-t) = -x_o(t)$ holds since $\\sinh$ is odd.' },
          { label: 'Step 3', text: 'Verify $x_e + x_o = \\cosh t - \\sinh t = e^{-t} = x(t)$ for all $t$ — the split reconstructs the original exactly.' }
        ],
        result: 'Even part $\\cosh t$, odd part $-\\sinh t$; their sum is the original signal.'
      },
      {
        title: 'Periodicity of a sinusoid sum',
        problem: 'Is $x(t) = \\cos(2t) + \\sin(3t)$ periodic? If so, with what fundamental period?',
        steps: [
          { label: 'Step 1', text: 'Find individual periods. ```text\ncos(2t) : T1 = 2π/2 = π\nsin(3t) : T2 = 2π/3\nratio T1/T2 = 3/2 (rational) -> periodic\n```' },
          { label: 'Step 2', text: 'Take the least common multiple: $T_0 = 3 \\times \\frac{2\\pi}{3} = 2\\pi$ covers 2 cycles of the first and 3 of the second.' },
          { label: 'Step 3', text: 'Verify: shifting by $2\\pi$ advances the first term by $4\\pi$ (2 periods) and the second by $6\\pi$ (3 periods) — both repeat.' }
        ],
        result: 'Periodic with fundamental period $T_0 = 2\\pi$; irrational ratios would break periodicity.'
      }
    ],
    keyTakeaways: [
      'Parentheses mark CT signals x(t); brackets mark DT sequences x[n]; digital adds amplitude quantization.',
      'Every signal is uniquely even-plus-odd via the averaging formulas with x(−t).',
      'Sinusoid sums are periodic exactly when all frequency ratios are rational; T0 is the LCM of periods.',
      'Boundedness (|x| ≤ M) is the input-side premise of later stability analysis.'
    ],
    quiz: [
      {
        q: 'Which notation correctly names a discrete-time signal?',
        options: ['`x(t)` with real t', '`x[n]` with integer n', '`x{t}` with real t', '`x<n>` with integer n'],
        answer: 1,
        explanation: 'Step 1: Discrete time means defined at integers. Step 2: Convention writes brackets for integer indices. Step 3: Parentheses always denote continuous time.'
      },
      // PYQ-pattern: even-odd decomposition formulas
      {
        q: 'The even part of x(t) is?',
        options: [
          `$x(t) - x(-t)$`,
          `$\\frac{x(t) - x(-t)}{2}$`,
          `$x(2t)$`,
          `$\\frac{x(t) + x(-t)}{2}$`
        ],
        answer: 3,
        explanation: 'Step 1: Even parts must satisfy xe(−t) = xe(t). Step 2: Averaging x(t) with x(−t) builds that symmetry. Step 3: Halving keeps the sum xe + xo equal to x.'
      },
      {
        q: '$x(t) = \\cos(t) + \\cos(\\pi t)$ is?',
        options: [
          'Periodic with period $2\\pi$',
          'Periodic with period 2',
          'Aperiodic, since the frequency ratio is irrational',
          'A DT signal'
        ],
        answer: 2,
        explanation: 'Step 1: Individual periods are $2\\pi$ and 2. Step 2: Their ratio $\\pi$ is irrational. Step 3: No common multiple exists, so the sum never repeats.'
      },
      {
        q: 'Which signal is unbounded?',
        options: ['$e^{2t}u(t)$ growing without limit', '$\\sin(t)$ for all t', 'A finite rectangular pulse', `$u(t) - u(t - 5)$`],
        answer: 0,
        explanation: 'Step 1: Boundedness needs one finite ceiling M. Step 2: Sinusoids and finite pulses stay capped. Step 3: The rising exponential exceeds every M eventually.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.2
  {
    sectionId: 'sigctrl-ch1-s2',
    readingTime: 9,
    intro: 'Shifting slides a signal in time, scaling squeezes or stretches it, and reversal flips it — but combined operations like $y(t) = x(2t - 3)$ must be applied in the right order. The golden rule is **shift first on the dummy axis, then scale**, or equivalently divide the shift by the scale factor. This section makes transformation puzzles mechanical and error-proof.',
    objectives: [
      'Apply shift, scale and reversal alone with correct axis arithmetic',
      'Expand y(t) = x(at − b) in the correct order and find anchor points',
      'Sketch transformed waveforms from anchor-point mapping'
    ],
    concepts: [
      {
        term: 'Time shift',
        kind: 'definition',
        statement: '**Shifting** delays or advances: $y(t) = x(t - t_0)$ **delays** by $t_0$ (shifts right) for $t_0 > 0$, while $y(t) = x(t + t_0)$ **advances** (shifts left). The anchor rule: the old value at $t = a$ moves to $t = a + t_0$ under delay — `minus moves right`.',
        detail: 'DT shifts use integer lags: $y[n] = x[n - 2]$ delays by 2 samples; non-integer lags are undefined for sequences.'
      },
      {
        term: 'Time scaling',
        kind: 'definition',
        statement: '**Scaling** $y(t) = x(at)$ compresses for $|a| > 1$ and expands for $|a| < 1$, always about the anchor $t = 0$. Doubling speed ($a = 2$) halves durations: a pulse on $[0, 4]$ becomes a pulse on $[0, 2]$. Negative `$a` additionally **reverses** the axis.',
        detail: 'DT scaling $x[2n]$ keeps even samples and drops odd ones (downsampling); $x[n/2]$ needs interpolation between defined samples.'
      },
      {
        term: 'Reversal',
        kind: 'definition',
        statement: '**Reversal** $y(t) = x(-t)$ mirrors about `$t = 0`: the value once at `$t = 3` moves to `$t = -3`. Combined with shift, $y(t) = x(-t + 5)$ mirrors **then** relocates — order matters because mirroring changes which direction the shift pushes.',
        detail: 'Even signals are reversal-invariant ($x(-t) = x(t)$); all other signals change shape visibly.'
      },
      {
        term: 'Combined order: shift then scale',
        kind: 'law',
        statement: 'For `$y(t) = x(at-b)$`, first **shift the inner axis** by $b$ (replace $t$ with $t - b$), **then scale** by $a$. Equivalently, anchor $t = a_0$ in $x$ maps to $t = \\frac{a_0 + b}{a}$ in $y$ for $a > 0$. For $x(2t - 3)$: shift right by $3$, then compress by $2$ — the anchor $t = 3$ lands at $t = \\frac{3}{2}$, not $t = 3$.',
        detail: 'The classic blunder is shifting by $b$ after scaling (landing at $t = 3$ above). Dividing the shift by $a$ corrects it in one step.'
      },
      {
        term: 'Anchor-point sketching',
        kind: 'method',
        statement: '**Anchor-point sketching** maps 3–4 landmark instants (edges, peaks, zero crossings) through the transformation instead of replotting point by point. For $y(t) = x(-2t + 4)$: solve $-2t + 4 = a_0$ giving $t = \\frac{4 - a_0}{2}$ per anchor $a_0$, then join the images in order — `solve, map, join`.',
        detail: 'Reversal flips anchor order along the axis; always relabel mapped points before joining to avoid twisted sketches.'
      }
    ],
    examples: [
      {
        title: 'Transform a pulse by x(2t − 3)',
        problem: '`x(t)` is 1 on [0, 4] and 0 elsewhere. Sketch `y(t) = x(2t − 3)`.',
        steps: [
          { label: 'Step 1', text: 'Shift first. ```text\nx(t) -> x(t-3) : pulse on [3, 7]\n```\nEvery anchor moves right by 3.' },
          { label: 'Step 2', text: 'Scale next. ```text\nx(t-3) -> x(2t-3) : pulse on [3/2, 7/2]\n```\nCompression by 2 about the origin halves all coordinates.' },
          { label: 'Step 3', text: 'Verify anchors. Old edge $a_0 = 0$ maps to $t = \\frac{0+3}{2} = \\frac{3}{2}$; old edge $a_0 = 4$ maps to $t = \\frac{7}{2}$ — matching the sketched interval.' }
        ],
        result: 'Pulse on $[\\frac{3}{2}, \\frac{7}{2}]$ with height unchanged — shift-then-scale only.'
      },
      {
        title: 'Reversal plus shift',
        problem: '`x(t)` has a peak of value 5 at `t = 1`. Where is the peak of `y(t) = x(−t + 5)`?',
        steps: [
          { label: 'Step 1', text: 'Set inner argument to the anchor. ```text\n-t + 5 = 1  ->  t = 4\n```' },
          { label: 'Step 2', text: 'Read the order. Reversal sends anchor 1 to −1; the +5 shift then moves it to 4 — identical result, confirming solve-first works regardless.' },
          { label: 'Step 3', text: 'State the peak. Height stays 5; only the position moves to $t = 4$.' }
        ],
        result: 'Peak value 5 relocated to $t = 4$.'
      }
    ],
    keyTakeaways: [
      'Minus shifts right (delay), plus shifts left (advance); scaling anchors at the origin.',
      'For x(at − b): shift by b first, then scale by a — or map anchors via (a0 + b)/a.',
      'Reversal mirrors about zero and flips anchor order; combine carefully with shifts.',
      'Sketch via 3–4 mapped anchors (solve, map, join) rather than dense replotting.'
    ],
    quiz: [
      // PYQ-pattern: combined shift-scale anchor computation
      {
        q: 'x(t) is nonzero only on [0, 4]. On what interval is y(t) = x(2t − 3) nonzero?',
        options: [
          '[3, 7]',
          `$[\\frac{3}{2}, \\frac{7}{2}]$`,
          '[0, 2]',
          `$[-3, 1]$`
        ],
        answer: 1,
        explanation: 'Step 1: Shift right by 3 first: [3, 7]. Step 2: Compress by 2 about zero: halve coordinates. Step 3: Result is $[\\frac{3}{2}, \\frac{7}{2}]$.'
      },
      {
        q: 'y(t) = x(t − 5) moves the waveform?',
        options: [
          'Left by 5 (advance)',
          'Up by 5 in amplitude',
          'Nowhere; shifts need scaling too',
          'Right by 5 (delay of 5 units)'
        ],
        answer: 3,
        explanation: 'Step 1: The minus sign marks delay. Step 2: Old value at a reappears at a + 5. Step 3: The whole shape slides right by 5.'
      },
      {
        q: 'A peak of value 5 at t = 1 in x(t) appears where in y(t) = x(−t + 5)?',
        options: ['t = 1', 't = −1', 't = 4', 't = 6'],
        answer: 2,
        explanation: 'Step 1: Solve −t + 5 = 1 for the anchor. Step 2: t = 4 satisfies it. Step 3: Height is unchanged at 5.'
      },
      {
        q: 'Why does shift-after-scale give the wrong answer for x(2t − 3)?',
        options: [
          'Because shifting the scaled axis by 3 lands anchors at unscaled positions instead of divided ones',
          'Because scaling must precede shifting always',
          'Because shifts commute with scales',
          'Because reversal is missing'
        ],
        answer: 0,
        explanation: 'Step 1: Correct order divides the shift by the scale. Step 2: Shifting after scaling skips that division. Step 3: Anchors land too far right by the missing factor.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.3
  {
    sectionId: 'sigctrl-ch1-s3',
    readingTime: 9,
    intro: 'The **unit impulse** $\\delta(t)$ sifts out single values, the **unit step** $u(t)$ switches on at zero, and the **ramp** $r(t)$ grows linearly — a singularity family linked by differentiation and integration. Their DT twins $\\delta[n]$ and $u[n]$ play the same roles for sequences. Mastering sifting, switching and singularity calculus unlocks convolution and transform pairs.',
    objectives: [
      'Apply the sifting property to evaluate integrals and sums',
      'Relate impulse, step and ramp through differentiation and integration',
      'Differentiate discontinuous signals with impulse terms at jumps'
    ],
    concepts: [
      {
        term: 'Unit impulse and sifting',
        kind: 'definition',
        statement: 'The CT **unit impulse** $\\delta(t)$ is zero everywhere except $t = 0$ with unit area $\\int_{-\\infty}^{\\infty} \\delta(t)\\,dt = 1$. Its **sifting** property extracts samples: $\\int_{-\\infty}^{\\infty} x(t)\\,\\delta(t - t_0)\\,dt = x(t_0)$, and discretely $\\sum_{n} x[n]\\,\\delta[n - n_0] = x[n_0]$. Sampling `at` the spike location is the whole game.',
        detail: 'Scaling rule: $\\delta(at) = \\frac{\\delta(t)}{|a|}$ — squeezing raises the spike so area stays unity.'
      },
      {
        term: 'Unit step',
        kind: 'definition',
        statement: 'The CT **unit step** $u(t)$ is $1$ for $t > 0$ and $0$ for $t < 0$ (value at $0$ often taken as $\\frac{1}{2}$); the DT step $u[n]$ is $1$ for $n \\ge 0$. Steps **switch on** causal signals: $x(t)u(t)$ keeps the $t > 0$ part and kills the past — `multiply by u to causalize`.',
        detail: 'Any finite pulse is a difference of steps: $u(t) - u(t - T)$ is 1 exactly on $(0, T)$.'
      },
      {
        term: 'Ramp and the singularity chain',
        kind: 'definition',
        statement: 'The **unit ramp** $r(t) = t\\,u(t)$ rises with slope 1 from zero. The family chains by calculus: $\\frac{d}{dt}r(t) = u(t)$ and $\\frac{d}{dt}u(t) = \\delta(t)$, reversed by integration $u(t) = \\int_{-\\infty}^{t} \\delta(\\tau)\\,d\\tau$ and $r(t) = \\int_{-\\infty}^{t} u(\\tau)\\,d\\tau$. Differentiate **down** the chain (`r` to `u` to `d`), integrate **up**.',
        detail: 'Higher members (parabola $\\frac{t^2}{2}u(t)$, etc.) continue the pattern: each step differentiates to the previous one.'
      },
      {
        term: 'Differentiating jumps produces impulses',
        kind: 'theorem',
        statement: 'A **jump** of height $A$ at $t_0$ differentiates to $A\\,\\delta(t - t_0)$ plus the smooth derivative elsewhere. So `$d/dt[3u(t-2)]` gives $3\\,\\delta(t - 2)$, and a rectangular pulse $u(t) - u(t - T)$ differentiates to $\\delta(t) - \\delta(t - T)$. Mark every discontinuity **before** differentiating mechanically.',
        detail: 'Strength equals jump height; sign follows rise (positive) versus fall (negative).'
      },
      {
        term: 'DT impulse-step relations',
        kind: 'notation',
        statement: 'The **DT impulse** $\\delta[n]$ is $1$ at $n = 0$, $0$ elsewhere; the **DT step** accumulates it (`sum` of impulses): $u[n] = \\sum_{k=-\\infty}^{n} \\delta[k]$, inverted by first difference $\\delta[n] = u[n] - u[n-1]$. Any sequence expands on shifted impulses: $x[n] = \\sum_{k} x[k]\\,\\delta[n-k]$ — the expansion convolution exploits.',
        detail: 'No $\\frac{1}{2}$-at-zero subtlety exists discretely: $u[0] = 1$ exactly.'
      }
    ],
    examples: [
      {
        title: 'Sift an integral',
        problem: 'Evaluate $\\int_{-\\infty}^{\\infty} (t^2 + 1)\\,\\delta(t - 3)\\,dt$.',
        steps: [
          { label: 'Step 1', text: 'Locate the spike. ```text\nδ(t-3) spikes at t0 = 3\n```' },
          { label: 'Step 2', text: 'Sift: replace $t$ by $3$ in the smooth factor: $(3^2 + 1) = 10$.' },
          { label: 'Step 3', text: 'Attach unit area: $10 \\times 1 = 10$. The impulse contributes only its location and area.' }
        ],
        result: 'Integral equals $10 = x(3)$.'
      },
      {
        title: 'Differentiate a pulse',
        problem: 'Differentiate $p(t) = 4[u(t - 1) - u(t - 4)]$.',
        steps: [
          { label: 'Step 1', text: 'Mark the jumps. ```text\nrise +4 at t = 1 ; fall -4 at t = 4\n```' },
          { label: 'Step 2', text: 'Convert jumps to impulses: rise gives $+4\\delta(t-1)$, fall gives $-4\\delta(t-4)$.' },
          { label: 'Step 3', text: 'Assemble: $\\frac{d}{dt}p(t) = 4\\delta(t-1) - 4\\delta(t-4)$; smooth parts contribute zero since the pulse is flat.' }
        ],
        result: 'Two impulses of opposite sign at the two edges.'
      }
    ],
    keyTakeaways: [
      'Sifting: impulse products integrate (or sum) to the co-factor value at the spike.',
      'r(t) → u(t) → δ(t) by differentiation; reverse by integration — one chain, two directions.',
      'Jumps differentiate to impulses with strength equal to jump height and matching sign.',
      'DT twins use sums and first differences; every sequence is a weighted impulse train.'
    ],
    quiz: [
      // PYQ-pattern: sifting integral evaluation
      {
        q: '$\\int_{-\\infty}^{\\infty} (t^2 + 1)\\,\\delta(t - 3)\\,dt$ equals?',
        options: ['0', '4', '10', `$\\infty$`],
        answer: 2,
        explanation: 'Step 1: The spike sits at t = 3. Step 2: Sifting substitutes t = 3: 9 + 1. Step 3: Unit area scales by 1, giving 10.'
      },
      {
        q: '$\\frac{d}{dt}u(t)$ equals?',
        options: [`$\\delta(t)$`, '`r(t)`', '0 everywhere', '`u(t)` itself'],
        answer: 0,
        explanation: 'Step 1: The step jumps by 1 at zero. Step 2: Jump differentiation yields an impulse of equal strength. Step 3: So the derivative is the unit impulse.'
      },
      {
        q: 'Which expression is 1 exactly on (0, T) and 0 elsewhere?',
        options: [
          '`u(t) + u(t − T)`',
          '`u(t) − u(t − T)`',
          '`r(t) − r(t − T)`',
          '`δ(t) − δ(t − T)`'
        ],
        answer: 1,
        explanation: 'Step 1: u(t) switches on at 0. Step 2: Subtracting u(t − T) switches off at T. Step 3: The difference is 1 precisely between the edges.'
      },
      {
        q: 'The DT step u[n] relates to δ[n] how?',
        options: [
          `$u[n] = \\delta[2n]$`,
          `$u[n] = \\delta[n] \\times n$`,
          'They are unrelated in discrete time',
          `$u[n] = \\sum_{k=-\\infty}^{n} \\delta[k]$, with $\\delta[n] = u[n] - u[n-1]$`
        ],
        answer: 3,
        explanation: 'Step 1: Summing impulses up to n gives 0 for negative n, 1 after. Step 2: That running sum is exactly the step. Step 3: First difference inverts the accumulation.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.4
  {
    sectionId: 'sigctrl-ch1-s4',
    depth: [
      {
        tier: 'masters',
        title: 'Energy versus power signals: norms and Parseval',
        blocks: [
          {
            kind: 'para',
            body: 'A continuous signal $x(t)$ has total energy $$E = \\int_{-\\infty}^{\\infty} |x(t)|^{2} dt$$ and average power $$P = \\lim_{T \\to \\infty} \\frac{1}{2T} \\int_{-T}^{T} |x(t)|^{2} dt,$$ with sums replacing integrals for sequences $x[n]$. **Energy signals** have finite $E$ and zero $P$ — transients that die out; **power signals** have finite nonzero $P$ with infinite $E$ — carriers and periodic waves; growing exponentials are neither. Graduate signal theory reads these as **squared-norm** statements: energy is the $L^{2}$ norm squared, power is the long-run time average, and RMS value is $\\sqrt{P}$ for the corresponding amplitude. Classification therefore decides which inner product and which Parseval identity apply.'
          },
          {
            kind: 'derivation',
            heading: 'Parseval splits power across harmonics',
            body: 'For a periodic signal with period $T_0$ and Fourier coefficients $a_k$, Parseval gives $$P = \\sum_{k=-\\infty}^{\\infty} |a_k|^{2},$$ so power splits additively across harmonics. Derivation integrates $|x(t)|^{2}$ over one period, substitutes the exponential series, and uses orthogonality $$\\frac{1}{T_0}\\int_{T_0} e^{j(k-m)\\omega_0 t} dt = \\delta_{k,m},$$ where $\\delta_{k,m}$ is $1$ for $k = m$ and $0$ otherwise. Cross terms vanish, leaving only squared magnitudes. The same steps with $\\int_{-\\infty}^{\\infty}$ give energy Parseval $$E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^{2} d\\omega$$ for aperiodic signals, unifying transient and persistent bookkeeping.'
          },
          {
            kind: 'example',
            heading: 'Classifying three canonical signals',
            body: 'Rectangular pulse $x(t) = 1$ for $|t| < 1$ and $0$ otherwise has $E = 2$ and $P = 0$: finite energy, transient. Sinusoid $A\\cos(\\omega_0 t)$ has infinite $E$ but $P = A^{2}/2$: finite power, persistent, with RMS $A/\\sqrt{2}$. Growing $e^{at}u(t)$ with $a > 0$ diverges in both $E$ and $P$: neither, hence unstable and outside both Parseval regimes without windowing. The exercise generalizes: bounded support plus bounded amplitude implies energy type, periodicity plus bounded amplitude implies power type, exponential growth implies neither — a decision tree that routes every later transform choice.'
          },
          {
            kind: 'remark',
            body: 'A common pitfall is applying energy Parseval to power signals or vice versa, producing infinite integrals mistaken for computation errors. The remedy is matching norm to class: use $L^{2}$ energy inner products for transients and time-averaged power inner products for carriers, each with its own orthogonality constant. Modern treatments formalize this as distinct Hilbert spaces with different inner products, explaining why truncating a sinusoid to finite support converts its type — windowing forces finite energy at the cost of spectral leakage, the first hint of duality between time concentration and frequency spread.'
          }
        ]
      }
    ],
    readingTime: 8,
    intro: '**Energy** totals a signal squared over all time; **power** averages it per unit time. Finite energy marks transients that die out, finite nonzero power marks persistent carriers and periodic waves, and some signals (the growing exponential) are neither. The $E$-versus-$P$ verdict also fixes RMS values and Parseval bookkeeping later.',
    objectives: [
      'Compute CT and DT energy and power from defining integrals and sums',
      'Classify signals as energy, power or neither with limit arguments',
      'Connect power to RMS values for sinusoidal signals'
    ],
    concepts: [
      {
        term: 'CT energy and power',
        kind: 'definition',
        statement: 'CT **energy** is $E = \\int_{-\\infty}^{\\infty} |x(t)|^2\\,dt$ and **power** is $P = \\lim_{T \\to \\infty} \\frac{1}{2T}\\int_{-T}^{T} |x(t)|^2\\,dt$. Energy totals; power time-averages — `integrate for E, average for P`.',
        detail: 'Squaring makes the measure sign-blind and ties it to physical dissipation across a $1\\,\\Omega$ load.'
      },
      {
        term: 'DT energy and power',
        kind: 'definition',
        statement: 'DT **energy** is $E = \\sum_{n=-\\infty}^{\\infty} |x[n]|^2$ and **power** is $P = \\lim_{N \\to \\infty} \\frac{1}{2N+1}\\sum_{n=-N}^{N} |x[n]|^2$. The geometric sequence $(0.5)^n u[n]$ has finite $E = \\frac{1}{1 - 0.25} = \\frac{4}{3}$ and zero $P$ — `transients` average to nothing over eternity.',
        detail: 'Convergence tests for series do the work: geometric ratio below 1 in magnitude means finite energy.'
      },
      {
        term: 'Energy versus power classification',
        kind: 'theorem',
        statement: '**Energy signals** have $0 < E < \\infty$ (hence $P = 0$); **power signals** have $0 < P < \\infty$ (hence $E = \\infty$); the rest are **neither**. Finite-duration plus bounded implies `energy` type; nonzero periodic implies power type; $e^{2t}u(t)$ is **neither** since both quantities diverge.',
        detail: 'Mutual exclusion is structural: finite total spread over infinite time averages to zero, and sustained nonzero average totals to infinity.'
      },
      {
        term: 'Sinusoidal power and RMS',
        kind: 'method',
        statement: 'For $x(t) = A\\cos(\\omega_0 t)$, power is $P = \\frac{A^2}{2}$ and the **RMS** value is $x_{rms} = \\sqrt{P} = \\frac{A}{\\sqrt{2}}$. Mains $230\\,V$ RMS is a $325\\,V$ amplitude sine — `RMS is what heats, amplitude is what peaks`.',
        detail: 'DC offset adds in quadrature: $P$ of $A + B\\cos$ is $A^2 + \\frac{B^2}{2}$ since cross terms average to zero.'
      },
      {
        term: 'Parseval preview',
        kind: 'insight',
        statement: '**Parseval** conservation states energy computed in `time` equals energy computed in `frequency` — $E$ from $|x(t)|^2$ matches $E$ from its spectrum. This is why Chapter 3 can price Fourier coefficients as power shares: the $E$/$P$ verdict here becomes the coefficient budget there.',
        detail: 'Use it as a checksum: time-side and frequency-side computations must agree exactly.'
      }
    ],
    examples: [
      {
        title: 'Classify a decaying exponential',
        problem: 'Classify $x(t) = e^{-2t}u(t)$ by energy and power.',
        steps: [
          { label: 'Step 1', text: 'Integrate energy. ```text\nE = ∫_0^∞ e^{-4t} dt = 1/4 (finite)\n```\n(The display form is $E = \\int_{0}^{\\infty} e^{-4t}\\,dt = \\frac{1}{4}$.)' },
          { label: 'Step 2', text: 'Average for power. Finite total over infinite time gives $P = 0$.' },
          { label: 'Step 3', text: 'Verdict: $0 < E < \\infty$ with $P = 0$ — an energy signal (a transient that dies out).' }
        ],
        result: 'Energy $\\frac{1}{4}$, power $0$: energy-type signal.'
      },
      {
        title: 'Power of a sine wave',
        problem: 'Find the power and RMS value of $x(t) = 6\\cos(100\\pi t)$.',
        steps: [
          { label: 'Step 1', text: 'Apply the sine rule. ```text\nP = A²/2 = 36/2 = 18\n```\n(The exact form is $P = \\frac{A^2}{2} = 18$.)' },
          { label: 'Step 2', text: 'Root it: $x_{rms} = \\sqrt{18} = 3\\sqrt{2} \\approx 4.24$.' },
          { label: 'Step 3', text: 'Classify: $E = \\infty$ (endless oscillation), $0 < P < \\infty$ — a power signal.' }
        ],
        result: 'Power $18$, RMS $3\\sqrt{2}$: power-type signal.'
      }
    ],
    keyTakeaways: [
      'Energy integrates |x|²; power time-averages it — finite E gives P = 0, finite nonzero P gives E = ∞.',
      'Finite-duration bounded signals are energy type; nonzero periodic signals are power type.',
      'Sinusoid power is A²/2 with RMS A/√2; DC adds in quadrature.',
      'Growing exponentials are neither; Parseval later prices the same totals in frequency.'
    ],
    quiz: [
      // PYQ-pattern: energy versus power classification verdicts
      {
        q: 'x(t) = e^{−2t}u(t) is?',
        options: [
          'A power signal with $P = \\frac{1}{4}$',
          'An energy signal with finite E and P = 0',
          'Neither, since both diverge',
          'A power signal with infinite P'
        ],
        answer: 1,
        explanation: 'Step 1: The squared integral converges to $\\frac{1}{4}$. Step 2: Finite total over infinite time averages to zero. Step 3: Finite E with zero P defines energy type.'
      },
      {
        q: 'Power and RMS of 6cos(100πt) are?',
        options: [
          'P = 36, RMS = 6',
          'P = 6, RMS = √6',
          'P = 0, RMS = 0',
          'P = 18, RMS = 3√2'
        ],
        answer: 3,
        explanation: 'Step 1: Sinusoid power is half the squared amplitude: 18. Step 2: RMS is the root of power. Step 3: √18 simplifies to 3√2.'
      },
      {
        q: 'A nonzero periodic signal is which type?',
        options: [
          'Power type: infinite total energy but finite nonzero average power',
          'Energy type, since periods repeat finitely',
          'Neither type always',
          'Energy type with P = ∞'
        ],
        answer: 0,
        explanation: 'Step 1: Endless repetition totals to infinite energy. Step 2: One period average stays finite and nonzero. Step 3: That combination defines power type.'
      },
      {
        q: 'x(t) = e^{2t}u(t) (growing) classifies as?',
        options: [
          'Energy signal',
          'Power signal with finite P',
          'Neither: both E and P diverge',
          'Power signal with P = 0'
        ],
        answer: 2,
        explanation: 'Step 1: The squared integral diverges upward. Step 2: Time averages of exploding squares also diverge. Step 3: Divergence of both quantities means neither type.'
      }
    ]
  }
]

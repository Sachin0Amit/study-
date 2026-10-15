import type { SectionContent } from '../library'

// ============================================================================
// Signals & Control — Chapter 3: Fourier Series, Transform & Sampling
// Master study content covering Sections 3.1 – 3.4.
// ============================================================================

export const sigctrlCh03Content: SectionContent[] = [
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: 'ece-e-sigsys-s23',
    readingTime: 10,
    intro: 'A periodic signal is a chord of harmonics: the **Fourier series** expands it into sinusoids at multiples of the fundamental, in trigonometric or exponential form. Symmetry (even, odd, half-wave) kills whole coefficient families before any integral is evaluated. **Parseval** then prices each harmonic share of the total power.',
    objectives: [
      'Write trig and exponential series with correct harmonic indexing',
      'Apply even/odd/half-wave symmetry shortcuts to zero coefficients',
      'Compute harmonic power shares with Parseval'
    ],
    concepts: [
      {
        term: 'Trigonometric Fourier series',
        kind: 'definition',
        statement: 'A $T_0$-periodic $x(t)$ expands as $x(t) = a_0 + \\sum_{n=1}^{\\infty} (a_n\\cos n\\omega_0 t + b_n\\sin n\\omega_0 t)$ with $\\omega_0 = \\frac{2\\pi}{T_0}$, DC term $a_0 = \\frac{1}{T_0}\\int_{T_0} x(t)\\,dt$, and $a_n = \\frac{2}{T_0}\\int_{T_0} x(t)\\cos n\\omega_0 t\\,dt$ (sine form for $b_n$). The `n = 1` pair is the **fundamental**; higher $n$ are **harmonics**.',
        detail: 'Integrate over any single full period — choice of interval never changes the coefficients.'
      },
      {
        term: 'Exponential form',
        kind: 'notation',
        statement: 'The **exponential** form $x(t) = \\sum_{n=-\\infty}^{\\infty} c_n e^{jn\\omega_0 t}$ uses $c_n = \\frac{1}{T_0}\\int_{T_0} x(t)e^{-jn\\omega_0 t}\\,dt$, with $c_0 = a_0$, $c_n = \\frac{a_n - jb_n}{2}$ and $c_{-n} = c_n^*$ for real signals. Negative $n$ are bookkeeping twins, not new frequencies — `one-sided amplitude splits into two-sided halves`.',
        detail: 'Magnitude spectra of real signals mirror evenly ($|c_{-n}| = |c_n|$); phases mirror oddly.'
      },
      {
        term: 'Symmetry shortcuts',
        kind: 'method',
        statement: '**Even** signals keep only $a_n$ ($b_n = 0$); **odd** signals keep only $b_n$ ($a_n = 0$); **half-wave** symmetry ($x(t \\pm \\frac{T_0}{2}) = -x(t)$) keeps **odd harmonics only**; full DC-free symmetry kills $a_0$. A square wave (odd, half-wave) therefore holds only $b_1, b_3, b_5, \\ldots$ — `symmetry first, integrals later`.',
        detail: 'Quarter-wave combinations refine further; always test half-wave before integrating since it deletes half the spectrum at a glance.'
      },
      {
        term: 'Square-wave coefficients',
        kind: 'theorem',
        statement: 'The unit square wave carries $b_n = \\frac{4}{n\\pi}$ for **odd** $n$ (zero for even $n$): harmonics fall as **$\\frac{1}{n}$** with alternating phase. Truncating after `$N` terms leaves the **Gibbs** overshoot of about $9\\%$ at edges — finite sums **ring** near jumps no matter how large $N$ grows.',
        detail: 'The $\\frac{1}{n}$ tail marks discontinuities; smooth waveforms decay as $\\frac{1}{n^2}$ or faster.'
      },
      {
        term: 'Parseval power budget',
        kind: 'theorem',
        statement: '**Parseval** prices power by harmonic: $P = |c_0|^2 + 2\\sum_{n=1}^{\\infty} |c_n|^2 = a_0^2 + \\frac{1}{2}\\sum_{n=1}^{\\infty}(a_n^2 + b_n^2)$. Each harmonic contributes independently — total power is the **sum of harmonic powers** (`sum|c_n|^2`), so dropping high terms costs exactly their priced share.',
        detail: 'Use it backwards: required fidelity sets how many harmonics the budget must retain.'
      }
    ],
    examples: [
      {
        title: 'Symmetry first on a square wave',
        problem: 'A $\\pm 1$ square wave is odd with half-wave symmetry. Which coefficients survive, and what is $b_1$?',
        steps: [
          { label: 'Step 1', text: 'Apply shortcuts. ```text\nodd        -> a_n = 0 for all n\nhalf-wave  -> even n vanish\nresult     -> only b_1, b_3, b_5, ...\n```' },
          { label: 'Step 2', text: 'Compute the fundamental: $b_1 = \\frac{4}{\\pi} \\approx 1.27$ — larger than the wave peak since harmonics borrow and repay.' },
          { label: 'Step 3', text: 'Price it: fundamental power share is $\\frac{b_1^2}{2} = \\frac{8}{\\pi^2} \\approx 0.81$ of the unit total — most energy rides the first harmonic.' }
        ],
        result: 'Odd harmonics only, $b_1 = \\frac{4}{\\pi}$, carrying about 81% of power.'
      },
      {
        title: 'Parseval checksum',
        problem: 'A signal has $a_0 = 2$, $a_1 = 3$, $b_1 = 4$, all else zero. Find its power two ways.',
        steps: [
          { label: 'Step 1', text: 'Price harmonics. ```text\nP = a0² + (a1² + b1²)/2 = 4 + (9+16)/2 = 16.5\n```' },
          { label: 'Step 2', text: 'Time-side check: averaging $(2 + 3\\cos + 4\\sin)^2$ over a period kills cross terms (orthogonality), leaving $4 + \\frac{9}{2} + \\frac{16}{2} = 16.5$.' },
          { label: 'Step 3', text: 'Agreement confirms the coefficient set is complete — missing harmonics would break the match.' }
        ],
        result: 'Power $16.5$ both ways; Parseval certifies completeness.'
      }
    ],
    keyTakeaways: [
      'Trig form splits cosine/sine amplitudes; exponential form uses two-sided c_n with conjugate symmetry.',
      'Even kills b_n, odd kills a_n, half-wave kills even harmonics — inspect before integrating.',
      'Square-wave harmonics fall as 1/n over odd n only; truncation rings with ~9% Gibbs overshoot.',
      'Parseval sums harmonic powers to the total; each dropped harmonic costs its priced share.'
    ],
    quiz: [
      // PYQ-pattern: symmetry shortcut coefficient verdicts
      {
        q: 'An odd signal with half-wave symmetry keeps?',
        options: [
          'All a_n and b_n',
          'Only odd-indexed b_n (a_n = 0, even harmonics gone)',
          'Only even-indexed a_n',
          'Only the DC term'
        ],
        answer: 1,
        explanation: 'Step 1: Odd symmetry zeroes every a_n. Step 2: Half-wave zeroes every even harmonic. Step 3: Survivors are b_1, b_3, b_5, … only.'
      },
      {
        q: 'For real x(t), exponential coefficients satisfy?',
        options: [
          '`c_{−n} = c_n` (identical)',
          '`c_{−n} = 0` for all n',
          '`c_{−n} = c_n^*` (conjugate), so magnitudes mirror evenly',
          '`c_n` is always real'
        ],
        answer: 2,
        explanation: 'Step 1: Real signals need imaginary parts to cancel. Step 2: Conjugate pairing provides that cancellation. Step 3: Magnitudes mirror; phases anti-mirror.'
      },
      {
        q: 'Square-wave harmonic amplitudes decay as?',
        options: ['$\\frac{1}{n}$ over odd n only', '$\\frac{1}{n^2}$ over all n', '`constant` over all n', '$2^n$ over even n'],
        answer: 0,
        explanation: 'Step 1: Discontinuities give the slow 1/n tail. Step 2: Half-wave symmetry deletes even harmonics. Step 3: Only odd-n terms survive with 4/(nπ) weights.'
      },
      {
        q: 'Parseval P = a0² + Σ(a_n² + b_n²)/2 is used to?',
        options: [
          'Find the fundamental frequency',
          'Prove causality',
          'Compute the Laplace ROC',
          'Price each harmonic power share and checksum truncations'
        ],
        answer: 3,
        explanation: 'Step 1: Each term is one harmonic power contribution. Step 2: Summing prices the whole signal. Step 3: Comparing against time-side power validates retained harmonics.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.2
  {
    sectionId: 'ece-e-sigsys-s24',
    depth: [
      {
        tier: 'masters',
        title: 'Fourier duality: pairs, properties and impossibility',
        blocks: [
          {
            kind: 'para',
            body: 'The **Fourier transform** pairs time shape $x(t)$ with spectrum $X(\\omega)$ via $$X(\\omega) = \\int_{-\\infty}^{\\infty} x(t)e^{-j\\omega t}dt, \\qquad x(t) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} X(\\omega)e^{j\\omega t}d\\omega.$$ Six properties — linearity, time and frequency shifting, scaling, **duality**, differentiation, convolution — move operations across domains so derivations route through algebra rather than integrals. Graduate fluency means recognizing canonical pairs on sight (impulse with constant, rectangle with sinc, Gaussian with Gaussian) and invoking duality to get each reverse pair for free. The transform exists for energy signals in $L^{2}$ and for persistent signals as distributions with impulses.'
          },
          {
            kind: 'theorem',
            body: '**Duality** states that if $x(t)$ transforms to $X(\\omega)$ then $X(t)$ transforms to $2\\pi x(-\\omega)$: time and frequency shapes mirror with reversal and $2\\pi$ scaling. **Time-frequency uncertainty** states that for normalized energy signals, durations $\\Delta_t$ and bandwidths $\\Delta_{\\omega}$ satisfy $$\\Delta_t \\Delta_{\\omega} \\geq \\frac{1}{2},$$ with equality only for Gaussians. No signal is simultaneously strictly time-limited and strictly band-limited except the zero signal — a hard impossibility governing sampling, windowing and pulse design.'
          },
          {
            kind: 'proof',
            body: 'Duality follows by swapping roles in the inversion integral: write the synthesis equation at $-t$, rename $t$ to $\\omega$ and $\\omega$ to $t$, and the analysis form reappears with $2\\pi$ scaling and reversal. Uncertainty follows from Cauchy-Schwarz applied to $tx(t)$ and $dx/dt$: integration by parts links the product of variances to the commutator $[t, d/dt] = -1$, giving the $1/2$ bound after normalization. Time-band limiting impossibility follows because a band-limited signal extends to an entire analytic function; vanishing on any interval forces identical vanishing everywhere. Hence practical pulses trade main-lobe width against sidelobe leakage, and prolate spheroidal functions optimize concentration within the bound.'
          },
          {
            kind: 'application',
            body: 'Communication pulse design lives on this frontier: root-raised-cosine shapes accept controlled excess bandwidth to achieve zero intersymbol interference while containing sidelobes, directly trading $\\Delta_t$ against $\\Delta_{\\omega}$. Spectral estimation windows (Hann, Hamming, Kaiser) choose different points on the same curve, balancing frequency resolution against leakage for finite data. Research frontiers push sparsity and super-resolution — recovering closely spaced tones below the Rayleigh width using subspace and compressed-sensing priors — which succeed exactly when the signal model adds information beyond raw bandwidth, respecting rather than refuting the bound.'
          }
        ]
      }
    ],
    readingTime: 11,
    intro: 'The **Fourier transform** extends series to aperiodic signals, pairing time shapes with spectra: impulses with constants, rectangles with sinc, Gaussians with Gaussians. Six properties — linearity, shifting, scaling, duality, differentiation, convolution — move operations across domains. Fluency here means recognizing pairs on sight and routing derivations through properties, not integrals.',
    objectives: [
      'Recall the big five pairs: impulse, step, rectangle, exponential, sinusoid',
      'Apply shift, scale, duality and differentiation properties correctly',
      'Convert convolution to multiplication across domains'
    ],
    concepts: [
      {
        term: 'Transform definition pair',
        kind: 'definition',
        statement: 'The forward transform is $X(\\omega) = \\int_{-\\infty}^{\\infty} x(t)e^{-j\\omega t}\\,dt$ and the inverse is $x(t) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} X(\\omega)e^{j\\omega t}\\,d\\omega$. The $\\frac{1}{2\\pi}$ lives on the **inverse** side only (angular-frequency convention) — `forward sums, inverse averages`.',
        detail: 'Existence needs absolute integrability (or generalized impulses for steps and sinusoids).'
      },
      {
        term: 'The big five pairs',
        kind: 'theorem',
        statement: 'Memorize: $\\delta(t) \\leftrightarrow 1$; $1 \\leftrightarrow 2\\pi\\delta(\\omega)$; $\\text{rect}(t/T) \\leftrightarrow T\\,\\text{sinc}(\\frac{\\omega T}{2\\pi})$; $e^{-at}u(t) \\leftrightarrow \\frac{1}{a + j\\omega}$ ($a > 0$); $\\cos(\\omega_0 t) \\leftrightarrow \\pi[\\delta(\\omega - \\omega_0) + \\delta(\\omega + \\omega_0)]$. Narrow in time means **wide** in frequency — `squeeze one side, spread the other`.',
        detail: 'Every pair reads both directions via duality — one memorized pair is two usable facts.'
      },
      {
        term: 'Shift, scale, duality',
        kind: 'method',
        statement: '**Shift**: $x(t - t_0) \\leftrightarrow X(\\omega)e^{-j\\omega t_0}$ (delay becomes `linear phase`). **Scale**: $x(at) \\leftrightarrow \\frac{1}{|a|}X(\\frac{\\omega}{a})$ (halve duration, double bandwidth). **Duality**: $X(t) \\leftrightarrow 2\\pi\\,x(-\\omega)$ — rectangles and sincs swap roles across domains.',
        detail: 'Shift changes phase only ($|X|$ untouched); scale trades width against height to conserve area.'
      },
      {
        term: 'Differentiation and integration',
        kind: 'method',
        statement: '**Differentiation** becomes multiplication: $\\frac{d}{dt}x(t) \\leftrightarrow j\\omega\\,X(\\omega)$, so each derivative tilts spectra up `$+20dB/dec`. **Integration** divides: $\\int x \\leftrightarrow \\frac{X(\\omega)}{j\\omega} + \\pi X(0)\\delta(\\omega)$ — the impulse term prices the accumulated DC.',
        detail: 'Differential equations therefore become algebra: replace `d/dt` with `jw` and solve for `X`.'
      },
      {
        term: 'Convolution–multiplication duality',
        kind: 'theorem',
        statement: '**Convolution in time is multiplication in frequency**: $x(t) * h(t) \\leftrightarrow X(\\omega)H(\\omega)$, and dually $x(t)h(t) \\leftrightarrow \\frac{1}{2\\pi}X(\\omega) * H(\\omega)$. Filtering (`y=x*h`) = spectral shaping: output spectrum is input spectrum **weighted** by $H(\\omega)$ point by point.',
        detail: 'This is the operational payoff: expensive convolution becomes cheap multiplication after one transform pair.'
      }
    ],
    examples: [
      {
        title: 'Transform a delayed rectangle via properties',
        problem: 'Find the transform of $x(t) = \\text{rect}((t - 2)/4)$ (width 4 centred at $t = 2$) without integrating.',
        steps: [
          { label: 'Step 1', text: 'Start from the pair. ```text\nrect(t/4) <-> 4·sinc(2ω/π)\n```\n(Unnormalized sinc: $\\text{sinc}(u) = \\frac{\\sin(\\pi u)}{\\pi u}$.)' },
          { label: 'Step 2', text: 'Shift, do not recompute: delay by $2$ multiplies the spectrum by $e^{-j2\\omega}$.' },
          { label: 'Step 3', text: 'Assemble: $X(\\omega) = 4\\,\\text{sinc}(\\frac{2\\omega}{\\pi})\\,e^{-j2\\omega}$ — magnitude unchanged, linear phase added.' }
        ],
        result: 'Scaled-sinc magnitude with linear phase from the delay.'
      },
      {
        title: 'Solve an ODE by transform',
        problem: 'Solve $\\frac{dy}{dt} + 3y = x$ for the frequency response $H(\\omega) = Y/X$.',
        steps: [
          { label: 'Step 1', text: 'Algebraize. ```text\njωY + 3Y = X  ->  H(ω) = 1/(3 + jω)\n```' },
          { label: 'Step 2', text: 'Recognize the pair: $H$ matches $e^{-3t}u(t)$ — the system is a causal low-pass with time constant $\\frac{1}{3}$.' },
          { label: 'Step 3', text: 'Read response: $|H| = \\frac{1}{\\sqrt{9 + \\omega^2}}$, corner at $\\omega = 3$.' }
        ],
        result: '$H(\\omega) = \\frac{1}{3 + j\\omega}$: first-order low-pass, corner 3 rad/s.'
      }
    ],
    keyTakeaways: [
      'Forward transform sums against the complex exponential; inverse scales by one over two pi — place the constant correctly.',
      'Five canonical pairs plus six properties replace nearly all direct integration.',
      'Shift affects phase only; scaling swaps width for bandwidth; duality swaps pair roles.',
      'Time convolution is frequency multiplication — filtering as spectral weighting.'
    ],
    quiz: [
      // PYQ-pattern: standard pair recall under time scaling
      {
        q: 'rect(t/T) of width T centred at zero transforms to?',
        options: [
          '`T·sinc-spectrum of width ~1/T` (narrow time, wide frequency)',
          'An impulse of strength T',
          'A constant T at all frequencies',
          'A delayed step function'
        ],
        answer: 0,
        explanation: 'Step 1: The rectangle–sinc pair links box to sinc. Step 2: Amplitude scales with T. Step 3: Width reciprocity makes the spectrum span roughly 1/T.'
      },
      {
        q: 'Delaying x(t) by t0 changes its spectrum how?',
        options: [
          'Magnitudes scale by t0',
          'Bandwidth doubles',
          'Only phase: multiply by e^{−jωt0}, magnitudes untouched',
          'DC value shifts by t0'
        ],
        answer: 2,
        explanation: 'Step 1: The shift property factors a complex exponential. Step 2: Its magnitude is 1 at all frequencies. Step 3: Only the phase argument gains a linear term.'
      },
      {
        q: 'd/dt in time corresponds in frequency to?',
        options: [
          'Division by jω',
          'Multiplication by jω (rising +20 dB/decade tilt)',
          'Convolution with δ(ω)',
          'Time reversal'
        ],
        answer: 1,
        explanation: 'Step 1: Differentiate the inverse-transform exponential. Step 2: Each derivative pulls down jω. Step 3: Magnitude grows linearly with frequency.'
      },
      {
        q: 'y(t) = x(t) ∗ h(t) transforms to?',
        options: [
          '`X(ω) + H(ω)`',
          '`X(ω) ∗ H(ω)` without scaling',
          '`max(X(ω), H(ω))`',
          '`X(ω)H(ω)` (pointwise product)'
        ],
        answer: 3,
        explanation: 'Step 1: Convolution in one domain maps to multiplication in the other. Step 2: Time convolution is the forward direction here. Step 3: So spectra multiply pointwise.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.3
  {
    sectionId: 'ece-e-sigsys-s25',
    readingTime: 9,
    intro: 'Complex exponentials are **eigenfunctions** of LTI systems: $e^{j\\omega t}$ passes through scaled by $H(\\omega)$, the **frequency response**. Magnitude $|H|$ sets gain, phase $\\angle H$ sets delay, and **group delay** (envelope) versus **phase delay** (carrier) separate distortionless transmission from dispersive smear. Design targets reduce to shaping these two curves.',
    objectives: [
      'Apply the eigenfunction property to sinusoidal steady-state response',
      'Compute magnitude, phase, group and phase delay from H(ω)',
      'State distortionless-transmission conditions'
    ],
    concepts: [
      {
        term: 'Eigenfunction property',
        kind: 'theorem',
        statement: 'Feeding $x(t) = e^{j\\omega t}$ into LTI $h$ yields $y(t) = H(\\omega)e^{j\\omega t}$ where $H(\\omega) = \\int h(\\tau)e^{-j\\omega\\tau}\\,d\\tau$. Exponentials pass **unchanged in shape**, scaled by the eigenvalue $H(\\omega)$ — `same tone out, new size and shift`.',
        detail: 'Sinusoids follow by Euler: $A\\cos(\\omega t + \\phi)$ exits as $|H|A\\cos(\\omega t + \\phi + \\angle H)$.'
      },
      {
        term: 'Magnitude and phase response',
        kind: 'definition',
        statement: '**Magnitude** $|H(\\omega)|$ is the gain at $\\omega$; **phase** $\\angle H(\\omega)$ is the added shift. For $H(\\omega) = \\frac{1}{3 + j\\omega}$: $|H| = \\frac{1}{\\sqrt{9 + \\omega^2}}$, $\\angle H = -\\tan^{-1}(\\frac{\\omega}{3})$ — low frequencies pass (`low-pass`), highs attenuate with lagging phase.',
        detail: 'Bode plots draw `$20log|H|$` and `$angle H$` versus `$log w`: gain shape plus delay shape side by side.'
      },
      {
        term: 'Group versus phase delay',
        kind: 'definition',
        statement: '**Phase delay** $\\tau_p = -\\frac{\\angle H(\\omega)}{\\omega}$ times carrier shift; **group delay** $\\tau_g = -\\frac{d}{d\\omega}\\angle H(\\omega)$ times **envelope** shift. Pure delay $H = e^{-j\\omega T}$ gives $\\tau_p = \\tau_g = T$ (faithful); dispersive channels split them (envelope arrives apart from carrier) — `phase moves ripples, group moves messages`.',
        detail: 'Flat group delay across the band preserves pulse shapes; peaked group delay rings and smears symbols.'
      },
      {
        term: 'Distortionless transmission',
        kind: 'law',
        statement: '**Distortionless** transmission needs **flat magnitude** $|H| = K$ and **linear phase** $\\angle H = -\\omega T$ over the signal band: every component scales equally and delays equally. Any magnitude ripple (frequency distortion) or phase curvature (delay distortion) reshapes the waveform — `flat gain plus straight phase, or reshape`.',
        detail: 'Real channels approximate this over a passband only; equalizers flatten the residual.'
      },
      {
        term: 'First-order corner reading',
        kind: 'method',
        statement: 'For $H(\\omega) = \\frac{1}{a + j\\omega}$: **corner** at $\\omega = a$ where gain falls $3\\,dB$ and phase passes $-45^\\circ$; asymptotes $0\\,dB$ below and $-20\\,dB$/decade above. Group delay peaks at $\\frac{1}{a}$ near DC and vanishes at high $\\omega$ — `corners mark the handoff`.',
        detail: 'Cascade corners multiply in magnitude (add in dB) and add in phase — sketch each stage, then stack.'
      }
    ],
    examples: [
      {
        title: 'Steady-state sine through a low-pass',
        problem: '$H(\\omega) = \\frac{1}{3 + j\\omega}$; input $x(t) = 10\\cos(3t)$. Find the steady-state output.',
        steps: [
          { label: 'Step 1', text: 'Evaluate at ω = 3. ```text\n|H| = 1/√(9+9) = 1/(3√2) ≈ 0.236\n∠H = -tan⁻¹(3/3) = -45°\n```' },
          { label: 'Step 2', text: 'Scale and shift: amplitude $10 \\times 0.236 = 2.36$, phase lag $45^\\circ$.' },
          { label: 'Step 3', text: 'Write $y(t) = 2.36\\cos(3t - 45^\\circ)$ — same tone, smaller and later.' }
        ],
        result: 'Output $2.36\\cos(3t - 45^\\circ)$ via the eigenfunction shortcut.'
      },
      {
        title: 'Delays of a pure-delay channel',
        problem: '$H(\\omega) = e^{-j\\omega T}$: compute group and phase delays and judge distortion.',
        steps: [
          { label: 'Step 1', text: 'Read phase. ```text\n∠H = -ωT  ->  τp = -(-ωT)/ω = T\nτg = -d(-ωT)/dω = T\n```' },
          { label: 'Step 2', text: 'Compare: equal delays mean envelope and carrier arrive together.' },
          { label: 'Step 3', text: 'Judge: magnitude flat at 1 plus linear phase gives distortionless transmission with lag $T$.' }
        ],
        result: 'Both delays equal $T$: faithful delayed copy, no distortion.'
      }
    ],
    keyTakeaways: [
      'Exponentials are LTI eigenfunctions: output is input times H(ω) — sinusoids scale by |H| and shift by ∠H.',
      'Phase delay times carriers, group delay times envelopes; equality means faithful transport.',
      'Distortionless needs flat gain plus linear phase across the band.',
      'First-order corners sit at ω = a with −3 dB gain and −45° phase; cascades stack in dB and degrees.'
    ],
    quiz: [
      {
        q: 'Input 10cos(3t) through H(ω) = 1/(3 + jω). Steady-state output?',
        options: [
          '`10cos(3t)` unchanged',
          '`2.36cos(3t − 45°)` (scaled by |H|, lagged by ∠H)',
          '`30cos(9t)`',
          '`10sin(3t)`'
        ],
        answer: 1,
        explanation: 'Step 1: |H(3)| = 1/(3√2) ≈ 0.236 scales amplitude to 2.36. Step 2: ∠H(3) = −45° lags the phase. Step 3: Frequency is preserved by the eigenfunction property.'
      },
      // PYQ-pattern: group versus phase delay roles
      {
        q: 'Group delay governs, phase delay governs?',
        options: [
          'Carrier shift; envelope shift',
          'Gain; bandwidth',
          'Envelope (message) shift; carrier (ripple) shift',
          'Stability; causality'
        ],
        answer: 2,
        explanation: 'Step 1: Group delay differentiates phase, tracking packets. Step 2: Phase delay ratios phase, tracking carriers. Step 3: Split arrivals mean dispersion.'
      },
      {
        q: 'Distortionless transmission over the band needs?',
        options: [
          'Zero gain with any phase',
          'Infinite bandwidth always',
          'Nonlinear phase with flat gain',
          'Flat magnitude plus linear phase (equal gain, equal delay per tone)'
        ],
        answer: 3,
        explanation: 'Step 1: Flat gain prevents frequency distortion. Step 2: Linear phase gives every tone the same delay. Step 3: Together the waveform survives scaled and shifted only.'
      },
      {
        q: 'H(ω) = 1/(3 + jω): phase at ω = 3 and trend above?',
        options: [
          '−45° trending toward −90°',
          '+45° trending toward +90°',
          '0° always',
          '−180° immediately'
        ],
        answer: 0,
        explanation: 'Step 1: ∠H = −tan⁻¹(ω/3) gives −45° at the corner. Step 2: Higher ω pushes the ratio up. Step 3: Phase asymptotes to −90° for a single pole.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.4
  {
    sectionId: 'ece-e-sigsys-s26',
    readingTime: 10,
    intro: '**Sampling** converts CT to DT by recording values every $T_s$; the **sampling theorem** promises perfect reconstruction when the rate exceeds twice the highest frequency. Undersampling folds high tones onto low ones — **aliasing** — an irreversible mistaken identity. Rate choice, anti-alias filtering and the sinc reconstruction formula are the working consequences.',
    objectives: [
      'State the Nyquist rate and Nyquist frequency with correct halving',
      'Predict alias frequencies for undersampled tones',
      'Write the ideal reconstruction sum and the anti-alias filter role'
    ],
    concepts: [
      {
        term: 'Sampling theorem and Nyquist rate',
        kind: 'theorem',
        statement: 'A signal bandlimited to $f_m$ (highest frequency) is fully determined by samples taken at $f_s > 2f_m$; the **Nyquist rate** is **$2f_m$** and the **Nyquist frequency** is **$\\frac{f_s}{2}$**. Strict inequality guards the boundary tone — `sample faster than twice the top`.',
        detail: 'Bandlimited means zero spectrum beyond $f_m$; real signals are pre-filtered to earn that property before sampling.'
      },
      {
        term: 'Spectral replication view',
        kind: 'insight',
        statement: 'Sampling **replicates** the spectrum at multiples of $f_s$: copies centred at $0, \\pm f_s, \\pm 2f_s, \\ldots$. Above Nyquist, copies **overlap** and add — overlap is aliasing in frequency clothing. Ideal reconstruction is a **low-pass** keeping only the central copy — `filter one copy, recover the original`.',
        detail: 'Each copy carries full signal information; isolation of any single copy suffices for recovery.'
      },
      {
        term: 'Alias frequency formula',
        kind: 'method',
        statement: 'A tone at $f$ sampled at $f_s$ appears at $f_a = |f - k f_s|$ for the integer $k$ landing $f_a$ in $[0, \\frac{f_s}{2}]$. Sampling `$70Hz` at `$fs=100Hz` gives `$k=1`: $f_a = |70 - 100| = 30\\,Hz$ — the samples **are** a $30\\,Hz$ tone, indistinguishably.',
        detail: 'Fold about $\\frac{f_s}{2}$: $f$ and $f_s - f$ always alias each other.'
      },
      {
        term: 'Ideal reconstruction',
        kind: 'definition',
        statement: 'Bandlimited $x(t)$ rebuilds from samples via $x(t) = \\sum_{n} x[n]\\,\\text{sinc}(\\frac{t - nT_s}{T_s})$ — weighted **sinc** kernels peaking at each sample instant and crossing zero at all others. Each sample contributes only at its own instant; between instants the sincs interpolate — `zero at neighbours, blend between`.',
        detail: 'Brick-wall low-pass filtering implements this sum; practical DACs approximate with hold plus smoothing filters.'
      },
      {
        term: 'Anti-alias filtering',
        kind: 'law',
        statement: 'An **anti-alias filter** (analog low-pass below $\\frac{f_s}{2}$) must precede the sampler: murder unrepresentable highs **before** digitizing, since post-sampling no processing can separate true lows from folded impostors. `Filter first — aliased data lies forever`.',
        detail: 'Oversampling eases filter steepness: faster $f_s$ pushes copies apart so gentle analog filters suffice.'
      }
    ],
    derivations: [
      {
        title: 'Nyquist Rate and Ideal Reconstruction',
        statement: 'Sampling faster than twice the top frequency preserves the waveform: $$f_{s} > 2f_{m} \\Rightarrow x(t) = \\sum_{n} x[n] \\, \\mathrm{sinc}\\left(\\frac{t - nT_{s}}{T_{s}}\\right)$$',
        prerequisites: [
          'Bandlimited spectrum $X(f) = 0$ for $|f| > f_{m}$',
          'Sampling period $T_{s} = 1/f_{s}$ and sample train $x[n] = x(nT_{s})$',
          'Ideal low-pass with cutoff $f_{s}/2$ and gain $T_{s}$',
        ],
        steps: [
          {
            label: 'Step 1: Multiply by the impulse train',
            formula: `$$x_{s}(t) = x(t) \\sum_{n} \\delta(t - nT_{s})$$`,
            explanation: 'Ideal sampling keeps signal values at multiples of $T_{s}$ and discards everything between. Multiplication by shifted impulses models that selection exactly in continuous time. The sampled waveform is therefore a weighted impulse train with strengths $x[n]$.',
          },
          {
            label: 'Step 2: Copy the spectrum at multiples of the rate',
            formula: `$$X_{s}(f) = \\frac{1}{T_{s}} \\sum_{k} X(f - kf_{s})$$`,
            explanation: 'Fourier analysis turns impulse-train multiplication into spectral replication every $f_{s}$ along frequency. Each copy carries the full baseband shape scaled by $1/T_{s}$. Sampling density in time thus becomes copy spacing in frequency.',
          },
          {
            label: 'Step 3: Separate the copies with the Nyquist condition',
            formula: `$$f_{s} > 2f_{m}$$`,
            explanation: 'Baseband spans $2f_{m}$ from $-f_{m}$ to $f_{m}$, so copies centered $f_{s}$ apart overlap unless $f_{s}$ exceeds the span. Strict inequality guards the boundary tone itself from self-collision. Undersampling below this rate folds high tones onto low ones irreversibly.',
          },
          {
            label: 'Step 4: Filter one copy and read the sinc sum',
            formula: `$$x(t) = \\sum_{n} x[n] \\, \\mathrm{sinc}\\left(\\frac{t - nT_{s}}{T_{s}}\\right)$$`,
            explanation: 'A brick-wall low-pass keeping only the central copy inverts replication back to the original spectrum. Its impulse response is the sinc kernel, so filtering the impulse train superposes shifted sincs weighted by $x[n]$. Each kernel equals one at its own sample and zero at all others, which is why samples interpolate perfectly.',
          },
        ],
        result: 'When $f_{s} > 2f_{m}$, spectral copies stay disjoint and ideal low-pass filtering rebuilds $x(t)$ exactly as a sinc-weighted sample sum; violating the rate causes aliasing that no later processing can undo.',
      },
    ],
    examples: [
      {
        title: 'Choose a safe sampling rate',
        problem: 'Signal holds tones at 3 kHz and 7 kHz. Pick $f_s$ and name the Nyquist frequency.',
        steps: [
          { label: 'Step 1', text: 'Find the top. ```text\nfm = 7 kHz  ->  Nyquist rate = 14 kHz\n```' },
          { label: 'Step 2', text: 'Choose strictly above: $f_s = 16\\,kHz$ (standard margin) gives Nyquist frequency $8\\,kHz$.' },
          { label: 'Step 3', text: 'Verify: both tones sit below $8\\,kHz$ — spectral copies centred at multiples of 16 kHz never overlap.' }
        ],
        result: 'Nyquist rate $14\\,kHz$; choose $f_s = 16\\,kHz$ with Nyquist frequency $8\\,kHz$.'
      },
      {
        title: 'Name the alias',
        problem: 'A $70\\,Hz$ tone is sampled at $f_s = 100\\,Hz$ with no pre-filter. What tone do the samples represent?',
        steps: [
          { label: 'Step 1', text: 'Check the ceiling. ```text\nfs/2 = 50 Hz < 70 Hz  ->  aliasing certain\n```' },
          { label: 'Step 2', text: 'Fold: $f_a = |70 - 100| = 30\\,Hz$ inside $[0, 50]$.' },
          { label: 'Step 3', text: 'Conclude: the sequence equals a genuine $30\\,Hz$ sampling — identity theft is complete and irreversible.' }
        ],
        result: 'Samples masquerade as $30\\,Hz$; only pre-filtering could have prevented it.'
      }
    ],
    keyTakeaways: [
      'Sample above twice the top frequency (Nyquist rate 2fm); Nyquist frequency fs/2 is the representable ceiling.',
      'Sampling replicates spectra per fs; overlap of copies is aliasing.',
      'Aliases fold via fa = |f − k·fs| into [0, fs/2]; f and fs − f always pair.',
      'Reconstruct with sinc interpolation (brick-wall low-pass); anti-alias filter before sampling — never after.'
    ],
    quiz: [
      // PYQ-pattern: Nyquist rate from maximum frequency
      {
        q: 'Highest frequency 7 kHz. Minimum safe sampling rate?',
        options: ['7 kHz', '3.5 kHz', 'Above 14 kHz (Nyquist rate 2fm)', '28 Hz'],
        answer: 2,
        explanation: 'Step 1: Nyquist rate is twice the maximum: 14 kHz. Step 2: The theorem needs strictly greater to protect the boundary. Step 3: So any rate above 14 kHz works.'
      },
      // PYQ-pattern: alias computation for undersampled tones
      {
        q: '70 Hz tone sampled at fs = 100 Hz appears as?',
        options: ['30 Hz alias (|70 − 100|)', '70 Hz (no alias)', '170 Hz sum', '0 Hz (DC)'],
        answer: 0,
        explanation: 'Step 1: Nyquist ceiling is 50 Hz < 70 Hz. Step 2: Fold with k = 1: |70 − 100| = 30. Step 3: 30 Hz lies in range, so samples read as 30 Hz.'
      },
      {
        q: 'Why must the anti-alias filter come before the sampler?',
        options: [
          'Because digital filters cannot run fast',
          'Because once folded, alias and true signal are inseparable — only pre-filtering removes the impostors',
          'Because samplers need amplified input',
          'Because reconstruction needs noise'
        ],
        answer: 1,
        explanation: 'Step 1: Undersampling merges copies irreversibly. Step 2: Post-sampling data cannot label which copy a tone came from. Step 3: Only analog pre-filtering deletes out-of-band highs before they fold.' // note: keep ASCII below
      },
      {
        q: 'Ideal reconstruction from samples uses?',
        options: [
          'Nearest-neighbour hold exactly',
          'Differentiation per sample',
          'Squaring each sample value',
          'Weighted sinc interpolation (brick-wall low-pass keeping the central spectral copy)'
        ],
        answer: 3,
        explanation: 'Step 1: Samples fix values at instants nTs. Step 2: Sinc kernels vanish at all other sample instants. Step 3: Their superposition interpolates the unique bandlimited waveform.'
      }
    ]
  }
]

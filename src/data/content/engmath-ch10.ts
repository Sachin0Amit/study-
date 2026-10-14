import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 10: Fourier Series, Transforms, DFT, Z
// Sections 10.1 – 10.4. Master study content.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh10Content: SectionContent[] = [
  // ---------------------------------------------------------------- 10.1
  {
    sectionId: 'engmath-ch10-s1',
    readingTime: 9,
    intro: 'Fourier series decompose periodic waveforms into harmonic sines and cosines whose coefficients measure resonance with each frequency. Evenness, oddness and half-range choices simplify the spectrum dramatically. This section builds the Euler coefficient formulas, symmetry shortcuts, Parseval energy balance and convergence behavior at jumps.',
    objectives: [
      'Compute $a_{0}$, $a_{n}$ and $b_{n}$ for piecewise smooth $T$-periodic functions',
      'Exploit even, odd and half-range symmetry to kill whole coefficient families',
      'Apply Parseval energy identity and Dirichlet convergence at discontinuities'
    ],
    concepts: [
      {
        term: 'Fourier series and Euler formulas',
        kind: 'definition',
        statement: 'A $2L$-periodic $f$ owns **$f(x) = a_{0}/2 + \\sum_{n=1}^{\\infty} [a_{n}\\cos(n\\pi x/L) + b_{n}\\sin(n\\pi x/L)]$** with Euler integrals `an_bn` given by $a_{n} = \\frac{1}{L}\\int_{-L}^{L} f(x)\\cos(n\\pi x/L)\\,dx$ and $b_{n} = \\frac{1}{L}\\int_{-L}^{L} f(x)\\sin(n\\pi x/L)\\,dx$. Orthogonality of harmonics over one period isolates each coefficient.',
        detail: 'Each integral projects $f$ onto one harmonic, exactly as dot products project vectors onto basis axes. The $a_{0}/2$ normalization keeps the constant formula consistent with $n = 0$. Piecewise smooth $f$ guarantees all integrals exist.'
      },
      {
        term: 'Even and odd symmetry',
        kind: 'method',
        statement: 'When $f$ is **even**, all $b_{n} = 0$ and $a_{n} = \\frac{2}{L}\\int_{0}^{L} f(x)\\cos(n\\pi x/L)\\,dx$ via `cosine_only`. When $f$ is **odd**, all $a_{n} = 0$ and $b_{n} = \\frac{2}{L}\\int_{0}^{L} f(x)\\sin(n\\pi x/L)\\,dx$ via `sine_only`. Symmetry halves the integration range and doubles the result.',
        detail: 'Even times odd integrates to zero over symmetric limits, killing the mismatched family. Square waves shifted to be odd need only sine terms, while triangular arches need only cosines. Always recenter or extend before invoking symmetry.'
      },
      {
        term: 'Half-range expansions',
        kind: 'method',
        statement: 'A function given only on $(0, L)$ extends to a **half-range** cosine series via even reflection or sine series via odd reflection, coded as `even_or_odd_extend`. Both represent $f$ on $(0, L)$ but differ outside. Boundary conditions select the extension matching the physics.',
        detail: 'Even extension forces zero slope at the ends, suiting insulated boundaries, while odd extension forces zero value, suiting fixed ends. Coefficients follow the even or odd formulas on $(0, L)$. The two series coincide inside but diverge outside the base interval.'
      },
      {
        term: 'Parseval energy identity',
        kind: 'theorem',
        statement: 'Energy balances as **$\\frac{1}{L}\\int_{-L}^{L} f(x)^{2}\\,dx = a_{0}^{2}/2 + \\sum_{n=1}^{\\infty} (a_{n}^{2} + b_{n}^{2})$** through `energy_sum`. Truncation error equals the tail energy of dropped harmonics. It also sums numerical series by feeding known coefficient spectra.',
        detail: 'Orthogonality kills cross terms when squaring the series and integrating termwise. For the sawtooth this yields $\\sum 1/n^{2} = \\pi^{2}/6$. Power calculations in circuits read mean-square voltage directly from harmonic amplitudes.'
      },
      {
        term: 'Dirichlet convergence at jumps',
        kind: 'theorem',
        statement: 'At a point of continuity the series converges to **$f(x)$**, while at a jump it converges to the **midpoint** $[f(x^{+}) + f(x^{-})]/2$ via `jump_average`. Gibbs overshoot near jumps persists at about nine percent regardless of retained harmonics. Smoothness controls decay: jumps give $1/n$, kinks give $1/n^{2}$.',
        detail: 'Dirichlet needs piecewise monotonicity plus finitely many extrema and jumps per period. Continuous piecewise smooth functions converge uniformly on closed intervals avoiding jumps. Endpoint values on $[-L, L]$ converge to the periodic extension average.'
      }
    ],
    examples: [
      {
        title: 'Sine-only series of a square wave',
        problem: 'Find the Fourier series of the $2\\pi$-periodic odd square wave with $f(x) = 1$ on $(0, \\pi)$ and $f(x) = -1$ on $(-\\pi, 0)$.',
        steps: [
          { label: 'Step 1', text: 'Odd symmetry kills all $a_{n}$. With $L = \\pi$, $b_{n} = \\frac{2}{\\pi}\\int_{0}^{\\pi} 1 \\cdot \\sin nx\\,dx = \\frac{2}{n\\pi}[1 - \\cos n\\pi]$.\n```text\nodd -> an = 0; bn = (2/pi)*integral_0^pi sin(nx) dx\n```' },
          { label: 'Step 2', text: 'Since $\\cos n\\pi = (-1)^{n}$, even $n$ give $b_{n} = 0$ while odd $n = 2k + 1$ give $b_{n} = 4/[(2k+1)\\pi]$.' },
          { label: 'Step 3', text: 'Hence $f(x) = \\frac{4}{\\pi}\\sum_{k=0}^{\\infty} \\sin[(2k+1)x]/(2k+1)$. At jumps $x = 0$ and $\\pi$ the series converges to $0$, the midpoint average.' }
        ],
        result: 'Square wave equals $\\frac{4}{\\pi}[\\sin x + \\sin 3x/3 + \\sin 5x/5 + \\cdots]$, with only odd sine harmonics surviving.'
      },
      {
        title: 'Parseval sum of reciprocal squares',
        problem: 'Use the sawtooth $f(x) = x$ on $(-\\pi, \\pi)$ to evaluate $\\sum_{n=1}^{\\infty} 1/n^{2}$.',
        steps: [
          { label: 'Step 1', text: 'Odd $f$ gives $b_{n} = \\frac{2}{\\pi}\\int_{0}^{\\pi} x\\sin nx\\,dx = 2(-1)^{n+1}/n$, with all $a_{n} = 0$.' },
          { label: 'Step 2', text: 'Parseval left side is $\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} x^{2}\\,dx = 2\\pi^{2}/3$. Right side is $\\sum_{n=1}^{\\infty} 4/n^{2}$.' },
          { label: 'Step 3', text: 'Equate $2\\pi^{2}/3 = 4\\sum 1/n^{2}$ to get $\\sum_{n=1}^{\\infty} 1/n^{2} = \\pi^{2}/6$.\n```text\n(1/pi)*integral x^2 = 2pi^$2/3$ = sum 4/n^2 -> sum = pi^$2/6$\n```' }
        ],
        result: '$\\sum_{n=1}^{\\infty} 1/n^{2} = \\pi^{2}/6$ follows from equating time-domain energy to harmonic energy.'
      }
    ],
    keyTakeaways: [
      'Euler $a_{n} = \\frac{1}{L}\\int_{-L}^{L} f\\cos$ and $b_{n} = \\frac{1}{L}\\int_{-L}^{L} f\\sin$ project onto each harmonic.',
      'Even kills $b_{n}$ leaving cosines; odd kills $a_{n}$ leaving sines, with range halved to $(0, L)$.',
      'Half-range cosine versus sine extensions both match on $(0, L)$ but enforce different end behavior.',
      'Parseval $\\frac{1}{L}\\int f^{2} = a_{0}^{2}/2 + \\sum (a_{n}^{2} + b_{n}^{2})$ balances energy; jumps converge to midpoint averages.'
    ],
    quiz: [
      {
        q: 'For $2\\pi$-periodic odd $f$, which coefficients vanish?',
        options: ['All $b_{n}$', 'Only $a_{0}$', 'All $a_{n}$ including $a_{0}$', 'None vanish'],
        answer: 2,
        explanation: 'Step 1: Multiply odd $f$ by even $\\cos nx$ to get an odd integrand. Step 2: Integrate symmetrically to zero for every $n$. Step 3: Retain sine terms since odd times odd is even with nonzero mean.'
      },
      {
        // PYQ-pattern: GATE 2013 — Fourier coefficients of a square wave (rephrased, values changed)
        q: 'Odd square wave $f = 1$ on $(0, \\pi)$, $-1$ on $(-\\pi, 0)$ has $b_{n}$ equal to:',
        options: [`$0$ for all $n$`, `$4/(n\\pi)$ for odd $n$ and $0$ for even $n$`, `$2/(n\\pi)$ for all $n$`, `$1/n^{2}$`],
        answer: 1,
        explanation: 'Step 1: Evaluate $b_{n} = 2[1 - (-1)^{n}]/(n\\pi)$ from the sine integral. Step 2: Cancel even $n$ where $(-1)^{n} = 1$. Step 3: Double to $4/(n\\pi)$ for odd $n$ where $(-1)^{n} = -1$.'
      },
      {
        q: 'At a jump $x_{0}$ with $f(x_{0}^{-}) = 0$ and $f(x_{0}^{+}) = 2$, the Fourier series converges to:',
        options: [`$0$`, `$2$`, 'It diverges everywhere', `$1$`],
        answer: 3,
        explanation: 'Step 1: Recall Dirichlet midpoint rule for jump points. Step 2: Average $(0 + 2)/2 = 1$. Step 3: Distinguish from continuity points where the value $f(x_{0})$ is reproduced.'
      },
      {
        q: 'Parseval identity for $f(x) = x$ on $(-\\pi, \\pi)$ yields $\\sum 1/n^{2}$ equal to:',
        options: [`$\\pi^{2}/6$`, `$\\pi^{2}/3$`, `$\\pi/4$`, `$1$`],
        answer: 0,
        explanation: 'Step 1: Compute time energy $\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} x^{2}\\,dx = 2\\pi^{2}/3$. Step 2: Insert $b_{n} = 2(-1)^{n+1}/n$ so harmonic energy is $4\\sum 1/n^{2}$. Step 3: Solve $4S = 2\\pi^{2}/3$ to get $S = \\pi^{2}/6$.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Pointwise and mean-square convergence',
        blocks: [
          {
            kind: 'theorem',
            body: 'For $2\\pi$ periodic integrable $f$ with Fourier coefficients $a_{n}, b_{n}$, the **Dirichlet Jordan** test gives pointwise convergence to $(f(x^{+}) + f(x^{-}))/2$ at points where $f$ has left and right limits and bounded variation nearby. Globally the trig system is complete in $L^{2}$: **Parseval** $(1/\\pi) \\int_{-\\pi}^{\\pi} |f|^{2} = a_{0}^{2}/2 + \\sum_{n \\geq 1} (a_{n}^{2} + b_{n}^{2})$ holds, and partial sums converge in mean square for every $L^{2}$ function. Smoothness governs rates: $C^{k}$ gives $a_{n}, b_{n} = O(n^{-k})$, analytic gives exponential decay.'
          },
          {
            kind: 'proof',
            body: 'Partial sums convolve with the Dirichlet kernel $D_{N}(t) = \\sin((N+1/2)t)/\\sin(t/2)$ as $S_{N}(x) - f(x) = (2\\pi)^{-1} \\int_{-\\pi}^{\\pi} (f(x-t)-f(x)) D_{N}(t) \\, dt$. Riemann Lebesgue kills the rapidly oscillating tail when $(f(x-t)-f(x))/\\sin(t/2)$ is of bounded variation, giving pointwise convergence. Bessel inequality $\\sum_{n \\leq N} |c_{n}|^{2} \\leq \\|f\\|_{2}^{2}$ follows from nonnegativity of $\\|f - S_{N}\\|_{2}^{2}$; completeness of exponentials via Stone Weierstrass or Fejer upgrades Bessel to Parseval equality, the $L^{2}$ Pythagorean theorem.'
          },
          {
            kind: 'example',
            heading: 'A square wave overshoots by nine percent forever',
            body: 'The odd square wave has $b_{n} = 4/(\\pi n)$ for odd $n$ and $0$ for even $n$. Partial sums overshoot the jump by $G \\approx 0.0895$ times the jump height, the **Gibbs phenomenon**, and the overshoot location squeezes toward the jump as $N$ grows without shrinking in height. Hence convergence is nonuniform near discontinuities. Fejer Cesaro means $\\sigma_{N} = (S_{0} + \\cdots + S_{N})/(N+1)$ convolve with a positive kernel and converge uniformly for continuous $f$, trading ringing for smoothing.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 10.2
  {
    sectionId: 'engmath-ch10-s2',
    readingTime: 9,
    intro: 'Letting period tend to infinity turns harmonic sums into Fourier integrals pairing time decay with frequency smoothness. Duality swaps the roles of the two domains, while sampling theory fixes the bridge to discrete time. This section states transform pairs, duality, bandwidth-duration reciprocity and the Nyquist anti-aliasing rule.',
    objectives: [
      'Apply $F(\\omega) = \\int_{-\\infty}^{\\infty} f(t)e^{-i\\omega t}\\,dt$ and its inverse to standard pulses',
      'Use duality, shifting, scaling and differentiation properties to avoid re-integration',
      'State Nyquist $f_{s} > 2f_{m}$ sampling and diagnose aliasing from spectra'
    ],
    concepts: [
      {
        term: 'Fourier transform pair',
        kind: 'definition',
        statement: 'The **pair** $F(\\omega) = \\int_{-\\infty}^{\\infty} f(t)e^{-i\\omega t}\\,dt$ and $f(t) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} F(\\omega)e^{i\\omega t}\\,d\\omega$ is coded as `FT_and_IFT`. Absolute integrability $\\int |f| < \\infty$ guarantees continuity of $F$. Rectangular pulses transform to sinc shapes and conversely.',
        detail: 'The $1/(2\\pi)$ normalization sits on the inverse in this convention; other texts split it symmetrically. Exponent signs distinguish forward ($-i$) from inverse ($+i$). Gaussian $e^{-at^{2}}$ maps to a Gaussian, the fixed point of the transform.'
      },
      {
        term: 'Duality and operational rules',
        kind: 'theorem',
        statement: 'The **duality** $F(t) \\leftrightarrow 2\\pi f(-\\omega)$ swaps domains up to scaling via `swap_domains`. Shifts give $f(t - t_{0}) \\leftrightarrow e^{-i\\omega t_{0}}F(\\omega)$, scaling gives $f(at) \\leftrightarrow F(\\omega/a)/|a|$, and $f^{\\prime}(t) \\leftrightarrow i\\omega F(\\omega)$. Each avoids fresh integration.',
        detail: 'Duality turns a known pulse-to-sinc pair into the reverse sinc-to-pulse pair. Time differentiation becomes frequency multiplication, dual to frequency differentiation $(-it)f(t) \\leftrightarrow F^{\\prime}(\\omega)$. Convolution in one domain becomes multiplication in the other.'
      },
      {
        term: 'Bandwidth-duration reciprocity',
        kind: 'insight',
        statement: 'Narrowing in time **widens** in frequency with product lower bounded, remembered as `narrow_wide_dual`. Short pulses need broad spectra and pure tones need long observation. The Gaussian attains the minimum uncertainty product.',
        detail: 'Scaling $f(at)$ compresses time by $a$ while stretching $F$ by $1/a$ with amplitude $1/|a|$. Ideal impulses ($\\delta$) and constants ($2\\pi\\delta(\\omega)$) are the extreme dual pair. This tradeoff governs pulse design in signaling.'
      },
      {
        term: 'Sampling theorem',
        kind: 'theorem',
        statement: 'A signal bandlimited to $|f| < f_{m}$ is fixed by samples spaced $T_{s} = 1/f_{s}$ when **$f_{s} > 2f_{m}$**, coded as `fs_gt_2fm`. Reconstruction sums $\\sum x[n]\\,\\mathrm{sinc}((t - nT_{s})/T_{s})$. Equality $f_{s} = 2f_{m}$ is the Nyquist rate, the minimum alias-free speed.',
        detail: 'Sampling replicates spectra at multiples of $f_{s}$; sufficient spacing keeps replicas disjoint. The sinc kernel interpolates between samples with zero crossings at neighbors. Non-bandlimited inputs need prefiltering before the theorem applies.'
      },
      {
        term: 'Aliasing and anti-alias filtering',
        kind: 'insight',
        statement: 'Undersampling folds high frequencies onto **aliases** $f_{alias} = |f - kf_{s}|$ inside $[-f_{s}/2, f_{s}/2]$ via `fold_to_baseband`. An **anti-alias** low-pass with cutoff $f_{s}/2$ before sampling removes the folders. Once folded, alias distortion cannot be undone digitally.',
        detail: 'A $7$ kHz tone sampled at $10$ kHz appears at $3$ kHz, indistinguishable from a genuine $3$ kHz tone. Guard bands between $f_{m}$ and $f_{s}/2$ ease filter roll-off. Oversampling plus sharp digital decimation implements the same protection.'
      }
    ],
    examples: [
      {
        title: 'Transform of a rectangular pulse',
        problem: 'Find $F(\\omega)$ for $f(t) = 1$ on $|t| < 1$ and $0$ elsewhere.',
        steps: [
          { label: 'Step 1', text: 'Integrate $F(\\omega) = \\int_{-1}^{1} e^{-i\\omega t}\\,dt = [e^{-i\\omega t}/(-i\\omega)]_{-1}^{1}$ for $\\omega \\ne 0$.\n```text\nF = integral_{-1}^{1} e^{-iwt} dt = 2 sin(w)/w\n```' },
          { label: 'Step 2', text: 'Simplify to $2\\sin\\omega/\\omega = 2\\,\\mathrm{sinc}(\\omega/\\pi)$ up to normalization. At $\\omega = 0$ continuity gives $F(0) = 2$, the pulse area.' },
          { label: 'Step 3', text: 'Duality then gives the reverse pair: a $2\\sin(Wt)/(\\pi t)$-type sinc in time maps to a rectangular band in frequency.' }
        ],
        result: '$F(\\omega) = 2\\sin\\omega/\\omega$ with $F(0) = 2$. Narrower pulses widen this sinc proportionally.'
      },
      {
        title: 'Aliasing diagnosis for a two-tone input',
        problem: 'Tones at $3$ kHz and $7$ kHz are sampled at $f_{s} = 10$ kHz without prefiltering. Identify observed baseband frequencies.',
        steps: [
          { label: 'Step 1', text: 'Nyquist is $f_{s}/2 = 5$ kHz. The $3$ kHz tone lies inside and is preserved veridically.' },
          { label: 'Step 2', text: 'The $7$ kHz tone exceeds Nyquist. Fold with $k = 1$: $|7 - 10| = 3$ kHz, landing on top of the genuine tone.' },
          { label: 'Step 3', text: 'Baseband shows a single reinforced $3$ kHz line; the $7$ kHz presence is recoverable only by raising $f_{s}$ above $14$ kHz or prefiltering.\n```text\nNyquist 5 kHz; 7 kHz folds to |7-10| = 3 kHz alias\n```' }
        ],
        result: 'Observed spectrum shows $3$ kHz only, with $7$ kHz masquerading as $3$ kHz. Minimum alias-free rate for both tones is $14$ kHz.'
      }
    ],
    keyTakeaways: [
      'Pair $F(\\omega) = \\int f(t)e^{-i\\omega t}\\,dt$ and $f = \\frac{1}{2\\pi}\\int F e^{i\\omega t}\\,d\\omega$ links pulses to sinc shapes.',
      'Duality $F(t) \\leftrightarrow 2\\pi f(-\\omega)$ plus shift, scale and $i\\omega$ derivative rules remove repeated integrals.',
      'Narrow time means wide frequency with uncertainty lower bound attained by Gaussians.',
      'Alias-free sampling needs $f_{s} > 2f_{m}$ with anti-alias cutoff $f_{s}/2$; folds follow $|f - kf_{s}|$.'
    ],
    quiz: [
      {
        q: 'Fourier transform of $\\delta(t)$ (unit impulse at $0$) equals:',
        options: [`$1$ for all $\\omega$`, `$0$`, `$2\\pi\\delta(\\omega)$`, `$e^{-i\\omega}$`],
        answer: 0,
        explanation: 'Step 1: Sift $\\int \\delta(t)e^{-i\\omega t}\\,dt = e^{0} = 1$. Step 2: Note flat unit spectrum reflects zero duration needing infinite bandwidth. Step 3: Reserve $2\\pi\\delta(\\omega)$ for the dual constant-one signal.'
      },
      {
        // PYQ-pattern: GATE 2016 — Nyquist sampling rate (rephrased, values changed)
        q: 'A signal bandlimited to $5$ kHz needs minimum alias-free sampling rate:',
        options: ['$5$ kHz', '$10$ kHz', '$2.5$ kHz', 'Above $10$ kHz'],
        answer: 3,
        explanation: 'Step 1: Identify $f_{m} = 5$ kHz as the highest present frequency. Step 2: Form Nyquist $2f_{m} = 10$ kHz as the boundary rate. Step 3: Require strictly above $10$ kHz since equality admits phase-dependent cancellation.'
      },
      {
        q: 'If $f(t) \\leftrightarrow F(\\omega)$, then $f(t - 2) \\leftrightarrow$:',
        options: ['$e^{i2\\omega}F(\\omega)$ with opposite sign', `$e^{-i2\\omega}F(\\omega)$`, `$F(\\omega - 2)$`, `$F(\\omega)/2$`],
        answer: 1,
        explanation: 'Step 1: Substitute $\\tau = t - 2$ to factor $e^{-i\\omega 2}$. Step 2: Keep $F(\\omega)$ multiplied by the linear-phase exponential. Step 3: Distinguish from frequency shift, which modulates in time instead.'
      },
      {
        q: 'Sampling $7$ kHz at $f_{s} = 10$ kHz without prefiltering shows:',
        options: ['$7$ kHz veridically', '$17$ kHz sum', `$3$ kHz alias from $|7 - 10|$`, 'No output at all'],
        answer: 2,
        explanation: 'Step 1: Compare $7$ kHz against Nyquist $5$ kHz to detect undersampling. Step 2: Fold once with $k = 1$ to $|7 - 10| = 3$ kHz. Step 3: Conclude the digital record cannot separate this alias from a genuine $3$ kHz tone.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Fourier transform on Schwartz space and Plancherel',
        blocks: [
          {
            kind: 'theorem',
            body: 'With $\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx$ for Schwartz $f$, the Fourier map is a bijection of Schwartz space with inversion $f(x) = \\int_{-\\infty}^{\\infty} \\hat{f}(\\xi) e^{2\\pi i x \\xi} \\, d\\xi$. **Plancherel** extends it to a unitary operator on $L^{2}$: $\\int |\\hat{f}|^{2} = \\int |f|^{2}$ and $\\int f \\bar{g} = \\int \\hat{f} \\bar{\\hat{g}}$. Bandwidth duration reciprocity is quantitative: narrow in time means wide in frequency. Tempered distributions extend the calculus to impulses with $\\hat{\\delta} = 1$ and $\\hat{1} = \\delta$.'
          },
          {
            kind: 'derivation',
            body: 'Operational rules follow from changes of variables: delay $f(t-t_{0})$ gives $e^{-2\\pi i \\xi t_{0}} \\hat{f}(\\xi)$, scaling $f(a t)$ gives $|a|^{-1} \\hat{f}(\\xi/a)$, differentiation $f^{{\\prime}}$ gives $2\\pi i \\xi \\hat{f}(\\xi)$, and multiplication by $t$ gives $(2\\pi i)^{-1} d\\hat{f}/d\\xi$. **Duality** $f(t) \\leftrightarrow \\hat{f}(-\\omega)$ up to $2\\pi$ factors is proved on Gaussians and extended by density. The Gaussian $e^{-\\pi x^{2}}$ is a fixed point: completing the square in $\\int e^{-\\pi x^{2} - 2\\pi i x \\xi} \\, dx$ yields $e^{-\\pi \\xi^{2}}$, the seed for inversion and Plancherel via approximate identities.'
          },
          {
            kind: 'remark',
            body: 'Heisenberg uncertainty $\\Delta x \\, \\Delta \\xi \\geq 1/(4\\pi)$ is Cauchy Schwarz on $x f$ and $f^{{\\prime}}$, with Gaussians as extremals. Shannon sampling says $B$ bandlimited $f$ is fixed by samples spaced $1/(2B)$ apart via $\\mathrm{sinc}$ interpolation, and aliasing is the frequency folding when $f_{s} < 2B$. Fast algorithms exploit the same duality: the FFT factors the DFT matrix into $\\log N$ sparse stages, reducing $O(N^{2})$ to $O(N \\log N)$ and enabling modern spectral PDE solvers.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 10.3
  {
    sectionId: 'engmath-ch10-s3',
    readingTime: 8,
    intro: 'Discrete-time spectra repeat periodically because sampled exponentials alias modulo the sampling rate. The DTFT describes all such spectra continuously, while the DFT samples the spectrum for finite blocks. This section defines both, lists shift and convolution properties and explains FFT speed plus zero-padding interpolation.',
    objectives: [
      'State DTFT $X(e^{i\\omega}) = \\sum_{n} x[n]e^{-i\\omega n}$ and its $2\\pi$ periodicity',
      'Compute $N$-point DFT values and apply circular-shift and convolution rules',
      'Explain FFT $N\\log N$ savings and zero-padding spectral interpolation'
    ],
    concepts: [
      {
        term: 'DTFT of sampled signals',
        kind: 'definition',
        statement: 'The **DTFT** $X(e^{i\\omega}) = \\sum_{n=-\\infty}^{\\infty} x[n]e^{-i\\omega n}$ sums sampled values against discrete exponentials `sum_xn_exp`. It is $2\\pi$-periodic in $\\omega$ because $e^{-i(\\omega + 2\\pi)n} = e^{-i\\omega n}$. Absolute summability guarantees continuity.',
        detail: 'Periodicity is aliasing in disguise: frequencies differing by $2\\pi$ are identical on samples. Time shifts become $e^{-i\\omega k}$ multipliers. Rectangular windows produce Dirichlet kernels with sidelobe leakage.'
      },
      {
        term: 'DFT for finite blocks',
        kind: 'definition',
        statement: 'The $N$-point **DFT** $X[k] = \\sum_{n=0}^{N-1} x[n]e^{-i2\\pi kn/N}$ samples one DTFT period at `k_over_N` bins. Inversion averages as $x[n] = \\frac{1}{N}\\sum_{k=0}^{N-1} X[k]e^{i2\\pi kn/N}$. Bin $k$ means digital frequency $2\\pi k/N$.',
        detail: 'The DFT treats the block as one period of an $N$-periodic extension. Zero-padding appends zeros before transforming to interpolate between bins. Truncation without windows smears energy across bins as leakage.'
      },
      {
        term: 'Shift and convolution properties',
        kind: 'theorem',
        statement: 'Circular shifts obey **$x[(n - m) \\bmod N] \\leftrightarrow e^{-i2\\pi km/N}X[k]$** via `circular_phase`. Circular convolution in time maps to pointwise products $X[k]H[k]$. Linear convolution matches circular when blocks are zero-padded to length sum minus one.',
        detail: 'Modulo indexing wraps values around block ends, unlike linear shifts. Fast convolution exploits the product rule with two FFTs and one inverse. Symmetry $x[N - n]$ mirrors spectra for real inputs with conjugate symmetry.'
      },
      {
        term: 'FFT complexity gain',
        kind: 'insight',
        statement: 'Direct DFT costs **$O(N^{2})$** operations while **FFT** costs $O(N\\log N)$ by recursive even-odd splitting `even_odd_split`. Radix-two lengths maximize reuse of twiddle factors. Real-valued FFT packs two sequences into one complex run for a further halving.',
        detail: 'Danielson-Lanczos recursion halves the problem until length-one trivial transforms remain. For $N = 1024$ the saving exceeds a factor of one hundred. Libraries select mixed radices automatically for composite lengths.'
      },
      {
        term: 'Zero padding and windowing',
        kind: 'method',
        statement: '**Zero padding** appends zeros to length $M > N$ before the DFT, interpolating the DTFT on a finer `denser_grid`. It never adds true resolution set by observation time. **Windowing** tapers block ends with Hann or Hamming shapes to suppress leakage sidelobes.',
        detail: 'Padding reveals hidden peak shapes between coarse bins without separating close tones. Windows trade main-lobe width for sidelobe drop: Hann cuts the first sidelobe dramatically at modest widening. Always window before padding when leakage dominates.'
      }
    ],
    examples: [
      {
        title: 'Four-point DFT of a short pulse',
        problem: 'Compute the $4$-point DFT of $x = [1, 1, 0, 0]$.',
        steps: [
          { label: 'Step 1', text: 'Use $X[k] = \\sum_{n=0}^{1} e^{-i\\pi kn/2}$ since only $n = 0$ and $1$ contribute.\n```text\nX[k] = 1 + exp(-i*pi*k/2), k = 0..3\n```' },
          { label: 'Step 2', text: 'Evaluate: $X[0] = 2$, $X[1] = 1 - i$, $X[2] = 0$, $X[3] = 1 + i$. Conjugate symmetry $X[3] = \\overline{X[1]}$ reflects real input.' },
          { label: 'Step 3', text: 'Magnitudes $|X| = [2, \\sqrt{2}, 0, \\sqrt{2}]$ show null at bin $2$ where the two ones cancel half-period shifted.' }
        ],
        result: 'DFT is $[2, 1 - i, 0, 1 + i]$. Zero at $k = 2$ encodes half-block cancellation.'
      },
      {
        title: 'Zero padding reveals a hidden peak',
        problem: 'A $4$-point block sampled from $\\cos(2\\pi \\cdot 0.3 n)$ shows smeared bins. Explain how padding to $16$ points helps and what it cannot do.',
        steps: [
          { label: 'Step 1', text: 'Coarse bins sit at multiples of $1/4 = 0.25$ cycles per sample, straddling the true $0.3$ tone between bins $1$ and $2$.' },
          { label: 'Step 2', text: 'Padding to $16$ places bins every $1/16 = 0.0625$, with a bin near $0.3125$ close to the tone, so the interpolated Dirichlet shape peaks visibly.' },
          { label: 'Step 3', text: 'True resolution still spans $1/4$ set by four nonzero samples: two tones within $0.1$ remain fused with or without padding.\n```text\nbins 0.25 steps -> 0.0625 steps; peak visible, resolution still 0.25\n```' }
        ],
        result: 'Padding interpolates the DTFT onto denser bins for readable peaks but cannot separate tones closer than the $1/N$ observation limit.'
      }
    ],
    keyTakeaways: [
      'DTFT $X(e^{i\\omega}) = \\sum_{n} x[n]e^{-i\\omega n}$ is $2\\pi$-periodic from sample aliasing.',
      'DFT $X[k] = \\sum_{n=0}^{N-1} x[n]e^{-i2\\pi kn/N}$ samples one spectral period with $1/N$ inversion.',
      'Circular shift maps to phase $e^{-i2\\pi km/N}$ and circular convolution maps to products $X[k]H[k]$.',
      'FFT cuts $O(N^{2})$ to $O(N\\log N)$; padding interpolates bins while windows tame leakage.'
    ],
    quiz: [
      {
        q: 'DTFT $X(e^{i\\omega})$ as a function of $\\omega$ is:',
        options: ['Nonperiodic with infinite support', 'A polynomial in $\\omega$', 'Zero for $|\\omega| > \\pi$ always', '$2\\pi$-periodic'],
        answer: 3,
        explanation: 'Step 1: Shift $\\omega$ by $2\\pi$ to multiply each term by $e^{-i2\\pi n} = 1$. Step 2: Conclude all integer $n$ terms repeat identically. Step 3: Interpret as sampled-frequency aliasing modulo $2\\pi$.'
      },
      {
        // PYQ-pattern: GATE 2014 — DFT of a short sequence (rephrased, values changed)
        q: 'Four-point DFT of $[1, 1, 0, 0]$ at $k = 1$ equals:',
        options: [`$1 - i$`, `$2$`, `$0$`, `$1 + i$`],
        answer: 0,
        explanation: 'Step 1: Sum $1 + e^{-i\\pi/2}$ from the two nonzero taps. Step 2: Evaluate $e^{-i\\pi/2} = -i$. Step 3: Add to get $1 - i$ with magnitude $\\sqrt{2}$.'
      },
      {
        q: 'Circular convolution $x \\circledast h$ of length $N$ satisfies in DFT domain:',
        options: [`$X[k] + H[k]$`, `$X[k]/H[k]$`, '$X[k]H[k]$ pointwise', `$\\max(X[k], H[k])$`],
        answer: 2,
        explanation: 'Step 1: Expand circular convolution and swap sums to factor exponentials. Step 2: Recognize the product of the two DFT sums at each bin. Step 3: Use the product for fast convolution via FFT pairs.'
      },
      {
        q: 'Zero padding a length-$N$ block to $M > N$ before DFT:',
        options: ['Improves true frequency resolution set by $N$', 'Interpolates the DTFT on denser bins without new resolution', 'Removes the need for windowing', 'Changes the time values themselves'],
        answer: 1,
        explanation: 'Step 1: Note observation time $N$ fixes the Dirichlet main-lobe width. Step 2: Observe padding samples the same DTFT at more frequencies. Step 3: Conclude peaks read more smoothly but close tones stay fused.'
      }
    ]
  },
  // ---------------------------------------------------------------- 10.4
  {
    sectionId: 'engmath-ch10-s4',
    readingTime: 9,
    intro: 'The z-transform extends discrete spectra with a complex variable whose magnitude tracks growth and decay. Its region of convergence encodes causality, stability and uniqueness of inversion. This section defines the transform, maps poles to ROC shapes and solves linear recurrences by partial fractions.',
    objectives: [
      'Compute $X(z) = \\sum_{n} x[n]z^{-n}$ for standard one-sided sequences',
      'Read causality and stability from ROC geometry relative to poles',
      'Solve constant-coefficient difference equations via $z$-algebra and inversion'
    ],
    concepts: [
      {
        term: 'Z-transform definition',
        kind: 'definition',
        statement: 'The **z-transform** $X(z) = \\sum_{n=-\\infty}^{\\infty} x[n]z^{-n}$ weights samples by powers `z_pow_minus_n`. One-sided causal sums start at $n = 0$. Geometric series give $a^{n}u[n] \\leftrightarrow 1/(1 - az^{-1})$ for $|z| > |a|$.',
        detail: 'Writing $z = re^{i\\omega}$ exposes $r^{-n}$ growth control times DTFT oscillation $e^{-i\\omega n}$. The variable $z^{-1}$ is the unit delay operator. Linearity holds on the overlap of convergence regions.'
      },
      {
        term: 'Region of convergence',
        kind: 'definition',
        statement: 'The **ROC** is the set of $z$ where the series converges absolutely, drawn as `rings_and_disks`. It never contains poles and is bounded by them. Right-sided sequences give exterior $|z| > r_{max}$, left-sided give interior $|z| < r_{min}$, and two-sided give rings.',
        detail: 'Same $X(z)$ with different ROCs inverts to different $x[n]$, so the pair is incomplete without it. Finite-length sequences converge everywhere except possibly $0$ or infinity. Rational ROC edges always pass through poles.'
      },
      {
        term: 'Causality and stability from ROC',
        kind: 'theorem',
        statement: 'A sequence is **causal** (right-sided) exactly when the ROC is exterior including infinity via `exterior_includes_inf`. It is **stable** (absolutely summable) exactly when the ROC includes the unit circle $|z| = 1$. Causal plus stable means all poles inside $|z| < 1$.',
        detail: 'Exterior ROC permits Laurent expansion in $z^{-1}$ matching causal powers. Unit-circle inclusion makes the DTFT exist as $X(e^{i\\omega})$. A pole on $|z| = 1$ gives marginal oscillation without absolute summability.'
      },
      {
        term: 'Inverse by partial fractions',
        kind: 'method',
        statement: 'Write $X(z)/z$ in **partial fractions** and multiply back by $z$ to match $z/(z - p)$ forms via `X_over_z_split`. Each $z/(z - p)$ with $|z| > |p|$ inverts to $p^{n}u[n]$. ROC selects $u[n]$ versus $-u[-n-1]$ for each term.',
        detail: 'Dividing by $z$ first avoids $z^{2}$ numerators that match no table entry. Repeated poles add $n p^{n}$ terms with $z p/(z - p)^{2}$ images. Always annotate each term with its ROC before combining.'
      },
      {
        term: 'Difference-equation solution',
        kind: 'method',
        statement: 'Shifting maps as **$x[n - k] \\leftrightarrow z^{-k}X(z)$** plus initial terms for one-sided use, coded as `delay_by_zk`. Constant-coefficient recurrences become rational $X(z) = N(z)/D(z)$ solved by algebra. Inversion then yields homogeneous plus forced modes.',
        detail: 'For $y[n] - ay[n-1] = x[n]$ one gets $(1 - az^{-1})Y = X$ under zero rest. Characteristic roots are denominator zeros, dual to $s$-poles in continuous time. Initial rest removes the extra initial-condition polynomial.'
      }
    ],
    derivations: [
      {
        title: 'Exterior ROC Characterises Causal Sequences',
        statement: 'Derivation of the rule that $x[n] = 0$ for $n < 0$ exactly when the ROC is $|z| > r_{\\max}$ including $z = \\infty$',
        prerequisites: [
          'Geometric series $\\sum_{n=0}^{\\infty}w^{n} = \\frac{1}{1-w}$ for $|w| < 1$',
          'Definition $X(z) = \\sum_{n}x[n]z^{-n}$ with ROC of absolute convergence',
          'Boundedness of $X(z)$ at $z = \\infty$ for causal sums',
        ],
        steps: [
          {
            label: 'Step 1: Transform the causal exponential prototype',
            formula: '$$X(z) = \\sum_{n=0}^{\\infty}a^{n}z^{-n} = \\sum_{n=0}^{\\infty}(az^{-1})^{n}$$',
            explanation: 'Insert $x[n] = a^{n}u[n]$ into the definition, where $u[n]$ restricts the sum to $n \\ge 0$. This works because causality truncates all negative-time terms, leaving a one-sided power series in $z^{-1}$. The common ratio is $az^{-1}$, reducing ROC to a geometric question.',
          },
          {
            label: 'Step 2: Impose geometric convergence',
            formula: '$$|az^{-1}| < 1 \\iff |z| > |a|$$',
            explanation: 'The geometric series converges absolutely exactly when the ratio magnitude is below one. This condition works because comparison with a convergent real geometric series dominates the complex terms. Solving for $|z|$ turns the ratio test into an exterior disk bounded by the pole magnitude $|a|$.',
          },
          {
            label: 'Step 3: Sum in closed form and locate the pole',
            formula: '$$X(z) = \\frac{1}{1 - az^{-1}} = \\frac{z}{z - a}, \\quad |z| > |a|$$',
            explanation: 'Summing the convergent series gives $1$ over $1 - az^{-1}$, cleared to $z$ over $z - a$ with a single pole at $a$. This works because the geometric sum formula is valid precisely on the exterior found above. The ROC edge passes through the pole and excludes it, as analyticity demands.',
          },
          {
            label: 'Step 4: Extend from the prototype to all right-sided sequences',
            formula: '$$|z| > r_{\\max}, \\quad \\lim_{z \\to \\infty}X(z) < \\infty$$',
            explanation: 'A general causal sum involves only nonpositive powers $z^{-n}$ with $n \\ge 0$, so if it converges at some radius it converges outside that radius by termwise domination. This works because larger $|z|$ only shrinks $|x[n]z^{-n}|$ for $n \\ge 0$, preserving absolute convergence outward to infinity. Hence causality is equivalent to an exterior ROC containing $z = \\infty$.',
          },
        ],
        result: 'Causal sequences have exterior ROC $|z| > r_{\\max}$ including infinity, meaning the pole pattern plus outward convergence certifies no nonzero values before time zero.',
      },
    ],
    examples: [
      {
        title: 'ROC pairing for anticausal versus causal exponentials',
        problem: 'Find $X(z)$ and ROC for (a) $x[n] = (1/2)^{n}u[n]$ and (b) $x[n] = -(1/2)^{n}u[-n-1]$.',
        steps: [
          { label: 'Step 1', text: 'Both sum geometric series with ratio $(1/2)z^{-1}$ or its inverse, giving $X(z) = 1/[1 - (1/2)z^{-1}] = z/(z - 1/2)$ in both cases.\n```text\nX(z) = z/(z - $1/2$); ROC differs by side\n```' },
          { label: 'Step 2', text: 'Causal (a) converges when $|(1/2)z^{-1}| < 1$, hence $|z| > 1/2$ exterior including infinity.' },
          { label: 'Step 3', text: 'Anticausal (b) converges for the reciprocal inequality $|z| < 1/2$ interior. Same rational function, disjoint ROCs, opposite time directions.' }
        ],
        result: 'Both give $z/(z - 1/2)$, with ROC $|z| > 1/2$ causal versus $|z| < 1/2$ anticausal. ROC alone disambiguates the inverse.'
      },
      {
        title: 'First-order recurrence via z-algebra',
        problem: 'Solve $y[n] - (1/2)y[n-1] = u[n]$ with zero rest, where $u[n]$ is the unit step.',
        steps: [
          { label: 'Step 1', text: 'Transform with delay: $(1 - (1/2)z^{-1})Y(z) = z/(z - 1)$. Thus $Y(z) = z^{2}/[(z - 1)(z - 1/2)]$ with ROC $|z| > 1$.' },
          { label: 'Step 2', text: 'Split $Y(z)/z = z/[(z-1)(z-1/2)] = 2/(z-1) - 1/(z-1/2)$ by cover-up. Multiply by $z$ to get $Y(z) = 2z/(z-1) - z/(z-1/2)$.' },
          { label: 'Step 3', text: 'Invert exterior terms to $y[n] = [2 - (1/2)^{n}]u[n]$. Steady $2$ plus decaying $(1/2)^{n}$ transient appear.\n```text\nY/z split -> 2/(z-1) - 1/(z-$1/2$); invert -> [2 - ($1/2$)^n]u[n]\n```' }
        ],
        result: '$y[n] = [2 - (1/2)^{n}]u[n]$ for zero rest. Pole at $1$ forces the step level, pole at $1/2$ supplies the transient.'
      }
    ],
    keyTakeaways: [
      'Definition $X(z) = \\sum x[n]z^{-n}$ gives $a^{n}u[n] \\leftrightarrow 1/(1 - az^{-1})$ for $|z| > |a|$.',
      'ROC rings avoid poles; exterior means right-sided, interior means left-sided.',
      'Causal plus stable holds exactly when all poles satisfy $|p| < 1$ with unit circle inside ROC.',
      'Split $X(z)/z$ then invert $z/(z-p)$; delays obey $x[n-k] \\leftrightarrow z^{-k}X(z)$.'
    ],
    quiz: [
      {
        q: '$X(z)$ for $x[n] = (1/3)^{n}u[n]$ with ROC is:',
        options: [`$z/(z - 1/3)$, $|z| < 1/3$`, `$z/(z - 1/3)$, $|z| > 1/3$`, `$1/(z - 1/3)$ for all $z$`, `$z/(z - 3)$, $|z| > 3$`],
        answer: 1,
        explanation: 'Step 1: Sum $\\sum_{n=0}^{\\infty} [(1/3)z^{-1}]^{n} = 1/[1 - (1/3)z^{-1}]$. Step 2: Clear to $z/(z - 1/3)$ with pole at $1/3$. Step 3: Impose exterior $|z| > 1/3$ for causal convergence.'
      },
      {
        // PYQ-pattern: GATE 2017 — ROC of a two-sided z-transform (rephrased, values changed)
        q: '$X(z) = z/(z - 1/2)$ with ROC $|z| < 1/2$ inverts to:',
        options: [`$(1/2)^{n}u[n]$`, `$(1/2)^{n}$ for all $n$`, `$-(1/2)^{n}u[-n-1]$`, `$0$`],
        answer: 2,
        explanation: 'Step 1: Note identical rational form to the causal pair but interior ROC. Step 2: Select the left-sided expansion in positive powers of $z$. Step 3: Obtain $-(1/2)^{n}u[-n-1]$ supported on negative time.'
      },
      {
        q: 'A causal LTI system is stable exactly when:',
        options: ['All poles satisfy $|p| < 1$ so ROC includes $|z| = 1$', 'All poles satisfy $|p| > 1$', 'ROC is $|z| < \\min|p|$', 'Numerator degree exceeds denominator degree'],
        answer: 0,
        explanation: 'Step 1: Combine causal exterior ROC with stability unit-circle inclusion. Step 2: Conclude exterior $|z| > \\max|p|$ must reach inward past $|z| = 1$. Step 3: Force $\\max|p| < 1$ so every pole hides inside the unit circle.'
      },
      {
        q: 'Zero-state $y[n] - (1/2)y[n-1] = x[n]$ has system function $H(z)$ equal to:',
        options: [`$1 - (1/2)z^{-1}$`, `$z^{-1}/2$`, '$(1/2)^{n}u[n]$ directly', `$1/[1 - (1/2)z^{-1}]$`],
        answer: 3,
        explanation: 'Step 1: Transform to $(1 - (1/2)z^{-1})Y = X$ under zero rest. Step 2: Divide to $H = Y/X = 1/[1 - (1/2)z^{-1}]$. Step 3: Recognize $(1/2)^{n}u[n]$ as the impulse response, not the rational function itself.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'ROC geometry determines causality and stability',
        blocks: [
          {
            kind: 'theorem',
            body: 'For $X(z) = \\sum_{n} x[n] z^{-n}$ the region of convergence is an annulus $r_{1} < |z| < r_{2}$, possibly including boundaries, on which $X$ is analytic. The sequence is recovered by Laurent uniqueness, so $X$ plus ROC determines $x$ bijectively. **Causality** $x[n] = 0$ for $n < 0$ holds exactly for ROC exterior $|z| > r_{\\max}$, while anticausality gives $|z| < r_{\\min}$. **BIBO stability** $\\sum_{n} |x[n]| < \\infty$ holds exactly when the ROC contains the unit circle $|z| = 1$. Rational $X$ has ROC bounded by pole magnitudes.'
          },
          {
            kind: 'proof',
            body: 'If $\\sum |x[n]| \\rho^{-n} < \\infty$ at $|z| = \\rho$, then Weierstrass M test gives absolute and uniform convergence on compact subannuli, hence $X$ is analytic there by Morera termwise. Different annuli of convergence for the same formal series give different Laurent coefficients, proving ROC is part of the data. Causality forces $X(z)$ to involve only $z^{-n}$ with $n \\geq 0$, bounded as $z \\to \\infty$, so the ROC extends outward to infinity. Stability $\\sum |x[n]| < \\infty$ is absolute convergence at $|z| = 1$, hence inclusion of the unit circle, and conversely.'
          },
          {
            kind: 'example',
            heading: 'One rational function with two different sequences',
            body: 'Let $X(z) = z/(z-a) = 1/(1-a z^{-1})$ with $a \\neq 0$. With ROC $|z| > |a|$ expansion in $a z^{-1}$ gives $x[n] = a^{n} u[n]$, causal with pole at $a$. With ROC $|z| < |a|$ expansion in $z/a$ gives $x[n] = -a^{n} u[-n-1]$, anticausal. Both share $X$ but differ in ROC. The causal version is stable exactly when $|a| < 1$, so the unit circle test reads stability from geometry. Pole zero cancellation without ROC tracking is therefore unsound.'
          },
        ]
      }
    ],
  }
]

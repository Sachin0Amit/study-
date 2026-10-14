import type { SectionContent } from '../library'

// ============================================================================
// Signals and Control — Chapter 4: DTFT, DFT and Z-Transform
// Sections 4.1 - 4.4. Master study content.
// ============================================================================

export const sigctrlCh04Content: SectionContent[] = [
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: 'sigctrl-ch4-s1',
    readingTime: 8,
    intro: 'The DTFT gives every discrete sequence a continuous frequency portrait, while the DFT samples that portrait into a finite computable vector. Periodicity, symmetry and convolution rules carry over with circular twists. This section fixes the pair definitions and the zero-padding habits that make spectra readable.',
    objectives: [
      'State $DTFT$ and $DFT$ pairs and connect samples $X[k]$ to the underlying spectrum $X(e^{j\\omega})$',
      'Apply circular shift, circular convolution and Parseval relations on length-$N$ vectors',
      'Use zero padding to interpolate spectra without changing the underlying resolution'
    ],
    concepts: [
      {
        term: 'DTFT pair',
        kind: 'definition',
        statement: 'The **DTFT** `DTFT` maps $x[n]$ to $X(e^{j\\omega}) = \\sum_{n} x[n] e^{-j\\omega n}$, periodic in $\\omega$ with period $2\\pi$. Inversion integrates one period: $x[n] = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} X(e^{j\\omega}) e^{j\\omega n} d\\omega$.',
        detail: 'Aperiodicity in time pairs with $2\\pi$-periodicity in frequency. Absolute summability guarantees a continuous spectrum, while impulses in $X$ mark pure tones.'
      },
      {
        term: 'DFT pair',
        kind: 'definition',
        statement: 'The length-$N$ **DFT** `DFT` computes $X[k] = \\sum_{n=0}^{N-1} x[n] e^{-j2\\pi kn/N}$ with inverse $x[n] = \\frac{1}{N} \\sum_{k=0}^{N-1} X[k] e^{j2\\pi kn/N}$. Both domains are length $N$ and implicitly $N$-periodic.',
        detail: 'Bin $k$ sits at digital frequency $2\\pi k/N$. Scaling conventions differ across tools, so always check where the $1/N$ factor lives before comparing magnitudes.'
      },
      {
        term: 'Circular convolution',
        kind: 'theorem',
        statement: '**Circular convolution** `circular` in one domain equals pointwise multiplication in the other: $x \\circledast h \\leftrightarrow X[k]H[k]$. Linear convolution matches only after padding to at least $N + M - 1$ samples.',
        detail: 'Unpadded products alias the tail onto the head modulo $N$. Padding both sequences to the linear length removes the wrap before transforming.'
      },
      {
        term: 'Symmetry and Parseval',
        kind: 'theorem',
        statement: 'Real $x[n]$ yields **conjugate symmetry** `symmetry` $X[N-k] = X^{*}[k]$, and **Parseval** energy splits equally: $\\sum_{n} |x[n]|^{2} = \\frac{1}{N} \\sum_{k} |X[k]|^{2}$. Half the bins therefore carry the full story for real signals.',
        detail: 'Magnitudes mirror while phases invert across the folding bin. DC and Nyquist bins stay real-valued under these symmetries.'
      },
      {
        term: 'Zero padding habit',
        kind: 'method',
        statement: '**Zero padding** `pad` appends zeros to length $L > N$ before the DFT, sampling $X(e^{j\\omega})$ on a finer grid $2\\pi k/L$. It interpolates the same spectrum rather than resolving closer tones.',
        detail: 'True resolution needs longer observation, not more zeros. Padding still helps peak picking and overlay plots by smoothing the displayed curve.'
      }
    ],
    examples: [
      {
        title: 'Trace: 4-point DFT of a short pulse',
        problem: 'Compute the $4$-point DFT of $x = (1, 1, 0, 0)$ and verify Parseval energy.',
        steps: [
          { label: 'Step 1', text: '```text\nX[0] = 1 + 1 + 0 + 0 = 2\nX[1] = 1 + e^{-j pi/2} = 1 - j\nX[2] = 1 + e^{-j pi} = 0\nX[3] = 1 + e^{-j 3pi/2} = 1 + j\n```\nApply $X[k] = \\sum_{n=0}^{3} x[n] e^{-j2\\pi kn/4}$ with $x[0] = x[1] = 1$.' },
          { label: 'Step 2', text: 'Time energy is $1^2 + 1^2 = 2$. Frequency energy is $\\frac{1}{4}(|2|^2 + |1-j|^2 + |0|^2 + |1+j|^2) = \\frac{1}{4}(4 + 2 + 0 + 2) = 2$, matching Parseval exactly.' },
          { label: 'Step 3', text: 'Conjugate symmetry holds: $X[3] = X^{*}[1]$ with mirrored magnitudes and inverted phases, as required for real inputs.' }
        ],
        result: '$X = (2, 1-j, 0, 1+j)$ with energy $2$ on both sides.'
      },
      {
        title: 'Drill: circular against linear convolution',
        problem: 'Sequences $x = (1, 2)$ and $h = (3, 4)$ convolve circularly at $N = 2$ and linearly. Compare outcomes.',
        steps: [
          { label: 'Step 1', text: 'Linear result has length $3$: $(3, 10, 8)$ from $1 \\cdot 3$, $1 \\cdot 4 + 2 \\cdot 3$, $2 \\cdot 4$.' },
          { label: 'Step 2', text: 'Two-point circular convolution wraps the tail: first bin $3 + 8 = 11$, second bin $10$, giving $(11, 10)$.' },
          { label: 'Step 3', text: '```text\npadded to N=3: DFT product -> (3, 10, 8)\nunpadded N=2:    DFT product -> (11, 10) aliased\n```\nPadding to length $3$ before the DFT product recovers the linear answer.' }
        ],
        result: 'Circular $(11, 10)$ aliases the linear $(3, 10, 8)$ until padded to length $3$.'
      }
    ],
    keyTakeaways: [
      'DTFT spectra repeat every $2\\pi$ while DFT vectors sample one period into $N$ bins.',
      'Circular convolution equals DFT products, with padding required for linear results.',
      'Real inputs give conjugate-symmetric spectra with Parseval energy preserved.',
      'Zero padding interpolates the displayed spectrum without adding true resolution.'
    ],
    quiz: [
      {
        q: 'The DTFT of a discrete sequence is:',
        options: [
          'Aperiodic in $\\omega$ with $N$ samples',
          'Continuous and periodic in $\\omega$ with period $2\\pi$',
          'A length-$N$ vector with no periodicity',
          'Defined only for finite sequences'
        ],
        answer: 1,
        explanation: 'Step 1: The DTFT sums $x[n]e^{-j\\omega n}$ over time. Step 2: Shifting $\\omega$ by $2\\pi$ leaves every term unchanged. Step 3: The result is continuous in $\\omega$. Step 4: Finite-sample vectors are the DFT specialization.'
      },
      // PYQ-pattern: circular convolution length and aliasing verdict
      {
        q: 'Multiplying $2$-point DFTs of length-$2$ sequences computes:',
        options: [
          'Linear convolution of length $3$',
          'Continuous-time convolution',
          'Correlation with no aliasing',
          'Circular convolution of length $2$ with tail aliasing'
        ],
        answer: 3,
        explanation: 'Step 1: DFT products implement circular convolution. Step 2: Length-$2$ circular output has $2$ samples. Step 3: The linear result needs $3$ samples. Step 4: The missing tail wraps onto the head, which padding would prevent.'
      },
      {
        q: 'For real $x[n]$, DFT bins satisfy:',
        options: [
          '$X[N-k] = X^{*}[k]$ with mirrored magnitudes',
          '$X[N-k] = X[k]$ with equal phases',
          `$X[k] = 0$ for $k$ above $N/2$`,
          'All bins are purely imaginary'
        ],
        answer: 0,
        explanation: 'Step 1: Conjugation passes through the real-input sum. Step 2: Inverting the exponent mirrors the bin index. Step 3: Magnitudes match while phases invert. Step 4: DC and Nyquist bins reduce to real values.'
      },
      {
        q: 'Zero padding a sequence before its DFT:',
        options: [
          'Resolves two close tones that overlapped before',
          'Changes the total signal energy',
          'Interpolates the same DTFT on a finer bin grid without new resolution',
          'Removes the need for anti-alias filtering'
        ],
        answer: 2,
        explanation: 'Step 1: Padding appends zeros, not observation time. Step 2: The underlying DTFT is unchanged. Step 3: More bins sample that fixed curve densely. Step 4: True separation still needs longer data.'
      }
    ]
  },

  // ---------------------------------------------------------------- 4.2
  {
    sectionId: 'sigctrl-ch4-s2',
    readingTime: 7,
    intro: 'The fast Fourier transform is not a new transform but a divide-and-conquer algorithm for the DFT. Even-odd splitting turns quadratic work into log-linear time. The payoff is fast filtering and spectral analysis at scales direct evaluation could never reach.',
    objectives: [
      'Derive the radix-$2$ even-odd split and its $N \\log N$ cost from the $DFT$ sum',
      'Trace butterfly stages and bit-reversed ordering on an $8$-point flow',
      'Explain fast convolution of long signals by block transforms with overlap handling'
    ],
    concepts: [
      {
        term: 'Radix-2 decimation in time',
        kind: 'method',
        statement: 'Splitting $x[n]$ into **even and odd** `even-odd` halves rewrites the $N$-point DFT as two $N/2$-point DFTs plus $N$ twiddle multiplications: $X[k] = E[k] + W_N^k O[k]$. Recursion to length $1$ builds the full flow.',
        detail: 'The twiddle $W_N = e^{-j2\\pi/N}$ rotates odd-half contributions per bin. Periodicity $E[k+N/2] = E[k]$ pairs outputs into butterflies.'
      },
      {
        term: 'Butterfly operation',
        kind: 'notation',
        statement: 'Each **butterfly** `butterfly` takes $a$ and $b$ to $a + Wb$ and $a - Wb$ with one multiply and two adds. The $N$-point stage holds $N/2$ butterflies, and $\\log_2 N$ stages complete the transform.',
        detail: 'In-place layouts overwrite $a$ and $b$ with the pair, needing only stage-ordered reads. Twiddle tables precompute the $N$ rotations once.'
      },
      {
        term: 'Complexity accounting',
        kind: 'theorem',
        statement: 'Direct DFT costs **$O(N^2)$** `quadratic` operations while radix-$2$ FFT costs **$O(N \\log_2 N)$** `loglinear` multiplies and adds. At $N = 1024$ the gap is roughly hundredfold.',
        detail: 'Recurrence $T(N) = 2T(N/2) + N$ solves to $N \\log_2 N$. Larger radices and split variants tune constants without changing the order.'
      },
      {
        term: 'Bit-reversed ordering',
        kind: 'method',
        statement: '**Bit reversal** `bitrev` permutes inputs so recursive halves land in contiguous slots: index $b_2b_1b_0$ moves to $b_0b_1b_2$. Outputs then emerge in natural bin order.',
        detail: 'For $N = 8$, input order becomes $0, 4, 2, 6, 1, 5, 3, 7$. Iterative loops use this permutation instead of recursion.'
      },
      {
        term: 'Fast block convolution',
        kind: 'method',
        statement: '**Overlap-add and overlap-save** `blocks` filter long streams with block FFTs: transform each padded block, multiply spectra, invert, then add or discard the aliased edges. Cost stays log-linear per output sample.',
        detail: 'Block length balances transform efficiency against edge overhead. Streaming variants pipeline stages so throughput tracks the FFT clock.'
      }
    ],
    examples: [
      {
        title: 'Trace: one butterfly pair in an 8-point FFT',
        problem: 'Stage inputs $a = 2$ and $b = 1$ combine with twiddle $W_8^1 = (1-j)/\\sqrt{2}$. Compute the butterfly outputs.',
        steps: [
          { label: 'Step 1', text: '```text\na = 2, b = 1, W = (1 - j)/sqrt(2)\nupper = a + W*b\nlower = a - W*b\n```\nThe pair shares one product $Wb$ with opposite signs.' },
          { label: 'Step 2', text: 'Upper output is $2 + (1-j)/\\sqrt{2}$ and lower output is $2 - (1-j)/\\sqrt{2}$, using $W_8^1$ magnitude one with phase $-\\pi/4$.' },
          { label: 'Step 3', text: 'Across the stage, $4$ such butterflies replace $64$ direct multiply-adds with $4$ multiplies plus combines, previewing the log-linear win.' }
        ],
        result: 'Butterfly pair $(2+W, 2-W)$ from one shared twiddle product.'
      },
      {
        title: 'Drill: operation counts at N equal to 1024',
        problem: 'Compare direct DFT against radix-$2$ FFT multiply counts at $N = 1024$.',
        steps: [
          { label: 'Step 1', text: 'Direct evaluation needs about $N^2 = 1048576$ complex multiplies, one per matrix entry.' },
          { label: 'Step 2', text: 'FFT needs about $(N/2)\\log_2 N = 512 \\times 10 = 5120$ multiplies, one per butterfly.' },
          { label: 'Step 3', text: 'The ratio exceeds $200$ to $1$ before constant-factor tuning, which is why spectral filtering at audio rates is routine.' }
        ],
        result: 'Roughly $10^6$ direct against $5 \\times 10^3$ FFT multiplies at $N = 1024$.'
      }
    ],
    keyTakeaways: [
      'Even-odd splitting reduces the DFT to two half transforms plus twiddle combines.',
      'Butterflies with $W_N^k$ factors tile $\\log_2 N$ stages of $N/2$ units each.',
      'Cost drops from $O(N^2)$ to $O(N \\log N)$ with bit-reversed input ordering.',
      'Block convolution turns long filters into batched FFT products with edge handling.'
    ],
    quiz: [
      {
        q: 'Radix-$2$ FFT first step rewrites the DFT as:',
        options: [
          'Two half-length DFTs combined with twiddle factors',
          'Four quarter-length DCTs with no multiplies',
          'One direct sum with permuted outputs',
          'An analog filter bank with no recursion'
        ],
        answer: 0,
        explanation: 'Step 1: Separate even and odd indexed samples. Step 2: Each half is an $N/2$-point DFT. Step 3: Odd-half bins rotate by $W_N^k$. Step 4: Recursion repeats the split to length $1$.'
      },
      // PYQ-pattern: FFT versus direct cost at a power of two
      {
        q: 'At $N = 1024$, FFT multiplies are about:',
        options: [
          '$10^6$ like the direct sum',
          `$5120$, near $(N/2)\\log_2 N$`,
          '$1024$ with no log factor',
          `$10$ regardless of $N$`
        ],
        answer: 1,
        explanation: 'Step 1: Each of $10$ stages holds $512$ butterflies. Step 2: Each butterfly carries one multiply. Step 3: The total is $512 \\times 10 = 5120$. Step 4: Direct evaluation instead needs about $N^2$.'
      },
      {
        q: 'Bit reversal in iterative FFTs:',
        options: [
          'Sorts outputs by magnitude',
          'Permutes inputs so recursive halves sit contiguously',
          'Removes twiddle factors entirely',
          'Pads the signal with zeros'
        ],
        answer: 1,
        explanation: 'Step 1: Recursion groups evens then odds. Step 2: Repeating the grouping permutes binary indices. Step 3: Reversed-bit order lays groups contiguously. Step 4: Stages then run in place with natural outputs.'
      },
      {
        q: 'Overlap-add filtering uses FFTs because:',
        options: [
          'It avoids all multiplications',
          'Block spectral products plus edge adds give log-linear long convolution',
          'It works only for length-$8$ signals',
          'Time-domain taps vanish for long filters'
        ],
        answer: 1,
        explanation: 'Step 1: Long convolution splits into padded blocks. Step 2: Each block convolves by spectral product. Step 3: Aliased edges add across neighbors. Step 4: Per-sample cost follows the FFT order.'
      }
    ]
  },

  // ---------------------------------------------------------------- 4.3
  {
    sectionId: 'sigctrl-ch4-s3',
    readingTime: 10,
    intro: 'The z-transform carries sequences into a complex plane where delays become multiplications and pole positions dictate everything. The region of convergence decides causality, stability and uniqueness of the inverse. Reading ROC from the pole pattern is the central skill of this section.',
    objectives: [
      'Compute bilateral and unilateral $z$-transforms of standard sequences with their $ROC$',
      'Infer causality, stability and sidedness from pole locations and $ROC$ shape',
      'Apply shift, scaling and differentiation properties to compound sequences'
    ],
    concepts: [
      {
        term: 'Bilateral z-transform',
        kind: 'definition',
        statement: 'The **bilateral transform** `bilateral` is $X(z) = \\sum_{n=-\\infty}^{\\infty} x[n] z^{-n}$, converging exactly on its **region of convergence** $ROC$. The pair $X(z)$ plus $ROC$ jointly identify $x[n]$.',
        detail: 'Same rational $X(z)$ with different $ROC$ inverts to different sequences. Omitting the $ROC$ leaves the inverse ambiguous.'
      },
      {
        term: 'ROC shapes from poles',
        kind: 'theorem',
        statement: '**ROC** `ROC` is a ring $|p_{in}| < |z| < |p_{out}|$ bounded by poles, never containing a pole. Right-sided sequences extend outward from the outermost pole, left-sided inward from the innermost, two-sided between two poles.',
        detail: 'Causal sequences give $|z| > |p_{max}|$. Anticausal give $|z| < |p_{min}|$. Stability needs the unit circle inside the $ROC$.'
      },
      {
        term: 'Standard pairs',
        kind: 'notation',
        statement: 'Core pairs include **$a^n u[n] \\leftrightarrow z/(z-a)$** `pairs` with $|z| > |a|$, and $-a^n u[-n-1]$ sharing $z/(z-a)$ with $|z| < |a|$. Delays map as $x[n-k] \\leftrightarrow z^{-k}X(z)$ with $ROC$ intact except possible $0$ or $\\infty$.',
        detail: 'Unit step gives $z/(z-1)$ outside $|z| > 1$. Impulse gives $1$ everywhere, and $n a^n u[n]$ gives $az/(z-a)^2$ outside $|a|$.'
      },
      {
        term: 'Causality and stability readings',
        kind: 'law',
        statement: '**Causal and stable** `causal-stable` means all poles inside the unit circle with $ROC$ outward past $|z| = 1$. Poles outside force either noncausal inverses or unstable growth.',
        detail: 'Pole at $z = 2$ with outward $ROC$ inverts causally to $2^n u[n]$, growing without bound. Inward $ROC$ instead gives a bounded left-sided inverse at the price of noncausality.'
      },
      {
        term: 'Unilateral transform use',
        kind: 'method',
        statement: 'The **unilateral** `unilateral` sum from $n = 0$ absorbs initial conditions through $Z(x[n-1]) = z^{-1}X(z) + x[-1]$. Difference equations with nonzero states solve cleanly in this form.',
        detail: 'Right shifts expose prestate terms while left shifts stay clean. Zero-state response uses either form, nonzero states prefer unilateral.'
      }
    ],
    examples: [
      {
        title: 'Trace: ROC decides the sequence',
        problem: 'Given $X(z) = z/(z-a)$ with $|a| < 1$, contrast inverses for $ROC$ $|z| > |a|$ against $|z| < |a|$.',
        steps: [
          { label: 'Step 1', text: '```text\nX(z) = z / (z - a), single pole at z = a\ncandidate A: |z| > |a|  (outward ring)\ncandidate B: |z| < |a|  (inward disk)\n```\nOne rational function with two admissible rings.' },
          { label: 'Step 2', text: 'Outward $ROC$ inverts causally to $a^n u[n]$, bounded since $|a| < 1$, with the unit circle inside the $ROC$ confirming stability.' },
          { label: 'Step 3', text: 'Inward $ROC$ inverts to $-a^n u[-n-1]$, a left-sided bounded sequence that is noncausal: stability kept, causality lost.' }
        ],
        result: 'Same $X(z)$ yields causal $a^n u[n]$ outward and noncausal $-a^n u[-n-1]$ inward.'
      },
      {
        title: 'Drill: pole pattern stability verdict',
        problem: 'System function $H(z) = z(z+0.5)/((z-0.4)(z-1.5))$ is claimed causal. Stable or not, and why?',
        steps: [
          { label: 'Step 1', text: 'Poles sit at $z = 0.4$ and $z = 1.5$. Causality forces outward $ROC$ $|z| > 1.5$.' },
          { label: 'Step 2', text: 'The unit circle $|z| = 1$ lies outside that $ROC$, so bounded inputs can excite the growing $1.5^n$ mode.' },
          { label: 'Step 3', text: 'Choosing inward $ROC$ $0.4 < |z| < 1.5$ would include the unit circle for stability but invert noncausally.' }
        ],
        result: 'Causal form unstable from the pole at $1.5$; stability needs the noncausal ring.'
      }
    ],
    keyTakeaways: [
      '$X(z)$ plus $ROC$ jointly define the sequence, never $X(z)$ alone.',
      'Outward rings are right-sided, inward disks left-sided, and inter-pole rings two-sided.',
      'Causal stability needs all poles inside the unit circle with outward $ROC$.',
      'Unilateral transforms carry initial states into difference-equation solutions.'
    ],
    quiz: [
      // PYQ-pattern: ROC shape and sidedness from pole positions
      {
        q: '$X(z) = z/(z-0.5)$ with $ROC$ $|z| > 0.5$ inverts to:',
        options: [
          `$0.5^n u[n]$`,
          `$-0.5^n u[-n-1]$`,
          `$0.5^n u[-n-1]$`,
          `$\\delta[n] + 0.5^n u[n]$`
        ],
        answer: 0,
        explanation: 'Step 1: The pole is at $0.5$. Step 2: Outward $ROC$ means right-sided. Step 3: The causal pair for $z/(z-a)$ is $a^n u[n]$. Step 4: Inward $ROC$ would instead give the inverted left-sided form.'
      },
      {
        q: 'Same $X(z) = z/(z-0.5)$ with $ROC$ $|z| < 0.5$ inverts to:',
        options: [
          `$0.5^n u[n]$`,
          `$-0.5^n u[-n-1]$`,
          `$u[n]$ regardless of $ROC$`,
          '$0.5^{|n|}$ two-sided'
        ],
        answer: 1,
        explanation: 'Step 1: Inward $ROC$ means left-sided. Step 2: The pair keeps $z/(z-a)$ form. Step 3: The left-sided reading flips sign with $u[-n-1]$. Step 4: Hence $-0.5^n u[-n-1]$ is the match.'
      },
      {
        q: 'A causal system with pole at $z = 1.5$ is:',
        options: [
          'Stable since ROCis outward',
          'Unstable since the unit circle leaves the outward $ROC$',
          'Stable with inward $ROC$ while causal',
          'Always stable regardless of $ROC$'
        ],
        answer: 1,
        explanation: 'Step 1: Causality forces $|z| > 1.5$. Step 2: Stability needs $|z| = 1$ inside $ROC$. Step 3: The unit circle is excluded here. Step 4: Inward $ROC$ would stabilize only by breaking causality.'
      },
      {
        q: '$x[n-2]$ with bilateral $X(z)$ transforms to:',
        options: [
          `$z^{-2}X(z)$ with $ROC$ unchanged except possible $0$ or $\\infty$`,
          `$z^{2}X(z)$ with doubled $ROC$`,
          '$X(z-2)$ with shifted poles',
          `$X(z)/z$ with unit-circle $ROC$`
        ],
        answer: 0,
        explanation: 'Step 1: Delay multiplies by $z^{-k}$ per sample. Step 2: Here $k = 2$. Step 3: Pole magnitudes are unchanged. Step 4: Only boundary points $0$ or $\\infty$ can enter or leave.'
      }
    ]
  },

  // ---------------------------------------------------------------- 4.4
  {
    sectionId: 'sigctrl-ch4-s4',
    readingTime: 9,
    intro: 'Inversion turns rational functions back into sequences, and difference equations turn into algebra under the transform. Partial fractions split the problem into first-order pieces with known pairs. Initial conditions then select the homogeneous constants that complete the response.',
    objectives: [
      'Invert rational $X(z)$ by partial fractions in $X(z)/z$ with $ROC$-correct sidedness',
      'Solve constant-coefficient recursions for zero-state and nonzero-state responses',
      'Separate natural modes from forced terms and test mode stability by pole radius'
    ],
    concepts: [
      {
        term: 'Partial-fraction inversion',
        kind: 'method',
        statement: 'Expand **$X(z)/z$** `pfe` into $A/(z-p_1) + B/(z-p_2)$, then multiply back by $z$ so each term matches $z/(z-p)$ form. Each piece inverts by the standard pair with the shared $ROC$ ring.',
        detail: 'Repeated poles add $z/(z-p)^2$ terms mapping to $n p^n$. Residues come from cover-up on $X(z)/z$ for distinct poles.'
      },
      {
        term: 'Properness handling',
        kind: 'method',
        statement: '**Improper** `proper` $X(z)$ with numerator degree above denominator splits into a polynomial plus strictly proper remainder by long division. Polynomial terms $z^k$ map to advanced impulses $\\delta[n+k]$.',
        detail: 'Most textbook $X(z)$ arrive proper or with one extra $z$. Direct $z/(z-a)$ shapes need no division, while $z^2/(z-a)$ needs one step.'
      },
      {
        term: 'Difference-equation algebra',
        kind: 'theorem',
        statement: 'A recursion **$y[n] + a_1 y[n-1] = b_0 x[n]$** `recursion` transforms to $Y(z)(1 + a_1 z^{-1}) = b_0 X(z)$ plus prestate terms unilaterally. Poles of $Y(z)/X(z)$ are the natural modes.',
        detail: 'Zero-state response sets prestates to zero and reads the transfer directly. Characteristic roots repeat as denominator factors of the system function.'
      },
      {
        term: 'Zero-state versus zero-input split',
        kind: 'definition',
        statement: 'Total response is **zero-state plus zero-input** `split-response`: the input-driven term with relaxed states plus the state-driven term with nulled input. Linearity justifies solving each alone and adding.',
        detail: 'Zero-input terms carry $y[-1]$ style constants through unilateral shift rules. Zero-state terms carry $X(z)$ through the transfer function.'
      },
      {
        term: 'Mode stability verdict',
        kind: 'law',
        statement: 'Each pole contributes a **mode $p^n$** `modes`, decaying when $|p| < 1$, steady when $|p| = 1$ and growing when $|p| > 1$. Bounded inputs give bounded outputs exactly when every mode decays.',
        detail: 'Repeated pole $p$ of multiplicity $m$ adds $n^{k} p^n$ envelopes for $k < m$. Unit-circle poles of multiplicity above one already grow unboundedly.'
      }
    ],
    examples: [
      {
        title: 'Trace: inversion by partial fractions',
        problem: 'Invert $X(z) = z^2/((z-0.5)(z-0.25))$ with causal $ROC$ $|z| > 0.5$.',
        steps: [
          { label: 'Step 1', text: '```text\nX(z)/z = z / ((z-0.5)(z-0.25))\n       = A/(z-0.5) + B/(z-0.25)\ncover-up: A = 2, B = -1\nX(z) = 2 z/(z-0.5) - z/(z-0.25)\n```\nDivide by $z$ first so each term regains $z$ in its numerator.' },
          { label: 'Step 2', text: 'Outward $ROC$ makes both terms causal: $2(0.5)^n u[n]$ from the first pole and $-(0.25)^n u[n]$ from the second.' },
          { label: 'Step 3', text: 'At $n = 0$ the sum gives $2 - 1 = 1$, matching the initial-value check $\\lim_{z \\to \\infty} X(z) = 1$.' }
        ],
        result: '$x[n] = (2(0.5)^n - (0.25)^n) u[n]$ for the causal $ROC$.'
      },
      {
        title: 'Drill: recursion with an initial state',
        problem: 'Solve $y[n] - 0.5 y[n-1] = u[n]$ with $y[-1] = 2$ for $n \\geq 0$.',
        steps: [
          { label: 'Step 1', text: 'Unilateral transform gives $Y(z) - 0.5(z^{-1}Y(z) + y[-1]) = z/(z-1)$. Insert $y[-1] = 2$ to get $Y(z)(1-0.5z^{-1}) = z/(z-1) + 1$.' },
          { label: 'Step 2', text: 'Hence $Y(z) = z^2/((z-1)(z-0.5)) + z/(z-0.5)$. The first term is the forced plus natural mix, the second carries the prestate.' },
          { label: 'Step 3', text: 'Inversion yields $y[n] = (2 - (0.5)^n) + (0.5)^n \\cdot 1$ adjusted by constants: the steady $2$ from the step plus decaying $(0.5)^n$ blends of input and initial modes.' }
        ],
        result: 'Step response riding on the $0.5$ mode with the $y[-1] = 2$ prestate folded in.'
      }
    ],
    keyTakeaways: [
      'Partial fractions in $X(z)/z$ reduce inversion to first-order pairs.',
      'Polynomial remainders from division map to advanced impulses.',
      'Recursions become algebra with prestate terms under the unilateral transform.',
      'Pole radii classify every natural mode as decaying, steady or growing.'
    ],
    quiz: [
      {
        q: 'First step inverting $z^2/((z-0.5)(z-0.25))$ is:',
        options: [
          'Expand $X(z)/z$ by cover-up, then multiply back by $z$',
          'Read time constants directly from numerator roots',
          'Apply the Thomas rule to each pole',
          'Zero-pad the denominator to length $4$'
        ],
        answer: 0,
        explanation: 'Step 1: Dividing by $z$ exposes $z/(z-p)$ shapes. Step 2: Cover-up gives residues $2$ and $-1$. Step 3: Multiplying back restores pair-ready numerators. Step 4: Each term then inverts causally by $ROC$.'
      },
      // PYQ-pattern: recursion solution with prestate via unilateral shift
      {
        q: 'Unilateral $Z(y[n-1])$ with prestate $y[-1]$ equals:',
        options: [
          '$z^{-1}Y(z)$ with no extra term',
          `$z^{-1}Y(z) + y[-1]$`,
          `$zY(z) - zy[0]$`,
          `$Y(z) - y[-1]$`
        ],
        answer: 1,
        explanation: 'Step 1: The unilateral sum starts at $n = 0$. Step 2: Shifting exposes the $n = -1$ sample. Step 3: That sample adds directly as $y[-1]$. Step 4: Zero-state analysis drops it, nonzero-state keeps it.'
      },
      {
        q: 'Pole pair $0.5$ and $1.5$ in a causal recursion gives modes:',
        options: [
          'Both decaying',
          'Decaying $(0.5)^n$ plus growing $(1.5)^n$, hence unstable',
          'Both steady sinusoids',
          'No homogeneous response'
        ],
        answer: 1,
        explanation: 'Step 1: Each pole contributes its power mode. Step 2: Radius $0.5$ decays inside the unit circle. Step 3: Radius $1.5$ grows outside it. Step 4: One growing mode makes the system unstable.'
      },
      {
        q: 'Repeated causal pole $p$ of multiplicity $2$ contributes:',
        options: [
          '$p^n$ only',
          '$p^n$ and $n p^n$ envelopes',
          '$p^{2n}$ squared modes',
          'No time term until steady state'
        ],
        answer: 1,
        explanation: 'Step 1: Multiplicity adds polynomial envelopes. Step 2: The pair spans $p^n$ and $n p^n$. Step 3: Both share radius $|p|$. Step 4: Stability still follows $|p| < 1$.'
      }
    ]
  }
]

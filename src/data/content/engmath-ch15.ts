import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 15: Probability Distributions
// (Kreyszig 10e, Part G, Chapter 24).
// Sections 15.1 – 15.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh15Content: SectionContent[] = [
  // ---------------------------------------------------------------- 15.1
  {
    sectionId: 'engmath-ch15-s1',
    readingTime: 8,
    intro: 'Random variables turn experimental outcomes into numbers whose patterns are captured by distribution functions. Discrete variables sum probabilities over mass points while continuous variables integrate densities over intervals. This section defines probability, mass, density and cumulative functions together, then builds expectation and variance with the linear laws that simplify every later calculation.',
    objectives: [
      'Use PMF, PDF and CDF correctly to compute probabilities over events',
      'Evaluate means and variances of small discrete and continuous models',
      'Apply expectation linearity and variance scaling laws without expanding sums'
    ],
    concepts: [
      {
        term: 'Random variables with PMF, PDF and CDF',
        kind: 'definition',
        statement: 'A **random variable** `$X$` maps outcomes to numbers, described discretely by the mass `$p(x) = P(X = x)$` and continuously by the density `$f(x)$` with `$P(a < X \\le b) = \\int_{a}^{b} f$` in the `cdf` toolkit. The **cumulative** `$F(x) = P(X \\le x)$` unifies both worlds, stepping up at mass points and integrating density elsewhere. Every valid model keeps masses or densities nonnegative with total one, the two admissibility checks that precede all computation.',
        detail: 'Density values may exceed one at sharp peaks since only areas carry probability, while no single mass value may exceed one.'
      },
      {
        term: 'Expectation and its linear laws',
        kind: 'theorem',
        statement: '**Expectation** averages with probability weights, `$E[X] = \\sum x\\,p(x)$` or `$\\int x\\,f(x)\\,dx$`, and **linearity** gives `$E[aX + b] = aE[X] + b$` plus `$E[X + Y] = E[X] + E[Y]$` through the `mean` rules. Linearity needs no independence, which is why sums of dependent variables still average termwise. Constants slide out of expectations untouched in location but vanish from spread, previewing the variance laws.',
        detail: 'A fair die has mean `$3.5$` though no face shows it, the cleanest reminder that expectation is an average rather than a value.'
      },
      {
        term: 'Variance as expected squared deviation',
        kind: 'theorem',
        statement: '**Variance** `$\\mathrm{Var}(X) = E[(X - \\mu)^{2}] = E[X^{2}] - \\mu^{2}$` measures spread in squared units, with the shift law `$\\mathrm{Var}(aX + b) = a^{2}\\mathrm{Var}(X)$` killing location in the `var` computation. Standard deviation `$\\sigma$` restores original units for reporting, while variance itself drives all error-bar arithmetic. The computational form `$E[X^{2}] - \\mu^{2}$` needs only two moments instead of a full deviation table.',
        detail: 'Adding a constant leaves variance unchanged but multiplying by `$a$` scales it by `$a^{2}$`, so unit conversions square their factors.'
      },
      {
        term: 'Discrete sums versus continuous integrals',
        kind: 'insight',
        statement: 'Discrete work **sums** over countable values while continuous work **integrates** over intervals, and matching the tool to the variable type prevents the most common setup error in the `sumint` habit. Mixed models layer both, such as a meter that reports zero exactly or a positive reading continuously. Sketching mass spikes beside density curves keeps the two calculi visually separate before any number is produced.',
        detail: 'The uniform `$U(0, 2)$` density is flat at `$\\frac{1}{2}$`, and its mean `$1$` sits at the interval midpoint by symmetry alone.'
      },
      {
        term: 'Standardization centers and scales',
        kind: 'method',
        statement: '**Standardization** `$Z = (X - \\mu) \\div \\sigma$` recenters every variable to mean zero and spread one, letting one probability table serve all locations and scales in the `zscore` workflow. Probabilities of `$X$` translate directly: `$P(X \\le x) = P(Z \\le z)$` with `$z$` the matching score. The normal chapter runs entirely on this bridge, but the algebra itself assumes no distribution shape at all.',
        detail: 'Chebyshev inequality bounds tail probability by `$1 \\div k^{2}$` beyond `$k$` standard deviations for every finite-variance variable.'
      }
    ],
    figures: [
      {
        caption: 'One variable two views: mass bars $p(x)$ at $0, 1, 2$ beside a density curve $f(x)$, each topped by its rising cumulative $F(x)$ on the shared axis.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PMF bars and PDF curve with CDF overlays"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Mass bars versus density curve</text><text x="200" y="80" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">discrete PMF</text><line x1="80" y1="280" x2="320" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="140" y1="280" x2="140" y2="150" stroke="currentColor" stroke-width="10"/><line x1="200" y1="280" x2="200" y2="200" stroke="currentColor" stroke-width="10"/><line x1="260" y1="280" x2="260" y2="230" stroke="currentColor" stroke-width="10"/><text x="140" y="300" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">0</text><text x="200" y="300" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">1</text><text x="260" y="300" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">2</text><text x="520" y="80" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">continuous PDF</text><line x1="400" y1="280" x2="640" y2="280" stroke="currentColor" stroke-width="1.5"/><path d="M 410 275 Q 470 270 500 180 Q 530 100 560 170 Q 590 240 630 272" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="520" y="300" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">area under f is probability</text><text x="360" y="330" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">bars sum to 1, curve area equals 1</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Mean and variance of a three-point model',
        problem: 'Let `$X$` take `$0, 1, 2$` with probabilities `$0.5, 0.3, 0.2$`. Compute `$E[X]$` and `$\\mathrm{Var}(X)$`.',
        steps: [
          { label: 'Step 1: First moment', text: 'Weight each value: `$E[X] = 0(0.5) + 1(0.3) + 2(0.2) = 0.7$`. The mean leans toward zero because half the mass sits there.' },
          { label: 'Step 2: Second moment', text: 'Square first: `$E[X^{2}] = 0(0.5) + 1(0.3) + 4(0.2) = 1.1$`. The computational variance form needs exactly these two moments.' },
          { label: 'Step 3: Spread', text: 'Subtract the squared mean: `$\\mathrm{Var}(X) = 1.1 - 0.49 = 0.61$`, so `$\\sigma \\approx 0.78$`. One line of moments replaces a three-row deviation table.' }
        ],
        result: '`$E[X] = 0.7$` with variance `$0.61$` and standard deviation about `$0.78$`.'
      },
      {
        title: 'Uniform waiting time on two minutes',
        problem: 'A bus arrives uniformly on `$[0, 2]$` minutes. Find the mean wait, its variance, and `$P(X > 1.5)$`, verified by script.',
        steps: [
          { label: 'Step 1: Density and mean', text: 'The density is flat at `$f(x) = \\frac{1}{2}$` on `$[0, 2]$`, so symmetry puts `$E[X] = 1$` minute at the midpoint with no integration needed.' },
          { label: 'Step 2: Variance and tail in code', text: '```python\nvar = (2.0 - 0.0) ** 2 / 12.0\ntail = (2.0 - 1.5) / 2.0\nprint(var, tail)  # 0.3333333333 0.25\n```\nThe script prints `0.3333 0.25`: variance `$\\frac{1}{3}$` by the uniform shortcut and tail probability `$0.25$` from the surviving quarter of the interval.' },
          { label: 'Step 3: Read the geometry', text: 'Flat density makes probability proportional to length, so the last half-minute of two minutes carries exactly one quarter of the chance. Standard deviation `$0.577$` minutes reports the spread in natural units.' }
        ],
        result: 'Mean `$1$` minute, variance `$\\frac{1}{3}$`, and `$P(X > 1.5) = 0.25$`.'
      }
    ],
    keyTakeaways: [
      'Mass functions sum and densities integrate, while the CDF `$F(x) = P(X \\le x)$` serves both.',
      'Expectation is linear with `$E[aX + b] = aE[X] + b$`, needing no independence assumption.',
      'Variance `$E[X^{2}] - \\mu^{2}$` scales by `$a^{2}$` under `$aX + b$` and ignores shifts.',
      'Standardization `$Z = (X - \\mu) \\div \\sigma$` ports every probability to the zero-one scale.'
    ],
    quiz: [
      {
        q: 'For `$X$` with the three-point model above, what is `$E[3X + 2]$`?',
        options: ['$4.1$', '$2.1$', '$0.7$', '$6.3$'],
        answer: 0,
        explanation: 'Step 1: Apply linearity with mean 0.7. Step 2: Scale to get 3 times 0.7, which is 2.1. Step 3: Shift by adding 2, giving 4.1. Step 4: No distribution details beyond the mean were needed.'
      },
      {
        q: 'If `$\\mathrm{Var}(X) = 4$`, what is `$\\mathrm{Var}(2X + 5)$`?',
        options: ['$8$', '$13$', '$16$', '$4$'],
        answer: 2,
        explanation: 'Step 1: The shift by 5 leaves variance untouched. Step 2: The scale by 2 squares to a factor of 4. Step 3: Multiply 4 times 4 to get 16. Step 4: Standard deviation doubles to 4 while variance quadruples.'
      },
      {
        q: 'A density `$f(x) = 2x$` lives on `$[0, 1]$`. What is `$P(X > 0.5)$`?',
        options: ['$0.5$', '$0.25$', '$1.0$', '$0.75$'],
        answer: 3,
        explanation: 'Step 1: Integrate 2x from 0.5 to 1 for the tail area. Step 2: The antiderivative is x squared. Step 3: Evaluate 1 minus 0.25 to get 0.75. Step 4: The rising density weights the right side, so above one half is expected.'
      },
      {
        q: 'Which statement about the CDF `$F$` holds for every random variable?',
        options: ['It decreases from 1 to 0', 'It is nondecreasing from 0 to 1', 'It always has jumps', 'It equals the density everywhere'],
        answer: 1,
        explanation: 'Step 1: Larger thresholds can only add probability. Step 2: Hence F never decreases as x grows. Step 3: Limits are 0 at the far left and 1 at the far right. Step 4: Jumps mark discrete masses but continuous variables have none.'
      }
    ]
  },
  // ---------------------------------------------------------------- 15.2
  {
    sectionId: 'engmath-ch15-s2',
    readingTime: 9,
    intro: 'Counting successes, arrivals and waiting times produces the classic named distributions of applied probability. The binomial counts fixed-trial successes, the Poisson counts rare arrivals at a rate, and the exponential times the gaps between them. This section derives their formulas with means and variances, links binomial to Poisson by limit, and isolates the memoryless property of waiting.',
    objectives: [
      'Evaluate binomial probabilities with mean `$np$` and variance `$np(1-p)$`',
      'Apply Poisson counts and exponential waits, including rate arithmetic',
      'State the memoryless property and the Poisson limit of the binomial'
    ],
    concepts: [
      {
        term: 'Binomial counts of fixed trials',
        kind: 'definition',
        statement: 'Counting successes in `$n$` independent `$p$`-trials gives **`$P(X = k) = \\binom{n}{k} p^{k}(1-p)^{n-k}$`** with mean `$np$` and variance `$np(1-p)$` in the `binom` model. Each term chooses which trials succeed and weights that pattern by its probability. Fixed trial count with constant success chance is the entry ticket; drifting `$p$` or dependent trials void the formula.',
        detail: 'Fair-coin `$n = 10$` tosses center at mean `$5$` with variance `$2.5$`, so typical counts fall within a few of five.'
      },
      {
        term: 'Poisson counts of rare arrivals',
        kind: 'definition',
        statement: 'Counting arrivals at rate `$\\lambda$` per unit gives **`$P(X = k) = \\lambda^{k}e^{-\\lambda} \\div k!$`** with mean and variance both `$\\lambda$` in the `poiss` law. Equality of mean and variance is its fingerprint, separating Poisson data from binomial data at a glance. Call centers, defect counts and decay events are the flagship applications with steady average rates.',
        detail: 'With `$\\lambda = 3$` calls per hour, the empty hour has probability `$e^{-3} \\approx 0.0498$`, about one hour in twenty.'
      },
      {
        term: 'Poisson as the binomial limit',
        kind: 'theorem',
        statement: 'Letting `$n \\to \\infty$` and `$p \\to 0$` with `$np = \\lambda$` fixed drives every binomial probability to its **Poisson counterpart**, the `limit` bridge between many unlikely trials and a steady rate. Rare-defect sampling and large-population rare events inherit Poisson arithmetic through this passage. The rule of thumb needs large `$n$` with small `$p$`, typically `$n \\ge 50$` beside `$p \\le 0.1$`.',
        detail: 'A one-in-a-thousand defect over two thousand items behaves as Poisson `$\\lambda = 2$`, dodging giant binomial coefficients.'
      },
      {
        term: 'Exponential waits and memorylessness',
        kind: 'theorem',
        statement: 'Gaps between Poisson arrivals follow **`$f(t) = \\lambda e^{-\\lambda t}$`** with mean `$1 \\div \\lambda$`, and the **memoryless** identity `$P(T > s + t \\mid T > s) = P(T > t)$` says survived waiting buys no credit in the `memless` law. Only the exponential among continuous laws forgets the past this way, mirroring the geometric law among discrete waits. Component lifetimes with ageless failure and service times are modeled here when burn-in effects are absent.',
        detail: 'With rate `$0.5$` per minute, the chance of waiting past three more minutes stays `$e^{-1.5} \\approx 0.223$` no matter how long was already waited.'
      },
      {
        term: 'Hypergeometric sampling without replacement',
        kind: 'insight',
        statement: '**Hypergeometric** counts count successes in draws without replacement from a finite population, converging to binomial when the population dwarfs the sample in the `hyper` comparison. Small urns and inspection lots need its exact ratios, while large ones borrow the simpler binomial form. The without-replacement dependence shrinks as the sampling fraction vanishes, which is exactly when the formulas merge.',
        detail: 'Drawing five from fifty with ten defectives is nearly binomial, but drawing five from ten is irreducibly hypergeometric.'
      }
    ],
    figures: [
      {
        caption: 'Binomial bars for $n = 5$, $p = 0.4$ peak near the mean $2$ beside the exponential tail $f(t)$ with mean $2$, the count view against the waiting view of one process.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Binomial bars and exponential density curve"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Counts versus waiting times</text><text x="200" y="80" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Binomial n=5</text><line x1="70" y1="280" x2="330" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="95" y1="280" x2="95" y2="262" stroke="currentColor" stroke-width="14"/><line x1="137" y1="280" x2="137" y2="210" stroke="currentColor" stroke-width="14"/><line x1="179" y1="280" x2="179" y2="188" stroke="currentColor" stroke-width="14"/><line x1="221" y1="280" x2="221" y2="215" stroke="currentColor" stroke-width="14"/><line x1="263" y1="280" x2="263" y2="252" stroke="currentColor" stroke-width="14"/><line x1="305" y1="280" x2="305" y2="272" stroke="currentColor" stroke-width="14"/><text x="179" y="300" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">k=2 peak</text><text x="520" y="80" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Exponential tail</text><line x1="400" y1="280" x2="650" y2="280" stroke="currentColor" stroke-width="1.5"/><path d="M 410 120 Q 470 150 530 220 T 645 275" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="525" y="300" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">memoryless decay</text><text x="360" y="330" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">bars total 1, tail area equals 1</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Binomial count of a five-trial run',
        problem: 'A machine makes good parts with `$p = 0.4$` per trial. For `$n = 5$` trials find `$P(X = 2)$`, the mean and the variance.',
        steps: [
          { label: 'Step 1: Binomial term', text: 'Choose the succeeding pair: `$\\binom{5}{2} = 10$` patterns, each with probability `$0.4^{2} \\times 0.6^{3} = 0.16 \\times 0.216 = 0.03456$`. Multiplying gives `$10 \\times 0.03456 = 0.3456$`.' },
          { label: 'Step 2: Moments', text: 'Mean `$np = 5 \\times 0.4 = 2$` and variance `$np(1-p) = 2 \\times 0.6 = 1.2$`, so typical counts sit within about one of two. The computed `$0.3456$` is indeed the largest single probability.' },
          { label: 'Step 3: Sanity check', text: 'Probabilities across `$k = 0$` to `$5$` sum to one, and the distribution leans left since `$p < 0.5$`. Both facts confirm the arithmetic before any model is trusted.' }
        ],
        result: '`$P(X = 2) = 0.3456$` with mean `$2$` and variance `$1.2$`.'
      },
      {
        title: 'Poisson arrivals and the memoryless wait',
        problem: 'Calls arrive at `$\\lambda = 3$` per hour. Find `$P(X = 2)$` in an hour, and with wait rate `$0.5$` per minute find `$P(T > 5 \\mid T > 2)$`, checked by script.',
        steps: [
          { label: 'Step 1: Poisson count', text: 'Insert `$k = 2$`: `$3^{2}e^{-3} \\div 2 = 4.5 \\times 0.049787 \\approx 0.22404$`. About twenty-two percent of hours carry exactly two calls.' },
          { label: 'Step 2: Memoryless wait in code', text: '```python\nimport math\nlam = 0.5\np = math.exp(-lam * 3.0)  # P(T > 3) by memorylessness\nprint(round(p, 4))  # 0.2231\n```\nMemorylessness erases the two waited minutes, leaving `$P(T > 3) = e^{-1.5} \\approx 0.2231$`, printed as `0.2231`.' },
          { label: 'Step 3: Link the views', text: 'The same rate `$\\lambda$` drives counts per hour and waits between calls, two faces of one Poisson process. Mean count `$3$` pairs with mean wait `$2$` minutes at rate `$0.5$`.' }
        ],
        result: 'Two-call probability about `$0.2240$`, and the conditional wait about `$0.2231$`.'
      }
    ],
    keyTakeaways: [
      'Binomial `$\\binom{n}{k}p^{k}(1-p)^{n-k}$` counts fixed trials with mean `$np$` and variance `$np(1-p)$`.',
      'Poisson `$\\lambda^{k}e^{-\\lambda} \\div k!$` counts rate arrivals with mean and variance both `$\\lambda$`.',
      'Many rare trials limit to Poisson under `$np = \\lambda$`, and exponential gaps are memoryless.',
      'Without-replacement counts are hypergeometric, merging into binomial for large populations.'
    ],
    quiz: [
      // PYQ-pattern — binomial mean and variance plug-in (rephrased)
      {
        q: 'For `$X$` binomial with `$n = 20$` and `$p = 0.3$`, what are its mean and variance?',
        options: ['Mean 6, variance 6', 'Mean 4.2, variance 6', 'Mean 20, variance 0.3', 'Mean 6, variance 4.2'],
        answer: 3,
        explanation: 'Step 1: Multiply n by p for the mean: 20 times 0.3 gives 6. Step 2: Multiply further by 1 minus p for variance: 6 times 0.7 gives 4.2. Step 3: Variance trails the mean since p is below 1. Step 4: Swapping the two values mistakes the formulas.'
      },
      {
        q: 'Arrivals average `$4$` per hour as Poisson. What is the variance of the hourly count?',
        options: ['$4$', '$2$', '$16$', '$0.25$'],
        answer: 0,
        explanation: 'Step 1: Recall the Poisson fingerprint of equal mean and variance. Step 2: The mean here is 4. Step 3: Hence variance is also 4. Step 4: Standard deviation 2 is the square root, not the variance.'
      },
      {
        q: 'A component has exponential lifetime with mean `$10$` hours and has survived `$6$` hours. What is `$P(T > 16 \\mid T > 6)$`?',
        options: ['Equal to `$P(T > 6)$`', 'Equal to `$P(T > 10)$`', 'Equal to `$P(T > 22)$`', 'Zero by symmetry'],
        answer: 1,
        explanation: 'Step 1: Memorylessness erases the survived 6 hours. Step 2: The remaining horizon is 16 minus 6, namely 10. Step 3: So the conditional chance equals fresh P of T beyond 10. Step 4: That fresh value is e to the minus 1, about 0.368.'
      },
      {
        q: 'Five cards are drawn from a small deck of ten without replacement to count aces. Which model is exact?',
        options: ['Binomial', 'Poisson', 'Hypergeometric', 'Exponential'],
        answer: 2,
        explanation: 'Step 1: Without replacement the trials depend on each other. Step 2: Binomial needs independent constant-p trials. Step 3: The exact dependent-draw model is hypergeometric. Step 4: Poisson counts open-ended arrivals, not fixed deck draws.'
      }
    ]
  },
  // ---------------------------------------------------------------- 15.3
  {
    sectionId: 'engmath-ch15-s3',
    readingTime: 9,
    intro: 'The normal distribution governs errors, measurements and averages across science and engineering. Standardization reduces every normal probability to one table, the empirical rule covers quick estimates, and the central limit theorem explains why averages turn normal. This section standardizes, tabulates, bounds with the empirical rule, and applies the limit theorem with continuity correction.',
    objectives: [
      'Standardize normal variables and read tail probabilities from `$\\Phi$` values',
      'Apply the empirical 68, 95, 99.7 rule to quick interval estimates',
      'Use the central limit theorem with standard error and continuity correction'
    ],
    concepts: [
      {
        term: 'Normal density and standardization',
        kind: 'definition',
        statement: 'The **normal** `$N(\\mu, \\sigma^{2})$` density bells symmetrically about `$\\mu$` with width `$\\sigma$`, and **`$Z = (X - \\mu) \\div \\sigma$`** ports every probability to the standard table via `normal` `$P(X \\le x) = \\Phi(z)$`. Location shifts the center while scale stretches the width, and standardization strips both away at once. One table of `$\\Phi$` then serves every mean and deviation in existence.',
        detail: 'Symmetry gives `$\\Phi(-z) = 1 - \\Phi(z)$`, so lower tails read off upper ones without a second table.'
      },
      {
        term: 'Empirical rule for quick intervals',
        kind: 'theorem',
        statement: 'About **68 percent** of normal mass lies within one `$\\sigma$`, **95 percent** within two, and **99.7 percent** within three in the `emp68` shorthand. These bands turn standard deviations into instant interval estimates before any table is opened. The rule is normal-specific: skewed data keeps no such promises, and Chebyshev coarser bounds cover the general case.',
        detail: 'Quality-control two-sigma limits therefore flag roughly one observation in twenty for review under normality.'
      },
      {
        term: 'Table workflow for tail probabilities',
        kind: 'method',
        statement: 'The **`$z$`-table workflow** standardizes the boundary, rounds `$z$` to two places, reads `$\\Phi$`, and mirrors for upper tails with `ztable` `$1 - \\Phi(z)$`. Interval chances subtract two cumulative readings, `$\\Phi(z_{2}) - \\Phi(z_{1})$`, keeping every area between zero and one as a built-in check. Memorizing `$\\Phi(1) \\approx 0.8413$` and `$\\Phi(2) \\approx 0.9772$` accelerates the most common lookups.',
        detail: 'A $z$-score of `$1.5$` gives `$\\Phi \\approx 0.9332$`, so the upper tail holds about `$0.0668$`.'
      },
      {
        term: 'Central limit theorem for averages',
        kind: 'theorem',
        statement: 'The **central limit theorem** says the standardized sample mean of `$n$` independent finite-variance draws approaches `$N(0, 1)$`, with **standard error** `$\\sigma \\div \\sqrt{n}$` shrinking the `clt` spread. Averages of skewed or discrete variables still bell up as `$n$` grows, typically past `$30$` for rough work. Sums inherit the same normality with spread `$\\sigma\\sqrt{n}$`, licensing normal approximations far beyond normal data.',
        detail: 'Exponential `$\\lambda = 0.5$` draws average toward `$2$` with error bars `$2 \\div \\sqrt{n}$`, visibly bell-shaped by `$n = 36$`.'
      },
      {
        term: 'Continuity correction for discrete counts',
        kind: 'method',
        statement: '**Continuity correction** widens each integer `$k$` to `$[k - 0.5, k + 0.5]$` before normal approximation, for example `$P(X \\le k) \\approx \\Phi((k + 0.5 - np) \\div \\sqrt{np(1-p)})$` in the `ccorr` adjustment. Bars of the histogram straddle integers while the smooth curve does not, and the half-unit bridge aligns them. Small `$n$` or extreme `$p$` still demand exact computation, since no correction rescues a non-bell shape.',
        detail: 'Without correction the binomial `$P(X \\le 10)$` at `$n = 20$`, `$p = 0.5$` reads `$0.5$`, while correction lifts it to about `$0.588$`.'
      }
    ],
    figures: [
      {
        caption: 'Standard normal bell $\\phi(z)$ with bands at $\\pm 1$, $\\pm 2$, $\\pm 3$ carrying $68$, $95$ and $99.7$ percent, the picture behind every $z$-table lookup.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal bell curve with sigma bands"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">One bell, three bands</text><line x1="60" y1="290" x2="660" y2="290" stroke="currentColor" stroke-width="1.5"/><path d="M 70 285 Q 200 280 270 180 Q 330 90 360 90 Q 390 90 450 180 Q 520 280 650 285" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="300" y1="290" x2="300" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="420" y1="290" x2="420" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="240" y1="290" x2="240" y2="230" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="480" y1="290" x2="480" y2="230" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><text x="360" y="315" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">0</text><text x="300" y="315" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">-1</text><text x="420" y="315" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">+1</text><text x="240" y="315" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">-2</text><text x="480" y="315" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">+2</text><text x="360" y="130" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">68 pct inside +-1</text><text x="360" y="250" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">95 pct inside +-2</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Table probability for a test score',
        problem: 'Scores follow `$N(100, 15^{2})$`. Find `$P(X \\le 115)$` and the two-sigma interval probability.',
        steps: [
          { label: 'Step 1: Standardize the boundary', text: 'Convert `$115$` to `$z = (115 - 100) \\div 15 = 1$`, exactly one deviation above center. Standardization moves the question onto the universal `$\\Phi$` scale.' },
          { label: 'Step 2: Read the table', text: 'The table gives `$\\Phi(1) \\approx 0.8413$`, so about eighty-four percent score at most `$115$`. The complementary upper tail `$0.1587$` holds the remainder above.' },
          { label: 'Step 3: Two-sigma band', text: 'The empirical rule puts about `$0.95$` inside `$100 \\pm 30$`, i.e. `$[70, 130]$`. Table refinement `$\\Phi(2) - \\Phi(-2) \\approx 0.9544$` agrees to the second decimal.' }
        ],
        result: '`$P(X \\le 115) \\approx 0.8413$` with about `$0.9544$` inside two sigma.'
      },
      {
        title: 'Central limit approximation of a mean',
        problem: 'Average `$n = 36$` exponential draws with rate `$0.5$` (mean `$2$`, deviation `$2$`). Approximate `$P(\\bar{X} > 2.5)$` and check by script.',
        steps: [
          { label: 'Step 1: Standard error', text: 'Averages concentrate with `$SE = \\sigma \\div \\sqrt{n} = 2 \\div 6 \\approx 0.3333$`. The theorem needs only finite variance, which the exponential supplies.' },
          { label: 'Step 2: Standardize and read', text: 'The boundary scores `$z = (2.5 - 2) \\div 0.3333 = 1.5$`, giving `$1 - \\Phi(1.5) \\approx 1 - 0.9332 = 0.0668$`. Only about seven percent of such averages clear `$2.5$`.' },
          { label: 'Step 3: Confirm in code', text: '```python\nimport math\nse = 2.0 / math.sqrt(36)\nz = (2.5 - 2.0) / se\nPhi = 0.5 * (1.0 + math.erf(z / math.sqrt(2.0)))\nprint(round(se, 4), round(z, 2), round(1 - Phi, 4))\n# 0.3333 1.5 0.0668\n```\nThe script prints `0.3333 1.5 0.0668`, matching the table route digit for digit.' }
        ],
        result: 'Standard error `$0.3333$` with `$P(\\bar{X} > 2.5) \\approx 0.0668$`.'
      }
    ],
    keyTakeaways: [
      'Every normal probability standardizes to `$\\Phi(z)$` with `$z = (x - \\mu) \\div \\sigma$` and mirrors by symmetry.',
      'The empirical bands hold about `$0.68$`, `$0.95$` and `$0.997$` within one, two and three deviations.',
      'Sample means approach normality with standard error `$\\sigma \\div \\sqrt{n}$` regardless of parent shape.',
      'Continuity correction pads integer boundaries by half a unit before normal approximation.'
    ],
    quiz: [
      {
        q: 'Heights are normal with mean `$170$` and deviation `$10$`. About what share lies in `$[150, 190]$`?',
        options: ['About half', 'About two thirds', 'About 95 percent', 'About 99.9 percent'],
        answer: 2,
        explanation: 'Step 1: Convert bounds to z-scores: minus 2 and plus 2. Step 2: Recognize the two-sigma band. Step 3: The empirical rule assigns about 95 percent. Step 4: Table refinement gives 95.44 percent.'
      },
      {
        q: 'For `$Z$` standard normal, `$P(Z > 1)$` equals which value?',
        options: ['$0.8413$', '$0.1587$', '$0.5$', '$0.9772$'],
        answer: 1,
        explanation: 'Step 1: Read Phi at 1 as 0.8413 for the lower tail. Step 2: Upper tails complement to 1. Step 3: Subtract 1 minus 0.8413 to get 0.1587. Step 4: Symmetry also names P of Z below minus 1 the same.'
      },
      {
        q: 'Averages of `$49$` draws with deviation `$21$` have which standard error?',
        options: ['$3$', '$7$', '$21$', '$0.43$'],
        answer: 0,
        explanation: 'Step 1: Divide sigma by the root of n. Step 2: Root of 49 is 7. Step 3: 21 divided by 7 gives 3. Step 4: Quadrupling n would halve this again to 1.5.'
      },
      {
        q: 'Approximating binomial `$P(X \\le 10)$` with `$n = 20$`, `$p = 0.5$` by normal needs which boundary?',
        options: ['$10$ exactly', '$9.5$ always', '$11$ by symmetry', '$10.5$ with continuity correction'],
        answer: 3,
        explanation: 'Step 1: The bar at 10 spans 9.5 to 10.5. Step 2: Including the whole bar needs the upper edge 10.5. Step 3: Without correction the answer understates at 0.5. Step 4: Correction lifts it near 0.588, closer to exact 0.588.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Central limit theorem and Berry-Esseen sharpness',
        blocks: [
          {
            kind: 'theorem',
            body: 'Let $X_{1}, X_{2}, \\ldots$ be independent identically distributed with mean $\\mu$ and finite variance $\\sigma^{2} > 0$. With $\\bar{X}_{n} = n^{-1} \\sum_{k=1}^{n} X_{k}$ the **Lindeberg Levy** central limit theorem states $\\sqrt{n}(\\bar{X}_{n} - \\mu)/\\sigma \\Rightarrow N(0,1)$, meaning $P(\\sqrt{n}(\\bar{X}_{n}-\\mu)/\\sigma \\leq t) \\to \\Phi(t) = (2\\pi)^{-1/2} \\int_{-\\infty}^{t} e^{-u^{2}/2} \\, du$ at every $t$. Standardization $Z = (X-\\mu)/\\sigma$ is the mechanism: averaging shrinks variance as $\\sigma^{2}/n$ while rescaling restores unit spread, and only the Gaussian is stable under this renormalization.'
          },
          {
            kind: 'proof',
            body: 'Characteristic functions linearize convolution: with $\\varphi(t) = E[e^{i t (X_{1}-\\mu)/\\sigma}] = 1 - t^{2}/2 + o(t^{2})$ from $E[X]=0$, $E[X^{2}]=1$, the standardized mean has $\\varphi_{n}(t) = \\varphi(t/\\sqrt{n})^{n} = (1 - t^{2}/(2n) + o(1/n))^{n} \\to e^{-t^{2}/2}$, the $N(0,1)$ characteristic. Levy continuity upgrades pointwise convergence of characteristic functions to convergence in distribution. Lindeberg condition $\\sum E[|X_{k}|^{2} 1_{|X_{k}| > \\epsilon s_{n}}]/s_{n}^{2} \\to 0$ extends the argument to nonidentical summands by killing dominant terms.'
          },
          {
            kind: 'remark',
            body: '**Berry Esseen** quantifies the rate: $\\sup_{t} |F_{n}(t) - \\Phi(t)| \\leq C \\rho/(\\sigma^{3} \\sqrt{n})$ with $\\rho = E[|X_{1}-\\mu|^{3}]$ and $C < 0.5$, sharp in $n$. Edgeworth expansions add skewness corrections $\\gamma (1-t^{2}) \\phi(t)/(6\\sqrt{n})$. Heavy tails with infinite variance exit the Gaussian basin toward stable laws with slower $n^{1/\\alpha - 1}$ scaling, while large deviations $P(\\bar{X}_{n} - \\mu > \\delta) \\approx e^{-n I(\\delta)}$ decay exponentially via Chernoff Cramér rate functions. Continuity correction $P(a \\leq S_{n} \\leq b) \\approx \\Phi$ with half integer shifts improves discrete counts.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 15.4
  {
    sectionId: 'engmath-ch15-s4',
    readingTime: 8,
    intro: 'Real data arrives in pairs and tuples whose joint behavior exceeds the sum of single-variable margins. Joint distributions record combined chances, marginals recover each variable alone, and covariance with correlation quantify linear association. This section builds the joint-to-marginal pipeline, tests independence, and separates correlation strength from causal claims.',
    objectives: [
      'Write joint PMFs and PDFs and verify their normalization',
      'Extract marginal distributions by summing or integrating out partners',
      'Compute covariance and correlation and interpret their size and sign'
    ],
    concepts: [
      {
        term: 'Joint distributions over pairs',
        kind: 'definition',
        statement: 'A **joint** mass `$p(x, y)$` or density `$f(x, y)$` assigns probability to combined outcomes, normalizing by double sum or double integral to one in the `joint` admissibility test. Rectangle probabilities sum or integrate over that rectangle, extending every single-variable rule one dimension up. Tables display discrete joints directly while surfaces or contours picture continuous ones.',
        detail: 'A `$2 \\times 2$` table with entries `$0.2, 0.3, 0.1, 0.4$` totals one and already supports every later computation.'
      },
      {
        term: 'Marginals by eliminating partners',
        kind: 'method',
        statement: '**Marginals** collapse the joint onto one variable by summing out discrete partners or integrating out continuous ones, `$p_{X}(x) = \\sum_{y} p(x, y)$` in the `marg` projection. Each marginal is a complete distribution alone, answering questions that ignore the other variable. Conditional distributions then divide the joint slice by its marginal, zooming from population to subpopulation.',
        detail: 'Row sums of a joint table are the `$X$` marginal and column sums the `$Y$` marginal, readable without any formula.'
      },
      {
        term: 'Independence test by factorization',
        kind: 'theorem',
        statement: '**Independence** holds exactly when the joint factors, `$p(x, y) = p_{X}(x)p_{Y}(y)$` at every pair, equivalently `$E[XY] = E[X]E[Y]$` for the product moment in the `indep` test. One violating cell destroys independence for the whole model, since factorization must hold everywhere. Dependent variables need the full joint table; no marginal pair reconstructs their coupled chances.',
        detail: 'The `$2 \\times 2$` table above fails at `$0.2$` against `$0.5 \\times 0.3 = 0.15$`, proving dependence in one comparison.'
      },
      {
        term: 'Covariance and correlation',
        kind: 'theorem',
        statement: '**Covariance** `$\\mathrm{Cov}(X, Y) = E[XY] - E[X]E[Y]$` signs the linear tilt, and **correlation** `$\\rho = \\mathrm{Cov} \\div (\\sigma_{X}\\sigma_{Y})$` rescales it into `$[-1, 1]$` in the `cov` standardization. Independent variables always score zero covariance, though zero covariance never guarantees independence. Magnitude near one signals a tight linear cloud while values near zero report linear fog, whatever nonlinear structure hides inside.',
        detail: 'Perfectly linear `$Y = 2X + 1$` data scores `$\\rho = 1$`, while symmetric parabolic clouds score near zero despite exact dependence.'
      },
      {
        term: 'Correlation never proves causation',
        kind: 'insight',
        statement: '**Correlation** tracks linear co-movement only, so lurking variables, reverse causation and coincidence all forge strong correlations without direct cause in the `caus` caution. Randomized experiments and causal designs answer why-questions; observational correlation answers only what-moves-with-what. Every regression slope in the next chapter inherits this boundary between prediction and explanation.',
        detail: 'Ice-cream sales correlate with drowning because summer heat drives both, the textbook lurking-variable exhibit.'
      }
    ],
    figures: [
      {
        caption: 'Scatter of $(X, Y)$ around $(\\bar{x}, \\bar{y})$: quadrant signs of $(x - \\bar{x})(y - \\bar{y})$ vote the covariance positive while the fitted line slope previews $\\rho$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatter plot with mean cross and covariance quadrants"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Quadrants vote the covariance</text><line x1="360" y1="70" x2="360" y2="300" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="130" y1="200" x2="620" y2="200" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="150" y1="270" x2="600" y2="120" stroke="currentColor" stroke-width="2"/><circle cx="250" cy="240" r="7" fill="currentColor"/><circle cx="300" cy="225" r="7" fill="currentColor"/><circle cx="420" cy="180" r="7" fill="currentColor"/><circle cx="470" cy="160" r="7" fill="currentColor"/><circle cx="510" cy="140" r="7" fill="currentColor"/><circle cx="330" cy="215" r="7" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="270" cy="150" r="7" fill="none" stroke="currentColor" stroke-width="2"/><text x="230" y="130" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">negative cells</text><text x="500" y="250" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">negative cells</text><text x="500" y="120" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">positive cells</text><text x="230" y="275" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">positive cells</text><text x="360" y="325" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">solid dots dominate positive quadrants: covariance above zero</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Marginals and independence in a two-by-two table',
        problem: 'Joint masses are `$(0,0): 0.2$`, `$(0,1): 0.3$`, `$(1,0): 0.1$`, `$(1,1): 0.4$`. Find both marginals and test independence.',
        steps: [
          { label: 'Step 1: Row and column sums', text: 'The `$X$` marginal is `$P(X = 0) = 0.5$` and `$P(X = 1) = 0.5$`, while `$Y$` gives `$P(Y = 0) = 0.3$` and `$P(Y = 1) = 0.7$`. Both marginals sum to one as complete distributions must.' },
          { label: 'Step 2: Factorization check', text: 'Under independence `$p(0,0)$` would equal `$0.5 \\times 0.3 = 0.15$`, but the table holds `$0.2$`. A single mismatch anywhere refutes independence everywhere.' },
          { label: 'Step 3: Name the dependence', text: 'Diagonal cells exceed the product benchmark while off-diagonals trail it, so ones travel with ones. The variables associate positively, quantified next by covariance.' }
        ],
        result: 'Marginals `$X: (0.5, 0.5)$` and `$Y: (0.3, 0.7)$`; the joint does not factor, so dependence holds.'
      },
      {
        title: 'Covariance and correlation of the same table',
        problem: 'Compute `$\\mathrm{Cov}(X, Y)$` and `$\\rho$` for the table above, verified by script.',
        steps: [
          { label: 'Step 1: Product moment', text: 'Only cell `$(1, 1)$` contributes to `$E[XY]$`, giving `$1 \\times 1 \\times 0.4 = 0.4$`. Means are `$E[X] = 0.5$` and `$E[Y] = 0.7$` from the marginals.' },
          { label: 'Step 2: Covariance and correlation in code', text: '```python\nimport math\nex, ey, exy = 0.5, 0.7, 0.4\ncov = exy - ex * ey\nvx = 0.5 - ex ** 2\nvy = 0.7 - ey ** 2\nprint(round(cov, 4), round(cov / math.sqrt(vx * vy), 4))\n# 0.05 0.2182\n```\nThe script prints `0.05 0.2182`: covariance `$0.05$` and correlation about `$0.2182$`.' },
          { label: 'Step 3: Interpret honestly', text: 'Positive but modest `$\\rho$` reports mild linear tilt, consistent with the diagonal surplus. It promises nothing about curves in the data and proves no causation either way.' }
        ],
        result: 'Covariance `$0.05$` with correlation about `$0.2182$`, a mild positive linear association.'
      }
    ],
    keyTakeaways: [
      'Joint models normalize by double sum or integral to one over all combined outcomes.',
      'Marginals sum or integrate out partners, and conditionals divide joint slices by marginals.',
      'Independence needs `$p(x,y) = p_{X}(x)p_{Y}(y)$` everywhere, with `$E[XY] = E[X]E[Y]$` as backup.',
      'Correlation `$\\rho$` lives in `$[-1, 1]$` and measures linear tilt, never causation.'
    ],
    quiz: [
      {
        q: 'A joint table has row sums `$0.4, 0.6$`. What is `$P(X = 1)$` if rows index `$X$`?',
        options: ['$0.4$', '$1.0$', '$0.24$', '$0.6$'],
        answer: 3,
        explanation: 'Step 1: Row sums are the X marginal by definition. Step 2: The second row corresponds to X equal to 1. Step 3: That sum is given as 0.6. Step 4: The product 0.24 would need a column factor, unasked here.'
      },
      {
        q: 'Every cell of a joint table equals the product of its marginals. What follows?',
        options: ['The variables are independent', 'The variables are strongly correlated', 'The table is unnormalized', 'Covariance must be large'],
        answer: 0,
        explanation: 'Step 1: Factorization at every cell is the independence definition. Step 2: It is given to hold universally here. Step 3: Hence independence is established exactly. Step 4: Independence further forces covariance to zero, not large.'
      },
      {
        q: 'Two variables have covariance `$-8$` with deviations `$4$` and `$5$`. What is their correlation?',
        options: ['$-40$', '$-0.4$', '$-1.6$', '$0.4$'],
        answer: 1,
        explanation: 'Step 1: Divide covariance by both deviations. Step 2: The denominator is 4 times 5, giving 20. Step 3: Minus 8 divided by 20 equals minus 0.4. Step 4: The result sits inside minus 1 to 1 as required.'
      },
      {
        q: 'Study hours and scores correlate at `$0.85$` observationally. What is licensed?',
        options: ['Extra hours cause higher scores proportionally', 'No statement at all can be made', 'Prediction of scores from hours with strong linear fit, but no causal proof', 'Scores cause study hours'],
        answer: 2,
        explanation: 'Step 1: High correlation supports linear prediction. Step 2: Causation needs experiments or designs, absent here. Step 3: Motivation or background could drive both variables. Step 4: Hence predict freely but explain cautiously.'
      }
    ]
  }
]

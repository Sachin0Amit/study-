import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 16: Mathematical Statistics
// (Kreyszig 10e, Part G, Chapter 25).
// Sections 16.1 – 16.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh16Content: SectionContent[] = [
  // ---------------------------------------------------------------- 16.1
  {
    sectionId: 'engmath-ch16-s1',
    readingTime: 8,
    intro: 'Statistics reverses probability: data arrives first and parameters must be guessed from it. Random sampling supplies representative observations while estimators convert them into parameter guesses with measurable quality. This section defines samples and statistics, scores estimators by bias, variance and mean squared error, and builds maximum-likelihood and moment-matching estimators.',
    objectives: [
      'Distinguish populations from random samples and parameters from statistics',
      'Score estimators with bias, variance and mean squared error',
      'Derive maximum-likelihood and method-of-moments estimates on small models'
    ],
    concepts: [
      {
        term: 'Random samples and statistics',
        kind: 'definition',
        statement: 'A **random sample** `$X_{1}, \\ldots, X_{n}$` collects independent identically distributed draws from the population, while a **statistic** is any computable function of them such as `$\\bar{X}$` or `$S^{2}$` in the `iid` framework. Parameters like `$\\mu$` describe the unseen population and statistics estimate them from the seen sample. Independence plus identical distribution is the license for every sampling-distribution result that follows.',
        detail: 'The sample mean `$\\bar{X}$` is random before sampling with spread `$\\sigma \\div \\sqrt{n}$`, but turns into one fixed number after the data lands.'
      },
      {
        term: 'Bias, variance and mean squared error',
        kind: 'definition',
        statement: '**Bias** `$E[\\hat{\\theta}] - \\theta$` reports systematic miss direction, **variance** reports estimator wiggle, and **mean squared error** `$\\mathrm{MSE} = \\mathrm{Var} + \\mathrm{bias}^{2}$` totals both in the `mse` scorecard. Unbiasedness centers the estimator correctly on average while small variance keeps individual estimates near that center. Comparing estimators means comparing MSE first, since an unbiased but wild estimator can lose to a slightly biased steady one.',
        detail: 'An estimator centered at `$10.5$` with variance `$0.25$` for `$\\theta = 10$` carries MSE `$0.5$`, half from each source.'
      },
      {
        term: 'Sample mean and the unbiased sample variance',
        kind: 'theorem',
        statement: 'The sample mean `$\\bar{X}$` is unbiased for `$\\mu$` with variance `$\\sigma^{2} \\div n$`, and **`$S^{2} = \\sum (X_{i} - \\bar{X})^{2} \\div (n - 1)$`** is unbiased for `$\\sigma^{2}$` through the `unbias` Bessel correction. Dividing by `$n$` instead would systematically underestimate spread because the same data centers and scatters itself. The lost degree of freedom pays for estimating `$\\mu$` by `$\\bar{X}$` inside the sum.',
        detail: 'With three observations the `$n - 1 = 2$` divisor inflates the raw scatter by half, exactly offsetting the centering shrinkage.'
      },
      {
        term: 'Maximum-likelihood estimation',
        kind: 'method',
        statement: '**Maximum likelihood** picks the parameter maximizing the observed-data probability `$L(\\theta)$`, in practice maximizing `$\\log L$` term by term in the `mle` program. For Bernoulli trials this yields the sample proportion `$\\hat{p} = x \\div n$`, and for normal data it yields `$\\bar{X}$` beside the `$n$`-divisor variance. Likelihood inherits invariance under reparameterization, so `$g(\\hat{\\theta})$` estimates `$g(\\theta)$` automatically.',
        detail: 'Seven heads in ten tosses give `$\\hat{p} = 0.7$`, the value making the observed run most probable among all candidates.'
      },
      {
        term: 'Method of moments',
        kind: 'method',
        statement: 'The **method of moments** equates population moments to sample moments and solves for the parameters, matching means first and adding variances as needed in the `mom` recipe. Uniform `$U(0, b)$` data give `$\\hat{b} = 2\\bar{X}$` from the mean `$b \\div 2$` alone. Moments are simpler than likelihoods but can stumble outside parameter bounds or waste information that likelihood would keep.',
        detail: 'A sample mean of `$3$` from `$U(0, b)$` estimates `$\\hat{b} = 6$`, using one moment for one parameter.'
      }
    ],
    figures: [
      {
        caption: 'Estimator quality as targets: unbiased scatters center on $\\theta$, biased ones sit off-center, and tighter clusters show smaller variance at equal bias.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four target diagrams showing bias versus variance"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Bias aims, variance groups</text><circle cx="140" cy="200" r="70" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="140" cy="200" r="40" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="140" cy="200" r="5" fill="currentColor"/><circle cx="120" cy="180" r="6" fill="currentColor"/><circle cx="160" cy="220" r="6" fill="currentColor"/><circle cx="155" cy="175" r="6" fill="currentColor"/><circle cx="125" cy="225" r="6" fill="currentColor"/><text x="140" y="300" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">unbiased, spread out</text><circle cx="360" cy="200" r="70" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="360" cy="200" r="40" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="360" cy="200" r="5" fill="currentColor"/><circle cx="352" cy="192" r="6" fill="currentColor"/><circle cx="368" cy="208" r="6" fill="currentColor"/><circle cx="366" cy="192" r="6" fill="currentColor"/><circle cx="354" cy="208" r="6" fill="currentColor"/><text x="360" y="300" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">unbiased, tight</text><circle cx="580" cy="200" r="70" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="580" cy="200" r="40" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="580" cy="200" r="5" fill="currentColor"/><circle cx="610" cy="230" r="6" fill="currentColor"/><circle cx="622" cy="242" r="6" fill="currentColor"/><circle cx="618" cy="228" r="6" fill="currentColor"/><circle cx="606" cy="242" r="6" fill="currentColor"/><text x="580" y="300" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">biased, tight</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Maximum-likelihood coin bias from ten tosses',
        problem: 'Seven heads appear in ten tosses. Estimate the head probability by maximum likelihood and by moments.',
        steps: [
          { label: 'Step 1: Likelihood shape', text: 'The likelihood `$L(p) = p^{7}(1-p)^{3}$` times `$\\binom{10}{7}$` peaks where log-likelihood derivative `$7 \\div p - 3 \\div (1-p)$` vanishes. Solving gives `$\\hat{p} = 7 \\div 10 = 0.7$`, the observed proportion.' },
          { label: 'Step 2: Moments agree here', text: 'Bernoulli mean is `$p$` itself, so matching `$\\bar{X} = 0.7$` reproduces `$\\hat{p} = 0.7$`. Agreement is typical for single-parameter location problems, not a general rule.' },
          { label: 'Step 3: Report with honesty', text: 'The point estimate `$0.7$` carries standard error `$\\sqrt{0.21 \\div 10} \\approx 0.145$`, so the interval view of the next section matters more than the lonely number.' }
        ],
        result: 'Both methods give `$\\hat{p} = 0.7$` with standard error about `$0.145$`.'
      },
      {
        title: 'Score an estimator by bias and MSE',
        problem: 'An estimator of `$\\theta = 10$` has expected value `$10.5$` and variance `$0.25$`. Compute its bias and MSE, confirmed by script.',
        steps: [
          { label: 'Step 1: Bias', text: 'Bias is `$10.5 - 10 = 0.5$`, a systematic overshoot of half a unit. Sign matters for correction even though MSE squares it away.' },
          { label: 'Step 2: MSE in code', text: '```python\nbias, var = 0.5, 0.25\nmse = var + bias ** 2\nprint(bias, mse)  # 0.5 0.5\n```\nThe script prints `0.5 0.5`: MSE `$0.25 + 0.25 = 0.5$`, split evenly between wiggle and miss.' },
          { label: 'Step 3: Compare fairly', text: 'A competing unbiased estimator with variance `$0.6$` loses despite zero bias, since `$0.6 > 0.5$`. MSE is the single scoreboard behind such choices.' }
        ],
        result: 'Bias `$0.5$` with MSE `$0.5$`, beating any unbiased estimator of variance above `$0.5$`.'
      }
    ],
    keyTakeaways: [
      'Random samples are i.i.d. draws while statistics are data functions estimating population parameters.',
      'MSE equals variance plus squared bias, the single scoreboard ranking competing estimators.',
      'The `$n - 1$` divisor makes `$S^{2}$` unbiased for `$\\sigma^{2}$`, paying one degree of freedom.',
      'Maximum likelihood maximizes `$L(\\theta)$` while moments match averages, agreeing on `$\\hat{p} = x \\div n$`.'
    ],
    quiz: [
      {
        q: 'Which quantity is a statistic rather than a parameter?',
        options: ['Population mean `$\\mu$`', 'Population variance `$\\sigma^{2}$`', 'Sample mean `$\\bar{X}$`', 'True success chance `$p$`'],
        answer: 2,
        explanation: 'Step 1: Parameters describe the unseen population. Step 2: Statistics compute from the seen sample. Step 3: Only the sample mean uses observed data. Step 4: The rest are fixed unknowns to estimate.'
      },
      {
        q: 'An estimator has bias `$0.2$` and variance `$0.21$`. What is its MSE?',
        options: ['$0.25$', '$0.41$', '$0.21$', '$0.04$'],
        answer: 0,
        explanation: 'Step 1: Square the bias: 0.2 squared gives 0.04. Step 2: Add the variance 0.21. Step 3: The total is 0.25. Step 4: Variance alone would underreport by the squared bias.'
      },
      {
        q: 'Why does `$S^{2}$` divide by `$n - 1$` instead of `$n$`?',
        options: ['To make the units match', 'To offset centering by the sample mean and stay unbiased', 'To enlarge every estimate deliberately', 'To match the median instead'],
        answer: 1,
        explanation: 'Step 1: Deviations center on estimated x-bar, not true mu. Step 2: That centering shrinks the raw scatter systematically. Step 3: Dividing by n minus 1 inflates exactly enough. Step 4: The result targets sigma squared on average.'
      },
      {
        q: 'Twelve successes in `$20$` Bernoulli trials give which MLE of `$p$`?',
        options: ['$0.5$', '$0.4$', '$0.12$', '$0.6$'],
        answer: 3,
        explanation: 'Step 1: The Bernoulli MLE is the sample proportion. Step 2: Divide 12 by 20. Step 3: The quotient is 0.6. Step 4: Moments match the same value here.'
      }
    ]
  },
  // ---------------------------------------------------------------- 16.2
  {
    sectionId: 'engmath-ch16-s2',
    readingTime: 9,
    intro: 'Point estimates gain meaning only with stated uncertainty, which confidence intervals supply as ranges with calibrated coverage. Normal theory with known spread uses z-values while estimated spread switches to t-values, and proportions get their own standard-error form. This section constructs all three interval types, interprets coverage honestly, and shows what narrows or widens the band.',
    objectives: [
      'Build z-intervals for means with known spread and read their margins',
      'Switch to t-intervals when spread is estimated and state the degrees of freedom',
      'Form proportion intervals and explain width drivers and coverage meaning'
    ],
    concepts: [
      {
        term: 'Interval logic and coverage',
        kind: 'definition',
        statement: 'A **95 percent confidence interval** is a random range covering the fixed parameter in about 95 of 100 repetitions, centering at the estimate plus or minus a `cover` margin. Coverage describes the procedure across repeats, never the probability that one computed interval caught its target. Wider confidence demands wider intervals, the price list read directly off the critical values.',
        detail: 'Ninety-five percent coverage with 99 percent confidence needs the larger `$2.576$` multiplier, visibly widening every band.'
      },
      {
        term: 'z-interval for the mean with known spread',
        kind: 'method',
        statement: 'With known `$\\sigma$`, the interval **`$\\bar{x} \\pm z_{\\alpha/2}\\,\\sigma \\div \\sqrt{n}$`** centers at the sample mean with standard-error-scaled `zint` margin. The `$95$` percent multiplier `$z = 1.96$` is the working constant of applied statistics. Quadrupling `$n$` halves the width, the square-root return on sampling effort.',
        detail: 'Mean `$50$` with `$\\sigma = 10$` and `$n = 100$` gives `$50 \\pm 1.96$`, the canonical chalkboard interval.'
      },
      {
        term: 't-interval when spread is estimated',
        kind: 'method',
        statement: 'Replacing `$\\sigma$` by `$s$` swaps `$z$` for **`$t_{n-1}$`** with `$n - 1$` degrees of freedom, widening bands to pay for the extra estimation in the `tint` adjustment. Heavy uncertainty at tiny `$n$` inflates `$t$` far above `$1.96$`, while large samples merge `$t$` back into `$z$`. Normal or near-normal data justify the swap; heavy skew calls for larger samples first.',
        detail: 'With `$n = 5$`, the 95 percent `$t$` value `$2.776$` exceeds `$z$` by over forty percent, the small-sample penalty made visible.'
      },
      {
        term: 'Interval for a proportion',
        kind: 'method',
        statement: 'Proportions use **`$\\hat{p} \\pm z_{\\alpha/2}\\sqrt{\\hat{p}(1-\\hat{p}) \\div n}$`**, with the estimated spread inside the `pint` margin. Validity needs enough successes and failures, classically at least five of each, so the normal approximation holds. Near-zero or near-one proportions switch to exact or Wilson intervals rather than forcing the symmetric form.',
        detail: 'Polling `$400$` voters at `$\\hat{p} = 0.6$` gives margin about `$0.048$`, the familiar plus-or-minus five points of headline polls.'
      },
      {
        term: 'Width drivers and honest reading',
        kind: 'insight',
        statement: '**Width shrinks** with larger `$n$` and smaller confidence, and grows with spread and confidence level in the `width` trade table. Overlapping intervals do not settle significance by themselves, and a narrow interval around a biased estimate misleads with confidence. Design effort therefore targets the dominant width driver: usually sample size, sometimes measurement noise.',
        detail: 'To halve a poll margin at fixed confidence requires four times the respondents, the quadratic cost of precision.'
      }
    ],
    figures: [
      {
        caption: 'Five 95 percent intervals for $\\mu = 50$: four cross the center line while one misses, the $1$-in-$20$ miss rate that coverage $0.95$ predicts.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five confidence intervals with one missing the mean"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Coverage means most catch</text><line x1="360" y1="80" x2="360" y2="290" stroke="currentColor" stroke-width="2"/><text x="360" y="70" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">mu = 50</text><line x1="280" y1="120" x2="430" y2="120" stroke="currentColor" stroke-width="6"/><circle cx="355" cy="120" r="6" fill="currentColor"/><line x1="300" y1="160" x2="450" y2="160" stroke="currentColor" stroke-width="6"/><circle cx="375" cy="160" r="6" fill="currentColor"/><line x1="250" y1="200" x2="340" y2="200" stroke="currentColor" stroke-width="6"/><circle cx="295" cy="200" r="6" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="290" y1="240" x2="440" y2="240" stroke="currentColor" stroke-width="6"/><circle cx="365" cy="240" r="6" fill="currentColor"/><line x1="270" y1="275" x2="420" y2="275" stroke="currentColor" stroke-width="6"/><circle cx="345" cy="275" r="6" fill="currentColor"/><text x="360" y="320" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">four cross the line, one misses: 95 pct behavior</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'z-interval for a production mean',
        problem: 'A sample of `$n = 100$` has `$\\bar{x} = 50$` with known `$\\sigma = 10$`. Build the 95 percent interval.',
        steps: [
          { label: 'Step 1: Standard error', text: 'Divide spread by root size: `$10 \\div \\sqrt{100} = 1$`. Each observation contributes, but the root law compresses their joint power.' },
          { label: 'Step 2: Margin and band', text: 'Multiply by `$1.96$` for margin `$1.96$`, giving `$(48.04, 51.96)$`. The interval spans roughly four units around the estimate.' },
          { label: 'Step 3: Honest interpretation', text: 'The procedure covers the true mean in 95 of 100 repeats; this particular band either does or does not. Width halves only at `$n = 400$`, pricing precision explicitly.' }
        ],
        result: '95 percent interval `$(48.04, 51.96)$` around `$\\bar{x} = 50$`.'
      },
      {
        title: 'Poll margin for a proportion',
        problem: 'Of `$n = 400$` voters, `$240$` favor a proposal. Build the 95 percent interval for the true share with a script.',
        steps: [
          { label: 'Step 1: Sample share', text: 'The estimate is `$\\hat{p} = 240 \\div 400 = 0.6$`. Successes and failures both exceed five comfortably, licensing the normal form.' },
          { label: 'Step 2: Margin in code', text: '```python\nimport math\np, n = 0.6, 400\nse = math.sqrt(p * (1 - p) / n)\nmargin = 1.96 * se\nprint(round(se, 4), round(margin, 4))  # 0.0245 0.048\n```\nThe script prints `0.0245 0.048`: standard error `$0.0245$` with margin `$0.048$`, giving `$(0.552, 0.648)$`.' },
          { label: 'Step 3: Read the headline', text: 'Sixty percent plus or minus about five points keeps the entire band above half, so majority support is established at this confidence. Halving the margin would need sixteen hundred respondents.' }
        ],
        result: '95 percent interval `$(0.552, 0.648)$` with margin about `$0.048$`.'
      }
    ],
    keyTakeaways: [
      'Intervals center at the estimate plus or minus margin, with coverage describing repeat behavior.',
      'Known-spread means use `$\\bar{x} \\pm z\\sigma \\div \\sqrt{n}$` with `$1.96$` at 95 percent.',
      'Estimated spread switches to `$t_{n-1}$`, wider at small `$n$` and merging into `$z$` when large.',
      'Proportion margins scale with `$\\sqrt{\\hat{p}(1-\\hat{p}) \\div n}$`, and quadrupling `$n$` halves width.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2017 — confidence interval margin scaling (rephrased)
      {
        q: 'A 95 percent z-interval with `$n = 100$` is `$4$` wide. About how wide at `$n = 400$` with the same `$\\sigma$`?',
        options: ['$2$', '$4$', '$8$', '$1$'],
        answer: 0,
        explanation: 'Step 1: Width scales with 1 over root n. Step 2: Quadrupling n halves the root factor. Step 3: Half of 4 is 2. Step 4: Doubling n instead would give about 2.83.'
      },
      {
        q: 'Why is a 95 percent t-interval with `$n = 6$` wider than the z-interval from the same data?',
        options: ['t tables are misprinted for small n', 'Degrees of freedom remove all variance', 'Estimating spread adds uncertainty priced by heavier t tails', 't-intervals use the population mean'],
        answer: 2,
        explanation: 'Step 1: z-intervals assume sigma known exactly. Step 2: t-intervals estimate sigma by s from 6 points. Step 3: That extra estimation widens bands via t at 5 degrees. Step 4: As n grows t sinks back onto z.'
      },
      {
        q: 'What does 95 percent coverage mean for one computed interval `$(3.1, 4.2)$`?',
        options: ['Mu lies inside with probability 0.95', 'The procedure catches mu in 95 of 100 repeats', 'Ninety-five percent of data fall inside', 'The interval holds 95 observations'],
        answer: 1,
        explanation: 'Step 1: Mu is fixed, the interval was random before sampling. Step 2: Coverage describes the method across repeats. Step 3: About 95 of 100 such bands cover mu. Step 4: This band either covers or misses; no probability remains.'
      },
      {
        q: 'A proportion interval needs validity. Which check applies before using the normal form?',
        options: ['The sample must exceed the population', 'Severe skew above 2.0', 'z must equal t exactly', 'At least five successes and five failures'],
        answer: 3,
        explanation: 'Step 1: Normal approximation needs enough of both outcomes. Step 2: The classic floor is five successes and five failures. Step 3: Near-boundary shares need exact methods instead. Step 4: Sample never exceeds its population.'
      }
    ]
  },
  // ---------------------------------------------------------------- 16.3
  {
    sectionId: 'engmath-ch16-s3',
    readingTime: 9,
    intro: 'Hypothesis tests convert data into decisions with controlled error rates, extending interval logic to accept-or-reject verdicts. The null hypothesis faces the data through a test statistic, p-values measure surprise, and named sampling distributions supply the reference scales. This section builds z and t tests for means, chi-square goodness of fit, F comparisons of spread, and the error taxonomy behind them all.',
    objectives: [
      'State null and alternative hypotheses with rejection regions and p-values',
      'Run z and t tests for means and interpret Type I and Type II errors',
      'Apply chi-square goodness of fit and F variance-ratio tests correctly'
    ],
    concepts: [
      {
        term: 'Null logic with test statistics',
        kind: 'definition',
        statement: 'The **null** `$H_{0}$` states the default under challenge while the **alternative** `$H_{1}$` states the change to detect, and a **test statistic** compresses data into one number compared against its `h0` null distribution. Rejection regions hold the most surprising values at total probability `$\\alpha$`, the significance level. Two-sided regions split `$\\alpha$` across both tails for change in either direction.',
        detail: 'Testing `$\\mu = 100$` against `$\\mu \\ne 100$` rejects for large `$|z|$`, while `$\\mu > 100$` rejects only for large positive `$z$`.'
      },
      {
        term: 'p-values with Type I and II errors',
        kind: 'theorem',
        statement: 'The **p-value** is the null probability of data at least as extreme as observed, rejecting `$H_{0}$` when it falls below `$\\alpha$` in the `pval` decision rule. **Type I error** falsely rejects truth at rate `$\\alpha$` while **Type II error** misses real effects at rate `$\\beta$`, with **power** `$1 - \\beta$` as the detection chance. Bigger samples and bigger effects both raise power at fixed `$\\alpha$`, the design levers of every experiment.',
        detail: 'A p-value of `$0.03$` rejects at `$\\alpha = 0.05$` but not at `$\\alpha = 0.01$`, showing significance is always relative to the chosen level.'
      },
      {
        term: 'z and t tests for means',
        kind: 'method',
        statement: '**z-tests** standardize with known `$\\sigma$` while **t-tests** studentize with estimated `$s$` and `$n - 1$` degrees of freedom in the `ttest` pair. One-sample tests face a benchmark, two-sample tests compare groups, and paired tests difference matched units before testing once. Assumptions run from normality for tiny samples down to large-sample robustness, checked by plots before verdicts.',
        detail: 'A two-sample statistic near `$2.1$` with large `$n$` clears the `$1.96$` bar, declaring the group gap significant at five percent.'
      },
      {
        term: 'Chi-square goodness of fit',
        kind: 'theorem',
        statement: '**Goodness of fit** sums **`$\\sum (O - E)^{2} \\div E$`** over categories, referring the total to `$\\chi^{2}$` with `$k - 1 - m$` degrees of freedom for `$k$` cells and `$m$` estimated parameters in the `chi2` recipe. Large totals signal observed counts straying beyond sampling wobble from the claimed model. Each expected count should reach at least five, merging sparse cells before testing.',
        detail: 'Counts `$(30, 50, 20)$` against `$(25, 50, 25)$` give `$\\chi^{2} = 2$` on `$2$` degrees, far below the `$5.99$` bar.'
      },
      {
        term: 'F ratio for spreads with nonparametric backup',
        kind: 'method',
        statement: 'The **F statistic** `$F = s_{1}^{2} \\div s_{2}^{2}$` compares two variances against `$F$` tables indexed by both degrees of freedom in the `ftest` check. Normality matters more here than for means, so skewed data reroute to robust Levene-style or rank procedures. When distributions resist all parametric shapes, **nonparametric** sign and rank tests decide by orderings rather than values.',
        detail: 'An `$F$` near one supports equal spread while values far above one indict the numerator group as more variable.'
      }
    ],
    figures: [
      {
        caption: 'Two-sided $z$-test at $\\alpha = 0.05$: rejection past $\\pm 1.96$ shades both tails while the observed $z = 1.5$ lands inside, so $H_{0}$ stands.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two sided rejection regions with observed statistic"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Rejection lives in the tails</text><line x1="60" y1="290" x2="660" y2="290" stroke="currentColor" stroke-width="1.5"/><path d="M 70 285 Q 200 280 270 180 Q 330 90 360 90 Q 390 90 450 180 Q 520 280 650 285" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="180" y1="290" x2="180" y2="200" stroke="currentColor" stroke-width="2"/><line x1="540" y1="290" x2="540" y2="200" stroke="currentColor" stroke-width="2"/><text x="180" y="315" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">-1.96</text><text x="540" y="315" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">+1.96</text><text x="110" y="250" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">reject</text><text x="610" y="250" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">reject</text><line x1="450" y1="290" x2="450" y2="150" stroke="currentColor" stroke-width="2.5"/><circle cx="450" cy="145" r="7" fill="currentColor"/><text x="450" y="130" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">z = 1.5: keep H0</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'z-test of a shifted production mean',
        problem: 'Test `$H_{0}: \\mu = 100$` against `$\\mu \\ne 100$` at `$\\alpha = 0.05$` with `$\\bar{x} = 103$`, `$\\sigma = 10$`, `$n = 25$`.',
        steps: [
          { label: 'Step 1: Standardize', text: 'The standard error is `$10 \\div 5 = 2$`, so `$z = (103 - 100) \\div 2 = 1.5$`. The sample sits one and a half errors above the benchmark.' },
          { label: 'Step 2: Compare with critical values', text: 'Two-sided five percent testing rejects past `$\\pm 1.96$`, and `$1.5$` falls inside. The p-value `$2(1 - \\Phi(1.5)) \\approx 0.1336$` exceeds `$0.05$`, confirming the verdict numerically.' },
          { label: 'Step 3: Phrase the conclusion', text: 'Evidence is insufficient to reject `$H_{0}$` at five percent; the mean may still exceed `$100$`, but these data do not establish it. A larger sample could shrink the error enough to flip the call.' }
        ],
        result: '`$z = 1.5$` with p-value about `$0.1336$`: keep `$H_{0}$` at `$\\alpha = 0.05$`.'
      },
      {
        title: 'Chi-square test of a claimed split',
        problem: 'Counts `$(30, 50, 20)$` face the claimed split `$(25, 50, 25)$`. Test fit at `$\\alpha = 0.05$` with a script.',
        steps: [
          { label: 'Step 1: Chi-square total', text: 'Cell contributions are `$(30-25)^{2} \\div 25 = 1$`, `$0$`, and `$(20-25)^{2} \\div 25 = 1$`, totaling `$\\chi^{2} = 2$`. All expected counts clear five, so the reference distribution applies.' },
          { label: 'Step 2: Degrees and bar in code', text: '```python\nobs = [30, 50, 20]\nexp = [25, 50, 25]\nchi2 = sum((o - e) ** 2 / e for o, e in zip(obs, exp))\nprint(chi2)  # 2.0 against 5.99 on df = 2\n```\nThe script prints `2.0` against the five percent bar `$5.99$` on `$3 - 1 = 2$` degrees.' },
          { label: 'Step 3: Verdict', text: 'Since `$2 < 5.99$`, the data fit the claimed split adequately at five percent. Rejection would need far larger cell surprises.' }
        ],
        result: '`$\\chi^{2} = 2$` on `$2$` degrees below `$5.99$`: the split stands.'
      }
    ],
    keyTakeaways: [
      'Tests pit `$H_{0}$` against `$H_{1}$` through statistics with `$\\alpha$`-sized rejection regions.',
      'p-values reject below `$\\alpha$`, while Type I errors run at `$\\alpha$` and power at `$1 - \\beta$`.',
      'Means use z with known spread and t with estimated spread across one, two and paired designs.',
      'Fit sums `$(O-E)^{2} \\div E$` against chi-square while spreads compare through `$F = s_{1}^{2} \\div s_{2}^{2}$`.'
    ],
    quiz: [
      {
        q: 'A test returns p-value `$0.02$` at `$\\alpha = 0.05$`. What is the decision?',
        options: ['Keep `$H_{0}$` since 0.02 is small', 'Reject `$H_{0}$` since p is below alpha', 'Accept `$H_{1}$` as proven true', 'The test is invalid without the raw data'],
        answer: 1,
        explanation: 'Step 1: Compare p 0.02 against alpha 0.05. Step 2: Smaller p means more surprising under H0. Step 3: Below alpha triggers rejection. Step 4: Rejection flags evidence, not proof of H1.'
      },
      {
        q: 'Which error is controlled directly at the significance level `$\\alpha$`?',
        options: ['Type II error beta', 'Measurement bias', 'Type I error of false rejection', 'Rounding error'],
        answer: 2,
        explanation: 'Step 1: Alpha sizes the rejection region under H0. Step 2: Landing there when H0 holds is false rejection. Step 3: That mistake is Type I by definition. Step 4: Beta instead needs power analysis with an effect size.'
      },
      {
        q: 'Goodness of fit on `$4$` categories with no estimated parameters uses how many degrees of freedom?',
        options: ['$4$', '$2$', '$1$', '$3$'],
        answer: 3,
        explanation: 'Step 1: Start from cell count 4. Step 2: Subtract 1 for the total constraint. Step 3: Subtract 0 estimated parameters. Step 4: The reference is chi-square on 3 degrees.'
      },
      {
        q: 'Two sample variances `$s_{1}^{2} = 12$` and `$s_{2}^{2} = 3$` give which F statistic for testing equal spread?',
        options: ['$4$', '$15$', '$9$', '$0.25$'],
        answer: 0,
        explanation: 'Step 1: Form the ratio of sample variances. Step 2: Divide 12 by 3 to get 4. Step 3: Large F values indict unequal spread. Step 4: Tables with both degrees of freedom judge significance.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Neyman-Pearson and duality of tests and intervals',
        blocks: [
          {
            kind: 'theorem',
            body: 'For simple $H_{0}: \\theta = \\theta_{0}$ versus $H_{1}: \\theta = \\theta_{1}$ the **Neyman Pearson** lemma states that the most powerful size $\\alpha$ test rejects for large likelihood ratio $\\Lambda = L(\\theta_{1})/L(\\theta_{0}) > k$, with randomized boundary when needed. Under monotone likelihood ratio the one sided test $T > c$ is uniformly most powerful by Karlin Rubin. Duality inverts tests to sets: $C(x) = \\\\{\\theta_{0} : x \\text{ accepts } H_{0}\\\\}$ is a $1-\\alpha$ confidence set, and every confidence procedure inverts to a family of tests. Power $1-\\beta$ and size $\\alpha$ trade through sample size $n$.'
          },
          {
            kind: 'proof',
            body: 'Let $\\phi^{\\ast} = 1_{\\\\{\\Lambda > k\\\\}}$ with $E_{0}[\\phi^{\\ast}] = \\alpha$ and let $\\phi$ be any competing size $\\alpha$ test. Then $(\\phi^{\\ast} - \\phi)(\\Lambda - k) \\geq 0$ pointwise, since $\\phi^{\\ast} = 1$ exactly where $\\Lambda > k$. Integrating against $L_{0}$ gives $\\int (\\phi^{\\ast} - \\phi)(L_{1} - k L_{0}) \\geq 0$, so $E_{1}[\\phi^{\\ast}] - E_{1}[\\phi] \\geq k(\\alpha - \\alpha) = 0$. Hence $\\phi^{\\ast}$ maximizes power. The threshold $k$ is the Lagrange multiplier for the size constraint, and sufficiency lets $\\Lambda$ depend only on sufficient statistics by factorization.'
          },
          {
            kind: 'application',
            body: 'Inversion builds intervals: accept $|\\bar{X} - \\mu_{0}| \\leq z_{1-\\alpha/2} \\sigma/\\sqrt{n}$ for each $\\mu_{0}$ and collect survivors to get $\\bar{X} \\pm z_{1-\\alpha/2} \\sigma/\\sqrt{n}$. Reported $p = \\inf \\\\{\\alpha : \\text{reject at } \\alpha\\\\}$ is the smallest size allowing rejection. Power analysis sizes $n$ from $(\\sigma(z_{1-\\alpha} + z_{1-\\beta})/\\delta)^{2}$ for shift $\\delta$. Multiplicity breaks naive $p$ values: Bonferroni divides $\\alpha$ by the number of tests while Benjamini Hochberg controls false discovery rate, the modern response to replication and $p$ hacking concerns.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 16.4
  {
    sectionId: 'engmath-ch16-s4',
    readingTime: 8,
    intro: 'Regression fits lines through scattered data by least squares, turning cloud trends into slopes, intercepts and predictions. The normal equations deliver closed-form coefficients while correlation scores the linear strength. This section derives the least-squares line, reads residuals for model health, and warns prediction beyond the data range.',
    objectives: [
      'Fit least-squares lines from summary sums with slope and intercept formulas',
      'Compute correlation and interpret its strength without causal overreach',
      'Check residuals for curvature and respect prediction boundaries'
    ],
    concepts: [
      {
        term: 'Least-squares criterion',
        kind: 'definition',
        statement: 'Least squares chooses intercept `$a$` and slope `$b$` minimizing **`$\\mathrm{SSE} = \\sum (y_{i} - a - bx_{i})^{2}$`**, the total squared vertical miss in the `sse` objective. Squaring penalizes large misses hardest and keeps the mathematics differentiable everywhere. Vertical misses assume `$x$` is fixed and `$y$` carries the noise, the regression direction that matters for prediction.',
        detail: 'Minimizing absolute misses instead would give robust median-style fits at the price of harder computation.'
      },
      {
        term: 'Normal equations with slope and intercept',
        kind: 'theorem',
        statement: 'Zeroing both partial derivatives gives slope **`$b = S_{xy} \\div S_{xx}$`** and intercept **`$a = \\bar{y} - b\\bar{x}$`**, where `$S_{xx}$` and `$S_{xy}$` sum squared and cross deviations in the `slope` solution. The fitted line always passes through `$(\\bar{x}, \\bar{y})$`, the balance point of the cloud. One pass over the data accumulating five sums then closes the whole fit.',
        detail: 'Four points `$(1, 2), (2, 3), (3, 5), (4, 4)$` give `$S_{xx} = 5$` and `$S_{xy} = 4$`, hence `$b = 0.8$` with `$a = 1.5$`.'
      },
      {
        term: 'Correlation scores linear strength',
        kind: 'theorem',
        statement: '**Correlation** **`$r = S_{xy} \\div \\sqrt{S_{xx}S_{yy}}$`** standardizes the slope into `$[-1, 1]$`, with `$r^{2}$` reporting the response variance fraction explained in the `corr` gauge. Steep slopes on tight clouds score near `$\\pm 1$` while shapeless clouds score near zero regardless of scale. Significance testing divides `$r$` by its standard error, since `$0.8$` on six points proves less than on six hundred.',
        detail: 'The four-point example scores `$r = 0.8$`, with `$64$` percent of variation explained linearly.'
      },
      {
        term: 'Residual plots diagnose the fit',
        kind: 'insight',
        statement: '**Residuals** `$e_{i} = y_{i} - \\hat{y}_{i}$` should scatter randomly about zero, and any curve or fan in their plot indicts the straight-line model through the `resid` lens. Curved bands call for transformations or polynomials while widening fans call for weighted fits. Numerical summaries never substitute for this one picture, which exposes structure that `$r$` alone hides.',
        detail: 'A U-shaped residual band around a fitted line advertises a missing quadratic term louder than any statistic.'
      },
      {
        term: 'Prediction respects the data range',
        kind: 'insight',
        statement: '**Extrapolation** beyond observed `$x$` gambles that the line continues where no data checks it, while interpolation inside the range inherits the fit guarantees in the `extrap` boundary. Far-out predictions compound slope uncertainty with model-form risk, the two multipliers of embarrassment. Honest reporting pairs each forecast with its interval, widening with distance from `$\\bar{x}$`.',
        detail: 'Predicting at `$x = 5$` from data ending at `$4$` is mild, but projecting to `$x = 50$` invites structural breaks.'
      }
    ],
    figures: [
      {
        caption: 'Least-squares line $\\hat{y} = 1.5 + 0.8x$ through four points with $r = 0.8$: vertical residual ticks show the squared misses that SSE totals.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatter with regression line and residuals"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Line through the cloud</text><line x1="80" y1="300" x2="660" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="80" y1="300" x2="80" y2="70" stroke="currentColor" stroke-width="1.5"/><line x1="110" y1="250" x2="600" y2="110" stroke="currentColor" stroke-width="2.5"/><circle cx="180" cy="228" r="8" fill="currentColor"/><circle cx="300" cy="200" r="8" fill="currentColor"/><circle cx="420" cy="150" r="8" fill="currentColor"/><circle cx="540" cy="175" r="8" fill="currentColor"/><line x1="180" y1="228" x2="180" y2="232" stroke="currentColor" stroke-width="2"/><line x1="300" y1="200" x2="300" y2="204" stroke="currentColor" stroke-width="2"/><line x1="420" y1="150" x2="420" y2="176" stroke="currentColor" stroke-width="2"/><line x1="540" y1="175" x2="540" y2="148" stroke="currentColor" stroke-width="2"/><text x="470" y="120" font-family="sans-serif" font-size="13" font-weight="bold" fill="currentColor">y-hat line</text><text x="250" y="330" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">vertical ticks are residuals</text></svg>`,
        afterConcept: 2
      }
    ],
    derivations: [
      {
        title: 'Least-Squares Normal Equations for a Line',
        statement: 'Derivation of $b = \\frac{S_{xy}}{S_{xx}}$ and $a = \\bar{y} - b\\bar{x}$ by minimising $\\mathrm{SSE} = \\sum_{i}(y_{i} - a - bx_{i})^{2}$',
        prerequisites: [
          'Squared-error objective $\\mathrm{SSE}(a,b)$ in slope $b$ and intercept $a$',
          'Stationary point of a convex quadratic is its global minimiser',
          'Sample means $\\bar{x}$ and $\\bar{y}$ with centred sums $S_{xx}$ and $S_{xy}$',
        ],
        steps: [
          {
            label: 'Step 1: Write the squared-error objective',
            formula: '$$\\mathrm{SSE}(a,b) = \\sum_{i=1}^{n}(y_{i} - a - bx_{i})^{2}$$',
            explanation: 'Measure fit by total squared vertical miss, which penalises large deviations hardest while staying differentiable everywhere. This choice works because squaring makes the objective a convex paraboloid in $a$ and $b$ with a single bowl bottom. Vertical misses encode the modelling assumption that $x$ is fixed and $y$ carries noise.',
          },
          {
            label: 'Step 2: Zero the intercept partial derivative',
            formula: '$$\\frac{\\partial \\mathrm{SSE}}{\\partial a} = -2\\sum_{i=1}^{n}(y_{i} - a - bx_{i}) = 0$$',
            explanation: 'Differentiate termwise in $a$, bringing down a factor of $-2$ times each residual. Setting this to zero works because at the bowl bottom every directional slope must vanish. Dividing by $-2n$ gives $a = \\bar{y} - b\\bar{x}$, so the line passes through the cloud centre.',
          },
          {
            label: 'Step 3: Zero the slope partial derivative',
            formula: '$$\\frac{\\partial \\mathrm{SSE}}{\\partial b} = -2\\sum_{i=1}^{n}x_{i}(y_{i} - a - bx_{i}) = 0$$',
            explanation: 'Differentiate termwise in $b$, where the chain rule leaves an extra $x_{i}$ factor on each term. This second stationarity condition works because the minimum must be flat in the $b$ direction as well. Together the two zero-derivative equations form the $2 \\times 2$ normal system for $a$ and $b$.',
          },
          {
            label: 'Step 4: Solve the normal system for slope and intercept',
            formula: '$$b = \\frac{S_{xy}}{S_{xx}}, \\quad a = \\bar{y} - b\\bar{x}$$',
            explanation: 'Substitute $a = \\bar{y} - b\\bar{x}$ into the slope equation and collect $b$ terms, which centres the data and decouples the unknowns. This elimination works because centred cross sums $S_{xy}$ and $S_{xx}$ absorb all mean-level shifts. Positivity of $S_{xx}$ for nonconstant $x$ guarantees a unique minimiser rather than a ridge.',
          },
        ],
        result: 'The minimisers are $b = \\frac{S_{xy}}{S_{xx}}$ and $a = \\bar{y} - b\\bar{x}$, meaning the best line passes through the mean point with slope equal to the ratio of cross to horizontal spread.',
      },
    ],
    examples: [
      {
        title: 'Least-squares line through four points',
        problem: 'Fit `$\\hat{y} = a + bx$` to `$(1, 2), (2, 3), (3, 5), (4, 4)$` by least squares.',
        steps: [
          { label: 'Step 1: Centers and sums', text: 'Means are `$\\bar{x} = 2.5$` and `$\\bar{y} = 3.5$`. Deviations give `$S_{xx} = 2.25 + 0.25 + 0.25 + 2.25 = 5$` and `$S_{xy} = 2.25 + 0.25 + 0.75 + 0.75 = 4$`.' },
          { label: 'Step 2: Slope and intercept', text: 'Slope `$b = 4 \\div 5 = 0.8$` with intercept `$a = 3.5 - 0.8 \\times 2.5 = 1.5$`, so `$\\hat{y} = 1.5 + 0.8x$`. The line passes through `$(2.5, 3.5)$` as theory demands.' },
          { label: 'Step 3: Residual glance', text: 'Fitted values `$2.3, 3.1, 3.9, 4.7$` leave residuals `$-0.3, -0.1, 1.1, -0.7$` summing to zero. No curve pattern appears across four points, so the line stands.' }
        ],
        result: 'Fitted line `$\\hat{y} = 1.5 + 0.8x$` with zero-sum residuals.'
      },
      {
        title: 'Correlation, explained variance and a forecast',
        problem: 'For the same four points compute `$r$`, the explained fraction, and forecast at `$x = 5$` with a script.',
        steps: [
          { label: 'Step 1: Spread of y', text: 'Squared deviations of `$y$` give `$S_{yy} = 2.25 + 0.25 + 2.25 + 0.25 = 5$`. Both clouds spread equally here, simplifying the ratio.' },
          { label: 'Step 2: Correlation in code', text: '```python\nsxx, syy, sxy = 5.0, 5.0, 4.0\nr = sxy / (sxx * syy) ** 0.5\nprint(round(r, 4), round(r ** 2, 4))  # 0.8 0.64\n```\nThe script prints `0.8 0.64`: correlation `$0.8$` with `$64$` percent of variance explained linearly.' },
          { label: 'Step 3: Forecast with caution', text: 'At `$x = 5$` the line gives `$1.5 + 4 = 5.5$`, just past the data edge at `$4$`. Mild extrapolation is defensible; distant projection would need model evidence beyond four points.' }
        ],
        result: 'Correlation `$0.8$`, explained fraction `$0.64$`, forecast `$5.5$` at `$x = 5$`.'
      }
    ],
    keyTakeaways: [
      'Least squares minimizes `$\\sum (y_{i} - a - bx_{i})^{2}$`, fixing `$x$` and charging vertical misses.',
      'Slope `$b = S_{xy} \\div S_{xx}$` with `$a = \\bar{y} - b\\bar{x}$` puts the line through the cloud center.',
      'Correlation `$r$` in `$[-1, 1]$` scores linear strength with `$r^{2}$` explained.',
      'Residual plots expose curvature while extrapolation beyond data gambles on untested structure.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2019 — regression slope from summary sums (rephrased)
      {
        q: 'Summary sums give `$S_{xx} = 10$` and `$S_{xy} = 30$` with `$\\bar{x} = 2$`, `$\\bar{y} = 9$`. What is the least-squares line?',
        options: ['`$\\hat{y} = 3 + 3x$`', '`$\\hat{y} = 9 + 3x$`', '`$\\hat{y} = 3 + 10x$`', '`$\\hat{y} = 2 + 30x$`'],
        answer: 0,
        explanation: 'Step 1: Slope is 30 divided by 10, giving 3. Step 2: Intercept is 9 minus 3 times 2, giving 3. Step 3: The line is 3 plus 3x. Step 4: It passes through (2, 9) as required.'
      },
      {
        q: 'A fit reports `$r = -0.9$`. What does it mean?',
        options: ['Weak positive association', 'No association at all', 'Strong negative linear association', 'Proven causation downward'],
        answer: 2,
        explanation: 'Step 1: Magnitude 0.9 sits near the 1 endpoint. Step 2: That signals a tight linear cloud. Step 3: The minus sign makes it decreasing. Step 4: Causation stays unproven regardless of strength.'
      },
      {
        q: 'Residuals against `$x$` form a clear U shape. What is indicated?',
        options: ['The line fits perfectly', 'Constant variance confirmed', 'An outlier-free ideal sample', 'A missing quadratic curve in the model'],
        answer: 3,
        explanation: 'Step 1: Good fits leave structureless residual scatter. Step 2: A U shape is systematic structure. Step 3: Curvature points at a quadratic term. Step 4: Adding x squared should straighten the plot.'
      },
      {
        q: 'Data span `$x$` from `$10$` to `$20$`. Which forecast is safest?',
        options: ['At `$x = 50$`', 'At `$x = 15$`', 'At `$x = 0$`', 'All equally safe'],
        answer: 1,
        explanation: 'Step 1: Inside-range prediction is interpolation. Step 2: x equal to 15 sits centrally in the data. Step 3: Far points extrapolate untested structure. Step 4: Hence 15 inherits fit guarantees the others lack.'
      }
    ]
  }
]

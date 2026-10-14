import type { SectionContent } from '../library'

// ============================================================================
// JEE Mathematics Companion — Chapter 10: Statistics & Probability
// Master study content (sections 10.1 - 10.4).
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const jeemathsCh10Content: SectionContent[] = [
  // ---------------------------------------------------------------- 10.1
  {
    sectionId: 'advmath-ch10-s1',
    readingTime: 8,
    intro: 'Mean, median and mode locate the centre of data while variance and standard deviation quantify its spread. Grouped-data formulas with assumed means and step deviations keep hand computation feasible. This section builds those summaries with shortcut formulas and comparability properties.',
    objectives: [
      'Compute mean, median and mode for raw and grouped data including empirical relations',
      'Evaluate variance and standard deviation via direct and shortcut formulas',
      'Apply shift, scaling and combined-mean rules to transformed datasets'
    ],
    concepts: [
      {
        term: 'Mean for raw and grouped data',
        kind: 'definition',
        statement: 'The **arithmetic mean** $\\bar{x} = \\frac{1}{n}\\sum x_{i}$ extends to grouped `frequency-mean` $\\bar{x} = \\frac{\\sum f_{i}x_{i}}{\\sum f_{i}}$ with class marks $x_{i}$.',
        detail: 'Assumed-mean shortcut: $\\bar{x} = A + \\frac{\\sum f_{i}d_{i}}{\\sum f_{i}}$ with $d_{i} = x_{i}-A$. Step-deviation: $\\bar{x} = A + h\\frac{\\sum f_{i}u_{i}}{\\sum f_{i}}$ with $u_{i} = (x_{i}-A)/h$. Combined mean of groups: $\\frac{n_{1}\\bar{x}_{1}+n_{2}\\bar{x}_{2}}{n_{1}+n_{2}}$.'
      },
      {
        term: 'Median and mode',
        kind: 'definition',
        statement: 'The **median** is the middle ordered value (or mean of the two middles), and for grouped data `median-class` $M = l + \\frac{\\frac{N}{2}-cf}{f}\\cdot h$.',
        detail: 'Mode is the most frequent value; grouped: $Z = l + \\frac{f_{1}-f_{0}}{2f_{1}-f_{0}-f_{2}}\\cdot h$. Empirical relation: $Z = 3M - 2\\bar{x}$ for moderately skew distributions.'
      },
      {
        term: 'Variance and standard deviation',
        kind: 'theorem',
        statement: 'Population **variance** $\\sigma^{2} = \\frac{1}{n}\\sum(x_{i}-\\bar{x})^{2} = \\frac{\\sum x_{i}^{2}}{n} - \\bar{x}^{2}$ with `sd-root` $\\sigma = \\sqrt{\\sigma^{2}}$.',
        detail: 'Grouped: $\\sigma^{2} = \\frac{\\sum f_{i}(x_{i}-\\bar{x})^{2}}{\\sum f_{i}}$. Shortcut with assumed mean: $\\sigma^{2} = \\frac{\\sum f_{i}d_{i}^{2}}{\\sum f_{i}} - \\left(\\frac{\\sum f_{i}d_{i}}{\\sum f_{i}}\\right)^{2}$. Variance is in squared units; $\\sigma$ restores original units.'
      },
      {
        term: 'Shift and scale behaviour',
        kind: 'theorem',
        statement: 'Adding $k$ shifts the **mean and median** by $k$ but leaves `variance-fixed` $\\sigma^{2}$ unchanged; multiplying by $k$ scales mean, median and $\\sigma$ by $k$ but variance by $k^{2}$.',
        detail: 'Consequences: $\\mathrm{Var}(ax+b) = a^{2}\\mathrm{Var}(x)$. Standardization $z = \\frac{x-\\bar{x}}{\\sigma}$ yields mean $0$, deviation $1$. Use to compare datasets in different units.'
      },
      {
        term: 'Range and mean deviation',
        kind: 'notation',
        statement: 'Spread is also read as **range** (max minus min) and `md-form` mean deviation $\\frac{1}{n}\\sum|x_{i}-m|$ about a central $m$.',
        detail: 'Mean deviation is minimized at the median for absolute deviations. Coefficient of variation $\\frac{\\sigma}{\\bar{x}}\\times 100$ compares relative spread when means differ.'
      }
    ],
    examples: [
      {
        title: 'Variance via the raw-moment shortcut',
        problem: 'Five observations $2, 4, 6, 8, 10$ have mean $6$. Compute variance and standard deviation directly and by shortcut.',
        steps: [
          { label: 'Step 1', text: 'Direct:\n```tex\nsigma^2 = ((2-6)^2 + (4-6)^2 + 0 + 4 + 16)/5 = 40/5 = 8\n```\nSo $\\sigma = \\sqrt{8} = 2\\sqrt{2}$.' },
          { label: 'Step 2', text: 'Shortcut: $\\frac{\\sum x_{i}^{2}}{n} - \\bar{x}^{2} = \\frac{4+16+36+64+100}{5} - 36 = 44 - 36 = 8$.' },
          { label: 'Step 3', text: 'Adding $5$ to each value keeps variance $8$ while mean becomes $11$; doubling scales variance to $32$.' }
        ],
        result: 'Variance $8$, standard deviation $2\\sqrt{2}$, illustrating shift-invariance and scale rules.'
      },
      {
        title: 'Combined mean of two groups',
        problem: 'Group A of $30$ students averages $70$ marks; group B of $20$ averages $80$. Find the combined mean and discuss spread comparison.',
        steps: [
          { label: 'Step 1', text: 'Combined $\\bar{x} = \\frac{30(70)+20(80)}{50} = \\frac{2100+1600}{50} = 74$.' },
          { label: 'Step 2', text: 'If group deviations are $\\sigma_{A} = 5$, $\\sigma_{B} = 10$, coefficients of variation are $\\frac{5}{70}$ versus $\\frac{10}{80}$, so B is relatively more spread.' },
          { label: 'Step 3', text: 'Combined variance needs between-group term $\\frac{n_{1}n_{2}}{(n_{1}+n_{2})^{2}}(\\bar{x}_{1}-\\bar{x}_{2})^{2}$ plus pooled within-group variance.' }
        ],
        result: 'Combined mean $74$; relative spread compared via $\\sigma/\\bar{x}$.'
      }
    ],
    keyTakeaways: [
      'Mean $\\frac{\\sum f_{i}x_{i}}{\\sum f_{i}}$ with assumed-mean and step-deviation shortcuts handles grouped data.',
      'Median $l + \\frac{N/2-cf}{f}h$ and mode $l + \\frac{f_{1}-f_{0}}{2f_{1}-f_{0}-f_{2}}h$ obey $Z = 3M - 2\\bar{x}$.',
      'Variance $\\frac{\\sum x_{i}^{2}}{n}-\\bar{x}^{2}$ with root $\\sigma$ measures spread in squared versus original units.',
      'Shifts preserve variance; scaling by $k$ scales $\\sigma$ by $|k|$ and variance by $k^{2}$.'
    ],
    quiz: [
      {
        q: 'Variance of $2, 4, 6, 8, 10$ is:',
        options: [`$6$`, `$8$`, `$10$`, `$40$`],
        answer: 1,
        explanation: 'Step 1: Mean is $6$. Step 2: Squared deviations are $16, 4, 0, 4, 16$. Step 3: Sum is $40$. Step 4: Divide by $5$ to get $8$.'
      },
      {
        q: 'If each observation is doubled, variance becomes:',
        options: ['Four times', 'Doubled', 'Unchanged', 'Halved'],
        answer: 0,
        explanation: 'Step 1: $\\mathrm{Var}(ax+b) = a^{2}\\mathrm{Var}(x)$. Step 2: Here $a = 2$. Step 3: Factor is $4$. Step 4: So variance quadruples, the first option.'
      },
      // PYQ-pattern: empirical mode-median-mean relation
      {
        q: 'For a moderately skew distribution with mean $20$ and median $22$, the empirical mode is:',
        options: [`$24$`, `$18$`, `$26$`, `$21$`],
        answer: 2,
        explanation: 'Step 1: Use $Z = 3M - 2\\bar{x}$. Step 2: Substitute $3(22) - 2(20)$. Step 3: Compute $66 - 40 = 26$. Step 4: Hence mode $26$, the third option.'
      },
      {
        q: 'Coefficient of variation equals:',
        options: [`$\\frac{\\bar{x}}{\\sigma}\\times 100$`, `$\\sigma\\bar{x}\\times 100$`, `$\\frac{\\sigma^{2}}{\\bar{x}}$`, `$\\frac{\\sigma}{\\bar{x}}\\times 100$`],
        answer: 3,
        explanation: 'Step 1: It is a relative spread measure. Step 2: Divide deviation by mean. Step 3: Multiply by $100$ for percent. Step 4: Fourth option matches.'
      }
    ]
  },
  // ---------------------------------------------------------------- 10.2
  {
    sectionId: 'advmath-ch10-s2',
    readingTime: 8,
    intro: 'Classical probability assigns $\\frac{\\text{favourable}}{\\text{total}}$ under equally likely outcomes, and the addition and multiplication theorems extend it to unions and intersections. Conditional probability $P(A|B)$ renormalizes the sample space to $B$. This section builds those theorems with independence tests.',
    objectives: [
      'Count favourable over total outcomes for coins, dice, cards and urn draws',
      'Apply $P(A\\cup B)$ and $P(A\\cap B)$ theorems with mutual-exclusivity checks',
      'Evaluate $P(A|B)$ and test independence via $P(A\\cap B) = P(A)P(B)$'
    ],
    concepts: [
      {
        term: 'Classical probability and counting',
        kind: 'definition',
        statement: 'Under equally likely outcomes, **classical probability** is $P(E) = \\frac{n(E)}{n(S)}$ with `count-ratio` $0 \\le P(E) \\le 1$ and $P(S) = 1$.',
        detail: 'Counting via permutations and combinations supplies $n(E), n(S)$. Complement: $P(\\bar{E}) = 1 - P(E)$. Odds in favour $a:b$ mean $P = \\frac{a}{a+b}$.'
      },
      {
        term: 'Addition theorem',
        kind: 'theorem',
        statement: 'For any events, the **union rule** is $P(A\\cup B) = P(A) + P(B) - P(A\\cap B)$, reducing to the `disjoint-sum` $P(A)+P(B)$ when mutually exclusive.',
        detail: 'Three-event extension adds pairwise intersections back with sign alternation and subtracts-adds the triple intersection. Use complements for at-least-one tasks: $1 - P(\\text{none})$.'
      },
      {
        term: 'Conditional probability',
        kind: 'definition',
        statement: 'The **conditional** $P(A|B) = \\frac{P(A\\cap B)}{P(B)}$ for $P(B) > 0$ renormalizes to `given-B` universe $B$.',
        detail: 'Multiplication form: $P(A\\cap B) = P(B)P(A|B)$. Chain: $P(A\\cap B\\cap C) = P(A)P(B|A)P(C|A\\cap B)$. Drawing without replacement creates conditional chains.'
      },
      {
        term: 'Independence test',
        kind: 'theorem',
        statement: 'Events are **independent** exactly when the `product-test` $P(A\\cap B) = P(A)P(B)$ holds, equivalently $P(A|B) = P(A)$.',
        detail: 'Pairwise does not imply mutual for three events; need all subset products. Independent complements are also independent. Sampling with replacement preserves independence across draws.'
      },
      {
        term: 'Balls-urns-cards templates',
        kind: 'method',
        statement: 'Standard **draw templates** fix total counts first: $52$ cards with `deck-split` $13$ per suit, dice $6^{n}$ outcomes, urn hypergeometric $\\frac{\\binom{a}{r}\\binom{b}{s}}{\\binom{a+b}{r+s}}$.',
        detail: 'With replacement: multiply per-draw probabilities. Without: chain conditionals or hypergeometric counts. At-least-one card or ace tasks favor complement counting.'
      }
    ],
    examples: [
      {
        title: 'Two-dice sum via counting',
        problem: 'Two fair dice are thrown. Find the probability the sum is $9$.',
        steps: [
          { label: 'Step 1', text: 'Total outcomes:\n```tex\nn(S) = 6 x 6 = 36 equally likely pairs\n```\nFavourable pairs for sum $9$: $(3,6), (4,5), (5,4), (6,3)$.' },
          { label: 'Step 2', text: 'Count $n(E) = 4$. Hence $P = \\frac{4}{36} = \\frac{1}{9}$.' },
          { label: 'Step 3', text: 'Complement $\\frac{8}{9}$ is sum not $9$. Symmetry gives same for sums $5$? No — $9$ has four ways while $7$ has six.' }
        ],
        result: 'Probability $\\frac{1}{9}$ for sum $9$ on two fair dice.'
      },
      {
        title: 'Conditional draw without replacement',
        problem: 'An urn has $5$ red and $3$ black balls. Two are drawn without replacement. Find probability both are red and $P(\\text{second red}|\\text{first red})$.',
        steps: [
          { label: 'Step 1', text: 'First draw: $P(R_{1}) = \\frac{5}{8}$. Given $R_{1}$, seven remain with four red, so $P(R_{2}|R_{1}) = \\frac{4}{7}$.' },
          { label: 'Step 2', text: 'Joint: $P(R_{1}\\cap R_{2}) = \\frac{5}{8}\\cdot\\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$.' },
          { label: 'Step 3', text: 'Hypergeometric check: $\\frac{\\binom{5}{2}}{\\binom{8}{2}} = \\frac{10}{28} = \\frac{5}{14}$. Matches the chain.' }
        ],
        result: 'Joint $\\frac{5}{14}$ with conditional $\\frac{4}{7}$ on the second draw.'
      }
    ],
    keyTakeaways: [
      '$P(E) = n(E)/n(S)$ under equal likelihood; complements handle at-least-one efficiently.',
      '$P(A\\cup B) = P(A)+P(B)-P(A\\cap B)$; drop the intersection only when mutually exclusive.',
      '$P(A|B) = P(A\\cap B)/P(B)$ chains without-replacement draws into products.',
      'Independence is $P(A\\cap B) = P(A)P(B)$; pairwise success does not guarantee mutual independence.'
    ],
    quiz: [
      {
        q: 'A fair die shows an even number. Probability is:',
        options: [`$\\frac{1}{6}$`, `$\\frac{1}{2}$`, `$\\frac{1}{3}$`, `$\\frac{2}{3}$`],
        answer: 1,
        explanation: 'Step 1: Outcomes are $\\{1,\\ldots,6\\}$. Step 2: Evens are $\\{2,4,6\\}$. Step 3: Count ratio $3/6$. Step 4: Simplify to $\\frac{1}{2}$.'
      },
      {
        q: 'For mutually exclusive $A, B$ with $P(A) = 0.3$, $P(B) = 0.4$, $P(A\\cup B)$ equals:',
        options: [`$0.7$`, `$0.12$`, `$0.58$`, `$1.0$`],
        answer: 0,
        explanation: 'Step 1: Use $P(A\\cup B) = P(A)+P(B)$. Step 2: Intersection is $0$. Step 3: Sum is $0.7$. Step 4: First option matches.'
      },
      // PYQ-pattern: conditional draw without replacement
      {
        q: 'Urn with $4$ white, $6$ black balls; one drawn then second without replacement. If first is white, $P(\\text{second white})$ is:',
        options: [`$\\frac{4}{10}$`, `$\\frac{3}{9}$`, `$\\frac{3}{10}$`, `$\\frac{4}{9}$`],
        answer: 1,
        explanation: 'Step 1: After one white, $9$ remain. Step 2: Whites left are $3$. Step 3: Ratio is $3/9$. Step 4: Simplify to $\\frac{1}{3}$.'
      },
      {
        q: '$A, B$ independent with $P(A) = 0.5$, $P(B) = 0.4$. Then $P(A\\cap B)$ is:',
        options: [`$0.9$`, `$0.1$`, `$0.2$`, `$0.0$`],
        answer: 2,
        explanation: 'Step 1: Independence gives product form. Step 2: Multiply $0.5 \\times 0.4$. Step 3: Result $0.2$. Step 4: Third option matches.'
      }
    ]
  },
  // ---------------------------------------------------------------- 10.3
  {
    sectionId: 'advmath-ch10-s3',
    readingTime: 9,
    intro: 'Total probability decomposes an event across a partition of the sample space, weighting each branch by its prior. Bayes theorem inverts the conditioning to yield posterior probabilities of causes given observed effects. This section trains partition setup and posterior computation without omission errors.',
    objectives: [
      'Construct exhaustive mutually exclusive partitions for total-probability tasks',
      'Compute $P(A) = \\sum P(E_{i})P(A|E_{i})$ across branches',
      'Invert with Bayes $P(E_{i}|A)$ for posterior cause probabilities'
    ],
    concepts: [
      {
        term: 'Partition of sample space',
        kind: 'definition',
        statement: 'A **partition** $\\{E_{1},\\ldots,E_{n}\\}$ is exhaustive and pairwise disjoint with `union-S` $\\bigcup E_{i} = S$, so exactly one $E_{i}$ occurs.',
        detail: 'Typical partitions: which urn or box was chosen, which batch a unit came from, disease present versus absent. Verify probabilities sum to $1$ and branches do not overlap.'
      },
      {
        term: 'Law of total probability',
        kind: 'theorem',
        statement: 'For a partition, the **total-probability** rule is $P(A) = \\sum_{i=1}^{n} P(E_{i})P(A|E_{i})$, the `weighted-sum` over branches.',
        detail: 'Tree reading: multiply along each root-to-leaf path, then add across leaves ending in $A$. Missing a branch or misweighting priors is the standard error.'
      },
      {
        term: 'Bayes theorem',
        kind: 'theorem',
        statement: 'The **Bayes inversion** is $P(E_{i}|A) = \\frac{P(E_{i})P(A|E_{i})}{\\sum_{j} P(E_{j})P(A|E_{j})}$ with `posterior-form` posterior proportional to prior times likelihood.',
        detail: 'Numerator is the $i$th branch path; denominator is total $P(A)$. Posteriors across $i$ sum to $1$. High likelihood can overturn a small prior with strong evidence.'
      },
      {
        term: 'Prior-likelihood-posterior language',
        kind: 'notation',
        statement: 'Call $P(E_{i})$ the **prior**, $P(A|E_{i})$ the `likelihood-term` likelihood, and $P(E_{i}|A)$ the posterior after observing $A$.',
        detail: 'Sequential updating: posterior from one observation becomes prior for the next when observations are conditionally independent given causes. Keep the conditioning order straight.'
      },
      {
        term: 'Odds form of Bayes',
        kind: 'insight',
        statement: 'For two causes, **posterior odds** equal prior odds times `likelihood-ratio`: $\\frac{P(E_{1}|A)}{P(E_{2}|A)} = \\frac{P(E_{1})}{P(E_{2})}\\cdot\\frac{P(A|E_{1})}{P(A|E_{2})}$.',
        detail: 'Useful when only relative plausibility is needed. Taking logs converts updating into addition of evidence weights. Ratio above one favors $E_{1}$.'
      }
    ],
    derivations: [
      {
        title: 'Bayes Rule from the Partition Law of Total Probability',
        statement: 'Derivation of $P(E_{i}|A) = \\frac{P(E_{i})P(A|E_{i})}{\\sum_{j}P(E_{j})P(A|E_{j})}$ for a partition $\\{E_{j}\\}$',
        prerequisites: [
          'Conditional probability $P(U|V) = \\frac{P(U \\cap V)}{P(V)}$ for $P(V) > 0$',
          'Partition branches are disjoint and exhaustive with total one',
          'Multiplication rule $P(E_{i} \\cap A) = P(E_{i})P(A|E_{i})$',
        ],
        steps: [
          {
            label: 'Step 1: Define the posterior as a ratio',
            formula: '$$P(E_{i}|A) = \\frac{P(E_{i} \\cap A)}{P(A)}$$',
            explanation: 'Start from the definition of conditioning on the observed event $A$ with $P(A) > 0$. This works because posterior means the fraction of $A$ outcomes that also lie in cause $E_{i}$. The numerator and denominator are now separate targets.',
          },
          {
            label: 'Step 2: Factor the numerator along its branch',
            formula: '$$P(E_{i} \\cap A) = P(E_{i})P(A|E_{i})$$',
            explanation: 'Rewrite the intersection as prior times likelihood by the multiplication rule. This works because travelling down branch $E_{i}$ then into $A$ multiplies the branch weight by the branch-conditional chance. The numerator is now prior-weighted evidence for that single cause.',
          },
          {
            label: 'Step 3: Expand the denominator across all branches',
            formula: '$$P(A) = \\sum_{j}P(E_{j})P(A|E_{j})$$',
            explanation: 'Split $A$ by which partition member occurs, since exactly one $E_{j}$ accompanies each outcome. This works because disjointness turns the probability of the union into a sum, and exhaustiveness guarantees no $A$ mass is missed. The denominator is therefore the weighted total of $A$ over every cause.',
          },
          {
            label: 'Step 4: Divide to obtain the inversion formula',
            formula: '$$P(E_{i}|A) = \\frac{P(E_{i})P(A|E_{i})}{\\sum_{j}P(E_{j})P(A|E_{j})}$$',
            explanation: 'Substitute the branch product and the total-probability sum into the ratio from the first step. This division works because both pieces describe the same joint mass, so their ratio is the share of $A$ attributable to $E_{i}$. Posteriors over $i$ sum to one since numerators partition the denominator.',
          },
        ],
        result: 'Posterior $P(E_{i}|A) = \\frac{P(E_{i})P(A|E_{i})}{\\sum_{j}P(E_{j})P(A|E_{j})}$, meaning the updated cause probability is its prior-weighted path divided by the total probability of the evidence.',
      },
    ],
    examples: [
      {
        title: 'Urn partition with total probability',
        problem: 'Box I has $3$ red, $2$ black balls; box II has $2$ red, $4$ black. A box is chosen fairly and one ball drawn. Find $P(\\text{red})$.',
        steps: [
          { label: 'Step 1', text: 'Partition $E_{1}, E_{2}$ with priors:\n```tex\nP(E1) = P(E2) = 1/2; P(R|E1) = 3/5; P(R|E2) = 2/6 = 1/3\n```\nBranches are exhaustive and disjoint.' },
          { label: 'Step 2', text: 'Total: $P(R) = \\frac{1}{2}\\cdot\\frac{3}{5} + \\frac{1}{2}\\cdot\\frac{1}{3} = \\frac{3}{10} + \\frac{1}{6} = \\frac{9+5}{30} = \\frac{14}{30} = \\frac{7}{15}$.' },
          { label: 'Step 3', text: 'Posterior illustration: $P(E_{1}|R) = \\frac{3/10}{7/15} = \\frac{9}{14}$, so a red draw favors box I.' }
        ],
        result: 'Total red probability $\\frac{7}{15}$ with posterior $\\frac{9}{14}$ on box I given red.'
      },
      {
        title: 'Bayes inversion for a diagnostic branch',
        problem: 'Two batches supply $70$ percent and $30$ percent of units with defect rates $0.02$ and $0.05$. Given a defective unit, find the probability it came from batch II.',
        steps: [
          { label: 'Step 1', text: 'Priors $P(B_{1}) = 0.7$, $P(B_{2}) = 0.3$; likelihoods $P(D|B_{1}) = 0.02$, $P(D|B_{2}) = 0.05$.' },
          { label: 'Step 2', text: 'Total $P(D) = 0.7(0.02) + 0.3(0.05) = 0.014 + 0.015 = 0.029$.' },
          { label: 'Step 3', text: 'Bayes: $P(B_{2}|D) = \\frac{0.015}{0.029} = \\frac{15}{29} \\approx 0.517$. Despite the smaller prior, higher likelihood makes batch II slightly favored.' }
        ],
        result: 'Posterior $\\frac{15}{29}$ on batch II given defect.'
      }
    ],
    keyTakeaways: [
      'Partitions must be exhaustive and disjoint with priors summing to $1$.',
      '$P(A) = \\sum P(E_{i})P(A|E_{i})$ multiplies along paths then adds across $A$-leaves.',
      '$P(E_{i}|A)$ divides the $i$th path by the total; posteriors sum to $1$.',
      'Posterior odds factor as prior odds times likelihood ratio for two-cause comparisons.'
    ],
    quiz: [
      // PYQ-pattern: two-urn total probability then Bayes posterior
      {
        q: 'Boxes I ($3R,2B$) and II ($2R,4B$) chosen fairly; $P(\\text{red})$ equals:',
        options: [`$\\frac{7}{15}$`, `$\\frac{1}{2}$`, `$\\frac{3}{5}$`, `$\\frac{8}{15}$`],
        answer: 0,
        explanation: 'Step 1: Priors are $\\frac{1}{2}$ each. Step 2: Likelihoods $\\frac{3}{5}$ and $\\frac{1}{3}$. Step 3: Total $\\frac{1}{2}\\cdot\\frac{3}{5}+\\frac{1}{2}\\cdot\\frac{1}{3} = \\frac{7}{15}$. Step 4: First option matches.'
      },
      {
        q: 'In the same setup, given red, $P(\\text{box I}|\\text{red})$ equals:',
        options: [`$\\frac{5}{14}$`, `$\\frac{9}{14}$`, `$\\frac{1}{2}$`, `$\\frac{7}{15}$`],
        answer: 1,
        explanation: 'Step 1: Branch I path is $\\frac{3}{10}$. Step 2: Total is $\\frac{7}{15}$. Step 3: Ratio $\\frac{3/10}{7/15} = \\frac{9}{14}$. Step 4: Second option matches.'
      },
      {
        q: 'Batches $70$ percent at $2$ percent defect and $30$ percent at $5$ percent defect; $P(\\text{defect})$ is:',
        options: [`$0.029$`, `$0.035$`, `$0.07$`, `$0.05$`],
        answer: 0,
        explanation: 'Step 1: Paths are $0.014$ and $0.015$. Step 2: Add to get $0.029$. Step 3: This is the Bayes denominator. Step 4: First option matches.'
      },
      {
        q: 'Posterior odds form for two causes equals prior odds times:',
        options: ['Posterior ratio', 'Likelihood ratio $P(A|E_{1})/P(A|E_{2})$', 'Total probability $P(A)$', 'Joint $P(E_{1}\\cap E_{2})$'],
        answer: 1,
        explanation: 'Step 1: Write both Bayes numerators. Step 2: Divide to cancel $P(A)$. Step 3: Left with prior ratio times likelihood ratio. Step 4: Second option names it.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Bayesian inversion and partition coherence',
        blocks: [
          {
            kind: 'theorem',
            body: 'Let events $E_{1}, \\ldots, E_{n}$ partition the sample space with $P(E_{i}) > 0$. Then **total probability** gives $P(A) = \\sum_{i} P(A|E_{i})P(E_{i})$ for any $A$, and **Bayes inversion** gives $P(E_{k}|A) = P(A|E_{k})P(E_{k})/P(A)$. Posteriors cohere: $\\sum_{k} P(E_{k}|A) = 1$ whenever $P(A) > 0$. In odds form for two causes, $P(E_{1}|A)/P(E_{2}|A) = (P(E_{1})/P(E_{2})) (P(A|E_{1})/P(A|E_{2}))$, so the posterior odds equal prior odds times the likelihood ratio. The update is sharp: no other assignment respects both the partition and the observed likelihoods.'
          },
          {
            kind: 'proof',
            body: 'From $P(A|E_{i}) = P(A \\cap E_{i})/P(E_{i})$ we get $P(A \\cap E_{i}) = P(A|E_{i})P(E_{i})$, and disjointness of the branches gives total probability by additivity. Dividing $P(E_{k} \\cap A)$ by $P(A)$ yields Bayes formula. Summing numerators reproduces the denominator $P(A)$, proving coherence. The odds form follows by writing Bayes for $E_{1}$ and $E_{2}$ and dividing, cancelling $P(A)$. Extremal behavior is transparent: when the likelihood ratio tends to $0$ or infinity the posterior concentrates on one cause regardless of moderate priors, while equal likelihoods leave the prior odds unchanged.'
          },
          {
            kind: 'example',
            heading: 'Two batch defect inversion computed exactly',
            body: 'Suppose $70$ percent of batches come from source one with $2$ percent defect rate and $30$ percent from source two with $5$ percent defect rate. Total probability gives $P(A) = 0.7(0.02) + 0.3(0.05) = 0.029$, where $A$ denotes a defective item. Bayes then gives $P(E_{1}|A) = 0.014/0.029$ and $P(E_{2}|A) = 0.015/0.029$, nearly even despite the $7$ to $3$ prior, because the likelihood ratio $0.02/0.05$ almost exactly offsets it. This balancing of prior against likelihood is the graduate lesson: posteriors grade causes by the product of prevalence and explanatory power.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 10.4
  {
    sectionId: 'advmath-ch10-s4',
    readingTime: 9,
    intro: 'Repeated independent trials with two outcomes follow the binomial law $P(X = r) = \\binom{n}{r}p^{r}q^{n-r}$. Its mean $np$ and variance $npq$ summarize location and spread without summing the whole distribution. This section develops the distribution with recurrence, mode and expectation tools.',
    objectives: [
      'Write $P(X = r) = \\binom{n}{r}p^{r}q^{n-r}$ and evaluate at-least and at-most totals',
      'Use mean $np$, variance $npq$ and recurrence $P_{r+1}/P_{r}$ for shape and mode',
      'Compute expectations of linear functions and indicators for counts'
    ],
    concepts: [
      {
        term: 'Bernoulli trials and binomial law',
        kind: 'definition',
        statement: 'With $n$ independent **Bernoulli trials** of success probability $p$ and `failure-q` $q = 1-p$, counts follow $P(X=r) = \\binom{n}{r}p^{r}q^{n-r}$.',
        detail: 'Assumptions: fixed $n$, two outcomes, constant $p$, independence. Sum over $r$ is $(p+q)^{n} = 1$. At-least-one: $1-q^{n}$.'
      },
      {
        term: 'Mean and variance of binomial',
        kind: 'theorem',
        statement: 'Binomial **moments** are $E[X] = np$ and `variance-form` $\\mathrm{Var}(X) = npq$ with standard deviation $\\sqrt{npq}$.',
        detail: 'Derive via indicator sum $X = \\sum I_{i}$ with $E[I_{i}] = p$, $\\mathrm{Var}(I_{i}) = pq$. Since $q < 1$, variance is below mean. For $p = \\frac{1}{2}$, $\\mathrm{Var} = \\frac{n}{4}$.'
      },
      {
        term: 'Recurrence and mode',
        kind: 'theorem',
        statement: 'Successive terms obey the **recurrence** $\\frac{P_{r+1}}{P_{r}} = \\frac{n-r}{r+1}\\cdot\\frac{p}{q}$, so the `mode-step` rises while the ratio exceeds $1$.',
        detail: 'Mode is $\\lfloor (n+1)p \\rfloor$ (twin modes when $(n+1)p$ is an integer). Use recurrence to find maximum term without evaluating all probabilities.'
      },
      {
        term: 'Expectation of functions',
        kind: 'method',
        statement: 'Linearity gives **expectation** $E[aX+b] = aE[X]+b$ and for indicators `indicator-mean` $E[I_{A}] = P(A)$.',
        detail: 'Variance shifts invariantly: $\\mathrm{Var}(aX+b) = a^{2}\\mathrm{Var}(X)$. For counts, write complex totals as sums of indicators to bypass joint distributions.'
      },
      {
        term: 'Poisson hint and normal hint',
        kind: 'insight',
        statement: 'For rare events with large $n$, the **Poisson limit** $e^{-\\lambda}\\lambda^{r}/r!$ with `lambda-np` $\\lambda = np$ approximates binomial tails.',
        detail: 'For large $npq$, the bell curve with mean $np$ and deviation $\\sqrt{npq}$ approximates cumulative probabilities. These are limit views, not replacements for exact $\\binom{n}{r}p^{r}q^{n-r}$ at small $n$.'
      }
    ],
    examples: [
      {
        title: 'At-least-one and mean-variance for dice trials',
        problem: 'A die is thrown $6$ times. Let $X$ count sixes. Find $P(X \\ge 1)$, $E[X]$ and $\\mathrm{Var}(X)$.',
        steps: [
          { label: 'Step 1', text: 'Here $n = 6$, $p = \\frac{1}{6}$, $q = \\frac{5}{6}$:\n```tex\nP(X>=1) = 1 - q^6 = 1 - (5/6)^6\n```\nNumerically $1 - \\frac{15625}{46656} = \\frac{31031}{46656} \\approx 0.665$.' },
          { label: 'Step 2', text: 'Mean $E[X] = np = 1$. Variance $npq = 6\\cdot\\frac{1}{6}\\cdot\\frac{5}{6} = \\frac{5}{6}$.' },
          { label: 'Step 3', text: 'Mode $\\lfloor 7/6 \\rfloor = 1$ agrees with mean here; recurrence $P_{1}/P_{0} = 6p/q = \\frac{6}{5} > 1$ confirms rise to $1$.' }
        ],
        result: '$P(X\\ge 1) = 1-\\left(\\frac{5}{6}\\right)^{6}$, mean $1$, variance $\\frac{5}{6}$.'
      },
      {
        title: 'Greatest term via recurrence',
        problem: 'For $n = 9$, $p = \\frac{1}{3}$, find the most likely number of successes.',
        steps: [
          { label: 'Step 1', text: 'Mode formula $\\lfloor (n+1)p \\rfloor = \\lfloor \\frac{10}{3} \\rfloor = 3$.' },
          { label: 'Step 2', text: 'Verify: $\\frac{P_{3}}{P_{2}} = \\frac{7}{3}\\cdot\\frac{1/3}{2/3} = \\frac{7}{6} > 1$ (rising), while $\\frac{P_{4}}{P_{3}} = \\frac{6}{4}\\cdot\\frac{1}{2} = \\frac{3}{4} < 1$ (falling).' },
          { label: 'Step 3', text: 'Hence $r = 3$ is the unique mode with mean $np = 3$ coinciding.' }
        ],
        result: 'Most likely count is $3$, verified by recurrence crossing $1$.'
      }
    ],
    keyTakeaways: [
      '$P(X=r) = \\binom{n}{r}p^{r}q^{n-r}$ needs fixed $n$, constant $p$ and independence; $1-q^{n}$ covers at-least-one.',
      'Mean $np$ and variance $npq$ come from indicator sums; deviation is $\\sqrt{npq}$.',
      '$P_{r+1}/P_{r} = \\frac{n-r}{r+1}\\cdot\\frac{p}{q}$ locates the mode $\\lfloor(n+1)p\\rfloor$.',
      '$E[aX+b] = aE[X]+b$ and $E[I_{A}] = P(A)$ linearize count expectations.'
    ],
    quiz: [
      {
        q: 'For $n = 10$, $p = 0.3$, the binomial mean is:',
        options: [`$3$`, `$2.1$`, `$7$`, `$0.3$`],
        answer: 0,
        explanation: 'Step 1: Mean is $np$. Step 2: Substitute $10 \\times 0.3$. Step 3: Product is $3$. Step 4: First option matches.'
      },
      {
        q: 'For $n = 10$, $p = 0.3$, variance equals:',
        options: [`$3$`, `$2.1$`, `$0.21$`, `$9$`],
        answer: 1,
        explanation: 'Step 1: Variance is $npq$. Step 2: Here $q = 0.7$. Step 3: Compute $10(0.3)(0.7) = 2.1$. Step 4: Second option matches.'
      },
      // PYQ-pattern: at-least-one complement plus greatest term
      {
        q: 'Coin tossed $5$ times ($p = \\frac{1}{2}$); $P(\\text{at least one head})$ is:',
        options: [`$\\frac{1}{32}$`, `$\\frac{31}{32}$`, `$\\frac{1}{2}$`, `$\\frac{5}{32}$`],
        answer: 1,
        explanation: 'Step 1: Complement is all tails. Step 2: $P(\\text{all tails}) = (1/2)^{5} = 1/32$. Step 3: Subtract from $1$. Step 4: Get $31/32$.'
      },
      {
        q: 'For $n = 9$, $p = \\frac{1}{3}$, the mode (greatest-term $r$) is:',
        options: [`$2$`, `$4$`, `$3$`, `$9$`],
        answer: 2,
        explanation: 'Step 1: Mode is $\\lfloor(n+1)p\\rfloor$. Step 2: Compute $\\lfloor 10/3 \\rfloor$. Step 3: Equals $3$. Step 4: Recurrence confirms rise then fall at $3$.'
      }
    ]
  }
]

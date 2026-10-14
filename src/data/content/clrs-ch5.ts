import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition. Chapter 5: Probabilistic
// Analysis and Randomized Algorithms. Sections 5.1 (hiring) – 5.4 (further
// uses of indicator random variables). Arithmetic verified in /home/z/tmp-14a2.
// ============================================================================

export const clrsCh5Content: SectionContent[] = [
  // ---------------------------------------------------------------- 5.1
  {
    sectionId: "clrs-ch5-s1",
    readingTime: 6,
    intro: "Chapter 5 opens with a deceptively trivial problem: an employment agency sends candidates one at a time, and we hire each one who is better qualified than the current assistant, firing the old one. Interviewing is cheap, hiring is expensive — so the cost depends not on how many candidates we *interview* (all $n$) but on how many we *hire*. That number can be as bad as $n$, but only under a rigged arrival order; probabilistic analysis shows that in a random order it is a mere $\\lg n$ in expectation, and Chapter 5's whole toolkit — indicator random variables, randomized algorithms — exists to make that kind of statement easy.",
    objectives: [
      "State the HIRE-ASSISTANT procedure and its two cost components $c_i$ and $c_h$",
      "Characterize the worst and best cases for the number of hires $m$",
      "Set up the probabilistic assumption (uniform random arrival order) that the average-case analysis will use",
    ],
    concepts: [
      {
        term: "The hiring problem and HIRE-ASSISTANT",
        kind: "definition",
        statement: "Candidates $1, \\ldots, n$ arrive in sequence; candidate $i$ has qualification $q(i)$, and we may compare any two. `HIRE-ASSISTANT` keeps a sentinel `best = 0` (worse than everyone): **interview every candidate** (cost $c_i > 0$ each), and **hire candidate $i$ whenever $q(i)$ beats the current best** (cost $c_h > 0$ each, with $c_h \\gg c_i$), firing the previous hire. The output is the *running maximum* of qualifications seen so far.",
        detail: "Pseudocode: `best ← 0; for i = 1 to n: interview candidate i; if candidate i is better than candidate best: best ← i; hire candidate i`. The algorithm is deterministic — everything interesting about it lives in the *order of arrival*.",
      },
      {
        term: "The cost model",
        kind: "notation",
        statement: "Total cost $= c_i n + c_h m$, where $m$ is the number of hires. The interview term is fixed at $c_i n$ — every candidate is interviewed — so **the entire variance of the cost rides on $m$**, and since $1 \\le m \\le n$ the total lies between $c_i n + c_h$ and $c_i n + c_h n$.",
        detail: "Because $c_h$ (firing + agency fee + onboarding) dwarfs $c_i$, the analysis is really about $m$: whether the pay structure is 'hire a few cheaply' or 'churn through everyone'. We write $O(c_i n + c_h m)$ and study the random variable $m$.",
      },
      {
        term: "Worst and best cases",
        kind: "insight",
        statement: "**Worst case** $m = n$: candidates arrive in strictly increasing order of quality — every single one is a new record and gets hired, total $O(c_i n + c_h n)$. **Best case** $m = 1$: the best candidate arrives first; nobody is ever hired again, total $\\Theta(c_i n + c_h)$. Both orders are perfectly legal inputs — the deterministic algorithm cannot defend itself against an adversary who knows the rule.",
        detail: "The gap between $n$ hires and $1$ hire is enormous (factor $n$ in the dominant term), and nothing about the *rule* decides which you get — only the arrival order does. This is precisely the situation where asking 'what does a *typical* order do?' pays off.",
      },
      {
        term: "The probabilistic assumption",
        kind: "method",
        statement: "Probabilistic analysis assumes a probability distribution on the inputs and asks for the *expected* cost. Here: assume the candidates arrive in a **uniform random order** — each of the $n!$ permutations of the pool equally likely, independent of everything else. Under this assumption the expected number of hires is $E[m] = \\ln n + O(1)$ (proved with indicator random variables in Section 5.2), giving expected total cost $O(c_i n + c_h \\lg n)$.",
        detail: "The hypothesis is about the *world*, not the algorithm: an employment market that genuinely shuffles applicants. When the assumption is dubious — say, a hostile recruiter sequencing candidates to maximize your costs — the fix is not a new analysis but a randomized algorithm (Section 5.3), which shuffles the input itself and buys the same expectation *no matter how the world behaves*.",
      },
      {
        term: "Average-case vs expected running time",
        kind: "insight",
        statement: "This chapter is careful with two phrases. **Average-case analysis** of a deterministic algorithm: the input distribution is the probability source; the guarantee evaporates if inputs are adversarial. **Expected running time of a randomized algorithm**: the algorithm's own coin flips are the probability source; the guarantee holds for *every fixed input*. Both are computed with the same mathematics — expectation over the same kind of sample space.",
        detail: "The distinction will matter again in quicksort: ordinary quicksort has a quadratic worst case on adversarial inputs, while randomized quicksort has expected $O(n \\lg n)$ on *every* input (Section 5.4.2's headline result, proved with the very indicators defined next).",
      },
    ],
    figures: [
      {
        caption: "**The running maximum.** Ten candidates arrive with qualification scores $5, 2, 8, 6, 9, 4, 7, 10, 1, 3$ (a random order of ranks 1–10). The staircase is the best-so-far watermark; a hire happens exactly when the staircase steps up. Here candidates $i = 1, 3, 5, 8$ are records — 4 hires, against the expectation $E[m] = H_{10} = \\sum_{i=1}^{10} 1/i \\approx 2.93$; the worst order (increasing ranks) would hire all 10, the luckiest exactly 1.",
        svg: `<svg viewBox="0 0 720 320" width="100%" role="img" aria-label="Hiring problem running maximum staircase" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><line x1="40" y1="280" x2="680" y2="280" stroke="currentColor" stroke-width="1.4"/><g fill="currentColor"><rect x="60" y="180" width="42" height="100" fill-opacity="0.3"/><rect x="122" y="240" width="42" height="40" fill-opacity="0.1"/><rect x="184" y="120" width="42" height="160" fill-opacity="0.3"/><rect x="246" y="160" width="42" height="120" fill-opacity="0.1"/><rect x="308" y="100" width="42" height="180" fill-opacity="0.3"/><rect x="370" y="200" width="42" height="80" fill-opacity="0.1"/><rect x="432" y="140" width="42" height="140" fill-opacity="0.1"/><rect x="494" y="80" width="42" height="200" fill-opacity="0.3"/><rect x="556" y="260" width="42" height="20" fill-opacity="0.1"/><rect x="618" y="220" width="42" height="60" fill-opacity="0.1"/></g><g stroke="currentColor" stroke-width="1.1" fill="none"><rect x="60" y="180" width="42" height="100"/><rect x="122" y="240" width="42" height="40"/><rect x="184" y="120" width="42" height="160"/><rect x="246" y="160" width="42" height="120"/><rect x="308" y="100" width="42" height="180"/><rect x="370" y="200" width="42" height="80"/><rect x="432" y="140" width="42" height="140"/><rect x="494" y="80" width="42" height="200"/><rect x="556" y="260" width="42" height="20"/><rect x="618" y="220" width="42" height="60"/></g><polyline points="81,180 143,180 205,120 267,120 329,100 391,100 453,100 515,80 577,80 639,80" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4" opacity="0.75"/><g fill="currentColor"><circle cx="81" cy="180" r="4.5"/><circle cx="205" cy="120" r="4.5"/><circle cx="329" cy="100" r="4.5"/><circle cx="515" cy="80" r="4.5"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="81" y="302">1</text><text x="143" y="302">2</text><text x="205" y="302">3</text><text x="267" y="302">4</text><text x="329" y="302">5</text><text x="391" y="302">6</text><text x="453" y="302">7</text><text x="515" y="302">8</text><text x="577" y="302">9</text><text x="639" y="302">10</text></g><g font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.85"><text x="81" y="172">5</text><text x="143" y="232">2</text><text x="205" y="112">8</text><text x="267" y="152">6</text><text x="329" y="92">9</text><text x="391" y="192">4</text><text x="453" y="132">7</text><text x="515" y="72">10</text><text x="577" y="252">1</text><text x="639" y="212">3</text></g><text x="360" y="26" font-size="11.5" fill="currentColor" text-anchor="middle">candidate i is hired iff a record — probability 1/i, whatever the scores are</text><text x="676" y="88" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.75">running best (staircase)</text><text x="360" y="316" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">hired at i = 1, 3, 5, 8 → 4 hires; E[#hires] = H₁₀ ≈ 2.93</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "One order of ten candidates, fully accounted",
        problem: "Candidates arrive with ranks $5, 2, 8, 6, 9, 4, 7, 10, 1, 3$ (a uniformly random permutation of $1, \\ldots, 10$). Trace HIRE-ASSISTANT and locate the cost between best and worst cases.",
        steps: [
          { label: "Run the rule", text: "Running maximum: $5, 5, 8, 8, 9, 9, 9, 10, 10, 10$. The watermark rises at arrivals $1, 3, 5, 8$ — those four candidates are hired." },
          { label: "The cost", text: "$c_i \\cdot 10 + c_h \\cdot 4$. The interview term is unavoidable; the hire term sits comfortably above the best case ($1$ hire) and far below the worst ($10$ hires)." },
          { label: "Against the expectation", text: "For a random order of $n = 10$: $E[m] = H_{10} = 1 + \\tfrac12 + \\cdots + \\tfrac1{10} \\approx 2.93$ hires — 4 is a typical draw, well within one hire of the mean." },
          { label: "The adversarial contrast", text: "The same ten candidates sent in increasing order $1, 2, \\ldots, 10$ produce ten running-maximum steps: $m = 10$, cost $10 c_h$. Sent best-first ($10, 9, \\ldots, 1$): $m = 1$." },
        ],
        result: "The hire count is a property of the *order*, not the rule: $1 \\le m \\le 10$ here, and the random-order expectation $\\approx 2.93$ is what the analysis of Section 5.2 will compute in one line per candidate.",
      },
      {
        title: "How expensive can a bad order be?",
        problem: "With $n = 1000$ candidates, $c_i = 1$ and $c_h = 100$, compare the expected random-order cost with the adversarial worst case.",
        steps: [
          { label: "Random order", text: "Expected hires $E[m] \\approx \\ln 1000 \\approx 6.9$; total $\\approx 1000 \\cdot 1 + 100 \\cdot 6.9 = 1690$." },
          { label: "Worst order", text: "All 1000 hired: $1000 \\cdot 1 + 100 \\cdot 1000 = 101{,}000$ — about 60× the random-order cost." },
          { label: "Moral", text: "The deterministic algorithm's cost is unbounded relative to its own average — the signal that either a distributional assumption (this section) or internal randomization (Section 5.3) is needed before any expectation can be trusted." },
        ],
        result: "Same rule, same pool: the arrival order alone swings the dominant term by two orders of magnitude. Probability is not decoration here — it is the difference between $\\Theta(c_h \\lg n)$ and $\\Theta(c_h n)$.",
      },
    ],
    keyTakeaways: [
      "HIRE-ASSISTANT interviews everyone ($c_i n$, fixed) and hires exactly the running maxima ($c_h m$, the random part); $1 \\le m \\le n$.",
      "Worst case $m = n$ (increasing order), best case $m = 1$ (best first) — both legal inputs, so a deterministic rule cannot avoid the worst case by cleverness alone.",
      "Under a uniform random arrival order the expected hire count is $\\ln n + O(1)$, i.e. expected cost $O(c_i n + c_h \\lg n)$ — and Section 5.3 converts this assumption into a guarantee by shuffling internally.",
    ],
    quiz: [
      {
        q: "In HIRE-ASSISTANT, the number of hires $m$ equals:",
        options: [
          "the number of candidates better than the average qualification",
          "the number of left-to-right maxima (records) in the arrival order",
          "$\\lfloor n/2 \\rfloor$ always",
          "the rank of the last candidate to arrive",
        ],
        answer: 1,
        explanation: "A hire happens exactly when the current candidate beats everyone before — a running-maximum step. The count of records in a random permutation is the object Section 5.2 computes.",
      },
      {
        q: "The worst case for HIRE-ASSISTANT's total cost occurs when:",
        options: [
          "the best candidate arrives first",
          "candidates arrive in strictly increasing order of quality, so all $n$ are hired",
          "all candidates have equal qualifications",
          "the agency sends only one candidate",
        ],
        answer: 1,
        explanation: "Increasing order makes every arrival a new record: $m = n$ and the cost $c_i n + c_h n$ — the dominant $c_h$ term is maximized.",
      },
      {
        q: "The probabilistic assumption of Section 5.1 is:",
        options: [
          "the algorithm flips coins to decide whom to hire",
          "qualifications are independently drawn real numbers",
          "the candidates' arrival order is a uniform random permutation of the pool",
          "the number of candidates $n$ is itself random",
        ],
        answer: 2,
        explanation: "The analysis conditions on a uniform random permutation — every one of the $n!$ orders equally likely — and nothing else; the hiring rule stays deterministic.",
      },
      {
        q: "Under the random-order assumption, the expected total hiring cost is:",
        options: [
          "$\\Theta(c_h n)$",
          "$O(c_i n + c_h \\lg n)$, since $E[m] = \\ln n + O(1)$",
          "$\\Theta(c_i n)$ only — hiring never matters asymptotically",
          "$O(c_h \\lg \\lg n)$",
        ],
        answer: 1,
        explanation: "All $n$ interviews happen, and the expected hire count is the harmonic number $H_n \\approx \\ln n$: total $O(c_i n + c_h \\lg n)$ — a logarithmic, not linear, hiring bill.",
      },
    ],
  },

  // ---------------------------------------------------------------- 5.2
  {
    sectionId: "clrs-ch5-s2",
    readingTime: 7,
    intro: "Indicator random variables are the smallest possible random variables — 1 if an event happens, 0 otherwise — and they turn counting problems into expectation problems. Their two properties (expectation equals a probability, and linearity needs no independence) make them the workhorse of average-case analysis: the hiring problem's $\\lg n$ expected hires, the birthday paradox, balls-and-bins, and randomized quicksort all fall to the same one-line pattern: express a count as a sum of indicators and sum the probabilities.",
    objectives: [
      "Define indicator random variables and prove $E[I\\{A\\}] = \\Pr\\{A\\}$",
      "Use linearity of expectation over indicator sums without independence to compute expected counts",
      "Analyze HIRE-ASSISTANT by indicators, obtaining $E[m] = H_n = \\ln n + \\Theta(1)$",
    ],
    concepts: [
      {
        term: "Indicator random variables",
        kind: "definition",
        statement: "For an event $A$, the **indicator random variable** is $I\\{A\\} = 1$ if $A$ occurs and $0$ otherwise. **Lemma 5.1:** $E[I\\{A\\}] = 1 \\cdot \\Pr\\{A\\} + 0 \\cdot \\Pr\\{\\overline{A}\\} = \\Pr\\{A\\}$ — the expectation of an indicator *is* the probability of its event.",
        detail: "Definitionally, $I\\{A\\}$ depends on the underlying sample space (a random permutation, a sequence of coin flips, …). The lemma is one line of algebra, yet it is the bridge that lets every counting argument be rewritten as an expectation argument.",
      },
      {
        term: "The technique: count by indicators",
        kind: "method",
        statement: "To find the expectation of a count $X$, write $X = \\sum_k I\\{A_k\\}$ for suitable events $A_k$ ('item $k$ is counted'), then apply **linearity of expectation**: $E[X] = \\sum_k E[I\\{A_k\\}] = \\sum_k \\Pr\\{A_k\\}$. The events need not be disjoint, and — crucially — they need **not be independent**.",
        detail: "This is the method's superpower: linearity of expectation is a theorem about *all* random variables, no matter how correlated, because $E[X+Y] = E[X]+E[Y]$ unconditionally. In the hiring analysis the indicator events are demonstrably *not* independent, and nobody cares.",
      },
      {
        term: "The hiring analysis by indicators",
        kind: "theorem",
        statement: "Let $X_i = I\\{\\text{candidate } i \\text{ is hired}\\}$. Candidate $i$ is hired exactly when its rank is the maximum of the first $i$ arrivals, and in a random permutation each of the first $i$ candidates is equally likely to be that maximum, so $E[X_i] = 1/i$. With $X = \\sum_{i=1}^{n} X_i$ the total hires: $E[X] = \\sum_{i=1}^{n} 1/i = \\ln n + O(1)$ — the harmonic number $H_n$, satisfying $\\ln n \\le H_n \\le \\ln n + 1$.",
        detail: "The integral comparison proves the bound: $H_n \\ge \\int_1^{n+1} \\frac{dx}{x} = \\ln(n+1)$ and $H_n \\le 1 + \\int_1^{n} \\frac{dx}{x} = 1 + \\ln n$. Notice $X_i$ and $X_j$ are *dependent* (knowing $i$ was hired shifts beliefs about $j$) — linearity never looks.",
      },
      {
        term: "Stochastic independence",
        kind: "definition",
        statement: "Events $A$ and $B$ are **independent** if $\\Pr\\{A \\cap B\\} = \\Pr\\{A\\}\\Pr\\{B\\}$; random variables $X$ and $Y$ are independent if $\\Pr\\{X = a, Y = b\\} = \\Pr\\{X = a\\}\\Pr\\{Y = b\\}$ for all $a, b$. For indicators, $E[I\\{A\\} I\\{B\\}] = \\Pr\\{A \\cap B\\}$, which factors only under independence. Independence is a *stronger* condition than expectation computations need.",
        detail: "Where independence *does* pay is in products and concentrations: it converts sums of indicators into binomial distributions (Chapter C's tail bounds), and it is the working assumption of the coin flips in a randomized algorithm — the algorithm's own coins are independent of the input by construction.",
      },
      {
        term: "A classic surprise: expectation without independence",
        kind: "insight",
        statement: "Two dice: let $X_{ij} = I\\{\\text{die 1 shows } i \\text{ and die 2 shows } j\\}$ for the 36 ordered outcomes; then the dice *sum* has $E = \\sum_{i,j} (i+j)\\Pr\\{(i,j)\\} = 3.5 + 3.5 = 7$ — computable with no independence structure at all. And the hat-check problem: $n$ people's hats returned in random order give $X_i = I\\{\\text{person } i \\text{ gets their own hat}\\}$ with $\\Pr = 1/n$ each, so the expected number of correctly returned hats is $\\sum_{i=1}^n 1/n = 1$ — **for every $n$**, even though the $X_i$ are heavily dependent.",
        detail: "The hat-check answer stays 1 as $n \\to \\infty$ while the *probability* that someone gets their own hat goes to $1 - 1/e \\approx 0.63$: expectation and probability of existence answer different questions — a distinction that will recur whenever a sum of rare indicators is around.",
      },
    ],
    examples: [
      {
        title: "Expected hires at n = 10, digit by digit",
        problem: "Compute $E[m]$ for $n = 10$ candidates from $E[m] = \\sum_{i=1}^{10} 1/i$ and verify the harmonic bounds.",
        steps: [
          { label: "Per-candidate probabilities", text: "$E[X_i] = 1/i$: candidate 1 is surely hired ($1/1$), candidate 2 with probability $1/2$, …, candidate 10 with probability $1/10$." },
          { label: "Sum the series", text: "$H_{10} = 1 + 0.5 + 0.3333 + 0.25 + 0.2 + 0.1667 + 0.1429 + 0.125 + 0.1111 + 0.1 = 2.9290$." },
          { label: "Check the bounds", text: "$\\ln 10 = 2.3026 \\le 2.9290 \\le 3.3026 = 1 + \\ln 10$ — the integral sandwich holds." },
          { label: "Interpret", text: "Doubling the pool adds only about $\\ln 2 \\approx 0.69$ expected hires: with $n = 20$ the mean is $H_{20} \\approx 3.60$. Hiring churn grows logarithmically in a random market." },
        ],
        result: "$E[m] = H_{10} \\approx 2.93$ — three hires on average out of ten candidates, from ten one-line probability computations and no independence whatsoever.",
      },
      {
        title: "The hat-check problem at any size",
        problem: "A cloakroom returns $n = 100$ hats in a uniformly random order. What is the expected number of people who get their own hat back?",
        steps: [
          { label: "Indicators", text: "$X_i = I\\{\\text{person } i \\text{ receives hat } i\\}$; under a random permutation, person $i$'s hat is equally likely to go to any of the $n$ positions, so $E[X_i] = 1/n$." },
          { label: "Sum", text: "$E[X] = \\sum_{i=1}^{100} 1/100 = 1$. The answer does not grow with the crowd." },
          { label: "Note the dependence", text: "If person 1 gets their hat, someone else cannot have it — the $X_i$ are strongly negatively correlated. The expectation is untouched: linearity is unconditional." },
          { label: "Contrast", text: "The probability that *at least one* person succeeds is $1 - D_{100}/100! \\approx 1 - 1/e \\approx 0.632$ (derangement count $D_n$) — a different question with a different constant, invisible to the expectation alone." },
        ],
        result: "Exactly one correct hat in expectation, for every $n$ — the signature of indicator analysis: fragile-looking dependencies, effortless expectation.",
      },
    ],
    keyTakeaways: [
      "$I\\{A\\} \\in \\{0, 1\\}$ with $E[I\\{A\\}] = \\Pr\\{A\\}$ (Lemma 5.1); counts become sums of indicators, expectations become sums of probabilities.",
      "Linearity of expectation requires no independence — the hiring indicators are dependent, yet $E[m] = \\sum_{i=1}^n 1/i = H_n = \\ln n + \\Theta(1)$ follows directly.",
      "$\\ln n \\le H_n \\le \\ln n + 1$ (integral comparison); independence matters only when you need distributions or tail bounds, not plain expectations.",
    ],
    quiz: [
      {
        q: "For an indicator random variable $I\\{A\\}$, $E[I\\{A\\}]$ equals:",
        options: [
          "$\\Pr\\{\\overline{A}\\}$",
          "$\\Pr\\{A\\}$",
          "always 1",
          "$\\Pr\\{A\\}^2$",
        ],
        answer: 1,
        explanation: "Lemma 5.1: $E[I\\{A\\}] = 1 \\cdot \\Pr\\{A\\} + 0 \\cdot \\Pr\\{\\overline{A}\\} = \\Pr\\{A\\}$ — the expectation of an indicator is exactly the event's probability.",
      },
      {
        q: "In the random-order hiring analysis, $E[X_i] = 1/i$ because:",
        options: [
          "candidate $i$ has rank $i$ on average",
          "candidate $i$ is hired iff it is the best of the first $i$ arrivals, and each of those $i$ candidates is equally likely to be the best",
          "the candidates' qualifications are independent random variables",
          "the agency favors early candidates with probability $1/i$",
        ],
        answer: 1,
        explanation: "A hire at step $i$ is a record at $i$: the maximum of the first $i$ ranks lands at each of the $i$ positions with probability $1/i$ — a statement purely about the uniform permutation.",
      },
      {
        q: "Computing $E[X] = \\sum_k E[X_k]$ for indicators $X_k$ requires:",
        options: [
          "the $X_k$ to be pairwise independent",
          "the $X_k$ to be identically distributed",
          "no independence at all — linearity of expectation is unconditional",
          "that each $\\Pr\\{A_k\\} \\le 1/2$",
        ],
        answer: 2,
        explanation: "Linearity $E[X+Y] = E[X]+E[Y]$ holds for all random variables on a common sample space — this is exactly why dependent indicators (hires, hat-check matches) still sum so cleanly.",
      },
      {
        q: "In the hat-check problem with $n$ hats returned in random order, the expected number of correct returns is:",
        options: [
          "$1$ for every $n$",
          "$n/2$",
          "$\\ln n$",
          "it depends on $n$'s parity",
        ],
        answer: 0,
        explanation: "Each person matches with probability $1/n$; summing $n$ such indicators gives $n \\cdot (1/n) = 1$ — a constant expectation despite strongly dependent events.",
      },
      // PYQ-pattern: ISRO 2019 — expected hires by linearity (rephrased, values changed)
      {
        q: "In the hiring problem with $4$ candidates arriving in uniformly random order, the expected number hired equals:",
        options: ["$1$", "$1.5$", "$4$", "$\\frac{25}{12} \\approx 2.08$"],
        answer: 3,
        explanation: "Step 1 — Given: $n = 4$ random permutation, hire each record-high candidate. Step 2 — Governing tool: indicator $X_{i}$ for candidate $i$ being hired has $\\Pr[X_{i} = 1] = \\frac{1}{i}$, and linearity needs no independence. Step 3 — Summation: $E[X] = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} = \\frac{25}{12} \\approx 2.08$. Step 4 — Sanity check: the mean sits between the best case $1$ and worst case $4$, grows like $\\ln n$, and simulation at $n = 4$ clusters near $2$. Step 5 — Distractor analysis: $1$ is the sorted-ascending best case, $4$ the sorted-descending worst case, and $1.5$ stops the harmonic sum early. Step 6 — Conclude: expectation is $\\frac{25}{12}$, about $2.08$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 5.3
  {
    sectionId: "clrs-ch5-s3",
    readingTime: 8,
    intro: "A randomized algorithm takes the random order of Section 5.1 into its own hands: instead of *hoping* the world shuffles the candidates, it shuffles them itself. The expectation then flows from the algorithm's coins, valid against every input. The same section builds the two classic probability laboratories — the birthday paradox, where 23 people already suffice for a shared birthday, and balls and bins, the model behind hashing — and glimpses a persistent set searched in expected constant time.",
    objectives: [
      "Distinguish randomized algorithms from average-case analysis, and state what RANDOMIZED-HIRE-ASSISTANT guarantees on every input",
      "Derive the birthday-paradox threshold (23 of 365) both by indicator expectations and by the $e^x$ bound",
      "Model balls-and-bins: expected load per bin, and the $n H_n$ coupon-collector count to fill every bin",
    ],
    concepts: [
      {
        term: "RANDOMIZED-HIRE-ASSISTANT",
        kind: "method",
        statement: "Before interviewing, **randomly permute the candidate list** (via the `RANDOM` primitive, each of the $n!$ orders equally likely), then run the deterministic rule. For *every fixed input order*, the permuted order is uniform, so the expected hire count is $H_n$ and the expected total cost is $O(c_i n + c_h \\lg n)$ — the assumption of Section 5.1 has been converted into an internal coin the adversary cannot rig.",
        detail: "Pseudocode: `RANDOMIZED-HIRE-ASSISTANT`: randomly permute the candidate list; `best ← 0`; then the identical interview-and-hire loop. The random permutation can be built by priority shuffling or in-place swaps; the analysis needs only *uniformity* of the final order (the book's Exercise 5.3-4/5.3-5 explore generating one).",
      },
      {
        term: "Randomized algorithms vs average-case analysis",
        kind: "insight",
        statement: "In **average-case analysis** the probability is over inputs — the guarantee evaporates on adversarial inputs. In a **randomized algorithm** the probability is over the algorithm's own coin flips — the running time is a random variable even on a *single fixed input*, and no input can consistently trigger bad behavior. RANDOMIZED-HIRE-ASSISTANT has expected cost $O(c_i n + c_h \\lg n)$ even if a hostile recruiter chooses the arrival order, because the shuffle re-randomizes it.",
        detail: "This is the design pattern behind randomized quicksort (Section 5.4), universal hashing (Chapter 11), and the randomization sprinkled through the book: whenever a deterministic rule has an input-dependent worst case driven by *order*, shuffling the order inside the algorithm prices the worst case correctly. The distinction also changes what 'with high probability' means — over the coins, for every input.",
      },
      {
        term: "The birthday paradox",
        kind: "theorem",
        statement: "How many people must be in a room before two share a birthday? Model: $k$ independent birthdays uniform over $n = 365$ days. Let $B_{ij} = I\\{\\text{person } i \\text{ and person } j \\text{ share a birthday}\\}$ — there are $\\binom{k}{2}$ pairs each with $\\Pr = 1/365$, so $E[\\text{pairs}] = \\binom{k}{2}/365$, which reaches 1 at $k = 28$. The *probability* analysis is sharper: $\\Pr\\{\\text{no match}\\} = \\prod_{i=1}^{k-1}\\left(1 - \\tfrac{i}{365}\\right) \\le e^{-\\binom{k}{2}/365} \\le \\tfrac12$ once $\\binom{k}{2} \\ge 365 \\ln 2 \\approx 253$, i.e. $k \\ge 23$: **23 people give a better-than-even chance of a shared birthday**.",
        detail: "The intuition to internalize: matches are about *pairs*, not people — with $k = 23$ people there are already $\\binom{23}{2} = 253$ pairs, each a $1/365$ chance, and $253 \\approx 365 \\ln 2$ is exactly where 'expected near-half probability of one hit' sits. The bound uses $1 - x \\le e^{-x}$; at $k = 23$ it gives $e^{-253/365} = 0.499998$, razor-close to the exact $\\Pr\\{\\text{match}\\} = 0.5073$.",
      },
      {
        term: "Balls and bins",
        kind: "method",
        statement: "Toss $m$ balls into $n$ bins, each ball independently uniform. Then the expected load of a given bin is $E[\\text{balls in bin } j] = m/n$ (sum of $m$ indicators of probability $1/n$); the expected tosses to hit a *specific* bin is $n$ (geometric); and the expected tosses to get **every** bin nonempty — the coupon collector — is $n H_n = n \\ln n + \\Theta(n)$: after $j$ distinct bins are filled, the next new bin takes $n/(n-j)$ tosses on average, and $\\sum_{j=0}^{n-1} \\frac{n}{n-j} = n H_n$.",
        detail: "For $n = 10$ bins: $n H_n = 29.3$ tosses expected to complete the collection. This is the formal model of hashing: balls are keys, bins are slots (Chapter 11's hash tables with $\\Theta(1)$ expected search rely on it), and the classic refinement — with $m = n$ balls, the fullest bin holds $\\Theta(\\lg n / \\lg \\lg n)$ balls with high probability — is the standard follow-up these techniques prove.",
      },
      {
        term: "Persistent sets",
        kind: "definition",
        statement: "A **persistent set** is a dynamic set that is built once and never modified — only searched afterwards. The book's payoff for randomization: a hash table built for a persistent universe supports search in **expected $\\Theta(1)$** time per query, with the expectation over the table's randomly chosen hash function — a first taste of the randomized data structures of Chapter 11.",
        detail: "Persistence is what makes hashing safe here: with no insertions after construction, the table's load factor is frozen, so the balls-and-bins picture (constant expected load per bucket) translates directly into constant expected search. Once keys can be inserted, one needs the full machinery of universal hashing.",
      },
    ],
    figures: [
      {
        caption: "**The birthday paradox.** Exact probability $1 - \\prod_{i=1}^{k-1}(1 - i/365)$ that some pair among $k$ people shares a birthday, plotted from $k = 1$ to 60. The curve crosses $\\tfrac12$ at just **$k = 23$** — where $\\binom{23}{2} = 253$ pairs each hold a $1/365$ chance and $e^{-253/365} \\approx 0.5$. By $k = 28$ the *expected number* of matching pairs, $\\binom{28}{2}/365 \\approx 1.04$, also exceeds 1; by $k = 60$ a match is near-certain ($P \\approx 0.994$).",
        svg: `<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="Birthday paradox probability curve" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><rect x="70" y="40" width="620" height="240" fill="currentColor" opacity="0.03"/><line x1="70" y1="280" x2="690" y2="280" stroke="currentColor" stroke-width="1.4"/><line x1="70" y1="280" x2="70" y2="40" stroke="currentColor" stroke-width="1.4"/><g stroke="currentColor" stroke-width="1" opacity="0.35"><line x1="70" y1="220" x2="690" y2="220"/><line x1="70" y1="160" x2="690" y2="160" stroke-dasharray="0"/><line x1="70" y1="100" x2="690" y2="100"/><line x1="70" y1="40" x2="690" y2="40"/></g><line x1="70" y1="160" x2="690" y2="160" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 5" opacity="0.6"/><text x="76" y="154" font-size="10" fill="currentColor" opacity="0.7">1/2</text><g stroke="currentColor" stroke-width="1" opacity="0.35"><line x1="164.6" y1="280" x2="164.6" y2="284"/><line x1="269.7" y1="280" x2="269.7" y2="284"/><line x1="374.7" y1="280" x2="374.7" y2="284"/><line x1="479.8" y1="280" x2="479.8" y2="284"/><line x1="584.9" y1="280" x2="584.9" y2="284"/></g><g font-size="10" fill="currentColor" text-anchor="middle"><text x="70" y="298">1</text><text x="164.6" y="298">10</text><text x="269.7" y="298">20</text><text x="374.7" y="298">30</text><text x="479.8" y="298">40</text><text x="584.9" y="298">50</text><text x="690" y="298">60</text></g><g font-size="10" fill="currentColor" text-anchor="end"><text x="64" y="284">0</text><text x="64" y="224">0.25</text><text x="64" y="164">0.50</text><text x="64" y="104">0.75</text><text x="64" y="44">1.0</text></g><polyline points="70.0,280.0 80.5,279.3 91.0,278.0 101.5,276.1 112.0,273.5 122.5,270.3 133.1,266.5 143.6,262.2 154.1,257.3 164.6,251.9 175.1,246.1 185.6,239.9 196.1,233.3 206.6,226.5 217.1,219.3 227.6,211.9 238.1,204.4 248.6,196.7 259.2,189.0 269.7,181.3 280.2,173.5 290.7,165.8 301.2,158.2 311.7,150.8 322.2,143.5 332.7,136.4 343.2,129.6 353.7,122.9 364.2,116.6 374.7,110.5 385.3,104.7 395.8,99.2 406.3,94.0 416.8,89.1 427.3,84.5 437.8,80.3 448.3,76.3 458.8,72.6 469.3,69.2 479.8,66.1 490.3,63.2 500.8,60.6 511.4,58.3 521.9,56.1 532.4,54.2 542.9,52.4 553.4,50.9 563.9,49.5 574.4,48.2 584.9,47.1 595.4,46.1 605.9,45.3 616.4,44.5 626.9,43.9 637.5,43.3 648.0,42.8 658.5,42.4 669.0,42.0 679.5,41.7 690.0,41.4" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="301.2" y1="158.2" x2="301.2" y2="280" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/><circle cx="301.2" cy="158.2" r="5" fill="currentColor"/><text x="316" y="152" font-size="11.5" fill="currentColor" font-weight="600">k = 23: P ≈ 0.51</text><line x1="353.7" y1="122.9" x2="353.7" y2="280" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/><text x="368" y="124" font-size="10.5" fill="currentColor" opacity="0.85">k = 28: E[pairs] = 378/365 ≈ 1.04</text><text x="676" y="60" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.8">k = 60: P ≈ 0.994</text><text x="380" y="322" font-size="11.5" fill="currentColor" text-anchor="middle">people in the room (k), birthdays uniform over 365 days</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "The 23-person threshold, both ways",
        problem: "Show that 23 people give a better-than-even chance of a shared birthday — by the $e^{-x}$ bound — and compare with the indicator-expectation estimate.",
        steps: [
          { label: "Model", text: "Birthdays of the $k$ people are independent and uniform over $n = 365$ days (ignore leap years and seasonal effects — the book's idealization)." },
          { label: "Complement", text: "$\\Pr\\{\\text{no shared birthday}\\} = \\prod_{i=1}^{k-1}\\left(1 - \\frac{i}{365}\\right)$: person $i+1$ must dodge the $i$ birthdays already taken." },
          { label: "Apply 1 − x ≤ e⁻ˣ", text: "$\\Pr\\{\\text{no match}\\} \\le e^{-\\sum_{i=1}^{k-1} i/365} = e^{-k(k-1)/730}$. Setting this $\\le \\tfrac12$ needs $k(k-1) \\ge 730 \\ln 2 \\approx 505.7$, i.e. $k \\ge 23$ (since $23 \\cdot 22 = 506$)." },
          { label: "How tight", text: "At $k = 23$: the bound gives $e^{-506/730} = e^{-0.6931} \\approx 0.5000$; the exact no-match probability is $0.4927$, so $\\Pr\\{\\text{match}\\} = 0.5073$ — a genuine better-than-even bet." },
          { label: "The cruder expectation view", text: "$E[\\text{matching pairs}] = \\binom{k}{2}/365$: at $k = 23$ this is $253/365 \\approx 0.69$ (not yet 1); it reaches $\\approx 1.04$ at $k = 28$. Pair-expectation and match-probability quantify different things — both are worth computing." },
        ],
        result: "23 people suffice for probability $\\approx 0.51$; the surprise is that pair-counting, not people-counting, is the right bookkeeping — $\\Theta(\\sqrt{n})$ people create $\\Theta(n)$ pairs.",
      },
      {
        title: "Filling every bin: coupon collecting at n = 10",
        problem: "Toss balls uniformly into $n = 10$ bins. What is the expected number of tosses until every bin contains at least one ball?",
        steps: [
          { label: "Stage decomposition", text: "After $j$ distinct bins are occupied, each toss hits a new bin with probability $(10 - j)/10$; the waiting time for the next new bin is geometric with mean $10/(10-j)$." },
          { label: "Sum the stages", text: "$E[\\text{tosses}] = \\sum_{j=0}^{9} \\frac{10}{10-j} = 10 H_{10} = 10 \\times 2.929 = 29.3$ tosses." },
          { label: "Asymptotics", text: "In general $n H_n = n \\ln n + \\Theta(n)$: filling the last few bins dominates the tail — the final alone costs $n$ tosses on average." },
          { label: "Adjacent facts", text: "A *specific* bin first receives a ball after $n = 10$ tosses in expectation (geometric with $p = 1/10$); each bin's expected load after $m$ tosses is $m/10$ — the two easy indicators inside the harder collector problem." },
        ],
        result: "$n H_n \\approx 29.3$ tosses to collect all 10 'coupons' — the same harmonic number that counted hires, now pricing the tail of a geometric waiting-time sum.",
      },
    ],
    keyTakeaways: [
      "RANDOMIZED-HIRE-ASSISTANT permutes the candidates internally first, inheriting the $O(c_i n + c_h \\lg n)$ expected cost on *every* input — the coins live in the algorithm, not the world.",
      "Birthday paradox: $\\Pr\\{\\text{match among } k\\} \\ge 1 - e^{-\\binom{k}{2}/365}$ crosses $\\tfrac12$ at $k = 23$; pair-counting explains why $\\Theta(\\sqrt{n})$ people suffice among $n$ days.",
      "Balls and bins: expected load $m/n$ per bin, $n$ tosses to hit a given bin, $n H_n = n\\ln n + \\Theta(n)$ to hit them all; persistent sets (built once, only searched) get expected $\\Theta(1)$ search by hashing.",
    ],
    quiz: [
      {
        q: "The key difference between average-case analysis of HIRE-ASSISTANT and RANDOMIZED-HIRE-ASSISTANT is:",
        options: [
          "the randomized version interviews fewer candidates",
          "the randomized version never hires twice in a row",
          "the probability source moves from the input distribution to the algorithm's own coin flips, so the $O(c_i n + c_h \\lg n)$ expectation holds on every input",
          "the randomized version has a better worst case",
        ],
        answer: 2,
        explanation: "Randomizing the permutation makes the *algorithm's* behavior random on any fixed input — the worst case still exists (a shuffle could produce increasing order) but has small probability over the coins, so only the expectation is guaranteed.",
      },
      {
        q: "With $k = 23$ people and 365 possible birthdays, the expected number of pairs sharing a birthday is:",
        options: [
          "$23/365 \\approx 0.063$",
          "$\\binom{23}{2}/365 = 253/365 \\approx 0.69$",
          "$253/365^2$",
          "exactly 1",
        ],
        answer: 1,
        explanation: "Each of the $\\binom{23}{2} = 253$ pairs matches with probability $1/365$; by linearity the expected number of matching pairs is $253/365 \\approx 0.69$ — near, but not equal to, the threshold where the probability of a match passes 1/2.",
      },
      {
        q: "Tossing balls uniformly at random into $n$ bins, the expected number of tosses until every bin is nonempty is:",
        options: [
          "$n$",
          "$n \\lg n$ up to constant factors — $n H_n = n \\ln n + \\Theta(n)$",
          "$n^2$",
          "$\\Theta(n \\sqrt{n})$",
        ],
        answer: 1,
        explanation: "Stage $j$ (after $j$ bins are hit) waits a geometric time with mean $n/(n-j)$; the total $n H_n = n \\ln n + \\Theta(n)$ — the coupon collector, dominated by the expensive final bins.",
      },
      {
        q: "A persistent set, in the book's terminology, is one that:",
        options: [
          "survives process restarts",
          "is built once and thereafter only searched — never modified",
          "stores elements in sorted order forever",
          "is replicated across disks",
        ],
        answer: 1,
        explanation: "Persistence freezes the data (and, in a hash table, the load factor), which is exactly why a randomly chosen hash function delivers expected $\\Theta(1)$ search — the Chapter 11 preview this section makes.",
      },
    ],
  },

  // ---------------------------------------------------------------- 5.4
  {
    sectionId: "clrs-ch5-s4",
    readingTime: 7,
    intro: "The chapter closes by flexing the indicator machinery on two problems at once: it re-derives the hiring bound in one tight paragraph, then turns to the flagship result — randomized quicksort runs in expected $O(n \\lg n)$ time on every input. The proof is a masterpiece of the indicator style: the running time is proportional to the number of *pairs* of elements ever compared, each pair is compared at most once, and the probability that pair $(z_i, z_j)$ ever meets is exactly $2/(j-i+1)$. Summing those probabilities leaves nothing but a harmonic number again.",
    objectives: [
      "Re-derive the expected hiring cost $O(c_i n + c_h \\lg n)$ with the full indicator toolkit",
      "Prove that in quicksort any two elements are compared at most once, and that $\\Pr\\{z_i \\text{ vs } z_j\\} = 2/(j-i+1)$",
      "Sum the pairwise comparison probabilities to the expected $O(n \\lg n)$ running time of RANDOMIZED-QUICKSORT",
    ],
    concepts: [
      {
        term: "The hiring problem revisited",
        kind: "theorem",
        statement: "With the machinery of Section 5.2 in hand, the hiring analysis compresses to three lines: $X = \\sum_{i=1}^n X_i$ with $X_i$ the indicator that candidate $i$ is hired; $E[X_i] = 1/i$; hence $E[X] = \\sum_{i=1}^n 1/i = \\ln n + O(1)$, and the expected total cost of (randomized) hiring is $O(c_i n + c_h \\lg n)$ — since $H_n \\le \\ln n + 1$, the constant hidden in the big-O is explicitly 1 plus the interview/hire ratio.",
        detail: "What changed since Section 5.1 is not the answer but the *method's* reach: the same template (indicator per unit, sum the probabilities) now covers birthdays, bins, hats, and — next — quicksort. The book's point is that this one pattern is the default first move of average-case analysis.",
      },
      {
        term: "Randomized quicksort",
        kind: "method",
        statement: "`RANDOMIZED-QUICKSORT` calls `RANDOMIZED-PARTITION`, which picks the pivot **uniformly at random** from the current subarray (via `RANDOM(p, r)`) before partitioning. On any input of $n$ distinct elements, the expected running time is $O(n \\lg n)$ — the guarantee is over the pivot choices, valid for every fixed input, in contrast to ordinary quicksort whose $\\Theta(n^2)$ worst case an adversary can force by feeding sorted keys.",
        detail: "Comparisons dominate: partitioning an $m$-element subarray does $m - 1$ comparisons against the pivot, and the recursion's bookkeeping is linear. So the running time is $\\Theta(1 + X)$ where $X$ is the total number of *pairwise comparisons* — the random variable the analysis computes. Sorting equal keys (Chapter 7's three-way variant) is out of scope here; the input is assumed to have distinct elements $z_1 < z_2 < \\cdots < z_n$.",
      },
      {
        term: "Any two elements are compared at most once",
        kind: "insight",
        statement: "In any execution of quicksort, elements $z_i$ and $z_j$ are compared **at most once**. Reason: comparisons happen only between a pivot and the other elements of its partition. If $z_i$ and $z_j$ are ever compared, one of them is the pivot of that partition — and a pivot is forever excluded from all subsequent partitions. Moreover, if some element strictly between them is chosen as pivot *first*, the two are separated into different partitions and never compared at all.",
        detail: "This at-most-once fact is what makes the total comparison count a sum over pairs of *events* rather than a sum of multiplicities — each unordered pair contributes an indicator, and linearity applies cleanly to $X = \\sum_{i<j} X_{ij}$.",
      },
      {
        term: "The key probability $\\Pr\\{z_i \\text{ vs } z_j\\} = 2/(j-i+1)$",
        kind: "theorem",
        statement: "Fix the sorted order $z_i < z_{i+1} < \\cdots < z_j$ of any pair's interval. Consider the first time the pivot is drawn from the set $Z_{ij} = \\{z_i, \\ldots, z_j\\}$ — before that, $z_i$ and $z_j$ stay in the same partition; when it happens, the drawn pivot is uniform over the $j - i + 1$ elements of $Z_{ij}$ (every element of the current partition is equally likely). The pair is compared **iff that first pivot is $z_i$ or $z_j$** (any other choice, $z_m$ with $i < m < j$, splits the pair apart forever). Hence $\\Pr\\{X_{ij} = 1\\} = 2/(j-i+1)$.",
        detail: "Two boundary checks: adjacent elements ($j = i+1$) give probability $2/2 = 1$ — *always* compared; the extreme pair gives $2/n$. The uniformity of the first pivot from $Z_{ij}$ is where randomization earns its keep: with deterministic pivots an adversary controls this draw, with random ones no input order can bias it.",
      },
      {
        term: "Summing to expected O(n lg n)",
        kind: "theorem",
        statement: "$E[X] = \\sum_{i=1}^{n-1}\\sum_{j=i+1}^{n} \\frac{2}{j-i+1} = \\sum_{\\ell=1}^{n-1} \\frac{2(n-\\ell)}{\\ell+1} = 2(n+1)(H_n - 1) - 2(n-1) \\le 2(n+1)(H_n - 1) < 2(n+1)\\ln n = O(n \\lg n)$ — grouping pairs by their distance $\\ell = j - i$, of which there are $n - \\ell$. Since $H_n \\approx \\ln n$, the expected comparisons are about $2n \\ln n \\approx 1.39\\, n\\lg n$.",
        detail: "The sum is the harmonic number in its final costume: distances $\\ell + 1 = 2, \\ldots, n$ each contribute $\\le 2n/\\ell$ at most, and $\\sum 1/\\ell = H_n$ closes the loop opened by the hiring analysis. The same style of bound will return in Chapter 8's analysis of randomized selection.",
      },
    ],
    examples: [
      {
        title: "Exact expected comparisons for n = 8",
        problem: "Compute the expected number of comparisons RANDOMIZED-QUICKSORT performs on 8 elements, exactly, from $E[X] = \\sum_{\\ell=1}^{7} 2(8-\\ell)/(\\ell+1)$.",
        steps: [
          { label: "Distance by distance", text: "$\\ell = 1$: $2 \\cdot 7/2 = 7$; $\\ell = 2$: $2 \\cdot 6/3 = 4$; $\\ell = 3$: $2 \\cdot 5/4 = 2.5$; $\\ell = 4$: $2 \\cdot 4/5 = 1.6$; $\\ell = 5$: $2 \\cdot 3/6 = 1$; $\\ell = 6$: $2 \\cdot 2/7 \\approx 0.571$; $\\ell = 7$: $2 \\cdot 1/8 = 0.25$." },
          { label: "Total", text: "$E[X] = 7 + 4 + 2.5 + 1.6 + 1 + 4/7 + 1/4 = 2369/140 \\approx 16.92$ comparisons." },
          { label: "Closed form check", text: "$2(n+1)(H_n - 1) - 2(n-1) = 2 \\cdot 9 \\cdot (2.7179 - 1) - 14 = 30.92 - 14 = 16.92$ — same number." },
          { label: "Against the bounds", text: "The loose bound $2(n+1)(H_n - 1) \\approx 30.9$; the asymptotic shape $1.39\\, n\\lg n \\approx 1.39 \\cdot 8 \\cdot 3 = 33.4$; the information-theoretic floor is $\\lceil\\lg 8!\\rceil = 16$ bits of comparisons — the exact 16.92 sits impressively close to optimal for such a simple rule." },
        ],
        result: "$E[X] = 2369/140 \\approx 16.9$ comparisons for $n = 8$: adjacent pairs always meet (7 pairs, probability 1 each), distant pairs rarely (the extremes with probability $2/8$).",
      },
      {
        title: "Which pairs meet, which never do",
        problem: "For $n = 8$ sorted elements, rank the pairwise comparison probabilities and explain the extremes.",
        steps: [
          { label: "Adjacent pairs", text: "$j - i + 1 = 2$: probability $2/2 = 1$. All 7 adjacent pairs are compared in every execution — the first pivot drawn from any $Z_{i,i+1}$ must be one of the two (there is no element strictly between them to separate them)." },
          { label: "Near pairs", text: "Distance 2 (e.g. $z_3$ vs $z_5$): $2/3$ — only a $z_4$-pivot in between would separate them before they meet." },
          { label: "The extremes", text: "$z_1$ vs $z_8$: $2/8 = 1/4$ — six interior elements could be picked first, each splitting the pair forever." },
          { label: "Weighting", text: "There are $n - \\ell$ pairs at each distance $\\ell$, so *many* low-probability distant pairs still contribute: the $\\ell = 1$ column contributes 7 of the 16.92 total, the six longer columns the remaining 9.92 — the harmonic tail is the algorithm's workhorse." },
        ],
        result: "Probability $2/(j-i+1)$ per pair: 1 for neighbors, $1/4$ for the extremes at $n = 8$ — the analysis prices every pair before a single pivot is ever drawn.",
      },
    ],
    keyTakeaways: [
      "The hiring analysis compresses to $E[m] = \\sum_{i=1}^n 1/i = H_n \\le \\ln n + 1$ — expected total cost $O(c_i n + c_h \\lg n)$, with the indicator template doing all the work.",
      "Randomized quicksort compares a pair at most once (a pivot never returns), and $z_i, z_j$ meet iff the first pivot from $\\{z_i, \\ldots, z_j\\}$ is one of them — probability $2/(j-i+1)$ over the algorithm's coins, for every input.",
      "Summing over distances gives $E[X] = 2(n+1)(H_n-1) - 2(n-1) \\approx 2n\\ln n$: expected $O(n \\lg n)$ comparisons on any input of distinct keys — the chapter's flagship application of indicator random variables.",
    ],
    quiz: [
      {
        q: "In any single execution of quicksort, two given elements $z_i$ and $z_j$ are compared:",
        options: [
          "at most once, because comparisons only involve the current pivot, and a pivot leaves every later partition",
          "exactly once, because quicksort is a comparison sort",
          "up to $\\lg n$ times, once per recursion level",
          "never, if they are not adjacent in sorted order",
        ],
        answer: 0,
        explanation: "Comparisons happen only against pivots; once either element serves as pivot, it is excluded from all subsequent subproblems — so the pair meets at most once (and not at all if an in-between pivot separates them first).",
      },
      {
        q: "The probability that $z_i$ and $z_j$ ($i < j$) are ever compared in randomized quicksort equals $2/(j-i+1)$ because:",
        options: [
          "every element is a pivot with probability $2/n$",
          "the first pivot chosen from the $j-i+1$ elements between them inclusive is uniform, and only the two endpoints of that interval cause the comparison",
          "quicksort compares each element with its two neighbors",
          "the pivots form a random binary search tree of height $j - i$",
        ],
        answer: 1,
        explanation: "While no pivot has come from $\\{z_i, \\ldots, z_j\\}$ the pair stays together; when one finally is drawn (uniformly among the $j-i+1$), an interior choice separates them forever — only $z_i$ or $z_j$ as that first pivot produces the comparison: probability $2/(j-i+1)$.",
      },
      {
        q: "For the expected comparisons of randomized quicksort on $n$ elements, the exact value is:",
        options: [
          "$\\binom{n}{2}$ always",
          "$2(n+1)(H_n - 1) - 2(n-1)$, hence $O(n \\lg n)$",
          "$n \\lg n$ exactly",
          "$2^n$",
        ],
        answer: 1,
        explanation: "Grouping the $\\sum 2/(j-i+1)$ by distance $\\ell = j - i$ gives $\\sum_\\ell 2(n-\\ell)/(\\ell+1)$, which telescopes to $2(n+1)(H_n-1) - 2(n-1) \\approx 2n\\ln n$.",
      },
      {
        q: "Which pair is compared with probability exactly 1 in every run of quicksort?",
        options: [
          "the two extreme elements $z_1$ and $z_n$",
          "any two adjacent elements $z_i, z_{i+1}$",
          "the pair first chosen as pivots",
          "no pair — every pair has probability below 1",
        ],
        answer: 1,
        explanation: "For adjacent elements the interval $Z_{i,i+1}$ contains only the two of them, so whichever is drawn as its first pivot, the pair meets: probability $2/2 = 1$.",
      },
    ],
  },
]

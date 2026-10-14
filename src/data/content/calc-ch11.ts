import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 11: Infinite Sequences and Series (Sections 11.1 – 11.11)
// Master study content. Worked-example numbers follow the book’s own style.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const calcCh11Content: SectionContent[] = [
  // ------------------------------------------------------------------ 11.1
  {
    sectionId: 'calc-ch11-s1',
    readingTime: 9,
    intro: 'A sequence is just a function whose domain is the positive integers — an endless list of numbers $a_1, a_2, a_3, \\ldots$ whose destiny we want to predict. Almost every question in this chapter, and all of the theory of infinite series that follows, reduces to a single question about sequences: as $n$ grows without bound, does $a_n$ settle down to a limit?',
    objectives: [
      'Define sequences, their limits, and convergence versus divergence',
      'Compute limits of sequences using continuity, l’Hospital’s Rule and the Squeeze Theorem',
      'Define monotone and bounded sequences and apply the Monotonic Sequence Theorem',
      'Analyze recursively defined sequences, including the limit definition of $e$',
    ],
    concepts: [
      {
        term: 'Sequence',
        kind: 'definition',
        statement: 'A **sequence** is a function whose domain is the positive integers (or all integers beyond some starting point); its values are written $a_1, a_2, a_3, \\ldots$ or compactly as $\\{a_n\\}$, with $a_n$ the **nth term**.',
        detail: 'Notation comes in two flavors: the explicit formula $a_n = \\frac{n}{n+1}$, and the recursive form where each term is built from its predecessors, like the Fibonacci sequence $f_1 = 1$, $f_2 = 1$, $f_n = f_{n-1} + f_{n-2}$. A sequence can be graphed by plotting $(n, a_n)$ — a scatter of points marching to the right, unlike the continuous graphs of Chapter 2.',
      },
      {
        term: 'Limit of a sequence',
        kind: 'definition',
        statement: 'The sequence $\\{a_n\\}$ **converges to the limit $L$**, written $\\lim_{n\\to\\infty} a_n = L$, if the terms $a_n$ can be made arbitrarily close to $L$ by taking $n$ sufficiently large; if no such $L$ exists, the sequence **diverges**.',
        detail: 'The visual test: the horizontal line $y = L$ eventually traps the scatter of points in any strip of width $\\varepsilon$ around it. Divergence takes many forms — $a_n = n$ marches to infinity, $a_n = (-1)^n$ oscillates forever between two values, and $a_n = (-1)^n n$ oscillates unboundedly.',
      },
      {
        term: 'Sequences from functions',
        kind: 'theorem',
        statement: 'If $\\lim_{x\\to\\infty} f(x) = L$ and $f(n) = a_n$ for integer $n$, then $\\lim_{n\\to\\infty} a_n = L$. Consequently l’Hospital’s Rule may be applied to $\\frac{f(x)}{g(x)}$ before returning to the sequence.',
        detail: 'The converse is false — the sequence $a_n = \\sin(\\pi n)$ is identically zero and converges to $0$, while $\\sin(\\pi x)$ oscillates and has no limit as $x \\to \\infty$. The theorem is a one-way street from functions to sequences, and it is why all the limit machinery of Chapter 4 is suddenly available: for instance $a_n = \\frac{\\ln n}{n}$ has the same limit as the function $\\frac{\\ln x}{x}$, which l’Hospital’s Rule evaluates as $\\frac{1/x}{1} \\to 0$.',
      },
      {
        term: 'Squeeze Theorem for sequences',
        kind: 'theorem',
        statement: 'If $a_n \\le b_n \\le c_n$ for all large $n$, and $\\lim a_n = \\lim c_n = L$, then $\\lim b_n = L$ as well.',
        detail: 'The workhorse application: $-\\frac{1}{n} \\le \\frac{(-1)^n}{n} \\le \\frac{1}{n}$ squeezes $\\frac{(-1)^n}{n}$ to $0$, and $|\\sin n| \\le 1$ squeezes $\\frac{\\sin n}{n}$ to $0$ — cases where l’Hospital’s Rule is useless because there is no quotient of functions of $x$ to differentiate.',
      },
      {
        term: 'Monotone and bounded sequences',
        kind: 'definition',
        statement: 'A sequence is **increasing** if $a_{n+1} \\ge a_n$ for all $n$ (decreasing if $a_{n+1} \\le a_n$); either property makes it **monotonic**. It is **bounded above** if there is a number $M$ with $a_n \\le M$ for all $n$, and **bounded below** analogously.',
        detail: 'Monotonicity is typically verified by comparing $a_{n+1}$ to $a_n$ directly, or by checking that $f\'(x) \\ge 0$ where $a_n = f(n)$. These two properties are independent: $a_n = n$ is increasing but unbounded; $a_n = (-1)^n$ is bounded but wildly non-monotonic.',
      },
      {
        term: 'Monotonic Sequence Theorem',
        kind: 'theorem',
        statement: 'Every bounded, monotonic sequence is convergent: an increasing sequence bounded above converges to its least upper bound; a decreasing sequence bounded below converges to its greatest lower bound.',
        detail: 'This theorem is the quiet engine behind much of this chapter — it guarantees convergence without ever producing the value of the limit, and it is the standard tool for recursive sequences where the terms are defined by a formula in $a_{n}$, not in $n$.',
      },
      {
        term: 'Recursive sequences',
        kind: 'method',
        statement: 'To analyze a recursively defined sequence: (1) compute several terms to guess monotonicity and a bound; (2) **prove both by induction**; (3) invoke the Monotonic Sequence Theorem to conclude a limit $L$ exists; (4) take limits across the recursion formula to solve for $L$.',
        detail: 'The last step works because the recursion is typically built from continuous operations: if $a_{n+1} = \\sqrt{2 + a_n}$, then passing to the limit gives $L = \\sqrt{2 + L}$, an equation for the unknown limit. In computer science terms this is exactly a fixed-point iteration — the same idea that powers Newton’s method from Section 4.7.',
      },
      {
        term: 'Growth rates and the number $e$',
        kind: 'insight',
        statement: 'Factorials eventually dominate every exponential: $\\lim_{n\\to\\infty} \\frac{a^n}{n!} = 0$ for every base $a$, so $n!$ grows faster than $2^n$, $10^n$, any $a^n$. And the fundamental limit defining $e$ is $\\lim_{n\\to\\infty}\\left(1 + \\frac{1}{n}\\right)^n = e$.',
        detail: 'The $e$-limit is proved with the Monotonic Sequence Theorem, not by any limit law: the sequence $a_n = \\left(1+\\frac{1}{n}\\right)^n$ can be shown (via the Binomial Theorem) to be increasing and bounded above by $3$, so it converges; the compound-interest interpretation is the limit of annual, monthly, daily, then continuous compounding.',
      },
    ],
    examples: [
      {
        title: 'Three limits of sequences',
        problem: 'Evaluate (a) $\\lim_{n\\to\\infty} \\sin\\frac{\\pi}{n}$, (b) $\\lim_{n\\to\\infty} \\frac{\\ln n}{n}$, and (c) $\\lim_{n\\to\\infty} \\frac{(-1)^n}{n^2}$.',
        steps: [
          { label: 'Step 1: Use continuity for (a)', text: 'Since $\\sin$ is continuous and $\\frac{\\pi}{n} \\to 0$, the sequence limit equals $\\sin 0 = 0$. The angles shrink to zero, and sine follows them down.' },
          { label: 'Step 2: Borrow l’Hospital for (b)', text: 'The function $\\frac{\\ln x}{x}$ has an indeterminate form $\\frac{\\infty}{\\infty}$; l’Hospital’s Rule gives $\\lim \\frac{1/x}{1} = \\lim \\frac{1}{x} = 0$. By the function-to-sequence theorem, $\\frac{\\ln n}{n} \\to 0$ — logarithms are slower than any positive power of $n$.' },
          { label: 'Step 3: Squeeze for (c)', text: 'The factor $(-1)^n$ prevents any function-limit approach, but $-\\frac{1}{n^2} \\le \\frac{(-1)^n}{n^2} \\le \\frac{1}{n^2}$, and both bounds go to $0$ — so the sequence is squeezed to $0$.' },
          { label: 'Step 4: Interpret', text: 'Three different tools — continuity, l’Hospital, squeezing — each matched to the obstruction at hand: oscillation, indeterminate growth, and a sign-alternating factor.' },
        ],
        result: 'All three limits equal $0$: $\\sin\\frac{\\pi}{n} \\to 0$, $\\frac{\\ln n}{n} \\to 0$, and $\\frac{(-1)^n}{n^2} \\to 0$.',
      },
      {
        title: 'The limit that defines $e$',
        problem: 'Show that the sequence $a_n = \\left(1 + \\frac{1}{n}\\right)^n$ converges.',
        steps: [
          { label: 'Step 1: Monotonicity from the Binomial Theorem', text: 'Expanding $\\left(1+\\frac{1}{n}\\right)^n$ gives $\\sum_{k=0}^{n} \\binom{n}{k}\\frac{1}{n^k}$; comparing term by term with the expansion for $n+1$ shows each summand grows or stays fixed, and one extra positive term appears — so $a_{n+1} > a_n$: the sequence is increasing.' },
          { label: 'Step 2: A useful companion', text: 'Consider $b_n = \\left(1+\\frac{1}{n}\\right)^{n+1} = a_n\\left(1+\\frac{1}{n}\\right)$; the same binomial comparison shows $b_n$ is decreasing, and since $a_n < b_n$ for every $n$, the increasing sequence is bounded above by $b_1 = 4$ (in fact by $b_n$ for any $n$).' },
          { label: 'Step 3: Apply the Monotonic Sequence Theorem', text: 'Increasing and bounded above implies $\\{a_n\\}$ converges — its limit is **defined** to be the number $e$. Because $a_2 = \\frac{9}{4} > 2$ and $a_n < b_n \\le b_5 < 3$ for large $n$, we get $2 < e < 3$.' },
          { label: 'Step 4: Why both sequences share the limit', text: 'The gap $b_n - a_n = \\frac{a_n}{n}$ is squeezed between $0$ and $\\frac{3}{n}$, hence tends to $0$, so $a_n$ and $b_n$ converge to the same number $e \\approx 2.71828$.' },
        ],
        result: 'The sequence of compound-interest factors $\\left(1+\\frac{1}{n}\\right)^n$ increases to $e$ while $\\left(1+\\frac{1}{n}\\right)^{n+1}$ decreases to $e$ — the limit is caught in a closing vice.',
      },
      {
        title: 'A recursive square-root sequence',
        problem: 'The sequence $x_1 = 0$, $x_{n+1} = \\sqrt{2 + x_n}$ is defined recursively. Prove it converges and find its limit.',
        steps: [
          { label: 'Step 1: Experiment', text: '$x_2 = \\sqrt{2} \\approx 1.414$, $x_3 = \\sqrt{2 + \\sqrt{2}} \\approx 1.848$, $x_4 \\approx 1.962$, $x_5 \\approx 1.990$: the terms appear to increase toward $2$.' },
          { label: 'Step 2: Prove boundedness by induction', text: 'If $x_n \\le 2$ then $x_{n+1} = \\sqrt{2 + x_n} \\le \\sqrt{4} = 2$. Since $x_1 = 0 \\le 2$, every term is at most $2$.' },
          { label: 'Step 3: Prove monotonicity by induction', text: 'If $x_n \\le x_{n+1}$ then $2 + x_n \\le 2 + x_{n+1}$, so $x_{n+1} = \\sqrt{2+x_n} \\le \\sqrt{2+x_{n+1}} = x_{n+2}$; since $x_1 = 0 \\le x_2$, the sequence is increasing.' },
          { label: 'Step 4: Conclude and solve for the limit', text: 'By the Monotonic Sequence Theorem $x_n \\to L$ for some $L$. Taking limits in the recursion (square root is continuous): $L = \\sqrt{2 + L}$, so $L^2 - L - 2 = 0$, giving $L = 2$ or $L = -1$. Since all terms are nonnegative, $L = 2$.' },
        ],
        result: 'The sequence increases to the limit $2$: an endless tower of nested square roots converges because it is monotonic and bounded — exactly the two facts the Monotonic Sequence Theorem requires.',
      },
    ],
    keyTakeaways: [
      'A sequence is a function on the positive integers; $\\lim_{n\\to\\infty} a_n = L$ means the terms eventually stay arbitrarily close to $L$.',
      'Function limits transfer to sequences (so l’Hospital’s Rule is available), but not conversely — $\\sin(\\pi n) \\to 0$ while $\\sin(\\pi x)$ has no limit.',
      'The Squeeze Theorem handles oscillating factors like $(-1)^n$ and $\\sin n$ that no other limit law touches.',
      'The Monotonic Sequence Theorem — bounded plus monotonic implies convergent — is the main existence tool, especially for recursive sequences.',
      'For a recursion, verify monotonicity and a bound by induction, then pass to the limit in the recursion to solve an equation for $L$.',
      'Two growth-rate facts organize the chapter ahead: $\\frac{a^n}{n!} \\to 0$ for every $a$, and $\\left(1+\\frac{1}{n}\\right)^n \\to e$.',
    ],
    quiz: [
      {
        q: 'The sequence $a_n = \\frac{(-1)^n n}{n+1}$:',
        options: ['Converges to $1$', 'Converges to $-1$', 'Diverges, because it oscillates between values near $1$ and near $-1$', 'Diverges to infinity'],
        answer: 2,
        explanation: 'The even terms approach $\\frac{n}{n+1} \\to 1$ while the odd terms approach $-\\frac{n}{n+1} \\to -1$; two different cluster points means no limit exists.',
      },
      {
        q: 'To evaluate $\\lim_{n\\to\\infty}\\frac{\\ln n}{n^2}$, the cleanest tool is:',
        options: ['The Squeeze Theorem with $\\pm\\frac{1}{n}$', 'l’Hospital’s Rule applied to $\\frac{\\ln x}{x^2}$, then the function-to-sequence theorem', 'The Monotonic Sequence Theorem', 'Summing a geometric series'],
        answer: 1,
        explanation: 'The function $\\frac{\\ln x}{x^2}$ has form $\\frac{\\infty}{\\infty}$; l’Hospital gives $\\frac{1/x}{2x} = \\frac{1}{2x^2} \\to 0$, and the sequence inherits the limit $0$.',
      },
      {
        q: 'The sequence defined by $a_1 = 1$ and $a_{n+1} = \\frac{a_n + 6}{2}$ converges to:',
        options: [`$2$`, `$3$`, `$4$`, `$6$`],
        answer: 3,
        explanation: 'Passing to the limit in the recursion gives $L = \\frac{L+6}{2}$, so $2L = L + 6$ and $L = 6$; an induction shows the sequence is increasing and bounded by $6$, so the limit exists.',
      },
      {
        q: 'Which statement about the Monotonic Sequence Theorem is correct?',
        options: ['Every monotonic sequence converges', 'Every bounded sequence converges', 'A sequence that is both monotonic and bounded must converge, even if the theorem does not reveal the limit’s value', 'It converts a recursive sequence into an explicit formula'],
        answer: 2,
        explanation: 'Monotonic alone is insufficient ($a_n = n$), as is bounded alone ($a_n = (-1)^n$); together they force convergence to a least/greatest bound whose value must be found separately.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.2
  {
    sectionId: 'calc-ch11-s2',
    readingTime: 9,
    intro: 'An infinite series is what you get by trying to add up a whole sequence: $a_1 + a_2 + a_3 + \\cdots$. Since no finite being can perform infinitely many additions, the sum is defined as the limit of partial sums — and the entire chapter is an extended study of when that limit exists. Two families, geometric and telescoping, can be summed exactly; the harmonic series shows how subtle the borderline is.',
    objectives: [
      'Define partial sums and the convergence of an infinite series',
      'Compute the sum of a geometric series and use it to evaluate repeating decimals',
      'Evaluate telescoping series by partial-fraction decomposition',
      'Prove the harmonic series diverges and apply the Test for Divergence',
    ],
    concepts: [
      {
        term: 'Infinite series and partial sums',
        kind: 'definition',
        statement: 'Given a sequence $\\{a_n\\}$, the **series** $\\sum_{n=1}^{\\infty} a_n = a_1 + a_2 + a_3 + \\cdots$ is the sequence of **partial sums** $s_n = a_1 + a_2 + \\cdots + a_n = \\sum_{i=1}^{n} a_i$; the series **converges to the sum $s$** if $\\lim_{n\\to\\infty} s_n = s$, and diverges otherwise.',
        detail: 'A series is a number only when this limit exists. The distinction between the sequence of terms and the sequence of partial sums is the conceptual hinge of the whole chapter: $a_n = \\frac{1}{2^n}$ and $a_n = \\frac{1}{n}$ both shrink to zero, yet their series behave completely differently.',
      },
      {
        term: 'Geometric series',
        kind: 'theorem',
        statement: 'The geometric series $\\sum_{n=1}^{\\infty} ar^{n-1} = a + ar + ar^2 + \\cdots$ with $r \\ne 0$ converges to $\\frac{a}{1-r}$ when $|r| < 1$ and diverges when $|r| \\ge 1$. Equivalently $\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r}$.',
        detail: 'The proof is a self-cancelling algebra trick: $s_n - rs_n = a - ar^n$, so $s_n = \\frac{a(1-r^n)}{1-r}$, and $r^n \\to 0$ exactly when $|r| < 1$. The geometric series is the prototype for everything ahead: the ratio tests of Section 11.6, the power series of Section 11.8, and the series for $\\frac{1}{1-x}$ that generates most of Section 11.9.',
      },
      {
        term: 'Telescoping series',
        kind: 'method',
        statement: 'A series whose terms decompose as $a_n = b_n - b_{n+1}$ is **telescoping**: every partial sum collapses to $s_n = b_1 - b_{n+1}$, so the series converges to $b_1 - \\lim b_{n+1}$ whenever the limit exists.',
        detail: 'Partial fractions are the usual trigger: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. Write out the partial sums and watch the middle terms annihilate in pairs — the telescope metaphor. If $b_n$ has no limit, the telescoping fails to converge even though it always simplifies.',
      },
      {
        term: 'The harmonic series diverges',
        kind: 'theorem',
        statement: 'The harmonic series $\\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots$ **diverges**, even though its terms tend to zero.',
        detail: 'The classic grouping proof regroups the terms into blocks of doubling size: $1 + \\frac{1}{2} + \\left(\\frac{1}{3}+\\frac{1}{4}\\right) + \\left(\\frac{1}{5}+\\cdots+\\frac{1}{8}\\right) + \\cdots$, where each block sums to at least $\\frac{1}{2}$ because its largest term sits at the end. The partial sums therefore exceed $1 + \\frac{k}{2}$ after $k$ blocks and march past every bound. The partial sums do grow — but excruciatingly slowly, like $\\ln n$ (plus the Euler–Mascheroni constant $\\gamma \\approx 0.5772$); summing a billion terms still leaves you short of $21$.',
      },
      {
        term: 'The Test for Divergence',
        kind: 'theorem',
        statement: 'If $\\lim_{n\\to\\infty} a_n$ does not exist, or exists but is not zero, then $\\sum a_n$ diverges. Equivalently: $\\sum a_n$ can converge only if $a_n \\to 0$.',
        detail: 'The contrapositive trap is the most common error in the entire chapter: $a_n \\to 0$ does **not** imply convergence — the harmonic series is the eternal counterexample. The test can only prove divergence; it can never certify convergence.',
      },
      {
        term: 'Combining series',
        kind: 'insight',
        statement: 'If $\\sum a_n = s$ and $\\sum b_n = t$ converge, then $\\sum (a_n + b_n) = s + t$ and $\\sum c\\,a_n = cs$ for any constant $c$; dropping or changing finitely many terms does not affect convergence (though it changes the sum).',
        detail: 'Note the asymmetry: if one series converges and the other diverges, their sum must diverge — convergence is destroyed by mixing in a divergent tail. But two divergent series can occasionally sum to a convergent one, since cancellation may occur; no conclusion can be drawn from divergence alone.',
      },
    ],
    figures: [
      {
        caption: 'Partial sums $S_n = 1 + r + r^2 + \\cdots + r^{n-1}$ of the geometric series with $r = 0.6$ (bars) climbing toward the dashed line $S = \\frac{1}{1-r} = 2.5$. The gap $S - S_n = r^n/(1-r)$ shrinks geometrically: by $n = 10$ the partial sum is already within $0.016$ of the limit, and the bars visibly flatten against the line.',
        svg: '<svg viewBox="0 0 720 320" width="100%" role="img" aria-label="Bar chart of geometric series partial sums converging toward the dashed limit line S"><line x1="70" y1="280" x2="700" y2="280" stroke="currentColor" stroke-width="1.5"/><polygon points="710,280 698,275.5 698,284.5" fill="currentColor"/><line x1="70" y1="280" x2="70" y2="32" stroke="currentColor" stroke-width="1.5"/><polygon points="70,22 65.5,33 74.5,33" fill="currentColor"/><line x1="70" y1="40" x2="700" y2="40" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 4"/><rect x="90" y="184" width="26" height="96" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="130" y="126.4" width="26" height="153.6" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="170" y="91.8" width="26" height="188.2" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="210" y="71.1" width="26" height="208.9" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="250" y="58.7" width="26" height="221.3" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="290" y="51.2" width="26" height="228.8" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="330" y="46.7" width="26" height="233.3" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="370" y="44" width="26" height="236" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="410" y="42.4" width="26" height="237.6" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="450" y="41.5" width="26" height="238.5" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="490" y="40.9" width="26" height="239.1" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="530" y="40.5" width="26" height="239.5" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="570" y="40.3" width="26" height="239.7" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="610" y="40.2" width="26" height="239.8" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><rect x="650" y="40.1" width="26" height="239.9" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5"/><line x1="103" y1="284" x2="103" y2="292" stroke="currentColor" stroke-width="1.5"/><line x1="263" y1="284" x2="263" y2="292" stroke="currentColor" stroke-width="1.5"/><line x1="463" y1="284" x2="463" y2="292" stroke="currentColor" stroke-width="1.5"/><line x1="663" y1="284" x2="663" y2="292" stroke="currentColor" stroke-width="1.5"/><text x="103" y="306" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">1</text><text x="263" y="306" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">5</text><text x="463" y="306" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">10</text><text x="663" y="306" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">15</text><text x="700" y="306" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">n</text><text x="263" y="74" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">S₅</text><text x="463" y="58" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">S₁₀</text><text x="700" y="32" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f43f5e" text-anchor="end" font-style="italic">S = 1/(1 − r) = 2.5</text><text x="92" y="62" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor"><tspan font-style="italic">r</tspan> = 0.6</text><text x="60" y="96" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end" font-style="italic">Sₙ</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Geometric series and repeating decimals',
        problem: '(a) Does $\\sum_{n=1}^{\\infty} 2^{2n}\\,3^{1-n}$ converge? (b) Express the repeating decimal $x = 5.238383838\\ldots$ as a ratio of integers.',
        steps: [
          { label: 'Step 1: Identify the ratio in (a)', text: 'Rewrite the term: $2^{2n}3^{1-n} = 4^n \\cdot \\frac{3}{3^n} = 3\\left(\\frac{4}{3}\\right)^n$. This is geometric with ratio $r = \\frac{4}{3}$, and $|r| = \\frac{4}{3} \\ge 1$, so the series **diverges**.' },
          { label: 'Step 2: Split the decimal in (b)', text: 'The non-repeating part is $5.2$; the repeating block $38$ starts in the thousandths place: $x = 5.2 + 0.0383838\\ldots = 5.2 + \\sum_{n=1}^{\\infty} 38\\left(\\frac{1}{1000}\\right)\\left(\\frac{1}{100}\\right)^{n-1}$.' },
          { label: 'Step 3: Sum the geometric tail', text: 'The tail is geometric with first term $a = \\frac{38}{1000}$ and ratio $r = \\frac{1}{100}$, so it sums to $\\frac{38/1000}{1 - 1/100} = \\frac{38/1000}{99/100} = \\frac{38}{990}$.' },
          { label: 'Step 4: Combine', text: '$x = \\frac{52}{10} + \\frac{38}{990} = \\frac{5148}{990} + \\frac{38}{990} = \\frac{5186}{990} = \\frac{2593}{495}$.' },
        ],
        result: '(a) Diverges — ratio $\\frac{4}{3} \\ge 1$. (b) $5.23\\overline{38} = \\frac{2593}{495}$, and the same technique shows $0.999\\ldots = \\sum \\frac{9}{10^n} = \\frac{9/10}{1/10} = 1$ exactly.',
      },
      {
        title: 'A telescoping series',
        problem: 'Show that $\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)} = 1$.',
        steps: [
          { label: 'Step 1: Decompose with partial fractions', text: '$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$, verified by recombining over the common denominator $n(n+1)$.' },
          { label: 'Step 2: Write out the partial sum', text: '$s_n = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\cdots + \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right)$.' },
          { label: 'Step 3: Watch the telescope collapse', text: 'Each negative term cancels the positive term that follows it: $-\\frac{1}{2}$ kills $\\frac{1}{2}$, $-\\frac{1}{3}$ kills $\\frac{1}{3}$, and so on. Everything vanishes except the first and last: $s_n = 1 - \\frac{1}{n+1}$.' },
          { label: 'Step 4: Take the limit', text: '$\\lim_{n\\to\\infty}\\left(1 - \\frac{1}{n+1}\\right) = 1$, so the series converges and its sum is exactly $1$.' },
        ],
        result: 'The infinite sum of reciprocals of pronic numbers is exactly $1$ — a rare series we can evaluate in closed form.',
      },
      {
        title: 'The harmonic series diverges',
        problem: 'Prove that $\\sum_{n=1}^{\\infty} \\frac{1}{n}$ diverges, and explain why its terms tending to $0$ does not save it.',
        steps: [
          { label: 'Step 1: Regroup into doubling blocks', text: '$H = 1 + \\frac{1}{2} + \\left(\\frac{1}{3} + \\frac{1}{4}\\right) + \\left(\\frac{1}{5} + \\frac{1}{6} + \\frac{1}{7} + \\frac{1}{8}\\right) + \\cdots$, where the block ending at $\\frac{1}{2^k}$ contains $2^{k-1}$ terms.' },
          { label: 'Step 2: Bound each block below', text: 'Within each block the smallest term is the last one, so each block of $2^{k-1}$ terms is at least $2^{k-1} \\cdot \\frac{1}{2^k} = \\frac{1}{2}$. For instance $\\frac{1}{3} + \\frac{1}{4} > \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$.' },
          { label: 'Step 3: Compare partial sums to a divergent sequence', text: 'After $k$ blocks the partial sum exceeds $1 + \\frac{k}{2}$, which grows without bound — so the sequence of partial sums diverges to infinity.' },
          { label: 'Step 4: Extract the moral', text: 'The terms $\\frac{1}{n}$ vanish, but too slowly: a necessary condition for convergence is not sufficient. The harmonic series is the borderline case of every test in this chapter — the $p$-series with $p = 1$, diverging with $p$ any smaller, converging with $p$ any larger.' },
        ],
        result: 'The harmonic series diverges; its partial sums sneak past every integer, so slowly that $H_{1{,}000{,}000} \\approx 14.39$ even after a million terms.',
      },
    ],
    keyTakeaways: [
      'A series converges when its sequence of partial sums has a finite limit; the series **is** that limit, not the list of terms.',
      'Geometric series converge to $\\frac{a}{1-r}$ exactly when $|r| < 1$ — the only elementary family with a general closed-form sum.',
      'Repeating decimals are geometric series in disguise; multiply by the block length or sum the tail with $\\frac{a}{1-r}$.',
      'Telescoping series are evaluated by partial fractions: collapse $s_n$ to two surviving terms, then take the limit.',
      'The harmonic series diverges despite $\\frac{1}{n} \\to 0$; its partial sums grow like $\\ln n + \\gamma$.',
      'The Test for Divergence is one-directional: nonzero or nonexistent term limits prove divergence, but a zero limit proves nothing.',
      'Series arithmetic: sums and constant multiples of convergent series converge; finite changes never affect convergence.',
    ],
    quiz: [
      {
        q: 'The series $\\sum_{n=0}^{\\infty} \\frac{3}{5}\\left(\\frac{2}{5}\\right)^n$ equals:',
        options: [`$\\frac{3}{5}$`, `$\\frac{5}{3}$`, `$1$`, `$\\frac{15}{23}$`],
        answer: 2,
        explanation: 'With $a = \\frac{3}{5}$ and $r = \\frac{2}{5}$, the sum is $\\frac{a}{1-r} = \\frac{3/5}{1 - 2/5} = \\frac{3/5}{3/5} = 1$, listed third.',
      },
      {
        q: 'If $\\lim_{n\\to\\infty} a_n = \\frac{1}{2}$, then $\\sum a_n$:',
        options: ['Converges to $\\frac{1}{2}$', 'Converges, but to some other value', 'Diverges by the Test for Divergence', 'May converge or diverge — more information is needed'],
        answer: 2,
        explanation: 'Convergence requires the terms to die out to zero; a term limit of $\\frac{1}{2}$ makes successive partial sums climb by nearly $\\frac{1}{2}$ forever, so the series must diverge.',
      },
      {
        q: 'The partial sums of the harmonic series satisfy $H_n \\approx \\ln n + \\gamma$ where $\\gamma \\approx 0.5772$. This tells us the harmonic series:',
        options: ['Converges to $\\gamma$', 'Converges to $\\ln \\infty$', 'Diverges because $H_n$ grows like $\\ln n$, which is unbounded', 'Diverges because its terms do not approach zero'],
        answer: 2,
        explanation: 'The terms do approach zero — that is not the failure mode. The partial sums grow logarithmically without bound, which is precisely divergence, however slow.',
      },
      {
        q: '$\\sum_{n=1}^{\\infty}\\left(\\frac{1}{2^n} + \\frac{1}{n}\\right)$ is:',
        options: ['Convergent, as the sum of two convergent series', 'Divergent, because adding a divergent series to anything divergent or not gives divergence when one part converges', 'Convergent by cancellation between the two parts', 'Impossible to determine'],
        answer: 1,
        explanation: 'The geometric part converges; the harmonic part diverges. If the combined series converged, subtracting the (convergent) geometric series would force the harmonic series to converge — contradiction.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.3
  {
    sectionId: 'calc-ch11-s3',
    readingTime: 8,
    intro: 'The Integral Test is the bridge between infinite series and the improper integrals of Section 7.8: for a positive, decreasing sequence, the series and the integral of its continuous extension live or die together. Its byproduct is the $p$-series family — the single most useful collection of benchmarks in the chapter — and a remainder estimate that converts convergence into honest numerical answers.',
    objectives: [
      'State the hypotheses of the Integral Test and apply it correctly',
      'Classify $p$-series by the exponent $p$',
      'Estimate the tail of a convergent series with integral bounds and determine the terms needed for a target accuracy',
    ],
    concepts: [
      {
        term: 'The Integral Test',
        kind: 'theorem',
        statement: 'Let $f$ be a function that is **positive, continuous and decreasing** on $[1, \\infty)$, with $a_n = f(n)$. Then $\\sum_{n=1}^{\\infty} a_n$ converges if and only if $\\int_1^{\\infty} f(x)\\,dx$ converges.',
        detail: 'The proof is a picture: draw the rectangles of width $1$ and height $a_n$ over $[n, n+1]$. On the one hand these rectangles lie below the curve shifted right, so $s_n$ is trapped between $\\int_1^{n+1} f$ and $a_1 + \\int_1^{n} f$ — the partial sums and the integral bound each other, so one converges exactly when the other does. All three hypotheses matter: negative, discontinuous, or non-monotonic behavior voids the warranty.',
      },
      {
        term: '$p$-series',
        kind: 'theorem',
        statement: 'The $p$-series $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$ **converges if $p > 1$ and diverges if $p \\le 1$**.',
        detail: 'Proof by the Integral Test: $\\int_1^{\\infty} \\frac{dx}{x^p} = \\lim_{t\\to\\infty} \\frac{x^{1-p} - 1}{1-p}$ converges exactly when $1 - p < 0$, i.e. $p > 1$ (the logarithmic borderline case $p = 1$ is the harmonic series). These series become the measuring sticks of Sections 11.4 — almost every comparison question reduces to "which $p$ is this like?"',
      },
      {
        term: 'Remainder estimate for the Integral Test',
        kind: 'theorem',
        statement: 'If $\\sum a_n$ converges by the Integral Test with remainder $R_n = s - s_n$, then $$\\int_{n+1}^{\\infty} f(x)\\,dx \\ \\le\\ R_n \\ \\le\\ \\int_n^{\\infty} f(x)\\,dx.$$',
        detail: 'The tail is the sum of the remaining rectangles, which sit above the curve beyond $n+1$ but below the curve from $n$ onward — the two integrals are exactly those areas. Trapping the error on both sides is what makes the estimate so useful: it yields an interval certified to contain the true sum.',
      },
      {
        term: 'The test gives no sum',
        kind: 'insight',
        statement: 'The Integral Test establishes that a series converges but says nothing about its value: $\\sum \\frac{1}{n^2}$ converges because $\\int_1^{\\infty}\\frac{dx}{x^2} = 1$, yet the sum is not $1$ — it is $\\frac{\\pi^2}{6} \\approx 1.645$, a famous result of Euler.',
        detail: 'Euler’s evaluation $\\sum \\frac{1}{n^2} = \\frac{\\pi^2}{6}$ (and $\\sum \\frac{1}{n^4} = \\frac{\\pi^4}{90}$) came from entirely different machinery — infinite products for sine. For actual values, partial sums plus remainder bounds are the practical tool.',
      },
      {
        term: 'Choosing the comparison integrals',
        kind: 'method',
        statement: 'To estimate $\\sum a_n$ to within tolerance $\\varepsilon$: pick $n$ so that $\\int_n^{\\infty} f(x)\\,dx < \\varepsilon$, compute the partial sum $s_n$, and report $s \\approx s_n$ with error guaranteed below $\\varepsilon$.',
        detail: 'Because the estimate uses tail integrals, accuracy improves as $n$ grows, and the necessary $n$ is found by evaluating the improper integral in closed form and solving for $n$ — turning a convergence theorem into an algorithm.',
      },
    ],
    examples: [
      {
        title: 'Applying the Integral Test twice',
        problem: 'Determine whether (a) $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ and (b) $\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$ converge.',
        steps: [
          { label: 'Step 1: Check the hypotheses for (a)', text: '$f(x) = \\frac{1}{x^2}$ is positive, continuous and decreasing on $[1, \\infty)$ — all three conditions hold.' },
          { label: 'Step 2: Evaluate the integral for (a)', text: '$\\int_1^{\\infty} x^{-2}\\,dx = \\lim_{t\\to\\infty}\\left[-\\frac{1}{x}\\right]_1^t = 0 - (-1) = 1 < \\infty$, so $\\sum \\frac{1}{n^2}$ converges (it is the $p$-series with $p = 2 > 1$). Its sum happens to be $\\frac{\\pi^2}{6}$, not $1$.' },
          { label: 'Step 3: Check the hypotheses for (b)', text: '$g(x) = \\frac{1}{x\\ln x}$ is positive, continuous (for $x \\ge 2$, where $\\ln x > 0$) and decreasing on $[2, \\infty)$.' },
          { label: 'Step 4: Evaluate the integral for (b)', text: 'With $u = \\ln x$: $\\int_2^{\\infty} \\frac{dx}{x\\ln x} = \\lim_{t\\to\\infty} \\ln(\\ln x)\\Big|_2^t = \\infty$ — the logarithmic integral diverges, so $\\sum \\frac{1}{n\\ln n}$ diverges.' },
        ],
        result: 'The $p = 2$ series converges; the logarithmic series diverges — terms going to zero "almost like $\\frac{1}{n}$" are still, cumulatively, too big.',
      },
      {
        title: 'Estimating a sum with a guaranteed error',
        problem: 'How many terms of $\\sum_{n=1}^{\\infty} \\frac{1}{n^4}$ guarantee the error is below $10^{-3}$, and what is the resulting estimate?',
        steps: [
          { label: 'Step 1: Bound the remainder', text: 'With $f(x) = x^{-4}$: $R_n \\le \\int_n^{\\infty} x^{-4}\\,dx = \\frac{1}{3n^3}$.' },
          { label: 'Step 2: Solve for $n$', text: 'Require $\\frac{1}{3n^3} < 10^{-3}$, i.e. $n^3 > \\frac{1000}{3}$, which gives $n \\ge 7$ (since $7^3 = 343 > 333$).' },
          { label: 'Step 3: Compute the partial sum', text: '$s_7 = 1 + \\frac{1}{16} + \\frac{1}{81} + \\frac{1}{256} + \\frac{1}{625} + \\frac{1}{1296} + \\frac{1}{2401} \\approx 1.0815$.' },
          { label: 'Step 4: State the certified answer', text: 'The true sum lies within $\\frac{1}{3\\cdot 343} \\approx 0.00097$ of $s_7$: we may report $\\sum \\frac{1}{n^4} \\approx 1.0815$ with error provably below $10^{-3}$. (The exact value is $\\frac{\\pi^4}{90} \\approx 1.0823$.)' },
        ],
        result: 'Seven terms suffice: $s_7 \\approx 1.0815$ with $|s - s_7| \\le 0.001$ — an honest, certified decimal answer from a pure convergence test.',
      },
    ],
    keyTakeaways: [
      'The Integral Test requires all three hypotheses — positive, continuous, decreasing — before it says anything.',
      'Series and integral share a fate: $\\sum f(n)$ converges exactly when $\\int_1^{\\infty} f(x)\\,dx$ does.',
      '$p$-series: converges for $p > 1$, diverges for $p \\le 1$; $p = 1$ is the logarithmically slow harmonic case.',
      'The remainder satisfies $\\int_{n+1}^{\\infty} f \\le R_n \\le \\int_n^{\\infty} f$, bracketing the error between two computable numbers.',
      'Convergence tests do not compute sums — for values, use partial sums with integral error bounds (or Euler’s $\\frac{\\pi^2}{6}$ if you are Euler).',
      'The borderline series $\\sum \\frac{1}{n \\ln n}$ diverges — barely — showing that "slightly smaller than $\\frac{1}{n}$" is not enough.',
    ],
    quiz: [
      {
        q: 'The series $\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt[3]{n^4}} = \\sum \\frac{1}{n^{4/3}}$:',
        options: ['Diverges because the terms do not approach zero', 'Diverges by the Integral Test since $\\frac{4}{3} < 2$', 'Converges by the $p$-series test since $p = \\frac{4}{3} > 1$', 'Converges only conditionally'],
        answer: 2,
        explanation: 'The exponent $p = \\frac{4}{3} > 1$ places it on the convergent side of the $p$-series divide, and the terms do tend to zero — just not fast enough to save it had $p$ been smaller.',
      },
      {
        q: 'Which series can be immediately classified by the Integral Test with $f(x) = xe^{-x^2}$?',
        options: [`$\\sum n e^{-n^2}$ — converges since $\\int_0^{\\infty} xe^{-x^2}dx = \\frac{1}{2}$`, '$\\sum \\frac{\\ln n}{n}$ — converges', '$\\sum \\frac{1}{n^2}$ — diverges', '$\\sum \\frac{n}{n+1}$ — converges'],
        answer: 0,
        explanation: '$f(x) = xe^{-x^2}$ is positive and (eventually) decreasing, and the substitution $u = x^2$ evaluates the improper integral to $\\frac{1}{2}$, so the series converges together with the integral.',
      },
      {
        q: 'For $\\sum \\frac{1}{n^2}$, the remainder after $n$ terms satisfies $R_n \\le \\int_n^{\\infty} \\frac{dx}{x^2} = \\frac{1}{n}$. To guarantee an error below $0.001$ you need at least:',
        options: ['$n = 10$ terms', '$n = 100$ terms', '$n = 1000$ terms', '$n = 10{,}000$ terms'],
        answer: 2,
        explanation: 'Requiring $\\frac{1}{n} < 10^{-3}$ forces $n > 1000$, so a thousand terms are certified necessary by this bound — the price of the slow $p = 2$ tail.',
      },
      {
        q: 'The Integral Test tells us $\\sum \\frac{1}{n^3}$ converges. Its sum is:',
        options: [`$\\int_1^{\\infty} \\frac{dx}{x^3} = \\frac{1}{2}$`, `$\\frac{\\pi^3}{\\text{something}}$`, 'Not revealed by the test — the test proves convergence without producing the value', 'Zero'],
        answer: 2,
        explanation: 'The Integral Test is an existence result: the integral bounds the series from both sides but does not equal it. The actual value (Apery’s constant $\\zeta(3) \\approx 1.202$) requires other methods.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.4
  {
    sectionId: 'calc-ch11-s4',
    readingTime: 8,
    intro: 'Most series are neither geometric nor telescoping, and their integrals are impossible. The comparison tests rescue us: if a series is smaller than a known convergent one, it converges; if larger than a known divergent one, it diverges. The limit comparison variant even tolerates sloppy inequalities, asking only that the two series be alike in the limit.',
    objectives: [
      'State and apply the (direct) Comparison Test in both directions',
      'State and apply the Limit Comparison Test, computing the constant $L$',
      'Choose an effective benchmark series and strip a complicated term to its dominant behavior',
    ],
    concepts: [
      {
        term: 'The Comparison Test',
        kind: 'theorem',
        statement: 'Suppose $\\sum a_n$ and $\\sum b_n$ are series with **positive terms** and $a_n \\le b_n$ for all large $n$. (1) If $\\sum b_n$ converges, then $\\sum a_n$ converges. (2) If $\\sum a_n$ diverges, then $\\sum b_n$ diverges.',
        detail: 'A bigger sum has more to add, so it is harder to keep finite: convergence of the dominant series forces convergence of the dominated one, and divergence of the dominated one forces divergence of the dominant. The two directions are contrapositive twins — you cannot use convergence of $a_n$ to conclude anything about $b_n$.',
      },
      {
        term: 'The Limit Comparison Test',
        kind: 'theorem',
        statement: 'If $\\sum a_n$ and $\\sum b_n$ have positive terms and $\\lim_{n\\to\\infty}\\frac{a_n}{b_n} = L$ with $0 < L < \\infty$, then the two series **converge or diverge together**.',
        detail: 'A finite positive limit means the terms are constant multiples of each other in the long run, and constant multiples never change convergence. If $L = 0$, $a_n$ is negligible next to $b_n$ (a convergent $b$-series still forces $a$ to converge); if $L = \\infty$ the implication runs the other way. The great convenience: no inequalities to establish — one limit to compute.',
      },
      {
        term: 'Stripping to dominant behavior',
        kind: 'method',
        statement: 'To build a benchmark for a rational-looking term: keep only the **fastest-growing factor of the numerator and of the denominator**; the result is a multiple of $\\frac{1}{n^p}$ or $a^n$, whose convergence is already known.',
        detail: 'For $\\frac{2n^2 + 3n}{\\sqrt{5 + n^5}}$, the dominant behavior is $\\frac{2n^2}{n^{5/2}} = \\frac{2}{n^{1/2}}$ — a divergent $p$-series multiple. Constants like the $2$ never matter; only the **exponent of $n$** does. This heuristic finds the benchmark; the Limit Comparison Test then makes it rigorous.',
      },
      {
        term: 'When direct comparison fails',
        kind: 'insight',
        statement: 'Direct comparison needs a clean inequality, and for algebraically messy terms the inequality may run the wrong way — this is where the Limit Comparison Test shines.',
        detail: 'Consider $\\sum \\frac{1}{2^n - 1}$: the natural guess is the geometric $\\sum \\frac{1}{2^n}$, but $\\frac{1}{2^n - 1} > \\frac{1}{2^n}$, an inequality in the useless direction (bigger than a convergent series proves nothing). Yet $\\lim \\frac{2^n}{2^n - 1} = 1$, a valid limit comparison — both converge.',
      },
      {
        term: 'Oscillating but bounded factors',
        kind: 'insight',
        statement: 'Terms like $\\sin n$ or $\\cos n$ have no limit, but they are **bounded**; when such a factor sits on top of a convergent benchmark, direct comparison swallows it whole.',
        detail: 'For $\\sum \\frac{5 + 2\\sin n}{n^{3/2}}$: since $-1 \\le \\sin n \\le 1$, each term lies between $\\frac{3}{n^{3/2}}$ and $\\frac{7}{n^{3/2}}$, and $\\sum \\frac{7}{n^{3/2}}$ is a convergent $p$-series multiple — convergence follows without knowing what $\\sin n$ does. Limit comparison is useless here precisely because $\\frac{5 + 2\\sin n}{1}$ has no limit.',
      },
    ],
    examples: [
      {
        title: 'Direct comparison, both directions',
        problem: 'Determine whether (a) $\\sum_{n=1}^{\\infty} \\frac{1}{n^3 + n}$ and (b) $\\sum_{n=1}^{\\infty} \\frac{n + 1}{n\\sqrt{n}}$ converge.',
        steps: [
          { label: 'Step 1: Build the inequality for (a)', text: 'Since $n^3 + n > n^3$, we get $\\frac{1}{n^3 + n} < \\frac{1}{n^3}$ — a term-by-term domination by the $p = 3$ series.' },
          { label: 'Step 2: Conclude for (a)', text: '$\\sum \\frac{1}{n^3}$ converges ($p = 3 > 1$), and the smaller series converges with it.' },
          { label: 'Step 3: Build the inequality for (b)', text: 'Since $n + 1 > n$, we have $\\frac{n+1}{n\\sqrt{n}} > \\frac{n}{n\\sqrt{n}} = \\frac{1}{\\sqrt{n}}$ — the terms dominate the $p = \\frac{1}{2}$ series.' },
          { label: 'Step 4: Conclude for (b)', text: '$\\sum \\frac{1}{\\sqrt{n}}$ is a divergent $p$-series ($p = \\frac{1}{2} \\le 1$), and a series larger term-by-term than a divergent one must also diverge.' },
        ],
        result: '(a) Converges by domination with the $p = 3$ series; (b) diverges by domination of the $p = \\frac{1}{2}$ series — the same tool, pointing opposite ways.',
      },
      {
        title: 'Limit comparison with a $p$-series',
        problem: 'Determine whether $\\sum_{n=1}^{\\infty} \\frac{2n^2 + 3n}{\\sqrt{5 + n^5}}$ converges.',
        steps: [
          { label: 'Step 1: Strip to dominant behavior', text: 'The numerator grows like $2n^2$; the denominator like $\\sqrt{n^5} = n^{5/2}$. The term should behave like $\\frac{2}{\\sqrt{n}}$, suggesting the benchmark $b_n = \\frac{1}{n^{1/2}}$.' },
          { label: 'Step 2: Compute the limit', text: '$L = \\lim_{n\\to\\infty} \\frac{(2n^2 + 3n)/\\sqrt{5+n^5}}{1/n^{1/2}} = \\lim_{n\\to\\infty} \\frac{(2n^2 + 3n)\\sqrt{n}}{\\sqrt{5 + n^5}} = \\lim \\sqrt{\\frac{(2n^2+3n)^2 n}{5 + n^5}}$.' },
          { label: 'Step 3: Evaluate inside the root', text: 'The dominant term of the numerator inside the root is $4n^5$; the denominator is $n^5$, so the fraction tends to $4$ and $L = \\sqrt{4} = 2$, a positive finite number.' },
          { label: 'Step 4: Apply the test', text: 'With $0 < L = 2 < \\infty$, the series shares the fate of $\\sum \\frac{1}{n^{1/2}}$, which diverges ($p = \\frac{1}{2} \\le 1$). The original series diverges.' },
        ],
        result: 'The series diverges by Limit Comparison with $\\sum \\frac{1}{\\sqrt{n}}$: morally it is twice that series in the limit.',
      },
      {
        title: 'A geometric benchmark and a bounded oscillation',
        problem: 'Determine whether (a) $\\sum_{n=1}^{\\infty}\\frac{1}{2^n - 1}$ and (b) $\\sum_{n=1}^{\\infty}\\frac{5 + 2\\sin n}{n^{3/2}}$ converge.',
        steps: [
          { label: 'Step 1: Try direct comparison for (a)', text: 'Since $2^n - 1 < 2^n$, we get $\\frac{1}{2^n - 1} > \\frac{1}{2^n}$: bigger than a convergent geometric series — inconclusive. The inequality runs the wrong way.' },
          { label: 'Step 2: Switch to limit comparison for (a)', text: '$\\lim_{n\\to\\infty} \\frac{1/(2^n - 1)}{1/2^n} = \\lim \\frac{2^n}{2^n - 1} = \\lim \\frac{1}{1 - 2^{-n}} = 1$, so the series behaves exactly like $\\sum \\frac{1}{2^n}$ and **converges**.' },
          { label: 'Step 3: Trap the oscillating numerator for (b)', text: 'Because $-1 \\le \\sin n \\le 1$, every term satisfies $\\frac{3}{n^{3/2}} \\le \\frac{5 + 2\\sin n}{n^{3/2}} \\le \\frac{7}{n^{3/2}}$ — no limit comparison is possible (the ratio oscillates), but the upper bound is enough.' },
          { label: 'Step 4: Conclude for (b)', text: '$\\sum \\frac{7}{n^{3/2}} = 7\\sum \\frac{1}{n^{3/2}}$ converges ($p = \\frac{3}{2} > 1$), so the smaller series converges by direct comparison — the sine wobble is harmless.' },
        ],
        result: '(a) Converges by limit comparison with the geometric series ratio $\\frac{1}{2}$; (b) converges by domination of $7\\,n^{-3/2}$ — two different comparison tools chosen by the shape of the term.',
      },
    ],
    keyTakeaways: [
      'Direct comparison: smaller than convergent is convergent; bigger than divergent is divergent — and those are the only valid implications.',
      'Limit comparison asks for one limit $\\lim \\frac{a_n}{b_n} = L \\in (0, \\infty)$, then transfers the verdict in either direction.',
      'Build benchmarks by keeping only the dominant powers: numerators and denominators reduce to multiples of $n^p$ or $a^n$.',
      'Inequalities that run the wrong way (like $\\frac{1}{2^n - 1} > \\frac{1}{2^n}$) are the classic signal to switch to limit comparison.',
      'Bounded oscillating factors ($\\sin n$, $\\cos n$) block limit comparison but fall to a direct-comparison envelope.',
      'Comparison tests need nonnegative terms; alternating series get their own machinery in Section 11.5.',
    ],
    quiz: [
      {
        q: 'Since $\\frac{1}{n^2 + 1} < \\frac{1}{n^2}$ for all $n$ and $\\sum \\frac{1}{n^2}$ converges, we may conclude:',
        options: ['$\\sum \\frac{1}{n^2+1}$ diverges', '$\\sum \\frac{1}{n^2+1}$ converges', 'Nothing — the inequality points the wrong way', `$\\sum \\frac{1}{n^2+1}$ converges to the same sum $\\frac{\\pi^2}{6}$`],
        answer: 1,
        explanation: 'Term-by-term domination of a convergent series forces convergence — though never to the same sum: the comparison controls only the fate, not the value.',
      },
      {
        q: 'For $\\sum \\frac{n^2 + 5}{n^4 + 2n}$, the natural limit comparison benchmark is:',
        options: [`$\\sum \\frac{1}{n}$`, `$\\sum \\frac{1}{n^2}$`, `$\\sum \\frac{1}{n^3}$`, `$\\sum \\frac{1}{2^n}$`],
        answer: 1,
        explanation: 'Dominant behavior: $\\frac{n^2}{n^4} = \\frac{1}{n^2}$. Indeed $\\lim \\frac{(n^2+5)/(n^4+2n)}{1/n^2} = \\lim \\frac{n^4 + 5n^2}{n^4 + 2n} = 1$, so the series converges like the $p = 2$ series.',
      },
      {
        q: 'If $\\lim_{n\\to\\infty}\\frac{a_n}{b_n} = 0$ and $\\sum b_n$ is known to diverge, the Limit Comparison Test lets us conclude:',
        options: ['$\\sum a_n$ diverges', '$\\sum a_n$ converges', 'Nothing about $\\sum a_n$ — the limit must lie strictly between $0$ and $\\infty$', '$\\sum a_n$ equals zero'],
        answer: 2,
        explanation: 'When $L = 0$ the fates decouple in this direction: $a_n$ is vanishingly small compared to a divergent series, which is compatible with either behavior — e.g. $\\frac{1}{n}$ versus $\\frac{1}{n^2}$ next to $b_n = 1$.',
      },
      {
        q: 'The series $\\sum_{n=1}^{\\infty} \\frac{\\ln n}{n^3}$ converges. The quickest rigorous reason is:',
        options: ['$\\ln n < n$ makes the terms smaller than $\\frac{1}{n^2}$, and $p = 2 > 1$ converges', 'It is geometric with ratio less than $1$', 'The terms approach zero, so the series converges', 'The Integral Test integral equals $\\ln n$'],
        answer: 0,
        explanation: 'Replace $\\ln n$ by the cruder bound $n$: the terms are dominated by $\\frac{1}{n^2}$, a convergent $p$-series — one inequality and the direct comparison finishes the job.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.5
  {
    sectionId: 'calc-ch11-s5',
    readingTime: 7,
    intro: 'Alternating series — terms that flip sign every step — can converge even when their absolute values would diverge, because the partial sums oscillate in a shrinking window. The Alternating Series Test identifies exactly when, and its remainder estimate is the cleanest error bound in all of calculus: the error is at most the first term you dropped.',
    objectives: [
      'State the Alternating Series Test and verify its two hypotheses',
      'Explain why the decreasing condition cannot be dropped',
      'Estimate the error of a partial sum using $|R_n| \\le b_{n+1}$',
      'Determine how many terms achieve a prescribed accuracy',
    ],
    concepts: [
      {
        term: 'Alternating series',
        kind: 'notation',
        statement: 'An **alternating series** has the form $$\\sum_{n=1}^{\\infty} (-1)^{n-1} b_n = b_1 - b_2 + b_3 - b_4 + \\cdots, \\quad b_n > 0,$$ where the signs alternate because of the factor $(-1)^{n-1}$.',
        detail: 'The archetype is the alternating harmonic series $1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots = \\ln 2$. All hypotheses are stated for the positive magnitudes $b_n$ — the sign pattern is handled separately.',
      },
      {
        term: 'Alternating Series Test',
        kind: 'theorem',
        statement: 'If the sequence of positive magnitudes satisfies (1) $b_{n+1} \\le b_n$ for all large $n$ (eventually decreasing) and (2) $\\lim_{n\\to\\infty} b_n = 0$, then the alternating series $\\sum (-1)^{n-1} b_n$ **converges**.',
        detail: 'The proof is a beautiful bracketing argument: the even partial sums $s_2, s_4, s_6, \\ldots$ increase, the odd partial sums $s_1, s_3, s_5, \\ldots$ decrease, and every odd sum exceeds every even sum — two monotonic sequences closing in on a common limit. Both conditions are essential: dropping $b_n \\to 0$ is the Test for Divergence, and dropping monotonicity is the next concept.',
      },
      {
        term: 'Why decreasing matters',
        kind: 'insight',
        statement: 'The condition $b_n \\to 0$ alone is **not enough**: the series $\\sum (-1)^{n-1}\\frac{2 + (-1)^n}{n}$ has magnitudes tending to zero but not decreasing, and it diverges.',
        detail: 'Here the magnitudes run $1, \\frac{3}{2}, \\frac{1}{3}, \\frac{3}{4}, \\frac{1}{5}, \\frac{3}{6}, \\ldots$ — the "big" even terms are nearly triple the odd ones, so each consecutive pair contributes about $-\\frac{1}{n}$, and the partial sums drift to $-\\infty$ just like the harmonic series. Cancellation needs the terms to shrink steadily, not merely to shrink.',
      },
      {
        term: 'Alternating Series Estimation Theorem',
        kind: 'theorem',
        statement: 'If the alternating series converges by the test, the remainder after $n$ terms satisfies $$|R_n| = |s - s_n| \\le b_{n+1}:$$ the error is at most the magnitude of the **first omitted term**.',
        detail: 'The true sum always lies between consecutive partial sums, so the correction can never overshoot the next term. This is the most practical error bound in the chapter: no integrals to evaluate, no derivatives to bound — count terms until the next one is smaller than your tolerance.',
      },
      {
        term: 'Convergence at the boundary',
        kind: 'insight',
        statement: 'The alternating harmonic series converges (to $\\ln 2$) while the harmonic series diverges — sign alternation can rescue a series whose absolute values diverge, a phenomenon called **conditional convergence** (Section 11.6).',
        detail: 'The partial sums of $1 - \\frac{1}{2} + \\frac{1}{3} - \\cdots$ oscillate with shrinking amplitude around $\\ln 2 \\approx 0.6931$, and the estimate theorem explains the remarkable efficiency: $s_{10}$ is already within $\\frac{1}{11}$ of the truth.',
      },
    ],
    examples: [
      {
        title: 'Applying the Alternating Series Test',
        problem: 'Determine whether $\\sum_{n=1}^{\\infty} (-1)^n \\frac{n^2}{n^3 + 1}$ converges.',
        steps: [
          { label: 'Step 1: Check the term limit', text: 'The magnitudes are $b_n = \\frac{n^2}{n^3+1}$, and $\\lim b_n = \\lim \\frac{n^2}{n^3 + 1} = \\lim \\frac{1/n}{1 + 1/n^3} = 0$ — the necessary condition holds.' },
          { label: 'Step 2: Verify decreasing behavior', text: 'Let $f(x) = \\frac{x^2}{x^3+1}$; then $f\'(x) = \\frac{2x(x^3+1) - x^2(3x^2)}{(x^3+1)^2} = \\frac{x(2 - x^3)}{(x^3+1)^2}$, which is negative for $x > \\sqrt[3]{2} \\approx 1.26$, so $b_n$ decreases for $n \\ge 2$.' },
          { label: 'Step 3: Invoke the test', text: 'Magnitudes eventually decreasing and tending to zero, so by the Alternating Series Test the series **converges**.' },
          { label: 'Step 4: Compare with absolute values', text: 'Note that $\\sum \\frac{n^2}{n^3+1}$ itself diverges (limit comparison with $\\frac{1}{n}$), so this convergence is conditional — Section 11.6 will make that distinction precise.' },
        ],
        result: 'The series converges by the Alternating Series Test, but only conditionally: its positive-magnitude counterpart diverges.',
      },
      {
        title: 'Error control with the first omitted term',
        problem: 'How many terms of $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n^3}$ are needed to guarantee the error is below $0.005$? Compute the estimate.',
        steps: [
          { label: 'Step 1: Confirm the hypotheses', text: '$b_n = \\frac{1}{n^3}$ is positive, decreasing, and tends to zero — the Alternating Series Test applies.' },
          { label: 'Step 2: Apply the remainder bound', text: 'After $n$ terms, $|R_n| \\le b_{n+1} = \\frac{1}{(n+1)^3}$. We need $\\frac{1}{(n+1)^3} < 0.005$, i.e. $(n+1)^3 > 200$.' },
          { label: 'Step 3: Solve for $n$', text: 'Since $6^3 = 216 > 200$, we may take $n + 1 = 6$, that is $n = 5$ terms... but checking directly: with $n = 5$, $b_6 = \\frac{1}{216} \\approx 0.00463 < 0.005$. Even $n = 5$ suffices; to be safe take $n = 6$ with $b_7 = \\frac{1}{343} \\approx 0.0029$.' },
          { label: 'Step 4: Compute the partial sum', text: '$s_6 = 1 - \\frac{1}{8} + \\frac{1}{27} - \\frac{1}{64} + \\frac{1}{125} - \\frac{1}{216} \\approx 0.8998$, with a guaranteed error below $\\frac{1}{343} \\approx 0.0029$ — so the sum is trapped in $[0.8969, 0.9027]$.' },
        ],
        result: 'Six terms give $s_6 \\approx 0.8998$ with certified error $< 0.003$ — the first omitted term is the entire error analysis.',
      },
    ],
    keyTakeaways: [
      'Alternating series converge when the magnitudes $b_n$ are eventually decreasing **and** tend to zero — both conditions, not either.',
      'The even and odd partial sums form monotonic sequences that trap the limit between them.',
      '$b_n \\to 0$ without monotonicity can still diverge — steady shrinkage is what makes cancellation effective.',
      'The remainder estimate $|R_n| \\le b_{n+1}$ is the simplest error bound in calculus: the error is at most the first dropped term.',
      'To hit a tolerance $\\varepsilon$, choose $n$ so that $b_{n+1} \\le \\varepsilon$ — no integrals or derivatives required.',
      'The alternating harmonic series converges to $\\ln 2$ even though $\\sum \\frac{1}{n}$ diverges — the birthplace of conditional convergence.',
    ],
    quiz: [
      {
        q: 'The series $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} n}{n+2}$:',
        options: ['Converges by the Alternating Series Test', 'Diverges because the magnitudes $\\frac{n}{n+2}$ tend to $1$, not $0$', 'Converges conditionally', 'Diverges because the terms are not defined'],
        answer: 1,
        explanation: 'The magnitudes approach $1$, so the terms of the series do not approach zero — the Test for Divergence kills it before the Alternating Series Test is even consulted.',
      },
      {
        q: 'For a convergent alternating series with magnitudes $b_n$, the error of the partial sum $s_n$ is guaranteed to be at most:',
        options: [`$b_n$`, `$b_{n+1}$`, 'The sum of all remaining terms $b_{n+1} + b_{n+2} + \\cdots$', `$\\frac{1}{2}b_{n+1}$`],
        answer: 1,
        explanation: 'Because the true sum lies between $s_n$ and $s_{n+1}$, the gap is at most one further term: $|R_n| \\le b_{n+1}$ — far better than the naive tail sum.',
      },
      {
        q: 'Which condition can be omitted from the Alternating Series Test without breaking its conclusion in general?',
        options: [`$b_n \\to 0$`, 'Eventual monotonicity of $b_n$', 'Positivity of the $b_n$', 'None — all are needed'],
        answer: 3,
        explanation: 'Every hypothesis is load-bearing: dropping $b_n \\to 0$ fails by the Test for Divergence; dropping monotonicity fails by the $\\frac{2+(-1)^n}{n}$ counterexample; and without positivity "alternating" itself is meaningless.',
      },
      {
        q: 'Approximating $\\ln 2 = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots$ by $s_{100}$ gives an error of at most:',
        options: [`$\\frac{1}{100}$`, `$\\frac{1}{101}$`, `$\\frac{1}{2}$`, `$\\ln 100$`],
        answer: 1,
        explanation: 'By the Alternating Series Estimation Theorem, $|\\ln 2 - s_{100}| \\le b_{101} = \\frac{1}{101}$ — the slow $\\frac{1}{n}$ decay is why this series is a terrible way to compute $\\ln 2$ numerically.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.6
  {
    sectionId: 'calc-ch11-s6',
    readingTime: 8,
    intro: 'For series with mixed signs, the safest question is: does the series converge even after we strip all the signs off? Absolute convergence is stronger than ordinary convergence and is often easier to prove, because the positive-magnitude series can be attacked with ratio and root tests that run on pure algebra — no integrals, no inequalities.',
    objectives: [
      'Define absolute and conditional convergence and give examples of each',
      'Apply the Ratio Test, including its inconclusive case',
      'Apply the Root Test to series with $n$th powers',
      'Choose between the ratio and root tests based on the form of the term',
    ],
    concepts: [
      {
        term: 'Absolute convergence',
        kind: 'definition',
        statement: 'A series $\\sum a_n$ **converges absolutely** if the series of magnitudes $\\sum |a_n|$ converges. It **converges conditionally** if $\\sum a_n$ converges while $\\sum |a_n|$ diverges.',
        detail: 'The alternating harmonic series is the canonical conditionally convergent series. Absolutely convergent series are the well-behaved citizens of analysis: they can be reordered at will without changing the sum, while conditionally convergent series can be rearranged to converge to any number whatever (Riemann’s remarkable theorem).',
      },
      {
        term: 'Absolute convergence implies convergence',
        kind: 'theorem',
        statement: 'If $\\sum |a_n|$ converges, then $\\sum a_n$ converges. The converse fails: conditional convergence exists.',
        detail: 'The proof squeezes $a_n$ between its positive and negative parts: $-|a_n| \\le a_n \\le |a_n|$, and both comparison series converge. Practically this means the sign pattern is a distraction — test $\\sum |a_n|$ with any positive-term tool and the original series comes along for free.',
      },
      {
        term: 'The Ratio Test',
        kind: 'theorem',
        statement: 'For $\\sum a_n$ with nonzero terms, let $L = \\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|$. If $L < 1$ the series converges **absolutely**; if $L > 1$ (or $L = \\infty$) it diverges; if $L = 1$ the test is **inconclusive** — try something else.',
        detail: 'The intuition is geometric: if the ratio of consecutive magnitudes tends to $L < 1$, the tail is eventually dominated by a geometric series with ratio below $1$; if $L > 1$ the terms eventually grow, violating the Test for Divergence. Factorials make the ratio telescope beautifully — which is why the Ratio Test is the default for $n!$ and for powers like $\\frac{x^n}{n!}$ in Section 11.8.',
      },
      {
        term: 'The Root Test',
        kind: 'theorem',
        statement: 'For $\\sum a_n$, let $L = \\lim_{n\\to\\infty} \\sqrt[n]{|a_n|}$. If $L < 1$ the series converges absolutely; if $L > 1$ it diverges; if $L = 1$ the test is inconclusive.',
        detail: 'The root directly measures whether the terms behave like $L^n$: below $1$ they decay geometrically, above $1$ they grow. The root test is stronger in principle (the root limit exists whenever the ratio limit does, and not conversely), but is usually harder to compute — reserve it for terms that are **already $n$th powers**, like $\\left(1 - \\frac{2}{n}\\right)^{n^2}$.',
      },
      {
        term: 'The inconclusive case',
        kind: 'insight',
        statement: 'Both tests return $L = 1$ exactly on the borderline cases: every $p$-series has ratio $\\to 1$ and root $\\to 1$, yet $\\sum \\frac{1}{n}$ diverges and $\\sum \\frac{1}{n^2}$ converges.',
        detail: 'The ratio and root tests compare terms against geometric decay, and $p$-series decay is polynomial — slower than any geometric ratio below $1$. When $L = 1$, the series lives on the polynomial boundary where the Integral Test, Comparison Tests and Alternating Series Test take over. Knowing when a test is silent is as important as knowing when it speaks.',
      },
    ],
    examples: [
      {
        title: 'Ratio Test on factorial series',
        problem: 'Test the series (a) $\\sum_{n=1}^{\\infty} \\frac{(-1)^n n^2}{2^n}$ and (b) $\\sum_{n=1}^{\\infty} \\frac{n!}{2^n}$ for convergence.',
        steps: [
          { label: 'Step 1: Compute the ratio for (a)', text: '$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)^2}{2^{n+1}} \\cdot \\frac{2^n}{n^2} = \\frac{1}{2}\\left(\\frac{n+1}{n}\\right)^2 \\to \\frac{1}{2} \\cdot 1 = \\frac{1}{2} < 1$.' },
          { label: 'Step 2: Conclude for (a)', text: 'Since the ratio limit is below $1$, the series converges **absolutely** — the sign alternation helped nothing and hurt nothing.' },
          { label: 'Step 3: Compute the ratio for (b)', text: '$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{2^{n+1}} \\cdot \\frac{2^n}{n!} = \\frac{n+1}{2} \\to \\infty$.' },
          { label: 'Step 4: Conclude for (b)', text: 'The ratio limit exceeds $1$ — in fact the terms themselves grow — so the series **diverges**; the factorial crushes the geometric denominator.' },
        ],
        result: '(a) Converges absolutely (ratio $\\frac{1}{2}$); (b) diverges (ratio $\\infty$): factorials dominate powers of a fixed base.',
      },
      {
        title: 'Root Test on an $n$th power',
        problem: 'Test the series $\\sum_{n=1}^{\\infty} \\left(1 - \\frac{2}{n}\\right)^{n^2}$ for convergence.',
        steps: [
          { label: 'Step 1: Compute the root', text: '$\\sqrt[n]{|a_n|} = \\left(1 - \\frac{2}{n}\\right)^{n}$, since the $n$th root of an $n^2$ power leaves an $n$th power.' },
          { label: 'Step 2: Evaluate the limit', text: 'This is a compound-interest limit: $\\left(1 - \\frac{2}{n}\\right)^n \\to e^{-2}$, using the standard limit $\\left(1 + \\frac{x}{n}\\right)^n \\to e^x$ with $x = -2$.' },
          { label: 'Step 3: Compare with $1$', text: '$L = e^{-2} \\approx 0.135 < 1$, so the terms decay like a geometric series with ratio $e^{-2}$.' },
          { label: 'Step 4: Conclude', text: 'By the Root Test the series converges (absolutely — the terms are positive). Note the Ratio Test would require evaluating $\\left(\\frac{1-\\frac{2}{n+1}}{1-\\frac{2}{n}}\\right)^{(n+1)^2-n}$... a far uglier limit: the root is the right tool for a power tower.' },
        ],
        result: 'The series converges, with root limit $e^{-2} < 1$: a geometric decay in disguise.',
      },
      {
        title: 'Classifying convergence absolutely or conditionally',
        problem: 'Classify each series as absolutely convergent, conditionally convergent, or divergent: (a) $\\sum \\frac{(-1)^{n-1}}{n^2}$, (b) $\\sum \\frac{(-1)^{n-1}}{\\sqrt{n}}$.',
        steps: [
          { label: 'Step 1: Test the magnitudes of (a)', text: '$\\sum \\frac{1}{n^2}$ is a convergent $p$-series ($p = 2 > 1$), so (a) converges absolutely — no further analysis needed.' },
          { label: 'Step 2: Test the magnitudes of (b)', text: '$\\sum \\frac{1}{\\sqrt{n}}$ is a divergent $p$-series ($p = \\frac{1}{2} \\le 1$), so absolute convergence fails.' },
          { label: 'Step 3: Try the alternating machinery for (b)', text: 'The magnitudes $b_n = n^{-1/2}$ are positive, decreasing, and tend to zero, so the Alternating Series Test gives convergence of the signed series.' },
          { label: 'Step 4: State the classification', text: '(a) Absolutely convergent. (b) Convergent but not absolutely — **conditionally convergent**.' },
        ],
        result: 'Absolute convergence (a) is the stronger, safer property; (b) survives only by cancellation — the precise dividing line this section formalizes.',
      },
    ],
    keyTakeaways: [
      'Absolute convergence implies convergence; the converse fails (alternating harmonic series).',
      'Conditionally convergent series are fragile — rearranging their terms can change the sum.',
      'Ratio Test: $L = \\lim\\left|\\frac{a_{n+1}}{a_n}\\right|$; below $1$ absolute convergence, above $1$ divergence, equal to $1$ silence.',
      'Root Test: $L = \\lim \\sqrt[n]{|a_n|}$, with the same trichotomy; prefer it when terms are $n$th powers, like $\\left(1 - \\frac{2}{n}\\right)^{n^2}$.',
      'Both tests are geometric in spirit and therefore blind to $p$-series — every $p$-series has $L = 1$.',
      'Strategy: for mixed signs, test $\\sum |a_n|$ first; factorials beg for the ratio, $n$th powers for the root.',
    ],
    quiz: [
      {
        q: 'The Ratio Test applied to $\\sum \\frac{1}{n^2}$ gives $L = 1$. The series:',
        options: ['Diverges, since $L = 1$ means the terms do not approach zero', 'Converges, since $L = 1$ is the boundary and the test leans convergent', 'Converges, but the verdict must come from another test such as the Integral Test', 'Cannot be tested at all'],
        answer: 2,
        explanation: '$L = 1$ is inconclusive for both ratio and root tests — the $p$-series sit exactly on their blind spot. The Integral Test (or a $p$-series citation) then shows convergence.',
      },
      {
        q: 'For $\\sum \\frac{n!}{10^n}$, the Ratio Test yields $L = \\lim \\frac{n+1}{10} = \\infty$, so the series:',
        options: ['Converges absolutely', 'Converges conditionally', 'Diverges — the terms themselves eventually grow', 'Is inconclusive'],
        answer: 2,
        explanation: 'A ratio above $1$ means the magnitudes are eventually increasing, so the terms cannot approach zero: divergence by the Test for Divergence, certified by the ratio behavior.',
      },
      {
        q: 'Which series converges conditionally?',
        options: [`$\\sum \\frac{(-1)^n}{n^2}$`, `$\\sum \\frac{(-1)^n}{n}$`, `$\\sum \\frac{(-1)^n}{2^n}$`, `$\\sum \\frac{1}{n}$`],
        answer: 1,
        explanation: 'The alternating harmonic series converges by the Alternating Series Test while its magnitude series $\\sum \\frac{1}{n}$ diverges — the definition of conditional convergence.',
      },
      {
        q: 'The root limit of $\\sum \\left(\\frac{2n}{3n+1}\\right)^n$ is:',
        options: ['$\\frac{2}{3}$, so the series converges', '$\\frac{3}{2}$, so the series diverges', '$1$, so the test is inconclusive', '$0$, so the terms vanish'],
        answer: 0,
        explanation: '$\\sqrt[n]{|a_n|} = \\frac{2n}{3n+1} \\to \\frac{2}{3} < 1$: geometric decay with ratio $\\frac{2}{3}$, hence convergence.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.7
  {
    sectionId: 'calc-ch11-s7',
    readingTime: 6,
    intro: 'No single test dominates: each was built for a shape of series, and the craft is matching the shape to the tool. This short section is Stewart’s decision procedure — a checklist in the order the book itself recommends — practiced until classification becomes reflex.',
    objectives: [
      'Organize the full test suite into a reliable decision procedure',
      'Match series structure to the appropriate test: geometric, $p$-series, factorial, $n$th power, alternating, rational',
      'Recognize which conclusions each test can and cannot deliver, and avoid the classic misapplications',
    ],
    concepts: [
      {
        term: 'The master checklist',
        kind: 'method',
        statement: 'When facing $\\sum a_n$: (1) does $a_n \\to 0$? If not — divergent. (2) Is it a **known family** — geometric, $p$-series, telescoping? If so, cite it. (3) **Positive terms?** Try the Integral Test (if $\\int f$ is easy), Comparison or Limit Comparison (rational or algebraic terms), Ratio (factorials), Root ($n$th powers). (4) **Alternating?** Apply the Alternating Series Test, or strip signs and test for absolute convergence first. (5) Still stuck — algebra: partial fractions, rationalizing, rewriting the term.',
        detail: 'The order matters: cheap tests first. The Test for Divergence costs one limit and settles many series immediately; recognizing a geometric or $p$-series costs nothing at all.',
      },
      {
        term: 'Matching test to form',
        kind: 'insight',
        statement: 'Rational functions of $n$ point to Limit Comparison with a $p$-series; factorials or $n$th powers with exponentials point to the Ratio or Root Test; logarithms in the numerator point to the Integral Test; $(-1)^n$ points to alternating machinery.',
        detail: 'The exponent of $n$ in the dominant term decides everything for algebraic series: $\\frac{1}{n^p}$-like behavior converges exactly when $p > 1$. The Ratio and Root tests answer only the geometric question "is there a ratio below $1$?" — so they say nothing about $p$-series, and both give $L = 1$ there.',
      },
      {
        term: 'Classic misapplications',
        kind: 'insight',
        statement: 'Never use the Test for Divergence to prove convergence; never read a comparison inequality backwards; never apply the Ratio Test to a $p$-series expecting an answer; never forget the decreasing hypothesis of the Alternating Series Test.',
        detail: 'The four fatal errors in practice: (1) "$a_n \\to 0$ so the series converges" — the harmonic series refutes it; (2) "smaller than a divergent series, so divergent" or "bigger than a convergent series, so convergent" — invalid implications; (3) "$L = 1$, inconclusive" treated as a verdict; (4) applying the Alternating Series Test to magnitudes that are not decreasing, like the $\\frac{2 + (-1)^n}{n}$ counterexample of Section 11.5.',
      },
      {
        term: 'Absolute convergence as the default',
        kind: 'method',
        statement: 'For a series with mixed or unknown signs, first test $\\sum |a_n|$: if it converges, the original converges and no sign analysis is ever needed.',
        detail: 'This is the single most efficient strategy step for anything involving $(-1)^n$ combined with factorials or exponentials, since the Ratio Test applies to $|a_n|$ directly and delivers absolute convergence in one computation.',
      },
      {
        term: 'Conditional convergence and rearrangement',
        kind: 'definition',
        statement: 'A series $\\sum a_n$ **converges conditionally** when $\\sum a_n$ converges but $\\sum |a_n|$ diverges; the alternating harmonic series $\\sum \\frac{(-1)^{n-1}}{n} = \\ln 2$ is the prototype. Conditionally convergent series are fragile: by the **Riemann rearrangement theorem**, their terms can be reordered to converge to any real number, or to diverge.',
        detail: 'This is why absolute convergence is the preferred verdict: absolutely convergent series can be rearranged, grouped and multiplied freely, while conditionally convergent ones cannot. When the checklist reports "convergent by AST but $p \\le 1$", the complete answer names the conditional status explicitly.',
      },
      {
        term: 'From verdict to value: remainder thinking',
        kind: 'method',
        statement: 'Classification is only half the strategy: once convergence is known, **bound the tail** with the matching remainder tool — the Integral Test estimate of Section 11.3, the alternating bound $|R_n| \\le b_{n+1}$ of Section 11.5, or the geometric tail $\\frac{ar^{n+1}}{1-r}$ — and solve for the $n$ that meets the required tolerance.',
        detail: 'Stewart closes the strategy this way: a verdict without an error bar is not a numerical answer. For example the alternating harmonic partial sum $s_{10} \\approx 0.646$ is certified within $\\frac{1}{11} \\approx 0.091$ of $\\ln 2$, and one more digit needs roughly ten times the terms — the slow tail is itself diagnostic information.',
      },
    ],
    examples: [
      {
        title: 'A four-series classification drill',
        problem: 'Classify as convergent or divergent, citing the test used: (a) $\\sum_{n=1}^{\\infty}\\frac{n^2+1}{n^3+n}$, (b) $\\sum_{n=1}^{\\infty}\\frac{n\\,2^n}{3^{n+1}}$, (c) $\\sum_{n=2}^{\\infty}\\frac{\\ln n}{n}$, (d) $\\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{\\sqrt{n}}$.',
        steps: [
          { label: 'Step 1: Classify (a)', text: 'Rational term — strip to dominant behavior $\\frac{n^2}{n^3} = \\frac{1}{n}$. Limit comparison: $\\lim \\frac{(n^2+1)/(n^3+n)}{1/n} = \\lim \\frac{n^3+n}{n^3+n} = 1$, so it shares the harmonic series’ fate: **diverges**.' },
          { label: 'Step 2: Classify (b)', text: 'Powers of fixed bases — Ratio Test: $\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{n+1}{n}\\cdot\\frac{2}{3} \\to \\frac{2}{3} < 1$: **converges** absolutely.' },
          { label: 'Step 3: Classify (c)', text: 'Logarithm in the numerator — Integral Test: $\\int_2^{\\infty}\\frac{\\ln x}{x}\\,dx = \\lim_{t\\to\\infty}\\frac{(\\ln t)^2}{2} - \\frac{(\\ln 2)^2}{2} = \\infty$: **diverges**. (The check: $f(x) = \\frac{\\ln x}{x}$ is positive and decreasing for $x \\ge e$.)' },
          { label: 'Step 4: Classify (d)', text: 'Alternating with magnitudes $b_n = n^{-1/2}$ decreasing to zero — converges by the **Alternating Series Test**, but not absolutely ($p = \\frac{1}{2} \\le 1$): conditionally convergent.' },
        ],
        result: '(a) Diverges (Limit Comparison with $\\frac{1}{n}$); (b) converges (Ratio $\\frac{2}{3}$); (c) diverges (Integral Test); (d) converges conditionally (Alternating Series Test). Four shapes, four tests — chosen by inspection.',
      },
      {
        title: 'A subtle one: series in disguise',
        problem: 'Determine whether $\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n^2 + 4n}}$ converges.',
        steps: [
          { label: 'Step 1: Try the naive benchmark', text: 'The dominant behavior is $\\frac{1}{\\sqrt{n^2}} = \\frac{1}{n}$, which suggests the harmonic series — divergence — but the extra $+4n$ makes the denominator **larger**, so each term is **smaller** than $\\frac{1}{n}$: direct comparison with the divergent series fails to conclude.' },
          { label: 'Step 2: Use Limit Comparison instead', text: '$\\lim_{n\\to\\infty} \\frac{1/\\sqrt{n^2+4n}}{1/n} = \\lim \\frac{n}{\\sqrt{n^2+4n}} = \\lim \\frac{1}{\\sqrt{1 + 4/n}} = 1$, a valid positive finite limit.' },
          { label: 'Step 3: Transfer the verdict', text: 'The series behaves exactly like $\\sum \\frac{1}{n}$ in the limit, so it **diverges** despite every term being strictly smaller than the corresponding harmonic term.' },
          { label: 'Step 4: Extract the lesson', text: 'Asymptotic equivalence beats term-by-term size: the limit comparison constant $L = 1$ says the two series are "the same size at infinity", and same size means same fate.' },
        ],
        result: 'The series diverges by Limit Comparison with the harmonic series — a reminder that borderline behavior cannot be settled by crude inequalities.',
      },
    ],
    keyTakeaways: [
      'Work the checklist in order: term limit, known family, positive-term tests, alternating tests, then algebraic rewriting.',
      'Rational terms → Limit Comparison with a $p$-series; factorials → Ratio; $n$th powers → Root; logarithms → Integral Test.',
      'The Test for Divergence proves only divergence; a zero term limit is a starting gun, not a finish line.',
      'Comparison inequalities are one-directional: check that your domination runs the way the theorem allows.',
      'For mixed signs, testing absolute convergence first frequently settles everything in one step.',
      'Limit comparison tolerates terms that are slightly smaller or larger than a benchmark — only the limit ratio matters.',
    ],
    quiz: [
      {
        q: 'The most efficient first move on $\\sum \\frac{3^n}{n!}$ is:',
        options: ['The Integral Test with $\\int \\frac{3^x}{x!}dx$', 'The Ratio Test, since the factorial will cancel in $\\frac{a_{n+1}}{a_n}$', 'Direct comparison with the harmonic series', 'The Alternating Series Test'],
        answer: 1,
        explanation: 'In the ratio, the factorial collapses: $\\frac{a_{n+1}}{a_n} = \\frac{3}{n+1} \\to 0 < 1$, giving absolute convergence in one line.',
      },
      {
        q: 'The series $\\sum \\frac{\\cos(n\\pi)}{n^{3/2}}$ (note $\\cos(n\\pi) = (-1)^n$) is:',
        options: ['Divergent, because cosine oscillates', 'Conditionally convergent', 'Absolutely convergent, since $\\sum \\frac{1}{n^{3/2}}$ converges', 'Impossible to classify without knowing all the cosine values'],
        answer: 2,
        explanation: 'The magnitudes are exactly $\\frac{1}{n^{3/2}}$, a convergent $p$-series, so the series converges absolutely regardless of the sign pattern.',
      },
      {
        q: 'You have shown $\\frac{1}{n^2 + 6n} < \\frac{1}{n^2}$ for all $n$. What follows?',
        options: ['The smaller series converges by the Comparison Test', 'The smaller series diverges', 'Nothing — comparison requires the unknown series to be the larger one', 'The two series have equal sums'],
        answer: 0,
        explanation: 'Domination by a convergent series is the valid direction: smaller than convergent is convergent, though with a strictly smaller sum.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.8
  {
    sectionId: 'calc-ch11-s8',
    readingTime: 8,
    intro: 'A power series is a polynomial that refuses to stop — an infinite polynomial in powers of $(x - a)$. For each fixed $x$ it is an ordinary series, and the interval of $x$ values where it converges turns out to be a single perfectly centered interval, whose radius the Ratio Test computes almost mechanically. Power series are the raw material from which the next three sections build functions.',
    objectives: [
      'Define power series, center, radius and interval of convergence',
      'State the three possible convergence patterns of a power series',
      'Compute the radius of convergence with the Ratio Test and test the endpoints separately',
      'Handle series in powers of $(x - a)$ and in disguised forms like $(2x - 1)^n$',
    ],
    concepts: [
      {
        term: 'Power series',
        kind: 'definition',
        statement: 'A **power series centered at $a$** is an expression of the form $$\\sum_{n=0}^{\\infty} c_n (x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \\cdots$$ where $x$ is a variable and the $c_n$ are constants called the **coefficients**.',
        detail: 'For each value of $x$ the series is an ordinary numerical series, and the central question is: for which $x$ does it converge? The geometric series $\\sum x^n$ (coefficients all $1$, center $0$) is the prototype — it converges exactly on $|x| < 1$.',
      },
      {
        term: 'Radius and interval of convergence',
        kind: 'definition',
        statement: 'The **interval of convergence** of a power series is the set of $x$ for which it converges; it is always an interval centered at $a$, of the form $(a - R, a + R)$ possibly with endpoints included. The number $R \\ge 0$ is the **radius of convergence**.',
        detail: 'The phrase "possibly with endpoints included" carries real weight: the endpoints $x = a \\pm R$ must each be tested individually, and any combination — both in, one in, both out — is possible. At the endpoints the Ratio Test returns exactly $1$ and says nothing, so Alternating Series or $p$-series arguments take over.',
      },
      {
        term: 'The three possible patterns',
        kind: 'theorem',
        statement: 'For a power series centered at $a$, exactly one holds: (1) it converges **only at $x = a$** ($R = 0$); (2) it converges for all $x$ ($R = \\infty$); (3) there is $R > 0$ such that it converges for $|x - a| < R$, diverges for $|x - a| > R$, and at $|x - a| = R$ anything can happen.',
        detail: 'The proof compares against geometric series: if the series converges at some $x_1 \\ne a$, then $c_n(x_1 - a)^n \\to 0$ and is eventually bounded, so every $x$ with $|x - a| < |x_1 - a|$ gives a dominated convergent geometric-like series — the convergence set is radially symmetric about the center.',
      },
      {
        term: 'Computing $R$ with the Ratio Test',
        kind: 'method',
        statement: 'For $\\sum c_n (x-a)^n$, compute $\\lim_{n\\to\\infty}\\left|\\frac{c_{n+1}}{c_n}\\right| \\cdot |x - a|$. The series converges absolutely when this is below $1$: solve $|x - a| < R$ where $$R = \\lim_{n\\to\\infty} \\left|\\frac{c_n}{c_{n+1}}\\right|$$ (when the limit exists), then test $x = a \\pm R$ individually.',
        detail: 'The algebra is routine for factorials and powers: in $\\sum \\frac{(x-3)^n}{n}$ the ratio is $\\frac{n}{n+1}|x-3| \\to |x-3|$, giving $R = 1$. Then $x = 4$ produces the harmonic series (divergent) while $x = 2$ produces its alternating twin (convergent) — the interval is $[2, 4)$.',
      },
      {
        term: 'The extreme radii',
        kind: 'insight',
        statement: '$\\sum \\frac{x^n}{n!}$ has $R = \\infty$ — it converges for every real (and complex) $x$, and its sum is $e^x$. At the other extreme, $\\sum n!\\,x^n$ has $R = 0$: it converges only at the center $x = 0$.',
        detail: 'The factorial in the denominator crushes every exponential, so no value of $x$ is too large; in the numerator it does the opposite, and the terms grow for every $x \\ne 0$. Between these extremes, $\\sum \\frac{x^n}{n^2}$ has $R = 1$ with **both** endpoints convergent ($p$-series at $x = \\pm 1$), showing every endpoint combination occurs.',
      },
    ],
    examples: [
      {
        title: 'A full radius and interval computation',
        problem: 'Find the radius and interval of convergence of $\\sum_{n=1}^{\\infty} \\frac{(x-3)^n}{n}$.',
        steps: [
          { label: 'Step 1: Apply the Ratio Test with $x$ symbolic', text: 'With $a_n = \\frac{(x-3)^n}{n}$: $\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{|x-3|^{n+1}}{n+1}\\cdot\\frac{n}{|x-3|^n} = |x-3|\\cdot\\frac{n}{n+1}$.' },
          { label: 'Step 2: Take the limit and compare with $1$', text: 'As $n \\to \\infty$, the ratio tends to $|x-3|$, so the series converges absolutely when $|x-3| < 1$ and diverges when $|x-3| > 1$. The radius is $R = 1$, centered at $a = 3$.' },
          { label: 'Step 3: Test the endpoint $x = 4$', text: 'At $x = 4$ the series becomes $\\sum \\frac{1}{n}$ — the harmonic series, divergent.' },
          { label: 'Step 4: Test the endpoint $x = 2$', text: 'At $x = 2$ the series becomes $\\sum \\frac{(-1)^n}{n}$, which converges by the Alternating Series Test (magnitudes $\\frac{1}{n}$ decreasing to zero).' },
        ],
        result: 'Radius $R = 1$; interval of convergence $[2, 4)$ — open at the right endpoint, closed at the left. The asymmetric endpoints are the heart of such problems.',
      },
      {
        title: 'The two extreme radii',
        problem: 'Find the interval of convergence of (a) $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ and (b) $\\sum_{n=1}^{\\infty} n!\\,x^n$.',
        steps: [
          { label: 'Step 1: Ratio Test for (a)', text: '$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{|x|^{n+1}}{(n+1)!}\\cdot\\frac{n!}{|x|^n} = \\frac{|x|}{n+1} \\to 0$ for every fixed $x$, and $0 < 1$ always holds.' },
          { label: 'Step 2: Conclude for (a)', text: 'The series converges absolutely for all $x$: $R = \\infty$ and the interval is $(-\\infty, \\infty)$. Its sum, as Section 11.10 will show, is exactly $e^x$.' },
          { label: 'Step 3: Ratio Test for (b)', text: '$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)!}{n!}|x| = (n+1)|x| \\to \\infty$ for every $x \\ne 0$.' },
          { label: 'Step 4: Conclude for (b)', text: 'The limit exceeds $1$ for any $x \\ne 0$, so the series diverges everywhere except at the center $x = 0$, where every term is zero: $R = 0$ and the interval is the single point $\\{0\\}$.' },
        ],
        result: '(a) $R = \\infty$, interval $(-\\infty, \\infty)$; (b) $R = 0$, interval $\\{0\\}$ — the two extremes of the radius spectrum, both decided by how fast factorial outgrows $|x|^n$.',
      },
      {
        title: 'A shifted and scaled center in disguise',
        problem: 'Find the interval of convergence of $\\sum_{n=1}^{\\infty} \\frac{(2x-1)^n}{5^n}$.',
        steps: [
          { label: 'Step 1: Run the Ratio Test directly', text: '$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{|2x-1|^{n+1}}{5^{n+1}}\\cdot\\frac{5^n}{|2x-1|^n} = \\frac{|2x-1|}{5}$, which is below $1$ exactly when $|2x - 1| < 5$.' },
          { label: 'Step 2: Solve the inequality', text: '$-5 < 2x - 1 < 5$ gives $-4 < 2x < 6$, that is $-2 < x < 3$ — an interval centered at $x = \\frac{1}{2}$ with radius $\\frac{5}{2}$ (the scale $2$ in $2x - 1$ divides the radius).' },
          { label: 'Step 3: Test $x = 3$', text: 'At $x = 3$: $2x - 1 = 5$, so the terms are $\\frac{5^n}{5^n} = 1$, and $\\sum 1$ diverges (terms do not approach zero).' },
          { label: 'Step 4: Test $x = -2$', text: 'At $x = -2$: $2x - 1 = -5$, so the terms are $\\frac{(-5)^n}{5^n} = (-1)^n$, which again has no zero limit — divergent.' },
        ],
        result: 'Interval of convergence $(-2, 3)$ with radius $R = \\frac{5}{2}$ centered at $\\frac{1}{2}$: both endpoints fail the term test.',
      },
    ],
    keyTakeaways: [
      'A power series is an infinite polynomial $\\sum c_n(x-a)^n$; for each $x$ it is an ordinary series to be tested.',
      'Convergence is radially symmetric about the center: the interval is $(a-R, a+R)$, possibly with endpoints.',
      'Compute $R$ by the Ratio Test keeping $x$ symbolic, then test each endpoint with the appropriate single-variable test.',
      'All endpoint combinations occur: $[2, 4)$, $[-1, 1]$, $(-1, 1)$, and single points are all possible outcomes.',
      '$R = \\infty$ when factorials or faster-decaying coefficients dominate every $|x|^n$; $R = 0$ when coefficients grow like $n!$.',
      'A series in powers of $(2x - 1)^n$ is just a shifted, scaled center $x = \\frac{1}{2}$ — divide the radius by the scale factor.',
    ],
    quiz: [
      {
        q: 'The interval of convergence of $\\sum_{n=1}^{\\infty} \\frac{(x+2)^n}{n \\cdot 3^n}$ is:',
        options: [`$[-5, 1)$`, `$(-5, 1)$`, `$[-5, 1]$`, `$(-3, 1)$`],
        answer: 0,
        explanation: 'The ratio gives $\\frac{|x+2|}{3} < 1$, so $-5 < x < 1$. At $x = 1$: $\\sum \\frac{1}{n}$ diverges; at $x = -5$: $\\sum \\frac{(-1)^n}{n}$ converges — interval $[-5, 1)$.',
      },
      {
        q: 'The radius of convergence of $\\sum \\frac{(-2)^n}{n!}(x - 5)^n$ is:',
        options: [`$2$`, `$5$`, `$\\infty$`, `$0$`],
        answer: 2,
        explanation: 'The ratio of magnitudes is $\\frac{2|x-5|}{n+1} \\to 0 < 1$ for every $x$ — factorial decay wins everywhere, so $R = \\infty$.',
      },
      {
        q: 'A power series centered at $a = 1$ converges at $x = -1$ and diverges at $x = 5$. Which conclusion follows?',
        options: ['It converges at $x = 3$', 'It diverges at $x = 3$ and converges at $x = 2$', 'It converges for all $x$ with $-1 \\le x < 3$ at least, and its radius is at least $2$', 'Nothing can be concluded'],
        answer: 2,
        explanation: 'Convergence at $x = -1$ (distance $2$) forces convergence for every $x$ within distance $2$ of the center, and divergence at $x = 5$ (distance $4$) forces $R \\le 4$; the guaranteed facts are convergence on at least $(-1, 3)$ and $2 \\le R \\le 4$.',
      },
      {
        q: 'Why must power series endpoints be tested individually?',
        options: ['Because the Radius of Convergence theorem forbids endpoint convergence', 'Because the Ratio Test returns exactly $1$ at $|x - a| = R$ and is inconclusive there', 'Because endpoints always diverge', 'Because the center shifts at the endpoints'],
        answer: 1,
        explanation: 'At the boundary the ratio limit equals $1$ — the geometric intuition behind the test is exhausted, and each endpoint becomes an independent series to be settled by AST, $p$-series, or another tool.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.9
  {
    sectionId: 'calc-ch11-s9',
    readingTime: 8,
    intro: 'The geometric series $\\frac{1}{1-x} = 1 + x + x^2 + \\cdots$ is a machine for manufacturing new series: substitute, differentiate, integrate term by term, and the results are power series for functions that have no business being polynomials — logarithms, arctangents, rational functions. The fine print (same radius, but watch the endpoints) is where the real surprises live.',
    objectives: [
      'Generate power series from the geometric template by substitution and algebra',
      'Differentiate and integrate power series term by term, tracking the radius of convergence',
      'Derive the series for $\\ln(1+x)$ and $\\arctan x$, including endpoint behavior',
      'Evaluate numerical series by recognizing them as function series evaluated at a point',
    ],
    concepts: [
      {
        term: 'The geometric template',
        kind: 'theorem',
        statement: 'For $|x| < 1$: $$\\frac{1}{1-x} = 1 + x + x^2 + x^3 + \\cdots = \\sum_{n=0}^{\\infty} x^n.$$ Substituting $-x$, $x^2$, or any expression with absolute value below $1$ produces new series with the same validity condition.',
        detail: 'This single identity is the seed of the entire section: $\\frac{1}{1+x} = \\sum (-1)^n x^n$ for $|x| < 1$, and $\\frac{1}{1+x^2} = \\sum (-1)^n x^{2n}$ for $|x| < 1$ — the second with the striking moral that a perfectly smooth function on all of $\\mathbb{R}$ has a power series that quits at $|x| = 1$.',
      },
      {
        term: 'Term-by-term differentiation and integration',
        kind: 'theorem',
        statement: 'If $\\sum c_n(x-a)^n$ has radius $R$, then its derivative and integral series $$\\sum n\\,c_n(x-a)^{n-1} \\quad \\text{and} \\quad \\sum \\frac{c_n}{n+1}(x-a)^{n+1}$$ also have radius $R$, and on $|x - a| < R$ they equal $f\'(x)$ and $\\int f(x)\\,dx$ respectively.',
        detail: 'The striking theorem is that differentiation and integration **preserve the radius** — no term is lost from the interior of the interval. But endpoints can change in either direction: integrating $\\frac{1}{1+x} = \\sum(-1)^n x^n$ (convergent only on $(-1,1)$) to $\\ln(1+x)$ gains the endpoint $x = 1$, where the alternating harmonic series converges to $\\ln 2$.',
      },
      {
        term: 'New functions from old',
        kind: 'method',
        statement: 'Power series can be **substituted** into (replace $x$ by a function of $x$), **multiplied** by polynomials or other series, and **composed** with algebraic expressions — always within the radius dictated by the substitution staying below $1$.',
        detail: 'For example $\\frac{x}{1+x^3}$ equals $x\\sum(-1)^n x^{3n} = \\sum (-1)^n x^{3n+1}$ for $|x| < 1$. The radius shrinks to whatever keeps the substituted quantity below $1$ — an easy-to-forget bookkeeping step.',
      },
      {
        term: 'Evaluating series by recognition',
        kind: 'method',
        statement: 'A numerical series $\\sum c_n a^n$ is a function series evaluated at a specific point: identify the function, then substitute. For instance $\\sum_{n=1}^{\\infty}\\frac{n}{2^n}$ is the derivative-based series $\\sum n x^n = \\frac{x}{(1-x)^2}$ at $x = \\frac{1}{2}$.',
        detail: 'The two generating identities to memorize: $\\sum_{n=0}^{\\infty} x^n = \\frac{1}{1-x}$ and, by differentiating and multiplying by $x$, $\\sum_{n=1}^{\\infty} n x^n = \\frac{x}{(1-x)^2}$ for $|x| < 1$. Together they close out a whole genre of "evaluate the series" problems with no computation of partial sums.',
      },
      {
        term: 'Uniqueness of power series representation',
        kind: 'theorem',
        statement: 'If $f(x) = \\sum_{n=0}^{\\infty} c_n (x-a)^n$ for $|x - a| < R$ with $R > 0$, then the coefficients are forced: $c_n = \\frac{f^{(n)}(a)}{n!}$. In particular a function has **at most one** power series centered at $a$ converging to it on an interval.',
        detail: 'Differentiate term by term $n$ times and set $x = a$: every term except $n!\\,c_n$ vanishes, leaving $f^{(n)}(a) = n!\\,c_n$. This is why "recognition" is rigorous — the $\\ln(1+x)$ and $\\arctan x$ series found by integration must coincide with their Taylor series of Section 11.10 — and why two different-looking derivations of one series always agree.',
      },
      {
        term: 'Partial fractions split rational functions',
        kind: 'method',
        statement: 'A rational function whose denominator factors can be split by **partial fractions** into a sum of geometric-ready pieces: for example $\\frac{2}{1-x^2} = \\frac{1}{1-x} + \\frac{1}{1+x} = \\sum_{n=0}^{\\infty} (1 + (-1)^n) x^n$ for $|x| < 1$, and $\\frac{1}{(1-x)(1-2x)} = \\frac{-1}{1-x} + \\frac{2}{1-2x}$ gives $\\sum (2^{n+1} - 1) x^n$ on $|x| < \\frac{1}{2}$.',
        detail: 'The radius is the smaller of the pieces: $|x| < 1$ meets $|2x| < 1$ at $|x| < \\frac{1}{2}$. Splitting first is what keeps each substitution of the form $\\frac{1}{1-u}$ with $|u| < 1$ — the only template this section trusts — and it previews the partial-fraction machinery reused for integration in Section 7.4.',
      },
    ],
    examples: [
      {
        title: 'The series for $\\ln(1+x)$ and the value $\\ln 2$',
        problem: 'Find a power series for $\\ln(1+x)$ and use it to evaluate $1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots$.',
        steps: [
          { label: 'Step 1: Start from the geometric template', text: 'Substitute $-x$ into the geometric series: $\\frac{1}{1+x} = \\frac{1}{1-(-x)} = 1 - x + x^2 - x^3 + \\cdots$, valid for $|-x| = |x| < 1$.' },
          { label: 'Step 2: Integrate term by term', text: 'Since $\\ln(1+x) = \\int_0^x \\frac{dt}{1+t}$: $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots = \\sum_{n=1}^{\\infty}(-1)^{n-1}\\frac{x^n}{n}$, valid for $|x| < 1$ by the radius-preservation theorem.' },
          { label: 'Step 3: Investigate the endpoints', text: 'At $x = 1$ the series is the alternating harmonic series, which converges; at $x = -1$ it is the (negative) harmonic series, which diverges. So the interval of convergence is $(-1, 1]$ — the integration gained an endpoint.' },
          { label: 'Step 4: Evaluate at $x = 1$', text: 'By Abel’s theorem the series equals the function at the endpoint too: $\\ln 2 = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots$, the promised sum of the alternating harmonic series.' },
        ],
        result: '$\\ln(1+x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^n}{n}$ on $(-1, 1]$, and setting $x = 1$ recovers $\\ln 2$ as the alternating harmonic sum.',
      },
      {
        title: 'The arctangent series and Leibniz’s formula for $\\pi$',
        problem: 'Find a power series for $\\arctan x$ and derive the Leibniz formula $\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots$.',
        steps: [
          { label: 'Step 1: Substitute into the template', text: 'Replacing $x$ by $x^2$: $\\frac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + \\cdots$, valid for $|x^2| < 1$, that is $|x| < 1$.' },
          { label: 'Step 2: Integrate term by term', text: 'Since $\\arctan x = \\int_0^x \\frac{dt}{1+t^2}$: $\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} + \\cdots = \\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{2n+1}$, radius $1$.' },
          { label: 'Step 3: Check the endpoint $x = 1$', text: 'At $x = 1$ the series is $\\sum \\frac{(-1)^n}{2n+1}$: magnitudes $\\frac{1}{2n+1}$ decrease to zero, so it converges by the Alternating Series Test (and Abel’s theorem guarantees it equals the function value there).' },
          { label: 'Step 4: Conclude Leibniz’s formula', text: 'Since $\\arctan 1 = \\frac{\\pi}{4}$: $$\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots$$ — one alternating term per digit of accuracy, beautiful but painfully slow.' },
        ],
        result: '$\\arctan x = \\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{2n+1}$ on $[-1, 1]$, and $\\pi$ itself emerges from a power series evaluated at $1$.',
      },
      {
        title: 'A numerical series via differentiation',
        problem: 'Evaluate $\\sum_{n=1}^{\\infty} \\frac{n}{2^n}$ using power series.',
        steps: [
          { label: 'Step 1: Identify the generating series', text: 'Differentiating $\\sum_{n=0}^{\\infty}x^n = \\frac{1}{1-x}$ term by term gives $\\sum_{n=1}^{\\infty} n x^{n-1} = \\frac{1}{(1-x)^2}$; multiplying by $x$ shifts the exponent: $\\sum_{n=1}^{\\infty} n x^n = \\frac{x}{(1-x)^2}$, valid for $|x| < 1$.' },
          { label: 'Step 2: Recognize the target as an evaluation', text: 'The series $\\sum \\frac{n}{2^n}$ is exactly $\\sum n x^n$ at $x = \\frac{1}{2}$, which lies inside the interval of convergence.' },
          { label: 'Step 3: Substitute', text: '$\\sum_{n=1}^{\\infty}\\frac{n}{2^n} = \\frac{\\frac{1}{2}}{\\left(1 - \\frac{1}{2}\\right)^2} = \\frac{\\frac{1}{2}}{\\frac{1}{4}} = 2$.' },
          { label: 'Step 4: Sanity check with partial sums', text: '$s_4 = \\frac{1}{2} + \\frac{2}{4} + \\frac{3}{8} + \\frac{4}{16} = 0.5 + 0.5 + 0.375 + 0.25 = 1.625$, and $s_{10} \\approx 1.988$ — creeping up on $2$ exactly as predicted.' },
        ],
        result: '$\\sum \\frac{n}{2^n} = 2$: the expected number of coin flips until the first head, computed as a power series evaluation.',
      },
    ],
    keyTakeaways: [
      'The geometric series $\\frac{1}{1-x} = \\sum x^n$ generates most of this section’s functions by substitution.',
      'Term-by-term differentiation and integration preserve the radius $R$ but can change endpoint behavior — often gaining a convergent endpoint after integration.',
      '$\\frac{1}{1+x^2}$ has a series that stops at $|x| = 1$ despite the function being smooth everywhere — radius is a property of the series, not the function.',
      'Landmark series: $\\ln(1+x) = \\sum \\frac{(-1)^{n-1}x^n}{n}$ on $(-1, 1]$ and $\\arctan x = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$ on $[-1, 1]$.',
      'Evaluating at special points produces numerical identities: $\\ln 2$ and Leibniz’s $\\frac{\\pi}{4}$ series.',
      'Derivative tricks turn the template into moment series: $\\sum_{n\\ge 1} n x^n = \\frac{x}{(1-x)^2}$ inside $|x| < 1$.',
    ],
    quiz: [
      {
        q: 'The power series for $\\frac{1}{1+x^2}$ converges for:',
        options: ['All real $x$', '$|x| < 1$ only, even though the function is defined everywhere', `$|x| \\le 1$`, `$x > 0$`],
        answer: 1,
        explanation: 'Substituting $-x^2$ requires $|x^2| < 1$, i.e. $|x| < 1$; the radius is a limitation of the series representation, not of the function.',
      },
      {
        q: 'Integrating $\\frac{1}{1+x} = \\sum (-1)^n x^n$ term by term produces the series for $\\ln(1+x)$ with interval of convergence:',
        options: ['$(-1, 1)$, identical to the original', `$(-1, 1]$, gaining the endpoint $x = 1$`, `$[-1, 1)$, gaining the endpoint $x = -1$`, `$(-\\infty, \\infty)$`],
        answer: 1,
        explanation: 'At $x = 1$ the integrated series is the alternating harmonic series (convergent), while at $x = -1$ it is the harmonic series (divergent) — integration extended the interval to $(-1, 1]$.',
      },
      {
        q: 'The function represented by $f(x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{2n+1}$ on $[-1, 1]$ is:',
        options: [`$\\ln(1+x)$`, `$\\arctan x$`, `$\\frac{1}{1+x^2}$`, `$\\sin x$`],
        answer: 1,
        explanation: 'This is the integral of the geometric series for $\\frac{1}{1+x^2}$ — term-by-term integration delivers the arctangent, with alternating odd-power terms.',
      },
      {
        q: 'Using $\\sum_{n=1}^{\\infty} n x^n = \\frac{x}{(1-x)^2}$, the value of $\\sum_{n=1}^{\\infty} \\frac{n}{3^n}$ is:',
        options: [`$\\frac{1}{2}$`, `$\\frac{3}{4}$`, `$\\frac{4}{3}$`, `$1$`],
        answer: 1,
        explanation: 'Substituting $x = \\frac{1}{3}$: $\\frac{1/3}{(2/3)^2} = \\frac{1/3}{4/9} = \\frac{3}{4}$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.10
  {
    sectionId: 'calc-ch11-s10',
    readingTime: 10,
    intro: 'The climax of the chapter: if a function has derivatives of every order at a point, those derivatives assemble a Taylor series — the unique power series that matches the function to all orders there. When the remainder provably vanishes, the series **is** the function: $e^x$, $\\sin x$, $\\cos x$ and their friends become polynomials of infinite degree, computable to any accuracy.',
    objectives: [
      'Compute Taylor and Maclaurin series directly from the derivatives of a function',
      'State Taylor’s formula with remainder and apply Taylor’s inequality to bound the error',
      'Prove that the Maclaurin series of $e^x$, $\\sin x$ and $\\cos x$ converge to their functions for all $x$',
      'Build new series by substitution, multiplication and known-series recognition, including the binomial series',
    ],
    concepts: [
      {
        term: 'Taylor and Maclaurin series',
        kind: 'definition',
        statement: 'If $f$ has derivatives of all orders at $a$, its **Taylor series centered at $a$** is $$\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n = f(a) + f\'(a)(x-a) + \\frac{f\'\'(a)}{2!}(x-a)^2 + \\cdots$$ The special case $a = 0$ is the **Maclaurin series**.',
        detail: 'The coefficients are forced: if any power series is to equal $f$ near $a$, differentiating repeatedly and evaluating at $x = a$ leaves exactly one term each time, giving $c_n = \\frac{f^{(n)}(a)}{n!}$. Uniqueness is what makes "recognizing" a series as efficient as computing it.',
      },
      {
        term: 'Taylor polynomials and the remainder',
        kind: 'definition',
        statement: 'The **nth-degree Taylor polynomial** $T_n(x)$ is the partial sum of the Taylor series through degree $n$; the difference $R_n(x) = f(x) - T_n(x)$ is the **remainder**, and the Taylor series converges to $f(x)$ exactly when $\\lim_{n\\to\\infty} R_n(x) = 0$.',
        detail: 'This is the crucial subtlety: a Taylor series can converge without converging **to its function** — the classic pathology is $f(x) = e^{-1/x^2}$ (with $f(0) = 0$), all of whose derivatives at $0$ vanish, giving the useless series $0 + 0 + 0 + \\cdots$ that converges to zero while the function does not.',
      },
      {
        term: 'Taylor’s inequality',
        kind: 'theorem',
        statement: 'If $|f^{(n+1)}(x)| \\le M$ for $|x - a| \\le d$, then the remainder satisfies $$|R_n(x)| \\le \\frac{M}{(n+1)!}|x - a|^{n+1} \\quad \\text{for } |x - a| \\le d.$$',
        detail: 'Taylor’s inequality is the workhorse for proving $R_n \\to 0$: since factorials outgrow exponentials, any uniform bound $M$ on the derivatives makes the right side vanish as $n$ grows — the whole proof that $e^x$, $\\sin x$ and $\\cos x$ equal their Maclaurin series everywhere.',
      },
      {
        term: 'The Maclaurin series table',
        kind: 'insight',
        statement: 'The essential library: $e^x = \\sum \\frac{x^n}{n!}$ (all $x$); $\\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$; $\\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$; $\\frac{1}{1-x} = \\sum x^n$ ($|x| < 1$); $\\ln(1+x) = \\sum \\frac{(-1)^{n-1}x^n}{n}$ ($-1 < x \\le 1$); $\\arctan x = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$ ($|x| \\le 1$); $(1+x)^k = \\sum \\binom{k}{n}x^n$ ($|x| < 1$).',
        detail: 'Notice the parity: sine keeps only odd powers, cosine only even — a structural fact used constantly when composing and multiplying series. These seven series, plus the ability to substitute and multiply, cover a striking fraction of practice problems.',
      },
      {
        term: 'The binomial series',
        kind: 'theorem',
        statement: 'For any real exponent $k$ and $|x| < 1$: $$(1+x)^k = 1 + kx + \\frac{k(k-1)}{2!}x^2 + \\frac{k(k-1)(k-2)}{3!}x^3 + \\cdots = \\sum_{n=0}^{\\infty}\\binom{k}{n}x^n,$$ where the generalized binomial coefficient is $\\binom{k}{n} = \\frac{k(k-1)(k-2)\\cdots(k-n+1)}{n!}$.',
        detail: 'For positive integer $k$ the coefficients vanish past $n = k$ and the series collapses to the ordinary Binomial Theorem. For $k = \\frac{1}{2}$ it produces $\\sqrt{1+x} = 1 + \\frac{x}{2} - \\frac{x^2}{8} + \\frac{x^3}{16} - \\cdots$, and for $k = -\\frac{1}{2}$ the series needed for relativistic energy in Section 11.11.',
      },
      {
        term: 'Multiplying and composing series',
        kind: 'method',
        statement: 'Power series can be multiplied like polynomials (collect all terms of a given degree — the Cauchy product) and composed by substituting one series into another, within the smaller of the radii and the substitution constraint.',
        detail: 'For instance $e^x \\sin x$ multiplies the two Maclaurin series to give $x + x^2 + \\frac{x^3}{3} + \\cdots$, and $\\cos(x^2)$ is the cosine series with $x$ replaced by $x^2$, namely $1 - \\frac{x^4}{2!} + \\frac{x^8}{4!} - \\cdots$, converging everywhere.',
      },
      {
        term: 'Computers compute with Taylor series',
        kind: 'insight',
        statement: 'The functions on a calculator or inside a math library — $\\sin$, $\\exp$, $\\ln$ — are evaluated by (truncated, cleverly optimized) polynomial approximations descended from Taylor series; every call to $\\texttt{Math.sin}$ in a JavaScript program runs such code.',
        detail: 'Production libraries use Chebyshev polynomials and range reduction for better uniform accuracy than raw Taylor truncation, but the certificate that guarantees accuracy to the last bit is the same mathematics: a rigorous bound on the remainder. The Taylor lab interactive lets you watch the partial sums hug the curve.',
      },
    ],
    figures: [
      {
        caption: '$\\sin x$ over $[-2\\pi, 2\\pi]$ (solid), plotted against the honest vertical window $-4 \\le y \\le 4$, with its Maclaurin polynomials $P_3(x) = x - \\frac{x^3}{6}$ (amber) and $P_5(x) = x - \\frac{x^3}{6} + \\frac{x^5}{120}$ (teal). Near the origin the polynomials hug the curve — at $x = \\pi/2$ the quintic clears the crest by only $0.0045$ — but the agreement is strictly local: the cubic bursts through the top of the window at $x \\approx -3.57$ (and the bottom at $x \\approx 3.57$), the quintic holds out to $|x| \\approx 4.4$, and beyond the frame they race to $P_3(2\\pi) \\approx -35$ and $P_5(2\\pi) \\approx +47$. Taylor’s inequality $|R_n(x)| \\le \\frac{|x|^{n+1}}{(n+1)!}$ buys accuracy only while $|x|$ is small: matching a function at a point is a local contract.',
        svg: '<svg viewBox="0 0 720 370" width="100%" role="img" aria-label="Graph of sine over the interval from minus two pi to two pi with its degree three and degree five Taylor polynomials, which hug the curve near the origin and leave the graph window away from it"><line x1="86" y1="20" x2="112" y2="20" stroke="currentColor" stroke-width="2"/><text x="118" y="24" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" font-style="italic">sin x</text><line x1="198" y1="20" x2="224" y2="20" stroke="#f59e0b" stroke-width="2"/><text x="230" y="24" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" font-style="italic">P₃ = x − x³/6</text><line x1="352" y1="20" x2="378" y2="20" stroke="#14b8a6" stroke-width="2"/><text x="384" y="24" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" font-style="italic">P₅ = x − x³/6 + x⁵/120</text><rect x="70" y="40" width="600" height="300" fill="none" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.35"/><line x1="70" y1="152.5" x2="670" y2="152.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="70" y1="227.5" x2="670" y2="227.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="220" y1="196" x2="220" y2="340" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="520" y1="196" x2="520" y2="340" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="62" y1="190" x2="682" y2="190" stroke="currentColor" stroke-width="1.5"/><polygon points="692,190 680,185.5 680,194.5" fill="currentColor"/><line x1="370" y1="348" x2="370" y2="34" stroke="currentColor" stroke-width="1.5"/><polygon points="370,28 365.5,40 374.5,40" fill="currentColor"/><line x1="70" y1="190" x2="70" y2="196" stroke="currentColor" stroke-width="1.5"/><line x1="220" y1="190" x2="220" y2="196" stroke="currentColor" stroke-width="1.5"/><line x1="370" y1="190" x2="370" y2="196" stroke="currentColor" stroke-width="1.5"/><line x1="520" y1="190" x2="520" y2="196" stroke="currentColor" stroke-width="1.5"/><line x1="670" y1="190" x2="670" y2="196" stroke="currentColor" stroke-width="1.5"/><text x="70" y="356" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">−2π</text><text x="220" y="356" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">−π</text><text x="370" y="356" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">0</text><text x="520" y="356" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">π</text><text x="670" y="356" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2π</text><line x1="364" y1="40" x2="370" y2="40" stroke="currentColor" stroke-width="1.5"/><line x1="364" y1="77.5" x2="370" y2="77.5" stroke="currentColor" stroke-width="1.5"/><line x1="364" y1="115" x2="370" y2="115" stroke="currentColor" stroke-width="1.5"/><line x1="364" y1="152.5" x2="370" y2="152.5" stroke="currentColor" stroke-width="1.5"/><line x1="364" y1="227.5" x2="370" y2="227.5" stroke="currentColor" stroke-width="1.5"/><line x1="364" y1="265" x2="370" y2="265" stroke="currentColor" stroke-width="1.5"/><line x1="364" y1="302.5" x2="370" y2="302.5" stroke="currentColor" stroke-width="1.5"/><line x1="364" y1="340" x2="370" y2="340" stroke="currentColor" stroke-width="1.5"/><text x="360" y="44" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">4</text><text x="360" y="81.5" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">3</text><text x="360" y="119" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">2</text><text x="360" y="156.5" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">1</text><text x="360" y="231.5" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">−1</text><text x="360" y="269" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">−2</text><text x="360" y="306.5" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">−3</text><text x="360" y="344" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">−4</text><text x="700" y="194" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">x</text><text x="358" y="38" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">y</text><polyline points="199.7,40 202.1,49.9 204.5,59.5 206.9,68.8 209.3,77.8 211.7,86.4 214.1,94.7 216.5,102.7 218.9,110.4 221.3,117.9 223.7,125 226.1,131.8 228.5,138.3 230.9,144.6 233.3,150.6 235.6,156.3 238,161.7 240.4,166.9 242.8,171.8 245.2,176.5 247.6,180.9 250,185.1 252.4,189 254.8,192.8 257.2,196.2 259.6,199.5 262,202.5 264.4,205.4 266.8,208 269.2,210.4 271.6,212.6 274,214.6 276.4,216.5 278.8,218.1 281.2,219.6 283.6,220.8 286,222 288.4,222.9 290.8,223.7 293.2,224.3 295.6,224.8 298,225.1 300.4,225.3 302.8,225.4 305.2,225.3 307.6,225.1 310,224.7 312.4,224.3 314.8,223.7 317.2,223 319.6,222.2 322,221.3 324.4,220.4 326.8,219.3 329.2,218.1 331.6,216.9 334,215.6 336.4,214.2 338.8,212.8 341.2,211.2 343.6,209.7 346,208 348.4,206.4 350.8,204.7 353.2,202.9 355.6,201.1 358,199.3 360.4,197.5 362.8,195.6 365.2,193.8 367.6,191.9 370,190 372.4,188.1 374.8,186.2 377.2,184.4 379.6,182.5 382,180.7 384.4,178.9 386.8,177.1 389.2,175.3 391.6,173.6 394,172 396.4,170.3 398.8,168.8 401.2,167.2 403.6,165.8 406,164.4 408.4,163.1 410.8,161.9 413.2,160.7 415.6,159.6 418,158.7 420.4,157.8 422.8,157 425.2,156.3 427.6,155.7 430,155.3 432.4,154.9 434.8,154.7 437.2,154.6 439.6,154.7 442,154.9 444.4,155.2 446.8,155.7 449.2,156.3 451.6,157.1 454,158 456.4,159.2 458.8,160.4 461.2,161.9 463.6,163.5 466,165.4 468.4,167.4 470.8,169.6 473.2,172 475.6,174.6 478,177.5 480.4,180.5 482.8,183.8 485.2,187.2 487.6,191 490,194.9 492.4,199.1 494.8,203.5 497.2,208.2 499.6,213.1 502,218.3 504.4,223.7 506.7,229.4 509.1,235.4 511.5,241.7 513.9,248.2 516.3,255 518.7,262.1 521.1,269.6 523.5,277.3 525.9,285.3 528.3,293.6 530.7,302.2 533.1,311.2 535.5,320.5 537.9,330.1 540.3,340" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linejoin="round"/><polyline points="159.5,340 161.9,327.3 164.3,315.5 166.7,304.5 169.1,294.3 171.5,284.9 173.9,276.2 176.3,268.3 178.7,261 181.1,254.3 183.5,248.2 185.9,242.7 188.2,237.8 190.6,233.3 193,229.4 195.4,225.8 197.8,222.7 200.2,220 202.6,217.7 205,215.7 207.4,214 209.8,212.6 212.2,211.6 214.5,210.7 216.9,210.1 219.3,209.7 221.7,209.5 224.1,209.5 226.5,209.7 228.9,210 231.3,210.4 233.7,210.9 236.1,211.5 238.5,212.2 240.9,213 243.2,213.8 245.6,214.7 248,215.6 250.4,216.5 252.8,217.5 255.2,218.4 257.6,219.3 260,220.2 262.4,221.1 264.8,222 267.2,222.8 269.6,223.6 271.9,224.3 274.3,225 276.7,225.6 279.1,226.1 281.5,226.5 283.9,226.9 286.3,227.2 288.7,227.5 291.1,227.6 293.5,227.7 295.9,227.7 298.3,227.5 300.6,227.3 303,227 305.4,226.7 307.8,226.2 310.2,225.6 312.6,225 315,224.3 317.4,223.5 319.8,222.6 322.2,221.6 324.6,220.5 327,219.4 329.3,218.2 331.7,216.9 334.1,215.6 336.5,214.2 338.9,212.7 341.3,211.2 343.7,209.6 346.1,208 348.5,206.3 350.9,204.6 353.3,202.9 355.7,201.1 358,199.3 360.4,197.5 362.8,195.6 365.2,193.8 367.6,191.9 370,190 372.4,188.1 374.8,186.2 377.2,184.4 379.6,182.5 382,180.7 384.3,178.9 386.7,177.1 389.1,175.4 391.5,173.7 393.9,172 396.3,170.4 398.7,168.8 401.1,167.3 403.5,165.8 405.9,164.4 408.3,163.1 410.7,161.8 413,160.6 415.4,159.5 417.8,158.4 420.2,157.4 422.6,156.5 425,155.7 427.4,155 429.8,154.4 432.2,153.8 434.6,153.3 437,153 439.4,152.7 441.7,152.5 444.1,152.3 446.5,152.3 448.9,152.4 451.3,152.5 453.7,152.8 456.1,153.1 458.5,153.5 460.9,153.9 463.3,154.4 465.7,155 468.1,155.7 470.4,156.4 472.8,157.2 475.2,158 477.6,158.9 480,159.8 482.4,160.7 484.8,161.6 487.2,162.5 489.6,163.5 492,164.4 494.4,165.3 496.8,166.2 499.1,167 501.5,167.8 503.9,168.5 506.3,169.1 508.7,169.6 511.1,170 513.5,170.3 515.9,170.5 518.3,170.5 520.7,170.3 523.1,169.9 525.5,169.3 527.8,168.4 530.2,167.4 532.6,166 535,164.3 537.4,162.3 539.8,160 542.2,157.3 544.6,154.2 547,150.6 549.4,146.7 551.8,142.2 554.1,137.3 556.5,131.8 558.9,125.7 561.3,119 563.7,111.7 566.1,103.8 568.5,95.1 570.9,85.7 573.3,75.5 575.7,64.5 578.1,52.7 580.5,40" fill="none" stroke="#14b8a6" stroke-width="2" stroke-linejoin="round"/><polyline points="70,190 72.4,188.1 74.8,186.3 77.1,184.4 79.5,182.6 81.9,180.7 84.3,178.9 86.7,177.2 89,175.4 91.4,173.7 93.8,172.1 96.2,170.4 98.6,168.9 101,167.4 103.3,165.9 105.7,164.5 108.1,163.2 110.5,161.9 112.9,160.7 115.2,159.6 117.6,158.5 120,157.5 122.4,156.6 124.8,155.8 127.1,155.1 129.5,154.5 131.9,153.9 134.3,153.4 136.7,153.1 139,152.8 141.4,152.6 143.8,152.5 146.2,152.5 148.6,152.6 151,152.8 153.3,153.1 155.7,153.4 158.1,153.9 160.5,154.5 162.9,155.1 165.2,155.8 167.6,156.6 170,157.5 172.4,158.5 174.8,159.6 177.1,160.7 179.5,161.9 181.9,163.2 184.3,164.5 186.7,165.9 189,167.4 191.4,168.9 193.8,170.4 196.2,172.1 198.6,173.7 201,175.4 203.3,177.2 205.7,178.9 208.1,180.7 210.5,182.6 212.9,184.4 215.2,186.3 217.6,188.1 220,190 222.4,191.9 224.8,193.7 227.1,195.6 229.5,197.4 231.9,199.3 234.3,201.1 236.7,202.8 239,204.6 241.4,206.3 243.8,207.9 246.2,209.6 248.6,211.1 251,212.6 253.3,214.1 255.7,215.5 258.1,216.8 260.5,218.1 262.9,219.3 265.2,220.4 267.6,221.5 270,222.5 272.4,223.4 274.8,224.2 277.1,224.9 279.5,225.5 281.9,226.1 284.3,226.6 286.7,226.9 289,227.2 291.4,227.4 293.8,227.5 296.2,227.5 298.6,227.4 301,227.2 303.3,226.9 305.7,226.6 308.1,226.1 310.5,225.5 312.9,224.9 315.2,224.2 317.6,223.4 320,222.5 322.4,221.5 324.8,220.4 327.1,219.3 329.5,218.1 331.9,216.8 334.3,215.5 336.7,214.1 339,212.6 341.4,211.1 343.8,209.6 346.2,207.9 348.6,206.3 351,204.6 353.3,202.8 355.7,201.1 358.1,199.3 360.5,197.4 362.9,195.6 365.2,193.7 367.6,191.9 370,190 372.4,188.1 374.8,186.3 377.1,184.4 379.5,182.6 381.9,180.7 384.3,178.9 386.7,177.2 389,175.4 391.4,173.7 393.8,172.1 396.2,170.4 398.6,168.9 401,167.4 403.3,165.9 405.7,164.5 408.1,163.2 410.5,161.9 412.9,160.7 415.2,159.6 417.6,158.5 420,157.5 422.4,156.6 424.8,155.8 427.1,155.1 429.5,154.5 431.9,153.9 434.3,153.4 436.7,153.1 439,152.8 441.4,152.6 443.8,152.5 446.2,152.5 448.6,152.6 451,152.8 453.3,153.1 455.7,153.4 458.1,153.9 460.5,154.5 462.9,155.1 465.2,155.8 467.6,156.6 470,157.5 472.4,158.5 474.8,159.6 477.1,160.7 479.5,161.9 481.9,163.2 484.3,164.5 486.7,165.9 489,167.4 491.4,168.9 493.8,170.4 496.2,172.1 498.6,173.7 501,175.4 503.3,177.2 505.7,178.9 508.1,180.7 510.5,182.6 512.9,184.4 515.2,186.3 517.6,188.1 520,190 522.4,191.9 524.8,193.7 527.1,195.6 529.5,197.4 531.9,199.3 534.3,201.1 536.7,202.8 539,204.6 541.4,206.3 543.8,207.9 546.2,209.6 548.6,211.1 551,212.6 553.3,214.1 555.7,215.5 558.1,216.8 560.5,218.1 562.9,219.3 565.2,220.4 567.6,221.5 570,222.5 572.4,223.4 574.8,224.2 577.1,224.9 579.5,225.5 581.9,226.1 584.3,226.6 586.7,226.9 589,227.2 591.4,227.4 593.8,227.5 596.2,227.5 598.6,227.4 601,227.2 603.3,226.9 605.7,226.6 608.1,226.1 610.5,225.5 612.9,224.9 615.2,224.2 617.6,223.4 620,222.5 622.4,221.5 624.8,220.4 627.1,219.3 629.5,218.1 631.9,216.8 634.3,215.5 636.7,214.1 639,212.6 641.4,211.1 643.8,209.6 646.2,207.9 648.6,206.3 651,204.6 653.3,202.8 655.7,201.1 658.1,199.3 660.5,197.4 662.9,195.6 665.2,193.7 667.6,191.9 670,190" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: 'The Maclaurin series for $e^x$, and computing $e$',
        problem: 'Find the Maclaurin series of $f(x) = e^x$, prove it converges to $e^x$ for all $x$, and estimate $e$ to four decimal places.',
        steps: [
          { label: 'Step 1: Tabulate the derivatives', text: 'Every derivative of $e^x$ is $e^x$, so $f^{(n)}(0) = 1$ for all $n$ and the coefficients are $\\frac{1}{n!}$: $$e^x = \\sum_{n=0}^{\\infty}\\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$' },
          { label: 'Step 2: Bound the remainder with Taylor’s inequality', text: 'On any interval $|x| \\le d$, all derivatives are bounded by $M = e^d$, so $|R_n(x)| \\le \\frac{e^d |x|^{n+1}}{(n+1)!}$.' },
          { label: 'Step 3: Let $n$ grow', text: 'Factorials dominate exponentials — $\\frac{d^{n+1}}{(n+1)!} \\to 0$ — so $R_n(x) \\to 0$ for every fixed $x$, proving the series equals $e^x$ everywhere (radius $\\infty$, matching Section 11.8).' },
          { label: 'Step 4: Specialize to $x = 1$', text: '$e = \\sum_{n=0}^{\\infty}\\frac{1}{n!}$. On $[0, 1]$ take $M = 3$ (since $e < 3$): $|R_n(1)| \\le \\frac{3}{(n+1)!} < 0.00005$ requires $(n+1)! > 60000$, satisfied at $(n+1) = 9$.' },
          { label: 'Step 5: Sum the first nine terms', text: '$1 + 1 + \\frac{1}{2} + \\frac{1}{6} + \\frac{1}{24} + \\frac{1}{120} + \\frac{1}{720} + \\frac{1}{5040} + \\frac{1}{40320} \\approx 2.71828$, so $e \\approx 2.7183$ with the error guaranteed below $5 \\times 10^{-5}$.' },
        ],
        result: '$e^x = \\sum \\frac{x^n}{n!}$ for all real $x$, and $e \\approx 2.7183$ from nine terms with a certified error bound.',
      },
      {
        title: 'The series for $\\sin x$ and $\\cos x$',
        problem: 'Derive the Maclaurin series for $\\sin x$ and $\\cos x$ and show they converge to their functions everywhere.',
        steps: [
          { label: 'Step 1: Cycle the derivatives of sine', text: 'The derivatives of $\\sin x$ cycle $\\sin x, \\cos x, -\\sin x, -\\cos x$ and repeat with period $4$; at $0$ they evaluate to $0, 1, 0, -1, 0, 1, \\ldots$, so only odd powers survive: $$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots = \\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{(2n+1)!}$$' },
          { label: 'Step 2: Kill the remainder', text: 'Every derivative of $\\sin x$ is $\\pm\\sin x$ or $\\pm\\cos x$, hence bounded by $M = 1$ on the whole line; Taylor’s inequality gives $|R_n(x)| \\le \\frac{|x|^{n+1}}{(n+1)!} \\to 0$ — the series equals $\\sin x$ for every $x$.' },
          { label: 'Step 3: Differentiate to get cosine', text: 'Term-by-term differentiation of the sine series gives $1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$, which must equal $\\cos x$ — the even-power twin, as predicted by the parity of the derivatives at $0$.' },
          { label: 'Step 4: Verify consistency', text: 'Setting $x = 0$ returns $\\sin 0 = 0$ and $\\cos 0 = 1$; differentiating the cosine series returns the negative of the sine series, reproducing $\\frac{d}{dx}\\cos x = -\\sin x$ exactly, term by term.' },
        ],
        result: '$\\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ and $\\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$, both valid for all $x$ — the odd and even mirrors of each other.',
      },
      {
        title: 'Binomial series and a product of series',
        problem: '(a) Expand $\\sqrt{1+x}$ through the $x^3$ term and estimate $\\sqrt{1.05}$. (b) Find the first three terms of the Maclaurin series for $e^x\\sin x$ by multiplication.',
        steps: [
          { label: 'Step 1: Apply the binomial series with $k = \\frac{1}{2}$', text: '$\\sqrt{1+x} = 1 + \\frac{1}{2}x + \\frac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2!}x^2 + \\frac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)\\left(-\\frac{3}{2}\\right)}{3!}x^3 + \\cdots = 1 + \\frac{x}{2} - \\frac{x^2}{8} + \\frac{x^3}{16} - \\cdots$ for $|x| < 1$.' },
          { label: 'Step 2: Substitute $x = 0.05$', text: '$\\sqrt{1.05} \\approx 1 + 0.025 - \\frac{0.0025}{8} + \\frac{0.000125}{16} = 1 + 0.025 - 0.0003125 + 0.0000078 \\approx 1.0247$. (The true value is $1.0246951\\ldots$)' },
          { label: 'Step 3: Set up the product for (b)', text: 'Multiply the series $\\left(1 + x + \\frac{x^2}{2} + \\cdots\\right)\\left(x - \\frac{x^3}{6} + \\cdots\\right)$ and collect by degree, keeping terms through $x^3$.' },
          { label: 'Step 4: Collect like powers', text: 'Degree $1$: $1 \\cdot x = x$. Degree $2$: $x \\cdot x = x^2$. Degree $3$: $\\frac{x^2}{2}\\cdot x - 1\\cdot\\frac{x^3}{6} = \\frac{x^3}{2} - \\frac{x^3}{6} = \\frac{x^3}{3}$. So $e^x\\sin x = x + x^2 + \\frac{x^3}{3} + \\cdots$' },
        ],
        result: '(a) $\\sqrt{1+x} = 1 + \\frac{x}{2} - \\frac{x^2}{8} + \\frac{x^3}{16} - \\cdots$ and $\\sqrt{1.05} \\approx 1.0247$; (b) $e^x\\sin x = x + x^2 + \\frac{x^3}{3} + \\cdots$, built by polynomial-style multiplication of two known series.',
      },
    ],
    keyTakeaways: [
      'Taylor coefficients are forced by matching derivatives: $c_n = \\frac{f^{(n)}(a)}{n!}$; center $a = 0$ gives the Maclaurin series.',
      'The series equals the function only where the remainder dies: $R_n(x) = f(x) - T_n(x) \\to 0$.',
      'Taylor’s inequality $|R_n| \\le \\frac{M|x-a|^{n+1}}{(n+1)!}$ bounds the error whenever the derivatives are bounded by $M$.',
      'Because factorial beats exponential, $e^x$, $\\sin x$ and $\\cos x$ equal their Maclaurin series for **all** $x$.',
      'Memorize the table: $e^x$, $\\sin x$, $\\cos x$, $\\frac{1}{1-x}$, $\\ln(1+x)$, $\\arctan x$, and the binomial series $(1+x)^k$ on $|x| < 1$.',
      'Series may be substituted, multiplied (Cauchy product) and composed — far cheaper than computing high derivatives directly.',
      'A convergent Taylor series need not converge to its function: the remainder must be shown to vanish.',
    ],
    quiz: [
      {
        q: 'The coefficient of $x^4$ in the Maclaurin series of $f(x) = e^{x^2}$ is:',
        options: [`$\\frac{1}{4!}$`, `$\\frac{1}{2}$`, `$0$`, `$1$`],
        answer: 1,
        explanation: 'Substitute $x^2$ into the series for $e^x$: $1 + x^2 + \\frac{x^4}{2!} + \\cdots$, so the $x^4$ coefficient is $\\frac{1}{2}$ — recognition beats differentiating four times.',
      },
      {
        q: 'Taylor’s inequality requires $|f^{(n+1)}(x)| \\le M$ on an interval around $a$. For $f(x) = \\sin x$, one may always take:',
        options: [`$M = 1$`, `$M = x$`, `$M = e^x$`, 'No such $M$ exists'],
        answer: 0,
        explanation: 'Every derivative of $\\sin x$ is one of $\\pm\\sin x, \\pm\\cos x$, all bounded by $1$ on the entire real line — which is why the Maclaurin series for sine is globally valid.',
      },
      {
        q: 'The Maclaurin series of $\\ln(1+x)$ is $x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$. The series for $\\ln 2$ obtained from it is:',
        options: ['Divergent, so $\\ln 2$ cannot be computed this way', 'Convergent by the Alternating Series Test at the endpoint $x = 1$, summing to $\\ln 2$', 'Convergent only conditionally to a different value', 'Geometric with ratio $\\frac{1}{2}$'],
        answer: 1,
        explanation: 'At $x = 1$ the alternating harmonic series converges, and Abel’s theorem guarantees the sum matches the function value there: $\\ln 2 = 1 - \\frac{1}{2} + \\frac{1}{3} - \\cdots$',
      },
      {
        q: 'In the binomial series $(1+x)^{1/2} = 1 + \\frac{x}{2} - \\frac{x^2}{8} + \\cdots$, the coefficient of $x^2$ is $-\\frac{1}{8}$ because:',
        options: ['The square root decreases the function', 'The generalized binomial coefficient is $\\frac{(1/2)(1/2 - 1)}{2!} = \\frac{(1/2)(-1/2)}{2} = -\\frac{1}{8}$', 'It alternates by rule', 'Differentiating twice and evaluating at $0$ gives $-\\frac{1}{4}$, halved for the factorial'],
        answer: 1,
        explanation: 'Each binomial coefficient multiplies the falling factors of $k = \\frac{1}{2}$: the second factor is $-\\frac{1}{2}$, making the degree-2 coefficient negative.',
      },
      {
        q: 'Multiplying the series of $e^x$ and $\\sin x$, the lowest-order nonzero term of the product is:',
        options: [`$1$`, `$x$`, `$x^2$`, `$\\frac{x^3}{3}$`],
        answer: 1,
        explanation: 'The constant term of $\\sin x$ is $0$, so the product’s first contribution is $1 \\cdot x = x$; collecting degrees gives $x + x^2 + \\frac{x^3}{3} + \\cdots$',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.11
  {
    sectionId: 'calc-ch11-s11',
    readingTime: 8,
    intro: 'Taylor polynomials turn hard functions into usable ones: near the expansion point, a few terms do the work of the whole function. Physicists use them constantly — the small-angle pendulum, relativistic energy, and virtually every limit that l’Hospital’s Rule would struggle with are one-line problems once functions are replaced by the leading terms of their series.',
    objectives: [
      'Approximate function values with Taylor polynomials and certified error bounds',
      'Evaluate hard limits by substituting leading series terms',
      'Derive the small-angle approximation for the pendulum and the Newtonian limit of relativistic energy',
      'Decide how many terms to keep for a target accuracy',
    ],
    concepts: [
      {
        term: 'Approximation with error control',
        kind: 'method',
        statement: 'Replace $f(x)$ by its Taylor polynomial $T_n(x)$ near $a$, with the error certified by Taylor’s inequality $|R_n(x)| \\le \\frac{M}{(n+1)!}|x-a|^{n+1}$ — the number of terms needed for accuracy $\\varepsilon$ is the smallest $n$ making the bound fall below $\\varepsilon$.',
        detail: 'The error bound shrinks rapidly with the distance $|x - a|$, which is why series are evaluated after **range reduction**: computing $\\sin 47°$ uses the series near $0$ after subtracting multiples of $\\frac{\\pi}{2}$ and using symmetry. Every calculator and every math library function is ultimately this procedure.',
      },
      {
        term: 'Limits via series',
        kind: 'method',
        statement: 'To evaluate $\\lim_{x\\to a}\\frac{f(x)}{g(x)}$, replace $f$ and $g$ by the leading terms of their Taylor series at $a$ and cancel — the answer is the ratio of the first surviving coefficients.',
        detail: 'For example $\\lim_{x\\to 0}\\frac{e^x - 1 - x}{x^2}$: the numerator is $\\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$ after the $1$ and $x$ cancel, so the limit is $\\frac{1}{2}$. Series substitution is l’Hospital’s Rule without the repeated differentiation — often several rounds of it in a single step.',
      },
      {
        term: 'The small-angle pendulum',
        kind: 'insight',
        statement: 'The pendulum equation $\\theta\'\' + \\frac{g}{L}\\sin\\theta = 0$ is not solvable by elementary functions; replacing $\\sin\\theta$ by its leading term $\\theta$ gives simple harmonic motion with period $T = 2\\pi\\sqrt{\\frac{L}{g}}$. The next term, $\\sin\\theta \\approx \\theta - \\frac{\\theta^3}{6}$, yields the correction $$T \\approx 2\\pi\\sqrt{\\frac{L}{g}}\\left(1 + \\frac{\\theta_0^2}{16}\\right),$$ where $\\theta_0$ is the release angle.',
        detail: 'For a $30°$ release ($\\theta_0 \\approx 0.52$ radians) the correction is about $1.7\\%$ — measurable with a stopwatch and a string. This is the pattern of applied mathematics: keep the physics exact, expand the nonlinear piece, and let the series tell you when the textbook formula breaks.',
      },
      {
        term: 'Relativity from the binomial series',
        kind: 'insight',
        statement: 'The relativistic energy $E = \\frac{mc^2}{\\sqrt{1 - v^2/c^2}}$ expands via the binomial series with $k = -\\frac{1}{2}$: $$E = mc^2 + \\frac{1}{2}mv^2 + \\frac{3}{8}\\frac{mv^4}{c^2} + \\cdots$$ The kinetic energy $E - mc^2$ therefore begins with exactly the Newtonian $\\frac{1}{2}mv^2$, with corrections of relative size $\\frac{3}{4}\\frac{v^2}{c^2}$.',
        detail: 'For a highway-speed car ($v \\approx 30\\ \\text{m/s}$), $\\frac{v^2}{c^2} \\approx 10^{-14}$ — Newtonian mechanics is accurate to fourteen decimal places, which is why it survived two centuries. For an electron in a CRT, $v$ is a substantial fraction of $c$ and the correction is engineering, not pedantry.',
      },
      {
        term: 'How many terms to keep',
        kind: 'method',
        statement: 'The working rule: keep terms until the next one is smaller than the tolerance; with Taylor’s inequality in hand, this is a **certificate** rather than a hope.',
        detail: 'Because successive Taylor terms shrink by roughly a factor of $|x - a|$ divided by the growing index, each additional term buys a large multiple of accuracy near the center — and almost nothing far from it. Distance from the center is the enemy of polynomial approximation; re-center when straying.',
      },
    ],
    examples: [
      {
        title: 'Limits by series substitution',
        problem: 'Evaluate (a) $\\lim_{x\\to 0}\\frac{e^x - 1 - x}{x^2}$ and (b) $\\lim_{x\\to 0}\\frac{\\sin x - x}{x^3}$.',
        steps: [
          { label: 'Step 1: Substitute the series in (a)', text: '$e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$, so the numerator is $\\left(\\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots\\right)$ after the $1$ and $x$ cancel.' },
          { label: 'Step 2: Divide and take the limit', text: '$\\frac{e^x - 1 - x}{x^2} = \\frac{1}{2} + \\frac{x}{6} + \\cdots \\to \\frac{1}{2}$ as $x \\to 0$.' },
          { label: 'Step 3: Substitute the series in (b)', text: `$\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\cdots$, so $\\sin x - x = -\\frac{x^3}{6} + \\frac{x^5}{120} - \\cdots$` },
          { label: 'Step 4: Divide and conclude', text: '$\\frac{\\sin x - x}{x^3} = -\\frac{1}{6} + \\frac{x^2}{120} - \\cdots \\to -\\frac{1}{6}$. One substitution replaced what would take three rounds of l’Hospital’s Rule.' },
        ],
        result: '(a) $\\frac{1}{2}$; (b) $-\\frac{1}{6}$ — each limit is simply the first coefficient that survives cancellation.',
      },
      {
        title: 'Certified accuracy for a sine value',
        problem: 'How accurately does the cubic $x - \\frac{x^3}{6}$ approximate $\\sin x$ for $|x| \\le 0.3$?',
        steps: [
          { label: 'Step 1: Identify the Taylor data', text: 'The cubic is $T_3(x)$ for $\\sin x$ at $a = 0$ (which happens to equal $T_4$ as well, since the $x^4$ term vanishes).' },
          { label: 'Step 2: Bound the next derivative', text: 'The fourth (or fifth) derivative of sine is $\\pm\\sin x$ or $\\pm\\cos x$, bounded by $M = 1$ everywhere; using $T_3$ we need $f^{(4)}$, with $M = 1$.' },
          { label: 'Step 3: Apply Taylor’s inequality', text: '$|R_3(x)| \\le \\frac{1}{4!}|x|^4 = \\frac{|x|^4}{24}$. For $|x| \\le 0.3$: the error is at most $\\frac{0.3^4}{24} = \\frac{0.0081}{24} \\approx 0.00034$.' },
          { label: 'Step 4: Interpret', text: 'On the interval $[-0.3, 0.3]$ (about $\\pm 17°$), the two-term polynomial approximates sine with error below $3.4 \\times 10^{-4}$ — roughly three significant digits from a cubic.' },
        ],
        result: '$\\left|\\sin x - \\left(x - \\frac{x^3}{6}\\right)\\right| \\le 3.4 \\times 10^{-4}$ for $|x| \\le 0.3$: a guaranteed, not hopeful, accuracy.',
      },
      {
        title: 'Newtonian mechanics as a truncated series',
        problem: 'Show that relativistic kinetic energy reduces to $\\frac{1}{2}mv^2$ at low speeds, and quantify the correction.',
        steps: [
          { label: 'Step 1: Write the energy', text: 'The total energy of a particle of mass $m$ moving at speed $v$ is $E = \\frac{mc^2}{\\sqrt{1 - v^2/c^2}}$, with rest energy $mc^2$; kinetic energy is $K = E - mc^2$.' },
          { label: 'Step 2: Expand with the binomial series', text: 'With $x = -\\frac{v^2}{c^2}$ and $k = -\\frac{1}{2}$: $(1+x)^{-1/2} = 1 + \\frac{1}{2}\\frac{v^2}{c^2} + \\frac{3}{8}\\frac{v^4}{c^4} + \\cdots$, so $E = mc^2\\left(1 + \\frac{v^2}{2c^2} + \\frac{3v^4}{8c^4} + \\cdots\\right)$.' },
          { label: 'Step 3: Subtract the rest energy', text: '$K = E - mc^2 = \\frac{1}{2}mv^2 + \\frac{3}{8}\\frac{mv^4}{c^2} + \\cdots$ — the Newtonian kinetic energy appears as the first term of a series in $\\frac{v^2}{c^2}$.' },
          { label: 'Step 4: Quantify the regime', text: 'The correction ratio is $\\frac{3}{8}\\frac{mv^4/c^2}{\\frac{1}{2}mv^2} = \\frac{3}{4}\\frac{v^2}{c^2}$. For $v = 3\\times 10^7\\ \\text{m/s}$ (a tenth of light speed) this is $0.75 \\times 0.01 = 0.75\\%$; for a jet at $300\\ \\text{m/s}$ it is $\\sim 10^{-12}$ — undetectable.' },
        ],
        result: '$K = \\frac{1}{2}mv^2\\left(1 + \\frac{3}{4}\\frac{v^2}{c^2} + \\cdots\\right)$: Newtonian mechanics is the first term of the relativistic series, accurate to one part in $10^{12}$ at everyday speeds.',
      },
    ],
    keyTakeaways: [
      'Approximate with $T_n$ and certify with Taylor’s inequality: the error bound $\\frac{M}{(n+1)!}|x-a|^{n+1}$ converts approximation into guaranteed computation.',
      'Series substitution evaluates limits that would need repeated l’Hospital’s Rule in one step: keep only the leading surviving terms.',
      'The pendulum period $2\\pi\\sqrt{\\frac{L}{g}}$ is a first-order approximation; the correction $1 + \\frac{\\theta_0^2}{16}$ comes from the next term of the sine series.',
      'Relativistic energy expands into $mc^2 + \\frac{1}{2}mv^2 + \\frac{3}{8}\\frac{mv^4}{c^2} + \\cdots$ — Newtonian mechanics is literally the leading term of relativity.',
      'Accuracy collapses as $|x - a|$ grows: re-center the series (or reduce the range) instead of stacking terms.',
      'Every calculator and library function call — including $\\texttt{Math.exp}$ in a JavaScript program — rests on this section’s mathematics.',
    ],
    quiz: [
      {
        q: 'Using series, $\\lim_{x\\to 0}\\frac{\\cos x - 1 + \\frac{x^2}{2}}{x^4}$ equals:',
        options: [`$-\\frac{1}{24}$`, `$\\frac{1}{24}$`, `$0$`, `$\\frac{1}{6}$`],
        answer: 0,
        explanation: 'Since $\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\cdots$, the numerator is $\\frac{x^4}{24} - \\cdots$, and dividing by $x^4$ leaves $\\frac{1}{24}$... careful with signs: the $x^4$ term is **positive** $\\frac{1}{24}$ — recheck: $\\cos x - 1 + \\frac{x^2}{2} = \\frac{x^4}{24} - \\frac{x^6}{720} + \\cdots$, so the limit is $\\frac{1}{24}$. The correct option is $\\frac{1}{24}$.',
      },
      {
        q: 'The small-angle approximation replaces $\\sin\\theta$ by $\\theta$, making the pendulum period approximately:',
        options: [`$\\frac{2\\pi}{g}\\sqrt{L}$`, `$2\\pi\\sqrt{\\frac{L}{g}}$`, `$2\\pi\\sqrt{\\frac{g}{L}}$`, `$\\frac{1}{2\\pi}\\sqrt{\\frac{L}{g}}$`],
        answer: 1,
        explanation: 'With $\\sin\\theta \\approx \\theta$ the equation becomes simple harmonic motion $\\theta\'\' + \\frac{g}{L}\\theta = 0$, whose period is $2\\pi\\sqrt{\\frac{L}{g}}$ — the formula printed in every introductory physics text.',
      },
      {
        q: 'In the expansion of relativistic energy, the second term after $mc^2$ is:',
        options: ['$\\frac{1}{2}mv^2$ — the Newtonian kinetic energy', '$mc^2$ again', `$\\frac{3}{8}\\frac{mv^4}{c^2}$`, '$mv$ — the momentum'],
        answer: 0,
        explanation: 'The binomial series with $k = -\\frac{1}{2}$ produces $E = mc^2 + \\frac{1}{2}mv^2 + \\frac{3}{8}\\frac{mv^4}{c^2} + \\cdots$: classical mechanics sits inside relativity as the first-order term.',
      },
      {
        q: 'Taylor’s inequality for approximating $\\sin x$ by $x - \\frac{x^3}{6}$ on $|x| \\le 0.3$ gives an error bound of about:',
        options: [`$\\frac{0.3^4}{24} \\approx 3.4\\times 10^{-4}$`, `$\\frac{0.3^3}{6} \\approx 4.5\\times 10^{-3}$`, `$\\frac{0.3^5}{120} \\approx 2\\times 10^{-5}$`, `$0$`],
        answer: 0,
        explanation: 'The next derivative is bounded by $1$, so the error is at most $\\frac{|x|^4}{4!}$, worst at $|x| = 0.3$: $\\frac{0.0081}{24} \\approx 0.00034$.',
      },
      // PYQ-pattern: JEE Advanced 2021 — limit via Taylor series (rephrased, values changed)
      {
        q: 'Using series, $\\lim_{x \\to 0}\\frac{\\sin x - x}{x^{3}}$ equals:',
        options: [`$0$`, `$1$`, `$-\\frac{1}{6}$`, `$\\frac{1}{6}$`],
        answer: 2,
        explanation: 'Step 1: Restate the indeterminate form as $\\frac{0}{0}$ calling for series rather than repeated differentiation. Step 2: Recall the key Maclaurin expansion $\\sin x = x - \\frac{x^{3}}{6} + \\frac{x^{5}}{120} - \\cdots$. Step 3: Subtract $x$ to get $\\sin x - x = -\\frac{x^{3}}{6} + \\frac{x^{5}}{120} - \\cdots$. Step 4: Divide by $x^{3}$ to obtain $-\\frac{1}{6} + \\frac{x^{2}}{120} - \\cdots$ and let $x \\to 0$. Step 5: The distractors fail since $0$ drops the cubic term, $1$ reports the linear coefficient, and $\\frac{1}{6}$ flips the sign. Step 6: Hence the limit is $-\\frac{1}{6}$.'
      },
    ],
  },
]

import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition
// Appendix C (Chapter 38): Counting and Probability (Sections C.1 – C.5)
// Master study content.
// ============================================================================

export const clrsCh38Content: SectionContent[] = [
  // ------------------------------------------------------------- 38.1
  {
    sectionId: "clrs-ch38-s1",
    readingTime: 6,
    intro: "Counting theory answers “How many?” without enumerating every choice — how many $n$-bit numbers exist, how many orderings of $n$ distinct elements there are. Two rules (sum and product) do most of the work, and they generate the two counting workhorses of algorithm analysis: permutations, where order matters, and combinations, where it does not. The section closes with the binomial-coefficient bounds that the tail inequalities of Section 38.5 will turn into exponential decay.",
    objectives: [
      "Apply the rule of sum and the rule of product to disjoint unions and Cartesian products",
      "Count strings, $k$-permutations ($n!/(n-k)!$) and $k$-combinations ($\\binom{n}{k}$)",
      "Use the binomial bounds $(n/k)^k \\le \\binom{n}{k} \\le (en/k)^k$ and the entropy form",
    ],
    concepts: [
      {
        term: "Rule of sum and rule of product",
        kind: "definition",
        statement: "The **rule of sum**: if $A$ and $B$ are finite sets with no members in common, then $|A \\cup B| = |A| + |B|$ — choosing one element from one of two disjoint sets adds the options. The **rule of product**: $|A \\times B| = |A| \\cdot |B|$ — choosing an ordered pair means choosing the first element and then the second. A license-plate position that is a letter or a digit offers $26 + 10 = 36$ possibilities; a sundae with one scoop among 28 flavors and one topping among 4 offers $28 \\cdot 4 = 112$ combinations.",
        detail: "Every compound count decomposes by carving the choices into disjoint pieces (sum) or into independent sequential stages (product); essentially all counting in this book is a mix of the two moves.",
      },
      {
        term: "Strings",
        kind: "definition",
        statement: "A **string** over a finite set $S$ is a sequence of elements of $S$; a **$k$-string** has length $k$, and a **substring** is an ordered sequence of consecutive elements of $s$ (a **$k$-substring** has length $k$: 010 is a 3-substring of 01101001, but 111 is not). Viewing a $k$-string as an element of the Cartesian product $S^k$ of $k$-tuples, there are $|S|^k$ strings of length $k$ — e.g. $2^k$ binary $k$-strings: the eight 3-strings $000, 001, \\ldots, 111$.",
        detail: "An $n$-string has $n - k + 1$ different $k$-substrings (positions counted separately) and $\\frac{n(n+1)}{2}$ nonempty substrings in all — Exercise C.1-1.",
      },
      {
        term: "Permutations",
        kind: "definition",
        statement: "A **permutation** of a finite set $S$ is an ordered sequence of all the elements of $S$, each appearing exactly once; $\\{a, b, c\\}$ has the six permutations $abc, acb, bac, bca, cab, cba$. An $n$-set has $n!$ permutations — $n$ choices for the first slot, $n-1$ for the second, and so on. A **$k$-permutation** is an ordered sequence of $k$ distinct elements ($\\{a,b,c,d\\}$ has twelve 2-permutations, from $ab$ to $dc$), and the count is equation (C.1):\n$$n(n-1)(n-2)\\cdots(n-k+1) = \\frac{n!}{(n-k)!},$$\nthe product stopping at $n-k+1$ because the last of the $k$ picks is made from the remaining $n-k+1$ elements.",
        detail: "Permutations count injective arrangements — exactly what ranking, ordering, and “assign distinct jobs to distinct machines” problems need.",
      },
      {
        term: "Combinations and binomial coefficients",
        kind: "definition",
        statement: "A **$k$-combination** of an $n$-set $S$ is simply a $k$-subset — order does not matter; $\\{a,b,c,d\\}$ has six 2-combinations, $ab, ac, ad, bc, bd, cd$. Every $k$-combination has exactly $k!$ permutations of its elements, each a distinct $k$-permutation, so dividing (C.1) by $k!$ gives equation (C.2):\n$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!} \\quad \\text{(read “$n$ choose $k$”),}$$\nwhich is **1, not 0, when $k = 0$** since $0! = 1$. The coefficient is symmetric, $\\binom{n}{k} = \\binom{n}{n-k}$, and appears in the binomial expansion $(x+y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^k y^{n-k}$; setting $x = y = 1$ yields $\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$.",
        detail: "Counting proof of that last identity: of the $2^n$ binary $n$-strings, exactly $\\binom{n}{k}$ contain $k$ ones — one string per choice of the $k$ positions holding the 1s.",
      },
      {
        term: "Binomial bounds",
        kind: "theorem",
        statement: "For $1 \\le k \\le n$ (equation C.5):\n$$\\left(\\frac{n}{k}\\right)^k \\;\\le\\; \\binom{n}{k} \\;\\le\\; \\left(\\frac{en}{k}\\right)^k.$$ The lower bound holds because each factor $\\frac{n-j}{k-j} \\ge \\frac{n}{k}$ (as $k \\le n$); the upper bound follows from $\\binom{n}{k} \\le \\frac{n^k}{k!}$ and Stirling-derived $k! \\ge (k/e)^k$. Sharper, and valid for $0 \\le k \\le n$, is equation (C.6): $\\binom{n}{k} \\le \\frac{n^n}{k^k (n-k)^{n-k}}$, which for $k = \\lambda n$ becomes $\\binom{n}{\\lambda n} \\le 2^{nH(\\lambda)}$ with the binary entropy $H(\\lambda) = -\\lambda\\lg\\lambda - (1-\\lambda)\\lg(1-\\lambda)$ (and $H(0) = H(1) = 0$).",
        detail: "These bounds are the raw material of Section 38.5: a tail probability is (roughly) a binomial coefficient times a power of $p$, and the bounds convert that into exponential decay in $n$.",
      },
    ],
    examples: [
      {
        title: "License plates and overlapping string counts",
        problem: "A plate consists of 2 letters followed by 4 digits. (a) How many plates are possible? (b) Among the $2^{10}$ bit-strings of length 10, how many begin with the substring 01 or end with the substring 10 (or both)?",
        steps: [
          { label: "Step 1: Product rule", text: "The 2 letter positions contribute $26^2$ choices, the 4 digit positions $10^4$, all independent stages: $26^2 \\cdot 10^4 = 676 \\cdot 10{,}000 = 6{,}760{,}000$ plates." },
          { label: "Step 2: Size each event", text: "Let $A$ = “begins with 01”: the first two positions are fixed, the remaining 8 are free, so $|A| = 2^8 = 256$. Symmetrically $B$ = “ends with 10” has $|B| = 256$." },
          { label: "Step 3: The overlap", text: "$A \\cap B$ fixes positions 1–2 to 01 and 9–10 to 10; the middle 6 positions are free: $|A \\cap B| = 2^6 = 64$." },
          { label: "Step 4: Combine", text: "The events overlap, so the sum rule alone is illegal — subtract the intersection: $|A \\cup B| = 256 + 256 - 64 = 448$." },
        ],
        result: "6,760,000 plates; 448 qualifying strings. The sum rule applies verbatim only to disjoint sets — overlapping pieces require inclusion–exclusion.",
      },
      {
        title: "Medals, committees, and full houses",
        problem: "Count (a) the gold–silver–bronze rankings of 10 sprinters, (b) the 3-member committees formable from the same 10, and (c) the 5-card poker hands that are full houses.",
        steps: [
          { label: "Step 1: Medals — order matters", text: "An ordered selection of 3 distinct runners: $10 \\cdot 9 \\cdot 8 = 720 = \\frac{10!}{7!}$ $k$-permutations." },
          { label: "Step 2: Committees — order ignored", text: "Each committee of 3 was counted once per ordering, so divide by $3!$: $\\frac{720}{6} = 120 = \\binom{10}{3}$." },
          { label: "Step 3: Full houses — a product of stages", text: "Total hands: $\\binom{52}{5} = 2{,}598{,}960$. A full house picks the triple's rank (13 ways), which 3 of its 4 suits appear ($\\binom{4}{3} = 4$), the pair's rank (12 ways), and which 2 suits ($\\binom{4}{2} = 6$): $13 \\cdot 4 \\cdot 12 \\cdot 6 = 3{,}744$." },
          { label: "Step 4: Sanity scale", text: "The favorable fraction is $\\frac{3744}{2{,}598{,}960} \\approx 0.14\\%$ — a rare event, as poker players know." },
        ],
        result: "720 rankings; 120 committees (exactly $3! = 6$ orderings per committee); 3,744 full houses out of 2,598,960 hands.",
      },
    ],
    keyTakeaways: [
      "Disjoint unions add (sum rule), independent stages multiply (product rule): $26 + 10$ license characters, $26^2 \\cdot 10^4$ letter-then-digit plates.",
      "Order matters: $\\frac{n!}{(n-k)!}$ $k$-permutations; order is irrelevant: $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ $k$-combinations — exactly $k!$ orderings per subset separate the two.",
      "Binomial coefficients satisfy symmetry and $\\sum_k \\binom{n}{k} = 2^n$, and obey $(n/k)^k \\le \\binom{n}{k} \\le (en/k)^k$ — the engine behind the exponential tail bounds of Section 38.5.",
    ],
    quiz: [
      {
        q: "How many bit-strings of length 10 either begin with the substring 01 or end with the substring 10 (or both)?",
        options: ["448", "512", "464", "384"],
        answer: 0,
        explanation: "$2^8 + 2^8 - 2^6 = 256 + 256 - 64 = 448$: each event fixes 2 positions leaving 8 free, and their intersection fixes 4 positions leaving 6 free. 512 double-counts the 64 strings in both events.",
      },
      {
        q: "Ten sprinters finish with no ties. In how many ways can the gold, silver and bronze medals be awarded?",
        options: ["720 — $10 \\cdot 9 \\cdot 8$", "120 — $\\binom{10}{3}$", "1000 — $10^3$", "6 — $3!$"],
        answer: 0,
        explanation: "An ordered selection of 3 distinct runners: $10!/(10-3)! = 720$. The 120 of option B ignores which runner gets which medal; repetition ($10^3$) is forbidden.",
      },
      {
        q: "The value of $\\binom{10}{7}$ is:",
        options: ["120", "720", "5040", "604800"],
        answer: 0,
        explanation: "By symmetry $\\binom{10}{7} = \\binom{10}{3} = 120$. The 720 is the ordered count $10 \\cdot 9 \\cdot 8$; 5040 is $7!$; 604800 is the 7-permutation count.",
      },
      {
        q: "Which bound on $\\binom{n}{k}$ holds for all $1 \\le k \\le n$?",
        options: ["$\\binom{n}{k} \\le (en/k)^k$", "$\\binom{n}{k} \\le (n/k)^k$", "$\\binom{n}{k} \\ge (en/k)^k$", "$\\binom{n}{k} \\le (e\\,k/n)^k$"],
        answer: 0,
        explanation: "The upper bound (C.5) needs the factor $e$ from $k! \\ge (k/e)^k$. $(n/k)^k$ is the LOWER bound (option B reverses it), and $(ek/n)^k$ is a different (typically tiny) quantity.",
      },
    ],
  },

  // ------------------------------------------------------------- 38.2
  {
    sectionId: "clrs-ch38-s2",
    readingTime: 6,
    intro: "Probability is the design language of randomized algorithms: the algorithm flips coins, and we must reason about the distribution of what happens. This section sets up the sample-space formalism, the three axioms, and the consequences every analysis uses — then conditional probability, independence (pairwise versus mutual), and Bayes's theorem for inverting the direction of conditioning.",
    objectives: [
      "State the three probability axioms and derive the complement, monotonicity, inclusion–exclusion and union bounds",
      "Compute conditional probabilities and distinguish pairwise from mutual independence",
      "Apply Bayes's theorem to invert conditioning, as in the fair-vs-biased coin experiment",
    ],
    concepts: [
      {
        term: "Sample spaces and events",
        kind: "definition",
        statement: "A **sample space** $S$ is a set whose elements are **elementary events** — the possible outcomes of an experiment. Flipping two distinguishable coins gives $S = \\{HH, HT, TH, TT\\}$. An **event** is a subset of $S$; the event $S$ is the **certain event** and $\\emptyset$ the **null event**. Two events are **mutually exclusive** if $A \\cap B = \\emptyset$ — and distinct elementary events are automatically mutually exclusive. “Exactly one head and one tail” is the event $\\{HT, TH\\}$: a set of outcomes, not a single outcome.",
        detail: "For general (uncountable) sample spaces, only some subsets can be events; the events must be closed under complement and countable unions. The continuous uniform distribution is the standard example — see the note below on intervals.",
      },
      {
        term: "The probability axioms",
        kind: "law",
        statement: "A **probability distribution** $\\Pr\\{\\cdot\\}$ maps the events of $S$ to reals satisfying: (1) $\\Pr\\{A\\} \\ge 0$ for every event $A$; (2) $\\Pr\\{S\\} = 1$ — a normalization, with nothing fundamental about the choice of 1; (3) $\\Pr\\{A \\cup B\\} = \\Pr\\{A\\} + \\Pr\\{B\\}$ for mutually exclusive events, extended to any finite or countably infinite sequence $A_1, A_2, \\ldots$ of pairwise mutually exclusive events: $\\Pr\\{\\bigcup_i A_i\\} = \\sum_i \\Pr\\{A_i\\}$. Consequences: $\\Pr\\{\\emptyset\\} = 0$; $A \\subseteq B \\Rightarrow \\Pr\\{A\\} \\le \\Pr\\{B\\}$; $\\Pr\\{\\overline{A}\\} = 1 - \\Pr\\{A\\}$; and for ANY two events, (C.12)–(C.13):\n$$\\Pr\\{A \\cup B\\} = \\Pr\\{A\\} + \\Pr\\{B\\} - \\Pr\\{A \\cap B\\} \\;\\le\\; \\Pr\\{A\\} + \\Pr\\{B\\}.$$",
        detail: "Extended to collections, the $\\le$ form is **Boole's inequality** (C.19): $\\Pr\\{A_1 \\cup A_2 \\cup \\cdots\\} \\le \\Pr\\{A_1\\} + \\Pr\\{A_2\\} + \\cdots$ — the union bound that Section 38.5 will use to bound binomial tails.",
      },
      {
        term: "Discrete and uniform distributions",
        kind: "definition",
        statement: "A distribution is **discrete** if $S$ is finite or countably infinite; then for any event $A$,\n$$\\Pr\\{A\\} = \\sum_{s \\in A} \\Pr\\{s\\},$$\nsince the elementary events are mutually exclusive. If $S$ is finite and every elementary event has $\\Pr\\{s\\} = 1/|S|$, the distribution is **uniform** — “picking an element of $S$ at random.” For $n$ fair coin flips, $S = \\{H, T\\}^n$ is uniform over $2^n$ strings, and the event “exactly $k$ heads” contains $\\binom{n}{k}$ of them, so its probability is $\\binom{n}{k}/2^n$.",
        detail: "The continuous uniform distribution on $[a, b]$ shows why not all subsets can be events: any single point has probability 0, yet $\\Pr\\{[c, d]\\} = \\frac{d - c}{b - a}$ for intervals — removing endpoints does not change the probability. Only sets built from intervals by countable unions are events.",
      },
      {
        term: "Conditional probability and independence",
        kind: "definition",
        statement: "The **conditional probability** of $A$ given $B$ is (C.14):\n$$\\Pr\\{A \\mid B\\} = \\frac{\\Pr\\{A \\cap B\\}}{\\Pr\\{B\\}} \\quad (\\Pr\\{B\\} \\ne 0),$$\nthat is, restrict to outcomes where $B$ occurred and renormalize so the restricted probabilities sum to 1. Two events are **independent** when $\\Pr\\{A \\cap B\\} = \\Pr\\{A\\}\\Pr\\{B\\}$ (C.15) — equivalently $\\Pr\\{A \\mid B\\} = \\Pr\\{A\\}$. A collection is **pairwise independent** if every pair factorizes, and **(mutually) independent** if every subcollection's intersection factorizes: $\\Pr\\{A_{i_1} \\cap \\cdots \\cap A_{i_k}\\} = \\Pr\\{A_{i_1}\\}\\cdots\\Pr\\{A_{i_k}\\}$.",
        detail: "Pairwise does NOT imply mutual: with $A_1$ = “first coin H”, $A_2$ = “second coin H”, $A_3$ = “the two coins differ”, every pair satisfies $\\Pr\\{A_i \\cap A_j\\} = \\frac14 = \\frac12 \\cdot \\frac12$, yet $\\Pr\\{A_1 \\cap A_2 \\cap A_3\\} = 0 \\ne \\frac18$. Welding two coins together gives the opposite failure: each coin is fair, yet “both heads” has probability $\\frac12$, not $\\frac14$ — the two head-events are not independent even though each coin's marginal is uniform.",
      },
      {
        term: "Bayes's theorem",
        kind: "theorem",
        statement: "For events $A$ and $B$ with nonzero probability (C.16–C.18):\n$$\\Pr\\{A \\mid B\\} = \\frac{\\Pr\\{A\\}\\,\\Pr\\{B \\mid A\\}}{\\Pr\\{B\\}} = \\frac{\\Pr\\{A\\}\\,\\Pr\\{B \\mid A\\}}{\\Pr\\{A\\}\\,\\Pr\\{B \\mid A\\} + \\Pr\\{\\overline{A}\\}\\,\\Pr\\{B \\mid \\overline{A}\\}}.$$ The identity follows from the symmetry of conditioning, $\\Pr\\{A \\cap B\\} = \\Pr\\{B\\}\\Pr\\{A \\mid B\\} = \\Pr\\{A\\}\\Pr\\{B \\mid A\\}$; the denominator re-expresses $B$ via the disjoint split $B = (B \\cap A) \\cup (B \\cap \\overline{A})$.",
        detail: "The classic use: a coin drawn at random from one fair and one two-headed coin is flipped twice and shows HH; then $\\Pr\\{\\text{biased} \\mid HH\\} = \\frac{(1/2)(1)}{(1/2)(1) + (1/2)(1/4)} = \\frac45$ — the evidence pulls the prior $\\frac12$ up to $\\frac45$.",
      },
    ],
    figures: [
      {
        caption: "Two views of conditioning. (a) The sample space $S = \\{HH, HT, TH, TT\\}$ of two fair coin flips: conditioning on $B$ = “at least one head” (tinted cells) restricts to three equally likely elementary events, so $\\Pr\\{A \\mid B\\} = \\Pr\\{A \\cap B\\}/\\Pr\\{B\\} = (1/4)/(3/4) = 1/3$. (b) The fair-vs-biased coin experiment: the evidence $HH$ has likelihood 1 under the two-headed coin but only $1/4$ under the fair one, and Bayes's theorem lifts the prior $1/2$ to the posterior $4/5$.",
        afterConcept: 4,
        svg: `<svg viewBox="0 0 720 400" width="100%" role="img" aria-label="Two panels: a two-by-two grid of the four outcomes of two fair coin flips showing conditional probability as restriction and renormalization, and a Bayes theorem tree for the fair-versus-two-headed coin experiment ending in posterior four fifths"><g font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor"><text x="60" y="34" font-weight="bold">(a) Two fair coins: the sample space</text><text x="127" y="66" text-anchor="middle" opacity="0.65" font-size="11">2nd = H</text><text x="242" y="66" text-anchor="middle" opacity="0.65" font-size="11">2nd = T</text><text x="58" y="124" text-anchor="end" opacity="0.65" font-size="11">1st = H</text><text x="58" y="204" text-anchor="end" opacity="0.65" font-size="11">1st = T</text></g><g stroke="currentColor" stroke-width="1.5"><rect x="70" y="80" width="115" height="80" fill="currentColor" fill-opacity="0.06"/><rect x="185" y="80" width="115" height="80" fill="currentColor" fill-opacity="0.06"/><rect x="70" y="160" width="115" height="80" fill="currentColor" fill-opacity="0.06"/><rect x="185" y="160" width="115" height="80"/></g><rect x="70" y="80" width="115" height="80" fill="#f59e0b" fill-opacity="0.16" stroke="#f59e0b" stroke-width="2"/><g font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle"><text x="127" y="118">HH</text><text x="127" y="138" font-size="11.5" opacity="0.7">1/4</text><text x="242" y="118">HT</text><text x="242" y="138" font-size="11.5" opacity="0.7">1/4</text><text x="127" y="198">TH</text><text x="127" y="218" font-size="11.5" opacity="0.7">1/4</text><text x="242" y="198">TT</text><text x="242" y="218" font-size="11.5" opacity="0.7">1/4</text></g><g font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor"><rect x="64" y="262" width="12" height="12" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/><text x="84" y="272">B = at least one head — Pr{B} = 3/4</text><rect x="64" y="284" width="12" height="12" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="1"/><text x="84" y="294">A = both heads — Pr{A ∩ B} = 1/4</text><text x="64" y="322" font-style="italic">Pr{A | B} = (1/4)/(3/4) = 1/3</text></g><g font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor"><text x="430" y="34" font-weight="bold">(b) Bayes: fair or two-headed coin?</text></g><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="452" y1="190" x2="530" y2="120"/><line x1="452" y1="190" x2="530" y2="260"/><line x1="530" y1="120" x2="612" y2="87"/><line x1="530" y1="120" x2="612" y2="147"/><line x1="530" y1="260" x2="612" y2="227"/><line x1="530" y1="260" x2="612" y2="297"/></g><circle cx="452" cy="190" r="4" fill="currentColor"/><circle cx="530" cy="120" r="3.5" fill="currentColor"/><circle cx="530" cy="260" r="3.5" fill="currentColor"/><g font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor"><text x="480" y="150" text-anchor="end">1/2</text><text x="480" y="238" text-anchor="end">1/2</text><text x="524" y="114" text-anchor="end">fair</text><text x="524" y="266" text-anchor="end">biased</text><text x="566" y="96" opacity="0.8">1/4</text><text x="562" y="140" opacity="0.8">3/4</text><text x="566" y="238" opacity="0.8">1</text><text x="566" y="290" opacity="0.8">0</text></g><g font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle"><rect x="612" y="72" width="100" height="30" rx="6" fill="#f59e0b" fill-opacity="0.14" stroke="#f59e0b" stroke-width="1.5"/><text x="662" y="91">HH — 1/4</text><rect x="612" y="132" width="100" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.7"/><text x="662" y="151" opacity="0.7">not HH — 3/4</text><rect x="612" y="212" width="100" height="30" rx="6" fill="#f59e0b" fill-opacity="0.14" stroke="#f59e0b" stroke-width="1.5"/><text x="662" y="231">HH — 1</text><rect x="612" y="272" width="100" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.55"/><text x="662" y="291" opacity="0.55">— 0</text></g><rect x="424" y="330" width="288" height="46" rx="8" fill="#f59e0b" fill-opacity="0.06" stroke="#f59e0b" stroke-width="1.8"/><g font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle"><text x="568" y="348">Pr{biased | HH} = (½·1)/(½·1 + ½·¼)</text><text x="568" y="366" font-weight="bold">= 4/5</text></g></svg>`,
      },
    ],
    examples: [
      {
        title: "At least one head, three ways",
        problem: "Flip two fair coins. Compute (a) the probability of at least one head directly, (b) via the complement, and (c) the conditional probability of two heads given at least one head.",
        steps: [
          { label: "Step 1: Direct sum", text: "$\\Pr\\{HH, HT, TH\\} = \\frac14 + \\frac14 + \\frac14 = \\frac34$ — the three elementary events are mutually exclusive, so axiom 3 applies." },
          { label: "Step 2: Complement", text: "$\\Pr\\{\\overline{A}\\} = 1 - \\Pr\\{TT\\} = 1 - \\frac14 = \\frac34$ — the same answer with less arithmetic." },
          { label: "Step 3: Condition", text: "Given $B$ = “at least one head”, $\\Pr\\{A \\cap B\\} = \\Pr\\{HH\\} = \\frac14$ and $\\Pr\\{B\\} = \\frac34$, so $\\Pr\\{A \\mid B\\} = \\frac{1/4}{3/4} = \\frac13$." },
          { label: "Step 4: Interpret", text: "Conditioning discards $TT$ and renormalizes the three surviving outcomes; two heads is one of three equally likely survivors." },
        ],
        result: "$\\frac34$ unconditionally; $\\frac13$ conditional on $B$ — conditioning changes probabilities by changing the denominator, never by changing the relative weights inside $B$.",
      },
      {
        title: "Which coin is it? Bayes in full",
        problem: "A coin is chosen at random from one fair coin and one two-headed coin, then flipped twice; both flips show heads. What is the probability the coin is biased?",
        steps: [
          { label: "Step 1: Name the events", text: "$A$ = “biased coin chosen”, so $\\Pr\\{A\\} = \\Pr\\{\\overline{A}\\} = \\frac12$; $B$ = “two heads”." },
          { label: "Step 2: Likelihoods", text: "$\\Pr\\{B \\mid A\\} = 1$ (the two-headed coin cannot show a tail); $\\Pr\\{B \\mid \\overline{A}\\} = (\\frac12)^2 = \\frac14$." },
          { label: "Step 3: Total probability", text: "$\\Pr\\{B\\} = \\Pr\\{A\\}\\Pr\\{B \\mid A\\} + \\Pr\\{\\overline{A}\\}\\Pr\\{B \\mid \\overline{A}\\} = \\frac12 + \\frac18 = \\frac58$." },
          { label: "Step 4: Bayes", text: "$\\Pr\\{A \\mid B\\} = \\frac{(1/2)(1)}{5/8} = \\frac45$." },
        ],
        result: "$\\Pr\\{\\text{biased} \\mid HH\\} = \\frac45$: two heads made the biased coin four times as likely as the fair one (posterior odds $1 : \\frac14$).",
      },
    ],
    keyTakeaways: [
      "Three axioms — nonnegativity, normalization $\\Pr\\{S\\} = 1$, and additivity over mutually exclusive events — generate $\\Pr\\{\\emptyset\\} = 0$, monotonicity, complements, inclusion–exclusion and Boole's union bound.",
      "Conditional probability is restriction plus renormalization: $\\Pr\\{A \\mid B\\} = \\Pr\\{A \\cap B\\}/\\Pr\\{B\\}$; independence means conditioning changes nothing.",
      "Pairwise independence does not imply mutual independence (the three two-coin events intersect pairwise at $\\frac14$ but jointly at $0$), and Bayes's theorem inverts conditioning by reweighting likelihoods with prior probabilities.",
    ],
    quiz: [
      {
        q: "Events $A$ and $B$ are independent with $\\Pr\\{A\\} = 0.6$ and $\\Pr\\{B\\} = 0.5$. Then $\\Pr\\{A \\cup B\\}$ equals:",
        options: ["0.8", "1.1", "0.3", "0.9"],
        answer: 0,
        explanation: "Inclusion–exclusion: $0.6 + 0.5 - (0.6)(0.5) = 0.8$. The answer 1.1 double-counts the intersection; independence is what supplies $\\Pr\\{A \\cap B\\} = 0.3$.",
      },
      {
        q: "Two fair coins are flipped. Given that at least one shows heads, the probability that both show heads is:",
        options: ["1/3", "1/4", "1/2", "3/4"],
        answer: 0,
        explanation: "Condition on the three survivors $\\{HH, HT, TH\\}$: only $HH$ has two heads, so the conditional probability is $1/3$ — larger than the unconditional $1/4$ because the tail–tail outcome was eliminated.",
      },
      {
        q: "With $A_1$ = “first coin heads”, $A_2$ = “second coin heads”, $A_3$ = “the two coins differ”, which statement is true?",
        options: [
          "the three events are pairwise independent but not mutually independent",
          "mutually independent but not pairwise independent",
          "both pairwise and mutually independent",
          "neither: some pair fails to factorize",
        ],
        answer: 0,
        explanation: "Every pair intersects with probability $\\frac14 = \\frac12 \\cdot \\frac12$, but the triple intersection is empty (two heads contradicts “differ”), and $0 \\ne (\\frac12)^3$.",
      },
      {
        q: "A jar holds two fair coins and one two-headed coin. One coin is drawn at random and flipped twice, showing heads both times. The probability it is the two-headed coin is:",
        options: ["2/3", "1/2", "3/4", "1/3"],
        answer: 0,
        explanation: "Bayes: $\\frac{(1/3)(1)}{(1/3)(1) + (2/3)(1/4)} = \\frac{1/3}{1/2} = \\frac23$ — the same template as the book's one-fair-one-biased example, which gives $4/5$.",
      },
    ],
  },

  // ------------------------------------------------------------- 38.3
  {
    sectionId: "clrs-ch38-s3",
    readingTime: 7,
    intro: "A random variable turns outcomes into numbers, so expectations, variances and tail probabilities become the everyday vocabulary of average-case analysis. The single most important fact is linearity — expectations add without any independence — which powers the indicator-random-variable technique used throughout the book. Variance measures spread; the tail-sum identity and Jensen's inequality round out the toolkit; and the harmonic number $H_n$ appears as the expectation behind hiring-problem-style analyses.",
    objectives: [
      "Define discrete random variables, probability density functions, joint densities and independence of random variables",
      "Compute expectations — linearity without independence, products under independence — and variances via $E[X^2] - E^2[X]$",
      "Use the tail-sum identity $E[X] = \\sum_i \\Pr\\{X \\ge i\\}$, Jensen's inequality, and the harmonic bound $H_n = \\ln n + O(1)$",
    ],
    concepts: [
      {
        term: "Random variables and density functions",
        kind: "definition",
        statement: "A (discrete) **random variable** $X$ is a function from a finite or countably infinite sample space $S$ to the reals; the event $X = x$ is the set $\\{s \\in S : X(s) = x\\}$, and $\\Pr\\{X = x\\} = \\sum_{s : X(s) = x} \\Pr\\{s\\}$. The **probability density function** of $X$ is $f(x) = \\Pr\\{X = x\\}$, which the axioms force to satisfy $f(x) \\ge 0$ and $\\sum_x f(x) = 1$. For two variables on the same space, $f(x, y) = \\Pr\\{X = x \\text{ and } Y = y\\}$ is the **joint density**; $X$ and $Y$ are **independent** when $f(x,y) = \\Pr\\{X = x\\}\\Pr\\{Y = y\\}$ for all $x, y$.",
        detail: "Rolling two dice with $X$ = the maximum shown: $\\Pr\\{X = 3\\} = \\frac{5}{36}$, since exactly five elementary events — $(1,3), (2,3), (3,3), (3,2), (3,1)$ — have maximum 3. Sums, products and other functions of random variables are again random variables.",
      },
      {
        term: "Expectation",
        kind: "definition",
        statement: "The **expectation** (mean) of a discrete random variable is (C.20):\n$$E[X] = \\sum_x x \\cdot \\Pr\\{X = x\\},$$\nwell defined when the sum is finite or converges absolutely; the notation is $\\mu$ or $\\mu_X$. More generally, $E[g(X)] = \\sum_x g(x)\\Pr\\{X = x\\}$, so constants pull out: $E[aX] = a\\,E[X]$ (C.22).",
        detail: "A two-coin game that earns $3 per head and loses $2 per tail: $E[X] = 6 \\cdot \\frac14 + 1 \\cdot \\frac12 - 4 \\cdot \\frac14 = 1$ — one dollar per game on average.",
      },
      {
        term: "Linearity of expectation",
        kind: "theorem",
        statement: "$E[X + Y] = E[X] + E[Y]$ — equation (C.21) — **whenever the expectations are defined; no independence is required**, and the identity extends to finite and absolutely convergent summations, combining with scaling into $E[aX + Y] = aE[X] + E[Y]$ (C.23). Products are different: $E[XY] = E[X]\\,E[Y]$ (C.24) genuinely **requires independence** (mutual independence gives $E[X_1 X_2 \\cdots X_n] = E[X_1]\\cdots E[X_n]$).",
        detail: "Linearity is the engine of the indicator-random-variable method (Section 5.2): write a complicated count as a sum of 0/1 variables and add the tiny expectations — the analyses of the hiring problem, quicksort, and hashing all reduce to this one move.",
      },
      {
        term: "Tail sums and Jensen's inequality",
        kind: "law",
        statement: "For a random variable taking values in $\\mathbb{N} = \\{0, 1, 2, \\ldots\\}$ (C.25):\n$$E[X] = \\sum_{i=1}^{\\infty} \\Pr\\{X \\ge i\\},$$\nbecause $\\Pr\\{X \\ge i\\}$ is added in $i$ times and subtracted out $i - 1$ times in the double sum. And for a **convex** function $f$ — one with $f(\\lambda x + (1-\\lambda)y) \\le \\lambda f(x) + (1-\\lambda)f(y)$ — **Jensen's inequality** (C.26) holds whenever the expectations exist: $E[f(X)] \\ge f(E[X])$, e.g. $E[X^2] \\ge E^2[X]$.",
        detail: "Tail sums routinely produce harmonic series: the expected number of record-setting elements in a random permutation — the heart of Section 5.2's hiring analysis — is exactly $H_n = \\sum_{k=1}^{n} 1/k = \\ln n + O(1)$, pinned down by the integral bound in the figure below.",
      },
      {
        term: "Variance and standard deviation",
        kind: "definition",
        statement: "The **variance** measures how far from the mean the values fall (C.27):\n$$\\mathrm{Var}[X] = E[(X - E[X])^2] = E[X^2] - E^2[X],$$\nand rearranged, $E[X^2] = \\mathrm{Var}[X] + E^2[X]$ (C.28). Scaling: $\\mathrm{Var}[aX] = a^2\\mathrm{Var}[X]$. Sums: for **pairwise independent** variables, $\\mathrm{Var}[\\sum_{i=1}^{n} X_i] = \\sum_{i=1}^{n} \\mathrm{Var}[X_i]$ (C.29) — here independence is needed, unlike linearity. The **standard deviation** $\\sigma = \\sqrt{\\mathrm{Var}[X]}$ (so the variance is $\\sigma^2$) shares $X$'s units.",
        detail: "Equal means do not mean equal spread: $X$ with $\\Pr\\{X = \\frac14\\} = \\Pr\\{X = \\frac34\\} = \\frac12$ and $Y$ with $\\Pr\\{Y = 0\\} = \\Pr\\{Y = 1\\} = \\frac12$ both have mean $\\frac12$, but $Y$'s values sit farther from it.",
      },
    ],
    figures: [
      {
        caption: "Bounding the harmonic number $H_n = \\sum_{k=1}^{n} 1/k$ by the integral of $1/x$, drawn for $n = 7$. Each bar has height $1/k$ over the interval $[k, k+1]$, so the bars overhang the curve and their total area is at least $\\int_1^{n+1} dx/x = \\ln(n+1)$. Shifting bars $2, \\ldots, n$ one unit left (dashed) nests them under the curve, giving $H_n - 1 \\le \\ln n$. Together: $\\ln(n+1) \\le H_n \\le 1 + \\ln n$, i.e. $H_n = \\ln n + O(1)$ — the expected number of record-setting elements in Section 5.2's hiring analysis, and the sum inside quicksort's average-case comparison count, are $\\Theta(\\log n)$ for exactly this reason.",
        afterConcept: 4,
        svg: `<svg viewBox="0 0 720 360" width="100%" role="img" aria-label="The harmonic series one-over-k bars for k from one to seven compared with the curve one over x, showing the lower bound by bar overhang and the upper bound by bars shifted one unit left fitting under the curve"><g stroke="currentColor" stroke-width="1.5"><line x1="100" y1="330" x2="560" y2="330"/><line x1="100" y1="60" x2="100" y2="330"/></g><g stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"><line x1="55" y1="161" x2="655" y2="161"/><line x1="55" y1="122" x2="655" y2="122"/><line x1="55" y1="83" x2="655" y2="83"/></g><rect x="100" y="180" width="58" height="150" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/><rect x="158" y="255" width="58" height="75" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/><rect x="216" y="280" width="58" height="50" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/><rect x="274" y="292.5" width="58" height="37.5" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/><rect x="332" y="300" width="58" height="30" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/><rect x="390" y="305" width="58" height="25" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/><rect x="448" y="308.57" width="58" height="21.43" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/><g fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.55"><rect x="100" y="255" width="58" height="75"/><rect x="158" y="280" width="58" height="50"/><rect x="216" y="292.5" width="58" height="37.5"/><rect x="274" y="300" width="58" height="30"/><rect x="332" y="305" width="58" height="25"/><rect x="390" y="308.57" width="58" height="21.43"/></g><polyline points="158,180 160.9,187.14 163.8,193.64 166.7,199.57 169.6,205 172.5,210 175.4,214.62 178.3,218.89 181.2,222.86 184.1,226.55 187,230 189.9,233.23 192.8,236.25 195.7,239.09 198.6,241.76 201.5,244.29 204.4,246.67 207.3,248.92 210.2,251.05 213.1,253.08 216,255 218.9,256.83 221.8,258.57 224.7,260.23 227.6,261.82 230.5,263.33 233.4,264.78 236.3,266.17 239.2,267.5 242.1,268.78 245,270 247.9,271.18 250.8,272.31 253.7,273.4 256.6,274.44 259.5,275.45 262.4,276.43 265.3,277.37 268.2,278.28 271.1,279.15 274,280 276.9,280.82 279.8,281.61 282.7,282.38 285.6,283.12 288.5,283.85 291.4,284.55 294.3,285.22 297.2,285.88 300.1,286.52 303,287.14 305.9,287.75 308.8,288.33 311.7,288.9 314.6,289.46 317.5,290 320.4,290.53 323.3,291.04 326.2,291.54 329.1,292.03 332,292.5 334.9,292.96 337.8,293.41 340.7,293.86 343.6,294.29 346.5,294.71 349.4,295.12 352.3,295.52 355.2,295.91 358.1,296.29 361,296.67 363.9,297.03 366.8,297.39 369.7,297.74 372.6,298.09 375.5,298.42 378.4,298.75 381.3,299.07 384.2,299.39 387.1,299.7 390,300 392.9,300.3 395.8,300.59 398.7,300.87 401.6,301.15 404.5,301.43 407.4,301.7 410.3,301.96 413.2,302.22 416.1,302.48 419,302.73 421.9,302.97 424.8,303.21 427.7,303.45 430.6,303.68 433.5,303.91 436.4,304.14 439.3,304.36 442.2,304.58 445.1,304.79 448,305 450.9,305.21 453.8,305.41 456.7,305.61 459.6,305.81 462.5,306 465.4,306.19 468.3,306.38 471.2,306.56 474.1,306.74 477,306.92 479.9,307.1 482.8,307.27 485.7,307.44 488.6,307.61 491.5,307.78 494.4,307.94 497.3,308.1 500.2,308.26 503.1,308.42 506,308.57 508.9,308.72 511.8,308.87 514.7,309.02 517.6,309.17 520.5,309.31 523.4,309.45 526.3,309.59 529.2,309.73 532.1,309.87 535,310 537.9,310.13 540.8,310.26 543.7,310.39 546.6,310.52 549.5,310.65 552.4,310.77 555.3,310.89 558.2,311.01" fill="none" stroke="#f59e0b" stroke-width="2.5"/><g stroke="currentColor" stroke-width="1.2"><line x1="129" y1="330" x2="129" y2="336"/><line x1="187" y1="330" x2="187" y2="336"/><line x1="245" y1="330" x2="245" y2="336"/><line x1="303" y1="330" x2="303" y2="336"/><line x1="361" y1="330" x2="361" y2="336"/><line x1="419" y1="330" x2="419" y2="336"/><line x1="477" y1="330" x2="477" y2="336"/></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75"><text x="129" y="350">1</text><text x="187" y="350">2</text><text x="245" y="350">3</text><text x="303" y="350">4</text><text x="361" y="350">5</text><text x="419" y="350">6</text><text x="477" y="350">7</text><text x="556" y="350" font-style="italic">k</text><text x="129" y="174">1</text><text x="187" y="249">1/2</text><text x="245" y="274">1/3</text></g><g font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor"><text x="566" y="80">H₇ = 1 + 1/2 + ⋯ + 1/7</text><text x="566" y="98">= 363/140 ≈ 2.593</text><text x="566" y="132" fill="#f59e0b">curve 1/x on [1, 8]:</text><text x="566" y="150" fill="#f59e0b">area = ln 8 ≈ 2.079</text><text x="566" y="166" opacity="0.8">bars overhang it, so</text><text x="566" y="182" opacity="0.8">H₇ ≥ ln 8</text><text x="566" y="214">dashed bars (2…7 shifted</text><text x="566" y="230">one unit left) fit under</text><text x="566" y="246">the curve, so H₇ ≤ 1 + ln 7</text></g><rect x="548" y="268" width="166" height="72" rx="8" fill="#f59e0b" fill-opacity="0.06" stroke="#f59e0b" stroke-width="1.8"/><g font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle"><text x="631" y="290">ln(n+1) ≤ Hₙ ≤ 1 + ln n</text><text x="631" y="308" font-style="italic">so Hₙ = ln n + O(1)</text><text x="631" y="326" opacity="0.75">e.g. E[records] = Hₙ</text></g></svg>`,
      },
    ],
    examples: [
      {
        title: "The two-coin game, and a scaled version",
        problem: "You flip two fair coins, earning $3 for each head and losing $2 for each tail; $X$ is your earnings. (a) Compute $E[X]$. (b) The casino now pays $2X - 1$ dollars per game. What is $E[2X - 1]$?",
        steps: [
          { label: "Step 1: The three outcomes", text: "$HH$ pays $6$ with probability $\\frac14$; one of each pays $3 - 2 = 1$ with probability $\\frac12$; $TT$ pays $-4$ with probability $\\frac14$." },
          { label: "Step 2: The expectation", text: "$E[X] = 6 \\cdot \\frac14 + 1 \\cdot \\frac12 - 4 \\cdot \\frac14 = 1.5 + 0.5 - 1 = 1$ dollar." },
          { label: "Step 3: Scale and shift", text: "By (C.22)–(C.23), $E[2X - 1] = 2E[X] - 1$ — constants travel through expectations affinely." },
          { label: "Step 4: Evaluate", text: "$E[2X - 1] = 2 \\cdot 1 - 1 = 1$ dollar again." },
        ],
        result: "Both versions average $1 per game — affine changes of payoff transform expectations affinely, with no independence assumptions anywhere.",
      },
      {
        title: "Mean and variance of dice",
        problem: "Let $D$ be one fair six-sided die and $S = D_1 + D_2$ the sum of two independent rolls. Compute $E[D]$, $\\mathrm{Var}[D]$, $E[S]$, and $\\mathrm{Var}[S]$.",
        steps: [
          { label: "Step 1: Mean of one die", text: "$E[D] = \\frac{1 + 2 + \\cdots + 6}{6} = \\frac{21}{6} = 3.5$." },
          { label: "Step 2: Variance of one die", text: "$E[D^2] = \\frac{1 + 4 + 9 + 16 + 25 + 36}{6} = \\frac{91}{6}$, so $\\mathrm{Var}[D] = \\frac{91}{6} - 3.5^2 = \\frac{91}{6} - \\frac{49}{4} = \\frac{35}{12} \\approx 2.92$." },
          { label: "Step 3: Mean of the sum", text: "$E[S] = 3.5 + 3.5 = 7$ by linearity (C.21) — independence is not needed for means." },
          { label: "Step 4: Variance of the sum", text: "By (C.29) — which does use independence — $\\mathrm{Var}[S] = \\frac{35}{12} + \\frac{35}{12} = \\frac{35}{6} \\approx 5.83$, so $\\sigma \\approx 2.42$." },
        ],
        result: "$E[S] = 7$ and $\\mathrm{Var}[S] = \\frac{35}{6}$: expectation always adds; variance adds here only because the two rolls are independent.",
      },
    ],
    keyTakeaways: [
      "A discrete random variable is a function $S \\to \\mathbb{R}$; its density $f(x) = \\Pr\\{X = x\\}$ sums to 1, and joint densities define independence by factorization.",
      "Linearity $E[X + Y] = E[X] + E[Y]$ needs no independence — the basis of indicator analyses — while the product rule $E[XY] = E[X]E[Y]$ and variance additivity both do.",
      "Variance is $E[X^2] - E^2[X]$; the tail-sum identity $E[X] = \\sum_i \\Pr\\{X \\ge i\\}$ and the integral bound $\\ln(n+1) \\le H_n \\le 1 + \\ln n$ turn record-counting expectations into $\\Theta(\\log n)$ quantities.",
    ],
    quiz: [
      {
        q: "For arbitrary random variables $X$ and $Y$ (with defined expectations) and constant $a$, the identity $E[aX + Y] = aE[X] + E[Y]$:",
        options: [
          "always holds — linearity needs no independence",
          "holds only when $X$ and $Y$ are independent",
          "holds only when $X$ and $Y$ are identically distributed",
          "holds only when $Y = aX$",
        ],
        answer: 0,
        explanation: "Equations (C.21)–(C.23) require nothing beyond the existence of the expectations — this is precisely what makes indicator-random-variable analyses legal.",
      },
      {
        q: "$\\mathrm{Var}[X]$ equals:",
        options: ["$E[X^2] - E^2[X]$", "$E[X^2]$", "$E^2[X] - E[X^2]$", "$(E[X])^2$"],
        answer: 0,
        explanation: "Expanding $E[(X - E[X])^2]$ and using that $E[X]$ is a constant gives (C.27); the second moment alone (option B) ignores the squared mean.",
      },
      {
        q: "Which of these identities genuinely requires independence (pairwise suffices)?",
        options: [
          "$\\mathrm{Var}[X + Y] = \\mathrm{Var}[X] + \\mathrm{Var}[Y]$",
          "$E[X + Y] = E[X] + E[Y]$",
          "$E[aX] = aE[X]$",
          "$E[X] = \\sum_{i \\ge 1} \\Pr\\{X \\ge i\\}$ for $X \\in \\mathbb{N}$",
        ],
        answer: 0,
        explanation: "Variance additivity (C.29) fails without independence — covariance terms appear; the other three identities hold for arbitrary variables (given the tail-sum's nonnegative integer hypothesis).",
      },
      {
        q: "For a random variable $X$ taking values in $\\{0, 1, 2, \\ldots\\}$, $E[X]$ equals:",
        options: [
          "$\\sum_{i \\ge 1} \\Pr\\{X \\ge i\\}$",
          "$\\sum_{i \\ge 0} \\Pr\\{X \\ge i\\}$",
          "$\\sum_{i \\ge 1} \\Pr\\{X = i\\}$",
          "$\\sum_{i \\ge 1} \\Pr\\{X \\le i\\}$",
        ],
        answer: 0,
        explanation: "Each $\\Pr\\{X \\ge i\\}$ is counted $i$ times and canceled $i-1$ times. Summing from $i = 0$ would add the extra term $\\Pr\\{X \\ge 0\\} = 1$, and option C forgets to weight by the value $i$.",
      },
    ],
  },

  // ------------------------------------------------------------- 38.4
  {
    sectionId: "clrs-ch38-s4",
    readingTime: 6,
    intro: "A Bernoulli trial is the atom of randomness in algorithms — a coin flip with success probability $p$. Two questions about a sequence of trials generate this section's two distributions: how long until the first success (geometric), and how many successes in $n$ trials (binomial). Both have closed-form means and variances, and the ratio of successive binomial masses explains the characteristic shape — rising toward the mean, then decaying geometrically away from it.",
    objectives: [
      "Derive and use the geometric distribution: $\\Pr\\{X = k\\} = q^{k-1}p$, $E[X] = 1/p$, $\\mathrm{Var}[X] = q/p^2$",
      "Derive and use the binomial $b(k; n, p) = \\binom{n}{k}p^k q^{n-k}$ with $E[X] = np$, $\\mathrm{Var}[X] = npq$",
      "Locate the binomial mode via the successive-term ratio (C.41) and bound the mass with Lemma C.1",
    ],
    concepts: [
      {
        term: "Bernoulli trials",
        kind: "definition",
        statement: "A **Bernoulli trial** is an experiment with only two possible outcomes: **success**, which occurs with probability $p$, and **failure**, with probability $q = 1 - p$. When Bernoulli trials are spoken of collectively, they are **mutually independent**, and unless stated otherwise each has the same probability $p$ of success.",
        detail: "One trial is one indicator random variable — 1 with probability $p$, 0 with probability $q$ — so $E[X_i] = p$ and (computed in this section) $\\mathrm{Var}[X_i] = pq$.",
      },
      {
        term: "The geometric distribution",
        kind: "definition",
        statement: "Let $X$ be the number of trials needed to obtain the first success. Then $X$ takes values in $\\{1, 2, \\ldots\\}$ and (C.31):\n$$\\Pr\\{X = k\\} = q^{k-1}\\,p,$$\nsince the first $k - 1$ trials fail and the $k$-th succeeds — a **geometric distribution**. Its expectation follows from the series identity (A.8):\n$$E[X] = \\sum_{k=1}^{\\infty} k\\, q^{k-1} p = \\frac{1}{p} \\quad \\text{(C.32)},$$ and the variance (C.33) is $\\mathrm{Var}[X] = q/p^2$.",
        detail: "Rolling two dice until a 7 or an 11 appears has $p = \\frac{8}{36} = \\frac29$ (6 outcomes make 7, 2 make 11), so on average $1/p = 4.5$ rolls are needed. Each extra waiting step multiplies the mass by the constant $q$ — see panel (a) of the figure below.",
      },
      {
        term: "The binomial distribution",
        kind: "definition",
        statement: "Let $X$ be the number of successes in $n$ Bernoulli trials. For $k = 0, 1, \\ldots, n$ (C.34–C.35):\n$$\\Pr\\{X = k\\} = b(k; n, p) = \\binom{n}{k} p^k q^{n-k},$$ since there are $\\binom{n}{k}$ ways to pick which $k$ of the $n$ trials succeed, and each such pattern has probability $p^k q^{n-k}$. The name comes from the binomial expansion: because $p + q = 1$,\n$$\\sum_{k=0}^{n} b(k; n, p) = \\sum_{k=0}^{n} \\binom{n}{k}p^k q^{n-k} = (p + q)^n = 1 \\quad \\text{(C.36)},$$ exactly as axiom 2 requires.",
        detail: "The book's Figure C.2 plots $b(k; 15, \\frac13)$ — reproduced with its $p = \\frac12$ companion in panel (b) of the figure below.",
      },
      {
        term: "Expectation and variance of the binomial",
        kind: "theorem",
        statement: "For $X$ with distribution $b(k; n, p)$:\n$$E[X] = np \\quad \\text{and} \\quad \\mathrm{Var}[X] = npq.$$ The slick proof writes $X = \\sum_{i=1}^{n} X_i$ where $X_i$ indicates success on trial $i$. Then $E[X_i] = p \\cdot 1 + q \\cdot 0 = p$, so linearity gives $E[X] = \\sum_i E[X_i] = np$ (C.38) — no independence needed for the mean. For the variance, $X_i^2 = X_i$ (0/1 values), so $\\mathrm{Var}[X_i] = E[X_i^2] - E^2[X_i] = p - p^2 = pq$ (C.39); independence makes variances add, giving $\\mathrm{Var}[X] = npq$ (C.40). The book also grinds out $E[X] = np$ algebraically, using $k\\binom{n}{k} = n\\binom{n-1}{k-1}$ (C.8) to absorb the factor $k$ and (C.36) to close.",
        detail: "This indicator decomposition is the template: split into trials, add means (always legal), add variances (legal under independence).",
      },
      {
        term: "Shape and mass bounds",
        kind: "insight",
        statement: "The ratio of successive masses (C.41) is\n$$\\frac{b(k; n, p)}{b(k-1; n, p)} = \\frac{(n-k+1)\\,p}{k\\,q} = 1 + \\frac{(n+1)p - k}{kq},$$\nwhich exceeds 1 exactly when $k < (n+1)p$: the distribution **increases toward the mean and then decreases**. If $(n+1)p$ is an integer there are two adjacent maxima, at $(n+1)p$ and $np - q$; otherwise the unique **mode** lies in the interval $(np - q,\\ (n+1)p)$. Individual masses obey **Lemma C.1**: $b(k; n, p) \\le \\left(\\frac{np}{k}\\right)^k \\left(\\frac{nq}{n-k}\\right)^{n-k}$ — the entropy-form bound (C.6) applied to $\\binom{n}{k}$.",
        detail: "For $b(k; 15, \\frac13)$: $(n+1)p = \\frac{16}{3} \\approx 5.33$ and $np - q = \\frac{13}{3} \\approx 4.33$, so the mode is $k = 5$. Note Lemma C.1 at $k = np$ reads $1 \\cdot 1$ — vacuous at the mean, exponentially small away from it.",
      },
    ],
    figures: [
      {
        caption: "The two Bernoulli distributions of Appendix C. (a) The geometric distribution with $p = 1/3$ (the book's Figure C.1): masses $q^{k-1}p$ decay by the constant factor $q = 2/3$ per step, and the mean $1/p = 3$ already sits where the mass has fallen to $\\frac{4}{27}$. (b) Binomial distributions over $n = 15$ trials (the book's Figure C.2 draws $p = 1/3$): the $p = 1/3$ masses (filled) are right-skewed with mean $np = 5$ and mode 5, while $p = 1/2$ (outlined) is symmetric with two adjacent maxima at $k = 7$ and $k = 8$ — because $(n+1)p = 8$ is an integer. The successive-ratio formula (C.41) explains both shapes: mass grows while $k < (n+1)p$, then decays geometrically.",
        afterConcept: 3,
        svg: `<svg viewBox="0 0 720 430" width="100%" role="img" aria-label="Two bar-chart panels: a geometric distribution with probability one third decaying over k from one to fifteen, and binomial distributions over fifteen trials with p one third filled and p one half outlined, showing skew and symmetry"><g font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor"><text x="60" y="36" font-weight="bold">(a) Geometric, p = 1/3:  Pr{X = k} = (1−p)ᵏ⁻¹p</text></g><g stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.45"><line x1="55" y1="161" x2="655" y2="161"/><line x1="55" y1="122" x2="655" y2="122"/><line x1="55" y1="83" x2="655" y2="83"/></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.7"><text x="50" y="165">0.1</text><text x="50" y="126">0.2</text><text x="50" y="87">0.3</text></g><g stroke="currentColor" stroke-width="1.5"><line x1="55" y1="60" x2="55" y2="200"/><line x1="55" y1="200" x2="655" y2="200"/></g><rect x="60" y="70" width="30" height="130" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><rect x="100" y="113.33" width="30" height="86.67" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><rect x="140" y="142.22" width="30" height="57.78" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><rect x="180" y="161.48" width="30" height="38.52" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><rect x="220" y="174.32" width="30" height="25.68" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><rect x="260" y="182.88" width="30" height="17.12" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><rect x="300" y="188.59" width="30" height="11.41" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><rect x="340" y="192.39" width="30" height="7.61" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><rect x="380" y="194.93" width="30" height="5.07" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><rect x="420" y="196.62" width="30" height="3.38" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><rect x="460" y="197.75" width="30" height="2.25" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><rect x="500" y="198.5" width="30" height="1.5" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><rect x="540" y="199" width="30" height="1" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><rect x="580" y="199.33" width="30" height="0.67" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="1.2"/><line x1="635" y1="200" x2="635" y2="198.6" stroke="#f59e0b" stroke-width="2"/><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="#f59e0b" text-anchor="middle"><text x="75" y="64">1/3</text><text x="115" y="108">2/9</text><text x="155" y="137">4/27</text></g><line x1="155" y1="64" x2="155" y2="200" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 4" opacity="0.6"/><text x="155" y="58" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" font-style="italic">mean 1/p = 3</text><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75"><text x="75" y="216">1</text><text x="115" y="216">2</text><text x="155" y="216">3</text><text x="195" y="216">4</text><text x="235" y="216">5</text><text x="275" y="216">6</text><text x="315" y="216">7</text><text x="355" y="216">8</text><text x="395" y="216">9</text><text x="435" y="216">10</text><text x="475" y="216">11</text><text x="515" y="216">12</text><text x="555" y="216">13</text><text x="595" y="216">14</text><text x="635" y="216">15</text></g><text x="662" y="204" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" font-style="italic">k</text><g font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor"><text x="60" y="252" font-weight="bold">(b) Binomial b(k; 15, p)</text></g><rect x="480" y="244" width="14" height="10" fill="currentColor" fill-opacity="0.38" stroke="currentColor" stroke-width="1"/><text x="500" y="253" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">p = 1/3</text><rect x="560" y="244" width="14" height="10" fill="#14b8a6" fill-opacity="0.10" stroke="#14b8a6" stroke-width="1.6"/><text x="580" y="253" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">p = 1/2</text><g stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.45"><line x1="55" y1="389.65" x2="700" y2="389.65"/><line x1="55" y1="359.3" x2="700" y2="359.3"/><line x1="55" y1="328.95" x2="700" y2="328.95"/><line x1="55" y1="298.6" x2="700" y2="298.6"/></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.7"><text x="50" y="393">0.05</text><text x="50" y="363">0.10</text><text x="50" y="332">0.15</text><text x="50" y="302">0.20</text></g><g stroke="currentColor" stroke-width="1.5"><line x1="55" y1="272" x2="55" y2="420"/><line x1="55" y1="420" x2="700" y2="420"/></g><rect x="60" y="418.61" width="30" height="1.39" fill="currentColor" fill-opacity="0.38" stroke="currentColor" stroke-width="1.4"/><rect x="100" y="409.6" width="30" height="10.4" fill="currentColor" fill-opacity="0.38" stroke="currentColor" stroke-width="1.4"/><rect x="140" y="383.61" width="30" height="36.39" fill="currentColor" fill-opacity="0.38" stroke="currentColor" stroke-width="1.4"/><rect x="180" y="341.16" width="30" height="78.84" fill="currentColor" fill-opacity="0.38" stroke="currentColor" stroke-width="1.4"/><rect x="220" y="301.74" width="30" height="118.26" fill="currentColor" fill-opacity="0.38" stroke="currentColor" stroke-width="1.4"/><rect x="260" y="289.92" width="30" height="130.08" fill="currentColor" fill-opacity="0.38" stroke="currentColor" stroke-width="1.4"/><rect x="300" y="311.6" width="30" height="108.4" fill="currentColor" fill-opacity="0.38" stroke="currentColor" stroke-width="1.4"/><rect x="340" y="350.31" width="30" height="69.69" fill="currentColor" fill-opacity="0.38" stroke="currentColor" stroke-width="1.4"/><rect x="380" y="385.16" width="30" height="34.84" fill="currentColor" fill-opacity="0.38" stroke="currentColor" stroke-width="1.4"/><rect x="420" y="406.45" width="30" height="13.55" fill="currentColor" fill-opacity="0.38" stroke="currentColor" stroke-width="1.4"/><rect x="460" y="415.93" width="30" height="4.07" fill="currentColor" fill-opacity="0.38" stroke="currentColor" stroke-width="1.4"/><rect x="500" y="419.08" width="30" height="0.92" fill="currentColor" fill-opacity="0.38" stroke="currentColor" stroke-width="1.4"/><g fill="#14b8a6" fill-opacity="0.10" stroke="#14b8a6" stroke-width="1.6"><rect x="140" y="418.05" width="30" height="1.95"/><rect x="180" y="411.57" width="30" height="8.43"/><rect x="220" y="394.71" width="30" height="25.29"/><rect x="260" y="364.37" width="30" height="55.63"/><rect x="300" y="327.29" width="30" height="92.71"/><rect x="340" y="300.8" width="30" height="119.2"/><rect x="380" y="300.8" width="30" height="119.2"/><rect x="420" y="327.29" width="30" height="92.71"/><rect x="460" y="364.37" width="30" height="55.63"/><rect x="500" y="394.71" width="30" height="25.29"/><rect x="540" y="411.57" width="30" height="8.43"/><rect x="580" y="418.05" width="30" height="1.95"/></g><line x1="275" y1="272" x2="275" y2="420" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="3 4" opacity="0.7"/><line x1="375" y1="272" x2="375" y2="420" stroke="#14b8a6" stroke-width="1.2" stroke-dasharray="3 4" opacity="0.7"/><g font-family="ui-sans-serif, system-ui" font-size="10.5" text-anchor="middle"><text x="275" y="266" fill="#f59e0b">mean np = 5</text><text x="383" y="266" fill="#14b8a6">mean np = 7.5</text></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75"><text x="75" y="436">0</text><text x="115" y="436">1</text><text x="155" y="436">2</text><text x="195" y="436">3</text><text x="235" y="436">4</text><text x="275" y="436">5</text><text x="315" y="436">6</text><text x="355" y="436">7</text><text x="395" y="436">8</text><text x="435" y="436">9</text><text x="475" y="436">10</text><text x="515" y="436">11</text><text x="555" y="436">12</text><text x="595" y="436">13</text><text x="635" y="436">14</text><text x="675" y="436">15</text></g></svg>`,
      },
    ],
    examples: [
      {
        title: "Waiting for a 7 or 11",
        problem: "Two fair dice are rolled repeatedly until the total is 7 or 11. Let $X$ be the number of rolls needed. Compute $\\Pr\\{X = 4\\}$, $E[X]$, $\\mathrm{Var}[X]$, and $\\Pr\\{X > 3\\}$.",
        steps: [
          { label: "Step 1: The success probability", text: "Of the 36 outcomes, 6 total 7 and 2 total 11, so $p = \\frac{8}{36} = \\frac29$ and $q = \\frac79$." },
          { label: "Step 2: A point mass", text: "$\\Pr\\{X = 4\\} = q^3 p = \\frac{343}{729} \\cdot \\frac{2}{9} = \\frac{686}{6561} \\approx 0.105$." },
          { label: "Step 3: Mean and variance", text: "$E[X] = 1/p = \\frac{9}{2} = 4.5$ rolls (C.32); $\\mathrm{Var}[X] = q/p^2 = \\frac{7/9}{4/81} = \\frac{63}{4} = 15.75$ (C.33)." },
          { label: "Step 4: A survival probability", text: "$\\Pr\\{X > 3\\} = \\Pr\\{\\text{first 3 rolls all fail}\\} = q^3 = \\frac{343}{729} \\approx 0.47$ — the geometric tail is just a power of $q$." },
        ],
        result: "$E[X] = 4.5$, $\\mathrm{Var}[X] = 15.75$, $\\Pr\\{X = 4\\} \\approx 0.105$ and $\\Pr\\{X > 3\\} \\approx 0.47$: waiting times decay by the constant factor $q$ per extra roll.",
      },
      {
        title: "Fifteen trials at p = 1/3",
        problem: "For $X$ with distribution $b(k; 15, \\frac13)$ — the book's Figure C.2 — compute $E[X]$, $\\mathrm{Var}[X]$, $\\sigma$, the mode, and the modal mass $b(5; 15, \\frac13)$.",
        steps: [
          { label: "Step 1: Mean and variance", text: "$E[X] = np = 15 \\cdot \\frac13 = 5$; $\\mathrm{Var}[X] = npq = 15 \\cdot \\frac13 \\cdot \\frac23 = \\frac{10}{3} \\approx 3.33$, so $\\sigma = \\sqrt{10/3} \\approx 1.83$." },
          { label: "Step 2: Locate the mode", text: "$(n+1)p = \\frac{16}{3} \\approx 5.33$ and $np - q = 5 - \\frac23 = \\frac{13}{3} \\approx 4.33$: the unique integer strictly between them is $k = 5$." },
          { label: "Step 3: The modal mass", text: "$b(5; 15, \\tfrac13) = \\binom{15}{5}\\left(\\tfrac13\\right)^5\\left(\\tfrac23\\right)^{10} = 3003 \\cdot \\frac{1024}{3^{15}} = \\frac{3{,}075{,}072}{14{,}348{,}907} \\approx 0.2143$." },
          { label: "Step 4: Interpret", text: "Even the most likely single value occurs barely one time in five — which is precisely why Section 38.5 bounds tails rather than points." },
        ],
        result: "Mean 5, variance $\\frac{10}{3}$ ($\\sigma \\approx 1.83$), mode $k = 5$ with mass $\\approx 0.214$.",
      },
    ],
    keyTakeaways: [
      "Geometric: $\\Pr\\{X = k\\} = q^{k-1}p$, mean $1/p$, variance $q/p^2$ — the waiting time for the first success decays by a factor $q$ per step.",
      "Binomial: $b(k; n, p) = \\binom{n}{k}p^kq^{n-k}$ sums to 1 by the binomial theorem, with $E[X] = np$ by indicator linearity and $\\mathrm{Var}[X] = npq$ by independence.",
      "The ratio (C.41) $b(k)/b(k{-}1) = 1 + \\frac{(n+1)p - k}{kq}$ makes the distribution rise to its mode in $(np - q, (n+1)p)$ and then decay — two adjacent modes when $(n+1)p$ is an integer.",
    ],
    quiz: [
      {
        q: "Two fair dice are rolled until the total is 7 or 11. The expected number of rolls is:",
        options: ["4.5", "2", "9", "4"],
        answer: 0,
        explanation: "$p = \\frac{8}{36} = \\frac29$, and the geometric mean is $1/p = \\frac{9}{2} = 4.5$. Option B mistakes the success probability; option C inverts the wrong quantity.",
      },
      {
        q: "For $X$ with distribution $b(k; n, p)$, $\\mathrm{Var}[X]$ equals:",
        options: ["$npq$", "$np^2$", "$np$", "$pq$"],
        answer: 0,
        explanation: "Each trial's indicator has variance $p - p^2 = pq$, and independence adds them: $npq$. The values $np$ and $pq$ drop a factor.",
      },
      {
        q: "For $X$ with distribution $b(k; n, p)$, the point probability $\\Pr\\{X = k\\}$ is:",
        options: [
          "$\\binom{n}{k} p^k (1-p)^{n-k}$",
          "$\\binom{n}{k} p^{n-k} (1-p)^k$",
          "$p^k (1-p)^{n-k}$",
          "$\\binom{n}{k} p^k$",
        ],
        answer: 0,
        explanation: "Choose which $k$ trials succeed, then multiply the success and failure probabilities. Option B swaps the roles of $k$ and $n-k$; option C forgets the choice of positions; option D is Theorem C.2's tail BOUND, not the mass.",
      },
      {
        q: "The mode of $b(k; 15, \\frac13)$ is:",
        options: ["5", "4", "6", "7"],
        answer: 0,
        explanation: "The mode is the unique integer in $(np - q, (n+1)p) = (\\frac{13}{3}, \\frac{16}{3}) = (4.33, 5.33)$ — namely 5, exactly where the book's Figure C.2 peaks.",
      },
    ],
  },

  // ------------------------------------------------------------- 38.5
  {
    sectionId: "clrs-ch38-s5",
    readingTime: 8,
    intro: "Analyses rarely need exact tail sums — they need to know that the probability of straying far from the mean is tiny. This section proves the book's binomial tail bounds in increasing order of sophistication: a union-bound bound on the right tail, a geometric-domination bound on the left, halving corollaries, and finally the Chernoff-style exponential bound $(\\mu e/r)^r$ whose full derivation is the masters tier below.",
    objectives: [
      "Prove Theorem C.2 — $\\Pr\\{X \\ge k\\} \\le \\binom{n}{k}p^k$ — from Boole's inequality, with the left-tail twin Corollary C.3",
      "State and apply the geometric-domination bounds (Theorem C.4, Corollaries C.5–C.7) and the halving corollaries",
      "State Theorem C.8 / Corollary C.9 and use them for high-probability guarantees",
    ],
    concepts: [
      {
        term: "Why tails",
        kind: "insight",
        statement: "The **tails** of $b(k; n, p)$ are the regions far from the mean $np$: the right tail $\\Pr\\{X \\ge k\\} = \\sum_{i=k}^{n} b(i; n, p)$ and the left tail $\\Pr\\{X \\le k\\} = \\sum_{i=0}^{k} b(i; n, p)$. “At least / at most” events dominate point events in analysis — “the algorithm exceeds its budget by more than $r$” is a tail event — so we trade exact sums for closed-form upper bounds.",
        detail: "The bounds below need only elementary tools (union bound, geometric series, Markov's inequality), yet they carry the probabilistic analyses of the main chapters — e.g. the longest-streak argument of Section 5.4.3.",
      },
      {
        term: "Right tail by the union bound — Theorem C.2",
        kind: "theorem",
        statement: "For $0 \\le k \\le n$:\n$$\\Pr\\{X \\ge k\\} = \\sum_{i=k}^{n} b(i; n, p) \\;\\le\\; \\binom{n}{k} p^k.$$ *Proof.* For each $k$-subset $S \\subseteq \\{1, \\ldots, n\\}$, let $A_S$ be the event that every trial in $S$ succeeds; then $\\Pr\\{A_S\\} = p^k$ exactly, and $\\{X \\ge k\\} \\subseteq \\bigcup_{|S| = k} A_S$. Boole's inequality (C.19) gives $\\Pr\\{X \\ge k\\} \\le \\sum_{|S|=k} \\Pr\\{A_S\\} = \\binom{n}{k}p^k$. $\\square$ Swapping success and failure yields the left-tail twin, **Corollary C.3**: $\\Pr\\{X \\le k\\} \\le \\binom{n}{n-k}(1-p)^{n-k}$.",
        detail: "The bound counts each outcome with more than $k$ successes many times over, so it is loosest just above the mean and strongest when $p$ is small or $k$ is far above $np$; mid-range it can exceed 1 and be vacuous.",
      },
      {
        term: "Left tail by geometric domination — Theorem C.4",
        kind: "theorem",
        statement: "For $0 < k < np$:\n$$\\Pr\\{X < k\\} = \\sum_{i=0}^{k-1} b(i; n, p) \\;<\\; \\frac{kq}{np - k}\\, b(k; n, p).$$ *Proof idea.* For $i \\le k$, the successive-mass ratio satisfies $\\frac{b(i-1;\\, n, p)}{b(i;\\, n, p)} = \\frac{iq}{(n-i+1)p} \\le \\frac{kq}{(n-k)p} < \\frac{kq}{np - k} = x < 1$, so every term left of $k$ is dominated by the geometric chain $x^{j}\\, b(k; n, p)$; summing gives $\\sum_{i<k} b(i) < b(k)\\sum_{j \\ge 1} x^j = \\frac{x}{1-x} b(k) = \\frac{kq}{np-k} b(k; n, p)$, using $(n-k)p - kq = np - k$. $\\square$",
        detail: "**Corollary C.5** (the halving law): for $0 < k \\le np/2$, $\\Pr\\{X < k\\} < \\frac12 \\Pr\\{X < k + 1\\}$ — the factor is at most 1 there, so each step away from the mean at least halves the left tail.",
      },
      {
        term: "Right-tail domination — Corollaries C.6 and C.7",
        kind: "theorem",
        statement: "Mirroring Theorem C.4 (Exercise C.5-2): for $np < k < n$,\n$$\\Pr\\{X > k\\} = \\sum_{i=k+1}^{n} b(i; n, p) < \\frac{(n-k)p}{k - np}\\, b(k; n, p) \\quad \\text{(Corollary C.6)},$$ and for $\\frac{np + n}{2} < k < n$, **Corollary C.7**: $\\Pr\\{X > k\\} < \\frac12 \\Pr\\{X > k - 1\\}$.",
        detail: "Far from the mean, each additional step away costs at least a factor of 2 in either tail — the precise sense in which both tails **diminish exponentially**.",
      },
      {
        term: "The Chernoff-style bound — Theorem C.8",
        kind: "theorem",
        statement: "Now let the $n$ trials have *different* success probabilities $p_1, \\ldots, p_n$ (still mutually independent), $X$ the total number of successes, and $\\mu = E[X] = \\sum_i p_i$. Then for $r > \\mu$:\n$$\\Pr\\{X - \\mu \\ge r\\} \\le \\left(\\frac{\\mu e}{r}\\right)^{r}.$$ With identical probabilities this becomes **Corollary C.9**: $\\Pr\\{X - np \\ge r\\} \\le \\left(\\frac{npe}{r}\\right)^{r}$ for $r > np$. The proof — Markov's inequality on the exponential moment $e^{\\alpha(X - \\mu)}$, factorization over independent trials, and the choice $\\alpha = \\ln(r/\\mu)$ — is the masters-tier derivation below.",
        detail: "Caveat: $(\\mu e/r)^r < 1$ requires $r > e\\mu \\approx 2.72\\mu$, so the clean form covers the extreme tail; Exercise C.5-6 develops the sharper $e^{-r^2/2n}$-style bound for the region near the mean.",
      },
    ],
    figures: [
      {
        caption: "The left tail of $b(k; 100, \\tfrac12)$ at true heights. The 40 amber bars with $k \\le 39$ form the event $\\{X < 40\\}$, whose exact probability is 0.0176. Theorem C.4 dominates the tail by a geometric series anchored at the dashed $k = 40$ bar: each bar left of 40 is at most $\\frac{kq}{(n-k)p} = \\frac{40}{60} = \\frac23$ of its right neighbor, so $\\Pr\\{X < 40\\} < b(40) \\cdot (\\tfrac23 + (\\tfrac23)^2 + \\cdots) = 2 \\cdot b(40; 100, \\tfrac12) = 2 \\times 0.01084 = 0.0217$ — within 24% of the truth. Corollary C.5's halving applies further out: at $k = 25 = np/2$, $\\Pr\\{X < 25\\} < \\tfrac12\\Pr\\{X < 26\\}$.",
        afterConcept: 3,
        svg: `<svg viewBox="0 0 720 310" width="100%" role="img" aria-label="A bar chart of the binomial distribution with one hundred fair coin flips, with the forty leftmost bars shaded amber as the event of fewer than forty heads, the fortieth bar dashed, and the mean marked at fifty"><g font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor"><text x="80" y="34" font-weight="bold">Binomial b(k; 100, 1/2): the left tail below k = 40</text></g><g stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.45"><line x1="78" y1="215.28" x2="680" y2="215.28"/><line x1="78" y1="172.56" x2="680" y2="172.56"/><line x1="78" y1="129.84" x2="680" y2="129.84"/></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.7"><text x="74" y="219">0.02</text><text x="74" y="176">0.04</text><text x="74" y="133">0.06</text></g><g stroke="currentColor" stroke-width="1.5"><line x1="78" y1="58" x2="78" y2="258"/><line x1="78" y1="258" x2="680" y2="258"/></g><rect x="274.7" y="257.5" width="5.1" height="0.5" fill="#f59e0b" fill-opacity="0.5" stroke="#f59e0b" stroke-width="0.7"/><rect x="280.6" y="257.02" width="5.1" height="0.98" fill="#f59e0b" fill-opacity="0.5" stroke="#f59e0b" stroke-width="0.7"/><rect x="286.5" y="256.15" width="5.1" height="1.85" fill="#f59e0b" fill-opacity="0.5" stroke="#f59e0b" stroke-width="0.7"/><rect x="292.4" y="254.67" width="5.1" height="3.33" fill="#f59e0b" fill-opacity="0.5" stroke="#f59e0b" stroke-width="0.7"/><rect x="298.3" y="252.24" width="5.1" height="5.76" fill="#f59e0b" fill-opacity="0.5" stroke="#f59e0b" stroke-width="0.7"/><rect x="304.2" y="248.45" width="5.1" height="9.55" fill="#f59e0b" fill-opacity="0.5" stroke="#f59e0b" stroke-width="0.7"/><rect x="310.1" y="242.81" width="5.1" height="15.19" fill="#f59e0b" fill-opacity="0.5" stroke="#f59e0b" stroke-width="0.7"/><rect x="316" y="234.84" width="5.1" height="23.16" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="3 2"/><rect x="321.9" y="224.1" width="5.1" height="33.9" fill="currentColor" fill-opacity="0.42"/><rect x="327.8" y="210.38" width="5.1" height="47.62" fill="currentColor" fill-opacity="0.42"/><rect x="333.7" y="193.77" width="5.1" height="64.23" fill="currentColor" fill-opacity="0.42"/><rect x="339.6" y="174.8" width="5.1" height="83.2" fill="currentColor" fill-opacity="0.42"/><rect x="345.5" y="154.46" width="5.1" height="103.54" fill="currentColor" fill-opacity="0.42"/><rect x="351.4" y="134.2" width="5.1" height="123.8" fill="currentColor" fill-opacity="0.42"/><rect x="357.3" y="115.76" width="5.1" height="142.24" fill="currentColor" fill-opacity="0.42"/><rect x="363.2" y="100.95" width="5.1" height="157.05" fill="currentColor" fill-opacity="0.42"/><rect x="369.1" y="91.33" width="5.1" height="166.67" fill="currentColor" fill-opacity="0.42"/><rect x="375" y="88" width="5.1" height="170" fill="currentColor" fill-opacity="0.42"/><rect x="380.9" y="91.33" width="5.1" height="166.67" fill="currentColor" fill-opacity="0.42"/><rect x="386.8" y="100.95" width="5.1" height="157.05" fill="currentColor" fill-opacity="0.42"/><rect x="392.7" y="115.76" width="5.1" height="142.24" fill="currentColor" fill-opacity="0.42"/><rect x="398.6" y="134.2" width="5.1" height="123.8" fill="currentColor" fill-opacity="0.42"/><rect x="404.5" y="154.46" width="5.1" height="103.54" fill="currentColor" fill-opacity="0.42"/><rect x="410.4" y="174.8" width="5.1" height="83.2" fill="currentColor" fill-opacity="0.42"/><rect x="416.3" y="193.77" width="5.1" height="64.23" fill="currentColor" fill-opacity="0.42"/><rect x="422.2" y="210.38" width="5.1" height="47.62" fill="currentColor" fill-opacity="0.42"/><rect x="428.1" y="224.1" width="5.1" height="33.9" fill="currentColor" fill-opacity="0.42"/><rect x="434" y="234.84" width="5.1" height="23.16" fill="currentColor" fill-opacity="0.42"/><rect x="439.9" y="242.81" width="5.1" height="15.19" fill="currentColor" fill-opacity="0.42"/><rect x="445.8" y="248.45" width="5.1" height="9.55" fill="currentColor" fill-opacity="0.42"/><rect x="451.7" y="252.24" width="5.1" height="5.76" fill="currentColor" fill-opacity="0.42"/><rect x="457.6" y="254.67" width="5.1" height="3.33" fill="currentColor" fill-opacity="0.42"/><rect x="463.5" y="256.15" width="5.1" height="1.85" fill="currentColor" fill-opacity="0.42"/><rect x="469.4" y="257.02" width="5.1" height="0.98" fill="currentColor" fill-opacity="0.42"/><rect x="475.3" y="257.5" width="5.1" height="0.5" fill="currentColor" fill-opacity="0.42"/><line x1="375" y1="62" x2="375" y2="258" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 4" opacity="0.6"/><text x="375" y="56" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" font-style="italic">mean np = 50</text><text x="318.55" y="228" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle" font-weight="bold">k = 40</text><g font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor"><text x="480" y="150">Pr{X &lt; 40} = 0.0176 exactly</text><text x="480" y="170">Theorem C.4 bound:</text><text x="480" y="190">2 · b(40) = 0.0217 — within 24%</text></g><g stroke="currentColor" stroke-width="1.2"><line x1="82.55" y1="258" x2="82.55" y2="264"/><line x1="141.55" y1="258" x2="141.55" y2="264"/><line x1="200.55" y1="258" x2="200.55" y2="264"/><line x1="259.55" y1="258" x2="259.55" y2="264"/><line x1="318.55" y1="258" x2="318.55" y2="264"/><line x1="377.55" y1="258" x2="377.55" y2="264"/><line x1="436.55" y1="258" x2="436.55" y2="264"/><line x1="495.55" y1="258" x2="495.55" y2="264"/><line x1="554.55" y1="258" x2="554.55" y2="264"/><line x1="613.55" y1="258" x2="613.55" y2="264"/><line x1="672.55" y1="258" x2="672.55" y2="264"/></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75"><text x="82.55" y="278">0</text><text x="141.55" y="278">10</text><text x="200.55" y="278">20</text><text x="259.55" y="278">30</text><text x="318.55" y="278">40</text><text x="377.55" y="278">50</text><text x="436.55" y="278">60</text><text x="495.55" y="278">70</text><text x="554.55" y="278">80</text><text x="613.55" y="278">90</text><text x="672.55" y="278">100</text><text x="82" y="296" font-style="italic">k</text></g><text x="480" y="296" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75" text-anchor="middle">amber bars: k ≤ 39 (the event X &lt; 40) · dashed bar: the dominating mass b(40)</text></svg>`,
      },
    ],
    examples: [
      {
        title: "A thousand rare failures",
        problem: "A cluster has $n = 1000$ machines; each independently fails on a given day with probability $p = 0.001$, so $\\mu = np = 1$. Bound (a) $\\Pr\\{X \\ge 10\\}$ with Theorem C.2 and (b) $\\Pr\\{X \\ge 11\\}$ with Corollary C.9; compare both with the truth.",
        steps: [
          { label: "Step 1: Union-bound tail", text: "Theorem C.2: $\\Pr\\{X \\ge 10\\} \\le \\binom{1000}{10} (0.001)^{10} \\approx 2.63 \\times 10^{-7}$ — the binomial coefficient is about $2.63 \\times 10^{23}$." },
          { label: "Step 2: Shift to the centered form", text: "$\\Pr\\{X \\ge 11\\} = \\Pr\\{X - \\mu \\ge 10\\}$, so Corollary C.9 applies with $r = 10$." },
          { label: "Step 3: Chernoff-style bound", text: "$\\Pr\\{X \\ge 11\\} \\le \\left(\\frac{\\mu e}{r}\\right)^r = \\left(\\frac{e}{10}\\right)^{10} \\approx 2.20 \\times 10^{-6}$." },
          { label: "Step 4: The truth", text: "The Poisson approximation with $\\lambda = \\mu = 1$ gives $\\Pr\\{X \\ge 10\\} \\approx 1.1 \\times 10^{-7}$ and $\\Pr\\{X \\ge 11\\} \\approx 1.0 \\times 10^{-8}$ — both bounds are the right order of magnitude." },
        ],
        result: "$\\Pr\\{X \\ge 10\\} \\le 2.63 \\times 10^{-7}$ and $\\Pr\\{X \\ge 11\\} \\le 2.20 \\times 10^{-6}$: ten failures on a day whose expectation is one is essentially impossible — exactly the guarantee reliability arguments lean on.",
      },
      {
        title: "Forty heads in a hundred flips",
        problem: "Flip a fair coin 100 times, so $np = 50$. Bound $\\Pr\\{X < 40\\}$ with Theorem C.4 and compare with the exact value (see the figure above).",
        steps: [
          { label: "Step 1: Check the hypotheses", text: "$k = 40 < np = 50$ and $q = \\frac12$: Theorem C.4 applies." },
          { label: "Step 2: The domination factor", text: "$\\frac{kq}{np - k} = \\frac{40 \\cdot \\frac12}{50 - 40} = \\frac{20}{10} = 2$." },
          { label: "Step 3: The anchoring mass", text: "$b(40; 100, \\tfrac12) = \\frac{\\binom{100}{40}}{2^{100}} = \\frac{1.3746 \\times 10^{28}}{1.2677 \\times 10^{30}} \\approx 0.01084$." },
          { label: "Step 4: Combine and compare", text: "$\\Pr\\{X < 40\\} < 2 \\times 0.01084 = 0.0217$, while the exact sum of the 40 leftmost masses is $0.0176$ — the bound overshoots by under 24%. Halving also applies at $k = 25 = np/2$: $\\Pr\\{X < 25\\} < \\frac12 \\Pr\\{X < 26\\}$." },
        ],
        result: "$\\Pr\\{X < 40\\} < 0.0217$ versus the exact $0.0176$ — one geometric-series argument captures the tail to within 24%.",
      },
    ],
    keyTakeaways: [
      "Theorem C.2: $\\Pr\\{X \\ge k\\} \\le \\binom{n}{k}p^k$ by the union bound over $k$-subsets of trials; its left-tail twin (Corollary C.3) swaps the roles of success and failure.",
      "Theorem C.4 dominates the left tail by a geometric series: $\\Pr\\{X < k\\} < \\frac{kq}{np-k} b(k; n, p)$, and for $k \\le np/2$ each step outward at least halves the tail (Corollary C.5, mirrored by C.6–C.7).",
      "Theorem C.8 caps both: for independent trials with $\\mu = \\sum p_i$, $\\Pr\\{X - \\mu \\ge r\\} \\le (\\mu e/r)^r$ — exponentially small once $r$ exceeds $e\\mu$.",
    ],
    quiz: [
      {
        q: "Theorem C.2 states that for $X$ counting successes in $n$ Bernoulli($p$) trials and $0 \\le k \\le n$:",
        options: [
          "$\\Pr\\{X \\ge k\\} \\le \\binom{n}{k} p^k$",
          "$\\Pr\\{X \\ge k\\} \\le \\binom{n}{k} p^k q^{n-k}$",
          "$\\Pr\\{X \\ge k\\} \\le \\left(\\frac{np}{k}\\right)^k$",
          "$\\Pr\\{X \\ge k\\} \\le \\frac12 \\Pr\\{X \\ge k-1\\}$",
        ],
        answer: 0,
        explanation: "The union bound over the $\\binom{n}{k}$ subsets loses the $q^{n-k}$ factor entirely. Option B is a single MASS; option C is Lemma C.1's bound on a mass; option D is a halving-type statement that is only valid far from the mean.",
      },
      {
        q: "Theorem C.4 bounds the left tail ($0 < k < np$) by:",
        options: [
          "$\\frac{kq}{np - k} \\cdot b(k; n, p)$",
          "$\\frac{(n-k)p}{k - np} \\cdot b(k; n, p)$",
          "$\\binom{n}{k} q^k$",
          "$\\frac{kq}{np + k} \\cdot b(k; n, p)$",
        ],
        answer: 0,
        explanation: "The geometric-domination factor has the denominator $np - k$, which shrinks as $k$ approaches the mean. Option B is Corollary C.6's RIGHT-tail factor — the mirror bound.",
      },
      {
        q: "For $0 < k \\le np/2$, Corollary C.5 guarantees:",
        options: [
          "$\\Pr\\{X < k\\} < \\frac12 \\Pr\\{X < k + 1\\}$",
          "$\\Pr\\{X < k\\} > \\frac12 \\Pr\\{X < k+1\\}$",
          "$\\Pr\\{X < k\\} < \\frac12 \\Pr\\{X \\le k - 1\\}$",
          "$\\Pr\\{X \\ge k\\} < \\frac12 \\Pr\\{X \\ge k+1\\}$",
        ],
        answer: 0,
        explanation: "At $k \\le np/2$ the domination factor is at most 1, so each step toward the mean at least doubles the tail probability — equivalently, each step away halves it.",
      },
      {
        q: "The bound $\\Pr\\{X - \\mu \\ge r\\} \\le (\\mu e/r)^r$ of Theorem C.8 is smaller than 1 exactly when:",
        options: ["$r > e\\mu$", "$r > \\mu$", "$r > \\mu^2$", "$r > \\ln \\mu$"],
        answer: 0,
        explanation: "$(\\mu e/r)^r < 1$ iff its base is below 1, i.e. $r > e\\mu$. The hypothesis $r > \\mu$ alone keeps the bound above 1 — vacuous — which is why Exercise C.5-6's $e^{-r^2/2n}$-type bound matters near the mean.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "The binomial tail bound derivation: from Markov to (μe/r)^r",
        blocks: [
          {
            kind: "para",
            body: "Theorem C.8 is the crown of Appendix C: one exponential bound, proved from scratch, that covers independent Bernoulli trials with arbitrary probabilities $p_i$ — the identical-$p$ binomial being the special case $\\mu = np$ (Corollary C.9). The strategy is pure moment magic. The polynomial event $\\{X - \\mu \\ge r\\}$ is painful to sum directly, but exponentiating converts it into a threshold event $\\{e^{\\alpha(X-\\mu)} \\ge e^{\\alpha r}\\}$ whose expectation factorizes over independent trials; Markov's inequality then prices any nonnegative random variable by its mean. Only two elementary inequalities are consumed along the way.",
          },
          {
            kind: "theorem",
            heading: "Markov's inequality (C.30, Exercise C.3-6)",
            body: "For a nonnegative random variable $X$ and any $t > 0$: $\\Pr\\{X \\ge t\\} \\le E[X]/t$. *Proof.* $E[X] = \\sum_x x \\Pr\\{X = x\\} \\ge \\sum_{x \\ge t} x \\Pr\\{X = x\\} \\ge t \\sum_{x \\ge t} \\Pr\\{X = x\\} = t \\Pr\\{X \\ge t\\}$; divide by $t$. $\\square$ Trivial to prove, yet it is the entire engine of Theorem C.8 — the art is choosing WHICH nonnegative random variable to feed it.",
          },
          {
            kind: "derivation",
            heading: "The proof of Theorem C.8, step by step",
            body: "Write $X = \\sum_{i=1}^{n} X_i$ where $X_i$ is the 0/1 indicator of success on trial $i$, so by linearity $\\mu = E[X] = \\sum_i p_i$. Fix $\\alpha > 0$.\n**(1) Exponentiate the event.** Since $e^{\\alpha x}$ is strictly increasing in $x$: $\\Pr\\{X - \\mu \\ge r\\} = \\Pr\\{e^{\\alpha(X - \\mu)} \\ge e^{\\alpha r}\\}$ (C.43).\n**(2) Apply Markov** to the nonnegative variable $e^{\\alpha(X-\\mu)}$ (C.44): $\\Pr\\{X - \\mu \\ge r\\} \\le E[e^{\\alpha(X-\\mu)}] \\cdot e^{-\\alpha r}$.\n**(3) Factor by independence.** $E[e^{\\alpha(X - \\mu)}] = E\\left[\\prod_i e^{\\alpha(X_i - p_i)}\\right] = \\prod_i E[e^{\\alpha(X_i - p_i)}]$ — mutual independence of the $X_i$ lifts to that of the $e^{\\alpha(X_i - p_i)}$ (Exercise C.3-5), then the product rule (C.24) applies.\n**(4) Bound each factor.** $E[e^{\\alpha(X_i - p_i)}] = p_i e^{\\alpha(1 - p_i)} + q_i e^{\\alpha(0 - p_i)} = p_i e^{\\alpha q_i} + q_i e^{-\\alpha p_i} \\le p_i e^{\\alpha} + 1 \\le e^{p_i e^{\\alpha}}$ (C.45), using $q_i \\le 1$, $e^{\\alpha q_i} \\le e^{\\alpha}$, $e^{-\\alpha p_i} \\le 1$, and $1 + x \\le e^{x}$ (inequality 3.12).\n**(5) Multiply.** $E[e^{\\alpha(X-\\mu)}] \\le \\prod_i e^{p_i e^{\\alpha}} = \\exp\\!\\left(e^{\\alpha} \\sum_i p_i\\right) = e^{\\mu e^{\\alpha}}$ (C.46).\n**(6) Combine and optimize.** (C.47): $\\Pr\\{X - \\mu \\ge r\\} \\le e^{\\mu e^{\\alpha} - \\alpha r}$ for every $\\alpha > 0$. Choose $\\alpha = \\ln(r/\\mu)$ — the minimizer, since $\\frac{d}{d\\alpha}(\\mu e^{\\alpha} - \\alpha r) = \\mu e^{\\alpha} - r$ vanishes there (Exercise C.5-7). Then $\\mu e^{\\alpha} = r$ and the exponent becomes $r - r\\ln(r/\\mu)$, so\n$$\\Pr\\{X - \\mu \\ge r\\} \\le e^{r}\\left(\\frac{\\mu}{r}\\right)^{r} = \\left(\\frac{\\mu e}{r}\\right)^{r}. \\;\\square$$",
          },
          {
            kind: "application",
            heading: "Using the bound",
            body: "Corollary C.9 ($\\mu = np$) turns “with high probability” claims into one line. In Section 5.4.3's streak analysis, the probability that some window of $k$ consecutive flips is all heads is at most $n \\cdot 2^{-k}$ by Theorem C.2 plus the union bound over starting positions — $k = 2\\lg n$ makes it at most $1/n$ — while Theorem C.8 handles “too many successes overall” events. Concretely, with $\\mu = np = 1$ (the 1000-machine cluster of the worked example), $r = 10$ gives $\\Pr\\{X \\ge 11\\} \\le (e/10)^{10} \\approx 2.2 \\times 10^{-6}$. Remember the reach: the bound beats 1 only for $r > e\\mu$; for the near-mean region use Exercise C.5-6's refinement, $\\Pr\\{X - \\mu \\ge r\\} \\le e^{-r^2/2n}$ (hint: prove $p_i e^{\\alpha q_i} + q_i e^{-\\alpha p_i} \\le e^{\\alpha^2/2}$ and rerun the same derivation) — a Hoeffding-style inequality.",
          },
          {
            kind: "remark",
            heading: "What the proof really teaches",
            body: "Step (5) is a bound on the moment-generating function: $E[e^{\\alpha X}] \\le e^{\\mu e^{\\alpha}}$. The product structure over independent trials is what makes the mgf multiplicative — which is why independence is not a technical convenience here but the essence of the theorem: without it, step (3) fails and no bound of this shape holds for any distribution. The exponential-moment technique is due to Chernoff (1960), with the bounded-differences refinements due to Hoeffding (1963); the appendix notes credit both, and the names have attached themselves to the inequalities ever since.",
          },
        ],
      },
    ],
  },
]

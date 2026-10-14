import type { SectionContent } from "../library"

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition (Cormen, Leiserson, Rivest
// & Stein, MIT Press 2009). Chapter 32: String Matching (32.1 – 32.4).
// Master study content.
// ============================================================================

export const clrsCh32Content: SectionContent[] = [
  // ---------------------------------------------------------------- 32.1
  {
    sectionId: "clrs-ch32-s1",
    readingTime: 6,
    intro: "Given a pattern $P[1..m]$ and a text $T[1..n]$, string matching asks for every shift at which the pattern occurs in the text. The naive algorithm simply tries all $n - m + 1$ shifts, comparing character by character — a $\\Theta((n-m+1)m)$ brute force in the worst case. This section fixes the notation the whole chapter uses, analyzes the brute force exactly, and names the wasted work that Rabin–Karp, finite automata and KMP each eliminate in a different way.",
    objectives: [
      "Define valid shifts and count them: exactly $n - m + 1$ candidate positions",
      "Analyze NAIVE-STRING-MATCHER and exhibit inputs that attain the $\\Theta((n-m+1)m)$ worst case",
      "Explain what partial-match information the brute force throws away at every failed shift"
    ],
    concepts: [
      {
        term: "The string-matching problem",
        kind: "definition",
        statement: "Given a text $T[1..n]$ and a pattern $P[1..m]$ with $m \\le n$, both strings over a common finite alphabet $\\Sigma$ of size $d$, find **all valid shifts**: the values $s \\in \\{0, 1, \\ldots, n-m\\}$ such that $$T[s+1..s+m] = P[1..m],$$ i.e. the pattern equals the length-$m$ substring of the text starting at position $s+1$. Each valid shift is an **occurrence** of $P$ in $T$. There are exactly $n - m + 1$ possible shifts, from $0$ to $n - m$.",
        detail: "The chapter measures algorithms by preprocessing time (before seeing the text) plus matching time; an algorithm that reports overlapping occurrences must not restart after each hit."
      },
      {
        term: "NAIVE-STRING-MATCHER",
        kind: "method",
        statement: "For each shift $s = 0, 1, \\ldots, n-m$ in turn, compare $T[s+1], T[s+2], \\ldots$ against $P[1], P[2], \\ldots$ left to right, stopping at the first mismatch; if all $m$ characters agree, report the occurrence at shift $s$ and move to $s+1$. No preprocessing is needed, and every shift is examined independently of every other.",
        detail: "The inner comparison loop costs between 1 and $m$ character comparisons per shift, depending on where (or whether) the first mismatch appears."
      },
      {
        term: "The worst-case running time",
        kind: "theorem",
        statement: "The naive string matcher takes $\\Theta((n-m+1)m)$ time in the worst case. **Upper bound:** each of the $n-m+1$ shifts performs at most $m$ comparisons. **Tightness:** with $P = a^m$ and $T = a^n$ over $\\Sigma = \\{a, b\\}$, every one of the $n-m+1$ shifts matches all $m$ characters, so the bound is attained exactly. When $m = \\Theta(n)$ — say $m = n/2$ — this is quadratic.",
        detail: "Even patterns that never occur can force the worst case: $P = a^{m-1}b$ inside $T = a^n$ fails at the last character of every shift, costing $m$ comparisons each and finding nothing."
      },
      {
        term: "What the brute force wastes",
        kind: "insight",
        statement: "When a shift fails after $j$ matched characters, the matcher has just **learned** the text block $T[s+1..s+j]$ — it equals $P[1..j]$ — yet the next shift re-compares $T[s+2..s+j]$ against $P[1..j-1]$ from scratch, as if nothing had been discovered. The brute force remembers nothing between shifts.",
        detail: "Every algorithm in the rest of this chapter is a different answer to one question: how much of this discarded partial-match information can be carried forward, and at what cost?"
      },
      {
        term: "Shift count $n-m+1$",
        kind: "notation",
        statement: "With $|T| = n$, $|P| = m$, shifts $s = 0..n-m$ number $n-m+1$: $s$ is valid iff $T[s+1..s+m] = P[1..m]$. The naive matcher tries all $n-m+1$ shifts with up to $m$ comparisons each, hence $\\Theta((n-m+1)m)$ worst case.",
        detail: "Edge cases: $m > n$ gives zero shifts (no match); $m = 0$ matches everywhere by convention. Counting shifts first prevents the off-by-one that drops the last alignment.",
      },
    ],
    examples: [
      {
        title: "Counting the brute force's comparisons",
        problem: "Run the naive matcher twice with $m = 4$: (a) $P = aaab$ in $T = aaaaaaa$ ($n = 7$); (b) $P = abab$ in $T = abababab$ ($n = 8$). Count the character comparisons and the occurrences.",
        steps: [
          { label: "Step 1: The worst case (a)", text: "Each shift compares a, a, a successfully and then fails on the fourth character ($b$ vs $a$), so every shift costs exactly 4 comparisons. There are $n - m + 1 = 7 - 4 + 1 = 4$ shifts, giving $4 \\cdot 4 = 16$ comparisons — the maximum $(n-m+1)m$ — and zero occurrences." },
          { label: "Step 2: A luckier instance (b)", text: "The shifts $s = 0, 2, 4$ match fully (4 comparisons each), while $s = 1, 3$ fail on the very first character ($b$ vs $a$), costing 1 each. Total: $4 + 1 + 4 + 1 + 4 = 14$ comparisons against the worst-case ceiling of $5 \\cdot 4 = 20$." },
          { label: "Step 3: Where the waste sits", text: "In (a) the three matched $a$ characters at shift $s$ are re-matched as a prefix at shift $s+1$ and re-matched again at $s+2$ — the same text characters are compared $m$ times each. In (b) the mismatch appears early, so little is wasted; the cost of the brute force is wildly instance-dependent." },
          { label: "Step 4: The takeaway", text: "Both searches use the same algorithm, yet 16 of 16 possible comparisons are wasted work in (a) while (b) runs near the $n + m$ information-theoretic floor. Worst-case analysis protects us against (a); the next three sections design it away." }
        ],
        result: "(a) 16 comparisons, no occurrences — the worst case $(n-m+1)m$ is attained. (b) 14 comparisons, occurrences at shifts $s = 0, 2, 4$."
      },
      {
        title: "Worst case $a^{n-1}b$ versus $a^m$",
        problem: "Text $T = a^{10}$ ($10$ a's), pattern $P = a^4b$ ($m = 5$). Count NAIVE-STRING-MATCHER comparisons.",
        steps: [
          { label: "Shifts", text: "$n-m+1 = 6$ shifts ($s = 0..5$)." },
          { label: "Per shift", text: "Each shift matches $4$ a's then fails on $b$ vs $a$: $5$ comparisons per shift." },
          { label: "Total", text: "$6 \\times 5 = 30 = (n-m+1)m$: worst case attained because every shift nearly matches." },
          { label: "Versus KMP", text: "KMP scans once ($\\Theta(n) = 10$ steps) via $\\pi$: the $24$ wasted re-comparisons of $a$'s are what $\\pi$ and $\\delta$ memoize." },
        ],
        result: "$30$ comparisons, $\\Theta((n-m+1)m)$: near-misses on every shift realize the brute-force worst case.",
      },
    ],
    keyTakeaways: [
      "String matching = finding all valid shifts $s \\in \\{0, \\ldots, n-m\\}$; there are exactly $n - m + 1$ candidates.",
      "The brute force is $\\Theta((n-m+1)m)$ worst case — quadratic when $m$ is a constant fraction of $n$.",
      "Every failed shift reveals $m$ text characters that the next shift re-reads from scratch; carrying that information forward is the entire subject of 32.2–32.4."
    ],
    quiz: [
      {
        q: "A pattern of length 5 is sought in a text of length 100. How many shifts does any correct matcher have to consider?",
        options: ["95", "96", "100", "20"],
        answer: 1,
        explanation: "The valid shifts range over $0 \\le s \\le n - m$, which is $100 - 5 + 1 = 96$ candidate positions — one more than the naive difference $n - m$."
      },
      {
        q: "The worst-case running time of the naive matcher is:",
        options: ["$\\Theta(nm)$", "$\\Theta((n-m+1)m)$", "$\\Theta(n + m)$", "$\\Theta(n \\lg m)$"],
        answer: 1,
        explanation: "Shifts times per-shift cost: $(n-m+1)$ shifts at up to $m$ comparisons each. $\\Theta(nm)$ overstates the truth when $m$ is close to $n$: with $m = n$ there is a single shift costing $m = n$, not $n^2$."
      },
      {
        q: "Which input attains the worst-case number of comparisons (with the pattern never necessarily occurring)?",
        options: ["$P = a^m$ in $T = a^n$", "$P = ab$ in $T = a^n$", "$P = a^{m/2}b^{m/2}$ in $T = (ab)^{n/2}$", "$P = ba^m$ in $T = a^n$"],
        answer: 0,
        explanation: "All-$a$ inputs make every shift match all $m$ characters. A pattern starting with $b$ fails at the first character (1 comparison per shift); $ab$ against all $a$ text fails immediately; the alternating case mismatches by the second character."
      },
      {
        q: "The inefficiency of the naive matcher is best described as:",
        options: ["it uses $O(m)$ extra memory per shift", "it re-examines text characters that earlier shifts have already matched", "it must sort the pattern before searching", "it tries shifts in right-to-left order"],
        answer: 1,
        explanation: "A failed shift has already identified $T[s+1..s+j] = P[1..j]$, but the next shift re-compares those same text characters against the pattern prefix as if nothing were known — the information is discarded."
      }
    ]
  },

  // ---------------------------------------------------------------- 32.2
  {
    sectionId: "clrs-ch32-s2",
    readingTime: 7,
    intro: "Rabin–Karp attacks the per-shift cost with arithmetic. It hashes each $m$-character window of the text to a single number modulo a prime $q$ and compares characters only when two hashes agree. The key is a rolling update that computes the next window's hash from the current one in $O(1)$, so all $n - m + 1$ fingerprints cost only $\\Theta(n)$. The price of working modulo $q$ is the spurious hit — a hash collision that must be verified character by character.",
    objectives: [
      "Compute the rolling-hash update and the multiplier $h = d^{m-1} \\bmod q$",
      "Define spurious hits and apply the verify-on-hit discipline",
      "Derive the expected running time and explain the choice of the prime $q$"
    ],
    concepts: [
      {
        term: "Strings as d-ary numbers",
        kind: "method",
        statement: "View a length-$m$ string over an alphabet of size $d = |\\Sigma|$ as the digits of a base-$d$ integer read left to right. The pattern's **fingerprint** is that number reduced modulo a prime $q$: $$p = \\Bigl(\\sum_{i=1}^{m} P[i]\\, d^{m-i}\\Bigr) \\bmod q,$$ and similarly $t_s$ is the value of the window $T[s+1..s+m]$ mod $q$. Preprocessing computes $p$ and the initial window value $t_0$ in $\\Theta(m)$ by Horner-style evaluation.",
        detail: "Comparing the full integers would cost $\\Theta(m)$ per window — no better than the naive matcher. Reducing mod $q$ keeps every value in one machine word, so comparisons and arithmetic are $O(1)$."
      },
      {
        term: "The rolling recurrence",
        kind: "theorem",
        statement: "Let $h = d^{m-1} \\bmod q$, the place value of the window's leading digit. Then for $s = 0, 1, \\ldots, n-m-1$: $$t_{s+1} = \\bigl(d\\,(t_s - T[s+1]\\,h) + T[s+m+1]\\bigr) \\bmod q.$$ Subtract the leading digit times its place value, multiply by $d$ (shifting all remaining digits left), and add the new trailing digit. Each update is a constant number of word operations, so all $n - m + 1$ window hashes are computed in $\\Theta(n - m + 1)$ total.",
        detail: "Because $t_s - T[s+1]h$ can be negative, implementations add a multiple of $q$ before reducing to stay nonnegative — the congruence is unaffected."
      },
      {
        term: "Spurious hits",
        kind: "definition",
        statement: "A shift $s$ is a **hit** when $t_s \\equiv p \\pmod q$. A hit is **valid** if $T[s+1..s+m] = P$ and **spurious** otherwise: distinct strings can share a residue mod $q$. Therefore the algorithm verifies every hit character by character in $O(m)$ before reporting it; the hash test is a filter, never a proof.",
        detail: "If verification were skipped, Rabin–Karp would report false occurrences whenever two different windows collided mod $q$ — which happens for any fixed $q$ on adversarial inputs."
      },
      {
        term: "Expected running time",
        kind: "insight",
        statement: "Treating the window values as roughly uniform in $\\{0, \\ldots, q-1\\}$, each window hits with probability about $1/q$, so the expected number of (true plus spurious) hits is $v + (n-m+1)/q$, where $v$ is the number of true occurrences. Expected time is then $O(n) + O(m(v + (n-m+1)/q))$: choosing a word-sized prime $q$ comfortably above $n$ makes the expected total $O(n + mv)$. The **worst case remains** $\\Theta((n-m+1)m)$ — an adversary can make every window a hit.",
        detail: "Rabin–Karp also generalizes gracefully: one pass can test several patterns of the same length, and the same fingerprint idea gives expected linear-time two-dimensional matching."
      },
      {
        term: "Preprocessing $h = d^{m-1} \\bmod q$",
        kind: "notation",
        statement: "With alphabet size $d = |\\Sigma|$ and prime $q$, the high-order multiplier $h = d^{m-1} \\bmod q$ strips the leading digit in the rolling update $t_{s+1} = (d(t_s - T[s+1]h) + T[s+m+1]) \\bmod q$. Precompute $h$ once in $\\Theta(m)$ by repeated $\\times d \\bmod q$.",
        detail: "Without $h$ each window would cost $\\Theta(m)$; with $h$ each costs $O(1)$. Choosing $q$ with $dq$ fitting a machine word keeps the arithmetic single-precision (text's $d = 10$, $q = 13$ toy uses one digit).",
      },
    ],
    examples: [
      {
        title: "Rabin–Karp on decimal digits",
        problem: "Search for $P = 26$ in the text $T = 3141592653589793$ using base $d = 10$ and prime $q = 13$. Find all occurrences and all spurious hits.",
        steps: [
          { label: "Step 1: Preprocessing", text: "The fingerprint is $p = 26 \\bmod 13 = 0$. The place value is $h = 10^{2-1} \\bmod 13 = 10$. The first window is $T[1..2] = 31$, so $t_0 = 31 \\bmod 13 = 5$." },
          { label: "Step 2: Roll the hash", text: "For the next window, $t_1 = (10\\,(t_0 - T[1]\\,h) + T[3]) \\bmod 13 = (10(5 - 3 \\cdot 10) + 4) \\bmod 13 = -246 \\bmod 13$. Since $-246 = 13 \\cdot (-19) + 1$, we get $t_1 = 1$ — and indeed the window is 14 and $14 \\bmod 13 = 1$." },
          { label: "Step 3: The full sweep", text: "Rolling through all fifteen windows gives $t_0, t_1, \\ldots, t_{14} = 5, 1, 2, 2, 7, 1, 0, 0, 1, 9, 6, 11, 6, 1, 2$. The hits ($t_s = p = 0$) are at $s = 6$ and $s = 7$ only." },
          { label: "Step 4: Verify the hits", text: "At $s = 6$ the window is $T[7..8] = 26 = P$: a valid occurrence. At $s = 7$ the window is $T[8..9] = 65 \\ne 26$: a spurious hit, rejected after two comparisons. Check the roll into $s = 7$: $t_7 = (10(0 - 2\\cdot10) + 5) \\bmod 13 = -195 \\bmod 13 = 0$, exactly the collision $65 \\equiv 26 \\equiv 0 \\pmod{13}$." },
          { label: "Step 5: The cost", text: "Fifteen $O(1)$ hash updates, plus two verifications of $m = 2$ comparisons each — one productive, one wasted on the collision. With a larger $q$ such collisions would be rarer still." }
        ],
        result: "Exactly one occurrence, at shift $s = 6$; one spurious hit at $s = 7$ (window 65), detected by verification."
      },
      {
        title: "Spurious hit, then verified miss",
        problem: "Alphabet $d = 10$, $q = 11$, $P = 26$ ($p = 4$? $26 \\bmod 11 = 4$), text $31415$: find a spurious hit.",
        steps: [
          { label: "Windows", text: "Windows $31,14,41,15$: mods $9,3,8,4$: $31 \\to 9$, $14 \\to 3$, $41 \\to 8$, $15 \\to 4$." },
          { label: "Hit", text: "Window $15$ hashes $4 = p$: hash hit at shift $3$; verify characters $15 \\ne 26$: spurious hit (collision mod $11$)." },
          { label: "Cost", text: "One $m = 2$-character verification on the spurious hit; other windows cost $O(1)$ hash only." },
          { label: "Expected", text: "With $q$ prime $\\approx m$, spurious rate $\\approx 1/q$ per shift: $\\Theta(n)$ expected plus $O(m)$ per true/spurious verification." },
        ],
        result: "Shift $3$ hash-hits but character-misses: spurious hit verified in $O(m)$, all other shifts $O(1)$.",
      },
    ],
    keyTakeaways: [
      "Fingerprint every window mod a word-sized prime; roll with $t_{s+1} = (d(t_s - T[s+1]h) + T[s+m+1]) \\bmod q$ where $h = d^{m-1} \\bmod q$.",
      "A hit is only a suspicion: verify each in $O(m)$, because different strings share residues mod $q$.",
      "Expected time $O(n + mv)$; worst case $\\Theta((n-m+1)m)$ — Rabin–Karp trades the worst-case guarantee for speed, simplicity, and easy generalization."
    ],
    quiz: [
      {
        q: "In the worked example, why did the window 65 trigger character verification?",
        options: ["because 65 and 26 share their last digit", "because $65 \\bmod 13 = 26 \\bmod 13 = 0$", "because the digit sums of 65 and 26 agree", "because 13 divides 26"],
        answer: 1,
        explanation: "The test is congruence mod $q$: $65 \\equiv 0 \\pmod{13}$ and $p = 26 \\equiv 0 \\pmod{13}$, so the window hits. Verification then exposes it as spurious."
      },
      {
        q: "The purpose of the rolling update is to:",
        options: ["avoid reading the text more than once per window boundary", "compute $t_{s+1}$ from $t_s$ with $O(1)$ arithmetic instead of $\\Theta(m)$", "reduce the number of valid shifts", "make the hash collision-free"],
        answer: 1,
        explanation: "Re-fingerprinting each window from scratch costs $\\Theta(m)$; the recurrence subtracts the departing digit and adds the arriving digit in constant time, for $\\Theta(n)$ over all windows."
      },
      {
        q: "What must the algorithm do whenever $t_s \\equiv p \\pmod q$?",
        options: ["report the occurrence immediately", "verify the window against the pattern character by character", "choose a new prime and restart", "skip the next window"],
        answer: 1,
        explanation: "Congruence is necessary but not sufficient for equality — spurious hits exist for every $q$. The $O(m)$ check on each hit is what makes the algorithm correct rather than merely fast."
      },
      {
        q: "To keep the expected total verification cost at $O(n)$ (for few true occurrences), the prime $q$ should be chosen:",
        options: ["as small as possible, e.g. 2", "large — comfortably above $n$ yet still fitting in one machine word", "equal to the alphabet size $d$", "composite, with many divisors"],
        answer: 1,
        explanation: "The expected number of spurious hits is about $(n-m+1)/q$: the larger the prime, the rarer the collisions. It must still fit in a word so that arithmetic mod $q$ stays $O(1)$."
      }
    ]
  },

  // ---------------------------------------------------------------- 32.3
  {
    sectionId: "clrs-ch32-s3",
    readingTime: 7,
    intro: "A string-matching automaton compiles the pattern into a finite state machine. The machine scans the text once, making exactly one table-driven transition per character, and reports a match whenever it enters its single accepting state $m$. All the intelligence lives in the transition function $\\delta$, precomputed from the pattern alone: it encodes exactly how much of a partial match survives each incoming character. The correctness rests on one invariant: the current state is always the length of the longest prefix of $P$ that is a suffix of the text read so far.",
    objectives: [
      "Build the state machine for a pattern and trace it on a text",
      "State and prove the invariant linking the current state to the longest matched prefix-suffix",
      "Explain the $O(m\\,|\\Sigma|)$ construction of $\\delta$ and the resulting $\\Theta(n)$ matching time"
    ],
    concepts: [
      {
        term: "The string-matching automaton",
        kind: "definition",
        statement: "For a pattern $P[1..m]$ over alphabet $\\Sigma$, the automaton has state set $Q = \\{0, 1, \\ldots, m\\}$, start state $0$, and the **single** accepting state $m$. State $q$ means: the last $q$ characters read form $P[1..q]$. The transition function $\\delta : Q \\times \\Sigma \\to Q$ is built from the pattern before the text is seen; matching = feed $T$ through the machine with one $O(1)$ table lookup per character and report an occurrence ending at position $i$ whenever the machine enters state $m$ (shift $i - m$).",
        detail: "The machine never moves backward in the text: this is what makes the matching phase exactly $\\Theta(n)$ — one transition per text character, with no per-step dependence on $m$."
      },
      {
        term: "The transition function",
        kind: "notation",
        statement: "$\\delta(q, a)$ is the length of the **longest prefix of $P$ that is also a suffix of the string $P_q a$**, where $P_q$ denotes $P[1..q]$: $$\\delta(q, a) = \\max\\{k \\le \\min(q+1, m) : P[1..k] \\text{ is a suffix of } P[1..q] \\cdot a\\}.$$ Micro-example for $P = \\text{ababaca}$: $\\delta(4, a) = 5$ because $\\text{abab} \\cdot a$ ends with $\\text{ababa}$; $\\delta(5, b) = 4$ because $\\text{ababab}$ ends with $\\text{abab}$ but not with $\\text{ababa}$.",
        detail: "After reaching the accepting state $m$ the machine keeps going — $\\delta(m, a)$ is defined the same way — so overlapping occurrences are all reported."
      },
      {
        term: "The state invariant",
        kind: "theorem",
        statement: "After the automaton has read $T[1..i]$, its state equals the length of the longest prefix of $P$ that is a suffix of $T[1..i]$. **Proof (induction on $i$):** before any input the state is 0 and the empty prefix is the suffix of the empty text. If the invariant holds at $i$ with state $q$, then appending character $T[i+1]$ leaves exactly the suffix structure of $P_q \\cdot T[i+1]$ to analyze — which is precisely the definition of $\\delta(q, T[i+1])$, so the invariant holds at $i+1$. Consequently the machine is in state $m$ after reading $T[1..i]$ **iff** an occurrence of $P$ ends at position $i$.",
        detail: "This invariant is the entire correctness proof: it identifies each state with a fact about the text already read, and the definition of $\\delta$ is exactly what preserves that fact."
      },
      {
        term: "Building δ in O(m·|Σ|)",
        kind: "method",
        statement: "Computing $\\delta$ naively — for each of the $m \\cdot |\\Sigma|$ entries testing candidate suffixes — costs $O(m^3\\,|\\Sigma|)$. The efficient route uses the prefix function $\\pi$ of Section 32.4: if $q < m$ and $P[q+1] = a$, then $\\delta(q,a) = q+1$; otherwise $\\delta(q,a) = \\delta(\\pi(q), a)$, anchored at $\\delta(0, a) = 1$ if $P[1] = a$ and $0$ otherwise. Filling the table with this recurrence (memoized, in order of decreasing $q$) costs $O(m\\,|\\Sigma|)$.",
        detail: "For a constant-size alphabet this is linear preprocessing; the matcher then runs in $\\Theta(n)$ regardless of $m$ — a total of $O(n + m\\,|\\Sigma|)$."
      },
      {
        term: "Accepting state $m$",
        kind: "definition",
        statement: "State $q$ means the longest prefix of $P$ that is a suffix of text read so far has length $q$; $q = m$ means $P$ itself just matched, so FINITE-AUTOMATON-MATCHER reports shift $i-m$. The automaton stays in $m$'s transitions (via $\\delta(m, a)$) to find overlapping matches.",
        detail: "Overlaps need $\\delta(m,\\cdot)$: pattern $aaa$ in text $aaaa$ matches at shifts $0$ and $1$ because $\\delta(3,a) = 3$, not $0$. Resetting to $0$ would miss the second.",
      },
    ],
    examples: [
      {
        title: "The machine for P = ababaca",
        problem: "Build the transition table of the string-matching automaton for $P = \\text{ababaca}$ over $\\Sigma = \\{a, b, c\\}$ and run it on $T = \\text{abababacaba}$.",
        steps: [
          { label: "Step 1: The transition table", text: "States 0 through 7; rows list $\\delta(q, a), \\delta(q, b), \\delta(q, c)$. State 0: 1, 0, 0. State 1: 1, 2, 0. State 2: 3, 0, 0. State 3: 1, 4, 0. State 4: 5, 0, 0. State 5: 1, 4, 6. State 6: 1, 0, 7. State 7: 1, 2, 0." },
          { label: "Step 2: Spot-check two entries", text: "$\\delta(5, b) = 4$: reading $b$ in state 5 (matched $\\text{ababa}$) gives the string $\\text{ababab}$, whose longest $P$-prefix suffix is $\\text{abab}$ — length 4. And $\\delta(6, c) = 7$ completes the pattern, while $\\delta(7, b) = 2$ because $\\text{ababaca} \\cdot b$ ends with $ab$." },
          { label: "Step 3: Run the text", text: "Feeding $T = \\text{abababacaba}$ one character per transition produces the state sequence 1, 2, 3, 4, 5, 4, 5, 6, 7, 2, 3. The descent from 5 to 4 at the sixth character is exactly the $\\delta(5,b) = 4$ fallback — the mismatch is absorbed by the table, with no backtracking." },
          { label: "Step 4: Read off the occurrences", text: "The machine hits state 7 (accepting) after reading $T[9]$, so an occurrence ends at position 9: shift $9 - 7 = 2$, and indeed $T[3..9] = \\text{ababaca}$. After accepting, it falls to state 2 (via $\\delta(7, b) = 2$ on the next character) and continues hunting." },
          { label: "Step 5: Cost", text: "Eleven text characters, eleven table lookups, zero re-reads. The price was building the $8 \\times 3$ table once." }
        ],
        result: "Transition table as listed; the text drives the machine through states 1,2,3,4,5,4,5,6,7,2,3, finding the single occurrence at shift 2 in $\\Theta(n)$."
      },
      {
        title: "Overlapping matches via $\\delta(m,a)$",
        problem: "Pattern $P = aa$ ($m = 2$) on text $T = aaa$ ($n = 3$). Trace the automaton and list shifts.",
        steps: [
          { label: "Transitions", text: "$\\delta(0,a) = 1$, $\\delta(1,a) = 2$, $\\delta(2,a) = 2$ (longest prefix of $aa$ suffixing $aaa$ is $aa$ itself)." },
          { label: "Scan", text: "$q = 0 \\to 1$ ($a$), $1 \\to 2$ ($a$: match shift $2-2 = 0$), $2 \\to 2$ ($a$: match shift $3-2 = 1$)." },
          { label: "Shifts", text: "Valid shifts $0,1$: $n-m+1 = 2$ windows, both $aa$ ✓." },
          { label: "Naive contrast", text: "Naive rechecks each window ($2\\times 2 = 4$ comparisons); automaton uses $n = 3$ transitions, $\\Theta(n)$." },
        ],
        result: "Shifts $0,1$ both match; $\\delta(2,a) = 2$ (not $0$) is what captures the overlap.",
      },
    ],
    keyTakeaways: [
      "States are matched-prefix lengths $0..m$ with only $m$ accepting; $\\delta(q,a)$ = length of the longest prefix of $P$ that is a suffix of $P_q a$.",
      "The invariant — state = longest prefix of $P$ that is a suffix of the text so far — is the whole correctness proof, and matching is one transition per character: $\\Theta(n)$.",
      "Preprocessing costs $O(m\\,|\\Sigma|)$ via the prefix-function recurrence (Section 32.4); the automaton is the pattern in compiled form."
    ],
    quiz: [
      {
        q: "For $P = \\text{ababaca}$, the machine sits in state 5 and reads $b$. What is the next state?",
        options: ["0", "2", "4", "6"],
        answer: 2,
        explanation: "State 5 means $\\text{ababa}$ is matched; appending $b$ gives $\\text{ababab}$, whose longest prefix of $P$ that is a suffix is $\\text{abab}$ — length 4, so $\\delta(5,b) = 4$."
      },
      {
        q: "A pattern of length $m$ yields a matching automaton with how many states, and which are accepting?",
        options: ["$m$ states, all accepting", "$m+1$ states, only state $m$ accepting", "$m+1$ states, all accepting", "$2^m$ states, only the last accepting"],
        answer: 1,
        explanation: "States record the matched-prefix length, which ranges from 0 to $m$; only the full match $m$ is an occurrence, so it alone is accepting."
      },
      {
        q: "The matching phase runs in $\\Theta(n)$ because:",
        options: ["each character of the text is re-examined at most $m$ times", "the automaton performs exactly one $O(1)$ table transition per text character and never rereads the text", "the text is preprocessed down to its distinct characters", "the pattern is at most half the text length"],
        answer: 1,
        explanation: "The text pointer only advances: state changes are table lookups whose cost is independent of $m$. No backtracking ever occurs — unlike the naive matcher."
      },
      {
        q: "$\\delta(q, a)$ is defined as:",
        options: ["the length of the longest prefix of $P$ that is a suffix of $P_q a$", "the number of occurrences of $a$ in $P_q$", "always $q + 1$ when $a$ appears anywhere in $P$", "the longest common subsequence of $P_q$ and $a$"],
        answer: 0,
        explanation: "After reading $a$ in state $q$, the machine must sit at the longest prefix of $P$ matching a suffix of everything read — that is, a suffix of the string $P_q a$."
      }
    ]
  },

  // ---------------------------------------------------------------- 32.4
  {
    sectionId: "clrs-ch32-s4",
    readingTime: 8,
    intro: "Knuth–Morris–Pratt is the automaton matcher with the table built lazily. The prefix function $\\pi$ records, for each position $q$ of the pattern, the length of the longest proper prefix of $P[1..q]$ that is also its suffix — exactly the state to fall back to on a mismatch. The matcher never moves the text pointer backward: on a mismatch it consults $\\pi$ and continues, achieving $\\Theta(m)$ preprocessing and $\\Theta(n)$ matching. That linearity is an amortized fact, not a per-step one — the complete proof is the depth tier below.",
    objectives: [
      "Compute $\\pi$ for a pattern by hand, position by position",
      "Trace KMP on a text, using $\\pi$ to recover from mismatches without rereading the text",
      "Justify the $\\Theta(m) + \\Theta(n)$ running time with the two-counter amortized argument"
    ],
    concepts: [
      {
        term: "The prefix function",
        kind: "definition",
        statement: "$\\pi[q]$ is the length of the **longest proper prefix of $P[1..q]$ that is also a suffix of $P[1..q]$** (proper: strictly shorter than $q$; so $\\pi[1] = 0$): $$\\pi[q] = \\max\\{k < q : P[1..k] \\text{ is a suffix of } P[1..q]\\}.$$ Such a prefix-suffix is called a **border**. For $P = \\text{ababaca}$: $\\pi = 0, 0, 1, 2, 3, 0, 1$ — e.g. $\\pi[5] = 3$ because $\\text{aba}$ is the longest border of $\\text{ababa}$, and $\\pi[6] = 0$ because $\\text{ababac}$ ends in $c$ while no nonempty prefix does.",
        detail: "The figure below draws $\\pi$ as fallback arcs and shows the slide they induce on a real mismatch."
      },
      {
        term: "Borders and the fallback chain",
        kind: "theorem",
        statement: "Iterating $\\pi$ from $q$ enumerates **all** borders of $P[1..q]$ in strictly decreasing order: $q, \\pi[q], \\pi[\\pi[q]], \\ldots, 0$. Consequently, when a mismatch occurs after $q$ matched characters, the longest prefix of $P$ that can still be aligned against the text ending at the current position has length exactly $\\pi[q]$ — the fallback $q \\leftarrow \\pi[q]$ loses no candidate. This is why KMP is correct and why the automaton's $\\delta$ of 32.3 can be computed from $\\pi$: $\\delta(q,a) = q+1$ if $P[q+1] = a$, else $\\delta(q,a) = \\delta(\\pi(q), a)$.",
        detail: "The enumeration claim follows by induction: any border of $P_q$ shorter than $\\pi[q]$ is a prefix of $P_{\\pi[q]}$ and a suffix of it, hence a border of $P_{\\pi[q]}$."
      },
      {
        term: "KMP-MATCHER",
        kind: "method",
        statement: "Preprocess $P$ into $\\pi$ in $\\Theta(m)$. Then scan with state $q = 0$ for $i = 1$ to $n$: **while** $q > 0$ and $P[q+1] \\ne T[i]$: set $q \\leftarrow \\pi[q]$; **if** $P[q+1] = T[i]$: set $q \\leftarrow q + 1$; **if** $q = m$: report the occurrence at shift $i - m$ and set $q \\leftarrow \\pi[q]$ to continue (which is what finds overlapping occurrences). The text index $i$ never decreases.",
        detail: "The matcher is the 32.3 automaton with $\\delta$ evaluated on the fly: the while loop is the multi-step fallback compressed into a chain of $\\pi$-jumps."
      },
      {
        term: "Amortized linearity",
        kind: "insight",
        statement: "The matcher runs in $\\Theta(n)$ and performs at most $2n$ character comparisons; preprocessing is $\\Theta(m)$. The proof is a two-counter (aggregate) argument: the state $q$ increases at most once per text character — at most $n$ total increases from 0 — while every while-loop iteration strictly decreases $q$, and $q$ never goes below 0, so the number of fallback jumps is at most $n$ as well.",
        detail: "The bound is amortized: a single text character can trigger $\\Theta(m)$ consecutive fallbacks, provided earlier characters built the state up. The masters tier below proves both linearity and the exhaustive-ness of the fallback chain in full."
      },
      {
        term: "PREFIX-FUNCTION (COMPUTE-PREFIX-FUNCTION)",
        kind: "method",
        statement: "Compute $\\pi[1..m]$ in $\\Theta(m)$: keep $k = \\pi[q-1]$, while $k > 0$ and $P[k+1] \\ne P[q]$ fall back $k = \\pi[k]$, then $\\pi[q] = k + (P[k+1] == P[q])$. Same amortized $k$-only-rises argument as KMP-MATCHER, with $P$ playing both pattern and text.",
        detail: "Figure 32.10: $k$ rises at most $m$ times total, so fallbacks total $O(m)$. $\\pi$ is the automaton restricted to pattern-on-pattern, which is why KMP needs no $\\delta$ table.",
      },
    ],
    figures: [
      {
        caption: "Top: the prefix function $\\pi$ for $P = \\text{ababaca}$ — each arc falls back from position $q$ to $\\pi[q]$, so a mismatch slides the pattern right by $q - \\pi[q]$ positions. Bottom: matching against $T = \\text{abababacaba}$: after five green matches the comparison at $i = 6$ fails ($b$ vs $c$), the matcher jumps $q \\leftarrow \\pi[5] = 3$, and the slid pattern's first three characters are already known to match — the amber box resumes at $T[6]$ and the text pointer never moves left.",
        svg: '<svg viewBox="0 0 720 548" width="100%" role="img" aria-label="The prefix function of ababaca drawn as fallback arcs, then a KMP mismatch and recovery on the text abababacaba"><text x="128" y="22" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="600" fill="currentColor">the prefix function π for P = ababaca</text><text x="104" y="92" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" opacity="0.6" fill="currentColor">q</text><text x="104" y="114" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="#10b981">π(q)</text><rect x="128" y="34" width="44" height="44" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="184" y="34" width="44" height="44" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="240" y="34" width="44" height="44" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="296" y="34" width="44" height="44" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="352" y="34" width="44" height="44" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="408" y="34" width="44" height="44" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="464" y="34" width="44" height="44" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="150" y="61" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="17" font-weight="700" fill="currentColor">a</text><text x="206" y="61" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="17" font-weight="700" fill="currentColor">b</text><text x="262" y="61" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="17" font-weight="700" fill="currentColor">a</text><text x="318" y="61" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="17" font-weight="700" fill="currentColor">b</text><text x="374" y="61" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="17" font-weight="700" fill="currentColor">a</text><text x="430" y="61" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="17" font-weight="700" fill="currentColor">c</text><text x="486" y="61" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="17" font-weight="700" fill="currentColor">a</text><text x="150" y="92" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" opacity="0.6" fill="currentColor">1</text><text x="206" y="92" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" opacity="0.6" fill="currentColor">2</text><text x="262" y="92" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" opacity="0.6" fill="currentColor">3</text><text x="318" y="92" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" opacity="0.6" fill="currentColor">4</text><text x="374" y="92" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" opacity="0.6" fill="currentColor">5</text><text x="430" y="92" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" opacity="0.6" fill="currentColor">6</text><text x="486" y="92" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" opacity="0.6" fill="currentColor">7</text><text x="150" y="114" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="#10b981">0</text><text x="206" y="114" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="#10b981">0</text><text x="262" y="114" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="#10b981">1</text><text x="318" y="114" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="#10b981">2</text><text x="374" y="114" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="#10b981">3</text><text x="430" y="114" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="#10b981">0</text><text x="486" y="114" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="#10b981">1</text><path d="M 262 124 C 206 164, 150 164, 150 124" fill="none" stroke="currentColor" stroke-width="1.6" opacity="0.8"/><path d="M 318 124 C 262 208, 206 208, 206 124" fill="none" stroke="currentColor" stroke-width="1.6" opacity="0.8"/><path d="M 374 124 C 318 164, 262 164, 262 124" fill="none" stroke="currentColor" stroke-width="1.6" opacity="0.8"/><path d="M 486 124 C 318 248, 150 248, 150 124" fill="none" stroke="currentColor" stroke-width="1.6" opacity="0.8"/><polygon points="150,119 145.5,130 154.5,130" fill="currentColor"/><polygon points="206,119 201.5,130 210.5,130" fill="currentColor"/><polygon points="262,119 257.5,130 266.5,130" fill="currentColor"/><text x="128" y="268" font-family="ui-sans-serif, system-ui" font-size="11" opacity="0.8" fill="currentColor">arcs q → π[q]: on a mismatch, fall back to π[q]; the pattern slides right by q − π[q], the text pointer never moves</text><text x="128" y="308" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="600" fill="currentColor">KMP on T = abababacaba — the mismatch at i = 6 and the π[5] = 3 recovery</text><text x="86" y="343" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">T</text><rect x="100" y="324" width="28" height="28" fill="#10b981" fill-opacity="0.16" stroke="#10b981" stroke-width="1.2"/><rect x="130" y="324" width="28" height="28" fill="#10b981" fill-opacity="0.16" stroke="#10b981" stroke-width="1.2"/><rect x="160" y="324" width="28" height="28" fill="#10b981" fill-opacity="0.16" stroke="#10b981" stroke-width="1.2"/><rect x="190" y="324" width="28" height="28" fill="#10b981" fill-opacity="0.16" stroke="#10b981" stroke-width="1.2"/><rect x="220" y="324" width="28" height="28" fill="#10b981" fill-opacity="0.16" stroke="#10b981" stroke-width="1.2"/><rect x="250" y="324" width="28" height="28" fill="#ef4444" fill-opacity="0.12" stroke="#ef4444" stroke-width="1.4"/><rect x="280" y="324" width="28" height="28" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.1"/><rect x="310" y="324" width="28" height="28" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.1"/><rect x="340" y="324" width="28" height="28" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.1"/><rect x="370" y="324" width="28" height="28" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.1"/><rect x="400" y="324" width="28" height="28" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.1"/><text x="114" y="343" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><text x="144" y="343" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">b</text><text x="174" y="343" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><text x="204" y="343" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">b</text><text x="234" y="343" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><text x="264" y="343" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">b</text><text x="294" y="343" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><text x="324" y="343" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">c</text><text x="354" y="343" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><text x="384" y="343" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">b</text><text x="414" y="343" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><text x="264" y="367" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#ef4444">≠</text><text x="86" y="391" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">shift 0</text><rect x="100" y="372" width="28" height="28" fill="#10b981" fill-opacity="0.16" stroke="#10b981" stroke-width="1.2"/><rect x="130" y="372" width="28" height="28" fill="#10b981" fill-opacity="0.16" stroke="#10b981" stroke-width="1.2"/><rect x="160" y="372" width="28" height="28" fill="#10b981" fill-opacity="0.16" stroke="#10b981" stroke-width="1.2"/><rect x="190" y="372" width="28" height="28" fill="#10b981" fill-opacity="0.16" stroke="#10b981" stroke-width="1.2"/><rect x="220" y="372" width="28" height="28" fill="#10b981" fill-opacity="0.16" stroke="#10b981" stroke-width="1.2"/><rect x="250" y="372" width="28" height="28" fill="#ef4444" fill-opacity="0.12" stroke="#ef4444" stroke-width="1.4"/><rect x="280" y="372" width="28" height="28" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.1"/><text x="114" y="391" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><text x="144" y="391" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">b</text><text x="174" y="391" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><text x="204" y="391" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">b</text><text x="234" y="391" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><text x="264" y="391" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">c</text><text x="294" y="391" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><line x1="96" y1="422" x2="150" y2="422" stroke="currentColor" stroke-width="1.5"/><polygon points="158,422 146,417 146,427" fill="currentColor"/><text x="168" y="426" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">shift by q − π[q] = 5 − 3 = 2: the 3-character overlap is already matched — nothing is re-compared</text><text x="86" y="457" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">shift 2</text><rect x="160" y="438" width="28" height="28" fill="#10b981" fill-opacity="0.16" stroke="#10b981" stroke-width="1.2"/><rect x="190" y="438" width="28" height="28" fill="#10b981" fill-opacity="0.16" stroke="#10b981" stroke-width="1.2"/><rect x="220" y="438" width="28" height="28" fill="#10b981" fill-opacity="0.16" stroke="#10b981" stroke-width="1.2"/><rect x="250" y="438" width="28" height="28" fill="#f59e0b" fill-opacity="0.18" stroke="#f59e0b" stroke-width="1.4"/><rect x="280" y="438" width="28" height="28" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.1"/><rect x="310" y="438" width="28" height="28" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.1"/><rect x="340" y="438" width="28" height="28" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.1"/><text x="174" y="457" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><text x="204" y="457" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">b</text><text x="234" y="457" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><text x="264" y="457" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">b</text><text x="294" y="457" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><text x="324" y="457" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">c</text><text x="354" y="457" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">a</text><text x="100" y="492" font-family="ui-sans-serif, system-ui" font-size="10.5" opacity="0.85" fill="currentColor">P[4] is compared with T[6] — the same text position as the mismatch; the text pointer never moves left</text><text x="360" y="530" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" opacity="0.9" fill="currentColor">eleven characters read, twelve comparisons in total — one fallback — then the scan continues to the occurrence at shift 2</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "KMP on one mismatch",
        problem: "Search for $P = \\text{ababaca}$ ($\\pi = 0, 0, 1, 2, 3, 0, 1$) in $T = \\text{abababacaba}$, tracking the state $q$ at every character.",
        steps: [
          { label: "Step 1: Climb", text: "Reading $T[1..5] = \\text{ababa}$, every character extends the match: the state rises $q = 1, 2, 3, 4, 5$ with one comparison each." },
          { label: "Step 2: The mismatch at i = 6", text: "$T[6] = b$ but $P[6] = c$: with $q = 5$ matched, the while loop fires once, $q \\leftarrow \\pi[5] = 3$. No other fallback is needed: $P[4] = b$ equals $T[6]$, so the if raises $q$ to 4. The text position $i = 6$ is compared twice in total — never moved backward." },
          { label: "Step 3: Why 3 characters carry over", text: "The five matched characters were $\\text{ababa}$; its longest border is $\\text{aba}$ of length $\\pi[5] = 3$. The slid pattern (shift 2) therefore has $P[1..3] = \\text{aba}$ already aligned with $T[3..5]$ — exactly the green overlap in the figure." },
          { label: "Step 4: To the occurrence", text: "Continuing: $i = 7$ ($a$) gives $q = 5$, $i = 8$ ($c$) gives $q = 6$, $i = 9$ ($a$) gives $q = 7 = m$: an occurrence ends at position 9, shift $9 - 7 = 2$ — and $T[3..9] = \\text{ababaca}$ checks out. The matcher sets $q \\leftarrow \\pi[7] = 1$ and keeps scanning." },
          { label: "Step 5: The tail and the count", text: "The last two characters give $q = 2, 3$ and no further occurrence. Grand total: eleven characters read, twelve comparisons ($11$ if-tests plus one re-test after the single fallback) — against the naive matcher's potential $5 \\cdot 7 = 35$." }
        ],
        result: "One occurrence, at shift 2; a single mismatch resolved by one $\\pi$-jump ($5 \\to 3$); state sequence 1, 2, 3, 4, 5, 4, 5, 6, 7, 2, 3."
      },
      {
        title: "Amortized credit on $ababaca$",
        problem: "KMP-MATCHER for $P = ababaca$ ($m = 7$) scans $T$ of length $10$ with $3$ mismatches. Bound the fallback steps.",
        steps: [
          { label: "$\\pi$", text: "$\\pi = [0,0,1,2,3,0,1]$ for $a,b,a,b,a,c,a$: each fallback follows $\\pi$ down." },
          { label: "Potential", text: "$\\Phi = q$ (current state): matches raise $q$ by $1$ ($\\le n$ rises); each fallback lowers $q$ ($\\le n$ falls): total fallbacks $O(n)$." },
          { label: "Count", text: "$10$ character steps + $\\le 10$ fallbacks $= O(n)$: per-step cost amortized $O(1)$, worst single step $O(m)$ (long fallback chain)." },
          { label: "Versus automaton", text: "Automaton pays $O(1)$ worst per character via $\\delta$ table ($O(m|\\Sigma|)$ space); KMP pays $O(1)$ amortized with $O(m)$ space ($\\pi$ only)." },
        ],
        result: "$\\le 20$ state moves on $n = 10$: KMP is linear amortized, $\\pi$ compresses $\\delta$.",
      },
    ],
    keyTakeaways: [
      "$\\pi[q]$ = the longest border of $P[1..q]$; iterating $\\pi$ enumerates every border in decreasing length, so no candidate alignment is ever skipped.",
      "On a mismatch: $q \\leftarrow \\pi[q]$ with the text index $i$ unchanged — the text pointer never moves left, and overlapping occurrences are still found.",
      "$\\Theta(m)$ preprocessing plus $\\Theta(n)$ matching with at most $2n$ comparisons — an aggregate amortized bound, proved in full below."
    ],
    quiz: [
      {
        q: "The prefix function of the pattern aaaa is:",
        options: ["$0, 0, 0, 0$", "$0, 1, 2, 3$", "$1, 2, 3, 4$", "$0, 0, 1, 2$"],
        answer: 1,
        explanation: "$P[1..q] = a^q$ has the proper prefix $a^{q-1}$ as its longest suffix, so $\\pi[q] = q - 1$: the values $0, 1, 2, 3$. ($1, 2, 3, 4$ is impossible since a border must be proper — shorter than $q$.)"
      },
      {
        q: "In KMP, after a mismatch at text position $i$ with $q$ characters matched, the matcher:",
        options: ["moves the text pointer back to $i - q + 1$ and restarts", "keeps $i$ fixed and sets $q \\leftarrow \\pi[q]$", "skips the text ahead by $m$ positions", "restarts the scan from position 1"],
        answer: 1,
        explanation: "The fallback re-aligns the pattern using the border of the matched prefix; the text character that failed is simply re-tested against the new $P[q+1]$. This is why matching is $\\Theta(n)$."
      },
      {
        q: "$\\pi[q]$ is precisely:",
        options: ["the length of the longest proper prefix of $P[1..q]$ that is also a suffix of $P[1..q]$", "the length of the longest prefix of $P$ that occurs anywhere in $T$", "the number of distinct characters in $P[1..q]$", "the position in $P$ where the previous mismatch occurred"],
        answer: 0,
        explanation: "It is a purely pattern-internal quantity — a border of the first $q$ pattern characters — computable before the text is ever seen."
      },
      {
        q: "Across an entire run on $n$ text characters, the total number of $\\pi$-fallback jumps (while-loop iterations) is at most:",
        options: ["$m$", "$n$", "$nm$", "$n + m$"],
        answer: 1,
        explanation: "Each jump strictly decreases $q$, and $q$ increases at most once per text character (at most $n$ increases from 0) — decreases can never outnumber increases."
      }
    ],
    depth: [
      {
        tier: "masters",
        title: "The amortized linearity of KMP — a complete proof",
        blocks: [
          {
            kind: "theorem",
            heading: "The claim",
            body: "COMPUTE-PREFIX-FUNCTION runs in $\\Theta(m)$, and KMP-MATCHER processes the text in $\\Theta(n)$ after $\\Theta(m)$ preprocessing, performing at most $2n$ character comparisons. No $O(1)$ per-character bound holds — the guarantee is **amortized**, and it is tight."
          },
          {
            kind: "proof",
            heading: "Two counters for COMPUTE-PREFIX-FUNCTION",
            body: "The procedure maintains $k$ with $\\pi[q] = k$, executing: $\\pi[1] = 0$; $k = 0$; for $q = 2$ to $m$: while $k > 0$ and $P[k+1] \\ne P[q]$: $k \\leftarrow \\pi[k]$; if $P[k+1] = P[q]$: $k \\leftarrow k+1$; $\\pi[q] = k$. Track the total movement of $k$. The increase step $k \\leftarrow k + 1$ executes at most once per outer iteration — at most $m - 1$ increases in the whole run, starting from $k = 0$. Every while-loop iteration executes $k \\leftarrow \\pi[k]$, and $\\pi[k] < k$ always holds (a border is proper), so each iteration **strictly decreases** $k$, which is never allowed below 0. A variable that starts at 0, increases at most $m - 1$ times in steps of 1, and never goes negative can be decremented at most $m - 1$ times: the while loop runs at most $m - 1$ times in total. All remaining work is $O(1)$ per outer iteration, so the whole procedure is $\\Theta(m)$."
          },
          {
            kind: "proof",
            heading: "The same budget for the matcher",
            body: "KMP-MATCHER's loop over $i = 1$ to $n$ has the identical shape with $q$ in place of $k$. The step $q \\leftarrow q + 1$ executes at most once per text character, so $q$ increases at most $n$ times from its start at 0. Each while-loop iteration performs $q \\leftarrow \\pi[q]$, a strict decrease, and $q \\ge 0$ always. Hence the total number of fallback jumps over the entire scan is at most $n$. Character comparisons: each of the $n$ loop iterations performs one comparison in its if-test, plus one per while-iteration — at most $n + n = 2n$ in total, and the running time is $\\Theta(n)$."
          },
          {
            kind: "derivation",
            heading: "The potential-function view",
            body: "The same argument dressed as the potential method: let $\\Phi = q$ before each loop iteration ($\\Phi = k$ in preprocessing). For an ascent step (the if succeeds), the actual cost is 1 comparison and $\\Delta\\Phi = +1$, for an amortized cost of 2. For each fallback jump, the actual cost is 1 comparison and $\\Delta\\Phi \\le -1$ (a strict decrease), for an amortized cost of at most 0. Since $\\Phi \\ge 0$ throughout, the total actual cost never exceeds the total amortized cost, which is at most $2n$. The aggregate and potential versions are the same economy: descents are financed by prior ascents."
          },
          {
            kind: "example",
            heading: "A single step can be expensive",
            body: "Take $P = a^m$ and a text built from blocks $a^{m-1}b$. After $m - 1$ letters $a$, the state is $q = m - 1$; the following $b$ fails against $P[m] = a$, so $q \\leftarrow \\pi[m-1] = m - 2$, which fails again, and so on: the state descends $m-1, m-2, \\ldots, 1, 0$ — $m - 1$ fallback jumps caused by **one** text character, and then $P[1] = a$ fails against $b$ as well. That single character costs $\\Theta(m)$. Yet the total over the whole text stays at $2n$, because rebuilding $q = m - 1$ before the next $b$ consumes $m - 1$ further characters. Amortized $O(1)$ per character coexists with unbounded single-character cost."
          },
          {
            kind: "remark",
            heading: "What the counting argument does not show",
            body: "Linearity says the fallback budget balances; it does not by itself justify that falling back only to $\\pi[q]$ (rather than further) is **exhaustive**. That is the border-closure property: if $w$ is any border of $P_q$ with $|w| < \\pi(q)$, then $w$ is a prefix of $P_{\\pi(q)}$ (it is shorter) and also a suffix of it (it is a suffix of $P_q$, and $P_{\\pi(q)}$ is itself a suffix of $P_q$) — so $w$ is a border of $P_{\\pi(q)}$. By induction, the iterates $\\pi(q), \\pi^2(q), \\ldots, 0$ list every border exactly once, in decreasing order. The while loop therefore never skips a candidate state, which is the correctness half; the counting above is the efficiency half."
          },
          {
            kind: "application",
            heading: "Where the machinery lands",
            body: "KMP is the single-pattern special case of the Aho–Corasick dictionary matcher, which builds a failure function over a set of patterns and finds all occurrences of any of them in $O(n + z + M)$, where $M$ is the total pattern length and $z$ the number of hits — the engine behind virus scanners and intrusion-detection filters. The $\\pi$ table also exposes periodicity: $m - \\pi[m]$ is the shortest period of $P$ (for $\\text{abababa}$, $\\pi[7] = 5$ gives period 2), the seed from which the classical Fine–Wilf periodicity lemmas and many string-reconstruction results grow."
          }
        ]
      }
    ]
  }
]

import type { SectionContent } from '../library'

// ============================================================================
// Cormen, Leiserson, Rivest, Stein — Introduction to Algorithms, 3rd Edition
// Chapter 34: NP-Completeness (Sections 34.1 – 34.5)
// ============================================================================

export const clrsCh34Content: SectionContent[] = [
  // ---------------------------------------------------------------- 34.1
  {
    sectionId: "clrs-ch34-s1",
    readingTime: 6,
    intro: "Before we can say a problem is hard, we must say what an instance weighs and what an algorithm costs. This section fixes the vocabulary: abstract problems become bit strings through encodings, algorithms become language deciders, and polynomial time becomes the official border of tractability — a border that turns out to be astonishingly robust.",
    objectives: [
      "Explain why polynomial time is the definition of tractability and how it survives changes of machine model",
      "Distinguish abstract problems from concrete ones via encodings, and predict when the encoding choice matters",
      "Use the formal-language framework: alphabet, language, accepting versus deciding, and the class P"
    ],
    concepts: [
      {
        term: "Abstract problems and decision problems",
        kind: "definition",
        statement: "An **abstract problem** $Q$ is a binary relation on a set $I$ of **problem instances** and a set $S$ of **problem solutions**: $Q \\subseteq I \\times S$. A **decision problem** restricts the solution set to $S = \\{0, 1\\}$ — every instance is a yes-instance or a no-instance — and it is the decision versions that the theory of this chapter classifies.",
        detail: "Optimization problems convert to decision problems by adding a threshold: SHORTEST-PATH asks for a minimum-weight path, while PATH asks whether a path of weight at most $k$ exists. The versions are polynomially interrelated — you can binary-search the optimum with a decision oracle — so classifying the decision version classifies the problem."
      },
      {
        term: "Encodings and concrete problems",
        kind: "definition",
        statement: "An **encoding** $e : I \\to \\{0,1\\}^*$ maps abstract instances to binary strings; an abstract problem plus an encoding is a **concrete problem**, whose input size is the length $|e(x)|$. Complexity classes such as P are properties of concrete problems.",
        detail: "Encodings that differ polynomially never change tractability: adjacency lists ($\\Theta(V + E)$ bits) and adjacency matrices ($\\Theta(V^2)$ bits) are polynomially related, so a polynomial algorithm for one yields a polynomial algorithm for the other. But binary and unary integer encodings are exponentially related: SUBSET-SUM becomes polynomial-time solvable under unary encoding — the pseudo-polynomial phenomenon that Chapter 35 turns into an approximation scheme."
      },
      {
        term: "The formal-language framework",
        kind: "notation",
        statement: "Let $\\Sigma = \\{0,1\\}$ be the binary alphabet, $\\Sigma^*$ the set of all finite binary strings (the **Kleene star**), and $\\epsilon$ the empty string. A **language** is any subset $L \\subseteq \\Sigma^*$. An algorithm $A$ **accepts** a string $x$ when $A(x) = 1$ and **rejects** it when $A(x) = 0$.",
        detail: "Acceptance is weaker than decision: $A$ **accepts the language** $L$ when $x \\in L$ implies $A(x) = 1$, even if it runs forever on strings outside $L$; $A$ **decides** $L$ only if it also halts with 0 on every $x \\notin L$. Decision — halting on every input — is what complexity classes demand."
      },
      {
        term: "The class P",
        kind: "definition",
        statement: "$$P = \\{\\, L \\subseteq \\{0,1\\}^* : \\text{some algorithm decides } L \\text{ in } O(n^k) \\text{ time for some constant } k \\,\\}$$ — the languages decidable in **polynomial time** in the input length $n$.",
        detail: "Membership in P is a property of a language, not of one algorithm: a single clever polynomial-time decider promotes the language forever, however slow earlier attempts were."
      },
      {
        term: "Why polynomial time is the dividing line",
        kind: "insight",
        statement: "**Polynomial time is robust.** Reasonable machine models — random-access machines, Turing machines, actual computers — simulate one another with at most polynomial overhead, so the class of polynomial-time problems is model-independent. Polynomials are also **closed under composition**: a polynomial number of calls to polynomial-time subroutines is polynomial, which is exactly what lets reductions combine solvers later in this chapter.",
        detail: "Empirically, natural problems in P come with low-degree algorithms, while problems outside P have resisted decades of attack. The degree still matters enormously in practice — $n^2$ beats $n^3$ — but as a coarse theory of tractability, polynomial time draws the only line that survives every reasonable formalization of computation."
      }
    ],
    examples: [
      {
        title: "PATH: a decision problem, decided in polynomial time",
        problem: "A directed weighted graph has vertices s, a, b, t and arcs s→a (weight 2), a→t (3), s→b (1), b→t (6). Decide the PATH instances ⟨G, s, t, k⟩ for k = 5 and for k = 4.",
        steps: [
          { label: "Step 1 — model", text: "PATH = the set of triples ⟨G, u, v, k⟩ such that G contains a path from u to v of total weight at most k. It is a decision problem: the answer is 0 or 1." },
          { label: "Step 2 — run Dijkstra", text: "From s: $d(a) = 2$, $d(b) = 1$, and $d(t) = \\min(2 + 3,\\ 1 + 6) = 5$ via s→a→t." },
          { label: "Step 3 — compare with k", text: "For k = 5: $d(t) = 5 \\leq 5$ — accept. For k = 4: $5 > 4$ — reject. Both answers followed from one shortest-path computation." },
          { label: "Step 4 — cost", text: "Dijkstra with a binary heap runs in $O(E \\lg V)$ — polynomial in the encoded instance length, so PATH ∈ P." }
        ],
        result: "PATH ∈ P; the same computation decides every threshold k by one comparison."
      },
      {
        title: "When the encoding changes everything",
        problem: "The SUBSET-SUM instance ⟨{27, 38, 52}, 90⟩ is encoded (a) in binary and (b) in unary. Which encoding keeps the input small, and what does the classic O(n·t) dynamic program become?",
        steps: [
          { label: "Binary", text: "Each number costs $\\Theta(\\lg t)$ bits: the whole instance has length $\\Theta(n \\lg t)$ — for this instance, about 6 bits per number plus 7 for t." },
          { label: "Unary", text: "The target alone costs $t = 90$ bits; the instance length is $\\Theta(n t)$ — exponentially larger than the binary encoding." },
          { label: "Consequence", text: "The $O(n t)$ table-filling algorithm is polynomial in the unary length but exponential in the binary length — pseudo-polynomial time." }
        ],
        result: "SUBSET-SUM is only weakly intractable under binary encoding — the slack that Chapter 35’s FPTAS will exploit."
      }
    ],
    keyTakeaways: [
      "Tractability = polynomial time in the length of the encoding; P is a class of languages over {0,1}*.",
      "Accepting a language is weaker than deciding it — a decider must halt on every input.",
      "Polynomially related encodings (lists vs matrices) never move a problem across the P border; exponentially related ones (binary vs unary) can."
    ],
    quiz: [
      {
        q: "A polynomial-time algorithm written for a random-access machine is ported to a Turing machine. What is guaranteed?",
        options: [
          "It remains polynomial-time, possibly with a larger degree",
          "It becomes exponential, since Turing machines are slower",
          "Nothing can be said without knowing the algorithm",
          "It stays within the same O-notation"
        ],
        answer: 0,
        explanation: "Reasonable models simulate each other with polynomial overhead — that model-independence is precisely why P is defined by polynomials."
      },
      {
        q: "Algorithm A halts with output 1 exactly on the strings of language L and may loop forever elsewhere. Then A…",
        options: [
          "decides L",
          "accepts L but does not decide it",
          "rejects L",
          "proves L ∈ P"
        ],
        answer: 1,
        explanation: "A decider must halt with 0 on every non-member; A only guarantees correct 1s on members — it accepts but does not decide."
      },
      {
        q: "Adjacency lists use Θ(V + E) bits and the adjacency matrix Θ(V²). Why does the choice not affect membership in P?",
        options: [
          "The two lengths are polynomially related, so a polynomial algorithm for one encoding gives one for the other",
          "Both are always equal",
          "P is defined only for list encodings",
          "The matrix encoding is exponentially larger"
        ],
        answer: 0,
        explanation: "Polynomially related encodings preserve polynomial solvability in both directions; only exponentially different encodings can separate."
      },
      {
        q: "Which of these is a decision problem in CLRS’s sense?",
        options: [
          "Find a shortest path from u to v",
          "Sort the given sequence",
          "Is there a path from u to v of weight at most k?",
          "Find the maximum clique in G"
        ],
        answer: 2,
        explanation: "The threshold parameter k makes it a yes/no question — the other three ask for a witness object, not a bit."
      }
    ]
  },

  // ---------------------------------------------------------------- 34.2
  {
    sectionId: "clrs-ch34-s2",
    readingTime: 7,
    intro: "Finding a Hamiltonian cycle looks hopeless; certifying one is trivial. This asymmetry — hard to search, easy to check — defines the class NP. This section formalizes verification, states NP exactly, and maps the border country where P, NP and co-NP meet but whose walls nobody has been able to climb.",
    objectives: [
      "Define verification algorithms and certificates, and verify a HAM-CYCLE instance by hand",
      "State the formal definition of NP via polynomially bounded, polynomially checkable certificates",
      "Situate co-NP, NP ∩ co-NP and P relative to one another, separating known facts from open questions"
    ],
    concepts: [
      {
        term: "Verification algorithms",
        kind: "definition",
        statement: "A **verification algorithm** $A$ takes two inputs: an instance $x$ and a **certificate** $y$. It **verifies** $x$ if there exists a $y$ with $A(x, y) = 1$ — the certificate is evidence that $x$ is a yes-instance. The running time is measured in $|x|$, the instance length alone.",
        detail: "The certificate is supplied by a hypothetical prover; the verifier only checks. For PATH, a certificate is the path itself and the checker sums its weights; for HAM-CYCLE, the purported cycle; for 3-CNF-SAT, the satisfying assignment."
      },
      {
        term: "Certificates",
        kind: "definition",
        statement: "A **certificate** for a yes-instance is any string that convinces the verifier. Crucially, certificates are quantified existentially: the problem ‘has’ one iff some string of polynomial length works — nobody needs to produce it efficiently for membership in NP.",
        detail: "What a certificate is NOT: a hint. It must carry complete, checkable proof of the yes-answer. For COMPOSITES the certificate is a nontrivial factor; for (the complement language) primality, Pratt certificates prove primality — both directions are checkable, which is why COMPOSITES sits in NP ∩ co-NP."
      },
      {
        term: "The class NP",
        kind: "definition",
        statement: "A language $L$ belongs to **NP** if there is a two-input polynomial-time algorithm $A$ and a constant $c$ such that $$L = \\{\\, x : \\exists\\, y \\in \\{0,1\\}^*,\\ |y| \\leq |x|^c \\text{ and } A(x, y) = 1 \\,\\}.$$ Equivalently: NP is the class of languages whose yes-instances have polynomial-size, polynomially checkable certificates.",
        detail: "The initials stand for **nondeterministic polynomial time** — a nondeterministic machine guesses a certificate and verifies it in polynomial time. Since a decider may ignore its certificate, $P \\subseteq NP$; whether the inclusion is strict is the P versus NP question."
      },
      {
        term: "Verification is easier than decision",
        kind: "insight",
        statement: "No polynomial-time algorithm is known for HAM-CYCLE — brute force inspects up to $(n-1)!/2$ candidate cycles — yet verification is easy: check that the proposed sequence visits every vertex exactly once and that each of the $n$ consecutive pairs (including the wraparound) is an edge of the graph. NP collects exactly the problems with this search/check asymmetry.",
        detail: "The lesson generalizes: a verification algorithm is a weak form of algorithm, because it gets help. The entire chapter’s drama is that for NP-complete problems, no amount of cleverness has converted this weak help back into a real algorithm."
      },
      {
        term: "co-NP and the border with P",
        kind: "definition",
        statement: "**co-NP** is the class of languages whose complements lie in NP: $L \\in \\text{co-NP}$ iff $\\bar{L} \\in NP$. COMPOSITES lies in NP ∩ co-NP — a factor certifies compositeness, a Pratt certificate certifies primality — while no such dual certificates are known for SAT.",
        detail: "Whether NP = co-NP is open, exactly like P versus NP, and P ⊆ NP ∩ co-NP is known (decide the problem, ignore the certificate). Since the AKS algorithm (2002), PRIMES is known to lie in P outright — a rare wall that did fall."
      }
    ],
    figures: [
      {
        caption: "The landscape of classes, after CLRS Figure 34.3. P sits inside the lens NP ∩ co-NP; NP-complete problems live in NP but (conjecturally) outside co-NP. Whether any region properly contains another beyond P ⊆ NP ∩ co-NP is open.",
        svg: `<svg viewBox="0 0 640 360" width="100%" role="img" aria-label="Venn diagram of P inside NP intersect co-NP, with NP-complete and co-NP-complete regions"><rect x="8" y="8" width="624" height="344" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/><text x="24" y="36" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.7">all formal languages over {0,1}</text><circle cx="250" cy="200" r="140" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.8"/><circle cx="390" cy="200" r="140" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.8"/><ellipse cx="168" cy="152" rx="42" ry="26" fill="#f59e0b" fill-opacity="0.14" stroke="#f59e0b" stroke-width="1.4"/><text x="168" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">NP-complete</text><ellipse cx="472" cy="152" rx="42" ry="26" fill="#f59e0b" fill-opacity="0.14" stroke="#f59e0b" stroke-width="1.4"/><text x="472" y="157" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">co-NP-complete</text><ellipse cx="320" cy="242" rx="46" ry="62" fill="#10b981" fill-opacity="0.14" stroke="#10b981" stroke-width="1.6"/><text x="320" y="248" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="700">P</text><text x="145" y="278" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="700" font-style="italic">NP</text><text x="497" y="278" font-family="ui-sans-serif, system-ui" font-size="15" fill="currentColor" text-anchor="middle" font-weight="700" font-style="italic">co-NP</text><text x="320" y="338" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.7" font-style="italic">the green lens is NP ∩ co-NP — languages with certificates both ways</text></svg>`,
        afterConcept: 5
      }
    ],
    examples: [
      {
        title: "Verifying a Hamiltonian cycle",
        problem: "Let G have vertex set {1, 2, 3, 4, 5} and edge set {12, 23, 34, 45, 51, 13}. Verify the certificate y = ⟨1, 2, 3, 4, 5⟩, then the certificate y′ = ⟨1, 3, 2, 4, 5⟩.",
        steps: [
          { label: "Step 1 — format", text: "A certificate lists 5 vertices claiming the Hamiltonian cycle $v_1 \\to v_2 \\to v_3 \\to v_4 \\to v_5 \\to v_1$." },
          { label: "Step 2 — distinctness", text: "For y: the entries 1, 2, 3, 4, 5 are all distinct ✓. For y′: 1, 3, 2, 4, 5 — also distinct ✓." },
          { label: "Step 3 — edges", text: "y: 12 ∈ E ✓, 23 ∈ E ✓, 34 ∈ E ✓, 45 ∈ E ✓, 51 ∈ E ✓ — verified, G is Hamiltonian. y′: 13 ∈ E ✓, 32 = 23 ∈ E ✓, but 24 ∉ E ✗ — reject." },
          { label: "Step 4 — cost", text: "Five lookups plus a duplicate scan: $O(V + E)$ work, polynomial in the instance — HAM-CYCLE ∈ NP." }
        ],
        result: "y verifies; y′ dies on the missing edge 24. Checking never searched the 12 possible cycles."
      },
      {
        title: "Verifying VERTEX-COVER",
        problem: "Graph path $1-2-3-4$, certificate $C = \\{2,3\\}$, $k = 2$. Verify in polynomial time.",
        steps: [
          { label: "Size", text: "$|C| = 2 \\le k = 2$ ✓ ($O(|V|)$ count)." },
          { label: "Edges", text: "Check each edge has an endpoint in $C$: $1-2$ ($2$ ✓), $2-3$ ($2$ ✓), $3-4$ ($3$ ✓): $O(|E|)$ scans." },
          { label: "Certificate length", text: "$|C| \\le |V|$: polynomially bounded in input size ✓." },
          { label: "NP membership", text: "Verifier $O(V+E)$: VERTEX-COVER $\\in$ NP (finding $C$ is hard, checking is easy: the asymmetry defining NP)." },
        ],
        result: "$C = \\{2,3\\}$ verified in $O(V+E)$: certificates are short and checkable, search is not.",
      },
    ],
    keyTakeaways: [
      "NP means polynomially verifiable, not polynomially solvable — certificates plus checkers.",
      "The certificate bound |y| ≤ |x|^c is what keeps verification polynomial in the instance alone.",
      "P ⊆ NP ∩ co-NP is known; NP versus co-NP, like P versus NP, is open."
    ],
    quiz: [
      {
        q: "HAM-CYCLE belongs to NP because…",
        options: [
          "a polynomial-time algorithm finds a Hamiltonian cycle in any graph",
          "a proposed cycle of n vertices can be checked against E in polynomial time",
          "every graph has a Hamiltonian cycle",
          "the complement of HAM-CYCLE is in P"
        ],
        answer: 1,
        explanation: "Membership in NP needs only a checker: the cycle itself is the certificate, verified by n edge lookups and a distinctness scan."
      },
      {
        q: "Why does the definition of NP bound the certificate by |x|^c?",
        options: [
          "To keep the verifier’s runtime polynomial in |x|, since it must at least read y",
          "To make NP a subset of P",
          "Because certificates are always short in practice",
          "To exclude optimization problems"
        ],
        answer: 0,
        explanation: "An exponentially long certificate would make even a linear scan of it exponential in |x|; the polynomial bound is part of what ‘verification’ means."
      },
      {
        q: "If a problem is in NP, what follows about its complement?",
        options: [
          "The complement is in NP",
          "The complement is in co-NP",
          "The complement is in P",
          "Nothing — whether NP = co-NP is open"
        ],
        answer: 3,
        explanation: "By definition the complement is in co-NP; whether it is also in NP would follow from NP = co-NP, a famous open question."
      },
      {
        q: "Which containment is actually known (not open)?",
        options: [
          "P = NP",
          "NP ⊆ P",
          "P ⊆ NP",
          "NP ∩ co-NP = P"
        ],
        answer: 2,
        explanation: "A polynomial-time decider serves as its own verifier with an empty certificate; every other displayed relation is unresolved."
      }
    ]
  },

  // ---------------------------------------------------------------- 34.3
  {
    sectionId: "clrs-ch34-s3",
    readingTime: 8,
    intro: "Reducibility is the chapter’s engine: one problem translated into another so that a solver for the second solves the first. With it come the definitions of NP-hard and NP-complete, the collapse theorem tying them all to P versus NP, and the seed of the entire theory — the circuit-satisfiability problem, whose NP-completeness is proved straight from the definition of NP.",
    objectives: [
      "Define polynomial-time reducibility and use its transitivity and P-closure, including the output-length lemma",
      "State NP-hard and NP-complete, and prove the collapse theorem: one NP-complete problem in P implies P = NP",
      "Reproduce the proof that CIRCUIT-SAT is NP-complete — the seed reduction"
    ],
    concepts: [
      {
        term: "Polynomial-time reducibility",
        kind: "definition",
        statement: "A language $L_1$ is **polynomial-time reducible** to $L_2$, written $L_1 \\leq_p L_2$, if a polynomial-time computable function $f : \\{0,1\\}^* \\to \\{0,1\\}^*$ satisfies $$x \\in L_1 \\iff f(x) \\in L_2 \\quad \\text{for every } x.$$ Intuition: $L_2$ is **at least as hard** as $L_1$ — compose $f$ with a solver for $L_2$ to solve $L_1$.",
        detail: "The direction is the classic trap: the reduction flows FROM the hard-known problem TO the target. Writing $L_1 \\leq_p L_2$ reads ‘$L_1$ is no harder than $L_2$’, like an inequality between difficulties."
      },
      {
        term: "Properties of ≤p",
        kind: "theorem",
        statement: "**Transitivity.** $L_1 \\leq_p L_2$ and $L_2 \\leq_p L_3$ imply $L_1 \\leq_p L_3$: compose the functions; running times and degrees multiply. **P-closure.** If $L_1 \\leq_p L_2$ and $L_2 \\in P$, then $L_1 \\in P$. The hidden lemma making both work: a reduction running $O(n^k)$ steps **outputs at most $O(n^k)$ bits** — a machine cannot write more bits than steps — so the downstream solver’s input is polynomially long.",
        detail: "Skip the output-length lemma and the closure proof is subtly broken: the second algorithm’s running time must be polynomial in $n$, not in an unbounded $|f(x)|$."
      },
      {
        term: "NP-hard and NP-complete",
        kind: "definition",
        statement: "A language $L$ is **NP-hard** if every language $L' \\in NP$ satisfies $L' \\leq_p L$ — everything in NP reduces to it. $L$ is **NP-complete** if it is NP-hard **and** $L \\in NP$. NP-complete problems are the hardest problems in NP; thousands are now known.",
        detail: "NP-hard alone does not require membership in NP — a problem can sit above the class entirely. NP-completeness is the conjunction: hard for all of NP, and inside it."
      },
      {
        term: "The collapse theorem",
        kind: "theorem",
        statement: "**If any NP-complete problem lies in P, then P = NP.** Dually, if any single problem in NP lies outside P, then no NP-complete problem lies in P. The reason: if the NP-complete $L$ is decidable in polynomial time, so is every $L' \\in NP$, because $L' \\leq_p L$ and P is closed under reductions.",
        detail: "This is why one efficient SAT solver would settle every open problem in the catalog at once — and why, conversely, decades of failure on SAT are evidence (though not proof) that P ≠ NP."
      },
      {
        term: "CIRCUIT-SAT: the seed problem",
        kind: "theorem",
        statement: "**CIRCUIT-SAT is NP-complete.** *In NP:* the certificate assigns 0/1 to each input wire; evaluating gates in topological order verifies the output is 1 in time linear in the circuit size. *NP-hard:* for any $L \\in NP$ with verifier $A(x, y)$ and bound $|y| \\leq |x|^c$, fix $x$ and construct a combinational circuit whose input variables are the bits of $y$ and whose gates compute $A(x, y)$ — the verifier’s execution, unrolled computation-step by computation-step with $x$ hard-wired as constants. The circuit outputs 1 for some $y$ iff $x \\in L$.",
        detail: "Every layer of the unrolled computation has polynomial size because $A$ runs in polynomial time — that is precisely where ‘polynomial verification’ becomes ‘polynomial circuitry’. The construction is the theoretical ancestor of the practical observation that any computation is a circuit."
      }
    ],
    figures: [
      {
        caption: "A satisfiable combinational circuit computing $y = (x_1 \\land \\neg x_2) \\lor x_3$. The annotated assignment $(x_1, x_2, x_3) = (1, 0, 0)$ propagates to $y = 1$; checking it gate by gate is exactly the certificate verification in CIRCUIT-SAT ∈ NP.",
        svg: `<svg viewBox="0 0 640 320" width="100%" role="img" aria-label="A small combinational circuit with three inputs, a NOT gate, an AND gate and an OR gate, annotated with a satisfying assignment"><text x="320" y="24" font-family="ui-sans-serif, system-ui" font-size="13.5" fill="currentColor" text-anchor="middle" font-weight="600">y = (x₁ ∧ ¬x₂) ∨ x₃</text><circle cx="60" cy="80" r="15" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.8"/><text x="60" y="85" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">x₁</text><circle cx="60" cy="160" r="15" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.8"/><text x="60" y="165" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">x₂</text><circle cx="60" cy="240" r="15" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.8"/><text x="60" y="245" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">x₃</text><text x="60" y="112" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">= 1</text><text x="60" y="192" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">= 0</text><text x="60" y="272" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">= 0</text><path d="M 75,80 L 265,80 L 265,95 L 290,95" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M 75,160 L 150,160" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M 191,160 L 255,160 L 255,125 L 290,125" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M 150,150 L 180,160 L 150,170 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><circle cx="186" cy="160" r="5" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="165" y="142" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">NOT</text><path d="M 290,70 L 322,70 A 40,40 0 0 1 322,150 L 290,150 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><text x="318" y="114" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">AND</text><path d="M 362,110 L 440,110 L 440,130 L 492,130" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M 75,240 L 465,240 L 465,170 L 492,170" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M 482,110 Q 525,110 560,150 Q 525,190 482,190 Q 500,150 482,110 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><text x="519" y="155" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">OR</text><path d="M 560,150 L 590,150" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="590" cy="150" r="15" fill="#10b981" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8"/><text x="590" y="155" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">y</text><text x="180" y="72" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">1</text><text x="224" y="150" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">1</text><text x="400" y="100" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">1</text><text x="575" y="136" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b" text-anchor="middle">1</text><text x="320" y="300" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.7" font-style="italic">the assignment (1, 0, 0) is a certificate: walk the gates in topological order</text></svg>`,
        afterConcept: 5
      }
    ],
    examples: [
      {
        title: "Composing a reduction with a solver — the degree arithmetic",
        problem: "Suppose $L_1 \\leq_p L_2$ via a reduction f running in $O(n^3)$ time, and $L_2$ has an $O(m^2)$ decider B. What does it cost to decide $L_1$, and why can the length of f(x) not be ignored?",
        steps: [
          { label: "Step 1 — output length", text: "f runs $O(n^3)$ steps, so it writes at most $O(n^3)$ bits: $|f(x)| = O(n^3)$. A machine cannot emit more bits than it executes steps — this is the lemma that keeps compositions honest." },
          { label: "Step 2 — solver cost", text: "B on an input of $m = O(n^3)$ bits costs $O(m^2) = O(n^6)$ time." },
          { label: "Step 3 — total", text: "$O(n^3) + O(n^6) = O(n^6)$ — still polynomial, with degree $6 = 3 \\cdot 2$: degrees multiply through the composition." }
        ],
        result: "This tiny computation is the proof of P-closure and, chained, of transitivity — every link is only polynomial loss."
      },
      {
        title: "HAM-CYCLE reduces to TSP decision",
        problem: "Reduce HAM-CYCLE on $V = 4$ cycle $1-2-3-4-1$ to TSP decision with bound $k = 4$.",
        steps: [
          { label: "Construction", text: "Complete graph on $4$ vertices: weight $1$ if edge in $G$, $2$ otherwise. $k = |V| = 4$. Poly-time ($O(V^2)$ edges)." },
          { label: "Forward", text: "HAM-CYCLE $1-2-3-4-1$ uses $4$ weight-$1$ edges: tour cost $4 \\le k$ ✓." },
          { label: "Backward", text: "Tour cost $\\le 4$ on $4$ edges of weight $\\ge 1$ forces all weight $1$: tour is a HAM-CYCLE in $G$." },
          { label: "Poly bound", text: "Output size $O(V^2)$ (weights $1/2$): polynomial in $|G|$; transducer $O(V^2)$ time: $\\le_p$ holds, so TSP is NP-hard (and in NP, hence NP-complete)." },
        ],
        result: "HAM-CYCLE $\\le_p$ TSP-decision via $1/2$ weights and $k = |V|$: tours of cost $k$ are exactly Hamiltonian cycles.",
      },
    ],
    keyTakeaways: [
      "L₁ ≤p L₂ means L₂ is at least as hard as L₁: reduction plus solver composes into a solver.",
      "NP-complete = in NP + NP-hard; one NP-complete problem in P collapses P onto NP.",
      "CIRCUIT-SAT is proved NP-complete directly from the definition of NP — verifiers compile into circuits — and seeds every reduction that follows."
    ],
    quiz: [
      {
        q: "If L₁ ≤p L₂, the reduction tells you…",
        options: [
          "L₁ is at least as hard as L₂",
          "the two have the same complexity",
          "L₂ is at least as hard as L₁",
          "L₁ ∈ P"
        ],
        answer: 2,
        explanation: "The arrow points toward the harder problem: L₂’s solver would solve L₁, so L₂ carries at least L₁’s difficulty."
      },
      {
        q: "To prove problem X NP-hard, the standard route is…",
        options: [
          "reduce X to a known NP-complete problem",
          "reduce a known NP-complete problem to X",
          "verify X in polynomial time",
          "show X ∉ P"
        ],
        answer: 1,
        explanation: "Reducing the known-hard problem to X transfers its hardness into X; reducing X to the known problem proves only that X is easy."
      },
      {
        q: "Why is a reduction’s output length automatically polynomial in its input length?",
        options: [
          "Because outputs are always shorter than inputs",
          "Because reductions are injective",
          "Because a machine running polynomially many steps can write only polynomially many bits",
          "It is not automatic — it must be assumed"
        ],
        answer: 2,
        explanation: "Each written bit costs at least one step, so an O(n^k)-time transducer emits at most O(n^k) bits — the lemma behind P-closure."
      },
      {
        q: "CIRCUIT-SAT’s special role in the theory is that…",
        options: [
          "it reduces to every problem in NP",
          "its NP-completeness is proved directly from the definition of NP — no prior NP-complete problem is needed",
          "it is the only NP-complete problem not in NP",
          "it is decidable in O(n lg n) time"
        ],
        answer: 1,
        explanation: "Every NP problem’s verifier compiles to a circuit, giving the seed reduction; all later NP-completeness results chain off it."
      }
    ]
  },

  // ---------------------------------------------------------------- 34.4
  {
    sectionId: "clrs-ch34-s4",
    readingTime: 9,
    intro: "With the seed in hand, proving new problems NP-complete becomes engineering: show the target is in NP, then translate a known NP-complete problem into it. This section runs the pipeline twice — from circuits to SAT, from SAT to 3-CNF-SAT — establishing the 3-clause normal form that powers the entire catalog of the next section.",
    objectives: [
      "Execute the two-step NP-completeness proof method: membership in NP plus a reduction from a known NP-complete problem",
      "Compile a gate-level circuit into CNF clauses and split long clauses down to three literals",
      "Justify both directions of each transformation and verify the constructions on small examples"
    ],
    concepts: [
      {
        term: "The two-step proof method",
        kind: "method",
        statement: "To prove a language $L$ NP-complete: **(1)** show $L \\in NP$ — exhibit a certificate and a polynomial-time checker; **(2)** show $L$ is NP-hard by reducing a known NP-complete problem $L'$ to $L$: build, in polynomial time, a mapping $f$ with $x \\in L' \\iff f(x) \\in L$. Both directions of the equivalence are mandatory.",
        detail: "Skipping step 1 leaves you with NP-hardness only — a genuinely weaker claim. Skipping a direction of the equivalence in step 2 silently proves nothing: unsatisfiable formulas could map into satisfiable ones."
      },
      {
        term: "SAT and conjunctive normal form",
        kind: "definition",
        statement: "A **literal** is a variable or its negation; a **clause** is a disjunction (OR) of literals; a formula in **conjunctive normal form (CNF)** is a conjunction (AND) of clauses; **3-CNF** allows at most three literals per clause. **SAT** asks whether a boolean formula has a satisfying assignment; **3-CNF-SAT** restricts the input to 3-CNF formulas.",
        detail: "Both are trivially in NP — the assignment is the certificate and evaluation is linear. All the work is in the hardness half, and both hardness proofs are syntactic rewrites."
      },
      {
        term: "SAT is NP-complete",
        kind: "theorem",
        statement: "Reduce CIRCUIT-SAT to SAT: give every **wire** of the circuit its own variable; each gate becomes a few clauses asserting the output equals the gate applied to its inputs. An AND gate with inputs $x_1, x_2$ and output $x_3$ contributes $$(\\neg x_1 \\lor \\neg x_2 \\lor x_3) \\land (x_1 \\lor \\neg x_3) \\land (x_2 \\lor \\neg x_3),$$ the 3-CNF encoding of $x_3 \\leftrightarrow (x_1 \\land x_2)$. An OR gate contributes $(x_1 \\lor x_2 \\lor \\neg x_3) \\land (\\neg x_1 \\lor x_3) \\land (\\neg x_2 \\lor x_3)$; a NOT gate contributes $(x_1 \\lor x_3) \\land (\\neg x_1 \\lor \\neg x_3)$. Appending the unit clause $(y)$ for the output wire makes the formula satisfiable exactly when the circuit is.",
        detail: "The blowup is three clauses per gate — linear. A satisfying wire-assignment of the formula evaluates the circuit consistently and forces $y = 1$; a satisfying input of the circuit extends to all wires by propagation. Nothing else is needed."
      },
      {
        term: "3-CNF-SAT is NP-complete",
        kind: "theorem",
        statement: "Reduce SAT to 3-CNF-SAT: the construction above already yields CNF; any clause with more than three literals is replaced by a chain over fresh variables — a 4-literal clause $(a_1 \\lor a_2 \\lor a_3 \\lor a_4)$ becomes $$(a_1 \\lor a_2 \\lor z) \\land (\\neg z \\lor a_3 \\lor a_4),$$ and in general $k$ literals become $k - 2$ clauses over $k - 3$ fresh variables. Each replacement preserves satisfiability exactly and the total blowup is linear.",
        detail: "Why not just pad short clauses with repeated or dummy variables? Padding works for clauses below three literals; the chain construction handles the long ones. The masters tier below proves both directions of the replacement in full."
      },
      {
        term: "The reduction design template",
        kind: "method",
        statement: "Every catalog proof follows one recipe: **(1)** membership in NP via an obvious certificate; **(2)** choose the source NP-complete problem; **(3)** design **gadgets** — local structures that force choices in the target to mirror choices in the source; **(4)** prove $x \\in L' \\Rightarrow f(x) \\in L$ and $f(x) \\in L \\Rightarrow x \\in L$ separately; **(5)** verify the construction runs in polynomial time.",
        detail: "The habit of proving the two directions separately cannot be overdrilled: most wrong reductions on exams fail exactly there, by letting a yes-instance of the target leak back to a no-instance of the source."
      }
    ],
    examples: [
      {
        title: "Splitting a 4-literal clause — both directions",
        problem: "Transform the clause $(x_1 \\lor \\neg x_2 \\lor x_3 \\lor x_4)$ into 3-CNF and verify that satisfiability is preserved in both directions.",
        steps: [
          { label: "Step 1 — construct", text: "Introduce a fresh variable $z$ and write $(x_1 \\lor \\neg x_2 \\lor z) \\land (\\neg z \\lor x_3 \\lor x_4)$." },
          { label: "Step 2 — forward", text: "Take any satisfying assignment of the long clause. If $x_1$ or $\\neg x_2$ is true, set $z = 0$: both clauses hold ($\\neg z$ saves the second). If instead $x_3$ or $x_4$ is true, set $z = 1$: the first clause holds via $z$, the second via the true literal." },
          { label: "Step 3 — backward", text: "Suppose the conjunction holds while all of $x_1, \\neg x_2, x_3, x_4$ are false. The first clause forces $z = 1$; the second then reads $(0 \\lor 0 \\lor 0)$ — false. Contradiction: the long clause must have been satisfiable." },
          { label: "Step 4 — accounting", text: "4 literals → 2 clauses of 3 literals, 1 fresh variable; in general $k$ literals → $k - 2$ clauses and $k - 3$ fresh variables — linear blowup." }
        ],
        result: "The two formulas are equisatisfiable: exactly the property a decision reduction needs."
      },
      {
        title: "From gate to clauses, one assignment at a time",
        problem: "An AND gate has inputs $x_1, x_2$ and output wire $x_3$. Check that the clause set $(\\neg x_1 \\lor \\neg x_2 \\lor x_3) \\land (x_1 \\lor \\neg x_3) \\land (x_2 \\lor \\neg x_3)$ accepts exactly the pairs with $x_3 = x_1 \\land x_2$, by testing $(x_1, x_2) = (1, 0)$.",
        steps: [
          { label: "Step 1 — the gate demands", text: "With $x_1 = 1, x_2 = 0$ the gate output must be $x_3 = 0$." },
          { label: "Step 2 — try x₃ = 1", text: "Clause 1: $(0 \\lor 1 \\lor 1)$ ✓. Clause 2: $(1 \\lor 0)$ ✓. Clause 3: $(x_2 \\lor \\neg x_3) = (0 \\lor 0)$ ✗ — forbidden, as it must be." },
          { label: "Step 3 — try x₃ = 0", text: "Clause 1: $(0 \\lor 1 \\lor 0)$ ✓. Clause 2: $(1 \\lor 1)$ ✓. Clause 3: $(0 \\lor 1)$ ✓ — accepted, matching the gate." },
          { label: "Step 4 — all inputs", text: "Each of the four input pairs rules out exactly the wrong value of $x_3$ — the clauses compute AND." }
        ],
        result: "Three clauses per gate compile the circuit into CNF; SAT is NP-complete."
      }
    ],
    keyTakeaways: [
      "Two steps, always: L ∈ NP, then a known NP-complete problem reduces to L.",
      "Gates become three clauses each; long clauses become chains of 3-clauses; both transformations preserve satisfiability exactly.",
      "3-CNF-SAT is the hub of the theory — clique, vertex cover, Hamiltonicity, TSP and subset sum all reduce from it."
    ],
    quiz: [
      {
        q: "The three clauses encoding an AND gate $x_3 \\leftrightarrow x_1 \\land x_2$ are…",
        options: [
          "$(x_1 \\lor x_2 \\lor x_3)$ alone",
          "$(\\neg x_1 \\lor \\neg x_2 \\lor x_3) \\land (x_1 \\lor \\neg x_3) \\land (x_2 \\lor \\neg x_3)$",
          "$(x_1 \\lor \\neg x_3) \\land (x_2 \\lor \\neg x_3)$ only",
          "$(\\neg x_1 \\lor x_3) \\land (\\neg x_2 \\lor x_3) \\land (x_1 \\lor x_2 \\lor \\neg x_3)$"
        ],
        answer: 1,
        explanation: "Clause 1 forbids both inputs true with output false; clauses 2 and 3 forbid the output true while an input is false — together exactly the equivalence."
      },
      {
        q: "The fresh variables z in clause-splitting exist to…",
        options: [
          "remember which literals were true, so satisfiability survives with at most three literals per clause",
          "shorten the formula",
          "make every clause have exactly two literals",
          "encode the certificate separately"
        ],
        answer: 0,
        explanation: "z acts as a one-bit memory: set it true when a later literal saves the chain, false when an early one does — both directions remain provable."
      },
      {
        q: "A valid NP-completeness proof of L from a known NP-complete L′ requires…",
        options: [
          "a polynomial-time f with $x \\in L' \\iff f(x) \\in L$, plus $L \\in NP$",
          "a polynomial-time f with $x \\in L' \\Rightarrow f(x) \\in L$ only",
          "a heuristic mapping that fails rarely",
          "a proof that $L \\notin P$"
        ],
        answer: 0,
        explanation: "One direction transfers no hardness; membership in NP is the other half of NP-completeness — both halves are required."
      },
      {
        q: "The gate-to-clause transformation preserves…",
        options: [
          "the number of satisfying assignments",
          "satisfiability itself — equisatisfiability — which is all a decision reduction needs",
          "the clause count",
          "a unique truth assignment"
        ],
        answer: 1,
        explanation: "Wire variables can be re-encoded, so model counts change; only the yes/no answer is invariant — and that is exactly what reductions transfer."
      }
    ],
    depth: [
      {
        tier: "masters",
        title: "The SAT → 3-CNF-SAT reduction, clause by clause",
        blocks: [
          {
            kind: "para",
            body: "Every problem in the Chapter 34 catalog funnels through 3-CNF-SAT, so the two mechanisms that manufacture 3-CNF — compiling gates into clauses, and splitting long clauses — deserve to be read once at full resolution. Both are constructive, both preserve satisfiability exactly, and both run in linear time. Master them and the catalog’s proofs reduce to gadget bookkeeping."
          },
          {
            kind: "derivation",
            heading: "Mechanism 1 — gates become clauses",
            body: "Fix a combinational circuit with a single output wire and introduce one boolean variable per wire; input wires are the free variables. Each gate contributes clauses asserting that its output variable equals the gate of its inputs: an AND gate with inputs $x_1, x_2$ and output $x_3$ contributes $$(\\neg x_1 \\lor \\neg x_2 \\lor x_3) \\land (x_1 \\lor \\neg x_3) \\land (x_2 \\lor \\neg x_3),$$ the three clauses being exactly the 3-CNF encoding of $x_3 \\leftrightarrow (x_1 \\land x_2)$: the first forbids $x_1 = x_2 = 1$ with $x_3 = 0$, and the second and third forbid $x_3 = 1$ while an input is 0. An OR gate contributes $(x_1 \\lor x_2 \\lor \\neg x_3) \\land (\\neg x_1 \\lor x_3) \\land (\\neg x_2 \\lor x_3)$; a NOT gate with output $x_3$ contributes $(x_1 \\lor x_3) \\land (\\neg x_1 \\lor \\neg x_3)$. Finally append the unit clause $(y)$ naming the output wire. Forward: a satisfying input assignment extends to all wire variables by propagating values gate by gate, and the unit clause forces $y = 1$. Backward: a satisfying assignment of the formula restricts to the input wires, and the gate clauses force every wire variable to equal the value the circuit computes on those inputs — so the circuit’s output is 1. Three clauses per gate, one per output: the formula is linear in the circuit."
          },
          {
            kind: "derivation",
            heading: "Mechanism 2 — splitting long clauses",
            body: "A clause $(a_1 \\lor a_2 \\lor \\dots \\lor a_k)$ with $k \\geq 4$ literals becomes the conjunction $$(a_1 \\lor a_2 \\lor z_1) \\land (\\neg z_1 \\lor a_3 \\lor z_2) \\land \\dots \\land (\\neg z_{k-3} \\lor a_{k-1} \\lor a_k)$$ over fresh variables $z_1, \\dots, z_{k-3}$ — that is $k - 2$ clauses, each with at most three literals. **Forward direction.** Given a satisfying assignment of the long clause, let $a_m$ be the true literal of smallest index; set $z_j = 1$ for $j \\leq m - 2$ and $z_j = 0$ for $j \\geq m - 1$. The first clause is satisfied by $a_1 \\lor a_2$ if $m \\leq 2$, otherwise by $z_1$. A middle clause $(\\neg z_{j-1} \\lor a_{j+1} \\lor z_j)$ is satisfied by $a_{j+1}$ when $j = m - 1$, by $z_j$ when $j < m - 1$, and by $\\neg z_{j-1}$ when $j \\geq m$. The last clause falls to the same trichotomy. **Backward direction.** Suppose all of $a_1, \\dots, a_k$ are false. The first clause forces $z_1 = 1$; the second then forces $z_2 = 1$; induction delivers $z_{k-3} = 1$ to the final clause, which now reads $\\neg z_{k-3} \\lor a_{k-1} \\lor a_k = 0 \\lor 0 \\lor 0 = 0$ — contradiction. So the conjunction is satisfiable only if the original clause was. Note what is NOT preserved: model counts. The $z$ variables re-encode the witness; the two formulas are **equisatisfiable**, not logically equivalent — and for decision reductions that is precisely enough."
          },
          {
            kind: "para",
            body: "**The accounting.** A circuit with $s$ gates yields at most $3s + 1$ clauses, so CIRCUIT-SAT $\\leq_p$ SAT with linear blowup. Splitting turns a $k$-literal clause into $k - 2$ clauses, so an $m$-clause CNF formula with $\\ell$ total literal occurrences becomes a 3-CNF formula with at most $\\ell$ clauses — still linear. Both rewrites are syntactic and computable in linear time, and by transitivity CIRCUIT-SAT $\\leq_p$ 3-CNF-SAT. Together with the one-line certificate check, this makes 3-CNF-SAT NP-complete — the normal form from which the next section’s entire catalog grows."
          },
          {
            kind: "remark",
            body: "The literature calls mechanism 1 the **Tseitin transformation**. Naively distributing $\\land$ over $\\lor$ to reach CNF preserves full logical equivalence but can square the formula’s size; the fresh-variable construction keeps it linear at the price of equisatisfiability only. Modern SAT solvers exploit exactly this trade-off every day — proof complexity (resolution) and preprocessing (gate detection, variable elimination) are an entire research field built on the observation that circuits, formulas and clauses are three skins of the same object."
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------- 34.5
  {
    sectionId: "clrs-ch34-s5",
    readingTime: 9,
    intro: "The catalog: five problems every algorithm student must know to be NP-complete — clique, vertex cover, Hamiltonian cycle, the traveling-salesman problem and subset sum. Each proof is a fresh gadget design, and each problem returns in Chapter 35 as an approximation target, so the reductions built here literally pay for the algorithms built there.",
    objectives: [
      "Reproduce the 3-CNF-SAT → CLIQUE reduction and the complement trick down to VERTEX-COVER",
      "Describe the widget-based Hamiltonian-cycle construction and the weight-1/weight-2 map to TSP",
      "Carry out the digit-column construction for SUBSET-SUM and see why carries cannot corrupt it"
    ],
    concepts: [
      {
        term: "CLIQUE is NP-complete",
        kind: "theorem",
        statement: "CLIQUE asks whether a graph $G$ contains a **clique** of size at least $k$ — $k$ pairwise adjacent vertices. *In NP:* exhibit the vertex set. *Hardness:* reduce 3-CNF-SAT. Given a formula $\\phi$ with $k$ clauses, create one vertex per literal occurrence and join two vertices iff they come from **different clauses** and are **not negations of the same variable**. If $\\phi$ is satisfiable, pick one true literal per clause: those $k$ vertices are pairwise compatible — a $k$-clique. Conversely, a $k$-clique must draw one vertex from each clause (vertices within a clause are never adjacent) with no complementary pair, so setting those literals true — consistently, since no two are negations — satisfies every clause.",
        detail: "The same construction shows the related INDEPENDENT-SET problem NP-complete via graph complements: a clique in $G$ is an independent set in $\\bar{G}$."
      },
      {
        term: "VERTEX-COVER is NP-complete",
        kind: "theorem",
        statement: "A **vertex cover** of $G = (V, E)$ is a set $V' \\subseteq V$ touching every edge. VERTEX-COVER asks whether a cover of size at most $k$ exists. Reduce CLIQUE: $G$ has a clique of size $k$ iff the **complement** $\\bar{G}$ has a vertex cover of size $|V| - k$. If $V'$ is a $k$-clique of $G$, then $V - V'$ covers $\\bar{G}$: any edge of $\\bar{G}$ is a non-edge of $G$, so it cannot have both endpoints inside $V'$. The converse runs the same algebra backwards.",
        detail: "The identity ‘cliques in $G$ = complements of covers in $\\bar{G}$’ is the cheapest NP-completeness proof in the book and the doorway through which Chapter 35 enters: vertex cover is the star of approximation algorithms precisely because it is NP-complete yet approximable."
      },
      {
        term: "HAM-CYCLE is NP-complete",
        kind: "theorem",
        statement: "Reduce 3-CNF-SAT with a gadget construction: one **widget** — a 12-vertex subgraph — per variable, chained in a ring so that a Hamiltonian cycle must traverse each widget exactly once, via one of two edge-disjoint routes through it (one route per truth value). Each clause contributes a **clause vertex**, attached to the widget edges of its three literals. The global cycle can visit a clause vertex only by passing through an edge belonging to a satisfied literal, so a Hamiltonian cycle exists iff the formula is satisfiable.",
        detail: "The construction is large but purely mechanical; CLRS walks a 3-variable, 3-clause example in full. Its message: gadget design can be an engineering discipline, with local correctness lemmas composing into the global one."
      },
      {
        term: "TSP is NP-complete",
        kind: "theorem",
        statement: "The traveling-salesman problem asks for a minimum-weight Hamiltonian cycle in a complete weighted graph. Reduce HAM-CYCLE: given $G$ with $n$ vertices, form the complete graph with weight 1 on the edges of $G$ and weight 2 on all other pairs, and ask whether a tour of weight at most $n$ exists. Every tour uses exactly $n$ edges, so the bound is met iff the tour uses only edges of $G$ — a Hamiltonian cycle.",
        detail: "The optimization version is NP-hard by the same map: an exact TSP solver would answer the decision version. Chapter 35 shows what remains possible: approximation — and how much the triangle inequality matters."
      },
      {
        term: "SUBSET-SUM is NP-complete",
        kind: "theorem",
        statement: "SUBSET-SUM asks whether some sub-multiset of $\\{x_1, \\dots, x_n\\}$ sums exactly to $t$. Reduce 3-CNF-SAT by arithmetic in base 10 with one digit column per variable and per clause. Each variable column has target digit 1 and receives a 1 from the number $v_i$ (choose the variable) or from the number $v_i'$ (choose its negation) — exactly one must be taken. Each clause column has target digit 4: it receives 1 from each of its literals that was chosen (0 to 3 ones), and two slack numbers with digits 1 and 2 can top the column up to 4 — which is possible exactly when at least one literal was chosen, i.e. the clause is satisfied. Every column sum stays below 10, so no carries corrupt neighboring digits.",
        detail: "The slack numbers are the working part of the construction: they fill $4 - k$ where $k$ is the number of true literals, using their digits 1 and 2 to reach any total in {1, 2, 3} — but never 4 itself."
      }
    ],
    figures: [
      {
        caption: "The reduction web of this chapter. Every arrow is a polynomial-time reduction $L' \\leq_p L$ pointing toward the harder problem; following arrows from any node to CIRCUIT-SAT composes (transitivity) into a proof of NP-hardness. SUBSET-SUM and TSP carry forward into Chapter 35 as approximation targets.",
        svg: `<svg viewBox="0 0 720 340" width="100%" role="img" aria-label="Directed graph of reductions from circuit satisfiability through 3-CNF-SAT to clique, vertex cover, Hamiltonian cycle, TSP and subset sum"><text x="115" y="18" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-style="italic" opacity="0.7">every problem in NP</text><path d="M 115,22 L 115,36" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 3" opacity="0.6"/><path d="M 115,36 L 111,29 M 115,36 L 119,29" stroke="currentColor" stroke-width="1.3" opacity="0.6"/><rect x="40" y="40" width="150" height="44" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.6"/><text x="115" y="67" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">CIRCUIT-SAT</text><rect x="285" y="40" width="150" height="44" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.6"/><text x="360" y="67" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">3-CNF-SAT</text><rect x="530" y="40" width="150" height="44" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.6"/><text x="605" y="67" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">CLIQUE</text><rect x="530" y="148" width="150" height="44" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.6"/><text x="605" y="175" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">VERTEX-COVER</text><rect x="285" y="256" width="150" height="44" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.6"/><text x="360" y="283" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">HAM-CYCLE</text><rect x="530" y="256" width="150" height="44" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.6"/><text x="605" y="283" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">TSP</text><rect x="40" y="256" width="150" height="44" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.6"/><text x="115" y="283" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">SUBSET-SUM</text><line x1="190" y1="62" x2="283" y2="62" stroke="currentColor" stroke-width="1.8"/><path d="M 283,62 L 275,58 M 283,62 L 275,66" stroke="currentColor" stroke-width="1.8" fill="none"/><text x="237" y="52" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.7">gates → clauses</text><line x1="435" y1="62" x2="528" y2="62" stroke="currentColor" stroke-width="1.8"/><path d="M 528,62 L 520,58 M 528,62 L 520,66" stroke="currentColor" stroke-width="1.8" fill="none"/><text x="482" y="52" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.7">literal vertices</text><line x1="605" y1="84" x2="605" y2="144" stroke="currentColor" stroke-width="1.8"/><path d="M 605,144 L 601,136 M 605,144 L 609,136" stroke="currentColor" stroke-width="1.8" fill="none"/><text x="618" y="119" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="start" opacity="0.7">complement</text><line x1="360" y1="84" x2="360" y2="252" stroke="currentColor" stroke-width="1.8"/><path d="M 360,252 L 356,244 M 360,252 L 364,244" stroke="currentColor" stroke-width="1.8" fill="none"/><text x="372" y="172" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="start" opacity="0.7">widgets</text><line x1="435" y1="278" x2="528" y2="278" stroke="currentColor" stroke-width="1.8"/><path d="M 528,278 L 520,274 M 528,278 L 520,282" stroke="currentColor" stroke-width="1.8" fill="none"/><text x="482" y="268" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.7">weights 1 / 2</text><path d="M 300,84 Q 170,160 146,250" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M 146,250 L 151,241 M 146,250 L 140,242" stroke="currentColor" stroke-width="1.8" fill="none"/><text x="176" y="168" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.7">digit columns</text></svg>`,
        afterConcept: 5
      }
    ],
    examples: [
      {
        title: "A satisfying assignment becomes a clique",
        problem: "Let φ = (x₁ ∨ ¬x₂ ∨ x₃) ∧ (¬x₁ ∨ x₂ ∨ x₃) ∧ (x₂ ∨ ¬x₃ ∨ x₄). Build the reduction graph and extract a 3-clique from the assignment x = (1, 1, 1, 0).",
        steps: [
          { label: "Step 1 — vertices", text: "Nine literal-vertices: three per clause. Vertex (i, ℓ) = literal ℓ of clause i." },
          { label: "Step 2 — edges", text: "Join two vertices from different clauses unless they are negations of one variable: (1, x₁)–(2, x₂) ✓, (1, x₁)–(2, ¬x₁) ✗, (2, x₂)–(3, ¬x₃) ✓, and so on." },
          { label: "Step 3 — the clique", text: "The assignment satisfies every clause; pick one true literal per clause: (1, x₁), (2, x₂), (3, x₂). Pairwise they come from different clauses and no two are complementary — all three edges exist: a 3-clique, with k = 3 = the clause count." },
          { label: "Step 4 — the converse direction", text: "Any 3-clique uses one vertex per clause with no complementary pair; setting its literals true (here x₁ = 1, x₂ = 1; x₃, x₄ stay free) satisfies φ." }
        ],
        result: "φ is satisfiable ⟺ the graph has a 3-clique — the two directions meet at the same assignment."
      },
      {
        title: "TSP from Hamiltonian cycle, on four vertices",
        problem: "Instance A: G₁ = the 4-cycle a–b–c–d–a. Instance B: G₂ = the star with center a and leaves b, c, d. For each, build the complete weighted graph (weight 1 on G-edges, 2 otherwise) with threshold n = 4 and decide the TSP instance.",
        steps: [
          { label: "Instance A", text: "The tour a→b→c→d→a uses four weight-1 edges: total 4 ≤ 4 — accept. G₁ is Hamiltonian." },
          { label: "Instance B", text: "Any Hamiltonian tour on 4 vertices uses 4 edges of the complete graph; b, c, d are pairwise non-adjacent in G₂, so every tour needs at least one weight-2 edge: minimum total $3 \\cdot 1 + 2 = 5 > 4$ — reject. G₂ is not Hamiltonian." },
          { label: "Why it works", text: "A tour meets the bound $|V| = 4$ iff all its edges have weight 1 iff they are edges of $G$ — and a tour using only edges of $G$ is exactly a Hamiltonian cycle of $G$." }
        ],
        result: "The weight-1 / weight-2 map translates Hamiltonicity into a numeric threshold with no slack."
      }
    ],
    keyTakeaways: [
      "CLIQUE: one vertex per literal occurrence; edges between compatible literals of different clauses; k = number of clauses.",
      "VERTEX-COVER: a k-clique in G is exactly a (|V| − k)-cover in the complement; HAM-CYCLE → TSP via weights 1 / 2 and threshold |V|.",
      "SUBSET-SUM: digit columns with target 1 (variables) and 4 (clauses, with slack digits 1 and 2) — carries kept away by keeping every column below 10."
    ],
    quiz: [
      {
        q: "In the 3-CNF-SAT → CLIQUE reduction, two literal-vertices are joined by an edge exactly when…",
        options: [
          "they come from the same clause",
          "they come from different clauses and are not negations of the same variable",
          "they are negations of the same variable",
          "they share a variable"
        ],
        answer: 1,
        explanation: "Different clauses forces one pick per clause; non-complementary keeps the picked literals consistently true — both are needed for the two directions."
      },
      {
        q: "G has a clique of size k iff its complement has a vertex cover of size…",
        options: ["k", "k − 1", "|V| − k", "|V| + k"],
        answer: 2,
        explanation: "The vertices outside the clique must cover every non-edge of G — every edge of the complement — giving the |V| − k correspondence."
      },
      {
        q: "In the HAM-CYCLE → TSP reduction, the threshold is k = |V| because…",
        options: [
          "a tour has exactly |V| edges, so only an all-weight-1 tour can meet the bound",
          "the MST has |V| − 1 edges",
          "weights are arbitrary",
          "Hamiltonian cycles have |V| − 1 edges"
        ],
        answer: 0,
        explanation: "Every tour uses exactly n edges; meeting weight n forces every edge to be a weight-1 edge of G — a Hamiltonian cycle."
      },
      {
        q: "In the SUBSET-SUM reduction, a clause column with target digit 4 is fillable exactly when the clause is satisfied because…",
        options: [
          "its literals contribute 0–3 ones and the two slack numbers add 0, 1, 2 or 3 — reaching 4 requires at least one true literal",
          "the slack numbers always fill the column",
          "the base is 2",
          "carries repair any shortfall"
        ],
        answer: 0,
        explanation: "With no true literals the slack pair tops out at 3 < 4; with k ≥ 1 true literals the slack pair (0–3) can always complete to 4."
      },
      // PYQ-pattern: GATE 2020 — clique vertex-cover duality (rephrased, values changed)
      {
        q: "Let $\\bar{G}$ be the complement of an $n$-vertex graph $G$. Which claim is true?",
        options: ["A $k$-clique in $G$ forces a $k$-vertex-cover in $\\bar{G}$", "$G$ has a $k$-clique iff $\\bar{G}$ has an $(n - k)$-vertex-cover", "Every problem in NP already has a polynomial-time decider", "A polynomial reduction from $A$ to $B$ proves $A$ is harder than $B$"],
        answer: 1,
        explanation: "Step 1 — Given: complement edges are exactly the non-edges of $G$ (minus loops). Step 2 — Governing duality: $K$ is a clique in $G$ iff $K$ is an independent set in $\\bar{G}$ iff $V - K$ covers every edge of $\\bar{G}$. Step 3 — Counting: $|K| = k$ converts to cover size $n - k$ in both directions, a two-line certificate check over $O(E)$ edges puts the decision in NP. Step 4 — Sanity check: on $n = 5, k = 2$ a single edge-clique complements to a $3$-cover correctly, extremes $k = n$ and $k = 1$ behave, and sizes stay polynomial. Step 5 — Distractor analysis: equal-size $k$ transfer drops the complement arithmetic, universal polynomial decidability is the open question itself, and reductions prove the target at least as hard as the source. Step 6 — Conclude: the iff with $n - k$ holds.",
      },
    ]
  }
]

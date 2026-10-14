import type { SectionContent } from "../library"

// ============================================================================
// Bjarne Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 33: STL Iterators (Sections 33.1 – 33.7)
// ============================================================================

export const cppCh33Content: SectionContent[] = [
  // ---------------------------------------------------------------- 33.1
  {
    sectionId: "cpp-ch33-s1",
    readingTime: 5,
    intro: "Containers hold data; algorithms process it — and neither ever mentions the other by name. Between them passes only the iterator: a generalized pointer that identifies a position in a sequence. That tiny abstraction is what makes the STL a library rather than a pile of routines, because every one of the hundred-plus algorithms in Chapter 32 works through it on every container in Chapter 31. This chapter is the iterator's manual: its model, its categories, its adaptors, and the function-object machinery that feeds it.",
    objectives: [
      "Define an iterator and use the operations `*p`, `++p`, and `p == q` on one",
      "Reason with half-open ranges `[b:e)` and their past-the-end sentinel",
      "Explain how iterators decouple algorithms from containers (the glue argument)",
    ],
    concepts: [
      {
        term: "Iterator",
        kind: "definition",
        statement: "**An iterator is a generalized pointer used to identify a position in a sequence.** The core vocabulary is deliberately pointer-like: `*p` denotes the element at p's position, `++p` advances p to the next position, and `p == q` and `p != q` compare positions. A pointer into a C array already does exactly this — `double*` over a built-in array is the archetypal iterator — so the library simply generalized it to every way of storing elements.",
        detail: "A container never hands an algorithm itself; it hands out a pair of iterators bracketing its elements. What an algorithm knows about the data, it knows only through this narrow interface.",
      },
      {
        term: "The half-open range `[b:e)`",
        kind: "notation",
        statement: "**Every STL sequence is described by the half-open range `[b:e)`: the element at `b` is in the sequence, the element at `e` is not.** The iterator `e` points one past the last element — it may be compared and assigned, but `*e` is undefined. The empty sequence is simply `b == e`, and a random-access range holds exactly $e - b$ elements.",
        detail: "Half-open ranges are why STL loops test `p != e` with no off-by-one, why empty inputs need no special case, and why every range has a one-past-the-end sentinel value. A default-constructed iterator is singular — it holds no position at all until you assign one.",
      },
      {
        term: "Iterators are the glue",
        kind: "insight",
        statement: "**Algorithms are written against iterator pairs, never containers.** `find(b, e, x)` never asks whether `[b:e)` comes from a `vector`, a `list`, a C array, or an input stream — one implementation serves them all. The combinatorics is the point: with $n$ container kinds and $m$ algorithms, hand-written per-container code costs $n \\times m$ functions, while the iterator interface needs only $n + m$ components that recombine into every pairing.",
        detail: "Twelve containers and twenty algorithms: 240 special-purpose functions collapse into 32 pieces of code. That factorization — not raw speed — is the STL's founding idea.",
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Iterators as glue. You can claim this section when you can define an iterator and use the operations `*p`, `++p`, and `p == q` on one — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 33 (STL Iterators); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Introduction: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, reason with half-open ranges `[b:e)` and their past-the-end sentinel. Then, explain how iterators decouple algorithms from containers (the glue argument). Finally, test the outcome against the section promise: An iterator is a generalized pointer: `*p` accesses, `++p` advances, `p == q` compares positions.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Tracking positions through `find`",
        problem: "`vector<int> v = {27, 218, 12};` Trace `auto p = find(v.begin(), v.end(), 12);` element by element, then trace the same call searching for 5. What positions do the two results denote?",
        steps: [
          { label: "Start", text: "`p` denotes the position of `v[0]`: `*p` is 27, which is not 12, so `find` executes `++p`." },
          { label: "Second element", text: "`*p` is 218 — not 12 — so `++p` again. Two elements consumed, no match so far." },
          { label: "Third element", text: "`*p` is 12 — a match: `find` returns p denoting that position. As an index, `p - v.begin()` is 2, and `*p == v[2]`." },
          { label: "Miss case", text: "Searching for 5 instead: all three elements fail the test, `p` reaches `v.end()`, and that past-the-end value is returned — the convention for not-found. Here `p - v.begin()` is 3, one past the last index." },
        ],
        result: "One `find` handles both outcomes through the same interface: a hit returns the element's position, a miss returns `e`. Notice the algorithm needed `v`'s element type and nothing else about it — swap in a `list` or an array and nothing changes.",
      },
      {
        title: "Working through introduction",
        problem: "Iterators as glue. Your task: define an iterator and use the operations `*p`, `++p`, and `p == q` on one.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define an iterator and use the operations `*p`, `++p`, and `p == q` on one. Write down the guarantee you will rely on — for this chapter it is: An iterator is a generalized pointer: `*p` accesses, `++p` advances, `p == q` compares positions." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `for (auto p = v.begin(); p != v.end(); ++p) { std::cout << *p; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — reason with half-open ranges `[b:e)` and their past-the-end sentinel — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Sequences are half-open `[b:e)`: `e` is a one-past-the-end sentinel you compare against but never dereference. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: An iterator is a generalized pointer: `*p` accesses, `++p` advances, `p == q` compares positions. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "An iterator is a generalized pointer: `*p` accesses, `++p` advances, `p == q` compares positions.",
      "Sequences are half-open `[b:e)`: `e` is a one-past-the-end sentinel you compare against but never dereference.",
      "Because algorithms take iterator pairs, $n$ containers and $m$ algorithms need $n + m$ components, not $n \\times m$.",
    ],
    quiz: [
      {
        q: "Which use of the end iterator `e` from a range `[b:e)` is valid?",
        options: [
          "Reading the last element through `*e`",
          "Comparing another iterator against it: `p != e`",
          "Dereferencing it after `++e`",
          "None — `e` exists only for printing",
        ],
        answer: 1,
        explanation: "`e` is a one-past-the-end sentinel: comparisons and assignment are fine, but it denotes no element, so `*e` is undefined in every form.",
      },
      {
        q: "A loop `for (auto p = b; p != e; ++p)` runs over a range with $e - b = 5$. How many times does the body run, and where is `p` at exit?",
        options: [
          "5 times; `p == e`",
          "4 times; `p` denotes the last element",
          "6 times; `p` is one past `e`",
          "5 times; `p` denotes the last element",
        ],
        answer: 0,
        explanation: "Half-open means the element at `e` is excluded: the body runs for exactly the $e - b = 5$ elements in the range, and the terminating comparison finds `p == e`.",
      },
      {
        q: "Twelve container kinds, twenty algorithms. What does the iterator interface require, versus per-container special-casing?",
        options: [
          "240 components versus 32",
          "32 components versus 240",
          "12 components versus 20",
          "Both need 240",
        ],
        answer: 1,
        explanation: "Iterators factor the product into a sum: $12 + 20 = 32$ pieces that recombine, versus $12 \\times 20 = 240$ hand-written specializations.",
      },
    ],
  },

  // ---------------------------------------------------------------- 33.2
  {
    sectionId: "cpp-ch33-s2",
    readingTime: 8,
    intro: "Not every iterator can do everything: a linked list has no way to jump to its fifth element in one step, and a stream cannot be rewound to be read twice. The standard pins these differences down as five iterator categories — precise bundles of operations and guarantees — and every algorithm declares the weakest category it can live with. This section is the heart of the chapter: the categories, the operations each adds, and the traits machinery that lets code interrogate an iterator at compile time.",
    objectives: [
      "Name the five iterator categories and the refinement order between them",
      "List the operations each category adds and apply the single-pass/multipass distinction",
      "Use `iterator_traits` and the category tags to interrogate iterator types",
    ],
    concepts: [
      {
        term: "The five iterator categories",
        kind: "definition",
        statement: "**An iterator belongs to exactly one of five categories: input, output, forward, bidirectional, or random-access.** A category is a contract — a set of operations plus the guarantees attached to them. The categories refine one another: a forward iterator satisfies everything input and output promise, a bidirectional iterator everything forward, and a random-access iterator everything bidirectional. An algorithm written against the weakest category it can tolerate runs on the widest possible set of iterators.",
        detail: "Concretely: `istream_iterator` is input, insert iterators are output, `forward_list` and the unordered containers give forward iterators, `list`, `map` and `set` bidirectional, and `vector`, `deque`, `array`, `string` and raw pointers random-access.",
      },
      {
        term: "Operations by category",
        kind: "law",
        statement: "**Each category adds operations to the previous one.** Input: `*p` (read), `p->m`, `++p`, `p++`, `p == q`, `p != q`. Output: `*p = x` (write), `++p`, `p++`. Forward: the input and output operations plus default construction and a multipass guarantee. Bidirectional: forward plus `--p` and `p--`. Random-access: bidirectional plus `p += n`, `p -= n`, `p + n`, `n + p`, `p - n`, `p - q`, `p[n]`, and the orderings `p < q`, `p > q`, `p <= q`, `p >= q`.",
        detail: "Guarantees matter as much as syntax. Input and output iterators are single-pass: after `++p`, old copies of p may no longer denote valid positions — a stream position, once passed, is gone. Forward iterators are multipass: `[b:e)` can be traversed twice, and two iterators that meet compare equal again after matching increments. That is exactly why `find` can run on a stream but `sort` cannot.",
      },
      {
        term: "`iterator_traits` and the category tags",
        kind: "definition",
        statement: "`iterator_traits<Iter>` is the standard way to interrogate an iterator type at compile time. It provides `value_type` (the element type), `difference_type` (the type of distances — `ptrdiff_t` for pointers), `iterator_category` (one of five empty tag types such as `random_access_iterator_tag`), plus `pointer` and `reference`. It is specialized for `T*`, which is what makes a plain pointer usable as a random-access iterator by generic code.",
        detail: "The five tags form the same refinement hierarchy as the categories — `forward_iterator_tag` derives from `input_iterator_tag`, and so on — which is the mechanism behind algorithm specialization; the depth tier shows exactly how.",
      },
      {
        term: "Iterator Model: the working contract",
        kind: "definition",
        statement: "**Iterator Model.** Categories, operations and the model. You can claim this section when you can name the five iterator categories and the refinement order between them — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 33 (STL Iterators); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Iterator Model: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, list the operations each category adds and apply the single-pass/multipass distinction. Then, use `iterator_traits` and the category tags to interrogate iterator types. Finally, test the outcome against the section promise: Five categories, strictly refined: input and output (single-pass, unrelated to each other), forward (multipass), bidirectional (adds `--p`), random-access (adds arithmetic and ordering).",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    figures: [
      {
        caption: "The iterator category pyramid. Each level satisfies every requirement of the level below and adds operations and guarantees: an algorithm accepting input iterators runs on every iterator in the tower, while one needing `p + 3` runs only near the top. Note the two unrelated roots — input and output — both refined by forward. Containers sit beside the weakest level their iterators satisfy; that is why `std::sort` (random-access) accepts `vector` but not `list`, which supplies its own member `sort`.",
        svg: `<svg viewBox="0 0 760 450" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Iterator category pyramid"><text x="380" y="30" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.65" letter-spacing="2">STRONGEST — MOST OPERATIONS</text><text x="380" y="438" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.65" letter-spacing="2">WEAKEST — FEWEST OPERATIONS</text><line x1="30" y1="398" x2="30" y2="86" stroke="currentColor" stroke-width="1.5"/><polygon points="30,76 24,90 36,90" fill="currentColor"/><text transform="rotate(-90 16 242)" x="16" y="242" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.8">each level adds operations and guarantees</text><polygon points="280,75 480,75 540,156 220,156" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.5"/><polygon points="220,156 540,156 600,237 160,237" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/><polygon points="160,237 600,237 660,318 100,318" fill="currentColor" fill-opacity="0.09" stroke="currentColor" stroke-width="1.5"/><polygon points="100,318 660,318 720,400 40,400" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><line x1="380" y1="318" x2="380" y2="400" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><text x="380" y="104" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">Random-access iterator</text><text x="380" y="126" text-anchor="middle" font-size="12.5" fill="currentColor">adds: p += n, p + n, p - q, p[n], p&lt;q</text><text x="380" y="145" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.7">vector · deque · array · string · raw pointers</text><text x="380" y="185" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">Bidirectional iterator</text><text x="380" y="207" text-anchor="middle" font-size="12.5" fill="currentColor">adds: --p, p-- (step backwards)</text><text x="380" y="226" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.7">list · map · set</text><text x="380" y="266" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">Forward iterator</text><text x="380" y="288" text-anchor="middle" font-size="12.5" fill="currentColor">adds: multipass guarantee, default construction, read AND write</text><text x="380" y="307" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.7">forward list · unordered map</text><text x="210" y="347" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Input iterator</text><text x="210" y="368" text-anchor="middle" font-size="12" fill="currentColor">*p (read) · ++p · ==, !=</text><text x="210" y="387" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.7">reading a stream — single pass</text><text x="550" y="347" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Output iterator</text><text x="550" y="368" text-anchor="middle" font-size="12" fill="currentColor">*p = x (write) · ++p</text><text x="550" y="387" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.7">writing or inserting — single pass</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "A compile-time audit: what compiles, what does not",
        problem: "Given `vector<int>::iterator vi`, `list<int>::iterator li`, an `istream_iterator<int> si` (with a companion `si2`), and `int* pi`, decide for each expression whether it compiles, and why: (a) `vi + 3`; (b) `li + 3`; (c) `--li`; (d) `--si`; (e) `pi - (pi + 3)`; (f) `si != si2`.",
        steps: [
          { label: "(a)", text: "`vi + 3` — compiles: `vector` iterators are random-access, so `p + n` is available, landing 3 elements further along." },
          { label: "(b)", text: "`li + 3` — rejected: `list` iterators are bidirectional; jumping is not in the contract. You must `++` three times." },
          { label: "(c)", text: "`--li` — compiles: stepping back is exactly the bidirectional addition over forward." },
          { label: "(d)", text: "`--si` — rejected: input iterators offer no retreat; a stream position cannot be revisited." },
          { label: "(e)", text: "`pi - (pi + 3)` — compiles and equals $-3$: raw pointers are random-access iterators, and `p - q` yields a `difference_type` distance." },
          { label: "(f)", text: "`si != si2` — compiles: equality comparison is available already at input category — it is how `p != e` terminates a stream loop." },
        ],
        result: "Category mismatches are compile-time errors, not runtime failures: the operation table is a type-system contract. That is the pyramid made concrete — each container's iterator sits on one level, and every expression either respects that level or the program never runs.",
      },
      {
        title: "Working through iterator model",
        problem: "Categories, operations and the model. Your task: name the five iterator categories and the refinement order between them.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: name the five iterator categories and the refinement order between them. Write down the guarantee you will rely on — for this chapter it is: Five categories, strictly refined: input and output (single-pass, unrelated to each other), forward (multipass), bidirectional (adds `--p`), random-access (adds arithmetic and ordering)." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `for (auto p = v.begin(); p != v.end(); ++p) { std::cout << *p; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — list the operations each category adds and apply the single-pass/multipass distinction — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Algorithms declare the weakest category they accept; containers supply it or stay incompatible — `std::sort` demands random access, so `list` grows its own member `sort`. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Five categories, strictly refined: input and output (single-pass, unrelated to each other), forward (multipass), bidirectional (adds `--p`), random-access (adds arithmetic and ordering). Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Five categories, strictly refined: input and output (single-pass, unrelated to each other), forward (multipass), bidirectional (adds `--p`), random-access (adds arithmetic and ordering).",
      "Algorithms declare the weakest category they accept; containers supply it or stay incompatible — `std::sort` demands random access, so `list` grows its own member `sort`.",
      "`iterator_traits<Iter>` exposes `value_type`, `difference_type`, `iterator_category`, `pointer`, `reference`; pointers are random-access iterators via specialization.",
    ],
    quiz: [
      {
        q: "Which expression is valid ONLY at the random-access level?",
        options: [
          "`p + 3`",
          "`++p`",
          "`p != q`",
          "`--p`",
        ],
        answer: 0,
        explanation: "`++p` and `p != q` exist from input upward; `--p` arrives with bidirectional; jumping — `p + n` — only at random access.",
      },
      {
        q: "`forward_list<int>` iterators sit one level below `list<int>` iterators. Which operation therefore compiles for `list` but not `forward_list`?",
        options: [
          "`p != q`",
          "`++p`",
          "`--p`",
          "`*p`",
        ],
        answer: 2,
        explanation: "`list` is bidirectional, `forward_list` only forward; stepping back — `--p` — is precisely the bidirectional addition.",
      },
      {
        q: "Which statement about `iterator_traits<T*>` is correct?",
        options: [
          "It is undefined — pointers are not iterators",
          "It declares `T*` an input iterator only",
          "It gives `value_type = void`",
          "It gives `iterator_category = random_access_iterator_tag` and `difference_type = ptrdiff_t`",
        ],
        answer: 3,
        explanation: "The pointer specialization is what lets built-in arrays play in every generic algorithm: a raw `T*` is a fully random-access iterator.",
      },
      // PYQ-pattern: GATE 2014 — iterator category requirements of sort (rephrased)
      {
        q: "Why does `std::sort` refuse a `std::list` while the list still offers its own member `sort`?",
        options: ["Lists cannot be sorted under any circumstances", "`std::sort` needs random-access iterators for its jumps, which linked nodes cannot offer; the member version relinks nodes instead", "`std::sort` only accepts raw arrays", "Lists always stay sorted, so sorting is skipped"],
        answer: 1,
        explanation: "Step 1: The data given is a generic algorithm that rejects one container which nevertheless sorts itself fine. Step 2: The governing rules are iterator categories: `std::sort` jumps across its range and therefore requires random-access iterators, while a list provides only bidirectional stepping with no arithmetic. Step 3: Applying the categories, the generic algorithm cannot satisfy its jump requirement on linked nodes, whereas the member `sort` works by splicing nodes in constant time per move without any jumps. Step 4: The distractors fail because lists sort perfectly well with the right algorithm, the generic form accepts vectors and deques too, and no container maintains sortedness by itself. Step 5: Therefore the refusal follows from the iterator category, not from the data."
      }
    ],
    depth: [
      {
        tier: "masters",
        title: "Why the category hierarchy enables algorithm specialization",
        blocks: [
          {
            kind: "para",
            heading: "The design problem",
            body: "The standard library must supply each algorithm once, yet run well on everything. Two mechanisms cooperate. First, an algorithm is written against the weakest category that suffices — `std::sort` demands random-access iterators, and where a container cannot provide them (`list` offers only bidirectional), the container instead supplies a member version tuned to its own structure: `list::sort`. Second, where one algorithm has a faster implementation for stronger iterators, the library provides both and lets overload resolution pick — with zero runtime cost. The category-tag hierarchy is the picking mechanism.",
          },
          {
            kind: "theorem",
            heading: "Tag dispatch selects the strongest applicable implementation",
            body: "Let every iterator type report its category through `iterator_traits<It>::iterator_category`, and let the five empty tag classes mirror the categories' refinement order by public inheritance: `forward_iterator_tag` derives from `input_iterator_tag`, `bidirectional_iterator_tag` from `forward_iterator_tag`, `random_access_iterator_tag` from `bidirectional_iterator_tag` (with `output_iterator_tag` an unrelated second root). Then an algorithm that provides one overload per category and calls `impl(b, e, typename iterator_traits<It>::iterator_category())` obtains, at compile time and with no runtime cost, the implementation written for the strongest category its iterator satisfies — and a weaker iterator still binds to a weaker overload, so the algorithm degrades in speed but never disappears.",
          },
          {
            kind: "proof",
            heading: "Why resolution lands on the strongest",
            body: "The call constructs a temporary of empty class type — say `bidirectional_iterator_tag`. Each candidate overload takes a distinct tag type by value. An exact match ranks above any base-class conversion, so an overload taking the iterator's own tag wins whenever it exists. If it does not, the temporary converts to a base tag, and among competing base conversions C++ prefers the nearest base — a `bidirectional_iterator_tag` converts better to `forward_iterator_tag` than to `input_iterator_tag` — so the strongest implementation present is still chosen. The tag object is empty and the decision is made before code generation: the unselected overload is never even instantiated. This is compile-time specialization where virtual functions would have charged a per-call indirection.",
          },
          {
            kind: "derivation",
            heading: "What the dispatch buys, with numbers",
            body: "`std::distance(b, e)`: with random-access iterators the library returns `e - b` — one subtraction, $\\Theta(1)$; on a `list<int>` of $n = 1000$ elements the fallback walks $n - 1 = 999$ increments, $\\Theta(n)$. `std::advance(p, n)` likewise picks `p += n` over $|n|$ single steps. Now scale: sorting $10^6$ elements recurses about $\\log_2(10^6) \\approx 20$ levels deep, and each level computes partition midpoints. With random access every midpoint is one subtraction — `(e - b) / 2`; with merely bidirectional iterators every midpoint costs a walk averaging half the subrange: roughly $10^6$ increments summed across each level, about $2 \\times 10^7$ wasted increments in total. Same algorithm text, two complexities — the tag chose.",
          },
          {
            kind: "example",
            heading: "The idiom in miniature",
            body: "A user-written `my_distance` in the library's own style: the entry point `template<class It> long my_distance(It b, It e)` forwards to `my_dist(b, e, typename iterator_traits<It>::iterator_category())`, implemented twice — `my_dist(b, e, input_iterator_tag)` loops and counts, while `my_dist(b, e, random_access_iterator_tag)` returns `e - b`. Pass `vector<int>::iterator` and you compile a subtraction; pass `list<int>::iterator`, a `forward_list` iterator, or an `istream_iterator` and you compile the counting loop. No virtual call, no runtime branch — and nothing stops you from adding a bidirectional overload later without touching a single caller.",
          },
          {
            kind: "remark",
            heading: "Two deliberate asymmetries",
            body: "First, `output_iterator_tag` is deliberately not derived from `input_iterator_tag`: input and output are two unrelated roots, both refined by forward — so a template that dispatches on 'at least input' can never accidentally bind a pure output iterator such as an insert iterator. Second, C++20 restated the whole scheme as the `iterator_concept` hierarchy checked by constraints (`std::random_access_iterator` and friends) — same design, new vocabulary — while the empty-tag technique remains the classic tool when library code must specialize in any standard dialect.",
          },
          {
            kind: "application",
            heading: "Label your iterators honestly",
            body: "If you write a container, declare the truest category its iterators support. Claiming random access while `p + n` secretly walks n nodes makes every tag-dispatched helper select the $\\Theta(1)$ plan and then pay $\\Theta(n)$ — the complexity lie propagates silently through the entire library, because dispatch never inspects the loop, only the tag. Understating (offering forward when random access is available) merely leaves speed on the table. The hierarchy is a trust protocol: algorithms trust the tag, so the tag must tell the truth.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- 33.3
  {
    sectionId: "cpp-ch33-s3",
    readingTime: 6,
    intro: "A plain `[b:e)` loop assumes the destination already has room, that you want to go forwards, that you want to copy rather than move, and that the data already sits in memory. Real programs want the opposite of each of those at least weekly. Iterator adaptors are wrappers that change what `*p` and `++p` mean, so the very same standard algorithms write into growing containers, traverse backwards, move elements between containers, and read and write streams.",
    objectives: [
      "Use `back_inserter`, `front_inserter`, and `inserter` to make algorithms grow containers",
      "Iterate backwards with `reverse_iterator` and `rbegin()`/`rend()`",
      "Move elements with move iterators and treat streams as sequences with stream iterators",
    ],
    concepts: [
      {
        term: "Insert iterators",
        kind: "definition",
        statement: "**An insert iterator turns assignment into insertion.** Through a `back_insert_iterator` — obtained from `back_inserter(c)` — the statement `*p = x` calls `c.push_back(x)`; `front_inserter(c)` calls `push_front`; `inserter(c, pos)` inserts before pos. They are output iterators, so they never overwrite an existing element: an algorithm writing through them can never overflow a buffer, because the container grows to fit.",
        detail: "`copy(src.begin(), src.end(), back_inserter(v))` is the idiomatic 'append all of src to v' — no `resize`, no counting, no off-by-one.",
      },
      {
        term: "Reverse iterators",
        kind: "definition",
        statement: "**A `reverse_iterator` runs a sequence backwards.** `c.rbegin()` denotes the last element (not one past it), `++p` moves toward the front, and `c.rend()` acts as the end sentinel of the reversed range. `sort(v.rbegin(), v.rend())` therefore sorts v into descending order: ascending through the reversed range is descending through the original.",
        detail: "Underneath, a reverse iterator wraps a base iterator pointing one past the element it denotes; that offset trick is why it needs bidirectional-or-stronger iterators to work at all.",
      },
      {
        term: "Move iterators and stream iterators",
        kind: "definition",
        statement: "**`make_move_iterator(p)` wraps p so that `*p` yields an rvalue reference:** reading through it moves the element, so `copy` with move iterators transfers ownership instead of duplicating — sources are left valid but with unspecified values. **Stream iterators** do the same job for I/O: `istream_iterator<T>` is an input iterator whose traversal performs `>>` reads (its default-constructed value is the end-of-stream sentinel), and `ostream_iterator<T>` is an output iterator whose `*p = x` writes x, optionally followed by a separator.",
        detail: "Together the two adaptors complete a uniform world: files and `cin` become sequences that every algorithm can consume.",
      },
      {
        term: "Iterator Adaptors: the working contract",
        kind: "definition",
        statement: "**Iterator Adaptors.** Insert, stream and move iterators. You can claim this section when you can use `back_inserter`, `front_inserter`, and `inserter` to make algorithms grow containers — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 33 (STL Iterators); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Iterator Adaptors: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, iterate backwards with `reverse_iterator` and `rbegin()`/`rend()`. Then, move elements with move iterators and treat streams as sequences with stream iterators. Finally, test the outcome against the section promise: Insert iterators map `*p = x` to `push_back`/`push_front`/`insert`, so output-writing algorithms grow the container instead of overflowing it.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Growing a vector through `back_inserter`",
        problem: "`list<int> src = {7, 4, 9};` and `vector<int> v;` — an empty vector. Trace `copy(src.begin(), src.end(), back_inserter(v));`, including how v's capacity evolves, and compare with writing into `int buf[2]`.",
        steps: [
          { label: "Element 7", text: "The algorithm evaluates `*p = 7` on the insert iterator, which becomes `v.push_back(7)`. v: size 1; a typical implementation has grown capacity from 0 to 1." },
          { label: "Element 4", text: "`*p = 4` becomes `push_back(4)`: size 2, capacity doubled to 2." },
          { label: "Element 9", text: "`*p = 9` becomes `push_back(9)`: size 3, capacity doubled to 4. Three writes, zero sizing logic anywhere in the algorithm or the calling code." },
          { label: "The contrast", text: "The same `copy` aimed at `int buf[2]` writes 7 and 4, then writes 9 past the end of the buffer — undefined behavior. The insert iterator makes overflow structurally impossible: there is no destination buffer to overrun, only a growing container." },
        ],
        result: "Final v = {7, 4, 9}: size 3, capacity 4 (typical doubling 0, 1, 2, 4). The adaptor converts 'write a sequence' from a buffer-management hazard into a one-liner — and `copy(v.begin(), v.end(), ostream_iterator<int>(cout, ' '))` prints it, space-separated, through the same machinery.",
      },
      {
        title: "Working through iterator adaptors",
        problem: "Insert, stream and move iterators. Your task: use `back_inserter`, `front_inserter`, and `inserter` to make algorithms grow containers.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use `back_inserter`, `front_inserter`, and `inserter` to make algorithms grow containers. Write down the guarantee you will rely on — for this chapter it is: Insert iterators map `*p = x` to `push_back`/`push_front`/`insert`, so output-writing algorithms grow the container instead of overflowing it." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `for (auto p = v.begin(); p != v.end(); ++p) { std::cout << *p; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — iterate backwards with `reverse_iterator` and `rbegin()`/`rend()` — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Reverse iterators give `rbegin()`/`rend()`: `++` moves backward, so `sort(v.rbegin(), v.rend())` yields descending order. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Insert iterators map `*p = x` to `push_back`/`push_front`/`insert`, so output-writing algorithms grow the container instead of overflowing it. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Insert iterators map `*p = x` to `push_back`/`push_front`/`insert`, so output-writing algorithms grow the container instead of overflowing it.",
      "Reverse iterators give `rbegin()`/`rend()`: `++` moves backward, so `sort(v.rbegin(), v.rend())` yields descending order.",
      "Move iterators make `*p` an rvalue so `copy` moves; stream iterators make I/O traversable, with the default `istream_iterator` as end-of-stream.",
    ],
    quiz: [
      {
        q: "`auto it = back_inserter(v);` then `*it = 42;` — what happened?",
        options: [
          "The last existing element of v was overwritten with 42",
          "42 was written into a temporary and discarded",
          "Nothing — output iterators ignore assignment",
          "`v.push_back(42)` was called: v grew by one",
        ],
        answer: 3,
        explanation: "An insert iterator is an output iterator whose write operation is an insertion call; there is no existing element to overwrite.",
      },
      {
        q: "You copy a `vector<string>` of 3 large strings into a new vector through move iterators. The source strings afterwards are:",
        options: [
          "guaranteed empty — the standard requires it",
          "unchanged — move iterators copy",
          "valid but with unspecified values; reuse them only after assigning new values",
          "dangling — any use crashes",
        ],
        answer: 2,
        explanation: "Moved-from standard objects are valid-but-unspecified: you may reassign, call `size()`, or destruct them, but you must not depend on the leftover contents.",
      },
      {
        q: "`istream_iterator<int> eos;` — the default-constructed value is used as:",
        options: [
          "an error marker that throws on comparison",
          "an iterator to the first character of the stream",
          "a buffered copy of the whole stream",
          "the end-of-stream sentinel: reads compare against it and fail at EOF",
        ],
        answer: 3,
        explanation: "The default `istream_iterator` denotes 'no more input'; a failed or exhausted stream makes its active iterator equal to it — exactly the `e` of the half-open range.",
      },
    ],
  },

  // ---------------------------------------------------------------- 33.4
  {
    sectionId: "cpp-ch33-s4",
    readingTime: 4,
    intro: "C++ inherited from C the built-in array — and a built-in array has no members, so `a.begin()` simply cannot exist. The range access functions close that gap: free `begin()` and `end()` compute pointers for arrays and forward to members for containers, so one spelling of 'give me the range' covers both. That uniformity is not cosmetic: generic code and the range-for loop are both defined in terms of these functions.",
    objectives: [
      "State what `begin(a)`/`end(a)` yield for a built-in array and for a container",
      "Use the `cbegin`/`cend`/`rbegin`/`rend` family correctly",
      "Explain why generic code uses the free functions rather than member calls",
    ],
    concepts: [
      {
        term: "`begin()` and `end()`",
        kind: "definition",
        statement: "For a built-in array `T a[n]`, the free functions return pointers: `begin(a)` is `a` and `end(a)` is `a + n` — one past the last element, never dereferenceable. For a type with `begin()`/`end()` members, the free functions forward to them. So `begin(c)`/`end(c)` is the one spelling that produces a correct half-open range for containers, arrays, and any user-defined range that exposes the free functions.",
        detail: "They live in `<iterator>` and are the model for how the library retrofits member-style syntax onto types that cannot have members.",
      },
      {
        term: "The range-access family",
        kind: "method",
        statement: "The full set: `begin(c)`/`end(c)` for the range; `cbegin(c)`/`cend(c)` for a `const` view — writing through those iterators is a compile error; `rbegin(c)`/`rend(c)` for the reversed range. For `T a[n]`, `rbegin(a)` wraps `a + n` so that `*rbegin(a)` is the last element, and for an empty array `rbegin(a) == rend(a)` holds, as half-open ranges require.",
        detail: "Reach for `cbegin` when reading a shared container from non-const code — it is the iterator version of a `const` reference parameter: the compiler enforces your promise not to mutate.",
      },
      {
        term: "Why generic code uses the free functions",
        kind: "insight",
        statement: "**A template that says `c.begin()` quietly excludes built-in arrays** — and any type offering only free functions. Saying `begin(c)` accepts both. This is exactly how range-for is specified: look up `begin`/`end` on the expression's type, members first, then the free functions — which is why `for (auto x : arr)` works on a plain array that has no members at all.",
        detail: "Rule of thumb: the member spelling is fine in code that already knows the container's exact type; the free functions are mandatory in code that must not.",
      },
      {
        term: "Range Access Functions: the working contract",
        kind: "definition",
        statement: "**Range Access Functions.** begin, end and free functions. You can claim this section when you can state what `begin(a)`/`end(a)` yield for a built-in array and for a container — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 33 (STL Iterators); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Range Access Functions: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, use the `cbegin`/`cend`/`rbegin`/`rend` family correctly. Then, explain why generic code uses the free functions rather than member calls. Finally, test the outcome against the section promise: Free `begin`/`end` yield `a` and `a + n` for built-in arrays and forward to members for containers.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "One template over arrays and containers",
        problem: "Given `int a[5] = {10, 20, 30, 40, 50};` and `vector<double> d = {1.5, 2.5, 3.0};` compute `accumulate(begin(a), end(a), 0)` and `accumulate(begin(d), end(d), 0.0)`, and identify `begin(a)`, `end(a)`, and `*rbegin(a)`.",
        steps: [
          { label: "The array", text: "`begin(a)` is `&a[0]` and `end(a)` is `&a[5]` — one past the last element. The range `[begin(a):end(a))` spans $e - b = 5$ elements: the whole array." },
          { label: "Sum over a", text: "`accumulate` walks the range adding: 10 + 20 + 30 + 40 + 50 = 150 (check: five elements averaging 30)." },
          { label: "Sum over d", text: "Same call shape on the vector: 1.5 + 2.5 + 3.0 = 7.0. The initial value 0.0 forces `double` accumulation — starting from a plain 0 would deduce `int` and truncate each partial sum, yielding 1 + 2 + 3 = 6." },
          { label: "Reverse", text: "`rbegin(a)` wraps `a + 5`, so `*rbegin(a)` is `a[4]` = 50; `++` from there moves to 40, 30, 20, 10, and `rend(a)` (base `a`) ends the walk." },
        ],
        result: "150 and 7.0, from one spelling of range access that works on both an array and a container — and the initial-value subtlety (0 versus 0.0 turning 7.0 into 6) is worth more than the arithmetic.",
      },
      {
        title: "Working through range access functions",
        problem: "begin, end and free functions. Your task: state what `begin(a)`/`end(a)` yield for a built-in array and for a container.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: state what `begin(a)`/`end(a)` yield for a built-in array and for a container. Write down the guarantee you will rely on — for this chapter it is: Free `begin`/`end` yield `a` and `a + n` for built-in arrays and forward to members for containers." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `for (auto p = v.begin(); p != v.end(); ++p) { std::cout << *p; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — use the `cbegin`/`cend`/`rbegin`/`rend` family correctly — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `cbegin`/`cend` give a read-only range; `rbegin`/`rend` the reversed one; for arrays `rbegin(a)` wraps `a + n`. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Free `begin`/`end` yield `a` and `a + n` for built-in arrays and forward to members for containers. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Free `begin`/`end` yield `a` and `a + n` for built-in arrays and forward to members for containers.",
      "`cbegin`/`cend` give a read-only range; `rbegin`/`rend` the reversed one; for arrays `rbegin(a)` wraps `a + n`.",
      "Generic code (and range-for itself) uses the free functions so one spelling covers members and member-less arrays alike.",
    ],
    quiz: [
      {
        q: "For `char name[32]`, what does `end(name)` return?",
        options: [
          "A `char` containing the last character",
          "`name + 31` — the last element",
          "`name + 32` — one past the last element",
          "A `string` holding a copy",
        ],
        answer: 2,
        explanation: "The free `end` yields the one-past-the-end pointer, completing the half-open range; element 31 is the last actual element.",
      },
      {
        q: "A template `f(C& c)` must traverse whatever it is given — `vector<int>`, `int[8]`, or a user range with only free functions. The traversal should use:",
        options: [
          "`c.begin()` and `c.end()`",
          "`begin(c)` and `end(c)`",
          "`c.data()` and `c.size()`",
          "`first(c)` and `last(c)`",
        ],
        answer: 1,
        explanation: "Only the free-function spelling handles member-less arrays and member-bearing containers uniformly — it is what range-for does internally.",
      },
      {
        q: "Code reads a vector that other code may still write elsewhere. Which range access states the read-only intent in the type system?",
        options: [
          "`cbegin(v)`",
          "`v.begin()`",
          "`v.rbegin()`",
          "`begin(v)`",
        ],
        answer: 0,
        explanation: "`cbegin` yields iterators through which writes are compile errors — const-correctness for iteration.",
      },
    ],
  },

  // ---------------------------------------------------------------- 33.5
  {
    sectionId: "cpp-ch33-s5",
    readingTime: 6,
    intro: "Algorithms keep needing small pieces of behavior: compare these two, add this in, is this one odd? C++ lets any object with `operator()` be passed where a function is expected — a function object. Because the callable's type is visible at the call site, the compiler can inline it; and because it is an object, it can carry state. The library supplies a standard vocabulary of them, and `std::function` can store any of them.",
    objectives: [
      "Define function objects and explain why they inline better than function pointers",
      "Apply the standard functors in `<functional>` as algorithm policies",
      "Decide when `std::function`'s type erasure is worth its cost",
    ],
    concepts: [
      {
        term: "Function object (functor)",
        kind: "definition",
        statement: "**A function object is an object of a class that implements `operator()`** — it can be called like a function, e.g. a class whose `bool operator()(const string& a, const string& b) const` compares case-insensitively. Two properties make functors the library's preferred parameterization: the call goes through a statically known type, so it is a prime candidate for inlining (a call through a function pointer usually is not); and the object can hold members — tolerances, counters, accumulated sums — making each call stateful without globals.",
        detail: "A class used this way conventionally takes its call operator as `const` unless it genuinely mutates state, so temporaries work: `sort(b, e, Nocase())` passes one.",
      },
      {
        term: "Standard function objects",
        kind: "definition",
        statement: "`<functional>` ships the vocabulary as class templates: arithmetic (`plus`, `minus`, `multiplies`, `divides`, `modulus`, `negate`), comparisons (`equal_to`, `not_equal_to`, `less`, `greater`, and their kin), and logical operations. They are the defaults you are already using: `map<K, V>` orders its keys with `less<K>`, and `sort(b, e)` compares with `less` on the element type. Pass `greater<int>()` to `sort` and the order flips.",
        detail: "Because these are types, not functions, the inlining problem of function pointers never arises — `sort` with `less<int>()` compiles to the same comparison as the hand-written `<`.",
      },
      {
        term: "`std::function`",
        kind: "definition",
        statement: "`std::function<R(Args...)>` (in `<functional>`) can hold anything callable with the given signature and return type — a lambda, a functor, a function pointer — and calls it through its own `operator()`. It is **type erasure for callables**: one named type stores them all. The price is an indirect call and possibly a heap allocation for large captured state, so concrete callables are preferred on hot paths.",
        detail: "Where it earns its keep is storage and interfaces: callbacks registered on events, tables of operations, plugin points — anywhere 'some callable of this shape' must outlive the expression that created it.",
      },
      {
        term: "Function Objects: the working contract",
        kind: "definition",
        statement: "**Function Objects.** Functors and std::function. You can claim this section when you can define function objects and explain why they inline better than function pointers — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 33 (STL Iterators); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Function Objects: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, apply the standard functors in `<functional>` as algorithm policies. Then, decide when `std::function`'s type erasure is worth its cost. Finally, test the outcome against the section promise: A functor is an object with `operator()`: inlinable like a direct call and able to carry state in members.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Functors as algorithm policies — with arithmetic you can check",
        problem: "With `vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};` and `w = {1, 2, 3, 4, 5}`, compute (a) `accumulate(v.begin(), v.end(), 0, plus<int>())`; (b) `accumulate(w.begin(), w.end(), 1, multiplies<int>())`; and (c) the mean that a stateful functor computes over `u = {2, 4, 6, 8}`.",
        steps: [
          { label: "(a) plus", text: "`plus<int>()(x, y)` returns `x + y`, so the fold adds all ten: the arithmetic series $\\frac{10 \\times 11}{2} = 55$." },
          { label: "(b) multiplies", text: "Starting from 1, the fold multiplies: $1 \\times 2 \\times 3 \\times 4 \\times 5 = 120$ — factorial(5), obtained by changing one policy argument of the same `accumulate`." },
          { label: "(c) state", text: "A functor `Mean { long sum = 0; int n = 0; void operator()(double x) { sum += x; ++n; } }` run by `for_each` over u adds 2, 4, 6, 8: sum = 20, n = 4, so its value is 20/4 = 5 — per-call state no plain function could carry." },
        ],
        result: "55, 120, and 5. Standard functor, standard functor, custom stateful functor — those three mechanisms are the whole skill of parameterizing algorithms with callables.",
      },
      {
        title: "Working through function objects",
        problem: "Functors and std::function. Your task: define function objects and explain why they inline better than function pointers.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define function objects and explain why they inline better than function pointers. Write down the guarantee you will rely on — for this chapter it is: A functor is an object with `operator()`: inlinable like a direct call and able to carry state in members." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `for (auto p = v.begin(); p != v.end(); ++p) { std::cout << *p; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — apply the standard functors in `<functional>` as algorithm policies — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `<functional>` gives the standard vocabulary (`less`, `plus`, `multiplies`, ...); `less<K>` is the default order of `map` and of `sort`. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A functor is an object with `operator()`: inlinable like a direct call and able to carry state in members. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A functor is an object with `operator()`: inlinable like a direct call and able to carry state in members.",
      "`<functional>` gives the standard vocabulary (`less`, `plus`, `multiplies`, ...); `less<K>` is the default order of `map` and of `sort`.",
      "`std::function<R(Args...)>` erases callable types for storage — at the cost of an indirect call; prefer concrete callables in hot code.",
    ],
    quiz: [
      {
        q: "The classic performance reason to pass a functor rather than a function pointer to `sort`:",
        options: [
          "Functors cannot deadlock",
          "Function pointers are deprecated in C++11",
          "Functors run on the GPU",
          "The functor's `operator()` is statically known per call site, so it can be inlined; the call through a function pointer usually cannot",
        ],
        answer: 3,
        explanation: "The comparator's type is a template argument, so the compiler sees the exact body — inlining and optimization follow. A function pointer is an opaque runtime value.",
      },
      {
        q: "`accumulate(w.begin(), w.end(), 1, multiplies<int>())` over `w = {2, 3, 4}` returns:",
        options: [
          "24",
          "9",
          "10",
          "6",
        ],
        answer: 0,
        explanation: "The fold is $1 \\times 2 \\times 3 \\times 4 = 24$; the initial value must be the multiplicative identity 1 — starting from 0 would collapse everything to 0.",
      },
      {
        q: "A class member must hold 'whatever callback the client installs' — lambdas, functors, plain functions all allowed. The natural type is:",
        options: [
          "a `void(*)(int)` function pointer",
          "`std::function<void(int)>`",
          "a template parameter on the class",
          "an `auto` member",
        ],
        answer: 1,
        explanation: "Type erasure over a fixed signature is exactly `std::function`'s job; a template parameter would infect every use of the class, and a plain pointer would reject lambdas with captures.",
      },
    ],
  },

  // ---------------------------------------------------------------- 33.6
  {
    sectionId: "cpp-ch33-s6",
    readingTime: 5,
    intro: "A function adaptor takes a callable you already have and returns a callable shaped the way you need: arguments fixed in place, arguments reordered, or a member function promoted to something callable on the object passed to it. With them, the algorithms' 'give me a callable' parameter can be fed from existing code instead of freshly written wrappers.",
    objectives: [
      "Use `bind` and placeholders to fix, reorder, and drop arguments",
      "Use `mem_fn` to call members through `for_each`, including through pointers",
      "Choose between adaptors and lambdas in modern code",
    ],
    concepts: [
      {
        term: "`bind` and placeholders",
        kind: "definition",
        statement: "**`bind(f, args)` returns a callable that invokes f with the given arguments, replacing each placeholder in args by the corresponding argument of the new call.** In `bind(f, _2, _1)`, the placeholders say 'pass the new call's second argument first, its first argument second'; `bind(f, x)` with no placeholders is partial application — a callable with no further arguments. Bound arguments are stored inside the returned object at bind time.",
        detail: "The placeholder names (`_1`, `_2`, ...) are found through the `std::placeholders` namespace, conventionally pulled in for the enclosing scope.",
      },
      {
        term: "`mem_fn`",
        kind: "definition",
        statement: "**`mem_fn(&C::f)` produces a callable that invokes member f on the object it is given:** `mem_fn(&Shape::draw)(s)` means `s.draw()`, and given a pointer or smart pointer it applies `->` instead. It works for data members as well as member functions, so `for_each(shapes.begin(), shapes.end(), mem_fn(&Shape::draw))` draws a container of shapes regardless of whether it stores objects or pointers.",
        detail: "Before C++11's `mem_fn`, `bind` and the older `mem_fun` family did this job with more ceremony — `mem_fn` is the streamlined survivor.",
      },
      {
        term: "Adaptors or lambdas?",
        kind: "insight",
        statement: "**A capturing lambda is the modern default for shaping a call** — `[](Shape& s) { s.draw(); }` says outright what `mem_fn(&Shape::draw)` says by convention, and the compiler can inline it just as well. Reach for `bind` when the adapted callable must be stored and composed generically — bindings nested inside bindings, argument reordering for APIs you do not control — and reach for `std::function` when the result must live in a named variable of fixed type.",
        detail: "The book's advice lands the same way: prefer lambdas where they suffice; the adaptors remain for composition, storage, and pre-lambda codebases.",
      },
      {
        term: "Function Adaptors: the working contract",
        kind: "definition",
        statement: "**Function Adaptors.** bind and mem_fn. You can claim this section when you can use `bind` and placeholders to fix, reorder, and drop arguments — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 33 (STL Iterators); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Function Adaptors: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, use `mem_fn` to call members through `for_each`, including through pointers. Then, choose between adaptors and lambdas in modern code. Finally, test the outcome against the section promise: `bind(f, args)` fixes arguments and reorders the rest via `_1`, `_2`, ...; the result is a first-class callable.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Tracing placeholders — arithmetic you can check",
        problem: "Let `int f(int x, int y, int z) { return 100*x + 10*y + z; }`. Define `auto g = bind(f, _2, _1, _3);` and `auto h = bind(f, 7, _1, 1);`. What do `g(2, 5, 9)` and `h(2)` return? And what does `for_each(shapes.begin(), shapes.end(), mem_fn(&Shape::draw))` do for `shapes = {&s1, &s2}`?",
        steps: [
          { label: "g's call", text: "At the call `g(2, 5, 9)`: `_1` is 2, `_2` is 5, `_3` is 9. The binding passes them as `f(_2, _1, _3)`, that is, `f(5, 2, 9)`." },
          { label: "Evaluate g", text: "$100 \\times 5 + 10 \\times 2 + 9 = 529$ — argument reordering verified by arithmetic." },
          { label: "h's call", text: "`h(2)` has only one placeholder, `_1 = 2`; the 7 and 1 were fixed at bind time. It calls `f(7, 2, 1)` = $700 + 20 + 1 = 721$ — partial application: a three-argument f consumed as a one-argument callable." },
          { label: "The `mem_fn` part", text: "For each element p of shapes, `mem_fn(&Shape::draw)` applies the member through the pointer: `p->draw()` — so `s1.draw()` then `s2.draw()`, two calls, no wrapper class written." },
        ],
        result: "529, 721, and two member calls — placeholders swapped arguments 1 and 2, fixed values eliminated parameters, and `mem_fn` bridged member functions into `for_each`.",
      },
      {
        title: "Working through function adaptors",
        problem: "bind and mem_fn. Your task: use `bind` and placeholders to fix, reorder, and drop arguments.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use `bind` and placeholders to fix, reorder, and drop arguments. Write down the guarantee you will rely on — for this chapter it is: `bind(f, args)` fixes arguments and reorders the rest via `_1`, `_2`, ...; the result is a first-class callable." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `for (auto p = v.begin(); p != v.end(); ++p) { std::cout << *p; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — use `mem_fn` to call members through `for_each`, including through pointers — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `mem_fn(&C::f)` turns a member into a callable taking the object — objects, pointers, and smart pointers alike. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `bind(f, args)` fixes arguments and reorders the rest via `_1`, `_2`, ...; the result is a first-class callable. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`bind(f, args)` fixes arguments and reorders the rest via `_1`, `_2`, ...; the result is a first-class callable.",
      "`mem_fn(&C::f)` turns a member into a callable taking the object — objects, pointers, and smart pointers alike.",
      "Default to lambdas for one-off shaping; keep `bind`/`mem_fn` for composition and storage, `std::function` for interfaces.",
    ],
    quiz: [
      {
        q: "`auto g = bind(f, _2, _1);` — `g(4, 6)` invokes:",
        options: [
          "`f(4, 6)`",
          "`f(6, 4)`",
          "`f()` — the placeholders consume nothing",
          "`f(4)` — the second argument is dropped",
        ],
        answer: 1,
        explanation: "`_2` in the first slot receives the call's second argument (6) and `_1` in the second slot receives the first (4): the two arguments are swapped.",
      },
      {
        q: "Over `vector<Shape*> shapes`, which expression draws every shape with `for_each`?",
        options: [
          "`for_each(b, e, Shape::draw)`",
          "`for_each(b, e, &Shape::draw)`",
          "`for_each(b, e, mem_fn(&Shape::draw))`",
          "`for_each(b, e, Shape::draw())`",
        ],
        answer: 2,
        explanation: "A pointer to member is not itself callable; `mem_fn` wraps it into something `for_each` can apply to each element, using `->` for the pointers.",
      },
      {
        q: "For a one-off 'move every shape by p' passed to an algorithm, today's recommended tool is:",
        options: [
          "`bind(&Shape::move, _1, p)`",
          "a lambda `[](Shape& s) { s.move(p); }` with p captured",
          "`mem_fn` with extra arguments",
          "a `std::function` object built per call",
        ],
        answer: 1,
        explanation: "The lambda states the intent locally and optimizes like handwritten code; `bind` remains for stored and composed callables, and `std::function` adds erasure cost you do not need here.",
      },
    ],
  },

  // ---------------------------------------------------------------- 33.7
  {
    sectionId: "cpp-ch33-s7",
    readingTime: 4,
    intro: "Stroustrup closes the chapter with rules of thumb. Their common thread: push work down the stack — let range-for and named algorithms carry the looping, let adaptors carry the growth and the direction, let concrete callables carry the behavior — and write explicit iterator code only when the traversal itself is what you are writing.",
    objectives: [
      "Choose among range-for, algorithms, and explicit iterator loops by intent",
      "Apply the free `begin`/`end` and the iterator adaptors as default tools",
      "Pick callables (functor, lambda, `std::function`, adaptor) deliberately",
    ],
    concepts: [
      {
        term: "Pick the highest level that says what you mean",
        kind: "method",
        statement: "**Use range-for when you touch every element and position does not matter; use a named algorithm when the loop has a name (`find`, `count`, `copy`, `sort`); write an explicit iterator loop only when the traversal itself is the logic.** Inside an explicit loop keep the half-open discipline: initialize to `b`, test `p != e`, and never order-compare iterators that might not support ordering.",
        detail: "The exception proves the rule: when a container offers its own version of an algorithm — `list::sort`, `list::remove` — prefer the member; it exploits what the container alone knows.",
      },
      {
        term: "Make the adaptors your defaults",
        kind: "method",
        statement: "**In generic code, use `begin(c)`/`end(c)`** so arrays and containers are one case. **Write output through insert iterators** — `back_inserter` first — so growth is the container's job and overflow is structurally impossible. **Iterate backwards with reverse iterators** rather than decrement gymnastics; **move elements with move iterators** when transferring ownership; **treat I/O as sequences with stream iterators** instead of hand-rolled read loops.",
        detail: "Each adaptor removes one manual idiom that used to be a bug class: buffer sizing, off-by-one on reversal, forgotten moves, hand-written end-of-file checks.",
      },
      {
        term: "Choose callables by role",
        kind: "law",
        statement: "**Concrete first: function objects and lambdas inline and carry state. `std::function` only when storing** callables of a common signature behind one type. **Lambdas before `bind`** for shaping a single call site — clearer to read, easier for the optimizer — and keep `bind`/`mem_fn` for composition and stored parameterization. Predicates passed to algorithms should stay simple enough to verify at a glance.",
        detail: "And a classic corollary: if a loop body is just 'apply f to each element', you have rediscovered `for_each` — stop and use it.",
      },
      {
        term: "Shipping rule for STL iterators",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Level of iteration: range-for for full ranges, named algorithms for named jobs, explicit iterators only for bespoke traversal.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
      {
        term: "Review checklist for STL iterators",
        kind: "method",
        statement: "Take the objectives as review questions: choose among range-for, algorithms, and explicit iterator loops by intent? Then apply the free `begin`/`end` and the iterator adaptors as default tools? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.",
        detail: "A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.",
      },
    ],
    examples: [
      {
        title: "A code review against the advice",
        problem: "Review this fragment, where `src` holds the integers 1 to 20: `int buf[8]; int n = 0; for (int i = 0; i != src.size(); ++i) if (src[i] % 2 == 1) buf[n++] = src[i];` — what does the advice change, and what is the final state?",
        steps: [
          { label: "The bug class", text: "The integers 1..20 contain ten odd numbers, but `buf` has eight slots: the ninth odd value writes past `buf[7]` — undefined behavior. This manual-growth bug is exactly what insert iterators exist to kill." },
          { label: "Fix 1 — output", text: "`vector<int> odds; copy_if(src.begin(), src.end(), back_inserter(odds), [](int x) { return x % 2 == 1; })` — ten `push_back` calls; a typical capacity sequence 1, 2, 4, 8, 16 ends at 16, comfortably holding 10." },
          { label: "Fix 2 — the scan", text: "If a hand-written loop stays, it becomes range-for: `for (int x : src)` — no `i`, no `src[i]`, no bounds to get wrong." },
          { label: "Fix 3 — intent", text: "Better still, the whole construct has a name: 'keep the odd ones' is `copy_if`. The named algorithm documents the loop in a way `for (int i = 0; ...)` never will." },
        ],
        result: "`odds` ends as {1, 3, 5, 7, 9, 11, 13, 15, 17, 19} with capacity to spare and no overflow possible; the review note writes itself: the buffer size 8 was the only thing standing between correct output and undefined behavior.",
      },
      {
        title: "Reviewing STL iterators code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: choose among range-for, algorithms, and explicit iterator loops by intent.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Level of iteration: range-for for full ranges, named algorithms for named jobs, explicit iterators only for bespoke traversal." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `for (auto p = v.begin(); p != v.end(); ++p) { std::cout << *p; }`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: apply the free `begin`/`end` and the iterator adaptors as default tools. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Defaults for generality and safety: free `begin`/`end` in templates, insert iterators for output, reverse/move/stream adaptors for the rest." },
        ],
        result: "The review ends with findings tied to reasons: Level of iteration: range-for for full ranges, named algorithms for named jobs, explicit iterators only for bespoke traversal. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Level of iteration: range-for for full ranges, named algorithms for named jobs, explicit iterators only for bespoke traversal.",
      "Defaults for generality and safety: free `begin`/`end` in templates, insert iterators for output, reverse/move/stream adaptors for the rest.",
      "Concrete callables (functors, lambdas) first; `std::function` for storage; lambdas before `bind` for shaping calls.",
    ],
    quiz: [
      {
        q: "You must double every element of `v` in place. The advice prefers:",
        options: [
          "`for (auto& x : v) x *= 2;` — full range, no position logic",
          "`for (int i = 0; i < v.size(); ++i) v[i] *= 2;` — indices are safest",
          "`for (auto p = v.begin(); p != v.end(); ++p) *p *= 2;` — iterators are always best",
          "a `std::function`-driven loop for flexibility",
        ],
        answer: 0,
        explanation: "Range-for is the stated rule for touching every element with no position logic; the iterator loop is not wrong, just a level lower than the task needs.",
      },
      {
        q: "A template must accept any sequence, including built-in arrays. The advice's spelling:",
        options: [
          "`c.begin()`, `c.end()`",
          "`begin(c)`, `end(c)`",
          "`c.at(0)` through `c.at(c.size()-1)`",
          "`cbegin(c)` only",
        ],
        answer: 1,
        explanation: "Free `begin`/`end` handle member-less arrays and containers alike — that generality is precisely why they exist.",
      },
      {
        q: "Both a generic `std::sort` call and a `list::sort` member could be written for a `list`. The advice leans:",
        options: [
          "the generic algorithm — members are legacy",
          "either — they are specified to be identical in complexity and semantics",
          "the member: it exploits the list's structure (and generic `sort` cannot run on list's bidirectional iterators anyway)",
          "neither — write merge sort by hand",
        ],
        answer: 2,
        explanation: "General `sort` needs random access, which `list` iterators lack; the member version is the specialized implementation the container owes its users.",
      },
    ],
  },
]

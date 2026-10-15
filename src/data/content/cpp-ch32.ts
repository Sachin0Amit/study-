import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition
// Chapter 32: STL Algorithms (Sections 32.1 – 32.7)
// Master study content.
// ============================================================================

export const cppCh32Content: SectionContent[] = [
  // ---------------------------------------------------------------- 32.1
  {
    sectionId: "cpp-ch32-s1",
    readingTime: 5,
    intro: "The standard algorithms are the payoff of the STL's separation: some sixty generic functions that traverse, transform, search and sort any sequence an iterator pair can name. This chapter is the field guide to them — what exists, what it costs, and what it demands of your data.",
    objectives: [
      "Describe what the standard algorithms offer and where they are declared",
      "Explain the sequence-based (iterator-pair) interface and why it beats container-based design",
      "Read an algorithm's complexity guarantee as part of its contract"
    ],
    concepts: [
      {
        term: "What the algorithms are",
        kind: "definition",
        statement: "Generic functions, mostly in `<algorithm>` (the numeric ones in `<numeric>`), operating on **sequences**: searching (`find`), counting, reordering (`sort`, `reverse`, `rotate`), mutating (`copy`, `transform`, `replace`, `remove`), set operations on sorted ranges, extrema (`min_element`, `minmax_element`) and numeric folds (`accumulate`, `inner_product`).",
        detail: "Each is a template over iterator types — one definition, instantiable for every sequence that meets its requirements."
      },
      {
        term: "Sequences, not containers",
        kind: "law",
        statement: "An algorithm's input is a **sequence** $[b, e)$ — a pair of iterators — never a container object. The same `sort` therefore serves a `vector`, a built-in array, a `string`'s characters or a stream buffer: nothing about the container is known or needed.",
        detail: "This is the STL's central economy: N containers × M algorithms become N + M implementations instead of N × M."
      },
      {
        term: "The cost is part of the contract",
        kind: "law",
        statement: "Every algorithm carries a standard-mandated complexity: `find` is $O(n)$, `sort` is $O(n \\log n)$, `binary_search` is $O(\\log n)$ on sorted input, `merge` is $O(n+m)$. Choosing an algorithm is choosing a cost model you may rely on.",
        detail: "The standard counts in the currency of the iterator's category — comparisons, assignments and iterator steps."
      },
      {
        term: "Generality through minimal requirements",
        kind: "insight",
        statement: "Algorithms demand the **weakest iterator category** they can get away with: `find` needs only input iterators, `reverse` bidirectional, `sort` random access. The weaker the demand, the more containers — and streams — an algorithm serves.",
        detail: "A `list` cannot be `std::sort`ed (its iterators are bidirectional); it gets a member `sort` instead, which exploits the links."
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** The algorithms at a glance. You can claim this section when you can describe what the standard algorithms offer and where they are declared — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 32 (STL Algorithms); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "One sort, three data sources",
        problem: "Sort the same five values whether they live in a built-in array, a `vector`, or the characters of a `string`. Show the identical shape of the three calls.",
        steps: [
          { label: "Built-in array", text: "`double a[5] {30.0, 10.0, 20.0, 50.0, 40.0}; sort(a, a + 5);` — pointers are iterators, so the raw array is a first-class sequence." },
          { label: "vector", text: "`sort(v.begin(), v.end());` — same algorithm, iterator type now a class." },
          { label: "string", text: "`sort(s.begin(), s.end());` on \"cabde\" yields \"abcde\" — characters are elements like any other." },
          { label: "Why one definition serves all", text: "Each call instantiates the template for a different iterator type: three specializations, zero runtime dispatch, no virtual functions." }
        ],
        result: "Three iterator types, one algorithm — the entire STL in miniature."
      },
      {
        title: "Working through introduction",
        problem: "The algorithms at a glance. Your task: describe what the standard algorithms offer and where they are declared.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: describe what the standard algorithms offer and where they are declared. Write down the guarantee you will rely on — for this chapter it is: Algorithms take iterator pairs naming half-open sequences — never containers." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::sort(v.begin(), v.end()); auto it = std::find(v.begin(), v.end(), k);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain the sequence-based (iterator-pair) interface and why it beats container-based design — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Every algorithm's complexity is a standard-mandated promise, not folklore. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Algorithms take iterator pairs naming half-open sequences — never containers. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Algorithms take iterator pairs naming half-open sequences — never containers.",
      "Every algorithm's complexity is a standard-mandated promise, not folklore.",
      "Each algorithm demands the weakest iterator category it can — that is why one definition serves arrays, containers and streams alike."
    ],
    quiz: [
      {
        q: "The first two arguments to a standard algorithm are usually:",
        options: ["iterator pairs naming a half-open sequence", "containers", "C arrays only", "streams"],
        answer: 0,
        explanation: "The sequence $[b, e)$ is the universal interface; containers are merely one way to produce it."
      },
      {
        q: "`std::sort` requires which iterator category?",
        options: ["input", "forward", "bidirectional", "random access"],
        answer: 3,
        explanation: "Jumping to pivot positions needs $p + n$ arithmetic — random access only."
      },
      {
        q: "The numeric folds like `accumulate` are declared in:",
        options: ["`<numeric>`", "`<algorithm>`", "`<functional>`", "`<iterator>`"],
        answer: 0,
        explanation: "`<numeric>` holds `accumulate`, `inner_product`, `partial_sum` and `iota`."
      },
      {
        q: "An algorithm is written to demand the weakest category it can because:",
        options: ["it runs faster that way", "it serves every sequence with those operations — generality", "it saves memory", "it avoids exceptions"],
        answer: 1,
        explanation: "Weaker requirements enlarge the set of sequence types the algorithm accepts — the STL's core economy."
      }
    ]
  },

  // ---------------------------------------------------------------- 32.2
  {
    sectionId: "cpp-ch32-s2",
    readingTime: 6,
    intro: "Beneath the sixty names lies one design: inputs are sequences, outputs are sequences, behavior is customized by function arguments, and every operation carries a mandated complexity. This section reads that design as a set of rules you can apply to any algorithm you meet.",
    objectives: [
      "Read an algorithm signature: input sequence(s), function arguments, output iterator, return value",
      "Predict output-space requirements and know when insert iterators supply them",
      "Use the complexity table to choose among algorithms with identical results"
    ],
    concepts: [
      {
        term: "The signature pattern",
        kind: "method",
        statement: "Almost every algorithm is `alg(first, last, [first2, last2,] [value or predicate,] [out])`: the sequence arguments come first, the customization — values, predicates, comparators — after, and writing algorithms return the one-past-the-end iterator of what they produced.",
        detail: "Read new signatures in that order and nothing in `<algorithm>` will surprise you."
      },
      {
        term: "Predicates and function arguments",
        kind: "definition",
        statement: "Algorithms accept **predicates** (`bool`-returning callables) and operations as arguments: `find_if(b, e, pred)`, `count_if`, `sort(b, e, cmp)`. Callables are passed **by value** — make them cheap to copy and free of side effects that depend on call order.",
        detail: "The callable may be a function pointer, a function object or a lambda — chapter 33 covers the machinery."
      },
      {
        term: "Output space is the caller's duty",
        kind: "law",
        statement: "`copy`, `transform` and friends write through an **output iterator** and never grow anything: the destination must have room for $n$ elements — or be an insert iterator that supplies its own storage. Writing past the room is undefined behavior, not a checked error.",
        detail: "This is the design consequence of sequence-based interfaces: the algorithm cannot see the container, so it cannot resize it."
      },
      {
        term: "The complexity contract",
        kind: "law",
        statement: "Mandated costs you can rely on: linear scans $O(n)$; `sort` $O(n \\log n)$; `nth_element` $O(n)$ on average; `merge` $O(n+m)$; the binary-search family $O(\\log n)$ on sorted input; `minmax_element` at most $\\frac{3n}{2} - 2$ comparisons.",
        detail: "The cheat-sheet figure below is the exam version of the standard's tables — every row is a promise."
      },
      {
        term: "Iterator-category specialization",
        kind: "insight",
        statement: "The same name adapts to what the iterator can do: `distance(p, q)` is one subtraction for a `vector` iterator but a counted walk for a `list` iterator; `advance(p, n)` likewise. The category tag selects the implementation at **compile time** — no virtual dispatch.",
        detail: "This is how one generic name provides the cheap algorithm where possible without penalizing the rest."
      }
    ],
    figures: [
      {
        caption: "Complexity cheat sheet for the workhorse algorithms (ch32). Every row is a standard-mandated bound: the reason `sort` requires random-access iterators, the binary-search family demands sorted input, and `remove` must be paired with an explicit `erase`.",
        svg: `<svg role='img' aria-label='Complexity cheat sheet for the workhorse algorithms (ch32). Every row is a standard-mandated bound: the reason &#96;sort&#96; requires random-access iterators, the...' viewBox="0 0 840 424" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="30" y="30" width="780" height="34" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.4"/><text x="46" y="52" font-size="13" font-weight="600" fill="currentColor">Algorithm</text><text x="475" y="52" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">Cost</text><text x="545" y="52" font-size="13" font-weight="600" fill="currentColor">Requirements</text><rect x="30" y="64" width="780" height="38" fill="currentColor" fill-opacity="0.04"/><rect x="30" y="140" width="780" height="38" fill="currentColor" fill-opacity="0.04"/><rect x="30" y="216" width="780" height="38" fill="currentColor" fill-opacity="0.04"/><rect x="30" y="292" width="780" height="38" fill="currentColor" fill-opacity="0.04"/><text x="46" y="88" font-size="12.5" fill="currentColor">find · count · for each</text><text x="475" y="88" text-anchor="middle" font-size="12.5" fill="currentColor">O(n)</text><text x="545" y="88" font-size="12.5" fill="currentColor">input iterators; stops at first hit</text><text x="46" y="126" font-size="12.5" fill="currentColor">copy · transform</text><text x="475" y="126" text-anchor="middle" font-size="12.5" fill="currentColor">O(n)</text><text x="545" y="126" font-size="12.5" fill="currentColor">destination needs room for n elements</text><text x="46" y="164" font-size="12.5" fill="currentColor">remove · unique</text><text x="475" y="164" text-anchor="middle" font-size="12.5" fill="currentColor">O(n)</text><text x="545" y="164" font-size="12.5" fill="currentColor">pair with erase — never shrinks alone</text><text x="46" y="202" font-size="12.5" fill="currentColor">reverse · rotate · shuffle</text><text x="475" y="202" text-anchor="middle" font-size="12.5" fill="currentColor">O(n)</text><text x="545" y="202" font-size="12.5" fill="currentColor">bidirectional · random access for shuffle</text><text x="46" y="240" font-size="12.5" fill="currentColor">sort · stable sort</text><text x="475" y="240" text-anchor="middle" font-size="12.5" fill="currentColor">O(n log n)</text><text x="545" y="240" font-size="12.5" fill="currentColor">random access iterators</text><text x="46" y="278" font-size="12.5" fill="currentColor">nth element</text><text x="475" y="278" text-anchor="middle" font-size="12.5" fill="currentColor">O(n) average</text><text x="545" y="278" font-size="12.5" fill="currentColor">position n receives its sorted value</text><text x="46" y="316" font-size="12.5" fill="currentColor">lower / upper bound, binary search</text><text x="475" y="316" text-anchor="middle" font-size="12.5" fill="currentColor">O(log n)</text><text x="545" y="316" font-size="12.5" fill="currentColor">input must already be sorted</text><text x="46" y="354" font-size="12.5" fill="currentColor">merge · set operations</text><text x="475" y="354" text-anchor="middle" font-size="12.5" fill="currentColor">O(n + m)</text><text x="545" y="354" font-size="12.5" fill="currentColor">both inputs sorted; output has room</text><text x="46" y="392" font-size="12.5" fill="currentColor">min · max · minmax element</text><text x="475" y="392" text-anchor="middle" font-size="12.5" fill="currentColor">O(n) — at most 3n/2 − 2</text><text x="545" y="392" font-size="12.5" fill="currentColor">both extrema in a single pass</text><path d="M30 64 H810 M30 102 H810 M30 178 H810 M30 254 H810 M30 330 H810 M30 406 H810 M420 64 V406 M530 64 V406" fill="none" stroke="currentColor" stroke-opacity="0.2"/></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Auditing a complexity claim",
        problem: "Verify by counting: (a) worst-case `find` on $n = 1000$; (b) `std::sort`'s comparator calls on $n = 1000$; (c) a hand-written bubble sort on the same data.",
        steps: [
          { label: "find", text: "The value is absent ⇒ exactly $n = 1000$ element comparisons (plus 1001 iterator comparisons for the loop)." },
          { label: "sort", text: "A counting comparator reports about $n \\log_2 n \\approx 1000 \\times 9.97 \\approx 9966$ comparisons — introsort keeps its $O(n \\log n)$ worst case." },
          { label: "bubble", text: "Reversed input costs $\\frac{n(n-1)}{2} = 499{,}500$ comparisons — 50× `sort`'s count." },
          { label: "Read the table", text: "The cheat-sheet figures are what the standard owes you: measured counts may land anywhere at or below the bound, never above it in complexity class." }
        ],
        result: "1,000 vs ≈9,966 vs 499,500 comparisons — the complexity table, verified in integers."
      },
      {
        title: "Working through algorithms",
        problem: "The algorithms and their design. Your task: read an algorithm signature: input sequence(s), function arguments, output iterator, return value.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: read an algorithm signature: input sequence(s), function arguments, output iterator, return value. Write down the guarantee you will rely on — for this chapter it is: Signatures read: sequence(s) first, customization next, output iterator last; writing algorithms return the new end." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::sort(v.begin(), v.end()); auto it = std::find(v.begin(), v.end(), k);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — predict output-space requirements and know when insert iterators supply them — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: The caller guarantees output space — or passes an insert iterator. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Signatures read: sequence(s) first, customization next, output iterator last; writing algorithms return the new end. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Signatures read: sequence(s) first, customization next, output iterator last; writing algorithms return the new end.",
      "The caller guarantees output space — or passes an insert iterator.",
      "Complexity is mandated per algorithm: the table is a contract, verified by counting."
    ],
    quiz: [
      {
        q: "`copy(b, e, out)` with `out` a plain iterator into an **empty** `vector`:",
        options: ["grows the vector as needed", "is fine — copy checks capacity", "is undefined: the destination must already have room for $n$ elements", "throws `length_error`"],
        answer: 2,
        explanation: "Sequence-based algorithms cannot resize anything they cannot see; room is the caller's promise."
      },
      {
        q: "Predicates are passed to algorithms:",
        options: ["by reference", "by value", "by `std::ref` only", "as templates, never as objects"],
        answer: 1,
        explanation: "By value — hence the rule to keep them small, pure and cheap to copy."
      },
      {
        q: "`distance(p, q)` on `list<int>` iterators costs:",
        options: ["$O(1)$", "$O(\\log n)$", "$O(n)$ — a counted walk", "undefined"],
        answer: 2,
        explanation: "Bidirectional iterators support no subtraction, so the distance is measured by incrementing."
      }
    ]
  },

  // ---------------------------------------------------------------- 32.3
  {
    sectionId: "cpp-ch32-s3",
    readingTime: 6,
    intro: "The read-only algorithms ask questions of a sequence without changing it: does it contain a value, how many pass a test, where is the first match, are two sequences equal. They are the safest tools in the library — and the ones you will call most.",
    objectives: [
      "Select among the find, count and `all_of`-family for the question being asked",
      "Trace the short-circuit behavior of the question-asking algorithms",
      "Use `for_each`'s returned function object to carry state out of a traversal"
    ],
    concepts: [
      {
        term: "The find family",
        kind: "definition",
        statement: "`find(b, e, v)` — the first element `==` to v; `find_if(b, e, pred)`; `find_if_not`. All return **`e` when nothing matches** — so always test the result against `e` before dereferencing. Linear $O(n)$, short-circuiting at the first hit.",
        detail: "The pattern `auto p = find(v.begin(), v.end(), x); if (p != v.end()) ...` is the library's “is it there, and where” in one call."
      },
      {
        term: "The count family",
        kind: "definition",
        statement: "`count(b, e, v)` returns the number of elements `==` to v; `count_if(b, e, pred)` counts predicate hits. A full $O(n)$ pass with no early exit — counting cannot stop early.",
        detail: "Both return a difference-type integer, so counting an empty range yields 0, never an error."
      },
      {
        term: "`all_of`, `any_of`, `none_of`",
        kind: "definition",
        statement: "C++11 whole-sequence predicates: `all_of(b, e, p)` is true iff p holds for **every** element, `any_of` iff for at least one, `none_of` iff for none. Each scans left to right and **stops at the first element that decides the answer**.",
        detail: "`all_of` halts on the first false; `any_of` on the first true — the same short-circuit as `&&` and `||`, lifted to sequences."
      },
      {
        term: "`for_each`",
        kind: "definition",
        statement: "Applies its function to each element and **returns the function** — so a stateful functor's accumulated data comes back in the return value. It is the generic traversal when no more specific algorithm states your intent.",
        detail: "Returning the (possibly mutated) functor is what makes `for_each` a poor man's `accumulate` with arbitrary state."
      },
      {
        term: "`equal`, `mismatch`, `search`",
        kind: "definition",
        statement: "`equal(b1, e1, b2)` — element-by-element `==`, with the second range's sufficiency the caller's promise; `mismatch` returns the **first differing pair** as a pair of iterators; `search(b, e, b2, e2)` finds the first occurrence of the second sequence **as a contiguous subsequence** of the first.",
        detail: "These are the comparison queries: whole-sequence equality, first difference, and subsequence location."
      }
    ],
    examples: [
      {
        title: "Asking six questions of one vector",
        problem: "For `vector<int> v {3, 1, 4, 1, 5, 9, 2, 6}` (whose elements sum to 31): count the evens, find the first value above 5, test “all odd”, test “any at least 8”, and total the elements with a stateful functor.",
        steps: [
          { label: "count_if", text: "Even predicate `x % 2 == 0` matches 4, 2 and 6 ⇒ **3** — a full 8-element scan." },
          { label: "find_if", text: "First value > 5: 3, 1, 4, 1, 5 all fail, then **9 at index 5** — six predicate calls, short circuit." },
          { label: "all_of odd", text: "3 ✓, 1 ✓, 4 ✗ ⇒ **false after 3 calls** — the first counterexample ends the scan." },
          { label: "any_of ≥ 8", text: "3, 1, 4, 1, 5 fail, then 9 ✓ ⇒ **true after 6 calls**." },
          { label: "for_each sum", text: "A functor `Sum{0}` accumulates $3+1+4+1+5+9+2+6 = 31$ and is handed back as `for_each`'s return value." }
        ],
        result: "3 evens; first >5 is `v[5] == 9`; all-odd false; any ≥ 8 true; sum 31 — every query answered with its exact cost."
      },
      {
        title: "Working through nonmodifying sequence algorithms",
        problem: "find, count, all_of and friends. Your task: select among the find, count and `all_of`-family for the question being asked.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: select among the find, count and `all_of`-family for the question being asked. Write down the guarantee you will rely on — for this chapter it is: `find`-family results must be tested against `end()` before use; they stop at the first hit." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::sort(v.begin(), v.end()); auto it = std::find(v.begin(), v.end(), k);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — trace the short-circuit behavior of the question-asking algorithms — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `all_of`/`any_of`/`none_of` short-circuit exactly as `&&`/`||` do. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `find`-family results must be tested against `end()` before use; they stop at the first hit. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`find`-family results must be tested against `end()` before use; they stop at the first hit.",
      "`all_of`/`any_of`/`none_of` short-circuit exactly as `&&`/`||` do.",
      "`for_each` returns its function object — the standard way to carry state out of a traversal."
    ],
    quiz: [
      {
        q: "If `find(b, e, v)` finds nothing it returns:",
        options: ["nullptr", "the value's position anyway", "`e`, the end iterator — always test against it", "an `optional`"],
        answer: 2,
        explanation: "The end iterator is the universal “not found”; dereferencing it is undefined behavior."
      },
      {
        q: "`all_of(b, e, p)` stops scanning when it:",
        options: ["never — always a full scan", "meets the first element where p is false", "meets the first true", "reaches the midpoint"],
        answer: 1,
        explanation: "One false element decides the conjunction — short-circuit, exactly like `&&`."
      },
      {
        q: "You recover a stateful functor's accumulated data after `for_each` by:",
        options: ["global variables only", "calling `back()` on the container", "reading `for_each`'s return value", "it is lost by definition"],
        answer: 2,
        explanation: "`for_each` returns the function it applied, mutations and all."
      },
      {
        q: "`equal(b1, e1, b2)` assumes:",
        options: ["both ranges are sorted", "the second range is at least as long as the first — an unchecked promise", "the second range is empty", "elements are arithmetic types"],
        answer: 1,
        explanation: "Only the first range has an end; the caller guarantees the second can keep up."
      },
      // PYQ-pattern — find miss returns end iterator (rephrased)
      {
        q: "What does this program print?\n```cpp\n#include <algorithm>\n#include <iostream>\n#include <vector>\nint main() {\n  std::vector<int> v{1, 2, 3};\n  auto it = std::find(v.begin(), v.end(), 9);\n  std::cout << (it == v.end());\n}\n```",
        options: ["`0`, because `find` throws when the value is missing", "Nothing predictable, because `it` dangles", "`1`, because a miss returns the end iterator", "`9`, because `find` returns the sought value itself"],
        answer: 2,
        explanation: "Step 1: The code given searches a three-element vector for an absent value and compares the result with the end iterator. Step 2: The governing rule is the search contract: read-only searches return an iterator to the first match, or the past-the-end iterator when nothing matches, and callers must test before dereferencing. Step 3: Tracing the scan, positions holding `1`, `2`, and `3` all mismatch `9`, so the returned iterator equals `v.end()`, the comparison yields true, and the stream prints `1`. Step 4: The distractors fail because the algorithm reports misses by value rather than by throwing, the returned iterator is valid, and the sought value is never materialized. Step 5: Therefore the program prints `1`."
      }
    ]
  },

  // ---------------------------------------------------------------- 32.4
  {
    sectionId: "cpp-ch32-s4",
    readingTime: 6,
    intro: "Modifying algorithms write into output sequences: copying with a transformation, replacing, reordering, removing. Their most famous subtlety is that removing never shrinks anything — the erase–remove idiom exists because of it, and because algorithms cannot see the container they are cleaning.",
    objectives: [
      "Use copy/transform/replace/fill/generate with correct output space",
      "Explain why `remove` and `unique` return an iterator instead of shrinking the container",
      "Apply the erase–remove idiom and the reverse/rotate/shuffle reorderings"
    ],
    concepts: [
      {
        term: "copy and transform",
        kind: "definition",
        statement: "`copy(b, e, out)` copies elements unchanged (the overloaded `copy_if` filters by a predicate); `transform(b, e, out, f)` applies a unary operation (or a binary one over two input ranges) while copying. All are $O(n)$ and return the new end of the output.",
        detail: "`copy` is the workhorse of the iterator adaptors: with a `back_inserter` it becomes “append everything”."
      },
      {
        term: "The remove surprise",
        kind: "law",
        statement: "`remove(b, e, v)` **cannot shrink the container** — it holds only iterators, not the container object. It moves the kept elements forward and returns the new logical end; elements beyond are unspecified leftovers. Shrink explicitly: `c.erase(remove(c.begin(), c.end(), v), c.end())` — the **erase–remove idiom**. `unique` follows the same rule for adjacent duplicates.",
        detail: "The rule is the price of sequence-based design: no container in sight, no `size()` to change."
      },
      {
        term: "replace, fill, generate",
        kind: "definition",
        statement: "`replace(b, e, old, new)` (and `replace_if`) overwrite matching elements in place; `fill(b, e, v)` assigns v to every element; `generate(b, e, g)` assigns `g()`'s successive results. All $O(n)$, all in place — no output iterator needed.",
        detail: "They write only into elements that already exist, so no capacity question ever arises."
      },
      {
        term: "reverse, rotate, shuffle",
        kind: "definition",
        statement: "`reverse(b, e)` flips in place ($\\frac{n}{2}$ swaps, bidirectional iterators); `rotate(b, m, e)` makes `m` the new first element — a circular shift and the heart of insertion sort's inner loop; `shuffle(b, e, engine)` produces a uniformly random permutation from a random-number engine (its deprecated ancestor `random_shuffle` is gone).",
        detail: "`rotate`'s return value — the new position of the old first element — makes cycles composable."
      },
      {
        term: "move",
        kind: "definition",
        statement: "`move(b, e, out)` moves elements out through an output iterator: the source remains valid but its element values are unspecified. This is the C++11 underpinning of transferring a buffer's contents without copies.",
        detail: "Combined with move iterators (ch33), whole containers can be relocated at the cost of pointer fix-ups rather than deep copies."
      }
    ],
    examples: [
      {
        title: "Erase–remove, element by element",
        problem: "From `vector<int> v {1, 2, 3, 4, 5, 6}`, remove all odd values via `remove_if` and then `erase`. Trace the buffer.",
        steps: [
          { label: "Call", text: "`auto it = remove_if(v.begin(), v.end(), [](int x) { return x % 2; });`" },
          { label: "The pass", text: "Read 1 (odd, skip); keep 2 → write at index 0; skip 3; keep 4 → index 1; skip 5; keep 6 → index 2." },
          { label: "Logical view", text: "`v == {2, 4, 6, ?, ?, ?}` with `it` pointing at index 3 — the tail still holds leftover values, and they are **unspecified**: never relied on." },
          { label: "Erase", text: "`v.erase(it, v.end());` ⇒ `v == {2, 4, 6}`, `size() == 3`, capacity unchanged (still 6)." },
          { label: "Cost", text: "$n$ reads and at most $n$ writes — here exactly 3 keep-writes, one linear pass." }
        ],
        result: "v = {2, 4, 6} with size 3 and capacity 6: the algorithm moved the frontier, the erase reclaimed the size."
      },
      {
        title: "Working through modifying sequence algorithms",
        problem: "transform, copy, remove and shuffle. Your task: use copy/transform/replace/fill/generate with correct output space.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use copy/transform/replace/fill/generate with correct output space. Write down the guarantee you will rely on — for this chapter it is: `remove`/`unique` return the new logical end — the container's `erase` must finish the job." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::sort(v.begin(), v.end()); auto it = std::find(v.begin(), v.end(), k);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain why `remove` and `unique` return an iterator instead of shrinking the container — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `transform` applies an operation while copying; `replace`/`fill`/`generate` overwrite in place. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `remove`/`unique` return the new logical end — the container's `erase` must finish the job. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`remove`/`unique` return the new logical end — the container's `erase` must finish the job.",
      "`transform` applies an operation while copying; `replace`/`fill`/`generate` overwrite in place.",
      "`rotate` is the circular shift; `shuffle` is the uniform random permutation; `move` relocates without copies."
    ],
    quiz: [
      {
        q: "After `remove(v.begin(), v.end(), 0)` on `v = {0, 1, 0, 2}` (size 4), `v.size()` is:",
        options: ["2", "still 4", "3", "undefined"],
        answer: 1,
        explanation: "Remove never changes the container — only the logical frontier moves; the erase finishes the job."
      },
      {
        q: "The complete idiom is:",
        options: ["`remove(v.begin(), v.end(), x)`", "`std::erase(x)`", "`v.erase(remove(v.begin(), v.end(), x), v.end())`", "`v.resize(distance(v.begin(), remove(...)))`"],
        answer: 2,
        explanation: "Algorithm moves the frontier; the member reclaims the tail — together, one idiom."
      },
      {
        q: "`unique` removes:",
        options: ["all duplicates, anywhere in the sequence", "adjacent (consecutive) duplicates, logically", "nothing — it is a pure query", "only the maximum duplicate"],
        answer: 1,
        explanation: "One pass can only compare neighbors — sort first if you want all duplicates removed."
      },
      {
        q: "`transform(b, e, out, f)` differs from `copy` by:",
        options: ["applying f to each element as it is written", "reversing the output", "requiring a sorted input", "allocating a new container"],
        answer: 0,
        explanation: "Same traversal, same output rules — one function application per element along the way."
      }
    ]
  },

  // ---------------------------------------------------------------- 32.5
  {
    sectionId: "cpp-ch32-s5",
    readingTime: 7,
    intro: "Sorting converts lookup cost into comparison cost once, and buys every later question at logarithmic price. This section covers the sort family, the binary-search family that demands sorted input, and merge with the set operations that compose sorted sequences.",
    objectives: [
      "Choose among sort, stable_sort, partial_sort and nth_element by what you actually need",
      "Apply lower_bound/upper_bound/equal_range and state their requirements",
      "Merge sorted sequences and compute set operations with the right preconditions"
    ],
    concepts: [
      {
        term: "sort and stable_sort",
        kind: "definition",
        statement: "`sort(b, e)` orders the sequence with `<` (or a comparator) in $O(n \\log n)$; it is **not stable** — equivalent elements may swap places. `stable_sort` preserves the relative order of equivalent elements, at $O(n \\log n)$ comparisons with $O(n)$ extra memory (degrading to $O(n \\log^2 n)$ if the allocator refuses).",
        detail: "Implementation-wise, `sort` is introsort — quicksort that falls back to heapsort when recursion goes too deep — hence the $O(n \\log n)$ **worst case**."
      },
      {
        term: "partial_sort and nth_element",
        kind: "definition",
        statement: "`partial_sort(b, mid, e)` sorts only the first `mid − b` elements — the smallest ones, in order — in about $O(n \\log m)$. `nth_element(b, n, e)` puts the element that belongs at position n there, with everything before ≤ it and after ≥ it, in $O(n)$ on average: quickselect, the top-k workhorse.",
        detail: "Need the 10 smallest in order? `partial_sort`. Need the median or a split point? `nth_element` — no full sort required."
      },
      {
        term: "The binary-search family",
        kind: "definition",
        statement: "On a **sorted** sequence: `lower_bound(b, e, v)` — the first element **≥** v; `upper_bound` — the first **>** v; `equal_range` — both as a pair; `binary_search` — a mere bool. $O(\\log n)$ comparisons on random-access iterators (halving steps degrade on weaker categories — see ch33).",
        detail: "`equal_range`'s `[lower, upper)` pair is the idiom for “all elements equal to v”: its length is the multiplicity."
      },
      {
        term: "merge and set operations",
        kind: "definition",
        statement: "`merge(b1, e1, b2, e2, out)` weaves two sorted runs into one sorted output in $O(n+m)$; `inplace_merge` does it inside one sequence. `includes`, `set_union`, `set_intersection`, `set_difference` and `set_symmetric_difference` compute set algebra on **sorted** inputs, all in $O(n+m)$.",
        detail: "Sorted order is what makes set algebra linear: two cursors advance monotonically, each element examined once."
      },
      {
        term: "partition",
        kind: "definition",
        statement: "`partition(b, e, p)` splits in place — true-elements first, false-elements after — in $O(n)$: the engine of quicksort. `is_partitioned` tests, and `partition_point` finds the boundary of an already-partitioned range in $O(\\log n)$: binary search over a predicate.",
        detail: "`stable_partition` keeps the relative order within each half, at the cost of extra memory."
      }
    ],
    figures: [
      {
        caption: "The merge pipeline: two sorted runs weave into one sorted output. Each output element costs one front comparison, except the last, which rides free when a run empties — at most $n + m - 1$ comparisons for $O(n+m)$ total.",
        svg: `<svg role='img' aria-label='The merge pipeline: two sorted runs weave into one sorted output. Each output element costs one front comparison, except the last, which rides free when a...' viewBox="0 0 840 340" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="40" y="40" font-size="13" font-weight="600" fill="currentColor">run a — sorted, n = 4</text><rect x="40" y="48" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="96" y="48" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="152" y="48" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="208" y="48" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><text x="68" y="71" text-anchor="middle" font-size="13" fill="currentColor">2</text><text x="124" y="71" text-anchor="middle" font-size="13" fill="currentColor">4</text><text x="180" y="71" text-anchor="middle" font-size="13" fill="currentColor">6</text><text x="236" y="71" text-anchor="middle" font-size="13" fill="currentColor">8</text><text x="40" y="120" font-size="13" font-weight="600" fill="currentColor">run b — sorted, m = 4</text><rect x="40" y="128" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="96" y="128" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="152" y="128" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="208" y="128" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><text x="68" y="151" text-anchor="middle" font-size="13" fill="currentColor">3</text><text x="124" y="151" text-anchor="middle" font-size="13" fill="currentColor">5</text><text x="180" y="151" text-anchor="middle" font-size="13" fill="currentColor">7</text><text x="236" y="151" text-anchor="middle" font-size="13" fill="currentColor">9</text><path d="M276 66 C 340 66, 430 92, 494 104" fill="none" stroke="currentColor" stroke-opacity="0.5"/><path d="M276 146 C 340 146, 430 140, 494 132" fill="none" stroke="currentColor" stroke-opacity="0.5"/><circle cx="516" cy="118" r="22" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-opacity="0.5"/><text x="516" y="123" text-anchor="middle" font-size="12" fill="currentColor">min</text><path d="M502 136 C 490 190, 480 210, 458 236" fill="none" stroke="currentColor" stroke-opacity="0.5"/><text x="580" y="60" font-size="12.5" font-weight="600" fill="currentColor">merge(a, b, out):</text><text x="580" y="80" font-size="12" fill="currentColor">2:3 → 2 · 4:3 → 3 · 4:5 → 4</text><text x="580" y="96" font-size="12" fill="currentColor">6:5 → 5 · 6:7 → 6 · 8:7 → 7</text><text x="580" y="112" font-size="12" fill="currentColor">8:9 → 8 · then a is empty,</text><text x="580" y="128" font-size="12" fill="currentColor">so 9 rides free (dashed cell)</text><text x="580" y="152" font-size="12.5" font-weight="600" fill="currentColor">7 comparisons = n + m − 1</text><text x="40" y="232" font-size="13" font-weight="600" fill="currentColor">merged output — n + m = 8</text><rect x="40" y="240" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="96" y="240" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="152" y="240" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="208" y="240" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="264" y="240" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="320" y="240" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="376" y="240" width="56" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="432" y="240" width="56" height="36" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-dasharray="4 3"/><text x="68" y="263" text-anchor="middle" font-size="13" fill="currentColor">2</text><text x="124" y="263" text-anchor="middle" font-size="13" fill="currentColor">3</text><text x="180" y="263" text-anchor="middle" font-size="13" fill="currentColor">4</text><text x="236" y="263" text-anchor="middle" font-size="13" fill="currentColor">5</text><text x="292" y="263" text-anchor="middle" font-size="13" fill="currentColor">6</text><text x="348" y="263" text-anchor="middle" font-size="13" fill="currentColor">7</text><text x="404" y="263" text-anchor="middle" font-size="13" fill="currentColor">8</text><text x="460" y="263" text-anchor="middle" font-size="13" fill="currentColor">9</text><text x="40" y="308" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.8">each output element costs one front comparison, except the last, which is copied whole when a run empties</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Merging two runs by hand",
        problem: "Merge a = {2, 4, 6, 8} with b = {3, 5, 7, 9} and count the comparisons; then locate 4.4 in the sorted vector {1.1, 2.2, 4.4, 6.6, 8.8} with `lower_bound` and `equal_range`.",
        steps: [
          { label: "Compare fronts", text: "2 vs 3 ⇒ 2 out; 4 vs 3 ⇒ 3 out; 4 vs 5 ⇒ 4; 6 vs 5 ⇒ 5; 6 vs 7 ⇒ 6; 8 vs 7 ⇒ 7; 8 vs 9 ⇒ 8." },
          { label: "Exhaust", text: "a is now empty ⇒ append b's tail (9): output {2, 3, 4, 5, 6, 7, 8, 9}." },
          { label: "Count", text: "7 comparisons = $n + m - 1$, the merge bound." },
          { label: "lower_bound", text: "lo = 0, hi = 5; mid = 2: 4.4 not < 4.4 ⇒ hi = 2; mid = 1: 2.2 < 4.4 ⇒ lo = 2; lo == hi ⇒ **index 2**, found with 2 comparisons." },
          { label: "equal_range", text: "lower = index 2, upper = index 3 (the first element > 4.4): the range [2, 3) has length 1 — the multiplicity of 4.4." }
        ],
        result: "Eight elements merged with 7 comparisons; 4.4 located at index 2 with 2 comparisons — $O(n+m)$ and $O(\\log n)$ behaving exactly as promised."
      },
      {
        title: "Working through sorting and searching",
        problem: "sort, merge, binary search and sets. Your task: choose among sort, stable_sort, partial_sort and nth_element by what you actually need.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: choose among sort, stable_sort, partial_sort and nth_element by what you actually need. Write down the guarantee you will rely on — for this chapter it is: `sort` is $O(n \\log n)$ and unstable; `stable_sort` keeps order among equivalents; `nth_element` is average-linear for position queries." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::sort(v.begin(), v.end()); auto it = std::find(v.begin(), v.end(), k);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — apply lower_bound/upper_bound/equal_range and state their requirements — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: The binary-search family requires sorted input: `lower_bound` gives first ≥, `upper_bound` first >, `equal_range` the pair. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `sort` is $O(n \\log n)$ and unstable; `stable_sort` keeps order among equivalents; `nth_element` is average-linear for position queries. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`sort` is $O(n \\log n)$ and unstable; `stable_sort` keeps order among equivalents; `nth_element` is average-linear for position queries.",
      "The binary-search family requires sorted input: `lower_bound` gives first ≥, `upper_bound` first >, `equal_range` the pair.",
      "`merge` and the set operations are linear in the total length — but only on sorted inputs."
    ],
    quiz: [
      {
        q: "To get the 10 smallest of 1,000,000 elements **in order** at the lowest cost:",
        options: ["`sort` everything, take the first 10", "`partial_sort(b, b+10, e)`", "`nth_element` with n = 10", "`min_element` ten times"],
        answer: 1,
        explanation: "`partial_sort` sorts exactly the first 10 — about $O(n \\log 10)$; `nth_element` would leave them unordered."
      },
      {
        q: "Which requires sorted input?",
        options: ["`sort`", "`reverse`", "`lower_bound`", "`shuffle`"],
        answer: 2,
        explanation: "Halving the range is only correct on ordered data — the precondition is the caller's to establish."
      },
      {
        q: "Merging runs of 3 and 5 elements makes at most how many comparisons?",
        options: ["8", "7 — that is, $n + m - 1$", "15", "$\\log_2 8$"],
        answer: 1,
        explanation: "Each comparison emits one element; the final element rides free when one run empties."
      },
      {
        q: "`stable_sort` differs from `sort` by:",
        options: ["being $O(n)$", "working on `list` iterators", "never allocating", "preserving the relative order of equivalent elements"],
        answer: 3,
        explanation: "Stability — equivalent elements keep their original sequence — at the price of extra memory."
      },
      // PYQ-pattern — sort complexity and binary search precondition (rephrased)
      {
        q: "What complexity does the standard require on average for `std::sort` over a range of length `n`, and what must hold before `std::binary_search` is meaningful?",
        options: ["Linear-time sorting, and `binary_search` works in any order", "Quadratic sorting, and `binary_search` needs a hash table", "Logarithmic sorting, and `binary_search` needs all-distinct elements", "`std::sort` averages order `n log n` comparisons, and `binary_search` needs the range sorted under the same ordering"],
        answer: 3,
        explanation: "Step 1: The data given is one sorting requirement and one searching precondition over the same range. Step 2: The governing rules are the complexity contract, introsort averaging order `n log n` comparisons, and the search contract, binary search assuming a range sorted under the same ordering it tests. Step 3: Applying both, sorting a million elements costs on the order of twenty million comparisons, and searching an unsorted range yields a meaningless answer rather than a diagnostic. Step 4: The distractors fail because comparison sorting cannot average linear time, no hash participates, and distinctness is not the precondition. Step 5: Therefore the sort is order `n log n` average and the search needs a sorted range."
      }
    ]
  },

  // ---------------------------------------------------------------- 32.6
  {
    sectionId: "cpp-ch32-s6",
    readingTime: 5,
    intro: "The smallest family in the chapter: extremum selection — of two values, of a whole sequence, or clamping a value into bounds. Small, but with tie-breaking rules worth knowing exactly, and a tournament trick that gets both extrema for the price of one and a half scans.",
    objectives: [
      "Use min, max and minmax with values and initializer lists",
      "Apply the `min_element`-family scans and their comparison bounds",
      "Implement clamping with min and max and recognize where it appears"
    ],
    concepts: [
      {
        term: "min, max, minmax",
        kind: "definition",
        statement: "`min(a, b)`, `max(a, b)` return a `const` reference to the winner (by value for the `initializer_list` overloads); when the arguments compare **equivalent**, both return the **first** — a deliberate rule. `minmax(a, b)` returns the pair `{min, max}`, and all three accept an optional comparator.",
        detail: "The first-of-equals rule makes the outcome deterministic for types whose equality is not identity."
      },
      {
        term: "The element scans",
        kind: "definition",
        statement: "`min_element(b, e)`, `max_element(b, e)` and `minmax_element(b, e)` return **iterators** (or a pair of them) — `e` for an empty sequence. Each is a single linear pass; `min_element` and `max_element` use at most $n - 1$ comparisons.",
        detail: "Iterator results compose: `*min_element(...)` for the value, `min_element(...) - v.begin()` for the position."
      },
      {
        term: "The tournament bound",
        kind: "theorem",
        statement: "`minmax_element` finds both extrema in at most $\\frac{3n}{2} - 2$ comparisons (for even $n$): process elements in pairs, compare within each pair (1 comparison), the winner only against the running max and the loser only against the running min (2 more per pair) — versus $2n - 2$ for two separate scans.",
        detail: "It returns the **first** minimum and the **last** maximum — the asymmetry that makes the tight bound and the `[first, last]`-of-equals convention both work."
      },
      {
        term: "Clamping",
        kind: "method",
        statement: "Constrain x to the interval $[lo, hi]$ with `min(max(x, lo), hi)` — the idiom the book uses (C++17 later added `std::clamp`). It appears in color channels (0–255), pagination, sensor limits and audio gain everywhere.",
        detail: "Both compositions are safe: `max(x, lo)` lifts the floor, then `min(..., hi)` caps the ceiling — no branch, one expression."
      },
      {
        term: "Min and Max: the working contract",
        kind: "definition",
        statement: "**Min and Max.** Extremes and clamping. You can claim this section when you can use min, max and minmax with values and initializer lists — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 32 (STL Algorithms); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "One pass, both extremes",
        problem: "Trace `minmax_element` over `vector<int> v {3, 1, 4, 1, 5, 9, 2, 6}`; then clamp 7 and 1 into the interval [2, 5].",
        steps: [
          { label: "Pairs", text: "(3,1), (4,1), (5,9), (2,6): 4 comparisons ⇒ candidate minima {1, 1, 5, 2}, maxima {3, 4, 9, 6}." },
          { label: "Winners", text: "3 more comparisons find the max 9; 3 more find the min 1 — first occurrence, at index 1." },
          { label: "Total", text: "$4 + 3 + 3 = 10 = \\frac{3n}{2} - 2$ for $n = 8$ — versus $2n - 2 = 14$ for separate `min_element` + `max_element` scans." },
          { label: "Result", text: "min = the 1 at index 1; max = the 9 at index 5 — the last maximum, though none later ties it." },
          { label: "Clamp", text: "`min(max(7, 2), 5)` = min(7, 5) = **5**; `min(max(1, 2), 5)` = min(2, 5) = **2**." }
        ],
        result: "Both extrema in one pass of 10 comparisons (vs 14 separately); clamps: 7 → 5 and 1 → 2."
      },
      {
        title: "Working through min and max",
        problem: "Extremes and clamping. Your task: use min, max and minmax with values and initializer lists.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use min, max and minmax with values and initializer lists. Write down the guarantee you will rely on — for this chapter it is: min/max return the first of equivalent arguments; the element scans return iterators (end for empty)." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::sort(v.begin(), v.end()); auto it = std::find(v.begin(), v.end(), k);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — apply the `min_element`-family scans and their comparison bounds — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `minmax_element`: both extrema in $\\le \\frac{3n}{2} - 2$ comparisons — first minimum, last maximum. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: min/max return the first of equivalent arguments; the element scans return iterators (end for empty). Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "min/max return the first of equivalent arguments; the element scans return iterators (end for empty).",
      "`minmax_element`: both extrema in $\\le \\frac{3n}{2} - 2$ comparisons — first minimum, last maximum.",
      "Clamping is `min(max(x, lo), hi)` — two calls, no branches."
    ],
    quiz: [
      {
        q: "`minmax_element` returns iterators to:",
        options: ["the last minimum and first maximum", "two copies of the maximum", "`end()` twice for empty ranges", "the first minimum and last maximum"],
        answer: 3,
        explanation: "First minimum, last maximum — the deliberate asymmetry behind the tournament bound and equal-range conventions."
      },
      {
        q: "`min(a, b)` when neither is less than the other returns:",
        options: ["`b`", "`a` — the first", "an unspecified one of the two", "a default-constructed value"],
        answer: 1,
        explanation: "The rule is “return the first unless the second is strictly smaller” — deterministic ties."
      },
      {
        q: "The comparison bound for `minmax_element` on n elements is:",
        options: ["$2n$", "$n - 1$", "$n \\log n$", "$\\le \\frac{3n}{2} - 2$"],
        answer: 3,
        explanation: "Pair-then-tournament: within-pair, then winner-versus-max and loser-versus-min."
      },
      {
        q: "Clamping x into [lo, hi] is written:",
        options: ["`max(x, lo)`", "`min(x, hi)`", "`min(max(x, lo), hi)`", "`max(min(x, lo), hi)`"],
        answer: 2,
        explanation: "Lift the floor first, then cap the ceiling — the last composition double-caps."
      }
    ]
  },

  // ---------------------------------------------------------------- 32.7
  {
    sectionId: "cpp-ch32-s7",
    readingTime: 4,
    intro: "Algorithm advice is mostly about restraint: prefer a named algorithm over a hand-written loop, state your requirements exactly, and let the library carry the complexity proofs. The rules are short because the machinery behind them is already yours.",
    objectives: [
      "Replace hand-written loops with named algorithms",
      "Weigh sort-then-search against repeated linear search with arithmetic",
      "Keep predicates pure and cheap"
    ],
    concepts: [
      {
        term: "Named beats anonymous",
        kind: "insight",
        statement: "A hand-written loop states mechanics; `find_if`, `count_if`, `any_of` state **intent**: shorter, immune to index errors, and carrying a complexity the reader knows without measuring.",
        detail: "The reader of `any_of(v.begin(), v.end(), pred)` knows the cost and the short-circuit — a `for` loop makes them reconstruct both."
      },
      {
        term: "Sort when search repeats",
        kind: "method",
        statement: "k linear searches over n elements cost $k \\cdot n$; sorting once and binary searching costs $n \\log n + k \\log n$. Break-even is at roughly $k \\approx \\log n$ searches — after that, sorting has paid for itself.",
        detail: "For $n = 100{,}000$ that is about 17 searches; a long-lived table crosses the threshold almost immediately."
      },
      {
        term: "Predicates are contracts",
        kind: "law",
        statement: "Pass predicates by value; keep them **pure**: no I/O, no state that depends on evaluation order — the standard's freedom in the order of calls makes ordering-dependent side effects a correctness bug, not a style problem.",
        detail: "A comparator that mutates its arguments or counts on call order can corrupt an otherwise correct sort."
      },
      {
        term: "Check before you write",
        kind: "method",
        statement: "Before writing any six-line loop over a sequence, scan the algorithm list — the operation usually exists, with a complexity guarantee you would otherwise have to re-derive.",
        detail: "This is ch30's “know the library” rule, specialized: the algorithms are the best-indexed part of it."
      },
      {
        term: "Shipping rule for STL algorithms",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **A named algorithm states intent, avoids index errors and carries a mandated complexity.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "Break-even for sorting",
        problem: "An interactive program performs k lookups in a 100,000-element table. Is it worth sorting the table first?",
        steps: [
          { label: "Linear", text: "Each lookup averages $n/2 = 5\\times10^4$ comparisons ⇒ $k \\times 5\\times10^4$ total." },
          { label: "Sort once", text: "$n \\log_2 n \\approx 100{,}000 \\times 17 = 1.7\\times10^6$ comparisons, then 17 per lookup." },
          { label: "Break-even", text: "$1.7\\times10^6 + 17k < 5\\times10^4 k$ ⇒ $k > \\frac{1.7\\times10^6}{5\\times10^4 - 17} \\approx 34$ lookups." },
          { label: "Verdict", text: "More than about 34 lookups over the table's lifetime and sorting has already paid for itself — the sorted structure can even be an index (a sorted `vector` of pointers) so insertion order survives." }
        ],
        result: "Break-even at k ≈ 34: sort once, then search logarithmically."
      },
      {
        title: "Reviewing STL algorithms code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: replace hand-written loops with named algorithms.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: A named algorithm states intent, avoids index errors and carries a mandated complexity." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `std::sort(v.begin(), v.end()); auto it = std::find(v.begin(), v.end(), k);`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: weigh sort-then-search against repeated linear search with arithmetic. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Sort once and binary search beats repeated linear search after roughly $\\log n$ lookups." },
        ],
        result: "The review ends with findings tied to reasons: A named algorithm states intent, avoids index errors and carries a mandated complexity. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "A named algorithm states intent, avoids index errors and carries a mandated complexity.",
      "Sort once and binary search beats repeated linear search after roughly $\\log n$ lookups.",
      "Predicates must be pure and cheap — call order is unspecified."
    ],
    quiz: [
      {
        q: "A named algorithm beats a hand-written loop because it:",
        options: ["states intent, avoids index errors and carries a mandated complexity", "runs in parallel automatically", "never copies elements", "can be called only once per program"],
        answer: 0,
        explanation: "Three wins at once — clarity, safety and a cost you may cite in design."
      },
      {
        q: "For $n = 100{,}000$ (so $\\log_2 n \\approx 17$), sort-then-binary-search beats repeated linear search after roughly:",
        options: ["3 lookups", "34 lookups", "3,400 lookups", "never"],
        answer: 1,
        explanation: "$1.7\\times10^6$ comparisons to sort, then 17 per search versus $5\\times10^4$ per linear search — break-even near $k = 34$."
      },
      {
        q: "A `sort` comparator whose side effects depend on call order:",
        options: ["is fine if documented", "makes the sort faster by caching", "is a correctness bug — evaluation order is unspecified", "is required for stability"],
        answer: 2,
        explanation: "The standard deliberately does not fix comparison order; order-dependent effects are undefined behavior in spirit and fact."
      }
    ]
  }
]

import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition
// Chapter 31: STL Containers (Sections 31.1 – 31.6)
// Master study content.
// ============================================================================

export const cppCh31Content: SectionContent[] = [
  // ---------------------------------------------------------------- 31.1
  {
    sectionId: "cpp-ch31-s1",
    readingTime: 5,
    intro: "A container is an object that holds other objects, manages their storage and lifetime, and offers access through a uniform interface. This chapter tours the standard containers — the part of the library programmers touch most — and builds the vocabulary for choosing among them.",
    objectives: [
      "Define what counts as a standard container and what the container interface promises",
      "Explain the STL's three-part separation of containers, iterators and algorithms",
      "Reason about element ownership: copying, moving and destroying containers"
    ],
    concepts: [
      {
        term: "What a container is",
        kind: "definition",
        statement: "A container **owns its elements**: it constructs them (by copy or move) as they are inserted and destroys them as they are erased or as the container itself is destroyed. All elements share one type; a container is characterized by how it stores elements and which operations it offers for accessing them.",
        detail: "Because containers hold values, element types should behave as values too — follow the rule of five, or better, the rule of zero."
      },
      {
        term: "The STL separation",
        kind: "insight",
        statement: "Stepanov's design: **containers hold data, algorithms process sequences, iterators connect the two.** An algorithm never sees a container — only a pair of iterators — so one `sort` serves every container that can supply random-access iterators.",
        detail: "This is why the container and algorithm chapters can be read independently: their contract is entirely expressed in iterator categories."
      },
      {
        term: "Element requirements",
        kind: "law",
        statement: "To live in a container an element type must be copy- or move-constructible; keys of ordered associative containers must support `<` (a strict weak ordering); keys of unordered containers need a hash function and `==`.",
        detail: "A type with a copy constructor that throws can still be stored — but see the exception-safety consequences in chapter 30."
      },
      {
        term: "Three families plus adaptors",
        kind: "insight",
        statement: "The containers fall into three structural families — **sequence** (order is where you insert), **ordered associative** (order is key order, a balanced tree), **unordered associative** (no order, hash buckets) — plus three **adaptors** that restrict an ordinary container to a specialized interface.",
        detail: "Choosing a container is choosing a data structure, and the choice is dominated by one question: which operations must be fast?"
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Containers at a glance. You can claim this section when you can define what counts as a standard container and what the container interface promises — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 31 (STL Containers); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Word count in one screen",
        problem: "Read whitespace-separated words and print each word with its count, alphabetically. How much data-structure machinery does the container carry for you?",
        steps: [
          { label: "Step 1: Choose", text: "Key → value with alphabetical iteration ⇒ `map<string, int>`." },
          { label: "Step 2: Fill", text: "`for (string w; cin >> w;) ++m[w];` — `m[w]` returns the count, inserting 0 the first time a word is seen." },
          { label: "Step 3: Report", text: "`for (auto& p : m) cout << p.first << ' ' << p.second;` — iteration follows key order because the tree is sorted." },
          { label: "Step 4: Why it works", text: "Insertion is $O(\\log n)$: $n = 100{,}000$ words cost about $100\\,000 \\times 17 \\approx 1.7\\times10^6$ key comparisons in total." }
        ],
        result: "A dozen lines replace a hand-managed sorted array plus resize and rebalance code — the container does the data-structure engineering."
      },
      {
        title: "Working through introduction",
        problem: "Containers at a glance. Your task: define what counts as a standard container and what the container interface promises.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define what counts as a standard container and what the container interface promises. Write down the guarantee you will rely on — for this chapter it is: A container owns its elements: copies in, destruction out; elements must be copy or move constructible." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::vector<int> v; v.reserve(64); v.push_back(1);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain the STL's three-part separation of containers, iterators and algorithms — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Containers, iterators and algorithms are strangers to one another by design — iterators are the only contract. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A container owns its elements: copies in, destruction out; elements must be copy or move constructible. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A container owns its elements: copies in, destruction out; elements must be copy or move constructible.",
      "Containers, iterators and algorithms are strangers to one another by design — iterators are the only contract.",
      "Three families — sequence, ordered associative, unordered associative — plus three adaptors cover the whole vocabulary."
    ],
    quiz: [
      {
        q: "What does it mean that a container “owns” its elements?",
        options: ["it may store references to stack objects", "it constructs them on insert and destroys them on erase or destruction", "elements are shared with the container's owner", "elements are always heap-allocated outside the container"],
        answer: 1,
        explanation: "Ownership is lifetime control: erasing an element destroys it; destroying the container destroys everything left in it."
      },
      {
        q: "In the STL design, algorithms access container contents:",
        options: ["through the container object itself", "by copying the container first", "through iterator pairs naming a half-open sequence", "through virtual member functions"],
        answer: 2,
        explanation: "The iterator pair is the entire contract — the algorithm knows nothing about the container."
      },
      {
        q: "A word counter that must print alphabetically needs a:",
        options: ["`unordered_map` — order is irrelevant to the task", "`map<string, int>` — sorted iteration is the product", "a linear-scan `vector<string>`", "`stack<string>`"],
        answer: 1,
        explanation: "Ordered iteration is `map`'s defining feature; the hash table would print in bucket order."
      }
    ]
  },

  // ---------------------------------------------------------------- 31.2
  {
    sectionId: "cpp-ch31-s2",
    readingTime: 7,
    intro: "The eleven standard containers fall into three structural families plus three adaptors. Choosing among them is choosing a data structure — and the choice is dominated by one question: which operations must be fast? The taxonomy below is the map; the complexity numbers are the terrain.",
    objectives: [
      "Classify the standard containers into sequence, ordered associative and unordered associative families",
      "Match each family's internal structure to its complexity guarantees",
      "Choose between `map`, `unordered_map` and sorted `vector` from measured complexity, not habit"
    ],
    concepts: [
      {
        term: "Sequence containers",
        kind: "definition",
        statement: "**`vector`, `array`, `deque`, `list`, `forward_list`** — element order is the order you choose by where you insert. `vector`/`array` store elements contiguously ($O(1)$ subscripting); `deque` supports $O(1)$ push/pop at **both** ends; `list`/`forward_list` are linked (insert/erase anywhere in $O(1)$ given a position, but no subscripting).",
        detail: "`array` is the fixed-size, non-allocating `vector`; `forward_list` is the minimal singly-linked list, kept deliberately free of even a `size()` operation."
      },
      {
        term: "Ordered associative containers",
        kind: "definition",
        statement: "**`map`, `multimap`, `set`, `multiset`** — ordered by key using `<` (or a user comparator), implemented as balanced binary trees in every major implementation: find, insert and erase in $O(\\log n)$, iteration in key order. `map` stores (key, value) pairs; `set` stores keys alone; the `multi` variants allow duplicate keys.",
        detail: "Worst case is the point: $O(\\log n)$ is guaranteed — no adversarial input, no hash-flood behavior."
      },
      {
        term: "Unordered associative containers",
        kind: "definition",
        statement: "**`unordered_map`, `unordered_multimap`, `unordered_set`, `unordered_multiset`** — hash tables: expected $O(1)$ find/insert/erase, worst case $O(n)$; iteration order is unspecified and can change when a rehash occurs. Keys need a hash and `==` rather than `<`.",
        detail: "Implementation as buckets is exposed: `bucket_count()`, `load_factor() = size()/bucket_count()`, and rehashing when the load exceeds `max_load_factor()`."
      },
      {
        term: "`map` versus `unordered_map`",
        kind: "insight",
        statement: "Default to `map` unless you have a measured reason: it needs only `<`, iterates in order, and has a firm worst case. Use `unordered_map` for pure lookup performance on simple, well-hashed keys — remembering that hashing a long `string` costs a scan of the whole string, so the speedup shrinks as keys grow.",
        detail: "The book's rule of thumb is exactly this asymmetry: `unordered_map` wins averages, `map` wins predictability and order."
      },
      {
        term: "Elements are values",
        kind: "law",
        statement: "Containers hold **copies** (or moves): insert an object and the container stores its own element — later mutation of the original does not touch the stored one. There is no common `Object` base class; containers are not part of a class hierarchy at all.",
        detail: "To share, store pointers — `vector<Shape*>` — or better, smart pointers: `vector<unique_ptr<Shape>>`."
      }
    ],
    figures: [
      {
        caption: "The standard container taxonomy (ch31): three structural families distinguished by how they store and order elements, plus the three adaptors that wrap an ordinary container in a restricted interface. Only the first three columns are containers proper; the adaptors own no storage of their own.",
        svg: `<svg role='img' aria-label='The standard container taxonomy (ch31): three structural families distinguished by how they store and order elements, plus the three adaptors that wrap an...' viewBox="0 0 840 420" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="320" y="14" width="200" height="34" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><text x="420" y="36" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">STL containers</text><path d="M420 48 V66 M112 66 H736 M112 66 V88 M320 66 V88 M528 66 V88 M736 66 V88" fill="none" stroke="currentColor" stroke-opacity="0.4"/><rect x="16" y="88" width="192" height="46" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.45"/><text x="112" y="106" text-anchor="middle" font-size="13.5" font-weight="600" fill="currentColor">Sequence</text><text x="112" y="124" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">order = where you insert</text><rect x="224" y="88" width="192" height="46" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.45"/><text x="320" y="106" text-anchor="middle" font-size="13.5" font-weight="600" fill="currentColor">Ordered associative</text><text x="320" y="124" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">sorted by key (tree)</text><rect x="432" y="88" width="192" height="46" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.45"/><text x="528" y="106" text-anchor="middle" font-size="13.5" font-weight="600" fill="currentColor">Unordered associative</text><text x="528" y="124" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">hashed by key (buckets)</text><rect x="640" y="88" width="192" height="46" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.45"/><text x="736" y="106" text-anchor="middle" font-size="13.5" font-weight="600" fill="currentColor">Adaptors</text><text x="736" y="124" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">restricted interfaces</text><rect x="16" y="170" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="112" y="187" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">vector</text><text x="112" y="202" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">contiguous · O(1) subscript</text><rect x="16" y="218" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="112" y="235" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">array</text><text x="112" y="250" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">fixed size · no allocation</text><rect x="16" y="266" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="112" y="283" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">deque</text><text x="112" y="298" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">O(1) at both ends</text><rect x="16" y="314" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="112" y="331" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">list</text><text x="112" y="346" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">doubly linked · stable</text><rect x="16" y="362" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="112" y="379" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">forward list</text><text x="112" y="394" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">singly linked · minimal</text><rect x="224" y="170" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="320" y="187" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">map · multimap</text><text x="320" y="202" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">key → value · O(log n)</text><rect x="224" y="218" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="320" y="235" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">set · multiset</text><text x="320" y="250" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">keys only · O(log n)</text><rect x="224" y="266" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="320" y="283" text-anchor="middle" font-size="12" font-style="italic" fill="currentColor" fill-opacity="0.8">balanced tree</text><text x="320" y="298" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">iteration follows key order</text><rect x="432" y="170" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="528" y="187" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">unordered map</text><text x="528" y="202" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">key → value · O(1) average</text><rect x="432" y="218" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="528" y="235" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">unordered set</text><text x="528" y="250" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">keys only · O(1) average</text><rect x="432" y="266" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="528" y="283" text-anchor="middle" font-size="12" font-style="italic" fill="currentColor" fill-opacity="0.8">hash buckets</text><text x="528" y="298" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">load factor · rehash · O(n) worst</text><rect x="640" y="170" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="736" y="187" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">stack</text><text x="736" y="202" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">LIFO · over deque</text><rect x="640" y="218" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="736" y="235" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">queue</text><text x="736" y="250" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">FIFO · over deque</text><rect x="640" y="266" width="192" height="40" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.25"/><text x="736" y="283" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">priority queue</text><text x="736" y="298" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">max-heap · over vector</text><text x="736" y="340" text-anchor="middle" font-size="11" font-style="italic" fill="currentColor" fill-opacity="0.7">not new storage —</text><text x="736" y="356" text-anchor="middle" font-size="11" font-style="italic" fill="currentColor" fill-opacity="0.7">restricted views of an ordinary container</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "The cost of 100,000 lookups",
        problem: "From a dictionary of $n = 100{,}000$ entries, perform 100,000 random lookups by key. Compare `map`, `unordered_map` and an unsorted `vector` of pairs.",
        steps: [
          { label: "map", text: "Each lookup is $O(\\log_2 n)$: $\\log_2 10^5 \\approx 17$ key comparisons, so about $1.7\\times10^6$ comparisons total — guaranteed, adversarial input or not." },
          { label: "unordered_map", text: "Expected 1–2 bucket probes per lookup: roughly $2\\times10^5$ hash evaluations plus probes — the fastest average." },
          { label: "Unsorted vector", text: "A linear scan pays $n/2 = 5\\times10^4$ comparisons on average per lookup: $5\\times10^9$ total — four orders of magnitude worse than the tree." },
          { label: "Sorted vector", text: "Binary search would pay the same 17 comparisons per lookup as `map` — but inserting a new word then costs $O(n)$ element moves." }
        ],
        result: "map ≈ $1.7\\times10^6$, unordered_map ≈ $2\\times10^5$, unsorted vector ≈ $5\\times10^9$ operations: the data-structure choice is worth four orders of magnitude."
      },
      {
        title: "Working through container overview",
        problem: "Sequence, associative and unordered containers. Your task: classify the standard containers into sequence, ordered associative and unordered associative families.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: classify the standard containers into sequence, ordered associative and unordered associative families. Write down the guarantee you will rely on — for this chapter it is: Sequence containers order by insertion position; ordered associatives by key; unordered associatives by nothing at all." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::vector<int> v; v.reserve(64); v.push_back(1);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — match each family's internal structure to its complexity guarantees — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Ordered containers guarantee $O(\\log n)$; unordered containers average $O(1)$ but degrade to $O(n)$. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Sequence containers order by insertion position; ordered associatives by key; unordered associatives by nothing at all. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Sequence containers order by insertion position; ordered associatives by key; unordered associatives by nothing at all.",
      "Ordered containers guarantee $O(\\log n)$; unordered containers average $O(1)$ but degrade to $O(n)$.",
      "Default to `map` over `unordered_map` unless measurement says otherwise — order and predictability are features."
    ],
    quiz: [
      {
        q: "Which container gives $O(1)$ average lookup by key with no ordering guarantee?",
        options: ["`map`", "`unordered_map`", "`vector`", "`multiset`"],
        answer: 1,
        explanation: "The hash table averages constant time; iteration order is unspecified and changes on rehash."
      },
      {
        q: "In the chapter's taxonomy, `deque` is a:",
        options: ["sequence container", "ordered associative container", "unordered associative container", "container adaptor"],
        answer: 0,
        explanation: "`deque` inserts at the ends by position — a sequence container with $O(1)$ push/pop at both ends."
      },
      {
        q: "Keys in an ordered associative container compare with:",
        options: ["`==` only", "a hash function", "`<` — a strict weak ordering, by default", "`<=`"],
        answer: 2,
        explanation: "`<` (with a strict weak ordering) is the ordered family's requirement; hashing belongs to the unordered family."
      },
      {
        q: "`unordered_map` iteration order is:",
        options: ["sorted by key", "insertion order", "unspecified — and a rehash can change it", "reverse insertion order"],
        answer: 2,
        explanation: "Bucket order is an implementation detail; rehashing rearranges it, which is why the standard leaves it unspecified."
      },
      // PYQ-pattern — hash versus tree container choice (rephrased)
      {
        q: "Lookups by key dominate, order does not matter, and the table holds 200,000 entries. Which choice matches the container guarantees?",
        options: ["`std::unordered_map`, with average constant-time lookup and no ordering", "`std::map`, with constant-time lookup plus ordering", "`std::vector`, with logarithmic lookup by key", "`std::deque`, with hashed lookup by key"],
        answer: 0,
        explanation: "Step 1: The data given is a large keyed table with lookup-dominated access and no ordering requirement. Step 2: The governing rules are the structural guarantees: hash tables average constant-time lookup without order, balanced trees give logarithmic lookup with order, and sequence containers offer no keyed lookup. Step 3: Applying the numbers, hashing averages near one probe per query while the tree needs about eighteen comparisons, so the hashed container removes nearly all per-query work. Step 4: The distractors fail because trees never reach constant time, and neither sequence container hashes by key. Step 5: Therefore the unordered container is the matching choice."
      }
    ]
  },

  // ---------------------------------------------------------------- 31.3
  {
    sectionId: "cpp-ch31-s3",
    readingTime: 6,
    intro: "All containers share a common interface — constructors, assignment, swap, size queries, iterators and comparison — plus family-specific operations. Knowing what is common lets you write code that works across containers; knowing where members beat generic algorithms keeps it fast.",
    objectives: [
      "List the operations common to every standard container",
      "Explain why member operations such as `map::find` outperform their generic counterparts",
      "Distinguish the insert, emplace and push families and their copy-versus-in-place semantics"
    ],
    concepts: [
      {
        term: "The common interface",
        kind: "definition",
        statement: "Every container offers: default, element-count, iterator-range and initializer-list constructors; copy and move assignment; `swap`; `==`/`!=` and `<`/`<=`/`>`/`>=` (lexicographic elementwise comparison); `size()`, `empty()`; `begin()`/`end()`; and `max_size()` — the sole exception being `forward_list`, which omits `size()` to stay minimal.",
        detail: "Comparison is lexicographic: the first differing pair of elements decides; a shorter prefix makes the shorter container smaller."
      },
      {
        term: "Members versus generic algorithms",
        kind: "insight",
        statement: "A member knows the container's internal structure: `map::find` descends the tree in $O(\\log n)$, while `std::find` on the same `map` walks the sequence in $O(n)$. **If a container offers an operation as a member, prefer the member.**",
        detail: "The same logic ranks `list::sort` above `std::sort` for lists — the generic sort cannot even run there (it needs random access)."
      },
      {
        term: "Insert, emplace, push",
        kind: "method",
        statement: "`insert` copies or moves an existing object into the container; `emplace`/`emplace_back` **construct the element in place** from the argument list — no temporary is created. `push`/`pop` are the adaptor names for insert/erase at the restricted end.",
        detail: "`emplace_back(args...)` is exactly “construct a `T` from `args` directly at the end of the buffer” — for expensive-to-move element types this is a real win."
      },
      {
        term: "The half-open range",
        kind: "notation",
        statement: "Every container's iteration is the half-open sequence $[b, e)$: `e` designates one-past-the-last element; an empty container has `begin() == end()`; and loops test `p != e` — never `p < e`, which is meaningless for node iterators.",
        detail: "The convention is inherited from C pointer arithmetic and is what lets empty sequences need no special cases."
      },
      {
        term: "Operations Overview: the working contract",
        kind: "definition",
        statement: "**Operations Overview.** The common container interface. You can claim this section when you can list the operations common to every standard container — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 31 (STL Containers); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Member find versus generic find on a million-entry map",
        problem: "A `map<int, string>` holds $10^6$ entries. Compare `m.find(k)` with `std::find(m.begin(), m.end(), pair)` for locating one entry.",
        steps: [
          { label: "Member", text: "`m.find(k)` descends the tree: $\\log_2 10^6 \\approx 20$ comparisons; returns an iterator in $O(\\log n)$." },
          { label: "Generic", text: "`std::find` sees only a bidirectional sequence of pairs: it walks left to right, so about $n/2 = 5\\times10^5$ pair comparisons on average." },
          { label: "Why", text: "The generic algorithm cannot know it is walking a tree — iterators expose the sequence, not the structure. Even `std::lower_bound` on a `map` pays $O(n)$ iterator movement for its $O(\\log n)$ comparisons." },
          { label: "Contrast", text: "For a **sorted `vector<int>`** of $10^6$ elements, `std::lower_bound` does 20 comparisons and 20 pointer jumps — the generic algorithm matches the member because here the structure *is* a sequence." }
        ],
        result: "20 versus 500,000 comparisons — same container, same key: the member exploits the tree; the generic code cannot."
      },
      {
        title: "Working through operations overview",
        problem: "The common container interface. Your task: list the operations common to every standard container.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: list the operations common to every standard container. Write down the guarantee you will rely on — for this chapter it is: Constructors, assignment, `swap`, size queries, lexicographic comparisons and `begin`/`end` are the universal container interface." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::vector<int> v; v.reserve(64); v.push_back(1);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain why member operations such as `map::find` outperform their generic counterparts — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Member operations exploit internal structure (`map::find`, `list::sort`); generic algorithms see only a sequence — prefer the member when it exists. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Constructors, assignment, `swap`, size queries, lexicographic comparisons and `begin`/`end` are the universal container interface. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Constructors, assignment, `swap`, size queries, lexicographic comparisons and `begin`/`end` are the universal container interface.",
      "Member operations exploit internal structure (`map::find`, `list::sort`); generic algorithms see only a sequence — prefer the member when it exists.",
      "`emplace` constructs in place; `insert` and `push` copy or move an existing object."
    ],
    quiz: [
      {
        q: "Which operation is NOT provided for `forward_list`?",
        options: ["`empty()`", "`size()`", "`begin()`", "lexicographic `==`"],
        answer: 1,
        explanation: "`forward_list` omits `size()` deliberately — keeping track of the count would cost time and space a C-style singly linked list never pays."
      },
      {
        q: "Why prefer `map::find` over `std::find` on a `map`?",
        options: ["it is shorter to type", "the generic one requires sorted input", "no reason — they are the same", "the member descends the tree — $O(\\log n)$ versus the generic $O(n)$ walk"],
        answer: 3,
        explanation: "The member knows the structure; the generic algorithm is structure-blind and must traverse."
      },
      {
        q: "`emplace_back(args...)` differs from `push_back(x)` by:",
        options: ["constructing the element in place from the arguments — no temporary", "always being faster", "requiring a default constructor", "returning an iterator"],
        answer: 0,
        explanation: "Emplacement forwards the arguments to the element constructor at the final location; the push version first materializes the object."
      },
      {
        q: "Container comparison `v1 < v2` is defined:",
        options: ["by sizes only", "by addresses", "lexicographically, element by element", "by hash codes"],
        answer: 2,
        explanation: "Elementwise lexicographic order — the same rule `strcmp` and dictionary ordering follow."
      }
    ]
  },

  // ---------------------------------------------------------------- 31.4
  {
    sectionId: "cpp-ch31-s4",
    readingTime: 8,
    intro: "This is the field guide: the individual containers, their internal layouts, and the guarantees each makes. `vector` dominates practice; the others exist for the jobs its contiguity cannot do. Along the way we meet the rule that silently breaks real programs: what container mutation does to outstanding iterators and pointers.",
    objectives: [
      "Explain `vector`'s growth strategy and its amortized $O(1)$ `push_back`",
      "State what `list`, `map`, `set` and the unordered containers trade away to gain their special guarantees",
      "Apply the iterator-invalidation rules that follow from each container's memory layout"
    ],
    concepts: [
      {
        term: "`vector` (and `array`)",
        kind: "definition",
        statement: "Elements in **contiguous** memory: subscripting is a pointer computation, $O(1)$; insert/erase at the end is $O(1)$ amortized (and $O(n)$ anywhere else, by shifting). When full, a `push_back` allocates a larger buffer (growth factor typically 2 or 1.5), moves every element, and frees the old buffer — `reserve(n)` preempts the whole dance. `array<T, N>` is the fixed-size version: no allocation, no growth, ever.",
        detail: "Contiguity is why `vector` is the default: cache locality and pointer arithmetic in one property."
      },
      {
        term: "`list` and `forward_list`",
        kind: "definition",
        statement: "Doubly/singly linked nodes: insert/erase **anywhere** in $O(1)$ given a position; iterators and references stay valid while other elements are inserted or erased; no subscripting; `forward_list` lacks even `size()` to stay as cheap as a hand-written C list. `splice` stitches whole lists together in $O(1)$.",
        detail: "The price is memory per element (two pointers for `list`) and poor locality — a `list` trades the cache for pointer stability."
      },
      {
        term: "`map` (and `multimap`)",
        kind: "definition",
        statement: "A balanced tree of (key, value) pairs: find/insert/erase in $O(\\log n)$, iteration in key order, `equal_range` for a `multimap`'s duplicate keys. The subscript `m[k]` **inserts** a default value when `k` is absent — the classic trap when you only meant to look.",
        detail: "Read-only lookup uses `find` or `at` (the latter throws `out_of_range`); subscript is a mutating operation."
      },
      {
        term: "`set` (and `multiset`)",
        kind: "definition",
        statement: "The tree stores keys alone: a sorted collection — unique in `set`, possibly repeated in `multiset` — with $O(\\log n)$ membership tests and `lower_bound`/`upper_bound` range queries on the sorted order.",
        detail: "A `set` of 1,000 elements answers “is x present” in at most 10 comparisons; an unordered set does it in about 1 hash probe."
      },
      {
        term: "`unordered_map` / `unordered_set`",
        kind: "definition",
        statement: "Hash tables: $`bucket_count()` buckets, `load_factor() = size()/bucket_count()`, and automatic **rehash** when the load exceeds `max_load_factor()` (default 1.0). A rehash invalidates every **iterator** but no **pointer or reference** — nodes are relinked, not moved. Average $O(1)$; worst $O(n)$ under pathological hashing.",
        detail: "You can `reserve(n)` (which sets the bucket count) to pre-empt rehashing, just as with `vector` memory."
      }
    ],
    figures: [
      {
        caption: "`vector` growth: when size equals capacity, the next insertion allocates a larger buffer (here doubled), moves every element, and frees the old buffer — invalidating every iterator, pointer and reference into it. Growing 1, 2, 4, …, $2^k$ costs $2^k - 1$ moves, about one move per element: the amortized $O(1)$ guarantee.",
        svg: `<svg role='img' aria-label='&#96;vector&#96; growth: when size equals capacity, the next insertion allocates a larger buffer (here doubled), moves every element, and frees the old buffer —...' viewBox="0 0 840 350" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="40" y="26" font-size="13" font-weight="600" fill="currentColor">old buffer — capacity 8, size 8 (full)</text><rect x="40" y="36" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="84" y="36" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="128" y="36" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="172" y="36" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="216" y="36" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="260" y="36" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="304" y="36" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="348" y="36" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><text x="62" y="59" text-anchor="middle" font-size="12" fill="currentColor">10</text><text x="106" y="59" text-anchor="middle" font-size="12" fill="currentColor">20</text><text x="150" y="59" text-anchor="middle" font-size="12" fill="currentColor">30</text><text x="194" y="59" text-anchor="middle" font-size="12" fill="currentColor">40</text><text x="238" y="59" text-anchor="middle" font-size="12" fill="currentColor">50</text><text x="282" y="59" text-anchor="middle" font-size="12" fill="currentColor">60</text><text x="326" y="59" text-anchor="middle" font-size="12" fill="currentColor">70</text><text x="370" y="59" text-anchor="middle" font-size="12" fill="currentColor">80</text><text x="62" y="88" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.6">0</text><text x="106" y="88" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.6">1</text><text x="150" y="88" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.6">2</text><text x="194" y="88" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.6">3</text><text x="238" y="88" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.6">4</text><text x="282" y="88" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.6">5</text><text x="326" y="88" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.6">6</text><text x="370" y="88" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.6">7</text><path d="M62 96 V178" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-dasharray="4 4"/><polygon points="57,178 67,178 62,188" fill="currentColor"/><path d="M194 96 V178" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-dasharray="4 4"/><polygon points="189,178 199,178 194,188" fill="currentColor"/><path d="M370 96 V178" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-dasharray="4 4"/><polygon points="365,178 375,178 370,188" fill="currentColor"/><text x="430" y="112" font-size="12.5" fill="currentColor">when size == capacity, the next insertion</text><text x="430" y="130" font-size="12.5" fill="currentColor">reallocates: allocate a 2× buffer,</text><text x="430" y="148" font-size="12.5" fill="currentColor">move all 8 elements, free the old buffer,</text><text x="430" y="166" font-size="12.5" fill="currentColor">then write the new value at index 8</text><text x="40" y="214" font-size="13" font-weight="600" fill="currentColor">new buffer — capacity 16</text><rect x="40" y="222" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="84" y="222" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="128" y="222" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="172" y="222" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="216" y="222" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="260" y="222" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="304" y="222" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="348" y="222" width="44" height="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><rect x="392" y="222" width="44" height="36" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-dasharray="4 3"/><rect x="436" y="222" width="44" height="36" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-dasharray="4 3"/><rect x="480" y="222" width="44" height="36" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-dasharray="4 3"/><rect x="524" y="222" width="44" height="36" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-dasharray="4 3"/><rect x="568" y="222" width="44" height="36" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-dasharray="4 3"/><rect x="612" y="222" width="44" height="36" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-dasharray="4 3"/><rect x="656" y="222" width="44" height="36" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-dasharray="4 3"/><rect x="700" y="222" width="44" height="36" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-dasharray="4 3"/><text x="62" y="245" text-anchor="middle" font-size="12" fill="currentColor">10</text><text x="106" y="245" text-anchor="middle" font-size="12" fill="currentColor">20</text><text x="150" y="245" text-anchor="middle" font-size="12" fill="currentColor">30</text><text x="194" y="245" text-anchor="middle" font-size="12" fill="currentColor">40</text><text x="238" y="245" text-anchor="middle" font-size="12" fill="currentColor">50</text><text x="282" y="245" text-anchor="middle" font-size="12" fill="currentColor">60</text><text x="326" y="245" text-anchor="middle" font-size="12" fill="currentColor">70</text><text x="370" y="245" text-anchor="middle" font-size="12" fill="currentColor">80</text><text x="414" y="245" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.55">92?</text><path d="M40 288 H392 M40 284 V292 M392 284 V292" fill="none" stroke="currentColor" stroke-opacity="0.45"/><text x="216" y="306" text-anchor="middle" font-size="12" fill="currentColor">size = 8</text><path d="M396 288 H744 M396 284 V292 M744 284 V292" fill="none" stroke="currentColor" stroke-opacity="0.45"/><text x="570" y="306" text-anchor="middle" font-size="12" fill="currentColor">free capacity: 8 more insertions before the next growth</text><text x="40" y="336" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.8">every iterator, pointer and reference into the old buffer is now dangling — using one is undefined behavior</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "The arithmetic of doubling",
        problem: "Push $2^{20} = 1{,}048{,}576$ elements one at a time into an empty `vector<int>`. Count total element moves (a) with default doubling growth, (b) with `reserve(1048576)` first.",
        steps: [
          { label: "Growth law", text: "Buffer sizes run 1, 2, 4, …, $2^{20}$; moving from $2^k$ to $2^{k+1}$ costs $2^k$ element moves." },
          { label: "Total", text: "$1 + 2 + 4 + \\dots + 2^{19} = 2^{20} - 1 = 1\\,048\\,575$ moves over the whole process." },
          { label: "Per element", text: "$\\frac{2^{20}-1}{2^{20}} < 1$ move per `push_back` — exactly the meaning of **amortized $O(1)$**." },
          { label: "Memory churn", text: "For 4-byte ints the final buffer is 4 MiB, and all transient buffers together allocated another ~4 MiB before being freed." },
          { label: "With reserve", text: "`v.reserve(1048576)` up front: zero moves, one allocation — amortization becomes zero-cost." }
        ],
        result: "1,048,575 moves versus 0 — `reserve` converts amortized cost into no cost whenever the final size is known."
      },
      {
        title: "Working through containers",
        problem: "vector, list, map, set, unordered and the rules of five. Your task: explain `vector`'s growth strategy and its amortized $O(1)$ `push_back`.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: explain `vector`'s growth strategy and its amortized $O(1)$ `push_back`. Write down the guarantee you will rely on — for this chapter it is: `vector`: contiguous, $O(1)$ amortized end-insertion, $O(n)$ mid-insertion; reallocation invalidates everything." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::vector<int> v; v.reserve(64); v.push_back(1);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — state what `list`, `map`, `set` and the unordered containers trade away to gain their special guarantees — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `list` buys iterator stability and $O(1)$ splice at the price of locality; `map`/`set` buy order at $O(\\log n)$; unordered containers buy speed at the price of order. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `vector`: contiguous, $O(1)$ amortized end-insertion, $O(n)$ mid-insertion; reallocation invalidates everything. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "Container guarantees: the iterator and reference invalidation rules",
        blocks: [
          {
            kind: "para",
            body: "Every container operation carries a second, less visible contract: which of the three kinds of handles into its elements — **iterators**, **pointers** and **references** — still designate a live element afterwards. The C++ standard states this exactly, per container and per operation; anything else is undefined behavior. Because generic code composes operations across call boundaries, these rules are what make multi-step container programs *programs* rather than accidents: the STL's flexibility is usable only because invalidation is specified, not incidental."
          },
          {
            kind: "theorem",
            heading: "The invalidation rules (C++11)",
            body: "**`vector`/`array`**: an insertion forces reallocation exactly when it would exceed `capacity()`; reallocation invalidates **every** iterator, pointer and reference. Without reallocation, insertion invalidates all handles **at or after** the insertion point (those before survive). Erasure invalidates everything at or after the erase point. **`deque`**: insertion at either end invalidates all iterators but **no references**; insertion or erasure in the middle invalidates everything; erasure at an end invalidates only the erased elements. **`list`, `forward_list`, `map`, `set`, `multimap`, `multiset`**: insertion invalidates **nothing**; erasure invalidates only the erased element. **`unordered_map`, `unordered_set`, …**: insertion invalidates iterators **iff** it triggers a rehash — references and pointers survive, because nodes are relinked, not moved; erasure invalidates only the erased. **`swap`** (all containers): invalidates nothing — but every handle now designates elements of the *other* container."
          },
          {
            kind: "derivation",
            heading: "Why the rules follow from memory layout",
            body: "Each rule is a lemma about storage. (1) **Contiguity**: a `vector`'s elements live in one buffer; reallocation moves the buffer itself, so every address into it dangles — no handle survives. Insertion without reallocation shifts the tail one slot: a shifted element is *moved into* a new position, so old references point at the vacated slot, while handles to elements before the point are untouched. (2) **Nodes**: `list`, `forward_list`, `map` and `set` allocate each element in its own node; insertion links new nodes and never disturbs old ones — no handle can break, and only erasure frees a node. (3) **Segmentation and buckets**: a `deque` iterator caches the segment map, which an end-push may reallocate — iterators break, while the segments (and the references into them) stay. An unordered container's iterator remembers its bucket: a rehash rebuilds the bucket table, so all iterators break, while each element node keeps its address — which is precisely why references survive a rehash but iterators do not. The table is not to be memorized; it is the memory layouts stated as promises."
          },
          {
            kind: "example",
            heading: "One push too far",
            body: "Take `vector<int> v; v.reserve(8);` and push until `size() == 8`. Save `int* p = &v[3];` and `auto it = v.begin();`. Now `v.push_back(x);` forces reallocation (say, to capacity 16): eight element moves — and both `p` and `it` now point into the freed buffer. Reading `*p` is a heap-use-after-free that AddressSanitizer flags instantly and an unsanitized build may silently accept. Had `capacity()` been 16 beforehand, both handles would still be valid: the rule is **capacity-conditional, not operation-conditional** — which is why `reserve` is a correctness tool, not merely an optimization."
          },
          {
            kind: "application",
            heading: "Idioms the rules buy",
            body: "Three corollaries run through real code. (1) The **erase-loop**: `for (auto it = c.begin(); it != c.end(); ) if (pred(*it)) it = c.erase(it); else ++it;` — `erase` returns the successor because the old successor was invalidated; `it++` after `erase` is undefined for a `vector`. (2) **Stable-address selection**: keep pointers into elements across later insertions only in node containers (`list`, `set`, `map`) — or in a `vector` you have pre-`reserve`d, or in an `unordered_map`, whose references survive even a rehash. (3) **Shrinking**: the swap idiom `vector<int>(v).swap(v)` leaves `v` with capacity equal to size, releasing the spare memory a history of growth left behind."
          },
          {
            kind: "remark",
            body: "Note what *invalidated* means: not a stale but readable value — **undefined behavior**, with no defined way even to compare or copy the dead iterator. The invalidation rules are the library's memory-safety envelope: they circumscribe which compositions of operations constitute a program. Sanitizers (ASan, UBSan) and debug-mode standard libraries exist precisely because compilers cannot diagnose these violations statically — the guarantees are real, but only the disciplined get them."
          }
        ]
      }
    ],
    keyTakeaways: [
      "`vector`: contiguous, $O(1)$ amortized end-insertion, $O(n)$ mid-insertion; reallocation invalidates everything.",
      "`list` buys iterator stability and $O(1)$ splice at the price of locality; `map`/`set` buy order at $O(\\log n)$; unordered containers buy speed at the price of order.",
      "Invalidation follows layout: contiguous buffers break on reallocation, nodes never break on insertion, buckets break iterators but not references."
    ],
    quiz: [
      {
        q: "`vector::push_back` when `size() < capacity()`:",
        options: ["invalidates all iterators", "invalidates no iterators — no reallocation happens", "invalidates `begin()` only", "invalidates `end()` only"],
        answer: 1,
        explanation: "With headroom, `push_back` writes into existing storage: no reallocation, nothing invalidated."
      },
      {
        q: "Which operation leaves ALL iterators valid?",
        options: ["`push_back` on a full `vector`", "a rehash triggered by `unordered_map::insert`", "an insert into a `list`", "`erase` in the middle of a `vector`"],
        answer: 2,
        explanation: "Node containers invalidate nothing on insertion; the other three each invalidate (at least some) iterators."
      },
      {
        q: "`m[k]` on a `map` when `k` is absent:",
        options: ["throws `out_of_range`", "is a pure lookup — no insertion", "inserts a default value and returns a reference to it", "is a compile error"],
        answer: 2,
        explanation: "The subscript inserts `Value{}` first; `at` is the throwing lookup, `find` the non-throwing one."
      },
      {
        q: "The default `max_load_factor` of an unordered container is:",
        options: ["0.5", "2.0", "the bucket count", "1.0"],
        answer: 3,
        explanation: "Load factor = size / bucket_count; at the default threshold 1.0, growth triggers a rehash — invalidating iterators but not references."
      }
    ]
  },

  // ---------------------------------------------------------------- 31.5
  {
    sectionId: "cpp-ch31-s5",
    readingTime: 5,
    intro: "`stack`, `queue` and `priority_queue` are not containers but **container adaptors**: deliberately restricted interfaces over an ordinary container. They exist to make dangerous flexibility impossible — you cannot accidentally scan a stack, and the compiler enforces that.",
    objectives: [
      "Explain what an adaptor is and which underlying containers each one accepts",
      "Use `priority_queue`'s heap interface and reason about its $O(\\log n)$ costs",
      "Recognize the interface restrictions as design, not omission"
    ],
    concepts: [
      {
        term: "What an adaptor is",
        kind: "definition",
        statement: "`stack<T, C>`, `queue<T, C>` and `priority_queue<T, C>` wrap any container `C` meeting their needs and expose only the restricted operations — `push`, `pop`, and the peek — with **no iteration at all**. Defaults: `deque<T>` for `stack` and `queue`, `vector<T>` for `priority_queue`.",
        detail: "The restrictions are contractual: a type that cannot be misused needs no comments defending it."
      },
      {
        term: "`stack` and `queue`",
        kind: "definition",
        statement: "**`stack`**: LIFO — `top()`, `push()`, `pop()`, all $O(1)$; works over `vector`, `list` or `deque`. **`queue`**: FIFO — `front()`/`back()`, `push` at the back, `pop` from the front, $O(1)$; it needs `push_front`, so **`vector` cannot underlie it** — a compile-time requirement failure, not a runtime one.",
        detail: "Like `pop_back`, these `pop`s return `void`: returning the popped element would cost an extra copy and leave you holding a moved-from object on exception paths."
      },
      {
        term: "`priority_queue`",
        kind: "definition",
        statement: "A **max-heap** by default: `top()` is the largest element in $O(1)$; `push` and `pop` are $O(\\log n)$ sift-up/sift-down. A comparator flips the order — `priority_queue<int, vector<int>, greater<int>>` makes a min-heap. No iteration, no `find` — deliberately.",
        detail: "The same machinery is exposed for raw arrays in `<algorithm>` as `make_heap`, `push_heap`, `pop_heap`."
      },
      {
        term: "Heaps inside",
        kind: "insight",
        statement: "A binary heap is an array in which element $i$'s children sit at $2i+1$ and $2i+2$: no pointers, perfect cache behavior, one `swap` chain per update. That is why `priority_queue` defaults to `vector` — the adaptor's cost model *is* the array's.",
        detail: "Priority scheduling, Dijkstra's algorithm and event queues are all “extract-the-best repeatedly,” which is exactly a heap's shape."
      },
      {
        term: "Container Adaptors: the working contract",
        kind: "definition",
        statement: "**Container Adaptors.** stack, queue and priority_queue. You can claim this section when you can explain what an adaptor is and which underlying containers each one accepts — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 31 (STL Containers); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Tracing a priority queue",
        problem: "Insert 3, 1, 4, 1, 5, 9, 2, 6 into `priority_queue<int>`; show the heap array after each push, then the pop order.",
        steps: [
          { label: "push 3, 1", text: "`[3]`, then `[3, 1]` — 1 does not exceed its parent 3, no swap." },
          { label: "push 4", text: "`[3, 1, 4]` — 4 swaps with parent 3: `[4, 1, 3]`." },
          { label: "push 1", text: "`[4, 1, 3, 1]` — new 1 sits below parent 1, no swap." },
          { label: "push 5", text: "Sifts past 1, then past 4: `[5, 4, 3, 1, 1]`." },
          { label: "push 9", text: "Past 3, then past 5: `[9, 4, 5, 1, 1, 3]`." },
          { label: "push 2, then 6", text: "2 stays: `[9, 4, 5, 1, 1, 3, 2]`; 6 sifts past 1, then 4: `[9, 6, 5, 4, 1, 3, 2, 1]`." },
          { label: "Cost", text: "The i-th push does at most $\\lfloor \\log_2 i \\rfloor$ swaps; the bound sums to $0+1+1+2+2+2+2+3 = 13$ — this sequence used 7." },
          { label: "Drain", text: "Pops emit 9, 6, 5, 4, 3, 2, 1, 1 — descending order, each pop one sift-down." }
        ],
        result: "`top()` is 9; the eight pushes cost 7 swaps (bound 13); draining yields the elements in descending order."
      },
      {
        title: "Working through container adaptors",
        problem: "stack, queue and priority_queue. Your task: explain what an adaptor is and which underlying containers each one accepts.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: explain what an adaptor is and which underlying containers each one accepts. Write down the guarantee you will rely on — for this chapter it is: Adaptors wrap a container and cut its interface down to a discipline: LIFO, FIFO, or extract-the-best." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::vector<int> v; v.reserve(64); v.push_back(1);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — use `priority_queue`'s heap interface and reason about its $O(\\log n)$ costs — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `queue` needs `push_front`, so `vector` cannot underlie it; `priority_queue` defaults to `vector` because a heap is an array. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Adaptors wrap a container and cut its interface down to a discipline: LIFO, FIFO, or extract-the-best. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Adaptors wrap a container and cut its interface down to a discipline: LIFO, FIFO, or extract-the-best.",
      "`queue` needs `push_front`, so `vector` cannot underlie it; `priority_queue` defaults to `vector` because a heap is an array.",
      "`priority_queue`: `top` $O(1)$, `push`/`pop` $O(\\log n)$ — and no iteration by design."
    ],
    quiz: [
      {
        q: "The default underlying container for `stack` is:",
        options: ["`vector`", "`list`", "a heap", "`deque`"],
        answer: 3,
        explanation: "Both `stack` and `queue` default to `deque`; `priority_queue` defaults to `vector`."
      },
      {
        q: "`vector` cannot underlie a `queue` because it lacks:",
        options: ["`push_front`", "`pop_back`", "`operator[]`", "`empty()`"],
        answer: 0,
        explanation: "A queue pops from the front; `vector` has no `push_front`, so the requirement fails at compile time."
      },
      {
        q: "`priority_queue::pop()` costs:",
        options: ["$O(1)$", "$O(\\log n)$ — one sift-down", "$O(n)$", "$O(n \\log n)$"],
        answer: 1,
        explanation: "Removing the root moves the last element to the top and sifts it down a path of length at most $\\log_2 n$."
      },
      {
        q: "In the 0-based array form of a binary heap, the children of index $i$ are at:",
        options: ["$2i$ and $2i+1$", "$i+1$ and $i+2$", "$2i+1$ and $2i+2$", "$2i-1$ and $2i$"],
        answer: 2,
        explanation: "0-based indexing puts the children of $i$ at $2i+1$ and $2i+2$; the parent of $i$ is $(i-1)/2$."
      }
    ]
  },

  // ---------------------------------------------------------------- 31.6
  {
    sectionId: "cpp-ch31-s6",
    readingTime: 4,
    intro: "The container chapter's rules of thumb compress a hundred pages of trade-offs into a handful of defaults you can apply without re-deriving the analysis each time. They are the difference between choosing a container and merely using the one you know.",
    objectives: [
      "Adopt the defaults — `vector` first, member operations over generic ones",
      "Justify container choices with named complexity and invalidation guarantees",
      "Apply sizing discipline (`reserve`) and know when adaptors document design"
    ],
    concepts: [
      {
        term: "`vector` is the default",
        kind: "insight",
        statement: "**Use a `vector` unless you have a reason not to**: it is compact, cache-friendly, has the best-tested code paths and subscripting. Every other container is an answer to a specific need — splicing, stable iterators, ordered iteration, hash lookup — and should be chosen by naming that need.",
        detail: "The corollary: if you cannot name why a container beats `vector` for your workload, you have not chosen yet."
      },
      {
        term: "Know the guarantees you rely on",
        kind: "law",
        statement: "Every container choice should be one sentence long and contain its complexity and invalidation behavior: “`list`, because I hold iterators across erasure”; “`unordered_map`, because lookup dominates and the keys hash well.”",
        detail: "The standard publishes both tables — relying on them is not optional knowledge but the whole basis of the choice."
      },
      {
        term: "Size what you can",
        kind: "method",
        statement: "Call `reserve(n)` when the final element count is known: it converts doubling-scaled reallocation churn into a single allocation — and, per the invalidation rules, keeps existing iterators and pointers valid.",
        detail: "The same advice applies to `unordered_map::reserve`, which sets the bucket count and pre-empts a rehash."
      },
      {
        term: "Narrow interfaces document design",
        kind: "insight",
        statement: "Adaptors exist because restricting an interface makes errors impossible: prefer a `stack` over a `vector` you promise (only in a comment) to use LIFO-only. The type system enforces what comments merely request.",
        detail: "The same philosophy reappears throughout the library: `string_view` ranges, `const` iterators, `unique_ptr`'s move-only handle."
      },
      {
        term: "Shipping rule for STL containers",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Default to `vector`; name the reason for anything else.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "Picking containers for five jobs",
        problem: "Match each job to a container with a one-sentence justification: (1) undo history, (2) a unique word index printed alphabetically, (3) a cache keyed by URL, (4) a print spooler, (5) a scheduler that always runs the highest-priority waiting task.",
        steps: [
          { label: "Step 1: Undo history", text: "`stack<Action>` — strict LIFO, and the restricted interface documents the design." },
          { label: "Step 2: Word index", text: "`set<string>` (or `map<string, int>` with counts) — sorted iteration is the product, $O(\\log n)$ per insertion." },
          { label: "Step 3: URL cache", text: "`unordered_map<URL, Record>` — point lookups dominate; iteration order is irrelevant." },
          { label: "Step 4: Print spooler", text: "`queue<Job>` — FIFO fairness, $O(1)$ at both ends." },
          { label: "Step 5: Scheduler", text: "`priority_queue<Task>` — extract-the-best each step ($O(\\log n)$); with `greater<Priority>` if the smaller value wins." }
        ],
        result: "Five data-structure decisions, each one sentence with its complexity named — that is what the advice buys."
      },
      {
        title: "Reviewing STL containers code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: adopt the defaults — `vector` first, member operations over generic ones.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Default to `vector`; name the reason for anything else." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `std::vector<int> v; v.reserve(64); v.push_back(1);`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: justify container choices with named complexity and invalidation guarantees. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: State every choice with its complexity and invalidation guarantee in the same breath." },
        ],
        result: "The review ends with findings tied to reasons: Default to `vector`; name the reason for anything else. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Default to `vector`; name the reason for anything else.",
      "State every choice with its complexity and invalidation guarantee in the same breath.",
      "`reserve` when the size is known; prefer adaptors when the discipline they enforce is the design."
    ],
    quiz: [
      {
        q: "The default container when in doubt is:",
        options: ["`vector`", "`map`", "`list`", "`array`"],
        answer: 0,
        explanation: "Compact, contiguous, cache-friendly and best tested — everything else needs a stated reason."
      },
      {
        q: "You hold iterators to elements while other elements are erased elsewhere in the same sequence. Choose:",
        options: ["`vector`", "`array`", "`list`", "`string`"],
        answer: 2,
        explanation: "Node containers invalidate only the erased element's handles; a `vector` erase invalidates everything at and after the point."
      },
      {
        q: "`reserve(1000)` before 1000 `push_back`s eliminates:",
        options: ["all element moves and the reallocation", "the need for `push_back`", "copy construction of elements", "the destructor calls"],
        answer: 0,
        explanation: "One allocation up front: zero moves — and iterators taken after the reserve stay valid throughout."
      }
    ]
  }
]

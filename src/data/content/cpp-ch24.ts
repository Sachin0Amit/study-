import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup — The C++ Programming Language, 4th Edition
// Chapter 24: Generic Programming (Sections 24.1 – 24.5, TC++PL 699–720)
// ============================================================================

export const cppCh24Content: SectionContent[] = [
  // ---------------------------------------------------------------- 24.1
  {
    sectionId: 'cpp-ch24-s1',
    readingTime: 5,
    intro: "The standard library's power — one `sort` for every container, one `accumulate` for every sequence — did not come from clever code. It came from a discipline called **generic programming**: lifting concrete algorithms so they work for any type that satisfies precisely stated requirements, with no loss of run-time efficiency. This chapter names that discipline and splits it into its two halves — the lifting of algorithms (24.2) and the formulation of concepts (24.3–24.4).",
    objectives: [
      "Define generic programming as the book uses the term and distinguish it from ordinary code reuse",
      "Explain the zero-overhead demand that generic abstractions must satisfy",
      "Describe how the STL decoupled algorithms from containers through the sequence abstraction",
    ],
    concepts: [
      {
        term: 'Generic programming',
        kind: 'definition',
        statement: "**Generic programming is the design of algorithms and data structures so that they work for a family of types** — those meeting the requirements the algorithm states — rather than for one concrete type. It has two inseparable activities: *lifting* concrete algorithms into generic ones, and formulating the discovered requirements precisely as **concepts**.",
        detail: 'The generality is bought entirely at compile time: the template machinery, not run-time polymorphism, delivers it.',
      },
      {
        term: 'Zero overhead, again',
        kind: 'insight',
        statement: "The generic version must be **as fast as the concrete version written for the specific type** — what you do not use, you do not pay for; what you do use, you could not hand-write better. Instantiation plus inlining must collapse the abstraction so that the generated code matches handwritten code.",
        detail: "This is why the STL uses templates and compile-time dispatch rather than virtual functions: a virtual call per element would tax every loop.",
      },
      {
        term: 'The STL unification',
        kind: 'insight',
        statement: "Stepanov's observation behind the STL: algorithms and containers can be **decoupled by a small set of concepts** — iterators presenting sequences — so that one `sort`, one `find`, one `accumulate` serves `vector`, `list`, raw arrays, and streams alike.",
        detail: 'The chapter studies how such generality is actually found, using the humble summation function as the running specimen.',
      },
      {
        term: 'Lift, then name',
        kind: 'method',
        statement: "The working method of generic programming: **(a)** start from a concrete, correct algorithm; **(b)** lift it by removing accidental dependencies one at a time; **(c)** record each removal as a named requirement — a concept. Sections 24.2 and 24.3 perform (b) and (c) on the same example.",
        detail: 'The order matters: requirements discovered by lifting are real; requirements invented in the abstract usually are not.',
      },
      {
        term: 'Introduction: the working contract',
        kind: 'definition',
        statement: '**Introduction.** What generic programming is. You can claim this section when you can define generic programming as the book uses the term and distinguish it from ordinary code reuse — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 24 (Generic Programming); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'The 3×3 explosion a template family prevents',
        problem: 'A program needs `sum`, `find`, and `count` over three storage shapes: `vector<int>`, `double[1000]`, and a linked list of readings. Compare writing these concretely against writing them generically.',
        steps: [
          { label: 'Concrete accounting', text: 'Three algorithms times three data shapes is $3 \\times 3 = 9$ handwritten functions; at about 6 lines each that is roughly 54 lines of near-duplicate code, each line a chance to differ.' },
          { label: 'Generic accounting', text: 'Three algorithms written once as templates (`accumulate`, `find`, `count`, about 10 lines each); the compiler instantiates exactly the 9 specializations the program uses, on demand.' },
          { label: 'Maintenance', text: 'A bug found in a concrete `find` must be fixed in 3 places and re-tested 3 times; a bug in the generic `find` is fixed once, in the single definition every instantiation shares.' },
          { label: 'Performance check', text: 'Instantiating the generic `accumulate` for `double[1000]` produces the same loop a handwritten double sum would — the abstraction exists only at compile time, satisfying the zero-overhead demand.' },
        ],
        result: 'Nine functions become three, fixed once and instantiated freely — the two economic arguments (code volume, maintenance) plus the performance guarantee are the case for generic programming.',
      },
      {
        title: 'Working through introduction',
        problem: 'What generic programming is. Your task: define generic programming as the book uses the term and distinguish it from ordinary code reuse.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: define generic programming as the book uses the term and distinguish it from ordinary code reuse. Write down the guarantee you will rely on — for this chapter it is: Generic programming = lifting algorithms to families of types while stating requirements precisely as concepts — with zero run-time cost.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename In> int total(In first, In last);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain the zero-overhead demand that generic abstractions must satisfy — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: The STL decoupled algorithms from containers through the sequence/iterator abstraction; that unification is the model case. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Generic programming = lifting algorithms to families of types while stating requirements precisely as concepts — with zero run-time cost. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Generic programming = lifting algorithms to families of types while stating requirements precisely as concepts — with zero run-time cost.',
      'The STL decoupled algorithms from containers through the sequence/iterator abstraction; that unification is the model case.',
      'The two skills to practice: lifting (24.2) and concept design (24.3–24.4).',
    ],
    quiz: [
      {
        q: 'What best characterizes generic programming as this chapter defines it?',
        options: ['Writing macros that work for many types', 'Code reuse through inheritance from a common base class', 'Lifting algorithms to work for any type meeting precisely stated requirements, at zero run-time cost', 'Programming without regard for performance'],
        answer: 2,
        explanation: 'Generality is achieved by lifting plus precisely stated requirements (concepts), and the abstraction must cost nothing at run time — the zero-overhead demand.',
      },
      {
        q: 'The chapter insists a lifted algorithm instantiated for `int` should be:',
        options: ['as fast as a handwritten int-specific version — abstraction at zero overhead', 'about twice as slow, the price of generality', 'faster, because templates get optimized more aggressively', 'unpredictable — performance is not a concern here'],
        answer: 0,
        explanation: 'Instantiation plus inlining must collapse the abstraction; if the generic code ran slower, the abstraction would be the wrong one.',
      },
      {
        q: 'What lets one `sort` serve `vector<int>`, `deque<double>`, and raw arrays alike?',
        options: ['Object-oriented virtual interfaces', 'The iterator/sequence abstraction: every container and array can be presented as a `[b:e)` range', 'Garbage collection', 'A common base class `Container`'],
        answer: 1,
        explanation: 'The STL decoupling: algorithms are written against sequences of positions, not against container types — the small set of iterator concepts does the unifying.',
      },
    ],
  },

  // ---------------------------------------------------------------- 24.2
  {
    sectionId: 'cpp-ch24-s2',
    readingTime: 8,
    intro: "Generic algorithms are not written in a flash of abstraction — they are **lifted**, one deliberate step at a time, from concrete code that is already understood. This section performs the canonical lift, the book's running example: a function that sums the elements of a `vector<int>`, generalized step by step until it *is* the standard library's `std::accumulate`. Watch what each step removes — and what each removal exposes as a requirement.",
    objectives: [
      'Perform the four lifts that turn a concrete sum into the generic `accumulate`',
      'State the requirements each lift discovers on the iterator and the accumulator',
      'Explain the half-open `[b:e)` sequence notation and why the initial value determines the accumulator type',
    ],
    concepts: [
      {
        term: 'Lifting',
        kind: 'definition',
        statement: "**Lifting** is removing the *accidental* properties of a concrete algorithm — the type of its elements, the way it traverses data, what it accumulates with, the operation it applies — while keeping its essential computation. Each removal is safe only when the removed capability is replaced by a requirement on a parameter.",
        detail: 'Lifting is how requirements are discovered rather than guessed: the set of expressions that survive is exactly the algorithm\'s requirement set.',
      },
      {
        term: 'The half-open range `[b:e)`',
        kind: 'notation',
        statement: "A sequence is passed as a pair of positions with `e` **one past the last element**; the empty sequence is `b == e`, and `e` itself is never dereferenced. No size member and no container type are needed.",
        detail: 'Half-open ranges make sub-ranges free (`v.begin()+1, v.end()`), terminate loops by inequality alone, and extend naturally to stream iterators that have no "last element" to name in advance.',
      },
      {
        term: 'Requirements surface as expressions',
        kind: 'insight',
        statement: "What an algorithm needs is exactly **the set of expressions that survive lifting**: `first != last`, `*first`, `++first` on the traversal position, and `val + *first` on the accumulator. A concept is these expressions plus their intended meaning.",
        detail: 'This is why concept names read like expression summaries: `Equality_comparable` means "has `==` with sensible semantics".',
      },
      {
        term: 'From sum to fold',
        kind: 'insight',
        statement: "When the combining **operation itself becomes a parameter**, `accumulate(b, e, init, op)` — the four-argument form of `std::accumulate` — the sum becomes a general *fold*: the same code computes products, maxima, and concatenations. The initial value's type **is** the accumulator type: `accumulate(b, e, 0L)` sums into `long`, escaping `char`/`short` overflow.",
        detail: 'Choosing `init = 0` sums; choosing `init = 1` with `a*b` multiplies — the initial value is part of the algorithm\'s contract, not a detail.',
      },
      {
        term: 'Algorithms and Lifting: the working contract',
        kind: 'definition',
        statement: '**Algorithms and Lifting.** From concrete to generic algorithms. You can claim this section when you can perform the four lifts that turn a concrete sum into the generic `accumulate` — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 24 (Generic Programming); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    figures: [
      {
        caption: "The lifting staircase of §24.2: from `int sum(const vector<int>&)` to `accumulate(b, e, init, op)`. Each lift deletes one accident — the element type, the container, the operation itself — and each deletion leaves a requirement behind: `T + T` and `0 → T` on the element type, `++`/`*`/`!=` on the iterator, `op(val, *b)` for the fold. Four small lifts turn five concrete lines into the standard library's `std::accumulate`.",
        svg: `<svg viewBox="0 0 760 380" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Staircase of four lifts from a concrete int sum to the generic accumulate function"><text x="380" y="20" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.95">lifting sum(): each step removes an accident and exposes a requirement</text><path d="M 10 370 L 10 330 L 190 330 L 190 270 L 370 270 L 370 210 L 550 210 L 550 150 L 730 150 L 730 370 Z" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><line x1="190" y1="324" x2="190" y2="280" stroke="currentColor" stroke-width="2"/><path d="M 185 288 L 190 278 L 195 288" fill="none" stroke="currentColor" stroke-width="2"/><line x1="370" y1="264" x2="370" y2="220" stroke="currentColor" stroke-width="2"/><path d="M 365 228 L 370 218 L 375 228" fill="none" stroke="currentColor" stroke-width="2"/><line x1="550" y1="204" x2="550" y2="160" stroke="currentColor" stroke-width="2"/><path d="M 545 168 L 550 158 L 555 168" fill="none" stroke="currentColor" stroke-width="2"/><rect x="22" y="252" width="156" height="76" rx="9" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="100" y="272" text-anchor="middle" font-size="11.5" font-weight="bold" fill="currentColor">int sum(const</text><text x="100" y="287" text-anchor="middle" font-size="11.5" font-weight="bold" fill="currentColor">vector&lt;int&gt;&amp; v)</text><text x="100" y="308" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">accidents: element int</text><text x="100" y="321" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">traversal v[i] · accumulator int</text><rect x="202" y="192" width="156" height="76" rx="9" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="280" y="212" text-anchor="middle" font-size="11.5" font-weight="bold" fill="currentColor">T sum(const</text><text x="280" y="227" text-anchor="middle" font-size="11.5" font-weight="bold" fill="currentColor">vector&lt;T&gt;&amp; v)</text><text x="280" y="248" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">req gained: T + T</text><text x="280" y="261" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">and 0 → T for the sum</text><rect x="382" y="132" width="156" height="76" rx="9" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="460" y="152" text-anchor="middle" font-size="11.5" font-weight="bold" fill="currentColor">T sum(Iter b, Iter e,</text><text x="460" y="167" text-anchor="middle" font-size="11.5" font-weight="bold" fill="currentColor">T init)</text><text x="460" y="188" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">req gained: ++ · * · !=</text><text x="460" y="201" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">on Iter — any [b:e) range</text><rect x="562" y="72" width="162" height="76" rx="9" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="643" y="92" text-anchor="middle" font-size="11.5" font-weight="bold" fill="currentColor">Val accumulate(b, e,</text><text x="643" y="107" text-anchor="middle" font-size="11.5" font-weight="bold" fill="currentColor">init, op)</text><text x="643" y="128" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">req gained: op(val, *b)</text><text x="643" y="141" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">the fold · = std::accumulate</text><text x="100" y="352" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">level 0 · concrete</text><text x="280" y="352" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.9">lift 1: the element type</text><text x="460" y="352" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.9">lift 2: the container</text><text x="643" y="352" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.9">lift 3: the operation</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Lifting sum all the way to accumulate',
        problem: 'Start from a concrete summation and lift it four times, naming the requirement each lift exposes; then run the result on verifiable data.',
        steps: [
          { label: 'Level 0 — concrete', text: "`int sum(const vector<int>& v) { int s = 0; for (int i = 0; i < (int)v.size(); ++i) s += v[i]; return s; }` — three accidents: the element type is `int`, the traversal is `vector` indexing, and the accumulator is `int`." },
          { label: 'Lift 1 — the element type', text: "`template<class T> T sum(const vector<T>& v)` with the same loop: now `T s = 0` and `s += v[i]` expose a requirement — `T` supports `+` and initialization from 0. But `vector<short>` still overflows: the accumulator remains welded to the element type." },
          { label: 'Lift 2 — the traversal', text: 'Replace indexing with positions: `for (auto p = v.begin(); p != v.end(); ++p) s += *p;` — the traversal requirements become visible as expressions: `!=`, unary `*`, and `++` on the position.' },
          { label: 'Lift 3 — the container', text: "`template<class Iter, class T> T sum(Iter first, Iter last, T s) { while (first != last) { s = s + *first; ++first; } return s; }` — the vector is gone: any `[b:e)` range works, and the accumulator type `T` is now chosen by the caller. Renamed, this is `std::accumulate`." },
          { label: 'Lift 4 — the operation', text: 'Pass the combining operation as a parameter: `s = op(s, *first)`. Sum becomes the general fold — products, maxima, concatenations — the four-argument `std::accumulate(b, e, init, op)`.' },
          { label: 'Runs', text: "Over `{1,2,3,4,5}` with init 0: 15. Over `{1, ..., 100}` with init 0: 5050 (Gauss: $100 \\times 101 / 2$). Over the chars `'a'`…`'e'` (ASCII 97–101) with an `int` init of 0: 495 — the accumulator outgrows the element type. Over `{2,3,4,5,6}` with init 1 and `a*b`: 720; with init 0 the result is 0 — the initial value is part of the contract." },
        ],
        result: 'Four lifts turn five concrete lines into the general fold. The requirements discovered — `!=`, `*`, `++` on the iterator; `+` (then `op`) on the accumulator — are exactly the raw material of the concepts in the next section.',
      },
      {
        title: 'Working through algorithms and lifting',
        problem: 'From concrete to generic algorithms. Your task: perform the four lifts that turn a concrete sum into the generic `accumulate`.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: perform the four lifts that turn a concrete sum into the generic `accumulate`. Write down the guarantee you will rely on — for this chapter it is: Lifting removes accidents (element type, container, traversal, operation); each removal leaves a named requirement behind.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename In> int total(In first, In last);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — state the requirements each lift discovers on the iterator and the accumulator — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: The half-open `[b:e)` range is the canonical sequence interface: empty means `b == e`, `e` is never dereferenced, sub-ranges are free. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Lifting removes accidents (element type, container, traversal, operation); each removal leaves a named requirement behind. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Lifting removes accidents (element type, container, traversal, operation); each removal leaves a named requirement behind.',
      'The half-open `[b:e)` range is the canonical sequence interface: empty means `b == e`, `e` is never dereferenced, sub-ranges are free.',
      'Requirements are the surviving expressions (`!=`, `*`, `++`, `+`); with `op` as a parameter, sum generalizes to the fold `std::accumulate`, and `init`\'s type chooses the accumulator.',
    ],
    quiz: [
      {
        q: 'Why is `T s = 0;` in the templated sum a discovered dependency?',
        options: ['It is not — 0 works for every type', 'It forces T to be a floating-point type', 'It makes the loop $O(\\log n)$', 'It requires convertibility from 0 and keeps the accumulator tied to the element type — summing shorts into a short overflows'],
        answer: 3,
        explanation: 'Initialization from 0 is an unstated requirement on `T`, and the accumulator inherits the element type until the caller is allowed to choose it — the overflow trap motivates the next lift.',
      },
      {
        q: 'In `[b:e)` notation, the empty sequence is expressed as:',
        options: ['`b == e`', '`b == e - 1`', '`b < e`', '`e == nullptr`'],
        answer: 0,
        explanation: 'Half-open means `e` is one past the last element, so an empty sequence has the two positions equal — no sentinel value or size member needed.',
      },
      {
        q: 'Which expression in the lifted `accumulate` is the source of the requirement on the accumulator type `Val`?',
        options: ['`first != last`', '`val = val + *first`', '`++first`', 'the `return` statement'],
        answer: 1,
        explanation: 'The accumulator requirement comes from combining: `val + *first` must be well-formed and assignable back to `Val` — the iterator requirements come from the other three expressions.',
      },
      {
        q: '`accumulate(p, p+5, 1, [](int a, int b){ return a*b; })` over the array `{2,3,4,5,6}` returns:',
        options: ['120', '0', '720', '6'],
        answer: 2,
        explanation: 'The fold multiplies: $2 \\cdot 3 \\cdot 4 \\cdot 5 \\cdot 6 = 720$. With the natural-for-sum init 0 the answer would be 0 — the initial value must match the operation.',
      },
    ],
  },

  // ---------------------------------------------------------------- 24.3
  {
    sectionId: 'cpp-ch24-s3',
    readingTime: 6,
    intro: "Lifting only half works if the requirements it discovers stay implicit in the code. A **concept** names them: a compile-time predicate on template arguments that says precisely which expressions must compile and what may be assumed about them. Concepts, with their companion **axioms**, are the vocabulary in which generic algorithms are specified, checked, selected among, and — most of all — understood.",
    objectives: [
      'Define a concept and read the ideal concept-annotated template notation',
      'Distinguish checkable requirements from axioms, and Semiregular from Regular',
      'Explain multi-argument (relational) concepts such as `Equality_comparable<T, U>`',
    ],
    concepts: [
      {
        term: 'Concept',
        kind: 'definition',
        statement: "A **concept** is a named set of requirements on one or more template arguments: which expressions must be valid (the syntactic requirements) and what may be assumed about their behavior (the semantic requirements). A concept is a predicate — a type either satisfies it or does not — evaluated at compile time. The ideal notation makes it part of the template head:",
        detail: "`template<Sequence S, Number N> N sum(S s, N n);` reads 'sum takes a sequence and a number'; a `requires Arithmetic<Value_type<S>, N>()` clause can refine the relation between them. Concepts buy better error messages, concept-based overloading, and honest documentation of what an algorithm needs.",
      },
      {
        term: 'Axiom',
        kind: 'definition',
        statement: "An **axiom** is a semantic requirement stated as an assumed property rather than a checked expression: for `Arithmetic`, $a + b = b + a$; for copy, that a copy equals the original and does not alias it. The compiler generally **cannot** check axioms; they document meaning, guide optimization, and can be exercised by testing.",
        detail: 'Requirements say "this must compile"; axioms say "and here is what you may rely on". Generic code that exploits only axioms, never accidents, stays correct for every satisfying type.',
      },
      {
        term: 'Regular',
        kind: 'definition',
        statement: "**Regular** is the book's fundamental concept: a type that *behaves like an `int`* — default constructible, copy and move constructible and assignable, swappable, and equality-comparable. **Semiregular** is Regular without `==`. Nearly every algorithm at least copies its arguments, so Semiregular is the floor of value semantics.",
        detail: 'The iterator and arithmetic concepts all presuppose value behavior; thinking of objects as values (rather than as handles to shared state) is what makes generic code composable.',
      },
      {
        term: 'Relational concepts',
        kind: 'definition',
        statement: "Concepts may relate **several** types: `Equality_comparable<T, U>` requires `t == u` and `u == t` to make sense; `Arithmetic<T, U>` requires `t + u`, `t * u` and friends with a sensible result; `Common<T, U>` names a type both convert to (how `string` and `char*` are compared).",
        detail: 'Almost every interesting generic operation relates two types — the sequence\'s element type and the accumulator, the compared pair — so two-type concepts are the norm, not the exception.',
      },
      {
        term: 'Concepts: the working contract',
        kind: 'definition',
        statement: '**Concepts.** The requirements vocabulary. You can claim this section when you can define a concept and read the ideal concept-annotated template notation — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 24 (Generic Programming); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: "Auditing candidate types against sum's requirements",
        problem: 'The lifted `accumulate` requires of its iterator: `p != q`, `*p`, `++p` (an input iterator); and of its accumulator `Val`: `val + *p` assignable back to `Val`. Which candidates can call it?',
        steps: [
          { label: '`int*` over an array', text: '`!=`, `*`, `++` all hold; `0 + *p` is fine. Works — and `accumulate(a, a+4, 0L)` widens the accumulator to `long`, the caller choosing the arithmetic.' },
          { label: '`list<double>::iterator`', text: 'Node-hopping traversal supports exactly `!=`, `*`, `++`. Works — the whole point of the iterator abstraction discovered by lifting.' },
          { label: 'A stream iterator over `int`', text: 'Single-pass positions over input support the three operations; reading `5 10 15 20` yields $5+10+15+20 = 50$. Works — `[b:e)` needs no last element in memory.' },
          { label: '`back_insert_iterator<vector<int>>`', text: 'Fails: it is write-only. `*p = x` compiles, but `val + *p` must *read* through the iterator, and there is no readable element. Requirements have direction and meaning, not just shape.' },
          { label: '`std::ostream` used as the iterator', text: 'Fails outright: no `*p`, no `++p`, no `p != q`. This is the failure the next section catches with a *named* requirement instead of a cascade of errors.' },
        ],
        result: 'Three passes show the breadth one lifted algorithm gains; two failures show that a concept is a predicate with direction and semantics — write-only traversal and no traversal are both genuine "does not satisfy".',
      },
      {
        title: 'Working through concepts',
        problem: 'The requirements vocabulary. Your task: define a concept and read the ideal concept-annotated template notation.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: define a concept and read the ideal concept-annotated template notation. Write down the guarantee you will rely on — for this chapter it is: A concept is a compile-time predicate naming syntactic and semantic requirements; the ideal notation puts it in the template head (`template<Sequence S, Number N>`).' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename In> int total(In first, In last);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — distinguish checkable requirements from axioms, and Semiregular from Regular — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Axioms state semantics the compiler cannot check ($a + b = b + a$); they document meaning, license optimization, and are testable. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A concept is a compile-time predicate naming syntactic and semantic requirements; the ideal notation puts it in the template head (`template<Sequence S, Number N>`). Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'A concept is a compile-time predicate naming syntactic and semantic requirements; the ideal notation puts it in the template head (`template<Sequence S, Number N>`).',
      'Axioms state semantics the compiler cannot check ($a + b = b + a$); they document meaning, license optimization, and are testable.',
      'Regular ("behaves like an int") is the baseline; relational concepts like `Equality_comparable<T, U>` and `Common<T, U>` capture cross-type operations.',
    ],
    quiz: [
      {
        q: 'Which of these is an axiom rather than a compiler-checkable requirement?',
        options: ['`p != q` must be valid for iterators', '`*first` must yield a value', '$a + b = b + a$ for the Arithmetic concept', 'T must be copy-constructible'],
        answer: 2,
        explanation: 'The commutativity of `+` is a semantic assumption — no compiler checks it — while the others are expression-level requirements that either compile or do not.',
      },
      {
        q: 'A Regular type is one that:',
        options: ['has no member functions', 'behaves like an int: default constructible, copyable, assignable, and comparable with `==`', 'inherits from a `std::regular` base class', 'cannot be used as a template argument'],
        answer: 1,
        explanation: 'Regular is the value-semantics baseline — everything an `int` can do; Semiregular is the same minus equality.',
      },
      {
        q: 'Why do concepts such as `Equality_comparable<T, U>` take two type parameters?',
        options: ['To express operations across two types, such as comparing a `string` with a C-style string', 'To double the cost of checking', 'Because single-parameter concepts are illegal', 'To enable inheritance between concepts'],
        answer: 0,
        explanation: 'Relational concepts capture whether cross-type expressions make sense — exactly the element-type/accumulator relation in `sum`.',
      },
      {
        q: "In the ideal notation `template<Sequence S, Number N> N sum(S s, N n);` the names `Sequence` and `Number` are:",
        options: ['class names to be derived from', 'run-time type tags', 'macro names expanded before compilation', 'concepts: compile-time predicates constraining the template arguments'],
        answer: 3,
        explanation: 'They stand in for requirement sets — the notation the book wants, and the one later standardized (in C++20) as template constraints.',
      },
      // PYQ-pattern: GATE 2024 — concepts name template requirements (rephrased)
      {
        q: "A generic algorithm is lifted from a concrete version, and its hidden requirements are named in one place so misuse is diagnosed at the call. What is that named set of requirements?",
        options: ["An allocator, because every generic algorithm allocates", "A concept: a compile-time predicate on template arguments stating the required operations and associated types", "A virtual base class, because generics need runtime dispatch", "A macro, because requirements cannot be named in the language"],
        answer: 1,
        explanation: "Step 1: The data given is a lifted algorithm whose assumptions about its types were discovered step by step. Step 2: The governing rule is the concept: a named compile-time predicate over template arguments that states required operations, associated types, and semantics, checked where the template is used. Step 3: Applying it, a call with an unsuitable type fails early at the requirement boundary with a readable diagnostic instead of deep inside the template body. Step 4: The distractors fail because allocation is orthogonal to requirements, runtime bases would erase the compile-time genericity, and the mechanism is a language facility rather than text substitution. Step 5: Therefore the named requirements are a concept."
      }
    ],
  },

  // ---------------------------------------------------------------- 24.4
  {
    sectionId: 'cpp-ch24-s4',
    readingTime: 8,
    intro: "C++11 shipped without language support for concepts, so the book shows how to get most of the value with pure library machinery: concepts as `constexpr` predicates, expression tests that ask \"does this compile?\", `static_assert` for *checking*, and `enable_if` for *selection*. This section is the bridge between the ideal notation of 24.3 and the code that compiles — and it is where concept-based overloading becomes possible (and painful).",
    objectives: [
      'Build a concept as a `constexpr bool` predicate from traits and expression tests',
      'Contrast `static_assert` checking (diagnosis) with `enable_if`/`Requires` selection (overload removal)',
      'Trace how two `advance` overloads are chosen by concept, and why the weaker guard needs a hand-written complement',
    ],
    concepts: [
      {
        term: 'Concepts as constexpr predicates',
        kind: 'method',
        statement: "In C++11 a concept is emulated by a `constexpr` function returning `bool`, composed from smaller predicates: `Regular<T>()` is `Semiregular<T>() && Equality_comparable<T>()`, and `Semiregular` is assembled from `is_copy_constructible`-style type traits.",
        detail: 'The predicates compose with `&&` and `!` exactly as concepts do in the ideal notation; what is lost is not expressiveness but the compiler\'s automatic *use* of the structure.',
      },
      {
        term: 'Expression testing (`Has_plus`)',
        kind: 'method',
        statement: "To ask whether an expression compiles, provide **two overloads of a probe**: one viable only if the expression is well-formed (selected by `decltype` on the expression), and a catch-all returning a `substitution_failure` marker. Substitution failure is not an error (SFINAE), so \"does not compile\" becomes \"returns `false`\":",
        detail: "`Has_plus<int>()` is `true`; for a `Date` with no `operator+`, `Has_plus<Date>()` is `false` — a question answered at compile time, never a hard error by itself.",
      },
      {
        term: '`static_assert` — checking',
        kind: 'definition',
        statement: "Assert the predicate inside the template: `static_assert(Input_iterator<Iter>(), \"sum(): Iter must be an input iterator\");`. The error surfaces **at instantiation, naming the requirement**, instead of as a cascade inside the loop body.",
        detail: 'This is diagnosis only: the check fires after the template has already been selected — it cannot redirect the call to another implementation.',
      },
      {
        term: '`enable_if` — selection',
        kind: 'definition',
        statement: "Put the predicate in the *signature*, via the alias `template<bool B, typename T = void> using Requires = std::enable_if<B,T>;` — when the concept fails, `Requires<C>()` is an ill-formed return type and **substitution failure removes the whole function from the overload set**.",
        detail: 'Selection, not diagnosis: this is what makes concept-based overloading possible — and what forces the hand-negated guards examined below.',
      },
      {
        term: 'Making Concepts Concrete: the working contract',
        kind: 'definition',
        statement: '**Making Concepts Concrete.** Emulating concepts in C++11. You can claim this section when you can build a concept as a `constexpr bool` predicate from traits and expression tests — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 24 (Generic Programming); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    figures: [
      {
        caption: "A concept gate on instantiation. The compiler evaluates the concept predicates — `Input_iterator<Iter>() && Number<Val>()` — at compile time. Types that pass (raw pointers, container iterators, stream iterators) get a real instantiation; a type that fails (`std::ostream` used as an iterator) trips the `static_assert` inside the body, which names the requirement rather than burying the error in the loop. The same predicate placed in the signature via `Requires`/`enable_if` makes the overload vanish instead — selection rather than diagnosis.",
        svg: `<svg viewBox="0 0 760 420" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A concept gate evaluates template arguments at compile time; passing types instantiate the template, failing types trip a static assertion"><text x="380" y="20" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.95">a concept gate on instantiation</text><rect x="20" y="48" width="204" height="34" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><text x="122" y="69" text-anchor="middle" font-size="11" fill="currentColor">✓ int* over an int array</text><rect x="20" y="100" width="204" height="34" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><text x="122" y="121" text-anchor="middle" font-size="11" fill="currentColor">✓ vector&lt;double&gt;::iterator</text><rect x="20" y="152" width="204" height="34" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><text x="122" y="173" text-anchor="middle" font-size="11" fill="currentColor">✓ list&lt;string&gt;::iterator</text><rect x="20" y="204" width="204" height="34" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><text x="122" y="225" text-anchor="middle" font-size="11" fill="currentColor">✓ stream iterator reading ints</text><rect x="20" y="256" width="204" height="34" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="122" y="277" text-anchor="middle" font-size="11" fill="currentColor">✗ std::ostream as Iter</text><line x1="224" y1="65" x2="282" y2="136" stroke="currentColor" stroke-width="1.6"/><path d="M 275 131 L 283 136 L 275 141 Z" fill="currentColor"/><line x1="224" y1="117" x2="282" y2="160" stroke="currentColor" stroke-width="1.6"/><path d="M 275 155 L 283 160 L 275 165 Z" fill="currentColor"/><line x1="224" y1="169" x2="282" y2="184" stroke="currentColor" stroke-width="1.6"/><path d="M 275 179 L 283 184 L 275 189 Z" fill="currentColor"/><line x1="224" y1="221" x2="282" y2="208" stroke="currentColor" stroke-width="1.6"/><path d="M 275 203 L 283 208 L 275 213 Z" fill="currentColor"/><line x1="224" y1="273" x2="282" y2="232" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><path d="M 275 227 L 283 232 L 275 237 Z" fill="currentColor"/><rect x="286" y="112" width="160" height="150" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><text x="366" y="136" text-anchor="middle" font-size="12.5" font-weight="bold" fill="currentColor">the concept gate</text><text x="366" y="160" text-anchor="middle" font-size="11" fill="currentColor">Input&#95;iterator&lt;Iter&gt;()</text><text x="366" y="176" text-anchor="middle" font-size="11" fill="currentColor">&amp;&amp;</text><text x="366" y="192" text-anchor="middle" font-size="11" fill="currentColor">Number&lt;Val&gt;()</text><text x="366" y="214" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">constexpr bool predicates</text><text x="366" y="228" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">evaluated at compile time</text><line x1="446" y1="150" x2="486" y2="112" stroke="currentColor" stroke-width="1.8"/><path d="M 479 104 L 489 110 L 480 118 Z" fill="currentColor"/><text x="452" y="98" font-size="10.5" fill="currentColor" opacity="0.9">requirements hold</text><line x1="446" y1="224" x2="486" y2="300" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 4"/><path d="M 479 294 L 489 302 L 479 306 Z" fill="currentColor"/><text x="448" y="278" font-size="10.5" fill="currentColor" opacity="0.9">a requirement fails</text><rect x="490" y="56" width="252" height="132" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="616" y="76" text-anchor="middle" font-size="11.5" font-weight="bold" fill="currentColor">template&lt;class Iter, class Val&gt;</text><text x="616" y="94" text-anchor="middle" font-size="11.5" fill="currentColor">Val sum(Iter b, Iter e, Val init)</text><text x="616" y="114" text-anchor="middle" font-size="10.5" fill="currentColor">while (b != e) {</text><text x="616" y="128" text-anchor="middle" font-size="10.5" fill="currentColor">init = init + *b; ++b;</text><text x="616" y="142" text-anchor="middle" font-size="10.5" fill="currentColor">}</text><text x="616" y="162" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.85">an instantiation exists only</text><text x="616" y="176" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.85">for the ✓ types — same code as a loop</text><rect x="490" y="256" width="252" height="108" rx="10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 5"/><text x="616" y="278" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">error: static assertion failed:</text><text x="616" y="296" text-anchor="middle" font-size="10.5" fill="currentColor">sum(): Iter must be an</text><text x="616" y="311" text-anchor="middle" font-size="10.5" fill="currentColor">input iterator</text><text x="616" y="336" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.85">the requirement is named —</text><text x="616" y="350" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.85">not a cascade inside the body</text><text x="380" y="388" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.9">static&#95;assert inside the body → hard error naming the requirement</text><text x="380" y="404" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.9">Requires/enable&#95;if in the signature → the overload silently disappears (SFINAE)</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: 'Two advances, chosen by concept',
        problem: '`advance(p, n)` should use `p += n` for random-access iterators and `n` increments otherwise. Select between them in C++11 with `Requires` guards, and trace both calls — plus the failure mode the design must avoid.',
        steps: [
          { label: 'The overloads', text: '`template<class I> Requires<Random_access_iterator<I>()> advance(I& p, int n) { p += n; }` and `template<class I> Requires<Input_iterator<I>() && !Random_access_iterator<I>()> advance(I& p, int n) { while (n--) ++p; }`' },
          { label: '`list<string>::iterator` by 5', text: 'The concept predicate `Random_access_iterator` is `false` for it, so the first overload\'s return type is ill-formed and SFINAE removes it. The second guard evaluates `true && !false` — viable. Result: 5 increments, 5 iterator operations.' },
          { label: '`vector<int>::iterator` (or `double*`) by 5', text: 'Random-access holds, so the first overload is viable; the second guard is `true && !true` — `false` — and that overload is removed. Result: a single `p += 5`, one iterator operation.' },
          { label: 'The failure you must design away', text: 'Drop the `!Random_access_iterator<I>()` complement and the second guard is `true` for a `vector` iterator too: two viable overloads with identical parameter lists, no concept-based tie-breaker in C++11 — the call is **ambiguous**, a compile-time error.' },
        ],
        result: 'Concept selection picks the algorithm, not just the answer: 5 operations versus 1. The complement guard is the C++11 programmer\'s responsibility — the price of emulating what the language did not yet order automatically.',
      },
      {
        title: 'Working through making concepts concrete',
        problem: 'Emulating concepts in C++11. Your task: build a concept as a `constexpr bool` predicate from traits and expression tests.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: build a concept as a `constexpr bool` predicate from traits and expression tests. Write down the guarantee you will rely on — for this chapter it is: C++11 emulates concepts with `constexpr bool` predicates assembled from traits and SFINAE expression tests (`Has_plus`).' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename In> int total(In first, In last);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — contrast `static_assert` checking (diagnosis) with `enable_if`/`Requires` selection (overload removal) — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: `static_assert` checks — it diagnoses at instantiation; `enable_if`/`Requires` selects — it removes the overload. Two different jobs. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: C++11 emulates concepts with `constexpr bool` predicates assembled from traits and SFINAE expression tests (`Has_plus`). Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'C++11 emulates concepts with `constexpr bool` predicates assembled from traits and SFINAE expression tests (`Has_plus`).',
      '`static_assert` checks — it diagnoses at instantiation; `enable_if`/`Requires` selects — it removes the overload. Two different jobs.',
      'Overloads distinguished only by concept guards need hand-complemented conditions (`&& !Random_access_iterator<I>()`) because C++11 has no constraint ordering.',
    ],
    quiz: [
      {
        q: '`static_assert`-based concept checking differs from `enable_if` because `static_assert`:',
        options: ['removes the function from the overload set', 'reports a clear error at instantiation but leaves the overload set unchanged', 'checks the requirements at run time', 'can only be used inside class templates'],
        answer: 1,
        explanation: 'It is diagnosis after selection: the template has already been chosen when the assertion fires — it cannot send the call elsewhere.',
      },
      {
        q: 'Why does the weaker `advance` overload in C++11 need `Requires<Input_iterator<I>() && !Random_access_iterator<I>>` rather than just `Requires<Input_iterator<I>>`?',
        options: ['C++11 has no automatic constraint ordering: for a random-access iterator both overloads would be viable with identical parameter lists, and the call would be ambiguous', 'Because `!` is required syntax inside `enable_if`', 'Because random-access iterators fail the `Input_iterator` predicate', 'To make the template compile faster'],
        answer: 0,
        explanation: 'With both guards true for a random-access iterator, ordinary overload resolution finds no tie-breaker between constraints — the complement makes the guards complementary over the whole domain.',
      },
      {
        q: 'For a type `X` with no `operator+`, the predicate `Has_plus<X>()` returns `false` because:',
        options: ['the program is ill-formed and compilation stops', 'an exception is thrown at run time', 'the linker discards X', 'the expression probe\'s substitution fails, so by SFINAE only the catch-all overload survives — returning the failure marker'],
        answer: 3,
        explanation: 'The probe has two overloads: one selected by `decltype` when `x + y` compiles, and a catch-all returning the `substitution_failure` type; failure of substitution is not an error, so the question has an answer.',
      },
      {
        q: "Given `template<bool B, typename T = void> using Requires = std::enable_if<B,T>;`, the declaration `Requires<Arithmetic<T>()> double algo(T);` is:",
        options: ['a function returning `bool`', 'a function template enabled only for class types', 'a function template whose return type exists only when the concept holds — otherwise the overload is removed from consideration', 'a preprocessor macro'],
        answer: 2,
        explanation: 'When the predicate is false, substituting into `enable_if` fails, the declaration is ill-formed, and SFINAE drops it from the candidate set — selection by concept.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Concept-based overloading resolution',
        blocks: [
          {
            kind: 'para',
            body: "The problem `enable_if` solves is deeper than error messages. With unconstrained templates, *every* signature matches every call, so when two generic implementations of the same operation exist, overload resolution has only conversion ranking to separate them — and among exact matches that ranking is degenerate. The result is the classic \"ambiguous call\" for anything but a strictly better conversion. Concepts restore a meaningful partial order on templates: implementations become candidates only for the argument types that satisfy their requirements, and a *more constrained* implementation can be preferred over a less constrained one. The C++11 emulation achieves the first half (candidacy) through SFINAE and misses the second half (preference), which is exactly where its pain lives.",
          },
          {
            kind: 'theorem',
            heading: 'Constrained overload selection (C++11 emulation)',
            body: "Let $f_1$ and $f_2$ be function templates with identical parameter lists, distinguished only by their constraint guards $C_1$ and $C_2$ — boolean expressions over concept predicates placed in the return type via `Requires`. For a call with deduced argument type $A$: **(1) Removal.** During template argument deduction each guard is evaluated; if it yields `false`, the substitution of the deduced arguments into the signature fails, and by the SFINAE rule $f_i$ is silently removed from the candidate set. **(2) No ordering.** If both guards hold, both candidates are exact matches on identical parameter lists and ordinary overload resolution finds **no tie-breaker between constraints**: the call is ambiguous unless the guards were constructed to be *complementary* over the intended domain ($C_1(A) \\Rightarrow \\lnot C_2(A)$ for all $A$). **(3) C++20 subsumption (for contrast).** If $C_1 \\Rightarrow C_2$ holds as a syntactic implication over atomic predicates and conjunctions, and $C_2 \\Rightarrow C_1$ does not, then $f_1$ is *more constrained* and is preferred — the tie-breaker the emulation cannot provide.",
          },
          {
            kind: 'derivation',
            heading: 'The iterator lattice and the advance guards',
            body: "Define the lattice $\\mathrm{Input} \\subset \\mathrm{Forward} \\subset \\mathrm{Bidirectional} \\subset \\mathrm{RandomAccess}$, each level adding requirements: Forward adds multi-pass copyability, Bidirectional adds `--p`, RandomAccess adds `p + n`, `p += n`, `p[n]`, and `p < q`. Consequently $\\mathrm{RandomAccess}(I) \\Rightarrow \\mathrm{Input}(I)$ — the lattice is a chain of implications. The `advance` family must place its fast implementation on the top of the lattice and its fallback below: the fast guard is the atomic predicate $R = \\mathrm{RandomAccess}(I)$, and the fallback guard must be $\\mathrm{Input}(I) \\land \\lnot R$. Complementarity now follows structurally: for every $I$, exactly one of $R$, $\\mathrm{Input}(I) \\land \\lnot R$ holds, so exactly one candidate survives — selection is total. Had the fallback been guarded by $\\mathrm{Input}(I)$ alone, then for a random-access $I$ both $R$ and $\\mathrm{Input}(I)$ would hold, both candidates would be exact matches, and by part (2) of the theorem the call would be ambiguous.",
          },
          {
            kind: 'example',
            heading: 'Tracing three calls, with costs',
            body: "Take `advance(p, 1000)`. **`p` a `list<int>::iterator`:** $R$ is false — the fast overload is removed; the fallback guard is true, so 1000 increments execute: 1000 iterator operations, $O(n)$. **`p` a `double*`:** $R$ is true — the fast overload is viable; the fallback guard is $\\mathrm{Input} \\land \\lnot R = \\mathrm{true} \\land \\mathrm{false}$, so it is removed; one `+=` executes: 1 operation, $O(1)$. **The design error:** if the `!R` complement is forgotten, the `double*` call sees two viable candidates; the compiler reports ambiguity at the *call site*, a thousand miles from either definition. The concept selection is not cosmetic — it chooses between algorithms whose complexities differ by a factor of $n$.",
          },
          {
            kind: 'remark',
            body: "The emulation's fragility has a precise technical name: C++11 partial ordering of function templates compares *parameter types*, and two overloads whose parameters are identical differ only in an invented return type — `enable_if<A>` versus `enable_if<B>` are unrelated types to partial ordering, whatever $A$ and $B$ mean. Worse, two *logically* equivalent guards written differently — `Input_iterator<I>() && Bidirectional_iterator<I>()` versus `Bidirectional_iterator<I>()` — are not recognized as related at all, so an accidental overlap between guards silently becomes ambiguity for some argument types. The concept is also written twice: once in the guard, once (as a `static_assert` or comment) in the body, and the two copies can drift. C++20 subsumption repairs all three defects at once by reading the boolean structure of `requires`-clauses instead of comparing types.",
          },
          {
            kind: 'application',
            heading: 'Rules for surviving the C++11 emulation',
            body: "**(1)** Order every overload family most-constrained first, and make each weaker guard the explicit complement of everything above it ($\\ldots \\land \\lnot R$). **(2)** Name each concept once as a `constexpr` predicate and reuse that name verbatim — never retype the underlying expression, or two spellings of one concept will fail to match. **(3)** Use `static_assert` when diagnosis is the whole job (no alternative implementation exists); use `Requires` only when selection among overloads is intended. **(4)** Record the axioms as comments beside the predicates: the compiler cannot check $a + b = b + a$, but the next maintainer must know it is assumed. These habits are exactly what the language later automated — which is the strongest evidence they were the right habits.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- 24.5
  {
    sectionId: 'cpp-ch24-s5',
    readingTime: 4,
    intro: "The chapter closes with Stroustrup's rules of thumb for genericity. Their common thread: **genericity is earned** — by lifting in small steps from code that works, by stating requirements minimally and completely, by testing with types that have nothing beyond what the concept requires, and by writing down the semantics the type system cannot express.",
    objectives: [
      'Apply the lift-don\'t-rewrite method to a concrete algorithm',
      'Explain concept minimality and completeness, and how minimal types expose hidden requirements',
      'Recognize over-requiring idioms such as ordered iteration where inequality suffices',
    ],
    concepts: [
      {
        term: 'Lift, don\'t rewrite',
        kind: 'method',
        statement: "Begin with a concrete, correct algorithm; generalize by **removing one accident at a time**, re-checking after each lift. A leap straight to \"fully general\" code usually smuggles in unmet assumptions from the original — the four small lifts of 24.2 are the model.",
        detail: 'Each lift must leave a nameable requirement behind; if you cannot name what you now need, you have not finished the lift.',
      },
      {
        term: 'Minimality and completeness',
        kind: 'method',
        statement: "A concept should name **exactly** what the algorithm uses: if you can drop a requirement and the algorithm still compiles and works, it was not a requirement; if the algorithm uses an operation the concept does not mention, the concept is incomplete and the documentation lies.",
        detail: 'Minimal concepts maximize the set of usable types — the entire economic point of genericity.',
      },
      {
        term: 'Test with minimal types',
        kind: 'method',
        statement: "Verify generic code against types that satisfy the concept **and nothing more** — a hand-rolled iterator, not `vector`'s full-featured one. Hidden dependencies surface as errors on the minimal type instead of as silent limits on your users.",
        detail: "`list` iterators are the standard probe: they famously lack `<`, so any accidental ordering requirement is caught immediately.",
      },
      {
        term: 'Concepts document, axioms carry meaning',
        kind: 'insight',
        statement: "Write the axioms next to the predicates — the compiler cannot check $a + b = b + a$, but the reader, the tester, and (in a concepts-aware compiler) the optimizer all rely on them. Code that documents its assumptions is the deliverable of generic programming.",
        detail: 'In C++11 the axiom lives in a comment beside the `constexpr` predicate; the design intent survives unchanged into language-supported concepts.',
      },
      {
        term: 'Shipping rule for generic programming',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **Lift in small steps from concrete, correct code; every lift must leave its requirement explicit and named.** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
    ],
    examples: [
      {
        title: 'A requirements audit of find',
        problem: 'Audit this almost-generic algorithm against the concept rules: which requirement is accidental, and what does removing it cost?',
        steps: [
          { label: 'The suspect', text: '`template<class Iter, class T> Iter find(Iter first, Iter last, const T& val) { while (first < last && *first != val) ++first; return first; }` — plausible, and subtly wrong.' },
          { label: 'Probe with a minimal type', text: 'Test with `list<int>` iterators — types that satisfy input iteration and nothing more. It fails: `list<int>::iterator` has no `<`. The accidental requirement is exposed exactly where the advice predicted.' },
          { label: 'Diagnose', text: 'Termination never needed *ordering* of positions — only *inequality*. The `<` was a habit carried over from index-based loops, over-requiring an ordered (random-access-style) position and excluding lists, streams, and any node-based traversal.' },
          { label: 'Fix and verify', text: 'Change to `while (first != last && *first != val) ++first;`. Searching `{27, 51, 34, 96}` for 34: three termination checks (`!=`), two value comparisons, two increments — returns the position of 34 (index 2); the requirement drops from "ordered iterator" to plain input iterator.' },
        ],
        result: 'One operator swapped, one requirement deleted, a whole family of sequences admitted. That trade — an audit finding an unneeded capability and replacing it with a stated, weaker one — is the daily work of generic programming.',
      },
      {
        title: 'Reviewing generic programming code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the lift-don’t-rewrite method to a concrete algorithm.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Lift in small steps from concrete, correct code; every lift must leave its requirement explicit and named.' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `template<typename In> int total(In first, In last);`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: explain concept minimality and completeness, and how minimal types expose hidden requirements. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: Keep concepts minimal (drop what is not needed) and complete (name everything used), and test with minimal types — `list` iterators expose accidental ordering.' },
        ],
        result: 'The review ends with findings tied to reasons: Lift in small steps from concrete, correct code; every lift must leave its requirement explicit and named. Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      'Lift in small steps from concrete, correct code; every lift must leave its requirement explicit and named.',
      'Keep concepts minimal (drop what is not needed) and complete (name everything used), and test with minimal types — `list` iterators expose accidental ordering.',
      'Record axioms beside the predicates; and remember the fold\'s contract: `init = 0` sums, `init = 1` multiplies.',
    ],
    quiz: [
      {
        q: 'A `find` written with `first < last` instead of `first != last`:',
        options: ['over-requires ordered iterators — it rejects list iterators, although termination needs only inequality', 'is more efficient for all containers', 'is required by the standard library interface', 'has no effect on which sequences can use it'],
        answer: 0,
        explanation: 'The ordering of positions was never needed for the algorithm\'s meaning — `!=` needs only an input iterator, `<` demands random-access-style positions.',
      },
      {
        q: 'Why test generic code with types that satisfy the concept and nothing more?',
        options: ['To make compilation faster', 'Because minimal types optimize better at run time', 'To catch hidden requirements the concept does not document — the real dependency leaks out as an error on the minimal type', 'Because the standard library requires it'],
        answer: 2,
        explanation: 'Full-featured types silently satisfy requirements you never declared; only a minimal type makes an undocumented dependency visible.',
      },
      {
        q: 'A requirement that you can drop while the algorithm still compiles and works:',
        options: ['must be kept for safety', 'was not a requirement — concepts should be minimal, naming only what is needed', 'indicates the algorithm is incorrect', 'should always be converted into an axiom'],
        answer: 1,
        explanation: 'Minimality: every requirement you can delete widens the family of usable types at no cost — keep exactly what the algorithm uses.',
      },
    ],
  },
]

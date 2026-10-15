import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup, The C++ Programming Language, 4th ed. — Chapter 28
// Metaprogramming — sections 28.1 … 28.8 (ids cpp-ch28-s1 … cpp-ch28-s8)
// Reference: TC++PL 4e pp. 779–826 (C++11-era techniques, with the later
// fold-expression and if-constexpr completions flagged where relevant).
// ============================================================================

export const cppCh28Content: SectionContent[] = [
  // ------------------------------------------------------------------ 28.1
  {
    sectionId: 'cpp-ch28-s1',
    readingTime: 5,
    intro: "Metaprogramming is programming whose subject is the program itself: code that computes new types, compile-time constants, or decisions about which definitions exist, all before the program ever runs. C++ does this with the template system — a language of types and constant expressions running inside the compiler — plus constexpr, which lets ordinary functions execute at compile time. Done well, it moves work and errors from run time to compile time: a units system that rejects meters-plus-seconds, a tuple whose element types are computed, a standard library that adapts itself to its element types. Done badly, it produces incomprehensible error messages and hour-long builds. This chapter is about doing it well.",
    objectives: [
      "Explain what can be computed at compile time: values, types, and which definitions exist",
      "Recognize metaprogramming already at work in the standard library: `tuple`, `array`, type traits, container internals",
      "Weigh the benefits — type safety, performance, expressiveness — against compile-time cost and opaque error messages",
    ],
    concepts: [
      {
        term: 'Metaprogramming',
        kind: 'definition',
        statement: "**Metaprogramming is computation about programs.** A C++ metaprogram computes types, values and code selections during compilation; its results are ordinary declarations and constants in the final program. Templates (types and non-type arguments, specialization) and constant expressions (`constexpr`) are the machinery.",
        detail: "The two halves: computing values — where a `constexpr` function reads like normal code — and computing types or selecting declarations, where templates are unavoidable. Stroustrup's aim for the chapter is techniques that raise the level of abstraction without losing type safety or performance.",
      },
      {
        term: 'Three kinds of compile-time result',
        kind: 'insight',
        statement: "**A metaprogram can produce (1) a value, (2) a type, or (3) a choice among declarations.** Values come from `constexpr` functions and template constants; types come from type functions (templates with nested `::type`); declaration selection comes from overload resolution steered by `enable_if` and friends.",
        detail: "The whole chapter is an elaboration of these three: sections 28.2–28.3 build the value and type machinery, 28.4 selects declarations, 28.5–28.6 assemble heterogeneous lists of arbitrary length, and 28.7 puts it all to work catching physical unit errors.",
      },
      {
        term: 'Templates are Turing-complete',
        kind: 'insight',
        statement: "**Template instantiation with recursion and specialization can compute anything an ordinary program can — with compile time and compiler memory as the only budget.** Compilers therefore cap instantiation depth (commonly around 1024 levels) as a safety valve.",
        detail: "Turing-completeness is a fact, not a license: the chapter's recurring discipline is to use the simplest mechanism that computes what you need, because compile time is real time and deep template machinery taxes every rebuild of every user.",
      },
      {
        term: 'The standard library as showcase',
        kind: 'insight',
        statement: "**You metaprogram every day without writing templates:** `std::tuple` is a compile-time heterogeneous list; `std::array` takes its size as a template argument; `std::common_type` computes arithmetic result types; every container's internal machinery (allocator handling, iterator traits, `enable_if`-based constraints) is metaprogramming working for you.",
        detail: "The chapter rebuilds small versions of exactly these artifacts — a tuple, units, conditional definitions — to show that the machinery inside the standard library is learnable, not magic.",
      },
      {
        term: 'Introduction: the working contract',
        kind: 'definition',
        statement: '**Introduction.** Computation at compile time. You can claim this section when you can explain what can be computed at compile time: values, types, and which definitions exist — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 28 (Metaprogramming); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'A first metaprogram: compile-time factorial',
        problem: 'Compute 10! during compilation, and make any wrong constant refuse to compile.',
        steps: [
          { label: 'The constexpr function', text: "`constexpr int fac(int n) { return n > 1 ? n * fac(n - 1) : 1; }` — called with constant arguments, the compiler evaluates the recursion right there; when called with run-time arguments, the same code runs at run time. One definition, two lives." },
          { label: 'Use it in a constant expression', text: "`static_assert(fac(10) == 3628800);` — the compiler performs the whole recursion while instantiating nothing and emitting no code. A wrong value is a compile-time error, not a failed test." },
          { label: 'Know the limits', text: "The machine arithmetic, not the technique, is the limit: `fac(12) == 479001600` is the largest that fits a 32-bit `int` (2,147,483,647); `fac(13)` would need 6,227,020,800 and overflows." },
          { label: 'Why not a template?', text: "A `Factorial<N>` template computes the same number (section 28.3) but only for constant N and at the cost of N instantiations — the `constexpr` function is the chapter's preferred tool for pure value computation." },
        ],
        result: "fac(10) = 3,628,800, computed entirely by the compiler; the `static_assert` documents the value and enforces it forever.",
      },
      {
        title: 'Working through introduction',
        problem: 'Computation at compile time. Your task: explain what can be computed at compile time: values, types, and which definitions exist.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: explain what can be computed at compile time: values, types, and which definitions exist. Write down the guarantee you will rely on — for this chapter it is: Metaprogramming computes values, types and declaration choices at compile time via templates and `constexpr`.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<bool B, typename T, typename F> struct Pick;` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — recognize metaprogramming already at work in the standard library: `tuple`, `array`, type traits, container internals — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: The payoff: errors like adding meters to seconds become compile-time errors, and work moves from run time to build time. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Metaprogramming computes values, types and declaration choices at compile time via templates and `constexpr`. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Metaprogramming computes values, types and declaration choices at compile time via templates and `constexpr`.',
      'The payoff: errors like adding meters to seconds become compile-time errors, and work moves from run time to build time.',
      'The costs are real: compile time, template-depth limits, and famously impenetrable error messages — prefer the simplest mechanism that works.',
    ],
    quiz: [
      {
        q: 'Metaprogramming in C++ computes, at compile time:',
        options: ['only numeric constants', 'types, values, and which declarations exist', 'only template instantiations', 'machine code directly from diagrams'],
        answer: 1,
        explanation: 'The three results of template metaprogramming: a value, a type, or a selection among declarations.',
      },
      {
        q: 'Which is a genuine benefit of metaprogramming argued in this chapter?',
        options: ['Simpler error messages', 'Faster linking', 'It removes the need for templates', 'Dimension errors like adding meters to seconds are rejected before the program runs'],
        answer: 3,
        explanation: 'Compile-time checking of program invariants — units being the flagship example of section 28.7 — is the benefit worth paying for.',
      },
      {
        q: "The statement `static_assert(fac(10) == 3628800);` demonstrates that:",
        options: ['fac runs in a separate thread', 'assertions replace exceptions', 'the compiler evaluated the call before the program exists', 'the value is checked at run time'],
        answer: 2,
        explanation: 'A static_assert requires a constant expression: the compiler must have computed fac(10) already, and a wrong value would break the build.',
      },
    ],
  },
  // ------------------------------------------------------------------ 28.2
  {
    sectionId: 'cpp-ch28-s2',
    readingTime: 7,
    intro: "An ordinary function takes values and returns values. A type function takes types — and possibly values — and returns types or values computed from them. They are the vocabulary of metaprogramming: given an iterator, what is the type it points to? Given two numeric types, what should their arithmetic use? C++ expresses type functions as class templates with nested names, made palatable by alias templates; the standard library ships a whole library of them in `<type_traits>` and `iterator_traits`. This section builds a few by hand to see the machinery, then points at the standard ones.",
    objectives: [
      "Define type functions as templates with nested `::type` or `::value` members, and call them through alias templates",
      "Implement type functions with template specialization, for example removing references",
      "Use the standard type functions from `<type_traits>` and `iterator_traits`",
    ],
    concepts: [
      {
        term: 'Type function',
        kind: 'definition',
        statement: "**A type function maps types (and values) to types or values, computed at compile time by a template.** The canonical shapes: a class template with a nested `type` (a 'metafunction returning a type') or a nested `value` ('returning a value').",
        detail: "You have used one since day one: `iterator_traits<Iter>::value_type` maps any iterator to its element type. Type functions are how generic code asks questions about its arguments that cannot be asked any other way.",
      },
      {
        term: 'Specialization is the computation',
        kind: 'method',
        statement: "**Write the primary template as the default case; write partial specializations as pattern-matched cases.** The compiler chooses the most specialized match — the pattern matching IS the program:\n```\ntemplate<typename T> struct Remove_ref { using type = T; };\ntemplate<typename T> struct Remove_ref<T&>  { using type = T; };\ntemplate<typename T> struct Remove_ref<T&&> { using type = T; };\n```",
        detail: "`Remove_ref<int&>::type` matches the `T&` case with `T = int`, so it is `int`. This is exactly how the standard `std::remove_reference` (and much of `<type_traits>`) is built.",
      },
      {
        term: 'Alias templates make type functions usable',
        kind: 'notation',
        statement: "**An alias template hides the `typename ... ::type` noise:**\n```\ntemplate<typename T>\nusing Remove_ref_t = typename Remove_ref<T>::type;\n```\nNow `Remove_ref_t<int&>` is a plain type name users can write without remembering the `typename`.",
        detail: "The standard library adopted this convention in C++14 — `std::remove_reference_t`, `std::enable_if_t` — precisely because it makes type functions read like functions. This is one of the few metaprogramming habits with no downside.",
      },
      {
        term: 'Type predicates',
        kind: 'definition',
        statement: "**A type predicate is a type function returning a truth value.** Class form: a nested `value` of type `std::integral_constant<bool,b>` (e.g. `std::is_integral<T>::value`); function form: `template<typename A, typename B> constexpr bool Same() { return std::is_same<A,B>::value; }`.",
        detail: "The function form reads better in conditions — `if (Same<T,int>())` — and Stroustrup prefers it in presentation code; the class form is what composes with other templates and what `<type_traits>` ships.",
      },
      {
        term: 'The standard repertoire',
        kind: 'insight',
        statement: "**Reach for `<type_traits>` before writing your own:** `remove_reference`, `decay`, `conditional<B,A,F>`, `common_type`, `enable_if` — plus `iterator_traits` for iterators, a specialization-backed facade that works for class iterators and raw pointers alike.",
        detail: "`std::conditional<std::is_signed<T>::value, long, unsigned>::type` picks a type; `std::common_type<int,double>::type` is `double`. Hand-rolled versions exist in this chapter to teach the mechanism, not to replace the library.",
      },
    ],
    examples: [
      {
        title: "A type function in use: sum any iterator's elements",
        problem: "Write one `sum(first, last)` that returns a variable of the iterator's element type — working for arrays, `vector`, `list` — and check it on real data.",
        steps: [
          { label: 'Go through a type function', text: "`template<typename Iter> using Value_type = typename std::iterator_traits<Iter>::value_type;` — an alias template naming the element type of any iterator." },
          { label: 'Use it like any type', text: "`template<typename Iter> Value_type<Iter> sum(Iter first, Iter last) { Value_type<Iter> s{}; while (first != last) s += *first++; return s; }`" },
          { label: 'Instantiate with a pointer', text: "`int a[] {1,2,3,4}; auto s = sum(a, a+4);` — here `Iter` is `int*`, which has no members, so `Iter::value_type` would not compile. But `iterator_traits<int*>` is a specialization that yields `int`, so `s` starts at 0 and the answer is 10." },
          { label: 'Instantiate with a class iterator', text: "The same function called with `std::vector<double>` iterators returns a `double` summing the elements — no overloads, no run-time type machinery, one template." },
        ],
        result: "A single generic `sum`: the accumulator's type is computed by a type function, transparently for pointers and class iterators alike.",
      },
      {
        title: 'Working through type functions',
        problem: 'Computing on types. Your task: define type functions as templates with nested `::type` or `::value` members, and call them through alias templates.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: define type functions as templates with nested `::type` or `::value` members, and call them through alias templates. Write down the guarantee you will rely on — for this chapter it is: Type functions are templates with nested `::type` (types) or `::value` (values); alias templates (`using X_t = ...`) are their user-friendly spelling.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<bool B, typename T, typename F> struct Pick;` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — implement type functions with template specialization, for example removing references — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: The computation is specialization: primary template as default, partial specializations as pattern-matched cases. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Type functions are templates with nested `::type` (types) or `::value` (values); alias templates (`using X_t = ...`) are their user-friendly spelling. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Type functions are templates with nested `::type` (types) or `::value` (values); alias templates (`using X_t = ...`) are their user-friendly spelling.',
      'The computation is specialization: primary template as default, partial specializations as pattern-matched cases.',
      'The standard library ships the common cases in `<type_traits>` and `iterator_traits` — use them before rolling your own.',
    ],
    quiz: [
      {
        q: "`std::iterator_traits<int*>::value_type` is:",
        options: ['`int`', '`int*`', 'nothing — pointers have no members', '`void`'],
        answer: 0,
        explanation: "A specialization of the trait for raw pointers yields the pointed-to type, which is exactly why generic algorithms work on arrays.",
      },
      {
        q: "With `template<typename T> using R = typename Remove_ref<T>::type;` (the two-specialization version), what does `R<int&>` name?",
        options: ['`int&`', '`int`', '`int&&`', 'a compile error'],
        answer: 1,
        explanation: 'The `T&` partial specialization matches with `T = int`, and its `type` is the bare `int`.',
      },
      {
        q: "Which specialization matches `Remove_ref<int&&>`?",
        options: ['the primary template', 'the `T&` partial specialization', 'the `T&&` partial specialization', 'none — it is an error'],
        answer: 2,
        explanation: 'The rvalue-reference pattern is the most specialized match for an rvalue reference type.',
      },
      {
        q: 'By the standard library convention, a type predicate exposes its result as:',
        options: ['a static data member named `result`', 'a nested `::value` usable in constant expressions (derived from `std::integral_constant`)', 'the return of `operator()`', 'a defaulted template parameter'],
        answer: 1,
        explanation: '`std::is_integral<T>::value` and friends are `integral_constant`s that work in template arguments, static_asserts and other constant expressions.',
      },
    ],
  },
  // ------------------------------------------------------------------ 28.3
  {
    sectionId: 'cpp-ch28-s3',
    readingTime: 7,
    intro: "A metaprogram needs selection and repetition just like any program, but the machine it runs on is the compiler: selection is specialization matching, and iteration is recursion that terminates at a specialization. Modern C++ softens this — constexpr functions give ordinary `if` and loops for value computation, and `if constexpr` selects at compile time inside normal-looking code. The chapter's discipline throughout is economy: use the simplest mechanism that computes what you need, and stop.",
    objectives: [
      "Select between types with specializations, `std::conditional`, and `if constexpr`",
      "Drive compile-time recursion to a base-case specialization, and say what stops it",
      "Choose the simplest mechanism: constexpr functions for values, templates only when types are involved",
    ],
    concepts: [
      {
        term: 'Compile-time selection',
        kind: 'method',
        statement: "**To choose a type by a compile-time condition, specialize on the condition**\n```\ntemplate<bool B, typename T, typename F> struct Select { using type = T; };\ntemplate<typename T, typename F> struct Select<false, T, F> { using type = F; };\n```\nor use `std::conditional<B,T,F>::type`, or — inside a function — `if constexpr (B) ... else ...`, which discards the untaken branch entirely.",
        detail: "`Select<(sizeof(T) > 4), T, long>::type` grows the arithmetic type when `T` is small: a decision made during compilation with zero run-time trace. `if constexpr` is the modern, readable spelling for code selection; the class template remains the tool when a TYPE is the result.",
      },
      {
        term: 'Compile-time recursion',
        kind: 'method',
        statement: "**A template refers to itself with a smaller argument; a specialization halts the chain**\n```\ntemplate<unsigned long N>\nstruct Factorial { static constexpr unsigned long value = N * Factorial<N-1>::value; };\ntemplate<>\nstruct Factorial<0> { static constexpr unsigned long value = 1; };\n```",
        detail: "Instantiating `Factorial<5>` forces `Factorial<4>`, which forces `Factorial<3>`... down to the base case `Factorial<0>`; then the values fold back up. The recursion happens in the compiler's instantiation machinery — the program contains only the final constants.",
      },
      {
        term: 'The cost of unbounded recursion',
        kind: 'insight',
        statement: "**Every level of template recursion is a class the compiler must instantiate, check and (usually) emit metadata for.** Compilers cap instantiation depth — commonly around 1024 — and deep chains inflate compile times and memory even when legal.",
        detail: "A compile-time loop over a million values belongs in a `constexpr` function (a loop, not a recursion); template recursion is for when the loop's counter must steer TYPES. The chapter treats compile-time cost as a design constraint, not an afterthought.",
      },
      {
        term: 'Values first, templates when forced',
        kind: 'law',
        statement: "**Stroustrup's rule of thumb: compute values with constexpr functions; use template metaprogramming when — and only when — the result must be a type or must select a declaration.**",
        detail: "A factorial as a constexpr function is shorter, reads like code, and reuses the same code at run time for a dynamic `n`. The template version exists to be composed with other templates — that is its only excuse.",
      },
      {
        term: 'Control Structures: the working contract',
        kind: 'definition',
        statement: '**Control Structures.** Compile-time selection and recursion. You can claim this section when you can select between types with specializations, `std::conditional`, and `if constexpr` — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 28 (Metaprogramming); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'Unroll the metaprogram: Factorial<5>',
        problem: "List the instantiations the compiler performs for `Factorial<5>::value`, and the values computed.",
        steps: [
          { label: 'Force the chain', text: "`Factorial<5>::value` writes `5 * Factorial<4>::value`; to know that, the compiler must instantiate `Factorial<4>`, which needs `Factorial<3>`, then `Factorial<2>`, then `Factorial<1>`, then `Factorial<0>`." },
          { label: 'The base case stops it', text: "`Factorial<0>` is a full specialization; its `value` is the literal 1, so instantiation ends there: five recursive classes plus one base class." },
          { label: 'Fold back up', text: "Working back outward: `Factorial<1>::value` = 1·1 = 1; `Factorial<2>` = 2·1 = 2; `Factorial<3>` = 3·2 = 6; `Factorial<4>` = 4·6 = 24; `Factorial<5>` = 5·24 = 120." },
          { label: 'Verify at zero cost', text: "`static_assert(Factorial<5>::value == 120);` — and the emitted program contains the single constant 120, no classes, no calls." },
        ],
        result: "`Factorial<5>::value == 120`: five recursive instantiations, one base case, one constant in the binary.",
      },
      {
        title: 'Working through control structures',
        problem: 'Compile-time selection and recursion. Your task: select between types with specializations, `std::conditional`, and `if constexpr`.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: select between types with specializations, `std::conditional`, and `if constexpr`. Write down the guarantee you will rely on — for this chapter it is: Selection at compile time: specializations for types, `std::conditional`, or `if constexpr` for code.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<bool B, typename T, typename F> struct Pick;` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — drive compile-time recursion to a base-case specialization, and say what stops it — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Repetition at compile time is recursion that must terminate at a base-case specialization — and every level costs the compiler. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Selection at compile time: specializations for types, `std::conditional`, or `if constexpr` for code. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "Selection at compile time: specializations for types, `std::conditional`, or `if constexpr` for code.",
      "Repetition at compile time is recursion that must terminate at a base-case specialization — and every level costs the compiler.",
      "Reach for constexpr functions when a value is wanted; templates only when types or declaration choices are the result.",
    ],
    quiz: [
      {
        q: 'What terminates compile-time recursion in a template like `Factorial<N>`?',
        options: ['the return statement', 'constexpr depth limits', 'a full specialization supplying the base case', 'the destructor'],
        answer: 2,
        explanation: 'A full (or partial) specialization that does not refer to itself is the stop condition; depth limits only catch the failure to provide one.',
      },
      {
        q: '`std::conditional<false, int, double>::type` is:',
        options: ['`int`', '`bool`', '`void`', '`double`'],
        answer: 3,
        explanation: 'Conditional picks the third argument when the condition is false — here `double`.',
      },
      {
        q: "You need a compile-time VALUE (not a type) from simple recursive arithmetic. The chapter's advice is to first reach for:",
        options: ['template specializations', 'a constexpr function', 'macro expansion', 'a virtual function'],
        answer: 1,
        explanation: 'Values are what constexpr functions are for; the template version only pays when types or declaration selection are involved.',
      },
      {
        q: "Instantiating `Factorial<1000>` with only `Factorial<0>` as a base case will most likely:",
        options: ['loop forever at run time', "hit the compiler's template instantiation depth limit (or consume enormous compile time)", 'produce 0', 'be fine — a thousand small classes is nothing'],
        answer: 1,
        explanation: '999 levels of instantiation is at or beyond most compilers\' default depth caps, and is slow even when allowed.',
      },
      // PYQ-pattern — compile-time selection with conditional (rephrased)
      {
        q: "What is `T` below?\n```cpp\n#include <type_traits>\nusing T = std::conditional<true, int, double>::type;\n```",
        options: ["`double`, because both branches are instantiated into the result", "`int`, because the boolean selects the first branch at compile time", "The alias is ill-formed: types cannot be computed", "`bool`, because the condition value leaks into the result"],
        answer: 1,
        explanation: "Step 1: The data given is a type alias computed from a boolean and two candidate types. Step 2: The governing rule is compiler-time selection: `conditional<B, T, F>::type` names `T` when `B` is true and `F` otherwise, with no runtime branch involved. Step 3: Tracing the computation, the condition is `true`, so the nested `type` names `int`, and `T` becomes a plain alias for `int`. Step 4: The distractors fail because selection discards the unused branch from the result, type computation is the entire subject of metaprogramming, and the boolean never becomes part of the named type. Step 5: Therefore `T` is `int`."
      }
    ],
  },
  // ------------------------------------------------------------------ 28.4
  {
    sectionId: 'cpp-ch28-s4',
    readingTime: 7,
    intro: "Sometimes the right move is not choosing between two definitions but having a definition exist only when a condition holds — switching a declaration on or off. That is conditional definition, and enable_if is its tool: a type function whose member `type` exists only when its predicate is true, so a template written in terms of it silently vanishes from the overload set when the predicate fails. Before C++20 concepts this was the standard library's universal constraining mechanism, and it still explains how constrained interfaces work under the hood.",
    objectives: [
      "Implement `enable_if` from two template declarations and explain why the missing member disqualifies the overload",
      "Constrain function templates with `Enable_if` in the return type",
      "Relate `enable_if` to SFINAE and to the C++20 `requires` clause that supersedes it",
    ],
    concepts: [
      {
        term: 'Conditional definition',
        kind: 'definition',
        statement: "**A declaration that exists only if a compile-time predicate is satisfied.** The mechanism: `enable_if<B, T>` has a member `type` if and only if `B` is true — when `B` is false there simply is no such member, and any use of it is an error.",
        detail: "Used bare, that error stops the compilation. Used inside a template signature, the error happens during overload-resolution substitution — which, by the SFINAE rule, removes the candidate instead of failing the build.",
      },
      {
        term: 'The implementation',
        kind: 'method',
        statement: "**Two declarations are the whole trick**\n```\ntemplate<bool B, typename T = void>\nstruct enable_if {};                    // no ::type when B is false\n\ntemplate<typename T>\nstruct enable_if<true, T> { using type = T; };\n```\nThe primary template defines nothing; the specialization for `true` defines the member.",
        detail: "The standard library also provides the palatable alias `std::enable_if_t<B,T>`, and the chapter defines its own: `template<bool B, typename T = void> using Enable_if = typename enable_if<B,T>::type;` — used below exactly as the book uses it.",
      },
      {
        term: 'SFINAE',
        kind: 'law',
        statement: "**Substitution Failure Is Not An Error:** during overload resolution, if substituting the deduced arguments into a candidate's SIGNATURE fails, that candidate is quietly removed from consideration. The program is ill-formed only if no candidate survives.",
        detail: "This C++ rule from the earliest standards is what `enable_if` rides on: the failure must occur in the immediate context of the substitution (a missing member like `enable_if<false>::type`), not in the function body — body errors remain ordinary errors.",
      },
      {
        term: 'Constrained overloads',
        kind: 'method',
        statement: "**Use `Enable_if` as the return type to give each overload a condition**\n```\ntemplate<typename T>\nconstexpr Enable_if<std::is_signed<T>::value, T>\nabs(T x) { return x < 0 ? -x : x; }\n\ntemplate<typename T>\nconstexpr Enable_if<std::is_unsigned<T>::value, T>\nabs(T x) { return x; }\n```",
        detail: "For any `T`, at most one of these declarations exists — no ambiguity is possible, and code like `abs(p)` for a pointer `p` is rejected instead of silently doing something strange. An `Enable_if` can also ride in an extra defaulted template parameter when the return type is unavailable (constructors, conversions).",
      },
      {
        term: 'After enable_if',
        kind: 'insight',
        statement: "**C++20 concepts and `requires` clauses say the same thing readably:** `template<typename T> requires std::is_signed_v<T> T abs(T x);` — and the standard library has switched its constraints machinery accordingly.",
        detail: "Knowing `enable_if` still matters: it is what runs under `std::enable_if`-based libraries you will read for a decade, and it explains precisely why a template 'does not exist' for certain arguments.",
      },
    ],
    examples: [
      {
        title: 'Selecting abs at compile time',
        problem: "With only the signed and unsigned `Enable_if` overloads above, trace the calls `abs(-7)`, `abs(7u)` and `abs(3.5)`.",
        steps: [
          { label: 'abs(-7)', text: "`T = int`; `std::is_signed<int>::value` is true, so the first overload exists and computes `-(-7) = 7`. For the second overload the substitution fails — `enable_if<false>` has no `::type` — and SFINAE drops it silently." },
          { label: 'abs(7u)', text: "`T = unsigned`; the roles swap: the unsigned overload exists and returns 7u unchanged (an unsigned value is never negative), and the signed one vanishes." },
          { label: 'abs(3.5)', text: "`T = double` — `is_signed<double>` is false (it is a floating type, not a signed integer) and `is_unsigned<double>` is false as well. BOTH overloads disappear, and the call is ill-formed: a clear error at the call site, before any code runs." },
          { label: 'Extending the set', text: "Adding `template<typename T> constexpr Enable_if<std::is_floating_point<T>::value, T> abs(T x) { return x < 0 ? -x : x; }` completes the family — conditional definitions compose side by side." },
        ],
        result: "Each call finds exactly one abs; a type nobody thought of fails compilation with 'no matching function' rather than computing nonsense at run time.",
      },
      {
        title: 'Working through conditional definition: enable_if',
        problem: 'Selecting declarations by predicate. Your task: implement `enable_if` from two template declarations and explain why the missing member disqualifies the overload.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: implement `enable_if` from two template declarations and explain why the missing member disqualifies the overload. Write down the guarantee you will rely on — for this chapter it is: `enable_if<B,T>::type` exists only when `B` is true; used in a template signature, its absence removes the overload from consideration.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<bool B, typename T, typename F> struct Pick;` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — constrain function templates with `Enable_if` in the return type — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: SFINAE — substitution failure in the immediate context of a candidate signature drops the candidate — is the rule that makes conditional definition work. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `enable_if<B,T>::type` exists only when `B` is true; used in a template signature, its absence removes the overload from consideration. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "`enable_if<B,T>::type` exists only when `B` is true; used in a template signature, its absence removes the overload from consideration.",
      'SFINAE — substitution failure in the immediate context of a candidate signature drops the candidate — is the rule that makes conditional definition work.',
      'C++20 `requires` clauses express the same constraints readably; `Enable_if` remains the machinery to understand.',
    ],
    quiz: [
      {
        q: '`enable_if<false, T>` is a class with:',
        options: ['no member `type` — so using it in a template signature is a substitution failure', 'a member `type` equal to `T`', 'a member `type` equal to `void`', 'a static assert that fires'],
        answer: 0,
        explanation: 'The primary template is empty; only the `true` specialization defines `type`. Absence of the member is the entire mechanism.',
      },
      {
        q: 'SFINAE means that during overload resolution:',
        options: ["all template errors are ignored", "a substitution failure in a candidate's signature quietly drops that candidate from the overload set", 'substitution happens after linking', 'the first overload declared always wins'],
        answer: 1,
        explanation: 'Failure in the immediate context of substitution removes only that candidate; a hard error occurs just if no candidate survives.',
      },
      {
        q: "With only the signed and unsigned `Enable_if` abs overloads from the section, the call `abs(3.5)`:",
        options: ['calls the signed version, truncating to 3', 'calls the unsigned version', 'fails to compile — no viable function', 'is ambiguous'],
        answer: 2,
        explanation: '`double` is neither signed-integer nor unsigned-integer: both overloads vanish and the call is ill-formed at compile time.',
      },
      {
        q: 'In C++20, the readable replacement for `Enable_if`-style constraints is:',
        options: ['virtual functions', 'the `requires` clause and concepts', 'preprocessor macros', 'run-time dispatch'],
        answer: 1,
        explanation: '`template<typename T> requires Predicate<T>` states the constraint directly; the standard library has moved to it.',
      },
    ],
  },
  // ------------------------------------------------------------------ 28.5
  {
    sectionId: 'cpp-ch28-s5',
    readingTime: 8,
    intro: "A tuple is the canonical metaprogram: a heterogeneous list whose length and element types are known only at compile time, so only the template system can build it. The design insight is to treat the tuple as a recursive data structure — head plus tail — exactly like a Lisp list, with each tail stored as a base-class subobject. One declaration and one specialization give storage, construction and copying for lists of any length; access functions then peel heads off by recursion. std::tuple is this idea at industrial strength.",
    objectives: [
      'Define a tuple as a recursive head-and-tail template terminated by an empty base case',
      'Explain why storing the tail as a base-class subobject gives correct layout and what the empty-base optimization buys',
      'Access element N by recursive descent through the base classes',
    ],
    concepts: [
      {
        term: 'Tuple as compile-time list',
        kind: 'definition',
        statement: "**A tuple is an ordered heterogeneous sequence whose length is part of its type:** `Tuple<int,double,char>` — three elements, no more, no less. Variadic template parameters make the length a template argument list.",
        detail: "Where a `vector` is a run-time list of one type, a tuple is a compile-time list of many types: it can never grow, and every element's type and location are known to the compiler while building the program.",
      },
      {
        term: 'The recursive definition',
        kind: 'method',
        statement: "**Head plus tail, with the tail as base class**\n```\ntemplate<typename... Ts> struct Tuple;              // primary declaration\n\ntemplate<typename T, typename... Rest>\nstruct Tuple<T, Rest...> : Tuple<Rest...> {         // a head plus the tail\n    T head;\n    constexpr Tuple(const T& t, const Rest&... rest)\n        : Tuple<Rest...>(rest...), head{t} { }\n};\n\ntemplate<> struct Tuple<> { };                      // the empty tuple: base case\n```",
        detail: "`Tuple<int,double,char>` is a head `int` attached to `Tuple<double,char>`, which is a head `double` attached to `Tuple<char>`, which is a head `char` attached to the empty `Tuple<>`. Construction peels the head off the argument list and forwards the rest down the same chain.",
      },
      {
        term: 'Inheritance as storage',
        kind: 'insight',
        statement: "**The tail IS a base-class subobject of the tuple — the class hierarchy and the list structure are the same object.** Each element lives in its own class, and the empty-base optimization makes empty tails free: `Tuple<char>` can be exactly one byte, because `Tuple<>` adds nothing.",
        detail: "This is the same economy `std::tuple` exploits: stateless element types (empty comparators, empty allocators) occupy no storage when they sit in base subobjects.",
      },
      {
        term: 'Access by recursive descent',
        kind: 'method',
        statement: "**To reach element N, cast down to the N-th base and take its head**\n```\ntemplate<unsigned N>\nstruct Get {                                        // the descent\n    template<typename T, typename... Rest>\n    static constexpr auto& get(Tuple<T, Rest...>& t)\n    { return Get<N-1>::get(static_cast<Tuple<Rest...>&>(t)); }\n};\n\ntemplate<>\nstruct Get<0> {                                    // the head\n    template<typename T, typename... Rest>\n    static constexpr T& get(Tuple<T, Rest...>& t) { return t.head; }\n};\n```",
        detail: "`Get<1>::get(t)` casts to the base (dropping one head), then `Get<0>` peels the next one. Every offset is a compile-time constant, so the recursion unrolls to plain member access on a known subobject.",
      },
      {
        term: 'From ours to std::tuple',
        kind: 'insight',
        statement: "**`std::make_tuple(1, 2.5, 'x')` builds one; `std::get<1>(t)` reads element 1; `std::get<double>(t)` reads by type; C++17 structured bindings `auto [i, d, c] = t;` destructure it.** The standard version adds perfect forwarding, swap, comparison, `std::tie` — but the storage and access ideas are exactly the ones above.",
        detail: "Stroustrup's point in building a small tuple first: what looks like magic in the library is two templates and one specialization. The library's work is polish, not different machinery.",
      },
    ],
    figures: [
      {
        caption: "The recursive layout of `Tuple<int, double, char>`. Each level stores one `head` and derives from its own tail; construction forwards the remaining arguments down the chain and the empty `Tuple<>` — which stores nothing thanks to the empty-base optimization — terminates it. `Get<0>` peels the outermost head; `Get<N>` first casts down to the N-th base class, then peels.",
        svg: `<svg viewBox="0 0 760 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Recursive tuple layout: nested head and tail boxes descending to an empty tuple"><defs><marker id="c28" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><rect x="170" y="30" width="440" height="70" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/><text x="182" y="52" font-size="15" fill="currentColor">Tuple&lt;int, double, char&gt;</text><rect x="182" y="60" width="128" height="32" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.5"/><text x="246" y="81" text-anchor="middle" font-size="15" fill="currentColor">int head = 1</text><text x="330" y="81" font-size="15" fill="currentColor" opacity="0.8">+ base subobject (tail) ↓</text><line x1="650" y1="100" x2="650" y2="124" stroke="currentColor" stroke-width="2" marker-end="url(#c28)"/><rect x="170" y="124" width="440" height="70" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/><text x="182" y="146" font-size="15" fill="currentColor">Tuple&lt;double, char&gt;</text><rect x="182" y="154" width="128" height="32" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.5"/><text x="246" y="175" text-anchor="middle" font-size="15" fill="currentColor">double head = 2.5</text><text x="330" y="175" font-size="15" fill="currentColor" opacity="0.8">+ base subobject (tail) ↓</text><line x1="650" y1="194" x2="650" y2="218" stroke="currentColor" stroke-width="2" marker-end="url(#c28)"/><rect x="170" y="218" width="440" height="70" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/><text x="182" y="240" font-size="15" fill="currentColor">Tuple&lt;char&gt;</text><rect x="182" y="248" width="128" height="32" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.5"/><text x="246" y="269" text-anchor="middle" font-size="15" fill="currentColor">char head = x</text><text x="330" y="269" font-size="15" fill="currentColor" opacity="0.8">+ base subobject (tail) ↓</text><line x1="650" y1="288" x2="650" y2="312" stroke="currentColor" stroke-width="2" marker-end="url(#c28)"/><rect x="170" y="312" width="440" height="38" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="390" y="336" text-anchor="middle" font-size="15" fill="currentColor">Tuple&lt;&gt; — empty: no members, no storage (EBO)</text><text x="160" y="80" text-anchor="end" font-size="14" fill="currentColor" opacity="0.85">Get&lt;0&gt;::get(t) → 1</text><line x1="164" y1="76" x2="180" y2="76" stroke="currentColor" stroke-width="1.2"/><text x="160" y="174" text-anchor="end" font-size="14" fill="currentColor" opacity="0.85">Get&lt;1&gt;::get(t) → 2.5</text><line x1="164" y1="170" x2="180" y2="170" stroke="currentColor" stroke-width="1.2"/><text x="160" y="268" text-anchor="end" font-size="14" fill="currentColor" opacity="0.85">Get&lt;2&gt;::get(t) → x</text><line x1="164" y1="264" x2="180" y2="264" stroke="currentColor" stroke-width="1.2"/><text x="700" y="118" font-size="13" fill="currentColor" opacity="0.75" text-anchor="middle">base</text><text x="700" y="212" font-size="13" fill="currentColor" opacity="0.75" text-anchor="middle">base</text><text x="700" y="306" font-size="13" fill="currentColor" opacity="0.75" text-anchor="middle">base</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Build and probe a three-element tuple',
        problem: "Construct `Tuple<int,double,char> t{1, 2.5, 'x'};` and describe its storage, then retrieve each element.",
        steps: [
          { label: 'Construction cascades', text: "The constructor takes `(1, 2.5, 'x')`, stores `head = 1` (an `int`), and forwards `(2.5, 'x')` to the base `Tuple<double,char>`; that one stores `2.5` and forwards `('x')`; `Tuple<char>` stores `x` and forwards `()` to the empty `Tuple<>` — the chain ends." },
          { label: 'Layout', text: "Three subobjects stack up: a `Tuple<>` (empty — the empty-base optimization charges nothing for it) inside `Tuple<char>` inside `Tuple<double,char>` inside `Tuple<int,double,char>`. The class hierarchy and the list are literally the same shape." },
          { label: 'Access', text: "`Get<0>::get(t)` peels the outer head: 1, an `int`. `Get<1>::get(t)` casts down to the `Tuple<double,char>` subobject and peels: 2.5, a `double`. `Get<2>::get(t)` descends twice and peels: `x`, a `char`." },
          { label: 'Out-of-range is a type error', text: "`Get<3>::get(t)` tries to descend past `Tuple<>`, which matches no `Tuple<T,Rest...>` pattern — there is no such subobject, and the program does not compile. The length encoded in the type is enforced by the type system, not by a run-time size check." },
        ],
        result: "t holds exactly 1, 2.5 and 'x' in three stacked subobjects; every access compiles to member selection at a compile-time-known offset.",
      },
      {
        title: 'Working through a compile-time list: tuple',
        problem: 'Tuples built from templates. Your task: define a tuple as a recursive head-and-tail template terminated by an empty base case.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: define a tuple as a recursive head-and-tail template terminated by an empty base case. Write down the guarantee you will rely on — for this chapter it is: A tuple is a compile-time list: head member plus tail base class, terminated by the empty `Tuple<>` specialization.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<bool B, typename T, typename F> struct Pick;` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain why storing the tail as a base-class subobject gives correct layout and what the empty-base optimization buys — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Inheritance doubles as storage — the tail is a subobject, and the empty-base optimization makes empty tails free. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A tuple is a compile-time list: head member plus tail base class, terminated by the empty `Tuple<>` specialization. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'A tuple is a compile-time list: head member plus tail base class, terminated by the empty `Tuple<>` specialization.',
      'Inheritance doubles as storage — the tail is a subobject, and the empty-base optimization makes empty tails free.',
      'Element access is a recursive descent through base classes; out-of-range access fails to compile.',
    ],
    quiz: [
      {
        q: '`Tuple<int,double,char>` inherits directly from:',
        options: ['`Tuple<double,char>`', '`Tuple<int,double>`', '`Tuple<char>`', '`Tuple<>`'],
        answer: 0,
        explanation: 'The tail — everything after the head — is the direct base class: here `Tuple<double,char>`.',
      },
      {
        q: 'The recursion of the tuple design ends at:',
        options: ['`Tuple<void>`', 'a null pointer', 'the empty specialization `Tuple<>`', '`std::tuple`'],
        answer: 2,
        explanation: '`Tuple<>` stores nothing and derives from nothing: it is the base case that stops both construction and access.',
      },
      {
        q: "`Get<1>::get(t)` on `Tuple<int,double,char> t{1,2.5,'x'}` returns:",
        options: ['1', '2.5', "'x'", 'the tail as a tuple'],
        answer: 1,
        explanation: 'One cast down to the base drops the int head; `Get<0>` then peels the double.',
      },
      {
        q: 'Thanks to the empty-base optimization, `sizeof(Tuple<char>)` can be as small as:',
        options: ['2 × sizeof(char)', 'sizeof(void*)', 'sizeof(int)', 'sizeof(char) — the empty `Tuple<>` base adds nothing'],
        answer: 3,
        explanation: 'An empty base subobject need not occupy storage, so the whole stack collapses to the single char.',
      },
    ],
  },
  // ------------------------------------------------------------------ 28.6
  {
    sectionId: 'cpp-ch28-s6',
    readingTime: 7,
    intro: "A function that must take any number of arguments of any types needs a mechanism beyond fixed parameter lists: the variadic template, whose ellipsis declares a parameter pack that absorbs zero or more arguments. Packs are expanded by an ellipsis after a pattern — the heart of the feature — and because a pack has no first element, you process it by recursion, peeling one argument at a time. Together with perfect forwarding, variadic templates are how `emplace`, `make_shared`, `make_tuple` and `thread` take arbitrary argument lists without losing type information on the way in.",
    objectives: [
      'Declare, pass and expand parameter packs with the ellipsis',
      'Process packs head-first with recursion plus an empty overload, and size them with `sizeof...`',
      'Forward packs intact with `std::forward<Args>(args)...`, and simplify accumulation with C++17 fold expressions',
    ],
    concepts: [
      {
        term: 'Parameter pack and expansion',
        kind: 'definition',
        statement: "**`template<typename T, typename... Tail> void f(T head, Tail... tail)` declares a pack; the pattern followed by `...` expands it.** In `f(tail...)` the pattern is `tail` — it becomes the comma-separated list of the remaining arguments.",
        detail: "Expansion works on any pattern containing the pack: `g(h(args)...)` applies h to each argument and passes the results; `std::forward<Args>(args)...` forwards each argument with its own type. The ellipsis is not a loop — it is a pattern rewrite the compiler performs textually, keeping every type.",
      },
      {
        term: 'Peeling recursion',
        kind: 'method',
        statement: "**A pack has no first element, so peel: process the head, recurse on the tail, and let an empty overload close the chain**\n```\ntemplate<typename T, typename... Tail>\nvoid f(T head, Tail... tail)\n{\n    g(head);         // do something to the head\n    f(tail...);      // pass the rest on\n}\n\nvoid f() { }         // the empty pack: nothing to do\n```",
        detail: "Every nonempty call peels exactly one argument and recurses with a pack one shorter; the zero-argument overload ends the descent. This idiom — the book's canonical variadic pattern — is also exactly how the tuple constructor of the previous section consumes its arguments.",
      },
      {
        term: 'Forwarding a pack',
        kind: 'method',
        statement: "**A wrapper takes the pack by forwarding reference and re-expands it through `std::forward`**\n```\ntemplate<typename C, typename... Args>\nvoid emplace_back(C& c, Args&&... args)\n{\n    c.emplace_back(std::forward<Args>(args)...);\n}\n```\nEach argument keeps its value category and exact type across the boundary.",
        detail: "This is the pattern inside `std::make_shared`, `std::make_tuple` and `std::thread`: constructor arguments travel from the caller to a far-away construction site with zero copies and zero information loss.",
      },
      {
        term: 'sizeof... and folds',
        kind: 'insight',
        statement: "**`sizeof...(args)` is the number of elements in the pack — a compile-time constant. And C++17 fold expressions collapse the whole recursion into one expression:** `(v + ... + 0)` sums, `(f(args), ...)` calls `f` on each argument.",
        detail: "TC++PL 4e predates folds (C++17); its C++11 answer to 'do this to every argument' is the peeling recursion above. Both live side by side in modern code — folds for accumulation, peeling when each step needs its own function body.",
      },
      {
        term: 'Variadic Templates: the working contract',
        kind: 'definition',
        statement: '**Variadic Templates.** Packs and folds. You can claim this section when you can declare, pass and expand parameter packs with the ellipsis — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 28 (Metaprogramming); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'sum() by fold and by recursion',
        problem: "Compute `sum(1, 2, 3, 4)` with a fold expression and with the peeling recursion, and check it at compile time.",
        steps: [
          { label: 'The fold', text: "`template<typename... T> constexpr int sum(T... v) { return (v + ... + 0); }` — for arguments 1, 2, 3, 4 this expands right-associated: `1 + (2 + (3 + (4 + 0))) = 10`. The trailing `0` makes the empty call legal: `sum()` is 0." },
          { label: 'The recursion', text: "Peeling form: the first call processes head 1 and recurses with (2,3,4); that call processes 2 and recurses with (3,4); then 3 and (4); then 4 and (); the empty overload ends the chain — four heads, one terminator." },
          { label: 'Compile-time check', text: "`constexpr int s = sum(1, 2, 3, 4); static_assert(s == 10);` — the fold is one constant expression; the recursion unrolls to four nested calls, all gone by the time the program runs." },
          { label: 'Counting', text: "`sizeof...(v)` is 4 here, and after one peel it is 3 — usable anywhere a constant expression is, including `Enable_if` predicates and `static_assert` messages." },
        ],
        result: "Both designs yield 10; the fold writes it as one expression, the recursion as one function per argument plus an empty case.",
      },
      {
        title: 'Working through variadic templates',
        problem: 'Packs and folds. Your task: declare, pass and expand parameter packs with the ellipsis.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: declare, pass and expand parameter packs with the ellipsis. Write down the guarantee you will rely on — for this chapter it is: A parameter pack absorbs zero or more arguments; `pattern...` expands it, preserving every type and value category.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<bool B, typename T, typename F> struct Pick;` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — process packs head-first with recursion plus an empty overload, and size them with `sizeof...` — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Process packs by peeling: head now, tail recursively, empty overload as the terminator — `f(tail...)` is the descent. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A parameter pack absorbs zero or more arguments; `pattern...` expands it, preserving every type and value category. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'A parameter pack absorbs zero or more arguments; `pattern...` expands it, preserving every type and value category.',
      'Process packs by peeling: head now, tail recursively, empty overload as the terminator — `f(tail...)` is the descent.',
      'Forward packs with `std::forward<Args>(args)...`; accumulate them with C++17 folds like `(v + ... + 0)`.',
    ],
    quiz: [
      {
        q: "Inside `template<typename T, typename... Tail> void f(T head, Tail... tail)`, the call `f(tail...)` passes:",
        options: ['only the last argument', 'a vector of the arguments', 'the remaining arguments, comma-expanded', 'a single parameter pack object'],
        answer: 2,
        explanation: 'The ellipsis expands the pattern `tail` into the comma-separated list of the arguments not yet consumed.',
      },
      {
        q: 'After the first call of the peeling recursion with five arguments, `sizeof...(tail)` is:',
        options: ['5', '0', '4', 'not a constant expression'],
        answer: 2,
        explanation: 'One head was peeled; four arguments remain in the pack, and `sizeof...` reports it at compile time.',
      },
      {
        q: 'The fold expression `(v + ... + 0)` for v = 1, 2, 3, 4 evaluates as:',
        options: ['(((0+1)+2)+3)+4', '1+(2+(3+(4+0)))', '(1+2+3+4) × 0', '0, since the pack is empty'],
        answer: 1,
        explanation: 'A binary right fold associates to the right around the init value 0 — which is also what makes sum() well-formed.',
      },
      {
        q: '`std::forward<Args>(args)...` expands to:',
        options: ['forwarding only the first argument', 'one call forwarding the whole pack as a single argument', 'a run-time loop over the arguments', 'one `std::forward` call per argument, each with its own type'],
        answer: 3,
        explanation: 'The pattern is `std::forward<Args>(args)` — repeated once per pack element with the matching type.',
      },
    ],
  },
  // ------------------------------------------------------------------ 28.7
  {
    sectionId: 'cpp-ch28-s7',
    readingTime: 8,
    intro: "The chapter's showpiece is a small library where the type system does physics: quantities carry their dimensions as template parameters, so a program that adds meters to seconds — or passes seconds to a function expecting meters — is rejected at compile time. The exponents of meters, kilograms and seconds become three int template parameters; multiplication and division add and subtract them; addition demands exact equality. The real-world justification is famous and expensive: in 1999 NASA lost the $125M Mars Climate Orbiter because one team's code produced pound-force seconds where another expected newton-seconds.",
    objectives: [
      'Model dimensions as integer template parameters on `Unit`, and wrap magnitudes in `Quantity`',
      'Define `+` and `*` whose signatures themselves enforce dimensional analysis',
      'Appreciate both the power and the admitted limits of the book\'s toy units system',
    ],
    concepts: [
      {
        term: 'Unit as a type',
        kind: 'definition',
        statement: "**Dimensions become template arguments**\n```\ntemplate<int M, int K, int S>\nstruct Unit {                     // a unit with dimensions M, K, S\n    static constexpr int m  = M;  // exponent of meters\n    static constexpr int kg = K;  // exponent of kilograms\n    static constexpr int s  = S;  // exponent of seconds\n};\n\ntemplate<typename U>\nstruct Quantity {                 // a magnitude in unit U\n    double v;\n    constexpr explicit Quantity(double d) : v{d} { }\n};\n```",
        detail: "`Quantity<Unit<1,0,0>>` is a length; `Quantity<Unit<0,0,1>>` a time; `Quantity<Unit<1,0,-1>>` a velocity, meters per second — seconds to the power −1. The dimension of every value is written in its type, where the compiler can check it.",
      },
      {
        term: 'Addition: identical units only',
        kind: 'method',
        statement: "**The signature IS the rule**\n```\ntemplate<int M, int K, int S>\nconstexpr Quantity<Unit<M,K,S>>\noperator+(Quantity<Unit<M,K,S>> a, Quantity<Unit<M,K,S>> b)\n{\n    return Quantity<Unit<M,K,S>>{a.v + b.v};\n}\n```\nBoth arguments must instantiate the SAME unit type — otherwise no `operator+` exists at all.",
        detail: "`2.0s + 2.0m` is not a wrong answer; it is no function to call. The mismatch between `Unit<0,0,1>` and `Unit<1,0,0>` cannot even be expressed as an instantiation of this template.",
      },
      {
        term: 'Multiplication: exponents add',
        kind: 'law',
        statement: "**Products combine dimensions the way physics does — by adding exponents**\n```\ntemplate<int M1,int K1,int S1, int M2,int K2,int S2>\nconstexpr Quantity<Unit<M1+M2, K1+K2, S1+S2>>\noperator*(Quantity<Unit<M1,K1,S1>> a, Quantity<Unit<M2,K2,S2>> b)\n{\n    return Quantity<Unit<M1+M2, K1+K2, S1+S2>>{a.v * b.v};\n}\n```\nDivision (written the same way with subtractions) cancels units symmetrically.",
        detail: "m/s × s is m: `Unit<1,0,-1>` times `Unit<0,0,1>` instantiates `Unit<1+0, 0+0, -1+1> = Unit<1,0,0>`. The dimensional algebra runs entirely in the template argument lists — pure compile-time integer arithmetic, for free.",
      },
      {
        term: 'The payoff, at compile time',
        kind: 'insight',
        statement: "**Quantities multiply and add correctly while the program is still being compiled**\n```\nconstexpr Quantity<Unit<0,0,1>>  t{2.0};    // 2 s\nconstexpr Quantity<Unit<1,0,-1>> v{2.0};   // 2 m/s\nconstexpr auto d = v * t;                  // a length: 4 m\nstatic_assert(d.v == 4.0);\n\nd + v;    // error: Unit<1,0,0> vs Unit<1,0,-1> — no operator+\n```",
        detail: "Everything here — the multiplication, the unit arithmetic, the comparison — is a constant expression. The compiler has just checked a physics equation before emitting a single instruction.",
      },
      {
        term: 'Limits of the toy',
        kind: 'insight',
        statement: "**Stroustrup is explicit that this is a demonstration, not an industrial units library.** It has no scaled or prefixed units (m vs km vs inch all collapse to 'length'), no angle or currency dimensions, no dimension names in error messages, no I/O beyond raw doubles.",
        detail: "A production system represents dimension sets as compile-time lists and scale factors as `std::ratio`s. The chapter's point stands regardless: the techniques of 28.2–28.6 are enough to make dimensional errors uncompilable — the rest is engineering.",
      },
    ],
    examples: [
      {
        title: 'distance = velocity × time, checked by the compiler',
        problem: "With the library above, evaluate `v * t` for v = 3 m/s and t = 2 s; then explain why adding a time to the result cannot compile.",
        steps: [
          { label: 'Types in play', text: "v is `Quantity<Unit<1,0,-1>>` (m/s) and t is `Quantity<Unit<0,0,1>>` (s) — their dimensions live in their types." },
          { label: 'The product instantiates', text: "`operator*` is instantiated with M1=1, K1=0, S1=−1, M2=0, K2=0, S2=1. The result type is `Unit<1+0, 0+0, −1+1>` — that is, `Unit<1,0,0>`: meters." },
          { label: 'Value', text: '3.0 × 2.0 = 6.0, so d is 6 m; because everything is `constexpr`, the whole computation can happen during compilation, and `static_assert(d.v == 6.0)` proves it.' },
          { label: 'A units bug, made uncompilable', text: "`d + t;` would need an `operator+` with `Unit<1,0,0>` equal to `Unit<0,0,1>` in both arguments — no such instantiation exists, so the compiler rejects the line at the call site. The pound-force-second/newton-second class of error (the Mars Climate Orbiter loss) becomes a red squiggle before the program exists." },
        ],
        result: 'd = 6 m with all dimensional algebra done in template arguments; mixing units does not type-check at all.',
      },
      {
        title: 'Working through si units example',
        problem: 'A famous compile-time units system. Your task: model dimensions as integer template parameters on `Unit`, and wrap magnitudes in `Quantity`.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: model dimensions as integer template parameters on `Unit`, and wrap magnitudes in `Quantity`. Write down the guarantee you will rely on — for this chapter it is: Dimensions as template parameters: `Unit<M,K,S>` and `Quantity<U>` put units in the type system where the compiler polices them.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<bool B, typename T, typename F> struct Pick;` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — define `+` and `*` whose signatures themselves enforce dimensional analysis — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: `operator+` exists only between identical units; `operator*` adds exponents — the signatures enforce dimensional analysis. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Dimensions as template parameters: `Unit<M,K,S>` and `Quantity<U>` put units in the type system where the compiler polices them. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Dimensions as template parameters: `Unit<M,K,S>` and `Quantity<U>` put units in the type system where the compiler polices them.',
      '`operator+` exists only between identical units; `operator*` adds exponents — the signatures enforce dimensional analysis.',
      'The book admits the system is a demonstration — no prefixes, no scaled units — but dimensional errors become compile-time errors, which is the whole idea.',
    ],
    quiz: [
      {
        q: '`Quantity<Unit<1,0,-1>>` represents:',
        options: ['a time in seconds', 'a mass in kilograms', 'a velocity in m/s', 'an acceleration in m/s²'],
        answer: 2,
        explanation: 'Meters to the first power and seconds to the −1: meters per second.',
      },
      {
        q: 'The type of `v * t`, with v of `Unit<1,0,-1>` and t of `Unit<0,0,1>`, is:',
        options: ['`Quantity<Unit<1,0,0>>`', '`Quantity<Unit<1,0,-1>>`', '`Quantity<Unit<0,0,1>>`', '`double`'],
        answer: 0,
        explanation: 'Multiplication adds exponents: seconds cancel (−1+1 = 0), leaving pure meters.',
      },
      {
        q: 'The expression `2.0s + 2.0m` fails because:',
        options: ['`operator+` is not defined for doubles', 'no `operator+` instantiation exists for two different Unit types', '`Quantity` cannot hold different values', 'the units library forbids SI base units in sums'],
        answer: 1,
        explanation: 'The signature demands the same `Unit<M,K,S>` on both arguments; two different units leave no candidate function.',
      },
      {
        q: 'Which limitation does the book itself acknowledge for this units system?',
        options: ['It cannot multiply quantities', 'It does not handle scaled or prefixed units such as km vs m', 'It only works at run time', 'It requires operator overloading that C++14 removed'],
        answer: 1,
        explanation: 'No prefixes, no scale factors, no derived-name sugar — a demonstration of techniques, not an industrial library.',
      },
    ],
  },
  // ------------------------------------------------------------------ 28.8
  {
    sectionId: 'cpp-ch28-s8',
    readingTime: 5,
    intro: "The chapter closes with Stroustrup's own advice, and its flavor is restraint: metaprogramming is a means to correctness and expressiveness, not an end in itself. The rules compress the chapter's hard-won habits — check them before writing your next template, and especially before writing someone else's next template for them.",
    objectives: [
      'Adopt rules that keep metaprogramming worth its costs',
      'Recognize when plain constexpr functions or library traits suffice',
      'Use `static_assert` and unit-style typing to catch errors before run time',
    ],
    concepts: [
      {
        term: 'Let the compiler find the errors',
        kind: 'insight',
        statement: "**Prefer code that fails to compile over code that fails at run time.** Anything expressible as a type rule — dimensional analysis, extent compatibility, iterator requirements — is checked free of charge on every build.",
        detail: 'The units example is the pattern: encoding the invariant in types turned a class of run-time mistakes into "no matching function." What can be a type, should be a type.',
      },
      {
        term: 'constexpr first for values',
        kind: 'method',
        statement: "**Compute values with constexpr functions; use templates when — and only when — the result must be a type or must select a declaration.**",
        detail: "A `constexpr` factorial reads like code, reuses at run time, and costs one function; a template factorial costs N instantiations and only works for constants. The same test applies to every 'should this be a template?' decision.",
      },
      {
        term: 'Use the standard machinery',
        kind: 'method',
        statement: "**Reach for `<type_traits>`, `iterator_traits`, `conditional`, `common_type` and friends before writing your own**, and `Enable_if` (today: `requires`) for conditional definition.",
        detail: 'The library versions are tested, documented and understood by readers; a hand-rolled `Remove_ref` in application code is a smell unless the standard one is somehow lacking.',
      },
      {
        term: 'Contain the complexity',
        kind: 'insight',
        statement: "**Hide metaprogramming behind narrow, conventional interfaces.** Users of your tuple write `get<1>(t)`, never `Get<1>::get(t)`; the machinery stays an implementation detail. Excessive template trickery is a design smell, and deep instantiation chains are a build-time tax on everyone downstream.",
        detail: 'Aim `static_assert`s with readable messages at the entry of a deep metaprogram, so misuse fails with one clear line instead of a screen of template gibberish.',
      },
      {
        term: 'Test with the compiler itself',
        kind: 'method',
        statement: "**`static_assert` plus `constexpr` objects give a zero-run-time test suite for metaprograms:** `static_assert(fac(10) == 3628800)` documents the expected value and enforces it on every compile.",
        detail: 'Compile-time assertions cannot be skipped, flake, or run out of order — they run before the program exists. They are also documentation that cannot go stale.',
      },
    ],
    examples: [
      {
        title: 'The advice applied: a units-checked kinematics function',
        problem: "Write $d = vt + \\tfrac{1}{2}at^2$ so that it cannot be called with mismatched units, and evaluate it for v = 3 m/s, a = 2 m/s², t = 2 s.",
        steps: [
          { label: 'Types first', text: "v is `Quantity<Unit<1,0,-1>>`, a is `Quantity<Unit<1,0,-2>>`, t is `Quantity<Unit<0,0,1>>`; and t*t is `Unit<0,0,2>` — square seconds come out of the same multiplication machinery." },
          { label: 'The expression', text: "`auto d = v*t + Quantity<Unit<0,0,0>>{0.5} * a * t * t;` — the half is dimensionless (`Unit<0,0,0>`), products add exponents left to right, and the final `+` demands both sides be `Unit<1,0,0>`: meters. They are, or it does not compile." },
          { label: 'Numbers', text: 'vt = 3 × 2 = 6 m; a t² = 2 × 4 = 8; half of that is 4 m; total d = 6 + 4 = 10 m — with every intermediate unit checked by the compiler as the expression instantiates.' },
          { label: 'What misuse looks like', text: "Passing a time where a velocity is expected does not produce a wrong answer silently — it produces 'no operator+' or 'could not deduce' at the call site. The 1999 Mars Climate Orbiter class of bug is now a compile error." },
        ],
        result: 'd = 10 m, dimensionally guaranteed: the signature of each operator is a proof that the units line up.',
      },
      {
        title: 'Reviewing metaprogramming code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: adopt rules that keep metaprogramming worth its costs.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Encode invariants in types so the compiler enforces them — the units example is the model.' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `template<bool B, typename T, typename F> struct Pick;`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: recognize when plain constexpr functions or library traits suffice. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: constexpr functions for values, library traits before hand-rolled ones, templates only when types or declaration selection demand them.' },
        ],
        result: 'The review ends with findings tied to reasons: Encode invariants in types so the compiler enforces them — the units example is the model. Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      'Encode invariants in types so the compiler enforces them — the units example is the model.',
      'constexpr functions for values, library traits before hand-rolled ones, templates only when types or declaration selection demand them.',
      'Hide the machinery behind clean interfaces, and use `static_assert` as a free, incorruptible test suite.',
    ],
    quiz: [
      {
        q: "To compute a compile-time value, the chapter's advice says to first try:",
        options: ['a constexpr function', 'macros', 'template specializations', 'an inline assembly loop'],
        answer: 0,
        explanation: 'constexpr functions read like code, cost one function instead of N instantiations, and reuse at run time.',
      },
      {
        q: 'The advice section treats excessive template trickery as:',
        options: ['fine because the compiler optimizes it away', 'a design smell — interfaces should not leak implementation techniques', 'required for portability', 'only a problem in C++98'],
        answer: 1,
        explanation: 'Clever machinery behind clean interfaces is engineering; clever machinery leaking into user code is a smell that taxes every reader and rebuild.',
      },
      {
        q: 'In a metaprogram, `static_assert` acts as:',
        options: ['a compile-time test that documents and checks expected results', 'a run-time safety net', 'a way to silence warnings', 'a substitute for testing I/O code'],
        answer: 0,
        explanation: 'It runs before the program exists, cannot be skipped, and doubles as documentation that cannot go stale.',
      },
    ],
  },
]

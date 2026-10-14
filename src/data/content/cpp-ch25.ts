import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup — The C++ Programming Language, 4th Edition
// Chapter 25: Specialization (Sections 25.1 – 25.4)
// Master study content.
// ============================================================================

export const cppCh25Content: SectionContent[] = [
  // ---------------------------------------------------------------- 25.1
  {
    sectionId: 'cpp-ch25-s1',
    readingTime: 5,
    intro: "A template supplies one general implementation for every argument set — the **primary template**. But the best implementation for all types is often not the best implementation for a specific type: comparing two C-style strings should compare characters, not addresses, and a `vector<bool>` wants bits, not one byte per element. **Specialization** lets the compiler substitute a better definition for chosen template arguments while the user-visible interface stays exactly the same.",
    objectives: [
      "Explain what a specialization overrides and why the primary template alone is not always enough",
      "Identify full and partial specializations and state the priority order among them",
      "Say which template kinds support partial specialization and which must be handled differently",
    ],
    concepts: [
      {
        term: 'Primary template',
        kind: 'definition',
        statement: "The template as originally defined — `template<class T> class Vector { /* ... */ };` — is the **primary**: the definition used for every argument combination not claimed by a specialization. It is deliberately the most general and most conservative implementation.",
        detail: "Everything the template family offers must be expressible through the primary's interface, because that is the interface users write against.",
      },
      {
        term: 'Specialization',
        kind: 'definition',
        statement: "A **specialization** is an alternative definition of a template for a specific set of template argument values, written with an empty `template<>` list (a full specialization) or a reduced parameter list (a partial specialization). The compiler — not the programmer at the call site — selects it by matching the template arguments.",
        detail: "Selection is entirely compile-time: a specialization costs nothing at run time and changes nothing about how users invoke the template.",
      },
      {
        term: 'Why specialize',
        kind: 'insight',
        statement: "The two honest motives are a **better implementation** — bit-packing for `vector<bool>`, `strcmp` for `const char*`, a more efficient algorithm for a type that supports it — and **genuinely different semantics** that the general implementation would silently get wrong (comparing pointers when the user means strings).",
        detail: "A third, technical motive appears in template metaprogramming: a full specialization is the standard way to write the terminating case of a recursive template.",
      },
      {
        term: 'The compile-time analog of overriding',
        kind: 'insight',
        statement: "**Specialization does for templates what virtual overriding does for hierarchies — but selected by type at compile time.** The caller writes the same `less(a, b)` call and gets the implementation the compiler deems best for the actual argument types, with no indirection and no run-time decision.",
        detail: "The price is symmetric too: like a derived class overriding a base, a specialization is extra code that must stay semantically consistent with what it replaces.",
      },
      {
        term: 'Introduction: the working contract',
        kind: 'definition',
        statement: '**Introduction.** Specialization at a glance. You can claim this section when you can explain what a specialization overrides and why the primary template alone is not always enough — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 25 (Specialization); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'The pointer-comparison trap',
        problem: 'The primary `template<class T> bool less(const T& a, const T& b) { return a < b; }` is instantiated for `T = const char*`. The literals "apple" and "zebra" happen to be stored at addresses 0x7ffd0004 and 0x7ffd0000. What does `less("apple", "zebra")` return?',
        steps: [
          { label: 'Primary at work', text: 'With `T = const char*`, the primary compares the two pointer values with `<` — it computes `0x7ffd0004 < 0x7ffd0000`.' },
          { label: 'Pointer arithmetic', text: 'That comparison is `false`: the address holding "apple" is 4 bytes *higher* than the one holding "zebra".' },
          { label: 'The intended meaning', text: 'Alphabetically "apple" < "zebra"; `strcmp("apple", "zebra")` is negative, so the answer a string-comparing `less` must give is `true`.' },
          { label: 'The fix', text: 'A full specialization — `template<> bool less<const char*>(const char* a, const char* b) { return strcmp(a, b) < 0; }` — reclaims the intended semantics with zero changes at call sites.' },
        ],
        result: 'The primary silently compares addresses; a specialization restores the meaning users assume — same call, different (correct) implementation, chosen at compile time.',
      },
      {
        title: 'Working through introduction',
        problem: 'Specialization at a glance. Your task: explain what a specialization overrides and why the primary template alone is not always enough.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: explain what a specialization overrides and why the primary template alone is not always enough. Write down the guarantee you will rely on — for this chapter it is: A template is a family of definitions: the primary covers the general case, specializations override chosen argument sets with the same interface.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename T> struct Traits; template<> struct Traits<char>;` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — identify full and partial specializations and state the priority order among them — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Specialize for better algorithms or representations — or to correct semantics the primary would silently get wrong, as with `less<const char*>`. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A template is a family of definitions: the primary covers the general case, specializations override chosen argument sets with the same interface. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'A template is a family of definitions: the primary covers the general case, specializations override chosen argument sets with the same interface.',
      'Specialize for better algorithms or representations — or to correct semantics the primary would silently get wrong, as with `less<const char*>`.',
      'Selection among the primary and its specializations happens entirely at compile time, from the template arguments alone.',
    ],
    quiz: [
      {
        q: 'The primary `less` above is used with `T = const char*`. What does the call actually compare?',
        options: ['The characters of the two strings, lexicographically', 'The addresses where the two string literals are stored', 'The lengths of the two strings', 'Nothing — the call fails to compile'],
        answer: 1,
        explanation: '`const char*` is a pointer, so the primary\'s `a < b` compares the two addresses — which says nothing about the strings they point to.',
      },
      {
        q: 'A specialization differs from a run-time override mainly because it:',
        options: ['is selected by the dynamic type of an object at run time', 'is selected by matching template arguments at compile time and keeps the primary\'s interface', 'may change the number of function parameters', 'removes the primary template from the program'],
        answer: 1,
        explanation: 'Selection is pattern matching on the template arguments during compilation; the user-visible interface is unchanged.',
      },
      {
        q: 'In template metaprogramming, a full specialization is typically used to:',
        options: ['speed up dynamic dispatch', 'provide the terminating case of a recursive template', 'avoid declaring template parameters', 'convert value parameters to type parameters'],
        answer: 1,
        explanation: 'Recursion over template arguments stops when a full specialization matches — the metaprogramming analog of a base case.',
      },
      {
        q: 'Which is a legitimate motive for specializing, as opposed to just using the primary?',
        options: ['The specialized version compiles faster', 'The argument type admits a better representation or algorithm, or needs different semantics', 'Specializations are required for every template to compile', 'It lets users pick implementations at run time'],
        answer: 1,
        explanation: 'Specialization exists for better algorithms and representations, and for argument sets whose intended semantics differ — never for run-time choice.',
      },
    ],
  },

  // ---------------------------------------------------------------- 25.2
  {
    sectionId: 'cpp-ch25-s2',
    readingTime: 7,
    intro: 'Before you can specialize anything you must know exactly what a template can be parameterized by. C++ offers three kinds of template parameters — types, values, and templates — and three ways to supply arguments: writing them explicitly, relying on defaults, and (for function templates) letting the compiler deduce them from the call. This vocabulary governs everything else in the chapter.',
    objectives: [
      'Classify the three kinds of template parameters and list the legal value-parameter types',
      'Apply the rules for default template arguments across declarations',
      'Explain how function template arguments are deduced and when they must be written explicitly',
    ],
    concepts: [
      {
        term: 'Kinds of template parameters',
        kind: 'definition',
        statement: "A template parameter list can hold three kinds of parameters: **type parameters** (`template<class T>`, equivalently `template<typename T>`), **value parameters** (`template<int N>`, also pointers, references, and `std::nullptr_t`), and **template parameters** (`template<template<class> class C>`), and a single template may mix all three.",
        detail: 'Type parameters consume argument types; value parameters consume compile-time constants; template parameters consume class templates.',
      },
      {
        term: 'Value template arguments',
        kind: 'definition',
        statement: "**A value argument must be a constant expression**: `Buffer<char, 512>` works, `Buffer<char, n>` with a run-time `n` is an error, and `Buffer<char, 512*2>` works because `1024` is still a constant expression. Legal value parameter types: integral and enumeration types, pointers to objects and functions, lvalue references, member pointers, and `std::nullptr_t`.",
        detail: 'Floating-point and class-type value parameters are not allowed in this edition of the language (C++20 later relaxed both). Address arguments must have external linkage.',
      },
      {
        term: 'Default template arguments',
        kind: 'definition',
        statement: "**Defaults** are written with `=`: `template<class T = int, int N = 128> class Buffer { /* ... */ };` makes `Buffer<>` mean `Buffer<int, 128>`. A default may refer to preceding parameters; a given parameter may be given a default only once, and defaults can be added in a later redeclaration of the same template.",
        detail: 'Specializations do not get their own defaults — the defaults of a specialization are those of the primary template.',
      },
      {
        term: 'Template template arguments',
        kind: 'definition',
        statement: "A **template template parameter** is a parameter that is itself a class template: `template<class T, template<class> class C> class X { C<T> c; };`. In this edition the argument must match the pattern exactly, so `std::vector` — really `template<class T, class A = allocator<T>> class vector` — does not match `template<class> class C`; you must write the pattern with its defaulted parameter included (C++17 later relaxed the matching rule).",
        detail: 'Template template parameters let the *structure* of a container, not just its element type, be an argument.',
      },
      {
        term: 'Argument deduction',
        kind: 'method',
        statement: "**Function template arguments are deduced from the call**: `min(2, 3)` deduces `T = int` and instantiates `min<int>`; `min(2.7, 3.1)` deduces `T = double`. When deduction is impossible — `min(2, 3.5)` deduces `T = int` from one argument and `T = double` from the other — write the argument explicitly: `min<double>(2, 3.5)`.",
        detail: 'Deduction applies only to function templates in this edition; class template arguments must be named or defaulted (C++17 later added class template argument deduction).',
      },
    ],
    examples: [
      {
        title: 'Sizing a ring buffer with a value parameter',
        problem: 'Given `template<class T, int N> struct Ring { T buf[N]; int count = 0; };`, compute `sizeof(Ring<char, 512>)` and `sizeof(Ring<double, 100>)`, and decide the legality of `Ring<char, 2*512>` and of `Ring<char, n>` where `n` is an `int` read at run time.',
        steps: [
          { label: 'Ring<char, 512>', text: '512 chars = $512 \\times 1 = 512$ bytes, plus the 4-byte `int` member, gives 516; alignment is 4, so `sizeof` is exactly 516 bytes.' },
          { label: 'Ring<double, 100>', text: '$100 \\times 8 = 800$ bytes plus 4 = 804; alignment 8 rounds up to 808 bytes.' },
          { label: 'Ring<char, 2*512>', text: '`2*512` evaluates to the constant 1024 — still a constant expression, so this is legal and identical in type to `Ring<char, 1024>`.' },
          { label: 'Ring<char, n>', text: 'A value read at run time is not a constant expression — ill-formed, rejected before any code is generated.' },
        ],
        result: 'Value parameters push array sizes into the type: `sizeof` is exact arithmetic (516 and 808 here), and any run-time quantity is refused at the door.',
      },
      {
        title: 'Working through template parameters and arguments',
        problem: 'Type, value and template parameters. Your task: classify the three kinds of template parameters and list the legal value-parameter types.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: classify the three kinds of template parameters and list the legal value-parameter types. Write down the guarantee you will rely on — for this chapter it is: Three parameter kinds: types, values (constant expressions only), and templates.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename T> struct Traits; template<> struct Traits<char>;` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — apply the rules for default template arguments across declarations — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Defaults may refer to earlier parameters, may be added in later declarations, and belong to the primary — specializations inherit them. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Three parameter kinds: types, values (constant expressions only), and templates. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Three parameter kinds: types, values (constant expressions only), and templates.',
      'Defaults may refer to earlier parameters, may be added in later declarations, and belong to the primary — specializations inherit them.',
      'Function template arguments deduce from the call; when deduction conflicts, qualify explicitly (`min<double>(2, 3.5)`).',
    ],
    quiz: [
      {
        q: 'Which of these cannot be a value template parameter in this edition of the language?',
        options: ['`int`', '`char*`', '`double`', '`int&`'],
        answer: 2,
        explanation: 'Floating-point (and class-type) value parameters were not allowed until C++20; integral types, pointers, and references were always legal.',
      },
      {
        q: 'Given `template<class T = int, int N = 128> class Buffer;`, the name `Buffer<>` means:',
        options: ['`Buffer<int, 128>`', '`Buffer<int, 0>`', 'an incomplete type until arguments are given', '`Buffer<void*, 128>`'],
        answer: 0,
        explanation: 'Empty angle brackets trigger the defaults: `T = int` and `N = 128`.',
      },
      {
        q: 'Why does `template<class T, template<class> class C> class X` reject `std::vector` as the second argument?',
        options: ['`std::vector` is a function template', '`std::vector` has a second (allocator) parameter, and this edition requires the parameter lists to match exactly', 'template template arguments must be passed as values', 'class templates cannot nest inside other templates'],
        answer: 1,
        explanation: 'C++11 matching is exact: `vector`\'s extra defaulted `allocator<T>` parameter defeats the one-parameter pattern; the pattern must spell the defaulted parameter out.',
      },
      {
        q: 'A single-parameter `min` template is called as `min(2, 3.5)`. What happens?',
        options: ['`T` is deduced as `double` for both arguments', 'the `int` is converted to `double` before deduction', 'deduction fails — one argument wants `T = int`, the other `T = double`', 'the call is resolved to the primary at run time'],
        answer: 2,
        explanation: 'Deduction performs no implicit conversion between argument types; each argument must deduce the same `T`. The fix is `min<double>(2, 3.5)`.',
      },
    ],
  },

  // ---------------------------------------------------------------- 25.3
  {
    sectionId: 'cpp-ch25-s3',
    readingTime: 7,
    intro: 'A template definition is really a *set* of alternative definitions: the primary, plus any specializations you declare. Given a use like `Vector<Shape*>`, the compiler runs a deterministic selection procedure over that set — exact full match first, then partial patterns, most specialized wins, ties are errors. This section makes the procedure precise and shows the classic trick of implementing one specialization on top of another.',
    objectives: [
      'Write full and partial specializations with correct syntax',
      'Apply the most-specialized-wins selection rule, including the ambiguity error',
      'Explain how a partial specialization can be implemented over a full one, and why specializations must be declared before use',
    ],
    concepts: [
      {
        term: 'Full (explicit) specialization',
        kind: 'definition',
        statement: "**Full specialization** pins every template argument. The empty `template<>` announces that no parameter remains free: `template<> class Vector<void*> { /* ... */ };` for a class, or `template<> bool less<const char*>(const char* a, const char* b) { return strcmp(a, b) < 0; }` for a function.",
        detail: 'A full specialization is an ordinary class or function that happens to carry the template\'s name and interface.',
      },
      {
        term: 'Partial specialization',
        kind: 'definition',
        statement: "**Partial specialization** fixes some arguments and leaves others as a pattern: `template<class T> class Vector<T*> { /* ... */ };` handles every `Vector<X*>` while leaving `Vector<int>` to the primary. **Only class templates (and class members) can be partially specialized — function templates cannot**; overload functions instead.",
        detail: 'The pattern is matched structurally against the argument list; a partial specialization with no free parameters is ill-formed (that would be a full specialization).',
      },
      {
        term: 'The selection rule',
        kind: 'law',
        statement: 'Among the primary and all specializations whose patterns match a given set of arguments, the compiler selects **the most specialized**: a full specialization beats any partial, a more specific partial beats a less specific one. If two partial specializations match and neither is more specialized than the other, the use is an **ambiguity error** at compile time.',
        detail: 'This mirrors overload resolution\'s partial ordering — the compiler never guesses between two incomparable matches.',
      },
      {
        term: 'Specialize with a specialization',
        kind: 'method',
        statement: "The classic space-saver: implement the partial specialization of `Vector<T*>` on top of the full specialization `Vector<void*>` — `template<class T> class Vector<T*> : private Vector<void*> { /* cast at the interface */ };`. All the storage-and-growth machinery is compiled once, in `Vector<void*>`; each `Vector<X*>` adds only a thin, type-safe wrapper.",
        detail: 'Without this trick, `Vector<Shape*>`, `Vector<int*>`, and every other pointer instantiation would each grow their own copy of the machinery.',
      },
      {
        term: 'Declare before use',
        kind: 'law',
        statement: 'A specialization must be declared **before the first use that would trigger an implicit instantiation** of that specialization, in every translation unit. Use the primary in one file and the specialization in another and the program violates the one-definition rule in a way no diagnostic is required to catch.',
        detail: 'Practical consequence: put specializations in the same header as the primary template they specialize.',
      },
    ],
    figures: [
      {
        caption: 'Selecting an implementation for `Vector<Shape*>`: no full specialization matches, the partial `Vector<T*>` does (with `T = Shape*`), so it wins over the primary. A full specialization would have beaten it; two equally good partials would be an ambiguity error. The partial is itself implemented over the full specialization `Vector<void*>`, so all pointer element types share one storage implementation.',
        svg: `<svg viewBox="0 0 760 400" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart selecting among a primary template and its specializations"><defs><marker id="cpp25a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><rect x="290" y="14" width="240" height="44" rx="8" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="2"/><text x="410" y="42" text-anchor="middle" font-size="16" fill="currentColor">Use: Vector&lt;Shape*&gt;</text><line x1="410" y1="58" x2="410" y2="84" stroke="currentColor" stroke-width="2" marker-end="url(#cpp25a)"/><polygon points="410,88 575,140 410,192 245,140" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="410" y="134" text-anchor="middle" font-size="14" fill="currentColor">a full specialization for</text><text x="410" y="154" text-anchor="middle" font-size="14" fill="currentColor">exactly Vector&lt;Shape*&gt;?</text><text x="584" y="128" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.85">Yes</text><line x1="577" y1="140" x2="592" y2="140" stroke="currentColor" stroke-width="2" marker-end="url(#cpp25a)"/><rect x="596" y="112" width="158" height="60" rx="8" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/><text x="675" y="134" text-anchor="middle" font-size="12.5" fill="currentColor">the full specialization</text><text x="675" y="151" text-anchor="middle" font-size="12.5" fill="currentColor">is used — this is what</text><text x="675" y="168" text-anchor="middle" font-size="12.5" fill="currentColor">Vector&lt;void*&gt; itself gets</text><text x="420" y="214" text-anchor="start" font-size="13" fill="currentColor" opacity="0.85">No — none matches</text><line x1="410" y1="192" x2="410" y2="224" stroke="currentColor" stroke-width="2" marker-end="url(#cpp25a)"/><polygon points="410,228 585,282 410,336 235,282" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/><text x="410" y="276" text-anchor="middle" font-size="14" fill="currentColor">do partial specializations</text><text x="410" y="296" text-anchor="middle" font-size="14" fill="currentColor">match Vector&lt;Shape*&gt;?</text><text x="222" y="272" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.85">Yes</text><line x1="233" y1="282" x2="208" y2="282" stroke="currentColor" stroke-width="2" marker-end="url(#cpp25a)"/><rect x="24" y="250" width="184" height="64" rx="8" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/><text x="116" y="272" text-anchor="middle" font-size="13" fill="currentColor">Vector&lt;T*&gt; — T = Shape*</text><text x="116" y="289" text-anchor="middle" font-size="12.5" fill="currentColor" opacity="0.9">the most specialized match,</text><text x="116" y="306" text-anchor="middle" font-size="12.5" fill="currentColor" opacity="0.9">built over Vector&lt;void*&gt;</text><line x1="585" y1="282" x2="608" y2="282" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><rect x="612" y="256" width="146" height="52" rx="8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="685" y="277" text-anchor="middle" font-size="12.5" fill="currentColor" opacity="0.85">tie between partials</text><text x="685" y="294" text-anchor="middle" font-size="12.5" fill="currentColor" opacity="0.85">→ ambiguity error</text><text x="420" y="348" text-anchor="start" font-size="13" fill="currentColor" opacity="0.85">No</text><line x1="410" y1="336" x2="410" y2="350" stroke="currentColor" stroke-width="2" marker-end="url(#cpp25a)"/><rect x="300" y="352" width="220" height="42" rx="8" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="2"/><text x="410" y="378" text-anchor="middle" font-size="15" fill="currentColor">use the primary Vector&lt;T&gt;</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Routing four instantiations through a specialization set',
        problem: 'A program provides the primary `Vector<T>`, the partial specialization `Vector<T*>` (privately built over a full specialization `Vector<void*>`), and that full specialization `Vector<void*>`. Which definition serves `Vector<void*>`, `Vector<Shape*>`, `Vector<int>`, and `Vector<char>`?',
        steps: [
          { label: 'Vector<void*>', text: 'The argument list matches the full specialization exactly — the full is used (it outranks the partial `T*` pattern, which would also match).' },
          { label: 'Vector<Shape*>', text: 'No full specialization matches (`Vector<void*>` matches only itself); the partial `Vector<T*>` matches with `T = Shape` — the partial is used, and its storage lives in the shared `Vector<void*>` base.' },
          { label: 'Vector<int>', text: 'No full matches; the partial pattern requires a pointer as the element type and `int` is not one — the primary template is used.' },
          { label: 'Vector<char>', text: 'Same reasoning as `int`: no match but the primary.' },
        ],
        result: 'Four uses, one interface, three distinct implementations chosen by pattern matching — and every pointer element type shares a single storage implementation.',
      },
      {
        title: 'Working through specialization',
        problem: 'Specializing for better code. Your task: write full and partial specializations with correct syntax.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: write full and partial specializations with correct syntax. Write down the guarantee you will rely on — for this chapter it is: Full specialization pins all arguments (`template<>`); partial specialization fixes a pattern (`Vector<T*>`); the most specialized match wins and ties are errors.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename T> struct Traits; template<> struct Traits<char>;` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — apply the most-specialized-wins selection rule, including the ambiguity error — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Class templates may be partially specialized; function templates may not — use overloading to reach the same effect for functions. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Full specialization pins all arguments (`template<>`); partial specialization fixes a pattern (`Vector<T*>`); the most specialized match wins and ties are errors. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Full specialization pins all arguments (`template<>`); partial specialization fixes a pattern (`Vector<T*>`); the most specialized match wins and ties are errors.',
      'Class templates may be partially specialized; function templates may not — use overloading to reach the same effect for functions.',
      'A specialization must be declared before any use that would instantiate it, in every translation unit — otherwise an undetectable one-definition violation.',
    ],
    quiz: [
      {
        q: '`template<class T> class Vector<T*> { /* ... */ };` is best described as:',
        options: ['a full specialization of `Vector`', 'a partial specialization of `Vector`', 'a function overload of `Vector`', 'a new primary template'],
        answer: 1,
        explanation: 'One argument of the pattern is fixed structurally (pointer-ness) while `T` remains free — the definition of a partial specialization.',
      },
      {
        q: 'With the primary `Vector<T>`, the partial `Vector<T*>`, and the full `Vector<void*>` in scope, which definition serves `Vector<Shape*>`?',
        options: ['The primary template', 'The full specialization `Vector<void*>`', 'The partial specialization `Vector<T*>` with `T = Shape`', 'None — the use is an ambiguity error'],
        answer: 2,
        explanation: 'No full specialization matches `Vector<Shape*>`; the partial pattern matches with `T = Shape`, and a matching partial outranks the primary.',
      },
      {
        q: 'Why is the partial specialization `Vector<T*>` implemented over the full specialization `Vector<void*>`?',
        options: ['To inherit `void*`\'s conversion rules', 'So that all pointer element types share one storage implementation instead of growing one each', 'Because partial specializations cannot have their own members', 'To make `Vector<T*>` run-time polymorphic'],
        answer: 1,
        explanation: 'The heavy machinery is compiled once inside `Vector<void*>`; every `Vector<X*>` adds only a thin type-safe interface on top.',
      },
      {
        q: 'Two partial specializations both match a use, and neither is more specialized than the other. The result is:',
        options: ['The compiler picks the one declared first', 'The compiler picks the one with fewer parameters', 'A compile-time ambiguity error', 'The primary template is silently used'],
        answer: 2,
        explanation: 'The selection rule only ranks comparable specializations; an unrankable tie is diagnosed as an error rather than guessed.',
      },
    ],
  },

  // ---------------------------------------------------------------- 25.4
  {
    sectionId: 'cpp-ch25-s4',
    readingTime: 4,
    intro: 'Specialization is a sharp tool. Every specialization is extra code that must be written, tested, and kept semantically synchronized with the primary as it evolves. The professional defaults are: let the general implementation carry the load, specialize only when measurement or meaning demands it — and then make the specialization a drop-in replacement.',
    objectives: [
      'Decide when specialization is and is not warranted',
      'Apply the drop-in contract to any specialization you write',
      'Choose correctly among overloading, specializing, and the standard-library exception',
    ],
    concepts: [
      {
        term: 'Specialize only for a proven reason',
        kind: 'insight',
        statement: '**The default answer is the primary.** Every specialization is code you write, test, document, and keep synchronized with the primary as it evolves. Specialize when measurement shows a win, or when the semantics of an argument type genuinely differ from what the primary assumes.',
        detail: 'A misplaced specialization also removes the general implementation from consideration for exactly those types that would have been fine with it.',
      },
      {
        term: 'The drop-in contract',
        kind: 'law',
        statement: '**A specialization must satisfy the primary\'s documented semantics** — same operations, same meanings, comparable complexity: `less<const char*>` still means "less", `swap` still exchanges values. Anything else turns a type-correct program into a wrong one.',
        detail: 'Treat the primary\'s specification as a contract every specialization signs, exactly as a derived class honors its base class\'s contract.',
      },
      {
        term: 'Overload functions; specialize classes',
        kind: 'method',
        statement: 'For **function** templates, prefer overloading: overload resolution\'s partial ordering handles "more specialized" robustly, and explicit function specializations do not even participate in overload resolution. For **class** templates, specialization is the only mechanism. One sanctioned exception: you may not add new templates to namespace `std`, but you *may* specialize `std` templates for your own types.',
        detail: '`std::hash`, `std::less` and friends are the designed customization points of the standard library.',
      },
      {
        term: 'Shipping rule for specialization',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **Default to the primary; specialize when measurement or a genuine semantic difference demands it.** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
      {
        term: 'Review checklist for specialization',
        kind: 'method',
        statement: 'Take the objectives as review questions: decide when specialization is and is not warranted? Then apply the drop-in contract to any specialization you write? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.',
        detail: 'A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.',
      },
    ],
    examples: [
      {
        title: 'Specializing std::hash — the sanctioned exception',
        problem: 'You want to store `Vertex` objects in a `std::unordered_set<Vertex>`. `std::hash` has no definition for user types. What is the legal way to teach the library about `Vertex`?',
        steps: [
          { label: 'What is wanted', text: '`unordered_set<Vertex>` needs two things from the type: a hash function object and `operator==` for equality.' },
          { label: 'What is forbidden', text: 'Adding new templates or overloads to namespace `std` is reserved for the library itself — user code may not do it.' },
          { label: 'What is allowed', text: 'Specializing a `std` template *for a user-defined type* is explicitly permitted: open `std` and write `template<> struct hash<Vertex> { std::size_t operator()(const Vertex& v) const { return v.h; } };`.' },
          { label: 'The rest', text: '`operator==` is not a `std` template — it goes next to `Vertex`, in your own namespace, where the library finds it.' },
        ],
        result: 'Specialization is the *only* way to customize a closed namespace like `std` — the one place where "prefer overloading" must yield.',
      },
      {
        title: 'Reviewing specialization code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: decide when specialization is and is not warranted.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Default to the primary; specialize when measurement or a genuine semantic difference demands it.' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `template<typename T> struct Traits; template<> struct Traits<char>;`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: apply the drop-in contract to any specialization you write. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: A specialization is a drop-in: same operations, same meanings, comparable cost — the primary’s contract holds.' },
        ],
        result: 'The review ends with findings tied to reasons: Default to the primary; specialize when measurement or a genuine semantic difference demands it. Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      'Default to the primary; specialize when measurement or a genuine semantic difference demands it.',
      'A specialization is a drop-in: same operations, same meanings, comparable cost — the primary\'s contract holds.',
      'Prefer overloading for function templates; reserve specialization of `std` templates for user-defined types — the sanctioned exception.',
    ],
    quiz: [
      {
        q: 'You need a better `swap` for your own type in your own namespace. What is the right tool?',
        options: ['A full specialization of `std::swap`', 'A `swap` function in the same namespace as your type', 'A new overload added to namespace `std`', 'Deriving your type from a swappable base'],
        answer: 1,
        explanation: 'Generic code that needs the customization looks it up next to the type; adding to `std` is forbidden, and specializing `std::swap` defeats the lookup idiom that generic code uses.',
      },
      {
        q: 'The drop-in contract says a specialization must:',
        options: ['be shorter than the primary', 'preserve the primary\'s documented semantics and interface', 'delegate every operation back to the primary', 'compile faster than the primary'],
        answer: 1,
        explanation: 'Same operations, same meanings, comparable complexity — otherwise type-correct programs silently misbehave.',
      },
      {
        q: 'Why keep specializations rare even when they are correct?',
        options: ['They make programs run slower', 'Each is separate code to maintain and keep synchronized with the evolving primary', 'The compiler caches them inefficiently', 'Specializations disable inlining'],
        answer: 1,
        explanation: 'Maintenance cost is linear in the number of specializations, and a stale one violates the drop-in contract silently.',
      },
    ],
  },
]

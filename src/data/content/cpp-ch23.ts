import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup, The C++ Programming Language, 4th edition — Chapter 23
// Templates (TC++PL pp. 665–698)
// Sections 23.1–23.8. Code is C++; math is KaTeX; figures are inline SVG.
// ============================================================================

export const cppCh23Content: SectionContent[] = [
  // ------------------------------------------------------------ 23.1
  {
    sectionId: 'cpp-ch23-s1',
    readingTime: 7,
    intro: 'Templates are C++’s mechanism for parameterized types and functions: a class or a function that takes types and constant values as parameters. From a template plus a set of arguments, the compiler generates — instantiates — a specific class or function, fully type-checked at the moment of generation. This one idea powers the containers, iterators and algorithms of the standard library, and it is the foundation on which generic programming (chapter 24) is built.',
    objectives: [
      'Define template, template argument, instantiation and specialization, and their relationships',
      'List the kinds of template parameters — types, non-type constants, and templates — and what may serve as an argument',
      'Explain the zero-run-time-overhead claim, and the compile-time and code-size price it is paid with',
    ],
    concepts: [
      {
        term: 'Template',
        kind: 'definition',
        statement: 'A template is a class or function **parameterized by a set of types and/or integers**. From the template and a set of template arguments, the compiler generates a class or function — an instantiation. The generic definition is written once and serves every argument set.',
        detail: 'Templates are the compile-time twin of the function call: a call passes run-time values to one body; an instantiation passes compile-time types and constants to one definition. Everything a template computes, it computes while the program compiles.',
      },
      {
        term: 'Template parameters and arguments',
        kind: 'definition',
        statement: 'A parameter can be a **type** (`template<typename T>`), a **constant value** of integral, pointer or reference type (`template<int N>`, `template<typename T, T* root>`), or a **template itself**. Arguments must be known at compile time: types, `constexpr` values, and addresses.',
        detail: 'A value argument lets the type carry a size or policy — `std::array<int, 3>` — while keeping everything checkable and inlinable. Template template arguments, and the variadic forms of chapter 25, extend the same idea.',
      },
      {
        term: 'Instantiation and specialization',
        kind: 'definition',
        statement: 'A template plus a set of arguments names a **specialization**: `std::vector<int>`. Two specializations with different arguments are **distinct, unrelated types** — there are no conversions between `vector<int>` and `vector<double>` — and each gets its own code, generated on demand for the members actually used.',
        detail: 'This is the central accounting fact of templates: nothing exists until it is instantiated, and then it exists exactly and type-correctly for that argument set. The compiler does not generate "generic object code"; it generates specific, optimized code per specialization.',
      },
      {
        term: 'Zero overhead — and where the cost lands',
        kind: 'insight',
        statement: 'Everything the template mechanism does happens at compile time, so the generated code is **as fast as hand-written code for that type** — abstraction without run-time loss. The price is paid at build time: template definitions must be visible wherever they are used (§23.7), each specialization adds code, and instantiation-heavy code can dominate compile times.',
        detail: 'Code bloat — many specializations of near-identical code — is the classic risk; disciplined use of the standard library and explicit instantiation (§23.7) keeps it in check. The trade is the deliberate opposite of run-time polymorphism: pay at compile time, run for free.',
      },
      {
        term: 'Templates are not macros',
        kind: 'insight',
        statement: 'A preprocessor macro is textual substitution with no scope, no types and no overloading. A template is a **checked, scoped, overloadable language construct**: each instantiation passes name lookup, type checking and optimization on the substituted code.',
        detail: 'That is why `std::max`, `std::swap` and the containers could be built as templates: the mechanism preserves everything the type system knows, where a macro would discard it.',
      },
    ],
    figures: [
      {
        caption: 'Template instantiation as code generation. The template is written once; each set of template arguments, together with the template, is compiled into a distinct specialization. `vector<int>` and `vector<string>` are separate, fully type-checked types with their own generated member code — and members that are never used are not generated at all.',
        svg: '<svg viewBox="0 0 720 280" width="100%" role="img" aria-label="A template plus argument sets flowing through the compiler into distinct generated classes"><text x="155" y="26" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-style="italic" fill="currentColor" opacity="0.85">the template — written once</text><rect x="30" y="38" width="250" height="130" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="155" y="60" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">template&lt;typename T&gt;</text><text x="45" y="84" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">class vector {</text><text x="45" y="100" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">  T* elem;</text><text x="45" y="116" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">  int sz;</text><text x="45" y="132" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">  void push_back(const T&amp;);</text><text x="45" y="148" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">};</text><rect x="310" y="44" width="120" height="26" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.3"/><text x="370" y="61" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">T = int</text><rect x="310" y="84" width="120" height="26" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.3"/><text x="370" y="101" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">T = string</text><line x1="280" y1="78" x2="442" y2="80" stroke="currentColor" stroke-width="1.6"/><polygon points="446,80 437,76 437,84" fill="currentColor"/><line x1="430" y1="57" x2="444" y2="70" stroke="currentColor" stroke-width="1.6"/><polygon points="446,72 434,64 439,57" fill="currentColor"/><line x1="430" y1="97" x2="444" y2="92" stroke="currentColor" stroke-width="1.6"/><polygon points="446,94 436,100 434,92" fill="currentColor"/><rect x="450" y="52" width="150" height="76" rx="10" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.8"/><text x="525" y="80" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="600" fill="currentColor">compiler</text><text x="525" y="98" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">instantiation</text><text x="525" y="114" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.85">at compile time</text><line x1="600" y1="70" x2="616" y2="50" stroke="currentColor" stroke-width="1.6"/><polygon points="617,48 606,50 612,57" fill="currentColor"/><rect x="620" y="24" width="100" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="670" y="42" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">class</text><text x="670" y="58" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">vector&lt;int&gt;</text><line x1="600" y1="102" x2="616" y2="126" stroke="currentColor" stroke-width="1.6"/><polygon points="617,128 610,118 608,126" fill="currentColor"/><rect x="620" y="112" width="100" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="670" y="130" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">class</text><text x="670" y="146" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">vector&lt;string&gt;</text><text x="360" y="196" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">one template, two argument sets, two generated classes</text><text x="360" y="218" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.85">vector&lt;int&gt; and vector&lt;string&gt; are distinct, unrelated types:</text><text x="360" y="236" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.85">no conversions between them, separate members and code,</text><text x="360" y="254" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.85">each type-checked at the moment it is generated</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'One template, three instantiations, one error',
        problem: 'Given a function template `sum` over a `std::vector`, count the specializations the compiler generates and predict where the error appears.',
        steps: [
          { label: 'The template', text: '`template<typename T> T sum(const std::vector<T>& v) { T s {}; for (const T& x : v) s += x; return s; }`' },
          { label: 'Call 1', text: '`sum(std::vector<int>{1,2,3})` instantiates `sum<int>` and computes $1+2+3 = 6$.' },
          { label: 'Call 2', text: '`sum(std::vector<double>{1.5, 2.5})` instantiates a *different* function, `sum<double>`, and computes $1.5+2.5 = 4.0$.' },
          { label: 'Call 3', text: '`sum(std::vector<std::string>{"a","b"})` instantiates `sum<std::string>`; the same `+=` line is now string concatenation: `"a" + "b"` gives `"ab"`.' },
          { label: 'The error', text: 'Add `struct Empty {};` and call `sum(std::vector<Empty>{})`: the body requires `Empty += Empty`, which does not exist. The error is reported **at the instantiation** — the point of use — not at the template definition (§23.3).' },
        ],
        result: 'Three working specializations from one definition, each its own type-checked function — and a fourth use that fails precisely where the argument meets the body.',
      },
      {
        title: 'Working through introduction and overview',
        problem: 'Templates at a glance. Your task: define template, template argument, instantiation and specialization, and their relationships.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: define template, template argument, instantiation and specialization, and their relationships. Write down the guarantee you will rely on — for this chapter it is: A template plus a set of arguments names a specialization; different arguments give distinct, unrelated types' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename T> T larger(T a, T b) { return (a < b) ? b : a; }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — list the kinds of template parameters — types, non-type constants, and templates — and what may serve as an argument — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Template parameters are types, compile-time constants, or templates — never run-time values If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A template plus a set of arguments names a specialization; different arguments give distinct, unrelated types Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'A template plus a set of arguments names a specialization; different arguments give distinct, unrelated types',
      'Template parameters are types, compile-time constants, or templates — never run-time values',
      'Instantiation is a compile-time, code-generating, type-checking step: abstraction with zero run-time overhead, paid for in build time',
    ],
    quiz: [
      {
        q: 'What does the compiler produce from a template together with a set of arguments?',
        options: ['A run-time object of the template class', 'An instantiation: a specific class or function for exactly those arguments', 'A preprocessed text file', 'A virtual function table'],
        answer: 1,
        explanation: 'Instantiation generates real, specific code — the template is a compile-time factory of classes and functions, not a run-time construct.',
      },
      {
        q: 'Which statement about `std::vector<int>` and `std::vector<std::string>` is correct?',
        options: ['They are the same type with different contents', 'They are distinct, unrelated types, each with its own generated members', 'One converts implicitly to the other', 'They share their static members'],
        answer: 1,
        explanation: 'Each template plus arguments names a separate specialization: no conversions exist between them, and their members and code are generated independently.',
      },
      {
        q: 'Which of these can NOT be a template argument?',
        options: ['A type', 'An integer constant expression', 'A pointer to a function', 'A value read from input at run time'],
        answer: 3,
        explanation: 'Arguments must be known at compile time — types, constant expressions, addresses. Run-time values are parameters of function calls, never of templates.',
      },
      {
        q: 'The "zero-overhead" claim for templates means',
        options: ['templates compile instantly', 'the generated code is as efficient as hand-written code for the same type', 'templates use no memory', 'the compiler never generates duplicate code'],
        answer: 1,
        explanation: 'All the work — substitution, checking, specialization — happens at compile time, so at run time the instantiated code matches what a programmer would have written by hand for that type; the costs are compile time and code size, not execution speed.',
      },
    ],
  },

  // ------------------------------------------------------------ 23.2
  {
    sectionId: 'cpp-ch23-s2',
    readingTime: 7,
    intro: 'The chapter’s worked example is a `String` parameterized over its character type: `template<typename C> class String`. One template then serves `char`, `wchar_t`, and user-defined character types such as a Japanese character class — with the same operations, the same short-string optimization, and checked element-wise conversions between different character types. The example shows what "written once, used for many types" really costs: the template body becomes a list of requirements on `C`.',
    objectives: [
      'Read the `String<C>` template definition and extract the implicit requirements it places on `C`',
      'Explain how member-template constructors convert between `String` specializations, element by element',
      'Describe how user-defined character types plug in through overloaded helper functions',
    ],
    concepts: [
      {
        term: 'The design: String of any character type',
        kind: 'definition',
        statement: '`template<typename C> class String` holds a sequence of `C`. The design carries over from the `String` of chapter 19 — counted representation, and a **short-string optimization** with `short_max = 15`, so strings of up to 15 characters live inside the object with no free-store allocation — with only the element type turned into a parameter.',
        detail: 'The point of the example: nothing about a string’s logic depends on characters being 8-bit. Storage, copying, comparison, concatenation and searching all work for any element type that supports a handful of operations.',
      },
      {
        term: 'What C must provide',
        kind: 'insight',
        statement: 'The template body **is** the requirements list. Reading `String<C>` top to bottom, `C` needs: default construction, copy construction, assignment, destruction (for storage); `==` and `<` (for `find`, sorting, comparisons); output streaming (for printing); and convertibility to other character types where the converting constructors are used.',
        detail: 'This is the key skill the chapter teaches before concepts arrive formally (§24.3): to read a template as a contract, asking at every operation "which type must support this, and what must it mean?"',
      },
      {
        term: 'Member-template conversion constructors',
        kind: 'method',
        statement: 'A constructor can itself be a template: `template<typename C2> String(const String<C2>&);` converts a string of one character type into a string of another, **element by element**. Because it is a template, one definition handles every pair of character types — there is no combinatorial list of `String<char>`-from-`String<wchar_t>`, `String<char>`-from-`String<Kana_char>`, … constructors.',
        detail: 'In the book’s design the element conversion is *checked at run time* by a small helper: if some element of the source cannot be represented in the target character type, the conversion throws `std::bad_cast`. Conversions between arbitrary types, unlike built-in narrowing, cannot all be validated at compile time.',
      },
      {
        term: 'Helper functions for user-defined characters',
        kind: 'method',
        statement: 'Operations the standard library only provides for `char` are supplied as **overloads**: the library’s `strlen` works for C strings, and a user defining `Kana_char` adds `int strlen(const Kana_char*);` plus the operators on `Kana_char` — after which `String<Kana_char>` works unchanged.',
        detail: 'This is dependency injection at the type level: the template never names a specific helper, it uses the operations, and overload resolution finds the right one per character type. (In practice one also writes a `size()` member and iterates, avoiding C-style helpers entirely.)',
      },
      {
        term: 'A Simple String Template: the working contract',
        kind: 'definition',
        statement: '**A Simple String Template.** A first class template. You can claim this section when you can read the `String<C>` template definition and extract the implicit requirements it places on `C` — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 23 (Templates); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'A string of anything',
        problem: 'Construct and convert `String` specializations for several character types, tracking sizes, allocations and failure points.',
        steps: [
          { label: 'Short string', text: '`String<char> s1("chair");` — length 5, and $5 \\le 15 = $ `short_max`, so the characters live in the object’s internal array: no allocation happens.' },
          { label: 'Long string', text: 'A 40-character string exceeds `short_max`, so the representation allocates on the free store — the same policy as chapter 19, now for any `C`.' },
          { label: 'Convert', text: '`String<wchar_t> s2(s1);` selects the member-template constructor: each `char` element is converted to `wchar_t`; the length is still 5.' },
          { label: 'User characters', text: '`String<Kana_char> ks("...");` uses the user’s `strlen(const Kana_char*)` overload to measure the length — in characters, not bytes — before copying elements.' },
          { label: 'Failure', text: 'Converting a `String<wchar_t>` containing a character with no representation in `Kana_char` runs the checked element conversion and throws `std::bad_cast` mid-copy.' },
        ],
        result: 'One class template serves every alphabet; conversions between alphabets are element-wise, generated once for every pair, and fail loudly rather than silently producing garbage.',
      },
      {
        title: 'Working through a simple string template',
        problem: 'A first class template. Your task: read the `String<C>` template definition and extract the implicit requirements it places on `C`.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: read the `String<C>` template definition and extract the implicit requirements it places on `C`. Write down the guarantee you will rely on — for this chapter it is: A class template’s body states its requirements: `String<C>` needs default construction, copy, assignment, `==`, `<` and stream output from `C`' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename T> T larger(T a, T b) { return (a < b) ? b : a; }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain how member-template constructors convert between `String` specializations, element by element — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Member-template constructors convert between specializations element by element — one definition covers every pair of character types If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A class template’s body states its requirements: `String<C>` needs default construction, copy, assignment, `==`, `<` and stream output from `C` Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'A class template’s body states its requirements: `String<C>` needs default construction, copy, assignment, `==`, `<` and stream output from `C`',
      'Member-template constructors convert between specializations element by element — one definition covers every pair of character types',
      'User-defined character types plug in through overloaded helpers; unrepresentable elements are caught by a run-time `std::bad_cast`',
    ],
    quiz: [
      {
        q: 'Why is `String`’s converting constructor itself a template?',
        options: ['To make it run faster', 'So a single definition converts from every other `String` specialization, rather than one constructor per pair', 'Because constructors cannot take `const C*` otherwise', 'To disable implicit conversions'],
        answer: 1,
        explanation: 'A member template `String(const String<C2>&)` is instantiated for each source character type actually used — the combinatorics are handled by the compiler, not by hand-written constructor pairs.',
      },
      {
        q: 'In the book’s design, what happens when a source character cannot be represented in the target character type during a `String` conversion?',
        options: ['A compile-time error is issued', 'The character is silently replaced', '`std::bad_cast` is thrown by the checked element conversion', 'The whole string becomes empty'],
        answer: 2,
        explanation: 'Element-wise conversion between arbitrary character types is a run-time fact; the helper checks each conversion and throws `std::bad_cast` rather than manufacturing a wrong character.',
      },
      {
        q: 'What must a user defining a new character type provide for `String<NewChar>` to work?',
        options: ['Nothing at all', 'The operations the template body uses — construction, copy, assignment, comparisons — plus any helpers like `strlen` it calls on C-style arrays of the type', 'A specialization of the whole `String` class', 'A virtual function table'],
        answer: 1,
        explanation: 'The template body is the requirements list: every operation performed on elements of type `C` must exist for `NewChar`, found by overloading for C-style helpers.',
      },
      {
        q: 'With `short_max = 15`, constructing `String<char> s("chair")` (5 characters)',
        options: ['allocates 5 bytes on the free store', 'stores the characters inside the object — no allocation', 'calls `strlen` twice', 'is a compile-time error'],
        answer: 1,
        explanation: 'Length 5 does not exceed the short-string threshold, so the internal array is used — the short-string optimization inherited from chapter 19’s design, now generalized to any `C`.',
      },
    ],
  },

  // ------------------------------------------------------------ 23.3
  {
    sectionId: 'cpp-ch23-s3',
    readingTime: 6,
    intro: 'When is a template checked? Twice. At the point of definition the compiler checks everything it can — syntax, scoping, and every name that does not depend on a template parameter. Everything that does depend on one is checked at the point of instantiation, after the arguments are known. The consequence shapes the whole subject: a template error is never purely in the template, nor purely in the argument — it is in the combination.',
    objectives: [
      'Describe the two times a template is checked: at definition and at instantiation',
      'Classify which errors are caught at each point, with examples',
      'Explain why a template error implicates the template definition and its argument together, and how that shapes error messages and design',
    ],
    concepts: [
      {
        term: 'Two-phase checking',
        kind: 'law',
        statement: 'A template is checked **once at its definition** — syntax, scoping, and all expressions that do not depend on a template parameter — and **again at each instantiation**, where dependent expressions are checked after the arguments have been substituted.',
        detail: 'A template that is never used is still checked once: misspell a non-dependent name and the definition fails to compile even with no instantiations anywhere in the program.',
      },
      {
        term: 'What is checked at definition',
        kind: 'definition',
        statement: 'At the definition the compiler verifies everything independent of the parameters: matching braces and semicolons, that non-dependent names like `std::vector` exist and are used correctly, that calls with fully known arguments type-check, and that the return statements are consistent **for the forms that can be judged without knowing `T`**.',
        detail: 'This is deliberately conservative: only what is provably wrong for every possible `T` can be rejected here. `s += x;` with `T s` and `T x` might be fine for every useful `T` — the compiler cannot know yet.',
      },
      {
        term: 'Errors at instantiation',
        kind: 'insight',
        statement: 'An expression that depends on `T` is only checkable when `T` is known. The resulting failure — "no `operator+` for `X`" — belongs to **the combination of the template and its argument**: `sum<std::vector<int>>` is fine and `sum<std::vector<Empty>>` is an error, and neither the template nor `Empty` is wrong on its own.',
        detail: 'This is why template error messages arrive as long instantiation backtraces: the compiler reports the point of use, walks back through the instantiations that led there, and shows the substituted code that failed. Reading them is a learned skill; writing templates that produce short errors is a design skill (§24.4).',
      },
      {
        term: 'The design response',
        kind: 'method',
        statement: 'Late checking can be tamed three ways: **minimize requirements** so fewer arguments can fail (chapter 24’s lifting); **state requirements early** — `static_assert` predicates at the top of the template fire at the interface with a message naming the missing requirement; and **keep instantiation points close to the cause** so the backtrace is short.',
        detail: 'The chapter’s strategy in one sentence: what cannot be checked at definition time should at least be checked at the front door, before the body is instantiated and the diagnosis becomes an archaeology dig.',
      },
      {
        term: 'Type Checking: the working contract',
        kind: 'definition',
        statement: '**Type Checking.** Templates and type errors at instantiation. You can claim this section when you can describe the two times a template is checked: at definition and at instantiation — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 23 (Templates); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'One template, two successes, one failure',
        problem: 'Predict exactly when the compiler accepts or rejects each use of `template<typename T> T twice(T x) { return x + x; }`.',
        steps: [
          { label: 'Definition', text: 'The body `return x + x;` is well-formed C++ *syntax*, and nothing in it can be rejected at definition time — `T` might support `+`.' },
          { label: 'Use 1', text: '`twice(21)` — `T = int`, and `21 + 21 = 42` compiles and runs.' },
          { label: 'Use 2', text: '`twice(2.5)` — `T = double`, `2.5 + 2.5 = 5.0`; a distinct specialization, checked independently.' },
          { label: 'Use 3', text: '`twice(std::string("ab"))` — `T = std::string`, and `+` is concatenation: `"ab" + "ab"` = `"abab"`.' },
          { label: 'Use 4', text: '`struct X {}; twice(X{});` — no `operator+(X, X)` exists, so this use fails **at its own instantiation point**, citing the substituted expression `x + x`.' },
        ],
        result: 'The template is innocent, `X` is innocent, and the pair is guilty: two-phase checking means the error can only be found where they meet.',
      },
      {
        title: 'Working through type checking',
        problem: 'Templates and type errors at instantiation. Your task: describe the two times a template is checked: at definition and at instantiation.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: describe the two times a template is checked: at definition and at instantiation. Write down the guarantee you will rely on — for this chapter it is: Templates are checked at definition (non-dependent code) and again at each instantiation (dependent code, after substitution)' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename T> T larger(T a, T b) { return (a < b) ? b : a; }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — classify which errors are caught at each point, with examples — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: A template error is in the combination of template and argument — neither alone is wrong If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Templates are checked at definition (non-dependent code) and again at each instantiation (dependent code, after substitution) Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Templates are checked at definition (non-dependent code) and again at each instantiation (dependent code, after substitution)',
      'A template error is in the combination of template and argument — neither alone is wrong',
      'Tame late checking by minimizing requirements and stating them early with `static_assert` at the interface',
    ],
    quiz: [
      {
        q: 'The expression `s += x;` (with `T s`, `T x`) inside a template is checked',
        options: ['when the template is defined', 'when the template is instantiated, with `T` known', 'never — dependent expressions are not checked', 'only at link time'],
        answer: 1,
        explanation: 'Whether `+=` exists between two `T` objects is unknowable until `T` is; the check happens at the instantiation, on the substituted code.',
      },
      {
        q: 'Which error IS caught at template-definition time?',
        options: ['`x + x` where `T` has no `operator+`', 'A misspelled non-dependent name such as `std::vectorr`', 'Calling a member that only some `T` have', 'Instantiating with a type lacking `==`'],
        answer: 1,
        explanation: 'Non-dependent names are looked up and checked where the template is defined — a typo like `std::vectorr` fails even if the template is never used.',
      },
      {
        q: 'The compile error "no operator+ for X" from a template means',
        options: ['the template definition is ill-formed and must be rewritten', 'the argument type `X` is ill-formed and must be fixed', 'the combination of this template and this argument is invalid — the requirements and the type do not meet', 'the linker is at fault'],
        answer: 2,
        explanation: 'Two-phase checking pins the failure to the meeting point: the same template works for other types, and the same type works with other templates; together they lack one operation.',
      },
      {
        q: 'The most effective way to surface template requirement failures early is',
        options: ['comment the requirements carefully and hope', 'put `static_assert` predicate checks at the top of the template so failures report at the interface', 'instantiate every template with every known type', 'avoid templates entirely'],
        answer: 1,
        explanation: 'A `static_assert` naming the missing requirement fires at the point of use, before the body is instantiated — converting an archaeology dig into a one-line diagnosis (the technique §24.4 develops fully).',
      },
    ],
  },

  // ------------------------------------------------------------ 23.4
  {
    sectionId: 'cpp-ch23-s4',
    readingTime: 7,
    intro: 'A class template is a family of classes, and each member of the family lives once per specialization. This section covers the mechanics of defining those members: the out-of-class syntax that names the specialization, the member type aliases that make generic code possible, static members that are per-specialization by construction, and member templates — members that are themselves parameterized, which is how conversions between specializations are written.',
    objectives: [
      'Define members of a class template inside and outside the class body, using the correct syntax',
      'Use member type aliases and static members, and state precisely what "per specialization" means',
      'Write member templates for conversions between specializations, and explain the role of friends',
    ],
    concepts: [
      {
        term: 'Out-of-line member definitions',
        kind: 'notation',
        statement: 'A member defined outside its class template must name the specialization: `template<typename T> void vector<T>::push_back(const T& x) { /* ... */ }` — the `vector<T>::` prefix is what the definition belongs to, and `T` is in scope throughout. Members defined inside the class are implicitly inline and, the book’s style notes, read better.',
        detail: 'The definition itself is a template: it is not code yet, only a recipe from which the compiler emits one `push_back` per `vector<T>` actually used.',
      },
      {
        term: 'Member type aliases',
        kind: 'definition',
        statement: 'The conventional names — `using value_type = T;`, `using iterator = ...;` — let generic code say `typename C::value_type` and work for **every** container. This traits convention is the foundation of the standard library’s uniformity.',
        detail: 'The `typename` is required in dependent contexts (`typename C::value_type`) because before `C` is known the compiler cannot know that `value_type` names a type. §23.6 shows how an alias template hides this housekeeping.',
      },
      {
        term: 'Static members: one per specialization',
        kind: 'law',
        statement: 'Each specialization of a class template gets its **own** static members: `vector<int>::count` and `vector<string>::count` are different objects, defined out-of-line as `template<typename T> int vector<T>::count = 0;` and initialized once per specialization used.',
        detail: 'This is the type-level analogue of per-class statics: the family has one shared member per member of the family — and it composes with the instantiation-on-demand rule (an unused specialization’s static is never emitted).',
      },
      {
        term: 'Member templates and friends',
        kind: 'method',
        statement: 'A member can itself be a template: the conversion constructor `template<typename C2> String(const String<C2>&);` of §23.2 is exactly this, and assignment can follow the same pattern. A **friend** declaration grants a nonmember access while staying outside the class — useful for operators like `operator==` that compare specializations.',
        detail: 'Friends may be templates or name particular specializations; they provide access, not membership. The combination "member template for conversions, friend operators for comparisons" is the standard shape for family-wise value types like `String`.',
      },
      {
        term: 'Class Template Members: the working contract',
        kind: 'definition',
        statement: '**Class Template Members.** Members of class templates. You can claim this section when you can define members of a class template inside and outside the class body, using the correct syntax — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 23 (Templates); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'Counting with per-specialization statics',
        problem: 'A `Tracer<T>` counts its live objects with a static member. Predict the three counter readings.',
        steps: [
          { label: 'The definition', text: '`template<typename T> struct Tracer { static int live; Tracer() { ++live; } ~Tracer() { --live; } };` and out-of-line: `template<typename T> int Tracer<T>::live = 0;`' },
          { label: 'Instantiate', text: '`Tracer<int> a, b;` — both share `Tracer<int>::live`, which goes $0 \\to 1 \\to 2$. There is exactly one such object in the program.' },
          { label: 'A second family member', text: '`Tracer<double> c;` — a *different* static, `Tracer<double>::live`, goes $0 \\to 1$; the `int` counter is untouched.' },
          { label: 'Scope end', text: 'When `b` is destroyed, `Tracer<int>::live` falls to 1; destroying `c` returns `Tracer<double>::live` to 0. Each specialization keeps its own books.' },
        ],
        result: 'Readings: `Tracer<int>::live` is 2 then 1; `Tracer<double>::live` is 1 then 0 — one static per specialization, each initialized once, each emitted only if used.',
      },
      {
        title: 'Working through class template members',
        problem: 'Members of class templates. Your task: define members of a class template inside and outside the class body, using the correct syntax.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: define members of a class template inside and outside the class body, using the correct syntax. Write down the guarantee you will rely on — for this chapter it is: Out-of-line definitions name their specialization: `template<typename T> void vector<T>::f() { }`' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename T> T larger(T a, T b) { return (a < b) ? b : a; }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — use member type aliases and static members, and state precisely what "per specialization" means — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Member type aliases like `value_type` are the vocabulary that lets one generic algorithm serve every container If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Out-of-line definitions name their specialization: `template<typename T> void vector<T>::f() { }` Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Out-of-line definitions name their specialization: `template<typename T> void vector<T>::f() { }`',
      'Member type aliases like `value_type` are the vocabulary that lets one generic algorithm serve every container',
      'Statics and members exist once per specialization; member templates and friends handle cross-specialization conversion and comparison',
    ],
    quiz: [
      {
        q: 'The prefix `vector<T>::` in `template<typename T> void vector<T>::push_back(const T& x) { }` exists to',
        options: ['declare a new template', 'name the specialization whose member is being defined', 'make the function virtual', 'forward-declare the class'],
        answer: 1,
        explanation: 'A class template is a family; an out-of-line member definition must say which family member it belongs to, and `vector<T>::` does exactly that, with `T` still a template parameter.',
      },
      {
        q: 'How many objects is `vector<int>::size_count` (a static member) compared with `vector<double>::size_count`?',
        options: ['The same one object, shared by all specializations', 'Two distinct objects — one per specialization used', 'One per instance of the class', 'None — statics are not allowed in templates'],
        answer: 1,
        explanation: 'Static members belong to a class, and `vector<int>` and `vector<double>` are different classes of the family: each specialization gets its own static, emitted only if that specialization is used.',
      },
      {
        q: 'Why do containers conventionally define `using value_type = T;`?',
        options: ['It is required by the compiler', 'So generic code can say `typename C::value_type` uniformly, for every container', 'It makes the template faster', 'It replaces the need for constructors'],
        answer: 1,
        explanation: 'The alias gives a single name to "the element type" across the whole zoo of containers — the naming convention that one generic algorithm can rely on for all of them.',
      },
      {
        q: 'A constructor declared `template<typename C2> String(const String<C2>&);` inside `String<C>` is',
        options: ['illegal — constructors cannot be templates', 'a member template: one constructor definition covering conversion from every other specialization', 'a friend declaration', 'a partial specialization of the class'],
        answer: 1,
        explanation: 'Members of a class template may be templates themselves; this one is instantiated per source character type, which is how one definition serves every conversion pair.',
      },
    ],
  },

  // ------------------------------------------------------------ 23.5
  {
    sectionId: 'cpp-ch23-s5',
    readingTime: 7,
    intro: 'Function templates are the most-used template form, because their arguments are deduced from the call: you write `max(1, 2)`, not `max<int>(1, 2)`. This section covers the deduction rules — and their sharp edges: deduction is conservative, uses no user-defined conversions, and fails loudly when two arguments disagree about `T`. It closes with the accumulator-parameter idiom that reappears throughout the standard library.',
    objectives: [
      'Write function templates and read the deduction of `T` from the function arguments',
      'Predict ambiguity errors such as `max(1, 2.5)` and repair them with explicit qualification or casts',
      'Use an accumulator parameter — as in `sum(first, last, val)` — to decouple element type from arithmetic type',
    ],
    concepts: [
      {
        term: 'Function template',
        kind: 'definition',
        statement: 'A function parameterized over types and values, called like an ordinary function: `template<typename T> const T& max(const T& a, const T& b) { return a < b ? b : a; }` — `max(2, 3)` deduces `T = int` and instantiates the function for it.',
        detail: 'Function templates interact with ordinary overloading as one overload set: a plain function that matches exactly beats a template needing deductions, which is a common way to specialize a hot case.',
      },
      {
        term: 'Argument deduction',
        kind: 'law',
        statement: 'Each template parameter used in the parameter list is deduced from the corresponding argument, and only **exact-ish matches** participate: array-to-pointer decay and top-level `const` adjustments, but **no user-defined conversions and no arithmetic promotions applied to `T`**. Independent deductions of the same parameter must agree.',
        detail: 'The conservatism is deliberate: silent `int`→`double`→`T`-style surprises would make generic code unpredictable. Where mixing is wanted, the caller states the intent — with an explicit template argument, a cast, or a second parameter.',
      },
      {
        term: 'The classic ambiguity',
        kind: 'insight',
        statement: '`max(1, 2.5)` **does not compile**: the first argument deduces `T = int`, the second `T = double`, and the two deductions conflict. The fixes are explicit — `max<double>(1, 2.5)` (both converted to `double`, result `2.5`) — or giving the template two parameters, or overloading for the mixed case.',
        detail: 'The error message typically shows both candidates for `T`, which is the deduction machinery being transparent rather than broken. It is a feature wearing an error’s clothes.',
      },
      {
        term: 'Explicit qualification',
        kind: 'method',
        statement: 'Template arguments may be supplied explicitly, left to right: `sum<double>(b, e, 0)` fixes `T = double` (or the first parameter) and lets the rest be deduced. Use it when a parameter appears **only in the return type**, or when deduction would pick a type you do not want.',
        detail: 'Because arguments bind left to right, put the parameters you intend to specify explicitly first in the template’s parameter list — an interface-design rule the standard library follows (e.g. `std::accumulate` lets the accumulator type be chosen by its third argument instead).',
      },
      {
        term: 'The accumulator parameter',
        kind: 'method',
        statement: 'In `template<typename Iter, typename Val> Val sum(Iter first, Iter last, Val s)`, the initial value’s type **chooses the arithmetic**: pass `0` and the sum is `int`; pass `0.0` and every addition happens in `double`, avoiding overflow and absorbing fractions. The value is passed in, not default-constructed — so `Val` needs only `+=`, not a default constructor.',
        detail: 'This is the shape of `std::accumulate` and of most numeric generic algorithms: the accumulator is part of the *interface*, which keeps the requirements on the element type minimal (it need only convert to `Val` and add into it).',
      },
    ],
    examples: [
      {
        title: 'Deducing, conflicting, and choosing the accumulator',
        problem: 'For `std::vector<int> v{1, 2, 3, 4, 5}` and the `sum` template above, evaluate four calls.',
        steps: [
          { label: 'Call 1', text: '`sum(v.begin(), v.end(), 0)` — `Iter` is `std::vector<int>::iterator`, `Val` is `int`; the running value goes $0, 1, 3, 6, 10, 15$ — the call returns the `int` 15.' },
          { label: 'Call 2', text: '`sum(v.begin(), v.end(), 0.0)` — only `Val` changes: the additions run in `double`: $0.0, 1.0, 3.0, 6.0, 10.0, 15.0$ — returns `15.0`. For a hundred-million-element `int` vector this is the difference between silent overflow and a correct total.' },
          { label: 'Call 3', text: '`sum(v.begin() + 1, v.end(), 0.0)` — iterator arithmetic selects a subrange: elements $2, 3, 4, 5$ sum to $14.0$. The same template, a different pair of iterators.' },
          { label: 'The failure', text: '`max(1, 2.5)` on its own does not compile — conflicting deductions for `T`. `max<double>(1, 2.5)` converts the first argument and returns `2.5`.' },
        ],
        result: '15 (`int`), 15.0 (`double`), 14.0 (subrange) — one template, three behaviors chosen entirely by the arguments — and one deliberate error repaired by one explicit template argument.',
      },
      {
        title: 'Working through function templates',
        problem: 'Generic functions and deduction. Your task: write function templates and read the deduction of `T` from the function arguments.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: write function templates and read the deduction of `T` from the function arguments. Write down the guarantee you will rely on — for this chapter it is: Deduction is conservative: decay and `const` only, no user conversions, no promotions of `T` — conflicts are errors' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename T> T larger(T a, T b) { return (a < b) ? b : a; }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — predict ambiguity errors such as `max(1, 2.5)` and repair them with explicit qualification or casts — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Fix `max(1, 2.5)` with `max<double>(1, 2.5)` or by design (two parameters, overloads) If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Deduction is conservative: decay and `const` only, no user conversions, no promotions of `T` — conflicts are errors Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Deduction is conservative: decay and `const` only, no user conversions, no promotions of `T` — conflicts are errors',
      'Fix `max(1, 2.5)` with `max<double>(1, 2.5)` or by design (two parameters, overloads)',
      'Pass the accumulator’s initial value as an argument: its type chooses the arithmetic and removes the default-construction requirement',
    ],
    quiz: [
      {
        q: 'What does `max(1, 2.5)` do, given `template<typename T> const T& max(const T&, const T&);`?',
        options: ['Returns 2 as an int', 'Returns 2.5 as a double', 'Fails to compile — deductions for `T` conflict', 'Returns 2.5 after converting both to double automatically'],
        answer: 2,
        explanation: 'Deduction applies no arithmetic conversions: the first argument forces `T = int`, the second `T = double`, and the conflict is an error. State your intent with `max<double>(1, 2.5)`.',
      },
      {
        q: 'For `sum(v.begin(), v.end(), 0.0)` over a `std::vector<int>`, what is `Val`?',
        options: ['`int`, from the vector’s element type', '`double`, from the third argument — which also sets the arithmetic of every addition', '`void`, since it is inferred from context', 'A compile-time error'],
        answer: 1,
        explanation: 'The accumulator parameter is deduced only from the initial value: `0.0` makes `Val = double`, so the whole computation runs in `double` regardless of the elements’ type.',
      },
      {
        q: 'Why is the starting value passed in as an argument rather than created inside as `T s = T();`?',
        options: ['It is faster to pass an int', 'Passing it lets the caller choose the accumulator type and keeps the requirements on `Val` minimal — no default constructor needed', 'Because `T()` is illegal in templates', 'To make the function virtual'],
        answer: 1,
        explanation: 'The argument chooses `Val` explicitly (0 vs 0.0 vs an empty string) and the template then needs only `+=` on `Val` — a smaller requirement set, the theme of the next chapter.',
      },
      {
        q: 'Which conversions may be applied while deducing a template parameter `T` from a function argument?',
        options: ['Any user-defined conversion', 'Arithmetic promotions like `int` to `double`', 'Only decay (array/function to pointer) and top-level `const` adjustments', 'All standard conversions'],
        answer: 2,
        explanation: 'Deduction is deliberately exact: beyond decay and `const` trimming, no conversions are applied, so every deduction is unambiguous — and conflicts surface as errors at the call site.',
      },
      // PYQ-pattern — function template argument deduction conflict (rephrased)
      {
        q: "What happens with this call?\n```cpp\ntemplate <typename T> T bigger(T a, T b) { return a > b ? a : b; }\nint main() { auto x = bigger(1, 2.5); }\n```",
        options: ["`x` is the `int` `2`, because the second argument truncates", "`x` is the `double` `2.5`, because the first argument promotes", "The call quietly deduces `T = double`", "The call fails: deduction finds conflicting types for `T`, and no conversion applies during deduction"],
        answer: 3,
        explanation: "Step 1: The code given passes an `int` and a `double` to a single-parameter template. Step 2: The governing rule is deduction exactness: each argument must match the parameter to deduce the same `T`, and ordinary conversions are not consulted while deducing. Step 3: Tracing the deduction, the first argument proposes `T = int` while the second proposes `T = double`, the proposals conflict, and the call is rejected rather than coerced. Step 4: The distractors fail because no truncation or promotion happens during deduction, and the compiler never silently prefers one proposal. Step 5: Therefore the call fails until written with an explicit argument such as `bigger<double>(1, 2.5)`."
      }
    ],
  },

  // ------------------------------------------------------------ 23.6
  {
    sectionId: 'cpp-ch23-s6',
    readingTime: 5,
    intro: 'C++11 finally gave templates a parameterized synonym: the alias template, written with `using`. A template alias introduces no new type — it is pure naming, so `Vec<int>` and `std::vector<int>` are the same type everywhere — but it removes the boilerplate of long dependent names and lets part of a template’s argument list be fixed while the rest stays variable.',
    objectives: [
      'Write alias templates with `using`, and contrast them with `typedef`, which cannot be parameterized',
      'Explain alias-as-pure-synonym: no new type, no new members, no specialization of an alias',
      'Apply aliases to shorten dependent names such as `typename String<C>::iterator`',
    ],
    concepts: [
      {
        term: 'Alias template',
        kind: 'notation',
        statement: '`template<typename T> using Vector = std::vector<T, My_alloc<T>>;` declares a synonym parameterized by `T`: `Vector<int>` is exactly `std::vector<int, My_alloc<int>>`. This is the mechanism the language lacked when `typedef` could not be templated.',
        detail: 'The `using` spelling is the modern form for plain synonyms too — `using iterator = typename C::iterator;` reads left-to-right and works in templates where decades of `typedef` syntax did not compose.',
      },
      {
        term: 'A pure synonym',
        kind: 'law',
        statement: 'An alias introduces **no type**: `Vector<int>` *is* `std::vector<int, My_alloc<int>>` — interchangeable in declarations, overload sets and template arguments; there are no conversions because there is no second type; and an alias **cannot be specialized** (one specializes what the alias names, not the alias).',
        detail: 'The contrast to keep straight: a wrapper class `template<typename T> struct Box { std::vector<T> v; };` *is* a new type needing member access and conversions; an alias is only a shorter spelling of an existing one.',
      },
      {
        term: 'Hiding dependent-name machinery',
        kind: 'method',
        statement: '`template<typename C> using String_iterator = typename String<C>::iterator;` packages the `typename` and the qualification into one name — users write `String_iterator<char> p;` and never see the plumbing that says `String<C>::iterator` is a type dependent on `C`.',
        detail: 'This is the most common industrial use: alias templates clean up the `typename X<T>::abc` spatter that generic code otherwise accumulates, and they document intent ("this is the iterator of a `String`") better than the raw form.',
      },
      {
        term: 'Partial application',
        kind: 'method',
        statement: 'An alias can fix some arguments and leave the rest as parameters: `template<typename T> using String_map = std::map<std::basic_string<T>, std::vector<T>>;` — one name for "maps from strings of some character type to vectors of it," reusable wherever that shape recurs.',
        detail: 'Combined with defaulted template arguments, this covers most uses of the "policy-laden" long names — `std::map<K, V, C, A>` with defaults — without any macro trickery.',
      },
      {
        term: 'Template Aliases: the working contract',
        kind: 'definition',
        statement: '**Template Aliases.** Alias templates. You can claim this section when you can write alias templates with `using`, and contrast them with `typedef`, which cannot be parameterized — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 23 (Templates); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'An alias renames; a wrapper creates',
        problem: 'Show that a template alias produces the *same* type where a wrapper class produces a *different* one, and use the alias to simplify a dependent name.',
        steps: [
          { label: 'The alias', text: '`template<typename T> using Vec = std::vector<T>;` — then `Vec<int> v{1, 2, 3};` declares a plain `std::vector<int>`.' },
          { label: 'Same type', text: 'A function `void take(std::vector<int>&);` accepts `v` directly, and `std::vector<int>* q = &v;` compiles with no cast: there is nothing to convert.' },
          { label: 'The wrapper', text: '`template<typename T> struct Wrap { std::vector<T> v; };` — `Wrap<int> w;` does *not* convert: `take(w)` fails to compile, and only `take(w.v)` works, because `Wrap<int>` is a genuinely new type.' },
          { label: 'Dependent name', text: '`template<typename C> using Str_it = typename String<C>::iterator;` — `Str_it<char> p = s.begin();` works, with the `typename` machinery hidden inside the alias.' },
        ],
        result: 'Aliases rename existing types (no casts, no conversions, no specialization); wrappers manufacture new ones (members, casts, conversions). Choose renaming when the goal is only readability.',
      },
      {
        title: 'Working through template aliases',
        problem: 'Alias templates. Your task: write alias templates with `using`, and contrast them with `typedef`, which cannot be parameterized.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: write alias templates with `using`, and contrast them with `typedef`, which cannot be parameterized. Write down the guarantee you will rely on — for this chapter it is: `template<typename T> using X = ...;` declares a parameterized synonym — the templated `typedef` the language lacked' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename T> T larger(T a, T b) { return (a < b) ? b : a; }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain alias-as-pure-synonym: no new type, no new members, no specialization of an alias — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: An alias is pure naming: same type, no new members, no specialization of the alias itself If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `template<typename T> using X = ...;` declares a parameterized synonym — the templated `typedef` the language lacked Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      '`template<typename T> using X = ...;` declares a parameterized synonym — the templated `typedef` the language lacked',
      'An alias is pure naming: same type, no new members, no specialization of the alias itself',
      'The workhorse use is shortening dependent names such as `typename String<C>::iterator`',
    ],
    quiz: [
      {
        q: 'After `template<typename T> using Vec = std::vector<T>;`, the types `Vec<int>` and `std::vector<int>` are',
        options: ['different types with an implicit conversion', 'the same type — the alias is pure naming', 'related by inheritance', 'unrelated'],
        answer: 1,
        explanation: 'A template alias introduces no type at all; `Vec<int>` is simply another spelling of `std::vector<int>`, interchangeable in every context.',
      },
      {
        q: 'Which can NOT be done with a template alias?',
        options: ['Shorten `std::vector<T, My_alloc<T>>` to one name', 'Fix some template arguments while leaving others open', 'Add member functions to the named template', 'Hide the `typename` in a dependent name'],
        answer: 2,
        explanation: 'An alias has no type of its own — it cannot add members, change behavior, or be specialized; everything it names behaves exactly as before.',
      },
      {
        q: 'In `template<typename C> using String_iterator = typename String<C>::iterator;`, why is the word `typename` required?',
        options: ['It names the template parameter’s keyword, like `class`', 'Because `String<C>::iterator` is a dependent name: before `C` is known, the compiler cannot know it names a type', 'It is optional decoration', 'Because aliases must end in a type'],
        answer: 1,
        explanation: 'Dependent names are ambiguous until instantiated — `iterator` could be a static member — so the compiler requires `typename` to be told this one is a type; the alias then hides that detail from users.',
      },
    ],
  },

  // ------------------------------------------------------------ 23.7
  {
    sectionId: 'cpp-ch23-s7',
    readingTime: 7,
    intro: 'Where do template definitions live? The compiler can only instantiate what it can see, so the general rule is blunt: template definitions go in header files. The exceptions are the explicit instantiation mechanisms — a definition that generates the specialization once, in exactly one translation unit, and the `extern template` declaration that promises it exists and suppresses local generation everywhere else. Together they are the knobs for template compile time and code size.',
    objectives: [
      'Explain why template definitions must be visible at the point of instantiation — the inclusion model',
      'Use explicit instantiation definitions and `extern template` declarations to control code generation',
      'Organize a real project’s template code: headers for the generic, one translation unit for the hot specializations',
    ],
    concepts: [
      {
        term: 'The inclusion model',
        kind: 'law',
        statement: 'To instantiate a template, the compiler must see its **full definition** — unlike a normal function, which compiles from a declaration and links later. So template definitions belong in headers, included wherever the template is used, unless explicit instantiation makes the body visible indirectly.',
        detail: 'This is why the standard library is almost entirely headers, and why the book’s rule is stated so flatly: put template definitions in a header unless you have a specific, measured reason to do otherwise.',
      },
      {
        term: 'Why bodies must be visible',
        kind: 'insight',
        statement: 'Generating `sum<std::vector<int>::iterator, double>` is **code generation with the arguments substituted**, not an ordinary call: the compiler needs the body in the very translation unit that triggers the instantiation. A declaration alone says the template exists; it cannot produce the specialization.',
        detail: 'A declaration does suffice when the specialization is explicitly instantiated somewhere else — which is exactly the contract the next two mechanisms make explicit.',
      },
      {
        term: 'Explicit instantiation',
        kind: 'definition',
        statement: 'The pair of forms: `template class String<char>;` is an **explicit instantiation definition** — generate the specialization here, in this translation unit, once; and `extern template class String<char>;` is an **explicit instantiation declaration** — the specialization is generated elsewhere, so do not generate it here.',
        detail: 'The same two forms exist for function templates (`template void f<int>(int);` and `extern template void f<int>(int);`). The definition must appear in exactly one translation unit; declaring `extern` in the header and defining in one `.cpp` is the standard arrangement.',
      },
      {
        term: 'The cost model',
        kind: 'insight',
        statement: 'Without `extern template`, every translation unit that uses a specialization emits the members it uses, and the linker folds the duplicates (vague linkage). With it, the same members are emitted **once**: N translation units using `String<char>` go from emitting up to $N \\times M$ candidate bodies (M = members used) to emitting them exactly M times.',
        detail: 'The compile-time win is the usual motivation — skipped code generation and smaller object files for the hot specializations — at the cost of one extra file to maintain and the risk of forgetting the single definition. Apply it to the few specializations that dominate build times, not to every instantiation.',
      },
      {
        term: 'Source Code Organization: the working contract',
        kind: 'definition',
        statement: '**Source Code Organization.** Where templates live and how they compile. You can claim this section when you can explain why template definitions must be visible at the point of instantiation — the inclusion model — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 23 (Templates); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'Taming fifty translation units',
        problem: 'A `String<char>` template with 8 used member functions is included in 50 `.cpp` files. Count the candidate function bodies before and after explicit instantiation.',
        steps: [
          { label: 'Baseline', text: 'Definitions are in the header; implicit instantiation in each translation unit emits the members it uses — up to $50 \\times 8 = 400$ candidate bodies for the linker to fold into 8.' },
          { label: 'The arrangement', text: 'Put `extern template class String<char>;` in the header, next to the template; put `template class String<char>;` in one dedicated `string_inst.cpp`.' },
          { label: 'After', text: 'Each of the 50 translation units sees the declaration, skips code generation for `String<char>`, and the 8 bodies are emitted once, in `string_inst.cpp`: the candidate count falls from 400 to 8.' },
          { label: 'The caveats', text: 'All 50 still parse the template header — templates are visible wherever used — so this trims *generation*, not parsing; and the explicit definition must exist exactly once, or the linker (best case) objects.' },
        ],
        result: '400 candidate bodies become 8, object files shrink, and links speed up — the standard treatment for the few instantiations that measurably dominate a build.',
      },
      {
        title: 'Working through source code organization',
        problem: 'Where templates live and how they compile. Your task: explain why template definitions must be visible at the point of instantiation — the inclusion model.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: explain why template definitions must be visible at the point of instantiation — the inclusion model. Write down the guarantee you will rely on — for this chapter it is: Template definitions live in headers: the compiler must see the body in the translation unit that triggers instantiation' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename T> T larger(T a, T b) { return (a < b) ? b : a; }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — use explicit instantiation definitions and `extern template` declarations to control code generation — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: `template class String<char>;` generates the specialization once; `extern template class String<char>;` suppresses local generation elsewhere If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Template definitions live in headers: the compiler must see the body in the translation unit that triggers instantiation Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Template definitions live in headers: the compiler must see the body in the translation unit that triggers instantiation',
      '`template class String<char>;` generates the specialization once; `extern template class String<char>;` suppresses local generation elsewhere',
      'The win is skipped code generation (up to an N-fold reduction in candidate bodies) and smaller objects — parsing still happens everywhere',
    ],
    quiz: [
      {
        q: 'Why must a template definition be visible (typically: in a header) at the point of use?',
        options: ['The linker requires all code in headers', 'The compiler must substitute the arguments into the full body to generate the specialization there', 'Templates are macros and must be expanded first', 'Headers run faster'],
        answer: 1,
        explanation: 'Instantiation is code generation: producing `sum<int*>` needs the body in that translation unit, which is why template code is organized around inclusion rather than declaration-plus-link.',
      },
      {
        q: 'What does `extern template class String<char>;` do?',
        options: ['Defines the specialization here', 'Promises the specialization is generated in another translation unit and suppresses local generation', 'Makes the template virtual', 'Deletes the specialization'],
        answer: 1,
        explanation: 'It is the explicit instantiation *declaration*: every translation unit that sees it skips generating `String<char>`’s members, relying on the one translation unit containing the explicit definition.',
      },
      {
        q: 'Where must the matching `template class String<char>;` (the explicit instantiation definition) appear?',
        options: ['In every translation unit that uses it', 'In exactly one translation unit', 'In the header, before the `extern` declaration', 'Nowhere — it is optional'],
        answer: 1,
        explanation: 'The definition generates the specialization; duplicating it in several translation units violates the one-definition rule for that specialization, so it lives in a single designated file.',
      },
      {
        q: 'With explicit instantiation in place, what cost do all translation units still pay?',
        options: ['Generating the specialization’s code', 'Parsing the template definitions in the header', 'A run-time indirection on every call', 'Dynamic linking of the template'],
        answer: 1,
        explanation: '`extern template` removes code *generation*, not code *visibility*: each translation unit still parses the template definitions it includes.',
      },
    ],
  },

  // ------------------------------------------------------------ 23.8
  {
    sectionId: 'cpp-ch23-s8',
    readingTime: 4,
    intro: 'The chapter’s rules of thumb compress its two arguments: templates earn their complexity only by raising the level of abstraction, and requirements should be designed — stated, minimized, checked — even when the language (as of C++11) could not state them for you. The advice also tells you when not to write a template at all.',
    objectives: [
      'Apply the design rules: abstraction level, minimal and stated requirements, standard components first',
      'Organize template source code so instantiation is visible and build costs are controlled',
      'Recognize when a template is the wrong tool for a need',
    ],
    concepts: [
      {
        term: 'Use templates to raise the level of abstraction',
        kind: 'law',
        statement: 'A template should express **the same design for many types** — one generic `String` instead of six per-alphabet classes, one `sum` instead of one loop per container. If only one or two concrete types will ever be used, a plain class or function is simpler and should win.',
        detail: 'The standard library sets the bar: a handful of templates serving thousands of types. That is the shape of a template that has earned its keep; a template used once is indirection with no return.',
      },
      {
        term: 'Design as if concepts existed',
        kind: 'method',
        statement: 'Even without language support, write templates against **minimal, precisely stated requirements**, and check them at the interface (`static_assert`, §24.4; real `requires` clauses in C++20). The requirements are the design; the syntax is bookkeeping.',
        detail: 'This discipline is what makes the difference between a template that fails with a one-line error at the call site and one that fails forty frames deep in its own guts.',
      },
      {
        term: 'Keep instantiation costs in view',
        kind: 'method',
        statement: 'Template definitions live in headers (§23.7); for the specializations that dominate build time, add `extern template` and one explicit instantiation; and prefer fewer, well-chosen template parameters. **Measure** compile time before and after — the costs are real but localized.',
        detail: 'The complementary habit is to keep templates small and composable: several small templates instantiate and inline better than one monster template carrying every policy.',
      },
      {
        term: 'Prefer standard components',
        kind: 'insight',
        statement: 'Before writing a container, string, algorithm or utility template, check whether the standard library already has it — its components are lifted, tuned and constrained by the best concept engineering available. Write your own templates only at a genuine abstraction frontier.',
        detail: 'The advice is not deference but economics: the standard templates have been compiled, profiled and debugged on more code than any one project will ever see; a replacement must beat that on its merits.',
      },
      {
        term: 'Shipping rule for templates',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **Templates exist to raise the level of abstraction — one design serving many types; one-or-two types is not a template problem** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
    ],
    examples: [
      {
        title: 'A four-question review of a home-made Stack',
        problem: 'A team proposes `template<typename T> struct Stack` with a linked-list representation, used with three element types across 12 translation units. Review it with the chapter’s rules.',
        steps: [
          { label: 'Abstraction', text: 'Used with 3 types and likely more — the generic form is justified; the rules would have said "just write a class" only for a single hard-coded element type.' },
          { label: 'Requirements', text: 'What does `Stack<T>` need of `T`? Copy construction and destruction — no `==`, no default construction, no ordering. Stating that keeps it usable for types that cannot be default-constructed.' },
          { label: 'Standard first', text: '`std::stack<T>` on `std::deque<T>` already provides the abstraction, tested and tuned — the home-made version must win on something measurable to be worth its maintenance.' },
          { label: 'Organization', text: 'Definition in `Stack.h`; since `Stack<int>` dominates build time in 12 files, add `extern template class Stack<int>;` in the header and one explicit instantiation in `Stack.cpp` — candidate bodies drop from $12 \\times M$ to $M$.' },
        ],
        result: 'Either adopt `std::stack`, or keep the custom template with its requirements stated, its definition in a header, and its hot instantiation declared `extern` — each rule pulling its own weight.',
      },
      {
        title: 'Reviewing templates code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the design rules: abstraction level, minimal and stated requirements, standard components first.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Templates exist to raise the level of abstraction — one design serving many types; one-or-two types is not a template problem' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `template<typename T> T larger(T a, T b) { return (a < b) ? b : a; }`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: organize template source code so instantiation is visible and build costs are controlled. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: State and check minimal requirements at the interface, even without language support for concepts' },
        ],
        result: 'The review ends with findings tied to reasons: Templates exist to raise the level of abstraction — one design serving many types; one-or-two types is not a template problem Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      'Templates exist to raise the level of abstraction — one design serving many types; one-or-two types is not a template problem',
      'State and check minimal requirements at the interface, even without language support for concepts',
      'Definitions in headers, `extern template` for the hot specializations, and the standard library checked first',
    ],
    quiz: [
      {
        q: 'The strongest signal that you should NOT write a class template is',
        options: ['the element type is always `int`', 'the class has virtual functions', 'you need two member functions', 'the class holds a pointer'],
        answer: 0,
        explanation: 'A template with exactly one realistic argument type is unearned generality: write the concrete class, and template it only when a second real type arrives.',
      },
      {
        q: 'By default, where do template definitions belong?',
        options: ['In a separate `.cpp` compiled once', 'In headers, included wherever the template is instantiated', 'In the same file as `main`', 'In a precompiled resource file'],
        answer: 1,
        explanation: 'The compiler needs the full body at the point of instantiation — the inclusion model; explicit instantiation is the targeted exception, not the default.',
      },
      {
        q: 'Before writing your own generic container, the chapter’s advice says to',
        options: ['inherit from the closest standard container', 'check the standard library first — its components are already lifted, tuned and constrained', 'template it on the allocator only', 'write it as a macro instead'],
        answer: 1,
        explanation: 'The standard templates are the survivors of decades of instantiation, profiling and concept engineering; a replacement must beat them on measured merits.',
      },
    ],
  },
]

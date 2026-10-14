import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup — The C++ Programming Language, 4th Edition
// Chapter 26: Instantiation (Sections 26.1 – 26.4)
// Master study content.
// ============================================================================

export const cppCh26Content: SectionContent[] = [
  // ---------------------------------------------------------------- 26.1
  {
    sectionId: 'cpp-ch26-s1',
    readingTime: 5,
    intro: 'A template is not code — it is a recipe the compiler turns into code, and that act is **instantiation**. Two questions dominate this chapter: *when* the compiler generates a definition (and how you can control it with explicit instantiation), and *what names inside the template mean* — because a template is defined once, used far away, yet must not mean something different at every use. The answers are what let templates scale from one student file to millions of lines.',
    objectives: [
      'Define instantiation and distinguish the class-template and function-template cases',
      'Explain on-demand, partial instantiation and what it implies for error checking',
      'Frame the two governing questions: when code is generated and what names mean',
    ],
    concepts: [
      {
        term: 'Instantiation',
        kind: 'definition',
        statement: '**Instantiation is generating a definition from a template plus a set of template arguments**: calling `sort(v)` on a `vector<int>` causes the compiler to stamp out `sort` specialized to those iterator types; naming `Vector<int>` where a complete type is needed stamps out the class. The program\'s code comes from the compiler applying recipes, not from the source text alone.',
        detail: 'Both class templates and function templates are instantiated — but only the parts actually used.',
      },
      {
        term: 'Instantiation on demand',
        kind: 'insight',
        statement: '**A template is instantiated only when used, and only the parts used.** A `Vector<T>` whose `sort()` member requires `<` on its element type compiles fine for a type without `<`, as long as nobody calls `sort()` on that instantiation. This is what makes generic libraries usable with types their authors never anticipated.',
        detail: 'Corollary: an error inside an unused member function is never diagnosed — templates are checked only along the paths actually taken.',
      },
      {
        term: 'The two governing questions',
        kind: 'insight',
        statement: '**When** — which contexts trigger instantiation, at which point of the program the generated definition logically lives (the point of instantiation), and how to force or suppress generation explicitly. **What names mean** — the binding rules that decide, for every name in a template, which declaration it names. Both have precise answers; they are the rest of the chapter.',
        detail: 'Both questions exist because a template\'s definition and its uses live in different scopes, files, and often different projects.',
      },
      {
        term: 'Introduction: the working contract',
        kind: 'definition',
        statement: '**Introduction.** Instantiation at a glance. You can claim this section when you can define instantiation and distinguish the class-template and function-template cases — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 26 (Instantiation); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Introduction: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, explain on-demand, partial instantiation and what it implies for error checking. Then, frame the two governing questions: when code is generated and what names mean. Finally, test the outcome against the section promise: A template is a recipe; the compiler writes the code when a specialization is actually needed.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'Counting the bodies the compiler writes',
        problem: 'One translation unit contains the calls `max(1, 2)`, `max(2.7, 3.1)`, `max(\'a\', \'b\')` and, later, `max(1, 2)` again. It also creates a `list<int>` object, calls `push_back` on it twice, and never calls `list<int>::sort`. How many template bodies does the compiler generate?',
        steps: [
          { label: 'The max calls', text: 'Three distinct argument sets — {int, int}, {double, double}, {char, char} — so three instantiations; the repeated `max(1, 2)` reuses the already-generated `max<int>`.' },
          { label: 'The class', text: 'Creating the `list<int>` object requires a complete type, so the class is instantiated — but only the members actually called get function bodies.' },
          { label: 'push_back', text: 'Called twice, but both calls name the same specialization `list<int>::push_back` — one body.' },
          { label: 'sort', text: 'Never called, never instantiated: even if its body would fail to compile for `int`, no diagnostic is owed.' },
        ],
        result: 'Four function bodies (three `max` + one `push_back`) plus one class layout — instantiation is per *use*, never per template.',
      },
      {
        title: 'Working through introduction',
        problem: 'Instantiation at a glance. Your task: define instantiation and distinguish the class-template and function-template cases.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: define instantiation and distinguish the class-template and function-template cases. Write down the guarantee you will rely on — for this chapter it is: A template is a recipe; the compiler writes the code when a specialization is actually needed.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `extern template class std::vector<int>;` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain on-demand, partial instantiation and what it implies for error checking — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Instantiation is on demand and partial: only used members come into existence. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A template is a recipe; the compiler writes the code when a specialization is actually needed. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'A template is a recipe; the compiler writes the code when a specialization is actually needed.',
      'Instantiation is on demand and partial: only used members come into existence.',
      'Two rules govern quality: when definitions are generated, and which declaration each name inside the template binds to.',
    ],
    quiz: [
      {
        q: 'Which statement about a template is accurate?',
        options: ['It is compiled into ordinary code once and shared by all argument sets', 'It is a recipe from which the compiler generates code for specific argument sets when needed', 'It is interpreted at run time', 'It is expanded textually at each use like a macro'],
        answer: 1,
        explanation: 'No code for `max<int>` exists until an instantiation of it is required — and the compiler, not the preprocessor, does the work.',
      },
      {
        q: '`list<My_type>` has a member `sort()` that requires `>` on the element type, but no one ever calls it. The program:',
        options: ['fails to compile for any `My_type` without `>`', 'compiles — `sort()` is never instantiated', 'compiles only if `My_type` derives from a sortable base', 'fails at link time'],
        answer: 1,
        explanation: 'On-demand instantiation touches only used members; the unused `sort()` never comes into existence for that type.',
      },
      {
        q: 'A translation unit contains `max(1, 2)` and, one hundred lines later, `max(1, 2)` again. The compiler generates:',
        options: ['one body, reused by the second call', 'two identical bodies', 'one body per call site after inlining', 'no body — calls are expanded inline by the preprocessor'],
        answer: 0,
        explanation: 'Both calls name the same specialization `max<int>`; the second finds the first instantiation already in place.',
      },
    ],
  },

  // ---------------------------------------------------------------- 26.2
  {
    sectionId: 'cpp-ch26-s2',
    readingTime: 7,
    intro: 'The language is exact about when a template must be instantiated: a class template where a context requires a **complete type**, a function template when it is **called** (or its address taken). It is equally exact about *where* the generated definition logically lives — the **point of instantiation** — and it hands you two manual controls: explicit instantiation, and the `extern template` declaration that suppresses implicit instantiation in all but one translation unit.',
    objectives: [
      'List the contexts that trigger implicit instantiation of class and function templates',
      'State the point-of-instantiation rules for classes and functions',
      'Control code generation with explicit instantiation and `extern template`',
    ],
    concepts: [
      {
        term: 'Triggering contexts',
        kind: 'definition',
        statement: '**A class template is instantiated where a complete type is required**: defining an object, `new`, `sizeof`, member access. A mere `Vector<int>* p;` or an `extern Vector<int> v;` mentions the name without needing the layout — no instantiation. A function template is instantiated when it is **called** or when its address is taken.',
        detail: 'This is why you can pass around pointers and references to not-yet-instantiated templates freely.',
      },
      {
        term: 'Point of instantiation (POI)',
        kind: 'definition',
        statement: 'The **POI** is the place in the source where the generated definition logically lives. For a class template used in a namespace-scope declaration, immediately **before** that declaration; for a function template called there, at the **end of the translation unit** — which is why a function template may be defined *below* its caller in the same file. Instantiations may use templates that get their own POIs in turn, and every POI for the same specialization must produce an equivalent definition.',
        detail: 'POIs are the mechanism behind "declare above, define below" for function templates — and behind the rule that a class template must be complete above its use.',
      },
      {
        term: 'Explicit instantiation',
        kind: 'method',
        statement: "`template class Vector<int>;` in a translation unit generates `Vector<int>` and its members **there and now**; `template bool less<int>(int, int);` does the same for a function. Use it to place a single instantiation in a dedicated source file instead of letting every user generate their own.",
        detail: 'Explicit instantiation of a class also instantiates its member functions and static members (member templates wait until used).',
      },
      {
        term: 'extern template',
        kind: 'definition',
        statement: "`extern template class Vector<int>;` — an explicit instantiation **declaration**: a promise that the definition is generated in some other translation unit, so implicit instantiation is suppressed here. Put it in the header, pair it with one explicit instantiation in one `.cpp`, and heavyweight template code is compiled once instead of in every user file.",
        detail: 'A C++11 addition; the standard library uses it for its own heavyweight instantiations such as `basic_string<char>`.',
      },
      {
        term: 'Weak (two-level) checking',
        kind: 'insight',
        statement: 'Templates are checked at two levels: at the **definition**, syntax and every non-dependent name are checked — enough to catch typos early; at each **instantiation**, dependent names are checked against the actual arguments. An error deep in a member function is diagnosed only if some instantiation actually needs that member.',
        detail: 'This explains the otherwise-mysterious placement of template diagnostics — sometimes far from the line that triggered them.',
      },
    ],
    examples: [
      {
        title: 'One instantiation, many translation units',
        problem: '`Vector<int>` is used in 10 translation units, and its heavy member `sort_all()` is called in 3 of them. Describe what the compiler and linker do, with and without explicit control.',
        steps: [
          { label: 'Without control', text: 'Each of the 3 translation units implicitly instantiates `sort_all<int>` at its own point of instantiation — three generations of identical code. The linker (comdat merging) keeps exactly one body in the program.' },
          { label: 'Header change', text: 'The header gains `extern template class Vector<int>;` — implicit instantiation of `Vector<int>` and its members is now suppressed in every file that includes it.' },
          { label: 'One dedicated file', text: 'A single Vector.cpp says `template class Vector<int>;` — one generation, one body, one place to set a breakpoint.' },
          { label: 'Net effect', text: 'Compile-time work drops from 3 generations to 1; the program binary is unchanged, because the linker already merged the duplicates.' },
        ],
        result: 'The explicit-instantiation-declaration pattern is a build-time and code-discipline tool, not a size tool — you save redundant generation, not bytes.',
      },
      {
        title: 'Working through template instantiation',
        problem: 'How compilers generate code. Your task: list the contexts that trigger implicit instantiation of class and function templates.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: list the contexts that trigger implicit instantiation of class and function templates. Write down the guarantee you will rely on — for this chapter it is: Classes instantiate where a complete type is required; functions when called or addressed — never for a mere pointer or extern declaration.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `extern template class std::vector<int>;` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — state the point-of-instantiation rules for classes and functions — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: POI: immediately before the namespace-scope use for a class; end of the translation unit for a called function template. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Classes instantiate where a complete type is required; functions when called or addressed — never for a mere pointer or extern declaration. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Classes instantiate where a complete type is required; functions when called or addressed — never for a mere pointer or extern declaration.',
      'POI: immediately before the namespace-scope use for a class; end of the translation unit for a called function template.',
      '`template class Vector<int>;` forces generation; `extern template class Vector<int>;` promises it lives elsewhere — one generation instead of many.',
    ],
    quiz: [
      {
        q: 'What does `Vector<int>* p = nullptr;` alone cause?',
        options: ['Full instantiation of `Vector<int>` and its members', 'Instantiation of only the declaration-related members', 'Nothing — a pointer does not require the complete type', 'A compile-time error'],
        answer: 2,
        explanation: 'Naming a pointer to an instantiation needs no object layout, so the compiler is not required to instantiate the class there.',
      },
      {
        q: 'As this chapter models it, the point of instantiation of a function template called in a translation unit is:',
        options: ['immediately before the call', 'immediately after the enclosing declaration, or the end of the translation unit', 'in the header where the template was declared', 'wherever the linker places it'],
        answer: 1,
        explanation: 'The end-of-TU rule is what lets a function template be defined below its caller in the same file; class templates, by contrast, instantiate before their use.',
      },
      {
        q: 'A header contains `extern template class Vector<int>;` and exactly one .cpp contains `template class Vector<int>;`. Ten other translation units use `Vector<int>`. How many times is the heavy member code generated?',
        options: ['Ten — one per user', 'Three — per distinct call site', 'One — in the dedicated .cpp; the others reuse it', 'Zero — the linker generates it on demand'],
        answer: 2,
        explanation: 'The instantiation declaration suppresses implicit generation in the users; the single explicit instantiation in the dedicated file is the one generation.',
      },
      {
        q: '`Vector<T>` contains a member `draw_3d()` with a syntax error, but no instantiation ever uses it. The error:',
        options: ['is reported when the template is defined', 'is reported at link time', 'is never diagnosed', 'is reported only in debug builds'],
        answer: 2,
        explanation: 'Weak checking: unused members are never instantiated, so their bodies are never fully checked.',
      },
    ],
  },

  // ---------------------------------------------------------------- 26.3
  {
    sectionId: 'cpp-ch26-s3',
    readingTime: 8,
    intro: 'The hard question: a template is defined once but used with types defined elsewhere, by code written elsewhere, in files that may not exist when the template is written — so which declaration does each name in the template body refer to? The answer composes from exactly **four contexts** and deliberately excludes the place where the template happens to be *used*: templates are not macros. The masters tier below formalizes the two-phase lookup and ADL machinery that makes this work.',
    objectives: [
      'Classify names in a template as dependent or non-dependent and state when each binds',
      'List the four contexts template names can come from — and the excluded fifth',
      'Use `typename`, `.template`, and `this->` to make dependent names resolvable',
    ],
    concepts: [
      {
        term: 'Dependent name',
        kind: 'definition',
        statement: "A name is **dependent** if its meaning could change with a template parameter — `T::value_type`, `f(t)` with `T t`, `obj.m` where `obj` has a type that depends on a parameter. Everything else is **non-dependent**. Dependent names are resolved at instantiation; non-dependent names are bound **at the definition** and never re-bound.",
        detail: 'The classification is made once, at the definition, and it decides everything that follows.',
      },
      {
        term: 'The four binding contexts',
        kind: 'definition',
        statement: "A name in a template can come from: **(1)** the template's own declarations — parameters, members, locals; **(2)** the scope of the template **definition** — enclosing namespaces and globals, where non-dependent names bind; **(3)** the **dependent base classes** — members of `B<T>`, reachable only via `this->` or qualification; **(4)** the **declaration contexts of the template arguments** — the namespaces of the argument types, reached for dependent calls by **ADL** (argument-dependent lookup). The point of use is not on the list.",
        detail: 'Deliberate design: a template\'s meaning is fixed by its definition plus its arguments — so it means the same thing in every translation unit that uses it.',
      },
      {
        term: 'Non-dependent names bind at the definition',
        kind: 'law',
        statement: "**A non-dependent name binds to the declarations visible where the template is defined — permanently.** A global `g()` visible at the template's definition is what `g()` means inside it, in every instantiation, no matter what other `g` exists at any call site. This is exactly what distinguishes templates from macros: no capture by the point of use.",
        detail: 'If you need a template to use something declared later, declare it before the template — or make it reachable through the arguments.',
      },
      {
        term: 'typename and .template disambiguation',
        kind: 'notation',
        statement: "The compiler cannot know whether the dependent qualified name `T::iterator` names a type or a static member until instantiation — so **you must say**: `typename T::iterator it;` declares a variable. Likewise `obj.template f<int>()` tells the parser that the dependent `f` is a template, so the `<` starts an argument list rather than a comparison.",
        detail: 'A dependent name is assumed to name a value unless it is qualified by `typename` (for types) or `template` (for member templates).',
      },
      {
        term: 'this-> for dependent bases',
        kind: 'method',
        statement: "Unqualified lookup **does not search a base class that depends on a template parameter** — at definition time that base could be specialized to anything. In `template<class T> struct Derived : Base<T> { void g() { draw(); } };` the call to `draw()` fails — write `this->draw();` (or `Base<T>::draw();`, or a `using Base<T>::draw;`) to make the name dependent and resolve it at instantiation against the actual base.",
        detail: 'The `this->` form preserves virtual dispatch; the qualified `Base<T>::draw()` form disables it — choose deliberately.',
      },
    ],
    figures: [
      {
        caption: 'The four binding contexts for a name used inside a template: the template\'s own declarations, the definition scope (non-dependent names — phase 1), the dependent bases (reached through `this->`), and the argument declarations (reached by ADL — phase 2). The point of use — where a template happens to be called — is never consulted: that is what makes a template mean the same thing everywhere.',
        svg: `<svg viewBox="0 0 760 400" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The four contexts a name in a template can refer to, and the excluded point of use"><text x="380" y="24" text-anchor="middle" font-size="16" fill="currentColor" opacity="0.9">where a name used inside a template comes from</text><rect x="26" y="42" width="488" height="66" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><text x="42" y="68" font-size="15" font-weight="bold" fill="currentColor">1 · the template itself</text><text x="42" y="90" font-size="12.5" fill="currentColor" opacity="0.9">parameters, member names, and names local to the definition</text><rect x="26" y="122" width="488" height="66" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><text x="42" y="148" font-size="15" font-weight="bold" fill="currentColor">2 · the definition scope</text><text x="42" y="170" font-size="12.5" fill="currentColor" opacity="0.9">enclosing namespaces and globals — non-dependent names bind here</text><rect x="26" y="202" width="488" height="66" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><text x="42" y="228" font-size="15" font-weight="bold" fill="currentColor">3 · dependent base classes</text><text x="42" y="250" font-size="12.5" fill="currentColor" opacity="0.9">members of B&lt;T&gt; — visible only through this-&gt; or explicit qualification</text><rect x="26" y="282" width="488" height="66" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><text x="42" y="308" font-size="15" font-weight="bold" fill="currentColor">4 · the argument declarations</text><text x="42" y="330" font-size="12.5" fill="currentColor" opacity="0.9">namespaces and classes of the template argument types — reached by ADL</text><rect x="536" y="112" width="210" height="188" rx="10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="7 5"/><line x1="616" y1="125" x2="666" y2="175" stroke="currentColor" stroke-width="4" opacity="0.8"/><line x1="666" y1="125" x2="616" y2="175" stroke="currentColor" stroke-width="4" opacity="0.8"/><text x="641" y="196" text-anchor="middle" font-size="13" fill="currentColor">the point of use</text><text x="641" y="216" text-anchor="middle" font-size="13" fill="currentColor">and the point of</text><text x="641" y="236" text-anchor="middle" font-size="13" fill="currentColor">instantiation</text><text x="641" y="262" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">never consulted —</text><text x="641" y="280" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">templates are not macros</text><text x="380" y="372" text-anchor="middle" font-size="12.5" fill="currentColor" opacity="0.85">phase 1 at the definition binds non-dependent names from 1–2 · phase 2 at each instantiation resolves</text><text x="380" y="390" text-anchor="middle" font-size="12.5" fill="currentColor" opacity="0.85">dependent names through 3–4 (this-&gt; for bases, ADL for argument namespaces)</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Tracing operator<< through the two phases",
        problem: "Namespace `Geo` declares `class Coord` and `std::ostream& operator<<(std::ostream&, const Coord&)`. Separately, someone writes `template<class T> void dump(const T& t) { std::cout << t; }`. A user calls `dump(c)` for a `Geo::Coord`. Why does the call compile, although `operator<<` for `Coord` is visible neither inside `dump` nor in namespace `std`?",
        steps: [
          { label: 'Phase 1 — at dump\'s definition', text: '`std::cout` is non-dependent: it binds to the `std::ostream` object declared in `<iostream>`. But `std::cout << t` has a dependent argument `t`, so the operator name is **not** bound yet — the call is postponed.' },
          { label: 'Phase 2 — at the instantiation', text: 'With `T = Geo::Coord`, the candidate set is ordinary lookup at the definition context (no `std` operator accepts a `Coord`) together with ADL over the arguments\' associated entities.' },
          { label: 'ADL computes the associates', text: 'The left argument `std::ostream` associates namespace `std`; the right argument `const Geo::Coord&` associates namespace `Geo` — the innermost enclosing namespace of the class.' },
          { label: 'Resolution', text: '`Geo::operator<<(std::ostream&, const Coord&)` is the unique candidate, and the call binds to it.' },
        ],
        result: 'The template author never mentioned `Geo`; the author of `Coord` never mentioned the template; the call resolves anyway — that is the ADL contract.',
      },
      {
        title: 'Working through name binding',
        problem: 'Where names come from in templates. Your task: classify names in a template as dependent or non-dependent and state when each binds.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: classify names in a template as dependent or non-dependent and state when each binds. Write down the guarantee you will rely on — for this chapter it is: Non-dependent names bind at the definition and never change; dependent names resolve at each instantiation.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `extern template class std::vector<int>;` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — list the four contexts template names can come from — and the excluded fifth — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: The four contexts: the template itself, the definition scope, dependent bases (via `this->`), and the arguments’ namespaces (via ADL) — never the point of use. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Non-dependent names bind at the definition and never change; dependent names resolve at each instantiation. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Non-dependent names bind at the definition and never change; dependent names resolve at each instantiation.',
      'The four contexts: the template itself, the definition scope, dependent bases (via `this->`), and the arguments\' namespaces (via ADL) — never the point of use.',
      '`typename`, `.template`, and `this->` exist because the compiler cannot classify dependent names until instantiation — you must annotate them.',
    ],
    quiz: [
      {
        q: 'A template is defined with a global `void g()` visible at its definition. A user\'s translation unit declares its own `void g(int)` and then instantiates the template, whose body calls `g()`. Which `g` is called?',
        options: ['The user\'s `g(int)`, because it is closer to the use', 'The global `g()` visible at the definition', 'Whichever is declared later', 'The call is ambiguous'],
        answer: 1,
        explanation: 'The name is non-dependent, so it was bound at the definition, permanently — the point of use cannot rebind it.',
      },
      {
        q: 'Inside a template, `T::iterator` must be named as a type in a declaration. The correct spelling is:',
        options: ['`T::iterator it;`', '`typename T::iterator it;`', '`template T::iterator it;`', '`this->T::iterator it;`'],
        answer: 1,
        explanation: 'Until instantiation the compiler cannot know that the dependent qualified name names a type; `typename` says so.',
      },
      {
        q: 'In `template<class T> struct D : B<T> { void g() { draw(); } };` the call to `draw()` fails to compile. Why?',
        options: ['`B<T>` has no member `draw`', 'Unqualified lookup never searches a base that depends on a template parameter', '`draw` is not declared in namespace `std`', 'Templates cannot call member functions'],
        answer: 1,
        explanation: 'At definition time the dependent base is an unknown specialization, so unqualified lookup skips it — write `this->draw();` to resolve at instantiation.',
      },
      {
        q: 'ADL finds `Geo::operator<<(std::ostream&, const Coord&)` because:',
        options: ['`operator<<` is a member of `std::ostream`', 'the operator is declared in the same namespace as `Coord`, an argument of the dependent call', 'the template definition includes a Geo header', 'the linker searches all translation units'],
        answer: 1,
        explanation: 'For a dependent call, the associated namespaces of the argument types are searched — `Coord`\'s namespace is `Geo`, where the operator lives.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Two-phase lookup and argument-dependent lookup, formally',
        blocks: [
          {
            kind: 'para',
            body: "The designer's problem: a template must be checked as strictly as ordinary code, yet work with types its author never saw — and mean the same thing in every translation unit that uses it. Two-phase lookup is the resolution. Every name in a template is classified at the definition as **dependent** (its meaning could vary with a template parameter) or **non-dependent**. Non-dependent names get one meaning, fixed forever at the definition. Dependent names get a meaning *composed* at each instantiation from exactly two ingredients: the definition context and the declaration contexts of the arguments. The point of use is excluded by construction — precisely the property macros lack, and the reason a template can be maintained independently of its users.",
          },
          {
            kind: 'theorem',
            heading: 'The two-phase lookup theorem',
            body: "Let $N$ be a name used in a template $F$ with parameters $T_1, \\dots, T_n$. **Phase 1, at the definition of $F$:** $F$ is checked for syntactic well-formedness; every name is classified as dependent or non-dependent; every non-dependent name is looked up against the declarations visible at the definition and **bound permanently**. **Phase 2, at each instantiation `F<A1, ..., An>`:** each dependent name is resolved anew — a qualified name `Q::m` is looked up in the scope that the (now concrete) `Q` denotes, and an unqualified function name in a dependent call is looked up by the ordinary lookup rules *restricted to the definition context*, together with **argument-dependent lookup** over the associated namespaces and classes of the argument types. A non-dependent call uses only phase 1's binding. No lookup consults the lexical context of the use, the point of instantiation, or anything else.",
          },
          {
            kind: 'example',
            heading: 'Why the point of use is powerless',
            body: "Declare `int a = 0;` at namespace scope, then `template<class T> void bump() { ++a; }`, then user code that declares its own `double a = 3.14;` before calling `bump<int>()`. The `a` inside `bump` was bound at the definition — to the global `int` — and phase 2 cannot rebind it, because `a` is not dependent. The user's `a` is never a candidate. Contrast a macro: `#define BUMP() (++a)` expands where it is used and captures whatever `a` is in scope there. This exclusion is the entire difference in maintainability between templates and preprocessor tricks — and the reason the standard forbids a template's meaning to depend on where it is instantiated. To influence a template, you must be in its definition's scope or be one of its arguments; there is no third door.",
          },
          {
            kind: 'derivation',
            heading: 'Computing the associated entities',
            body: "For a call $f(x_1, \\dots, x_k)$ whose name is unqualified, ADL computes, for each argument's type $X_i$, its **associated entities**: a **class type** contributes itself (friends and nested members matter) plus its innermost enclosing namespace, plus, recursively, the associated entities of every base class; a **class template specialization** contributes the entities of the template's own declaration plus those of each template argument; an **enumeration** contributes its enclosing class (if a member) or its innermost enclosing namespace; **pointers and arrays** contribute their pointee's or element's entities, and a **function type** the union over its parameters and return type. The candidate set for the call is the union of ordinary lookup (for dependent calls, restricted to the definition context) and every function found in those entities. Worked: for `Geo::Coord` the associated set is exactly {Geo}; for `std::vector<Geo::Coord>` it is {std, Geo} — so a call `f(v)` on such a vector searches *both* namespaces even though the caller never named either.",
          },
          {
            kind: 'example',
            heading: 'The swap two-step — the idiom ADL forces',
            body: "Suppose `Big_matrix` holds $10{,}000$ doubles — $80{,}000$ bytes — behind two members and is copy-only. The generic `std::swap` performs three copies: $3 \\times 80{,}000 = 240{,}000$ bytes of traffic. Its author writes `swap(Big_matrix&, Big_matrix&)` next to the class, exchanging the two 16-byte handles: about 48 bytes moved. Now compare spellings inside a generic algorithm. `std::swap(a, b)` is a *qualified* call: resolved entirely within `std`, no ADL — the compiler silently picks the $240{,}000$-byte version. `using std::swap; swap(a, b);` puts the generic into the definition context, and the unqualified call lets ADL contribute the author's version, which overload resolution prefers — a 5,000-fold reduction in bytes moved, from one spelling change. Every customization point in the standard library must be invoked this way.",
          },
          {
            kind: 'remark',
            body: 'ADL fires only for unqualified function *calls*. An algorithm that takes a function object — `for_each(b, e, my_fun)` — invokes `my_fun(*p)` as an object\'s call operator: no namespace search, no surprises, typically inlinable. This is one reason the standard library passes function objects by value and why generic code prefers them to function pointers. A bare overloaded function *name*, by contrast, denotes an entire overload set that template argument deduction cannot narrow — pass it with an explicit type or wrap it in a lambda.',
          },
          {
            kind: 'application',
            heading: 'Designing for the model',
            body: 'Three habits make two-phase lookup work for you rather than against you. **(1) Keep a type and its operations in one namespace** — ADL binds them into any template that receives the type; this is how `operator<<`, `swap`, and `begin`/`end` are found. **(2) Expose customization points the way `std` does**: call unqualified, after a `using`-declaration of your general fallback, so the caller\'s better match wins by ADL. **(3) When a template must use an operation the argument type may not have, take the operation as an explicit parameter** (a policy object or a function argument) rather than hunting for it — explicit beats implicit, and the failure becomes a clear "no such parameter" instead of a lookup mystery. The C++20 ranges library formalized (2) as customization point objects; the underlying lookup semantics are unchanged.',
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- 26.4
  {
    sectionId: 'cpp-ch26-s4',
    readingTime: 4,
    intro: 'The binding rules reward a small, explicit vocabulary of habits: minimize what a template needs, make the remaining needs findable, and follow the customization-point idiom when you write generic code yourself. Diagnosing failures gets easy once you ask which phase the error came from.',
    objectives: [
      'Apply the minimum-dependency rule when designing templates',
      'Use the customization-point idiom in your own generic code',
      'Diagnose the two classic binding failures by the phase they occur in',
    ],
    concepts: [
      {
        term: 'Minimize dependencies',
        kind: 'insight',
        statement: '**The fewer names a template uses, the more types it works with** — and the fewer name-binding surprises it can have. Declare everything the template needs *before* the definition, or make it reachable through the arguments. Every name is a type requirement in disguise.',
        detail: 'This is the same discipline that makes algorithms in the standard library work with minimal iterator requirements.',
      },
      {
        term: 'Make the dependency findable',
        kind: 'method',
        statement: '**If a template needs an operation on its argument type, put that operation where ADL will find it: in the same namespace as the type.** Do not rely on a global function that happens to be visible in your header — that works today and breaks when the header is included from somewhere else.',
        detail: 'Co-locating a type with its operations is not style; it is what makes the phase-2 lookup succeed for every user.',
      },
      {
        term: 'The customization-point idiom',
        kind: 'method',
        statement: 'In generic code, invoke customizable operations as `using std::swap; swap(a, b);` — the `using` supplies the general fallback into the definition context, and the unqualified call lets ADL find a better match from the argument\'s namespace. A qualified `std::swap(a, b)` disables this and silently picks the generic.',
        detail: 'Whatever your library\'s equivalent of `swap` is, the same two-line shape applies.',
      },
      {
        term: 'Diagnose by phase',
        kind: 'insight',
        statement: '**A template error at definition time is a non-dependent problem** — a misspelled or undeclared name, a missing header. **An error at instantiation time involves a dependent name** — the argument type is missing something: a missing `typename`, a missing `this->`, a missing operation.',
        detail: 'Read the error\'s location first, the message second; the phase tells you which half of the model to suspect.',
      },
      {
        term: 'Shipping rule for instantiation',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **Minimize the names a template uses — each one is a type requirement in disguise.** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
    ],
    examples: [
      {
        title: 'Diagnosing the dependent-base failure',
        problem: "`template<class T> struct Base { void draw() const; };` and `template<class T> struct Derived : Base<T> { void report() { draw(); } };` fail to compile with \"draw was not declared in this scope\". Why, and what are the fixes?",
        steps: [
          { label: 'Why it fails', text: 'At `Derived`\'s definition, unqualified lookup for `draw` searches `Derived` and the enclosing scopes — but not `Base<T>`, because a base that depends on a template parameter could be specialized to anything, so the compiler refuses to guess.' },
          { label: 'Fix 1 — this->', text: '`this->draw();` makes the name dependent: it is resolved at instantiation, against the actual `Base<T>` — and it preserves virtual dispatch if `draw` is virtual.' },
          { label: 'Fix 2 — qualification', text: '`Base<T>::draw();` also works, but suppresses virtual dispatch — it always calls the base\'s version.' },
          { label: 'Fix 3 — using-declaration', text: '`using Base<T>::draw;` inside `Derived` brings the name into scope once, keeping later unqualified calls clean.' },
        ],
        result: 'Prefer `this->` for member lookup in template hierarchies: it fixes the lookup and keeps the run-time behavior you expect.',
      },
      {
        title: 'Reviewing instantiation code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the minimum-dependency rule when designing templates.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Minimize the names a template uses — each one is a type requirement in disguise.' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `extern template class std::vector<int>;`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: use the customization-point idiom in your own generic code. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: Customization points are invoked `using std::swap; swap(a, b);` — never `std::swap(a, b)`.' },
        ],
        result: 'The review ends with findings tied to reasons: Minimize the names a template uses — each one is a type requirement in disguise. Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      'Minimize the names a template uses — each one is a type requirement in disguise.',
      'Customization points are invoked `using std::swap; swap(a, b);` — never `std::swap(a, b)`.',
      'Definition-time errors mean non-dependent problems; instantiation-time errors mean a dependent name is missing something.',
    ],
    quiz: [
      {
        q: 'Your generic algorithm needs a swappable type. The correct spelling inside the algorithm is:',
        options: ['`std::swap(a, b);`', '`using std::swap; swap(a, b);`', '`a.swap(b);`', '`swap<T>(a, b);`'],
        answer: 1,
        explanation: 'The `using` puts the general fallback into the definition context; the unqualified call lets ADL find a user version specialized for the argument type. A qualified call would disable ADL.',
      },
      {
        q: 'A name in a template that does not mention any parameter is looked up:',
        options: ['at each instantiation, in the caller\'s scope', 'at the definition, against the declarations visible there', 'in namespace `std` first', 'at link time'],
        answer: 1,
        explanation: 'Non-dependent names bind at the definition, permanently — this is what makes templates independent of their points of use.',
      },
      {
        q: 'Calling `Base<T>::draw()` instead of `this->draw()` inside a derived template is risky because:',
        options: ['it fails to compile', 'it suppresses virtual dispatch, always calling the base version', 'it binds at the point of use', 'it disables the empty-base optimization'],
        answer: 1,
        explanation: 'Qualification names the base\'s implementation directly — if `draw` is virtual and overridden, the override is bypassed.',
      },
    ],
  },
]

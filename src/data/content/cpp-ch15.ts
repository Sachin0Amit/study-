import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th ed. (C++11) — Chapter 15
// Source Files and Programs (TC++PL pp. 419-446). Section ids are verbatim
// from src/data/library-parts/cpp.ts (cpp-ch15-s1 .. cpp-ch15-s5).
// ============================================================================

export const cppCh15Content: SectionContent[] = [
  // ------------------------------------------------------------------ 15.1
  {
    sectionId: 'cpp-ch15-s1',
    readingTime: 6,
    intro: "A C++ program is not what the compiler sees — the compiler sees one translation unit at a time and has no idea your other files exist. The program is assembled later, by the linker, out of object files. Understanding that split — and the header/source convention that makes declarations identical across translation units — is what separates compiling programs from building them.",
    objectives: [
      "Define translation unit and explain what the compiler does and does not see",
      "Explain #include as textual splicing and the declaration/definition distinction that makes it work",
      "Read and predict linker errors: undefined reference and multiple definition",
    ],
    concepts: [
      {
        term: 'Translation unit',
        kind: 'definition',
        statement: "After preprocessing (all `#include` directives spliced in, macros expanded), **one source file is one translation unit (TU)** — the complete unit the compiler translates into an object file. The compiler never sees two TUs at once; \"the program\" is a linker-time concept.",
        detail: 'This is the root fact of physical design: every rule about headers, declarations and linkage exists to let independently compiled fragments agree with each other without ever being seen together.',
      },
      {
        term: '#include is copy and paste',
        kind: 'insight',
        statement: "`#include \"stack.h\"` **splices the header's text into the translation unit** before compilation. The compiler does not know files, projects or headers — it simply parses the resulting stream. Headers exist so that the same declarations reach every TU **identically, by construction**.",
        detail: 'The convention follows: declarations the world needs go in a `.h`; definitions stay in a `.cpp`. The language does not enforce the split — nothing stops you defining functions in a header except the linker, soon.',
      },
      {
        term: 'Declaration versus definition',
        kind: 'definition',
        statement: "A **declaration** introduces a name and its type (`void push(int);`); a **definition** additionally provides the body or storage (`void push(int) { /* ... */ }`). The One-Definition Rule: every entity may be defined **at most once per program**; it may be declared many times, and every declaration must agree.",
        detail: 'Class definitions, inline functions and templates are the exceptions — each TU that uses them needs a (token-identical) definition, which is exactly why they live in headers.',
      },
      {
        term: 'What the linker does',
        kind: 'definition',
        statement: "The linker merges object files and libraries, resolving each cross-TU reference: every **undefined reference** must be matched by exactly one definition among the objects and libraries, and each **strong definition** must occur only once. Failures are reported at link time — undefined reference (no definition found) or multiple definition (two found).",
        detail: 'Note the timing: these are not compile errors. The compiler checked each TU in isolation; only the linker holds the whole symbol table and can see the mismatch.',
      },
      {
        term: 'Why compile separately at all',
        kind: 'method',
        statement: "Separate compilation buys: **incremental rebuilds** (change one `.cpp`, recompile one TU, relink), **interface enforcement** (the header is the published contract), and **binary distribution** (ship object files and headers, keep the source).",
        detail: 'The price is bookkeeping: the include graph (15.3) decides what must be rebuilt, and the linkage rules (15.2) decide what may be shared. The chapter\'s remaining sections are those two bills, paid in order.',
      },
    ],
    figures: [
      {
        afterConcept: 3,
        caption: 'Figure 15.1 — Separate compilation. `#include` splices the header text into each `.cpp`; each translation unit compiles in isolation to an object file carrying symbol tables; the linker pairs `user.o`\'s undefined reference to `push` with `stack.o`\'s definition and pulls the rest from the standard library. Only the linker ever sees the whole program.',
        svg: `<svg viewBox="0 0 820 360" width="100%" role="img" aria-label="Pipeline from headers and sources through compilers and object files to the linker and executable"><text x="410" y="20" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-style="italic" fill="currentColor" opacity="0.85">#include is textual copy — each .cpp becomes one translation unit</text><text x="410" y="36" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-style="italic" fill="currentColor" opacity="0.85">the compiler sees one TU at a time; the linker assembles the program</text><rect x="25" y="150" width="120" height="60" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="85" y="174" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">stack.h</text><text x="85" y="194" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">void push(int);</text><rect x="225" y="55" width="130" height="54" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="290" y="78" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">user.cpp</text><text x="290" y="96" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">calls push</text><rect x="225" y="251" width="130" height="54" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="290" y="274" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">stack.cpp</text><text x="290" y="292" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">defines push</text><path d="M 145 168 L 185 168 L 185 82 L 221 82" fill="none" stroke="currentColor" stroke-width="1.4"/><polygon points="215,78 215,86 223,82" fill="currentColor"/><text x="152" y="150" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.85">#include</text><path d="M 145 192 L 185 192 L 185 278 L 221 278" fill="none" stroke="currentColor" stroke-width="1.4"/><polygon points="215,274 215,282 223,278" fill="currentColor"/><text x="152" y="216" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.85">#include</text><rect x="415" y="55" width="110" height="54" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="470" y="78" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13.5" font-weight="bold" fill="currentColor">compiler</text><text x="470" y="96" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">one TU at a time</text><rect x="415" y="251" width="110" height="54" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="470" y="274" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13.5" font-weight="bold" fill="currentColor">compiler</text><text x="470" y="292" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">one TU at a time</text><rect x="575" y="55" width="115" height="54" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="632" y="73" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">user.o</text><text x="632" y="89" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">defines: main</text><text x="632" y="103" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">undefined: push</text><rect x="575" y="251" width="115" height="54" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="632" y="269" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">stack.o</text><text x="632" y="287" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">defines: push</text><line x1="355" y1="82" x2="411" y2="82" stroke="currentColor" stroke-width="1.4"/><polygon points="405,78 405,86 413,82" fill="currentColor"/><line x1="525" y1="82" x2="571" y2="82" stroke="currentColor" stroke-width="1.4"/><polygon points="565,78 565,86 573,82" fill="currentColor"/><line x1="355" y1="278" x2="411" y2="278" stroke="currentColor" stroke-width="1.4"/><polygon points="405,274 405,282 413,278" fill="currentColor"/><line x1="525" y1="278" x2="571" y2="278" stroke="currentColor" stroke-width="1.4"/><polygon points="565,274 565,282 573,278" fill="currentColor"/><rect x="415" y="158" width="110" height="44" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="470" y="178" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="bold" fill="currentColor">libstdc++.a</text><text x="470" y="194" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">standard library</text><rect x="575" y="158" width="115" height="44" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/><text x="632" y="178" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">linker</text><text x="632" y="194" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">resolves symbols</text><rect x="735" y="158" width="70" height="44" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="770" y="178" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">a.out</text><text x="770" y="194" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">executable</text><line x1="632" y1="109" x2="632" y2="154" stroke="currentColor" stroke-width="1.4"/><polygon points="628,148 636,148 632,156" fill="currentColor"/><line x1="632" y1="251" x2="632" y2="206" stroke="currentColor" stroke-width="1.4"/><polygon points="628,212 636,212 632,204" fill="currentColor"/><line x1="525" y1="180" x2="571" y2="180" stroke="currentColor" stroke-width="1.4"/><polygon points="565,176 565,184 573,180" fill="currentColor"/><line x1="690" y1="180" x2="731" y2="180" stroke="currentColor" stroke-width="1.4"/><polygon points="725,176 725,184 733,180" fill="currentColor"/><path d="M 690 90 L 716 90 L 716 270 L 694 270" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4"/><polygon points="700,266 700,274 692,270" fill="currentColor"/><text transform="rotate(-90 724 180)" x="724" y="180" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.9">undefined reference to push — resolved</text></svg>`,
      },
    ],
    examples: [
      {
        title: 'The price of touching a header',
        problem: 'A project has 20 translation units, each taking 2 s to compile, plus a 1 s link. Compare the full rebuild time after (a) a change to one `.cpp` file only, and (b) a change to a header included by all 20. Explain the difference.',
        steps: [
          { label: 'Change a .cpp', text: 'Only its TU is stale: 1 compile (2 s) + link (1 s) = **3 s**. The other 19 object files are reused as-is — that is what separate compilation buys.' },
          { label: 'Change a header', text: 'The header text is spliced into all 20 TUs, so all 20 are stale: 20 compiles ($20 \\times 2$ s) + link = **41 s**.' },
          { label: 'Why the asymmetry', text: 'A TU depends on everything textually spliced into it, and transitively on everything those headers include. Editing a definition inside `stack.cpp` changes no spliced text elsewhere; editing `stack.h` changes the text of every includer — and the compiler cannot know the edit was harmless.' },
          { label: 'The design consequence', text: 'This is why 15.3 obsesses over shrinking include graphs: a header reached by all TUs multiplies every edit into a project-wide rebuild, and a header reached by none multiplies nothing.' },
        ],
        result: 'Source-file change: 3 s. Header change: 41 s — nearly 14 times more — because the header is textually present in all 20 translation units.',
      },
      {
        title: 'Working through separate compilation',
        problem: 'Translation units and linkage. Your task: define translation unit and explain what the compiler does and does not see.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: define translation unit and explain what the compiler does and does not see. Write down the guarantee you will rely on — for this chapter it is: One .cpp plus its spliced headers is one translation unit; the compiler translates TUs in isolation, and the program exists only at link time.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `int main(int argc, char* argv[]) { return 0; }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain #include as textual splicing and the declaration/definition distinction that makes it work — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Declarations are shared via headers (textual splicing); definitions are unique per program — at most one, with class/inline/template definitions replicated identically where needed. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: One .cpp plus its spliced headers is one translation unit; the compiler translates TUs in isolation, and the program exists only at link time. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'One .cpp plus its spliced headers is one translation unit; the compiler translates TUs in isolation, and the program exists only at link time.',
      'Declarations are shared via headers (textual splicing); definitions are unique per program — at most one, with class/inline/template definitions replicated identically where needed.',
      'Cross-TU mismatches are linker errors, not compiler errors: undefined reference (no definition found), multiple definition (two found).',
    ],
    quiz: [
      {
        q: 'What exactly does the compiler see when you compile `user.cpp`?',
        options: [
          'All files of the project, plus the project manifest',
          'One translation unit: user.cpp after preprocessing, with every #include spliced in textually',
          'The .cpp files only; headers are read by the linker',
          'Nothing until the link step',
        ],
        answer: 1,
        explanation: 'The preprocessor pastes the headers into the source; the compiler parses that one stream. It has no notion of your other files — that is the entire point of separate compilation.',
      },
      {
        q: 'The build fails with: undefined reference to `push(int)`. What is the cause?',
        options: [
          'A syntax error in the header declaring push',
          'Some translation unit called push, but no object file or library supplied to the linker contains its definition',
          'push was declared twice in the same header',
          'push was declared static in the wrong file',
        ],
        answer: 1,
        explanation: 'The compiler was satisfied by the declaration (that is all it needs to generate the call); the linker, holding all symbol tables, found no definition among the supplied objects and libraries.',
      },
      {
        q: 'A project rebuild is triggered by editing a single header included by every translation unit. Why must every object file be rebuilt?',
        options: [
          'The header\'s mtime invalidates all files by convention',
          'The header\'s text is spliced into every TU, so every TU\'s input changed — the compiler cannot assume the edit was semantically harmless',
          'Headers are recompiled themselves into a shared cache',
          'The linker cannot mix object files of different ages',
        ],
        answer: 1,
        explanation: 'Compilation is a pure function of the TU text. Change the text anywhere and the TU must be retranslated — correctness cannot be assumed from intent.',
      },
      {
        q: 'Which statement about the One-Definition Rule is correct?',
        options: [
          'Every name may be defined once per translation unit',
          'Every entity may be defined at most once per program; declarations may repeat, but class and inline definitions may replicate token-identically across TUs',
          'Definitions may appear only in headers',
          'The ODR is enforced by a linker warning only',
        ],
        answer: 1,
        explanation: 'One definition per program is the rule; the class/inline/template exception allows the identical definition in each TU that needs it — which is precisely why they live in headers.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.2
  {
    sectionId: 'cpp-ch15-s2',
    readingTime: 7,
    intro: "Linkage is the rulebook for names crossing translation-unit boundaries — or being forbidden from crossing. External linkage lets a definition in one TU serve a reference in another; internal linkage keeps a name private to its TU; and the initialization order of the globals that linkage shares is the classic C++ trap this section teaches you to sidestep.",
    objectives: [
      "Classify names as having external or internal linkage, and choose the right one deliberately",
      "Explain inline as an ODR escape hatch — a definition allowed to replicate across TUs — not merely an optimization hint",
      "Diagnose the initialization-order problem for nonlocal variables and fix it with function-local statics",
    ],
    concepts: [
      {
        term: 'External linkage',
        kind: 'definition',
        statement: "A name with **external linkage** can be used from translation units other than the one that defines it: ordinary functions and mutable namespace-scope variables. The definition lives in one TU; declarations in the header let others reference it, and the linker unites them.",
        detail: 'This is the default for functions and variables at namespace scope — the \"shared\" setting, and the reason a missing `static` can accidentally export an internal helper into the program\'s symbol space.',
      },
      {
        term: 'Internal linkage',
        kind: 'definition',
        statement: "A name with **internal linkage** is local to its translation unit: entities in an **unnamed namespace**, namespace-scope names declared `static`, and namespace-scope `const`/`constexpr` variables (internal by default). Two TUs may define same-named internals independently — they are different objects.",
        detail: 'That last clause is why `constexpr int size = 10;` can live safely in a header: each TU gets its own copy, which is exactly what a constant wants.',
      },
      {
        term: 'inline is a linkage concept',
        kind: 'definition',
        statement: "**`inline` means: this definition may appear identically in multiple translation units.** The linker merges them; only the rule that all definitions must be token-identical (and mean the same) keeps it sound. Inlining as an optimization is the compiler\'s business — `inline` is the ODR permission slip that makes header-defined functions legal.",
        detail: 'C++17 added `inline` variables for the same purpose; before that, class `static constexpr` members were the loophole. Every header-resident function or template relies on this rule.',
      },
      {
        term: 'Nonlocal initialization order',
        kind: 'law',
        statement: "Within a translation unit, namespace-scope objects are initialized **in order of definition**. Across translation units, the order is **unspecified**. So a global constructed in TU-a that reads a global defined in TU-b has a 50/50 chance of reading an uninitialized object.",
        detail: 'The fix is construct-on-first-use: wrap the global in a function returning a reference to a **function-local static** — initialized the first time control passes through it (and thread-safe since C++11), so the order problem disappears for every caller.',
      },
      {
        term: 'Language linkage',
        kind: 'notation',
        statement: "`extern \"C\" { /* ... */ }` declares its contents to have **C language linkage**: names are unmangled (or C-mangled), so C and C++ code can interoperate. A C-linkage function cannot be overloaded — the C world has one symbol per name.",
        detail: 'Headers meant for both languages gate the block: `#ifdef __cplusplus extern \"C\" { #endif` ... so C compilers skip what only C++ needs.',
      },
    ],
    examples: [
      {
        title: 'The initialization-order fiasco, defused',
        problem: 'TU-a defines `Registry reg("main");` whose constructor reads settings from TU-b\'s global `Config cfg;`. What can go wrong, and what one-line shape fixes it for every number of translation units?',
        steps: [
          { label: 'The dependency', text: 'reg\'s constructor reads cfg. Within TU-b, cfg is initialized in definition order; within TU-a, reg too. **Across** the two TUs, no order is specified.' },
          { label: 'The failure', text: 'If the linker/run order initializes reg before cfg — 1 of the 2 possible orders — the constructor reads an object whose constructor has not run: undefined behavior, typically garbage settings or a crash that appears only on some builds.' },
          { label: 'The fix', text: 'Replace the global in TU-b with `const Config& cfg() { static Config c; return c; }`. The function-local static initializes the first time control passes through it — after TU-a\'s reg, before TU-a\'s reg, it does not matter which.' },
          { label: 'Why it is safe', text: 'Initialization order becomes *demand-driven*: whoever reaches cfg() first constructs it, on that thread, exactly once (C++11 guarantees thread-safety here). With N dependent TUs there are N! possible orders, and every one of them is now correct.' },
          { label: 'The costs', text: 'One guard check per access (a load-and-branch, branch-predicted to nothing after the first call) and the loss of \"plain global\" syntax: `cfg().setting` instead of `cfg.setting` — the standard trade in code that must not depend on link order.' },
        ],
        result: 'Before: 2 orders, 1 broken. After: every order works — demand-driven initialization scales to any number of TUs.',
      },
      {
        title: 'Working through linkage',
        problem: 'Internal, external and no linkage. Your task: classify names as having external or internal linkage, and choose the right one deliberately.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: classify names as having external or internal linkage, and choose the right one deliberately. Write down the guarantee you will rely on — for this chapter it is: External linkage shares a name across TUs (one definition, many references); internal linkage — unnamed namespaces, static, const/constexpr at namespace scope — keeps it TU-private.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `int main(int argc, char* argv[]) { return 0; }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain inline as an ODR escape hatch — a definition allowed to replicate across TUs — not merely an optimization hint — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: inline is an ODR permission slip: the definition may replicate token-identically across TUs; that legality is what makes header-defined functions and templates possible. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: External linkage shares a name across TUs (one definition, many references); internal linkage — unnamed namespaces, static, const/constexpr at namespace scope — keeps it TU-private. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'External linkage shares a name across TUs (one definition, many references); internal linkage — unnamed namespaces, static, const/constexpr at namespace scope — keeps it TU-private.',
      'inline is an ODR permission slip: the definition may replicate token-identically across TUs; that legality is what makes header-defined functions and templates possible.',
      'Cross-TU initialization order is unspecified: wrap globals in functions returning function-local statics, and the order problem vanishes for every caller.',
    ],
    quiz: [
      {
        q: 'Two translation units each define `static int count = 0;` at namespace scope. What exists in the program?',
        options: [
          'One shared count; the linker merges them',
          'Two independent objects — internal linkage keeps each name private to its TU',
          'A compile error: duplicate definition',
          'Undefined behavior',
        ],
        answer: 1,
        explanation: '`static` at namespace scope (or an unnamed namespace) gives internal linkage: the same spelling in two TUs denotes two different objects. That is the privacy the mechanism is for.',
      },
      {
        q: 'What does `inline` primarily promise about a function definition?',
        options: [
          'The compiler will expand calls inline',
          'The definition may appear in multiple TUs, and the linker will merge them, provided the definitions are token-identical',
          'The function cannot be called through a pointer',
          'The function has internal linkage',
        ],
        answer: 1,
        explanation: 'inline is the ODR escape hatch that legalizes header-resident definitions. Speed is a compiler decision orthogonal to the keyword.',
      },
      {
        q: 'A global object\'s constructor in TU-a reads a namespace-scope variable defined in TU-b. What does the standard guarantee about the order?',
        options: [
          'Variables initialize in alphabetical order of file name',
          'TU-a\'s objects always initialize first, since it appears first on the link line',
          'Nothing — the cross-TU order is unspecified; the read may happen before TU-b\'s variable is constructed',
          'The linker delays all constructors until main begins',
        ],
        answer: 2,
        explanation: 'Only within a single TU is order defined (definition order). Across TUs it is unspecified — which is why the construct-on-first-use idiom exists.',
      },
      {
        q: '`const Config& cfg() { static Config c; return c; }` defuses that problem because:',
        options: [
          'Function-local statics are initialized on first pass through the declaration, so every caller — whatever the TU order — constructs it on first use',
          'Static locals are initialized at load time before main',
          'References cannot be uninitialized',
          'The compiler hoists the static to a global',
        ],
        answer: 0,
        explanation: 'Demand-driven initialization: order of use now determines order of construction, and C++11 makes it thread-safe. The unspecified link order becomes irrelevant.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.3
  {
    sectionId: 'cpp-ch15-s3',
    readingTime: 7,
    intro: "Headers are where the chapter\'s rules become house discipline: what may live in a header, how guards make repeated inclusion harmless, and why the include graph — not the code — decides your build times. A header is a promise to every includer; these rules are how you keep the promise cheap.",
    objectives: [
      "Classify what belongs in a header (declarations, types, inline/constexpr, templates) and what must never be there",
      "Explain include guards, self-containment, and the include-what-you-use rule",
      "Read an include graph, cut edges with forward declarations, and reason about rebuild cascades",
    ],
    concepts: [
      {
        term: 'What belongs in a header',
        kind: 'method',
        statement: "A header holds the interface: named namespaces, type definitions, function and variable **declarations**, `inline` and `constexpr` function definitions, templates, and constants users need. It must **not** contain: definitions of ordinary functions or variables, `using`-directives at global scope, or macros beyond unavoidable necessity.",
        detail: 'The test is the ODR: whatever the header holds gets spliced into every includer, so anything that would be multiply-defined if repeated must stay out — unless its form (inline, class definition, template) explicitly permits replication.',
      },
      {
        term: 'Include guards',
        kind: 'method',
        statement: "Wrap every header: `#ifndef STACK_H / #define STACK_H / /* ... */ / #endif`. The second and later inclusions of `stack.h` in one TU become no-ops, so **diamond-shaped include graphs are harmless** — the second textual copy of a class definition would otherwise be a redefinition error.",
        detail: '`#pragma once` is the widespread shortcut for the same purpose; the guard macro\'s name should encode the file\'s identity, since guards collide by macro name.',
      },
      {
        term: 'Self-containment and include-what-you-use',
        kind: 'method',
        statement: "**A header must compile alone** — the test is a TU containing nothing but its include. Symmetrically, every file should **directly include what it uses**, never relying on names that arrive transitively through someone else\'s header.",
        detail: 'The two rules kill the two classic shocks: \"this header errors unless you include string first\" and \"my build broke because a third-party header stopped pulling in vector for me.\"',
      },
      {
        term: 'The include graph',
        kind: 'definition',
        statement: "The `#include` relation between files is a directed **acyclic** graph: an included file cannot transitively include its includer. Every edge in a header drags the entire subgraph into **every includer, transitively** — the graph, not the code, determines what a header change rebuilds.",
        detail: 'The firewall technique: when a header needs a type only as a pointer or reference, replace its `#include` with a **forward declaration** (`struct Node;`) — the edge disappears, and the whole subgraph behind it stays out of downstream builds.',
      },
      {
        term: 'Directives are not interface',
        kind: 'law',
        statement: "A `using namespace std;` in a header is injected into the global namespace of **every translation unit that includes it directly or transitively** — hundreds of names, every one a future ambiguity. It is the single most forbidden line a header can contain.",
        detail: 'The chapter\'s phrasing of the general rule: what a header holds is interface, and a directive changes the meaning of the includer\'s own code — something an interface must never do.',
      },
    ],
    figures: [
      {
        afterConcept: 4,
        caption: 'Figure 15.2 — An include graph. Solid edges are #include (a textual splice, so the whole subgraph travels along); the dashed edge is one a forward declaration cuts — stack.h needs Node only as a pointer, so `struct Node;` suffices and node.h stays out of every downstream build. Two paths reach geometry.h from main.cpp; its include guard makes the second splice a no-op. Cycles are illegal.',
        svg: `<svg viewBox="0 0 760 400" width="100%" role="img" aria-label="Header include graph with guards, a forward-declaration edge cut, and a forbidden cycle marked"><rect x="300" y="26" width="160" height="54" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="380" y="50" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">geometry.h</text><text x="380" y="68" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">#ifndef GEOM_H</text><rect x="60" y="26" width="140" height="54" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="130" y="50" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">string</text><text x="130" y="68" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">standard library</text><rect x="560" y="26" width="160" height="54" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="640" y="50" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">vector</text><text x="640" y="68" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">standard library</text><rect x="170" y="160" width="160" height="54" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="250" y="184" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">stack.h</text><text x="250" y="202" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">holds Node* only</text><rect x="25" y="160" width="115" height="54" rx="8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4"/><text x="82" y="184" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="bold" fill="currentColor">node.h</text><text x="82" y="202" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">not pulled in</text><rect x="470" y="160" width="160" height="54" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="550" y="184" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">util.h</text><text x="550" y="202" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">uses Point by value</text><rect x="300" y="290" width="160" height="54" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="380" y="314" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">main.cpp</text><text x="380" y="332" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">#include what you use</text><line x1="350" y1="290" x2="258" y2="216" stroke="currentColor" stroke-width="1.5"/><polygon points="255,224 263,220 262,212" fill="currentColor"/><line x1="410" y1="290" x2="542" y2="216" stroke="currentColor" stroke-width="1.5"/><polygon points="540,208 546,218 548,224" fill="currentColor"/><line x1="255" y1="160" x2="345" y2="83" stroke="currentColor" stroke-width="1.5"/><polygon points="337,79 349,82 341,92" fill="currentColor"/><line x1="535" y1="160" x2="430" y2="83" stroke="currentColor" stroke-width="1.5"/><polygon points="434,91 426,82 438,79" fill="currentColor"/><line x1="300" y1="53" x2="204" y2="53" stroke="currentColor" stroke-width="1.5"/><polygon points="210,49 210,57 202,53" fill="currentColor"/><line x1="595" y1="160" x2="625" y2="83" stroke="currentColor" stroke-width="1.5"/><polygon points="617,87 631,84 622,74" fill="currentColor"/><line x1="170" y1="187" x2="144" y2="187" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4"/><polygon points="146,183 146,191 138,187" fill="currentColor"/><path d="M 395 80 L 295 160" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="333" y1="107" x2="357" y2="131" stroke="currentColor" stroke-width="2.5"/><line x1="357" y1="107" x2="333" y2="131" stroke="currentColor" stroke-width="2.5"/><text x="368" y="122" font-family="ui-sans-serif, system-ui" font-size="11" font-style="italic" fill="currentColor" opacity="0.9">a cycle — illegal</text><text x="480" y="104" font-family="ui-sans-serif, system-ui" font-size="10.5" font-style="italic" fill="currentColor" opacity="0.9">two paths reach geometry.h;</text><text x="480" y="118" font-family="ui-sans-serif, system-ui" font-size="10.5" font-style="italic" fill="currentColor" opacity="0.9">the guard makes splice #2 a no-op</text><line x1="40" y1="312" x2="80" y2="312" stroke="currentColor" stroke-width="1.5"/><polygon points="74,308 74,316 82,312" fill="currentColor"/><text x="90" y="316" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">#include (textual splice)</text><line x1="40" y1="336" x2="80" y2="336" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4"/><polygon points="74,332 74,340 82,336" fill="currentColor"/><text x="90" y="340" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">edge cut: a forward declaration</text><text x="40" y="364" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.85">stack.h needs Node only as a pointer: struct Node; suffices</text></svg>`,
      },
    ],
    examples: [
      {
        title: 'Diamonds, guards, and saved lines',
        problem: "`geometry.h` is 80 lines and defines `class Point`. Ten translation units include `stack.h`, and `stack.h` includes `geometry.h` (it mentions `Point` only as `Point*`); `main.cpp` includes both `stack.h` and `util.h`, and `util.h` also includes `geometry.h`. Predict the failure without guards, and the splice savings after replacing `stack.h`'s include with a forward declaration.",
        steps: [
          { label: 'The diamond', text: "From `main.cpp`, two paths reach `geometry.h`: via `stack.h` and via `util.h`. With no guard, the TU receives **two textual copies** of `class Point` — the second is a redefinition error." },
          { label: 'Guards on', text: '`#ifndef GEOM_H` makes the second splice a no-op: 2 paths, **1 copy**, the diamond compiles. This is the entire reason guards are not optional.' },
          { label: 'Count the splices', text: 'Before the cut: 10 TUs receive `geometry.h` via `stack.h` (plus `main.cpp` via `util.h`): roughly $10 \\times 80 + 80 = 880$ spliced lines across the build.' },
          { label: 'Cut the edge', text: '`stack.h` mentions `Point` only as `Point*` — a pointer to an incompletely-known type is fine. Replace its `#include "geometry.h"` line with `struct Point;`: the 10 `stack.h`-includers stop pulling `geometry.h` entirely.' },
          { label: 'Count again', text: 'After the cut only the 2 TUs that use `Point` by value (via `util.h`) still include it: $2 \\times 80 = 160$ spliced lines. The edit saves about 720 spliced lines per build — and every future change to `geometry.h` now rebuilds 2 TUs instead of 11.' },
        ],
        result: 'Guards turn 2 copies into 1 (no redefinition error); the forward declaration cuts the spliced text from about 880 to 160 lines and shrinks the rebuild set for geometry.h from 11 TUs to 2.',
      },
      {
        title: 'Working through using header files',
        problem: 'What belongs in a header. Your task: classify what belongs in a header (declarations, types, inline/constexpr, templates) and what must never be there.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: classify what belongs in a header (declarations, types, inline/constexpr, templates) and what must never be there. Write down the guarantee you will rely on — for this chapter it is: Headers hold interfaces: declarations, types, inline/constexpr definitions and templates — never ordinary definitions or using-directives.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `int main(int argc, char* argv[]) { return 0; }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain include guards, self-containment, and the include-what-you-use rule — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Include guards make repeated splicing a no-op, so diamonds are legal; self-containment (a header compiles alone) and include-what-you-use make builds robust. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Headers hold interfaces: declarations, types, inline/constexpr definitions and templates — never ordinary definitions or using-directives. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Headers hold interfaces: declarations, types, inline/constexpr definitions and templates — never ordinary definitions or using-directives.',
      'Include guards make repeated splicing a no-op, so diamonds are legal; self-containment (a header compiles alone) and include-what-you-use make builds robust.',
      'The include graph decides rebuild cost: forward declarations cut edges, and an edge cut anywhere removes a whole subgraph from every downstream build.',
    ],
    quiz: [
      {
        q: 'Without include guards, `main.cpp` reaches `geometry.h` by two include paths. What happens?',
        options: [
          'The linker merges the two copies of class Point',
          'The preprocessor skips the second copy automatically',
          'The TU contains two definitions of class Point: a redefinition error',
          'The build succeeds with two distinct Point types',
        ],
        answer: 2,
        explanation: 'Each #include splices text again; the second definition of Point at the same scope is a compile-time redefinition error — exactly what #ifndef guards exist to prevent.',
      },
      {
        q: 'When may a header replace `#include "node.h"` with a forward declaration `struct Node;`?',
        options: [
          'Never: complete types are always required',
          'When the header mentions Node only through pointers or references — incomplete types suffice there',
          'Always: forward declarations are free',
          'Only if node.h is in the standard library',
        ],
        answer: 1,
        explanation: 'Pointers and references to incomplete types are legal, so the edge — and the whole subgraph behind it — can be cut from every downstream build. By-value use, member access or sizeof requires the complete type.',
      },
      {
        q: 'A header compiles only when the includer includes `string` before it. Which rule did its author break?',
        options: [
          'Include guards',
          'Self-containment: a header must compile alone — everything it needs must be in its own include list',
          'The include-what-you-use rule for the includer only',
          'None: this is normal',
        ],
        answer: 1,
        explanation: 'The self-containment test — a TU whose only line is including the header — is the house standard. A header that only compiles after preparatory includes exports fragility to every user.',
      },
      {
        q: 'Which line must never appear in a header?',
        options: [
          '`constexpr double pi = 3.14159265358979;`',
          '`inline int square(int x) { return x*x; }`',
          '`using namespace std;` at global scope',
          '`template<class T> struct Vec;`',
        ],
        answer: 2,
        explanation: 'A using-directive in a header is injected into the global namespace of every includer — including transitively — changing the meaning of code the author has never seen.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.4
  {
    sectionId: 'cpp-ch15-s4',
    readingTime: 6,
    intro: "The program is the outermost shell: how a run starts (nonlocal objects before main), what arguments and environment arrive through main, and how termination returns control to the operating system. Small rules, but they answer the questions every systems programmer eventually hits at 2 a.m. — what ran before main, and what exactly does exit() clean up?",
    objectives: [
      "Use `int main(int argc, char* argv[])` correctly: the argv layout, the exit status contract, and option parsing",
      "Describe program startup and termination: nonlocal initialization before main, and the different cleanup of return-from-main, exit() and abort()",
      "Interoperate with C and other languages through language linkage",
    ],
    concepts: [
      {
        term: 'main and the command line',
        kind: 'notation',
        statement: "`int main()` or `int main(int argc, char* argv[])` is the program\'s entry point. `argv[0]` is the program name (or an empty string), `argv[1]` through `argv[argc-1]` are the arguments, and `argv[argc]` is guaranteed to be a null pointer. The returned `int` is the **exit status** the OS receives: `0` (or `EXIT_SUCCESS`) means success, a nonzero value (e.g. `EXIT_FAILURE`) means failure.",
        detail: 'A program that never returns from main returns 0 implicitly. Scripts, make and CI read this status — a tool that succeeds but forgets to return 0 breaks every pipeline above it.',
      },
      {
        term: 'Parsing the arguments',
        kind: 'method',
        statement: "Walk `argv` in a loop from index 1; options conventionally start with `-` and are read with a `switch` on the option character; operands are everything else. Report malformed input early, print usage, and return a nonzero status.",
        detail: 'The book\'s compiler example is exactly this shape: a `for` over `argv`, a `switch` on `*arg` with cases per option, error messages that name the offending argument.',
      },
      {
        term: 'Startup and termination',
        kind: 'definition',
        statement: "**Before `main`:** namespace-scope objects are constructed (in definition order per TU, cross-TU order unspecified — 15.2). **Return from `main`:** main\'s locals are destroyed, then static objects\' destructors run, and the return value becomes the exit status. **`exit(n)` from anywhere:** static destructors run, but locals of intervening frames do **not** — the stack is not unwound. **`abort()`:** no cleanup at all.",
        detail: 'The exit()-vs-return distinction matters in library code: a function that ends the program by `exit` skips destructors of the objects it and its callers hold — a resource leak at shutdown that never shows up in tests that return normally.',
      },
      {
        term: 'The environment',
        kind: 'definition',
        statement: "Each process also inherits an **environment**: a map of strings (`getenv`, `putenv` in `<cstdlib>`) set by the parent, visible to every child — out-of-band configuration that arrives alongside `argv`.",
        detail: 'Because it is inherited, the environment is how a parent process configures a whole tree of children without threading a flag through every command line — and why a stale `PATH` or `LC_ALL` produces behavior no source file explains.',
      },
      {
        term: 'Linking with C and other languages',
        kind: 'method',
        statement: "Wrap foreign declarations in `extern \"C\" { }` — C language linkage, no name mangling — so C object files link with C++ ones. Headers shipped to both languages gate the block with `#ifdef __cplusplus` so C compilers skip what is only for C++.",
        detail: 'This is the bridge to the ecosystem: OS APIs, database drivers and math libraries are C at the ABI level, and `extern \"C\"` is the toll gate.',
      },
    ],
    examples: [
      {
        title: 'Walking the command line',
        problem: "A tool is invoked as `./sum -v 10 20 30` and elsewhere as `./sum` and `./sum 5`. For each invocation, give argc, the parse the loop performs, the output, and the exit status the shell sees.",
        steps: [
          { label: 'Invocation 1', text: "`argc = 5`: argv[0] is `./sum`, argv[1] is `-v`, argv[2..4] are `10`, `20`, `30`. The loop: i=1 sees a leading `-` — the `v` sets verbose; i=2..4 see no dash — accumulate 10+20+30. Output (verbose): `total: 60`. Status: `EXIT_SUCCESS`, i.e. 0.`" },
          { label: 'Invocation 2', text: "`argc = 1`: the loop body never runs, total stays 0. A tool that got no operands should say so — print usage to stderr and return `EXIT_FAILURE` (1), rather than silently succeed with 0." },
          { label: 'Invocation 3', text: "`argc = 2`: one operand, no options: total = 5; no output unless verbose. Status 0. Note argv[argc] is the guaranteed null terminator — the loop can also stop on `argv[i] == nullptr` instead of comparing to argc." },
          { label: 'The status contract', text: 'The shell combines statuses: `./sum -v 10 20 30 && next-step` runs next-step because 0 means success. One broken return value — success but returning 1, or failure but returning 0 — breaks every such pipeline.' },
        ],
        result: 'argc=5: verbose, total 60, status 0. argc=2: total 5, status 0. argc=1: usage message, status 1 — the exit status is part of the interface, same as the output.',
      },
      {
        title: 'Working through programs',
        problem: 'From source files to programs. Your task: use `int main(int argc, char* argv[])` correctly: the argv layout, the exit status contract, and option parsing.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: use `int main(int argc, char* argv[])` correctly: the argv layout, the exit status contract, and option parsing. Write down the guarantee you will rely on — for this chapter it is: argv[0] is the program name, argv[1..argc-1] the arguments, argv[argc] a null pointer; the int returned from main is the exit status the OS receives (0 = success).' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `int main(int argc, char* argv[]) { return 0; }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — describe program startup and termination: nonlocal initialization before main, and the different cleanup of return-from-main, exit() and abort() — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Before main, nonlocal objects construct (per-TU order, cross-TU unspecified); return from main destroys locals and statics, exit() skips the stack, abort() cleans up nothing. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: argv[0] is the program name, argv[1..argc-1] the arguments, argv[argc] a null pointer; the int returned from main is the exit status the OS receives (0 = success). Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'argv[0] is the program name, argv[1..argc-1] the arguments, argv[argc] a null pointer; the int returned from main is the exit status the OS receives (0 = success).',
      'Before main, nonlocal objects construct (per-TU order, cross-TU unspecified); return from main destroys locals and statics, exit() skips the stack, abort() cleans up nothing.',
      'extern \"C\" gives declarations C linkage so C object files interoperate; the environment (getenv/putenv) is inherited, out-of-band configuration.',
    ],
    quiz: [
      {
        q: 'For `./sum -v 10 20 30`, what is `argc` and `argv[1]`?',
        options: [
          'argc = 4, argv[1] is `10`',
          'argc = 5, argv[1] is `-v`',
          'argc = 6, argv[1] is `./sum`',
          'argc = 5, argv[1] is `./sum`',
        ],
        answer: 1,
        explanation: 'argc counts the program name: 5 total. argv[0] is the name, so argv[1] is the first real argument, the option -v; the numbers sit at argv[2..4].',
      },
      {
        q: 'What is the crucial difference between returning from main and calling `exit(0)` from deep in the call stack?',
        options: [
          'None: they are interchangeable',
          'return destroys main\'s locals and the static objects; exit() runs static destructors but does NOT unwind the stack — locals of intervening frames are never destroyed',
          'exit() is faster because it skips all destructors including static ones',
          'return does not free anything',
        ],
        answer: 1,
        explanation: 'exit terminates without unwinding: statics are destroyed in reverse construction order, but automatic objects in the abandoned frames are skipped — a leak at shutdown invisible to tests that return normally.',
      },
      {
        q: 'A C library ships `frobnicate.h`. For C++ clients, its declarations must be wrapped in:',
        options: [
          '`namespace std { }`',
          '`extern \"C\" { }` — C language linkage, so names are unmangled and match the C object files',
          '`inline` on every function',
          'A `#pragma` understood by both compilers',
        ],
        answer: 1,
        explanation: 'C++ mangles names to encode types for overloading; extern \"C\" turns that off so the C++ reference resolves to the C symbol.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.5
  {
    sectionId: 'cpp-ch15-s5',
    readingTime: 4,
    intro: "The chapter's closing advice turns the machinery into habits: match files to modules, keep headers self-contained, distrust nonlocal variables, and treat the exit status as part of your program's interface. Each rule buys a specific, predictable failure mode you stop having.",
    objectives: [
      "Apply the header/source discipline: interface in the header, implementation in the source, one module per boundary",
      "Justify the distrust of nonlocal variables and the construct-on-first-use alternative",
      "Audit a small header against the chapter's checklist and fix every violation",
    ],
    concepts: [
      {
        term: 'Match files to modules',
        kind: 'method',
        statement: "**The physical decomposition (files) should mirror the logical one (modules from chapter 14)**: a module\'s published declarations in one header, its definitions in a matching source, implementation helpers in an unnamed namespace. When files and modules drift apart, neither is findable.",
        detail: 'The corollary of minimality: one module, one header — a header is a unit of inclusion and therefore of rebuild; merging modules into one header couples their users\' build times for no design reason.',
      },
      {
        term: 'Header hygiene',
        kind: 'method',
        statement: "**Guard every header; make it self-contained; include what you use; put nothing in it that a definition rule forbids.** The audit is mechanical — a TU containing only `#include \"your.h\"` must compile — and it should run in CI before every merge.",
        detail: 'The inverse discipline is just as mechanical: a `.cpp` includes its own header first, proving self-containment at every compile, then what else it uses.',
      },
      {
        term: 'Distrust of nonlocal variables',
        kind: 'law',
        statement: "**Avoid dependencies among nonlocal variables** — cross-TU initialization order is unspecified (15.2). Where a global is genuinely needed, wrap it as a function-local static behind an accessor, and pay the one-branch guard without complaint.",
        detail: 'The advice pairs with chapter 13: nonlocal state is also what makes exception-safety and thread-safety hard. Every global removed is a proof obligation deleted.',
      },
      {
        term: 'Shipping rule for source files and programs',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **Files should mirror modules: interface declarations in one guarded, self-contained header; definitions in the matching source; helpers in unnamed namespaces.** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
      {
        term: 'Review checklist for source files and programs',
        kind: 'method',
        statement: 'Take the objectives as review questions: apply the header/source discipline: interface in the header, implementation in the source, one module per boundary? Then justify the distrust of nonlocal variables and the construct-on-first-use alternative? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.',
        detail: 'A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.',
      },
    ],
    examples: [
      {
        title: 'Auditing one bad header',
        problem: "Review this `config.h`: it lacks guards, defines `int default_port = 8080;` and `bool parse(const char* s) { /* 30 lines */ }` at namespace scope, opens with `using namespace std;`, and needs `std::string` but includes nothing. Find every violation and fix them.",
        steps: [
          { label: 'Violation 1 — no guard', text: 'Any TU reaching config.h twice (a diamond) gets a redefinition of `parse`. Fix: `#ifndef CONFIG_H / #define CONFIG_H / ... / #endif` — three lines, total immunity.' },
          { label: 'Violation 2 — definitions', text: '`default_port` and `parse` are defined in a header: every includer gets a copy, and the linker reports multiple definition. Fix: declare in the header (`extern int default_port;`, `bool parse(const char* s);`), define in `config.cpp` — or make them `inline`/`constexpr` if the header really is their home.' },
          { label: 'Violation 3 — the directive', text: '`using namespace std;` in a header injects all of std into every includer\'s global namespace — the forbidden line of 15.3. Fix: delete it; qualify `std::string` where used.' },
          { label: 'Violation 4 — not self-contained', text: 'The header uses `std::string` but relies on someone else having included `<string>` first. Fix: `#include <string>` at the top; the proof is a TU compiling with only `#include \"config.h\"`.' },
          { label: 'Tally', text: 'Four violations, four fixes, all local to the header plus one new `.cpp`. The interesting part: without fixing them, every symptom appears somewhere else — in includers\' builds and at link time, never in the header\'s own authoring TU.' },
        ],
        result: 'Guard added; the two definitions moved (or marked inline); the directive deleted; <string> included. The header is now self-contained and safe to include from anywhere, in any order, twice.',
      },
      {
        title: 'Reviewing source files and programs code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the header/source discipline: interface in the header, implementation in the source, one module per boundary.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Files should mirror modules: interface declarations in one guarded, self-contained header; definitions in the matching source; helpers in unnamed namespaces.' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `int main(int argc, char* argv[]) { return 0; }`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: justify the distrust of nonlocal variables and the construct-on-first-use alternative. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: A TU that includes only your header must compile — self-containment and include-what-you-use are CI-checkable, not stylistic.' },
        ],
        result: 'The review ends with findings tied to reasons: Files should mirror modules: interface declarations in one guarded, self-contained header; definitions in the matching source; helpers in unnamed namespaces. Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      'Files should mirror modules: interface declarations in one guarded, self-contained header; definitions in the matching source; helpers in unnamed namespaces.',
      'A TU that includes only your header must compile — self-containment and include-what-you-use are CI-checkable, not stylistic.',
      'Avoid dependencies among nonlocal variables (cross-TU order is unspecified); wrap needed globals in function-local statics behind accessors.',
    ],
    quiz: [
      {
        q: 'A header defines `int count = 0;` at namespace scope and is included by two translation units. What does the build produce?',
        options: [
          'One shared count variable',
          'Two distinct counts, which is usually the intended design',
          'A multiple-definition error from the linker',
          'A warning at compile time, then one shared variable',
        ],
        answer: 2,
        explanation: 'Each TU gets its own definition with external linkage; when the linker tries to fold the two objects together, the duplicate strong symbol is an error. Declare (extern) in the header, define in one .cpp.',
      },
      {
        q: 'Why is a namespace-scope variable in a header an initialization-order hazard even after fixing the linkage problem?',
        options: [
          'It is not: fixing linkage fixes everything',
          'Cross-TU initialization order is unspecified, so any global in another TU that reads it during construction may see it uninitialized',
          'Headers are read before source files by the build system',
          'Global variables are initialized after main begins',
        ],
        answer: 1,
        explanation: 'Two rules bite separately: linkage (how many objects exist) and initialization order (when they construct). The second is unspecified across TUs — hence the construct-on-first-use idiom.',
      },
      {
        q: 'The cheapest CI-checkable proof of header self-containment is:',
        options: [
          'Code review by the module owner',
          'A translation unit whose only line is #including the header, compiled on every build',
          'Running the full test suite',
          'A lint rule banning #include',
        ],
        answer: 1,
        explanation: 'If a TU containing nothing but the include compiles, the header brings everything it needs — the definition of self-containment, executed as a test rather than asserted in review.',
      },
    ],
  },
]

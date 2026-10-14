import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th ed. (C++11) — Chapter 14
// Namespaces (TC++PL pp. 389-418). Section ids are verbatim from
// src/data/library-parts/cpp.ts (cpp-ch14-s1 .. cpp-ch14-s5).
// ============================================================================

export const cppCh14Content: SectionContent[] = [
  // ------------------------------------------------------------------ 14.1
  {
    sectionId: 'cpp-ch14-s1',
    readingTime: 6,
    intro: "Real programs are not written; they are composed — from libraries written by people who never met, at different times, with no shared naming authority. The central problem of scale is making that composition possible: how do names chosen by strangers coexist in one program? This chapter's answer is the namespace, and the section before the mechanism itself is about why the older answers failed.",
    objectives: [
      "State the composition problem: separately developed libraries must interoperate without a global naming authority",
      "Evaluate the pre-namespace solutions — prefixes, macros, long names — and say why each fails",
      "Distinguish what a module must provide (a coherent interface plus hidden implementation) from what a file or a class provides",
    ],
    concepts: [
      {
        term: 'The composition problem',
        kind: 'insight',
        statement: "Software is built by composing independently developed parts, and **no global authority coordinates their names**. Two libraries will both define `Node`, `list`, `print` — not through carelessness, but because each is a natural name within its own context. A module mechanism must let names coexist without requiring the authors to have known about each other.",
        detail: 'The deeper requirement behind the naming one: a library must also keep its implementation details out of the way — what a user of the library cannot name, the user cannot break or depend on.',
      },
      {
        term: 'What a module must provide',
        kind: 'definition',
        statement: "A module is a coherent set of services presented through an **interface** (the declarations users need) and implemented by an **implementation** (the definitions users should never see). What users see is exactly what the module author intends them to see — and nothing more.",
        detail: 'In C++ the class already does this at the type level (member names are scoped by the class; `private` keeps implementation out). The namespace extends the same idea to any set of names: functions, types, constants, templates — the module is a design unit, not a file.',
      },
      {
        term: 'Pre-namespace solutions and their failure',
        kind: 'method',
        statement: "The C tradition attacked clashes with **prefixes** (`pthread_`, `str`-functions), the preprocessor with **macros** (`#define`), and convention with **long unique names**. Prefixes are verbose, unenforced and cannot group a family of overloads; macros are untyped, unscoped text substitution that silently rewrites unrelated code; long names punish every reader for a collision that may never happen.",
        detail: 'What none of them offer: a scope that can be opened and closed by the compiler, searched selectively, extended later, and composed with overloading. That shopping list becomes the namespace specification.',
      },
      {
        term: 'Interfaces at the language level',
        kind: 'definition',
        statement: "Whatever the design documents say, the *enforceable* interface of a module in C++ is what its declarations make visible: the names, their types, and their access — classes control access to members; namespaces control which names are visible from where.",
        detail: 'Chapter 15 adds the physical layer: the header is the interface *as seen by the compiler*, and separate compilation is what lets the interface be shared while implementations stay private.',
      },
      {
        term: 'Composition Problems: the working contract',
        kind: 'definition',
        statement: '**Composition Problems.** Why modules and names must be managed. You can claim this section when you can state the composition problem: separately developed libraries must interoperate without a global naming authority — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 14 (Namespaces); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'The two-Node project',
        problem: "A build combines a text library (`text.h`: `class Node`, `class Link`, `void print(std::ostream&, const Node&)`) and a graph library (`graph.h`: `struct Node`, `struct Link`, `void draw(const Node&)`). One new translation unit includes both headers. Predict every compile error and price the two candidate fixes.",
        steps: [
          { label: 'Diagnose', text: 'Two definitions of `Node` and two of `Link` appear at the same (global) scope: **2 redefinition errors**. The functions do not clash at all — `print` and `draw` are different names, and two functions of the same name would merely form an overload set (they take different parameter types).' },
          { label: 'Fix A — rename', text: 'Make the text library use `TextNode`. Say `Node` appears at 60 sites inside the library: 60 edits, every one breaking third-party clients that compiled against the old names — the collision is exported to everyone downstream.' },
          { label: 'Fix B — namespaces', text: 'Wrap each header once: `namespace Text { /* as before */ }` and `namespace Graph { /* as before */ }`: **2 lines per header**, zero internal edits. Users write `Text::Node` or `Graph::Node`, or bring one name in with a using-declaration at a use site.' },
          { label: 'Price it', text: 'Rename: about 120 use-site edits across both libraries (60 + 60) plus all client code, and binary compatibility is gone. Namespaces: 4 lines changed, and code that does not mention the colliding name is untouched.' },
        ],
        result: 'Namespaces remove both collisions with 4 changed lines and zero client edits; renaming touches roughly 120 sites and breaks every existing user of both libraries.',
      },
      {
        title: 'Working through composition problems',
        problem: 'Why modules and names must be managed. Your task: state the composition problem: separately developed libraries must interoperate without a global naming authority.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: state the composition problem: separately developed libraries must interoperate without a global naming authority. Write down the guarantee you will rely on — for this chapter it is: Composition is the norm: independently written libraries must coexist with no global naming authority, so the module mechanism must make name coexistence automatic.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `namespace Lib { int version(); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — evaluate the pre-namespace solutions — prefixes, macros, long names — and say why each fails — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Prefixes, macros and long names are workarounds that are verbose, untyped or unenforced — none gives a compiler-managed scope that also groups overloads. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Composition is the norm: independently written libraries must coexist with no global naming authority, so the module mechanism must make name coexistence automatic. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Composition is the norm: independently written libraries must coexist with no global naming authority, so the module mechanism must make name coexistence automatic.',
      'Prefixes, macros and long names are workarounds that are verbose, untyped or unenforced — none gives a compiler-managed scope that also groups overloads.',
      'A module is an interface plus a hidden implementation; in C++ the class provides it for types and the namespace for any set of names.',
    ],
    quiz: [
      {
        q: 'A translation unit includes both `text.h` and `graph.h`, each defining `class Node` at global scope. What happens?',
        options: [
          'The linker merges the two Node classes',
          'The second definition silently shadows the first',
          'A redefinition error at compile time',
          'Undefined behavior; it compiles and misbehaves',
        ],
        answer: 2,
        explanation: 'Two definitions of the same name at one scope are a compile-time redefinition error — the collision is at least loud, which is the problem the section wants solved rather than merely reported.',
      },
      {
        q: 'Why is `#define MAX_COUNT 100` a poor substitute for namespace discipline?',
        options: [
          'It is slower at runtime',
          'It is untyped, unscoped text substitution: it rewrites any later occurrence of those letters, including in unrelated code and strings',
          'Macros cannot hold integer values',
          'The preprocessor runs after the compiler',
        ],
        answer: 1,
        explanation: 'A macro has no scope, no type and no respect for context — it renames everything, everywhere, before the compiler ever parses the result.',
      },
      {
        q: 'The two libraries also define `print(std::ostream&, const TextNode&)` and `print(std::ostream&, const GraphNode&)`. Once the parameter types differ, these functions:',
        options: [
          'Clash: the same name can only be defined once',
          'Form an overload set — which is precisely the composition behavior wanted, and namespaces keep it under control',
          'Must be declared `inline` to coexist',
          'Are resolved by the linker at random',
        ],
        answer: 1,
        explanation: 'Same name, different parameter types: an overload set. The composition problem is about uncontrolled collisions, and overloading is the controlled, compiler-checked version of name sharing.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.2
  {
    sectionId: 'cpp-ch14-s2',
    readingTime: 7,
    intro: "A namespace is a named scope: a way to group declarations so they do not pollute the global namespace, while remaining reachable by qualification, by explicit import of one name, or implicitly through the types of the arguments you call with. The rules here — qualification, using-declarations, using-directives and argument-dependent lookup — are the daily grammar of every large C++ codebase.",
    objectives: [
      "Define namespaces, their openness across files, and qualified access with the scope resolution operator",
      "Distinguish using-declarations from using-directives, and place each where it is safe (never a directive in a header)",
      "Explain argument-dependent lookup and why generic code and operators depend on it",
    ],
    concepts: [
      {
        term: 'Namespace',
        kind: 'definition',
        statement: "`namespace Chrono { /* declarations */ }` places every declaration inside a new named scope. Members are named by **qualification**: `Chrono::Date`. A namespace is **open**: it may be reopened and extended in the same or other files, even other translation units — standard headers are all members of `std` this way.",
        detail: 'Nesting is ordinary scoping: `Lib::V2::f` reads outside-in. The global scope is spelled with a leading `::` (`::x` is the global `x`, whatever local `x` shadows).',
      },
      {
        term: 'Using-declaration versus using-directive',
        kind: 'method',
        statement: "A **using-declaration** imports one name: `using std::string;` makes `string` mean `std::string` in this scope. A **using-directive** opens the whole namespace: `using namespace std;` makes every name of `std` reachable from this scope. Declarations are safe almost anywhere; directives belong in implementation files — **never in headers**, where they would apply to every includer and could change the meaning of later code.",
        detail: 'Both are transition tools: the goal is code that qualifies (`std::sort`) or imports selectively (`using std::swap;` before a `swap(x, y)` call), so that a reader can see which names come from where.',
      },
      {
        term: 'Argument-dependent lookup (ADL)',
        kind: 'definition',
        statement: "When calling `f(x)` where `x`'s type is a member of namespace `N`, the lookup set for `f` **includes `N`** — the namespace of an argument contributes candidates. This is why `cout << d` finds `Chrono`'s `operator<<` with no qualification and no using-declaration at all.",
        detail: 'ADL is the glue between namespaces and overloading: operators (which cannot be qualified in call syntax) and customization points like `swap` rely on it entirely. It is also why your operators belong in the same namespace as their class — that is where ADL will look for them.',
      },
      {
        term: 'Unnamed namespaces and aliases',
        kind: 'definition',
        statement: "An **unnamed namespace** `namespace { /* ... */ }` has internal linkage: its members are invisible outside this translation unit — the modern replacement for file-`static`. A **namespace alias** `namespace Cur = Lib::V2;` binds a short name to a long or versioned one, at one place.",
        detail: 'Aliases are the standard versioning mechanism: flip one alias and every `Cur::`-qualified call site follows; see 14.4.',
      },
      {
        term: 'Overload sets across namespaces',
        kind: 'method',
        statement: "Using-declarations for the same function name from different namespaces **merge into one overload set** (if their signatures differ). A using-directive does the same, but ambiguities — including those created later by library growth — are detected only at the call site.",
        detail: 'This is composition at the function level: `A::f(int)` and `B::f(double)` can coexist as candidates, with the usual overload resolution picking per call — the worked example runs the numbers.',
      },
    ],
    examples: [
      {
        title: 'Three calls, one merged overload set',
        problem: 'Given `namespace A { int f(int); }` and `namespace B { double f(double); }`, plus `using A::f; using B::f;` in one function: which function runs for `f(1)`, `f(2.5)` and `f(\'a\')`?',
        steps: [
          { label: 'The set', text: 'The two using-declarations merge `A::f(int)` and `B::f(double)` into a single overload set of two candidates, visible as plain `f` in this scope.' },
          { label: 'f(1)', text: 'Candidates: `A::f(int)` needs an exact match; `B::f(double)` needs int-to-double conversion. Exact match wins: **A::f(int)**.' },
          { label: 'f(2.5)', text: 'Symmetric: `B::f(double)` is exact, `A::f(int)` would need double-to-int conversion. **B::f(double)** runs.' },
          { label: 'f(\'a\')', text: 'Neither is exact: `char` to `int` is an **integral promotion**; `char` to `double` is a **floating-integral conversion**. Promotions rank better than conversions: **A::f(int)** runs — the same rule that keeps `\'a\' + 1` integer arithmetic.' },
          { label: 'Why no ambiguity', text: 'Ambiguity would require two equally-good candidates, e.g. two exact matches or two same-rank conversions. With one int and one double overload, every arithmetic argument resolves — 0 ambiguous calls in 3.' },
        ],
        result: 'A::f(int); B::f(double); A::f(int) — the merged overload set resolves all three calls by the standard ranking: exact, then promotion, then conversion.',
      },
      {
        title: 'Working through namespaces',
        problem: 'Namespace definition and use. Your task: define namespaces, their openness across files, and qualified access with the scope resolution operator.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: define namespaces, their openness across files, and qualified access with the scope resolution operator. Write down the guarantee you will rely on — for this chapter it is: A namespace is an open named scope: reopened across files and translation units, its members reached by qualification or selective using-declarations.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `namespace Lib { int version(); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — distinguish using-declarations from using-directives, and place each where it is safe (never a directive in a header) — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Import one name with a using-declaration where it aids readability; keep using-directives to implementation files and out of headers entirely. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A namespace is an open named scope: reopened across files and translation units, its members reached by qualification or selective using-declarations. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'A namespace is an open named scope: reopened across files and translation units, its members reached by qualification or selective using-declarations.',
      'Import one name with a using-declaration where it aids readability; keep using-directives to implementation files and out of headers entirely.',
      'ADL searches the namespaces of a call\'s argument types — which is how operators and swap are found without qualification, and why they live beside their class.',
    ],
    quiz: [
      {
        q: 'Why is `using namespace std;` at global scope in a header forbidden by the house rules?',
        options: [
          'It slows down compilation of every includer by orders of magnitude',
          'It injects all of std into the global namespace of every translation unit that includes it — directly or transitively — creating ambiguity and changing the meaning of later code',
          'std names are copyrighted',
          'It makes every std function inline',
        ],
        answer: 1,
        explanation: 'A using-directive in a header applies to every includer, who never chose it. New std names would then shadow or collide with local names — the exact composition failure namespaces were invented to fix.',
      },
      {
        q: "In the worked example, `f('a')` resolved to `A::f(int)` rather than `B::f(double)`. Why?",
        options: [
          'Declarations earlier in the set win',
          'int parameters are always preferred over double',
          'The char-to-int integral promotion outranks the char-to-double conversion in overload resolution',
          'It is ambiguous and the call is ill-formed',
        ],
        answer: 2,
        explanation: 'Neither candidate is exact, so resolution falls to ranking: promotions (char to int) beat conversions (char to double) — the same ladder every other overload resolution uses.',
      },
      {
        q: 'How does `cout << d` for a `Chrono::Date d` find the right `operator<<` without any qualification or using-declaration?',
        options: [
          'Operators are always found in the global namespace',
          'Every operator is a member of std',
          'Argument-dependent lookup adds the namespaces of the arguments — std for cout, Chrono for d — to the candidate set',
          'The compiler guesses from the file name',
        ],
        answer: 2,
        explanation: 'ADL: each argument contributes its namespace to the search, where the member operator<< of std and the free Chrono::operator<< are both found as candidates.',
      },
      {
        q: 'Which statement about namespace openness is correct?',
        options: [
          'A namespace may be opened only once per file',
          'A namespace may be reopened across files and translation units; the definitions accumulate into one namespace',
          'Reopening a namespace in a second translation unit is an ODR violation',
          'Once closed, a namespace is sealed',
        ],
        answer: 1,
        explanation: 'Every standard header reopens std. The namespace is a logical scope, not a file-boundary artifact — which is what lets a library distribute its interface across many headers.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.3
  {
    sectionId: 'cpp-ch14-s3',
    readingTime: 6,
    intro: "Namespaces are the mechanism; modularization is the discipline. The design question is where to draw module boundaries, what to expose at each boundary, and how to keep interfaces small enough to change. The rules are few — minimize, do not expose implementation, keep interfaces strongly typed and stable — and every one of them is about who is allowed to depend on what.",
    objectives: [
      "Design module boundaries: a module expresses a coherent concept, not a file or a single class",
      "Apply interface minimization and justify it in terms of what clients may come to depend on",
      "Keep implementation details out of interfaces and interfaces stable across implementation change",
    ],
    concepts: [
      {
        term: 'A module is a design unit',
        kind: 'definition',
        statement: "A module is a set of declarations representing **one coherent concept** — not a file, not a class, not a layer cake. The Chrono module is \"calendar time\"; its interface is `Date`, its ordering, its arithmetic and its I/O — no more.",
        detail: 'The test of coherence: can you describe the module in one sentence a user of the whole system understands? If the description is a list, the module is a grab bag and should be split.',
      },
      {
        term: 'Interface minimization',
        kind: 'method',
        statement: "**Expose only what users need — the smallest set of names that does the job.** Every name in the interface is a promise: it must keep working, forever, because someone will call it. Names you never exposed you can still change freely.",
        detail: 'The asymmetry is the economics: adding a name to an interface later is cheap; removing one is a breaking change for every client. When in doubt, leave it out — an interface is easier to grow than to shrink.',
      },
      {
        term: 'No implementation in the interface',
        kind: 'insight',
        statement: "**What users cannot see, they cannot depend on.** Helper functions, tables and algorithms belong in an implementation namespace (or an unnamed namespace in the .cpp file), not beside the interface; exposing them couples every client to a detail you intended to replace.",
        detail: 'The physical leak is the subtler one: private members and private helper types still appear in the class definition and pull their headers into every client — the include-graph cost that chapter 15 attacks with firewalls.',
      },
      {
        term: 'Strongly typed interfaces',
        kind: 'method',
        statement: "**Let types do the checking.** A function taking `const Date&` rejects nonsense at compile time that three `int` parameters would defer to runtime validation — the invariant machinery of chapter 13 starts with an interface that makes invalid values unrepresentable.",
        detail: 'Ties back to error handling: if the type system filters the impossible, the exceptions that remain to throw are the genuinely exceptional.',
      },
      {
        term: 'Stability across change',
        kind: 'insight',
        statement: "The interface should change far more slowly than the implementation. Organize so the changes you expect — algorithms, representation, performance work — touch only implementation namespaces, and the interface names survive untouched.",
        detail: 'This is why versioning (14.4) and interface minimization interact: a smaller surface is a smaller thing to keep stable, and a stable surface is the module\'s contract with the future.',
      },
    ],
    examples: [
      {
        title: 'Shrinking a draft interface',
        problem: 'A draft Chrono interface exposes 15 names: `Date`, `year`, `month`, `day`, `operator==`, `operator<`, `operator<<`, `to_string`, `from_string`, plus helpers `is_leap`, `month_length`, `day_of_week`, `normalize`, `epoch_days`, `validate`. Audit the list: which names belong in the public interface?',
        steps: [
          { label: 'What users need', text: 'Construct and inspect dates (`Date`, `year`, `month`, `day`), order and compare (`operator==`, `operator<`), print and parse (`operator<<`, `to_string`, `from_string`): 9 names carry the whole service.' },
          { label: 'What is implementation', text: '`is_leap`, `month_length`, `normalize`, `epoch_days`, `validate` are machinery: a user who calls `is_leap` directly has coupled to the Gregorian representation — exactly the detail the module exists to hide (proleptic calendars, day-count conventions and all).' },
          { label: 'The judgement call', text: '`day_of_week` is genuinely useful — but it is derived data, and it is the kind of name that grows relatives (`iso_week_day`, `weekday_name`). Verdict: keep it out until a user needs it; adding later is compatible, removing is not.' },
          { label: 'Move, do not delete', text: 'The 6 helpers go to `namespace Chrono::impl` (or an unnamed namespace in the .cpp). They remain available to the module itself — and invisible to clients, who cannot form dependencies they cannot name.' },
          { label: 'Count the saving', text: '15 exposed names shrink to 9 — a 40% reduction in the surface that must stay stable, bought with one namespace relocation and zero loss of service.' },
        ],
        result: 'Keep 9 names; retire 6 into an implementation namespace. Every retired name is a design decision that stays reversible.',
      },
      {
        title: 'Working through modularization and interfaces',
        problem: 'Designing module boundaries. Your task: design module boundaries: a module expresses a coherent concept, not a file or a single class.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: design module boundaries: a module expresses a coherent concept, not a file or a single class. Write down the guarantee you will rely on — for this chapter it is: A module is a coherent concept expressed as a small interface; it is not a file or a class — files are the physical concern of chapter 15.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `namespace Lib { int version(); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — apply interface minimization and justify it in terms of what clients may come to depend on — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Minimize: every interface name is a promise to keep it working; adding later is cheap, removing breaks clients — so leave out what is merely useful. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A module is a coherent concept expressed as a small interface; it is not a file or a class — files are the physical concern of chapter 15. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'A module is a coherent concept expressed as a small interface; it is not a file or a class — files are the physical concern of chapter 15.',
      'Minimize: every interface name is a promise to keep it working; adding later is cheap, removing breaks clients — so leave out what is merely useful.',
      'Implementation helpers belong in implementation namespaces where clients cannot name them; strongly typed parameters let the compiler reject what runtime validation would otherwise throw.',
    ],
    quiz: [
      {
        q: 'Which names belong in a module interface?',
        options: [
          'All public, private and helper names, for documentation value',
          'Only the names users need to get the module\'s service done — the smallest such set',
          'Only class names; functions never belong in an interface',
          'Whatever is easiest to implement first',
        ],
        answer: 1,
        explanation: 'Minimization is the economics of promises: each exposed name must work forever, so the interface is the minimum that delivers the service — nothing more.',
      },
      {
        q: 'A colleague argues `is_leap` should stay in the public interface because users keep asking for it. The chapter\'s strongest counter is:',
        options: [
          'It is too slow to be public',
          'Exposing it couples users to the calendar representation the module exists to hide; a user who cannot name it cannot depend on it',
          'Leap years will be abolished eventually',
          'Only operators can be interface members',
        ],
        answer: 1,
        explanation: 'Every name in the interface is a commitment. is_leap is representation machinery — a user who calls it has bypassed the abstraction boundary the module was drawn to enforce.',
      },
      {
        q: 'Why does an interface change more slowly than an implementation?',
        options: [
          'Interface files are larger and compile slower',
          'Because clients depend on interface names and must not break, while implementation namespaces can change invisibly',
          'It does not; both change together',
          'Compilers cache interfaces between builds',
        ],
        answer: 1,
        explanation: 'The interface is the contract; the implementation is a detail behind it. That asymmetry is the whole point of drawing the boundary.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.4
  {
    sectionId: 'cpp-ch14-s4',
    readingTime: 6,
    intro: "Composition at scale is the payoff chapter: libraries in their own namespaces, glued together with qualification at boundaries, pass-through re-exports, versioned sub-namespaces, and ADL doing the operator wiring. The techniques here are how million-line systems absorb a new library version without touching a thousand files.",
    objectives: [
      "Compose libraries by qualifying at boundaries and importing selectively inside function scopes",
      "Use pass-through using-declarations to build facades, and namespace aliases to version and migrate",
      "Explain how ADL plus overloading provides the wiring for composed generic code (swap, operators)",
    ],
    concepts: [
      {
        term: 'Qualify at the boundaries',
        kind: 'method',
        statement: "Compose libraries by keeping names in their namespaces and **qualifying where they meet** — `Chrono::Date d;` in application code — with using-declarations (`using Graph::Node;`) admitted inside a function that uses the name heavily. The book\'s own style: fully qualified in interfaces, local imports inside implementation functions.",
        detail: 'The rule keeps provenance readable: a reader of a 50-line function can see, per name, which library it came from — something a file-wide using-directive destroys.',
      },
      {
        term: 'Pass-through and facades',
        kind: 'definition',
        statement: "A namespace can re-export names it does not define: `namespace App { using Chrono::Date; using Text::Token; }` builds a **facade** — clients of App see one coherent interface assembled from several libraries, without knowing (or compiling against) the partition.",
        detail: 'Pass-through is how mature platforms hide internal structure: the facade is the published interface; the sub-libraries behind it can be repartitioned without touching clients.',
      },
      {
        term: 'Versioning with namespaces',
        kind: 'method',
        statement: "Publish versions as sibling namespaces — `namespace Lib { namespace V2 { /* ... */ } }` — and bind the choice in **one alias**: `namespace Current = Lib::V2;`. Clients that qualify with `Current::` migrate to the new version when the one alias line changes; clients that pinned `Lib::V1` are untouched.",
        detail: 'The arithmetic is the argument: one edit versus one edit per call site (the worked example counts 200). Real libraries additionally use `inline namespace` to keep old spellings working during a transition.',
      },
      {
        term: 'ADL as the composition glue',
        kind: 'insight',
        statement: "Generic code composes because of ADL: `swap(x, y)` finds the user overload in x\'s namespace without any declaration at the call site; operators are found the same way. Customization points live *with their types*, and libraries interoperate without common headers.",
        detail: 'This is the quiet miracle of the standard library: `std::sort` can call *your* swap for your type because the lookup reaches into your namespace through the arguments — no registration, no inheritance.',
      },
      {
        term: 'Migrating legacy code into namespaces',
        kind: 'method',
        statement: "Move old global-namespace code into namespaces gradually: wrap new development in its namespace, keep a header of using-declarations that re-exports the old global names, and remove aliases as callers are updated. The build never breaks mid-migration.",
        detail: 'The same one-alias-at-a-time discipline as versioning: each step compiles and tests, and the global namespace drains slowly instead of exploding.',
      },
    ],
    examples: [
      {
        title: 'Migrating 200 call sites with one alias',
        problem: 'A library publishes `Lib::V2::f` with a changed (source-compatible) implementation; 200 call sites currently use `Lib::V1::f` through an alias `namespace Current = Lib::V1;`. Compare the migration cost of the alias mechanism against direct qualification, then trace how `cout << d` finds a Date\'s operator without any of it.',
        steps: [
          { label: 'Direct migration', text: 'If each call site spelled `Lib::V1::f` literally, the move to V2 is 200 textual edits, each a chance to typo a version prefix — plus review of all 200 diffs.' },
          { label: 'Alias migration', text: 'All 200 sites spell `Current::f`. The migration is **1 line** — `namespace Current = Lib::V2;` — followed by a rebuild and the V2 test suite. A site needing V1 semantics pins `Lib::V1` explicitly and is unaffected.' },
          { label: 'The arithmetic', text: '1 edit + rebuild versus 200 edits + review: the alias mechanism converts an O(call sites) migration into an O(1) one — the reason versioning belongs in the design, not the release checklist.' },
          { label: 'ADL on the side', text: 'Meanwhile `cout << d` (a `Lib::V2::Date`) resolves with zero qualification: ordinary lookup finds no candidate at the call site; ADL adds `std` (for `cout`) and `Lib::V2` (for `d`); `Lib::V2::operator<<` is found there and selected.' },
          { label: 'Why this scales', text: 'The version switch is centralized (one alias), while the operator wiring is decentralized (ADL finds it wherever the type lives). Composition needs both properties at once.' },
        ],
        result: 'One alias line migrates 200 call sites (versus 200 edits), and ADL finds the V2 operator<< with no using-declarations anywhere — versioning centralized, lookups local.',
      },
      {
        title: 'Working through composition using namespaces',
        problem: 'Namespaces at scale. Your task: compose libraries by qualifying at boundaries and importing selectively inside function scopes.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: compose libraries by qualifying at boundaries and importing selectively inside function scopes. Write down the guarantee you will rely on — for this chapter it is: Compose by qualifying at boundaries and importing selectively within function scopes, so every name’s provenance stays readable.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `namespace Lib { int version(); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — use pass-through using-declarations to build facades, and namespace aliases to version and migrate — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Pass-through using-declarations build facades over several libraries; versioned sub-namespaces plus a single alias turn per-call-site migrations into one-line switches. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Compose by qualifying at boundaries and importing selectively within function scopes, so every name’s provenance stays readable. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Compose by qualifying at boundaries and importing selectively within function scopes, so every name\'s provenance stays readable.',
      'Pass-through using-declarations build facades over several libraries; versioned sub-namespaces plus a single alias turn per-call-site migrations into one-line switches.',
      'ADL makes libraries interoperate without common headers: swap and operators are found through their argument types, wherever those types live.',
    ],
    quiz: [
      {
        q: 'A library ships `Lib::V2` while 200 sites call `Current::f`, where `Current` is an alias for `Lib::V1`. To migrate all sites to V2:',
        options: [
          'Edit all 200 call sites to spell `Lib::V2::f`',
          'Change the one alias definition to `namespace Current = Lib::V2;` and rebuild',
          'Recompile the library with a special flag',
          'Rename V2 to V1',
        ],
        answer: 1,
        explanation: 'The alias is the single point of version binding: one line flips all 200 sites. Directly-qualified sites — those that pinned V1 on purpose — are untouched.',
      },
      {
        q: 'What does `namespace App { using Chrono::Date; }` accomplish?',
        options: [
          'It moves Date out of Chrono, deprecating the old name',
          'It makes App::Date a pass-through name for Chrono::Date — a facade that re-exports without defining',
          'It copies the Date class into App',
          'It makes Date private to App',
        ],
        answer: 1,
        explanation: 'A using-declaration re-exports: App::Date is the same entity as Chrono::Date. Facades assemble one published interface from several libraries behind it.',
      },
      {
        q: 'Why does `std::sort` find a user-defined `swap` for a user type `W` in namespace `Wlib`?',
        options: [
          'All swaps are members of std',
          'The user must open namespace std and add the overload',
          'ADL: the call `swap(x, y)` with a `Wlib::W` argument adds Wlib to the lookup set, where the user swap is found',
          'sort calls it through a virtual function',
        ],
        answer: 2,
        explanation: 'Customization points work through the argument types: the namespace of W contributes candidates, so libraries interoperate with no registration and no common header.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.5
  {
    sectionId: 'cpp-ch14-s5',
    readingTime: 4,
    intro: "The chapter's advice compresses the mechanism into habits: name namespaces for what they provide, keep using-directives out of interfaces, and use namespaces to express structure rather than to save typing. Every rule has the same target — readable composition.",
    objectives: [
      "Recite the house rules on namespace naming, placement of using-directives and depth of nesting",
      "Explain the connection between namespace structure and physical module structure",
      "Spot the standard namespace-misuse smells in a code review",
    ],
    concepts: [
      {
        term: 'Name namespaces for their service',
        kind: 'method',
        statement: "**A namespace name should say what it provides** — `Chrono`, `Geometry`, `Net` — not who wrote it, where it sits in a directory tree, or the project codename. The name is the one-sentence description of the module from 14.3, compressed to a word.",
        detail: 'The test of coherence from 14.3 applies verbatim: if you cannot name the namespace in one plain word or two, the module is probably a grab bag that wants splitting.',
      },
      {
        term: 'Directives never in interfaces',
        kind: 'law',
        statement: "**Never place a using-directive in a header or any other interface.** It applies to every includer, who never chose it, and any later library growth can turn it into ambiguity far from the cause. Using-declarations of individual names are the interface-safe import.",
        detail: 'In an implementation file, a using-directive is a defensible local convenience — the damage is then confined to a scope the author owns and reads.',
      },
      {
        term: 'Structure, not shortcuts',
        kind: 'insight',
        statement: "**Use namespaces to express design structure** — libraries, versions, implementation detail — not to shorten names or to group whatever files happen to sit together. Deep nesting is a smell: more than two or three levels usually means physical layout leaking into logical design.",
        detail: 'The mirror-image rule also holds: do not put everything in the global namespace to save the two characters of qualification — composition, not brevity, is what the mechanism buys.',
      },
      {
        term: 'Shipping rule for namespaces',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **Name namespaces for the service they provide — Chrono, Geometry, Net — because the namespace name is the module description compressed to a word.** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
      {
        term: 'Review checklist for namespaces',
        kind: 'method',
        statement: 'Take the objectives as review questions: recite the house rules on namespace naming, placement of using-directives and depth of nesting? Then explain the connection between namespace structure and physical module structure? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.',
        detail: 'A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.',
      },
    ],
    examples: [
      {
        title: 'A code review in three smells',
        problem: 'Review this header: it opens with `using namespace std;` and `using namespace Chrono;` at global scope, declares `namespace proj_utils { /* 40 unrelated helpers */ }`, and defines `namespace A { namespace B { namespace C { void f(); } } }`. Identify the violations and prescribe fixes.',
        steps: [
          { label: 'Smell 1 — directives in an interface', text: 'Two using-directives at global scope in a header: every includer inherits all of std and Chrono, and any future name in either can collide with the includer\'s own names. Fix: delete both; qualify in the declarations (`std::string`, `Chrono::Date`) or import single names with using-declarations *inside* the functions that need them.' },
          { label: 'Smell 2 — the grab bag', text: '`proj_utils` holds 40 unrelated helpers: a name that describes neither service nor concept — the one-sentence test fails immediately. Fix: split along the concept boundaries (parsing, io, math), each in its own namespace with a speakable name.' },
          { label: 'Smell 3 — nesting as directory tree', text: 'A::B::C almost always mirrors a folder structure that the build system, not the design, created. Three levels of qualification for one function is directory leakage. Fix: flatten to one meaningful namespace, or make the outer levels version facades per 14.4 — never a mirror of the file tree.' },
          { label: 'Count the fallout', text: 'Three violations, three fixes — and every fix is local: delete-and-qualify, split, flatten. No client code changes beyond qualification, which is the sign the structure was decorative rather than load-bearing.' },
        ],
        result: 'Directives removed (qualify instead), the grab bag split into concept namespaces, the directory mirror flattened: three smells, three local fixes, zero client breakage beyond requalification.',
      },
      {
        title: 'Reviewing namespaces code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: recite the house rules on namespace naming, placement of using-directives and depth of nesting.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Name namespaces for the service they provide — Chrono, Geometry, Net — because the namespace name is the module description compressed to a word.' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `namespace Lib { int version(); }`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: explain the connection between namespace structure and physical module structure. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: Never put a using-directive in a header; import single names with using-declarations, and keep directives to implementation files if at all.' },
        ],
        result: 'The review ends with findings tied to reasons: Name namespaces for the service they provide — Chrono, Geometry, Net — because the namespace name is the module description compressed to a word. Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      'Name namespaces for the service they provide — Chrono, Geometry, Net — because the namespace name is the module description compressed to a word.',
      'Never put a using-directive in a header; import single names with using-declarations, and keep directives to implementation files if at all.',
      'Namespaces express design structure (libraries, versions, implementation detail); deep nesting and grab-bag namespaces are physical layout leaking into logic.',
    ],
    quiz: [
      {
        q: 'Which is the strongest reason `using namespace std;` must not appear in a header?',
        options: [
          'It makes the header non-reentrant',
          'It silently applies to every current and future includer, who never chose it — future std growth can break their code at a distance',
          'std is deprecated',
          'It prevents include guards from working',
        ],
        answer: 1,
        explanation: 'The directive\'s scope is whoever includes the header: an open-ended commitment on behalf of strangers, plus a time bomb — every new std name becomes a potential ambiguity far from the cause.',
      },
      {
        q: 'A namespace named `team_foundation_common_utils` holding 80 helpers violates:',
        options: [
          'Nothing: utility namespaces are idiomatic',
          'The one-concept rule: the name describes neither a service nor a concept, so the namespace is a grab bag that should be split',
          'The ODR',
          'Only the maximum-nesting rule',
        ],
        answer: 1,
        explanation: 'The namespace name is the module description in one word. A name that lists neither service nor concept — just provenance — announces a module boundary drawn by convenience, not design.',
      },
      {
        q: 'Acceptable use of a using-directive is:',
        options: [
          'At global scope in a widely-included header',
          'Inside a namespace published as a library interface',
          'Inside an implementation .cpp file or a single function scope the author owns, where the blast radius is bounded',
          'Inside a class definition',
        ],
        answer: 2,
        explanation: 'Confine the blast radius: within a translation unit (or better, a function), the author both chose the import and reads all the code it can affect.',
      },
    ],
  },
]

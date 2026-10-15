import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup — The C++ Programming Language, 4th Edition
// Chapter 12: Functions (Sections 12.1 – 12.7)
// Declarations and interfaces, argument passing, overload resolution,
// pre-/postconditions, function pointers, macros, and the chapter's advice.
// ============================================================================

export const cppCh12Content: SectionContent[] = [
  // ---------------------------------------------------------------- 12.1
  {
    sectionId: "cpp-ch12-s1",
    readingTime: 6,
    intro: "A function is the most basic unit of abstraction in C++: a named piece of code that can be called, with an interface separated from its implementation. The declaration is the contract — return type, name, parameter types — placed in a header for the world to program against; the definition, in a separate source file, is nobody's business but the implementer's. This section fixes the vocabulary: declaration versus definition, argument versus parameter, and the one-definition rule that lets many translation units share one contract.",
    objectives: [
      "Distinguish function declaration from definition, and argument from parameter",
      "Explain the header/implementation model of separate compilation and the ODR",
      "Read the parts of a declaration, including [[noreturn]] and return rules"
    ],
    concepts: [
      {
        term: "Declaration vs definition",
        kind: "definition",
        statement: "A **function declaration** (prototype) specifies the interface — return type, name, and parameter types — and ends with a semicolon: `double f(int);`. A **function definition** adds the body: `double f(int x) { return x * 1.5; }`. Declarations go in headers, definitions in source files; a program may declare a function any number of times but must define it exactly once (**the one-definition rule**).",
        detail: "Declaring is promising; defining is delivering. The compiler checks each call against a declaration; the linker then matches each use to the one definition across all translation units — a missing definition is the classic *undefined reference* link error."
      },
      {
        term: "Argument vs parameter",
        kind: "notation",
        statement: "A **parameter** is a variable declared in the function's declaration (`int x` in `double f(int x)`); an **argument** is the expression supplied at a call site (`f(7)` — the argument is 7). The parameters are initialized from the arguments when the call runs.",
        detail: "The chapter's phrasing: arguments are the inputs, parameters are the receiving variables. Slipping between the words is harmless socially but fatal when reasoning about passing modes (12.2): what is copied, moved or aliased is the *argument into the parameter*."
      },
      {
        term: "Separate compilation",
        kind: "method",
        statement: "C++ compiles each `.cpp` (translation unit) independently and links them: `user.cpp` sees the declarations in `stack.h` and calls them; `stack.cpp` defines them. The header *is* the interface — the set of declarations users program against — so changing a definition never forces recompilation of users, while changing the header recompiles the world.",
        detail: "This is why the interface discipline matters: everything a user needs (types, function declarations, documentation) belongs in the header; everything else (local helpers, data layout details) stays in the implementation file."
      },
      {
        term: "Return types and return",
        kind: "definition",
        statement: "The **return type** precedes the function name and states what the call yields: a value (copied or moved out), `void` for nothing, or a reference/pointer. `return expr;` exits the function with that value; a `void` function simply falls off the end or returns bare `return;`. `main` is special: falling off its end is equivalent to `return 0;` (success).",
        detail: "A function declared `[[noreturn]]` promises never to return at all — functions that always throw or exit (like `fatal_error`) — letting compilers both optimize and warn when a call after it is unreachable."
      },
      {
        term: "Function Declarations: the working contract",
        kind: "definition",
        statement: "**Function Declarations.** Prototypes, arguments and return. You can claim this section when you can distinguish function declaration from definition, and argument from parameter — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 12 (Functions); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Anatomy of a three-file program",
        problem: "A `stack` module is split into stack.h, stack.cpp and user.cpp. Show what each file contains and what the compiler and linker see.",
        steps: [
          { label: "stack.h — the contract", text: "```\n// stack.h\nstruct Stack {\n    void push(int x);     // declarations only\n    int  pop();\n    bool empty() const;\nprivate:\n    vector<int> elems;    // data layout detail\n};\n``` — users include this; changing *declarations* here recompiles every user." },
          { label: "stack.cpp — the delivery", text: "```\n// stack.cpp\nvoid Stack::push(int x) { elems.push_back(x); }\nint  Stack::pop()       { int x = elems.back(); elems.pop_back(); return x; }\n``` — the definitions match the declarations exactly; nobody else ever re-parses these lines." },
          { label: "user.cpp — the client", text: "```\n// user.cpp\n#include \"stack.h\"\nint main() { Stack s; s.push(2); s.push(40); return s.pop() + s.pop(); }\n``` — the compiler checks the two calls against stack.h; the linker finds the two definitions in stack.cpp." },
          { label: "Trace", text: "push(2), push(40): the stack holds {2, 40}. pop() returns 40, then pop() returns 2 — `main` returns $40 + 2 = 42$." }
        ],
        result: "One contract, one definition, many users: the header is compiled into every user, the definitions are compiled once, and the linker joins them — the return value is 42."
      },
      {
        title: "Working through function declarations",
        problem: "Prototypes, arguments and return. Your task: distinguish function declaration from definition, and argument from parameter.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: distinguish function declaration from definition, and argument from parameter. Write down the guarantee you will rely on — for this chapter it is: A declaration states the interface (return type, name, parameter types); a definition adds the body — declare many times, define exactly once (ODR)." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int add(int a, int b) { return a + b; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain the header/implementation model of separate compilation and the ODR — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Arguments are the values at the call; parameters are the callee's variables, initialized from them at call time. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A declaration states the interface (return type, name, parameter types); a definition adds the body — declare many times, define exactly once (ODR). Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A declaration states the interface (return type, name, parameter types); a definition adds the body — declare many times, define exactly once (ODR).",
      "Arguments are the values at the call; parameters are the callee's variables, initialized from them at call time.",
      "Headers carry the interface, source files the implementation; the linker matches calls to the single definition — and [[noreturn]] documents functions that never come back."
    ],
    quiz: [
      {
        q: "The essential difference between a function declaration and a definition is:",
        options: [
          "declarations must be in headers, definitions in .cpp files by the standard",
          "a definition supplies the body (the executable code); a declaration states only the interface",
          "declarations may not name their parameters",
          "definitions are checked by the linker, declarations by the compiler"
        ],
        answer: 1,
        explanation: "The body is the difference — and it is what the one-definition rule limits to exactly one per program. (Header placement is convention and hygiene, not syntax.)"
      },
      {
        q: "In the call `f(7)`, the 7 is called the ___, while the `int x` in `int f(int x)` is the ___:",
        options: [
          "parameter; argument",
          "argument; parameter",
          "definition; declaration",
          "prototype; body"
        ],
        answer: 1,
        explanation: "Arguments are supplied at call sites; parameters are the receiving variables, initialized from the arguments — the distinction that makes passing modes discussable."
      },
      {
        q: "A program declares `double g(int);` in three files and defines it in one. This is:",
        options: [
          "an ODR violation — a function may be declared only once",
          "legal: multiple declarations are fine; the single definition is what the linker needs",
          "a compile error in each file",
          "only legal for static functions"
        ],
        answer: 1,
        explanation: "The one-definition rule limits *definitions* to one; declarations (through headers, typically) are repeated freely — that is how separate compilation works at all."
      },
      {
        q: "`[[noreturn]]` in a declaration means:",
        options: [
          "the function returns no value (like void)",
          "the function never returns to its caller — it throws or exits forever",
          "the function may be called only once",
          "the function returns a null pointer"
        ],
        answer: 1,
        explanation: "It documents functions like fatal-error handlers that never come back — a void function *returns* (with nothing); a noreturn one never does, which compilers can exploit and check."
      }
    ]
  },

  // ---------------------------------------------------------------- 12.2
  {
    sectionId: "cpp-ch12-s2",
    readingTime: 8,
    intro: "How an argument travels into a function is a design decision with three honest answers: copy it (by value), alias it (by reference), or steal its guts (by move). Stroustrup's rules are refreshingly concrete: small things by value; large read-only things by const reference; things you will modify for the caller by plain reference; things you will consume and keep by rvalue reference plus move. Pick wrong and you pay in silent copies, in surprise mutations, or in a copied-away state that was meant to be moved — and the figure below is the table to keep at hand.",
    objectives: [
      "Choose among by-value, by-reference, by-const-reference and by-move for a given argument",
      "Quantify the copy costs that motivate the choice",
      "Explain the moved-from state and the rule against returning references to locals"
    ],
    concepts: [
      {
        term: "Pass by value",
        kind: "definition",
        statement: "**`void f(T v)`** copies the argument into the parameter — the callee receives a fresh object, and *cannot* affect the caller's. For small types (`int`, pointers, a pair of them) the copy is free and the independence is a feature; it is also the right choice for **sink** parameters the function will keep its own copy of.",
        detail: "A reference parameter of a machine-size type buys nothing: passing `int` by `const int&` replaces a one-register copy with an indirection. Value is the honest default at that size."
      },
      {
        term: "Pass by reference",
        kind: "definition",
        statement: "**`void f(T& v)`** makes the parameter an alias of the caller's object: no copy, and every write through `v` lands in the caller's object. This is the mode for **out** and **in-out** parameters — the function's results written directly into the caller's storage.",
        detail: "It is also how you let a function act on something it must not copy — a stream, a lock, an object whose address is its identity. The caller must pass an lvalue: an alias needs something to alias."
      },
      {
        term: "Pass by const reference",
        kind: "definition",
        statement: "**`void f(const T& v)`** aliases the caller's object *without the right to modify it*: no copy, read-only, and temporaries may bind to it. This is the default for **large** read-only arguments — `string`, `vector`, any type whose copy would cost more than a pointer.",
        detail: "What counts as large: anything bigger than a couple of words, or anything with a nontrivial copy constructor. The `const` is not decoration — it lets the same function accept literals and other rvalues, which a plain `T&` would refuse."
      },
      {
        term: "Pass by move (rvalue reference)",
        kind: "definition",
        statement: "**`void f(T&& v)`** binds to rvalues — temporaries, or anything the caller explicitly marks with `std::move` — and licenses the callee to *steal the guts* of the argument instead of copying it. Afterwards the source object is left **valid but unspecified**: it can be assigned to or destroyed, but its contents are not promised.",
        detail: "The standard move pattern for a sink: `Widget(Widget&& v) : name{std::move(v.name)}, data{std::move(v.data)} {}` — each expensive member is moved (pointer swaps), the cheap ones copied. What the moved-from object holds afterwards depends on the type — for a `string`, typically the empty state."
      },
      {
        term: "Choosing the mode",
        kind: "method",
        statement: "The book's selection rules: **small or sink → by value; large, read-only → `const T&`; the function writes results through it → `T&`; the function consumes and keeps it → `T&&` and move from it.** One hard rule on the way out: **never return a reference or pointer to a local** — the local dies with the frame; return by value and let move semantics make it cheap.",
        detail: "For strings and containers the modern refinements (4e mentions them) go further — `string_view` and `span` avoid both copy and ownership questions for pure observation — but the four modes above are the complete decision table."
      }
    ],
    figures: [
      {
        caption: "The four argument-passing modes, for a caller passing a large object `T` (say 800 bytes) into `f`. By value: all 800 bytes are copied into an independent parameter. By reference: a pointer-sized alias — writes land in the caller's object. By const reference: the same alias, read-only. By move: the object's guts (its heap buffer) are transferred in a few pointer assignments, leaving the source valid but unspecified.",
        svg: '<svg viewBox="0 0 760 470" width="100%" role="img" aria-label="Table of the four argument passing modes: by value, by reference, by const reference, and by move"><rect x="20" y="30" width="110" height="46" fill="currentColor" fill-opacity="0.12" stroke="currentColor"/><text x="75" y="49" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="bold" fill="currentColor">memory</text><text x="75" y="62" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="bold" fill="currentColor">picture</text><rect x="130" y="30" width="170" height="46" fill="currentColor" fill-opacity="0.12" stroke="currentColor"/><text x="215" y="49" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="bold" fill="currentColor">declaration</text><text x="215" y="62" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="bold" fill="currentColor">f(...)</text><rect x="300" y="30" width="160" height="46" fill="currentColor" fill-opacity="0.12" stroke="currentColor"/><text x="380" y="49" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="bold" fill="currentColor">cost for an</text><text x="380" y="62" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="bold" fill="currentColor">800-byte T</text><rect x="460" y="30" width="140" height="46" fill="currentColor" fill-opacity="0.12" stroke="currentColor"/><text x="530" y="49" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="bold" fill="currentColor">callee can change</text><text x="530" y="62" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="bold" fill="currentColor">caller object?</text><rect x="600" y="30" width="140" height="46" fill="currentColor" fill-opacity="0.12" stroke="currentColor"/><text x="670" y="49" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="bold" fill="currentColor">use when</text><text x="670" y="62" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="bold" fill="currentColor">—</text><rect x="30" y="106" width="38" height="20" fill="currentColor" fill-opacity="0.25" stroke="currentColor"/><line x1="68" y1="116" x2="100" y2="116" stroke="currentColor" stroke-width="1.4"/><polygon points="98,112 108,116 98,120" fill="currentColor"/><rect x="108" y="106" width="38" height="20" fill="currentColor" fill-opacity="0.25" stroke="currentColor"/><text x="75" y="138" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">full copy</text><text x="215" y="116" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">f(T v)</text><text x="380" y="110" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">all 800 bytes</text><text x="380" y="124" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">copied</text><text x="530" y="116" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">no — only its</text><text x="530" y="130" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">own copy</text><text x="670" y="110" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">small T;</text><text x="670" y="124" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">or a sink that</text><text x="670" y="138" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">keeps its copy</text><rect x="30" y="196" width="38" height="20" fill="currentColor" fill-opacity="0.25" stroke="currentColor"/><line x1="108" y1="206" x2="70" y2="206" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/><polygon points="72,202 62,206 72,210" fill="currentColor"/><text x="75" y="228" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">alias</text><text x="215" y="200" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">f(T&amp; v)</text><text x="380" y="200" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">a reference</text><text x="380" y="214" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">(~8 bytes, no copy)</text><text x="530" y="206" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">yes — writes land</text><text x="530" y="220" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">in the object</text><text x="670" y="200" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">results written</text><text x="670" y="214" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">out through it;</text><text x="670" y="228" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">uncopyable types</text><rect x="30" y="286" width="38" height="20" fill="currentColor" fill-opacity="0.25" stroke="currentColor"/><line x1="108" y1="296" x2="70" y2="296" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/><polygon points="72,292 62,296 72,300" fill="currentColor"/><text x="75" y="318" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">alias, read-only</text><text x="215" y="290" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">f(const T&amp; v)</text><text x="380" y="290" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">~8 bytes, no copy,</text><text x="380" y="304" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">no writes</text><text x="530" y="296" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">no</text><text x="670" y="290" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">large read-only</text><text x="670" y="304" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">argument — the</text><text x="670" y="318" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">default</text><rect x="30" y="376" width="38" height="20" fill="none" stroke="currentColor" stroke-dasharray="3 3"/><text x="49" y="390" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="8.5" fill="currentColor" opacity="0.8">husk</text><line x1="68" y1="386" x2="100" y2="386" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/><polygon points="98,382 108,386 98,390" fill="currentColor"/><rect x="108" y="376" width="38" height="20" fill="currentColor" fill-opacity="0.25" stroke="currentColor"/><text x="75" y="408" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">guts move</text><text x="215" y="380" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">f(T&amp;&amp; v)</text><text x="380" y="380" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">a few pointer</text><text x="380" y="394" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">swaps — no copy</text><text x="530" y="386" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">source left valid,</text><text x="530" y="400" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">unspecified</text><text x="670" y="380" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">consuming a</text><text x="670" y="394" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">temporary / taking</text><text x="670" y="408" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">ownership</text><line x1="20" y1="160" x2="740" y2="160" stroke="currentColor" stroke-width="0.8" opacity="0.4"/><line x1="20" y1="250" x2="740" y2="250" stroke="currentColor" stroke-width="0.8" opacity="0.4"/><line x1="20" y1="340" x2="740" y2="340" stroke="currentColor" stroke-width="0.8" opacity="0.4"/><line x1="20" y1="430" x2="740" y2="430" stroke="currentColor" stroke-width="0.8" opacity="0.4"/><line x1="125" y1="30" x2="125" y2="430" stroke="currentColor" stroke-width="0.8" opacity="0.4"/><line x1="295" y1="30" x2="295" y2="430" stroke="currentColor" stroke-width="0.8" opacity="0.4"/><line x1="455" y1="30" x2="455" y2="430" stroke="currentColor" stroke-width="0.8" opacity="0.4"/><line x1="595" y1="30" x2="595" y2="430" stroke="currentColor" stroke-width="0.8" opacity="0.4"/><text x="20" y="452" font-family="ui-sans-serif, system-ui" font-size="10" font-style="italic" fill="currentColor" opacity="0.85">small: built-ins, pointers, spans; large: string, vector, types with many members</text><text x="20" y="468" font-family="ui-sans-serif, system-ui" font-size="10" font-style="italic" fill="currentColor" opacity="0.85">never return a reference or pointer to a local variable — return by value and let the move make it cheap</text></svg>',
        afterConcept: 5
      }
    ],
    examples: [
      {
        title: "The price of a copy, computed",
        problem: "A function `void audit(const Big& b);` is called 1,000,000 times, where `struct Big { double m[100]; };` is 800 bytes. What does by-value passing cost compared to const-reference?",
        steps: [
          { label: "By value", text: "Each call copies the parameter: 800 bytes into the callee's frame. Over $10^6$ calls that is $800 \\times 10^6 = 800$ MB of copying — pure traffic, none of it wanted (the function only reads)." },
          { label: "By const reference", text: "Each call passes an alias: on a 64-bit machine, 8 bytes. Total traffic $8 \\times 10^6 = 8$ MB — a hundred-fold reduction, and the callee can still read every byte." },
          { label: "What is NOT saved", text: "Indirection is not free: each member access through the reference is a pointer hop. That is why `int`, `double` and pointers themselves stay by value — for 8-byte objects, copying and re-loading are the same cost, without the alias." },
          { label: "The sink exception", text: "If the function keeps a copy (`store(Big b)` writing `data = std::move(b);` inside), by value + move is *better* than const& + manual copy: the caller can move the argument in, and lvalue callers still pay exactly one copy." }
        ],
        result: "800 MB versus 8 MB of argument traffic across a million calls — the const reference earns its keep the moment the object exceeds a few machine words, and the by-value sink is the one place a copy is the point."
      },
      {
        title: "Why returning a local by reference is banned",
        problem: "Explain, in terms of frames and lifetimes, why `const string& quote() { string s = build(); return s; }` is a defect even though it compiles.",
        steps: [
          { label: "What the signature promises", text: "A reference return promises *the callee hands back an object that lives elsewhere* — storage that survives the return. The only honest candidates are statics, globals, heap objects owned by someone, or data the caller passed in." },
          { label: "What the code delivers", text: "`s` is an automatic variable in `quote`'s stack frame. `return s;` binds the returned reference to `s`; then the frame — including `s` — is destroyed as the return completes." },
          { label: "The caller's view", text: "The caller now holds a reference to a destroyed object: reading it is undefined behavior — reading whatever reuses that stack slot, which is usually the caller's own locals. It *appears* to work in debug builds, which is exactly why the rule must be known, not discovered." },
          { label: "The fix", text: "Return **by value**: `string quote() { string s = build(); return s; }`. The return copies or (with move semantics) *moves* the guts out — a pointer swap, not a deep copy — so returning by value is cheap precisely because moves exist." }
        ],
        result: "References to locals dangle by construction; return by value and let move semantics carry the payload — the pointer swap costs three assignments, not a copy of the string's characters."
      }
    ],
    keyTakeaways: [
      "By value copies — right for small types and for sinks that keep their own copy; by `T&` aliases for writing; by `const T&` aliases read-only — the default for large read-only arguments.",
      "By `T&&` plus `std::move` transfers guts with pointer swaps, leaving the source valid but unspecified — the mode for consuming temporaries and taking ownership.",
      "Never return a reference or pointer to a local: the frame dies with the return; return by value, which move semantics makes cheap."
    ],
    quiz: [
      {
        q: "For `void print(const Big& b);` where Big is 800 bytes, the const reference is preferred because:",
        options: [
          "references are required for objects",
          "it avoids copying 800 bytes per call while still promising not to modify the object",
          "it lets the function modify b",
          "it makes the call faster than the function body"
        ],
        answer: 1,
        explanation: "The choice is copy versus alias: read-only access to a large object wants the ~8-byte alias, and the const is what licenses literals and temporaries to bind as well."
      },
      {
        q: "After `void f(T&& v) { mine = std::move(v); }` is called as `f(std::move(t));`, the caller's `t` is:",
        options: [
          "unchanged, as if copied",
          "destroyed and must not be named again",
          "valid but unspecified — assignable and destructible, but its contents are not promised",
          "const now"
        ],
        answer: 2,
        explanation: "The moved-from state: a valid object with an unspecified value — you may assign to it or let it be destroyed, but you must not assume what the move left behind."
      },
      {
        q: "A function must deliver two computed values into variables the caller already owns. The matching mode is:",
        options: [
          "return-by-reference to its own locals",
          "parameters by value",
          "non-const reference parameters (`T&`), written through by the function",
          "`T&&` parameters"
        ],
        answer: 2,
        explanation: "In/out output parameters are the plain reference's job — the aliases write directly into the caller's storage; by-value copies would be discarded, and locals cannot back a returned reference."
      },
      {
        q: "Why is `const string&` acceptable where `string&` is not, for `f(g())` — g returning a temporary string?",
        options: [
          "both accept the temporary equally",
          "const references may bind to rvalues (temporaries), plain references may not",
          "temporaries convert to const strings",
          "it is a compiler extension"
        ],
        answer: 1,
        explanation: "The language allows binding a reference only to an lvalue unless it is const — so the const-reference parameter accepts literals and temporaries, one more reason large-read-only args default to it."
      },
      // PYQ-pattern — by-value parameter copy semantics (rephrased)
      {
        q: "What does this program print?\n```cpp\n#include <iostream>\nvoid inc(int x) { x++; }\nint main() {\n  int a = 5;\n  inc(a);\n  std::cout << a;\n}\n```",
        options: ["`5`, because the parameter is an independent copy", "`6`, because the argument aliases the parameter", "Nothing predictable, because `x` starts uninitialized", "It cannot compile, because arguments must be references"],
        answer: 0,
        explanation: "Step 1: The code given passes a variable to a by-value parameter that increments it. Step 2: The governing rule is argument passing: a by-value parameter is initialized as a fresh copy of the argument, so mutations affect only the local copy. Step 3: Tracing the call, `x` starts as a copy of `5`, rises to `6` locally, is destroyed at return, and `a` in the caller never changes, so `5` prints. Step 4: The distractors fail because no aliasing exists without a reference, the copy is fully initialized, and by-value parameters are always legal. Step 5: Therefore the program prints `5`."
      }
    ]
  },

  // ---------------------------------------------------------------- 12.3
  {
    sectionId: "cpp-ch12-s3",
    readingTime: 6,
    intro: "Overloading lets one name serve several parameter lists: `print(int)`, `print(double)`, `print(const string&)` — the same operation for different types, chosen automatically at every call. The machinery is overload resolution: the compiler ranks how well each argument matches each candidate's parameter and picks the unique best. Exact matches beat promotions, promotions beat standard conversions, and if two candidates tie, the call is ambiguous — an error you will meet, and one the worked example below deliberately triggers.",
    objectives: [
      "Explain what overload resolution ranks and how the best match is chosen",
      "Predict the chosen overload for exact matches, promotions and conversions",
      "Diagnose ambiguity errors, including why return types do not participate"
    ],
    concepts: [
      {
        term: "Overloading",
        kind: "definition",
        statement: "**Overloading** declares several functions with the same name in the same scope, differing in their **parameter types**. The **return type does not participate** in overload resolution — you cannot overload `int f(double)` against `double f(double)`, because the call `f(x)` could not choose between them.",
        detail: "Overloads should implement the *same semantics* for different types: `abs()`, `print()`, `max()` are the model — if the overloads do different things to their arguments, that is a design bug wearing an overload's clothing."
      },
      {
        term: "Overload resolution",
        kind: "method",
        statement: "For each call, the compiler gathers the visible candidates and ranks, **per argument**, how well it converts to each parameter: **exact match** (same type, or trivial) beats **integral/floating promotion** (`char` to `int`, `float` to `double`) beats **standard conversion** (e.g. `long` to `int`, `int` to `double`) beats **user-defined conversion**. A candidate wins that is at least as good on every argument and strictly better on at least one; if no such candidate exists, the call is **ambiguous**.",
        detail: "Resolution is per call site, in compile time, using only declarations — which is why the header (12.1) is where the callable surface of a library is defined."
      },
      {
        term: "Promotion beats conversion",
        kind: "insight",
        statement: "With `void f(int);` and `void f(double);` declared: `f(3)` picks `f(int)` (exact), `f(3.0)` picks `f(double)` (exact), `f('x')` picks `f(int)` — char-to-int is a **promotion**, which outranks the conversion char-to-double. Small types climb the int ladder first, and only then consider other types.",
        detail: "The same principle explains `f(3.0f)`: float-to-double is a floating **promotion**, so with only f(int) and f(double) visible, `f(3.0f)` selects `f(double)` — promotion beats the standard conversions float-to-int."
      },
      {
        term: "Ambiguity",
        kind: "law",
        statement: "When two candidates tie — neither strictly better — the call is **rejected as ambiguous**, at compile time. The canonical case: with `f(int)` and `f(double)` visible, the call `f(3L)` is ambiguous, because `long`→`int` and `long`→`double` are both standard conversions of equal rank; the fix is an explicit cast (`f(static_cast<int>(3L))`) or another overload `f(long)`.",
        detail: "Ambiguity is a feature: the language refuses to guess between equally-good options rather than burying the choice in invisible rules. Adding the missing overload is usually the better fix than casting at call sites."
      },
      {
        term: "Overloaded Functions: the working contract",
        kind: "definition",
        statement: "**Overloaded Functions.** Overload resolution in practice. You can claim this section when you can explain what overload resolution ranks and how the best match is chosen — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 12 (Functions); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Five calls against three overloads",
        problem: "Given `void f(int); void f(double); void f(const char*);` predict the choice for `f(3)`, `f(3.0)`, `f('x')`, `f(\"hi\")` and `f(3L)` — then verify the surprises.",
        steps: [
          { label: "f(3)", text: "Argument `int`, parameter `int`: **exact match** → `f(int)`. No contest." },
          { label: "f(3.0)", text: "Argument `double`: exact → `f(double)`." },
          { label: "f('x')", text: "`char` promotes to `int` (integral promotion, 10.5) while reaching `double` needs a standard conversion. Promotion wins → `f(int)`, which receives the character code 120." },
          { label: "f(\"hi\")", text: "The literal is a `const char[3]` decaying to `const char*` — an exact match for that parameter. The other overloads would require conversions of the pointer, far worse. → `f(const char*)`." },
          { label: "f(3L) — the trap", text: "`long` converts to `int` (standard conversion) and to `double` (standard conversion) with equal rank: **ambiguous**, compile error. Neither candidate is better, so the compiler refuses to choose — add `f(long)` or cast explicitly at the call site." }
        ],
        result: "f(int), f(double), f(int) via promotion, f(const char*), and a compile-time ambiguity error for f(3L) — resolution is rank-based, per argument, with no guessing."
      },
      {
        title: "Working through overloaded functions",
        problem: "Overload resolution in practice. Your task: explain what overload resolution ranks and how the best match is chosen.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: explain what overload resolution ranks and how the best match is chosen. Write down the guarantee you will rely on — for this chapter it is: Overloads share a name and differ in parameter types; return types do not participate — calls must be decidable from arguments alone." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int add(int a, int b) { return a + b; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — predict the chosen overload for exact matches, promotions and conversions — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Resolution ranks per argument: exact match > promotion > standard conversion > user-defined conversion; the winner must dominate on some argument and lose on none. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Overloads share a name and differ in parameter types; return types do not participate — calls must be decidable from arguments alone. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Overloads share a name and differ in parameter types; return types do not participate — calls must be decidable from arguments alone.",
      "Resolution ranks per argument: exact match > promotion > standard conversion > user-defined conversion; the winner must dominate on some argument and lose on none.",
      "Ties are rejected as ambiguous errors — f(3L) against f(int)/f(double) — fixed by adding the missing overload or an explicit cast."
    ],
    quiz: [
      {
        q: "With `void f(int);` and `void f(double);` visible, the call `f('x')` selects:",
        options: [
          "f(double) — char converts to double",
          "f(int) — the char-to-int promotion outranks the char-to-double conversion",
          "ambiguous",
          "a compile error: no f(char)"
        ],
        answer: 1,
        explanation: "Integral promotion (char→int) is a better rank than a standard conversion (char→double), so f(int) wins without ever consulting f(double)."
      },
      {
        q: "Why is `f(3L)` ambiguous between `f(int)` and `f(double)`?",
        options: [
          "long cannot convert to either",
          "both long→int and long→double are standard conversions of the same rank — neither candidate dominates",
          "long always prefers long overloads only",
          "literals cannot overload"
        ],
        answer: 1,
        explanation: "No promotion path exists from long; both destinations are standard conversions of equal rank, so the tie rule fires: ambiguity, resolved by an added overload or an explicit cast."
      },
      {
        q: "Which pair cannot coexist as overloads in the same scope?",
        options: [
          "`void g(int);` and `void g(double);`",
          "`void g(int);` and `int g(double);`",
          "`int g(double);` and `double g(double);`",
          "`void g(string&);` and `void g(const string&);`"
        ],
        answer: 2,
        explanation: "They differ only in return type, which does not participate in resolution — calls could not choose. (The last pair differs in parameter type, a classic const-overload.)"
      },
      {
        q: "`f(3.0f)` with only `f(int)` and `f(double)` visible selects:",
        options: [
          "f(int)",
          "f(double) — float-to-double is a promotion, beating the conversion to int",
          "ambiguous",
          "a new f(float) is generated"
        ],
        answer: 1,
        explanation: "Floating promotion float→double outranks the standard conversion float→int, so the double overload wins — the promotion ladder applies to floats too."
      }
    ]
  },

  // ---------------------------------------------------------------- 12.4
  {
    sectionId: "cpp-ch12-s4",
    readingTime: 5,
    intro: "A function is a contract, and contracts have two clauses: what the caller must guarantee on entry (the precondition) and what the function guarantees on return (the postcondition). C++ has no enforced-contract language feature in wide use, so the book teaches the discipline: state the expectations in the declaration's documentation, check them at the interface, and throw when they fail — using the Expects/Ensures notation of the Core Guidelines support library, or plain throws, or assert for what is only checked in debugging.",
    objectives: [
      "State pre- and postconditions precisely for a function interface",
      "Enforce them with Expects/Ensures, throws or asserts, and know when each applies",
      "Distinguish precondition violations (caller bugs) from expected runtime conditions"
    ],
    concepts: [
      {
        term: "Precondition",
        kind: "definition",
        statement: "A **precondition** is what the function requires of its arguments and the program state on entry: `int area(int len, int wid)` requires `len > 0 && wid > 0`. When a precondition fails, the function's behavior is, by contract, **not guaranteed** — the bug is in the caller, and fixing it there is the only correct fix.",
        detail: "The declaration is where a precondition is *stated*; the definition is where the cheap ones are *checked*. A precondition nobody can read is a trapdoor, which is why the notation exists."
      },
      {
        term: "Postcondition",
        kind: "definition",
        statement: "A **postcondition** is what the function guarantees about its result and state on return, *given* its preconditions held: `area` guarantees the result is positive — the product of two positives. Postconditions are the caller's side of the contract: what may be relied on without re-checking.",
        detail: "A useful postcondition is checkable and specific: *the returned value is the number of characters written* can be checked against the file position; *the vector is sorted* can be checked with `is_sorted` in a debug build."
      },
      {
        term: "Expects and Ensures",
        kind: "method",
        statement: "The Core Guidelines notation — adopted by the book — makes the contract executable:\n```\nint area(int len, int wid)\n{\n    Expects(len > 0 && wid > 0);   // precondition\n    int a = len * wid;\n    Ensures(a > 0);                // postcondition\n    return a;\n}\n```\n`Expects(p)` throws when `p` fails; `Ensures(p)` checks the promise just before returning. The same effect can be written as a direct throw: `if (!(len > 0 && wid > 0)) throw std::invalid_argument{\"area()\"};`.",
        detail: "`assert(p)` is the debug-only variant: it vanishes in release builds (NDEBUG), which is right for catching *your own* broken invariants during development and wrong for validating untrusted input."
      },
      {
        term: "Errors are not precondition violations",
        kind: "insight",
        statement: "A missing file, a closed socket, a bad password are **expected runtime conditions** — the function anticipated them, reports them (exception, error code), and the caller *handles* them. A precondition violation is a **bug in the caller** — the program was built wrong; recovery is recompilation, not catching. Mixing the two produces code that *handles* bugs it should have fixed and *fixes* conditions it should have handled.",
        detail: "The standard library draws the same line with its exception taxonomy: `std::logic_error` (a bug — e.g. `length_error` from a preconditon-like misuse) versus `std::runtime_error` (a run of bad luck, e.g. `overflow_error`, `bad_alloc`)."
      },
      {
        term: "Pre- and Postconditions: the working contract",
        kind: "definition",
        statement: "**Pre- and Postconditions.** Expressing expectations in code. You can claim this section when you can state pre- and postconditions precisely for a function interface — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 12 (Functions); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Writing the contract of one function",
        problem: "Specify and enforce the contract of `double sqrt_checked(double x)` — a wrapper that refuses negative inputs — and of `pop()` on a stack class.",
        steps: [
          { label: "sqrt_checked's precondition", text: "The domain of the square root is $x \\ge 0$; the book's `sqrt` example treats a negative argument as a domain error. In the contract style: `Expects(x >= 0);` — a negative call is the caller's bug." },
          { label: "Alternative: expected condition", text: "If instead the design *expects* negatives (user-supplied data), the function should not have the precondition — it should report: `if (x < 0) throw std::domain_error(\"sqrt of negative\");` — a condition the caller may legitimately handle. Same line of code, completely different contract." },
          { label: "pop's precondition", text: "`Stack::pop()` requires `!empty()` — popping an empty stack is a caller bug. Enforce cheaply: `Expects(!empty());` before reading `elems.back()`. (The standard library chose *undefined* here instead — `vector::pop_back` on empty is UB — trading checking for speed; the contract must then be written in documentation alone.)" },
          { label: "pop's postcondition", text: "`Ensures(elems.size() == old_size - 1);` — the size decreased by exactly one and the return value is the former top. Here the checking notation shows its limit: the *old* size must be captured first, which is why real bodies write `auto old = size(); ... Ensures(size() == old - 1);`." }
        ],
        result: "Two functions, four clauses: domain requirements on entry, size and value promises on exit — some checked with Expects/Ensures, some documented where checking is unaffordable."
      },
      {
        title: "Working through pre- and postconditions",
        problem: "Expressing expectations in code. Your task: state pre- and postconditions precisely for a function interface.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: state pre- and postconditions precisely for a function interface. Write down the guarantee you will rely on — for this chapter it is: A precondition states what the caller must guarantee (violations are caller bugs, behavior not guaranteed); a postcondition states what the callee guarantees when preconditions held." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int add(int a, int b) { return a + b; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — enforce them with Expects/Ensures, throws or asserts, and know when each applies — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Enforce contracts with Expects/Ensures (throwing) or explicit throws; use assert only for debug-time checks — and distinguish these from handling expected runtime conditions. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A precondition states what the caller must guarantee (violations are caller bugs, behavior not guaranteed); a postcondition states what the callee guarantees when preconditions held. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A precondition states what the caller must guarantee (violations are caller bugs, behavior not guaranteed); a postcondition states what the callee guarantees when preconditions held.",
      "Enforce contracts with Expects/Ensures (throwing) or explicit throws; use assert only for debug-time checks — and distinguish these from handling expected runtime conditions.",
      "Expected failures (missing file, bad input) are reported and handled; precondition violations are fixed at the call site — conflating the two corrupts both error handling and debugging."
    ],
    quiz: [
      {
        q: "The line `Expects(len > 0 && wid > 0);` at the top of `area` expresses:",
        options: [
          "a postcondition on the result",
          "a precondition: what the caller must guarantee; violation throws",
          "a loop invariant",
          "a compile-time assertion like static_assert"
        ],
        answer: 1,
        explanation: "Expects is the precondition half of the Core Guidelines contract notation — it runs at entry and throws on failure, marking the failure as the caller's."
      },
      {
        q: "Which is a *precondition violation* rather than an expected runtime condition?",
        options: [
          "a network connection dropped mid-transfer",
          "a configuration file is missing on first run",
          "`pop()` called on an empty stack — the caller ignored the documented contract",
          "a user types an out-of-range number into a prompt"
        ],
        answer: 2,
        explanation: "The empty-pop call is a program-logic bug to fix at the call site; the others are conditions the program anticipated and should report and handle gracefully."
      },
      {
        q: "`assert(p)` differs from `Expects(p)` in that assert:",
        options: [
          "throws bad_alloc",
          "is removed in release builds (NDEBUG) — a debug-time check only",
          "checks the return value instead of arguments",
          "is always faster"
        ],
        answer: 1,
        explanation: "assert catches your own bugs during development and disappears from production; Expects-style checks (or explicit throws) are for interfaces that must defend themselves in every build."
      }
    ]
  },

  // ---------------------------------------------------------------- 12.5
  {
    sectionId: "cpp-ch12-s5",
    readingTime: 5,
    intro: "A function has a type — its return type and parameter list — so it can be pointed at, stored, and passed around like any other value. The declaration syntax is the notorious one: the parentheses around `(*pf)` are load-bearing, because without them the asterisk binds to the return type instead. Type aliases tame the syntax, and the empty-capture lambda from the last chapter quietly converts to a plain function pointer — the modern bridge between the two worlds.",
    objectives: [
      "Declare, initialize and call through pointers to functions",
      "Use type aliases to make function-pointer types readable",
      "Apply function pointers to callbacks and dispatch tables, and know the lambda bridge"
    ],
    concepts: [
      {
        term: "Pointer to function",
        kind: "definition",
        statement: "The type *function taking `int`, returning `void`* is written as a declaration of a pointer to it: **`void (*pf)(int);`** — pf is a pointer that can hold such a function. The parentheses around `(*pf)` are **mandatory**: `void *pf(int);` instead declares a *function* named pf taking int and returning `void*`.",
        detail: "The reading rule: start at the identifier, apply what the parentheses bind first (`(*pf)` — a pointer), then read outwards (`(int)` — to a function taking int, `void` — returning void)."
      },
      {
        term: "Assignment and call",
        kind: "notation",
        statement: "Functions decay to pointers to themselves, so assignment is plain: `void f(int); void (*pf)(int) = f;`. Calling works two ways — **`pf(7)`** (the idiomatic shorthand) or the fully explicit **`(*pf)(7)`** — both call `f` with 7. A null function pointer may be tested and must not be called.",
        detail: "Passing behavior as an argument is the same move: a parameter `void g(int (*op)(int))` receives a function (as a decayed pointer) and calls `op(x)` — the classic callback."
      },
      {
        term: "Type aliases",
        kind: "method",
        statement: "Aliases make function-pointer types readable by naming the *function type* first: **`using F = int(int, int);`** declares F to be the type *function of two ints returning int*; then **`F* fp = add;`** is a pointer to such a function, and `F* table[]` an array of them. Parameters read cleanly too: `void apply(int*, int, F* op);`.",
        detail: "The same works with templates — `std::function<int(int,int)>` additionally accepts anything *callable* of that shape, including closures with captures, at the cost of indirection; the raw pointer accepts only the plain functions."
      },
      {
        term: "Callbacks and dispatch tables",
        kind: "method",
        statement: "The standard uses: passing a comparator to `sort` or `qsort`, a hash function to a container, and building **dispatch tables** — `map<string, F*>` or arrays of function pointers — replacing long switch statements with a lookup and a call.",
        detail: "A table entry can be added without touching the dispatch code (open for extension, closed for modification in the small): registering a new operation is a data edit, not a code edit."
      },
      {
        term: "The lambda bridge",
        kind: "insight",
        statement: "A **capture-less lambda converts to the plain function-pointer type**: `int (*fp)(int) = [](int x) { return x + 1; };` compiles — the compiler can emit it as an ordinary function. A lambda **with captures cannot**, because its closure carries state that a bare pointer has nowhere to carry — for stateful callbacks, take `std::function` (or a template parameter).",
        detail: "This asymmetry is the closure theory of 11.4 in practice: no captures means no members, so the generated class is layout-compatible with a plain function's entry point."
      }
    ],
    examples: [
      {
        title: "A dispatch table for arithmetic",
        problem: "Build a table of the four arithmetic operations on `int` and evaluate `7 ? 3` for each entry — with and without the alias.",
        steps: [
          { label: "The raw form", text: "`int add(int a, int b) { return a + b; }` and three siblings (`sub`, `mul`, `divi`). Declaring the table directly: `int (*ops[])(int, int) = { add, sub, mul, divi };` — readable, but only just: the reader must find `(*ops[])` to see it is an array of pointers." },
          { label: "The alias form", text: "`using Bin = int(int, int);` then `Bin* ops[] = { add, sub, mul, divi };` — *array of pointer to binary int function* reads in one pass." },
          { label: "Dispatch loop", text: "```\nfor (Bin* op : ops)\n    cout << op(7, 3) << \" \";   // calls through each pointer\n``` — `op(7, 3)` is the shorthand call form; `(*op)(7, 3)` means the same thing." },
          { label: "The results", text: "add: $7+3=10$; sub: $7-3=4$; mul: $7 \\times 3=21$; divi: $7/3=2$ (integer division truncates, 10.5). The loop prints `10 4 21 2`." }
        ],
        result: "10 4 21 2 — behavior stored as data: adding an operation means adding one function and one table entry, not editing the dispatch loop."
      },
      {
        title: "Declaring the trap correctly",
        problem: "What do `void (*pf)(int);` and `void *pf(int);` each declare, and why does one line of parentheses decide it?",
        steps: [
          { label: "With the parentheses", text: "`void (*pf)(int);` — pf is a **pointer** to a function taking int, returning void. The `(*pf)` group binds the asterisk to the identifier before the function declarator is applied." },
          { label: "Without them", text: "`void *pf(int);` — pf is a **function** taking int and returning `void*` (a pointer to raw memory). Function declarators bind tighter than pointer declarators, exactly as they bind tighter than arrays in `int *a[10]` (array of pointers) versus `int (*a)[10]` (pointer to array)." },
          { label: "Call-site check", text: "Test the difference: `pf = f;` is an assignment of a function to the pointer in the first case and a compile error (reassigning a function) in the second." },
          { label: "Escape hatch", text: "When a signature gets this dense — `void (*signal(int, void (*)(int)))(int);` — stop reading and alias: `using Handler = void(*)(int); Handler signal(int, Handler);` — the same type, now stated in two readable pieces." }
        ],
        result: "One pair of parentheses decides between *pointer to function* and *function returning pointer* — and type aliases exist precisely so that no reader ever has to parse the difference again."
      }
    ],
    keyTakeaways: [
      "`void (*pf)(int);` declares a pointer to a function; the parentheses are mandatory — without them, `void *pf(int);` is a function returning `void*`.",
      "Functions decay to pointers to themselves; call through with `pf(7)` or `(*pf)(7)`, and pass them as callback parameters the same way.",
      "`using F = int(int);` names the function type so `F*` reads as *pointer to function*; capture-less lambdas convert to plain function pointers, capturing ones need std::function or templates."
    ],
    quiz: [
      {
        q: "`double (*pf)(int);` declares:",
        options: [
          "a function pf taking int and returning a pointer to double",
          "pf — a pointer to a function taking int and returning double",
          "a pointer to a double, initialized with an int",
          "an array of doubles"
        ],
        answer: 1,
        explanation: "The (*pf) group makes pf a pointer first; then (int) and double give the pointed-to function's shape. Without the parentheses the asterisk would belong to the return type."
      },
      {
        q: "After `void f(int); void (*pf)(int) = f;` the legal call forms are:",
        options: [
          "only `(*pf)(7)`",
          "only `pf(7)`",
          "both `pf(7)` and `(*pf)(7)` — they are equivalent",
          "neither — pf must be dereferenced to an array first"
        ],
        answer: 2,
        explanation: "Calling through a function pointer accepts both the explicit and the shorthand form; the shorthand is what makes callbacks read like ordinary calls."
      },
      {
        q: "Which lambda converts to a plain function pointer `int(*)(int)`?",
        options: [
          "`[x](int a) { return x + a; }`",
          "`[&](int a) { return a * 2; }`",
          "`[](int a) { return a + 1; }` — capture-less only",
          "all lambdas of matching arity"
        ],
        answer: 2,
        explanation: "A closure with captures has members to carry; a bare pointer has nowhere to carry them. The capture-less closure is layout-compatible with a plain function."
      },
      {
        q: "The main advantage of a dispatch table of function pointers over a switch statement is:",
        options: [
          "it runs without any call overhead at all",
          "new operations are added as data (a table entry) without editing the dispatching code",
          "it type-checks more loosely",
          "it works with any return type in the same table"
        ],
        answer: 1,
        explanation: "The table externalizes the choice: registration becomes a data edit. (Each entry still type-checks to the one function type — the table is homogeneous.)"
      }
    ]
  },

  // ---------------------------------------------------------------- 12.6
  {
    sectionId: "cpp-ch12-s6",
    readingTime: 5,
    intro: "Macros are not part of C++ the language — they are a textual preprocessor that runs before the compiler ever sees the code. That is both their power and their poison: a macro knows nothing about types, scopes or syntax; it replaces tokens. Stroustrup's policy is the famous first rule of macros: don't use them unless you have to — and the modern *have to* list is short: #include, include guards, conditional compilation and a few configuration switches. Everything else macros once did, the language now does better.",
    objectives: [
      "Explain what the preprocessor does and why macro substitution defeats types and scopes",
      "Trace the classic function-like macro bugs: precedence and double evaluation",
      "List what macros remain legitimately for, and the language features that replace the rest"
    ],
    concepts: [
      {
        term: "The preprocessor",
        kind: "definition",
        statement: "The preprocessor runs **before compilation**, on the raw token stream: `#include` pastes files in, `#define name value` substitutes text, `#ifdef`/`#endif` erase regions. Macros are pure **textual substitution** — they see no types, honor no scopes, and cannot be seen by the compiler as entities at all.",
        detail: "That is the root of every macro problem: `#define PI 3.14` is not a double named PI; it is a direction to the text editor to replace the letters. Anything the compiler checks — overloading, namespaces, debugging symbols — applies to what survives the substitution."
      },
      {
        term: "Function-like macro pitfalls",
        kind: "insight",
        statement: "The two classic defects of `#define SQ(x) x*x` (and of its patched cousin `((x)*(x))`): **precedence** — `SQ(a+1)` expands to `a+1*a+1`, evaluating to $a^2+a+1$, not $(a+1)^2$; and **double evaluation** — `SQ(i++)` increments `i` twice, because the argument appears twice in the text (and the two unsequenced increments are undefined behavior outright).",
        detail: "The fix for the first defect is parentheses; the second has *no* parenthesization fix, because text duplication is what a macro *is*. The real fix is `inline int sq(int x) { return x * x; }` — types, one evaluation, overloading, a name the debugger sees."
      },
      {
        term: "What macros remain for",
        kind: "definition",
        statement: "The honest remainders, none of which the language can express: `#include` (the module mechanism), **include guards** (`#ifndef STACK_H` / `#define` / `#endif`) preventing double inclusion, **conditional compilation** (`#ifdef DEBUG`, `#if __cplusplus >= 201103L`) for platform and version switches, and **configuration control** — selecting among build variants from the command line.",
        detail: "A few idioms live on by tradition — `#define CASE break; case` to make stacked switch labels read as lists, `#define FOREVER for(;;)` — usable, but each is a small fork in readability that the modern language mostly answers."
      },
      {
        term: "Language features replace macros",
        kind: "method",
        statement: "The replacement table, point by point: **constants** → `constexpr` (typed, scoped, usable in constant expressions, 10.4); **tiny functions** → `inline` functions; **type-generic functions** → templates (and overloading); **compile-time computation** → `constexpr` functions; **debug info** → real names survive, because there is nothing to substitute.",
        detail: "The measure of the improvement: `constexpr int max = 100;` cannot be accidentally `#undef`ed, cannot capture the wrong identifier mid-text (`#define max` and the word `max` inside another name), and appears in the debugger as what it is."
      },
      {
        term: "Predefined macros",
        kind: "notation",
        statement: "The preprocessor supplies a few read-only macros worth knowing: `__LINE__` and `__FILE__` (where we are, for diagnostics and assertions), `__DATE__` and `__TIME__` (when it was compiled), `__cplusplus` (the language version — `199711L`, `201103L` for C++11 — for conditional compilation across standards).",
        detail: "These are the sanctioned introspection: `static_assert(__cplusplus >= 201103L, \"C++11 required\");` turns a build requirement into a build check."
      }
    ],
    examples: [
      {
        title: "Anatomy of a macro bug, twice",
        problem: "Given `#define SQ(x) ((x)*(x))` and `int i = 2, n = 2;` predict `SQ(n+1)` and `SQ(i++)`.",
        steps: [
          { label: "SQ(n+1) — correct by luck", text: "The argument appears as `x` twice inside parentheses, so the expansion `((n+1)*(n+1))` = $(2+1)^2 = 9$ — the parenthesized form saved the precedence, this time." },
          { label: "SQ(i++) — the unsalvageable one", text: "The expansion is `((i++)*(i++))`: the text repeats the argument. The two increments are unsequenced — **undefined behavior** — and on a typical build evaluates as $2 \\times 3 = 6$ with `i` ending at 4, on some other schedule. There is no parenthesis that fixes duplication." },
          { label: "The same code as a function", text: "`constexpr int sq(int x) { return x * x; }` — `sq(n+1)` is 9, `sq(i++)` increments once and yields 4 with `i` ending at 3: typed, once-evaluated, overloadable, constexpr-usable, debuggable." },
          { label: "The general audit", text: "Any macro whose argument appears more than once multiplies side effects; any macro whose body is not fully parenthesized inherits operator precedence; any macro name that is a common word captures unrelated text. Three failure classes, one cause: substitution, not evaluation." }
        ],
        result: "SQ(n+1) = 9; SQ(i++) is undefined — typically 6 with i = 4 — while the function gives 9 and (i ends 3, value 4): the macro's defects are structural, not fixable with more parentheses."
      },
      {
        title: "An include guard, read line by line",
        problem: "Why does every header open with three preprocessor lines, and what breaks without them?",
        steps: [
          { label: "The guard", text: "```\n// stack.h\n#ifndef STACK_H\n#define STACK_H\n// ... the declarations ...\n#endif\n``` — the first inclusion leaves STACK_H undefined, defines it, and includes the body; every later inclusion finds it defined and skips to #endif." },
          { label: "The failure without it", text: "`user.cpp` includes both `stack.h` and `utils.h`, and `utils.h` includes `stack.h` too: the preprocessor pastes the declarations *twice*, and the compile fails on redefinition of `Stack` — even though the one-definition rule (12.1) was about *definitions*; declarations repeating is fine, but a *class definition* repeated in one translation unit is an error." },
          { label: "Why the language cannot do this", text: "Double inclusion is a fact about *files and text*, which is exactly the layer the preprocessor owns — C++ modules (a later addition) are the language-level fix that makes the text game unnecessary." },
          { label: "Choosing the guard name", text: "It must be unique across the entire program's headers — hence the convention of deriving it from the file's path (`MYLIB_STACK_H`), since two libraries both choosing `STACK_H` collide exactly as `#define max` once did." }
        ],
        result: "Three lines make a header idempotent — the canonical *have to* of macro use, and the reason the preprocessor survives at all."
      }
    ],
    keyTakeaways: [
      "Macros are textual substitution run before compilation: no types, no scopes, no single evaluation — the preprocessor sees tokens, not meaning.",
      "The two structural macro bugs are precedence (fixable with parentheses) and argument duplication (unfixable — `SQ(i++)` is undefined behavior); functions and constexpr are the cure.",
      "Macros remain legitimately for #include, include guards, conditional compilation and configuration control; constants, small functions and type-genericity all have language-level replacements."
    ],
    quiz: [
      {
        q: "Given `#define SQ(x) ((x)*(x))` and `int i = 2;`, the expression `SQ(i++)`:",
        options: [
          "yields 4 with i = 3",
          "expands to ((i++)*(i++)) — two unsequenced increments, undefined behavior",
          "is a compile error: macros cannot take expressions",
          "yields 9"
        ],
        answer: 1,
        explanation: "The argument's text appears twice, so the side effect happens twice with no sequencing — undefined behavior. No parenthesization fixes textual duplication; a function evaluates its argument once."
      },
      {
        q: "Which is NOT a sanctioned modern use of macros per the chapter?",
        options: [
          "include guards in headers",
          "conditional compilation for platform differences",
          "defining the constant PI for use in expressions",
          "the #include mechanism itself"
        ],
        answer: 2,
        explanation: "Constants belong to the language: `constexpr double pi = 3.14159...;` is typed, scoped and debuggable — the macro form silently substitutes text wherever the letters appear."
      },
      {
        q: "The preprocessor macro `__cplusplus` exists to:",
        options: [
          "name the compiler vendor",
          "report the language version so code can be conditionally compiled per standard",
          "count the included headers",
          "define the program's main"
        ],
        answer: 1,
        explanation: "It expands to the standard's date code (199711L, 201103L, ...) — the sanctioned way to write code that adapts to which C++ is compiling it."
      },
      {
        q: "The include guard idiom prevents:",
        options: [
          "link errors from missing definitions",
          "the same header's contents being pasted twice into one translation unit",
          "macros from other files leaking in",
          "recursion between functions"
        ],
        answer: 1,
        explanation: "#ifndef/#define/#endif makes a header idempotent at the text level: the second include is skipped, so class definitions are not repeated in the compiled unit."
      }
    ]
  },

  // ---------------------------------------------------------------- 12.7
  {
    sectionId: "cpp-ch12-s7",
    readingTime: 4,
    intro: "The chapter's advice assembles the sections into a design posture: functions are the unit of abstraction, so each should do one thing, state its contract, and pass and return by the mode that says what it means. The interface is the product — complete enough to use, minimal enough to maintain — and everything from argument modes to overload discipline serves it. Even the macro ban is the same principle: the interface should be made of language, not of text.",
    objectives: [
      "Apply the one-function-one-task discipline to interface design",
      "Choose argument and return modes that state intent",
      "Replace macros with language features, and know when overloading is the wrong tool"
    ],
    concepts: [
      {
        term: "One function, one task",
        kind: "method",
        statement: "A function should perform a **single logical action** — computable in a short sentence with no *and* in it. If a function's description needs a conjunction (`reads the file and sorts the data`), it is two functions; if it needs a *or*, the caller probably wanted to choose explicitly.",
        detail: "The operational test: could you name it honestly, and would anyone be surprised by any line in it? `read_and_sort_and_print` fails the name test at birth."
      },
      {
        term: "Complete and minimal interfaces",
        kind: "method",
        statement: "An interface (the header, 12.1) should be **complete** — everything a user needs is declared, no more source-peeking — and **minimal** — nothing is exposed that a user does not need. Every extra declaration is surface to document, test and never change; every missing one forces users into workarounds that become dependencies.",
        detail: "Stroustrup's warning cuts both ways: a fat interface wastes everyone's future time; an incomplete one breeds fragile cleverness in the callers who must route around it."
      },
      {
        term: "Pass and return with intent",
        kind: "method",
        statement: "The argument modes are a vocabulary, so use them as one: value for small and for sinks, `const&` for large read-only, `&` for outputs the caller owns, `&&` for consuming. Return by value (moves make it cheap), **never a reference to a local** — and return by reference only for objects that provably outlive the call.",
        detail: "Read the signature as a sentence: `void publish(const string& title, string& url_out);` says *I read, you own what I write* — the modes are documentation that the compiler enforces."
      },
      {
        term: "Overload for meaning, not convenience",
        kind: "insight",
        statement: "Overloads of one name should implement **one operation for related types** — `print(int)` and `print(const string&)` are *the same idea*. When two overloads do materially different things, they are two functions with a shared name by accident, and every caller pays the ambiguity of that accident.",
        detail: "And when the differences are purely in *how* rather than *what*, prefer a template — one definition, every type — over a growing family of near-identical overloads."
      },
      {
        term: "Language over preprocessor",
        kind: "method",
        statement: "The macro rule of 12.6, promoted to policy: **don't use macros for anything the language expresses** — constants are `constexpr`, small operations are `inline` functions, type-genericity is templates and overloading, compile-time computation is `constexpr` functions. Macros remain for file inclusion, guards and conditional compilation, and nothing else.",
        detail: "The payoff is uniform: everything built from language constructs has types, scopes, overloading, and a debugger's view — everything built from text has none."
      }
    ],
    examples: [
      {
        title: "Reviewing an interface against the advice",
        problem: "A header offers: `double* get_stats(vector<double> v, int& n, string title);` plus `#define MAXSTAT 100`. Audit it.",
        steps: [
          { label: "The parameter modes", text: "`vector<double> v` copies the entire vector on every call — a large read-only argument wants `const vector<double>&`. `int& n` as an output is fine, but `title` passed by value copies a string to be read: `const string&`." },
          { label: "The return", text: "`double*` returning statistics: where does it point? If it points to a local array — a dangling return; if to a `new`ed one — who deletes it? The advice-backed fix is returning a small value type (a `struct Stats`) by value — moves make it cheap and ownership is unambiguous." },
          { label: "One task?", text: "The name says *get stats*, but the parameters smuggle in a title (printing?) and a count (sizing?) — read the sentence: it computes, counts and titles. Split: `Stats compute(const vector<double>&);` and let callers do their own printing." },
          { label: "The macro", text: "`#define MAXSTAT 100` — a constant wearing text clothing: it is untyped, unscoped and collides with any other MAXSTAT. Replace with `constexpr int max_stat = 100;` in the appropriate namespace (or make it disappear — the fixed array it sized probably wanted a `vector` anyway)." },
          { label: "The contract", text: "Missing entirely: what happens for an empty vector? State it — `Expects(!v.empty())` or return NaN — because a caller who cannot read the contract has to guess, and guesses become production incidents." }
        ],
        result: "The audited signature: `Stats compute(const vector<double>& v);` with a stated precondition — every change is one of the chapter's rules applied, and each removes a failure class."
      },
      {
        title: "Reviewing functions code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the one-function-one-task discipline to interface design.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: One function, one logical task — if the honest description needs an *and*, split it; interfaces should be complete for users and minimal for maintainers." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `int add(int a, int b) { return a + b; }`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: choose argument and return modes that state intent. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Use the passing modes as a language of intent: value for small and sinks, const& for large read-only, & for caller-owned outputs, && for consuming — and never return references to locals." },
        ],
        result: "The review ends with findings tied to reasons: One function, one logical task — if the honest description needs an *and*, split it; interfaces should be complete for users and minimal for maintainers. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "One function, one logical task — if the honest description needs an *and*, split it; interfaces should be complete for users and minimal for maintainers.",
      "Use the passing modes as a language of intent: value for small and sinks, const& for large read-only, & for caller-owned outputs, && for consuming — and never return references to locals.",
      "Overloads must be one operation across related types; everything macro-shaped — constants, small functions, genericity — has a typed, scoped, language-level replacement."
    ],
    quiz: [
      {
        q: "Which function description most clearly violates the one-task advice?",
        options: [
          "`merge(left, right)` — merges two sorted lists",
          "`read_and_parse_and_print(config)` — reads a file, parses it and prints a summary",
          "`to_upper(s)` — uppercases a string",
          "`draw()` — renders the shape"
        ],
        answer: 1,
        explanation: "Two conjunctions in the name: three actions, three callers who must want all of them — each half is a function the other callers could reuse."
      },
      {
        q: "The best return type for a function producing a few computed numbers is:",
        options: [
          "`double*` to a local array — fast, direct",
          "a small value struct returned by value — ownership is unambiguous and moves keep it cheap",
          "`double&` — references avoid copying",
          "`void` with print statements inside"
        ],
        answer: 1,
        explanation: "Locals dangle behind references and pointers; returned values are moved out cheaply and owned by the caller — the advice's rule against local references applied at the design level."
      },
      {
        q: "Per the chapter's advice, `#define SIZE 100` in a library header should be:",
        options: [
          "kept — macros are faster than constants",
          "replaced by `constexpr int size = 100;` (typed, scoped, debuggable)",
          "moved to the .cpp file",
          "written in uppercase with more underscores"
        ],
        answer: 1,
        explanation: "Constants are the language's job: constexpr gives the same compile-time availability with a type, a scope and a name the compiler and debugger can see."
      }
    ]
  }
]

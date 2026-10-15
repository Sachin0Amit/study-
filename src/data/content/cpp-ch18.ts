import type { SectionContent } from "../library"

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 18: Overloading (Sections 18.1 – 18.5)
// ============================================================================

export const cppCh18Content: SectionContent[] = [
  // ---------------------------------------------------------------- 18.1
  {
    sectionId: "cpp-ch18-s1",
    readingTime: 5,
    intro: "Overloading is one name with several meanings, selected by the types of the arguments — never by the return. It exists so that a concept can keep its natural notation across types: `+` adds `int`s, `double`s and `complex`es alike, and library types can meet user expectations without new syntax. All of the machinery runs at compile time, which is why overloading costs nothing at run time and forgives nothing at compile time.",
    objectives: [
      "Define overloading and the role argument types play in selecting among same-named functions",
      "Rank the conversion categories used to choose a best match",
      "State what overload resolution cannot do — overloading on return type, run-time selection",
    ],
    concepts: [
      {
        term: "Overloading",
        kind: "definition",
        statement: "**Overloading** lets several functions share a name with different parameter lists; the compiler selects among them by the argument types at each call site. When several functions or operators share a name, the choice among them — *overload resolution* — happens entirely at compile time.",
        detail: "Two overloads that differ only in return type are an error: the return type is not part of the selection, so the compiler could never choose between them.",
      },
      {
        term: "Common vocabulary across types",
        kind: "insight",
        statement: "The point is uniformity of notation for uniform meaning: users write `z1 + z2` for complex addition rather than `add(z1, z2)`, and `cout << x` rather than a family of `print_int`, `print_double`, … functions. The name carries the concept; the argument types pick the implementation.",
        detail: "This is why overloading matters most for operator overloading (18.2–18.3) and for generic programming, where one template name must mean the same thing across many types.",
      },
      {
        term: "Resolution in three steps",
        kind: "method",
        statement: "(1) **Name lookup** collects the candidate set from the visible scopes. (2) The **viable** candidates are those with the right number of parameters and arguments convertible to the parameter types. (3) The **best match** wins: a candidate that is better than every other in at least one argument and at least as good in all of them. If two candidates each win one argument, the call is *ambiguous* — a compile-time error.",
        detail: "Member functions, non-members and (for operators) the built-in meanings all compete in the same pool — which is where chapter 18's subtlest examples come from.",
      },
      {
        term: "Conversion ranking",
        kind: "law",
        statement: "For ranking a single argument: **exact match** beats **integral or floating promotion** (`char` to `int`, `float` to `double`), which beats a **standard conversion** (`char` to `double`, `int` to `double`), which beats a **user-defined conversion** — at most one — which beats matching an ellipsis `...`.",
        detail: "Exact match includes only trivial adjustments (array-to-pointer, qualification). Promotion beats conversion is the fact that decides most textbook resolution puzzles.",
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Operators as a design tool. You can claim this section when you can define overloading and the role argument types play in selecting among same-named functions — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 18 (Overloading); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Resolve four calls by hand",
        problem: "Given only `void f(int);` and `void f(double);` in scope, determine which function is chosen — or ambiguity — for `f(5)`, `f('a')`, `f(3.0f)` and `f(true)`.",
        steps: [
          { label: "Step 1: f(5)", text: "Exact match for `f(int)` — no conversion anywhere, decision made." },
          { label: "Step 2: f('a')", text: "No `f(char)`; `char` to `int` is an *integral promotion*, while `char` to `double` is a *standard conversion*. Promotion outranks conversion → `f(int)` (with argument value 97)." },
          { label: "Step 3: f(3.0f)", text: "No `f(float)`; `float` to `double` is the *floating-point promotion*, `float` to `int` a standard conversion. Promotion wins → `f(double)`." },
          { label: "Step 4: f(true)", text: "`bool` to `int` is an integral promotion → `f(int)` receives 1; `f(double)` would need a standard conversion and loses." },
        ],
        result: "`f(int)`, `f(int)`, `f(double)`, `f(int)` — promotion beat conversion every time the two overloads offered the choice.",
      },
      {
        title: "Working through introduction",
        problem: "Operators as a design tool. Your task: define overloading and the role argument types play in selecting among same-named functions.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define overloading and the role argument types play in selecting among same-named functions. Write down the guarantee you will rely on — for this chapter it is: One name, several parameter lists: the argument types select the overload, at compile time; return type never participates." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `Complex operator+(Complex a, Complex b) { return a += b; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — rank the conversion categories used to choose a best match — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Resolution: lookup builds the candidates, viability filters by arity and convertibility, best match wins or the call is ambiguous. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: One name, several parameter lists: the argument types select the overload, at compile time; return type never participates. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "One name, several parameter lists: the argument types select the overload, at compile time; return type never participates.",
      "Resolution: lookup builds the candidates, viability filters by arity and convertibility, best match wins or the call is ambiguous.",
      "Per-argument ranking: exact > promotion > standard conversion > user-defined conversion (one) > ellipsis.",
    ],
    quiz: [
      {
        q: "Two functions with the same name and identical parameter lists but different return types:",
        options: [
          "are a legal overload pair",
          "are a compile-time error — return type is not part of overload selection",
          "select the overload by the context of the return value",
          "are resolved at run time",
        ],
        answer: 1,
        explanation: "Callers do not always use the return, so it cannot drive selection; the two declarations simply clash.",
      },
      {
        q: "For `f('a')` with overloads `f(int)` and `f(double)` only, which is called?",
        options: ["`f(double)`", "`f(int)` — `char` to `int` is a promotion and outranks the conversion to `double`", "ambiguous — compile error", "neither: `f(char)` is required"],
        answer: 1,
        explanation: "Integral promotion (char to int) beats the standard conversion char to double — the classic ranking fact.",
      },
      {
        q: "Overload resolution happens:",
        options: [
          "at run time, using the dynamic types of the arguments",
          "at compile time, using the static types of the arguments",
          "at link time",
          "only for operator functions",
        ],
        answer: 1,
        explanation: "It is pure compile-time machinery — zero run-time cost, and run-time polymorphism is an entirely different mechanism (virtual functions, chapter 20).",
      },
      {
        q: "A call is reported *ambiguous* when:",
        options: [
          "no candidate has the right number of parameters",
          "two viable candidates each convert an argument better than the other, so neither is best",
          "an argument is a class type",
          "a candidate is declared in a namespace",
        ],
        answer: 1,
        explanation: "Best match must dominate in one argument and tie or win in all others; mutual domination means no winner — the compiler refuses to guess.",
      },
      // PYQ-pattern — overload ranking promotion versus conversion (rephrased)
      {
        q: "Which overload is selected?\n```cpp\nvoid f(int);\nvoid f(double);\nint main() { f('a'); }\n```",
        options: ["`f(int)`, because `char` to `int` is a promotion while `char` to `double` is a conversion, and promotions rank higher", "`f(double)`, because floating types always outrank integer types", "The call is ambiguous, because both candidates need one conversion", "Neither is viable: character arguments require an exact match"],
        answer: 0,
        explanation: "Step 1: The data given is a call with a `char` argument against `int` and `double` overloads. Step 2: The governing rule is overload ranking: exact match beats promotion, and promotion beats general conversion. Step 3: Tracing the candidates, `char` to `int` is an integral promotion while `char` to `double` is a floating conversion, so the promotion path wins and `f(int)` is selected. Step 4: The distractors fail because no type family outranks another wholesale, the two sequences differ in rank so no ambiguity arises, and conversions make both candidates viable. Step 5: Therefore the integer overload is selected."
      }
    ],
  },

  // ---------------------------------------------------------------- 18.2
  {
    sectionId: "cpp-ch18-s2",
    readingTime: 7,
    intro: "An operator function is just a function with a strange name — `operator+`, `operator[]`, `operator()` — that the compiler calls when it sees the corresponding operator applied to operands of your types. The rules are strict where they must be: you cannot invent operators, and precedence, associativity and arity are fixed. The reward: types like `complex` and the containers that read like the built-ins.",
    objectives: [
      "Declare operator functions for binary, unary, subscript and call operators",
      "Apply the member-versus-nonmember rules, including the four member-only operators",
      "Distinguish prefix from postfix `++`/`--` and explain the return-value difference",
    ],
    concepts: [
      {
        term: "operator@ naming",
        kind: "notation",
        statement: "For every operator `@`, a function named **`operator@`** can be declared — as a member (`a.operator@(b)`) or a non-member (`operator@(a, b)`), and both forms compete in overload resolution. Only *existing* operators can be overloaded: there is no `operator**` for exponentiation.",
        detail: "Precedence, associativity and the number of operands are those of the built-in operator — overloading adds meanings, never syntax. `operator+` for two `complex` values still binds exactly as tightly as `a + b` always did.",
      },
      {
        term: "Four members-only operators",
        kind: "law",
        statement: "**`=` (assignment), `[]` (subscript), `()` (call) and `->` (dereference) must be member functions** — their left operand must be the object itself, with identity. Everything else is free: symmetric binary operators (`==`, `+`, `*`) are best as non-members, so both operands take conversions with equal rights.",
        detail: "Conversion operators (18.4) are members by the same logic. The `->` operator is the odd one out: it may return a pointer or another class with its own `operator->`, so smart pointers chain.",
      },
      {
        term: "Operators that cannot be overloaded",
        kind: "definition",
        statement: "`::` (scope), `.` and `.*` (member access), `?:` (conditional), `sizeof`, `alignof`, `typeid`, `noexcept` and the cast operators (`static_cast` and friends) **cannot be overloaded** — their meaning is wired into the type system itself.",
        detail: "The committee kept these fixed because their operands are type names or because their behavior could not be meaningfully replaced (what would an overloaded `?:` even select between?).",
      },
      {
        term: "++ and --, prefix and postfix",
        kind: "method",
        statement: "Prefix is **`T& operator++()`** — increments the object and returns it by reference. Postfix is **`T operator++(int)`**: the dummy `int` parameter exists purely to distinguish the two forms; the function saves the old value, increments, and returns the *old* value by value.",
        detail: "So `++c` means 'increment, use the new value' (a reference, no copy), while `c++` means 'use the old value (a copy), increment' — the built-in semantics exactly, and the reason `++c` is the preferred spelling in loops.",
      },
      {
        term: "Subscript and call operators",
        kind: "method",
        statement: "`operator[]` gives a container class built-in feel for element access — the checked version throws `std::out_of_range` rather than reading arbitrary memory. `operator()` takes any number of arguments and turns objects into *function objects*, the foundation of the standard algorithms' flexibility.",
        detail: "A `const` and a non-`const` subscript pair (chapter 16's const-overloading) gives read access on `const` objects and write access on mutable ones — the standard container idiom.",
      },
    ],
    figures: [
      {
        caption: "Figure — Overload resolution for `a @ b`: candidate operator functions (member and non-member forms, plus the built-in meanings) are gathered by lookup, filtered for viability, and ranked per argument — exact, promotion, standard, user-defined conversion (at most one), ellipsis — with a unique best match required or the call is rejected as ambiguous.",
        svg: `<svg viewBox="0 0 760 400" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart of operator overload resolution from expression through candidate gathering, viability filtering and conversion ranking to call or ambiguity error">
<defs><marker id="cpp18a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="380" y="24" text-anchor="middle" font-size="15" fill="currentColor">Overload resolution for a @ b — every decision at compile time</text>
<rect x="280" y="40" width="200" height="34" rx="8" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/>
<text x="380" y="62" text-anchor="middle" font-size="14" fill="currentColor" font-family="monospace">expression: a @ b</text>
<line x1="380" y1="74" x2="380" y2="94" stroke="currentColor" stroke-width="2" marker-end="url(#cpp18a)"/>
<rect x="150" y="96" width="460" height="52" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>
<text x="380" y="118" text-anchor="middle" font-size="13" fill="currentColor">gather candidates by name lookup:</text>
<text x="380" y="138" text-anchor="middle" font-size="13" fill="currentColor" font-family="monospace">a.operator@ (member) · operator@ (non-member) · built-ins</text>
<line x1="380" y1="148" x2="380" y2="168" stroke="currentColor" stroke-width="2" marker-end="url(#cpp18a)"/>
<rect x="150" y="170" width="460" height="52" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>
<text x="380" y="192" text-anchor="middle" font-size="13" fill="currentColor">filter to viable:</text>
<text x="380" y="212" text-anchor="middle" font-size="13" fill="currentColor" font-family="monospace">right arity · each argument convertible · const checks</text>
<line x1="380" y1="222" x2="380" y2="242" stroke="currentColor" stroke-width="2" marker-end="url(#cpp18a)"/>
<rect x="150" y="244" width="460" height="66" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>
<text x="380" y="266" text-anchor="middle" font-size="13" fill="currentColor">rank each argument:</text>
<text x="380" y="286" text-anchor="middle" font-size="13" fill="currentColor" font-family="monospace">exact &gt; promotion &gt; standard &gt; user-defined (max 1) &gt; …</text>
<text x="380" y="302" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.75">(a candidate must win an argument and never lose one)</text>
<line x1="380" y1="310" x2="380" y2="326" stroke="currentColor" stroke-width="2" marker-end="url(#cpp18a)"/>
<path d="M 380 328 L 482 362 L 380 396 L 278 362 Z" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/>
<text x="380" y="367" text-anchor="middle" font-size="13" fill="currentColor">unique best?</text>
<line x1="482" y1="362" x2="556" y2="362" stroke="currentColor" stroke-width="2" marker-end="url(#cpp18a)"/>
<text x="519" y="354" text-anchor="middle" font-size="12" fill="currentColor">yes</text>
<rect x="560" y="344" width="180" height="38" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.5"/>
<text x="650" y="360" text-anchor="middle" font-size="13" fill="currentColor">call it</text>
<text x="650" y="376" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">zero run-time cost</text>
<line x1="278" y1="362" x2="204" y2="362" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cpp18a)"/>
<text x="241" y="354" text-anchor="middle" font-size="12" fill="currentColor">no</text>
<rect x="20" y="344" width="182" height="38" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="111" y="360" text-anchor="middle" font-size="13" fill="currentColor">ambiguous</text>
<text x="111" y="376" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">compile-time error</text>
</svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Prefix, postfix and checked subscript, traced",
        problem: "For `struct Counter { int n = 0; Counter& operator++() { ++n; return *this; } Counter operator++(int) { Counter old = *this; ++n; return old; } };` trace `Counter c; int a = c++; int b = ++c;` — then show the checked subscript idiom.",
        steps: [
          { label: "Step 1: int a = c++; (n starts at 0)", text: "Postfix runs: `old` snapshots `{n: 0}`, `n` becomes 1, and the snapshot is returned → `a == 0`, `c.n == 1`." },
          { label: "Step 2: int b = ++c;", text: "Prefix runs: `n` becomes 2 and `*this` is returned (no copy) → `b == 2`, `c.n == 2`. Note the types: prefix returns a reference, postfix returns a value — one copy per postfix use." },
          { label: "Step 3: checked subscript", text: "`double& Vector::operator[](int i) { if (i < 0 || size() <= i) throw std::out_of_range{\"Vector::operator[]\"}; return elem[i]; }` — `v[v.size()]` throws instead of reading the next object in memory." },
          { label: "Step 4: the const companion", text: "Adding `double operator[](int i) const` gives read access on `const Vector`s — read-only subscript on read-only objects, the container idiom." },
        ],
        result: "`a == 0, b == 2`, and out-of-range access is a catchable exception, not undefined behavior.",
      },
      {
        title: "Working through operator functions",
        problem: "Binary, unary and subscript operators. Your task: declare operator functions for binary, unary, subscript and call operators.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: declare operator functions for binary, unary, subscript and call operators. Write down the guarantee you will rely on — for this chapter it is: Operator functions are named `operator@`; only existing operators, with their built-in precedence, associativity and arity — `=`, `[]`, `()` and `->` must be members." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `Complex operator+(Complex a, Complex b) { return a += b; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — apply the member-versus-nonmember rules, including the four member-only operators — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `::`, `.`, `.*`, `?:`, `sizeof`, `alignof`, `typeid`, `noexcept` and the casts cannot be overloaded at all. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Operator functions are named `operator@`; only existing operators, with their built-in precedence, associativity and arity — `=`, `[]`, `()` and `->` must be members. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Operator functions are named `operator@`; only existing operators, with their built-in precedence, associativity and arity — `=`, `[]`, `()` and `->` must be members.",
      "`::`, `.`, `.*`, `?:`, `sizeof`, `alignof`, `typeid`, `noexcept` and the casts cannot be overloaded at all.",
      "Prefix `++` returns the updated object by reference; postfix `++(int)` returns the old value by value; checked `operator[]` trades a branch for the elimination of undefined behavior.",
    ],
    quiz: [
      {
        q: "Which operator must be defined as a member function?",
        options: ["`==`", "`<<`", "`=`", "`+`"],
        answer: 2,
        explanation: "`=`, `[]`, `()` and `->` require the left operand to be the object; the others — including `==` and `<<` — work better as non-members anyway.",
      },
      {
        q: "Which of these cannot be overloaded?",
        options: ["`operator[]`", "`operator?:`", "`operator()`", "`operator->`"],
        answer: 1,
        explanation: "The conditional operator's meaning depends on evaluating exactly one branch — the type system keeps it for itself, along with `::`, `.`, `sizeof` and friends.",
      },
      {
        q: "The declaration `Counter operator++(int)` defines:",
        options: [
          "the prefix increment, returning a reference",
          "the postfix increment — the `int` is a dummy parameter, and the old value is returned by value",
          "an increment that takes a count",
          "a conversion to `int`",
        ],
        answer: 1,
        explanation: "The parameter exists only to give postfix a different signature from `T& operator++()`. It is never used, and is conventionally left unnamed.",
      },
      {
        q: "Overloading `operator+` for `complex` operands changes the precedence of `+` in `a + b * c`:",
        options: [
          "to whatever the class declares",
          "not at all — precedence and associativity are fixed by the language",
          "only if the operator is a non-member",
          "only inside templates",
        ],
        answer: 1,
        explanation: "Overloading adds meanings for user-defined operands; the grammar of expressions is untouchable.",
      },
    ],
  },

  // ---------------------------------------------------------------- 18.3
  {
    sectionId: "cpp-ch18-s3",
    readingTime: 8,
    intro: "The chapter's showcase puts the machinery to work: a `complex<T>` supporting `+`, `*`, `+=`, mixed arithmetic with scalars, and output — reading exactly like the built-in numeric types. Two decisions carry the design: compound assignment (`+=`, `*=`) as the primitive member, and free `+`/`*` built on top of it, with by-value parameters so conversions reach both operands equally.",
    objectives: [
      "Read the `complex` class: representation, constructor and accessors",
      "Explain why `operator+=` is a member while `operator+` is not",
      "Do complex arithmetic by hand — the numbers the operators encode",
    ],
    concepts: [
      {
        term: "complex: representation and interface",
        kind: "definition",
        statement: "`template<class T> class complex { T re, im; public: complex(const T& r = {}, const T& i = {}) : re{r}, im{i} { } /* … */ T real() const { return re; } T imag() const { return im; } };` — two data members, one constructor with default arguments (so `complex{1,2}`, `complex{1}` and `complex{}` all construct), const accessors. A concrete class in chapter 16's sense: no virtuals, cheap to copy.",
        detail: "The representation is deliberately exposed *through accessors only* — users cannot put the two doubles into an invalid state, and the class stays small enough to copy like an `int`.",
      },
      {
        term: "Compound assignment as the primitive",
        kind: "method",
        statement: "`complex& operator+=(complex a) { re += a.re; im += a.im; return *this; }` — a member, modifying `*this`, returning `*this` by reference (mirroring the built-in `+=`). Then `operator+` is written *from* it: `complex operator+(complex a, complex b) { return a += b; }` — non-member, by value, so conversions apply to both operands with equal rights.",
        detail: "This layering is the chapter's central design lesson: define the essential operation that needs privileged access (`+=` reads `re`, `im`), then express the rest in terms of it. `a += b` inside `operator+` is legal because `a` is a local by-value copy nobody else needs.",
      },
      {
        term: "Mixed arithmetic through conversion",
        kind: "insight",
        statement: "`z + 2.0` and `2.0 + z` both work: the `double` converts to `complex<double>` via the converting constructor, and *one* `operator+` serves both orders. The templated converting constructor `template<class X> complex(const complex<X>&)` brings `complex<float>` into `complex<double>` the same way.",
        detail: "This is exactly why `operator+` must not be a member: a member `+` would only convert its right operand, and `2.0 + z` would fail while `z + 2.0` worked — an asymmetry users would hate.",
      },
      {
        term: "Modulus and argument",
        kind: "notation",
        statement: "For $z = a + bi$: the **modulus** is $|z| = \\sqrt{a^2 + b^2}$ and the **argument** is $\\arg z = \\operatorname{atan2}(b, a)$. Neither needs member status — helpers reading `real()` and `imag()` suffice, keeping the class minimal.",
        detail: "The rule the operators encode: $(a+bi)(c+di) = (ac - bd) + (ad + bc)i$ — one temporary for the new real part avoids re-reading `re` after overwriting it.",
      },
      {
        term: "Efficiency: return by value",
        kind: "method",
        statement: "`operator+` returns a `complex` by value — two doubles, trivially moved (chapter 17). The by-value parameters are equally deliberate: each is a fresh copy the function may consume (`a += b` mutates the copy), so no self-aliasing cases exist and the code stays branch-free.",
        detail: "Return-by-value + move semantics means users write `z3 = z1 * z2;` with no hidden allocation at all — the whole expression is a few floating operations.",
      },
    ],
    examples: [
      {
        title: "Hand-computing what the operators do",
        problem: "Evaluate `complex<double> z1{3, 4}; complex<double> z2{1, -2}; complex<double> z3 = z1 * z2;` and `complex<double> z4 = z1 + 2;` by hand, and compute `|z1|` and `arg z1`.",
        steps: [
          { label: "Step 1: the multiply formula", text: "$(a+bi)(c+di) = (ac - bd) + (ad + bc)i$ with $a=3, b=4, c=1, d=-2$." },
          { label: "Step 2: real part", text: "$ac - bd = 3 \\cdot 1 - 4 \\cdot (-2) = 3 + 8 = 11$." },
          { label: "Step 3: imaginary part", text: "$ad + bc = 3 \\cdot (-2) + 4 \\cdot 1 = -6 + 4 = -2$. So `z3 == complex{11.0, -2.0}` — and the member `operator*=` computes exactly these, keeping `re` in a temporary until both parts are done." },
          { label: "Step 4: the mixed add", text: "`z1 + 2` — the literal converts to `complex<double>{2, 0}`, then `operator+` adds: real $3 + 2 = 5$, imaginary $4 + 0 = 4$ → `{5, 4}`." },
          { label: "Step 5: modulus and argument", text: "$|z_1| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$ — the 3-4-5 triangle; $\\arg z_1 = \\operatorname{atan2}(4, 3) \\approx 0.9273$ radians (about 53.13 degrees)." },
        ],
        result: "`z3 = {11, -2}`, `z4 = {5, 4}`, `|z1| = 5`, `arg z1 ≈ 53.13°` — thin operators over school algebra, with types that carry the rules.",
      },
      {
        title: "Working through a complex number type",
        problem: "Classic operator overloading in action. Your task: read the `complex` class: representation, constructor and accessors.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: read the `complex` class: representation, constructor and accessors. Write down the guarantee you will rely on — for this chapter it is: `complex` is two doubles plus accessors: a concrete type whose constructor's default arguments make `complex{1,2}`, `complex{1}` and `complex{}` all work." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `Complex operator+(Complex a, Complex b) { return a += b; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain why `operator+=` is a member while `operator+` is not — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `+=` and `*=` are members returning `*this`; `+` and `*` are non-members built on them with by-value parameters, so `2.0 + z` works exactly like `z + 2.0`. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `complex` is two doubles plus accessors: a concrete type whose constructor's default arguments make `complex{1,2}`, `complex{1}` and `complex{}` all work. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`complex` is two doubles plus accessors: a concrete type whose constructor's default arguments make `complex{1,2}`, `complex{1}` and `complex{}` all work.",
      "`+=` and `*=` are members returning `*this`; `+` and `*` are non-members built on them with by-value parameters, so `2.0 + z` works exactly like `z + 2.0`.",
      "The operators encode $(a+bi)(c+di) = (ac-bd) + (ad+bc)i$ — verify by hand: $(3+4i)(1-2i) = 11-2i$.",
    ],
    quiz: [
      {
        q: "The product $(2+i)(3-i)$ equals:",
        options: ["$7+i$", "$5+i$", "$7-i$", "$5+5i$"],
        answer: 0,
        explanation: "Real: $2\\cdot3 - 1\\cdot(-1) = 7$; imaginary: $2\\cdot(-1) + 1\\cdot3 = 1$ — the same two expressions the member `operator*=` computes.",
      },
      {
        q: "Why is `operator+` for `complex` a non-member taking its parameters by value?",
        options: [
          "member functions cannot be overloaded",
          "so conversions apply to *both* operands equally — `2.0 + z` works exactly like `z + 2.0`",
          "non-members are always faster",
          "because a member cannot return a value",
        ],
        answer: 1,
        explanation: "A member `+` would convert only the right operand, breaking symmetry; by-value copies are also free to be consumed by the `+=` inside.",
      },
      {
        q: "`complex<double>& operator+=(complex a)` returns:",
        options: ["`void`", "a reference to the right-hand operand", "a reference to `*this`, mirroring the built-in `+=` so it can chain", "a copy of the old value"],
        answer: 2,
        explanation: "Assignment-flavored operators return the (updated) left operand by reference — the built-in pattern, and what makes `z1 += z2 += z3` meaningful.",
      },
      {
        q: "The expression `z1 + 2` compiles and gives `{5, 4}` because:",
        options: [
          "`operator+` has an overload taking `double`",
          "the literal `2` converts to `complex<double>{2, 0}` via the converting constructor, then the single `operator+` applies",
          "the `complex` class overrides the built-in `+`",
          "`2` is stored as the imaginary part",
        ],
        answer: 1,
        explanation: "One converting constructor plus one operator serves all mixed arithmetic — no explosion of overloads, and both orders symmetric.",
      },
    ],
  },

  // ---------------------------------------------------------------- 18.4
  {
    sectionId: "cpp-ch18-s4",
    readingTime: 7,
    intro: "Constructors convert *into* your type; conversion operators convert *out* of it. Both can fire implicitly, and having both directions at once makes ordinary expressions ambiguous — the chapter's cautionary tale. `explicit` is the brake: it keeps a constructor from converting implicitly, or a conversion operator from firing anywhere a boolean is not obviously wanted.",
    objectives: [
      "Define conversions both into and out of a class type",
      "Use `explicit` to prevent implicit conversions — including the `explicit operator bool` idiom",
      "Diagnose the classic two-way conversion ambiguity",
    ],
    concepts: [
      {
        term: "Constructor as conversion",
        kind: "definition",
        statement: "A constructor taking one effective argument — `complex(double)` — defines an implicit conversion **from** its argument type **into** the class: wherever a `complex` is expected, a plain `double` silently becomes one. This is precisely how `z + 2` works.",
        detail: "The conversion is the *whole point* for math-like types, and a hazard for container-like ones — which is why the chapter pairs this idea with `explicit`.",
      },
      {
        term: "Conversion operator",
        kind: "definition",
        statement: "A member function of the form **`operator T() const`** converts the object **to** `T`. `operator double()` on a `complex` would let it flow into arithmetic as its real part — convenient, and treacherous: it silently discards the imaginary part.",
        detail: "Conversion operators are necessarily member functions (18.2's identity requirement, again). For output-style conversion, a named function like `real()` is safer than an operator that fires without being called.",
      },
      {
        term: "explicit",
        kind: "method",
        statement: "**`explicit complex(double)`** stops the implicit conversion path: `complex z = 3;` no longer compiles, while `complex z{3};` still does. **`explicit operator bool()`** (C++11) is the idiomatic middle ground — the conversion fires in condition contexts like `if (p)` but not in accidents like `int n = p;`.",
        detail: "Rule of thumb: make single-argument constructors `explicit` unless implicit conversion is genuinely part of the class' value semantics (as with `complex`).",
      },
      {
        term: "One user conversion per sequence",
        kind: "law",
        statement: "An implicit conversion sequence applies **at most one user-defined conversion** — a constructor or a conversion operator — possibly surrounded by standard conversions on either side. `A → B → C` through two class conversions is never done silently; the programmer must name one of the steps.",
        detail: "This keeps meaning under control: with two implicit user conversions chained, almost any expression could mean almost anything, and every overload set would explode.",
      },
      {
        term: "The two-way ambiguity",
        kind: "insight",
        statement: "With **both** `complex(double)` and `operator double()` in place, `z + 2.0` has two equally good readings: `operator+(complex, complex)` after converting the literal, or `operator+(double, double)` after converting `z`. Each candidate is exact in one argument and user-converted in the other — neither is better, so the call is **ambiguous**: a compile-time error.",
        detail: "The cure is one-directional conversion: delete `operator double()` and expose the value as a named function (`z.real()`), or make the constructor `explicit`. Libraries that keep both directions are unusable in arithmetic — a design lesson, not just a language quirk.",
      },
    ],
    examples: [
      {
        title: "The ambiguous addition",
        problem: "Given `class complex { public: complex(double r = 0, double i = 0); operator double() const; /* … */ };` and `complex z1{1, 2};`, what happens for `complex z2 = z1 + 2.0;` — and what if both operands are complex?",
        steps: [
          { label: "Step 1: the candidates", text: "For `z1 + 2.0`, resolution gathers the user `operator+(complex, complex)` and the built-in `operator+(double, double)` — both are viable." },
          { label: "Step 2: reading A (complex + complex)", text: "`z1` matches exactly; the literal `2.0` needs one user-defined conversion — the constructor `complex(double)`." },
          { label: "Step 3: reading B (double + double)", text: "`2.0` matches exactly; `z1` needs one user-defined conversion — `operator double()` (silently dropping the imaginary part 2)." },
          { label: "Step 4: the tie", text: "Each candidate is better in one argument and worse in the other: neither is the best match → the call is **ambiguous**, a compile-time error. (For `z1 + z3` there is no tie: `operator+(complex, complex)` is exact in *both* arguments and wins outright.)" },
          { label: "Step 5: the fix", text: "Remove `operator double()` and offer `z1.real()` instead — one direction of implicit conversion, no ambiguity, no silent loss of the imaginary part." },
        ],
        result: "Two viable readings, one dead program — implicit conversion must be one-directional, or the arithmetic you meant to enable becomes unexpressible.",
      },
      {
        title: "Working through type conversion",
        problem: "Conversions to and from your types. Your task: define conversions both into and out of a class type.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define conversions both into and out of a class type. Write down the guarantee you will rely on — for this chapter it is: A single-argument constructor converts into the class; `operator T() const` converts out; at most one user-defined conversion fires in any implicit sequence." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `Complex operator+(Complex a, Complex b) { return a += b; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — use `explicit` to prevent implicit conversions — including the `explicit operator bool` idiom — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `explicit` disables implicit use of a constructor or conversion operator — `explicit operator bool()` keeps `if (p)` while forbidding `int n = p;`. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A single-argument constructor converts into the class; `operator T() const` converts out; at most one user-defined conversion fires in any implicit sequence. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A single-argument constructor converts into the class; `operator T() const` converts out; at most one user-defined conversion fires in any implicit sequence.",
      "`explicit` disables implicit use of a constructor or conversion operator — `explicit operator bool()` keeps `if (p)` while forbidding `int n = p;`.",
      "Conversion in both directions at once makes expressions like `z + 2.0` ambiguous — the compiler refuses, and it is right to.",
    ],
    quiz: [
      {
        q: "With both `complex(double)` and `operator double()` declared, the expression `z + 2.0` is:",
        options: [
          "resolved to `operator+(complex, complex)` — the exact match on the left wins",
          "resolved to `operator+(double, double)` — the exact match on the right wins",
          "ambiguous: each candidate wins one argument, so neither is best — compile-time error",
          "evaluated left to right, first conversion first",
        ],
        answer: 2,
        explanation: "Best match must dominate: here each reading converts exactly one argument via a user-defined conversion, so the comparison ties and the compiler rejects the call.",
      },
      {
        q: "An `explicit operator bool()` on a stream allows:",
        options: [
          "`int n = std::cin;`",
          "`if (std::cin) { /* … */ }` — but not `int n = std::cin;`",
          "implicit conversion in every expression",
          "`std::cin = true;`",
        ],
        answer: 1,
        explanation: "Explicit conversion operators fire only where a boolean is clearly required (conditions, `!`, `&&`, `||`) — the accidental conversions are compiled away.",
      },
      {
        q: "How many user-defined conversions may one implicit conversion sequence apply?",
        options: ["none", "exactly one", "at most one", "as many as needed"],
        answer: 2,
        explanation: "Standard conversions may bracket it, but only one constructor or conversion operator fires implicitly — the rule that keeps overload sets sane.",
      },
      {
        q: "A constructor `Vector(int)` without `explicit`:",
        options: [
          "requires braces at every use",
          "implicitly converts `int` to `Vector` — so `Vector v = 7;` compiles",
          "is deleted",
          "makes the class abstract",
        ],
        answer: 1,
        explanation: "That is the definition of a converting constructor; when it is not part of the design, `explicit` turns the surprise into a compile error.",
      },
      // PYQ-pattern — competing implicit conversions ambiguity (rephrased)
      {
        q: "A class `Score` provides both a non-explicit constructor `Score(int)` and a conversion operator `operator int()`. What follows for code that mixes `Score` values with integers?",
        options: ["The constructor path always wins every overload contest", "The conversion operator path always wins every overload contest", "Calls may turn ambiguous or surprising as two user-defined conversion sequences compete, so one direction should be marked explicit", "Every use of `+` with a `Score` is ill-formed"],
        answer: 2,
        explanation: "Step 1: The data given is a type convertible implicitly in both directions with plain integers. Step 2: The governing rule is conversion budgeting: overload resolution admits at most one user-defined conversion per sequence, and when inward and outward paths both qualify, competing sequences can tie or pick surprising winners. Step 3: Tracing a mixed expression, the compiler may convert the integer into a `Score` or the `Score` into an integer with neither sequence outranking the other, producing ambiguity or silent behavior shifts. Step 4: The distractors fail because neither direction dominates by rule, and many expressions remain well-formed while meaning something unintended. Step 5: Therefore one direction should be explicit unless both implicit paths are genuinely wanted."
      }
    ],
  },

  // ---------------------------------------------------------------- 18.5
  {
    sectionId: "cpp-ch18-s5",
    readingTime: 4,
    intro: "The advice column condenses the chapter: operators earn their keep only by keeping their promises. Use the conventional meanings, mirror the built-ins' behavior (return types, self-modification, evaluation), keep symmetric operators non-member, and treat implicit conversions as the loaded convenience they are.",
    objectives: [
      "Apply the conventional-meaning rule when designing operators",
      "Match built-in semantics for return types and mutation",
      "Decide member versus non-member and implicit versus explicit by principle",
    ],
    concepts: [
      {
        term: "Conventional meanings only",
        kind: "method",
        statement: "If you overload `+`, it should add. `==` should be an equivalence relation; `<` a strict weak ordering; `*` multiplication. Surprising meanings — `*` as 'repeat the string' — defeat the purpose of notation, because readers *assume* the conventional meaning, and code that looks right while being wrong is worse than code that looks wrong.",
        detail: "When the operation you want has no conventional operator, use a named member function: honest syntax beats clever syntax.",
      },
      {
        term: "Mirror the built-ins",
        kind: "method",
        statement: "`+=` modifies its left operand and returns `*this` by reference; `+` computes a new value without modifying either operand; postfix `++` yields the old value by value; assignment forms chain (`a = b = c`). Deviations compile and confuse — including you, a month later.",
        detail: "Also mirror *evaluation* behavior: do not overload `&&`, `||` or `,` at all, because their built-in short-circuit and sequencing guarantees cannot survive becoming function calls — both operands would evaluate, in unspecified order.",
      },
      {
        term: "Do not overload &&, ||, comma",
        kind: "law",
        statement: "The built-in `&&` and `||` evaluate their second operand only when needed; the comma operator sequences. An overloaded version is a plain function call: *both* operands are evaluated and the guarantee is gone. The semantics silently change — a real bug factory, not a style issue.",
        detail: "This is the one operator-design rule with no exceptions in practice: no library in the standard does it, and neither should you.",
      },
      {
        term: "Symmetric operators as non-members",
        kind: "insight",
        statement: "Make `==`, `+`, `*` non-members so conversions apply equally to both operands — `2 + z` as legal as `z + 2`. And define implicit conversions only where the value semantics are genuine (`double` to `complex`); when in doubt, `explicit` — a conversion that surprises is worse than a named function call.",
        detail: "The two rules are one rule: conversion-rich types need non-member symmetric operators, and conversion-poor types need neither.",
      },
      {
        term: "Shipping rule for overloading",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Operators must keep their conventional meanings — `+` adds, `==` is an equivalence, `<` orders — or the notation actively misleads.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "Design review: three operators for String",
        problem: "A proposal adds `String operator*(const String& s, int n)` (repeat n times), `int operator<(const String& a, const String& b)` (compare lengths) and `String& operator+(String a, const String& b)` (return the first operand). Which survive review?",
        steps: [
          { label: "Step 1: operator* for repeat", text: "No multiplication is happening; readers will expect numeric meaning — reject as an operator and provide a named member `s.repeat(n)` instead." },
          { label: "Step 2: operator< returning int on lengths", text: "`<` must return `bool` and be an ordering consistent with `==` on content; a length comparison surprises every reader and quietly breaks sorted containers that expect lexicographic order. Reject: return `bool`, compare contents." },
          { label: "Step 3: operator+ returning a reference to a by-value parameter", text: "The parameter dies at return — a dangling reference, undefined behavior. And `+` must produce a *new* value (modifying the left operand is `+=`'s job). Reject: `String operator+(const String&, const String&)` by value." },
          { label: "Step 4: the survivors", text: "A by-value, non-member `operator+`; a `bool`-returning lexicographic `operator<`; a named `repeat(n)` — every operator keeps the promise its syntax makes." },
        ],
        result: "All three rejected designs compiled; none kept the conventional promise — that is the review criterion.",
      },
      {
        title: "Reviewing overloading code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the conventional-meaning rule when designing operators.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Operators must keep their conventional meanings — `+` adds, `==` is an equivalence, `<` orders — or the notation actively misleads." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `Complex operator+(Complex a, Complex b) { return a += b; }`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: match built-in semantics for return types and mutation. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Mirror built-in behavior: `+=` mutates and returns `*this`, `+` returns a fresh value, postfix yields the old value; never overload `&&`, `||` or `,`." },
        ],
        result: "The review ends with findings tied to reasons: Operators must keep their conventional meanings — `+` adds, `==` is an equivalence, `<` orders — or the notation actively misleads. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Operators must keep their conventional meanings — `+` adds, `==` is an equivalence, `<` orders — or the notation actively misleads.",
      "Mirror built-in behavior: `+=` mutates and returns `*this`, `+` returns a fresh value, postfix yields the old value; never overload `&&`, `||` or `,`.",
      "Symmetric binary operators belong outside the class so conversions reach both operands; make conversions `explicit` unless value semantics are genuine.",
    ],
    quiz: [
      {
        q: "Why does the advice forbid overloading `&&`?",
        options: [
          "it cannot be a member function",
          "the overloaded version evaluates both operands — the built-in short-circuit guarantee is lost",
          "it conflicts with `operator&`",
          "it has no conventional meaning",
        ],
        answer: 1,
        explanation: "An operator function is just a call: arguments are evaluated before it runs, so `p && p->safe()` would dereference a null pointer the built-in would never touch.",
      },
      {
        q: "For a class with a converting constructor, `==` should be a non-member because:",
        options: [
          "members cannot be `const`",
          "conversions then apply to both operands equally — `2 == z` works like `z == 2`",
          "non-members are inline",
          "operators must never be members",
        ],
        answer: 1,
        explanation: "A member `==` converts only the right operand, producing asymmetric surprise — the same reasoning as `+` on `complex`.",
      },
      {
        q: "An `operator==` for a type should:",
        options: [
          "return the number of equal members",
          "be an equivalence relation — reflexive, symmetric, transitive — and consistent with `!=`",
          "compare addresses, always",
          "throw on inequality",
        ],
        answer: 1,
        explanation: "Users and the standard algorithms both *assume* equivalence semantics; anything else corrupts every abstraction built above the type.",
      },
    ],
  },
]

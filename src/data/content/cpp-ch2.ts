import type { SectionContent } from "../library"

// ============================================================================
// Bjarne Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 2: A Tour of C++ — The Basics (Sections 2.1 – 2.6)
// ============================================================================

export const cppCh2Content: SectionContent[] = [
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: "cpp-ch2-s1",
    readingTime: 4,
    intro: "This chapter is the first of the book's tours: a fast walk through C++ as it is actually used, before any topic is treated exhaustively. The tour assumes you know what a variable and a function are, but nothing else — and it deliberately uses standard-library components before formally defining them, because that is how working C++ programmers meet them.",
    objectives: [
      "Explain what the tours cover and why they are incomplete by design",
      "Describe the four stops of this particular tour: basics, user-defined types, modularity, advice",
      "Justify the tour's reliance on the standard library from the first page",
    ],
    concepts: [
      {
        term: "A tour, not a definition",
        kind: "definition",
        statement: "Chapters 2–5 present **C++ as it is used by good programmers** in a few dozen pages each — the basics, the abstraction mechanisms, the containers and algorithms, and the utilities. A tour is explicitly *not* a complete description: every rule shown here has qualifications and details deferred to Parts II–IV of the book.",
        detail: "The tours trade completeness for context: you cannot sensibly study `for` statements in isolation if you have never seen a loop iterate over a `vector` of strings.",
      },
      {
        term: "Features are shown in combination",
        kind: "insight",
        statement: "The tour's examples use classes, templates, `auto`, exceptions and the standard library together, in realistic fragments, rather than one feature per example. C++'s strength is precisely that these mechanisms combine: the tour teaches the *combination* first, the decomposition later.",
        detail: "Expect to meet `std::string` and `std::vector` before their chapters — the tour's promise is that you will understand roughly what they do, enough to read real code.",
      },
      {
        term: "The plan of this tour",
        kind: "method",
        statement: "Section 2.2 covers the **basics**: hello world, types, variables, arithmetic, constants, tests, loops and pointers. Section 2.3 adds **user-defined types** — structures, classes and enumerations. Section 2.4 covers **modularity**: separate compilation, namespaces and error handling. Section 2.6 distills **advice**.",
        detail: "That sequence mirrors the language's own growth: built-in machinery, then abstraction over it, then the organization of programs larger than one screen.",
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** The aim of the tour and the philosophy of the language. You can claim this section when you can explain what the tours cover and why they are incomplete by design — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 2 (A Tour of C++: The Basics); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Introduction: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, describe the four stops of this particular tour: basics, user-defined types, modularity, advice. Then, justify the tour's reliance on the standard library from the first page. Finally, test the outcome against the section promise: The tours show C++ as used, not as defined; details are deferred to Parts II–IV.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Locating the tour's stops in one small program",
        problem: "Classify every construct of this program by tour section: `int main() { std::string name; std::cin >> name; std::cout << \"Hello, \" << name << '!'; }`",
        steps: [
          { label: "Basics", text: "`int main()` returning `int`, the statement and block structure, and the string literal belong to the basics of 2.2 — as does the output operator `<<` chaining left to right." },
          { label: "Library types as given", text: "`std::string` is a library type: the tour uses it in 2.2 while its own chapter (36) is far away — exactly the tour's “use first, define later” strategy." },
          { label: "Modularity", text: "The `std::` prefix says the name comes from the standard-library namespace — the namespace machinery of 2.4 is what makes `std` possible." },
          { label: "User-defined types", text: "`string` itself is a user-defined type from the library's point of view: by section 2.3 you will be able to read its class shape, even if you could not yet write it." },
        ],
        result: "Three tour sections are already present in four lines: the tour teaches reading real code, not a toy subset.",
      },
      {
        title: "Working through introduction",
        problem: "The aim of the tour and the philosophy of the language. Your task: explain what the tours cover and why they are incomplete by design.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: explain what the tours cover and why they are incomplete by design. Write down the guarantee you will rely on — for this chapter it is: The tours show C++ as used, not as defined; details are deferred to Parts II–IV." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int x = 7; auto y = x + 0.5;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — describe the four stops of this particular tour: basics, user-defined types, modularity, advice — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Examples combine features deliberately — C++'s power is in the combinations. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: The tours show C++ as used, not as defined; details are deferred to Parts II–IV. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "The tours show C++ as used, not as defined; details are deferred to Parts II–IV.",
      "Examples combine features deliberately — C++'s power is in the combinations.",
      "This tour: basics, user-defined types, modularity, then advice.",
    ],
    quiz: [
      {
        q: "What does the tour chapter explicitly promise about its own completeness?",
        options: [
          "It is complete for C++98",
          "It defines the standard library's exact rules",
          "It is a taste, not a complete description; details come in later chapters",
          "It covers only the C subset of C++",
        ],
        answer: 2,
        explanation: "Tours present the language as used by good programmers; every rule has qualifications deferred to the detailed chapters.",
      },
      {
        q: "Why do the tours use `std::string` and `std::vector` before defining them?",
        options: [
          "Because they are built-in types",
          "Because their definitions are secret",
          "To keep the chapter short",
          "Because realistic code uses them, and rough understanding enables reading real C++ before formal study",
        ],
        answer: 3,
        explanation: "The tour deliberately uses library components early — that is how real programs look, and understanding them roughly is a reading skill.",
      },
      {
        q: "Which topic is NOT part of Chapter 2's tour?",
        options: [
          "Templates and generic containers",
          "Loops and tests",
          "Separate compilation",
          "User-defined types",
        ],
        answer: 0,
        explanation: "Templates are Chapter 3's abstraction tour; this chapter stops at structures, classes, enums and modularity.",
      },
    ],
  },

  // ---------------------------------------------------------------- 2.2
  {
    sectionId: "cpp-ch2-s2",
    readingTime: 8,
    intro: "The tour proper begins with the fundamental notions: a C++ program is a set of functions, every object has a type, and every value's meaning comes from that type. Stroustrup moves fast here — hello world, the built-in types and their machine-dependent sizes, initialization, arithmetic with its conversion rules, the control statements, and pointers — because the point of the section is not syntax but the discipline of thinking in types.",
    objectives: [
      "Write and explain the canonical hello-world program, including `#include` and `std::`",
      "Predict the results of integer division, mixed arithmetic and narrowing initializations",
      "Read pointer declarations, `&`, `*` and `nullptr`, and the three loop forms",
    ],
    concepts: [
      {
        term: "Hello, World!",
        kind: "definition",
        statement: "The canonical program is `#include <iostream>` followed by `int main() { std::cout << \"Hello, World!\\n\"; }`. The `#include` directive makes the declaration of the standard-library stream I/O available; `main()` must return `int` and is where execution starts; `std::cout` is the standard output stream, `<<` is the output operator, and the `std::` prefix says the name comes from the **standard-library namespace**. Angle brackets `<iostream>` select library headers, double quotes your own.",
        detail: "The program returns 0 implicitly — success. And note the newline is part of the string, not a separate operation: `\\n` is a single character escape inside the literal.",
      },
      {
        term: "Types, variables and sizes",
        kind: "definition",
        statement: "Every object has a type that determines its possible values and operations. The built-ins: `bool` (true/false), `char` (typically 8 bits), `int` (the machine's natural integer, typically 32 bits), `double` (IEEE double-precision floating point) plus `float`, `long` and companions. Sizes are **machine-dependent** but ordered: `sizeof(char) ≤ sizeof(short) ≤ sizeof(int) ≤ sizeof(long)`. Variables are declared with a type (or `auto`), must be initialized before reading — an uninitialized variable holds garbage — and initialization can use `=`, `()`, or `{}`, the braces being the only form that **rejects narrowing** conversions such as `int i {3.5};`.",
        detail: "`constexpr` marks a compile-time constant, `const` a run-time promise not to change the value. `auto` asks the compiler to deduce the type from the initializer, so the declaration `auto b = true;` declares a `bool`.",
      },
      {
        term: "Arithmetic and conversions",
        kind: "law",
        statement: "`+ - * /` work on numeric types; **integer division truncates toward zero** (`7/2` is `3`) and `%` is the remainder operator, defined only for integers (`7%2` is `1`). Mixing types converts operands to a common type *before* the operation: `int` converts to `double` safely, but `double` converting to `int` is a **narrowing** conversion that silently truncates — `double d = 7/2;` therefore yields `3.0`, because the division happens in integers first, then the result widens. Comparisons and logical operators produce `bool`.",
        detail: "This ordering — convert after, not before — is the classic trap: to get `3.5` you must force at least one operand, e.g. `7.0/2` or `double(a)/b`.",
      },
      {
        term: "Tests, loops and pointers",
        kind: "method",
        statement: "`if`/`else` and `switch` select (a `switch` matches integer or enumeration constants, and cases fall through unless you `break`); `while` and the general `for` loop iterate; the **range-`for`** walks a whole sequence: `for (auto x : v) sum += x;`. A **pointer** holds the address of an object: `&c` is the address of `c`, `*p` dereferences `p`, and the null pointer is written `nullptr` — not `0`, which is an integer that merely converts to a pointer. A C-style string is a zero-terminated `char` array, which is why `while (*p != 0) ++p;` walks to its end.",
        detail: "The book's example counts occurrences of a character: `for (; *p != 0; ++p) if (*p == x) ++count;` — the pointer walks the array until the terminator, the loop condition being the value pointed to, compared against the integer 0.",
      },
      {
        term: "The Basics: the working contract",
        kind: "definition",
        statement: "**The Basics.** Hello world, types, variables, arithmetic, constants, tests, loops and pointers. You can claim this section when you can write and explain the canonical hello-world program, including `#include` and `std::` — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 2 (A Tour of C++: The Basics); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Predicting arithmetic results before running them",
        problem: "With `int a = 7; int b = 2; double x = 7.0;` determine the value of each expression: `a/b`, `a%b`, `x/b`, `double(a)/b`, `int y {a/2.0};`, and the loop sum `for (int i = 1; i <= 10; ++i) sum += i;` starting from `sum = 0`.",
        steps: [
          { label: "Step 1: `a/b`", text: "Both operands are `int`, so division happens in integers and truncates toward zero: `7/2` is `3`." },
          { label: "Step 2: `a%b`", text: "Remainder, integers only: `7 = 3×2 + 1`, so `7%2` is `1`." },
          { label: "Step 3: `x/b`", text: "`7.0` is `double`, so `b` converts to `2.0` and the division is floating point: `3.5`." },
          { label: "Step 4: `double(a)/b`", text: "The cast converts `a` to `7.0` before the division, so again `3.5` — this is the fix for the Step 1 trap." },
          { label: "Step 5: `int y {a/2.0};`", text: "`a/2.0` is the `double` value `3.5`, and brace-initializing an `int` from it is a narrowing conversion — the compiler **rejects** this at compile time. With `=` instead, you would get silent truncation to `3`." },
          { label: "Step 6: the loop", text: "`sum` accumulates $1+2+\\cdots+10 = 55$; the loop runs ten times with `i` taking each value and `sum` ending at 55." },
        ],
        result: "`3`, `1`, `3.5`, `3.5`, compile error (narrowing), `55` — every result follows from the rule that conversion happens at the point the operands demand it, and `{}` initialization makes narrowing visible.",
      },
      {
        title: "Working through the basics",
        problem: "Hello world, types, variables, arithmetic, constants, tests, loops and pointers. Your task: write and explain the canonical hello-world program, including `#include` and `std::`.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: write and explain the canonical hello-world program, including `#include` and `std::`. Write down the guarantee you will rely on — for this chapter it is: A program is functions; execution starts at `main`; `#include <iostream>` brings in the stream declarations and `std::` names the namespace." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int x = 7; auto y = x + 0.5;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — predict the results of integer division, mixed arithmetic and narrowing initializations — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Integer division truncates and `%` is integer-only; conversions apply before operations, so `7/2` is `3` while `7.0/2` is `3.5`. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A program is functions; execution starts at `main`; `#include <iostream>` brings in the stream declarations and `std::` names the namespace. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A program is functions; execution starts at `main`; `#include <iostream>` brings in the stream declarations and `std::` names the namespace.",
      "Integer division truncates and `%` is integer-only; conversions apply before operations, so `7/2` is `3` while `7.0/2` is `3.5`.",
      "Prefer `{}` initialization (it rejects narrowing), initialize before reading, and use `nullptr` for the null pointer.",
    ],
    quiz: [
      {
        q: "What is the value of `double d = 7/2;`?",
        options: [
          "`3.5`",
          "`3.0`",
          "Ill-formed — mixing types in a division is illegal",
          "`4.0`",
        ],
        answer: 1,
        explanation: "The operands are both `int`, so the division happens first in integers (3), and only the result is then converted to `double`.",
      },
      {
        q: "Why does `int i {3.5};` fail to compile?",
        options: [
          "Variables cannot be initialized where they are declared",
          "`3.5` is not a literal of any C++ type",
          "Brace initialization rejects narrowing conversions",
          "The braces assign a set of values",
        ],
        answer: 2,
        explanation: "`{}` initialization is the safe form: converting `3.5` to an `int` loses the fraction, so the compiler refuses; `=` initialization would silently truncate.",
      },
      {
        q: "In the book's character-counting loop `for (; *p != 0; ++p)`, the condition `*p != 0` tests:",
        options: [
          "Whether the pointer itself is null",
          "An arithmetic overflow condition",
          "Whether `p` has reached the end of the array object",
          "The character the pointer points to, against the string terminator",
        ],
        answer: 3,
        explanation: "`*p` dereferences the pointer; C-style strings end with the zero character, so the loop walks until it is reached.",
      },
      {
        q: "Which statement about `sizeof` and the built-in types is correct?",
        options: [
          "Sizes are machine-dependent but satisfy `sizeof(char) ≤ sizeof(short) ≤ sizeof(int) ≤ sizeof(long)`",
          "`sizeof(char)` depends on the character set used",
          "`sizeof(int)` is exactly 4 on all implementations",
          "`sizeof(bool)` equals `sizeof(double)` on all platforms",
        ],
        answer: 0,
        explanation: "Only the ordering is guaranteed; exact sizes vary across machines, which is why the book states the inequality chain.",
      },
      // PYQ-pattern — integer division versus floating division (rephrased)
      {
        q: "What does this program print?\n```cpp\n#include <iostream>\nint main() {\n  std::cout << 7 / 2 << ' ' << 7.0 / 2;\n}\n```",
        options: ["`3 3.5`", "`3.5 3.5`", "`3 3`", "`4 3.5`"],
        answer: 0,
        explanation: "Step 1: The code given streams two divisions, one with two `int` operands and one with a `double` operand. Step 2: The governing rule is operand typing: when both operands are integers the division truncates toward zero, while a floating operand promotes the computation to floating point. Step 3: Tracing expression by expression, `7 / 2` computes the integer quotient `3`, and `7.0 / 2` computes the floating quotient `3.5`, which the stream prints separated by a blank. Step 4: The distractors fail because truncation never rounds to `4`, the integer division never produces a fraction, and the second division genuinely involves a `double`. Step 5: Therefore the program prints `3 3.5`."
      }
    ],
  },

  // ---------------------------------------------------------------- 2.3
  {
    sectionId: "cpp-ch2-s3",
    readingTime: 6,
    intro: "When the built-in types don't suit the problem, C++'s answer is to build new ones that work just as well — and to let the compiler enforce the rules that keep them meaningful. The tour shows the machinery at its smallest: a `struct` that groups data, a `class` that wraps data with the functions that manage it, and an `enum class` that gives names to small sets of alternatives without leaking them into the integer world.",
    objectives: [
      "Define the structure/class/enum-class trio and what each adds over the previous",
      "Read a constructor initializer list and state the invariant it establishes",
      "Explain why scoped enumerations refuse implicit conversion to integers",
    ],
    concepts: [
      {
        term: "The structure",
        kind: "definition",
        statement: "A **`struct`** is a sequence of members of (almost) arbitrary types: `struct Vector { int sz; double* elem; };` declares a type whose objects hold an integer and a pointer, accessed as `v.sz` and `v.elem`. The struct itself enforces nothing — with the struct-only style, keeping `sz` consistent with the allocation behind `elem` is the caller's job, managed by free functions like an init function. A struct is a pure aggregation; its virtue is that there is no hidden mechanism.",
        detail: "The book's point in showing the struct first: you can get far on plain aggregates, but the invariant — here, *`elem` points to `sz` doubles* — lives only in the programmer's head.",
      },
      {
        term: "The class",
        kind: "definition",
        statement: "A **`class`** attaches behavior and access control to the representation: `class Vector { public: Vector(int s) : elem{new double[s]}, sz{s} { } double& operator[](int i) { return elem[i]; } int size() { return sz; } private: double* elem; int sz; };`. Members default to `private` in a class (and `public` in a struct — the only difference between the two keywords). The **constructor** establishes the invariant — allocate `s` doubles, remember `s` — and `Vector v(6);` means “construct a 6-element `Vector`”, with its elements on the **free store (heap)**.",
        detail: "`operator[]` returns a reference, `double&`, which is why `v[2] = 2.5;` works through it: the subscript expression *is* the element. The class is now responsible for the invariant, and every member function can rely on it.",
      },
      {
        term: "Scoped enumerations",
        kind: "definition",
        statement: "`enum class Color { red, blue, green };` declares a **`enum class`**: its enumerators are scoped (`Color::red`, not bare `red`), and no implicit conversion to or from `int` exists. You cannot accidentally pass `3` where a `Color` is expected, nor test `col == 1` — comparisons and assignments stay within the type. Plain `enum` (C-style) remains available for compatibility and bit-mask-style use.",
        detail: "The tour's rule of thumb: use `enum class` for named sets of alternatives; the compiler then guards them exactly as it guards the built-in types.",
      },
      {
        term: "Types are the design unit",
        kind: "insight",
        statement: "The tour's central claim: **the key to good C++ design is to design types well** — give each type a purpose, a representation, an invariant, and the operations that preserve that invariant. A well-designed concrete type can be used exactly like a built-in: declared, passed, returned, subscripted, destroyed.",
        detail: "This reframes “learning C++”: the language's features are the tools for building such types, and the library is a demonstration that the toolchain works.",
      },
      {
        term: "User-Defined Types: the working contract",
        kind: "definition",
        statement: "**User-Defined Types.** Structures, classes and enumerations. You can claim this section when you can define the structure/class/enum-class trio and what each adds over the previous — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 2 (A Tour of C++: The Basics); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "From struct to class: the same type, the invariant moved into the type",
        problem: "A `Vector` of 3 doubles is needed. Write it with the struct-plus-init-function style, then with the class, and trace what each guarantees.",
        steps: [
          { label: "Step 1: struct style", text: "`Vector v; v.sz = 3; v.elem = new double[3];` — two statements, two chances to get it wrong: `sz` could disagree with the allocation, or `elem` could be left uninitialized. Every user repeats this dance." },
          { label: "Step 2: class style", text: "`Vector v(3);` — the constructor runs `elem{new double[3]}, sz{3}`, allocating storage for 3 doubles (24 bytes) on the free store and recording the size, in one un-forgettable step." },
          { label: "Step 3: use", text: "`v[2] = 2.5;` calls `operator[]`, which returns `double&` referring to `v.elem[2]`; the assignment writes through the reference into the third element of the heap array." },
          { label: "Step 4: audit the invariant", text: "With the class, the statement *“elem points to sz doubles”* is established by the constructor and cannot be broken without calling members — compared to the struct, where nothing enforces it at all." },
          { label: "Step 5: what's still missing", text: "Neither version yet frees `elem` (that destructor is Chapter 3's business) or copies correctly — the tour notes the gap deliberately, and closes it in 3.2 and 3.3." },
        ],
        result: "The class moves responsibility for the invariant from every user into the type itself — the smallest possible program of C++ design philosophy.",
      },
      {
        title: "Working through user-defined types",
        problem: "Structures, classes and enumerations. Your task: define the structure/class/enum-class trio and what each adds over the previous.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define the structure/class/enum-class trio and what each adds over the previous. Write down the guarantee you will rely on — for this chapter it is: A `struct` aggregates; only discipline keeps its members consistent." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int x = 7; auto y = x + 0.5;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — read a constructor initializer list and state the invariant it establishes — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: A `class` gives the type a constructor that establishes its invariant, access control that protects it, and members that rely on it. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A `struct` aggregates; only discipline keeps its members consistent. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A `struct` aggregates; only discipline keeps its members consistent.",
      "A `class` gives the type a constructor that establishes its invariant, access control that protects it, and members that rely on it.",
      "`enum class` scopes its enumerators and forbids implicit integer conversion — always prefer it for named alternatives.",
    ],
    quiz: [
      {
        q: "What is the *only* difference between writing `struct X { ... };` and `class X { ... };` with identical contents?",
        options: [
          "A struct is always copied by the compiler",
          "Default access is `public` for struct, `private` for class",
          "A class cannot be used with braces",
          "A struct cannot have member functions",
        ],
        answer: 1,
        explanation: "The keywords differ only in the default member access; the book exploits this by using `struct` for plain aggregates and `class` for types with invariants.",
      },
      {
        q: "In `Vector(int s) : elem{new double[s]}, sz{s} { }`, the part before the body is:",
        options: [
          "A default argument",
          "A declaration of the members",
          "The initializer list, which initializes the members directly before the constructor body runs",
          "The destructor",
        ],
        answer: 2,
        explanation: "Members are initialized by the initializer list before the body executes; `elem{new double[s]}` allocates and stores the pointer in one step.",
      },
      {
        q: "Why does `Color c = 2;` fail for `enum class Color { red, blue, green };`?",
        options: [
          "Because `2` is too large for the enum",
          "Because `c` must be `const`",
          "Because enums cannot be initialized at declaration",
          "Because scoped enumerations allow no implicit conversion from integers",
        ],
        answer: 3,
        explanation: "`enum class` deliberately keeps enumerators and integers in separate type worlds; you must write `Color::blue` or an explicit cast.",
      },
      {
        q: "`double& operator[](int i)` returns a reference. What does this enable?",
        options: [
          "Assignment through the subscript: `v[2] = 2.5;` writes the element because the expression *is* the element",
          "Making the vector grow automatically",
          "Only reading an element, never writing",
          "Copying the element into a temporary",
        ],
        answer: 0,
        explanation: "A reference return makes the subscript expression an alias for the stored element, so both reading and writing work exactly as with a built-in array.",
      },
    ],
  },

  // ---------------------------------------------------------------- 2.4
  {
    sectionId: "cpp-ch2-s4",
    readingTime: 6,
    intro: "Real programs are larger than one file and larger than one head. C++ inherited C's answer — separate compilation against declared interfaces — and added the two mechanisms that make interfaces safe at scale: namespaces for name grouping and exceptions for reporting failures across them. This section shows the .h/.cpp split, and error handling strong enough to cross module boundaries.",
    objectives: [
      "Explain the interface/implementation split and what must be recompiled when each changes",
      "Use namespaces and `using` declarations without polluting headers",
      "Choose among `static_assert`, invariants and `throw` for each class of error",
    ],
    concepts: [
      {
        term: "Separate compilation",
        kind: "definition",
        statement: "A program is a set of separately compiled `.cpp` files. Anything shared goes in a **header** (`.h`) that declares the interface: `class Vector { public: Vector(int s); double& operator[](int i); int size(); private: double* elem; int sz; };` — full declarations for users, no function bodies. Users write `#include \"Vector.h\"` (which textually inserts the header) and see only the interface; the implementation lives in `Vector.cpp`, where the bodies are defined as `Vector::Vector(int s) : elem{new double[s]}, sz{s} { }`.",
        detail: "Each `.cpp` compiles to an object file; the **linker** then binds calls to the definitions. The economics: change the implementation → recompile that one file and relink; change the interface → recompile *every* file that includes the header.",
      },
      {
        term: "Namespaces",
        kind: "definition",
        statement: "A **namespace** groups names and prevents collisions between libraries: everything in the standard library lives in `namespace std`, which is why we write `std::cout`. A `using`-declaration (`using std::string;`) brings one name into scope; a `using`-directive (`using namespace std;`) brings them all — acceptable in a small `.cpp` file, **never in a header**, because a header is included by everyone and would re-declare the pollution in every one of them.",
        detail: "The rule of thumb: scope your names, and expose the minimum — the larger the program, the more namespaces earn their keep.",
      },
      {
        term: "Errors, invariants and `static_assert`",
        kind: "insight",
        statement: "Errors divide by when they are caught: **compile-time** errors are caught by the type system and by `static_assert(condition, \"message\")` for checks expressible as constant expressions; **link-time** errors are missing definitions; **run-time** errors are violations the machine cannot detect statically. The key defense at run time is the **invariant** — the statement of what a valid object is — and each member function checks what it needs: the tour's `Vector::operator[]` throws when the index is out of range.",
        detail: "The book's phrasing of the stance: *throw an exception when a function cannot perform its assigned task* — the error travels to whatever level can actually handle it, instead of being papered over with a default value or an error code everyone forgets to check.",
      },
      {
        term: "Exceptions: throw, try, catch",
        kind: "definition",
        statement: "`throw std::out_of_range{\"Vector::operator[]\"};` raises an exception object; a caller wraps the risky call in a **`try`-block** whose **`catch`-clauses** match by type: `try { v[v.size()] = 7; } catch (std::out_of_range& e) { std::cerr << e.what(); }`. If no enclosing handler matches, the program terminates through `std::terminate`. The `&` in the catch says “catch by reference” — the idiomatic form, avoiding slicing of derived exception types.",
        detail: "Alternatives exist — returning an error value, setting an error state, aborting — but only exceptions propagate automatically up the call stack with the type information intact, which is why the library uses them.",
      },
      {
        term: "Modularity: the working contract",
        kind: "definition",
        statement: "**Modularity.** Separate compilation, namespaces and error handling. You can claim this section when you can explain the interface/implementation split and what must be recompiled when each changes — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 2 (A Tour of C++: The Basics); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "Separate compilation: `Vector.h` (the interface) is included by every user file; each `.cpp` compiles independently to an object file, and the linker joins them into one program. Fixing `Vector.cpp` recompiles one file; editing `Vector.h` recompiles every includer.",
        afterConcept: 1,
        svg: '<svg viewBox="0 0 720 250" width="100%" role="img" aria-label="Separate compilation pipeline from headers and source files through compilers and object files to the linker and the final program"><rect x="150" y="8" width="200" height="30" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/><text x="250" y="27" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">Vector.h — interface</text><rect x="20" y="80" width="110" height="30" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="75" y="99" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">user.cpp</text><rect x="20" y="180" width="110" height="30" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="75" y="199" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">Vector.cpp</text><line x1="85" y1="80" x2="195" y2="42" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3 3"/><polygon points="191,47 199,40 199,51" fill="currentColor"/><text x="130" y="66" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.7">include</text><line x1="85" y1="180" x2="205" y2="42" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3 3"/><polygon points="201,47 209,40 209,51" fill="currentColor"/><rect x="190" y="75" width="110" height="40" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.6"/><text x="245" y="99" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">C++ compiler</text><rect x="190" y="175" width="110" height="40" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.6"/><text x="245" y="199" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">C++ compiler</text><line x1="130" y1="95" x2="186" y2="95" stroke="currentColor" stroke-width="1.3"/><polygon points="186,91.5 194,95 186,98.5" fill="currentColor"/><line x1="130" y1="195" x2="186" y2="195" stroke="currentColor" stroke-width="1.3"/><polygon points="186,191.5 194,195 186,198.5" fill="currentColor"/><rect x="350" y="80" width="80" height="30" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="390" y="99" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">user.o</text><rect x="350" y="180" width="90" height="30" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="395" y="199" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">Vector.o</text><line x1="300" y1="95" x2="346" y2="95" stroke="currentColor" stroke-width="1.3"/><polygon points="346,91.5 354,95 346,98.5" fill="currentColor"/><line x1="300" y1="195" x2="346" y2="195" stroke="currentColor" stroke-width="1.3"/><polygon points="346,191.5 354,195 346,198.5" fill="currentColor"/><rect x="470" y="120" width="90" height="46" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.6"/><text x="515" y="146" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">linker</text><line x1="430" y1="95" x2="472" y2="128" stroke="currentColor" stroke-width="1.3"/><polygon points="468,125 477,131 468,134" fill="currentColor"/><line x1="440" y1="195" x2="472" y2="162" stroke="currentColor" stroke-width="1.3"/><polygon points="468,157 477,160 468,165" fill="currentColor"/><rect x="600" y="128" width="100" height="30" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8"/><text x="650" y="147" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">a.out</text><line x1="560" y1="143" x2="596" y2="143" stroke="currentColor" stroke-width="1.3"/><polygon points="596,139.5 604,143 596,146.5" fill="currentColor"/><text x="360" y="238" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-style="italic" fill="currentColor" opacity="0.8">fix Vector.cpp → recompile 1 file, relink; edit Vector.h → recompile all includers</text></svg>',
      },
    ],
    examples: [
      {
        title: "Recompilation accounting",
        problem: "A program consists of `Vector.h`, `Vector.cpp`, `user1.cpp`, `user2.cpp` and `main.cpp`; the last four all `#include \"Vector.h\"`. Count the recompilations for two kinds of change.",
        steps: [
          { label: "Baseline", text: "A full build compiles the four `.cpp` files (4 compilations) and runs the linker once (1 link) — the cost we measure against." },
          { label: "Change A: bug fix in `Vector.cpp`", text: "Only `Vector.cpp` depends on the changed file *as its own source*; the users depend only on `Vector.h`, which did not change. Recompile 1, relink: **1 compilation + 1 link**." },
          { label: "Change B: add a member to the class in `Vector.h`", text: "Every file that includes the header sees new text and must be recompiled: `Vector.cpp`, `user1.cpp`, `user2.cpp`, `main.cpp` — **4 compilations + 1 link**." },
          { label: "Change B variant: the new member is `private`", text: "Logically the interface is unchanged, but physically the header text changed, so the answer is still 4 — private members live in the interface file because they determine the object's size." },
          { label: "Conclusion", text: "This is why classes keep representations out of headers only when genuinely needed (Chapter 3's abstract classes), and why interface churn is the expensive kind." },
        ],
        result: "1 vs 4 recompilations: the interface/implementation split localizes implementation changes — the entire economic point of separate compilation.",
      },
      {
        title: "Working through modularity",
        problem: "Separate compilation, namespaces and error handling. Your task: explain the interface/implementation split and what must be recompiled when each changes.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: explain the interface/implementation split and what must be recompiled when each changes. Write down the guarantee you will rely on — for this chapter it is: Headers declare the interface; `.cpp` files define the implementation; the linker joins the object files." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int x = 7; auto y = x + 0.5;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — use namespaces and `using` declarations without polluting headers — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Change implementation → recompile one file; change interface → recompile all includers. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Headers declare the interface; `.cpp` files define the implementation; the linker joins the object files. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Headers declare the interface; `.cpp` files define the implementation; the linker joins the object files.",
      "Change implementation → recompile one file; change interface → recompile all includers.",
      "Use namespaces (never `using namespace std;` in a header), `static_assert` for compile-time checks, and exceptions for run-time failures that cannot be handled locally.",
    ],
    quiz: [
      {
        q: "What does `#include \"Vector.h\"` actually do?",
        options: [
          "Links the compiled `Vector.cpp` into the program",
          "Textually inserts the contents of the header file at that point, making its declarations visible",
          "Imports the binary code of the `Vector` class",
          "Declares that this file is part of the `Vector` namespace",
        ],
        answer: 1,
        explanation: "Inclusion is textual replacement by the preprocessor; linking of the actual definitions happens later, in the link step.",
      },
      {
        q: "Why is `using namespace std;` acceptable in a small `.cpp` file but forbidden in a header?",
        options: [
          "It is forbidden everywhere by the standard",
          "Headers are compiled before the namespace exists",
          "A header's contents are pasted into every includer, exporting the pollution into all of them",
          "It only works for the `main` function",
        ],
        answer: 2,
        explanation: "The directive's effect spreads to every file that includes the header — name clashes then appear far from the cause.",
      },
      {
        q: "`static_assert(4 <= sizeof(int), \"integers are too small\");` fails. When is that discovered?",
        options: [
          "At run time, when the first int is used",
          "At link time",
          "Only when the assertion is executed in a loop",
          "At compile time, because the condition is a constant expression",
        ],
        answer: 3,
        explanation: "`static_assert` checks a constant expression during compilation — the cheapest possible moment to catch an error.",
      },
      {
        q: "An exception is thrown and no enclosing `catch`-clause matches its type. What happens?",
        options: [
          "The program calls `std::terminate` and ends",
          "The exception is converted to `int` and returned from `main`",
          "The exception is silently discarded and execution continues",
          "The compiler rejects the program",
        ],
        answer: 0,
        explanation: "An uncaught exception terminates the program via `std::terminate` — errors are never quietly swallowed.",
      },
    ],
  },

  // ---------------------------------------------------------------- 2.5
  {
    sectionId: "cpp-ch2-s5",
    readingTime: 4,
    intro: "The tour of the basics ends with an honest audit. What you have seen — functions, built-in types, a user-defined `Vector` with a constructor, and separate compilation — is enough to write real small programs, and roughly the level of C or early C++. What is missing is everything that makes C++ worth the extra machinery: the operations that keep objects safe under copying, destruction and parameterization.",
    objectives: [
      "List what the tour of basics established",
      "Identify the deliberate gaps in the chapter's `Vector` class",
      "Map each gap to the chapter that closes it",
    ],
    concepts: [
      {
        term: "What the tour established",
        kind: "insight",
        statement: "The chapter delivered the working core: programs are functions; every object has a type; the built-ins plus `{}` initialization give safe starts; user-defined types wrap representation and invariant together; and separate compilation with namespaces and exceptions organizes programs larger than one file. That is a complete, usable language subset — and C++'s floor.",
        detail: "Stroustrup's framing: what you have seen so far is roughly the level of C, plus classes used to establish invariants — the deliberate starting altitude of the book.",
      },
      {
        term: "The audit: what `Vector` cannot yet do",
        kind: "insight",
        statement: "The chapter's `Vector` **leaks memory** (it has no destructor), **copies dangerously** (copying it duplicates the pointer, and two destructors will free the same storage), cannot be moved, works only for `double`, and holds no library-grade algorithms. Each omission is named in the tour and repaired in the next: Chapter 3 adds destructor, copy and move, then templates; Chapter 4 hands you the finished versions as `std::vector` and the algorithms.",
        detail: "This is the book's pedagogic engine: build the incomplete thing to feel the missing operation, then meet the real one.",
      },
      {
        term: "Basics are load-bearing",
        kind: "method",
        statement: "Everything later — move semantics, generic containers, exception guarantees — is built from exactly these notions: an invariant, a constructor that establishes it, member functions that rely on it, and a caller who cannot corrupt what they cannot reach. Weakness in the basics compounds; strength in them composes.",
        detail: "Hence the advice that ends the chapter: keep going to the abstraction tour, but keep the basics exact — types, initialization, and control flow are where subtle bugs are born.",
      },
      {
        term: "Postscript: the working contract",
        kind: "definition",
        statement: "**Postscript.** What the tour covered and what comes next. You can claim this section when you can list what the tour of basics established — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 2 (A Tour of C++: The Basics); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Postscript: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, identify the deliberate gaps in the chapter's `Vector` class. Then, map each gap to the chapter that closes it. Finally, test the outcome against the section promise: The basics tour delivered a usable language floor: functions, types, invariants-in-constructors, separate compilation.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "The `Vector` gap checklist",
        problem: "Take the chapter's final `Vector` (constructor, `operator[]`, `size()`, `elem`, `sz`) and list every standard-container behavior it lacks, mapping each to where the book supplies it.",
        steps: [
          { label: "Destruction", text: "No `~Vector()` — storage for the elements is never freed; a loop constructing `Vector`s leaks memory without bound. Supplied: §3.2.1 (concrete classes)." },
          { label: "Copy semantics", text: "`Vector v2 = v1;` copies `elem` and `sz`, so both objects point at the *same* heap array; when both are eventually destroyed, the storage is freed twice. Supplied: §3.3 (copy and move)." },
          { label: "Move semantics", text: "Returning a `Vector` from a function would force a deep copy or a leak — there is no way to transfer the elements out cheaply. Supplied: §3.3." },
          { label: "Element-type generality", text: "Only `double` elements — the representation is hard-wired. Supplied: §3.4 (templates), which also introduces `vector`, `list` and `map`." },
          { label: "Operations", text: "No `push_back`, no iteration, no `sort`. Supplied: Chapter 4's library (containers and algorithms)." },
        ],
        result: "Four gaps, four destinations: the postscript is a contract with the next two chapters.",
      },
      {
        title: "Working through postscript",
        problem: "What the tour covered and what comes next. Your task: list what the tour of basics established.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: list what the tour of basics established. Write down the guarantee you will rely on — for this chapter it is: The basics tour delivered a usable language floor: functions, types, invariants-in-constructors, separate compilation." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int x = 7; auto y = x + 0.5;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — identify the deliberate gaps in the chapter's `Vector` class — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Its `Vector` deliberately lacks destruction, safe copying, moving and generality — each is the topic of the next chapters. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: The basics tour delivered a usable language floor: functions, types, invariants-in-constructors, separate compilation. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "The basics tour delivered a usable language floor: functions, types, invariants-in-constructors, separate compilation.",
      "Its `Vector` deliberately lacks destruction, safe copying, moving and generality — each is the topic of the next chapters.",
      "Later machinery composes from exactly these basics; precision here pays off everywhere.",
    ],
    quiz: [
      {
        q: "What happens when the chapter's `Vector` is copied with `Vector v2 = v1;` and both are destroyed (in Chapter 3's full version of the class)?",
        options: [
          "A deep copy of the elements is made automatically",
          "Both objects' pointers refer to the same heap array, which is freed twice — undefined behavior",
          "The compiler refuses to compile the copy",
          "The elements are moved from `v1` to `v2`",
        ],
        answer: 1,
        explanation: "The tour's `Vector` has no copy constructor, so member-wise copy duplicates the pointer — the double-free that §3.3's copy operations fix.",
      },
      {
        q: "Which chapter supplies the destructor that frees the `Vector`'s elements?",
        options: [
          "Chapter 2, in the modularity section",
          "Chapter 4, in the containers section",
          "Chapter 3, in the classes section",
          "Chapter 1, in the advice",
        ],
        answer: 2,
        explanation: "Concrete classes in §3.2.1 introduce the destructor running `delete[] elem;` at scope exit.",
      },
      {
        q: "The postscript frames the level reached so far as approximately:",
        options: [
          "The level of Simula",
          "Generic programming",
          "The full standard library",
          "The level of C, plus classes establishing invariants",
        ],
        answer: 3,
        explanation: "Stroustrup notes the tour of basics reaches roughly what C plus early C++ offered — the abstraction mechanisms are what comes next.",
      },
    ],
  },

  // ---------------------------------------------------------------- 2.6
  {
    sectionId: "cpp-ch2-s6",
    readingTime: 4,
    intro: "The tour's closing advice is a compact set of habits, each aimed at the failure modes this chapter actually exhibited: uninitialized values, narrowing conversions, out-of-range access, unscoped names and leak-prone resources. The common theme is to make the compiler your first reviewer — every rule moves a check from the debugging session to the source line.",
    objectives: [
      "Apply the initialization rules: initialize on declaration, prefer braces",
      "Choose `const`/`constexpr` deliberately and minimize scope",
      "Select the right error-handling mechanism per error class",
    ],
    concepts: [
      {
        term: "Initialization discipline",
        kind: "method",
        statement: "**Declare a variable only when you have a value for it**, initialize at declaration, and prefer the `{}` form so narrowing conversions become compile-time errors rather than silent truncations. Uninitialized memory is the classic source of heisenbugs: reading it is undefined behavior, and the value is often plausible enough to pass tests.",
        detail: "`constexpr` signals a compile-time constant — prefer it for anything whose value is fixed at compile time, both for performance and because the compiler then verifies the claim.",
      },
      {
        term: "Scope, naming and constancy",
        kind: "law",
        statement: "**Minimize the scope of names** — keep data local, pass what is needed through parameters, and avoid global mutable state, which makes every function secretly dependent on every other. Mark what does not change `const` in interfaces so the compiler enforces the promise for you, and keep `using`-directives out of shared files.",
        detail: "The chapter's version of the general rule: code is read far more often than it is written; scoping and naming decisions *are* the documentation.",
      },
      {
        term: "The error-handling stance",
        kind: "method",
        statement: "Match the mechanism to the error class: **type errors and constant conditions → the type system and `static_assert`**; **run-time failures that the immediate caller cannot fix → exceptions** (throw when a function cannot perform its assigned task); and test the *invariant* at the boundary where untrusted data enters, as in `Vector::operator[]`'s bounds check.",
        detail: "Corollaries from this chapter: don't use `switch` fall-through accidentally (`break` each case), and don't return magic sentinel values in place of throwing — callers ignore return codes, but they cannot ignore an exception they didn't catch.",
      },
      {
        term: "Shipping rule for a tour of C++: the basics",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Initialize at declaration with `{}`; let narrowing be a compile error.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
      {
        term: "Review checklist for a tour of C++: the basics",
        kind: "method",
        statement: "Take the objectives as review questions: apply the initialization rules: initialize on declaration, prefer braces? Then choose `const`/`constexpr` deliberately and minimize scope? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.",
        detail: "A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.",
      },
    ],
    examples: [
      {
        title: "Reviewing a fragment against the advice",
        problem: "Rewrite `int n; double vals[8]; std::cin >> n; for (int i = 0; i <= 8; ++i) vals[i] = i * n;` in the style the advice prescribes.",
        steps: [
          { label: "Step 1: initialization", text: "`n` is read before use — good — but the declaration should move as close to the use as possible, and the fixed array `vals` should become a container that owns its size." },
          { label: "Step 2: off-by-one", text: "`i <= 8` writes `vals[8]`, past the 8-element array. With a `vector` sized by the loop's intent, the bound is the container's, not a magic number's." },
          { label: "Step 3: validity of input", text: "`std::cin >> n` can fail silently on non-numeric input, leaving `n` untouched. The stream converts to `bool`, so test it: `if (!(std::cin >> n)) throw std::runtime_error{\"bad input\"};` — the boundary check the advice asks for." },
          { label: "Step 4: rewrite", text: "`int n; if (!(std::cin >> n)) throw std::runtime_error{\"bad input\"}; std::vector<double> vals(9); for (int i = 0; i < vals.size(); ++i) vals[i] = i * n;` — declared with value, owned bounds, checked input." },
        ],
        result: "Each defect class in the original (unbounded write, unchecked input, fixed capacity) is removed by a rule from this section, not by cleverness.",
      },
      {
        title: "Reviewing a tour of C++: the basics code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the initialization rules: initialize on declaration, prefer braces.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Initialize at declaration with `{}`; let narrowing be a compile error." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `int x = 7; auto y = x + 0.5;`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: choose `const`/`constexpr` deliberately and minimize scope. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Minimize scope, mark interfaces `const`, keep `using`-directives out of headers." },
        ],
        result: "The review ends with findings tied to reasons: Initialize at declaration with `{}`; let narrowing be a compile error. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Initialize at declaration with `{}`; let narrowing be a compile error.",
      "Minimize scope, mark interfaces `const`, keep `using`-directives out of headers.",
      "Type system and `static_assert` for compile-time errors; exceptions for run-time failures the caller cannot fix locally.",
    ],
    quiz: [
      {
        q: "Which initialization form turns the narrowing `double d = 3.9;` into a *compile-time* error?",
        options: [
          "`int i {d};`",
          "`int i (d);`",
          "`int i = d;`",
          "`auto i = d;`",
        ],
        answer: 0,
        explanation: "Brace initialization is the safe form: conversions that lose information are rejected before the program runs.",
      },
      {
        q: "The advice recommends throwing an exception when:",
        options: [
          "Any loop runs too many iterations",
          "A function cannot perform its assigned task and the immediate caller cannot sensibly fix it",
          "The program prints to `std::cerr`",
          "A variable is used out of scope",
        ],
        answer: 1,
        explanation: "Exceptions exist to cross module boundaries to whoever can handle the failure; local conditions are handled locally.",
      },
      {
        q: "Which of these belongs in a shared header file?",
        options: [
          "`using namespace std;`",
          "A `malloc` of a static buffer",
          "`using std::string;` if a single name is genuinely used throughout the interface",
          "A test of the input stream's state",
        ],
        answer: 2,
        explanation: "A single-name `using`-declaration is a deliberate, bounded exposure; a directive exports the whole namespace into every includer.",
      },
    ],
  },
]

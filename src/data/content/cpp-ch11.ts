import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup — The C++ Programming Language, 4th Edition
// Chapter 11: Select Operations (Sections 11.1 – 11.6)
// The remaining operators, the free store, initializer lists, lambdas,
// and the four named casts.
// ============================================================================

export const cppCh11Content: SectionContent[] = [
  // ---------------------------------------------------------------- 11.1
  {
    sectionId: "cpp-ch11-s1",
    readingTime: 6,
    intro: "Chapter 10 catalogued the arithmetic core; this chapter opens with the operators that fit nowhere else: the logical operators with their short-circuit guarantee, the bitwise operators that treat integers as bit patterns, the increment/decrement pair whose prefix and postfix forms differ in what they yield, and the conditional expression — the only ternary operator, and the one way to select a value where a statement cannot go. Each looks trivial; each hides one precise rule worth knowing exactly.",
    objectives: [
      "Distinguish logical from bitwise operators, including their sequencing rules",
      "Predict what prefix and postfix ++/-- yield and when each is appropriate",
      "Use the conditional expression correctly where an if-statement cannot appear"
    ],
    concepts: [
      {
        term: "Logical operators",
        kind: "definition",
        statement: "The logical operators `&&` (and), `||` (or) and `!` (not) operate on conditions and yield `bool`. Operands need not be `bool` themselves — each is converted by the *is it nonzero / non-null* rule. Crucially, `&&` and `||` **short-circuit**: the left operand is evaluated first, and the right operand is evaluated only if it can change the outcome.",
        detail: "Short-circuit is sequencing, not optimization: `p && p->size()` is well-defined for a null `p` precisely because the second operand does not run. `!` is a true operator with no sequencing to do."
      },
      {
        term: "Bitwise logical operators",
        kind: "definition",
        statement: "The operators `&` (and), `|` (or), `^` (exclusive or) and `~` (complement) apply the corresponding Boolean function **bit-by-bit** to integer operands — and evaluate both operands with no short-circuit. Shifts `<<` and `>>` move bit patterns: `3 << 2` is $12$ (each shift multiplies by 2), `12 >> 2` is $3$.",
        detail: "The one-character difference from `&&`/`||` is a classic bug: `1 & 2` is $0$ (bit patterns 01 and 10 share no bits) while `1 && 2` is `true`. In conditions, you almost always want the logical versions; in masks and hardware code, the bitwise ones."
      },
      {
        term: "Increment and decrement",
        kind: "definition",
        statement: "`++x` **increments x and yields the new value** (an lvalue — the object itself); `x++` increments x but yields a **copy of the old value**. So with `int i = 3;`, `++i` is 4, while `i++` is 3 and leaves `i` at 4 afterwards. The decrement forms are exact mirrors.",
        detail: "For built-ins the cost is identical; for class types (iterators especially), postfix must construct and return a copy of the old value, so **prefer `++i`** as the idiom unless you specifically need the old value — the postfix `it++` in a `for` loop is a habit, not a requirement."
      },
      {
        term: "The conditional expression",
        kind: "definition",
        statement: "**`cond ? e1 : e2`** evaluates `cond`, then exactly one of `e1`, `e2`, and yields it. It is the only ternary operator, and the only way to express selection *inside an expression* — in initializers, arguments, and places a statement cannot go: `int m = a > b ? a : b;`.",
        detail: "Because the second and third operands are combined into one result, they must have compatible types: `cond ? 1 : 2.0` yields a `double`. And because `?:` is an expression, it nests — but the book's advice stands: if you need more than a pair of simple alternatives, an `if`-statement is clearer."
      },
      {
        term: "Logical vs bitwise, summarized",
        kind: "insight",
        statement: "Use `&&`/`||` when you mean *condition met* — they yield `bool` and short-circuit. Use `&`/`|`/`^`/`~` when you mean *bit pattern* — they yield the integer type of their operands and always evaluate both sides. A test like `if (a & b)` is legal whenever `a` and `b` are ints, but means *the intersection of their bit patterns is nonzero* — which is a mask test, not the same as `a && b`.",
        detail: "The exception is deliberate bitflag code, where `(flags & READ_ONLY)` as a condition is idiomatic: the mask intersection *is* the question being asked."
      }
    ],
    examples: [
      {
        title: "A bit-mask round trip",
        problem: "With `unsigned char x = 0xA3;` (binary 10100011), predict the result of: (a) `x & 0xF0`, (b) `x | 0x08`, (c) `x ^ 0xFF`, (d) `x << 1`.",
        steps: [
          { label: "Mask off the low nibble", text: "`x & 0xF0`: 10100011 AND 11110000 keeps only the four high bits → 10100000 = 0xA0 = 160. The mask selects; the AND keeps the intersection." },
          { label: "Set one bit", text: "`x | 0x08`: 10100011 OR 00001000 — the 8-bit is already set in 0xA3 (the low nibble is 0011, which includes 8), so the value is unchanged: 0xA3 = 163. OR sets bits; it never clears them." },
          { label: "Flip everything", text: "`x ^ 0xFF`: XOR with all ones complements every bit → 01011100 = 0x5C = 92. Check: $163 + 92 = 255$ — complementing an 8-bit pattern x gives $255 - x$." },
          { label: "Shift left", text: "`x << 1`: 10100011 shifted left is 101000110, but an 8-bit `unsigned char` keeps the low 8 bits: 01000110 = 0x46 = 70. Equivalently $(2 \\times 163) \\bmod 256 = 326 - 256 = 70$ — each left shift doubles, modulo the width." }
        ],
        result: "0xA0, 0xA3, 0x5C, 0x46 — four operators, four different truths about one bit pattern."
      },
      {
        title: "Prefix vs postfix, one trace",
        problem: "With `int i = 3;` evaluate `a = i++ + ++i;`'s two pieces separately — and then explain why the combined line is banned by the chapter's rules.",
        steps: [
          { label: "The postfix piece", text: "`j = i++;` → `j` receives the old value 3; afterwards `i` is 4. Postfix yields a copy of the past." },
          { label: "The prefix piece", text: "`k = ++i;` → `i` becomes 5 first, `k` receives 5. Prefix yields the object's new state." },
          { label: "Why the combined line is out", text: "`i++ + ++i` writes `i` twice in one expression with no sequencing between the writes — undefined behavior, not just a surprising value. The chapter's rule from 10.6 (one side effect per statement) exists precisely for lines like this." },
          { label: "The idiom verdict", text: "When the value is discarded — `for (auto it = v.begin(); it != v.end(); ++it)` — prefer `++it`: identical cost for ints, cheaper for iterators, and it never makes a reader hunt for an old value that is not used." }
        ],
        result: "j = 3, k = 5, and the combined expression is undefined — the pieces are each fine alone; only their unsequenced combination is not."
      }
    ],
    keyTakeaways: [
      "`&&` and `||` yield `bool` and short-circuit their right operands; `&`, `|`, `^`, `~` operate on bit patterns and always evaluate both operands — one character of syntax, completely different semantics.",
      "Prefix `++x` yields the new value (the object itself); postfix `x++` yields a copy of the old value — prefer prefix when the value is unused, especially for iterators.",
      "`?:` is the only ternary operator and the only selection usable inside an expression; it evaluates exactly one branch and both branches must combine to one type."
    ],
    quiz: [
      {
        q: "What is the value of `1 & 2`?",
        options: [
          "`true`",
          "0",
          "3",
          "a compile error"
        ],
        answer: 1,
        explanation: "Bitwise AND of patterns 01 and 10 has no common bit → 0. The logical `1 && 2` would be true — the one-character difference matters."
      },
      {
        q: "Which property do `&&` and `||` have that `&` and `|` lack?",
        options: [
          "they work on integers",
          "they may skip evaluating the right operand",
          "they bind more tightly than comparison",
          "they can be overloaded"
        ],
        answer: 1,
        explanation: "Short-circuit evaluation: `p && p->empty()` is safe for a null p because the right operand never runs — that is sequencing, guaranteed by the language."
      },
      {
        q: "With `int i = 5;` what does `int j = i++;` leave in `i` and `j`?",
        options: [
          "i = 5, j = 5",
          "i = 6, j = 5",
          "i = 6, j = 6",
          "i = 5, j = 6"
        ],
        answer: 1,
        explanation: "Postfix increments i to 6 but yields a copy of the old value 5. The prefix `++i` in the same role would have put 6 in both."
      },
      {
        q: "The conditional expression `ok ? 1 : 2.0` has result type:",
        options: [
          "`int`, the first alternative's type",
          "`double`, the two branches are combined to a common type",
          "`bool`",
          "ill-formed — the branches must have identical types"
        ],
        answer: 1,
        explanation: "The two result operands are converted to a common type (usual arithmetic conversions), just like the operands of a binary operator: int converts to double."
      }
    ]
  },

  // ---------------------------------------------------------------- 11.2
  {
    sectionId: "cpp-ch11-s2",
    readingTime: 7,
    intro: "Objects that outlive the function that created them cannot live on the stack; they live on the free store — the memory, managed by `new` and `delete`, whose lifetime you control explicitly. That control is power and it is exactly as dangerous as it is powerful: forget a delete and you leak; delete twice or use after delete and the behavior is undefined. Stroustrup's message is blunt: in application code you should almost never see new/delete — containers and smart pointers manage the store for you, and raw new/delete belongs in the implementation of exactly those low-level components.",
    objectives: [
      "Use new/delete for single objects and new[]/delete[] for arrays, correctly paired",
      "Explain why leaks, dangling pointers and double deletes happen and how RAII containers eliminate them",
      "Describe what happens when allocation fails, and the nothrow alternative"
    ],
    concepts: [
      {
        term: "The free store",
        kind: "definition",
        statement: "The **free store** (colloquially, the heap) is the pool of memory from which `new` allocates objects whose lifetime is **not tied to a scope**. A stack variable dies at its closing brace; a free-store object lives from its `new` until its matching `delete` — across function returns, however long you choose.",
        detail: "That is the entire contract: you, not the scopes of the program, own the object's lifetime. Every rule in this section follows from that one responsibility."
      },
      {
        term: "new and delete",
        kind: "definition",
        statement: "**`new`** allocates memory *and* constructs an object in it, yielding a pointer: `X* p = new X{args};` allocates one `X` (initializing it with `args`) on the free store. **`delete p`** runs `X`'s destructor and returns the memory. The array forms are `new X[n]` / `delete[] p` — they construct and destroy n elements.",
        detail: "The pairing rule is absolute: `new` goes with `delete`, `new[]` with `delete[]`. Deleting a `new[]` allocation with plain `delete` (or vice versa) is undefined behavior — the two forms record and expect different bookkeeping for the element count."
      },
      {
        term: "Leaks, dangling pointers, double deletes",
        kind: "insight",
        statement: "The three classic free-store bugs, all undefined or damaging: a **leak** (allocated, never deleted — the memory is lost until the process ends), a **dangling pointer** (used after `delete`, when the object may already be gone or reused), and a **double delete** (the second `delete` frees memory that may since have been handed to someone else).",
        detail: "The arithmetic of leaks is unforgiving: a function that allocates `new double[100000]` (800,000 bytes ≈ 0.76 MB) and forgets it leaks 0.76 MB **per call** — 76 GB over 100,000 calls. A desktop app leaking 8 MB per second exhausts 16 GB in under 35 minutes."
      },
      {
        term: "RAII: containers and smart pointers",
        kind: "method",
        statement: "The fix is to give free-store memory an **owner** whose destructor releases it: `vector`, `string` and friends for buffers; **`std::unique_ptr`** for single objects (exactly one owner; the destructor deletes — `unique_ptr<X> p {new X{7}};`, or `make_unique<X>(7)`); **`std::shared_ptr`** when ownership is genuinely shared (a reference count deletes the last copy).",
        detail: "This is RAII — resource acquisition is initialization — from Chapter 5: the scope owns the handle, the handle owns the resource, and destruction cascades automatically, in the right order, including on exceptions. Application code should read `vector` and `unique_ptr`; the raw `new`/`delete` should hide inside the implementations of such handles."
      },
      {
        term: "Memory exhaustion",
        kind: "definition",
        statement: "When `new` cannot allocate, it throws **`std::bad_alloc`** — by design, because running out of memory is rarely recoverable at the allocation site. The alternative **nothrow `new`** — `new (nothrow) X` — returns `nullptr` instead, for the rare systems code that can meaningfully continue.",
        detail: "Catching `bad_alloc` everywhere is an anti-pattern: if the machine is out of memory, the handler usually cannot run anyway. Allocate in constructors of owning handles and let the exception propagate — that is the RAII answer."
      }
    ],
    examples: [
      {
        title: "Three ways to own a buffer of doubles",
        problem: "A function needs a million doubles (8 MB with 8-byte doubles) that outlives the call. Show the raw way, the leak it would cause if the early return were taken, and the owning way.",
        steps: [
          { label: "Raw new", text: "```\ndouble* make_data()\n{\n    double* p = new double[1000000];   // 8,000,000 bytes\n    fill(p, p + 1000000, 0.0);\n    if (something_wrong()) return nullptr;   // leak: 8 MB per call\n    // ... later ...\n    return p;      // caller must remember delete[]\n}\n``` — the early return strands the allocation; the caller must remember `delete[]` and never `delete`." },
          { label: "The leak budget", text: "If `something_wrong()` triggers once per second in a long-running server, the process loses 8 MB/s: 480 MB after a minute, every GB in about 2 minutes 8 seconds — the process dies of memory exhaustion without a single wrong answer." },
          { label: "Owning it", text: "```\nvector<double> make_data()\n{\n    vector<double> v(1000000);   // 8 MB, owned by v\n    // ... fill ...\n    return v;   // moved out cheaply, freed by v's destructor\n}\n``` — no leak is *possible*: every exit path (returns, exceptions) runs `v`'s destructor, which frees the memory." },
          { label: "Single object case", text: "For one object: `auto p = make_unique<X>(args);` — the destructor deletes at scope end; ownership can be moved into containers or members, but never copied by accident." }
        ],
        result: "The vector/unique_ptr versions are shorter than the raw one, cannot leak on any path, and cost nothing extra at run time — ownership is the design, RAII is the mechanism."
      },
      {
        title: "Working through free store",
        problem: "new, delete and lifetimes on the heap. Your task: use new/delete for single objects and new[]/delete[] for arrays, correctly paired.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use new/delete for single objects and new[]/delete[] for arrays, correctly paired. Write down the guarantee you will rely on — for this chapter it is: `new` allocates and constructs, `delete` destructs and frees; arrays need `new[]` matched with `delete[]` — mismatched pairing is undefined behavior." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `auto m = std::min(a, b);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain why leaks, dangling pointers and double deletes happen and how RAII containers eliminate them — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Leaks, dangling pointers and double deletes are the price of manual ownership; each is eliminated by handing the allocation to an owner whose destructor releases it (vector, string, unique_ptr, shared_ptr). If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `new` allocates and constructs, `delete` destructs and frees; arrays need `new[]` matched with `delete[]` — mismatched pairing is undefined behavior. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`new` allocates and constructs, `delete` destructs and frees; arrays need `new[]` matched with `delete[]` — mismatched pairing is undefined behavior.",
      "Leaks, dangling pointers and double deletes are the price of manual ownership; each is eliminated by handing the allocation to an owner whose destructor releases it (vector, string, unique_ptr, shared_ptr).",
      "When allocation fails, `new` throws `std::bad_alloc` (nothrow new returns nullptr); handle exhaustion by owning resources in RAII handles, not by catching everywhere."
    ],
    quiz: [
      {
        q: "Memory allocated with `new X[100]` must be released by:",
        options: [
          "`delete p;`",
          "`delete[] p;`",
          "`free(p);`",
          "either delete or delete[] — they are synonyms"
        ],
        answer: 1,
        explanation: "Array and single-object allocations record different bookkeeping; delete[] runs the destructor of every element, plain delete does not — the mismatch is undefined behavior."
      },
      {
        q: "What exactly does `X* p = new X{args};` do?",
        options: [
          "allocates raw memory only; construction is a separate call",
          "allocates memory, constructs an X in it with args, and yields a pointer to it",
          "constructs p on the stack and copies it to the heap",
          "returns a reference to the new object"
        ],
        answer: 1,
        explanation: "new is allocation plus construction as one operation — which is why its inverse, delete, is destruction plus deallocation, and why the pairs must match."
      },
      {
        q: "A function that leaks an 8 MB buffer per call and runs once per second will exhaust 16 GB in about:",
        options: [
          "16 seconds",
          "35 minutes",
          "about 2 minutes",
          "it never will — the OS reclaims leaks"
        ],
        answer: 1,
        explanation: "16 GB / (8 MB/s) = 2048 s ≈ 34 minutes. The OS reclaims memory only when the process exits — a leak is lost only for the process's lifetime, which is exactly the problem."
      },
      {
        q: "The chapter's advice for managing free-store memory in ordinary application code is:",
        options: [
          "call delete immediately after every use",
          "use containers and smart pointers (vector, string, unique_ptr) so ownership is expressed in types",
          "prefer malloc/free for their clearer semantics",
          "disable exceptions so bad_alloc cannot occur"
        ],
        answer: 1,
        explanation: "RAII handles: the destructor is the release point, correct on every exit path. Raw new/delete belongs in the implementation of such handles, not in application code."
      }
    ]
  },

  // ---------------------------------------------------------------- 11.3
  {
    sectionId: "cpp-ch11-s3",
    readingTime: 5,
    intro: "C++11 made `{}`-lists a universal notation: the same brace syntax initializes variables, arrays, aggregates, containers, function arguments and return values. The mechanism behind the argument and return uses is `std::initializer_list` — a lightweight, immutable view of a temporary array that a function can accept by value. Along with uniformity comes safety: brace initialization rejects narrowing conversions, which is the chapter's main reason for preferring it.",
    objectives: [
      "Use {} lists in initialization, assignment, argument and return positions",
      "Write functions taking std::initializer_list and iterate them",
      "Explain why {} rejects narrowing and how the vector count/element ambiguity is resolved"
    ],
    concepts: [
      {
        term: "{}-lists everywhere",
        kind: "notation",
        statement: "A brace-enclosed, comma-separated list of values is usable as an **initializer** (`int a[] {1, 2, 3};`, `vector<int> v {1, 2, 3};`), as a **right-hand side of assignment** (`v = {4, 5};`), as a **function argument** (`f({1, 2});`), and as a **return value** (`return {x, y};` for a pair). One notation, one meaning: *here are the elements*.",
        detail: "In the range-for, a bare `{}`-list is even a range: `for (int x : {1, 2, 3, 4})` iterates a temporary list — handy in small tests and examples."
      },
      {
        term: "std::initializer_list",
        kind: "definition",
        statement: "A function accepts a `{}` list by declaring a parameter of type **`std::initializer_list<T>`**. The list object is a lightweight handle — a pair of pointers and a size — to a temporary array of the elements, so passing it **by value is cheap**. Inside, it offers `begin()`/`end()` (so it works with range-for and algorithms) and `size()`; it is read-only: elements cannot be modified through it.",
        detail: "Example: `double sum(std::initializer_list<double> lst) { double s = 0; for (double x : lst) s += x; return s; }` — then `sum({1, 2, 3, 4})` returns $10$."
      },
      {
        term: "Narrowing is rejected",
        kind: "law",
        statement: "Brace initialization is the **safe** form: it refuses narrowing conversions (10.5). `int x {7.9};` and `int x {some_double};` do not compile, where `int x = 7.9;` silently stores 7. This is the same protection `{}` gives to every initialization position it covers — one more reason to use braces as the default.",
        detail: "The rule is about *values the compiler can see*: a literal 7.9 or a known double narrows and is rejected; a constant expression the compiler can prove fits (`char c {65};`) is accepted."
      },
      {
        term: "The count/element ambiguity",
        kind: "insight",
        statement: "The `{}` list constructor of a container **wins over other constructors** when braces are used — which resolves the famous `vector<int>` pair: `vector<int> v1(3);` is the **count** constructor (three elements, each 0), while `vector<int> v2{3};` is the **list** constructor (one element: 3). Same syntax shape, opposite meanings.",
        detail: "The moral: with containers, `( )` means *describe the structure* (size, capacity), `{ }` means *here are the elements*. Choosing deliberately between the two pairs of brackets is part of reading modern C++ aloud correctly."
      },
      {
        term: "Lists: the working contract",
        kind: "definition",
        statement: "**Lists.** Initializer lists everywhere. You can claim this section when you can use {} lists in initialization, assignment, argument and return positions — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 11 (Select Operations); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "sum() over an initializer list",
        problem: "Write and trace `sum({1, 2, 3, 4})` and `sum({0.5, 1.5, 2.5})` for the function above.",
        steps: [
          { label: "The call", text: "`sum({1, 2, 3, 4})` — the braces in the argument position create an `initializer_list<int>`... whose elements then convert to `double` (widening, allowed) because the parameter is `initializer_list<double>`: 1.0, 2.0, 3.0, 4.0." },
          { label: "The loop", text: "The range-for binds `x` to each element in turn: $s = 0 \\to 1 \\to 3 \\to 6 \\to 10$. Four passes, `lst.size() == 4` throughout." },
          { label: "The floating case", text: "`sum({0.5, 1.5, 2.5})` adds $0.5 + 1.5 + 2.5 = 4.5$ — the elements were already `double`, no conversion at all." },
          { label: "What is not allowed", text: "Assigning through the list: `*(lst.begin()) = 7;` is ill-formed — `initializer_list` is read-only, a view of an immutable temporary, not an out-parameter." }
        ],
        result: "sum({1,2,3,4}) = 10; sum({0.5,1.5,2.5}) = 4.5 — argument-position braces work because of initializer_list, and the list itself cannot be written through."
      },
      {
        title: "vector<int> v(3) versus v{3}",
        problem: "Predict the contents of `vector<int> a(3);` and `vector<int> b{3};` and explain the rule that separates them.",
        steps: [
          { label: "Parentheses: the count", text: "`vector<int> a(3);` calls the size constructor: 3 elements, each default-initialized to 0 → `{0, 0, 0}`, with `a.size() == 3`." },
          { label: "Braces: the elements", text: "`vector<int> b{3};` — the `{3}` is an element list, and the list constructor is preferred over every other constructor when braces appear: one element → `{3}`, with `b.size() == 1`." },
          { label: "The general rule", text: "For a type with an `initializer_list` constructor, `{}`-initialization prefers it. To reach a two-argument structural constructor you must use parentheses: `vector<int> c(3, 7);` is three 7s, while `vector<int> d{3, 7};` is `{3, 7}`." },
          { label: "The habit to build", text: "Read the two forms aloud as *three empty slots* versus *the single value three* — and in your own code, prefer `{}` whenever you mean elements, since it also refuses narrowing." }
        ],
        result: "`a` = {0,0,0}; `b` = {3} — one pair of brackets chooses the count constructor, the other the element list; never write one meaning with the other brackets."
      }
    ],
    keyTakeaways: [
      "A `{}`-list is uniform notation for *the elements*: it initializes arrays and containers, appears as a right-hand side, a function argument and a return value.",
      "Functions accept it as `std::initializer_list<T>` — a cheap by-value view (pointers + size) of a read-only temporary array, iterable with begin()/end().",
      "Brace initialization rejects narrowing, and braces prefer a container's element-list constructor: `vector<int> v(3)` is three zeros, `vector<int> v{3}` is one 3."
    ],
    quiz: [
      {
        q: "A parameter of type `std::initializer_list<double>` is passed by value because:",
        options: [
          "lists cannot be referenced",
          "the list is just a lightweight view (a pair of pointers and a size) of the underlying elements",
          "by value copies each element cheaply",
          "the standard forbids references to lists"
        ],
        answer: 1,
        explanation: "The initializer_list object itself is a tiny handle to a temporary array of the elements; copying the handle is cheap, and the elements themselves are not copied by the pass."
      },
      {
        q: "`vector<int> v{3};` produces:",
        options: [
          "three elements, all zero",
          "one element with value 3",
          "an empty vector",
          "a compile error"
        ],
        answer: 1,
        explanation: "Braces select the initializer_list constructor: 3 is the single element. The parentheses form vector<int> v(3) would be three default-initialized elements."
      },
      {
        q: "Which initialization compiles?",
        options: [
          "`int x {7.9};`",
          "`int x = 7.9;`",
          "`char c {1000};`",
          "`long n {3.5};`"
        ],
        answer: 1,
        explanation: "The = form narrows silently (7.9 → 7) — legal but lossy. Every braced version rejects the narrowing it can see: that is precisely why the book prefers braces."
      }
    ]
  },

  // ---------------------------------------------------------------- 11.4
  {
    sectionId: "cpp-ch11-s4",
    readingTime: 8,
    intro: "A lambda expression is a function written where you need it — most often as an argument to an algorithm — with the enclosing scope's variables available to its body. Syntactically it is `[capture](parameters) body`; semantically it is the compiler generating a small unnamed function object whose data members are the captures. Get the capture right — what is copied, what is aliased, what happens when the lambda outlives the frame it came from — and lambdas become the cleanest way to hand behavior to code; get it wrong and you have written a time bomb.",
    objectives: [
      "Read and write lambda expressions with value, reference and mixed captures",
      "Explain what a closure is and what mutable changes",
      "Use lambdas as algorithm arguments and recognize capture-lifetime hazards"
    ],
    concepts: [
      {
        term: "Lambda expression",
        kind: "definition",
        statement: "A **lambda expression** has the form **`[capture](parameters) -> return-type { body }`** (the return type is usually deduced). It *is* an expression: it evaluates to an object — a **closure** — that can be called with `(...)` like a function, stored in a variable, or passed as an argument:\n```\nsort(v.begin(), v.end(), [](int a, int b) { return a > b; });   // descending\n```",
        detail: "The book's framing: a lambda is a convenient way of defining a function object at its point of use. Its primary purpose is to specify simple actions to algorithms — the alternative, a named class with an `operator()`, is fifty lines of ceremony for one comparison."
      },
      {
        term: "Capture",
        kind: "definition",
        statement: "The **capture list** decides what the body sees of the enclosing scope: `[]` captures nothing; `[=]` captures every used local **by value** (a copy); `[&]` captures every used local **by reference**; `[x, &y]` captures x by value and y by reference; `[&, x]` and `[=, &y]` set the default and list exceptions.",
        detail: "Capture happens **once, when the lambda expression is evaluated** — it is a snapshot for value captures and a set of aliases for reference captures; later declarations of new locals are not seen by the lambda at all."
      },
      {
        term: "The closure object",
        kind: "insight",
        statement: "A lambda evaluates to an object of a compiler-generated **unnamed class**: the captures are its data members, and its call operator `operator()(params) const` runs the body. Copying the lambda copies its captured values; calling it runs the body against those members (and whatever reference members alias).",
        detail: "This is not an implementation trick to know about — it is the *semantics*: the closure is a value, copies are independent, and the constness of `operator()` is what `mutable` removes (see the masters tier below for the full mechanics)."
      },
      {
        term: "mutable",
        kind: "definition",
        statement: "The call operator of a lambda is `const` by default — the closure may read its value-captured members but not modify them. Adding **`mutable`** after the parameter list removes that constness, so the body may write to its value captures, with the change persisting **between calls of this closure object**.",
        detail: "`auto next = [n = 0]() mutable { return ++n; };` — each call increments the member: 1, 2, 3, ... Without `mutable` the increment would not compile."
      },
      {
        term: "Lambdas and algorithms",
        kind: "method",
        statement: "The bread-and-butter use is inlining behavior into standard algorithms: a comparator for `sort`, an operation for `for_each`, a predicate for `find_if` or `count_if`:\n```\nint evens = count_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; });\n```",
        detail: "Since C++14, parameter types may be `auto` (**generic lambdas**): `[](auto a, auto b) { return a < b; }` — the compiler generates a template call operator, one lambda serving many types."
      }
    ],
    figures: [
      {
        caption: "Capture semantics of `[x, &y]`. The closure object holds a **copy** of x (a fresh member, snapshotted when the lambda expression is evaluated) and a **reference** member aliasing the caller's y. Calling `f(10)` runs the body against these members: $3 + 7 + 10 = 20$. Later changes to the outer x do not affect the closure; later changes to y do — and if the enclosing frame dies, the reference dangles.",
        svg: '<svg viewBox="0 0 700 380" width="100%" role="img" aria-label="Diagram of lambda capture: value capture copies x into the closure, reference capture aliases the caller y"><text x="350" y="26" text-anchor="middle" font-family="ui-monospace, monospace" font-size="12.5" fill="currentColor">auto f = [x, &amp;y](int k) { return x + y + k; };</text><rect x="40" y="70" width="240" height="250" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/><text x="160" y="94" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="bold" fill="currentColor">enclosing scope (caller frame)</text><rect x="60" y="112" width="200" height="36" fill="currentColor" fill-opacity="0.12" stroke="currentColor"/><text x="160" y="135" text-anchor="middle" font-family="ui-monospace, monospace" font-size="12" fill="currentColor">int x = 3</text><rect x="60" y="162" width="200" height="36" fill="currentColor" fill-opacity="0.12" stroke="currentColor"/><text x="160" y="185" text-anchor="middle" font-family="ui-monospace, monospace" font-size="12" fill="currentColor">int y = 7</text><rect x="420" y="70" width="250" height="250" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor"/><text x="545" y="94" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="bold" fill="currentColor">closure f (unnamed class object)</text><rect x="440" y="112" width="210" height="36" fill="currentColor" fill-opacity="0.12" stroke="currentColor"/><text x="545" y="129" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11.5" fill="currentColor">int x = 3</text><text x="545" y="143" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.75">member: a copy</text><rect x="440" y="162" width="210" height="36" fill="currentColor" fill-opacity="0.12" stroke="currentColor"/><text x="545" y="179" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11.5" fill="currentColor">int&amp; y</text><text x="545" y="193" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.75">member: a reference</text><rect x="440" y="225" width="210" height="70" fill="none" stroke="currentColor" stroke-dasharray="4 3"/><text x="545" y="248" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">operator()(int k) const</text><text x="545" y="266" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">{ return x + y + k; }</text><text x="545" y="284" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.75">calls read the members above</text><line x1="265" y1="130" x2="438" y2="130" stroke="currentColor" stroke-width="1.4"/><polygon points="436,126 446,130 436,134" fill="currentColor"/><text x="352" y="122" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-style="italic" fill="currentColor" opacity="0.85">value copied at capture</text><line x1="438" y1="180" x2="267" y2="180" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4"/><polygon points="269,176 259,180 269,184" fill="currentColor"/><text x="352" y="172" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-style="italic" fill="currentColor" opacity="0.85">reference aliases the caller object</text><text x="40" y="348" font-family="ui-monospace, monospace" font-size="11.5" fill="currentColor">f(10) = 3 + 7 + 10 = 20</text><text x="40" y="370" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.85">changes to the outer x never reach f; changes to y always do — and if the frame dies, the y reference dangles</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Sum of squares by for_each",
        problem: "Compute $1^2 + 2^2 + 3^2 + 4^2 + 5^2$ over `vector<int> v {1, 2, 3, 4, 5}` using a lambda with a reference capture.",
        steps: [
          { label: "The code", text: "```\nint s = 0;\nfor_each(v.begin(), v.end(), [&s](int x) { s += x * x; });\n``` — the lambda captures `s` by reference so the body can update it; each element x contributes x squared." },
          { label: "The arithmetic", text: "$1 + 4 + 9 + 16 + 25 = 55$ — the same total as the sum 1..10, half its terms squared (a pleasant cross-check: $\\sum_{k=1}^{n} k^2 = n(n+1)(2n+1)/6 = 5 \\times 6 \\times 11 / 6 = 55$)." },
          { label: "Why the capture is a reference", text: "Capturing `s` by value would copy it; the additions would update the closure's private member and be lost when the lambda object is destroyed at the end of the for_each call. `&` is what makes the result survive." },
          { label: "The mutable alternative", text: "`[s]() mutable { return ++s; }` style works when the lambda *returns* the accumulated value — but for a fold into an existing variable, the reference capture is the honest form." }
        ],
        result: "s = 55 — a one-line fold with no named function, and the reference capture is load-bearing: by value would compute 55 into a copy and throw it away."
      },
      {
        title: "A generator you can copy",
        problem: "Build a closure that yields 1, 2, 3, ... when called repeatedly, and check what happens when you copy it.",
        steps: [
          { label: "The lambda", text: "`auto next = [n = 0]() mutable { return ++n; };` — the init-capture `[n = 0]` creates a member `n` initialized to 0, and `mutable` regenerates the call operator without its default constness, so `++n` may write the member." },
          { label: "Calling it", text: "`next()` → 1; `next()` → 2; `next()` → 3. The state lives in the closure object, not in any outer variable — nothing outside changes." },
          { label: "Copying it", text: "`auto twin = next;` copies the closure *with its current member value* (2, say): `twin()` → 3, `next()` → 3 — the two objects now advance independently. The closure is a value with state, not a shared counter." },
          { label: "Scope note", text: "Because `n` is a member of the closure (not a reference to an outer local), `next` can safely outlive the scope that created it — the one capture style with no dangling risk." }
        ],
        result: "next yields 1, 2, 3 ...; a copy branches off from the current value with its own member — value capture plus mutable is self-contained state."
      }
    ],
    keyTakeaways: [
      "A lambda `[capture](params){ body }` is an expression evaluating to a closure — an unnamed function object with the captures as members; its natural habitat is an algorithm argument.",
      "`[=]` copies used locals at lambda-creation time; `[&]` aliases them; mixed lists and defaults combine both — the choice decides independence versus freshness.",
      "`mutable` (after the parameter list) lets a closure modify its value-captured members between calls — state that lives in the closure, copied along with it, and safe to outlive its birth scope."
    ],
    quiz: [
      {
        q: "What does a lambda expression evaluate to?",
        options: [
          "a function pointer, always",
          "an object of a compiler-generated class — a closure — whose members are the captures",
          "the value of its body, computed immediately",
          "a type name usable in declarations"
        ],
        answer: 1,
        explanation: "The lambda expression constructs an unnamed class object whose call operator runs the body; that object can be called, copied, stored and passed like any other value."
      },
      {
        q: "In `[=]` capture, values are copied:",
        options: [
          "at each call of the lambda",
          "once, when the lambda expression is evaluated — later outer changes do not reach the closure",
          "lazily, on first read",
          "never — = means by reference"
        ],
        answer: 1,
        explanation: "Value capture is a snapshot taken at creation; the closure then holds independent copies. Reference capture is the one that tracks later outer changes."
      },
      {
        q: "A lambda that should count its own calls (returning 1, 2, 3, ...) needs:",
        options: [
          "capture-by-reference of an outer counter only",
          "a value-captured member and `mutable`, so the const call operator can modify it",
          "the `static` keyword in the body",
          "a reference capture of itself"
        ],
        answer: 1,
        explanation: "Value capture gives the closure its own member; mutable removes the constness that would forbid ++n in the call operator. The state then travels with the object."
      },
      {
        q: "Which capture is safe when the closure will be stored and called after the enclosing function has returned?",
        options: [
          "[&] — references stay valid as long as needed",
          "[=] — the closure owns copies of what it uses",
          "[&y] for the one needed variable",
          "all captures are equally safe"
        ],
        answer: 1,
        explanation: "By-value capture makes the closure self-contained; reference captures alias locals that die with the frame — calling the closure afterwards is undefined behavior."
      },
      // PYQ-pattern: GATE 2021 — lambda capture by value versus by reference (rephrased)
      {
        q: "What does this program print?\n```cpp\n#include <iostream>\nint main() {\n  int x = 1;\n  auto f = [x] { return x; };\n  x = 99;\n  auto g = [&x] { return x; };\n  std::cout << f() << ' ' << g();\n}\n```",
        options: ["`99 99`", "`1 99`", "`99 1`", "`1 1`"],
        answer: 1,
        explanation: "Step 1: The code given builds two closures over the same variable, one capturing by value before reassignment and one by reference after. Step 2: The governing rule is closure storage: a by-value capture copies the variable at closure creation, while a by-reference capture aliases the live variable. Step 3: Tracing statement by statement, `f` stores the copy `1`, the assignment raises `x` to `99`, `g` aliases the raised variable, so the calls yield `1` and `99`. Step 4: The distractors fail because the copy freezes at creation time and the alias always observes the current value. Step 5: Therefore the program prints `1 99`."
      }
    ],
    depth: [
      {
        tier: "masters",
        title: "Capture semantics: what a closure really is",
        blocks: [
          {
            kind: "para",
            heading: "The desugaring",
            body: "Everything about capture follows from one transformation the compiler performs. A lambda `[x, &y](int k) { return x + y + k; }` in a scope holding `int x; int&`-able `int y;` is compiled into (the moral equivalent of) an unnamed class:\n```\nclass __closure {\n    int  x;    // captured by value: a member copy\n    int& y;    // captured by reference: a reference member\npublic:\n    __closure(int x_, int& y_) : x{x_}, y{y_} {}\n    int operator()(int k) const { return x + y + k; }\n};\n```\nand the lambda expression itself is simply `__closure(x, y)` — a constructor call yielding the closure object. Reads of `x` and `y` in the body are member accesses; the capture list is a member declaration list; calling `f(10)` is `f.operator()(10)`. No capture, no members: `[](int a, int b){ return a<b; }` desugars to a class with nothing but the call operator."
          },
          {
            kind: "theorem",
            heading: "Independence of value captures",
            body: "**Theorem.** Let `f` be a closure with value-captured `x`, created from outer variable `x_0`, and let `g` be any later modification of `x_0`. Then (1) calling `f` never observes `g`'s effect, and (2) `f` can never modify `x_0` — not even accidentally, not even with `mutable`. **Proof sketch.** At closure creation, the member `x` is copy-initialized from `x_0`, after which the two objects share no state — assignment, destruction and address all concern the member only. For (2), the body's writes target the member; `x_0` appears nowhere in the generated class. The converse holds for reference captures by the same argument read in reverse: the member `int& y` is an alias *bound at creation*, so every read and write through it is a read or write of the caller's object, in real time. ∎"
          },
          {
            kind: "derivation",
            heading: "Why operator() is const, and what mutable really changes",
            body: "The generated call operator is `const` — so inside a non-`mutable` lambda, every member is `const`. For a value-captured `int x`, `const` on the member means read-only: `x = 1;` is ill-formed until `mutable` regenerates a non-const `operator()`. But now the subtle case: what does the constness do to the *reference* member `int& y`? Applying const to a member of reference type qualifies the reference, not the referent — and cv-qualified references collapse to plain references. So in a **non-mutable** lambda, `y = 5;` **compiles and writes through to the caller's object**: the constness of the call operator protects the closure's own state, never the objects it aliases. This is worth internalizing twice, because it is asymmetric: value captures cannot be written (without `mutable`) but can never affect the outside; reference captures can always be written through, const operator or not. `mutable` is about the closure's *own* members — it is not, and cannot be, a permission slip about the outside world."
          },
          {
            kind: "example",
            heading: "The dangling reference closure",
            body: "The hazard the theorem's converse implies:\n```\nauto make_scale(double& base)\n{\n    return [&base](double x) { return base * x; };   // captures by reference\n}\nvoid user()\n{\n    double local = 2.0;\n    auto f = make_scale(local);       // f.y aliases local\n}                                   // local dies here\n``` — after `user` returns, `f` holds a reference member bound to a destroyed object. Calling `f(3.0)` reads dead storage: undefined behavior, classically reading a stale value like `4294967296.0`-shaped garbage or whatever reuses the stack slot. The fix is the theorem again: capture by value (`[base]`), making the closure self-contained. The same reasoning covers `[=]` **inside a member function**: it captures `this` by value — the *pointer* — so the closure depends on the object's lifetime, and a closure stored beyond the object's death dangles through the copied pointer."
          },
          {
            kind: "remark",
            heading: "Init-capture: moving into the closure",
            body: "The capture syntax has one extension that follows from the desugaring: an **init-capture** `[name = expression]` creates the member *initialized from an arbitrary expression* — including `std::move`. `[p = std::move(sp)]` moves a `unique_ptr` into the closure: the only way to capture a move-only object, and the standard pattern for handing a sink into a lambda that will run later (a task, a callback). The member-name-before-`=` syntax also renames: `[threshold = config.max]` avoids shadowing the outer name and makes the copy explicit. Init-capture is C++14; combined with `auto` parameters (generic lambdas) it turns the closure class into a small, readable, compiler-written functor — the moral successor to the hand-written function objects of Chapter 5."
          },
          {
            kind: "application",
            heading: "Reading a closure's semantics at a glance",
            body: "The desugaring turns capture auditing mechanical. Given any lambda, ask three questions. *What are the members?* — exactly the captures the body mentions (plus `this` if it touches members). *Which are references?* — those with `&`, including everything behind a plain `[&]`. *When is it called, and do those referents still live?* — a by-reference closure must not outlive any aliased local; a `this`-capturing closure must not outlive its object. A closure passing all three is self-contained and can be stored, returned, shipped to another thread. This checklist is precisely how review catches the two classic bugs before they run: the returned `[&]` lambda, and the stored `this`-capturing callback in an async handler."
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------- 11.5
  {
    sectionId: "cpp-ch11-s5",
    readingTime: 7,
    intro: "C++ inherited from C two ways to force a conversion — `(T)x` and `T(x)` — and both are dangerous for the same reason: they silently try whatever combination of interpretation changes, const removal and pointer reinterpretation gets the job done, and they are invisible to search. The C++ named casts fix both faults: each of the four does one specific thing, and each is greppable. The chapter's stance is that even these are to be used reluctantly — every cast is a place where the type system was defeated on purpose, and should justify itself.",
    objectives: [
      "Explain why named casts replace C-style casts, and what each of the four does",
      "Choose the right cast: static_cast, dynamic_cast, const_cast, reinterpret_cast",
      "Recognize the undefined behaviors the cast system cannot protect against"
    ],
    concepts: [
      {
        term: "Why named casts",
        kind: "insight",
        statement: "A C-style cast `(T)x` tries, in order: a `const_cast`, a `static_cast`, a `reinterpret_cast`, or a combination — whichever first produces legal code, without telling you which. A **named cast** says exactly which meaning you intend, is rejected if that meaning is impossible, and — because it is a word — can be searched, reviewed and grepped for. Casts should be rare; when present, they should be loud.",
        detail: "The book's advice in one line: avoid explicit type conversion; when necessary, use the named operators — never the C-style form."
      },
      {
        term: "static_cast",
        kind: "definition",
        statement: "**`static_cast<T>(x)`** performs well-defined, reversible conversions between related types: floating to integer (`static_cast<int>(3.9)` is 3 — truncation toward zero), integer to floating, enum to integer, `void*` back to its proper pointer type. It is the everyday cast for *sensible* conversions the language just will not do implicitly in that direction.",
        detail: "Reversible is the key word: `static_cast<double>(7) / 2` gives 3.5 (versus the integer 3 of `7/2`), and the inverse `static_cast<int>` of that gives back 3 — the pair round-trips through the value the types share."
      },
      {
        term: "dynamic_cast",
        kind: "definition",
        statement: "**`dynamic_cast<T*>(p)`** asks, at run time, whether the object `p` points to (in a polymorphic class hierarchy) is really a `T`. On success it returns the converted pointer; **on failure it returns `nullptr`** — the pointer form never throws. The reference form `dynamic_cast<T&>(r)` cannot return null, so it throws **`std::bad_cast`** on failure instead.",
        detail: "It requires the source type to be polymorphic (at least one virtual function) and uses the run-time type information; the idiomatic pattern is test-and-use: `if (Circle* c = dynamic_cast<Circle*>(shape)) { ... c->radius() ... }` — the null check and the use in one construct."
      },
      {
        term: "const_cast",
        kind: "definition",
        statement: "**`const_cast<T*>(p)`** adds or removes `const` (and `volatile`) from a pointer or reference type — and nothing else. Removing const is legal *as a cast*; **writing through it to an object that was defined const is undefined behavior**. Its honest use is threading const data through APIs that (incorrectly) fail to promise not to modify it.",
        detail: "This is the narrowest cast: it changes the type's promise, never the object's nature. A genuinely const object — say `const int table[100]` — may live in read-only memory; the cast makes the code compile, not the write work."
      },
      {
        term: "reinterpret_cast",
        kind: "definition",
        statement: "**`reinterpret_cast<T*>(p)`** reinterprets the bit pattern of a pointer as a pointer to an unrelated type — `unsigned char*` to examine an object's representation, function pointer storage, memory-mapped device registers. The result is **implementation-dependent**, and reading or writing through it as the wrong type is where the danger lives; it is for the lowest-level code.",
        detail: "The one blessed round trip: reinterpret to bytes and back to the *original* type is valid — that is how serialization and object dumps inspect raw representations. `static_cast` cannot do pointer-to-unrelated-pointer at all, which is exactly why this one exists."
      }
    ],
    examples: [
      {
        title: "A safe downcast and its failure",
        problem: "A `vector<Shape*>` holds circles, squares and triangles. Extract the circles. What happens for a square?",
        steps: [
          { label: "The hierarchy", text: "`Shape` is polymorphic (virtual destructor, virtual `draw()`), and `Circle` derives from it with its own `radius()`." },
          { label: "The pattern", text: "```\nfor (Shape* s : shapes)\n    if (Circle* c = dynamic_cast<Circle*>(s))\n        total += 2 * c->radius();    // runs only for real circles\n``` — declaration-in-condition (9.3) plus dynamic_cast's null-on-failure: the pair is self-documenting." },
          { label: "The square case", text: "For a `Square*`, the run-time check fails: `dynamic_cast<Circle*>(s)` returns `nullptr`, the condition converts to false, the branch is skipped — no error, no crash, just a truthful no." },
          { label: "The reference form", text: "Had we held `Shape& r`, `dynamic_cast<Circle&>(r)` on a square would throw `std::bad_cast` — because a reference cannot express failure by returning null." }
        ],
        result: "Circles are processed, squares are skipped (or throw in reference form): the type check happens at run time, where the real type actually exists."
      },
      {
        title: "Three casts, three intents",
        problem: "Classify each intended conversion with the right named cast (or none): (a) average two ints as a double, (b) pass const data to a legacy API taking a non-const pointer, (c) dump an object's bytes.",
        steps: [
          { label: "(a) Arithmetic", text: "`double avg = static_cast<double>(total) / count;` — a well-defined, reversible numeric conversion: static_cast. (With `total/count` alone, integer division would truncate first: the cast is load-bearing.)" },
          { label: "(b) Legacy API", text: "`legacy(const_cast<char*>(str.c_str()));` — only the constness of the pointer type changes; if the legacy API actually writes, the behavior is on its head, not ours. This is the narrow, documented use of const_cast." },
          { label: "(c) Byte dump", text: "```\nconst unsigned char* p =\n    reinterpret_cast<const unsigned char*>(&obj);\nfor (size_t i = 0; i < sizeof obj; ++i) print(p[i]);\n``` — reading raw representation is precisely the byte-round-trip use; reading *as the wrong object type* would be undefined." },
          { label: "(d) The none case", text: "Converting a `double` to a `string`? No cast does that — conversions between class types go through constructors and conversion operators (user-defined conversions), not the cast operators at all." }
        ],
        result: "static_cast for arithmetic direction, const_cast for legacy const mismatches, reinterpret_cast for byte-level inspection — and no cast at all for user-defined conversions."
      }
    ],
    keyTakeaways: [
      "C-style casts silently try const/static/reinterpret in combination and cannot be searched; each named cast does exactly one thing and fails loudly if that is impossible.",
      "`static_cast` does well-defined reversible conversions (double↔int, void* back); `dynamic_cast` run-time checks a polymorphic downcast, returning nullptr (pointer) or throwing bad_cast (reference).",
      "`const_cast` strips only const — writing to a truly const object through it is undefined; `reinterpret_cast` reinterprets bits between unrelated pointer types, implementation-dependent, for the lowest level."
    ],
    quiz: [
      {
        q: "Which cast converts a polymorphic base pointer to a derived pointer *safely*, at run time?",
        options: [
          "`static_cast`",
          "`reinterpret_cast`",
          "`dynamic_cast`",
          "`const_cast`"
        ],
        answer: 2,
        explanation: "dynamic_cast consults the run-time type of the pointed-to object: nullptr (pointer form) or std::bad_cast (reference form) on mismatch — the other three take your word for it."
      },
      {
        q: "`static_cast<int>(3.9)` yields:",
        options: [
          "4 — rounded",
          "3 — truncated toward zero",
          "3.9 converted to the nearest representable int",
          "a compile error: use dynamic_cast"
        ],
        answer: 1,
        explanation: "The floating-to-integer static_cast truncates the fraction toward zero; rounding would be std::lround or an explicit +0.5 idiom — never an implicit promise."
      },
      {
        q: "After `const_cast` removes const from a pointer to an object that was *defined* const, writing through the pointer is:",
        options: [
          "well-defined; const is only a compile-time idea",
          "undefined behavior — the object may truly be read-only",
          "allowed if the object is small",
          "automatically thread-safe"
        ],
        answer: 1,
        explanation: "const_cast changes the type's promise, not the object's nature: genuinely const objects may live in read-only storage. The cast is for APIs that fail to declare their constness correctly."
      },
      {
        q: "To examine the raw bytes of an object (e.g. a checksum over its representation), the tool is:",
        options: [
          "`static_cast<unsigned char*>`",
          "`reinterpret_cast<unsigned char*>` — the byte round trip is its blessed use",
          "`dynamic_cast<unsigned char*>`",
          "impossible in C++"
        ],
        answer: 1,
        explanation: "unsigned char* is an unrelated pointer type, so only reinterpret_cast reaches it; inspecting an object's representation as bytes (and returning to the original type) is the sanctioned pattern."
      }
    ]
  },

  // ---------------------------------------------------------------- 11.6
  {
    sectionId: "cpp-ch11-s6",
    readingTime: 4,
    intro: "The chapter's advice assembles the sections into a working policy: own free-store memory through handles rather than managing it by hand; prefer value semantics — initializer lists, braces that reject narrowing; use lambdas where locality matters; and treat every cast as a small design failure to justify. None of these rules is about syntax polish; each removes a class of run-time failure.",
    objectives: [
      "Apply the ownership rules for free-store memory in application code",
      "Use {} lists and initializer_list as the default notation",
      "Justify each cast, and prefer virtual calls to type switches on dynamic_cast"
    ],
    concepts: [
      {
        term: "Own memory; do not manage it",
        kind: "method",
        statement: "**Prefer containers and smart pointers over raw new/delete**: `vector`, `string`, `unique_ptr`, `shared_ptr` express ownership in types, release on every path, and make leaks and double deletes unrepresentable. Reserve manual free-store management for the implementation of such handles — where the responsibility is the component's single job.",
        detail: "Corollary for pointers you merely *look through*: a raw pointer means *I am looking at something someone else owns* — non-owning observation, never management."
      },
      {
        term: "Braces by default",
        kind: "method",
        statement: "Use `{}` initialization and `initializer_list` parameters as the default notation: uniform across every kind of object, and rejecting narrowing (10.5) at compile time. Reach for `( )` only to reach a structural constructor that braces would shadow — the `vector<int> v(3)` versus `v{3}` distinction.",
        detail: "The default-by-braces habit is what makes the exception visible: a parenthesized constructor call in a codebase of braces is *loud* by contrast."
      },
      {
        term: "Lambdas for local behavior",
        kind: "method",
        statement: "Use lambdas for local, one-off behavior — algorithm arguments, small callbacks — where a named function would be ceremony. When behavior grows or is reused, name it; when state must be shared, prefer explicit objects. And capture consciously: value capture by default, references only while the enclosing scope provably outlives the closure.",
        detail: "The audit question from the masters tier: list the closure's members, mark the references, and check each referent still lives at every call site — or capture by value and let the copy be the proof."
      },
      {
        term: "Casts are design smells",
        kind: "insight",
        statement: "Each cast is a point where the type system was defeated deliberately: it removes a guarantee the compiler can no longer give. Keep them rare, named (never C-style), commented with why — and when you find a `dynamic_cast` followed by a branch on the type, consider whether a `virtual` function would let the objects answer for themselves.",
        detail: "The type-switch smell: `if (dynamic_cast<Circle*>(s)) ... else if (dynamic_cast<Square*>(s)) ...` is object-oriented code running away from its own idea — the virtual call is the design that replaces it."
      },
      {
        term: "Shipping rule for select operations",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Own memory through handles — containers and smart pointers — and let raw pointers be non-owning observers; manual new/delete belongs inside the implementations of ownership types.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "Replacing a type switch with a virtual call",
        problem: "This review comment appears: `if (Circle* c = dynamic_cast<Circle*>(s)) r += c->radius(); else if (Square* q = dynamic_cast<Square*>(s)) r += q->side();` — refactor per the advice.",
        steps: [
          { label: "Diagnose", text: "A dynamic_cast chain is a hand-rolled dispatch on type: every new shape edits this site — the classic maintenance magnet the chapter warns about." },
          { label: "Move the behavior", text: "Give `Shape` a virtual `double extent() const` overriding in `Circle` (returns the radius) and `Square` (the side). The loop body becomes `r += s->extent();` — the objects answer for themselves." },
          { label: "Where the cast remains", text: "dynamic_cast keeps its honest niche: *one-off* operations on one specific subtype that the base interface should not know about (e.g. a tool that inspects only circles) — tested, local, commented." },
          { label: "The pattern generalized", text: "This is the chapter's deeper advice in miniature: prefer code where the type system can check the design (virtual dispatch) over code where you check it manually (cast chains)." }
        ],
        result: "One virtual function replaces the cast chain; new shapes extend the hierarchy without editing their consumers — the cast smell was pointing at the missing virtual."
      },
      {
        title: "Reviewing select operations code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the ownership rules for free-store memory in application code.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Own memory through handles — containers and smart pointers — and let raw pointers be non-owning observers; manual new/delete belongs inside the implementations of ownership types." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `auto m = std::min(a, b);`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: use {} lists and initializer_list as the default notation. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Default to {} lists: uniform, narrowing-rejecting, and the intended way to hand elements to containers and functions; use () deliberately for structural constructors." },
        ],
        result: "The review ends with findings tied to reasons: Own memory through handles — containers and smart pointers — and let raw pointers be non-owning observers; manual new/delete belongs inside the implementations of ownership types. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Own memory through handles — containers and smart pointers — and let raw pointers be non-owning observers; manual new/delete belongs inside the implementations of ownership types.",
      "Default to {} lists: uniform, narrowing-rejecting, and the intended way to hand elements to containers and functions; use () deliberately for structural constructors.",
      "Use lambdas where behavior is local, capture by value by default, and treat every cast as a design question — especially dynamic_cast chains, which usually want to be virtual functions."
    ],
    quiz: [
      {
        q: "In application code, the advised way to hold an object on the free store is:",
        options: [
          "a raw pointer plus a comment saying who deletes",
          "a unique_ptr or shared_ptr (or a container), so the destructor releases it",
          "a global registry of allocations",
          "new without delete — the OS cleans up"
        ],
        answer: 1,
        explanation: "Ownership expressed in a type is checked by the compiler and correct on every exit path; raw new/delete in application code leaves leaks and double deletes representable."
      },
      {
        q: "A `dynamic_cast`-and-branch chain over several derived types most often indicates:",
        options: [
          "correct low-level style",
          "a missing virtual function — the objects should answer for themselves",
          "that static_cast was unavailable",
          "that the hierarchy needs reinterpret_cast"
        ],
        answer: 1,
        explanation: "Type switches on polymorphic types are hand-rolled dispatch; moving the behavior into a virtual function restores the design the hierarchy was expressing."
      },
      {
        q: "The chapter's rule on C-style casts `(T)x` is:",
        options: [
          "prefer them — they are shorter",
          "they are fine in headers only",
          "avoid them; use the named casts so the intent is explicit and greppable",
          "required when casting away const"
        ],
        answer: 2,
        explanation: "C-style casts try const/static/reinterpret in combination silently; the named forms state one intent each and can be searched — which is also why cast-count is a reviewable metric."
      }
    ]
  }
]

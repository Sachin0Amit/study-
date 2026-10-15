import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 7: Pointers, Arrays, and References (Sections 7.1 – 7.8)
// Master study content.
// ============================================================================

export const cppCh7Content: SectionContent[] = [
  // ------------------------------------------------------------------ 7.1
  {
    sectionId: "cpp-ch7-s1",
    readingTime: 4,
    intro: "This chapter is the low-level heart of C++: the model of memory as objects at addresses, the pointer as a typed handle to such an address, the array as C's original container, and the reference as the safe re-seating-proof alias. You may write whole programs with `vector` and `string`, but the library itself — and every C interface and ABI you will ever meet — is written in this chapter's vocabulary.",
    objectives: [
      "Describe the pointer model of memory: objects at addresses, pointers as typed handles",
      "State why pointer literacy matters even in code that never declares a pointer",
      "Preview the chapter's three tools: pointers, arrays and references"
    ],
    concepts: [
      {
        term: "The pointer model",
        kind: "definition",
        statement: "**Memory is a sequence of bytes with addresses; every object lives at one, and a pointer `T*` holds the address of an object of type `T`.** A pointer is a machine address given a *type* — the type is what makes `p+1` mean 'the next `T`' rather than 'one byte along'.",
        detail: "C++ pointers are deliberately close to the hardware — which is exactly why they are the language of interfaces to operating systems, device drivers and C libraries."
      },
      {
        term: "Why this chapter still matters",
        kind: "insight",
        statement: "**Containers are implemented with pointers, C interfaces pass arrays as pointers, and library code routinely returns addresses.** You need not write raw pointer loops — you do need to read them, review them, and know which of them are safe.",
        detail: "The chapter's own examples (a counting loop over a C string, an ownership audit) are the shapes you will encounter in real codebases within your first month."
      },
      {
        term: "Three tools, three jobs",
        kind: "insight",
        statement: "**A pointer refers to an object and can be re-seated; an array is a fixed run of objects with no size tag; a reference is an alias that binds once and never changes target.** Choosing among them — and knowing when `vector`, `string` or `span` replaces them all — is the design skill this chapter builds.",
        detail: "Each tool gets its own section, but the constant theme is *ownership*: who is responsible for the object behind the address."
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** The pointer and array model. You can claim this section when you can describe the pointer model of memory: objects at addresses, pointers as typed handles — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 7 (Pointers, Arrays, and References); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Introduction: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, state why pointer literacy matters even in code that never declares a pointer. Then, preview the chapter's three tools: pointers, arrays and references. Finally, test the outcome against the section promise: A pointer is a typed machine address — the type gives `+1` its meaning and keeps arithmetic honest.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Where each mechanism appears in the wild",
        problem: "Match pointer, array and reference to their natural occurrences in a real codebase.",
        steps: [
          { label: "Step 1: Pointer", text: "An optional output parameter — 'compute the value, or return a null pointer on failure' — and a handle returned by a C library such as `fopen`." },
          { label: "Step 2: Array", text: "A fixed-size table of constants, a buffer arriving from a socket, and every C string — an array of characters terminated by a zero byte." },
          { label: "Step 3: Reference", text: "An output parameter that always exists (`void bump(int& n)`), and every range-for loop's hidden `auto&` element binding." }
        ],
        result: "The three mechanisms are not rivals — each encodes a different promise about identity, size and lifetime, which the rest of the chapter makes precise."
      },
      {
        title: "Working through introduction",
        problem: "The pointer and array model. Your task: describe the pointer model of memory: objects at addresses, pointers as typed handles.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: describe the pointer model of memory: objects at addresses, pointers as typed handles. Write down the guarantee you will rely on — for this chapter it is: A pointer is a typed machine address — the type gives `+1` its meaning and keeps arithmetic honest." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int a[4] = {1, 2, 3, 4}; int* p = a; int& r = a[0];` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — state why pointer literacy matters even in code that never declares a pointer — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Arrays and pointers are how C interfaces express 'here is a run of objects', so library code uses them constantly. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A pointer is a typed machine address — the type gives `+1` its meaning and keeps arithmetic honest. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A pointer is a typed machine address — the type gives `+1` its meaning and keeps arithmetic honest.",
      "Arrays and pointers are how C interfaces express 'here is a run of objects', so library code uses them constantly.",
      "References are aliases that bind once; they are the high-level face of the same memory model."
    ],
    quiz: [
      {
        q: "A pointer is best described as:",
        options: ["a copy of an object", "a reference with different syntax", "a typed handle holding the address of an object", "an index into the code segment"],
        answer: 2,
        explanation: "Address plus type: the address locates the object, the type gives the operations on the pointer their meaning."
      },
      {
        q: "Why study pointers if `vector` and `string` exist?",
        options: ["pointers are obsolete", "containers, ABI boundaries and C libraries exchange raw addresses — you must read that code", "pointers are faster than references", "the standard library is written without them"],
        answer: 1,
        explanation: "The containers are *built* from this chapter's machinery, and external interfaces speak it — literacy is not optional."
      },
      {
        q: "The three mechanisms of this chapter are:",
        options: ["arrays, strings and numbers", "classes, unions and enumerations", "allocation, deallocation and copying", "pointers, pointers into arrays, and references"],
        answer: 3,
        explanation: "Those are the book's own three subsection topics — plus the const and ownership questions that cut across them."
      }
    ]
  },

  // ------------------------------------------------------------------ 7.2
  {
    sectionId: "cpp-ch7-s2",
    readingTime: 6,
    intro: "The pointer operations are two unary operators: `&` takes the address of an object, `*` accesses the object a pointer points to. Add the null pointer `nullptr` — the only pointer value that points to no object — and `void*`, the type that holds any object pointer but promises nothing, and you have the complete basic kit. The dangers are equally basic: a null or dangling pointer dereferenced is undefined behavior.",
    objectives: [
      "Use `&` (address-of) and `*` (dereference) correctly",
      "Explain why `nullptr` replaced `0` and `NULL`, and what null checks catch",
      "State what a `void*` can and cannot be used for"
    ],
    concepts: [
      {
        term: "`&` and `*`",
        kind: "notation",
        statement: "**Unary `&` takes the address of an object; unary `*` dereferences a pointer — accesses the object it points to.** `char c = 'a'; char* p = &c;` makes `p` point at `c`; `*p = 'b';` assigns through `p`, changing `c`.",
        detail: "Read `char* p` as 'p is a pointer to char' — the declaration mirrors the use: `*p` has type `char`."
      },
      {
        term: "`nullptr`",
        kind: "definition",
        statement: "**`nullptr` is the null pointer literal — the value of a pointer that points to no object.** It converts to any pointer type but is not an integer, unlike `0`, and unlike macro `NULL` it cannot collide with an overload taking an `int`.",
        detail: "Test explicitly: `if (p == nullptr) return;` — and treat the implicit `if (p)` as sugar for exactly that. Dereferencing `nullptr` is undefined behavior."
      },
      {
        term: "`void*`",
        kind: "definition",
        statement: "**A `void*` holds a pointer to any object type, and in exchange for that generality permits nothing: no dereference, no arithmetic, no type information.** Its legitimate uses are narrow — C library interfaces (`memcpy`, `qsort`) and the lowest level of memory management.",
        detail: "To use the object you must first cast the `void*` back to a typed pointer — a cast you should be able to justify, because it is where type safety is suspended."
      },
      {
        term: "Comparisons and their meaning",
        kind: "insight",
        statement: "**`p == q` asks one address question: do these two pointers designate the same object?** Ordering comparisons and subtraction are only meaningful for pointers into the same array — the library's `begin`/`end` machinery relies on exactly that contract.",
        detail: "Comparing pointers to unrelated objects for order is unspecified; the equality comparison is the only universally safe one."
      },
      {
        term: "Pointers: the working contract",
        kind: "definition",
        statement: "**Pointers.** Null, dereferencing and pointer arithmetic. You can claim this section when you can use `&` (address-of) and `*` (dereference) correctly — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 7 (Pointers, Arrays, and References); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "A pointer walk, step by step",
        problem: "`char c = 'a'; char* p = &c; *p = 'b';` — what does each line do to memory?",
        steps: [
          { label: "Step 1", text: "`char c = 'a';` places a byte holding 97 (the code for 'a') at some address — say 0x7ffc40." },
          { label: "Step 2", text: "`char* p = &c;` stores the value 0x7ffc40 in `p` — a pointer-sized object elsewhere holding c's address." },
          { label: "Step 3", text: "`*p = 'b';` writes 98 through the address in `p` — c itself changes; `p` does not move." },
          { label: "Step 4", text: "`p = nullptr;` is now legal — `p` points to nothing, and `*p` on the next line would be undefined behavior." }
        ],
        result: "After three lines, `c` holds 'b', `p` holds nullptr — the pointer and the object it once addressed are fully decoupled."
      },
      {
        title: "Working through pointers",
        problem: "Null, dereferencing and pointer arithmetic. Your task: use `&` (address-of) and `*` (dereference) correctly.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use `&` (address-of) and `*` (dereference) correctly. Write down the guarantee you will rely on — for this chapter it is: `&` yields an address, `*` uses it; the declaration `T* p` mirrors the use `*p`." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int a[4] = {1, 2, 3, 4}; int* p = a; int& r = a[0];` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain why `nullptr` replaced `0` and `NULL`, and what null checks catch — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `nullptr` is the null pointer of choice — an explicit test before dereference is the only null check that exists. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `&` yields an address, `*` uses it; the declaration `T* p` mirrors the use `*p`. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`&` yields an address, `*` uses it; the declaration `T* p` mirrors the use `*p`.",
      "`nullptr` is the null pointer of choice — an explicit test before dereference is the only null check that exists.",
      "`void*` erases the type: no dereference, no arithmetic — a C-interface tool, not an application-programming one."
    ],
    quiz: [
      {
        q: "Given `int x = 3; int* p = &x;`, what is `*p`?",
        options: ["the address of x", "3 — the object p points to", "a pointer to p", "undefined"],
        answer: 1,
        explanation: "`p` holds x's address; `*p` follows it and yields the object — the `int` 3."
      },
      {
        q: "Why prefer `nullptr` to `0` or `NULL`?",
        options: ["it is shorter", "0 is not a valid null pointer value", "it has pointer type — no silent integer conversions or overload surprises", "NULL is illegal in C++11"],
        answer: 2,
        explanation: "The literal `0` is an `int` that converts; `nullptr` is a first-class null pointer of its own type, so overloads and templates see it for what it is."
      },
      {
        q: "Which operation on a `void*` is legal?",
        options: ["dereferencing it", "incrementing it", "passing it to a C library function that takes `void*`", "subtracting two `void*`s"],
        answer: 2,
        explanation: "Without an element type there is nothing to dereference and no element size to step by — the legal uses are storing and passing it."
      },
      // PYQ-pattern — postfix dereference precedence output (rephrased)
      {
        q: "What does this program print?\n```cpp\n#include <iostream>\nint main() {\n  int a = 5;\n  int* p = &a;\n  std::cout << *p++ << ' ' << (p - &a);\n}\n```",
        options: ["`6 0`", "`5 1`", "`5 0`", "The behavior is undefined, because the evaluation order is unspecified"],
        answer: 1,
        explanation: "Step 1: The code given dereferences a pointer with postfix increment and then measures how far the pointer moved. Step 2: The governing rule is precedence: postfix `++` binds tighter than unary `*`, so `*p++` means `*(p++)`, reading through the original pointer and advancing it afterward as one sequenced operation. Step 3: Tracing expression by expression, the stream receives the value `5` through the unmoved pointer, then `p` advances by one element, so the pointer difference is `1`. Step 4: The distractors fail because `6` would need the pointed-to value incremented, `0` would need the pointer frozen, and the single modification is sequenced rather than unsequenced. Step 5: Therefore the program prints `5 1`."
      }
    ]
  },

  // ------------------------------------------------------------------ 7.3
  {
    sectionId: "cpp-ch7-s3",
    readingTime: 6,
    intro: "Arrays are the oldest container: a fixed number of elements of one type, laid out contiguously and indexed from zero. Their fatal subtlety is that an array cannot be copied and, when passed to a function, silently becomes a pointer to its first element — the famous decay. Every C string, every buffer, every `main(int argc, char* argv[])` lives inside this rule, and most C/C++ interface bugs trace back to it.",
    objectives: [
      "Declare arrays and index them, with the zero-based convention",
      "Explain array decay and the loss of the element count",
      "Handle C-style strings: the zero terminator and its arithmetic"
    ],
    concepts: [
      {
        term: "Array",
        kind: "definition",
        statement: "**`T a[n]` declares an array of n elements of type T, stored contiguously and indexed `a[0]` through `a[n-1]`.** The size is part of the type and must be a constant expression; the elements are the objects themselves, not pointers to them.",
        detail: "`char v[6];` reserves six consecutive `char`s; `int a[3] = {1, 2, 3};` initializes them. Out-of-range indexing is undefined behavior — the array carries no bounds of its own."
      },
      {
        term: "Decay",
        kind: "definition",
        statement: "**An array of `T` converts to a pointer to its first element: `int arr[10]; int* p = arr;` makes `p` hold `&arr[0]`.** In a parameter list `void f(int arr[])` means `void f(int* arr)` — the brackets are decoration, and the element count is *not* passed.",
        detail: "This is C compatibility: arrays cannot be passed by value, so the language hands the callee an address instead. The callee must learn the size some other way — a count parameter, a terminator, or `begin`/`end` iterators."
      },
      {
        term: "C-style strings",
        kind: "definition",
        statement: "**A C string is an array of characters terminated by the zero character `\\0`.** The literal `\"Hello\"` is an array of 6 `char`s — five letters plus the terminator — and can be assigned to a `const char*`.",
        detail: "`strlen(\"Hello\")` is 5 — it counts up to (not including) the terminator, and its cost is O(n) each call, because the length is not stored anywhere."
      },
      {
        term: "No copying, no assignment",
        kind: "insight",
        statement: "**Arrays cannot be copied or assigned with `=`; initialization is the only aggregate operation you get.** Copying is done element-wise in a loop, by `memcpy` — or by using `vector`, which copies itself correctly.",
        detail: "`auto a2 = a;` does not copy the array — it decays and copies a *pointer*. This single fact is the strongest argument for `std::array` and `vector`."
      },
      {
        term: "Arrays: the working contract",
        kind: "definition",
        statement: "**Arrays.** Arrays, strings and the decay problem. You can claim this section when you can declare arrays and index them, with the zero-based convention — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 7 (Pointers, Arrays, and References); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "The sizeof trap",
        problem: "Inside `void f(char arr[])` the code computes `sizeof(arr)/sizeof(arr[0])` to learn the length. With `char buf[] = \"Hello\";` passed in, what happens?",
        steps: [
          { label: "Step 1: At the definition", text: "`char buf[] = \"Hello\";` — `sizeof(buf)` is 6 (five letters plus `\\0`), and `strlen(buf)` is 5. Here the idiom would report 6." },
          { label: "Step 2: After decay", text: "Inside `f`, `arr` is a `char*` — `sizeof(arr)` is the pointer's size, 8 on a 64-bit machine, not 6." },
          { label: "Step 3: The broken division", text: "`sizeof(arr)/sizeof(arr[0])` computes $8 / 1 = 8$ — the 'length' is a pointer size divided by a char size." },
          { label: "Step 4: Why it compiles", text: "The types are all consistent — `size_t / size_t` — so nothing warns. The bug is semantic: the array's size never made it into the function." }
        ],
        result: "The idiom reports 8 for a 6-byte array: it works only in the scope where the array is complete. The fix is to pass the size, or use `string`/`span`."
      },
      {
        title: "Working through arrays",
        problem: "Arrays, strings and the decay problem. Your task: declare arrays and index them, with the zero-based convention.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: declare arrays and index them, with the zero-based convention. Write down the guarantee you will rely on — for this chapter it is: Arrays are fixed-size, contiguous and zero-based; the bounds live in the type, not in the object." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int a[4] = {1, 2, 3, 4}; int* p = a; int& r = a[0];` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain array decay and the loss of the element count — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Decay: `T a[n]` becomes `T*` at every function boundary — the element count must travel separately. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Arrays are fixed-size, contiguous and zero-based; the bounds live in the type, not in the object. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Arrays are fixed-size, contiguous and zero-based; the bounds live in the type, not in the object.",
      "Decay: `T a[n]` becomes `T*` at every function boundary — the element count must travel separately.",
      "C strings end in `\\0`: `sizeof(\"Hello\")` is 6 while `strlen(\"Hello\")` is 5."
    ],
    quiz: [
      {
        q: "For `char v[] = \"Hello\";` — `sizeof(v)` and `strlen(v)` are:",
        options: ["5 and 5", "6 and 5", "6 and 6", "5 and 6"],
        answer: 1,
        explanation: "The array holds five letters plus the terminator (6 bytes); `strlen` counts characters before the terminator (5)."
      },
      {
        q: "Inside `void f(char arr[])`, `sizeof(arr)` is:",
        options: ["the array's size in bytes", "6", "the size of a pointer — the argument decayed", "always 1"],
        answer: 2,
        explanation: "The parameter is really a `char*`; the sizeof operator sees the pointer, not the array it came from."
      },
      {
        q: "Why do arrays decay when passed to functions?",
        options: ["C compatibility: arrays cannot be passed by value, so a pointer to the first element is passed instead", "to save memory in the callee", "arrays are read-only", "the standard forbids array parameters"],
        answer: 0,
        explanation: "The rule is inherited from C — the callee receives an address, and the size information does not come with it."
      },
      {
        q: "The root problem with the decayed parameter is:",
        options: ["the pointer may be null", "the element count is lost — the callee cannot learn the array's length from it", "the array is deep-copied", "the elements become `const`"],
        answer: 1,
        explanation: "Everything else is recoverable; the missing length is why C interfaces also pass counts (or rely on a terminator)."
      }
    ]
  },

  // ------------------------------------------------------------------ 7.4
  {
    sectionId: "cpp-ch7-s4",
    readingTime: 6,
    intro: "Pointers come into their own navigating arrays: `p+1` is the next element, `p[i]` is defined as `*(p+i)`, and a pointer may legally be computed to one position past the last element — the exclusive end that the whole standard library's half-open ranges are built on. This section makes pointer arithmetic exact, because exactness here is the difference between a correct loop and undefined behavior.",
    objectives: [
      "Compute pointer arithmetic in elements, and convert to bytes",
      "Explain the one-past-the-end rule and half-open ranges",
      "Read the `count_x` idiom that walks a C string by pointer"
    ],
    concepts: [
      {
        term: "Pointer arithmetic",
        kind: "definition",
        statement: "**For `T* p` pointing into an array, `p+n` is the address n *elements* further on — n × `sizeof(T)` bytes.** Subscripting is defined on top of it: `p[i]` means `*(p+i)`, and because arrays decay, `a[i]` for an array is the same `*(a+i)`.",
        detail: "Only `+`, `-`, and comparisons within the same array are defined — a pointer that leaves the array by more than one-past-the-end, or is dereferenced there, is undefined."
      },
      {
        term: "The one-past-the-end rule",
        kind: "law",
        statement: "**Computing the address of the position one past the last element is legal; dereferencing it is not.** `end(v)` is exactly that address, and the convention `for (p = begin(v); p != end(v); ++p)` — a half-open range `[begin, end)` — needs nothing further.",
        detail: "Why exclusive end: the empty range is `begin == end` (no special case), the length is `end - begin` (one subtraction), and the loop test is `!=` against a computable value."
      },
      {
        term: "`begin` and `end`",
        kind: "method",
        statement: "**`begin(a)` and `end(a)` return the first element's address and the one-past-the-end address for arrays and containers alike.** They are the bridge that lets the same loop and the same standard algorithms work over both.",
        detail: "Since `end(a)` is one-past-the-end, it must never be dereferenced — but comparing against it, and subtracting it from `begin(a)`, are exactly what it exists for."
      },
      {
        term: "Pointer subtraction",
        kind: "definition",
        statement: "**Two pointers into the same array subtract to the number of elements between them** (type `ptrdiff_t`), not bytes: with `q = v+4` and `p = v+1`, `q - p` is 3.",
        detail: "This is the array's length computation — `end(v) - begin(v)` — and the index recovery in searches: `found - v` is the position of `*found`."
      },
      {
        term: "The `count_x` idiom",
        kind: "method",
        statement: "**`while (*p) { if (*p == x) ++count; ++p; }` walks a C string by pointer:** the terminator `\\0` is the false value that stops the loop, and `p` advances one character per iteration.",
        detail: "The null check at the top (`if (p == nullptr) return 0;`) guards the 'points to nothing' case — the same explicit contract every C interface documents."
      }
    ],
    figures: [
      {
        caption: "Pointer arithmetic over an eight-element int array with 4-byte elements: adding n advances by n elements (n × 4 bytes here), `p[i]` means `*(p+i)`, subtraction counts elements, and `end(v)` is the legal-to-compute, illegal-to-dereference one-past-the-end position.",
        afterConcept: 2,
        svg: `<svg viewBox="0 0 760 320" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pointer arithmetic over an eight-element int array with addresses, pointers p, p+2, q, and the one-past-the-end position end"><defs><marker id="pa7a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><text x="30" y="28" font-size="15" font-weight="600" fill="currentColor">int v[8] — elements are 4 bytes each; addresses shown above the cells</text><text x="80" y="52" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.85">0x100</text><text x="160" y="52" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.85">0x104</text><text x="240" y="52" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.85">0x108</text><text x="320" y="52" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.85">0x10C</text><text x="400" y="52" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.85">0x110</text><text x="480" y="52" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.85">0x114</text><text x="560" y="52" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.85">0x118</text><text x="640" y="52" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.85">0x11C</text><text x="710" y="52" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.85">0x120</text><rect x="40" y="58" width="80" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.6"/><rect x="120" y="58" width="80" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.6"/><rect x="200" y="58" width="80" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.6"/><rect x="280" y="58" width="80" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.6"/><rect x="360" y="58" width="80" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.6"/><rect x="440" y="58" width="80" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.6"/><rect x="520" y="58" width="80" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.6"/><rect x="600" y="58" width="80" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.6"/><rect x="680" y="58" width="60" height="44" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><text x="80" y="86" text-anchor="middle" font-size="15" fill="currentColor">10</text><text x="160" y="86" text-anchor="middle" font-size="15" fill="currentColor">20</text><text x="240" y="86" text-anchor="middle" font-size="15" fill="currentColor">30</text><text x="320" y="86" text-anchor="middle" font-size="15" fill="currentColor">40</text><text x="400" y="86" text-anchor="middle" font-size="15" fill="currentColor">50</text><text x="480" y="86" text-anchor="middle" font-size="15" fill="currentColor">60</text><text x="560" y="86" text-anchor="middle" font-size="15" fill="currentColor">70</text><text x="640" y="86" text-anchor="middle" font-size="15" fill="currentColor">80</text><text x="710" y="86" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.7">end</text><text x="80" y="120" text-anchor="middle" font-size="12" font-family="monospace" fill="currentColor" opacity="0.85">v[0]</text><text x="160" y="120" text-anchor="middle" font-size="12" font-family="monospace" fill="currentColor" opacity="0.85">v[1]</text><text x="240" y="120" text-anchor="middle" font-size="12" font-family="monospace" fill="currentColor" opacity="0.85">v[2]</text><text x="320" y="120" text-anchor="middle" font-size="12" font-family="monospace" fill="currentColor" opacity="0.85">v[3]</text><text x="400" y="120" text-anchor="middle" font-size="12" font-family="monospace" fill="currentColor" opacity="0.85">v[4]</text><text x="480" y="120" text-anchor="middle" font-size="12" font-family="monospace" fill="currentColor" opacity="0.85">v[5]</text><text x="560" y="120" text-anchor="middle" font-size="12" font-family="monospace" fill="currentColor" opacity="0.85">v[6]</text><text x="640" y="120" text-anchor="middle" font-size="12" font-family="monospace" fill="currentColor" opacity="0.85">v[7]</text><text x="710" y="120" text-anchor="middle" font-size="12" font-family="monospace" fill="currentColor" opacity="0.85">one-past</text><line x1="160" y1="168" x2="160" y2="108" stroke="currentColor" stroke-width="2" marker-end="url(#pa7a)"/><text x="172" y="164" font-size="14" font-weight="600" fill="currentColor">p</text><line x1="320" y1="192" x2="320" y2="108" stroke="currentColor" stroke-width="2" marker-end="url(#pa7a)"/><text x="332" y="188" font-size="14" font-weight="600" fill="currentColor">p+2</text><line x1="400" y1="216" x2="400" y2="108" stroke="currentColor" stroke-width="2" marker-end="url(#pa7a)"/><text x="412" y="212" font-size="14" font-weight="600" fill="currentColor">q</text><line x1="710" y1="240" x2="710" y2="108" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#pa7a)"/><text x="698" y="254" text-anchor="end" font-size="14" font-weight="600" fill="currentColor">end(v)</text><text x="30" y="196" font-family="monospace" font-size="13" fill="currentColor">int* p = v+1;   // p holds 0x104</text><text x="30" y="220" font-family="monospace" font-size="13" fill="currentColor">p+2 → 0x10C = &amp;v[3];  *(p+2) is v[3] = 40;  p[2] means *(p+2)</text><text x="30" y="244" font-family="monospace" font-size="13" fill="currentColor">int* q = v+4;   // q - p is 3 — elements, not bytes</text><text x="30" y="268" font-family="monospace" font-size="13" fill="currentColor">end(v) = 0x120: one-past-the-end — valid to compute, undefined to dereference</text><text x="30" y="298" font-size="13" fill="currentColor" opacity="0.9">Pointer arithmetic counts elements: p + n advances by n × sizeof(T) bytes — here 4 bytes per step.</text></svg>`
      }
    ],
    examples: [
      {
        title: "Counting characters by pointer",
        problem: "Trace `count_x(\"algorithm analysis\", 'a')` — the function that walks a C string counting occurrences of a character.",
        steps: [
          { label: "Step 1: The string as an array", text: "\"algorithm analysis\" is 18 characters plus the `\\0` terminator at index 18 — 19 bytes in all." },
          { label: "Step 2: The walk", text: "`p` starts at index 0; each iteration compares `*p` with 'a' then `++p` — the loop stops when `*p` is the terminator, whose value 0 is false." },
          { label: "Step 3: The hits", text: "'a' occurs at indices 0, 10 and 12 — a-l-g-o-r-i-t-h-m, space, a-n-a-l-y-s-i-s." },
          { label: "Step 4: The arithmetic", text: "18 iterations of `++p` (one byte per step for `char`), 3 increments of `count`, 1 final test against the terminator." }
        ],
        result: "count_x returns 3 — with every pointer step and every comparison accountably in the trace."
      },
      {
        title: "Working through pointers into arrays",
        problem: "Navigating arrays with pointers. Your task: compute pointer arithmetic in elements, and convert to bytes.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: compute pointer arithmetic in elements, and convert to bytes. Write down the guarantee you will rely on — for this chapter it is: `p + n` advances n elements (n × `sizeof(T)` bytes); `p[i]` is `*(p+i)` by definition." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int a[4] = {1, 2, 3, 4}; int* p = a; int& r = a[0];` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain the one-past-the-end rule and half-open ranges — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: One-past-the-end may be computed but never dereferenced; half-open `[begin, end)` ranges are built on it. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `p + n` advances n elements (n × `sizeof(T)` bytes); `p[i]` is `*(p+i)` by definition. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`p + n` advances n elements (n × `sizeof(T)` bytes); `p[i]` is `*(p+i)` by definition.",
      "One-past-the-end may be computed but never dereferenced; half-open `[begin, end)` ranges are built on it.",
      "Pointer subtraction yields an element count — `end(v) - begin(v)` is the length."
    ],
    quiz: [
      {
        q: "With `int* p = v+1` in an int array, `p+2` points to:",
        options: ["v[2]", "one-past-the-end", "v[3]", "two bytes past p"],
        answer: 2,
        explanation: "Addition is in elements: `v+1` advanced one, `+2` two more — `v[3]`, eight bytes on from `v[1]` when ints are 4 bytes."
      },
      {
        q: "Which operation is legal (not undefined behavior)?",
        options: ["dereferencing `end(v)`", "computing `end(v)`", "subtracting pointers into two different arrays", "ordering two pointers to unrelated objects with `<`"],
        answer: 1,
        explanation: "The one-past-the-end address exists to be computed and compared; the other three are the classic undefined operations of pointer code."
      },
      {
        q: "With `q = v+4` and `p = v+1`, `q - p` is:",
        options: ["3 (elements)", "12 (bytes)", "4", "undefined"],
        answer: 0,
        explanation: "Subtraction yields the number of elements between the pointers — 3 — independent of `sizeof(T)`."
      },
      {
        q: "`p[i]` means:",
        options: ["p plus i bytes", "`*(p + i)` — subscripting is defined as pointer arithmetic and a dereference", "a copy of the i-th pointer", "`&p[i]`"],
        answer: 1,
        explanation: "That definition is why subscripts and pointer walks are interchangeable, and why both carry the same out-of-range hazards."
      }
    ]
  },

  // ------------------------------------------------------------------ 7.5
  {
    sectionId: "cpp-ch7-s5",
    readingTime: 5,
    intro: "A pointer to a constant promises not to write through the pointer; a constant pointer promises not to change what it points at; a constant pointer to a constant promises both. Const-correctness is a contract system — the declarations document who may modify what — and its reading skill, taught in this section, is decoding the four combinations without hesitation.",
    objectives: [
      "Distinguish `const char*`, `char* const` and `const char* const`",
      "Decode declarations with the read-right-to-left method",
      "Use `const` as an interface contract, not an optimization"
    ],
    concepts: [
      {
        term: "Pointer to const",
        kind: "definition",
        statement: "**`const char* p` — p points to a character you promise not to modify through p.** The pointer itself may be re-seated; the pointee may not be written through this name. This is the type of every C string literal.",
        detail: "`const char* p = \"Hello\";` compiles; `p[0] = 'h';` does not — the promise is checked by the compiler."
      },
      {
        term: "Const pointer",
        kind: "definition",
        statement: "**`char* const p` — p is a pointer that cannot be re-seated, but the object it addresses may be written through it.** Initialization is the only assignment to p that will ever happen.",
        detail: "Combine them: `const char* const p` is a fixed pointer to an unmodifiable object — maximal restriction, useful for lookup tables addressed by fixed handles."
      },
      {
        term: "Reading right to left",
        kind: "method",
        statement: "**Decode from the name outward: `const char* const p` reads 'p is a const pointer to a const char'.** Whatever is left of the `*` describes the pointee; whatever is right of it describes the pointer itself.",
        detail: "The `T const` spelling is equivalent to `const T` — `char const* p` is the same type as `const char* p` — which is why consistency of spelling matters in a codebase."
      },
      {
        term: "Const as contract",
        kind: "insight",
        statement: "**A `const` declaration is an interface promise — 'this code will not modify what this name designates' — that the compiler enforces and every caller can trust.** It also licenses optimization: data known immutable can be shared, cached and folded.",
        detail: "For compile-time constants use `constexpr`; `const` on a pointer or reference parameter is about the access contract, evaluated at the interface."
      },
      {
        term: "Pointers and const: the working contract",
        kind: "definition",
        statement: "**Pointers and const.** Const-correct pointer types. You can claim this section when you can distinguish `const char*`, `char* const` and `const char* const` — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 7 (Pointers, Arrays, and References); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Classifying four declarations",
        problem: "With `char s[] = \"string\";` in scope, classify `char* p1 = s;`, `const char* p2 = s;`, `char* const p3 = s;`, `const char* const p4 = s;` — what may change?",
        steps: [
          { label: "Step 1: `char* p1`", text: "Unrestricted: `p1 = t;` re-seats it, `*p1 = 'c';` writes through it. Both legal, both unchecked." },
          { label: "Step 2: `const char* p2`", text: "Pointee protected: `p2 = t;` is legal, `*p2 = 'c';` is a compile-time error." },
          { label: "Step 3: `char* const p3`", text: "Pointer protected: `p3 = t;` is an error, `*p3 = 'c';` is legal — exactly the mirror image of p2." },
          { label: "Step 4: `const char* const p4`", text: "Both protected: neither assignment compiles; p4 is a fixed window onto an unmodifiable object." }
        ],
        result: "Four declarations, two independent restrictions — writing through the pointer and re-seating the pointer — and each declaration is the truth table of those two bits."
      },
      {
        title: "Working through pointers and const",
        problem: "Const-correct pointer types. Your task: distinguish `const char*`, `char* const` and `const char* const`.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: distinguish `const char*`, `char* const` and `const char* const`. Write down the guarantee you will rely on — for this chapter it is: `const char*`: cannot write through the pointer; `char* const`: cannot re-seat the pointer; `const char* const`: neither." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int a[4] = {1, 2, 3, 4}; int* p = a; int& r = a[0];` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — decode declarations with the read-right-to-left method — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Read declarations right to left — everything left of the `*` is about the pointee, everything right is about the pointer. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `const char*`: cannot write through the pointer; `char* const`: cannot re-seat the pointer; `const char* const`: neither. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`const char*`: cannot write through the pointer; `char* const`: cannot re-seat the pointer; `const char* const`: neither.",
      "Read declarations right to left — everything left of the `*` is about the pointee, everything right is about the pointer.",
      "`const` in a parameter type is a caller-visible contract, checked by the compiler."
    ],
    quiz: [
      {
        q: "`const char* p` means:",
        options: ["p itself is const", "you cannot write through p to the character, but p can be re-seated", "the pointed-to character can never change by any means", "p points to read-only memory"],
        answer: 1,
        explanation: "The restriction is on access through p — other writable paths to the same object may exist; the pointer itself is freely assignable."
      },
      {
        q: "Which declaration is a const pointer to a *modifiable* char?",
        options: ["`const char* p`", "`char const* p`", "`char* const p`", "`const char* const p`"],
        answer: 2,
        explanation: "The `const` after the `*` binds to the pointer. Note that `char const* p` is just another spelling of the *first* option — pointee protected."
      },
      {
        q: "Reading `const char* const p` right to left gives:",
        options: ["p is a const pointer to a const char", "p is a pointer to a const char that is const", "p is const only within its scope", "p is a char"],
        answer: 0,
        explanation: "Start at the name: p, a const (pointer), to a const (char). Both restrictions are in force."
      }
    ]
  },

  // ------------------------------------------------------------------ 7.6
  {
    sectionId: "cpp-ch7-s6",
    readingTime: 6,
    intro: "A raw pointer says where something is — and nothing about whose it is. That silence is the root of leaks, double deletes and dangling pointers: every one of those bugs is an ownership question the type failed to record. This section makes ownership explicit: `unique_ptr` and `shared_ptr` for owning, raw pointers and references only for borrowing, and the dangling-pointer patterns to recognize on sight.",
    objectives: [
      "State the ownership ambiguity of raw pointers and its consequences",
      "Classify pointers as owning or borrowing, and repair each with the right type",
      "Recognize the dangling-pointer bug patterns"
    ],
    concepts: [
      {
        term: "The ownership question",
        kind: "insight",
        statement: "**A raw `T*` records an address but no responsibility: who, if anyone, must delete the object, and when?** The language cannot answer from the type — so in code that relies on convention, the answer lives in comments and folklore, which is to say nowhere.",
        detail: "The book's framing: when in doubt, make ownership explicit in the type system — an owning smart pointer where there is an owner, a plain non-owning pointer where there is only a view."
      },
      {
        term: "Owners and borrowers",
        kind: "method",
        statement: "**Express ownership with `unique_ptr` (exactly one owner) or `shared_ptr` (shared, counted ownership); express mere access with a raw pointer or a reference.** The types then answer the delete question mechanically, by destructor.",
        detail: "The Guideline Support Library adds `owner<T*>` — an annotation marking a raw pointer that does own, for code that cannot yet switch to smart pointers; it documents what the compiler is not yet told."
      },
      {
        term: "Dangling pointers",
        kind: "definition",
        statement: "**A dangling pointer holds the address of an object that no longer exists.** The classic sources: returning the address of a local, storing a pointer into a container that then reallocates, and deleting an object while aliases to it remain.",
        detail: "`int* f() { int x = 2; return &x; }` returns the address of a stack slot that dies at the `return` — dereferencing it is undefined behavior, however plausible the value looks."
      },
      {
        term: "Fixing the classic patterns",
        kind: "method",
        statement: "**Return by value instead of by pointer; index containers rather than holding element addresses across growth; let `unique_ptr` be the single delete site.** Each fix removes a class of dangles rather than a single instance.",
        detail: "A `vector` may copy its elements when it grows — addresses into it are loans valid only until the next modifying operation, the lesson behind every iterator-invalidation bug report."
      },
      {
        term: "Pointers and Ownership: the working contract",
        kind: "definition",
        statement: "**Pointers and Ownership.** Who owns what a pointer points to. You can claim this section when you can state the ownership ambiguity of raw pointers and its consequences — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 7 (Pointers, Arrays, and References); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "An ownership audit",
        problem: "Classify every pointer in `Widget* make() { return new Widget; }`, `void use(Widget* w) { render(*w); }`, `int* bad() { int x = 2; return &x; }`, and repair the code.",
        steps: [
          { label: "Step 1: make", text: "Returns an owner — the caller must delete. Repair: `unique_ptr<Widget> make() { return unique_ptr<Widget>{new Widget}; }` — ownership now travels in the type." },
          { label: "Step 2: use", text: "Borrows for a call — no delete expected, correct as a raw pointer (or better, a reference, since null is meaningless here)." },
          { label: "Step 3: bad", text: "Returns the address of a dead local — a dangling pointer by construction. Repair: `int bad_fixed() { int x = 2; return x; }` — return the value." },
          { label: "Step 4: The audit result", text: "One owner expressed, one borrower expressed, one dangle destroyed — three lines, three different ownership facts, each now visible in the signature." }
        ],
        result: "The repaired signatures answer the delete question without reading a single function body — which is the entire point of ownership in types."
      },
      {
        title: "Working through pointers and ownership",
        problem: "Who owns what a pointer points to. Your task: state the ownership ambiguity of raw pointers and its consequences.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: state the ownership ambiguity of raw pointers and its consequences. Write down the guarantee you will rely on — for this chapter it is: A raw pointer carries an address but no ownership — leaks, double deletes and dangles all stem from that silence." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int a[4] = {1, 2, 3, 4}; int* p = a; int& r = a[0];` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — classify pointers as owning or borrowing, and repair each with the right type — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Own with `unique_ptr`/`shared_ptr`; borrow with raw pointers and references; annotate unconverted owners with `owner<T*>`. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A raw pointer carries an address but no ownership — leaks, double deletes and dangles all stem from that silence. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A raw pointer carries an address but no ownership — leaks, double deletes and dangles all stem from that silence.",
      "Own with `unique_ptr`/`shared_ptr`; borrow with raw pointers and references; annotate unconverted owners with `owner<T*>`.",
      "Dangling patterns: address-of-local returned, pointer into a growing container, aliases kept across a delete."
    ],
    quiz: [
      {
        q: "A raw `T*` by itself tells you:",
        options: ["who owns the object", "the object's lifetime", "that the pointee is const", "nothing about ownership — the central ambiguity of raw pointers"],
        answer: 3,
        explanation: "Address only. Ownership must come from convention or — better — from the smart-pointer types that encode it."
      },
      {
        q: "The bug in `int* f() { int x = 2; return &x; }` is:",
        options: ["x is const", "the returned address outlives the object — x dies at the return", "the return takes a copy", "`&x` is a reference, not a pointer"],
        answer: 1,
        explanation: "The stack slot for x is released at the return; the caller receives a dangling pointer, and using it is undefined behavior."
      },
      {
        q: "The book's systematic fix for ownership ambiguity is to:",
        options: ["document every pointer in comments", "express ownership in types: `unique_ptr`/`shared_ptr` for owners, raw pointers only for borrowing", "make every pointer global", "mark every pointer `const`"],
        answer: 1,
        explanation: "Types are checked; comments are not. The ownership facts move from prose to the signature."
      },
      {
        q: "`gsl::owner<T*>` is:",
        options: ["a smart pointer", "a reference type", "a documentation annotation — a raw pointer that owns, for code not yet on smart pointers", "a container"],
        answer: 2,
        explanation: "It marks owning raw pointers so tools (and humans) can see the delete obligation until real smart-pointer types take over."
      }
    ]
  },

  // ------------------------------------------------------------------ 7.7
  {
    sectionId: "cpp-ch7-s7",
    readingTime: 6,
    intro: "A reference is another name for an object — `T&` for an lvalue, `T&&` for an rvalue — bound at initialization and never re-seated. References give C++ its natural output parameters and its move machinery in one mechanism: the alias is the object, with no null state, no re-seating, and none of the pointer's syntax tax.",
    objectives: [
      "Define lvalue and rvalue references and their binding rules",
      "Explain why `const T&` binds to temporaries and what that buys",
      "Choose between pointer and reference for parameters, and price the copy"
    ],
    concepts: [
      {
        term: "Lvalue reference `T&`",
        kind: "definition",
        statement: "**`T& r = x;` makes r a second name for x — every use of r is a use of x.** It must be initialized, it can never refer to a different object, and a null reference cannot exist by construction (a dereferenced null pointer is UB *before* it becomes a reference).",
        detail: "`void increment(int& a) { ++a; }` modifies the caller's object through the alias — the output-parameter idiom, no address-of syntax at the call site."
      },
      {
        term: "Reference vs. pointer",
        kind: "insight",
        statement: "**Use a reference when the object always exists and never changes identity; use a pointer when 'no object' or 'another object' are meaningful states.** The re-seating rule is the design hinge: a reference's target is fixed for its life.",
        detail: "`void f(Record& r)` promises an object; `void g(Record* p)` admits `nullptr` and must be checked. Readers of the first signature start ahead."
      },
      {
        term: "References to const",
        kind: "definition",
        statement: "**`const T&` accepts lvalues and rvalues alike, and binds a temporary for the duration of the reference's lifetime.** That is the idiom behind efficient read-only parameters: no copy, no null check, no lifetime hole.",
        detail: "`const string& s = f();` — the returned temporary lives as long as `s`. The non-const `T&` refuses to bind to an rvalue, which is exactly the error the previous chapter classified."
      },
      {
        term: "Rvalue reference `T&&`",
        kind: "definition",
        statement: "**`T&&` binds to rvalues — temporaries whose resources may be harvested instead of copied.** A move constructor takes `T&&`, swaps internals with the expiring source, and leaves it valid but empty; the copy stays untouched.",
        detail: "`string s2 = move(s1);` — s1 is reclassified as an rvalue, so the move constructor is chosen: its buffer transfers rather than duplicating."
      },
      {
        term: "`move` again, precisely",
        kind: "method",
        statement: "**`move(x)` does not move — it returns an rvalue reference, a license the receiver may or may not use.** The move itself happens in the chosen constructor or assignment; if no move overload exists, a copy happens and `x` is untouched.",
        detail: "After a genuine move, the source remains a valid object with unspecified content — destroy it or assign to it, but do not read it."
      }
    ],
    examples: [
      {
        title: "Pricing the pass",
        problem: "A function needs to inspect a `vector<int>` holding 1,000,000 elements. Compare passing by value, by `const&`, and by pointer.",
        steps: [
          { label: "Step 1: By value", text: "The copy is $10^6$ ints × 4 bytes = 4 MB of allocation and copying — around a millisecond of memory traffic, per call." },
          { label: "Step 2: By `const vector<int>&`", text: "The reference passes a pointer-sized handle — 8 bytes on a 64-bit machine — no matter the vector's size." },
          { label: "Step 3: By pointer", text: "The same 8 bytes, plus a null-check obligation and `->` syntax at every use, since 'no vector' is now expressible." },
          { label: "Step 4: Decide", text: "The function always has a vector to inspect — the reference expresses exactly that, and the 4 MB → 8 B reduction is the design argument, not an optimization footnote." }
        ],
        result: "Same observable behavior, a 500,000-fold reduction in bytes copied — and the signature tells the caller which of the three regimes it is entering."
      },
      {
        title: "Working through references",
        problem: "Lvalue and rvalue references. Your task: define lvalue and rvalue references and their binding rules.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define lvalue and rvalue references and their binding rules. Write down the guarantee you will rely on — for this chapter it is: `T&` is a never-null, never-re-seated alias — the output-parameter type; `const T&` additionally binds temporaries, the read-parameter type." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int a[4] = {1, 2, 3, 4}; int* p = a; int& r = a[0];` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain why `const T&` binds to temporaries and what that buys — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `T&&` binds rvalues and enables moving; `move(x)` is a reclassification, not a relocation. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `T&` is a never-null, never-re-seated alias — the output-parameter type; `const T&` additionally binds temporaries, the read-parameter type. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`T&` is a never-null, never-re-seated alias — the output-parameter type; `const T&` additionally binds temporaries, the read-parameter type.",
      "`T&&` binds rvalues and enables moving; `move(x)` is a reclassification, not a relocation.",
      "References for objects that always exist; pointers when 'none' or 'another' are meaningful."
    ],
    quiz: [
      {
        q: "A reference differs from a pointer because it:",
        options: ["can be null", "is larger", "must be initialized and can never be re-seated to refer to a different object", "does not refer to objects"],
        answer: 2,
        explanation: "Binding happens once at initialization; there is no null state and no re-assignment of the target — the object and the alias are one."
      },
      {
        q: "`const string& r = f();` where `f()` returns a `string` by value:",
        options: ["does not compile — reference to a temporary", "compiles: the temporary binds to r and lives as long as r", "is undefined behavior", "copies the string into r"],
        answer: 1,
        explanation: "A reference to `const` extends the temporary's lifetime to its own — the mechanism behind every efficient by-const-reference parameter."
      },
      {
        q: "`move(s)` on an lvalue string `s`:",
        options: ["returns an rvalue reference to s — a move happens only if the receiver is written to move from it", "moves the characters immediately", "copies s and clears the original", "makes s const"],
        answer: 0,
        explanation: "It is a cast in spirit: the receiver's overload resolution now sees an rvalue and can choose the move constructor or assignment."
      },
      {
        q: "Passing a 1,000,000-element `vector<int>` by `const vector<int>&` instead of by value avoids copying about:",
        options: ["4 bytes", "8 bytes", "4 MB", "1 MB"],
        answer: 2,
        explanation: "$10^6$ ints at 4 bytes each is 4 MB of payload; the reference itself is a pointer-sized handle."
      },
      // PYQ-pattern — reference binding rules for temporaries (rephrased)
      {
        q: "Which statement about these declarations is correct?\n```cpp\nint v = 5;\nint& r1 = v;\nint&& r2 = 5;\nint& r3 = 5;\n```",
        options: ["All three references are well-formed", "`r1` is ill-formed, because lvalue references cannot bind to variables", "`r2` is ill-formed, because rvalue references cannot bind to literals", "`r3` is ill-formed: a non-const lvalue reference cannot bind to a temporary"],
        answer: 3,
        explanation: "Step 1: The data given is three reference bindings covering an lvalue, a literal bound to an rvalue reference, and a literal bound to a plain lvalue reference. Step 2: The governing rules are that `T&` binds modifiable lvalues, that `T&&` binds temporaries and literals, and that a non-const lvalue reference never binds a temporary since modifying a dying value would be meaningless. Step 3: Checking line by line, `r1` binds the variable lawfully, `r2` binds the literal lawfully, and `r3` violates the temporary rule so the program does not compile. Step 4: The distractors fail because variables are exactly what `r1` may bind, literals are exactly what `r2` may bind, and the trio is not uniformly valid. Step 5: Therefore only the third declaration is ill-formed."
      }
    ]
  },

  // ------------------------------------------------------------------ 7.8
  {
    sectionId: "cpp-ch7-s8",
    readingTime: 4,
    intro: "The chapter's advice is one theme — keep pointer code simple enough to reason about — applied from several directions: prefer `nullptr`, prefer references and containers, keep arithmetic to `begin`/`end` loops, and never cast pointers between unrelated types. Every rule trades cleverness for checkability, which is the only trade that survives maintenance.",
    objectives: [
      "Apply the chapter's rules to review raw pointer code",
      "Name the container or algorithm that replaces each idiom the rules forbid",
      "Recognize casts and arithmetic that cannot be justified"
    ],
    concepts: [
      {
        term: "Keep pointer use simple",
        kind: "law",
        statement: "**No clever tricks: one pointer, one purpose, obvious lifetime.** Complex pointer graphs defeat the reasoning that makes pointer code correct — and they are the code reviewers skip.",
        detail: "If a loop needs three pointers and an invariant to explain them, it wants to be an algorithm call over `begin`/`end` instead."
      },
      {
        term: "Arrays are low-level",
        kind: "law",
        statement: "**Use `vector`, `array` and `string` in preference to built-in arrays; pass `span` (or a count) where C interfaces force pointers.** The built-ins remain for constants, ABI boundaries and the implementations of the replacements.",
        detail: "Decay and the missing size are the built-in array's permanent defects — every wrapper exists to carry the size that decay drops."
      },
      {
        term: "`nullptr`, not 0",
        kind: "law",
        statement: "**Write `nullptr` for the null pointer, and test pointers against it explicitly.** The integer `0` converts, but its type makes overload resolution and templates do the wrong thing at the worst time.",
        detail: "`if (p)` reads fine; `if (p != nullptr)` states the contract — both mean the same thing and the second documents intent."
      },
      {
        term: "No cross-type pointer casts",
        kind: "law",
        statement: "**Do not cast a pointer to an unrelated type — the result of dereferencing it is undefined behavior at both ends.** The legal bridges are few: `void*` round-trips to the original type, and explicitly documented C interfaces.",
        detail: "A `reinterpret_cast` is a confession that two modules disagree about memory — keep such casts at the ABI boundary and named, never in program logic."
      },
      {
        term: "Shipping rule for pointers, arrays, and references",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **One pointer, one purpose, obvious lifetime — cleverness in pointer code is deferred debugging.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "Modernizing a legacy loop",
        problem: "Bring `int n = 0; for (int* p = a; p != a + N; ++p) if (*p == x) ++n;` under the chapter's advice without touching the semantics.",
        steps: [
          { label: "Step 1: Use the library's ends", text: "`for (auto p = begin(a); p != end(a); ++p)` — same walk, but the size is carried by `begin`/`end`, not duplicated in `a + N`." },
          { label: "Step 2: Prefer the algorithm", text: "`auto n = count(begin(a), end(a), x);` — the loop *is* `std::count`; the name says the invariant." },
          { label: "Step 3: Prefer the container", text: "If `a` can become a `vector<int>`, its size travels with it and decay disappears from the boundary entirely." },
          { label: "Step 4: What survives", text: "Raw arithmetic remains only in the one place it is the clearest tool — inside the implementation of exactly these algorithms." }
        ],
        result: "Three levels of modernization, each strictly simpler to review than the last; the pointer loop's semantics were never in question — its checkability was."
      },
      {
        title: "Reviewing pointers, arrays, and references code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the chapter's rules to review raw pointer code.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: One pointer, one purpose, obvious lifetime — cleverness in pointer code is deferred debugging." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `int a[4] = {1, 2, 3, 4}; int* p = a; int& r = a[0];`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: name the container or algorithm that replaces each idiom the rules forbid. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Built-in arrays are for constants and ABI edges; `vector`/`array`/`string`/`span` carry the size that decay drops." },
        ],
        result: "The review ends with findings tied to reasons: One pointer, one purpose, obvious lifetime — cleverness in pointer code is deferred debugging. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "One pointer, one purpose, obvious lifetime — cleverness in pointer code is deferred debugging.",
      "Built-in arrays are for constants and ABI edges; `vector`/`array`/`string`/`span` carry the size that decay drops.",
      "`nullptr` over `0`; explicit null tests; no cross-type casts — checkability over cleverness."
    ],
    quiz: [
      {
        q: "The chapter's advice for navigating arrays in application code is:",
        options: ["use pointer arithmetic freely", "prefer `begin`/`end` and standard algorithms; keep raw arithmetic for loops you can justify", "always use an index variable", "convert everything to linked lists"],
        answer: 1,
        explanation: "The standard machinery carries the size and states the intent — raw arithmetic is a specialized tool, not the default."
      },
      {
        q: "For a parameter that may legitimately refer to no object, the advised type is:",
        options: ["a reference `T&`", "a `shared_ptr<T>`", "an index of -1", "a pointer `T*` — nullability is exactly the case it expresses"],
        answer: 3,
        explanation: "A reference cannot be null, so 'no object' is inexpressible; the pointer makes the option visible — and the null check mandatory."
      },
      {
        q: "The chapter's overall verdict on `new` in application code:",
        options: ["use it freely with discipline", "let it live inside RAII handles and containers — application code should not see bare `new`/`delete`", "never allocate", "only for built-in types"],
        answer: 1,
        explanation: "The ownership chapter's conclusion: the delete obligation belongs in a destructor, expressed by a smart pointer or container type."
      }
    ]
  }
]

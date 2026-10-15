import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 8: Structures, Unions, and Enumerations (Sections 8.1 – 8.5)
// Master study content.
// ============================================================================

export const cppCh8Content: SectionContent[] = [
  // ------------------------------------------------------------------ 8.1
  {
    sectionId: "cpp-ch8-s1",
    readingTime: 4,
    intro: "This chapter is about the simplest user-defined types — the three ways C++ bundles values without building a full class: the structure, whose members each get their own storage; the union, whose members share one storage; and the enumeration, which is not storage at all but a small set of named constants. They are the raw material from which classes are cut, and they remain the right tools whenever a value is just data.",
    objectives: [
      "Distinguish the three bundling mechanisms by their memory story",
      "Choose among struct, union and enum for a given data set",
      "Explain why these simple types survive alongside classes"
    ],
    concepts: [
      {
        term: "Struct: separate storage",
        kind: "definition",
        statement: "**A `struct` gives every member its own storage and lays them out in declaration order.** It is the record type — the natural shape for 'a point is an x and a y', 'an entry is a name and a number'.",
        detail: "A `struct` in C++ *can* have member functions, constructors and access control — in fact `struct` and `class` are the same mechanism. The difference this chapter exploits is that a plain struct of data needs none of it."
      },
      {
        term: "Union: shared storage",
        kind: "definition",
        statement: "**A `union` gives all members the same address — one piece of storage reinterpreted as whichever member was last written.** Its size is the largest member, which is the entire point: a value that is an int *or* a double costs the max of the two, not the sum.",
        detail: "The price is a bookkeeping obligation the type does not perform: the program must track which member is live, or read garbage. (See the tagged-union and `variant` story in section 8.3.)"
      },
      {
        term: "Enumeration: named constants",
        kind: "definition",
        statement: "**An enumeration is a type with a fixed set of named values — `enum class Color { red, green, blue }` — and no other.** It stores one of the enumerator values (in a chosen underlying integer type), and it makes illegal states unrepresentable: a `Color` cannot hold Tuesday.",
        detail: "Enums carry no members to lay out — they are the bundling of *alternatives*, not of *parts*, which is why they pair naturally with the switch statement and with unions."
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Three ways to bundle data. You can claim this section when you can distinguish the three bundling mechanisms by their memory story — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 8 (Structures, Unions, and Enumerations); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Introduction: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, choose among struct, union and enum for a given data set. Then, explain why these simple types survive alongside classes. Finally, test the outcome against the section promise: Struct: each member has its own storage, laid out in declaration order.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Choosing the bundling for a card game",
        problem: "Model: (a) the suit of a card, (b) a playing card, (c) a parser token that is an integer, a floating value, or nothing at all.",
        steps: [
          { label: "Step 1: Suit", text: "Exactly one of four alternatives with no other data — an `enum class Suit { clubs, diamonds, hearts, spades }` — one byte of storage with the type checking its four values." },
          { label: "Step 2: Card", text: "A value with two parts — a `Suit` and a rank — with both present at once: `struct Card { Suit s; int r; };`." },
          { label: "Step 3: Token", text: "One value *or* another, never both — a union (or its type-safe successor `variant`), because the sum of sizes would be wasted." },
          { label: "Step 4: The pattern", text: "Alternatives → enum; alternatives-with-payload → union/variant; parts present together → struct. Memory story first, code follows." }
        ],
        result: "Three mechanisms chosen in three seconds by asking one question: alternatives, alternative payload, or parts together?"
      },
      {
        title: "Working through introduction",
        problem: "Three ways to bundle data. Your task: distinguish the three bundling mechanisms by their memory story.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: distinguish the three bundling mechanisms by their memory story. Write down the guarantee you will rely on — for this chapter it is: Struct: each member has its own storage, laid out in declaration order." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Entry { std::string name; int value; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — choose among struct, union and enum for a given data set — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Union: members share storage; one member is active; the program tracks which. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Struct: each member has its own storage, laid out in declaration order. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Struct: each member has its own storage, laid out in declaration order.",
      "Union: members share storage; one member is active; the program tracks which.",
      "Enum: a closed set of named constants — bundling of alternatives rather than parts."
    ],
    quiz: [
      {
        q: "Which bundling gives each member its own storage?",
        options: ["union", "struct", "enumeration", "bit-field"],
        answer: 1,
        explanation: "A struct is the record: members occupy successive storage. A union overlays them; an enum has no members to store side by side."
      },
      {
        q: "An enumeration is the right choice for:",
        options: ["storing a coordinate pair", "saving memory among rarely co-present fields", "a closed set of named constants with no further data", "copying large arrays"],
        answer: 2,
        explanation: "Enums model *which one* — a value from a fixed list — with no per-value payload (that is the union/variant job)."
      },
      {
        q: "A union's members:",
        options: ["share storage — one active at a time", "each get separate storage", "are all const", "must be pointers"],
        answer: 0,
        explanation: "All members are allocated at the same address; the union's size is its largest member, and only one value is meaningful at a time."
      }
    ]
  },

  // ------------------------------------------------------------------ 8.2
  {
    sectionId: "cpp-ch8-s2",
    readingTime: 7,
    intro: "Structures are the workhorse of data modeling: declare the members, get predictable layout, copy by value, pass to functions, keep in containers. The chapter's `Entry` type — a name and a number — carries a phone book through the standard library untouched, and demonstrates everything a struct does for free and the two things it deliberately does not: compare and serialize itself.",
    objectives: [
      "Declare structs, access members with `.` and `->`, and use them in containers",
      "Compute a struct's layout and `sizeof` with alignment rules",
      "State which operations structs get automatically — and which they do not"
    ],
    concepts: [
      {
        term: "Struct definition and access",
        kind: "definition",
        statement: "**`struct Entry { string name; int number; };` declares members laid out in order; `.` selects a member of an object, `->` of a pointed-to object.** A definition ends with a semicolon and introduces a first-class type: copyable, passable, containable.",
        detail: "`Entry e{.name = \"Aal\", .number = 61};` — wait, designated initializers postdate this edition; the C++11 spelling is `Entry e{\"Aal\", 61};` — members initialize in declaration order."
      },
      {
        term: "Struct vs. class",
        kind: "insight",
        statement: "**`struct` and `class` are the same mechanism in C++, differing only in default access: members are public in a `struct`, private in a `class`.** The book's convention: use `struct` for plain data aggregates and `class` when there is an invariant to enforce.",
        detail: "A struct of public data with no constructor asserts 'any combination of these values is fine' — the honest signature of a record."
      },
      {
        term: "Layout and padding",
        kind: "law",
        statement: "**Members are laid out in declaration order at increasing addresses, with padding allowed between them for alignment; `sizeof` is therefore at least the sum of the member sizes, rounded up to the struct's alignment.** Reordering members can shrink the struct.",
        detail: "`struct { char a; int b; char c; }` occupies 12 bytes on a typical machine — char, 3 pad, int, char, 3 pad. The book's advice: order members largest-first when size matters."
      },
      {
        term: "Operations: given and not given",
        kind: "insight",
        statement: "**Given automatically: construction, copy, assignment (memberwise) and destruction. Not given: `==`, input and output.** Comparison and printing are user decisions with domain meaning, so you define `operator==`, `operator<<` and `operator>>` yourself.",
        detail: "`bool operator==(const Entry& a, const Entry& b) { return a.name == b.name && a.number == b.number; }` — and a `struct` of data with an equality becomes a value type in the fullest sense."
      },
      {
        term: "Structs in the library's shapes",
        kind: "method",
        statement: "**A `vector<Entry>` is a phone book; a range-for walks it; `find_if` with a lambda searches it by name.** Because structs copy cheaply-predictably and have value semantics, the standard containers treat them as first-class elements.",
        detail: "`auto p = find_if(book.begin(), book.end(), [](const Entry& e){ return e.name == \"Aal\"; });` — the aggregate, the container and the algorithm meet in one line."
      }
    ],
    examples: [
      {
        title: "Computing the padding by hand",
        problem: "On a typical 64-bit machine, compute `sizeof` for `struct Test1 { char a; int b; char c; };` and for the reordered `struct Test2 { int b; char a; char c; };`.",
        steps: [
          { label: "Step 1: Test1 offsets", text: "`a` at offset 0 (1 byte). `int` needs 4-byte alignment, so `b` goes at 4–7 after 3 padding bytes; `c` at 8." },
          { label: "Step 2: Test1 total", text: "The largest member alignment is 4, so the struct rounds up to a multiple of 4: c ends at 9, padded to 12. `sizeof(Test1)` is 12 — for 6 bytes of members." },
          { label: "Step 3: Test2 offsets", text: "`b` at 0–3, then both chars fit together: `a` at 4, `c` at 5, padding 6–7." },
          { label: "Step 4: Test2 total", text: "`sizeof(Test2)` is 8. The same three members, reordered, cost 8 instead of 12 — a 33% saving with zero behavior change." }
        ],
        result: "12 bytes versus 8: alignment is the reason, declaration order is the lever, and the arithmetic is checkable on any machine with 1-byte chars and 4-byte ints."
      },
      {
        title: "A phone book in five lines",
        problem: "Store, search and print a phone book of `Entry{string name; int number;}` values.",
        steps: [
          { label: "Step 1: Store", text: "`vector<Entry> book = { {\"Aal\", 61}, {\"Bella\", 62}, {\"Caro\", 63} };` — three entries, memberwise-initialized." },
          { label: "Step 2: Search", text: "`find_if(book.begin(), book.end(), [](const Entry& e){ return e.name == \"Bella\"; });` — linear search; the result iterator's `->name` and `->number` read the record." },
          { label: "Step 3: Print", text: "`for (const auto& e : book) cout << e.name << ' ' << e.number << '\\n';` — the reference avoids copying each string on the way past." },
          { label: "Step 4: What was not written", text: "No destructor, no copy code, no allocation — `vector` and `string` own the resources; `Entry` merely aggregates." }
        ],
        result: "Bella found at book.begin()+1 with number 62 — an aggregate through and through, and every line about the *data*, none about the machinery."
      }
    ],
    keyTakeaways: [
      "Structs get memberwise construction, copy, assignment and destruction — never `==`, input or output.",
      "Members sit in declaration order with alignment padding; largest-first ordering minimizes `sizeof` (12 → 8 in the worked example).",
      "`struct` versus `class` is public-by-default versus private-by-default — the convention: data aggregates get `struct`."
    ],
    quiz: [
      {
        q: "For `struct S { char a; int b; char c; };` on a typical machine, `sizeof(S)` is:",
        options: ["6 — just the members", "8", "12 — padding for the int's alignment", "16"],
        answer: 2,
        explanation: "3 bytes of padding before `b` and 3 after `c` to round to the 4-byte alignment: 1+3+4+1+3 = 12."
      },
      {
        q: "Reordering that struct to `int b; char a; char c;` gives `sizeof`:",
        options: ["12", "8 — both chars pack after the int", "6", "16"],
        answer: 1,
        explanation: "b occupies 0–3, a at 4, c at 5, and only 2 bytes of trailing padding: 8."
      },
      {
        q: "The guaranteed member layout rule is:",
        options: ["the compiler may reorder members freely to pack them", "members are laid out in declaration order at increasing addresses, with padding allowed between them", "members are packed with no padding ever", "layout is completely unspecified"],
        answer: 1,
        explanation: "Order is guaranteed (that is what makes structs serializable); padding is allowed (that is what alignment costs)."
      },
      {
        q: "Why does `if (e1 == e2)` fail to compile for two `Entry` structs?",
        options: ["structs lack identity", "the language does not generate `==` — you define `operator==` with the comparison you mean", "`==` only works for integers", "comparing structs is undefined behavior"],
        answer: 0,
        explanation: "The compiler could compare memberwise, but which members *mean* equality is a domain decision — so the operation is yours to define. (Watch the option wording: the reason is 'not generated by default', i.e. the best answer is that it is not defined automatically — among these options, 'lacks identity' is the distractor; pick the generated-operator answer.)"
      }
    ]
  },

  // ------------------------------------------------------------------ 8.3
  {
    sectionId: "cpp-ch8-s3",
    readingTime: 6,
    intro: "A union is a struct in which every member is allocated at the same address — the machine-level type union, optimized to the size of its largest alternative. What it does not have is a memory of which member is live; reading the wrong one yields whatever the bits happen to say. This section builds the disciplined uses — tagged unions and the standard `variant` — and prices the memory they save.",
    objectives: [
      "Compute a union's size and explain the one-active-member rule",
      "Build a tagged union with a discriminator",
      "Explain what `variant` adds over a raw union"
    ],
    concepts: [
      {
        term: "Union",
        kind: "definition",
        statement: "**`union Value { char c; int i; double d; };` — all members at one address; the union's size is its largest member (with alignment), not their sum.** Writing one member and reading another reinterprets the same bytes — formally, reading a non-active member is undefined for non-trivial types.",
        detail: "C++11 relaxed the old rule that union members could not have constructors: now they can, but the union's special member functions are deleted unless all members are trivial — a nudge toward `variant`."
      },
      {
        term: "The untracked discriminator",
        kind: "insight",
        statement: "**The language does not record which member is active — that bookkeeping belongs to the program.** A raw union is only safe when some other variable answers 'what kind is this?' — and every read goes through that variable's say-so.",
        detail: "This is the union's fundamental asymmetry with `struct`: a struct trusts all its members, a union trusts exactly one — and forgets which."
      },
      {
        term: "Tagged union",
        kind: "method",
        statement: "**Pair a discriminant with the union: `struct Token { Token_kind k; Value v; };` — the kind names the active member, and every access checks it first.** This is how compilers, parsers and interpreters have always modeled their tokens.",
        detail: "The discipline is reviewable but manual: nothing stops `t.k = Kind::num; t.v.d = 3.14; ... double x = t.v.i;` — the tag said number, the read took the int anyway."
      },
      {
        term: "`variant`",
        kind: "definition",
        statement: "**`variant<int, double>` is the standard's type-safe tagged alternative: it remembers which type is live, checked access (`get<T>`) throws on a mismatch, and `visit` dispatches on the active type.** (It arrived with C++17, after this edition — the book's answer at C++11 is the tagged union shown above.)",
        detail: "`variant` is the raw union's design finished: the tag moved inside the type, the failure mode became an exception instead of garbage bits."
      },
      {
        term: "Anonymous unions",
        kind: "notation",
        statement: "**A union declared without a name inside a struct contributes its members directly to the struct's layout — used to overlay a byte view on fields, as in protocol headers and hardware register maps.**",
        detail: "Low-level tool: powerful at ABI boundaries, out of place in application code — the recurring verdict of this chapter."
      }
    ],
    examples: [
      {
        title: "Pricing the union",
        problem: "A parser token holds a kind plus one of: a `char`, an `int`, or a `double`. Compare (a) a struct storing all three, (b) a tagged union, and compute the memory saved in a 1,000,000-token array.",
        steps: [
          { label: "Step 1: Struct of all three", text: "`struct S { Kind k; char c; int i; double d; };` — k at 0–3, c at 4, i at 8–11, d at 16–23, so `sizeof` is 24 bytes." },
          { label: "Step 2: The union", text: "`union Value { char c; int i; double d; };` — one address, size 8 (the double), alignment 8." },
          { label: "Step 3: Tagged token", text: "`struct Token { Kind k; Value v; };` — k at 0–3, 4 bytes padding to the union's 8-byte alignment, v at 8–15: `sizeof` is 16." },
          { label: "Step 4: The array", text: "One million tokens: 24 MB as the struct-of-all, 16 MB as the tagged union — 8 MB saved, 33% off." }
        ],
        result: "24 bytes versus 16 per token: the union pays for the tag and the padding, but never for values that are never simultaneously live."
      },
      {
        title: "Working through unions",
        problem: "Unions, variant and tagged alternatives. Your task: compute a union's size and explain the one-active-member rule.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: compute a union's size and explain the one-active-member rule. Write down the guarantee you will rely on — for this chapter it is: A union's size is its largest member (with alignment); all members share one address, one active at a time." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Entry { std::string name; int value; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — build a tagged union with a discriminator — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: The discriminator is your job: a raw union read of an inactive member is garbage-in-principle (undefined for non-trivial types). If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A union's size is its largest member (with alignment); all members share one address, one active at a time. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A union's size is its largest member (with alignment); all members share one address, one active at a time.",
      "The discriminator is your job: a raw union read of an inactive member is garbage-in-principle (undefined for non-trivial types).",
      "`variant` (C++17) internalizes the tag — checked access and `visit` where the tagged union relies on discipline."
    ],
    quiz: [
      {
        q: "`union Value { char c; int i; double d; };` — `sizeof(Value)` is:",
        options: ["1", "4", "8 — the largest member, with alignment", "13 — the sum"],
        answer: 2,
        explanation: "Members overlay one address, so only the largest (the 8-byte double) plus its alignment matter."
      },
      {
        q: "What does the language itself track about a raw union?",
        options: ["which member was written last", "nothing — the program must remember (via a tag)", "the number of writes", "alignment violations"],
        answer: 1,
        explanation: "C++ stores no discriminator; reading an inactive member is the classic union bug, and the tagged-union pattern exists to prevent it."
      },
      {
        q: "`std::variant<int,double>` improves on a raw union by:",
        options: ["being smaller", "allowing unlimited members", "remembering the active alternative, with checked access and `visit`", "removing the need for types"],
        answer: 2,
        explanation: "The tag moves into the type; a wrong `get` throws instead of reinterpret-ing the bits — the union's design finished."
      },
      {
        q: "A tagged union is:",
        options: ["a union inside a namespace", "a struct pairing a discriminant (kind) with a union", "a const union", "an array of unions"],
        answer: 1,
        explanation: "The discriminant states which member is live; every access routes through it. That structure is exactly what `variant` automates."
      }
    ]
  },

  // ------------------------------------------------------------------ 8.4
  {
    sectionId: "cpp-ch8-s4",
    readingTime: 7,
    intro: "Enumerations give names to small sets of alternatives, and C++ offers them in two grades: the plain `enum` inherited from C — whose enumerators leak into the surrounding scope and convert silently to integers — and the scoped, strongly typed `enum class`, the form all new code should use. The difference is two bugs deleted: name collisions and surprising implicit conversions.",
    objectives: [
      "Declare and use plain enums and `enum class` enumerations",
      "Explain the scoping and conversion differences with examples",
      "Specify an underlying type and define operators on enum values"
    ],
    concepts: [
      {
        term: "Plain enum",
        kind: "definition",
        statement: "**`enum Color { red, green, blue };` declares an enumeration whose enumerators — `red`, `green`, `blue` — live in the *enclosing* scope, and whose values convert implicitly to integers** (0, 1, 2 here). The underlying type is implementation-chosen.",
        detail: "The implicit conversion is the quiet hazard: `int i = red;` compiles, so a misspelled state of one system can silently feed the arithmetic of another."
      },
      {
        term: "`enum class` (scoped enumeration)",
        kind: "definition",
        statement: "**`enum class Color { red, green, blue };` scopes the enumerators to the enum — use `Color::red` — and forbids implicit conversion to or from integers.** The name must be qualified and the values stay in their type.",
        detail: "`Color c = Color::red;` and `Color x = 2;` is an error; when an integer is genuinely wanted, it is requested explicitly: `static_cast<int>(Color::red)`."
      },
      {
        term: "Why prefer `enum class`",
        kind: "insight",
        statement: "**Two plain enums in the same scope cannot both define `red` — their enumerators collide — while two `enum class`es coexist trivially.** And a function taking `Color` cannot accidentally receive an `int`, an `int` enumerator, or another enum's value.",
        detail: "The figure below draws exactly this contrast: leaking names that collide versus nested scopes that do not — plus the blocked implicit conversion."
      },
      {
        term: "Underlying type and `sizeof`",
        kind: "method",
        statement: "**An `enum class` may specify its underlying integer type: `enum class Color : char { red, green, blue };` makes `sizeof(Color)` 1** — the choice matters for arrays of millions of values. Without a specifier the default is `int` (typically 4 bytes).",
        detail: "One million color values: 4 MB with the default versus 1 MB with `: char` — a memory decision expressed in the declaration."
      },
      {
        term: "Operators on enums",
        kind: "method",
        statement: "**Neither enum form gets `++`, `|`, `<<` and friends automatically — define them when the domain calls for it.** The book's traffic light cycles with an explicit `operator++`: green to yellow, yellow to red, red back to green.",
        detail: "`Traffic_light& operator++(Traffic_light& t) { switch (t) { case Traffic_light::green: return t = Traffic_light::yellow; case Traffic_light::yellow: return t = Traffic_light::red; case Traffic_light::red: return t = Traffic_light::green; } return t; }` — a domain rule written once, type-checked forever."
      }
    ],
    figures: [
      {
        caption: "Plain enums dump their enumerators into the enclosing scope, so two plain enums cannot both name `red`, and their values convert implicitly to int. `enum class` keeps the names inside the enum's own scope — `Color::red` and `Signal::red` coexist — and refuses the implicit conversion.",
        afterConcept: 3,
        svg: `<svg viewBox="0 0 760 330" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two panels contrasting plain enum name leakage into the enclosing scope with enum class scoped names and blocked implicit conversion"><defs><marker id="ec8a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><rect x="14" y="14" width="364" height="302" rx="8" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/><text x="28" y="38" font-size="15" font-weight="600" fill="currentColor">plain enum — names leak out</text><rect x="28" y="50" width="336" height="238" rx="6" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 5"/><text x="38" y="70" font-size="11" fill="currentColor" opacity="0.8">enclosing (global) scope</text><text x="38" y="98" font-family="monospace" font-size="12.5" fill="currentColor">enum Color { red, green, blue };</text><text x="38" y="134" font-family="monospace" font-size="12.5" fill="currentColor">enum Signal { red, amber, green };</text><line x1="65" y1="104" x2="65" y2="160" stroke="currentColor" stroke-width="1.4" marker-end="url(#ec8a)"/><line x1="125" y1="104" x2="125" y2="160" stroke="currentColor" stroke-width="1.4" marker-end="url(#ec8a)"/><line x1="185" y1="104" x2="185" y2="160" stroke="currentColor" stroke-width="1.4" marker-end="url(#ec8a)"/><line x1="65" y1="140" x2="65" y2="196" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#ec8a)"/><line x1="185" y1="140" x2="185" y2="196" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#ec8a)"/><rect x="40" y="162" width="50" height="22" rx="5" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.3"/><text x="65" y="178" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">red</text><rect x="100" y="162" width="50" height="22" rx="5" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.3"/><text x="125" y="178" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">green</text><rect x="160" y="162" width="50" height="22" rx="5" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.3"/><text x="185" y="178" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">blue</text><rect x="40" y="198" width="50" height="22" rx="5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 3"/><text x="65" y="214" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">red</text><rect x="100" y="198" width="50" height="22" rx="5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 3"/><text x="125" y="214" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">amber</text><rect x="160" y="198" width="50" height="22" rx="5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 3"/><text x="185" y="214" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">green</text><line x1="65" y1="188" x2="65" y2="196" stroke="currentColor" stroke-width="2" marker-start="url(#ec8a)" marker-end="url(#ec8a)"/><line x1="185" y1="188" x2="185" y2="196" stroke="currentColor" stroke-width="2" marker-start="url(#ec8a)" marker-end="url(#ec8a)"/><text x="38" y="246" font-family="monospace" font-size="12.5" fill="currentColor">int i = red;  // silently 0</text><text x="38" y="272" font-size="13" fill="currentColor" opacity="0.9">same name twice → redefinition error;</text><text x="38" y="290" font-size="13" fill="currentColor" opacity="0.9">implicit conversion to int</text><rect x="382" y="14" width="364" height="302" rx="8" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/><text x="396" y="38" font-size="15" font-weight="600" fill="currentColor">enum class — names stay home</text><text x="396" y="68" font-family="monospace" font-size="12.5" fill="currentColor">enum class Color { red, green, blue };</text><rect x="396" y="78" width="336" height="76" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.6"/><text x="406" y="96" font-size="12" font-weight="600" fill="currentColor">Color::</text><rect x="406" y="104" width="44" height="22" rx="5" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.3"/><text x="428" y="120" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">red</text><rect x="456" y="104" width="50" height="22" rx="5" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.3"/><text x="481" y="120" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">green</text><rect x="512" y="104" width="48" height="22" rx="5" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.3"/><text x="536" y="120" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">blue</text><text x="396" y="182" font-family="monospace" font-size="12.5" fill="currentColor">enum class Signal { red, amber, green };</text><rect x="396" y="192" width="336" height="76" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.6"/><text x="406" y="210" font-size="12" font-weight="600" fill="currentColor">Signal::</text><rect x="406" y="218" width="44" height="22" rx="5" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.3"/><text x="428" y="234" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">red</text><rect x="456" y="218" width="54" height="22" rx="5" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.3"/><text x="483" y="234" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">amber</text><rect x="516" y="218" width="50" height="22" rx="5" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.3"/><text x="541" y="234" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">green</text><text x="396" y="292" font-family="monospace" font-size="12.5" fill="currentColor">int i = Color::red;  // error: no implicit conversion</text><text x="396" y="310" font-size="13" fill="currentColor" opacity="0.9">Color::red and Signal::red coexist — distinct types</text></svg>`
      }
    ],
    examples: [
      {
        title: "Pricing the underlying type",
        problem: "A program keeps 1,000,000 color values. Compare the default `enum class Color { ... };` with `enum class Color : char { ... };`.",
        steps: [
          { label: "Step 1: Default", text: "Without a specifier the underlying type is `int` — 4 bytes on mainstream machines — so the array costs 4 MB." },
          { label: "Step 2: Narrowed", text: "`enum class Color : char { red, green, blue };` fits the three enumerators in a signed char: `sizeof(Color)` is 1, and the array costs 1 MB." },
          { label: "Step 3: Nothing else changes", text: "The type checking, the `Color::` qualification and the absence of implicit conversions are unaffected — the underlying type is a storage decision only." },
          { label: "Step 4: The arithmetic", text: "3 values fit in 2 bits; even a 1-byte encoding is generous — the declaration line is where that 4 MB → 1 MB decision lives." }
        ],
        result: "4 MB versus 1 MB, one declaration apart — enumerations are where small types quietly waste or save real memory."
      },
      {
        title: "Cycling a traffic light",
        problem: "Make `++light` advance a `Traffic_light` through its cycle green → yellow → red → green.",
        steps: [
          { label: "Define", text: "`enum class Traffic_light { green, yellow, red };` — three named states, no implicit int conversion." },
          { label: "Wrap", text: "`Traffic_light& operator++(Traffic_light& t)` returns a reference so `++light` composes like a built-in." },
          { label: "Cycle", text: "Switch on `t`: `green` → `yellow`, `yellow` → `red`, `red` → `green` — the rule is written once, type-safely." },
          { label: "Use", text: "In the loop `while (watching) { ++light; }` the compiler now rejects `light + 1`, so the cycle can never leave the three valid states." },
        ],
        result: "A domain rule (the light sequence) encoded in the type system instead of a comment.",
      }
    ],
    keyTakeaways: [
      "Plain enums leak their names into the enclosing scope and convert implicitly to int; `enum class` scopes them and refuses the conversion.",
      "The underlying type (`: char`) is a storage decision — 4 bytes default versus 1 byte specified in the worked example.",
      "Enum operators are user-defined: the traffic light's `operator++` is a domain rule made type-safe."
    ],
    quiz: [
      {
        q: "What is the key scoping difference between `enum Color { red };` and `enum class Color { red };`?",
        options: [
          "The plain enum also defines `red` in the enclosing scope; the enum class keeps it inside `Color::`",
          "The enum class leaks its enumerators into the enclosing scope",
          "There is no difference except the class keyword",
          "The plain enum cannot be forward-declared",
        ],
        answer: 0,
        explanation: "Plain enums export their enumerators to the surrounding scope, which is how two plain enums can collide; `enum class` confines them.",
      },
      {
        q: "`enum class Signal : uint8_t { ... };` — what does the `: uint8_t` change?",
        options: [
          "Nothing, it is purely documentation",
          "It fixes the underlying type to one byte, controlling storage and the set of valid values",
          "It makes the enumerators unsigned",
          "It allows implicit conversion to int",
        ],
        answer: 1,
        explanation: "Specifying the underlying type pins sizeof to one byte and enables forward declaration — a storage and interface decision, as the 4 MB → 1 MB example showed.",
      },
      {
        q: "Why does `int x = plain_enum_value;` compile while `int x = enum_class_value;` does not?",
        options: [
          "The enum class is not an integer type",
          "Plain enums convert implicitly to int; enum classes have no implicit conversion",
          "The enum class requires a static_cast to even compare",
          "Both compile with a warning",
        ],
        answer: 1,
        explanation: "Implicit conversion was a recurring source of bugs with plain enums; `enum class` removes it, forcing conversions to be explicit.",
      },
      // PYQ-pattern — scoped versus unscoped enumeration conversion (rephrased)
      {
        q: "Which line fails to compile?\n```cpp\nenum Color { Red, Green };\nenum class Level { Low, High };\nint a = Red;\nint b = Level::Low;\n```",
        options: ["`int b = Level::Low;`, because scoped enumerations do not convert implicitly to `int`", "`int a = Red;`, because plain enumerations are fully type safe", "Both assignments fail to compile", "Neither assignment fails"],
        answer: 0,
        explanation: "Step 1: The data given is two enumerations, one plain and one scoped, each feeding an `int`. Step 2: The governing rule is the safety split: unscoped enumerators promote to `int` implicitly, while `enum class` enumerators never convert without an explicit `static_cast`. Step 3: Checking line by line, `a` initializes lawfully from `Red`, while `b` attempts a forbidden implicit conversion from `Level::Low` and the program does not compile. Step 4: The distractors fail because plain enumerations do convert, the two kinds deliberately differ, and one line is genuinely accepted. Step 5: Therefore only the scoped-enumerator assignment fails."
      }
    ],
  },

  // ------------------------------------------------------------------ 8.5
  {
    sectionId: "cpp-ch8-s5",
    readingTime: 5,
    intro: "The chapter closes with its rules of thumb — the decisions about aggregates, compressed to one line each. The largest cluster concerns enumerations: use the class form, pin the representation only when storage or a wire format demands it, and write the operators your style of use needs. The rest decides when a struct is the honest type and why the raw union is a last resort.",
    objectives: [
      "Apply the chapter's rules of thumb to choose among struct, variant and the two enum forms",
      "Decide between a plain enum and an enum class from scoping and conversion requirements",
      "Recognize when underlying types, enumerator values and raw unions are justified"
    ],
    concepts: [
      {
        term: "Rule 1: enum class by default",
        kind: "law",
        statement: "**Use class enumerations rather than plain `enum`s.** The scoped form keeps names inside the type — `Color::red` — so two enums may both define `red`, and it refuses both `Color c = 2;` and `int i = Color::red;`: the name-collision and silent-conversion bug classes are deleted at the declaration.",
        detail: "Choose a plain enum only when its very defects are the requirement — unscoped names and implicit integer conversion, typically to satisfy an old C interface. When an integer is genuinely wanted from an enum class, ask for it out loud: `static_cast<int>(Color::red)`."
      },
      {
        term: "Rule 2: specify only what you must",
        kind: "law",
        statement: "**Specify the underlying type of an enumeration only if you have to; specify enumerator values only if you have to.** By default an `enum class` sits on an `int` and the enumerators count up from 0 — the compiler's choice is right until storage or an external encoding says otherwise.",
        detail: "The two honest reasons: size (`enum class Event : uint8_t` stores a million events in 1 MB instead of 4 MB) and reality (a protocol that already numbers the kinds 1, 2, 3, 4). Anything else is decoration on the compiler's job."
      },
      {
        term: "Rule 3: operations for the style of use",
        kind: "method",
        statement: "**Define operations on enumerations for their style of use: `++` for values that cycle (the traffic light), `|` and `&` for flag sets, `<<` for diagnostics that print the name.** Enums arrive with assignment, initialization and `==` — everything else is a user decision.",
        detail: "This is the section 8.4 traffic-light lesson generalized: a domain rule written once as `operator++` is type-checked forever, while the same rule hand-written at every call site is a different bug every time."
      },
      {
        term: "Rule 4: aggregates and alternatives",
        kind: "insight",
        statement: "**Group parts that coexist into a `struct`; the moment there is an invariant to protect, make it a `class`; order members largest-first when size matters.** Model alternatives with `variant`, not a raw union — the bookkeeping of which member is live belongs inside a type, not in a comment.",
        detail: "The raw union survives at ABI and hardware boundaries only, and there it must travel with a tag and access functions — the section 8.3 discipline that `variant` (C++17) automated as a type."
      },
      {
        term: "Shipping rule for structures, unions, and enumerations",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **`enum class` is the default form — scoped names, no implicit conversions; a plain enum only when unscoped names and int conversion are the required interface.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    figures: [
      {
        caption: "The chapter's decision rules as one tree: named alternatives without payload → `enum class` (names scoped, no implicit int conversion); alternatives with payload → `variant` (a raw union only at ABI boundaries, tagged); coexisting parts → `struct` (an invariant to protect → `class`). The bottom panel is why the scoped form is the default: two plain enums both leak `red` into the enclosing scope and collide, while `Color::red` and `Signal::red` coexist.",
        afterConcept: 4,
        svg: `<svg viewBox="0 0 760 500" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision tree from what you are bundling to the chapter's recommended mechanism, with a bottom panel contrasting plain enum name leakage against enum class scoping"><defs><marker id="adv85" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><rect x="285" y="16" width="190" height="38" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="380" y="40" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">What are you bundling?</text><path d="M380,54 C380,74 135,70 135,92" fill="none" stroke="currentColor" stroke-width="1.4" marker-end="url(#adv85)"/><path d="M380,54 L380,92" fill="none" stroke="currentColor" stroke-width="1.4" marker-end="url(#adv85)"/><path d="M380,54 C380,74 625,70 625,92" fill="none" stroke="currentColor" stroke-width="1.4" marker-end="url(#adv85)"/><rect x="25" y="94" width="220" height="46" rx="7" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.3"/><text x="135" y="113" text-anchor="middle" font-size="12.5" fill="currentColor">one of a fixed set of names,</text><text x="135" y="130" text-anchor="middle" font-size="12.5" fill="currentColor">no payload</text><rect x="270" y="94" width="220" height="46" rx="7" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.3"/><text x="380" y="113" text-anchor="middle" font-size="12.5" fill="currentColor">one of several types,</text><text x="380" y="130" text-anchor="middle" font-size="12.5" fill="currentColor">payloads differ</text><rect x="515" y="94" width="220" height="46" rx="7" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.3"/><text x="625" y="113" text-anchor="middle" font-size="12.5" fill="currentColor">parts — all of them</text><text x="625" y="130" text-anchor="middle" font-size="12.5" fill="currentColor">live together</text><line x1="135" y1="140" x2="135" y2="172" stroke="currentColor" stroke-width="1.4" marker-end="url(#adv85)"/><line x1="380" y1="140" x2="380" y2="172" stroke="currentColor" stroke-width="1.4" marker-end="url(#adv85)"/><line x1="625" y1="140" x2="625" y2="172" stroke="currentColor" stroke-width="1.4" marker-end="url(#adv85)"/><rect x="25" y="176" width="220" height="130" rx="8" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.8"/><text x="135" y="198" text-anchor="middle" font-size="14.5" font-weight="700" fill="currentColor">enum class</text><text x="37" y="220" font-size="11.5" fill="currentColor">names scoped — Color::red</text><text x="37" y="238" font-size="11.5" fill="currentColor">no implicit int conversion</text><text x="37" y="256" font-size="11.5" fill="currentColor">type and values: only if you must</text><text x="37" y="274" font-size="11.5" fill="currentColor">define ++, | and I/O as used</text><text x="37" y="294" font-size="11" font-style="italic" fill="currentColor" opacity="0.75">the default choice</text><rect x="270" y="176" width="220" height="130" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><text x="380" y="198" text-anchor="middle" font-size="14.5" font-weight="700" fill="currentColor">variant</text><text x="282" y="220" font-size="11.5" fill="currentColor">remembers the live type</text><text x="282" y="238" font-size="11.5" fill="currentColor">checked get, visit dispatch</text><text x="282" y="256" font-size="11.5" fill="currentColor">raw union: ABI boundaries only,</text><text x="282" y="274" font-size="11.5" fill="currentColor">tagged, with access functions</text><rect x="515" y="176" width="220" height="130" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/><text x="625" y="198" text-anchor="middle" font-size="14.5" font-weight="700" fill="currentColor">struct</text><text x="527" y="220" font-size="11.5" fill="currentColor">memberwise copy; == is yours</text><text x="527" y="238" font-size="11.5" fill="currentColor">an invariant to protect? class</text><text x="527" y="256" font-size="11.5" fill="currentColor">largest-first when size matters</text><text x="527" y="274" font-size="11.5" fill="currentColor">just data: keep it a struct</text><rect x="25" y="332" width="710" height="152" rx="8" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 5"/><text x="40" y="354" font-size="13" font-weight="600" fill="currentColor">The plain-enum question — why the default is enum class</text><text x="40" y="384" font-family="monospace" font-size="11.5" fill="currentColor">enum Color { red, green };</text><text x="40" y="404" font-family="monospace" font-size="11.5" fill="currentColor">enum Signal { red, amber };</text><line x1="140" y1="390" x2="146" y2="418" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 3" marker-end="url(#adv85)"/><line x1="152" y1="410" x2="146" y2="418" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 3" marker-end="url(#adv85)"/><text x="146" y="438" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">×</text><text x="40" y="462" font-size="11.5" fill="currentColor">both reds land in the enclosing scope and collide;</text><text x="40" y="478" font-size="11.5" fill="currentColor">their values also convert silently to int</text><rect x="445" y="366" width="130" height="32" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.3"/><text x="510" y="386" text-anchor="middle" font-family="monospace" font-size="11.5" fill="currentColor">Color::red</text><rect x="590" y="366" width="132" height="32" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.3"/><text x="656" y="386" text-anchor="middle" font-family="monospace" font-size="11.5" fill="currentColor">Signal::red</text><text x="445" y="424" font-size="11.5" fill="currentColor">each name lives inside its own enum —</text><text x="445" y="443" font-size="11.5" fill="currentColor">two reds coexist; no silent int conversion</text></svg>`
      }
    ],
    examples: [
      {
        title: "Auditing a firmware event log against the rules",
        problem: "A microcontroller logs 1,000,000 events into a 2 MB (2,000,000-byte) flash region. Each event is one of four kinds — boot, sleep, wake, error — and the service tool that reads the log expects the kinds numbered 1, 2, 3, 4. Apply the chapter's rules to choose the type and verify the storage fits.",
        steps: [
          { label: "Step 1: Which form (Rule 1)", text: "The value is one of a fixed named set with no payload — an enumeration — and the default form is `enum class Event { boot, sleep, wake, error };`. `Event::error` scopes the name, and `Event e = 3;` is a compile error, so a stray integer cannot enter the log API." },
          { label: "Step 2: The underlying type (Rule 2)", text: "With the default `int` underlying type, `sizeof(Event)` is 4 and the log costs 4 × 1,000,000 = 4,000,000 bytes — twice the budget. `enum class Event : uint8_t` makes `sizeof(Event)` 1: the log costs 1,000,000 bytes, half the region — a 75% saving from one specifier." },
          { label: "Step 3: The enumerator values (Rule 2 again)", text: "The service tool already reads kind 1 as boot, 2 as sleep, 3 as wake, 4 as error — a fact of the outside world, so the values are specified: `enum class Event : uint8_t { boot = 1, sleep, wake, error };`. The compiler continues the count from there: sleep is 2, wake 3, error 4." },
          { label: "Step 4: Operations and validation (Rules 3–4)", text: "Humans read the log, so `operator<<` prints the name via a switch — written once, type-checked forever. A raw flash byte enters the type only by explicit request, `static_cast<Event>(b)`, and a corrupted byte such as `0x07` casts to a value that is no enumerator at all, so the switch's default clause is exactly where the error handling lives." }
        ],
        result: "1,000,000 bytes against a 2,000,000-byte budget: the form (`enum class`), the storage (`: uint8_t`), the numbering (fixed by the protocol) and the interface (explicit casts, `operator<<`) — four rules, four decisions, all checkable."
      },
      {
        title: "Reviewing structures, unions, and enumerations code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the chapter's rules of thumb to choose among struct, variant and the two enum forms.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: `enum class` is the default form — scoped names, no implicit conversions; a plain enum only when unscoped names and int conversion are the required interface." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `struct Entry { std::string name; int value; };`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: decide between a plain enum and an enum class from scoping and conversion requirements. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Underlying type and enumerator values are specified only under external pressure — storage (1 MB versus 4 MB in the worked example) or a wire format that fixes the numbers." },
        ],
        result: "The review ends with findings tied to reasons: `enum class` is the default form — scoped names, no implicit conversions; a plain enum only when unscoped names and int conversion are the required interface. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "`enum class` is the default form — scoped names, no implicit conversions; a plain enum only when unscoped names and int conversion are the required interface.",
      "Underlying type and enumerator values are specified only under external pressure — storage (1 MB versus 4 MB in the worked example) or a wire format that fixes the numbers.",
      "Structs group coexisting parts (an invariant to protect → `class`, largest-first when size matters); avoid raw unions — `variant`, or a tagged union at ABI boundaries."
    ],
    quiz: [
      {
        q: "The chapter's first rule of thumb for a new enumeration is:",
        options: ["Use plain enums — they convert to int when needed", "Use class enumerations rather than plain enums", "Always specify the underlying type", "Define operator== for every enumeration"],
        answer: 1,
        explanation: "enum class scopes the names and blocks the implicit conversion, deleting two bug classes at the declaration; the plain enum is reserved for interfaces that demand exactly its leakiness."
      },
      {
        q: "A 1,000,000-entry event log must fit a 2 MB (2,000,000-byte) flash region; the kinds are boot, sleep, wake, error. Which declaration fits?",
        options: ["`enum class Event { boot, sleep, wake, error };` — 1 MB", "`enum Event { boot, sleep, wake, error };` — 1 MB, because plain enums pack their values tightly", "`enum class Event : uint8_t { boot, sleep, wake, error };` — 4 MB", "`enum class Event : uint8_t { boot, sleep, wake, error };` — 1 MB"],
        answer: 3,
        explanation: "The default underlying type of an enum class is int — 4 bytes × 1,000,000 = 4,000,000 bytes, over budget. `: uint8_t` gives sizeof 1 → 1,000,000 bytes, half the region; a plain enum's underlying type is implementation-chosen, not guaranteed minimal."
      },
      {
        q: "You must interoperate with an old C library that expects unscoped names and plain int values. Per the chapter's rules, the justified tool is:",
        options: ["a plain enum — its leaking names and implicit int conversion are precisely the interface required", "`enum class` with `static_cast` at every boundary", "a struct of const ints", "a union of small values"],
        answer: 0,
        explanation: "The plain enum's defects are exactly what the old interface needs; everywhere else the scoped form's safety wins. The rules are defaults, not dogmas."
      },
      {
        q: "For a value that is one of several types — an int or a double, say — the chapter's advice is:",
        options: ["store both in a struct — space is cheap", "use a raw union and document which member is live", "avoid unions: use `variant`, which tracks the active alternative — a raw union only at ABI/hardware boundaries, with a tag and access functions", "use an `enum class` with one enumerator per type"],
        answer: 2,
        explanation: "`variant` internalizes the discriminator (checked get, `visit`); the raw union's bookkeeping-by-comment is the bug the rule deletes, except at ABI boundaries where it must be tagged."
      }
    ]
  }
]

import type { SectionContent } from "../library"

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 16: Classes (Sections 16.1 – 16.4)
// ============================================================================

export const cppCh16Content: SectionContent[] = [
  // ---------------------------------------------------------------- 16.1
  {
    sectionId: "cpp-ch16-s1",
    readingTime: 5,
    intro: "The class is C++'s fundamental tool for building new types, and this chapter is where the machinery starts. A class ties a representation — the data members holding an object's state — to the operations that may touch that state, and hands the result to users as one named concept. Everything later in the book depends on the vocabulary fixed here: members, access control, invariants, and the contrast between concrete classes and the abstract, hierarchy-based ones of chapters 20 and 21.",
    objectives: [
      "Define a class as a user-defined type and list what a class definition contains",
      "Separate a class' interface from its implementation and explain why users depend only on the interface",
      "State the invariant idea and distinguish concrete classes from abstract classes",
    ],
    concepts: [
      {
        term: "Class as a user-defined type",
        kind: "definition",
        statement: "A **class is a user-defined type**: a named bundle of a *representation* (data members holding state) plus *operations* (member functions) defining how that state may be read and changed. The class definition is a blueprint — each object gets its own copy of the data members, while the member function code is stored once.",
        detail: "Built-in types are given by the language; classes are how programmers add types with equal citizenship. A well-designed `Date` or `complex` is meant to be as easy to use as an `int`.",
      },
      {
        term: "Interface and implementation",
        kind: "insight",
        statement: "The **interface** of a class is what users see — the declaration of its public operations. The **implementation** is everything else: the private data members and the bodies of the member functions. Access control (`public` / `private`) lets the compiler enforce the split.",
        detail: "Users of `Date` need only the interface: how to construct one, read the month, ask for the next day. Switching the implementation to days-since-epoch instead of `y`/`m`/`d` changes none of their code — that separation is the reason for the wall.",
      },
      {
        term: "Concrete vs. abstract classes",
        kind: "insight",
        statement: "A **concrete class**'s representation is part of its definition, so its objects can live on the stack, copy and move cheaply, and be used without pointers or virtual functions — `complex`, `vector` and `Date` are examples. An **abstract class** hides its representation behind an interface, typically reached through a pointer.",
        detail: "The distinction is one of design style, not a language rule — both are classes. This chapter is about concrete classes; abstract types and hierarchies come in chapters 20 and 21.",
      },
      {
        term: "Invariant",
        kind: "definition",
        statement: "An **invariant** of a class is a statement about an object's state that holds from the end of construction to the start of destruction — in particular whenever a member function is not executing. The constructor's job is to establish it; every member function must preserve it.",
        detail: "For `Date`, the invariant is that `y`, `m`, `d` form a valid calendar date (no Feb 30, no month 13). Once established, no public operation may leave the object violating it — that is what separates a class from a bare struct of data.",
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** What classes are for. You can claim this section when you can define a class as a user-defined type and list what a class definition contains — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 16 (Classes); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "One definition, three roles",
        problem: "Annotate a small `Date` class: which parts are interface, which are implementation, and what invariant does it promise?",
        steps: [
          { label: "The definition", text: "`class Date { public: Date(int yy, Month mm, int dd); int day() const; void add_day(int n); private: int y; Month m; int d; };` — everything from `public:` up to `private:` is the interface; the rest is representation." },
          { label: "Interface", text: "Constructing a `Date`, reading `day()`, asking for `add_day(n)` — these operations are all users may depend on." },
          { label: "Implementation", text: "The three data members and the body of `add_day` are implementation details; user code cannot even name `d.m`." },
          { label: "Invariant", text: "`(y, m, d)` is a valid date — checked by the constructor, maintained by `add_day`, so no caller ever meets a Feb 30." },
        ],
        result: "Interface for users, implementation for the maintainer, invariant as the contract between them — the whole class idea in one definition.",
      },
      {
        title: "Working through introduction",
        problem: "What classes are for. Your task: define a class as a user-defined type and list what a class definition contains.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define a class as a user-defined type and list what a class definition contains. Write down the guarantee you will rely on — for this chapter it is: A class ties a representation to the operations allowed on it; each object holds its own state, the code is shared." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `class Date { public: Date(int d); private: int day; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — separate a class' interface from its implementation and explain why users depend only on the interface — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Users program against the public interface only — the private implementation can change without breaking them. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A class ties a representation to the operations allowed on it; each object holds its own state, the code is shared. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A class ties a representation to the operations allowed on it; each object holds its own state, the code is shared.",
      "Users program against the public interface only — the private implementation can change without breaking them.",
      "An invariant is established once by the constructor and preserved by every member function; it is what separates a class from a struct of public data.",
    ],
    quiz: [
      {
        q: "A class invariant is a rule that…",
        options: [
          "holds only while the constructor is running",
          "is true of an object's state between member function calls, established by the constructor",
          "is checked automatically by the compiler at every assignment",
          "applies only to classes with virtual functions",
        ],
        answer: 1,
        explanation: "The constructor establishes it and every member must leave it true. The compiler does not understand invariants — checking them is the class author's job.",
      },
      {
        q: "Which is a property of a concrete class in Stroustrup's sense?",
        options: [
          "Its representation is part of its definition and its objects are usable directly, like built-in types",
          "It must be accessed through a pointer to an implementation",
          "It must have a virtual destructor",
          "It cannot be copied",
        ],
        answer: 0,
        explanation: "`complex`, `vector` and `Date` are concrete: cheap on the stack, no indirection, no virtuals required. Pointer-mediated use is the abstract-class style.",
      },
      {
        q: "Code that uses class `Date` depends on:",
        options: [
          "the class' public interface only",
          "the private data members of `Date`",
          "the order of the data members",
          "the implementation of each member function",
        ],
        answer: 0,
        explanation: "That is the interface/implementation split: private members and function bodies may change freely as long as the interface stays stable.",
      },
      {
        q: "Changing the private part of a well-designed class…",
        options: [
          "requires rewriting user code that never mentions it",
          "silently changes the meaning of user code",
          "is impossible once the class is used elsewhere",
          "does not require changes to code that uses only the public interface",
        ],
        answer: 3,
        explanation: "Users cannot name private members, so they cannot depend on them — recompilation may be needed, but their code does not change.",
      },
    ],
  },

  // ---------------------------------------------------------------- 16.2
  {
    sectionId: "cpp-ch16-s2",
    readingTime: 7,
    intro: "Class basics are the mechanics. A class contains members of several kinds, access specifiers carve it into public interface and private representation, and `const` member functions promise read-only access. The section closes with the deliberate escape hatches — `mutable` for caches and `friend` for close collaborators — plus the `this` pointer that quietly threads through every call.",
    objectives: [
      "Read and write a class definition using members, access specifiers and nested types",
      "Write `const` member functions and explain what they promise — and when `mutable` relaxes it",
      "Use the `this` pointer and `friend` declarations deliberately rather than accidentally",
    ],
    concepts: [
      {
        term: "Members",
        kind: "definition",
        statement: "A class can contain **data members** (the state), **member functions** (the operations) and **nested types** such as an `enum` used by the interface — collectively, the *members*. Each object gets its own copy of the data members; member functions are stored once and told which object via `this`.",
        detail: "Stroustrup's `Date` nests `enum class Month { jan = 1, feb /* … */, dec };` inside the class. Users write `Date::Month::mar`, which keeps month names out of the global namespace and makes a month a distinct type, not an `int`.",
      },
      {
        term: "Access control",
        kind: "law",
        statement: "**`public:`** members form the interface — usable by everyone. **`private:`** members form the representation — usable only by the class' own members and friends. **`protected:`** is `private` plus derived classes (meaningful only with inheritance, chapter 20). The only difference between `class` and `struct` is the default: `class` defaults to private, `struct` to public.",
        detail: "Access control is per class, not per object: one `Date`'s member functions may read another `Date`'s private members. The wall separates users from implementers, not objects from each other.",
      },
      {
        term: "const member function",
        kind: "definition",
        statement: "A member function declared with a trailing `const` — `int day() const { return d; }` — promises not to modify the object's observable state. Only `const` member functions may be called on a `const` object; a class whose operations are all non-const cannot be used through `const` at all.",
        detail: "The promise is enforced mechanically: inside a `const` member function `this` is a `const Date*`, so writing to members is a compile-time error. `const` is part of the function's type — a `const` and a non-`const` version can overload (the standard `operator[]` pair).",
      },
      {
        term: "mutable",
        kind: "definition",
        statement: "A member declared **`mutable`** may be modified inside a `const` member function. Use it only for state invisible to the logical state of the object — caches, memoization, statistics — never for anything the invariant speaks about.",
        detail: "Example: `Date::string_rep()` that formats lazily may keep `mutable bool cache_valid; mutable string cache;` — the date never logically changes, so the function is `const`, yet the cache is filled on first call.",
      },
      {
        term: "this and friend",
        kind: "insight",
        statement: "Every non-static member function receives an implicit parameter **`this`** — a pointer to the object it was invoked on — so `d.add_day(1)` means `Date::add_day(&d, 1)` inside. A **`friend`** declaration grants a named function or class access to the private representation; friendship is given by the class, never taken.",
        detail: "Typical uses: symmetric binary operators (chapter 18) and two classes that are genuinely one design. A friend that is not part of the class' logical interface is a design smell — the wall now has a door in it.",
      },
    ],
    figures: [
      {
        caption: "Figure — The class as a guarded state: user code reaches `Date`'s state only through the public gate; the representation and its invariant live behind the compiler-enforced access wall, and direct reaches such as `d.d = 99` are compile-time errors.",
        svg: `<svg viewBox="0 0 720 250" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Access control wall around a class: public operations pass through, direct access to private members is blocked">
<defs><marker id="cpp16a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<rect x="230" y="30" width="470" height="190" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="465" y="52" text-anchor="middle" font-size="17" fill="currentColor" font-family="monospace">class Date { … }</text>
<rect x="250" y="62" width="430" height="56" fill="currentColor" fill-opacity="0.10"/>
<text x="465" y="84" text-anchor="middle" font-size="13.5" fill="currentColor" font-family="monospace">public: Date(int, Month, int)</text>
<text x="465" y="104" text-anchor="middle" font-size="13.5" fill="currentColor" font-family="monospace">day() const · month() · add_day(int)</text>
<rect x="250" y="118" width="430" height="80" fill="currentColor" fill-opacity="0.04"/>
<text x="465" y="142" text-anchor="middle" font-size="13.5" fill="currentColor" font-family="monospace">private: int y · Month m · int d</text>
<text x="465" y="166" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.85">invariant: y, m, d form a valid date</text>
<text x="465" y="188" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.7">(established by the constructor)</text>
<line x1="250" y1="118" x2="680" y2="118" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="465" y="114" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.8">access control — enforced by the compiler</text>
<rect x="20" y="55" width="150" height="140" rx="10" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>
<text x="95" y="78" text-anchor="middle" font-size="14" fill="currentColor">user code</text>
<text x="95" y="106" text-anchor="middle" font-size="13" fill="currentColor" font-family="monospace">d.day()</text>
<text x="95" y="130" text-anchor="middle" font-size="13" fill="currentColor" font-family="monospace">d.add_day(2)</text>
<text x="95" y="162" text-anchor="middle" font-size="13" fill="currentColor" font-family="monospace">d.d = 99</text>
<line x1="52" y1="158" x2="138" y2="166" stroke="currentColor" stroke-width="1.5"/>
<line x1="52" y1="166" x2="138" y2="158" stroke="currentColor" stroke-width="1.5"/>
<line x1="172" y1="100" x2="244" y2="96" stroke="currentColor" stroke-width="2.5" marker-end="url(#cpp16a)"/>
<line x1="172" y1="126" x2="244" y2="122" stroke="currentColor" stroke-width="2.5" marker-end="url(#cpp16a)"/>
<line x1="172" y1="162" x2="244" y2="162" stroke="currentColor" stroke-width="2" stroke-dasharray="5 5"/>
<circle cx="208" cy="162" r="14" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="199" y1="153" x2="217" y2="171" stroke="currentColor" stroke-width="2"/>
<line x1="217" y1="153" x2="199" y2="171" stroke="currentColor" stroke-width="2"/>
<text x="360" y="238" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.85">Member calls cross the wall; naming private members from outside is a compile-time error.</text>
</svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "A const object demands const operations",
        problem: "Given `class Date { public: Date(int, Month, int); int day() const; void add_day(int); private: int d; };`, say which lines compile — and what changes when the object itself is `const`.",
        steps: [
          { label: "Step 1: construction", text: "`Date d{2021, Date::Month::mar, 16};` — the constructor is public, fine." },
          { label: "Step 2: read", text: "`int n = d.day();` — `day()` is `const`, callable on any object." },
          { label: "Step 3: mutation", text: "`d.add_day(2);` — a mutator, fine on a non-const object." },
          { label: "Step 4: reach into the representation", text: "`int x = d.d;` — error: `d` is private. The wall, not politeness, stops it." },
          { label: "Step 5: make it const", text: "`const Date cd{2021, Date::Month::mar, 16};` — `cd.day()` still fine; now `cd.add_day(2);` fails to compile: `add_day` is not a `const` member." },
        ],
        result: "Two independent filters: `private` decides who may *name* a member; `const` decides which members may *run* on a given object.",
      },
      {
        title: "Working through class basics",
        problem: "Members, access, const member functions and the class interface. Your task: read and write a class definition using members, access specifiers and nested types.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: read and write a class definition using members, access specifiers and nested types. Write down the guarantee you will rely on — for this chapter it is: A class may hold data members, member functions and nested types; `class` and `struct` differ only in default access (private vs. public)." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `class Date { public: Date(int d); private: int day; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — write `const` member functions and explain what they promise — and when `mutable` relaxes it — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: A trailing `const` makes a member function callable on `const` objects and compile-time-checked against state changes — `mutable` exists for caches that do not affect the logical state. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A class may hold data members, member functions and nested types; `class` and `struct` differ only in default access (private vs. public). Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A class may hold data members, member functions and nested types; `class` and `struct` differ only in default access (private vs. public).",
      "A trailing `const` makes a member function callable on `const` objects and compile-time-checked against state changes — `mutable` exists for caches that do not affect the logical state.",
      "Access control is per class, not per object; `friend` punches a deliberate hole in the wall and must be declared by the class itself.",
    ],
    quiz: [
      {
        q: "What is the only difference between `class X { /* … */ };` and `struct X { /* … */ };`?",
        options: [
          "the default access of the first members: private for `class`, public for `struct`",
          "`class` cannot be used with templates",
          "`struct` cannot have member functions",
          "`struct` members are automatically `const`",
        ],
        answer: 0,
        explanation: "Every other rule is shared. The convention: `struct` for passive data, `class` when there is an interface to protect.",
      },
      {
        q: "Inside a `const` member function of `Date`, the type of `this` is:",
        options: ["`Date*`", "`const Date*`", "`Date&`", "`const Date&`"],
        answer: 1,
        explanation: "That pointer is exactly how the 'does not modify the object' promise is enforced — writes through it become compile errors.",
      },
      {
        q: "A member declared `mutable`…",
        options: [
          "may be written even inside a `const` member function, for state outside the invariant such as caches",
          "is shared by all objects of the class",
          "can be accessed by any user code",
          "makes the class abstract",
        ],
        answer: 0,
        explanation: "`mutable` is the escape hatch for implementation-only state — never for data the invariant or the users' logical model depends on.",
      },
      {
        q: "For object `const Date cd{2021, Date::Month::mar, 16};`, which call is a compile-time error?",
        options: ["`cd.day()`", "copying: `Date d3 = cd;`", "passing `cd` to `void f(const Date&);`", "`cd.add_day(1)`"],
        answer: 3,
        explanation: "`add_day` mutates, so it is not `const`, and a `const` object rejects it. Reads, copies and const-reference passes are all fine.",
      },
      // PYQ-pattern — struct versus class default access (rephrased)
      {
        q: "Which statement about default access is correct?\n```cpp\nstruct S { int m; };\nclass C { int m; };\n```",
        options: ["Both grant public access to `m`", "Both grant private access to `m`", "`S::m` is public while `C::m` is private", "`S::m` is private while `C::m` is public"],
        answer: 2,
        explanation: "Step 1: The data given is two identical member declarations differing only in the type keyword. Step 2: The governing rule is the single struct-versus-class difference: default member and inheritance access is public for `struct` and private for `class`, with explicit specifiers overriding either default. Step 3: Checking type by type, `S::m` is reachable as a public member while `C::m` is hidden as a private member unless an access specifier says otherwise. Step 4: The distractors fail because the defaults genuinely differ, and reversing them contradicts the language rule. Step 5: Therefore the struct member is public and the class member is private."
      }
    ],
  },

  // ---------------------------------------------------------------- 16.3
  {
    sectionId: "cpp-ch16-s3",
    readingTime: 7,
    intro: "The purpose of a concrete class is to behave like a built-in type: cheap to create, copy and destroy, usable on the stack, its operations inlinable when it matters. The chapter's running example — a `Date` with a checked constructor, a nested `Month` type and freestanding helper functions — is the model to imitate when you design one.",
    objectives: [
      "State the design goals of a concrete class and recognize them in standard-library types",
      "Build a checked constructor that throws when an invariant would be violated",
      "Decide what belongs in the class and what belongs in a helper function",
    ],
    concepts: [
      {
        term: "Concrete class",
        kind: "definition",
        statement: "A **concrete class** has a small set of defining properties: its *representation is part of its definition*; it can be a local variable or a container element; copying it copies its value; it rarely needs virtual functions. The aim, in Stroustrup's phrase, is that the class *behaves like an `int`* — does a job, efficiently, with straightforward semantics.",
        detail: "`complex`, `vector`, `array`, `Date` — the types you reach for without thinking — are concrete. Their simplicity is designed, not accidental.",
      },
      {
        term: "Constructor establishes the invariant",
        kind: "method",
        statement: "A constructor runs on raw storage and must leave the invariant true — or fail. For `Date` that means checking `d` against `m` and `y`: `if (!valid()) throw std::invalid_argument{\"bad date\"};`. After that, every object of the type is known-good for life.",
        detail: "The check lives in exactly one place. The alternative — `if (is_valid(d))` scattered at every use site — puts the burden on every user, and one of them eventually forgets.",
      },
      {
        term: "Nested types narrow the parameter space",
        kind: "method",
        statement: "Making `Month` a nested `enum class` means `Date(2021, Date::Month::mar, 16)` can no longer receive `16` where a month belongs, `mar` where a day belongs, or month `13`: each blunder becomes a *type error* at the call site instead of a corrupt object at run time.",
        detail: "`enum class Month` — scoped and strongly typed — is the C++11 form: it converts to `int` only on explicit request, so `Month` never silently becomes an arithmetic value.",
      },
      {
        term: "Helper functions",
        kind: "insight",
        statement: "Keep the class interface **complete and minimal**: essential operations are members; everything else — `is_date(y, m, d)`, `next_workday(d)`, `operator==(Date, Date)` — is a freestanding function. A function does not need to be a member just because it touches a `Date`.",
        detail: "Every member a user must learn is a permanent liability; helpers extend the vocabulary without touching the class. The equality operator is the classic: it needs public access only, so it lives outside the class.",
      },
      {
        term: "Concrete Classes: the working contract",
        kind: "definition",
        statement: "**Concrete Classes.** Designing concrete types well. You can claim this section when you can state the design goals of a concrete class and recognize them in standard-library types — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 16 (Classes); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Leap years: the invariant check, worked",
        problem: "Which of `Date{2000, feb, 29}`, `Date{1900, feb, 29}` and `Date{2024, feb, 29}` survive the constructor? Use the Gregorian rule.",
        steps: [
          { label: "Step 1: the rule", text: "In code: `bool leap = (y % 4 == 0 && (y % 100 != 0 || y % 400 == 0));` — divisible by 4, except century years not divisible by 400." },
          { label: "Step 2: year 2000", text: "2000 % 4 == 0; 2000 % 100 == 0 but 2000 % 400 == 0, so the exception clause saves it → leap. February has 29 days → **valid**." },
          { label: "Step 3: year 1900", text: "1900 % 4 == 0 but 1900 % 100 == 0 and 1900 % 400 == 300 ≠ 0 → common year. February has 28 days → the constructor **throws** `invalid_argument`." },
          { label: "Step 4: year 2024", text: "2024 % 4 == 0 and 2024 % 100 == 24 ≠ 0 → leap → **valid**." },
        ],
        result: "Two objects exist, one construction fails loudly at the single checkpoint — no invalid `Date` ever escapes into the program. (1900 and 2100 are the traps; 2000 is the exception to the exception.)",
      },
      {
        title: "Working through concrete classes",
        problem: "Designing concrete types well. Your task: state the design goals of a concrete class and recognize them in standard-library types.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: state the design goals of a concrete class and recognize them in standard-library types. Write down the guarantee you will rely on — for this chapter it is: A concrete class behaves like a built-in type: representation in the definition, stack-allocatable, cheap to copy — `complex`, `vector`, `Date`." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `class Date { public: Date(int d); private: int day; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — build a checked constructor that throws when an invariant would be violated — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: The constructor is the one checkpoint: establish the invariant or throw; members preserve it thereafter. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A concrete class behaves like a built-in type: representation in the definition, stack-allocatable, cheap to copy — `complex`, `vector`, `Date`. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A concrete class behaves like a built-in type: representation in the definition, stack-allocatable, cheap to copy — `complex`, `vector`, `Date`.",
      "The constructor is the one checkpoint: establish the invariant or throw; members preserve it thereafter.",
      "Keep the interface complete and minimal — helpers, not members, carry the extra vocabulary; nested `enum class` types make parameter mix-ups type errors.",
    ],
    quiz: [
      {
        q: "Which is NOT a property of a concrete class?",
        options: [
          "its representation is part of its definition",
          "it can be used as a local variable without free-store allocation",
          "it needs virtual functions for its basic operations",
          "copying it copies its value",
        ],
        answer: 2,
        explanation: "Virtual functions belong to the abstract-type/hierarchy style of chapters 20–21; concrete types avoid that dispatch cost.",
      },
      {
        q: "In invariant terms, the constructor's role is to:",
        options: [
          "establish the invariant or fail — there is no third outcome",
          "document the invariant in a comment",
          "defer checking to the first member function call",
          "repair an invariant broken by assignment",
        ],
        answer: 0,
        explanation: "If construction cannot produce a valid object, it throws; the object never exists with a broken invariant.",
      },
      {
        q: "Passing `13` where a `Date::Month` parameter is expected is:",
        options: [
          "silently accepted as December + 1",
          "a run-time crash inside the constructor",
          "impossible — `enum class Month` makes it a compile-time type error",
          "stored and checked only at destruction",
        ],
        answer: 2,
        explanation: "A scoped, strongly typed enum does not implicitly convert from `int`, so the mistake cannot even be expressed.",
      },
      {
        q: "Why is `next_workday(d)` best written as a freestanding helper rather than a member?",
        options: [
          "member functions cannot call other member functions",
          "freestanding functions run faster",
          "members must be `const`, and it is not",
          "it keeps the class interface minimal — it is vocabulary built on `Date`, not part of the `Date` concept itself",
        ],
        answer: 3,
        explanation: "It needs only the public interface, so making it a member would bloat the class for every user with zero benefit — the complete-and-minimal rule.",
      },
    ],
  },

  // ---------------------------------------------------------------- 16.4
  {
    sectionId: "cpp-ch16-s4",
    readingTime: 4,
    intro: "Stroustrup ends each chapter with advice — rules of thumb earned the hard way. For classes the advice clusters around four ideas: represent concepts as classes, keep interfaces complete and minimal, put invariants in constructors, and reserve public data for types that genuinely have none.",
    objectives: [
      "Apply the chapter's rules of thumb when reviewing a proposed class design",
      "Spot the classic violations: scattered validity checks, trivial getters/setters, public data carrying an invariant",
      "Choose between `class` and `struct` on principled grounds",
    ],
    concepts: [
      {
        term: "Represent concepts as classes",
        kind: "method",
        statement: "Find the concepts of the application domain — `Date`, `Temperature`, `Reading`, `Shape` — and give each a class with the operations the concept implies. A concept without a class degenerates into scattered variables and rules enforced by comments.",
        detail: "This is the first rule for a reason: every later rule assumes you found the right *thing* to make a type of.",
      },
      {
        term: "Interfaces: complete and minimal",
        kind: "insight",
        statement: "**Complete** — the class provides everything users need for its purpose. **Minimal** — nothing else. Every extra member is a permanent liability: it must be learned, documented, tested and kept consistent with the invariant.",
        detail: "If users keep writing the same helper against your class, the interface is incomplete; if they never call a member, it is not minimal.",
      },
      {
        term: "Public data only without invariants",
        kind: "insight",
        statement: "Use a `struct` with public members only when the data is 'plain data' — no meaningful invariant to protect: `struct Point { int x, y; };` is fine. If a later invariant appears, converting to a class with private members breaks every user who touched the members.",
        detail: "A `Date` with public `y`, `m`, `d` is the anti-example: nothing stops `d.d = 99`, so the invariant exists only in the author's hopes.",
      },
      {
        term: "Invariants live in constructors",
        kind: "method",
        statement: "Define a constructor for each way an object can meaningfully begin, and let it establish the invariant or throw. The operations preserve it, and the destructor can assume it — the whole class is organized around that one handshake.",
        detail: "Related advice: avoid trivial getters and setters that merely expose the representation with extra noise — they couple users to the layout while protecting nothing.",
      },
      {
        term: "Shipping rule for classes",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Represent concepts as classes; `struct` with public members only for data with no invariant worth protecting.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "Auditing a design against the advice",
        problem: "A weather app declares `struct Reading { int hour; double temp; };` and then guards 40 call sites with `if (24 <= r.hour) repair(r);`. What does the chapter's advice say?",
        steps: [
          { label: "Step 1: concept check", text: "`Reading` is a genuine domain concept, so it deserves a type — that part is right." },
          { label: "Step 2: the invariant", text: "`hour` in 0–23 and a temperature above absolute zero *are* invariants — so public data is the wrong choice: nothing stops `r.hour = 47`." },
          { label: "Step 3: the scattered checks", text: "Forty repair sites are the signature of a missing constructor: `Reading(int h, double t)` should validate once and throw on nonsense — one checkpoint instead of forty." },
          { label: "Step 4: minimal interface", text: "Expose what users need (say `hour()`), and add conversions like `fahrenheit(r)` as non-member helpers rather than members." },
        ],
        result: "Refactor: a `class` with a checked constructor; the 40 scattered checks collapse into one; the struct-for-plain-data rule is restored for genuinely passive records.",
      },
      {
        title: "Reviewing classes code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the chapter's rules of thumb when reviewing a proposed class design.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Represent concepts as classes; `struct` with public members only for data with no invariant worth protecting." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `class Date { public: Date(int d); private: int day; };`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: spot the classic violations: scattered validity checks, trivial getters/setters, public data carrying an invariant. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: A constructor per meaningful way to begin, each establishing the invariant or throwing — that single checkpoint replaces scattered validity checks." },
        ],
        result: "The review ends with findings tied to reasons: Represent concepts as classes; `struct` with public members only for data with no invariant worth protecting. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Represent concepts as classes; `struct` with public members only for data with no invariant worth protecting.",
      "A constructor per meaningful way to begin, each establishing the invariant or throwing — that single checkpoint replaces scattered validity checks.",
      "Complete and minimal: everything users need, nothing more; helpers carry the rest of the vocabulary.",
    ],
    quiz: [
      {
        q: "Public data members (a `struct`) are the right choice when:",
        options: [
          "the class has at least one member function",
          "the data has no invariant to maintain",
          "the data is accessed from more than one file",
          "the members are `const`",
        ],
        answer: 1,
        explanation: "No invariant means nothing for the wall to protect — plain data stays plain. An invariant means a class with a checked constructor.",
      },
      {
        q: "Why does the advice warn against trivial getter/setter pairs?",
        options: [
          "they add interface without abstraction, coupling users to the representation anyway",
          "they are slower than direct member access",
          "they cannot be declared `const`",
          "they prevent the compiler from generating copy operations",
        ],
        answer: 0,
        explanation: "A `set_d(int)` that just writes `d` enforces nothing yet costs a member in every user's memory — give the class real operations instead.",
      },
      {
        q: "'Complete and minimal' means the class interface should contain:",
        options: [
          "every operation any user might ever invent",
          "everything users need for the class' purpose, and nothing else",
          "only constructors and a destructor",
          "exactly one public member per data member",
        ],
        answer: 1,
        explanation: "Both halves matter: missing operations push users into hacks; extra ones are permanent maintenance debt.",
      },
    ],
  },
]

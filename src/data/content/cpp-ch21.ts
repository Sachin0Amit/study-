import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup, The C++ Programming Language, 4th edition — Chapter 21
// Class Hierarchies (TC++PL pp. 613–640)
// Sections 21.1–21.4. Code is C++; math is KaTeX; figures are inline SVG.
// ============================================================================

export const cppCh21Content: SectionContent[] = [
  // ------------------------------------------------------------------ 21.1
  {
    sectionId: "cpp-ch21-s1",
    readingTime: 5,
    intro: "Chapter 20 built derivation one base at a time; real systems grow a whole graph of classes, and the graph itself is a design artifact. Stroustrup opens this chapter with the two questions that organize it: what should classes share — a common interface — and how should they share it — implementation by inheritance or by membership. The answers produce the interface/implementation split of §21.2, and then, when one class must honor two contracts at once, multiple inheritance, with the stream family as the working example.",
    objectives: [
      "Say what a class hierarchy is for: a common interface plus shared implementation across a set of related classes",
      "Distinguish interface inheritance (substitutability) from implementation inheritance (reuse of data and code) as the two reasons to derive",
      "Recognize when a set of variants is open — hierarchy territory — and when it is closed and better served without derivation",
    ],
    concepts: [
      {
        term: "Class hierarchy",
        kind: "definition",
        statement: "A **class hierarchy** is a set of classes ordered by derivation, together with the design decisions that graph encodes: which operations are common to all of them (the **interface**) and which data and function bodies are shared along the edges (the **implementation**). With more than one base allowed, the shape is a **directed acyclic graph — a lattice** — not a tree: a class can be reached along several paths, which is exactly what §21.3 is about.",
        detail: "Users touch the hierarchy through its root interface — `Shape*`, `istream&` — while each node below supplies its own representation. The graph, not any single class, is the unit of design.",
      },
      {
        term: "Two reasons to derive",
        kind: "insight",
        statement: "Every inheritance edge exists for one or both of two goods. **Interface inheritance**: code written against the base keeps working, unmodified and un-recompiled, for every class derived from it — substitutability. **Implementation inheritance**: the derived class reuses the base's data and function bodies instead of restating them. The design discipline of this chapter is asking, for each edge, which of the two you want — because the answer dictates whether the derivation should be public, private, or a member instead.",
        detail: "Chapter 20 introduced the pair in passing; here it becomes the organizing principle of the whole design.",
      },
      {
        term: "The Shape problem, continued",
        kind: "insight",
        statement: "The `Shape` family from the tour and chapter 20 settled the interface question: users hold `Shape*` and call `draw()`, `center()`, `move()`, `rotate()`, and each kind of shape overrides them. What is *not* settled is where the **representation** lives — which node owns the center point, the radius, the vertex list — and how much of it can be shared between classes rather than restated per class.",
        detail: "That question is the chapter's engine: answering it splits one classical tree into an interface hierarchy plus implementation hierarchies, and ends in multiple inheritance when a class must draw on two of them at once.",
      },
      {
        term: "Open and closed variant sets",
        kind: "insight",
        statement: "A hierarchy earns its keep only when the set of variants is **open**: new classes (a `Pentagon`, next year's `Audio_shape`) must join without editing or recompiling the code that uses the base interface. When the set of alternatives is **closed and known** — fixed by the problem, a handful at most — a tagged union, a `switch`, or a single class with a representation pointer is simpler and faster than derivation.",
        detail: "The chapter's discussion of alternatives makes the same point from the other end: inheritance is one tool for expressing variation, not the only one.",
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Using hierarchies well. You can claim this section when you can say what a class hierarchy is for: a common interface plus shared implementation across a set of related classes — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 21 (Class Hierarchies); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "From design brief to base class",
        problem: "Version 1 of a drawing tool must support circles, polygons and text; shapes are drawn to a screen or a printer; and customers will add shape kinds the authors cannot foresee. Decide the root class.",
        steps: [
          { label: "Step 1: Start from the uses, not the nouns", text: "List the loops user code writes over a heterogeneous collection: render (`draw`), reposition (`move`), query (`center`), transform (`rotate`). Four operations, one per loop body — these are the interface candidates." },
          { label: "Step 2: Which can the base implement?", text: "None: each depends on the representation a derived class chooses. So all four become pure virtual, plus the virtual destructor every polymorphic base needs — four pure virtuals and an empty virtual destructor, zero bodies, zero data." },
          { label: "Step 3: What may the base store?", text: "Nothing. A `Point center` member would tax an image-backed shape that keeps no center; representation belongs in the derived classes, one per kind, chosen freely." },
          { label: "Step 4: Open or closed?", text: "Customer extension makes the set of shapes open — they derive from the published interface and user code never notices. The medium is not a kind of shape at all: it varies per operation, so it travels as a parameter of `draw`, not as classes in the hierarchy." },
        ],
        result: "A data-free abstract root — four pure virtual declarations, a virtual destructor, and nothing else — with media handled as arguments. The interface is exactly the uses, no more.",
      },
      {
        title: "Working through introduction",
        problem: "Using hierarchies well. Your task: say what a class hierarchy is for: a common interface plus shared implementation across a set of related classes.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: say what a class hierarchy is for: a common interface plus shared implementation across a set of related classes. Write down the guarantee you will rely on — for this chapter it is: A class hierarchy is a DAG whose nodes share a root interface and, along its edges, implementation — the graph, not any class, is the design unit" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Circle : Shape { void draw() const override; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — distinguish interface inheritance (substitutability) from implementation inheritance (reuse of data and code) as the two reasons to derive — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Every derivation edge should declare its purpose: interface inheritance for substitutability, implementation inheritance for reuse If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A class hierarchy is a DAG whose nodes share a root interface and, along its edges, implementation — the graph, not any class, is the design unit Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A class hierarchy is a DAG whose nodes share a root interface and, along its edges, implementation — the graph, not any class, is the design unit",
      "Every derivation edge should declare its purpose: interface inheritance for substitutability, implementation inheritance for reuse",
      "Derivation pays when the variant set is open; closed sets of alternatives are better expressed without it",
    ],
    quiz: [
      {
        q: "With multiple inheritance allowed, the shape of a class hierarchy is best described as:",
        options: ["A tree — each class has exactly one direct base", "A directed acyclic graph — a class can be reached along several paths", "A linear list of classes ordered by object size", "An unordered set with no structure"],
        answer: 1,
        explanation: "Several direct bases make the derivation relation a DAG (Stroustrup calls it a lattice); the same class can be reached through different paths, which is what produces the duplication problems of §21.3.",
      },
      {
        q: "A class derives from another mainly to reuse its protected data and helper functions, with no substitutability intended. Which relationship is being expressed?",
        options: ["A friendship grant", "A pure virtual contract", "Implementation inheritance", "Interface inheritance"],
        answer: 2,
        explanation: "Reuse of state and code is implementation inheritance; substitutability through the public interface is the other, different good. The distinction decides whether the derivation is public at all.",
      },
      {
        q: "A parser's token set is fixed at six kinds by the language grammar and can never grow. The chapter's guidance suggests:",
        options: ["A deep hierarchy with one class per token kind", "Deriving all six tokens from a Token base so users can extend them later", "Making Token a virtual base of all six kinds", "A closed representation such as a tagged union or a switch, not derivation"],
        answer: 3,
        explanation: "Hierarchies earn their keep on open variant sets. A set fixed by the grammar is closed — a tagged union and switch (or a single class) is simpler and has no virtual-call overhead.",
      },
    ],
  },

  // ------------------------------------------------------------------ 21.2
  {
    sectionId: "cpp-ch21-s2",
    readingTime: 9,
    intro: "Chapter 20 told you what derivation *is*; this section is about what each edge is *for*. Stroustrup's central move is to separate **interface inheritance** — public derivation from an abstract base that owns a contract — from **implementation inheritance** — deriving to reuse state and code, properly done through a private or protected base or, better, a member. The section builds the Shape example into that split, states when composition beats inheritance, and shows why the deep taxonomic 'classical' hierarchies of the 1980s aged badly: one tree can encode only one classification criterion.",
    objectives: [
      "Separate interface inheritance from implementation inheritance and map each to public versus private/protected derivation or membership",
      "Apply the composition-first rule and name the three powers that justify private inheritance over a member",
      "Diagnose classical-taxonomy failure: the Square/Rectangle trap and the class-count arithmetic of independent criteria",
    ],
    concepts: [
      {
        term: "Interface inheritance",
        kind: "definition",
        statement: "**Interface inheritance** is public derivation from a class used as a pure contract: the base is (typically) abstract, carries its operations as pure virtuals plus a virtual destructor, and holds **no data**. The public edge asserts substitutability — every derived object is usable wherever a base is expected — and users of the hierarchy hold base pointers and references *only*.",
        detail: "The Shape interface of chapter 20 is the template: `virtual Point center() const = 0; virtual void move(Point to) = 0; virtual void draw() const = 0; virtual void rotate(int) = 0;` and a virtual destructor. Every operation user code needs uniformly, and nothing else.",
      },
      {
        term: "Implementation inheritance",
        kind: "definition",
        statement: "**Implementation inheritance** is derivation in order to reuse the base's data and function bodies. It should be kept out of the public interface: `class Circle : public Shape, protected Point` would take the interface from Shape publicly and reuse `Point`'s storage and move machinery as an implementation detail. Stroustrup's warning: the implementation hierarchy is plumbing — a reader of the public interface should not have to know it exists.",
        detail: "The alternatives the chapter weighs for a circle's center: a `Point` member (plain composition, default choice), a protected/private `Point` base (derivation as reuse), or — rejected — putting the `Point` in `Shape` itself, which taxes every present and future shape with state it may not need.",
      },
      {
        term: "Composition before inheritance",
        kind: "law",
        statement: "The default way to use a class's services is **membership**: represent commonality with plain classes and compose them. Reach for private inheritance only when a member cannot do the job — when the derived class must **override a virtual function** of the implementation, must reach the implementation's **protected members**, or must exploit the **empty-base optimization**. The relationships decide: is-a → public derivation; has-a → member; implemented-in-terms-of → member, or private inheritance; uses-a → a function argument, no inheritance at all.",
        detail: "Membership also wins the housekeeping: it can be hidden behind a pointer (a compilation firewall), can appear multiple times, and never advertises the arrangement in the base list of a public interface.",
      },
      {
        term: "The classical-hierarchy failure",
        kind: "insight",
        statement: "A **classical hierarchy** organizes classes by taxonomy: `Shape → Polygon → Rectangle → Square`, `Shape → Ellipse → Circle`. It couples interface and implementation in one tree and hard-codes a single classification criterion — so independent criteria multiply leaf classes as a *product*, and substitutability traps (Square inheriting `Rectangle`'s independent `set_width`/`set_height`) hide inside the geometry. Stroustrup's redesign: shallow public interface hierarchies for the uses, implementation detail in members or private bases.",
        detail: "The test is behavioral, not taxonomic: if code holding `Rectangle*` can call `set_width(3)` and leave the height untouched, a Square is not a Rectangle whatever Euclid says.",
      },
      {
        term: "Design of Class Hierarchies: the working contract",
        kind: "definition",
        statement: "**Design of Class Hierarchies.** Interfaces, implementation inheritance and composition. You can claim this section when you can separate interface inheritance from implementation inheritance and map each to public versus private/protected derivation or membership — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 21 (Class Hierarchies); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Two independent criteria: the class-count arithmetic",
        problem: "A graphics tool has 3 kinds of geometry (circle, polygon, text) and 3 output media (screen window, PostScript file, printer), varying independently. Compare the classical single-inheritance design with an interface/implementation split — today, and after additions of each kind.",
        steps: [
          { label: "Step 1: Classical", text: "A class occupies one node of the tree, and each edge encodes one criterion, so a leaf must fix BOTH: leaves are the product $3 \\times 3 = 9$ — Circle-on-screen, Circle-on-printer, …, Text-on-printer — each carrying geometry code *and* medium code." },
          { label: "Step 2: Split", text: "Keep two hierarchies: a public interface side with the 3 geometric kinds implementing `Shape`, and an implementation side with 3 media classes. A shape is drawn by delegating to its medium, or by deriving from one class of each side: $3 + 3 = 6$ classes." },
          { label: "Step 3: Add a fourth medium", text: "Classical grows by one leaf per kind: $9 \\to 12$. The split grows by one class: $6 \\to 7$. Add a fourth kind next quarter: classical $12 \\to 16$, split $7 \\to 8$." },
          { label: "Step 4: Add a whole third criterion", text: "Suppose interactivity becomes a criterion with 2 values (interactive vs. static). Classical leaves multiply to $4 \\times 4 \\times 2 = 32$; the split needs $4 + 4 + 2 = 10$ classes. Product growth versus sum growth." },
        ],
        result: "9 versus 6 today, 16 versus 8 after one addition of each: single-inheritance trees encode one criterion per edge, so independent criteria multiply leaves; separate hierarchies keep them additive.",
      },
      {
        title: "Working through design of class hierarchies",
        problem: "Interfaces, implementation inheritance and composition. Your task: separate interface inheritance from implementation inheritance and map each to public versus private/protected derivation or membership.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: separate interface inheritance from implementation inheritance and map each to public versus private/protected derivation or membership. Write down the guarantee you will rely on — for this chapter it is: Keep the public base a pure interface — pure virtuals plus a virtual destructor, no data; representation belongs to implementations" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Circle : Shape { void draw() const override; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — apply the composition-first rule and name the three powers that justify private inheritance over a member — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Default to members; private inheritance is the reserved tool for overriding the implementation's virtuals, protected access, and the empty-base optimization If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Keep the public base a pure interface — pure virtuals plus a virtual destructor, no data; representation belongs to implementations Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Keep the public base a pure interface — pure virtuals plus a virtual destructor, no data; representation belongs to implementations",
      "Default to members; private inheritance is the reserved tool for overriding the implementation's virtuals, protected access, and the empty-base optimization",
      "A classical taxonomy hard-codes one criterion: with $k$ independent criteria, single inheritance needs the product of the counts where split hierarchies need the sum",
    ],
    quiz: [
      {
        q: "A team debates how a Stack should reuse a list's machinery. Which consideration would justify `class Stack : private list` rather than a `list` member?",
        options: ["They want the list's operations visible in Stack's public interface", "Stack must override a virtual function of the list implementation, use its protected members, or exploit the empty-base optimization", "They want two independent lists inside one Stack", "They want Stack objects to convert implicitly to list"],
        answer: 1,
        explanation: "Those three powers — overriding, protected access, EBO — are the only ones a member cannot supply. Visibility of base operations and implicit conversion are what public derivation would give, which is exactly what is not wanted here.",
      },
      {
        q: "Why does `class Square : public Rectangle` fail the chapter's test when Rectangle offers independent `set_width` and `set_height`?",
        options: ["Because squares have no width or height", "Because Rectangle lacks a virtual destructor", "Because a square cannot store its edge length", "Because code holding `Rectangle*` could set the width without the height — the square invariant breaks, so the derived class no longer honors the base contract"],
        answer: 3,
        explanation: "Public inheritance asserts substitutability. A setter that leaves the object an inconsistent square contradicts Rectangle's contract through the base interface — a design failure the signature check cannot catch.",
      },
      {
        q: "A system has 4 geometric kinds and 5 output media, two independent criteria. The interface/implementation split needs how many classes where the classical design needs $4 \\times 5 = 20$?",
        options: ["9", "20", "25", "24"],
        answer: 0,
        explanation: "Split hierarchies are additive: $4 + 5 = 9$ classes, against the 20 leaves of the product — the chapter's arithmetic for why one tree per criterion, not one tree for everything.",
      },
      {
        q: "Which base is closest to the chapter's ideal interface root?",
        options: ["class Shape { public: virtual void draw() const = 0; virtual ~Shape() {} protected: Point c; };", "class Shape { public: virtual void draw() const { /* blank screen */ } };", "class Shape { public: virtual void draw() const = 0; virtual void move(Point to) = 0; virtual ~Shape() {} };", "class Shape { public: void draw() const; };"],
        answer: 2,
        explanation: "Pure virtuals plus a virtual destructor and no data: option A taxes every derived class with a center it may not need, B silently supplies a wrong default body, and D is not even polymorphic.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "A taxonomy of derivation: interface, implementation, and the space between",
        blocks: [
          {
            kind: "para",
            body: "Every derivation edge answers two independent questions: **what crosses the edge** — operations only, or operations plus state — and **who is allowed to see the edge** — public, protected, or private. Crossing the two dimensions yields the taxonomy this chapter argues from. (1) The **pure interface**: a public base that is nothing but pure virtuals and a virtual destructor. (2) The **abstract base with defaults**: public, essentially stateless, some operations implemented for the derived classes to inherit. (3) The **concrete public base**: public with state — the classical style, sound only while every derived class can honor the base's invariants. (4) The **implementation base**: private or protected derivation, state and code reused but invisible to users of the derived class. (5) The **member**: composition, no inheritance at all. (6) **Friendship** — not derivation, but the strongest grant of representation access. Design, in this chapter, is choosing cells deliberately rather than drifting into them.",
          },
          {
            kind: "theorem",
            heading: "Soundness of a public derivation (the substitutability condition)",
            body: "Let $B$ be a class whose public interface carries, for each operation $f$, a documented contract $S(f)$: preconditions, postconditions, and the invariants $f$ may rely on. The public derivation `class D : public B` is **sound** if and only if (i) every operation of $B$'s interface, invoked through a `B*` or `B&` denoting a `D` object, terminates with an outcome consistent with $S(f)$ — refinement is allowed, contradiction is not — and (ii) every invariant $B$'s own operations rely on holds for each `D` object before and after every call. The compiler verifies none of this: the override check of chapter 20 tests signature compatibility, which is necessary but not sufficient — `Square::set_width` satisfies the signature and demolishes the contract. Substitutability is a design review, not a compile step.",
          },
          {
            kind: "derivation",
            heading: "Why classical hierarchies multiply classes",
            body: "Let a family of concepts be described by $k$ independent criteria, the $i$-th taking $n_i$ values. Single inheritance places each class at one node of a tree, so each edge can encode exactly one criterion and every leaf must fix all of them: the leaves are the Cartesian product $\\prod_{i=1}^{k} n_i$. With $k = 2$ and $n_1 = n_2 = 3$: $3 \\times 3 = 9$ classes. Grant each criterion its own edge — multiple inheritance, or composition — and the count becomes $\\sum_{i=1}^{k} n_i$: here $3 + 3 = 6$. Add a third criterion with $n_3 = 2$ and the product jumps to $3 \\times 3 \\times 2 = 18$ while the sum is $3 + 3 + 2 = 8$: multiplicative versus additive growth. This arithmetic is the engine behind the advice to organize interfaces by *use*: a use-driven interface tends to be a one-criterion tree, which is exactly what a tree encodes well.",
          },
          {
            kind: "example",
            heading: "Circle's center: member, private base, or data in the root",
            body: "Take `struct Point { int x, y; };` — 8 bytes on a typical 64-bit machine. (a) **Member**: `class Circle : public Shape { Point c; int r; /* … */ };` — the center is private representation, and `move` is written once: `void move(Point to) { c = to; }`. (b) **Private base**: `class Circle : public Shape, private Point { int r; /* … */ };` — the layout is identical (the `Point` subobject occupies the same 8 bytes), but `x` and `y` now sit in Circle's scope and Point's `move` serves every class built this way; the cost is that the base list advertises the arrangement. (c) **Data in the root** `Shape` — rejected: every shape, image-backed ones included, pays the 8 bytes and owns the invariant. The empty case sharpens the choice: for `struct Empty {};`, `class A { int id; Empty e; };` occupies $4 + 1$ bytes padded to **8**, while `class B : Empty { int id; };` occupies **4** — the empty-base optimization is the one layout fact that can force private inheritance over membership.",
          },
          {
            kind: "remark",
            body: "Membership wins the default case, so why does the language keep private derivation at all? Three powers a member cannot give: the derived class may **override the base's virtual functions** (a member is called, never overridden); it may **use the base's protected members**; and it may **vanish** through the empty-base optimization. Against them stand the costs: appearing in the base list couples the classes visibly, and readers are surprised by derivation used for reuse. The advice section's ordering is explicit — represent commonality as a plain class first; reach for private inheritance only when one of the three powers is actually needed. The same discussion carries the older warning: **protected data** is a design smell, because it shares raw representation with every present and future derived class; protected *functions* — services offered to implementers — are the defensible use.",
          },
          {
            kind: "application",
            heading: "The two-hierarchy architecture, and the single-class alternative",
            body: "The chapter's designs converge on one architecture: a small **public interface hierarchy** (abstract roots like `Shape` or `basic_istream`) through which users program, and one or more **implementation hierarchies** — representation families, `Point`-style helpers, buffers — that the public classes own privately, as bases or members. The standard library's stream family is the worked instance: users see `basic_iostream`'s interface; the `basic_ios` state and the `streambuf` doing the actual I/O are shared machinery behind it (§21.3). The chapter also names the alternative: collapse the public hierarchy to **a single class holding a pointer to its representation** — the envelope/letter or pimpl shape. You gain value semantics and a compilation firewall; you pay one indirection per operation, and the set of representations must be closed behind that one class's constructors. Choose the split hierarchies when the variant set must stay open; choose the single class when stability and value semantics dominate.",
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 21.3
  {
    sectionId: "cpp-ch21-s3",
    readingTime: 8,
    intro: "Most classes need only one base — but some concepts are genuinely two things at once: a bidirectional stream is an input stream *and* an output stream, and a shape that persists itself is a shape that also knows a file. Multiple inheritance gives a class several direct bases, and with it two problems the single-inheritance world never sees: names found through two bases (ambiguity) and the same base reached along two paths (duplication). The stream family — `istream`, `ostream`, `iostream`, sharing `basic_ios` — is the canonical solution: virtual bases, resolved.",
    objectives: [
      "Declare classes with several direct bases and predict their subobjects, conversions and construction order",
      "Resolve cross-base name ambiguities with qualification and using-declarations, and state exactly when a clash becomes an error",
      "Explain the iostream diamond and the role of virtual bases: one shared subobject, constructed by the most-derived class",
    ],
    concepts: [
      {
        term: "Multiple inheritance",
        kind: "definition",
        statement: "A class may have several direct bases: `class D : public A, public B { };` — the list gives each base its own access specifier (private by default for a `class`). A `D` object contains **both base subobjects**; a `D*` converts implicitly to an `A*` and to a `B*` — the two results need not even compare equal as addresses, since each points at its own subobject at its own offset. The uses: combining **interfaces**, combining an **interface with an implementation**, and — rarely and carefully — combining two implementations.",
        detail: "Construction runs in the order the bases are declared (destruction in reverse); members and the constructor body follow, exactly as in the single-base case of chapter 20.",
      },
      {
        term: "Ambiguity and its resolution",
        kind: "method",
        statement: "If two bases offer the same member name, a use of that name through the derived object is **ambiguous** — an error at the point of use, and only there: `c.f()` with both `A::f` and `B::f` in scope is rejected. The fixes: qualify explicitly — `c.A::f()` or `c.B::f()` — or bring one candidate in with a using-declaration (`using A::f;`) in the derived class. The same rule governs conversions: with a base reached twice (non-virtually) through two paths, even converting `D*` to `B*` is ambiguous. If the two paths reach the *same* subobject — the virtual-base case below — the lookup finds one member and there is no ambiguity.",
        detail: "Note the ordering the language rules impose: ambiguity is diagnosed before access control, so hiding one candidate behind `private` does not rescue the other. A clash that is never used is not an error.",
      },
      {
        term: "The streams diamond",
        kind: "insight",
        statement: "The classic worked example is the iostream family. `basic_istream` supplies the input area (`operator>>`, `get`, `read`), `basic_ostream` the output area (`operator<<`, `put`, `write`), and a stream that both reads and writes — `basic_iostream` — derives from **both**: `class basic_iostream : public basic_istream, public basic_ostream { /* … */ };`. But both parents also keep stream state (the good/fail/eof bits, the attached buffer), and that state must be **one thing**, or end-of-file observed by a read would be invisible to the next write through the same object. Hence the diamond: both `basic_istream` and `basic_ostream` declare `basic_ios` a **virtual base**, and `basic_iostream` contains exactly one `basic_ios` subobject.",
        detail: "The file streams extend the pattern: `basic_ifstream : basic_istream`, `basic_ofstream : basic_ostream`, `basic_fstream : basic_iostream` — each still sharing the single state its iostream side owes to the virtual base.",
      },
      {
        term: "Virtual base classes",
        kind: "definition",
        statement: "`class D : public virtual B { };` makes B a **virtual base**: however many inheritance paths reach B, the final object contains **exactly one** B subobject, shared by all of them. Two rules follow. Construction: the **most-derived class** constructs the virtual base, before all non-virtual bases; the initializers for B written in intermediate classes are ignored when those classes are not most-derived — which is why virtual bases are best given default constructors, with the most-derived class initializing explicitly when it needs more. Layout: the shared subobject is placed once (typically at the end of the most-derived object), so its offset varies with the complete type — reaching it through a base-class pointer loads the virtual-base offset from the vtable. That indirection is the cost of sharing.",
        detail: "Without `virtual`, the diamond is duplicated state and ambiguous conversions; with it, one state and one construction — bought with layout indirection and construction discipline. The standard pays that price in every stream object rather than let one stream disagree with itself.",
      },
      {
        term: "Multiple Inheritance: the working contract",
        kind: "definition",
        statement: "**Multiple Inheritance.** Multiple base classes and their conflicts. You can claim this section when you can declare classes with several direct bases and predict their subobjects, conversions and construction order — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 21 (Class Hierarchies); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "The iostream multiple-inheritance diamond. `basic_istream` and `basic_ostream` each add their area to the shared `basic_ios` — declared a **virtual base**, so `basic_iostream` (and the file streams below it) contain exactly one stream-state subobject: end-of-file seen by a read is seen by the next write through the same object.",
        afterConcept: 3,
        svg: '<svg viewBox="0 0 760 466" width="100%" role="img" aria-label="The iostream class diamond: the shared ios state class as a virtual base of istream and ostream, combined by iostream and extended by the file streams"><rect x="280" y="16" width="200" height="100" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.8"/><text x="380" y="40" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" font-weight="700" fill="currentColor">basic<tspan dy="3" font-size="9.5">ios</tspan></text><text x="380" y="60" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.8">shared state for the whole stream:</text><text x="380" y="76" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9" fill="currentColor" opacity="0.9">rdstate(): good/fail/eof/bad</text><text x="380" y="91" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9" fill="currentColor" opacity="0.9">rdbuf(), fill, tie(), locale</text><text x="380" y="108" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.75">virtual base — ONE subobject</text><line x1="215" y1="170" x2="322" y2="120" stroke="currentColor" stroke-width="1.6"/><polygon points="322,120 314.6,127.8 311.2,120.6" fill="currentColor"/><text x="250" y="137" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.8">public virtual</text><line x1="557" y1="170" x2="438" y2="120" stroke="currentColor" stroke-width="1.6"/><polygon points="438,120 448.7,120.2 445.7,127.6" fill="currentColor"/><text x="510" y="137" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.8">public virtual</text><text x="380" y="141" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-style="italic" fill="currentColor" opacity="0.75">two paths,</text><text x="380" y="155" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-style="italic" fill="currentColor" opacity="0.75">one shared state</text><rect x="48" y="170" width="216" height="86" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="156" y="192" text-anchor="middle" font-family="ui-monospace, monospace" font-size="12.5" font-weight="700" fill="currentColor">basic<tspan dy="3" font-size="9">istream</tspan></text><text x="156" y="212" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9" fill="currentColor" opacity="0.9">input area: operator&gt;&gt;, get(),</text><text x="156" y="228" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9" fill="currentColor" opacity="0.9">read(), getline(), gcount()</text><text x="156" y="248" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.75">shares the state, not a copy</text><rect x="496" y="170" width="216" height="86" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="604" y="192" text-anchor="middle" font-family="ui-monospace, monospace" font-size="12.5" font-weight="700" fill="currentColor">basic<tspan dy="3" font-size="9">ostream</tspan></text><text x="604" y="212" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9" fill="currentColor" opacity="0.9">output area: operator&lt;&lt;, put(),</text><text x="604" y="228" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9" fill="currentColor" opacity="0.9">write(), flush(), seekp()</text><text x="604" y="248" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.75">same single state object</text><line x1="330" y1="310" x2="230" y2="258" stroke="currentColor" stroke-width="1.3"/><polygon points="230,258 240.7,259.1 237.1,266.1" fill="currentColor"/><text x="272" y="292" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.8">public</text><line x1="430" y1="310" x2="535" y2="258" stroke="currentColor" stroke-width="1.3"/><polygon points="535,258 527.8,266 524.2,258.8" fill="currentColor"/><text x="488" y="292" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.8">public</text><rect x="280" y="310" width="200" height="64" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="380" y="332" text-anchor="middle" font-family="ui-monospace, monospace" font-size="12.5" font-weight="700" fill="currentColor">basic<tspan dy="3" font-size="9">iostream</tspan></text><text x="380" y="350" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.85">reading and writing through</text><text x="380" y="364" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.85">one stream object</text><line x1="156" y1="408" x2="156" y2="262" stroke="currentColor" stroke-width="1.3"/><polygon points="156,258 152,268 160,268" fill="currentColor"/><text x="169" y="335" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.8">public</text><line x1="380" y1="408" x2="380" y2="380" stroke="currentColor" stroke-width="1.3"/><polygon points="380,376 376,386 384,386" fill="currentColor"/><text x="393" y="396" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.8">public</text><line x1="604" y1="408" x2="604" y2="262" stroke="currentColor" stroke-width="1.3"/><polygon points="604,258 600,268 608,268" fill="currentColor"/><text x="617" y="335" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.8">public</text><rect x="48" y="408" width="216" height="52" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.2"/><text x="156" y="428" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11.5" font-weight="700" fill="currentColor">basic<tspan dy="3" font-size="8.5">ifstream</tspan></text><text x="156" y="448" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">file input</text><rect x="280" y="408" width="200" height="52" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.2"/><text x="380" y="428" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11.5" font-weight="700" fill="currentColor">basic<tspan dy="3" font-size="8.5">fstream</tspan></text><text x="380" y="448" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">file input and output</text><rect x="496" y="408" width="216" height="52" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.2"/><text x="604" y="428" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11.5" font-weight="700" fill="currentColor">basic<tspan dy="3" font-size="8.5">ofstream</tspan></text><text x="604" y="448" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">file output</text></svg>',
      },
    ],
    examples: [
      {
        title: "Auditing the diamond: layout arithmetic, state by state",
        problem: "Model the streams: `struct IOS { int state; };`, plus `Istream` (a virtual `get`, an `int cnt`) and `Ostream` (a virtual `put`, an `int cnt`), each deriving `public virtual IOS`, and `Iostream : public Istream, public Ostream`. On a typical 64-bit implementation — vptr $8$ bytes, int $4$, alignment $8$, a virtual base laid out at the end of the most-derived object (the GCC/Clang Itanium model) — compute both designs.",
        steps: [
          { label: "Step 1: The non-virtual design", text: "`Istream_nv : public IOS` is vptr $8$ + state $4$ + cnt $4$ = $16$ bytes, its state at offset $8$. `Iostream_nv` places the `Istream_nv` subobject at offset $0$ and the `Ostream_nv` subobject at offset $16$: $16 + 16 = 32$ bytes holding **two** state words, at offsets $8$ and $24$." },
          { label: "Step 2: Why two words is a defect", text: "A read that hits end-of-file sets eofbit in the istream-side word; the next write consults the ostream-side word and believes the stream is still good — the object disagrees with itself. Even `if (io)` becomes ambiguous, because two base subobjects offer the conversion." },
          { label: "Step 3: The virtual design, one class", text: "`Istream_v : public virtual IOS` is vptr $8$ + cnt $4$ + state $4$ = $16$ — the shared base is placed last, at offset $12$. Same size as the non-virtual single class." },
          { label: "Step 4: The virtual diamond", text: "In `Iostream_v`, the Istream part (vptr at $0$, cnt at $8$) is followed by the Ostream part at offset $16$ (vptr at $16$, cnt at $24$), and the **single shared** state word lands at offset $28$: $12 + 4 + 12 + 4 = 32$ bytes, one state subobject." },
          { label: "Step 5: The bill", text: "The size is the same $32$ — padding absorbed the bookkeeping, because the vtable carries the virtual-base offset rather than a dedicated pointer field. The price is paid elsewhere: reaching the state through an `Istream*` now means loading that offset from the vtable at run time, and the most-derived `Iostream_v` alone constructs `IOS`." },
        ],
        result: "Two designs, both 32 bytes: the non-virtual diamond carries two divergent states at offsets $8$ and $24$; the virtual diamond carries one shared state at offset $28$. Correctness, not size, decides — and the sharing costs one indirection.",
      },
      {
        title: "Working through multiple inheritance",
        problem: "Multiple base classes and their conflicts. Your task: declare classes with several direct bases and predict their subobjects, conversions and construction order.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: declare classes with several direct bases and predict their subobjects, conversions and construction order. Write down the guarantee you will rely on — for this chapter it is: `class D : public A, public B` gives D two base subobjects and both pointer conversions — the hierarchy becomes a true DAG" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Circle : Shape { void draw() const override; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — resolve cross-base name ambiguities with qualification and using-declarations, and state exactly when a clash becomes an error — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Name clashes across bases are ambiguities at the point of use: qualify (`x.A::f()`) or resolve with a using-declaration; a clash never used is not an error If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `class D : public A, public B` gives D two base subobjects and both pointer conversions — the hierarchy becomes a true DAG Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`class D : public A, public B` gives D two base subobjects and both pointer conversions — the hierarchy becomes a true DAG",
      "Name clashes across bases are ambiguities at the point of use: qualify (`x.A::f()`) or resolve with a using-declaration; a clash never used is not an error",
      "A virtual base is one shared subobject constructed by the most-derived class — the standard's `basic_ios` keeps an iostream's state single",
    ],
    quiz: [
      {
        q: "In the standard, why is `basic_ios` declared a virtual base of `basic_istream` and `basic_ostream`?",
        options: ["To make stream objects smaller than single inheritance could", "So that `basic_iostream` — deriving from both — contains exactly one stream-state subobject: end-of-file seen by a read is seen by the next write through the same object", "To let streams be copied cheaply", "Because virtual functions require virtual bases"],
        answer: 1,
        explanation: "Without the virtual base, the diamond would hold two copies of the state and the read side would disagree with the write side. Virtual inheritance is what keeps the state single — size is not the issue.",
      },
      {
        q: "`class BB : public A, public B {}` where both A and B declare `int f();`. Then `BB b; b.f();` is:",
        options: ["a compile-time error: ambiguous — qualify as `b.A::f()`, or introduce a using-declaration choosing one candidate", "fine — `A::f` is called because A is listed first", "fine — the more-derived candidate wins", "a run-time choice made through the vtable"],
        answer: 0,
        explanation: "Lookup finds two different members in two base subobjects, so the use is ambiguous at compile time. Declaration order and derivations rescue nothing; qualification or a using-declaration does.",
      },
      {
        q: "In `class D : public B1, public B2`, where both B1 and B2 virtually derive from V, who initializes V when a D is created?",
        options: ["B1 — the first base in declaration order initializes V", "V is constructed twice, once along each path", "The most-derived class D initializes V; the initializers for V written in B1 and B2 are ignored", "No class initializes V — virtual bases self-construct"],
        answer: 2,
        explanation: "Virtual bases are constructed by the most-derived class, before the non-virtual bases. That is why virtual bases should have default constructors, and why intermediate classes' V-initializers only apply when they themselves are most-derived.",
      },
      {
        q: "Under the section's layout model (vptr $8$, int $4$, alignment $8$), how many state subobjects does the NON-virtual diamond `Iostream_nv : Istream_nv, Ostream_nv` contain, and where?",
        options: ["One, at offset 0", "Two — one per base subobject, at offsets $8$ and $24$", "Two, both at offset $28$", "One, at offset $28$"],
        answer: 1,
        explanation: "Each base subobject embeds its own copy: the Istream part's state at offset $8$, the Ostream part's at $24$ — duplication that virtual inheritance exists to remove, leaving the single shared word at offset $28$.",
      },
    ],
  },

  // ------------------------------------------------------------------ 21.4
  {
    sectionId: "cpp-ch21-s4",
    readingTime: 4,
    intro: "The chapter closes, like every chapter in TC++PL, with a set of rules. They compress the design method: find the commonality and express it as a minimal abstract interface; keep implementation out of the public graph; prefer composition; reserve multiple inheritance for combining interfaces, and virtual bases for genuinely shared state. This section states the rules and — more useful — shows how to run them as an audit over a flawed hierarchy.",
    objectives: [
      "Apply the design order: interface first, minimal, abstract and data-free",
      "Choose correctly among public inheritance, membership, private inheritance and plain function arguments using the relationship rules",
      "Deploy multiple inheritance and virtual bases within the chapter's limits: interfaces combine freely; shared state needs virtual bases",
    ],
    concepts: [
      {
        term: "Design the interface first",
        kind: "method",
        statement: "Start from the **uses**: enumerate the operations user code needs through the base, make exactly those the abstract interface — pure virtuals plus a virtual destructor — and stop. Every extra operation is a permanent tax on every present and future implementer, and every data member in the root forces a representation choice on classes that never asked for it. An interface is a contract drafted on behalf of classes you will never see: minimal beats convenient.",
        detail: "The companion test is extension: write a use, then design the next derived class against the interface as a trial. If it forces edits to user code, the interface is wrong.",
      },
      {
        term: "The relationship rules",
        kind: "law",
        statement: "**is-a** → public inheritance. **has-a** → a member. **uses-a** → a function argument — no inheritance at all. **implemented-in-terms-of** → a member, or private inheritance when the three special powers are needed: overriding the implementation's virtuals, its protected members, or the empty-base optimization. The default is membership; derivation is a decision, not a reflex.",
        detail: "These four relationships, applied edge by edge over the class graph, are the whole of hierarchy design in one line — the rest of the advice is commentary.",
      },
      {
        term: "Multiple inheritance, sparingly",
        kind: "insight",
        statement: "Multiple inheritance is sound and idiomatic for **combining interfaces** (`basic_iostream`) and for combining an interface with a private implementation; it turns hazardous when two bases both contribute **state**, because the derived object now owns two half-implementations that must be kept consistent. Virtual bases are the tool of last resort: use them when the shared state is genuinely one thing — a stream's flags — never as a preventive habit.",
        detail: "A virtual base costs every use an indirection and moves construction to the most-derived class; reach for it when the duplication is a correctness problem, not a style problem.",
      },
      {
        term: "Test by extension",
        kind: "insight",
        statement: "A hierarchy is designed for the classes that are **not in it yet**. The audit questions: can a new derived class be added without touching user code or sibling classes? Does every operation of the base still make sense for it? Does it need to override, or would a member have expressed the relationship better? A design that only fits the classes you have today is a taxonomy, not an interface.",
        detail: "This is the operational form of the substitutability condition: each prospective derived class is a test case for the public contract.",
      },
      {
        term: "Shipping rule for class hierarchies",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Design the interface first, from the uses: minimal, abstract, data-free — each operation is a permanent commitment** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "A four-defect hierarchy audit",
        problem: "Find and fix the design defects in this sketch for a shape editor: `class Shape { public: virtual void draw() const { /* blank screen */ } protected: Point c; int col; }; class Rectangle : public Shape { public: void set_width(int); void set_height(int); }; class Square : public Rectangle {}; class File_shape : public Shape, public File { public: void draw() const; };` — where `File` is a class offering `read`, `write` and `sync`.",
        steps: [
          { label: "Defect 1: state in the root", text: "`c` and `col` make Shape an implementation, not an interface: every shape pays the layout and the invariant — including image-backed shapes with no center. Fix: pure virtuals and a virtual destructor only; representation moves into the classes that have it." },
          { label: "Defect 2: a default draw body", text: "A blank-screen default silently does the wrong thing for any new shape that forgets to override. Make `draw` pure: the compiler becomes the migration checklist instead of the bug report." },
          { label: "Defect 3: Square from Rectangle", text: "Independent `set_width` and `set_height` through a `Rectangle*` can break the square invariant — the substitutability condition fails. Fix: do not derive; both classes can implement the Shape interface directly, or share a private polygon implementation base." },
          { label: "Defect 4: File as a public base", text: "A `File_shape` is not a File: the public edge lets user code upcast to `File*` and call `read`/`write`/`sync` on a shape. It is implemented-in-terms-of a file — fix: make `File` a member (or at most a private base)." },
        ],
        result: "The repaired design: a data-free pure interface at the root, Square decoupled from Rectangle, and File demoted from the public graph to an implementation detail — four applications of the relationship rules, four classes that no longer lie.",
      },
      {
        title: "Reviewing class hierarchies code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the design order: interface first, minimal, abstract and data-free.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Design the interface first, from the uses: minimal, abstract, data-free — each operation is a permanent commitment" },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `struct Circle : Shape { void draw() const override; };`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: choose correctly among public inheritance, membership, private inheritance and plain function arguments using the relationship rules. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: is-a → public derivation; has-a → member; uses-a → argument; implemented-in-terms-of → member, or private inheritance for its three special powers" },
        ],
        result: "The review ends with findings tied to reasons: Design the interface first, from the uses: minimal, abstract, data-free — each operation is a permanent commitment Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Design the interface first, from the uses: minimal, abstract, data-free — each operation is a permanent commitment",
      "is-a → public derivation; has-a → member; uses-a → argument; implemented-in-terms-of → member, or private inheritance for its three special powers",
      "Combine interfaces with multiple inheritance; reserve virtual bases for genuinely shared state — and judge every hierarchy by the derived classes not yet written",
    ],
    quiz: [
      {
        q: "Per the chapter's advice, the first move when designing a new hierarchy is to:",
        options: ["Decide the data members of the root class", "Design the interface from the uses — the operations user code needs through the base — before any representation", "Pick the deepest taxonomy that fits the domain concepts", "Make every class derive from a common Object root"],
        answer: 1,
        explanation: "Interfaces are drafted from uses; representation follows. Starting from data or taxonomy produces exactly the classical-hierarchy failure mode the chapter dismantles.",
      },
      {
        q: "Which relationship justifies public inheritance?",
        options: ["implemented-in-terms-of", "has-a", "uses-a", "is-a — substitutability through the base interface"],
        answer: 3,
        explanation: "Public derivation asserts substitutability. The other three relationships call for a member, a function argument, or at most a private base — never a public edge.",
      },
      {
        q: "Which statement matches the chapter's advice on multiple inheritance and virtual bases?",
        options: ["Combine interfaces freely with public bases; combine implementation state from two bases only with care — and use a virtual base when the state must genuinely be shared", "Avoid multiple inheritance in all forms; single inheritance plus composition always suffices", "Make every base virtual as a matter of hygiene", "Prefer repeated non-virtual bases so each subobject keeps its own copy of the state"],
        answer: 0,
        explanation: "The streams show the pattern: interfaces combine cleanly, duplicated state breaks invariants, and the virtual base is the surgical fix for shared state — not a default. Blanket rules in either direction contradict the chapter.",
      },
    ],
  },
]

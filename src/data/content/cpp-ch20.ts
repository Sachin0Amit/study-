import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 20: Derived Classes — sections 20.1–20.7 (TC++PL pp. 577–612)
// Master study content.
// ============================================================================

export const cppCh20Content: SectionContent[] = [
  // ------------------------------------------------------------------ 20.1
  {
    sectionId: "cpp-ch20-s1",
    readingTime: 5,
    intro: "Inheritance came to C++ from Simula together with the class concept itself: objects of different kinds respond to the same request, and the code making the request never names the kinds. A derived class adds members to those of its base — `class Circle : public Shape` says a Circle is a kind of Shape, usable wherever a Shape is expected. This chapter builds the machinery: virtual functions and override control, the type-field technique they replace, abstract classes, the three levels of base access, and pointers to members.",
    objectives: [
      "Read a derived-class declaration and say exactly what a derived object contains and converts to",
      "Distinguish interface inheritance (substitutability) from implementation reuse",
      "Connect the chapter's pieces: virtual functions, abstract classes, access control, pointers to members",
    ],
    concepts: [
      {
        term: "Base and derived",
        kind: "definition",
        statement: "`class D : public B { ... };` declares D **derived from** base B. A D object contains a B subobject plus D's new members; unhidden B members are used directly in D. The key conversions are free: a `D*` converts to a `B*` and a `D&` to a `B&`, which is what lets Shape code drive Circle objects.",
        detail: "A class may have several direct bases (chapter 21) and may itself be derived from; the result is a directed acyclic graph, not a tree.",
      },
      {
        term: "From Simula",
        kind: "insight",
        statement: "Stroustrup took the class/derived-class mechanism from **Simula**, the simulation language whose worldview is exactly the hierarchy worldview: a program is a set of objects of many kinds, and variation between kinds is expressed by derivation plus overriding rather than by case analysis.",
        detail: "The Manager-and-Employee shape of the idea: a Manager is an Employee (name, department, hire date) plus a group and a level — same type of thing, more facilities.",
      },
      {
        term: "What inheritance buys",
        kind: "insight",
        statement: "Two distinct goods: **interface inheritance** — code written against B keeps working for every present and future D, unmodified and un-recompiled; and **implementation reuse** — D's members use B's members instead of restating them. The first is the deep one: the substitutability that lets libraries ship hierarchies that user code extends.",
        detail: "Confusing the two is the classic misuse: inheriting to grab a base's functions, without any is-a relationship, couples the classes for no behavioral gain.",
      },
      {
        term: "The is-a test",
        kind: "law",
        statement: "Public inheritance means **is-a**: every D must be usable wherever a B is expected, through B's interface, without surprises. Circle is-a Shape; a Car has-an Engine (member); a Stack may be implemented-in-terms-of a list (containment or private derivation) — but a Stack is-not-a list.",
        detail: "The square-and-rectangle trap is the standard counterexample: a Square with set_edge is not substitutable for a Rectangle with independent set_width and set_height, whatever the geometry suggests.",
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Inheritance from Simula. You can claim this section when you can read a derived-class declaration and say exactly what a derived object contains and converts to — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 20 (Derived Classes); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Classifying six type relationships",
        problem: "Decide for each pair: public inheritance, plain membership (composition), or neither — (1) Circle/Shape, (2) Car/Engine, (3) Manager/Employee, (4) Stack/list, (5) Square/Rectangle with independent edge setters, (6) Flight/Airplane.",
        steps: [
          { label: "Steps 1 and 3: is-a", text: "A Circle is a Shape and a Manager is an Employee — every operation of the base applies meaningfully to the derived, so both get public inheritance and the substitution it licenses." },
          { label: "Steps 2 and 6: has-a", text: "A Car has an Engine; a Flight (probably) has an Airplane — whole and part, not kind and kind. A private member is the right tool; inheriting would let an engine stand in for the car." },
          { label: "Step 4: implemented-in-terms-of", text: "A Stack can be built on a list, but a Stack is not a list (no indexing, no middle insertion exposed) — containment, or at most private derivation, keeps the reuse without asserting substitutability." },
          { label: "Step 5: the trap", text: "Square inherits Rectangle only if the rectangle interface (independent width and height) is honestly honored by a square. With set_width and set_height, it is not — the pair fails is-a and should not share a public hierarchy." },
        ],
        result: "Two is-a pairs (public inheritance), two has-a pairs (members), one implemented-in-terms-of (containment or private inheritance), one trap — the classification is the whole design skill in miniature.",
      },
      {
        title: "Working through introduction",
        problem: "Inheritance from Simula. Your task: read a derived-class declaration and say exactly what a derived object contains and converts to.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: read a derived-class declaration and say exactly what a derived object contains and converts to. Write down the guarantee you will rely on — for this chapter it is: A derived class contains a base subobject and converts implicitly to base pointers and references — that conversion is where polymorphism enters" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Shape { virtual void draw() const = 0; virtual ~Shape() = default; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — distinguish interface inheritance (substitutability) from implementation reuse — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Inheritance and virtual functions arrived from Simula; their job is expressing variation between kinds without case analysis If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A derived class contains a base subobject and converts implicitly to base pointers and references — that conversion is where polymorphism enters Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A derived class contains a base subobject and converts implicitly to base pointers and references — that conversion is where polymorphism enters",
      "Inheritance and virtual functions arrived from Simula; their job is expressing variation between kinds without case analysis",
      "Public inheritance asserts is-a; has-a and implemented-in-terms-of are membership relationships, not inheritance",
    ],
    quiz: [
      {
        q: "After `class Circle : public Shape { ... };`, which statement is TRUE?",
        options: ["Shape contains a Circle subobject", "A Circle object contains a Shape subobject and a `Circle*` converts to a `Shape*`", "Shape's constructors are inherited by Circle", "Circle can no longer define data members"],
        answer: 1,
        explanation: "Derivation adds to: the derived object embeds the base, and the derived-to-base pointer conversion is implicit — the conversion that lets Shape code operate on a Circle.",
      },
      {
        q: "Which language contributed the class-derivation mechanism that C++ inherited?",
        options: ["Simula", "Smalltalk", "BCPL", "CLU"],
        answer: 0,
        explanation: "Classes, derivation and virtual functions came from Simula, the simulation language; C++ kept the mechanism and re-grounded it in static typing and zero-overhead use.",
      },
      {
        q: "The is-a test for public inheritance demands that",
        options: ["the derived class share all of the base's data members", "every derived object be usable wherever a base is expected, through the base's interface, without surprises", "the base class be abstract", "the two classes have the same name for their constructors"],
        answer: 2,
        explanation: "Substitutability is the contract: if any use through the base's interface would surprise, the relationship is has-a or implemented-in-terms-of instead — the Square/Rectangle trap being the canonical failure.",
      },
    ],
  },

  // ------------------------------------------------------------------ 20.2
  {
    sectionId: "cpp-ch20-s2",
    readingTime: 9,
    intro: "A derived class declares what it adds and, function by function, what it redefines. `virtual` marks a base member for run-time selection; `override` asks the compiler to prove that a redefinition really overrides; `final` stops the chain deliberately. Construction runs base-first and destruction runs it base-last, and copy and move have their own rules that trip the unwary — most famously slicing.",
    objectives: [
      "Declare a derived class overriding virtuals with override, and predict which function a call through a base pointer selects",
      "Trace construction and destruction order through a hierarchy, including virtual calls made from constructors",
      "Explain the exact signature rules for overriding and what final forbids",
    ],
    concepts: [
      {
        term: "Derived class declaration",
        kind: "definition",
        statement: "`class Circle : public Shape { public: void draw() const override; void rotate(int) override {} private: Point x; int r; };` — Circle is derived from Shape, adds data members x and r, and overrides the virtuals draw and rotate. Unhidden Shape members are used as if they were Circle's own.",
        detail: "The book's flavor: `Circle(Point p, int rr) : x{p}, r{rr} {}` — the base has no data to initialize here, so only members appear in the initializer list.",
      },
      {
        term: "Virtual function",
        kind: "definition",
        statement: "A member function declared `virtual` in a base can be **overridden** in a derived class, and when called through a base pointer or reference it is the override belonging to the object's dynamic type that runs — chosen at run time, from the object, not from the static type of the pointer.",
        detail: "The design decision C++ makes: the base-class author decides which operations are customizable; a derived redefinition of a non-virtual merely hides and never reaches callers through the base.",
      },
      {
        term: "Override control: override and final",
        kind: "method",
        statement: "`override` after a declarator makes the compiler verify a matching base virtual — same name, same parameter list, same const-ness, and a return type that is identical or covariant. `final` forbids further overriding of that virtual (or, on a class, any derivation from it). Both are C++11 additions that turn silent mistakes into compile errors.",
        detail: "The classic catch: `void rotate(double)` does not override `virtual void rotate(int)` — it hides it, and calls through the base silently run the base version. One word, `override`, makes that a compile-time error.",
      },
      {
        term: "Construction and destruction order",
        kind: "law",
        statement: "A derived object is built **bottom-up**: the base subobject first (its members, then its constructor body), then the derived class's members, then the derived constructor body. Destruction runs exactly in reverse. Inside a base constructor or destructor, virtual calls resolve at that level — the derived part does not exist yet or no longer does.",
        detail: "This is why a base can be abstract yet still have a constructor: it runs as part of every derived construction, even though no standalone base object can be created.",
      },
      {
        term: "Slicing",
        kind: "insight",
        statement: "Copying a derived object into a base variable copies **only the base subobject** — the Circle-ness is sliced off. Assignment is no rescue: copy assignment is never virtual and cannot change an object's dynamic type. That is why hierarchies are used through pointers and references, never by value.",
        detail: "`void f(Shape s);` called with a Circle is either a compile error (Shape abstract) or, for a concrete base, a silent slice — both are design smells; the correct parameter is `const Shape&`.",
      },
    ],
    figures: [
      {
        caption: "Figure — The archetypal hierarchy: Shape with Circle and Square derived. In UML the hollow triangle is public inheritance (is-a); italics mark the virtual functions that the derived classes override — `Circle::rotate` is the book's empty no-op, since a circle is invariant under rotation.",
        svg: `<svg viewBox="0 0 760 495" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="UML class diagram: abstract base Shape with derived classes Circle and Square"><g font-family="ui-sans-serif, system-ui" fill="currentColor"><rect x="295" y="30" width="170" height="120" fill="none" stroke="currentColor" stroke-width="1.7"/><line x1="295" y1="64" x2="465" y2="64" stroke="currentColor" stroke-width="1.2"/><text x="380" y="53" font-size="16" font-weight="600" text-anchor="middle">Shape</text><text x="310" y="88" font-family="monospace" font-size="12.5" font-style="italic">+ draw() const</text><text x="310" y="110" font-family="monospace" font-size="12.5" font-style="italic">+ rotate(int)</text><text x="310" y="132" font-family="monospace" font-size="12.5" font-style="italic">+ ~Shape()</text><text x="478" y="98" font-size="11" opacity="0.65">(italics = virtual)</text><rect x="50" y="310" width="230" height="140" fill="none" stroke="currentColor" stroke-width="1.7"/><line x1="50" y1="344" x2="280" y2="344" stroke="currentColor" stroke-width="1.2"/><text x="165" y="333" font-size="16" font-weight="600" text-anchor="middle">Circle</text><text x="64" y="368" font-family="monospace" font-size="12.5" font-style="italic">+ draw() const</text><text x="64" y="390" font-family="monospace" font-size="12.5" font-style="italic">+ rotate(int) {}</text><line x1="50" y1="404" x2="280" y2="404" stroke="currentColor" stroke-width="0.8" opacity="0.6"/><text x="64" y="426" font-family="monospace" font-size="12.5">- x : Point</text><text x="64" y="446" font-family="monospace" font-size="12.5">- r : int</text><rect x="480" y="310" width="230" height="140" fill="none" stroke="currentColor" stroke-width="1.7"/><line x1="480" y1="344" x2="710" y2="344" stroke="currentColor" stroke-width="1.2"/><text x="595" y="333" font-size="16" font-weight="600" text-anchor="middle">Square</text><text x="494" y="368" font-family="monospace" font-size="12.5" font-style="italic">+ draw() const</text><text x="494" y="390" font-family="monospace" font-size="12.5" font-style="italic">+ rotate(int)</text><line x1="480" y1="404" x2="710" y2="404" stroke="currentColor" stroke-width="0.8" opacity="0.6"/><text x="494" y="426" font-family="monospace" font-size="12.5">- x : Point</text><text x="494" y="446" font-family="monospace" font-size="12.5">- edge : int</text><g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="165" y1="310" x2="165" y2="252"/><line x1="165" y1="252" x2="595" y2="252"/><line x1="595" y1="252" x2="595" y2="310"/><line x1="380" y1="252" x2="380" y2="164"/><polygon points="380,150 372,164 388,164"/></g><text x="30" y="218" font-size="11.5">public inheritance:</text><text x="30" y="236" font-size="11.5">a Circle is a Shape — usable wherever</text><text x="30" y="254" font-size="11.5">a Shape pointer or reference is</text><text x="380" y="478" font-size="12" text-anchor="middle" opacity="0.8">the hollow triangle means is-a; in 20.4 the virtuals become pure and Shape is abstract</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Rotating a square, and not rotating a circle",
        problem: "A Square stores its corner points; rotation by angle $\\theta$ maps $(x, y)$ to $(x\\cos\\theta - y\\sin\\theta,\\ x\\sin\\theta + y\\cos\\theta)$. Rotate the corner (3, 4) by 90 degrees, then rotate a Circle by the same 90 degrees through a `Shape*`.",
        steps: [
          { label: "Step 1: Substitute", text: "With $\\theta = 90°$, $\\cos\\theta = 0$ and $\\sin\\theta = 1$, so the map collapses to $(x, y) \\mapsto (-y, x)$ — quarter turn counterclockwise." },
          { label: "Step 2: Rotate the corner", text: "(3, 4) maps to (−4, 3). The distance from the origin is preserved: $\\sqrt{3^2 + 4^2} = 5 = \\sqrt{(-4)^2 + 3^2}$ — the square stays a square." },
          { label: "Step 3: Dispatch through the base", text: "`Shape* p = &sq; p->rotate(90);` runs Square's override and moves the points. `p = &c; p->rotate(90);` runs Circle's override — the empty no-op `{}` — because a circle is invariant under rotation." },
          { label: "Step 4: One call site, two behaviors", text: "The two calls have identical machine code at the call site; the difference lives in the objects, which is the entire point of virtual functions." },
        ],
        result: "The square's corner (3, 4) moves to (−4, 3) while the circle does nothing — same expression, `p->rotate(90)`, dispatched from each object's own class.",
      },
      {
        title: "The birth and death of a Circle",
        problem: "Trace the constructor and destructor calls for `Circle c{Point{1,2}, 5};` in a hierarchy where Shape has a constructor body and Circle initializes x and r.",
        steps: [
          { label: "Construction, bottom-up", text: "Shape's base subobject is built first — its members (here only the vptr machinery) and then Shape's constructor body. Only then: Circle's members in declaration order (x from Point{1,2}, then r from 5), and finally Circle's constructor body." },
          { label: "Destruction, top-down", text: "At scope exit the order is exactly reversed: ~Circle body, then members (r, x), then ~Shape — the base is destroyed last." },
          { label: "The virtual-call caveat", text: "If Shape's constructor calls `this->draw()`, the call resolves to Shape's draw — Circle's part does not exist yet. The same happens in ~Shape, for the mirror reason. Overridable behavior is simply not available during base construction and destruction." },
        ],
        result: "Base, members, body on the way in; body, members, base on the way out — and no virtual dispatch past the level currently being constructed or destroyed.",
      },
    ],
    keyTakeaways: [
      "A virtual call through a base pointer selects the override from the object's dynamic type — the decision is made at run time, from the object",
      "`override` turns the accidental-hide bug into a compile error; `final` deliberately stops overriding or derivation",
      "Build bottom-up, destroy top-down; inside base constructors and destructors, virtual calls stay at the base level; and copying a derived object into a base slices it",
    ],
    quiz: [
      {
        q: "`class D : public B` declares `void f(double)` intending to override B's `virtual void f(int)`. What happens?",
        options: ["It overrides f for double arguments only", "It hides — it is not an override, so calls through a B pointer still run B::f(int); with `override` it would not compile", "The program is undefined", "The two functions overload each other within B"],
        answer: 2,
        explanation: "The parameter lists differ, so no override exists: D's function merely hides B's by name, and a call through the base uses the base version — the silent bug that `override` exists to catch.",
      },
      {
        q: "During destruction of a Circle, when does the `~Shape` body run relative to ~Circle's body?",
        options: ["Before it — bases go first", "After it — derived bodies first, base last", "Simultaneously, in one function", "Never — destructors do not chain"],
        answer: 1,
        explanation: "Destruction is the exact reverse of construction: the derived destructor body runs while the object is still whole, then its members, then the base's destructor.",
      },
      {
        q: "Shape's constructor calls `this->draw()` while a Circle is being constructed. Which draw runs?",
        options: ["Circle::draw — the object is already a Circle", "Shape::draw — during base construction, virtual dispatch resolves at the base level", "It is undefined behavior", "The call is a compile error"],
        answer: 1,
        explanation: "The derived part does not exist yet, so dispatch cannot reach it; the call resolves as if the object were exactly the class under construction. The same holds in destructors.",
      },
      {
        q: "`void f(Shape s);` is called with a Circle and Shape is a concrete base class. What happens?",
        options: ["The Circle is passed by reference", "The argument is sliced: only Shape's subobject is copied into s", "A Circle is constructed inside f", "The call does not compile"],
        answer: 3,
        explanation: "Pass by value copies the base subobject only — the derived members are sliced away. (Had Shape been abstract, the compiler would have refused the parameter outright.) Either way, the fix is `const Shape&`.",
      },
      // PYQ-pattern: GATE 2016 — virtual versus non-virtual dispatch (rephrased)
      {
        q: "What does this program print?\n```cpp\n#include <iostream>\nstruct Base {\n  virtual void who() { std::cout << 'B'; }\n  void id() { std::cout << 'b'; }\n};\nstruct Child : Base {\n  void who() override { std::cout << 'C'; }\n  void id() { std::cout << 'c'; }\n};\nint main() {\n  Child c;\n  Base* p = &c;\n  p->who();\n  p->id();\n}\n```",
        options: ["`Cb`", "`Bb`", "`Cc`", "`Bc`"],
        answer: 0,
        explanation: "Step 1: The code given calls one virtual and one non-virtual member through a base pointer to a derived object. Step 2: The governing rules are the two dispatches: virtual calls resolve on the dynamic type through the table, while non-virtual calls resolve on the static type at compile time. Step 3: Tracing call by call, `p->who()` dispatches to `Child::who` printing `C`, and `p->id()` binds to `Base::id` printing `b`, for a total of `Cb`. Step 4: The distractors fail because the virtual call ignores the static type, the hiding non-virtual never overrides, and each call follows its own dispatch rule. Step 5: Therefore the program prints `Cb`."
      }
    ],
    depth: [
      {
        tier: "masters",
        title: "Virtual functions and the object layout they imply",
        blocks: [
          {
            kind: "para",
            body: "Separate the two types every polymorphic pointer has. The **static type** of `p` in `Shape* p` is Shape — it is fixed by the declaration and known to the compiler. The **dynamic type** of `*p` is the type of the object actually created, known only where `new` ran. Virtual dispatch is the rule that certain calls consult the second, not the first. The deep problem is that C++ compiles translation units separately and has no global program database: when it compiles `p->draw()`, it cannot enumerate every class that will ever derive from Shape, so it cannot bind the call to a single address. The standard implementation solves this by moving the missing information **into the object itself** — every polymorphic object carries a pointer to its class's dispatch data.",
          },
          {
            kind: "theorem",
            heading: "The final-overrider rule",
            body: "Let B declare f virtual, and let p have static type `B*` pointing to an object whose dynamic type is D. Then the call `p->f(args)` invokes the **final overrider** of `B::f` in D: the override closest to D on the derivation path from D up to B. If no class on that path (starting at D) overrides f, the final overrider is `B::f` itself. Two consequences follow immediately: virtual-ness is transitive, since an override is implicitly virtual whether or not it repeats the keyword — so overriding propagates through intermediate classes; and the rule is per-object, so two Shape pointers in the same expression can dispatch two different functions from identical call sites.",
          },
          {
            kind: "derivation",
            heading: "From the rule to two instructions",
            body: "Dispatch by dynamic type needs a per-class table of function addresses and a per-object link to that table. Hence the **vtable object model**: for each polymorphic class, the compiler lays out one static table — one slot per virtual function, conventionally in declaration order; for each object, a hidden **vptr**, conventionally at offset zero, pointing at its class's table. (Real ABIs such as the Itanium ABI put an offset-to-top and a `type_info` pointer just before slot 0 — the RTTI hook used later.) The call `p->draw()` then compiles to roughly: `mov rax, [rdi]` — load the vptr from the object; then `call [rax]` — index slot 0 and jump through it. The exact slot numbering is an implementation detail, but the shape is universal: **two dependent loads and one indirect call**. This is also why an override must match the base signature exactly: a function that merely hides (a differently-typed parameter, a missing const) never occupies the slot — the table still holds the base's address, and the call silently runs the wrong code.",
          },
          {
            kind: "example",
            heading: "A Circle, byte by byte",
            body: "With `Point` = two ints, a typical 64-bit layout is: Shape = one vptr, `sizeof(Shape) == 8`. Circle = vptr at bytes [0,8), the Point x at [8,16), `int r` at [16,20), padding to [20,24) — `sizeof(Circle) == 24`. Circle's vtable has three slots in declaration order: slot 0 `Circle::draw`, slot 1 `Circle::rotate` (the empty no-op body), slot 2 `Shape::~Shape`. Square's table has the same shape — `Square::draw`, `Square::rotate`, `Shape::~Shape` — the destructor entry shared because neither class declares its own. Now the costs become concrete: `p->draw()` with p pointing at a Square is a load, an indexed load, an indirect jump to Square::draw. And slicing has a byte count: `Shape s = c;` copies 8 of 24 bytes — everything the base knows about. `*sp = c;` through a `Shape&` calls Shape's assignment (never virtual) and assigns only the base subobject: assignment can never change an object's dynamic type, which is why the language does not even try to let it.",
          },
          {
            kind: "para",
            heading: "Destructors and RTTI live in the same table",
            body: "Deleting through a base pointer must run the derived destructor — that is a virtual call too, which is why a class meant as a polymorphic base needs a `virtual` destructor (the ABIs actually store two destructor entries: the complete-object and the deleting destructor, so that `delete p` frees the right amount). The `type_info` pointer hanging off the vtable is the second product of the same machinery: `typeid` and `dynamic_cast` read it — which is exactly why only polymorphic types (types with a vptr) can be dynamically cast down a hierarchy. Dispatch and RTTI are two uses of one table.",
          },
          {
            kind: "remark",
            heading: "The price list",
            body: "Per class: one vtable plus `type_info` in static storage — off the hot path. Per object: one vptr, 8 bytes on a 64-bit ABI — a Shape grows from 0 bytes of overhead to 8 the moment it gains its first virtual function. Per call: two dependent loads plus an indirect branch, and the optimizer cannot inline through the indirect target — for trivial bodies the lost inlining, not the branch, dominates. Hardware cooperates well: the loads hit L1 and branch predictors learn monomorphic call sites. And the zero-overhead principle survives intact — a class with no virtual functions stores no vptr and runs no table lookups; you pay only for the polymorphism you actually use.",
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 20.3
  {
    sectionId: "cpp-ch20-s3",
    readingTime: 7,
    intro: "The point of a hierarchy is that one piece of code can drive many types: `rotate_all` walks a vector of Shape pointers and every object rotates itself the right way. Stroustrup compares this with the older technique — a type field plus a switch statement in every operation — and the comparison is the chapter's best design lesson. The section ends where the mechanism begins: the vtable, which is the switch the compiler writes for you.",
    objectives: [
      "Write polymorphic algorithms such as draw_all and rotate_all over vectors of base pointers",
      "Contrast the type-field-and-switch design with virtual dispatch, listing exactly what must change when a new type joins each design",
      "Explain the vtable implementation of virtual dispatch well enough to reason about its cost",
    ],
    concepts: [
      {
        term: "Polymorphic containers and algorithms",
        kind: "method",
        statement: "Code that works on a hierarchy stores (smart) base pointers and never names the concrete types: `void rotate_all(vector<Shape*>& vs, int d) { for (auto* p : vs) p->rotate(d); }`. The function was written, compiled and debugged before Pentagon existed — and needs no edit, no recompile, no source access when Pentagon arrives.",
        detail: "Modern style prefers `vector<unique_ptr<Shape>>` so ownership and polymorphism come together; the dispatch argument is identical.",
      },
      {
        term: "Type fields",
        kind: "definition",
        statement: "The pre-inheritance design: every object carries a discriminant — `enum Kind { circle, triangle, square };` with a `kind()` accessor — and every operation is a function containing a **switch over the field**: one branch per kind, maintained by hand in every operation that cares.",
        detail: "The field must be kept consistent with the data layout, every switch must list every kind, and no compiler checks that an operation's switch was updated when a kind was added.",
      },
      {
        term: "Why virtual beats switch",
        kind: "theorem",
        statement: "A virtual function is **a switch statement the compiler writes, indexes and keeps consistent for you** — the object itself selects its case. Adding a type-field kind means editing every switch in every operation; adding a derived class means writing one new class, and the existing operations keep working unmodified.",
        detail: "The book's deeper point: data and the functions maintaining it should live together. In the switch design the knowledge of circle-ness is smeared across every operation; in the hierarchy it is in Circle.",
      },
      {
        term: "The vtable mechanism",
        kind: "definition",
        statement: "Each polymorphic class gets one static **vtable** — an array of the addresses of its virtual functions' final overriders — and each object starts with a **vptr** to its class's table. A virtual call loads the vptr, indexes the declared slot, and jumps: $O(1)$ time, a couple of instructions, but an indirect jump the optimizer cannot inline through.",
        detail: "The vtable is why virtual dispatch is cheap and uniform: the alternative — searching a class DAG at each call — is what dynamic languages pay for late binding, and C++ precomputes it into a flat table per class.",
      },
      {
        term: "Class Hierarchies: the working contract",
        kind: "definition",
        statement: "**Class Hierarchies.** Type fields versus virtual functions. You can claim this section when you can write polymorphic algorithms such as draw_all and rotate_all over vectors of base pointers — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 20 (Derived Classes); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "Figure — One call site, two destinations. Each object begins with a vptr to its class's vtable; `p->draw()` loads the vptr and calls slot 0 — the same two machine instructions whichever object arrives.",
        svg: `<svg viewBox="0 0 780 460" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Virtual dispatch: two objects, two vtables, one call site"><g font-family="ui-sans-serif, system-ui" fill="currentColor"><rect x="20" y="14" width="225" height="72" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="32" y="40" font-family="monospace" font-size="13">void f(Shape* p)</text><text x="32" y="62" font-family="monospace" font-size="13">{  p->draw();  }</text><text x="32" y="104" font-size="11.5" opacity="0.75">compiled once — the call site never names a class</text><text x="20" y="134" font-size="13" font-weight="600">Circle c</text><rect x="20" y="142" width="230" height="38" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="20" y="142" width="70" height="38" fill="currentColor" opacity="0.12"/><text x="55" y="166" font-family="monospace" font-size="12.5" text-anchor="middle">vptr</text><text x="135" y="166" font-family="monospace" font-size="12" text-anchor="middle">x : Point</text><text x="215" y="166" font-family="monospace" font-size="12" text-anchor="middle">r : int</text><text x="20" y="252" font-size="13" font-weight="600">Square s</text><rect x="20" y="260" width="230" height="38" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="20" y="260" width="70" height="38" fill="currentColor" opacity="0.12"/><text x="55" y="284" font-family="monospace" font-size="12.5" text-anchor="middle">vptr</text><text x="135" y="284" font-family="monospace" font-size="12" text-anchor="middle">x : Point</text><text x="215" y="284" font-family="monospace" font-size="12" text-anchor="middle">edge : int</text><text x="352" y="132" font-size="13" font-weight="600">vtable for Circle</text><rect x="352" y="140" width="255" height="84" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="352" y1="168" x2="607" y2="168" stroke="currentColor" stroke-width="0.8" opacity="0.6"/><line x1="352" y1="196" x2="607" y2="196" stroke="currentColor" stroke-width="0.8" opacity="0.6"/><text x="362" y="160" font-family="monospace" font-size="12">[0]  Circle::draw()</text><text x="362" y="188" font-family="monospace" font-size="12">[1]  Circle::rotate()</text><text x="362" y="216" font-family="monospace" font-size="12">[2]  Shape::~Shape()</text><text x="352" y="292" font-size="13" font-weight="600">vtable for Square</text><rect x="352" y="300" width="255" height="84" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="352" y1="328" x2="607" y2="328" stroke="currentColor" stroke-width="0.8" opacity="0.6"/><line x1="352" y1="356" x2="607" y2="356" stroke="currentColor" stroke-width="0.8" opacity="0.6"/><text x="362" y="320" font-family="monospace" font-size="12">[0]  Square::draw()</text><text x="362" y="348" font-family="monospace" font-size="12">[1]  Square::rotate()</text><text x="362" y="376" font-family="monospace" font-size="12">[2]  Shape::~Shape()</text><g stroke="currentColor" stroke-width="1.5"><line x1="90" y1="161" x2="346" y2="160"/><line x1="90" y1="279" x2="346" y2="320"/></g><polygon points="352,160 340,155 340,165" fill="currentColor"/><polygon points="352,322 340,316 341,328" fill="currentColor"/><g stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4"><line x1="132" y1="86" x2="132" y2="118"/><line x1="132" y1="118" x2="346" y2="118"/></g><polygon points="352,118 340,113 340,123" fill="currentColor"/><text x="142" y="112" font-size="11.5">1. load the vptr    2. call through slot 0</text><g fill="none" stroke="currentColor" stroke-width="1.4"><rect x="655" y="140" width="115" height="28"/><rect x="655" y="168" width="115" height="28"/><rect x="655" y="300" width="115" height="28"/><rect x="655" y="328" width="115" height="28"/></g><text x="662" y="159" font-family="monospace" font-size="11">Circle::draw()</text><text x="662" y="187" font-family="monospace" font-size="11">Circle::rotate(){}</text><text x="662" y="319" font-family="monospace" font-size="11">Square::draw()</text><text x="662" y="347" font-family="monospace" font-size="11">Square::rotate()</text><g stroke="currentColor" stroke-width="1.3"><line x1="607" y1="154" x2="651" y2="154"/><line x1="607" y1="182" x2="651" y2="182"/><line x1="607" y1="314" x2="651" y2="314"/><line x1="607" y1="342" x2="651" y2="342"/></g><text x="20" y="420" font-size="12">the same two instructions — load the vptr, call slot 0 — reach Circle::draw or Square::draw</text><text x="20" y="440" font-size="12" opacity="0.8">according to the object's own vtable: the dispatch information lives in the object, not the call site</text></g></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Adding Pentagon: switch design versus hierarchy design",
        problem: "A drawing program has four shape operations (draw, rotate, move, center) and three shapes. Compare the cost of adding Pentagon under the type-field design and under the class-hierarchy design.",
        steps: [
          { label: "Type-field design", text: "Four operation functions each contain a switch over `kind()` with three cases. Adding Pentagon means adding an enum value and editing four switches — four separate source edits, and the compiler cannot flag an operation you forgot to update: a missed case just falls through with the default behavior." },
          { label: "Hierarchy design", text: "One new class with four overrides. Nothing existing changes — `rotate_all` and its siblings were compiled long ago and drive Pentagon unmodified the first time it appears in a container." },
          { label: "The compiler as checklist", text: "If the interface is abstract (20.4) and you forget one of the four overrides, Pentagon stays abstract and `new Pentagon{...}` fails to compile — the miss is loud, not silent." },
          { label: "The count", text: "Type-field: 4 edits, 0 compile-time checks. Hierarchy: 1 new type, 4 compiler-enforced overrides." },
        ],
        result: "The hierarchy turns 'did every operation learn about the new kind?' from a code-review question into a type question — which is why the book calls a virtual function a switch the compiler writes and checks for you.",
      },
      {
        title: "Working through class hierarchies",
        problem: "Type fields versus virtual functions. Your task: write polymorphic algorithms such as draw_all and rotate_all over vectors of base pointers.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: write polymorphic algorithms such as draw_all and rotate_all over vectors of base pointers. Write down the guarantee you will rely on — for this chapter it is: Polymorphic algorithms store base pointers and never name concrete types — they work unchanged for types written later" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Shape { virtual void draw() const = 0; virtual ~Shape() = default; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — contrast the type-field-and-switch design with virtual dispatch, listing exactly what must change when a new type joins each design — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: The type-field design scatters knowledge of each kind across every switch and has no compiler check for forgotten cases If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Polymorphic algorithms store base pointers and never name concrete types — they work unchanged for types written later Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Polymorphic algorithms store base pointers and never name concrete types — they work unchanged for types written later",
      "The type-field design scatters knowledge of each kind across every switch and has no compiler check for forgotten cases",
      "Virtual dispatch is one vtable index — a couple of instructions, $O(1)$, not inlinable — and the switch-equivalent is maintained by the compiler, not by you",
    ],
    quiz: [
      {
        q: "`rotate_all` was compiled long ago. A Pentagon class is added today. What makes `p->rotate(d)` rotate the pentagon correctly inside that old code?",
        options: ["The linker patches rotate_all with the new class list", "Each Pentagon object carries a vptr selecting Pentagon's vtable entry for rotate", "rotate_all is recompiled as a template", "The compiler resolves rotate at link time from the static type"],
        answer: 1,
        explanation: "The dispatch data lives in the object: the vptr points at Pentagon's vtable, whose rotate slot holds Pentagon's override. The call site is unchanged and needs no knowledge of the new class.",
      },
      {
        q: "In the type-field design, adding a new kind to a program with k operations each containing a switch over the kind requires",
        options: ["one edit: the enum declaration", "up to k edits — one case per switch, with no compiler check that any of them was made", "no edits: the switches grow automatically", "rewriting every operation as a template"],
        answer: 2,
        explanation: "Every switch that should know about the new kind must be edited by hand; a missed case compiles and silently does the wrong default thing.",
      },
      {
        q: "The machine-level cost of one virtual call, relative to a direct call, is essentially",
        options: ["a search of the class graph at run time", "two dependent loads and an indirect jump, with inlining through the call no longer possible", "a system call into the loader", "proportional to the number of derived classes"],
        answer: 3,
        explanation: "The vtable is flat: load vptr, index the slot, jump. The constant-time lookup is the design win; losing inline expansion is the real cost for trivial bodies.",
      },
      {
        q: "Which change lets a new shape join a program WITHOUT touching the code of `rotate_all`?",
        options: ["Adding a new value to the type-field enum", "Deriving a new class from Shape and overriding its virtuals", "Adding a parameter to rotate", "Removing virtual from Shape's members"],
        answer: 1,
        explanation: "The hierarchy is open for extension: a new derived class plugs into existing base-pointer code through its own vtable. The enum route edits every switch; removing virtual disables dispatch entirely.",
      },
    ],
  },

  // ------------------------------------------------------------------ 20.4
  {
    sectionId: "cpp-ch20-s4",
    readingTime: 7,
    intro: "Make every Shape operation pure virtual and Shape becomes what the book calls an abstract class: a common interface with no objects of its own. Abstract classes are how C++ states 'these are the operations every shape must provide'; the derived classes provide the implementations, and users hold pointers and references to the interface only. It is the hinge between this chapter's machinery and chapter 21's design questions.",
    objectives: [
      "Declare pure virtual functions and explain exactly what = 0 makes illegal",
      "Use an abstract class as an interface: instantiate only its concrete derived classes",
      "Distinguish degrees of abstractness, from a pure interface to a partially implemented base",
    ],
    concepts: [
      {
        term: "Pure virtual function",
        kind: "definition",
        statement: "A virtual function with the declarator suffix `= 0` — `virtual void draw() const = 0;` — is a **pure virtual**: it must be overridden (transitively) before any object of the class can be created. A pure virtual may even be given a definition, callable only with explicit qualification — rare, occasionally useful for shared default behavior.",
        detail: "The `= 0` is read 'is implemented elsewhere': the base states the contract, some derived class supplies the body.",
      },
      {
        term: "Abstract class",
        kind: "definition",
        statement: "A class with one or more pure virtual functions is **abstract**: no objects of it can be created. Pointers and references to it are fine and are the whole point — `vector<Shape*>` and parameters of type `Shape&` are how users touch the hierarchy. Its constructor still runs in every derived construction, and its destructor should be virtual like any polymorphic base's.",
        detail: "The classic interface: `class Shape { public: virtual Point center() const = 0; virtual void move(Point to) = 0; virtual void draw() const = 0; virtual void rotate(int angle) = 0; virtual ~Shape() {} };`",
      },
      {
        term: "Degrees of abstractness",
        kind: "insight",
        statement: "Abstractness is a dial, not a switch. At one end sits the **pure interface**: no data, every operation pure — Shape here. At the other, a base with data and default implementations plus a few pure virtuals — the derived classes inherit the common parts and finish the contract. What you choose fixes who may rely on what.",
        detail: "The pure interface keeps implementations fully interchangeable; a stateful base shares code but couples every derived class to the shared representation.",
      },
      {
        term: "Abstract classes as contracts",
        kind: "insight",
        statement: "Users program against the abstract class; implementers derive from it. A new implementation (a Triangle, a new window system's slider) does not disturb a single line of user code — this is the 'program to the interface' discipline the next chapter turns into design method.",
        detail: "The compiler enforces the contract at both ends: an implementation missing a pure override is itself abstract and cannot be instantiated.",
      },
      {
        term: "Abstract Classes: the working contract",
        kind: "definition",
        statement: "**Abstract Classes.** Pure virtual functions and interfaces. You can claim this section when you can declare pure virtual functions and explain exactly what = 0 makes illegal — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 20 (Derived Classes); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "A mixed collection, computed through the interface",
        problem: "Extend the Shape interface with `virtual double area() const = 0;`, then total the areas of `Circle(Point{0,0}, 2)` and `Square(Point{1,1}, 3)` held through Shape pointers.",
        steps: [
          { label: "Step 1: The interface grows by one line", text: "Adding the pure virtual instantly makes Circle and Square abstract again — every concrete derived class now fails to compile where it is constructed until it overrides area. The compiler is the migration checklist." },
          { label: "Step 2: The overrides", text: "Circle: `double area() const override { return 3.14159 * r * r; }` — for r = 2, that is $4\\pi \\approx 12.57$. Square: `double area() const override { return double(edge) * edge; }` — for edge = 3, that is 9." },
          { label: "Step 3: The user code", text: "`double total = 0; for (auto* p : shapes) total += p->area();` — no name Circle or Square appears anywhere in the loop, and the values dispatched are $12.5664$ and $9$." },
          { label: "Step 4: The total", text: "$12.5664 + 9 = 21.5664 \\approx 21.57$ — and a Pentagon dropped into the container tomorrow joins the sum without any edit to the loop." },
        ],
        result: "About 21.57 square units, computed by one loop over base pointers; the interface owns the arithmetic's existence, the objects own its value.",
      },
      {
        title: "Working through abstract classes",
        problem: "Pure virtual functions and interfaces. Your task: declare pure virtual functions and explain exactly what = 0 makes illegal.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: declare pure virtual functions and explain exactly what = 0 makes illegal. Write down the guarantee you will rely on — for this chapter it is: `= 0` makes a virtual pure: it must be overridden before an object can be created, and the class owning it is abstract" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Shape { virtual void draw() const = 0; virtual ~Shape() = default; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — use an abstract class as an interface: instantiate only its concrete derived classes — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Abstract classes are instantiated never and referenced everywhere — they are the interface users code against If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `= 0` makes a virtual pure: it must be overridden before an object can be created, and the class owning it is abstract Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`= 0` makes a virtual pure: it must be overridden before an object can be created, and the class owning it is abstract",
      "Abstract classes are instantiated never and referenced everywhere — they are the interface users code against",
      "Adding a pure virtual makes every existing concrete derived class fail to compile until it complies — extension with the compiler as the checklist",
    ],
    quiz: [
      {
        q: "Given `class Shape { public: virtual void draw() const = 0; };`, which declaration is an error?",
        options: ["`Shape* p = new Circle{...};`", "`Shape& r = c;`", "`Shape s;`", "`void f(Shape& s);`"],
        answer: 2,
        explanation: "An abstract class has no objects — only pointers and references to it. Defining a Shape by value is a compile-time error listing the pure virtuals; all three indirect uses are exactly the intended ones.",
      },
      {
        q: "A pure virtual function may be given a function body. That body is callable",
        options: ["through a base pointer, like any override", "only with explicit qualification, as in Derived::base-style calls", "never — the language forbids it", "only from the constructor"],
        answer: 1,
        explanation: "A definition for a pure virtual is legal and occasionally useful for shared default code, but the function is still pure: ordinary dispatch never selects it — it must be reached by naming it explicitly.",
      },
      {
        q: "Circle overrides 3 of Shape's 4 pure virtuals and defines no other virtuals. Then",
        options: ["Circle is concrete; the fourth operation uses Shape's", "Circle is itself abstract — objects cannot be created until the missing override exists", "the missing function becomes a type field", "the program links but crashes on the first call"],
        answer: 3,
        explanation: "A class is abstract if it inherits any un-overridden pure virtual. The failure is at compile time, at the point someone tries to create a Circle — loud, local and fixable.",
      },
      {
        q: "The chapter calls an abstract class 'a class with no objects but' — complete the point:",
        options: ["no members either", "plenty of pointers and references: it is the interface through which users see every implementation", "no destructor", "a hidden type field"],
        answer: 1,
        explanation: "The absence of objects is precisely what makes it a pure contract: every access goes through a base pointer or reference, so implementations remain interchangeable behind it.",
      },
    ],
  },

  // ------------------------------------------------------------------ 20.5
  {
    sectionId: "cpp-ch20-s5",
    readingTime: 7,
    intro: "Inheritance comes with its own access control, and it answers one question: who may use the base's members through the derived class? Public derivation keeps is-a intact; protected and private derivation make the base an implementation detail. Inside the classes, `protected` opens a channel to derived classes that ordinary users never get — powerful, and in Stroustrup's judgment usually a design error when applied to data. The `using`-declaration rounds out the toolbox: un-hiding base members, inheriting constructors, adjusting access.",
    objectives: [
      "Predict the legality of member access from inside a derived class, from outside, and through each derivation level",
      "Choose between public, protected and private derivation for a given relationship",
      "Use using-declarations: to un-hide base overloads, to inherit constructors, and to widen access deliberately",
    ],
    concepts: [
      {
        term: "Three derivation levels",
        kind: "definition",
        statement: "`class D : public B` — is-a preserved: B's public members are public in D and a `D*` converts to `B*` everywhere. `class D : protected B` — public and protected members of B become protected in D. `class D : private B` (the default for `class`) — they become private: the base is an implementation detail and the conversion is hidden from users. `struct` derivation defaults to public.",
        detail: "By far the most common is public — and it is the only one that expresses substitution; the other two are implementation inheritance.",
      },
      {
        term: "protected members",
        kind: "definition",
        statement: "A `protected` member of B is accessible to B's own member functions and to the member functions (and friends) of classes derived from B — but not to ordinary users. Stroustrup's verdict on **protected data**: usually a design error, because every derived class is then coupled to the representation; prefer protected member functions and private data.",
        detail: "Protected data trades the encapsulation you already had for a convenience the interface could have provided safely.",
      },
      {
        term: "Access control is not visibility",
        kind: "insight",
        statement: "Access control limits **permission, not visibility**. Name lookup finds private members all the same — they participate in overload resolution and can create ambiguities — but using them outside their permitted context is an error. You cannot hide a member by access alone.",
        detail: "The C++ model: if a name can be seen, the compiler reasons about it; whether it may be used is a separate, checkable question.",
      },
      {
        term: "Name hiding and using-declarations",
        kind: "method",
        statement: "A declaration of `f` in D hides **all** base members named f — `void f(double)` in D hides even `B::f(int)`; overloading does not cross scopes. A `using B::f;` declaration in D brings the whole base family back into scope alongside D's own, so overload resolution sees both.",
        detail: "The same syntax in D's public section — under private inheritance — deliberately re-exposes chosen base members to users.",
      },
      {
        term: "Inheriting constructors",
        kind: "method",
        statement: "Constructors are never inherited automatically, but a derived class can adopt them: `class D : public B { public: using B::B; };` gives D a constructor for each B constructor, each initializing the B subobject then D's members. The destructor and the copy/move operations are never adopted this way — D always gets its own.",
        detail: "It is the tool for 'D is B plus data members with their own initializers', removing a page of forwarding one-liners.",
      },
    ],
    examples: [
      {
        title: "The access audit, counted",
        problem: "Audit every access in `class B { public: void pub(); protected: void prot(); private: void priv(); };` `class D : public B { void use(); };` — from inside `D::use()` and from user code holding a D.",
        steps: [
          { label: "Inside D::use()", text: "`pub()` legal (public in B, inherited public); `prot()` legal (protected extends to derived classes); `priv()` illegal — private means B's own members and friends only. Two of three." },
          { label: "Outside, through a D object", text: "`d.pub()` legal; `d.prot()` illegal (protected is invisible to users); `d.priv()` illegal. One of three." },
          { label: "Switch to private derivation", text: "Now `class Secret : private B {}`: inside Secret::use() all three calls are legal — access within the class ignores derivation level — but outside, `s.pub()` fails and, crucially, `B* b = &s;` fails too: the is-a conversion is not exported." },
          { label: "Selective re-exposure", text: "Adding `public: using B::pub;` inside Secret makes `s.pub()` legal again while everything else stays sealed — access as a dial, not a wall." },
        ],
        result: "Six audited uses, three legal under public derivation; private derivation seals users out entirely until a using-declaration opens exactly the members you choose.",
      },
      {
        title: "Working through access control",
        problem: "public, protected, private and using declarations. Your task: predict the legality of member access from inside a derived class, from outside, and through each derivation level.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: predict the legality of member access from inside a derived class, from outside, and through each derivation level. Write down the guarantee you will rely on — for this chapter it is: Public derivation preserves is-a; protected and private derivation keep the base as an implementation detail and hide the conversion" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Shape { virtual void draw() const = 0; virtual ~Shape() = default; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — choose between public, protected and private derivation for a given relationship — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Protected members reach derived classes but not users — and protected data is usually a design error; prefer protected functions If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Public derivation preserves is-a; protected and private derivation keep the base as an implementation detail and hide the conversion Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Public derivation preserves is-a; protected and private derivation keep the base as an implementation detail and hide the conversion",
      "Protected members reach derived classes but not users — and protected data is usually a design error; prefer protected functions",
      "`using B::f` un-hides a hidden overload family, `using B::B` inherits constructors, and a public using-declaration can re-expose members under private inheritance",
    ],
    quiz: [
      {
        q: "`class D : private B { ... };` — which is TRUE outside D's member functions?",
        options: ["D is substitutable for B: any D converts to B freely", "A D* does not convert to B* implicitly — the base is an implementation detail", "B's protected members become public in D", "D cannot have any public members of its own"],
        answer: 1,
        explanation: "Private derivation turns the base into an implementation detail: users neither see B's members nor get the derived-to-base conversion — D is-implemented-in-terms-of B, not is-a B.",
      },
      {
        q: "A protected member of B is accessible",
        options: ["to everyone, like public", "only to B's own members and friends", "to B's members, friends, and the members of classes derived from B — but not to ordinary users", "only through a using-declaration"],
        answer: 2,
        explanation: "Protected is the family channel: derived classes get it, the outside world does not — which is why it suits member functions and, in Stroustrup's judgment, suits data badly.",
      },
      {
        q: "`class D : public B` declares `void f(double)`; B has `void f(int)`. A user calls `d.f(3)`. What runs?",
        options: ["B::f(int) — the base version is preferred", "D::f(double) — D's declaration hides the base family, so 3 converts to double", "The call is ambiguous and rejected", "Nothing: hiding makes the call ill-formed"],
        answer: 1,
        explanation: "A name declared in D hides all base members of that name — overloading does not cross scopes — so the int argument converts and D::f(double) runs. `using B::f;` would restore both.",
      },
      {
        q: "`using B::B;` in a public section of D causes",
        options: ["B's destructor to be inherited", "D to inherit B's constructors — one D constructor per B constructor", "B's assignment operators to be inherited", "D to become abstract"],
        answer: 1,
        explanation: "Constructors can be adopted by using-declaration only; destructors and the copy/move operations are never inherited — D always has its own.",
      },
    ],
  },

  // ------------------------------------------------------------------ 20.6
  {
    sectionId: "cpp-ch20-s6",
    readingTime: 6,
    intro: "Sometimes the thing to parameterize over is not a value but a member: run this member function on that object; read that data member. C++ splits the problem in two — `&X::a` is a pointer to the member a of any X, and the member is reached through an object with `.*` or `->*`. A pointer-to-member is an offset-like creature belonging to no particular object, which is exactly why ordinary pointers cannot do the job.",
    objectives: [
      "Declare and use pointers to data members and to member functions",
      "Explain why .* and ->* exist: members need a this, which the object supplies at use time",
      "Build a table of member-function pointers and call through it, with virtual dispatch intact",
    ],
    concepts: [
      {
        term: "Pointer to data member",
        kind: "notation",
        statement: "`int X::* p = &X::a;` declares p a **pointer to an int member of X**. It names which member, not where: applied to an object x with `x.*p` — or to a `X*` px with `px->*p` — it designates that object's a. The value stored is offset-like, so the same p serves every X.",
        detail: "Read `int X::*` right to left: pointer to member of X with type int — an ordinary `int*` would claim to point at an int that exists somewhere on its own.",
      },
      {
        term: "Pointer to member function",
        kind: "definition",
        statement: "`void (X::*pf)(int) = &X::f;` — pf names X's member function f. It is invoked bound to an object: `(x.*pf)(3)` or `(px->*pf)(3)`. **The parentheses are mandatory**: `.*` binds more loosely than the function call, so `x.*pf(3)` would try to call pf and apply .* to the result.",
        detail: "No object, no call — the member function needs a this, and the object at use time provides it.",
      },
      {
        term: "Why an ordinary function pointer will not do",
        kind: "insight",
        statement: "A member function is not a standalone function: it runs on an object and reads its `this`. A bare address of 'the code' is not enough — for virtual members the code depends on the object's class, and for any member the object must be named. The pointer-to-member plus the object at use time supplies both halves.",
        detail: "It is the same split virtual dispatch makes implicitly; `.*` and `->*` make it explicit, chosen by the programmer at run time.",
      },
      {
        term: "Tables of member functions",
        kind: "method",
        statement: "The classic use: a menu or protocol table mapping names or events to members. With `using Pstd_mem = void (Std_interface::*)();` one writes `vector<Pstd_mem> ops = { &Std_interface::start, &Std_interface::suspend, &Std_interface::shutdown };` and runs `(p->*op)()` for every op on every object p — calling through a pointer-to-member of a **virtual** member still dispatches on the object's dynamic type.",
        detail: "It is dispatch-table code you write yourself — the honest alternative when the table's rows must be chosen at run time rather than by class.",
      },
      {
        term: "Pointers to Members: the working contract",
        kind: "definition",
        statement: "**Pointers to Members.** Pointers to function and data members. You can claim this section when you can declare and use pointers to data members and to member functions — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 20 (Derived Classes); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "Figure — Pointers to members applied to two objects: `int X::* pi` selects the a of whichever X it is bound to with `.*` / `->*`; the member-function pointer carries a code address plus a this-adjustment rather than a plain address.",
        svg: `<svg viewBox="0 0 760 348" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pointers to data and function members applied to objects"><g font-family="ui-sans-serif, system-ui" fill="currentColor"><text x="40" y="52" font-size="13" font-weight="600">X x</text><rect x="40" y="60" width="210" height="112" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="145" y="83" font-family="monospace" font-size="14" text-anchor="middle">a = 7</text><line x1="40" y1="97" x2="250" y2="97" stroke="currentColor" stroke-width="0.8" opacity="0.6"/><text x="145" y="120" font-family="monospace" font-size="14" text-anchor="middle">b = 9</text><line x1="40" y1="134" x2="250" y2="134" stroke="currentColor" stroke-width="0.8" opacity="0.6"/><text x="145" y="158" font-family="monospace" font-size="14" text-anchor="middle">f() { ... }</text><text x="40" y="222" font-size="13" font-weight="600">X y</text><rect x="40" y="230" width="210" height="76" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="145" y="254" font-family="monospace" font-size="14" text-anchor="middle">a = 5</text><line x1="40" y1="268" x2="250" y2="268" stroke="currentColor" stroke-width="0.8" opacity="0.6"/><text x="145" y="292" font-family="monospace" font-size="14" text-anchor="middle">b = 6</text><rect x="330" y="28" width="400" height="62" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="345" y="52" font-family="monospace" font-size="13.5">int X::* pi = &amp;X::a;</text><text x="345" y="78" font-size="12">x.*pi reads a — 7 for x, 5 for y; p->*pi works through a pointer</text><rect x="330" y="120" width="400" height="62" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="345" y="144" font-family="monospace" font-size="13.5">void (X::*pf)() = &amp;X::f;</text><text x="345" y="170" font-size="12">(x.*pf)() runs f on x — the parentheses are mandatory</text><g stroke="currentColor" stroke-width="1.5"><line x1="330" y1="62" x2="258" y2="80"/><line x1="330" y1="152" x2="258" y2="152"/></g><polygon points="250,82 261,74 263,89" fill="currentColor"/><polygon points="250,153 261,146 261,161" fill="currentColor"/><text x="40" y="326" font-size="12" fill="currentColor">a pointer-to-member holds an offset-like selector, not an address: on x86-64, sizeof(int X::*) is typically 8,</text><text x="40" y="344" font-size="12" fill="currentColor">while sizeof(void (X::*)()) is typically 16 — a code address plus a this-adjustment.</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "One selector, two objects, nine dispatched calls",
        problem: "Given `struct X { int a{7}; int b{9}; void f(); };`, exercise pointers to members on two objects, then run a three-by-three member-function table.",
        steps: [
          { label: "Data members", text: "`int X::* pi = &X::a; X x; X* p = &x;` — `x.*pi` is 7 and `p->*pi` is 7 (same member, two syntaxes). After `pi = &X::b;`, `x.*pi` is 9: the selector changed, the object did not." },
          { label: "A second object", text: "Declare `X y` with a == 5: `y.*pi` is 5 — the same pi applied to a different object yields that object's member. This is the offset nature of the value." },
          { label: "The function-member table", text: "For three users (objects of a class with virtuals start, suspend, shutdown) and the three-entry `ops` table, `for (auto* p : users) for (auto op : ops) (p->*op)();` makes 3 times 3 = 9 dispatched calls — one loop body, no switch." },
          { label: "Virtual members still dispatch", text: "If a user's dynamic type overrides suspend, the `(p->*op)()` call runs the override: binding through a pointer-to-member preserves virtual dispatch on the object." },
        ],
        result: "7, 7, 9, 5 from the data-member runs and 9 dispatches from the table — members selected at run time and applied to objects that supply the this.",
      },
      {
        title: "Working through pointers to members",
        problem: "Pointers to function and data members. Your task: declare and use pointers to data members and to member functions.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: declare and use pointers to data members and to member functions. Write down the guarantee you will rely on — for this chapter it is: `int X::*` and `void (X::*)(int)` name members, not addresses; the object at use time supplies them via `.*` and `->*`" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Shape { virtual void draw() const = 0; virtual ~Shape() = default; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain why .* and ->* exist: members need a this, which the object supplies at use time — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `(x.*pf)(3)` needs its parentheses — `.*` binds more loosely than the function call If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `int X::*` and `void (X::*)(int)` name members, not addresses; the object at use time supplies them via `.*` and `->*` Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`int X::*` and `void (X::*)(int)` name members, not addresses; the object at use time supplies them via `.*` and `->*`",
      "`(x.*pf)(3)` needs its parentheses — `.*` binds more loosely than the function call",
      "Member-function tables drive menus and protocols without switches, and calls through them remain virtual",
    ],
    quiz: [
      {
        q: "Why must `(x.*pf)(3)` be parenthesized?",
        options: ["`.*` is not a legal operator otherwise", "Because .* binds more loosely than the function call, `x.*pf(3)` would call pf first and misparse", "Because pf is a member of x", "Because pointers to members cannot take arguments"],
        answer: 1,
        explanation: "Without the parentheses the call binds to pf alone — which is not a callable — so the language requires the explicit grouping of bind-then-call.",
      },
      {
        q: "`int X::* pi = &X::a;` — what does pi hold?",
        options: ["The address of the a member of some specific object", "An offset-like selector naming which member of any X, applied with .* or ->*", "A pointer to a function returning int", "The value of x.a"],
        answer: 1,
        explanation: "A pointer to member belongs to the class, not to an object: it records which member, and yields a particular object's instance of it only once bound with .* or ->*.",
      },
      {
        q: "Calling a virtual member function through a pointer-to-member — `(p->*pf)()` — does what?",
        options: ["Bypasses the vtable for speed", "Fails to compile for virtual functions", "Still dispatches virtually, on the dynamic type of *p", "Calls the base class version always"],
        answer: 2,
        explanation: "The pointer-to-member selects the member; the call through it is an ordinary member invocation on the object — so the object's vtable still decides which override runs.",
      },
    ],
  },

  // ------------------------------------------------------------------ 20.7
  {
    sectionId: "cpp-ch20-s7",
    readingTime: 4,
    intro: "The chapter's advice compresses its lessons into rules aimed at the two things that go wrong in practice: an override that isn't (silent base-call bugs that `override` was invented to catch) and inheritance used for convenience rather than substitutability. Run the audit — virtual destructor, override everywhere, no type fields — and most hierarchies stay out of trouble.",
    objectives: [
      "Apply the hierarchy audit: virtual destructor, override on every override, no type fields",
      "Explain why virtual calls from constructors and destructors are a trap",
      "Choose among public/protected/private inheritance and plain composition using the is-a test",
    ],
    concepts: [
      {
        term: "Virtual functions instead of type fields",
        kind: "law",
        statement: "Where a class's behavior varies by kind, use virtual functions — not a type field with switches in every operation. The compiler maintains the dispatch; new kinds join without touching old operations; forgetting an override of a pure virtual is a compile error, not a silent default.",
        detail: "Keep the type-field technique for genuinely closed sets where every operation is written in one place anyway.",
      },
      {
        term: "Abstract classes define interfaces",
        kind: "method",
        statement: "Express the contract of a hierarchy as an abstract class with pure virtuals, and program against it — users see the interface, implementations derive from it. Keep the interface minimal and complete: users should never need to downcast to get their job done.",
        detail: "An interface users must downcast around is under-designed; an interface with knobs for one implementation is over-designed (the fat-interface smell of chapter 21).",
      },
      {
        term: "A polymorphic base needs a virtual destructor",
        kind: "law",
        statement: "If a class is meant to be derived from and used through base pointers, give it a `virtual` destructor — otherwise `delete p` through the base pointer is undefined behavior and typically skips the derived destructor, leaking whatever it would have freed.",
        detail: "It is the one member whose virtual-ness the base author must remember even when the base owns no data — `virtual ~Shape() {}` appears in every example for exactly this reason.",
      },
      {
        term: "No virtual calls from constructors and destructors",
        kind: "law",
        statement: "During base construction and destruction the object is exactly the class being built or torn down — virtual calls resolve at that level, surprising readers who expected derived behavior. Factor such calls into ordinary functions the derived class can call after construction instead.",
        detail: "Two companion rules: mark every override with `override` so the compiler checks it, and remember `final` when overriding must stop.",
      },
      {
        term: "Shipping rule for derived classes",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Give every polymorphic base a virtual destructor — deleting through it is otherwise undefined** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "The audit finds three bugs",
        problem: "A hierarchy ships with (1) Shape lacking a virtual destructor while users do `Shape* p = new Circle{...}; delete p;`, (2) Circle's `void rotate(double)` where Shape declares `virtual void rotate(int)`, and (3) a leftover `kind()` field with a switch from a port of the old design. Audit all three.",
        steps: [
          { label: "Bug 1: the wrong delete", text: "Without a virtual destructor, `delete p` is undefined behavior — in practice ~Circle does not run, so anything Circle's destructor would release leaks. Fix: `virtual ~Shape() {}` in the base — one line, checked forever after." },
          { label: "Bug 2: the hidden override", text: "`void rotate(double)` does not match `virtual void rotate(int)`: it hides, not overrides, and `p->rotate(90)` silently runs Shape's version — the object rotates wrong or not at all. Adding `override` makes the compiler reject the mismatch today rather than the debugger find it next month." },
          { label: "Bug 3: the fossil switch", text: "The `kind()` accessor and the switch inside `Shape::print` are now shadow behavior parallel to the virtuals — two sources of truth that will disagree when a new shape arrives. Replace: a `virtual void print() const` overridden per class, delete the field." },
        ],
        result: "Three one-line classes of fix — a virtual destructor, an override specifier, a virtual replacing a switch — and the hierarchy's remaining failure modes are design questions, not latent bugs.",
      },
      {
        title: "Reviewing derived classes code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the hierarchy audit: virtual destructor, override on every override, no type fields.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Give every polymorphic base a virtual destructor — deleting through it is otherwise undefined" },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `struct Shape { virtual void draw() const = 0; virtual ~Shape() = default; };`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: explain why virtual calls from constructors and destructors are a trap. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Write `override` on every override and expect no virtual calls to reach derived behavior during construction or destruction" },
        ],
        result: "The review ends with findings tied to reasons: Give every polymorphic base a virtual destructor — deleting through it is otherwise undefined Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Give every polymorphic base a virtual destructor — deleting through it is otherwise undefined",
      "Write `override` on every override and expect no virtual calls to reach derived behavior during construction or destruction",
      "Replace type fields and switches with virtuals; program users against the abstract interface and keep it minimal",
    ],
    quiz: [
      {
        q: "Shape has NO virtual destructor. A user executes `Shape* p = new Circle{...}; delete p;`. Per the book's advice this is",
        options: ["fine — the compiler calls both destructors", "undefined behavior: make ~Shape virtual so the delete dispatches to ~Circle", "a memory leak only, otherwise fine", "illegal C++ — the new expression would not compile"],
        answer: 3,
        explanation: "Deleting a derived object through a base pointer whose destructor is not virtual is undefined behavior — the fix is the rule: a base used polymorphically gets `virtual ~Shape() {}`.",
      },
      {
        q: "Calling a virtual function from a base-class constructor dispatches to",
        options: ["the most-derived override", "the base class's version — the derived part does not exist yet", "a pure virtual call and crashes", "the function in the translation unit that linked first"],
        answer: 1,
        explanation: "During base construction the object's dynamic type is the base; overrides are unavailable — which is why the advice is to keep virtual calls out of constructors and destructors entirely.",
      },
      {
        q: "Which is the chapter's recommended default for expressing 'these operations vary by kind'?",
        options: ["A kind enum plus a switch in each operation", "Virtual functions and an abstract base interface", "A friend function per kind", "Pointers to members as the dispatch table"],
        answer: 1,
        explanation: "Virtuals are the compiler-maintained switch: new kinds need no edits to old operations and forgotten overrides are compile errors, not silent defaults.",
      },
    ],
  },
]

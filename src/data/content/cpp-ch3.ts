import type { SectionContent } from "../library"

// ============================================================================
// Bjarne Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 3: A Tour of C++ — Abstraction Mechanisms (Sections 3.1 – 3.5)
// ============================================================================

export const cppCh3Content: SectionContent[] = [
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: "cpp-ch3-s1",
    readingTime: 4,
    intro: "The tour of the basics ended with a working but fragile Vector. This chapter adds the machinery that makes user-defined types as usable as built-in ones: classes that copy, move and destroy safely, class hierarchies for run-time polymorphism, and templates for types that work over any element type. Stroustrup calls these the abstraction mechanisms — the part of C++ that makes it C++.",
    objectives: [
      "Name the three abstraction mechanisms and the operation family each contributes",
      "Distinguish compile-time from run-time polymorphism and choose between them",
      "Explain what “types as good as built-ins” concretely requires",
    ],
    concepts: [
      {
        term: "The three mechanisms",
        kind: "definition",
        statement: "**Classes** (with construction, destruction, copy and move — plus inheritance and virtual functions for run-time polymorphism), and **templates** (parameterized types and functions resolved at compile time) are the abstraction mechanisms of the chapter. Copy and move semantics give containers value semantics — assigning, passing and returning them behaves sensibly and predictably.",
        detail: "The tour's `Vector` grows through the chapter: destructor in 3.2, copy and move in 3.3, and becomes `Vector<T>` in 3.4 — one type, three increments of abstraction.",
      },
      {
        term: "Types as good as the built-ins",
        kind: "insight",
        statement: "The design goal of every mechanism here: a user-defined type should be **indistinguishable from a built-in in the operations it supports** — construction, copy, move, assignment, destruction, passing and returning — while carrying a representation and invariant of its own choosing. C++ has no second-class user types.",
        detail: "The consequence: you extend the language by writing types, not by modifying it. The standard library is exactly this, written once, for everyone.",
      },
      {
        term: "Two polymorphisms",
        kind: "insight",
        statement: "C++ has two independent polymorphism mechanisms: **run-time polymorphism** through virtual functions — one indirect call per operation, works when the concrete type is unknown until execution, the tool of class hierarchies; and **compile-time polymorphism** through templates — the concrete type is known at instantiation, calls are direct and inlinable, the tool of generic code. Neither is “more modern”: they answer different questions about *when the type is known*.",
        detail: "This dual structure is C++'s answer to the genericity/type-safety trade-off most languages force into a single mechanism.",
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** The abstraction mechanisms at a glance. You can claim this section when you can name the three abstraction mechanisms and the operation family each contributes — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 3 (A Tour of C++: Abstraction Mechanisms); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Introduction: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, distinguish compile-time from run-time polymorphism and choose between them. Then, explain what “types as good as built-ins” concretely requires. Finally, test the outcome against the section promise: Classes (with copy/move and inheritance) and templates are the abstraction mechanisms.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Choosing the mechanism for three tasks",
        problem: "For each requirement, pick virtual functions, templates, or copy/move semantics — and say what fact about the problem forces the choice.",
        steps: [
          { label: "Task 1", text: "“Sum the elements of a `Vector`, whatever the numeric element type.” The element type is known at each call site at compile time, and summing must be as fast as a hand loop → a function template: `template<class T> T sum(const Vector<T>&)`." },
          { label: "Task 2", text: "“Draw a shape the user picks from a menu at run time.” The concrete shape is unknown until the program runs → an abstract `Shape` base class with a virtual `draw()`, called through `Shape*` or `Shape&`." },
          { label: "Task 3", text: "“Return a computed `Vector` of a million elements from a function without copying a million elements.” The value's destination is known, its source is about to die → move semantics: transfer the representation, O(1) instead of O(n)." },
          { label: "The pattern", text: "Each mechanism is selected by *when the answer becomes known* — element type, concrete shape, or object identity — not by taste." },
        ],
        result: "Same question every time: is the deciding fact available at compile time (template), only at run time (virtual), or is it a matter of resource ownership (move)?",
      },
      {
        title: "Working through introduction",
        problem: "The abstraction mechanisms at a glance. Your task: name the three abstraction mechanisms and the operation family each contributes.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: name the three abstraction mechanisms and the operation family each contributes. Write down the guarantee you will rely on — for this chapter it is: Classes (with copy/move and inheritance) and templates are the abstraction mechanisms." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Point { double x, y; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — distinguish compile-time from run-time polymorphism and choose between them — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: The goal: user-defined types indistinguishable from built-ins in supported operations. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Classes (with copy/move and inheritance) and templates are the abstraction mechanisms. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Classes (with copy/move and inheritance) and templates are the abstraction mechanisms.",
      "The goal: user-defined types indistinguishable from built-ins in supported operations.",
      "Two polymorphisms: virtual dispatch for run-time unknowns, templates for compile-time knowns.",
    ],
    quiz: [
      {
        q: "The chapter's central design goal for user-defined types is that they should:",
        options: [
          "Avoid holding any representation of their own",
          "Always be heap-allocated for safety",
          "Inherit from a common base class",
          "Be indistinguishable from built-in types in the operations they support",
        ],
        answer: 3,
        explanation: "Construction, copy, move, destruction, passing, returning — a well-designed type supports all of them as built-ins do, which is what the mechanisms exist to provide.",
      },
      {
        q: "A program must call a method on an object whose concrete class is chosen by user input at run time. Which mechanism fits?",
        options: [
          "A virtual function through a base-class pointer or reference",
          "A function template",
          "Copy semantics",
          "`static_assert`",
        ],
        answer: 0,
        explanation: "The concrete type is unknown until execution — the case virtual dispatch exists for; templates require the type at compile time.",
      },
      {
        q: "Which pairing is correct?",
        options: [
          "Virtual functions — compile time; templates — run time",
          "Virtual functions — run time; templates — compile time",
          "Both are compile-time mechanisms",
          "Both are run-time mechanisms",
        ],
        answer: 1,
        explanation: "Virtual dispatch selects the function through the object's vtable at run time; a template is instantiated — specialized code is generated — at compile time.",
      },
    ],
  },

  // ---------------------------------------------------------------- 3.2
  {
    sectionId: "cpp-ch3-s2",
    readingTime: 8,
    intro: "This section builds the two styles of class that organize all of C++'s object use. Concrete classes carry their representation in the object, give it value semantics and construct and destroy automatically. Abstract classes carry no representation at all — only pure virtual functions — and let different derived classes implement the same interface in different ways, so code written against Shape works for every present and future shape.",
    objectives: [
      "Complete the concrete Vector: destructor, and why locals are destroyed automatically",
      "Define an abstract class with pure virtual functions and derive from it correctly",
      "Explain the cost model: what a virtual call costs and when you pay it",
    ],
    concepts: [
      {
        term: "Concrete classes",
        kind: "definition",
        statement: "A **concrete class** holds its representation directly in the object and is used exactly like a built-in type: `class Vector { public: Vector(int s) : elem{new double[s]}, sz{s} { } ~Vector() { delete[] elem; } double& operator[](int i); int size() const; private: double* elem; int sz; };`. The constructor acquires the resource, and the **destructor** `~Vector()` releases it — so a `Vector` declared as a local variable is cleaned up automatically when it goes out of scope, including on exceptions.",
        detail: "The destructor is the foundation of C++ resource management: pairing acquisition in the constructor with release in the destructor means no path out of the scope can leak. This pattern is the tour's first look at what Part II's exception chapter calls RAII.",
      },
      {
        term: "Abstract classes",
        kind: "definition",
        statement: "An **abstract class** represents an interface only: `class Shape { public: virtual Point center() const = 0; virtual void move(Point to) = 0; virtual void draw() const = 0; virtual void rotate(int angle) = 0; virtual ~Shape() { } };`. A function marked `= 0` is a **pure virtual function** — derived classes must override it, no objects of the abstract class can be created, and users manipulate shapes through `Shape*` or `Shape&`. The representation lives entirely in the derived classes.",
        detail: "The destructor is virtual so that deleting through a base-class pointer runs the derived destructor — the one pure-design rule you must never skip in a hierarchy.",
      },
      {
        term: "Class hierarchies",
        kind: "definition",
        statement: "A **class hierarchy** is a set of classes connected by derivation: `class Circle : public Shape { public: Circle(Point p, int rr); Point center() const override { return x; } void draw() const override; void rotate(int) override { } private: Point x; int r; };`. Calling `p->draw()` through a `Shape*` invokes the derived class's `draw` — **virtual dispatch** — and `override` makes the compiler verify you actually overrode something. Inheritance expresses *substitutability* (a Circle is usable wherever a Shape is), while implementation is shared by **membership**: the book's `Smiley` derives from `Circle` and holds its two eyes as `Shape` objects and a mouth — composing from parts rather than inheriting everything.",
        detail: "The classic use: code that iterates `vector<Shape*>` and calls `draw()` works on every shape, forever — including classes not yet written.",
      },
      {
        term: "The cost model of abstraction",
        kind: "insight",
        statement: "Concrete classes cost nothing beyond their representation: member calls are ordinary calls. Virtual dispatch costs one indirection per call (a pointer load from the object's **vtable pointer**, then a jump through the table) and one pointer of storage per object. That is the whole cost — and code that does not use virtual functions pays none of it, which is the zero-overhead principle operating at the object level.",
        detail: "The trade is explicit: abstract interfaces buy run-time flexibility (and binary separation of interface from implementation) for one indirection; concrete types buy speed and simplicity for fixed representation.",
      },
      {
        term: "Classes: the working contract",
        kind: "definition",
        statement: "**Classes.** Concrete, abstract and class hierarchies through Shape. You can claim this section when you can complete the concrete Vector: destructor, and why locals are destroyed automatically — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 3 (A Tour of C++: Abstraction Mechanisms); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "The Shape hierarchy of the tour: `Shape` is abstract (pure virtual interface plus a virtual destructor); `Circle`, `Triangle` and `Smiley` derive publicly from it and `override` its operations. `Smiley` also *contains* Shape parts (its eyes and mouth) — inheritance for the interface, membership for the implementation.",
        afterConcept: 3,
        svg: '<svg viewBox="0 0 760 330" width="100%" role="img" aria-label="Shape class hierarchy diagram with abstract base and three derived classes"><rect x="245" y="12" width="280" height="128" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.8"/><text x="385" y="32" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="currentColor">Shape (abstract)</text><text x="260" y="52" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor" opacity="0.9">virtual Point center() const = 0;</text><text x="260" y="67" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor" opacity="0.9">virtual void move(Point to) = 0;</text><text x="260" y="82" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor" opacity="0.9">virtual void draw() const = 0;</text><text x="260" y="97" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor" opacity="0.9">virtual void rotate(int angle) = 0;</text><text x="260" y="112" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor" opacity="0.9">virtual ~Shape() { }</text><text x="260" y="130" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.7">no representation — no Shape objects exist</text><line x1="130" y1="200" x2="330" y2="140" stroke="currentColor" stroke-width="1.4"/><polygon points="337,152 346,137 328,137" fill="none" stroke="currentColor" stroke-width="1.4" fill="none"/><line x1="395" y1="200" x2="395" y2="145" stroke="currentColor" stroke-width="1.4"/><polygon points="388,152 395,138 402,152" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="630" y1="200" x2="460" y2="140" stroke="currentColor" stroke-width="1.4"/><polygon points="453,152 462,137 444,137" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="210" y="168" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.75">public derivation</text><rect x="40" y="200" width="180" height="86" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="130" y="220" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="700" fill="currentColor">Circle</text><text x="130" y="240" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor" opacity="0.9">Point x; int r;</text><text x="130" y="258" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.8">overriding: center, move,</text><text x="130" y="272" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.8">draw, rotate</text><rect x="285" y="200" width="180" height="86" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="375" y="220" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="700" fill="currentColor">Triangle</text><text x="375" y="240" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor" opacity="0.9">Point p1, p2, p3;</text><text x="375" y="258" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.8">same overriding duties,</text><text x="375" y="272" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.8">its own representation</text><rect x="545" y="200" width="180" height="86" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="635" y="220" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="700" fill="currentColor">Smiley</text><text x="635" y="240" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor" opacity="0.9">eyes: two Shape*</text><text x="635" y="255" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor" opacity="0.9">mouth: Shape*</text><text x="635" y="273" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.8">draws Circle + parts</text><line x1="545" y1="228" x2="224" y2="238" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 3"/><text x="382" y="232" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.75">uses Circle for its outline and eyes</text><text x="380" y="316" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">Shape* p = new Circle{pt, 8};  p->draw();  // Circle::draw, chosen by virtual dispatch</text></svg>',
      },
    ],
    examples: [
      {
        title: "Sizing and dispatching a Circle",
        problem: "A `Circle` holds `Point x` (two `int`s) and `int r`, and — like every object of a class with virtual functions — a vtable pointer. On a typical 64-bit implementation (8-byte pointers, 4-byte `int`), what does a `Circle` cost, and what exactly happens on `p->draw()` for `Shape* p` pointing at one?",
        steps: [
          { label: "Step 1: the representation", text: "`Point x` is 2 × 4 = 8 bytes; `int r` is 4 bytes; the vtable pointer is 8 bytes. Total 20, padded to a multiple of 8 → **24 bytes** per `Circle`." },
          { label: "Step 2: the vtable", text: "The vptr points to Circle's entry in its class's vtable: one code address per virtual function (center, move, draw, rotate, destructor…)." },
          { label: "Step 3: the call", text: "`p->draw()` compiles to: load the vptr from the object (1 memory read), load the `draw` slot from the vtable (1 read), then call that address — two reads and one indirect jump, the same for every circle ever drawn." },
          { label: "Step 4: the contrast", text: "Had `draw()` been a non-virtual member of a concrete class, the call would be a plain direct call and the vptr would not exist — the 8 bytes and 2 loads are paid *only because this class is polymorphic*." },
          { label: "Step 5: the payoff", text: "A loop `for (auto& p : shapes) p->draw();` over `vector<Shape*>` draws circles, triangles and smileys with no test in user code and no change when a new shape class is added next year." },
        ],
        result: "24 bytes, 2 loads + 1 indirect jump per call: virtual dispatch's entire price, bought only where polymorphism is used — the zero-overhead rule at object level.",
      },
      {
        title: "Working through classes",
        problem: "Concrete, abstract and class hierarchies through Shape. Your task: complete the concrete Vector: destructor, and why locals are destroyed automatically.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: complete the concrete Vector: destructor, and why locals are destroyed automatically. Write down the guarantee you will rely on — for this chapter it is: Concrete classes own their representation; constructor acquires, destructor `delete[] elem;` releases, scope exit cleans up automatically." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Point { double x, y; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — define an abstract class with pure virtual functions and derive from it correctly — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Abstract classes hold pure virtual functions (`= 0`), cannot be instantiated, and are used through pointers or references; always give them a virtual destructor. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Concrete classes own their representation; constructor acquires, destructor `delete[] elem;` releases, scope exit cleans up automatically. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Concrete classes own their representation; constructor acquires, destructor `delete[] elem;` releases, scope exit cleans up automatically.",
      "Abstract classes hold pure virtual functions (`= 0`), cannot be instantiated, and are used through pointers or references; always give them a virtual destructor.",
      "Virtual dispatch costs one vptr per object and one indirection per call; non-polymorphic code pays none of it.",
    ],
    quiz: [
      {
        q: "What makes a class abstract?",
        options: [
          "Having any member function",
          "Being privately derived from another class",
          "Having one or more pure virtual functions (declared `= 0`)",
          "Having a virtual destructor only",
        ],
        answer: 2,
        explanation: "A pure virtual function must be overridden by concrete derived classes; no objects of the abstract class itself can exist.",
      },
      {
        q: "Why must an interface class like `Shape` have a virtual destructor?",
        options: [
          "To prevent copying of shapes",
          "To make `draw()` virtual too",
          "Because the standard library requires it of every class",
          "So deleting a derived object through a `Shape*` runs the derived class's destructor, not just the base's",
        ],
        answer: 3,
        explanation: "Without a virtual destructor, `delete p` on a base pointer would slice resource cleanup: only the base destructor runs, leaking whatever the derived part owned.",
      },
      {
        q: "`Smiley` implements its two eyes by holding Shape pointers as members. What does this illustrate?",
        options: [
          "Composition by membership — inheriting the interface from `Shape` while assembling implementation from parts",
          "That pointers cannot be class members",
          "Multiple inheritance",
          "Template parameterization of shapes",
        ],
        answer: 0,
        explanation: "Inheritance expresses substitutability; implementation reuse is by membership. The Smiley is a Circle-derived Shape that contains Shape parts.",
      },
      {
        q: "What does writing `override` after a member function declaration do?",
        options: [
          "Makes the function virtual even if the base function is not",
          "Asks the compiler to verify that this function actually overrides a base-class virtual function",
          "Changes the function's calling convention",
          "Prevents the function from being overridden further",
        ],
        answer: 1,
        explanation: "Without `override`, a slightly wrong signature silently declares a *new* virtual function instead of overriding — a bug the compiler can catch in one word.",
      },
    ],
  },

  // ---------------------------------------------------------------- 3.3
  {
    sectionId: "cpp-ch3-s3",
    readingTime: 9,
    intro: "Copying a million doubles is exactly as expensive as it sounds, and most copies in real programs copy things that are about to die — a returned result, a temporary, a source we have finished with. C++11's move semantics separates the two cases at the type level: a copy duplicates, a move steals. This is the tour's most consequential section; it is also where this course adds its deep dive.",
    objectives: [
      "Write copy constructor/assignment and move constructor/assignment for a container type",
      "State precisely what `std::move` does and does not do",
      "Analyze the cost difference between copying and moving a large container",
    ],
    concepts: [
      {
        term: "Copy semantics",
        kind: "definition",
        statement: "A **copy** must leave two independent objects with equal values, so a container with elements on the free store needs a **deep copy**: `Vector::Vector(const Vector& a) : elem{new double[a.sz]}, sz{a.sz} { for (int i = 0; i != sz; ++i) elem[i] = a.elem[i]; }`. The copy constructor initializes from another object; copy assignment `operator=(const Vector&)` does the same for an existing object — allocate fresh, copy across, `delete[]` the old, handle self-assignment. Cost: one allocation plus an element-by-element copy — **O(n)** in both time and memory.",
        detail: "The rule the operation encodes: after `Vector v2 = v1;`, writing `v2[0]` must never change `v1[0]`. Any cheaper implementation breaks value semantics.",
      },
      {
        term: "Move semantics",
        kind: "definition",
        statement: "A **move** transfers ownership of the representation instead of duplicating it: `Vector::Vector(Vector&& a) : elem{a.elem}, sz{a.sz} { a.elem = nullptr; a.sz = 0; }`. The `&&` is an **rvalue reference** — it binds to things that may be stolen from (temporaries, objects explicitly marked with `std::move`) and is preferred over the copy constructor by overload resolution whenever it matches. The stolen-from object is left in a state that is safe to destroy: its destructor will run `delete[] nullptr;`, which is a no-op.",
        detail: "`std::move(x)` itself moves nothing — it is a cast that reclassifies `x` as an rvalue, selecting the move operation at the assignment or initialization that follows it.",
      },
      {
        term: "When moves happen",
        kind: "method",
        statement: "The compiler chooses move when initializing from a **temporary** or from an object explicitly moved: `Vector v2 = v1;` copies (v1 is an lvalue with a future); `Vector v3 = std::move(v1);` moves (you declared v1 finished); returning a local `Vector` from a function moves (or elides the move entirely — copy elision). Container operations forward the behavior: `push_back` moves a moved-from element into place.",
        detail: "The reading skill is essential in modern C++: after `std::move(v1)`, treat `v1` as expired — the standard says it is left in a *valid but unspecified* state; this implementation leaves it empty.",
      },
      {
        term: "Why move changes everything",
        kind: "insight",
        statement: "Move makes **value semantics affordable at scale**: returning a million-element `Vector` by value costs three pointer-sized copies instead of an 8 MB allocation-and-copy; `std::swap` of two containers becomes three moves with no allocation; `push_back` of a `string` temporary into a `vector<string>` transfers the character array rather than duplicating it. The habit changes too: return the result, pass by value into a *sink* — the language guarantees the cheap path.",
        detail: "It is the single biggest C++11 change to how ordinary code is written, and the reason the tour teaches it before templates.",
      },
      {
        term: "Copy and Move: the working contract",
        kind: "definition",
        statement: "**Copy and Move.** Copying containers and move semantics. You can claim this section when you can write copy constructor/assignment and move constructor/assignment for a container type — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 3 (A Tour of C++: Abstraction Mechanisms); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "Copy vs move for a 4-element `Vector`. Copying allocates a second free-store array and duplicates the 4 elements, leaving two independent values. Moving re-points the destination's handle to the *same* array and empties the source — no allocation, no element copies; the source is now valid only for destruction or reassignment.",
        afterConcept: 2,
        svg: '<svg viewBox="0 0 760 350" width="100%" role="img" aria-label="Copy versus move of a Vector, showing stack objects, free store arrays and pointer re-pointing"><text x="190" y="24" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="currentColor">Vector b = a;  (copy)</text><rect x="30" y="48" width="130" height="26" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.2"/><text x="95" y="65" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.85">stack of caller</text><rect x="30" y="90" width="130" height="56" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="45" y="106" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">a: sz = 4</text><text x="45" y="122" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">a: elem ●</text><circle cx="118" cy="118" r="3.4" fill="currentColor"/><rect x="30" y="170" width="130" height="56" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="45" y="186" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">b: sz = 4</text><text x="45" y="202" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">b: elem ●</text><circle cx="118" cy="198" r="3.4" fill="currentColor"/><rect x="190" y="48" width="340" height="180" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="6 4"/><text x="360" y="66" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-style="italic" fill="currentColor" opacity="0.8">free store (heap)</text><rect x="240" y="90" width="200" height="34" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/><text x="266" y="111" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">1.5  2.5  3.5  4.5</text><rect x="240" y="176" width="200" height="34" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/><text x="266" y="197" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">1.5  2.5  3.5  4.5</text><path d="M 122 118 C 170 118 190 100 236 106" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="234,100 244,107 233,112" fill="currentColor"/><path d="M 122 198 C 170 198 190 180 236 192" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="234,186 244,193 233,198" fill="currentColor"/><text x="360" y="246" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.85">new allocation + 4 element copies → two independent values</text><text x="585" y="24" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="currentColor">Vector c = move(a);</text><rect x="455" y="48" width="120" height="26" fill="none" stroke="none"/><rect x="455" y="48" width="120" height="26" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.2"/><text x="515" y="65" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.85">stack of caller</text><rect x="455" y="90" width="120" height="56" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 3"/><text x="468" y="106" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" opacity="0.7">a: sz = 0</text><text x="468" y="122" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" opacity="0.7">a: elem —</text><text x="468" y="138" font-family="ui-sans-serif, system-ui" font-size="8.5" fill="currentColor" opacity="0.6">(emptied)</text><rect x="455" y="170" width="120" height="56" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="468" y="186" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">c: sz = 4</text><text x="468" y="202" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">c: elem ●</text><circle cx="543" cy="198" r="3.4" fill="currentColor"/><rect x="600" y="48" width="140" height="180" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="6 4"/><text x="670" y="66" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-style="italic" fill="currentColor" opacity="0.8">free store (heap)</text><rect x="615" y="130" width="110" height="34" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/><text x="622" y="151" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">1.5 2.5 3.5</text><path d="M 547 198 C 580 198 590 160 611 150" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="609,144 619,151 608,155" fill="currentColor"/><text x="670" y="246" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.85">handle transferred — one array, now owned by c</text><text x="380" y="290" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">copy: 1 allocation + n element copies and the original keeps its value</text><text x="380" y="310" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">move: a handful of pointer copies, zero allocations, source left empty and safe to destroy</text><text x="380" y="334" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-style="italic" fill="currentColor" opacity="0.75">std::move(x) does not move — it is the cast that selects the move operation</text></svg>',
      },
    ],
    examples: [
      {
        title: "The economics of copying versus moving a million-element Vector",
        problem: "A `Vector` holds 1,000,000 `double`s. Compute what `Vector v2 = v1;` costs, what `Vector v3 = std::move(v1);` costs, and what state each object is in afterwards. (Assume 8-byte doubles and pointers.)",
        steps: [
          { label: "Step 1: the copy's allocation", text: "`new double[1000000]` requests 8 bytes × 1,000,000 = **8,000,000 bytes (8 MB)** from the free store." },
          { label: "Step 2: the copy's data traffic", text: "The loop copies 1,000,000 doubles: another 8 MB written (and 8 MB read from the source array) — 16 MB of memory traffic plus the allocator call." },
          { label: "Step 3: the move's work", text: "The move constructor copies two members — `elem` (8 bytes) and `sz` (4, padded to 8) — then writes `nullptr` and `0` back to the source: roughly **32 bytes touched, zero allocations, zero element traffic**." },
          { label: "Step 4: state after", text: "After the copy: `v1` and `v2` both hold the million values (16 MB across two arrays). After the move: `v3` holds the single array; `v1` is empty — valid, destructible, assignable, but its old contents belong to `v3` now." },
          { label: "Step 5: the ratio", text: "Copy ≈ 8 MB of allocation plus 16 MB of traffic; move ≈ 32 bytes. The advantage grows exactly with element size and count — and with `vector<string>`, the copy's per-element allocations vanish too." },
        ],
        result: "Moving is a quarter-million times cheaper in bytes touched for this Vector — the difference between a design that returns containers by value and one that cannot.",
      },
      {
        title: "Working through copy and move",
        problem: "Copying containers and move semantics. Your task: write copy constructor/assignment and move constructor/assignment for a container type.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: write copy constructor/assignment and move constructor/assignment for a container type. Write down the guarantee you will rely on — for this chapter it is: Copy = deep copy: fresh allocation plus O(n) element copies, both objects independent and equal." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Point { double x, y; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — state precisely what `std::move` does and does not do — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Move = handle transfer: `Vector(Vector&&)` steals `elem`/`sz` and empties the source; `std::move` is only the cast that requests it. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Copy = deep copy: fresh allocation plus O(n) element copies, both objects independent and equal. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Copy = deep copy: fresh allocation plus O(n) element copies, both objects independent and equal.",
      "Move = handle transfer: `Vector(Vector&&)` steals `elem`/`sz` and empties the source; `std::move` is only the cast that requests it.",
      "Prefer the moved-from object's destructor to see `nullptr`, and the *reader* to see an expired value: never use a moved-from object except to destroy or reassign it.",
    ],
    quiz: [
      {
        q: "What does `std::move(v1)` itself do?",
        options: [
          "It moves v1's elements immediately, wherever it appears",
          "It destroys v1 at that point",
          "Nothing is moved: it is a cast that classifies v1 as an rvalue so the following initialization/assignment selects the move operation",
          "It copies v1 and marks the copy as moved",
        ],
        answer: 2,
        explanation: "`std::move` never moves anything; it changes which overload overload resolution picks at the destination, where the actual transfer happens.",
      },
      {
        q: "After `Vector v3 = std::move(v1);` with the constructor shown in this section, what is `v1`?",
        options: [
          "Unchanged, because moves are only an optimization hint",
          "A duplicate of v3's contents",
          "Dangling: any use is a compile error",
          "Empty — `sz == 0` and `elem == nullptr` — safe to destroy or assign to",
        ],
        answer: 3,
        explanation: "The standard leaves a moved-from object valid but unspecified; this implementation sets `a.elem = nullptr; a.sz = 0;`, so its destructor safely frees nothing.",
      },
      {
        q: "Why does the move constructor set `a.elem = nullptr` before finishing?",
        options: [
          "So the source's destructor frees nothing: `delete[] nullptr` is a no-op, preventing a double free of the transferred array",
          "Because null is the canonical value of pointers",
          "To speed up the source's later use",
          "To mark the object as const",
        ],
        answer: 0,
        explanation: "The source must be left safe to destroy; nulling the pointer is the cheapest way to guarantee the shared array is freed exactly once.",
      },
      {
        q: "Which initialization copies?",
        options: [
          "`Vector v2 = Vector{100};`",
          "`Vector v2 = v1;` where v1 is used again afterwards",
          "`Vector v2 = std::move(v1);`",
          "Returning a local `Vector` from a function",
        ],
        answer: 1,
        explanation: "A plain lvalue source selects the copy constructor; the other three are rvalues (temporary or explicitly moved) and take the move path.",
      },
      // PYQ-pattern: GATE 2019 — moved-from state after std::move (rephrased)
      {
        q: "After this line runs, which statement is correct?\n```cpp\nstd::string t = std::move(s);\n```",
        options: ["`s` is destroyed immediately, so touching it in any way is forbidden", "`s` remains a valid object in an unspecified state, typically emptied, while `t` holds the characters", "`s` keeps its characters and `t` receives an independent copy", "The program is ill-formed, because moving leaves no valid source object"],
        answer: 1,
        explanation: "Step 1: The data given is a move construction that transfers resources from `s` to `t`. Step 2: The governing rule is the moved-from contract: the source stays a valid object whose value is unspecified, so only operations without preconditions such as destruction and assignment are safe on it. Step 3: Tracing the transfer, the character buffer changes ownership to `t`, which observes the full string, while `s` is left holding an unspecified but destructible shell. Step 4: The distractors fail because the source is not destroyed early, no duplication occurs during a move, and the operation is well-formed by design. Step 5: Therefore the source is valid yet unspecified while the destination owns the characters."
      }
    ],
    depth: [
      {
        tier: "masters",
        title: "Why move exists: the full economics of value semantics",
        blocks: [
          {
            kind: "para",
            body: "Value semantics is the claim that assignment makes equal values and objects behave like numbers — and for a class holding a free-store array, that claim forces every assignment to run a deep copy. The copy constructors of pre-2011 C++ were therefore honest but wasteful in one specific, pervasive case: the source of the copy was about to be destroyed anyway. A function returning a `Vector`, a temporary passed to `push_back`, a `string` replaced by concatenation — in each, the language could see that the source had no future user, yet the copy semantics mandated duplicating its representation byte for byte. Compiler writers responded with ad-hoc optimizations (copy elision), which helped but were discretionary and invisible in the type system. C++11's move semantics makes the distinction a *type-level fact*: an rvalue reference parameter (`Vector&&`) is a function's written promise that it may plunder its argument, because the argument is a temporary or has been explicitly relinquished with `std::move`.",
          },
          {
            kind: "theorem",
            heading: "The moved-from contract",
            body: "**Theorem (standard-library move semantics).** If `T b = std::move(a);` selects a move construction, then `b` acquires the value `a` had before the operation, and `a` is left in a *valid but unspecified* state: destructor-able, assignable, and usable with no preconditions. The library's components rely on exactly this and nothing more. In the tour's `Vector`, the state is precisely specified by the code — `a.sz == 0` and `a.elem == nullptr` — and the destructor's `delete[] nullptr` is a no-op, so the stolen array is freed exactly once, by `b`. Note what the contract does *not* say: it does not promise the moved-from object is empty, nor that its capacity is zero, nor that any particular query yields any particular value. Programs that assume a specific moved-from state are non-portable even when they work.",
          },
          {
            kind: "derivation",
            heading: "Cost accounting: copy versus move",
            body: "Let a container hold $n$ elements of type `T` on the free store, with each `T` costing $s$ bytes to copy (including any per-element allocation a copy of `T` requires). A copy construction costs one array allocation of $n \\cdot s$ bytes plus $n$ element copies plus, later, one deallocation of the source when it dies — $\\Theta(n)$ time and a transient $\\Theta(n)$ extra memory. A move construction copies the container's fixed-size handle (for our `Vector`, `elem` plus `sz` — 16 bytes on a 64-bit machine) and leaves the source empty: $\\Theta(1)$ time, zero allocations. The gap scales without bound, and it compounds inside algorithms: growing a `vector<string>` of 1,000,000 strings of 40 characters by copying touches roughly 40 MB of text and performs a million string allocations on relocation, while the move-based growth touches 16 MB of string handles (a million 16-byte re-pointings) and performs *zero* allocations. The asymptotics are unchanged — $O(n)$ versus $O(n)$ — but the constant factor and the allocator pressure differ by an order of magnitude, which is the difference between a design being deployable and not.",
          },
          {
            kind: "example",
            heading: "Returning by value without a tax",
            body: "Consider the canonical sink-shaped factory: `Vector make(int n) { Vector res{n}; /* fill res */ return res; } ... Vector v = make(5);`. Pre-C++11 you paid one of two prices: a deep copy of `res` into `v` (8 MB for a million doubles), or contorting the API to return heap pointers, `out`-parameters or shared ownership. With move semantics the standard guarantees the cheap path: at minimum, `res` (an expiring local, matched to `Vector&&`) is moved into `v` — 16 bytes of handle plus nulling the source. Better still, most implementations apply copy elision and construct `res` directly in `v`'s storage, deleting even the move. Move semantics is therefore best understood not as an optimization hack but as *removing the design pressure that forced ownership contortions*: return the value, and the type system routes the resource to its destination.",
          },
          {
            kind: "remark",
            heading: "Why growth demands `noexcept`",
            body: "The most consequential consumer of move is `std::vector` growth. When a `vector` reallocates, it must transfer its elements to the new array, and if an element's move constructor throws mid-transfer, the container is left half-relocated — the strong exception guarantee is unrecoverable, since a throwing move has already mutated the source. The library resolves this with `std::move_if_noexcept`: growth *moves* elements only when the move constructor is declared `noexcept`, and otherwise falls back to copies, which either complete or leave the source intact. The practical consequence is mandatory knowledge: writing `Vector(Vector&&) noexcept` (with the keyword) is not stylistic — omit it and every growth of `vector<Vector>` silently reverts to deep copies, a performance cliff invisible in the source.",
          },
          {
            kind: "application",
            heading: "Swap as the archetypal move-based algorithm",
            body: "`std::swap(a, b)` is the cleanest demonstration of move's leverage. The naive three-copy swap allocates twice and copies every element three times; the standard-library swap on containers is implemented as three move operations — steal `a`'s handle into a temporary, steal `b`'s into `a`, steal the temporary's into `b` — with zero allocations and constant time regardless of element count. Every algorithm that needs to reorder storage (sorting, partitioning, shuffling) inherits this economics, which is why the C++11 rewrite of the algorithms around move was as significant as the container changes: move semantics is not a container feature but a vocabulary change for all of value-oriented code.",
          },
          {
            kind: "open",
            heading: "Forwarding: where the `&&` story continues",
            body: "Move semantics is half of a larger idea about value categories. Inside a template, `T&&` does not mean “rvalue reference”: with `T` deduced, `T&&` collapses to an lvalue reference when the argument is an lvalue, giving a single parameter that *preserves* the caller's value category — a forwarding reference. `std::forward<T>` then re-casts the parameter to exactly what the caller passed, so a wrapper can hand its arguments to a constructor without degrading moves into copies. This is the machinery behind `emplace_back`, in-place construction, and the variadic forwarding patterns of Chapter 28. The open design question that remains: how to teach the distinction between “moves from” and “forwards without losing” — concepts promise to make such library-level constraints checkable, but value-category reasoning is still learned by apprenticeship. Chapter 17 and Chapter 23 of this book are the next stops.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- 3.4
  {
    sectionId: "cpp-ch3-s4",
    readingTime: 7,
    intro: "The last abstraction mechanism removes the last hard-wiring in our Vector: the element type. A template is a compile-time recipe for generating a class or function from a parameterized description, so one definition of Vector serves ints, doubles, strings, or Vectors of Vectors. This is also the door into the standard library: vector, list and map are exactly this mechanism, used at industrial scale.",
    objectives: [
      "Declare and use class templates and function templates",
      "Explain what the compiler generates, and when",
      "Contrast template genericity with OO genericity and pick between them",
    ],
    concepts: [
      {
        term: "Class templates",
        kind: "definition",
        statement: "A **class template** is a class parameterized over types (and values): `template<class T> class Vector { public: Vector(int s); ~Vector(); T& operator[](int i); const T& operator[](int i) const; int size() const; private: T* elem; int sz; };`. Using it with an argument — `Vector<int> vi(10);` — **instantiates** the class for that argument: the compiler generates a version of the code in which every `T` is that type. `Vector<double>`, `Vector<string>` and `Vector<Vector<double>>` are three distinct generated types. (In C++11, the closing `>>` of nested template arguments is legal — before 2011 it needed a space.)",
        detail: "The `const`-qualified `operator[]` overload is how read-only access is given to constant Vectors — the first appearance of const-correctness as an interface design tool, not a decoration.",
      },
      {
        term: "Function templates",
        kind: "definition",
        statement: "A **function template** is the same idea for functions: `template<class T> T sum(const Vector<T>& v) { T s = 0; for (int i = 0; i != v.size(); ++i) s = s + v[i]; return s; }`. Calling `sum(vi)` with a `Vector<int>` deduces `T = int` and instantiates `sum<int>` automatically — the caller writes no angle brackets at all. One definition of the algorithm serves every element type that supports the operations it uses.",
        detail: "The template's requirements on `T` are implicit in the body (here: constructible from 0, copyable, `+`). This “the operations used must be supported” style of checking at instantiation is duck typing made compile-time and safe.",
      },
      {
        term: "A compile-time mechanism",
        kind: "insight",
        statement: "**A template is a compile-time mechanism**: instantiation happens when the compiler sees the template used with concrete arguments, the generated code is specialized to those arguments, and calls inside it are ordinary direct calls that can be inlined. That is why `std::sort` on a `vector<int>` compares `int`s with no indirection, and why template code costs compile time and code size (one instantiation per distinct argument list) but no run-time dispatch at all.",
        detail: "The contrast with virtual functions is exact: templates decide at compile time and pay in compile time and code size; virtual functions decide at run time and pay one indirection. C++'s generic containers are built on the first, its GUI-style interfaces on the second.",
      },
      {
        term: "The container zoo",
        kind: "insight",
        statement: "Templates make the standard containers possible, and the tour introduces the choice: **`vector`** — elements contiguous, indexable, fast at the end; **`list`** — a doubly-linked list, cheap insertion/erasure anywhere, no subscripting; **`map`** — an ordered key/value structure (a balanced tree) with $O(\\log n)$ lookup; plus **`unordered_map`** — a hash table with expected $O(1)$ lookup. The design rule the book states: use `vector` by default, and switch only when you have a measured reason.",
        detail: "`Vector<T>` here and `std::vector<T>` in the library are the same idea at different levels of polish — the tour's version exists to show you what the library one is doing for you.",
      },
      {
        term: "Templates: the working contract",
        kind: "definition",
        statement: "**Templates.** Parameterized types and the container zoo. You can claim this section when you can declare and use class templates and function templates — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 3 (A Tour of C++: Abstraction Mechanisms); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Instantiating and sizing a template Vector",
        problem: "With the template above, `Vector<int> vi(5);` is declared and filled with `{1, 2, 3, 4, 5}`, then `sum(vi)` is called. Show what the compiler generates, what lives where in memory, and what `sum` returns. (Assume 8-byte pointers, 4-byte `int`, 8-byte `double`.)",
        steps: [
          { label: "Step 1: instantiation", text: "The declaration requests `Vector<int>`; the compiler generates that class — a copy of the template with each `T` replaced by `int` — so the class's `operator[]` returns `int&` and the private members are `int* elem; int sz;`." },
          { label: "Step 2: layout", text: "The `Vector<int>` object itself holds `elem` (8 bytes) + `sz` (4, padded to 8) = **16 bytes**; the 5 elements live on the free store in a `new int[5]` = **20 bytes**." },
          { label: "Step 3: the algorithm", text: "`sum(vi)` deduces `T = int` from the argument and instantiates `sum<int>` (a second, separate function from `sum<double>` if that is ever used). The loop runs 5 times: `s` takes values 1, 3, 6, 10, 15." },
          { label: "Step 4: the result", text: "`sum(vi)` returns **15**. Had we instantiated `Vector<double> vd(5)` with the same values, `Vector<double>` would be a distinct class whose elements occupy 40 bytes — and `sum(vd)` would return the `double` 15.0, with `T` deduced as `double`." },
          { label: "Step 5: what it cost", text: "Two instantiations exist only if both were used; nothing was dispatched at run time, and no `Vector<char>` ever exists unless the program asks for one — the compile-time mechanism in action." },
        ],
        result: "One template definition, exactly the instantiations the program uses, no run-time overhead: 15 from 1+2+3+4+5 with the type chosen at compile time.",
      },
      {
        title: "Working through templates",
        problem: "Parameterized types and the container zoo. Your task: declare and use class templates and function templates.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: declare and use class templates and function templates. Write down the guarantee you will rely on — for this chapter it is: A template is parameterized code; use with an argument (`Vector<int>`, `sum(vi)`) generates — instantiates — the specialized version." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `struct Point { double x, y; };` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain what the compiler generates, and when — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Templates are a compile-time mechanism: direct, inlinable calls, paid in compile time and one code copy per argument type. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A template is parameterized code; use with an argument (`Vector<int>`, `sum(vi)`) generates — instantiates — the specialized version. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A template is parameterized code; use with an argument (`Vector<int>`, `sum(vi)`) generates — instantiates — the specialized version.",
      "Templates are a compile-time mechanism: direct, inlinable calls, paid in compile time and one code copy per argument type.",
      "The standard containers are templates: `vector` by default, `list`/`map`/`unordered_map` by measured need.",
    ],
    quiz: [
      {
        q: "What does the compiler do when it sees `Vector<string> vs(3);` for the first time?",
        options: [
          "Interprets the template at run time",
          "Allocates a vector of variant types",
          "Instantiates the class template: generates the class code specialized for `T = string`",
          "Rejects it, since Vector was written for double",
        ],
        answer: 2,
        explanation: "Templates are a compile-time mechanism; each distinct template argument produces a distinct generated type, with `T` replaced throughout.",
      },
      {
        q: "In the call `sum(vi)` where `vi` is a `Vector<int>`, how is `T` determined?",
        options: [
          "It is chosen at run time by the first element's type",
          "It defaults to `double`",
          "It must be specified explicitly in angle brackets",
          "It is deduced from the argument's type — `T = int`",
        ],
        answer: 3,
        explanation: "Function-template arguments are deduced from the call: a `Vector<int>` argument makes `T` an `int`, and `sum<int>` is instantiated.",
      },
      {
        q: "Which container should be the default choice, per the tour?",
        options: [
          "`vector` — contiguous and fast at the end; switch away only with a measured reason",
          "`list`, because it is flexible",
          "`map`, because ordering is always useful",
          "A C-style array, for speed",
        ],
        answer: 0,
        explanation: "The book's rule: `vector` unless you can articulate (ideally, measure) why another container's strengths matter for your access pattern.",
      },
      {
        q: "The tour notes that in C++11, `Vector<Vector<double>>` needs no space between the `>` characters. Why did C++98 need one?",
        options: [
          "Nested templates were illegal before C++11",
          "The scanner would otherwise read `>>` as the right-shift operator, ending both template argument lists in one token",
          "Formatting standards required it",
          "The space changed the meaning of the template",
        ],
        answer: 1,
        explanation: "C++11 made the parser smart enough to treat a closing `>>` as two template closers in template-argument context; before that, the space was mandatory.",
      },
    ],
  },

  // ---------------------------------------------------------------- 3.5
  {
    sectionId: "cpp-ch3-s5",
    readingTime: 4,
    intro: "The abstraction tour closes with advice whose theme is fit: each mechanism has a job it is best at, and most design errors in C++ are mismatches — run-time polymorphism where a template would do, copying where a move belongs, an interface hierarchy where a concrete type suffices. The rules exist to make the right fit the easy choice.",
    objectives: [
      "Match each design situation to its best abstraction mechanism",
      "Justify the concrete-type-first and library-first defaults",
      "State the rules for heavy returns and resource-holding members",
    ],
    concepts: [
      {
        term: "Express ideas as types",
        kind: "law",
        statement: "**Design classes around concepts and invariants**: if the program has a notion, give it a type whose constructor establishes and whose operations preserve the invariants — not a bag of functions passing raw data around. The abstraction mechanisms exist so that domain ideas (a `Vector`, a `Shape`, a `Color`) become things the compiler understands and checks.",
        detail: "The corollary that structures the whole book: once the type is right, the algorithms often already exist in the library and the rest of the program becomes simple.",
      },
      {
        term: "Concrete first, virtual only for interfaces",
        kind: "method",
        statement: "Prefer a **concrete type** until you need run-time polymorphism or interface/implementation separation; introduce an abstract base class when — and only when — you need substitutability across classes not known at compile time. Virtual functions are the costliest of the abstraction mechanisms (per-object vptr, per-call indirection, implementation separation), so pay it for the flexibility it uniquely provides, not by default.",
        detail: "The same principle selects templates: when the variation is known at compile time, templates give the same generality with zero dispatch — choose by *when the type is known*, never by which mechanism feels more advanced.",
      },
      {
        term: "Move the heavy stuff",
        kind: "method",
        statement: "Write the five special operations for resource-holding types — destructor, copy constructor, copy assignment, **move constructor, move assignment** — and mark moves `noexcept`. Then return containers by value, pass by value only into sinks, and let the type system route resources. A class that needs none of the five (plain data) should define none — the compiler-generated ones are correct.",
        detail: "This is the “rule of five” in its natural habitat; the library-first corollary from Chapter 1 returns here: `std::vector` already implements all of this correctly, so the advice mostly means *use it* rather than *write it*.",
      },
      {
        term: "Shipping rule for a tour of C++: abstraction mechanisms",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Design ideas as types with invariants; the compiler then does the bookkeeping.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
      {
        term: "Review checklist for a tour of C++: abstraction mechanisms",
        kind: "method",
        statement: "Take the objectives as review questions: match each design situation to its best abstraction mechanism? Then justify the concrete-type-first and library-first defaults? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.",
        detail: "A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.",
      },
    ],
    examples: [
      {
        title: "Four design calls, four mechanisms",
        problem: "Choose and justify the mechanism for: (1) a temperature-reading buffer of doubles; (2) a drawing layer with shapes chosen at run time; (3) a generic `sum` over any numeric container; (4) a function returning a large computed result.",
        steps: [
          { label: "Call 1", text: "A fixed-purpose buffer of one known element type: a concrete class (or plainly `std::vector<double>`). No polymorphism, no templates of your own — the simplest tool that covers the need." },
          { label: "Call 2", text: "Shapes chosen at run time: an abstract `Shape` with virtual functions, used via `Shape*`/`Shape&` and drawn through a loop over a container of pointers. This is the unique job of inheritance — substitutability unknown until run time." },
          { label: "Call 3", text: "Sum over any numeric type: a function template. The element type varies per call site and is always known at compile time, so direct, inlinable code is generated per type — with zero run-time dispatch." },
          { label: "Call 4", text: "Returning a large result: return **by value**, with the result type implementing move (or simply being `std::vector`). The move constructor (usually elided entirely) carries the handle out; no output parameter, no shared ownership, no leak." },
        ],
        result: "Concrete, abstract, template, move — one per situation, chosen by asking when the varying fact becomes known and who owns the resources.",
      },
      {
        title: "Reviewing a tour of C++: abstraction mechanisms code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: match each design situation to its best abstraction mechanism.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Design ideas as types with invariants; the compiler then does the bookkeeping." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `struct Point { double x, y; };`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: justify the concrete-type-first and library-first defaults. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Concrete types by default; virtual dispatch only for run-time substitutability; templates when types are known at compile time." },
        ],
        result: "The review ends with findings tied to reasons: Design ideas as types with invariants; the compiler then does the bookkeeping. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Design ideas as types with invariants; the compiler then does the bookkeeping.",
      "Concrete types by default; virtual dispatch only for run-time substitutability; templates when types are known at compile time.",
      "Give resource-holding types the five special operations (`noexcept` moves) — or better, use the library types that already have them.",
    ],
    quiz: [
      {
        q: "The “rule of five” refers to which set of a class's operations?",
        options: [
          "Five kinds of loop",
          "Constructor, five member functions, destructor",
          "Destructor, copy constructor, copy assignment, move constructor, move assignment",
          "Five levels of inheritance",
        ],
        answer: 2,
        explanation: "If a class needs any one of these resource-related operations, it almost certainly needs to define (or deliberately delete) all five.",
      },
      {
        q: "A team wants a function working on `vector<int>`, `vector<double>` and `vector<string>`, all known at each call site. What fits best?",
        options: [
          "An abstract base class with virtual accessors",
          "Runtime type checks with casts",
          "Five separate hand-written functions",
          "A function template",
        ],
        answer: 3,
        explanation: "The variation is a compile-time fact; a template generates one specialized, inlinable version per element type with no dispatch.",
      },
      {
        q: "Why should a move constructor be marked `noexcept`?",
        options: [
          "So `std::vector` growth will use moves rather than falling back to copies to preserve the strong exception guarantee",
          "Because exceptions are deprecated",
          "To make it faster than a copy by syntax alone",
          "To prevent the class from being copied",
        ],
        answer: 0,
        explanation: "Growth uses `move_if_noexcept`: without the `noexcept` promise, a throwing move mid-relocation would lose the guarantee, so the library copies instead.",
      },
    ],
  },
]

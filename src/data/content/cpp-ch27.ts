import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup — The C++ Programming Language, 4th Edition
// Chapter 27: Templates and Hierarchies (Sections 27.1 – 27.5)
// Master study content.
// ============================================================================

export const cppCh27Content: SectionContent[] = [
  // ---------------------------------------------------------------- 27.1
  {
    sectionId: 'cpp-ch27-s1',
    readingTime: 5,
    intro: 'C++ gives you two grand mechanisms for making one piece of code serve many needs: **parameterization** — templates, resolved at compile time — and **derivation** — class hierarchies with virtual functions, resolved at run time. They are not rivals but a pair of axes: real designs place the interface in a hierarchy, the implementation in templates, and sometimes use a template parameter *as a base class*. This chapter is about choosing and combining them deliberately.',
    objectives: [
      'Position templates and class hierarchies as the two variation mechanisms of C++',
      'State the cost axis of each mechanism',
      'Name the three combination patterns this chapter develops',
    ],
    concepts: [
      {
        term: 'Parameterization (templates)',
        kind: 'definition',
        statement: '**Parameterization varies behavior at compile time**: all types and values are known during compilation, every call can be statically checked and inlined, and no per-object overhead exists. The cost is paid in code — each argument set can produce a distinct body.',
        detail: 'This is the mechanism of the standard library\'s containers and algorithms.',
      },
      {
        term: 'Derivation with virtual functions',
        kind: 'definition',
        statement: '**Derivation varies behavior at run time**: one interface, many implementations, selected by an object\'s dynamic type through a vtable. The cost is an indirection per call and a vptr per object; the gain is mixing types not known until execution — and substitutability without recompiling call sites.',
        detail: 'This is the mechanism of the classic object-oriented interface hierarchies.',
      },
      {
        term: 'Three combination patterns',
        kind: 'insight',
        statement: 'The chapter\'s repertoire: **hierarchies whose members are templates** (a template derived from a template or from an instantiation), **templates whose parameters are base classes** (mixins), and the everyday blend — **generic containers of pointers to base classes** (`vector<unique_ptr<Shape>>`).',
        detail: 'Most real systems use all three simultaneously; the skill is knowing which mechanism owns which decision.',
      },
      {
        term: 'Introduction: the working contract',
        kind: 'definition',
        statement: '**Introduction.** Parameterization and hierarchy together. You can claim this section when you can position templates and class hierarchies as the two variation mechanisms of C++ — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 27 (Templates and Hierarchies); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Introduction: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, state the cost axis of each mechanism. Then, name the three combination patterns this chapter develops. Finally, test the outcome against the section promise: Parameterization varies behavior at compile time; derivation with virtual functions varies it at run time.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'Drawing shapes both ways',
        problem: 'A graphics program must draw collections of shapes. Compare the run-time design (`vector<Shape*>` with a virtual `draw()`) against the compile-time design (a template `draw_all` over containers of concrete shapes), for two concrete types `Circle` and `Square`.',
        steps: [
          { label: 'Run-time path', text: '`vector<Shape*> v; for (Shape* p : v) p->draw();` — exactly one loop body is compiled; every call is an indirection through the vtable; the vector can mix circles, squares, and types added later.' },
          { label: 'Compile-time path', text: '`draw_all(circles)` and `draw_all(squares)` over a `vector<Circle>` and a `vector<Square>` — two instantiations of `draw_all`, one per element type; every call is direct and inlinable.' },
          { label: 'Accounting', text: 'Run-time: 1 body + 1 vtable per shape class + 8-byte vptr per object. Compile-time: 2 bodies, 0 bytes per object, no vtables.' },
          { label: 'The real question', text: 'Are the types of the elements known when the loop is compiled? If the user picks shapes with a mouse at run time, only the virtual design can answer.' },
        ],
        result: 'Same algorithm shape, different economics — the chapter teaches you to pick the mechanism consciously, not by habit.',
      },
      {
        title: 'Working through introduction',
        problem: 'Parameterization and hierarchy together. Your task: position templates and class hierarchies as the two variation mechanisms of C++.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: position templates and class hierarchies as the two variation mechanisms of C++. Write down the guarantee you will rely on — for this chapter it is: Parameterization varies behavior at compile time; derivation with virtual functions varies it at run time.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename Base> struct Logged : Base { };` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — state the cost axis of each mechanism — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: The mechanisms compose in both directions: templates over hierarchies, and template parameters as base classes. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Parameterization varies behavior at compile time; derivation with virtual functions varies it at run time. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Parameterization varies behavior at compile time; derivation with virtual functions varies it at run time.',
      'The mechanisms compose in both directions: templates over hierarchies, and template parameters as base classes.',
      'The everyday blend is a container template holding pointers to a base class — generic outside, polymorphic inside.',
    ],
    quiz: [
      {
        q: 'Which mechanism selects among implementations at run time?',
        options: ['Template instantiation', 'Virtual function dispatch', 'Function overloading', 'Template specialization'],
        answer: 1,
        explanation: 'Only the dynamic dispatch of virtual functions can choose an implementation after the program has started; the other three are compile-time.',
      },
      {
        q: 'A `vector<Shape*>` filled with `Circle`s and `Square`s, drawn through a virtual `draw()`, exercises:',
        options: ['only templates', 'only class hierarchies', 'both — a template for the container, virtual functions for the elements', 'neither mechanism'],
        answer: 2,
        explanation: 'The container is a class template instantiation; the element behavior is chosen by dynamic type — the standard combination.',
      },
      {
        q: 'A generic algorithm instantiated over N distinct element types produces:',
        options: ['one body shared by all N types', 'up to N distinct bodies', 'N vtables', 'one body per call site, always'],
        answer: 1,
        explanation: 'Each distinct set of template arguments can yield a distinct instantiation — the code-growth side of the compile-time mechanism.',
      },
    ],
  },

  // ---------------------------------------------------------------- 27.2
  {
    sectionId: 'cpp-ch27-s2',
    readingTime: 7,
    intro: 'The decision rule is refreshingly mechanical. If the exact type is known at compile time, prefer templates: static checking, direct inlinable calls, no per-object cost. If the type is known only at run time — the user picks shapes with a mouse — you need virtual functions: one body, dispatch through a vptr, heterogeneous collections. And one combination is so standard it is the default shape of C++ code: a container template holding pointers to a base class.',
    objectives: [
      'Apply the criterion: templates when the type is known at compile time, virtual functions when it is not',
      'Quantify the costs: per-type bodies and no per-object overhead, versus one body with a vptr and an indirection',
      'Combine the mechanisms: generic containers of base-class pointers',
    ],
    concepts: [
      {
        term: 'The selection criterion',
        kind: 'law',
        statement: '**When the types are not known until run time, use virtual functions; when they are known at compile time, use templates.** Templates give better type checking and better run-time performance; hierarchies give run-time flexibility and code growth that is independent of the number of types.',
        detail: 'Almost every detailed rule in this chapter is a corollary of this one question: *when is the actual type known?*',
      },
      {
        term: 'Cost profile: templates',
        kind: 'insight',
        statement: 'Each distinct set of template arguments can produce a distinct body: an algorithm instantiated over $N$ element types yields up to $N$ code paths (code bloat when unmanaged). In exchange, every call is direct — typically inlined — and objects carry no vptr.',
        detail: 'The standard countermeasure is centralized explicit instantiation (Chapter 26), not abandonment of templates.',
      },
      {
        term: 'Cost profile: virtual functions',
        kind: 'insight',
        statement: 'One body per operation and one vtable per class; every object carries a **vptr — 8 bytes on a 64-bit implementation** — and every call is one indirection. The number of derived classes can grow without touching the call sites: run-time substitutability templates cannot offer.',
        detail: 'The vtable itself is tiny by comparison: $k$ virtual functions cost $k$ pointers of static data per class.',
      },
      {
        term: 'No container covariance',
        kind: 'law',
        statement: '`Circle*` converts to `Shape*`, but **`vector<Circle>` is not a `vector<Shape>`** and does not convert to one: a template demands exact argument types. The standard combination is therefore a container of (smart) pointers to the base: `vector<unique_ptr<Shape>>` — generic container, polymorphic elements.',
        detail: 'The reason is structural: `vector<Shape>` would have to accept elements of size `sizeof(Shape)`, which `Circle` might exceed.',
      },
      {
        term: 'Division of labor',
        kind: 'method',
        statement: 'Use **hierarchies for interfaces** — what varies at run time, must stay binary-stable, or must mix in one container. Use **templates for implementations** — algorithms, containers, policies. The standard library is exactly this shape: iterator interfaces consumed by template algorithms.',
        detail: 'A graphics editor should mirror it: a `Shape` hierarchy for the interface, template algorithms over containers of shapes.',
      },
    ],
    figures: [
      {
        caption: 'The mechanism matrix. Templates choose implementations at compile time and pay per-type code; virtual functions choose at run time and pay a vptr plus an indirection per object. A template cannot select its own argument at run time — that cell falls back to the hierarchy. CRTP uses a base-class template parameter to obtain static dispatch inside a hierarchy-shaped design.',
        svg: `<svg viewBox="0 0 760 430" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Matrix of template parameterization versus derivation across compile-time and run-time type knowledge"><defs><marker id="cpp27a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><rect x="246" y="16" width="252" height="40" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.5"/><text x="372" y="41" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">type known at COMPILE time</text><rect x="510" y="16" width="234" height="40" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.5"/><text x="627" y="41" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">type known only at RUN time</text><rect x="14" y="70" width="216" height="124" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><text x="122" y="122" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">Parameterization</text><text x="122" y="144" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.9">(templates)</text><rect x="14" y="210" width="216" height="124" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><text x="122" y="262" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">Derivation</text><text x="122" y="284" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.9">(base + virtual functions)</text><rect x="246" y="70" width="252" height="124" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><text x="372" y="100" text-anchor="middle" font-size="13" fill="currentColor">sort(v) over a vector&lt;int&gt;</text><text x="372" y="122" text-anchor="middle" font-size="13" fill="currentColor">direct, inlinable calls;</text><text x="372" y="142" text-anchor="middle" font-size="13" fill="currentColor">N element types → N bodies</text><text x="372" y="172" text-anchor="middle" font-size="12.5" font-style="italic" fill="currentColor" opacity="0.85">the fast path</text><rect x="510" y="70" width="234" height="124" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.8"/><text x="627" y="98" text-anchor="middle" font-size="13" fill="currentColor">a template cannot choose</text><text x="627" y="118" text-anchor="middle" font-size="13" fill="currentColor">its argument at run time;</text><text x="627" y="138" text-anchor="middle" font-size="13" fill="currentColor">it must collapse to a</text><text x="627" y="158" text-anchor="middle" font-size="13" fill="currentColor">common type (base, variant)</text><line x1="627" y1="194" x2="627" y2="206" stroke="currentColor" stroke-width="2" marker-end="url(#cpp27a)"/><text x="636" y="205" font-size="11" fill="currentColor" opacity="0.8">falls back</text><rect x="246" y="210" width="252" height="124" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.8" stroke-dasharray="7 5"/><text x="372" y="238" text-anchor="middle" font-size="13" fill="currentColor">CRTP: a class passes itself</text><text x="372" y="258" text-anchor="middle" font-size="13" fill="currentColor">up as a template argument</text><text x="372" y="278" text-anchor="middle" font-size="13" fill="currentColor">to its base — static,</text><text x="372" y="298" text-anchor="middle" font-size="13" fill="currentColor">inlined dispatch</text><text x="372" y="322" text-anchor="middle" font-size="12.5" font-style="italic" fill="currentColor" opacity="0.85">the hybrid</text><rect x="510" y="210" width="234" height="124" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><text x="627" y="238" text-anchor="middle" font-size="13" fill="currentColor">for (Shape* p : v)</text><text x="627" y="258" text-anchor="middle" font-size="13" fill="currentColor">p-&gt;draw();</text><text x="627" y="278" text-anchor="middle" font-size="13" fill="currentColor">one body, vtable dispatch,</text><text x="627" y="298" text-anchor="middle" font-size="13" fill="currentColor">heterogenous collections</text><text x="627" y="322" text-anchor="middle" font-size="12.5" font-style="italic" fill="currentColor" opacity="0.85">the flexible path</text><rect x="246" y="352" width="498" height="60" rx="10" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="495" y="376" text-anchor="middle" font-size="12.5" fill="currentColor">the standard combination: a container template over pointers to a base class —</text><text x="495" y="396" text-anchor="middle" font-size="12.5" fill="currentColor">templates for the container, a hierarchy for the elements</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: 'A million points: vptr arithmetic',
        problem: 'Compare `struct P { double x, y; };` with `struct VP { virtual void draw() const; double x, y; };` for 1,000,000 objects: memory footprint and the cost of drawing each one.',
        steps: [
          { label: 'P', text: 'Two doubles: $2 \\times 8 = 16$ bytes per object; a million objects occupy $16{,}000{,}000$ bytes.' },
          { label: 'VP', text: 'The vptr adds 8 bytes and alignment stays at 8: $8 + 16 = 24$ bytes per object; a million occupy $24{,}000{,}000$ bytes.' },
          { label: 'Difference', text: '$8{,}000{,}000$ bytes — 50% more memory, spent entirely on the vptr that enables run-time dispatch.' },
          { label: 'Calls', text: 'A template `draw(p)` resolves to a direct, inlinable call; `p->draw()` on `VP` loads the vptr, loads the vtable slot, and jumps indirectly.' },
        ],
        result: 'When the type is known at compile time, the template path saves the vptr and the indirection; when it is not, the 8 bytes and the indirection are the price of run-time choice.',
      },
      {
        title: 'Working through parameterization and hierarchy',
        problem: 'Choosing templates or virtual functions. Your task: apply the criterion: templates when the type is known at compile time, virtual functions when it is not.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: apply the criterion: templates when the type is known at compile time, virtual functions when it is not. Write down the guarantee you will rely on — for this chapter it is: Templates: compile-time choice, better checking, inlinable calls; code grows with the number of argument sets.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename Base> struct Logged : Base { };` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — quantify the costs: per-type bodies and no per-object overhead, versus one body with a vptr and an indirection — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Virtual functions: run-time choice, one body per operation, an 8-byte vptr and one indirection per object on 64-bit implementations. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Templates: compile-time choice, better checking, inlinable calls; code grows with the number of argument sets. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Templates: compile-time choice, better checking, inlinable calls; code grows with the number of argument sets.',
      'Virtual functions: run-time choice, one body per operation, an 8-byte vptr and one indirection per object on 64-bit implementations.',
      '`vector<Circle>` is not a `vector<Shape>` — combine via `vector<unique_ptr<Shape>>`: template container, hierarchical elements.',
    ],
    quiz: [
      {
        q: 'A paint program lets the user select shapes with the mouse at run time and draw them. Which mechanism must the drawing loop use?',
        options: ['A template instantiated per shape type', 'A virtual function call through a base pointer', 'Function overloading', 'Template specialization'],
        answer: 1,
        explanation: 'The concrete type is not known until run time — precisely the case virtual dispatch exists for; a template cannot select its argument then.',
      },
      {
        q: 'Why is passing a `vector<Circle>` to a function expecting `vector<Shape>&` an error?',
        options: ['`Circle` does not derive from `Shape`', 'Templates require exact argument types — there is no container covariance', 'Vectors cannot be passed by reference', 'It is legal, but slow'],
        answer: 1,
        explanation: 'Template arguments do not convert along inheritance paths; the standard workaround is a container of pointers to the base.',
      },
      {
        q: 'On a 64-bit implementation, the per-object price of virtual dispatch is:',
        options: ['nothing — the vtable is shared', 'a vptr of 8 bytes plus an indirection per call', '8 bytes per virtual function', 'one vtable per object'],
        answer: 1,
        explanation: 'Each object carries one vptr (8 bytes); the vtable itself is static data shared by all objects of the class.',
      },
      {
        q: 'Which is a cost that grows with the number of *element types*, rather than with the number of classes?',
        options: ['Number of vtables', 'Number of template instantiations', 'Size of each vtable', 'Size of the vptr'],
        answer: 1,
        explanation: 'Each distinct set of template arguments can yield a distinct body — instantiation count grows with argument sets, not with the class hierarchy.',
      },
    ],
  },

  // ---------------------------------------------------------------- 27.3
  {
    sectionId: 'cpp-ch27-s3',
    readingTime: 7,
    intro: 'Hierarchies can be built out of templates in three classic shapes: derive an ordinary class from a specific instantiation (`class D : public B<int>`), derive a template from a template (`D2<T>` from `B<T>`), and derive from a base supplied as a **template parameter** — which turns the base class itself into a policy knob. Virtual functions work inside class templates, with one notable prohibition.',
    objectives: [
      'Write the three derivation forms: from an instantiation, template from template, and from a base parameter',
      'State what virtual-function support is and is not allowed inside class templates',
      'Use a parameterized base class as a compile-time implementation policy',
    ],
    concepts: [
      {
        term: 'An instantiation as a base',
        kind: 'definition',
        statement: '`class D1 : public B<int> { /* ... */ };` — once instantiated, `B<int>` is an ordinary class, so this is plain derivation: `D1` sees `B<int>`\'s public interface, and a `D1*` converts to `B<int>*`.',
        detail: 'Use it to hang a domain-specific class on a general library component without re-parameterizing.',
      },
      {
        term: 'A template from a template',
        kind: 'definition',
        statement: '`template<class T> class D2 : public B<T> { /* ... */ };` — the same argument flows to the base: `D2<int>` derives from `B<int>`, `D2<double>` from `B<double>`. Each instantiation is an independent class with an independent base; they share source, not type.',
        detail: 'This is how class templates extend other class templates without fixing their element type.',
      },
      {
        term: 'The base as a policy parameter',
        kind: 'method',
        statement: "`template<class T, class Base = std::vector<T>> class Stack : private Base { /* push, pop via the base */ };` — implementation by derivation: swap `vector`, `deque`, or a fixed-size buffer by naming it, with the public interface untouched. The base is part of the type, chosen at compile time and checked where used.",
        detail: 'Derivation used this way is parameterization in disguise — hence the chapter title.',
      },
      {
        term: 'Virtual functions in class templates',
        kind: 'law',
        statement: '**Allowed**: a class template may have virtual functions; each instantiation is a distinct class with its own vtable. **Forbidden**: a *member function template* cannot be virtual — the compiler would need a vtable entry for every instantiation of it that could ever exist, which is unknowable.',
        detail: 'Virtual functions and templates compose; virtual function templates do not.',
      },
      {
        term: 'No conversion across arguments',
        kind: 'insight',
        statement: 'Inside such hierarchies, conversion follows the instantiated classes: `D2<int>*` converts to `B<int>*`, but nothing relates `D2<int>` to `B<double>` or to `D2<double>` — template arguments do not convert along the way (the same rule that keeps `vector<Circle>` from being a `vector<Shape>`).',
        detail: 'When you need mixed collections, you need a non-template base class — or pointers to one.',
      },
    ],
    examples: [
      {
        title: 'One stack, three containers — policy arithmetic',
        problem: "Given `template<class T, class Base = std::vector<T>> class Stack : private Base { public: void push(const T& x) { Base::push_back(x); } /* ... */ };`, compare `Stack<int>`, `Stack<int, std::deque<int>>`, and `Stack<int, Fixed<int, 64>>` where `Fixed` is `template<class T, int N> struct Fixed { T buf[N]; int n = 0; };`.",
        steps: [
          { label: 'Default policy', text: '`Stack<int>` with the default base `std::vector<int>`: `sizeof` = 24 bytes on a 64-bit implementation (three machine words) — the empty derived class adds nothing on top of its base.' },
          { label: 'Deque policy', text: '`Stack<int, std::deque<int>>`: typically 80 bytes — same public interface, same four operations, different internal structure.' },
          { label: 'Fixed policy', text: '`Fixed<int, 64>` holds $64 \\times 4 + 4 = 260$ bytes; `Stack<int, Fixed<int, 64>>` is those 260 bytes — a stack whose capacity is now a compile-time fact.' },
          { label: 'What is absent', text: 'No virtual functions anywhere: `push` calls the base directly — an inlinable call with no vptr in any object.' },
        ],
        result: 'One interface over interchangeable implementations chosen at compile time — derivation used as parameterization.',
      },
      {
        title: 'Working through hierarchies of class templates',
        problem: 'Template base classes and derived classes. Your task: write the three derivation forms: from an instantiation, template from template, and from a base parameter.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: write the three derivation forms: from an instantiation, template from template, and from a base parameter. Write down the guarantee you will rely on — for this chapter it is: `B<int>` is an ordinary class once instantiated — derive from it directly; `D2<T>` from `B<T>` pairs each derived instantiation with the matching base.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename Base> struct Logged : Base { };` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — state what virtual-function support is and is not allowed inside class templates — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Virtual functions live happily in class templates — but a member function template can never be virtual. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `B<int>` is an ordinary class once instantiated — derive from it directly; `D2<T>` from `B<T>` pairs each derived instantiation with the matching base. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      '`B<int>` is an ordinary class once instantiated — derive from it directly; `D2<T>` from `B<T>` pairs each derived instantiation with the matching base.',
      'Virtual functions live happily in class templates — but a member function template can never be virtual.',
      'Deriving from a template parameter makes the base itself a policy: one `Stack` over `vector`, `deque`, or a fixed buffer.',
    ],
    quiz: [
      {
        q: 'Given `template<class T> class D2 : public B<T> { /* ... */ };`, the class `D2<double>` derives from:',
        options: ['`B<int>`', '`B<double>`', '`B<T>`, left unbound', 'both `B<T>` for all `T`'],
        answer: 1,
        explanation: 'The same argument flows to the base: `D2<double>` is an ordinary class derived from the instantiation `B<double>`.',
      },
      {
        q: 'Which construct is ill-formed inside a class template?',
        options: ['A virtual destructor', 'A virtual member function', 'A virtual member function *template*', 'A protected member function'],
        answer: 2,
        explanation: 'A member function template cannot be virtual: the compiler would need a vtable slot for every instantiation of it that could ever appear.',
      },
      {
        q: 'The `Stack` example changes its storage from `vector` to `deque` by:',
        options: ['overriding a virtual function', 'changing the base-class template argument', 'specializing `std::vector`', 'redeclaring the class at run time'],
        answer: 1,
        explanation: 'The base is a template parameter — the policy is part of the type, selected where the type is named.',
      },
      {
        q: 'In the same setup, which conversion is valid?',
        options: ['`D2<int>*` to `B<double>*`', '`D2<int>*` to `B<int>*`', '`D2<double>` to `D2<int>`', '`B<int>*` to `D2<int>*` without a cast'],
        answer: 1,
        explanation: 'Conversion follows the instantiated classes: `D2<int>` derives from `B<int>`, and template arguments never convert along the way.',
      },
    ],
  },

  // ---------------------------------------------------------------- 27.4
  {
    sectionId: 'cpp-ch27-s4',
    readingTime: 7,
    intro: 'The final step in combining the two mechanisms: derive a class from **its own template arguments** — each argument supplies a feature layer, a *mixin*. With variadic templates the core class can take any number of layers; the empty ones cost nothing thanks to the empty-base optimization; and every distinct combination of layers is a distinct, statically-checked type.',
    objectives: [
      'Write a mixin-composed class whose bases are its template parameters',
      'Predict object layouts using the empty-base optimization',
      'Contrast mixin composition with run-time, interface-based composition',
    ],
    concepts: [
      {
        term: 'Mixins',
        kind: 'definition',
        statement: "A **mixin** is a small class contributing one feature — data plus the operations on it — composed by deriving a core class from it: `template<class... Bases> class Point : public Bases... { double x, y; /* ... */ };`. `Point<Label, Color>` is a point carrying a label and a color, with every layer's operations available on the whole object.",
        detail: 'The mixin supplies the feature; the core supplies the identity; the composition is the type.',
      },
      {
        term: 'Variadic bases',
        kind: 'definition',
        statement: '`class Point : public Bases...` expands the parameter pack into the base-clause list. Bases initialize left-to-right in the order written, with the core members constructed after them; destruction reverses the order. The same base appearing twice in the list is an error — and can be detected by a compile-time check over the pack.',
        detail: 'Ordering matters for layout: `Point<Label, Color>` and `Point<Color, Label>` are different types with different layouts.',
      },
      {
        term: 'Empty-base optimization',
        kind: 'law',
        statement: '**A base class with no data occupies no storage in its derived class** (implementations apply this universally). `Point<Plain>` — with `struct Plain { };` — is exactly as large as `Point<>`: 16 bytes for the two doubles. This is what makes behavior-only mixins free.',
        detail: '`std::vector<int>` stays 24 bytes while carrying an allocator for the same reason: the (empty) allocator is a base.',
      },
      {
        term: 'Compile-time composition',
        kind: 'insight',
        statement: 'Each distinct list of bases is a **distinct type**: features are baked in at compile time, every call is direct, and nothing can be added or removed at run time. You trade run-time flexibility for zero dispatch cost and full static checking.',
        detail: 'This is the §27.2 criterion applied at feature granularity rather than element-type granularity.',
      },
      {
        term: 'Mixins versus virtual interfaces',
        kind: 'insight',
        statement: 'The run-time alternative — an interface hierarchy with a virtual function per feature — costs a vptr per object plus an indirection per feature call, but allows any object to mix features at run time. Mixins cost compilation and fix the feature set at compile time.',
        detail: 'Choose by the same question as always: is the feature set known at compile time?',
      },
    ],
    figures: [
      {
        caption: 'Layering `Point<Label, Color>`: each mixin contributes its data; empty bases are free (EBO). `Point<Plain>` stays 16 bytes, `Point<Color>` grows to 32, `Point<Label, Color>` to 64 — the arithmetic shown is exactly the layout arithmetic the implementation performs.',
        svg: `<svg viewBox="0 0 760 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mixin layering of Point with Label and Color bases"><text x="380" y="24" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.9">building Point&lt;Label, Color&gt; layer by layer</text><rect x="40" y="46" width="330" height="56" rx="8" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.8"/><text x="56" y="70" font-size="14" font-weight="bold" fill="currentColor">mixin Label</text><text x="56" y="90" font-size="12.5" fill="currentColor" opacity="0.9">std::string s — 32 bytes</text><rect x="40" y="106" width="330" height="56" rx="8" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.8"/><text x="56" y="130" font-size="14" font-weight="bold" fill="currentColor">mixin Color</text><text x="56" y="150" font-size="12.5" fill="currentColor" opacity="0.9">int r, g, b — 12 bytes</text><rect x="40" y="166" width="330" height="56" rx="8" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="2"/><text x="56" y="190" font-size="14" font-weight="bold" fill="currentColor">core Point</text><text x="56" y="210" font-size="12.5" fill="currentColor" opacity="0.9">double x, y — 16 bytes</text><line x1="380" y1="46" x2="380" y2="222" stroke="currentColor" stroke-width="1.5"/><line x1="380" y1="46" x2="388" y2="46" stroke="currentColor" stroke-width="1.5"/><line x1="380" y1="222" x2="388" y2="222" stroke="currentColor" stroke-width="1.5"/><text x="205" y="246" text-anchor="middle" font-size="12.5" fill="currentColor">bases total 32 + 12 = 44 bytes</text><text x="205" y="266" text-anchor="middle" font-size="12.5" fill="currentColor">members aligned to offset 48 → 48 + 16 = 64 bytes</text><rect x="430" y="46" width="302" height="240" rx="10" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="581" y="72" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">sizes you can verify</text><text x="452" y="102" font-size="13" fill="currentColor">Point&lt;&gt; = 16 bytes</text><text x="452" y="128" font-size="13" fill="currentColor">Point&lt;Plain&gt; = 16 bytes</text><text x="466" y="148" font-size="12" fill="currentColor" opacity="0.85">the empty base costs nothing — EBO</text><text x="452" y="174" font-size="13" fill="currentColor">Point&lt;Color&gt; = 32 bytes</text><text x="452" y="200" font-size="13" fill="currentColor">Point&lt;Label, Color&gt; = 64 bytes</text><text x="452" y="232" font-size="12.5" fill="currentColor" opacity="0.9">no vptr — features are baked in at</text><text x="452" y="250" font-size="12.5" fill="currentColor" opacity="0.9">compile time; zero dispatch cost</text><text x="380" y="332" text-anchor="middle" font-size="12.5" fill="currentColor" opacity="0.85">every distinct list of bases is a distinct type — composition happens entirely at compile time</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'The bytes behind Point<Label, Color>',
        problem: 'Given `struct Plain { };`, `struct Color { int r, g, b; };`, `struct Label { std::string s; };` (32 bytes on a typical 64-bit implementation), and `template<class... Bases> class Point : public Bases... { double x, y; };`, compute the size of `Point<>`, `Point<Plain>`, `Point<Color>`, and `Point<Label, Color>`.',
        steps: [
          { label: 'Point<>', text: 'The two doubles alone: $2 \\times 8 = 16$ bytes.' },
          { label: 'Point<Plain>', text: 'The empty base occupies 0 bytes (empty-base optimization): still 16 bytes — composing a behavior-only mixin changed nothing.' },
          { label: 'Point<Color>', text: 'The base subobject is 12 bytes; the members need 8-byte alignment, so they land at offset 16 and the total is $16 + 16 = 32$ bytes.' },
          { label: 'Point<Label, Color>', text: 'Label occupies 32 bytes, Color the next 12 — bases end at offset 44; members align to offset 48, so the total is $48 + 16 = 64$ bytes.' },
        ],
        result: 'Mixins add exactly the data they carry — 16 → 16 → 32 → 64 — and empty ones are free; a comparable interface-based design would add a vptr to every point.',
      },
      {
        title: 'Working through template parameters as base classes',
        problem: 'Mixin-style composition. Your task: write a mixin-composed class whose bases are its template parameters.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: write a mixin-composed class whose bases are its template parameters. Write down the guarantee you will rely on — for this chapter it is: `template<class... Bases> class Point : public Bases...` composes features at compile time; each list of bases is a distinct type.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `template<typename Base> struct Logged : Base { };` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — predict object layouts using the empty-base optimization — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Empty bases cost nothing (EBO): `Point<Plain>` = `Point<>` = 16 bytes; `std::vector<int>` stays 24 bytes while carrying an allocator. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `template<class... Bases> class Point : public Bases...` composes features at compile time; each list of bases is a distinct type. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      '`template<class... Bases> class Point : public Bases...` composes features at compile time; each list of bases is a distinct type.',
      'Empty bases cost nothing (EBO): `Point<Plain>` = `Point<>` = 16 bytes; `std::vector<int>` stays 24 bytes while carrying an allocator.',
      'Mixins trade run-time flexibility for zero dispatch cost and full static checking — the §27.2 criterion at feature granularity.',
    ],
    quiz: [
      {
        q: 'With `class Point { double x, y; };` as the core and `struct Plain { };`, what is `sizeof(Point<Plain>)`?',
        options: ['24 bytes — the base costs a vptr', '20 bytes — the base adds 4', '16 bytes — the empty base costs nothing', 'Undefined — empty bases are not allowed'],
        answer: 2,
        explanation: 'The empty-base optimization lets an empty base occupy zero storage, so the size equals the core: 2 doubles = 16 bytes.',
      },
      {
        q: 'What happens with `Point<Label, Label>` (the same mixin twice)?',
        options: ['The two Labels share their storage', 'The second Label is ignored', 'The program is ill-formed — a class cannot be a direct base twice', 'It works, but the layout is unspecified'],
        answer: 2,
        explanation: 'Specifying the same class as a direct base more than once is an error — one reason to check the pack for duplicates.',
      },
      {
        q: 'When are a mixin\'s features attached to the object?',
        options: ['At run time, when the feature is first used', 'At compile time — the list of bases is part of the type', 'At link time', 'At construction, from a factory'],
        answer: 1,
        explanation: 'Mixin composition is a compile-time act: every distinct combination of layers is a distinct class.',
      },
      {
        q: '`std::vector<int>` remains 24 bytes on a 64-bit implementation despite carrying an allocator because:',
        options: ['the allocator is stored in a global table', 'the allocator is an empty base and the empty-base optimization applies', 'allocators are not stored at all', 'vectors store pointers to their allocators'],
        answer: 1,
        explanation: 'The (empty) allocator is a base class of the vector\'s internal representation; EBO makes it occupy no storage.',
      },
    ],
  },

  // ---------------------------------------------------------------- 27.5
  {
    sectionId: 'cpp-ch27-s5',
    readingTime: 4,
    intro: 'A short discipline for using both mechanisms well: match the mechanism to when the type is known, compose interfaces by hierarchy and implementations by template, and watch instantiation growth. When in doubt, the criterion of 27.2 decides — and the numbers confirm it.',
    objectives: [
      'Decide between templates and hierarchies using the type-availability criterion',
      'Apply the division of labor: interfaces by hierarchy, implementations by template',
      'Recognize and control instantiation growth',
    ],
    concepts: [
      {
        term: 'Match the mechanism to the question',
        kind: 'insight',
        statement: '**Ask first: is the actual type known at compile time?** If yes — templates (static checking, inlining, no vptr). If no — virtual functions (the only mechanism that can choose then). Everything else in the chapter is a corollary of this one question.',
        detail: 'Performance arguments matter, but they follow the criterion; they do not replace it.',
      },
      {
        term: 'Interfaces by hierarchy, implementations by template',
        kind: 'method',
        statement: 'Put the run-time interface — what varies dynamically and must stay stable — into a base class with virtual functions. Put the algorithms and data structures over that interface into templates (`vector<unique_ptr<Shape>>` plus template algorithms). Parameterize policies by base classes when you need compile-time interchange.',
        detail: 'The standard library\'s own shape: stable iterator interfaces, generic template algorithms.',
      },
      {
        term: 'Watch instantiation growth',
        kind: 'insight',
        statement: 'Each type combination can generate a distinct body: $N$ element types through a heavy template can mean $N$ heavy bodies. Centralize instantiations with explicit instantiation (Chapter 26) and measure before templating what a virtual call was handling fine.',
        detail: 'Code bloat is real but manageable; unmeasured fear of it is just as damaging as ignoring it.',
      },
      {
        term: 'Shipping rule for templates and hierarchies',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **Ask first: is the actual type known at compile time? Everything else follows.** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
      {
        term: 'Review checklist for templates and hierarchies',
        kind: 'method',
        statement: 'Take the objectives as review questions: decide between templates and hierarchies using the type-availability criterion? Then apply the division of labor: interfaces by hierarchy, implementations by template? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.',
        detail: 'A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.',
      },
    ],
    examples: [
      {
        title: 'Auditing a design choice',
        problem: 'A CAD application redraws about 40,000 shapes of 6 concrete types every frame; the shapes live together in a heterogeneous collection selected by the user. A reviewer proposes replacing the `Shape` hierarchy with a template `draw(const T&)` per concrete type. Evaluate.',
        steps: [
          { label: 'The criterion', text: 'The element types are known only at run time — they arrive in a mixed collection chosen by the user — so a per-type template *cannot* be selected at the draw loop. The hierarchy is the right mechanism.' },
          { label: 'What the template version would cost', text: 'Six separate containers or a `variant` switch, six call sites, more code for identical behavior — and still a run-time dispatch somewhere to find the right one.' },
          { label: 'What the hierarchy costs', text: 'vptrs: $40{,}000 \\times 8 = 320{,}000$ bytes ≈ 0.32 MB; vtables: 6 classes with a handful of virtuals each — a few hundred bytes of static data; one indirect call per draw, negligible next to rasterization.' },
          { label: 'Where templates belong here', text: 'The math kernel, the container policies, the algorithms over containers of concrete types known at compile time — everywhere the criterion says yes.' },
        ],
        result: 'Keep the hierarchy for drawing; spend templates where the types are compile-time knowledge — the criterion decides, the arithmetic confirms.',
      },
      {
        title: 'Reviewing templates and hierarchies code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: decide between templates and hierarchies using the type-availability criterion.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Ask first: is the actual type known at compile time? Everything else follows.' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `template<typename Base> struct Logged : Base { };`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: apply the division of labor: interfaces by hierarchy, implementations by template. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: Interfaces by hierarchy, implementations by templates; policies by parameterized bases.' },
        ],
        result: 'The review ends with findings tied to reasons: Ask first: is the actual type known at compile time? Everything else follows. Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      'Ask first: is the actual type known at compile time? Everything else follows.',
      'Interfaces by hierarchy, implementations by templates; policies by parameterized bases.',
      'Instantiation growth is real: $N$ types through a heavy template can mean $N$ bodies — centralize with explicit instantiation and measure.',
    ],
    quiz: [
      {
        q: 'The fastest reliable way to decide between a template and a virtual function for an operation is to ask:',
        options: ['which one is shorter to write', 'whether the actual type is known at compile time', 'whether the class has a destructor', 'which one the standard library uses more'],
        answer: 1,
        explanation: 'Compile-time knowledge selects the template path (checking, inlining, no vptr); run-time knowledge forces virtual dispatch.',
      },
      {
        q: 'The "standard combination" for storing user-selected polymorphic objects is:',
        options: ['a template array of concrete objects', 'a container template over pointers to a base class', 'a base class containing a template array', 'a union of all concrete types'],
        answer: 1,
        explanation: '`vector<unique_ptr<Shape>>`: the container is generic, the elements are polymorphic — each mechanism doing what it is best at.',
      },
      {
        q: 'A heavy template instantiated for $N$ element types across many translation units risks:',
        options: ['$N$ bodies of code bloat unless centralized with explicit instantiation', 'N vtables per class', 'one body and N vptrs', 'no risk — the linker deduplicates everything'],
        answer: 0,
        explanation: 'Each argument set can generate its own body; `extern template` declarations and one explicit instantiation keep it to one.',
      },
    ],
  },
]

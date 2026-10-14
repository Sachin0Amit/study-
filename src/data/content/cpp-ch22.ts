import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup, The C++ Programming Language, 4th edition — Chapter 22
// Run-Time Type Information (TC++PL pp. 641–664)
// Sections 22.1–22.7. Code is C++; math is KaTeX; figures are inline SVG.
// ============================================================================

export const cppCh22Content: SectionContent[] = [
  // ------------------------------------------------------------ 22.1
  {
    sectionId: 'cpp-ch22-s1',
    readingTime: 6,
    intro: 'A `Shape*` can point to any shape the program will ever define — that is the whole point of the interface — but it also means the compiler has deliberately forgotten which one. Run-time type information (RTTI) is the machinery for getting that knowledge back at run time: `dynamic_cast` to ask whether an object really is of some class, and `typeid` to ask exactly what its type is. Stroustrup introduces RTTI as a fallback: virtual functions should always be the first tool, and this chapter is about the situations where they are not enough.',
    objectives: [
      'Explain why an upcast to a base-class interface discards static type information, and why virtual functions alone cannot recover it',
      'Name the two RTTI mechanisms — `dynamic_cast` for navigation and `typeid` for identification — and the distinct questions each answers',
      'Recognize the classic motivating problems, such as object I/O, where the exact type of an object must be recovered at run time',
    ],
    concepts: [
      {
        term: 'Run-time type information',
        kind: 'definition',
        statement: 'RTTI is information about the **run-time type of an object** that a program can inspect after the object has been handed over through a base-class interface. C++ exposes two mechanisms: `dynamic_cast` for checked navigation of a class hierarchy (§22.2) and `typeid` for exact-type queries (§22.5).',
        detail: 'The information is attached to polymorphic objects — implementations store it beside the virtual function table — which is why RTTI works only where virtual functions do: a class with no virtual functions has no run-time type record to consult.',
      },
      {
        term: 'The lost-type problem',
        kind: 'insight',
        statement: 'Upcasting — using a `Circle` where a `Shape` is expected — is the act that makes object-oriented programming work, and it is also the act that **discards the static type** of the object. A virtual call recovers *behavior* for the questions the interface designer anticipated, but it can never answer questions like "which exact class is this?" or "does this object also belong to that other class?"',
        detail: 'The canonical example is object I/O: an object is written to a stream as a sequence of bytes, and the program that reads it back sees only bytes plus a base-class pointer — the exact type must be recovered before the data can be interpreted. Equality comparison across a heterogeneous hierarchy raises the same problem.',
      },
      {
        term: 'Two mechanisms, two questions',
        kind: 'definition',
        statement: '`dynamic_cast` answers "**is this object of class T, or of a class derived from T?**" and delivers a usable `T*` (or `T&`) when the answer is yes. `typeid` answers "**what is the exact type of this object?**" and delivers a `const type_info&` naming that one class.',
        detail: 'The distinction matters: a `Smiley` derived from `Circle` passes `dynamic_cast<Circle*>` but fails `typeid(*p) == typeid(Circle)`. Use `dynamic_cast` when you intend to *use* the object as a `T`; reach for `typeid` only when the exact type itself is the information you need.',
      },
      {
        term: 'RTTI as a fallback, not a feature',
        kind: 'insight',
        statement: 'The question "which kind of object is this?" is usually better answered by **redesigning the interface** — adding a virtual function, or reorganizing which class owns which responsibility. RTTI exists for the cases where you cannot change the classes: other people’s libraries, interfaces fixed by the system, and persistent data laid down long ago.',
        detail: 'This is why the chapter is short and the advice section stern: most designs that lean heavily on RTTI are using it to patch a missing virtual function, and the patches rot as the hierarchy grows.',
      },
      {
        term: 'Introduction: the working contract',
        kind: 'definition',
        statement: '**Introduction.** RTTI at a glance. You can claim this section when you can explain why an upcast to a base-class interface discards static type information, and why virtual functions alone cannot recover it — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 22 (Run-Time Type Information); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'Where the type disappears',
        problem: 'Trace a `Circle` object through a base-class interface and identify exactly what information survives and what is lost.',
        steps: [
          { label: 'Construct', text: '`Circle c;` — the static type of `c` is `Circle`; every member of `Circle` is directly accessible.' },
          { label: 'Upcast', text: '`Shape& r = c;` — a legal, implicit upcast. The static type of `r` is now `Shape&`; everything only `Circle` declares is invisible through `r`.' },
          { label: 'Virtual call', text: '`r.draw()` compiles and runs `Circle::draw` — dynamic dispatch recovers the *behavior*, because `draw()` is one of the questions `Shape` was designed to answer.' },
          { label: 'Unanticipated question', text: 'If `Shape` has no `radius()`, then `r.radius()` does not compile — the interface simply does not carry that knowledge, even though the object has a radius.' },
          { label: 'Object I/O', text: 'Write `r` to a file and read it back as a `Shape*`: the stream contains bits only. Nothing virtual can be called before the exact type is known — the type itself must be reconstructed first.' },
        ],
        result: 'Virtual dispatch answers the questions the interface designer anticipated; RTTI exists for the questions nobody anticipated — starting with "what type is this object, so that I may even call one of its functions?"',
      },
      {
        title: 'Working through introduction',
        problem: 'RTTI at a glance. Your task: explain why an upcast to a base-class interface discards static type information, and why virtual functions alone cannot recover it.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: explain why an upcast to a base-class interface discards static type information, and why virtual functions alone cannot recover it. Write down the guarantee you will rely on — for this chapter it is: An upcast deliberately discards the static type of an object; virtual functions recover anticipated behavior, not arbitrary type knowledge' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `if (auto p = dynamic_cast<Derived*>(base)) { p->extra(); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — name the two RTTI mechanisms — `dynamic_cast` for navigation and `typeid` for identification — and the distinct questions each answers — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: `dynamic_cast` asks about membership in a class family; `typeid` asks for exact identity — choose the weaker question that suffices If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: An upcast deliberately discards the static type of an object; virtual functions recover anticipated behavior, not arbitrary type knowledge Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'An upcast deliberately discards the static type of an object; virtual functions recover anticipated behavior, not arbitrary type knowledge',
      '`dynamic_cast` asks about membership in a class family; `typeid` asks for exact identity — choose the weaker question that suffices',
      'RTTI is available only for polymorphic types, because the run-time type record lives beside the virtual function table',
    ],
    quiz: [
      {
        q: 'Which single act discards the static type of a derived object in C++?',
        options: ['Upcasting it through a base-class interface', 'Declaring a virtual destructor', 'Taking its address', 'Calling a pure virtual function on it'],
        answer: 0,
        explanation: 'Assigning or binding a derived object to a base-class pointer or reference is precisely the conversion that forgets the derived type — by design, since that is what lets one interface serve every derived class.',
      },
      {
        q: 'Which RTTI facility answers "is this object a T or something derived from T"?',
        options: ['`static_cast`', '`dynamic_cast`', '`typeid`', '`reinterpret_cast`'],
        answer: 1,
        explanation: '`dynamic_cast<T*>(p)` performs exactly this checked membership test at run time, returning a valid `T*` on success and `nullptr` on failure.',
      },
      {
        q: 'The chapter’s canonical motivating problem for recovering exact types at run time is',
        options: ['Scheduling virtual calls efficiently', 'Template instantiation', 'Object I/O: reconstructing objects of unknown exact type from a stream', 'Garbage collection'],
        answer: 2,
        explanation: 'A reader that receives raw bytes plus a base-class pointer must first learn the exact type before it can meaningfully call any virtual function on the reconstructed object.',
      },
      {
        q: 'Why is RTTI restricted to polymorphic types?',
        options: ['Because the run-time type information is stored beside the virtual function table', 'Because only virtual classes have addresses', 'Because the standard library forbids it otherwise', 'Because non-virtual classes cannot be derived from'],
        answer: 0,
        explanation: 'The run-time type record is tied to the vtable; a class with no virtual functions has no vtable, so there is nowhere for the compiler to hang the type information that `dynamic_cast` and `typeid` consult.',
      },
    ],
  },

  // ------------------------------------------------------------ 22.2
  {
    sectionId: 'cpp-ch22-s2',
    readingTime: 8,
    intro: 'Class hierarchy navigation is the primary legitimate use of RTTI: given a base-class pointer, recover a pointer to a more specific part of the hierarchy, safely. `dynamic_cast` is a *conditional* conversion — it consults the object’s own type record, succeeds only when the object really is of the target class, and reports failure in a way the program can branch on. The section also fixes the vocabulary: upcasts, downcasts, and the cross-casts that only `dynamic_cast` can perform.',
    objectives: [
      'Use `dynamic_cast<T*>` to test and convert a base-class pointer, employing the declaration-in-condition idiom',
      'State what `dynamic_cast` does on failure for pointers (`nullptr`) and references (`std::bad_cast`), and why the two differ',
      'Distinguish upcasts, downcasts and cross-casts, and explain why only `dynamic_cast` can perform a checked cross-cast',
    ],
    concepts: [
      {
        term: 'dynamic_cast to a pointer',
        kind: 'definition',
        statement: '`dynamic_cast<T*>(p)` examines the object that `p` points to at run time; if that object is a `T` or a class derived from `T`, the result is a valid `T*`; otherwise the result is **`nullptr`**. The recommended idiom puts the cast in the condition so the pointer’s scope matches its guarantee: `if (Circle* pc = dynamic_cast<Circle*>(ps)) { /* pc is valid */ }`.',
        detail: 'If `p` is itself `nullptr`, the result is a null `T*`. A `dynamic_cast` that merely converts to an accessible base (an upcast) needs no run-time check at all and always succeeds.',
      },
      {
        term: 'dynamic_cast to a reference',
        kind: 'law',
        statement: 'For references, `dynamic_cast<T&>(r)` succeeds under the same condition and otherwise **throws `std::bad_cast`** — because a reference cannot be null, there is no failure value to return, so failure must be an exception.',
        detail: 'Use the pointer form when failure is an expected branch of the logic, and the reference form when failure means a broken program invariant and an exception (with its stack unwinding) is the honest response.',
      },
      {
        term: 'static_cast: the unchecked alternative',
        kind: 'insight',
        statement: '`static_cast<Circle*>(ps)` converts the pointer **without any run-time check**: it simply trusts you, at zero cost. If `ps` actually pointed to a `Square`, every subsequent member access through the result is undefined behavior — a lying pointer that compiles cleanly.',
        detail: 'The trade is explicit: `dynamic_cast` pays a run-time lookup against the object’s type record for a guarantee; `static_cast` pays nothing and guarantees nothing. In template and low-level code `static_cast` has honest uses, but as a hierarchy tool it is a trap.',
      },
      {
        term: 'Cross-casts and multiple inheritance',
        kind: 'definition',
        statement: 'Given `class MI : public Left, public Right`, converting a `Left*` that points to an `MI` object into a `Right*` is a **cross-cast**. Whether it can succeed, and by what address adjustment, depends on the actual object’s layout — known only at run time — so this is a job for `dynamic_cast` alone.',
        detail: '`static_cast` cannot even express it (the types are siblings, not related up or down), and `reinterpret_cast` would produce a wrong address by simply re-labeling the pointer. `dynamic_cast<Right*>(pl)` succeeds exactly when the pointed-to object really does contain a `Right` part, and returns the adjusted address of that subobject.',
      },
      {
        term: 'dynamic_cast<void*> and the polymorphic requirement',
        kind: 'law',
        statement: '`dynamic_cast<void*>(p)` yields a pointer to the **most derived object** of whatever `*p` is — usable as an identity key, since two such casts on the same object always yield the same address. All checked forms require the source type to be polymorphic (at least one virtual function).',
        detail: 'This "which complete object am I a part of?" query is the machinery that makes interfaces, garbage collectors and persistence systems possible; it cannot be faked with a plain cast because multiple inheritance makes the most-derived address a run-time fact.',
      },
    ],
    figures: [
      {
        caption: 'Class hierarchy navigation with `dynamic_cast`. Left: in a single hierarchy an upcast is implicit and always safe, a downcast is the checked conditional conversion (`nullptr` for pointers, `std::bad_cast` for references), and types in unrelated branches cannot be cast to one another at all. Right: with multiple inheritance, converting a `Left*` into a `Right*` — a cross-cast — depends on the actual object’s layout, so only `dynamic_cast` can perform it.',
        svg: '<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="Class hierarchy navigation with dynamic_cast: upcasts, downcasts, cross-casts"><text x="190" y="22" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-style="italic" fill="currentColor" opacity="0.9">One hierarchy</text><rect x="140" y="34" width="100" height="30" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="190" y="54" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Shape</text><line x1="190" y1="64" x2="190" y2="102" stroke="currentColor" stroke-width="1.6"/><polygon points="190,64 185,73 195,73" fill="currentColor"/><line x1="105" y1="102" x2="275" y2="102" stroke="currentColor" stroke-width="1.6"/><line x1="105" y1="102" x2="105" y2="140" stroke="currentColor" stroke-width="1.6"/><polygon points="105,140 100,131 110,131" fill="currentColor"/><line x1="275" y1="102" x2="275" y2="140" stroke="currentColor" stroke-width="1.6"/><polygon points="275,140 270,131 280,131" fill="currentColor"/><rect x="55" y="140" width="100" height="30" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="105" y="160" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Circle</text><rect x="225" y="140" width="100" height="30" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="275" y="160" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Square</text><rect x="55" y="248" width="100" height="30" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="105" y="268" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Smiley</text><line x1="105" y1="248" x2="105" y2="172" stroke="currentColor" stroke-width="1.6"/><polygon points="105,172 100,181 110,181" fill="currentColor"/><text x="222" y="92" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.85">upcast: implicit</text><line x1="175" y1="150" x2="175" y2="242" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 3"/><polygon points="175,242 170,233 180,233" fill="currentColor"/><text x="183" y="192" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.85">downcast:</text><text x="183" y="207" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.85">dynamic_cast —</text><text x="183" y="222" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.85">null or bad_cast</text><line x1="222" y1="155" x2="158" y2="155" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 3"/><polygon points="158,155 167,150.5 167,159.5" fill="currentColor"/><text x="192" y="147" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.85">no relation:</text><text x="192" y="170" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.85">any cast fails</text><text x="545" y="22" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-style="italic" fill="currentColor" opacity="0.9">Multiple inheritance</text><rect x="415" y="40" width="80" height="30" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="455" y="60" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Left</text><rect x="585" y="40" width="80" height="30" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="625" y="60" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Right</text><rect x="495" y="150" width="110" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="550" y="170" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">MI</text><text x="550" y="185" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.85">inherits both</text><line x1="520" y1="150" x2="462" y2="74" stroke="currentColor" stroke-width="1.6"/><polygon points="462,74 472,80 465,86" fill="currentColor"/><line x1="580" y1="150" x2="618" y2="74" stroke="currentColor" stroke-width="1.6"/><polygon points="618,74 617,86 609,82" fill="currentColor"/><path d="M 455 76 C 455 108, 625 108, 625 76" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 3"/><polygon points="625,76 620,86 630,86" fill="currentColor"/><text x="540" y="128" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.85">cross-cast: dynamic_cast&lt;Right*&gt;(pl)</text><text x="540" y="142" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.85">where pl is a Left* to an MI object</text><text x="545" y="222" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.85">the pointer is adjusted using the object’s layout —</text><text x="545" y="236" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.85">only dynamic_cast can do this; static_cast is rejected</text><line x1="36" y1="306" x2="72" y2="306" stroke="currentColor" stroke-width="1.8"/><polygon points="72,306 64,302 64,310" fill="currentColor"/><text x="80" y="310" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">inheritance (upcast implicit)</text><line x1="280" y1="306" x2="316" y2="306" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3"/><polygon points="316,306 308,302 308,310" fill="currentColor"/><text x="324" y="310" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">dynamic_cast: run-time checked</text><line x1="540" y1="306" x2="576" y2="306" stroke="currentColor" stroke-width="1.8" opacity="0.45"/><polygon points="576,306 568,302 568,310" fill="currentColor" opacity="0.45"/><text x="584" y="310" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.6">static_cast: no check</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Six casts on one Smiley',
        problem: 'Given the hierarchy `Shape` ← { `Circle` ← `Smiley`, `Square` } and the declaration `Shape* ps = new Smiley;`, predict the outcome of each cast.',
        steps: [
          { label: 'Upcast', text: '`dynamic_cast<Shape*>(ps)` — non-null without any run-time check: every `Smiley` is a `Shape`, and casting to an accessible base always succeeds.' },
          { label: 'Downcast to a true base', text: '`dynamic_cast<Circle*>(ps)` — non-null: a `Smiley` IS-A `Circle`, so the returned pointer addresses the `Circle` subobject of the most derived object.' },
          { label: 'Downcast to the wrong branch', text: '`dynamic_cast<Square*>(ps)` — `nullptr`: a `Smiley` has no `Square` part. The null test is the branch: `if (Square* q = dynamic_cast<Square*>(ps))` protects every use of `q`.' },
          { label: 'Identity', text: '`dynamic_cast<void*>(ps)` — the address of the complete `Smiley` object. Any other `dynamic_cast<void*>` applied to any pointer into the same object yields this same address.' },
          { label: 'Reference form', text: '`dynamic_cast<Square&>(*ps)` — throws `std::bad_cast`: there is no null reference to return, so failure must throw.' },
          { label: 'The trap', text: '`static_cast<Square*>(ps)` — compiles, "succeeds", and lies: the pointer was never checked, and the first `Square` member access through it is undefined behavior.' },
        ],
        result: 'Two forms of failure (`nullptr`, `std::bad_cast`), one identity query (`void*`), one guaranteed success, and one silent trap — the complete decision table for one line of hierarchy.',
      },
      {
        title: 'Working through class hierarchy navigation',
        problem: 'dynamic_cast and safe downcasts. Your task: use `dynamic_cast<T*>` to test and convert a base-class pointer, employing the declaration-in-condition idiom.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: use `dynamic_cast<T*>` to test and convert a base-class pointer, employing the declaration-in-condition idiom. Write down the guarantee you will rely on — for this chapter it is: `dynamic_cast<T*>(p)` is a conditional conversion: valid `T*` if the object is a `T`, `nullptr` otherwise; the reference form throws `std::bad_cast` instead' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `if (auto p = dynamic_cast<Derived*>(base)) { p->extra(); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — state what `dynamic_cast` does on failure for pointers (`nullptr`) and references (`std::bad_cast`), and why the two differ — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: The declaration-in-condition idiom ties the pointer’s scope to the validity of its guarantee If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `dynamic_cast<T*>(p)` is a conditional conversion: valid `T*` if the object is a `T`, `nullptr` otherwise; the reference form throws `std::bad_cast` instead Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      '`dynamic_cast<T*>(p)` is a conditional conversion: valid `T*` if the object is a `T`, `nullptr` otherwise; the reference form throws `std::bad_cast` instead',
      'The declaration-in-condition idiom ties the pointer’s scope to the validity of its guarantee',
      'Cross-casts between sibling bases of a multiply-derived object depend on run-time layout — only `dynamic_cast` performs them, and `static_cast` cannot even express them',
    ],
    quiz: [
      {
        q: '`Shape* ps` points to a `Square`. What does `dynamic_cast<Circle*>(ps)` do?',
        options: ['Returns `nullptr`', 'Throws `std::bad_cast`', 'Returns the original `Shape*` unchanged', 'Fails to compile'],
        answer: 0,
        explanation: 'For pointer targets, failure is a null pointer so that the caller can branch on it; the object is in the wrong branch of the hierarchy, so the checked conversion reports "no".',
      },
      {
        q: 'Why does the reference form `dynamic_cast<T&>(r)` throw rather than return something on failure?',
        options: ['References are slower to convert than pointers', 'The compiler cannot inspect a referenced object', 'There is no null reference, so failure has no representable return value', 'Throwing keeps the exception table warm'],
        answer: 2,
        explanation: 'A reference cannot be null, so the "failed conversion" outcome must be delivered some other way — `std::bad_cast` is that signal.',
      },
      {
        q: 'You hold a `Left* pl` that points to an object actually derived from both `Left` and `Right`. Which conversion to `Right*` is guaranteed correct?',
        options: ['`static_cast<Right*>(pl)`', '`dynamic_cast<Right*>(pl)`', '`reinterpret_cast<Right*>(pl)`', 'A C-style cast `(Right*)pl`'],
        answer: 1,
        explanation: 'The cross-cast needs the address of the `Right` subobject inside the actual object — a layout fact known only at run time, which is exactly what `dynamic_cast` consults.',
      },
      {
        q: 'The idiom `if (Tool* t = dynamic_cast<Tool*>(p)) { /* use t */ }` is preferred mainly because',
        options: ['the pointer’s scope exactly matches the region where it is guaranteed valid', 'it is faster than storing the result separately', 'it works for non-polymorphic classes too', 'it catches `std::bad_cast` automatically'],
        answer: 0,
        explanation: 'The variable declared in the condition is in scope only inside the dependent statement — precisely where the cast is known to have succeeded; there is no way to use it before checking.',
      },
    ],
  },

  // ------------------------------------------------------------ 22.3
  {
    sectionId: 'cpp-ch22-s3',
    readingTime: 8,
    intro: 'A virtual function call selects the code to run from the dynamic type of exactly one object. But many interesting operations — intersecting two shapes, evaluating an expression node, comparing two objects — depend on the dynamic types of *two* operands. The chapter presents two answers: hand-built double dispatch, and the Visitor pattern, which achieves the same effect with one virtual call plus ordinary overload resolution and no RTTI at all.',
    objectives: [
      'Explain why a single virtual call cannot select an operation from the dynamic types of two objects',
      'Implement double dispatch: a virtual call on the first operand followed by a call on the second with `*this` statically typed',
      'Structure the Visitor pattern — `accept(Visitor&)` plus `visit` overloads — and trace both dispatches step by step',
    ],
    concepts: [
      {
        term: 'The double-dispatch problem',
        kind: 'definition',
        statement: 'A virtual call performs **single dispatch**: the function is chosen from one object’s dynamic type. An operation over two polymorphic objects — `intersect(circle, square)`, or evaluating one node against another — needs a choice from the *pair* of dynamic types, and the language has no direct syntax for that.',
        detail: 'The brute-force fix is a `dynamic_cast` chain over the second operand inside each virtual override: for $n$ and $m$ classes that is up to $n \\times m$ type tests, each a possible run-time cost and a place to forget a case. Double dispatch and visitors remove the type tests entirely.',
      },
      {
        term: 'Double dispatch',
        kind: 'method',
        statement: 'Dispatch twice: the first virtual call `a.op(b)` discovers `a`’s type; inside that override, call `b.op2(*this)` — and now `*this` is **statically typed as the concrete class**, so the second virtual call dispatches on `b` while the first choice is already fixed.',
        detail: 'The catch is coupling: every class must know the interface of every other class it can interact with, so the "member" version of double dispatch scales badly when new classes keep arriving. That is what the visitor decouples.',
      },
      {
        term: 'The Visitor pattern',
        kind: 'definition',
        statement: 'Each element class defines `virtual void accept(Visitor& v) { v.visit(*this); }`; a `Visitor` declares one `visit` overload per element type. Inside `Num::accept`, `*this` has type `Num&`, so the compiler picks `visit(Num&)` — **the second dispatch is done by ordinary overload resolution**, using the type information the first (virtual) dispatch established.',
        detail: 'The pattern is double dispatch without RTTI: no `dynamic_cast`, no `typeid`, no type tags — just virtual functions plus overloading, both of which the compiler already implements perfectly.',
      },
      {
        term: 'Why no RTTI is needed',
        kind: 'insight',
        statement: 'The visitor machinery carries the type information in the **static type of `*this`**: by the time `v.visit(*this)` is compiled, the element class is known, so the pair (element, operation) is pinned by two ordinary language mechanisms — a virtual call and an overload resolution.',
        detail: 'This is the general lesson of the section: type-driven selection is cheapest when it is pushed into the type system itself; run-time type interrogation is what you fall back on when the structure cannot be arranged to carry the types.',
      },
      {
        term: 'The extensibility trade',
        kind: 'insight',
        statement: 'With a visitor, **adding a new operation** means writing one new `Visitor` class — nothing existing changes. **Adding a new element class** means adding a `visit` overload to the `Visitor` interface and editing every existing visitor to implement it.',
        detail: 'Compare plain virtual functions, where the trade is reversed: new types are free, new operations touch every class. Choose the pattern by which axis changes more often — that decision, not the mechanics, is the design content of the pattern.',
      },
    ],
    figures: [
      {
        caption: 'The Visitor pattern as double dispatch. The call `e.accept(ev)` (step 1) is a virtual call, so it runs on the concrete element — `Num`, `Times` or `Plus`. Inside `accept`, the static type of `*this` *is* that concrete class, so `v.visit(*this)` (step 2) is resolved by ordinary overload resolution, pinning the (element, operation) pair without any run-time type query. Finally `visit` itself is virtual (step 3), so the concrete visitor — here an `Evaluator` — executes.',
        svg: '<svg viewBox="0 0 720 360" width="100%" role="img" aria-label="The Visitor pattern: virtual accept dispatches on the element, then visit(*this) resolves by overloading"><rect x="60" y="34" width="120" height="40" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="120" y="52" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Expr</text><text x="120" y="66" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">abstract element</text><line x1="120" y1="74" x2="120" y2="102" stroke="currentColor" stroke-width="1.6"/><polygon points="120,74 115,83 125,83" fill="currentColor"/><line x1="75" y1="102" x2="285" y2="102" stroke="currentColor" stroke-width="1.6"/><line x1="75" y1="102" x2="75" y2="134" stroke="currentColor" stroke-width="1.6"/><polygon points="75,134 70,125 80,125" fill="currentColor"/><line x1="180" y1="102" x2="180" y2="134" stroke="currentColor" stroke-width="1.6"/><polygon points="180,134 175,125 185,125" fill="currentColor"/><line x1="285" y1="102" x2="285" y2="134" stroke="currentColor" stroke-width="1.6"/><polygon points="285,134 280,125 290,125" fill="currentColor"/><rect x="30" y="134" width="90" height="36" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="75" y="156" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Num</text><rect x="135" y="134" width="90" height="36" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="180" y="156" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Times</text><rect x="240" y="134" width="90" height="36" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="285" y="156" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Plus</text><rect x="30" y="190" width="300" height="64" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 3"/><text x="40" y="208" font-family="ui-sans-serif, system-ui" font-size="10" font-weight="600" fill="currentColor">every element defines:</text><text x="40" y="226" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">virtual void accept(Visitor&amp; v)</text><text x="40" y="242" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">{ v.visit(*this); }</text><rect x="490" y="34" width="180" height="40" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="580" y="52" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Visitor</text><text x="580" y="66" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">an operation interface</text><line x1="580" y1="74" x2="580" y2="86" stroke="currentColor" stroke-width="1.6"/><rect x="490" y="86" width="180" height="86" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="580" y="104" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.85">one pure virtual overload</text><text x="580" y="118" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.85">per element type</text><text x="580" y="138" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">visit(Num&amp;)</text><text x="580" y="156" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">visit(Times&amp;)   visit(Plus&amp;)</text><line x1="580" y1="172" x2="580" y2="190" stroke="currentColor" stroke-width="1.6"/><polygon points="580,190 575,181 585,181" fill="currentColor"/><rect x="490" y="190" width="180" height="40" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="580" y="208" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">Evaluator : Visitor</text><text x="580" y="222" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">a concrete operation</text><text x="580" y="246" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">a new operation: write a new Visitor class</text><text x="580" y="260" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.8">a new element: add a visit overload everywhere</text><rect x="300" y="22" width="170" height="26" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="385" y="39" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">e-&gt;accept(ev)</text><line x1="300" y1="35" x2="184" y2="45" stroke="currentColor" stroke-width="1.6"/><polygon points="184,45 195,49 195,40" fill="currentColor"/><circle cx="242" cy="40" r="9" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="242" y="44" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">1</text><line x1="330" y1="218" x2="486" y2="132" stroke="currentColor" stroke-width="1.6"/><polygon points="486,132 478,141 474,133" fill="currentColor"/><circle cx="408" cy="175" r="9" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="408" y="179" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">2</text><circle cx="556" cy="181" r="9" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="556" y="185" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">3</text><text x="60" y="298" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">1 — accept() is a virtual call: it dispatches to the concrete element (Num, Times or Plus)</text><text x="60" y="318" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">2 — inside accept(), the type of *this is that exact element class, so v.visit(*this) is resolved</text><text x="60" y="334" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">    by ordinary overloading — the (element, operation) pair is fixed, with no RTTI involved</text><text x="60" y="350" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">3 — visit() is also virtual: the override in the concrete Evaluator runs</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Evaluating 3 + 4 × 5 with a visitor',
        problem: 'An expression tree `Plus(Num(3), Times(Num(4), Num(5)))` must be evaluated by a visitor `Evaluator`. Trace every dispatch and verify the arithmetic.',
        steps: [
          { label: 'The call', text: '`Evaluator ev; double r = root.accept2(ev);` — the root is held as `Expr*`, its dynamic type is `Plus`.' },
          { label: 'First dispatch', text: '`root.accept(ev)` is virtual, so `Plus::accept` runs — the element half of the pair is now known.' },
          { label: 'Second dispatch', text: '`Plus::accept` executes `v.visit(*this)` where `*this` is a `Plus&`; overload resolution — at compile time — selects `Evaluator::visit(Plus&)`. No type was queried at run time.' },
          { label: 'Recurse', text: '`visit(Plus&)` visits both children; the right child is a `Times`, so the same two-step dance lands in `Evaluator::visit(Times&)`.' },
          { label: 'Leaves and arithmetic', text: '`visit(Num&)` yields `4` and `5`, so `Times` computes $4 \\times 5 = 20$; `Plus` computes $3 + 20 = 23$.' },
        ],
        result: 'The visitor evaluates the tree to 23 using two virtual dispatches plus compile-time overloading — zero `dynamic_cast`, zero `typeid`, and the (element, operation) pair fixed twice without a single run-time type test.',
      },
      {
        title: 'Working through double dispatch and visitors',
        problem: 'The visitor pattern with double dispatch. Your task: explain why a single virtual call cannot select an operation from the dynamic types of two objects.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: explain why a single virtual call cannot select an operation from the dynamic types of two objects. Write down the guarantee you will rely on — for this chapter it is: Single virtual dispatch chooses from one object’s dynamic type; binary operations need the pair, which is the double-dispatch problem' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `if (auto p = dynamic_cast<Derived*>(base)) { p->extra(); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — implement double dispatch: a virtual call on the first operand followed by a call on the second with `*this` statically typed — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: In `accept(Visitor& v) { v.visit(*this); }` the static type of `*this` is the concrete element class, so the second dispatch is plain overload resolution If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Single virtual dispatch chooses from one object’s dynamic type; binary operations need the pair, which is the double-dispatch problem Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Single virtual dispatch chooses from one object’s dynamic type; binary operations need the pair, which is the double-dispatch problem',
      'In `accept(Visitor& v) { v.visit(*this); }` the static type of `*this` is the concrete element class, so the second dispatch is plain overload resolution',
      'Visitors reverse the extensibility axis: new operations are one new class; new element types require editing every visitor',
    ],
    quiz: [
      {
        q: 'A virtual function call selects the code to run using',
        options: ['the static types of all arguments', 'the dynamic type of exactly one object', 'the return type of the function', 'the most-derived class of every object in scope'],
        answer: 1,
        explanation: 'The virtual mechanism consults the vtable of the object on which the call is made — one object, one dynamic type. That limitation is exactly why double dispatch needs a second mechanism.',
      },
      {
        q: 'Inside `Num::accept(Visitor& v) { v.visit(*this); }`, which overload of `visit` is selected?',
        options: ['`visit(Expr&)`, chosen at run time', '`visit(Num&)`, chosen at compile time by overload resolution', 'A `dynamic_cast` inside the runtime decides', 'Whichever overload was called most recently'],
        answer: 1,
        explanation: 'The static type of `*this` inside `Num::accept` is `Num&` — the compiler therefore resolves the call to `visit(Num&)` while compiling `Num::accept`, before the program ever runs.',
      },
      {
        q: 'Which change forces you to edit existing Visitor implementations?',
        options: ['Adding a new concrete visitor class', 'Adding a new element class to the hierarchy', 'Renaming the accept function', 'Making the destructor virtual'],
        answer: 1,
        explanation: 'A new element class needs a new `visit` overload in the Visitor interface, and every visitor must implement it; a new operation is just a new visitor class that leaves existing code untouched.',
      },
      {
        q: 'What performs the *second* dispatch in the Visitor pattern?',
        options: ['A `dynamic_cast` inside `accept`', 'A `typeid` comparison', 'Ordinary overload resolution on the statically-typed `*this`', 'A second virtual table lookup keyed by the visitor'],
        answer: 2,
        explanation: 'By the time `v.visit(*this)` is compiled, `*this` has the concrete element’s type, so the compiler’s normal overload resolution picks the pair — no run-time type information is consulted.',
      },
    ],
  },

  // ------------------------------------------------------------ 22.4
  {
    sectionId: 'cpp-ch22-s4',
    readingTime: 6,
    intro: 'What happens if a constructor calls one of its own virtual functions? The answer is a rule every C++ programmer must own: during construction and destruction, an object behaves as if it were of the class currently being constructed — virtual calls, `dynamic_cast` and `typeid` inside a constructor of `B` see a `B`, never the derived override. The rule looks like a defect until you see what it prevents: calling code that touches members that do not exist yet.',
    objectives: [
      'State the rule: during construction and destruction an object behaves as if it were of the class currently being constructed',
      'Explain the mechanism — vtable-pointer installation order — and the safety rationale that motivates it',
      'Choose the standard workarounds: passing information to the base constructor, or post-construction initialization',
    ],
    concepts: [
      {
        term: 'The construction rule',
        kind: 'law',
        statement: 'During the construction of an object of class `X`, the object **behaves as if it were exactly an `X`**: a virtual function called from `X`’s constructor (or destructor) is resolved to `X`’s version, never to an override in a class derived from `X`. Destruction follows the same rule in reverse order.',
        detail: 'The rule covers all the RTTI machinery: `typeid(*this)` inside `B::B()` is `typeid(B)`, and a `dynamic_cast` inside the constructor sees a `B` as well. The "object" is being built bottom-up through the hierarchy, and each level sees only itself.',
      },
      {
        term: 'Why the rule exists',
        kind: 'insight',
        statement: 'Each constructor installs the vtable pointer for its own class before running its body, and the derived class’s members are **not initialized until the base constructor has finished**. Calling the derived override would execute code that reads members whose initializers have not run yet — so the language simply does not do it.',
        detail: 'The sequence for `D d;` is: `B`’s vptr → `B`’s member initializers → `B`’s constructor body → `D`’s vptr → `D`’s member initializers → `D`’s constructor body. Destruction unwinds this exactly in reverse, so a virtual call from `B`’s destructor also gets `B`’s version.',
      },
      {
        term: 'Pass information up, do not ask down',
        kind: 'method',
        statement: 'The fix when a base needs data that a derived override would have computed: **give the base constructor the information as arguments**. Constructors should take what they need rather than call a virtual function on a half-built object to ask for it.',
        detail: 'The chapter’s recurring example is a shape whose constructor wants to establish its center: pass the center (or the arguments to compute it) to the base constructor explicitly. The interface documents the dependency, and the object never runs code that outruns its own construction.',
      },
      {
        term: 'Two-phase initialization',
        kind: 'method',
        statement: 'When a genuinely virtual initialization is unavoidable, **construct minimally, then initialize**: create the object, then call an (often virtual) `init()` on the fully constructed object. The pattern is common in frameworks that must create objects before configuring them.',
        detail: 'Its cost is that an object exists in a not-yet-usable state — every member function must cope with that window. Use it when constructor arguments cannot express the setup; otherwise prefer the one-phase, argument-passing style.',
      },
      {
        term: 'Construction and Destruction: the working contract',
        kind: 'definition',
        statement: '**Construction and Destruction.** Virtual functions in constructors. You can claim this section when you can state the rule: during construction and destruction an object behaves as if it were of the class currently being constructed — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 22 (Run-Time Type Information); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'What does this program print?',
        problem: 'Predict the output of a base constructor that calls a virtual function which the derived class overrides, and explain why the answer is the safe one.',
        steps: [
          { label: 'The code', text: '`struct B { B(); virtual void trace(); }; struct D : B { D() : member{7} { } void trace() override; int member; };` with `B::B() { trace(); }` and `D d;` in `main`.' },
          { label: 'Construction order', text: 'Storage is obtained; `B::B()` runs first. At this moment the vptr points at `B`’s table, and `D::member` is uninitialized memory.' },
          { label: 'The call', text: 'Inside `B::B()`, the object is a `B`: `trace()` resolves to `B::trace`, so the program prints what `B::trace` prints — not `D::trace`.' },
          { label: 'The counterfactual', text: 'Had `D::trace` been called, it would have read `member` before `member{7}` ran — garbage. The rule exists precisely to make that impossible.' },
          { label: 'After construction', text: 'Later, `d.trace()` dispatches normally and prints the derived message with `member = 7`; only *during* `B::B()` is the override invisible.' },
        ],
        result: 'The base constructor’s virtual call prints the base version. The override exists but does not participate until the derived constructor has run — the same reason `typeid(*this)` inside `B::B()` is `typeid(B)`.',
      },
      {
        title: 'Working through construction and destruction',
        problem: 'Virtual functions in constructors. Your task: state the rule: during construction and destruction an object behaves as if it were of the class currently being constructed.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: state the rule: during construction and destruction an object behaves as if it were of the class currently being constructed. Write down the guarantee you will rely on — for this chapter it is: During a constructor or destructor, an object behaves as if it were of the class currently being constructed — virtuals, `typeid` and `dynamic_cast` all see that class' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `if (auto p = dynamic_cast<Derived*>(base)) { p->extra(); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain the mechanism — vtable-pointer installation order — and the safety rationale that motivates it — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: The rule prevents derived code from touching members that have not been initialized yet If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: During a constructor or destructor, an object behaves as if it were of the class currently being constructed — virtuals, `typeid` and `dynamic_cast` all see that class Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'During a constructor or destructor, an object behaves as if it were of the class currently being constructed — virtuals, `typeid` and `dynamic_cast` all see that class',
      'The rule prevents derived code from touching members that have not been initialized yet',
      'The cure for a base that needs data is constructor arguments, or failing that, post-construction (two-phase) initialization',
    ],
    quiz: [
      {
        q: 'Inside `B::B()` a call to a virtual function `f()` that `D` overrides resolves to',
        options: ['`D::f`, as usual', '`B::f` — the object is currently a `B`', 'A compile-time error', 'Undefined behavior'],
        answer: 1,
        explanation: 'The vptr installed at this moment is `B`’s, and the object genuinely is a `B`-under-construction: the call lands in `B::f`, which is exactly what keeps derived members from being read before their initialization.',
      },
      {
        q: 'The main reason the rule exists is that',
        options: ['virtual calls are too slow in constructors', 'derived class members are not initialized while the base constructor runs', 'the vtable has not been allocated yet at all', 'constructors cannot be member functions of the same class'],
        answer: 1,
        explanation: 'A derived override would be entitled to use derived members; those members do not yet hold their values until the derived constructor’s initializers run — so the language forbids the situation rather than the crash.',
      },
      {
        q: 'A base constructor needs a value that depends on the derived class. The chapter’s preferred fix is to',
        options: ['call a pure virtual function and implement it in the derived class', 'pass the needed information as arguments to the base constructor', 'use `dynamic_cast` on `this` inside the constructor', 'declare the members `mutable`'],
        answer: 1,
        explanation: 'Taking the data as constructor arguments states the dependency in the interface and never runs code that outruns the state of construction.',
      },
      {
        q: 'What does `typeid(*this)` report inside `D`’s destructor body (with base `B`)?',
        options: ['`typeid(B)`, because destruction has reached the base', '`typeid(D)`, because the object was born a `D`', 'It throws `std::bad_typeid`', 'It is a compile-time error'],
        answer: 1,
        explanation: 'During `D`’s own destructor body the object is still (as far as the machinery is concerned) a `D`; it becomes a `B` only when `B`’s destructor begins. The type slides down the hierarchy as destruction proceeds — construction slides up through it.',
      },
    ],
  },

  // ------------------------------------------------------------ 22.5
  {
    sectionId: 'cpp-ch22-s5',
    readingTime: 7,
    intro: 'Where `dynamic_cast` asks a question about family membership, `typeid` asks for the name of the thing itself: `typeid(x)` produces a `const type_info&` describing the type of `x` — the dynamic type when `x` is a polymorphic lvalue, the static type otherwise. The section covers what `type_info` offers, how `std::type_index` turns it into a container key, and the traps that catch almost everyone once.',
    objectives: [
      'Use `typeid` on expressions and types, and predict when it reports the dynamic rather than the static type',
      'Read a `type_info`: `name()`, `==`, `before()`, `hash_code()`, and use `std::type_index` as a container key',
      'Avoid the classic `typeid` traps: applying it to the pointer instead of the object, and dereferencing a null pointer',
    ],
    concepts: [
      {
        term: 'The typeid operator',
        kind: 'definition',
        statement: '`typeid(e)` yields a reference to a `const std::type_info` describing the type of `e`. If `e` is a **polymorphic lvalue** — a reference to an object of a class with virtual functions — the description is the object’s **dynamic type**; for every other operand, including all non-polymorphic expressions and all types used directly, it is the **static type**.',
        detail: 'The operand is not evaluated unless it is a polymorphic glvalue, so `typeid(f())` with a non-polymorphic return type never calls `f` — a useful and occasionally surprising rule.',
      },
      {
        term: 'type_info',
        kind: 'definition',
        statement: 'The handle `typeid` returns: `name()` gives an **implementation-defined string** (often mangled), `==` and `!=` test exact type identity, `before()` provides an ordering for sorting, and `hash_code()` supports unordered containers. A `type_info` cannot be copied — hold it by reference or through `std::type_index`.',
        detail: 'Two `type_info`s compare equal exactly when they describe the same type — `operator==` is the identity test to use in code. Never compare `name()` strings across implementations: the spelling is not portable.',
      },
      {
        term: 'type_index',
        kind: 'notation',
        statement: '`std::type_index` (header `<type_index>`) wraps a `type_info&` with `operator<` and a hash specialization, turning types into **keys for maps and unordered maps**: `std::map<std::type_index, std::string> registry;` then `registry[typeid(*p)]` looks up data by the object’s dynamic type.',
        detail: 'This is the standard pattern for per-type tables: name-to-factory registries, per-type debug counters, and the type tags that object I/O systems write into their streams.',
      },
      {
        term: 'The traps',
        kind: 'insight',
        statement: 'Three mistakes account for nearly all `typeid` bugs: applying it to the **pointer** instead of the object (`typeid(p)` describes `Shape*`, not the shape); **dereferencing null** (`typeid(*p)` with `p == nullptr` throws `std::bad_typeid`); and forgetting that `typeid` is **exact** — a derived object does not equal its base, where `dynamic_cast` would succeed.',
        detail: 'The exactness trap interacts badly with type switches: replacing virtual dispatch with `typeid` comparisons silently drops every class derived from the one you tested for — the subject of the next section.',
      },
      {
        term: 'Type Identification: the working contract',
        kind: 'definition',
        statement: '**Type Identification.** typeid and type_info. You can claim this section when you can use `typeid` on expressions and types, and predict when it reports the dynamic rather than the static type — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 22 (Run-Time Type Information); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'A typeid trace on one Smiley',
        problem: 'Given `Shape* ps = new Smiley;` (with `Smiley : public Circle`), evaluate six `typeid` expressions and one `dynamic_cast`.',
        steps: [
          { label: 'The pointer', text: '`typeid(ps)` — describes the pointer itself: `Shape*`. No dereference, no dynamic lookup; the static type of the expression is all `typeid` sees.' },
          { label: 'The object', text: '`typeid(*ps)` — `ps` is dereferenced and the object is polymorphic, so the dynamic type is reported: `Smiley`.' },
          { label: 'Identity checks', text: '`typeid(ps) == typeid(Shape*)` is true; `typeid(*ps) == typeid(Smiley)` is true.' },
          { label: 'The exactness trap', text: '`typeid(*ps) == typeid(Circle)` is **false** — a `Smiley` is derived from `Circle`, but not equal to it. Yet `dynamic_cast<Circle*>(ps)` succeeds: membership and identity are different questions.' },
          { label: 'A registry', text: 'With `std::map<std::type_index, std::string> names;` initialized for each concrete shape, `names[typeid(*ps)]` retrieves the entry stored under the `Smiley` key — the per-type-table pattern.' },
        ],
        result: 'Three true facts, one false-by-design comparison, and one keyed lookup: `typeid` answers identity, `dynamic_cast` answers substitutability, and the Smiley row shows both in action.',
      },
      {
        title: 'Working through type identification',
        problem: 'typeid and type_info. Your task: use `typeid` on expressions and types, and predict when it reports the dynamic rather than the static type.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: use `typeid` on expressions and types, and predict when it reports the dynamic rather than the static type. Write down the guarantee you will rely on — for this chapter it is: `typeid(e)` reports the dynamic type only when `e` is a polymorphic lvalue; otherwise the static type of the expression' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `if (auto p = dynamic_cast<Derived*>(base)) { p->extra(); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — read a `type_info`: `name()`, `==`, `before()`, `hash_code()`, and use `std::type_index` as a container key — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Compare `type_info` with `==`, sort with `before()`, key maps with `std::type_index`; treat `name()` strings as unportable decoration If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `typeid(e)` reports the dynamic type only when `e` is a polymorphic lvalue; otherwise the static type of the expression Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      '`typeid(e)` reports the dynamic type only when `e` is a polymorphic lvalue; otherwise the static type of the expression',
      'Compare `type_info` with `==`, sort with `before()`, key maps with `std::type_index`; treat `name()` strings as unportable decoration',
      'Dereferencing a null pointer in `typeid(*p)` throws `std::bad_typeid` — and `typeid` is exact, so derived classes fail base comparisons',
    ],
    quiz: [
      {
        q: '`Shape* ps` points to a `Smiley` (derived from `Circle`). What is the value of `typeid(*ps) == typeid(Circle)`?',
        options: ['True, because Smiley is a Circle', 'False — the dynamic type is Smiley, and typeid is exact', 'A compile-time error', 'Undefined behavior'],
        answer: 1,
        explanation: '`typeid` tests exact identity, not substitutability: the dynamic type is `Smiley`, which is not the same type as `Circle` — even though `dynamic_cast<Circle*>(ps)` would succeed.',
      },
      {
        q: 'Which expression yields a `const type_info&` describing the object a polymorphic pointer `p` targets?',
        options: ['`typeid(p)`', '`typeid(*p)`', '`typeid(&*p)`', '`typeid(typeid(p))`'],
        answer: 1,
        explanation: 'Dereferencing produces a polymorphic lvalue, which is the one case where `typeid` consults the run-time type of the object rather than the static type of the expression.',
      },
      {
        q: 'Why does the standard library provide `std::type_index`?',
        options: ['To make `type_info` copyable', 'To provide ordering and hashing so types can be map keys', 'To demangle `name()` strings portably', 'To replace `dynamic_cast` in hierarchies'],
        answer: 1,
        explanation: '`type_info` itself has no `operator<` and cannot be stored by value; `type_index` wraps a reference to it with the ordering and hash that `std::map` and `std::unordered_map` require.',
      },
      {
        q: '`Shape* p = nullptr;` — what does `typeid(*p)` do?',
        options: ['Returns `typeid(Shape)`', 'Returns `typeid(void)`', 'Throws `std::bad_typeid`', 'Is a compile-time error'],
        answer: 2,
        explanation: 'For a polymorphic operand the implementation must consult the object; there is none, so the operation throws `std::bad_typeid` rather than fabricating a type.',
      },
    ],
  },

  // ------------------------------------------------------------ 22.6
  {
    sectionId: 'cpp-ch22-s6',
    readingTime: 6,
    intro: 'RTTI is occasionally essential and often misused, and this section is Stroustrup’s audit of which is which. The legitimate uses share one signature: an object arrives through an interface that could not possibly have anticipated what you need to do with it. The classic misuse is subtler than it looks — replacing a virtual function with a chain of exact-type tests — and it fails not stylistically but structurally, the moment someone derives a new class.',
    objectives: [
      'Recognize the legitimate uses of RTTI: object I/O, interfaces you cannot change, and operations their designers never anticipated',
      'Diagnose the classic misuse — type switches replacing virtual functions — and prove exactly how it breaks',
      'Use the interface-retrieval idiom with `dynamic_cast` when the base interface cannot be extended',
    ],
    concepts: [
      {
        term: 'Legitimate uses',
        kind: 'definition',
        statement: 'RTTI earns its keep when the type information was **genuinely lost by an interface that could not be extended**: object I/O and persistence (reconstructing the exact type from a stream), libraries whose classes you cannot modify, and operations on objects that the interface designer never anticipated.',
        detail: 'The common thread: you hold a base-class reference and need knowledge the interface does not carry — and you cannot add a virtual function to fix that. If you can change the classes, you should.',
      },
      {
        term: 'The classic misuse: the type switch',
        kind: 'insight',
        statement: 'Replacing a virtual function with exact-type tests — `if (typeid(*p) == typeid(Circle)) draw_circle(p); else if (typeid(*p) == typeid(Square)) ...` — duplicates the class hierarchy in code: every operation must enumerate every class, and every new class must edit every operation.',
        detail: 'The fatal flaw is structural, not cosmetic: `typeid` is exact, so a class derived from `Circle` matches neither branch and silently falls through, while the virtual function it replaced would have dispatched correctly. The switch also loses to the vtable on every axis — type safety, extensibility, and speed.',
      },
      {
        term: 'Interface retrieval',
        kind: 'method',
        statement: 'When you cannot modify a hierarchy but need a service its base does not offer, query the object for the interfaces it supports: `if (Interactive* i = dynamic_cast<Interactive*>(p)) i.handle_event(e);` — a loop of `dynamic_cast` tests, each one retrieving a capability the object may or may not have.',
        detail: 'This is the pattern behind component systems and interfaces like query-interface: the base stays minimal, and capabilities are discovered by checked conversion. It is legitimate precisely when the set of capabilities is open-ended and the classes are not yours to change.',
      },
      {
        term: 'The three-question diagnosis',
        kind: 'method',
        statement: 'Before writing any `dynamic_cast`, ask: (1) **Do I need an operation or a type?** An operation belongs in a virtual function. (2) **Do I need the exact type or membership in a family?** Membership is `dynamic_cast`; only true identity needs `typeid`. (3) **Could the designer have anticipated this need?** If yes — and if you own the classes — extend the interface instead.',
        detail: 'Only when all three answers come back "no reasonable alternative" is the RTTI use clean. A design where most type queries survive those questions is doing interface retrieval by necessity, not by habit.',
      },
      {
        term: 'Uses and Misuses of RTTI: the working contract',
        kind: 'definition',
        statement: '**Uses and Misuses of RTTI.** When dynamic_cast is a design smell. You can claim this section when you can recognize the legitimate uses of RTTI: object I/O, interfaces you cannot change, and operations their designers never anticipated — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 22 (Run-Time Type Information); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'Why the type switch breaks, with arithmetic',
        problem: 'A `draw(Shape*)` implemented as a `typeid` chain must handle a hierarchy of shapes including `Circle` and a new `Smiley : public Circle`. Count the edits and find the silent failure.',
        steps: [
          { label: 'The switch', text: '`if (typeid(*p) == typeid(Circle)) draw_circle(p); else if (typeid(*p) == typeid(Square)) draw_square(p); else throw std::runtime_error("bad shape");`' },
          { label: 'Feed it a Smiley', text: 'A `Smiley` IS-A `Circle` for substitution, but `typeid(*p) == typeid(Circle)` is false — the comparison is exact. And it is not a `Square` either.' },
          { label: 'The failure', text: 'The chain falls through to the final `else` and throws at run time — or, in the version without the else, draws nothing at all. No compiler diagnostic mentions it.' },
          { label: 'Count the edits', text: 'With $n = 20$ shape classes and $m = 15$ operations, the switch style costs on the order of $n \\times m = 300$ branch bodies to review; the virtual-function style costs $n + m = 35$ functions, each written once, in one place.' },
          { label: 'The virtual version', text: '`p.draw()` — a `Smiley` inherits or overrides `draw` and renders correctly with zero edits to existing code; adding a shape touches nothing downstream.' },
        ],
        result: 'The type switch is not merely inelegant — it is incorrect the day the hierarchy grows, and the failure is silent. That, not style, is why it heads the misuse list.',
      },
      {
        title: 'Working through uses and misuses of RTTI',
        problem: 'When dynamic_cast is a design smell. Your task: recognize the legitimate uses of RTTI: object I/O, interfaces you cannot change, and operations their designers never anticipated.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: recognize the legitimate uses of RTTI: object I/O, interfaces you cannot change, and operations their designers never anticipated. Write down the guarantee you will rely on — for this chapter it is: Legitimate RTTI shares one signature: the type was lost through an interface that could not be extended — object I/O, foreign libraries, unanticipated operations' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `if (auto p = dynamic_cast<Derived*>(base)) { p->extra(); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — diagnose the classic misuse — type switches replacing virtual functions — and prove exactly how it breaks — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Type switches duplicate the hierarchy in code and break silently on derived classes, because `typeid` is exact If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Legitimate RTTI shares one signature: the type was lost through an interface that could not be extended — object I/O, foreign libraries, unanticipated operations Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Legitimate RTTI shares one signature: the type was lost through an interface that could not be extended — object I/O, foreign libraries, unanticipated operations',
      'Type switches duplicate the hierarchy in code and break silently on derived classes, because `typeid` is exact',
      'Interface retrieval — a loop of `dynamic_cast` capability probes — is the honest pattern when the classes are not yours to change',
    ],
    quiz: [
      {
        q: 'A new class `Smiley : public Circle` arrives. Which existing test still recognizes a Smiley object pointed to by `Shape* p`?',
        options: ['`typeid(*p) == typeid(Circle)`', '`dynamic_cast<Circle*>(p) != nullptr`', '`typeid(p) == typeid(Circle*)`', 'None — both must be edited'],
        answer: 1,
        explanation: '`dynamic_cast` asks about family membership and succeeds for derived classes; `typeid` demands exact identity and fails for `Smiley` — which is precisely how the type switch rots.',
      },
      {
        q: 'When is the interface-retrieval idiom (a loop of `dynamic_cast` probes) justified?',
        options: ['Whenever it saves writing a virtual function', 'When you cannot modify the base classes but need capabilities they do not expose', 'When performance is critical', 'When the hierarchy has exactly two levels'],
        answer: 1,
        explanation: 'The pattern exists for hierarchies you do not own: the base interface stays minimal, and callers discover capabilities by checked conversion. If you own the classes, adding the virtual function is the better design.',
      },
      {
        q: 'The root problem with replacing virtual dispatch by a `typeid` chain is that',
        options: ['`typeid` is slower than a virtual call', 'it duplicates the hierarchy in code and silently mishandles newly derived classes', '`type_info` cannot be compared', 'the chain cannot be compiled'],
        answer: 1,
        explanation: 'Every operation must enumerate every class — the hierarchy is maintained twice — and because comparisons are exact, a newly derived class falls through the tests with no diagnostic.',
      },
    ],
  },

  // ------------------------------------------------------------ 22.7
  {
    sectionId: 'cpp-ch22-s7',
    readingTime: 4,
    intro: 'The chapter closes with its rules of thumb. They compress the whole argument: virtual functions first, the weakest RTTI question that answers the need, no virtual calls from constructors expecting derived behavior, and type queries isolated in a few well-documented places where their cost and fragility are visible.',
    objectives: [
      'Apply the chapter’s rules of thumb to choose among virtual functions, `dynamic_cast` and `typeid`',
      'Justify each rule by the concrete failure mode it prevents',
      'Recognize the restricted niche where RTTI is the correct engineering choice',
    ],
    concepts: [
      {
        term: 'Prefer virtual functions to RTTI',
        kind: 'law',
        statement: 'When the same action applies to every object of a class, **use a virtual function** — dynamic dispatch is type-safe, extensible to derived classes, and as fast as the mechanism allows. Reach for RTTI only when the type itself, not a behavior, is what you need.',
        detail: 'The rule follows from the misuse analysis: a type query hard-codes the set of classes, while a virtual function lets the set grow. Design effort spent moving work from type tests into the interface is repaid every time the hierarchy changes.',
      },
      {
        term: 'Prefer dynamic_cast to typeid',
        kind: 'method',
        statement: 'When you must ask a type question, ask the **weaker** one: `dynamic_cast` asks membership in a family and keeps working for derived classes; `typeid` demands exact identity and breaks the moment someone derives.',
        detail: 'Escalate to `typeid` only for genuine identity questions — registries keyed by exact type, debugging output, and the type tags of object I/O — where "derived from" would be the wrong answer.',
      },
      {
        term: 'Never call a virtual from a constructor expecting the derived version',
        kind: 'law',
        statement: 'During construction and destruction the object is of the class currently being built or destroyed — a virtual call from a constructor gets the local version, not the override. Pass needed information as constructor arguments instead.',
        detail: 'This rule closes the one gap that looks like RTTI but is really construction order: even `typeid` and `dynamic_cast` inside a constructor see the class under construction.',
      },
      {
        term: 'Isolate RTTI',
        kind: 'method',
        statement: 'Confine type queries to **a few well-documented functions** — the object I/O layer, the interface-retrieval helpers — so the rest of the system stays ignorant of type questions and their fragility.',
        detail: 'A design with `dynamic_cast` scattered through its logic is a design where every new class must be checked against every cast site; isolation makes that cost visible and local, and keeps the type switches honest by putting them where they belong.',
      },
      {
        term: 'Shipping rule for run-time type information',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **Virtual functions first; RTTI only when the type itself — not a behavior — is the information needed** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
    ],
    examples: [
      {
        title: 'A design review in three questions',
        problem: 'An editor over the shape hierarchy has three new requirements. Apply the diagnosis questions to pick the right mechanism for each.',
        steps: [
          { label: 'Requirement A', text: '"Draw every shape": an operation, uniform across classes we own — question 1 says virtual function. `draw()` already exists; nothing to add.' },
          { label: 'Requirement B', text: '"Select only the circles for the circle-tool": a capability probe over a hierarchy we own but a service `Shape` should not carry — `dynamic_cast<Circle*>(p)` in the selection filter, and derived circle-like classes still qualify.' },
          { label: 'Requirement C', text: '"Log the exact class name of each shape as it is destroyed": true identity for debugging — `typeid(*p)` fed to a `std::map<std::type_index, int>` counter in the destructor of the logging wrapper.' },
          { label: 'The audit', text: 'No `typeid` switches dispatching behavior; the one `dynamic_cast` lives in a single filter function; the `type_index` table is part of the logging subsystem and documented as such.' },
        ],
        result: 'Three requirements, three different mechanisms, chosen by the questions — operation versus type, family versus identity, anticipated versus not.',
      },
      {
        title: 'Reviewing run-time type information code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the chapter’s rules of thumb to choose among virtual functions, `dynamic_cast` and `typeid`.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Virtual functions first; RTTI only when the type itself — not a behavior — is the information needed' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `if (auto p = dynamic_cast<Derived*>(base)) { p->extra(); }`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: justify each rule by the concrete failure mode it prevents. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: Ask the weaker question: `dynamic_cast` for family membership, `typeid` only for exact identity' },
        ],
        result: 'The review ends with findings tied to reasons: Virtual functions first; RTTI only when the type itself — not a behavior — is the information needed Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      'Virtual functions first; RTTI only when the type itself — not a behavior — is the information needed',
      'Ask the weaker question: `dynamic_cast` for family membership, `typeid` only for exact identity',
      'Isolate type queries in a few documented functions, and never expect derived behavior from virtuals in constructors',
    ],
    quiz: [
      {
        q: 'A new operation must apply uniformly to every shape in a library you own. The first choice is',
        options: ['a virtual function', 'a `dynamic_cast` chain', 'a `typeid` switch', 'a `reinterpret_cast`'],
        answer: 0,
        explanation: 'An operation over classes you control belongs in the interface: virtual dispatch stays correct as classes are added and derived, which no type test achieves.',
      },
      {
        q: 'A filter must pick out every Circle, including classes derived from Circle. The best tool is',
        options: ['`typeid(*p) == typeid(Circle)`', '`dynamic_cast<Circle*>(p)`', 'comparing `type_info::name()` strings', 'a C-style cast followed by a check'],
        answer: 1,
        explanation: 'Membership in a family is exactly the `dynamic_cast` question; the exact-type comparison would silently drop derived classes.',
      },
      {
        q: 'Which rule protects you from the constructor trap of §22.4?',
        options: ['Never use RTTI in constructors', 'Pass needed information as constructor arguments instead of calling virtuals', 'Always declare constructors `explicit`', 'Make all virtual functions pure'],
        answer: 1,
        explanation: 'The object during base construction is the base class; any derived-dependent service is unavailable — so supply the data through the constructor interface, or initialize after construction.',
      },
    ],
  },
]

import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 19: Special Operators — sections 19.1–19.5 (TC++PL pp. 549–576)
// Master study content.
// ============================================================================

export const cppCh19Content: SectionContent[] = [
  // ------------------------------------------------------------------ 19.1
  {
    sectionId: "cpp-ch19-s1",
    readingTime: 5,
    intro: "Operator overloading lets a user-defined type meet the built-in types on their own grammar: `m[i]`, `p->m`, `++it` read naturally only if the class supplies the operators behind them. This chapter gathers the operators that need special care — subscripting, dereferencing, increment and decrement, the call operator — and then assembles all of them in one place: a small but complete `String` class, together with the friend mechanism that grants carefully chosen nonmembers access to the representation.",
    objectives: [
      "State which operators cannot be overloaded at all and which must be non-static member functions",
      "Apply the chapter's design rule: a user-defined operator should mirror the semantics of the built-in type",
      "Set up the String case study by listing what a resource-owning class must define to behave like a built-in type",
    ],
    concepts: [
      {
        term: "What overloading can never change",
        kind: "law",
        statement: "**Precedence, grouping and arity are fixed for every type.** However `operator+` is defined for a Matrix, `a*b+c` still groups as `(a*b)+c`, a unary `+` still takes exactly one operand, and the programmer may not invent new operator tokens — the set of operators is closed.",
        detail: "The only freedom left is what an operator does with its operands, which is why the chapter insists that meaning be chosen well.",
      },
      {
        term: "Operators that must be members",
        kind: "definition",
        statement: "`operator=` (assignment), `operator[]` (subscripting), `operator()` (function call), `operator->` (dereferencing) and conversion operators must be non-static member functions of the class of their first operand. All other operators may be defined as nonmember functions.",
        detail: "Members get the right operands by construction: `a[i]` invokes a member of `a`, and the updating operators (`=`, `+=`, `++`) mutate their left operand.",
      },
      {
        term: "As close to a built-in as possible",
        kind: "insight",
        statement: "The goal for these operators is a user-defined type that behaves **as close to a built-in type as its semantics allow and as users expect**: a `String` should support subscripting, concatenation and comparison the way the library `string` does, so a user needs to know only what the operators mean for the type — never how they are spelled.",
        detail: "The flip side is the chapter's discipline: an operator whose meaning users cannot guess from the notation is a design bug, however clever the implementation.",
      },
      {
        term: "Operators with no user-defined meaning",
        kind: "definition",
        statement: "The operators `::` (scope resolution), `.` (member selection), `.*` (member selection through pointer-to-member) and `?:` (conditional expression) cannot be overloaded — nor can `sizeof`, `typeid` or the named casts.",
        detail: "They are protected because language machinery depends on them: `.` and `::` govern name lookup itself, and `?:` carries sequencing guarantees an overload could not honor.",
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Special operators. You can claim this section when you can state which operators cannot be overloaded at all and which must be non-static member functions — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 19 (Special Operators); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Why symmetric binary operators are nonmembers",
        problem: "A complex type can be constructed from an int. Show why `operator+` for complex must be a free function if both `z+2` and `2+z` are to work.",
        steps: [
          { label: "Member version", text: "As a member `complex complex::operator+(const complex&)`, the expression `z+2` compiles: the right operand converts to complex by the constructor. But `2+z` fails — the left operand 2 is an int, and member operators are looked up only in the left operand's class; the implicit conversion is never applied to a left operand." },
          { label: "Nonmember version", text: "With `complex operator+(const complex& a, const complex& b)` both operands are on equal footing: in `2+z` the int converts to complex(2) first, then the operator runs. Both orders compile and both mean exact complex addition." },
          { label: "General rule", text: "Symmetric binary operators (arithmetic, equality, streaming) become nonmembers so that either operand can convert; mutating and asymmetric ones (`+=`, `=`, `[]`, `->`) stay members." },
        ],
        result: "`z+2` and `2+z` both work and both call the same function — exactly the built-in behavior the chapter asks you to preserve.",
      },
      {
        title: "Working through introduction",
        problem: "Special operators. Your task: state which operators cannot be overloaded at all and which must be non-static member functions.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: state which operators cannot be overloaded at all and which must be non-static member functions. Write down the guarantee you will rely on — for this chapter it is: Overloading changes what an operator computes, never its precedence, grouping or operand count" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `Widget* p = new Widget; delete p;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — apply the chapter's design rule: a user-defined operator should mirror the semantics of the built-in type — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `=`, `[]`, `()` and `->` must be non-static member functions; symmetric binary operators are best as free functions If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Overloading changes what an operator computes, never its precedence, grouping or operand count Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Overloading changes what an operator computes, never its precedence, grouping or operand count",
      "`=`, `[]`, `()` and `->` must be non-static member functions; symmetric binary operators are best as free functions",
      "The design goal is a class that behaves predictably like a built-in type — an operator whose meaning must be explained should not exist",
    ],
    quiz: [
      {
        q: "You overload `operator+` for a Matrix class. Which of these can you not change?",
        options: ["The algorithm that computes the sum", "The precedence of + relative to *", "The operand types + accepts", "Whether + is a member or a free function"],
        answer: 1,
        explanation: "Precedence and grouping belong to the grammar of expressions, not to the meaning of an operator; the implementation, the operand types and member-ness are all in the programmer's hands.",
      },
      {
        q: "Which operator must be defined as a non-static member function?",
        options: ["`operator+`", "`operator<<`", "`operator==`", "`operator[]`"],
        answer: 3,
        explanation: "Subscripting, assignment, function call and dereferencing with `->` are reserved to member functions; the others may be nonmembers.",
      },
      {
        q: "Which of these operators can never be overloaded?",
        options: ["`->`", "`[]`", "`.*`", "`()`"],
        answer: 2,
        explanation: "Member selection through a pointer to member, like `.` and `::`, is not overloadable — unlike `->`, which smart pointers define routinely.",
      },
      {
        q: "According to the chapter's rule, `operator+` for a Money class should",
        options: ["subtract, to keep Money cheap to implement", "add, mirroring what + means for built-in types", "be defined only if Money also overloads *", "return its left operand unchanged"],
        answer: 1,
        explanation: "Operators should be defined only when their meaning is obvious — and the obvious meaning is the built-in one. Anything else defeats the purpose of the notation.",
      },
    ],
  },

  // ------------------------------------------------------------------ 19.2
  {
    sectionId: "cpp-ch19-s2",
    readingTime: 7,
    intro: "Subscripting, dereferencing and increment each carry a contract inherited from the built-in types, and each has a canonical implementation shape. The book's examples make the shapes concrete: an `Assoc` class whose `operator[]` returns a reference so that `++price[buf]` updates the table, smart pointers whose `operator->` is applied recursively until it reaches a real pointer, and prefix/postfix `++` distinguished by a dummy int parameter.",
    objectives: [
      "Implement operator[] that supports both reading and writing, as the book's Assoc does",
      "Implement the dereference pair operator* / operator-> for smart-pointer and iterator classes",
      "Distinguish prefix from postfix operator++ and explain why &&, || and the comma operator must not be overloaded",
    ],
    concepts: [
      {
        term: "Subscripting",
        kind: "definition",
        statement: "`operator[]` must be a member and, for containers, returns a **reference to the element**: the book's `double& Assoc::operator[](const string&)` walks a vector of `(name, value)` pairs and, for a missing key, appends a `Pair{s,0}` and returns a reference to the new element — so `++price[buf]` both creates and counts.",
        detail: "Returning the value instead of a reference would make `++price[buf]` increment a temporary and silently leave the table unchanged.",
      },
      {
        term: "Dereferencing",
        kind: "definition",
        statement: "`operator->` must be a member; the expression `p->m` is interpreted as `(p.operator->())->m`, and the compiler applies `operator->` **recursively** until the result is an ordinary pointer, on which the built-in member access finally runs. Smart pointers pair it with `operator*`: `*p` yields the object, `p->m` reaches its members.",
        detail: "That recursion is what lets chains such as `p->next->val` work when every link is a smart pointer.",
      },
      {
        term: "Increment and decrement",
        kind: "method",
        statement: "Prefix `operator++()` updates the object and returns a reference to the updated object. Postfix `operator++(int)` takes a **dummy int**, saves the old value, updates, and returns the saved copy by value. The int argument is never used — it exists only to give the two forms distinct signatures.",
        detail: "The contract: `p++` and `++p` leave the object in the same state and differ only in the value they deliver — increment operators must increment, just as + must add.",
      },
      {
        term: "Multi-argument subscripting",
        kind: "method",
        statement: "`operator[]` accepts at most one operand, so a multi-dimensional Matrix uses the **call operator**: `m(i, j)` selects row i, column j. The same `operator()` is what turns ordinary objects into function objects.",
        detail: "Alternatively `m[i]` can return a proxy row object with its own `operator[]` — at the cost of an extra class.",
      },
      {
        term: "Why &&, || and comma stay unoverloaded",
        kind: "theorem",
        statement: "The built-in `&&` and `||` evaluate the left operand first and skip the right when the result is settled; the built-in comma operator guarantees left-to-right sequencing. A user-defined version loses all three: both operands are always evaluated, in unspecified order.",
        detail: "The book's verdict is blunt: do not overload `&&`, `||` or the comma operator — the notation lies about what it does.",
      },
    ],
    figures: [
      {
        caption: "Figure — The recursive meaning of the overloaded arrow: `p->m` is `(p.operator->())->m`, and the compiler keeps applying user-defined `operator->` until it reaches an ordinary pointer, where built-in member access takes over.",
        svg: `<svg viewBox="0 0 760 220" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of the recursive application of the overloaded arrow operator"><text x="30" y="26" font-family="ui-sans-serif, system-ui" font-size="13.5" font-weight="600" fill="currentColor">p->m means (p.operator->())->m — repeated until an ordinary pointer is reached</text><rect x="30" y="66" width="150" height="42" rx="7" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="105" y="92" font-family="monospace" font-size="16" fill="currentColor" text-anchor="middle">p</text><line x1="180" y1="87" x2="292" y2="87" stroke="currentColor" stroke-width="1.6"/><polygon points="305,87 292,82 292,92" fill="currentColor"/><text x="243" y="78" font-family="monospace" font-size="11.5" fill="currentColor" text-anchor="middle">p.operator->()</text><rect x="305" y="66" width="150" height="42" rx="7" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="380" y="92" font-family="monospace" font-size="16" fill="currentColor" text-anchor="middle">q</text><line x1="455" y1="87" x2="567" y2="87" stroke="currentColor" stroke-width="1.6"/><polygon points="580,87 567,82 567,92" fill="currentColor"/><text x="511" y="78" font-family="monospace" font-size="11.5" fill="currentColor" text-anchor="middle">q.operator->()</text><rect x="580" y="66" width="150" height="42" rx="7" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="655" y="92" font-family="monospace" font-size="15" fill="currentColor" text-anchor="middle">r</text><text x="640" y="60" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.7">ordinary T*</text><line x1="655" y1="108" x2="655" y2="146" stroke="currentColor" stroke-width="1.6"/><polygon points="655,158 649,146 661,146" fill="currentColor"/><text x="655" y="176" font-family="monospace" font-size="15" fill="currentColor" text-anchor="middle">m</text><text x="30" y="152" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">each arrow above is one user-defined operator->;</text><text x="30" y="170" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">the chain must bottom out at an ordinary pointer,</text><text x="30" y="188" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">where the built-in -> finally fetches the member m.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Word frequencies with Assoc",
        problem: "Count the occurrences of each word in the input `the cat sat on the mat the end` using the book's associative-array class, `class Assoc { struct Pair { string name; double val; }; vector<Pair> vec; public: double& operator[](const string&); };`",
        steps: [
          { label: "Step 1: The lookup", text: "`operator[]` scans vec for the name; on a hit it returns a reference to that Pair's val, on a miss it appends `Pair{s,0}` and returns a reference to the new element's val — the value 0 is the default the caller then updates." },
          { label: "Step 2: The driver", text: "`while (cin >> buf) ++price[buf];` — eight words are read; the first `the` is not found, a Pair with val 0 is appended, and the ++ makes it 1." },
          { label: "Step 3: The tally", text: "Distinct names after the run: the, cat, sat, on, mat, end — six entries. Counts: the appears 3 times; each of the other five appears once. Check: 3 + 5 = 8 words read." },
          { label: "Step 4: The cost", text: "Each lookup is a linear scan of vec: the run does $\\Theta(n)$ work per word for n distinct names. The standard-library `map` keeps the same interface with $O(\\log n)$ lookups — the book's point is that the operator makes both feel identical to use." },
        ],
        result: "Six pairs stored; `the` maps to 3, every other name to 1; the sum of all values equals the word count, 8. `operator[]` returning `double&` is what makes the one-line driver work.",
      },
      {
        title: "Reading *it++ — prefix and postfix traced",
        problem: "An iterator over `int a[] = {10, 20, 30};` provides prefix and postfix `operator++`. Trace `auto v = *it++;` followed by `++*it;` and `++it;`.",
        steps: [
          { label: "Step 1: Postfix binds tighter", text: "`*it++` parses as `*(it++)`. Postfix `it++` saves the old iterator, advances it to a[1], and returns the saved copy by value — the dereference reads the OLD position: v == 10." },
          { label: "Step 2: Prefix on the element", text: "`++*it` parses as `++(*it)`: it now points at a[1] (20), so the element itself is incremented — a[1] becomes 21." },
          { label: "Step 3: Prefix on the iterator", text: "`++it` advances to a[2] and returns a reference to the iterator itself (no copy is made); a subsequent `*it` reads 30." },
        ],
        result: "v == 10; the array now reads {10, 21, 30} and the iterator sits on a[2]. Postfix returns the old value by value; prefix returns `*this` by reference — that is the entire difference between the two forms.",
      },
    ],
    keyTakeaways: [
      "An `operator[]` that must support writing returns a reference to the stored element, never a copy",
      "`p->m` means `(p.operator->())->m`, applied recursively until an ordinary pointer appears",
      "Prefix ++ returns the updated object by reference; postfix ++ takes a dummy int and returns the old value by value; `&&`, `||` and comma must not be overloaded at all",
    ],
    quiz: [
      {
        q: "`double& operator[](const string& s)` is called with a word not yet in the table. What does `++price[buf]` do?",
        options: ["It throws, because the key does not exist", "A new Pair {s, 0} is appended and the ++ makes its val 1", "The program has undefined behavior", "The vector is cleared and the word becomes the only entry"],
        answer: 1,
        explanation: "The miss branch appends a zero-valued pair and returns a reference to it; the ++ then operates on that reference, so the count becomes 1 — exactly how the word-frequency driver works.",
      },
      {
        q: "`p` is an object of a smart-pointer class whose `operator->` returns a raw `T*`. What does `p->draw()` mean?",
        options: ["`p.draw()`", "`(p.operator->())->draw()`", "An error: -> cannot be overloaded", "`draw(p.operator->())`"],
        answer: 1,
        explanation: "The overload of -> yields a pointer (or another class object); the compiler keeps applying operator-> until it reaches an ordinary pointer, then uses built-in member access.",
      },
      {
        q: "How does the compiler distinguish a postfix `operator++` declaration from a prefix one?",
        options: ["By the return type: postfix returns by value", "Postfix takes a dummy int parameter that is never used", "Postfix must be a nonmember function", "Postfix is declared with two pluses: `operator++++`"],
        answer: 1,
        explanation: "The int argument exists purely to give the two forms different signatures; inside, postfix saves the old value, updates, and returns the saved copy.",
      },
      {
        q: "Why does the book forbid overloading `&&`, `||` and the comma operator?",
        options: ["They must be members, and members cannot be binary", "User versions lose short-circuit evaluation and the guaranteed sequencing of built-in use", "They are reserved for operands of type bool only", "The standard library already overloads them"],
        answer: 0,
        explanation: "The built-in operators evaluate the left operand first and may skip the right; an overload becomes a normal function call — both operands evaluated, in unspecified order — so the notation promises what the code does not deliver.",
      },
      // PYQ-pattern — prefix versus postfix increment semantics (rephrased)
      {
        q: "Which statement about iterator stepping is correct?\n```cpp\nauto it = v.begin();\nauto p = it++;\nauto q = ++it;\n```",
        options: ["Both `p` and `q` hold the advanced iterator", "`p` holds the original position while `q` holds the advanced one, and postfix typically costs an extra copy", "`p` holds the advanced position while `q` holds the original", "Both expressions are undefined when applied to iterators"],
        answer: 1,
        explanation: "Step 1: The data given is one postfix and one prefix increment on the same iterator sequence. Step 2: The governing rules are the canonical signatures: prefix returns the advanced iterator by reference, while postfix returns the original value by value, which forces a spare copy. Step 3: Tracing statement by statement, `p` snapshots the starting position as `it` advances once, then `++it` advances again with `q` observing the twice-advanced position. Step 4: The distractors fail because the two forms deliberately return different positions, and both are well-defined operations on iterators. Step 5: Therefore postfix preserves the old position at a copying cost while prefix yields the new one."
      }
    ],
  },

  // ------------------------------------------------------------------ 19.3
  {
    sectionId: "cpp-ch19-s3",
    readingTime: 8,
    intro: "Everything the chapter has taught comes together in a small class that behaves the way a string should. The book's `String` is a deliberately simplified `std::string`: two data members — a pointer and a size — one invariant, all five special member functions, subscripting, concatenation and stream output. Each member is a few lines; together they are a complete review of what a class that owns memory must do, and a checklist for the rule of five.",
    objectives: [
      "State and use the String invariant: ptr points to an array of sz+1 characters whose last is the terminator",
      "Write all five special member functions for a pointer-owning class (the rule of five)",
      "Build free operator+ on top of member operator+=, and contrast checked access with unchecked subscripting",
    ],
    concepts: [
      {
        term: "The String invariant",
        kind: "definition",
        statement: "**If `ptr` is not nullptr, it points to an array of `sz+1` characters and `ptr[sz] == 0`.** An empty String has `sz == 0` and `ptr == nullptr`. Every member preserves the invariant — and the trailing terminator is what makes `c_str()` and stream output trivial.",
        detail: "The data members are `char* ptr; int sz;` — 16 bytes on a typical 64-bit ABI (8 for the pointer, 4 for the size, 4 of padding).",
      },
      {
        term: "The rule of five",
        kind: "law",
        statement: "A class that owns a resource must define, or deliberately delete, **destructor, copy constructor, copy assignment, move constructor and move assignment**. The compiler's defaults would copy the pointer member by member — two Strings would then own one array and both destructors would `delete[]` it.",
        detail: "The book's version of the rule: if a class has a pointer member, it usually needs these five operations — or it should hold a `string`/`vector` instead and need none of them.",
      },
      {
        term: "A move steals the representation",
        kind: "method",
        statement: "The move constructor copies `ptr` and `sz` into the new object, then zeroes the source (`a.ptr = nullptr; a.sz = 0;`) — $O(1)$, no allocation, and the source is left in a state safe to destroy and to assign to. The copy constructor instead allocates a fresh array and `memcpy`s all `sz+1` bytes — $O(sz)$.",
        detail: "Moves are what let a function return a String by value without copying the characters: the return value is constructed by stealing.",
      },
      {
        term: "Unchecked and checked access",
        kind: "method",
        statement: "`char& operator[](int n)` is unchecked — C++ does not range-check built-in arrays either, and the book keeps the same zero-cost rule for String. The checked alternative, `at(n)`, throws `out_of_range` for a bad index; the standard `string` offers exactly this pair.",
        detail: "The C++ philosophy in one contrast: the safe version exists, but you say so — you don't pay for the check unless you ask for it.",
      },
      {
        term: "operator+ built on operator+=",
        kind: "method",
        statement: "The member `String& operator+=(const String&)` does the growing in place — new array, copy, append, delete old. The free function `String operator+(const String& a, const String& b)` then has a two-line body: copy `a`, `+=` `b`, return — and the copy out is a move, not another allocation.",
        detail: "The member mutates; the nonmember makes a fresh object. That division of labor keeps every concatenation expression working with a single grown buffer.",
      },
    ],
    figures: [
      {
        caption: "Figure — Layout of `String s{“Stroustrup”}`: a two-word object owns a heap array of `sz+1` characters. The invariant is `ptr[sz] == 0`; copying duplicates the array, moving only re-points it.",
        svg: `<svg viewBox="0 0 760 330" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Memory layout of the String class: a two-word object owning a heap array of eleven characters"><text x="30" y="28" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="600" fill="currentColor">the object (e.g. a stack frame)</text><text x="330" y="28" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="600" fill="currentColor">the characters (heap)</text><rect x="30" y="42" width="215" height="92" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="30" y="42" width="215" height="44" fill="currentColor" opacity="0.07"/><text x="42" y="69" font-family="monospace" font-size="14" fill="currentColor">ptr</text><circle cx="233" cy="64" r="4" fill="currentColor"/><text x="42" y="119" font-family="monospace" font-size="14" fill="currentColor">sz = 10</text><line x1="237" y1="64" x2="317" y2="64" stroke="currentColor" stroke-width="1.6"/><polygon points="330,64 317,59 317,69" fill="currentColor"/><g stroke="currentColor" stroke-width="1.3"><rect x="330" y="42" width="32" height="44" fill="none"/><rect x="362" y="42" width="32" height="44" fill="none"/><rect x="394" y="42" width="32" height="44" fill="none"/><rect x="426" y="42" width="32" height="44" fill="none"/><rect x="458" y="42" width="32" height="44" fill="none"/><rect x="490" y="42" width="32" height="44" fill="none"/><rect x="522" y="42" width="32" height="44" fill="none"/><rect x="554" y="42" width="32" height="44" fill="none"/><rect x="586" y="42" width="32" height="44" fill="none"/><rect x="618" y="42" width="32" height="44" fill="none"/><rect x="650" y="42" width="32" height="44" fill="currentColor" opacity="0.12"/></g><g font-family="monospace" font-size="15" fill="currentColor" text-anchor="middle"><text x="346" y="69">S</text><text x="378" y="69">t</text><text x="410" y="69">r</text><text x="442" y="69">o</text><text x="474" y="69">u</text><text x="506" y="69">s</text><text x="538" y="69">t</text><text x="570" y="69">r</text><text x="602" y="69">u</text><text x="634" y="69">p</text><text x="666" y="69" font-size="12">\\0</text></g><text x="330" y="108" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">new char[sz+1] — eleven bytes: ten characters plus the terminator</text><text x="330" y="126" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.8">the invariant: ptr[sz] == 0</text><text x="30" y="160" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">sizeof(String) == 16 on a typical 64-bit ABI: 8 (ptr) + 4 (sz) + 4 padding</text><text x="30" y="196" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor"><tspan font-weight="600">copy</tspan>  — String t = s: a second eleven-byte array and a memcpy of 11 bytes</text><text x="30" y="218" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor"><tspan font-weight="600">move</tspan>  — String u = move(s): copy ptr and sz, set s.ptr = nullptr; zero heap traffic</text><text x="30" y="240" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor"><tspan font-weight="600">destroy</tspan>  — ~String: delete[] ptr, once, for each array ever allocated</text><text x="380" y="296" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.75">the destructor is delete[] — the array was allocated with new[], never plain new</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Four constructions, counted",
        problem: "Trace every heap allocation in `String s{“Stroustrup”}; String t{s}; String u{std::move(s)}; String w = t + \"!\";`",
        steps: [
          { label: "Step 1: From a C string", text: "`strlen` finds 10 characters, so `new char[11]` and `memcpy` of 11 bytes — ten letters plus the terminator — give s its invariant." },
          { label: "Step 2: Copy", text: "`String t{s}` allocates its own 11 bytes and copies them: two independent objects, two arrays — destroying either one leaves the other intact." },
          { label: "Step 3: Move", text: "`String u{std::move(s)}` allocates nothing: it copies the pointer and size (12 bytes on the stack) and sets `s.ptr = nullptr`, `s.sz = 0`. The source is safe to destroy and safe to assign to; it just has no characters." },
          { label: "Step 4: Concatenation", text: "`t + \"!\"` first materializes the right operand as a 2-byte array, then operator+ copies t (11 bytes), and `+=` grows it to `new char[12]`, copying 10 letters, then writes '!' and the terminator: \"Stroustrup!\" with sz == 11." },
        ],
        result: "Exactly four allocations, totaling 11 + 11 + 2 + 12 = 36 bytes, and four `delete[]` calls at scope exit — one per array, no leaks and no double deletes.",
      },
      {
        title: "Why copy assignment allocates before it deletes",
        problem: "The naive assignment body `delete[] ptr; ptr = new char[a.sz+1]; memcpy(...)` has two failure modes. Repair it.",
        steps: [
          { label: "Failure 1: self-assignment", text: "`s = s` runs `delete[] ptr` first, then memcpy reads from the freed array — undefined behavior caused by the object's own valid expression." },
          { label: "Failure 2: exception safety", text: "If `new char[a.sz+1]` throws after the delete, s is left with a dangling ptr and the invariant is destroyed with no way to repair it." },
          { label: "The fix", text: "Check, then allocate-and-copy before releasing: `if (this != &a) { char* p = new char[a.sz+1]; memcpy(p, a.ptr, a.sz+1); delete[] ptr; ptr = p; sz = a.sz; }` — on any throw, s is untouched; on success, every intermediate state is a valid String." },
        ],
        result: "The order check, allocate, copy, delete, rewire leaves the object never-half-assigned — the same discipline the standard-library strings implement.",
      },
    ],
    keyTakeaways: [
      "The invariant `ptr[sz] == 0` (with an 11th byte) is what every String member buys and maintains",
      "A pointer member drags in the rule of five: destructor, copy and move constructors, copy and move assignment — all five appear in this one class",
      "`+=` is the member that grows; the free `+` copies its left operand, appends, and returns by value — which is then moved",
    ],
    quiz: [
      {
        q: "For a String with sz == 10, what does the invariant say about `ptr[10]`?",
        options: ["It is uninitialized padding", "It holds the terminating 0 — the array was allocated with 11 cells", "It holds a pointer to the next String", "Reading it is undefined behavior"],
        answer: 1,
        explanation: "The constructor allocates `sz+1` characters and copies the terminator, so `ptr[sz] == 0` always holds for a non-empty String — c_str() and operator<< depend on it.",
      },
      {
        q: "`String u{std::move(s)}` just completed. What is true of s?",
        options: ["s is unusable until reassigned and must not be destroyed", "s.ptr == nullptr and s.sz == 0 — safe to destroy, safe to assign to", "s is a copy of u sharing its array", "The program is undefined"],
        answer: 1,
        explanation: "The move constructor steals the representation and zeroes the source, leaving the moved-from object in a valid empty state.",
      },
      {
        q: "Why is `operator+` for String a free function while `operator+=` is a member?",
        options: ["The language forbids member operator+", "So + can be built as a copy-and-append, while += mutates its left operand *this", "Because + must be a friend of std::string", "So that + can return void"],
        answer: 1,
        explanation: "`+=` updates the object it is applied to — a member's job; `+` produces a fresh value from operands on equal footing, which is the nonmember pattern for symmetric operators.",
      },
      {
        q: "The compiler-generated copy constructor for String would",
        options: ["refuse to compile, forcing you to write one", "copy ptr member by member — two Strings owning one array, and a double delete at scope exit", "deep-copy the characters automatically", "call the move constructor instead"],
        answer: 3,
        explanation: "Copying a raw pointer copies the address, not the array: both objects' destructors would `delete[]` the same memory — exactly why the rule of five exists.",
      },
    ],
  },

  // ------------------------------------------------------------------ 19.4
  {
    sectionId: "cpp-ch19-s4",
    readingTime: 6,
    intro: "Encapsulation is not a sealed vault: a class can name trusted collaborators. A friend declaration grants a specific function — or every member of a specific class — access to private members, and only the granting class can issue the invitation. Friends are how `operator<<` reaches String's `ptr` and `sz`, and how a Matrix-times-Vector product can touch two representations while belonging to neither class.",
    objectives: [
      "Declare friend functions and friend classes, and explain what friendship does and does not grant",
      "Implement operator<< for String as a friend",
      "State the three negative properties of friendship — not transitive, not inherited, not reciprocal",
    ],
    concepts: [
      {
        term: "The friend declaration",
        kind: "definition",
        statement: "A declaration inside the class body — `friend ostream& operator<<(ostream&, const String&);` — makes that specific nonmember function a **friend**: it may use the class's private members. A friend is not a member: there is no `this`, and the granting does not make the friend visible to users of the class — it must be declared like any other function.",
        detail: "A friend declaration may itself be a definition, but such inline definitions are found only through argument-dependent lookup.",
      },
      {
        term: "Why the stream operators are friends",
        kind: "insight",
        statement: "`operator<<` cannot be a member of String — its left operand is an `ostream`, not a String — yet it needs the representation to stream the characters. Nonmember with representation access is precisely the friend case: it loops `s.ptr[0] .. s.ptr[s.sz-1]` and writes them.",
        detail: "Returning `ostream&` is what lets output chain: `cout << s << \"!\";` applies the operator left to right.",
      },
      {
        term: "A friend of two classes: Matrix times Vector",
        kind: "method",
        statement: "Consider `Vector operator*(const Matrix&, const Vector&)`. The product belongs to neither class, but it must index both representations — so the book declares it a friend **in both classes** and defines it once. This is the canonical cure for 'which class should own this operator?'",
        detail: "The alternative — making it a member of one — misleads readers about symmetry and usually forces accessors that weaken the representation's privacy anyway.",
      },
      {
        term: "What friendship is not",
        kind: "law",
        statement: "**Friendship is neither transitive, nor inherited, nor reciprocal.** The friend of my class is not thereby the friend of my friends; a friend of a base is not a friend of a derived class; and my being your friend does not make you mine. A class can also be a friend (`friend class Matrix;`) and a member of another class can be named individually.",
        detail: "Because the grant is explicit, local and revocable only by editing the granting class, friendship is a precision tool — not a hole punched in encapsulation at random.",
      },
      {
        term: "Friends: the working contract",
        kind: "definition",
        statement: "**Friends.** Friends and their disciplined use. You can claim this section when you can declare friend functions and friend classes, and explain what friendship does and does not grant — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 19 (Special Operators); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Matrix times Vector, verified",
        problem: "With `operator*` declared a friend of both Matrix and Vector, compute M times v for v = (1, 2, 3, 4) and rows of M = (1,2,3,4), (2,3,4,5), (3,4,5,6), (4,5,6,7).",
        steps: [
          { label: "Step 1: The code shape", text: "`class Matrix; class Vector { double v[4]; friend Vector operator*(const Matrix&, const Vector&); }; class Matrix { double v[4][4]; friend Vector operator*(const Matrix&, const Vector&); };` — one function, declared twice as a friend, defined once." },
          { label: "Step 2: Row 0", text: "The dot product of (1,2,3,4) with (1,2,3,4) is 1·1 + 2·2 + 3·3 + 4·4 = 1 + 4 + 9 + 16 = 30." },
          { label: "Step 3: Rows 1 and 2", text: "(2,3,4,5)·v = 2 + 6 + 12 + 20 = 40; (3,4,5,6)·v = 3 + 8 + 15 + 24 = 50." },
          { label: "Step 4: Row 3", text: "(4,5,6,7)·v = 4 + 10 + 18 + 28 = 60 — sixteen multiply-adds in total, four per component." },
        ],
        result: "M times v = (30, 40, 50, 60). The function touched `m.v[i][j]` and `x.v[j]` — private in two classes — without either class owning it or exposing an accessor.",
      },
      {
        title: "operator<< as a friend of String",
        problem: "Write and trace the output operator for the String class of 19.3.",
        steps: [
          { label: "Step 1: The declaration", text: "Inside class String: `friend ostream& operator<<(ostream& os, const String& s);` — the only place the invitation can be issued." },
          { label: "Step 2: The definition", text: "`ostream& operator<<(ostream& os, const String& s) { for (int i = 0; i != s.sz; ++i) os << s.ptr[i]; return os; }` — exactly sz characters are written." },
          { label: "Step 3: The trace", text: "For the String of 19.3, ten characters S, t, r, o, u, s, t, r, u, p stream out — the loop stops before ptr[10], so no terminator is printed; returning os lets the next << continue the line." },
        ],
        result: "Printing works without a c_str() call and without any public accessor for ptr — a nonmember that needed the representation and got it by name, not by breaking the class open.",
      },
    ],
    keyTakeaways: [
      "A friend declaration grants representation access to a named function or class — it grants neither membership nor visibility to users",
      "Symmetric operators that need the representation of two classes (Matrix times Vector) are friends of both and members of neither",
      "Friendship is not transitive, not inherited and not reciprocal — the grant is explicit, local and one-directional",
    ],
    quiz: [
      {
        q: "Which statement about friendship is FALSE?",
        options: ["It must be declared by the class that grants it", "A friend of a base class is automatically a friend of its derived classes", "It is not transitive: your friend's friend is not your friend", "It is not reciprocal: friending someone does not make them friend you back"],
        answer: 1,
        explanation: "Friendship is never inherited — a friend of a base has no special access to a derived class. The other three are the defining properties of the mechanism.",
      },
      {
        q: "Why must `operator<<` for String be a nonmember?",
        options: ["Because friends cannot be members", "Because its left operand is an ostream, not a String", "Because ostream is a final class", "Because members cannot return ostream&"],
        answer: 1,
        explanation: "A member operator's left operand is always an object of its own class; the stream must come first in the expression, so the operator lives outside String and is declared a friend to reach ptr and sz.",
      },
      {
        q: "`friend class Matrix;` appears inside class Vector. This means",
        options: ["Vector is a friend of Matrix", "Every member function of Matrix may access Vector's private members", "Matrix inherits Vector", "Matrix and Vector share a vtable"],
        answer: 2,
        explanation: "The declaration grants the whole class Matrix the access rights of a friend of Vector — one-directional: Vector gets nothing in Matrix.",
      },
      {
        q: "The Matrix-times-Vector `operator*` is declared a friend of both classes because",
        options: ["friend functions run faster than members", "it needs the representations of both classes and belongs to neither", "operators must be friends when they return a class type", "Matrix and Vector cannot have public members"],
        answer: 3,
        explanation: "Membership would misrepresent the operator's symmetry — the product is no more a Matrix operation than a Vector operation — while accessors would widen the representation's exposure instead of narrowing it to one named function.",
      },
    ],
  },

  // ------------------------------------------------------------------ 19.5
  {
    sectionId: "cpp-ch19-s5",
    readingTime: 4,
    intro: "The chapter closes with Stroustrup's rules of thumb, and they are short because they are meant to be applied: define operators only where the meaning is obvious; keep that meaning close to the built-in one; supply operators in families; never overload the three whose built-in behavior you cannot reproduce; and treat a pointer member as an alarm bell that rings for the rule of five.",
    objectives: [
      "Apply the conventional-meaning test before adding any operator to a class",
      "Supply operators in families so users can reason by analogy (== with !=, the full ordering with <)",
      "Run the rule-of-five audit on any class with a pointer member",
    ],
    concepts: [
      {
        term: "Operators only for obvious uses",
        kind: "law",
        statement: "**Define an operator only if its meaning is obvious and natural.** `+` adds, `==` compares, `[]` subscripts — anything a reader must stop and look up is a misuse of the notation, and ordinary named functions would serve better.",
        detail: "The chapter pairs this with the mirror rule: keep the semantics close to what the built-in operator does, including convention (subscripting starts at 0).",
      },
      {
        term: "Provide operator families",
        kind: "method",
        statement: "A class with `==` should also provide `!=`; a class with `<` should provide the full ordering (`>`, `<=`, `>=`); a class with `+` should provide `+=`. Users reason by analogy, and a half-finished family breaks the analogy — often where the compiler cannot catch it.",
        detail: "Define the family members in terms of each other (`!=` as the negation of `==`) so the meanings cannot drift apart.",
      },
      {
        term: "The && || comma prohibition",
        kind: "law",
        statement: "**Never overload `&&`, `||` or the comma operator.** Their built-in meanings — short-circuit evaluation and guaranteed sequencing — cannot be reproduced by a function call, and code that looks like it short-circuits but does not is a trap for every reader.",
        detail: "This rule, like the fixed precedence, protects the reader of an expression first and the writer second.",
      },
      {
        term: "A pointer member rings the alarm",
        kind: "law",
        statement: "If a class has a pointer member, it probably needs the destructor, the copy and move constructors, and the copy and move assignments — or a comment explaining why not. The better cure is often to hold a `string`, `vector` or smart pointer instead and need none of the five.",
        detail: "The String class is the worked proof: five hand-written members, each of which a `std::string` member variable would have made unnecessary.",
      },
      {
        term: "Shipping rule for special operators",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Define an operator only when its meaning is obvious, and keep that meaning close to the built-in one** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "Auditing a broken handle class",
        problem: "Find every defect in `class Bad { char* p; public: Bad(const char* s) : p{new char[strlen(s)+1]} { strcpy(p, s); } ~Bad() { delete[] p; } };`",
        steps: [
          { label: "Step 1: Count the resources", text: "Each constructor allocates exactly one array; the destructor frees one. Balanced so far — the class is one correct operation away from disaster." },
          { label: "Step 2: Copy construction", text: "`Bad b2{b1};` uses the compiler-generated copy constructor, which copies p bitwise: b1.p == b2.p. At scope exit both destructors `delete[]` the same array — a double delete, undefined behavior." },
          { label: "Step 3: Copy assignment", text: "`b2 = b3;` copies the pointer over b2's, so b2's original array is never freed (a leak) and b2, b3 now share one array (a future double delete). One operation, two defects." },
          { label: "Step 4: The repair", text: "Either write all five special members, exactly as String does — or delete them, or replace `p` with a `std::string` member and let the compiler's generated members be correct for free." },
        ],
        result: "One missing set of five members produced a leak and a double delete on three lines of ordinary use; the audit trail is exactly the rule-of-five checklist.",
      },
      {
        title: "Reviewing special operators code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the conventional-meaning test before adding any operator to a class.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Define an operator only when its meaning is obvious, and keep that meaning close to the built-in one" },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `Widget* p = new Widget; delete p;`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: supply operators in families so users can reason by analogy (== with !=, the full ordering with <). Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Deliver operators in families: == with !=, the orderings with <, + with +=, defined in terms of each other" },
        ],
        result: "The review ends with findings tied to reasons: Define an operator only when its meaning is obvious, and keep that meaning close to the built-in one Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Define an operator only when its meaning is obvious, and keep that meaning close to the built-in one",
      "Deliver operators in families: == with !=, the orderings with <, + with +=, defined in terms of each other",
      "Never overload &&, || or comma; and treat a pointer member as the trigger for the rule of five — or for a redesign around string, vector or a smart pointer",
    ],
    quiz: [
      {
        q: "A class X provides `operator==` but not `operator!=`. Following the chapter's advice, you should",
        options: ["leave it — users can write !(a == b)", "also provide !=, so the family is complete and analogous to the built-ins", "delete operator== instead", "make != a friend of the class"],
        answer: 2,
        explanation: "Operators come in families; users reason by analogy with built-in types. The one-line member `!=` (the negation of ==) completes the contract the notation promised.",
      },
      {
        q: "Which of these must never be overloaded?",
        options: ["`operator[]`", "`operator->`", "`operator&&`", "`operator()`"],
        answer: 2,
        explanation: "An overloaded && cannot reproduce short-circuit evaluation — both operands get evaluated in unspecified order — so the notation lies. `[]`, `->` and `()` are the chapter's everyday tools.",
      },
      {
        q: "A class's only data member is `char* p`. The book's first question about that class is",
        options: ["why is p not a std::string — or where are the five special member functions?", "why is p not static?", "why is p not public?", "why does the class have no friends?"],
        answer: 0,
        explanation: "A pointer member is the rule-of-five trigger: either the class wraps a resource and needs destructor, copies and moves, or it should hold a string/vector/unique_ptr and need none of them.",
      },
    ],
  },
]

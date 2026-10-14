import type { FormulaEntry } from './formulas'

// ============================================================================
// Formula sheet — Stroustrup, The C++ Programming Language, 4th Edition
// (C++11) — Chapters 1–44.
//
// C++ is a programming language, not math: entries are key rules, idioms,
// facts and complexity guarantees. `section` is the real book section number
// (cpp-chN-sM) where the rule appears. `formula` is a compact memorable
// statement in Unicode (search / plain-text fallback).
// ============================================================================

export const CPP_FORMULAS: FormulaEntry[] = [
  // ============================ Chapter 1 — Notes to the Reader ============================
  {
    chapterId: "cpp-ch1",
    section: "1.2",
    name: "Zero-Overhead Principle",
    formula: "Do not pay for what you do not use; what you use costs ≈ hand code",
    note: "Stroustrup design rule behind every abstraction choice",
  },
  {
    chapterId: "cpp-ch1",
    section: "1.2",
    name: "C++ Design Pillars",
    formula: "Static types + user abstractions + direct hardware mapping",
    note: "use to justify why C++ has both classes and pointers",
  },
  {
    chapterId: "cpp-ch1",
    section: "1.4",
    name: "C++11 Watershed",
    formula: "C++98 → C++11: auto, move, RAII library, concurrency standardized",
    note: "book covers C++11; expect modern idioms throughout",
  },

  // ============================ Chapter 2 — Tour: The Basics ============================
  {
    chapterId: "cpp-ch2",
    section: "2.2",
    name: "Uniform Initialization",
    formula: "T x{init}; braces reject narrowing — prefer {} over () or =",
    note: "braces reject narrowing; parens do not",
  },
  {
    chapterId: "cpp-ch2",
    section: "2.3",
    name: "Class Invariant Rule",
    formula: "Constructor establishes invariant; every method preserves it",
    note: "every user type needs a stated invariant",
  },
  {
    chapterId: "cpp-ch2",
    section: "2.4",
    name: "Modularity Triad",
    formula: "Separate compilation + namespaces + exceptions = programs that scale",
    note: "split interface (.h) from implementation (.cpp)",
  },

  // ============================ Chapter 3 — Tour: Abstraction ============================
  {
    chapterId: "cpp-ch3",
    section: "3.2",
    name: "Concrete vs Abstract",
    formula: "Concrete = value behavior; abstract = interface via virtual + = 0",
    note: "Shape with virtual draw() is the canonical example",
  },
  {
    chapterId: "cpp-ch3",
    section: "3.3",
    name: "Copy vs Move",
    formula: "Copy duplicates value; move steals resources, source stays valid",
    note: "move enables cheap return of large containers",
  },
  {
    chapterId: "cpp-ch3",
    section: "3.4",
    name: "Template Raising",
    formula: "template<class T> lifts one algorithm to work for every T",
    note: "write once for vector<T> instead of per-type code",
  },

  // ============================ Chapter 4 — Tour: Containers and Algorithms ============================
  {
    chapterId: "cpp-ch4",
    section: "4.2",
    name: "string Value Semantics",
    formula: "std::string owns its characters; copy is deep, move is cheap",
    note: "prefer string over C arrays for text",
  },
  {
    chapterId: "cpp-ch4",
    section: "4.4",
    name: "Container Default",
    formula: "Default to vector<T>; need a measured reason for anything else",
    note: "vector is cache-friendly and simplest",
  },
  {
    chapterId: "cpp-ch4",
    section: "4.5",
    name: "Algorithm Over Loop",
    formula: "find / sort / copy_if with iterators beats hand-rolled loops",
    note: "algorithms state intent and avoid off-by-one bugs",
  },

  // ============================ Chapter 5 — Tour: Concurrency and Utilities ============================
  {
    chapterId: "cpp-ch5",
    section: "5.2",
    name: "RAII Ownership",
    formula: "Resource lifetime = object lifetime: ctor acquires, dtor releases",
    note: "never call new/delete by hand in tour code",
  },
  {
    chapterId: "cpp-ch5",
    section: "5.2",
    name: "unique_ptr vs shared_ptr",
    formula: "unique_ptr = sole owner; shared_ptr = counted shared ownership",
    note: "default to unique_ptr for exclusive ownership",
  },
  {
    chapterId: "cpp-ch5",
    section: "5.3",
    name: "Task Over Thread",
    formula: "async(f) returns future<T>; prefer tasks to raw threads",
    note: "tasks carry results and exceptions safely",
  },

  // ============================ Chapter 6 — Types and Declarations ============================
  {
    chapterId: "cpp-ch6",
    section: "6.2",
    name: "Type Size Floor",
    formula: "char ≥ 8 bits; short ≤ int ≤ long; long long ≥ 64 bits",
    note: "never assume 32-bit int; check limits header",
  },
  {
    chapterId: "cpp-ch6",
    section: "6.3",
    name: "auto Deduction",
    formula: "auto x = expr; keeps value type, drops references like templates",
    note: "use auto for iterators and long type names",
  },
  {
    chapterId: "cpp-ch6",
    section: "6.4",
    name: "Value Category",
    formula: "lvalue = has identity; rvalue = movable temporary or literal",
    note: "move binds to rvalues, copies to lvalues",
  },

  // ============================ Chapter 7 — Pointers, Arrays, and References ============================
  {
    chapterId: "cpp-ch7",
    section: "7.2",
    name: "nullptr Rule",
    formula: "Use nullptr for null pointers — never 0 or NULL",
    note: "nullptr has its own type and overloads correctly",
  },
  {
    chapterId: "cpp-ch7",
    section: "7.5",
    name: "Const Pointer Matrix",
    formula: "const T* = pointee const; T* const = pointer const; both = both",
    note: "read pointer declarations right-to-left",
  },
  {
    chapterId: "cpp-ch7",
    section: "7.7",
    name: "Reference Binding",
    formula: "T& binds lvalues; T&& binds rvalues; const T& binds both",
    note: "const reference extends temporary lifetime",
  },

  // ============================ Chapter 8 — Structures, Unions, and Enumerations ============================
  {
    chapterId: "cpp-ch8",
    section: "8.2",
    name: "struct Layout",
    formula: "Members in declaration order + alignment padding = sizeof",
    note: "reorder members largest-first to shrink size",
  },
  {
    chapterId: "cpp-ch8",
    section: "8.3",
    name: "Union Discipline",
    formula: "Union holds one alternative at a time; track which with a tag",
    note: "prefer tagged-union style over raw union",
  },
  {
    chapterId: "cpp-ch8",
    section: "8.4",
    name: "Scoped Enum",
    formula: "enum class E {…}; scoped, no implicit int conversion",
    note: "always prefer enum class over plain enum",
  },

  // ============================ Chapter 9 — Statements ============================
  {
    chapterId: "cpp-ch9",
    section: "9.3",
    name: "Declare Late",
    formula: "Declare each name at first use in the smallest scope",
    note: "late declaration enables immediate initialization",
  },
  {
    chapterId: "cpp-ch9",
    section: "9.4",
    name: "switch Discipline",
    formula: "Cover every enum case or add default; missing break falls through",
    note: "missing break falls through silently",
  },
  {
    chapterId: "cpp-ch9",
    section: "9.5",
    name: "Range-for Default",
    formula: "for (auto& x : c) to mutate; for (const auto& x : c) to read",
    note: "range-for never fails with an index error",
  },

  // ============================ Chapter 10 — Expressions ============================
  {
    chapterId: "cpp-ch10",
    section: "10.3",
    name: "Precedence Trap",
    formula: "a & b == c parses as a & (b == c) — parenthesize bitwise mixes",
    note: "parenthesize bitwise and logical mixes",
  },
  {
    chapterId: "cpp-ch10",
    section: "10.4",
    name: "constexpr Computation",
    formula: "constexpr f() runs at compile time on constant inputs",
    note: "mark pure functions constexpr for zero cost",
  },
  {
    chapterId: "cpp-ch10",
    section: "10.5",
    name: "Narrowing Ban",
    formula: "Braced init rejects narrowing: int x{7.9} is an error",
    note: "use braces to catch lossy conversions early",
  },

  // ============================ Chapter 11 — Select Operations ============================
  {
    chapterId: "cpp-ch11",
    section: "11.2",
    name: "new/delete Pairing",
    formula: "new → delete; new[] → delete[]; best: no naked new at all",
    note: "naked new is a leak waiting to happen",
  },
  {
    chapterId: "cpp-ch11",
    section: "11.4",
    name: "Lambda Capture",
    formula: "[&] by ref; [=] by value; [x,&y] mixed; mutable edits copies",
    note: "default by-ref capture dangles past locals",
  },
  {
    chapterId: "cpp-ch11",
    section: "11.5",
    name: "Four Named Casts",
    formula: "static = well-defined; dynamic = checked; const = const; reinterpret = bits",
    note: "never use C-style (T)e casts",
  },

  // ============================ Chapter 12 — Functions ============================
  {
    chapterId: "cpp-ch12",
    section: "12.1",
    name: "Declaration Before Use",
    formula: "Declare before use; a definition is a declaration with a body",
    note: "headers carry declarations, sources carry definitions",
  },
  {
    chapterId: "cpp-ch12",
    section: "12.2",
    name: "Pass-by Rule",
    formula: "Small in by value; large in by const&; out by &; forwarding by &&",
    note: "this table answers every parameter question",
  },
  {
    chapterId: "cpp-ch12",
    section: "12.3",
    name: "Overload Ranking",
    formula: "Exact > promotion > conversion > ellipsis; ambiguous = error",
    note: "new overloads can silently break old calls",
  },

  // ============================ Chapter 13 — Exception Handling ============================
  {
    chapterId: "cpp-ch13",
    section: "13.2",
    name: "Exception Guarantees",
    formula: "nothrow > strong (commit-or-rollback) > basic (invariants hold)",
    note: "aim for strong on mutating operations",
  },
  {
    chapterId: "cpp-ch13",
    section: "13.3",
    name: "RAII or Finally-less",
    formula: "Every resource wrapped in a manager; no explicit cleanup code",
    note: "lock_guard and vector are RAII exemplars",
  },
  {
    chapterId: "cpp-ch13",
    section: "13.5",
    name: "Throw by Value, Catch by Reference",
    formula: "throw E{}; catch (const E& e); rethrow bare with throw;",
    note: "catching by value slices derived objects",
  },

  // ============================ Chapter 14 — Namespaces ============================
  {
    chapterId: "cpp-ch14",
    section: "14.2",
    name: "using Safety",
    formula: "using N::x is safe; using namespace N in headers pollutes all",
    note: "never put a using-directive in a header",
  },
  {
    chapterId: "cpp-ch14",
    section: "14.3",
    name: "Interface Partition",
    formula: "Minimal public API + helpers in detail or unnamed namespace",
    note: "narrow interfaces reduce coupling",
  },
  {
    chapterId: "cpp-ch14",
    section: "14.4",
    name: "ADL Rule",
    formula: "Unqualified f(x) also searches the namespaces of x's type",
    note: "ADL makes swap and operators work naturally",
  },

  // ============================ Chapter 15 — Source Files and Programs ============================
  {
    chapterId: "cpp-ch15",
    section: "15.1",
    name: "ODR Single Definition",
    formula: "One definition per program; declarations may repeat, definitions not",
    note: "duplicate definitions cause link errors",
  },
  {
    chapterId: "cpp-ch15",
    section: "15.2",
    name: "Linkage Trio",
    formula: "extern = shared; static/unnamed = internal; const ns-scope = internal",
    note: "give helpers internal linkage",
  },
  {
    chapterId: "cpp-ch15",
    section: "15.3",
    name: "Header Hygiene",
    formula: "Include what you use; headers self-contained with guards",
    note: "a header must compile standalone",
  },

  // ============================ Chapter 16 — Classes ============================
  {
    chapterId: "cpp-ch16",
    section: "16.2",
    name: "const Member Rule",
    formula: "Read-only operations are const; const objects call const members only",
    note: "missing const breaks const correctness",
  },
  {
    chapterId: "cpp-ch16",
    section: "16.2",
    name: "Encapsulation Test",
    formula: "private data + public invariant-preserving operations = real class",
    note: "no public mutable data members",
  },
  {
    chapterId: "cpp-ch16",
    section: "16.3",
    name: "Concrete Type Shape",
    formula: "Value type: small, copyable, no virtuals — like complex or Date",
    note: "concrete types behave like built-ins",
  },

  // ============================ Chapter 17 — Construction, Cleanup, Copy, and Move ============================
  {
    chapterId: "cpp-ch17",
    section: "17.2",
    name: "Ctor/Dtor Pairing",
    formula: "Constructor establishes invariant; destructor releases, never throws",
    note: "a throwing destructor during unwind terminates",
  },
  {
    chapterId: "cpp-ch17",
    section: "17.5",
    name: "Copy/Move Four",
    formula: "Copy ctor + copy assign copy value; move pair steals, source valid",
    note: "move source left valid but unspecified",
  },
  {
    chapterId: "cpp-ch17",
    section: "17.6",
    name: "Rule of Five/Zero",
    formula: "Define/disable all five or none: dtor, copy ×2, move ×2",
    note: "custom destructor implies custom copy/move",
  },

  // ============================ Chapter 18 — Overloading ============================
  {
    chapterId: "cpp-ch18",
    section: "18.2",
    name: "Operator Arity",
    formula: "Overloads keep arity and precedence; ≥1 operand is user-defined",
    note: "cannot invent new operator symbols",
  },
  {
    chapterId: "cpp-ch18",
    section: "18.3",
    name: "Compound First",
    formula: "Implement += first, then define + via +=; member mutates, free is symmetric",
    note: "Complex::operator+= is the pattern",
  },
  {
    chapterId: "cpp-ch18",
    section: "18.4",
    name: "Conversion Control",
    formula: "Single-arg ctor converts unless explicit; operator T() converts out",
    note: "mark single-arg ctors explicit by default",
  },

  // ============================ Chapter 19 — Special Operators ============================
  {
    chapterId: "cpp-ch19",
    section: "19.2",
    name: "Subscript Pair",
    formula: "Provide T& operator[](i) and const T& operator[](i) const together",
    note: "unchecked [] for speed plus at() for checks",
  },
  {
    chapterId: "cpp-ch19",
    section: "19.3",
    name: "String Copy Discipline",
    formula: "Own buffer: deep copy on copy, steal on move, self-assign safe",
    note: "the String class is the ownership drill",
  },
  {
    chapterId: "cpp-ch19",
    section: "19.4",
    name: "Friend Minimalism",
    formula: "friend grants access, not membership; only for operators/helpers",
    note: "friends break encapsulation — keep few",
  },

  // ============================ Chapter 20 — Derived Classes ============================
  {
    chapterId: "cpp-ch20",
    section: "20.2",
    name: "override Trilogy",
    formula: "virtual + override + public virtual destructor in every base",
    note: "missing virtual destructor leaks derived parts",
  },
  {
    chapterId: "cpp-ch20",
    section: "20.4",
    name: "Abstract Interface",
    formula: "Pure virtual f() = 0 makes class abstract; derived overrides all",
    note: "interfaces hold contract, not state",
  },
  {
    chapterId: "cpp-ch20",
    section: "20.5",
    name: "public Is-A Only",
    formula: "public inheritance = substitutable; private = implemented-in-terms-of",
    note: "non-public inheritance is rarely right",
  },

  // ============================ Chapter 21 — Class Hierarchies ============================
  {
    chapterId: "cpp-ch21",
    section: "21.2",
    name: "Prefer Composition",
    formula: "Hierarchy for substitutability; composition for code reuse",
    note: "implementation inheritance couples tightly",
  },
  {
    chapterId: "cpp-ch21",
    section: "21.3",
    name: "Diamond via virtual",
    formula: "Shared base via virtual inheritance: one subobject, most-derived inits",
    note: "virtual bases cost an indirection",
  },
  {
    chapterId: "cpp-ch21",
    section: "21.3",
    name: "MI Ambiguity",
    formula: "Two bases with same member need explicit Base::m qualification",
    note: "keep multiple bases orthogonal",
  },

  // ============================ Chapter 22 — Run-Time Type Information ============================
  {
    chapterId: "cpp-ch22",
    section: "22.2",
    name: "dynamic_cast Check",
    formula: "dynamic_cast<Derived*>(p) → nullptr on failure; ref form throws bad_cast",
    note: "needs at least one virtual function",
  },
  {
    chapterId: "cpp-ch22",
    section: "22.3",
    name: "Visitor Double Dispatch",
    formula: "v.visit(x) + x.accept(v) selects on visitor and element type",
    note: "visitors add ops without editing classes",
  },
  {
    chapterId: "cpp-ch22",
    section: "22.5",
    name: "typeid Identity",
    formula: "typeid(x) == typeid(T) is exact-type test; name() is diagnostics only",
    note: "prefer virtuals over typeid switches",
  },

  // ============================ Chapter 23 — Templates ============================
  {
    chapterId: "cpp-ch23",
    section: "23.3",
    name: "Template Late Errors",
    formula: "Template type errors surface at instantiation, not at definition",
    note: "instantiate with all intended types early",
  },
  {
    chapterId: "cpp-ch23",
    section: "23.5",
    name: "Deduction Rule",
    formula: "Function templates deduce T from args; no conversions while deducing",
    note: "f(T,T) with (int,double) fails to deduce",
  },
  {
    chapterId: "cpp-ch23",
    section: "23.7",
    name: "Header-Only Templates",
    formula: "Templates live in headers; separate template compilation is obsolete",
    note: "define templates where they are included",
  },

  // ============================ Chapter 24 — Generic Programming ============================
  {
    chapterId: "cpp-ch24",
    section: "24.2",
    name: "Lifting Pattern",
    formula: "Concrete algo → parameterize element type → parameterize iterator",
    note: "lifting turns one routine into generic one",
  },
  {
    chapterId: "cpp-ch24",
    section: "24.3",
    name: "Concept Requirements",
    formula: "Concepts = required operations + semantics + complexity bounds",
    note: "document what T must provide",
  },
  {
    chapterId: "cpp-ch24",
    section: "24.4",
    name: "Iterator Economy",
    formula: "Algorithms take [begin, end); containers stay decoupled from algos",
    note: "half-open range is the convention",
  },

  // ============================ Chapter 25 — Specialization ============================
  {
    chapterId: "cpp-ch25",
    section: "25.2",
    name: "Template Parameter Kinds",
    formula: "Parameters are type, non-type value, or template-template",
    note: "non-type params need constant expressions",
  },
  {
    chapterId: "cpp-ch25",
    section: "25.3",
    name: "Specialization Pick",
    formula: "Most specialized match wins: general < partial < explicit full",
    note: "specialize for pointers or traits",
  },
  {
    chapterId: "cpp-ch25",
    section: "25.3",
    name: "Full vs Partial",
    formula: "Full uses template<>; partial keeps its own <params>; functions prefer overloads",
    note: "functions prefer overloads over full spec",
  },

  // ============================ Chapter 26 — Instantiation ============================
  {
    chapterId: "cpp-ch26",
    section: "26.2",
    name: "Implicit Instantiation",
    formula: "Used specializations instantiate once per program, ODR-merged",
    note: "unused member functions never instantiate",
  },
  {
    chapterId: "cpp-ch26",
    section: "26.3",
    name: "Two-Phase Lookup",
    formula: "Nondependent names bind at definition; dependent names at instantiation + ADL",
    note: "add typename for dependent types",
  },
  {
    chapterId: "cpp-ch26",
    section: "26.3",
    name: "typename Disambiguator",
    formula: "typename T::type names a type; t.template f<>() names a template",
    note: "compiler needs help parsing dependents",
  },

  // ============================ Chapter 27 — Templates and Hierarchies ============================
  {
    chapterId: "cpp-ch27",
    section: "27.2",
    name: "Static vs Dynamic",
    formula: "Templates = compile-time, no indirection; virtuals = run-time, flexible",
    note: "choose by when the choice is known",
  },
  {
    chapterId: "cpp-ch27",
    section: "27.3",
    name: "Template Hierarchy Cost",
    formula: "Each instantiation is a separate type with separate statics",
    note: "vector<int> and vector<double> share nothing",
  },
  {
    chapterId: "cpp-ch27",
    section: "27.4",
    name: "Mixin Base",
    formula: "template<class B> class M : B injects policy via inheritance",
    note: "mixins compose behaviors at compile time",
  },

  // ============================ Chapter 28 — Metaprogramming ============================
  {
    chapterId: "cpp-ch28",
    section: "28.2",
    name: "Type Function",
    formula: "Trait maps type → type/value: add_const<T>, is_integral<T>::value",
    note: "traits answer compile-time questions",
  },
  {
    chapterId: "cpp-ch28",
    section: "28.4",
    name: "enable_if Gate",
    formula: "enable_if<cond, T> exists only when cond is true — SFINAE selection",
    note: "gate overloads on type properties",
  },
  {
    chapterId: "cpp-ch28",
    section: "28.6",
    name: "Variadic Pack",
    formula: "Args... packs any arity; expand with ...; recurse or fold to consume",
    note: "tuple and emplace rely on packs",
  },

  // ============================ Chapter 29 — A Matrix Design ============================
  {
    chapterId: "cpp-ch29",
    section: "29.2",
    name: "Matrix Bounds",
    formula: "Matrix<T,N> knows extent and stride per dimension at run time",
    note: "dimensions are values, element type is param",
  },
  {
    chapterId: "cpp-ch29",
    section: "29.3",
    name: "View No-Copy",
    formula: "Slices and rows are O(1) views: aliases, not deep copies",
    note: "views dangle if matrix dies first",
  },
  {
    chapterId: "cpp-ch29",
    section: "29.5",
    name: "Elimination Cost",
    formula: "Gaussian elimination on n×n costs ≈ n³/3 multiply-adds",
    note: "pivot to control rounding error",
  },

  // ============================ Chapter 30 — Standard Library Summary ============================
  {
    chapterId: "cpp-ch30",
    section: "30.2",
    name: "Header Map",
    formula: "<vector> <map> <algorithm> <memory> <thread>: include what you use",
    note: "each library part has its own header",
  },
  {
    chapterId: "cpp-ch30",
    section: "30.3",
    name: "Support Trio",
    formula: "<limits> <typeinfo> <initializer_list> underpin language features",
    note: "numeric_limits<T> replaces C macros",
  },
  {
    chapterId: "cpp-ch30",
    section: "30.4",
    name: "Library Exceptions",
    formula: "std::exception base; logic vs runtime split; what() states cause",
    note: "derive library errors from std::exception",
  },

  // ============================ Chapter 31 — STL Containers ============================
  {
    chapterId: "cpp-ch31",
    section: "31.2",
    name: "Container Complexities",
    formula: "vector push O(1)*; map find O(log n); unordered avg O(1)",
    note: "pick container by operation mix",
  },
  {
    chapterId: "cpp-ch31",
    section: "31.4",
    name: "Invalidation Rule",
    formula: "vector insert may invalidate all iterators; list/map insert never does",
    note: "iterator invalidation is the vector trap",
  },
  {
    chapterId: "cpp-ch31",
    section: "31.5",
    name: "Adaptor Restriction",
    formula: "stack / queue / priority_queue expose a subset over deque or vector",
    note: "adaptors have no iterators",
  },

  // ============================ Chapter 32 — STL Algorithms ============================
  {
    chapterId: "cpp-ch32",
    section: "32.3",
    name: "find_if Linear",
    formula: "find/count over [b, e) costs O(n) comparisons, returns first match",
    note: "sorted data deserves binary_search instead",
  },
  {
    chapterId: "cpp-ch32",
    section: "32.4",
    name: "Erase–Remove",
    formula: "c.erase(remove_if(b, e, p), e) deletes conditionally in O(n)",
    note: "remove alone only shuffles elements",
  },
  {
    chapterId: "cpp-ch32",
    section: "32.5",
    name: "sort Complexity",
    formula: "sort O(n log n) avg, unstable; stable_sort keeps equal order",
    note: "binary_search needs a sorted range",
  },

  // ============================ Chapter 33 — STL Iterators ============================
  {
    chapterId: "cpp-ch33",
    section: "33.2",
    name: "Iterator Ladder",
    formula: "input < forward < bidir < random-access; each rung adds power",
    note: "algorithm requirements name a rung",
  },
  {
    chapterId: "cpp-ch33",
    section: "33.3",
    name: "Inserter Adaptors",
    formula: "back/front/inserter turn assignment into container insertion",
    note: "copy into empty vector needs back_inserter",
  },
  {
    chapterId: "cpp-ch33",
    section: "33.5",
    name: "Predicate Objects",
    formula: "Function objects carry state; lambdas are anonymous functors",
    note: "use a lambda over a hand functor",
  },

  // ============================ Chapter 34 — Memory and Resources ============================
  {
    chapterId: "cpp-ch34",
    section: "34.3",
    name: "unique_ptr Sole Owner",
    formula: "unique_ptr<T> owns exclusively; move-only, zero overhead",
    note: "make_unique is the safe creation",
  },
  {
    chapterId: "cpp-ch34",
    section: "34.3",
    name: "shared_ptr Sharing",
    formula: "shared_ptr counts owners atomically; cycles need weak_ptr to break",
    note: "shared ownership costs atomic counting",
  },
  {
    chapterId: "cpp-ch34",
    section: "34.4",
    name: "Allocator Split",
    formula: "Allocator separates raw allocate() from object construct()",
    note: "containers use allocators, not raw new",
  },

  // ============================ Chapter 35 — Utilities ============================
  {
    chapterId: "cpp-ch35",
    section: "35.2",
    name: "Chrono Trio",
    formula: "duration + time_point + clock; never mix units without conversion",
    note: "steady_clock for timing, system for wall",
  },
  {
    chapterId: "cpp-ch35",
    section: "35.3",
    name: "ratio Exactness",
    formula: "ratio<a,b> arithmetic at compile time with zero rounding",
    note: "kilo and milli come from std::ratio",
  },
  {
    chapterId: "cpp-ch35",
    section: "35.5",
    name: "Move Utilities",
    formula: "std::move casts to rvalue; std::forward preserves value category",
    note: "move does not move, it enables moving",
  },

  // ============================ Chapter 36 — Strings ============================
  {
    chapterId: "cpp-ch36",
    section: "36.2",
    name: "Classification Table",
    formula: "isspace/isdigit/toupper from <cctype> take unsigned char or EOF",
    note: "cast char to unsigned char first",
  },
  {
    chapterId: "cpp-ch36",
    section: "36.3",
    name: "string Growth",
    formula: "append amortized O(1); find miss returns string::npos",
    note: "check == string::npos, never < 0",
  },
  {
    chapterId: "cpp-ch36",
    section: "36.3",
    name: "Concat Cost",
    formula: "s += t is linear once; repeated + in a loop is quadratic",
    note: "reserve() up front for big builds",
  },

  // ============================ Chapter 37 — Regular Expressions ============================
  {
    chapterId: "cpp-ch37",
    section: "37.2",
    name: "regex Kinds",
    formula: "ECMAScript default; also basic, extended, awk, grep, egrep grammars",
    note: "pick grammar to match your pattern source",
  },
  {
    chapterId: "cpp-ch37",
    section: "37.3",
    name: "match vs search",
    formula: "regex_match needs full match; regex_search needs any substring",
    note: "most misses are match/search confusion",
  },
  {
    chapterId: "cpp-ch37",
    section: "37.4",
    name: "Token Iteration",
    formula: "sregex_token_iterator splits (-1) or extracts captures (1, 2, …)",
    note: "submatch -1 means non-matched pieces",
  },

  // ============================ Chapter 38 — I/O Streams ============================
  {
    chapterId: "cpp-ch38",
    section: "38.2",
    name: "Stream Chain",
    formula: "cin/cout/cerr layered on streambuf; file and string streams share API",
    note: "file and string streams share the interface",
  },
  {
    chapterId: "cpp-ch38",
    section: "38.3",
    name: "State Bits",
    formula: "good / fail / bad / eof; fail = format error, bad = lost stream",
    note: "clear() resets state after handling",
  },
  {
    chapterId: "cpp-ch38",
    section: "38.4",
    name: "Manipulator Sticky",
    formula: "width() is one-shot; precision / fill / base persist until changed",
    note: "setw applies to next item only",
  },

  // ============================ Chapter 39 — Locales ============================
  {
    chapterId: "cpp-ch39",
    section: "39.2",
    name: "locale Global",
    formula: "locale::global(l) sets program-wide; cout.imbue(l) sets per stream",
    note: "default C locale is minimal English",
  },
  {
    chapterId: "cpp-ch39",
    section: "39.3",
    name: "Facet Service",
    formula: "locale owns facets; use_facet<F>(l) fetches the typed service",
    note: "facets are reference-counted, immutable",
  },
  {
    chapterId: "cpp-ch39",
    section: "39.4",
    name: "Standard Facets",
    formula: "collate, ctype, numget/put, money, time govern formatting",
    note: "numbers and dates vary by locale",
  },

  // ============================ Chapter 40 — Numerics ============================
  {
    chapterId: "cpp-ch40",
    section: "40.2",
    name: "numeric_limits",
    formula: "limits<T>::max/min/lowest/epsilon/infinity describe arithmetic",
    note: "lowest differs from min for floating types",
  },
  {
    chapterId: "cpp-ch40",
    section: "40.6",
    name: "Accumulate Identity",
    formula: "accumulate(b, e, init) folds with +; init type fixes result type",
    note: "init 0 vs 0.0 changes the sum type",
  },
  {
    chapterId: "cpp-ch40",
    section: "40.7",
    name: "Engine + Distribution",
    formula: "engine makes uniform bits; distribution shapes them: uniform, normal",
    note: "never use rand(); use mt19937",
  },

  // ============================ Chapter 41 — Concurrency ============================
  {
    chapterId: "cpp-ch41",
    section: "41.2",
    name: "Data-Race Definition",
    formula: "Conflicting unsynchronized accesses with a write = undefined behavior",
    note: "even plain bool races are UB",
  },
  {
    chapterId: "cpp-ch41",
    section: "41.3",
    name: "Ordering Ladder",
    formula: "seq_cst > acquire/release > relaxed; default seq_cst is safest",
    note: "weaker orders need proof of correctness",
  },
  {
    chapterId: "cpp-ch41",
    section: "41.4",
    name: "volatile Is Not Atomic",
    formula: "volatile stops optimization only; gives no sync or ordering",
    note: "use atomic, not volatile, for threads",
  },

  // ============================ Chapter 42 — Threads and Tasks ============================
  {
    chapterId: "cpp-ch42",
    section: "42.2",
    name: "Thread Join/Detach",
    formula: "Every thread joined or detached before its dtor, else terminate()",
    note: "RAII join wrapper prevents misses",
  },
  {
    chapterId: "cpp-ch42",
    section: "42.3",
    name: "Lock Order",
    formula: "lock_guard per scope; lock(a, b, …) for several; same order everywhere",
    note: "inconsistent order deadlocks",
  },
  {
    chapterId: "cpp-ch42",
    section: "42.4",
    name: "async Launch",
    formula: "async(launch::async, f) truly async; default may defer until get()",
    note: "future.get() rethrows worker exception",
  },

  // ============================ Chapter 43 — The C Standard Library ============================
  {
    chapterId: "cpp-ch43",
    section: "43.3",
    name: "printf Safety",
    formula: "Format must match args exactly; mismatch with %d/%s is UB",
    note: "prefer iostreams for type safety",
  },
  {
    chapterId: "cpp-ch43",
    section: "43.4",
    name: "C-String Bounds",
    formula: "strcpy/strcat never check size; bound with strncpy/n and explicit N",
    note: "C strings need room for trailing NUL",
  },
  {
    chapterId: "cpp-ch43",
    section: "43.5",
    name: "malloc Pairing",
    formula: "malloc/calloc/realloc pair only with free — never delete",
    note: "C allocation knows no constructors",
  },

  // ============================ Chapter 44 — Compatibility ============================
  {
    chapterId: "cpp-ch44",
    section: "44.2",
    name: "C++11 Core Gifts",
    formula: "auto, range-for, move, nullptr, constexpr, static_assert, threads",
    note: "C++11 is the baseline modern dialect",
  },
  {
    chapterId: "cpp-ch44",
    section: "44.3",
    name: "C vs C++ Voids",
    formula: "int f() = no args in C++ but unknown args in C",
    note: "use f(void) in shared headers for C",
  },
  {
    chapterId: "cpp-ch44",
    section: "44.3",
    name: "extern C Bridge",
    formula: "extern C blocks disable mangling for cross-language linkage",
    note: "wrap C headers for C++ inclusion",
  },
]

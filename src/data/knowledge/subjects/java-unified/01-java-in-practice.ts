/**
 * Knowledge Universe — Java Programming — Chapter 01: Java in Practice
 * 4 lessons · ~5,781 words
 * field: Programming
 * legacy sources: x20-foundations-pass.ts, x45-exam-gap-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Programming]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 cs-method-overriding-dynamic-dispatch — Overriding Methods: Dynamic Dispatch and the Object Class
 *   01.2 cs-java-objects-classes-methods — Java Objects and Classes: Constructors, Methods and Inheritance
 *   01.3 cs-java-arrays-and-arraylists — Traversing Java Arrays, 2D Arrays and ArrayLists
 *   01.4 cs-java-boolean-logic-expressions — Equivalent Boolean Expressions in Java
 */
import type { KnowledgeTopic } from '../../types'

export const javaUnifiedCh01: KnowledgeTopic[] = [
  {
    id: 'cs-method-overriding-dynamic-dispatch',
    title: 'Overriding Methods: Dynamic Dispatch and the Object Class',
    domain: 'Computing & AI',
    field: 'Programming',
    branch: 'Object-Oriented Java',
    tier: 'core',
    concepts: [
      'Same signature, new body: what overriding is',
      '@Override catches the silent typo',
      'The runtime type picks the method',
      'Overriding versus overloading, finally settled',
      'super.method() to borrow the parent version',
      'equals and toString contracts',
    ],
    words: 1530,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Inheritance hands a subclass every method its parent declared — and then, in practice, the subclass almost always wants to change some of them. A bank account computes interest one way; a savings account computes it differently. An animal makes a sound; each species makes its own. Method overriding is the mechanism for that replacement: the subclass declares a method with the same signature as the parent\u2019s, and from then on the subclass\u2019s version is the one that runs. It is a small rule with a large consequence — it is what makes the same line of code do different things depending on the object it meets, which is the heart of object-oriented design.',
      },
      {
        kind: 'para',
        text: 'This lesson teaches the rule precisely, then the machinery underneath it. It defines what counts as a valid override and how the @Override annotation protects against the classic typo, settles the overriding-versus-overloading confusion with a rule you can apply under time pressure, explains dynamic dispatch — how the runtime chooses the method by the object\u2019s actual class — and walks the two Object-class methods every class should think about overriding: toString and equals. Class construction, constructors and super() calls are the parent lesson\u2019s territory (Java Objects and Classes); here we build on top of that ground.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Dynamic dispatch is the mechanism behind every framework you will ever use: a library calls your overridden method without knowing your class exists, because it coded against the parent type. Get the rule wrong and the bug is silent — the code compiles, runs, and quietly calls the wrong version. The @Override habit plus a real understanding of dispatch is the difference.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'What Counts as a Valid Override' },
      {
        kind: 'para',
        text: 'An override requires the same signature: same method name, same parameter list in number, type and order. The return type must match exactly or be covariant — a subclass of the parent\u2019s return type is allowed, so a method returning Animal may be overridden by one returning Dog. Three further rules finish the picture. Visibility may widen but never narrow: an overridden method can go from protected to public, never from public to private. You cannot override something final (it is sealed against replacement), nor private (the subclass never saw it), nor static — a same-signature static method in the subclass does not override but hides the parent\u2019s, which behaves differently: hiding resolves by the reference type, not the object type.',
      },
      {
        kind: 'para',
        text: 'The signature requirement is where bugs hide. Write withdraw(double amount) in the parent and withdraw(int amount) in the child, and the child has not overridden anything — it has overloaded, quietly, and the parent\u2019s version still runs for double arguments. The @Override annotation exists for exactly this trap: placed above the method, it makes the compiler verify a genuine override exists, and fails compilation when it does not. Professional Java treats the annotation as mandatory on every intended override; treat it as mandatory on every assignment too.',
      },
      { kind: 'heading', text: 'Overriding versus Overloading' },
      {
        kind: 'para',
        text: 'The confusion is worth killing once and for all. Overloading is two or more methods in the same class (or inherited plus declared) sharing a name but differing in parameter lists — pay(int cents) and pay(double dollars) are overloads. The choice among overloads is made at compile time, from the argument types the compiler can see. Overriding is a subclass re-declaring the parent\u2019s exact signature with a new body, and the choice between parent and child versions is made at runtime, from the actual object. One sentence covers the pair: overloading changes the parameter list and compiles statically; overriding keeps the signature and dispatches dynamically. A useful corollary follows — changing only the return type is neither: same signature with an incompatible return is a compile error, and with a covariant return it is an override.',
      },
      { kind: 'heading', text: 'Dynamic Dispatch: The Runtime Decides' },
      {
        kind: 'para',
        text: 'Here is the mechanism the whole topic exists for. A variable has a declared type (what the compiler checks against); the object it references has a runtime type (what was actually constructed). When a line like account.computeInterest() executes, the compiler confirms only that the declared type offers the method — which concrete version runs is decided at runtime by the object\u2019s class. This is dynamic dispatch, and it is why polymorphism works: a loop over Account[] that holds SavingsAccount, CheckingAccount and plain Account objects calls a different computeInterest for each element with identical source code.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Set the hierarchy: class Shape has double area() returning 0; class Circle extends Shape with radius 2 and overrides area() to return Math.PI * 2 * 2; class Square extends Shape with side 3 and overrides area() to return 9.',
          'Declare polymorphically: Shape s = new Circle(2); — the declared type is Shape, the runtime type is Circle.',
          'Trace the call: s.area() — the compiler verifies Shape has area(); at runtime the object is a Circle, so the Circle body runs and the value is about 12.57.',
          'Swap the object: s = new Square(3); — identical line s.area() now runs the Square body and returns 9.0. One call site, many behaviors: that is dispatch.',
          'Borrow the parent: if Square\u2019s area wanted the parent\u2019s contribution it would call super.area() inside its own body — the one-line escape hatch back to the overridden version.',
          'Check the trap: if Square had written area(double scale) instead, nothing overrides — s.area() would call Shape\u2019s version and return 0. The @Override annotation would have failed the build and saved you.',
        ],
      },
      { kind: 'heading', text: 'Overriding the Object Class: toString and equals' },
      {
        kind: 'para',
        text: 'Every class inherits from Object, and two of its methods are designed to be overridden. toString() decides how the object prints; the inherited default is the class name, an @ and a hash code — technically informative, practically useless. Overriding it to return something like "SavingsAccount[balance=500.00, rate=0.02]" makes debugging and logging readable, and println calls it automatically. equals(Object o) decides when two references point at equal content; the inherited default is reference identity — the same test as the == operator. Overriding it replaces identity with a content test you define: same class, corresponding fields equal.',
      },
      {
        kind: 'para',
        text: 'The equals contract is examinable and worth memorizing: it must be reflexive (x.equals(x) is true), symmetric (x.equals(y) implies y.equals(x)), transitive (x.equals(y) and y.equals(z) imply x.equals(z)), consistent (repeated calls on unchanged objects agree), and x.equals(null) is always false. The classic implementation bugs are symmetric breakage — comparing your class against a subclass with extra fields — and forgetting to accept Object as the parameter type; writing equals(SavingsAccount s) overloads instead of overrides and the contract quietly never applies. Whenever you override equals to a content test, override hashCode consistently with it: two objects equal under equals must return the same hash code, or hash-based collections misplace them.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'override', def: 'A subclass method with the same signature as an inherited method, whose body replaces the parent\u2019s for the objects of the subclass.' },
          { term: '@Override', def: 'The annotation that makes the compiler verify a genuine override exists — the standard protection against signature typos that silently overload instead.' },
          { term: 'dynamic dispatch', def: 'The runtime selection of which override to execute, by the actual class of the object rather than the declared type of the variable.' },
          { term: 'polymorphism', def: 'The design capability dynamic dispatch enables: one call site behaving differently per object, letting code be written against parent types.' },
          { term: 'covariant return', def: 'An override\u2019s return type that is a subclass of the parent\u2019s return type — permitted, and the only allowed return-type variation.' },
          { term: 'method hiding', def: 'A same-signature static method in a subclass; it shadows rather than overrides, and resolves by reference type instead of runtime type.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A subclass declares a method with the same name but a different parameter list than the parent\u2019s. What happened?',
            options: ['A valid override', 'An overload, not an override — the parent version still runs', 'A compile error in all cases', 'Method hiding'],
            answer: 1,
            explain: 'Changing the parameter list creates an overload; only an identical signature overrides, which is why the @Override annotation would flag the mistake at compile time.',
          },
          {
            q: 'Shape s = new Circle(2); s.area() executes. Which area() runs and why?',
            options: ['Shape\u2019s, because s is declared as Shape', 'Circle\u2019s, because dispatch follows the object\u2019s runtime type', 'Both, in parent-then-child order', 'Neither — the call is illegal'],
            answer: 1,
            explain: 'The compiler checks the declared type for the method\u2019s existence; the runtime type chooses the body. That two-step is dynamic dispatch.',
          },
          {
            q: 'Which visibility change is legal in an override?',
            options: ['public to private', 'protected to public', 'private to protected on an overridden private method', 'Any change in either direction'],
            answer: 1,
            explain: 'Visibility may widen but never narrow; and a private method is never inherited, so it cannot be overridden at all.',
          },
          {
            q: 'A correct equals(Object o) override must also…',
            options: ['return true for null arguments', 'keep hashCode consistent: equal objects get equal hash codes', 'be declared static', 'compare classes with instanceof only'],
            answer: 1,
            explain: 'The equals-hashCode contract requires equal objects to share a hash code; missing it corrupts hash-based collections. And x.equals(null) must be false, never true.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read Java Objects and Classes: Constructors, Methods and Inheritance for the construction and super() machinery this lesson builds on, then Java Arrays and ArrayLists to see polymorphic loops and dynamic dispatch working across collections. The boolean-logic lesson covers the expressions you will write inside overridden equals methods.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'cs-java-objects-classes-methods',
    title: 'Java Objects and Classes: Constructors, Methods and Inheritance',
    domain: 'Computing & AI',
    field: 'Programming',
    branch: 'Object-Oriented Java',
    tier: 'core',
    concepts: [
      'Objects bundle state and behaviour',
      'Instantiation with new and constructors',
      'Instance variables versus local variables',
      'Accessor and mutator conventions',
      'Overloading and signatures',
      'Subclass constructors and super references',
      'Encapsulation and private state',
      'Static versus instance members',
    ],
    words: 1472,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Java is an object-oriented language in a precise sense: every value lives either in one of eight primitive types or inside an object, and an object is a bundle of state (its instance variables) plus behaviour (its methods), described by a class. A class is the blueprint; objects are the buildings raised from it, each with its own copy of the state. Creating an object is called instantiation, performed with the new operator followed by a constructor — a special block of code whose job is to put the new object into a valid initial state. This lesson covers the lifecycle: declaring classes, writing and overloading constructors, exposing state safely through accessors and mutators, and extending classes with subclasses whose constructors reach back to their parents through super.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The object lifecycle is the single most examined strand of introductory Java: create an object, call its methods, trace what each line prints. Nearly every tracing question tests one of three mechanics — which constructor ran, what the instance variables hold after the call, and which version of an inherited method or constructor executed. Fluency here is fluency in the exam.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Class', def: 'The template describing the state (instance variables) and behaviour (methods) of a kind of object. The class itself is not the data; it is the description from which data-carrying instances are built.' },
          { term: 'Instantiation', def: 'The act of creating an object: the keyword new allocates memory on the heap, runs a constructor, and returns a reference to the finished object. A declaration like Student s; holds only a reference — no object exists until new runs.' },
          { term: 'Constructor', def: 'A block with the same name as the class and no return type, run automatically at instantiation. If a class defines no constructor, the compiler supplies a default (no-argument) one; once any constructor is defined, the default disappears — a classic trap when a subclass calls super() expecting a no-argument parent constructor.' },
          { term: 'Accessor (getter)', def: 'A method that returns the value of an instance variable, conventionally named getSomething. Accessors let a class keep its fields private while still exposing state in a controlled way — the public face of encapsulation.' },
          { term: 'Mutator (setter)', def: 'A method that changes an instance variable, conventionally named setSomething. Because the mutator is code, it can validate: a setAge that rejects negative values turns a dangerous public field into a guarded one.' },
          { term: 'Method signature and overloading', def: 'A signature is the method name plus the ordered list of parameter types. Two methods in one class may share a name if their signatures differ — overloading. The return type is not part of the signature, so two methods differing only in return type cannot coexist.' },
          { term: 'super', def: 'The reference to the parent-class part of an object. super(...) as the first statement of a constructor invokes a parent constructor; super.method() invokes the parent version of an overridden method. If omitted, the compiler inserts a no-argument super() call automatically.' },
        ],
      },
      {
        kind: 'para',
        text: 'Encapsulation is the design rule that organises all of this: keep instance variables private and reach them only through public accessors and mutators. The payoff is control — the class can change how it stores data without breaking every user, validate every mutation in one place, and maintain invariants such as "balance never goes below zero". Direct public fields offer none of this, which is why style guides and exams alike treat private fields with getters and setters as the default shape of a well-formed class, and treat a public field as a smell that must be justified.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'A BankAccount class, then a subclass',
        steps: [
          'class BankAccount { private double balance; public BankAccount(double opening) { balance = opening; } public double getBalance() { return balance; } public void deposit(double amt) { if (amt > 0) { balance += amt; } } }',
          'The field is private, so balance = 50 outside the class will not compile; the only legal mutation runs through deposit, which guards against nonsense amounts. Encapsulation is the guard, not the keyword.',
          'BankAccount a = new BankAccount(100); runs the one defined constructor. There is no no-argument constructor — new BankAccount() would be a compile error, because defining any constructor removed the default.',
          'class SavingsAccount extends BankAccount { private double rate; public SavingsAccount(double opening, double r) { super(opening); rate = r; } }',
          'The subclass constructor must initialise both parts. super(opening) as the first statement builds the parent part; without it the compiler inserts super() — which fails to compile here because BankAccount has no no-argument constructor. This exact chain is a favourite exam question.',
          'SavingsAccount s = new SavingsAccount(500, 0.02); s.getBalance() returns 500 through the inherited accessor — the subclass reuses the parent behaviour unless it overrides it.',
        ],
      },
      {
        kind: 'para',
        text: 'Static members belong to the class rather than to any instance: a static counter incremented in the constructor counts every object ever built, while an instance counter counts one. The same split applies to methods — a static utility can run without any object at all, but it cannot touch instance variables, because there is no particular object whose variables it would mean. Instance methods, by contrast, always run against an implicit object, which is why they can read and write that object\'s private state freely. Mixing the two — calling instance methods from a static context such as the main method without creating an object — produces one of the most common beginner compile errors.',
      },
      {
        kind: 'para',
        text: 'References are the other half of the mental model. A variable of object type holds a reference, not the object itself, so assigning it copies the address, not the state: two variables then point at one object, and a mutation through either is visible through both. Comparison reflects this — the equality operator tests whether two references point at the same object, while the equals method (properly overridden) tests whether two objects have the same content. Storing objects in arrays or collections stores references, which is why aliasing bugs and null-pointer exceptions dominate debugging in the first months of Java.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A class defines only the constructor Book(String t). Which statement is true?',
            options: [
              'new Book() compiles, using the default constructor',
              'new Book() does not compile, because defining a constructor removed the default',
              'new Book("M") and new Book() both compile',
              'The class cannot be instantiated at all',
            ],
            answer: 1,
            explain: 'The compiler supplies a no-argument default only when the class defines no constructors of its own. Defining Book(String t) removes it, so the no-argument call no longer exists.',
          },
          {
            q: 'Why make instance variables private and provide accessors and mutators instead of public fields?',
            options: [
              'It makes the program run faster',
              'It lets the class validate changes and later change its internal representation without breaking users',
              'Private fields use less memory',
              'Java forbids public fields',
            ],
            answer: 1,
            explain: 'Encapsulation buys control: validation in one place and freedom to redesign internals. The other options are simply false.',
          },
          {
            q: 'class B extends A { public B(int x) { /* body */ } } — given that A defines only the constructor A(int y), the situation is:',
            options: [
              'fine: the compiler inserts super(), which matches',
              'a compile error: the inserted super() finds no no-argument parent constructor',
              'fine: constructors are not inherited but also not required',
              'a runtime error only when B is instantiated',
            ],
            answer: 1,
            explain: 'With no explicit super(...) call, the compiler inserts super() as the first statement — and A has no no-argument constructor to match, so compilation fails. The fix is calling super(y) explicitly.',
          },
          {
            q: 'Which pair of method declarations is legal overloading in one class?',
            options: [
              'int f(int x) and double f(int x)',
              'int f(int x) and int f(double x)',
              'int f(int x) and the same int f(int x) written twice',
              'static int f(int x) and int f(int x)',
            ],
            answer: 1,
            explain: 'Overloading requires different parameter lists. Options differing only in return type, or only in the static keyword, share a signature and cannot coexist.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Four recurring errors: forgetting that declaring a constructor kills the default one; forgetting super(...) must be the first statement of a subclass constructor; confusing the equality operator (same object?) with equals (same content?); and mutating an object through a second reference while believing the first is unchanged. In tracing questions, draw the objects and their references — the arrow diagram answers most of the question before any code is read twice.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Next: Traversing Java Arrays, 2D Arrays and ArrayLists — storing and walking collections of these objects.',
          'Then: Equivalent Boolean Expressions in Java — the condition logic used inside mutators and validation.',
          'Reference reading: Eck, Introduction to Programming Using Java, Chapter 5 (Objects and Classes), free at math.hws.edu/javanotes.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Classes describe; objects instantiated with new hold the state.',
          'Constructors put objects into valid initial states; defining any removes the default.',
          'Private fields plus accessors and mutators implement encapsulation with validation.',
          'Overloading varies the parameter list; the return type is not part of the signature.',
          'Subclass constructors build the parent part first, via super(...), explicitly or inserted.',
        ],
      },
    ],
  },
  {
    id: 'cs-java-arrays-and-arraylists',
    title: 'Traversing Java Arrays, 2D Arrays and ArrayLists',
    domain: 'Computing & AI',
    field: 'Programming',
    branch: 'Data Handling in Java',
    tier: 'core',
    concepts: [
      'Arrays: fixed length, indexed from zero',
      'Index-based for loops versus for-each',
      'ArrayList: growable and reference-based',
      'Wrapper classes and autoboxing',
      'Insertion and removal shift elements',
      '2D arrays as arrays of arrays',
      'Row-major traversal and nested loops',
      'Off-by-one and bounds errors',
    ],
    words: 1507,
    readMins: 8,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Programs rarely process one value at a time, and Java offers two collections for the common cases. The array is the primitive: a fixed-length block of elements of one type, accessed by index from zero, whose length never changes after creation. The ArrayList is the library class: a growable, shrinkable list of object references with methods to add, remove and fetch by position, built on an array behind the scenes. Choosing between them — and traversing each correctly with index loops, for-each loops and nested loops for the two-dimensional case — is the working skill this lesson builds, together with the small catalogue of algorithms every course assumes: summing, counting, finding the maximum, and reversing in place.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Traversal questions are the most reliable points on the paper: given this loop, what does it print; given this task, which loop is legal; given this ArrayList modification, why does the loop skip an element. The rules are small, the traps are predictable — bounds, mutation during iteration, row-column confusion — and every one of them is demonstrable in a five-line fragment.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Array creation and length', def: 'int[] a = new int[10]; makes ten zeros; an initialiser list int[] b = {3, 1, 4}; makes three. The field a.length gives the fixed size — no parentheses, unlike the String method. Valid indices run from 0 to length minus 1, and touching a.length throws ArrayIndexOutOfBoundsException.' },
          { term: 'Index-based for loop', def: 'The general traversal: for (int i = 0; i < a.length; i++) { ... a[i] ... }. It is the only choice that can change positions, compare neighbours, or stop early. The classic bounds mistake is writing i <= a.length and running off the end.' },
          { term: 'For-each loop', def: 'for (int x : a) { ... } visits every element read-only. It cannot assign new values to the array slots — the loop variable x is a copy — and it hides the index, which is precisely why it is safe from bounds errors but useless for repositioning. For object arrays, the copy is of the reference, so calling mutating methods on x does affect the object.' },
          { term: 'ArrayList basics', def: 'ArrayList<String> list = new ArrayList<String>(); holds only object types, so primitive int becomes Integer via autoboxing. Core methods: add(e), get(i), set(i, e), remove(i), size(). Note the mismatch with arrays: the method is size(), not length.' },
          { term: 'Shifting on insert and remove', def: 'add(i, e) inserts at position i and slides later elements right; remove(i) slides them left into the gap. This is why removing while iterating forward skips the element after the removed one — the list renumbers as you walk — and why removal in a loop demands either walking backwards or adjusting the index after each removal.' },
          { term: '2D array', def: 'int[][] grid = new int[3][4]; is really an array of three array references, each of length four. Traversal needs nested loops: the outer loop indexes rows (grid.length), the inner indexes columns (grid[r].length). Rows can even have different lengths — jagged arrays — so always take the inner length from the row itself.' },
        ],
      },
      {
        kind: 'para',
        text: 'The standard one-pass algorithms are worth memorising as patterns, not as code to recall. Sum: initialise a total before the loop, add inside, use after. Count: same shape with a conditional increment. Maximum: initialise best to the first element, not to zero — the zero initialisation silently breaks on arrays that are all negative. Reverse in place: swap symmetric pairs from both ends, looping only to the middle; a second array is acceptable but the in-place swap is the version examiners ask for. Each pattern runs equally over arrays and ArrayLists with only the access syntax changed — a[i] versus list.get(i).',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'One array, one list, one grid — three traversals',
        steps: [
          'int[] a = {4, 1, 7, 1}; — sum with for (int i = 0; i < a.length; i++) { total += a[i]; } gives 13. The <= variant throws an exception after the last element.',
          'Maximum correctly: int best = a[0]; then for each x in a, if (x > best) best = x; gives 7. Starting best at 0 would give 7 here but fails on {-5, -2}, where the answer must be -2.',
          'ArrayList<Integer> list = new ArrayList<Integer>(); list.add(4); list.add(1); list.add(7); — remove all 1s by walking backwards: for (int i = list.size() - 1; i >= 0; i--) { if (list.get(i) == 1) { list.remove(i); } }. Walking forward would skip the second 1: after the first removal, the list renumbers and the loop index jumps past it.',
          'Autoboxing detail: list.add(4) converts the primitive 4 into an Integer object automatically; list.get(0) unboxes it back. Comparing with equality on Integers beyond 127 is reference comparison — use equals or unbox first, another classic trace trap.',
          'int[][] g = {{1, 2, 3}, {4, 5}, {6, 7, 8, 9}}; — jagged. Sum all elements with for (int r = 0; r < g.length; r++) { for (int c = 0; c < g[r].length; c++) { total += g[r][c]; } } = 45. Note g[r].length, not a fixed 3: the second row has two columns.',
          'Row-major order means row by row, left to right — the order the nested loop visits elements, and the order questions assume when they ask "what is printed".',
        ],
      },
      {
        kind: 'para',
        text: 'Choosing the structure is itself an examined judgement. Arrays win when the size is fixed and index arithmetic matters — matrices, lookup tables, the board of a game. ArrayLists win when the size changes or the algorithm is dominated by adding and removing, because shifting on remove is O(n) but the code is simple and correct; the same shift written by hand on an array is a bug farm. Neither is a map: searching an unsorted structure is linear either way, which is exactly the observation the hash-table lesson builds on — and the reason that later lesson exists.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'int[] a = {2, 4, 6}; Which loop safely prints every element?',
            options: [
              'for (int i = 0; i <= a.length; i++) { print(a[i]); }',
              'for (int i = 0; i < a.length; i++) { print(a[i]); }',
              'for (int x : a) { x = 0; } to print zeros',
              'for (int i = 1; i < a.length; i++) { print(a[i]); }',
            ],
            answer: 1,
            explain: 'Strict less-than against a.length visits indices 0..2 exactly. The <= version throws on i = 3; the for-each assigns a copy and prints nothing; the version starting at 1 silently drops the first element.',
          },
          {
            q: 'list contains [3, 1, 1, 5]. for (int i = 0; i < list.size(); i++) { if (list.get(i) == 1) { list.remove(i); } } — what is the result?',
            options: [
              '[3, 5] — both 1s removed',
              '[3, 1, 5] — the second 1 is skipped',
              'an exception is thrown',
              '[3, 1, 1, 5] — nothing removed',
            ],
            answer: 1,
            explain: 'After removing the 1 at index 1, elements shift left and the loop increments to index 2 — which now holds 5. The skipped 1 is the classic mutation-during-iteration bug; walk backwards to fix it.',
          },
          {
            q: 'A 2D array g has 3 rows and 4 columns. Which expression is the number of elements in row 1?',
            options: ['g.length', 'g[1].length', 'g.length[1]', 'g[0].length only if the grid is square'],
            answer: 1,
            explain: 'g is an array of row arrays: g.length counts rows, g[1].length counts the columns of row 1. Taking inner lengths from the row is the only version that also works for jagged arrays.',
          },
          {
            q: 'Why does a for-each loop fail to zero an int array with for (int x : a) { x = 0; }?',
            options: [
              'for-each loops cannot be used on int arrays',
              'x is a copy of the element; assigning to it cannot change the array',
              'The array must be sorted first',
              'It works, but only for arrays of length 1',
            ],
            answer: 1,
            explain: 'The loop variable receives a copy of each value; writing to the copy is invisible outside. To modify slots, use an index loop with a[i] = 0 on the left of an assignment.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The big five: <= in array bounds; removing from an ArrayList while looping forward; initialising a maximum at zero instead of the first element; hard-coding an inner width instead of using the row\'s own length; and forgetting size() versus length versus length() — three spellings for three kinds of container, and questions probe exactly this. When a trace question shows a loop plus a mutation, simulate the indices on paper: the bug is always visible in the second iteration.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: Java Objects and Classes — what the ArrayList actually stores: references.',
          'Next: Equivalent Boolean Expressions in Java — the conditions guarding every counting loop.',
          'Then: Hash Tables and Collision Resolution — what it takes to find an element without scanning.',
          'Reference reading: Eck, Introduction to Programming Using Java, Chapter 7 (Arrays, ArrayLists and Records).',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Arrays are fixed-length and primitive-fast; ArrayLists grow and shift automatically.',
          'Index loops for mutation and comparison; for-each for read-only visits.',
          'Removal during forward iteration skips elements — walk backwards instead.',
          'A 2D array is an array of arrays; take inner lengths from the row.',
          'length, length() and size() belong to arrays, Strings and ArrayLists respectively.',
        ],
      },
    ],
  },
  {
    id: 'cs-java-boolean-logic-expressions',
    title: 'Equivalent Boolean Expressions in Java',
    domain: 'Computing & AI',
    field: 'Programming',
    branch: 'Boolean Logic',
    tier: 'core',
    concepts: [
      'The boolean operators: not, and, or',
      'Truth tables as the ground truth',
      'De Morgan\u2019s laws for negating compounds',
      'Distributing and over or',
      'Double negation and simplification',
      'Short-circuit evaluation',
      'Testing equivalence by exhaustive cases',
    ],
    words: 1272,
    readMins: 6,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Two conditions written differently can be the same condition, and introductory Java exams love to test exactly that recognition: which expression is equivalent to this one, and which rewrite of it is safe. The machinery is small — three operators, not written !, and written &&, or written || — plus a set of algebraic laws inherited from logic itself. The ground truth is the truth table: enumerate every combination of the variables and check that the two expressions agree on all of them. Equivalence in Java is case-by-case identity, not plausibility, and the fastest students are the ones who verify with a table rather than by feel.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Equivalence questions are pure pattern recognition with a verifiable answer, which makes them the cheapest reliable marks in the exam. The same laws govern the conditions inside every loop and if from the other lessons — negating a loop guard correctly is De Morgan in action — and getting them wrong produces programs that run happily on the wrong cases.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Truth table', def: 'The complete list of results an expression produces for every combination of inputs. Two expressions are equivalent exactly when their columns match on every row. With n variables there are 2 to the power n rows — three variables means eight cases, always checkable in an exam if not by hand then by discipline.' },
          { term: 'De Morgan for and', def: 'Not (a && b) is equivalent to !a || !b. Refusing both conditions — not hungry and not tired — is the same as rejecting each separately. Negating an and yields an or of the negated parts; the negation distributes and flips the connective.' },
          { term: 'De Morgan for or', def: 'Not (a || b) is equivalent to !a && !b. Rejecting a or b means accepting neither: the negation of an or is an and of the negations. These two laws answer nearly every "which is equivalent" question that contains a negated compound.' },
          { term: 'Distribution', def: 'a && (b || c) expands to (a && b) || (a && c), and a || (b && c) expands to (a || b) && (a || c). The second is the one that surprises: and-or distributes both ways in logic, unlike arithmetic multiplication over addition only.' },
          { term: 'Double negation', def: 'Not not a is just a. Cancelling pairs of negations is the first simplification to look for, and skipping it is a common cause of choosing a plausible but wrong option.' },
          { term: 'Short-circuit evaluation', def: 'Java evaluates && and || lazily: if the left operand of && is false the right side is never run, and if the left operand of || is true the right side is skipped. Guard patterns such as i < a.length && a[i] > 0 depend on this order — reversed, the guard itself throws.' },
        ],
      },
      {
        kind: 'para',
        text: 'A compact procedure settles any equivalence claim. Build the truth table for both expressions over the same variables. Compare row by row; one mismatch refutes equivalence, full agreement proves it. For compound conditions, simplify first with the laws — cancel double negations, push negations inward with De Morgan, then distribute if it makes the shapes comparable. In multiple-choice settings the method doubles as a checker: rather than trusting intuition about which option looks right, test the suspicious option on the two or three rows most likely to distinguish the candidates — the rows where the variables disagree with each other.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'From negated compound to clean equivalent',
        steps: [
          'Claim to check: !(x > 0 && y > 0) is equivalent to x <= 0 || y <= 0.',
          'Apply De Morgan for and: the negation of (a && b) is !a || !b, so the expression becomes !(x > 0) || !(y > 0).',
          'Simplify each negated comparison: !(x > 0) is x <= 0, and !(y > 0) is y <= 0 — watch that the negation of strictly greater is less-than-OR-equal, not just less-than.',
          'Result: x <= 0 || y <= 0. Spot-check one boundary row: x = 0, y = 5. Original: not (false and true) is true. Rewrite: true or false is true. Match.',
          'A second claim: !(a || !b) equivalent to !a && b. De Morgan for or gives !a && !(!b), and the double negation cancels: !a && b. Match on all rows.',
          'Trap row for the road: !(x != 5) is x == 5 — negation of not-equals is equals, with no little inequality left over.',
        ],
      },
      {
        kind: 'para',
        text: 'Short-circuit evaluation is the behavioural half of the topic: equivalence of results does not always mean equivalence of side effects. The expressions x != 0 && 10 / x > 1 and 10 / x > 1 && x != 0 agree wherever both are defined, but the second divides by zero when x is 0 and the first never does — the guard is consumed before the risky operand is reached. The same asymmetry applies to calls with side effects placed after short-circuit points. An exam question can therefore be subtle in exactly one way: the two expressions are logically equivalent, yet only one is safe to execute, and the reasoning is about evaluation order, not truth.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which expression is equivalent to !(a && !b)?',
            options: ['!a && b', '!a || b', 'a || !b', 'a && b'],
            answer: 1,
            explain: 'De Morgan for and: !(a && !b) = !a || !(!b), and the double negation cancels to !a || b. Option 1 forgets to flip the connective.',
          },
          {
            q: '!(x > 3 || y == 2) is equivalent to:',
            options: [
              'x <= 3 && y != 2',
              'x < 3 && y != 2',
              'x <= 3 || y != 2',
              'x > 3 && y == 2',
            ],
            answer: 0,
            explain: 'De Morgan for or negates each part and joins with and; the negation of x > 3 is x <= 3 (boundary included) and of y == 2 is y != 2.',
          },
          {
            q: 'i < a.length && a[i] > 0 is preferred over a[i] > 0 && i < a.length because:',
            options: [
              'the two are not logically equivalent',
              'short-circuit evaluation checks the bound before the indexed access',
              'the second form does not compile',
              'and evaluates its right side first',
            ],
            answer: 1,
            explain: 'Both are equivalent as truth functions, but only the first order guarantees the array access never happens with an out-of-range index: the failed guard short-circuits before the risky operand.',
          },
          {
            q: 'How many rows does the truth table of a three-variable expression contain?',
            options: ['3', '6', '8', '9'],
            answer: 2,
            explain: 'Two possibilities per variable, three variables: two to the third power equals 8 rows. Exhaustive checking over all 8 is the definition of equivalence.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The classic errors cluster at boundaries and connectives. Negating x > 3 as x < 3 drops the equality case — it must be x <= 3. Negating an and as another and, or an or as another or, ignores the connective flip that De Morgan demands. And trusting "looks similar" over the table: two expressions can agree on five rows out of six and still be different conditions, and the exam chooses the sixth row on purpose.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: Java Objects and Classes — the conditions used inside mutators and constructors.',
          'Next: Traversing Java Arrays, 2D Arrays and ArrayLists — guards and loop conditions in context.',
          'Revision cue: rewrite every negated compound you meet this week using De Morgan, then verify one boundary row by hand.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Equivalence is truth-table identity, checked case by case, not judged by appearance.',
          'De Morgan: negating a compound flips the connective and negates each part.',
          'Negating a strict comparison includes the boundary: > becomes <=.',
          'Distribution works in both directions over the two connectives.',
          'Short-circuit order matters: guards go first, side effects go last.',
        ],
      },
    ],
  },
]

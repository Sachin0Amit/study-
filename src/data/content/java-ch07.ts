import type { SectionContent } from '../library'

/* ============================================================================
   Core Java Twelfth Edition master study content — Generic Programming
   Chapter 7: sections 7.1 to 7.4. Based on Horstmann Core Java Volume One,
   Chapter 8: type parameters, wildcards, erasure, and generic API design.
   ============================================================================ */

export const javaCh07Content: SectionContent[] = [
  /* ---------------- 7.1 ---------------- */
  {
    sectionId: 'java-ch7-s1',
    readingTime: 8,
    intro: 'Type parameters turn one class or method into a whole family of type safe variants, which is exactly how Horstmann opens generic programming with the classic Pair example. This section defines generic classes, generic methods, and bounded type variables. It closes with the PECS rule that tells you when a producer may only be read and when a consumer may only be written.',
    objectives: [
      'Declare generic classes and generic methods with correct type parameter syntax',
      'Apply upper bounds such as T extends Comparable to constrain type variables',
      'Use the PECS rule to choose between producer and consumer type signatures',
    ],
    concepts: [
      {
        term: 'Generic class with a type parameter',
        kind: 'definition',
        statement: 'A **generic class** declares one or more placeholders such as `Pair<T>` so the same code works for many element types with full compile time checking.',
        detail: 'Write Pair of String for strings and Pair of Employee for employees. The compiler rejects a misplaced type at the call site instead of letting a bad cast fail at runtime.',
      },
      {
        term: 'Generic method with its own type variable',
        kind: 'method',
        statement: 'A **generic method** introduces its type variable before the return type, as in `static T middle(T[] values)`, so callers never repeat the type argument.',
        detail: 'Type inference fills in T from the arguments. Explicit type arguments are legal but almost never needed in ordinary calls.',
      },
      {
        term: 'Bounded type variables',
        kind: 'notation',
        statement: 'An **upper bound** such as `T extends Comparable<T>` permits only type arguments that satisfy the bound, which unlocks bound specific operations like compareTo inside the body.',
        detail: 'The keyword extends covers both class and interface bounds. Multiple bounds are joined with an ampersand, with at most one class bound first.',
      },
      {
        term: 'PECS producer versus consumer rule',
        kind: 'insight',
        statement: 'The **PECS rule** says a producer that you only read from takes `? extends T`, while a consumer that you only write to takes `? super T`.',
        detail: 'Reading from an extends wildcard is safe because every element is a T. Writing to a super wildcard is safe because every T fits the unknown supertype.',
      },
      {
        term: 'Diamond inference at construction',
        kind: 'method',
        statement: 'The **diamond operator** in `new Pair<>(first, second)` copies the type arguments from the left hand side so the construction stays short without losing safety.',
        detail: 'Omit the diamond and you get a raw type with an unchecked warning. Repeat the arguments and the line only gets longer with no extra checking.',
      },
    ],
    figures: [
      {
        caption: 'One generic Pair class yields many concrete instantiations such as Pair of String and Pair of Employee.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Generic Pair class instantiated for String and Employee"><rect x="250" y="30" width="220" height="86" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="58" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="15" font-weight="700" fill="currentColor">Pair of T</text><text x="360" y="80" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">first : T</text><text x="360" y="100" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">second : T</text><line x1="300" y1="116" x2="170" y2="190" stroke="currentColor" stroke-width="1.6"/><polygon points="170,190 184,184 180,196" fill="currentColor"/><line x1="420" y1="116" x2="550" y2="190" stroke="currentColor" stroke-width="1.6"/><polygon points="550,190 540,196 536,184" fill="currentColor"/><rect x="70" y="190" width="200" height="86" fill="none" stroke="currentColor" stroke-width="2"/><text x="170" y="218" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">Pair of String</text><text x="170" y="240" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">first : String</text><text x="170" y="260" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">second : String</text><rect x="450" y="190" width="200" height="86" fill="none" stroke="currentColor" stroke-width="2"/><text x="550" y="218" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">Pair of Employee</text><text x="550" y="240" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">first : Employee</text><text x="550" y="260" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">second : Employee</text><text x="360" y="318" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">One class body, checked separately for every type argument</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'A reusable Pair holder for buddies',
        problem: 'Store two related objects of the same type, such as two buddy names, without writing a separate class for every element type.',
        steps: [
          { label: 'Step 1: Declare the placeholder', text: 'Declare one class with a type variable T and use T for the fields, constructor, and accessors:\n```java\npublic class Pair<T> {\n    private T first;\n    private T second;\n    public Pair(T first, T second) {\n        this.first = first;\n        this.second = second;\n    }\n    public T getFirst() { return first; }\n    public T getSecond() { return second; }\n    public void setFirst(T value) { first = value; }\n}\n```\nEvery use of T is checked against the single type argument chosen at construction.' },
          { label: 'Step 2: Instantiate for strings', text: 'Create a Pair of String with the diamond operator so the compiler records the choice once:\n```java\nPair<String> buddies = new Pair<>("Ada", "Grace");\nString first = buddies.getFirst();\n```\nNo cast is needed because getFirst is known to return String.' },
          { label: 'Step 3: Confirm the rejection', text: 'Try storing the wrong type and watch the compiler refuse, which is the whole point of the parameter:\n```java\nbuddies.setFirst("Linus");\n```\nA call such as setFirst with an Integer argument fails to compile, so the error surfaces early.' },
        ],
        result: 'One Pair class safely serves every element type, with mistakes caught at compile time.',
      },
      {
        title: 'Minimum and maximum with a bounded method',
        problem: 'Find the smallest and largest element of an array whose elements can be compared, and return both in a single Pair.',
        steps: [
          { label: 'Step 1: Bound the type variable', text: 'Require comparability so compareTo is available inside the body:\n```java\npublic static <T extends Comparable<T>> Pair<T> minmax(T[] values) {\n    if (values == null || values.length == 0) { return null; }\n    T min = values[0];\n    T max = values[0];\n    for (int i = 1; i < values.length; i++) {\n        if (values[i].compareTo(min) < 0) { min = values[i]; }\n        if (values[i].compareTo(max) > 0) { max = values[i]; }\n    }\n    return new Pair<>(min, max);\n}\n```\nThe bound guarantees that every T understands comparison.' },
          { label: 'Step 2: Call with inference', text: 'Pass a String array and let inference choose T as String:\n```java\nString[] words = {"pear", "apple", "apricot"};\nPair<String> ends = minmax(words);\n```\nNo explicit type argument is needed at the call site.' },
          { label: 'Step 3: Read both answers', text: 'Unpack the result and verify the ordering on the sorted array:\n```java\nSystem.out.println(ends.getFirst() + " to " + ends.getSecond());\n```\nThe output runs from apple to pear, confirming the bound did its job.' },
        ],
        result: 'The bounded method returns apple to pear for the sample array.',
      },
    ],
    keyTakeaways: [
      'Generic classes and methods parameterize code with placeholders checked at compile time.',
      'Upper bounds such as T extends Comparable unlock operations inside generic bodies.',
      'PECS assigns extends to producers you read and super to consumers you write.',
      'The diamond operator keeps construction short without falling back to raw types.',
    ],
    quiz: [
      {
        q: 'Why is Pair of Manager not a subtype of Pair of Employee?',
        options: [
          'Because Manager is not an Employee in this hierarchy',
          'Because generic types are invariant, so the type arguments must match exactly',
          'Because Pair stores primitives instead of references',
          'Because subtyping only works for arrays, never for classes',
        ],
        answer: 1,
        explanation: 'Step 1: Recall that invariance means Pair of Manager and Pair of Employee are unrelated types. Step 2: Allowing the assignment would let an Employee be stored into a Manager slot. Step 3: Wildcards exist precisely to express the safe readable supertype. Step 4: Therefore invariance is the correct reason.',
      },
      {
        q: 'Which declaration correctly bounds a type variable by comparability?',
        options: [
          'class Box<T super Comparable>',
          'static T max(T[] values) with no bound at all',
          'class Box<T implements Comparable>',
          'static <T extends Comparable<T>> T max(T[] values)',
        ],
        answer: 3,
        explanation: 'Step 1: Bounds use the keyword extends even for interfaces. Step 2: The bound must appear on the type variable before use. Step 3: Comparable needs its own type argument for a precise contract. Step 4: Only the fourth option satisfies all three requirements.',
      },
      {
        q: 'A method only reads employees from its pair parameter. Which signature is safe?',
        options: [
          'printBuddies with Pair of question mark extends Employee parameter',
          'printBuddies with raw Pair parameter and casts everywhere',
          'printBuddies with Pair of Object parameter for maximum generality',
          'printBuddies with Pair of question mark super Employee parameter',
        ],
        answer: 0,
        explanation: 'Step 1: Reading means the parameter is a producer. Step 2: PECS assigns extends to producers. Step 3: The extends wildcard accepts Pair of Manager and still yields Employee values. Step 4: Hence the extends signature is the safe choice.',
      },
      {
        q: 'What does the diamond in new Pair of empty diamond buy you?',
        options: [
          'It switches the class to dynamic typing for flexibility',
          'It erases all checking so legacy code keeps compiling',
          'It infers the type argument from context, keeping full static checking',
          'It creates a wildcard instance that accepts any later reassignment',
        ],
        answer: 2,
        explanation: 'Step 1: The diamond copies type arguments from the declaration. Step 2: The instance keeps its static type, unlike a raw type. Step 3: No cast is needed on later reads. Step 4: Therefore inference with safety is the right description.',
      },
    ],
  },
  /* ---------------- 7.2 ---------------- */
  {
    sectionId: 'java-ch7-s2',
    readingTime: 9,
    intro: 'Wildcards are the escape hatch that keeps generic types flexible without giving up safety, and Horstmann motivates them with the printBuddies and minmaxBonus examples. This section shows producer bounds with extends, consumer bounds with super, and the unbounded wildcard. It also explains wildcard capture, the helper method trick that recovers a name for an unknown type.',
    objectives: [
      'Read safely through extends wildcards in producer positions',
      'Write safely through super wildcards in consumer positions',
      'Apply capture helpers and unbounded wildcards where names are unavailable',
    ],
    concepts: [
      {
        term: 'Producer wildcard with extends',
        kind: 'definition',
        statement: 'A **producer wildcard** such as `Pair<? extends Employee>` stands for a pair of some unknown subtype, so reading yields `Employee` values while writing is rejected.',
        detail: 'Pass a Pair of Manager where a producer of Employee is expected. The compiler permits getFirst but rejects setFirst with any non null argument.',
      },
      {
        term: 'Consumer wildcard with super',
        kind: 'definition',
        statement: 'A **consumer wildcard** such as `Pair<? super Manager>` accepts writes of `Manager` objects while reads only promise `Object`, which is the mirror image of the producer case.',
        detail: 'A Pair of Employee or a Pair of Object both qualify as consumers of Manager. Horstmann minmaxBonus writes its two results through exactly this shape.',
      },
      {
        term: 'Unbounded wildcard',
        kind: 'notation',
        statement: 'The **unbounded wildcard** in `Pair<?>` means a pair of some unknown type, useful for operations like size or null clearing that never depend on the element type.',
        detail: 'It differs from a raw Pair because the compiler still tracks that a fixed but unknown type is involved. Only null can be written through it.',
      },
      {
        term: 'Wildcard capture with a helper',
        kind: 'method',
        statement: 'A **capture helper** is a generic method such as `swapHelper(Pair<T> p)` that gives the unknown wildcard a fresh name `T` so the body can both read and write consistently.',
        detail: 'Call the helper from the wildcard method and inference binds T to the captured type. Swapping the two elements of a Pair of unknown type is the canonical example.',
      },
      {
        term: 'Get and put principle',
        kind: 'insight',
        statement: 'The **get and put principle** restates PECS operationally: use `extends` when you only take values out and `super` when you only put values in, and demand an exact type when you do both.',
        detail: 'APIs that mix reads and writes, such as a full List interface, therefore keep exact type parameters instead of wildcards.',
      },
    ],
    figures: [
      {
        caption: 'PECS in one picture: extends producers are read, super consumers are written.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Producer extends read and consumer super write diagram"><rect x="60" y="120" width="180" height="120" fill="none" stroke="currentColor" stroke-width="2"/><text x="150" y="150" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">Source</text><text x="150" y="172" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">extends T</text><text x="150" y="194" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">read only</text><rect x="270" y="120" width="180" height="120" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="150" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">Method</text><text x="360" y="172" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">uses T values</text><text x="360" y="194" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">never stores T</text><rect x="480" y="120" width="180" height="120" fill="none" stroke="currentColor" stroke-width="2"/><text x="570" y="150" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">Sink</text><text x="570" y="172" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">super T</text><text x="570" y="194" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">write only</text><line x1="240" y1="160" x2="266" y2="160" stroke="currentColor" stroke-width="1.8"/><polygon points="266,160 256,154 256,166" fill="currentColor"/><line x1="454" y1="200" x2="476" y2="200" stroke="currentColor" stroke-width="1.8"/><polygon points="476,200 466,194 466,206" fill="currentColor"/><text x="255" y="140" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">get</text><text x="465" y="222" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">put</text><text x="360" y="300" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Producer extends, consumer super: direction decides the bound</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Printing buddy pairs of any employee subtype',
        problem: 'Print the two members of a pair that may hold managers, executives, or plain employees, without duplicating the method per rank.',
        steps: [
          { label: 'Step 1: Accept a producer', text: 'Declare the parameter as a producer of Employee so every subtype pair qualifies:\n```java\npublic static void printBuddies(Pair<? extends Employee> buddies) {\n    // producer-extends-pattern: read Employee values from any subtype pair\n    Employee first = buddies.getFirst();\n    Employee second = buddies.getSecond();\n    System.out.println(first.getName() + " and " + second.getName() + " are buddies.");\n}\n```\nReads are safe because each element is at least an Employee.' },
          { label: 'Step 2: Pass a subtype pair', text: 'Hand over a Pair of Manager, which is a subtype of the wildcard instantiation:\n```java\nManager ceo = new Manager("Ada", 100000, 2020, 1, 1);\nManager cfo = new Manager("Grace", 120000, 2019, 5, 3);\nPair<Manager> leaders = new Pair<>(ceo, cfo);\nprintBuddies(leaders);\n```\nThe exact Pair of Employee signature would have rejected this call.' },
          { label: 'Step 3: Respect the write ban', text: 'Note that storing through the wildcard is correctly forbidden:\n```java\nPair<? extends Employee> view = leaders;\nEmployee e = view.getFirst();\n```\nAny setFirst call with a non null argument fails compilation, so the manager pair cannot be corrupted.' },
        ],
        result: 'One method prints buddy pairs of every rank, reading safely through extends.',
      },
      {
        title: 'Collecting bonus extremes into a consumer pair',
        problem: 'Scan an array of managers and deposit the lowest and highest bonus earners into a caller supplied pair that may hold employees or plain objects.',
        steps: [
          { label: 'Step 1: Accept a consumer', text: 'Declare the result as a consumer of Manager so Pair of Employee and Pair of Object both qualify:\n```java\npublic static void minmaxBonus(Manager[] staff, Pair<? super Manager> result) {\n    // consumer-super-pattern: write Manager values into any supertype pair\n    if (staff.length == 0) { return; }\n    Manager min = staff[0];\n    Manager max = staff[0];\n    for (int i = 1; i < staff.length; i++) {\n        if (staff[i].getBonus() < min.getBonus()) { min = staff[i]; }\n        if (staff[i].getBonus() > max.getBonus()) { max = staff[i]; }\n    }\n    result.setFirst(min);\n    result.setSecond(max);\n}\n```\nWrites are safe because every Manager fits the unknown supertype.' },
          { label: 'Step 2: Supply an employee pair', text: 'Pass a Pair of Employee as the result container:\n```java\nManager ceo = new Manager("Ada", 100000, 2020, 1, 1);\nManager cfo = new Manager("Grace", 120000, 2019, 5, 3);\nManager[] team = { ceo, cfo };\nPair<Employee> outcome = new Pair<>(null, null);\nminmaxBonus(team, outcome);\n```\nThe super bound is what admits this wider container.' },
          { label: 'Step 3: Read back as objects', text: 'Retrieve the deposited managers through the only safe static type:\n```java\nObject first = outcome.getFirst();\nSystem.out.println(outcome.getFirst());\n```\nReads through a consumer yield Object, so downcast only after an instanceof check.' },
        ],
        result: 'Bonus extremes land in any supertype pair, written safely through super.',
      },
    ],
    keyTakeaways: [
      'Producer extends wildcards support reads and reject writes of non null values.',
      'Consumer super wildcards support writes while reads only promise Object.',
      'Unbounded wildcards suit type independent operations such as clearing to null.',
      'Capture helpers recover a name for an unknown type when reads and writes mix.',
    ],
    quiz: [
      {
        q: 'Which call is legal for printBuddies with Pair of question mark extends Employee?',
        options: [
          'Passing a Pair of String with two names',
          'Passing a raw Pair holding integers',
          'Passing a Pair of Manager with two managers',
          'Passing a Pair of Object with two objects',
        ],
        answer: 2,
        explanation: 'Step 1: The bound requires a subtype of Employee. Step 2: Manager qualifies but String and Object do not. Step 3: Raw types bypass checking and are not accepted practice. Step 4: Therefore only the Manager pair is legal.',
      },
      {
        q: 'Inside a method taking Pair of question mark extends Employee, what may setFirst accept?',
        options: [
          'Only null, since the exact subtype is unknown',
          'Any Employee, because reads already yield Employee',
          'Any Manager, because managers are employees',
          'Any Object, because everything is an Object',
        ],
        answer: 0,
        explanation: 'Step 1: The compiler knows only that the parameter is some subtype. Step 2: Neither Employee nor Manager is provably that exact type. Step 3: Null fits every reference type, so it stays legal. Step 4: Hence only null may be passed.',
      },
      {
        q: 'Why does minmaxBonus declare Pair of question mark super Manager?',
        options: [
          'So callers can pass Pair of Employee or Pair of Object as result containers',
          'So the method can read Managers out as precisely typed values',
          'So primitive manager ids can be stored without boxing',
          'So the result pair becomes immutable after the call',
        ],
        answer: 0,
        explanation: 'Step 1: The result parameter is written, making it a consumer. Step 2: Consumers take super bounds under PECS. Step 3: Both Employee and Object are supertypes of Manager. Step 4: Thus the super bound admits both containers.',
      },
      {
        q: 'What does a capture helper achieve for swapping a Pair of question mark?',
        options: [
          'It erases the wildcard so reflection can change the class',
          'It boxes both elements into Object arrays first',
          'It widens the wildcard to question mark extends Object automatically',
          'It binds the unknown type to a fresh T so reads and writes agree',
        ],
        answer: 1,
        explanation: 'Step 1: Direct swap through a wildcard cannot name the element type. Step 2: The generic helper introduces T for exactly that purpose. Step 3: Inference binds T to the captured wildcard. Step 4: Reads and writes then share one consistent type.',
      },
    ],
  },
  /* ---------------- 7.3 ---------------- */
  {
    sectionId: 'java-ch7-s3',
    readingTime: 7,
    intro: 'Generics exist only at compile time, and erasure explains every odd restriction that follows. This section traces how parameterized types become raw types plus casts, why bridge methods appear, and how legacy code interoperates. It ends with the concrete bans on primitives, instanceof tests, and generic array creation.',
    objectives: [
      'Explain erasure, bridge methods, and raw type interoperation',
      'Predict which generic operations the compiler must reject',
      'Convert legacy code to generics without unchecked warning surprises',
    ],
    concepts: [
      {
        term: 'Type erasure to the bound',
        kind: 'definition',
        statement: 'Erasure replaces each type variable by its bound, so the **erased form** of `Pair<T>` is a raw `Pair` holding `Object` fields, or holding the bound type when one is declared.',
        detail: 'The bytecode contains no trace of the type argument. All safety was established earlier by the compiler and preserved as inserted casts.',
      },
      {
        term: 'Bridge methods for overriding',
        kind: 'theorem',
        statement: 'A **bridge method** is a synthetic overload such as `setFirst(Object)` that forwards to `setFirst(String)`, keeping polymorphism intact after erasure.',
        detail: 'A subclass fixing T to String erases differently from its generic parent. The bridge preserves overriding so virtual dispatch still finds the right body.',
      },
      {
        term: 'Raw types and unchecked warnings',
        kind: 'notation',
        statement: 'A **raw type** like plain `Pair` opts out of checking, and every risky use earns an `unchecked` warning where heap pollution could follow.',
        detail: 'Assigning a parameterized Pair to a raw Pair is legal for legacy interoperation. The reverse assignment needs a cast and a warning you should eliminate.',
      },
      {
        term: 'Banned runtime type operations',
        kind: 'insight',
        statement: 'Tests such as `instanceof Pair<String>` and creations such as `new T()` are **rejected** because erasure leaves no type argument at runtime to test or construct.',
        detail: 'Use unbounded instanceof with a follow up cast, or pass an explicit Class token when the runtime type is genuinely needed.',
      },
      {
        term: 'No generic arrays or primitive arguments',
        kind: 'method',
        statement: 'Arrays of parameterized types like `new Pair<String>(10)` are **forbidden** since arrays enforce their component type at runtime while erasure has removed it.',
        detail: 'Prefer ArrayList of Pair of String for a checked resizable store. Box primitives as Integer or Double because type arguments must be reference types.',
      },
    ],
    figures: [
      {
        caption: 'Erasure pipeline: Pair of String compiles to raw Pair with casts, plus a bridge for overriding.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Type erasure from parameterized Pair to raw Pair with bridge"><rect x="40" y="90" width="190" height="130" fill="none" stroke="currentColor" stroke-width="2"/><text x="135" y="120" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">Source</text><text x="135" y="144" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Pair of String</text><text x="135" y="166" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">getFirst : String</text><text x="135" y="188" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">checked calls</text><rect x="265" y="90" width="190" height="130" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="120" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">Erasure</text><text x="360" y="144" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">raw Pair</text><text x="360" y="166" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">fields : Object</text><text x="360" y="188" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">inserted casts</text><rect x="490" y="90" width="190" height="130" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="120" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">Bridge</text><text x="585" y="144" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">setFirst Object</text><text x="585" y="166" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">forwards to</text><text x="585" y="188" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">setFirst String</text><line x1="230" y1="155" x2="261" y2="155" stroke="currentColor" stroke-width="1.8"/><polygon points="261,155 251,149 251,161" fill="currentColor"/><line x1="455" y1="155" x2="486" y2="155" stroke="currentColor" stroke-width="1.8"/><polygon points="486,155 476,149 476,161" fill="currentColor"/><text x="360" y="280" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Compile time types guide checks, runtime sees raw types plus casts</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Seeing heap pollution through a raw type',
        problem: 'Understand why assigning a parameterized pair to a raw pair is dangerous by watching a wrong typed store corrupt the original.',
        steps: [
          { label: 'Step 1: Alias through raw', text: 'Assign the checked pair to a raw reference, which the compiler permits with a warning:\n```java\nPair<String> names = new Pair<>("Ada", "Grace");\nPair raw = names;\n```\nThe raw alias forgets the String commitment.' },
          { label: 'Step 2: Pollute the heap', text: 'Store an Integer through the raw alias, bypassing the String check:\n```java\n// raw-alias-pattern: legacy raw access can pollute a checked generic\nraw.setFirst(42);\n```\nThis single call compiles with an unchecked warning and breaks the promise.' },
          { label: 'Step 3: Watch the delayed failure', text: 'Read through the original typed reference and meet the ClassCastException:\n```java\nString first = names.getFirst();\n```\nThe inserted cast to String fails at runtime, proving the corruption happened at the raw write.' },
        ],
        result: 'Raw aliases can smuggle wrong types past generics, failing later at the inserted cast.',
      },
      {
        title: 'Recovering runtime types with a Class token',
        problem: 'Build a correctly typed array at runtime even though new T is forbidden, by carrying the type explicitly.',
        steps: [
          { label: 'Step 1: Demand a type token', text: 'Accept a Class object that reifies the erased element type:\n```java\npublic static <T> T[] repeat(Class<T> type, T value, int count) {\n    // type-token-pattern: Class object carries the erased type at runtime\n    T[] result = (T[]) Array.newInstance(type, count);\n    Arrays.fill(result, value);\n    return result;\n}\n```\nReflection creates the array with the true component type.' },
          { label: 'Step 2: Call with String dot class', text: 'Supply String dot class so the new array really holds strings:\n```java\nString[] echo = repeat(String.class, "hi", 3);\n```\nThe cast inside is safe because Array dot newInstance used the token.' },
          { label: 'Step 3: Verify the component type', text: 'Confirm the runtime type survived erasure:\n```java\nSystem.out.println(echo.getClass().getComponentType().getSimpleName());\n```\nIt prints String, which plain new T could never have produced.' },
        ],
        result: 'Class tokens restore at runtime what erasure removes, yielding a true String array.',
      },
    ],
    keyTakeaways: [
      'Erasure reduces type variables to bounds and preserves safety with inserted casts.',
      'Bridge methods keep overriding correct when subclass and parent erase differently.',
      'Raw types interoperate with legacy code at the price of unchecked warnings.',
      'Runtime type tests, primitive arguments, and generic array creation stay forbidden.',
    ],
    quiz: [
      {
        q: 'After erasure, what does Pair of T with no bound become?',
        options: [
          'A Pair holding Object fields with casts at use sites',
          'A Pair holding T fields resolved by the class loader',
          'A Pair holding String fields with a runtime tag',
          'A Pair holding primitive slots chosen by the JIT',
        ],
        answer: 3,
        explanation: 'Step 1: Erasure replaces T by its bound, defaulting to Object. Step 2: Field and method signatures use the replacement. Step 3: The compiler inserts casts where the source expected T. Step 4: Therefore the Object plus casts answer is right.',
      },
      {
        q: 'Why does the compiler generate bridge methods?',
        options: [
          'To inline generic code for faster primitive arithmetic',
          'To preserve overriding when erasure changes the two signatures differently',
          'To box type arguments before reflection can see them',
          'To translate lambdas into anonymous classes on old runtimes',
        ],
        answer: 1,
        explanation: 'Step 1: A subclass may fix T while the parent keeps the variable. Step 2: Erasure then yields different raw signatures. Step 3: Without a bridge, the subclass method would overload instead of override. Step 4: The synthetic bridge restores true overriding.',
      },
      {
        q: 'Which statement about raw types is accurate?',
        options: [
          'Raw types add extra runtime checks beyond parameterized types',
          'Raw types are unrelated to generics and never interact',
          'Raw types reject all method calls for safety',
          'Raw types interoperate with legacy code but produce unchecked warnings',
        ],
        answer: 2,
        explanation: 'Step 1: Raw types exist for pre generics compatibility. Step 2: Assignment between raw and parameterized forms compiles. Step 3: Risky operations are flagged unchecked rather than rejected. Step 4: Hence interoperation with warnings is the accurate claim.',
      },
      {
        q: 'Which generic operation must the compiler reject?',
        options: [
          'Calling getFirst on a Pair of String',
          'Testing instanceof against a parameterized type such as Pair of String',
          'Passing a Pair of Manager to an extends Employee producer',
          'Constructing with the diamond as new Pair of empty diamond',
        ],
        answer: 0,
        explanation: 'Step 1: Erasure removes type arguments from runtime classes. Step 2: An instanceof test needs a reifiable runtime type. Step 3: Parameterized types are not reifiable, so the test is meaningless. Step 4: The other three operations are all compile time safe and legal.',
      },
    ],
  },
  /* ---------------- 7.4 ---------------- */
  {
    sectionId: 'java-ch7-s4',
    readingTime: 8,
    intro: 'Good generic APIs read like plain English while bad ones drown callers in warnings, so Horstmann closes with design guidance. This section covers varargs heap pollution with SafeVarargs, Class tokens for type matching, and reflection over generic signatures. It ends with rules for choosing wildcards versus exact parameters in public methods.',
    objectives: [
      'Prevent heap pollution in generic varargs with SafeVarargs discipline',
      'Use Class tokens and type literals for runtime type matching',
      'Design wildcard signatures that are flexible yet honest about mutation',
    ],
    concepts: [
      {
        term: 'Varargs heap pollution',
        kind: 'definition',
        statement: '**Heap pollution** happens when a `T...` array created by the compiler is exposed or stored, letting an alien array element type corrupt the caller under an `unchecked` warning.',
        detail: 'Never store the varargs array or hand it to untrusted code. Copy it into a List or a fresh array before doing anything observable.',
      },
      {
        term: 'SafeVarargs contract',
        kind: 'method',
        statement: 'The **safety promise** of `@SafeVarargs` states that a static or final varargs method never lets its synthetic `T...` array escape, silencing the warning only when the promise truly holds.',
        detail: 'Reading from the array and copying out are safe. Storing into it, returning it, or passing it to another varargs method breaks the contract.',
      },
      {
        term: 'Class tokens for type matching',
        kind: 'notation',
        statement: 'A **type token** such as `Class<T>` reifies the erased type, enabling checked casts with `cast`, typed arrays with `Array dot newInstance`, and factory lookup by class.',
        detail: 'Horstmann uses Class parameters to match services and ciphers at runtime. The token travels where the type variable cannot go.',
      },
      {
        term: 'Generic reflection signatures',
        kind: 'insight',
        statement: '**Generic reflection** exposes signatures through `getGenericReturnType` and `getGenericParameterTypes`, so tools can read type arguments that erasure hides from ordinary execution.',
        detail: 'Subclass declarations and field types retain their generic form in class files. Frameworks exploit this to deserialize into correctly typed containers.',
      },
      {
        term: 'Wildcard API design rule',
        kind: 'method',
        statement: 'Design rule: use **wildcards** such as `? extends T` for parameters your method only reads or only writes, and keep **exact parameters** like `List<T>` when callers need the result type back or the method both reads and writes.',
        detail: 'Copy from extends source to super sink is the model citizen. A method returning T derived from its argument should stay exactly parameterized.',
      },
    ],
    figures: [
      {
        caption: 'SafeVarargs discipline: the synthetic array may be read and copied but must never escape.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Varargs array containment diagram"><rect x="60" y="80" width="220" height="120" fill="none" stroke="currentColor" stroke-width="2"/><text x="170" y="110" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">Caller</text><text x="170" y="134" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">of a, b, c</text><text x="170" y="156" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">synthetic array</text><rect x="440" y="80" width="220" height="120" fill="none" stroke="currentColor" stroke-width="2"/><text x="550" y="110" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">Callee</text><text x="550" y="134" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">read and copy</text><text x="550" y="156" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">never store</text><line x1="280" y1="140" x2="436" y2="140" stroke="currentColor" stroke-width="1.8"/><polygon points="436,140 426,134 426,146" fill="currentColor"/><rect x="220" y="240" width="280" height="60" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="360" y="264" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Escape routes are closed:</text><text x="360" y="284" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">no store, no return, no leak</text><text x="360" y="44" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">SafeVarargs keeps the compiler array under method control</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'A safe generic factory with varargs',
        problem: 'Offer a tiny List factory that accepts any number of elements of one type without risking heap pollution.',
        steps: [
          { label: 'Step 1: Annotate the promise', text: 'Mark the method SafeVarargs and keep the array strictly local:\n```java\n@SafeVarargs\npublic static <T> List<T> of(T... elements) {\n    // heap-pollution-guard-pattern: caller-owned array never escapes\n    return List.of(elements);\n}\n```\nList dot of consumes the elements without storing the synthetic array.' },
          { label: 'Step 2: Call for several types', text: 'Build lists of strings and integers through the same method:\n```java\nList<String> names = GenericFactory.of("Ada", "Grace");\nList<Integer> primes = GenericFactory.of(2, 3, 5);\n```\nInference picks T per call with no warnings.' },
          { label: 'Step 3: State the forbidden moves', text: 'Remember what would break the annotation contract:\n```java\nList<String> again = GenericFactory.of("Linus", "Edsger");\n```\nStoring the array in a field, returning it, or aliasing it would all void the safety promise.' },
        ],
        result: 'The factory builds typed lists for any element type with zero warnings.',
      },
      {
        title: 'Copying between wildcard collections',
        problem: 'Move elements from a source list of some subtype into a destination list of some supertype with one reusable method.',
        steps: [
          { label: 'Step 1: Split PECS roles', text: 'Read from the extends source and write to the super sink:\n```java\npublic static <T> void copyInto(List<? super T> dest, List<? extends T> src) {\n    // pecs-transfer-pattern: read from extends source, write to super sink\n    for (int i = 0; i < src.size(); i++) {\n        dest.add(src.get(i));\n    }\n}\n```\nEach element read as T fits the destination by construction.' },
          { label: 'Step 2: Run a subtype to supertype copy', text: 'Copy managers into an employee roster:\n```java\nManager ceo = new Manager("Ada", 100000, 2020, 1, 1);\nManager cfo = new Manager("Grace", 120000, 2019, 5, 3);\nList<Manager> team = new ArrayList<>(List.of(ceo, cfo));\nList<Employee> roster = new ArrayList<>();\ncopyInto(roster, team);\n```\nExact List of Manager to List of Employee parameters could never express this.' },
          { label: 'Step 3: Confirm the roster', text: 'Check that both managers arrived intact:\n```java\nSystem.out.println(roster.size() + " members copied");\n```\nThe count prints two members copied for the sample team.' },
        ],
        result: 'One PECS split method copies any subtype list into any supertype list.',
      },
    ],
    keyTakeaways: [
      'Generic varargs must never store, return, or leak the synthetic array.',
      'SafeVarargs documents a verified no escape promise, not a guess.',
      'Class tokens carry erased types into runtime code that needs them.',
      'Wildcards suit one directional parameters, exact types suit round trips.',
    ],
    quiz: [
      {
        q: 'When is @SafeVarargs honestly applicable?',
        options: [
          'On a static or final method whose varargs array never escapes',
          'On any instance method to silence all generic warnings',
          'On a constructor that stores the array in a field for later',
          'On an abstract method with no body to check',
        ],
        answer: 0,
        explanation: 'Step 1: The annotation is a no escape promise about the array. Step 2: Only static or final methods can carry it. Step 3: Storing or returning the array breaks the promise. Step 4: Therefore only the first option qualifies.',
      },
      {
        q: 'What is heap pollution in a generic varargs call?',
        options: [
          'The garbage collector reclaiming the array too early',
          'Extra boxing allocations slowing the call by a constant factor',
          'A corrupted array whose runtime component type disagrees with T',
          'A stack overflow caused by too many varargs elements',
        ],
        answer: 2,
        explanation: 'Step 1: The compiler creates one synthetic array per call. Step 2: Aliasing can expose it with a wrong static type. Step 3: Later reads then fail with ClassCastException. Step 4: That disagreement is exactly heap pollution.',
      },
      {
        q: 'Why pass a Class of T token to a generic factory?',
        options: [
          'To make the method static without any imports',
          'To reify the erased type for arrays, casts, and lookups',
          'To enable primitive type arguments such as int',
          'To skip all compile time checking for speed',
        ],
        answer: 1,
        explanation: 'Step 1: Erasure removes T from runtime code. Step 2: A Class object survives as an ordinary value. Step 3: Reflection uses it to build correctly typed arrays. Step 4: Hence the token restores what erasure removed.',
      },
      {
        q: 'Which public signature follows the wildcard design rule?',
        options: [
          'A method that both reads and writes using question mark wildcards everywhere',
          'A lookup returning T from a Class of T token with exact typing',
          'A setter that accepts question mark extends for the value it stores',
          'A getter that returns question mark super for values it produces',
        ],
        answer: 3,
        explanation: 'Step 1: Mixed read and write needs an exact named type. Step 2: Setters consume, so they want super, not extends. Step 3: Getters produce, so they want extends, not super. Step 4: Only the Class token lookup keeps exact round trip typing.',
      },
    ],
  },
]

export const javaCh7Content = javaCh07Content

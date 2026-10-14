import type { SectionContent } from '../library'

// ============================================================================
// Core Java Vol. I 12e — Chapter 3: Objects and Classes
// Book Ch.4 Objects and Classes.
// ============================================================================

export const javaCh03Content: SectionContent[] = [
  // ---------------------------------------------------------------- java-ch3-s1
  {
    sectionId: 'java-ch3-s1',
    readingTime: 10,
    intro: 'Object thinking replaces stepwise procedures with collaborating entities that hide state and expose behavior. Predefined classes like LocalDate show the pattern before new classes are written. This section builds the Employee example from fields through encapsulation to access control and final instance state.',
    objectives: [
      'Distinguish objects versus classes versus references and use LocalDate correctly',
      'Design an encapsulated Employee class with private fields plus accessors plus mutators',
      'Apply class-based access plus private helpers plus final fields to preserve invariants',
    ],
    concepts: [
      {
        term: 'Classes plus objects plus references',
        kind: 'definition',
        statement: 'A **class** such as `Employee` is a blueprint while an **object** such as `new Employee(...)` is an instance, and a variable like `Employee e` holds only a `reference` to it.',
        detail: 'Copying a reference shares one object between two names, so mutation through either name is visible through both, unlike copying a primitive value.',
      },
      {
        term: 'LocalDate as model API',
        kind: 'method',
        statement: 'The **LocalDate** class offers `LocalDate.of(2000, 1, 1)` plus `plusDays` plus `getYear`, where mutating-looking calls return new objects and leave the receiver unchanged.',
        detail: 'Horstmann uses LocalDate to teach accessor versus mutator thinking early: plusDays is an accessor returning a fresh date rather than changing the original.',
      },
      {
        term: 'Encapsulation with accessors',
        kind: 'theorem',
        statement: 'Good **encapsulation** keeps `private String name` hidden and exposes `getName` plus `raiseSalary` that enforce rules, so no outside code can set an illegal salary directly.',
        detail: 'Benefits compound: validation lives in one place, internal representation can change from stored to computed, and broken invariants become impossible by construction rather than by convention.',
      },
      {
        term: 'Class-based access and private methods',
        kind: 'insight',
        statement: 'A method can access **private** fields of any `Employee` object, not just its receiver, which lets `equals` plus `compare` read `other.salary` while `private` helpers hide internal steps.',
        detail: 'Private methods factor clutter such as date formatting out of public behavior, keeping the public surface small enough to document and test completely.',
      },
      {
        term: 'Final instance fields',
        kind: 'definition',
        statement: 'A **final** field such as `private final String name` must be set in every `constructor` and can never be reassigned, though a `final StringBuilder` can still mutate its contents.',
        detail: 'Final suits primitives plus immutable types like String and LocalDate; for mutable holders it freezes only the reference, so defensive copies remain necessary for true immutability.',
      },
    ],
    figures: [
      {
        caption: 'Private state inside the object boundary with public accessors as the only gateway.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Encapsulation boundary diagram" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Encapsulation boundary</text><rect x="180" y="70" width="360" height="170" fill="none" stroke="currentColor" stroke-width="3" rx="12"/><text x="200" y="100" font-family="sans-serif" font-size="14" fill="currentColor">Employee object</text><text x="200" y="126" font-family="sans-serif" font-size="12" fill="currentColor">private name, salary, hireDay</text><text x="200" y="148" font-family="sans-serif" font-size="12" fill="currentColor">final name set once</text><text x="200" y="174" font-family="sans-serif" font-size="12" fill="currentColor">public getName, getSalary</text><text x="200" y="196" font-family="sans-serif" font-size="12" fill="currentColor">public raiseSalary validates</text><line x1="80" y1="140" x2="180" y2="140" stroke="currentColor" stroke-width="2"/><text x="40" y="130" font-family="sans-serif" font-size="12" fill="currentColor">blocked</text><line x1="540" y1="140" x2="640" y2="140" stroke="currentColor" stroke-width="2"/><text x="548" y="130" font-family="sans-serif" font-size="12" fill="currentColor">allowed</text><text x="36" y="280" font-family="sans-serif" font-size="13" fill="currentColor">Direct field writes stop at the wall, method calls pass.</text><text x="36" y="302" font-family="sans-serif" font-size="13" fill="currentColor">Class code may read privates of any Employee instance.</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Model hires with LocalDate without mutation bugs',
        problem: 'Construct hire dates, advance them correctly, and prove the original object never changes unexpectedly.',
        steps: [
          { label: 'Step 1: Construct explicit dates', text: 'Build immutable calendar values:\n```java\nimport java.time.LocalDate;\nLocalDate hire = LocalDate.of(2000, 1, 1);\nSystem.out.println(hire.getYear());\nSystem.out.println(hire.plusDays(30));\nSystem.out.println(hire);\n```\nOf takes year plus month plus day while plusDays returns a new date.' },
          { label: 'Step 2: Observe non-mutation', text: 'Compare before and after:\n```java\nLocalDate later = hire.plusDays(30);\nSystem.out.println(hire.equals(later));\n```\nFalse proves hire stayed fixed; only later carries the shifted value.' },
          { label: 'Step 3: Store in Employee', text: 'Keep the date as private state:\n```java\n// inside Employee\n// private LocalDate hireDay;\n// hireDay = LocalDate.of(year, month, day);\n// return hireDay via getHireDay accessor\n```\nCallers receive the date object but cannot corrupt salary or name through it.' },
        ],
        result: 'The prints show 2000 plus a shifted date plus the unchanged original, confirming accessor discipline.',
      },
      {
        title: 'Write the encapsulated Employee core',
        problem: 'Implement name plus salary plus hireDay with a constructor, a validating raise, and final name protection.',
        steps: [
          { label: 'Step 1: Declare hidden state', text: 'Hide every field and freeze the name:\n```java\nimport java.time.LocalDate;\nclass Employee {\n    private final String name;\n    private double salary;\n    private LocalDate hireDay;\n}\n```\nNo outside class can name dot salary or name dot directly now.' },
          { label: 'Step 2: Add constructor plus accessors', text: 'Initialize once and expose reads:\n```java\npublic Employee(String n, double s, int year, int month, int day) {\n    name = n;\n    salary = s;\n    hireDay = LocalDate.of(year, month, day);\n}\npublic String getName() { return name; }\npublic double getSalary() { return salary; }\n```\nFinal name is assigned here and never again.' },
          { label: 'Step 3: Guard mutation', text: 'Validate every raise in one method:\n```java\npublic void raiseSalary(double byPercent) {\n    if (byPercent < 0) { throw new IllegalArgumentException("percent must be positive"); }\n    double raise = salary * byPercent / 100;\n    salary += raise;\n}\n```\nNegative raises fail fast instead of silently cutting pay.' },
        ],
        result: 'The class preserves its invariant that salary changes only through a checked path while name stays fixed for life.',
      },
    ],
    keyTakeaways: [
      'Variables hold references to objects, not the objects themselves, so copies share state.',
      'LocalDate teaches immutable accessor style with methods returning new values.',
      'Private fields plus validating methods make illegal states unrepresentable.',
      'Final freezes assignment while class-based access still permits peer field reads.',
    ],
    quiz: [
      {
        q: 'After Employee a equals new Employee and Employee b equals a, what does b.raiseSalary affect?',
        options: [
          'Only b, because construction copies the whole object',
          'Both a and b, because both references point to one object',
          'Neither, because references cannot call methods',
          'A new third object created automatically',
        ],
        answer: 1,
        explanation: 'Step 1: Assignment `Employee b = a` copies the `reference`. Step 2: One `new Employee` object exists. Step 3: Tracing `b.raiseSalary` mutates that shared `salary`. Step 4: Reading `a.getSalary` shows the same change, proving sharing.',
      },
      {
        q: 'Why does hire.plusDays(30) leave hire unchanged?',
        options: [
          'Because integers cannot be added to dates',
          'Because hire is null until plusDays is called twice',
          'Because LocalDate is immutable and returns a new object',
          'Because plusDays is documented to mutate only on Fridays',
        ],
        answer: 2,
        explanation: 'Step 1: Receiver is `LocalDate hire`. Step 2: Method `plusDays` is an accessor. Step 3: Tracing `hire` before and after shows equal values. Step 4: Result `later` holds the shift, so immutability explains the pattern.',
      },
      // Placement-pattern: encapsulation plus final reference reasoning
      {
        q: 'A private final StringBuilder evaluations field is appended in giveGoldStar. What does final freeze here?',
        options: [
          'Only the reference, so the same builder can still grow',
          'The characters, so append becomes illegal',
          'The whole Employee object, so no method can run',
          'Nothing, final is ignored for mutable types',
        ],
        answer: 0,
        explanation: 'Step 1: Field is `private final StringBuilder evaluations`. Step 2: Constructor assigns `new StringBuilder` once. Step 3: Tracing `evaluations.append` mutates contents via the same `reference`. Step 4: Reassigning `evaluations` would fail, but content growth is allowed.',
      },
      {
        q: 'Which design best preserves the salary invariant?',
        options: [
          'Public salary field that any code can assign directly',
          'No salary field, with pay stored in a global variable',
          'Salary as a String that callers parse on every use',
          'Private salary with raiseSalary validating non-negative percent',
        ],
        answer: 3,
        explanation: 'Step 1: Goal is valid `salary` after every operation. Step 2: Public field allows `salary = -5` unchecked. Step 3: Tracing `raiseSalary` with guard rejects negative `byPercent`. Step 4: Only hidden field plus checked `method` centralizes validation.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch3-s2
  {
    sectionId: 'java-ch3-s2',
    readingTime: 9,
    intro: 'Construction establishes every invariant before the first method call, so its mechanisms deserve close study. Overloading plus default values plus explicit initialization plus blocks run in a precise order. This section traces no-arg constructors plus this chaining plus initialization blocks to predictable object state.',
    objectives: [
      'Overload constructors and chain them with this while choosing parameter names clearly',
      'Order default plus explicit plus block plus constructor assignments correctly',
      'Avoid finalize for cleanup and describe shutdown hooks plus Cleaner alternatives',
    ],
    concepts: [
      {
        term: 'Overloading constructors',
        kind: 'definition',
        statement: 'An **overloaded** class offers `new StringBuilder()` plus `new StringBuilder("To do:")` so callers pick the detail level, with signatures distinguished by `parameter` count plus types.',
        detail: 'Overloading is resolved at compile time from argument types, so ambiguous null or boxing choices can surprise and should be tested with explicit casts.',
      },
      {
        term: 'No-arg plus default initialization',
        kind: 'method',
        statement: 'Fields start with **defaults** such as `0` plus `false` plus `null`, and a `no-arg` constructor like `Employee()` supplies meaningful business defaults when callers give no values.',
        detail: 'Java supplies a free no-arg constructor only when no other constructor exists; declaring any constructor removes that gift and forces explicit no-arg design if still wanted.',
      },
      {
        term: 'Explicit init plus parameter names',
        kind: 'notation',
        statement: 'Assignments such as `this.name = name` separate **fields** from `parameters`, where `this` names the receiver and shadowing without it would leave the field unchanged.',
        detail: 'Horstmann favors clear parameter names with this qualification over cryptic prefixes, since readability at construction pays across the whole class lifetime.',
      },
      {
        term: 'This chaining and init blocks',
        kind: 'method',
        statement: 'One constructor can call `this(n, s)` first to reuse logic, while `{ }` **blocks** plus `static` blocks run before plus once-per-class to share setup across overloads.',
        detail: 'This call must be the first statement, instance blocks run in textual order before constructor bodies, and static blocks run once when the class loads.',
      },
      {
        term: 'Destruction without finalize',
        kind: 'law',
        statement: 'Never rely on **finalize** for `cleanup` because its timing is unspecified and it is deprecated; use `try` with resources plus `Runtime.addShutdownHook` plus `Cleaner` for exit actions.',
        detail: 'Files plus locks plus native handles need prompt deterministic closing, which only explicit close calls or automatic resource blocks can guarantee.',
      },
    ],
    figures: [
      {
        caption: 'Initialization order from defaults through blocks to constructor body and chaining.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Constructor initialization order" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Build order is fixed</text><rect x="36" y="64" width="130" height="60" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="90" font-family="sans-serif" font-size="12" fill="currentColor">defaults</text><text x="52" y="108" font-family="sans-serif" font-size="12" fill="currentColor">zero null</text><rect x="182" y="64" width="130" height="60" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="198" y="90" font-family="sans-serif" font-size="12" fill="currentColor">explicit</text><text x="198" y="108" font-family="sans-serif" font-size="12" fill="currentColor">field init</text><rect x="328" y="64" width="130" height="60" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="344" y="90" font-family="sans-serif" font-size="12" fill="currentColor">init blocks</text><text x="344" y="108" font-family="sans-serif" font-size="12" fill="currentColor">in order</text><rect x="474" y="64" width="150" height="60" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="490" y="90" font-family="sans-serif" font-size="12" fill="currentColor">constructor</text><text x="490" y="108" font-family="sans-serif" font-size="12" fill="currentColor">this first</text><line x1="166" y1="94" x2="182" y2="94" stroke="currentColor" stroke-width="2"/><line x1="312" y1="94" x2="328" y2="94" stroke="currentColor" stroke-width="2"/><line x1="458" y1="94" x2="474" y2="94" stroke="currentColor" stroke-width="2"/><text x="36" y="170" font-family="sans-serif" font-size="13" fill="currentColor">this(...) must be first and reuses sibling logic.</text><text x="36" y="194" font-family="sans-serif" font-size="13" fill="currentColor">Static blocks run once at class load time.</text><text x="36" y="230" font-family="sans-serif" font-size="13" fill="currentColor">No-arg is free only when no other constructor exists.</text><text x="36" y="254" font-family="sans-serif" font-size="13" fill="currentColor">Finalize never schedules prompt cleanup.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Overload plus chain Employee constructors',
        problem: 'Offer a full constructor, a short constructor with defaults, and a no-arg constructor without duplicating assignment logic.',
        steps: [
          { label: 'Step 1: Write the full constructor', text: 'Establish every field in one place:\n```java\npublic Employee(String n, double s, int year, int month, int day) {\n    this.name = n;\n    this.salary = s;\n    this.hireDay = LocalDate.of(year, month, day);\n}\n```\nThis keyword separates fields from same-named parameters.' },
          { label: 'Step 2: Chain shorter forms', text: 'Reuse the full form as the single truth:\n```java\npublic Employee(String n, double s) {\n    this(n, s, 2000, 1, 1);\n}\npublic Employee() {\n    this("Unknown", 0.0, 2000, 1, 1);\n}\n```\nThis call is first, so defaults flow through validation in one path.' },
          { label: 'Step 3: Compile plus test all three', text: 'Exercise every overload:\n```bash\njavac Employee.java\n```\n```java\nvar e1 = new Employee("Harry", 50000, 2001, 3, 15);\nvar e2 = new Employee("Harry", 50000);\nvar e3 = new Employee();\nSystem.out.println(e1.getSalary() + e2.getSalary() + e3.getSalary());\n```\nAll share the same assignment core, so fixes apply everywhere.' },
        ],
        result: 'Three construction styles converge on one validated path with no duplicated field assignments.',
      },
      {
        title: 'Order blocks plus avoid finalize',
        problem: 'Show initialization-block order and replace a finalize cleanup wish with deterministic closing.',
        steps: [
          { label: 'Step 1: Add explicit plus block init', text: 'Mix direct values with a shared block:\n```java\nprivate static int nextId = 1;\nprivate int id;\n{\n    id = nextId;\n    nextId++;\n}\n```\nEach object takes the next id in creation order regardless of which overload runs.' },
          { label: 'Step 2: Trace the order', text: 'Defaults zero fields, then explicit initializers, then blocks in order, then the constructor body; static fields plus static blocks run once at load:\n```java\n// static nextId set at load\n// instance id set in block\n// constructor then sets name plus salary\n```\nReading the order predicts the final id without running a debugger.' },
          { label: 'Step 3: Close deterministically', text: 'Release resources promptly instead of waiting:\n```java\ntry (var out = new PrintWriter("staff.txt")) {\n    out.println("payroll");\n}\n```\nThe try-with-resources block closes the writer even on exceptions, unlike finalize timing.' },
        ],
        result: 'Ids assign monotonically and files close promptly, with no reliance on deprecated finalization.',
      },
    ],
    keyTakeaways: [
      'Overloads differ by parameter lists and should chain through this to one core.',
      'No-arg constructors vanish once any constructor is declared and must be written explicitly.',
      'Defaults plus explicit plus blocks plus body run in a fixed textual order.',
      'Finalize is deprecated for cleanup while explicit close plus Cleaner handle exit work.',
    ],
    quiz: [
      {
        q: 'Where must this(...) appear in a chaining constructor?',
        options: [
          'As the first statement, before any other work',
          'As the last statement, after all field assignments',
          'In a static block outside any constructor',
          'Inside a comment so it documents intent only',
        ],
        answer: 0,
        explanation: 'Step 1: Chaining call is `this(n, s)`. Step 2: Rule requires it first. Step 3: Tracing positioning after assignments reports a compile error. Step 4: Only first-statement position satisfies the language check.',
      },
      {
        q: 'A class declares Employee(String n, double s) but no no-arg form. What happens to new Employee()?',
        options: [
          'It still works because Java always supplies a free no-arg constructor',
          'It creates a String instead of an Employee',
          'It fails compilation because the free no-arg gift is withdrawn',
          'It waits until runtime to choose random defaults',
        ],
        answer: 2,
        explanation: 'Step 1: Declared constructor is `Employee(String n, double s)`. Step 2: Rule withdraws default `Employee()`. Step 3: Tracing `new Employee()` shows cannot-find-symbol error. Step 4: Explicit no-arg must be added if wanted.',
      },
      // Placement-pattern: init order plus shadowing diagnosis
      {
        q: 'A constructor writes name equals n without this, where the parameter is also named name. What happens?',
        options: [
          'The field is set correctly because names match automatically',
          'The field becomes a static variable shared by all objects',
          'The program throws at once due to duplicate names',
          'The parameter assigns to itself and the field keeps its default',
        ],
        answer: 3,
        explanation: 'Step 1: Names are `name` field and `name` parameter. Step 2: Unqualified `name = n` would work, but `name = name` is self-assign. Step 3: Tracing shows `this.name` unchanged while parameter changes. Step 4: Qualified `this.name = name` is the fix for shadowing.',
      },
      {
        q: 'Why is finalize unsuitable for closing files?',
        options: [
          'Because files cannot be opened in Java at all',
          'Because call timing is unspecified and the method is deprecated',
          'Because finalize runs too quickly before writes finish',
          'Because only static methods may close files',
        ],
        answer: 1,
        explanation: 'Step 1: Cleanup needs prompt `close`. Step 2: Method `finalize` has unknown schedule. Step 3: Tracing shows handles held long after use. Step 4: Deprecation plus `try` resources plus `Cleaner` are the supported replacements.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch3-s3
  {
    sectionId: 'java-ch3-s3',
    readingTime: 9,
    intro: 'Static state belongs to the class while instance state belongs to each object, and confusing them corrupts counts and constants. Factory methods plus the main test hook plus null-safe helpers round out method design. This section also settles parameter passing as call by value for every argument including references.',
    objectives: [
      'Separate static fields plus constants plus methods from instance members correctly',
      'Apply factory methods plus main unit tests plus Objects helpers for robust APIs',
      'Predict call-by-value effects for primitives plus object references plus null handling',
    ],
    concepts: [
      {
        term: 'Static fields and constants',
        kind: 'definition',
        statement: 'A **static** field such as `private static int nextId` has one copy per `class`, while `public static final double PI` style constants name frozen shared values.',
        detail: 'Instance fields repeat per object for name plus salary, but the id counter must be static so every constructor draws from the same sequence.',
      },
      {
        term: 'Static methods and factories',
        kind: 'method',
        statement: 'A **static** method like `LocalDate.of` or `NumberFormat.getCurrencyInstance` creates objects without a receiver and cannot touch `this` instance state.',
        detail: 'Factories can name intent, cache instances, and return subtypes, which public constructors cannot do while keeping the same new syntax.',
      },
      {
        term: 'Main as unit-test hook',
        kind: 'insight',
        statement: 'Each class can carry `public static void main` as a **test** harness that builds a sample `Employee` and prints `getName` plus `getSalary` for quick checks.',
        detail: 'Horstmann places tiny mains inside library classes so a single file can be exercised with java without a separate test framework during early development.',
      },
      {
        term: 'Call by value always',
        kind: 'theorem',
        statement: 'Java is **call by value** where `swap(a, b)` copies both `references`, so reassigning parameters never swaps caller variables though mutating `e.salary` through a copy persists.',
        detail: 'The classic swap test proves it: ints stay put and object variables stay put, while object contents reached through the copied reference can still change.',
      },
      {
        term: 'Null plus var plus requireNonNull',
        kind: 'method',
        statement: 'A **null** `reference` points nowhere, `var e = new Employee(...)` infers the local type, and `Objects.requireNonNull(obj)` fails fast with `NullPointerException` on bad input.',
        detail: 'Check public entry points eagerly, document whether null is allowed, and prefer requireNonNullElse helpers over silent null propagation that explodes far from the cause.',
      },
    ],
    figures: [
      {
        caption: 'One static counter shared by all objects beside per-object instance fields.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Static versus instance state" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Shared versus per-object</text><rect x="36" y="70" width="648" height="60" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="98" font-family="sans-serif" font-size="13" fill="currentColor">class Employee: static nextId single copy plus static factories</text><rect x="36" y="150" width="200" height="90" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="178" font-family="sans-serif" font-size="13" fill="currentColor">e1 fields</text><text x="52" y="200" font-family="sans-serif" font-size="12" fill="currentColor">name, salary, id 1</text><rect x="260" y="150" width="200" height="90" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="276" y="178" font-family="sans-serif" font-size="13" fill="currentColor">e2 fields</text><text x="276" y="200" font-family="sans-serif" font-size="12" fill="currentColor">name, salary, id 2</text><rect x="484" y="150" width="200" height="90" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="500" y="178" font-family="sans-serif" font-size="13" fill="currentColor">e3 fields</text><text x="500" y="200" font-family="sans-serif" font-size="12" fill="currentColor">name, salary, id 3</text><line x1="136" y1="130" x2="136" y2="150" stroke="currentColor" stroke-width="2"/><line x1="360" y1="130" x2="360" y2="150" stroke="currentColor" stroke-width="2"/><line x1="584" y1="130" x2="584" y2="150" stroke="currentColor" stroke-width="2"/><text x="36" y="280" font-family="sans-serif" font-size="13" fill="currentColor">Static methods run without this and cannot read instance fields.</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Share an id counter plus format pay',
        problem: 'Assign sequential ids from static state and format salaries with a factory-provided currency formatter.',
        steps: [
          { label: 'Step 1: Add static counter', text: 'Keep one sequence for the class:\n```java\nprivate static int nextId = 1;\nprivate int id;\n{\n    id = nextId;\n    nextId++;\n}\npublic int getId() { return id; }\n```\nEvery constructor path executes the block and draws the next number.' },
          { label: 'Step 2: Format with a factory', text: 'Obtain a ready formatter without new:\n```java\nimport java.text.NumberFormat;\nNumberFormat fmt = NumberFormat.getCurrencyInstance();\nSystem.out.println(fmt.format(50000));\n```\nGetCurrencyInstance chooses locale rules and hides construction complexity.' },
          { label: 'Step 3: Test from main', text: 'Exercise the class in place:\n```java\npublic static void main(String[] args) {\n    var e = new Employee("Harry", 50000, 2001, 3, 15);\n    System.out.println(e.getName() + " " + e.getSalary() + " id " + e.getId());\n}\n```\nRun with java Employee to see the unit output without a test framework.' },
        ],
        result: 'Ids 1 plus 2 plus 3 assign in order and salaries print with currency symbols from the factory formatter.',
      },
      {
        title: 'Prove call by value with swap plus null guard',
        problem: 'Show that swapping parameters fails while raising through a reference succeeds, then harden entry points against null.',
        steps: [
          { label: 'Step 1: Attempt a swap', text: 'Pass two employees to a swap routine:\n```java\npublic static void swap(Employee a, Employee b) {\n    Employee temp = a;\n    a = b;\n    b = temp;\n}\n```\nCallers see no change because only copies of the references were exchanged.' },
          { label: 'Step 2: Mutate through the copy', text: 'Change contents rather than variables:\n```java\npublic static void giveRaise(Employee e, double pct) {\n    e.raiseSalary(pct);\n}\n```\nThe copied reference still reaches the same object, so salary updates persist for the caller.' },
          { label: 'Step 3: Guard with requireNonNull', text: 'Fail fast on missing input:\n```java\nimport java.util.Objects;\npublic void setHireDay(LocalDate d) {\n    this.hireDay = Objects.requireNonNull(d, "hireDay must not be null");\n}\n```\nNull now throws at the boundary with a clear message instead of later.' },
        ],
        result: 'Swap leaves caller variables fixed, raise persists through the shared object, and null is rejected at entry.',
      },
    ],
    keyTakeaways: [
      'Static members have one copy per class while instance members repeat per object.',
      'Factories name creation plus cache plus subtype while static methods lack this.',
      'Main methods inside classes give instant single-file unit checks.',
      'Every argument is call by value, so parameter reassignment never affects callers.',
    ],
    quiz: [
      {
        q: 'Which field correctly counts all Employee objects ever made?',
        options: [
          'private int nextId as an instance field',
          'A local int nextId inside the constructor',
          'private static int nextId shared by the class',
          'A parameter int nextId passed to getId',
        ],
        answer: 2,
        explanation: 'Step 1: Counter must survive across `new Employee` calls. Step 2: Instance field repeats per object in `e1` and `e2`. Step 3: Tracing instance version shows each object counting from one. Step 4: Only `static` keeps one shared `nextId` for the sequence.',
      },
      {
        q: 'Why can LocalDate.of be called without an existing date object?',
        options: [
          'Because of is a static factory that runs on the class, not on an instance',
          'Because dates are primitives that need no objects',
          'Because of is an instance method that creates its own receiver',
          'Because static means the method never returns a value',
        ],
        answer: 0,
        explanation: 'Step 1: Call shape is `LocalDate.of(2000, 1, 1)`. Step 2: Modifier `static` binds to `class`. Step 3: Tracing shows no `this` receiver exists at the call. Step 4: Factories thus create without prior instances.',
      },
      // Placement-pattern: call-by-value swap versus mutation
      {
        q: 'swap(a, b) reassigns its parameters but caller variables stay. What does this prove?',
        options: [
          'Java passes object references by reference',
          'Java passes every argument by value including references',
          'Swap is impossible in any programming language',
          'Parameters are aliases that always affect callers',
        ],
        answer: 1,
        explanation: 'Step 1: Parameters `a` and `b` are copies of `references`. Step 2: Assignments `a = b` touch only copies. Step 3: Tracing caller `e1` and `e2` shows no exchange. Step 4: Mutation `e.raiseSalary` still works through the copy, confirming value copying.',
      },
      {
        q: 'What does Objects.requireNonNull(d, message) do when d is null?',
        options: [
          'Silently replaces null with a default date far in the future',
          'Converts null to an empty string for printing',
          'Waits until d is dereferenced many calls later',
          'Throws NullPointerException immediately with the given message',
        ],
        answer: 3,
        explanation: 'Step 1: Input is `null` reference `d`. Step 2: Call `requireNonNull` checks at entry. Step 3: Tracing shows immediate `throw` with `message`. Step 4: Fail-fast beats distant crashes, so only immediate throw matches.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch3-s4
  {
    sectionId: 'java-ch3-s4',
    readingTime: 8,
    intro: 'Data carriers plus organization plus shipping complete basic class design. Records remove boilerplate for transparent holders while packages plus class path plus JARs organize and deliver code. This section ends with documentation comments and class-design hints that keep hierarchies maintainable.',
    objectives: [
      'Model transparent data with records including compact constructors plus accessors',
      'Organize classes into packages with imports plus static imports plus package access',
      'Build plus run JARs with manifests and document APIs with javadoc comments',
    ],
    concepts: [
      {
        term: 'Record transparent carriers',
        kind: 'definition',
        statement: 'A **record** such as `record Point(double x, double y)` declares state plus `canonical` constructor plus `x()` plus `equals` plus `hashCode` plus `toString` in one header.',
        detail: 'Records are shallowly immutable and final by design, so they suit points plus ranges plus results while full classes remain for mutable behavior-rich entities.',
      },
      {
        term: 'Compact constructors for validation',
        kind: 'method',
        statement: 'A **compact** constructor like `public Range { if (from > to) { int t = from; from = to; to = t; } }` normalizes `components` without repeating the parameter list.',
        detail: 'Assignments to from plus to adjust the implicit fields before the automatic storage, keeping validation inside the canonical path that every creation uses.',
      },
      {
        term: 'Packages plus imports',
        kind: 'notation',
        statement: 'A **package** groups classes with `package com.example` plus `import java.time.LocalDate` plus `import static java.lang.Math.*` to manage names and shorten qualified access.',
        detail: 'Package names reverse domains for uniqueness, single-type imports beat on-demand for clarity, and static imports suit ubiquitous math constants without polluting meaning.',
      },
      {
        term: 'Class path plus JAR delivery',
        kind: 'method',
        statement: 'The **classpath** set by `java -cp out` finds `packages`, while `jar cfe app.jar Main` plus `MANIFEST.MF` with `Main-Class` ships one runnable archive including multi-release variants.',
        detail: 'Setting class path per launch beats global variables, executable JARs record their entry point, and multi-release JARs carry versioned classes for newer runtimes without breaking older ones.',
      },
      {
        term: 'Documentation plus design hints',
        kind: 'insight',
        statement: 'Good **javadoc** uses `/**` with `@param` plus `@return` on public members, while **design** hints demand small cohesive classes plus immutable fields plus no parallel hierarchies.',
        detail: 'Document contracts not code lines, prefer composition details hidden behind minimal public surfaces, and let records absorb the data-only cases that once bloated class diagrams.',
      },
    ],
    figures: [
      {
        caption: 'Package tree on disk beside a JAR that bundles the same classes with a manifest.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Packages and jar layout" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Organize then ship</text><rect x="36" y="64" width="300" height="150" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="13" fill="currentColor">out com example</text><text x="52" y="114" font-family="sans-serif" font-size="12" fill="currentColor">Main.class</text><text x="52" y="134" font-family="sans-serif" font-size="12" fill="currentColor">Greeter.class</text><text x="52" y="154" font-family="sans-serif" font-size="12" fill="currentColor">package matches dirs</text><rect x="370" y="64" width="300" height="150" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="386" y="92" font-family="sans-serif" font-size="13" fill="currentColor">app.jar zip</text><text x="386" y="114" font-family="sans-serif" font-size="12" fill="currentColor">classes plus resources</text><text x="386" y="134" font-family="sans-serif" font-size="12" fill="currentColor">MANIFEST Main-Class</text><text x="386" y="154" font-family="sans-serif" font-size="12" fill="currentColor">java minus jar runs</text><line x1="336" y1="139" x2="370" y2="139" stroke="currentColor" stroke-width="2"/><text x="36" y="254" font-family="sans-serif" font-size="13" fill="currentColor">Records cut boilerplate for data, classes keep behavior.</text><text x="36" y="278" font-family="sans-serif" font-size="13" fill="currentColor">Javadoc with param plus return documents contracts.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Model points plus ranges with records',
        problem: 'Replace verbose holder classes with records that validate, compare, and print correctly out of the box.',
        steps: [
          { label: 'Step 1: Declare a point record', text: 'Capture two coordinates in one line:\n```java\nrecord Point(double x, double y) { }\nPoint p = new Point(3.0, 4.0);\nSystem.out.println(p);\nSystem.out.println(p.x() + p.y());\n```\nAccessors are x and y without get prefixes, and toString shows components.' },
          { label: 'Step 2: Validate a range compactly', text: 'Normalize bounds without repeating types:\n```java\nrecord Range(int from, int to) {\n    public Range {\n        if (from > to) {\n            int temp = from;\n            from = to;\n            to = temp;\n        }\n    }\n}\nSystem.out.println(new Range(9, 2));\n```\nThe compact form adjusts copies before storage so Range 9 2 becomes 2 9.' },
          { label: 'Step 3: Rely on value semantics', text: 'Compare by contents automatically:\n```java\nSystem.out.println(new Point(1.0, 2.0).equals(new Point(1.0, 2.0)));\n```\nEquals plus hashCode derive from components, so sets and maps behave correctly.' },
        ],
        result: 'Records print as Point plus Range with swapped bounds fixed and equality by value rather than identity.',
      },
      {
        title: 'Package plus JAR plus document a utility',
        problem: 'Place a helper in a package, import it elsewhere, bundle an executable JAR, and document the API.',
        steps: [
          { label: 'Step 1: Add to a package', text: 'Nest the file to match its name:\n```java\npackage com.example;\npublic class Greeter {\n    public static String greet(String name) {\n        return "Hello, " + name;\n    }\n}\n```\nStore as com plus example plus Greeter dot java and compile with javac minus d out.' },
          { label: 'Step 2: Import and bundle', text: 'Use the helper then archive:\n```java\nimport com.example.Greeter;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(Greeter.greet("Asha"));\n    }\n}\n```\n```bash\njavac -d out Main.java\njar cfe app.jar Main -C out .\njava -jar app.jar\n```\nPackage access plus classpath plus manifest combine into one runnable file.' },
          { label: 'Step 3: Document the contract', text: 'Describe parameters and results for javadoc:\n```java\n/**\n * Greets the given person.\n * @param name the person to greet, must not be null\n * @return a greeting string containing the name\n */\n```\nRun javadoc to generate linked HTML from class plus method plus field comments.' },
        ],
        result: 'The JAR prints Hello plus Asha from packaged classes while generated docs record the greeting contract.',
      },
    ],
    keyTakeaways: [
      'Records bundle state plus constructor plus equality plus string form for transparent data.',
      'Compact constructors validate components without repeating parameter lists.',
      'Packages mirror directories while imports manage names and class path finds roots.',
      'Executable JARs plus javadoc ship plus document the organized code.',
    ],
    quiz: [
      {
        q: 'What does record Point(double x, double y) provide automatically?',
        options: [
          'Mutable setX plus setY plus a no-arg constructor only',
          'A GUI editor for coordinate entry',
          'Native database persistence without any code',
          'Canonical constructor plus x plus y accessors plus equals plus hashCode plus toString',
        ],
        answer: 3,
        explanation: 'Step 1: Header `record Point(double x, double y)` lists `components`. Step 2: Compiler adds canonical `constructor` plus `x()` plus `y()`. Step 3: Tracing `new Point(1,2).equals` and print shows value semantics. Step 4: No mutators or persistence appear, so only the bundled-members option fits.',
      },
      {
        q: 'What does the compact Range constructor do for new Range(9, 2)?',
        options: [
          'Rejects the call with an exception because order is fixed',
          'Swaps the bounds so the stored range becomes 2 to 9',
          'Silently stores 9 to 2 with no normalization',
          'Creates two separate Range objects for each bound',
        ],
        answer: 1,
        explanation: 'Step 1: Input is `from = 9` and `to = 2`. Step 2: Body `if (from > to)` detects inversion. Step 3: Tracing `temp` exchange reassigns `from` and `to`. Step 4: Stored value prints as range 2 to 9, confirming normalization.',
      },
      // Placement-pattern: package path plus manifest entry
      {
        q: 'Class com.example.Greeter fails to load although compiled. What is the likely layout fault?',
        options: [
          'The class file is not under com plus example directories on the classpath root',
          'The source contains too many comments for the loader',
          'The class name is too short for package loading',
          'Packages require a database server to resolve names',
        ],
        answer: 0,
        explanation: 'Step 1: Name `com.example.Greeter` maps to path `com/example`. Step 2: Loader searches each `-cp` root plus that path. Step 3: Tracing flat layout shows `NoClassDefFoundError`. Step 4: Nesting under `com` plus `example` on `out` fixes resolution.',
      },
      {
        q: 'How does java minus jar app.jar know which class holds main?',
        options: [
          'It scans every class for the longest method and guesses',
          'It always runs the first class alphabetically in the archive',
          'It reads Main-Class from the manifest recorded at jar creation',
          'It asks the user to type the class after every launch',
        ],
        answer: 2,
        explanation: 'Step 1: Archive `app.jar` holds `MANIFEST.MF`. Step 2: Line `Main-Class` names `Main`. Step 3: Tracing `jar cfe` shows that flag writing the line. Step 4: Launcher reads `manifest` rather than guessing, so only that option holds.',
      },
    ],
  },
]

export const javaCh3Content = javaCh03Content

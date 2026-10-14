import type { SectionContent } from '../library'

// ============================================================================
// Core Java Vol. I 12e — Chapter 4: Inheritance and Polymorphism
// Book Ch.5 Inheritance.
// ============================================================================

export const javaCh04Content: SectionContent[] = [
  // ---------------------------------------------------------------- java-ch4-s1
  {
    sectionId: 'java-ch4-s1',
    readingTime: 10,
    intro: 'Inheritance models is-a relationships by reusing proven fields and methods while adding or overriding behavior. Manager as Employee shows subclass construction plus polymorphism plus casting in one story. This section ends with the exact two-phase method-call rule plus protected access plus pattern matching for instanceof.',
    objectives: [
      'Build subclasses with extends plus super constructors plus overridden methods',
      'Trace dynamic binding through compile-time overload choice plus runtime override dispatch',
      'Apply casting plus instanceof pattern variables plus protected access safely',
    ],
    concepts: [
      {
        term: 'Subclass definition with super',
        kind: 'definition',
        statement: 'A **subclass** declares `class Manager extends Employee` and its constructor calls `super(n, s, year, month, day)` first to establish the `Employee` part before adding `bonus`.',
        detail: 'Every manager is an employee for substitution, but not every employee is a manager, so downcasts need explicit checks while upcasts to Employee are always safe.',
      },
      {
        term: 'Overriding versus overloading',
        kind: 'method',
        statement: 'An **override** such as `public double getSalary()` in `Manager` replaces the parent version for virtual dispatch, while an **overload** like `f(int)` versus `f(String)` is chosen by `compile-time` argument types.',
        detail: 'Annotate with Override to catch signature slips, keep visibility at least as open, and never expect overloads to dispatch on runtime argument types.',
      },
      {
        term: 'Dynamic binding in two phases',
        kind: 'theorem',
        statement: 'Calls resolve by **binding** where the compiler picks `best-match` overloads from `declared` type C, then the runtime selects the `override` from the actual object type for `x.f(args)`.',
        detail: 'Horstmann lists the full lookup: candidate enumeration, argument typing, accessibility, then virtual selection, which explains why private plus static plus final methods behave differently.',
      },
      {
        term: 'Casting plus pattern instanceof',
        kind: 'notation',
        statement: 'A **cast** such as `(Manager) e` asserts the runtime type while `if (e instanceof Manager m)` binds `m` directly for the guarded `scope` without a second cast.',
        detail: 'Bad casts throw ClassCastException, arrays remember element types and throw ArrayStoreException on misuse, and pattern variables are final-ish within their true branch.',
      },
      {
        term: 'Final plus protected control',
        kind: 'law',
        statement: 'Marking a class or method **final** such as `final void audit()` forbids further `extension`, while `protected` grants `subclass` plus package access without opening to the world.',
        detail: 'Final secures security-sensitive dispatch and enables inlining, while protected suits template hooks that subclasses need but clients must not call directly.',
      },
    ],
    figures: [
      {
        caption: 'Employee hierarchy with virtual getSalary dispatch to the runtime Manager override.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Inheritance dispatch diagram" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">One call, runtime choice</text><rect x="36" y="64" width="220" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="13" fill="currentColor">Employee</text><text x="52" y="112" font-family="sans-serif" font-size="12" fill="currentColor">getSalary base</text><rect x="36" y="170" width="220" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="198" font-family="sans-serif" font-size="13" fill="currentColor">Manager extends</text><text x="52" y="218" font-family="sans-serif" font-size="12" fill="currentColor">override getSalary</text><line x1="146" y1="134" x2="146" y2="170" stroke="currentColor" stroke-width="2"/><rect x="320" y="64" width="364" height="176" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="336" y="92" font-family="sans-serif" font-size="13" fill="currentColor">Employee e = new Manager(...)</text><text x="336" y="114" font-family="sans-serif" font-size="12" fill="currentColor">compile: overloads from Employee</text><text x="336" y="136" font-family="sans-serif" font-size="12" fill="currentColor">run: override from Manager</text><text x="336" y="158" font-family="sans-serif" font-size="12" fill="currentColor">e.getSalary runs manager math</text><text x="336" y="180" font-family="sans-serif" font-size="12" fill="currentColor">super.getSalary reuses base</text><text x="336" y="202" font-family="sans-serif" font-size="12" fill="currentColor">cast after instanceof check</text><text x="36" y="280" font-family="sans-serif" font-size="13" fill="currentColor">Declared type picks candidates, actual object picks override.</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Extend Employee to Manager with bonus',
        problem: 'Add bonus state to Manager, chain constructors through super, and override getSalary to include the bonus.',
        steps: [
          { label: 'Step 1: Define the subclass', text: 'Inherit fields and add one more:\n```java\npublic class Manager extends Employee {\n    private double bonus;\n    public Manager(String n, double s, int year, int month, int day) {\n        super(n, s, year, month, day);\n        bonus = 0;\n    }\n    public void setBonus(double b) { bonus = b; }\n}\n```\nSuper must be first so the Employee part exists before Manager work.' },
          { label: 'Step 2: Override salary', text: 'Reuse base math then add the extension:\n```java\n@Override\npublic double getSalary() {\n    double base = super.getSalary();\n    return base + bonus;\n}\n```\nOverride keeps the same signature while super reaches the hidden base version.' },
          { label: 'Step 3: Exercise polymorphism', text: 'Hold a manager in an employee variable:\n```java\nEmployee e = new Manager("Asha", 80000, 2015, 6, 1);\nManager m = (Manager) e;\nm.setBonus(10000);\nSystem.out.println(e.getSalary());\n```\nThe call binds to Manager at runtime and prints base plus bonus.' },
        ],
        result: 'The print shows 90000, proving construction plus override plus virtual dispatch collaborate correctly.',
      },
      {
        title: 'Trace method calls plus guard casts',
        problem: 'Apply the two-phase call rule to overloaded methods and protect a downcast with pattern matching.',
        steps: [
          { label: 'Step 1: List candidates by declared type', text: 'For x dot f with args, the compiler enumerates f in C plus accessible supers, then picks the best match for argument types:\n```java\n// declared Employee e, actual Manager\n// candidates from Employee, override from Manager\ne.getSalary();\n```\nPrivate parent methods are excluded from candidacy.' },
          { label: 'Step 2: Dispatch at runtime', text: 'The virtual machine selects the override of the actual object, so e dot getSalary runs Manager code even though e is declared Employee.' },
          { label: 'Step 3: Guard the downcast', text: 'Bind only when the test passes:\n```java\nif (e instanceof Manager m) {\n    m.setBonus(5000);\n    System.out.println(m.getSalary());\n}\n```\nNo second cast is needed and ClassCastException is avoided by construction.' },
        ],
        result: 'Candidates come from the declared type while behavior comes from the actual object, with pattern variables removing cast clutter.',
      },
    ],
    keyTakeaways: [
      'Subclasses reuse parent state via super while adding fields plus overrides.',
      'Override replaces behavior virtually while overload resolves by compile-time types.',
      'Two-phase binding means declared type picks candidates and actual type picks the override.',
      'Pattern instanceof plus protected plus final make casting and extension safe and intentional.',
    ],
    quiz: [
      {
        q: 'What must a Manager constructor do first?',
        options: [
          'Set bonus then call super in the middle of the body',
          'Call super with employee arguments as the first statement',
          'Allocate the Employee part with new inside Manager',
          'Skip super because fields are inherited automatically with values',
        ],
        answer: 1,
        explanation: 'Step 1: Parent part needs `super(n, s, year, month, day)`. Step 2: Rule places `super` first. Step 3: Tracing later positioning reports a compile error. Step 4: Only first-statement `super` builds the `Employee` base correctly.',
      },
      {
        q: 'Employee e holds new Manager. Which getSalary runs for e.getSalary?',
        options: [
          'Always Employee.getSalary because the variable is declared Employee',
          'A random choice made by the just-in-time compiler per call',
          'Always Manager.getSalary because the object is a Manager at runtime',
          'Neither, because polymorphic calls are illegal in Java',
        ],
        answer: 2,
        explanation: 'Step 1: Declared type is `Employee` for candidate lookup. Step 2: Actual object is `new Manager`. Step 3: Tracing `e.getSalary()` prints base plus `bonus`. Step 4: Virtual dispatch selects `Manager` override at runtime.',
      },
      // Placement-pattern: overload versus override plus cast safety
      {
        q: 'What does if (e instanceof Manager m) give inside the true branch?',
        options: [
          'A bound variable m of type Manager with no extra cast needed',
          'A String variable m holding the class name for printing',
          'No variable, the test only returns a boolean for logging',
          'An unchecked cast that may still throw later in the branch',
        ],
        answer: 0,
        explanation: 'Step 1: Test is `e instanceof Manager m`. Step 2: Pattern declares `m` on success. Step 3: Tracing `m.setBonus` compiles without `(Manager)` cast. Step 4: Scope is the true branch, so only bound-variable option matches.',
      },
      {
        q: 'When should a method be marked final?',
        options: [
          'Always, because final methods run without objects',
          'When the method should be invisible to all callers including subclasses',
          'When the method needs dynamic dispatch on every call',
          'When overriding must be forbidden to preserve security or optimization contracts',
        ],
        answer: 3,
        explanation: 'Step 1: Modifier is `final` on method. Step 2: Effect forbids `override`. Step 3: Tracing extension attempts reports cannot-override error. Step 4: Only preservation of behavior plus inlining explains intentional `final`.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch4-s2
  {
    sectionId: 'java-ch4-s2',
    readingTime: 8,
    intro: 'Abstract classes capture what it means to be a person while leaving how each subtype describes itself to concrete code. Final plus sealed controls then close the design where extension would break promises. This section implements Person plus Employee plus Student and constrains hierarchies deliberately.',
    objectives: [
      'Design abstract Person with concrete Employee plus Student subtypes and template behavior',
      'Choose final classes plus final methods to forbid unsafe extension points',
      'Declare sealed hierarchies with permits plus non-sealed escapes where modeling demands',
    ],
    concepts: [
      {
        term: 'Abstract person contract',
        kind: 'definition',
        statement: 'An **abstract** class such as `abstract class Person` with `public abstract String getDescription()` cannot be instantiated and forces each `subclass` to supply its own description.',
        detail: 'Abstract captures generality that is too vague for objects, like a bare person, while concrete Employee plus Student fulfill the contract with salary versus major details.',
      },
      {
        term: 'Template method shape',
        kind: 'method',
        statement: 'A concrete **template** method calls `getDescription` plus shared `getName` logic, so `Person` controls the algorithm skeleton while `subtypes` vary only the abstract step.',
        detail: 'This inverts control safely: the base sequences common work once, and new persons plug in by implementing one method rather than copying the sequence.',
      },
      {
        term: 'Final classes and methods',
        kind: 'law',
        statement: 'Declaring `final class ImmutableID` forbids **subclassing** entirely, while `public final void audit()` forbids **overriding** of that step though the class may still extend.',
        detail: 'Use final for value-like or security types where any override could forge identity or break immutability, and document the closure so clients compose rather than extend.',
      },
      {
        term: 'Sealed hierarchies',
        kind: 'notation',
        statement: 'A **sealed** header such as `sealed class Person permits Employee, Student` lists allowed `subtypes`, where `final` ends a branch and `non-sealed` reopens one branch selectively.',
        detail: 'Sealing models closed domains like payroll roles exhaustively for switch analysis while still permitting controlled growth at marked escape points.',
      },
      {
        term: 'Abstract versus interface choice',
        kind: 'insight',
        statement: 'Prefer **abstract** classes for `shared state` plus constructors plus protected helpers, and prefer `interfaces` for pure capability contracts across unrelated hierarchies.',
        detail: 'Horstmann places this bridge before interfaces: if subtypes share fields and template code, abstract fits; if flying plus floating types need one ability, an interface fits better.',
      },
    ],
    figures: [
      {
        caption: 'Abstract Person root with concrete branches plus final and sealed closures marked.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Abstract and sealed hierarchy" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Close only where needed</text><rect x="250" y="64" width="220" height="60" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="266" y="90" font-family="sans-serif" font-size="13" fill="currentColor">abstract Person sealed</text><text x="266" y="108" font-family="sans-serif" font-size="12" fill="currentColor">getDescription abstract</text><rect x="80" y="170" width="200" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="96" y="198" font-family="sans-serif" font-size="13" fill="currentColor">Employee final</text><text x="96" y="218" font-family="sans-serif" font-size="12" fill="currentColor">salary detail</text><rect x="330" y="170" width="200" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="346" y="198" font-family="sans-serif" font-size="13" fill="currentColor">Student non-sealed</text><text x="346" y="218" font-family="sans-serif" font-size="12" fill="currentColor">major detail</text><line x1="360" y1="124" x2="180" y2="170" stroke="currentColor" stroke-width="2"/><line x1="360" y1="124" x2="430" y2="170" stroke="currentColor" stroke-width="2"/><text x="36" y="280" font-family="sans-serif" font-size="13" fill="currentColor">Abstract holds name plus template, concretes add detail.</text><text x="36" y="302" font-family="sans-serif" font-size="13" fill="currentColor">Final ends branch, non-sealed reopens one branch.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Build Person plus Employee plus Student',
        problem: 'Factor common name handling into an abstract root while each subtype describes itself differently.',
        steps: [
          { label: 'Step 1: Declare the abstract root', text: 'Forbid bare persons but share names:\n```java\nabstract class Person {\n    private String name;\n    public Person(String name) { this.name = name; }\n    public String getName() { return name; }\n    public abstract String getDescription();\n}\n```\nNo new Person compiles, which is the intent for an incomplete concept.' },
          { label: 'Step 2: Implement both branches', text: 'Fulfill the contract with distinct data:\n```java\nclass Employee extends Person {\n    private double salary;\n    public Employee(String name, double salary) {\n        super(name);\n        this.salary = salary;\n    }\n    public String getDescription() {\n        return "an employee with salary " + salary;\n    }\n}\nclass Student extends Person {\n    private String major;\n    public Student(String name, String major) {\n        super(name);\n        this.major = major;\n    }\n    public String getDescription() {\n        return "a student majoring in " + major;\n    }\n}\n```\nEach calls super for the shared name then adds its own field.' },
          { label: 'Step 3: Use polymorphically', text: 'Treat both as persons for common work:\n```java\nPerson[] people = { new Employee("Harry", 50000), new Student("Asha", "Physics") };\nfor (Person p : people) {\n    System.out.println(p.getName() + " is " + p.getDescription());\n}\n```\nDynamic binding picks the right description per element.' },
        ],
        result: 'The loop prints employee plus student lines from one Person array, proving the template works.',
      },
      {
        title: 'Seal the hierarchy with intent',
        problem: 'Restrict Person to known payroll roles while leaving Student open for future graduate subtypes.',
        steps: [
          { label: 'Step 1: Seal the root', text: 'List the permitted branches:\n```java\nsealed class Person2 permits Employee2, Student2 { }\nfinal class Employee2 extends Person2 { }\nnon-sealed class Student2 extends Person2 { }\n```\nEmployee2 ends its branch while Student2 may still extend.' },
          { label: 'Step 2: Close a sensitive method', text: 'Forbid override of one step only:\n```java\n// inside Person2\n// public final String idTag() { return "payroll"; }\n```\nSubclasses inherit the tag unchanged, preserving audit identity.' },
          { label: 'Step 3: Choose abstract versus interface', text: 'Keep shared name plus constructor in abstract Person2, but move a cross-cutting ability such as Measurable to an interface when unrelated classes need it.' },
        ],
        result: 'The design is exhaustive for payroll switches yet open exactly where graduate modeling needs growth.',
      },
    ],
    keyTakeaways: [
      'Abstract classes define incomplete contracts with shared state plus template steps.',
      'Concrete subtypes fulfill abstract methods with their own fields plus wording.',
      'Final closes classes or methods against extension or overriding for safety.',
      'Sealed lists permitted subtypes while non-sealed reopens selected branches.',
    ],
    quiz: [
      {
        q: 'What does new Person fail to do when Person is abstract?',
        options: [
          'It fails compilation because abstract types cannot be instantiated',
          'It compiles but creates a null reference silently',
          'It creates an Employee automatically by guessing a subtype',
          'It allocates native memory outside the heap for safety',
        ],
        answer: 0,
        explanation: 'Step 1: Declaration is `abstract class Person`. Step 2: Expression `new Person` requests an instance. Step 3: Tracing compilation reports abstract cannot be instantiated. Step 4: Concrete `new Employee` or `new Student` is required instead.',
      },
      {
        q: 'What is the template-method benefit in Person?',
        options: [
          'Each subtype copies the whole algorithm with small edits',
          'Abstract methods run without any subclass implementation',
          'The base sequences shared steps once while subtypes vary one abstract step',
          'Templates remove the need for constructors in subclasses',
        ],
        answer: 2,
        explanation: 'Step 1: Base holds `getName` plus sequencing. Step 2: Hook is `getDescription` as `abstract`. Step 3: Tracing two subtypes shows one shared path with different hooks. Step 4: Copying is replaced by single implementation of the hook.',
      },
      // Placement-pattern: sealed permits plus final closure choice
      {
        q: 'sealed class Person permits Employee, Student is declared. What must Employee and Student do?',
        options: [
          'Both may ignore the seal and extend any other class instead',
          'Sealing prevents any instantiation of the permitted subtypes',
          'Both become interfaces automatically without further code',
          'Each must be final, sealed, or non-sealed to state its own openness',
        ],
        answer: 3,
        explanation: 'Step 1: Header is `sealed ... permits Employee, Student`. Step 2: Rule requires each permitted type to choose `final` or `sealed` or `non-sealed`. Step 3: Tracing `final class Employee` ends branch while `non-sealed Student` opens. Step 4: Only explicit openness choice satisfies the compiler.',
      },
      {
        q: 'When is final class the right choice?',
        options: [
          'When the class needs more subclasses to fix bugs',
          'When any future override could break identity or security promises',
          'When polymorphism is required on every method',
          'When the class has no fields and therefore needs extension',
        ],
        answer: 1,
        explanation: 'Step 1: Modifier is `final class`. Step 2: Effect is no `extends`. Step 3: Tracing value or security types shows override would forge behavior. Step 4: Closure is justified only to preserve `invariant` promises, not for convenience.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch4-s3
  {
    sectionId: 'java-ch4-s3',
    readingTime: 10,
    intro: 'Every class inherits toString plus equals plus hashCode from Object, so every class answers identity plus equality plus hashing whether designed or not. Default identity rarely matches domain meaning for employees or dates. This section implements the equality contract plus hash consistency plus debugging output with arrays support.',
    objectives: [
      'Override equals with reflexive plus symmetric plus transitive plus consistent guarantees',
      'Maintain hashCode consistency with equals using prime combination plus Objects helpers',
      'Write informative toString output including array-safe forms for debugging',
    ],
    concepts: [
      {
        term: 'Object as cosmic holder',
        kind: 'definition',
        statement: 'A variable of type **Object** such as `Object obj = new Employee(...)` can hold any `reference`, while `primitive` values plus `void` behavior need wrappers or separate handling.',
        detail: 'Use Object for generic holders then cast back after instanceof checks, remembering that arrays of any kind also extend Object and share its methods.',
      },
      {
        term: 'Equals contract',
        kind: 'theorem',
        statement: 'A correct **equals** method using `getClass` or `instanceof` plus `Objects.equals` for fields is reflexive plus symmetric plus transitive plus consistent and returns `false` for `null`.',
        detail: 'Horstmann favors getClass for strict same-class equality in hierarchies where symmetry would break, and instanceof for documented cross-class cases like abstract roots.',
      },
      {
        term: 'HashCode consistency',
        kind: 'method',
        statement: 'Equal objects must share **hashCode** values built by `31 * hash + fieldHash` or `Objects.hash(name, salary)`, because `HashSet` plus `HashMap` bucket by that integer before calling equals.',
        detail: 'String hashing itself uses thirty-one times accumulation over characters, and mutable fields in hashes corrupt collections if changed after insertion.',
      },
      {
        term: 'ToString for debugging',
        kind: 'method',
        statement: 'A useful **toString** returns `getClass().getName() + "[name=" + name + "]"` so logs identify the `runtime` type plus state without debugger attachment.',
        detail: 'Arrays need Arrays.toString plus deepToString for nested tables, since default array toString prints type plus identity hash rather than contents.',
      },
      {
        term: 'Array equality helpers',
        kind: 'notation',
        statement: 'Content comparison for **arrays** uses `Arrays.equals(a, b)` for one dimension and `Arrays.deepEquals` for nested tables, while `Objects.equals(a, b)` null-safely delegates to `equals`.',
        detail: 'Direct double equals on arrays tests identity, so tests plus collection keys must call the helper that walks elements with equals per slot.',
      },
    ],
    figures: [
      {
        caption: 'Equals plus hashCode contract funneling equal objects to one bucket with matching codes.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Equals hashCode contract" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Equal means same hash</text><rect x="36" y="64" width="180" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="13" fill="currentColor">e1 fields</text><text x="52" y="112" font-family="sans-serif" font-size="12" fill="currentColor">Harry, 50000</text><rect x="250" y="64" width="180" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="266" y="92" font-family="sans-serif" font-size="13" fill="currentColor">e2 fields</text><text x="266" y="112" font-family="sans-serif" font-size="12" fill="currentColor">Harry, 50000</text><rect x="464" y="64" width="160" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="480" y="92" font-family="sans-serif" font-size="13" fill="currentColor">one bucket</text><text x="480" y="112" font-family="sans-serif" font-size="12" fill="currentColor">same hash</text><line x1="216" y1="99" x2="250" y2="99" stroke="currentColor" stroke-width="2"/><text x="218" y="92" font-family="sans-serif" font-size="12" fill="currentColor">equals</text><line x1="340" y1="134" x2="520" y2="134" stroke="currentColor" stroke-width="2"/><line x1="126" y1="134" x2="520" y2="134" stroke="currentColor" stroke-width="2"/><text x="36" y="190" font-family="sans-serif" font-size="13" fill="currentColor">equals true forces hashCode equal, never reverse.</text><text x="36" y="214" font-family="sans-serif" font-size="13" fill="currentColor">toString shows class plus fields for log diagnosis.</text><text x="36" y="250" font-family="sans-serif" font-size="13" fill="currentColor">Arrays use Arrays.equals, nested use deepEquals.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Implement equals plus hashCode for Employee',
        problem: 'Give Employee value equality on name plus salary plus hireDay with hash consistency for hash-based collections.',
        steps: [
          { label: 'Step 1: Write equals by contract', text: 'Check identity plus null plus class then fields:\n```java\n@Override\npublic boolean equals(Object other) {\n    if (this == other) { return true; }\n    if (other == null) { return false; }\n    if (getClass() != other.getClass()) { return false; }\n    Employee e = (Employee) other;\n    return Objects.equals(name, e.name) && salary == e.salary && Objects.equals(hireDay, e.hireDay);\n}\n```\nGetClass keeps Manager and Employee unequal symmetrically.' },
          { label: 'Step 2: Match hashCode to equals', text: 'Combine exactly the compared fields:\n```java\n@Override\npublic int hashCode() {\n    return Objects.hash(name, salary, hireDay);\n}\n```\nEqual employees now land in the same hash bucket before equals confirms.' },
          { label: 'Step 3: Prove set behavior', text: 'Insert duplicates into a hash set:\n```java\nimport java.util.HashSet;\nvar set = new HashSet<Employee>();\nset.add(new Employee("Harry", 50000, 2001, 3, 15));\nset.add(new Employee("Harry", 50000, 2001, 3, 15));\nSystem.out.println(set.size());\n```\nSize one proves both contract halves agree.' },
        ],
        result: 'Duplicate employees collapse to one set entry, confirming equals plus hashCode consistency.',
      },
      {
        title: 'Write toString that debugs arrays',
        problem: 'Produce readable logs for single employees and for tables of scores without identity hashes.',
        steps: [
          { label: 'Step 1: Format one object', text: 'Name the runtime class plus fields:\n```java\n@Override\npublic String toString() {\n    return getClass().getName() + "[name=" + name + ",salary=" + salary + ",hireDay=" + hireDay + "]";\n}\nSystem.out.println(new Employee("Harry", 50000, 2001, 3, 15));\n```\nLogs now show Employee plus brackets rather than Employee at hex.' },
          { label: 'Step 2: Print arrays safely', text: 'Walk contents instead of identity:\n```java\nimport java.util.Arrays;\nint[] scores = { 90, 80, 70 };\nSystem.out.println(Arrays.toString(scores));\nint[][] table = { { 1, 2 }, { 3, 4 } };\nSystem.out.println(Arrays.deepToString(table));\n```\nDeep form expands nested rows while plain toString on arrays would not.' },
          { label: 'Step 3: Hold via Object then restore', text: 'Use the cosmic type for transport:\n```java\nObject obj = new Employee("Harry", 50000, 2001, 3, 15);\nEmployee e = (Employee) obj;\nSystem.out.println(e);\n```\nCasting after knowledge of the original type recovers full behavior.' },
        ],
        result: 'Logs show field values plus array contents, making failures diagnosable without a debugger.',
      },
    ],
    keyTakeaways: [
      'Object variables hold any reference while primitives stay outside the hierarchy.',
      'Equals must be reflexive plus symmetric plus transitive plus consistent plus null-safe.',
      'Equal objects must share hashCode built from the same compared fields.',
      'ToString plus array helpers make runtime type plus contents visible in logs.',
    ],
    quiz: [
      {
        q: 'Why does equals start with if (this equals equals other) return true?',
        options: [
          'To allocate a new object for faster field access',
          'To throw immediately for identical references as a safety check',
          'To avoid field comparison when both references point to one object',
          'To satisfy the compiler that Object is imported',
        ],
        answer: 2,
        explanation: 'Step 1: Test is `this == other` identity. Step 2: True means same `object`. Step 3: Tracing identical `references` skips `Objects.equals` work. Step 4: Shortcut is both correct and fast, so only that option matches.',
      },
      {
        q: 'Two equal Employees return different hashCodes. What breaks?',
        options: [
          'HashSet may store both as duplicates in different buckets despite equals true',
          'Nothing, hashCodes are advisory and never used by collections',
          'ToString stops working for both objects',
          'Compilation fails because hashCode must be prime',
        ],
        answer: 0,
        explanation: 'Step 1: Contract demands equal `equals` implies equal `hashCode`. Step 2: Structure `HashSet` buckets by `hash`. Step 3: Tracing inserts shows different buckets skip `equals` check. Step 4: Duplicate logical entries appear, proving the break.',
      },
      // Placement-pattern: getClass versus instanceof plus array printing
      {
        q: 'Why use getClass not instanceof for Employee equals in a Manager hierarchy?',
        options: [
          'GetClass is shorter to type and therefore preferred stylistically',
          'GetClass preserves symmetry when subclasses add bonus state compared unequally',
          'Instanceof is illegal in equals methods by language rule',
          'GetClass automatically compares all fields without code',
        ],
        answer: 1,
        explanation: 'Step 1: Options are `getClass()` versus `instanceof`. Step 2: `Manager` adds `bonus` to equality. Step 3: Tracing cross-type `equals` shows `instanceof` can be asymmetric. Step 4: Strict `getClass` keeps `Employee` versus `Manager` unequal both ways.',
      },
      {
        q: 'How should nested int table contents be logged?',
        options: [
          'Tables cannot be logged and must be debugged by guessing',
          'With table.toString which prints nested values directly',
          'By casting the table to Object and printing the reference',
          'With Arrays.deepToString(table) to expand all rows',
        ],
        answer: 3,
        explanation: 'Step 1: Value is `int[][] table`. Step 2: Call `table.toString()` shows type plus hash. Step 3: Tracing `Arrays.deepToString` walks rows via `Arrays.toString`. Step 4: Only deep helper reveals `1, 2, 3, 4` contents.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch4-s4
  {
    sectionId: 'java-ch4-s4',
    readingTime: 9,
    intro: 'Enums give fixed vocabularies behavior plus state while reflection exposes class structure at runtime. Size with abbreviation shows type-safe constants grown into full classes. Class objects plus method inspection plus generic array growth then preview the reflective power behind tools and frameworks.',
    objectives: [
      'Declare enums with fields plus constructors plus methods and use values plus valueOf correctly',
      'Obtain Class objects and inspect methods plus modifiers for documentation and tools',
      'Read plus write arrays reflectively and invoke methods plus constructors with care',
    ],
    concepts: [
      {
        term: 'Enum as behavior-rich constants',
        kind: 'definition',
        statement: 'An **enum** such as `enum Size { SMALL("S"), MEDIUM("M"), LARGE("L") }` assigns each constant a `private String abbrev` via a constructor plus `getAbbrev` accessor.',
        detail: 'Enums are final-like classes with a fixed instance set, so switch plus comparison plus methods stay exhaustive without integer-code drift.',
      },
      {
        term: 'Enum API surface',
        kind: 'notation',
        statement: 'Every enum inherits **members** like `toString` plus `valueOf` plus `values` plus `ordinal` plus `compareTo`, where `Size.valueOf("SMALL")` parses and `Size.values()` lists in `declaration` order.',
        detail: 'Ordinal depends on textual position and must not encode business persistence; store explicit fields like abbrev for stable external codes.',
      },
      {
        term: 'Class objects three ways',
        kind: 'method',
        statement: 'Obtain **Class** via `e.getClass()` plus `Employee.class` plus `Class.forName("com.example.Employee")`, where `forName` can throw `ClassNotFoundException` for missing names.',
        detail: 'Horstmann previews exception declaration here: reflective lookup advertises checked failure because the named class may not be on the class path at runtime.',
      },
      {
        term: 'Reflective method analysis',
        kind: 'method',
        statement: 'Inspection uses **reflection** with `getDeclaredMethods` plus `Modifier.toString` plus `getReturnType` to print `public double getSalary` style signatures for `documentation` tools.',
        detail: 'Frameworks generate listings plus proxies from this metadata, but ordinary business code should prefer direct calls for type safety plus refactoring support.',
      },
      {
        term: 'Generic arrays plus invocation',
        kind: 'insight',
        statement: 'The **Array** helper grows tables with `Array.newInstance(componentType, n)` plus `Array.get` plus `Array.set`, while `Method.invoke` plus `Constructor.newInstance` call discovered members reflectively.',
        detail: 'Reflection bypasses compile checks so argument mismatches surface as wrapped exceptions at runtime; validate counts plus types and unwrap causes when diagnosing failures.',
      },
    ],
    figures: [
      {
        caption: 'Enum constants as fixed instances beside Class metadata feeding reflective tools.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Enums and reflection overview" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Fixed set plus open inspection</text><rect x="36" y="64" width="200" height="100" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="13" fill="currentColor">enum Size</text><text x="52" y="112" font-family="sans-serif" font-size="12" fill="currentColor">SMALL S</text><text x="52" y="130" font-family="sans-serif" font-size="12" fill="currentColor">MEDIUM M</text><text x="52" y="148" font-family="sans-serif" font-size="12" fill="currentColor">LARGE L</text><rect x="270" y="64" width="180" height="100" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="286" y="92" font-family="sans-serif" font-size="13" fill="currentColor">Class object</text><text x="286" y="112" font-family="sans-serif" font-size="12" fill="currentColor">methods list</text><text x="286" y="130" font-family="sans-serif" font-size="12" fill="currentColor">modifiers</text><rect x="484" y="64" width="170" height="100" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="500" y="92" font-family="sans-serif" font-size="13" fill="currentColor">Array plus</text><text x="500" y="112" font-family="sans-serif" font-size="12" fill="currentColor">Method invoke</text><line x1="236" y1="114" x2="270" y2="114" stroke="currentColor" stroke-width="2"/><line x1="450" y1="114" x2="484" y2="114" stroke="currentColor" stroke-width="2"/><text x="36" y="210" font-family="sans-serif" font-size="13" fill="currentColor">Enums close the value set, reflection opens structure.</text><text x="36" y="234" font-family="sans-serif" font-size="13" fill="currentColor">Prefer direct calls, reserve invoke for tools.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Give Size behavior plus parse safely',
        problem: 'Attach abbreviations to enum constants, expose them, and convert user text to enum without ordinal dependence.',
        steps: [
          { label: 'Step 1: Add state to constants', text: 'Give each size a stable code:\n```java\nenum Size {\n    SMALL("S"), MEDIUM("M"), LARGE("L");\n    private String abbrev;\n    Size(String abbrev) { this.abbrev = abbrev; }\n    public String getAbbrev() { return abbrev; }\n}\n```\nThe constructor runs once per constant at class load.' },
          { label: 'Step 2: Parse plus list', text: 'Convert text and enumerate choices:\n```java\nSize s = Size.valueOf("MEDIUM");\nSystem.out.println(s.getAbbrev());\nfor (Size v : Size.values()) {\n    System.out.println(v + v.getAbbrev());\n}\n```\nValueOf is case-sensitive while values follows declaration order.' },
          { label: 'Step 3: Compare without ordinals', text: 'Order by declaration only for UI sorting:\n```java\nSystem.out.println(Size.SMALL.compareTo(Size.LARGE));\nSystem.out.println(Size.SMALL.ordinal());\n```\nNegative compare means earlier declaration; never persist the ordinal number.' },
        ],
        result: 'The prints show M plus all three pairs plus ordering, with abbreviations stable across refactors.',
      },
      {
        title: 'Inspect a class and grow an array reflectively',
        problem: 'List Employee methods with modifiers and grow a String array without knowing its type at compile time.',
        steps: [
          { label: 'Step 1: Get the Class three ways', text: 'Reach metadata from instance plus literal plus name:\n```java\nEmployee e = new Employee("Harry", 50000, 2001, 3, 15);\nClass<?> c1 = e.getClass();\nClass<?> c2 = Employee.class;\nClass<?> c3 = Class.forName("Employee");\nSystem.out.println(c1 == c2);\n```\nForName throws checked ClassNotFoundException when the name is absent.' },
          { label: 'Step 2: Print method signatures', text: 'Analyze capabilities like a tool would:\n```java\nimport java.lang.reflect.Modifier;\nvar methods = c1.getDeclaredMethods();\nfor (var m : methods) {\n    System.out.println(Modifier.toString(m.getModifiers()) + " " + m.getName());\n}\n```\nOutput shows public getName plus getSalary plus raiseSalary with modifier words.' },
          { label: 'Step 3: Grow an array generically', text: 'Allocate by component type at runtime:\n```java\nimport java.lang.reflect.Array;\nString[] old = { "a", "b" };\nString[] grown = (String[]) Array.newInstance(old.getClass().getComponentType(), 4);\nSystem.arraycopy(old, 0, grown, 0, old.length);\nSystem.out.println(grown.length);\n```\nNewInstance plus get plus set implement ArrayList growth behind the scenes.' },
        ],
        result: 'Method listing plus length 4 prove reflective reading plus generic array writing work without compile-time element types.',
      },
    ],
    keyTakeaways: [
      'Enums are fixed classes with fields plus constructors plus behavior, not integer codes.',
      'ValueOf parses while values lists, and ordinals must not drive persistence.',
      'Class objects come from instance plus literal plus name lookup with checked failure.',
      'Reflective invoke plus array helpers power tools but trade compile safety for runtime flexibility.',
    ],
    quiz: [
      {
        q: 'What does enum Size with abbrev field guarantee versus int codes?',
        options: [
          'Any integer remains valid, preserving backward compatibility with bad data',
          'Abbreviations change automatically when declaration order changes',
          'Constants can be created at runtime by callers with new Size',
          'Only named constants exist and each carries its stable abbreviation behavior',
        ],
        answer: 3,
        explanation: 'Step 1: Declaration is `enum Size` with `SMALL` and others. Step 2: Constructor sets `abbrev` per constant. Step 3: Tracing `new Size` reports a compile error since instantiation is closed. Step 4: Only fixed set plus `getAbbrev` behavior matches.',
      },
      {
        q: 'Which call lists all Size constants in declaration order?',
        options: [
          'Size.ordinal() called once on the enum class',
          'Size.values() iterated with an enhanced for loop',
          'Class.forName on the string Size without handling failure',
          'Arrays.sort on a single Size constant',
        ],
        answer: 1,
        explanation: 'Step 1: Need array of constants via `values`. Step 2: Loop `for (Size v : Size.values())` visits each. Step 3: Tracing prints `SMALL` then `MEDIUM` then `LARGE`. Step 4: Other options query one value or sort one element, so only `values` fits.',
      },
      // Placement-pattern: Class lookup plus reflective invoke caution
      {
        q: 'Class.forName with a missing name throws which kind of failure?',
        options: [
          'A checked ClassNotFoundException that callers must declare or catch',
          'No failure, it returns null silently for later dereference',
          'An assertion error that is disabled without minus ea',
          'A logging warning that execution ignores and continues',
        ],
        answer: 0,
        explanation: 'Step 1: Call is `Class.forName("Employee")`. Step 2: Missing name means `ClassNotFoundException`. Step 3: Tracing signature shows `throws` checked declaration. Step 4: Callers handle or declare, so only checked-failure option holds.',
      },
      {
        q: 'Why prefer direct method calls over Method.invoke in business code?',
        options: [
          'Invoke guarantees no exceptions at runtime',
          'Reflection is faster because it skips verification',
          'Direct calls check types at compile time and refactor safely',
          'Direct calls prevent any use of objects or classes',
        ],
        answer: 2,
        explanation: 'Step 1: Compare `e.getSalary()` with `Method.invoke`. Step 2: Direct call type-checks `e` as `Employee`. Step 3: Tracing rename shows IDE updating direct calls but missing `string` names. Step 4: Only compile safety plus refactoring explains the preference.',
      },
    ],
  },
]

export const javaCh4Content = javaCh04Content

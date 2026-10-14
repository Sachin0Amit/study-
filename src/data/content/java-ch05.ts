import type { SectionContent } from '../library'

// ============================================================================
// Core Java Vol. I 12e — Chapter 5: Interfaces, Lambdas and Inner Classes
// Book Ch.6 Interfaces, Lambda Expressions, and Inner Classes.
// ============================================================================

export const javaCh05Content: SectionContent[] = [
  // ---------------------------------------------------------------- java-ch5-s1
  {
    sectionId: 'java-ch5-s1',
    readingTime: 10,
    intro: 'Interfaces state what conforming classes must do without dictating how they store state. Comparable plus Comparator plus Cloneable show contracts in action across sorting and copying. This section adds static plus private plus default methods and the rules that resolve their conflicts.',
    objectives: [
      'Implement Comparable plus Comparator to order objects with sort promises',
      'Evolve interfaces with static plus private plus default methods without breaking clients',
      'Resolve default-method conflicts with explicit super choices and apply cloning rules',
    ],
    concepts: [
      {
        term: 'Interface as service promise',
        kind: 'definition',
        statement: 'An **interface** such as `public interface Comparable<T> { int compareTo(T other); }` lets `Arrays.sort` promise ordering for any `class` that supplies the required comparison.',
        detail: 'Suppliers state if your class conforms then the service runs, which decouples sorting code from employee plus string plus date implementations.',
      },
      {
        term: 'Interface properties',
        kind: 'law',
        statement: 'Members are implicitly **public** where fields are `public static final` constants, methods are `public abstract` unless default plus static plus private, and no `instance` fields are allowed.',
        detail: 'A class can implement many interfaces for multiple types while extending one class, which is multiple inheritance of type without state diamonds.',
      },
      {
        term: 'Static plus private helpers',
        kind: 'method',
        statement: 'Modern interfaces host **static** factories like `Path.of` plus `private` helpers that share code between `default` methods without a separate companion `class`.',
        detail: 'Private interface methods must be instance or static helpers for other interface methods only, keeping utility logic with the contract it serves.',
      },
      {
        term: 'Default evolution plus conflicts',
        kind: 'theorem',
        statement: 'A **default** method such as `default boolean removeIf(...)` adds capability compatibly, and conflicts resolve by `X.super.method` choice where class wins over interface and most specific interface wins.',
        detail: 'Horstmann resolves Person plus Named collisions by explicit override calling the intended super default, which documents the survivor rather than inheriting ambiguity.',
      },
      {
        term: 'Callbacks plus cloning',
        kind: 'method',
        statement: 'Interfaces enable **callbacks** with `ActionListener` for timers and ordering with `Comparator.comparing`, while `Cloneable` plus `clone` demand `super.clone` plus deep copying of `mutable` fields.',
        detail: 'Comparator chains compare then tie-break cleanly, and correct cloning copies dates plus builders so the clone shares no mutable subobjects with the original.',
      },
    ],
    figures: [
      {
        caption: 'One sort service serving many conforming classes through Comparable and Comparator.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Interface service diagram" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Conform then service runs</text><rect x="250" y="64" width="220" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="266" y="92" font-family="sans-serif" font-size="13" fill="currentColor">Arrays.sort service</text><text x="266" y="112" font-family="sans-serif" font-size="12" fill="currentColor">needs Comparable</text><rect x="36" y="170" width="170" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="198" font-family="sans-serif" font-size="13" fill="currentColor">Employee</text><text x="52" y="218" font-family="sans-serif" font-size="12" fill="currentColor">compareTo salary</text><rect x="230" y="170" width="170" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="246" y="198" font-family="sans-serif" font-size="13" fill="currentColor">String</text><text x="246" y="218" font-family="sans-serif" font-size="12" fill="currentColor">compareTo text</text><rect x="424" y="170" width="170" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="440" y="198" font-family="sans-serif" font-size="13" fill="currentColor">Date</text><text x="440" y="218" font-family="sans-serif" font-size="12" fill="currentColor">compareTo time</text><line x1="121" y1="170" x2="300" y2="134" stroke="currentColor" stroke-width="2"/><line x1="315" y1="170" x2="330" y2="134" stroke="currentColor" stroke-width="2"/><line x1="509" y1="170" x2="410" y2="134" stroke="currentColor" stroke-width="2"/><text x="36" y="280" font-family="sans-serif" font-size="13" fill="currentColor">Default methods add service without breaking conformers.</text><text x="36" y="302" font-family="sans-serif" font-size="13" fill="currentColor">Conflicts pick class first, then most specific default.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Sort employees with Comparable and Comparator',
        problem: 'Order staff by salary naturally and by name on demand without changing the Employee class for each new order.',
        steps: [
          { label: 'Step 1: Implement natural order', text: 'Promise comparison by salary:\n```java\nimport java.util.Arrays;\nclass Employee implements Comparable<Employee> {\n    public int compareTo(Employee other) {\n        return Double.compare(salary, other.salary);\n    }\n}\nEmployee[] staff = { new Employee("Harry", 50000), new Employee("Asha", 70000) };\nArrays.sort(staff);\n```\nDouble dot compare handles NaN plus signed zeros correctly.' },
          { label: 'Step 2: Supply alternate order', text: 'Compare names without touching the class:\n```java\nimport java.util.Comparator;\nArrays.sort(staff, Comparator.comparing(Employee::getName));\n```\nComparing builds a comparator from a key extractor method reference.' },
          { label: 'Step 3: Chain tie-breakers', text: 'Break salary ties by name:\n```java\nArrays.sort(staff, Comparator.comparing(Employee::getSalary).thenComparing(Employee::getName));\n```\nThenComparing runs only when the first comparison reports equality.' },
        ],
        result: 'Staff sorts by salary by default and by name or salary-then-name when a comparator is supplied.',
      },
      {
        title: 'Resolve a default conflict plus clone safely',
        problem: 'Combine two interfaces with the same default greeting and copy an employee with a mutable hire date deeply.',
        steps: [
          { label: 'Step 1: Create the collision', text: 'Two defaults with one name:\n```java\ninterface Named { default String label() { return "named"; } }\ninterface Described { default String label() { return "described"; } }\nclass Item implements Named, Described {\n    public String label() { return Named.super.label(); }\n}\n```\nExplicit super selects the survivor and documents intent.' },
          { label: 'Step 2: Mark cloneable state', text: 'Promise copying support:\n```java\nclass Employee2 implements Cloneable {\n    public Employee2 clone() throws CloneNotSupportedException {\n        Employee2 c = (Employee2) super.clone();\n        c.hireDay = LocalDate.of(hireDay.getYear(), hireDay.getMonthValue(), hireDay.getDayOfMonth());\n        return c;\n    }\n}\n```\nSuper dot clone copies the shallow image before mutable fields are re-copied.' },
          { label: 'Step 3: Prove deep independence', text: 'Mutate the clone date path and compare:\n```java\n// e2 = e.clone(); changing e2 hireDay leaves e hireDay unchanged\n// shallow copy alone would share the mutable holder\n```\nDeep copying keeps the two life histories separate.' },
        ],
        result: 'Conflict resolves explicitly and clones share no mutable subobjects with their sources.',
      },
    ],
    keyTakeaways: [
      'Interfaces promise behavior so services like sort can run on any conformer.',
      'No instance fields are allowed while constants plus abstract plus default plus static methods are.',
      'Defaults evolve APIs compatibly with class-first plus most-specific conflict rules.',
      'Comparators order on demand while Cloneable demands deep copying discipline.',
    ],
    quiz: [
      {
        q: 'What must a class supply to work with Arrays.sort without an extra comparator?',
        options: [
          'A private clone method returning a deep copy',
          'A public compareTo method from the Comparable interface',
          'A static main method printing the array length',
          'No method, sort works on all objects automatically',
        ],
        answer: 1,
        explanation: 'Step 1: Service is `Arrays.sort(staff)` with no comparator. Step 2: Requirement is `Comparable` with `compareTo`. Step 3: Tracing without it reports no suitable method found. Step 4: Only `compareTo` supply satisfies the promise.',
      },
      {
        q: 'How is a default-method collision resolved in an implementing class?',
        options: [
          'By deleting one interface from the implements list silently',
          'By renaming the class to match one interface name',
          'By overriding and selecting with X dot super dot method explicitly',
          'Collisions cannot occur because defaults are private',
        ],
        answer: 2,
        explanation: 'Step 1: Both interfaces define `label` as `default`. Step 2: Class must `override` to resolve. Step 3: Tracing `Named.super.label()` picks the survivor. Step 4: Only explicit `super` choice documents and compiles.',
      },
      // Placement-pattern: comparator chaining plus clone depth
      {
        q: 'What does Comparator.comparing(Employee colon colon getName) build?',
        options: [
          'A comparator that extracts names as sort keys',
          'A new Employee with a random name for testing',
          'A deep clone of the whole staff array',
          'A file writer that logs names to disk',
        ],
        answer: 0,
        explanation: 'Step 1: Input is method reference `Employee::getName`. Step 2: Factory `comparing` uses it as `key` extractor. Step 3: Tracing `sort` shows ordering by extracted `String`. Step 4: No objects or files are created, so only key-based comparator fits.',
      },
      {
        q: 'Why must clone copy mutable hireDay separately after super.clone?',
        options: [
          'Super.clone already deep-copies everything so extra copy wastes time but is harmless style',
          'Cloning is forbidden for any class with dates',
          'Mutable fields cannot be copied in Java and must be set to null',
          'Shallow super.clone shares the mutable date holder, so independent copying prevents aliasing',
        ],
        answer: 3,
        explanation: 'Step 1: Call `super.clone()` copies field bits. Step 2: Reference `hireDay` still points to shared holder. Step 3: Tracing mutation via clone shows original changing too. Step 4: Re-copying `LocalDate` or holder gives independence.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch5-s2
  {
    sectionId: 'java-ch5-s2',
    readingTime: 10,
    intro: 'Lambdas pass behavior as data without anonymous boilerplate for timers plus sorters plus filters. Functional interfaces with one abstract method give each lambda its target type. This section covers syntax plus method references plus constructor references plus effectively-final capture plus comparator factories.',
    objectives: [
      'Write lambda expressions with inferred plus explicit plus single-parameter forms correctly',
      'Choose Predicate plus Supplier plus Comparator targets and pass behavior to APIs',
      'Replace single-method lambdas with method plus constructor references and respect capture rules',
    ],
    concepts: [
      {
        term: 'Why lambdas for deferred code',
        kind: 'insight',
        statement: 'A **lambda** such as `e -> e == null` hands `removeIf` the test to run later, just as `event -> System.out.println(event)` hands a `Timer` its callback without a named class.',
        detail: 'Before lambdas every callback needed an object of a single-method class, which obscured sorting plus timing plus filtering APIs behind ceremony.',
      },
      {
        term: 'Lambda syntax shapes',
        kind: 'notation',
        statement: 'The **shapes** include `(String a, String b) -> a.length() - b.length()` plus `(a, b) -> a.length() - b.length()` plus `e -> e == null` plus `() -> new LocalDate(...)` where types may be `inferred`.',
        detail: 'Parentheses vanish for one inferred parameter, braces plus return appear for multi-statement bodies, and the compiler checks the shape against the target functional interface.',
      },
      {
        term: 'Functional interfaces',
        kind: 'definition',
        statement: 'A **functional** interface like `Predicate<T>` with `boolean test(T t)` or `Supplier<T>` with `T get()` supplies the single `abstract` slot that a lambda implements.',
        detail: 'List dot removeIf takes Predicate while requireNonNullElseGet takes Supplier for lazy defaults, so the same arrow shape means different contracts per call site.',
      },
      {
        term: 'Method plus constructor references',
        kind: 'method',
        statement: 'A **reference** such as `String::compareToIgnoreCase` plus `System.out::println` plus `Person[]::new` reuses an existing `method` or `constructor` wherever a matching lambda is expected.',
        detail: 'References sort as Class colon colon static, object colon colon instance, and Class colon colon instance with shifted receiver, while array constructors feed toArray with exact sizing.',
      },
      {
        term: 'Scope and effectively final capture',
        kind: 'law',
        statement: 'Lambdas capture **effectively-final** locals like `String text` from `repeatMessage`, where the variable is never `reassigned` after capture and `this` means the enclosing object, not the lambda.',
        detail: 'Captured values persist after the method returns because the lambda keeps copies, so mutating the source variable later is forbidden to prevent stale versus fresh confusion.',
      },
    ],
    figures: [
      {
        caption: 'Lambda shapes flowing into Predicate plus Supplier plus Comparator targets with captured context.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Lambda targets diagram" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Behavior as argument</text><rect x="36" y="64" width="180" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="12" fill="currentColor">e minus larger e null</text><text x="52" y="112" font-family="sans-serif" font-size="12" fill="currentColor">lambda test</text><rect x="250" y="64" width="180" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="266" y="92" font-family="sans-serif" font-size="12" fill="currentColor">System out println</text><text x="266" y="112" font-family="sans-serif" font-size="12" fill="currentColor">method ref</text><rect x="464" y="64" width="160" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="480" y="92" font-family="sans-serif" font-size="12" fill="currentColor">Person new array</text><text x="480" y="112" font-family="sans-serif" font-size="12" fill="currentColor">ctor ref</text><rect x="36" y="170" width="280" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="198" font-family="sans-serif" font-size="13" fill="currentColor">Predicate, Supplier target</text><text x="52" y="218" font-family="sans-serif" font-size="12" fill="currentColor">one abstract method</text><rect x="344" y="170" width="280" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="360" y="198" font-family="sans-serif" font-size="13" fill="currentColor">capture text effectively final</text><text x="360" y="218" font-family="sans-serif" font-size="12" fill="currentColor">this is outer object</text><text x="36" y="280" font-family="sans-serif" font-size="13" fill="currentColor">Same arrow, different contract per call site.</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Filter plus defer with Predicate and Supplier',
        problem: 'Remove nulls from a list with a lambda predicate and defer an expensive default date with a supplier.',
        steps: [
          { label: 'Step 1: Filter with Predicate', text: 'Pass the test to run per element:\n```java\nimport java.util.ArrayList;\nimport java.util.List;\nList<String> list = new ArrayList<>(List.of("a", "b"));\nlist.removeIf(e -> e == null);\nSystem.out.println(list.size());\n```\nRemoveIf expects Predicate with test returning boolean.' },
          { label: 'Step 2: Defer with Supplier', text: 'Build the fallback only when needed:\n```java\nimport java.time.LocalDate;\nimport java.util.Objects;\nLocalDate day = null;\nLocalDate hireDay = Objects.requireNonNullElseGet(day, () -> LocalDate.of(1970, 1, 1));\nSystem.out.println(hireDay);\n```\nThe lambda runs only when day is null, unlike an eager constructor argument.' },
          { label: 'Step 3: Sort with lambda', text: 'Order strings by length inline:\n```java\nString[] words = { "pear", "fig", "apple" };\nArrays.sort(words, (a, b) -> a.length() - b.length());\nSystem.out.println(Arrays.toString(words));\n```\nParameter types infer from the Comparator target.' },
        ],
        result: 'Nulls vanish, the default date appears only on demand, and words sort by length without a named class.',
      },
      {
        title: 'Replace lambdas with references plus capture context',
        problem: 'Print timer events with a method reference, size an array with a constructor reference, and capture message text legally.',
        steps: [
          { label: 'Step 1: Reference a method', text: 'Swap single-call lambdas for names:\n```java\nimport javax.swing.Timer;\nTimer t = new Timer(1000, System.out::println);\nt.stop();\nArrays.sort(words, String::compareToIgnoreCase);\n```\nSystem dot out println and String compare become first-class behaviors.' },
          { label: 'Step 2: Reference a constructor', text: 'Size the result array exactly:\n```java\nPerson[] people = stream.toArray(Person[]::new);\nSystem.out.println(people.length);\n```\nToArray invokes the referenced constructor with the right length.' },
          { label: 'Step 3: Capture effectively final text', text: 'Close over stable context:\n```java\npublic static void repeatMessage(String text, int delay) {\n    var listener = (java.awt.event.ActionListener) (event -> {\n        System.out.println(text);\n    });\n    new Timer(delay, listener).start();\n}\n```\nText is never reassigned after capture, so the delayed print sees the intended value.' },
        ],
        result: 'References shorten single-method lambdas while capture rules keep delayed reads predictable.',
      },
    ],
    keyTakeaways: [
      'Lambdas pass deferred tests plus actions plus suppliers without named classes.',
      'One abstract method per functional interface defines the lambda contract at each call.',
      'Method plus constructor references replace single-method lambdas with reusable names.',
      'Captured locals must stay effectively final while this still means the outer object.',
    ],
    quiz: [
      {
        q: 'Which target fits list.removeIf(e minus larger e equals equals null)?',
        options: [
          'Predicate, whose test method takes an element and returns boolean',
          'Supplier, which takes no arguments and returns a value',
          'Runnable, which returns an integer status code',
          'No interface, lambdas need no target type in Java',
        ],
        answer: 0,
        explanation: 'Step 1: Call is `removeIf` with `e -> e == null`. Step 2: Parameter is element `e` returning `boolean`. Step 3: Tracing signature shows `Predicate` with `test`. Step 4: `Supplier` takes no input, so only `Predicate` matches.',
      },
      {
        q: 'Why use requireNonNullElseGet(day, () minus larger default) instead of an eager default?',
        options: [
          'Eager defaults are illegal in Java method calls',
          'Suppliers run before null checks and therefore faster in all cases',
          'The supplier lambda runs only when day is null, avoiding wasted construction',
          'Lambdas automatically cache all defaults across programs',
        ],
        answer: 2,
        explanation: 'Step 1: Compare `requireNonNullElse` eager with `ElseGet` lazy. Step 2: Argument `() -> LocalDate.of(...)` is a `Supplier`. Step 3: Tracing non-null `day` shows constructor skipped. Step 4: Only on-demand `get` explains the saving.',
      },
      // Placement-pattern: reference kinds plus capture legality
      {
        q: 'What does String colon colon compareToIgnoreCase denote as a sort argument?',
        options: [
          'A package name that must be imported before sorting',
          'An immediate string comparison result computed at reference time',
          'A new String object containing the text compareToIgnoreCase',
          'A method reference compatible with a two-string comparator',
        ],
        answer: 3,
        explanation: 'Step 1: Form is `String::compareToIgnoreCase` as `reference`. Step 2: Target is `Comparator` with two inputs. Step 3: Tracing `sort` shows receiver-shifted invocation per pair. Step 4: No value is computed early, so only comparator compatibility fits.',
      },
      {
        q: 'A lambda captures String text then later code reassigns text. What happens?',
        options: [
          'The lambda silently keeps the old value while code uses the new one with no error',
          'Compilation fails because captured locals must stay effectively final',
          'The reassignment updates all already-created lambdas automatically',
          'Captured variables are always mutable and need no rule',
        ],
        answer: 1,
        explanation: 'Step 1: Capture is `text` in `repeatMessage`. Step 2: Rule demands effectively `final`. Step 3: Tracing reassignment reports variable used in lambda must be final. Step 4: Only compile failure enforces the stale-copy hazard rule.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch5-s3
  {
    sectionId: 'java-ch5-s3',
    readingTime: 9,
    intro: 'Inner classes bind helper objects to their outer instance so listeners plus iterators can reach private state directly. Syntax plus scope rules reward careful nesting choices. This section compares member plus local plus anonymous plus static forms through the TalkingClock and listener stories.',
    objectives: [
      'Reach outer state from member inner classes with Outer dot this discipline',
      'Choose local versus anonymous classes for single-use listeners with capture rules',
      'Isolate static nested helpers like Pair when no outer reference is needed',
    ],
    concepts: [
      {
        term: 'Member inner access',
        kind: 'definition',
        statement: 'A **member** inner class such as `class TimePrinter implements ActionListener` inside `TalkingClock` holds a hidden `outer` reference and can read `private boolean beep` directly.',
        detail: 'Unlike C++ nesting that needs an explicit owner pointer, every Java inner object knows its creator, so iterator plus listener code skips manual back-pointer plumbing.',
      },
      {
        term: 'Special inner syntax',
        kind: 'notation',
        statement: 'Syntax like `TalkingClock.this` names the **outer** receiver and `outer.new TimePrinter()` creates an `inner` tied to a chosen outer, which matters after `refactoring` extractions.',
        detail: 'Plain this means the inner object itself, so qualified this is the escape hatch when both levels define the same field or method name.',
      },
      {
        term: 'Usefulness plus safety',
        kind: 'insight',
        statement: 'Inner classes are **necessary** for adapters that need both `listener` behavior and `outer` state, and they are **safe** because the compiler generates accessors without exposing `private` members publicly.',
        detail: 'Horstmann answers are-they-useful skeptics with timers plus iterators: the alternative is parallel maps from helpers to owners that manual code gets wrong.',
      },
      {
        term: 'Local plus anonymous listeners',
        kind: 'method',
        statement: 'A **local** class declared inside `start` and an **anonymous** `new ActionListener() { public void actionPerformed(...) { } }` both capture `effectively-final` parameters like `interval` plus `beep`.',
        detail: 'Local names can be reused for two objects while anonymous suits one shot; both compile to hidden classes with copied captures that outlive the call frame.',
      },
      {
        term: 'Static nested isolation',
        kind: 'method',
        statement: 'A **static** nested class such as `static class Pair` has no `outer` link, so `minmax` helpers store `first` plus `second` without retaining the enclosing `calculator` object.',
        detail: 'Prefer static nesting for pure data plus algorithms to avoid accidental retention of large outer graphs that blocks garbage collection.',
      },
    ],
    figures: [
      {
        caption: 'Outer TalkingClock linked to inner TimePrinter versus an isolated static Pair helper.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Inner versus static nesting" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Linked versus isolated</text><rect x="36" y="64" width="250" height="110" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="13" fill="currentColor">TalkingClock outer</text><text x="52" y="112" font-family="sans-serif" font-size="12" fill="currentColor">private beep</text><rect x="80" y="122" width="170" height="40" fill="none" stroke="currentColor" stroke-width="2" rx="6"/><text x="96" y="147" font-family="sans-serif" font-size="12" fill="currentColor">inner TimePrinter</text><line x1="165" y1="122" x2="165" y2="112" stroke="currentColor" stroke-width="2"/><rect x="350" y="64" width="250" height="110" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="366" y="92" font-family="sans-serif" font-size="13" fill="currentColor">Calculator outer</text><text x="366" y="112" font-family="sans-serif" font-size="12" fill="currentColor">static class Pair</text><text x="366" y="132" font-family="sans-serif" font-size="12" fill="currentColor">no outer link</text><text x="36" y="220" font-family="sans-serif" font-size="13" fill="currentColor">Inner reads outer privates, static keeps only first plus second.</text><text x="36" y="244" font-family="sans-serif" font-size="13" fill="currentColor">Anonymous suits one listener, local suits two of one shape.</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Refactor TalkingClock to an inner listener',
        problem: 'Extract timer behavior into a member inner class that reads the outer beep flag without extra parameters.',
        steps: [
          { label: 'Step 1: Keep state outside', text: 'Hold configuration in the outer object:\n```java\npublic class TalkingClock {\n    private boolean beep;\n    public TalkingClock(boolean beep) { this.beep = beep; }\n}\n```\nBeep is private yet reachable from any inner of the same outer.' },
          { label: 'Step 2: Add the inner printer', text: 'Let the helper reach outward implicitly:\n```java\npublic class TalkingClock {\n    public class TimePrinter implements java.awt.event.ActionListener {\n        public void actionPerformed(java.awt.event.ActionEvent event) {\n            System.out.println("At the tone: " + java.time.Instant.ofEpochMilli(event.getWhen()));\n            if (beep) { java.awt.Toolkit.getDefaultToolkit().beep(); }\n        }\n    }\n    public void start(int interval) {\n        var listener = new TimePrinter();\n        var timer = new javax.swing.Timer(interval, listener);\n        timer.start();\n    }\n}\n```\nNo beep parameter is needed because the inner sees the outer field.' },
          { label: 'Step 3: Name the outer when shadowed', text: 'Disambiguate if both levels define beep:\n```java\n// inside TimePrinter\n// if (TalkingClock.this.beep) { beep(); }\n```\nQualified this selects the outer receiver while plain this would mean the printer.' },
        ],
        result: 'The timer prints time and beeps only when its own clock requests it, with zero plumbing parameters.',
      },
      {
        title: 'Choose local versus anonymous versus static',
        problem: 'Serve three needs: two similar random generators, one single button listener, and one pure min-max holder.',
        steps: [
          { label: 'Step 1: Local for two of a kind', text: 'Name a method-local helper and instantiate twice:\n```java\npublic void raffle() {\n    class Winner implements java.util.function.Supplier<String> {\n        public String get() { return "Asha"; }\n    }\n    var w1 = new Winner();\n    var w2 = new Winner();\n    System.out.println(w1.get() + w2.get());\n}\n```\nLocal scope keeps the name out of the class surface.' },
          { label: 'Step 2: Anonymous for one shot', text: 'Create the interface plus behavior together:\n```java\npublic void start(int interval, boolean beep) {\n    var listener = new java.awt.event.ActionListener() {\n        public void actionPerformed(java.awt.event.ActionEvent event) {\n            System.out.println("tick");\n        }\n    };\n    new javax.swing.Timer(interval, listener).start();\n}\n```\nNo name is needed when only one object of the shape will ever exist.' },
          { label: 'Step 3: Static for pure data', text: 'Avoid outer retention for results:\n```java\nstatic class Pair {\n    double first;\n    double second;\n    Pair(double f, double s) { first = f; second = s; }\n}\nPair p = new Pair(1.0, 2.0);\nSystem.out.println(p.first + p.second);\n```\nStatic nesting stores only the two numbers with no clock link.' },
        ],
        result: 'Local serves pairs, anonymous serves singles, and static serves retention-free data.',
      },
    ],
    keyTakeaways: [
      'Member inner objects carry an outer reference and read private outer state.',
      'Qualified Outer dot this plus outer dot new control which outer an inner joins.',
      'Local classes suit repeated method shapes while anonymous suits single instances.',
      'Static nested classes avoid outer retention for pure helpers plus results.',
    ],
    quiz: [
      {
        q: 'How does TimePrinter read private beep without a getter?',
        options: [
          'By copying beep into a global variable shared by all clocks',
          'By making beep public automatically at compile time',
          'Through its implicit outer reference to the creating TalkingClock',
          'Inner classes cannot read outer privates and must use reflection',
        ],
        answer: 2,
        explanation: 'Step 1: Field is `private boolean beep` in `TalkingClock`. Step 2: Inner is `class TimePrinter` inside it. Step 3: Tracing `if (beep)` compiles without accessor. Step 4: Hidden `outer` link plus compiler accessors explain the access.',
      },
      {
        q: 'When should an anonymous ActionListener be chosen over a local class?',
        options: [
          'When only one object of that listener shape is needed',
          'When two or more objects of the same shape are needed',
          'When the listener must be reused across unrelated methods',
          'Always, because named classes are forbidden in methods',
        ],
        answer: 0,
        explanation: 'Step 1: Shape is `new ActionListener() { ... }`. Step 2: Count needed is one `listener`. Step 3: Tracing local alternative shows an unused name. Step 4: Single use favors `anonymous` while double use favors `local`.',
      },
      // Placement-pattern: static retention plus capture rules
      {
        q: 'Why prefer static class Pair for minmax results?',
        options: [
          'Static classes run faster because they skip verification',
          'Static nesting avoids retaining the outer calculator object unnecessarily',
          'Non-static helpers cannot hold doubles in Java',
          'Static is required for all classes with two fields',
        ],
        answer: 1,
        explanation: 'Step 1: Helper is `static class Pair` with `first` and `second`. Step 2: No `outer` link is stored. Step 3: Tracing large calculator graphs shows retention when inner is used. Step 4: Only memory plus lifetime explains `static` preference.',
      },
      {
        q: 'What does TalkingClock dot this mean inside TimePrinter?',
        options: [
          'The inner TimePrinter object itself for chained calls',
          'The Timer object that will call the listener later',
          'A new TalkingClock allocated fresh for the expression',
          'The outer TalkingClock receiver that created the inner object',
        ],
        answer: 3,
        explanation: 'Step 1: Context is inner `TimePrinter` inside `TalkingClock`. Step 2: Plain `this` is the `inner`. Step 3: Qualified `TalkingClock.this` selects the `outer`. Step 4: Only outer-receiver option matches the qualified form.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch5-s4
  {
    sectionId: 'java-ch5-s4',
    readingTime: 8,
    intro: 'Proxies plus service loaders plus cloning solve system-level extension without compile-time knowledge. Dynamic proxies implement unknown interfaces at runtime behind one handler. This section builds a tracing proxy, loads services declaratively, and states the clone contract precisely.',
    objectives: [
      'Create dynamic proxies with InvocationHandler plus newProxyInstance for tracing',
      'Load pluggable services with ServiceLoader plus provider configuration files',
      'Apply Cloneable plus super dot clone plus deep-copy rules for safe copies',
    ],
    concepts: [
      {
        term: 'When proxies fit',
        kind: 'insight',
        statement: 'Use a **proxy** when the `interface` set is known only at `runtime`, since generating `source` plus invoking `javac` per call would be slow and require shipping a compiler.',
        detail: 'System tools for tracing plus transactions plus security need brand-new classes on demand that still expose only specified interfaces plus Object methods.',
      },
      {
        term: 'Proxy creation trio',
        kind: 'method',
        statement: 'Creation needs an **interface** array plus a `ClassLoader` plus an `InvocationHandler` with `Object invoke(Object proxy, Method method, Object[] args)` supplied to `Proxy.newProxyInstance`.',
        detail: 'Every proxy call routes to invoke with proxy plus method plus args, where the handler logs plus forwards to a real target or synthesizes the result directly.',
      },
      {
        term: 'Proxy class properties',
        kind: 'definition',
        statement: 'Generated **proxy** classes implement the requested `interfaces` plus `toString` plus `equals` plus `hashCode`, are `public` plus `final` when interfaces are public, and dispatch every call through the `handler`.',
        detail: 'No new methods can be invented at runtime, so design handlers around interface granularity rather than expecting per-class tricks.',
      },
      {
        term: 'Service loader decoupling',
        kind: 'method',
        statement: 'The **ServiceLoader** mechanism discovers `providers` listed under `META-INF` plus `services` for an interface like `Cipher`, so `load` plus iteration finds implementations without `new` coupling.',
        detail: 'Libraries ship interface plus loader code while vendors ship jars with provider files, letting deployment choose implementations by class path rather than recompilation.',
      },
      {
        term: 'Cloning contract recap',
        kind: 'law',
        statement: 'Correct **cloning** implements `Cloneable` as a marker, overrides `clone` with `super.clone` then deep-copies `mutable` fields, and documents whether `copy` is deep or shared.',
        detail: 'Missing Cloneable throws at runtime, shallow copies alias dates plus builders, and copy factories or constructors often beat clone for clarity in new APIs.',
      },
    ],
    figures: [
      {
        caption: 'Proxy routing every interface call through one invocation handler to logging plus target.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Proxy dispatch flow" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">One handler, many calls</text><rect x="36" y="64" width="160" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="13" fill="currentColor">client</text><text x="52" y="112" font-family="sans-serif" font-size="12" fill="currentColor">calls iface</text><rect x="230" y="64" width="160" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="246" y="92" font-family="sans-serif" font-size="13" fill="currentColor">proxy</text><text x="246" y="112" font-family="sans-serif" font-size="12" fill="currentColor">new class</text><rect x="424" y="64" width="200" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="440" y="92" font-family="sans-serif" font-size="13" fill="currentColor">invoke handler</text><text x="440" y="112" font-family="sans-serif" font-size="12" fill="currentColor">log then forward</text><line x1="196" y1="99" x2="230" y2="99" stroke="currentColor" stroke-width="2"/><line x1="390" y1="99" x2="424" y2="99" stroke="currentColor" stroke-width="2"/><rect x="36" y="170" width="280" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="198" font-family="sans-serif" font-size="13" fill="currentColor">real target or synthesis</text><text x="52" y="218" font-family="sans-serif" font-size="12" fill="currentColor">does the work</text><rect x="344" y="170" width="280" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="360" y="198" font-family="sans-serif" font-size="13" fill="currentColor">ServiceLoader providers</text><text x="360" y="218" font-family="sans-serif" font-size="12" fill="currentColor">discovered by interface</text><text x="36" y="280" font-family="sans-serif" font-size="13" fill="currentColor">Proxies add cross-cutting behavior without editing targets.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Trace interface calls with a dynamic proxy',
        problem: 'Log every method name plus arguments on a service interface without editing its implementation class.',
        steps: [
          { label: 'Step 1: Define handler logic', text: 'Route all calls through invoke:\n```java\nimport java.lang.reflect.InvocationHandler;\nimport java.lang.reflect.Method;\nclass TraceHandler implements InvocationHandler {\n    private Object target;\n    TraceHandler(Object t) { target = t; }\n    public Object invoke(Object proxy, Method m, Object[] args) throws Throwable {\n        System.out.println(m.getName());\n        return m.invoke(target, args);\n    }\n}\n```\nMethod dot invoke forwards to the real object after logging.' },
          { label: 'Step 2: Mint the proxy', text: 'Create a new class at runtime:\n```java\nimport java.lang.reflect.Proxy;\nvar real = new Greeter();\nGreeter p = (Greeter) Proxy.newProxyInstance(null, new Class<?>[] { GreeterIface.class }, new TraceHandler(real));\nSystem.out.println(p);\n```\nThe proxy implements the interface array with the given loader plus handler.' },
          { label: 'Step 3: Call through the proxy', text: 'Observe routing:\n```java\n// p.greet("Asha") prints greet then delegates to real\n// toString plus equals also route through invoke\n```\nEvery interface plus Object method passes the single choke point.' },
        ],
        result: 'Calls log their names then produce real results, proving cross-cutting tracing without target edits.',
      },
      {
        title: 'Plug ciphers plus copy safely',
        problem: 'Discover cipher providers by interface and clone a stateful holder without aliasing its buffer.',
        steps: [
          { label: 'Step 1: Load services', text: 'Iterate providers found on the path:\n```java\nimport java.util.ServiceLoader;\nServiceLoader<Cipher> loaders = ServiceLoader.load(Cipher.class);\nfor (Cipher c : loaders) {\n    System.out.println(c.getClass().getName());\n}\n```\nProvider jars list implementations under META-INF services.' },
          { label: 'Step 2: Clone with contract', text: 'Mark plus copy plus deepen:\n```java\nclass Holder implements Cloneable {\n    private StringBuilder buf = new StringBuilder("hi");\n    public Holder clone() throws CloneNotSupportedException {\n        Holder c = (Holder) super.clone();\n        c.buf = new StringBuilder(buf.toString());\n        return c;\n    }\n}\n```\nWithout Cloneable the super call throws rather than copying.' },
          { label: 'Step 3: Prove independence', text: 'Append through the clone only:\n```java\n// h2 = h.clone(); h2 appends, h stays hi\n// shared buffer would betray aliasing immediately\n```\nDeep buffer copying keeps histories separate.' },
        ],
        result: 'Providers appear without new coupling while clones diverge safely after copying.',
      },
    ],
    keyTakeaways: [
      'Proxies implement runtime-known interfaces behind one invoke handler for tools.',
      'NewProxyInstance needs loader plus interfaces plus handler and routes all calls.',
      'ServiceLoader discovers providers by interface from class-path configuration.',
      'Cloneable plus super dot clone plus deep copy gives independent object copies.',
    ],
    quiz: [
      {
        q: 'When is a dynamic proxy preferable to generating plus compiling source?',
        options: [
          'Never, because proxies cannot implement any interface',
          'When no interfaces exist and new methods must be invented at runtime',
          'Always, because proxies eliminate the need for interfaces entirely',
          'When interfaces are known only at runtime and compiler shipment would be slow',
        ],
        answer: 3,
        explanation: 'Step 1: Need is unknown `interfaces` at `runtime`. Step 2: Alternative is file plus `javac` plus load. Step 3: Tracing shows slowness plus deployment burden. Step 4: Only runtime-known case justifies `Proxy.newProxyInstance`.',
      },
      {
        q: 'What must Proxy.newProxyInstance receive to mint a proxy?',
        options: [
          'Only a class name as a string with no other context',
          'A loader plus interface array plus invocation handler',
          'A database connection plus a transaction log',
          'Nothing, proxies self-configure from global state',
        ],
        answer: 1,
        explanation: 'Step 1: Arguments are `ClassLoader` plus `Class` array plus `InvocationHandler`. Step 2: Loader defines the new `class`. Step 3: Tracing `TraceHandler` shows `invoke` routing. Step 4: Only the trio option lists all three inputs.',
      },
      // Placement-pattern: service discovery versus clone markers
      {
        q: 'How does ServiceLoader find Cipher implementations?',
        options: [
          'By scanning provider files under META-INF services for the interface name',
          'By guessing class names from file sizes in the JAR',
          'By requiring every provider to be in the default package',
          'Services cannot be discovered and must be hard-coded with new',
        ],
        answer: 0,
        explanation: 'Step 1: Interface is `Cipher` for `load`. Step 2: Providers register under `META-INF` services. Step 3: Tracing iteration lists `class` names from those files. Step 4: No guessing or hard `new` occurs, so only file discovery fits.',
      },
      {
        q: 'What happens if clone is called on a non-Cloneable object via super.clone?',
        options: [
          'It returns a deep copy automatically without any marker',
          'It creates a proxy instead of a copy for safety',
          'It throws CloneNotSupportedException because the marker is missing',
          'It silently shares all mutable fields with no error',
        ],
        answer: 2,
        explanation: 'Step 1: Class lacks `Cloneable` marker. Step 2: Call is `super.clone()` in `clone`. Step 3: Tracing shows `throw CloneNotSupportedException`. Step 4: Marker is the permission, so only throw option matches.',
      },
    ],
  },
]

export const javaCh5Content = javaCh05Content

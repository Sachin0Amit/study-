import type { SectionContent } from '../library'

// ============================================================================
// Core Java Vol. I 12e — Chapter 6: Exceptions, Assertions and Logging
// Book Ch.7 Exceptions, Assertions, and Logging.
// ============================================================================

export const javaCh06Content: SectionContent[] = [
  // ---------------------------------------------------------------- java-ch6-s1
  {
    sectionId: 'java-ch6-s1',
    readingTime: 10,
    intro: 'Errors range from missing files through full disks to logic bugs, and return codes cannot express them all. Java gives every method an alternate exit that throws an object with failure detail. This section classifies checked plus unchecked throwables and teaches when to declare versus catch versus create new types.',
    objectives: [
      'Classify Throwable plus Error plus checked plus unchecked exceptions for handling choice',
      'Declare checked exceptions with throws plus throw correctly plus create custom types',
      'Choose throw-early plus catch-late handling with actionable rules',
    ],
    concepts: [
      {
        term: 'Why throwing beats error codes',
        kind: 'insight',
        statement: 'A **throw** exits with `throw new IOException("file missing")` instead of overloading `return -1` or `null`, so valid results like `minus one` stay distinguishable from `failure`.',
        detail: 'Return markers fail when every value is valid or when callers forget checks, while uncaught throws cannot be ignored silently and carry stack plus cause chains.',
      },
      {
        term: 'Throwable hierarchy',
        kind: 'definition',
        statement: 'The root **Throwable** splits into `Error` for virtual-machine failures plus `Exception` for code conditions, where `RuntimeException` plus its children are `unchecked` and all else checked.',
        detail: 'Horstmann stresses the confusing name: runtime means the historical Oak runtime component, not that other errors avoid runtime occurrence.',
      },
      {
        term: 'Declaring checked exceptions',
        kind: 'method',
        statement: 'A method advertises risk with **throws** like `public void read() throws IOException` so `callers` handle or redeclare, while `unchecked` like `NullPointerException` needs no `throws` clause.',
        detail: 'The compiler enforces checked coverage across the call chain, which documents file plus network plus parse hazards in signatures rather than comments.',
      },
      {
        term: 'Throwing plus custom types',
        kind: 'method',
        statement: 'Code signals failure with **throw** like `throw new IllegalArgumentException("percent must be positive")` and defines `class FileFormatException extends IOException` with `chained` constructors for domain errors.',
        detail: 'Provide no-arg plus message plus cause constructors, keep hierarchies shallow, and prefer standard types when their meaning already matches.',
      },
      {
        term: 'Throw early catch late',
        kind: 'theorem',
        statement: 'Good positioning validates with **requireNonNull** plus `throw` at entry and handles at the `layer` that can inform plus retry plus log, rather than catching `everywhere` for silence.',
        detail: 'Horstmann tips forbid empty catches plus over-clever wrapping: propagate with context, log once with the stack trace, and show users summaries not internals.',
      },
    ],
    figures: [
      {
        caption: 'Throwable tree from root through Error and checked versus unchecked Exception branches.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Exception hierarchy tree" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Checked must be declared</text><rect x="260" y="64" width="200" height="50" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="276" y="94" font-family="sans-serif" font-size="13" fill="currentColor">Throwable root</text><rect x="80" y="150" width="180" height="60" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="96" y="176" font-family="sans-serif" font-size="13" fill="currentColor">Error do not catch</text><rect x="300" y="150" width="180" height="60" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="316" y="176" font-family="sans-serif" font-size="13" fill="currentColor">Exception branch</text><rect x="80" y="244" width="180" height="50" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="96" y="272" font-family="sans-serif" font-size="12" fill="currentColor">Runtime unchecked</text><rect x="300" y="244" width="180" height="50" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="316" y="272" font-family="sans-serif" font-size="12" fill="currentColor">IOException checked</text><line x1="360" y1="114" x2="170" y2="150" stroke="currentColor" stroke-width="2"/><line x1="360" y1="114" x2="390" y2="150" stroke="currentColor" stroke-width="2"/><line x1="170" y1="210" x2="170" y2="244" stroke="currentColor" stroke-width="2"/><line x1="390" y1="210" x2="390" y2="244" stroke="currentColor" stroke-width="2"/><text x="520" y="180" font-family="sans-serif" font-size="12" fill="currentColor">throws documents</text><text x="520" y="200" font-family="sans-serif" font-size="12" fill="currentColor">checked risk</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Declare plus throw file and argument errors',
        problem: 'Advertise a missing-file hazard on a read method and reject negative salary raises immediately.',
        steps: [
          { label: 'Step 1: Declare the checked hazard', text: 'Warn callers in the signature:\n```java\nimport java.io.IOException;\npublic String readFirst(String path) throws IOException {\n    var in = new java.util.Scanner(java.nio.file.Path.of(path));\n    String line = in.nextLine();\n    in.close();\n    return line;\n}\n```\nCallers must catch IOException or declare it onward.' },
          { label: 'Step 2: Throw on bad input', text: 'Fail fast for logic errors:\n```java\npublic void raiseSalary(double byPercent) {\n    if (byPercent < 0) {\n        throw new IllegalArgumentException("percent must be positive");\n    }\n    double raise = salary * byPercent / 100;\n    salary += raise;\n}\n```\nIllegalArgumentException is unchecked so no throws clause is needed.' },
          { label: 'Step 3: Create a domain type', text: 'Name a file-format failure distinctly:\n```java\nimport java.io.IOException;\nclass FileFormatException extends IOException {\n    public FileFormatException(String msg) { super(msg); }\n    public FileFormatException(String msg, Throwable cause) { super(msg, cause); }\n}\n```\nCatch blocks can now separate format faults from other IO faults.' },
        ],
        result: 'Signatures document risk, bad percents throw with messages, and format errors carry their own type.',
      },
      {
        title: 'Place handling at the right layer',
        problem: 'Decide where to throw versus catch when parsing user input that may be missing or malformed.',
        steps: [
          { label: 'Step 1: Throw early at the boundary', text: 'Validate before computing:\n```java\nimport java.util.Objects;\npublic void setName(String n) {\n    this.name = Objects.requireNonNull(n, "name must not be null");\n}\n```\nNull fails at entry with a clear contract message.' },
          { label: 'Step 2: Let intermediate code propagate', text: 'Allow readFirst plus parse helpers to declare throws without catching, so context accumulates toward a layer that can inform the user or retry.' },
          { label: 'Step 3: Catch late with action', text: 'Handle where recovery is possible:\n```java\ntry {\n    String line = readFirst("staff.txt");\n    System.out.println(line);\n} catch (java.io.IOException e) {\n    System.out.println("Cannot read staff file, using defaults");\n}\n```\nThe handler informs plus degrades rather than swallowing silently.' },
        ],
        result: 'Entry validation plus propagation plus actionable late handling replace scattered silent catches.',
      },
    ],
    keyTakeaways: [
      'Throwing separates valid values from failure signals better than sentinel returns.',
      'Throwable splits into Error plus unchecked RuntimeException plus checked remainder.',
      'Throws advertises checked hazards while unchecked logic faults need no clause.',
      'Throw early at boundaries and catch late where informing plus retry is possible.',
    ],
    quiz: [
      {
        q: 'Why can return minus one not replace throwing for integer methods?',
        options: [
          'Because integers cannot hold negative values in Java',
          'Because minus one may be a valid result indistinguishable from failure',
          'Because return values are always ignored by callers',
          'Because throwing is slower and therefore discouraged for integers',
        ],
        answer: 1,
        explanation: 'Step 1: Method returns `int` with `return -1` as marker. Step 2: Value `-1` can be legitimate data. Step 3: Tracing callers shows ambiguity between `failure` and data. Step 4: Object `throw` carries distinct failure, so only indistinguishability explains it.',
      },
      {
        q: 'Which split correctly describes Throwable children?',
        options: [
          'All Throwables are unchecked and never appear in signatures',
          'All Throwables are checked and must be declared everywhere',
          'Error for virtual-machine failures plus RuntimeException unchecked plus other Exceptions checked',
          'Error plus Exception are unrelated roots with no common parent',
        ],
        answer: 2,
        explanation: 'Step 1: Root is `Throwable`. Step 2: Branch `Error` means do-not-catch resource faults. Step 3: Branch `RuntimeException` is `unchecked` logic faults. Step 4: Remaining `Exception` types like `IOException` are checked, so only that split matches.',
      },
      // Placement-pattern: throws versus throw plus custom hierarchy
      {
        q: 'public String read() throws IOException versus throw new IOException inside. What is the difference?',
        options: [
          'Throws declares the hazard in the signature while throw creates and signals the failure',
          'Both do the same thing and are interchangeable spellings',
          'Throw declares while throws signals, the reverse of the correct use',
          'Neither affects compilation and both are comments for readers',
        ],
        answer: 0,
        explanation: 'Step 1: Clause `throws IOException` is on header. Step 2: Statement `throw new IOException` is in body. Step 3: Tracing shows header forcing caller handling via `throws` or `catch`. Step 4: Only declare-versus-signal distinction respects both roles.',
      },
      {
        q: 'Why extend IOException for FileFormatException?',
        options: [
          'Subclassing exceptions is forbidden and never compiles',
          'To make format faults unchecked and invisible to callers',
          'To prevent any catching of format faults in the future',
          'To allow format faults to be caught as IO faults while staying distinguishable as a subtype',
        ],
        answer: 3,
        explanation: 'Step 1: Parent is `IOException` checked. Step 2: Child `FileFormatException` inherits catchability. Step 3: Tracing `catch (IOException e)` still catches the subtype. Step 4: Specific `catch (FileFormatException e)` separates format causes, so only layered catching explains it.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch6-s2
  {
    sectionId: 'java-ch6-s2',
    readingTime: 10,
    intro: 'Catching plus chaining plus closing determines whether failures are understood and resources survive them. Multi-catch plus rethrow plus finally plus stack traces each handle one facet. This section centers try-with-resources with suppressed exceptions as the safe default for AutoCloseable work.',
    objectives: [
      'Catch single plus multiple exceptions with effectively-final handling and precise rethrow',
      'Chain causes plus trace stacks to diagnose wrapped failures without losing origins',
      'Close resources with try-with-resources plus suppressed handling instead of manual finally',
    ],
    concepts: [
      {
        term: 'Catching plus multi-catch',
        kind: 'method',
        statement: 'A **catch** such as `catch (IOException | NumberFormatException e)` handles related `failures` together where `e` is implicitly `final`, so reassignment inside is forbidden.',
        detail: 'Order catches from specific to general, avoid catching Exception for silence, and keep try bodies small so the risky call is obvious.',
      },
      {
        term: 'Rethrow plus chaining',
        kind: 'method',
        statement: 'Code preserves origins with **chain** via `throw e` after logging or `throw new ServiceException("read failed", e)` where `getCause` later returns the `wrapped` trigger.',
        detail: 'Precise rethrow keeps the declared exception set narrow for compiler analysis, while chaining adds layer context without discarding the root stack.',
      },
      {
        term: 'Finally discipline',
        kind: 'law',
        statement: 'A **finally** block runs for `cleanup` on every path, but must never contain `return` plus `throw` plus `break` because it would swallow the pending `result` or `exception`.',
        detail: 'Horstmann shows return in finally overwriting a try return and even swallowing NumberFormatException, which is why cleanup belongs there but control flow does not.',
      },
      {
        term: 'Try with resources',
        kind: 'definition',
        statement: 'The **resource** statement `try (var in = new Scanner(Path.of("staff.txt"))) { }` auto-closes any `AutoCloseable` with `close` plus records close-time failures as `suppressed` on the primary exception.',
        detail: 'Resources close in reverse declaration order, close exceptions never mask the work exception thanks to getSuppressed, and manual try-finally closing becomes legacy for this shape.',
      },
      {
        term: 'Stack traces plus StackWalker',
        kind: 'notation',
        statement: 'Diagnosis uses **traces** with `e.printStackTrace()` plus `StackTraceElement` frames with `class` plus `method` plus `line`, while `StackWalker` streams `frames` lazily for `filtered` production views.',
        detail: 'Log the trace for developers but show users summaries, since versions plus paths in frames help fix while confusing non-technical readers.',
      },
    ],
    figures: [
      {
        caption: 'Resource lifecycle with automatic close and suppressed close-time failures beside the main error.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Try with resources lifecycle" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Close is automatic</text><rect x="36" y="64" width="160" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="13" fill="currentColor">open in ()</text><text x="52" y="112" font-family="sans-serif" font-size="12" fill="currentColor">Scanner, Writer</text><rect x="230" y="64" width="160" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="246" y="92" font-family="sans-serif" font-size="13" fill="currentColor">work in try</text><text x="246" y="112" font-family="sans-serif" font-size="12" fill="currentColor">may throw main</text><rect x="424" y="64" width="170" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="440" y="92" font-family="sans-serif" font-size="13" fill="currentColor">auto close</text><text x="440" y="112" font-family="sans-serif" font-size="12" fill="currentColor">reverse order</text><line x1="196" y1="99" x2="230" y2="99" stroke="currentColor" stroke-width="2"/><line x1="390" y1="99" x2="424" y2="99" stroke="currentColor" stroke-width="2"/><rect x="36" y="170" width="300" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="198" font-family="sans-serif" font-size="13" fill="currentColor">main exception propagates</text><text x="52" y="218" font-family="sans-serif" font-size="12" fill="currentColor">close failure suppressed</text><rect x="370" y="170" width="224" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="386" y="198" font-family="sans-serif" font-size="13" fill="currentColor">getSuppressed lists</text><text x="386" y="218" font-family="sans-serif" font-size="12" fill="currentColor">masked closes</text><text x="36" y="280" font-family="sans-serif" font-size="13" fill="currentColor">Never return or throw from finally, it masks outcomes.</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Handle multiple failures with chaining',
        problem: 'Catch file plus parse faults together, add service context by chaining, and keep the cause for diagnosis.',
        steps: [
          { label: 'Step 1: Multi-catch related faults', text: 'Unite handling without duplication:\n```java\ntry {\n    String line = readFirst("staff.txt");\n    int n = Integer.parseInt(line);\n    System.out.println(n);\n} catch (java.io.IOException | NumberFormatException e) {\n    System.out.println("Input problem: " + e.getMessage());\n}\n```\nThe variable e is effectively final and shared by both types.' },
          { label: 'Step 2: Chain with context', text: 'Wrap while keeping the trigger:\n```java\ntry {\n    String line = readFirst("staff.txt");\n    System.out.println(line);\n} catch (java.io.IOException e) {\n    throw new IllegalStateException("read failed for staff", e);\n}\n```\nGetCause later returns the original IOException for logging.' },
          { label: 'Step 3: Trace the stack', text: 'Log developer detail plus user summary:\n```java\ntry {\n    Integer.parseInt("zero");\n} catch (NumberFormatException e) {\n    e.printStackTrace();\n    System.out.println("Expected a number, got text");\n}\n```\nFrames show class plus method plus line for the exact parse call.' },
        ],
        result: 'Related faults share handling, wrapped errors keep causes, and traces separate developer detail from user text.',
      },
      {
        title: 'Replace finally with try-with-resources',
        problem: 'Read a file safely without manual close calls and prove suppressed handling beats return-in-finally bugs.',
        steps: [
          { label: 'Step 1: Open in the header', text: 'Declare AutoCloseable resources for automatic closing:\n```java\nimport java.util.Scanner;\nimport java.nio.file.Path;\ntry (var in = new Scanner(Path.of("staff.txt"))) {\n    System.out.println(in.nextLine());\n}\n```\nScanner closes even when nextLine throws, in reverse order for multiple resources.' },
          { label: 'Step 2: Avoid control flow in finally', text: 'Keep finally for cleanup only:\n```java\n// finally { in.close(); }\n// never return, throw, break, or continue here\n// return in finally would mask try returns and exceptions\n```\nHorstmann parseInt examples show finally return turning 42 into 0 and swallowing format faults.' },
          { label: 'Step 3: Inspect suppressed on failure', text: 'Reveal masked close errors explicitly:\n```java\ntry (var bad = new BadClose()) {\n    throw new IllegalStateException("work failed");\n} catch (IllegalStateException e) {\n    for (var s : e.getSuppressed()) {\n        System.out.println("suppressed: " + s);\n    }\n}\n```\nClose-time faults attach as suppressed instead of replacing the work failure.' },
        ],
        result: 'Resources close reliably, main failures propagate intact, and close faults remain visible as suppressed entries.',
      },
    ],
    keyTakeaways: [
      'Multi-catch groups related failures with an effectively-final handler variable.',
      'Rethrow plus cause chaining preserves origins while adding layer context.',
      'Finally cleans up but must never change control flow with return or throw.',
      'Try-with-resources closes AutoCloseable in order with suppressed close faults.',
    ],
    quiz: [
      {
        q: 'What is true of e in catch (IOException or NumberFormatException e)?',
        options: [
          'It is effectively final and cannot be reassigned inside the block',
          'It can be reassigned to a new exception to simplify handling',
          'It holds both exceptions simultaneously as a merged object',
          'It must be declared with var instead of a type list',
        ],
        answer: 0,
        explanation: 'Step 1: Handler is `catch (IOException | NumberFormatException e)`. Step 2: Variable `e` is implicitly `final`. Step 3: Tracing `e = new IOException` reports a compile error. Step 4: Only effectively-final rule explains the restriction.',
      },
      {
        q: 'Why chain with new IllegalStateException message plus e as cause?',
        options: [
          'To discard the original stack and show only the new message',
          'To convert checked faults to syntax errors for faster handling',
          'To add layer context while getCause still returns the trigger',
          'Chaining is forbidden and always throws immediately',
        ],
        answer: 2,
        explanation: 'Step 1: Construction is `new IllegalStateException("read failed", e)`. Step 2: Cause is stored `e` as `trigger`. Step 3: Tracing `getCause` returns the `IOException`. Step 4: Only context-plus-origin explains the pattern.',
      },
      // Placement-pattern: finally control-flow plus suppressed reasoning
      {
        q: 'A finally block contains return 0 while try returns 42. What happens?',
        options: [
          'The method returns 42 because try results outrank finally',
          'Compilation fails because finally cannot contain statements',
          'Both values return in sequence to different callers',
          'The method returns 0 because finally control flow masks the try result',
        ],
        answer: 3,
        explanation: 'Step 1: Try path computes `return 42`. Step 2: Block `finally` executes with `return 0`. Step 3: Tracing `parseInt` example shows `0` delivered. Step 4: Only masking by `finally` control flow explains the wrong zero.',
      },
      {
        q: 'What does try with Scanner in parentheses guarantee?',
        options: [
          'The scanner stays open for reuse after the block for efficiency',
          'The scanner closes automatically even when the body throws',
          'Exceptions inside are automatically converted to log messages',
          'Resources need not implement any interface to qualify',
        ],
        answer: 1,
        explanation: 'Step 1: Header is `try (var in = new Scanner(...))`. Step 2: Type is `AutoCloseable` with `close`. Step 3: Tracing throwing body shows `close` still runs. Step 4: Only automatic `close` on all paths matches.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch6-s3
  {
    sectionId: 'java-ch6-s3',
    readingTime: 7,
    intro: 'Assertions document assumed truths and check them during development without paying runtime cost in production. Enabling plus parameter checks plus assumption records each serve one purpose. This section uses sqrt and merge assumptions to show correct assertion taste.',
    objectives: [
      'State the assertion concept and separate it from exception handling for callers',
      'Enable plus disable checks with minus ea plus da flags at class granularity',
      'Apply assertions to private parameters plus documented assumptions, not public validation',
    ],
    concepts: [
      {
        term: 'Assertion concept',
        kind: 'definition',
        statement: 'An **assertion** such as `assert x >= 0 : "x negative"` states a believed `truth` where failure throws `AssertionError` to expose a `programmer` mistake, not a user input fault.',
        detail: 'Horstmann contrasts throw for recoverable misuse with assert for impossible-by-design states like a non-negative result from a proven computation.',
      },
      {
        term: 'Enabling with ea flags',
        kind: 'method',
        statement: 'Checks run only with **enable** flags such as `java -ea Main` or `java -ea:com.example... Main`, while `java -da` disables them so `production` skips the cost.',
        detail: 'Class-loader granularity lets teams enable assertions for new code while leaving trusted libraries unchecked during performance runs.',
      },
      {
        term: 'Parameter checking scope',
        kind: 'theorem',
        statement: 'Use **assertions** for `private` helpers where callers are known code, but use `exceptions` for `public` methods where unknown callers need enforced `contracts`.',
        detail: 'Private sort helpers can assert ordering preconditions, while public APIs must throw IllegalArgumentException since disabled assertions would otherwise accept bad input silently.',
      },
      {
        term: 'Documenting assumptions',
        kind: 'insight',
        statement: 'An **assumption** like `assert low <= high : low + high` records `merge` plus `search` invariants at the exact line where later code depends on `ordering`.',
        detail: 'Future readers see the guarantee without inferring it from distant logic, and test runs with enablement verify the comment executable-style.',
      },
      {
        term: 'Assertion style limits',
        kind: 'law',
        statement: 'Never use **assert** for `side effects` or `user` validation because disabled execution skips the expression, so `assert list.remove(x)` would change behavior between `test` and ship.',
        detail: 'Keep asserted expressions pure plus cheap plus impossible-by-contract, letting exceptions plus logging handle expected external failures.',
      },
    ],
    figures: [
      {
        caption: 'Assertion flow active under enablement and skipped in production without side effects.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Assertion enablement flow" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Check in test, skip in ship</text><rect x="36" y="64" width="200" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="13" fill="currentColor">assert x ge 0</text><text x="52" y="112" font-family="sans-serif" font-size="12" fill="currentColor">belief stated</text><rect x="270" y="64" width="170" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="286" y="92" font-family="sans-serif" font-size="13" fill="currentColor">minus ea on</text><text x="286" y="112" font-family="sans-serif" font-size="12" fill="currentColor">verify, may throw</text><rect x="474" y="64" width="170" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="490" y="92" font-family="sans-serif" font-size="13" fill="currentColor">default off</text><text x="490" y="112" font-family="sans-serif" font-size="12" fill="currentColor">skip cost</text><line x1="236" y1="99" x2="270" y2="99" stroke="currentColor" stroke-width="2"/><line x1="440" y1="99" x2="474" y2="99" stroke="currentColor" stroke-width="2"/><text x="36" y="180" font-family="sans-serif" font-size="13" fill="currentColor">Public validation uses throw, private uses assert.</text><text x="36" y="204" font-family="sans-serif" font-size="13" fill="currentColor">No side effects inside assert expressions.</text><text x="36" y="240" font-family="sans-serif" font-size="13" fill="currentColor">Message after colon explains the belief.</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Guard sqrt plus document merge order',
        problem: 'Double-check a supposedly non-negative root input and record a merge assumption where ordering matters.',
        steps: [
          { label: 'Step 1: Assert the root input', text: 'State the belief at the use site:\n```java\ndouble x = 4.0;\nassert x >= 0 : "x negative: " + x;\ndouble y = Math.sqrt(x);\nSystem.out.println(y);\n```\nWith enablement a negative x throws AssertionError instead of yielding NaN downstream.' },
          { label: 'Step 2: Enable the check', text: 'Turn verification on for the run:\n```bash\njavac Main.java\njava -ea Main\n```\nWithout minus ea the same line is skipped, so production pays no cost.' },
          { label: 'Step 3: Record a merge invariant', text: 'Pin ordering where code relies on it:\n```java\n// after merging two sorted runs\n// assert low <= high : "merge order broken";\n// binary search below depends on sorted order\n```\nThe message names the depended property for the next reader.' },
        ],
        result: 'Enabled runs verify beliefs with clear messages while default runs skip them for speed.',
      },
      {
        title: 'Separate private asserts from public throws',
        problem: 'Choose the right failure tool for an internal helper versus a public API with unknown callers.',
        steps: [
          { label: 'Step 1: Assert inside private help', text: 'Check known-caller preconditions:\n```java\nprivate static void sortHelper(int[] a, int from, int to) {\n    assert from >= 0 && to <= a.length : "bad range";\n}\n```\nTeam tests with minus ea catch internal misuse during development.' },
          { label: 'Step 2: Throw from public entry', text: 'Enforce unknown-caller contracts always:\n```java\npublic static void sort(int[] a) {\n    if (a == null) {\n        throw new IllegalArgumentException("array must not be null");\n    }\n}\n```\nDisabled assertions cannot be trusted for user input, so exceptions guard here.' },
          { label: 'Step 3: Keep asserts pure', text: 'Avoid mutating calls inside checks:\n```java\n// good: assert index >= 0;\n// bad: assert list.remove(index);\n```\nSide effects would vanish when checks disable, changing program meaning between runs.' },
        ],
        result: 'Private code documents with asserts while public code enforces with throws, and neither relies on side-effect checks.',
      },
    ],
    keyTakeaways: [
      'Assertions state programmer beliefs and throw AssertionError when violated under enablement.',
      'Enable with minus ea and disable by default so production skips check cost.',
      'Private helpers assert while public methods throw for unknown callers.',
      'Asserted expressions must be pure without side effects or user validation.',
    ],
    quiz: [
      {
        q: 'What does assert x greater than equals 0 do when enabled and x is negative?',
        options: [
          'Logs a warning and continues with the square root of zero',
          'Returns NaN silently for later code to handle',
          'Throws AssertionError to expose a programmer-belief violation',
          'Converts x to positive automatically and proceeds',
        ],
        answer: 2,
        explanation: 'Step 1: Statement is `assert x >= 0`. Step 2: Flag `-ea` enables it. Step 3: Tracing negative `x` shows `throw AssertionError`. Step 4: No recovery or conversion occurs, so only belief-violation matches.',
      },
      {
        q: 'How are assertions normally active at runtime?',
        options: [
          'Only with minus ea flags selecting classes or packages to check',
          'Always on, with no flag needed for any class',
          'Only inside static initializers during class loading',
          'Through logging configuration files without JVM flags',
        ],
        answer: 0,
        explanation: 'Step 1: Default is disabled `assert`. Step 2: Flag `java -ea Main` enables. Step 3: Tracing default `java Main` skips the check. Step 4: Only explicit `-ea` activation explains test versus ship behavior.',
      },
      // Placement-pattern: public throw versus private assert choice
      {
        q: 'A public setAge accepts negative ages from user forms. Which tool is correct?',
        options: [
          'Assert age greater than equals zero, since users run with enablement',
          'Throw IllegalArgumentException, since public input needs enforced checks',
          'No check, because public methods cannot validate input',
          'Log at fine level and store the negative age unchanged',
        ],
        answer: 1,
        explanation: 'Step 1: Caller is unknown `public` user input. Step 2: Assertions may be disabled via default run. Step 3: Tracing `assert` alone accepts negatives in production. Step 4: Only `throw` enforces the `contract` always.',
      },
      {
        q: 'Why must assert list dot remove not be used for work?',
        options: [
          'Remove is too slow to appear in any condition',
          'Lists are immutable and remove always throws anyway',
          'Assertions cannot call any method with arguments',
          'Disabled runs would skip the removal and change program meaning',
        ],
        answer: 3,
        explanation: 'Step 1: Expression `assert list.remove(x)` has side `effect`. Step 2: Disabled `assert` skips evaluation. Step 3: Tracing ship run shows element retained versus test removal. Step 4: Only meaning-change between runs explains the ban.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch6-s4
  {
    sectionId: 'java-ch6-s4',
    readingTime: 9,
    intro: 'Production failures need leveled plus filterable plus localized records, not scattered print calls. The standard logging framework names loggers hierarchically and routes through handlers plus formatters. This section applies basic plus advanced logging with configuration plus a proven recipe.',
    objectives: [
      'Emit leveled logs with Logger plus Level for diagnosis without user-facing leaks',
      'Configure handlers plus formatters plus filters plus levels via properties files',
      'Apply the Horstmann logging recipe with per-class loggers and localized messages',
    ],
    concepts: [
      {
        term: 'Basic logger plus levels',
        kind: 'definition',
        statement: 'A **Logger** such as `Logger.getLogger("com.mycompany.myapp")` emits `logger.info("app started")` plus `logger.log(Level.WARNING, "reading image", e)` with **levels** from finest through severe.',
        detail: 'Seven levels from FINEST to SEVERE let operators raise verbosity for diagnosis then lower it for quiet production without recompiling.',
      },
      {
        term: 'Hierarchical names',
        kind: 'notation',
        statement: 'Names like `com.mycompany.myapp` form a **hierarchy** where level plus handler settings `inherit` from parents unless a `logger` overrides them explicitly.',
        detail: 'Per-class loggers with class names inherit sanely, so com dot mycompany controls a whole product while one noisy class can be quieted alone.',
      },
      {
        term: 'Handlers plus formatters plus filters',
        kind: 'method',
        statement: 'A **Handler** such as `FileHandler` plus `ConsoleHandler` delivers records, a `Formatter` like `SimpleFormatter` lays out text, and a `Filter` decides which `records` pass.',
        detail: 'File handlers persist for post-mortem, console suits containers, XML plus simple formatters trade parsing against reading, and filters suppress noisy subcases.',
      },
      {
        term: 'Configuration files',
        kind: 'method',
        statement: 'The **properties** file at `logging dot properties` sets `.level` plus `handler` lists, selected with `java -Djava.util.logging.config.file=configFile MainClass` for per-run control.',
        detail: 'Editing text avoids code changes for verbosity, and system properties point each deployment at its own file without rebuilding the JAR.',
      },
      {
        term: 'Recipe plus debugging tips',
        kind: 'insight',
        statement: 'The **recipe** uses one `static final Logger` per `class`, logs `throwing` plus caught causes with stacks for developers, shows users `summaries`, and prefers `debugger` plus logging over `print` scattering.',
        detail: 'Horstmann adds localization via resource bundles plus parameter placeholders, so messages translate while arguments stay typed and ordered.',
      },
    ],
    figures: [
      {
        caption: 'Logger hierarchy feeding handlers with formatters plus filters to console and files.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Logging pipeline" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Log once, route many ways</text><rect x="36" y="64" width="200" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="13" fill="currentColor">com.mycompany</text><text x="52" y="112" font-family="sans-serif" font-size="12" fill="currentColor">parent level</text><rect x="270" y="64" width="200" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="286" y="92" font-family="sans-serif" font-size="13" fill="currentColor">myapp logger</text><text x="286" y="112" font-family="sans-serif" font-size="12" fill="currentColor">info, warning</text><rect x="36" y="170" width="200" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="198" font-family="sans-serif" font-size="13" fill="currentColor">ConsoleHandler</text><text x="52" y="218" font-family="sans-serif" font-size="12" fill="currentColor">SimpleFormatter</text><rect x="270" y="170" width="200" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="286" y="198" font-family="sans-serif" font-size="13" fill="currentColor">FileHandler</text><text x="286" y="218" font-family="sans-serif" font-size="12" fill="currentColor">XML or simple</text><line x1="136" y1="134" x2="136" y2="170" stroke="currentColor" stroke-width="2"/><line x1="370" y1="134" x2="136" y2="170" stroke="currentColor" stroke-width="2"/><line x1="370" y1="134" x2="370" y2="170" stroke="currentColor" stroke-width="2"/><text x="36" y="280" font-family="sans-serif" font-size="13" fill="currentColor">Levels filter noise, handlers choose destination.</text><text x="36" y="302" font-family="sans-serif" font-size="13" fill="currentColor">Users see summaries, developers get stacks.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Log startup plus image-read failures',
        problem: 'Record normal startup at info and a missing-image warning with its stack trace for developers.',
        steps: [
          { label: 'Step 1: Create a per-class logger', text: 'Name the logger for the class:\n```java\nimport java.util.logging.Logger;\nimport java.util.logging.Level;\nclass Reader {\n    private static final Logger logger = Logger.getLogger("com.mycompany.myapp.Reader");\n    void start() {\n        logger.info("app started");\n    }\n}\n```\nStatic final shares one logger per class with hierarchical naming.' },
          { label: 'Step 2: Log throwing plus catching', text: 'Record both exit paths with detail:\n```java\nvoid read(String path) {\n    try {\n        throw new java.io.IOException("missing image");\n    } catch (java.io.IOException e) {\n        logger.throwing("com.mycompany.myapp.Reader", "read", e);\n        logger.log(Level.WARNING, "Reading image", e);\n    }\n}\n```\nThrowing logs finer flow while warning carries the stack for diagnosis.' },
          { label: 'Step 3: Run and read levels', text: 'Observe info plus warning on console by default and raise to finest only when hunting:\n```java\n// logger.setLevel(Level.FINEST);\n// handler levels also control output, so set both\n```\nBoth logger and handler levels must allow a record for it to appear.' },
        ],
        result: 'Console shows startup info plus a warning with stack trace, ready for operator filtering.',
      },
      {
        title: 'Configure handlers plus localize a message',
        problem: 'Send logs to a file with a chosen level via properties and keep messages translatable.',
        steps: [
          { label: 'Step 1: Edit logging properties', text: 'Point the run at a config file:\n```bash\njava -Djava.util.logging.config.file=mylogging.properties Main\n```\nInside set dot level plus handlers plus formatter names without touching code.' },
          { label: 'Step 2: Add file output', text: 'Persist for post-mortem in config:\n```java\n// handlers=java.util.logging.FileHandler, java.util.logging.ConsoleHandler\n// java.util.logging.FileHandler.pattern=app.log\n// com.mycompany.myapp.level=FINE\n```\nPattern names the log file while per-logger level raises detail selectively.' },
          { label: 'Step 3: Localize with parameters', text: 'Separate text from values for translation:\n```java\nlogger.log(Level.INFO, "Reading {0} images", 3);\n```\nResource bundles translate the pattern while placeholders keep numbers ordered per locale.' },
        ],
        result: 'File plus console receive appropriately leveled records with translatable parameterized messages.',
      },
    ],
    keyTakeaways: [
      'Per-class loggers with levels separate diagnosis detail from quiet production.',
      'Hierarchy inherits levels plus handlers unless a logger overrides them.',
      'Handlers deliver while formatters lay out and filters select which records pass.',
      'Properties files plus localized parameterized messages keep logging adaptable.',
    ],
    quiz: [
      {
        q: 'What does Logger.getLogger with com.mycompany.myapp give?',
        options: [
          'A globally shared logger with no name or hierarchy for all classes',
          'A print stream that ignores levels and always prints everything',
          'A file handle that must be closed manually after every log call',
          'A hierarchically named logger inheriting settings from com.mycompany parents',
        ],
        answer: 3,
        explanation: 'Step 1: Name is `com.mycompany.myapp` dotted. Step 2: Hierarchy links to `com` and `com.mycompany`. Step 3: Tracing level change on parent shows child `inherit` unless overridden. Step 4: Only hierarchical option describes `Logger` naming.',
      },
      {
        q: 'Why must both logger and handler levels allow a record for it to appear?',
        options: [
          'Because handlers ignore levels and loggers do all filtering alone',
          'Because either filter can block, so the stricter of the two decides',
          'Because levels apply only to files and never to console output',
          'No filtering occurs and every record always appears everywhere',
        ],
        answer: 1,
        explanation: 'Step 1: Record has `Level.FINE` via `logger`. Step 2: `Handler` has its own `level`. Step 3: Tracing mismatched settings shows missing output despite logger allowance. Step 4: Only dual-filter filtering explains the silence.',
      },
      // Placement-pattern: throwing versus log plus user summary split
      {
        q: 'What does logger.throwing do alongside logger.log warning with the exception?',
        options: [
          'Throwing records finer flow entry while warning carries the stack for diagnosis',
          'Throwing rethrows the exception to the caller automatically',
          'Logging with an exception hides the stack for security in all cases',
          'Both calls print identical user-facing error dialogs',
        ],
        answer: 0,
        explanation: 'Step 1: Call `logger.throwing` logs `FINER` with `THROW` marker. Step 2: Call `logger.log(Level.WARNING, "Reading image", e)` attaches `stack`. Step 3: Tracing shows flow versus diagnostic roles. Step 4: Only split-role option matches the recipe.',
      },
      {
        q: 'How should user-facing failure text differ from logged detail?',
        options: [
          'Logs should contain no detail to save disk space in all cases',
          'Both must show full stacks including library versions to all users',
          'Users see short summaries while logs keep stacks plus versions for developers',
          'User text must expose internal paths to prove transparency',
        ],
        answer: 2,
        explanation: 'Step 1: Audience split is `user` versus `developer`. Step 2: Detail `stack` aids fix but confuses. Step 3: Tracing recipe shows `summary` to user plus `trace` to log. Step 4: Only summary-plus-trace split follows the guidance.',
      },
    ],
  },
]

export const javaCh6Content = javaCh06Content

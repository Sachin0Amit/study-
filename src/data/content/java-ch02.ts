import type { SectionContent } from '../library'

// ============================================================================
// Core Java Vol. I 12e — Chapter 2: Fundamental Programming Structures
// Book Ch.3 Fundamental Programming Structures in Java.
// ============================================================================

export const javaCh02Content: SectionContent[] = [
  // ---------------------------------------------------------------- java-ch2-s1
  {
    sectionId: 'java-ch2-s1',
    readingTime: 10,
    intro: 'Java fixes the size and range of every primitive type so a program means the same on every processor. Variables plus constants plus enumerated types build reliable state on that foundation. This section covers integer plus floating-point plus char plus boolean types together with final constants plus enum plus var inference.',
    objectives: [
      'Choose int versus long versus double for a task and predict overflow plus precision behavior',
      'Declare plus initialize plus freeze state with final constants plus enum types plus var inference',
      'Explain char plus Unicode plus boolean rules and avoid C-style numeric truthiness',
    ],
    concepts: [
      {
        term: 'Integer types with fixed ranges',
        kind: 'definition',
        statement: 'The **integer** family uses `int` for everyday counts plus `long` for planetary populations, with `byte` plus `short` reserved for storage-sensitive buffers and file work.',
        detail: 'Ranges never depend on the machine: int covers about negative two billion to positive two billion, while long needs an L suffix such as 4000000000L to avoid int overflow during compilation.',
      },
      {
        term: 'Floating-point and char truth',
        kind: 'definition',
        statement: 'The **floating** types pair `double` for default decimal work with `float` needing an `F` suffix, while `char` holds a UTF-16 code unit written as single-quoted literals in source.',
        detail: 'Double is the default for literals like 3.14, float saves space at precision cost, and char values participate in Unicode escapes plus code-point APIs rather than raw bytes.',
      },
      {
        term: 'Boolean strictness',
        kind: 'law',
        statement: 'A **boolean** variable holds `true` or `false` only, so an `if` test plus a `while` test must already be boolean and cannot borrow an integer zero check from C.',
        detail: 'Writing if (x = 1) fails because assignment yields an integer that never converts to boolean, which catches a whole class of C mistakes at compile time.',
      },
      {
        term: 'Constants plus enums plus var',
        kind: 'method',
        statement: 'A **constant** uses `final double CM_PER_INCH = 2.54` to freeze a value, an `enum Size` restricts a variable to a named set, and `var` infers locals such as `var days = 12`.',
        detail: 'Final on a primitive or String makes reassignment illegal, enum Size with SMALL plus MEDIUM plus LARGE replaces fragile integer codes, and var keeps object declarations concise without weakening static typing.',
      },
      {
        term: 'Declaration versus initialization',
        kind: 'insight',
        statement: 'Every **variable** needs `type` plus name plus a value before use, because `int vacationDays` alone leaves a definite-assignment error until `vacationDays = 12` executes.',
        detail: 'Unlike C extern tricks, Java has no separate declaration step: the compiler tracks every path and rejects reads of possibly unassigned locals before they can produce garbage.',
      },
    ],
    figures: [
      {
        caption: 'Primitive families by width plus default choices plus suffix rules for long and float.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Java primitive types widths" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Fixed primitive widths</text><rect x="36" y="64" width="150" height="80" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="13" fill="currentColor">int default</text><text x="52" y="112" font-family="sans-serif" font-size="12" fill="currentColor">four bytes</text><rect x="210" y="64" width="150" height="80" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="226" y="92" font-family="sans-serif" font-size="13" fill="currentColor">long plus L</text><text x="226" y="112" font-family="sans-serif" font-size="12" fill="currentColor">eight bytes</text><rect x="384" y="64" width="150" height="80" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="400" y="92" font-family="sans-serif" font-size="13" fill="currentColor">double default</text><text x="400" y="112" font-family="sans-serif" font-size="12" fill="currentColor">eight bytes</text><rect x="36" y="170" width="150" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="198" font-family="sans-serif" font-size="13" fill="currentColor">char unit</text><text x="52" y="218" font-family="sans-serif" font-size="12" fill="currentColor">UTF-16 unit</text><rect x="210" y="170" width="150" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="226" y="198" font-family="sans-serif" font-size="13" fill="currentColor">boolean</text><text x="226" y="218" font-family="sans-serif" font-size="12" fill="currentColor">true or false</text><rect x="384" y="170" width="150" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="400" y="198" font-family="sans-serif" font-size="13" fill="currentColor">final plus enum</text><text x="400" y="218" font-family="sans-serif" font-size="12" fill="currentColor">frozen sets</text><text x="36" y="280" font-family="sans-serif" font-size="13" fill="currentColor">Defaults: int for whole numbers, double for decimals.</text><text x="36" y="302" font-family="sans-serif" font-size="13" fill="currentColor">Suffix L marks long, F marks float, var infers locals.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Constants plus enums plus var in one program',
        problem: 'Convert inches to centimeters with a frozen factor, restrict shirt size to named values, and infer local types without repeating them.',
        steps: [
          { label: 'Step 1: Freeze the conversion factor', text: 'Declare a named constant instead of a magic number:\n```java\npublic class Constants {\n    public static void main(String[] args) {\n        final double CM_PER_INCH = 2.54;\n        double inches = 10.0;\n        double cm = inches * CM_PER_INCH;\n        System.out.println(cm);\n    }\n}\n```\nReassigning CM_PER_INCH later fails compilation, which is the intended protection.' },
          { label: 'Step 2: Restrict size with enum', text: 'Replace integer codes with a type-safe set:\n```java\nenum Size { SMALL, MEDIUM, LARGE }\nSize shirt = Size.MEDIUM;\nSystem.out.println(shirt);\n```\nOnly the three names compile, so invalid sizes become compile errors rather than runtime surprises.' },
          { label: 'Step 3: Infer locals with var', text: 'Let the compiler repeat the obvious type:\n```java\nvar vacationDays = 12;\nvar greeting = "Hello";\nSystem.out.println(vacationDays + greeting.length());\n```\nVar is still statically typed: vacationDays is int and greeting is String from birth.' },
        ],
        result: 'The program prints centimeter value plus MEDIUM plus a small sum, showing constants plus enums plus inference working together.',
      },
      {
        title: 'Avoid overflow plus precision traps',
        problem: 'Show why a large population needs long and why float literals need suffixes while boolean tests reject integers.',
        steps: [
          { label: 'Step 1: Trigger int overflow safely', text: 'Compute beyond the int range and repair with long:\n```java\nint max = Integer.MAX_VALUE;\nSystem.out.println(max + 1);\nlong world = 8000000000L;\nSystem.out.println(world);\n```\nThe first print wraps to a negative value while the long literal with L holds the true count.' },
          { label: 'Step 2: Mark float literals', text: 'Request single precision explicitly:\n```java\nfloat ratio = 0.5F;\ndouble exact = 0.5;\nSystem.out.println(ratio + exact);\n```\nWithout F the literal defaults to double and refuses to narrow into float.' },
          { label: 'Step 3: Respect boolean strictness', text: 'Write tests that already yield boolean:\n```java\nint x = 3;\nif (x != 0) {\n    System.out.println("nonzero");\n}\nboolean done = false;\nwhile (!done) {\n    done = true;\n}\n```\nUsing x alone as a condition fails, unlike C where nonzero means true.' },
        ],
        result: 'Overflow plus suffix plus boolean lessons are confirmed by three small runs that each fail if the rule is ignored.',
      },
    ],
    keyTakeaways: [
      'Int is the default whole type while long with L covers larger counts with fixed ranges.',
      'Double is the default decimal type while float needs F and char holds UTF-16 units.',
      'Boolean tests accept only true or false, never integer zero checks.',
      'Final plus enum plus var freeze values plus restrict choices plus reduce repetition safely.',
    ],
    quiz: [
      {
        q: 'Which declaration correctly holds the number of people on the planet today?',
        options: [
          'int world = 8000000000;',
          'long world = 8000000000L;',
          'float world = 8000000000;',
          'boolean world = true;',
        ],
        answer: 1,
        explanation: 'Step 1: Estimate magnitude near eight billion in `long` range. Step 2: Recall `int` stops near two billion. Step 3: Tracing `int world = 8000000000` reports out-of-range literal. Step 4: Only `long` with suffix `L` compiles and holds the value.',
      },
      {
        q: 'What does final double CM_PER_INCH equals 2.54 guarantee?',
        options: [
          'The name can be reassigned to any new factor later',
          'The variable becomes a mutable StringBuilder',
          'The value is frozen after initialization and reads use the named constant',
          'The compiler deletes all uses of the factor',
        ],
        answer: 2,
        explanation: 'Step 1: Keyword `final` marks `CM_PER_INCH`. Step 2: Initialization `2.54` sets it once. Step 3: Tracing reassignment shows a compile error on `final` variable. Step 4: Reads such as `inches * CM_PER_INCH` keep working with the frozen value.',
      },
      // Placement-pattern: enum versus integer codes plus var inference
      {
        q: 'Why prefer enum Size with SMALL MEDIUM LARGE over int codes 1 2 3?',
        options: [
          'Enums restrict values to named constants checked at compile time',
          'Integers run faster on every JVM and use less source text',
          'Enums allow any integer including undefined codes at runtime',
          'There is no difference once the program is compiled',
        ],
        answer: 0,
        explanation: 'Step 1: Compare `enum Size` with raw `int` codes. Step 2: Assignment `Size.MEDIUM` type-checks the name. Step 3: Tracing `int code = 9` shows no error though 9 is meaningless. Step 4: Only `enum` turns invalid choices into compile errors.',
      },
      {
        q: 'What is true of var vacationDays equals 12?',
        options: [
          'The variable has no type and can later hold a String',
          'Var declares a mutable field visible to all classes',
          'Var requires an explicit import before use',
          'The compiler infers int once and enforces it thereafter',
        ],
        answer: 3,
        explanation: 'Step 1: Input `var vacationDays = 12` infers from `12`. Step 2: Type becomes `int` at declaration. Step 3: Tracing `vacationDays = "Hi"` reports incompatible types. Step 4: Inference is concise but still statically typed, so only the second option holds.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch2-s2
  {
    sectionId: 'java-ch2-s2',
    readingTime: 10,
    intro: 'Strings are immutable objects with a rich API, not mutable character arrays that code edits in place. Console plus file input and output then make programs interactive and persistent. This section joins substring plus concatenation plus equality plus text blocks with Scanner reading plus printf formatting plus file streams.',
    objectives: [
      'Manipulate immutable strings with substring plus join plus equals plus code-point awareness',
      'Read console input with Scanner and write formatted output with printf plus format',
      'Perform file input and output with Path plus Scanner plus PrintWriter using safe resource handling',
    ],
    concepts: [
      {
        term: 'Immutability and sharing',
        kind: 'definition',
        statement: 'An **immutable** `String` such as `"Hello"` can never change in place, so `greeting.substring(0, 3)` returns a new string while the original stays intact for other references.',
        detail: 'Sharing is safe precisely because no method mutates the characters; StringBuilder exists separately for efficient assembly of many pieces.',
      },
      {
        term: 'Equality plus empty plus null',
        kind: 'theorem',
        statement: 'Correct **equality** uses `s.equals(t)` for content, while `s == t` tests `reference` identity and `null` means no object at all versus empty meaning zero length.',
        detail: 'Horstmann warns that double equals on strings often appears to work due to interning then fails on computed strings, so equals plus equalsIgnoreCase are the reliable content tests.',
      },
      {
        term: 'Code points versus code units',
        kind: 'insight',
        statement: 'A **code point** is a full Unicode character addressed by `codePointAt` plus `codePoints`, while `charAt` plus `length` expose UTF-16 `code units` that split supplementary characters.',
        detail: 'Emoji and historic scripts need two units for one point, so counting units overcounts characters and substring on unit indexes can split a surrogate pair.',
      },
      {
        term: 'String API plus builder plus text blocks',
        kind: 'method',
        statement: 'The **API** offers `length` plus `substring` plus `split` plus `join`, `StringBuilder` appends efficiently, and `"""` text blocks preserve multi-line HTML plus SQL without escape noise.',
        detail: 'Use plus for few concatenations, StringBuilder for loops, and stripIndent-aware blocks for embedded languages where backslash escapes would obscure structure.',
      },
      {
        term: 'Scanner plus printf plus files',
        kind: 'method',
        statement: 'Console **input** uses `new Scanner(System.in)` with `nextLine` plus `nextInt`, formatted output uses `System.out.printf` with `%d` plus `%s`, and files use `Path.of` plus `PrintWriter`.',
        detail: 'NextInt leaves the newline behind so a following nextLine needs an extra consume, printf needs matching specifiers, and file code belongs in try with resources so streams always close.',
      },
    ],
    figures: [
      {
        caption: 'One immutable string shared by two variables versus a separate builder for assembly.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="String immutability diagram" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Strings never mutate</text><rect x="36" y="64" width="200" height="90" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="13" fill="currentColor">greeting Hello</text><text x="52" y="112" font-family="sans-serif" font-size="12" fill="currentColor">one object</text><rect x="270" y="64" width="160" height="90" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="286" y="92" font-family="sans-serif" font-size="13" fill="currentColor">s points here</text><text x="286" y="112" font-family="sans-serif" font-size="12" fill="currentColor">reference</text><rect x="464" y="64" width="160" height="90" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="480" y="92" font-family="sans-serif" font-size="13" fill="currentColor">t points here</text><text x="480" y="112" font-family="sans-serif" font-size="12" fill="currentColor">same object</text><line x1="310" y1="110" x2="270" y2="110" stroke="currentColor" stroke-width="2"/><line x1="480" y1="110" x2="240" y2="125" stroke="currentColor" stroke-width="2"/><rect x="36" y="190" width="300" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="216" font-family="sans-serif" font-size="13" fill="currentColor">substring returns new object</text><text x="52" y="236" font-family="sans-serif" font-size="12" fill="currentColor">original unchanged</text><rect x="370" y="190" width="254" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="386" y="216" font-family="sans-serif" font-size="13" fill="currentColor">StringBuilder appends</text><text x="386" y="236" font-family="sans-serif" font-size="12" fill="currentColor">then toString freezes</text><text x="36" y="300" font-family="sans-serif" font-size="13" fill="currentColor">Use equals for content, double equals only for identity.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'String operations without mutation surprises',
        problem: 'Extract plus compare plus build strings correctly while proving the original reference never changes.',
        steps: [
          { label: 'Step 1: Slice and compare', text: 'Work with substrings and content tests:\n```java\nString greeting = "Hello, World";\nString sub = greeting.substring(0, 5);\nSystem.out.println(sub);\nSystem.out.println(greeting.equals("Hello, World"));\nSystem.out.println(greeting == "Hello, World");\n```\nEquals checks characters while double equals checks identity and must not be trusted for content.' },
          { label: 'Step 2: Handle empty versus null', text: 'Distinguish zero length from no object:\n```java\nString empty = "";\nString missing = null;\nSystem.out.println(empty.length());\nSystem.out.println(missing == null);\n```\nCalling length on missing would throw, so test for null first.' },
          { label: 'Step 3: Build efficiently', text: 'Assemble many pieces with a builder and multiline blocks:\n```java\nStringBuilder sb = new StringBuilder();\nsb.append("To do:");\nsb.append("code, test, ship");\nString list = sb.toString();\nSystem.out.println(list);\nString html = """\n    <div>Hello</div>\n    """;\nSystem.out.println(html);\n```\nBuilder avoids quadratic copying and text blocks keep markup readable.' },
        ],
        result: 'The prints show Hel plus true plus builder output, with the original greeting still intact after slicing.',
      },
      {
        title: 'Interactive console plus formatted file output',
        problem: 'Ask for a name and age on the console, echo a formatted line, then persist the same record to a file and read it back.',
        steps: [
          { label: 'Step 1: Read console input', text: 'Attach a scanner to standard input:\n```java\nimport java.util.Scanner;\nScanner in = new Scanner(System.in);\nSystem.out.print("What is your name? ");\nString name = in.nextLine();\nSystem.out.print("Age? ");\nint age = in.nextInt();\nSystem.out.println(name + age);\n```\nNextLine reads spaced names correctly while nextInt parses the number.' },
          { label: 'Step 2: Format the echo', text: 'Control width plus precision with printf:\n```java\nSystem.out.printf("Hello, %s. Next year you will be %d.%n", name, age + 1);\n```\nPercent s takes strings, percent d takes integers, and percent n ends the line portably.' },
          { label: 'Step 3: Write and read a file', text: 'Persist with PrintWriter and Path:\n```java\nimport java.io.PrintWriter;\nimport java.nio.file.Path;\nPrintWriter out = new PrintWriter("record.txt");\nout.printf("Hello, %s. Age %d.%n", name, age);\nout.close();\nScanner fin = new Scanner(Path.of("record.txt"));\nSystem.out.println(fin.nextLine());\nfin.close();\n```\nClosing flushes bytes so the reread sees the complete line.' },
        ],
        result: 'Console shows a friendly next-year message and record dot txt holds the same formatted line for rereading.',
      },
    ],
    keyTakeaways: [
      'Strings are immutable shared objects so slicing returns new values without harming originals.',
      'Content tests need equals while double equals tests identity and null means no object.',
      'Code points are characters while code units are UTF-16 halves that can split emoji.',
      'Scanner plus printf plus PrintWriter cover console and file input and output with explicit closing.',
    ],
    quiz: [
      {
        q: 'After String s equals Hello and String t equals s.substring(0, 2), what is true?',
        options: [
          's still holds Hello while t holds a new string He',
          's now holds He because substring mutates the original',
          'Both s and t become null automatically',
          'Substring always throws for indexes inside the string',
        ],
        answer: 0,
        explanation: 'Step 1: Start `String s = "Hello"`. Step 2: Call `s.substring(0, 2)` yielding `He`. Step 3: Tracing shows `s` unchanged since `String` is immutable. Step 4: New object `t` holds the slice while `s` keeps five characters.',
      },
      {
        q: 'Which test correctly checks whether greeting holds Hello ignoring case?',
        options: [
          'greeting == Hello',
          'greeting.length() == Hello',
          'greeting.equalsIgnoreCase("Hello")',
          'greeting = Hello',
        ],
        answer: 2,
        explanation: 'Step 1: Need content test via `equals` family. Step 2: Operator `==` checks `reference` identity. Step 3: Tracing interned versus computed strings shows `==` can fail on equal text. Step 4: Only `equalsIgnoreCase` compares characters case-insensitively.',
      },
      // Placement-pattern: Scanner newline plus printf specifier traps
      {
        q: 'After int age equals in.nextInt, a following in.nextLine returns empty. Why?',
        options: [
          'Strings cannot be read after integers in Java',
          'Scanner closes System.in automatically after any integer',
          'Printf stole the pending line from the input buffer',
          'nextInt leaves the line terminator unread, so nextLine consumes that remainder',
        ],
        answer: 3,
        explanation: 'Step 1: Call `in.nextInt()` parsing digits only. Step 2: Newline stays in buffer as `terminator`. Step 3: Tracing `in.nextLine()` shows it reads to that terminator immediately. Step 4: Consuming one extra `nextLine` or using consistent line parsing fixes the pattern.',
      },
      {
        q: 'Which printf call correctly prints name plus next age?',
        options: [
          'System.out.printf("Hello, %d. Next year %s.", name, age + 1)',
          'System.out.printf("Hello, %s. Next year %d.", name, age + 1)',
          'System.out.println("Hello, %s. Next year %d.", name, age)',
          'System.out.printf(name, age)',
        ],
        answer: 1,
        explanation: 'Step 1: Match specifiers `%s` for `name` and `%d` for `age + 1`. Step 2: Order must follow arguments. Step 3: Tracing swapped version throws format mismatch on `name`. Step 4: Only the first call pairs `String` with `%s` and `int` with `%d`.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch2-s3
  {
    sectionId: 'java-ch2-s3',
    readingTime: 9,
    intro: 'Operators plus casts plus control flow turn declarations into decisions and repetitions. Numeric promotion plus Math helpers plus narrowing casts control values while branches plus loops plus switch expressions control paths. This section unifies arithmetic plus bitwise plus conditional operators with block scope plus labeled break.',
    objectives: [
      'Apply arithmetic plus Math plus bitwise operators with correct precedence and casts',
      'Write if plus while plus for plus switch expressions including yield and labeled break',
      'Predict promotion plus narrowing plus assignment conversion without precision surprises',
    ],
    concepts: [
      {
        term: 'Arithmetic plus Math helpers',
        kind: 'definition',
        statement: 'The **operators** `+` plus `-` plus `*` plus `%` combine with `Math.sqrt` plus `Math.pow` plus `Math.PI` to express numeric computation without manual constants.',
        detail: 'Integer division truncates toward zero while percent yields remainders, so averages need an early double cast to keep fractional parts.',
      },
      {
        term: 'Conversions and casts',
        kind: 'method',
        statement: 'A **widening** conversion such as `int` to `double` is automatic, while a **narrowing** cast such as `(int) 3.99` truncates toward zero and may overflow silently.',
        detail: 'Compound assignment like x plus equals 3.5 adjusts by casting the result back, which hides a narrowing that a plain assignment would reject.',
      },
      {
        term: 'Relational plus boolean plus conditional',
        kind: 'notation',
        statement: 'Tests use `==` plus `!=` plus `&&` plus `||` with short-circuiting, and the **conditional** `condition ? a : b` plus `switch` expressions choose values functionally.',
        detail: 'Double ampersand skips the right side when the left is false, which guards dereferences such as s not null and s dot length greater than zero in one line.',
      },
      {
        term: 'Switch expressions and yield',
        kind: 'definition',
        statement: 'A **switch** expression such as `switch (season) { case WINTER -> "cold"; default -> yield "mild"; }` returns a value where `yield` supplies the result from a braced branch.',
        detail: 'Arrow labels need no fall-through and no break, while colon labels retain legacy fall-through for grouped cases and demand explicit breaks to stop.',
      },
      {
        term: 'Loops plus scope plus break',
        kind: 'method',
        statement: 'Blocks define **scope** with `int n` visible only inside braces, `for` plus `while` plus `do` repeat work, and a `labeled break` such as `outer:` exits nested loops cleanly.',
        detail: 'A variable cannot be redeclared in a nested block of the same method, and labeled continue plus break replace goto needs without arbitrary jumps.',
      },
    ],
    figures: [
      {
        caption: 'Branch plus loop plus switch-expression shapes with scope boxes and labeled exit.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Control flow shapes" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Decisions and repetition</text><rect x="36" y="64" width="150" height="90" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="13" fill="currentColor">if plus else</text><text x="52" y="112" font-family="sans-serif" font-size="12" fill="currentColor">diamond test</text><rect x="210" y="64" width="150" height="90" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="226" y="92" font-family="sans-serif" font-size="13" fill="currentColor">while plus for</text><text x="226" y="112" font-family="sans-serif" font-size="12" fill="currentColor">loop back edge</text><rect x="384" y="64" width="170" height="90" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="400" y="92" font-family="sans-serif" font-size="13" fill="currentColor">switch arrow</text><text x="400" y="112" font-family="sans-serif" font-size="12" fill="currentColor">yield value</text><rect x="36" y="190" width="260" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="216" font-family="sans-serif" font-size="13" fill="currentColor">block scope box</text><text x="52" y="236" font-family="sans-serif" font-size="12" fill="currentColor">declare once per nest</text><rect x="320" y="190" width="234" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="336" y="216" font-family="sans-serif" font-size="13" fill="currentColor">outer labeled break</text><text x="336" y="236" font-family="sans-serif" font-size="12" fill="currentColor">exit both loops</text><text x="36" y="300" font-family="sans-serif" font-size="13" fill="currentColor">Prefer arrow switches and short-circuit guards.</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Casts plus Math plus bitwise in a checksum',
        problem: 'Compute an average without truncation, a hypotenuse with Math, and a flag mask with bitwise operators.',
        steps: [
          { label: 'Step 1: Average with promotion', text: 'Force decimal division early:\n```java\nint total = 7;\nint count = 2;\ndouble avg = (double) total / count;\nSystem.out.println(avg);\nSystem.out.println(Math.sqrt(25.0));\n```\nThe cast widens total before division so 3.5 survives instead of truncating to 3.' },
          { label: 'Step 2: Mask flags bitwise', text: 'Test and set individual bits:\n```java\nint flags = 0b1100;\nint mask = 0b1010;\nSystem.out.println(flags & mask);\nSystem.out.println(flags | mask);\nSystem.out.println(flags ^ mask);\n```\nAmpersand keeps shared ones, pipe merges ones, caret keeps differences.' },
          { label: 'Step 3: Narrow explicitly', text: 'Truncate only where intended:\n```java\ndouble pi = 3.99;\nint approx = (int) pi;\nSystem.out.println(approx);\n```\nThe cast discards the fraction toward zero and documents the precision loss.' },
        ],
        result: 'Outputs 3.5 plus 5.0 plus masked integers plus 3 confirm promotion plus Math plus narrowing.',
      },
      {
        title: 'Branches plus loops plus switch expression',
        problem: 'Classify a score, sum inputs until a sentinel, and map a season to advice with an expression switch.',
        steps: [
          { label: 'Step 1: Branch on score', text: 'Choose one path with else if:\n```java\nint score = 85;\nString grade;\nif (score >= 90) {\n    grade = "A";\n} else if (score >= 80) {\n    grade = "B";\n} else {\n    grade = "C";\n}\nSystem.out.println(grade);\n```\nBlock scope keeps grade visible after the chain because it was declared before.' },
          { label: 'Step 2: Loop with labeled exit', text: 'Search a table and leave both loops at once:\n```java\nouter:\nfor (int r = 0; r < 3; r++) {\n    for (int c = 0; c < 3; c++) {\n        if (r == 1 && c == 1) {\n            break outer;\n        }\n    }\n}\nSystem.out.println("found center");\n```\nWithout the label only the inner loop would stop.' },
          { label: 'Step 3: Switch to a value', text: 'Return advice directly from cases:\n```java\nenum Season { WINTER, SPRING, SUMMER, FALL }\nSeason s = Season.WINTER;\nString advice = switch (s) {\n    case WINTER -> "Stay warm";\n    case SUMMER -> "Stay cool";\n    default -> {\n        yield "Enjoy the change";\n    }\n};\nSystem.out.println(advice);\n```\nYield supplies the default branch value from its block.' },
        ],
        result: 'The run prints B plus found center plus Stay warm, covering branch plus nested loop plus expression switch.',
      },
    ],
    keyTakeaways: [
      'Promote to double before division and narrow with explicit casts that document truncation.',
      'Short-circuit and plus or guard conditions while ternary and switch yield values.',
      'Arrow switch cases avoid fall-through while colon cases need explicit break.',
      'Block scope limits visibility and labeled break exits nested loops without goto.',
    ],
    quiz: [
      {
        q: 'What does (double) 7 divided by 2 yield versus 7 divided by 2?',
        options: [
          '7 versus 2 because division is not defined for integers',
          '3 versus 3.5 because casts always truncate after division',
          '3.5 versus 3 because the cast promotes before integer division',
          'Identical results since Java ignores casts in division',
        ],
        answer: 2,
        explanation: 'Step 1: Evaluate `(double) total / count` with `total = 7`. Step 2: Cast widens to `7.0` before `/`. Step 3: Tracing `7 / 2` alone shows integer truncation to `3`. Step 4: Only promotion explains `3.5` versus `3`.',
      },
      {
        q: 'What is the role of yield in a switch expression default block?',
        options: [
          'It supplies the value of the braced branch to the switch result',
          'It terminates the whole program immediately',
          'It declares a new loop variable for the switch',
          'It imports a package for the case labels',
        ],
        answer: 0,
        explanation: 'Step 1: Switch is an expression assigned to `advice`. Step 2: Braced `default` needs `yield` to produce a value. Step 3: Tracing `yield "Enjoy"` returns that `String` as the switch value. Step 4: No termination or import occurs, so only value supply fits.',
      },
      // Placement-pattern: short-circuit plus bitwise versus logical
      {
        q: 'Why does if (s not null and s length greater than zero) need double ampersand rather than single ampersand?',
        options: [
          'Single ampersand is illegal in any condition',
          'Double ampersand short-circuits and skips the length call when s is null',
          'Double ampersand converts null to empty automatically',
          'There is no difference and both always call both sides equally',
        ],
        answer: 1,
        explanation: 'Step 1: Test `s != null && s.length() > 0`. Step 2: Operator `&&` evaluates left then right conditionally. Step 3: Tracing with `s = null` shows right side skipped, avoiding dereference. Step 4: Single `&` would evaluate `length` and throw, so short-circuit is the guard.',
      },
      {
        q: 'What does break outer do inside doubly nested loops labeled outer?',
        options: [
          'Exits only the inner loop and continues the outer one',
          'Throws an exception that must be caught nearby',
          'Restarts the outer loop from its first iteration',
          'Exits both loops and continues after the outer loop',
        ],
        answer: 3,
        explanation: 'Step 1: Label `outer` marks the outer `for`. Step 2: Statement `break outer` targets that label. Step 3: Tracing nested iteration shows control lands after both loops. Step 4: Plain `break` would stop only the inner loop, so labeled form is the full exit.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch2-s4
  {
    sectionId: 'java-ch2-s4',
    readingTime: 9,
    intro: 'Exact decimal money plus huge combinatorics plus ordered collections need types beyond int plus double. BigInteger plus BigDecimal provide arbitrary precision through methods rather than operators. Arrays plus enhanced loops plus sorting plus multidimensional shapes then store sequences of those values efficiently.',
    objectives: [
      'Choose BigInteger versus BigDecimal and apply add plus multiply plus divide with rounding',
      'Create plus copy plus sort arrays and traverse them with indexed plus enhanced loops',
      'Build multidimensional plus ragged arrays and read command-line parameters safely',
    ],
    concepts: [
      {
        term: 'BigInteger arbitrary integers',
        kind: 'definition',
        statement: 'A **BigInteger** such as `BigInteger.valueOf(100)` or `new BigInteger("222232244629420445529739893461909967206666939096499764990979600")` holds any length count with `add` plus `multiply` methods.',
        detail: 'Operators like plus do not work on objects, so arithmetic must call methods; constants ZERO plus ONE plus TEN plus TWO cover frequent values without new allocations.',
      },
      {
        term: 'BigDecimal exact decimals',
        kind: 'method',
        statement: 'A **BigDecimal** built by `new BigDecimal("0.1")` avoids binary `double` artifacts, while `divide` with `RoundingMode.HALF_UP` produces school-style rounding for non-terminating quotients.',
        detail: 'Never use the double constructor because new BigDecimal with a binary fraction copies its inexact bits; compare with compareTo rather than equals since scale affects equality.',
      },
      {
        term: 'Array declaration and use',
        kind: 'notation',
        statement: 'An **array** declares as `int[] a` then allocates with `new int[10]` or `new int[] { 1, 2, 3 }`, where `a.length` reports size and `a[i]` addresses each slot from zero.',
        detail: 'Declaration alone creates only a reference, new reserves contiguous slots with default zeros, and missing allocation plus out-of-range indexes are the two classic faults.',
      },
      {
        term: 'Enhanced loop plus copying plus sorting',
        kind: 'method',
        statement: 'The **enhanced** loop `for (int v : a)` reads every element, `Arrays.copyOf` plus `arraycopy` duplicate ranges, and `Arrays.sort` plus `binarySearch` order and locate values.',
        detail: 'Enhanced loops cannot assign back to slots or know indexes, copyOf grows or truncates cleanly, and binarySearch requires a sorted array to return meaningful positions.',
      },
      {
        term: 'Multidimensional plus ragged plus args',
        kind: 'insight',
        statement: 'A **table** such as `int[][] m = new int[3][4]` is an array of arrays, so `m[r].length` may differ per row to form **ragged** shapes while `args` carries command-line words into `main`.',
        detail: 'Two-dimensional access is m row then column, ragged rows allocate separately for triangular data, and args length must be checked before indexing to avoid crashes on missing words.',
      },
    ],
    figures: [
      {
        caption: 'Contiguous array slots with length plus a ragged two-dimensional table beside them.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Arrays and ragged tables" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Arrays are indexed slots</text><rect x="36" y="70" width="60" height="50" fill="none" stroke="currentColor" stroke-width="2"/><text x="52" y="100" font-family="sans-serif" font-size="12" fill="currentColor">a[0]</text><rect x="100" y="70" width="60" height="50" fill="none" stroke="currentColor" stroke-width="2"/><text x="116" y="100" font-family="sans-serif" font-size="12" fill="currentColor">a[1]</text><rect x="164" y="70" width="60" height="50" fill="none" stroke="currentColor" stroke-width="2"/><text x="180" y="100" font-family="sans-serif" font-size="12" fill="currentColor">a[2]</text><rect x="228" y="70" width="60" height="50" fill="none" stroke="currentColor" stroke-width="2"/><text x="244" y="100" font-family="sans-serif" font-size="12" fill="currentColor">a[3]</text><text x="36" y="150" font-family="sans-serif" font-size="12" fill="currentColor">length 4, indexes zero to three</text><rect x="36" y="180" width="120" height="40" fill="none" stroke="currentColor" stroke-width="2" rx="6"/><text x="52" y="205" font-family="sans-serif" font-size="12" fill="currentColor">row 0 len 2</text><rect x="170" y="180" width="170" height="40" fill="none" stroke="currentColor" stroke-width="2" rx="6"/><text x="186" y="205" font-family="sans-serif" font-size="12" fill="currentColor">row 1 len 4</text><rect x="36" y="230" width="90" height="40" fill="none" stroke="currentColor" stroke-width="2" rx="6"/><text x="52" y="255" font-family="sans-serif" font-size="12" fill="currentColor">row 2 len 1</text><text x="36" y="300" font-family="sans-serif" font-size="13" fill="currentColor">Ragged rows are separate arrays with own lengths.</text><text x="36" y="322" font-family="sans-serif" font-size="13" fill="currentColor">Sort before binary search, check args length first.</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Exact lottery odds with BigInteger',
        problem: 'Compute a large choose value that overflows long by using arbitrary-precision integers and method chaining.',
        steps: [
          { label: 'Step 1: Build big endpoints', text: 'Create values from long and from digits:\n```java\nimport java.math.BigInteger;\nBigInteger a = BigInteger.valueOf(100);\nBigInteger big = new BigInteger("222232244629420445529739893461909967206666939096499764990979600");\nSystem.out.println(a);\nSystem.out.println(big.bitLength());\n```\nString construction preserves every digit while valueOf covers ordinary magnitudes.' },
          { label: 'Step 2: Multiply and divide by method', text: 'Combine without operators:\n```java\nBigInteger numerator = BigInteger.valueOf(49).multiply(BigInteger.valueOf(48));\nBigInteger odds = numerator.divide(BigInteger.valueOf(2));\nSystem.out.println(odds);\n```\nAdd plus multiply plus divide replace plus star slash for big values.' },
          { label: 'Step 3: Round decimals correctly', text: 'Use string decimals with explicit rounding:\n```java\nimport java.math.BigDecimal;\nimport java.math.RoundingMode;\nBigDecimal price = new BigDecimal("10.00");\nBigDecimal share = price.divide(new BigDecimal("3"), RoundingMode.HALF_UP);\nSystem.out.println(share);\n```\nHalf-up matches school rounding and avoids the exception for endless quotients.' },
        ],
        result: 'The prints show exact combinatorics plus 3.33, which double arithmetic would approximate with binary error.',
      },
      {
        title: 'Arrays from allocation to sorting to tables',
        problem: 'Allocate an array, fill it, copy and sort it, then build a ragged table and echo command-line words.',
        steps: [
          { label: 'Step 1: Allocate and traverse', text: 'Create slots and read them two ways:\n```java\nint[] a = new int[5];\nfor (int i = 0; i < a.length; i++) {\n    a[i] = (i + 1) * 10;\n}\nfor (int v : a) {\n    System.out.println(v);\n}\n```\nIndexed writes set positions while the enhanced loop reads values cleanly.' },
          { label: 'Step 2: Copy and sort plus search', text: 'Duplicate then order before locating:\n```java\nimport java.util.Arrays;\nint[] b = Arrays.copyOf(a, a.length);\nArrays.sort(b);\nSystem.out.println(Arrays.toString(b));\nSystem.out.println(Arrays.binarySearch(b, 30));\n```\nBinary search is valid only after sorting, and toString prints the whole array.' },
          { label: 'Step 3: Ragged table plus args', text: 'Allow rows of different lengths and guard args:\n```java\nint[][] m = new int[3][];\nm[0] = new int[2];\nm[1] = new int[4];\nm[2] = new int[1];\nSystem.out.println(m[1].length);\nif (args.length > 0) {\n    System.out.println(args[0]);\n}\n```\nEach row is its own array, and args length must be checked before indexing.' },
        ],
        result: 'Sorted output plus row lengths plus first argument confirm allocation plus sorting plus ragged plus args handling.',
      },
    ],
    keyTakeaways: [
      'BigInteger handles unbounded counts while BigDecimal with string constructor handles exact decimals.',
      'Big arithmetic uses methods plus compareTo while divide needs explicit rounding modes.',
      'Arrays need new allocation plus zero-based indexes plus length checks before access.',
      'Sort before binary search and allow ragged rows as independent arrays with own lengths.',
    ],
    quiz: [
      {
        q: 'Why must new BigDecimal use a string rather than a double literal for 0.1?',
        options: [
          'String construction is slower and therefore more accurate by delay',
          'Doubles cannot represent any value below one',
          'Strings allow division by zero without exceptions',
          'Double 0.1 already carries binary approximation that the constructor would copy',
        ],
        answer: 3,
        explanation: 'Step 1: Literal `0.1` as `double` is inexact binary. Step 2: Constructor `new BigDecimal(0.1)` copies those bits. Step 3: Tracing digits shows a long tail after `0.1000`. Step 4: String `new BigDecimal("0.1")` parses decimal exactly, so only the binary-copy warning explains it.',
      },
      {
        q: 'What does int[] a equals new int[5] create?',
        options: [
          'Five independent variables named a1 through a5',
          'A reference a to five zero-initialized contiguous slots',
          'A resizable list that grows automatically on assignment',
          'A file of five lines on disk',
        ],
        answer: 1,
        explanation: 'Step 1: Declaration `int[] a` is a `reference`. Step 2: Operator `new int[5]` allocates slots. Step 3: Tracing `a.length` shows `5` with zeros initially. Step 4: No resizing or files occur, so only the contiguous-slots option matches.',
      },
      // Placement-pattern: copy sort search plus ragged reasoning
      {
        q: 'Why does binarySearch require a sorted array?',
        options: [
          'It compares middle elements and discards halves assuming order',
          'It scans every element but needs sorted text for printing',
          'Sorting changes the array length required for search',
          'Unsorted arrays throw at allocation time before search',
        ],
        answer: 0,
        explanation: 'Step 1: Call `Arrays.binarySearch(b, 30)` after `sort`. Step 2: Algorithm probes `middle` via `compare`. Step 3: Tracing unsorted input shows halves discarded incorrectly. Step 4: Order is the precondition that makes halving valid.',
      },
      {
        q: 'How should main read the first command-line word safely?',
        options: [
          'Print args[0] unconditionally since args is never empty',
          'Allocate args with new inside main before reading',
          'Check args dot length greater than zero before using args[0]',
          'Read args[0] inside a static initializer before main runs',
        ],
        answer: 2,
        explanation: 'Step 1: Parameter `args` may hold zero words. Step 2: Guard `args.length > 0` tests presence. Step 3: Tracing `java Main` with no words shows direct `args[0]` throwing. Step 4: Only the length check makes `args[0]` safe.',
      },
    ],
  },
]

export const javaCh2Content = javaCh02Content

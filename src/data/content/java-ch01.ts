import type { SectionContent } from '../library'

// ============================================================================
// Core Java Vol. I 12e — Chapter 1: Java Platform and Development Environment
// Book Ch.1 An Introduction to Java + Ch.2 Java Programming Environment.
// ============================================================================

export const javaCh01Content: SectionContent[] = [
  // ---------------------------------------------------------------- java-ch1-s1
  {
    sectionId: 'java-ch1-s1',
    readingTime: 9,
    intro: 'Java is a whole platform with a language plus a vast library plus an execution environment, not merely syntax for classes and loops. Source files compile to architecture-neutral bytecode that every conforming virtual machine can execute with security checks and garbage collection. This section explains how the JVM plus JDK plus bytecode design delivers portability and why just-in-time compilation keeps performance competitive.',
    objectives: [
      'Distinguish the Java language from the virtual machine plus library platform and explain the role of bytecode',
      'Trace the compile plus load plus verify plus execute pipeline including just-in-time compilation',
      'State the fixed portability guarantees such as integer ranges and explain JDK versus runtime responsibilities',
    ],
    concepts: [
      {
        term: 'Platform versus language',
        kind: 'definition',
        statement: 'The **platform** is the language plus `API` library plus execution environment that provides security plus portability plus garbage collection, so Java competes as a system rather than as syntax alone.',
        detail: 'Horstmann stresses that a pleasant language without a library forces every team to rebuild graphics plus networking plus database access, while Java ships all three layers together.',
      },
      {
        term: 'Bytecode and class files',
        kind: 'definition',
        statement: 'The **compiler** translates `Welcome.java` into `Welcome.class` bytecode instructions that target no real processor and instead target the abstract virtual machine instruction set.',
        detail: 'Bytecode is architecture-neutral object code: the same class file runs on Linux plus macOS plus Windows provided a conforming runtime is present, unlike native object files tied to one CPU.',
      },
      {
        term: 'JVM execution and just-in-time compilation',
        kind: 'method',
        statement: 'The **JVM** loads `bytecode` then verifies it then interprets hot paths and finally compiles frequently run methods to native code with a just-in-time compiler for near-native speed.',
        detail: 'Interpretation gives rapid startup and safety checks, while the just-in-time compiler watches execution counts and translates hot bytecode to machine code for the exact CPU in use.',
      },
      {
        term: 'JDK toolset responsibilities',
        kind: 'notation',
        statement: 'The **JDK** bundles `javac` plus `java` plus `jshell` plus `jar` plus `javadoc`, where the compiler produces bytecode and the launcher starts a virtual machine that loads and runs it.',
        detail: 'Adoptium plus Oracle plus Amazon plus Microsoft all ship OpenJDK builds; the tools behave the same once a modern long-term-support release is installed and placed on the system path.',
      },
      {
        term: 'Portability guarantees',
        kind: 'law',
        statement: 'Java fixes **integer ranges** in `int` plus `long` so behavior does not depend on the host processor, while the libraries isolate files plus dates plus threads from operating system differences.',
        detail: 'C and C++ choose the most efficient native integer width per processor, so a program can change meaning when moved; Java removes that hazard except for user-interface look and feel where native peers still leak through.',
      },
    ],
    figures: [
      {
        caption: 'From source text to portable bytecode to native execution on three operating systems.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Java source to bytecode to JVM pipeline" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Source to bytecode to runtime</text><rect x="36" y="70" width="140" height="80" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="98" font-family="sans-serif" font-size="14" fill="currentColor">Welcome.java</text><text x="52" y="120" font-family="sans-serif" font-size="12" fill="currentColor">text source</text><rect x="210" y="70" width="140" height="80" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="228" y="98" font-family="sans-serif" font-size="14" fill="currentColor">javac</text><text x="228" y="120" font-family="sans-serif" font-size="12" fill="currentColor">compiler</text><rect x="384" y="70" width="150" height="80" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="398" y="98" font-family="sans-serif" font-size="14" fill="currentColor">Welcome.class</text><text x="398" y="120" font-family="sans-serif" font-size="12" fill="currentColor">bytecode</text><line x1="176" y1="110" x2="210" y2="110" stroke="currentColor" stroke-width="2"/><line x1="350" y1="110" x2="384" y2="110" stroke="currentColor" stroke-width="2"/><rect x="36" y="190" width="150" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="216" font-family="sans-serif" font-size="13" fill="currentColor">JVM Linux</text><text x="52" y="236" font-family="sans-serif" font-size="12" fill="currentColor">verify plus JIT</text><rect x="210" y="190" width="150" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="226" y="216" font-family="sans-serif" font-size="13" fill="currentColor">JVM macOS</text><text x="226" y="236" font-family="sans-serif" font-size="12" fill="currentColor">verify plus JIT</text><rect x="384" y="190" width="150" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="400" y="216" font-family="sans-serif" font-size="13" fill="currentColor">JVM Windows</text><text x="400" y="236" font-family="sans-serif" font-size="12" fill="currentColor">verify plus JIT</text><line x1="459" y1="150" x2="459" y2="190" stroke="currentColor" stroke-width="2"/><line x1="111" y1="150" x2="111" y2="190" stroke="currentColor" stroke-width="2"/><line x1="285" y1="150" x2="285" y2="190" stroke="currentColor" stroke-width="2"/><text x="36" y="300" font-family="sans-serif" font-size="13" fill="currentColor">One class file runs everywhere a conforming runtime exists.</text><text x="36" y="322" font-family="sans-serif" font-size="13" fill="currentColor">Hot bytecode becomes native code at runtime.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Compile and run the minimal Welcome program',
        problem: 'A new install must be proven working by compiling a three-line class and running it on the local virtual machine without any IDE assistance.',
        steps: [
          { label: 'Step 1: Write the source file', text: 'Create Welcome.java with exactly one public class matching the file name:\n```java\npublic class Welcome {\n    public static void main(String[] args) {\n        System.out.println("Welcome to Core Java");\n    }\n}\n```\nThe file name plus class name must match including case.' },
          { label: 'Step 2: Compile to bytecode', text: 'Run the compiler and list the output:\n```bash\njavac Welcome.java\nls\n```\nA new file Welcome.class appears beside the source; it contains architecture-neutral bytecode, not native machine code.' },
          { label: 'Step 3: Launch on the JVM', text: 'Start a virtual machine with the class name and no file suffix:\n```bash\njava Welcome\n```\nThe launcher loads Welcome.class, verifies the bytecode, then executes main and prints the greeting on the console.' },
        ],
        result: 'The console prints Welcome to Core Java, proving that javac plus java plus the local runtime form a working pipeline.',
      },
      {
        title: 'Inspect bytecode portability with javap',
        problem: 'Show that the class file is virtual-machine instructions rather than native code by disassembling it and reading the constant pool entry for the greeting.',
        steps: [
          { label: 'Step 1: Disassemble the class file', text: 'Ask for the virtual-machine listing:\n```bash\njavap -c Welcome\n```\nThe output shows a Code section with instructions such as getstatic plus ldc plus invokevirtual rather than x86 assembly.' },
          { label: 'Step 2: Read one instruction group', text: 'Locate the three-instruction sequence in the listing:\n```java\n// disassembly excerpt\n// getstatic System.out, ldc greeting, invokevirtual println\n```\nEach mnemonic operates on the virtual-machine stack, so the same listing is valid on every processor.' },
          { label: 'Step 3: State the portability conclusion', text: 'Because only the JVM is native, the class file moves unchanged between machines while each local runtime translates hot methods to its own CPU instructions at execution time.' },
        ],
        result: 'The javap listing confirms architecture-neutral bytecode, which is the technical basis of write once plus run anywhere.',
      },
    ],
    keyTakeaways: [
      'Java is a platform of language plus library plus runtime, and bytecode is the portable interchange format.',
      'javac produces class files while java launches a JVM that verifies and then interprets plus just-in-time compiles them.',
      'Integer ranges and library abstractions are fixed by specification so moved programs keep their meaning.',
      'The same class file runs on any conforming runtime, with hot paths translated to native code at execution time.',
    ],
    quiz: [
      {
        q: 'What does javac produce when it compiles Welcome.java successfully?',
        options: [
          'Native machine code tied to the local CPU and operating system',
          'An architecture-neutral class file of JVM bytecode named Welcome.class',
          'A JAR archive that can only be opened by an IDE',
          'An HTML page documenting the program for a browser plug-in',
        ],
        answer: 1,
        explanation: 'Step 1: The input is text source Welcome.java. Step 2: The tool `javac` translates source to the virtual instruction set. Step 3: Tracing the command `javac Welcome.java` shows a new file `Welcome.class` appears. Step 4: The file holds `bytecode` such as `getstatic` rather than native assembly, so only the second option matches.',
      },
      {
        q: 'Why can the same Welcome.class run on Linux plus macOS plus Windows?',
        options: [
          'Because javac embeds three separate native binaries in one file',
          'Because bytecode is JavaScript that every browser already understands',
          'Because each machine has a JVM that loads plus verifies plus executes the same bytecode',
          'Because the source is recompiled by the operating system at boot time',
        ],
        answer: 2,
        explanation: 'Step 1: Recall `Welcome.class` holds abstract `bytecode`. Step 2: Each platform ships a native `JVM` implementation. Step 3: Tracing execution, `java Welcome` on any OS loads the same bytes then verifies them. Step 4: Local just-in-time compilation adapts hot code to the CPU, so portability comes from the runtime, not from triple binaries.',
      },
      // Placement-pattern: bytecode versus native plus JIT reasoning
      {
        q: 'A team claims interpreted bytecode must always be too slow for production. Which Horstmann reply is accurate?',
        options: [
          'Early slowness claims faded once just-in-time compilers translated hot bytecode to machine code at runtime',
          'Bytecode is never executed and serves only as documentation',
          'Performance comes from shipping source and letting users hand-translate it',
          'The JVM disables verification to gain speed on servers',
        ],
        answer: 0,
        explanation: 'Step 1: The claim concerns `interpreter` speed. Step 2: Modern JVMs count executions of each `bytecode` method. Step 3: Tracing a hot loop shows the `JIT` compiler emitting native code for that exact CPU. Step 4: Measured loops then run at near-native speed, so the blanket slowness claim ignores adaptive compilation.',
      },
      {
        q: 'Which grouping correctly names the JDK execution tools?',
        options: [
          'jar to verify signatures only, with no compile or launch role',
          'javac to edit text, java to browse the web, jar to compress music',
          'jshell to compile natively, javac to run, java to format disks',
          'javac to compile, java to launch, jshell for experiments, jar to package',
        ],
        answer: 3,
        explanation: 'Step 1: List candidate tools `javac` and `java` and `jshell` and `jar`. Step 2: Recall `javac` compiles while `java` launches. Step 3: Tracing a session shows `jshell` evaluating snippets and `jar` bundling classes. Step 4: Only the first grouping assigns every tool its documented role.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch1-s2
  {
    sectionId: 'java-ch1-s2',
    readingTime: 8,
    intro: 'Every Java application starts from a class containing a main method with a precise signature that the launcher can find. The FirstSample program shows that ceremony plus console output plus a single statement block in miniature. JShell then removes the ceremony for experiments by evaluating declarations plus expressions immediately and printing each result.',
    objectives: [
      'Write plus compile plus run a class with main and explain each token of its signature',
      'Use JShell to evaluate expressions plus declare variables plus recall history without creating files',
      'Distinguish declarations that need no printing from expressions whose values JShell echoes',
    ],
    concepts: [
      {
        term: 'Class and main ceremony',
        kind: 'definition',
        statement: 'A runnable **class** declares `public static void main(String[] args)` so the launcher can load the named class and call one well-known entry point with command-line arguments.',
        detail: 'Public lets the runtime see the class, static needs no object, void returns nothing, and String[] args carries command-line words even when the program ignores them.',
      },
      {
        term: 'FirstSample anatomy',
        kind: 'notation',
        statement: 'The **program** body uses `System.out.println` to send a `String` to standard output, with braces marking the class block plus the method block plus the statement inside.',
        detail: 'Horstmann prints We will not use Hello World to stress that the message is arbitrary; the structure of class plus main plus println is the lesson, not the text.',
      },
      {
        term: 'JShell read-evaluate-print loop',
        kind: 'method',
        statement: 'The **JShell** tool reads `3 + 4` then evaluates it then prints `7` and keeps declarations such as `int n = 10` alive for later snippets in the same session.',
        detail: 'Started with jshell on a terminal, it supports rapid exploration that the edit plus compile plus run cycle makes tedious, a gap Horstmann notes until Java 9.',
      },
      {
        term: 'Snippets versus full programs',
        kind: 'insight',
        statement: 'A **snippet** such as `String greeting = "Hello"` needs no `class` wrapper in JShell, while the same declaration in a file must sit inside a class plus method or as a field.',
        detail: 'JShell wraps input behind the scenes, so methods plus variables plus imports persist across prompts but do not teach the file layout that real programs still require.',
      },
      {
        term: 'Comments and readability',
        kind: 'definition',
        statement: 'Java supports **comments** with `//` for one line plus `/* */` for blocks, which the compiler ignores but readers rely on to explain intent near tricky code.',
        detail: 'Comments document why rather than restating what the code says, and javadoc comments with Grammar plus tags later feed the API documentation tool covered with packages.',
      },
    ],
    figures: [
      {
        caption: 'File program ceremony on the left and the JShell experiment loop on the right.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Java main anatomy and JShell loop" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Ceremony versus experiment</text><rect x="36" y="64" width="310" height="220" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="94" font-family="sans-serif" font-size="14" fill="currentColor">FirstSample.java file</text><text x="52" y="120" font-family="sans-serif" font-size="12" fill="currentColor">public class FirstSample</text><text x="52" y="142" font-family="sans-serif" font-size="12" fill="currentColor">public static void main(...)</text><text x="52" y="164" font-family="sans-serif" font-size="12" fill="currentColor">System.out.println(...);</text><text x="52" y="190" font-family="sans-serif" font-size="12" fill="currentColor">javac then java</text><text x="52" y="216" font-family="sans-serif" font-size="12" fill="currentColor">prints once and exits</text><rect x="374" y="64" width="310" height="220" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="390" y="94" font-family="sans-serif" font-size="14" fill="currentColor">jshell session</text><text x="390" y="120" font-family="sans-serif" font-size="12" fill="currentColor">type 3 + 4, see 7</text><text x="390" y="142" font-family="sans-serif" font-size="12" fill="currentColor">declare int n = 10</text><text x="390" y="164" font-family="sans-serif" font-size="12" fill="currentColor">reuse n in next line</text><text x="390" y="190" font-family="sans-serif" font-size="12" fill="currentColor">history plus tab help</text><text x="390" y="216" font-family="sans-serif" font-size="12" fill="currentColor">stays alive until exit</text><text x="36" y="312" font-family="sans-serif" font-size="13" fill="currentColor">Files teach structure, JShell teaches behavior by instant feedback.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Write plus compile plus run FirstSample',
        problem: 'Produce the Horstmann FirstSample program that prints a message, then compile and run it exactly as Chapter 3 presents it.',
        steps: [
          { label: 'Step 1: Create the file', text: 'Save this exact structure with matching file and class names:\n```java\npublic class FirstSample {\n    public static void main(String[] args) {\n        System.out.println("We will not use Hello, World!");\n    }\n}\n```\nEvery brace pair and the semicolon after println are required.' },
          { label: 'Step 2: Compile the source', text: 'Translate the file to bytecode:\n```bash\njavac FirstSample.java\n```\nSuccess produces FirstSample.class with no console output, since silence means no errors.' },
          { label: 'Step 3: Run the class', text: 'Launch with the class name only:\n```bash\njava FirstSample\n```\nThe runtime finds main with the exact signature and prints the message line.' },
        ],
        result: 'The terminal shows We will not use Hello, World!, confirming the class plus main plus println anatomy.',
      },
      {
        title: 'Explore the same ideas in JShell',
        problem: 'Without creating a file, evaluate an arithmetic expression and a string declaration in JShell and reuse the declared variable.',
        steps: [
          { label: 'Step 1: Start JShell', text: 'Open the interactive tool:\n```bash\njshell\n```\nA welcome banner plus a jshell prompt appear and wait for input.' },
          { label: 'Step 2: Evaluate expressions', text: 'Type each snippet and observe the echoed type plus value:\n```java\n3 + 4\nString greeting = "Hello, JShell";\ngreeting.length()\n```\nJShell prints 7 plus the declared String plus the length without any main method.' },
          { label: 'Step 3: Reuse and exit', text: 'Reference greeting in a new line, use cursor history to recall it, then leave with inhibition of file creation:\n```java\n// greeting stays in scope for later snippets\n// type exit to leave: /exit\n```\nThe session proves declarations persist across prompts until the tool closes.' },
        ],
        result: 'JShell echoes values immediately, so behavior can be tested before committing structure to a file.',
      },
    ],
    keyTakeaways: [
      'Runnable classes need public static void main with String array args as the single entry point.',
      'FirstSample shows class block plus method block plus println as the minimal complete program.',
      'JShell evaluates snippets instantly and retains declarations for the session lifetime.',
      'Comments with double slash or block delimiters explain intent and never affect execution.',
    ],
    quiz: [
      {
        q: 'Which signature lets java FirstSample find the entry point?',
        options: [
          'public static void main(String[] args)',
          'public void main(String args)',
          'static int main()',
          'private String main(String[] args)',
        ],
        answer: 0,
        explanation: 'Step 1: The launcher looks for `main` with exact modifiers. Step 2: It requires `public` plus `static` plus `void`. Step 3: Tracing `java FirstSample` with a wrong signature reports no main method found. Step 4: Only the first option carries `String[] args` with all three modifiers.',
      },
      {
        q: 'What does JShell print after the input 3 + 4?',
        options: [
          'Nothing, because files are required for any output',
          'The bytecode listing of an anonymous class',
          'The value 7 together with its type information',
          'A JAR manifest for the snippet',
        ],
        answer: 2,
        explanation: 'Step 1: Input `3 + 4` is an expression snippet. Step 2: JShell evaluates it to `7`. Step 3: Tracing the session shows an echo line with type `int`. Step 4: No `class` file is created, so only the immediate value echo matches.',
      },
      // Placement-pattern: file versus snippet scope confusion
      {
        q: 'A beginner pastes String greeting equals Hello into a file outside any class and javac fails, yet JShell accepts it. Why?',
        options: [
          'The compiler rejects String but accepts all other types at top level',
          'JShell skips type checking while javac enforces it',
          'Files require JavaScript syntax while JShell uses Java syntax',
          'JShell wraps snippets automatically while files require declarations inside a class',
        ],
        answer: 3,
        explanation: 'Step 1: Compare contexts `file` versus `jshell`. Step 2: Files demand `class` plus member rules. Step 3: Tracing `javac` on a bare `String greeting` reports illegal start of type. Step 4: The same `String greeting` in JShell becomes a persistent snippet, so context explains the difference.',
      },
      {
        q: 'Which comment style is legal Java for a single-line note?',
        options: [
          'Hash to the end of the line',
          'Double slash to the end of the line',
          'Triple dashes around the note',
          'Angle brackets around the note',
        ],
        answer: 1,
        explanation: 'Step 1: Recall Java comment tokens `//` and block markers. Step 2: A line starting `// note` is ignored by `javac`. Step 3: Tracing `# note` fails compilation since hash starts no comment. Step 4: Only the double-slash option matches the language rule.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch1-s3
  {
    sectionId: 'java-ch1-s3',
    readingTime: 8,
    intro: 'Command-line tools remain the ground truth beneath every IDE button, so troubleshooting always returns to them. The compiler plus launcher plus archiver plus documentation tools operate on explicit paths and package layouts. This section practices compiling multiple files plus running with a classpath plus bundling a JAR with a manifest entry point.',
    objectives: [
      'Compile plus run multi-file programs from a terminal with explicit output directories',
      'Set and diagnose the classpath and package directory layout for class loading',
      'Create plus inspect plus run a JAR including an executable manifest main class',
    ],
    concepts: [
      {
        term: 'javac and java workflow',
        kind: 'method',
        statement: 'The **command line** pairs `javac -d out` to emit class files into a chosen tree with `java -cp out` to load them, making input plus output locations explicit and repeatable.',
        detail: 'IDE buttons invoke the same tools behind dialogs; when a launch fails, reproducing with javac plus java in a terminal isolates whether the fault is code or configuration.',
      },
      {
        term: 'Classpath and package directories',
        kind: 'definition',
        statement: 'The **classpath** lists `out` roots where the loader searches, and each `package com.example` class must live under a matching `com` plus `example` directory path.',
        detail: 'A missing directory level or a wrong separator produces NoClassDefFoundError even though compilation succeeded, which is the classic classpath symptom.',
      },
      {
        term: 'JAR archives',
        kind: 'definition',
        statement: 'A **JAR** is a zip of `class` files plus resources with an optional `MANIFEST.MF` entry naming the `Main-Class` so the archive can run as a program.',
        detail: 'Horstmann places full JAR treatment with packages but introduces jar creation early for documentation plus examples: jar xvf unpacks, jar cfe builds with an entry point.',
      },
      {
        term: 'Source plus documentation bundles',
        kind: 'notation',
        statement: 'The **JDK** ships `src.zip` with public library sources and a separate `docs` bundle that can be opened at `index.html` for offline API reading.',
        detail: 'Installing sources lets an IDE jump into library code, while bookmarks to the local docs avoid network dependence when reading method contracts.',
      },
      {
        term: 'JShell versus files decision',
        kind: 'insight',
        statement: 'Use **JShell** with `jshell` for API probes and one-line behavior checks, but move to `javac` files once imports plus methods plus packages must persist or be shared.',
        detail: 'Snippets are throwaway by design; versioned source files plus build commands are the unit that teams review plus test plus ship.',
      },
    ],
    figures: [
      {
        caption: 'Terminal workflow from sources through output tree and classpath to JAR execution.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Command line compile run and jar flow" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">Build from the terminal</text><rect x="36" y="64" width="150" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="92" font-family="sans-serif" font-size="13" fill="currentColor">src tree</text><text x="52" y="112" font-family="sans-serif" font-size="12" fill="currentColor">Main.java</text><rect x="220" y="64" width="150" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="236" y="92" font-family="sans-serif" font-size="13" fill="currentColor">javac -d out</text><text x="236" y="112" font-family="sans-serif" font-size="12" fill="currentColor">compile</text><rect x="404" y="64" width="150" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="420" y="92" font-family="sans-serif" font-size="13" fill="currentColor">out tree</text><text x="420" y="112" font-family="sans-serif" font-size="12" fill="currentColor">class files</text><line x1="186" y1="99" x2="220" y2="99" stroke="currentColor" stroke-width="2"/><line x1="370" y1="99" x2="404" y2="99" stroke="currentColor" stroke-width="2"/><rect x="36" y="170" width="200" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="52" y="198" font-family="sans-serif" font-size="13" fill="currentColor">java -cp out Main</text><text x="52" y="218" font-family="sans-serif" font-size="12" fill="currentColor">load plus run</text><rect x="270" y="170" width="200" height="70" fill="none" stroke="currentColor" stroke-width="2" rx="8"/><text x="286" y="198" font-family="sans-serif" font-size="13" fill="currentColor">jar cfe app.jar</text><text x="286" y="218" font-family="sans-serif" font-size="12" fill="currentColor">bundle plus manifest</text><line x1="236" y1="134" x2="136" y2="170" stroke="currentColor" stroke-width="2"/><line x1="404" y1="134" x2="370" y2="170" stroke="currentColor" stroke-width="2"/><text x="36" y="280" font-family="sans-serif" font-size="13" fill="currentColor">Explicit output plus classpath beats hidden IDE state.</text><text x="36" y="302" font-family="sans-serif" font-size="13" fill="currentColor">A manifest Main-Class makes the JAR executable.</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Build a two-file program with an output tree',
        problem: 'Compile a Main class that uses a Greeter helper into a separate out directory and run it with an explicit classpath.',
        steps: [
          { label: 'Step 1: Write both sources', text: 'Place two files in the working directory:\n```java\npublic class Greeter {\n    public static String greet(String name) {\n        return "Hello, " + name;\n    }\n}\n```\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(Greeter.greet("Asha"));\n    }\n}\n```\nBoth are in the unnamed package so no directory nesting is needed yet.' },
          { label: 'Step 2: Compile into out', text: 'Emit class files away from sources:\n```bash\njavac -d out Main.java Greeter.java\nls out\n```\nThe out directory now holds Main.class plus Greeter.class.' },
          { label: 'Step 3: Run with classpath', text: 'Load from the output root:\n```bash\njava -cp out Main\n```\nThe loader finds both classes under out and prints Hello plus the name.' },
        ],
        result: 'The program prints Hello, Asha, proving the source plus output plus classpath separation works.',
      },
      {
        title: 'Bundle and run an executable JAR',
        problem: 'Package the compiled classes into a single archive that runs with one java command and can be inspected like a zip file.',
        steps: [
          { label: 'Step 1: Create the archive', text: 'Build app.jar with Main as the entry point:\n```bash\njar cfe app.jar Main -C out .\njar tf app.jar\n```\nThe listing shows Main.class plus Greeter.class plus manifest metadata.' },
          { label: 'Step 2: Run the JAR', text: 'Execute through the manifest entry:\n```bash\njava -jar app.jar\n```\nNo classpath flag is needed because the archive is now the class path root.' },
          { label: 'Step 3: Unpack to prove zip nature', text: 'Confirm a JAR is a zip with classes:\n```bash\njar xf app.jar\nls\n```\nExtracted class files plus META-INF plus MANIFEST dot MF appear, with Main-Class recorded.' },
        ],
        result: 'The command java minus jar runs the bundled program and prints the same greeting from one file.',
      },
    ],
    keyTakeaways: [
      'javac with minus d plus java with minus cp make build inputs and runtime search roots explicit.',
      'Package names must match directory nesting or class loading fails after successful compilation.',
      'JAR files bundle classes plus manifest entry points into one shippable archive.',
      'JShell suits probes while versioned files plus terminal builds suit shared programs.',
    ],
    quiz: [
      {
        q: 'What does javac minus d out Main.java do?',
        options: [
          'Runs Main immediately without producing files',
          'Deletes the out tree and all backups',
          'Compiles sources and writes class files under the out tree',
          'Opens the API docs for Main in a browser',
        ],
        answer: 2,
        explanation: 'Step 1: Parse `javac -d out Main.java`. Step 2: Flag `-d` names the output root `out`. Step 3: Tracing `ls out` shows `Main.class` created there. Step 4: No execution occurs, so only the compile-to-tree option fits.',
      },
      {
        q: 'Running java minus cp out Main fails with NoClassDefFoundError although javac succeeded. What is the most likely cause?',
        options: [
          'The classpath root or package directory layout does not match the class location',
          'The console font is too small to show output',
          'JShell is not installed on the machine',
          'The program contains no comments',
        ],
        answer: 0,
        explanation: 'Step 1: Note `javac` success means syntax is fine. Step 2: Runtime uses `-cp out` plus `package` paths in `class` loading. Step 3: Tracing shows `java` searching `out` for the exact directory nesting. Step 4: A wrong root or missing `com` folder yields exactly `NoClassDefFoundError`.',
      },
      // Placement-pattern: executable JAR manifest reasoning
      {
        q: 'What makes java minus jar app.jar launch Main without a class name on the command?',
        options: [
          'The file name app always implies class Main by convention',
          'The manifest records Main-Class so the launcher knows the entry point',
          'JAR files contain native binaries that boot themselves',
          'The operating system guesses the main class from file size',
        ],
        answer: 1,
        explanation: 'Step 1: Inspect `jar tf app.jar` plus `MANIFEST.MF`. Step 2: Entry `Main-Class` holds value `Main`. Step 3: Tracing `java -jar app.jar` shows the launcher reading that `manifest` line. Step 4: No guessing occurs, so only the manifest entry explains the behavior.',
      },
      {
        q: 'When should a probe move from JShell to versioned files?',
        options: [
          'Never, because files cannot hold Java code',
          'When the probe already works and no record is ever needed',
          'Only after buying a commercial IDE license',
          'When imports plus methods plus packages must persist plus be reviewed and shared',
        ],
        answer: 3,
        explanation: 'Step 1: Contrast `jshell` snippets with `javac` files. Step 2: Snippets vanish with the session while files persist. Step 3: Tracing teamwork shows review plus tests need `Main.java` on disk. Step 4: Persistence plus sharing is the trigger to graduate to files.',
      },
    ],
  },
  // ---------------------------------------------------------------- java-ch1-s4
  {
    sectionId: 'java-ch1-s4',
    readingTime: 7,
    intro: 'Modern Java work usually happens inside an IDE, but the history plus design goals explain why the tools look the way they do. Eleven white-paper buzzwords from simple through dynamic still describe the language contract. Applets plus browser plug-ins are gone while retired misconceptions about JavaScript plus HTML extensions plus interpretation still waste debugging time.',
    objectives: [
      'Operate an IDE workflow of project plus run configuration plus lightbulb fixes plus debugger',
      'Summarize Java history from Oak through Sun to Oracle and the applet rise and fall',
      'Refute common misconceptions about JavaScript identity plus HTML extension plus slowness',
    ],
    concepts: [
      {
        term: 'IDE workflow essentials',
        kind: 'method',
        statement: 'An **IDE** manages `project` sources plus `run configuration` launch settings and offers lightbulb fixes plus incremental compile plus an integrated debugger in one window.',
        detail: 'Eclipse plus IntelliJ plus VS Code all invoke javac plus java behind menus; learning the terminal first makes IDE failures diagnosable instead of mysterious.',
      },
      {
        term: 'White-paper buzzwords',
        kind: 'definition',
        statement: 'The **buzzwords** list `simple` plus object-oriented plus robust plus secure plus portable, where simple means a small consistent grammar without header files or pointer arithmetic.',
        detail: 'Distributed plus multithreaded plus dynamic complete the eleven: networking plus threads plus runtime loading were first-class from the start rather than later add-ons.',
      },
      {
        term: 'History from Oak to platform',
        kind: 'definition',
        statement: 'Java began as **Oak** for embedded devices, launched as `Java` in 1996 with web excitement, then grew through Sun plus Oracle stewardship into long-term-support releases on a six-month cadence.',
        detail: 'Applets first showcased browser execution but collapsed under security plus browser politics, while server plus desktop plus Android plus big-data uses carried the platform forward.',
      },
      {
        term: 'Applets and security lesson',
        kind: 'insight',
        statement: 'The **sandbox** promised `untrusted` code could never escape, yet Princeton researchers plus later attackers found holes that forced signed code plus finally retirement of browser delivery.',
        detail: 'The lesson is architectural: signatures identify origin but do not prove safety, so modern runtimes isolate by modules plus permissions rather than by browser plug-ins.',
      },
      {
        term: 'Retired misconceptions',
        kind: 'theorem',
        statement: 'Java is **not** `JavaScript` plus not an HTML extension plus not interpreted-only, since the name similarity is marketing and performance now relies on just-in-time native code.',
        detail: 'Horstmann lists these myths explicitly so newcomers stop expecting web-script behavior or treating bytecode execution as permanent interpretation.',
      },
    ],
    figures: [
      {
        caption: 'Java timeline from Oak through applets to modern long-term-support platform releases.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Java history timeline" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" fill="none" stroke="currentColor" stroke-width="2" rx="12"/><text x="36" y="44" font-family="sans-serif" font-size="18" fill="currentColor">From Oak to platform</text><line x1="36" y1="140" x2="684" y2="140" stroke="currentColor" stroke-width="2"/><circle cx="90" cy="140" r="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="60" y="170" font-family="sans-serif" font-size="12" fill="currentColor">Oak device</text><circle cx="240" cy="140" r="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="170" font-family="sans-serif" font-size="12" fill="currentColor">1996 launch</text><circle cx="390" cy="140" r="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="170" font-family="sans-serif" font-size="12" fill="currentColor">Applet era</text><circle cx="540" cy="140" r="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="500" y="170" font-family="sans-serif" font-size="12" fill="currentColor">Server plus tools</text><circle cx="660" cy="140" r="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="620" y="170" font-family="sans-serif" font-size="12" fill="currentColor">LTS today</text><text x="36" y="220" font-family="sans-serif" font-size="13" fill="currentColor">Buzzwords persist: simple plus robust plus portable plus dynamic.</text><text x="36" y="244" font-family="sans-serif" font-size="13" fill="currentColor">Myths retired: not JavaScript, not HTML, not slow.</text><text x="36" y="280" font-family="sans-serif" font-size="13" fill="currentColor">IDE adds project plus debugger atop javac plus java.</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Run and fix FirstSample inside an IDE',
        problem: 'Import the terminal-proven FirstSample into an IDE, configure a run target, and apply a lightbulb fix for a misspelled println.',
        steps: [
          { label: 'Step 1: Create project and run config', text: 'Make a Java project, add FirstSample.java, then create a run configuration:\n```java\npublic class FirstSample {\n    public static void main(String[] args) {\n        System.out.println("IDE run works");\n    }\n}\n```\nSet the main class to FirstSample so the IDE knows what java would launch.' },
          { label: 'Step 2: Use the lightbulb fix', text: 'Introduce System.out.printn then click the bulb:\n```bash\njavac FirstSample.java\n```\nThe IDE suggests println plus import fixes, mirroring the compiler error without leaving the editor.' },
          { label: 'Step 3: Debug once', text: 'Set a breakpoint on println, run in debug mode, inspect args, then resume to see output in the IDE console view.' },
        ],
        result: 'The IDE console prints the message, and the breakpoint proves the debugger is attached to the same JVM the terminal uses.',
      },
      {
        title: 'Classify three historical claims correctly',
        problem: 'Decide whether each statement about Java history and identity is accurate using buzzwords plus timeline plus misconception rules.',
        steps: [
          { label: 'Step 1: Date the technology', text: 'Applets belong to the late nineties browser push:\n```java\n// 1996 launch, applet sandbox, later retirement\n// modern delivery uses jars plus modules plus containers\n```\nExpecting browser plug-in delivery today misplaces the era.' },
          { label: 'Step 2: Test the name claim', text: 'JavaScript shares only a marketing-era name with Java; syntax plus runtime plus types differ completely, so web-script intuition does not transfer.' },
          { label: 'Step 3: Test the speed claim', text: 'Interpreted-only describes the earliest execution story, while current virtual machines verify once then just-in-time compile hot methods to native instructions.' },
        ],
        result: 'Only the platform plus buzzword reading survives: portable plus robust plus secure-as-architecture, not as browser magic or sibling scripting.',
      },
    ],
    keyTakeaways: [
      'IDEs wrap javac plus java with projects plus run configs plus lightbulb fixes plus debuggers.',
      'Eleven buzzwords from simple to dynamic define the original design contract.',
      'Oak to 1996 to applet fall to long-term-support explains current server plus tool dominance.',
      'Java is neither JavaScript nor HTML nor interpreted-only in modern runtimes.',
    ],
    quiz: [
      {
        q: 'What does the IDE lightbulb typically offer after a typo in println?',
        options: [
          'Deletion of the whole project to avoid further errors',
          'Automatic publication of the program to a browser store',
          'A rewrite of the program in a different language',
          'A list of compiler-guided fixes such as correcting the method name',
        ],
        answer: 3,
        explanation: 'Step 1: The error is `printn` versus `println`. Step 2: The IDE runs the same analysis as `javac`. Step 3: Tracing the bulb shows a `println` correction proposal. Step 4: No publishing or deletion occurs, so only the fix list matches.',
      },
      {
        q: 'Which origin story is correct for Java?',
        options: [
          'It began as a browser scripting dialect that later added classes',
          'It began as Oak for devices, launched in 1996, and outgrew applets into a general platform',
          'It was designed as an HTML extension for page layout',
          'It was released only as an IDE with no command-line tools',
        ],
        answer: 1,
        explanation: 'Step 1: Recall name `Oak` for embedded work. Step 2: Public launch date is `1996` with web excitement. Step 3: Tracing later use shows `applet` decline and server growth. Step 4: Only the Oak-to-platform option orders all three facts correctly.',
      },
      // Placement-pattern: buzzword plus myth discrimination
      {
        q: 'A posting asks for Java extension of HTML plus JavaScript expertise interchangeably. What is wrong?',
        options: [
          'Java is neither an HTML extension nor JavaScript, so the requirement conflates distinct systems',
          'Nothing, the three technologies are identical and interchangeable',
          'HTML is compiled by javac while Java runs in style sheets',
          'JavaScript is the formal specification name for Java 17',
        ],
        answer: 0,
        explanation: 'Step 1: Define `Java` as platform versus `JavaScript` as web script. Step 2: Recall `HTML` is markup, not a programming language parent. Step 3: Tracing Horstmann myths shows both confusions listed as retired. Step 4: Only the conflation diagnosis respects the distinct runtimes.',
      },
      {
        q: 'Why did browser applet delivery end despite early excitement?',
        options: [
          'The Java language lacked classes needed for buttons',
          'Applets were too fast for browsers to schedule fairly',
          'Sandbox escapes plus signing friction plus vendor removal made it unsustainable',
          'No developer ever wrote an applet, so none existed to retire',
        ],
        answer: 2,
        explanation: 'Step 1: Start from `sandbox` promise for `untrusted` code. Step 2: Attacks showed `security` holes needing patches. Step 3: Tracing deployment shows signed-code friction then browser removal. Step 4: Only the security-plus-friction option explains retirement rather than speed myths.',
      },
    ],
  },
]

export const javaCh1Content = javaCh01Content

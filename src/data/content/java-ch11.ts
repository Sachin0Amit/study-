import type { SectionContent } from '../library'

/* ============================================================================
   Core Java Twelfth Edition master study content — Input Output and Networking
   Chapter 11: sections 11.1 to 11.4. Based on Horstmann Core Java Volume Two,
   Chapters 2 and 4: streams, NIO files, sockets, and the HTTP client.
   ============================================================================ */

export const javaCh11Content: SectionContent[] = [
  /* ---------------- 11.1 ---------------- */
  {
    sectionId: 'java-ch11-s1',
    readingTime: 8,
    intro: 'Java separates byte traffic from character text, layering filters over raw sources exactly as Horstmann catalogs the stream zoo. This section reads and writes bytes, stacks buffering with data filters, and converts to readers plus writers with explicit charsets. It ends with Scanner parsing and PrintWriter formatting for everyday text.',
    objectives: [
      'Read and write bytes through the InputStream OutputStream hierarchy',
      'Layer buffering, data, and text filters over raw file streams',
      'Process text with explicit charsets, Scanner, and PrintWriter',
    ],
    concepts: [
      {
        term: 'Byte stream hierarchy',
        kind: 'definition',
        statement: 'A **byte stream** such as `FileInputStream` moves raw `byte` values with `read()` and `write(int)`, returning minus one at end of stream for binary formats.',
        detail: 'InputStream and OutputStream anchor the binary side. DataInput and DataOutput add typed numbers, while Object streams add whole graphs.',
      },
      {
        term: 'Layered filter streams',
        kind: 'method',
        statement: '**Layering** wraps a raw file stream in `BufferedInputStream` for chunking and `DataInputStream` for typed reads, each filter adding exactly one capability.',
        detail: 'Order matters with buffering outermost for speed. Pushback and checked variants add lookahead or integrity without changing the pattern.',
      },
      {
        term: 'Readers writers and charsets',
        kind: 'notation',
        statement: '**Readers** and **writers** such as `InputStreamReader` bridge bytes to `char` text through a `Charset`, with `StandardCharsets.UTF_8` as the portable default.',
        detail: 'Default charset decoding varies by platform and corrupts silently. Always name the charset on both writing and reading ends.',
      },
      {
        term: 'Scanner token parsing',
        kind: 'insight',
        statement: 'A **Scanner** splits character input into typed tokens with `nextInt()` and `nextLine()`, using delimiters and locale rules suited to interactive and file parsing.',
        detail: 'Mixing nextInt with nextLine needs a newline consuming call between them. HasNext guards keep interactive loops from blocking forever.',
      },
      {
        term: 'PrintWriter text formatting',
        kind: 'theorem',
        statement: '**PrintWriter** with `print`, `println`, and `printf` formats text output, auto flushing on newline when constructed with the auto flush flag for logs and reports.',
        detail: 'PrintWriter swallows IOExceptions by design, so checkError detects failures explicitly. Formatter style verbs keep numeric columns aligned.',
      },
    ],
    figures: [
      {
        caption: 'Filter layers stack buffering and typed reads over a raw file byte stream.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Layered filter stream stack"><rect x="60" y="60" width="600" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="84" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">DataInputStream</text><text x="360" y="104" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">readInt readDouble readUTF</text><rect x="60" y="130" width="600" height="56" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="360" y="154" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">BufferedInputStream</text><text x="360" y="174" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">chunked reads, fewer system calls</text><rect x="60" y="200" width="600" height="56" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="360" y="224" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">FileInputStream</text><text x="360" y="244" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">raw bytes from disk</text><line x1="360" y1="116" x2="360" y2="128" stroke="currentColor" stroke-width="1.6"/><polygon points="360,128 354,118 366,118" fill="currentColor"/><line x1="360" y1="186" x2="360" y2="198" stroke="currentColor" stroke-width="1.6"/><polygon points="360,198 354,188 366,188" fill="currentColor"/><text x="360" y="300" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Calls flow down through filters, bytes flow up through them.</text><text x="360" y="322" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Each wrapper adds one job: buffering, typing, or text</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Typed binary output and input',
        problem: 'Write one integer plus one double to a binary file, then read them back with exact types.',
        steps: [
          { label: 'Step 1: Stack the filters', text: 'Wrap the file stream in buffering plus data handling:\n```java\ntry (var out = new FileOutputStream("num.bin");\n     var buf = new BufferedOutputStream(out);\n     var data = new DataOutputStream(buf)) {\n    data.writeInt(42);\n    data.writeDouble(2.5);\n} catch (IOException e) {\n    System.err.println("write failed: " + e.getMessage());\n}\n```\nClosing flushes the buffer through to disk.' },
          { label: 'Step 2: Read back in order', text: 'Mirror the write sequence with matching typed reads:\n```java\n// layered-filter-pattern: each wrapper adds one capability\ntry (var in = new FileInputStream("num.bin");\n     var buf = new BufferedInputStream(in);\n     var data = new DataInputStream(buf)) {\n    int magic = data.readInt();\n    double version = data.readDouble();\n    System.out.println(magic + " and " + version);\n} catch (IOException e) {\n    System.err.println("read failed: " + e.getMessage());\n}\n```\nIt prints forty two and two point five.' },
          { label: 'Step 3: Respect the sequence', text: 'Remember order and types must mirror exactly:\n```java\nSystem.out.println("binary formats have no separators");\n```\nReading a double where an int was written silently misaligns everything after.' },
        ],
        result: 'Binary round trip restores forty two and two point five exactly.',
      },
      {
        title: 'Portable text writing and reading',
        problem: 'Write one greeting line as UTF eight text, then read the whole file back line by line.',
        steps: [
          { label: 'Step 1: Write with named charset', text: 'Construct the PrintWriter over an explicit UTF eight bridge:\n```java\ntry (var out = new PrintWriter("out.txt", StandardCharsets.UTF_8)) {\n    out.println("Ada age " + 36);\n} catch (IOException e) {\n    System.err.println("text write failed");\n}\n```\nBytes on disk follow UTF eight regardless of platform default.' },
          { label: 'Step 2: Read all lines', text: 'Pull the file back with the matching charset:\n```java\n// explicit-charset-pattern: name UTF eight on both ends\ntry {\n    List<String> lines = Files.readAllLines(Path.of("out.txt"), StandardCharsets.UTF_8);\n    System.out.println(lines);\n} catch (IOException e) {\n    System.err.println("text read failed");\n}\n```\nIt prints the single greeting line inside a list.' },
          { label: 'Step 3: Parse tokens when needed', text: 'Split structured lines with a Scanner over the same charset:\n```java\ntry (var in = new Scanner(Path.of("out.txt"), StandardCharsets.UTF_8)) {\n    System.out.println(in.nextLine());\n} catch (IOException e) {\n    System.err.println("scan failed");\n}\n```\nThe greeting line prints again through token parsing.' },
        ],
        result: 'UTF eight text survives the round trip identically on every platform.',
      },
    ],
    keyTakeaways: [
      'Byte streams move raw data while filters add buffering and typing.',
      'Readers and writers bridge bytes to text through explicit charsets.',
      'Scanner tokenizes input while PrintWriter formats text output.',
      'Layer order matters, with buffering outermost and sources innermost.',
    ],
    quiz: [
      {
        q: 'Why wrap FileInputStream in BufferedInputStream?',
        options: [
          'To encrypt bytes transparently during reads',
          'To cut system calls by serving from a memory chunk',
          'To convert bytes to characters automatically',
          'To compress the file while reading it',
        ],
        answer: 1,
        explanation: 'Step 1: Raw reads trap into the OS per call. Step 2: The buffer fills once with a large chunk. Step 3: Later reads serve from memory. Step 4: System call count therefore collapses.',
      },
      {
        q: 'What breaks when write and read orders differ?',
        options: [
          'The stream throws at construction time immediately',
          'Typed reads misinterpret bytes and misalign the rest',
          'The file is truncated to zero length on close',
          'Buffering silently reorders values to match',
        ],
        answer: 1,
        explanation: 'Step 1: Binary formats store no type tags. Step 2: Each read consumes fixed byte widths. Step 3: A mismatched read shifts every later boundary. Step 4: All following values decode as garbage.',
      },
      {
        q: 'Why name the charset explicitly on text IO?',
        options: [
          'To enable parallel reads of the same file',
          'Because platform defaults differ and corrupt silently',
          'To skip buffering for small text files',
          'Because UTF eight forbids ASCII content otherwise',
        ],
        answer: 1,
        explanation: 'Step 1: Default charsets vary across systems. Step 2: Mismatched decoding maps bytes wrongly. Step 3: No exception marks the corruption. Step 4: Explicit UTF eight keeps both ends aligned.',
      },
      {
        q: 'How does PrintWriter report failures?',
        options: [
          'It throws IOException from every print method',
          'It records trouble for checkError instead of throwing',
          'It closes the stream on the first error',
          'It retries each failed write exactly once',
        ],
        answer: 0,
        explanation: 'Step 1: Print methods declare no checked exceptions. Step 2: Failures set an internal trouble flag. Step 3: Execution continues past the failure. Step 4: Callers must probe checkError explicitly.',
      },
    ],
  },
  /* ---------------- 11.2 ---------------- */
  {
    sectionId: 'java-ch11-s2',
    readingTime: 10,
    intro: 'The NIO file API treats paths as first class values with bulk operations Horstmann favors over stream loops. This section creates, copies, and walks directory trees with the Files utility. It continues with memory mapped buffers plus channels, and ends with file locks plus ZIP file systems.',
    objectives: [
      'Manipulate paths and files with the Files utility class',
      'Walk directory trees with streams and handle entries safely',
      'Map files into memory and coordinate with locks and ZIP systems',
    ],
    concepts: [
      {
        term: 'Path and Files utilities',
        kind: 'definition',
        statement: 'A **Path** such as `Path.of("notes", "a.txt")` names a location while `Files` supplies bulk operations like `createDirectories`, `copy`, `move`, and `writeString`.',
        detail: 'Paths compose with resolve and relativize without touching disk. Files methods take copy options for replace and atomic moves.',
      },
      {
        term: 'Directory walking streams',
        kind: 'method',
        statement: '**Walking** with `Files.walk(dir)` or `Files.list(dir)` streams entries lazily inside try with resources, filtered by predicates like `Files::isRegularFile`.',
        detail: 'Depth limits cap recursion on deep trees. Find combines walk with a matcher and attribute reader for selective sweeps.',
      },
      {
        term: 'Channels and mapped buffers',
        kind: 'notation',
        statement: 'A **MappedByteBuffer** from `channel.map(mode, 0, size)` exposes file bytes as memory with `putInt` and `force`, letting the OS page data in and out.',
        detail: 'Mapping suits large random access workloads that thrash stream IO. Buffers track position, limit, and capacity through flip and compact cycles.',
      },
      {
        term: 'Buffer position limit capacity',
        kind: 'theorem',
        statement: 'A **Buffer** fills up to `limit`, then `flip()` rewinds to draining, and `compact()` preserves unread bytes, cycling cleanly between producer and consumer phases.',
        detail: 'Clear resets for a full rewrite while rewind replays. Mark and reset bookmark one position for rereading a header.',
      },
      {
        term: 'Locks and ZIP file systems',
        kind: 'insight',
        statement: '**File locks** via `channel.lock()` coordinate processes, while the **ZIP file system** mounts archives as paths so entries copy with ordinary `Files` calls.',
        detail: 'Locks are advisory and process scoped, not thread locks. ZIP paths need the jar URI scheme plus a provider installed filesystem.',
      },
    ],
    figures: [
      {
        caption: 'Buffer cycle: fill to limit, flip to drain, compact to preserve leftovers.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Buffer fill flip compact cycle"><rect x="60" y="70" width="180" height="70" fill="none" stroke="currentColor" stroke-width="2"/><text x="150" y="96" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Fill</text><text x="150" y="118" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">position to limit</text><rect x="270" y="70" width="180" height="70" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="96" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Flip</text><text x="360" y="118" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">limit to position</text><rect x="480" y="70" width="180" height="70" fill="none" stroke="currentColor" stroke-width="2"/><text x="570" y="96" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Drain</text><text x="570" y="118" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">read to limit</text><line x1="240" y1="105" x2="266" y2="105" stroke="currentColor" stroke-width="1.8"/><polygon points="266,105 256,99 256,111" fill="currentColor"/><line x1="450" y1="105" x2="476" y2="105" stroke="currentColor" stroke-width="1.8"/><polygon points="476,105 466,99 466,111" fill="currentColor"/><rect x="150" y="190" width="420" height="80" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="360" y="218" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Compact leftovers</text><text x="360" y="240" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">unread bytes slide to front, cycle repeats</text><line x1="570" y1="140" x2="570" y2="186" stroke="currentColor" stroke-width="1.4"/><line x1="570" y1="186" x2="470" y2="186" stroke="currentColor" stroke-width="1.4"/><polygon points="470,186 480,180 480,192" fill="currentColor"/><text x="360" y="310" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">One buffer serves both directions by cycling its markers</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Measuring a notes directory',
        problem: 'Create a notes directory with one file, then total the bytes of every regular file inside it.',
        steps: [
          { label: 'Step 1: Prepare the tree', text: 'Create directories and seed one text file:\n```java\nPath dir = Path.of("notes");\ntry {\n    Files.createDirectories(dir);\n    Files.writeString(dir.resolve("a.txt"), "hello", StandardCharsets.UTF_8);\n} catch (IOException e) {\n    System.err.println("setup failed: " + e.getMessage());\n}\n```\ncreateDirectories succeeds even when notes already exists.' },
          { label: 'Step 2: Walk and total', text: 'Stream entries with automatic closing and sum regular file sizes:\n```java\nlong total = 0;\ntry (var entries = Files.walk(Path.of("notes"))) {\n    // walk-and-measure-pattern: stream directory entries, then aggregate\n    total = entries.filter(Files::isRegularFile)\n        .mapToLong(p -> p.toFile().length())\n        .sum();\n} catch (IOException e) {\n    System.err.println("walk failed: " + e.getMessage());\n}\nSystem.out.println(total);\n```\nFive bytes of hello total to five.' },
          { label: 'Step 3: Copy safely', text: 'Duplicate the file with an explicit replace policy:\n```java\ntry {\n    Files.copy(dir.resolve("a.txt"), dir.resolve("b.txt"), StandardCopyOption.REPLACE_EXISTING);\n} catch (IOException e) {\n    System.err.println("copy failed: " + e.getMessage());\n}\n```\nThe option documents that overwriting is intended.' },
        ],
        result: 'The walk totals five bytes and the copy documents its overwrite.',
      },
      {
        title: 'Patching bytes through a memory map',
        problem: 'Write one integer at the start of a small binary file through a mapped buffer and force it to disk.',
        steps: [
          { label: 'Step 1: Open a channel', text: 'Open read write access with creation on demand:\n```java\ntry (var channel = FileChannel.open(Path.of("data.bin"),\n        StandardOpenOption.READ, StandardOpenOption.WRITE, StandardOpenOption.CREATE)) {\n    // mapped-patch-pattern: file bytes edited as memory, forced to disk\n    MappedByteBuffer map = channel.map(FileChannel.MapMode.READ_WRITE, 0, 16);\n    map.putInt(0, 42);\n    map.force();\n} catch (IOException e) {\n    System.err.println("map failed: " + e.getMessage());\n}\n```\nSixteen bytes map starting at offset zero.' },
          { label: 'Step 2: Verify the patch', text: 'Read the bytes back through an ordinary bulk read:\n```java\ntry {\n    byte[] four = Files.readAllBytes(Path.of("data.bin"));\n    System.out.println(four.length);\n} catch (IOException e) {\n    System.err.println("verify failed: " + e.getMessage());\n}\n```\nSixteen bytes confirm the mapped size.' },
          { label: 'Step 3: Remember the force', text: 'Treat force as the commit of mapped editing:\n```java\nSystem.out.println("mapped edits need force to reach disk");\n```\nWithout force the OS may delay visibility to other processes.' },
        ],
        result: 'Forty two lands at offset zero of a sixteen byte mapped file.',
      },
    ],
    keyTakeaways: [
      'Paths name locations while Files performs bulk creation and copying.',
      'Directory walks stream entries lazily and must close their streams.',
      'Mapped buffers edit large files as memory with OS paging.',
      'Buffer flip and compact cycle one buffer between filling and draining.',
    ],
    quiz: [
      {
        q: 'Why close the stream from Files dot walk?',
        options: [
          'To sort entries before the terminal runs',
          'To release the directory handle promptly',
          'To flush buffered file content to disk',
          'To convert paths to absolute form',
        ],
        answer: 2,
        explanation: 'Step 1: Walking opens a live directory handle. Step 2: Handles are finite OS resources. Step 3: Try with resources closes even on failure. Step 4: Leaked handles therefore starve later traversals.',
      },
      {
        q: 'When does memory mapping beat stream IO?',
        options: [
          'For tiny files read once sequentially',
          'For large random access workloads paged by the OS',
          'For text needing charset conversion per line',
          'For append only logs with strict ordering',
        ],
        answer: 1,
        explanation: 'Step 1: Mapping pays setup plus page table cost. Step 2: Random jumps then cost near memory speed. Step 3: Small sequential reads never amortize setup. Step 4: Large random workloads win clearly.',
      },
      {
        q: 'What does flip do to a filled buffer?',
        options: [
          'It discards all bytes and resets to empty',
          'It sets limit to position and position to zero for draining',
          'It doubles capacity by allocating a larger array',
          'It writes the content to the channel immediately',
        ],
        answer: 0,
        explanation: 'Step 1: Filling advances position to the byte count. Step 2: Draining must stop exactly there. Step 3: Flip copies position into limit first. Step 4: Rewinding position to zero then releases the bytes.',
      },
      {
        q: 'What is true of file locks from FileChannel?',
        options: [
          'They lock threads within one JVM against each other',
          'They coordinate processes and stay advisory per platform',
          'They encrypt locked regions until release',
          'They auto expand the file to the locked range',
        ],
        answer: 3,
        explanation: 'Step 1: Locks live at the OS file level. Step 2: Threads share them freely inside one process. Step 3: Platforms may ignore or narrow their scope. Step 4: They signal cooperating processes, not threads.',
      },
    ],
  },
  /* ---------------- 11.3 ---------------- */
  {
    sectionId: 'java-ch11-s3',
    readingTime: 9,
    intro: 'Sockets expose TCP as streams between programs, and Horstmann builds from a daytime client to threaded servers. This section connects with timeouts, resolves addresses, and serves many clients from a pool. It ends with half close discipline and interruptible channels for cancellable networking.',
    objectives: [
      'Connect TCP sockets with timeouts and read server data',
      'Serve concurrent clients with accept loops and thread pools',
      'Apply half close and interruptible channels for clean shutdown',
    ],
    concepts: [
      {
        term: 'TCP socket pair',
        kind: 'definition',
        statement: 'A **Socket** such as `new Socket(host, port)` opens a reliable bidirectional byte stream to a `ServerSocket` that `accept()` claims on the server side.',
        detail: 'Streams from getInputStream and getOutputStream carry the conversation. Closing the socket closes both directions and frees the port binding.',
      },
      {
        term: 'Timeouts and addresses',
        kind: 'method',
        statement: '**Timeouts** via `setSoTimeout(2000)` bound blocking reads, while `InetAddress` and `InetSocketAddress` resolve and pin the numeric endpoints before connecting.',
        detail: 'Connect with an explicit timeout avoids hanging on dead hosts. Timeouts convert stalls into catchable SocketTimeoutException events.',
      },
      {
        term: 'Thread pooled server loop',
        kind: 'notation',
        statement: 'A **pooled server** loops `accept()` and hands each `Socket` to `pool.submit(task)`, isolating slow clients so one stalled reader never blocks the next arrival.',
        detail: 'Bound the pool to cap memory under connection floods. Try with resources on the accepted socket guarantees per client cleanup.',
      },
      {
        term: 'Half close discipline',
        kind: 'theorem',
        statement: '**Half close** with `shutdownOutput()` signals end of request while keeping input open for the reply, suiting protocols that read until end of stream.',
        detail: 'Full close aborts both directions at once. Shutdown input discards pending arrivals when a client misbehaves.',
      },
      {
        term: 'Interruptible socket channels',
        kind: 'insight',
        statement: '**SocketChannel** opened from `SocketChannel.open()` supports nonblocking modes and `interrupt()` driven cancellation, unlike classic blocking sockets.',
        detail: 'Channels integrate with selectors for single threaded multiplexing. Interruptible IO lets shutdown unwind stuck transfers promptly.',
      },
    ],
    figures: [
      {
        caption: 'Pooled server: accept loop hands each client socket to a worker thread.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Server accept loop with worker pool"><rect x="40" y="140" width="150" height="80" fill="none" stroke="currentColor" stroke-width="2"/><text x="115" y="168" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Clients</text><text x="115" y="190" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">connect in turn</text><rect x="250" y="60" width="220" height="80" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="88" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">ServerSocket</text><text x="360" y="110" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">accept loop</text><rect x="250" y="200" width="220" height="80" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="228" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Thread pool</text><text x="360" y="250" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">one worker per client</text><rect x="530" y="140" width="150" height="80" fill="none" stroke="currentColor" stroke-width="2"/><text x="605" y="168" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Handlers</text><text x="605" y="190" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">reply then close</text><line x1="190" y1="170" x2="246" y2="120" stroke="currentColor" stroke-width="1.6"/><polygon points="246,120 236,122 239,131" fill="currentColor"/><line x1="360" y1="140" x2="360" y2="196" stroke="currentColor" stroke-width="1.8"/><polygon points="360,196 354,186 366,186" fill="currentColor"/><line x1="470" y1="230" x2="526" y2="190" stroke="currentColor" stroke-width="1.6"/><polygon points="526,190 516,192 519,201" fill="currentColor"/><text x="360" y="320" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Accept stays responsive because workers own the slow replies</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Daytime client with a timeout',
        problem: 'Connect to a daytime server on port thirteen, bound every blocking call, and print the first line.',
        steps: [
          { label: 'Step 1: Open with a bound', text: 'Connect and cap read blocking at two seconds:\n```java\ntry (var socket = new Socket("time.example.com", 13)) {\n    // socket-timeout-pattern: bound every blocking network call\n    socket.setSoTimeout(2000);\n    var in = new Scanner(socket.getInputStream(), StandardCharsets.UTF_8);\n    if (in.hasNextLine()) { System.out.println(in.nextLine()); }\n} catch (IOException e) {\n    System.err.println("daytime failed: " + e.getMessage());\n}\n```\nTry with resources closes the connection on every path.' },
          { label: 'Step 2: Resolve explicitly when needed', text: 'Pin the numeric address before connecting for diagnostics:\n```java\ntry {\n    InetAddress host = InetAddress.getByName("time.example.com");\n    System.out.println(host.getHostAddress());\n} catch (UnknownHostException e) {\n    System.err.println("dns failed: " + e.getMessage());\n}\n```\nThe printed address confirms DNS resolution succeeded.' },
          { label: 'Step 3: Handle the stall', text: 'Trust the timeout to convert hangs into exceptions:\n```java\nSystem.out.println("slow servers raise SocketTimeoutException");\n```\nCatch logic then retries or reports instead of freezing.' },
        ],
        result: 'The client prints the daytime line or reports a bounded failure.',
      },
      {
        title: 'Greeting server for concurrent clients',
        problem: 'Listen on port eight one eight nine and greet every arriving client from a bounded pool.',
        steps: [
          { label: 'Step 1: Bind and pool', text: 'Open the server socket beside a fixed worker pool:\n```java\ntry (var server = new ServerSocket(8189);\n     var pool = Executors.newFixedThreadPool(8)) {\n    // accept-and-hand-off-pattern: loop accepts, workers reply\n    while (!pool.isShutdown()) {\n        Socket client = server.accept();\n        pool.submit(() -> {\n            try (var s = client;\n                 var out = new PrintWriter(s.getOutputStream(), true, StandardCharsets.UTF_8)) {\n                out.println("hello");\n            } catch (IOException e) {\n                System.err.println("client failed");\n            }\n        });\n    }\n} catch (IOException e) {\n    System.err.println("server failed: " + e.getMessage());\n}\n```\nEach client owns its socket inside the worker.' },
          { label: 'Step 2: Isolate slow clients', text: 'Note why handoff matters for responsiveness:\n```java\nSystem.out.println("accept never waits for a full reply");\n```\nOne stalled reader cannot starve later arrivals.' },
          { label: 'Step 3: Close per client', text: 'Rely on the nested try to shut each connection:\n```java\nSystem.out.println("each handler closes its own socket");\n```\nFile descriptors return to the pool after every greeting.' },
        ],
        result: 'Concurrent clients each receive hello with isolated cleanup.',
      },
    ],
    keyTakeaways: [
      'Sockets pair a client stream with an accepted server stream over TCP.',
      'Timeouts convert network stalls into catchable exceptions.',
      'Accept loops stay responsive by handing clients to bounded pools.',
      'Half close and channels refine shutdown and cancellation behavior.',
    ],
    quiz: [
      {
        q: 'What does setSoTimeout govern?',
        options: [
          'The maximum lifetime of the whole socket connection',
          'The maximum block time of each read call',
          'The maximum backlog of pending accepts',
          'The maximum write buffer size per socket',
        ],
        answer: 1,
        explanation: 'Step 1: Reads block until data or close. Step 2: The timeout caps each individual block. Step 3: Expiry raises SocketTimeoutException. Step 4: The bound therefore applies per read, not per connection.',
      },
      {
        q: 'Why hand accepted sockets to a pool?',
        options: [
          'To encrypt each connection with its own key',
          'To keep slow clients from blocking later accepts',
          'To sort clients by arrival time automatically',
          'To share one stream across all clients safely',
        ],
        answer: 3,
        explanation: 'Step 1: Accept returns one socket per client. Step 2: Replies can stall on slow readers. Step 3: Inline handling would freeze the loop. Step 4: Workers isolate each conversation instead.',
      },
      {
        q: 'When is shutdownOutput the right call?',
        options: [
          'When the server must abort both directions instantly',
          'When the request is complete but the reply is still expected',
          'When the socket should linger after close for reuse',
          'When the client address needs re resolution',
        ],
        answer: 2,
        explanation: 'Step 1: Some protocols read until end of stream. Step 2: Full close would kill the reply path. Step 3: Half close ends output while input stays live. Step 4: Request then reply completes cleanly.',
      },
      {
        q: 'What advantage do SocketChannels add?',
        options: [
          'Automatic encryption of all transferred bytes',
          'Nonblocking modes with interrupt driven cancellation',
          'Built in HTTP request formatting helpers',
          'Transparent compression of large payloads',
        ],
        answer: 0,
        explanation: 'Step 1: Classic sockets block uninterruptibly. Step 2: Channels offer nonblocking configuration. Step 3: Interrupts can unwind stuck transfers. Step 4: Cancellation and multiplexing thus become possible.',
      },
    ],
  },
  /* ---------------- 11.4 ---------------- */
  {
    sectionId: 'java-ch11-s4',
    readingTime: 8,
    intro: 'The modern HttpClient replaces tedious URLConnection code with builders for requests, handlers for bodies, and futures for async calls. This section sends synchronous GET requests, posts JSON bodies, and chains asynchronous completions. It ends with form posting and the URI hygiene that keeps clients correct.',
    objectives: [
      'Build requests with URIs, headers, timeouts, and body publishers',
      'Send synchronous calls and interpret status plus body handlers',
      'Chain asynchronous sends with completion stages',
    ],
    concepts: [
      {
        term: 'HttpClient builder setup',
        kind: 'definition',
        statement: 'An **HttpClient** from `HttpClient.newHttpClient()` centralizes connection pooling, redirects, and timeouts, customized through `newBuilder()` with version and executor choices.',
        detail: 'One shared client serves a whole application. Per request variation belongs in the request builder, not in new clients.',
      },
      {
        term: 'Request composition',
        kind: 'method',
        statement: 'An **HttpRequest** composes a `URI` plus method plus `BodyPublisher`, as in `POST(BodyPublishers.ofString(json))` with explicit `Content-Type` and `timeout` settings.',
        detail: 'Build URIs from parts to dodge encoding bugs. No body publisher suits GET and DELETE while strings, files, and streams cover the rest.',
      },
      {
        term: 'Response body handlers',
        kind: 'notation',
        statement: 'A **BodyHandler** such as `BodyHandlers.ofString()` or `ofFile(path)` decides where response bytes land, pairing with `response.statusCode()` checks before trusting the payload.',
        detail: 'Discarding handlers probe health endpoints cheaply. File handlers stream large downloads without heap pressure.',
      },
      {
        term: 'Async completion chaining',
        kind: 'theorem',
        statement: '**Async sends** with `sendAsync` return a `CompletableFuture` supporting `thenApply`, `thenCompose`, and `exceptionally`, sequencing HTTP work without blocking threads.',
        detail: 'Join only at the true dependency point. Timeouts on the request bound the future so one slow server cannot stall the chain.',
      },
      {
        term: 'Form posts and URI hygiene',
        kind: 'insight',
        statement: '**Form posts** encode `name=value` pairs with `ofString` plus the form content type, while careful `URI` construction keeps paths, queries, and fragments correctly escaped.',
        detail: 'Horstmann posts through URLConnection historically and HttpClient today. Never concatenate raw user text into query strings unencoded.',
      },
    ],
    figures: [
      {
        caption: 'Sync send blocks for the full response while async send chains a future instead.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Synchronous versus asynchronous HTTP flow"><rect x="40" y="60" width="180" height="80" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="88" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Sync path</text><text x="130" y="110" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">send blocks thread</text><rect x="270" y="60" width="180" height="80" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="360" y="88" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Server</text><text x="360" y="110" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">status plus body</text><rect x="500" y="60" width="180" height="80" fill="none" stroke="currentColor" stroke-width="2"/><text x="590" y="88" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Async path</text><text x="590" y="110" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">future chains on</text><line x1="220" y1="100" x2="266" y2="100" stroke="currentColor" stroke-width="1.8"/><polygon points="266,100 256,94 256,106" fill="currentColor"/><line x1="450" y1="100" x2="496" y2="100" stroke="currentColor" stroke-width="1.8"/><polygon points="496,100 486,94 486,106" fill="currentColor"/><rect x="130" y="190" width="460" height="90" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="360" y="218" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Both paths check statusCode before trusting the body.</text><text x="360" y="240" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Async threads stay free while the response travels.</text><text x="360" y="320" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Block only at the true dependency point</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Synchronous JSON fetch',
        problem: 'Fetch an items endpoint with an accept header and a five second bound, then print the status code.',
        steps: [
          { label: 'Step 1: Share one client', text: 'Create the application wide client once:\n```java\nHttpClient client = HttpClient.newHttpClient();\n```\nPooling and redirects live here, not per request.' },
          { label: 'Step 2: Build and send', text: 'Compose the GET from URI parts and handle the answer as a string:\n```java\ntry {\n    // request-response-pattern: build once, send, then inspect status\n    HttpRequest request = HttpRequest.newBuilder(\n            new URI("https", "api.example.com", "/items", null))\n        .header("Accept", "application/json")\n        .timeout(Duration.ofSeconds(5))\n        .GET()\n        .build();\n    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n    System.out.println(response.statusCode());\n} catch (URISyntaxException | IOException e) {\n    System.err.println("request failed: " + e.getMessage());\n} catch (InterruptedException e) {\n    Thread.currentThread().interrupt();\n}\n```\nTwo hundred means the JSON body is trustworthy.' },
          { label: 'Step 3: Inspect before parsing', text: 'Check status before parsing, since error bodies follow other schemas:\n```java\nSystem.out.println("parse only on success status");\n```\nError bodies follow different schemas and must not parse as items.' },
        ],
        result: 'The synchronous fetch prints status two hundred with the JSON body ready.',
      },
      {
        title: 'Asynchronous JSON post',
        problem: 'Post one JSON object without blocking, printing the status when the completion stage fires.',
        steps: [
          { label: 'Step 1: Compose the post', text: 'Attach a string body with its content type inside a guarded block:\n```java\nHttpClient client = HttpClient.newHttpClient();\ntry {\n    // async-post-pattern: nonblocking send with a completion stage\n    HttpRequest post = HttpRequest.newBuilder(\n            new URI("https", "api.example.com", "/items", null))\n        .POST(HttpRequest.BodyPublishers.ofString("{\\"name\\":\\"ada\\"}"))\n        .header("Content-Type", "application/json")\n        .build();\n    client.sendAsync(post, HttpResponse.BodyHandlers.ofString())\n        .thenAccept(r -> System.out.println(r.statusCode()))\n        .join();\n} catch (URISyntaxException e) {\n    System.err.println("bad uri: " + e.getMessage());\n}\n```\nJoin waits exactly once at the dependency point.' },
          { label: 'Step 2: Chain further work', text: 'Extend the stage instead of nesting callbacks:\n```java\nSystem.out.println("thenApply maps, thenCompose flattens, exceptionally recovers");\n```\nEach operator returns a new stage for the next step.' },
          { label: 'Step 3: Bound the wait', text: 'Remember timeouts belong on the request:\n```java\nSystem.out.println("request timeouts bound every async send");\n```\nSlow servers then fail the future instead of stalling the chain.' },
        ],
        result: 'The async post prints its creation status without blocking threads.',
      },
    ],
    keyTakeaways: [
      'One shared HttpClient owns pooling, redirects, and executor policy.',
      'Requests compose URI, method, headers, timeout, and body publisher.',
      'Body handlers direct bytes to strings, files, or discards explicitly.',
      'Async sends chain futures and join only at true dependencies.',
    ],
    quiz: [
      {
        q: 'Where should connection pooling live?',
        options: [
          'In a new HttpClient per request for isolation',
          'In one shared HttpClient reused application wide',
          'In each HttpRequest builder separately',
          'In the BodyHandler chosen per response',
        ],
        answer: 1,
        explanation: 'Step 1: Pools amortize TLS and TCP setup. Step 2: Per request clients defeat reuse. Step 3: Requests carry only per call variation. Step 4: Sharing one client therefore maximizes throughput.',
      },
      {
        q: 'What must precede trusting a response body?',
        options: [
          'Checking statusCode for the expected success family',
          'Measuring the body length against the timeout',
          'Closing the client before reading headers',
          'Rebuilding the request with a new URI',
        ],
        answer: 0,
        explanation: 'Step 1: Error responses carry different schemas. Step 2: Blind parsing misreads failure payloads. Step 3: Status codes classify success first. Step 4: Parsing follows only on success.',
      },
      {
        q: 'Why prefer sendAsync for fan out calls?',
        options: [
          'It skips TLS negotiation for speed',
          'It frees threads while responses travel, chaining continuations',
          'It compresses every request body automatically',
          'It merges many responses into one body',
        ],
        answer: 3,
        explanation: 'Step 1: Sync sends pin one thread per call. Step 2: Async returns a future immediately. Step 3: Continuations fire on arrival. Step 4: Threads thus serve other work meanwhile.',
      },
      {
        q: 'How should query strings include user text?',
        options: [
          'By concatenating raw text directly into the URI',
          'By building URIs from parts with proper escaping',
          'By placing user text in the fragment only',
          'By switching to a relative URI without a host',
        ],
        answer: 2,
        explanation: 'Step 1: Raw text may contain reserved characters. Step 2: Unescaped characters corrupt parsing. Step 3: Multi argument URI constructors escape correctly. Step 4: Part wise building is therefore required.',
      },
    ],
  },
]

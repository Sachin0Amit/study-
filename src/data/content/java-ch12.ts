import type { SectionContent } from '../library'

/* ============================================================================
   Core Java Twelfth Edition master study content — Database and Modules
   Chapter 12: sections 12.1 to 12.4. Based on Horstmann Core Java Volume Two,
   Chapters 5 and 9: JDBC queries, transactions, and the module system.
   ============================================================================ */

export const javaCh12Content: SectionContent[] = [
  /* ---------------- 12.1 ---------------- */
  {
    sectionId: 'java-ch12-s1',
    readingTime: 7,
    intro: 'JDBC connects Java programs to relational databases through drivers, URLs, and managed connections. This section compares DriverManager with DataSource configuration, registers drivers, and opens connections safely. It ends with the try with resources lifecycle that Horstmann applies to every database resource.',
    objectives: [
      'Configure JDBC URLs, drivers, and credentials correctly',
      'Open connections through DriverManager with safe properties',
      'Manage connections, statements, and result sets with try with resources',
    ],
    concepts: [
      {
        term: 'JDBC driver types',
        kind: 'definition',
        statement: 'A **JDBC driver** translates the standard API into a database protocol, with type four pure Java drivers such as `org.apache.derby.jdbc.ClientDriver` needing only a JAR on the path.',
        detail: 'Modern drivers self register through service loading. Explicit Class dot forName survives only for ancient drivers and teaching examples.',
      },
      {
        term: 'Database URL shape',
        kind: 'notation',
        statement: 'A **database URL** like `jdbc:derby:studyDB;create=true` names the subprotocol, host, and database plus attributes, parsed by the accepting driver behind `getConnection`.',
        detail: 'Subprotocol selects the driver while attributes tune creation and security. Keep credentials out of the URL in production code.',
      },
      {
        term: 'DriverManager versus DataSource',
        kind: 'insight',
        statement: '**DriverManager** called as `DriverManager.getConnection(url)` opens direct connections from URLs, while a **DataSource** looked up as `dataSource.getConnection()` centralizes pooling and configuration for managed or pooled deployment.',
        detail: 'Prototypes and tests favor DriverManager brevity. Servers favor injected DataSources with login timeouts and pool sizing.',
      },
      {
        term: 'Connection lifecycle',
        kind: 'method',
        statement: 'The **lifecycle** opens late and closes early with `try (Connection conn = ...)` so sockets, cursors, and locks return even when SQL fails midway.',
        detail: 'Nest statements and result sets in the same resource cascade. Closing order reverses creation automatically at block exit.',
      },
      {
        term: 'SQLException diagnosis',
        kind: 'theorem',
        statement: '**SQLException** carries `getSQLState()` plus vendor codes and chained causes, letting handlers distinguish constraint violations from connection losses.',
        detail: 'SQLState classes standardize families across vendors. Iterate getNextException because drivers batch several server complaints at once.',
      },
    ],
    figures: [
      {
        caption: 'JDBC layers: application code reaches the database only through driver abstractions.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="JDBC layer stack"><rect x="200" y="30" width="320" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="54" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Application</text><text x="360" y="72" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">statements and queries</text><rect x="200" y="100" width="320" height="56" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="360" y="124" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">DriverManager</text><text x="360" y="142" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">URL routing and login timeout</text><rect x="200" y="170" width="320" height="56" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="360" y="194" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Driver JAR</text><text x="360" y="212" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">protocol translation</text><rect x="200" y="240" width="320" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="264" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Database</text><text x="360" y="282" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">tables and transactions</text><line x1="360" y1="86" x2="360" y2="98" stroke="currentColor" stroke-width="1.6"/><polygon points="360,98 354,88 366,88" fill="currentColor"/><line x1="360" y1="156" x2="360" y2="168" stroke="currentColor" stroke-width="1.6"/><polygon points="360,168 354,158 366,158" fill="currentColor"/><line x1="360" y1="226" x2="360" y2="238" stroke="currentColor" stroke-width="1.6"/><polygon points="360,238 354,228 366,228" fill="currentColor"/><text x="360" y="326" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Swap drivers and databases without rewriting queries</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Creating a table with DriverManager',
        problem: 'Connect to an embedded database, create a greeting table, and release every resource automatically.',
        steps: [
          { label: 'Step 1: Name the database URL', text: 'Point at an embedded database that creates itself on demand:\n```java\nString url = "jdbc:derby:studyDB;create=true";\n```\nThe create attribute bootstraps a fresh database on first contact.' },
          { label: 'Step 2: Execute inside resources', text: 'Open connection plus statement in one cascade and create the table:\n```java\ntry (Connection conn = DriverManager.getConnection(url);\n     Statement stat = conn.createStatement()) {\n    // connection-lifecycle-pattern: open late, close automatically\n    stat.executeUpdate("CREATE TABLE Greet (Msg VARCHAR(32))");\n    System.out.println("table ready");\n} catch (SQLException e) {\n    System.err.println("connect failed: " + e.getSQLState());\n}\n```\nBoth resources close in reverse order at block exit.' },
          { label: 'Step 3: Read the SQLState on failure', text: 'Classify any failure through the portable state code:\n```java\nSystem.out.println("table exists state means rerun is safe to skip");\n```\nReruns meet the already exists state instead of mystery errors.' },
        ],
        result: 'The greeting table stands ready with all resources released.',
      },
      {
        title: 'Credential login with metadata check',
        problem: 'Log in with explicit user properties, bound the wait, and confirm the database product name.',
        steps: [
          { label: 'Step 1: Bound the login wait', text: 'Cap driver connection attempts at five seconds:\n```java\nDriverManager.setLoginTimeout(5);\nProperties props = new Properties();\nprops.put("user", "ada");\nprops.put("password", "secret");\n```\nProperties keep secrets out of the URL string.' },
          { label: 'Step 2: Connect and inspect', text: 'Open the connection and ask the metadata who answered:\n```java\n// properties-login-pattern: credentials travel outside the URL\ntry (Connection conn = DriverManager.getConnection("jdbc:derby:studyDB", props)) {\n    DatabaseMetaData meta = conn.getMetaData();\n    System.out.println(meta.getDatabaseProductName());\n} catch (SQLException e) {\n    System.err.println("login failed: " + e.getSQLState());\n}\n```\nThe product name confirms the expected engine.' },
          { label: 'Step 3: Prefer DataSource later', text: 'Note the production upgrade path for servers:\n```java\nSystem.out.println("servers inject a pooled DataSource instead");\n```\nPooling, timeouts, and credentials then live in configuration.' },
        ],
        result: 'Login succeeds with properties and metadata confirms the engine.',
      },
    ],
    keyTakeaways: [
      'Type four drivers need only a JAR while URLs route to the right one.',
      'DriverManager suits direct code while DataSource suits managed pooling.',
      'Try with resources cascades connections, statements, and result sets.',
      'SQLState plus chained exceptions diagnose failures across vendors.',
    ],
    quiz: [
      {
        q: 'What does the subprotocol in a JDBC URL select?',
        options: [
          'The SQL dialect version for the parser',
          'The driver that accepts the connection request',
          'The transaction isolation level for the session',
          'The character encoding of text columns',
        ],
        answer: 1,
        explanation: 'Step 1: DriverManager tries each registered driver. Step 2: Drivers inspect the subprotocol prefix. Step 3: The first accepting driver handles the URL. Step 4: Routing therefore hinges on the subprotocol.',
      },
      {
        q: 'Why keep credentials in Properties rather than the URL?',
        options: [
          'Properties encrypt passwords automatically',
          'URLs with secrets leak into logs and configuration copies',
          'Drivers reject URLs containing user fields',
          'Properties connect twice as fast as URLs',
        ],
        answer: 3,
        explanation: 'Step 1: URLs are copied into logs and error text. Step 2: Secrets embedded there spread widely. Step 3: Properties travel as a separate argument. Step 4: Separation keeps passwords out of casual copies.',
      },
      {
        q: 'What does try with resources guarantee for JDBC?',
        options: [
          'Automatic commit of pending transactions',
          'Reverse order closing on every exit path',
          'Automatic retry of failed SQL statements',
          'Implicit creation of missing tables',
        ],
        answer: 2,
        explanation: 'Step 1: Resources declare their close order. Step 2: Normal and exceptional exits both close. Step 3: Result sets close before statements before connections. Step 4: Leaks therefore close out on all paths.',
      },
      {
        q: 'How should multi part SQLExceptions be read?',
        options: [
          'Read only the first message and ignore the chain',
          'Walk SQLState, vendor code, and getNextException chain',
          'Retry immediately without inspecting anything',
          'Map every error to a connection loss by default',
        ],
        answer: 0,
        explanation: 'Step 1: Drivers batch several server complaints. Step 2: SQLState classifies each portably. Step 3: Vendor codes add engine precision. Step 4: The full chain is needed for a correct diagnosis.',
      },
    ],
  },
  /* ---------------- 12.2 ---------------- */
  {
    sectionId: 'java-ch12-s2',
    readingTime: 9,
    intro: 'Queries retrieve rows while prepared statements bind values safely, forming the daily core of JDBC work. This section traverses result sets, binds parameters against injection, and reads large objects plus generated keys. It ends with SQL escapes and multiple result handling for advanced statements.',
    objectives: [
      'Traverse result sets by index and by column label',
      'Bind parameters with PreparedStatement to defeat injection',
      'Retrieve generated keys, LOBs, and multiple results correctly',
    ],
    concepts: [
      {
        term: 'ResultSet cursor traversal',
        kind: 'definition',
        statement: 'A **ResultSet** cursor starts before the first row, advances with `next()`, and reads columns with `getString(1)` or `getString("Title")` until it returns false.',
        detail: 'Column indexes start at one, unlike arrays. Type matched getters avoid silent conversions that mask schema drift.',
      },
      {
        term: 'PreparedStatement binding',
        kind: 'method',
        statement: '**Binding** with `stat.setString(1, "Tolkien")` sends each `?` placeholder as typed data, so quotes and keywords in values never reshape the SQL text.',
        detail: 'Indexes count placeholders left to right from one. Reuse the compiled statement with fresh bindings for repeated executions.',
      },
      {
        term: 'Injection defence by structure',
        kind: 'theorem',
        statement: '**Injection defence** works because bound values travel outside the statement syntax tree, turning hostile tautology text sent through `?` into a harmless literal comparison.',
        detail: 'Concatenating user text rebuilds the tree around the attacker. Placeholders keep code and data on separate channels always.',
      },
      {
        term: 'Generated keys and LOBs',
        kind: 'notation',
        statement: '**Generated keys** from `prepareStatement(sql, RETURN_GENERATED_KEYS)` plus `getGeneratedKeys()` reveal autoincrement ids, while `Clob` and `Blob` getters stream large text and bytes.',
        detail: 'Request keys at prepare time or drivers may skip them. Stream LOBs rather than materializing giant values into memory.',
      },
      {
        term: 'Escapes and multiple results',
        kind: 'insight',
        statement: '**SQL escapes** like `{fn UCASE(name)}` standardize functions across vendors, and `getMoreResults()` walks the update count plus result set chains from batched procedures.',
        detail: 'Escape syntax translates per driver to native calls. Loop execute plus getMoreResults until both counts and sets report exhaustion.',
      },
    ],
    figures: [
      {
        caption: 'Placeholders send values as data beside the SQL text, never inside it.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="PreparedStatement placeholder binding"><rect x="60" y="60" width="600" height="70" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="88" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">SQL text with placeholders</text><text x="360" y="110" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">SELECT Title FROM Books WHERE Author equals ?</text><rect x="60" y="170" width="280" height="90" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="200" y="198" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Bound values</text><text x="200" y="220" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">1 maps to Tolkien</text><text x="200" y="240" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">typed data channel</text><rect x="380" y="170" width="280" height="90" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="520" y="198" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Attacker text</text><text x="520" y="220" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">stays a literal</text><text x="520" y="240" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">never reshapes syntax</text><line x1="200" y1="130" x2="200" y2="166" stroke="currentColor" stroke-width="1.6"/><polygon points="200,166 194,156 206,156" fill="currentColor"/><line x1="520" y1="130" x2="520" y2="166" stroke="currentColor" stroke-width="1.6"/><polygon points="520,166 514,156 526,156" fill="currentColor"/><text x="360" y="310" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Code and data travel separately, so injection has nowhere to hook</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Author search with bound parameters',
        problem: 'List every book title by one author without letting the author string touch SQL syntax.',
        steps: [
          { label: 'Step 1: Write the placeholder query', text: 'Mark the author slot with a single question mark:\n```java\nString query = "SELECT Title FROM Books WHERE Author = ?";\n```\nThe statement compiles with the slot untyped.' },
          { label: 'Step 2: Bind and traverse', text: 'Supply Tolkien as data and walk the cursor to exhaustion:\n```java\ntry (Connection conn = DriverManager.getConnection("jdbc:derby:studyDB");\n     PreparedStatement stat = conn.prepareStatement(query)) {\n    // bound-parameter-pattern: values travel as data, never as SQL text\n    stat.setString(1, "Tolkien");\n    try (ResultSet rs = stat.executeQuery()) {\n        while (rs.next()) {\n            System.out.println(rs.getString(1));\n        }\n    }\n} catch (SQLException e) {\n    System.err.println("query failed: " + e.getMessage());\n}\n```\nEach next advances before any getter reads.' },
          { label: 'Step 3: Confirm hostile safety', text: 'Note what happens to hostile author strings:\n```java\nSystem.out.println("quote tricks match no author literally");\n```\nEmbedded quotes compare as plain characters instead of breaking out.' },
        ],
        result: 'Bound search lists Tolkien titles while hostile input stays inert.',
      },
      {
        title: 'Insert with generated keys returned',
        problem: 'Insert one book row and immediately learn the autoincrement id the database assigned.',
        steps: [
          { label: 'Step 1: Request keys at prepare', text: 'Ask for key return while compiling the insert:\n```java\nString insert = "INSERT INTO Books (Author, Title) VALUES (?, ?)";\n```\nLate requests for keys may be ignored by strict drivers.' },
          { label: 'Step 2: Bind, insert, and read keys', text: 'Execute the update then open the generated key cursor:\n```java\ntry (Connection conn = DriverManager.getConnection("jdbc:derby:studyDB");\n     PreparedStatement stat = conn.prepareStatement(insert, Statement.RETURN_GENERATED_KEYS)) {\n    // generated-keys-pattern: ask for keys at prepare time, read after update\n    stat.setString(1, "Le Guin");\n    stat.setString(2, "A Wizard of Earthsea");\n    stat.executeUpdate();\n    try (ResultSet keys = stat.getGeneratedKeys()) {\n        if (keys.next()) { System.out.println(keys.getLong(1)); }\n    }\n} catch (SQLException e) {\n    System.err.println("insert failed: " + e.getMessage());\n}\n```\nThe cursor holds exactly the fresh ids.' },
          { label: 'Step 3: Use the id downstream', text: 'Carry the printed id into child rows:\n```java\nSystem.out.println("child rows reference the fresh book id");\n```\nReviews or stock rows join on the confirmed key.' },
        ],
        result: 'The insert reports its new id for downstream child rows.',
      },
    ],
    keyTakeaways: [
      'ResultSet cursors advance with next and read by index or label.',
      'Placeholders bind values as data, closing the injection hole.',
      'Generated keys and LOBs need explicit request and streaming care.',
      'Escapes standardize functions while getMoreResults walks chains.',
    ],
    quiz: [
      {
        q: 'Why does binding defeat injection?',
        options: [
          'Bound values travel as data outside the SQL syntax tree',
          'Binding encrypts values before the driver sees them',
          'Placeholders shorten statements below attack length',
          'The driver strips quotes from every bound value',
        ],
        answer: 2,
        explanation: 'Step 1: Concatenation splices text into syntax. Step 2: Placeholders compile the tree first. Step 3: Values arrive later on a data channel. Step 4: Hostile characters therefore compare literally.',
      },
      {
        q: 'When must RETURN_GENERATED_KEYS be requested?',
        options: [
          'After executeUpdate but before getGeneratedKeys',
          'At prepareStatement time when compiling the insert',
          'Inside the result set traversal loop',
          'During connection commit after the insert',
        ],
        answer: 1,
        explanation: 'Step 1: Drivers plan key capture at compile time. Step 2: Late requests miss the capture setup. Step 3: The prepare flag records the intent. Step 4: Keys then await collection after update.',
      },
      {
        q: 'What does while rs dot next guard?',
        options: [
          'It skips the header row of column labels',
          'It advances the cursor and stops past the last row',
          'It sorts rows before the first getter runs',
          'It locks each row for exclusive update',
        ],
        answer: 0,
        explanation: 'Step 1: Cursors start before row one. Step 2: Getters need a current row present. Step 3: Next moves and reports presence. Step 4: The loop therefore visits exactly the real rows.',
      },
      {
        q: 'How should large LOB values be read?',
        options: [
          'By materializing the whole value into a byte array first',
          'By streaming through Clob or Blob accessors incrementally',
          'By concatenating chunks with SQL string functions',
          'By storing them in static fields shared across rows',
        ],
        answer: 3,
        explanation: 'Step 1: LOBs can dwarf available heap. Step 2: Full materialization risks exhaustion. Step 3: Streaming accessors page content through. Step 4: Incremental reads therefore stay memory safe.',
      },
    ],
  },
  /* ---------------- 12.3 ---------------- */
  {
    sectionId: 'java-ch12-s3',
    readingTime: 9,
    intro: 'Transactions bundle statements into all or nothing units, which is how Horstmann moves money between accounts safely. This section disables auto commit, commits on success, and rolls back on failure with savepoints. It ends with isolation levels, batch updates, and row sets for disconnected work.',
    objectives: [
      'Bracket multi statement work with commit and rollback',
      'Use savepoints for partial rollback inside transactions',
      'Apply isolation levels and batch updates appropriately',
    ],
    concepts: [
      {
        term: 'All or nothing commit',
        kind: 'definition',
        statement: 'A **transaction** groups statements behind `setAutoCommit(false)` so `commit()` publishes every effect together or `rollback()` erases them all on failure.',
        detail: 'Money transfers debit and credit inside one unit. Partial publication would create or destroy funds on a mid way crash.',
      },
      {
        term: 'Rollback and savepoints',
        kind: 'method',
        statement: '**Savepoints** from `conn.setSavepoint()` mark positions that `rollback(mark)` rewinds to, keeping earlier good work while discarding only the failed tail.',
        detail: 'Release savepoints after success to free database resources. Nest them for staged imports with per stage recovery.',
      },
      {
        term: 'Isolation levels',
        kind: 'theorem',
        statement: '**Isolation** levels set with `conn.setTransactionIsolation(level)` range from read uncommitted to serializable, trading anomaly exposure against concurrency and controlling dirty reads, non repeatable reads, and phantoms.',
        detail: 'Higher levels lock more and scale less. Choose the weakest level whose anomalies the application genuinely tolerates.',
      },
      {
        term: 'Batch updates',
        kind: 'notation',
        statement: '**Batching** with `addBatch()` plus `executeBatch()` ships many parameter sets in one round trip, multiplying insert throughput for bulk loads.',
        detail: 'Disable auto commit around batches and commit once at the end. Inspect the per statement counts for partial failure handling.',
      },
      {
        term: 'Row sets for disconnected work',
        kind: 'insight',
        statement: 'A **CachedRowSet** carries query results offline, accepting edits that `acceptChanges()` reconciles later, suiting occasionally connected clients.',
        detail: 'Row sets are scrollable and updatable by construction. Conflicts surface at reconcile time with explicit resolution policies.',
      },
    ],
    figures: [
      {
        caption: 'Transaction timeline: statements accumulate privately until commit publishes or rollback erases.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Transaction commit rollback timeline"><line x1="60" y1="170" x2="660" y2="170" stroke="currentColor" stroke-width="1.8"/><polygon points="660,170 650,164 650,176" fill="currentColor"/><circle cx="120" cy="170" r="10" fill="currentColor"/><text x="120" y="145" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">begin</text><rect x="200" y="130" width="110" height="50" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="255" y="152" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">debit 100</text><text x="255" y="168" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">private</text><rect x="340" y="130" width="110" height="50" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="395" y="152" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">credit 100</text><text x="395" y="168" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">private</text><rect x="490" y="100" width="90" height="50" fill="none" stroke="currentColor" stroke-width="2"/><text x="535" y="122" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="700" fill="currentColor">commit</text><text x="535" y="140" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">publish</text><rect x="490" y="200" width="90" height="50" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><text x="535" y="222" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="700" fill="currentColor">rollback</text><text x="535" y="240" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">erase</text><text x="360" y="300" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">No outsider sees a half moved hundred.</text><text x="360" y="322" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Savepoints add rewind marks inside the private span</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Account transfer with rollback',
        problem: 'Move one hundred between two accounts so both updates publish together or neither does.',
        steps: [
          { label: 'Step 1: Suspend auto commit', text: 'Take control of the unit boundary before touching balances:\n```java\ntry (Connection conn = DriverManager.getConnection("jdbc:derby:studyDB")) {\n    // all-or-nothing-pattern: disable auto commit, settle explicitly\n    conn.setAutoCommit(false);\n    try (Statement stat = conn.createStatement()) {\n        stat.executeUpdate("UPDATE Accounts SET Balance = Balance - 100 WHERE Id = 1");\n        stat.executeUpdate("UPDATE Accounts SET Balance = Balance + 100 WHERE Id = 2");\n        conn.commit();\n        System.out.println("transferred");\n    } catch (SQLException e) {\n        try {\n            conn.rollback();\n        } catch (SQLException r) {\n            System.err.println("rollback failed: " + r.getMessage());\n        }\n        System.err.println("rolled back: " + e.getMessage());\n    } finally {\n        conn.setAutoCommit(true);\n    }\n} catch (SQLException e) {\n    System.err.println("transfer failed: " + e.getMessage());\n}\n```\nBoth statements share one private workspace.' },
          { label: 'Step 2: Restore the default', text: 'Return the connection to auto commit in the finally block:\n```java\nSystem.out.println("pooled connections must reset their mode");\n```\nLeaked manual mode would surprise the next borrower.' },
          { label: 'Step 3: Verify conservation', text: 'Check that total money never changed:\n```java\nSystem.out.println("debit plus credit nets to zero");\n```\nCommit publishes the pair while rollback erases it.' },
        ],
        result: 'One hundred moves atomically with funds conserved on every path.',
      },
      {
        title: 'Bulk book load with batching',
        problem: 'Insert two book rows in one round trip inside an explicit transaction with a savepoint mark.',
        steps: [
          { label: 'Step 1: Queue the batch', text: 'Fill one prepared insert with two parameter sets:\n```java\ntry (Connection conn = DriverManager.getConnection("jdbc:derby:studyDB");\n     PreparedStatement stat = conn.prepareStatement(\n         "INSERT INTO Books (Author, Title) VALUES (?, ?)")) {\n    // batch-insert-pattern: queue rows client side, send in one round trip\n    conn.setAutoCommit(false);\n    Savepoint mark = conn.setSavepoint();\n    String[][] rows = {{"Tolkien", "The Hobbit"}, {"Le Guin", "Earthsea"}};\n    for (String[] row : rows) {\n        stat.setString(1, row[0]);\n        stat.setString(2, row[1]);\n        stat.addBatch();\n    }\n    stat.executeBatch();\n    conn.releaseSavepoint(mark);\n    conn.commit();\n    System.out.println("batch committed");\n} catch (SQLException e) {\n    System.err.println("batch failed: " + e.getMessage());\n}\n```\nOne network trip carries both rows.' },
          { label: 'Step 2: Inspect per row counts', text: 'Treat the returned array as the per statement report:\n```java\nSystem.out.println("counts array holds one entry per batched row");\n```\nFailed entries flag exactly which row needs attention.' },
          { label: 'Step 3: Roll back to the mark on trouble', text: 'Rewind partial work without abandoning the whole session:\n```java\nSystem.out.println("rollback to mark keeps earlier good work");\n```\nSavepoints turn total loss into surgical undo.' },
        ],
        result: 'Two books commit together with one round trip and a safety mark.',
      },
    ],
    keyTakeaways: [
      'Transactions publish multi statement work as one atomic unit.',
      'Rollback erases failures while savepoints enable partial undo.',
      'Isolation levels trade anomaly safety against concurrency.',
      'Batches ship bulk work fast inside explicit commit boundaries.',
    ],
    quiz: [
      {
        q: 'Why disable auto commit for transfers?',
        options: [
          'To speed up single row selects with caching',
          'To group debit plus credit into one atomic unit',
          'To lock the whole database for exclusive access',
          'To skip SQL parsing for repeated statements',
        ],
        answer: 1,
        explanation: 'Step 1: Auto commit publishes each statement alone. Step 2: A crash between debit and credit corrupts totals. Step 3: Manual mode holds both privately. Step 4: Commit then publishes the pair atomically.',
      },
      {
        q: 'What does rollback to a savepoint preserve?',
        options: [
          'Only the schema changes made after the mark',
          'Work before the mark while discarding the failed tail',
          'The connection credentials for faster retry',
          'Locks held by other concurrent sessions',
        ],
        answer: 3,
        explanation: 'Step 1: Savepoints mark positions inside a transaction. Step 2: Rollback rewinds state to the mark. Step 3: Earlier statements stay in the workspace. Step 4: Only the tail after the mark is erased.',
      },
      {
        q: 'Which anomaly does higher isolation remove first?',
        options: [
          'Dirty reads of uncommitted work, then non repeatable and phantom reads',
          'Deadlocks between competing transactions always',
          'Duplicate key violations on concurrent inserts',
          'Syntax errors from mixed vendor dialects',
        ],
        answer: 2,
        explanation: 'Step 1: Read uncommitted exposes everything. Step 2: Read committed hides uncommitted writes. Step 3: Repeatable read stabilizes rereads. Step 4: Serializable additionally bars phantoms.',
      },
      {
        q: 'Why batch bulk inserts instead of looping executes?',
        options: [
          'Batches skip constraint checking for speed',
          'One round trip carries many rows, cutting latency',
          'Batches auto create missing tables on demand',
          'Looping executes cannot use prepared statements',
        ],
        answer: 0,
        explanation: 'Step 1: Each execute pays network round trip cost. Step 2: Batching queues rows client side. Step 3: One trip ships the whole queue. Step 4: Latency therefore collapses for bulk loads.',
      },
    ],
  },
  /* ---------------- 12.4 ---------------- */
  {
    sectionId: 'java-ch12-s4',
    readingTime: 8,
    intro: 'The module system scales encapsulation from packages to whole deployable units with explicit contracts. This section writes module descriptors with requires and exports, opens packages for reflection, and handles automatic plus unnamed modules. It ends with migration flags, service loading, and the tooling that audits module graphs.',
    objectives: [
      'Write module descriptors with requires, exports, and opens',
      'Migrate class path JARs through automatic and unnamed modules',
      'Wire services with uses, provides, and migration tooling',
    ],
    concepts: [
      {
        term: 'Module descriptor contract',
        kind: 'definition',
        statement: 'A **module descriptor** in `module-info.java` declares `module com.example.library` with `requires java.sql` inputs and `exports com.example.library.api` outputs enforced at compile and run time.',
        detail: 'Undeclared dependencies fail fast instead of surfacing asClassNotFound at midnight. Unexported packages stay invisible even on the same module path.',
      },
      {
        term: 'Exports versus opens',
        kind: 'method',
        statement: '**Exports** grants compile time plus runtime access to a package, while **opens** additionally permits deep reflection for frameworks, as in `opens com.example.entities` for mappers.',
        detail: 'Qualified forms narrow access to named friend modules. Open modules expose everything, which suits whole application tiers.',
      },
      {
        term: 'Automatic and unnamed modules',
        kind: 'notation',
        statement: 'An **automatic module** named by `Automatic-Module-Name` in the manifest, or derived from the JAR file name, joins the graph without a descriptor, while the **unnamed module** holds all class path code with blanket readability for gradual migration.',
        detail: 'Automatic modules require everything they might need. Unnamed code reads all modules but no named module may require the unnamed one.',
      },
      {
        term: 'Transitive and static requirements',
        kind: 'theorem',
        statement: '**Requires transitive** passes a dependency to downstream readers, while **requires static** marks an optional compile time only need such as annotation helpers in `requires static com.example.macros`.',
        detail: 'Transitive edges spare every consumer from redeclaring shared APIs. Static edges vanish when absent at runtime without breaking launch.',
      },
      {
        term: 'Service loading between modules',
        kind: 'insight',
        statement: '**Service loading** decouples APIs with `uses com.example.api.Greeter` on consumers and `provides Greeter with LoudGreeter` on suppliers, discovered by `ServiceLoader` at runtime.',
        detail: 'Providers must reside in modules that declare the provision. Consumers iterate suppliers without naming implementations anywhere.',
      },
    ],
    figures: [
      {
        caption: 'Module graph: app requires the library, consumes only its exported API package.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Module requires exports graph"><rect x="60" y="110" width="240" height="130" fill="none" stroke="currentColor" stroke-width="2"/><text x="180" y="140" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">com.example.app</text><text x="180" y="162" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">requires library</text><text x="180" y="182" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">uses Greeter</text><text x="180" y="202" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">hides internals</text><rect x="420" y="110" width="240" height="130" fill="none" stroke="currentColor" stroke-width="2"/><text x="540" y="140" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">com.example.library</text><text x="540" y="162" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">exports api only</text><text x="540" y="182" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">provides Greeter</text><text x="540" y="202" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">with LoudGreeter</text><line x1="300" y1="160" x2="416" y2="160" stroke="currentColor" stroke-width="1.8"/><polygon points="416,160 406,154 406,166" fill="currentColor"/><text x="358" y="148" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">requires</text><rect x="420" y="260" width="240" height="44" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><text x="540" y="287" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">impl package stays hidden</text><text x="360" y="60" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Readable only what is exported, usable only what is required</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Declaring a library module',
        problem: 'Publish a library whose database backed API is visible while its implementation stays encapsulated.',
        steps: [
          { label: 'Step 1: Name inputs and outputs', text: 'Write the descriptor with one requirement and one export:\n```java\nmodule com.example.library {\n    // module-contract-pattern: requires lists inputs, exports lists outputs\n    requires java.sql;\n    exports com.example.library.api;\n}\n```\nOnly the api package crosses the module boundary.' },
          { label: 'Step 2: Keep impl hidden', text: 'Leave the implementation package unexported by omission:\n```java\nSystem.out.println("com.example.library.impl is invisible outside");\n```\nForeign modules cannot even name those types.' },
          { label: 'Step 3: Compile on the module path', text: 'Place the JAR on the module path so the descriptor activates:\n```java\nSystem.out.println("module path enforces the contract at run time");\n```\nClass path placement would silently ignore every rule.' },
        ],
        result: 'The library exposes its API and seals its implementation.',
      },
      {
        title: 'Wiring an app with services',
        problem: 'Let an application consume greeting services without depending on any implementation module.',
        steps: [
          { label: 'Step 1: Require and use', text: 'Depend transitively on the library and consume its service:\n```java\nmodule com.example.app {\n    // service-consumer-pattern: require the API, use the service type\n    requires transitive com.example.library;\n    uses com.example.library.api.Greeter;\n}\n```\nTransitive readability spares downstream modules from redeclaring.' },
          { label: 'Step 2: Load suppliers at runtime', text: 'Discover implementations without naming them:\n```java\nServiceLoader<Greeter> greeters = ServiceLoader.load(Greeter.class);\nfor (Greeter g : greeters) {\n    System.out.println(g.greet("Ada"));\n}\n```\nProviders declare themselves with provides directives.' },
          { label: 'Step 3: Migrate gradually', text: 'Bridge legacy JARs during the transition:\n```java\nSystem.out.println("automatic modules bridge plain JARs onto the graph");\n```\nCommand flags like add reads patch gaps without code changes.' },
        ],
        result: 'The app greets through services with zero implementation coupling.',
      },
    ],
    keyTakeaways: [
      'Descriptors declare required inputs and exported outputs explicitly.',
      'Exports open APIs while opens additionally admit deep reflection.',
      'Automatic and unnamed modules stage gradual class path migration.',
      'Service loading plus transitive requirements decouple large graphs.',
    ],
    quiz: [
      {
        q: 'What happens to an unexported package at run time?',
        options: [
          'It stays invisible to other modules even by reflection',
          'It becomes public once the JAR is signed',
          'It opens automatically for test frameworks',
          'It merges into the unnamed module silently',
        ],
        answer: 0,
        explanation: 'Step 1: Strong encapsulation is the module default. Step 2: Only exports grant cross module access. Step 3: Reflection honors the same boundary. Step 4: Hidden packages therefore stay sealed.',
      },
      {
        q: 'When is opens needed instead of exports?',
        options: [
          'When callers need compile time type checking only',
          'When frameworks need deep reflective access to members',
          'When the package holds only interfaces',
          'When the module must load faster at startup',
        ],
        answer: 1,
        explanation: 'Step 1: Exports allow ordinary linkage plus shallow reflection. Step 2: Deep member access needs extra permission. Step 3: Opens grants exactly that reflective channel. Step 4: Mappers and injectors thus require opens.',
      },
      {
        q: 'What can an automatic module do for migration?',
        options: [
          'It reads every module so plain JARs join the graph unnamed',
          'It splits one JAR into many modules automatically',
          'It exports nothing until descriptors are written',
          'It forbids all reflective access by default',
        ],
        answer: 2,
        explanation: 'Step 1: Plain JARs lack module descriptors. Step 2: Placement on the module path auto names them. Step 3: They read the whole graph for compatibility. Step 4: Migration proceeds without rewriting the JAR.',
      },
      {
        q: 'How do provides and uses connect supplier to consumer?',
        options: [
          'The consumer names the implementation class directly',
          'ServiceLoader discovers provided implementations behind the used interface',
          'The compiler inlines the supplier into the consumer module',
          'A shared unnamed module hosts both sides implicitly',
        ],
        answer: 3,
        explanation: 'Step 1: Uses declares the needed service interface. Step 2: Provides binds implementations to it. Step 3: ServiceLoader enumerates bound suppliers. Step 4: Neither side names the other concretely.',
      },
    ],
  },
]

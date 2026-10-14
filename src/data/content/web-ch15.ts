import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 15
// SQL and PostgreSQL: Modeling to Production (Sections 15.1 – 15.5)
// Master study content.
// ============================================================================

export const webCh15Content: SectionContent[] = [
  // ---------------------------------------------------------------- 15.1
  {
    sectionId: 'web-ch15-s1',
    readingTime: 8,
    intro: 'SELECT queries power every dashboard, feed, and report, so their clause order and grouping rules must be second nature. This section covers projection with filtering, the logical execution order, aggregates with grouping, and NULL handling. You will finish able to write correct WHERE plus GROUP plus HAVING queries without trial and error.',
    objectives: [
      'Project columns with SELECT and filter rows with WHERE and ORDER plus LIMIT',
      'State the logical order FROM plus WHERE plus GROUP plus HAVING plus ORDER',
      'Aggregate with COUNT plus SUM plus AVG grouped by category',
      'Handle NULL with IS NULL and COALESCE in filters and output'
    ],
    concepts: [
      {
        term: 'SELECT projection with WHERE',
        kind: 'definition',
        statement: 'A **projection list** in `SELECT title, price` chooses output columns while a **row filter** in `WHERE price > 20` keeps only matching rows before any grouping. Sorting with **ordered output** via `ORDER BY created_at DESC` plus paging with `LIMIT 20` shapes the final window. Filtering early keeps later steps small and fast.',
        detail: 'Select only needed columns, filter with indexed predicates, and page with limit plus order on a unique key.'
      },
      {
        term: 'Logical execution order',
        kind: 'law',
        statement: 'Postgres executes clauses in the **logical order** `FROM` then `WHERE` then `GROUP BY` then `HAVING` then `SELECT` then `ORDER BY` then `LIMIT`, regardless of written order. The **filter before group rule** means `WHERE` trims input rows while `HAVING` trims grouped results. Reading queries in execution order explains otherwise puzzling errors.',
        detail: 'Aliases defined in SELECT are invisible to WHERE but visible to ORDER BY, because SELECT runs late.'
      },
      {
        term: 'Aggregates with GROUP BY',
        kind: 'method',
        statement: 'Aggregate functions such as **grouped counts** with `COUNT(*)` plus `SUM(amount)` plus `AVG(rating)` collapse each group to one row keyed by `GROUP BY category`. Every non aggregated output column must appear in the grouping key or inside an aggregate. Grouping turns millions of rows into dashboard ready summaries.',
        detail: 'Group by day with date_trunc for time series, and round averages at display time rather than in storage.'
      },
      {
        term: 'HAVING versus WHERE',
        kind: 'method',
        statement: 'The **group filter** `HAVING COUNT(*) > 5` tests aggregate results after grouping, while `WHERE stock > 0` tests raw rows before grouping. Putting an aggregate in WHERE is a syntax error because groups do not exist yet at that stage. Use WHERE for row cuts and HAVING for group cuts.',
        detail: 'Typical pattern filters active rows in WHERE, groups by customer, then keeps big spenders in HAVING.'
      },
      {
        term: 'NULL and three valued logic',
        kind: 'insight',
        statement: 'Missing values use **SQL NULL** tested with `IS NULL` rather than equals, because `NULL = NULL` evaluates to unknown instead of true. The **coalesce fallback** `COALESCE(nickname, name)` substitutes the first non null value for display. Ignoring three valued logic silently drops rows with nulls from NOT IN filters.',
        detail: 'Default nullable columns deliberately, coalesce at the edge, and prefer NOT EXISTS over NOT IN with nulls.'
      }
    ],
    examples: [
      {
        title: 'Build a sales dashboard query',
        problem: 'Show revenue per category for in stock products with more than five orders.',
        steps: [
          { label: 'Step 1: Filter rows first', text: '```sql\nSELECT category, COUNT(*) AS orders, SUM(amount) AS revenue\nFROM sales\nWHERE stock > 0\nGROUP BY category\n```\nWHERE trims to sellable rows before any grouping work begins.' },
          { label: 'Step 2: Keep big groups', text: '```sql\nSELECT category, COUNT(*) AS orders, SUM(amount) AS revenue\nFROM sales\nWHERE stock > 0\nGROUP BY category\nHAVING COUNT(*) > 5\nORDER BY revenue DESC\nLIMIT 10\n```\nHAVING tests the grouped count while ORDER plus LIMIT picks the top ten categories.' },
          { label: 'Step 3: Handle null names', text: '```sql\nSELECT COALESCE(category, \u0027uncategorized\u0027) AS category, SUM(amount) AS revenue\nFROM sales\nGROUP BY category\n```\nCoalesce labels null buckets so the chart shows a name instead of a blank.' }
        ],
        result: 'One scan filters, groups, trims, sorts, and pages, returning only chart ready rows.'
      },
      {
        title: 'Fix a WHERE versus HAVING bug',
        problem: 'This query errors by placing an aggregate in WHERE. Repair it.',
        steps: [
          { label: 'Step 1: Spot the error', text: '```sql\n-- BAD: aggregate before groups exist\n-- SELECT customer_id FROM orders WHERE COUNT(*) > 3 GROUP BY customer_id\n```\nCOUNT has no meaning before grouping, so the engine rejects the WHERE clause.' },
          { label: 'Step 2: Move to HAVING', text: '```sql\nSELECT customer_id, COUNT(*) AS orders\nFROM orders\nWHERE status = \u0027paid\u0027\nGROUP BY customer_id\nHAVING COUNT(*) > 3\n```\nWHERE keeps paid rows, GROUP builds per customer buckets, HAVING keeps frequent buyers.' },
          { label: 'Step 3: Verify order', text: '```sql\n-- logical flow: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT\n-- read in this order to predict which names are visible\n```\nAliases like orders are usable in ORDER BY but not in WHERE, matching execution order.' }
        ],
        result: 'Moving the aggregate test from WHERE to HAVING fixes the error and matches the logical pipeline.'
      }
    ],
    keyTakeaways: [
      'Filter rows with WHERE before grouping to keep work small.',
      'Read queries in logical order FROM plus WHERE plus GROUP plus HAVING.',
      'Group non aggregated columns or aggregate them, never mix bare.',
      'Use HAVING for tests on aggregates and WHERE for tests on rows.',
      'Test nulls with IS NULL and display fallbacks with COALESCE.'
    ],
    quiz: [
      {
        q: 'What is the logical execution order?',
        options: ['SELECT then FROM then WHERE', 'FROM then WHERE then GROUP then HAVING then SELECT then ORDER then LIMIT', 'LIMIT then WHERE then GROUP', 'GROUP then FROM then WHERE'],
        answer: 1,
        explanation: 'Filtering precedes grouping, grouping precedes group filtering, and projection plus sort plus limit finish the pipeline.'
      },
      {
        q: 'Where does COUNT(*) > 5 belong?',
        options: ['In WHERE', 'In HAVING', 'In FROM', 'In JOIN ON only'],
        answer: 1,
        explanation: 'Aggregates test grouped results, so they live in HAVING after GROUP BY, not in row level WHERE.'
      },
      {
        q: 'How do you test for missing values?',
        options: ['With equals NULL', 'With IS NULL', 'With greater than zero', 'With LIKE'],
        answer: 1,
        explanation: 'NULL never equals anything, so IS NULL is the only correct predicate for missing marks.'
      },
      {
        q: 'Why select few columns instead of star?',
        options: ['Star is faster', 'Narrow projection reduces I/O and clarifies contracts', 'Star enables grouping', 'Limit requires star'],
        answer: 1,
        explanation: 'Listing columns trims bytes, documents the contract, and survives schema additions that star would leak.'
      }
    ]
  },
  // ---------------------------------------------------------------- 15.2
  {
    sectionId: 'web-ch15-s2',
    readingTime: 9,
    intro: 'Relational power comes from keys that link tables and joins that reassemble them per query. This section covers primary and foreign keys, inner versus left joins, one to many and many to many shapes, and normalization. You will finish able to model features without duplication or orphan rows.',
    objectives: [
      'Declare primary keys and foreign keys with referential actions',
      'Choose INNER versus LEFT JOIN and predict NULL filled rows',
      'Model one to many and many to many with junction tables',
      'Normalize to third normal form and name when to denormalize'
    ],
    concepts: [
      {
        term: 'Primary and foreign keys',
        kind: 'definition',
        statement: 'A **primary key** such as `id SERIAL PRIMARY KEY` uniquely identifies each row while a **foreign key** such as `author_id INT REFERENCES users(id)` points at a parent row. Referential actions like **cascade delete** with `ON DELETE CASCADE` decide whether child rows vanish or block parent removal. Keys turn loose columns into enforced relationships.',
        detail: 'Use surrogate integer or UUID keys, index every foreign key, and prefer restrict over cascade for money tables.'
      },
      {
        term: 'INNER versus LEFT JOIN',
        kind: 'method',
        statement: 'An **inner join** with `INNER JOIN authors ON posts.author_id = authors.id` keeps only matched pairs, dropping orphans silently. A **left join** with `LEFT JOIN authors ON posts.author_id = authors.id` keeps every left row and fills missing right columns with NULL. Choosing wrong drops or invents rows in reports.',
        detail: 'Use inner for must have relations and left for optional ones, then coalesce the nullable side for display.'
      },
      {
        term: 'One to many and many to many',
        kind: 'definition',
        statement: 'A **one to many link** stores one `author_id` on many posts, while a **many to many link** needs a **junction table** such as `post_tags(post_id, tag_id)` with two foreign keys. Junction rows pair any post with any tag without duplicating either side. Composite primary keys on both ids block duplicate pairings.',
        detail: 'Index both junction columns and query through two joins from posts to tags.'
      },
      {
        term: 'Constraints beyond keys',
        kind: 'law',
        statement: 'Tables enforce quality with **unique guards** like `UNIQUE(email)`, **check rules** like `CHECK(price >= 0)`, and **not null marks** like `NOT NULL` on required columns. The **default value** clause such as `DEFAULT now()` stamps creation times without app code. Constraints reject bad writes at the lowest possible layer.',
        detail: 'Push invariants into the database so every app and script inherits the same guarantees.'
      },
      {
        term: 'Normalization to third normal form',
        kind: 'method',
        statement: 'Normalization removes duplication by giving each fact **one home table**, where **first normal form** bans repeating groups, **second normal form** bans partial key dependence, and **third normal form** bans transitive dependence. A **denormalized cache** such as `posts.comment_count` reintroduces redundancy deliberately for read speed with trigger upkeep. Normalize first, then denormalize with a measured reason.',
        detail: 'Split authors from posts, tags from post_tags, and orders from line items before optimizing reads.'
      }
    ],
    examples: [
      {
        title: 'List posts with authors and tags',
        problem: 'Return each post title with author name and a tag array, including untagged posts.',
        steps: [
          { label: 'Step 1: Join the must have side', text: '```sql\nSELECT p.title, u.name AS author\nFROM posts p\nINNER JOIN users u ON p.author_id = u.id\n```\nInner join is correct because every post must have an author.' },
          { label: 'Step 2: Add optional tags', text: '```sql\nSELECT p.title, u.name AS author, t.name AS tag\nFROM posts p\nINNER JOIN users u ON p.author_id = u.id\nLEFT JOIN post_tags pt ON pt.post_id = p.id\nLEFT JOIN tags t ON t.id = pt.tag_id\n```\nLeft joins keep untagged posts with NULL tag cells instead of dropping them.' },
          { label: 'Step 3: Aggregate tags', text: '```sql\nSELECT p.title, u.name AS author, COALESCE(array_agg(t.name) FILTER (WHERE t.name IS NOT NULL), ARRAY[]::text[]) AS tags\nFROM posts p\nINNER JOIN users u ON p.author_id = u.id\nLEFT JOIN post_tags pt ON pt.post_id = p.id\nLEFT JOIN tags t ON t.id = pt.tag_id\nGROUP BY p.title, u.name\n```\nAggregation collapses the tag fan out to one row per post with an empty array fallback.' }
        ],
        result: 'One query returns titles with authors and tag arrays, preserving posts that have no tags.'
      },
      {
        title: 'Normalize a spreadsheet orders table',
        problem: 'Split a flat orders sheet with repeated customer names into third normal form.',
        steps: [
          { label: 'Step 1: Spot repeating groups', text: '```sql\n-- BAD flat: orders(id, customer_name, customer_email, item_1, item_2)\n-- customer repeats per order, items repeat across columns\n```\nRepeating columns and duplicated customer facts violate first normal form.' },
          { label: 'Step 2: Split entities', text: '```sql\nCREATE TABLE customers (id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL);\nCREATE TABLE orders (id SERIAL PRIMARY KEY, customer_id INT REFERENCES customers(id), placed_at TIMESTAMPTZ DEFAULT now());\nCREATE TABLE order_items (order_id INT REFERENCES orders(id), sku TEXT NOT NULL, qty INT CHECK (qty > 0), PRIMARY KEY (order_id, sku));\n```\nEach fact lives once with keys linking the hierarchy plus constraints guarding quality.' },
          { label: 'Step 3: Reassemble with joins', text: '```sql\nSELECT o.id, c.name, SUM(oi.qty) AS units\nFROM orders o\nINNER JOIN customers c ON o.customer_id = c.id\nINNER JOIN order_items oi ON oi.order_id = o.id\nGROUP BY o.id, c.name\n```\nReports rejoin on demand, so updates to a customer name touch one row.' }
        ],
        result: 'Duplication vanishes, updates touch one row, and reports rebuild any view with joins.'
      }
    ],
    keyTakeaways: [
      'Identify rows with primary keys and link them with foreign keys.',
      'Use INNER for required relations and LEFT for optional ones.',
      'Bridge many to many with a junction table keyed on both ids.',
      'Enforce uniqueness, checks, and not null in the database.',
      'Normalize to third normal form before caching counts for speed.'
    ],
    quiz: [
      {
        q: 'What does LEFT JOIN preserve?',
        options: ['Only matched pairs', 'Every left row with NULL fill for misses', 'Only right rows', 'No rows'],
        answer: 1,
        explanation: 'Left join keeps all left inputs and extends misses with NULL on the right side.'
      },
      {
        q: 'How is many to many modeled?',
        options: ['One foreign key on posts', 'A junction table with two foreign keys', 'A JSON string', 'Duplicate tables'],
        answer: 1,
        explanation: 'Post tags pairs live in their own table so any post links to any tag without duplication.'
      },
      {
        q: 'What does ON DELETE CASCADE do?',
        options: ['Blocks parent delete', 'Deletes child rows with the parent', 'Nulls the primary key', 'Creates an index'],
        answer: 1,
        explanation: 'Cascade propagates parent removal to children, useful for owned rows but dangerous for money history.'
      },
      {
        q: 'What violates first normal form?',
        options: ['A primary key', 'Repeating item_1 plus item_2 columns', 'A foreign key', 'A timestamp default'],
        answer: 1,
        explanation: 'Repeating groups across columns must become rows in a child table with one value per cell.'
      },
      // Placement-pattern: outer join versus subquery for counts (original)
      {
        q: "Authors and books live in two tables. A report must list every author, including those with zero books, alongside a book count. Which query is correct?",
        options: ["`LEFT JOIN` from authors to books with `COUNT(books.id)` grouped by author, because the left side survives when no match exists", "`INNER JOIN`, because it preserves unmatched authors", "A correlated subquery per author row, because joins cannot compute counts", "Two separate queries with no join at all, because counts need no relation"],
        answer: 0,
        explanation: "Step 1: The data given is a parent table and a child table with a report needing zero-count rows included. Step 2: The governing rules are join preservation: inner joins drop unmatched parents while left joins keep them with NULL-extended child columns, and `COUNT(column)` skips NULLs so empty authors count zero. Step 3: Tracing the query, every author row survives the left join, matched books contribute countable ids, unmatched authors aggregate over NULLs to zero, and grouping yields one row per author. Step 4: The distractors fail because the inner join deletes exactly the rows the report needs, per-row subqueries scale as N plus one round trips, and unjoined queries cannot pair counts to authors. Step 5: Therefore the grouped left join is the correct query."
      }
    ]
  },
  // ---------------------------------------------------------------- 15.3
  {
    sectionId: 'web-ch15-s3',
    readingTime: 10,
    intro: 'Indexes make reads fly and transactions keep writes correct, but both punish misuse. This section covers B tree indexes, EXPLAIN verification, ACID guarantees, and the money move transaction with isolation pitfalls. You will finish able to speed a slow query and move money without losing a cent.',
    objectives: [
      'Create B tree indexes for WHERE plus ORDER plus JOIN patterns',
      'Read EXPLAIN ANALYZE to confirm index versus sequential scans',
      'State ACID and why each letter matters for money',
      'Write a locked money move transaction with rollback on failure'
    ],
    concepts: [
      {
        term: 'B tree indexes',
        kind: 'definition',
        statement: 'A **B tree index** such as `CREATE INDEX ON posts(author_id, created_at)` sorts key copies so equality plus range plus order lookups jump instead of scanning. Indexes speed **selective filters** in `WHERE` plus `ORDER BY` plus join keys but tax every write with upkeep. Index the predicates queries actually use, not every column.',
        detail: 'Composite order matters: equality columns first, then range, then sort. Measure with EXPLAIN before adding more.'
      },
      {
        term: 'EXPLAIN verification',
        kind: 'method',
        statement: 'The **plan inspector** `EXPLAIN ANALYZE SELECT ...` shows node types such as `Index Scan` versus `Seq Scan` with actual times and row counts. A good fix turns a sequential scan on a large table into an index scan with sharply lower execution time. Verification closes the loop between hypothesis and proof.',
        detail: 'Run EXPLAIN on production sized data, compare buffers and time before and after, and keep the plans in the review.'
      },
      {
        term: 'ACID guarantees',
        kind: 'law',
        statement: 'Safe money writes need **ACID transactions** where `Atomicity` makes all or nothing commits, `Consistency` preserves constraints, `Isolation` hides concurrent meddling, and `Durability` survives crashes via write ahead logs. The **transaction block** `BEGIN` through `COMMIT` groups statements into one atomic unit. Without ACID, concurrent debits can invent or erase funds.',
        detail: 'Default to transactions for multi statement writes, and keep them short to hold locks briefly.'
      },
      {
        term: 'Money move transaction',
        kind: 'method',
        statement: 'A correct transfer locks rows with **select for update** via `SELECT balance FROM accounts WHERE id IN (...) FOR UPDATE` then checks funds before updating. The **all or nothing block** debits one account and credits the other inside `BEGIN` and `COMMIT` with `ROLLBACK` on any error. Row locks serialize competing transfers so balances never go negative.',
        detail: 'Lock in id order to avoid deadlocks, validate balances in SQL with a guard clause, and retry serialization failures.'
      },
      {
        term: 'Isolation pitfalls and retries',
        kind: 'insight',
        statement: 'Concurrent transactions can hit **lost updates** where two reads plus writes clobber each other and **phantom reads** where new rows appear mid report. Stronger levels such as **serializable isolation** with `SET TRANSACTION ISOLATION LEVEL SERIALIZABLE` trade aborts for correctness. Application **retry loops** on serialization errors make the tradeoff invisible to users.',
        detail: 'Use read committed plus row locks for transfers, serializable for ledger invariants, and always retry safely.'
      }
    ],
    examples: [
      {
        title: 'Index a slow author feed and verify',
        problem: 'A feed filtering by author and sorting by date scans the whole table. Fix it.',
        steps: [
          { label: 'Step 1: See the scan', text: '```sql\nEXPLAIN ANALYZE SELECT * FROM posts WHERE author_id = 7 ORDER BY created_at DESC LIMIT 20\n-- Seq Scan on posts with filter, high execution time\n```\nThe plan scans every row because no index matches the filter plus sort.' },
          { label: 'Step 2: Add the index', text: '```sql\nCREATE INDEX posts_author_date_idx ON posts (author_id, created_at DESC)\n```\nEquality on author plus ordered dates matches the query shape exactly.' },
          { label: 'Step 3: Confirm the switch', text: '```sql\nEXPLAIN ANALYZE SELECT * FROM posts WHERE author_id = 7 ORDER BY created_at DESC LIMIT 20\n-- Index Scan using posts_author_date_idx, low execution time\n```\nThe new plan jumps to the author slice in order and stops after twenty rows.' }
        ],
        result: 'Feed latency drops from full scan to index range with proof in both plans.'
      },
      {
        title: 'Transfer funds without losing cents',
        problem: 'Move 100 units from account 1 to account 2 with overdraft protection.',
        steps: [
          { label: 'Step 1: Open and lock', text: '```sql\nBEGIN;\nSELECT balance FROM accounts WHERE id IN (1, 2) ORDER BY id FOR UPDATE;\n```\nRow locks in id order serialize rivals and block deadlocks from opposite lock order.' },
          { label: 'Step 2: Guarded move', text: '```sql\nUPDATE accounts SET balance = balance - 100 WHERE id = 1 AND balance >= 100;\n-- check row count equals one, else ROLLBACK for insufficient funds\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n```\nThe balance guard in SQL makes overdraft impossible even under races, and any error rolls back both legs.' },
          { label: 'Step 3: Retry serializable aborts', text: '```js\n// on error code 40001, retry the whole BEGIN through COMMIT block\n// keep the block short so locks release fast\n```\nSerialization failures replay cleanly because the block has no side effects outside the database.' }
        ],
        result: 'Money moves atomically with locked rows, guarded debits, and safe retries on contention.'
      }
    ],
    keyTakeaways: [
      'Index equality plus sort patterns that real queries use.',
      'Prove every index with EXPLAIN ANALYZE before and after.',
      'Wrap multi statement writes in BEGIN through COMMIT blocks.',
      'Lock money rows with FOR UPDATE and guard balances in SQL.',
      'Retry serialization aborts and keep transactions short.'
    ],
    quiz: [
      {
        q: 'What does EXPLAIN ANALYZE show?',
        options: ['Only the SQL text', 'The plan nodes with actual times and row counts', 'The password hash', 'The npm version'],
        answer: 1,
        explanation: 'It executes the query and reports Index versus Seq scans with measured time and rows.'
      },
      {
        q: 'Why use SELECT FOR UPDATE in transfers?',
        options: ['To read faster', 'To lock rows so concurrent transfers serialize', 'To skip transactions', 'To create indexes'],
        answer: 1,
        explanation: 'Row locks force rivals to wait, preventing lost updates that overdraft balances.'
      },
      {
        q: 'What does Atomicity guarantee?',
        options: ['Partial commits allowed', 'All statements commit or all roll back together', 'Faster scans', 'No locks needed'],
        answer: 1,
        explanation: 'Atomic blocks never leave half applied money moves after a crash or error.'
      },
      {
        q: 'How should serialization error 40001 be handled?',
        options: ['Ignore it', 'Retry the whole transaction block', 'Delete the index', 'Double the amount'],
        answer: 1,
        explanation: 'Serializable aborts signal safe retry, and short pure SQL blocks replay without side effects.'
      }
    ]
  },
  // ---------------------------------------------------------------- 15.4
  {
    sectionId: 'web-ch15-s4',
    readingTime: 9,
    intro: 'Modern Postgres also handles flexible JSON, ranked text search, and readable analytics without leaving the database. This section covers JSONB operators with GIN indexes, full text vectors, CTEs, and window functions. You will finish able to build faceted catalogs and leaderboards in SQL.',
    objectives: [
      'Store and query JSONB with containment and path operators',
      'Rank text search with tsvector plus tsquery plus ts_rank',
      'Structure reports with WITH common table expressions',
      'Rank and compare rows with ROW_NUMBER plus RANK plus LAG'
    ],
    concepts: [
      {
        term: 'JSONB storage and operators',
        kind: 'definition',
        statement: 'A **JSONB column** such as `attrs JSONB` stores validated binary JSON with operators like `attrs -> \u0027color\u0027` for objects and `attrs ->> \u0027color\u0027` for text. Containment with the **contains operator** `attrs @> \u0027{color: red}\u0027` style JSON tests whole subdocuments. JSONB suits sparse product attributes without schema migrations per key.',
        detail: 'Prefer JSONB over JSON for indexing, validate shapes with check constraints, and promote hot keys to real columns later.'
      },
      {
        term: 'JSONB GIN indexes',
        kind: 'method',
        statement: 'Flexible queries stay fast with a **GIN index** via `CREATE INDEX ON products USING GIN (attrs)` that maps keys and values to rows. The planner uses it for **containment queries** with `@>` plus existence with `?` operators. Without GIN, every JSON filter scans the table.',
        detail: 'Add GIN when JSON filters appear in production, and combine with B tree on category for faceted search.'
      },
      {
        term: 'Full text search with vectors',
        kind: 'method',
        statement: 'Text search builds a **document vector** with `to_tsvector(title || body)` and queries it with **parsed queries** via `to_tsquery(\u0027postgres & tuning\u0027)` for stemming and ranking. Relevance with **rank scoring** `ts_rank(vec, query)` orders hits while headline highlights snippets. Postgres search fits catalogs without operating a separate engine.',
        detail: 'Store vectors in a generated column, index with GIN, and weight titles above bodies for better ranking.'
      },
      {
        term: 'Common table expressions',
        kind: 'method',
        statement: 'A **CTE block** starting `WITH active AS (SELECT ...)` names each step so reports read top to bottom instead of nesting inward. **Recursive CTEs** with `UNION ALL` walk trees such as org charts and comment threads. CTEs favor clarity, with materialization hints only when plans need guidance.',
        detail: 'Build one CTE per logical stage such as filtered plus scored plus ranked, then select from the last.'
      },
      {
        term: 'Window functions',
        kind: 'method',
        statement: 'Analytics without collapsing rows use **window calls** such as `ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)` that number peers while keeping detail rows. Peers share **ranking** via `RANK()` while **lag access** `LAG(salary) OVER (...)` compares each row to its predecessor. Windows power leaderboards, cohorts, and running totals in one pass.',
        detail: 'Partition by group, order by metric, and filter ranked wrappers in an outer query since windows run after WHERE.'
      }
    ],
    examples: [
      {
        title: 'Filter products by JSONB attributes',
        problem: 'Find red cotton shirts from a flexible attrs column with an index.',
        steps: [
          { label: 'Step 1: Model the column', text: '```sql\nALTER TABLE products ADD COLUMN attrs JSONB DEFAULT \u0027{}\u0027\n-- example row: {color: red, fabric: cotton, size: M}\n```\nDefaults keep old rows valid while new attributes land without migrations.' },
          { label: 'Step 2: Index and query', text: '```sql\nCREATE INDEX products_attrs_gin ON products USING GIN (attrs);\nSELECT name FROM products WHERE attrs @> \u0027{color: red, fabric: cotton}\u0027\n```\nGIN serves the containment test while the JSON literal states both required pairs.' },
          { label: 'Step 3: Extract one field', text: '```sql\nSELECT name, attrs ->> \u0027size\u0027 AS size FROM products WHERE category = \u0027shirts\u0027\n```\nArrow text extraction projects single keys for display without fetching whole documents.' }
        ],
        result: 'Faceted filters run indexed on schemaless attributes with readable extraction for UI chips.'
      },
      {
        title: 'Rank search plus leaderboard in one report',
        problem: 'Search docs by relevance then rank authors by post count with windows.',
        steps: [
          { label: 'Step 1: Build the vector query', text: '```sql\nSELECT title, ts_rank(vec, q) AS rank\nFROM docs, to_tsquery(\u0027postgres & tuning\u0027) AS q\nWHERE vec @@ q\nORDER BY rank DESC\nLIMIT 10\n```\nVector match plus rank orders true text hits above keyword stuffing.' },
          { label: 'Step 2: Stage with a CTE', text: '```sql\nWITH counts AS (\n  SELECT author_id, COUNT(*) AS posts FROM docs GROUP BY author_id\n)\nSELECT author_id, posts, RANK() OVER (ORDER BY posts DESC) AS place FROM counts\n```\nThe CTE counts first, then the window ranks authors without collapsing detail.' },
          { label: 'Step 3: Compare with LAG', text: '```sql\nSELECT author_id, posts, LAG(posts) OVER (ORDER BY posts DESC) AS next_best FROM counts\n```\nLag shows the gap to the rival above, which leaderboards display as units behind.' }
        ],
        result: 'Search returns ranked hits while the same pattern stages counts then windows for live leaderboards.'
      }
    ],
    keyTakeaways: [
      'Use JSONB with arrow operators for sparse attributes.',
      'Index JSONB containment with GIN for faceted filters.',
      'Serve catalog search with tsvector plus tsquery plus ts_rank.',
      'Stage reports in WITH blocks for readable pipelines.',
      'Rank and compare with windows that keep detail rows.'
    ],
    quiz: [
      {
        q: 'Which operator tests JSONB containment?',
        options: ['LIKE', 'At-greater-than for contains', 'PLUS', 'JOIN'],
        answer: 1,
        explanation: 'The contains operator checks that the stored document includes the given subdocument pairs.'
      },
      {
        q: 'What index serves tsvector search?',
        options: ['B tree only', 'GIN on the vector column', 'No index needed', 'Hash on id'],
        answer: 1,
        explanation: 'GIN maps lexemes to rows so vector match queries jump instead of scanning text.'
      },
      {
        q: 'What is a CTE good for?',
        options: ['Hiding SQL', 'Naming each report stage for readability', 'Skipping validation', 'Storing passwords'],
        answer: 1,
        explanation: 'WITH blocks label filtered plus scored plus ranked steps so reports read linearly.'
      },
      {
        q: 'How does RANK differ from ROW_NUMBER?',
        options: ['They are identical', 'RANK shares places on ties while ROW_NUMBER never ties', 'RANK deletes rows', 'ROW_NUMBER needs no order'],
        answer: 1,
        explanation: 'Peers with equal metrics share a RANK place with a gap after, while ROW_NUMBER numbers every row uniquely.'
      }
    ]
  },
  // ---------------------------------------------------------------- 15.5
  {
    sectionId: 'web-ch15-s5',
    readingTime: 7,
    intro: 'Schema changes, seed data, connection load, and backups decide whether a database survives team speed and production accidents. This section covers versioned migrations, idempotent seeds, pooling, and backup plus restore drills. You will finish able to evolve schema safely and recover from disaster.',
    objectives: [
      'Write reversible versioned migrations with up plus down steps',
      'Seed with idempotent scripts and factories for tests',
      'Size connection pools and add PgBouncer for scale',
      'Back up with pg_dump plus WAL and practice restores'
    ],
    concepts: [
      {
        term: 'Versioned migrations',
        kind: 'method',
        statement: 'Every schema change ships as a **versioned migration** with `up` applying and `down` reverting, run in order by tools such as `prisma migrate dev` or node migrators. Migrations are **append only history**, never edited after merge, with data backfills in separate steps. Ordered files make staging and production converge by running the same chain.',
        detail: 'Keep migrations small, review generated SQL, and test rollback on a copy before release day.'
      },
      {
        term: 'Seeds and factories',
        kind: 'method',
        statement: 'Repeatable **seed scripts** such as `seed.ts` insert demo users with `upsert` so reruns never duplicate, while **factories** generate fake posts per test with deterministic seeds. Seeds use **idempotent writes** keyed on natural uniques like email. Fresh clones boot to a useful demo with one command.',
        detail: 'Separate demo seeds from test factories, and never seed production with fake admin passwords.'
      },
      {
        term: 'Connection pooling',
        kind: 'method',
        statement: 'Apps share a **connection pool** such as `new Pool({ max: 20 })` that reuses sockets instead of connecting per request. Pool **sizing math** sets max near core count times two plus spindle allowances, with `idleTimeout` evicting quiet sockets. Transaction poolers like **PgBouncer** multiplex thousands of serverless connections into few Postgres backends.',
        detail: 'Hold connections briefly, never across user think time, and monitor wait queue depth as the scale signal.'
      },
      {
        term: 'Backups with pg_dump and WAL',
        kind: 'method',
        statement: 'Logical snapshots use **pg_dump** via `pg_dump --format=custom --file=backup.dump` for portable restores with `pg_restore`, while continuous **WAL archiving** enables point in time recovery to any second. Nightly dumps plus WAL streams cover both oops deletes and region loss. Encrypted offsite copies protect against account compromise.',
        detail: 'Dump nightly, stream WAL continuously, and retain weeks to satisfy audit windows.'
      },
      {
        term: 'Restore drills and RPO plus RTO',
        kind: 'insight',
        statement: 'Backups only count when **restore drills** prove them, measured by **recovery objectives** `RPO` for data loss window and `RTO` for downtime window. Teams rehearse **table level restores** plus full cluster rebuilds on isolated hosts quarterly. Untested dumps fail exactly when needed, with missing extensions or roles.',
        detail: 'Time every drill, document the runbook steps, and alert when the last successful restore ages past policy.'
      }
    ],
    examples: [
      {
        title: 'Migrate plus seed a comment count',
        problem: 'Add a posts comment count column, backfill it, and seed demo data idempotently.',
        steps: [
          { label: 'Step 1: Write the migration', text: '```sql\nALTER TABLE posts ADD COLUMN comment_count INT NOT NULL DEFAULT 0;\n-- backfill: UPDATE posts p SET comment_count = (SELECT COUNT(*) FROM comments c WHERE c.post_id = p.id)\n-- down: ALTER TABLE posts DROP COLUMN comment_count\n```\nAdd with a default so old rows stay valid, then backfill from the child table.' },
          { label: 'Step 2: Seed idempotently', text: '```js\n// await db.user.upsert({ where: { email: "demo@example.com" }, update: {}, create: { email: "demo@example.com", name: "Demo" } });\n// reruns match on email and skip insert when present\n```\nUpsert keyed on email makes seeds safe to run on every fresh clone.' },
          { label: 'Step 3: Pool it', text: '```js\nconst { Pool } = require("pg");\nconst pool = new Pool({ max: 20, idleTimeoutMillis: 30000 });\n// await pool.query("SELECT 1");\n```\nTwenty shared sockets serve hundreds of requests without connecting per call.' }
        ],
        result: 'Schema evolves with rollback, data backfills once, seeds rerun safely, and connections stay bounded.'
      },
      {
        title: 'Script nightly backup plus restore check',
        problem: 'Dump nightly, keep WAL for point in time, and verify with a restore.',
        steps: [
          { label: 'Step 1: Dump script', text: '```bash\npg_dump --format=custom --file=backup.dump mydb\nls -lh backup.dump\n```\nCustom format compresses and pairs with pg_restore for selective table recovery.' },
          { label: 'Step 2: Continuous WAL', text: '```bash\n# archive_command = test and copy to offsite store\n# retain weeks of segments for any second recovery\n```\nWAL segments bridge nightly dumps so recovery can target the moment before a bad delete.' },
          { label: 'Step 3: Drill restore', text: '```bash\npg_restore --dbname=staging --clean backup.dump\n# run smoke queries, measure RTO, record RPO achieved\n```\nQuarterly restores to staging prove the dump plus WAL chain actually boots.' }
        ],
        result: 'Nightly plus continuous coverage meets tight RPO and RTO with a practiced runbook.'
      }
    ],
    keyTakeaways: [
      'Ship schema as append only migrations with tested down steps.',
      'Seed with upsert on natural keys so reruns never duplicate.',
      'Pool connections with small max and add PgBouncer at scale.',
      'Combine nightly dumps with WAL for point in time recovery.',
      'Drill restores quarterly and track RPO plus RTO explicitly.'
    ],
    quiz: [
      {
        q: 'What makes a migration safe?',
        options: ['Editing old files', 'Small append only steps with reviewed up plus down', 'Skipping staging', 'Manual prod edits'],
        answer: 1,
        explanation: 'Ordered immutable files with rollback converge every environment by running the same chain.'
      },
      {
        q: 'How are seeds idempotent?',
        options: ['Plain inserts', 'Upsert on unique keys such as email', 'Delete all first', 'Random emails'],
        answer: 1,
        explanation: 'Matching on natural uniques turns reruns into no ops instead of duplicate rows.'
      },
      {
        q: 'What does PgBouncer do?',
        options: ['Backs up data', 'Multiplexes many app connections into few Postgres backends', 'Runs migrations', 'Sends email'],
        answer: 1,
        explanation: 'Transaction pooling absorbs serverless fan out that would otherwise exhaust max connections.'
      },
      {
        q: 'What do RPO and RTO measure?',
        options: ['Code coverage', 'Data loss window and downtime window for recovery', 'Query speed', 'npm size'],
        answer: 1,
        explanation: 'Recovery objectives quantify how much data and time the business can lose, which drills must prove.'
      }
    ]
  }
]

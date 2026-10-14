import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 16
// Documents and Speed: MongoDB, Prisma, Drizzle and Redis (Sections 16.1 – 16.5)
// Master study content.
// ============================================================================

export const webCh16Content: SectionContent[] = [
  // ---------------------------------------------------------------- 16.1
  {
    sectionId: 'web-ch16-s1',
    readingTime: 8,
    intro: 'MongoDB stores flexible documents instead of rigid rows, which fits catalogs and content with varied shapes. This section covers document CRUD, Mongoose schemas with validation, embed versus reference design, and indexing. You will finish able to choose documents wisely and query them efficiently.',
    objectives: [
      'Model documents in collections with ObjectId keys',
      'Run CRUD with query operators and projections',
      'Enforce shape with Mongoose schemas and validators',
      'Decide embed versus reference and index hot paths'
    ],
    concepts: [
      {
        term: 'Documents and collections',
        kind: 'definition',
        statement: 'A **document store** keeps JSON like objects such as `db.users.insertOne({ name: "Ada" })` grouped in **collections** without a fixed schema. Each document carries a unique **ObjectId key** in `_id` that sorts by creation time. Flexible fields suit catalogs where sparse attributes vary per item.',
        detail: 'Use documents for varied shapes with independent lifecycles, and tables when joins plus transactions dominate.'
      },
      {
        term: 'CRUD with operators',
        kind: 'method',
        statement: 'Reads filter with **query operators** such as greater than in `find({ age: { gt: 18 } })` written with the dollar gt operator in real shells. Writes use **atomic modifiers** with `updateOne(filter, { set: { name: "Ada" } })` written with the dollar set operator to change fields in place. Projections plus limits trim payloads like SQL selects.',
        detail: 'Index filter keys, limit page sizes, and project only needed fields for mobile lists.'
      },
      {
        term: 'Mongoose schema and validation',
        kind: 'method',
        statement: 'Mongoose adds **typed schemas** via `new Schema({ email: { type: String, required: true } })` that cast and validate before writes. Built in **validators** such as `enum: ["admin", "user"]` plus `minlength: 2` reject bad docs with field errors. Middleware hooks hash passwords and stamp slugs consistently.',
        detail: 'Keep validation in the schema so every writer inherits the same rules, and add unique indexes for emails.'
      },
      {
        term: 'Embed versus reference',
        kind: 'law',
        statement: 'Small owned data belongs **embedded** such as `address: { city: "Paris" }` inside the parent for one read retrieval, while shared or large data belongs **referenced** with `author: { type: ObjectId, ref: "User" }` plus `populate` joins. Embedding favors read locality and atomic updates, while references avoid duplication and unbounded growth. The rule is embed what belongs together and reference what stands alone.',
        detail: 'Embed addresses and line items, reference authors and tags, and never embed arrays that grow without bound.'
      },
      {
        term: 'Indexes in Mongo',
        kind: 'method',
        statement: 'Hot filters need **secondary indexes** created with `createIndex({ email: 1 }, { unique: true })` for point lookups and login guards. Text search uses a **text index** declared on title plus body for keyword queries. Compound order follows equality plus sort plus range, mirroring B tree wisdom from relational stores.',
        detail: 'Index login emails uniquely, feed keys compoundly, and review slow logs with explain plans.'
      }
    ],
    examples: [
      {
        title: 'Model a blog with embed versus reference',
        problem: 'Decide what embeds in posts and what references other collections.',
        steps: [
          { label: 'Step 1: Embed owned comments preview', text: '```js\nconst postSchema = { title: "Hello", commentsPreview: [{ name: "Ada", text: "Nice" }] };\n// small recent slice embeds for one read card render\n```\nPreview embeds keep list views to one fetch without growing the document.' },
          { label: 'Step 2: Reference authors', text: '```js\nconst { Schema } = require("mongoose");\nconst post = new Schema({ title: String, author: { type: Schema.Types.ObjectId, ref: "User" } });\n// await Post.find().populate("author", "name")\n```\nAuthors live once in users and populate on demand, so name changes touch one row.' },
          { label: 'Step 3: Cap growth', text: '```js\n// full comments live in a comments collection keyed by postId\n// post keeps commentCount cached, updated by a job\n```\nUnbounded threads never embed fully, which avoids sixteen megabyte document limits.' }
        ],
        result: 'Cards render in one read, authors stay canonical, and threads scale without document bloat.'
      },
      {
        title: 'Page users with an index',
        problem: 'Support email lookup plus paged newest users efficiently.',
        steps: [
          { label: 'Step 1: Add the index', text: '```js\n// db.users.createIndex({ createdAt: -1 })\n// db.users.createIndex({ email: 1 }, { unique: true })\n```\nSort plus unique lookups each get a matching index for jumps instead of scans.' },
          { label: 'Step 2: Query a page', text: '```js\nconst users = await User.find({}).sort({ createdAt: -1 }).limit(20).select("name email");\n// cursor variant passes last createdAt for stable feeds\n```\nSort plus limit plus projection mirrors SQL paging with narrow payloads.' },
          { label: 'Step 3: Filter adults', text: '```js\n// adult filter uses the dollar gt operator on age in the shell\n// app code maps ageGt param to { age: { greaterThan: 18 } } via the driver\n```\nRange filters stay indexed when the operator targets the leading indexed key.' }
        ],
        result: 'Logins hit a unique index, feeds walk a sort index, and pages stay narrow and stable.'
      }
    ],
    keyTakeaways: [
      'Store varied independent shapes as documents with ObjectId keys.',
      'Filter with operators and update with atomic modifiers in place.',
      'Validate once in Mongoose schemas with required plus enum rules.',
      'Embed owned small data and reference shared or growing data.',
      'Index login plus feed patterns and populate references selectively.'
    ],
    quiz: [
      {
        q: 'When should data embed?',
        options: ['Shared authors across posts', 'Small owned addresses read with the parent', 'Unbounded comment threads', 'Tags reused everywhere'],
        answer: 1,
        explanation: 'Owned small slices read together embed for locality, while shared or growing sets reference to avoid duplication.'
      },
      {
        q: 'What does populate do?',
        options: ['Creates an index', 'Resolves a reference id into the linked document', 'Deletes orphans', 'Hashes passwords'],
        answer: 1,
        explanation: 'Populate follows the ref path and fetches the linked user or tag in one extra query.'
      },
      {
        q: 'Why cap embedded arrays?',
        options: ['For prettier JSON', 'To avoid unbounded growth toward document size limits', 'To skip validation', 'To disable indexes'],
        answer: 1,
        explanation: 'Large arrays bloat documents and hit size caps, so full threads live in their own collection.'
      },
      {
        q: 'Which field deserves a unique index?',
        options: ['nickname with duplicates', 'Login email', 'Free text bio', 'Avatar bytes'],
        answer: 1,
        explanation: 'Login lookups need point speed plus a uniqueness guard that the database enforces.'
      }
    ]
  },
  // ---------------------------------------------------------------- 16.2
  {
    sectionId: 'web-ch16-s2',
    readingTime: 9,
    intro: 'Prisma brings typed database access with a declarative schema and an auto generated client. This section covers schema blocks with models and relations, migrations, typed queries, and N plus one avoidance. You will finish able to ship Postgres features with end to end type safety.',
    objectives: [
      'Declare datasource plus generator plus models in schema.prisma',
      'Model one to many and many to many with relation fields',
      'Evolve with prisma migrate dev plus deploy workflows',
      'Query with include versus select and avoid N plus one'
    ],
    concepts: [
      {
        term: 'Schema blocks and models',
        kind: 'definition',
        statement: 'A Prisma schema declares a **datasource block** with `datasource db { provider = "postgresql" }` plus a **generator block** with `generator client { provider = "prisma-client-js" }` and data **models** like `model User { id Int }`. Models map to tables while fields map to columns with native types. One file versions the whole data contract.',
        detail: 'Keep schema.prisma in git, review generated SQL, and split large schemas by domain with clear names.'
      },
      {
        term: 'Relations in Prisma',
        kind: 'method',
        statement: 'One to many links pair a **relation field** such as `posts Post[]` on User with `author User @relation(fields: [authorId])` on Post plus its foreign key. Many to many can use an **implicit join** with `tags Tag[]` on both sides for simple cases or an explicit join model for extra columns. Relation syntax makes joins typed and discoverable.',
        detail: 'Prefer explicit join models when the pairing needs dates, roles, or states of its own.'
      },
      {
        term: 'Migrations with Prisma Migrate',
        kind: 'method',
        statement: 'Schema edits flow through **versioned migrations** via `prisma migrate dev` locally and `prisma migrate deploy` in production with SQL kept in history. The **studio browser** `prisma studio` inspects rows during development without raw SQL. Deploy pipelines run migrate deploy before starting the new code.',
        detail: 'Never edit applied migrations, squash only before merge, and back up before risky rewrites.'
      },
      {
        term: 'Typed client queries',
        kind: 'method',
        statement: 'The generated **Prisma client** exposes `prisma.user.findMany({ where: { active: true } })` with autocomplete plus compile time field checks. Filters compose with **combinators** such as `AND` plus `OR` plus `NOT` while `orderBy` plus `take` plus `skip` page deterministically. Typed results remove a class of column rename bugs.',
        detail: 'Select narrowly in hot paths, order by a unique key for stable pages, and log queries in development.'
      },
      {
        term: 'N plus one avoidance with include',
        kind: 'law',
        statement: 'Looping queries cause **N plus one** where one list plus per row author fetches explode round trips, fixed by **eager loading** with `include: { author: true }` that joins in one batched query. Narrower needs use **select shaping** with `select: { title: true, author: { select: { name: true } } }` to fetch only required columns. Batch at the query, not in application loops.',
        detail: 'Default to include for detail views, select for cards, and assert query counts in integration tests. This kills N+1 loops with one batched fetch.'
      }
    ],
    examples: [
      {
        title: 'Model users, posts and tags',
        problem: 'Write Prisma models for authors with posts plus shared tags.',
        steps: [
          { label: 'Step 1: Users and posts', text: '```ts\nmodel User {\n  id    Int    @id @default(autoincrement())\n  email String @unique\n  posts Post[]\n}\nmodel Post {\n  id       Int  @id @default(autoincrement())\n  title    String\n  authorId Int\n  author   User @relation(fields: [authorId], references: [id])\n}\n```\nOne to many pairs an array side with a relation plus foreign key side.' },
          { label: 'Step 2: Tag join', text: '```ts\nmodel Tag {\n  id    Int    @id @default(autoincrement())\n  name  String @unique\n  posts Post[]\n}\n// add tags Tag[] on Post for implicit many to many in simple cases\n```\nSimple tag clouds use implicit joins while dated assignments need an explicit PostTag model.' },
          { label: 'Step 3: Migrate', text: '```bash\nprisma migrate dev --name add-posts-and-tags\nprisma studio\n```\nDev migration generates SQL plus updates the client, and studio browses the result.' }
        ],
        result: 'Typed models version relations with SQL history and an inspectable dev database.'
      },
      {
        title: 'Fix N plus one in a post list',
        problem: 'A list fires one author query per post. Collapse it with include.',
        steps: [
          { label: 'Step 1: Show the trap', text: '```ts\nconst posts = await prisma.post.findMany({ take: 20 });\n// then per post: await prisma.user.findUnique({ where: { id: p.authorId } })\n// twenty posts cause twenty extra round trips\n```\nLoops over relations multiply queries linearly with page size.' },
          { label: 'Step 2: Eager load', text: '```ts\nconst posts = await prisma.post.findMany({\n  take: 20,\n  include: { author: { select: { name: true } } }\n});\n```\nInclude batches authors into the same round trip with only the name column.' },
          { label: 'Step 3: Assert counts', text: '```ts\n// test asserts query count equals two at most for the page\n// card view uses select title plus author name, detail uses full include\n```\nCount assertions in tests prevent regressions when new fields tempt new loops.' }
        ],
        result: 'Page cost drops to one batched query with narrow columns and a guard against future loops.'
      }
    ],
    keyTakeaways: [
      'Version datasource plus models in one schema file.',
      'Express relations with fields that the client can traverse typed.',
      'Migrate with dev locally and deploy in prod pipelines.',
      'Query typed with where plus orderBy plus take for stable pages.',
      'Batch relations with include and narrow with select.'
    ],
    quiz: [
      {
        q: 'What does include do?',
        options: ['Deletes rows', 'Eager loads relations in the same batched query', 'Creates a migration', 'Starts the server'],
        answer: 1,
        explanation: 'Include joins authors or tags with posts so lists avoid per row lookups.'
      },
      {
        q: 'When is an explicit join model needed?',
        options: ['Simple tag links', 'When the pairing carries its own columns such as assigned date', 'For single tables', 'Never'],
        answer: 1,
        explanation: 'Extra columns on the pairing need their own model instead of an implicit many to many.'
      },
      {
        q: 'Which command migrates production?',
        options: ['prisma migrate dev', 'prisma migrate deploy', 'prisma studio', 'npm run dev'],
        answer: 1,
        explanation: 'Deploy applies pending SQL without interactive prompts, fitting CI plus release pipelines.'
      },
      {
        q: 'How do you page stably with Prisma?',
        options: ['Random skip only', 'orderBy unique key with take plus cursor', 'No order', 'Select all then slice in JS'],
        answer: 1,
        explanation: 'Ordered unique keys plus take with cursor anchors pages like SQL cursor paging.'
      }
    ]
  },
  // ---------------------------------------------------------------- 16.3
  {
    sectionId: 'web-ch16-s3',
    readingTime: 8,
    intro: 'Drizzle keeps SQL visible while adding TypeScript safety, the opposite tradeoff from Prisma abstraction. This section covers table definitions as code, the query builder, relational queries, and transactions. You will finish able to pick Prisma versus Drizzle per project with clear reasons.',
    objectives: [
      'Define tables with pgTable plus column helpers',
      'Select with db.select plus from plus where helpers',
      'Load relations with relational query syntax',
      'Run atomic multi statement work in db.transaction blocks'
    ],
    concepts: [
      {
        term: 'Tables as TypeScript code',
        kind: 'definition',
        statement: 'Drizzle defines tables with **code first tables** such as `pgTable("users", { id: serial("id").primaryKey() })` that stay close to SQL types. Columns use helpers like **typed columns** `varchar("email", { length: 255 })` plus `timestamp("createdAt")` with constraints inline. The definition is the migration source and the type source at once.',
        detail: 'Name tables snake case in SQL and camel case in code, and keep constraints beside the columns they guard.'
      },
      {
        term: 'Core query builder',
        kind: 'method',
        statement: 'Queries compose with the **select builder** `db.select().from(users).where(eq(users.active, true))` using helpers like `eq` plus `and` plus `ilike`. The builder emits **parameterized SQL** so values never interpolate into strings. Reading the chain predicts the SQL without hiding it.',
        detail: 'Compose filters with and plus or helpers, order with asc plus desc, and limit pages explicitly.'
      },
      {
        term: 'Relational queries v2',
        kind: 'method',
        statement: 'Nested reads use **relational queries** such as `db.query.users.findMany({ with: { posts: true } })` after declaring **relation maps** with `defineRelations`. The syntax mirrors Prisma include while staying on Drizzle tables. Eager maps batch children instead of looping queries.',
        detail: 'Declare one to many plus many to many maps once, then reuse with across list and detail views.'
      },
      {
        term: 'Transactions in Drizzle',
        kind: 'method',
        statement: 'Atomic writes run in a **tx block** via `db.transaction(async (tx) => { await tx.update(...) })` where any throw rolls back all steps. Row locks use **for update fragments** with `for: "update"` on selects inside the block. Short blocks with ordered locks avoid deadlocks like raw SQL.',
        detail: 'Pass tx into repositories so every write in the unit shares the same connection.'
      },
      {
        term: 'Prisma versus Drizzle choice',
        kind: 'insight',
        statement: 'The **abstraction tradeoff** favors `Prisma` for rapid typed CRUD with migrations included and `Drizzle` for SQL first teams wanting edge friendly queries. Prisma **hides SQL** behind include while Drizzle **shows SQL** through builders close to the wire. Choose Prisma for product speed and Drizzle for query control plus small bundles.',
        detail: 'Prototypes and admin tools lean Prisma, while performance tuned APIs and edge workers lean Drizzle.'
      }
    ],
    examples: [
      {
        title: 'Define tables and select a feed',
        problem: 'Create users plus posts tables and query active authors newest first.',
        steps: [
          { label: 'Step 1: Define tables', text: '```ts\nimport { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";\nexport const users = pgTable("users", {\n  id: serial("id").primaryKey(),\n  email: varchar("email", { length: 255 }).notNull().unique(),\n  active: boolean("active").default(true)\n});\n```\nCode first columns carry SQL names plus constraints in one declaration.' },
          { label: 'Step 2: Select with helpers', text: '```ts\nimport { eq, desc } from "drizzle-orm";\n// await db.select().from(users).where(eq(users.active, true)).orderBy(desc(users.id)).limit(20)\n```\nHelpers compose filters plus sort plus limit into parameterized SQL.' },
          { label: 'Step 3: Load relations', text: '```ts\n// await db.query.users.findMany({ with: { posts: { limit: 3 } } })\n// relations declared once with defineRelations maps\n```\nNested with batches children for cards without manual joins.' }
        ],
        result: 'Tables read like SQL, queries stay typed, and relations batch without loops.'
      },
      {
        title: 'Move money in a Drizzle transaction',
        problem: 'Debit one account and credit another atomically with guards.',
        steps: [
          { label: 'Step 1: Open the block', text: '```ts\nawait db.transaction(async (tx) => {\n  // all queries below share tx connection\n});\n```\nAny throw inside rolls back every write in the block.' },
          { label: 'Step 2: Guarded updates', text: '```ts\n// tx.update(accounts).set({ b: 1 }).where(eq(accounts.id, 1))\n// check affected rows equals one else throw for insufficient funds\n// tx.update(accounts).set({ b: 2 }).where(eq(accounts.id, 2))\n```\nRow count checks enforce overdraft protection before the credit leg.' },
          { label: 'Step 3: Lock order', text: '```ts\n// select both rows with for update ordered by id inside tx first\n// keeps concurrent transfers from deadlocking on opposite order\n```\nOrdered locks plus short blocks keep contention safe and fast.' }
        ],
        result: 'Both legs commit together with locked rows and guarded debits, matching raw SQL safety.'
      }
    ],
    keyTakeaways: [
      'Define pgTable columns with SQL names plus inline constraints.',
      'Build selects with eq plus and plus order helpers, never concat.',
      'Eager load with relational with maps for batched children.',
      'Wrap money moves in tx blocks with ordered row locks.',
      'Pick Prisma for speed and Drizzle for SQL control at the edge.'
    ],
    quiz: [
      {
        q: 'What does db.select().from().where() do?',
        options: ['Sends email', 'Builds parameterized SQL from typed helpers', 'Runs migrations', 'Starts Redis'],
        answer: 1,
        explanation: 'Helpers like eq compose safe SQL with bound values instead of string interpolation.'
      },
      {
        q: 'How are Drizzle relations loaded?',
        options: ['Manual loops only', 'With maps in db.query findMany calls', 'With CSS', 'With DNS'],
        answer: 1,
        explanation: 'Declared relation maps enable with clauses that batch children like include.'
      },
      {
        q: 'What happens on throw inside db.transaction?',
        options: ['Partial commit', 'Full rollback of the block', 'Auto retry forever', 'Index creation'],
        answer: 1,
        explanation: 'The block is atomic, so any error rolls back every write inside.'
      },
      {
        q: 'When is Drizzle the better fit?',
        options: ['When SQL control plus small edge bundles matter', 'When no database exists', 'When only static HTML ships', 'Always for email'],
        answer: 0,
        explanation: 'SQL first builders stay close to the wire with tiny runtimes suited to edge workers.'
      }
    ]
  },
  // ---------------------------------------------------------------- 16.4
  {
    sectionId: 'web-ch16-s4',
    readingTime: 9,
    intro: 'Redis adds millisecond memory speed for caches, sessions, and counters that Postgres should not serve per hit. This section covers core data types with TTLs, the cache aside pattern, session stores, and atomic counters. You will finish able to cut database load while keeping data fresh.',
    objectives: [
      'Use strings plus hashes plus sets for cache shapes',
      'Set TTL expiry and choose eviction policies',
      'Implement cache aside with read through plus invalidate',
      'Store sessions and rate counters in Redis safely'
    ],
    concepts: [
      {
        term: 'Core types: strings and hashes',
        kind: 'definition',
        statement: 'Redis stores **string keys** with `SET product:42 "...json..."` for blobs and **hash fields** with `HSET user:7 name "Ada"` for object slices. **Sorted sets** via `ZADD board 100 "ada"` power leaderboards while plain sets dedupe tags. One memory engine serves many shapes with atomic commands.',
        detail: 'Namespace keys like product colon id, prefer hashes for wide objects, and sets for membership tests.'
      },
      {
        term: 'TTL and eviction',
        kind: 'method',
        statement: 'Every cache key sets a **time to live** with `SET product:42 "..." EX 300` for five minute freshness or `EXPIRE session:abc 3600` for hourly sessions. **Eviction policies** such as `maxmemory-policy allkeys-lru` drop cold keys when memory fills. TTLs bound staleness while eviction bounds memory.',
        detail: 'Set short TTLs for feeds, longer for reference data, and monitor evicted plus expired counts.'
      },
      {
        term: 'Cache aside pattern',
        kind: 'method',
        statement: 'The **cache aside flow** tries `GET product:42` first, on miss queries Postgres then `SET` with a TTL, and on writes deletes the key to **invalidate**. Stale reads last at most the TTL while thundering herds yield to locks or singleflight. Aside keeps the database authoritative with Redis as a fast aside copy.',
        detail: 'Invalidate on write, never update the cache inline, and stampede guard hot keys with short locks. This is the cache-aside pattern with TTL expiry.'
      },
      {
        term: 'Sessions in Redis',
        kind: 'method',
        statement: 'Web sessions live as **server side entries** like `sess:abc` holding user id plus role, with browsers keeping only a signed cookie id. Stores such as **connect redis** via `new RedisStore({ client })` plug into Express sessions with `cookie.maxAge` matching key TTL. Revocation deletes one key for instant logout everywhere.',
        detail: 'Rotate session ids on login, set httpOnly plus secure cookies, and align cookie age with Redis TTL.'
      },
      {
        term: 'Atomic counters and windows',
        kind: 'method',
        statement: 'Rate limits and likes use **atomic increments** with `INCR api:ip:minute` plus `EXPIRE` for fixed windows that no race can miscount. Leaderboards combine **sorted adds** `ZADD` with `ZREVRANGE` for top N in milliseconds. Lua scripts bundle check plus increment for sliding windows.',
        detail: 'Key windows by id plus minute, expire them, and return remaining plus reset headers to clients.'
      }
    ],
    examples: [
      {
        title: 'Cache products cache aside with TTL',
        problem: 'Cut product reads with a five minute cache that invalidates on update.',
        steps: [
          { label: 'Step 1: Read through', text: '```js\nasync function getProduct(id) {\n  const key = "product:" + id;\n  const hit = await redis.get(key);\n  if (hit) { return JSON.parse(hit); }\n  const row = await db.product.findUnique({ where: { id: id } });\n  await redis.set(key, JSON.stringify(row), "EX", 300);\n  return row;\n}\n```\nHits return in milliseconds while misses fill the cache with a three hundred second TTL.' },
          { label: 'Step 2: Invalidate on write', text: '```js\nasync function updateProduct(id, data) {\n  const row = await db.product.update({ where: { id: id }, data: data });\n  await redis.del("product:" + id);\n  return row;\n}\n```\nDeletes force the next read to fetch fresh rows instead of serving stale copies.' },
          { label: 'Step 3: Guard stampedes', text: '```js\n// hot keys add a short lock with SET NX EX 5 before DB fetch\n// waiters sleep briefly then retry GET instead of hammering Postgres\n```\nSingleflight locks keep viral keys from collapsing the database on expiry.' }
        ],
        result: 'Reads drop to memory speed, writes stay authoritative, and staleness caps at five minutes.'
      },
      {
        title: 'Store sessions plus a rate limiter',
        problem: 'Keep logins server side and throttle APIs by IP with fixed windows.',
        steps: [
          { label: 'Step 1: Session store', text: '```js\nconst session = require("express-session");\nconst { RedisStore } = require("connect-redis");\napp.use(session({ store: new RedisStore({ client: redis }), secret: "long-secret", resave: false, saveUninitialized: false, cookie: { httpOnly: true, maxAge: 3600000 } }));\n```\nCookie holds only the id while Redis holds the user payload with a matching one hour TTL.' },
          { label: 'Step 2: Fixed window counter', text: '```js\nasync function limit(ip) {\n  const key = "api:" + ip + ":minute";\n  const count = await redis.incr(key);\n  if (count === 1) { await redis.expire(key, 60); }\n  return count;\n}\n```\nAtomic increments plus sixty second expiry count each window without races.' },
          { label: 'Step 3: Enforce 429', text: '```js\n// if count greater than 120, reply 429 with Retry-After 60\n// include X-RateLimit-Remaining as max minus count\n```\nHeaders let clients back off while logout deletes one sess key instantly.' }
        ],
        result: 'Logins revoke centrally, APIs throttle fairly, and both ride millisecond memory ops.'
      }
    ],
    keyTakeaways: [
      'Model blobs as strings and objects as hashes with namespaced keys.',
      'Expire every cache key with a TTL matched to staleness tolerance.',
      'Read aside with GET then SET on miss and delete on write.',
      'Keep sessions server side with signed id cookies for instant revoke.',
      'Count windows with INCR plus EXPIRE for race free limits.'
    ],
    quiz: [
      {
        q: 'What is cache aside?',
        options: ['Write only to cache', 'GET first, fetch DB on miss with SET, delete on write', 'Cache nothing', 'Store sessions in cookies'],
        answer: 1,
        explanation: 'Aside keeps Postgres authoritative while Redis accelerates reads with TTL plus invalidate.'
      },
      {
        q: 'Why set a TTL on every cache key?',
        options: ['To use more memory', 'To bound staleness and memory when invalidates miss', 'To slow reads', 'To skip eviction'],
        answer: 1,
        explanation: 'Expiry guarantees freshness caps plus memory reclamation even if delete paths fail.'
      },
      {
        q: 'How does server side session logout work?',
        options: ['Delete the browser only', 'Delete the sess key in Redis for instant global revoke', 'Change DNS', 'Restart npm'],
        answer: 1,
        explanation: 'One key delete invalidates every device holding that session id immediately.'
      },
      {
        q: 'Why is INCR safe for rate limits?',
        options: ['It is slow', 'It is atomic so concurrent hits cannot miscount', 'It skips expiry', 'It needs no key'],
        answer: 1,
        explanation: 'Atomic increments serialize on the server, so fixed windows count exactly under races.'
      },
      // Placement-pattern: cache-aside read and write discipline (original)
      {
        q: "A product lookup uses cache-aside caching with a TTL. Which read and write discipline is correct?",
        options: ["Read: always query the database and ignore the cache", "Write: update the cache only and never the database", "Delete the database row after caching it", "Read: check the cache, on miss read the database and repopulate the cache; write: update the database then invalidate the key so the next read refreshes"],
        answer: 3,
        explanation: "Step 1: The data given is an application-managed cache fronting a database with bounded staleness. Step 2: The governing rules are the cache-aside contract: reads fill the cache on miss with a TTL cap, and writes invalidate the key after persisting so later reads refresh from truth. Step 3: Tracing both paths, a miss pays one database read then serves followers from memory until expiry, while a write persists first and deletes the key so no stale copy survives. Step 4: The distractors fail because cache-skipping reads waste the layer, cache-only writes lose durability, and deleting source rows destroys truth. Step 5: Therefore the miss-fill plus write-invalidate discipline is the correct one."
      }
    ]
  },
  // ---------------------------------------------------------------- 16.5
  {
    sectionId: 'web-ch16-s5',
    readingTime: 7,
    intro: 'No single store fits every feature, so architects split data by shape and access pattern. This section gives decision rules for SQL versus NoSQL, explains polyglot persistence, and compares Postgres search with dedicated engines. You will finish able to defend a stack choice with tradeoffs, not hype.',
    objectives: [
      'Apply decision rules for SQL versus documents versus cache',
      'Design polyglot persistence with Postgres plus Redis plus search',
      'Compare Postgres FTS with dedicated engines on scale signals',
      'Weigh consistency plus ops cost plus team skill in choices'
    ],
    concepts: [
      {
        term: 'SQL versus NoSQL decision rules',
        kind: 'law',
        statement: 'Choose **relational tables** with `JOIN` plus transactions when data relates richly and money correctness matters. Choose **document stores** with `collections` for varied shapes with independent lifecycles and high write fan out. Choose **memory stores** with `TTL` keys for speed layers, never as the system of record.',
        detail: 'Score relations plus constraints plus reporting needs first, then shape variance, then latency targets.'
      },
      {
        term: 'Polyglot persistence',
        kind: 'insight',
        statement: 'Mature stacks practice **polyglot persistence** where `Postgres` owns truth, `Redis` accelerates hot reads and sessions, and a **search engine** serves typo tolerant queries. Each write fans out through jobs that sync derived copies idempotently. One store per job beats one store for all jobs.',
        detail: 'Draw the write path from system of record to caches plus search, with queues bridging the gap.'
      },
      {
        term: 'Postgres search versus dedicated engines',
        kind: 'definition',
        statement: 'Built in **Postgres FTS** with `to_tsvector` plus `GIN` ranks catalog queries without new ops, while **dedicated engines** such as `Typesense` plus `Meilisearch` plus `Elasticsearch` add typo tolerance plus facets plus instant UX. Postgres fits thousands of docs with simple ranking, dedicated fits millions with fuzzy expectations. Migrate when typo plus facet pressure exceeds SQL comfort.',
        detail: 'Start with Postgres vectors, sync to an engine via jobs when search becomes a headline feature.'
      },
      {
        term: 'Denormalization and read models',
        kind: 'method',
        statement: 'Hot reads precompute **denormalized counts** such as `posts.comment_count` maintained by triggers or jobs instead of counting joins per view. Larger splits use **read models** with `materialized views` refreshed on a schedule for dashboards. Caches expire while counts reconcile to stay honest.',
        detail: 'Denormalize measured hot paths only, document the sync job, and monitor drift with nightly checks.'
      },
      {
        term: 'Consistency and operational cost',
        kind: 'insight',
        statement: 'Every extra store adds **ops cost** in backups plus monitoring plus upgrades that small teams feel first. Strong **consistency needs** favor fewer stores with `Postgres` transactions, while offline plus edge needs accept eventual sync. The cheapest correct stack wins over the most fashionable one.',
        detail: 'Count on call burden per store, prove restore per store, and staff only what the team can run well.'
      }
    ],
    examples: [
      {
        title: 'Choose a SaaS stack with reasons',
        problem: 'Pick stores for billing, product catalog, sessions, and search of a SaaS.',
        steps: [
          { label: 'Step 1: Truth in Postgres', text: '```sql\n-- users, orders, invoices live in Postgres with FK plus CHECK plus transactions\n-- billing correctness outweighs flexible shapes here\n```\nMoney and relations demand ACID with constraints at the lowest layer.' },
          { label: 'Step 2: Speed in Redis', text: '```js\n// sessions as sess keys with one hour TTL\n// product cards as product keys with five minute TTL, invalidated on write\n```\nHot reads plus login state ride memory while Postgres stays authoritative.' },
          { label: 'Step 3: Search staged', text: '```js\n// start with Postgres tsvector plus GIN for catalog search\n// sync to Typesense via jobs when typo plus facet demand grows\n```\nSearch starts free in SQL and graduates to an engine on measured signals.' }
        ],
        result: 'Billing stays correct, pages stay fast, search evolves without rewrites, and ops stays lean.'
      },
      {
        title: 'Sync Postgres to a search engine',
        problem: 'Keep dedicated search fresh without dual writes in requests.',
        steps: [
          { label: 'Step 1: Write truth once', text: '```js\n// POST /api/products writes Postgres only, then enqueues search.sync with product id\n// request returns 201 fast without waiting for the engine\n```\nSingle writes avoid split brain between stores.' },
          { label: 'Step 2: Job syncs idempotently', text: '```js\n// worker loads row by id and upserts doc keyed by product id into the engine\n// retries with backoff, dedupes by engine doc id\n```\nBusiness keyed upserts make replays safe and order independent.' },
          { label: 'Step 3: Fallback on outage', text: '```js\n// when engine down, route search to Postgres tsvector path\n// clients see slower but correct results until sync drains\n```\nGraceful fallback keeps search available during engine incidents.' }
        ],
        result: 'Engines stay fresh within seconds, requests stay fast, and outages degrade instead of failing.'
      }
    ],
    keyTakeaways: [
      'Keep relational money data in SQL with transactions.',
      'Keep varied content in documents and hot state in memory.',
      'Start search in Postgres and graduate on typo plus scale signals.',
      'Sync derived copies with idempotent jobs, never dual writes.',
      'Minimize stores to what the team can back up and run.'
    ],
    quiz: [
      {
        q: 'When is Postgres the right system of record?',
        options: ['For session TTLs only', 'For related money data needing joins plus transactions', 'For typo tolerant instant search at millions of docs', 'Never'],
        answer: 1,
        explanation: 'Relations plus constraints plus ACID make SQL the safe home for billing and core entities.'
      },
      {
        q: 'What is polyglot persistence?',
        options: ['One database for everything', 'Postgres for truth plus Redis for speed plus search engine for queries', 'No backups', 'Only caches'],
        answer: 1,
        explanation: 'Each workload uses its best store with jobs syncing derived copies from the record.'
      },
      {
        q: 'When should search move to a dedicated engine?',
        options: ['At zero docs', 'When typo tolerance plus facets plus scale exceed SQL comfort', 'Never', 'For session storage'],
        answer: 1,
        explanation: 'Postgres FTS covers simple catalogs, while engines pay off once fuzzy instant UX becomes core.'
      },
      {
        q: 'How should search sync stay correct?',
        options: ['Dual writes in requests', 'Single Postgres write plus idempotent job upsert by doc id', 'Manual copy paste', 'No sync'],
        answer: 1,
        explanation: 'Queue driven upserts keyed by id keep engines fresh without split brain or slow requests.'
      }
    ]
  }
]

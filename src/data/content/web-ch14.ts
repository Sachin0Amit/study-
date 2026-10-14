import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 14
// APIs in Practice: REST, GraphQL, Realtime and Jobs (Sections 14.1 – 14.5)
// Master study content.
// ============================================================================

export const webCh14Content: SectionContent[] = [
  // ---------------------------------------------------------------- 14.1
  {
    sectionId: 'web-ch14-s1',
    readingTime: 9,
    intro: 'Production list endpoints need paging, filtering, and abuse protection, not just CRUD routes. This section covers collection and item routes, offset versus cursor paging, query options for filter and sort, and rate limits with correct headers. You will finish able to ship a list API that stays fast and fair under load.',
    objectives: [
      'Build collection and item CRUD routes with correct verbs and codes',
      'Compare offset paging drift with stable cursor paging',
      'Add filtering, sorting, and field selection through query params',
      'Enforce rate limits with 429 plus Retry-After and limit headers'
    ],
    concepts: [
      {
        term: 'Collection and item routes',
        kind: 'definition',
        statement: 'A **collection route** such as `GET /api/posts` lists and creates while an **item route** such as `GET /api/posts/abc` reads, replaces, or removes one entry. List routes accept paging and filter query params while item routes validate the `id` param before any lookup. Consistent pairs let clients learn one pattern and reuse it everywhere.',
        detail: 'Return 201 on collection POST, 200 on item GET and PUT, 204 on item DELETE, and 404 for unknown ids.'
      },
      {
        term: 'Offset paging and its drift',
        kind: 'method',
        statement: 'Offset paging slices with **limit plus offset** via `limit=20&offset=40` translated to `LIMIT 20 OFFSET 40` in SQL. It is simple and supports random page jumps, but inserts or deletes shift rows so clients miss or repeat items. Large offsets also force the database to scan and discard rows, which slows deep pages.',
        detail: 'Use offset for admin tables with stable data and small page counts, never for infinite feeds that change constantly.'
      },
      {
        term: 'Cursor paging for stable feeds',
        kind: 'method',
        statement: 'Cursor paging continues after a **opaque cursor** such as `cursor=abc123` with a query like `WHERE id > cursor ORDER BY id LIMIT 20` that never counts rows. New inserts do not shift the window because the filter anchors on the last seen key, which keeps feeds stable. Cursors also use an index range scan, so deep pages stay fast.',
        detail: 'Encode the last id plus sort key as the cursor, return nextCursor with each page, and stop when the page is short.'
      },
      {
        term: 'Filtering, sorting and field selection',
        kind: 'method',
        statement: 'List endpoints expose **filter params** such as `q=graphql&tag=node` mapped to `WHERE` clauses with allowlisted columns. **Sort params** such as `sort=-createdAt` map to an allowlisted `ORDER BY` direction to block injection through column names. **Sparse fieldsets** such as `fields=title,author` trim payloads for mobile clients.',
        detail: 'Allowlist every filterable and sortable column, cap limit at a max such as fifty, and default the sort to newest first.'
      },
      {
        term: 'Rate limits with 429 signals',
        kind: 'law',
        statement: 'A **rate limiter** such as `express-rate-limit` caps calls per window and answers overages with **status 429** plus `Retry-After` seconds and `X-RateLimit-Remaining` counts. Limits apply per API key or IP with generous reads and tight writes to protect expensive handlers. Headers let honest clients back off instead of guessing.',
        detail: 'Return JSON with code RATE_LIMITED, honor Retry-After on the client, and exempt health checks from counting.'
      }
    ],
    examples: [
      {
        title: 'Implement cursor paging for posts',
        problem: 'Replace offset paging with a stable cursor over an id ordered table.',
        steps: [
          { label: 'Step 1: Parse the query', text: '```js\nconst limit = Math.min(Number(req.query.limit || 20), 50);\nconst cursor = req.query.cursor || null;\n```\nLimit caps at fifty to protect the database while cursor null means the first page.' },
          { label: 'Step 2: Query by range', text: '```js\n// SQL idea: SELECT * FROM posts WHERE id > cursor ORDER BY id LIMIT 20\nconst page = await db.post.findMany({\n  take: limit,\n  skip: cursor ? 1 : 0,\n  cursor: cursor ? { id: cursor } : undefined,\n  orderBy: { id: "asc" }\n});\nconst nextCursor = page.length === limit ? page[page.length - 1].id : null;\n```\nThe range filter uses the index instead of scanning, and nextCursor anchors the following call.' },
          { label: 'Step 3: Shape the reply', text: '```js\nres.json({ data: page, meta: { nextCursor: nextCursor } });\n```\nClients store nextCursor and pass it back until it returns null, which signals the end.' }
        ],
        result: 'Feeds stay stable across inserts and deep pages cost one index range instead of a growing scan plus discard.'
      },
      {
        title: 'Add filters plus a rate limiter',
        problem: 'Support search and sort safely and throttle the list route per IP.',
        steps: [
          { label: 'Step 1: Allowlist filters', text: '```js\nconst allowedSort = { newest: { createdAt: "desc" }, oldest: { createdAt: "asc" } };\nconst sort = allowedSort[req.query.sort] || allowedSort.newest;\nconst where = req.query.tag ? { tag: String(req.query.tag).slice(0, 30) } : {};\n```\nOnly known sort keys map to order clauses, and tag truncates to block abuse.' },
          { label: 'Step 2: Cap and select', text: '```js\nconst take = Math.min(Number(req.query.limit || 20), 50);\n// select only title plus author for the mobile card view\n```\nCapping take plus selecting columns keeps payloads small and queries covered by indexes.' },
          { label: 'Step 3: Throttle', text: '```js\nconst rateLimit = require("express-rate-limit");\nconst listLimiter = rateLimit({ windowMs: 60 * 1000, max: 120, standardHeaders: true });\napp.use("/api/posts", listLimiter);\n```\nOne hundred twenty requests per minute per IP with standard headers returns 429 with Retry-After on excess.' }
        ],
        result: 'Clients get search plus sort without injection risk, and burst traffic receives a machine readable slow down signal.'
      }
    ],
    keyTakeaways: [
      'Pair every collection route with item routes using one verb and code convention.',
      'Prefer cursor paging for feeds and reserve offset for stable admin tables.',
      'Allowlist filter and sort columns and cap limit to protect the database.',
      'Return nextCursor metadata and stop when a page comes back short.',
      'Throttle with 429 plus Retry-After so clients back off correctly.'
    ],
    quiz: [
      {
        q: 'Why does offset paging drift on lively feeds?',
        options: ['Offsets are too fast', 'Inserts shift rows so pages miss or repeat items', 'Cursors expire', 'JSON is unordered'],
        answer: 1,
        explanation: 'Offset counts rows from the start, so any insert before the window moves every later row by one position.'
      },
      {
        q: 'What query implements cursor paging on id?',
        options: ['ORDER BY id with no filter', 'WHERE id greater than cursor ORDER BY id LIMIT n', 'OFFSET cursor LIMIT n', 'GROUP BY id HAVING count large'],
        answer: 1,
        explanation: 'Anchoring on the last seen key with a range filter plus limit walks the index without counting.'
      },
      {
        q: 'How should sort params be handled?',
        options: ['Interpolate raw strings into ORDER BY', 'Map allowlisted keys to fixed order clauses', 'Allow any column including password hash', 'Sort only on the client'],
        answer: 1,
        explanation: 'Allowlisting prevents injection through column names while keeping useful newest and oldest options.'
      },
      {
        q: 'What must a 429 response include?',
        options: ['A redirect', 'Retry-After plus rate limit headers and a JSON code', 'An HTML stack trace', 'A new API key'],
        answer: 1,
        explanation: 'Retry-After tells when to retry and limit headers show the quota, both in a parseable JSON envelope.'
      },
      // Placement-pattern: REST status code selection (original)
      {
        q: "A client creates a note (`POST /notes`), deletes it (`DELETE /notes/9`), then requests it (`GET /notes/9`). Which status sequence is correct?",
        options: ["`200`, `200`, `200`, each with an empty body", "`404`, `404`, `404` for all three calls", "`201` with the created resource, `204` with no body, `404` for the missing resource", "`500` for all three calls, to stay on the safe side"],
        answer: 2,
        explanation: "Step 1: The data given is a create, a removal, and a read-after-removal against one resource. Step 2: The governing rules are status semantics: 201 reports creation with the new representation, 204 reports success with deliberately no body, and 404 reports that the addressed resource does not exist. Step 3: Tracing the sequence, creation returns 201 with the note, deletion returns 204 with nothing to render, and the final read finds no row and returns 404. Step 4: The distractors fail because uniform 200 hides the creation and the emptiness, uniform 404 denies the two successes, and 500 misreports healthy operations as server faults. Step 5: Therefore the 201, 204, 404 sequence is the correct one."
      },
      // Placement-pattern: cursor versus offset pagination (original)
      {
        q: "A feed grows constantly while users scroll. Offset pages (`?page=7`) start skipping and repeating items. Which change fixes it?",
        options: ["Increase the page size and keep larger offsets", "Switch to cursor pagination on a stable ordered key (`?after=<id>`), so each page starts where the last one ended regardless of inserts", "Drop pagination and send the entire feed at once", "Shuffle the order randomly on every page"],
        answer: 1,
        explanation: "Step 1: The data given is a growing ordered feed where positional windows drift as rows arrive. Step 2: The governing rule is window anchoring: offsets count rows from the start so inserts shift every later window, while cursors anchor to the last seen stable key and are immune to shifts. Step 3: Tracing continued inserts, offset page seven slides over different rows each fetch, but an `after` cursor resumes exactly after the previously returned key every time. Step 4: The distractors fail because larger offsets still count from a moving start, full dumps cannot scale, and random order destroys continuity entirely. Step 5: Therefore the stable-key cursor is the correct fix."
      }
    ]
  },
  // ---------------------------------------------------------------- 14.2
  {
    sectionId: 'web-ch14-s2',
    readingTime: 9,
    intro: 'GraphQL trades many REST endpoints for one typed schema where clients request exactly the fields they need. This section covers schema types with queries and mutations, resolver functions, the N plus one trap, and input handling. You will finish able to judge when GraphQL beats REST and how to keep it fast.',
    objectives: [
      'Read a schema with object types, queries, and mutations',
      'Write resolvers that fetch one field or action each',
      'Explain the N plus one problem and fix it with batching',
      'Validate arguments and return typed GraphQL errors'
    ],
    concepts: [
      {
        term: 'Schema with types, queries and mutations',
        kind: 'definition',
        statement: 'A **GraphQL schema** declares object types such as `type Post { id: ID title: String }` plus a **query root** like `type Query { post(id: ID): Post }` for reads. Writes live under a **mutation root** such as `type Mutation { createPost(title: String): Post }` so reads and writes separate cleanly. The schema is the contract that powers validation, docs, and codegen.',
        detail: 'Design types around product needs, mark required fields non null with exclamation, and version by adding fields rather than breaking old ones.'
      },
      {
        term: 'Resolvers as field functions',
        kind: 'method',
        statement: 'Each schema field maps to a **resolver function** such as `Query.post` that receives parent plus `args` plus context and returns the value. Resolvers stay small and delegate to services so batching and auth wrap them uniformly. Context carries the loader instances, user, and database client for the request.',
        detail: 'Keep resolvers thin: parse args, check auth, call a service, return the shape. Test services without GraphQL.'
      },
      {
        term: 'N plus one and DataLoader batching',
        kind: 'law',
        statement: 'Naive nested resolvers cause the **N plus one problem** where one parent query plus `N` child lookups such as `author` per post fires dozens of database round trips. A **batching loader** such as `DataLoader` collects child keys per tick and issues one `WHERE id IN` query. Batching restores one plus one queries regardless of nesting depth.',
        detail: 'Create loaders per request, never globally, so caches do not leak across users. Measure query count in tests.'
      },
      {
        term: 'Variables and input validation',
        kind: 'method',
        statement: 'Clients send **query variables** such as `query(GetPost) { post(id: 42) { title } }` with a separate variables object that keeps operations static and cacheable. Server **input types** such as `input CreatePost { title: String }` pair with validators that reject bad args with `GraphQLError` extensions and codes. Validated args flow typed into services.',
        detail: 'Require variables over string interpolation to block injection and enable persisted queries.'
      },
      {
        term: 'When GraphQL beats REST',
        kind: 'insight',
        statement: 'GraphQL wins when clients face **overfetching** from fixed REST shapes or need **aggregated views** such as `posts { title author { name } }` joining posts plus authors plus comments in one round trip. It also suits **rapid product iteration** where mobile and web need different fields from one backend. REST stays simpler for file uploads, caching at the edge, and tiny CRUD services.',
        detail: 'Choose GraphQL for field diverse clients behind one gateway, REST for cache heavy public APIs and webhooks.'
      }
    ],
    examples: [
      {
        title: 'Write a blog schema plus resolvers',
        problem: 'Expose post read plus create with typed args and context services.',
        steps: [
          { label: 'Step 1: Define typeDefs', text: '```js\nconst typeDefs = "type Post { id: ID title: String author: User } type User { id: ID name: String } type Query { post(id: ID): Post posts: [Post] } type Mutation { createPost(title: String): Post }";\n```\nQueries read, mutations write, and nesting author under post declares the join clients may request.' },
          { label: 'Step 2: Implement resolvers', text: '```js\nconst resolvers = {\n  Query: {\n    post: function (parent, args, ctx) { return ctx.posts.byId(args.id); },\n    posts: function (parent, args, ctx) { return ctx.posts.list(); }\n  },\n  Mutation: {\n    createPost: function (parent, args, ctx) { return ctx.posts.create(args.title); }\n  }\n};\n```\nEach resolver delegates to a service on context, which keeps auth and loaders in one place.' },
          { label: 'Step 3: Query with variables', text: '```js\n// query GetPost with variables { "id": "42" }\n// query(GetPost) { post(id: 42) { title author { name } } }\n```\nVariables keep the document static while ids change per call, enabling caching and validation.' }
        ],
        result: 'One endpoint serves many field shapes with a typed contract that generates docs and client hooks.'
      },
      {
        title: 'Fix N plus one with DataLoader',
        problem: 'A posts list fires one author query per row. Batch it to one query.',
        steps: [
          { label: 'Step 1: Show the trap', text: '```js\n// BAD resolver: N+1\n// Post.author: (post) => db.user.findById(post.authorId) // runs per post\n```\nTwenty posts cause twenty user lookups plus the original list query, which collapses under load.' },
          { label: 'Step 2: Add a loader', text: '```js\nconst DataLoader = require("dataloader");\nfunction makeUserLoader(db) {\n  return new DataLoader(async function (ids) {\n    const rows = await db.user.findMany({ where: { id: { in: ids } } });\n    return ids.map(function (id) { return rows.find(function (r) { return r.id === id; }); });\n  });\n}\n```\nKeys collect during the tick then resolve with one IN query, mapped back in key order.' },
          { label: 'Step 3: Use per request context', text: '```js\n// ctx.userLoader.load(post.authorId) inside Post.author resolver\n// loaders created per request, never shared globally\n```\nPer request scope keeps user caches private while batching still collapses the fan out.' }
        ],
        result: 'List cost drops from N plus one round trips to two queries total, with identical client shapes.'
      }
    ],
    keyTakeaways: [
      'Model types once in the schema and let queries plus mutations share them.',
      'Keep resolvers thin and put logic in testable services on context.',
      'Batch nested loads with per request DataLoader to kill N plus one.',
      'Send variables and input types, never interpolated query strings.',
      'Pick GraphQL for diverse clients and REST for edge cached CRUD.'
    ],
    quiz: [
      {
        q: 'What is the N plus one problem?',
        options: ['One schema too large', 'One parent query plus N child lookups firing per row', 'One mutation failing', 'One cache entry expiring'],
        answer: 1,
        explanation: 'Nested resolvers that query per parent row multiply round trips linearly with list size.'
      },
      {
        q: 'How does DataLoader fix it?',
        options: ['By caching schema text', 'By batching keys per tick into one IN query', 'By skipping auth', 'By paginating schema'],
        answer: 1,
        explanation: 'Loads collect during the event tick then resolve together with a single batched database call.'
      },
      {
        q: 'Where do mutations live in a schema?',
        options: ['Under type Query', 'Under type Mutation', 'In headers', 'In the database'],
        answer: 1,
        explanation: 'Queries declare reads while mutations declare writes, keeping intent and caching rules separate.'
      },
      {
        q: 'Why use query variables?',
        options: ['To allow string concat', 'To keep documents static, validatable, and cacheable', 'To skip validation', 'To hide the schema'],
        answer: 1,
        explanation: 'Variables separate values from the document so operations validate once and cache by shape.'
      }
    ]
  },
  // ---------------------------------------------------------------- 14.3
  {
    sectionId: 'web-ch14-s3',
    readingTime: 8,
    intro: 'Realtime features need either bidirectional sockets or server pushed streams, and picking wrong costs battery and complexity. This section compares WebSockets with Server Sent Events, covers rooms and broadcast, and handles reconnects plus heartbeats. You will finish able to choose the narrowest realtime tool for each feature.',
    objectives: [
      'Contrast WebSockets bidirectional frames with SSE text streams',
      'Build rooms and targeted broadcast for chat style features',
      'Handle reconnects, missed events, and heartbeats robustly',
      'Choose WS versus SSE versus polling with a decision rule'
    ],
    concepts: [
      {
        term: 'WebSocket bidirectional channel',
        kind: 'definition',
        statement: 'A **WebSocket upgrade** turns an HTTP handshake into a persistent frame channel where both sides call `socket.send` at any time. The **ws library** with `new WebSocketServer({ server })` hosts rooms for chat, games, and collaborative editing. Sockets suit low latency interaction with frequent client messages.',
        detail: 'Keep connections authenticated at upgrade, validate every frame, and cap message size to block abuse.'
      },
      {
        term: 'SSE unidirectional stream',
        kind: 'definition',
        statement: 'Server Sent Events push **text event streams** with `Content-Type: text/event-stream` that browsers consume through `new EventSource(url)` with auto reconnect. Each message carries `data:` lines plus optional `event:` and `id:` fields for typed handling and resume. SSE suits feeds, progress, and notifications where only the server talks.',
        detail: 'Send heartbeats with comment lines, set retry delays, and use Last-Event-ID to replay missed rows.'
      },
      {
        term: 'Rooms and targeted broadcast',
        kind: 'method',
        statement: 'Chat scale comes from **rooms** where `socket.join(roomId)` subscribes one connection and `io.to(roomId).emit(event, payload)` fans out to members only. Presence tracks who is online per room so join and leave events stay accurate. Room ids must be authorized, never trusted blindly from the client.',
        detail: 'Authorize room membership on join, broadcast with the room key, and clean up on disconnect to avoid ghost members.'
      },
      {
        term: 'Reconnects and heartbeats',
        kind: 'method',
        statement: 'Robust clients treat **reconnect with backoff** as normal, resubscribing and passing `Last-Event-ID` so the server replays gaps from a log. Servers send **ping frames** or SSE comments on an interval and close silent peers that miss two beats. Idempotent event ids let redelivered messages dedupe safely.',
        detail: 'Store recent events per stream, send ids on every message, and make handlers safe to run twice.'
      },
      {
        term: 'Choosing WS versus SSE versus polling',
        kind: 'insight',
        statement: 'The **decision rule** picks `SSE` when only the server pushes and `WebSocket` when clients also send often, with **polling** reserved for rare updates and constrained proxies. SSE wins on simplicity, HTTP caching, and auto reconnect, while sockets win on latency and binary frames. Narrowest tool first keeps ops and battery costs down.',
        detail: 'Scoreboards and builds use SSE, chat and games use sockets, and hourly badges use polling with cache headers.'
      }
    ],
    examples: [
      {
        title: 'Build a room chat on WebSockets',
        problem: 'Let authenticated users join one room and broadcast messages to members only.',
        steps: [
          { label: 'Step 1: Upgrade and authorize', text: '```js\nconst { WebSocketServer } = require("ws");\nconst wss = new WebSocketServer({ port: 8080 });\nwss.on("connection", function (socket, req) {\n  if (!req.headers.authorization) { socket.close(4401, "unauthorized"); return; }\n  socket.room = "general";\n});\n```\nAuth at upgrade rejects anonymous sockets before they consume room state.' },
          { label: 'Step 2: Broadcast to room', text: '```js\nwss.on("connection", function (socket) {\n  socket.on("message", function (raw) {\n    const text = String(raw).slice(0, 500);\n    wss.clients.forEach(function (peer) {\n      if (peer.room === socket.room && peer.readyState === 1) { peer.send(text); }\n    });\n  });\n});\n```\nOnly open peers in the same room receive the frame, with length capped.' },
          { label: 'Step 3: Heartbeat', text: '```js\nsetInterval(function () { wss.clients.forEach(function (s) { if (s.readyState === 1) { s.ping(); } }); }, 30000);\n```\nPeriodic pings detect dead peers so presence stays honest.' }
        ],
        result: 'Messages fan out in milliseconds to room members with auth at the edge and dead peers pruned.'
      },
      {
        title: 'Stream build progress over SSE',
        problem: 'Push one way progress events with resume after disconnects.',
        steps: [
          { label: 'Step 1: Open the stream', text: '```js\napp.get("/api/builds/:id/events", function (req, res) {\n  res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" });\n  res.write("retry: 3000\\n\\n");\n});\n```\nHeaders mark the response as an infinite event stream with a three second client retry.' },
          { label: 'Step 2: Send typed events', text: '```js\n// res.write("id: 41\\n");\n// res.write("event: progress\\n");\n// res.write("data: {\\"pct\\": 70}\\n\\n");\n```\nIds enable resume while event names let the client route progress versus done handlers.' },
          { label: 'Step 3: Resume on reconnect', text: '```js\n// const last = req.headers["last-event-id"];\n// replay rows where id greater than last\n```\nThe server replays only missed rows so reconnects fill gaps without duplicates.' }
        ],
        result: 'Browsers auto reconnect with EventSource, progress resumes from the last id, and no socket server is needed.'
      }
    ],
    keyTakeaways: [
      'WebSockets give two way frames while SSE gives one way auto reconnecting streams.',
      'Scope all fan out through authorized rooms, never global broadcast.',
      'Send heartbeats and close silent peers to keep presence accurate.',
      'Tag events with ids and make handlers idempotent for safe replay.',
      'Pick SSE for server pushes and sockets for frequent client messages.'
    ],
    quiz: [
      {
        q: 'When is SSE the better pick over WebSockets?',
        options: ['Collaborative editing with constant typing', 'One way progress or news feed from server only', 'Voice chat with binary frames', 'Multiplayer game input at 60hz'],
        answer: 1,
        explanation: 'SSE is simpler with HTTP and auto reconnect when only the server needs to push text events.'
      },
      {
        q: 'How do rooms scale chat?',
        options: ['By broadcasting to everyone', 'By subscribing sockets and emitting to members only', 'By polling the DB per message', 'By disabling auth'],
        answer: 1,
        explanation: 'Join plus emit to room id scopes fan out so traffic grows with room size, not total users.'
      },
      {
        q: 'What enables SSE resume?',
        options: ['Cookies only', 'Last-Event-ID plus server side replay log', 'Longer URLs', 'Bigger JSON'],
        answer: 1,
        explanation: 'Ids on every event plus the last id header let the server resend only the missed range.'
      },
      {
        q: 'Why send heartbeats?',
        options: ['To use more battery', 'To detect dead peers and prune presence', 'To skip auth', 'To compress JSON'],
        answer: 1,
        explanation: 'Periodic pings or comment lines expose silent disconnects so rooms do not keep ghost members.'
      }
    ]
  },
  // ---------------------------------------------------------------- 14.4
  {
    sectionId: 'web-ch14-s4',
    readingTime: 10,
    intro: 'Uploads, email, and payments connect an API to the messy outside world of files, inboxes, and money. This section covers multipart handling with limits, transactional mail, Stripe intents, and webhook verification. You will finish able to accept files safely and charge without double billing.',
    objectives: [
      'Accept multipart uploads with size, type, and storage limits',
      'Send transactional email with templates and domain auth',
      'Create Stripe PaymentIntents and confirm on the client safely',
      'Verify webhooks by signature and handle events idempotently'
    ],
    concepts: [
      {
        term: 'Multipart uploads with limits',
        kind: 'method',
        statement: 'Browsers send files as **multipart forms** parsed by `multer({ limits: { fileSize: 5 * 1024 * 1024 } })` with field caps and count caps. A **file filter** checks extensions and mime families before disk or S3 writes to reject executables early. Limits run before handlers so oversized bodies never reach business logic.',
        detail: 'Cap size near five megabytes for avatars, allow only images, and store outside the web root with random names.'
      },
      {
        term: 'Safe storage and validation',
        kind: 'law',
        statement: 'Uploaded bytes are **untrusted input** renamed with `crypto.randomUUID()` plus a vetted extension, never the client filename. Servers verify **magic bytes** rather than trusting `mimetype` alone and scan or sandbox images before serving. Direct object URLs use signed expiries so private files never become public by guessable path.',
        detail: 'Serve with content disposition attachment for odd types and set cache headers only for public assets.'
      },
      {
        term: 'Transactional email delivery',
        kind: 'method',
        statement: 'Login codes and receipts use **transactional providers** such as `resend` or `nodemailer` with template ids and variables, not marketing blasts. **Domain auth** with SPF plus DKIM plus DMARC keeps password resets out of spam and enables bounce webhooks. Queued sends with retries survive provider outages without blocking requests.',
        detail: 'Send from a named address such as hello at example, include a text part, and log message ids for support.'
      },
      {
        term: 'Stripe PaymentIntent flow',
        kind: 'method',
        statement: 'Modern card flows create a **PaymentIntent** with `paymentIntents.create({ amount: 2000, currency: "usd" })` on the server and confirm its `client_secret` in the client SDK. The server decides the amount from trusted cart math, never from client input. SCA challenges and 3D Secure complete inside Stripe elements without card data touching the app.',
        detail: 'Amounts are integers in minor units, so two thousand means twenty dollars. Recompute totals server side.'
      },
      {
        term: 'Webhook signature verification',
        kind: 'law',
        statement: 'Payment truth arrives in **signed webhooks** verified with `stripe.webhooks.constructEvent(rawBody, sig, STRIPE_WEBHOOK_SECRET)` on the raw buffer before JSON parsing. Handlers key on **event ids** in a processed table so redelivered `payment_intent.succeeded` events cannot double fulfill. Verification plus idempotency turns at least once delivery into exactly once effects.',
        detail: 'Keep the raw body for the webhook route, return 200 fast, and do fulfillment in a job after ack.'
      }
    ],
    examples: [
      {
        title: 'Accept avatar uploads safely',
        problem: 'Allow one image under five megabytes with random storage names.',
        steps: [
          { label: 'Step 1: Configure multer', text: '```js\nconst multer = require("multer");\nconst upload = multer({\n  dest: "uploads/",\n  limits: { fileSize: 5 * 1024 * 1024, files: 1 },\n  fileFilter: function (req, file, cb) {\n    if (file.mimetype.startsWith("image/")) { cb(null, true); }\n    else { cb(new Error("images only")); }\n  }\n});\napp.post("/api/avatar", upload.single("avatar"), function (req, res) { res.status(201).json({ data: { path: req.file.path } }); });\n```\nSize plus count plus mime gates reject abuse before storage.' },
          { label: 'Step 2: Randomize names', text: '```js\nconst { randomUUID } = require("crypto");\nconst path = require("path");\n// const safe = randomUUID() + path.extname(req.file.originalname).slice(0, 5);\n```\nRandom ids remove traversal and guessing while the vetted extension keeps type info.' },
          { label: 'Step 3: Serve carefully', text: '```js\n// app.use("/files", express.static("uploads", { maxAge: "1d" }));\n// use signed URLs for private files, static only for public avatars\n```\nPublic avatars cache at the edge while private docs need signed expiries.' }
        ],
        result: 'Only small images land on disk with unguessable names and no executable can ride the avatar field.'
      },
      {
        title: 'Charge with intents plus verified webhooks',
        problem: 'Create a twenty dollar intent and fulfill exactly once on webhook success.',
        steps: [
          { label: 'Step 1: Create the intent', text: '```js\nconst stripe = require("stripe")(process.env.STRIPE_SECRET);\napp.post("/api/checkout", async function (req, res, next) {\n  try {\n    const intent = await stripe.paymentIntents.create({ amount: 2000, currency: "usd", metadata: { orderId: "ord_1" } });\n    res.json({ data: { clientSecret: intent.client_secret } });\n  } catch (err) { next(err); }\n});\n```\nAmount comes from server cart math in cents, with order id in metadata for reconcile.' },
          { label: 'Step 2: Verify the webhook', text: '```js\napp.post("/api/stripe-hook", require("express").raw({ type: "application/json" }), function (req, res) {\n  const sig = req.headers["stripe-signature"];\n  const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);\n  res.json({ received: true });\n});\n```\nRaw body plus signature plus secret proves Stripe sent the event before any JSON handling.' },
          { label: 'Step 3: Fulfill idempotently', text: '```js\n// if (await db.processed.findUnique({ where: { id: event.id } })) return;\n// await fulfill(event.data.object.metadata.orderId);\n// await db.processed.create({ data: { id: event.id } });\n```\nEvent id dedupe guarantees redeliveries cannot ship twice.' }
        ],
        result: 'Client confirms with the secret, server trusts only verified webhooks, and orders fulfill exactly once.'
      }
    ],
    keyTakeaways: [
      'Gate uploads with size, count, and mime filters before storage.',
      'Treat files as untrusted with random names and magic byte checks.',
      'Send transactional mail from authenticated domains with queued retries.',
      'Compute Stripe amounts server side and confirm client side with the secret.',
      'Verify webhook signatures on raw bodies and dedupe by event id.'
    ],
    quiz: [
      {
        q: 'What should multer enforce first?',
        options: ['Markdown rendering', 'File size, count, and type limits', 'HTML titles', 'CSS colors'],
        answer: 1,
        explanation: 'Limits plus fileFilter reject oversized or executable uploads before handlers or storage run.'
      },
      {
        q: 'Why randomize upload names?',
        options: ['For prettier URLs', 'To block traversal and guessing of private paths', 'To skip validation', 'To compress images'],
        answer: 1,
        explanation: 'Client filenames can carry dot dot segments, so UUID names plus vetted extensions stay safe.'
      },
      {
        q: 'Where does the PaymentIntent amount come from?',
        options: ['Client input', 'Server side cart math in minor units', 'The webhook header', 'Local storage'],
        answer: 1,
        explanation: 'Trusting client amounts lets buyers set prices, so servers recompute totals in cents.'
      },
      {
        q: 'How are Stripe webhooks trusted?',
        options: ['By checking event type only', 'By verifying the signature on the raw body with the webhook secret', 'By allowing all POSTs', 'By polling the dashboard'],
        answer: 1,
        explanation: 'ConstructEvent with raw body plus signature plus secret proves origin before fulfillment.'
      }
    ]
  },
  // ---------------------------------------------------------------- 14.5
  {
    sectionId: 'web-ch14-s5',
    readingTime: 8,
    intro: 'Slow work such as emails, reports, and webhooks must leave the request path or latency and timeouts explode. This section covers deferring to queues, BullMQ workers on Redis, retries with backoff, and idempotent jobs plus schedulers. You will finish able to keep APIs snappy while heavy work completes reliably.',
    objectives: [
      'Decide what to defer versus what must stay in the request',
      'Enqueue BullMQ jobs and process them in Redis backed workers',
      'Configure attempts with exponential backoff and dead lettering',
      'Make jobs idempotent and schedule recurring work with cron'
    ],
    concepts: [
      {
        term: 'Defer slow work off requests',
        kind: 'definition',
        statement: 'Requests should finish in **milliseconds** with `res.json({ jobId })` while thumbnails, emails, and exports run later as **background jobs**. Anything calling external APIs, large files, orfan out to many users belongs in a queue. Deferring bounds tail latency and survives deploys that recycle web dynos.',
        detail: 'Rule is that if it can take seconds or fail transiently, enqueue it and return a job id for polling.'
      },
      {
        term: 'Queues and workers with BullMQ',
        kind: 'method',
        statement: 'A **queue object** from `new Queue("mail", { connection })` adds durable jobs while a **worker object** from `new Worker("mail", handler)` processes them with concurrency. Redis persists jobs so crashes lose no work and restarts resume automatically. Separate web and worker processes scale each side independently.',
        detail: 'Name queues by domain such as mail or reports, set concurrency near CPU or API limits, and monitor depth as the scaling signal.'
      },
      {
        term: 'Retries with backoff and dead letters',
        kind: 'method',
        statement: 'Transient faults heal with **attempts plus backoff** such as `attempts: 5` with `backoff: { type: "exponential", delay: 2000 }` that spaces retries wider. Poison messages move to a **dead letter queue** after exhausting attempts for inspection instead of blocking the line. Alerts fire on dead letter growth, not on every single retry.',
        detail: 'Retry network and rate limit errors, fail fast on validation errors that will never succeed.'
      },
      {
        term: 'Idempotency keys for jobs',
        kind: 'law',
        statement: 'Queues deliver **at least once**, so handlers must tolerate repeats with an **idempotency key** such as `jobId: order_42_receipt` checked in a processed table before side effects. Keys derive from business identity, not random UUIDs, so replays map to the same row. Idempotency turns redelivery from double charge into harmless no op.',
        detail: 'Check then insert the key transactionally, or rely on unique constraints to win the race.'
      },
      {
        term: 'Schedulers and cron repeats',
        kind: 'method',
        statement: 'Recurring work uses **cron repeats** such as `repeat: { cron: "0 2 * * *" }` for nightly reports plus delayed jobs for follow ups. **Schedulers** enqueue on time while workers stay dumb and scalable, with overlap guards via unique job ids. Daylight and timezone settings must be explicit or nightly jobs drift.',
        detail: 'Prefer one scheduler deployment, store last run cursors, and alert when a scheduled job misses its window.'
      }
    ],
    examples: [
      {
        title: 'Send welcome mail with retries',
        problem: 'Enqueue a welcome email that survives provider blips without blocking signup.',
        steps: [
          { label: 'Step 1: Enqueue at signup', text: '```js\nconst { Queue } = require("bullmq");\nconst mail = new Queue("mail", { connection: { host: "localhost", port: 6379 } });\napp.post("/api/signup", async function (req, res, next) {\n  try {\n    const user = await createUser(req.body);\n    await mail.add("welcome", { userId: user.id }, { attempts: 5, backoff: { type: "exponential", delay: 2000 } });\n    res.status(201).json({ data: user });\n  } catch (err) { next(err); }\n});\n```\nSignup returns fast while the mail job persists in Redis with five spaced attempts.' },
          { label: 'Step 2: Work it', text: '```js\nconst { Worker } = require("bullmq");\nnew Worker("mail", async function (job) { await sendWelcome(job.data.userId); }, { connection: { host: "localhost", port: 6379 } });\n```\nWorkers run in a separate process so mail storms never starve web requests.' },
          { label: 'Step 3: Dead letter on poison', text: '```js\n// after 5 failures BullMQ marks failed; a watcher moves to mail-dlq for review\n// alert when dlq depth greater than zero\n```\nPermanent failures park for humans instead of retrying forever.' }
        ],
        result: 'Signups stay snappy, transient mail faults heal with backoff, and poison jobs surface in one place.'
      },
      {
        title: 'Make nightly reports idempotent',
        problem: 'Schedule a 2am report that double runs cannot double send.',
        steps: [
          { label: 'Step 1: Schedule with unique key', text: '```js\nawait mail.add("nightly", { date: "2026-10-14" }, { repeat: { cron: "0 2 * * *" }, jobId: "report-2026-10-14" });\n```\nDate derived jobId dedupes overlapping scheduler ticks to one logical job.' },
          { label: 'Step 2: Guard the handler', text: '```js\nasync function report(job) {\n  const key = "report-" + job.data.date;\n  if (await db.processed.findUnique({ where: { id: key } })) { return "skip"; }\n  await buildAndSend(job.data.date);\n  await db.processed.create({ data: { id: key } });\n}\n```\nBusiness key checks make replays safe even when Redis redelivers.' },
          { label: 'Step 3: Poll from client', text: '```js\n// GET /api/jobs/jobId returns queued, active, done, or failed\n// front end polls until done then fetches the report URL\n```\nJob ids bridge async work and UI without holding HTTP connections open.' }
        ],
        result: 'Nightly work runs once logically, replays are no ops, and UI tracks progress by job id.'
      }
    ],
    keyTakeaways: [
      'Return fast with a job id and do seconds long work in workers.',
      'Persist jobs in Redis with BullMQ so crashes lose no work.',
      'Retry transient faults with exponential backoff and park poison in DLQ.',
      'Key jobs by business identity for idempotent redelivery.',
      'Schedule with cron repeats and guard overlaps with unique ids.'
    ],
    quiz: [
      {
        q: 'What belongs in a background job?',
        options: ['Input validation', 'Welcome email or PDF export taking seconds', 'Status code mapping', 'CORS headers'],
        answer: 1,
        explanation: 'Slow or flaky side effects leave the request so tail latency stays bounded and retries are safe.'
      },
      {
        q: 'What do attempts with exponential backoff do?',
        options: ['Retry immediately forever', 'Space retries wider to let outages heal', 'Skip dead letters', 'Double bill'],
        answer: 1,
        explanation: 'Growing delays avoid hammering a recovering provider while still completing within minutes.'
      },
      {
        q: 'How is job idempotency achieved?',
        options: ['Random ids per attempt', 'Business derived keys checked before side effects', 'No keys at all', 'Longer timeouts'],
        answer: 1,
        explanation: 'Stable keys such as order plus action map repeats to one row, turning redelivery into a no op.'
      },
      {
        q: 'Where should cron scheduling live?',
        options: ['In every web dyno', 'In one scheduler that enqueues while workers scale separately', 'In the browser', 'In DNS'],
        answer: 1,
        explanation: 'Single scheduler plus scalable workers avoids duplicate ticks and lets each side scale on its own signal.'
      }
    ]
  }
]

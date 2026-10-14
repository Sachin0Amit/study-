import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 13
// Node.js and Express: Servers, Routing and Middleware (Sections 13.1 – 13.5)
// Master study content.
// ============================================================================

export const webCh13Content: SectionContent[] = [
  // ---------------------------------------------------------------- 13.1
  {
    sectionId: 'web-ch13-s1',
    readingTime: 8,
    intro: 'Node.js runs JavaScript outside the browser on the V8 engine with a nonblocking event loop and a module system that every backend builds on. This section covers the runtime model, the module formats, the package manager files, and the command line inputs that configure a server. You will finish able to scaffold, run, and script a Node backend with confidence.',
    objectives: [
      'Explain the Node event loop and why blocking it harms throughput',
      'Distinguish CommonJS require from ESM import and configure the type field',
      'Read package.json scripts and use npm run plus npx for tooling',
      'Read argv and env inputs and keep secrets out of source control'
    ],
    concepts: [
      {
        term: 'Event loop and nonblocking I/O',
        kind: 'definition',
        statement: 'Node runs JavaScript on a single thread with a **nonblocking event loop** that offloads I/O to the system while JavaScript keeps handling callbacks in `process.nextTick` and promise queues. A database call returns immediately with a pending promise so the loop stays free to serve other requests. Blocking the loop with heavy sync work freezes every connection, which is why CPU work moves to workers or queues.',
        detail: 'Think of the loop as one cashier taking orders while the kitchen works in parallel. Keep the cashier fast and the kitchen async.'
      },
      {
        term: 'CommonJS versus ESM modules',
        kind: 'definition',
        statement: 'Node historically used **CommonJS modules** loaded with `require` and exported with `module.exports`, while modern code prefers **ECMAScript modules** using `import` and `export` from overt file paths. The `type` field in `package.json` selects the default, with `"type": "module"` enabling ESM and file extensions such as `.mjs` forcing it per file. Mixed projects use dynamic `import()` to load ESM from CommonJS without renaming everything at once.',
        detail: 'New backends in 2026 default to ESM. Use import syntax and explicit extensions for forward compatibility.'
      },
      {
        term: 'package.json scripts and semver ranges',
        kind: 'notation',
        statement: 'The **scripts table** in `package.json` names repeatable commands such as `npm run dev` that hide long tool invocations behind short memorable names. Dependencies use **semantic version ranges** such as `^2.4.0` for compatible updates and `~2.4.0` for patch only updates. Scripts plus locked versions make onboarding one clone plus one install plus one run command.',
        detail: 'Standard scripts are dev for watch mode, start for production, test for the suite, and lint plus typecheck for quality gates.'
      },
      {
        term: 'argv and env inputs',
        kind: 'method',
        statement: 'Command line arguments arrive in **process arguments** via `process.argv`, where the first two entries are the Node binary and the script path and real flags start at index two. Environment values arrive in **process environment** via `process.env` as strings such as `process.env.PORT` with a code fallback. Argv suits per invocation flags while env suits per machine secrets and URLs.',
        detail: 'Parse argv with a tiny parser, coerce ports with Number, and fail fast with a clear message when a required env value is missing.'
      },
      {
        term: 'npm, npx and lockfiles',
        kind: 'method',
        statement: 'The **npm registry client** behind `npm install` resolves the dependency tree recorded in `package-lock.json`, and reproducible installs use the **clean install** command `npm ci` on servers and CI. The **package runner** `npx` executes one off binaries such as `npx tsc --noEmit` without a global install. Committing the lockfile guarantees every machine installs the identical tree.',
        detail: 'Use npm install while developing, npm ci in Docker and CI, and npx for scaffolders and linters you do not want installed globally.'
      }
    ],
    examples: [
      {
        title: 'Trace event loop ordering',
        problem: 'Predict the log order of sync code, a microtask, and a timer:\n```js\nconsole.log("a");\nprocess.nextTick(function () { console.log("b"); });\nsetTimeout(function () { console.log("c"); }, 0);\nconsole.log("d");\n```',
        steps: [
          { label: 'Step 1: Sync runs first', text: '```js\nconsole.log("a"); // runs immediately\nconsole.log("d"); // runs immediately after, before any async\n```\nSync statements execute in order, so a then d print before anything queued.' },
          { label: 'Step 2: Microtasks drain next', text: '```js\nprocess.nextTick(function () { console.log("b"); }); // microtask queue\n```\nThe nextTick queue drains before timers, so b prints after d but before c. Promises behave the same way.' },
          { label: 'Step 3: Timer fires last', text: '```js\nsetTimeout(function () { console.log("c"); }, 0); // macrotask, next loop turn\n```\nEven with zero delay the timer waits for the current turn plus microtasks, so c prints last.' }
        ],
        result: 'Order is a, d, b, c. The lesson is that sync beats microtasks and microtasks beat timers, so never block the turn with slow sync work.'
      },
      {
        title: 'Build a tiny configurable server entry',
        problem: 'Write an npm script plus a server entry that reads port from argv or env with a fallback.',
        steps: [
          { label: 'Step 1: Add scripts', text: '```js\n// package.json fragment\n// "scripts": { "dev": "node --watch src/server.js", "start": "node src/server.js" }\n```\nThe dev script enables watch mode while start runs plain Node for production.' },
          { label: 'Step 2: Read inputs', text: '```js\nconst portArg = process.argv[2];\nconst port = Number(portArg || process.env.PORT || 3000);\nconsole.log("listening on " + port);\n```\nArgv wins over env, env wins over the 3000 fallback, and Number coerces the string to a number.' },
          { label: 'Step 3: Run it', text: '```bash\nnpm run dev -- 4000\nPORT=5000 npm start\n```\nThe first command passes 4000 through argv, the second supplies the port through env.' }
        ],
        result: 'One entry point supports local flags, deployed env values, and a sane default without code changes per environment.'
      }
    ],
    keyTakeaways: [
      'Node multiplexes many connections on one thread with a nonblocking event loop.',
      'New projects use ESM import syntax with the type module setting.',
      'Scripts in package.json plus a committed lockfile make installs reproducible.',
      'Argv carries per run flags while env carries per machine config and secrets.',
      'Use npm ci on servers and npx for one off tools without global installs.'
    ],
    quiz: [
      {
        q: 'What prints for a, microtask b, timer c, sync d in that order?',
        options: ['a, b, c, d', 'a, d, b, c', 'a, d, c, b', 'b, a, d, c'],
        answer: 1,
        explanation: 'Sync code a and d runs first, then the nextTick microtask b drains, then the zero delay timer c fires on the next turn.'
      },
      {
        q: 'Which file selects ESM by default?',
        options: ['tsconfig with strict true', 'package.json with type module', 'package-lock with version three', '.env with NODE_ENV production'],
        answer: 1,
        explanation: 'The type field controls the default module format, so type module makes .js files parse as ESM with import and export.'
      },
      {
        q: 'What is the difference between npm install and npm ci?',
        options: ['ci is faster but ignores package.json', 'install updates the tree while ci reproduces the lockfile exactly', 'ci works only on Windows', 'install never writes a lockfile'],
        answer: 1,
        explanation: 'Clean install deletes node modules and installs exactly what package-lock records, which is what servers and CI should do.'
      },
      {
        q: 'Where do real user flags start in process.argv?',
        options: ['Index zero', 'Index one', 'Index two', 'Index three'],
        answer: 2,
        explanation: 'Index zero is the Node binary and index one is the script path, so application flags begin at index two.'
      }
    ]
  },
  // ---------------------------------------------------------------- 13.2
  {
    sectionId: 'web-ch13-s2',
    readingTime: 9,
    intro: 'Express turns Node http primitives into composable routing and middleware that reads like a pipeline. This section covers app and router setup, parameters, the middleware chain with its ordering law, and the static plus body parsing helpers. You will finish able to trace any request from socket to response handler.',
    objectives: [
      'Create routes with params and query handling on app and Router',
      'Explain middleware order and place logging, auth, and routes correctly',
      'Identify the four argument error handler and why it must sit last',
      'Parse JSON bodies and serve static files without blocking routes'
    ],
    concepts: [
      {
        term: 'App, Router and route parameters',
        kind: 'definition',
        statement: 'An **Express application** created by `express()` owns global middleware while a **modular router** created by `express.Router()` groups related paths such as users under one mount point. Dynamic segments like `req.params.id` capture path values while `req.query.q` carries search strings after the question mark. Routers keep files small and let teams own one resource each.',
        detail: 'Mount with app.use with a prefix such as users router at api users, then define slash id inside the router for the item route.'
      },
      {
        term: 'Middleware chain and ordering law',
        kind: 'law',
        statement: 'Every request flows through **middleware in registration order**, where each function runs `next()` to pass control or ends the response with `res.json`. Logging and security middleware must be registered before routes, and auth must precede any handler it protects. Reordering changes behavior, so order is part of the program logic, not decoration.',
        detail: 'Read app.use calls top to bottom as the request path. If a request never reaches a route, a middleware above it swallowed or blocked the call.'
      },
      {
        term: 'Four argument error middleware',
        kind: 'law',
        statement: 'Express recognizes an **error handler** only by its four parameter signature `err, req, res, next`, and it must be registered after all routes and regular middleware. Calling `next(err)` anywhere skips remaining regular middleware and jumps to this handler. Without it, thrown errors become hanging requests or default HTML pages.',
        detail: 'Define one centralized error handler at the bottom of the file. Send JSON with a status and message there, never in each route.'
      },
      {
        term: 'Request and response flow',
        kind: 'method',
        statement: 'The **request object** `req` exposes params, query, body, and headers while the **response object** `res` builds the reply with `res.status(201).json(payload)`. Handlers should set the status explicitly before sending JSON so success and failure codes stay intentional. Chaining status then json keeps the shape consistent across the API.',
        detail: 'Default is 200, so POST create must set 201 and DELETE success should use 200 or 204 deliberately.'
      },
      {
        term: 'Static files and body parsing',
        kind: 'method',
        statement: 'Built in helpers add **static serving** with `express.static("public")` and **JSON parsing** with `express.json({ limit: "100kb" })` without extra packages. Static middleware belongs early so files short circuit before API routes, while the JSON parser must precede any route reading `req.body`. Limits on body size block oversized payload attacks at the edge.',
        detail: 'Place static first, then json parser, then API routers, then 404, then the four argument error handler last.'
      }
    ],
    examples: [
      {
        title: 'Trace middleware order with logging and auth',
        problem: 'Given logging, auth, and a route, show why order decides who runs.',
        steps: [
          { label: 'Step 1: Correct order', text: '```js\nconst express = require("express");\nconst app = express();\napp.use(function log(req, res, next) { console.log(req.method + " " + req.url); next(); });\napp.use("/api", function auth(req, res, next) {\n  if (!req.headers.authorization) { return res.status(401).json({ error: "missing token" }); }\n  next();\n});\napp.get("/api/profile", function (req, res) { res.json({ data: { name: "Ada" } }); });\n```\nLog sees everything, auth gates the API, and the route runs only with a token.' },
          { label: 'Step 2: Broken order', text: '```js\napp.get("/api/profile", handler);\napp.use("/api", auth); // too late, never runs for the route above\n```\nMiddleware only affects routes registered after it, so auth placed after the route leaves that route unprotected.' },
          { label: 'Step 3: Error jump', text: '```js\napp.use(function (err, req, res, next) { res.status(500).json({ error: "server error" }); });\n```\nAny next with an error skips to this four argument handler, which must sit after all routes.' }
        ],
        result: 'Registration order is execution order. Logging first, parsers next, auth before protected routes, error handler last.'
      },
      {
        title: 'Build a users router with params and 404',
        problem: 'Create a modular router for users with list, detail, and a JSON 404 fallthrough.',
        steps: [
          { label: 'Step 1: Create the router', text: '```js\nconst express = require("express");\nconst router = express.Router();\nconst users = [{ id: "1", name: "Ada" }, { id: "2", name: "Grace" }];\nrouter.get("/", function (req, res) { res.json({ data: users }); });\nrouter.get("/:id", function (req, res) {\n  const found = users.find(function (u) { return u.id === req.params.id; });\n  if (!found) { return res.status(404).json({ error: "user not found" }); }\n  res.json({ data: found });\n});\n```\nParams capture the id segment and query would carry filters such as role.' },
          { label: 'Step 2: Mount plus body parsing', text: '```js\nconst app = express();\napp.use(express.json({ limit: "100kb" }));\napp.use("/api/users", router);\napp.use(function notFound(req, res) { res.status(404).json({ error: "route not found" }); });\n```\nThe JSON parser precedes the router so POST bodies parse, and the 404 middleware catches unmatched paths.' },
          { label: 'Step 3: Add the error tail', text: '```js\napp.use(function (err, req, res, next) {\n  console.error(err);\n  res.status(err.status || 500).json({ error: "server error" });\n});\n```\nFour parameters mark this as the error handler, and its last position guarantees every next with error lands here.' }
        ],
        result: 'The router owns user paths, the app owns global order, and unmatched routes plus thrown errors both return JSON.'
      }
    ],
    keyTakeaways: [
      'Requests run through middleware in registration order via next calls.',
      'Routers group one resource and mount under a prefix for clean files.',
      'The four argument handler is the only true error middleware and sits last.',
      'Parse JSON before routes and serve static early for short circuiting.',
      'Auth middleware must precede every route it protects or it never runs.'
    ],
    quiz: [
      {
        q: 'How does Express recognize an error handling middleware?',
        options: ['It is named errorHandler', 'It has four parameters err, req, res, next', 'It is registered first', 'It returns a promise'],
        answer: 1,
        explanation: 'Arity is the signal: only a function with err plus req, res, and next is treated as an error handler.'
      },
      {
        q: 'Auth middleware is registered after a protected route. What happens?',
        options: ['It still protects the route', 'The route runs without auth because order is execution order', 'Express throws at startup', 'The route returns 500'],
        answer: 1,
        explanation: 'Middleware affects only routes registered after it, so late auth never sees earlier routes.'
      },
      {
        q: 'Where does req.params.id come from for GET users abc?',
        options: ['The query string', 'The dynamic path segment id', 'The JSON body', 'The Authorization header'],
        answer: 1,
        explanation: 'Colon segments capture path values into params, while text after the question mark lands in query.'
      },
      {
        q: 'Which order is correct?',
        options: ['Routes, json parser, error handler, logging', 'Logging, json parser, routes, 404, error handler', 'Error handler, routes, logging, 404', 'Static, error handler, routes, json parser'],
        answer: 1,
        explanation: 'Logging and parsing run first, then routes, then the 404 fallthrough, then the four argument error handler last.'
      },
      // Placement-pattern: middleware registration order (original)
      {
        q: "An Express app parses JSON bodies and then defines routes:\n```js\napp.use(express.json());\napp.post('/api/notes', (req, res) => res.json({ got: req.body }));\n```\nWhat happens if the two statements swap order?",
        options: ["`req.body` arrives `undefined` on POST, because middleware runs in registration order and the parser no longer sees the request first", "Nothing changes: Express reorders body parsers automatically", "Routes stop matching entirely", "GET requests break but POST keeps working"],
        answer: 0,
        explanation: "Step 1: The data given is a parser registration and a route whose handler reads the parsed body. Step 2: The governing rule is pipeline order: middleware and routes execute in registration sequence, each seeing the request only after earlier stages have transformed it. Step 3: Tracing the swapped app, the route handler runs before any parsing, reads the still-absent `req.body` as `undefined`, and the parser stage afterward has no consumer left. Step 4: The distractors fail because no automatic reordering exists, route matching is unaffected by body stages, and the breakage concerns parsing rather than the HTTP verb. Step 5: Therefore the parser must stay registered before the routes that need it."
      },
      // Placement-pattern: centralized error middleware shape (original)
      {
        q: "An async route throws, and the app must answer 500 with a safe envelope. Which handler catches it?",
        options: ["A two-argument `(req, res)` handler placed anywhere in the file", "A `try/catch` block repeated inside every API client", "Deleting the route so it cannot throw", "A four-argument `(err, req, res, next)` handler registered after the routes, reached via `next(err)`"],
        answer: 3,
        explanation: "Step 1: The data given is a throwing route needing one uniform failure response. Step 2: The governing rules are handler recognition by arity, four arguments marking an error handler, positioning after the routes it guards, and forwarding through `next(err)` from async code. Step 3: Tracing the failure, the throw forwards to the centralized handler, which logs the internals privately and answers a fixed safe envelope with status 500. Step 4: The distractors fail because two-argument functions are ordinary handlers, client-side catching cannot shape server responses, and deleting routes abandons the feature. Step 5: Therefore the trailing four-argument handler is the correct catcher."
      }
    ]
  },
  // ---------------------------------------------------------------- 13.3
  {
    sectionId: 'web-ch13-s3',
    readingTime: 8,
    intro: 'REST is a set of conventions for naming resources and using HTTP verbs and status codes so clients can guess behavior. This section covers resource naming, verb semantics with idempotency, the status code map, and headers plus response shapes. You will finish able to design an API that returns the right code for every outcome.',
    objectives: [
      'Name resources with plural nouns and nest sparingly',
      'Choose verbs by safety and idempotency including PUT versus PATCH',
      'Apply the status code map from 200 through 500 correctly',
      'Return consistent envelopes with headers such as Location and ETag'
    ],
    concepts: [
      {
        term: 'Resources as plural nouns',
        kind: 'definition',
        statement: 'A **resource collection** uses a plural noun such as `GET /api/users` for the list and `GET /api/users/42` for one item, with verbs supplying the action. Nesting stays shallow, such as posts under users only one level deep, to keep URLs stable. Query strings carry filters and paging, never new verbs in the path.',
        detail: 'Avoid verbs in paths such as getUsers. The HTTP verb plus noun URL already says what happens.'
      },
      {
        term: 'Verbs, safety and idempotency',
        kind: 'law',
        statement: 'Safe methods such as **idempotent GET** with `GET /api/users` never change state, while **idempotent writes** such as `PUT /api/users/42` and `DELETE /api/users/42` can repeat without new effects. The **partial update** verb `PATCH /api/users/42` changes only supplied fields and POST creates under a collection without idempotency. Retries are safe only for idempotent verbs.',
        detail: 'Use POST for create, GET for read, PUT for full replace, PATCH for partial update, DELETE for remove.'
      },
      {
        term: 'Status code map',
        kind: 'notation',
        statement: 'The **success range** uses `200` for OK, `201` for created with a Location header, and `204` for no content after deletes. The **client error range** uses `400` for bad input, `401` for missing auth, `403` for forbidden, `404` for missing resource, `409` for conflicts, and `422` for valid syntax with semantic errors. The **server range** reserves `500` for crashes so clients know a retry may help later.',
        detail: 'Memorize the map as 200 and 201 and 204 for success, 400 and 401 and 403 and 404 and 409 and 422 for client faults, 500 for server faults.'
      },
      {
        term: 'Headers that carry metadata',
        kind: 'method',
        statement: 'Response **headers** such as `Location: /api/users/42` tell the client where a created item lives, while `ETag` plus `Cache-Control` enable conditional and cached reads. Requests declare intent with `Content-Type: application/json` and `Accept: application/json` so the server parses correctly. Auth travels in `Authorization: Bearer token`, never in URLs.',
        detail: 'Set Location on every 201, honor If-None-Match with 304, and never log raw bearer tokens.'
      },
      {
        term: 'Consistent response envelopes',
        kind: 'insight',
        statement: 'A **response envelope** such as `{ data: {...} }` for success and `{ error: { code, message } }` for failure lets one client parser handle every route. Collections add **paging metadata** with `meta: { nextCursor, total }` beside the data array. Consistency beats cleverness because clients code against the shape, not the docs paragraph.',
        detail: 'Pick one envelope on day one and enforce it with a helper such as res.locals or a json responder function.'
      }
    ],
    examples: [
      {
        title: 'Design a todos API with correct codes',
        problem: 'Choose verb, path, and status for create, read, update, and delete of todos.',
        steps: [
          { label: 'Step 1: Create and read', text: '```js\n// POST /api/todos -> 201 with Location\n// GET /api/todos -> 200 with { data: [...], meta: {...} }\n// GET /api/todos/abc -> 200 hit, 404 miss\n```\nCreate returns the new URL in Location, list returns an envelope with paging metadata.' },
          { label: 'Step 2: Update and delete', text: '```js\n// PUT /api/todos/abc -> 200 with full replacement\n// PATCH /api/todos/abc -> 200 with partial fields\n// DELETE /api/todos/abc -> 204 with empty body\n```\nPUT replaces the whole object, PATCH merges fields, DELETE returns no content on success.' },
          { label: 'Step 3: Errors', text: '```js\n// missing title -> 400 { error: { code: "VALIDATION", message: "title required" } }\n// duplicate slug -> 409 conflict\n// crash -> 500 generic message, full stack only in logs\n```\nEach failure maps to its client or server code with one envelope shape.' }
        ],
        result: 'Five verbs plus six codes cover the whole resource lifecycle with predictable client handling.'
      },
      {
        title: 'Fix a sloppy API',
        problem: 'This API uses GET for deletes and always returns 200. Repair it.',
        steps: [
          { label: 'Step 1: Spot verb abuse', text: '```js\n// BAD: GET /api/deleteUser?id=1 with 200 always\n// GOOD: DELETE /api/users/1 with 204 or 404\n```\nGET must stay safe and cacheable, so deletes move to DELETE with an item path.' },
          { label: 'Step 2: Fix status codes', text: '```js\n// BAD: res.json({ err: "nope" }) with implied 200\n// GOOD: res.status(404).json({ error: { code: "NOT_FOUND", message: "user missing" } })\n```\nErrors need their 400 range code, not 200 with a string, so caches and clients react correctly.' },
          { label: 'Step 3: Add headers', text: '```js\nres.status(201).set("Location", "/api/users/7").json({ data: created });\n```\nCreated responses point at the new resource so clients need no second lookup.' }
        ],
        result: 'Correct verbs enable safe retries and caching, correct codes enable generic client error handling, and Location removes a round trip.'
      }
    ],
    keyTakeaways: [
      'Name collections with plural nouns and keep nesting to one level.',
      'GET, PUT, and DELETE are idempotent while POST is not.',
      'Use 200 and 201 and 204 for success and the 400 range for client faults.',
      'Return Location on create and use ETag plus Cache-Control for reads.',
      'Wrap every reply in one data or error envelope with paging metadata.'
    ],
    quiz: [
      {
        q: 'What should POST /api/users return on success?',
        options: ['200 with no body', '201 with Location and the created object', '204 with empty body', '302 redirect to home'],
        answer: 1,
        explanation: 'Create succeeds with 201, points at the new URL in Location, and returns the created representation.'
      },
      {
        q: 'Which verb is safe and idempotent?',
        options: ['POST', 'GET', 'POST to transfer', 'CONNECT'],
        answer: 1,
        explanation: 'GET never changes state and repeats with the same effect, while POST creates a new resource per call.'
      },
      {
        q: 'Duplicate email on signup should return?',
        options: ['400 generic', '404 not found', '409 conflict', '500 crash'],
        answer: 2,
        explanation: 'A uniqueness clash with current state is a 409 conflict, distinct from malformed input at 400.'
      },
      {
        q: 'What belongs in the path versus the query string?',
        options: ['Filters in path, resource id in query', 'Resource hierarchy in path, filters and paging in query', 'Verbs in path, nouns in query', 'Tokens in path, ids in query'],
        answer: 1,
        explanation: 'Paths name the resource tree with nouns while the query string carries search, sort, and paging options.'
      }
    ]
  },
  // ---------------------------------------------------------------- 13.4
  {
    sectionId: 'web-ch13-s4',
    readingTime: 9,
    intro: 'Validation, error handling, and CORS decide whether an API fails loudly and safely or leaks and confuses. This section covers Zod validate then handle flow, centralized errors, safe messages, and cross origin policy. You will finish able to reject bad input at the boundary with clean JSON errors.',
    objectives: [
      'Validate body, query, and params with Zod before touching logic',
      'Forward errors with next and map them in one central handler',
      'Return safe client messages while logging full server detail',
      'Configure CORS allowlists and handle preflight correctly'
    ],
    concepts: [
      {
        term: 'Validate then handle with Zod',
        kind: 'method',
        statement: 'The **validate then handle rule** parses `req.body` with a `z.object` schema and only runs business logic on the parsed output. The **safe parse result** from `schema.safeParse(req.body)` separates success data from field level issues without throwing. Rejected input returns 400 with per field messages before any database call.',
        detail: 'Define one schema per route, coerce query strings with z.coerce, and reuse schemas between client and server from a shared package. This is the validate-then-handle flow.'
      },
      {
        term: 'Centralized error middleware',
        kind: 'method',
        statement: 'Route handlers forward failures with **error passing** via `next(err)` instead of sending responses inline, so one handler owns the mapping. A custom **app error class** such as `AppError` carries `status` plus `code` so the central handler can switch on known versus unknown faults. Unknown errors become generic 500 responses with a logged stack.',
        detail: 'Wrap async handlers so rejected promises reach next automatically, especially on Express 4 where they otherwise hang.'
      },
      {
        term: 'Safe error messages',
        kind: 'law',
        statement: 'Client responses expose **safe messages** such as `res.status(400).json({ error: "title required" })` with actionable wording and no internals. Server **logs** keep the full stack, SQL, and user id for debugging but never echo them to the browser. Stack traces and table names in responses hand attackers a map of the system.',
        detail: 'Rule of thumb is that 400 range errors can be specific while 500 range errors stay generic to clients.'
      },
      {
        term: 'CORS allowlist and preflight',
        kind: 'definition',
        statement: 'Browsers enforce the **same origin policy** and ask permission with a **preflight OPTIONS** request carrying `Origin` plus `Access-Control-Request-Method` before cross origin writes. The server answers with **allowlist headers** such as `Access-Control-Allow-Origin` for exact trusted origins plus allowed methods and headers. The `cors` package with an origin function implements the check in a few lines.',
        detail: 'Never reflect arbitrary Origin with credentials enabled. List the app domains explicitly and keep the API closed to everything else.'
      },
      {
        term: 'Async errors and 404 fallthrough',
        kind: 'insight',
        statement: 'Express 4 does **not catch rejected promises**, so an async handler needs a `catch(next)` wrapper or an `asyncHandler` helper to reach the error middleware. A **404 fallthrough** middleware after all routes converts unmatched paths to JSON instead of default HTML. Together they guarantee every failure path returns the envelope, not a hang or a stack page.',
        detail: 'Express 5 auto forwards async errors, but wrapping keeps code portable across both major versions.'
      }
    ],
    examples: [
      {
        title: 'Add Zod validation to user creation',
        problem: 'Reject bad POST /api/users bodies with field errors before database access.',
        steps: [
          { label: 'Step 1: Define the schema', text: '```js\nconst { z } = require("zod");\nconst createUserSchema = z.object({\n  name: z.string().min(2),\n  email: z.string().email(),\n  age: z.number().int().min(13).optional()\n});\n```\nThe schema states types plus constraints in one place, shared with the frontend when possible.' },
          { label: 'Step 2: Validate then handle', text: '```js\napp.post("/api/users", function (req, res, next) {\n  const parsed = createUserSchema.safeParse(req.body);\n  if (!parsed.success) {\n    return res.status(400).json({ error: { code: "VALIDATION", fields: parsed.error.flatten().fieldErrors } });\n  }\n  next(); // or run creation with parsed.data\n});\n```\nParsing gates logic: invalid bodies return 400 with per field messages and never touch the database.' },
          { label: 'Step 3: Coerce query example', text: '```js\nconst listQuery = z.object({ page: z.coerce.number().int().min(1).default(1) });\nconst q = listQuery.parse(req.query); // "2" becomes 2\n```\nCoercion handles the stringly nature of query params without manual Number calls everywhere.' }
        ],
        result: 'Bad input fails fast with structured 400 errors while valid data flows typed into the handler.'
      },
      {
        title: 'Wire CORS plus centralized errors',
        problem: 'Allow only the web app origin and convert every error to the JSON envelope.',
        steps: [
          { label: 'Step 1: CORS allowlist', text: '```js\nconst cors = require("cors");\nconst allowed = ["https://app.example.com", "http://localhost:3000"];\napp.use(cors({\n  origin: function (origin, cb) {\n    if (!origin || allowed.includes(origin)) { return cb(null, true); }\n    cb(new Error("cors blocked"));\n  },\n  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]\n}));\n```\nOnly listed origins receive allow headers, with server to server calls unaffected by CORS.' },
          { label: 'Step 2: Central handler', text: '```js\napp.use(function (err, req, res, next) {\n  console.error({ url: req.url, message: err.message, stack: err.stack });\n  const status = err.status || 500;\n  const message = status < 500 ? err.message : "server error";\n  res.status(status).json({ error: { code: err.code || "INTERNAL", message: message } });\n});\n```\nKnown 400 range errors stay specific while 500 stays generic, with full detail only in logs.' },
          { label: 'Step 3: Async wrapper', text: '```js\nfunction asyncHandler(fn) { return function (req, res, next) { Promise.resolve(fn(req, res, next)).catch(next); }; }\napp.get("/api/report", asyncHandler(async function (req, res) { res.json({ data: "ok" }); }));\n```\nThe wrapper forwards rejections to the central handler on Express 4 and is harmless on Express 5.' }
        ],
        result: 'Trusted browsers pass preflight, blocked origins fail closed, and every throw becomes one safe JSON shape.'
      }
    ],
    keyTakeaways: [
      'Parse with Zod first and run logic only on validated data.',
      'Forward with next to one error handler that maps status and code.',
      'Keep 400 messages specific and 500 messages generic with full logs.',
      'Allowlist exact origins for CORS and never reflect arbitrary origins.',
      'Wrap async handlers and add a JSON 404 so no path hangs or leaks HTML.'
    ],
    quiz: [
      {
        q: 'What does validate then handle mean?',
        options: ['Write to the DB then validate', 'Parse input with a schema before any business logic', 'Validate only in production', 'Skip validation for internal routes'],
        answer: 1,
        explanation: 'Parsing at the boundary with safeParse gates logic so invalid bodies return 400 before side effects.'
      },
      {
        q: 'How should an unknown server error respond?',
        options: ['Full stack trace to the client', 'Generic 500 message with detail only in logs', '200 with an error string', 'Redirect to home'],
        answer: 1,
        explanation: 'Clients get a safe generic message while operators keep the stack, SQL, and user id in logs.'
      },
      {
        q: 'What does a CORS preflight ask?',
        options: ['The database password', 'Whether the Origin may use the method and headers', 'The npm version', 'The TLS certificate chain'],
        answer: 1,
        explanation: 'The OPTIONS request carries Origin plus requested method and headers, and the server allowlists them explicitly.'
      },
      {
        q: 'Why wrap async handlers on Express 4?',
        options: ['For faster JSON', 'Because rejected promises do not reach error middleware otherwise', 'To enable CORS', 'To parse query strings'],
        answer: 1,
        explanation: 'Express 4 only catches sync throws, so the wrapper catches rejections and forwards them with next.'
      }
    ]
  },
  // ---------------------------------------------------------------- 13.5
  {
    sectionId: 'web-ch13-s5',
    readingTime: 7,
    intro: 'Configuration, logging, and file access are the unglamorous parts that decide whether an app survives real environments. This section covers env per environment, boot time config validation, structured logs, and safe file paths. You will finish able to run one build in dev, staging, and production with observability built in.',
    objectives: [
      'Separate config per environment with env files and NODE_ENV',
      'Validate required config at boot and fail fast with clear errors',
      'Emit structured JSON logs with levels and request ids',
      'Read and write files safely with path joins and async fs'
    ],
    concepts: [
      {
        term: 'Env per environment',
        kind: 'method',
        statement: 'Each deploy supplies its own **environment file** such as `.env.development` and `.env.production` loaded into `process.env`, with `NODE_ENV` selecting behavior like verbose errors versus cached assets. Secrets stay in the platform vault or local `.env` that git ignores, never in committed code. One container image plus different env values promotes cleanly from staging to production.',
        detail: 'Document every variable with an example file such as env example, and read them through one config module.'
      },
      {
        term: 'Config validation on boot',
        kind: 'method',
        statement: 'A **config schema** built with `z.object({ PORT: z.coerce.number() })` parses `process.env` at startup and throws before listening on missing or malformed values. **Fail fast boot** means a typo in a database URL crashes in seconds with a named message, not minutes into traffic. Validated config exports typed constants the rest of the app imports.',
        detail: 'Treat config as untrusted input. Validate once at boot so handlers never null check env inline.'
      },
      {
        term: 'Structured logging',
        kind: 'method',
        statement: 'Production logs are **JSON lines** such as `logger.info({ userId: "42", ms: 12 })` that machines can filter, not pretty strings humans must grep. **Level routing** with `debug` plus `info` plus `warn` plus `error` controls verbosity per environment. Request ids tied from middleware through logs let traces follow one call across services.',
        detail: 'Use pino or winston in production and pretty print only in development. Log context objects, not interpolated sentences.'
      },
      {
        term: 'Safe file paths and async fs',
        kind: 'method',
        statement: 'File access builds **joined paths** with `path.join(__dirname, "data", file)` so separators stay correct across operating systems. The **promise fs API** from `fs/promises` with `await readFile` avoids blocking the event loop unlike sync variants. User supplied names must be allowlisted or basename stripped to block traversal with dot dot segments.',
        detail: 'Resolve then verify the final path starts with the intended directory before reading or writing.'
      },
      {
        term: 'Graceful shutdown',
        kind: 'insight',
        statement: 'A **drain on signal** handler for `SIGTERM` stops accepting connections with `server.close()` while finishing in flight requests before exit. **Health endpoints** such as `GET /health` let orchestrators wait for readiness and route around dying instances. Abrupt kills drop responses, while graceful shutdown keeps deploys invisible to users.',
        detail: 'Close the HTTP server, then the database pool, then exit, with a timeout that forces exit if draining stalls.'
      }
    ],
    examples: [
      {
        title: 'Build a validated config module',
        problem: 'Centralize env access so missing values fail at boot with a clear message.',
        steps: [
          { label: 'Step 1: Define the schema', text: '```js\nconst { z } = require("zod");\nconst configSchema = z.object({\n  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),\n  PORT: z.coerce.number().int().min(1).default(3000),\n  DATABASE_URL: z.string().min(1, "DATABASE_URL required")\n});\n```\nEvery required value is named once with its type and default.' },
          { label: 'Step 2: Parse at boot', text: '```js\nconst config = configSchema.parse(process.env);\nmodule.exports = config;\n```\nParsing throws on the first bad value before the server listens, with a field level message.' },
          { label: 'Step 3: Use the constant', text: '```js\nconst config = require("./config");\napp.listen(config.PORT, function () { console.log("up on " + config.PORT); });\n```\nHandlers import typed constants instead of reading raw env strings inline.' }
        ],
        result: 'Bad config crashes in seconds with a named error while good config flows typed through the app.'
      },
      {
        title: 'Add logging plus safe file read',
        problem: 'Log each request with an id and serve a file without traversal risk.',
        steps: [
          { label: 'Step 1: Request logging', text: '```js\nconst pino = require("pino");\nconst logger = pino({ level: process.env.NODE_ENV === "production" ? "info" : "debug" });\napp.use(function (req, res, next) {\n  req.id = Math.random().toString(36).slice(2);\n  logger.info({ id: req.id, method: req.method, url: req.url });\n  next();\n});\n```\nEach line is JSON with the request id so later lines for one call group together.' },
          { label: 'Step 2: Safe file path', text: '```js\nconst path = require("path");\nconst { readFile } = require("fs/promises");\napp.get("/api/docs/:name", async function (req, res, next) {\n  try {\n    const safe = path.basename(req.params.name);\n    const full = path.join(__dirname, "data", safe);\n    const text = await readFile(full, "utf8");\n    res.json({ data: text.slice(0, 2000) });\n  } catch (err) { next(err); }\n});\n```\nBasename strips directory tricks and join keeps the read inside the data folder with async I/O.' },
          { label: 'Step 3: Graceful close', text: '```js\nconst server = app.listen(3000);\nprocess.on("SIGTERM", function () { server.close(function () { process.exit(0); }); });\n```\nThe process finishes in flight work on deploy signals instead of dropping connections.' }
        ],
        result: 'Requests are traceable by id, files stay inside their directory, and deploys drain instead of cutting traffic.'
      }
    ],
    keyTakeaways: [
      'One image runs everywhere with per environment env values and NODE_ENV.',
      'Validate config at boot so bad env fails fast with a named error.',
      'Log JSON lines with levels and request ids for machine filtering.',
      'Join paths, use async fs, and strip user names to block traversal.',
      'Drain on SIGTERM behind a health endpoint for invisible deploys.'
    ],
    quiz: [
      {
        q: 'Why validate config at boot?',
        options: ['To make startup slower', 'To crash fast with a clear message before serving traffic', 'To skip env files', 'To log secrets'],
        answer: 1,
        explanation: 'Parsing env with a schema throws on the first bad value before listen, instead of failing mid request.'
      },
      {
        q: 'What is structured logging?',
        options: ['Pretty sentences with colors', 'JSON lines with fields such as userId and ms', 'Console log only in routes', 'No logs in production'],
        answer: 1,
        explanation: 'Fielded JSON lets log platforms filter by request id, level, and latency without fragile text grep.'
      },
      {
        q: 'How do you block path traversal for user file names?',
        options: ['Concatenate strings directly', 'Use basename plus join and verify inside the directory', 'Allow absolute paths', 'Trust the extension only'],
        answer: 1,
        explanation: 'Basename strips directory segments and join plus a prefix check keeps reads inside the intended folder.'
      },
      {
        q: 'What does graceful shutdown do?',
        options: ['Kills connections instantly', 'Stops accepting new work while finishing in flight requests', 'Deletes log files', 'Restarts npm'],
        answer: 1,
        explanation: 'Closing the server on SIGTERM drains active requests so rolling deploys stay invisible.'
      }
    ]
  }
]

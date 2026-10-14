import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 9: Async JavaScript, Network &
// Browser Storage (Sections 9.1 – 9.5). Master study content.
// ============================================================================

export const webCh09Content: SectionContent[] = [
  // ---------------------------------------------------------------- 9.1
  {
    sectionId: 'web-ch9-s1',
    readingTime: 9,
    intro: 'Most web work waits on something: a network response, a timer, or a file read. JavaScript handles waiting with one thread plus a queue, so this section climbs the async ladder from callbacks to promises to async and await. You will learn when work runs in sequence and when it runs in parallel.',
    objectives: [
      'Explain the event loop ordering of sync code, microtasks, and macrotasks',
      'Convert nested callbacks into promise chains and then into async and await',
      'Choose sequencing with await versus parallelism with Promise dot all',
      'Handle async failures with try and catch without unhandled rejections'
    ],
    concepts: [
      {
        term: 'Event loop and queue ordering',
        kind: 'definition',
        statement: 'JavaScript runs on a **single main thread** with an event loop that drains the call stack, then `microtasks`, then one macrotask at a time. Promise callbacks queue as **microtasks** and therefore run before timers and I/O callbacks. That is why a resolved promise always beats a `setTimeout` with zero delay.',
        detail: 'Mental model: sync code first, then every queued microtask, then one timer or event callback, then microtasks again. Logging inside a promise and inside a timer makes the order visible in DevTools.'
      },
      {
        term: 'Callbacks and inversion of control',
        kind: 'definition',
        statement: 'A **callback** is a function passed to another function so it runs later, such as the handler given to `addEventListener` or a timer. Nested async callbacks create the **pyramid of doom** where error handling and ordering scatter across levels. Promises fix this by returning a value that represents the future result.',
        detail: 'Use callbacks for one-shot events and simple listeners, and reach for promises as soon as two async steps must sequence or errors must funnel to one place.'
      },
      {
        term: 'Promise states and chaining',
        kind: 'definition',
        statement: 'A promise is always in one of three **settled states**: pending, fulfilled, or rejected, and `then` returns a new promise. Chaining with `then` and `catch` keeps one error channel for the whole sequence. A forgotten `catch` becomes an unhandled rejection that browsers report in the console.',
        detail: 'Return every inner promise from inside then callbacks, otherwise the outer chain does not wait. Prefer one terminal catch per user action over a catch after every step.'
      },
      {
        term: 'async and await sequencing',
        kind: 'method',
        statement: 'An **async function** always returns a promise, and `await` pauses that function until the awaited promise settles. Writing `const user = await getUser()` reads like **sequential code** while the thread stays free for rendering. Sequential awaits are correct when step two needs the value from step one.',
        detail: 'Await inside a loop forces one-at-a-time execution, which is slow for independent fetches. Mark the function async, wrap awaits in try and catch, and reserve looped awaits for genuinely dependent steps.'
      },
      {
        term: 'Parallelism with Promise combinators',
        kind: 'method',
        statement: 'Independent requests should start together with **parallel launch** and join with `Promise.all` instead of awaiting one by one. `Promise.all` rejects fast on the **first failure**, while `Promise.allSettled` waits for every outcome. Use `Promise.race` only for timeouts and first-wins contests, never for merging data.',
        detail: 'Pattern: build an array of promises first, then await the combinator once. Two 300 millisecond fetches take about 300 milliseconds in parallel but about 600 milliseconds when awaited in sequence.'
      }
    ],
    examples: [
      {
        title: 'Sequential versus parallel profile loads',
        problem: 'Load two independent user profiles and compare total time for await-in-sequence versus Promise dot all.',
        steps: [
          { label: 'Step 1: The slow sequential version', text: 'Start both fetches one after the other so the second waits:\n```js\nasync function loadSequential(ids) {\n  const a = await fetchUser(ids[0]);\n  const b = await fetchUser(ids[1]);\n  return [a, b];\n}\n```' },
          { label: 'Step 2: Launch in parallel instead', text: 'Create both promises before awaiting anything, then join once:\n```js\nasync function loadParallel(ids) {\n  const p1 = fetchUser(ids[0]);\n  const p2 = fetchUser(ids[1]);\n  return await Promise.all([p1, p2]);\n}\n```' },
          { label: 'Step 3: Measure the difference', text: 'Time both variants over the same fake latency:\n```js\nconsole.time("seq");\nawait loadSequential([1, 2]);\nconsole.timeEnd("seq");\nconsole.time("par");\nawait loadParallel([1, 2]);\nconsole.timeEnd("par");\n```' },
          { label: 'Step 4: Choose the rule', text: 'Independent work goes parallel with `Promise.all`, while dependent work stays sequential with `await`. Document which one each call site uses so reviewers can verify the choice.' }
        ],
        result: 'Parallel launch halves the wait for two independent requests, while sequential await remains correct when the second call needs the first result.'
      },
      {
        title: 'Async function with single error channel',
        problem: 'Fetch a user, then their orders, surfacing one friendly error for any failure with cleanup after.',
        steps: [
          { label: 'Step 1: Shape the async function', text: 'Keep one try block around the dependent steps:\n```js\nasync function loadDashboard(userId) {\n  try {\n    const user = await fetchUser(userId);\n    const orders = await fetchOrders(user.id);\n    return { user, orders };\n  } catch (err) {\n    throw new Error("Dashboard failed to load: " + err.message);\n  } finally {\n    hideSpinner();\n  }\n}\n```' },
          { label: 'Step 2: Handle at the call site', text: 'Await once and branch on success or failure:\n```js\nloadDashboard(7)\n  .then(renderDashboard)\n  .catch(showErrorBanner);\n```' },
          { label: 'Step 3: Avoid the unhandled rejection', text: 'Every promise path ends in either `then` plus `catch` or a surrounding try block. Check DevTools for unhandled rejection warnings after each new async call site.' }
        ],
        result: 'One try and catch pair covers both fetches, the spinner always hides in finally, and the UI shows exactly one error state.'
      }
    ],
    keyTakeaways: [
      'Sync code runs first, promise microtasks run next, and timer and event callbacks run after.',
      'Callbacks suit single events; promises and async functions suit sequenced work with shared errors.',
      'An async function returns a promise and await pauses only that function, never the thread.',
      'Independent requests launch together and join with Promise dot all; dependent steps await in order.',
      'Every promise chain needs a catch and every async body that awaits needs try and catch.'
    ],
    quiz: [
      {
        q: 'A script logs A synchronously, queues a promise log B, and sets a zero-delay timer log C. What prints?',
        options: ['A, B, C', 'A, C, B', 'B, A, C', 'C, A, B'],
        answer: 0,
        explanation: 'Synchronous code runs first, then microtasks such as promise callbacks, then the next macrotask such as the timer.'
      },
      {
        q: 'Two independent 300 millisecond fetches are awaited one after another. What is the total wait versus Promise dot all?',
        options: ['About the same in both cases', 'About 600 milliseconds sequential versus about 300 milliseconds parallel', 'Sequential is faster because it uses less memory', 'Parallel is slower because promises serialize'],
        answer: 1,
        explanation: 'Sequential awaits add latencies while parallel launch overlaps them, so the parallel join takes roughly the single slowest time.'
      },
      {
        q: 'What does Promise dot all do when one input promise rejects?',
        options: ['It waits for the rest and returns partial results', 'It rejects immediately with the first rejection reason', 'It retries the failed promise once', 'It resolves with undefined'],
        answer: 1,
        explanation: 'Promise dot all is fail-fast: the first rejection rejects the combined promise. Use Promise dot allSettled when every outcome is needed.'
      },
      {
        q: 'Where should a single error handler go for two dependent awaits?',
        options: ['Nowhere, async errors are silent', 'One try and catch around both awaits with cleanup in finally', 'A separate catch inside every expression', 'Only on the second await'],
        answer: 1,
        explanation: 'Dependent steps share one try block so any failure funnels to one catch, and finally guarantees cleanup such as hiding a spinner.'
      },
      // Placement-pattern: microtask versus timer ordering (original)
      {
        q: "In what order do the labels print?\n```js\nsetTimeout(() => console.log('timer'), 0);\nPromise.resolve().then(() => console.log('promise'));\nconsole.log('sync');\n```",
        options: ["`sync`, `promise`, `timer`", "`timer`, `promise`, `sync`", "`promise`, `sync`, `timer`", "`sync`, `timer`, `promise`"],
        answer: 0,
        explanation: "Step 1: The code given queues a zero-delay timer, queues a fulfilled-promise callback, then logs synchronously. Step 2: The governing rule is queue priority: synchronous code runs first, the microtask queue drains completely next, and macrotasks such as timers run only afterward. Step 3: Tracing execution, `sync` prints immediately, the promise callback drains from the microtask queue, and the timer callback runs in its later macrotask turn. Step 4: The distractors fail because no queued callback can precede synchronous code, and microtasks always drain before timers regardless of the zero delay. Step 5: Therefore the order is `sync`, `promise`, `timer`."
      }
    ]
  },
  // ---------------------------------------------------------------- 9.2
  {
    sectionId: 'web-ch9-s2',
    readingTime: 9,
    intro: 'The fetch API is how browsers talk to REST endpoints: request a URL, check the answer, and turn JSON into objects. This section teaches the full round trip from GET to POST, including headers, status checks, timeouts, and JSON serialization. You will leave able to consume any documented REST resource defensively.',
    objectives: [
      'Perform GET and POST requests with fetch including headers and bodies',
      'Validate responses with ok checks and status handling before parsing',
      'Serialize and parse JSON safely with correct content types',
      'Cancel slow requests with AbortController timeouts'
    ],
    concepts: [
      {
        term: 'fetch request shape',
        kind: 'definition',
        statement: 'The **fetch function** takes a URL plus an options object carrying `method`, `headers`, and `body` for non-GET verbs. It resolves for every HTTP answer including errors, so a **missing page still resolves** rather than rejecting. Only network failures and aborts reject the promise.',
        detail: 'Default is a GET with no body. For POST and PUT, set the method explicitly and pass a string body, usually JSON.'
      },
      {
        term: 'The ok check law',
        kind: 'law',
        statement: 'Always test the **ok flag** or the `status` code before reading the body, because fetch fulfills on HTTP errors. A `404` or `500` response parses as text or JSON just fine unless **you branch first**. Throw or return a typed error for non-ok statuses before calling any body reader.',
        detail: 'Pattern: if the ok flag is false, read a short error snippet and throw with status attached. Never assume a resolved fetch means success.'
      },
      {
        term: 'JSON round trip',
        kind: 'method',
        statement: 'Clients send JSON with `JSON.stringify` alongside the **content type header** set to `application/json`, and read it back with `res.json()`. The `res.json()` reader itself returns a **promise** that rejects on malformed bodies. Keep one parse site per response and validate the shape before rendering.',
        detail: 'Stringify only plain data, never functions or class instances. Parse inside the same try block as the ok check so bad payloads surface as one error.'
      },
      {
        term: 'AbortController timeouts',
        kind: 'method',
        statement: 'An **AbortController** gives fetch a `signal` that cancels the request when you call abort or a timer fires. Timed-out fetches reject with an **abort error** you must catch separately from HTTP errors. Always clear the timer on completion so successful requests do not abort late.',
        detail: 'Wire the same signal into every fetch of one user action so navigating away cancels all of them at once. Treat aborts as intentional cancellations, not crashes.'
      },
      {
        term: 'REST consumption discipline',
        kind: 'insight',
        statement: 'Well-behaved clients send **accept headers**, honor `status` semantics like `201` for created and `204` for empty, and never retry non-idempotent `POST` blindly. Query strings carry **filters and paging** such as `limit` and `cursor` while the path names the resource. Read the documented contract first and encode its assumptions in one helper.',
        detail: 'Centralize base URL, auth header, ok checks, timeouts, and JSON parsing in a small request helper. Every page then calls the helper instead of repeating fetch ceremony.'
      }
    ],
    examples: [
      {
        title: 'GET a paged list defensively',
        problem: 'Fetch page two of articles, rejecting on HTTP errors and malformed JSON with one clear message.',
        steps: [
          { label: 'Step 1: Build the URL with paging', text: 'Encode filters rather than concatenating strings by hand:\n```js\nconst url = new URL("https://api.example.com/articles");\nurl.searchParams.set("limit", "10");\nurl.searchParams.set("cursor", "abc123");\n```' },
          { label: 'Step 2: Fetch and check ok first', text: 'Branch on status before touching the body:\n```js\nconst res = await fetch(url, {\n  headers: { Accept: "application/json" }\n});\nif (!res.ok) {\n  throw new Error("List failed with status " + res.status);\n}\nconst page = await res.json();\n```' },
          { label: 'Step 3: Validate before render', text: 'Confirm the shape the docs promised:\n```js\nif (!Array.isArray(page.data)) {\n  throw new Error("Unexpected list shape");\n}\nrenderList(page.data);\n```' }
        ],
        result: 'HTTP errors throw with status attached, bad payloads throw on shape check, and only valid arrays reach the renderer.'
      },
      {
        title: 'POST JSON with a timeout',
        problem: 'Create a comment with a JSON body, aborting after five seconds and distinguishing aborts from server errors.',
        steps: [
          { label: 'Step 1: Arm the abort timer', text: 'Create one controller per submission:\n```js\nconst ctrl = new AbortController();\nconst timer = setTimeout(function () { ctrl.abort(); }, 5000);\n```' },
          { label: 'Step 2: Send the JSON body', text: 'Stringify the payload and label its content type:\n```js\nlet res;\ntry {\n  res = await fetch("https://api.example.com/comments", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ postId: 9, text: "Great post" }),\n    signal: ctrl.signal\n  });\n} finally {\n  clearTimeout(timer);\n}\n```' },
          { label: 'Step 3: Branch on outcome', text: 'Handle aborts, HTTP errors, and success on separate paths:\n```js\nif (!res.ok) {\n  throw new Error("Create failed with status " + res.status);\n}\nconst created = await res.json();\nappendComment(created);\n```' },
          { label: 'Step 4: Catch with discrimination', text: 'Surround the call with handling that names aborts:\n```js\ntry {\n  await postComment();\n} catch (err) {\n  showNotice(err.name === "AbortError" ? "Timed out, try again" : err.message);\n}\n```' }
        ],
        result: 'Slow servers trigger a friendly timeout, HTTP failures carry status, and success appends the parsed comment.'
      }
    ],
    keyTakeaways: [
      'fetch resolves on HTTP errors and rejects only on network failure or abort.',
      'Check the ok flag and status before calling any body reader such as res dot json.',
      'Send JSON with stringify plus the JSON content type and validate parsed shapes.',
      'Cancel with AbortController signals and treat abort errors as intentional.',
      'Centralize base URL, headers, ok checks, and timeouts in one request helper.'
    ],
    quiz: [
      {
        q: 'fetch receives a 404 response. What happens to the returned promise?',
        options: ['It rejects with a Not Found error', 'It fulfills, so you must check the ok flag yourself', 'It hangs until timeout', 'It resolves with null'],
        answer: 1,
        explanation: 'fetch fulfills for every completed HTTP exchange including errors; only network failures and aborts reject.'
      },
      {
        q: 'What is the correct order for reading a fetch response?',
        options: ['Call res dot json first, then check status', 'Check ok and status, then read and validate the body', 'Read the body twice to be safe', 'Skip checks for GET requests'],
        answer: 1,
        explanation: 'Status-first branching keeps error pages out of the JSON parser and gives errors with status attached.'
      },
      {
        q: 'How do you send a JSON POST with fetch?',
        options: ['Pass the object as body with no headers', 'Use JSON dot stringify for the body and set Content-Type to application slash json', 'Append the object to the URL', 'Send it as FormData always'],
        answer: 1,
        explanation: 'The body must be a string, so stringify the object and label it with the JSON content type header.'
      },
      {
        q: 'A fetch with an AbortController signal times out. How should the code react?',
        options: ['Treat it as success', 'Catch the abort error and show a timeout message distinct from server errors', 'Retry POST immediately in a loop', 'Ignore it because aborts are silent'],
        answer: 1,
        explanation: 'Aborts reject with an abort error; catching it separately lets the UI offer a retry instead of a crash report.'
      },
      // Placement-pattern: fetch error handling with ok check (original)
      {
        q: "This code requests a profile that does not exist; the server answers 404 with a JSON body. What happens?\n```js\nconst res = await fetch('/api/profile/7');\nconst body = await res.json();\n```",
        options: ["`fetch` throws on 404, so `res` is never assigned", "`res.json()` throws, because error bodies are always empty", "The browser redirects automatically to a working URL", "`fetch` fulfills with `ok` false and status 404, so the code must branch on `res.ok` before trusting `body`"],
        answer: 3,
        explanation: "Step 1: The data given is a request whose HTTP status reports a client error alongside a parseable body. Step 2: The governing rule is fetch resolution: the promise rejects only on network failure, while HTTP error statuses fulfill normally carrying `ok` false and the numeric status. Step 3: Tracing the lines, `res` arrives fulfilled with status 404, `body` parses the error payload, and any code treating it as profile data misbehaves unless it branches on `res.ok` first. Step 4: The distractors fail because no exception is raised for the status, error bodies parse normally, and no redirect is issued without redirect instructions. Step 5: Therefore an explicit `ok` check is required before using the body."
      }
    ]
  },
  // ---------------------------------------------------------------- 9.3
  {
    sectionId: 'web-ch9-s3',
    readingTime: 8,
    intro: 'Browsers offer a ladder of storage from tiny cookies to full offline databases, and each rung has different size, lifetime, and visibility. This section maps cookies, web storage, and IndexedDB onto real jobs like sessions, preferences, and offline queues. You will learn quotas, eviction, and which tier survives what.',
    objectives: [
      'Compare cookies, sessionStorage, localStorage, and IndexedDB by size and lifetime',
      'Store session and preference data with JSON wrappers and expiry',
      'Persist structured offline data in IndexedDB object stores',
      'Predict quota and eviction behavior and handle storage failures'
    ],
    concepts: [
      {
        term: 'Cookie tier',
        kind: 'definition',
        statement: 'Cookies are tiny **key value pairs** the browser attaches to matching requests via the `Cookie` header. Each cookie holds about **four kilobytes** and every cookie rides every request, so they suit **session identifiers**, never bulk data. Prefer `HttpOnly` plus `Secure` plus `SameSite` flags for anything sensitive.',
        detail: 'Set cookies from the server with attributes; read non-HttpOnly cookies sparingly from JS. Large or numerous cookies slow every request on the domain.'
      },
      {
        term: 'Web storage tier',
        kind: 'definition',
        statement: 'The `localStorage` object persists **string pairs** across restarts while `sessionStorage` lasts only for the **tab session**. Both hold roughly **five megabytes** per origin and share a **synchronous API** that blocks the main thread. They suit theme choices and drafts, never large lists or binary blobs.',
        detail: 'Only strings survive, so wrap values with JSON stringify and parse on read. Quote failures and quota errors must be caught because private mode can disable storage.'
      },
      {
        term: 'IndexedDB tier',
        kind: 'definition',
        statement: 'IndexedDB is the browser **object database** for structured records, indexes, and **transactions** across much larger quotas. Data lives in **object stores** opened with `indexedDB.open()` and queried by key or index, all asynchronously so the UI never blocks. It suits offline queues, caches, and full datasets that web storage cannot hold.',
        detail: 'Open a versioned database, create stores in the upgrade callback, then read and write inside transactions. Its API is verbose, so small promise wrappers pay off immediately.'
      },
      {
        term: 'Quotas and eviction',
        kind: 'law',
        statement: 'Origins share a **quota pool** that browsers grant per device, and pressure triggers **eviction** starting with the least recently used data. Persistent storage via `navigator.storage.persist()` requests **stronger protection**, while `navigator.storage.estimate()` reports current **usage and quota**. Always code the full-database path because space is never guaranteed.',
        detail: 'Catch quota errors on every write and degrade to memory plus a warning. Never assume a cached record survives a version update or a storage-pressure event.'
      },
      {
        term: 'Lifetime and privacy design',
        kind: 'insight',
        statement: 'Choose storage by **lifetime intent**: cookies for server-readable sessions, `sessionStorage` for per-tab wizards, `localStorage` for cross-session preferences, and `IndexedDB` for **offline truth**. Sensitive tokens belong in **HttpOnly cookies**, not in readable storage where injected scripts can steal them. Expire and purge deliberately instead of hoarding forever.',
        detail: 'Stamp cached records with saved-at times and a max age, and sweep on startup. Respect private browsing and clear-site-data signals rather than fighting them.'
      }
    ],
    examples: [
      {
        title: 'Safe preference store on localStorage',
        problem: 'Persist a theme choice with expiry and graceful fallback when storage is unavailable.',
        steps: [
          { label: 'Step 1: Write with JSON and timestamp', text: 'Wrap every value so expiry travels with it:\n```js\nfunction savePref(key, value, maxAgeMs) {\n  const record = { value: value, expires: Date.now() + maxAgeMs };\n  try {\n    localStorage.setItem(key, JSON.stringify(record));\n  } catch (err) {\n    console.warn("Storage unavailable, keeping in memory");\n    memoryCache[key] = record;\n  }\n}\n```' },
          { label: 'Step 2: Read with expiry check', text: 'Treat expired or corrupt records as missing:\n```js\nfunction readPref(key, fallback) {\n  try {\n    const raw = localStorage.getItem(key);\n    if (!raw) return fallback;\n    const rec = JSON.parse(raw);\n    if (rec.expires < Date.now()) {\n      localStorage.removeItem(key);\n      return fallback;\n    }\n    return rec.value;\n  } catch (err) {\n    return fallback;\n  }\n}\n```' },
          { label: 'Step 3: Apply on startup', text: 'Read once and paint before first render:\n```js\ndocument.documentElement.dataset.theme = readPref("theme", "light");\n```' }
        ],
        result: 'Theme survives restarts, stale values expire, and blocked storage degrades to memory without crashing.'
      },
      {
        title: 'Offline outbox in IndexedDB',
        problem: 'Queue form submissions while offline and flush them when connectivity returns.',
        steps: [
          { label: 'Step 1: Open the database and store', text: 'Version once and create the outbox store:\n```js\nconst openReq = indexedDB.open("appdb", 1);\nopenReq.onupgradeneeded = function () {\n  openReq.result.createObjectStore("outbox", { keyPath: "id", autoIncrement: true });\n};\n```' },
          { label: 'Step 2: Enqueue while offline', text: 'Write each submission as a record in a transaction:\n```js\nfunction enqueue(payload) {\n  const db = openReq.result;\n  const tx = db.transaction("outbox", "readwrite");\n  tx.objectStore("outbox").add({ payload: payload, savedAt: Date.now() });\n}\n```' },
          { label: 'Step 3: Flush on reconnect', text: 'Read all queued records and POST them in order:\n```js\nwindow.addEventListener("online", flushOutbox);\nasync function flushOutbox() {\n  const rows = await readAll("outbox");\n  for (const row of rows) { await postPayload(row.payload); }\n  await clearStore("outbox");\n}\n```' }
        ],
        result: 'Submissions survive closed tabs and dead networks, then flush exactly once when the browser reports online.'
      }
    ],
    keyTakeaways: [
      'Cookies are small and ride every request; keep them for session identifiers with safe flags.',
      'localStorage persists across restarts and sessionStorage lasts one tab; both store strings synchronously.',
      'IndexedDB holds large structured data with indexes and transactions, asynchronously.',
      'Quotas are shared and evictable; check estimate, request persistence, and catch quota errors.',
      'Put secrets in HttpOnly cookies, stamp caches with expiry, and purge deliberately.'
    ],
    quiz: [
      {
        q: 'Where should a session token live to resist theft by injected scripts?',
        options: ['localStorage for easy access', 'An HttpOnly Secure cookie with SameSite', 'sessionStorage as plain text', 'IndexedDB without encryption'],
        answer: 1,
        explanation: 'HttpOnly cookies are invisible to page scripts, and Secure plus SameSite constrain how they travel.'
      },
      {
        q: 'Which tier fits a multi-megabyte offline queue of submissions?',
        options: ['Cookies', 'localStorage', 'IndexedDB with an object store', 'A global variable'],
        answer: 2,
        explanation: 'Only IndexedDB offers large asynchronous structured storage with transactions; cookies and web storage are far too small and synchronous.'
      },
      {
        q: 'What does navigator dot storage dot estimate report?',
        options: ['CPU speed', 'Current usage and quota for the origin', 'Network latency', 'Cookie count'],
        answer: 1,
        explanation: 'The estimate API reveals how much of the shared quota pool the origin uses and what remains.'
      },
      {
        q: 'localStorage dot setItem throws in private mode. What is the correct handling?',
        options: ['Let the app crash', 'Catch the error and degrade to memory with a warning', 'Retry in a tight loop', 'Store the secret in the URL instead'],
        answer: 1,
        explanation: 'Storage is never guaranteed, so every write needs a catch path that keeps the session usable.'
      }
    ]
  },
  // ---------------------------------------------------------------- 9.4
  {
    sectionId: 'web-ch9-s4',
    readingTime: 8,
    intro: 'Heavy computation on the main thread freezes scrolling, typing, and animation because rendering waits its turn. Web workers move that work to background threads that talk back with messages. This section shows dedicated workers, transferable buffers, and when to reach for shared or service workers.',
    objectives: [
      'Move blocking computation off the main thread into a dedicated worker',
      'Exchange messages with postMessage and handle worker errors',
      'Transfer large buffers with transferables instead of copying',
      'Distinguish dedicated, shared, and service workers by job'
    ],
    concepts: [
      {
        term: 'Dedicated workers',
        kind: 'definition',
        statement: 'A **dedicated worker** is a background script owned by one page, created with `new Worker` pointing at a script URL. It has **no DOM access** and computes with pure data in and messages out. Terminate it with `worker.terminate()` when the job ends so threads do not leak.',
        detail: 'Ideal for parsing, sorting, image math, and compression. Keep workers focused on one job so reuse stays simple.'
      },
      {
        term: 'Messaging with postMessage',
        kind: 'method',
        statement: 'Pages and workers exchange data with **postMessage** on both ends and listen with `onmessage` handlers. The default path uses **structured cloning**, which copies values safely but slowly for big buffers. Always add `onerror` handling because worker exceptions never surface on the main stack.',
        detail: 'Design small message protocols with a type field such as start, progress, and done. Validate incoming shapes before acting on them.'
      },
      {
        term: 'Transferables and zero copy',
        kind: 'method',
        statement: 'Buffers listed in the **transfer list** move with `postMessage` by ownership instead of by copy, which makes large handoffs **near instant**. The sender loses access to the **neutered buffer** after transfer, so it must not touch it again. Transfer `ArrayBuffer` instances backing images, audio, and numeric batches.',
        detail: 'Without transfer, a hundreds-of-megabytes copy blocks both threads during cloning. With transfer, only the handle moves and the bytes stay put.'
      },
      {
        term: 'Shared and service workers',
        kind: 'definition',
        statement: 'A **shared worker** serves multiple tabs from one origin through `SharedWorker` ports, while a **service worker** proxies network traffic for **offline caching** and push. Shared workers suit **cross-tab coordination** like a single socket, and service workers suit **fetch interception** with cache strategies. Neither replaces a dedicated compute worker.',
        detail: 'Service workers require secure contexts and a registration lifecycle of install, activate, and fetch. Shared workers need port startup and explicit connections per tab.'
      },
      {
        term: 'Main-thread budget',
        kind: 'insight',
        statement: 'Smooth pages keep main-thread tasks under about **fifty milliseconds** so the browser hits its `requestAnimationFrame` rhythm. Work that loops over **large arrays** or parses megabytes belongs in a worker with **progress messages** back to a progress bar. Measure with DevTools performance traces before and after the move.',
        detail: 'If a trace shows long tasks during typing or scroll, that function is the worker candidate. Keep DOM updates on the main thread and numbers crunching off it.'
      }
    ],
    examples: [
      {
        title: 'Offload a heavy sort with progress',
        problem: 'Sort one million numbers without freezing the UI, reporting progress to a bar.',
        steps: [
          { label: 'Step 1: Create the worker script', text: 'Keep the worker free of DOM calls:\n```js\nself.onmessage = function (e) {\n  const arr = e.data.values;\n  arr.sort(function (a, b) { return a - b; });\n  self.postMessage({ type: "done", values: arr });\n};\n```' },
          { label: 'Step 2: Launch from the page', text: 'Send the batch and listen for the answer:\n```js\nconst sorter = new Worker("sorter.js");\nsorter.onmessage = function (e) {\n  if (e.data.type === "done") renderRows(e.data.values);\n};\nsorter.onerror = function (err) { showNotice("Sort failed"); };\nsorter.postMessage({ values: bigArray });\n```' },
          { label: 'Step 3: Clean up', text: 'Release the thread when the job completes:\n```js\nsorter.onmessage = function (e) {\n  renderRows(e.data.values);\n  sorter.terminate();\n};\n```' }
        ],
        result: 'Sorting runs off-thread, the page stays interactive, and the worker exits after delivering the result.'
      },
      {
        title: 'Zero-copy image handoff with transferables',
        problem: 'Send a large pixel buffer to a worker for filtering without a slow structured copy.',
        steps: [
          { label: 'Step 1: Build the buffer on the main thread', text: 'Allocate the pixel bytes once:\n```js\nconst buffer = new ArrayBuffer(16 * 1024 * 1024);\nconst pixels = new Uint8ClampedArray(buffer);\nfillPixels(pixels);\n```' },
          { label: 'Step 2: Transfer ownership', text: 'List the buffer in the transfer argument so bytes move, not copy:\n```js\nfilterWorker.postMessage({ kind: "filter", pixels: buffer }, [buffer]);\n```' },
          { label: 'Step 3: Respect neutering', text: 'Never touch the sent buffer again on this side:\n```js\nconsole.log(buffer.byteLength);\nfilterWorker.onmessage = function (e) {\n  paintImage(e.data.pixels);\n};\n```' },
          { label: 'Step 4: Receive the processed buffer back', text: 'The worker transfers the filtered bytes back the same way:\n```js\nself.onmessage = function (e) {\n  const out = applyFilter(e.data.pixels);\n  self.postMessage({ pixels: out }, [out]);\n};\n```' }
        ],
        result: 'A sixteen-megabyte handoff moves in near-constant time and the sender correctly treats its old handle as neutered.'
      }
    ],
    keyTakeaways: [
      'Dedicated workers compute off-thread with no DOM access and must be terminated.',
      'postMessage plus onmessage is the channel; structured cloning copies by default.',
      'Transferables move ArrayBuffer ownership for near-instant large handoffs.',
      'Shared workers coordinate tabs and service workers cache network traffic.',
      'Keep main-thread tasks short and verify wins with performance traces.'
    ],
    quiz: [
      {
        q: 'What can a dedicated worker NOT do directly?',
        options: ['Run loops over arrays', 'Touch the DOM', 'Receive postMessage data', 'Send results back'],
        answer: 1,
        explanation: 'Workers have no DOM access; they compute on data and message the main thread, which performs DOM updates.'
      },
      {
        q: 'What changes when an ArrayBuffer is in the postMessage transfer list?',
        options: ['It is copied twice for safety', 'Ownership moves with near-zero copy and the sender handle neuters', 'It becomes a string', 'Nothing, transfer lists are comments'],
        answer: 1,
        explanation: 'Transfer moves ownership instead of cloning bytes, so large buffers hand off fast and the sender must stop using them.'
      },
      {
        q: 'Which worker type intercepts fetches for offline caching?',
        options: ['Dedicated worker', 'Service worker', 'Shared worker', 'WebSocket'],
        answer: 1,
        explanation: 'Service workers sit between page and network with fetch handlers; dedicated workers compute and shared workers coordinate tabs.'
      },
      {
        q: 'A scroll handler janks because it filters a huge array inline. What is the fix?',
        options: ['Make the array larger', 'Move filtering to a dedicated worker with progress messages', 'Add more DOM writes', 'Disable scrolling'],
        answer: 1,
        explanation: 'Long main-thread tasks break the frame budget, so heavy filtering moves off-thread while the UI keeps updating.'
      }
    ]
  },
  // ---------------------------------------------------------------- 9.5
  {
    sectionId: 'web-ch9-s5',
    readingTime: 8,
    intro: 'Modern pages are assembled, not written as one file: modules split code, npm versions it, and bundlers ship it fast. This section connects ES module syntax to package management and Vite builds. You will learn to structure imports, lock dependencies, and split bundles by route.',
    objectives: [
      'Author and consume ES modules with import and export',
      'Read package dot json for scripts, versions, and dependency ranges',
      'Build and preview a Vite app with environment-aware config',
      'Apply code-splitting with dynamic import for faster loads'
    ],
    concepts: [
      {
        term: 'ES module syntax',
        kind: 'notation',
        statement: 'Modules share code with **named exports** for utilities and **default exports** for primary values, loaded with `import` statements. Imports are **live bindings** resolved before execution, and specifiers need **explicit paths** with extensions in browsers. Prefer named exports so refactors and tree shaking stay safe.',
        detail: 'Use import for values and types at the top of the file, and re-export barrels sparingly because they can bloat graphs.'
      },
      {
        term: 'package dot json and versions',
        kind: 'definition',
        statement: 'The `package.json` file names the project and declares **scripts**, **dependencies**, and **devDependencies** with **semantic version** ranges. A caret range like `^1.4.2` accepts **minor updates** while a tilde accepts only patches. The lockfile pins the exact tree so installs reproduce everywhere.',
        detail: 'Scripts encode workflows such as dev, build, and test so contributors run one word instead of long commands. Commit the lockfile for apps and review version bumps deliberately.'
      },
      {
        term: 'npm install discipline',
        kind: 'method',
        statement: 'Install runtime libraries with **npm install** into dependencies and tooling with the **save-dev flag** into devDependencies. Clean installs with `npm ci` follow the **lockfile exactly** and suit continuous integration. Audit new packages for size, maintenance, and license before adding them.',
        detail: 'Every dependency is future maintenance, so prefer platform APIs first. Remove unused packages promptly to shrink attack surface and install time.'
      },
      {
        term: 'Vite dev and build',
        kind: 'definition',
        statement: 'Vite serves **native modules** unbundled in development for instant startup, then bundles with **Rollup** for production. The `build` script emits **hashed assets** that cache forever, while preview serves them locally for verification. Environment values flow through **`import.meta`** guarded variables with safe prefixes.',
        detail: 'Keep public assets in the public directory and imported assets next to their components. Check the build report for unexpected large chunks after each feature.'
      },
      {
        term: 'Code splitting with dynamic import',
        kind: 'method',
        statement: 'Static imports join the **initial bundle** while `import()` loads a **separate chunk** on demand at runtime. Route-level splitting with `import()` plus `React.lazy` keeps first paint **lean** and defers admin screens until visited. Name chunks with comments so the build report stays readable.',
        detail: 'Split at route boundaries and heavy dialogs first, then measure with a bundle analyzer. Every split trades one extra request for a much smaller first load.'
      }
    ],
    examples: [
      {
        title: 'From script globals to ES modules',
        problem: 'Convert two global script files sharing a cart total into explicit imports and exports.',
        steps: [
          { label: 'Step 1: Export the cart logic', text: 'Name what the module provides:\n```js\nlet items = [];\nexport function addItem(item) { items.push(item); }\nexport function total() {\n  return items.reduce(function (s, i) { return s + i.price; }, 0);\n}\n```' },
          { label: 'Step 2: Import where needed', text: 'Declare the dependency at the top of the consumer:\n```js\nimport { addItem, total } from "./cart.js";\naddItem({ name: "Book", price: 19 });\nconsole.log(total());\n```' },
          { label: 'Step 3: Load as a module in HTML', text: 'Mark the entry script so imports resolve:\n```js\n// in index.html\n// <script type="module" src="/src/main.js"></script>\nimport { total } from "./cart.js";\n```' }
        ],
        result: 'No globals remain, the dependency graph is explicit, and unused exports become eligible for tree shaking.'
      },
      {
        title: 'Route-level splitting in a Vite app',
        problem: 'Keep the admin dashboard out of the initial bundle and load it only when visited.',
        steps: [
          { label: 'Step 1: Lazy-load the route', text: 'Defer the heavy screen with a dynamic import:\n```js\nimport { lazy, Suspense } from "react";\nconst Admin = lazy(function () { return import("./Admin.jsx"); });\nfunction App() {\n  return <Suspense fallback={<p>Loading</p>}><Admin /></Suspense>;\n}\n```' },
          { label: 'Step 2: Build and inspect', text: 'Produce the production chunks and read the report:\n```bash\nnpm run build\nnpm run preview\n```' },
          { label: 'Step 3: Verify the split', text: 'Open the network panel and confirm the admin chunk loads only on navigation. Keep the initial bundle focused on the home route and shared chrome.' }
        ],
        result: 'First paint ships fewer kilobytes, the admin chunk loads on demand, and the build report names each route chunk.'
      }
    ],
    keyTakeaways: [
      'Prefer named exports with explicit paths; imports are live bindings resolved first.',
      'package dot json declares scripts and versioned dependencies; the lockfile pins installs.',
      'Install with npm install, reproduce with npm ci, and audit before adding weight.',
      'Vite serves modules instantly in dev and emits hashed bundles for production.',
      'Split routes with dynamic import so first paint stays lean.'
    ],
    quiz: [
      {
        q: 'What does a caret range such as ^1.4.2 allow?',
        options: ['Only exactly 1.4.2', 'Minor and patch updates within major 1', 'Any major version', 'Downgrades only'],
        answer: 1,
        explanation: 'Carets accept compatible minor and patch releases under the same major version; tildes are stricter.'
      },
      {
        q: 'Why prefer named exports over a bag of globals?',
        options: ['Globals load faster', 'Explicit imports document dependencies and enable tree shaking', 'Modules forbid defaults', 'Browsers ban globals'],
        answer: 1,
        explanation: 'Named exports make the graph visible to readers and bundlers, so unused code can be dropped.'
      },
      {
        q: 'How does Vite keep development startup fast?',
        options: ['By bundling everything eagerly', 'By serving native ES modules unbundled over dev', 'By disabling imports', 'By inlining images always'],
        answer: 1,
        explanation: 'Dev serves modules natively so edits reload fast; production bundles with hashed assets for caching.'
      },
      {
        q: 'Where should code-splitting start in most apps?',
        options: ['Inside tiny utilities', 'At route boundaries and heavy rarely visited screens', 'By splitting every function', 'Nowhere, splitting always hurts'],
        answer: 1,
        explanation: 'Route splits remove the most idle bytes from first paint for the cost of one on-demand request per visit.'
      }
    ]
  }
]

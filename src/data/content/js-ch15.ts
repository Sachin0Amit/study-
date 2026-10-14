import type { SectionContent } from '../library'

// ============================================================================
// Flanagan — JavaScript: The Definitive Guide, 7th Edition
// Chapter 15: JavaScript in Web Browsers (Sections 15.1 – 15.12)
// Master study content.
// ============================================================================

export const jsCh15Content: SectionContent[] = [
  // ---------------------------------------------------------------- 15.1
  {
    sectionId: 'js-ch15-s1',
    readingTime: 8,
    intro: 'A web browser is a **host environment**: it parses HTML into a live tree of objects, runs your scripts against it, and dispatches **events** when the world changes. Everything in this chapter — documents, styles, graphics, networking, storage — hangs off a handful of globals: `window`, `document`, `location`. Two facts organize it all: scripts are guests of the HTML parser (hence `async` and `defer`), and the whole platform is **single-threaded** per page — the same run-to-completion rule of Section 13.1, with the browser’s renderer waiting on the same thread.',
    objectives: [
      'Embed scripts with script tags and choose between inline, external, async and defer',
      'Name the key browser globals and what each provides',
      'Predict script execution order and DOMContentLoaded timing for each embedding mode',
      'Explain the single-threaded execution model and its consequences for responsiveness',
      'Attach load-phase handlers at the right granularity (DOMContentLoaded vs load)'
    ],
    concepts: [
      {
        term: 'Script tags',
        kind: 'definition',
        statement: 'JavaScript enters an HTML page through `<script>`: **inline** code between the tags runs immediately where it appears; a `src` attribute fetches an external file. A `<script type="module" src="...">` is an ES6 module (Section 10.3) — its imports and exports make it a separate scope, and it is automatically deferred.',
        detail: '\n```html\n<script>\n  console.log("runs immediately, right here in the parse");\n</script>\n<script src="app.js"></script>\n<script type="module" src="app.js"></script>   <!-- module: deferred by default -->\n```\nThe position matters for plain scripts: one in `<head>` runs before any body HTML exists, which is why decades of scripts lived at the end of `<body>` — and why `defer` exists.'
      },
      {
        term: 'async and defer',
        kind: 'method',
        statement: 'Both boolean attributes let the file **download in parallel** while parsing continues; they differ on **when it runs**. `defer`: execution is postponed until the document has been parsed, and deferred scripts run **in document order**. `async`: execution begins **as soon as the download completes** — possibly mid-parse, possibly before other async scripts that started earlier — so order is not guaranteed.',
        detail: 'Rule of thumb: `defer` for scripts that need the DOM (the common case — they still finish before DOMContentLoaded); `async` for fully independent code such as analytics and ad tags that touch no page state.'
      },
      {
        term: 'window and the browser globals',
        kind: 'definition',
        statement: 'The `window` object **is** the global object of browser JavaScript: global variables and `window` properties are the same storage (Section 3.5). It doubles as the browser API surface — `window.location` (the `Location` object wrapping the current URL), `window.history` (15.9), `navigator` (the browser itself), `screen`, and the timers of Section 13.1.',
        detail: '\n```js\nwindow.window === window;        // true — it is a property of itself\nglobalThis === window;             // true in browsers\nlocation.href;                    // the full URL, live\n```\n`document` is reachable as `window.document` and is the root of the page itself — the entry point for all of Section 15.3.'
      },
      {
        term: 'document and the DOM tree',
        kind: 'definition',
        statement: 'The HTML parser builds the **Document Object Model** — a live tree of objects with `document` at the root, `document.documentElement` (the `<html>` element), its `.head` and `.body` children, and element, text and comment nodes below. "Live" means the tree is the page: script mutations appear on screen, and user edits appear in the tree.',
        detail: 'The DOM is where the language meets the document: `document.getElementById`, `querySelector` and friends (15.3) are queries against this tree, and event handlers (15.2) fire with nodes of it as their targets.'
      },
      {
        term: 'Single-threaded execution',
        kind: 'insight',
        statement: 'Browser JavaScript runs on **one thread per page**: one call stack, run-to-completion (Section 13.1), and the user-interface work — parsing, styling, layout, paint — queues behind it. A long-running script blocks **everything**: clicks go unprocessed, animations freeze, the tab may flag the page unresponsive. The host gets the same treatment an OS gives a monopolizing process (Operating System Concepts, Chapter 4) — except there is no preemption, so the fix is cooperative: return quickly, schedule the rest.',
        detail: 'The escape hatches: asynchronous APIs (Section 13.2 — promises and the event loop), and real parallelism via Worker threads (Section 15.12), which give a page additional kernel threads that cannot touch the DOM. Compare OSC Chapter 4’s threading model — JavaScript deliberately exposes none of its shared-memory hazards.'
      },
      {
        term: 'DOMContentLoaded and load',
        kind: 'method',
        statement: '`document.addEventListener("DOMContentLoaded", fn)` fires once the tree is fully parsed and deferred scripts have run — images and stylesheets may still be downloading. `window.addEventListener("load", fn)` waits for **all** resources (images, stylesheets, subframes). The first is where scripts initialize page logic; the second, where pixel-dependent work belongs.',
        detail: '\n```js\ndocument.addEventListener("DOMContentLoaded", () => {\n  // the tree is complete — safe to query and build\n});\nwindow.addEventListener("load", () => {\n  // every resource is in — safe to measure geometry (15.5)\n});\n```\nScripts at the end of `<body>` need neither — the parser is effectively done when they run.'
      }
    ],
    examples: [
      {
        title: 'Four script tags, one timeline: the async/defer comparison',
        problem: 'Predict when each script runs and when DOMContentLoaded fires:\n```html\n<head>\n  <script src="a.js"></script>              <!-- 1 -->\n  <script src="b.js" defer></script>        <!-- 2 -->\n  <script src="c.js" async></script>        <!-- 3 -->\n</head>\n<body>\n  <!-- ...content... -->\n  <script src="d.js" defer></script>        <!-- 4 -->\n</body>\n```',
        steps: [
          { label: 'Step 1: Script 1 — the parser-blocking default', text: 'Parsing stops dead at the tag: the browser downloads a.js **synchronously with the parse**, runs it to completion, then resumes parsing. Whatever a.js needs from the document, only content parsed so far exists. This is the behavior `defer` was invented to abolish.' },
          { label: 'Step 2: Scripts 2 and 4 — deferred, in order', text: 'b.js and d.js download in parallel with parsing but do not run yet. When the parser finishes the document, deferred scripts execute **in document order**: b.js first, then d.js — each seeing the complete tree. Only after the last one does `DOMContentLoaded` fire. Two scripts that share state can rely on that order.' },
          { label: 'Step 3: Script 3 — async, racing', text: 'c.js also downloads in parallel, but runs the **moment its download completes** — mid-parse if the network was fast, before b.js if b.js was slow. Nothing about relative order is guaranteed, and other async scripts may overtake it. `DOMContentLoaded` does **not** wait for async scripts that are still pending.' },
          { label: 'Step 4: Assemble the timeline', text: 'Typical fast-network timeline: a.js (blocking, in head) → parsing proceeds, c.js fires whenever ready → parse completes → b.js → d.js → DOMContentLoaded → images finish → load. On a slow CDN for c.js, the same page could run b.js, d.js and DOMContentLoaded **before** c.js — async code must never depend on page state.' },
          { label: 'Step 5: Choose by dependency', text: 'Needs the DOM or another script → `defer` (or a module, which defers by default). Independent, fire-and-forget → `async`. Needs to run exactly where it sits in the document (e.g., writing content inline) → plain blocking, the rarest and weakest option.' }
        ],
        result: '\n```text\nmode     | downloads  | executes                 | order      | blocks parse\n---------+------------+--------------------------+------------+-------------\ndefault  | blocks     | immediately, at the tag  | document   | YES\nasync    | parallel   | on download completion   | arbitrary  | NO\ndefer    | parallel   | after parse, pre-DCL     | document   | NO\nmodule   | parallel   | deferred                 | document   | NO\n```\nDeferred scripts run in order before DOMContentLoaded; async scripts race and are not waited for.'
      },
      {
        title: 'DOMContentLoaded vs load: where to initialise without freezing',
        problem: 'A gallery page must build its nav as soon as the tree exists, measure image widths only when pixels are final, and avoid freezing clicks with a 300 ms sort:\n```js\ndocument.addEventListener("DOMContentLoaded", buildNav);\nwindow.addEventListener("load", layoutGallery);\nfunction sortTitles(titles) { return titles.slice().sort(); }  // ~300 ms on 200k rows\n```',
        steps: [
          { label: 'Step 1: DOMContentLoaded builds structure', text: 'The nav needs only elements, so it runs at DOMContentLoaded — tree parsed, deferred scripts done, images possibly still downloading. Querying here is safe; measuring image widths here is not, because layout is not final.' },
          { label: 'Step 2: load measures geometry', text: 'The gallery layout reads image widths, so it waits for the window load event — every stylesheet, image and subframe done. Section 15.5 geometry measured here is stable; measured earlier it would shift as images arrive.' },
          { label: 'Step 3: The 300 ms freeze', text: 'Calling sortTitles on the main thread blocks the one page thread: parsing, styling, paint and click handlers queue behind it. During those 300 ms the tab ignores input — the single-threaded rule with the renderer in the same queue.' },
          { label: 'Step 4: The cooperative fix', text: 'Chunk the sort with async slices or move it to a Worker (Section 15.12): buildNav and layoutGallery stay on DOMContentLoaded and load, and the heavy work yields between chunks so clicks and paint interleave.' }
        ],
        result: 'Nav at DOMContentLoaded, geometry at load, heavy work off the critical path — one thread means initialisation timing and responsiveness are the same decision.'
      }
    ],
    keyTakeaways: [
      'Scripts enter via `<script>` — inline runs immediately; `src` fetches a file; `type="module"` is scoped and deferred by default.',
      '`defer` downloads in parallel, runs after parsing in document order, before DOMContentLoaded; `async` runs on arrival in arbitrary order.',
      'Plain scripts block the parser; end-of-body placement was the pre-defer workaround.',
      '`window` is the global object and the browser API surface; `document` roots the live DOM tree; `location` wraps the current URL.',
      'One thread per page: long scripts block rendering and input — the run-to-completion rule of Section 13.1 with the renderer behind it in the queue (contrast OSC Ch 4 threads).',
      'Use DOMContentLoaded for tree-dependent initialization and `load` for resource-complete work such as geometry (15.5).'
    ],
    quiz: [
      {
        q: 'Two scripts must run in a specific order and both need the parsed document. The right embedding is:',
        options: [
          'Both `async`',
          'Both `defer` — execution follows document order after parsing',
          'One inline in head, one at end of body',
          'Both plain `<script src>` in head'
        ],
        answer: 1,
        explanation: 'defer preserves document order and guarantees the full tree; async gives no ordering guarantee, and plain scripts block parsing in head.'
      },
      {
        q: 'When does an `async` script execute?',
        options: [
          'After the document finishes parsing, in order',
          'As soon as its download completes — possibly mid-parse and in arbitrary order relative to other async scripts',
          'Only after the load event',
          'Only when the user interacts'
        ],
        answer: 1,
        explanation: 'async decouples execution from the parse entirely: arrival time is the only schedule, which is why async scripts must be self-contained.'
      },
      {
        q: 'Which statement about the browser execution model is TRUE?',
        options: [
          'Each script runs on its own thread',
          'Page JavaScript shares one thread with parsing, layout and paint — a long task freezes all of them',
          'Rendering happens on a second thread, so long scripts never affect it',
          'The OS preempts scripts every 16 ms to keep the page responsive'
        ],
        answer: 1,
        explanation: 'One thread per page, no preemption: the renderer queues behind the script (Section 13.1 run-to-completion; OSC Ch 4 contrasts with preemptive threads). Workers (15.12) are the real parallel escape hatch.'
      },
      {
        q: 'The DOMContentLoaded event fires when —',
        options: [
          'all images and stylesheets have downloaded',
          'the document tree is fully parsed and deferred scripts have run — pending async scripts are not waited for',
          'the first script starts',
          'the user first interacts'
        ],
        answer: 1,
        explanation: 'DOMContentLoaded marks the parsed tree plus deferred scripts; resource-complete is the separate load event on window.'
      }
    ]
  },

  // ---------------------------------------------------------------- 15.2
  {
    sectionId: 'js-ch15-s2',
    readingTime: 11,
    intro: 'The browser is **event-driven**: clicks, keys, submits, network completions and timer expirations all arrive as event objects dispatched to your handlers. `addEventListener` registers interest; the **propagation model** carries each event down and then back up the tree (capture and bubble), which makes **delegation** — one listener for a whole subtree — the platform’s most valuable pattern. Options like `once`, `capture` and `passive` tune registration, and `CustomEvent` lets your own code speak the same language with `detail` payloads.',
    objectives: [
      'Register and remove listeners, including the legacy property form',
      'Use the options object: once, capture and passive',
      'Trace an event through capture, target and bubble phases',
      'Distinguish stopPropagation from preventDefault precisely',
      'Implement event delegation and dispatch custom events with detail payloads'
    ],
    concepts: [
      {
        term: 'addEventListener and removeEventListener',
        kind: 'method',
        statement: '`target.addEventListener(type, listener)` registers a function (or any object with a `handleEvent` method) for events of the given type; calling it again adds more handlers — the legacy one-handler-per-property form (`element.onclick = fn`) is overwritten by assignment and can hold only one.',
        detail: '\n```js\nconst btn = document.querySelector("#save");\nfunction onClick(e) { console.log("saved"); }\nbtn.addEventListener("click", onClick);\nbtn.removeEventListener("click", onClick);   // needs the SAME reference\n```\nRemoval requires the identical function object — an anonymous arrow can never be removed, which is why named handlers are the rule in long-lived pages.'
      },
      {
        term: 'Listener options: once, capture, passive',
        kind: 'method',
        statement: 'The third argument tunes registration: **`once: true`** auto-removes the handler after its first run (one-shot setup); **`capture: true`** listens on the way **down** the tree instead of the way up; **`passive: true`** promises the handler will never call `preventDefault` — the browser may then scroll immediately without waiting for the handler, the standard for touch and wheel listeners.',
        detail: '\n```js\nwindow.addEventListener("scroll", updateIndicator, { passive: true });\nbutton.addEventListener("click", firstClickOnly, { once: true });\ndocument.addEventListener("click", earlyBird, { capture: true });\n```\nFor scroll performance, passive is not optional: a non-passive wheel/touch handler forces the browser to block scrolling until the handler returns.'
      },
      {
        term: 'Propagation: capture, target, bubble',
        kind: 'law',
        statement: 'An event dispatched at a target element travels the tree in **three phases**: **capture** (from `window`/`document` down through ancestors to the target’s parent), **target** (the handlers on the target itself), then **bubble** (back up the same path to document and window). Ordinary listeners fire in the bubble phase; `{ capture: true }` listeners fire in the capture phase — the same event object visits both.',
        detail: 'The path is computed **at dispatch time** from the target’s current position in the tree. Not every event bubbles (focus and mouseenter do not), but click, key, input, submit and most UI events do.'
      },
      {
        term: 'stopPropagation vs preventDefault',
        kind: 'method',
        statement: 'The two cancellations are orthogonal. **`e.stopPropagation()`** stops the **propagation** — later listeners on the path never run (and `e.stopImmediatePropagation()` also silences later listeners on the **same** element). **`e.preventDefault()`** cancels the **default action** — the navigation of a link, the submission of a form, the checkbox toggle — while propagation continues untouched.',
        detail: 'Four combinations are all meaningful: prevent the action and let handlers run everywhere; stop the propagation and still let the default happen; both; neither. See the worked trace — the pair is the most-confused duo in event programming.'
      },
      {
        term: 'Event delegation',
        kind: 'method',
        statement: 'Because events bubble, **one listener on a common ancestor** can handle events for all its descendants: inspect `e.target`, find the relevant node with `e.target.closest(selector)`, and act. Rows added to the table later are covered with zero new listeners — the ancestor was listening all along.',
        detail: 'The pattern’s economics: 1,000 rows with one listener each means 1,000 closures and 1,000 registrations; delegation means one. It also survives dynamic content — innerHTML rebuilds, template clones, user-added items.'
      },
      {
        term: 'Custom events with detail',
        kind: 'method',
        statement: 'Application code can speak the platform’s language: `new CustomEvent("note-added", { detail: payload })` creates an event whose `detail` property carries any data, and `target.dispatchEvent(event)` runs it through the full capture-target-bubble machinery — synchronously, with the same propagation rules as a click.',
        detail: '\n```js\ndocument.addEventListener("note-added", (e) => {\n  console.log("new note:", e.detail.title);     // the payload\n});\ndocument.dispatchEvent(new CustomEvent("note-added", {\n  detail: { title: "buy oat milk" },\n}));\n```\nSynthetic events have `isTrusted: false` (a real user event is `true`), which security checks can and do inspect.'
      },
      {
        term: 'The event object and this',
        kind: 'definition',
        statement: 'The handler receives one **event object**: `e.type` (the event name), `e.target` (the deepest node where it happened — constant through propagation), `e.currentTarget` (the node the running handler is attached to — changes at each hop), `e.timeStamp`, plus per-type fields like `e.key` or `e.clientX`. In a function handler, `this` equals `currentTarget`.',
        detail: 'The target/currentTarget split is what delegation is made of: the listener sits on the table (`currentTarget`) while `target` points at whatever inside it was actually clicked.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: one click, two cancellations',
        problem: 'Predict the log for each variant:\n```html\n<div id="outer">\n  <ul id="list">\n    <li><a id="link" href="https://example.com/">go</a></li>\n  </ul>\n</div>\n```\n```js\nconst log = [];\nconst outer = document.getElementById("outer");\nconst list = document.getElementById("list");\nconst link = document.getElementById("link");\n\nouter.addEventListener("click", (e) => log.push("capture outer"), true);\nlist.addEventListener("click", (e) => log.push("capture list"), true);\nouter.addEventListener("click", (e) => log.push("bubble outer"));\nlink.addEventListener("click", (e) => {\n  log.push("target link");\n  e.preventDefault();              // cancels navigation ONLY\n});\n\nlink.click();\nlog;   // ?\n```',
        steps: [
          { label: 'Step 1: Capture — the dive from the top', text: 'The click at the anchor is dispatched through its **path** (computed from its position): window → document → outer → list → link. Capture-phase listeners run top-down: `outer` logs first, then `list` — each seeing `e.target` = link and `e.currentTarget` = itself.' },
          { label: 'Step 2: Target — the handlers on the node itself', text: 'At the anchor, its own listener runs: `"target link"` is pushed, and `e.preventDefault()` records that the **default action** (following the href) must not happen. Propagation is untouched — the event keeps moving.' },
          { label: 'Step 3: Bubble — the climb back', text: 'The event reverses up the same path. Only `outer` has a bubble-phase listener here, so the final log is `["capture outer", "capture list", "target link", "bubble outer"]` — four entries, one user action. **No navigation occurs** despite all four handlers running.' },
          { label: 'Step 4: Swap in stopPropagation instead', text: 'Replace the target handler’s `preventDefault()` with `e.stopPropagation()`: the log ends at `["capture outer", "capture list", "target link"]` — no bubble hop — but the browser **navigates to example.com** anyway. Stopping propagation does not stop the default action; the two switches are on separate circuits.' },
          { label: 'Step 5: The remaining variants', text: 'A `stopPropagation()` in the **capture** listener on outer strangles the event immediately: the log is just `["capture outer"]`, no target handlers run — and the link still navigates unless something also calls preventDefault. And `stopImmediatePropagation()` would have silenced even sibling listeners on the same node. The complete matrix: propagation and default action are independent axes.' }
        ],
        result: '`["capture outer", "capture list", "target link", "bubble outer"]` with no navigation — preventDefault cancels the action; with stopPropagation instead, the log is three entries **and the page navigates**. Cancel propagation, cancel the action — or both, but never confuse them.'
      },
      {
        title: 'One listener, every row: event delegation',
        problem: 'A table of 1,000 rows needs a delete button per row. Instead of 1,000 listeners, write one — and make it survive row insertion:\n```js\ndocument.querySelector("#todo-table tbody").addEventListener("click", (event) => {\n  const button = event.target.closest("button.delete");\n  if (!button) return;                       // click landed elsewhere\n  if (!event.currentTarget.contains(button)) return;   // safety: inside this table?\n  button.closest("tr").remove();\n});\n\n// Later — brand new row, zero new listeners:\ntbody.append(renderRow({ title: "new", done: false }));\n```',
        steps: [
          { label: 'Step 1: The listener sits above the action', text: 'Registration is on the `<tbody>` — an ancestor of every row. Clicks on any delete button **bubble up** to it (Section 15.2’s propagation law), so the handler runs with `e.currentTarget` = tbody and `e.target` = whatever was actually clicked (the button, or a span inside it).' },
          { label: 'Step 2: closest() finds the thing you meant', text: 'The click may land on the button’s icon or label, not the button element itself. `event.target.closest("button.delete")` walks **up** from the click target to the nearest matching ancestor — the robust way to recover the intended element from an arbitrary inner one. A null means the click was elsewhere: return early.' },
          { label: 'Step 3: The containment guard', text: '`contains(button)` verifies the found button really is inside this tbody — with nested tables or document-level listeners, a matching element from some other container could bubble through. One boolean closes the hole; `closest` + `contains` is the standard delegation pair.' },
          { label: 'Step 4: New rows are covered automatically', text: 'The freshly appended row needs no listener: its clicks bubble along the same path to the same handler. This is why delegation pairs so well with the dynamic content of Section 15.3 — rebuild the tbody wholesale and the single listener keeps working.' },
          { label: 'Step 5: The economics and the limits', text: 'One closure, one registration, O(1) setup instead of O(rows) — and memory that does not grow with the document. The limits: events that do not bubble (focus, mouseenter) cannot be delegated this way, and `stopPropagation` from a third-party handler between target and ancestor will swallow the event — the platform’s version of the interference problem.' }
        ],
        result: 'One listener handles 1,000 rows, 10,000 rows and rows not yet created — clicks bubble, `closest` recovers the button, `contains` scopes it, `tr.remove()` acts. Delegation is the event model’s payoff for having a bubble phase.'
      }
    ],
    keyTakeaways: [
      'addEventListener stacks multiple handlers; the legacy `.onclick =` property holds only one; removal needs the identical function reference.',
      'Options tune registration: `once` for one-shot, `capture` for the downward phase, `passive` to let scrolling proceed (never preventDefault there).',
      'Every event travels capture (top → down), target, bubble (up → top); `e.target` is where it happened, `e.currentTarget` is which handler is running.',
      '`stopPropagation` halts the path (stopImmediatePropagation also halts same-element rivals); `preventDefault` cancels the default action — completely independent switches.',
      'Delegation: one ancestor listener + `e.target.closest(sel)` + `contains` guard handles any number of descendants, including future ones.',
      '`new CustomEvent(type, { detail })` + `dispatchEvent` gives application code the same synchronous machinery with typed payloads; synthetic events have isTrusted false.'
    ],
    quiz: [
      {
        q: 'In a propagation trace, `e.currentTarget` is —',
        options: [
          'always the deepest element clicked (e.target)',
          'the element whose handler is currently running — it changes hop by hop',
          'always the document',
          'the element under the mouse'
        ],
        answer: 1,
        explanation: 'target stays fixed at the dispatch point; currentTarget walks the path with the handler — the asymmetry that makes delegation inspectable.'
      },
      {
        q: 'A link’s click handler calls only `e.stopPropagation()`. What happens?',
        options: [
          'The navigation is cancelled and other handlers still run',
          'Ancestor handlers are skipped but the browser still navigates to the href',
          'Both propagation and navigation are cancelled',
          'Nothing — stopPropagation must be paired with preventDefault'
        ],
        answer: 1,
        explanation: 'stopPropagation affects only the event path; the default action is a separate circuit — canceling navigation needs preventDefault.'
      },
      {
        q: 'Which listener option tells the browser it may start scrolling without waiting for your wheel handler to finish?',
        options: ['`once: true`', '`capture: true`', '`passive: true`', '`bubbles: true`'],
        answer: 2,
        explanation: 'passive promises no preventDefault, letting scrolling proceed immediately — mandatory hygiene for scroll, wheel and touch listeners.'
      },
      {
        q: 'Why does event delegation keep working for rows added after registration?',
        options: [
          'The browser re-registers the listener for new rows',
          'Clicks from the new rows bubble to the same ancestor that holds the single listener',
          'New rows inherit listeners through their prototype',
          'Delegation polls the DOM for changes'
        ],
        answer: 1,
        explanation: 'The listener is on the ancestor, and propagation is computed per event from the target’s current position — any descendant, old or new, reaches it.'
      },
      {
        q: 'How does a custom event carry data to its handlers?',
        options: [
          'Through the event’s detail property, set via new CustomEvent(type, { detail: payload })',
          'Through a second argument to the handler',
          'Through globalThis.event',
          'Custom events cannot carry data'
        ],
        answer: 0,
        explanation: 'The options object’s detail field is the payload slot; dispatchEvent then runs the same capture-target-bubble machinery, synchronously.'
      }
    ]
  },

  // ---------------------------------------------------------------- 15.3
  {
    sectionId: 'js-ch15-s3',
    readingTime: 10,
    intro: 'The **Document Object Model** is the page as a live tree of objects, and scripting it is the heart of browser programming: select nodes, read and write their attributes, classes and data, then create, insert and remove nodes to reshape the page. Two safety lines run through everything: `querySelector`/`querySelectorAll` give CSS-grade querying, and `textContent` — not `innerHTML` — is the default way to put untrusted text on screen.',
    objectives: [
      'Select elements with querySelector, querySelectorAll and getElementById',
      'Distinguish static NodeLists from live HTMLCollections',
      'Read and write attributes, classes and data-* state',
      'Create, insert, replace and remove nodes — and batch them with DocumentFragment',
      'Explain why innerHTML with untrusted text is an XSS hole and textContent is not'
    ],
    concepts: [
      {
        term: 'The DOM as a live tree',
        kind: 'definition',
        statement: 'The document is a tree of **nodes**: the `Document` root, **Element** nodes for tags, **Text** nodes for character data, **Comment** nodes, each with `parentNode`, `children` (element children) and `childNodes` (all children). The tree is **live** — mutating it changes the rendered page, and the page changing (user typing, scripts) changes the tree.',
        detail: '\n```js\ndocument.documentElement;      // <html>\ndocument.body;                // <body>\ndocument.body.children[0];     // first element child\ndocEl.parentNode;             // the Document — the top of the tree\n```\nTraversal properties (`firstElementChild`, `nextElementSibling`) come in element-only and all-node pairs — prefer the element forms.'
      },
      {
        term: 'Selecting elements',
        kind: 'method',
        statement: '`document.querySelector(cssSelector)` returns the **first** element matching any CSS selector, or null; `document.querySelectorAll(sel)` returns **all** matches; both also work on any element, searching its subtree. `document.getElementById(id)` is the classic by-id fast path. Class and tag lookups (`getElementsByClassName`, `getElementsByTagName`) exist too — but return **live** collections.',
        detail: '\n```js\ndocument.querySelector("#main .item.active");   // CSS selector, first match\nconst items = document.querySelectorAll("li.todo");  // all matches\nitems.length;                                     // snapshot size\nfor (const li of items) { /* NodeList is iterable */ }\n```\nSelector power comes from CSS itself: `input[type="checkbox"]:checked`, `.item:not(.done)`, combinators — the full grammar of stylesheets (15.4) is your query language.'
      },
      {
        term: 'Static NodeList vs live collection',
        kind: 'insight',
        statement: '`querySelectorAll` returns a **static** NodeList — a snapshot that does not change when the document does. The `getElementsBy*` methods return **live** HTMLCollections that grow and shrink with the tree: looping over one while you mutate the document can process nodes twice or skip them. Snapshot semantics are the safer default.',
        detail: 'A live collection is a view, not an array — `HTMLCollection` has no `map`. Convert with `Array.from(collection)` when array methods are needed; a static NodeList supports `forEach` directly and is iterable (Section 12.1’s protocol).'
      },
      {
        term: 'Attributes: get, set, test, remove',
        kind: 'method',
        statement: 'Attributes are the HTML-serialized face of an element: `el.getAttribute(name)`, `setAttribute(name, value)`, `hasAttribute(name)`, `removeAttribute(name)`. Most common attributes have mirror **properties** (`id`, `title`, `src`, `href`), but attributes and properties can diverge — `value` on an input is the attribute only until the user edits, after which the property holds the truth.',
        detail: '\n```js\nlink.setAttribute("href", "https://example.com/");\nlink.getAttribute("href");     // "https://example.com/"\ninput.setAttribute("value", "a");\ninput.value;                    // "a" — until the user types\ninput.setAttribute("value", "b");\ninput.value;                    // still the user’s text — property wins\n```\nRule: read state from properties, set initial markup with attributes.'
      },
      {
        term: 'classList and dataset',
        kind: 'method',
        statement: '`el.classList` is a live token list for the class attribute: `add`, `remove`, `toggle(name, force?)`, `contains`, `replace` — no string splitting ever again. Custom `data-*` attributes surface as the `el.dataset` object: `data-priority="high"` becomes `el.dataset.priority === "high"` (dashes become camelCase).',
        detail: '\n```js\nel.classList.toggle("done", finished);   // force form: add if finished, else remove\nel.dataset.lastEditedBy = "ada";         // creates data-last-edited-by="ada"\n```\n`data-*` attributes are the sanctioned channel for stashing small state in markup — visible in the DOM inspector, trivially read in handlers and delegation (15.2).'
      },
      {
        term: 'Creating, inserting, replacing, removing',
        kind: 'method',
        statement: 'New nodes come from `document.createElement(tag)` and `document.createTextNode(str)`; the modern insertion API puts them relative to any node: `parent.append(...nodes)` (inside, at the end), `prepend` (inside, start), `sibling.before(...)` / `after(...)` (outside), `el.replaceWith(...nodes)`, `el.remove()`. `cloneNode(true)` deep-copies.',
        detail: '\n```js\nconst li = document.createElement("li");\nli.textContent = "new item";\nli.dataset.id = "42";\nlist.append(li);        // or list.prepend(li) — no re-parenting strings required\noldItem.replaceWith(li);\nli.remove();\n```\nThe pre-2016 API (`appendChild`, `insertBefore`, `replaceChild`, `removeChild`) still works and appears in older code — the modern forms take multiple nodes and have no "insert before what" awkwardness.'
      },
      {
        term: 'DocumentFragment',
        kind: 'method',
        statement: 'A **fragment** is a lightweight container for a batch of nodes: build the batch inside it, then insert the whole fragment **once** — the children move, the fragment itself stays out of the tree. When inserting many nodes, one insert means one reflow calculation instead of one per node.',
        detail: '\n```js\nconst frag = document.createDocumentFragment();\nfor (const t of todos) {\n  const li = document.createElement("li");\n  li.textContent = t.title;\n  frag.append(li);\n}\nlist.append(frag);   // all 100 lis enter the tree in ONE operation\n```\n`innerHTML` with a pre-built string achieves the same single reflow, but at the cost of the security rules below.'
      },
      {
        term: 'textContent vs innerHTML',
        kind: 'insight',
        statement: '`el.textContent = s` sets plain text — the string is **data**, never parsed as markup, so nothing inside it can execute. `el.innerHTML = s` parses the string as **HTML**: any script or event-handler markup in it becomes live — with untrusted input, that is **cross-site scripting (XSS)**. Read of `textContent` also flattens children to their concatenated text.',
        detail: '\n```js\nconst comment = \'<img src=x onerror="stealCookies()">\';\ndiv.innerHTML = comment;     // XSS: the onerror handler RUNS\ndiv.textContent = comment;  // SAFE: literal text, angle brackets visible\n```\nReserve `innerHTML` for trusted template strings you wrote yourself; for anything a user touched, `textContent` and `createElement` — or a library that escapes — are the rule. `insertAdjacentHTML` has the same trust requirement.'
      }
    ],
    examples: [
      {
        title: 'Filtering a page: querySelectorAll + dataset',
        problem: 'A page lists skills, each `<li class="skill" data-level="advanced">`. A `<select id="filter">` with values all/beginner/intermediate/advanced must hide non-matching rows:\n```js\nconst filter = document.querySelector("#filter");\nconst skills = document.querySelectorAll("li.skill");\n\nfilter.addEventListener("change", () => {\n  const level = filter.value;\n  for (const li of skills) {\n    li.hidden = li.dataset.level !== level && level !== "all";\n  }\n});\n```',
        steps: [
          { label: 'Step 1: Select once, outside the handler', text: '`querySelectorAll("li.skill")` runs at setup and captures a **static NodeList** — a snapshot of the current matches. Inside the handler we only read it, so static semantics are exactly right; a live `getElementsByClassName` would also work but re-queries on every access.' },
          { label: 'Step 2: The selector carries the query’s meaning', text: 'CSS syntax does the filtering: `li.skill` means "list items with class skill" — descendant combinators, attribute selectors and pseudo-classes are all available (Section 15.4’s grammar). `document.querySelector("#filter")` grabs the first — and only — element with that id.' },
          { label: 'Step 3: dataset reads the data-level attribute', text: '`li.dataset.level` returns the value of `data-level` — the dashes-to-camelCase mapping, applied in reverse for writes. State rides along in markup, so any handler (or delegated one, Section 15.2) can read it without a lookup table.' },
          { label: 'Step 4: The hidden property toggles visibility', text: 'Setting `li.hidden` reflects to the `hidden` HTML attribute — a no-JS, no-CSS visibility switch every browser honors. The boolean expression folds both cases: matching rows and "all" stay visible, everything else hides.' },
          { label: 'Step 5: Why not rebuild the list instead', text: 'An `innerHTML` rebuild would also work but costs a full parse of new markup plus the loss of all existing node state (listeners on children, focus, input values). Toggling `hidden` mutates one property per row — the targeted-update habit that scales.' }
        ],
        result: 'Changing the select instantly shows only the matching rows — one static query, per-row `dataset` reads, and `hidden` toggles; no markup is ever re-parsed.'
      },
      {
        title: 'Building a list: DocumentFragment and the innerHTML trap',
        problem: 'Render an array of to-do objects into an empty `<ul id="todo-list">`, safely, in one reflow — then recognize the failure mode in the two-line variant:\n```js\nfunction renderTodos(todos) {\n  const list = document.querySelector("#todo-list");\n  list.replaceChildren();                 // clear the old items\n  const frag = document.createDocumentFragment();\n  for (const todo of todos) {\n    const li = document.createElement("li");\n    li.textContent = todo.title;          // data — never parsed as markup\n    li.dataset.done = String(todo.done);\n    frag.append(li);\n  }\n  list.append(frag);                     // ONE insertion\n}\n\n// The two-line variant that must NOT touch user data:\nfunction renderTodosUnsafe(todos) {\n  document.querySelector("#todo-list").innerHTML =\n    todos.map((t) => "<li>" + t.title + "</li>").join("");\n}\n```',
        steps: [
          { label: 'Step 1: replaceChildren clears in one step', text: 'The modern clearing call removes every child of the list at once (the old way: a while-loop of `removeChild(firstChild)`). Starting from an empty list makes the render a pure function of the data — no stale rows survive.' },
          { label: 'Step 2: createElement + textContent for each row', text: 'Each `<li>` is a real element built in detached space; `textContent` assigns the title **as text data** — if a title is `<img src=x onerror=alert(1)>`, the page will literally display those characters, harmlessly. `dataset.done` stamps the completion state into a `data-done` attribute for CSS hooks (15.4).' },
          { label: 'Step 3: The fragment batches the insertion', text: 'One hundred rows appended one-by-one means one hundred layout invalidations. Appending the **fragment** moves all its children into the list in a single tree operation — the batch enters together, and the browser computes layout once. The fragment itself never appears in the tree.' },
          { label: 'Step 4: The unsafe variant, dissected', text: 'The `innerHTML` version is shorter and one reflow too — but it **parses** every title as markup. A malicious title like `<img src=x onerror="steal()">` becomes a real element with a real event handler: cross-site scripting, in one line. The rule of Section 15.3: `innerHTML` is for template strings **you** wrote; user data goes in via `textContent` or attribute APIs only.' },
          { label: 'Step 5: When innerHTML is legitimate', text: 'Static, developer-authored markup — a row template with fixed structure and placeholders filled from safe values, ideally via `insertAdjacentHTML` — is a fine use. The dividing line is **trust**: markup that exists in your source is trusted; anything that passed through a user is not. When in doubt, build nodes and set `textContent`.' }
        ],
        result: 'The fragment version renders any array of titles — hostile ones included — as inert text in one reflow. The unsafe version executes markup smuggled into a title: same visual output for honest data, XSS for hostile data.'
      }
    ],
    keyTakeaways: [
      'The DOM is a live tree of Document/Element/Text/Comment nodes; script mutations and page state are two views of one thing.',
      '`querySelector`/`querySelectorAll` speak full CSS — first match and static snapshot respectively; `getElementById` is the by-id fast path.',
      'Prefer the static NodeList of querySelectorAll over live HTMLCollections when iterating around mutations; snapshot semantics are predictable.',
      'Attributes are markup (`getAttribute`/`setAttribute`); properties are state — `value` diverges from its attribute after user input.',
      '`classList` manages classes without string surgery; `data-*` attributes mirror onto `dataset` for markup-riding state.',
      'Modern insertion — `append`, `prepend`, `before`, `after`, `replaceWith`, `remove` — plus `replaceChildren` for clearing; `DocumentFragment` batches many nodes into one reflow.',
      '`textContent` is the safe channel for untrusted text; `innerHTML` parses markup and is an XSS hole unless every byte is trusted.'
    ],
    quiz: [
      {
        q: 'What does `document.querySelectorAll(".item")` return?',
        options: [
          'A live HTMLCollection that updates as the document changes',
          'A static NodeList — a snapshot of the current matches, iterable and forEach-able',
          'The first matching element',
          'An array of strings'
        ],
        answer: 1,
        explanation: 'querySelectorAll snapshots: later document changes do not alter it — the predictable default versus the live getElementsBy* collections.'
      },
      {
        q: 'An input has `value="a"` in its HTML, the user types "b", then the script runs `input.setAttribute("value", "c")`. What does `input.value` read?',
        options: ['"a"', '"b" — the property holds the user’s edit; setting the attribute does not overwrite it', '"c"', 'empty string'],
        answer: 1,
        explanation: 'The value attribute sets the initial value; the property diverges on first user input and stays authoritative — read state from properties.'
      },
      {
        q: 'Why insert a batch of nodes through a DocumentFragment rather than appending them one by one?',
        options: [
          'Fragments style the nodes automatically',
          'The whole batch enters the tree in one operation — one layout pass instead of one per node',
          'Fragments are required for createElement to work',
          'It makes the NodeList live'
        ],
        answer: 1,
        explanation: 'The fragment is a detached container: a single append moves all its children at once, so the browser computes layout once — the DOM’s batch-update idiom.'
      },
      {
        q: 'A comment string from a user is placed on the page. Which is the XSS-safe assignment?',
        options: [
          '`div.innerHTML = comment;`',
          '`div.innerHTML = "<p>" + comment + "</p>";`',
          '`div.textContent = comment;`',
          '`div.innerText += comment;` after setting innerHTML to the comment'
        ],
        answer: 2,
        explanation: 'textContent treats the string as data, never markup — angle brackets render as characters. Any innerHTML route parses it, and a smuggled onerror handler executes.'
      },
      {
        q: '`li.dataset.lastEditedBy` corresponds to which attribute in the HTML?',
        options: ['`last-edited-by`', '`data-last-edited-by`', '`data-LastEditedBy`', '`data_edited_by`'],
        answer: 1,
        explanation: 'dataset keys map to data-* attributes with camelCase ↔ dash-case conversion: dataset.lastEditedBy ↔ data-last-edited-by.'
      },
      // University-pattern: DOM collections — static versus live lists (original)
      {
        q: "A page holds two `<p class=\"note\">` elements when this script runs:\n```js\nlet a = document.querySelectorAll('.note');\nlet b = document.getElementsByClassName('note');\ndocument.body.appendChild(Object.assign(document.createElement('p'), { className: 'note' }));\nconsole.log(a.length, b.length);\n```\nWhat prints?",
        options: ["`2 3`", "`3 3`", "`2 2`", "`3 2`"],
        answer: 0,
        explanation: "Step 1: The data given is two collections taken before a matching paragraph is appended, then both lengths logged. Step 2: The governing rules are that `querySelectorAll` returns a static snapshot fixed at call time, while `getElementsByClassName` returns a live view that tracks DOM mutations automatically. Step 3: Tracing mutation by mutation, both collections start with length `2`, the append adds a third matching paragraph, the static list stays at `2`, and the live collection grows to `3`. Step 4: The distractors fail because the static list never follows later mutations, and the live collection always does. Step 5: Therefore the program prints `2 3`."
      }
    ]
  },

  // ---------------------------------------------------------------- 15.4
  {
    sectionId: 'js-ch15-s4',
    readingTime: 8,
    intro: 'CSS owns the presentation; JavaScript owns the **decisions** — and the bridge between them is deliberately narrow. Most scripting should flip **classes** and let stylesheets do the work; the `style` property touches a single element’s inline styles; `getComputedStyle` reads what the cascade actually resolved; and flipping a class is exactly how you arm a CSS **transition** so the browser animates the change for you.',
    objectives: [
      'Toggle classes with classList and keep appearance rules in stylesheets',
      'Read and write inline styles via the style property',
      'Explain the difference between el.style and getComputedStyle(el)',
      'Trigger CSS transitions by class flips, in both directions',
      'Know the stylesheet-scripting API exists (insertRule) and why it is rarely used'
    ],
    concepts: [
      {
        term: 'Class toggling',
        kind: 'method',
        statement: 'The primary script-CSS interface is `el.classList`: `add`, `remove`, `toggle(name, force)` and `contains` manage state classes, and **stylesheets** map those classes to appearance. Behavior ("which state") lives in JS; appearance ("what the state looks like") lives in CSS — the separation that keeps both maintainable.',
        detail: '\n```js\nbutton.addEventListener("click", () => {\n  card.classList.toggle("flipped");    // decision here\n});\n```\n```css\n/* appearance there */\n.card.flipped { transform: rotateY(180deg); }\n```'
      },
      {
        term: 'The style property',
        kind: 'method',
        statement: '`el.style` is the element’s **inline** style declaration — reading it sees only inline styles (and what JS previously wrote there), never the cascade; writing it sets inline styles, which outrank stylesheet rules of equal specificity. Property names are camelCase (`backgroundColor`), and dashes work through `setProperty("--gap", "8px")` — also the way to set custom properties.',
        detail: '\n```js\nel.style.backgroundColor = "teal";       // writes style="background-color: teal"\nel.style.setProperty("--accent", "#0f0");\nel.style.transform;                      // "" if the transform comes from CSS\nel.style.removeProperty("background-color");\n```\nInline styles are the heaviest hammer: they override the cascade and hide the page’s appearance logic inside scripts — reserve them for genuinely dynamic values (computed positions, measured sizes).'
      },
      {
        term: 'getComputedStyle',
        kind: 'definition',
        statement: '`getComputedStyle(el)` returns a **read-only, live** view of every property **after the full cascade and inheritance** — stylesheet rules, inline styles, browser defaults, all resolved to concrete values. `el.style` is what was written inline; `getComputedStyle(el)` is what the user actually sees.',
        detail: '\n```js\nconst el = document.querySelector(".card");\nel.style.transform;                          // "" — nothing inline\ngetComputedStyle(el).transform;              // "matrix(1, 0, 0, 1, 0, 0)" — real\ngetComputedStyle(el).getPropertyValue("--accent");   // custom properties too\n```\nThe returned values are **computed** (percentages become pixels for layout properties), and the object is live — read it mid-transition (15.4 example) and you get the interpolated in-flight value.'
      },
      {
        term: 'Triggering CSS transitions',
        kind: 'method',
        statement: 'A CSS **transition** animates a property change automatically when the element matches a rule before and after. The JavaScript recipe: declare the `transition` property **on the base state** (so it covers both directions), then flip the state class from a handler — the browser interpolates every transitioned property between the computed values.',
        detail: '\n```css\n.card { transition: transform 300ms ease, box-shadow 300ms ease; }\n.card.flipped { transform: rotateY(180deg); box-shadow: 0 12px 24px #0002; }\n```\nThe classic bug: putting `transition` only on the hovered/active rule animates one direction and snaps the other. The base-state rule is the fix.'
      },
      {
        term: 'Scripting stylesheets',
        kind: 'method',
        statement: 'Stylesheets themselves are scriptable: `document.styleSheets`, each sheet’s `cssRules` list, and `sheet.insertRule("selector { ... }", index)` / `deleteRule(i)` can add rules at runtime. It is the tool for generated CSS (hundreds of rules) — and overkill for state changes, where a class is clearer and cacheable.',
        detail: 'A `<style>` element’s text can also be rewritten wholesale (`styleEl.textContent = generatedCss`). Most applications never touch either — class flips cover the mainstream, and computed inline styles cover the dynamic remainder.'
      }
    ],
    examples: [
      {
        title: 'One class flip, two animated properties',
        problem: 'A card flips when a button is pressed — CSS declares the motion, JavaScript only changes state. Predict what each probe reads:\n```css\n.card {\n  transition: transform 300ms ease, box-shadow 300ms ease;\n  transform: rotateY(0deg);\n  box-shadow: 0 2px 6px #0001;\n}\n.card.flipped {\n  transform: rotateY(180deg);\n  box-shadow: 0 12px 24px #0002;\n}\n```\n```js\nconst card = document.querySelector(".card");\ndocument.querySelector("#flip").addEventListener("click", () => {\n  card.classList.toggle("flipped");\n});\n\ncard.style.transform;            // ? before and after the flip\ncard.style.transition;           // ?\ngetComputedStyle(card).transition;   // ?\n```',
        steps: [
          { label: 'Step 1: The transition lives on the base state', text: 'Declaring `transition` on `.card` (not `.card.flipped`) means the rule applies **before and after** every change — flipping in animates, flipping back animates. Put it only on `.flipped` and the reverse change would snap instantly: the most common transition bug, fixed by rule placement.' },
          { label: 'Step 2: The flip is one class toggle', text: 'The handler contains no transform, no shadow, no timing — only the **decision** `classList.toggle("flipped")`. The stylesheet maps the class to new values; because the property changed while a transition covers it, the browser interpolates 300 ms of intermediate frames at native speed, off the JavaScript thread entirely.' },
          { label: 'Step 3: el.style sees none of it', text: 'Both probes on `card.style` return empty strings — before, because nothing was written inline; after, because the transform and shadow come from **stylesheet rules**, and `style` only reflects inline declarations. JavaScript that wrote nothing reads nothing.' },
          { label: 'Step 4: getComputedStyle sees everything', text: '`getComputedStyle(card).transition` reads back `"transform 300ms ease, box-shadow 300ms ease"` — the cascade-resolved value, visible even though no inline style exists. Read `getComputedStyle(card).transform` **mid-transition** and you get the interpolated matrix of the current frame — proof that the object is live, and the way to measure where an animation is.' },
          { label: 'Step 5: Why not animate in JavaScript', text: 'The JS alternative — a requestAnimationFrame loop writing `style.transform` each frame — exists (and is right for genuinely dynamic motion), but the class-flip version costs one line, runs on the compositor, and keeps the visual definition in CSS where designers can tune it. Script the state, stylesheet the style.' }
        ],
        result: '`card.style.transform` → "" both times; `card.style.transition` → ""; `getComputedStyle(card).transition` → the full resolved transition. One class toggle, two properties, 300 ms — with the animation owned by CSS.'
      },
      {
        title: 'Theming with custom properties and one generated rule',
        problem: 'A settings panel must switch the whole page between light and dark themes and tint one card with a user-picked accent, without touching every element:\n```css\n:root { --bg: #ffffff; --fg: #111111; --accent: #10b981; }\nbody { background: var(--bg); color: var(--fg); }\n.card { border-left: 4px solid var(--accent); }\n```\n```js\nconst root = document.documentElement;\nroot.style.setProperty("--bg", "#111111");\nroot.style.setProperty("--fg", "#f5f5f5");\ncard.style.setProperty("--accent", picker.value);\n```',
        steps: [
          { label: 'Step 1: Variables are the theme API', text: 'The stylesheet never names a theme color directly — every rule reads var(--bg), var(--fg) or var(--accent). Changing the value in one place repaints every consumer, which is why variables beat per-element inline colors for theming.' },
          { label: 'Step 2: setProperty writes a dynamic value', text: 'The accent comes from a color picker at runtime, so no static class can hold it: card.style.setProperty("--accent", picker.value) writes an inline custom property on that card only. Sibling cards keep the old accent — genuinely dynamic state, the legitimate use of inline style.' },
          { label: 'Step 3: getComputedStyle reads the resolved theme', text: 'To verify, read getComputedStyle(card).getPropertyValue("--accent") — the cascade-resolved value after inheritance from :root and the inline override. Reading card.style.getPropertyValue shows only what script wrote, never the inherited default.' },
          { label: 'Step 4: insertRule is for generated CSS', text: 'If the app needs one hundred utility classes (.m-0 through .m-99), document.styleSheets[0].insertRule(".m-42 { margin: 42px; }", 0) creates them programmatically. For state changes like dark mode it is overkill — a class flip or two setProperty calls are clearer and cacheable.' }
        ],
        result: 'Two setProperty calls retheme the page, one per-card setProperty tints a single accent, getComputedStyle verifies the resolved values — and insertRule stays reserved for generated rule batches, not state.'
      }
    ],
    keyTakeaways: [
      'Flip classes (`classList.toggle`) and let stylesheets decide appearance — behavior in JS, presentation in CSS.',
      '`el.style` reads and writes only **inline** styles; camelCase names; setProperty also sets custom properties like `--accent`.',
      '`getComputedStyle(el)` is the read-only live view of the resolved cascade — computed values, including in-flight transition frames.',
      'Put `transition` on the base rule so both directions animate; flipping a state class is all JavaScript needs to do.',
      'Stylesheet scripting (`insertRule`, editing a `<style>` text) exists for generated CSS; class flips are the mainstream interface.'
    ],
    quiz: [
      {
        q: 'An element is styled by a stylesheet rule that sets `color: red`. What does `el.style.color` return from a script that never wrote inline styles?',
        options: ['"red"', 'An empty string — el.style reflects only inline declarations', '"inherit"', 'It throws'],
        answer: 1,
        explanation: 'The style property is the inline declaration only; to learn what the cascade produced, query getComputedStyle(el).color — which is "red".'
      },
      {
        q: 'A transition must animate in BOTH directions (adding the class, and removing it). Where should the `transition` property be declared?',
        options: [
          'On the state class only (.card.flipped)',
          'On the base state (.card) — so it applies before and after every change',
          'Inline via el.style.transition in the handler',
          'On the button'
        ],
        answer: 1,
        explanation: 'A transition animates a change when the property is covered at both endpoints — declaring it on the base rule guarantees coverage for adding and removing the state class.'
      },
      {
        q: 'Which statement about `getComputedStyle(el)` is TRUE?',
        options: [
          'It returns the inline style string',
          'It returns a read-only live object with the cascade-resolved, computed values of every property',
          'It modifies the element’s appearance',
          'It only works for properties set by JavaScript'
        ],
        answer: 1,
        explanation: 'getComputedStyle folds stylesheet rules, inline styles, inheritance and defaults into computed values — live, so reads during a transition return interpolated frames.'
      },
      {
        q: 'The recommended division of labor for "highlight this card when clicked" is:',
        options: [
          'JS writes the full highlight CSS inline on the element',
          'JS toggles a class; the stylesheet defines what the class looks like',
          'JS rewrites the page stylesheet with insertRule',
          'CSS decides which card is clicked'
        ],
        answer: 1,
        explanation: 'JavaScript owns the decision (which state), CSS owns the appearance (what the state means visually) — the separation that keeps both sides greppable.'
      }
    ]
  },

  // ---------------------------------------------------------------- 15.5
  {
    sectionId: 'js-ch15-s5',
    readingTime: 7,
    intro: 'Geometry in a browser has exactly two coordinate systems: **viewport coordinates**, which move with the page as it scrolls, and **document coordinates**, which are fixed to the content. Every positioning question — is this element visible, which section am I in, where did the user click — reduces to converting between them by adding the scroll offset. Programmatic scrolling (`scrollTo`, `scrollBy`, `scrollIntoView`) completes the toolkit.',
    objectives: [
      'Distinguish viewport from document coordinates and convert between them',
      'Read element geometry with getBoundingClientRect',
      'Relate mouse event coordinates (clientX vs pageX) to the two systems',
      'Scroll windows and elements programmatically, including smooth scrolling',
      'Assemble the pieces into a scroll-spy indicator'
    ],
    concepts: [
      {
        term: 'Viewport vs document coordinates',
        kind: 'definition',
        statement: 'The **viewport** is the visible window; its origin (0, 0) is the top-left of **what is currently visible**, so a point fixed on screen keeps its viewport coordinates as you scroll. **Document** coordinates are fixed to the content: the top-left of the page, wherever it has been scrolled to. The conversion is one addition: `documentY = viewportY + window.scrollY`.',
        detail: 'Zoom and pixel density make the browser’s CSS pixels the unit, not device pixels — `window.scrollY` and all geometry here are in CSS pixels. The page can be larger than the viewport in both axes; only vertical scrolling is common.'
      },
      {
        term: 'getBoundingClientRect',
        kind: 'method',
        statement: '`el.getBoundingClientRect()` returns the element’s box in **viewport coordinates**: `x`/`left`, `y`/`top`, `right`, `bottom`, `width`, `height` — position and size in one call. Because the origin is the viewport, the same element returns different `top` values as the page scrolls; add `window.scrollY` for a scroll-independent position.',
        detail: '\n```js\nconst box = el.getBoundingClientRect();\nconst inViewport = box.bottom > 0 && box.top < window.innerHeight;\nconst docTop = box.top + window.scrollY;   // document coordinate\n```\nVisibility testing, overlap detection and click-target math all start here. Borders are included; margins are not.'
      },
      {
        term: 'Mouse coordinates: clientX vs pageX',
        kind: 'method',
        statement: 'Mouse and pointer events carry both systems: `e.clientX`/`clientY` are **viewport** coordinates (compare directly with getBoundingClientRect), `e.pageX`/`pageY` are **document** coordinates (client + scroll offset). The same event, two frames of reference.',
        detail: 'Client coordinates pair naturally with element rectangles; page coordinates suit anything stored across scrolls (annotations, drag targets recorded in content space). `screenX`/`screenY` are a third system — the physical monitor — rarely useful in page logic.'
      },
      {
        term: 'scrollTo, scrollBy, element scrolling',
        kind: 'method',
        statement: 'The window scrolls with `window.scrollTo(x, y)` (absolute) and `window.scrollBy(dx, dy)` (relative); both accept an options object for smoothness: `window.scrollTo({ top: 800, behavior: "smooth" })`. Scrollable elements have the same methods plus `scrollTop`/`scrollLeft` read-writable properties.',
        detail: '\n```js\nwindow.scrollTo({ top: 0, behavior: "smooth" });   // animated back-to-top\ncontainer.scrollBy({ top: 60 });                  // one item down\n```\nCurrent offsets live at `window.scrollX`/`scrollY` (aliases `pageXOffset`/`pageYOffset`).'
      },
      {
        term: 'scrollIntoView',
        kind: 'method',
        statement: '`el.scrollIntoView(options)` scrolls the nearest scrollable ancestors until the element is visible — the one-liner for "bring this into view": `el.scrollIntoView({ behavior: "smooth", block: "center" })`. `block` picks the vertical alignment (`start`, `center`, `end`, `nearest`) and `inline` the horizontal one.',
        detail: 'With no arguments it does `block: "start"` instantly — the classic jump-to-anchor behavior that CSS `scroll-margin` can now pad. Prefer it over hand-computed `scrollTo(el.offsetTop)` — it handles nested scrollers, and it does not fight the layout.'
      }
    ],
    examples: [
      {
        title: 'A scroll spy in fifteen lines',
        problem: 'Highlight the nav link of the section currently on screen, and scroll sections into view when their links are clicked:\n```js\nconst nav = document.querySelector("nav");\nconst sections = document.querySelectorAll("section[id]");\n\nfunction spy() {\n  const probe = window.scrollY + window.innerHeight / 3;  // the "reading line"\n  for (const s of sections) {\n    const box = s.getBoundingClientRect();       // viewport coords\n    const top = box.top + window.scrollY;        // convert to document coords\n    const active = probe >= top && probe < top + box.height;\n    for (const a of nav.querySelectorAll("a")) {\n      a.classList.toggle("active", active && a.hash === "#" + s.id);\n    }\n  }\n}\ndocument.addEventListener("scroll", spy, { passive: true });\n\nnav.addEventListener("click", (e) => {\n  const a = e.target.closest("a[href^=\u0027#\u0027]");\n  if (!a) return;\n  e.preventDefault();\n  document.querySelector(a.hash).scrollIntoView({ behavior: "smooth" });\n});\nspy();\n```',
        steps: [
          { label: 'Step 1: Pick a line and express it in document coordinates', text: 'The "current" section is defined by a **reading line** one-third of the viewport down: `window.scrollY + window.innerHeight / 3` converts a viewport-relative line into the document frame — the one addition that all geometry here reduces to.' },
          { label: 'Step 2: getBoundingClientRect + scrollY = scroll-independent top', text: 'Each section’s `box.top` is viewport-relative — it changes on every scroll — but `box.top + window.scrollY` is the section’s fixed document position. Compare the reading line against `[top, top + box.height)` and exactly one section contains it.' },
          { label: 'Step 3: Toggle classes, not styles', text: 'The active link gets its `active` class flipped per Section 15.4 — the stylesheet decides what highlighting means. The toggle’s second argument is the force form: on when the section matches, off otherwise, with no if/else.' },
          { label: 'Step 4: Passive scroll listener', text: 'The spy runs on every scroll event — dozens of times per second during a flick. `{ passive: true }` promises no `preventDefault`, so the browser scrolls immediately without waiting on the handler (Section 15.2); the handler’s own work is one rect call per section.' },
          { label: 'Step 5: Clicks scroll smoothly', text: 'The delegated nav handler (one listener — Section 15.2 again) finds the anchor with `closest`, cancels the default hash jump with `preventDefault`, and hands the scroll to `scrollIntoView({ behavior: "smooth" })` — the browser computes the target position across however many nested scrollables exist, and animates it natively.' }
        ],
        result: 'The nav tracks the section under the one-third line as the user scrolls (one rect + one toggle per section per event, never blocking scrolling), and clicking a link glides to its section instead of jumping.'
      },
      {
        title: 'Sticky annotations that survive scrolling: client vs page',
        problem: 'Clicking a diagram must drop a pin that stays glued to the content after scrolling. Store the pin once, render it on every scroll:\n```js\nconst diagram = document.querySelector("#diagram");\nconst pins = [];  // stored in document coordinates\n\ndiagram.addEventListener("click", (e) => {\n  const box = diagram.getBoundingClientRect();\n  const xClient = e.clientX - box.left;   // viewport-relative hit test\n  const yClient = e.clientY - box.top;\n  pins.push({ x: xClient + window.scrollX - box.left + diagram.offsetLeft, y: 0 });\n});\n```',
        steps: [
          { label: 'Step 1: Hit-test in client coordinates', text: 'The click and the rect share a frame: e.clientX/clientY minus box.left/top gives the position inside the diagram in viewport pixels. Comparing client values against the rect is the only frame where the math lines up without conversion.' },
          { label: 'Step 2: Convert to document coordinates for storage', text: 'Adding window.scrollY (and scrollX) converts the viewport point into document coordinates — fixed to the content. A pin stored as client coordinates would drift by exactly the scroll delta on the next scroll; stored as page coordinates it is stable.' },
          { label: 'Step 3: Render back through the rect', text: 'On scroll, position each pin absolutely as left = pin.x and top = pin.y in document space, or recompute its viewport position as pinDoc - window.scrollY. The scroll spy reads rects; the annotation layer writes them — same conversion, opposite direction.' },
          { label: 'Step 4: Why pageX exists', text: 'e.pageX/pageY are client plus scroll in one property — the stored form for free. Use client values for comparisons against getBoundingClientRect, page values for anything persisted across scrolls.' }
        ],
        result: 'Hit-test with clientX against the rect, store with page coordinates, render in document space — the pin sticks to the diagram through any amount of scrolling.'
      }
    ],
    keyTakeaways: [
      'Two systems only: viewport (moves with scroll) and document (fixed to content); `documentY = viewportY + window.scrollY`.',
      '`getBoundingClientRect()` is the geometry primitive — viewport-relative box including borders; add the scroll offset for stable positions.',
      'Mouse events carry both frames: `clientX/Y` pairs with rects, `pageX/Y` pairs with document-anchored logic.',
      '`scrollTo`/`scrollBy` (with `{ behavior: "smooth" }`) and `el.scrollIntoView({ block, behavior })` are the programmatic scrolling tools.',
      'Scroll handlers must be cheap and `passive` — they fire continuously, and the browser must never wait on them to scroll.'
    ],
    quiz: [
      {
        q: 'An element’s `getBoundingClientRect().top` reads -240. How far down is it, in document coordinates?',
        options: [
          'Exactly 240 pixels from the top',
          'window.scrollY - 240',
          'window.scrollY + (-240) — its document top equals the scroll offset minus 240',
          'It cannot be computed from the rect alone'
        ],
        answer: 2,
        explanation: 'The rect is viewport-relative: a negative top means it is above the viewport top by 240 CSS pixels, so its document position is scrollY - 240 — one addition either way.'
      },
      {
        q: 'Which coordinates from a mouse event compare directly against `getBoundingClientRect()` values?',
        options: ['`pageX`/`pageY`', '`clientX`/`clientY`', '`screenX`/`screenY`', '`offsetX`/`offsetY` only'],
        answer: 1,
        explanation: 'Both the rect and clientX/Y are viewport-relative — the frames match. pageX/Y are document coordinates; screenX/Y are monitor coordinates.'
      },
      {
        q: 'The one-line, nested-scroller-safe way to reveal an off-screen element with animation is:',
        options: [
          'window.scrollTo(0, el.offsetTop)',
          'el.scrollIntoView({ behavior: "smooth" })',
          'el.style.top = "0px"',
          'window.scrollBy(el.getBoundingClientRect().top, 0)'
        ],
        answer: 1,
        explanation: 'scrollIntoView walks every scrollable ancestor to bring the element into view, with native smooth animation — no manual math, no missed parent scrollers.'
      },
      {
        q: 'Why register scroll handlers with `{ passive: true }`?',
        options: [
          'To run them before capture listeners',
          'To run them only once',
          'To promise they never call preventDefault, so the browser can scroll without waiting for them to finish',
          'To make them fire on the worker thread'
        ],
        answer: 2,
        explanation: 'Scroll events fire continuously; a handler that might preventDefault forces the browser to block scrolling until it returns. Passive promises it will not, keeping scrolling smooth.'
      }
    ]
  },

  // ---------------------------------------------------------------- 15.6
  {
    sectionId: 'js-ch15-s6',
    readingTime: 9,
    intro: '**Web components** are the platform’s answer to component libraries: define your own elements with `customElements.define`, encapsulate their internals behind a **shadow DOM**, and stamp out instances from inert `<template>` markup. The heart of the model is the **element lifecycle** — callbacks the platform invokes when your element is connected to the document, disconnected, or has an observed attribute changed — which tells you exactly when it is legal and useful to render.',
    objectives: [
      'Define custom elements with customElements.define and the naming rules',
      'Order and use the lifecycle callbacks: connected, disconnected, attributeChanged',
      'Explain what shadow DOM isolates and how mode open/closed differs',
      'Project light-DOM children into a shadow tree with slots',
      'Instantiate markup from a template element without parsing side effects'
    ],
    concepts: [
      {
        term: 'Custom elements',
        kind: 'definition',
        statement: '`customElements.define("my-badge", MyBadgeClass)` registers a class (extending `HTMLElement`) under a tag name that **must contain a hyphen** and must not collide with built-ins. Thereafter the parser upgrades `<my-badge>` elements into instances of the class — and `document.createElement("my-badge")` constructs one directly.',
        detail: '\n```js\nclass MyBadge extends HTMLElement {\n  connectedCallback() { this.textContent = "ready"; }\n}\ncustomElements.define("my-badge", MyBadge);\n```\nRegistration is global and permanent; defining the same name twice throws. Elements parsed **before** registration are upgraded in place when `define` runs — the callbacks then fire retroactively in order.'
      },
      {
        term: 'The lifecycle callbacks',
        kind: 'law',
        statement: 'The platform calls four optional methods: **`connectedCallback()`** — the element was inserted into the document (render here; it may fire again if the element is moved); **`disconnectedCallback()`** — it was removed (cleanup: timers, listeners, observers); **`attributeChangedCallback(name, oldV, newV)`** — an **observed** attribute changed (declare the list in `static observedAttributes`); **`adoptedCallback()`** — it moved to another document (rare, mainly frames).',
        detail: 'Ordering rule: the constructor runs **first and minimal** (no rendering — children and attributes may not exist yet), attribute callbacks fire as the parser sets attributes, and `connectedCallback` fires once the element is fully in the tree — the correct place to first render. Re-connecting a detached element fires connected again: design rendering to be idempotent.'
      },
      {
        term: 'Shadow DOM',
        kind: 'definition',
        statement: '`this.attachShadow({ mode: "open" })` inside the constructor gives the element a private **shadow root** — a second, encapsulated tree whose children, ids and styles are invisible to page CSS and queries. Page styles do not leak in; the element’s internals do not leak out: styles and queries (querySelector) stop at the shadow boundary.',
        detail: 'The element’s public face stays the **light DOM** — what page authors write between its tags. With `mode: "closed"`, even `element.shadowRoot` returns null (only code holding the root object can reach in); `"open"` is the practical default, and the one progressive enhancement prefers.'
      },
      {
        term: 'Slots',
        kind: 'method',
        statement: 'A shadow tree can contain `<slot>` elements that **project** light-DOM children into designated places: `<slot name="icon">` pulls in the child with `slot="icon"`, and a bare `<slot>` receives all unattributed children. The children themselves stay in the light DOM (inspectable, stylable by the page) — only their rendering position moves.',
        detail: '\n```html\n<my-badge>\n  <img slot="icon" src="star.svg" alt="">\n  <b>Ada</b>            <!-- flows into the default slot -->\n</my-badge>\n```\nSlots make a custom element a container with an internal layout instead of an opaque box — the composition model React popularized, natively.'
      },
      {
        term: 'The template element',
        kind: 'method',
        statement: 'Content inside `<template>` is parsed but **inert**: not rendered, not executed, not queryable through the page — a blueprint. Clone it at element-creation time with `template.content.cloneNode(true)` and insert the copy into the shadow root, giving custom elements cheap, pre-parsed markup without string concatenation or innerHTML.',
        detail: '\n```html\n<template id="badge-tpl">\n  <style>:host { display: inline-flex; }</style>\n  <slot name="icon"></slot><span class="label"><slot></slot></span>\n</template>\n```\nA `<style>` inside a shadow tree applies **only within it** — component-scoped CSS that the page cannot override (except through CSS custom properties and `::part`).'
      }
    ],
    examples: [
      {
        title: '<user-badge>: render on connect, re-render on attribute change',
        problem: 'A badge that shows a name and role from attributes, re-rendering whenever they change:\n```js\nclass UserBadge extends HTMLElement {\n  static observedAttributes = ["name", "role"];\n\n  constructor() {\n    super();                          // required first line\n    this.attachShadow({ mode: "open" });\n  }\n\n  connectedCallback() {               // in the document — render now\n    this.render();\n  }\n\n  disconnectedCallback() {            // removed — nothing to clean here\n    console.log("badge gone");\n  }\n\n  attributeChangedCallback(name, oldV, newV) {\n    if (oldV !== newV && this.isConnected) this.render();\n  }\n\n  render() {\n    this.shadowRoot.replaceChildren();\n    const b = document.createElement("b");\n    b.textContent = this.getAttribute("name") ?? "anonymous";\n    const role = document.createElement("small");\n    role.textContent = this.getAttribute("role") ?? "guest";\n    this.shadowRoot.append(b, " ", role);\n  }\n}\ncustomElements.define("user-badge", UserBadge);\n```\n```html\n<user-badge name="Ada" role="admin"></user-badge>\n```',
        steps: [
          { label: 'Step 1: Constructor is wiring, not rendering', text: 'The constructor calls `super()` (mandatory for custom elements) and attaches the shadow root — that is all. It must not read attributes or children: the parser may not have supplied them yet, and the element is not in any document. Rendering this early would race the parser.' },
          { label: 'Step 2: attributeChangedCallback fires while parsing', text: 'Because `static observedAttributes` lists `name` and `role`, the platform notifies the class when either is set — including when the HTML parser sets them from markup. Those calls arrive **before** connection, which is why `render()` is guarded by `this.isConnected`: there is no shadow content to compute meaningfully yet, and connectedCallback will render anyway.' },
          { label: 'Step 3: connectedCallback is the render signal', text: 'When the element enters the document, `connectedCallback` runs `render()`: attributes are guaranteed parsed, the shadow root exists, and the element is about to be visible. The method will fire again if the element is ever removed and re-inserted — rendering is written idempotently (`replaceChildren` clears first), so reconnection just redraws.' },
          { label: 'Step 4: Live updates through the same path', text: 'Script-side, `badge.setAttribute("role", "owner")` triggers `attributeChangedCallback` with `("role", "admin", "owner")` — old and new values in hand — and the guard passes (the element is connected), so `render()` rebuilds the shadow content from the new attribute values. One rendering function serves parse, connect and update.' },
          { label: 'Step 5: What the page sees', text: 'The rendered `<b>Ada</b> <small>admin</small>` lives in the **shadow tree**: page CSS cannot restyle it and `document.querySelector("b")` cannot find it, while `<user-badge>` itself remains a normal element for layout, delegation and inspection. `disconnectedCallback` is the symmetric hook for timers, observers and listeners that would otherwise leak — logged here to show the boundary.' }
        ],
        result: 'The badge renders "Ada admin" on insertion, re-renders on any attribute change (guarded to connected state), cleans up on removal — with its internals invisible to the page and its implementation one class, one render method.'
      },
      {
        title: 'A templated card with slots and sealed styles',
        problem: 'Build <info-card> so page authors supply an icon and body, the component supplies layout and style, and page CSS cannot restyle its internals:\n```html\n<template id="card-tpl">\n  <style>:host { display: block; border: 1px solid #888; } .title { font-weight: bold; }</style>\n  <div class="title"><slot name="heading">Untitled</slot></div>\n  <div class="body"><slot></slot></div>\n</template>\n<info-card><span slot="heading">Ada</span>Pioneer of computing.</info-card>\n```',
        steps: [
          { label: 'Step 1: Clone the blueprint, do not parse strings', text: 'In the constructor, const tpl = document.getElementById("card-tpl"); this.attachShadow({ mode: "open" }).append(tpl.content.cloneNode(true)) stamps pre-parsed markup — no innerHTML, no per-instance parse cost, and the template itself never renders.' },
          { label: 'Step 2: Slots project, children stay put', text: 'The span with slot="heading" renders inside the named slot; the text node flows into the default slot. Both remain light-DOM children — inspectable and page-stylable — while their rendered position is inside the shadow tree.' },
          { label: 'Step 3: Styles stop at the boundary', text: 'The page rule b { color: red } does not reach the shadow .title, and document.querySelector(".title") returns null — encapsulation verified. Only inherited custom properties and ::part cross deliberately.' },
          { label: 'Step 4: Fallback content covers missing slots', text: 'An <info-card> with no heading child shows Untitled from inside the slot element itself — default content without a conditional in script.' }
        ],
        result: 'One template, two slots, zero leaks: authors compose with plain HTML, the component owns layout and style, and the shadow boundary keeps both sides honest.'
      }
    ],
    keyTakeaways: [
      'Custom elements are classes extending HTMLElement registered under a hyphenated name; the parser upgrades matching tags into instances.',
      'Lifecycle: constructor (minimal wiring) → attributeChangedCallback for observed attributes → connectedCallback (first render — may re-fire on moves) → disconnectedCallback (cleanup) → adoptedCallback (new document).',
      'Only attributes listed in `static observedAttributes` generate attributeChangedCallback events.',
      'Shadow DOM isolates the component’s internal tree from page CSS and queries; `mode: "open"` exposes `element.shadowRoot`, `"closed"` hides even that.',
      'Slots project light-DOM children into the shadow tree by name — children stay page-inspectable, rendering position moves inside the component.',
      '`<template>` holds inert, pre-parsed markup; `content.cloneNode(true)` stamps instances; styles inside a shadow root are component-scoped.'
    ],
    quiz: [
      {
        q: 'Which lifecycle callback is the right place for the FIRST render of a custom element?',
        options: [
          'The constructor',
          '`connectedCallback` — the element is in the document with attributes parsed',
          '`disconnectedCallback`',
          '`adoptedCallback`'
        ],
        answer: 1,
        explanation: 'In the constructor, attributes and children may not exist and the element is not yet in the tree; connectedCallback guarantees the full element is live — render there (idempotently, since it re-fires on moves).'
      },
      {
        q: 'What does `static observedAttributes = ["name"]` accomplish?',
        options: [
          'Sets default attributes on instances',
          'Lists the attributes whose changes invoke attributeChangedCallback — unlisted attributes change silently',
          'Makes the attributes read-only',
          'Nothing; it is documentation only'
        ],
        answer: 1,
        explanation: 'The platform notifies attribute changes only for observed attributes: the static list is the opt-in that keeps callbacks from firing for every irrelevant attribute.'
      },
      {
        q: 'A page stylesheet styles all `b` elements red. Inside a component’s shadow tree, its own `<b>` element will —',
        options: [
          'Also be red — the page cascade crosses the shadow boundary',
          'Keep the component’s own styling: page selectors do not match nodes inside the shadow root',
          'Crash the component',
          'Inherit red only if the component allows it in its HTML'
        ],
        answer: 1,
        explanation: 'The shadow boundary blocks page selectors (and document.querySelector) from matching internal nodes — encapsulation is the point of shadow DOM; custom properties and ::part are the deliberate escape hatches.'
      },
      {
        q: 'Why clone `<template>` content rather than build elements with innerHTML strings?',
        options: [
          'Templates are faster to write',
          'Template content is parsed once and inert — cloneNode stamps pre-parsed markup without string concatenation or XSS exposure of the component’s structure',
          'innerHTML does not work inside shadow roots',
          'Templates are required for custom elements'
        ],
        answer: 1,
        explanation: 'The template is parsed (never rendered or executed) at page load; each clone is cheap and constant — the platform’s answer to markup blueprints for component instances.'
      }
    ]
  },
  // ---------------------------------------------------------------- 15.7
  {
    sectionId: 'js-ch15-s7',
    readingTime: 9,
    intro: 'Browsers provide two distinct graphics architectures for drawing custom visuals: **Scalable Vector Graphics (SVG)** and the **HTML <canvas> element**. SVG is a retained-mode XML vector graphic language integrated directly into the DOM tree, where every circle, path and rect has identity, styles, and event listeners. The <canvas> element is an immediate-mode pixel raster surface programmed via JavaScript 2D and WebGL contexts. SVG excels at scalable diagrams and interactive UI components; canvas excels at high-frequency animations, games, data visualizations, and image processing where thousands of retained DOM nodes would overwhelm browser layout engines.',
    objectives: [
      'Contrast SVG retained-mode DOM trees with canvas immediate-mode 2D rendering surfaces',
      'Create and manipulate SVG shapes dynamically with document.createElementNS',
      'Draw paths, rectangles, curves and text using the CanvasRenderingContext2D API',
      'Apply coordinate transformations (translate, rotate, scale) with save() and restore()',
      'Manipulate raw pixel data using getImageData and putImageData'
    ],
    concepts: [
      {
        term: 'SVG in the DOM',
        kind: 'definition',
        statement: 'SVG elements are real DOM elements residing in the SVG namespace (`http://www.w3.org/2000/svg`). They scale infinitely without pixelation, support CSS styling and animations, and dispatch standard mouse and touch events.',
        detail: '\n```js\nconst svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");\nconst circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");\ncircle.setAttribute("cx", "50");\ncircle.setAttribute("cy", "50");\ncircle.setAttribute("r", "40");\ncircle.setAttribute("fill", "#10b981");\nsvg.appendChild(circle);\n```\nAlways use `createElementNS` with the SVG namespace URI; standard `createElement` creates an unknown HTML element instead.'
      },
      {
        term: 'The canvas element and 2D context',
        kind: 'definition',
        statement: 'A `<canvas>` element provides an immediate-mode bitmap surface. Its `width` and `height` HTML attributes set the pixel grid buffer resolution, while `canvas.getContext("2d")` obtains the drawing context.',
        detail: 'The element attributes determine the bitmap drawing buffer size, while CSS width and height set its display size on screen. To prevent blurry rendering on high-DPI (Retina) displays, scale the canvas buffer by `window.devicePixelRatio` while setting CSS dimensions to logical pixels.'
      },
      {
        term: 'Immediate-mode vs retained-mode',
        kind: 'insight',
        statement: 'SVG is **retained-mode**: the browser maintains a persistent tree of shape objects and redraws them automatically when styles or attributes change. Canvas is **immediate-mode**: shapes are burned directly into a pixel grid and forgotten — redraws require clearing the canvas with `clearRect` and re-executing drawing commands.',
        detail: 'For 100 interactive icons with hover states, SVG is faster and cleaner. For 10,000 moving particles or 60fps game rendering, Canvas avoids the memory and garbage collection overhead of 10,000 DOM nodes.'
      },
      {
        term: 'The transformation stack',
        kind: 'method',
        statement: '`ctx.save()` pushes the current transformation matrix, clipping path, and style properties onto an internal drawing state stack; `ctx.restore()` pops the previous state back.',
        detail: '\n```js\nctx.save();\nctx.translate(100, 100);\nctx.rotate((Math.PI / 180) * 45);\nctx.fillStyle = "red";\nctx.fillRect(-25, -25, 50, 50);\nctx.restore(); // restores fillStyle and untranslated matrix\n```\nAlways pair `save()` and `restore()` around local transformations to avoid corrupting subsequent draw calls.'
      },
      {
        term: 'Path construction',
        kind: 'method',
        statement: 'Complex vector shapes on canvas are drawn using path subroutines: `ctx.beginPath()`, `moveTo(x, y)`, `lineTo(x, y)`, `arc(x, y, r, startAngle, endAngle)`, and `ctx.closePath()`, followed by `ctx.stroke()` or `ctx.fill()`.',
        detail: 'Calling `beginPath()` is mandatory before drawing a new shape; otherwise, subsequent `stroke()` or `fill()` calls will re-stroke and re-fill all previously defined path segments.'
      },
      {
        term: 'Direct pixel manipulation',
        kind: 'method',
        statement: '`ctx.getImageData(sx, sy, sw, sh)` returns an `ImageData` object containing a `Uint8ClampedArray` of raw RGBA pixel bytes (four bytes per pixel: red, green, blue, alpha from 0 to 255).',
        detail: '\n```js\nconst imgData = ctx.getImageData(0, 0, width, height);\nconst data = imgData.data;\nfor (let i = 0; i < data.length; i += 4) {\n  const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;\n  data[i] = avg;     // red\n  data[i + 1] = avg; // green\n  data[i + 2] = avg; // blue\n}\nctx.putImageData(imgData, 0, 0);\n```\nThis enables custom client-side image filters, computer vision, and procedural noise generation.'
      }
    ],
    figures: [
      {
        caption: "Canvas 2D coordinate system and transformation stack: the default canvas coordinate space has origin (0,0) at the upper-left, with +X extending rightward and +Y extending downward. Calling ctx.translate(dx, dy) repositions the local origin, while ctx.rotate(θ) rotates subsequent drawing operations around that translated origin.",
        svg: `<svg viewBox="0 0 720 280" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Canvas 2D coordinate space and matrix transformation stack"><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor"/></marker></defs><rect x="40" y="30" width="640" height="220" rx="6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3"/><text x="60" y="55" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="currentColor">Default Canvas Coordinate Space (0,0)</text><circle cx="70" cy="70" r="4" fill="currentColor"/><line x1="70" y1="70" x2="240" y2="70" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><text x="250" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="currentColor">+X (right)</text><line x1="70" y1="70" x2="70" y2="200" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><text x="50" y="220" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="currentColor">+Y (down)</text><path d="M 70 70 L 400 130" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 3" marker-end="url(#arrow)"/><text x="210" y="115" font-family="system-ui, sans-serif" font-size="11" fill="currentColor">translate(dx, dy)</text><circle cx="400" cy="130" r="5" fill="currentColor"/><text x="415" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="currentColor">Local Origin (dx, dy)</text><line x1="400" y1="130" x2="560" y2="195" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><text x="570" y="200" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="currentColor">+X′ (rotate θ)</text><line x1="400" y1="130" x2="335" y2="245" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><text x="315" y="255" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="currentColor">+Y′</text><path d="M 450 130 A 50 50 0 0 1 445 148" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="460" y="145" font-family="system-ui, sans-serif" font-size="11" font-style="italic" fill="currentColor">θ</text><rect x="360" y="115" width="80" height="30" transform="rotate(22 400 130)" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="520" y="90" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">ctx.fillRect(-w/2, -h/2, w, h)</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: 'Drawing a Scaled Donut Segment with Canvas',
        problem: 'Draw a high-DPI donut slice (arc from 0 to \\pi/2) centered at (150, 150) with outer radius 80 and inner radius 50.',
        steps: [
          { label: 'High-DPI Setup', text: 'Set canvas.width = 300 * dpr and canvas.height = 300 * dpr, then call ctx.scale(dpr, dpr).' },
          { label: 'Begin Path', text: 'Call ctx.beginPath() and use arc(150, 150, 80, 0, Math.PI / 2) for the outer contour.' },
          { label: 'Inner Counter-Arc', text: 'Use arc(150, 150, 50, Math.PI / 2, 0, true) to trace back along the inner radius in reverse.' },
          { label: 'Close and Fill', text: 'Call ctx.closePath(), set ctx.fillStyle = "#10b981", and call ctx.fill().' }
        ],
        result: 'A crisp, anti-aliased green quadrant ring rendered on the canvas.'
      },
      {
        title: 'Clickable dots with SVG: retained-mode events',
        problem: 'Render five data points as circles that grow on hover and log their value on click, with zero redraw code:\n```js\nconst NS = "http://www.w3.org/2000/svg";\nconst svg = document.createElementNS(NS, "svg");\nfor (const [i, v] of [12, 30, 18, 42, 25].entries()) {\n  const c = document.createElementNS(NS, "circle");\n  c.setAttribute("cx", 30 + i * 40);\n  c.setAttribute("cy", 100 - v);\n  c.setAttribute("r", "10");\n  c.addEventListener("click", () => console.log("value", v));\n  svg.append(c);\n}\n```',
        steps: [
          { label: 'Step 1: createElementNS, not createElement', text: 'SVG elements live in the SVG namespace — createElement would make an unknown HTML element that never renders. The NS constant plus setAttribute for cx, cy, r and fill is the whole construction API.' },
          { label: 'Step 2: Interaction without a loop', text: 'Each circle is a DOM node: CSS circle:hover { r: 14 } enlarges it and the click listener fires per shape. No hit-testing, no clearRect, no frame loop — the browser retains the tree and dispatches events itself.' },
          { label: 'Step 3: Update by attribute', text: 'Moving a point is c.setAttribute("cx", next) — the browser repaints that shape alone. The canvas twin would clear the bitmap and replay every arc each frame.' },
          { label: 'Step 4: Know the crossover', text: 'Five dots favor SVG; five thousand animating particles favor canvas immediate-mode. Retained nodes cost memory per shape — the Section 15.7 rule of thumb in one example.' }
        ],
        result: 'Five circles, five listeners, no redraw loop — hover and click work because SVG shapes are elements, the canvas complement to the donut immediate-mode draw.'
      }
    ],
    keyTakeaways: [
      'SVG elements are live DOM nodes supporting CSS styles, media queries, and click handlers.',
      'Canvas 2D is an immediate-mode pixel buffer with no retained shape objects in the DOM.',
      'Always set canvas width and height attributes scaled by window.devicePixelRatio for Retina screens.',
      'Pair ctx.save() and ctx.restore() to contain coordinate translations, rotations, and style settings.'
    ],
    quiz: [
      {
        q: 'Which function must be used to create SVG elements programmatically in JavaScript?',
        options: [
          'document.createElement("svg:circle")',
          'document.createElementNS("http://www.w3.org/2000/svg", "circle")',
          'document.createSVGElement("circle")',
          'new SVGCircleElement()'
        ],
        answer: 1,
        explanation: 'SVG elements belong to the W3C SVG namespace; creating them with document.createElementNS using the SVG namespace URL ensures the browser constructs true SVG DOM objects rather than unrecognized HTMLUnknownElement instances.'
      },
      {
        q: 'What is the purpose of ctx.save() and ctx.restore() in canvas scripting?',
        options: [
          'To commit and rollback database transactions',
          'To push and pop canvas drawing styles and transformation matrices onto an internal stack',
          'To save canvas pixels to localStorage',
          'To pause and resume requestAnimationFrame loops'
        ],
        answer: 1,
        explanation: 'save() preserves the current state (transforms, stroke/fill styles, clip paths) onto a stack, and restore() returns to that state, preventing local transforms from leaking.'
      },
      {
        q: 'Why can drawing text or shapes on a canvas look blurry on a high-density (Retina) display?',
        options: [
          'Canvas does not support vector rendering',
          'The canvas buffer dimensions (width/height attributes) are 1x logical pixels while the display has multiple device pixels per CSS pixel',
          'Antialiasing is turned off by default',
          'Canvas fonts must be loaded as SVG fonts'
        ],
        answer: 1,
        explanation: 'If the canvas width/height attributes match CSS dimensions on a 2x display, the browser stretches a 1x raster image over 2x physical pixels. Multiplying buffer dimensions by devicePixelRatio and calling ctx.scale(dpr, dpr) fixes it.'
      },
      {
        q: 'What data structure is returned by ctx.getImageData().data?',
        options: [
          'A two-dimensional Array of hex color strings',
          'A Uint8ClampedArray with sequential [R, G, B, A] values between 0 and 255',
          'A Float32Array of normalized [0..1] color coordinates',
          'A base64-encoded Data URL string'
        ],
        answer: 1,
        explanation: 'ImageData.data is a contiguous 1D Uint8ClampedArray where each pixel occupies 4 bytes: Red, Green, Blue, and Alpha in the range 0..255.'
      }
    ]
  },

  // ---------------------------------------------------------------- 15.8
  {
    sectionId: 'js-ch15-s8',
    readingTime: 8,
    intro: 'Modern browser audio spans two complementary layers: the high-level declarative **HTMLAudioElement** (<audio> and new Audio(url)) for stream playback and podcast controls, and the modular **Web Audio API** for procedural sound synthesis, multi-track mixing, sound effects in games, and frequency visualization. Centralized around an AudioContext, the Web Audio API routes audio through a directed graph of connected AudioNode instances — oscillators, buffers, biquad filters, gain controls, and spatial panners — terminating at the speaker output.',
    objectives: [
      'Use HTMLAudioElement for basic audio playback, track loading, and volume control',
      'Create an AudioContext and construct a directed audio processing graph',
      'Generate procedural sound using OscillatorNode with standard waveforms',
      'Automate smooth audio transitions using AudioParam scheduling methods',
      'Comply with browser user-gesture autoplay policies by resuming suspended contexts'
    ],
    concepts: [
      {
        term: 'HTMLAudioElement',
        kind: 'definition',
        statement: 'The `<audio>` element and `const audio = new Audio("track.mp3")` provide media player controls for streaming and playing encoded audio files (MP3, AAC, Ogg, WAV).',
        detail: 'Methods include `play()`, `pause()`, and setting `currentTime` or `volume`. It fires events such as `loadedmetadata`, `canplay`, `timeupdate`, and `ended`. It is ideal for continuous media streaming but lacks sample-accurate timing for games.'
      },
      {
        term: 'AudioContext and the audio graph',
        kind: 'definition',
        statement: 'The **Web Audio API** operates as a directed graph rooted in an `AudioContext`. Audio streams flow from source nodes through processing nodes and exit at `audioCtx.destination` (the physical audio output).',
        detail: '\n```js\nconst ctx = new AudioContext();\nconst osc = ctx.createOscillator();\nconst gain = ctx.createGain();\nosc.connect(gain);\ngain.connect(ctx.destination);\nosc.start();\n```\nNodes are created through factory methods on the context and linked using `nodeA.connect(nodeB)`.'
      },
      {
        term: 'OscillatorNode',
        kind: 'method',
        statement: 'An `OscillatorNode` synthesizes periodic waveforms without external audio files. Supported types include `"sine"`, `"square"`, `"sawtooth"`, and `"triangle"`.',
        detail: 'The pitch is controlled via `osc.frequency.value` (in Hertz). An oscillator can only be started once with `osc.start()` and stopped with `osc.stop()`; to play another tone, instantiate a new oscillator node.'
      },
      {
        term: 'AudioParam automation',
        kind: 'method',
        statement: 'Audio parameters (such as frequency, gain, filter cutoff) are `AudioParam` objects that support sample-accurate scheduled changes on the audio rendering thread without main-thread jitter.',
        detail: 'Methods include `setValueAtTime(value, time)`, `linearRampToValueAtTime(value, time)`, and `exponentialRampToValueAtTime(value, time)`. Times are expressed in seconds relative to `ctx.currentTime`, eliminating audible clicks when changing volume.'
      },
      {
        term: 'Autoplay policy and AudioContext state',
        kind: 'law',
        statement: 'Modern browsers block sound from playing until the user has interacted with the page. An `AudioContext` created prior to user interaction starts in the `"suspended"` state.',
        detail: 'When the user taps, clicks, or presses a key, call `audioCtx.resume()`. `audio.play()` on an HTMLAudioElement returns a Promise that rejects with `NotAllowedError` if autoplay restrictions are violated.'
      }
    ],
    examples: [
      {
        title: 'Synthesizing an Exponential Decay Tone',
        problem: 'Play a 440 Hz (A4) sine wave tone that decays exponentially over 0.5 seconds upon user click.',
        steps: [
          { label: 'Create Context', text: 'const ctx = new AudioContext(); if (ctx.state === "suspended") ctx.resume();' },
          { label: 'Create Nodes', text: 'const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.type = "sine"; osc.frequency.value = 440;' },
          { label: 'Schedule Envelope', text: 'const now = ctx.currentTime; gain.gain.setValueAtTime(0.3, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);' },
          { label: 'Connect and Run', text: 'osc.connect(gain); gain.connect(ctx.destination); osc.start(now); osc.stop(now + 0.5);' }
        ],
        result: 'A pleasant chime tone that smoothly fades out without audio clipping.'
      },
      {
        title: 'A podcast player with HTMLAudioElement and the autoplay guard',
        problem: 'Play episode.mp3 behind a Play button with a volume slider and a progress readout, surviving the autoplay policy:\n```js\nconst audio = new Audio("episode.mp3");\nplayBtn.addEventListener("click", async () => {\n  try { await audio.play(); }\n  catch (e) { status.textContent = "Tap again to allow audio"; }\n});\nvolume.addEventListener("input", () => { audio.volume = volume.valueAsNumber; });\naudio.addEventListener("timeupdate", () => {\n  progress.textContent = Math.floor(audio.currentTime) + "s";\n});\n```',
        steps: [
          { label: 'Step 1: play() inside the gesture', text: 'The play call sits in the click handler — a user gesture — so the autoplay policy allows it. Called on load it would reject with NotAllowedError; the try/catch turns that rejection into a tap-again hint instead of an unhandled rejection.' },
          { label: 'Step 2: Volume and seek are properties', text: 'audio.volume (0 to 1) and audio.currentTime (seconds) are plain read-write properties — no graph, no AudioParam scheduling. Ideal for long streaming media where sample accuracy does not matter.' },
          { label: 'Step 3: Events report progress', text: 'timeupdate fires during playback for the progress readout; ended fires at the finish for an auto-next episode. loadedmetadata gives duration once headers arrive — the declarative counterpart to the Web Audio graph events.' },
          { label: 'Step 4: When not to use it', text: 'Gapless game effects or synthesized tones need the AudioContext graph of the first example — HTMLAudioElement cannot schedule sample-accurate envelopes. Streaming talk favors audio tags; synthesis favors oscillators.' }
        ],
        result: 'One Audio object, one play promise, two properties and two events — streaming playback with the autoplay guard handled, the high-level complement to the oscillator graph.'
      }
    ],
    keyTakeaways: [
      'HTMLAudioElement manages streaming tracks and audio player controls.',
      'Web Audio API builds modular processing graphs for synthesis, effects, and games.',
      'AudioParams automate volume and frequency changes on the audio thread with sample accuracy.',
      'AudioContext must be resumed inside a user interaction handler to satisfy browser autoplay policies.'
    ],
    quiz: [
      {
        q: 'What is audioCtx.destination in the Web Audio API?',
        options: [
          'A URL pointing to an MP3 file',
          'The special AudioNode representing the computer speakers or headphone output',
          'A callback invoked when audio decoding finishes',
          'The folder where recorded audio is stored'
        ],
        answer: 1,
        explanation: 'audioCtx.destination is the terminal node of the audio graph, representing the physical audio hardware (speakers, headphones).'
      },
      {
        q: 'Why should you use linearRampToValueAtTime or exponentialRampToValueAtTime instead of changing gain.gain.value directly in a setTimeout loop?',
        options: [
          'Because JavaScript setTimeout cannot change audio node values',
          'Direct changes cause audible clicks and pops; AudioParam ramps calculate smooth per-sample curves on the audio thread',
          'Ramping converts mono audio to stereo',
          'Ramping saves power on mobile devices'
        ],
        answer: 1,
        explanation: 'Sudden instantaneous amplitude changes cause audible waveform discontinuities (clicks). AudioParam ramp methods interpolate smoothly on the audio thread.'
      },
      {
        q: 'If an AudioContext is created on page load before any user interaction, what is its initial state?',
        options: ['"running"', '"suspended"', '"closed"', '"muted"'],
        answer: 1,
        explanation: 'Browsers initialize AudioContext in the "suspended" state until a user gesture (click, keypress) permits audio playback via audioCtx.resume().'
      },
      {
        q: 'Can an OscillatorNode be started again after calling osc.stop()?',
        options: [
          'Yes, by calling osc.start() again',
          'No, OscillatorNodes are single-use source nodes; create a new OscillatorNode for subsequent tones',
          'Only if osc.loop is set to true',
          'Yes, by calling osc.reset()'
        ],
        answer: 1,
        explanation: 'In the Web Audio API, source nodes like OscillatorNode and AudioBufferSourceNode are lightweight and single-use: once stopped, they cannot be restarted.'
      }
    ]
  },

  // ---------------------------------------------------------------- 15.9
  {
    sectionId: 'js-ch15-s9',
    readingTime: 8,
    intro: 'The browser URL bar is both the entry point of a web application and its most visible state store. JavaScript inspects and changes the active URL through **window.location**, while the **HTML5 History API** (history.pushState and history.replaceState) enables client-side Single-Page Applications (SPAs) to update the address bar without triggering full server document reloads. Working together with URLSearchParams and the popstate event, client applications achieve responsive routing and bookmarkable URLs with native Back and Forward button support.',
    objectives: [
      'Deconstruct and inspect URL properties with the window.location interface',
      'Parse, modify, and serialize query strings using URLSearchParams',
      'Contrast location.assign(), location.replace(), and location.href assignments',
      'Update browser URLs and history state without page reloads using history.pushState and replaceState',
      'Handle user Back and Forward navigation by listening to the window popstate event'
    ],
    concepts: [
      {
        term: 'The Location object',
        kind: 'definition',
        statement: '`window.location` reflects the document’s active URL, exposing components: `protocol`, `hostname`, `port`, `pathname`, `search`, and `hash`.',
        detail: 'Assigning to `location.href` or individual properties (like `location.pathname`) triggers an immediate browser navigation. The only exception is modifying `location.hash`, which scrolls to the matching element anchor without reloading the page.'
      },
      {
        term: 'URLSearchParams',
        kind: 'method',
        statement: 'The `URLSearchParams` API provides a clean interface for query string manipulation: `params.get(key)`, `params.set(key, val)`, `params.append(key, val)`, and `params.toString()`.',
        detail: '\n```js\nconst params = new URLSearchParams(window.location.search);\nconst book = params.get("book");\nparams.set("page", "42");\nhistory.replaceState(null, "", "?" + params.toString());\n```\nIt automatically handles percent-encoding, spaces, and multi-value parameters.'
      },
      {
        term: 'assign() vs replace()',
        kind: 'method',
        statement: '`location.assign(url)` loads a new document and records the current page in session history. `location.replace(url)` loads a new document and replaces the current history entry.',
        detail: 'Use `location.replace()` for redirection logic (such as unauthorized redirects to a login page). This prevents the user from being trapped in an infinite redirect loop when clicking the browser Back button.'
      },
      {
        term: 'History pushState and replaceState',
        kind: 'definition',
        statement: '`history.pushState(state, unused, url)` pushes a new entry to the browser session history and changes the address bar URL **without reloading the document**.',
        detail: '`state` is an arbitrary serializable object stored with the history entry. `history.replaceState(state, unused, url)` updates the current entry in place without creating a new history step.'
      },
      {
        term: 'The popstate event',
        kind: 'law',
        statement: 'The `window.onpopstate` event fires whenever the active history entry changes due to user navigation (clicking Back or Forward, or calling `history.back()`).',
        detail: 'The event object exposes `event.state`, containing the state object originally passed to `pushState` or `replaceState`. Note: calling `pushState()` or `replaceState()` programmatically does NOT fire `popstate`.'
      }
    ],
    examples: [
      {
        title: 'Implementing Client-Side Routing with State',
        problem: 'Update the page view to "chapter-2" on click, update the URL to /chapter/2, and support the browser Back button.',
        steps: [
          { label: 'Push State on Click', text: 'history.pushState({ view: "chapter", id: 2 }, "", "/chapter/2"); renderView("chapter", 2);' },
          { label: 'Listen to popstate', text: 'window.addEventListener("popstate", (e) => { const state = e.state || { view: "home" }; renderView(state.view, state.id); });' },
          { label: 'Initial State', text: 'history.replaceState({ view: "home" }, "", window.location.pathname);' }
        ],
        result: 'Seamless SPA navigation where browser Back and Forward restore the correct view instantly.'
      },
      {
        title: 'A shareable filter view with URLSearchParams and replaceState',
        problem: 'A product list has a text filter and a sort order. Typing must update ?q= and ?sort= without spamming history, while Save view creates a bookmarkable entry:\n```js\nconst params = new URLSearchParams(location.search);\nfilterInput.value = params.get("q") ?? "";\nfilterInput.addEventListener("input", () => {\n  params.set("q", filterInput.value);\n  history.replaceState({ q: filterInput.value }, "", "?" + params.toString());\n  render(params);\n});\nsaveBtn.addEventListener("click", () => {\n  history.pushState({ q: filterInput.value }, "", "?" + params.toString());\n});\n```',
        steps: [
          { label: 'Step 1: Read the URL on load', text: 'URLSearchParams parses ?q=ada&sort=price — get returns the value, percent-decoding automatically. The input is seeded from the URL so a pasted link reproduces the view.' },
          { label: 'Step 2: replaceState while typing', text: 'Each keystroke rewrites the current entry in place: the address bar stays shareable but Back does not step through every letter. This is the filter rule — replace for ephemeral edits, push for milestones.' },
          { label: 'Step 3: pushState to save', text: 'Save view pushes one entry, so Back returns to the pre-save filter. The state object carries { q } so popstate can re-render without re-parsing in the common case.' },
          { label: 'Step 4: Contrast with location.assign', text: 'Assigning location.search = params would reload the document and lose scroll and component state; pushState/replaceState change the bar without a navigation — the SPA distinction of the first example, applied to query state.' }
        ],
        result: 'Typing rewrites the query string silently, Save pushes one history step, links carry the filter — query state in the URL without reloads or history spam.'
      }
    ],
    keyTakeaways: [
      'window.location exposes URL parts; modifying href or pathname navigates to a new page.',
      'URLSearchParams simplifies reading and writing query parameters with automatic encoding.',
      'Use location.replace() for redirects to avoid trapping users in back-button loops.',
      'history.pushState() updates the URL bar without a page reload; popstate handles Back/Forward.'
    ],
    quiz: [
      {
        q: 'What is the key difference between location.assign(url) and location.replace(url)?',
        options: [
          'assign() only accepts relative URLs while replace() requires absolute URLs',
          'assign() adds a new entry to the browser history; replace() overwrites the current entry so Back skips it',
          'replace() reloads the page while assign() performs client-side routing',
          'assign() is asynchronous while replace() is synchronous'
        ],
        answer: 1,
        explanation: 'location.replace() deletes the current page from session history, making it ideal for redirects so the user does not get stuck in a loop when clicking Back.'
      },
      {
        q: 'Does calling history.pushState() directly trigger the window popstate event?',
        options: [
          'Yes, immediately on the next tick',
          'No, popstate only fires when user navigation changes the active history entry (e.g. Back/Forward buttons)',
          'Only if the URL points to a different domain',
          'Yes, if the state argument is not null'
        ],
        answer: 1,
        explanation: 'history.pushState() and replaceState() do not dispatch popstate; the event is exclusively for user-initiated history traversals like clicking Back or Forward.'
      },
      {
        q: 'Which URL property change on window.location will NOT cause a full document reload?',
        options: ['location.pathname', 'location.search', 'location.hash', 'location.hostname'],
        answer: 2,
        explanation: 'Changing location.hash only scrolls to the matching fragment identifier or dispatches the hashchange event without reloading the page.'
      },
      {
        q: 'Can history.pushState() specify a URL belonging to a different origin (e.g. google.com from myapp.com)?',
        options: [
          'Yes, any valid URL is allowed',
          'No, the browser throws a SecurityError to prevent origin spoofing',
          'Only if CORS headers allow it',
          'Yes, but only in HTTPS mode'
        ],
        answer: 1,
        explanation: 'Browsers strictly forbid pushState() across origins to prevent malicious sites from disguising their address bar as a trusted third-party bank or login page.'
      }
    ]
  },

  // ---------------------------------------------------------------- 15.10
  {
    sectionId: 'js-ch15-s10',
    readingTime: 9,
    intro: 'Client-server communication in modern web applications centers on the **fetch() API**, the Promise-based standard that superseded XMLHttpRequest. Beyond basic JSON retrieval, modern networking encompasses streaming response bodies, request cancellation with **AbortController**, bidirectional full-duplex communication with **WebSockets**, and unidirectional real-time push updates with **Server-Sent Events (EventSource)**. Mastering status validation, header configuration, and streaming transfers is fundamental to building resilient web software.',
    objectives: [
      'Execute HTTP requests with fetch() and inspect response status, headers, and body formats',
      'Distinguish network errors from HTTP error status codes (4xx and 5xx)',
      'Cancel in-flight requests and set request timeouts using AbortController and AbortSignal',
      'Stream chunked responses using the ReadableStream API on response.body',
      'Establish real-time full-duplex connections with WebSockets and event streams with EventSource'
    ],
    concepts: [
      {
        term: 'The fetch() API',
        kind: 'definition',
        statement: '`fetch(resource, options)` initiates an asynchronous HTTP request and returns a Promise that resolves to a `Response` object as soon as server headers arrive.',
        detail: '\n```js\nconst res = await fetch("/api/data", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ query: "calculus" })\n});\nif (!res.ok) throw new Error("HTTP error " + res.status);\nconst data = await res.json();\n```\nCrucially, fetch() **does not reject** on HTTP error statuses (like 404 or 500); it only rejects on network failures or aborts.'
      },
      {
        term: 'The response.ok check',
        kind: 'law',
        statement: '`response.ok` is a boolean getter returning `true` if and only if `response.status` is in the 200–299 range. Robust code must always inspect `response.ok` before reading the body.',
        detail: 'Because server error pages (404, 500) may return HTML instead of JSON, attempting to call `res.json()` without checking `res.ok` frequently causes unexpected SyntaxError parse crashes.'
      },
      {
        term: 'AbortController and timeouts',
        kind: 'method',
        statement: 'An `AbortController` provides an `AbortSignal` that can be linked to `fetch({ signal })`. Calling `controller.abort()` halts network transmission and rejects the fetch Promise with an `AbortError`.',
        detail: 'Modern browsers also provide `AbortSignal.timeout(5000)`, generating an auto-aborting signal in a single line without manual timer tracking.'
      },
      {
        term: 'Consuming response streams',
        kind: 'method',
        statement: 'The body of a `Response` can only be read once. Built-in body consumers include `.json()`, `.text()`, `.blob()`, and `.arrayBuffer()`.',
        detail: 'For streaming progress or LLM generation, `response.body.getReader()` exposes a `ReadableStreamDefaultReader` returning `{ value: Uint8Array, done: boolean }` chunks as they travel across the wire.'
      },
      {
        term: 'WebSockets',
        kind: 'definition',
        statement: '`new WebSocket("wss://...")` establishes a persistent, bidirectional, full-duplex TCP socket connection over a single connection.',
        detail: 'Events include `open`, `message`, `error`, and `close`. Messages are sent via `socket.send(data)`. WebSockets avoid HTTP polling overhead, making them ideal for multiplayer gaming, trading desks, and live chat.'
      },
      {
        term: 'Server-Sent Events (EventSource)',
        kind: 'definition',
        statement: '`new EventSource(url)` opens an HTTP stream where the server pushes text events formatted as `text/event-stream`.',
        detail: 'EventSource is unidirectional (server to client) and includes built-in auto-reconnection and event ID tracking. It is simpler than WebSockets when the client only needs to receive live notifications.'
      }
    ],
    examples: [
      {
        title: 'Fetch with Automatic 5-Second Timeout and JSON Parsing',
        problem: 'Fetch /api/status, aborting if the server does not respond within 5000ms, and parse JSON if successful.',
        steps: [
          { label: 'Create Signal', text: 'const signal = AbortSignal.timeout(5000);' },
          { label: 'Send Fetch', text: 'const res = await fetch("/api/status", { signal });' },
          { label: 'Validate Status', text: 'if (!res.ok) throw new Error("HTTP Error " + res.status);' },
          { label: 'Parse JSON', text: 'const data = await res.json();' }
        ],
        result: 'Guaranteed termination within 5 seconds with structured error handling.'
      },
      {
        title: 'A live echo chat over WebSocket with clean close',
        problem: 'Open a bidirectional chat channel, send a hello on connect, append incoming messages, and close without errors on unload:\n```js\nconst socket = new WebSocket("wss://echo.example.com/chat");\nsocket.addEventListener("open", () => socket.send("hello")); \nsocket.addEventListener("message", (e) => append(e.data));\nsocket.addEventListener("close", (e) => status(`closed ${e.code}`));\nwindow.addEventListener("pagehide", () => socket.close(1000, "leaving"));\n```',
        steps: [
          { label: 'Step 1: Full-duplex after open', text: 'Unlike fetch, the socket stays open: either side can send at any time with send(). Waiting for open before the first send avoids the INVALID_STATE_ERR that an immediate send would throw.' },
          { label: 'Step 2: Messages are events, not responses', text: 'Each server frame arrives as a message event — no polling, no second request. Text arrives as string data; binary arrives as Blob or ArrayBuffer per binaryType. The fetch example waits once; the socket listens indefinitely.' },
          { label: 'Step 3: Close codes explain the ending', text: 'close carries a code (1000 normal, 1006 abnormal) and a reason. Closing with 1000 on pagehide tells the server the departure was clean; an abnormal close signals a reconnect attempt.' },
          { label: 'Step 4: WebSocket vs EventSource', text: 'Chat needs client-to-server messages, so EventSource (server-push only) cannot do it — full-duplex picks WebSocket. A news ticker would pick EventSource for its auto-reconnect and last-event-ID tracking.' }
        ],
        result: 'Hello sent on open, messages appended live, 1000 close on leave — bidirectional realtime beside the fetch timeout pattern, with EventSource reserved for server-only pushes.'
      }
    ],
    keyTakeaways: [
      'fetch() Promise resolves on HTTP 404/500 errors; always check response.ok.',
      'Response bodies are single-use streams; call .json() or .text() once per response.',
      'Use AbortSignal.timeout(ms) to prevent hanging network requests.',
      'WebSockets offer full-duplex low-latency communication; EventSource offers simple server-push.'
    ],
    quiz: [
      {
        q: 'Under what condition does the Promise returned by fetch() reject?',
        options: [
          'When the server responds with a 404 Not Found status',
          'When the server responds with a 500 Internal Server Error status',
          'Only when a network error occurs (DNS failure, offline) or when the request is aborted',
          'Whenever the response Content-Type is not application/json'
        ],
        answer: 2,
        explanation: 'fetch() only rejects on network failures or abort signal triggers; HTTP status codes like 404 or 500 resolve successfully with response.ok set to false.'
      },
      {
        q: 'What happens if you call response.json() twice on the same Response object?',
        options: [
          'It re-parses the cached JSON object',
          'It returns null on the second call',
          'It throws a TypeError because the response body has already been consumed (stream locked/disturbed)',
          'It triggers a second network request automatically'
        ],
        answer: 2,
        explanation: 'Response bodies are readable streams that can only be consumed once. To read a body multiple times, call response.clone() before reading.'
      },
      {
        q: 'Which API provides automatic reconnection and last-event-ID tracking out of the box for server push?',
        options: ['WebSocket', 'EventSource (Server-Sent Events)', 'fetch with long-polling', 'XMLHttpRequest'],
        answer: 1,
        explanation: 'EventSource natively handles auto-reconnect and sends the Last-Event-ID header upon reconnecting, unlike WebSockets which require manual reconnection logic.'
      },
      {
        q: 'How do you cancel an active fetch request in modern JavaScript?',
        options: [
          'Call fetch.cancel()',
          'Pass an AbortSignal from an AbortController in the fetch options and invoke controller.abort()',
          'Set window.location.reload()',
          'Delete the fetch promise reference'
        ],
        answer: 1,
        explanation: 'AbortController is the standard web cancellation mechanism; passing controller.signal to fetch lets controller.abort() terminate the request.'
      }
    ]
  },

  // ---------------------------------------------------------------- 15.11
  {
    sectionId: 'js-ch15-s11',
    readingTime: 8,
    intro: 'Web applications rely on client-side storage for offline access, session caching, and user customization. Browsers provide a hierarchy of storage options: **localStorage** and **sessionStorage** for synchronous string key-value pairs, **cookies** for small credentials shared with HTTP requests, and **IndexedDB** for asynchronous, transactional storage of large structured datasets. Understanding their capacity boundaries, performance trade-offs, and security boundaries (such as XSS vulnerability vs HttpOnly protection) is critical for client application architecture.',
    objectives: [
      'Compare the lifetime, quota, and storage semantics of localStorage, sessionStorage, cookies, and IndexedDB',
      'Store and retrieve structured data in Web Storage using JSON serialization',
      'Configure cookie attributes including Max-Age, Path, SameSite, Secure, and HttpOnly',
      'Perform transactional CRUD operations in an IndexedDB object store',
      'Synchronize cross-tab application state using the window storage event'
    ],
    concepts: [
      {
        term: 'Web Storage: localStorage vs sessionStorage',
        kind: 'definition',
        statement: 'Both provide synchronous key-value storage of strings (`getItem`, `setItem`, `removeItem`, `clear`). `localStorage` persists indefinitely across sessions; `sessionStorage` is cleared when the browser tab is closed.',
        detail: 'Capacity is approximately 5MB per origin. Because all methods are synchronous, reading or writing large payloads can block the UI thread during disk I/O.'
      },
      {
        term: 'The storage event',
        kind: 'law',
        statement: 'When `localStorage` is modified in one document, a `storage` event fires in **all other same-origin tabs and windows**, passing `key`, `oldValue`, `newValue`, and `url`.',
        detail: 'The window that made the change does not receive the event. This mechanism enables live multi-tab synchronization (e.g. logging out in one tab immediately updates all other open tabs).'
      },
      {
        term: 'HTTP Cookies and document.cookie',
        kind: 'definition',
        statement: 'Cookies are small text strings (max ~4KB each) attached automatically to HTTP headers on matching requests. Created in JavaScript with `document.cookie = "key=val; SameSite=Lax; Secure"`.',
        detail: 'Server-set cookies with the `HttpOnly` flag cannot be accessed or read by JavaScript, providing strong protection against session token theft via Cross-Site Scripting (XSS).'
      },
      {
        term: 'IndexedDB',
        kind: 'definition',
        statement: '**IndexedDB** is an asynchronous, transactional, object-oriented database in the browser capable of storing hundreds of megabytes of structured JavaScript objects, binary blobs, and files.',
        detail: 'Unlike Web Storage, IndexedDB operates asynchronously without blocking the main thread, uses structured cloning (storing complex objects, arrays, and typed buffers directly without JSON stringify), and supports index-based queries.'
      },
      {
        term: 'IndexedDB transactions and auto-commit',
        kind: 'method',
        statement: 'Every IndexedDB read and write occurs within a transaction: `db.transaction(["books"], "readwrite")`. Transactions auto-commit as soon as the microtask/event queue becomes idle.',
        detail: 'If an error occurs or `transaction.abort()` is called, all changes inside the transaction roll back atomically, guaranteeing database consistency.'
      }
    ],
    examples: [
      {
        title: 'Storing and Retrieving Structured Objects with localStorage',
        problem: 'Store a user preferences object in localStorage with fallback defaults and JSON parse safety.',
        steps: [
          { label: 'Save Object', text: 'localStorage.setItem("user_prefs", JSON.stringify({ theme: "dark", fontSize: 16 }));' },
          { label: 'Load Raw', text: 'const raw = localStorage.getItem("user_prefs");' },
          { label: 'Parse with Fallback', text: 'const prefs = raw ? JSON.parse(raw) : { theme: "light", fontSize: 14 };' }
        ],
        result: 'Safely persisted and retrieved user configuration object.'
      },
      {
        title: 'Offline notes in IndexedDB with an atomic batch',
        problem: 'Store notes { title, body, updated } offline, list them newest-first, and guarantee a two-write batch either fully lands or fully rolls back:\n```js\nconst open = indexedDB.open("notes-db", 1);\nopen.onupgradeneeded = () => {\n  const store = open.result.createObjectStore("notes", { keyPath: "id", autoIncrement: true });\n  store.createIndex("by-updated", "updated");\n};\n```',
        steps: [
          { label: 'Step 1: Versioned schema setup', text: 'onupgradeneeded runs once per version bump: it creates the notes store with autoIncrement ids and a by-updated index for newest-first queries. Later versions add stores without touching existing data.' },
          { label: 'Step 2: Atomic batch write', text: 'const tx = db.transaction(["notes"], "readwrite"); tx.objectStore("notes").add({ title, body, updated: Date.now() }); — two adds in one transaction commit together; tx.abort() or any error rolls both back, unlike two localStorage.setItem calls.' },
          { label: 'Step 3: Indexed read without blocking', text: 'db.transaction(["notes"]).objectStore("notes").index("by-updated").getAll(null, 20) returns the newest twenty asynchronously — no main-thread disk block, and structured cloning preserves Dates without JSON.' },
          { label: 'Step 4: When localStorage still wins', text: 'A theme string or auth flag stays in localStorage — synchronous, tiny, cross-tab via the storage event. Hundreds of notes with queries and atomicity need IndexedDB; the first example and this one are the two ends of the capacity ladder.' }
        ],
        result: 'Versioned store plus index, atomic multi-add, async newest-first read — offline data with transactions, beside the synchronous localStorage preferences pattern.'
      }
    ],
    keyTakeaways: [
      'localStorage persists across browser restarts; sessionStorage expires when the tab closes.',
      'Web Storage APIs are synchronous and limited to ~5MB of string data per origin.',
      'Cookies marked HttpOnly protect authentication tokens from XSS script theft.',
      'IndexedDB is an asynchronous transactional database designed for large structured offline datasets.'
    ],
    quiz: [
      {
        q: 'Why should you NOT store large datasets (e.g. 5MB) in localStorage?',
        options: [
          'localStorage automatically deletes data after 24 hours',
          'localStorage API is synchronous and reading/writing large strings blocks the main thread UI rendering',
          'localStorage only supports numbers, not strings',
          'Data in localStorage is sent to the server on every HTTP request'
        ],
        answer: 1,
        explanation: 'localStorage operations run synchronously on the main thread; disk reads and writes of large strings block user interaction and frame rendering.'
      },
      {
        q: 'What is the primary security benefit of the HttpOnly cookie attribute?',
        options: [
          'It encrypts the cookie on the user’s hard drive',
          'It prevents JavaScript from accessing document.cookie, protecting session tokens from XSS extraction',
          'It ensures cookies are only transmitted over HTTPS',
          'It expires the cookie immediately when the browser closes'
        ],
        answer: 1,
        explanation: 'HttpOnly tells the browser that the cookie must not be exposed through document.cookie, preventing malicious scripts injected via XSS from reading session tokens.'
      },
      {
        q: 'When does the window "storage" event fire?',
        options: [
          'In the same tab that invoked localStorage.setItem()',
          'In all other same-origin tabs and windows when localStorage is modified',
          'Whenever IndexedDB completes a transaction',
          'Only when the browser disk space runs low'
        ],
        answer: 1,
        explanation: 'The storage event fires exclusively in other open windows/tabs of the same origin to facilitate cross-tab coordination without infinite self-notification loops.'
      },
      {
        q: 'How does IndexedDB handle data serialization compared to localStorage?',
        options: [
          'Both require JSON.stringify()',
          'IndexedDB uses the structured clone algorithm, storing Maps, Sets, Blobs, and Objects natively without string serialization',
          'IndexedDB only stores plain text strings',
          'IndexedDB stores data in CSV format'
        ],
        answer: 1,
        explanation: 'IndexedDB natively supports the structured clone algorithm, storing typed arrays, Blobs, Dates, and nested objects without manual JSON conversion.'
      }
    ]
  },

  // ---------------------------------------------------------------- 15.12
  {
    sectionId: 'js-ch15-s12',
    readingTime: 8,
    intro: 'Because browser JavaScript executes on a single event-driven UI thread, CPU-intensive computations — cryptographic hashing, physics engines, image filters, and statistical models — can freeze the user interface. **Web Workers** introduce true operating-system-level multithreading to the browser without the race conditions of shared-memory threading (compare Operating System Concepts, Chapter 4). Dedicated Workers run in isolated execution contexts, communicating with the main thread exclusively through asynchronous message passing.',
    objectives: [
      'Instantiate dedicated Web Workers using new Worker() and handle message exchange',
      'Pass complex data safely across thread boundaries using structured cloning',
      'Transfer zero-copy binary buffers using Transferable Objects (ArrayBuffer)',
      'Identify execution capabilities and restrictions inside WorkerGlobalScope (no DOM, yes fetch)',
      'Terminate worker threads cleanly using worker.terminate() and self.close()'
    ],
    concepts: [
      {
        term: 'Dedicated Web Workers',
        kind: 'definition',
        statement: 'A dedicated worker is an independent background thread created via `const worker = new Worker("worker.js")`. It runs on a separate operating system thread with its own event loop.',
        detail: 'Workers prevent CPU-intensive tasks from degrading UI responsiveness or causing frame drops on the main thread.'
      },
      {
        term: 'The WorkerGlobalScope',
        kind: 'definition',
        statement: 'Inside a worker, the global object is a `DedicatedWorkerGlobalScope` (accessible via `self` or `globalThis`). Workers have **no access** to `window`, `document`, or DOM elements.',
        detail: 'Workers **do** have access to `navigator`, `location`, timers (`setTimeout`, `setInterval`), `fetch()`, `IndexedDB`, `WebSockets`, and the `crypto` API.'
      },
      {
        term: 'Message passing via postMessage',
        kind: 'method',
        statement: 'Threads communicate strictly through message passing: `worker.postMessage(data)` dispatches a message, received via `onmessage = (event) => { ... event.data ... }`.',
        detail: 'By default, data passed to `postMessage` is copied using the **Structured Clone algorithm**, allowing complex graphs with cyclic references, Dates, RegExps, Maps, and Sets to be passed without shared-memory hazards.'
      },
      {
        term: 'Transferable Objects',
        kind: 'insight',
        statement: 'For large binary datasets, `ArrayBuffer` instances can be transferred rather than copied by passing them in the transfer list: `worker.postMessage({ buffer }, [buffer])`.',
        detail: 'Ownership of the memory buffer transfers instantly in $O(1)$ time with zero memory allocation. Once transferred, the buffer in the sending thread becomes **detached** with `byteLength === 0`, preventing concurrent modification.'
      },
      {
        term: 'Worker lifecycle and termination',
        kind: 'method',
        statement: 'The main thread terminates a worker immediately using `worker.terminate()`. Inside the worker, the thread can shut itself down using `self.close()`.',
        detail: 'Workers consume memory and OS thread resources. Always terminate workers when long-running computations conclude.'
      }
    ],
    examples: [
      {
        title: 'Offloading Heavy Array Sorting to a Worker with Transferable Buffers',
        problem: 'Send a Float64Array of 1,000,000 random numbers to a worker for sorting with zero-copy overhead.',
        steps: [
          { label: 'Create Buffer', text: 'const data = new Float64Array(1_000_000); // fill with random numbers' },
          { label: 'Transfer to Worker', text: 'worker.postMessage({ buffer: data.buffer }, [data.buffer]); // data is now detached' },
          { label: 'Worker Sorts and Returns', text: '// Inside worker: const arr = new Float64Array(e.data.buffer); arr.sort(); self.postMessage({ buffer: arr.buffer }, [arr.buffer]);' },
          { label: 'Main Thread Receives', text: 'worker.onmessage = (e) => { const sorted = new Float64Array(e.data.buffer); };' }
        ],
        result: 'One million numbers sorted on a background thread with zero main-thread UI stutter.'
      },
      {
        title: 'A cancellable prime sieve with progress and self-close',
        problem: 'Find all primes below 2,000,000 without freezing the page, report progress, and let the user cancel:\n```js\n// main thread\nconst worker = new Worker("sieve.js");\nworker.postMessage({ limit: 2000000 });\nworker.onmessage = (e) => {\n  if (e.data.progress) bar.style.width = e.data.progress + "%";\n  else show(e.data.primes.length + " primes");\n};\ncancelBtn.addEventListener("click", () => worker.terminate());\n// worker sieve.js: onmessage = (e) => { /* sieve, postMessage({progress}), postMessage({primes}), self.close(); */ };\n```',
        steps: [
          { label: 'Step 1: Structured clone carries the job', text: 'postMessage({ limit }) copies a small object via structured cloning — no transfer list needed for plain data. Large binary input would add the transfer list of the first example; control messages travel by copy.' },
          { label: 'Step 2: Progress without the DOM', text: 'The worker posts { progress: 42 } between sieve passes; it never touches document or window — WorkerGlobalScope has fetch, IndexedDB and timers, but DOM access throws. All rendering stays on the main-thread onmessage handler.' },
          { label: 'Step 3: Cancel from outside, finish from inside', text: 'Cancel calls worker.terminate() — immediate, no cleanup inside. Success calls self.close() at the end of the worker — the thread frees itself. Both paths release the OS thread; forgetting both leaks it.' },
          { label: 'Step 4: Two examples, two payloads', text: 'Sorting a Float64Array favored zero-copy transfer; sieving favors progress messages plus self-close. Same postMessage machinery, opposite bottleneck — bulk bytes versus long compute.' }
        ],
        result: 'Progress bar fills from worker messages, Cancel terminates instantly, completion self-closes — responsive compute with explicit lifecycle, the control-plane twin to the transferable-buffer data plane.'
      }
    ],
    keyTakeaways: [
      'Web Workers execute on separate OS threads, keeping the main thread responsive.',
      'Workers cannot access the DOM or window object; communication occurs strictly through postMessage.',
      'postMessage copies data via structured cloning; use Transferable Objects for zero-copy memory transfer.',
      'Call worker.terminate() or self.close() to free thread resources when work completes.'
    ],
    quiz: [
      {
        q: 'Which of the following can be accessed directly from inside a Web Worker script?',
        options: [
          'document.getElementById("output")',
          'window.localStorage',
          'fetch() and IndexedDB',
          'window.alert()'
        ],
        answer: 2,
        explanation: 'Web Workers have no access to window, document, or DOM elements; however, they have access to networking APIs (fetch, WebSocket) and client storage (IndexedDB).'
      },
      {
        q: 'What happens to an ArrayBuffer on the main thread after sending it as a Transferable Object via postMessage(data, [data.buffer])?',
        options: [
          'It remains readable and writable by both threads simultaneously',
          'Its memory is duplicated, consuming twice as much RAM',
          'It becomes detached (neutered) on the sending thread, and its byteLength becomes 0',
          'It is converted to a JSON string'
        ],
        answer: 2,
        explanation: 'Transferring an ArrayBuffer transfers memory ownership without copying; the sending thread’s buffer becomes detached with byteLength 0 to prevent data races.'
      },
      {
        q: 'How does postMessage() serialize standard JavaScript objects by default?',
        options: [
          'Using JSON.stringify()',
          'Using the Structured Clone algorithm, which supports circular references, Dates, and Maps',
          'By passing raw memory pointers',
          'Using XML serialization'
        ],
        answer: 1,
        explanation: 'The structured clone algorithm copies complex object graphs, Maps, Sets, TypedArrays, and cyclic references without JSON string limitations.'
      },
      {
        q: 'How can the main thread immediately stop an active Web Worker?',
        options: [
          'worker.kill()',
          'worker.terminate()',
          'delete worker',
          'worker.stop()'
        ],
        answer: 1,
        explanation: 'worker.terminate() immediately destroys the worker thread without waiting for its operations to finish.'
      }
    ]
  }
]

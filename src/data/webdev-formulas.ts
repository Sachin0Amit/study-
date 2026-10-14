import type { FormulaEntry } from './formulas'

// ============================================================================
// Formula sheet — The Complete Web Development Library (web-ch1 … web-ch20).
// Web development is a practice, not math: entries are key rules, idioms,
// facts and guarantees. `section` is the real section number where the rule
// appears. `formula` is a compact memorable statement in Unicode
// (search / plain-text fallback).
// ============================================================================

export const WEBDEV_FORMULAS: FormulaEntry[] = [
  // ============================ Chapter 1 — Web Foundations ============================
  { chapterId: 'web-ch1', section: '1.1', name: 'URL Anatomy', formula: 'scheme://host:port/path?query#fragment — every part has a job', note: 'scheme + authority + path + query + fragment' },
  { chapterId: 'web-ch1', section: '1.1', name: 'DNS Resolution Order', formula: 'cache → resolver → root → TLD → authoritative → IP', note: 'a name becomes an address before any HTTP happens' },
  { chapterId: 'web-ch1', section: '1.1', name: 'HTTP Request Shape', formula: 'method + path + headers + optional body ⇒ status + headers + body', note: 'GET safe/idempotent; POST neither; PUT idempotent' },
  { chapterId: 'web-ch1', section: '1.2', name: 'Critical Rendering Path', formula: 'HTML → DOM + CSS → CSSOM → render tree → layout → paint → composite', note: 'render-blocking CSS/JS is why order matters' },
  { chapterId: 'web-ch1', section: '1.4', name: 'GitHub Flow', formula: 'branch → commit → push → PR → review → merge to main → deploy', note: 'main is always releasable' },
  // ============================ Chapter 2 — HTML Semantics ============================
  { chapterId: 'web-ch2', section: '2.1', name: 'Minimal Valid Document', formula: '<!DOCTYPE html> + html[lang] + head(meta charset, viewport, title) + body', note: 'doctype first; lang for screen readers' },
  { chapterId: 'web-ch2', section: '2.2', name: 'Heading Order Rule', formula: 'one h1 per page, then h2→h3 without skipping levels', note: 'headings are an outline, not font sizes' },
  { chapterId: 'web-ch2', section: '2.3', name: 'Responsive Image Rule', formula: 'srcset + sizes + modern format; alt describes the content', note: 'decorative images get alt=""' },
  { chapterId: 'web-ch2', section: '2.4', name: 'Table Semantics', formula: 'caption + thead/tbody/tfoot + th[scope] — tables only for tabular data', note: 'never tables for layout' },
  { chapterId: 'web-ch2', section: '2.5', name: 'Landmark Set', formula: 'header + nav + main + footer; article/section/aside inside main', note: 'landmarks are the screen-reader map' },
  // ============================ Chapter 3 — Forms, Media, DOM ============================
  { chapterId: 'web-ch3', section: '3.1', name: 'Label Binding Law', formula: 'every control needs <label for=id> or wrapping label — no exceptions', note: 'clickable label + announced name' },
  { chapterId: 'web-ch3', section: '3.2', name: 'Validation Ladder', formula: 'type + required + pattern + min/max → Constraint API → custom message', note: 'server must re-validate everything' },
  { chapterId: 'web-ch3', section: '3.3', name: 'Media Fallback Rule', formula: '<video>/<audio>: multiple <source> + track + fallback text', note: 'captions are tracks, notburned-in text' },
  { chapterId: 'web-ch3', section: '3.4', name: 'SVG vs Canvas Rule', formula: 'SVG = retained vector DOM (icons/charts); canvas = immediate pixels (games)', note: 'need events/a11y → SVG' },
  { chapterId: 'web-ch3', section: '3.5', name: 'HTML Debug Order', formula: 'validate → check nesting → check alt/labels → check heading order', note: 'validator first, eyes second' },
  // ============================ Chapter 4 — CSS Fundamentals ============================
  { chapterId: 'web-ch4', section: '4.1', name: 'Selector Power Order', formula: 'element < class < ID; combinators: descendant( ) > child(>) + adjacent(+) ~ sibling(~)', note: 'prefer classes; IDs rarely' },
  { chapterId: 'web-ch4', section: '4.2', name: 'Cascade Winner', formula: 'origin → importance → specificity(a,b,c) → source order', note: '!important loses to later !important' },
  { chapterId: 'web-ch4', section: '4.2', name: 'Specificity Score', formula: '(IDs, classes/attrs/pseudo-classes, elements) — compare left to right', note: '0,1,0 beats 0,0,12' },
  { chapterId: 'web-ch4', section: '4.3', name: 'Box Model Total', formula: 'total width = content + padding + border + margin (with box-sizing)', note: '* { box-sizing: border-box } globally' },
  { chapterId: 'web-ch4', section: '4.4', name: 'Unit Choice Rule', formula: 'rem for type/spacing, %/fr for layout, vw/vh sparingly, px for hairlines', note: 'rem respects user font size' },
  // ============================ Chapter 5 — Text & Theming ============================
  { chapterId: 'web-ch5', section: '5.1', name: 'Readable Type Trio', formula: 'line-height 1.5–1.7 + measure 45–75ch + contrast ≥ 4.5:1', note: 'readability beats decoration' },
  { chapterId: 'web-ch5', section: '5.2', name: 'Link States LVHA', formula: ':link → :visited → :hover → :active (+ :focus-visible always)', note: 'order matters — LoVe HAte' },
  { chapterId: 'web-ch5', section: '5.3', name: 'Token Theming', formula: ':root{--brand} + [data-theme=dark]{--brand} + var(--brand, fallback)', note: 'JS flips one attribute' },
  { chapterId: 'web-ch5', section: '5.4', name: 'Font Loading Without Shift', formula: 'preload woff2 + font-display: swap + matching fallback metrics', note: 'swap text fast, no invisible wait' },
  { chapterId: 'web-ch5', section: '5.5', name: 'Focus Visibility Law', formula: 'never remove outlines without a :focus-visible replacement', note: 'keyboard users navigate by focus' },
  // ============================ Chapter 6 — Layout & Responsive ============================
  { chapterId: 'web-ch6', section: '6.1', name: 'Positioning Map', formula: 'static(flow) < relative(nudge) < absolute(nearest positioned) < fixed(viewport) < sticky(scroll-range)', note: 'absolute needs a positioned ancestor' },
  { chapterId: 'web-ch6', section: '6.2', name: 'Flexbox Axes', formula: 'justify-content = main axis; align-items = cross axis; wrap before shrink', note: 'row vs column flips the axes' },
  { chapterId: 'web-ch6', section: '6.3', name: 'Grid vs Flexbox', formula: 'Grid = 2D page/section layout; Flexbox = 1D row/column alignment', note: 'grid areas for page skeleton' },
  { chapterId: 'web-ch6', section: '6.4', name: 'Mobile-First Media', formula: 'base = mobile; @media (min-width) adds complexity upward', note: 'min-width queries, not max' },
  { chapterId: 'web-ch6', section: '6.5', name: 'Rect Coordinates', formula: 'getBoundingClientRect() = viewport box; + scrollY/X = page box', note: 'client* = viewport; page* = document' },
  // ============================ Chapter 7 — Motion & Tooling ============================
  { chapterId: 'web-ch7', section: '7.1', name: 'Cheap Animation Rule', formula: 'animate transform + opacity only; layout/paint props jank', note: 'compositor handles transform/opacity' },
  { chapterId: 'web-ch7', section: '7.2', name: 'Transform Order', formula: 'functions apply right-to-left in the list; origin changes the pivot', note: 'translate then rotate ≠ rotate then translate' },
  { chapterId: 'web-ch7', section: '7.3', name: 'Reduced Motion Guard', formula: '@media (prefers-reduced-motion: reduce){ *{animation: none}}', note: 'essential motion only for those users' },
  { chapterId: 'web-ch7', section: '7.4', name: 'Sass Value Rule', formula: 'variables for tokens, mixins for patterns, partials per concern', note: 'nest max 3 deep' },
  { chapterId: 'web-ch7', section: '7.5', name: 'Tailwind Responsive/Dark', formula: 'md:lg: prefixes stack upward; dark: follows class strategy', note: 'extract repeating sets into components' },
  // ============================ Chapter 8 — JS for the Web ============================
  { chapterId: 'web-ch8', section: '8.1', name: 'Closure Private State', formula: 'outer(){ let s; return ()=>s++ } — s outlives the call', note: 'closures capture variables, not snapshots' },
  { chapterId: 'web-ch8', section: '8.3', name: 'textContent Beats innerHTML', formula: 'textContent = inert text; innerHTML parses markup (XSS risk)', note: 'hostile data → textContent' },
  { chapterId: 'web-ch8', section: '8.4', name: 'Delegation Pattern', formula: 'parent.addEventListener(type, e => e.target.closest(sel))', note: 'one listener serves dynamic rows' },
  { chapterId: 'web-ch8', section: '8.4', name: 'Capture Target Bubble', formula: 'capture (down) → target → bubble (up); stopPropagation blocks up', note: 'most handlers use bubble phase' },
  { chapterId: 'web-ch8', section: '8.5', name: 'Debug Order', formula: 'reproduce → read error + stack → isolate → fix → add regression test', note: 'breakpoints over console spam' },
  // ============================ Chapter 9 — Async & Storage ============================
  { chapterId: 'web-ch9', section: '9.1', name: 'Serial vs Parallel Awaits', formula: 'await a; await b = serial; await Promise.all([a,b]) = parallel', note: 'start both first, then await' },
  { chapterId: 'web-ch9', section: '9.1', name: 'Microtask Checkpoint', formula: 'await/.then drains before the next macrotask — always', note: 'microtasks starve timers if looped' },
  { chapterId: 'web-ch9', section: '9.2', name: 'Fetch Correctness', formula: 'fetch resolves on HTTP errors: check res.ok; race vs AbortController', note: '4xx/5xx need manual throw' },
  { chapterId: 'web-ch9', section: '9.3', name: 'Storage Tiers', formula: 'localStorage 5MB strings; cookies 4KB sent per request; big/offline → IndexedDB', note: 'JSON-encode objects' },
  { chapterId: 'web-ch9', section: '9.5', name: 'Import Cost Rule', formula: 'static import = bundled; await import() = split point loaded on demand', note: 'dynamic import is code-splitting' },
  // ============================ Chapter 10 — TypeScript ============================
  { chapterId: 'web-ch10', section: '10.1', name: 'Narrow After Check', formula: 'if (x != null) → x is NonNullable inside the branch', note: 'control flow is the type guard' },
  { chapterId: 'web-ch10', section: '10.2', name: 'Generic Constraint', formula: '<T extends { id: string }>(items: T[]) — generic but bounded', note: 'constraints keep inference useful' },
  { chapterId: 'web-ch10', section: '10.3', name: 'Discriminated Union', formula: '{ status:"ok", data } | { status:"err", error } — switch on status', note: 'one literal field drives narrowing' },
  { chapterId: 'web-ch10', section: '10.4', name: 'Strict Pays Off', formula: '"strict": true — null checks + no implicit any catch real bugs', note: 'enable strict on day one' },
  { chapterId: 'web-ch10', section: '10.5', name: 'Shared Contract Rule', formula: 'one types/ dir imported by client + server — API drift becomes a type error', note: 'single source of truth' },
  // ============================ Chapter 11 — React Basics ============================
  { chapterId: 'web-ch11', section: '11.1', name: 'Props Flow Down', formula: 'parent → props → child; never mutate props — lift state up instead', note: 'data flows one way' },
  { chapterId: 'web-ch11', section: '11.2', name: 'Effect Cleanup Law', formula: 'every subscription/timer in useEffect returns its cleanup', note: 'no cleanup = StrictMode double-fire bugs' },
  { chapterId: 'web-ch11', section: '11.3', name: 'Stable Keys Rule', formula: 'key={item.id} — never index unless list is static and unordered', note: 'keys preserve component state' },
  { chapterId: 'web-ch11', section: '11.3', name: 'Controlled Input Shape', formula: 'value={state} + onChange={set} — React owns the truth', note: 'uncontrolled = ref when needed' },
  { chapterId: 'web-ch11', section: '11.4', name: 'Context vs Props', formula: 'props for direct children; context for deeply shared (theme/auth)', note: 'context re-renders all consumers' },
  // ============================ Chapter 12 — React Pro & Next ============================
  { chapterId: 'web-ch12', section: '12.1', name: 'Nested Route Layout', formula: 'layout(route) wraps outlet(children) — shared chrome without remount', note: 'loaders fetch before render' },
  { chapterId: 'web-ch12', section: '12.2', name: 'Server vs Client State', formula: 'server state → TanStack Query; client state → useState/store', note: 'never put fetched data in global store' },
  { chapterId: 'web-ch12', section: '12.3', name: 'Smallest Store Wins', formula: 'useState → Zustand → Redux (legacy) — escalate only on evidence', note: 'select slices to avoid rerenders' },
  { chapterId: 'web-ch12', section: '12.4', name: 'Next Rendering Map', formula: 'SSG(static) < ISR(revalidate) < SSR(per-request) < RSC(stream)', note: 'cheapest rendering that stays fresh' },
  { chapterId: 'web-ch12', section: '12.5', name: 'Token Handoff Rule', formula: 'Figma tokens → CSS variables → component props — one naming spine', note: 'designers and code share names' },
  // ============================ Chapter 13 — Node & Express ============================
  { chapterId: 'web-ch13', section: '13.1', name: 'Argv Offsets', formula: 'argv[0]=node, [1]=script, user flags start at [2]', note: 'values arrive as strings' },
  { chapterId: 'web-ch13', section: '13.2', name: 'Middleware Order Is Behavior', formula: 'app.use(logger) → routes → 404 → error handler (4 args)', note: 'order defines the pipeline' },
  { chapterId: 'web-ch13', section: '13.3', name: 'Status Code Map', formula: '200 ok / 201 created / 204 empty / 400 bad / 401 unauth / 403 forbidden / 404 missing / 409 conflict / 422 invalid / 500 fault', note: 'wrong code breaks clients + caches' },
  { chapterId: 'web-ch13', section: '13.4', name: 'Validate-Then-Handle', formula: 'Zod schema parses at route entry; handler sees only valid data', note: 'never trust req.body' },
  { chapterId: 'web-ch13', section: '13.5', name: 'Twelve-Factor Config', formula: 'config in env, never in code; dev/staging/prod differ by env only', note: 'one build, many envs' },
  // ============================ Chapter 14 — APIs in Practice ============================
  { chapterId: 'web-ch14', section: '14.1', name: 'Paging Contract', formula: '?limit&cursor → { data, nextCursor } — cursors over offsets at scale', note: 'offsets drift on writes' },
  { chapterId: 'web-ch14', section: '14.2', name: 'GraphQL When', formula: 'REST over-fetches nested graphs → GraphQL single query wins', note: 'beware N+1 in resolvers' },
  { chapterId: 'web-ch14', section: '14.3', name: 'WS vs SSE Rule', formula: 'bidirectional + low latency → WS; server push only → SSE', note: 'SSE reconnects natively' },
  { chapterId: 'web-ch14', section: '14.4', name: 'Payment Intent Flow', formula: 'create intent → client confirms → webhook fulfills (verify signature)', note: 'never trust client success alone' },
  { chapterId: 'web-ch14', section: '14.5', name: 'Job Idempotency Key', formula: 'same key + same payload = one effect, safe to retry', note: 'queues deliver at-least-once' },
  // ============================ Chapter 15 — SQL & Postgres ============================
  { chapterId: 'web-ch15', section: '15.1', name: 'Aggregation Order', formula: 'WHERE filters rows → GROUP BY buckets → HAVING filters groups', note: 'HAVING needs GROUP BY' },
  { chapterId: 'web-ch15', section: '15.2', name: 'Join Chooser', formula: 'need matches only → INNER; keep left rows → LEFT; bridge table → M:N', note: 'draw the Venn before coding' },
  { chapterId: 'web-ch15', section: '15.3', name: 'Money-Move Transaction', formula: 'BEGIN → lock rows → check → update both → COMMIT (ROLLBACK on error)', note: 'ACID or lost money' },
  { chapterId: 'web-ch15', section: '15.3', name: 'Index-Then-Verify', formula: 'EXPLAIN before index → create → EXPLAIN after (Index Scan?)', note: 'unused indexes tax writes' },
  { chapterId: 'web-ch15', section: '15.5', name: 'Migration Discipline', formula: 'one migration = one change, reversible, seeded, backed up', note: 'never edit applied migrations' },
  // ============================ Chapter 16 — NoSQL, ORM, Cache ============================
  { chapterId: 'web-ch16', section: '16.1', name: 'Embed vs Reference', formula: 'read together → embed; grow unbounded/share → reference', note: '16MB document ceiling' },
  { chapterId: 'web-ch16', section: '16.2', name: 'N+1 Killer', formula: 'include/select in one query — never await in a loop over relations', note: 'one round trip per page' },
  { chapterId: 'web-ch16', section: '16.3', name: 'Drizzle vs Prisma', formula: 'Prisma = schema-first DX; Drizzle = SQL-first control', note: 'both beat raw strings at scale' },
  { chapterId: 'web-ch16', section: '16.4', name: 'Cache-Aside Pattern', formula: 'read cache → miss? read DB + setex(TTL) : return; writes invalidate', note: 'TTL bounds staleness' },
  { chapterId: 'web-ch16', section: '16.5', name: 'SQL-First Default', formula: 'relational + constraints first; documents when shape varies per row', note: 'constraints are documentation' },
  // ============================ Chapter 17 — Auth & Security ============================
  { chapterId: 'web-ch17', section: '17.1', name: 'Access + Refresh Split', formula: 'short access JWT (minutes) + rotating httpOnly refresh (days)', note: 'revoke refresh, not access' },
  { chapterId: 'web-ch17', section: '17.2', name: 'Hash, Never Encrypt Passwords', formula: 'bcrypt/argon2 with per-user salt; compare in constant time', note: 'cost factor rises with hardware' },
  { chapterId: 'web-ch17', section: '17.3', name: 'XSS Killer', formula: 'textContent + framework escaping + CSP — never innerHTML with user data', note: 'XSS steals sessions' },
  { chapterId: 'web-ch17', section: '17.3', name: 'CSRF + Injection Pair', formula: 'SameSite=Lax + token for mutations; parameterized queries always', note: 'string-built SQL is the vuln' },
  { chapterId: 'web-ch17', section: '17.5', name: 'Safe Error Envelope', formula: '{ code, message(generic), details(dev-only) } — log full, send little', note: 'stack traces never reach clients' },
  // ============================ Chapter 18 — Testing ============================
  { chapterId: 'web-ch18', section: '18.1', name: 'Arrange-Act-Assert', formula: 'given → when → then; one behavior per test', note: 'fresh fixtures in beforeEach' },
  { chapterId: 'web-ch18', section: '18.1', name: 'toBe vs toEqual', formula: 'toBe = Object.is identity; toEqual = deep structural equality', note: 'fresh objects need toEqual' },
  { chapterId: 'web-ch18', section: '18.2', name: 'Role-First Queries', formula: 'getByRole > getByLabel > getByText; never test IDs first', note: 'accessible queries enforce a11y' },
  { chapterId: 'web-ch18', section: '18.4', name: 'Locator Resilience', formula: 'role + name > test-id > CSS/XPath (last resort)', note: 'selectors cause flakes' },
  { chapterId: 'web-ch18', section: '18.5', name: 'Red-Gate Rule', formula: 'lint + typecheck + unit on push; E2E on PR — red blocks merge', note: 'CI is the enforcer' },
  // ============================ Chapter 19 — Perf, A11y, SEO ============================
  { chapterId: 'web-ch19', section: '19.1', name: 'Vitals Budgets', formula: 'LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 — field data over lab', note: 'budgets in CI, not hopes' },
  { chapterId: 'web-ch19', section: '19.2', name: 'Bundle Diet', formula: 'route-split + tree-shake + modern formats + CDN cache headers', note: 'ship less, cache longer' },
  { chapterId: 'web-ch19', section: '19.3', name: 'Name-Role-Value', formula: 'every control exposes name + role + value to assistive tech', note: 'no accessible name = invisible control' },
  { chapterId: 'web-ch19', section: '19.4', name: 'Share Card Minimum', formula: 'title + description + canonical + OG image + twitter card', note: 'test with card validators' },
  { chapterId: 'web-ch19', section: '19.5', name: 'Permission-First APIs', formula: 'feature-detect → request on gesture → handle denial gracefully', note: 'never assume sensors exist' },
  // ============================ Chapter 20 — DevOps & Capstone ============================
  { chapterId: 'web-ch20', section: '20.1', name: 'Layer Cache Order', formula: 'deps first (rarely change) → source last (changes always)', note: 'order defines build speed' },
  { chapterId: 'web-ch20', section: '20.2', name: 'Pipeline Stages', formula: 'lint → typecheck → unit → build → E2E → deploy (fail fast, in order)', note: 'cheap checks first' },
  { chapterId: 'web-ch20', section: '20.3', name: 'Env Separation', formula: 'dev/preview/prod envs; preview per PR; prod deploys from main only', note: 'secrets never in git' },
  { chapterId: 'web-ch20', section: '20.4', name: 'Rollback Readiness', formula: 'health check + previous image + migration plan + runbook = safe deploy', note: 'deploy is a reversible action' },
  { chapterId: 'web-ch20', section: '20.5', name: 'Guarded AI Feature', formula: 'scope → ground(RAG) → constrain(output) → eval + cost cap → human review', note: 'AI ships with guardrails or not at all' },
]

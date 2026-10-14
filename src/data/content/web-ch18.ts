import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 18
// Testing and Quality: Unit, Integration and E2E (Sections 18.1 – 18.5)
// Master study content.
// ============================================================================

export const webCh18Content: SectionContent[] = [
  // ---------------------------------------------------------------- 18.1
  {
    sectionId: 'web-ch18-s1',
    readingTime: 8,
    intro: 'Unit tests are the smallest safety net in a codebase: fast checks that single functions behave exactly as promised. This section teaches the Arrange Act Assert structure, expressive matchers, controlled mocks, and reusable fixtures. You will learn what deserves a unit test and what belongs to higher layers.',
    objectives: [
      'Structure every unit test with Arrange, Act, and Assert phases',
      'Choose precise matchers that fail with readable messages',
      'Isolate units with mocks, stubs, and spies appropriately',
      'Build fixtures and factories that keep tests independent'
    ],
    concepts: [
      {
        term: 'Arrange Act Assert structure',
        kind: 'method',
        statement: '**Arrange Act Assert** gives every test three beats: set up inputs with `arrange`, invoke the unit once with `act`, then check the outcome with `assert`. One behavior per test keeps failures **diagnostic**, because the test name plus the failing assertion names the broken promise. Shared setup moves into `beforeEach` blocks, so each test still reads as a complete little story.',
        detail: 'Name tests as behavior promises such as rejects expired coupons rather than test one or test two. A test that needs branching logic inside it is two tests wearing a trench coat.'
      },
      {
        term: 'Matchers and assertions',
        kind: 'definition',
        statement: '**Matchers** are the assertion verbs like `toEqual` and `toThrow` that compare actual outcomes against expectations. Prefer **structural** matchers for objects and **behavioral** matchers for errors and promises, because precise verbs produce precise failure messages. A good failure reads like a **bug report**, showing expected versus received with no detective work required.',
        detail: 'Use equality for values, containment for collections, and throw matchers for error paths. Avoid boolean assertions that print only expected true received false.'
      },
      {
        term: 'Mocks, stubs, and spies',
        kind: 'definition',
        statement: '**Test doubles** stand in for awkward collaborators: a `mock` script verifies how it was called, a stub returns canned answers, and a `spy` records calls to a real function. Doubles isolate the **unit under test** from networks and clocks, which keeps suites fast and deterministic. Mock at **boundaries** like fetch and timers, never at the pure logic being verified.',
        detail: 'Reset doubles between tests so call counts never leak across cases. Prefer injecting dependencies as arguments over rewiring module internals.'
      },
      {
        term: 'Fixtures and factories',
        kind: 'method',
        statement: '**Fixtures** are fixed `data` snapshots for repeated scenarios, while factories are functions that mint fresh variants per test. Factories beat shared objects because each test owns **independent** state that no other test can mutate. Sensible **defaults** with targeted overrides keep setup to one line while still covering edge cases explicitly.',
        detail: 'Freeze shared fixtures so accidental mutation throws instead of poisoning later tests. Generate ids and dates inside factories to avoid collisions and time bombs.'
      },
      {
        term: 'What deserves a unit test',
        kind: 'insight',
        statement: 'Unit tests earn their keep on **pure logic**: pricing rules in `validateCoupon`, validators, parsers, and state reducers with clear inputs and outputs. Framework glue and trivial **pass through** code belong to integration or end to end layers, where real wiring is exercised. The rule is **risk per minute**: test the code whose failure is expensive and whose execution is cheap.',
        detail: 'Aim the pyramid with many fast units, fewer integration tests, and a thin end to end cap. Delete or rewrite tests that break on every refactor without catching real bugs.'
      }
    ],
    examples: [
      {
        title: 'Test a coupon validator with AAA',
        problem: 'A cart applies discount coupons, and expired or overused coupons must be rejected with distinct codes.',
        steps: [
          { label: 'Step 1: Arrange the world', text: '```ts\nimport { validateCoupon } from "./coupons"\nimport { makeCoupon, makeCart } from "./factories"\nconst coupon = makeCoupon({ code: "SAVE10", expiresAt: pastDate() })\nconst cart = makeCart({ total: 8000 })\n```\nFactories mint fresh data per test so no state leaks between cases.' },
          { label: 'Step 2: Act once', text: '```ts\nconst result = validateCoupon(cart, coupon, now())\n```\nExactly one invocation sits between setup and assertion, which keeps the failure diagnostic.' },
          { label: 'Step 3: Assert the promise', text: '```ts\nexpect(result.ok).toBe(false)\nexpect(result.code).toBe("COUPON_EXPIRED")\n```\nThe test names the behavior and the matcher prints expected versus received on failure.' }
        ],
        result: 'Expired coupons are rejected with a distinct code, and parallel tests for used up and valid coupons follow the same three beats.'
      },
      {
        title: 'Isolate a fetcher with a mocked clock and network',
        problem: 'A retry helper sleeps between attempts and calls fetch, which makes naive tests slow and flaky.',
        steps: [
          { label: 'Step 1: Double the boundary', text: '```ts\nimport { vi } from "vitest"\nvi.useFakeTimers()\nconst fetchMock = vi.fn()\nvi.stubGlobal("fetch", fetchMock)\n```\nFake timers plus a stubbed fetch remove the network and the waiting entirely.' },
          { label: 'Step 2: Script the failure then success', text: '```ts\nfetchMock.mockRejectedValueOnce(new Error("down")).mockResolvedValueOnce({ ok: true })\nconst pending = fetchWithRetry("https://api.example.com/cart")\nawait vi.runAllTimersAsync()\nconst res = await pending\n```\nThe double replays a failure followed by success while virtual time skips the sleeps.' },
          { label: 'Step 3: Verify behavior and calls', text: '```ts\nexpect(res.ok).toBe(true)\nexpect(fetchMock).toHaveBeenCalledTimes(2)\nvi.useRealTimers()\nvi.unstubAllGlobals()\n```\nAssertions cover both the outcome and the retry count, then restore the real environment.' }
        ],
        result: 'The retry path runs in milliseconds with zero network, and the call count proves exactly one retry happened.'
      }
    ],
    keyTakeaways: [
      'Write every unit as Arrange then Act then Assert with one behavior per test.',
      'Pick precise matchers so failures read like bug reports with expected versus received.',
      'Mock at boundaries such as networks and clocks, never at the logic under test.',
      'Mint per test data with factories and freeze shared fixtures against mutation.',
      'Aim unit tests at pure risky logic and leave wiring to integration and end to end layers.'
    ],
    quiz: [
      {
        q: 'Why does Arrange Act Assert insist on a single Act?',
        options: [
          'It makes tests run in parallel automatically',
          'One invocation per test ties any failure to exactly one behavior',
          'Multiple acts make tests faster',
          'The framework rejects tests with one act'
        ],
        answer: 1,
        explanation: 'A single act means the failing assertion can only blame one behavior. Multiple invocations force debugging to determine which one broke the promise.'
      },
      {
        q: 'When should you reach for a mock?',
        options: [
          'To replace the pure function being tested',
          'To isolate the unit from boundaries like networks, clocks, and randomness',
          'To skip writing assertions',
          'To test two units at once'
        ],
        answer: 1,
        explanation: 'Doubles remove nondeterminism and slowness at the edges so the unit runs fast and repeatably. Mocking the unit itself tests nothing.'
      },
      {
        q: 'Factories beat shared mutable objects because they provide what?',
        options: [
          'Slower test runs',
          'Independent per test state that no other test can mutate',
          'Hidden coupling between tests',
          'Fewer assertions per test'
        ],
        answer: 1,
        explanation: 'Fresh objects per test eliminate order dependence and cross test pollution. Shared mutable fixtures let one test poison the next.'
      },
      {
        q: 'Which code most deserves a unit test?',
        options: [
          'A pure pricing rule with expensive failure modes',
          'A trivial pass through wrapper with no logic',
          'Framework configuration with no branches',
          'A static string constant'
        ],
        answer: 0,
        explanation: 'Risk per minute guides the choice: pure branching logic fails expensively and runs cheaply. Glue and constants belong to higher layers or to no test at all.'
      }
    ]
  },

  // ---------------------------------------------------------------- 18.2
  {
    sectionId: 'web-ch18-s2',
    readingTime: 8,
    intro: 'React Testing Library changed frontend testing by querying pages the way users experience them. This section teaches role first queries, realistic user events, and async utilities for loading states. You will learn to test visible behavior so refactors stop breaking suites.',
    objectives: [
      'Query components by accessible role before test ids',
      'Drive interactions with user events instead of low level fires',
      'Handle async UI with find by queries and wait utilities',
      'Assert visible behavior rather than internal implementation'
    ],
    concepts: [
      {
        term: 'Role first query priority',
        kind: 'method',
        statement: '**Role first queries** like `getByRole` find elements by their accessible role and name, exactly as assistive technology announces them. The priority runs from roles to labels to text and only then to `testid` escapes, because each step down is less **user visible**. Tests written this way double as **accessibility checks**, since a missing role fails the test before it fails a real user.',
        detail: 'Prefer getByRole for buttons, headings, and inputs, and reserve test ids for elements with no semantic identity. A test id on a button is a confession that the button has no accessible name.'
      },
      {
        term: 'User events over fire events',
        kind: 'method',
        statement: 'The `userEvent` API replays full interaction sequences including focus, keydown, keypress, and click, while `fireEvent` dispatches single bare events. Realistic sequences catch **handler gaps** such as validation wired to keystrokes but not to change events. Tests become **interaction stories** that mirror what fingers and keyboards actually do.',
        detail: 'Await every user event call since the API is asynchronous by design. Use keyboard utilities to tab through forms exactly as keyboard only users do.'
      },
      {
        term: 'Async UI utilities',
        kind: 'method',
        statement: '**Async utilities** like `findByRole` and `waitFor` poll for UI that arrives after fetches and transitions. They replace fixed `sleep` calls with **condition waits**, so suites run fast on quick machines and still pass on slow ones. Timeouts stay **generous** on assertions and strict on test runners, which separates product slowness from test flakiness.',
        detail: 'Prefer find by queries for appearing elements and waitFor for disappearing ones. Mock server responses per test so async paths are deterministic.'
      },
      {
        term: 'Behavior over implementation',
        kind: 'law',
        statement: 'Tests must assert **visible behavior** such as text, roles, and navigation rather than `state` variables or handler names. Implementation details change on every refactor while behavior promises **endure**, so detail coupled tests fail without any user facing breakage. If a green refactor requires editing tests, the tests were asserting **internals** rather than outcomes.',
        detail: 'Never reach into component state, props, or private functions from tests. Ask what the user can see or do after the interaction, then assert exactly that.'
      },
      {
        term: 'Accessibility queries as quality gates',
        kind: 'insight',
        statement: 'Queries by role and label turn every test run into an **accessibility audit**, because unnamed controls are unfindable by both tests and screen readers. Form tests that tab, type, and submit through `labels` catch missing associations that mouse only testing misses. This makes quality **continuous** instead of a separate audit phase that arrives after release.',
        detail: 'Add checks for focus order and error announcements on every form test. Pair the suite with a lint rule that bans test ids on interactive elements.'
      }
    ],
    examples: [
      {
        title: 'Test a login form the user way',
        problem: 'A login form must show a validation error for empty submit and navigate on valid credentials.',
        steps: [
          { label: 'Step 1: Render and query by role', text: '```ts\nimport { render, screen } from "@testing-library/react"\nimport userEvent from "@testing-library/user-event"\nrender(<LoginForm onLogin={onLogin} />)\nconst email = screen.getByRole("textbox", { name: "Email" })\nconst submit = screen.getByRole("button", { name: "Sign in" })\n```\nEvery query uses the accessible name a screen reader would announce.' },
          { label: 'Step 2: Drive the empty submit', text: '```ts\nconst user = userEvent.setup()\nawait user.click(submit)\nexpect(await screen.findByRole("alert")).toHaveTextContent("Email is required")\n```\nThe async finder waits for validation rendering instead of sleeping a fixed time.' },
          { label: 'Step 3: Complete a valid login', text: '```ts\nawait user.type(email, "ada@example.com")\nawait user.type(screen.getByLabelText("Password"), "correct-horse")\nawait user.click(submit)\nexpect(onLogin).toHaveBeenCalledWith({ email: "ada@example.com" })\n```\nTyping replays real keystrokes through the same handlers fingers trigger.' }
        ],
        result: 'Empty submit announces an alert role and valid input calls the login handler with the right payload.'
      },
      {
        title: 'Test a loading list without flakes',
        problem: 'A product list shows a spinner, then items fetched from an API, and naive tests assert too early.',
        steps: [
          { label: 'Step 1: Mock the server per test', text: '```ts\nserver.use(http.get("https://api.example.com/items", () => {\n  return HttpResponse.json([{ id: "1", name: "Lamp" }])\n}))\nrender(<ItemList />)\nexpect(screen.getByRole("status")).toBeInTheDocument()\n```\nThe spinner role proves loading state before the network resolves.' },
          { label: 'Step 2: Wait for the behavior', text: '```ts\nconst item = await screen.findByRole("listitem", { name: "Lamp" })\nexpect(item).toBeInTheDocument()\nexpect(screen.queryByRole("status")).not.toBeInTheDocument()\n```\nCondition waits adapt to fast and slow machines instead of fixed sleeps.' },
          { label: 'Step 3: Assert no internals', text: '```ts\n// Good: visible list item and gone spinner\n// Avoid: checking useState values or fetch call order internals\n```\nRefactors of state shape or hook order leave these assertions green.' }
        ],
        result: 'Loading, content, and settled states are all asserted through visible roles with zero timing flakes.'
      }
    ],
    keyTakeaways: [
      'Query by accessible role and name first and reserve test ids for non semantic elements.',
      'Drive every interaction with user events that replay full focus plus keyboard plus pointer sequences.',
      'Wait on conditions with find by and wait utilities instead of fixed sleeps.',
      'Assert visible behavior so refactors stay green unless users are affected.',
      'Let role based tests double as continuous accessibility audits for names and focus.'
    ],
    quiz: [
      {
        q: 'Why do role first queries improve both tests and accessibility?',
        options: [
          'They run faster than all other queries',
          'They locate elements exactly as assistive technology does, so missing names fail tests early',
          'They bypass the DOM entirely',
          'They test implementation details directly'
        ],
        answer: 1,
        explanation: 'A control without a role or name is invisible to screen readers and unfindable by role queries. The test failure reports the same barrier a user would hit.'
      },
      {
        q: 'What does `userEvent` catch that `fireEvent` misses?',
        options: [
          'Nothing, they are identical',
          'Gaps between real interaction sequences and single dispatched events, such as focus and keystroke ordering',
          'Only styling regressions',
          'Only network failures'
        ],
        answer: 1,
        explanation: 'Real typing involves focus plus keydown plus input plus change in order. Single event dispatch can pass while the true sequence breaks.'
      },
      {
        q: 'How should tests handle UI that arrives after a fetch?',
        options: [
          'Sleep a fixed two seconds and hope',
          'Poll with find by or wait utilities until the condition holds or times out',
          'Assert synchronously before the fetch resolves',
          'Skip asserting loading states'
        ],
        answer: 1,
        explanation: 'Condition waits adapt to machine speed: fast environments finish early and slow ones keep polling. Fixed sleeps are slow when generous and flaky when tight.'
      },
      {
        q: 'A refactor renames internal state but keeps the UI identical, and three tests fail. What went wrong?',
        options: [
          'The refactor broke the product',
          'The tests asserted internals instead of visible behavior',
          'More tests are needed',
          'The tests ran too fast'
        ],
        answer: 1,
        explanation: 'Behavior coupled tests survive pure refactors by definition. Failures without user facing change prove the assertions reached into state, props, or handler names.'
      }
    ]
  },

  // ---------------------------------------------------------------- 18.3
  {
    sectionId: 'web-ch18-s3',
    readingTime: 9,
    intro: 'API and integration tests prove that routes, validation, databases, and serializers work together as a system. This section shows supertest style route tests, isolated test databases, data factories, and contract assertions. You will draw a clean line between fast unit logic and wired integration coverage.',
    objectives: [
      'Write supertest style tests that drive real routes end to end of the backend',
      'Isolate tests with dedicated databases plus transactions or resets',
      'Generate test data with factories instead of hand built rows',
      'Assert status plus shape contracts on every endpoint'
    ],
    concepts: [
      {
        term: 'Supertest style route tests',
        kind: 'method',
        statement: '**Route tests** boot the real Express or Next handler and drive it with HTTP shaped calls through `supertest`. Unlike unit tests they exercise routing plus validation plus serialization **together**, which catches wiring mistakes no isolated test can see. Each test owns its **request** from method and path through headers to body, so failures reproduce with a single snippet.',
        detail: 'Build the app once per suite and create fresh agents per test to avoid cookie leakage. Assert the status code before the body so crashes are diagnosed first.'
      },
      {
        term: 'Test database isolation',
        kind: 'method',
        statement: '**Isolation** gives every test a clean `database` through transactions rolled back after each case or full resets between files. Without it, one test leftover rows become another test **mystery data** and suites pass only in one lucky order. The fastest pattern wraps each test in a `transaction` and rolls back, so hundreds of tests share one migrated schema safely.',
        detail: 'Run migrations once before the suite and never against the development database. Fail the run loudly if the connection string does not name a test database.'
      },
      {
        term: 'Factories and seeders',
        kind: 'method',
        statement: '**Factories** mint valid rows with `overrides` per test while seeders load the baseline catalogs every environment needs. Factories keep tests **explicit** about the data they depend on, because each test shows its own setup at the top. Shared seed scripts stay **minimal**, holding only roles and plans that many tests assume as background.',
        detail: 'Sequence unique fields like emails inside the factory to avoid collision failures. Keep factory defaults valid so tests override only the field under examination.'
      },
      {
        term: 'Status plus shape contracts',
        kind: 'definition',
        statement: 'A **contract assertion** checks both the `status` code and the response `shape` including envelope keys and field types. Status alone lets renamed fields slip through, while shape alone lets wrong codes masquerade as success. Together they pin the **client visible** promise so frontend code can rely on parsing without defensive guessing.',
        detail: 'Validate shapes with the same schema the route uses or a shared contract schema. Snapshot only stable envelopes and assert dynamic fields with matchers instead.'
      },
      {
        term: 'Integration versus unit boundaries',
        kind: 'insight',
        statement: '**Integration tests** prove collaboration between real parts while unit tests prove **logic** in isolation, and confusing the two wastes both layers. Push branching rules down to units where they run in milliseconds, and reserve integration for **wiring**: auth guards, validation order, foreign keys, and `status` plus shape serialization. A suite shaped this way fails **precisely**, with units naming the rule and integration naming the seam.',
        detail: 'If an integration failure needs a debugger to locate the rule, that rule lacks a unit test. If a unit suite needs a database to run, that test belongs upstairs.'
      }
    ],
    examples: [
      {
        title: 'Test a post creation route through HTTP',
        problem: 'An authenticated post route must reject anonymous callers, reject bad bodies, and persist valid posts.',
        steps: [
          { label: 'Step 1: Drive the real app', text: '```ts\nimport request from "supertest"\nimport { buildApp } from "../src/app"\nconst app = buildApp()\nconst res = await request(app).post("/posts").send({ title: "Hi" })\nexpect(res.status).toBe(401)\nexpect(res.body.code).toBe("UNAUTHENTICATED")\n```\nThe first test proves the guard runs before any handler logic.' },
          { label: 'Step 2: Prove validation ordering', text: '```ts\nconst token = await loginAs(app, "editor")\nconst bad = await request(app).post("/posts")\n  .set("Authorization", `Bearer ${token}`)\n  .send({ title: "" })\nexpect(bad.status).toBe(400)\nexpect(bad.body.code).toBe("VALIDATION_ERROR")\n```\nAuthentication passes and validation rejects, which pins the middleware order.' },
          { label: 'Step 3: Persist and check the contract', text: '```ts\nconst good = await request(app).post("/posts")\n  .set("Authorization", `Bearer ${token}`)\n  .send({ title: "Hello", body: "World" })\nexpect(good.status).toBe(201)\nexpect(good.body.data).toMatchObject({ title: "Hello" })\nexpect(typeof good.body.data.id).toBe("string")\n```\nStatus plus envelope plus field types together form the client contract.' }
        ],
        result: 'Guards, validation, and persistence are proven through real HTTP with contracts a frontend can code against.'
      },
      {
        title: 'Isolate tests with transactions and factories',
        problem: 'Post tests interfere with each other because rows created by one test appear in the next.',
        steps: [
          { label: 'Step 1: Wrap each test in a transaction', text: '```ts\nbeforeEach(async () => {\n  await db.query("BEGIN")\n})\nafterEach(async () => {\n  await db.query("ROLLBACK")\n})\n```\nEvery test starts from the same migrated snapshot and nothing ever commits.' },
          { label: 'Step 2: Mint rows with a factory', text: '```ts\nasync function makeUser(overrides = {}) {\n  return db.users.insert({\n    email: `user-${crypto.randomUUID()}@example.com`,\n    role: "editor",\n    ...overrides\n  })\n}\n```\nUnique emails per test remove collision flakes while overrides target the case at hand.' },
          { label: 'Step 3: Guard the database name', text: '```ts\nif (!process.env.DATABASE_URL?.includes("test")) {\n  throw new Error("Refusing to run integration tests outside a test database")\n}\n```\nThe suite fails closed rather than wiping development data on a misconfigured morning.' }
        ],
        result: 'Tests run in any order with identical results, and the development database stays untouched.'
      }
    ],
    keyTakeaways: [
      'Drive real handlers with supertest style calls that own method plus path plus headers plus body.',
      'Isolate with per test transactions or resets against a dedicated test database.',
      'Mint rows with factories carrying valid defaults and per test overrides.',
      'Assert status plus shape on every endpoint to pin the client visible contract.',
      'Push branching rules to units and reserve integration for guards, validation order, and persistence.'
    ],
    quiz: [
      {
        q: 'What does a supertest style test catch that a unit test misses?',
        options: [
          'Pure arithmetic mistakes',
          'Wiring mistakes across routing, guards, validation, and serialization',
          'Spelling in comments',
          'Nothing, they are equivalent'
        ],
        answer: 1,
        explanation: 'Route tests run the real middleware chain together, so ordering and serialization bugs surface. Units prove each piece alone and never the assembly.'
      },
      {
        q: 'Why wrap each integration test in a rolled back transaction?',
        options: [
          'To make tests slower and more realistic',
          'To give every test the same starting snapshot so order stops mattering',
          'To skip migrations entirely',
          'To share rows between tests'
        ],
        answer: 1,
        explanation: 'Rollback erases each test writes, so no test inherits mystery rows. Identical starting state makes results independent of execution order.'
      },
      {
        q: 'What makes a good factory default?',
        options: [
          'Invalid data that every test must fix',
          'Valid data with unique fields so tests override only what they examine',
          'A fixed email shared by all tests',
          'Randomly invalid shapes'
        ],
        answer: 1,
        explanation: 'Valid defaults keep setup to one line and unique fields prevent collisions. Overrides then document exactly what the case depends on.'
      },
      {
        q: 'Why assert both status and shape on responses?',
        options: [
          'Status alone proves the contract fully',
          'Together they pin the client promise: right outcome code plus parseable fields',
          'Shape alone proves authorization',
          'Neither matters for frontends'
        ],
        answer: 1,
        explanation: 'A right code with renamed fields still breaks clients, and a right shape with a wrong code still misroutes logic. Both halves are needed.'
      }
    ]
  },

  // ---------------------------------------------------------------- 18.4
  {
    sectionId: 'web-ch18-s4',
    readingTime: 9,
    intro: 'End to end tests drive the real browser through real user journeys that no lower layer can simulate. This section teaches Playwright locators, fixtures, authenticated setup, and visual checks. You will write journeys that survive redesigns instead of breaking on every class rename.',
    objectives: [
      'Locate elements with resilient role based Playwright locators',
      'Share setup with fixtures and page objects',
      'Authenticate once and reuse signed in state across tests',
      'Add visual checks while keeping flakes near zero'
    ],
    concepts: [
      {
        term: 'Resilient Playwright locators',
        kind: 'method',
        statement: '**Locators** like `getByRole` describe what the user perceives rather than how the DOM is built today. Role plus accessible name survives **redesigns** that rename every class and shuffle every div, while CSS selectors break on the first styling pass. Strict locators resolve to **exactly one** element, so ambiguity fails loudly instead of clicking the wrong twin.',
        detail: 'Prefer roles, then labels and placeholders, then text, and reach for test ids only on non semantic chrome. Chain filters like list item scoping to disambiguate repeated cards.'
      },
      {
        term: 'Fixtures and page objects',
        kind: 'method',
        statement: '**Fixtures** prepare isolated `context` per test with storage, viewport, and seeded data ready before the first click. **Page objects** wrap repeated journeys like checkout into named methods, so ten tests share one maintained path. Together they keep specs **declarative**: each test reads as intent while mechanics live in one place.',
        detail: 'Give every test a fresh browser context so cookies and storage never leak. Keep assertions in specs and navigation mechanics in page objects.'
      },
      {
        term: 'Authenticate once with storage state',
        kind: 'method',
        statement: '**Storage state** runs the login journey a single time in `setup` and saves cookies plus storage for every test to reuse. Journeys then start **already signed in**, which cuts minutes of repeated logins and removes the most flaky flow from every spec. Each test still gets **isolation** because the saved state loads into a fresh context per test.',
        detail: 'Re run setup only when auth shapes change and keep the login spec itself as the canary. Never commit real credentials; use a seeded test user.'
      },
      {
        term: 'Visual and snapshot checks',
        kind: 'definition',
        statement: '**Visual checks** screenshot pages or components and diff against an approved `baseline` to catch layout and styling regressions. They complement assertions by seeing what locators cannot: overlap, truncation, and **broken CSS** that leaves the DOM technically correct. Baselines update through **explicit review**, never silently, so every pixel change is a human decision.',
        detail: 'Mask clocks, avatars, and ads that change every run to avoid perpetual diffs. Run visual checks at fixed viewports since responsive layouts differ by width.'
      },
      {
        term: 'Flake resistance through auto waiting',
        kind: 'law',
        statement: '**Auto waiting** means Playwright retries locator actions until the element is attached, visible, stable, and enabled. Tests must therefore assert **states** like visible and enabled rather than inserting fixed `sleep` calls. Sleeps are both slow and **wrong**: too short on loaded machines and wasted time everywhere else.',
        detail: 'Use web first assertions that poll, and reserve manual waits for genuinely time based behavior. Quarantine and fix any test that fails once in a while instead of tolerating it.'
      }
    ],
    examples: [
      {
        title: 'Drive a checkout journey with locators',
        problem: 'A checkout test clicks the wrong add button when two product cards share markup, and it flakes on slow networks.',
        steps: [
          { label: 'Step 1: Scope with roles', text: '```ts\nimport { test, expect } from "@playwright/test"\nconst card = page.getByRole("article", { name: "Brass Lamp" })\nawait card.getByRole("button", { name: "Add to cart" }).click()\n```\nScoping the button inside the named card removes the twin ambiguity.' },
          { label: 'Step 2: Assert states, not sleeps', text: '```ts\nawait expect(page.getByRole("status")).toContainText("Added to cart")\nawait page.getByRole("link", { name: "Checkout" }).click()\nawait expect(page.getByRole("heading", { name: "Checkout" })).toBeVisible()\n```\nWeb first assertions poll until the states hold, adapting to fast and slow runs.' },
          { label: 'Step 3: Finish through a page object', text: '```ts\nawait checkout.complete({ email: "ada@example.com", card: "test-card" })\nawait expect(page.getByRole("heading", { name: "Order confirmed" })).toBeVisible()\n```\nNavigation mechanics live in one maintained method while the spec states intent.' }
        ],
        result: 'The journey clicks the right card every time and passes on fast and loaded machines alike.'
      },
      {
        title: 'Reuse login and add a visual guard',
        problem: 'Every spec logs in through the UI, tripling suite time, and a CSS regression ships unnoticed.',
        steps: [
          { label: 'Step 1: Save auth once', text: '```ts\n// auth.setup.ts\nimport { test } from "@playwright/test"\ntest("authenticate", async ({ page }) => {\n  await page.goto("/login")\n  await page.getByLabel("Email").fill("tester@example.com")\n  await page.getByLabel("Password").fill("test-password")\n  await page.getByRole("button", { name: "Sign in" }).click()\n  await page.context().storageState({ path: "playwright/.auth/user.json" })\n})\n```\nOne journey captures cookies and storage for the whole project to consume.' },
          { label: 'Step 2: Consume it per project', text: '```yaml\n# playwright.config.ts (projects section)\n# webkit project loads the saved state into a fresh context per test\n# { name: "webkit", use: { storageState: "playwright/.auth/user.json" } }\n```\nEach test starts signed in yet isolated in its own context.' },
          { label: 'Step 3: Guard the landing hero visually', text: '```ts\nawait page.goto("/")\nawait expect(page.getByRole("heading", { name: "StudyVerse" })).toBeVisible()\nawait expect(page).toHaveScreenshot("landing-hero.png", { mask: [page.getByTestId("live-clock")] })\n```\nThe mask hides the ticking clock so only real regressions diff.' }
        ],
        result: 'Login runs once, every spec starts signed in, and layout regressions fail with a reviewable diff.'
      }
    ],
    keyTakeaways: [
      'Locate by role plus accessible name so redesigns leave journeys green.',
      'Share mechanics through fixtures and page objects while specs state intent.',
      'Authenticate once in setup and load storage state into fresh contexts per test.',
      'Screenshot stable regions with masked dynamics and review every baseline change.',
      'Assert states with auto waiting and ban fixed sleeps from the suite.'
    ],
    quiz: [
      {
        q: 'Why do role based locators survive redesigns better than CSS selectors?',
        options: [
          'Roles describe user perceived meaning while classes describe current styling',
          'CSS selectors run faster in Playwright',
          'Roles bypass auto waiting',
          'Classes are required for accessibility'
        ],
        answer: 0,
        explanation: 'Styling churn renames classes constantly but preserves roles and names. Locators tied to meaning keep working while style tied ones break.'
      },
      {
        q: 'What does storage state reuse buy the suite?',
        options: [
          'It removes the need for any login test',
          'One login journey serves all specs, cutting time and flake surface',
          'It shares one browser context across tests',
          'It hardcodes passwords into specs'
        ],
        answer: 1,
        explanation: 'Login is the slowest and flakiest flow, so running it once removes repeated cost. Fresh contexts per test preserve isolation while sharing the saved session.'
      },
      {
        q: 'How should dynamic regions be handled in screenshots?',
        options: [
          'Delete the visual tests',
          'Mask clocks, avatars, and ads so only real regressions diff',
          'Update baselines silently on every run',
          'Screenshot only blank pages'
        ],
        answer: 1,
        explanation: 'Perpetually changing pixels diff forever and train teams to ignore failures. Masking dynamics keeps the signal tied to genuine layout change.'
      },
      {
        q: 'A test sleeps a fixed time before asserting. What is the robust replacement?',
        options: [
          'A longer fixed sleep',
          'A web first assertion that polls until the state holds or times out',
          'No assertion at all',
          'Asserting before the action completes'
        ],
        answer: 1,
        explanation: 'Polling assertions finish early on fast runs and keep waiting on slow ones. Fixed sleeps waste time when generous and flake when tight.'
      },
      // Placement-pattern: resilient locator selection (original)
      {
        q: "A test must click the `Place order` button reliably across markup refactors. Which locator is best?",
        options: ["An XPath with positional indexes such as `//div[2]/button[1]`", "A role-based locator naming the button (`getByRole('button', { name: 'Place order' })`), which survives restyling and waits automatically", "The pixel coordinates of the click", "A class name tied to the current stylesheet"],
        answer: 1,
        explanation: "Step 1: The data given is a user-visible action that must survive structural and stylistic churn. Step 2: The governing rules are locator resilience: user-facing role-plus-name queries track the accessibility tree rather than the markup, and the runner auto-waits for actionability before clicking. Step 3: Tracing a refactor that renames divs and classes, the positional and class locators break while the role query still resolves to the same named button and waits for it to enable. Step 4: The distractors fail because indexes shatter on any reorder, coordinates ignore layout entirely, and style classes rename freely. Step 5: Therefore the role-based named locator is the best choice."
      }
    ]
  },

  // ---------------------------------------------------------------- 18.5
  {
    sectionId: 'web-ch18-s5',
    readingTime: 7,
    intro: 'Tests alone do not guarantee quality: style, review, and pipeline gates decide what actually merges. This section separates lint from format, adds typechecking and review checklists, and treats coverage as a signal rather than a target. You will build a red gate pipeline that blocks merges until the codebase is green.',
    objectives: [
      'Split responsibilities between ESLint rules and Prettier formatting',
      'Gate merges on lint plus typecheck plus tests plus build',
      'Review with checklists covering correctness, security, and tests',
      'Read coverage as a signal for untested risk, not a target'
    ],
    concepts: [
      {
        term: 'Lint versus format split',
        kind: 'definition',
        statement: '**Linting** with `ESLint` judges code patterns like unused variables and unsafe awaits, while `Prettier` owns pure formatting like quotes and wrapping. Mixing the two creates **rule fights** where the formatter and the linter rewrite each other output. The split is clean: Prettier **prints** and ESLint **thinks**, with the overlapping format rules disabled.',
        detail: 'Run Prettier with check mode in CI so unformatted code fails the gate. Extend shared configs for React, TypeScript, and accessibility rather than hand rolling fifty rules.'
      },
      {
        term: 'Typecheck as a gate',
        kind: 'method',
        statement: 'The **typecheck** runs `tsc` with no emit to prove every type promise holds across the whole program. It catches **contract drift** between components and APIs that unit tests miss when both sides change together. Gating on typecheck makes `any` escapes and missing null checks **merge blockers** instead of runtime surprises.',
        detail: 'Keep strict mode on and budget any escapes with explicit lint disables. Run typecheck before tests in the pipeline so cheap static failures surface first.'
      },
      {
        term: 'Code review checklist',
        kind: 'method',
        statement: 'A **review checklist** turns senior taste into repeatable `checks` for correctness, security, tests, and readability. Reviewers verify behavior plus edge cases plus **evidence** of passing tests before debating style. Security items like auth guards and parameterized queries get **explicit boxes**, because memory alone skips them under deadline pressure.',
        detail: 'Keep the list short enough to run on every pull request without fatigue. Require an owner for each comment thread so feedback resolves instead of lingering.'
      },
      {
        term: 'Coverage that matters',
        kind: 'insight',
        statement: '**Coverage** measures which lines ran, not whether they were **asserted**, so a high number can still hide untested `catch` branches. Read uncovered lines as **risk pointers** toward error paths and conditionals nobody exercises. Chasing a percentage target invites **assertion free** tests that execute code without checking anything.',
        detail: 'Gate on no uncovered changed lines in pull requests rather than a global number. Pair coverage with mutation spot checks on the most critical modules.'
      },
      {
        term: 'Red gate CI discipline',
        kind: 'law',
        statement: '**Red gate discipline** means no pull request merges while any required `check` is red, with no exceptions for urgency or seniority. Skipped gates teach the team that **quality is optional**, and optional quality evaporates under the first deadline. Main stays **releasable** at every commit because only green code crosses the gate.',
        detail: 'Protect the main branch with required checks plus required reviews. Make the pipeline fast enough that the gate feels like guardrails rather than punishment.'
      }
    ],
    examples: [
      {
        title: 'Wire lint, format, typecheck, and test scripts',
        problem: 'A repo formats by habit and typechecks never, so style debates fill reviews while type errors reach production.',
        steps: [
          { label: 'Step 1: Split the configs', text: '```js\n// eslint.config.js: thinking rules only, formatting left to Prettier\nimport tseslint from "typescript-eslint"\nexport default [...tseslint.configs.recommended, { rules: { "no-unused-vars": "error" } }]\n```\nLint owns correctness patterns while Prettier owns printing, with no overlap.' },
          { label: 'Step 2: Script the gates', text: '```js\n// package.json scripts\n// "lint": "eslint ."\n// "format:check": "prettier --check ."\n// "typecheck": "tsc --noEmit"\n// "test": "vitest run"\n```\nFour commands form the local contract every contributor runs before pushing.' },
          { label: 'Step 3: Prove the split', text: '```bash\nnpm run format:check\nnpm run lint\nnpm run typecheck\nnpm run test\n```\nFormatting fails first in seconds, then patterns, then types, then behavior.' }
        ],
        result: 'Reviews stop debating quotes and start discussing behavior, with types proven before tests run.'
      },
      {
        title: 'Block merges on red with a pipeline',
        problem: 'Broken code merges on Friday because checks are advisory and reviewers wave them through.',
        steps: [
          { label: 'Step 1: Order the stages', text: '```yaml\njobs:\n  quality:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci\n      - run: npm run lint\n      - run: npm run typecheck\n      - run: npm run test\n      - run: npm run build\n```\nCheap static stages run before slow tests and the build proves the bundle compiles.' },
          { label: 'Step 2: Protect the branch', text: '```yaml\n# Branch protection (set in repo settings):\n# required_checks: [lint, typecheck, test, build]\n# required_reviews: 1\n# allow_merge_when_red: false\n```\nRed code cannot merge regardless of urgency, and one human still reviews every change.' },
          { label: 'Step 3: Review with the checklist', text: '```ts\n// Review boxes: behavior correct, edge cases covered, guards present,\n// queries parameterized, tests assert behavior, no secrets in diff\n```\nThe checklist runs the same way on small and large pull requests alike.' }
        ],
        result: 'Main stays green and releasable because only reviewed, formatted, typed, tested, and buildable code crosses.'
      }
    ],
    keyTakeaways: [
      'Let Prettier print and ESLint think, with overlapping format rules disabled.',
      'Gate every merge on lint plus typecheck plus tests plus build in that cost order.',
      'Review against a short checklist with explicit security and test evidence boxes.',
      'Treat uncovered changed lines as risk pointers, never chase a global percentage.',
      'Protect main with required checks and reviews so red code cannot merge.'
    ],
    quiz: [
      {
        q: 'What is the clean split between Prettier and ESLint?',
        options: [
          'Both should enforce formatting together',
          'Prettier owns formatting while ESLint owns code patterns, with overlaps disabled',
          'ESLint should format and Prettier should lint',
          'Neither belongs in CI'
        ],
        answer: 1,
        explanation: 'One printer plus one thinker avoids rule fights. Overlaps disabled means the two tools never rewrite each other output.'
      },
      {
        q: 'Why gate on `tsc --noEmit` in addition to tests?',
        options: [
          'Typechecks replace all tests',
          'It catches contract drift across files that tests miss when both sides change together',
          'It makes builds slower on purpose',
          'Only frontend code needs types'
        ],
        answer: 1,
        explanation: 'Tests assert runtime behavior of the code as written, while the typecheck proves cross file promises. Both layers catch different breakage.'
      },
      {
        q: 'What is wrong with chasing a global coverage percentage?',
        options: [
          'Coverage tools are inaccurate',
          'It rewards assertion free tests that execute lines without checking behavior',
          'High coverage always means slow tests',
          'Coverage cannot measure new code'
        ],
        answer: 1,
        explanation: 'Lines run is not behavior proven. Targets incentivize executing code without asserting it, which inflates the number while risk stays.'
      },
      {
        q: 'What does red gate discipline require?',
        options: [
          'Merges allowed when one check is red if the author is senior',
          'No merges while any required check is red, with main releasable at every commit',
          'Skipping CI on Fridays to ship faster',
          'Reviews without running checks'
        ],
        answer: 1,
        explanation: 'Exceptions teach that quality is optional and it evaporates under pressure. Required checks plus required reviews keep main green.'
      }
    ]
  }
]
